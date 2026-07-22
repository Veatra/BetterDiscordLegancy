# BetterDiscord 1.13.14 legacy Discord compatibility

## Target

This repository's patched release targets Discord stable **581831 (1f93028)**,
host **1.0.9036 x86**, on Windows 8.1 (6.3.9600). The `1.13.12` directory is
kept as the known-working baseline; changes are limited to `1.13.14`.

## Confirmed compatibility gaps and retained behavior

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

Version 1.13.14 also creates a webpack-readiness promise with
`Promise.withResolvers()` while the renderer bundle is initializing. That API
was added after the Chromium version embedded by Discord Host 1.0.9036. Unlike
the same call in 1.13.12's preload network bridge, this new renderer call is on
the startup path and can stop initialization immediately. A small, generic
polyfill is therefore installed at the beginning of the preload, early page,
and renderer entry points before bundled modules execute.

Early module rewriting already has a fail-safe: the factory parser and generated
factory evaluation are inside a `try`/`catch`, and a parsing failure returns the
original factory. It should not be wrapped in another broad exception handler.
However, original legacy factories do not receive a `declarations` container.
The declaration-filter helper now treats that container as optional and, when it
is absent, checks the module export and its enumerable exported values. This
keeps newer `declarationFilter` consumers functional where the legacy factory
shape permits it, without manufacturing declarations or changing normal modern
results.

Finally, the modern idle-addon lifecycle normally resolves after Discord emits
`appFirstRenderAfterReadyPayload`. The legacy client may expose the module but
never emit that newer metric. A three-second timeout resolves the existing
readiness counter only if it remains pending, allowing `@runAt: "idle"` plugins
to load without racing or double-resolving the normal path.

The patch retains the 1.13.14 early bootstrap unchanged so plugins can still
benefit when the runtime supports it. It also schedules the proven 1.13.12-style
main-process injection three seconds after `dom-ready`. Both the modern IPC path
and compatibility timer pass through one `WeakSet` guard, so whichever path wins
injects exactly once per loaded document. On a later `dom-ready`, the guard is
reset and any stale timer is cancelled so renderer reloads remain supported. A failed evaluation removes the guard,
allowing a later navigation to retry, and emits a diagnostic prefixed with
`[BetterDiscord:LegacyCompatibility]`.

## Operational notes

- The three-second delay intentionally gives Discord's legacy module graph time
  to initialize. Plugins that query modules immediately may still need their
  existing delayed-start workaround when Discord itself registers those modules
  later.
- The compatibility shims do not claim to synthesize modules that this Discord
  build never loads. A plugin which requires a module absent from build 581831
  must still degrade gracefully or be started after Discord loads that module.
- The fallback does not disable lazy-module support, replace the 1.13.14 BdApi,
  or substitute the older 1.13.12 renderer.
- If Discord crashes the renderer, BetterDiscord's existing crash guard still
  suppresses injection. The fallback calls the same guarded method and cannot
  bypass that safety behavior.
- To build a drop-in release, pack the contents of `1.13.14` as the ASAR root;
  `package.json` continues to select `main.js`.

## PingNotification and the supplied console log

The supplied log contains 984 declaration-parser failures. Every shown stack
passes through `0PluginLibrary.plugin.js` at its webpack wrapper. That library
replaces each factory with an arrow function which calls an `originalModule`
closure. Recompiling the wrapper cannot work: the closure is not part of
`Function#toString`, so even a syntactically valid reconstruction would lose the
original factory reference. The early renderer now recognizes that exact
wrapper, leaves it intact, and emits one actionable warning instead of attempting
and logging a failed reconstruction for every Discord module.

Current PingNotification also explicitly checks for ZeresPluginLibrary and says
it will not work while that library is installed. For PingNotification popups,
`0PluginLibrary.plugin.js` must therefore be removed (not merely disabled) and
Discord restarted. This is required in addition to the BetterDiscord patches;
BetterDiscord cannot recover a factory hidden in another plugin's lexical
closure, and it should not break that plugin's wrapper to guess at the factory.

The log's `Cannot convert undefined or null to object` comes from BetterDiscord's
`mapDeclarations` path, not PingNotification. When early instrumentation cannot
produce declarations, mapping now falls back to the module's exports and the
low-level mapper safely accepts a missing source object. The repeated
`togglePopover is not a function` error is caused by the legacy Chromium build
lacking the HTML Popover API; close operations are now feature-tested so the
observer no longer throws. The HTTP 400/401/404, Spotify WebSocket, and interrupted
media playback messages in the log originate from Discord services or media,
not BetterDiscord's webpack compatibility layer.

## PingNotification startup after removing ZeresPluginLibrary

The follow-up pre-start log confirms that BetterDiscord reaches the idle addon
phase and no longer emits declaration-parser failures. The post-start capture
does not contain a PingNotification exception or missing-module notification.
Instead, the plugin remains inside its initial `Promise.all` of seventeen
`Webpack.waitForModule` calls and never reaches its Dispatcher subscriptions.
The later `MESSAGE_CREATE` stack is Discord's own desktop notification path; the
`cannot invoke this event` rejection is from Discord Native notification IPC and
does not contain a PingNotification frame.

On this client, webpack can register lazy factories without executing them. The
normal `waitForModule` implementation searches executed-module exports and then
waits for a future execution. If the legacy UI never visits the feature which
requires a registered factory, a source-based wait remains pending indefinitely.
For BetterDiscord-created filters carrying `strings`, raw-source `searches`,
export `props`, or prototype `fields` metadata, the compatibility path now scans
unexecuted registered factories and requires only candidates containing every
requested token. It then repeats the normal export/declaration search. Candidate
errors are logged at debug level and retain the ordinary lazy listener, so a
failed optional eager load does not reject a plugin or alter unrelated factories.

## Mention-only native notification rejection

The latest post-start log contains one error, originating from Discord modules
`530789` (`NotificationStore.MESSAGE_CREATE`), `479975` (`showNotification`), and
`19575` (the renderer-to-host IPC bridge). It occurs for direct mentions,
`@everyone`, `@here`, role mentions, and channels configured for every-message
notifications because those are precisely the messages for which Discord also
attempts to create an operating-system notification. Keyword-only matches create
the plugin's in-app popup but do not enter Discord's native notification path,
which explains why they do not produce the error.

Host 1.0.9036 does not register the renderer's newer
`DISCORD_NOTIFICATIONS_SEND_NOTIFICATION` IPC event and rejects it with
`cannot invoke this event`. The preload now wraps only that event. On that exact
capability rejection it returns Discord's documented `{delivered: false}` shape,
allowing Discord's own notification utility to continue to its HTML5 fallback.
Other IPC events and other notification errors are rethrown unchanged, and one
diagnostic is emitted when the fallback is first used.

The repository also carries the pinned PingNotification 9.4.5 source as a
drop-in plugin. Its Dispatcher callbacks now route asynchronous popup creation
through `showNotificationSafely`, which attaches message, channel, and guild
context to genuine plugin rendering failures and reports the first failure in
the UI. This does not suppress Discord's native error; it distinguishes future
plugin failures from host IPC failures.

The pre-start `EADDRINUSE` message indicates another Discord/RPC process already
owns port 6463; Discord recovers by selecting port 6464. ChannelTabs, Summarizer,
BDFDB selector warnings, overlay installation, Spotify authorization, and source
map 404 messages are separate plugin, native-module, or service compatibility
issues and do not block PingNotification's in-app popup.
