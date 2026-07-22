"use strict";
var xe = Object.create;
var j = Object.defineProperty;
var Ee = Object.getOwnPropertyDescriptor;
var Te = Object.getOwnPropertyNames;
var he = Object.getPrototypeOf,
    Se = Object.prototype.hasOwnProperty;
var E = (e, t) => {
        for (var r in t) j(e, r, {
            get: t[r],
            enumerable: !0
        })
    },
    Oe = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of Te(t)) !Se.call(e, o) && o !== r && j(e, o, {
                get: () => t[o],
                enumerable: !(n = Ee(t, o)) || n.enumerable
            });
        return e
    };
var u = (e, t, r) => (r = e != null ? xe(he(e)) : {}, Oe(t || !e || !e.__esModule ? j(r, "default", {
    value: e,
    enumerable: !0
}) : r, e));
var h = require("electron");

function C(e) {
    let t = [];
    for (let r in e) t.push(r);
    return t
}

function x(e, t = {}, r) {
    return Array.isArray(r) || (r = C(e)), r.reduce((n, o) => (typeof e[o] == "object" && !Array.isArray(e[o]) && e[o] !== null ? n[o] = x(e[o], {}) : typeof e[o] == "function" ? n[o] = e[o].bind(e) : n[o] = e[o], n), t)
}
var S = x(process, {}, C(process).filter(e => e !== "config"));
S.versions.nodejs = S.versions.node;
delete S.versions.node;
S.isWeb = !0;
var J = S;
var V = {};
E(V, {
    addProtocolListener: () => nt,
    crypto: () => U,
    editor: () => M,
    electron: () => B,
    filesystem: () => q,
    https: () => Q,
    nativeFetch: () => Xe,
    net: () => it,
    os: () => at,
    path: () => st,
    setDevToolsWarningState: () => ot,
    vm: () => W
});
var q = {};
E(q, {
    createDirectory: () => Ae,
    createWriteStream: () => Be,
    deleteDirectory: () => _e,
    exists: () => Pe,
    getRealPath: () => Ce,
    getStats: () => We,
    readDirectory: () => Ie,
    readFile: () => we,
    rename: () => ke,
    renameSync: () => Le,
    rm: () => Ne,
    rmSync: () => je,
    unlinkSync: () => qe,
    watch: () => Ue,
    writeFile: () => De
});
var s = u(require("fs"), 1);
var ve = {
        err: "error",
        error: "error",
        dbg: "debug",
        debug: "debug",
        log: "log",
        warn: "warn",
        info: "info"
    },
    O = class e {
        static stacktrace(t, r, n) {
            console.error(`%c[${t}]%c ${r}

%c`, "color: #3a71c1; font-weight: 700;", "color: red; font-weight: 700;", "color: red;", n)
        }
        static err(t, ...r) {
            e._log(t, r, "error")
        }
        static error(t, ...r) {
            e._log(t, r, "error")
        }
        static warn(t, ...r) {
            e._log(t, r, "warn")
        }
        static info(t, ...r) {
            e._log(t, r, "info")
        }
        static debug(t, ...r) {
            e._log(t, r, "debug")
        }
        static log(t, ...r) {
            e._log(t, r)
        }
        static _log(t, r, n = "log") {
            let o = e.parseType(n);
            Array.isArray(r) || (r = [r]), console[o](`%c[BetterDiscord]%c [${t}]%c`, "color: #3E82E5; font-weight: 700;", "color: #3a71c1;", "", ...r)
        }
        static parseType(t) {
            return ve[t] || "log"
        }
    };

function we(e, t = "utf8") {
    return s.readFileSync(e, t)
}

function De(e, t, r) {
    return t instanceof Uint8Array && (t = Buffer.from(t)), (r?.originalFs ? require("original-fs").writeFileSync : s.writeFileSync)(e, t, r)
}

function Ie(e, t) {
    return s.readdirSync(e, t)
}

function Ae(e, t) {
    return s.mkdirSync(e, t)
}

function _e(e, t) {
    s.rmdirSync(e, t)
}

function Pe(e) {
    return s.existsSync(e)
}

