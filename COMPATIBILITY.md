# BetterDiscord 1.13.14 legacy Discord compatibility

## Target

This repository's patched release targets Discord stable **581831 (1f93028)**,
host **1.0.9036 x86**, on Windows 8.1 (6.3.9600). The `1.13.12` directory is
kept as the known-working baseline; changes are limited to `1.13.14`.

## Root cause and retained behavior

Version 1.13.14 introduced `earlyRenderer.js`. The preload executes that file
in Discord's page, the script wraps webpack module factories, and it calls
`BetterDiscordRunRenderer` only after observing a module whose exports include
React's `createElement`. This is useful on current Discord because it exposes
module declarations early and lets BetterDiscord observe lazily registered
modules.

The older Discord webpack runtime does not satisfy every runtime-shape check in
that bootstrap (notably the `e.b` gate). In that case the script returns without
ever calling `BetterDiscordRunRenderer`; consequently `betterdiscord.js` is
present but is never evaluated. This is an injection lifecycle incompatibility,
not a Windows API incompatibility in the renderer bundle itself.

The patch retains the 1.13.14 early bootstrap unchanged so plugins can still
benefit when the runtime supports it. It also schedules the proven 1.13.12-style
main-process injection three seconds after `dom-ready`. Both the modern IPC path
and compatibility timer pass through one `WeakSet` guard, so whichever path wins
injects exactly once per web contents. A failed evaluation removes the guard,
allowing a later navigation to retry, and emits a diagnostic prefixed with
`[BetterDiscord:LegacyCompatibility]`.

## Operational notes

- The three-second delay intentionally gives Discord's legacy module graph time
  to initialize. Plugins that query modules immediately may still need their
  existing delayed-start workaround when Discord itself registers those modules
  later.
- The fallback does not disable lazy-module support, replace the 1.13.14 BdApi,
  or substitute the older 1.13.12 renderer.
- If Discord crashes the renderer, BetterDiscord's existing crash guard still
  suppresses injection. The fallback calls the same guarded method and cannot
  bypass that safety behavior.
- To build a drop-in release, pack the contents of `1.13.14` as the ASAR root;
  `package.json` continues to select `main.js`.
