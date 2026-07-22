"use strict";
var xe = Object.create;
var R = Object.defineProperty;
var Ne = Object.getOwnPropertyDescriptor;
var Ae = Object.getOwnPropertyNames;
var Le = Object.getPrototypeOf,
    Me = Object.prototype.hasOwnProperty;
var G = (t, e) => () => (t && (e = t(t = 0)), e);
var We = (t, e) => {
        for (var s in e) R(t, s, {
            get: e[s],
            enumerable: !0
        })
    },
    $ = (t, e, s, i) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let n of Ae(e)) !Me.call(t, n) && n !== s && R(t, n, {
                get: () => e[n],
                enumerable: !(i = Ne(e, n)) || i.enumerable
            });
        return t
    };
var m = (t, e, s) => (s = t != null ? xe(Le(t)) : {}, $(e || !t || !t.__esModule ? R(s, "default", {
        value: t,
        enumerable: !0
    }) : s, t)),
    He = t => $(R({}, "__esModule", {
        value: !0
    }), t);
var K, Z, X, Y, Q, ee, te, se, ne, oe, ie, re, ae, ce, le, de, b, pe, ue, fe, O, we, me, he, S = G(() => {
    "use strict";
    K = "bd-relaunch-app", Z = "bd-get-path", X = "bd-run-script", Y = "bd-did-navigate-in-page", Q = "bd-open-devtools", ee = "bd-close-devtools", te = "bd-toggle-devtools", se = "bd-open-window", ne = "bd-inspect-element", oe = "bd-minimum-size", ie = "bd-window-size", re = "bd-remove-devtools-message", ae = "bd-open-dialog", ce = "bd-register-preload", le = "bd-get-accent-color", de = "bd-open-path", b = "bd-handle-protocol", pe = "bd-editor-open", ue = "bd-editor-show-warning", fe = "bd-editor-settings-get", O = "bd-editor-settings-update", we = "bd-set-allow-preload-override", me = "bd-get-allow-preload-override", he = "bd-run-renderer"
});
var E, g, V, U, ge, ve, C, Oe = G(() => {
    "use strict";
    E = m(require("fs"), 1), g = m(require("path"), 1), V = require("electron"), U = "fmkadmapgofadopljbjfkapdkoienihi", ge = t => {
        let e = E.default.readdirSync(t);
        return g.default.resolve(t, e[e.length - 1])
    }, ve = t => {
        let e = g.default.resolve(t, "extensions", U);
        if (E.default.existsSync(e)) return E.default.existsSync(g.default.resolve(e, "manifest.json")) ? e : ge(e);
        let s = "";
        if (process.platform === "win32" ? s = g.default.resolve(process.env.LOCALAPPDATA, "Google/Chrome/User Data") : process.platform === "linux" ? s = g.default.resolve(process.env.HOME, ".config/google-chrome") : process.platform === "darwin" ? s = g.default.resolve(process.env.HOME, "Library/Application Support/Google/Chrome") : s = g.default.resolve(process.env.HOME, ".config/chromium"), E.default.existsSync(s + "/Default")) s += `/Default/Extensions/${U}`;
        else {
            let n = E.default.readdirSync(s).filter(u => u.startsWith("Profile") && !u.endsWith("store")),
                c = !1;
            for (let u of n) {
                let l = `${s}/${u}/Extensions/${U}`;
                if (E.default.existsSync(l)) {
                    s = l, c = !0;
                    break
                }
            }
            if (!c) return ""
        }
        return E.default.existsSync(s) && (s = ge(s)), E.default.existsSync(s) ? s : ""
    }, C = class {
        static async install(e) {
            let s = ve(e);
            if (s) try {
                if (!await V.session.defaultSession.loadExtension(s)) return
            } catch {}
        }
        static async remove(e) {
            let s = ve(e);
            if (s) try {
                await V.session.defaultSession.removeExtension(s)
            } catch {}
        }
    }
});
var be = {};
We(be, {
    default: () => d
});
var a, r, f, _e, Ie, N, p, A, d, L = G(() => {
    "use strict";
    a = m(require("fs"), 1), r = m(require("path"), 1), f = m(require("electron"), 1), _e = require("child_process");
    Oe();
    S();
    Ie = f.default.app.getAppPath(), N = r.default.resolve(Ie, "..", "build_info.json"), p = "";
    process.platform === "win32" || process.platform === "darwin" ? p = r.default.join(f.default.app.getPath("userData"), "..") : p = process.env.XDG_CONFIG_HOME ? process.env.XDG_CONFIG_HOME : r.default.join(process.env.HOME, ".config");
    p = r.default.join(p, "BetterDiscord") + "/";
    A = !1, d = class t {
        static _settings;
        static getSetting(e, s) {
            if (this._settings) return this._settings[e]?.[s];
            try {
                let i = require(N),
                    n = r.default.resolve(p, "data", i.releaseChannel, "settings.json");
                return this._settings = require(n) ?? {}, this._settings[e]?.[s]
            } catch {
                return this._settings = {}, this._settings[e]?.[s]
            }
        }
        static clientModCompatibility = class {
            static _settings = void 0;
            static getJSON() {
                if (this._settings) return this._settings;
                try {
                    let s = require(N),
                        i = r.default.resolve(p, "data", s.releaseChannel, "clientModCompatibility.json");
                    return this._settings = JSON.parse(a.default.readFileSync(i, "utf-8"))
                } catch {
                    return this._settings = {}
                }
            }
            static writeJSON() {
                try {
                    let s = require(N),
                        i = r.default.resolve(p, "data", s.releaseChannel, "clientModCompatibility.json");
                    a.default.writeFileSync(i, JSON.stringify(this.getJSON()))
                } catch {}
            }
            static shouldShow() {
                return this.getJSON().shouldShow ?? !0
            }
            static allowPreloadOverride() {
                return this.getJSON().allowPreloadOverride ?? !1
            }
            static stopShowing() {
                this.getJSON().shouldShow = !1, this.writeJSON()
            }
            static setAllowPreloadOverride(s = !1) {
                this.getJSON().allowPreloadOverride = s, this.writeJSON()
            }
        };
        static ensureDirectories() {
            let e = r.default.join(p, "data");
            a.default.existsSync(p) || a.default.mkdirSync(p), a.default.existsSync(e) || a.default.mkdirSync(e), a.default.existsSync(r.default.join(e, "stable")) || a.default.mkdirSync(r.default.join(e, "stable")), a.default.existsSync(r.default.join(e, "canary")) || a.default.mkdirSync(r.default.join(e, "canary")), a.default.existsSync(r.default.join(e, "ptb")) || a.default.mkdirSync(r.default.join(e, "ptb")), a.default.existsSync(r.default.join(e, "development")) || a.default.mkdirSync(r.default.join(e, "development")), a.default.existsSync(r.default.join(p, "plugins")) || a.default.mkdirSync(r.default.join(p, "plugins")), a.default.existsSync(r.default.join(p, "themes")) || a.default.mkdirSync(r.default.join(p, "themes"))
        }
        static async injectRenderer(e) {
            if (A) return;
            let s = r.default.join(__dirname, "betterdiscord.js");
            if (!a.default.existsSync(s)) return;
            let i = a.default.readFileSync(s).toString();
            await e.webContents.executeJavaScript(`
            (() => {
                try {
                    ${i}
                    return true;
                } catch(error) {
                    console.error(error);
                    return false;
                }
            })();
            //# sourceURL=betterdiscord/betterdiscord.js
        `)
        }
        static setup(e) {
            try {
                process.env.DISCORD_RELEASE_CHANNEL = require(N).releaseChannel
            } catch {
                process.env.DISCORD_RELEASE_CHANNEL = "stable"
            }
            if (process.env.BD_DISCORD_PRELOAD = e.__originalPreload, process.env.DISCORD_APP_PATH = Ie, process.env.DISCORD_USER_DATA = f.default.app.getPath("userData"), process.env.BETTERDISCORD_DATA_PATH = p, e.webContents.on("dom-ready", () => {
                    A && (f.default.dialog.showMessageBox({
                        title: "Discord Crashed",
                        type: "warning",
                        message: "Something crashed your Discord Client",
                        detail: `BetterDiscord has automatically disabled itself just in case. To enable it again, restart Discord or click the button below.

This may have been caused by a plugin. Try moving all of your plugins outside the plugin folder and see if Discord still crashed.`,
                        buttons: ["Try Again", "Open Plugins Folder", "Cancel"]
                    }).then(s => {
                        s.response === 0 && (f.default.app.relaunch(), f.default.app.exit()), s.response === 1 && (process.platform === "win32" ? (0, _e.spawn)("explorer.exe", [r.default.join(p, "plugins")]) : f.default.shell.openPath(r.default.join(p, "plugins")))
                    }), A = !1)
                }), e.webContents.on("did-navigate-in-page", () => {
                    e.webContents.send(Y)
                }), e.webContents.on("render-process-gone", () => {
                    A = !0
                }), f.default.app.setAsDefaultProtocolClient("betterdiscord")) {
                let s = process.argv.find(i => i.startsWith("betterdiscord://"));
                s && (process.env.BETTERDISCORD_PROTOCOL = s), f.default.app.on("open-url", (i, n) => {
                    n.startsWith("betterdiscord://") && e.webContents.send(b, n)
                }), f.default.app.on("second-instance", (i, n) => {
                    if (n.includes("--multi-instance")) return;
                    let c = n.find(u => u.startsWith("betterdiscord://"));
                    c && e.webContents.send(b, c)
                })
            }
        }
        static disableMediaKeys() {
            if (!t.getSetting("general", "mediaKeys")) return;
            let e = f.default.app.commandLine.getSwitchValue("disable-features") || "";
            f.default.app.commandLine.appendSwitch("disable-features", `${e?",":""}HardwareMediaKeyHandling,MediaSessionService`)
        }
    };
    d.getSetting("developer", "reactDevTools") && f.default.app.whenReady().then(async () => {
        await C.install(p)
    });
    Object.defineProperty(global, "appSettings", {
        set(t) {
            t.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING", !0), d.getSetting("window", "removeMinimumSize") ? (t.set("MIN_WIDTH", 0), t.set("MIN_HEIGHT", 0)) : (t.set("MIN_WIDTH", 940), t.set("MIN_HEIGHT", 500)), delete global.appSettings, global.appSettings = t
        },
        configurable: !0,
        enumerable: !1
    })
});
var T = require("electron"),
    ye = m(require("path"), 1),
    q = m(require("fs"), 1);