function Ce(e, t) {
    return s.realpathSync(e, t)
}

function ke(e, t) {
    return s.renameSync(e, t)
}

function Le(e, t) {
    return s.renameSync(e, t)
}

function Ne(e) {
    return s.rmSync(e)
}

function je(e) {
    return s.rmSync(e)
}

function qe(e) {
    return s.unlinkSync(e)
}

function Be(e, t) {
    return x(s.createWriteStream(e, t))
}

function Ue(e, t, r) {
    let n = s.watch(e, t, (o, i) => {
        try {
            r(o, i)
        } catch (l) {
            O.stacktrace("filesystem", "Failed to watch path", l)
        }
    });
    return {
        close: () => {
            n.close()
        }
    }
}

function We(e, t) {
    let r = s.statSync(e, t);
    return {
        ...r,
        isFile: r.isFile.bind(r),
        isDirectory: r.isDirectory.bind(r),
        isSymbolicLink: r.isSymbolicLink.bind(r)
    }
}
var Bt = require("fs"),
    X = u(require("https"), 1),
    Ut = require("http"),
    Me = ["get", "put", "post", "delete", "head"],
    Ge = new Set([301, 302, 307, 308]),
    Fe = ["statusCode", "statusMessage", "url", "headers", "method", "aborted", "complete", "rawHeaders"],
    Z = (e, t, r, n) => {
        let o = X.request(e, Object.assign({
            method: "GET"
        }, t), i => {
            if (Ge.has(i.statusCode ?? 0) && i.headers.location) {
                let p = new URL(i.headers.location);
                for (let [y, P] of new URL(e).searchParams.entries()) p.searchParams.set(y, P);
                return Z(p.toString(), t, r, n)
            }
            let l = [],
                g = null;
            n(i, o), i.addListener("error", p => {
                g = p
            }), i.addListener("data", p => {
                l.push(p)
            }), i.addListener("end", () => {
                let p = Object.fromEntries(Fe.map(y => [y, i[y]]));
                r(g, p, Buffer.concat(l)), o.end()
            })
        });
        if (t.formData) try {
            o.write(t.formData)
        } finally {
            o.end()
        } else o.end();
        o.on("error", i => r(i))
    },
    K = function(e, t, r) {
        let n = null,
            o = null,
            i = null;
        return Z(e, t, r, (l, g) => {
            o = g, n = l, i && l.pipe(i)
        }), {
            end() {
                o?.end()
            },
            pipe(l) {
                n ? n.pipe(l) : i = l
            }
        }
    },
    Q = Object.assign({
        request: K
    }, Object.fromEntries(Me.map(e => [e, function(...t) {
        return t[1] ??= {}, t[1].method ??= e.toUpperCase(), Reflect.apply(K, this, t)
    }])));
var B = {};
E(B, {
    ipcRenderer: () => He,
    shell: () => c.shell,
    webUtils: () => c.webUtils
});
var c = require("electron"),
    He = {
        send: c.ipcRenderer.send.bind(c.ipcRenderer),
        sendToHost: c.ipcRenderer.sendToHost.bind(c.ipcRenderer),
        sendSync: c.ipcRenderer.sendSync.bind(c.ipcRenderer),
        invoke: c.ipcRenderer.invoke.bind(c.ipcRenderer),
        on: c.ipcRenderer.on.bind(c.ipcRenderer),
        off: c.ipcRenderer.off.bind(c.ipcRenderer)
    };
var U = {};
E(U, {
    createHash: () => ze,
    randomBytes: () => Ve
});
var Y = (() => {
    let e = null;
    return () => e || (e = require("crypto"))
})();

function ze(e) {
    let t = Y().createHash(e),
        r = {
            update(n) {
                return t.update(n), r
            },
            digest(n) {
                return t.digest(n)
            }
        };
    return r
}

function Ve(e) {
    return Y().randomBytes(e)
}
var W = {};
E(W, {
    compileFunction: () => $e
});
var ee = u(require("vm"), 1);

