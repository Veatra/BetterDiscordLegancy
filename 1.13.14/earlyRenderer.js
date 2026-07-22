"use strict";
/*
 * This file executes in Discord's page world before betterdiscord.js. Install
 * the ES2024 promise helper here as well as in the other entry points so an
 * early bootstrap failure cannot depend on which isolated world ran first.
 */
typeof Promise.withResolvers != "function" && Object.defineProperty(Promise, "withResolvers", {
    configurable: !0,
    writable: !0,
    value: function() {
        let e, t;
        let r = new this((r, i) => {
            e = r, t = i
        });
        return {
            promise: r,
            resolve: e,
            reject: t
        }
    }
});
var T = {
        err: "error",
        error: "error",
        dbg: "debug",
        debug: "debug",
        log: "log",
        warn: "warn",
        info: "info"
    },
    C = class e {
        static stacktrace(t, r, i) {
            console.error(`%c[${t}]%c ${r}

%c`, "color: #3a71c1; font-weight: 700;", "color: red; font-weight: 700;", "color: red;", i)
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
        static _log(t, r, i = "log") {
            let a = e.parseType(i);
            Array.isArray(r) || (r = [r]), console[a](`%c[BetterDiscord]%c [${t}]%c`, "color: #3E82E5; font-weight: 700;", "color: #3a71c1;", "", ...r)
        }
        static parseType(t) {
            return T[t] || "log"
        }
    };
var v = ["function ", "async function ", "class "],
    R = ["let", "var", "const"];

function M(e, t = 1) {
    let r = 0,
        i = !1,
        a = 0,
        s = [];
    for (let o = 0; o < e.length; o++) {
        let y = e.charCodeAt(o);
        e: switch (y) {
            case 123:
            case 40:
            case 91:
                r++;
                break;
            case 125:
            case 41:
            case 93:
                r--, r >= t && r < t + a && (a = r - t);
                break;
            case 34:
            case 39:
                o = L(e, o + 1, y);
                break;
            case 96:
                o = j(e, o + 1);
                break;
            case 47: {
                let n = e.charCodeAt(o - 1);
                (!$(n) || e.startsWith("return", o - 6)) && n !== 41 && n !== 93 && (o = P(e, o + 1));
                break
            }
            default: {
                if (r < t || r > t + a) break;
                if (!i) {
                    for (let n of v) {
                        if (!e.startsWith(n, o)) continue;
                        let c = e.charCodeAt(o - 1);
                        if (c === 61 || c === 33) continue;
                        let [u] = O(e, o + n.length);
                        s.push(u), o += u.length + n.length - 1;
                        break e
                    }
                    for (let n of R) {
                        if (!e.startsWith(n, o)) continue;
                        let c = e.charCodeAt(o + n.length);
                        if (c === 32) o++;
                        else if (c !== 123 && c !== 91) continue;
                        let [u, p, _] = O(e, o + n.length);
                        r += p, a += p, s.push(u), o += n.length + _ - 1, i = !0;
                        break e
                    }
                    break
                }
                if (y === 59) {
                    i = !1;
                    break
                }
                if (y === 44) {
                    let [n, c, u] = O(e, o + 1);
                    r += c, a += c, s.push(n), o += u
                }
            }
        }
    }
    return s
}

function O(e, t) {
    let r = t,
        i = 0,
        a = !0;
    for (let s = t; s < e.length; s++) {
        let o = e.charCodeAt(s);
        if (a && (o === 123 || o === 91)) i++, t = s + 1;
        else if (a = !1, o === 58) t = s + 1, a = !0;
        else if (!$(o)) return [e.slice(t, s), i, s - r]
    }
    return [e.slice(t), 0, e.length - r]
}

function L(e, t, r) {
    let i = !1;
    for (let a = t; a < e.length; a++) {
        let s = e.charCodeAt(a);
        if (s === r && !i) return a;
        s === 92 ? i = !i : i = !1
    }
    return e.length
}

function P(e, t) {
    let r = !1,
        i = !1;
    for (let a = t; a < e.length; a++) {
        let s = e.charCodeAt(a);
        if (r) s === 93 && !i && (r = !1);
        else {
            if (s === 47 && !i) return a;
            s === 91 && !i && (r = !0)
        }
        s === 92 ? i = !i : i = !1
    }
    return e.length
}

function j(e, t) {
    let r = 0,
        i = 0,
        a = !1;
    for (let s = t; s < e.length; s++) {
        let o = e.charCodeAt(s);
        if (r === 0) {
            if (o === 96 && !a) return s;
            o === 123 && i === 36 && !a && r++, o === 92 ? a = !a : o !== 36 && (a = !1)
        } else switch (o) {
            case 123:
                r++;
                break;
            case 125:
                r--;
                break;
            case 34:
            case 39:
                s = L(e, s + 1, o);
                break;
            case 96:
                s = j(e, s + 1);
                break;
            case 47: {
                let y = e.charCodeAt(s - 1);
                (!$(y) || e.startsWith("return", s - 6)) && y !== 41 && y !== 93 && (s = P(e, s + 1));
                break
            }
        }
        i = o
    }
    return e.length
}

function $(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90 || e >= 48 && e <= 57 || e === 95 || e === 36
}
var W = /^(.*?)\(/;
var legacyIncompatibleFactoryWrapperWarningShown = !1;

function N(e) {
    let t = e.match(W);
    return !t || !t[1] || t[1].includes("=>") && !/^[['"]/.test(t[1]) ? e : e.replace(t[1], "function")
}(window.webpackChunkdiscord_app ??= []).push([
    [Symbol()], {},
    e => {
        if (!e.b) return;
        e.d = (n, c) => {
            for (let u in c)
                if (Reflect.has(c, u) && !Reflect.has(n, u)) try {
                    Object.defineProperty(n, u, {
                        get: () => c[u](),
                        set: p => {
                            c[u] = () => p
                        },
                        enumerable: !0,
                        configurable: !0
                    })
                } catch (p) {
                    console.error(p)
                }
        };
        let t = /^\d+(?:e\d+)?\((.{1,3}),.{1,3},.{1,3}\){("use strict";)?\1.exports={.+}}$/,
            r = /^(.+?)_/,
            i = /\((\d+)\)\.newStemmer\("[^"]+"\);/;

        function a(n, c) {
            if ((n.__BD__?.originalModule || n).__early_patched__) return n;
            let u = n.__BD__?.originalModule || n,
                p = String(n),
                _ = t.test(p),
                A = p.match(i),
                m = null;

            function E() {
                if (m) return m;
                try {
                    let f = Function.prototype.toString.call(u),
                        legacyFactoryWrapper = f.includes("Reflect.apply(originalModule");
                    if (legacyFactoryWrapper) return legacyIncompatibleFactoryWrapperWarningShown || (legacyIncompatibleFactoryWrapperWarningShown = !0, C.warn("WebpackModules", "Detected a ZeresPluginLibrary webpack wrapper. Declaration instrumentation is disabled for wrapped modules because the original factory is held in an inaccessible closure. Plugins requiring declarationFilter, including PingNotification, require ZeresPluginLibrary to be removed.")), m = u;
                    let B = f.indexOf("("),
                        b = f.slice(0, B),
                        d = Number(b),
                        g = isNaN(d) ? `misc/${b}.js` : `${Math.floor(d/1e3)}/${d}.js`,
                        h = N(f),
                        l = M(h),
                        D = h.indexOf("{", h.indexOf(")")) + 1,
                        x = `Object.seal({__proto__:null,${l.map(k=>`get ${k}(){return ${k}},set ${k}(_${k}){${k}=_${k}}`).join(",")}})`,
                        S = `(function(){
    /*
        Module Id: ${typeof c=="symbol"?`Symbol(${c.description})`:c}
        Exposed ${l.length} variables
        Is Probably Class Module: ${_}
    */
    (${h.slice(0,D)}arguments[0].declarations=${x};${h.slice(D)}).apply(this, arguments)
});
//# sourceURL=betterdiscord://BD/webpack-modules/patched/${g}`;
                    m = (0, eval)(S)
                } catch (f) {
                    m = u, C.error("WebpackModules", `Failed to parse module ${c.toString()} for patching, using original module instead.`, f instanceof Error ? f : new Error(String(f)))
                }
                return m
            }

            function w(f, B, b) {
                try {
                    if (A) {
                        let d = A[1];
                        b.m[d] || (C.debug("WebpackModules", `Injecting pseudo-stemmer module at id ${d} for module ${c.toString()}`), b.m[d] = g => {
                            g.exports.newStemmer = () => ({
                                stem(h) {
                                    if (typeof h != "string") return h;
                                    let l = h.toLowerCase();
                                    return l.length > 4 && l.endsWith("ing") ? l.slice(0, -3) : l.length > 3 && l.endsWith("ed") || l.length > 3 && l.endsWith("ly") ? l.slice(0, -2) : l.length > 2 && l.endsWith("s") ? l.slice(0, -1) : l
                                }
                            })
                        })
                    }
                    if (E().call(this, f, B, b), _) {
                        let d = {
                            [Symbol.for("BetterDiscord.Polyfilled.class")]: {
                                value: !0
                            }
                        };
                        for (let g in f.exports) {
                            if (!Object.hasOwn(f.exports, g)) continue;
                            let h = f.exports[g];
                            if (typeof h != "string") return;
                            let l = h.match(r);
                            l && (l[1] in f.exports || (d[l[1]] = {
                                value: h,
                                enumerable: !0
                            }, d[g] = {
                                value: h,
                                enumerable: !1
                            }))
                        }
                        Object.defineProperties(f.exports, d)
                    }
                } finally {
                    n.__BD__ && n.__BD__.runListeners.call(this, f, B, b);
                    try {
                        typeof f.exports == "object" && f.exports !== null && f.exports.createElement && requestIdleCallback(() => {
                            window.BetterDiscordRunRenderer()
                        })
                    } catch {}
                }
            }
            return w.toString = () => p, w.__early_patched__ = !0, w.__raw_module__ = E, w
        }
        let s = Symbol.for("BetterDiscord.ModulesTest");
        if ((e.m[s] = () => {}) !== e.m[s]) {
            let n = {};
            for (let c in e.m) Object.hasOwn(e.m, c) && (Object.hasOwn(e.c, c) || (n[c] = {
                value: a(e.m[c], c),
                configurable: !0,
                writable: !0,
                enumerable: !0
            }));
            Object.defineProperties(e.m, n)
        } else
            for (let n in e.m) Object.hasOwn(e.m, n) && (Object.hasOwn(e.c, n) || (e.m[n] = a(e.m[n], n)));
        e.m = new Proxy(e.m, {
            set(n, c, u, p) {
                return Reflect.set(n, c, a(u, c), p)
            }
        })
    }
]);