var Se = require("child_process"),
    o = require("electron");
S();
var _ = require("electron"),
    k = m(require("path"), 1),
    Ee = require("url");
S();
var h = class {
    static windows = {
        theme: {},
        plugin: {}
    };
    static _options;
    static open(e, s) {
        let i = !!this._options,
            n = e === "custom-css" ? this.windows["custom-css"] : this.windows[e][s];
        if (i && n) return n.webContents.isLoading() || n.show(), this._options.webContents;
        if (typeof n > "u" || n.isDestroyed()) {
            n = new _.BrowserWindow({
                ...this._options,
                frame: !0,
                center: !0,
                show: !1,
                webPreferences: {
                    ...this._options?.webPreferences,
                    preload: k.default.join(__dirname, "editor/preload.js"),
                    sandbox: !1,
                    allowRunningInsecureContent: !0,
                    webSecurity: !1
                }
            }), this._options = null, n.setMenu(null);
            let c = (0, Ee.pathToFileURL)(k.default.join(__dirname, "editor/index.html"));
            c.searchParams.set("type", e), c.searchParams.set("filename", s || "custom.css"), i ? n.webContents.once("will-navigate", l => {
                l.preventDefault(), n.loadURL(c.href), n.once("ready-to-show", () => {
                    n.show()
                })
            }) : (n.once("ready-to-show", () => {
                n.show()
            }), n.loadURL(c.href));
            let u = !1;
            if (n.webContents.ipc.handle(ue, (l, w) => {
                    u = w
                }), n.on("close", l => {
                    if (!u) return;
                    l.preventDefault(), _.dialog.showMessageBoxSync(n, {
                        type: "question",
                        title: "Close Editor?",
                        message: "Changes you made are not saved",
                        buttons: ["Close", "Cancel"],
                        cancelId: 1,
                        defaultId: 1,
                        normalizeAccessKeys: !0
                    }) || (u = !1, n.close())
                }), n.webContents.ipc.handle(O, (l, w) => {
                    this._window && this._window.webContents.send(O, w)
                }), n.webContents.setWindowOpenHandler(l => (_.shell.openExternal(l.url), {
                    action: "deny"
                })), this._window) {
                let l = () => {
                    u = !1, n.close()
                };
                this._window.once("closed", l), n.once("close", () => {
                    this._window.off("closed", l), e === "custom-css" ? delete this.windows["custom-css"] : delete this.windows[e][s]
                })
            }
            e === "custom-css" ? this.windows["custom-css"] = n : this.windows[e][s] = n
        }
        return n.webContents.isLoading() || n.show(), n.webContents
    }
    static isValidWindow(e) {
        return e instanceof _.BrowserWindow && !e.isDestroyed()
    }
    static #e = {
        options: {
            theme: "vs-dark"
        },
        liveUpdate: !1,
        discordTheme: "dark"
    };
    static updateSettings(e) {
        this.#e = e, this.isValidWindow(this.windows["custom-css"]) && this.windows["custom-css"].webContents.send(O, e);
        for (let s of ["theme", "plugin"])
            for (let i in this.windows[s])
                if (Object.prototype.hasOwnProperty.call(this.windows[s], i)) {
                    let n = this.windows[s][i];
                    this.isValidWindow(n) && n.webContents.send(O, e)
                }
    }
    static getSettings() {
        return this.#e
    }
    static _window;
    static initialize(e) {
        this._window = e
    }
};
L();
var Be = (t, e) => {
        let s;
        switch (e) {
            case "appPath":
                s = o.app.getAppPath();
                break;
            case "appData":
            case "userData":
            case "home":
            case "cache":
            case "temp":
            case "exe":
            case "module":
            case "desktop":
            case "documents":
            case "downloads":
            case "music":
            case "pictures":
            case "videos":
            case "recent":
            case "logs":
                s = o.app.getPath(e);
                break;
            default:
                s = ""
        }
        t.returnValue = s
    },
    je = (t, e) => {
        process.platform === "win32" ? (0, Se.spawn)("explorer.exe", [e]) : o.shell.openPath(e)
    },
    Ge = (t, e = []) => {
        o.app.relaunch({
            args: process.argv.slice(1).concat(Array.isArray(e) ? e : [e])
        }), o.app.quit()
    },
    ke = async (t, e) => {
        try {
            await t.sender.executeJavaScript(`(() => {try {${e}} catch {}})();`)
        } catch {}
    }, Ce = t => t.sender.openDevTools(), Pe = t => t.sender.closeDevTools(), Ue = t => {
        t.sender.isDevToolsOpened() ? Pe(t) : Ce(t)
    }, Ve = (t, e, {
        windowOptions: s,
        closeOnUrl: i
    } = {}) => new Promise(n => {
        let c = new o.BrowserWindow(s);
        c.webContents.on("did-navigate", (u, l) => {
            l == i && (c.close(), n())
        }), c.loadURL(e)
    }), Fe = async t => {
        if (!t.sender.isDevToolsOpened())
            for (t.sender.openDevTools(); !t.sender.isDevToolsOpened();) await new Promise(e => setTimeout(e, 100));
        t.sender.devToolsWebContents?.executeJavaScript("DevToolsAPI.enterInspectElementMode();")
    }, ze = (t, e, s) => {
        o.BrowserWindow.fromWebContents(t.sender)?.setMinimumSize(e, s)
    }, qe = (t, e, s) => {
        o.BrowserWindow.fromWebContents(t.sender)?.setSize(e, s)
    }, Je = () => (process.platform == "win32" || process.platform == "darwin") && o.systemPreferences.getAccentColor() || "", $e = t => t.sender.removeAllListeners("devtools-opened"), Ke = (t, e = {}) => {
        let {
            mode: s = "open",
            openDirectory: i = !1,
            openFile: n = !0,
            multiSelections: c = !1,
            filters: u,
            promptToCreate: l = !1,
            defaultPath: w,
            title: H,
            showOverwriteConfirmation: I,
            message: B,
            showHiddenFiles: y,
            modal: Re = !1
        } = e, J = {
            open: o.dialog.showOpenDialog,
            save: o.dialog.showSaveDialog
        } [s];
        return J ? J(...[Re && o.BrowserWindow.fromWebContents(t.sender), {
            defaultPath: w,
            filters: u,
            title: H,
            message: B,
            createDirectory: !0,
            properties: [y && "showHiddenFiles", i && "openDirectory", l && "promptToCreate", i && "openDirectory", n && "openFile", c && "multiSelections", I && "showOverwriteConfirmation"].filter(j => j)
        }].filter(j => j)) : Promise.resolve({
            error: "Unkown Mode: " + s
        })
    }, Ze = (t, e) => {
        o.app.commandLine.appendSwitch("preload", e)
    }, Xe = (t, e, s) => {
        h.open(e, s)
    }, Ye = (t, e) => {
        h.updateSettings(e)
    }, Qe = t => {
        t.returnValue = h.getSettings()
    }, et = t => d.clientModCompatibility.allowPreloadOverride(), tt = (t, e) => d.clientModCompatibility.setAllowPreloadOverride(e), st = t => {
        d.injectRenderer(o.BrowserWindow.fromWebContents(t.sender))
    }, P = class {
        static registerEvents() {
            try {
                o.ipcMain.on(Z, Be), o.ipcMain.on(de, je), o.ipcMain.on(K, Ge), o.ipcMain.on(Q, Ce), o.ipcMain.on(ee, Pe), o.ipcMain.on(te, Ue), o.ipcMain.on(ne, Fe), o.ipcMain.on(oe, ze), o.ipcMain.on(ie, qe), o.ipcMain.on(re, $e), o.ipcMain.on(ce, Ze), o.ipcMain.on(fe, Qe), o.ipcMain.handle(le, Je), o.ipcMain.handle(X, ke), o.ipcMain.handle(ae, Ke), o.ipcMain.handle(se, Ve), o.ipcMain.handle(pe, Xe), o.ipcMain.handle(O, Ye), o.ipcMain.handle(me, et), o.ipcMain.handle(we, tt), o.ipcMain.handle(he, st)
            } catch (e) {
                console.error(e)
            }
        }
    };
