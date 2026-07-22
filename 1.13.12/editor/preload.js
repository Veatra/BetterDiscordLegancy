"use strict";
var D = Object.create;
var _ = Object.defineProperty;
var N = Object.getOwnPropertyDescriptor;
var x = Object.getOwnPropertyNames;
var b = Object.getPrototypeOf,
    P = Object.prototype.hasOwnProperty;
var m = (e, t, n, O) => {
    if (t && typeof t == "object" || typeof t == "function")
        for (let d of x(t)) !P.call(e, d) && d !== n && _(e, d, {
            get: () => t[d],
            enumerable: !(O = N(t, d)) || O.enumerable
        });
    return e
};
var E = (e, t, n) => (n = e != null ? D(b(e)) : {}, m(t || !e || !e.__esModule ? _(n, "default", {
    value: e,
    enumerable: !0
}) : n, e));
var o = E(require("electron"), 1),
    c = E(require("fs"), 1),
    s = E(require("path"), 1);
var T = "bd-get-path";
var I = "bd-editor-show-warning",
    l = "bd-editor-settings-get",
    p = "bd-editor-settings-update";
var i = "";
process.platform === "win32" || process.platform === "darwin" ? i = s.default.join(o.default.ipcRenderer.sendSync(T, "userData"), "..") : i = process.env.XDG_CONFIG_HOME ? process.env.XDG_CONFIG_HOME : s.default.join(process.env.HOME, ".config");
i = s.default.join(i, "BetterDiscord") + "/";
var R = new URLSearchParams(location.search),
    a = R.get("type"),
    S = R.get("filename"),
    r;
a === "custom-css" ? r = s.default.join(i, "data", process.env.DISCORD_RELEASE_CHANNEL, "custom.css") : r = s.default.join(i, `${a}s`, S);
o.default.contextBridge.exposeInMainWorld("Editor", {
    type: a,
    filename: S,
    filepath: r,
    read() {
        return c.default.readFileSync(r, "utf-8")
    },
    open() {
        o.default.shell.openPath(r)
    },
    write(e) {
        c.default.writeFileSync(r, e, "utf-8")
    },
    shouldShowWarning(e) {
        o.default.ipcRenderer.invoke(I, e)
    },
    readText() {
        return o.default.clipboard.readText()
    },
    settings: {
        get: () => o.ipcRenderer.sendSync(l),
        subscribe(e) {
            o.default.ipcRenderer.on(p, (t, n) => {
                e(n)
            })
        },
        setLiveUpdate(e) {
            o.default.ipcRenderer.invoke(p, e)
        }
    }
});