function $e(e, t = [], r = {}) {
    try {
        return ee.default.compileFunction(e, t, r)
    } catch (n) {
        let o = n;
        return {
            name: o.name,
            message: o.message,
            stack: o.stack
        }
    }
}
var ne = u(require("https"), 1),
    oe = u(require("http"), 1);

function te(e) {
    let r = new Response(e).body.getReader();
    return {
        read: () => r.read(),
        cancel: () => r.cancel()
    }
}

function re(e) {
    return new ReadableStream({
        async start(t) {
            for (;;) {
                let {
                    done: r,
                    value: n
                } = await e.read();
                if (r) {
                    t.close();
                    break
                } else t.enqueue(n)
            }
        },
        type: "bytes"
    })
}
var Je = new Set([301, 302, 307, 308]),
    Ke = new Set([101, 204, 205, 304]);

function Xe({
    url: e,
    signal: t,
    body: r,
    ...n
}) {
    let {
        promise: o,
        resolve: i,
        reject: l
    } = Promise.withResolvers(), g = n.maxRedirects ?? 20, p = r ? re(r) : null, y = 0;

    function P(f, m) {
        let d = m.statusCode ?? 0,
            a = null;
        return Ke.has(d) || (a = new ReadableStream({
            start(b) {
                m.on("data", R => b.enqueue(R)), m.on("error", R => b.error(R)), m.once("end", () => b.close())
            },
            type: "bytes"
        })), {
            body: a ? te(a) : null,
            url: f,
            headers: m.headers,
            status: d,
            statusText: m.statusMessage || "",
            redirected: y !== 0
        }
    }
    let be = (f => n.timeout === null && !isFinite(f) ? void 0 : f)(n.timeout ?? 3e3);
    async function $(f) {
        let m = f.startsWith("http:") ? oe.default : f.startsWith("https:") ? ne.default : null;
        if (!m) {
            l(new Error(`Unsupported protocol: ${f.slice(0,f.indexOf(":"))}:`));
            return
        }
        let d = m.request(f, {
            headers: n.headers,
            method: n.method,
            timeout: be,
            rejectUnauthorized: n.rejectUnauthorized
        }, a => {
            if (Je.has(a.statusCode)) {
                if (n.redirect === "error") {
                    d.destroy(new Error("Failed to fetch"));
                    return
                }
                if (n.redirect === "manual") {
                    i(P(f, a));
                    return
                }
                if (y >= g) {
                    l(new Error(`Maximum amount of redirects reached (${g})`));
                    return
                }
                if (a.headers.location) {
                    let b;
                    try {
                        b = new URL(a.headers.location)
                    } catch (R) {
                        l(R);
                        return
                    }
                    for (let [R, Re] of new URL(f).searchParams) b.searchParams.set(R, Re);
                    return y++, $(b.href)
                }
            }
            i(P(f, a))
        });
        if (d.shouldKeepAlive = n.keepalive, t) {
            let a = t.addListener(() => {
                d.destroy(t.reason() || new Error("Request was aborted"))
            });
            d.once("close", () => a())
        }
        if (d.once("timeout", () => d.destroy(new Error("Request timed out"))), d.once("error", a => l(a)), p) try {
            for await (let a of p) d.write(a);
            d.end()
        } catch (a) {
            d.destroy(a)
        } else d.end()
    }
    return $(e), o
}
var st = u(require("path"), 1),
    it = u(require("net"), 1),
    at = u(require("os"), 1);
var M = {};
E(M, {
    onLiveUpdateChange: () => Ye,
    open: () => Ze,
    updateSettings: () => Qe
});
var se = "bd-get-path";
var ie = "bd-register-preload";
var ae = "bd-handle-protocol",
    ce = "bd-editor-open";
var k = "bd-editor-settings-update";
var le = "bd-run-renderer";
var w = require("electron");

function Ze(e, t) {
    w.ipcRenderer.invoke(ce, e, t)
}

function Qe(e) {
    w.ipcRenderer.invoke(k, e)
}

function Ye(e) {
    function t(r, n) {
        e(n)
    }
    return w.ipcRenderer.on(k, t), () => {
        w.ipcRenderer.off(k, t)
    }
}
var ue = u(require("electron"), 1);
var _ = u(require("electron"), 1),
    D = u(require("path"), 1);