var v = m(require("electron"), 1),
    De = m(require("path"), 1);
L();
S();
var F = require("util/types");

function nt() {
    if ((0, F.isProxy)(v.default) || (0, F.isProxy)(v.default.BrowserWindow)) return !0;
    let t = v.default.BrowserWindow.toString(),
        e = t.indexOf("extends");
    return e === -1 ? !1 : e < t.indexOf("{")
}
var D = class extends v.default.BrowserWindow {
    __originalPreload;
    constructor(e) {
        if (!e || !e.webPreferences || !e.webPreferences.preload || !e.title) return super(e);
        nt() && d.clientModCompatibility.shouldShow() && v.default.dialog.showMessageBox({
            type: "warning",
            title: "BetterDiscord Compatibility Warning",
            message: "BetterDiscord has detected another client mod. This may cause issues with BetterDiscord and/or the other mod. Please remove any other client mods to ensure the best experience.",
            checkboxLabel: "Don't show this again",
            buttons: ["OK"],
            defaultId: 0
        }).then(w => {
            w.checkboxChecked && d.clientModCompatibility.stopShowing()
        });
        let s = e.webPreferences.preload,
            i = e.webPreferences.preload = De.default.join(__dirname, "preload.js");
        Object.defineProperty(e.webPreferences, "preload", {
            get: () => i,
            set(w) {
                d.clientModCompatibility.allowPreloadOverride() && (i = w)
            }
        });
        let n = d.getSetting("window", "transparency");
        typeof n == "boolean" && n && (e.transparent = !0, e.backgroundColor = "#00000000");
        let c = !!(d.getSetting("window", "inAppTrafficLights") ?? !1);
        process.env.BETTERDISCORD_NATIVE_FRAME = e.frame = !!(d.getSetting("window", "frame") ?? e.frame ?? !0), process.env.BETTERDISCORD_IN_APP_TRAFFIC_LIGHTS = c, c && delete e.titleBarStyle;
        let u = !!(d.getSetting("window", "removeMinimumSize") ?? !1);
        u && (e.minWidth = 0, e.minHeight = 0), super(e), u && (this.setMinimumSize = () => {}), this.__originalPreload = s, d.setup(this), h.initialize(this);
        let l = this;
        this.webContents.setWindowOpenHandler = new Proxy(this.webContents.setWindowOpenHandler, {
            apply(w, H, I) {
                let B = I[0];
                return I[0] = function(y) {
                    return y.url.startsWith("betterdiscord://") ? (l.webContents.send(b, y.url), {
                        action: "deny"
                    }) : B.apply(this, arguments)
                }, Reflect.apply(w, H, I)
            }
        })
    }
};
Object.assign(D, v.default.BrowserWindow);
Object.defineProperty(D, "name", {
    value: "BrowserWindow",
    configurable: !0
});
var M = class {
    static patchBrowserWindow() {
        let t = require.resolve("electron");
        delete require.cache[t].exports, require.cache[t].exports = {
            ...v.default,
            BrowserWindow: D
        }
    }
};
var z = m(require("electron"), 1),
    W = class {
        static _onHeadersReceived = null;
        static get onHeadersReceived() {
            return this._onHeadersReceived ??= z.default.session.fromPartition(`bd:${Date.now()}:${Math.random()}`).webRequest.onHeadersReceived
        }
        static remove() {
            this.onHeadersReceived.call(z.default.session.defaultSession.webRequest, (t, e) => {
                if (!t.responseHeaders) return e({
                    cancel: !1
                });
                let s = Object.keys(t.responseHeaders);
                for (let i = 0; i < s.length; i++) {
                    let n = s[i];
                    n.toLowerCase().indexOf("content-security-policy") === 0 && delete t.responseHeaders[n]
                }
                e({
                    cancel: !1,
                    responseHeaders: t.responseHeaders
                })
            })
        }
    };
var ot = T.app.getAppPath(),
    Te = ye.default.resolve(ot, "..", "app");
q.default.existsSync(Te) && (q.default.rmdirSync(Te, {
    recursive: !0
}), T.app.quit(), T.app.relaunch());
if (!process.argv.includes("--vanilla")) {
    process.env.NODE_OPTIONS = "--no-force-async-hooks-checks", T.app.commandLine.appendSwitch("no-force-async-hooks-checks"), M.patchBrowserWindow(), P.registerEvents();
    try {
        W.remove()
    } catch {}
}
if (!process.argv.includes("--vanilla")) {
    let t = (L(), He(be)).default;
    t.disableMediaKeys(), t.ensureDirectories()
}