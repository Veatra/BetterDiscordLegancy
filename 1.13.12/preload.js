"use strict";
var Ee = Object.create;
var G = Object.defineProperty;
var Se = Object.getOwnPropertyDescriptor;
var Oe = Object.getOwnPropertyNames;
var _e = Object.getPrototypeOf,
    ve = Object.prototype.hasOwnProperty;
var _ = (e, t) => {
        for (var r in t) G(e, r, {
            get: t[r],
            enumerable: !0
        })
    },
    De = (e, t, r, o) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let n of Oe(t)) !ve.call(e, n) && n !== r && G(e, n, {
                get: () => t[n],
                enumerable: !(o = Se(t, n)) || o.enumerable
            });
        return e
    };
var R = (e, t, r) => (r = e != null ? Ee(_e(e)) : {}, De(t || !e || !e.__esModule ? G(r, "default", {
    value: e,
    enumerable: !0
}) : r, e));
var Y = require("electron");
var ee = require("electron");

function te() {
    let e = function() {
        let t = "webpackChunkdiscord_app",
            r = function(o, n, c) {
                let u = o[n];
                Object.defineProperty(o, n, {
                    get() {
                        return u
                    },
                    set(h) {
                        Object.defineProperty(o, n, {
                            value: h,
                            configurable: !0,
                            enumerable: !0,
                            writable: !0
                        });
                        try {
                            c(h)
                        } catch (y) {
                            console.error(y)
                        }
                        return h
                    },
                    configurable: !0
                })
            };
        Reflect.has(window, t) || r(window, t, o => {
            o.push([
                [Symbol()], {},
                n => {
                    if (!n.b) return;
                    n.d = (s, i) => {
                        for (let f in i)
                            if (Reflect.has(i, f) && !Reflect.has(s, f)) try {
                                Object.defineProperty(s, f, {
                                    get: () => i[f](),
                                    set: d => {
                                        i[f] = () => d
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                })
                            } catch (d) {
                                console.error(d)
                            }
                    };
                    let c = /^\d+(?:e\d+)?\((.{1,3}),.{1,3},.{1,3}\){("use strict";)?\1.exports={.+}}$/,
                        u = /^(.+?)_/,
                        h = /\((\d+)\)\.newStemmer\("english"\);/;

                    function y(s) {
                        let i = String(s);
                        if (c.test(i)) {
                            let g = function(l, T, S) {
                                if (s.__BD__ ? s.__BD__.originalModule.call(this, l, T, S) : s.call(this, l, T, S), !Object.values(l.exports).every(E => typeof E == "string")) {
                                    s.__BD__ && s.__BD__.runListeners.call(this, l, T, S);
                                    return
                                }
                                let w = {
                                    [Symbol.for("BetterDiscord.Polyfilled.class")]: {
                                        value: !0
                                    }
                                };
                                for (let E in l.exports) {
                                    if (!Object.hasOwn(l.exports, E)) continue;
                                    let m = l.exports[E];
                                    if (typeof m == "string") {
                                        let U = m.match(u);
                                        if (!U || U[1] in l.exports) continue;
                                        w[U[1]] = {
                                            value: m,
                                            enumerable: !0
                                        }, w[E] = {
                                            value: m,
                                            enumerable: !1
                                        }
                                    }
                                }
                                Object.defineProperties(l.exports, w), s.__BD__ && s.__BD__.runListeners.call(this, l, T, S)
                            };
                            var d = g;
                            return g.toString = () => s.toString(), g
                        }
                        let f = i.match(h);
                        if (f) {
                            let g = function(l, T, S) {
                                n && (n.m[f[1]] || (n.m[f[1]] = function(w) {
                                    w.exports.newStemmer = () => ({
                                        stem(E) {
                                            if (typeof E != "string") return E;
                                            let m = E.toLowerCase();
                                            return m.length > 4 && m.endsWith("ing") ? m.slice(0, -3) : m.length > 3 && m.endsWith("ed") || m.length > 3 && m.endsWith("ly") ? m.slice(0, -2) : m.length > 2 && m.endsWith("s") ? m.slice(0, -1) : m
                                        }
                                    })
                                })), s.__BD__ ? (s.__BD__.originalModule.call(this, l, T, S), s.__BD__.runListeners.call(this, l, T, S)) : s.call(this, l, T, S)
                            };
                            var p = g;
                            return g.toString = () => s.toString(), g
                        }
                        return s
                    }
                    let x = Symbol.for("BetterDiscord.ModulesTest");
                    if ((n.m[x] = () => {}) !== n.m[x]) {
                        let s = {};
                        for (let i in n.m) Object.hasOwn(n.m, i) && (Object.hasOwn(n.c, i) || (s[i] = {
                            value: y(n.m[i]),
                            configurable: !0,
                            writable: !0,
                            enumerable: !0
                        }));
                        Object.defineProperties(n.m, s)
                    } else
                        for (let s in n.m) Object.hasOwn(n.m, s) && (Object.hasOwn(n.c, s) || (n.m[s] = y(n.m[s])));
                    n.m = new Proxy(n.m, {
                        set(s, i, f, d) {
                            return Reflect.set(s, i, y(f), d)
                        }
                    })
                }
            ])
        })
    };
    ee.webFrame.top?.executeJavaScript("(" + e + ")()")
}

function N(e) {
    let t = [];
    for (let r in e) t.push(r);
    return t
}

function O(e, t = {}, r) {
    return Array.isArray(r) || (r = N(e)), r.reduce((o, n) => (typeof e[n] == "object" && !Array.isArray(e[n]) && e[n] !== null ? o[n] = O(e[n], {}) : typeof e[n] == "function" ? o[n] = e[n].bind(e) : o[n] = e[n], o), t)
}
var P = O(process, {}, N(process).filter(e => e !== "config"));
P.versions.nodejs = P.versions.node;
delete P.versions.node;
P.isWeb = !0;
var re = P;
var Q = {};
_(Q, {
    addProtocolListener: () => it,
    crypto: () => q,
    editor: () => $,
    electron: () => H,
    filesystem: () => F,
    https: () => ie,
    nativeFetch: () => Ve,
    net: () => lt,
    os: () => ft,
    path: () => ct,
    setDevToolsWarningState: () => at,
    vm: () => z
});
var F = {};
_(F, {
    createDirectory: () => Ce,
    createWriteStream: () => Ge,
    deleteDirectory: () => ke,
    exists: () => Le,
    getRealPath: () => je,
    getStats: () => He,
    readDirectory: () => Ae,
    readFile: () => Pe,
    rename: () => Ne,
    renameSync: () => Me,
    rm: () => Be,
    rmSync: () => We,
    unlinkSync: () => Ue,
    watch: () => Fe,
    writeFile: () => Ie
});
var a = R(require("fs"), 1);
var we = {
        err: "error",
        error: "error",
        dbg: "debug",
        debug: "debug",
        log: "log",
        warn: "warn",
        info: "info"
    },
    I = class e {
        static stacktrace(t, r, o) {
            console.error(`%c[${t}]%c ${r}

%c`, "color: #3a71c1; font-weight: 700;", "color: red; font-weight: 700;", "color: red;", o)
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
        static _log(t, r, o = "log") {
            let n = e.parseType(o);
            Array.isArray(r) || (r = [r]), console[n](`%c[BetterDiscord]%c [${t}]%c`, "color: #3E82E5; font-weight: 700;", "color: #3a71c1;", "", ...r)
        }
        static parseType(t) {
            return we[t] || "log"
        }
    };

function Pe(e, t = "utf8") {
    return a.readFileSync(e, t)
}

function Ie(e, t, r) {
    return t instanceof Uint8Array && (t = Buffer.from(t)), (r?.originalFs ? require("original-fs").writeFileSync : a.writeFileSync)(e, t, r)
}

function Ae(e, t) {
    return a.readdirSync(e, t)
}

function Ce(e, t) {
    return a.mkdirSync(e, t)
}

function ke(e, t) {
    a.rmdirSync(e, t)
}

function Le(e) {
    return a.existsSync(e)
}

function je(e, t) {
    return a.realpathSync(e, t)
}

function Ne(e, t) {
    return a.renameSync(e, t)
}

function Me(e, t) {
    return a.renameSync(e, t)
}

function Be(e) {
    return a.rmSync(e)
}

function We(e) {
    return a.rmSync(e)
}

function Ue(e) {
    return a.unlinkSync(e)
}

function Ge(e, t) {
    return O(a.createWriteStream(e, t))
}

function Fe(e, t, r) {
    let o = a.watch(e, t, (n, c) => {
        try {
            r(n, c)
        } catch (u) {
            I.stacktrace("filesystem", "Failed to watch path", u)
        }
    });
    return {
        close: () => {
            o.close()
        }
    }
}

function He(e, t) {
    let r = a.statSync(e, t);
    return {
        ...r,
        isFile: r.isFile.bind(r),
        isDirectory: r.isDirectory.bind(r),
        isSymbolicLink: r.isSymbolicLink.bind(r)
    }
}
var Wt = require("fs"),
    oe = R(require("https"), 1),
    Ut = require("http"),
    qe = ["get", "put", "post", "delete", "head"],
    ze = new Set([301, 302, 307, 308]),
    $e = ["statusCode", "statusMessage", "url", "headers", "method", "aborted", "complete", "rawHeaders"],
    se = (e, t, r, o) => {
        let n = oe.request(e, Object.assign({
            method: "GET"
        }, t), c => {
            if (ze.has(c.statusCode ?? 0) && c.headers.location) {
                let y = new URL(c.headers.location);
                for (let [x, D] of new URL(e).searchParams.entries()) y.searchParams.set(x, D);
                return se(y.toString(), t, r, o)
            }
            let u = [],
                h = null;
            o(c, n), c.addListener("error", y => {
                h = y
            }), c.addListener("data", y => {
                u.push(y)
            }), c.addListener("end", () => {
                let y = Object.fromEntries($e.map(x => [x, c[x]]));
                r(h, y, Buffer.concat(u)), n.end()
            })
        });
        if (t.formData) try {
            n.write(t.formData)
        } finally {
            n.end()
        } else n.end();
        n.on("error", c => r(c))
    },
    ne = function(e, t, r) {
        let o = null,
            n = null,
            c = null;
        return se(e, t, r, (u, h) => {
            n = h, o = u, c && u.pipe(c)
        }), {
            end() {
                n?.end()
            },
            pipe(u) {
                o ? o.pipe(u) : c = u
            }
        }
    },
    ie = Object.assign({
        request: ne
    }, Object.fromEntries(qe.map(e => [e, function(...t) {
        return t[1] ??= {}, t[1].method ??= e.toUpperCase(), Reflect.apply(ne, this, t)
    }])));
var H = {};
_(H, {
    ipcRenderer: () => Xe,
    shell: () => b.shell,
    webUtils: () => b.webUtils
});
var b = require("electron"),
    Xe = {
        send: b.ipcRenderer.send.bind(b.ipcRenderer),
        sendToHost: b.ipcRenderer.sendToHost.bind(b.ipcRenderer),
        sendSync: b.ipcRenderer.sendSync.bind(b.ipcRenderer),
        invoke: b.ipcRenderer.invoke.bind(b.ipcRenderer),
        on: b.ipcRenderer.on.bind(b.ipcRenderer),
        off: b.ipcRenderer.off.bind(b.ipcRenderer)
    };
var q = {};
_(q, {
    createHash: () => Ke,
    randomBytes: () => Ze
});
var ae = (() => {
    let e = null;
    return () => e || (e = require("crypto"))
})();

function Ke(e) {
    let t = ae().createHash(e),
        r = {
            update(o) {
                return t.update(o), r
            },
            digest(o) {
                return t.digest(o)
            }
        };
    return r
}

function Ze(e) {
    return ae().randomBytes(e)
}
var z = {};
_(z, {
    compileFunction: () => Je
});
var ce = R(require("vm"), 1);

function Je(e, t = [], r = {}) {
    try {
        return ce.default.compileFunction(e, t, r)
    } catch (o) {
        let n = o;
        return {
            name: n.name,
            message: n.message,
            stack: n.stack
        }
    }
}
var de = R(require("https"), 1),
    ue = R(require("http"), 1);

function le(e) {
    let r = new Response(e).body.getReader();
    return {
        read: () => r.read(),
        cancel: () => r.cancel()
    }
}

function fe(e) {
    return new ReadableStream({
        async start(t) {
            for (;;) {
                let {
                    done: r,
                    value: o
                } = await e.read();
                if (r) {
                    t.close();
                    break
                } else t.enqueue(o)
            }
        },
        type: "bytes"
    })
}
var Qe = new Set([301, 302, 307, 308]),
    Ye = new Set([101, 204, 205, 304]);

function Ve({
    url: e,
    signal: t,
    body: r,
    ...o
}) {
    let {
        promise: n,
        resolve: c,
        reject: u
    } = Promise.withResolvers(), h = o.maxRedirects ?? 20, y = r ? fe(r) : null, x = 0;

    function D(i, f) {
        let d = f.statusCode ?? 0,
            p = null;
        return Ye.has(d) || (p = new ReadableStream({
            start(g) {
                f.on("data", l => g.enqueue(l)), f.on("error", l => g.error(l)), f.once("end", () => g.close())
            },
            type: "bytes"
        })), {
            body: p ? le(p) : null,
            url: i,
            headers: f.headers,
            status: d,
            statusText: f.statusMessage || "",
            redirected: x !== 0
        }
    }
    let V = (i => o.timeout === null && !isFinite(i) ? void 0 : i)(o.timeout ?? 3e3);
    async function s(i) {
        let f = i.startsWith("http:") ? ue.default : i.startsWith("https:") ? de.default : null;
        if (!f) {
            u(new Error(`Unsupported protocol: ${i.slice(0,i.indexOf(":"))}:`));
            return
        }
        let d = f.request(i, {
            headers: o.headers,
            method: o.method,
            timeout: V,
            rejectUnauthorized: o.rejectUnauthorized
        }, p => {
            if (Qe.has(p.statusCode)) {
                if (o.redirect === "error") {
                    d.destroy(new Error("Failed to fetch"));
                    return
                }
                if (o.redirect === "manual") {
                    c(D(i, p));
                    return
                }
                if (x >= h) {
                    u(new Error(`Maximum amount of redirects reached (${h})`));
                    return
                }
                if (p.headers.location) {
                    let g;
                    try {
                        g = new URL(p.headers.location)
                    } catch (l) {
                        u(l);
                        return
                    }
                    for (let [l, T] of new URL(i).searchParams) g.searchParams.set(l, T);
                    return x++, s(g.href)
                }
            }
            c(D(i, p))
        });
        if (d.shouldKeepAlive = o.keepalive, t) {
            let p = t.addListener(() => {
                d.destroy(t.reason() || new Error("Request was aborted"))
            });
            d.once("close", () => p())
        }
        if (d.once("timeout", () => d.destroy(new Error("Request timed out"))), d.once("error", p => u(p)), y) try {
            for await (let p of y) d.write(p);
            d.end()
        } catch (p) {
            d.destroy(p)
        } else d.end()
    }
    return s(e), n
}
var ct = R(require("path"), 1),
    lt = R(require("net"), 1),
    ft = R(require("os"), 1);
var $ = {};
_($, {
    onLiveUpdateChange: () => rt,
    open: () => et,
    updateSettings: () => tt
});
var pe = "bd-get-path";
var me = "bd-register-preload";
var ye = "bd-handle-protocol",
    be = "bd-editor-open";
var M = "bd-editor-settings-update";
var A = require("electron");

function et(e, t) {
    A.ipcRenderer.invoke(be, e, t)
}

function tt(e) {
    A.ipcRenderer.invoke(M, e)
}

function rt(e) {
    function t(r, o) {
        e(o)
    }
    return A.ipcRenderer.on(M, t), () => {
        A.ipcRenderer.off(M, t)
    }
}
var he = R(require("electron"), 1);
var j = R(require("electron"), 1),
    C = R(require("path"), 1);
var k = "";
process.platform === "win32" || process.platform === "darwin" ? k = C.default.join(j.default.ipcRenderer.sendSync(pe, "userData"), "..") : k = process.env.XDG_CONFIG_HOME ? process.env.XDG_CONFIG_HOME : C.default.join(process.env.HOME, ".config");
k = C.default.join(k, "BetterDiscord") + "/";
var v;

function nt(e, t) {
    if (v) return v[e]?.[t];
    try {
        let r = C.default.resolve(k, "data", process.env.DISCORD_RELEASE_CHANNEL, "settings.json");
        return v = require(r) ?? {}, v[e]?.[t]
    } catch {
        return v = {}, v[e]?.[t]
    }
}
var {
    exposeInMainWorld: ot
} = j.default.contextBridge, X, K, Z = !1, L = nt("developer", "devToolsWarning");
typeof L != "boolean" && (L = !1);
var st = {
        ...j.default.contextBridge,
        exposeInMainWorld(e, t) {
            e === "DiscordNative" && (t.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS = process.platform === "darwin" && process.env.BETTERDISCORD_IN_APP_TRAFFIC_LIGHTS === "false", t.window.setDevtoolsCallbacks(() => {
                Z = !0, L || X?.()
            }, () => {
                Z = !1, L || K?.()
            }), t.window.setDevtoolsCallbacks = (r, o) => {
                X = r, K = o
            }), ot(e, t)
        }
    },
    J = class {
        static setDevToolsWarningState(t) {
            L = t, Z && (t ? K?.() : X?.())
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
            delete require.cache[t].exports, require.cache[t].exports = new Proxy(j.default, {
                get(r, o, n) {
                    return o === "contextBridge" ? st : Reflect.get(r, o, n)
                }
            })
        }
        static init() {
            this.injectCSS(), this.patch()
        }
    },
    W = J;
var {
    BETTERDISCORD_PROTOCOL: ge
} = process.env;
delete process.env.BETTERDISCORD_PROTOCOL;

function it(e) {
    ge && process.nextTick(() => e(ge)), he.default.ipcRenderer.on(ye, (t, r) => e(r))
}

function at(e) {
    W.setDevToolsWarningState(e)
}
var Re = require("electron");

function xe() {
    let e = process.env.BD_DISCORD_PRELOAD;
    if (e) {
        Re.ipcRenderer.send(me, e);
        try {
            let t = process.kill;
            process.kill = function(r, o) {
                return !0
            }, require(e), process.kill = t
        } catch {}
    }
}
te();
W.init();
var Te = !1;
Y.contextBridge.exposeInMainWorld("process", re);
Y.contextBridge.exposeInMainWorld("BetterDiscordPreload", () => Te ? null : (Te = !0, Q));
xe();