var I = "";
process.platform === "win32" || process.platform === "darwin" ? I = D.default.join(_.default.ipcRenderer.sendSync(se, "userData"), "..") : I = process.env.XDG_CONFIG_HOME ? process.env.XDG_CONFIG_HOME : D.default.join(process.env.HOME, ".config");
I = D.default.join(I, "BetterDiscord") + "/";
var T;

function et(e, t) {
    if (T) return T[e]?.[t];
    try {
        let r = D.default.resolve(I, "data", process.env.DISCORD_RELEASE_CHANNEL, "settings.json");
        return T = require(r) ?? {}, T[e]?.[t]
    } catch {
        return T = {}, T[e]?.[t]
    }
}
var {
    exposeInMainWorld: tt
} = _.default.contextBridge, G, F, H = !1, A = et("developer", "devToolsWarning");
typeof A != "boolean" && (A = !1);
var rt = {
        ..._.default.contextBridge,
        exposeInMainWorld(e, t) {
            e === "DiscordNative" && (t.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS = process.platform === "darwin" && process.env.BETTERDISCORD_IN_APP_TRAFFIC_LIGHTS === "false", t.window.setDevtoolsCallbacks(() => {
                H = !0, A || G?.()
            }, () => {
                H = !1, A || F?.()
            }), t.window.setDevtoolsCallbacks = (r, n) => {
                G = r, F = n
            }), tt(e, t)
        }
    },
    z = class {
        static setDevToolsWarningState(t) {
            A = t, H && (t ? F?.() : G?.())
        }
        static injectCSS() {
            if (process.env.BETTERDISCORD_NATIVE_FRAME === "false") return;
            let t = new global.MutationObserver(() => {
                if (global.document.body) {
                    t.disconnect();
                    let r = global.document.createElement("style");
                    r.textContent = `
                    #app-mount > div[class*=titleBar_], div[class*="winButtons_"] { display: none !important; }
                    .platform-osx nav[class*=wrapper_][class*=guilds_] {margin-top: 0;}
                    .platform-win div[class*=content_] > div[class*=sidebar_] {border-radius: 0;}
                `, global.document.body.append(r)
                }
            });
            t.observe(global.document, {
                childList: !0,
                subtree: !0
            })
        }
        static patch() {
            let t = require.resolve("electron");
            delete require.cache[t].exports, require.cache[t].exports = new Proxy(_.default, {
                get(r, n, o) {
                    return n === "contextBridge" ? rt : Reflect.get(r, n, o)
                }
            })
        }
        static init() {
            this.injectCSS(), this.patch()
        }
    },
    L = z;
var {
    BETTERDISCORD_PROTOCOL: de
} = process.env;
delete process.env.BETTERDISCORD_PROTOCOL;

function nt(e) {
    de && process.nextTick(() => e(de)), ue.default.ipcRenderer.on(ae, (t, r) => e(r))
}

function ot(e) {
    L.setDevToolsWarningState(e)
}
var N = require("electron"),
    fe = u(require("fs"), 1),
    pe = u(require("path"), 1);

function me() {
    N.webFrame.top?.executeJavaScript(`(() => {${fe.default.readFileSync(pe.default.join(__dirname,"earlyRenderer.js"),"utf8")}})()`).catch(() => {});
    let e = process.env.BD_DISCORD_PRELOAD;
    if (e) {
        N.ipcRenderer.send(ie, e);
        try {
            let t = process.kill;
            process.kill = function(r, n) {
                return !0
            }, require(e), process.kill = t
        } catch {}
    }
}
L.init();
var ye = !1;
h.contextBridge.exposeInMainWorld("process", J);
h.contextBridge.exposeInMainWorld("BetterDiscordPreload", () => ye ? null : (ye = !0, V));
var ge = !1;
h.contextBridge.exposeInMainWorld("BetterDiscordRunRenderer", () => {
    if (ge) return null;
    ge = !0, h.ipcRenderer.invoke(le)
});
me();