"use strict";
var xm = Object.create;
var Yr = Object.defineProperty;
var vm = Object.getOwnPropertyDescriptor;
var wm = Object.getOwnPropertyNames;
var km = Object.getPrototypeOf,
    Cm = Object.prototype.hasOwnProperty;
var x = (a, e) => () => (a && (e = a(a = 0)), e);
var Z = (a, e) => () => (e || a((e = {
        exports: {}
    }).exports, e), e.exports),
    Qr = (a, e) => {
        for (var t in e) Yr(a, t, {
            get: e[t],
            enumerable: !0
        })
    },
    Gs = (a, e, t, o) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let r of wm(e)) !Cm.call(a, r) && r !== t && Yr(a, r, {
                get: () => e[r],
                enumerable: !(o = vm(e, r)) || o.enumerable
            });
        return a
    };
var Ae = (a, e, t) => (t = a != null ? xm(km(a)) : {}, Gs(e || !a || !a.__esModule ? Yr(t, "default", {
        value: a,
        enumerable: !0
    }) : t, a)),
    Ks = a => Gs(Yr({}, "__esModule", {
        value: !0
    }), a);
var Sm, b, ee = x(() => {
    "use strict";
    Sm = {
        err: "error",
        error: "error",
        dbg: "debug",
        debug: "debug",
        log: "log",
        warn: "warn",
        info: "info"
    }, b = class a {
        static stacktrace(e, t, o) {
            console.error(`%c[${e}]%c ${t}

%c`, "color: #3a71c1; font-weight: 700;", "color: red; font-weight: 700;", "color: red;", o)
        }
        static err(e, ...t) {
            a._log(e, t, "error")
        }
        static error(e, ...t) {
            a._log(e, t, "error")
        }
        static warn(e, ...t) {
            a._log(e, t, "warn")
        }
        static info(e, ...t) {
            a._log(e, t, "info")
        }
        static debug(e, ...t) {
            a._log(e, t, "debug")
        }
        static log(e, ...t) {
            a._log(e, t)
        }
        static _log(e, t, o = "log") {
            let r = a.parseType(o);
            Array.isArray(t) || (t = [t]), console[r](`%c[BetterDiscord]%c [${e}]%c`, "color: #3E82E5; font-weight: 700;", "color: #3a71c1;", "", ...t)
        }
        static parseType(e) {
            return Sm[e] || "log"
        }
    }
});
var Lm, M, Ge = x(() => {
    "use strict";
    Lm = window.BetterDiscordPreload(), M = Lm
});
var Im, Am, Tm, Em, Mm, Dm, Pm, zm, Bm, Nm, Fm, Om, Rm, Um, Zs, Xs, jm, qm, Hm, Wm, _m, Vm, Gm, Km, $m, Zm, Ne, zo = x(() => {
    "use strict";
    Ge();
    Im = function(a, e = "utf8") {
        return M.filesystem.readFile(a, e)
    }, Am = function(a, e = "utf8", t) {
        try {
            let o = M.filesystem.readFile(a, e);
            t(null, o)
        } catch (o) {
            t(o, null)
        }
    }, Tm = function(a, e, t, o) {
        typeof t == "function" && (o = t, ["object", "string"].includes(typeof t) || (t = void 0));
        try {
            M.filesystem.writeFile(a, e, t), o?.(null)
        } catch (r) {
            o?.(r)
        }
    }, Em = function(a, e, t) {
        M.filesystem.writeFile(a, e, t)
    }, Mm = function(a, e, t) {
        try {
            let o = M.filesystem.readDirectory(a, e);
            t(null, o)
        } catch (o) {
            t(o, null)
        }
    }, Dm = function(a, e) {
        return M.filesystem.readDirectory(a, e)
    }, Pm = function(a, e, t) {
        try {
            let o = M.filesystem.createDirectory(a, e);
            t(null, o)
        } catch (o) {
            t(o, null)
        }
    }, zm = function(a, e) {
        M.filesystem.createDirectory(a, e)
    }, Bm = function(a, e, t) {
        try {
            let o = M.filesystem.deleteDirectory(a, e);
            t(null, o)
        } catch (o) {
            t(o, null)
        }
    }, Nm = function(a, e) {
        M.filesystem.deleteDirectory(a, e)
    }, Fm = function(a, e) {
        try {
            let t = M.filesystem.rm(a);
            e(null, t)
        } catch (t) {
            e(t, null)
        }
    }, Om = function(a) {
        M.filesystem.rmSync(a)
    }, Rm = function(a, e) {
        try {
            let t = M.filesystem.exists(a);
            e(null, t)
        } catch (t) {
            e(t, null)
        }
    }, Um = function(a) {
        return M.filesystem.exists(a)
    }, Zs = function(a, e, t) {
        try {
            let o = M.filesystem.getStats(a, e);
            t(null, o)
        } catch (o) {
            t(o)
        }
    }, Xs = function(a, e) {
        return M.filesystem.getStats(a, e)
    }, jm = Zs, qm = Xs, Hm = function(a, e, t) {
        try {
            let o = M.filesystem.rename(a, e);
            t(null, o)
        } catch (o) {
            t(o, null)
        }
    }, Wm = function(a, e) {
        return M.filesystem.renameSync(a, e)
    }, _m = function(a, e, t) {
        try {
            let o = M.filesystem.getStats(a, e);
            t(null, o)
        } catch (o) {
            t(o, null)
        }
    }, Vm = function(a, e) {
        return M.filesystem.getRealPath(a, e)
    }, Gm = (a, e, t) => M.filesystem.watch(a, e, t), Km = (a, e) => M.filesystem.createWriteStream(a, e), $m = a => M.filesystem.unlinkSync(a), Zm = a => M.filesystem.unlinkSync(a), Ne = {
        readFile: Am,
        exists: Rm,
        existsSync: Um,
        lstat: jm,
        lstatSync: qm,
        mkdir: Pm,
        mkdirSync: zm,
        readFileSync: Im,
        readdir: Mm,
        readdirSync: Dm,
        realpath: _m,
        realpathSync: Vm,
        rename: Hm,
        renameSync: Wm,
        rm: Fm,
        rmSync: Om,
        rmdir: Bm,
        rmdirSync: Nm,
        stat: Zs,
        statSync: Xs,
        unlink: Zm,
        unlinkSync: $m,
        watch: Gm,
        writeFile: Tm,
        writeFileSync: Em,
        createWriteStream: Km
    }
});
var nd = Z(en => {
    "use strict";
    en.byteLength = eh;
    en.toByteArray = ah;
    en.fromByteArray = nh;
    var At = [],
        ot = [],
        Qm = typeof Uint8Array < "u" ? Uint8Array : Array,
        ni = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (wa = 0, od = ni.length; wa < od; ++wa) At[wa] = ni[wa], ot[ni.charCodeAt(wa)] = wa;
    var wa, od;
    ot[45] = 62;
    ot[95] = 63;

    function rd(a) {
        var e = a.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var t = a.indexOf("=");
        t === -1 && (t = e);
        var o = t === e ? 0 : 4 - t % 4;
        return [t, o]
    }

    function eh(a) {
        var e = rd(a),
            t = e[0],
            o = e[1];
        return (t + o) * 3 / 4 - o
    }

    function th(a, e, t) {
        return (e + t) * 3 / 4 - t
    }

    function ah(a) {
        var e, t = rd(a),
            o = t[0],
            r = t[1],
            n = new Qm(th(a, o, r)),
            s = 0,
            d = r > 0 ? o - 4 : o,
            l;
        for (l = 0; l < d; l += 4) e = ot[a.charCodeAt(l)] << 18 | ot[a.charCodeAt(l + 1)] << 12 | ot[a.charCodeAt(l + 2)] << 6 | ot[a.charCodeAt(l + 3)], n[s++] = e >> 16 & 255, n[s++] = e >> 8 & 255, n[s++] = e & 255;
        return r === 2 && (e = ot[a.charCodeAt(l)] << 2 | ot[a.charCodeAt(l + 1)] >> 4, n[s++] = e & 255), r === 1 && (e = ot[a.charCodeAt(l)] << 10 | ot[a.charCodeAt(l + 1)] << 4 | ot[a.charCodeAt(l + 2)] >> 2, n[s++] = e >> 8 & 255, n[s++] = e & 255), n
    }

    function oh(a) {
        return At[a >> 18 & 63] + At[a >> 12 & 63] + At[a >> 6 & 63] + At[a & 63]
    }

    function rh(a, e, t) {
        for (var o, r = [], n = e; n < t; n += 3) o = (a[n] << 16 & 16711680) + (a[n + 1] << 8 & 65280) + (a[n + 2] & 255), r.push(oh(o));
        return r.join("")
    }

    function nh(a) {
        for (var e, t = a.length, o = t % 3, r = [], n = 16383, s = 0, d = t - o; s < d; s += n) r.push(rh(a, s, s + n > d ? d : s + n));
        return o === 1 ? (e = a[t - 1], r.push(At[e >> 2] + At[e << 4 & 63] + "==")) : o === 2 && (e = (a[t - 2] << 8) + a[t - 1], r.push(At[e >> 10] + At[e >> 4 & 63] + At[e << 2 & 63] + "=")), r.join("")
    }
});
var id = Z(ii => {
    ii.read = function(a, e, t, o, r) {
        var n, s, d = r * 8 - o - 1,
            l = (1 << d) - 1,
            u = l >> 1,
            c = -7,
            f = t ? r - 1 : 0,
            m = t ? -1 : 1,
            h = a[e + f];
        for (f += m, n = h & (1 << -c) - 1, h >>= -c, c += d; c > 0; n = n * 256 + a[e + f], f += m, c -= 8);
        for (s = n & (1 << -c) - 1, n >>= -c, c += o; c > 0; s = s * 256 + a[e + f], f += m, c -= 8);
        if (n === 0) n = 1 - u;
        else {
            if (n === l) return s ? NaN : (h ? -1 : 1) * (1 / 0);
            s = s + Math.pow(2, o), n = n - u
        }
        return (h ? -1 : 1) * s * Math.pow(2, n - o)
    };
    ii.write = function(a, e, t, o, r, n) {
        var s, d, l, u = n * 8 - r - 1,
            c = (1 << u) - 1,
            f = c >> 1,
            m = r === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = o ? 0 : n - 1,
            g = o ? 1 : -1,
            k = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (d = isNaN(e) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), s + f >= 1 ? e += m / l : e += m * Math.pow(2, 1 - f), e * l >= 2 && (s++, l /= 2), s + f >= c ? (d = 0, s = c) : s + f >= 1 ? (d = (e * l - 1) * Math.pow(2, r), s = s + f) : (d = e * Math.pow(2, f - 1) * Math.pow(2, r), s = 0)); r >= 8; a[t + h] = d & 255, h += g, d /= 256, r -= 8);
        for (s = s << r | d, u += r; u > 0; a[t + h] = s & 255, h += g, s /= 256, u -= 8);
        a[t + h - g] |= k * 128
    }
});
var Cd = Z(oo => {
    "use strict";
    var si = nd(),
        to = id(),
        sd = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    oo.Buffer = y;
    oo.SlowBuffer = ch;
    oo.INSPECT_MAX_BYTES = 50;
    var tn = 2147483647;
    oo.kMaxLength = tn;
    y.TYPED_ARRAY_SUPPORT = ih();
    !y.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function ih() {
        try {
            let a = new Uint8Array(1),
                e = {
                    foo: function() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(a, e), a.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(y.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (y.isBuffer(this)) return this.buffer
        }
    });
    Object.defineProperty(y.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (y.isBuffer(this)) return this.byteOffset
        }
    });

    function Ft(a) {
        if (a > tn) throw new RangeError('The value "' + a + '" is invalid for option "size"');
        let e = new Uint8Array(a);
        return Object.setPrototypeOf(e, y.prototype), e
    }

    function y(a, e, t) {
        if (typeof a == "number") {
            if (typeof e == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return ci(a)
        }
        return cd(a, e, t)
    }
    y.poolSize = 8192;

    function cd(a, e, t) {
        if (typeof a == "string") return dh(a, e);
        if (ArrayBuffer.isView(a)) return lh(a);
        if (a == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof a);
        if (Tt(a, ArrayBuffer) || a && Tt(a.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Tt(a, SharedArrayBuffer) || a && Tt(a.buffer, SharedArrayBuffer))) return li(a, e, t);
        if (typeof a == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        let o = a.valueOf && a.valueOf();
        if (o != null && o !== a) return y.from(o, e, t);
        let r = uh(a);
        if (r) return r;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof a[Symbol.toPrimitive] == "function") return y.from(a[Symbol.toPrimitive]("string"), e, t);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof a)
    }
    y.from = function(a, e, t) {
        return cd(a, e, t)
    };
    Object.setPrototypeOf(y.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(y, Uint8Array);

    function fd(a) {
        if (typeof a != "number") throw new TypeError('"size" argument must be of type number');
        if (a < 0) throw new RangeError('The value "' + a + '" is invalid for option "size"')
    }

    function sh(a, e, t) {
        return fd(a), a <= 0 ? Ft(a) : e !== void 0 ? typeof t == "string" ? Ft(a).fill(e, t) : Ft(a).fill(e) : Ft(a)
    }
    y.alloc = function(a, e, t) {
        return sh(a, e, t)
    };

    function ci(a) {
        return fd(a), Ft(a < 0 ? 0 : fi(a) | 0)
    }
    y.allocUnsafe = function(a) {
        return ci(a)
    };
    y.allocUnsafeSlow = function(a) {
        return ci(a)
    };

    function dh(a, e) {
        if ((typeof e != "string" || e === "") && (e = "utf8"), !y.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
        let t = pd(a, e) | 0,
            o = Ft(t),
            r = o.write(a, e);
        return r !== t && (o = o.slice(0, r)), o
    }

    function di(a) {
        let e = a.length < 0 ? 0 : fi(a.length) | 0,
            t = Ft(e);
        for (let o = 0; o < e; o += 1) t[o] = a[o] & 255;
        return t
    }

    function lh(a) {
        if (Tt(a, Uint8Array)) {
            let e = new Uint8Array(a);
            return li(e.buffer, e.byteOffset, e.byteLength)
        }
        return di(a)
    }

    function li(a, e, t) {
        if (e < 0 || a.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
        if (a.byteLength < e + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let o;
        return e === void 0 && t === void 0 ? o = new Uint8Array(a) : t === void 0 ? o = new Uint8Array(a, e) : o = new Uint8Array(a, e, t), Object.setPrototypeOf(o, y.prototype), o
    }

    function uh(a) {
        if (y.isBuffer(a)) {
            let e = fi(a.length) | 0,
                t = Ft(e);
            return t.length === 0 || a.copy(t, 0, 0, e), t
        }
        if (a.length !== void 0) return typeof a.length != "number" || mi(a.length) ? Ft(0) : di(a);
        if (a.type === "Buffer" && Array.isArray(a.data)) return di(a.data)
    }

    function fi(a) {
        if (a >= tn) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + tn.toString(16) + " bytes");
        return a | 0
    }

    function ch(a) {
        return +a != a && (a = 0), y.alloc(+a)
    }
    y.isBuffer = function(e) {
        return e != null && e._isBuffer === !0 && e !== y.prototype
    };
    y.compare = function(e, t) {
        if (Tt(e, Uint8Array) && (e = y.from(e, e.offset, e.byteLength)), Tt(t, Uint8Array) && (t = y.from(t, t.offset, t.byteLength)), !y.isBuffer(e) || !y.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        let o = e.length,
            r = t.length;
        for (let n = 0, s = Math.min(o, r); n < s; ++n)
            if (e[n] !== t[n]) {
                o = e[n], r = t[n];
                break
            } return o < r ? -1 : r < o ? 1 : 0
    };
    y.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
        }
    };
    y.concat = function(e, t) {
        if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (e.length === 0) return y.alloc(0);
        let o;
        if (t === void 0)
            for (t = 0, o = 0; o < e.length; ++o) t += e[o].length;
        let r = y.allocUnsafe(t),
            n = 0;
        for (o = 0; o < e.length; ++o) {
            let s = e[o];
            if (Tt(s, Uint8Array)) n + s.length > r.length ? (y.isBuffer(s) || (s = y.from(s)), s.copy(r, n)) : Uint8Array.prototype.set.call(r, s, n);
            else if (y.isBuffer(s)) s.copy(r, n);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            n += s.length
        }
        return r
    };

    function pd(a, e) {
        if (y.isBuffer(a)) return a.length;
        if (ArrayBuffer.isView(a) || Tt(a, ArrayBuffer)) return a.byteLength;
        if (typeof a != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof a);
        let t = a.length,
            o = arguments.length > 2 && arguments[2] === !0;
        if (!o && t === 0) return 0;
        let r = !1;
        for (;;) switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
                return t;
            case "utf8":
            case "utf-8":
                return ui(a).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return t * 2;
            case "hex":
                return t >>> 1;
            case "base64":
                return kd(a).length;
            default:
                if (r) return o ? -1 : ui(a).length;
                e = ("" + e).toLowerCase(), r = !0
        }
    }
    y.byteLength = pd;

    function fh(a, e, t) {
        let o = !1;
        if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e)) return "";
        for (a || (a = "utf8");;) switch (a) {
            case "hex":
                return kh(this, e, t);
            case "utf8":
            case "utf-8":
                return hd(this, e, t);
            case "ascii":
                return vh(this, e, t);
            case "latin1":
            case "binary":
                return wh(this, e, t);
            case "base64":
                return yh(this, e, t);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Ch(this, e, t);
            default:
                if (o) throw new TypeError("Unknown encoding: " + a);
                a = (a + "").toLowerCase(), o = !0
        }
    }
    y.prototype._isBuffer = !0;

    function ka(a, e, t) {
        let o = a[e];
        a[e] = a[t], a[t] = o
    }
    y.prototype.swap16 = function() {
        let e = this.length;
        if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e; t += 2) ka(this, t, t + 1);
        return this
    };
    y.prototype.swap32 = function() {
        let e = this.length;
        if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < e; t += 4) ka(this, t, t + 3), ka(this, t + 1, t + 2);
        return this
    };
    y.prototype.swap64 = function() {
        let e = this.length;
        if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t = 0; t < e; t += 8) ka(this, t, t + 7), ka(this, t + 1, t + 6), ka(this, t + 2, t + 5), ka(this, t + 3, t + 4);
        return this
    };
    y.prototype.toString = function() {
        let e = this.length;
        return e === 0 ? "" : arguments.length === 0 ? hd(this, 0, e) : fh.apply(this, arguments)
    };
    y.prototype.toLocaleString = y.prototype.toString;
    y.prototype.equals = function(e) {
        if (!y.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        return this === e ? !0 : y.compare(this, e) === 0
    };
    y.prototype.inspect = function() {
        let e = "",
            t = oo.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
    };
    sd && (y.prototype[sd] = y.prototype.inspect);
    y.prototype.compare = function(e, t, o, r, n) {
        if (Tt(e, Uint8Array) && (e = y.from(e, e.offset, e.byteLength)), !y.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (t === void 0 && (t = 0), o === void 0 && (o = e ? e.length : 0), r === void 0 && (r = 0), n === void 0 && (n = this.length), t < 0 || o > e.length || r < 0 || n > this.length) throw new RangeError("out of range index");
        if (r >= n && t >= o) return 0;
        if (r >= n) return -1;
        if (t >= o) return 1;
        if (t >>>= 0, o >>>= 0, r >>>= 0, n >>>= 0, this === e) return 0;
        let s = n - r,
            d = o - t,
            l = Math.min(s, d),
            u = this.slice(r, n),
            c = e.slice(t, o);
        for (let f = 0; f < l; ++f)
            if (u[f] !== c[f]) {
                s = u[f], d = c[f];
                break
            } return s < d ? -1 : d < s ? 1 : 0
    };

    function md(a, e, t, o, r) {
        if (a.length === 0) return -1;
        if (typeof t == "string" ? (o = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, mi(t) && (t = r ? 0 : a.length - 1), t < 0 && (t = a.length + t), t >= a.length) {
            if (r) return -1;
            t = a.length - 1
        } else if (t < 0)
            if (r) t = 0;
            else return -1;
        if (typeof e == "string" && (e = y.from(e, o)), y.isBuffer(e)) return e.length === 0 ? -1 : dd(a, e, t, o, r);
        if (typeof e == "number") return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? r ? Uint8Array.prototype.indexOf.call(a, e, t) : Uint8Array.prototype.lastIndexOf.call(a, e, t) : dd(a, [e], t, o, r);
        throw new TypeError("val must be string, number or Buffer")
    }

    function dd(a, e, t, o, r) {
        let n = 1,
            s = a.length,
            d = e.length;
        if (o !== void 0 && (o = String(o).toLowerCase(), o === "ucs2" || o === "ucs-2" || o === "utf16le" || o === "utf-16le")) {
            if (a.length < 2 || e.length < 2) return -1;
            n = 2, s /= 2, d /= 2, t /= 2
        }

        function l(c, f) {
            return n === 1 ? c[f] : c.readUInt16BE(f * n)
        }
        let u;
        if (r) {
            let c = -1;
            for (u = t; u < s; u++)
                if (l(a, u) === l(e, c === -1 ? 0 : u - c)) {
                    if (c === -1 && (c = u), u - c + 1 === d) return c * n
                } else c !== -1 && (u -= u - c), c = -1
        } else
            for (t + d > s && (t = s - d), u = t; u >= 0; u--) {
                let c = !0;
                for (let f = 0; f < d; f++)
                    if (l(a, u + f) !== l(e, f)) {
                        c = !1;
                        break
                    } if (c) return u
            }
        return -1
    }
    y.prototype.includes = function(e, t, o) {
        return this.indexOf(e, t, o) !== -1
    };
    y.prototype.indexOf = function(e, t, o) {
        return md(this, e, t, o, !0)
    };
    y.prototype.lastIndexOf = function(e, t, o) {
        return md(this, e, t, o, !1)
    };

    function ph(a, e, t, o) {
        t = Number(t) || 0;
        let r = a.length - t;
        o ? (o = Number(o), o > r && (o = r)) : o = r;
        let n = e.length;
        o > n / 2 && (o = n / 2);
        let s;
        for (s = 0; s < o; ++s) {
            let d = parseInt(e.substr(s * 2, 2), 16);
            if (mi(d)) return s;
            a[t + s] = d
        }
        return s
    }

    function mh(a, e, t, o) {
        return an(ui(e, a.length - t), a, t, o)
    }

    function hh(a, e, t, o) {
        return an(Ah(e), a, t, o)
    }

    function gh(a, e, t, o) {
        return an(kd(e), a, t, o)
    }

    function bh(a, e, t, o) {
        return an(Th(e, a.length - t), a, t, o)
    }
    y.prototype.write = function(e, t, o, r) {
        if (t === void 0) r = "utf8", o = this.length, t = 0;
        else if (o === void 0 && typeof t == "string") r = t, o = this.length, t = 0;
        else if (isFinite(t)) t = t >>> 0, isFinite(o) ? (o = o >>> 0, r === void 0 && (r = "utf8")) : (r = o, o = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let n = this.length - t;
        if ((o === void 0 || o > n) && (o = n), e.length > 0 && (o < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        r || (r = "utf8");
        let s = !1;
        for (;;) switch (r) {
            case "hex":
                return ph(this, e, t, o);
            case "utf8":
            case "utf-8":
                return mh(this, e, t, o);
            case "ascii":
            case "latin1":
            case "binary":
                return hh(this, e, t, o);
            case "base64":
                return gh(this, e, t, o);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return bh(this, e, t, o);
            default:
                if (s) throw new TypeError("Unknown encoding: " + r);
                r = ("" + r).toLowerCase(), s = !0
        }
    };
    y.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function yh(a, e, t) {
        return e === 0 && t === a.length ? si.fromByteArray(a) : si.fromByteArray(a.slice(e, t))
    }

    function hd(a, e, t) {
        t = Math.min(a.length, t);
        let o = [],
            r = e;
        for (; r < t;) {
            let n = a[r],
                s = null,
                d = n > 239 ? 4 : n > 223 ? 3 : n > 191 ? 2 : 1;
            if (r + d <= t) {
                let l, u, c, f;
                switch (d) {
                    case 1:
                        n < 128 && (s = n);
                        break;
                    case 2:
                        l = a[r + 1], (l & 192) === 128 && (f = (n & 31) << 6 | l & 63, f > 127 && (s = f));
                        break;
                    case 3:
                        l = a[r + 1], u = a[r + 2], (l & 192) === 128 && (u & 192) === 128 && (f = (n & 15) << 12 | (l & 63) << 6 | u & 63, f > 2047 && (f < 55296 || f > 57343) && (s = f));
                        break;
                    case 4:
                        l = a[r + 1], u = a[r + 2], c = a[r + 3], (l & 192) === 128 && (u & 192) === 128 && (c & 192) === 128 && (f = (n & 15) << 18 | (l & 63) << 12 | (u & 63) << 6 | c & 63, f > 65535 && f < 1114112 && (s = f))
                }
            }
            s === null ? (s = 65533, d = 1) : s > 65535 && (s -= 65536, o.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), o.push(s), r += d
        }
        return xh(o)
    }
    var ld = 4096;

    function xh(a) {
        let e = a.length;
        if (e <= ld) return String.fromCharCode.apply(String, a);
        let t = "",
            o = 0;
        for (; o < e;) t += String.fromCharCode.apply(String, a.slice(o, o += ld));
        return t
    }

    function vh(a, e, t) {
        let o = "";
        t = Math.min(a.length, t);
        for (let r = e; r < t; ++r) o += String.fromCharCode(a[r] & 127);
        return o
    }

    function wh(a, e, t) {
        let o = "";
        t = Math.min(a.length, t);
        for (let r = e; r < t; ++r) o += String.fromCharCode(a[r]);
        return o
    }

    function kh(a, e, t) {
        let o = a.length;
        (!e || e < 0) && (e = 0), (!t || t < 0 || t > o) && (t = o);
        let r = "";
        for (let n = e; n < t; ++n) r += Eh[a[n]];
        return r
    }

    function Ch(a, e, t) {
        let o = a.slice(e, t),
            r = "";
        for (let n = 0; n < o.length - 1; n += 2) r += String.fromCharCode(o[n] + o[n + 1] * 256);
        return r
    }
    y.prototype.slice = function(e, t) {
        let o = this.length;
        e = ~~e, t = t === void 0 ? o : ~~t, e < 0 ? (e += o, e < 0 && (e = 0)) : e > o && (e = o), t < 0 ? (t += o, t < 0 && (t = 0)) : t > o && (t = o), t < e && (t = e);
        let r = this.subarray(e, t);
        return Object.setPrototypeOf(r, y.prototype), r
    };

    function De(a, e, t) {
        if (a % 1 !== 0 || a < 0) throw new RangeError("offset is not uint");
        if (a + e > t) throw new RangeError("Trying to access beyond buffer length")
    }
    y.prototype.readUintLE = y.prototype.readUIntLE = function(e, t, o) {
        e = e >>> 0, t = t >>> 0, o || De(e, t, this.length);
        let r = this[e],
            n = 1,
            s = 0;
        for (; ++s < t && (n *= 256);) r += this[e + s] * n;
        return r
    };
    y.prototype.readUintBE = y.prototype.readUIntBE = function(e, t, o) {
        e = e >>> 0, t = t >>> 0, o || De(e, t, this.length);
        let r = this[e + --t],
            n = 1;
        for (; t > 0 && (n *= 256);) r += this[e + --t] * n;
        return r
    };
    y.prototype.readUint8 = y.prototype.readUInt8 = function(e, t) {
        return e = e >>> 0, t || De(e, 1, this.length), this[e]
    };
    y.prototype.readUint16LE = y.prototype.readUInt16LE = function(e, t) {
        return e = e >>> 0, t || De(e, 2, this.length), this[e] | this[e + 1] << 8
    };
    y.prototype.readUint16BE = y.prototype.readUInt16BE = function(e, t) {
        return e = e >>> 0, t || De(e, 2, this.length), this[e] << 8 | this[e + 1]
    };
    y.prototype.readUint32LE = y.prototype.readUInt32LE = function(e, t) {
        return e = e >>> 0, t || De(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216
    };
    y.prototype.readUint32BE = y.prototype.readUInt32BE = function(e, t) {
        return e = e >>> 0, t || De(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    };
    y.prototype.readBigUInt64LE = da(function(e) {
        e = e >>> 0, ao(e, "offset");
        let t = this[e],
            o = this[e + 7];
        (t === void 0 || o === void 0) && No(e, this.length - 8);
        let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
            n = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + o * 2 ** 24;
        return BigInt(r) + (BigInt(n) << BigInt(32))
    });
    y.prototype.readBigUInt64BE = da(function(e) {
        e = e >>> 0, ao(e, "offset");
        let t = this[e],
            o = this[e + 7];
        (t === void 0 || o === void 0) && No(e, this.length - 8);
        let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
            n = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + o;
        return (BigInt(r) << BigInt(32)) + BigInt(n)
    });
    y.prototype.readIntLE = function(e, t, o) {
        e = e >>> 0, t = t >>> 0, o || De(e, t, this.length);
        let r = this[e],
            n = 1,
            s = 0;
        for (; ++s < t && (n *= 256);) r += this[e + s] * n;
        return n *= 128, r >= n && (r -= Math.pow(2, 8 * t)), r
    };
    y.prototype.readIntBE = function(e, t, o) {
        e = e >>> 0, t = t >>> 0, o || De(e, t, this.length);
        let r = t,
            n = 1,
            s = this[e + --r];
        for (; r > 0 && (n *= 256);) s += this[e + --r] * n;
        return n *= 128, s >= n && (s -= Math.pow(2, 8 * t)), s
    };
    y.prototype.readInt8 = function(e, t) {
        return e = e >>> 0, t || De(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    };
    y.prototype.readInt16LE = function(e, t) {
        e = e >>> 0, t || De(e, 2, this.length);
        let o = this[e] | this[e + 1] << 8;
        return o & 32768 ? o | 4294901760 : o
    };
    y.prototype.readInt16BE = function(e, t) {
        e = e >>> 0, t || De(e, 2, this.length);
        let o = this[e + 1] | this[e] << 8;
        return o & 32768 ? o | 4294901760 : o
    };
    y.prototype.readInt32LE = function(e, t) {
        return e = e >>> 0, t || De(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    };
    y.prototype.readInt32BE = function(e, t) {
        return e = e >>> 0, t || De(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    };
    y.prototype.readBigInt64LE = da(function(e) {
        e = e >>> 0, ao(e, "offset");
        let t = this[e],
            o = this[e + 7];
        (t === void 0 || o === void 0) && No(e, this.length - 8);
        let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (o << 24);
        return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    });
    y.prototype.readBigInt64BE = da(function(e) {
        e = e >>> 0, ao(e, "offset");
        let t = this[e],
            o = this[e + 7];
        (t === void 0 || o === void 0) && No(e, this.length - 8);
        let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
        return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + o)
    });
    y.prototype.readFloatLE = function(e, t) {
        return e = e >>> 0, t || De(e, 4, this.length), to.read(this, e, !0, 23, 4)
    };
    y.prototype.readFloatBE = function(e, t) {
        return e = e >>> 0, t || De(e, 4, this.length), to.read(this, e, !1, 23, 4)
    };
    y.prototype.readDoubleLE = function(e, t) {
        return e = e >>> 0, t || De(e, 8, this.length), to.read(this, e, !0, 52, 8)
    };
    y.prototype.readDoubleBE = function(e, t) {
        return e = e >>> 0, t || De(e, 8, this.length), to.read(this, e, !1, 52, 8)
    };

    function Ke(a, e, t, o, r, n) {
        if (!y.isBuffer(a)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > r || e < n) throw new RangeError('"value" argument is out of bounds');
        if (t + o > a.length) throw new RangeError("Index out of range")
    }
    y.prototype.writeUintLE = y.prototype.writeUIntLE = function(e, t, o, r) {
        if (e = +e, t = t >>> 0, o = o >>> 0, !r) {
            let d = Math.pow(2, 8 * o) - 1;
            Ke(this, e, t, o, d, 0)
        }
        let n = 1,
            s = 0;
        for (this[t] = e & 255; ++s < o && (n *= 256);) this[t + s] = e / n & 255;
        return t + o
    };
    y.prototype.writeUintBE = y.prototype.writeUIntBE = function(e, t, o, r) {
        if (e = +e, t = t >>> 0, o = o >>> 0, !r) {
            let d = Math.pow(2, 8 * o) - 1;
            Ke(this, e, t, o, d, 0)
        }
        let n = o - 1,
            s = 1;
        for (this[t + n] = e & 255; --n >= 0 && (s *= 256);) this[t + n] = e / s & 255;
        return t + o
    };
    y.prototype.writeUint8 = y.prototype.writeUInt8 = function(e, t, o) {
        return e = +e, t = t >>> 0, o || Ke(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1
    };
    y.prototype.writeUint16LE = y.prototype.writeUInt16LE = function(e, t, o) {
        return e = +e, t = t >>> 0, o || Ke(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2
    };
    y.prototype.writeUint16BE = y.prototype.writeUInt16BE = function(e, t, o) {
        return e = +e, t = t >>> 0, o || Ke(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2
    };
    y.prototype.writeUint32LE = y.prototype.writeUInt32LE = function(e, t, o) {
        return e = +e, t = t >>> 0, o || Ke(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4
    };
    y.prototype.writeUint32BE = y.prototype.writeUInt32BE = function(e, t, o) {
        return e = +e, t = t >>> 0, o || Ke(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4
    };

    function gd(a, e, t, o, r) {
        wd(e, o, r, a, t, 7);
        let n = Number(e & BigInt(4294967295));
        a[t++] = n, n = n >> 8, a[t++] = n, n = n >> 8, a[t++] = n, n = n >> 8, a[t++] = n;
        let s = Number(e >> BigInt(32) & BigInt(4294967295));
        return a[t++] = s, s = s >> 8, a[t++] = s, s = s >> 8, a[t++] = s, s = s >> 8, a[t++] = s, t
    }

    function bd(a, e, t, o, r) {
        wd(e, o, r, a, t, 7);
        let n = Number(e & BigInt(4294967295));
        a[t + 7] = n, n = n >> 8, a[t + 6] = n, n = n >> 8, a[t + 5] = n, n = n >> 8, a[t + 4] = n;
        let s = Number(e >> BigInt(32) & BigInt(4294967295));
        return a[t + 3] = s, s = s >> 8, a[t + 2] = s, s = s >> 8, a[t + 1] = s, s = s >> 8, a[t] = s, t + 8
    }
    y.prototype.writeBigUInt64LE = da(function(e, t = 0) {
        return gd(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    y.prototype.writeBigUInt64BE = da(function(e, t = 0) {
        return bd(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    y.prototype.writeIntLE = function(e, t, o, r) {
        if (e = +e, t = t >>> 0, !r) {
            let l = Math.pow(2, 8 * o - 1);
            Ke(this, e, t, o, l - 1, -l)
        }
        let n = 0,
            s = 1,
            d = 0;
        for (this[t] = e & 255; ++n < o && (s *= 256);) e < 0 && d === 0 && this[t + n - 1] !== 0 && (d = 1), this[t + n] = (e / s >> 0) - d & 255;
        return t + o
    };
    y.prototype.writeIntBE = function(e, t, o, r) {
        if (e = +e, t = t >>> 0, !r) {
            let l = Math.pow(2, 8 * o - 1);
            Ke(this, e, t, o, l - 1, -l)
        }
        let n = o - 1,
            s = 1,
            d = 0;
        for (this[t + n] = e & 255; --n >= 0 && (s *= 256);) e < 0 && d === 0 && this[t + n + 1] !== 0 && (d = 1), this[t + n] = (e / s >> 0) - d & 255;
        return t + o
    };
    y.prototype.writeInt8 = function(e, t, o) {
        return e = +e, t = t >>> 0, o || Ke(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1
    };
    y.prototype.writeInt16LE = function(e, t, o) {
        return e = +e, t = t >>> 0, o || Ke(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2
    };
    y.prototype.writeInt16BE = function(e, t, o) {
        return e = +e, t = t >>> 0, o || Ke(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2
    };
    y.prototype.writeInt32LE = function(e, t, o) {
        return e = +e, t = t >>> 0, o || Ke(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
    };
    y.prototype.writeInt32BE = function(e, t, o) {
        return e = +e, t = t >>> 0, o || Ke(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4
    };
    y.prototype.writeBigInt64LE = da(function(e, t = 0) {
        return gd(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    y.prototype.writeBigInt64BE = da(function(e, t = 0) {
        return bd(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });

    function yd(a, e, t, o, r, n) {
        if (t + o > a.length) throw new RangeError("Index out of range");
        if (t < 0) throw new RangeError("Index out of range")
    }

    function xd(a, e, t, o, r) {
        return e = +e, t = t >>> 0, r || yd(a, e, t, 4, 34028234663852886e22, -34028234663852886e22), to.write(a, e, t, o, 23, 4), t + 4
    }
    y.prototype.writeFloatLE = function(e, t, o) {
        return xd(this, e, t, !0, o)
    };
    y.prototype.writeFloatBE = function(e, t, o) {
        return xd(this, e, t, !1, o)
    };

    function vd(a, e, t, o, r) {
        return e = +e, t = t >>> 0, r || yd(a, e, t, 8, 17976931348623157e292, -17976931348623157e292), to.write(a, e, t, o, 52, 8), t + 8
    }
    y.prototype.writeDoubleLE = function(e, t, o) {
        return vd(this, e, t, !0, o)
    };
    y.prototype.writeDoubleBE = function(e, t, o) {
        return vd(this, e, t, !1, o)
    };
    y.prototype.copy = function(e, t, o, r) {
        if (!y.isBuffer(e)) throw new TypeError("argument should be a Buffer");
        if (o || (o = 0), !r && r !== 0 && (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < o && (r = o), r === o || e.length === 0 || this.length === 0) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (o < 0 || o >= this.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), e.length - t < r - o && (r = e.length - t + o);
        let n = r - o;
        return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, o, r) : Uint8Array.prototype.set.call(e, this.subarray(o, r), t), n
    };
    y.prototype.fill = function(e, t, o, r) {
        if (typeof e == "string") {
            if (typeof t == "string" ? (r = t, t = 0, o = this.length) : typeof o == "string" && (r = o, o = this.length), r !== void 0 && typeof r != "string") throw new TypeError("encoding must be a string");
            if (typeof r == "string" && !y.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
            if (e.length === 1) {
                let s = e.charCodeAt(0);
                (r === "utf8" && s < 128 || r === "latin1") && (e = s)
            }
        } else typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
        if (t < 0 || this.length < t || this.length < o) throw new RangeError("Out of range index");
        if (o <= t) return this;
        t = t >>> 0, o = o === void 0 ? this.length : o >>> 0, e || (e = 0);
        let n;
        if (typeof e == "number")
            for (n = t; n < o; ++n) this[n] = e;
        else {
            let s = y.isBuffer(e) ? e : y.from(e, r),
                d = s.length;
            if (d === 0) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
            for (n = 0; n < o - t; ++n) this[n + t] = s[n % d]
        }
        return this
    };
    var eo = {};

    function pi(a, e, t) {
        eo[a] = class extends t {
            constructor() {
                super(), Object.defineProperty(this, "message", {
                    value: e.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${a}]`, this.stack, delete this.name
            }
            get code() {
                return a
            }
            set code(r) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${a}]: ${this.message}`
            }
        }
    }
    pi("ERR_BUFFER_OUT_OF_BOUNDS", function(a) {
        return a ? `${a} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError);
    pi("ERR_INVALID_ARG_TYPE", function(a, e) {
        return `The "${a}" argument must be of type number. Received type ${typeof e}`
    }, TypeError);
    pi("ERR_OUT_OF_RANGE", function(a, e, t) {
        let o = `The value of "${a}" is out of range.`,
            r = t;
        return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? r = ud(String(t)) : typeof t == "bigint" && (r = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (r = ud(r)), r += "n"), o += ` It must be ${e}. Received ${r}`, o
    }, RangeError);

    function ud(a) {
        let e = "",
            t = a.length,
            o = a[0] === "-" ? 1 : 0;
        for (; t >= o + 4; t -= 3) e = `_${a.slice(t-3,t)}${e}`;
        return `${a.slice(0,t)}${e}`
    }

    function Sh(a, e, t) {
        ao(e, "offset"), (a[e] === void 0 || a[e + t] === void 0) && No(e, a.length - (t + 1))
    }

    function wd(a, e, t, o, r, n) {
        if (a > t || a < e) {
            let s = typeof e == "bigint" ? "n" : "",
                d;
            throw n > 3 ? e === 0 || e === BigInt(0) ? d = `>= 0${s} and < 2${s} ** ${(n+1)*8}${s}` : d = `>= -(2${s} ** ${(n+1)*8-1}${s}) and < 2 ** ${(n+1)*8-1}${s}` : d = `>= ${e}${s} and <= ${t}${s}`, new eo.ERR_OUT_OF_RANGE("value", d, a)
        }
        Sh(o, r, n)
    }

    function ao(a, e) {
        if (typeof a != "number") throw new eo.ERR_INVALID_ARG_TYPE(e, "number", a)
    }

    function No(a, e, t) {
        throw Math.floor(a) !== a ? (ao(a, t), new eo.ERR_OUT_OF_RANGE(t || "offset", "an integer", a)) : e < 0 ? new eo.ERR_BUFFER_OUT_OF_BOUNDS : new eo.ERR_OUT_OF_RANGE(t || "offset", `>= ${t?1:0} and <= ${e}`, a)
    }
    var Lh = /[^+/0-9A-Za-z-_]/g;

    function Ih(a) {
        if (a = a.split("=")[0], a = a.trim().replace(Lh, ""), a.length < 2) return "";
        for (; a.length % 4 !== 0;) a = a + "=";
        return a
    }

    function ui(a, e) {
        e = e || 1 / 0;
        let t, o = a.length,
            r = null,
            n = [];
        for (let s = 0; s < o; ++s) {
            if (t = a.charCodeAt(s), t > 55295 && t < 57344) {
                if (!r) {
                    if (t > 56319) {
                        (e -= 3) > -1 && n.push(239, 191, 189);
                        continue
                    } else if (s + 1 === o) {
                        (e -= 3) > -1 && n.push(239, 191, 189);
                        continue
                    }
                    r = t;
                    continue
                }
                if (t < 56320) {
                    (e -= 3) > -1 && n.push(239, 191, 189), r = t;
                    continue
                }
                t = (r - 55296 << 10 | t - 56320) + 65536
            } else r && (e -= 3) > -1 && n.push(239, 191, 189);
            if (r = null, t < 128) {
                if ((e -= 1) < 0) break;
                n.push(t)
            } else if (t < 2048) {
                if ((e -= 2) < 0) break;
                n.push(t >> 6 | 192, t & 63 | 128)
            } else if (t < 65536) {
                if ((e -= 3) < 0) break;
                n.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128)
            } else if (t < 1114112) {
                if ((e -= 4) < 0) break;
                n.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return n
    }

    function Ah(a) {
        let e = [];
        for (let t = 0; t < a.length; ++t) e.push(a.charCodeAt(t) & 255);
        return e
    }

    function Th(a, e) {
        let t, o, r, n = [];
        for (let s = 0; s < a.length && !((e -= 2) < 0); ++s) t = a.charCodeAt(s), o = t >> 8, r = t % 256, n.push(r), n.push(o);
        return n
    }

    function kd(a) {
        return si.toByteArray(Ih(a))
    }

    function an(a, e, t, o) {
        let r;
        for (r = 0; r < o && !(r + t >= e.length || r >= a.length); ++r) e[r + t] = a[r];
        return r
    }

    function Tt(a, e) {
        return a instanceof e || a != null && a.constructor != null && a.constructor.name != null && a.constructor.name === e.name
    }

    function mi(a) {
        return a !== a
    }
    var Eh = function() {
        let a = "0123456789abcdef",
            e = new Array(256);
        for (let t = 0; t < 16; ++t) {
            let o = t * 16;
            for (let r = 0; r < 16; ++r) e[o + r] = a[t] + a[r]
        }
        return e
    }();

    function da(a) {
        return typeof BigInt > "u" ? Mh : a
    }

    function Mh() {
        throw new Error("BigInt not supported")
    }
});
var we, Ot = x(() => {
    "use strict";
    we = class {
        initialize() {}
        #e = new Set;
        addChangeListener(e) {
            return this.#e.add(e), () => this.removeChangeListener(e)
        }
        removeChangeListener(e) {
            this.#e.delete(e)
        }
        emitChange() {
            for (let e of this.#e) e()
        }
    };
    Object.freeze(we);
    Object.freeze(we.prototype)
});
var Fo, W, He = x(() => {
    "use strict";
    Fo = Ae(require("path"), 1);
    Ot();
    W = new class extends we {
        data = {
            branch: "main",
            commit: "e2c2f599",
            build: "production",
            version: "1.13.12",
            appPath: process.env.DISCORD_APP_PATH,
            userData: process.env.DISCORD_USER_DATA,
            bdPath: process.env.BETTERDISCORD_DATA_PATH,
            dataPath: Fo.default.join(process.env.BETTERDISCORD_DATA_PATH, "data"),
            pluginsPath: Fo.default.join(process.env.BETTERDISCORD_DATA_PATH, "plugins"),
            themesPath: Fo.default.join(process.env.BETTERDISCORD_DATA_PATH, "themes"),
            channelPath: Fo.default.join(process.env.BETTERDISCORD_DATA_PATH, "data", window?.DiscordNative?.app?.getReleaseChannel?.() ?? "stable")
        };
        get(e) {
            return this.data[e]
        }
        set(e, t) {
            this.data[e] = t, this.emitChange()
        }
        get isDevelopment() {
            return this.data.build !== "production"
        }
        get isCanary() {
            return this.data.branch !== "main"
        }
    }
});
var Ed, N, Fe = x(() => {
    "use strict";
    Ed = Ae(require("events"), 1), N = new class extends Ed.default {
        constructor() {
            super(), this.setMaxListeners(20)
        }
        dispatch(e, ...t) {
            this.emit(e, ...t)
        }
    }
});
var Md, Dd, Pd = x(() => {
    "use strict";
    He();
    Md = [{
        type: "category",
        id: "general",
        collapsible: !0,
        settings: [{
            type: "switch",
            id: "voiceDisconnect",
            value: !1
        }, {
            type: "switch",
            id: "showToasts",
            value: !0
        }, {
            type: "switch",
            id: "mediaKeys",
            value: !1
        }, {
            type: "switch",
            id: "themeAttributes",
            value: !0
        }, {
            type: "position",
            id: "notificationPosition",
            value: "top-right",
            inline: !1,
            enableWith: "notificationEnabled"
        }, {
            type: "switch",
            id: "notificationEnabled",
            value: !0
        }]
    }, {
        type: "category",
        id: "addons",
        collapsible: !0,
        shown: !1,
        settings: [{
            type: "switch",
            id: "addonErrors",
            value: !0
        }, {
            type: "dropdown",
            id: "editAction",
            value: "detached",
            options: [{
                value: "detached"
            }, {
                value: "external"
            }, {
                value: "system"
            }]
        }, {
            type: "switch",
            id: "checkForUpdates",
            value: !0
        }, {
            type: "slider",
            id: "updateInterval",
            value: 4,
            min: 2,
            max: 12,
            step: 1,
            markers: [2, 4, 6, 8, 10, 12],
            units: "hrs",
            enableWith: "checkForUpdates"
        }]
    }, {
        type: "category",
        id: "store",
        collapsible: !0,
        shown: !1,
        settings: [{
            type: "switch",
            id: "bdAddonStore",
            value: !0
        }, {
            type: "switch",
            id: "alwaysEnable",
            value: !1
        }, {
            type: "switch",
            id: "addonEmbeds",
            value: !0
        }]
    }, {
        type: "category",
        id: "customcss",
        collapsible: !0,
        shown: !1,
        settings: [{
            type: "switch",
            id: "customcss",
            value: !0
        }, {
            type: "switch",
            id: "liveUpdate",
            value: !1
        }, {
            type: "dropdown",
            id: "openAction",
            value: "settings",
            options: [{
                value: "settings"
            }, {
                value: "detached"
            }, {
                value: "external"
            }, {
                value: "system"
            }]
        }]
    }, {
        type: "category",
        id: "editor",
        collapsible: !0,
        shown: !1,
        settings: [{
            type: "dropdown",
            id: "theme",
            value: "system",
            options: [{
                value: "system"
            }, {
                value: "vs-dark"
            }, {
                value: "vs"
            }, {
                value: "hc-black"
            }, {
                value: "hc-light"
            }]
        }, {
            type: "switch",
            id: "lineNumbers",
            value: !0
        }, {
            type: "switch",
            id: "minimap",
            value: !0
        }, {
            type: "switch",
            id: "hover",
            value: !0
        }, {
            type: "switch",
            id: "quickSuggestions",
            value: !0
        }, {
            type: "switch",
            id: "insertSpaces",
            value: !1
        }, {
            type: "number",
            id: "tabSize",
            min: 1,
            value: 4
        }, {
            type: "number",
            id: "fontSize",
            min: 2,
            value: 14
        }, {
            type: "dropdown",
            id: "renderWhitespace",
            value: "selection",
            options: [{
                value: "none"
            }, {
                value: "all"
            }, {
                value: "selection"
            }]
        }]
    }, {
        type: "category",
        id: "window",
        collapsible: !0,
        shown: !1,
        settings: [{
            type: "switch",
            id: "transparency",
            value: !1
        }, {
            type: "switch",
            id: "removeMinimumSize",
            value: !1
        }, {
            type: "switch",
            id: "frame",
            value: !1
        }, {
            type: "switch",
            id: "inAppTrafficLights",
            value: !1,
            disabled: process.env.BETTERDISCORD_NATIVE_FRAME === "true",
            hidden: process.platform !== "darwin"
        }]
    }, {
        type: "category",
        id: "developer",
        collapsible: !0,
        shown: !1,
        settings: [{
            type: "switch",
            id: "debugLogs",
            value: !1
        }, {
            type: "switch",
            id: "devTools",
            value: !1
        }, {
            type: "switch",
            id: "debuggerHotkey",
            value: !1,
            enableWith: "devTools"
        }, {
            type: "switch",
            id: "reactDevTools",
            value: !1,
            enableWith: "devTools"
        }, {
            type: "switch",
            id: "inspectElement",
            value: !1,
            enableWith: "devTools"
        }, {
            type: "switch",
            id: "devToolsWarning",
            value: !1,
            enableWith: "devTools"
        }, {
            type: "switch",
            id: "recovery",
            value: !0,
            enableWith: "devTools"
        }, {
            type: "switch",
            id: "canary",
            value: W.isCanary,
            hidden: !0
        }]
    }];
    W.isDevelopment && Md.push({
        type: "category",
        id: "debug",
        name: "Debug",
        collapsible: !0,
        shown: !0,
        settings: [{
            name: "Text test",
            note: "Just testing it",
            type: "text",
            id: "texttest",
            value: ""
        }, {
            name: "Slider test",
            note: "Just testing it",
            type: "slider",
            id: "slidertest",
            value: 30,
            min: 20,
            max: 50,
            step: 10,
            units: "em",
            markers: [{
                label: "max",
                value: 50
            }, 30, {
                label: "min",
                value: 20
            }, {
                label: "anything",
                value: 40
            }]
        }, {
            name: "Radio test",
            note: "Just testing it",
            type: "radio",
            id: "radiotest",
            value: "test",
            options: [{
                name: "First",
                value: 30,
                description: "little hint"
            }, {
                name: "IDK",
                value: "test",
                description: "who cares"
            }, {
                name: "Something",
                value: 666,
                description: "something else"
            }, {
                name: "Last",
                value: "last",
                description: "nothing more to add"
            }]
        }, {
            type: "slider",
            id: "maxWidth",
            name: "Notification Width",
            note: "Maximum width of notifications",
            value: 370,
            min: 100,
            max: 400,
            markers: [100, 200, 300, 400],
            units: "px",
            defaultValue: 370,
            stickToMarkers: !1
        }, {
            name: "Keybind test",
            note: "Just testing it",
            type: "keybind",
            id: "keybindtest",
            value: ["Control", "H"]
        }, {
            name: "Color test",
            note: "Just testing it",
            type: "color",
            id: "colortest",
            value: "#ff0000",
            defaultValue: "#ffffff"
        }]
    });
    Dd = Md
});
var zd = x(() => {
    "use strict"
});

function io(a, e) {
    let t;
    return function(...o) {
        clearTimeout(t), t = setTimeout(() => a(...o), e)
    }
}
var Bd = x(() => {
    "use strict"
});

function Nd(a) {
    let e = [];
    for (let t = 0; t < a.length; t++) {
        let o = a[t];
        typeof o != "object" || o === null ? e[t] = o : Array.isArray(o) ? e[t] = Nd(o) : e[t] = Rt({}, o)
    }
    return e
}

function Ph(a) {
    if (typeof a != "object" || a === null || Array.isArray(a)) return !0
}

function Rt(a, ...e) {
    if (e.length < 1) throw new Error("Needs at least 1 extenders");
    for (let t = 0; t < e.length; t++) {
        let o = e[t];
        if (!Ph(o))
            for (let r in o) {
                if (!(r in o)) continue;
                let n = a[r],
                    s = o[r];
                s !== a && (typeof s != "object" || s === null ? a[r] = s : Array.isArray(s) ? a[r] = Nd(s) : typeof n != "object" || n === null || Array.isArray(n) ? a[r] = Rt({}, s) : a[r] = Rt(n, s))
            }
    }
    return a
}
var Fd = x(() => {
    "use strict"
});

function ke(a, e, {
    walkable: t = null,
    ignore: o = []
} = {}) {
    if (typeof e == "string") {
        if (a?.hasOwnProperty(e)) return a[e]
    } else if (e(a)) return a;
    if (typeof a != "object" || a == null) return;
    let r;
    if (a instanceof Array) {
        for (let n of a)
            if (r = ke(n, e, {
                    walkable: t,
                    ignore: o
                }), typeof r < "u") return r
    } else {
        let n = t ?? Object.keys(a);
        for (let s of n)
            if (!(typeof a[s] > "u" || o.includes(s)) && (r = ke(a[s], e, {
                    walkable: t,
                    ignore: o
                }), typeof r < "u")) return r
    }
    return r
}
var Od = x(() => {
    "use strict"
});

function so(a, e) {
    for (let t in e) {
        let o = e[t];
        typeof o == "function" && (o = o()), o !== void 0 && (o === null && (o = "null"), Array.isArray(o) && (o = JSON.stringify(o)), typeof o == "object" && o !== null && (o = o.toString()), a = a.replace(new RegExp(`{{${t}}}`, "g"), o?.toString() ?? "null"))
    }
    return a
}
var Rd = x(() => {
    "use strict"
});

function sn(a) {
    let e = new Proxy(a, {
        get: function(t, o) {
            if (typeof o == "symbol") return null;
            if (Object.prototype.hasOwnProperty.call(t, o)) {
                if (Object.getOwnPropertyDescriptor(t, o)?.get) {
                    let r = t[o];
                    delete t[o], t[o] = r
                }
                return t[o]
            }
        },
        set: function(t, o, r) {
            return typeof o == "symbol" || Object.prototype.hasOwnProperty.call(t, o) ? !1 : (t[o] = r, !0)
        }
    });
    return Object.defineProperty(e, "hasOwnProperty", {
        value: function(t) {
            return this[t] !== void 0
        }
    }), e
}
var Ud = x(() => {
    "use strict"
});

function ft(a, e, t) {
    if (!e) return a;
    let o = e.split(".");
    return t && o.pop(), o.reduce((r, n) => r && r[n], a)
}
var jd = x(() => {
    "use strict"
});
var pt = x(() => {
    "use strict";
    zd();
    Bd();
    Fd();
    Od();
    Rd();
    Ud();
    jd()
});

function Wd(a) {
    for (let e in a) {
        if (!Reflect.has(a, e) || Reflect.has(X.c, e)) continue;
        let t = a[e],
            o = (n, s, d) => {
                try {
                    let l = [...dn];
                    for (let u = 0; u < l.length; u++) try {
                        l[u](s, n, n.id)
                    } catch (c) {
                        b.stacktrace("WebpackModules", "Could not fire callback listener:", c)
                    }
                } catch (l) {
                    b.stacktrace("WebpackModules", "Could not patch pushed module", l)
                } finally {
                    d.m[e] = t
                }
            };
        a[e] = (n, s, d) => {
            try {
                Reflect.apply(t, null, [n, s, d])
            } finally {
                d.m[e] = t, o(n, s, d)
            }
        };
        let r = String(t);
        Object.assign(a[e], t, {
            toString: () => r,
            __BD__: {
                runListeners: o,
                originalModule: t
            }
        })
    }
}

function qd(a) {
    let [, e] = a;
    return Wd(e), Reflect.apply(Hd, window.webpackChunkdiscord_app, [a])
}
var X, dn, Hd, ln, lo = x(() => {
    "use strict";
    ee();
    dn = new Set, Hd = window.webpackChunkdiscord_app.push;
    Object.defineProperty(window.webpackChunkdiscord_app, "push", {
        configurable: !0,
        get: () => qd,
        set: a => {
            Hd = a, Object.defineProperty(window.webpackChunkdiscord_app, "push", {
                value: qd,
                configurable: !0,
                writable: !0
            })
        }
    });
    window.webpackChunkdiscord_app.push([
        [Symbol("BetterDiscord")], {},
        a => {
            "b" in a && (X = a, Wd(a.m))
        }
    ]);
    ln = new Proxy({}, {
        ownKeys() {
            return Object.keys(X.m)
        },
        getOwnPropertyDescriptor() {
            return {
                enumerable: !0,
                configurable: !0
            }
        },
        get(a, e) {
            return X.m[e]
        },
        set() {
            throw new Error("[WebpackModules~modules] Setting modules is not allowed.")
        }
    })
});
var F = {};
Qr(F, {
    byDisplayName: () => fn,
    byKeys: () => un,
    byPrototypeKeys: () => bi,
    byRegex: () => _d,
    bySource: () => uo,
    byStoreName: () => zh,
    byStrings: () => cn,
    combine: () => Bh,
    not: () => Nh
});

function Ut(a, e) {
    return Object.assign(a, {
        [Symbol.for("BetterDiscord.Filter")]: e
    })
}

function un(a, e = t => t) {
    return Ut(t => {
        if (!t || typeof t != "object" && typeof t != "function") return !1;
        let o = e(t);
        if (!o) return !1;
        for (let r = 0; r < a.length; r++)
            if (!(a[r] in o)) return !1;
        return !0
    }, {
        props: a,
        filter: e
    })
}

function bi(a, e = t => t) {
    return Ut(t => {
        if (!t || typeof t != "object" && typeof t != "function") return !1;
        let o = e(t);
        if (!o || !o.prototype) return !1;
        for (let r = 0; r < a.length; r++)
            if (!(a[r] in o.prototype)) return !1;
        return !0
    }, {
        fields: a,
        filter: e
    })
}

function _d(a, e = t => t) {
    return Ut(t => {
        let o = e(t);
        if (!o) return !1;
        let r = "";
        try {
            r = o.toString([])
        } catch {
            r = o.toString()
        }
        return r.search(a) !== -1
    }, {
        search: a,
        filter: e
    })
}

function uo(...a) {
    let e = X.m;
    return Ut((t, o) => {
        let r = o?.id;
        if (!r) return !1;
        let n;
        try {
            n = e[r].toString()
        } catch {
            return !1
        }
        if (!n) return !1;
        for (let s = 0; s < a.length; s++) {
            let d = a[s];
            if (typeof d == "string") {
                if (!n.includes(d)) return !1
            } else if (!d.test(n)) return !1
        }
        return !0
    }, {
        searches: a
    })
}

function cn(...a) {
    return Ut(e => {
        if (typeof e != "function") return !1;
        try {
            let t = String(e);
            for (let o of a)
                if (!t.includes(o)) return !1;
            return !0
        } catch {
            return !1
        }
    }, {
        strings: a
    })
}

function fn(a) {
    return Ut(e => e && e.displayName === a, {
        name: a
    })
}

function zh(a) {
    return Ut(e => e?._dispatchToken && e?.getName?.() === a, {
        name: a
    })
}

function Bh(...a) {
    return Ut((e, t, o) => a.every(r => r(e, t, o)), {
        filters: a
    })
}

function Nh(a) {
    return Ut((e, t, o) => !a(e, t, o), {
        filter: a
    })
}
var pn = x(() => {
    "use strict";
    lo()
});

function rt(a) {
    return !!(!(typeof a == "object" || typeof a == "function") || !a || a.TypedArray || a === window || a === document.documentElement || a[Symbol.toStringTag] === "DOMTokenList" || a === Symbol || a instanceof Window || a instanceof Fh || a.$$loader && a.$$baseObject || a.Z?.$$loader && a.Z?.$$baseObject)
}

function Sa(a) {
    if ("A" in a.exports) return "A";
    if ("Ay" in a.exports) return "Ay";
    if (a.exports.__esModule && "default" in a.exports) return "default"
}
var Vd, Ca, Fh, Et, mn = x(() => {
    "use strict";
    ee();
    Vd = new WeakSet, Ca = a => Object.assign((e, t, o) => {
        try {
            return e instanceof Window || e?.default?.remove && e?.default?.set && e?.default?.clear && e?.default?.get && !e?.default?.sort || e.remove && e.set && e.clear && e.get && !e.sort || e?.default?.getToken || e?.default?.getEmail || e?.default?.showToken || e.getToken || e.getEmail || e.showToken ? !1 : a(e, t, o)
        } catch (r) {
            return Vd.has(a) || b.warn("WebpackModules~getModule", "Module filter threw an exception.", r, {
                filter: a,
                module: t
            }), Vd.add(a), !1
        }
    }, {
        __originalFilter: a
    }), Fh = Object.getPrototypeOf(Uint8Array);
    Et = () => new Error("Module search failed!")
});
var yi, mt, xi = x(() => {
    "use strict";
    zo();
    yi = Ae(require("path"), 1);
    He();
    mt = class {
        static data;
        static get(e) {
            return this.data || this.load(), this.data[e]
        }
        static set(e, t) {
            this.data[e] = t, this.saveDebounced()
        }
        static load() {
            let e = yi.default.resolve(W.get("channelPath"), "webpack.json");
            try {
                let t = Ne.readFileSync(e).toString();
                this.data = JSON.parse(t)
            } catch {
                this.data = {}
            }
        }
        static saveDebounceTimeout;
        static saveTimeout;
        static saveDebounced() {
            this.saveDebounceTimeout && clearTimeout(this.saveDebounceTimeout), this.saveDebounceTimeout = setTimeout(() => {
                this.save(), this.saveTimeout && (clearTimeout(this.saveTimeout), this.saveTimeout = void 0)
            }, 100), this.saveTimeout || (this.saveTimeout = setTimeout(() => {
                this.save(), this.saveTimeout = void 0, this.saveDebounceTimeout && clearTimeout(this.saveDebounceTimeout)
            }, 1e4))
        }
        static save() {
            let e = yi.default.resolve(W.get("channelPath"), "webpack.json");
            Ne.writeFileSync(e, JSON.stringify(this.data, null, 4))
        }
        static stackPluginRegex = /\/([^\/]+)\.plugin\.js:(\d+):(\d+)/g;
        static getIdFromStack(e) {
            let o = new Error().stack.matchAll(this.stackPluginRegex),
                r = null,
                n = null,
                s = 0;
            for (let d of o) d[1] !== r && (r = d[1], n = d[1]), s = (s << 5) - s + parseInt(d[2]), s = (s << 5) - s + parseInt(d[3]);
            if (n) return `${n}:${s>>>0}${e!==void 0?`:${e}`:""}`
        }
    }
});

function vi(a, e, t) {
    let {
        defaultExport: o = !0,
        searchExports: r = !1,
        searchDefault: n = !0,
        raw: s = !1
    } = t;
    if (rt(a.exports)) return;
    if (e(a.exports, a, a.id)) return s ? a : a.exports;
    if (!r && !n) return;
    let d, l = [];
    r ? l.push(...Object.keys(a.exports)) : n && (d = Sa(a)) && l.push(d);
    for (let u = 0; u < l.length; u++) {
        let c = l[u],
            f = a.exports[c];
        if (!rt(f) && e(f, a, a.id)) return !o && d === c ? a.exports : s ? a : f
    }
}

function de(a, e = {}) {
    if (a = Ca(a), e.firstId) {
        let r = X.c[e.firstId];
        if (r) {
            let n = vi(r, a, e);
            if (n) return n
        }
    }
    let t = e.cacheId;
    if (!t && t !== null && (t = mt.getIdFromStack()), t) {
        let r = mt.get(t),
            n = X.c[r];
        if (n) {
            let s = vi(n, a, e);
            if (s) return s
        }
    }
    let o = Object.keys(X.c);
    for (let r = 0; r < o.length; r++) {
        let n = X.c[o[r]],
            s = vi(n, a, e);
        if (s) return t && mt.set(t, o[r]), s
    }
    if (e.fatal) throw Et()
}

function co(a, e = {}) {
    let {
        defaultExport: t = !0,
        searchExports: o = !1,
        searchDefault: r = !0,
        raw: n = !1,
        fatal: s = !1
    } = e;
    a = Ca(a);
    let d = [],
        l = Object.values(X.c);
    for (let u = 0; u < l.length; u++) {
        let c = l[u];
        if (rt(c.exports) || (a(c.exports, c, c.id) && d.push(n ? c : c.exports), !o && !r)) continue;
        let f, m = [];
        o ? m.push(...Object.keys(c.exports)) : r && (f = Sa(c)) && m.push(f);
        for (let h = 0; h < m.length; h++) {
            let g = m[h],
                k = c.exports[g];
            if (!rt(k) && a(k, c, c.id)) {
                if (!t && f === g) {
                    d.push(c.exports);
                    continue
                }
                d.push(n ? c : k)
            }
        }
    }
    if (s && d.length === 0) throw Et();
    return d
}
var Oo = x(() => {
    "use strict";
    mn();
    lo();
    xi()
});

function Oe(a, e = {}) {
    let {
        signal: t,
        defaultExport: o = !0,
        searchDefault: r = !0,
        searchExports: n = !1,
        raw: s = !1,
        fatal: d = !1
    } = e;
    if (e.cacheId || (e.cacheId = null), t?.aborted) return d ? Promise.reject(Et()) : Promise.resolve(void 0);
    let l = de(a, e);
    return l ? Promise.resolve(l) : (a = Ca(a), new Promise((u, c) => {
        let f = () => void dn.delete(m),
            m = (h, g) => {
                if (rt(g.exports)) return;
                if (a(g.exports, g, g.id)) {
                    u(s ? g : g.exports), f();
                    return
                }
                if (!n && !r) return;
                let k, L = [];
                n ? L.push(...Object.keys(g.exports)) : r && (k = Sa(g)) && L.push(k);
                for (let R = 0; R < L.length; R++) {
                    let T = L[R],
                        H = g.exports[T];
                    if (!rt(H) && a(H, g, g.id)) {
                        if (!o && k === T) {
                            u(s ? g : g.exports), f();
                            return
                        }
                        u(s ? g : H), f()
                    }
                }
            };
        dn.add(m), t?.addEventListener("abort", () => {
            f(), d ? c(Et()) : u(void 0)
        })
    }))
}
async function Kd(a) {
    if (typeof X.m[a] > "u") return [];
    let e = String(X.m[a]),
        t = [],
        o;
    for (;
        (o = Rh.exec(e)) !== null;) {
        let d = o[1],
            l = o[2],
            u = [],
            c = d.matchAll(Gd);
        for (let h of c) u.push(h[1]);
        let f = parseInt(l, 10);
        await Promise.all(u.map(h => X.e(h)));
        let m = X(f);
        t.push(m)
    }
    let r = [],
        n;
    for (;
        (n = Gd.exec(e)) !== null;) r.push(n[1]);
    let s = e.matchAll(Oh);
    for (let d of s) {
        await Promise.all(r.map(u => X.e(u)));
        let l = X(d[1]);
        t.push(l)
    }
    return t
}
var Gd, Oh, Rh, wi = x(() => {
    "use strict";
    Oo();
    lo();
    mn();
    Gd = /n\.e\("(\d+)"\)/g, Oh = /n\.bind\(n,\s*(\d+)\s*\)/g, Rh = /createPromise:\s*\(\)\s*=>\s*([^}]+)\.then\(n\.bind\(n,\s*(\d+)\)\)/g
});

function* Mt(a, {
    target: e = null,
    ...t
} = {}) {
    yield e ??= de(o => Object.values(o).some(a), t), yield e && Object.keys(e).find(o => a(e[o]))
}

function Ci(a, e = {}) {
    let {
        raw: t,
        fatal: o
    } = e, r = X.c[a];
    if (!rt(r?.exports)) return t ? r : r.exports;
    if (o) throw Et()
}

function hn(a, e) {
    let t = {},
        o = Object.keys(a),
        r = Object.keys(e);
    for (let n = 0; n < o.length; n++) {
        let s = o[n];
        if (Object.prototype.hasOwnProperty.call(a, s))
            for (let d = 0; d < r.length; d++) {
                let l = r[d];
                Object.prototype.hasOwnProperty.call(e, l) && (Object.prototype.hasOwnProperty.call(t, l) || e[l](a[s]) && Object.defineProperty(t, l, {
                    get() {
                        return a[s]
                    },
                    set(u) {
                        a[s] = u
                    },
                    enumerable: !0,
                    configurable: !1
                }))
            }
    }
    for (let n = 0; n < r.length; n++) {
        let s = r[n];
        Object.prototype.hasOwnProperty.call(t, s) || Object.defineProperty(t, s, {
            value: void 0,
            enumerable: !0,
            configurable: !1
        })
    }
    return Object.defineProperty(t, Symbol("betterdiscord.getMangled"), {
        value: a,
        configurable: !1
    }), t
}

function la(a, e, t = {}) {
    (typeof a == "string" || a instanceof RegExp) && (a = uo(a));
    let o = typeof a == "number" ? Ci(a, t) : de(a, t);
    return o ? (t.raw && (o = o.exports), hn(o, e)) : {}
}

function ki(a, e) {
    let {
        filter: t,
        defaultExport: o = !0,
        searchExports: r = !1,
        searchDefault: n = !0,
        raw: s = !1,
        map: d
    } = e;
    if (t(a.exports, a, a.id)) return d ? hn(a.exports, d) : s ? a : a.exports;
    let l, u = [];
    r ? u.push(...Object.keys(a.exports)) : n && (l = Sa(a)) && u.push(l);
    for (let c of u) {
        let f = a.exports[c];
        if (!rt(f) && t(f, a, a.id)) {
            let m;
            return !o && l === c ? m = d ? hn(a.exports, d) : s ? a : a.exports : m = d ? hn(s ? a.exports : f, d) : s ? a : f, m
        }
    }
}

function Si(...a) {
    let e = Array(a.length);
    if (a.length === 0) return e;
    a = a.map((n, s) => ({
        ...n,
        filter: Ca(n.filter),
        cacheId: n.cacheId || (n.cacheId === null ? void 0 : mt.getIdFromStack(s))
    }));
    let t = a.every(n => !n.all),
        o = () => t && a.every((n, s) => s in e);
    for (let n = 0; n < a.length; n++) {
        let {
            firstId: s
        } = a[n];
        if (!s) continue;
        let d = X.c[s];
        if (!d) continue;
        let l = ki(d, a[n]);
        l && (e[n] = l)
    }
    if (o()) return e;
    for (let n = 0; n < a.length; n++) {
        let {
            all: s,
            cacheId: d
        } = a[n];
        if (s || !d) continue;
        let l = mt.get(d);
        if (!l) continue;
        let u = X.c[l];
        if (!u) continue;
        let c = ki(u, a[n]);
        c && (e[n] = c)
    }
    if (o()) return e;
    let r = Object.keys(X.c);
    e: for (let n = 0; n < r.length; n++) {
        let s = X.c[r[n]];
        if (!rt(s.exports))
            for (let d = 0; d < a.length; d++) {
                let {
                    all: l = !1,
                    cacheId: u
                } = a[d];
                if (!l && d in e) continue;
                let c = ki(s, a[d]);
                if (c) {
                    if (!l) {
                        if (e[d] = c, u && mt.set(u, r[n]), o()) break e;
                        continue
                    }
                    e[d] ??= [], e[d].push(c)
                }
            }
    }
    for (let n = 0; n < a.length; n++) {
        let s = a[n],
            d = n in e;
        if (s.fatal) {
            if (s.all && (!Array.isArray(e[n]) || e[n].length === 0)) throw Et();
            if (!d) throw Et()
        }
        s.map && !d && (e[n] = {})
    }
    return e
}

function gn(a) {
    let e = Si(...Object.values(a));
    return Object.fromEntries(Object.keys(a).map((t, o) => [t, e[o]]))
}
var $d = x(() => {
    "use strict";
    pn();
    Oo();
    mn();
    lo();
    xi()
});

function te(a, e = {}) {
    return de(un(a), e)
}

function Zd(a, e = {}) {
    return Oe(un(a), e)
}

function Xd(a, e = {}) {
    return de(bi(a), e)
}

function ht(a, e = {}) {
    return de(cn(...a), e)
}

function fo(a, e = {}) {
    return Oe(cn(...a), e)
}

function Jd(a, e = {}) {
    return de(uo(...a), e)
}

function Yd(a, e = {}) {
    return Oe(uo(...a), e)
}

function Qd(a, e = {}) {
    return de(fn(a), e)
}

function el(a, e = {}) {
    return Oe(fn(a), e)
}
var tl = x(() => {
    "use strict";
    pn();
    Oo();
    wi()
});

function La(a) {
    return ua || (ua = de(e => e.Store?.getAll, {
        firstId: 311907,
        cacheId: "core-stores-Flux"
    })), ua ? ua.Store.getAll().find(e => e.getName() === a) : de(F.byStoreName(a))
}
var ua, Pe, al = x(() => {
    "use strict";
    pe();
    Pe = new Proxy({}, {
        ownKeys() {
            return ua || (ua = de(a => a.Store?.getAll, {
                firstId: 311907,
                cacheId: "core-stores-Flux"
            })), ua ? [...new Set(ua.Store.getAll().map(a => a.getName()).filter(a => a.length > 3))] : []
        },
        getOwnPropertyDescriptor() {
            return {
                enumerable: !0,
                configurable: !0
            }
        },
        get(a, e) {
            return typeof a[e] > "u" ? a[e] = La(e) : a[e]
        },
        set() {
            throw new Error("[WebpackModules~Stores] Setting stores is not allowed.")
        }
    });
    Object.entries(Pe)
});
var pe = x(() => {
    "use strict";
    pn();
    Oo();
    wi();
    $d();
    lo();
    tl();
    al()
});
var ol, Uh, jh, C, _ = x(() => {
    "use strict";
    pt();
    pe();
    ol = gn({
        React: {
            filter: F.byKeys(["createElement", "cloneElement"]),
            firstId: 483362,
            cacheId: "core-React"
        },
        ReactSpring: {
            filter: F.byKeys(["useTransition", "animated"]),
            firstId: 429783,
            cacheId: "core-ReactSpring"
        },
        SimpleMarkdownWrapper: {
            filter: F.byKeys(["defaultReactOutput"]),
            firstId: 791332,
            searchExports: !0,
            cacheId: "core-SimpleMarkdownWrapper"
        },
        Dispatcher: {
            filter: F.byKeys(["dispatch", "subscribe", "register"]),
            searchExports: !0,
            firstId: 570140,
            cacheId: "core-Dispatcher"
        },
        Tooltip: {
            filter: F.byPrototypeKeys(["renderTooltip"]),
            searchExports: !0,
            firstId: 481060,
            cacheId: "core-Tooltip"
        },
        AccessibilityContext: {
            filter: a => a?._currentValue?.reducedMotion,
            searchExports: !0,
            firstId: 159691,
            cacheId: "core-AccessibilityContext"
        },
        ChannelActions: {
            filter: F.byKeys(["selectPrivateChannel"]),
            firstId: 287734,
            cacheId: "core-ChannelActions"
        }
    });
    ol.Tooltip ??= a => a.children?.({}) ?? null;
    Uh = sn({
        get InviteActions() {
            return te(["createInvite"], {
                firstId: 846293,
                cacheId: "core-InviteActions"
            })
        },
        get SimpleMarkdown() {
            return te(["reactParserFor"], {
                firstId: 46054,
                cacheId: "core-SimpleMarkdown"
            })
        },
        get promptToUpload() {
            return ht(["getUploadCount", ".UPLOAD_FILE_LIMIT_ERROR"], {
                searchExports: !0,
                firstId: 518960,
                cacheId: "core-promptToUpload"
            })
        },
        get RemoteModule() {
            return te(["setBadge"], {
                firstId: 837921,
                cacheId: "core-RemoteModule"
            })
        },
        get UserAgentInfo() {
            return te(["os", "layout"], {
                firstId: 214958,
                cacheId: "core-UserAgentInfo"
            })
        },
        get GetClientInfo() {
            return ht(["versionHash"], {
                firstId: 551602,
                cacheId: "core-GetClientInfo"
            })
        },
        get MessageUtils() {
            return te(["sendMessage"], {
                firstId: 843472,
                cacheId: "core-MessageUtils"
            })
        },
        get LinkParser() {
            return de(a => a.html && a.requiredFirstCharacters?.[0] === "[", {
                firstId: 694403,
                cacheId: "core-LinkParser"
            })
        },
        get DiscordMarkdown() {
            return de(a => a?.prototype?.render && a.rules, {
                firstId: 558179,
                cacheId: "core-DiscordMarkdown"
            })
        },
        get Layout() {
            return Jd(["$Root", "buildLayout"], {
                searchDefault: !1,
                firstId: 419954,
                cacheId: "core-Layout"
            })
        },
        get NoticesBaseClasses() {
            return te(["container", "base", "sidebar"], {
                cacheId: "core-NoticesBaseClasses"
            })
        },
        get NoticesPageClasses() {
            return te(["errorPage"], {
                cacheId: "core-NoticesPageClasses"
            })
        },
        get ViewClasses() {
            return te(["standardSidebarView"], {
                cacheId: "core-ViewClasses"
            })
        }
    }), jh = Object.assign(Uh, ol), C = jh
});
var qh, Hh, Wh, gt, po = x(() => {
    "use strict";
    pe();
    qh = te(["createPortal"], {
        firstId: 340287,
        cacheId: "core-reactdom-base"
    }), Hh = te(["createRoot"], {
        firstId: 507240,
        cacheId: "core-reactdom-client"
    }), Wh = Object.assign({}, qh, Hh), gt = Wh
});
var rl, i, Ro, sC, dC, nl, lC, il, Uo, uC, bn, cC, sl, fC, nt, yn, pC, mC, hC, gC, bC, xn, vn, dl, ll, ca, jt, yC, xC, I = x(() => {
    "use strict";
    _();
    po();
    rl = C.React, i = rl, Ro = gt, {
        Children: sC,
        Component: dC,
        Fragment: nl,
        cloneElement: lC,
        createContext: il,
        createElement: Uo,
        createRef: uC,
        forwardRef: bn,
        lazy: cC,
        memo: sl,
        startTransition: fC,
        useCallback: nt,
        useContext: yn,
        useDebugValue: pC,
        useDeferredValue: mC,
        useEffect: hC,
        useId: gC,
        useImperativeHandle: bC,
        useInsertionEffect: xn,
        useLayoutEffect: vn,
        useMemo: dl,
        useReducer: ll,
        useRef: ca,
        useState: jt,
        useSyncExternalStore: yC,
        useTransition: xC
    } = rl
});
var wn, Q, Dt = x(() => {
    "use strict";
    zo();
    wn = Ae(require("path"), 1);
    Ot();
    He();
    ee();
    I();
    Q = new class extends we {
        cache = {
            settings: void 0,
            plugins: void 0,
            themes: void 0,
            misc: void 0,
            "addon-store": void 0
        };
        pluginCache = {};
        pluginListeners = new Map;
        get(e, t) {
            return this.cache[e] = this.#e(e), typeof t > "u" ? this.cache[e] ?? {} : this.cache[e][t] ?? ""
        }
        set(e, t, o) {
            if (this.cache[e] = this.#e(e), typeof o > "u") {
                if (typeof t == "string") throw new Error("Cannot save string as JSON");
                this.cache[e] = t
            } else {
                if (typeof t != "string") throw new Error("Cannot use object as key");
                this.cache[e][t] = o
            }
            this.#t(e)
        }
        delete(e, t) {
            this.cache[e] = this.#e(e), delete this.cache[e][t], this.#t(e)
        }
        #e(e) {
            if (typeof this.cache[e] < "u") return this.cache[e];
            let t;
            try {
                t = JSON.parse(Ne.readFileSync(wn.default.resolve(W.get("channelPath"), `${e}.json`)).toString())
            } catch {
                t = {}
            }
            return t
        }
        #t(e) {
            Ne.writeFileSync(wn.default.resolve(W.get("channelPath"), `${e}.json`), JSON.stringify(this.cache[e], null, 4)), this.emitChange()
        }
        #a(e) {
            return wn.default.resolve(W.get("pluginsPath"), e + ".config.json")
        }
        #o(e) {
            if (!(typeof this.pluginCache[e] < "u")) {
                if (!Ne.existsSync(this.#a(e))) return this.pluginCache[e] = {};
                try {
                    this.pluginCache[e] = JSON.parse(Ne.readFileSync(this.#a(e)).toString())
                } catch {
                    return this.pluginCache[e] = {}
                }
            }
        }
        recache(e) {
            this.#o(e);
            let t = this.pluginCache[e];
            try {
                return this.pluginCache[e] = JSON.parse(Ne.readFileSync(this.#a(e)).toString()), this.emitChange(), !0
            } catch (o) {
                return b.err("JsonStore", "recache: ", o), !1
            } finally {
                let o = this.pluginCache[e],
                    r = Object.keys(t),
                    n = Object.keys(o),
                    s = new Set(r),
                    d = new Set(n),
                    l = {
                        deleted: [],
                        changed: []
                    };
                for (let u of s) d.has(u) ? l.changed.push(u) : l.deleted.push(u);
                for (let u of d) s.has(u) || l.changed.push(u);
                for (let u of l.changed) this.emitPluginChangeListeners(e, u, o[u]);
                for (let u of l.deleted) this.emitPluginChangeListeners(e, u)
            }
        }
        #r(e) {
            Ne.writeFileSync(this.#a(e), JSON.stringify(this.pluginCache[e], null, 4)), this.emitChange()
        }
        getData(e, t) {
            return this.#o(e), this.pluginCache[e][t]
        }
        useData(e, t) {
            let [o, r] = jt(() => this.getData(e, t));
            return xn(() => {
                let n = () => r(() => this.getData(e, t));
                return n(), this.addPluginChangeListener(e, n, t)
            }, []), o
        }
        setData(e, t, o) {
            o !== void 0 && (this.#o(e), this.pluginCache[e][t] = o, this.#r(e), this.emitPluginChangeListeners(e, t, o))
        }
        deleteData(e, t) {
            this.#o(e), delete this.pluginCache[e][t], this.#r(e), this.emitPluginChangeListeners(e, t)
        }
        emitPluginChangeListeners(e, t, o) {
            if (!this.pluginListeners.has(e)) return;
            let r = this.pluginListeners.get(e);
            for (let s of r.all) arguments.length === 3 ? s(t, o) : s(t);
            if (!r.keys.has(t)) return;
            let n = r.keys.get(t);
            for (let s of n) arguments.length === 3 ? s(o) : s()
        }
        addPluginChangeListener(e, t, o) {
            this.pluginListeners.has(e) || this.pluginListeners.set(e, {
                keys: new Map,
                all: new Set
            });
            let r = this.pluginListeners.get(e);
            if (typeof o == "string") {
                r.keys.has(o) || r.keys.set(o, new Set);
                let n = r.keys.get(o);
                return n.add(t), () => void n.delete(t)
            }
            return r.all.add(t), () => void r.all.delete(t)
        }
        removePluginChangeListener(e, t, o) {
            if (!this.pluginListeners.has(e)) return;
            let r = this.pluginListeners.get(e);
            if (typeof o == "string") {
                if (!r.keys.has(o)) return;
                r.keys.get(o).delete(t);
                return
            }
            r.all.delete(t)
        }
    }
});
var ul = Z((TC, _h) => {
    _h.exports = {
        Panels: {
            plugins: "Plugins",
            themes: "Themes",
            customcss: "Custom CSS",
            updates: "Updates"
        },
        Collections: {
            settings: {
                name: "Settings",
                general: {
                    name: "General",
                    voiceDisconnect: {
                        name: "Voice Disconnect",
                        note: "Disconnect from voice server when closing Discord"
                    },
                    showToasts: {
                        name: "Show Toasts",
                        note: "Shows a small notification for important information"
                    },
                    mediaKeys: {
                        name: "Disable Media Keys",
                        note: "Prevents Discord from hijacking your media keys after playing a video."
                    },
                    themeAttributes: {
                        name: "Theme Attributes",
                        note: "Adds attributes to various elements to assist in theming."
                    },
                    notificationPosition: {
                        name: "Notification",
                        note: "Lets you choose where you want notifications to popup."
                    },
                    notificationEnabled: {
                        name: "Show Notifications",
                        note: "Prevents or allows notifications to be shown on screen."
                    }
                },
                store: {
                    name: "Addon Store",
                    bdAddonStore: {
                        name: "Enable Addon Store",
                        note: "Enables the BetterDiscord Addon Store."
                    },
                    alwaysEnable: {
                        name: "Always Enable",
                        note: "When enabled by default addons downloaded via the addon store will be enabled."
                    },
                    addonEmbeds: {
                        name: "Addon Embeds",
                        note: "Embeds the addon store cards into chat."
                    }
                },
                window: {
                    name: "Window Preferences",
                    removeMinimumSize: {
                        name: "Remove Minimum Size",
                        note: "Removes Discord's forced minimum window size of 940x500"
                    },
                    transparency: {
                        name: "Enable Transparency",
                        note: "Enables the main window to be see-through (requires restart)"
                    },
                    frame: {
                        name: "Window Frame",
                        note: "Adds the native os window frame to the main window"
                    },
                    inAppTrafficLights: {
                        name: "Use In App Traffic Lights",
                        note: "Instead of using the OS traffic lights it will use a in app one"
                    }
                },
                addons: {
                    name: "Addon Manager",
                    addonErrors: {
                        name: "Show Addon Errors",
                        note: "Shows a modal with plugin/theme errors"
                    },
                    editAction: {
                        name: "Edit Action",
                        note: "Where plugins & themes appear when editing",
                        options: {
                            detached: "Detached Window",
                            external: "External Window",
                            system: "System Editor"
                        }
                    },
                    checkForUpdates: {
                        name: "Automatically Check For Updates",
                        note: "Periodically checks for updates to your addons and core BD"
                    },
                    updateInterval: {
                        name: "Update Check Interval",
                        note: "How often to check for addon/core updates"
                    }
                },
                customcss: {
                    name: "Custom CSS",
                    customcss: {
                        name: "Custom CSS",
                        note: "Enables the Custom CSS tab"
                    },
                    liveUpdate: {
                        name: "Live Update",
                        note: "Updates the css as you type"
                    },
                    startDetached: {
                        name: "Start Detached",
                        note: "Clicking the Custom CSS tab opens the editor in a separate window"
                    },
                    nativeOpen: {
                        name: "Open in Native Editor",
                        note: "Clicking the Custom CSS tab opens your custom css in your native editor"
                    },
                    openAction: {
                        name: "Editor Location",
                        note: "Where Custom CSS should open by default",
                        options: {
                            settings: "Settings Menu",
                            detached: "Detached Window",
                            external: "External Window",
                            system: "System Editor"
                        }
                    }
                },
                developer: {
                    name: "Developer Options",
                    debuggerHotkey: {
                        name: "Debugger Hotkey",
                        note: "Allows activating debugger when pressing F8 with DevTools open"
                    },
                    reactDevTools: {
                        name: "React Developer Tools",
                        note: "Injects your local installation of React Developer Tools into Discord"
                    },
                    inspectElement: {
                        name: "Inspect Element Hotkey",
                        note: "Enables the inspect element hotkey (ctrl + shift + c) that is common in most browsers"
                    },
                    devToolsWarning: {
                        name: "Stop DevTools Warning",
                        note: 'Stops Discord from printing out their "Hold Up!" message'
                    },
                    debugLogs: {
                        name: "Debug Logs",
                        note: "Outputs everything from the console into the debug.log file in the BetterDiscord folder"
                    },
                    devTools: {
                        name: "DevTools",
                        note: "Enables toggling DevTools with ctrl+shift+i"
                    },
                    recovery: {
                        name: "Recovery",
                        note: "Enables the ability to attempt to save discord without reloading",
                        button: "Attempt to recover Discord",
                        report: "Report on Github",
                        safeMode: "Relaunch in Safe Mode"
                    }
                },
                editor: {
                    name: "Editor Options",
                    theme: {
                        name: "Theme",
                        note: "The theme for the code editor",
                        options: {
                            system: "System",
                            "vs-dark": "Dark",
                            vs: "Light",
                            "hc-black": "High Contrast Black",
                            "hc-light": "High Contrast Light"
                        }
                    },
                    lineNumbers: {
                        name: "Line Numbers",
                        note: "Enables showing line numbers on the side of the editor"
                    },
                    fontSize: {
                        name: "Font Size",
                        note: "Size of the font (pt) to use in the editor"
                    },
                    minimap: {
                        name: "Minimap",
                        note: "Enables showing the code minimap on the side of the editor"
                    },
                    hover: {
                        name: "Reference Tooltips",
                        note: "Enables showing the reference tooltips when hovering rules and selectors"
                    },
                    quickSuggestions: {
                        name: "Quick Suggestions",
                        note: "Enables showing the autocomplete suggestions as you type"
                    },
                    insertSpaces: {
                        name: "Insert Spaces",
                        note: "Insert spaces instead of tabs"
                    },
                    tabSize: {
                        name: "Tab Size",
                        note: "The number of spaces a tab is equal to"
                    },
                    renderWhitespace: {
                        name: "Show Whitespace",
                        note: "When whitespace should be shown by the editor",
                        options: {
                            all: "Always",
                            none: "Never",
                            selection: "Selection"
                        }
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} by {{author}}",
            byline: "by {{author}}",
            openFolder: {
                plugin: "Open Plugin Folder",
                theme: "Open Theme Folder"
            },
            openStore: {
                plugin: "Open Plugin Store",
                theme: "Open Theme Store"
            },
            storeMessage: {
                plugin: "Browse and install official community plugins",
                theme: "Browse and install official community themes"
            },
            store: "Store",
            viewInstalled: {
                plugin: "View Installed Plugins",
                theme: "View Installed Themes"
            },
            reload: "Reload",
            addonSettings: "Settings",
            website: "Website",
            source: "Source",
            invite: "Support Server",
            donate: "Donate",
            patreon: "Patreon",
            name: "Name",
            author: "Author",
            version: "Version",
            added: "Date Added",
            modified: "Date Modified",
            releaseDate: "Release Date",
            lastUpdated: "Last Update",
            isEnabled: "Enabled",
            popularity: "Popularity",
            isInstalled: "Installed",
            downloads: "Downloads",
            likes: "Likes",
            listView: "List View",
            gridView: "Grid View",
            enableAll: "Enable All",
            disableAll: "Disable All",
            enableAllWarning: {
                plugin: `Enabling all plugins can cause temporary lag and unexpected errors.

(Hold shift while clicking to skip this prompt!)`,
                theme: `Enabling all themes can cause temporary lag and unexpected errors.

(Hold shift while clicking to skip this prompt!)`
            },
            search: {
                plugin: {
                    zero: "No plugins to search",
                    one: "Search one plugin",
                    other: "Search {{count}} plugins"
                },
                theme: {
                    zero: "No themes to search",
                    one: "Search one theme",
                    other: "Search {{count}} themes"
                }
            },
            results: {
                zero: "No Results",
                one: "{{count}} Result",
                other: "{{count}} Results"
            },
            editAddon: "Edit",
            deleteAddon: "Delete",
            downloadAddon: "Download",
            confirmDelete: "Are you sure you want to delete {{name}}?",
            confirmationText: "You have unsaved changes to {{name}}. Closing this window will lose all those changes.",
            enabled: "{{name}} has been enabled.",
            disabled: "{{name}} has been disabled.",
            couldNotEnable: "{{name}} could not be enabled.",
            couldNotDisable: "{{name}} could not be disabled.",
            couldNotStart: "{{name}} could not be started.",
            couldNotStop: "{{name}} could not be stopped.",
            settingsError: "Could not open settings for {{name}}",
            methodError: "{{method}} could not be fired.",
            unknownAuthor: "Unknown Author",
            noDescription: "Description not provided.",
            noSettings: "{{name}} does not have a settings panel.",
            isDisabled: "{{name}} is disabled.",
            alreadyExists: {
                plugin: "There is already a plugin with name {{name}}",
                theme: "There is already a theme with name {{name}}"
            },
            metaError: "META could not be parsed.",
            missingNameData: "META missing name data.",
            metaNotFound: "META was not found.",
            compileError: "Could not be compiled. See console for details.",
            wasUnloaded: "{{name}} was unloaded.",
            blankSlateHeader: {
                plugin: "You don't have any plugins!",
                theme: "You don't have any themes!"
            },
            blankSlateMessage: {
                plugin: "Grab some from [our website]({{link}}) and add them to your plugin folder.",
                theme: "Grab some from [our website]({{link}}) and add them to your theme folder."
            },
            blankSlateHeaderGeneric: "You don't have anything!",
            blankSlateMessageGeneric: "You should probably get some.",
            wasLoaded: "{{name}} v{{version}} was loaded.",
            failedToDownload: {
                plugin: "Failed to download plugin {{name}}",
                theme: "Failed to download theme {{name}}"
            },
            successfullyDownload: "Successfully downloaded {{name}}",
            alreadyInstalled: "{{name}} is already installed",
            failedToFetch: "Unable to get addons",
            new: "New",
            updated: "Updated",
            downloadCount: {
                one: "{{count}} Download",
                other: "{{count}} Downloads"
            },
            likeCount: {
                one: "{{count}} Like",
                other: "{{count}} Likes"
            },
            tags: "Tags",
            preview: "Preview",
            official: "Official",
            manyEnabled: {
                plugin: {
                    one: "One plugin has been enabled.",
                    other: "{{count}} plugins have been enabled."
                },
                theme: {
                    one: "One theme has been enabled.",
                    other: "{{count}} themes have been enabled."
                }
            }
        },
        CustomCSS: {
            confirmationText: "You have unsaved changes to your Custom CSS. Closing this window will lose all those changes.",
            update: "Update",
            save: "Save",
            openNative: "Open in System Editor",
            openDetached: "Detach Window",
            settings: "Editor Settings",
            editorTitle: "Custom CSS Editor",
            cssInstallSuccess: "CSS was successfully added into CustomCSS.",
            cssInstalled: "CSS installed!",
            cssInstallError: "CSS failed to be added into CustomCSS.",
            cssReverted: "CSS was reverted.",
            cssReverting: "Changes will be reverted in 10 seconds",
            cssKept: "CSS changes kept permanently"
        },
        Modals: {
            confirmAction: "Are You Sure?",
            installCss: "Are you sure you want to add this CSS to your Custom CSS?",
            addonCrashed: "This plugin has been disabled to prevent crashes. Please report this issue to the developer.",
            okay: "Okay",
            done: "Done",
            cancel: "Cancel",
            nevermind: "Nevermind",
            close: "Close",
            name: "Name",
            message: "Message",
            error: "Error",
            addonErrors: "Addon Errors",
            restartRequired: "Restart Required",
            restartNow: "Restart Now",
            restartLater: "Restart Later",
            additionalInfo: "Additional Info",
            restartPrompt: "In order to take effect, Discord needs to be restarted. Do you want to restart now?",
            changelog: "Changelog",
            debuglog: "Your debug log file has exceeded 100MB, would you like to clear the log?",
            automaticallyEnable: "Automatically Enable"
        },
        Sorting: {
            sortBy: "Sort By",
            order: "Order",
            ascending: "Ascending",
            descending: "Descending"
        },
        WindowPrefs: {
            enabledInfo: `This option requires a transparent theme in order to work properly. On Windows this may break your aero snapping and maximizing.

In order to take effect, Discord needs to be restarted. Do you want to restart now?`,
            disabledInfo: "In order to take effect, Discord needs to be restarted. Do you want to restart now?"
        },
        Toasts: {
            recoveryFailed: "Recovery incomplete. Some actions failed to complete."
        },
        Updater: {
            updateFailed: "Update Failed!",
            updateFailedMessage: "BetterDiscord failed to update. Please download the latest version of the installer from our website (https://betterdiscord.app/) and reinstall.",
            updateSuccessful: "Update Successful!",
            updateAvailable: "BetterDiscord has a new update (v{{version}})",
            viewUpdates: "View Updates",
            addonUpdaterNotificationTitle: "Addon Updater",
            addonUpdatesAvailable: {
                plugin: {
                    one: "One plugin has an update!",
                    other: "{{count}} plugins have updates!"
                },
                theme: {
                    one: "One theme has an update!",
                    other: "{{count}} themes have updates!"
                }
            },
            addonUpdated: "{{name}} has been updated to version {{version}}!",
            addonUpdateFailed: "Failed to update {{name}}. Please try again later.",
            checking: "Checking for updates!",
            finishedChecking: "Finished checking for updates!",
            checkForUpdates: "Check For Updates!",
            updateAll: "Update All!",
            noUpdatesAvailable: "No updates available.",
            versionAvailable: "Version {{version}} now available!",
            upToDateBlankslate: {
                plugin: "All of your plugins seem to be up to date!",
                theme: "All of your themes seem to be up to date!"
            },
            updateButton: "Update!"
        },
        Settings: {
            customColor: "Custom Color",
            resetSettings: "Reset Settings",
            resetSettingsWarning: "Resetting your settings returns them all to the original state, this cannot be undone."
        },
        Socials: {
            twitter: "Follow Us!",
            github: "Star Us!"
        },
        Paginator: {
            back: "Back",
            next: "Next"
        }
    }
});
var cl = Z((EC, Vh) => {
    Vh.exports = {}
});
var fl = Z((MC, Gh) => {
    Gh.exports = {
        Panels: {
            plugins: "插件",
            themes: "主题",
            customcss: "自定义样式"
        },
        Collections: {
            settings: {
                name: "设置",
                general: {
                    name: "一般",
                    voiceDisconnect: {
                        name: "自动断开语音",
                        note: "自动在关闭 Discord 时断开语音"
                    },
                    showToasts: {
                        name: "显示弹出提示",
                        note: "在有重要信息时弹出小通知"
                    },
                    mediaKeys: {
                        name: "禁用媒体控制键",
                        note: "防止 Discord 在播放视频时劫持媒体控制键"
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "移除最小化限制",
                        note: "移除 Discord 限制的最小窗口尺寸（940x500）"
                    },
                    name: "窗口设置",
                    transparency: {
                        name: "透明化",
                        note: "允许主窗口透明（需要重启以生效）"
                    },
                    frame: {
                        name: "窗口框",
                        note: "向主窗口增加原生系统窗口框"
                    }
                },
                addons: {
                    name: "插件管理",
                    addonErrors: {
                        name: "显示插件错误",
                        note: "在插件/主题发生错误时显示弹窗"
                    },
                    editAction: {
                        name: "编辑器",
                        note: "在何处编辑插件及主题",
                        options: {
                            detached: "独立窗口",
                            system: "系统编辑器"
                        }
                    }
                },
                customcss: {
                    name: "自定义样式",
                    customcss: {
                        name: "自定义样式",
                        note: "启用自定义样式选项卡"
                    },
                    liveUpdate: {
                        name: "热更新",
                        note: "自动在 CSS 修改时应用变更"
                    },
                    startDetached: {
                        name: "在独立窗口中打开",
                        note: "在独立窗口中编辑自定义样式"
                    },
                    nativeOpen: {
                        name: "在系统编辑器中打开",
                        note: "在系统编辑器中编辑自定义样式"
                    },
                    openAction: {
                        name: "编辑器",
                        note: "在何处编辑自定义样式",
                        options: {
                            settings: "设置菜单",
                            detached: "独立窗口",
                            system: "系统编辑器"
                        }
                    }
                },
                developer: {
                    name: "开发者设置",
                    debuggerHotkey: {
                        name: "调试器快捷键",
                        note: "按下 F8 时启动调试器"
                    },
                    reactDevTools: {
                        name: "React 开发者工具",
                        note: "向 Discord 注入 React 开发者工具"
                    },
                    inspectElement: {
                        name: "元素审查快捷键",
                        note: "启用在大多数浏览器中常用的元素审查快捷键（Ctrl + Shift + C）"
                    },
                    devToolsWarning: {
                        name: "屏蔽开发者工具警告",
                        note: "禁止 Discord 打印「Hold Up!」警告"
                    },
                    debugLogs: {
                        name: "调试日志",
                        note: "输出控制台中的所有信息到 BetterDiscord 文件夹下的 debug.log 文件"
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} 版本：{{version}} 作者：{{author}}",
            byline: "作者： {{author}}",
            reload: "重新加载",
            addonSettings: "设置",
            website: "网站",
            source: "源码",
            invite: "支持服务器",
            donate: "捐赠",
            patreon: "Patreon",
            name: "名称",
            author: "作者",
            version: "版本",
            added: "安装时间",
            modified: "最后更新时间",
            editAddon: "编辑",
            deleteAddon: "删除",
            confirmDelete: "你真的要删除{{name}}吗？",
            confirmationText: "你还有未保存的更改，关闭此窗口将失去所有对{{name}}所做的更改。",
            enabled: "已启用{{name}}",
            disabled: "已禁用{{name}}",
            couldNotEnable: "无法启用{{name}}。",
            couldNotDisable: "无法禁用{{name}}。",
            couldNotStart: "无法启动{{name}}。",
            couldNotStop: "无法停止{{name}}。",
            settingsError: "无法打开{{name}}设置",
            methodError: "无法调用{{method}}。",
            unknownAuthor: "未知的作者",
            noDescription: "作者没有留下任何描述",
            metaError: "无法解析元数据",
            missingNameData: "元数据缺少名称。",
            metaNotFound: "无法找到元数据",
            compileError: "无法编译。",
            wasUnloaded: "已卸载{{name}}。"
        },
        CustomCSS: {
            confirmationText: "你还有未保存的更改，关闭此窗口将失去所有对自定义样式所做的更改。",
            update: "更新",
            save: "保存",
            openNative: "在系统编辑器中打开",
            openDetached: "在独立窗口中打开",
            settings: "编辑器设置",
            editorTitle: "自定义样式编辑器"
        },
        Modals: {
            confirmAction: "你确定吗？",
            okay: "确定",
            done: "完成",
            cancel: "取消",
            nevermind: "别在意",
            close: "关闭",
            name: "名称",
            message: "消息",
            error: "错误",
            addonErrors: "插件错误",
            restartRequired: "需要重启以生效",
            restartNow: "立即重启",
            restartLater: "稍候自行重启",
            additionalInfo: "额外信息",
            restartPrompt: "Discord 需要重新启动以应用最新变更。立刻进行重启吗？"
        },
        Sorting: {
            sortBy: "排序方式",
            order: "顺序",
            ascending: "正序",
            descending: "倒序"
        },
        WindowPrefs: {
            enabledInfo: `此选项需要透明主题才能正常工作。在 Windows 上，这可能会破坏 AERO 的捕捉和最大化。

该变更需要重启以生效。您要立即进行重启吗？`,
            disabledInfo: "Discord 需要重新启动以应用最新变更。立刻进行重启吗？"
        }
    }
});
var pl = Z((DC, Kh) => {
    Kh.exports = {
        Panels: {
            plugins: "擴充功能",
            themes: "佈景主題",
            customcss: "客製化 CSS",
            updates: "更新"
        },
        Collections: {
            settings: {
                name: "設定",
                general: {
                    name: "一般",
                    voiceDisconnect: {
                        name: "自動中斷語音連線",
                        note: "自動在關閉 Discord 時中斷語音連線"
                    },
                    showToasts: {
                        name: "顯示彈出提示",
                        note: "在有重要通知時彈出提示"
                    },
                    mediaKeys: {
                        name: "停用媒體控制鍵",
                        note: "防止 Discord 在播放影片時劫持媒體控制鍵"
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "移除最小視窗尺寸限制",
                        note: "移除 Discord 限制的最小視窗尺寸（940x500）"
                    },
                    name: "視窗設定",
                    transparency: {
                        name: "透明化",
                        note: "啟用主視窗透明（需要重新啟動以生效）"
                    },
                    frame: {
                        name: "視窗邊框",
                        note: "向主視窗新增原版系統視窗邊框"
                    }
                },
                addons: {
                    name: "擴充功能管理員",
                    addonErrors: {
                        name: "顯示擴充功能錯誤",
                        note: "在擴充功能/佈景主題發生錯誤時顯示彈出視窗"
                    },
                    editAction: {
                        name: "編輯器",
                        note: "在何處編輯擴充功能及佈景主題",
                        options: {
                            detached: "獨立視窗",
                            system: "系統編輯器"
                        }
                    }
                },
                customcss: {
                    name: "客製化 CSS",
                    customcss: {
                        name: "客製化 CSS",
                        note: "啟用客製化 CSS 選項標籤"
                    },
                    liveUpdate: {
                        name: "實時更新",
                        note: "自動在 CSS 發生變更時重新載入"
                    },
                    startDetached: {
                        name: "在獨立視窗中開啟",
                        note: "在獨立視窗中編輯客製化 CSS"
                    },
                    nativeOpen: {
                        name: "在系統編輯器中開啟",
                        note: "在系統編輯器中編輯客製化 CSS"
                    },
                    openAction: {
                        name: "編輯器",
                        note: "在何處編輯客製化 CSS",
                        options: {
                            settings: "設定選單",
                            detached: "獨立視窗",
                            system: "系統編輯器"
                        }
                    }
                },
                developer: {
                    name: "開發人員設定",
                    debuggerHotkey: {
                        name: "偵錯工具快捷鍵",
                        note: "允許在打開開發人員工具的情況下按下 F8 啟動偵錯工具"
                    },
                    reactDevTools: {
                        name: "React 開發人員工具",
                        note: "向 Discord 注入 React 開發人員工具"
                    },
                    inspectElement: {
                        name: "元素檢查快捷鍵",
                        note: "啟用在大多數瀏覽器中常用的元素檢查快捷鍵（Ctrl + Shift + C）"
                    },
                    devToolsWarning: {
                        name: "隱藏開發人員工具警告",
                        note: "禁止 Discord 輸出「Hold Up!」警告"
                    },
                    debugLogs: {
                        name: "偵錯記錄檔",
                        note: "輸出控制台中的所有資訊到 BetterDiscord 資料夾下的 debug.log"
                    },
                    devTools: {
                        name: "DevTools",
                        note: "啟用切換 DevTools（Ctrl+Shift+I）"
                    }
                },
                editor: {
                    name: "編輯器偏好",
                    lineNumbers: {
                        name: "行數編號",
                        note: "啟用在編輯器一側顯示行數"
                    },
                    fontSize: {
                        name: "字型大小",
                        note: "在編輯器中使用的字體大小（點）"
                    },
                    minimap: {
                        name: "小地圖",
                        note: "啟用在編輯器一側顯示程式碼小地圖"
                    },
                    hover: {
                        name: "參考工具提示",
                        note: "允許在懸停於規則和選擇器時顯示參考工具提示"
                    },
                    quickSuggestions: {
                        name: "快速建議",
                        note: "啟用在您輸入時顯示自動完成建議"
                    },
                    renderWhitespace: {
                        name: "顯示空格",
                        note: "編輯器何時應顯示空格",
                        options: {
                            all: "總是",
                            none: "永不",
                            selection: "選擇"
                        }
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} 版本 {{version}} 作者 {{author}}",
            byline: "作者 {{author}}",
            reload: "重新載入",
            addonSettings: "設定",
            website: "網站",
            source: "原始碼",
            invite: "技術支援伺服器",
            donate: "捐贈",
            patreon: "Patreon",
            name: "名稱",
            author: "作者",
            version: "版本",
            added: "安裝時間",
            modified: "最後更新時間",
            editAddon: "編輯",
            deleteAddon: "刪除",
            confirmDelete: "您真的要刪除 {{name}} 嗎？",
            confirmationText: "您還有未儲存的更改，關閉此視窗將失去所有對 {{name}} 所做的更改。",
            enabled: "已啟用 {{name}}。",
            disabled: "已停用 {{name}}。",
            couldNotEnable: "無法啟用 {{name}}。",
            couldNotDisable: "無法停用 {{name}}。",
            couldNotStart: "無法啟動 {{name}}。",
            couldNotStop: "無法停止 {{name}}。",
            settingsError: "無法開啟設定 {{name}}。",
            methodError: "無法調用 {{method}}。",
            unknownAuthor: "未知的作者",
            noDescription: "作者没有留下任何描述。",
            metaError: "無法解析元資料。",
            missingNameData: "元資料缺少名稱。",
            metaNotFound: "無法找到元資料。",
            compileError: "無法編譯。詳細資訊請見控制台。",
            wasUnloaded: "已解除安裝 {{name}}。",
            isEnabled: "已啟用",
            wasLoaded: "已載入 {{name}} 版本 {{version}}。",
            listView: "清單檢視",
            gridView: "方格檢視"
        },
        CustomCSS: {
            confirmationText: "您還有未儲存的更改，關閉此視窗將失去所有對客製化 CSS 所做的更改。",
            update: "更新",
            save: "儲存",
            openNative: "在系統編輯器中開啟",
            openDetached: "在獨立視窗中開啟",
            settings: "編輯器設定",
            editorTitle: "客製化 CSS 編輯器"
        },
        Modals: {
            confirmAction: "您確定嗎？",
            okay: "確定",
            done: "完成",
            cancel: "取消",
            nevermind: "別在意",
            close: "關閉",
            name: "名稱",
            message: "訊息",
            error: "錯誤",
            addonErrors: "擴充功能錯誤",
            restartRequired: "需要重新啟動以生效",
            restartNow: "立即重新啟動",
            restartLater: "稍後自行重新啟動",
            additionalInfo: "額外資訊",
            restartPrompt: "Discord 需要重新啟動以套用更新。立刻進行重新啟動嗎？",
            changelog: "更新日誌"
        },
        Sorting: {
            sortBy: "排序方式",
            order: "順序",
            ascending: "正序",
            descending: "倒序"
        },
        WindowPrefs: {
            enabledInfo: `此選項需要透明佈景主題才能正常工作。在 Windows 上，這可能會破壞 Aero Snap和最大化。

該變更需要重新啟動以生效。您要立即進行重新啟動嗎？`,
            disabledInfo: "Discord 需要重新啟動以套用最新變更。立刻進行重新啟動嗎？"
        },
        Updater: {
            updateFailed: "更新失敗！",
            updateFailedMessage: "BetterDiscord 更新失敗。請從我們的網站 (https://betterdiscord.app/) 下載最新版本的安裝程式並重新安裝。",
            updateSuccessful: "更新成功！",
            updateAvailable: "BetterDiscord 已有新的版本 ({{version}})",
            addonUpdated: "{{name}} 已更新到版本 {{version}}！",
            checking: "正在檢查更新！",
            finishedChecking: "已完成檢查更新！",
            checkForUpdates: "檢查更新！",
            updateAll: "全部更新！",
            noUpdatesAvailable: "沒有可供使用的更新。",
            versionAvailable: "版本 {{version}} 已可供使用！",
            updateButton: "更新！"
        }
    }
});
var ml = Z((PC, $h) => {
    $h.exports = {
        Panels: {
            plugins: "Pluginy",
            themes: "Témata",
            customcss: "Vlastní CSS",
            updates: "Aktualizace"
        },
        Collections: {
            settings: {
                name: "Nastavení",
                general: {
                    name: "Obecné",
                    voiceDisconnect: {
                        name: "Odpojení z hlas. kanálu",
                        note: "Odpojit z hlasového kanálu při zavření Discordu"
                    },
                    showToasts: {
                        name: "Zobrazit vyskakovací okna",
                        note: "Zobrazí malé oznámení pro důležité informace"
                    },
                    mediaKeys: {
                        name: "Zakázat klávesy médií",
                        note: "Zabrání Discordu přivlastnění kláves médií při přehrávání videa."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Odebrat minimální velikost",
                        note: "Odebere Discordem vynucenou minimální velikost okna 940x500"
                    },
                    name: "Předvolby okna",
                    transparency: {
                        name: "Povolit průhlednost",
                        note: "Povolí průhlednost hlavního okna (vyžaduje restart)"
                    },
                    frame: {
                        name: "Okraj okna",
                        note: "Přidá nativní systémový okraj okna k hlavnímu oknu"
                    }
                },
                addons: {
                    name: "Správce doplňků",
                    addonErrors: {
                        name: "Zobrazit chyby doplňků",
                        note: "Zobrazí okno s chybami pluginů/témat"
                    },
                    editAction: {
                        name: "Upravit akci",
                        note: "Kde se objeví doplňky a témata při úpravě",
                        options: {
                            detached: "Oddělené okno",
                            system: "Systémový editor"
                        }
                    }
                },
                customcss: {
                    name: "Vlastní CSS",
                    customcss: {
                        name: "Vlastní CSS",
                        note: "Povolí záložku Vlastní CSS"
                    },
                    liveUpdate: {
                        name: "Okamžitá aktualizace",
                        note: "Aktualizuje CSS při psaní"
                    },
                    startDetached: {
                        name: "Spustit odděleně",
                        note: "Kliknutí na záložku Vlastní CSS otevře editor v odděleném okně"
                    },
                    nativeOpen: {
                        name: "Otevřít v nativním editoru",
                        note: "Kliknutí na záložku Vlastní CSS otevře tvé vlastní CSS ve tvém nativním editoru"
                    },
                    openAction: {
                        name: "Lokace editoru",
                        note: "Kde se má ve výchozím nastavení otevřít Vlastní CSS",
                        options: {
                            settings: "Menu nastavení",
                            detached: "Oddělené okno",
                            system: "Systémový editor"
                        }
                    }
                },
                developer: {
                    name: "Vývojářská nastavení",
                    debuggerHotkey: {
                        name: "Zkratka ladění",
                        note: "Povolí aktivaci ladění při stisknutí F8"
                    },
                    reactDevTools: {
                        name: "Vývojářské nástroje React",
                        note: "Vloží tvou lokální instalaci React Developer Tools do Discordu"
                    },
                    inspectElement: {
                        name: "Zkratka prozkoumání prvku",
                        note: "Povolí klávesovou zkratku prozkoumání prvku (Ctrl + Shift + C), která je normální ve většině prohlížečů"
                    },
                    devToolsWarning: {
                        name: "Zastavit varování DevTools",
                        note: 'Zabrání Discordu vypisovat jeho "Zadrž!" zprávu'
                    },
                    debugLogs: {
                        name: "Ladicí protokoly",
                        note: "Vypíše vše z konzole do souboru debug.log ve složce BetterDiscordu"
                    },
                    devTools: {
                        name: "DevTools",
                        note: "Povolí přepnutí DevTools při stisku Ctrl+Shift+I"
                    }
                },
                editor: {
                    name: "Předvolby editoru",
                    lineNumbers: {
                        name: "Čísla řádků",
                        note: "Povolí zobrazování čísel řádků vedle editoru"
                    },
                    fontSize: {
                        name: "Velikost písma",
                        note: "Velikost písma (pt) k použití v editoru"
                    },
                    minimap: {
                        name: "Minimapa",
                        note: "Povolí zobrazování kódu v minimapě vedle editoru"
                    },
                    hover: {
                        name: "Referenční tooltipy",
                        note: "Povolí zobrazování referenčních tooltipů při přechodu přes pravidla a selektory"
                    },
                    quickSuggestions: {
                        name: "Rychlé návrhy",
                        note: "Povolí zobrazování automaticky dokončovaných návrhů, zatímco píšete"
                    },
                    renderWhitespace: {
                        name: "Zobrazit neviditelnou mezeru",
                        note: "Zda v editoru zobrazit neviditelnou mezeru",
                        options: {
                            all: "Vždy",
                            none: "Nikdy",
                            selection: "Výběr"
                        }
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} od {{author}}",
            byline: "od {{author}}",
            reload: "Znovu načíst",
            addonSettings: "Nastavení",
            website: "Web",
            source: "Zdroj",
            invite: "Server podpory",
            donate: "Přispět",
            patreon: "Patreon",
            name: "Název",
            author: "Autor",
            version: "Verze",
            added: "Datum přidání",
            modified: "Datum upravení",
            editAddon: "Upravit",
            deleteAddon: "Odstranit",
            confirmDelete: "Opravdu chceš odstranit {{name}}?",
            confirmationText: "Máš neuložené změny u {{name}}. Zavřením tohoto okna je všechny ztratíš.",
            enabled: "Doplněk {{name}} byl povolen.",
            disabled: "Doplněk {{name}} byl zakázán.",
            couldNotEnable: "Doplněk {{name}} nemohl být povolen.",
            couldNotDisable: "Doplněk {{name}} nemohl být zakázán.",
            couldNotStart: "Doplněk {{name}} nemohl být spuštěn.",
            couldNotStop: "Doplněk {{name}} nemohl být zastaven.",
            settingsError: "Nepodařilo se otevřít nastavení {{name}}",
            methodError: "Nepodařilo se spustit metodu {{method}}.",
            unknownAuthor: "Neznámý autor",
            noDescription: "Bez popisu.",
            metaError: "META být nemohl parsován.",
            missingNameData: "META chybějící údaje názvu.",
            metaNotFound: "META nebyl nalezen.",
            compileError: "Nepodařilo se zkompilovat.",
            wasUnloaded: "Doplněk {{name}} byl odnačten.",
            isEnabled: "Povoleno",
            wasLoaded: "Doplněk {{name}} v{{version}} byl načten."
        },
        CustomCSS: {
            confirmationText: "Máš neuložené změny ve vlastním CSS. Zavřením tohoto okna je všechny ztratíš.",
            update: "Aktualizovat",
            save: "Uložit",
            openNative: "Otevřít v systémovém editoru",
            openDetached: "Oddělit okno",
            settings: "Nastavení editoru",
            editorTitle: "Okno vlastního CSS"
        },
        Modals: {
            confirmAction: "Opravdu?",
            okay: "Dobře",
            done: "Hotovo",
            cancel: "Zrušit",
            nevermind: "Ne",
            close: "Zavřít",
            name: "Název",
            message: "Zpráva",
            error: "Chyba",
            addonErrors: "Chyby doplňku",
            restartRequired: "Vyžadován restart",
            restartNow: "Restartovat nyní",
            restartLater: "Restartovat později",
            additionalInfo: "Dodatečné informace",
            restartPrompt: "Aby se tato změna projevila, bude potřeba restartovat Discord. Chceš jej restartovat nyní?"
        },
        Sorting: {
            sortBy: "Seřadit podle",
            order: "Pořadí",
            ascending: "Vzestupně",
            descending: "Sestupně"
        },
        WindowPrefs: {
            enabledInfo: `Tato možnost vyžaduje průhledné téma, aby fungovala správně. Na Windows to může rozbít Areo přichytávání a maximalizování.

Aby se tato změna projevila, bude potřeba restartovat Discord. Chceš jej restartovat nyní?`,
            disabledInfo: "Aby se tato změna projevila, bude potřeba restartovat Discord. Chceš jej restartovat nyní?"
        },
        Updater: {
            updateFailed: "Aktualizace selhala!",
            updateFailedMessage: "Aktualizace BettterDiscordu se nezdařila. Stáhněte si prosím nejnovější verzi instalátoru z našeho webu (https://betterdiscord.app) a přeinstalujte jej.",
            updateSuccessful: "Aktualizace byla úspěšná!",
            updateAvailable: "BetterDiscord má novou aktualizaci (v{{version}})",
            addonUpdated: "Doplněk {{name}} byl aktualizován na verzi {{version}}!",
            checking: "Kontrola aktualizací!",
            finishedChecking: "Kontrola aktualizací dokončena!",
            checkForUpdates: "Zkontrolovat aktualizace!",
            updateAll: "Aktualizovat vše!",
            noUpdatesAvailable: "Nejsou dostupné žádné aktualizace.",
            versionAvailable: "Je dostupná verze {{version}}!",
            updateButton: "Aktualizovat!"
        }
    }
});
var hl = Z((zC, Zh) => {
    Zh.exports = {}
});
var gl = Z((BC, Xh) => {
    Xh.exports = {
        Panels: {
            plugins: "Plug-ins",
            themes: "Thema's",
            customcss: "Aangepaste CSS"
        },
        Collections: {
            settings: {
                name: "Instellingen",
                general: {
                    name: "Algemeen",
                    voiceDisconnect: {
                        name: "Stem Verbroken",
                        note: "Verbreek de verbinding met de oproep"
                    },
                    showToasts: {
                        name: "Laat Toasts Zien",
                        note: "Toont een melding voor belangrijke informatie"
                    },
                    mediaKeys: {
                        name: "Schakel mediatoetsen uit",
                        note: "Voorkomt dat Discord uw mediatoetsen kaapt na het afspelen van een video."
                    }
                }
            }
        },
        Addons: {
            byline: "door {{author}}",
            reload: "Herladeen",
            addonSettings: "Instellingen",
            website: "Website",
            source: "Bronnen",
            invite: "Support Server",
            donate: "Donatie",
            patreon: "Patreon",
            name: "Naam",
            author: "Schrijver",
            version: "Versie",
            added: "Datum toegevoegd",
            modified: "Datum gewijzigd ",
            editAddon: "Bewerken",
            deleteAddon: "Verwijderen",
            confirmDelete: "Weet je het zeker dat je {{name}} wilt verwijderen?",
            confirmationText: "Je hebt niet-opgeslagen wijzigingen in {{naam}}. Als je dit venster sluit, gaan alle wijzigingen verloren.",
            unknownAuthor: "Onbekende schrijver",
            noDescription: "Beschrijving kon niet worden weergegeven"
        },
        Modals: {
            confirmAction: "Weet je het zeker?",
            okay: "Oké",
            cancel: "Annuleren",
            close: "Bijna",
            name: "Naam",
            message: "Berich",
            error: "Fout!"
        },
        Sorting: {
            order: "Volgorde"
        }
    }
});
var bl = Z((NC, Jh) => {
    Jh.exports = {
        Panels: {
            plugins: "Plugins",
            themes: "Thèmes",
            customcss: "CSS personnalisé"
        },
        Collections: {
            settings: {
                name: "Réglages",
                general: {
                    name: "Général",
                    voiceDisconnect: {
                        name: "Déconnexion vocale",
                        note: "Déconnexion du serveur vocal lors de la fermeture de Discord"
                    },
                    showToasts: {
                        name: "Afficher les notifications bulles",
                        note: "Afficher une petite notification pour les informations importantes"
                    },
                    mediaKeys: {
                        name: "Désactiver les Touches Médias",
                        note: "Empêche Discord de détourner vos touches multimédia après la lecture d'une vidéo."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Enlever la Taille Minimale",
                        note: "Enlève la taille de fenêtre minimale forcée de Discord qui est de 940x500"
                    },
                    name: "Fenêtre des Préférences",
                    transparency: {
                        name: "Activer la Transparence",
                        note: "Permet à la fenêtre principale d'être transparente (nécessite un redémarrage)"
                    },
                    frame: {
                        name: "Cadre de la Fenêtre",
                        note: "Ajoute le cadre de la fenêtre native de l'OS à la fenêtre principale."
                    }
                },
                addons: {
                    name: "Gestionnaire d'Extensions",
                    addonErrors: {
                        name: "Afficher les Erreurs d'Extensions",
                        note: "Affiche une modale avec les erreurs de plugin/thème"
                    },
                    editAction: {
                        name: "Action Édition",
                        note: "Là où les thèmes & extensions apparaîtront lors de l'édition",
                        options: {
                            detached: "Fenêtre détachée",
                            system: "Éditeur système"
                        }
                    }
                },
                customcss: {
                    name: "CSS Personnalisé",
                    customcss: {
                        name: "CSS Personnalisé",
                        note: "Activer l'onglet de CSS personnalisé"
                    },
                    liveUpdate: {
                        name: "Mise à Jour Directe",
                        note: "Met à jour le CSS pendant que vous écrivez"
                    },
                    startDetached: {
                        name: "Démarrer Détaché",
                        note: "En cliquant sur l'onglet CSS Personnalisé, l'éditeur s'ouvre dans une fenêtre distincte."
                    },
                    nativeOpen: {
                        name: "Ouvrir dans l'Éditeur Natif",
                        note: "En cliquant sur CSS Personnalisé, l'onglet ouvrira votre CSS personnalisé dans votre éditeur natif"
                    },
                    openAction: {
                        name: "Emplacement de l'Éditeur",
                        note: "Là où le CSS personnalisé doit s'ouvrir par défaut",
                        options: {
                            settings: "Menu Réglages",
                            detached: "Fenêtre Détachée",
                            system: "Éditeur système"
                        }
                    }
                },
                developer: {
                    name: "Réglages Développeur",
                    debuggerHotkey: {
                        name: "Touches Raccourcis du Débugueur",
                        note: "Permettre l'activation du débugueur quand F8 est pressé"
                    },
                    reactDevTools: {
                        name: "Outils Développeurs React",
                        note: "Injecte votre installation locale des Outils Développeurs React dans Discord"
                    },
                    inspectElement: {
                        name: "Touche pour Inspecter l'Élément",
                        note: "Active le raccourci clavier de l'inspecteur d'élément (ctrl + shift + c) qui est commun à la plupart des navigateurs"
                    },
                    devToolsWarning: {
                        name: "Arrêter les Avertissements des Outils Développement",
                        note: `Empêche Discord d'imprimer son message \\"Attends!\\"`
                    },
                    debugLogs: {
                        name: "Journaux de Débogage",
                        note: "Transmet tout ce qui se trouve dans la console au fichier debug.log situé dans le dossier de BetterDiscord"
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} par {{author}}",
            byline: "par {{author}}",
            reload: "Recharger",
            addonSettings: "Réglages",
            website: "Site web",
            source: "Source",
            invite: "Server de support",
            donate: "Donner",
            patreon: "Patreon",
            name: "Nom",
            author: "Auteur",
            version: "Version",
            added: "Date d'Ajout",
            modified: "Date Modifiée",
            editAddon: "Édition",
            deleteAddon: "Suppression",
            confirmDelete: "Êtes-vous sûr de vouloir supprimer {{name}}?",
            confirmationText: "Vous n'avez pas sauvegardé les changements pour {{name}}. Fermer cette fenêtre fera perdre ces changements.",
            enabled: "{{name}} a été activé.",
            disabled: "{{name}} a été désactivé.",
            couldNotEnable: "{{name}} ne peut pas être activé.",
            couldNotDisable: "{{name}} n'a pas pu être désactivé.",
            couldNotStart: "{{name}} n'a pas pu être lancé.",
            couldNotStop: "{{name}} n'a pas pu être arrêté.",
            settingsError: "Impossible d'ouvrir les paramètres pour {{name}}",
            methodError: "{{method}} n'a pas pu être renvoyé.",
            unknownAuthor: "Auteur Inconnu",
            noDescription: "Description non fournie.",
            metaError: "Le META n'a pas pu être analysé.",
            missingNameData: "Les données de META ne possèdent pas de nom.",
            metaNotFound: "Les données de META sont introuvables.",
            compileError: "Compilation impossible.",
            wasUnloaded: "{{name}} a été déchargé."
        },
        CustomCSS: {
            confirmationText: "Vous avez des changements non sauvegardés dans votre CSS Personnalisé. Fermer cette fenêtre vous fera perdre ces changements.",
            update: "Mise à jour",
            save: "Sauvegarder",
            openNative: "Ouvrir dans l'Éditeur Système",
            openDetached: "Détacher la Fenêtre",
            settings: "Réglages de l'Éditeur",
            editorTitle: "Éditeur CSS Personnalisé"
        },
        Modals: {
            confirmAction: "Êtes-vous sûr?",
            okay: "D'accord",
            done: "Terminé",
            cancel: "Annuler",
            nevermind: "Laisse tomber",
            close: "Fermer",
            name: "Nom",
            message: "Message",
            error: "Erreur",
            addonErrors: "Erreurs d'extension",
            restartRequired: "Redémarrage Requis",
            restartNow: "Redémarrer Maintenant",
            restartLater: "Redémarrer Ultérieurement",
            additionalInfo: "Info Additionnelle",
            restartPrompt: "Pour appliquer ces changements, Discord à besoin d'être redémarré. Voulez-vous redémarrer l'application maintenant?"
        },
        Sorting: {
            sortBy: "Trier Par",
            order: "Ordre",
            ascending: "Ascendant",
            descending: "Descendant"
        },
        WindowPrefs: {
            enabledInfo: `Cette option requière un thème transparent pour pouvoir fonctionner correctement. Sous Windows, cela peut casser le style Aero de Windows lors de la maximisation et du clipsement de la fenêtre.

Afin que ce changement soit actif, Discord doit être redémarré. Voulez-vous redémarrer l'application maintenant?`,
            disabledInfo: "Afin que ce changement soit actif, Discord doit être redémarré. Voulez-vous redémarrer l'application maintenant?"
        }
    }
});
var yl = Z((FC, Yh) => {
    Yh.exports = {
        Panels: {
            plugins: "Plugins",
            themes: "Themes",
            customcss: "Custom-CSS"
        },
        Collections: {
            settings: {
                name: "Einstellungen",
                general: {
                    name: "Allgemein",
                    voiceDisconnect: {
                        name: "Verbindung zum Sprachchat trennen",
                        note: "Trennt beim Schließen von Discord die Verbindung zum Sprachchat"
                    },
                    showToasts: {
                        name: "Toast-Benachrichtigungen anzeigen",
                        note: "Zeigt eine kleine Benachrichtigung für wichtige Informationen an"
                    },
                    mediaKeys: {
                        name: "Medien-Tasten deaktivieren",
                        note: "Verhindert, dass Discord deine Medien-Tasten nach dem Abspielen eines Videos beansprucht"
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Freie Fenstergröße",
                        note: "Entfernt die Beschränkung der minimalen Fenstergröße von 940x500 Pixel"
                    },
                    name: "Fenster-Einstellungen",
                    transparency: {
                        name: "Transparenz aktivieren",
                        note: "Macht den Discord-Hintergrund transparent (Benötigt Discord Neustart)"
                    },
                    frame: {
                        name: "Standard-Design",
                        note: "Stellt das Hauptfenster im Standard-Design des Betriebssystems dar"
                    }
                },
                addons: {
                    name: "Erweiterungsverwaltung",
                    addonErrors: {
                        name: "Fehlernachricht für Erweiterungen anzeigen",
                        note: "Zeigt ein Informationsfenster bei Ladefehlern von Erweiterungen an"
                    },
                    editAction: {
                        name: "Bearbeitungsaktion",
                        note: "Bestimmt womit Plugins und Themes zum Bearbeiten geöffnet werden",
                        options: {
                            detached: "Losgelöstes Fenster",
                            system: "Systemweiter Standard-Texteditor"
                        }
                    }
                },
                customcss: {
                    name: "Custom-CSS",
                    customcss: {
                        name: "Custom-CSS",
                        note: "Aktiviert den Custom-CSS Reiter in den Einstellungen"
                    },
                    liveUpdate: {
                        name: "Echtzeitaktualisierung",
                        note: "Aktualisert den CSS Code während des Schreibens"
                    },
                    startDetached: {
                        name: "In losgelöstem Fenster öffnen",
                        note: 'Das Öffnen des \\"Custom-CSS\\"-Reiters öffnet den Editor in einem separaten Fenster'
                    },
                    nativeOpen: {
                        name: "Im System-Editor öffnen",
                        note: 'Das Öffnen des \\"Custom-CSS\\"-Reiters öffnet den Editor im systemweiten Standard-Texteditor'
                    },
                    openAction: {
                        name: "Editormodus",
                        note: "Wo soll Custom-CSS standardmäßig geöffnet werden",
                        options: {
                            settings: "in den Einstellungen",
                            detached: "in losgelöstem Fenster",
                            system: "im Standard-Texteditor"
                        }
                    }
                },
                developer: {
                    name: "Entwickler-Einstellungen",
                    debuggerHotkey: {
                        name: "Debugger-Tastenkürzel",
                        note: "Erlaubt das Starten des Debuggers durch Drücken der F8-Taste"
                    },
                    reactDevTools: {
                        name: "React-Entwicklerwerzeuge",
                        note: "Koppelt eine vorhandene Installation der React-Entwicklerwerkzeuge in Discord ein"
                    },
                    inspectElement: {
                        name: 'Tastenkürzel für "Element untersuchen"',
                        note: 'Aktiviert das Tastenkürzel für \\"Element Untersuchen\\" (Strg + Shift + C), welches in gängigen Browsern vorhanden ist'
                    },
                    devToolsWarning: {
                        name: "Entwicklerwerkzeuge Warnungen stoppen",
                        note: 'Hält Discord davon ab ihre \\"Hold Up!\\" Warnung zu zeigen'
                    },
                    debugLogs: {
                        name: "Debugger Logs",
                        note: 'Speichert alle Ausgaben aus der Konsole in die \\"debug.log\\" Datei im BetterDiscord Verzeichnis'
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} von {{author}}",
            byline: "von {{author}}",
            reload: "Neu laden",
            addonSettings: "Einstellungen",
            website: "Webseite",
            source: "Quelle",
            invite: "Support-Server",
            donate: "Spenden",
            patreon: "Patreon",
            name: "Name",
            author: "Autor",
            version: "Version",
            added: "Hinzufügedatum",
            modified: "Bearbeitungsdatum",
            editAddon: "Bearbeiten",
            deleteAddon: "Löschen",
            confirmDelete: "Bist du dir sicher, dass du {{name}} löschen willst?",
            confirmationText: "Du hast ungespeicherte Änderungen in {{name}}. Durch das Schließen dieses Fensters verlierst du alle Änderungen.",
            enabled: "{{name}} wurde aktiviert.",
            disabled: "{{name}} wurde deaktiviert.",
            couldNotEnable: "{{name}} konnte nicht aktiviert werden.",
            couldNotDisable: "{{name}} konnte nicht deaktiviert werden.",
            couldNotStart: "{{name}} konnte nicht gestartet werden.",
            couldNotStop: "{{name}} konnte nicht gestoppt werden.",
            settingsError: "Einstellungen für {{name}} konnten nicht geöffnet werden",
            methodError: "{{method}} konnte nicht ausgeführt werden.",
            unknownAuthor: "Unbekannter Autor",
            noDescription: "Keine Beschreibung angegeben.",
            metaError: "META konnte nicht geparst werden.",
            missingNameData: 'META enthält keinen \\"name\\" Parameter.',
            metaNotFound: "META nicht gefunden.",
            compileError: "Konnte nicht kompiliert werden.",
            wasUnloaded: "{{name}} wurde entladen."
        },
        CustomCSS: {
            confirmationText: "Du hast ungespeicherte Änderungen im Custom-CSS. Durch das Schließen dieses Fensters verlierst du alle Änderungen.",
            update: "Aktualisieren",
            save: "Speichern",
            openNative: "Im System-Editor öffnen",
            openDetached: "Fenster trennen",
            settings: "Editor-Einstellungen",
            editorTitle: "Custom-CSS-Editor"
        },
        Modals: {
            confirmAction: "Bist du dir sicher?",
            okay: "Okay",
            done: "Fertig",
            cancel: "Abbrechen",
            nevermind: "Egal",
            close: "Schließen",
            name: "Name",
            message: "Nachricht",
            error: "Fehler",
            addonErrors: "Erweiterungsfehler",
            restartRequired: "Neustart erforderlich",
            restartNow: "Jetzt neustarten",
            restartLater: "Später neustarten",
            additionalInfo: "Zusätzliche Informationen",
            restartPrompt: "Die Einstellung wurde gespeichert. Um sie anzuwenden, ist ein Neustart von Discord erforderlich."
        },
        Sorting: {
            sortBy: "Sortieren nach",
            order: "Reihenfolge",
            ascending: "Aufsteigend",
            descending: "Absteigend"
        },
        WindowPrefs: {
            enabledInfo: `Diese Option benötigt ein Theme mit transparentem Hintergrund um richtig zu funktionieren. Weiters kann dadurch unter Windows das Andocken des Fensters am Bildschirmrand beeinträchtigt sein.

Um die Änderungen zu übernehmen muss Discord neugestartet werden. Möchtest du jetzt neustarten?`,
            disabledInfo: "Die Einstellung wurde gespeichert. Um sie anzuwenden, ist ein Neustart von Discord erforderlich."
        }
    }
});
var xl = Z((OC, Qh) => {
    Qh.exports = {
        Panels: {
            plugins: "Πρόσθετα",
            themes: "Θέματα",
            customcss: "Προσαρμοσμένο CSS",
            updates: "Ενημερώσεις"
        },
        Collections: {
            settings: {
                name: "Ρυθμίσεις",
                general: {
                    name: "Γενικά",
                    voiceDisconnect: {
                        name: "Αποσύνδεση Φωνής",
                        note: "Αποσύνδεση από τον διακομιστή φωνής με το κλείσιμο του Discord"
                    },
                    showToasts: {
                        name: "Εμφάνιση Ειδοποιήσεων",
                        note: "Εμφάνιση μικρής ειδοποίησης για σημαντικές πληροφορίες"
                    },
                    mediaKeys: {
                        name: "Απενεργοποίηση Πλήκτρων Πολυμέσων",
                        note: "Αποτροπή παρέμβασης του Discord στα πλήκτρα πολυμέσων μετά την αναπαραγωγή βίντεο."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Απομάκρυνση Ελάχιστου Μεγέθους",
                        note: "Απομακρύνει τον περιορισμό του Discord για ελάχιστες διαστάσεις παραθύρου στα 940 x 500"
                    },
                    name: "Ιδιότητες Παραθύρου",
                    transparency: {
                        name: "Ενεργοποίηση Διαφάνειας",
                        note: "Ενεργοποιεί τη διαφάνεια του βασικού παραθύρου (απαιτείται επανεκκίνηση)"
                    },
                    frame: {
                        name: "Πλαίσιο Παραθύρου",
                        note: "Προσθέτει το πλαίσιο του συστήματος στο βασικό παράθυρο"
                    }
                },
                addons: {
                    name: "Διαχειριστής Προσθέτων",
                    addonErrors: {
                        name: "Εμφάνιση Σφαλμάτων Προσθέτων",
                        note: "Εμφάνιση σφαλμάτων προσθέτων/θεμάτων σε παράθυρο"
                    },
                    editAction: {
                        name: "Ενέργεια Επεξεργασίας",
                        note: "Η θέση εμφάνισης προσθέτων και θεμάτων κατά την επεξεργασία",
                        options: {
                            detached: "Αποσπώμενο Παράθυρο",
                            system: "Επεξεργαστής Συστήματος"
                        }
                    }
                },
                customcss: {
                    name: "Προσαρμοσμένο CSS",
                    customcss: {
                        name: "Προσαρμοσμένο CSS",
                        note: "Ενεργοποιεί την καρτέλα Προσαρμοσμένου CSS"
                    },
                    liveUpdate: {
                        name: "Ενημέρωση σε πραγματικό χρόνο",
                        note: "Ενημερώνεται το CSS ενώ πληκτρολογείτε"
                    },
                    startDetached: {
                        name: "Εκκίνηση ως Αποσπώμενο",
                        note: "Πατώντας την καρτέλα Προσαρμοσμένου CSS ανοίγει τον επεξεργαστή σε χωριστό παράθυρο"
                    },
                    nativeOpen: {
                        name: "Άνοιγμα στον Επεξεργαστή του Συστήματος",
                        note: "Πατώντας την καρτέλα του Προσαρμοσμένου CSS ανοίγει το προσαρμοσμένο CSS στον επεξεργαστή συστήματος"
                    },
                    openAction: {
                        name: "Θέση επεξεργαστή",
                        note: "Που πρέπει να ανοίγει το Προσαρμοσμένο CSS από προεπιλογή",
                        options: {
                            settings: "Μενού Ρυθμίσεων",
                            detached: "Αποσπώμενο παράθυρο",
                            system: "Επεξεργαστής Συστήματος"
                        }
                    }
                },
                developer: {
                    name: "Ρυθμίσεις Δημιουργού",
                    debuggerHotkey: {
                        name: "Συντόμευση πληκτρολογίου για Αποσφαλμάτωση",
                        note: "Επιτρέπει την ενεργοποίηση της Αποσφαλμάτωσης, πατώντας το πλήκτρο F8 με ανοιχτά τα Εργαλεία Δημιουργού"
                    },
                    reactDevTools: {
                        name: "Εργαλεία Δημιουργού React",
                        note: "Ανοίγει την τοπική εγκατάσταση των Εργαλείων Δημιουργού React στο Discord"
                    },
                    inspectElement: {
                        name: "Συντόμευση πληκτρολογίου Παρακολούθησης Στοιχείου",
                        note: "Ενεργοποιεί τη συντόμευση πληκτρολογίου παρακολούθησης στοιχείου (Ctrl+Shift+C) που είναι κοινή στους περισσότερους φυλλομετρητές"
                    },
                    devToolsWarning: {
                        name: "Σταμάτημα Προειδοποίησης Εργαλείων Δημιουργού",
                        note: "Αποτρέπει το Discord να εμφανίζει το μήνυμα «Αναμείνατε!»"
                    },
                    debugLogs: {
                        name: "Καταγραφές Αποσφαλμάτωσης",
                        note: "Εξάγει τα πάντα από την κονσόλα στο αρχείο debug.log στο φάκελο του BetterDiscord"
                    },
                    devTools: {
                        name: "Εργαλεία Δημιουργού",
                        note: "Ενεργοποιεί την εναλλαγή των Εργαλείων Δημιουργού με το Ctrl+Shift+I"
                    }
                },
                editor: {
                    name: "Ιδιότητες Επεξεργαστή",
                    lineNumbers: {
                        name: "Αριθμοί γραμμών",
                        note: "Ενεργοποιείται η εμφάνιση των αριθμών γραμμών στη πλευρά του επεξεργαστή"
                    },
                    fontSize: {
                        name: "Μέγεθος Γραμματοσειράς",
                        note: "Μεγεθος γραμματοσειράς (pt) για χρήση στον επεξεργαστή"
                    },
                    minimap: {
                        name: "Εποπτικός χάρτης",
                        note: "Ενεργοποιεί την εμφάνιση του εποπτικού χάρτη του κώδικα στην πλευρά του επεξεργαστή"
                    },
                    hover: {
                        name: "Επεξηγήσεις Αναφοράς",
                        note: "Ενεργοποιεί την εμφάνιση των επεξηγήσεων αναφοράς όταν πάτε με το ποντίκι κανόνων και επιλογέων"
                    },
                    quickSuggestions: {
                        name: "Γρήγορες Προτάσεις",
                        note: "Ενεργοποιεί την εμφάνιση των αυτοσυμπληρούμενων προτάσεων κατά την δακτυλογράφηση"
                    },
                    renderWhitespace: {
                        name: "Εμφάνιση Διαστήματος",
                        note: "Όταν τα διαστήματα πρέπει να φαίνονται από τον επεξεργαστή",
                        options: {
                            all: "Πάντα",
                            none: "Ποτέ",
                            selection: "Επιλογή"
                        }
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} από {{author}}",
            byline: "από {{author}}",
            reload: "Επαναφόρτωση",
            addonSettings: "Ρυθμίσεις",
            website: "Ιστοσελίδα",
            source: "Προέλευση",
            invite: "Διακομιστής Υποστήριξης",
            donate: "Δωρεά",
            patreon: "Patreon",
            name: "Ονομασία",
            author: "Δημιουργός",
            version: "Έκδοση",
            added: "Ημερομηνία που Προστέθηκε",
            modified: "Ημερομηνία που Τροποποιήθηκε",
            editAddon: "Επεξεργασία",
            deleteAddon: "Διαγραφή",
            confirmDelete: "Θέλετε να διαγράψετε το πρόσθετο {{name}};",
            confirmationText: "Έχετε μη αποθηκευμένες αλλαγές στο πρόσθετο {{name}}. Με το κλείσιμο του παραθύρου θα χαθούν όλες αυτές οι αλλαγές.",
            enabled: "Το πρόσθετο {{name}} έχει ενεργοποιηθεί.",
            disabled: "Το πρόσθετο {{name}} έχει απενεργοποιηθεί.",
            couldNotEnable: "Το πρόσθετο {{name}} δεν μπορεί να ενεργοποιηθεί.",
            couldNotDisable: "Το πρόσθετο {{name}} δεν μπορεί να απενεργοποιηθεί.",
            couldNotStart: "Το πρόσθετο {{name}} δεν μπορεί να εκκινηθεί.",
            couldNotStop: "Το πρόσθετο {{name}} δεν μπορεί να τερματιστεί.",
            settingsError: "Αδύνατο το άνοιγμα των ρυθμίσεων για το πρόσθετο {{name}}",
            methodError: "Η μέθοδος {{method}} δεν μπορεί να ενεργοποιηθεί.",
            unknownAuthor: "Άγνωστος Δημιουργός",
            noDescription: "Η περιγραφή δεν παρέχεται.",
            metaError: "Τα μεταδεδομένα δεν μπορούν να αναγνωστούν.",
            missingNameData: "Τα μεταδεδομένα απώλεσαν δεδομένα ονόματος.",
            metaNotFound: "Τα μεταδεδομένα δεν βρέθηκαν.",
            compileError: "Αδύνατη η μετατροπή. Δείτε την κονσόλα για λεπτομέρειες.",
            wasUnloaded: "Το πρόσθετο {{name}} αποφορτώθηκε.",
            isEnabled: "Ενεργοποιημένα",
            wasLoaded: "Το πρόσθετο {{name}} v{{version}} φορτώθηκε."
        },
        CustomCSS: {
            confirmationText: "Έχετε μη αποθηκευμένες αλλαγές στο Προσαρμοσμένο CSS. Με το κλείσιμο αυτού του παραθύρου, θα χάσετε όλες αυτές τις αλλαγές.",
            update: "Ενημέρωση",
            save: "Αποθήκευση",
            openNative: "Άνοιγμα στον Επεξεργαστή Συστήματος",
            openDetached: "Αποσπώμενο Παράθυρο",
            settings: "Ρυθμίσεις Επεξεργαστή",
            editorTitle: "Επεξεργαστής Προσαρμοσμένου CSS"
        },
        Modals: {
            confirmAction: "Σίγουρα;",
            okay: "Εντάξει",
            done: "Ολοκληρώθηκε",
            cancel: "Άκυρο",
            nevermind: "Δεν πειράζει",
            close: "Κλείσιμο",
            name: "Ονομασία",
            message: "Μήνυμα",
            error: "Σφάλμα",
            addonErrors: "Σφάλματα Πρόσθετου",
            restartRequired: "Απαιτείται Επανεκκίνηση",
            restartNow: "Επανεκκίνηση Τώρα",
            restartLater: "Επανεκκίνηση Αργότερα",
            additionalInfo: "Πρόσθετες Πληροφορίες",
            restartPrompt: "Για να εφαρμοστεί, το Discord πρέπει να επανεκκινηθεί. Θέλετε επανεκκίνηση τώρα;"
        },
        Sorting: {
            sortBy: "Ταξινόμηση κατά",
            order: "Ταξινόμηση",
            ascending: "Αύξουσα",
            descending: "Φθίνουσα"
        },
        WindowPrefs: {
            enabledInfo: `Αυτή η επιλογή απαιτεί διαφανές θέμα ώστε να λειτουργεί σωστά. Στα Windows ίσως επηρεάσει την προσαρμογή aero ή τη μεγιστοποίηση.

Για να ενεργοποιηθεί, το Discord πρέπει να επανεκκινηθεί. Επανεκκίνηση τώρα;`,
            disabledInfo: "Για να ενεργοποιηθεί, το Discord πρέπει να επανεκκινηθεί. Επανεκκίνηση τώρα;"
        },
        Updater: {
            updateFailed: "Η ενημέρωση Απέτυχε!",
            updateFailedMessage: "Το BetterDiscord απέτυχε να ενημερωθεί. Λάβετε την τελευταία έκδοση του προγράμματος εγκατάστασης από την ιστοσελίδα μας (https://betterdiscord.app/) και κάντε επανεγκατάσταση.",
            updateSuccessful: "Η Ενημέρωση ήταν Επιτυχής!",
            updateAvailable: "Το BetterDiscord έχει μια νέα ενημερωση (v{{version}})",
            addonUpdated: "Το {{name}} έχει ενημερωθεί στην έκδοση {{version}}!",
            checking: "Έλεγχος για ενημερώσεις!",
            finishedChecking: "Ολοκλήρωση ελέγχου για ενημερώσεις!",
            checkForUpdates: "Έλεγχος Για Ενημερώσεις!",
            updateAll: "Ενημέρωση Όλων!",
            noUpdatesAvailable: "Καμιά διαθέσιμη ενημέρωση.",
            versionAvailable: "Η έκδοση {{version}} είναι διαθέσιμη!",
            updateButton: "Ενημέρωση!"
        }
    }
});
var vl = Z((RC, eg) => {
    eg.exports = {
        Panels: {
            plugins: "Pluginok",
            themes: "Témák",
            customcss: "Egyéni CSS",
            updates: "Frissítések"
        },
        Collections: {
            settings: {
                name: "Beállítások",
                general: {
                    name: "Általános",
                    voiceDisconnect: {
                        name: "Hangkapcsolat megszakítása",
                        note: "Kapcsolat megszakítása a hangkiszolgálóval amikor bezárod a Discordot"
                    },
                    showToasts: {
                        name: "Értesítés megjelenítése induláskor",
                        note: "Kis értesítést jelenít meg a fontos információkról"
                    },
                    mediaKeys: {
                        name: "Médiavezérlő billentyűk letiltása",
                        note: "Megakadályozza, hogy a Discord a videók lejátszása után átkalibrálja a médiavezérlő billentyűket."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Minimális méret felülírása",
                        note: "Felülírja és eltávolítja a Discord kényszerített minimális 940x500-as ablakméretét"
                    },
                    name: "Ablak beállítások",
                    transparency: {
                        name: "Átlátszóság engedélyezése",
                        note: "A főablak átláthatóvá tétele (újraindítást igényel)"
                    },
                    frame: {
                        name: "Ablakkeret",
                        note: "Hozzáadja az alap os ablakkeretet a főablakhoz"
                    }
                },
                addons: {
                    name: "Kiegészítőkezelő",
                    addonErrors: {
                        name: "Kiegészítő hibaüzenetek megjelenítése",
                        note: "Megjelenít egy ablakot a pluginok/témák hibáiról"
                    },
                    editAction: {
                        name: "Szerkesztő beállítása",
                        note: "A pluginok és témák szerkesztése ebben a szerkesztőben",
                        options: {
                            detached: "Különálló ablak",
                            system: "Rendszer alapértelmezett"
                        }
                    }
                },
                customcss: {
                    name: "Egyéni CSS",
                    customcss: {
                        name: "Egyéni CSS",
                        note: "Engedélyezi az Egyéni CSS szekciót"
                    },
                    liveUpdate: {
                        name: "Frissítés élőben",
                        note: "Frissíti a css-t szerkesztés közben"
                    },
                    startDetached: {
                        name: "Indítás külön ablakban",
                        note: "Az Egyéni CSS szekcióra kattintva a szerkesztő egy külön ablakban nyílik meg"
                    },
                    nativeOpen: {
                        name: "Megnyitás natív szerkesztőben",
                        note: "Az Egyéni CSS fülre kattintva megnyílik az egyéni css egy natív szerkesztőben"
                    },
                    openAction: {
                        name: "Szerkesztő helye",
                        note: "Az Egyéni CSS alapértelmezetten itt nyílik meg",
                        options: {
                            settings: "Beállítások menü",
                            detached: "Különálló ablak",
                            system: "Rendszer alapértelmezett"
                        }
                    }
                },
                developer: {
                    name: "Fejlesztői beállítások",
                    debuggerHotkey: {
                        name: "Hibakereső gyorsbillentyű",
                        note: "Lehetővé teszi a debugger aktiválását az F8 megnyomásakor, amikor a DevTools meg van nyitva"
                    },
                    reactDevTools: {
                        name: "React fejlesztői eszközök",
                        note: "Beilleszti a telepített React Developer Toolst a Discordba"
                    },
                    inspectElement: {
                        name: "Elem vizsgálat gyorsbillentyűje",
                        note: "Engedélyezi a legtöbb böngészőben használt elem vizsgálata gyorsbillentyűt (ctrl + shift + c)"
                    },
                    devToolsWarning: {
                        name: "DevTools riasztás leállítása",
                        note: 'Megakadályozza, hogy a Discord kiírja a "Várj!" üzenetét'
                    },
                    debugLogs: {
                        name: "Hibakereső napló",
                        note: "A konzolról mindent kiír a BetterDiscord mappában lévő debug.log fájlba"
                    },
                    devTools: {
                        name: "Fejlesztői eszközök",
                        note: "Engedélyezi a DevTools bekapcsolását a ctrl+shift+i billentyűkombinációval"
                    }
                },
                editor: {
                    name: "Szerkesztői beállítások",
                    lineNumbers: {
                        name: "Szakasz sorszámok",
                        note: "Lehetővé teszi a szakasz sorszámok megjelenítését a szerkesztő oldalán"
                    },
                    fontSize: {
                        name: "Betűméret",
                        note: "A szerkesztőben használandó betűtípus mérete (pt)"
                    },
                    minimap: {
                        name: "Minitérkép",
                        note: "Megjeleníti a kódminitérkép megjelenítését a szerkesztő oldalán"
                    },
                    hover: {
                        name: "Hivatkozási eszköztippek",
                        note: "Megjeleníti a hivatkozási eszköztippek megjelenítését a szabályok és szelektorok lebegtetésekor"
                    },
                    quickSuggestions: {
                        name: "Gyors javaslatok",
                        note: "Engedélyezi az automatikus kitöltési javaslatok megjelenítését gépelés közben"
                    },
                    renderWhitespace: {
                        name: "Fehér tér megjelenítése",
                        note: "Szóközök megjelenítése a szerkesztőben",
                        options: {
                            all: "Mindig",
                            none: "Soha",
                            selection: "Kiválasztás"
                        }
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} {{author}} által",
            byline: "{{author}} által",
            reload: "Újratöltés",
            addonSettings: "Beállítások",
            website: "Weboldal",
            source: "Forrás",
            invite: "Támogatási szerver",
            donate: "Támogatás",
            patreon: "Patreon",
            name: "Név",
            author: "Szerző",
            version: "Verzió",
            added: "Hozzáadás dátuma",
            modified: "Módosítás dátuma",
            editAddon: "Szerkesztés",
            deleteAddon: "Törlés",
            confirmDelete: "Biztos, hogy törölni akarja ezt: {{name}}?",
            confirmationText: "A {{name}} módosításait nem kerültek mentésre. Ha bezárja ezt az ablakot, ezek a módosítások elvesznek.",
            enabled: "{{name}} bekapcsolva.",
            disabled: "{{name}} ki lett kapcsolva.",
            couldNotEnable: "{{name}} nem elindítható.",
            couldNotDisable: "{{name}} nem kikapcsolható.",
            couldNotStart: "{{name}} nem elindítható.",
            couldNotStop: "{{name}} nem leállítható.",
            settingsError: "Nem sikerült megnyitni a {{name}} beállításait",
            methodError: "{{method}} nem kivehető.",
            unknownAuthor: "Ismeretlen szerző",
            noDescription: "Leírás nincs megadva.",
            metaError: "Nem sikerült elemezni a META-t.",
            missingNameData: "Hiányzik a névadat a META-ból.",
            metaNotFound: "META nem található.",
            compileError: "Sikertelen indítás. Részletekért lásd a konzolt.",
            wasUnloaded: "{{name}} nem indult el.",
            isEnabled: "Bekapcsolva",
            wasLoaded: "{{name}} v{{{version}} betöltődött."
        },
        CustomCSS: {
            confirmationText: "Az Egyéni CSS módosításait nem kerültek mentésre. Ha bezárja ezt az ablakot, ezek a módosítások elvesznek.",
            update: "Frissítés",
            save: "Mentés",
            openNative: "Megnyitás a Rendszer szerkesztőjében",
            openDetached: "Különálló ablak",
            settings: "Szerkesztő beállítások",
            editorTitle: "Egyéni CSS szerkesztő"
        },
        Modals: {
            confirmAction: "Biztos vagy benne?",
            okay: "Oké",
            done: "Kész",
            cancel: "Mégse",
            nevermind: "Mégse",
            close: "Bezárás",
            name: "Név",
            message: "Üzenet",
            error: "Hiba",
            addonErrors: "Kiegészítők hibái",
            restartRequired: "Újraindítás szükséges",
            restartNow: "Újraindítás most",
            restartLater: "Újraindítás később",
            additionalInfo: "További információk",
            restartPrompt: "A Discordot újra kell indítani ahhoz, hogy érvénybe lépjen a változtatás. Most akarod újraindítani?"
        },
        Sorting: {
            sortBy: "Rendezés",
            order: "Rendezés",
            ascending: "Növekvő",
            descending: "Csökkenő"
        },
        WindowPrefs: {
            enabledInfo: `Ez az opció átlátszó témát igényel a megfelelő működéshez. Windowson ez megszakíthatja az aero snappinget és a maximalizálást.

A Discordot újra kell indítani, hogy érvénybe lépjen. Szeretnéd most újraindítani?`,
            disabledInfo: "A Discordot újra kell indítani ahhoz, hogy érvénybe lépjen. Szeretnéd most újraindítani?"
        },
        Updater: {
            updateFailed: "A frissítés sikertelen!",
            updateFailedMessage: "A BetterDiscord frissítése sikertelen. Kérjük, töltse le a telepítő legújabb verzióját erről a weboldalról: (https://betterdiscord.app/), majd telepítse újra.",
            updateSuccessful: "Frissítés sikeres!",
            updateAvailable: "Új frissítés erélhető a BetterDiscordhoz: (v{{version}})",
            addonUpdated: "A {{name}} frissült {{version}} verzióra!",
            checking: "Frissítések keresése!",
            finishedChecking: "Frissítések ellenőrzése sikeres!",
            checkForUpdates: "Frissítések keresése!",
            updateAll: "Az összes frissítése!",
            noUpdatesAvailable: "Nincsenek elérhető frissítések.",
            versionAvailable: "Verziófrissítés elérhető: {{version}}!",
            updateButton: "Frissítés!"
        }
    }
});
var wl = Z((UC, tg) => {
    tg.exports = {
        Panels: {
            plugins: "Plugins",
            themes: "Temi",
            customcss: "CSS Personalizzato",
            updates: "Aggiornamenti"
        },
        Collections: {
            settings: {
                name: "Impostazioni",
                general: {
                    name: "Generale",
                    voiceDisconnect: {
                        name: "Disconnessione vocale",
                        note: "Disconnettiti dalla chat vocale alla chiusura di Discord."
                    },
                    showToasts: {
                        name: "Mostra notifiche",
                        note: "Mostra una piccola notifica per le informazioni importanti."
                    },
                    mediaKeys: {
                        name: "Disattiva i tasti multimediali",
                        note: "Impedisce a Discord di comandare i tasti multimediali dopo la riproduzione di un video."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Rimuovi dimensione minima",
                        note: "Rimuove la dimensione minima forzata della finestra di Discord di 940x500."
                    },
                    name: "Preferenze Finestra",
                    transparency: {
                        name: "Attiva trasparenza",
                        note: "Consente alla finestra principale di essere trasparente (richiede il riavvio)."
                    },
                    frame: {
                        name: "Frame finestra",
                        note: "Aggiunge il frame della finestra del sistema operativo nativo alla finestra principale."
                    }
                },
                addons: {
                    name: "Gestione Addons",
                    addonErrors: {
                        name: "Mostra errori addons",
                        note: "Mostra una modale con errori dei plugins/temi."
                    },
                    editAction: {
                        name: "Azione di modifica",
                        note: "Seleziona dove vengono mostrati plugins e temi durante la modifica.",
                        options: {
                            detached: "Finestra separata",
                            system: "Editor di sistema"
                        }
                    }
                },
                customcss: {
                    name: "CSS Personalizzato",
                    customcss: {
                        name: "CSS Personalizzato",
                        note: "Attiva la scheda di CSS personalizzato."
                    },
                    liveUpdate: {
                        name: "Aggiornamento automatico",
                        note: "Aggiorna il CSS durante la modifica."
                    },
                    startDetached: {
                        name: "Finestra separata",
                        note: "Cliccando sulla scheda CSS personalizzato si apre l'editor in una finestra separata."
                    },
                    nativeOpen: {
                        name: "Editor nativo",
                        note: "Cliccando sulla scheda CSS personalizzato si apre il CSS personalizzato nell'editor nativo."
                    },
                    openAction: {
                        name: "Posizione dell'editor",
                        note: "Seleziona dove il CSS personalizzato dovrebbe aprirsi per impostazione predefinita.",
                        options: {
                            settings: "Menu impostazioni",
                            detached: "Finestra separata",
                            system: "Editor di sistema"
                        }
                    }
                },
                developer: {
                    name: "Impostazioni Sviluppatore",
                    debuggerHotkey: {
                        name: "Debugger Hotkey",
                        note: "Consente di attivare il debugger quando si preme F8 con DevTools aperto."
                    },
                    reactDevTools: {
                        name: "React Developer Tools",
                        note: "Inietta la tua installazione locale di React Developer Tools in Discord."
                    },
                    inspectElement: {
                        name: "Inspect Element Hotkey",
                        note: "Consente di attivare il tasto ispeziona elemento (CTRL+SHIFT+C) comune nella maggior parte dei browser."
                    },
                    devToolsWarning: {
                        name: "Stop DevTools Warning",
                        note: 'Impedisce a Discord di stampare il messaggio "Hold Up!".'
                    },
                    debugLogs: {
                        name: "Debug Logs",
                        note: "Consente che tutto l'output della console venga salvato nel file debug.log nella cartella BetterDiscord."
                    },
                    devTools: {
                        name: "DevTools",
                        note: "Consente la commutazione di DevTools con CTRL+SHIFT+I."
                    }
                },
                editor: {
                    name: "Preferenze dell'Editor",
                    lineNumbers: {
                        name: "Numeri di riga",
                        note: "Consente di mostrare i numeri di riga sul lato dell'editor."
                    },
                    fontSize: {
                        name: "Dimensione carattere",
                        note: "Dimensione del carattere (pt) da utilizzare nell'editor."
                    },
                    minimap: {
                        name: "Minimappa",
                        note: "Consente di mostrare la minimappa del codice sul lato dell'editor."
                    },
                    hover: {
                        name: "Suggerimenti di riferimento",
                        note: "Consente di mostrare i suggerimenti di riferimento quando si passa con il mouse su regole e selettori."
                    },
                    quickSuggestions: {
                        name: "Suggerimenti rapidi",
                        note: "Consente di mostrare i suggerimenti di completamento automatico durante la digitazione."
                    },
                    renderWhitespace: {
                        name: "Mostra spazi bianchi",
                        note: "Seleziona quando gli spazi bianchi dovrebbero essere mostrati dall'editor.",
                        options: {
                            all: "Sempre",
                            none: "Mai",
                            selection: "Selezione"
                        }
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} di {{author}}",
            byline: "di {{author}}",
            reload: "Ricarica",
            addonSettings: "Impostazioni",
            website: "Website",
            source: "Sorgente",
            invite: "Discord",
            donate: "Dona",
            patreon: "Patreon",
            name: "Nome",
            author: "Autore",
            version: "Versione",
            added: "Data di aggiunta",
            modified: "Data di modifica",
            editAddon: "Modifica",
            deleteAddon: "Elimina",
            confirmDelete: "Sei sicuro di voler eliminare {{name}}?",
            confirmationText: "Hai modifiche non salvate a {{name}}. Chiudendo questa finestra tutte le modifiche andranno perse.",
            enabled: "{{name}} è stato attivato.",
            disabled: "{{name}} è stato disattivato.",
            couldNotEnable: "{{name}} non può essere attivato.",
            couldNotDisable: "{{name}} non può essere disattivato.",
            couldNotStart: "{{name}} non può essere avviato.",
            couldNotStop: "{{name}} non può essere arrestato.",
            settingsError: "Impossibile aprire le impostazioni per {{name}}",
            methodError: "{{method}} non può essere restituito.",
            unknownAuthor: "Autore sconosciuto",
            noDescription: "Descrizione non fornita.",
            metaError: "META non può essere analizzato.",
            missingNameData: "Dati del nome META mancanti.",
            metaNotFound: "META non è stato trovato.",
            compileError: "Impossibile compilare. Vedi la console per i dettagli.",
            wasUnloaded: "{{name}} è stato disattivato.",
            isEnabled: "Attivato",
            wasLoaded: "{{name}} v{{version}} è stato caricato.",
            listView: "Vista a elenco",
            gridView: "Vista a griglia"
        },
        CustomCSS: {
            confirmationText: "Hai modifiche non salvate al tuo CSS personalizzato. Chiudendo questa finestra tutte le modifiche andranno perse.",
            update: "Aggiorna",
            save: "Salva",
            openNative: "Editor di sistema",
            openDetached: "Finestra separata",
            settings: "Impostazioni Editor",
            editorTitle: "Editor CSS Personalizzato"
        },
        Modals: {
            confirmAction: "Sei sicuro?",
            okay: "Okay",
            done: "Fatto",
            cancel: "Annulla",
            nevermind: "Non importa",
            close: "Chiudi",
            name: "Nome",
            message: "Messaggio",
            error: "Errore",
            addonErrors: "Errori addon",
            restartRequired: "Riavvio richiesto",
            restartNow: "Riavvia ora",
            restartLater: "Riavvia più tardi",
            additionalInfo: "Informazioni aggiuntive",
            restartPrompt: "Per avere effetto, Discord deve essere riavviato. Vuoi riavviare ora?"
        },
        Sorting: {
            sortBy: "Ordina per",
            order: "Ordine",
            ascending: "Ascendente",
            descending: "Discendente"
        },
        WindowPrefs: {
            enabledInfo: `Questa opzione richiede un tema trasparente per funzionare correttamente. Su Windows questo potrebbe interrompere l'aero snapping e la massimizzazione.

Per avere effetto, Discord deve essere riavviato. Vuoi riavviare ora?`,
            disabledInfo: "Per avere effetto, Discord deve essere riavviato. Vuoi riavviare ora?"
        },
        Updater: {
            updateFailed: "Aggiornamento non riuscito!",
            updateFailedMessage: "BetterDiscord non è stato aggiornato. Scarica l'ultima versione del programma di installazione dal nostro sito web (https://betterdiscord.app/) e reinstalla.",
            updateSuccessful: "Aggiornamento riuscito!",
            updateAvailable: "BetterDiscord ha un nuovo aggiornamento (v{{version}})",
            addonUpdated: "{{name}} è stato aggiornato alla versione {{version}}!",
            checking: "Controlla aggiornamenti!",
            finishedChecking: "Controllo degli aggiornamenti finito!",
            checkForUpdates: "Controlla aggiornamenti!",
            updateAll: "Aggiorna tutto!",
            noUpdatesAvailable: "Nessun aggiornamento disponibile.",
            versionAvailable: "La versione {{version}} è ora disponibile!",
            updateButton: "Aggiorna!"
        }
    }
});
var kl = Z((jC, ag) => {
    ag.exports = {
        Panels: {
            plugins: "プラグイン",
            themes: "テーマ",
            customcss: "カスタムCSS",
            updates: "アップデート"
        },
        Collections: {
            settings: {
                name: "設定",
                general: {
                    name: "全般",
                    voiceDisconnect: {
                        name: "ボイスチャンネルの切断",
                        note: "Discordを終了すると自動的にボイスチャンネルから切断されます。"
                    },
                    showToasts: {
                        name: "トースト表示",
                        note: "重要な情報を小さな通知で表示します。"
                    },
                    mediaKeys: {
                        name: "メディアキー無効化",
                        note: "ビデオ再生後にDiscordがメディアキーを乗っ取るのを防ぎます。"
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "最小サイズ削除",
                        note: "Discordの最小ウィンドウサイズである940x500を強制的に解除します。"
                    },
                    name: "ウィンドウ設定",
                    transparency: {
                        name: "透過を有効",
                        note: "Discordのメインウィンドウを透過します(要再起動)。"
                    },
                    frame: {
                        name: "ウィンドウフレームの表示",
                        note: "メインウィンドウにOSごとのウィンドウフレームを追加します。"
                    }
                },
                addons: {
                    name: "アドオンマネージャー",
                    addonErrors: {
                        name: "アドオンエラーの表示",
                        note: "プラグイン/テーマのエラーを表示します。"
                    },
                    editAction: {
                        name: "アドオンの編集",
                        note: "プラグインとテーマの編集時の表示位置。",
                        options: {
                            detached: "Discord内で開く",
                            system: "外部エディタで開く"
                        }
                    }
                },
                customcss: {
                    name: "カスタムCSS",
                    customcss: {
                        name: "カスタムCSS",
                        note: "カスタムCSSタブを有効にします。"
                    },
                    liveUpdate: {
                        name: "自動リアルタイム更新",
                        note: "入力と同時に自動でCSSを更新"
                    },
                    startDetached: {
                        name: "ウィンドウ表示",
                        note: "カスタムCSSタブをクリックすると、エディターが別ウィンドウで表示されます"
                    },
                    nativeOpen: {
                        name: "外部エディタを起動",
                        note: "カスタムCSSを外部のエディタで起動します"
                    },
                    openAction: {
                        name: "エディター",
                        note: "カスタムCSSがデフォルトで開かれる場所",
                        options: {
                            settings: "設定メニュー",
                            detached: "内部エディター",
                            system: "システム既定のエディター"
                        }
                    }
                },
                developer: {
                    name: "開発者設定",
                    debuggerHotkey: {
                        name: "デバッグ用ホットキー",
                        note: "デベロッパーツールを開いた状態でF8キーを押すとデバッガが起動します。"
                    },
                    reactDevTools: {
                        name: "React開発者向けツール",
                        note: "ローカルにインストールしたReact Developer ToolsをDiscordに挿入します。"
                    },
                    inspectElement: {
                        name: "インスペクト・エレメント・ホットキー",
                        note: "ほとんどのブラウザで一般的なinspect要素のホットキー(Ctrl + Shift + C)を有効にします。"
                    },
                    devToolsWarning: {
                        name: "DevToolsの警告を停止",
                        note: 'Discordの "Hold Up!"メッセージの表示を停止します。'
                    },
                    debugLogs: {
                        name: "デバッグログ",
                        note: "コンソールからBetterDiscordフォルダのdebug.logファイルに全てを出力します。"
                    },
                    devTools: {
                        name: "デベロッパーツール",
                        note: "ctrl+shift+iでデベロッパーツールの切り替えができます。"
                    }
                },
                editor: {
                    name: "エディターの設定",
                    lineNumbers: {
                        name: "行番号",
                        note: "エディターの横に行番号を表示します。"
                    },
                    fontSize: {
                        name: "フォントサイズ",
                        note: "エディターで使用するフォントの大きさ(pt)を変更する。"
                    },
                    minimap: {
                        name: "ミニマップ",
                        note: "エディター横にコード用のミニマップを表示します。"
                    },
                    hover: {
                        name: "参照用ツールチップ",
                        note: "ルールやセレクタをホバーしたときに、参照用のツールチップを表示します。"
                    },
                    quickSuggestions: {
                        name: "入力補助",
                        note: "入力中にオートコンプリートの候補を表示します。"
                    },
                    renderWhitespace: {
                        name: "空白を表示",
                        note: "エディターで空白を表示する場合",
                        options: {
                            all: "常時",
                            none: "無し",
                            selection: "選択"
                        }
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} by {{author}}",
            byline: "by {{author}}",
            reload: "リロード",
            addonSettings: "設定",
            website: "ウェブサイト",
            source: "ソース",
            invite: "サポートサーバー",
            donate: "寄付",
            patreon: "Patreon",
            name: "名称",
            author: "作者",
            version: "バージョン",
            added: "追加日",
            modified: "更新日",
            editAddon: "編集",
            deleteAddon: "削除",
            confirmDelete: "本当に{{name}}を削除しますか？",
            confirmationText: "{{name}}に未保存のデータがあります。このウィンドウを閉じると、それらの変更はすべて失われます。",
            enabled: "{{name}}を有効化しました。",
            disabled: "{{name}}を無効化しました。",
            couldNotEnable: "{{name}}を有効化できませんでした。",
            couldNotDisable: "{{name}}を無効化できませんでした。",
            couldNotStart: "{{name}}を起動できませんでした。",
            couldNotStop: "{{name}}を停止できませんでした。",
            settingsError: "{{name}}の設定を開けませんでした。",
            methodError: "{{method}}を起動できませんでした。",
            unknownAuthor: "作者不明",
            noDescription: "説明はありません。",
            metaError: "METAを解析できませんでした。",
            missingNameData: "METAの名前データがありません。",
            metaNotFound: "METAが見つかりませんでした。",
            compileError: "コンパイルできませんでした。詳しくはコンソールをご覧ください。",
            wasUnloaded: "{{name}}が解除されました。",
            isEnabled: "有効",
            wasLoaded: "{{name}}のv{{version}}が読み込まれました。"
        },
        CustomCSS: {
            confirmationText: "カスタムCSSに未保存のデータがあります。このウィンドウを閉じると、これらの変更はすべて失われます。",
            update: "アップデート",
            save: "保存",
            openNative: "外部エディタで開く",
            openDetached: "別ウィンドウで開く",
            settings: "エディター設定",
            editorTitle: "カスタムCSSエディター"
        },
        Modals: {
            confirmAction: "本当によろしいですか？",
            okay: "はい",
            done: "Done",
            cancel: "いいえ",
            nevermind: "Nevermind",
            close: "Close",
            name: "名前",
            message: "メッセージ",
            error: "エラー",
            addonErrors: "アドオンエラー",
            restartRequired: "再起動が必要",
            restartNow: "今すぐ再起動",
            restartLater: "後で再起動",
            additionalInfo: "その他の情報",
            restartPrompt: "有効にするためには、Discordを再起動する必要があります。今すぐ再起動しますか？"
        },
        Sorting: {
            sortBy: "並び順",
            order: "順序",
            ascending: "昇順",
            descending: "降順"
        },
        WindowPrefs: {
            enabledInfo: `このオプションが正しく動作するためには、透明なテーマが必要です。Windows では、エアロスナップと最大化が壊れる可能性があります。

このオプションを有効にするには、Discord を再起動する必要があります。今すぐ再起動しますか？`,
            disabledInfo: "有効にするためには、Discordを再起動する必要があります。今すぐ再起動しますか？"
        },
        Updater: {
            updateFailed: "アップデートに失敗しました！",
            updateFailedMessage: "BetterDiscordのアップデートに失敗しました。ホームページ(https://betterdiscord.app/)から最新版のインストーラーをダウンロードして、再インストールしてください。",
            updateSuccessful: "アップデートに成功しました！",
            updateAvailable: "BetterDiscordに新しいアップデート(v{{version}})があります。",
            addonUpdated: "{{name}}がバージョン{{version}}にアップデートされました！",
            checking: "アップデートを確認",
            finishedChecking: "アップデートの確認が終了しました！",
            checkForUpdates: "アップデートを確認",
            updateAll: "全てアップデート",
            noUpdatesAvailable: "アップデートはありません。",
            versionAvailable: "バージョン{{version}}を公開しました。",
            updateButton: "アップデート"
        }
    }
});
var Cl = Z((qC, og) => {
    og.exports = {
        Panels: {
            plugins: "플러그인",
            themes: "테마",
            customcss: "사용자 지정 CSS",
            updates: "업데이트"
        },
        Collections: {
            settings: {
                name: "설정",
                general: {
                    name: "일반",
                    voiceDisconnect: {
                        name: "음성 연결 끊기",
                        note: "디스코드를 닫을 때 음성 채널의 연결을 끊습니다"
                    },
                    showToasts: {
                        name: "토스트 메시지 표시",
                        note: "중요한 정보를 위한 작은 알림을 표시합니다"
                    },
                    mediaKeys: {
                        name: "미디어 키 비활성화",
                        note: "영상을 재생한 후, 디스코드가 미디어 키를 가로채는 것을 방지합니다"
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "최소 크기 제거",
                        note: "디스코드의 강제 창 최소 크기 제한 (940x500) 을 제거합니다"
                    },
                    name: "창 선호",
                    transparency: {
                        name: "투명도 활성화",
                        note: "기본 창이 투명하게 보이는 것을 활성화합니다 (재시작 요구됨)"
                    },
                    frame: {
                        name: "창 프레임",
                        note: "기본 창에 기본 OS 창 프레임을 추가합니다"
                    }
                },
                addons: {
                    name: "애드온 관리자",
                    addonErrors: {
                        name: "애드온 에러 표시",
                        note: "플러그인/테마 오류가 있는 모달을 표시합니다"
                    },
                    editAction: {
                        name: "액션 수정",
                        note: "수정할 때 플러그인과 테마가 나타나는 곳",
                        options: {
                            detached: "분리 창",
                            system: "시스템 편집기"
                        }
                    }
                },
                customcss: {
                    name: "사용자 지정 CSS",
                    customcss: {
                        name: "사용자 지정 CSS",
                        note: "사용자 지정 CSS 탭을 활성화합니다"
                    },
                    liveUpdate: {
                        name: "실시간 업데이트",
                        note: "css를 작성하는 대로 업데이트합니다"
                    },
                    startDetached: {
                        name: "분리 창 시작",
                        note: "사용자 지정 CSS 탭을 클릭하면 분리된 창에서 편집기가 열립니다"
                    },
                    nativeOpen: {
                        name: "기본 편집기에서 열기",
                        note: "사용자 지정 CSS 탭을 클릭하면 기본 편집기에서 사용자 지정 css가 열립니다"
                    },
                    openAction: {
                        name: "위치 편집기",
                        note: "기본적으로 사용자 지정 CSS가 열리는 곳",
                        options: {
                            settings: "설정 메뉴",
                            detached: "분리된 창",
                            system: "시스템 편집기"
                        }
                    }
                },
                developer: {
                    name: "개발자 설정",
                    debuggerHotkey: {
                        name: "디버거 단축키",
                        note: "F8을 누를 때 디버거를 활성화합니다"
                    },
                    reactDevTools: {
                        name: "React 개발자 도구",
                        note: "로컬 환경에 설치된 React 개발자 도구를 디스코드에 삽입합니다"
                    },
                    inspectElement: {
                        name: "요소 선택 단축키",
                        note: "대부분의 브라우저에서 가장 흔한 요소 선택 단축키를 활성화합니다 (ctrl + shift + c)"
                    },
                    devToolsWarning: {
                        name: "DevTools 경고 멈추기",
                        note: '디스코드가 \\"Hold Up!\\" 메시지를 표시하는 것을 멈춥니다'
                    },
                    debugLogs: {
                        name: "디버그 로그",
                        note: "콘솔의 모든 출력을 BetterDiscord 폴더의 debug.log 파일에 저장합니다"
                    },
                    devTools: {
                        name: "개발자 도구",
                        note: "ctrl+shift+i를 사용하여 개발자 도구를 활성화합니다"
                    }
                },
                editor: {
                    name: "편집기 선호",
                    lineNumbers: {
                        name: "행 번호",
                        note: "편집기 측면에 행 번호 표시를 활성화합니"
                    },
                    fontSize: {
                        name: "폰트 크기",
                        note: "편집기에서 사용할 폰트 (pt) 크기"
                    },
                    minimap: {
                        name: "미니맵",
                        note: "편집기 측면에 코드 미니맵 표시를 활성화합니다"
                    },
                    hover: {
                        name: "참조 툴팁",
                        note: "규칙 및 선택기에 마우스 커서를 올릴 때 참조 툴팁을 활성화합니다"
                    },
                    quickSuggestions: {
                        name: "빠른 제안",
                        note: "입력할 때 자동 완성 제안 표시를 활성화합니"
                    },
                    renderWhitespace: {
                        name: "공백 표시",
                        note: "편집기가 공백을 표시해야 하는 경우",
                        options: {
                            all: "항상 사용",
                            none: "항상 무시",
                            selection: "선택"
                        }
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} by {{author}}",
            byline: "by {{author}}",
            reload: "리로드",
            addonSettings: "설정",
            website: "웹사이트",
            source: "소스",
            invite: "서버 지원",
            donate: "기부",
            patreon: "패트리온",
            name: "이름",
            author: "제작자",
            version: "버전",
            added: "추가된 날짜",
            modified: "수정된 날짜",
            editAddon: "수정",
            deleteAddon: "삭제",
            confirmDelete: "{{name}}(을)를 삭제하시겠습니까?",
            confirmationText: "{{name}}에 저장되지 않은 수정사항이 있습니다. 이 창을 닫으면 모든 수정이 취소됩니다.",
            enabled: "{{name}}이 활성화되었습니다",
            disabled: "{{name}}이 비활성화되었습니다",
            couldNotEnable: "{{name}}(을)를 활성화하지 못했습니다",
            couldNotDisable: "{{name}}(을)를 비활성화하지 못했습니다",
            couldNotStart: "{{name}}(을)를 시작하지 못했습니다",
            couldNotStop: "{{name}}(을)를 정지하지 못했습니다",
            settingsError: "{{name}} 의 설정을 열 수 없습니다",
            methodError: "{{method}}(을)를 실행할 수 없습니다",
            unknownAuthor: "알 수 없는 제작자",
            noDescription: "설명이 제공되지 않았습니다",
            metaError: "META 파싱에 실패했습니다",
            missingNameData: "META 이름 데이터 찾을 수 없음",
            metaNotFound: "META 찾을 수 없음",
            compileError: "컴파일에 실패했습니다",
            wasUnloaded: "{{name}}가 언로드되었습니다",
            isEnabled: "활성화됨",
            wasLoaded: "{{name}} v{{version}} 가 로드됨."
        },
        CustomCSS: {
            confirmationText: "사용자 지정 CSS에 저장되지 않은 수정사항이 있습니다. 이 창을 닫으면 모든 수정이 취소됩니다",
            update: "업데이트",
            save: "저장",
            openNative: "시스템 편집기에서 열기",
            openDetached: "분리된 창에서 열기",
            settings: "편집기 설정",
            editorTitle: "사용자  CSS 편집기"
        },
        Modals: {
            confirmAction: "확실합니까?",
            okay: "확인",
            done: "완료",
            cancel: "취소",
            nevermind: "무시",
            close: "닫기",
            name: "이름",
            message: "메시지",
            error: "오류",
            addonErrors: "애드온 오류",
            restartRequired: "재시작 요구됨",
            restartNow: "지금 재시작하기",
            restartLater: "나중에 재시작하기",
            additionalInfo: "추가 정보",
            restartPrompt: "적용을 위해 디스코드가 재시작되어야 합니다. 지금 재시작하시겠습니까?"
        },
        Sorting: {
            sortBy: "유형: ",
            order: "순서: ",
            ascending: "오름차순",
            descending: "내림차순"
        },
        WindowPrefs: {
            enabledInfo: `이 옵션은 제대로 작동하려면 투명한 테마가 필요합니다. Windows에서는 에어로 스내핑과 최대화가 고장날 수 있습니다.

적용을 위해 디스코드를 재시작해야 합니다. 지금 재시작하시겠습니까?`,
            disabledInfo: "적용을 위해 디스코드를 재시작해야 합니다. 지금 재시작하시겠습니까?"
        },
        Updater: {
            updateFailed: "업데이트가 실패했습니다!",
            updateFailedMessage: "BetterDiscord가 업데이트에 실패했습니다. 저희 웹사이트 (https://betterdiscord.app/) 에서 설치기를 받아 재설치하십시오.",
            updateSuccessful: "업데이트가 성공적으로 완료되었습니다!",
            updateAvailable: "BetterDiscord에 새로운 업데이트가 있습니다 (v{{version}})",
            addonUpdated: "{{name}} 이 버전 {{version}} 으로 업데이트 되었습니다!",
            checking: "업데이트를 확인하고 있습니다!",
            finishedChecking: "업데이트 확인을 마쳤습니다!",
            checkForUpdates: "업데이트 확인하기!",
            updateAll: "모두 업데이트 되었습니다!",
            noUpdatesAvailable: "사용 가능한 업데이트가 없습니다.",
            versionAvailable: "버전 {{version}} 을 사용할 수 있습니다!",
            updateButton: "업데이트!"
        }
    }
});
var Sl = Z((HC, rg) => {
    rg.exports = {
        Panels: {
            plugins: "Wtyczki",
            themes: "Motywy",
            customcss: "Niestandardowy CSS",
            updates: "Aktualizacje"
        },
        Collections: {
            settings: {
                name: "Ustawienia",
                general: {
                    name: "Ogólne",
                    voiceDisconnect: {
                        name: "Rozłączaj z czatem głosowym",
                        note: "Rozłącza z serwerem czatu głosowego przy wyłączeniu Discorda"
                    },
                    showToasts: {
                        name: "Wyświetlaj okienka powiadomień",
                        note: "Wyświetla małe powiadomienia dla ważnych zdarzeń"
                    },
                    mediaKeys: {
                        name: "Wyłącz przyciski multimedialne",
                        note: "Zapobiega korzystaniu z klawiszy multimedialnych przez Discorda podczas odtwarzania filmów."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Usuń limit minimalnego rozmiaru okna",
                        note: "Usuwa wymuszony przez Discorda limit minimalnego rozmiaru okna (940x500)"
                    },
                    name: "Ustawienia okna",
                    transparency: {
                        name: "Włącz przezroczystość",
                        note: "Dodaje efekt przezroczytstości do okna Discorda (wymaga ponownego uruchomienia)"
                    },
                    frame: {
                        name: "Ramka okna",
                        note: "Dodaje systemową ramkę do okna Discorda"
                    }
                },
                addons: {
                    name: "Menedżer dodatków",
                    addonErrors: {
                        name: "Wyświetlaj błędy dodatków",
                        note: "Wyświetla okno z błędami wtyczek i motywów"
                    },
                    editAction: {
                        name: "Edytor dodatków",
                        note: "Ustawia domyślny edytor kodu wtyczek i motywów",
                        options: {
                            detached: "Osobne okno",
                            system: "Edytor systemowy"
                        }
                    }
                },
                customcss: {
                    name: "Niestandardowy CSS",
                    customcss: {
                        name: "Niestandardowy CSS",
                        note: "Wyświetla zakładkę z edytorem niestandardowego kodu CSS"
                    },
                    liveUpdate: {
                        name: "Automatyczny podgląd",
                        note: "Aktualizuje CSS Discorda wraz z pisaniem kodu"
                    },
                    startDetached: {
                        name: "Osobne okno edytora",
                        note: "Kliknięcie na zakładkę „Niestandardowy CSS” uruchomi edytor w osobnym oknie"
                    },
                    nativeOpen: {
                        name: "Otwórz w edytorze systemowym",
                        note: "Kliknięcie na zakładkę „Niestandardowy CSS” uruchomi plik w edytorze systemowym"
                    },
                    openAction: {
                        name: "Domyślny edytor",
                        note: "Ustawia domyślny edytor niestandardowego kodu CSS",
                        options: {
                            settings: "Ustawienia",
                            detached: "Osobne okno",
                            system: "Edytor systemowy"
                        }
                    }
                },
                developer: {
                    name: "Ustawienia dla programistów",
                    debuggerHotkey: {
                        name: "Debugger",
                        note: "Uruchamia debugger po naciśnięciu F8 przy otworzonym panelu narzędzi dla programistów"
                    },
                    reactDevTools: {
                        name: "React Developer Tools",
                        note: "Wprowadza zainstalowane na Twoim komputerze rozszerzenie React Developer Tools do Discorda"
                    },
                    inspectElement: {
                        name: "Narzędzie „Zbadaj element”",
                        note: "Umożliwia korzystanie z narzędzia „Zbadaj element” po użyciu skrótu klawiszowego Ctrl+Shift+C"
                    },
                    devToolsWarning: {
                        name: "Nie wyświetlaj ostrzeżenia o szybkim wysyłaniu wiadomości",
                        note: "Zapobiega wyświetlaniu informacji o zbyt szybkim wysyłaniu wiadomości przez Discorda"
                    },
                    debugLogs: {
                        name: "Dziennik zdarzeń",
                        note: "Przekierowuje informacje z konsoli do pliku debug.log w folderze BetterDiscorda"
                    },
                    devTools: {
                        name: "Narzędzia dla programistów",
                        note: "Umożliwia wyświetlenie panelu narzędzi dla programistów po użyciu skrótu klawiszowego Ctrl+Shift+I"
                    }
                },
                editor: {
                    name: "Ustawienia edytora",
                    lineNumbers: {
                        name: "Numery wierszy",
                        note: "Wyświetla numery wierszy po lewej stronie edytora"
                    },
                    fontSize: {
                        name: "Rozmiar czcionki",
                        note: "Ustawia rozmiar czcionki (pt) w edytorze"
                    },
                    minimap: {
                        name: "Podgląd",
                        note: "Wyświetla mały podgląd kodu po prawej stronie edytora"
                    },
                    hover: {
                        name: "Etykiety",
                        note: "Wyświetla etykiety z dodatkowymi informacjami po najechaniu na element kodu"
                    },
                    quickSuggestions: {
                        name: "Podpowiadanie składni",
                        note: "Włącza automatyczne podpowiadanie składni podczas pisania kodu"
                    },
                    renderWhitespace: {
                        name: "Pokaż białe znaki",
                        note: "Określa, kiedy białe znaki będą wyświetlane w edytorze",
                        options: {
                            all: "Zawsze",
                            none: "Nigdy",
                            selection: "Przy zaznaczaniu"
                        }
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} (wersja {{version}}) autorstwa {{author}}",
            byline: "autorstwa {{author}}",
            reload: "Odśwież",
            addonSettings: "Ustawienia",
            website: "Strona internetowa",
            source: "Źródło",
            invite: "Wspomóż serwer",
            donate: "Przekaż darowiznę",
            patreon: "Patreon",
            name: "Nazwa",
            author: "Twórca",
            version: "Wersja",
            added: "Data dodania",
            modified: "Data modyfikacji",
            search: "Wyszukaj",
            editAddon: "Edytuj",
            deleteAddon: "Usuń",
            confirmDelete: "Czy na pewno chcesz usunąć {{name}}?",
            confirmationText: "Masz niezapisane zmiany w kodzie {{name}}. Zamknięcie tego okna spowoduje odrzucenie wszystkich zmian.",
            enabled: "Dodatek {{name}} został włączony.",
            disabled: "Dodatek {{name}} został wyłączony.",
            couldNotEnable: "Dodatek {{name}} nie może zostać włączony.",
            couldNotDisable: "Dodatek {{name}} nie może zostać wyłączony.",
            couldNotStart: "Dodatek {{name}} nie może zostać uruchomiony.",
            couldNotStop: "Dodatek {{name}} nie może zostać zatrzymany.",
            settingsError: "Nie udało się otworzyć ustawień dodatku {{name}}",
            methodError: "Metoda {{method}} nie może zostać wywołana.",
            unknownAuthor: "Nieznany twórca",
            noDescription: "Brak opisu.",
            alreadyExists: "Masz już dodatek z nazwą {{name}}",
            metaError: "Nie udało się przetworzyć metadanych.",
            missingNameData: "Brak nazwy dodatku w metadanych.",
            metaNotFound: "Nie odnaleziono metadanych.",
            compileError: "Błąd kompilacji. Sprawdź konsolę, aby dowiedzieć się więcej.",
            wasUnloaded: "Dodatek {{name}} został odładowany.",
            blankSlateHeader: "Wygląda na to, że nic tu nie ma!",
            blankSlateMessage: "Pobierz nowe dodatki z [tej strony]({{link}}) i przenieś je do odpowiedniego folderu.",
            isEnabled: "Stan",
            wasLoaded: "Dodatek {{name}} (wersja {{version}}) został załadowany."
        },
        CustomCSS: {
            confirmationText: "Masz niezapisane zmiany w swoim niestandardowym kodzie CSS. Zamknięcie tego okienka spowoduje odrzucenie wszystkich zmian.",
            update: "Zaktualizuj",
            save: "Zapisz",
            openNative: "Otwórz w edytorze systemowym",
            openDetached: "Otwórz w osobnym oknie",
            settings: "Ustawienia edytora",
            editorTitle: "Edytor niestandardowego kodu CSS"
        },
        Modals: {
            confirmAction: "Czy na pewno chcesz to zrobić?",
            okay: "Tak",
            done: "Potwierdź",
            cancel: "Anuluj",
            nevermind: "Anuluj",
            close: "Zamknij",
            name: "Nazwa",
            message: "Komunikat",
            error: "Błąd",
            addonErrors: "Błędy wtyczek",
            restartRequired: "Wymagane ponowne uruchomienie",
            restartNow: "Uruchom ponownie teraz",
            restartLater: "Uruchom ponownie później",
            additionalInfo: "Dodatkowe informacje",
            restartPrompt: "Uruchom ponownie Discorda, by zastosować zmiany. Czy chcesz to zrobić teraz?"
        },
        Sorting: {
            sortBy: "Sortuj wg",
            order: "Kolejność",
            ascending: "Rosnąca",
            descending: "Malejąca"
        },
        WindowPrefs: {
            enabledInfo: `Ta opcja wymaga przezroczystego motywu do poprawnego działania. Na Windowsie mogą pojawić się problemy ze zmianą wielkości okna.

Uruchom ponownie Discorda, by zastosować zmiany. Czy chcesz to zrobić teraz?`,
            disabledInfo: "Uruchom ponownie Discorda, by zmiany odniosły efekty. Czy chcesz to zrobić teraz?"
        },
        Updater: {
            updateFailed: "Aktualizacja nie powiodła się!",
            updateFailedMessage: "Nie udało się zaktualizować BetterDiscorda. Pobierz najnowszy instalator z naszej strony (https://betterdiscord.app/) i zainstaluj aplikację ponownie.",
            updateSuccessful: "Aktualizacja powiodła się!",
            updateAvailable: "Dostępna jest nowa aktualizacja BetterDiscorda (wersja {{version}})",
            addonUpdated: "Dodatek {{name}} został zaktualizowany do wersji {{version}}!",
            checking: "Sprawdzanie dostępności aktualizacji!",
            finishedChecking: "Zakończono sprawdzanie dostępności aktualizacji!",
            checkForUpdates: "Sprawdź dostępność aktualizacji",
            updateAll: "Zaktualizuj wszystko",
            noUpdatesAvailable: "Brak dostępnych aktualizacji.",
            versionAvailable: "Dostępna jest nowa wersja ({{version}})!",
            upToDateBlankslate: "Wszystkie dodatki są aktualne!",
            updateButton: "Zaktualizuj"
        }
    }
});
var Ll = Z((WC, ng) => {
    ng.exports = {
        Panels: {
            plugins: "Plugins",
            themes: "Temas",
            customcss: "CSS Personalizado"
        },
        Collections: {
            settings: {
                name: "Definições",
                general: {
                    name: "Geral",
                    voiceDisconnect: {
                        name: "Disconectar Voz",
                        note: "Disconectar do servidor de voz quando fechar o discord"
                    },
                    showToasts: {
                        name: "Mostrar notificações",
                        note: "Mostra uma pequena notificação para informações importantes"
                    },
                    mediaKeys: {
                        name: "Desativar as chaves Mídia",
                        note: "Previne o Discord de dar hijack as chaves Mídia depois de ver um video."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Remove o tamanho mínimo",
                        note: "Remove o tamanho mínimo obrigatório de janela do Discord de 940x500"
                    },
                    name: "Preferência de Janela",
                    transparency: {
                        name: "Ativar Transparência",
                        note: "Ativa a janela principal para ter transparência (requer reniciar)"
                    },
                    frame: {
                        name: "Moldura da janela",
                        note: "Adiciona a moldura de janela nativa do sistema operativo à janela principal"
                    }
                },
                addons: {
                    name: "Gestor de extensões",
                    addonErrors: {
                        name: "Mostra os erros das extensões",
                        note: "Mostra uma janela com os erros dos plugins/temas"
                    },
                    editAction: {
                        name: "Editar ação",
                        note: "Onde os plugins e os temas irão aparecer quando se edita",
                        options: {
                            detached: "Separar janela",
                            system: "Editor de sistema"
                        }
                    }
                },
                customcss: {
                    name: "CSS Personalizado",
                    customcss: {
                        name: "CSS Personalizado",
                        note: "Ativa a aba de CSS Personalizado"
                    },
                    liveUpdate: {
                        name: "Atualizações diretas",
                        note: "Atualiza o css a medida que se escreve"
                    },
                    startDetached: {
                        name: "Começar desanexado",
                        note: "Clicar na aba de CSS Personalizado abre o editor numa janela separada"
                    },
                    nativeOpen: {
                        name: "Abrir o editor Nativo",
                        note: "Clicar na aba de CSS Personalizado abre o css personalizado no seu editor nativo"
                    },
                    openAction: {
                        name: "Editor de localização",
                        note: "Onde o CSS personalizado abre por predifinição",
                        options: {
                            settings: "Menu de definições",
                            detached: "Separar Janela",
                            system: "Editor de sistema"
                        }
                    }
                },
                developer: {
                    name: "Definições de desenvolvedor",
                    debuggerHotkey: {
                        name: "Debugger Hotkey",
                        note: "Permite a ativação do debugger quando pressiona o F8"
                    },
                    reactDevTools: {
                        name: "Ferramentas de Desenvolvedor React",
                        note: "Injeta a instalação local da Ferramenta de Desenvolvedor React para o Discord"
                    },
                    inspectElement: {
                        name: "Tecla de Inspecionar Elemento",
                        note: "Ativa a tecla de inspecionar elemento (ctrl + shift + c) que é comum na maioria dos navegadores browser"
                    },
                    devToolsWarning: {
                        name: "Pára o aviso de DevTools",
                        note: 'Pára o Discord de mostrar a mensagem "Hold up!"'
                    },
                    debugLogs: {
                        name: "Debug Logs",
                        note: "Saída de tudo da consola para o ficheiro debug.log na pasta BetterDiscord"
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} feito por {{author}}",
            byline: "feito por {{author}}",
            reload: "Recarregar",
            addonSettings: "Definições",
            website: "Website",
            source: "Fonte",
            invite: "Servidor de Suporte",
            donate: "Doar",
            patreon: "Patreon",
            name: "Nome",
            author: "Autor",
            version: "Versão",
            added: "Data Adicionada",
            modified: "Data Modificada",
            editAddon: "Editar",
            deleteAddon: "Apagar",
            confirmDelete: "Tem a certeza que quer apagar {{name}}?",
            confirmationText: "Tem alterações não guardadas no {{name}}. Se fechar esta janela irá perder essas alterações.",
            enabled: "{{name}} foi ativo.",
            disabled: "{{name}} foi desativado.",
            couldNotEnable: "{{name}} não foi possível ser ativado.",
            couldNotDisable: "{{name}} não pode ser desativado.",
            couldNotStart: "{{name}} não pode ser iniciado.",
            couldNotStop: "{{name}} não pode ser parádo.",
            settingsError: "Não foi possível abrir as configurações para {{name}}",
            methodError: "{{method}} não pode ser retirado.",
            unknownAuthor: "Autor Desconhecido",
            noDescription: "Descrição não fornecida.",
            metaError: "META não pôde ser analisado.",
            missingNameData: "Em falta dados do nome de META.",
            metaNotFound: "META não encontrada.",
            compileError: "Não foi possível compilar.",
            wasUnloaded: "{{name}} foi descarregado."
        },
        CustomCSS: {
            confirmationText: "Tem alterações não guardadas no CSS Personalizado. Se fechar esta janela irá perder essas alterações.",
            update: "Atualizar",
            save: "Guardar",
            openNative: "Abrir o Editor de Sistema",
            openDetached: "Separar Janela",
            settings: "Definições de Editor",
            editorTitle: "Editor de CSS Personalizado"
        },
        Modals: {
            confirmAction: "Tem a certeza?",
            okay: "Okay",
            done: "Feito",
            cancel: "Cancelar",
            nevermind: "Deixa estár",
            close: "Fechar",
            name: "Nome",
            message: "Mensagem",
            error: "Erro",
            addonErrors: "Erro de extensão",
            restartRequired: "Necessário Reniciar",
            restartNow: "Reniciar Agora",
            restartLater: "Reniciar Mais Tarde",
            additionalInfo: "Informação Adicional",
            restartPrompt: "Para ter efeito, o Discord precisa ser reiniciado. Deseja reiniciar agora?"
        },
        Sorting: {
            sortBy: "Ordenar por",
            order: "Ordenar",
            ascending: "Ascendente",
            descending: "Descendente"
        },
        WindowPrefs: {
            enabledInfo: `Esta opção requer um tema transparente para funcionar corretamente. No Windows, isso pode interromper o ajuste e a maximização do aero.

Para ter efeito, o Discord precisa ser reiniciado. Quer reiniciar agora?`,
            disabledInfo: "Para ter efeito, o Discord precisa ser reiniciado. Quer reiniciar agora?"
        }
    }
});
var Il = Z((_C, ig) => {
    ig.exports = {
        Panels: {
            plugins: "Plugins",
            themes: "Temas",
            customcss: "CSS Personalizado"
        },
        Collections: {
            settings: {
                name: "Configurações",
                general: {
                    name: "Geral",
                    voiceDisconnect: {
                        name: "Desconexão de Voz",
                        note: "Desconecta do servidor de voz quando o discord é fechado"
                    },
                    showToasts: {
                        name: "Mostrar Toasts",
                        note: "Mostra uma pequena notificação para informações importantes"
                    },
                    mediaKeys: {
                        name: "Desabilitar Teclas de Media",
                        note: "Previne que o discord roube suas teclas de media depois de dar play em um vídeo"
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Remover Tamanho Mínimo",
                        note: "Remove o tamanho mínimo forçado pelo discord de 940x500"
                    },
                    name: "Preferências da Janela",
                    transparency: {
                        name: "Habilitar Transparência",
                        note: "Faz a janela principal ser transparente (requer reinicialização)"
                    },
                    frame: {
                        name: "Moldura da Janela",
                        note: "Adiciona a moldura nativa na janela principal"
                    }
                },
                addons: {
                    name: "Gerenciador de Addons",
                    addonErrors: {
                        name: "Mostrar erros dos Addons",
                        note: "Mostra um modal com os erros do plugin/tema"
                    },
                    editAction: {
                        name: "Ação de Edição",
                        note: "Onde plugins e temas aparecerão quando os editar",
                        options: {
                            detached: "Janela Separada",
                            system: "Editor do Sistema"
                        }
                    }
                },
                customcss: {
                    name: "CSS Personalizado",
                    customcss: {
                        name: "CSS Personalizado",
                        note: "Habilita a aba de css personalizado"
                    },
                    liveUpdate: {
                        name: "Atualização em Tempo Real",
                        note: "Atualiza o css à medida que você digita"
                    },
                    startDetached: {
                        name: "Iniciar Separado",
                        note: "Clicar na aba do CSS Personalizado irá abrir o editor numa janela separada"
                    },
                    nativeOpen: {
                        name: "Abrir no Editor Nativo",
                        note: "Clicar na aba do CSS Personalizado irá o abrir usando seu editor nativo"
                    },
                    openAction: {
                        name: "Localização do Editor",
                        note: "Onde o CSS Personalizado deve aparecer por padrão",
                        options: {
                            settings: "Menu de Configurações",
                            detached: "Janela Separada",
                            system: "Editor do Sistema"
                        }
                    }
                },
                developer: {
                    name: "Configurações de Desenvolvedor",
                    debuggerHotkey: {
                        name: "Atalho para o Depurador",
                        note: "Permite ativar o depurador quando pressionar F8"
                    },
                    reactDevTools: {
                        name: "React Developer Tools",
                        note: "Injeta a sua instalação local do React Developer Tools no discord"
                    },
                    inspectElement: {
                        name: "Atalho para Inspecionar Elemento",
                        note: "Habilita o atalho para inspecionar elemento (ctrl + shift + c) que é comum na maioria dos navegadores"
                    },
                    devToolsWarning: {
                        name: "Remove os Avisos de DevTools",
                        note: 'Faz o discord parar de imprimir as mensagens de "Calma Aí!"'
                    },
                    debugLogs: {
                        name: "Registro de Depuração",
                        note: "Salva todas os logs do console no arquivo debug.log dentro da pasta do BetterDiscord"
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} by {{author}}",
            byline: "por {{author}}",
            reload: "Recarregar",
            addonSettings: "Configurações",
            website: "Site",
            source: "Source",
            invite: "Servidor de Suporte",
            donate: "Doar",
            patreon: "Patreon",
            name: "Nome",
            author: "Autor",
            version: "Versão",
            added: "Date de Adição",
            modified: "Data de Modificação",
            editAddon: "Editar",
            deleteAddon: "Remover",
            confirmDelete: "Você tem certeza que quer remover o {{name}}?",
            confirmationText: "Você tem mudanças ainda não salvas em {{name}}. Fechar essa janela fará você perder todas elas.",
            enabled: "{{name}} foi ativado.",
            disabled: "{{name}} foi desativado.",
            couldNotEnable: "{{name}} não pôde ser ativado.",
            couldNotDisable: "{{name}} não pôde ser desativado.",
            couldNotStart: "{{name}} não pôde ser iniciado.",
            couldNotStop: "{{name}} não pôde ser parado.",
            settingsError: "Não foi possível abrir as configurações do(a) {{name}}",
            methodError: "{{method}} não pode ser disparado.",
            unknownAuthor: "Autor Desconhecido",
            noDescription: "Descrição não fornecida.",
            metaError: "META não pode ser reconhecida.",
            missingNameData: "META sem dados de nome.",
            metaNotFound: "META não encontrado.",
            compileError: "Não foi possível compilar.",
            wasUnloaded: "{{name}} foi descarregado."
        },
        CustomCSS: {
            confirmationText: "Você tem mudanças ainda não salvas no seu CSS Personalizado. Fechar essa janela fará você perder todas elas.",
            update: "Atualizar",
            save: "Salvar",
            openNative: "Abrir no Editor do Sistema",
            openDetached: "Abrir numa Janela Separada",
            settings: "Configurações do Editor",
            editorTitle: "Editor do CSS Personalizado"
        },
        Modals: {
            confirmAction: "Você Tem Certeza?",
            okay: "Okay",
            done: "Feito",
            cancel: "Cancelar",
            nevermind: "Deixe pra lá",
            close: "Fechar",
            name: "Nome",
            message: "Mensagem",
            error: "Erro",
            addonErrors: "Erros dos Addons",
            restartRequired: "Reinicialização Necessária",
            restartNow: "Reiniciar Agora",
            restartLater: "Reiniciar Mais Tarde",
            additionalInfo: "Informações Adicionais",
            restartPrompt: "Para as mudanças terem efeito o discord precisa ser reinciado. Você deseja reiniciar agora?"
        },
        Sorting: {
            sortBy: "Ordenar Por",
            order: "Ordem",
            ascending: "Ascendente",
            descending: "Descendente"
        },
        WindowPrefs: {
            enabledInfo: `Essa opção necessita de um tema transparente para funcionar corretamente. No Windows isso pode quebrar o aero snapping e a maximização.

O discord precisa ser reiniciado para as mudanças terem efeito. Você deseja reiniciar agora?`,
            disabledInfo: "O discord precisa ser reiniciado para as mudanças terem efeito. Você deseja reiniciar agora?"
        }
    }
});
var Al = Z((VC, sg) => {
    sg.exports = {
        Panels: {
            plugins: "Плагины",
            themes: "Темы",
            customcss: "Быстрый CSS",
            updates: "Обновления"
        },
        Collections: {
            settings: {
                name: "Настройки",
                general: {
                    name: "Основные",
                    voiceDisconnect: {
                        name: "Отключение голосового чата",
                        note: "Отключает от голосового чата, когда Discord закрыт"
                    },
                    showToasts: {
                        name: "Показывать уведомления",
                        note: "Показывает небольшие уведомления с важной информацией"
                    },
                    mediaKeys: {
                        name: "Отключить медиа-кнопки",
                        note: "Предотвращает перехват мультимедийных кнопок Discord'ом после воспроизведения видео."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Удалить минимальные размеры",
                        note: "Удаляет минимальный размер окна Discord'а 940x500"
                    },
                    name: "Настройки окна",
                    transparency: {
                        name: "Включить прозрачность",
                        note: "Делает основное окно прозрачным (нужна перезагрузка)"
                    },
                    frame: {
                        name: "Шапка окна",
                        note: "Добавляет встроенную шапку окна системы к основному окну"
                    }
                },
                addons: {
                    name: "Менеджер дополнений",
                    addonErrors: {
                        name: "Показывать ошибки расширений",
                        note: "Скрывает модальные окна с ошибками плагина/темы"
                    },
                    editAction: {
                        name: "Действие редактирования",
                        note: "Появляются при редактировании, где плагины или темы",
                        options: {
                            detached: "Отдельное окно",
                            system: "Системный редактор"
                        }
                    }
                },
                customcss: {
                    name: "Быстрый CSS",
                    customcss: {
                        name: "Быстрый CSS",
                        note: "Включить кнопку быстрого CSS"
                    },
                    liveUpdate: {
                        name: "Обновление в прямом эфире",
                        note: "Обновляет ваш CSS, когда вы пишите"
                    },
                    startDetached: {
                        name: "Открыть отдельно",
                        note: "При нажатии на вкладку Быстрый CSS редактор открывается в отдельном окне"
                    },
                    nativeOpen: {
                        name: "Открыть во встроенном редакторе",
                        note: "Нажатие по вкладке Быстрый CSS открывает ваш быстрый CSS в вашем встроенном редакторе"
                    },
                    openAction: {
                        name: "Положение редактора",
                        note: "Где ваш Быстрый CSS должен быть открыт по умолчанию",
                        options: {
                            settings: "Настройки меню",
                            detached: "Отдельное окно",
                            system: "Системный редактор"
                        }
                    }
                },
                developer: {
                    name: "Настройки разработчика",
                    debuggerHotkey: {
                        name: "Горячая кнопка отладчика",
                        note: "Активирует отладку при нажатии F8 при открытым меню разработчика"
                    },
                    reactDevTools: {
                        name: "Инструменты React разработчика",
                        note: "Внедряет вашу локальную установку React Developer Tools в Discord"
                    },
                    inspectElement: {
                        name: "Горячая кнопка инспектора элементов",
                        note: "Включает поведение комбинации клавиш инспектора элементов (ctrl + shift + c), как в большинстве браузеров"
                    },
                    devToolsWarning: {
                        name: "Убрать предупреждение в консоли",
                        note: 'Останавливает отправку сообщения "Hold Up!"'
                    },
                    debugLogs: {
                        name: "Логировать ошибки",
                        note: "Записывает весь вывод из консоли в файл debug.log в папке BetterDiscord"
                    },
                    devTools: {
                        name: "Меню разработчика",
                        note: "Включает возможность открыть меню разработчика при нажатии ctrl+shift+i"
                    }
                },
                editor: {
                    name: "Редактор настроек",
                    lineNumbers: {
                        name: "Номер строк",
                        note: "Включить показатель строк в стороне редактора"
                    },
                    fontSize: {
                        name: "Размер шрифта",
                        note: "Размер шрифта (в пикселях) в редакторе"
                    },
                    minimap: {
                        name: "Мини карта",
                        note: "Включает показ кода в мини карте в стороне редактора"
                    },
                    hover: {
                        name: "Справочные подсказки",
                        note: "Включает показ справочных подсказок при наведении мыши над правилами и переключателями"
                    },
                    quickSuggestions: {
                        name: "Предложения",
                        note: "Включает видимость авто-заполнения предложений при печати"
                    },
                    renderWhitespace: {
                        name: "Показывать пробелы",
                        note: "Когда пробел должен быть показан редактором",
                        options: {
                            all: "Всегда",
                            none: "Никогда",
                            selection: "Выбор"
                        }
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} от {{author}}",
            byline: "от {{author}}",
            reload: "Перезагрузить",
            addonSettings: "Настройки",
            website: "Сайт",
            source: "Источник",
            invite: "Сервер поддержки",
            donate: "Донат",
            patreon: "Patreon",
            name: "Имя",
            author: "Автор",
            version: "Версия",
            added: "Дата добавления",
            modified: "Дата изменения",
            editAddon: "Редактировать",
            deleteAddon: "Удалить",
            confirmDelete: "Вы уверены, что хотите удалить {{name}}?",
            confirmationText: "У вас есть несохраненные изменения в {{name}}. При закрытии этого окна все изменения будут потеряны.",
            enabled: "{{name}} включён.",
            disabled: "{{name}} выключен.",
            couldNotEnable: "{{name}} не может быть включён.",
            couldNotDisable: "{{name}} не может быть отключён.",
            couldNotStart: "{{name}} не может быть запущен.",
            couldNotStop: "{{name}} не может быть остановлен.",
            settingsError: "Не удалось открыть настройки для {{name}}",
            methodError: "{{method}} не может быть уволен.",
            unknownAuthor: "Неизвестный автор",
            noDescription: "Нету описания.",
            metaError: "Не удалось проанализировать метаданные.",
            missingNameData: "В метаданных отсутствуют данные об имени.",
            metaNotFound: "Метаданные не найдены.",
            compileError: "Не удалось скомпилировать. Посмотрите в консоле для дополнительной информации.",
            wasUnloaded: "{{name}} был выгружен.",
            isEnabled: "Включено",
            wasLoaded: "{{name}} v{{version}} был загружен."
        },
        CustomCSS: {
            confirmationText: "У вас есть не сохраненные изменения в быстром CSS.  При закрытии этого окна все изменения будут потеряны.",
            update: "Обновить",
            save: "Сохранить",
            openNative: "Открыть в системном редакторе",
            openDetached: "Отдельное окно",
            settings: "Настройки редактора",
            editorTitle: "Редактор быстрого CSS"
        },
        Modals: {
            confirmAction: "Ты уверен?",
            okay: "Ок",
            done: "Готово",
            cancel: "Отмена",
            nevermind: "Забей",
            close: "Закрыть",
            name: "Имя",
            message: "Сообщение",
            error: "Ошибка",
            addonErrors: "Ошибки расширений",
            restartRequired: "Требуется перезагрузка",
            restartNow: "Перезагрузить сейчас",
            restartLater: "Перезагрузить позже",
            additionalInfo: "Дополнительная информация",
            restartPrompt: "Чтобы изменения вступили в силу, необходимо перезапустить Discord. Перезапустить сейчас?"
        },
        Sorting: {
            sortBy: "Сортировать по",
            order: "Порядок",
            ascending: "По возрастанию",
            descending: "По убыванию"
        },
        WindowPrefs: {
            enabledInfo: `Для правильной работы этой опции требуется прозрачная тема.  В Windows это может нарушить вашу aero snapping и максимизацию.



Чтобы изменения вступили в силу, необходимо перезапустить Discord.  Вы хотите перезапустить сейчас?`,
            disabledInfo: "Чтобы изменения вступили в силу, необходимо перезапустить Discord.  Вы хотите перезапустить сейчас?"
        },
        Updater: {
            updateFailed: "Ошибка обновления",
            updateFailedMessage: "Не удалось обновить BetterDiscord. Пожалуйста скачайте последнюю версию загрузчика с нашего сайта (https://betterdiscord.app/) и переустановите программу.",
            updateSuccessful: "Обновление успешно!",
            updateAvailable: "BetterDiscord имеет обновление (v{{version}})",
            addonUpdated: "{{name}} был обновлен до версии {{version}}",
            checking: "Проверить обновления!",
            finishedChecking: "Проверка обновлений завершена!",
            checkForUpdates: "Проверить обновления!",
            updateAll: "Обновить всё!",
            noUpdatesAvailable: "Нету доступных обновлений.",
            versionAvailable: "Версия {{version}} доступна!",
            updateButton: "Обновить!"
        }
    }
});
var Tl = Z((GC, dg) => {
    dg.exports = {
        Panels: {
            plugins: "Pluginy",
            themes: "Témy",
            customcss: "Custom CSS"
        },
        Collections: {
            settings: {
                name: "Nastavenia",
                general: {
                    name: "Základné",
                    voiceDisconnect: {
                        name: "Odpojenie hovoru",
                        note: "Odpojiť z hovoru pri vypnutí Discordu"
                    },
                    showToasts: {
                        name: "Zobraziť toasty",
                        note: "Zobraziť notifikáciu pre dôležité info"
                    },
                    mediaKeys: {
                        name: "Zakázať Média tlačidlá",
                        note: "Zabráni Discordu prevziať kontrolu nad média tlačidlami po prehratí videa."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Zrušiť minimálnu velkosť",
                        note: "Zruší minimálnu veľkosť Discord okna 940x500"
                    },
                    name: "Vlastnosti Okna",
                    transparency: {
                        name: "Povoliť priehľadnosť",
                        note: "Povolí, aby bolo hlavné okno priehľadné (potrebný reštart)"
                    },
                    frame: {
                        name: "Rám okna",
                        note: "Pridá klasický OS rám pre hlavné okno"
                    }
                },
                addons: {
                    name: "Manažér doplnkov",
                    addonErrors: {
                        name: "Zobraziť chyby doplnkov",
                        note: "Zobrazí panel s chybou pluginu alebo témy"
                    },
                    editAction: {
                        name: "Úprava akcie",
                        note: "Kde sa pluginy a témy zobrazia pri editovaní",
                        options: {
                            detached: "Oddelené okno",
                            system: "Systémový editor"
                        }
                    }
                },
                customcss: {
                    name: "Custom CSS",
                    customcss: {
                        name: "Custom CSS",
                        note: 'Aktivuje kartu "Custom CSS"'
                    },
                    liveUpdate: {
                        name: "Živý update",
                        note: "Aktualizuje css pri zmene"
                    },
                    startDetached: {
                        name: "Spustiť oddelené",
                        note: "Kliknutie na kartu Custom CSS ju otvori v oddelenom okne"
                    },
                    nativeOpen: {
                        name: "Otvoriť v natívnom editore",
                        note: "Kliknutie na kartu Custom CSS ju otvori v natívnom editore"
                    },
                    openAction: {
                        name: "Cesta editora",
                        note: "Predvolený spôsob otvorenia Custom CSS",
                        options: {
                            settings: "Menu nastavení",
                            detached: "Oddelené okno",
                            system: "Systémový editor"
                        }
                    }
                },
                developer: {
                    name: "Vývojarske nastavenia",
                    debuggerHotkey: {
                        name: "Klávesová skratka Debuggera",
                        note: "Povolí spustenie debuggera pri stlačení F8"
                    },
                    reactDevTools: {
                        name: "React Developer Tools",
                        note: "Pridá inštaláciu React Developer Tools do Discordu"
                    },
                    inspectElement: {
                        name: "Klávesová skratka Inspect Element",
                        note: "Povolí klávesovú skratku Inspect Element (ctrl + shift + c) ako pre bežné prehliadače"
                    },
                    devToolsWarning: {
                        name: "Vypnúť DevTools Upozornenia",
                        note: 'Vypne "Hold Up!" upozornenie od Discordu v konzole'
                    },
                    debugLogs: {
                        name: "Výpis ladenia",
                        note: "Zapíše všetko z konzole do súboru debug.log v BetterDiscord zložke"
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} od {{author}}",
            byline: "od {{author}}",
            reload: "Znova načítať",
            addonSettings: "Nastavenia",
            website: "Stránka",
            source: "Zdroj",
            invite: "Server podpory",
            donate: "Prispieť",
            patreon: "Patreon",
            name: "Meno",
            author: "Autor",
            version: "Verzia",
            added: "Dátum pridania",
            modified: "Dátum zmeny",
            editAddon: "Upraviť",
            deleteAddon: "Zmazať",
            confirmDelete: "Ste si istý, že chcete zmazať {{name}}?",
            confirmationText: "Máte neuložené zmeny pre {{name}}. Zatvorením tohto okna stratíte všetky zmeny.",
            enabled: "{{name}} bol aktivovaný.",
            disabled: "{{name}} bol deaktivovaný.",
            couldNotEnable: "{{name}} nebolo možné aktivovať.",
            couldNotDisable: "{{name}} nebolo možné deaktivovať.",
            couldNotStart: "{{name}} nebolo možné spustiť.",
            couldNotStop: "{{name}} nebolo možné zastaviť.",
            settingsError: "Nie je možné otvoriť nastavenia pre {{name}}",
            methodError: "{{method}} nemohla byť vykonaná.",
            unknownAuthor: "Neznámy Autor",
            noDescription: "Bez popisu.",
            metaError: "META sa nepodarila načítať.",
            missingNameData: "META chýbajúce dáta názvu.",
            metaNotFound: "META nebola nájedná.",
            compileError: "Nepodarilo sa zostaviť.",
            wasUnloaded: "{{name}} bol odpojený."
        },
        CustomCSS: {
            confirmationText: "Máte neuložené zmeny pre Custom CSS. Zatvorením tohto okna stratíte všetky zmeny.",
            update: "Aktualizovať",
            save: "Uložiť",
            openNative: "Otvoriť v Systémovom Editore",
            openDetached: "Oddeliť Okno",
            settings: "Nastavenia Editora",
            editorTitle: "Custom CSS Editor"
        },
        Modals: {
            confirmAction: "Ste si istý?",
            okay: "Ok",
            done: "Dokončiť",
            cancel: "Zrušiť",
            nevermind: "Radšej nie",
            close: "Zavrieť",
            name: "Meno",
            message: "Správa",
            error: "Chyba",
            addonErrors: "Chyby Doplnkov",
            restartRequired: "Potrebný Reštart",
            restartNow: "Reštartovať Teraz",
            restartLater: "Reštartovať Neskôr",
            additionalInfo: "Ďalšie Info",
            restartPrompt: "Pre aplikáciu zmien je potrebné reštartovať Discord. Chcete reštartovať teraz?"
        },
        Sorting: {
            sortBy: "Triediť podľa",
            order: "Poradie",
            ascending: "Vzostupne",
            descending: "Zostupne"
        },
        WindowPrefs: {
            enabledInfo: `Táto možnosť si vyžaduje priehľadnú tému, aby správne fungovala. V systéme Windows to môže spôsobiť prerušenie a maximalizáciu vášho aero.

Na to, aby sa prejavila účinnosť, je potrebné reštartovať Discord. Chcete reštartovať teraz?`,
            disabledInfo: "Pre aplikáciu zmien je potrebné reštartovať Discord. Chcete reštartovať teraz?"
        }
    }
});
var El = Z((KC, lg) => {
    lg.exports = {
        Panels: {
            plugins: "Plugins",
            themes: "Temas",
            customcss: "CSS Personalizado"
        },
        Collections: {
            settings: {
                name: "Ajustes",
                general: {
                    name: "General",
                    voiceDisconnect: {
                        name: "Desconexión de Voz",
                        note: "Desconectarse del servidor de voz al cerrar Discord"
                    },
                    showToasts: {
                        name: "Mostrar Notificaciones",
                        note: "Muestra una pequeña notificación de información importante"
                    },
                    mediaKeys: {
                        name: "Desactivar las Teclas Multimedia",
                        note: "Evita que Discord se apropie de tus teclas multimedia después de reproducir un vídeo"
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Eliminar Tamaño Mínimo",
                        note: "Elimina el tamaño mínimo de Discord de 940x500"
                    },
                    name: "Preferencias de la Ventana",
                    transparency: {
                        name: "Activar Transparencia",
                        note: "Hace que la ventana principal pueda ser transparente (requiere reinicio)"
                    },
                    frame: {
                        name: "Marco de la Ventana",
                        note: "Añade el marco de ventana nativo de tu sistema operativo a la ventana principal"
                    }
                },
                addons: {
                    name: "Gestor de Complementos",
                    addonErrors: {
                        name: "Mostrar Errores de Complementos",
                        note: "Muestra una ventana con los errores de plugin/temas"
                    },
                    editAction: {
                        name: "Acción al Editar",
                        note: "Donde aparecerán los plugins y temas al editarlos",
                        options: {
                            detached: "Ventana Independiente",
                            system: "Editor del Sistema"
                        }
                    }
                },
                customcss: {
                    name: "CSS Personalizado",
                    customcss: {
                        name: "CSS Personalizado",
                        note: "Activa la pestaña de CSS Personalizado"
                    },
                    liveUpdate: {
                        name: "Actualización en Vivo",
                        note: "Actualiza el CSS a medida que se escribe"
                    },
                    startDetached: {
                        name: "Comenzar en Ventana Independiente",
                        note: "Al hacer clic en la pestaña de CSS Personalizado se abre el editor en una ventana independiente"
                    },
                    nativeOpen: {
                        name: "Abrir en Editor Nativo",
                        note: "Al hacer clic en la pestaña de CSS Personalizado se abre el editor en tu editor nativo"
                    },
                    openAction: {
                        name: "Ubicación del Editor",
                        note: "Donde deberá el CSS Personalizado abrirse por defecto",
                        options: {
                            settings: "Menú de Ajustes",
                            detached: "Ventana Independiente",
                            system: "Editor del Sistema"
                        }
                    }
                },
                developer: {
                    name: "Ajustes de Desarrollador",
                    debuggerHotkey: {
                        name: "Tecla de Acceso Rápido al Depurador",
                        note: "Permite activar el depurador al presionar la tecla F8"
                    },
                    reactDevTools: {
                        name: "React Developer Tools",
                        note: "Inyecta tu instalación local de React Developer Tools en Discord"
                    },
                    inspectElement: {
                        name: "Tecla de Acceso Rápido al Inspector de Elementos",
                        note: "Activa la tecla de acceso rápido al inspector de elementos (ctrl + shift + c) que es común en la mayoria de navegadores"
                    },
                    devToolsWarning: {
                        name: "Quitar el Aviso del Inspector de Elementos",
                        note: 'Previene que Discord muestre su mensaje "¡Espera!"'
                    },
                    debugLogs: {
                        name: "Registros de Depuración",
                        note: "Envía todo lo que aparece en la consola a un archivo llamado debug.log en la carpeta de BetterDiscord"
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} por {{author}}",
            byline: "por {{author}}",
            reload: "Recargar",
            addonSettings: "Ajustes",
            website: "Sitio web",
            source: "Fuente",
            invite: "Servidor de Soporte",
            donate: "Donar",
            patreon: "Patreon",
            name: "Nombre",
            author: "Autor",
            version: "Versión",
            added: "Fecha de Adición",
            modified: "Fecha de Modificación",
            editAddon: "Editar",
            deleteAddon: "Eliminar",
            confirmDelete: "¿Estás seguro de que quieres borrar {{name}}?",
            confirmationText: "Tiene cambios no guardados en {{name}}. Al cerrar esta ventana se perderán todos los cambios.",
            enabled: "{{name}} ha sido activado.",
            disabled: "{{name}} ha sido desactivado.",
            couldNotEnable: "{{name}} no pudo ser activado.",
            couldNotDisable: "{{name}} no pudo ser desactivado.",
            couldNotStart: "{{name}} no se pudo iniciar.",
            couldNotStop: "{{name}} no se pudo detener.",
            settingsError: "No se pudieron abrir los ajustes de {{name}}",
            methodError: "{{method}} no pudo ser lanzado.",
            unknownAuthor: "Autor Desconocido",
            noDescription: "Descripción no proporcionada.",
            metaError: "El META no pudo ser analizado.",
            missingNameData: "El META no contiene datos del nombre.",
            metaNotFound: "El META no ha sido encontrado.",
            compileError: "No se ha podido compilar.",
            wasUnloaded: "{{name}} ha sido descargado."
        },
        CustomCSS: {
            confirmationText: "Tienes cambios sin guardar en tu CSS Personalizado. Al cerrar esta ventana se perderán todos los cambios.",
            update: "Actualizar",
            save: "Guardar",
            openNative: "Abrir en el Editor del Sistema",
            openDetached: "Mostrar en Ventana Independiente",
            settings: "Ajustes del Editor",
            editorTitle: "Editor de CSS Personalizado"
        },
        Modals: {
            confirmAction: "¿Estás seguro?",
            okay: "Vale",
            done: "Hecho",
            cancel: "Cancelar",
            nevermind: "No importa",
            close: "Cerrar",
            name: "Nombre",
            message: "Mensaje",
            error: "Error",
            addonErrors: "Errores de Complementos",
            restartRequired: "Reinicio Requerido",
            restartNow: "Reiniciar Ahora",
            restartLater: "Reiniciar más Tarde",
            additionalInfo: "Información Adicional",
            restartPrompt: "Para que surta efecto, es necesario reiniciar Discord. ¿Quieres reiniciar ahora?"
        },
        Sorting: {
            sortBy: "Ordenar por",
            order: "Orden",
            ascending: "Ascendente",
            descending: "Descendente"
        },
        WindowPrefs: {
            enabledInfo: `Esta opción requiere un tema transparente para que funcione correctamente. En Windows esto podría hacer que el ajuste automático de la ventana (Aero Snap) y la maximización dejen de funcionar.

Para que surta efecto, es necesario reiniciar Discord. ¿Quieres reiniciar ahora?`,
            disabledInfo: "Para que surta efecto, es necesario reiniciar Discord. ¿Quieres reiniciar ahora?"
        }
    }
});
var Ml = Z(($C, ug) => {
    ug.exports = {
        Panels: {
            plugins: "Plugins",
            themes: "Temas",
            customcss: "CSS Personalizado"
        },
        Collections: {
            settings: {
                name: "Ajustes",
                general: {
                    name: "General",
                    voiceDisconnect: {
                        name: "Desconexión de Voz",
                        note: "Desconectarse del servidor de voz al cerrar Discord"
                    },
                    showToasts: {
                        name: "Mostrar Notificaciones",
                        note: "Muestra una pequeña notificación de información importante"
                    },
                    mediaKeys: {
                        name: "Desactivar las Teclas Multimedia",
                        note: "Evita que Discord se apropie de tus teclas multimedia después de reproducir un vídeo"
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Eliminar Tamaño Mínimo",
                        note: "Elimina el tamaño mínimo de Discord de 940x500"
                    },
                    name: "Preferencias de la Ventana",
                    transparency: {
                        name: "Activar Transparencia",
                        note: "Hace que la ventana principal pueda ser transparente (requiere reinicio)"
                    },
                    frame: {
                        name: "Marco de la Ventana",
                        note: "Añade el marco de ventana nativo de tu sistema operativo a la ventana principal"
                    }
                },
                addons: {
                    name: "Gestor de Complementos",
                    addonErrors: {
                        name: "Mostrar Errores de Complementos",
                        note: "Muestra una ventana con los errores de plugin/temas"
                    },
                    editAction: {
                        name: "Acción al Editar",
                        note: "Donde aparecerán los plugins y temas al editarlos",
                        options: {
                            detached: "Ventana Independiente",
                            system: "Editor del Sistema"
                        }
                    }
                },
                customcss: {
                    name: "CSS Personalizado",
                    customcss: {
                        name: "CSS Personalizado",
                        note: "Activa la pestaña de CSS Personalizado"
                    },
                    liveUpdate: {
                        name: "Actualización en Vivo",
                        note: "Actualiza el CSS a medida que se escribe"
                    },
                    startDetached: {
                        name: "Comenzar en Ventana Independiente",
                        note: "Al hacer clic en la pestaña de CSS Personalizado se abre el editor en una ventana independiente"
                    },
                    nativeOpen: {
                        name: "Abrir en Editor Nativo",
                        note: "Al hacer clic en la pestaña de CSS Personalizado se abre el editor en tu editor nativo"
                    },
                    openAction: {
                        name: "Ubicación del Editor",
                        note: "Donde deberá el CSS Personalizado abrirse por defecto",
                        options: {
                            settings: "Menú de Ajustes",
                            detached: "Ventana Independiente",
                            system: "Editor del Sistema"
                        }
                    }
                },
                developer: {
                    name: "Ajustes de Desarrollador",
                    debuggerHotkey: {
                        name: "Tecla de Acceso Rápido al Depurador",
                        note: "Permite activar el depurador al presionar la tecla F8"
                    },
                    reactDevTools: {
                        name: "React Developer Tools",
                        note: "Inyecta tu instalación local de React Developer Tools en Discord"
                    },
                    inspectElement: {
                        name: "Tecla de Acceso Rápido al Inspector de Elementos",
                        note: "Activa la tecla de acceso rápido al inspector de elementos (ctrl + shift + c) que es común en la mayoria de navegadores"
                    },
                    devToolsWarning: {
                        name: "Quitar el Aviso del Inspector de Elementos",
                        note: 'Previene que Discord muestre su mensaje "¡Espera!"'
                    },
                    debugLogs: {
                        name: "Registros de Depuración",
                        note: "Envía todo lo que aparece en la consola a un archivo llamado debug.log en la carpeta de BetterDiscord"
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} por {{author}}",
            byline: "por {{author}}",
            reload: "Recargar",
            addonSettings: "Ajustes",
            website: "Sitio web",
            source: "Fuente",
            invite: "Servidor de Soporte",
            donate: "Donar",
            patreon: "Patreon",
            name: "Nombre",
            author: "Autor",
            version: "Versión",
            added: "Fecha de Adición",
            modified: "Fecha de Modificación",
            editAddon: "Editar",
            deleteAddon: "Eliminar",
            confirmDelete: "¿Estás seguro de que quieres borrar {{name}}?",
            confirmationText: "Tiene cambios no guardados en {{name}}. Al cerrar esta ventana se perderán todos los cambios.",
            enabled: "{{name}} ha sido activado.",
            disabled: "{{name}} ha sido desactivado.",
            couldNotEnable: "{{name}} no pudo ser activado.",
            couldNotDisable: "{{name}} no pudo ser desactivado.",
            couldNotStart: "{{name}} no se pudo iniciar.",
            couldNotStop: "{{name}} no se pudo detener.",
            settingsError: "No se pudieron abrir los ajustes de {{name}}",
            methodError: "{{method}} no pudo ser lanzado.",
            unknownAuthor: "Autor Desconocido",
            noDescription: "Descripción no proporcionada.",
            metaError: "El META no pudo ser analizado.",
            missingNameData: "El META no contiene datos del nombre.",
            metaNotFound: "El META no ha sido encontrado.",
            compileError: "No se ha podido compilar.",
            wasUnloaded: "{{name}} ha sido descargado."
        },
        CustomCSS: {
            confirmationText: "Tienes cambios sin guardar en tu CSS Personalizado. Al cerrar esta ventana se perderán todos los cambios.",
            update: "Actualizar",
            save: "Guardar",
            openNative: "Abrir en el Editor del Sistema",
            openDetached: "Mostrar en Ventana Independiente",
            settings: "Ajustes del Editor",
            editorTitle: "Editor de CSS Personalizado"
        },
        Modals: {
            confirmAction: "¿Estás seguro?",
            okay: "Vale",
            done: "Hecho",
            cancel: "Cancelar",
            nevermind: "No importa",
            close: "Cerrar",
            name: "Nombre",
            message: "Mensaje",
            error: "Error",
            addonErrors: "Errores de Complementos",
            restartRequired: "Reinicio Requerido",
            restartNow: "Reiniciar Ahora",
            restartLater: "Reiniciar más Tarde",
            additionalInfo: "Información Adicional",
            restartPrompt: "Para que surta efecto, es necesario reiniciar Discord. ¿Quieres reiniciar ahora?"
        },
        Sorting: {
            sortBy: "Ordenar por",
            order: "Orden",
            ascending: "Ascendente",
            descending: "Descendente"
        },
        WindowPrefs: {
            enabledInfo: `Esta opción requiere un tema transparente para que funcione correctamente. En Windows esto podría hacer que el ajuste automático de la ventana (Aero Snap) y la maximización dejen de funcionar.

Para que surta efecto, es necesario reiniciar Discord. ¿Quieres reiniciar ahora?`,
            disabledInfo: "Para que surta efecto, es necesario reiniciar Discord. ¿Quieres reiniciar ahora?"
        }
    }
});
var Dl = Z((ZC, cg) => {
    cg.exports = {
        Panels: {
            plugins: "Tillägg",
            themes: "Teman",
            customcss: "Egen CSS",
            updates: "Uppdateringar"
        },
        Collections: {
            settings: {
                name: "Inställningar",
                general: {
                    name: "Allmänt",
                    voiceDisconnect: {
                        name: "Lämna röstsamtal",
                        note: "Lämna röstsamtal när Discord stängs ner"
                    },
                    showToasts: {
                        name: "Visa Toasts",
                        note: "Visar en liten notifikation för viktig information"
                    },
                    mediaKeys: {
                        name: "Inaktivera mediaknapparna",
                        note: "Hindrar Discord från att ta över mediaknapparna efter att du har spelat upp en video."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Ta bort minimistorleken",
                        note: "Tar bort Discords minimifönsterstorlek på 940x500"
                    },
                    name: "Fönsterinställningar",
                    transparency: {
                        name: "Aktivera Genomskinlighet",
                        note: "Gör att huvudfönstret blir genomskinligt (kräver omstart)"
                    },
                    frame: {
                        name: "Fönsterram",
                        note: "Lägger till operativsystemets standard fönsterram runt huvudfönstret"
                    }
                },
                addons: {
                    name: "Tilläggshanterare",
                    addonErrors: {
                        name: "Visa tilläggsfel",
                        note: "Visar en modalruta med tillägg- och temafel"
                    }
                },
                customcss: {
                    name: "Egen CSS",
                    customcss: {
                        name: "Egen CSS",
                        note: 'Aktiverar "Egen CSS"-fliken'
                    },
                    liveUpdate: {
                        name: "Uppdatera Direkt",
                        note: "Uppdaterar css allteftersom du skriver"
                    },
                    startDetached: {
                        name: "Starta Frånkopplad",
                        note: 'Öppnar CSS-redigeraren i ett separat fönster när "Egen CSS"-fliken klickas'
                    },
                    nativeOpen: {
                        name: "Öppna I Standardredigerare",
                        note: 'Öppnar CSS filen i operativsystemets standardredigerare när "Egen CSS"-fliken klickas'
                    }
                },
                developer: {
                    name: "Utvecklarinställningar",
                    devToolsWarning: {
                        name: "Stäng av utvecklarverktygsvarningar",
                        note: 'Hindrar Discord från att skriva ut sitt "Vänta!"-meddelande'
                    },
                    debugLogs: {
                        name: "Felsökningsloggar",
                        note: "Allt från konsolen hamnar i filen debug.log i BetterDiscord mappen"
                    },
                    devTools: {
                        name: "Utvecklarverktyg"
                    }
                },
                editor: {
                    lineNumbers: {
                        name: "Radnummer",
                        note: "Visar radnummer i marginalen i redigeringsfönstret"
                    },
                    fontSize: {
                        name: "Teckenstorlek",
                        note: "Storlek på typsnittet som används i redigeringsfönstret"
                    },
                    quickSuggestions: {
                        name: "Snabbförslag",
                        note: "Aktiverar autokompletteringsförslag när du skriver"
                    },
                    renderWhitespace: {
                        name: "Visa blanksteg",
                        note: "När blanksteg ska markeras i redigeringsfönstret",
                        options: {
                            all: "Alltid",
                            none: "Aldrig"
                        }
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} av {{author}}",
            byline: "av {{author}}",
            reload: "Ladda om",
            addonSettings: "Inställningar",
            website: "Webbplats",
            source: "Källa",
            invite: "Supportserver",
            donate: "Donera",
            patreon: "Patreon",
            name: "Namn",
            author: "Upphovsman",
            version: "Version",
            added: "Tilläggsdatum",
            modified: "Ändringsdatum",
            editAddon: "Redigera",
            deleteAddon: "Ta bort",
            confirmDelete: "Är du säker på att du vill ta bort {{name}}?",
            enabled: "{{name}} har aktiverats.",
            disabled: "{{name}} har inaktiverats.",
            couldNotEnable: "{{name}} kunde inte aktiverats.",
            couldNotDisable: "{{name}} kunde inte inaktiverats.",
            couldNotStart: "{{name}} kunde inte startas.",
            couldNotStop: "{{name}} kunde inte stoppas.",
            settingsError: "Kunde inte öppna inställningarna för {{namn}}",
            unknownAuthor: "Okänd upphovsman",
            noDescription: "Beskrivning saknas.",
            compileError: "Kunde inte kompileras. Se konsolen för mer information.",
            isEnabled: "Aktiverad",
            listView: "Listvy",
            gridView: "Rutnätsvy"
        },
        CustomCSS: {
            confirmationText: "Du har osparade ändringar av egna CSS:en. Alla ändringar kommer försvinna om du stänger det här fönstret",
            update: "Uppdatera",
            save: "Spara",
            openNative: "Öppna I Standardredigerare",
            openDetached: "Koppla Loss Fönster",
            settings: "Inställningar för redigerare",
            editorTitle: "Egen CSS-redigerare"
        },
        Modals: {
            confirmAction: "Är du säker?",
            okay: "Okej",
            cancel: "Avbryt",
            nevermind: "Avbryt",
            close: "Stäng",
            name: "Namn",
            message: "Meddelande",
            error: "Fel",
            addonErrors: "Tilläggsfel",
            restartRequired: "Omstart krävs",
            restartNow: "Starta om nu",
            restartLater: "Starta om senare",
            restartPrompt: "För att ändringarna ska träda i kraft måste Discord startas om. Vill du starta om nu?"
        },
        Sorting: {
            sortBy: "Sortera efter",
            order: "Ordning",
            ascending: "Stigande",
            descending: "Fallande"
        },
        Updater: {
            updateFailed: "Uppdateringen misslyckades!",
            updateFailedMessage: "BetterDiscord kunde inte uppdateras. Ladda ned den senaste versionen av installationsprogrammet från vår webbplats (https://betterdiscord.app/) och installera om BetterDiscord.",
            updateSuccessful: "Uppdateringen lyckades!",
            checking: "Söker efter uppdateringar!",
            finishedChecking: "Sökningen efter uppdateringar är slutförd!",
            checkForUpdates: "Sök efter uppdateringar!",
            updateAll: "Uppdatera alla!",
            noUpdatesAvailable: "Det finns inga uppdateringar tillgängliga.",
            updateButton: "Uppdatera!"
        }
    }
});
var Pl = Z((XC, fg) => {
    fg.exports = {
        Panels: {
            plugins: "Eklentiler",
            themes: "Temalar",
            customcss: "Özel CSS"
        },
        Collections: {
            settings: {
                name: "Ayarlar",
                general: {
                    name: "Genel",
                    voiceDisconnect: {
                        name: "Ses Kanalından Ayrılma",
                        note: "Discord'u kapatırken aktif ses kanalından ayrılır"
                    },
                    showToasts: {
                        name: "Bildirimleri Göster",
                        note: "Önemli bilgilendirmeler için küçük bir bidirim gösterir"
                    },
                    mediaKeys: {
                        name: "Medya Tuşlarını Deaktive Et",
                        note: "Bir video oynattıktan sonra Discord'un Multimedya tuşlarını ele geçirmesini engeller."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Minimum boyutu kaldır",
                        note: "Discord'un 940x500 boyut limitini kaldırır"
                    },
                    name: "Pencere Tercihleri",
                    transparency: {
                        name: "Şeffaflığı Etkinleştir",
                        note: "Ana pencerenin şeffaf olmasına el verir (yeniden başlatma gerekli)"
                    },
                    frame: {
                        name: "Pencere Çerçevesi",
                        note: "Yerel işletim sistemi penceresini ana pencereye ekler"
                    }
                },
                addons: {
                    name: "Eklenti Yöneticisi",
                    addonErrors: {
                        name: "Eklenti Hatalarını Göster",
                        note: "Eklenti/tema hatalarında yazı baloncuğu gösterir"
                    },
                    editAction: {
                        name: "Eylemi düzenle",
                        note: "Eklenti ve temaları düzenlerken çıkacakları yer",
                        options: {
                            detached: "Bağımsız Pencere",
                            system: "Sistem Düzenleyici"
                        }
                    }
                },
                customcss: {
                    name: "Özel CSS",
                    customcss: {
                        name: "Özel CSS",
                        note: "Özel CSS sekmesini aktifleştirir"
                    },
                    liveUpdate: {
                        name: "Canlı Güncelleme",
                        note: "Yazdıkca CSS'i günceller"
                    },
                    startDetached: {
                        name: "Bağımsız Başlat",
                        note: "Özel CSS sekme tuşuna basınca bağımsız sekmede açar"
                    },
                    nativeOpen: {
                        name: "Seçili editör'de aç",
                        note: "Özel CSS sekme tuşuna basınca seçili yazı editörünüzde açar"
                    },
                    openAction: {
                        name: "Editör Yeri",
                        note: "Özel CSS'in varsayılan açılma yeri",
                        options: {
                            settings: "Ayarlar Menüsü",
                            detached: "Bağımsız Pencere",
                            system: "Sistem Editörü"
                        }
                    }
                },
                developer: {
                    name: "Geliştirici (Developer) Ayarları",
                    debuggerHotkey: {
                        name: "Hata ayıklayıcı kısayolu",
                        note: "F8'e basınca hata ayıklayıcının açılmasını sağlar"
                    },
                    reactDevTools: {
                        name: "React Geliştirici Araçları",
                        note: "Yerli React Geliştirici araçlarınızı Discord'a ekler"
                    },
                    inspectElement: {
                        name: "Öğeyi Denetle Kısayolu",
                        note: "Çoğu tarayıca yaygın olan (ctrl + shift + c) Öğeyi Denetle kısayolunu etkinleştirir"
                    },
                    devToolsWarning: {
                        name: "DevTools uyarısını kapat",
                        note: `Discord'un "Bekle!" mesajını yazmasını engeller`
                    },
                    debugLogs: {
                        name: "Hata Ayıklama çıktıları",
                        note: "Konsoldaki herşeyi BetterDiscord klasöründeki debug.log dosyasına kaydeder"
                    }
                }
            }
        },
        Addons: {
            title: "{{author}} tarafından {{name}} v{{version}}",
            byline: "{{author}} tarafından",
            reload: "Yeniden-Başlat",
            addonSettings: "Ayarlar",
            website: "Website",
            source: "Kaynak",
            invite: "Destek Sunucusu",
            donate: "Bağış",
            patreon: "Patreon",
            name: "İsim",
            author: "Yapımcı",
            version: "Versiyon",
            added: "Eklenim Tarihi",
            modified: "Düzenlenme Tarihi",
            editAddon: "Düzenle",
            deleteAddon: "Sil",
            confirmDelete: "{{name}} eklentisini silmek istediğinize emin misiniz?",
            confirmationText: "{{name}} eklentisinde kaydedilmemiş değişiklikler var. Bu pencereyi kapatmak değişikliklerin kaybolmasına yol açar.",
            enabled: "{{name}} başlatıldı.",
            disabled: "{{name}} kapatıldı.",
            couldNotEnable: "{{name}} başlatılamadı.",
            couldNotDisable: "{{name}} kapatılamadı.",
            couldNotStart: "{{name}} başlatılamadı.",
            couldNotStop: "{{name}} durdurulamadı.",
            settingsError: "{{name}} için ayarlar açılamadı.",
            methodError: "{{method}} çalıştırılamadı.",
            unknownAuthor: "Bilinmeyen Yapımcı",
            noDescription: "Açıklama Yok.",
            metaError: "META ayrıştırılamadı.",
            missingNameData: "META isim verisi yok.",
            metaNotFound: "META bulunamadı.",
            compileError: "Derlenemedi.",
            wasUnloaded: "{{name}} çıkarıldı."
        },
        CustomCSS: {
            confirmationText: "Özel CSS'inde kaydedilmemiş değişimler var. Bu pencereyi kapatmak değişikliklerin kaybolmasına yol açar.",
            update: "Güncelle",
            save: "Kaydet",
            openNative: "Sistem Editöründe aç",
            openDetached: "Pencereyi Ayır",
            settings: "Editör Ayarları",
            editorTitle: "Özel CSS Editörü"
        },
        Modals: {
            confirmAction: "Emin Misin?",
            okay: "Tamam",
            done: "Bitti",
            cancel: "İptal",
            nevermind: "Boşver",
            close: "Kapat",
            name: "İsim",
            message: "Mesaj",
            error: "Hata",
            addonErrors: "Eklenti Hataları",
            restartRequired: "Yeniden Başlatma Lazım",
            restartNow: "Şimdi Yeniden Başlat",
            restartLater: "Sonra Yeniden Başlat",
            additionalInfo: "Ek Bilgi",
            restartPrompt: "Etki görmek için Discord'un yeniden başlatılması gerek. Şimdi yeniden başlatmak ister misiniz?"
        },
        Sorting: {
            sortBy: "Göre Sırala",
            order: "Sıra",
            ascending: "Yükselen",
            descending: "Azalan"
        },
        WindowPrefs: {
            enabledInfo: `Bu seçeneğin düzgün çalışması için şeffaf bir tema gerekiyor.
Windows'da bu aero snapping ve maksimize etmeyi bozabilir.

Etki etmesi için Discord'un yeniden başlatılması gerek. Şimdi yeniden başlatmak ister misiniz?`,
            disabledInfo: "Etki etmesi için Discord'un yeniden başlatılması gerek. Şimdi yeniden başlatmak ister misiniz?"
        }
    }
});
var zl = Z((JC, pg) => {
    pg.exports = {}
});
var Bl = Z((YC, mg) => {
    mg.exports = {
        Panels: {
            plugins: "Плагіни",
            themes: "Теми",
            customcss: "Самописні CSS"
        },
        Collections: {
            settings: {
                name: "Налаштування",
                general: {
                    name: "Основні",
                    voiceDisconnect: {
                        name: "Голосовий чат під час закриття",
                        note: "Відключатися від голосового сервера під час закриття Discord"
                    },
                    showToasts: {
                        name: "Показувати сповіщення",
                        note: "Показувати маленькі повідомлення з важливою інформацією"
                    },
                    mediaKeys: {
                        name: "Вимкнути медіаключі",
                        note: "Не захоплювати медіаключі Discord після відтворення відео"
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Прибрати мінімальний розмір",
                        note: "Прибирає примусовий мінімальний розмір вікна 940x500"
                    },
                    name: "Налаштування вікна",
                    transparency: {
                        name: "Увімкнути прозорість",
                        note: "Дозволяє бачити головне вікно (потрібний перезапуск)"
                    },
                    frame: {
                        name: "Рамка",
                        note: "Додає вбудовану рамку ОС для головного вікна"
                    }
                },
                addons: {
                    name: "Керування плагінами",
                    addonErrors: {
                        name: "Показувати помилки плагінів",
                        note: "Показувати спливні вікна з помилками плагінів і тем."
                    },
                    editAction: {
                        name: "Відображення редактора",
                        note: "Де відображати редактор плагінів і тем",
                        options: {
                            detached: "В окремому вікні",
                            system: "У системному редакторі"
                        }
                    }
                },
                customcss: {
                    name: "Самописні CSS",
                    customcss: {
                        name: "Редактор самописних CSS",
                        note: "Увімкнути вкладку зі стилями користувача"
                    },
                    liveUpdate: {
                        name: "Оновлення наживо",
                        note: "Оновлювати стиль у режимі реального часу в міру редагування"
                    },
                    startDetached: {
                        name: "Редактор в окремому вікні",
                        note: "Тиць по вкладці 'Самописні CSS' відкриє редактор в окремому вікні"
                    },
                    nativeOpen: {
                        name: "Відкривати вбудований редактор",
                        note: "Тиць по вкладці 'Самописні CSS' відкриє самописний стиль у вбудованому редакторі"
                    },
                    openAction: {
                        name: "Розташування редактора",
                        note: "Де самописний стиль повинен відкриватися за замовчуванням?",
                        options: {
                            settings: "У меню налаштувань",
                            detached: "В окремому вікні",
                            system: "У системному редакторі"
                        }
                    }
                },
                developer: {
                    name: "Налаштування розробника",
                    debuggerHotkey: {
                        name: "Гаряча клавіша налагоджувача",
                        note: "Дозволяє активувати налагоджувач при натисканні клавіші F8"
                    },
                    reactDevTools: {
                        name: "Інструменти розробника React",
                        note: "Вводить твою локальну установку інструментів розробника React у Discord"
                    },
                    inspectElement: {
                        name: "Гаряча клавіша перевірки елементу",
                        note: "Вмикає гарячу клавішу перевірки елементу (ctrl+shift+c), яка використовується у більшості браузерів"
                    },
                    devToolsWarning: {
                        name: "Зупинити попередження",
                        note: 'Не виводити попередження "Почекай!" ("Стій-но!")'
                    },
                    debugLogs: {
                        name: "Налагоджувальні журнали",
                        note: "Виводить все з консолі у файл debug.log в теці BetterDiscord"
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} у{{version}} від {{author}}",
            byline: "{{author}}",
            reload: "Перезавантажити",
            addonSettings: "Налаштування",
            website: "Сайт",
            source: "Вихідний код",
            invite: "Сервер підтримки",
            donate: "Пожертвувати",
            patreon: "Патреон",
            name: "Ім'ям",
            author: "Автором",
            version: "Версією",
            added: "Датою додавання",
            modified: "Датою оновлення",
            editAddon: "Редагувати",
            deleteAddon: "Вилучити",
            confirmDelete: "Ти впевнений, що хочеш вилучити {{name}}?",
            confirmationText: "У вас є незбережені зміни в {{name}}. Закриття цього вікна призведе до їх втрати.",
            enabled: "{{name}} увімкнено.",
            disabled: "{{name}} вимкнено.",
            couldNotEnable: "Не вдалося увімкнути {{name}}.",
            couldNotDisable: "Не вдалося вимкнути {{name}}.",
            couldNotStart: "Не вдалося запустити {{name}}",
            couldNotStop: "Не вдалося зупинити {{name}}",
            settingsError: "Не вдалося відкрити налаштування {{name}}",
            methodError: "Не вдалося викликати {{method}}",
            unknownAuthor: "Автор невідомий",
            noDescription: "Опис не надано.",
            metaError: "META не може бути проаналізована",
            missingNameData: "Відсутні META-дані імен",
            metaNotFound: "META не знайдена.",
            compileError: "Не вдалося скомпілювати.",
            wasUnloaded: "{{name}} вивантажено"
        },
        CustomCSS: {
            confirmationText: "У тебе є незбережені зміни у самописному CSS. Закриття цього вікна призведе до їх втрати.",
            update: "Оновити",
            save: "Зберегти",
            openNative: "Відкрити в системному редакторі",
            openDetached: "Відкрити у вбудованому вікні",
            settings: "Налаштування редактора",
            editorTitle: "Самописний редактор стилів"
        },
        Modals: {
            confirmAction: "Ти впевнений?",
            okay: "Так",
            done: "Готово",
            cancel: "Скасувати",
            nevermind: "Не звертати уваги",
            close: "Закрити",
            name: "Ім'я",
            message: "Повідомлення",
            error: "Помилка",
            addonErrors: "Помилка доповнення",
            restartRequired: "Потрібний перезапуск",
            restartNow: "Перезапустити зараз",
            restartLater: "Перезапустити пізніше",
            additionalInfo: "Додаткова інформація",
            restartPrompt: "Щоб зміни набрали чинності, потрібно перезапустити Discord. Бажаєш зробити це зараз?"
        },
        Sorting: {
            sortBy: "Сортувати за",
            order: "За порядком",
            ascending: "Зростання",
            descending: "Спадання"
        },
        WindowPrefs: {
            enabledInfo: `Для правильної роботи цієї опції потрібна прозора тема. У Windows це може призвести до порушення прив'язки та максимізації Aero.

Щоб зміни набули чинності, необхідно перезапустити Discord. Бажаєш зробити це зараз?`,
            disabledInfo: "Щоб зміни набули чинності, необхідно перезапустити Discord. Бажаєш зробити це зараз?"
        }
    }
});
var Nl = Z((QC, hg) => {
    hg.exports = {
        Panels: {
            plugins: "Lisäosat",
            themes: "Teemat",
            customcss: "Mukautettu CSS",
            updates: "Päivitykset"
        },
        Collections: {
            settings: {
                name: "Asetukset",
                general: {
                    name: "Yleinen",
                    voiceDisconnect: {
                        name: "Katkaise puhelu",
                        note: "Katkaise puhelu, kun suljet Discordin"
                    },
                    showToasts: {
                        name: "Näytä Paahtoleivät",
                        note: "Näyttää pienen ilmoituksen tärkeistä tiedoista"
                    },
                    mediaKeys: {
                        name: "Poista medianäppäimet käytöstä",
                        note: "Estää Discordia kaappaamasta medianäppäimiäsi videon toistamisen jälkeen."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Poista vähimmäiskoko",
                        note: "Poistaa Discordin pakotetun vähimmäisikkunakoon 940x500"
                    },
                    name: "Ikkuna-asetukset",
                    transparency: {
                        name: "Ota läpinäkyvyys käyttöön",
                        note: "Mahdollistaa pääikkunan läpinäkyvyyden (vaatii uudelleenkäynnistyksen)"
                    },
                    frame: {
                        name: "Ikkunakehys",
                        note: "Lisää alkuperäisen käyttöjärjestelmän ikkunakehyksen pääikkunaan"
                    }
                },
                addons: {
                    name: "Lisäosien hallinta",
                    addonErrors: {
                        name: "Näytä lisäosien viat",
                        note: "Näyttää modaalin, jossa on laajennus/teemavirheitä"
                    },
                    editAction: {
                        name: "Muokkaa toimintaa",
                        note: "Missä lisäosat & teema näkyy, kun muokkaat niitä",
                        options: {
                            detached: "Irrotettu ikkuna",
                            system: "Järjestelmän muokkaaja"
                        }
                    }
                },
                customcss: {
                    name: "Mukautettu CSS",
                    customcss: {
                        name: "Mukautettu CSS",
                        note: "Ottaa käyttöön Mukautetun CSS välilehden"
                    },
                    liveUpdate: {
                        name: "Live-päivitys",
                        note: "Päivttää css, kun kirjoitat"
                    },
                    startDetached: {
                        name: "Aloita irroitetusti",
                        note: "Mukautetun CSS-välilehden napsauttaminen avaa muokkaajan erilliseen ikkunaan"
                    },
                    nativeOpen: {
                        name: "Avaa alkuperäisessä muokkaajassa",
                        note: "Mukautetun CSS-välilehden napsauttaminen avaa mukautetun css alkuperäisessä muokkaajassa"
                    },
                    openAction: {
                        name: "Muokkaajan sijainti",
                        note: "Missä mukautettu CSS:n pitäisi avautua normaalisti",
                        options: {
                            settings: "Asetuksien valikko",
                            detached: "Irrotettu ikkuna",
                            system: "Järjestelmän muokkaaja"
                        }
                    }
                },
                developer: {
                    name: "Kehittäjän asetukset",
                    debuggerHotkey: {
                        name: "Virheenkorjaajan pikanäppäin",
                        note: "Mahdollistaa virheenkorjauksen aktivoinnin, kun painetaan F8 DevToolsin ollessa auki"
                    },
                    reactDevTools: {
                        name: "React-kehitystyökalut",
                        note: "Lisää paikallisen React Developer Tools -asennuksesi Discordiin"
                    },
                    inspectElement: {
                        name: "Tarkista-elementin pikanäppäin",
                        note: "Ottaa käyttöön tarkastuselementin pikanäppäimen (ctrl + shift + c), joka on yleinen useimmissa selaimissa"
                    },
                    devToolsWarning: {
                        name: "Lopeta DevTools-varoitus",
                        note: 'Pysäyttää Discordin tulostamasta heidän "Hold Up!" viestin'
                    },
                    debugLogs: {
                        name: "Virheenkorjauksen logit",
                        note: "Tulostaa kaiken konsolista BetterDiscord-kansion debug.log-tiedostoon"
                    },
                    devTools: {
                        name: "DevTools",
                        note: "Mahdollistaa DevToolsin kytkemisen näppäinyhdistelmällä ctrl+shift+i"
                    }
                },
                editor: {
                    name: "Muokkaajan asetukset",
                    lineNumbers: {
                        name: "Rivien numerot",
                        note: "Mahdollistaa rivinumeroiden näyttämisen muokkaajan sivulla"
                    },
                    fontSize: {
                        name: "Fontin koko",
                        note: "Muokkaajassa käytettävän fontin koko (pt)."
                    },
                    minimap: {
                        name: "Minikartta",
                        note: "Mahdollistaa koodin minikartan näyttämisen muokkaajan sivulla"
                    },
                    hover: {
                        name: "Viitetyökaluvinkit",
                        note: "Mahdollistaa viitetyökaluvihjeiden näyttämisen, kun sääntöjä ja valitsimia siirretään"
                    },
                    quickSuggestions: {
                        name: "Pikaehdotuksia",
                        note: "Ottaa käyttöön automaattisen täydennyksen ehdotukset kirjoittaessasi"
                    },
                    renderWhitespace: {
                        name: "Näytä välilyönti",
                        note: "Milloin muokkaajan tulee näyttää välilyönnit",
                        options: {
                            all: "Aina",
                            none: "Ei ikinä",
                            selection: "Valinta"
                        }
                    }
                }
            }
        },
        Addons: {
            reload: "Lataa uudelleen",
            addonSettings: "Asetukset",
            website: "Nettisivu",
            source: "Lähde",
            invite: "Tuki-palvelin",
            donate: "Lahjoita",
            patreon: "Patreon",
            name: "Nimi",
            author: "Luoja",
            version: "Versio",
            added: "lisäyspäivämäärä",
            modified: "Muutospäivämäärä",
            editAddon: "Muokkaa",
            deleteAddon: "Poista",
            confirmDelete: "Haluatko varmasti poistaa {{name}}?",
            confirmationText: "Sinulla on tallentamattomia muutoksia kohteeseen {{name}}. Tämän ikkunan sulkeminen menettää kaikki muutokset.",
            enabled: `
{{name}} on otettu käyttöön.`,
            disabled: `
{{name}} on poistettu käytöstä.`,
            couldNotEnable: "{{name}} ei voitu ottaa käyttöön.",
            couldNotDisable: "{{name}} ei voitu poistaa käytöstä.",
            couldNotStart: "{{name}} ei voitu käynnistää.",
            couldNotStop: "{{name}} ei voitu pysäyttää.",
            settingsError: "Käyttäjän {{name}} asetuksia ei voitu avata",
            methodError: "{{method}} ei voitu laukaista.",
            unknownAuthor: "Tuntematon tekijä",
            noDescription: "Kuvausta ei ole annettu.",
            metaError: "META:a ei voitu jäsentää.",
            missingNameData: "META:lta puuttuu nimitiedot.",
            metaNotFound: "META:a ei löytynyt.",
            compileError: "Ei voitu koota. Katso lisätietoja konsolista.",
            wasUnloaded: "{{name}} purettiin.",
            isEnabled: "Otettu käyttöön",
            wasLoaded: `
{{name}} v{{version}} ladattiin.`
        },
        CustomCSS: {
            confirmationText: "Muokatussa CSS:ssä on tallentamattomia muutoksia. Tämän ikkunan sulkeminen menettää kaikki muutokset.",
            update: "Päivitä",
            save: "Tallenna",
            openNative: "Avaa järjestelmän muokkaajassa",
            openDetached: "Irrota ikkuna",
            settings: "Muokkaajan asetukset",
            editorTitle: "Mukautettu CSS-muokkaaja"
        },
        Modals: {
            confirmAction: "Oletko varma?",
            okay: "Okei",
            done: "Valmis",
            cancel: "Peruuta",
            nevermind: "Unohda koko juttu",
            close: "Sulje",
            name: "Nimi",
            message: "Viesti",
            error: "Vika",
            addonErrors: "Lisäosan viat",
            restartRequired: "Uudelleenkäynnistys vaaditaan",
            restartNow: "Uudelleen käynnistä nyt",
            restartLater: "Käynnistä uudelleen nyt",
            additionalInfo: "Lisätietoja",
            restartPrompt: "Jotta se tulisi voimaan, Discord on käynnistettävä uudelleen. Haluatko käynnistää uudelleen nyt?"
        },
        Sorting: {
            sortBy: "Järjestä",
            order: "Järjestys",
            ascending: "Nouseva",
            descending: "Laskeva"
        },
        WindowPrefs: {
            enabledInfo: `Tämä vaihtoehto vaatii läpinäkyvän teeman toimiakseen kunnolla. Windowsissa tämä voi katkaista aerosnapsauksen ja maksimoimisen.

Jotta Discord tulisi voimaan, se on käynnistettävä uudelleen. Haluatko käynnistää uudelleen nyt?`,
            disabledInfo: "Jotta se tulisi voimaan, Discord on käynnistettävä uudelleen. Haluatko käynnistää uudelleen nyt?"
        },
        Updater: {
            updateFailed: "Päivitys epäonnistui",
            updateFailedMessage: "BetterDiscordin päivitys epäonnistui. Lataa asennusohjelman uusin versio verkkosivustoltamme (https://betterdiscord.app/) ja asenna se uudelleen.",
            updateSuccessful: "Päivittäminen onnistui!",
            updateAvailable: "BetterDiscordilla on uusi päivitys",
            addonUpdated: "{{name}} on päivitetty versioon {{version}}!",
            checking: "Tarkistetaan päivityksiä!",
            finishedChecking: "Päivitysten tarkistaminen on valmis!",
            checkForUpdates: "Tarkista päivitykset!",
            updateAll: "Päivitä kaikki!",
            noUpdatesAvailable: "Päivityksiä ei ole saatavilla.",
            versionAvailable: "Versio {{version}} on saatavilla!",
            updateButton: "Päivitä!"
        }
    }
});
var Fl = Z((eS, gg) => {
    gg.exports = {
        Panels: {
            customcss: "Tilpasset CSS"
        },
        Collections: {
            settings: {
                name: "Innstillinger",
                general: {
                    name: "Generell",
                    showToasts: {
                        name: "Vis Toasts"
                    }
                },
                customcss: {
                    name: "Tilpasset CSS",
                    customcss: {
                        name: "Tilpasset CSS"
                    }
                }
            }
        },
        Addons: {
            addonSettings: "Innstillinger",
            website: "Nettsted",
            donate: "Donere",
            patreon: "Patreon",
            name: "Navn",
            author: "Forfatter",
            version: "Versjon",
            editAddon: "Redigere",
            deleteAddon: "Slett"
        },
        CustomCSS: {
            update: "Oppdater",
            save: "Lagre"
        },
        Modals: {
            confirmAction: "Er Du Sikker?",
            okay: "Okay",
            restartNow: "Start på nytt nå",
            restartLater: "Start på nytt senere"
        },
        Sorting: {
            sortBy: "Sorter etter"
        },
        WindowPrefs: {
            disabledInfo: "For å kunne tre i kraft må Discord startes på nytt. Vil du starte på nytt nå?"
        }
    }
});
var Ol = Z((tS, bg) => {
    bg.exports = {}
});
var Rl = Z((aS, yg) => {
    yg.exports = {
        Panels: {
            plugins: "plugin-uri",
            themes: "temă",
            customcss: "CSS personalizat"
        },
        Collections: {
            settings: {
                name: "setări",
                general: {
                    name: "general",
                    voiceDisconnect: {
                        name: "Deconectare de la voce",
                        note: "Deconectează-te de la un canal de voce când inchizi Discord-ul"
                    },
                    showToasts: {
                        name: "Arată mesajele de sistem",
                        note: "Afișează notificări pentru informațiile importante"
                    },
                    mediaKeys: {
                        name: "Dezactivează tastele Media",
                        note: "Previn-o Discord din a fura tastele media după redarea unui videoclip."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Elimină mărimea minimă",
                        note: "Elimina marimea minima de 940x500 a ferestrei"
                    },
                    name: "Preferinte în privința mărimii ferestrei",
                    transparency: {
                        name: "Activează Transparența",
                        note: "Fă ca fereastra principală să fie transparentă (necesită repornire)"
                    },
                    frame: {
                        name: "Cadrul ferestrei",
                        note: "Adaugă cadrul sistemului de operare în fereastra principală"
                    }
                },
                addons: {
                    name: "Manager de adăugiri",
                    addonErrors: {
                        name: "Arată erorile adăugirilor",
                        note: "Afișează un modal cu erorile plugin-urilor/temelor"
                    },
                    editAction: {
                        name: "Modifică acțiunea",
                        note: "Unde apar plugin-urile si temele atunci când sunt editate",
                        options: {
                            detached: "Fereastră detașabilă",
                            system: "Editor de sistem"
                        }
                    }
                },
                customcss: {
                    name: "CSS personalizat",
                    customcss: {
                        name: "CSS personalizat",
                        note: "Activează tab-ul de CSS personalizat"
                    },
                    liveUpdate: {
                        name: "Actualizări live",
                        note: "Actualizează CSS-ul in timp ce scrii"
                    },
                    startDetached: {
                        name: "Pornește intr-o altă fereastră",
                        note: "Click-ul pe tab-ul de CSS personalizat va deschide editor-ul intr-o fereastra separată"
                    },
                    nativeOpen: {
                        name: "Deschide în editor-ul nativ",
                        note: "Click-ul pe fereastra de CSS personalizat va deschide editorul nativ al calculatorului"
                    },
                    openAction: {
                        name: "Locația editorului",
                        note: "Unde ar trebui să se deschide CSS-ul personalizat",
                        options: {
                            settings: "Meniu de setări",
                            detached: "Fereastră detașabilă",
                            system: "Editor de sistem"
                        }
                    }
                },
                developer: {
                    name: "Setări de dezvoltator",
                    debuggerHotkey: {
                        name: "Scurtătură pentru Debugger",
                        note: "Activează deschiderea debugger-ului la apasarea tastei F8"
                    },
                    reactDevTools: {
                        name: "React Developer Tools",
                        note: "Instalează React Developer Tools in Discord"
                    },
                    inspectElement: {
                        name: "Scurtătură pentru Inspect Element",
                        note: "Activează scurtătura pentru Inspect Element (CTRL + SHIFT + C) ce se găsește in cele mai multe browsere"
                    },
                    devToolsWarning: {
                        name: "Dezactivează avertismentele",
                        note: 'Opreste Discord-ul din a afișa mesajul "Stai puțin!"'
                    },
                    debugLogs: {
                        name: "Debug Logs",
                        note: "Transferă tot din consolă in fișierul debug.log din folderul BetterDiscord"
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} de {{author}}",
            byline: "de {{author}}",
            reload: "Reîmprospatează",
            addonSettings: "Setări",
            website: "Site Web",
            source: "Sursă",
            invite: "Susține Server-ul",
            donate: "Donează",
            patreon: "Patreon",
            name: "Nume",
            author: "Autor",
            version: "Versiune",
            added: "Data adăugării",
            modified: "Data modificării",
            editAddon: "Modifică",
            deleteAddon: "Șterge",
            confirmDelete: "Ești sigur că vrei să ștergi {{name}} ?",
            confirmationText: "Ai schimbări nesalvate la {{name}}. Închiderea acestei ferestre v-a duce la pierderea tuturor modificărilor.",
            enabled: "{{name}} a fost activat.",
            disabled: "{{name}} a fost dezactivat.",
            couldNotEnable: "{{name}} nu a putut fi activat.",
            couldNotDisable: "{{name}} nu a putut fi dezactivat.",
            couldNotStart: "{{name}} nu a putut porni.",
            couldNotStop: "{{name}} nu a putut fi oprit.",
            settingsError: "Nu s-au putut deschide setările pentru {{name}}",
            methodError: "{{method}} nu a putut fi executat.",
            unknownAuthor: "Autor necunoscut",
            noDescription: "Fără descriere.",
            metaError: "META nu a putut fi analizat.",
            missingNameData: "META nu are un nume.",
            metaNotFound: "META nu a putut fi găsit.",
            compileError: "Nu s-a putut incărca.",
            wasUnloaded: "{{name}} a fost dezactivat."
        },
        CustomCSS: {
            confirmationText: "Ai modificări nesalvate in CSS-ul personalizat. Închiderea acestei ferestre va duce la anularea schimbărilor.",
            update: "Actualizare",
            save: "Salvează",
            openNative: "Deschide în editorul de sistem",
            openDetached: "Detașează fereastra",
            settings: "Setările editor-ului",
            editorTitle: "Editor de CSS personalizat"
        },
        Modals: {
            confirmAction: "Ești sigur ?",
            okay: "Okay",
            done: "Gata",
            cancel: "Anulează",
            nevermind: "Nu contează",
            close: "Închide",
            name: "Nume",
            message: "Mesaj",
            error: "Eroare",
            addonErrors: "Eroare a",
            restartRequired: "Repornirea este necesară",
            restartNow: "Repornește acum",
            restartLater: "Reîncarcă mai târziu",
            additionalInfo: "Informații adiționale",
            restartPrompt: "Pentru a fi aplicate, Discord trebuie să repornească. Dorești să il repornești acuma ?"
        },
        Sorting: {
            sortBy: "Sortează După",
            order: "Ordonează",
            ascending: "Crescător",
            descending: "Descrescător"
        },
        WindowPrefs: {
            enabledInfo: `Această opțiune necesită o temă transparentă pentru a funcționa normal. 
Pe Windows ar putea putea să strice maximizarea.
Pentru ca aceste efecte să intre în vigoare, Discord trebuie să repornească. Dorești să il repornești acum ?`,
            disabledInfo: "Pentru ca aceste setări să intre în efect, Discord trebuie să repornească. Dorești să îl repornești acum ?"
        }
    }
});
var Ul = Z((oS, xg) => {
    xg.exports = {}
});
var jl = Z((rS, vg) => {
    vg.exports = {}
});
var ql = Z((nS, wg) => {
    wg.exports = {
        Panels: {
            plugins: "Tiện ích",
            themes: "Chủ đề",
            customcss: "CSS Tùy Chỉnh",
            updates: "Cập nhật"
        },
        Collections: {
            settings: {
                name: "Cài đặt",
                general: {
                    name: "Chung",
                    voiceDisconnect: {
                        name: "Ngắt Kết Nối Kênh Đàm Thoại",
                        note: "Ngắt kết nối kênh đàm thoại khi đóng Discord"
                    },
                    showToasts: {
                        name: "HIển Thị Thông Báo",
                        note: "Hiển thị một thông báo nhỏ cho những thông tin quan trọng"
                    },
                    mediaKeys: {
                        name: "Vô Hiệu Hóa Phím Điều Khiển Phương Tiện",
                        note: "Ngăn Discord kiểm soát phím điều khiển phương tiện sau khi xem video."
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "Xóa Kích Thước Tối Thiểu",
                        note: "Xóa kích thước tối thiểu của Discord (940x500)"
                    },
                    name: "Cài Đặt Cửa Sổ",
                    transparency: {
                        name: "Bật Cửa Sổ Trong Suốt",
                        note: "Cho phép cửa sổ Discord nhìn xuyên thấu (cần khởi động lại)"
                    },
                    frame: {
                        name: "Khung Cửa Sổ",
                        note: "Cho phép khung cửa sổ của hệ thống vào cửa sổ Discord"
                    }
                },
                addons: {
                    name: "Quản Lý Tiện Ích",
                    addonErrors: {
                        name: "Hiển Thị Lỗi Tiện Ích",
                        note: "Hiển thị thông báo với những tiện ích/chủ đề lỗi"
                    },
                    editAction: {
                        name: "Nơi Chỉnh Sửa",
                        note: "Nơi trình chỉnh sửa tiện ích và chủ đề hiển thị khi sửa",
                        options: {
                            detached: "Cửa Sổ Tách Rời",
                            system: "Trình Chỉnh Sửa"
                        }
                    }
                },
                customcss: {
                    name: "CSS Tùy Chỉnh",
                    customcss: {
                        name: "CSS Tùy Chỉnh",
                        note: "Bật tab CSS Tùy Chỉnh"
                    },
                    liveUpdate: {
                        name: "Cập Nhật Trực Tiếp",
                        note: "Cập nhật CSS khi bạn đang gõ"
                    },
                    startDetached: {
                        name: "Tách Rời Cửa Số",
                        note: "Bấm vào tab CSS Tùy Chỉnh sẽ mở trình chỉnh sửa ở cửa sổ riêng"
                    },
                    nativeOpen: {
                        name: "Mở trong Trình Chỉnh Sửa của bạn",
                        note: "Bấm vào tab CSS Tùy Chỉnh sẽ mở trình chỉnh sửa của bạn"
                    },
                    openAction: {
                        name: "Vị trí Trình Chỉnh Sửa",
                        note: "Nơi CSS Tùy Chỉnh sẽ được mở mặc định",
                        options: {
                            settings: "Menu Cài Đặt",
                            detached: "Cửa Sổ Riêng",
                            system: "Trình Chỉnh Sửa"
                        }
                    }
                },
                developer: {
                    name: "Cài đặt Nhà Phát Triển",
                    debuggerHotkey: {
                        name: "Phím tắt Trình Gỡ Lỗi",
                        note: "Cho phép kích hoạt trình gỡ lỗi bằng cách nhấn F8 với DevTools mở"
                    },
                    reactDevTools: {
                        name: "React Developer Tools",
                        note: "Thêm cài đặt của React Developer Tools vào Discord"
                    },
                    inspectElement: {
                        name: "Phím tắt Kiểm tra Thành Phần",
                        note: "Kích hoạt phím tắt Kiểm tra Thành Phần (Ctrl + Shift + C) tương tự như trong hầu hết trình duyệt"
                    },
                    devToolsWarning: {
                        name: "Tắt Cảnh Báo DevTools",
                        note: 'Ngăn Discord hiển thị thông báo "Chờ Đã!"'
                    },
                    debugLogs: {
                        name: "Lưu Nhật Ký Gỡ Lỗi",
                        note: "Lưu mọi thứ được hiển thị ở Console vào tệp debug.log trong thư mục BetterDiscord"
                    },
                    devTools: {
                        name: "DevTools",
                        note: "Kích hoạt DevTools bằng tổ hợp Ctrl + Shift + i"
                    }
                },
                editor: {
                    name: "Cài đặt Trình Chỉnh Sửa",
                    lineNumbers: {
                        name: "Số Dòng",
                        note: "Hiển thị số dòng ở cạnh của trình chỉnh sửa"
                    },
                    fontSize: {
                        name: "Kích Thước Phông Chữ",
                        note: "Kích thước phông chữ (pt) được sử dụng trong trình chỉnh sửa"
                    },
                    minimap: {
                        name: "Minimap",
                        note: "Hiển thị Minimap ở cạnh của trình chỉnh sửa"
                    },
                    hover: {
                        name: "Chú Giải",
                        note: "Hiển thị chú giải khi di chuột vào những lựa chọn"
                    },
                    quickSuggestions: {
                        name: "Đề Xuất Nhanh",
                        note: "Hiển thị những đề xuất tự hoàn thành khi bạn gõ"
                    },
                    renderWhitespace: {
                        name: "Hiển Thị Khoảng Trắng",
                        note: "Khi nào khoảng trắng sẽ được hiển thị trong trình chỉnh sửa",
                        options: {
                            all: "Luôn luôn",
                            none: "Không bao giờ",
                            selection: "Tùy chọn"
                        }
                    }
                }
            }
        },
        Addons: {
            title: "{{name}} v{{version}} bởi {{author}}",
            byline: "bởi {{author}}",
            reload: "Tải lại",
            addonSettings: "Cài đặt",
            website: "Trang web",
            source: "Nguồn",
            invite: "Máy chủ hỗ trợ",
            donate: "Ủng hộ",
            patreon: "Patreon",
            name: "Tên",
            author: "Tác giả",
            version: "Phiên bản",
            added: "Ngày thêm",
            modified: "Ngày sửa đổi",
            editAddon: "Chỉnh sửa",
            deleteAddon: "Xóa",
            confirmDelete: "Bạn chắc chắn muốn xóa {{name}}?",
            confirmationText: "Bạn có những thay đổi chưa lưu cho {{name}}. Đóng cửa sổ này sẽ xóa hết những thay đổi của bạn.",
            enabled: "{{name}} đã được kích hoạt.",
            disabled: "{{name}} đã được vô hiệu hóa.",
            couldNotEnable: "{{name}} không thể được kích hoạt.",
            couldNotDisable: "{{name}} không thể được vô hiệu hóa.",
            couldNotStart: "{{name}} không thể bắt đầu.",
            couldNotStop: "{{name}} không thể dừng lại.",
            settingsError: "Không thể mở cài đặt cho {{name}}",
            methodError: "{{method}} không thể được kích hoạt.",
            unknownAuthor: "Tác giả không xác định",
            noDescription: "Không có miêu tả.",
            metaError: "Không thể phân tích META.",
            missingNameData: "Thiếu dữ liệu tên META.",
            metaNotFound: "Không thể tìm thấy META.",
            compileError: "Không thể biên dịch. Vui lòng kiểm tra Console để biết thêm chi tiết.",
            wasUnloaded: "{{name}} đã được gỡ.",
            isEnabled: "Đã kích hoạt",
            wasLoaded: "{{name}} v{{version}} đã được thêm.",
            listView: "Dạng Danh Sách",
            gridView: "Dạng Ô"
        },
        CustomCSS: {
            confirmationText: "Bạn có những thay đổi chưa lưu cho CSS Tùy Chỉnh của bạn. Đóng cửa sổ này sẽ xóa hết những thay đổi của bạn.",
            update: "Cập nhật",
            save: "Lưu",
            openNative: "Mở trong Trình Chỉnh Sửa",
            openDetached: "Cửa Sổ Riêng",
            settings: "Cài đặt Trình Chỉnh Sửa",
            editorTitle: "Trình Chỉnh Sửa CSS Tùy Chỉnh"
        },
        Modals: {
            confirmAction: "Bạn chắc chắn chứ?",
            okay: "OK",
            done: "Xong",
            cancel: "Hủy bỏ",
            nevermind: "Không bận tâm",
            close: "Đóng",
            name: "Tên",
            message: "Tin nhắn",
            error: "Lỗi",
            addonErrors: "Lỗi Tiện Ích",
            restartRequired: "Cần Khởi Động Lại",
            restartNow: "Khởi Động Lại Bây Giờ",
            restartLater: "Khởi Động Lại Sau",
            additionalInfo: "Thông Tin Bổ Sung",
            restartPrompt: "Để có hiệu lực, Discord cần phải được khởi động lại. Bạn có muốn khởi động lại ngay bây giờ?",
            changelog: "Nhật ký thay đổi"
        },
        Sorting: {
            sortBy: "Lọc Bởi",
            order: "Thứ tự",
            ascending: "Trên xuống dưới",
            descending: "Dưới lên trên"
        },
        WindowPrefs: {
            enabledInfo: `Lựa chọn này cần phải có một chủ đề trong suốt để có thể hoạt động đúng cách. Trên Windows, tính năng sắp xếp và thu phóng cửa số (Aero Snapping) và toàn cửa sổ có thể không hoạt động.

Để có hiệu lực, Discord cần phải được khởi động lại. Bạn có muốn khởi động lại ngay bây giờ?`,
            disabledInfo: "Để có hiệu lực, Discord cần phải được khởi động lại. Bạn có muốn khởi động lại ngay bây giờ?"
        },
        Updater: {
            updateFailed: "Cập Nhật Thất Bại!",
            updateFailedMessage: "Không thể cập nhật BetterDiscord. Vui lòng tải trình cài đặt mới nhất ở trang web (https://betterdiscord.app/) và cài đặt lại.",
            updateSuccessful: "Cập Nhật Thành Công!",
            updateAvailable: "BetterDiscord có cập nhật mới (v{{version}})",
            addonUpdated: "{{name}} đã được cập nhật lên phiên bản {{version}}!",
            checking: "Đang kiểm tra cập nhât...",
            finishedChecking: "Kiểm tra cập nhật thành công!",
            checkForUpdates: "Kiểm Tra Cập Nhật!",
            updateAll: "Cập Nhật Mọi Thứ!",
            noUpdatesAvailable: "Không có cập nhật mới.",
            versionAvailable: "Phiên bản {{version}} đã có sẵn!",
            updateButton: "Cập nhật!"
        }
    }
});
var Hl = Z((iS, kg) => {
    kg.exports = {
        Panels: {
            plugins: "प्लग-इन",
            themes: "विषयों",
            customcss: "कस्टम सीएसएस"
        },
        Collections: {
            settings: {
                name: "समायोजन",
                general: {
                    name: "आम",
                    voiceDisconnect: {
                        name: "आवाज डिस्कनेक्ट",
                        note: "डिसॉर्डर को बंद करते समय वॉयस सर्वर से डिस्कनेक्ट करें"
                    },
                    showToasts: {
                        name: "टोस्ट दिखाओ",
                        note: "महत्वपूर्ण जानकारी के लिए एक छोटी अधिसूचना दिखाता है"
                    },
                    mediaKeys: {
                        name: "मीडिया कुंजी अक्षम करें",
                        note: "वीडियो चलाने के बाद डिस्कॉर्ड को अपनी मीडिया कुंजियों को हाईजैक करने से रोकें।"
                    }
                },
                window: {
                    removeMinimumSize: {
                        name: "न्यूनतम आकार निकालें",
                        note: `940x500 . के डिस्कॉर्ड के मजबूर न्यूनतम विंडो आकार को हटा देता है
ध्यान दें`
                    }
                },
                addons: {
                    name: `एडऑन मैनेजर
`,
                    addonErrors: {
                        name: "एडऑन त्रुटि दिखाएं",
                        note: "प्लगइन/थीम त्रुटियों के साथ एक मोडल दिखाता है"
                    },
                    editAction: {
                        name: "क्रिया संपादित करें",
                        note: "संपादन करते समय प्लगइन्स और थीम कहाँ दिखाई देते हैं"
                    }
                }
            }
        }
    }
});
var Li, Wl = x(() => {
    "use strict";
    Li = {
        "en-US": ul(),
        "en-GB": cl(),
        "zh-CN": fl(),
        "zh-TW": pl(),
        cs: ml(),
        da: hl(),
        nl: gl(),
        fr: bl(),
        de: yl(),
        el: xl(),
        hu: vl(),
        it: wl(),
        ja: kl(),
        ko: Cl(),
        pl: Sl(),
        "pt-PT": Ll(),
        "pt-BR": Il(),
        ru: Al(),
        sk: Tl(),
        "es-ES": El(),
        "es-419": Ml(),
        "sv-SE": Dl(),
        tr: Pl(),
        bg: zl(),
        uk: Bl(),
        fi: Nl(),
        no: Fl(),
        hr: Ol(),
        ro: Rl(),
        lt: Ul(),
        th: jl(),
        vi: ql(),
        hi: Hl()
    }
});

function _l(a) {
    return typeof a != "object" || a === null ? !1 : Object.keys(a).some(e => ["zero", "one", "two", "few", "many", "other"].includes(e))
}

function Ia(a) {
    return typeof a == "string" || _l(a)
}

function Cg(a) {
    return Object.keys(Li).includes(a)
}
var Ii, qt, mo, bt, yt, Ai, p, V = x(() => {
    "use strict";
    Wl();
    pt();
    ee();
    Ii = new Map, yt = {
        get locale() {
            return qt
        },
        get rules() {
            return Ii.get(yt.locale)
        },
        get supportedLocales() {
            return bt ? Object.keys(bt) : []
        },
        isSupported(a) {
            return bt ? Object.keys(bt).includes(a) : !1
        },
        init(a) {
            let {
                locale: e,
                fallback: t = "en-US",
                translations: o
            } = a;
            if (!Cg(t)) throw new Error(`Invalid fallback locale: ${t}`);
            mo = t, bt = o, yt.setLocale(e ?? t)
        },
        setLocale(a) {
            yt.isSupported(a) || (b.warn("i18n", `Locale ${a} is not supported, falling back to ${mo}`), a = mo), qt = a, !Ii.has(qt) && Ii.set(qt, new Intl.PluralRules(qt))
        },
        pluralize(a, e) {
            if (typeof a == "string") return a;
            if (typeof e != "number" || isNaN(e)) return b.warn("i18n", `Invalid count provided for pluralization: ${e}. Returning 'other' form.`), a.other ?? a.one ?? "Translation error";
            let o = "zero" in a && e === 0 ? "zero" : yt.rules?.select(e);
            return o ? o in a && a[o] ? a[o] : a.other ?? a.one ?? `Missing plural form: ${o}` : (b.warn("i18n", `No plural selection for ${qt} with count ${e}`), a.other ?? a.one ?? "Translation error")
        },
        context(a, e) {
            let t = `${a}.${e}`,
                o = `${a}.default`,
                r = e ? ft(bt[qt], t) : null;
            if (Ia(r) || (r = ft(bt[qt], o)), Ia(r) || (r = e ? ft(bt[mo], t) : null, Ia(r) || (r = ft(bt[mo], o)), Ia(r))) return r
        },
        t(a, e, t) {
            let o = yt.context(a, e?.context);
            if (Ia(o) || (o = ft(bt[qt], a)), Ia(o) || (o = ft(bt[mo], a)), !Ia(o)) return "String not found!";
            if (_l(o) && (o = yt.pluralize(o, e?.count)), e) {
                let r = {
                    ...e
                };
                for (let n in t)
                    if (!(!r[n] || typeof t[n] != "function")) try {
                        r[n] = t[n](r[n].toString())
                    } catch (s) {
                        b.stacktrace("i18n", `Error formatting ${n} in ${a}:`, s), r[n] = r[n].toString()
                    }
                o = so(o, r)
            }
            return typeof o != "string" ? "String not found!" : o
        },
        ns(a) {
            return {
                t: (e, t, o) => {
                    let r = `${a}.${e}`;
                    return yt.t(r, t, o)
                },
                ns: e => yt.ns(`${a}.${e}`),
                getFullKey: e => `${a}.${e}`
            }
        }
    };
    yt.init({
        translations: Li
    });
    Ai = yt, p = yt.t
});
var Vl, kn, Ti = x(() => {
    Vl = a => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), kn = (...a) => a.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim()
});
var Gl, Kl = x(() => {
    Gl = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }
});
var Aa, Ei = x(() => {
    I();
    Kl();
    Ti();
    Aa = bn(({
        color: a = "currentColor",
        size: e = 24,
        strokeWidth: t = 2,
        absoluteStrokeWidth: o,
        className: r = "",
        children: n,
        iconNode: s,
        ...d
    }, l) => Uo("svg", {
        ref: l,
        ...Gl,
        width: e,
        height: e,
        stroke: a,
        strokeWidth: o ? Number(t) * 24 / Number(e) : t,
        className: kn("lucide", r),
        ...d
    }, [...s.map(([u, c]) => Uo(u, c)), ...Array.isArray(n) ? n : [n]]))
});
var S, U = x(() => {
    I();
    Ti();
    Ei();
    S = (a, e) => {
        let t = bn(({
            className: o,
            ...r
        }, n) => Uo(Aa, {
            ref: n,
            iconNode: e,
            className: kn(`lucide-${Vl(a)}`, o),
            ...r
        }));
        return t.displayName = `${a}`, t
    }
});
var Sg, jo, $l = x(() => {
    U();
    Sg = [
        ["path", {
            d: "M12 17V3",
            key: "1cwfxf"
        }],
        ["path", {
            d: "m6 11 6 6 6-6",
            key: "12ii2o"
        }],
        ["path", {
            d: "M19 21H5",
            key: "150jfl"
        }]
    ], jo = S("ArrowDownToLine", Sg)
});
var Lg, fa, Zl = x(() => {
    U();
    Lg = [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
            key: "3c2336"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ], fa = S("BadgeCheck", Lg)
});
var Ig, pa, Xl = x(() => {
    U();
    Ig = [
        ["path", {
            d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",
            key: "ezmyqa"
        }],
        ["path", {
            d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
            key: "e1hn23"
        }]
    ], pa = S("Braces", Ig)
});
var Ag, Ye, Jl = x(() => {
    U();
    Ag = [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ], Ye = S("Check", Ag)
});
var Tg, Ta, Yl = x(() => {
    U();
    Tg = [
        ["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]
    ], Ta = S("ChevronDown", Tg)
});
var Eg, Ht, Ql = x(() => {
    U();
    Eg = [
        ["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]
    ], Ht = S("ChevronRight", Eg)
});
var Mg, Pt, eu = x(() => {
    U();
    Mg = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }]
    ], Pt = S("CircleAlert", Mg)
});
var Dg, zt, tu = x(() => {
    U();
    Dg = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ], zt = S("CircleCheck", Dg)
});
var Pg, qo, au = x(() => {
    U();
    Pg = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
            key: "1h4pet"
        }],
        ["path", {
            d: "M12 18V6",
            key: "zqpxq5"
        }]
    ], qo = S("CircleDollarSign", Pg)
});
var zg, it, ou = x(() => {
    U();
    zg = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
            key: "1u773s"
        }],
        ["path", {
            d: "M12 17h.01",
            key: "p32p05"
        }]
    ], it = S("CircleHelp", zg)
});
var Bg, Wt, ru = x(() => {
    U();
    Bg = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "m15 9-6 6",
            key: "1uzhvr"
        }],
        ["path", {
            d: "m9 9 6 6",
            key: "z0biqf"
        }]
    ], Wt = S("CircleX", Bg)
});
var Ng, Ho, nu = x(() => {
    U();
    Ng = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["polyline", {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }]
    ], Ho = S("Clock", Ng)
});
var Fg, Wo, iu = x(() => {
    U();
    Fg = [
        ["path", {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }],
        ["path", {
            d: "M10 14 21 3",
            key: "gplh6r"
        }],
        ["path", {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }]
    ], Wo = S("ExternalLink", Fg)
});
var Og, _o, su = x(() => {
    U();
    Og = [
        ["path", {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]
    ], _o = S("Eye", Og)
});
var Rg, Ea, du = x(() => {
    U();
    Rg = [
        ["path", {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
            key: "1kt360"
        }]
    ], Ea = S("Folder", Rg)
});
var Ug, xt, lu = x(() => {
    U();
    Ug = [
        ["path", {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }],
        ["path", {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }]
    ], xt = S("Github", Ug)
});
var jg, Ma, uu = x(() => {
    U();
    jg = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }],
        ["path", {
            d: "M2 12h20",
            key: "9i4pu4"
        }]
    ], Ma = S("Globe", jg)
});
var qg, Vo, cu = x(() => {
    U();
    qg = [
        ["path", {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky"
        }],
        ["path", {
            d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
            key: "4oyue0"
        }],
        ["path", {
            d: "m18 15-2-2",
            key: "60u0ii"
        }],
        ["path", {
            d: "m15 18-2-2",
            key: "6p76be"
        }]
    ], Vo = S("HeartHandshake", qg)
});
var Hg, Go, fu = x(() => {
    U();
    Hg = [
        ["path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }],
        ["path", {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }],
        ["path", {
            d: "M12 7v5l4 2",
            key: "1fdv2h"
        }]
    ], Go = S("History", Hg)
});
var Wg, je, pu = x(() => {
    U();
    Wg = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M12 16v-4",
            key: "1dtifu"
        }],
        ["path", {
            d: "M12 8h.01",
            key: "e9boi3"
        }]
    ], je = S("Info", Wg)
});
var _g, Ko, mu = x(() => {
    U();
    _g = [
        ["path", {
            d: "M10 8h.01",
            key: "1r9ogq"
        }],
        ["path", {
            d: "M12 12h.01",
            key: "1mp3jc"
        }],
        ["path", {
            d: "M14 8h.01",
            key: "1primd"
        }],
        ["path", {
            d: "M16 12h.01",
            key: "1l6xoz"
        }],
        ["path", {
            d: "M18 8h.01",
            key: "emo2bl"
        }],
        ["path", {
            d: "M6 8h.01",
            key: "x9i8wu"
        }],
        ["path", {
            d: "M7 16h10",
            key: "wp8him"
        }],
        ["path", {
            d: "M8 12h.01",
            key: "czm47f"
        }],
        ["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }]
    ], Ko = S("Keyboard", _g)
});
var Vg, $o, hu = x(() => {
    U();
    Vg = [
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "3",
            rx: "1",
            key: "1g98yp"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "14",
            y: "3",
            rx: "1",
            key: "6d4xhi"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "14",
            y: "14",
            rx: "1",
            key: "nxv5o0"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "14",
            rx: "1",
            key: "1bb6yr"
        }]
    ], $o = S("LayoutGrid", Vg)
});
var Gg, Zo, gu = x(() => {
    U();
    Gg = [
        ["path", {
            d: "M21 6H3",
            key: "1jwq7v"
        }],
        ["path", {
            d: "M7 12H3",
            key: "13ou7f"
        }],
        ["path", {
            d: "M7 18H3",
            key: "1sijw9"
        }],
        ["path", {
            d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",
            key: "qth677"
        }],
        ["path", {
            d: "M11 10v4h4",
            key: "172dkj"
        }]
    ], Zo = S("ListRestart", Gg)
});
var Kg, Xo, bu = x(() => {
    U();
    Kg = [
        ["path", {
            d: "M8 3H5a2 2 0 0 0-2 2v3",
            key: "1dcmit"
        }],
        ["path", {
            d: "M21 8V5a2 2 0 0 0-2-2h-3",
            key: "1e4gt3"
        }],
        ["path", {
            d: "M3 16v3a2 2 0 0 0 2 2h3",
            key: "wsl5sc"
        }],
        ["path", {
            d: "M16 21h3a2 2 0 0 0 2-2v-3",
            key: "18trek"
        }]
    ], Xo = S("Maximize", Kg)
});
var $g, Jo, yu = x(() => {
    U();
    $g = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }]
    ], Jo = S("Minus", $g)
});
var Zg, Yo, xu = x(() => {
    U();
    Zg = [
        ["path", {
            d: "M12 22v-9",
            key: "x3hkom"
        }],
        ["path", {
            d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",
            key: "2ntwy6"
        }],
        ["path", {
            d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",
            key: "1pmm1c"
        }],
        ["path", {
            d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",
            key: "12ttoo"
        }]
    ], Yo = S("PackageOpen", Zg)
});
var Xg, _t, vu = x(() => {
    U();
    Xg = [
        ["circle", {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w"
        }],
        ["circle", {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f"
        }],
        ["circle", {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn"
        }],
        ["circle", {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx"
        }],
        ["path", {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
            key: "12rzf8"
        }]
    ], _t = S("Palette", Xg)
});
var Jg, Vt, wu = x(() => {
    U();
    Jg = [
        ["path", {
            d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
            key: "1a8usu"
        }],
        ["path", {
            d: "m15 5 4 4",
            key: "1mk7zo"
        }]
    ], Vt = S("Pencil", Jg)
});
var Yg, Qo, ku = x(() => {
    U();
    Yg = [
        ["path", {
            d: "m2 22 1-1h3l9-9",
            key: "1sre89"
        }],
        ["path", {
            d: "M3 21v-3l9-9",
            key: "hpe2y6"
        }],
        ["path", {
            d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
            key: "196du1"
        }]
    ], Qo = S("Pipette", Yg)
});
var Qg, Gt, Cu = x(() => {
    U();
    Qg = [
        ["path", {
            d: "M12 22v-5",
            key: "1ega77"
        }],
        ["path", {
            d: "M9 8V2",
            key: "14iosj"
        }],
        ["path", {
            d: "M15 8V2",
            key: "18g5xt"
        }],
        ["path", {
            d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",
            key: "osxo6l"
        }]
    ], Gt = S("Plug", Qg)
});
var eb, er, Su = x(() => {
    U();
    eb = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "M12 5v14",
            key: "s699le"
        }]
    ], er = S("Plus", eb)
});
var tb, tr, Lu = x(() => {
    U();
    tb = [
        ["path", {
            d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "14sxne"
        }],
        ["path", {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }],
        ["path", {
            d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
            key: "1hlbsb"
        }],
        ["path", {
            d: "M16 16h5v5",
            key: "ccwih5"
        }]
    ], tr = S("RefreshCcw", tb)
});
var ab, ar, Iu = x(() => {
    U();
    ab = [
        ["path", {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }],
        ["path", {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }],
        ["path", {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }],
        ["path", {
            d: "M8 16H3v5",
            key: "1cv678"
        }]
    ], ar = S("RefreshCw", ab)
});
var ob, st, Au = x(() => {
    U();
    ob = [
        ["path", {
            d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
            key: "1p45f6"
        }],
        ["path", {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }]
    ], st = S("RotateCw", ob)
});
var rb, Da, Tu = x(() => {
    U();
    rb = [
        ["path", {
            d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
            key: "1c8476"
        }],
        ["path", {
            d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
            key: "1ydtos"
        }],
        ["path", {
            d: "M7 3v4a1 1 0 0 0 1 1h7",
            key: "t51u73"
        }]
    ], Da = S("Save", rb)
});
var nb, or, Eu = x(() => {
    U();
    nb = [
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }],
        ["path", {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }]
    ], or = S("Search", nb)
});
var ib, rr, Mu = x(() => {
    U();
    ib = [
        ["path", {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]
    ], rr = S("Settings", ib)
});
var sb, nr, Du = x(() => {
    U();
    sb = [
        ["path", {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }],
        ["path", {
            d: "M12 8v4",
            key: "1got3b"
        }],
        ["path", {
            d: "M12 16h.01",
            key: "1drbdi"
        }]
    ], nr = S("ShieldAlert", sb)
});
var db, ir, Pu = x(() => {
    U();
    db = [
        ["path", {
            d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
            key: "ztvudi"
        }],
        ["path", {
            d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
            key: "1b2hhj"
        }],
        ["path", {
            d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",
            key: "2ebpfo"
        }],
        ["path", {
            d: "M2 7h20",
            key: "1fcdvo"
        }],
        ["path", {
            d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",
            key: "6c3vgh"
        }]
    ], ir = S("Store", db)
});
var lb, sr, zu = x(() => {
    U();
    lb = [
        ["rect", {
            width: "20",
            height: "6",
            x: "2",
            y: "4",
            rx: "2",
            key: "qdearl"
        }],
        ["rect", {
            width: "20",
            height: "6",
            x: "2",
            y: "14",
            rx: "2",
            key: "1xrn6j"
        }]
    ], sr = S("StretchHorizontal", lb)
});
var ub, dr, Bu = x(() => {
    U();
    ub = [
        ["path", {
            d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
            key: "vktsd0"
        }],
        ["circle", {
            cx: "7.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "kqv944"
        }]
    ], dr = S("Tag", ub)
});
var cb, Pa, Nu = x(() => {
    U();
    cb = [
        ["path", {
            d: "M3 6h18",
            key: "d0wm0j"
        }],
        ["path", {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }],
        ["path", {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }],
        ["line", {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "17",
            key: "1uufr5"
        }],
        ["line", {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "17",
            key: "xtxkd"
        }]
    ], Pa = S("Trash2", cb)
});
var fb, Qe, Fu = x(() => {
    U();
    fb = [
        ["path", {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }],
        ["path", {
            d: "M12 9v4",
            key: "juzpu7"
        }],
        ["path", {
            d: "M12 17h.01",
            key: "p32p05"
        }]
    ], Qe = S("TriangleAlert", fb)
});
var pb, lr, Ou = x(() => {
    U();
    pb = [
        ["path", {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }]
    ], lr = S("Twitter", pb)
});
var mb, ur, Ru = x(() => {
    U();
    mb = [
        ["path", {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }],
        ["circle", {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }]
    ], ur = S("User", mb)
});
var hb, We, Uu = x(() => {
    U();
    hb = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ], We = S("X", hb)
});
var oe = x(() => {
    Zl();
    Xl();
    eu();
    tu();
    ou();
    ru();
    Fu();
    $l();
    Jl();
    Yl();
    Ql();
    au();
    nu();
    iu();
    su();
    du();
    lu();
    uu();
    cu();
    fu();
    pu();
    mu();
    hu();
    gu();
    bu();
    yu();
    xu();
    vu();
    wu();
    ku();
    Cu();
    Su();
    Lu();
    Iu();
    Au();
    Tu();
    Eu();
    Mu();
    Du();
    Pu();
    zu();
    Bu();
    Nu();
    Ou();
    Ru();
    Uu();
    Ei();
});
var w, me = x(() => {
    "use strict";
    ee();
    Pd();
    Dt();
    Fe();
    _();
    V();
    Ot();
    oe();
    w = new class extends we {
        state = {};
        collections = [];
        panels = [];
        initialize() {
            this.registerCollection("settings", "Settings", Dd)
        }
        registerCollection(e, t, o) {
            if (this.collections.find(r => r.id == e)) return b.error("Settings", "Already have a collection with id " + e);
            this.collections.push({
                type: "collection",
                id: e,
                name: t,
                settings: o
            }), this.setupCollection(e), this.loadCollection(e)
        }
        removeCollection(e) {
            let t = this.collections.findIndex(o => o.id == e);
            if (t < 0) return b.error("Settings", "No collection with id " + e);
            this.collections.splice(t, 1)
        }
        registerPanel(e, t, o) {
            if (this.panels.find(u => u.id == e)) return b.error("Settings", "Already have a panel with id " + e);
            let {
                element: r,
                onClick: n,
                order: s = 1,
                type: d = "settings"
            } = o, l = {
                id: e,
                type: d,
                order: s,
                get label() {
                    return p(`Panels.${e}`) || t
                },
                section: e,
                icon: o.icon,
                searchable: o.searchable
            };
            o.manager && (l.manager = o.manager), n && (l.clickListener = n), r && (l.element = r instanceof C.React.Component ? () => C.React.createElement(r, {}) : typeof r == "function" ? r : () => r), this.panels.push(l)
        }
        registerAddonPanel(e) {
            let t = e.prefix + "s",
                o = p(`Panels.${t}`);
            this.registerPanel(t, o, {
                order: e.order,
                type: "addon",
                manager: e,
                icon: e.prefix === "plugin" ? Gt : _t,
                searchable: () => e.addonList.flatMap(r => [r.name, r.filename])
            })
        }
        removePanel(e) {
            let t = this.panels.findIndex(o => o.id == e);
            if (t < 0) return b.error("Settings", "No collection with id " + e);
            this.panels.splice(t, 1)
        }
        getPath(e, t = "", o = "") {
            let r = e.length == 3 ? e[0] : t,
                n = e.length == 3 ? e[1] : e.length == 2 ? e[0] : o,
                s = e[e.length - 1];
            return {
                collection: r,
                category: n,
                setting: s
            }
        }
        setupCollection(e) {
            let t = this.collections.find(n => n.id == e);
            if (!t) return;
            this.state[t.id] || (this.state[t.id] = {});
            let o = t.name;
            Object.defineProperty(t, "name", {
                enumerable: !0,
                get: () => p(`Collections.${t.id}.name`) || o
            });
            let r = t.settings;
            for (let n = 0; n < r.length; n++) {
                let s = r[n];
                this.state[t.id].hasOwnProperty(s.id) || (this.state[t.id][s.id] = {});
                let d = s.name;
                Object.defineProperty(s, "name", {
                    enumerable: !0,
                    get: () => p(`Collections.${t.id}.${s.id}.name`) || d
                });
                for (let l = 0; l < s.settings.length; l++) {
                    let u = s.settings[l];
                    this.state[t.id][s.id].hasOwnProperty(u.id) || (this.state[t.id][s.id][u.id] = u.value), u.defaultValue = u.value;
                    let c = u.name,
                        f = u.note;
                    if (Object.defineProperties(u, {
                            name: {
                                enumerable: !0,
                                get: () => p(`Collections.${t.id}.${s.id}.${u.id}.name`) || c
                            },
                            note: {
                                enumerable: !0,
                                get: () => p(`Collections.${t.id}.${s.id}.${u.id}.note`) || f
                            }
                        }), u.options)
                        for (let g of u.options) {
                            let k = g.label;
                            Object.defineProperty(g, "label", {
                                enumerable: !0,
                                get: () => p(`Collections.${t.id}.${s.id}.${u.id}.options.${g.id??g.value}`) || k
                            })
                        }
                    if (u.hasOwnProperty("disabled") || !u.enableWith && !u.disableWith) continue;
                    let m = u.enableWith ?? u.disableWith,
                        h = this.getPath(m.split("."), t.id, s.id);
                    Object.defineProperty(u, "disabled", {
                        enumerable: !0,
                        get: () => {
                            let g = this.state[h.collection][h.category][h.setting];
                            return u.enableWith ? !g : g
                        }
                    })
                }
            }
        }
        saveSettings() {
            for (let e in this.state) this.saveCollection(e)
        }
        loadSettings() {
            for (let e in this.state) this.loadCollection(e)
        }
        saveCollection(e) {
            Q.set(e, this.state[e])
        }
        loadCollection(e) {
            let t = Q.get(e);
            if (!t) return this.saveCollection(e);
            for (let o in this.state[e]) {
                t[o] || Object.assign(t, {
                    [o]: this.state[e][o]
                });
                for (let r in this.state[e][o]) {
                    if (t[o][r] == null) continue;
                    let n = this.getSetting(e, o, r);
                    switch (n?.type) {
                        case "radio":
                        case "dropdown": {
                            n.options.some(d => d.value == t[o][r]) && (this.state[e][o][r] = t[o][r]);
                            break
                        }
                        default:
                            this.state[e][o][r] = t[o][r]
                    }
                }
            }
            this.saveCollection(e)
        }
        resetCollection(e) {
            let t = this.collections.find(r => r.id == e);
            if (!t) return;
            let o = t.settings;
            for (let r = 0; r < o.length; r++) {
                let n = o[r];
                for (let s = 0; s < n.settings.length; s++) {
                    let d = n.settings[s];
                    this.get(t.id, n.id, d.id) != d.defaultValue && this.set(t.id, n.id, d.id, d.defaultValue)
                }
            }
        }
        onSettingChange(e, t, o, r) {
            this.state[e][t][o] = r, N.dispatch("setting-updated", e, t, o, r), this.emitChange(), this.saveCollection(e)
        }
        getSetting(e, t, o) {
            return arguments.length == 2 && (o = t, t = e, e = "settings"), this.collections.find(r => r.id == e)?.settings.find(r => r.id == t)?.settings.find(r => r.id == o)
        }
        get(e, t, o) {
            return arguments.length == 2 && (o = t, t = e, e = "settings"), !this.state[e] || !this.state[e][t] ? !1 : this.state[e][t][o]
        }
        set(e, t, o, r) {
            return arguments.length == 3 && (r = o, o = t, t = e, e = "settings"), this.onSettingChange(e, t, o, r)
        }
        on(e, t, o, r) {
            let n = (s, d, l, u) => {
                s !== e || d !== t || l !== o || r(u)
            };
            return N.on("setting-updated", n), () => {
                N.off("setting-updated", n)
            }
        }
    }
});
var $, Kt = x(() => {
    "use strict";
    ee();
    _();
    pe();
    $ = class {
        static _patches = [];
        static get patches() {
            return this._patches || (this._patches = [])
        }
        static getPatchesByCaller(e) {
            if (!e) return [];
            let t = [];
            for (let o of this.patches)
                for (let r of o.children) r.caller === e && t.push(r);
            return t
        }
        static unpatchAll(e) {
            typeof e == "string" && (e = this.getPatchesByCaller(e));
            for (let t of e) t.unpatch()
        }
        static resolveModule(e) {
            return !e || typeof e == "function" || typeof e == "object" && !Array.isArray(e) ? e : typeof e == "string" ? C[e] : Array.isArray(e) ? te(e) : null
        }
        static makeOverride(e) {
            return function(...o) {
                let r;
                if (!e.children || !e.children.length) return e.originalFunction.apply(this, o);
                for (let s of e.children.filter(d => d.type === "before")) try {
                    s.callback(this, o)
                } catch (d) {
                    b.err("Patcher", `Could not fire before callback of ${e.functionName} for ${s.caller}`, d)
                }
                let n = e.children.filter(s => s.type === "instead");
                if (!n.length) r = e.originalFunction.apply(this, o);
                else
                    for (let s of n) try {
                        let d = s.callback(this, o, e.originalFunction.bind(this));
                        typeof d < "u" && (r = d)
                    } catch (d) {
                        b.err("Patcher", `Could not fire instead callback of ${e.functionName} for ${s.caller}`, d)
                    }
                for (let s of e.children.filter(d => d.type === "after")) try {
                    let d = s.callback(this, o, r);
                    typeof d < "u" && (r = d)
                } catch (d) {
                    b.err("Patcher", `Could not fire after callback of ${e.functionName} for ${s.caller}`, d)
                }
                return r
            }
        }
        static rePatch(e) {
            let t = this.makeOverride(e);
            e.proxyFunction = t, e.module[e.functionName] = t
        }
        static makePatch(e, t, o) {
            let r = {
                name: o,
                module: e,
                functionName: t,
                originalFunction: e[t],
                proxyFunction: void 0,
                revert: () => {
                    r.module[r.functionName] = r.originalFunction, r.proxyFunction = void 0, r.children = []
                },
                counter: 0,
                children: []
            };
            return r.proxyFunction = e[t] = this.makeOverride(r), Object.assign(e[t], r.originalFunction), e[t].__originalFunction = r.originalFunction, e[t].toString = () => r.originalFunction.toString(), this.patches.push(r), r
        }
        static before(e, t, o, r, n = {}) {
            return this.pushChildPatch(e, t, o, r, Object.assign(n, {
                type: "before"
            }))
        }
        static after(e, t, o, r, n = {}) {
            return this.pushChildPatch(e, t, o, r, Object.assign(n, {
                type: "after"
            }))
        }
        static instead(e, t, o, r, n = {}) {
            return this.pushChildPatch(e, t, o, r, Object.assign(n, {
                type: "instead"
            }))
        }
        static pushChildPatch(e, t, o, r, n = {}) {
            let {
                type: s = "after",
                forcePatch: d = !0
            } = n, l = this.resolveModule(t);
            if (!l || (!l[o] && d && (l[o] = function() {}), !(l[o] instanceof Function))) return null;
            typeof t == "string" && (n.displayName = t);
            let c = `${n.displayName||l.displayName||l.name||l.constructor.displayName||l.constructor.name}.${o}`,
                f = this.patches.find(h => h.module == l && h.functionName == o) || this.makePatch(l, o, c);
            f.proxyFunction || this.rePatch(f);
            let m = {
                caller: e,
                type: s,
                id: f.counter,
                callback: r,
                unpatch: () => {
                    if (f.children.splice(f.children.findIndex(h => h.id === m.id && h.type === s), 1), f.children.length <= 0) {
                        let h = this.patches.findIndex(g => g.module == l && g.functionName == o);
                        if (h < 0) return;
                        this.patches[h].revert(), this.patches.splice(h, 1)
                    }
                }
            };
            return f.children.push(m), f.counter++, m.unpatch
        }
    }
});
var q, et = x(() => {
    "use strict";
    Ot();
    me();
    ee();
    q = new class extends we {
        _toasts = [];
        toastKey = 0;
        get shouldShowToasts() {
            return w.get("settings", "general", "showToasts")
        }
        addToast(e) {
            this._toasts = [...this._toasts, e], this.emitChange(), setTimeout(() => {
                this.removeToast(e.key)
            }, e.timeout)
        }
        removeToast(e) {
            this._toasts = this._toasts.filter(t => t.key !== e), this.emitChange()
        }
        get toasts() {
            return this._toasts
        }
        show(e, t = {}) {
            try {
                let {
                    type: o = "default",
                    icon: r = !0,
                    timeout: n = 3e3,
                    forceShow: s = !1
                } = t;
                if (!this.shouldShowToasts && !s) return;
                this.addToast({
                    key: this.toastKey++,
                    content: e,
                    type: o,
                    icon: r,
                    timeout: n
                })
            } catch (o) {
                b.stacktrace("Toasts", "Unable to show toast", o)
            }
        }
        default (e, t = {}) {
            return this.show(e, {
                ...t,
                type: "default"
            })
        }
        info(e, t = {}) {
            return this.show(e, {
                ...t,
                type: "info"
            })
        }
        success(e, t = {}) {
            return this.show(e, {
                ...t,
                type: "success"
            })
        }
        warning(e, t = {}) {
            return this.show(e, {
                ...t,
                type: "warning"
            })
        }
        error(e, t = {}) {
            return this.show(e, {
                ...t,
                type: "error"
            })
        }
    }
});
var Te, Cn = x(() => {
    "use strict";
    Te = class extends Error {
        file;
        error;
        type;
        constructor(e, t, o, r, n) {
            super(o), this.name = e, this.file = t, this.error = r, this.type = n
        }
    }
});
var ju, qu, Hu, Wu, _u, Vu, Gu, Ku, $u, Zu, Xu, Ju, Yu, Qu, ec, tc, Mi, ac, oc = x(() => {
    "use strict";
    ju = "bd-window-minimize", qu = "bd-window-maximize", Hu = "bd-relaunch-app", Wu = "bd-run-script", _u = "bd-did-navigate-in-page", Vu = "bd-open-devtools", Gu = "bd-close-devtools", Ku = "bd-toggle-devtools", $u = "bd-open-window", Zu = "bd-inspect-element", Xu = "bd-minimum-size", Ju = "bd-window-size", Yu = "bd-remove-devtools-message", Qu = "bd-open-dialog", ec = "bd-get-accent-color", tc = "bd-open-path", Mi = "bd-set-allow-preload-override", ac = "bd-get-allow-preload-override"
});
var Se, J, ze = x(() => {
    "use strict";
    Se = require("electron");
    oc();
    Fe();
    J = new class {
        constructor() {
            Se.ipcRenderer.on(_u, () => N.dispatch("navigate")), Se.ipcRenderer.on(qu, () => N.dispatch("maximize")), Se.ipcRenderer.on(ju, () => N.dispatch("minimize"))
        }
        openDevTools() {
            return Se.ipcRenderer.send(Vu)
        }
        closeDevTools() {
            return Se.ipcRenderer.send(Gu)
        }
        toggleDevTools() {
            return Se.ipcRenderer.send(Ku)
        }
        relaunch(e) {
            return Se.ipcRenderer.send(Hu, e)
        }
        runScript(e) {
            return Se.ipcRenderer.invoke(Wu, e)
        }
        openWindow(e, t) {
            return Se.ipcRenderer.invoke($u, e, t)
        }
        inspectElement() {
            return Se.ipcRenderer.send(Zu)
        }
        setMinimumSize(e, t) {
            return Se.ipcRenderer.send(Xu, e, t)
        }
        setWindowSize(e, t) {
            return Se.ipcRenderer.send(Ju, e, t)
        }
        stopDevtoolsWarning() {
            return Se.ipcRenderer.send(Yu)
        }
        openDialog(e) {
            return Se.ipcRenderer.invoke(Qu, e)
        }
        getSystemAccentColor() {
            return Se.ipcRenderer.invoke(ec)
        }
        openPath(e) {
            return Se.ipcRenderer.send(tc, e)
        }
        allowPreloadOverride = {
            async set(e) {
                await Se.ipcRenderer.invoke(Mi, e)
            },
            async get() {
                return Se.ipcRenderer.invoke(ac)
            },
            async toggle() {
                await Se.ipcRenderer.invoke(Mi, !await this.get())
            }
        }
    }
});
var P, _e = x(() => {
    "use strict";
    ee();
    P = class {
        static get screenWidth() {
            return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        }
        static get screenHeight() {
            return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        }
        static get bdHead() {
            return this.getElement("bd-head")
        }
        static get bdBody() {
            return this.getElement("bd-body")
        }
        static get bdScripts() {
            return this.getElement("bd-scripts")
        }
        static get bdStyles() {
            return this.getElement("bd-styles")
        }
        static get bdThemes() {
            return this.getElement("bd-themes")
        }
        static get bdCustomCSS() {
            return this.getElement("style#customcss")
        }
        static initialize() {}
        static escapeID(e) {
            return CSS.escape(e)
        }
        static getElement(e, t = document.documentElement) {
            return e instanceof Node ? e : t.querySelector(e)
        }
        static createElement(e, t = {}, ...o) {
            let r = document.createElement(e);
            Object.assign(r, t);
            let n = Array.prototype.flat.call(o, 1 / 0).filter(s => s != null);
            return r.append(...n), t.target && (b.warn("DOM.createElement", 'Usage of the "target" option has been deprecated and will be removed in the next version.'), (typeof t.target == "string" ? document.querySelector(t.target) : t.target)?.append(r)), r
        }
        static parseHTML(e, t = !1) {
            let o = document.createElement("template");
            o.innerHTML = e.trim();
            let r = o.content.cloneNode(!0);
            return t ? r : r.childNodes.length > 1 ? r.childNodes : r.childNodes[0]
        }
        static removeStyle(e) {
            e = this.escapeID(e);
            let t = this.getElement(`#${e}`, this.bdStyles);
            t && t.remove()
        }
        static injectStyle(e, t) {
            e = this.escapeID(e);
            let o = this.getElement(`#${e}`, this.bdStyles) || this.createElement("style", {
                id: e
            });
            o.textContent = t, this.bdStyles.append(o)
        }
        static unlinkStyle(e) {
            return this.removeStyle(e)
        }
        static linkStyle(e, t, {
            documentHead: o = !1
        } = {}) {
            return e = this.escapeID(e), new Promise(r => {
                let n = this.getElement(`#${e}`, this.bdStyles) || this.createElement("link", {
                    id: e
                });
                n.rel = "stylesheet", n.href = t, n.onload = r, (o ? document.head : this.bdStyles).append(n)
            })
        }
        static removeTheme(e) {
            e = this.escapeID(e);
            let t = this.getElement(`#${e}`, this.bdThemes);
            t && t.remove()
        }
        static injectTheme(e, t) {
            e = this.escapeID(e);
            let o = this.getElement(`#${e}`, this.bdThemes) || this.createElement("style", {
                id: e
            });
            o.textContent = t, this.bdThemes.append(o)
        }
        static updateCustomCSS(e) {
            this.bdCustomCSS.textContent = e
        }
        static removeScript(e) {
            e = this.escapeID(e);
            let t = this.getElement(`#${e}`, this.bdScripts);
            t && t.remove()
        }
        static injectScript(e, t) {
            return e = this.escapeID(e), new Promise((o, r) => {
                let n = this.getElement(`#${e}`, this.bdScripts) || this.createElement("script", {
                    id: e
                });
                n.src = t, n.onload = o, n.onerror = r, this.bdScripts.append(n)
            })
        }
        static animate({
            timing: e = r => r,
            update: t,
            duration: o
        }) {
            let r = performance.now(),
                n = requestAnimationFrame(function s(d) {
                    let l = (d - r) / o;
                    l > 1 && (l = 1);
                    let u = e(l);
                    t(u), l < 1 && (n = requestAnimationFrame(s))
                });
            return () => cancelAnimationFrame(n)
        }
        static onAdded(e, t) {
            if (document.body.querySelector(e)) return t(document.body.querySelector(e));
            let o = new MutationObserver(r => {
                for (let n = 0; n < r.length; n++)
                    for (let s = 0; s < r[n].addedNodes.length; s++) {
                        let d = r[n].addedNodes[s];
                        if (d.nodeType !== 1) continue;
                        let l = d.matches(e) && d,
                            u = d.querySelector(e);
                        if (l || u) return o.disconnect(), t(l || u)
                    }
            });
            return o.observe(document.body, {
                subtree: !0,
                childList: !0
            }), () => {
                o.disconnect()
            }
        }
        static onRemoved(e, t) {
            let o = new MutationObserver(r => {
                for (let n = 0; n < r.length; n++) {
                    let s = r[n],
                        d = Array.from(s.removedNodes),
                        l = d.indexOf(e) > -1,
                        u = d.some(c => c.contains(e));
                    (l || u) && (o.disconnect(), t())
                }
            });
            return o.observe(document.body, {
                subtree: !0,
                childList: !0
            }), () => {
                o.disconnect()
            }
        }
    };
    P.createElement("bd-head", {
        target: document.body
    });
    P.createElement("bd-body", {
        target: document.body
    });
    P.createElement("bd-scripts", {
        target: P.bdHead
    });
    P.createElement("bd-styles", {
        target: P.bdHead
    });
    P.createElement("bd-themes", {
        target: P.bdHead
    });
    P.createElement("style", {
        id: "customcss",
        target: P.bdHead
    })
});
var bb, cr, rc = x(() => {
    "use strict";
    pt();
    bb = /\[(.+?)]/, cr = class extends String {
        format(e) {
            return so(this, e)
        }
        replaceLink(e) {
            let t = this.match(bb);
            if (!t) return [this];
            let o = this.split(t[0]),
                r = e(t[1]);
            return o.splice(1, 0, r), o
        }
    }
});

function nc(a) {
    var e, t, o = "";
    if (typeof a == "string" || typeof a == "number") o += a;
    else if (typeof a == "object")
        if (Array.isArray(a)) {
            var r = a.length;
            for (e = 0; e < r; e++) a[e] && (t = nc(a[e])) && (o && (o += " "), o += t)
        } else
            for (t in a) a[t] && (o && (o += " "), o += t);
    return o
}

function yb() {
    for (var a, e, t = 0, o = "", r = arguments.length; t < r; t++)(a = arguments[t]) && (e = nc(a)) && (o && (o += " "), o += e);
    return o
}
var O, be = x(() => {
    O = yb
});

function D({
    tag: a = "div",
    className: e = "",
    children: t = null,
    color: o = ic.STANDARD,
    size: r = sc.SIZE_14,
    selectable: n,
    strong: s,
    style: d,
    ...l
}) {
    return i.createElement(a, {
        className: O(o, r, e, {
            "bd-selectable": n,
            "bd-text-strong": s
        }),
        style: d,
        ...l
    }, t)
}
var ic, sc, dt = x(() => {
    "use strict";
    be();
    I();
    ic = Object.freeze({
        STANDARD: "bd-text-normal",
        MUTED: "bd-text-muted",
        ERROR: "bd-text-error",
        BRAND: "bd-text-brand",
        LINK: "bd-text-link",
        HEADER_PRIMARY: "bd-header-primary",
        HEADER_SECONDARY: "bd-header-secondary",
        STATUS_YELLOW: "bd-text-yellow",
        STATUS_GREEN: "bd-text-green",
        STATUS_RED: "bd-text-red",
        ALWAYS_WHITE: "bd-text-white",
        CUSTOM: null
    }), sc = Object.freeze({
        SIZE_10: "bd-text-10",
        SIZE_12: "bd-text-12",
        SIZE_14: "bd-text-14",
        SIZE_16: "bd-text-16",
        SIZE_20: "bd-text-20",
        SIZE_24: "bd-text-24",
        SIZE_32: "bd-text-32"
    });
    D.Colors = ic;
    D.Sizes = sc
});

function v({
    className: a,
    children: e,
    onClick: t,
    onKeyDown: o,
    buttonRef: r,
    disabled: n = !1,
    type: s = "button",
    look: d = Sn.FILLED,
    color: l = za.BRAND,
    size: u = dc.MEDIUM,
    grow: c = !0,
    ...f
}) {
    let m = xb(h => {
        h.preventDefault(), h.stopPropagation(), t?.(h)
    }, [t]);
    return i.createElement("button", {
        ...f,
        className: O("bd-button", a, d, l, u, c ? "bd-button-grow" : ""),
        ref: r,
        type: s === "button" ? void 0 : s,
        onClick: n ? () => {} : m,
        onKeyDown: n ? () => {} : o,
        disabled: n
    }, i.createElement("div", {
        className: "bd-button-content"
    }, e))
}
var xb, Sn, za, dc, xe = x(() => {
    "use strict";
    be();
    I();
    ({
        useCallback: xb
    } = i), Sn = Object.freeze({
        FILLED: "bd-button-filled",
        OUTLINED: "bd-button-outlined",
        LINK: "bd-button-link",
        BLANK: "bd-button-blank"
    }), za = Object.freeze({
        BRAND: "bd-button-color-brand",
        BLURPLE: "bd-button-color-blurple",
        RED: "bd-button-color-red",
        GREEN: "bd-button-color-green",
        YELLOW: "bd-button-color-yellow",
        PRIMARY: "bd-button-color-primary",
        LINK: "bd-button-color-link",
        WHITE: "bd-button-color-white",
        TRANSPARENT: "bd-button-color-transparent",
        CUSTOM: ""
    }), dc = Object.freeze({
        NONE: "",
        TINY: "bd-button-tiny",
        SMALL: "bd-button-small",
        MEDIUM: "bd-button-medium",
        LARGE: "bd-button-large",
        ICON: "bd-button-icon"
    });
    v.Looks = Sn;
    v.Colors = za;
    v.Sizes = dc
});

function vb(a) {
    return a.className || (a.className = ""), a.className = O(a.className, "bd-flex-child"), i.createElement(j, {
        ...a
    })
}

function j({
    children: a,
    className: e,
    style: t,
    shrink: o = 1,
    grow: r = 1,
    basis: n = "auto",
    direction: s = lc.HORIZONTAL,
    align: d = cc.STRETCH,
    justify: l = uc.START,
    wrap: u = fc.NO_WRAP,
    ...c
}) {
    return i.createElement("div", {
        ...c,
        className: O("bd-flex", s, l, d, u, e),
        style: Object.assign({
            flexShrink: o,
            flexGrow: r,
            flexBasis: n
        }, t)
    }, a)
}
var lc, uc, cc, fc, $t = x(() => {
    "use strict";
    be();
    I();
    lc = Object.freeze({
        VERTICAL: "bd-flex-vertical",
        HORIZONTAL: "bd-flex-horizontal",
        HORIZONTAL_REVERSE: "bd-flex-reverse"
    }), uc = Object.freeze({
        START: "bd-flex-justify-start",
        END: "bd-flex-justify-end",
        CENTER: "bd-flex-justify-center",
        BETWEEN: "bd-flex-justify-between",
        AROUND: "bd-flex-justify-around"
    }), cc = Object.freeze({
        START: "bd-flex-align-start",
        END: "bd-flex-align-end",
        CENTER: "bd-flex-align-center",
        STRETCH: "bd-flex-align-stretch",
        BASELINE: "bd-flex-align-baseline"
    }), fc = Object.freeze({
        NO_WRAP: "bd-flex-no-wrap",
        WRAP: "bd-flex-wrap",
        WRAP_REVERSE: "bd-flex-wrap-reverse"
    });
    j.Child = vb;
    j.Direction = lc;
    j.Align = cc;
    j.Justify = uc;
    j.Wrap = fc
});
var ho, Ln = x(() => {
    "use strict";
    I();
    be();
    ho = ({
        className: a,
        ...e
    }) => i.createElement("hr", {
        ...e,
        className: O("bd-divider", a)
    })
});

function Ba({
    id: a,
    className: e,
    children: t,
    justify: o
}) {
    return i.createElement(j, {
        id: a,
        className: O("bd-modal-header", e),
        grow: 0,
        shrink: 0,
        direction: j.Direction.HORIZONTAL,
        justify: o ?? j.Justify.START,
        align: j.Align.CENTER,
        wrap: j.Wrap.NO_WRAP
    }, t)
}
var In = x(() => {
    "use strict";
    be();
    I();
    $t()
});

function Na({
    id: a,
    className: e,
    children: t,
    scroller: o = !0
}) {
    return i.createElement("div", {
        id: a,
        className: O("bd-modal-content", {
            "bd-scroller-base bd-scroller-thin": o
        }, e)
    }, t)
}
var An = x(() => {
    "use strict";
    be();
    I()
});

function Le({
    className: a,
    transitionState: e,
    children: t,
    size: o = pc.DYNAMIC,
    style: r = mc.CUSTOM
}) {
    let n = e == 0 || e == 1,
        d = i.useContext(C.AccessibilityContext ?? {})?.reducedMotion?.enabled ?? document.documentElement?.classList.contains("reduce-motion"),
        l = C.ReactSpring.useSpring({
            opacity: n ? 1 : 0,
            transform: n || d ? "scale(1)" : "scale(0.7)",
            config: {
                duration: n ? 300 : 100,
                easing: n ? Di.Easing.inOut(Di.Easing.back()) : Di.Easing.quad,
                clamp: !0
            }
        });
    return i.createElement(wb, {
        disableTrack: !0
    }, i.createElement(C.ReactSpring.animated.div, {
        className: O("bd-modal-root", o, a, r),
        style: l
    }, t))
}
var Di, pc, mc, wb, Fa = x(() => {
    "use strict";
    be();
    I();
    _();
    pe();
    Di = te(["Easing"], {
        firstId: 615300,
        cacheId: "core-modalroot-anims"
    }), pc = Object.freeze({
        SMALL: "bd-modal-small",
        MEDIUM: "bd-modal-medium",
        LARGE: "bd-modal-large",
        DYNAMIC: ""
    }), mc = Object.freeze({
        STANDARD: "bd-modal-standard",
        CUSTOM: ""
    }), wb = de(a => a?.render?.toString().includes("impressionProperties") && a?.render?.toString().includes(".Provider"), {
        searchExports: !0,
        firstId: 305866,
        cacheId: "core-modalroot-focuslock"
    }) ?? i.Fragment;
    Le.Sizes = pc;
    Le.Styles = mc
});

function Zt({
    id: a,
    className: e,
    children: t,
    justify: o,
    direction: r,
    align: n,
    wrap: s
}) {
    return i.createElement(j, {
        id: a,
        className: O("bd-modal-footer", e),
        grow: 0,
        shrink: 0,
        direction: r ?? j.Direction.HORIZONTAL_REVERSE,
        justify: o ?? j.Justify.START,
        align: n ?? j.Align.STRETCH,
        wrap: s ?? j.Wrap.NO_WRAP
    }, t)
}
var fr = x(() => {
    "use strict";
    be();
    I();
    $t()
});

function Cb({
    err: a,
    index: e
}) {
    let [t, o] = bc(!1), r = yc(() => o(!t), [t]);

    function n() {
        let s = a?.error?.stack ?? a.stack;
        return !t || !s ? null : i.createElement("div", {
            className: "bd-addon-error-body"
        }, i.createElement(ho, null), i.createElement("div", {
            className: "bd-addon-error-stack"
        }, hc ? hc.codeBlock.react?.({
            content: s,
            lang: "js"
        }, null, {}) : s))
    }
    return i.createElement("details", {
        key: `${a.type}-${e}`,
        className: O("bd-addon-error", t ? "expanded" : "collapsed")
    }, i.createElement("summary", {
        className: "bd-addon-error-header",
        onClick: r
    }, i.createElement("div", {
        className: "bd-addon-error-icon"
    }, a.type == "plugin" ? i.createElement(Gt, null) : i.createElement(_t, null)), i.createElement("div", {
        className: "bd-addon-error-header-inner"
    }, i.createElement(D, {
        tag: "h3",
        size: D.Sizes.SIZE_16,
        color: D.Colors.HEADER_PRIMARY,
        strong: !0
    }, a.name), i.createElement("div", {
        className: "bd-addon-error-details"
    }, i.createElement(je, {
        className: "bd-addon-error-details-icon",
        size: "16px"
    }), i.createElement(D, {
        color: D.Colors.HEADER_SECONDARY,
        size: D.Sizes.SIZE_12
    }, a.message))), i.createElement(Ht, {
        className: "bd-addon-error-expander",
        size: "24px"
    })), n())
}

function gc(a, e) {
    return {
        id: a,
        errors: e,
        name: p(`Panels.${a}`)
    }
}

function Pi({
    transitionState: a,
    onClose: e,
    pluginErrors: t,
    themeErrors: o
}) {
    let r = kb(() => [t.length && gc("plugins", t), o.length && gc("themes", o)].filter(u => u), [t, o]),
        [n, s] = bc(r[0].id),
        d = yc(u => s(u), []),
        l = r.find(u => u.id === n);
    return i.createElement(Le, {
        transitionState: a,
        className: "bd-error-modal",
        size: Le.Sizes.MEDIUM
    }, i.createElement(Ba, {
        className: "bd-error-modal-header"
    }, i.createElement(j, {
        direction: j.Direction.VERTICAL
    }, i.createElement(D, {
        tag: "h1",
        size: D.Sizes.SIZE_14,
        color: D.Colors.HEADER_PRIMARY,
        strong: !0,
        style: {
            textTransform: "uppercase",
            marginBottom: "8px"
        }
    }, p("Modals.addonErrors")), i.createElement("div", {
        className: "bd-tab-bar"
    }, r.map(u => i.createElement("div", {
        onClick: () => {
            d(u.id)
        },
        className: O("bd-tab-item", u.id === l.id && "selected")
    }, u.name))))), i.createElement(Na, {
        className: "bd-error-modal-content"
    }, i.createElement("div", {
        className: "bd-addon-errors"
    }, l.errors.map((u, c) => i.createElement(Cb, {
        index: c,
        err: u
    })))), i.createElement(Zt, {
        className: "bd-error-modal-footer"
    }, i.createElement(v, {
        onClick: e
    }, p("Modals.okay"))))
}
var hc, bc, yc, kb, xc = x(() => {
    "use strict";
    I();
    V();
    dt();
    xe();
    $t();
    Ln();
    In();
    An();
    Fa();
    fr();
    oe();
    be();
    _();
    hc = C.SimpleMarkdownWrapper.defaultRules, {
        useState: bc,
        useCallback: yc,
        useMemo: kb
    } = i
});
var ce, Sb, ma = x(() => {
    "use strict";
    ee();
    I();
    ze();
    ce = class extends i.Component {
        constructor(e) {
            super(e), this.state = {
                hasError: !1
            }
        }
        componentDidCatch(e) {
            this.setState({
                hasError: !0
            }), b.stacktrace("ErrorBoundary", `React error detected for {name: ${this.props.name??"Unknown"}, id: ${this.props.id??"Unknown"}}`, e), typeof this.props.onError == "function" && this.props.onError(e)
        }
        render() {
            return this.state.hasError && this.props.fallback ? this.props.fallback : this.state.hasError && !this.props.hideError ? i.createElement("div", {
                onClick: () => J.openDevTools(),
                className: "react-error"
            }, "There was an unexpected Error. Click to open console for more details.") : this.props.children
        }
    }, Sb = ce.prototype.render;
    Object.defineProperty(ce.prototype, "render", {
        enumerable: !1,
        configurable: !1,
        set: function() {
            b.warn("ErrorBoundary", "Addon policy for plugins https://docs.betterdiscord.app/plugins/publishing/guidelines#scope")
        },
        get: () => Sb
    })
});

function Tn({
    transitionState: a,
    onClose: e,
    onCloseCallback: t,
    className: o,
    size: r = Le.Sizes.SMALL,
    header: n,
    children: s,
    danger: d = !1,
    onCancel: l = () => {},
    onConfirm: u = () => {},
    cancelText: c = p("Modals.cancel"),
    confirmText: f = p("Modals.okay")
}) {
    let m = Lb(null);
    return Ib(() => {
        setTimeout(() => m?.current?.focus?.(), 0)
    }, []), Ab(() => {
        t?.()
    }, [t]), i.createElement(Le, {
        transitionState: a,
        size: r,
        className: o
    }, i.createElement(Ba, null, i.createElement(D, {
        tag: "h1",
        size: D.Sizes.SIZE_20,
        color: D.Colors.HEADER_PRIMARY,
        strong: !0
    }, n)), i.createElement(Na, null, s), i.createElement(Zt, null, f && i.createElement(v, {
        type: "submit",
        buttonRef: m,
        color: d ? v.Colors.RED : v.Colors.BRAND,
        onClick: () => {
            u?.(), e?.()
        }
    }, f), c && i.createElement(v, {
        type: "button",
        look: v.Looks.LINK,
        color: v.Colors.PRIMARY,
        onClick: () => {
            l?.(), e?.()
        }
    }, c)))
}
var Lb, Ib, Ab, vc = x(() => {
    "use strict";
    I();
    V();
    Fa();
    In();
    fr();
    An();
    dt();
    xe();
    ({
        useRef: Lb,
        useEffect: Ib,
        useLayoutEffect: Ab
    } = i)
});

function Tb() {
    if (go = C.DiscordMarkdown, Oa = {}, go) {
        Oa = {
            ...go.rules,
            link: C.SimpleMarkdownWrapper.defaultRules.link
        };
        let a = Oa.link?.react;
        if (!a) return;
        Oa.link.react = function(...e) {
            let t = Reflect.apply(a, void 0, e);
            return t.props.className = "bd-link", t.props.target = "_blank", t.props.rel = "noopener noreferrer", t
        }
    }
}

function pr({
    className: a,
    children: e
}) {
    return !go && !Oa && Tb(), go ? i.createElement(go, {
        className: a ?? "",
        parser: C.SimpleMarkdownWrapper.parserFor(Oa),
        output: C.SimpleMarkdownWrapper.reactFor(C.SimpleMarkdownWrapper.ruleOutput(Oa, "react"))
    }, e) : i.createElement("div", {
        className: "bd-markdown-fallback"
    }, e)
}
var go, Oa, zi = x(() => {
    "use strict";
    I();
    _()
});

function Bi({
    onClick: a
}) {
    return i.createElement(v, {
        className: "bd-close-button",
        size: v.Sizes.ICON,
        look: v.Looks.BLANK,
        color: v.Colors.TRANSPARENT,
        onClick: a
    }, i.createElement(We, {
        size: "24px"
    }))
}
var wc = x(() => {
    "use strict";
    I();
    xe();
    oe()
});
var vt, En = x(() => {
    "use strict";
    _();
    pt();
    vt = class {
        static _parse;
        static _renderer;
        static parseToReact(e, t = !0) {
            return this._parse || this._initialize(), this._renderer(this._parse(e, {
                inline: t
            }))
        }
        static _initialize() {
            let e = C.SimpleMarkdownWrapper,
                t = e.defaultRules.link.react,
                o = Rt({}, e.defaultRules, {
                    link: {
                        react: function(r, n, s) {
                            let d = Reflect.apply(t, this, [r, n, s]);
                            return d.props.className = "bd-link", d.props.target = "_blank", d.props.rel = "noopener noreferrer", d
                        }
                    }
                });
            for (let r in o) o[r].requiredFirstCharacters && (o[r].requiredFirstCharacters = Object.values(o[r].requiredFirstCharacters));
            this._parse = e.parserFor(o), this._renderer = e.reactFor(e.ruleOutput(o, "react"))
        }
    }
});

function Nb({
    src: a
}) {
    return i.createElement("iframe", {
        src: a,
        title: "YouTube video player",
        frameBorder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowFullScreen: !0
    })
}

function Fb({
    src: a,
    poster: e
}) {
    return a.toLowerCase().includes("youtube.com") ? i.createElement(Nb, {
        src: a
    }) : i.createElement("video", {
        src: a,
        poster: e,
        controls: !0,
        className: "bd-changelog-poster"
    })
}

function Fi({
    transitionState: a,
    footer: e,
    title: t,
    subtitle: o,
    onClose: r,
    video: n,
    poster: s,
    banner: d,
    blurb: l,
    changes: u
}) {
    let c = Ni(() => i.createElement(Ba, {
            justify: j.Justify.BETWEEN
        }, i.createElement(j, {
            direction: j.Direction.VERTICAL
        }, i.createElement(D, {
            tag: "h1",
            size: D.Sizes.SIZE_20,
            strong: !0
        }, t), i.createElement(D, {
            size: D.Sizes.SIZE_12,
            color: D.Colors.MUTED
        }, o)), i.createElement(Bi, {
            onClick: r
        })), [t, o, r]),
        f = Ni(() => i.createElement(Zt, {
            justify: j.Justify.BETWEEN,
            direction: j.Direction.HORIZONTAL
        }, i.createElement(j.Child, {
            grow: "1",
            shrink: "1"
        }, e || Pb), !e && i.createElement(j.Child, {
            grow: "0",
            shrink: "0"
        }, zb, Bb)), [e]),
        m = Ni(() => {
            let h = [];
            n ? h.push(i.createElement(Fb, {
                src: n,
                poster: s
            })) : d && h.push(i.createElement("img", {
                src: d,
                className: "bd-changelog-poster"
            })), l && h.push(i.createElement("p", null, vt.parseToReact(l)));
            for (let g = 0; g < (u?.length ?? 0); g++) {
                let k = u[g],
                    L = "bd-changelog-" + k.type,
                    R = g == 0 ? " bd-changelog-first" : "";
                h.push(i.createElement("h1", {
                    className: `bd-changelog-title ${L}${R}`
                }, k.title)), k.blurb && h.push(i.createElement("p", null, vt.parseToReact(k.blurb)));
                let T = i.createElement("ul", null, k.items.map(H => i.createElement("li", null, vt.parseToReact(H))));
                h.push(T)
            }
            return h
        }, [l, n, d, s, u]);
    return i.createElement(Le, {
        className: "bd-changelog-modal",
        transitionState: a,
        size: Le.Sizes.MEDIUM,
        style: Le.Styles.STANDARD
    }, c, i.createElement(Na, null, m), (e || t === "BetterDiscord") && f)
}
var Ni, kc, Eb, Mb, Db, Pb, zb, Bb, Cc = x(() => {
    "use strict";
    I();
    _();
    V();
    Fa();
    In();
    fr();
    An();
    $t();
    dt();
    wc();
    En();
    ve();
    oe();
    pe();
    ze();
    ({
        useMemo: Ni
    } = i), kc = te(["anchorUnderlineOnHover"], {
        firstId: 820162,
        cacheId: "core-changelog-anchorClasses"
    }) || {
        anchor: "anchor-3Z-8Bb",
        anchorUnderlineOnHover: "anchorUnderlineOnHover-2ESHQB"
    }, Eb = a => {
        a.preventDefault(), a.stopPropagation(), z.showGuildJoinModal("pwXhuRkmgy"), C.Dispatcher?.dispatch({
            type: "LAYER_POP"
        })
    }, Mb = async a => {
        a.detail === 3 && (a.preventDefault(), a.stopPropagation(), await J.allowPreloadOverride.toggle(), J.relaunch())
    }, Db = i.createElement("a", {
        className: `${kc.anchor} ${kc.anchorUnderlineOnHover}`,
        onClick: Eb
    }, "Join our Discord Server."), Pb = i.createElement(D, null, i.createElement("span", {
        onClick: Mb
    }, "Need support?"), " ", Db), zb = i.createElement(C.Tooltip, {
        color: "primary",
        position: "top",
        text: p("Socials.twitter")
    }, a => i.createElement("a", {
        ...a,
        className: "bd-social",
        href: "https://x.com/_BetterDiscord_",
        rel: "noopener noreferrer",
        target: "_blank"
    }, i.createElement(lr, {
        size: "18px"
    }))), Bb = i.createElement(C.Tooltip, {
        color: "primary",
        position: "top",
        text: p("Socials.github")
    }, a => i.createElement("a", {
        ...a,
        className: "bd-social",
        href: "https://github.com/BetterDiscord/BetterDiscord",
        rel: "noopener noreferrer",
        target: "_blank"
    }, i.createElement(xt, {
        size: "18px"
    })))
});

function Oi({
    isVisible: a,
    className: e,
    onClick: t
}) {
    return Sc.useTransition(a, {
        keys: r => r ? "backdrop" : "empty",
        config: {
            duration: 300
        },
        from: {
            opacity: 0,
            background: "var(--black-500)"
        },
        enter: {
            opacity: .85,
            background: "var(--black-500)"
        },
        leave: {
            opacity: 0,
            background: "var(--black-500)"
        }
    })((r, n) => n ? i.createElement(Sc.animated.div, {
        className: O("bd-modal-backdrop", e),
        style: r,
        onClick: t
    }) : null)
}
var Sc, Lc = x(() => {
    "use strict";
    be();
    I();
    _();
    Sc = C.ReactSpring
});

function Ui() {
    let [a, e] = Rb([]), t = Ic((r, n = {}) => {
        e(s => [...s, {
            ...n,
            render: r
        }])
    }, []), o = Ic(r => {
        e(n => n.filter(s => (s.modalKey === r && s.onClose && s.onClose(), s.modalKey !== r)))
    }, []);
    return Ub(() => (N.on("open-modal", t), () => {
        N.off("open-modal", t)
    }), [t]), i.createElement(jb, {
        component: Ob
    }, i.createElement(Oi, {
        isVisible: !!a.length,
        onClick: () => o(a[a.length - 1].modalKey)
    }), !!a.length && i.createElement(Ri, {
        key: a[a.length - 1].modalKey,
        ...a[a.length - 1],
        onClose: () => o(a[a.length - 1].modalKey)
    }))
}
var Ob, Rb, Ic, Ub, Ac, Tc, jb, Ri, Ec, Mc, Dc = x(() => {
    "use strict";
    I();
    Fe();
    Lc();
    pe();
    ({
        Fragment: Ob,
        useState: Rb,
        useCallback: Ic,
        useEffect: Ub
    } = i), [Ac, Tc] = Mt(a => a?.defaultProps?.transitionAppear), jb = Ac && Tc ? Ac[Tc] : function() {}, Ri = class extends i.Component {
        constructor(e) {
            super(e), this.state = {
                transitionState: null
            }
        }
        componentWillEnter(e) {
            this.setState({
                transitionState: 0
            }), setTimeout(() => {
                this.setState({
                    transitionState: 1
                }), e()
            }, 300)
        }
        componentWillLeave(e) {
            this.setState({
                transitionState: 2
            }), setTimeout(() => {
                this.setState({
                    transitionState: 3
                }), e()
            }, 300)
        }
        render() {
            return i.createElement("div", {
                className: "bd-modal-layer"
            }, this.props.render({
                transitionState: this.state.transitionState,
                onClose: this.props.onClose
            }))
        }
    }, Ec = 0, Mc = a => a ? `${a}-${Ec++}` : Ec++
});
var qb, z, ve = x(() => {
    "use strict";
    rc();
    ee();
    I();
    po();
    V();
    me();
    Fe();
    Kt();
    _();
    _e();
    xc();
    ma();
    dt();
    Fa();
    Fa();
    vc();
    zi();
    Cc();
    Dc();
    pe();
    qb = [], z = class {
        static get shouldShowAddonErrors() {
            return w.get("settings", "addons", "addonErrors")
        }
        static get hasModalOpen() {
            return !!document.getElementsByClassName("bd-modal").length
        }
        static get ModalQueue() {
            return qb
        }
        static _ModalActions;
        static get ModalActions() {
            return this._ModalActions ??= la("?.stackNextByDefault", {
                openModal: F.byStrings("?.stackNextByDefault"),
                closeModal: F.byStrings(".setState", ".getState()["),
                closeAllModals: F.byStrings(".getState();for")
            }, {
                firstId: 192308,
                cacheId: "betterdiscord-modals"
            })
        }
        static
        default (e, t, o = []) {
            let r = P.parseHTML(`<div class="bd-modal-wrapper theme-dark">
                <div class="bd-backdrop backdrop-1wrmKB"></div>
                <div class="bd-modal modal-1UGdnR">
                    <div class="bd-modal-inner inner-1JeGVc">
                        <div class="header header-1R_AjF">
                            <div class="title">${e}</div>
                        </div>
                        <div class="bd-modal-body">
                            <div class="scroller-wrap fade">
                                <div class="scroller"></div>
                            </div>
                        </div>
                        <div class="footer footer-2yfCgX footer-3rDWdC footer-2gL1pp"></div>
                    </div>
                </div>
            </div>`),
                n = () => {
                    r.classList.add("closing"), setTimeout(() => {
                        r.remove();
                        let l = this.ModalQueue.shift();
                        l && l()
                    }, 300)
                };
            o.length || o.push({
                label: p("Modals.okay"),
                action: n
            });
            let s = r.querySelector(".footer");
            for (let l of o) {
                let u = Object.assign(document.createElement("button"), {
                    onclick: c => {
                        try {
                            l.action(c)
                        } catch (f) {
                            b.stacktrace("Modals", "Could not fire button listener", f)
                        }
                        n()
                    },
                    type: "button",
                    className: "bd-button"
                });
                l.danger && u.classList.add("bd-button-danger"), u.append(l.label), s.appendChild(u)
            }
            if (Array.isArray(t) ? t.every(l => i.isValidElement(l)) : i.isValidElement(t)) {
                let l = r.querySelector(".scroller"),
                    u = gt.createRoot(l);
                try {
                    u.render(t)
                } catch (c) {
                    l.append(P.parseHTML('<span style="color: red">There was an unexpected error. Modal could not be rendered.</span>')), b.stacktrace("Modals", "Could not render modal", c)
                }
                P.onRemoved(l, () => {
                    u.unmount()
                })
            } else r.querySelector(".scroller").append(t);
            r.querySelector(".footer button").addEventListener("click", n), r.querySelector(".bd-backdrop").addEventListener("click", n);
            let d = () => document.getElementById("app-mount").append(r);
            this.hasModalOpen ? this.ModalQueue.push(d) : d()
        }
        static alert(e, t) {
            this.showConfirmationModal(e, t, {
                cancelText: null
            })
        }
        static showConfirmationModal(e, t, o = {}) {
            t instanceof cr && (t = t.toString());
            let r = () => {},
                {
                    onClose: n = r,
                    onConfirm: s = r,
                    onCancel: d = r,
                    confirmText: l = p("Modals.okay"),
                    cancelText: u = p("Modals.cancel"),
                    danger: c = !1,
                    key: f = void 0,
                    size: m = Le.Sizes.SMALL
                } = o;
            if (!this.ModalActions) return this.default(e, t, [l && {
                label: l,
                action: s
            }, u && {
                label: u,
                action: d,
                danger: c
            }].filter(Boolean));
            Array.isArray(t) || (t = [t]), t = t.map(g => typeof g == "string" ? i.createElement(pr, null, g) : g);
            let h = this.openModal(g => i.createElement(ce, {
                onError: () => {
                    setTimeout(() => {
                        this.ModalActions.closeModal(h), this.default(e, t, [l && {
                            label: l,
                            action: s
                        }, u && {
                            label: u,
                            action: d,
                            danger: c
                        }].filter(Boolean))
                    })
                }
            }, i.createElement(Tn, Object.assign({
                header: e,
                danger: c,
                confirmText: l,
                cancelText: u,
                onConfirm: s,
                onCancel: d,
                className: m,
                onCloseCallback: () => {
                    g?.transitionState === 2 && n?.()
                }
            }, g), i.createElement(ce, {
                id: "showConfirmationModal",
                name: "Modals"
            }, t))), {
                modalKey: f
            });
            return h
        }
        static showAddonErrors({
            plugins: e = [],
            themes: t = []
        }) {
            if (!e || !t || !this.shouldShowAddonErrors || !e.length && !t.length) return;
            let o = {
                pluginErrors: Array.isArray(e) ? e : [],
                themeErrors: Array.isArray(t) ? t : []
            };
            this.openModal(r => i.createElement(ce, {
                id: "showAddonErrors",
                name: "Modals"
            }, i.createElement(Pi, Object.assign(o, r))))
        }
        static showChangelogModal(e = {}) {
            return this.openModal(o => i.createElement(ce, {
                id: "showChangelogModal",
                name: "Modals"
            }, i.createElement(Fi, Object.assign(e, o))))
        }
        static async showGuildJoinModal(e) {
            let t = /\.gg\/(.*)$/;
            t.test(e) && (e = e.match(t)[1]);
            let {
                invite: o
            } = await C.InviteActions?.resolveInvite(e) ?? {
                invite: null
            };
            if (!o) {
                b.debug("Utilities", "Failed to resolve invite:", e);
                return
            }
            let r = $.instead("BetterDiscord~showGuildJoinModal", C.RemoteModule, "minimize", () => {}),
                n = $.instead("BetterDiscord~showGuildJoinModal", C.RemoteModule, "focus", () => {});
            try {
                await C.Dispatcher?.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: o,
                    code: e,
                    context: "APP"
                })
            } finally {
                r(), n()
            }
        }
        static showAddonSettingsModal(e, t) {
            let o = t;
            (t instanceof Node || typeof t == "string") && (o = class extends i.Component {
                element;
                elementRef;
                constructor(s) {
                    super(s), this.elementRef = i.createRef(), this.element = t, this.state = {
                        hasError: !1
                    }
                }
                componentDidCatch() {
                    this.setState({
                        hasError: !0
                    })
                }
                componentDidMount() {
                    this.element instanceof Node && this.elementRef.current?.appendChild(this.element)
                }
                render() {
                    return this.state.hasError ? i.createElement(D, {
                        color: D.Colors.STATUS_RED
                    }, p("Addons.settingsError")) : i.createElement("div", {
                        className: "bd-addon-settings-wrap",
                        ref: this.elementRef,
                        dangerouslySetInnerHTML: typeof this.element == "string" ? {
                            __html: this.element
                        } : void 0
                    })
                }
            }), typeof o == "function" && (o = i.createElement(o));
            let r = {
                className: "bd-addon-modal",
                size: Le.Sizes.MEDIUM,
                header: `${e} Settings`,
                cancelText: null,
                confirmText: p("Modals.done")
            };
            return this.openModal(n => i.createElement(ce, {
                id: "showAddonSettingsModal",
                name: "Modals"
            }, i.createElement(Tn, Object.assign(r, n), o)))
        }
        static hasInitialized = !1;
        static makeStack() {
            let e = P.parseHTML('<div id="bd-modal-container">');
            P.bdBody.append(e), gt.createRoot(e).render([i.createElement(ce, {
                id: "makeStack",
                name: "Modals",
                hideError: !0
            }, i.createElement(Ui))]), this.hasInitialized = !0
        }
        static openModal(e, t = {}) {
            return typeof this.ModalActions.openModal == "function" ? this.ModalActions.openModal(e) : (this.hasInitialized || this.makeStack(), t.modalKey = Mc(t.modalKey), N.emit("open-modal", e, t), t.modalKey)
        }
    };
    z.makeStack()
});
var Pc = {};
Qr(Pc, {
    default: () => Ee
});

function Wb(a) {
    let e = {},
        t = a.split(";");
    for (let o of t) {
        let r = o.split(":"),
            n = r[0].trim(),
            s = r.slice(1).join(":").trim();
        n && (n === "inherits" ? e[n] = s === "true" : n === "syntax" ? e[n] = s.replaceAll('"', "") : e[n] = s)
    }
    return e
}
var Hb, Ee, Bt = x(() => {
    "use strict";
    He();
    et();
    Cn();
    mr();
    _e();
    V();
    ve();
    Hb = /@property\s+--([A-Za-z0-9-_]+)\s*\{(.+?)\}/gs;
    Ee = new class extends Xt {
        get name() {
            return "ThemeManager"
        }
        get extension() {
            return ".theme.css"
        }
        get duplicatePattern() {
            return /\.theme\s?\([0-9]+\)\.css/
        }
        get addonFolder() {
            return W.get("themesPath")
        }
        get prefix() {
            return "theme"
        }
        get language() {
            return "css"
        }
        get order() {
            return 4
        }
        addonList = [];updateThemeList() {
            return this.updateList()
        }
        loadAllThemes() {
            return this.loadAllAddons()
        }
        enableTheme(e) {
            return this.enableAddon(e)
        }
        disableTheme(e) {
            return this.disableAddon(e)
        }
        toggleTheme(e) {
            return this.toggleAddon(e)
        }
        unloadTheme(e) {
            return this.unloadAddon(e)
        }
        loadTheme(e) {
            return this.loadAddon(e)
        }
        reloadTheme(e) {
            return this.reloadAddon(e)
        }
        loadAddon(e, t = !0) {
            let o = super.loadAddon(e, t);
            return o && t && z.showAddonErrors({
                themes: [o]
            }), o
        }
        initializeAddon(e) {
            if (!e.name || !e.author || !e.description || !e.version) return new Te(e.name || e.filename, e.filename, "Addon is missing name, author, description, or version", {
                message: "Addon must provide name, author, description, and version.",
                stack: ""
            }, this.prefix)
        }
        requireAddon(e) {
            let t = super.requireAddon(e);
            t.css = t.fileContent, delete t.fileContent;
            let o = this.extractCustomProperties(t.css);
            return t.properties = o, t
        }
        startAddon(e) {
            return this.addTheme(e)
        }
        stopAddon(e) {
            return this.removeTheme(e)
        }
        addTheme(e) {
            let t = typeof e == "string" ? this.addonList.find(o => o.id == e) : e;
            t && (P.injectTheme(t.slug + "-theme-container", t.css), this.hasInitialized && q.success(p("Addons.enabled", {
                name: t.name,
                version: t.version
            })))
        }
        removeTheme(e) {
            let t = typeof e == "string" ? this.addonList.find(o => o.id == e) : e;
            t && (P.removeTheme(t.slug + "-theme-container"), q.error(p("Addons.disabled", {
                name: t.name,
                version: t.version
            })))
        }
        extractCustomProperties(e) {
            let t = {},
                o = e.matchAll(Hb);
            for (let r of o) r.length === 3 && (t[r[1]] = Wb(r[2]));
            return t
        }
    }
});
var _b, hr, zc = x(() => {
    "use strict";
    pe();
    Ot();
    me();
    Ge();
    _b = /^betterdiscord:\/\/editor\/(?:custom-css|(theme|plugin)\/([^/]+))\/?/, hr = new class extends we {
        constructor() {
            super(), this.listener = this.listener.bind(this), w.addChangeListener(this.listener), Pe.ThemeStore?.addChangeListener(this.listener), Pe.AccessibilityStore?.addChangeListener(this.listener), this.listener(), M.editor.onLiveUpdateChange(e => {
                w.set("settings", "customcss", "liveUpdate", e)
            }), M.addProtocolListener(e => {
                let t = e.match(_b);
                if (t)
                    if (t[1] === void 0) {
                        if (!w.get("settings", "customcss", "customcss")) return;
                        M.editor.open("custom-css")
                    } else(t[1] === "theme" ? (Bt(), Ks(Pc)) : (tt(), Ks(Bc))).default.isLoaded(t[2]) && M.editor.open(t[1], t[2])
            })
        }
        listener() {
            M.editor.updateSettings({
                options: this.getEditorOptions(),
                liveUpdate: w.get("settings", "customcss", "liveUpdate"),
                discordTheme: Pe.ThemeStore?.theme || "dark"
            }), this.emitChange()
        }
        getEditorOptions() {
            let e = w.get("settings", "editor", "theme");
            return e === "system" && (Pe.AccessibilityStore?.useForcedColors ? e = "hc-black" : e = Pe.ThemeStore?.theme === "light" ? "vs" : "vs-dark"), {
                theme: e,
                fontSize: w.get("settings", "editor", "fontSize"),
                lineNumbers: w.get("settings", "editor", "lineNumbers"),
                minimap: {
                    enabled: w.get("settings", "editor", "minimap")
                },
                hover: {
                    enabled: w.get("settings", "editor", "hover")
                },
                insertSpaces: w.get("settings", "editor", "insertSpaces"),
                tabSize: Number(w.get("settings", "editor", "tabSize")),
                quickSuggestions: {
                    other: w.get("settings", "editor", "quickSuggestions"),
                    comments: w.get("settings", "editor", "quickSuggestions"),
                    strings: w.get("settings", "editor", "quickSuggestions")
                },
                renderWhitespace: w.get("settings", "editor", "renderWhitespace")
            }
        }
    }
});
var Nc, ji, Fc = x(() => {
    "use strict";
    ee();
    _e();
    pe();
    Kt();
    Nc = ["theme-dark", "theme-light", "theme-darker", "theme-midnight", "full-motion", "show-redesigned-icons", "visual-refresh", "visual-refresh-chat-input", "images-dark", "images-light", "density-compact", "font-size-12", "font-size-14", "font-size-16", "font-size-15", "font-size-16", "font-size-18", "font-size-20", "font-size-24", "platform-win", "platform-osx", "platform-linux", "platform-web", "platform-overlay", "mouse-mode", "keyboard-mode", "app-focused", "bd-transparency", "bd-frame", "enable-motion", "underline-links", "confetti-mode", "reduce-motion", "is-mobile", "desaturate-user-colors", "disable-forced-colors", "enable-forced-colors", "overlay", "has-webkit-scrollbar", "no-webkit-scrollbar", "decorate-links", "low-saturation"], ji = new class {
        initPromise = null;
        failedToLoad = !1;
        async initialize() {
            return this.initPromise ? this.initPromise : (this.initPromise = this.loadMonaco(), this.initPromise)
        }
        async loadMonaco() {
            b.log("Editor", "Loading Monaco Editor");
            let e = "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min";
            Object.defineProperty(window, "MonacoEnvironment", {
                value: {
                    getWorker: (o, r) => new Worker(`data:text/javascript;charset=utf-8,${encodeURIComponent(`
                    self.MonacoEnvironment = {
                        baseUrl: '${e}'
                    };
                    importScripts('${e}/vs/base/worker/${o}');`)}`, {
                        type: "classic",
                        name: r
                    })
                }
            });
            let t = window.require;
            delete window.module, P.linkStyle("monaco-style", `${e}/vs/editor/editor.main.min.css`, {
                documentHead: !0
            });
            try {
                await P.injectScript("monaco-script", "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/loader.min.js");
                let o = window.require;
                window.require = t, o.config({
                    paths: {
                        vs: `${e}/vs`
                    }
                });
                let r = await new Promise(u => {
                        o(["vs/editor/editor.main"], u)
                    }),
                    n = {},
                    s = 0,
                    d = () => {
                        let u = co((f, m) => {
                                let h = n[m.id];
                                if (typeof h > "u") {
                                    let g = Object.keys(f)[0];
                                    h = typeof f[g] == "string" && f[g].startsWith(`${g}_`), n[m.id] = h
                                }
                                return h
                            }, {
                                searchDefault: !1
                            }),
                            c = new Set(u.flatMap(f => Object.values(f).flatMap(m => String(m).split(" "))));
                        for (let f = 0; f < Nc.length; f++) c.add(Nc[f]);
                        return c
                    },
                    l;
                r.languages.registerCompletionItemProvider("css", {
                    provideCompletionItems: (u, c) => {
                        if (!u.getValueInRange(new r.Range(c.lineNumber, 1, c.lineNumber, c.column)).match(/^\s*\.[\w-]*$/)) return {
                            suggestions: []
                        };
                        let m = Object.keys(X).length;
                        m !== s && (l = d(), s = m);
                        let h = new Set(l);
                        for (let k of document.all ?? document.querySelectorAll("*"))
                            if (k instanceof Element) {
                                let L = k.classList.value.split(" ");
                                for (let R = 0; R < L.length; R++) h.add(L[R])
                            } h.delete("");
                        let g = r.Range.fromPositions(c);
                        return {
                            suggestions: Array.from(h, k => ({
                                label: `.${k}`,
                                kind: r.languages.CompletionItemKind.Class,
                                insertText: k,
                                range: g
                            }))
                        }
                    }
                }), o(["vs/platform/clipboard/browser/clipboardService"], ({
                    BrowserClipboardService: u
                }) => {
                    $.instead("monaco-editor", u.prototype, "readText", (c, [f], m) => f ? m.call(c, f) : Promise.resolve(DiscordNative.clipboard.read()))
                }), o(["vs/editor/browser/controller/textAreaInput"], ({
                    TextAreaWrapper: u
                }) => {
                    $.instead("monaco-editor", u.prototype, "setSelectionRange", (c, f, m) => {
                        let h = c._actual,
                            g = $.instead("monaco-editor", HTMLElement.prototype, "focus", (L, R, T) => {
                                if (L === h) return T.apply(L)
                            }),
                            k = m.apply(c, f);
                        return g(), k
                    })
                }), r.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                    noSemanticValidation: !0,
                    noSyntaxValidation: !1
                }), r.languages.typescript.javascriptDefaults.setCompilerOptions({
                    target: r.languages.typescript.ScriptTarget.ESNext,
                    allowNonTsExtensions: !0
                })
            } catch (o) {
                b.error("Editor", "Failed to load monaco editor", o), this.failedToLoad = !0
            } finally {
                window.require = t
            }
        }
    }
});
var fe, Ie, wt = x(() => {
    "use strict";
    I();
    fe = Symbol("betterdiscord.none"), Ie = il({
        value: fe,
        disabled: !1
    })
});

function Jt({
    id: a = void 0,
    value: e,
    disabled: t = void 0,
    onChange: o,
    internalState: r = !0
}) {
    let [n, s] = Vb(e), {
        value: d,
        disabled: l
    } = yn(Ie), u = d !== fe, c = u ? d : r ? n : e, f = u ? l : t, m = Gb(() => {
        o?.(!c), s(!c)
    }, [o, c]), h = f ? " bd-switch-disabled" : "", g = c ? " bd-switch-checked" : "";
    return i.createElement("div", {
        className: "bd-switch" + h + g
    }, i.createElement("input", {
        id: a,
        type: "checkbox",
        disabled: f,
        checked: c,
        onChange: m
    }), i.createElement("div", {
        className: "bd-switch-body"
    }, i.createElement("svg", {
        className: "bd-switch-slider",
        viewBox: "0 0 28 20",
        preserveAspectRatio: "xMinYMid meet"
    }, i.createElement("rect", {
        className: "bd-switch-handle",
        fill: "white",
        x: "4",
        y: "0",
        height: "20",
        width: "20",
        rx: "10"
    }), i.createElement("svg", {
        className: "bd-switch-symbol",
        viewBox: "0 0 20 20",
        fill: "none"
    }, i.createElement("path", null), i.createElement("path", null)))))
}
var Vb, Gb, gr = x(() => {
    "use strict";
    I();
    wt();
    ({
        useState: Vb,
        useCallback: Gb
    } = i)
});

function Oc(a, e) {
    return function(o, r, n) {
        return a(o, r, n) && e(o, r, n)
    }
}

function Mn(a) {
    return function(t, o, r) {
        if (!t || !o || typeof t != "object" || typeof o != "object") return a(t, o, r);
        var n = r.cache,
            s = n.get(t),
            d = n.get(o);
        if (s && d) return s === o && d === t;
        n.set(t, o), n.set(o, t);
        var l = a(t, o, r);
        return n.delete(t), n.delete(o), l
    }
}

function Rc(a) {
    return Kb(a).concat($b(a))
}

function Ra(a, e) {
    return a === e || !a && !e && a !== a && e !== e
}

function ey(a, e, t) {
    var o = a.length;
    if (e.length !== o) return !1;
    for (; o-- > 0;)
        if (!t.equals(a[o], e[o], o, o, a, e, t)) return !1;
    return !0
}

function ty(a, e) {
    return Ra(a.getTime(), e.getTime())
}

function ay(a, e) {
    return a.name === e.name && a.message === e.message && a.cause === e.cause && a.stack === e.stack
}

function oy(a, e) {
    return a === e
}

function qc(a, e, t) {
    var o = a.size;
    if (o !== e.size) return !1;
    if (!o) return !0;
    for (var r = new Array(o), n = a.entries(), s, d, l = 0;
        (s = n.next()) && !s.done;) {
        for (var u = e.entries(), c = !1, f = 0;
            (d = u.next()) && !d.done;) {
            if (r[f]) {
                f++;
                continue
            }
            var m = s.value,
                h = d.value;
            if (t.equals(m[0], h[0], l, f, a, e, t) && t.equals(m[1], h[1], m[0], h[0], a, e, t)) {
                c = r[f] = !0;
                break
            }
            f++
        }
        if (!c) return !1;
        l++
    }
    return !0
}

function ny(a, e, t) {
    var o = jc(a),
        r = o.length;
    if (jc(e).length !== r) return !1;
    for (; r-- > 0;)
        if (!Vc(a, e, t, o[r])) return !1;
    return !0
}

function br(a, e, t) {
    var o = Rc(a),
        r = o.length;
    if (Rc(e).length !== r) return !1;
    for (var n, s, d; r-- > 0;)
        if (n = o[r], !Vc(a, e, t, n) || (s = Uc(a, n), d = Uc(e, n), (s || d) && (!s || !d || s.configurable !== d.configurable || s.enumerable !== d.enumerable || s.writable !== d.writable))) return !1;
    return !0
}

function iy(a, e) {
    return Ra(a.valueOf(), e.valueOf())
}

function sy(a, e) {
    return a.source === e.source && a.flags === e.flags
}

function Hc(a, e, t) {
    var o = a.size;
    if (o !== e.size) return !1;
    if (!o) return !0;
    for (var r = new Array(o), n = a.values(), s, d;
        (s = n.next()) && !s.done;) {
        for (var l = e.values(), u = !1, c = 0;
            (d = l.next()) && !d.done;) {
            if (!r[c] && t.equals(s.value, d.value, s.value, d.value, a, e, t)) {
                u = r[c] = !0;
                break
            }
            c++
        }
        if (!u) return !1
    }
    return !0
}

function dy(a, e) {
    var t = a.length;
    if (e.length !== t) return !1;
    for (; t-- > 0;)
        if (a[t] !== e[t]) return !1;
    return !0
}

function ly(a, e) {
    return a.hostname === e.hostname && a.pathname === e.pathname && a.protocol === e.protocol && a.port === e.port && a.hash === e.hash && a.username === e.username && a.password === e.password
}

function Vc(a, e, t, o) {
    return (o === Qb || o === Yb || o === Jb) && (a.$$typeof || e.$$typeof) ? !0 : Xb(e, o) && t.equals(a[o], e[o], o, o, a, e, t)
}

function Cy(a) {
    var e = a.areArraysEqual,
        t = a.areDatesEqual,
        o = a.areErrorsEqual,
        r = a.areFunctionsEqual,
        n = a.areMapsEqual,
        s = a.areNumbersEqual,
        d = a.areObjectsEqual,
        l = a.arePrimitiveWrappersEqual,
        u = a.areRegExpsEqual,
        c = a.areSetsEqual,
        f = a.areTypedArraysEqual,
        m = a.areUrlsEqual;
    return function(g, k, L) {
        if (g === k) return !0;
        if (g == null || k == null) return !1;
        var R = typeof g;
        if (R !== typeof k) return !1;
        if (R !== "object") return R === "number" ? s(g, k, L) : R === "function" ? r(g, k, L) : !1;
        var T = g.constructor;
        if (T !== k.constructor) return !1;
        if (T === Object) return d(g, k, L);
        if (wy(g)) return e(g, k, L);
        if (Wc != null && Wc(g)) return f(g, k, L);
        if (T === Date) return t(g, k, L);
        if (T === RegExp) return u(g, k, L);
        if (T === Map) return n(g, k, L);
        if (T === Set) return c(g, k, L);
        var H = ky(g);
        return H === fy ? t(g, k, L) : H === by ? u(g, k, L) : H === my ? n(g, k, L) : H === yy ? c(g, k, L) : H === gy ? typeof g.then != "function" && typeof k.then != "function" && d(g, k, L) : H === vy ? m(g, k, L) : H === py ? o(g, k, L) : H === uy ? d(g, k, L) : H === cy || H === hy || H === xy ? l(g, k, L) : !1
    }
}

function Sy(a) {
    var e = a.circular,
        t = a.createCustomConfig,
        o = a.strict,
        r = {
            areArraysEqual: o ? br : ey,
            areDatesEqual: ty,
            areErrorsEqual: ay,
            areFunctionsEqual: oy,
            areMapsEqual: o ? Oc(qc, br) : qc,
            areNumbersEqual: ry,
            areObjectsEqual: o ? br : ny,
            arePrimitiveWrappersEqual: iy,
            areRegExpsEqual: sy,
            areSetsEqual: o ? Oc(Hc, br) : Hc,
            areTypedArraysEqual: o ? br : dy,
            areUrlsEqual: ly
        };
    if (t && (r = _c({}, r, t(r))), e) {
        var n = Mn(r.areArraysEqual),
            s = Mn(r.areMapsEqual),
            d = Mn(r.areObjectsEqual),
            l = Mn(r.areSetsEqual);
        r = _c({}, r, {
            areArraysEqual: n,
            areMapsEqual: s,
            areObjectsEqual: d,
            areSetsEqual: l
        })
    }
    return r
}

function Ly(a) {
    return function(e, t, o, r, n, s, d) {
        return a(e, t, d)
    }
}

function Iy(a) {
    var e = a.circular,
        t = a.comparator,
        o = a.createState,
        r = a.equals,
        n = a.strict;
    if (o) return function(l, u) {
        var c = o(),
            f = c.cache,
            m = f === void 0 ? e ? new WeakMap : void 0 : f,
            h = c.meta;
        return t(l, u, {
            cache: m,
            equals: r,
            meta: h,
            strict: n
        })
    };
    if (e) return function(l, u) {
        return t(l, u, {
            cache: new WeakMap,
            equals: r,
            meta: void 0,
            strict: n
        })
    };
    var s = {
        cache: void 0,
        equals: r,
        meta: void 0,
        strict: n
    };
    return function(l, u) {
        return t(l, u, s)
    }
}

function ha(a) {
    a === void 0 && (a = {});
    var e = a.circular,
        t = e === void 0 ? !1 : e,
        o = a.createInternalComparator,
        r = a.createState,
        n = a.strict,
        s = n === void 0 ? !1 : n,
        d = Sy(a),
        l = Cy(d),
        u = o ? o(l) : Ly(l);
    return Iy({
        circular: t,
        comparator: l,
        createState: r,
        equals: u,
        strict: s
    })
}
var Kb, $b, Zb, Xb, Jb, Yb, Qb, Uc, jc, ry, uy, cy, fy, py, my, hy, gy, by, yy, xy, vy, wy, Wc, _c, ky, oA, rA, nA, iA, Gc, sA, dA, lA, Kc = x(() => {
    Kb = Object.getOwnPropertyNames, $b = Object.getOwnPropertySymbols, Zb = Object.prototype.hasOwnProperty;
    Xb = Object.hasOwn || function(a, e) {
        return Zb.call(a, e)
    };
    Jb = "__v", Yb = "__o", Qb = "_owner", Uc = Object.getOwnPropertyDescriptor, jc = Object.keys;
    ry = Ra;
    uy = "[object Arguments]", cy = "[object Boolean]", fy = "[object Date]", py = "[object Error]", my = "[object Map]", hy = "[object Number]", gy = "[object Object]", by = "[object RegExp]", yy = "[object Set]", xy = "[object String]", vy = "[object URL]", wy = Array.isArray, Wc = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, _c = Object.assign, ky = Object.prototype.toString.call.bind(Object.prototype.toString);
    oA = ha(), rA = ha({
        strict: !0
    }), nA = ha({
        circular: !0
    }), iA = ha({
        circular: !0,
        strict: !0
    }), Gc = ha({
        createInternalComparator: function() {
            return Ra
        }
    }), sA = ha({
        strict: !0,
        createInternalComparator: function() {
            return Ra
        }
    }), dA = ha({
        circular: !0,
        createInternalComparator: function() {
            return Ra
        }
    }), lA = ha({
        circular: !0,
        createInternalComparator: function() {
            return Ra
        },
        strict: !0
    })
});

function ye(a, e, t, o = (r, n) => r === n) {
    let [, r] = yr(), n = ca(void 0), s = ca(void 0), d = ca(null);
    d.current = o === !0 ? Gc : o, s.current === void 0 && (s.current = e, n.current = e());
    let l = ca(void 0);
    if (t && l.current) {
        if (t.length !== l.current.length) throw new Error("Dependency List Size Changed!");
        for (let u = 0; u < t.length; u++) {
            if (Object.is(t[u], l.current[u])) continue;
            s.current = e;
            let c = e();
            d.current(n.current, c) || (n.current = c);
            break
        }
    } else s.current = e;
    return l.current = t, xn(() => {
        let u = Array.isArray(a) ? a : [a];

        function c() {
            let f = s.current();
            d.current(n.current, f) || (n.current = f, r())
        }
        for (let f of u) f.addChangeListener(c);
        return () => {
            for (let f of u) f.removeChangeListener(c)
        }
    }, []), n.current
}

function yr() {
    return ll(a => a + 1, 0)
}
var Yt = x(() => {
    "use strict";
    I();
    Kc()
});

function Dy(a, e) {
    return i.createElement(C.Tooltip, {
        color: "primary",
        position: "top",
        text: a.tooltip
    }, t => i.createElement(v, {
        ...t,
        "aria-label": a.tooltip,
        size: v.Sizes.ICON,
        look: v.Looks.BLANK,
        onClick: o => {
            a.onClick(o, e?.())
        }
    }, a.label))
}

function Py(a) {
    return i.createElement(j, {
        align: j.Align.CENTER,
        style: {
            gap: "10px"
        }
    }, i.createElement(D, null, a.label), i.createElement(Jt, {
        onChange: a.onChange,
        value: a.checked
    }))
}

function Zc(a, e) {
    return e.type == "boolean" ? Py(e) : Dy(e, a)
}
var bo, Dn, $c, Ay, Ty, Ey, My, Pn, qi = x(() => {
    "use strict";
    I();
    _();
    me();
    zc();
    Fc();
    xe();
    $t();
    gr();
    dt();
    Yt();
    I();
    oe();
    ({
        useState: bo,
        useCallback: Dn,
        useEffect: $c,
        forwardRef: Ay,
        useMemo: Ty,
        useImperativeHandle: Ey
    } = i), My = ["abap", "abc", "actionscript", "ada", "apache_conf", "asciidoc", "assembly_x86", "autohotkey", "batchfile", "bro", "c_cpp", "c9search", "cirru", "clojure", "cobol", "coffee", "coldfusion", "csharp", "csound_document", "csound_orchestra", "csound_score", "css", "curly", "d", "dart", "diff", "dockerfile", "dot", "drools", "dummy", "dummysyntax", "eiffel", "ejs", "elixir", "elm", "erlang", "forth", "fortran", "ftl", "gcode", "gherkin", "gitignore", "glsl", "gobstones", "golang", "graphqlschema", "groovy", "haml", "handlebars", "haskell", "haskell_cabal", "haxe", "hjson", "html", "html_elixir", "html_ruby", "ini", "io", "jack", "jade", "java", "javascript", "json", "jsoniq", "jsp", "jssm", "jsx", "julia", "kotlin", "latex", "less", "liquid", "lisp", "livescript", "logiql", "lsl", "lua", "luapage", "lucene", "makefile", "markdown", "mask", "matlab", "maze", "mel", "mushcode", "mysql", "nix", "nsis", "objectivec", "ocaml", "pascal", "perl", "pgsql", "php", "pig", "powershell", "praat", "prolog", "properties", "protobuf", "python", "r", "razor", "rdoc", "red", "rhtml", "rst", "ruby", "rust", "sass", "scad", "scala", "scheme", "scss", "sh", "sjs", "smarty", "snippets", "soy_template", "space", "sql", "sqlserver", "stylus", "svg", "swift", "tcl", "tex", "text", "textile", "toml", "tsx", "twig", "typescript", "vala", "vbscript", "velocity", "verilog", "vhdl", "wollok", "xml", "xquery", "yaml", "django"];
    Pn = Ay(function({
        value: e,
        language: t = "css",
        id: o = "bd-editor",
        controls: r = [],
        onChange: n
    }, s) {
        let d = ca(null),
            l = ca(null),
            u = Ty(() => {
                let K = t.toLowerCase().replace(/ /g, "_");
                return My.includes(K) ? K : "css"
            }, [t]),
            [c, f] = bo(() => hr.getEditorOptions().theme),
            [m, h] = bo(),
            [, g] = bo([]),
            [k, L] = bo([0, 0, 0]),
            [R, T] = bo([0, 0, []]),
            {
                insertSpaces: H,
                tabSize: A
            } = ye(w, () => ({
                insertSpaces: w.get("settings", "editor", "insertSpaces"),
                tabSize: w.get("settings", "editor", "tabSize")
            })),
            [E, ae] = bo(!1),
            B = Dn(() => ae(K => !K), []),
            ue = Dn(() => {
                m && n?.(m.getValue())
            }, [m, n]),
            Ce = Dn(() => m?.layout(), [m]);
        Ey(s, () => ({
            resize: Ce,
            get value() {
                return m.getValue()
            },
            set value(K) {
                m.setValue(K)
            }
        }), [m, Ce]), $c(() => (g(K => [...K, m?.onDidChangeModelContent(ue)]), () => {
            g(K => {
                for (let Re of K) Re?.dispose();
                return []
            })
        }), [m, ue]), vn(() => {
            let K = d.current || document.getElementById(o);
            if (!K) return;
            let Re = () => {
                let Me = document.createElement("textarea");
                Me.className = "bd-fallback-editor", Me.value = e, h({
                    dispose: () => Me.remove(),
                    getValue: () => Me.value,
                    setValue: ia => Me.value = ia,
                    layout: () => {},
                    onDidChangeModelContent: ia => (Me.onchange = ia, Me.oninput = ia, {
                        dispose() {}
                    }),
                    isFallback: !0
                }), K.appendChild(Me)
            };
            if (ji.failedToLoad) {
                Re();
                return
            }
            let ne = !1,
                se, Ue = () => {
                    let Me = () => ({
                            value: e,
                            language: u,
                            ...hr.getEditorOptions()
                        }),
                        ia = window.monaco.editor.onDidChangeMarkers(([Je]) => {
                            if (Lt.getModel().uri !== Je) return;
                            let Ya = window.monaco.editor.getModelMarkers({
                                    resource: Je
                                }),
                                Qa = 0,
                                Jr = 0;
                            for (let It of Ya) It.severity === 4 ? Jr++ : It.severity === 8 && Qa++;
                            T([Qa, Jr, Ya])
                        }),
                        Lt = window.monaco.editor.create(K, Me());
                    h(Lt), Lt.onDidChangeCursorSelection(() => {
                        let Je = Lt.getPosition(),
                            Ya = Lt.getSelection(),
                            Qa = Lt.getModel().getValueInRange(Ya);
                        L([Je.lineNumber, Je.column, Qa.length])
                    });

                    function Po() {
                        let Je = getComputedStyle(Lt.getDomNode()),
                            Ya = Je.getPropertyValue("--vscode-editor-background"),
                            Qa = Je.getPropertyValue("--vscode-foreground"),
                            Jr = Je.getPropertyValue("--vscode-tree-tableColumnsBorder"),
                            It = l.current.parentElement.parentElement;
                        (!It || !It.classList.contains("floating-window")) && (It = l.current), It && (It.style.setProperty("--bd-editor-background", Ya), It.style.setProperty("--bd-editor-foreground", Qa), It.style.setProperty("--bd-editor-divider", Jr))
                    }
                    let Xr = hr.addChangeListener(() => {
                        Lt.updateOptions(Me()), f(hr.getEditorOptions().theme), Po()
                    });
                    Po(), se = () => {
                        Lt.dispose(), Xr(), ia.dispose()
                    }, ne && se()
                };
            return window.monaco?.editor ? Ue() : ji.initialize().then(() => {
                window.monaco?.editor ? Ue() : Re()
            }), () => {
                ne = !0, se?.()
            }
        }, [o, u, e]), $c(() => (window.addEventListener("resize", Ce), () => {
            window.removeEventListener("resize", Ce)
        }), [Ce]), m && m.layout && m.layout();
        let G = Dn(() => {
                m.focus(), m.trigger("keyboard", "editor.action.gotoLine", "")
            }, [m]),
            ie = r.filter(K => K.side != "right").map(Zc.bind(null, () => m?.getValue())),
            Be = r.filter(K => K.side == "right").map(Zc.bind(null, () => m?.getValue()));
        return i.createElement("div", {
            id: "bd-editor-panel",
            className: c,
            ref: l
        }, i.createElement("div", {
            id: "bd-editor-controls"
        }, i.createElement("div", {
            className: "controls-section controls-left"
        }, ie), i.createElement("div", {
            className: "controls-section controls-right"
        }, Be)), i.createElement("div", {
            className: "editor-wrapper"
        }, i.createElement("div", {
            id: o,
            ref: d,
            className: "editor " + c
        }), E && i.createElement("div", {
            className: "bd-editor-problems"
        }, R[2].length === 0 && i.createElement("div", {
            className: "bd-editor-no-problems"
        }, "No Problems have been detected."), R[2].map((K, Re) => i.createElement("div", {
            key: Re,
            className: `bd-editor-problem bd-editor-severity-${K.severity}`
        }, K.severity === 8 ? i.createElement(Wt, {
            size: "1em"
        }) : K.severity === 4 ? i.createElement(Qe, {
            size: "1em"
        }) : K.severity === 2 ? i.createElement(je, {
            size: "1em"
        }) : i.createElement(je, {
            size: "1em"
        }), i.createElement("span", null, K.message), i.createElement("span", null, K.source, "(", K.code, ")"), i.createElement("span", null, "[Ln ", K.startLineNumber, ", Col ", K.startColumn, "]"))))), !m?.isFallback && i.createElement("div", {
            className: "bd-editor-footer"
        }, i.createElement("div", {
            className: "bd-editor-footer-left"
        }, i.createElement("div", {
            className: "bd-editor-footer-item",
            onClick: B
        }, i.createElement(Wt, {
            size: "1em"
        }), i.createElement("span", null, " ", R[0], " "), i.createElement(Qe, {
            size: "1em"
        }), i.createElement("span", null, " ", R[1]))), i.createElement("div", {
            className: "bd-editor-footer-right"
        }, i.createElement("div", {
            className: "bd-editor-footer-item",
            onClick: G
        }, i.createElement("span", null, "Ln ", k[0]), i.createElement("span", null, ", "), i.createElement("span", null, "Col ", k[1]), !!k[2] && i.createElement("span", null, " (", k[2], " selected)")), i.createElement("div", {
            className: "bd-editor-footer-item"
        }, i.createElement("span", null, H ? "Spaces" : "Tabs"), i.createElement("span", null, ": "), i.createElement("span", null, A)), i.createElement("div", {
            className: "bd-editor-footer-item"
        }, i.createElement(pa, {
            size: "1em"
        }), i.createElement("span", null, " ", u)))))
    })
});
var zy, Hi, By, Ny, Fy, Xc, Jc = x(() => {
    "use strict";
    I();
    V();
    qi();
    oe();
    ({
        useState: zy,
        useCallback: Hi,
        forwardRef: By,
        useImperativeHandle: Ny,
        useRef: Fy
    } = i), Xc = By(function({
        content: e,
        language: t,
        save: o,
        openNative: r,
        id: n = "bd-addon-editor"
    }, s) {
        let d = Fy(null),
            [l, u] = zy(!1);
        Ny(s, () => ({
            resize() {
                d.current?.resize()
            },
            get value() {
                return d.current?.getValue()
            },
            set value(h) {
                d.current?.setValue(h)
            },
            get hasUnsavedChanges() {
                return l
            }
        }), [l]);
        let c = Hi(() => r?.(), [r]),
            f = Hi(() => u(!0), []),
            m = Hi((h, g) => {
                o?.(g), u(!1)
            }, [o]);
        return i.createElement(Pn, {
            ref: d,
            language: t,
            id: n,
            controls: [{
                label: i.createElement(Da, {
                    size: "18px"
                }),
                tooltip: p("CustomCSS.save"),
                onClick: m
            }, {
                label: i.createElement(st, {
                    size: "18px"
                }),
                tooltip: p("CustomCSS.openNative"),
                onClick: c
            }],
            value: e,
            onChange: f
        })
    })
});

function Uy(a) {
    return new Promise(e => {
        z.showConfirmationModal(p("Modals.confirmAction"), a, {
            danger: !0,
            confirmText: p("Modals.close"),
            onConfirm: () => {
                e(!0)
            },
            onCancel: () => {
                e(!1)
            }
        })
    })
}

function Wi({
    id: a,
    title: e,
    resizable: t,
    children: o,
    className: r,
    center: n,
    top: s = 0,
    left: d = 0,
    width: l = 410,
    height: u = 470,
    minX: c = 0,
    minY: f = 0,
    maxX: m = -1,
    maxY: h = -1,
    onResize: g,
    onClose: k,
    confirmClose: L,
    confirmationText: R
}) {
    let [T, H] = Oy(!1), A = zn({
        x: m,
        y: h
    });
    A.current.x = m, A.current.y = h;
    let E = zn({
        offset: {
            x: 0,
            y: 0
        },
        size: {
            width: 0,
            height: 0
        },
        max: {
            get x() {
                return A.current.x === -1 ? xo.width : A.current.x
            },
            get y() {
                return A.current.y === -1 ? xo.height : A.current.y
            }
        },
        min: {
            x: c,
            y: f
        },
        position: {
            x: 0,
            y: 0
        },
        isDragging: !1
    });
    E.current.min.x = c, E.current.min.y = f;
    let ae = zn(null),
        B = zn(null),
        ue = yo(() => {
            E.current.size.width = B.current.offsetWidth, E.current.size.height = B.current.offsetHeight
        }, [B]),
        Ce = yo(ne => {
            if (!E.current.isDragging) return;
            let se = ne.clientY - E.current.offset.y;
            se <= E.current.min.y && (se = E.current.min.y), se + E.current.size.height >= E.current.max.y && (se = E.current.max.y - E.current.size.height);
            let Ue = ne.clientX - E.current.offset.x;
            Ue <= E.current.min.x && (Ue = E.current.min.x), Ue + E.current.size.width >= E.current.max.x && (Ue = E.current.max.x - E.current.size.width), E.current.position.x = Ue, E.current.position.y = se, B.current.style.left = `${Ue}px`, B.current.style.top = `${se}px`
        }, []),
        G = yo(ne => {
            let se = B.current;
            E.current.offset.x = ne.clientX - se.offsetLeft, E.current.offset.y = ne.clientY - se.offsetTop, E.current.isDragging = !0
        }, [B]),
        ie = yo(() => {
            E.current.isDragging = !1;
            let ne = B.current.offsetWidth,
                se = B.current.offsetHeight;
            if (ne != E.current.size.width || se != E.current.size.height) {
                g && g();
                let Ue = parseInt(B.current.style.left),
                    Me = parseInt(B.current.style.top);
                Ue + ne >= E.current.max.x && (B.current.style.width = E.current.max.x - Ue + "px"), Me + se >= E.current.max.y && (B.current.style.height = E.current.max.y - Me + "px")
            }
            E.current.size.width = ne, E.current.size.height = se, B.current.style.left = `${E.current.position.x}px`, B.current.style.top = `${E.current.position.y}px`
        }, [B, g]);
    Ry(() => {
        let ne = B.current,
            se = ae.current;
        return ne.addEventListener("mousedown", ue, !1), se.addEventListener("mousedown", G, !1), document.addEventListener("mouseup", ie, !1), document.addEventListener("mousemove", Ce, !0), () => {
            document.removeEventListener("mouseup", ie, !1), document.removeEventListener("mousemove", Ce, !0), ne.removeEventListener("mousedown", ue, !1), se.removeEventListener("mousedown", G, !1)
        }
    }, [ae, B, G, ie, Ce, ue]);
    let Be = yo(() => {
            B.current.style.width = "100%", B.current.style.height = "100%", g && g();
            let ne = B.current.offsetWidth,
                se = B.current.offsetHeight,
                Ue = parseInt(B.current.style.left),
                Me = parseInt(B.current.style.top),
                ia = Ue + ne;
            Me + se > E.current.max.y && (B.current.style.top = E.current.max.y - se + "px"), ia > E.current.max.x && (B.current.style.left = E.current.max.x - ne + "px");
            let Po = parseInt(B.current.style.left),
                Xr = parseInt(B.current.style.top);
            if (Xr < E.current.min.y) {
                let Je = E.current.min.y - Xr;
                B.current.style.top = E.current.min.y + "px", B.current.style.height = se - Je + "px"
            }
            if (Po < E.current.min.x) {
                let Je = E.current.min.x - Po;
                B.current.style.left = E.current.min.x + "px", B.current.style.height = ne - Je + "px"
            }
        }, [B, g]),
        K = yo(async () => {
            let ne = !0;
            (typeof L == "function" ? L() : L) && (H(!0), ne = await Uy(R), H(!1)), k && ne && k()
        }, [R, k, L]),
        Re = `floating-window${r?` ${r}`:""}${t?" resizable":""}${T?" modal-open":""}`;
    return vn(() => {
        B.current.style.height = `${u}px`, B.current.style.width = `${l}px`, E.current.position.x = n ? xo.width / 2 - l / 2 : d, E.current.position.y = n ? xo.height / 2 - u / 2 : s, B.current.style.left = `${E.current.position.x}px`, B.current.style.top = `${E.current.position.y}px`
    }, [n, u, d, s, l]), i.createElement("div", {
        id: a,
        className: Re,
        ref: B
    }, i.createElement("div", {
        className: "floating-window-titlebar",
        ref: ae
    }, i.createElement("span", {
        className: "title"
    }, e), i.createElement("div", {
        className: "floating-window-buttons"
    }, i.createElement("div", {
        className: "button maximize-button",
        onClick: Be
    }, i.createElement(Xo, {
        size: "16px"
    })), i.createElement("div", {
        className: "button close-button",
        onClick: K
    }, i.createElement(We, {
        size: "16px"
    })))), i.createElement("div", {
        className: "floating-window-content"
    }, o))
}
var Oy, yo, Ry, zn, xo, Yc = x(() => {
    "use strict";
    I();
    V();
    ve();
    oe();
    I();
    ({
        useState: Oy,
        useCallback: yo,
        useEffect: Ry,
        useRef: zn
    } = i);
    xo = class {
        static get width() {
            return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        }
        static get height() {
            return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        }
    }
});

function _i() {
    let [a, e] = jy([]), t = Qc(r => {
        e(n => [...n, r])
    }, []), o = Qc(r => {
        e(a.filter(n => (n.id === r && n.onClose && n.onClose(), n.id !== r)))
    }, [a]);
    return qy(() => (N.on("open-window", t), () => void N.off("open-window", t)), [t]), a.map(r => i.createElement(Wi, {
        ...r,
        onClose: () => o(r.id),
        key: r.id
    }, r.children))
}
var jy, Qc, qy, ef = x(() => {
    "use strict";
    I();
    Fe();
    Yc();
    ({
        useState: jy,
        useCallback: Qc,
        useEffect: qy
    } = i)
});
var tf, af, Qt, Bn = x(() => {
    "use strict";
    I();
    po();
    Fe();
    _e();
    ef();
    pe();
    tf = Qd("AppLayerProvider"), af = !1, Qt = class {
        static initialize() {
            let e = i.createElement(_i, null),
                t = tf ? i.createElement(tf().props.layerContext.Provider, {
                    value: [document.querySelector("#app-mount > .layerContainer-2v_Sit")]
                }, e) : e,
                o = P.parseHTML('<div id="floating-windows-layer">');
            P.bdBody.append(o), gt.createRoot(o).render(t), af = !0
        }
        static open(e) {
            return af || this.initialize(), N.emit("open-window", e)
        }
    }
});
var Ve, qe, Hy, Wy, _y, Vy, Xt, mr = x(() => {
    "use strict";
    Ve = Ae(require("path"), 1), qe = Ae(require("fs"), 1);
    ee();
    Cn();
    me();
    Fe();
    Dt();
    et();
    I();
    V();
    ze();
    Jc();
    Bn();
    Ot();
    Ge();
    Hy = J.openPath, Wy = /[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/, _y = /^\\@/, Vy = function(a) {
        return a.charCodeAt(0) === 65279 && (a = a.slice(1)), a
    }, Xt = class extends we {
        get name() {
            return ""
        }
        get extension() {
            return ""
        }
        get duplicatePattern() {
            return /./
        }
        get addonFolder() {
            return ""
        }
        get language() {
            return ""
        }
        get prefix() {
            return ""
        }
        get order() {
            return 2
        }
        trigger(e, ...t) {
            return super.emitChange(), N.emit(`${this.prefix}-${e}`, ...t)
        }
        timeCache = {};state = {};windows = new Set;hasInitialized = !1;initialAddonsLoaded = 0;initialize() {
            w.registerAddonPanel(this);
            let e = this.loadAllAddons();
            return this.initialAddonsLoaded > 0 && q.show(p("Addons.manyEnabled", {
                count: this.initialAddonsLoaded,
                context: this.prefix
            })), this.hasInitialized = !0, e
        }
        loadState() {
            let e = Q.get(`${this.prefix}s`);
            e && Object.assign(this.state, e)
        }
        saveState() {
            Q.set(`${this.prefix}s`, this.state)
        }
        watcher;watchAddons() {
            if (this.watcher) return b.err(this.name, `Already watching ${this.prefix} addons.`);
            b.log(this.name, `Starting to watch ${this.prefix} addons.`), this.watcher = qe.default.watch(this.addonFolder, {
                persistent: !1
            }, async (e, t) => {
                if (!e || !t) return;
                let o = Ve.default.resolve(this.addonFolder, t);
                if (!t.endsWith(this.extension)) {
                    let r = t.match(this.duplicatePattern);
                    if (!r) return;
                    let n = r[0],
                        d = t.replace(n, "") + this.extension;
                    if (qe.default.existsSync(d)) {
                        b.warn(this.name, `Duplicate files found: ${t} and ${d}`);
                        return
                    }
                    try {
                        qe.default.renameSync(o, Ve.default.resolve(this.addonFolder, d))
                    } catch (l) {
                        b.err(this.name, `Could not rename file: ${t} ${d}`, l)
                    }
                }
                await new Promise(r => setTimeout(r, 100));
                try {
                    let r = qe.default.statSync(o);
                    if (!r.isFile() || !r || !r.mtimeMs || typeof r.mtimeMs != "number" || this.timeCache[t] == r.mtimeMs) return;
                    this.timeCache[t] = r.mtimeMs, e == "rename" && this.loadAddon(t, !0), e == "change" && this.reloadAddon(t, !0)
                } catch (r) {
                    if (r.code !== "ENOENT" && !r?.message.startsWith("ENOENT")) return;
                    delete this.timeCache[t], this.unloadAddon(t, !0)
                }
            })
        }
        unwatchAddons() {
            if (!this.watcher) return b.error(this.name, `Was not watching ${this.prefix} addons.`);
            this.watcher.close(), delete this.watcher, b.log(this.name, `No longer watching ${this.prefix} addons.`)
        }
        extractMeta(e, t) {
            if (!e.split(`
`)[0].includes("/**")) throw new Te(t, t, p("Addons.metaNotFound"), {
                message: "",
                stack: e
            }, this.prefix);
            let n = this.parseJSDoc(e);
            return (!n.author || typeof n.author != "string") && (n.author = p("Addons.unknownAuthor")), (!n.version || typeof n.version != "string") && (n.version = "???"), (!n.description || typeof n.description != "string") && (n.description = p("Addons.noDescription")), n
        }
        parseJSDoc(e) {
            let t = e.split("/**", 2)[1].split("*/", 1)[0],
                o = {},
                r = "",
                n = "";
            for (let s of t.split(Wy))
                if (s.length !== 0)
                    if (s.charAt(0) === "@" && s.charAt(1) !== " ") {
                        o[r] ? (Array.isArray(o[r]) || (o[r] = [o[r]]), o[r].push(n.trim())) : o[r] = n.trim();
                        let d = s.indexOf(" ");
                        r = s.substring(1, d), n = s.substring(d + 1)
                    } else n += " " + s.replace("\\n", `
`).replace(_y, "@");
            return o[r] ? (Array.isArray(o[r]) || (o[r] = [o[r]]), o[r].push(n.trim())) : o[r] = n.trim(), delete o[""], o.format = "jsdoc", o
        }
        requireAddon(e) {
            let t = qe.default.readFileSync(e, "utf8");
            t = Vy(t);
            let o = qe.default.statSync(e),
                r = this.extractMeta(t, Ve.default.basename(e));
            if (r.author || (r.author = p("Addons.unknownAuthor")), r.version || (r.version = "???"), r.description || (r.description = p("Addons.noDescription")), r.id = r.name || Ve.default.basename(e), r.slug = Ve.default.basename(e).replace(this.extension, "").replace(/ /g, "-"), r.filename = Ve.default.basename(e), r.added = o.atimeMs, r.modified = o.mtimeMs, r.size = o.size, r.fileContent = t, this.addonList.find(n => n.id == r.id)) throw new Te(r.name, e, p("Addons.alreadyExists", {
                context: this.prefix,
                name: r.name
            }), {}, this.prefix);
            return this.addonList.push(r), r
        }
        loadAddon(e, t = !1) {
            if (typeof e > "u") return;
            let o;
            try {
                o = this.requireAddon(Ve.default.resolve(this.addonFolder, e))
            } catch (n) {
                let s = this.addonList.find(d => d.filename == e);
                return s && (s.partial = !0, this.state[s.id] = !1, this.trigger("loaded", s)), n
            }
            let r = this.initializeAddon(o);
            return r ? (this.state[o.id] = !1, o.partial = !0, this.trigger("loaded", o), r) : (t && q.success(p("Addons.wasLoaded", {
                name: o.name,
                version: o.version
            })), this.trigger("loaded", o), this.state[o.id] ? this.startAddon(o) : this.state[o.id] = !1)
        }
        unloadAddon(e, t = !0, o = !1) {
            let r = typeof e == "string" ? this.addonList.find(n => n.id == e || n.filename == e) : e;
            return r ? (this.state[r.id] && (o ? this.stopAddon(r) : this.disableAddon(r)), this.addonList.splice(this.addonList.indexOf(r), 1), this.trigger("unloaded", r), t && q.success(p("Addons.wasUnloaded", {
                name: r.name
            })), !0) : !1
        }
        reloadAddon(e, t = !0) {
            let o = typeof e == "string" ? this.addonList.find(n => n.id == e || n.filename == e) : e;
            if (!o) return !1;
            let r = this.unloadAddon(o, t, !0);
            return o && !r ? r : this.loadAddon(o ? o.filename : e, t)
        }
        isLoaded(e) {
            return !!this.addonList.find(o => o.id == e || o.filename == e)
        }
        isEnabled(e) {
            let t = this.addonList.find(o => o.id == e || o.filename == e);
            return t ? this.state[t.id] : !1
        }
        getAddon(e) {
            return this.addonList.find(t => t.id == e || t.filename == e)
        }
        enableAddon(e) {
            let t = typeof e == "string" ? this.addonList.find(r => r.id == e) : e;
            if (!t || t.partial || this.state[t.id]) return;
            this.state[t.id] = !0, this.trigger("enabled", t);
            let o = this.startAddon(t);
            return this.saveState(), o
        }
        enableAllAddons() {
            let e = w.get("settings", "general", "showToasts");
            w.set("settings", "general", "showToasts", !1);
            for (let t = 0; t < this.addonList.length; t++) this.enableAddon(this.addonList[t]);
            w.set("settings", "general", "showToasts", e), this.trigger("batch")
        }
        disableAddon(e) {
            let t = typeof e == "string" ? this.addonList.find(r => r.id == e) : e;
            if (!t || t.partial || !this.state[t.id]) return;
            this.state[t.id] = !1, this.trigger("disabled", t);
            let o = this.stopAddon(t);
            return this.saveState(), o
        }
        disableAllAddons() {
            let e = w.get("settings", "general", "showToasts");
            w.set("settings", "general", "showToasts", !1);
            for (let t = 0; t < this.addonList.length; t++) this.disableAddon(this.addonList[t]);
            w.set("settings", "general", "showToasts", e), this.trigger("batch")
        }
        toggleAddon(e) {
            this.state[e] ? this.disableAddon(e) : this.enableAddon(e)
        }
        loadNewAddons() {
            let e = qe.default.readdirSync(this.addonFolder),
                t = this.addonList.filter(r => !e.includes(r.filename)).map(r => r.id);
            return {
                added: e.filter(r => !this.addonList.find(n => n.filename == r) && r.endsWith(this.extension) && qe.default.statSync(Ve.default.resolve(this.addonFolder, r)).isFile()),
                removed: t
            }
        }
        updateList() {
            let e = this.loadNewAddons();
            for (let t of e.added) this.loadAddon(t);
            for (let t of e.removed) this.unloadAddon(t)
        }
        loadAllAddons() {
            this.loadState();
            let e = [],
                t = qe.default.readdirSync(this.addonFolder);
            for (let o of t) {
                let r = Ve.default.resolve(this.addonFolder, o),
                    n = qe.default.statSync(r);
                if (!n || !n.isFile()) continue;
                if (this.timeCache[o] = n.mtimeMs, !o.endsWith(this.extension)) {
                    let d = o.match(this.duplicatePattern);
                    if (!d) continue;
                    let l = d[0],
                        c = o.replace(l, "") + this.extension;
                    if (qe.default.existsSync(c)) {
                        b.warn("AddonManager", `Duplicate files found: ${o} and ${c}`);
                        continue
                    }
                    qe.default.renameSync(r, Ve.default.resolve(this.addonFolder, c))
                }
                let s = this.loadAddon(o, !1);
                s instanceof Te ? e.push(s) : s !== !1 && this.initialAddonsLoaded++
            }
            return this.saveState(), this.watchAddons(), e
        }
        deleteAddon(e) {
            let t = typeof e == "string" ? this.addonList.find(o => o.id == e || o.filename == e) : e;
            if (t) return qe.default.unlinkSync(Ve.default.resolve(this.addonFolder, t.filename))
        }
        saveAddon(e, t) {
            let o = typeof e == "string" ? this.addonList.find(r => r.id == e || r.filename == e) : e;
            if (o) return qe.default.writeFileSync(Ve.default.resolve(this.addonFolder, o.filename), t)
        }
        editAddon(e, t) {
            let o = typeof e == "string" ? this.addonList.find(n => n.id == e || n.filename == e) : e;
            if (!o) return;
            let r = Ve.default.resolve(this.addonFolder, o.filename);
            return typeof t > "u" && (t = w.get("settings", "addons", "editAction")), t === "system" ? Hy(`${r}`) : t === "external" ? M.editor.open(this.prefix, o.filename) : this.openDetached(o)
        }
        openDetached(e) {
            let t = Ve.default.resolve(this.addonFolder, e.filename),
                o = qe.default.readFileSync(t).toString();
            if (this.windows.has(t)) return;
            this.windows.add(t);
            let r = i.createRef(),
                n = i.createElement(Xc, {
                    id: "bd-floating-editor-" + e.id,
                    ref: r,
                    content: o,
                    save: this.saveAddon.bind(this, e),
                    openNative: this.editAddon.bind(this, e, !0),
                    language: this.language
                });
            Qt.open({
                onClose: () => {
                    this.windows.delete(t)
                },
                onResize: () => {
                    !r || !r.current || !r.current.resize || r.current.resize()
                },
                title: e.name,
                id: "bd-floating-window-" + e.id,
                className: "floating-addon-window",
                height: 470,
                width: 410,
                center: !0,
                resizable: !0,
                children: n,
                confirmClose: () => !r || !r.current ? !1 : r.current.hasUnsavedChanges,
                confirmationText: p("Addons.confirmationText", {
                    name: e.name
                })
            })
        }
    }
});
var Bc = {};
Qr(Bc, {
    default: () => le
});
var of, rf, Gy, le, tt = x(() => {
    "use strict";
    of = Ae(require("path"), 1), rf = Ae(require("vm"), 1);
    ee();
    He();
    et();
    Cn();
    mr();
    V();
    Fe();
    ve();
    Gy = a => `
if (module.exports.default) {
    module.exports = module.exports.default;
}
if (typeof(module.exports) !== "function") {
    module.exports = eval("${a}");
}`, le = new class extends Xt {
        get name() {
            return "PluginManager"
        }
        get extension() {
            return ".plugin.js"
        }
        get duplicatePattern() {
            return /\.plugin\s?\([0-9]+\)\.js/
        }
        get addonFolder() {
            return W.get("pluginsPath")
        }
        get prefix() {
            return "plugin"
        }
        get language() {
            return "javascript"
        }
        get order() {
            return 3
        }
        addonList = [];observer;constructor() {
            super(), this.onSwitch = this.onSwitch.bind(this), this.observer = new MutationObserver(e => {
                for (let t = 0, o = e.length; t < o; t++) this.onMutation(e[t])
            })
        }
        initialize() {
            let e = super.initialize();
            return this.setupFunctions(), e
        }
        updatePluginList() {
            return this.updateList()
        }
        loadAllPlugins() {
            return this.loadAllAddons()
        }
        enablePlugin(e) {
            return this.enableAddon(e)
        }
        disablePlugin(e) {
            return this.disableAddon(e)
        }
        togglePlugin(e) {
            return this.toggleAddon(e)
        }
        unloadPlugin(e) {
            return this.unloadAddon(e)
        }
        loadPlugin(e) {
            return this.loadAddon(e)
        }
        loadAddon(e, t = !0) {
            let o = super.loadAddon(e, t);
            return o && t && z.showAddonErrors({
                plugins: [o]
            }), o
        }
        reloadPlugin(e) {
            let t = this.reloadAddon(e);
            return t && z.showAddonErrors({
                plugins: [t]
            }), typeof e == "string" ? this.addonList.find(o => o.id == e || o.filename == e) : e
        }
        initializeAddon(e) {
            if (!e.exports || !e.name) return new Te(e.name || e.filename, e.filename, "Plugin had no exports or @name property", {
                message: "Plugin had no exports or no @name property. @name property is required for all addons.",
                stack: ""
            }, this.prefix);
            try {
                if (!(typeof e.exports == "function")) return new Te(e.name || e.filename, e.filename, "Plugin not a valid format.", {
                    message: "Plugins should be either a function or a class",
                    stack: ""
                }, this.prefix);
                let o = e.exports,
                    r = Object.assign({}, e);
                delete r.exports;
                let n = o.prototype ? new o(r) : e.exports(r);
                if (!n.start || !n.stop) return new Te(e.name || e.filename, e.filename, "Missing start or stop function.", {
                    message: "Plugins must have both a start and stop function.",
                    stack: ""
                }, this.prefix);
                if (e.instance = n, e.name = n.getName ? n.getName() : e.name, e.author = n.getAuthor ? n.getAuthor() : e.author, e.description = n.getDescription ? n.getDescription() : e.description, e.version = n.getVersion ? n.getVersion() : e.version, !e.name || !e.author || !e.description || !e.version) return new Te(e.name || e.filename, e.filename, "Plugin is missing name, author, description, or version", {
                    message: "Plugin must provide name, author, description, and version.",
                    stack: ""
                }, this.prefix);
                try {
                    typeof e.instance.load == "function" && e.instance.load()
                } catch (s) {
                    return this.state[e.id] = !1, new Te(e.name, e.filename, p("Addons.methodError", {
                        method: "load()"
                    }), {
                        message: s.message,
                        stack: s.stack
                    }, this.prefix)
                }
            } catch (t) {
                return new Te(e.name, e.filename, p("Addons.methodError", {
                    method: "Plugin constructor()"
                }), {
                    message: t.message,
                    stack: t.stack
                }, this.prefix)
            }
        }
        requireAddon(e) {
            let t = super.requireAddon(e);
            try {
                let o = {
                    filename: e,
                    exports: {}
                };
                return rf.default.compileFunction(t.fileContent, ["require", "module", "exports", "__filename", "__dirname"], {
                    filename: of.default.basename(e)
                }), t.fileContent += Gy(t.exports || t.name), t.fileContent += `
//# sourceURL=betterdiscord://plugins/${t.filename}`, new Function("require", "module", "exports", "__filename", "__dirname", t.fileContent)(window.require, o, o.exports, o.filename, this.addonFolder), t.exports = o.exports, delete t.fileContent, t
            } catch (o) {
                throw new Te(t.name || t.filename, e, p("Addons.compileError"), {
                    message: o.message,
                    stack: o.stack
                }, this.prefix)
            }
        }
        startAddon(e) {
            return this.startPlugin(e)
        }
        stopAddon(e) {
            return this.stopPlugin(e)
        }
        getAddon(e) {
            return this.getPlugin(e)
        }
        startPlugin(e) {
            let t = typeof e == "string" ? this.addonList.find(r => r.id == e) : e;
            if (!t) return;
            let o = t.instance;
            try {
                o.start()
            } catch (r) {
                return this.state[t.id] = !1, this.trigger("disabled", t), q.warning(p("Addons.couldNotStart", {
                    name: t.name,
                    version: t.version
                })), b.stacktrace(this.name, `${t.name} v${t.version} could not be started.`, r), new Te(t.name, t.filename, p("Addons.methodError", {
                    method: "start()"
                }), {
                    message: r.message,
                    stack: r.stack
                }, this.prefix)
            }
            this.trigger("started", t.id), this.hasInitialized && q.success(p("Addons.enabled", {
                name: t.name,
                version: t.version
            }))
        }
        stopPlugin(e) {
            let t = typeof e == "string" ? this.addonList.find(r => r.id == e) : e;
            if (!t) return;
            let o = t.instance;
            try {
                o.stop()
            } catch (r) {
                return this.state[t.id] = !1, q.warning(p("Addons.couldNotStop", {
                    name: t.name,
                    version: t.version
                })), b.stacktrace(this.name, `${t.name} v${t.version} could not be started.`, r), new Te(t.name, t.filename, p("Addons.enabled", {
                    method: "stop()"
                }), {
                    message: r.message,
                    stack: r.stack
                }, this.prefix)
            }
            this.trigger("stopped", t.id), q.error(p("Addons.disabled", {
                name: t.name,
                version: t.version
            }))
        }
        getPlugin(e) {
            let t = this.addonList.find(o => o.id == e || o.filename == e);
            if (t) return t
        }
        setupFunctions() {
            N.on("navigate", this.onSwitch), this.observer.observe(document, {
                childList: !0,
                subtree: !0
            })
        }
        onSwitch() {
            for (let e = 0; e < this.addonList.length; e++) {
                if (!this.state[this.addonList[e].id]) continue;
                let t = this.addonList[e].instance;
                try {
                    typeof t?.onSwitch == "function" && t.onSwitch()
                } catch (o) {
                    b.stacktrace(this.name, `Unable to fire onSwitch for ${this.addonList[e].name} v${this.addonList[e].version}`, o)
                }
            }
        }
        onMutation(e) {
            for (let t = 0; t < this.addonList.length; t++) {
                if (!this.state[this.addonList[t].id]) continue;
                let o = this.addonList[t].instance;
                try {
                    typeof o?.observer == "function" && o.observer(e)
                } catch (r) {
                    b.stacktrace(this.name, `Unable to fire observer for ${this.addonList[t].name} v${this.addonList[t].version}`, r)
                }
            }
        }
    }
});
ee();
var xa = class a {
    static get EventEmitter() {
        return a
    }
    events = {};
    setMaxListeners() {}
    on(e, t) {
        this.events[e] || (this.events[e] = new Set), this.events[e].add(t)
    }
    emit(e, ...t) {
        if (this.events[e])
            for (let [o, r] of this.events[e].entries()) try {
                r(...t)
            } catch (n) {
                b.error("Emitter", `Cannot fire listener for event ${e} at position ${o}:`, n)
            }
    }
    off(e, t) {
        if (this.events[e]) return this.events[e].delete(t)
    }
};
ee();
Ge();
var oi = function(a, e = [], t = {}) {
        let o = M.vm.compileFunction(a, e, t);
        if (typeof o == "function") return o;
        let r = new SyntaxError(o.message);
        throw r.stack = o.stack, r
    },
    $s = {
        compileFunction: oi
    };
Ge();
zo();
var ct = M.path,
    Bo = {
        ".js": (a, e) => {
            let t = M.filesystem.readFile(e, "utf8");
            return a.fileContent = t, a._compile(t), a.exports
        },
        ".json": (a, e) => {
            let t = M.filesystem.readFile(e, "utf8");
            return a.fileContent = t, a.exports = JSON.parse(t), a.exports
        }
    },
    va = class a {
        static resolveMainFile(e, t) {
            let o = ct.extname(t) ? ct.dirname(t) : t,
                r = M.filesystem.readDirectory(o);
            if (!Array.isArray(r)) return null;
            for (let n of r) {
                let s = ct.extname(n);
                if (n === "package.json") {
                    let d = require(ct.resolve(o, n));
                    if (!Reflect.has(d, "main")) continue;
                    return ct.resolve(o, d.main)
                }
                if (s.slice(0, -s.length) == "index" && Bo[s]) return e
            }
        }
        static getExtension(e) {
            return ct.extname(e) || Reflect.ownKeys(Bo).find(t => M.filesystem.exists(e + t))
        }
        static getFilePath(e, t) {
            if (ct.isAbsolute(t) || (t = ct.resolve(e, t)), !ct.extname(t)) {
                let r = Reflect.ownKeys(Bo).find(n => M.filesystem.exists(t + n));
                r && (t = t + r)
            }
            return Ne.realpathSync(t)
        }
        static _load(e, t, o) {
            let r = e;
            ct.isAbsolute(e) || (e = ct.resolve(t, e));
            let n = this.getFilePath(t, e);
            if (!M.filesystem.exists(n)) throw new Error(`Cannot find module ${e}`);
            if (window.require.cache[n]) return window.require.cache[n].exports;
            M.filesystem.getStats(n).isDirectory() && (e = this.resolveMainFile(e, t));
            let d = this.getExtension(n),
                l = Bo[d];
            if (!l) throw new Error(`Cannot find module ${r}`);
            let u = window.require.cache[e] = new a(n, Xm, o(e));
            return l(u, n), u.exports
        }
        static get Module() {
            return a
        }
        static get createRequire() {
            return b.warn("ContextModule", "Module.createRequire not implemented yet.")
        }
        static get _extensions() {
            return Bo
        }
        id;
        path;
        exports;
        parent;
        filename;
        loaded;
        children;
        fileContent;
        require;
        constructor(e, t, o) {
            this.id = e, this.path = M.path.dirname(e), this.exports = {}, this.parent = t, this.filename = e, this.loaded = !1, this.children = [], this.require = o, t && t.children.push(this)
        }
        _compile(e) {
            oi(e, ["require", "module", "exports", "__filename", "__dirname", "global"], this.filename)(this.require, this, this.exports, this.filename, this.path, window)
        }
    },
    Xm = new va(".", null);
zo();
ee();
Ge();
var Ys = ["get", "put", "post", "delete", "head"],
    Js = {
        del: "delete"
    };

function Qs(...a) {
    let e, t, o;
    for (let r of a) switch (typeof r) {
        case (r !== null && "object"):
            t = r, "url" in t && (e = t.url);
            break;
        case (!e && "string"):
            e = r;
            break;
        case (!o && "function"):
            o = r;
            break
    }
    return {
        url: e,
        options: t,
        callback: o
    }
}

function ed(a) {
    return typeof a == "string"
}

function td(a) {
    return typeof a == "function"
}

function Jm(a) {
    return Array.isArray(a)
}

function ri(a, e) {
    return (t, o, r) => {
        try {
            let n;
            if (a.headers)
                if (Jm(a.headers)) n = a.headers.find(([s]) => s.toLowerCase() === "content-type")?.[1];
                else {
                    let s = Object.keys(a.headers).find(d => d.toLowerCase() === "content-type");
                    n = s ? a.headers[s] : void 0
                } String(n) !== "text/plain" ? r = Buffer.from(r) : r = Buffer.from(r).toString()
        } catch (n) {
            b.debug("BetterDiscordPreload", "Failed to convert response body to buffer", {
                catchError: n,
                options: a,
                error: t,
                res: o,
                body: r
            })
        } finally {
            e(t, o, r)
        }
    }
}

function sa(...a) {
    let {
        url: e,
        options: t = {},
        callback: o
    } = Qs.apply(this, a);
    return !ed(e) || !td(o) ? null : "method" in t && Ys.indexOf(t.method.toLowerCase()) >= 0 ? M.https[t.method](e, t, ri(t, o)) : M.https.request(e, t, ri(t, o))
}
Object.assign(sa, Object.fromEntries(Ys.concat(Object.keys(Js)).map(a => [a, function(...e) {
    let {
        url: t,
        options: o = {},
        callback: r
    } = Qs.apply(this, e);
    return !ed(t) || !td(r) ? null : M.https[Js[a] || a](t, o, ri(o, r))
}])));
Ge();

function Ym(a, e = {}, t) {
    typeof e == "function" && (t = e, e = null);
    let o = new xa;
    return t(o), M.https.get(a, e, (r, n, s) => {
        if (r) return o.emit("error", r);
        o.emit("data", s), o.emit("end", n)
    }), o
}
var ad = {
    get: Ym
};
ee();
var hi = Ae(Cd(), 1);
Object.defineProperty(window, "Buffer", {
    get() {
        return b.warn("Deprecated", "Usage of the Buffer global is deprecated. Consider using web standards such as Uint8Array and TextDecoder/TextEncoder."), hi.Buffer
    },
    configurable: !0,
    enumerable: !1
});
var Sd = hi.Buffer;
Ge();
var Ld = {
    ...M.crypto,
    randomBytes(a) {
        return Buffer.from(M.crypto.randomBytes(a))
    }
};
Ge();
ee();
var Id = new Map([
        ["request", "Use BdApi.Net.fetch instead."],
        ["https", "Use BdApi.Net.fetch instead."]
    ]),
    gi = Object.assign({}, Ne);
gi.writeFileSync = (a, e, t) => Ne.writeFileSync(a, e, Object.assign({}, t, {
    originalFs: !0
}));
gi.writeFile = (a, e, t) => Ne.writeFile(a, e, Object.assign({}, t, {
    originalFs: !0
}));
var Ad = function(a) {
        return e => {
            if (!(typeof e == "string" && e.startsWith("./"))) switch (Id.has(e) && b.warn("Remote~Require", `The "${e}" module is marked as deprecated. ${Id.get(e)}`), e) {
                case "request":
                    return sa;
                case "https":
                    return ad;
                case "original-fs":
                    return gi;
                case "fs":
                    return Ne;
                case "path":
                    return M.path;
                case "events":
                    return xa;
                case "electron":
                    return M.electron;
                case "process":
                    return window.process;
                case "vm":
                    return $s;
                case "module":
                    return va;
                case "buffer":
                    return Sd;
                case "crypto":
                    return Ld;
                default:
                    return va._load(e, a, Ad)
            }
        }
    },
    on = window.require = Ad(".");
on.cache = {};
on.resolve = a => {
    for (let e of Object.keys(on.cache))
        if (e.startsWith(a)) return on.cache[e]
};

function Td() {
    let a = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "contentWindow").get;
    Object.defineProperty(HTMLIFrameElement.prototype, "contentWindow", {
        get: function(...t) {
            let o = Reflect.apply(a, this, t);
            return new Proxy(o, {
                getOwnPropertyDescriptor: function(r, n) {
                    if (n !== "localStorage") return Object.getOwnPropertyDescriptor(r, n)
                },
                get: function(r, n) {
                    if (n === "localStorage") return null;
                    let s = r[n];
                    return typeof s == "function" ? s.bind(r) : s
                }
            })
        }
    }), Object.defineProperty(Reflect, "apply", {
        value: Reflect.apply,
        writable: !1,
        configurable: !1
    }), Object.defineProperty(Function.prototype, "bind", {
        value: Function.prototype.bind,
        writable: !1,
        configurable: !1
    });
    let e = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(...t) {
        return t[1].toLowerCase().includes("api/webhooks") ? null : Reflect.apply(e, this, t)
    }
}
var Dh = `/* BEGIN V2 LOADER */
/* =============== */

#bd-loading-icon {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAwMCAyMDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAwIDIwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGZpbGw9IiMzRTgyRTUiIGQ9Ik0xNDAyLjIsNjMxLjdjLTkuNy0zNTMuNC0yODYuMi00OTYtNjQyLjYtNDk2SDY4LjR2NzE0LjFsNDQyLDM5OFY0OTAuN2gyNTdjMjc0LjUsMCwyNzQuNSwzNDQuOSwwLDM0NC45SDU5Ny42djMyOS41aDE2OS44YzI3NC41LDAsMjc0LjUsMzQ0LjgsMCwzNDQuOGgtNjk5djM1NC45aDY5MS4yYzM1Ni4zLDAsNjMyLjgtMTQyLjYsNjQyLjYtNDk2YzAtMTYyLjYtNDQuNS0yODQuMS0xMjIuOS0zNjguNkMxMzU3LjcsOTE1LjgsMTQwMi4yLDc5NC4zLDE0MDIuMiw2MzEuN3oiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTI2Mi41LDEzNS4yTDEyNjIuNSwxMzUuMmwtNzYuOCwwYzI2LjYsMTMuMyw1MS43LDI4LjEsNzUsNDQuM2M3MC43LDQ5LjEsMTI2LjEsMTExLjUsMTY0LjYsMTg1LjNjMzkuOSw3Ni42LDYxLjUsMTY1LjYsNjQuMywyNjQuNmwwLDEuMnYxLjJjMCwxNDEuMSwwLDU5Ni4xLDAsNzM3LjF2MS4ybDAsMS4yYy0yLjcsOTktMjQuMywxODgtNjQuMywyNjQuNmMtMzguNSw3My44LTkzLjgsMTM2LjItMTY0LjYsMTg1LjNjLTIyLjYsMTUuNy00Ni45LDMwLjEtNzIuNiw0My4xaDcyLjVjMzQ2LjIsMS45LDY3MS0xNzEuMiw2NzEtNTY3LjlWNzE2LjdDMTkzMy41LDMxMi4yLDE2MDguNywxMzUuMiwxMjYyLjUsMTM1LjJ6Ii8+PC9nPjwvc3ZnPg==);
}
#bd-loading-icon {
  position: fixed;
  bottom:5px;
  right:5px;
  z-index: 2147483647;
  display: block;
  width: 20px;
  height: 20px;
  background-size: 100% 100%;
  animation: bd-loading-animation 1.5s ease-in-out infinite;
}

@keyframes bd-loading-animation {
  0% { opacity: 0.05; }
  50% { opacity: 0.6; }
  100% { opacity: 0.05; }
}
/* =============== */
/*  END V2 LOADER  */`,
    rn = document.createElement("style");
rn.textContent = Dh;
var ro = document.createElement("div");
ro.id = "bd-loading-icon";
ro.className = "bd-loaderv2";
ro.title = "BetterDiscord is loading...";
var no = class {
    static show() {
        document.body.appendChild(rn), document.body.appendChild(ro)
    }
    static hide() {
        rn && rn.remove(), ro && ro.remove()
    }
};
ee();
He();
He();
var nn = {
    title: "BetterDiscord",
    subtitle: `v${W.get("version")}`,
    blurb: "Bug fixes",
    changes: [{
        title: "BetterDiscord works!",
        type: "fixed",
        items: ["Fixed for latest Discord changes"]
    }]
};
var Yn = {};
Qr(Yn, {
    AddonStore: () => tp,
    CustomCSS: () => Xe,
    DebugLogs: () => fp,
    Debugger: () => sp,
    DefaultCommands: () => Jf,
    DevToolsListener: () => ip,
    InspectElement: () => lp,
    MediaKeys: () => Wf,
    NativeFrame: () => hp,
    ReactDevTools: () => dp,
    Recovery: () => np,
    RemoveMinimumSize: () => mp,
    StopDevToolsWarning: () => up,
    ThemeAttributes: () => Vf,
    VoiceDisconnect: () => Hf,
    WindowPrefs: () => pp
});
var oa = Ae(require("fs"), 1),
    vs = Ae(require("path"), 1),
    qf = Ae(require("electron"), 1);
ee();
Fe();
me();
Kt();
Kt();
I();
tt();
ee();
pe();
var vr = {
        CHAT_INPUT: 1,
        USER: 2,
        MESSAGE: 3
    },
    Nn = {
        BUILT_IN: 0,
        TEXT: 1,
        SEARCH: 2,
        BOT: 3,
        PLACEHOLDER: 4
    },
    $e = {
        SUB_COMMAND: 1,
        SUB_COMMAND_GROUP: 2,
        STRING: 3,
        INTEGER: 4,
        BOOLEAN: 5,
        USER: 6,
        CHANNEL: 7,
        ROLE: 8,
        MENTIONABLE: 9,
        NUMBER: 10,
        ATTACHMENT: 11
    },
    nf = {
        IMAGE: "image",
        VIDEO: "video",
        LINK: "link",
        ARTICLE: "article",
        TWEET: "tweet",
        RICH: "rich",
        GIFV: "gifv",
        APPLICATION_NEWS: "application_news",
        AUTO_MODERATION_MESSAGE: "auto_moderation_message",
        AUTO_MODERATION_NOTIFICATION: "auto_moderation_notification",
        TEXT: "text",
        POST_PREVIEW: "post_preview",
        GIFT: "gift",
        SAFETY_POLICY_NOTICE: "safety_policy_notice",
        SAFETY_SYSTEM_NOTIFICATION: "safety_system_notification",
        VOICE_CHANNEL: "voice_channel",
        GAMING_PROFILE: "gaming_profile"
    };
var xr = {
        ...de(a => a.wrapper && a.icon && a.selected && a.selectable && !a.mask, {
            firstId: 60090,
            cacheId: "core-commandmanager-iconClasses"
        }),
        builtInSeparator: de(a => a.builtInSeparator, {
            firstId: 681755,
            cacheId: "core-commandmanager-builtInSeparatorClasses"
        })?.builtInSeparator
    },
    Ky = a => a?.replace(/'s /g, " ").match(/\b\w/g)?.join("").slice(0, 2) ?? "",
    $y = a => {
        try {
            let e = new URL(a);
            return e.protocol === "data:" && e.pathname.startsWith("image/") || e.protocol === "https:"
        } catch {
            return !1
        }
    },
    Vi = class a {
        static #e = new Map;
        static #t = new Map;
        static User = ht(["hasHadPremium(){"], {
            firstId: 427157,
            cacheId: "core-commandmanager-user"
        });
        static createBotMessage = ht(['username:"Clyde"'], {
            searchExports: !0,
            firstId: 963852,
            cacheId: "core-commandmanager-createBotMessage"
        });
        static MessagesModule = te(["receiveMessage"], {
            firstId: 843472,
            cacheId: "core-commandmanager-messages"
        });
        static IconsModule = te(["BOT_AVATARS"], {
            firstId: 820883,
            cacheId: "core-commandmanager-icons"
        });
        static localBDBot;
        static initialize() {
            this.#a()
        }
        static #a() {
            this.localBDBot = new this.User({
                avatar: "betterdiscord",
                id: "676620914632294467",
                bot: !0,
                username: "BetterDiscord",
                system: !0
            }), this.#o(), this.#i(), this.#s(), this.#r(), this.#d(), this.IconsModule.BOT_AVATARS.betterdiscord = "https://github.com/BetterDiscord.png"
        }
        static #o() {
            let e = ht([".BUILT_IN?", "categoryListRef:"], {
                defaultExport: !1
            });
            $.after("CommandManager", e, "A", (t, [o], r) => {
                if (!this.#t.size) return;
                let n = r.props.children;
                n.props?.__bdPatched || (r.props.children = i.cloneElement(n, {
                    renderCategoryListItem: (...s) => {
                        let d = n.props.renderCategoryListItem(...s);
                        return !o.sections[s[1] - 1]?.isBD && o.sections[s[1]].isBD ? i.cloneElement(d, {
                            children: [i.createElement("hr", {
                                className: xr.builtInSeparator
                            }), ...d.props.children]
                        }) : d
                    },
                    __bdPatched: !0
                }))
            })
        }
        static #r() {
            let [e, t] = Mt(F.byStrings(".getScoreWithoutLoadingLatest"), {
                firstId: 264322,
                cacheId: "core-commandmanager-indexstore"
            });
            $.after("CommandManager", e, t, (o, r, n) => {
                if (!r[2].commandTypes.includes(vr.CHAT_INPUT)) return n;
                for (let l of n.sectionedCommands) l.section.id === "-1" && (l.data = l.data.filter(u => !u.isBD));
                let s = n.descriptors.findIndex(l => l.id === "-1"),
                    d = n.sectionedCommands.findIndex(l => l.section.id === "-1");
                for (let l of this.#t.values()) {
                    let u = this.getCommandsByCaller(l.id);
                    u.length > 0 && (n.sectionedCommands.splice(d++, 0, {
                        section: l,
                        data: u
                    }), n.descriptors.splice(s++, 0, l), n.commands.push(...u))
                }
                return n
            })
        }
        static #i() {
            let e = La("ApplicationCommandIndexStore");
            $.after("CommandManager", e, "query", (t, o, r) => {
                if (!o[1].commandTypes.includes(vr.CHAT_INPUT)) return r;
                let n = o[1].text || "";
                for (let s of r.sectionedCommands) s.section.id === "-1" && (s.data = s.data.filter(d => !d.isBD));
                for (let s of this.#t.values()) {
                    let d = this.getCommandsByCaller(s.id).filter(l => l.name.includes(n) || l.description.includes(n));
                    d.length > 0 && (r.sectionedCommands.push({
                        section: s,
                        data: d
                    }), r.descriptors.push(s), r.commands.unshift(...d))
                }
            })
        }
        static #s() {
            let [e, t] = Mt(F.byStrings(".type===", ".BUILT_IN?"), {
                target: de((o, r) => ln[r.id].toString().includes("hasSpaceTerminator:"), {
                    firstId: 826298,
                    cacheId: "core-commandmanager-appIcons"
                })
            });
            $.after("CommandManager", e, t, (o, [{
                id: r
            }], n) => {
                let d = (() => {
                        let c = le.getAddon(r)?.icon || le.getPlugin(r)?.instance?.icon || null,
                            f = this.#t.has(r) ? this.#t.get(r)?.icon : null;
                        return c || f
                    })(),
                    l = Ky(r),
                    u = ({
                        width: c,
                        height: f,
                        padding: m = 0,
                        className: h,
                        isSelected: g,
                        selectable: k
                    }) => {
                        let L = [k && xr.selectable, g && xr.selected, xr.wrapper, xr.icon, h].filter(Boolean).join(" "),
                            R = {
                                width: c,
                                height: f,
                                padding: m
                            },
                            T = () => i.createElement("img", {
                                src: d,
                                alt: l,
                                style: {
                                    width: "100%",
                                    height: "100%"
                                }
                            }),
                            H = () => i.createElement("span", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: Math.min(c, f) / 1.2,
                                    backgroundColor: "transparent",
                                    borderRadius: "50%",
                                    width: "100%",
                                    fontWeight: "bold",
                                    height: "100%"
                                }
                            }, l),
                            A = () => typeof d == "function" ? i.createElement(d) : typeof d == "string" && $y(d) ? T() : H();
                        return i.createElement("div", {
                            style: R,
                            className: L
                        }, A())
                    };
                return this.#t.has(r) ? u : n
            })
        }
        static #d() {
            let [e, t] = Mt(F.byStrings("openOAuth2Modal", "Promise.resolve", "commandIntegrationTypes"), {
                firstId: 972995,
                cacheId: "core-commandmanager-authorizer"
            });
            $.instead("CommandManager", e, t, (o, r, n) => this.#t.has(r[0]?.applicationId) ? Promise.resolve({
                isAuthorized: !0
            }) : n.apply(o, r))
        }
        static registerCommand(e, t) {
            if (!e || !t?.name || !t?.execute) throw new Error("Command must have a caller, name, and execute function");
            let o = this.#e.get(e) || new Map,
                r = `bd-${e}-${t.id}`;
            if (o.has(r)) throw new Error(`Command with id ${r} is already registered`);
            let n = this.#l(e, t, r);
            return o.set(r, n), this.#e.set(e, o), this.#n(e), () => this.unregisterCommand(e, t.id)
        }
        static #l(e, t, o) {
            let r = this;
            return {
                integrationType: 0,
                integrationTitle: e,
                inputType: Nn.BUILT_IN,
                get id() {
                    return o
                },
                get __registerId() {
                    return o
                },
                get applicationId() {
                    return e
                },
                get displayName() {
                    return t.name || ""
                },
                get target() {
                    return vr.CHAT_INPUT
                },
                get name() {
                    return t.name || ""
                },
                get description() {
                    return t.description || ""
                },
                get displayDescription() {
                    return t.description || ""
                },
                get options() {
                    return a.#u(t.options)
                },
                execute: this.#c(t),
                get section() {
                    return r.#n(e), r.#t.get(e)
                },
                isBD: !0,
                __proto__: t
            }
        }
        static optionsMap = new WeakMap;
        static #u(e) {
            if (!e) return [];
            if (this.optionsMap.has(e)) return this.optionsMap.get(e);
            let t = e.map(o => ({
                get name() {
                    return o.name
                },
                get description() {
                    return o.description
                },
                get displayDescription() {
                    return o.description
                },
                type: o.type,
                get required() {
                    return o.required || !1
                },
                get choices() {
                    return o.choices?.map(r => ({
                        ...r,
                        get name() {
                            return r.name
                        },
                        get displayName() {
                            return r.name
                        }
                    }))
                },
                get displayName() {
                    return o.name
                },
                __proto__: o
            }));
            return this.optionsMap.set(e, t), t
        }
        static #n(e) {
            this.#t.has(e) || this.#t.set(e, {
                id: e,
                name: e,
                type: 1,
                key: "1",
                icon: e === "BetterDiscord" ? "https://github.com/BetterDiscord.png" : null,
                isBD: !0
            })
        }
        static #c(e) {
            return (t, {
                channel: o,
                guild: r
            }) => {
                try {
                    let n = e.execute(t, {
                        channel: o,
                        guild: r
                    });
                    return (!("inputType" in e) || e.inputType === Nn.BUILT_IN) && this.sendBotMessage(n, {
                        channel: o,
                        guild: r
                    }), n
                } catch (n) {
                    b.stacktrace("CommandManager", `Failed to run execute() for command ${e.name}`, n)
                }
            }
        }
        static async sendBotMessage(e, {
            channel: t
        }) {
            try {
                e = await e
            } catch (r) {
                return b.stacktrace("CommandManager", "Failed to get result of execute()", r)
            }
            if (!(e !== null && typeof e == "object" && !Array.isArray(e))) return;
            let o = this.createBotMessage({
                channelId: t.id,
                content: typeof e.content == "string" ? e.content : void 0,
                loggingName: void 0,
                type: 20
            });
            typeof e.embeds == "object" && e.embeds !== null && (o.embeds = Array.isArray(e.embeds) ? e.embeds : [e.embeds], o.embeds = o.embeds.map(r => ({
                ...r,
                type: r.type || "rich"
            }))), Object.assign(o, {
                author: this.localBDBot
            }), (o.content || Array.isArray(o.embeds) && o.embeds.length > 0) && this.MessagesModule.receiveMessage(t.id, o, !0)
        }
        static unregisterCommand(e, t) {
            let o = `bd-${e}-${t}`,
                r = this.#e.get(e);
            r?.delete(o) && r.size === 0 && (this.#e.delete(e), this.#t.delete(e))
        }
        static unregisterAll(e) {
            this.#e.delete(e), this.#t.delete(e)
        }
        static getCommandsByCaller(e) {
            return Array.from(this.#e.get(e)?.values() || [])
        }
    },
    ea = Vi;
var Y = class {
    initialized = !1;
    #e = new Set;
    get name() {
        return "Unnamed Builtin"
    }
    get collection() {
        return "settings"
    }
    get category() {
        return "general"
    }
    get id() {
        return "None"
    }
    async initialize() {
        w.get(this.collection, this.category, this.id) && await this.enable(), N.on("setting-updated", (e, t, o, r) => {
            e != this.collection || t !== this.category || o !== this.id || (r ? this.enable() : this.disable())
        }), this.initialized = !0
    }
    registerSetting(e, t, o, r, n) {
        return arguments.length == 4 ? (e = this.collection, t = arguments[0], o = arguments[1], r = arguments[2], n = arguments[3]) : arguments.length == 3 && (e = this.collection, t = this.category, o = arguments[0], r = arguments[1], n = arguments[2]), w.on(e, t, o, s => {
            s ? r() : n()
        })
    }
    get(e, t, o) {
        return arguments.length == 2 ? (e = this.collection, t = arguments[0], o = arguments[1]) : arguments.length == 1 && (e = this.collection, t = this.category, o = arguments[0]), w.get(e, t, o)
    }
    async enable() {
        this.log("Enabled");
        try {
            await this.enabled()
        } catch (e) {
            this.stacktrace("Could not be enabled", e)
        }
    }
    async disable() {
        this.log("Disabled");
        try {
            await this.disabled()
        } catch (e) {
            this.stacktrace("Could not be disabled", e)
        }
    }
    async enabled() {}
    async disabled() {}
    log(...e) {
        b.log(this.name, ...e)
    }
    warn(...e) {
        b.warn(this.name, ...e)
    }
    error(...e) {
        b.err(this.name, ...e)
    }
    stacktrace(e, t) {
        b.stacktrace(this.name, e, t)
    }
    before(e, t, o) {
        return $.before(this.name, e, t, o)
    }
    instead(e, t, o) {
        return $.instead(this.name, e, t, o)
    }
    after(e, t, o) {
        return $.after(this.name, e, t, o)
    }
    unpatchAll() {
        return $.unpatchAll(this.name)
    }
    addCommands(...e) {
        for (let t of e) {
            let o = ea.registerCommand("BetterDiscord", t);
            this.#e.add(o)
        }
    }
    removeCommands() {
        for (let e of this.#e) e()
    }
};
me();
I();
me();
Dt();
pe();
Kt();
_();
I();
var Ua = class {
    #e = Symbol("BetterDiscord.NodePatcher");
    #t = new WeakMap;
    #a = !1;
    patch(e, t) {
        if (this.#a) return;
        let o = () => this.#a,
            r = e.type;
        if (this.#t.has(r)) {
            e.type = this.#t.get(r);
            return
        }
        if (r[this.#e]) {
            e.type = r[this.#e];
            return
        }
        if (r.prototype?.isReactComponent) {
            class l extends r {
                render() {
                    let c = super.render();
                    if (o()) return c;
                    let f = t(this.props, c, this);
                    return typeof f > "u" ? c : f
                }
            }
            this.#t.set(r, l), this.#t.set(l, l), l[this.#e] = l, e.type = l;
            return
        }
        let n = lt.getType(r);

        function s(...l) {
            let u = n(...l),
                c = l.length === 1 ? l[0] : Object.assign({
                    ref: l[1]
                }, l[0]);
            if (u instanceof Promise) return u.then(m => {
                if (o()) return m;
                let h = t(c, m);
                return typeof h > "u" ? m : h
            });
            if (o()) return u;
            let f = t(c, u);
            return typeof f > "u" ? u : f
        }
        let d = s;
        if (typeof r == "object") {
            let l = r;
            l.type ? d = i.memo(l.type?.render ? i.forwardRef(d) : d, l.compare) : l.render ? d = i.forwardRef(d) : l._payload && (d = i.lazy(() => {
                let u = l._init(l._payload),
                    c = f => {
                        let m = {
                            type: f
                        };
                        return this.patch(m, t), m.type
                    };
                return u instanceof Promise ? u.catch(f => ({
                    default: c(f.default)
                })) : Promise.resolve({
                    default: c(u)
                })
            }))
        }
        for (let l of ["defaultProps", "displayName", "propTypes"]) {
            let u = Object.getOwnPropertyDescriptor(r, l);
            u && Object.defineProperty(d, l, u)
        }
        this.#t.set(r, d), this.#t.set(d, d), d[this.#e] = d, e.type = d
    }
    destroy() {
        this.#a = !0
    }
};
I();
var df = "Minified React error #460; visit https://react.dev/errors/460 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.",
    sf = Symbol("no-resolve"),
    Zy = {
        use(a) {
            if (typeof a.then == "function") {
                let e = sf;
                if (a.then(t => {
                        e = t
                    }), e === sf) throw new Error(df);
                return e
            }
            return a._currentValue
        },
        useFormState(a, e, t) {
            return [e, () => {}, !1]
        },
        readContext(a) {
            return a._currentValue
        },
        useOptimistic(a) {
            return [a, () => {}]
        },
        useMemo(a) {
            return a()
        },
        useState(a) {
            return typeof a == "function" ? [a(), () => {}] : [a, () => {}]
        },
        useReducer(a, e) {
            return [e, () => {}]
        },
        useRef(a = null) {
            return {
                current: a
            }
        },
        useCallback(a) {
            return a
        },
        useContext(a) {
            return a._currentValue
        },
        useEffect() {},
        useLayoutEffect() {},
        useImperativeHandle() {},
        useTransition() {
            return [!1, a => a()]
        },
        useActionState(a, e, t) {
            return [e, () => {}, !1]
        },
        useInsertionEffect() {},
        useDebugValue() {},
        useDeferredValue(a) {
            return a
        },
        useSyncExternalStore(a, e) {
            return e()
        },
        useId() {
            return Math.random().toString(36).substr(2, 9)
        }
    },
    Gi = {
        memo: Symbol.for("react.memo"),
        forwardRef: Symbol.for("react.forward_ref"),
        lazy: Symbol.for("react.lazy")
    },
    Fn = {
        get rootInstance() {
            return document.getElementById("app-mount")?._reactRootContainer?._internalRoot?.current
        },
        getInternalInstance(a) {
            if (a.__reactFiber$) return a.__reactFiber$;
            let e = Object.keys(a).find(t => t.startsWith("__reactInternalInstance") || t.startsWith("__reactFiber"));
            return e ? a[e] : null
        },
        getOwnerInstance(a, {
            include: e,
            exclude: t = ["Popout", "Tooltip", "Scroller", "BackgroundFlash"],
            filter: o = () => !0
        } = {}) {
            if (!a) return null;
            let r = e === void 0,
                n = r ? t : e;

            function s(u) {
                let c = u.type;
                return c && (c.displayName || c.name) || null
            }

            function d(u) {
                let c = s(u);
                return c !== null && n?.includes(c) !== r
            }
            let l = Fn.getInternalInstance(a);
            for (; l && l.return;) {
                l = l.return;
                let u = l.stateNode;
                if (u && !(u instanceof HTMLElement) && d(l) && o(u)) return u
            }
            return null
        },
        wrapElement(a) {
            return class extends i.Component {
                element;
                state;
                ref = i.createRef();
                constructor(t) {
                    super(t), this.element = a, this.state = {
                        hasError: !1
                    }
                }
                componentDidCatch() {
                    this.setState({
                        hasError: !0
                    })
                }
                componentDidMount() {
                    let t = this.ref?.current;
                    t && (Array.isArray(this.element) ? this.element.forEach(o => t.appendChild(o)) : t.appendChild(this.element))
                }
                render() {
                    return this.state.hasError ? null : C.React.createElement("div", {
                        className: "react-wrapper",
                        ref: this.ref
                    })
                }
            }
        },
        wrapInHooks(a, e = {}) {
            let t = Fn.getType(a);
            return function(r) {
                let n = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H,
                    s = {
                        ...n
                    };
                Object.assign(n, Zy, e);
                try {
                    return t(r)
                } catch (d) {
                    if (d instanceof Error && d.message === df) return;
                    throw d
                } finally {
                    Object.assign(n, s)
                }
            }
        },
        getType(a) {
            for (;;) switch (a.$$typeof) {
                case Gi.memo:
                    a = a.type;
                    break;
                case Gi.forwardRef:
                    a = a.render;
                    break;
                case Gi.lazy: {
                    let e = a._payload;
                    e._status === 1 ? a = e._result.default : a = () => {};
                    break
                }
                default:
                    return a
            }
        },
        createNodePatcher() {
            return new Ua
        }
    };
Object.freeze(Fn);
var lt = Fn;
I();
I();
var mf = Ae(require("path"), 1),
    hf = Ae(require("fs"), 1);
ee();
et();
Dt();
V();
I();
tt();
Bt();
ve();
_();
V();
pe();
var On = new class {
    get discordLocale() {
        return Pe.LocaleStore?.locale ?? this.defaultLocale
    }
    get defaultLocale() {
        return "en-US"
    }
    initialize() {
        Ai.setLocale(this.discordLocale), Pe.LocaleStore?.addChangeListener(() => Ai.setLocale(this.discordLocale))
    }
};
I();
me();
V();
var $i = "betterdiscord.app",
    cf = "v3",
    vo = (...a) => {
        let e = a.map(t => t.match(/\/*(.+)\/*/)?.[1]).filter(Boolean).join("/");
        return `https://${$i}/${e}`
    },
    Rn = (...a) => {
        let e = a.map(t => t.match(/\/*(.+)\/*/)?.[1]).filter(Boolean).join("/");
        return `https://api.${$i}/${cf}/${e}`
    },
    Ki = a => e => vo(`${a}/${encodeURIComponent(e)}`),
    Un = a => e => vo(`${a}?id=${e}`),
    lf = {
        theme: ["813903993524715522", "781600198002081803"],
        plugin: ["813903954991120385", "781600250858700870"]
    },
    Xy = !0,
    uf = /^https:\/\/raw\.githubusercontent\.com\/(.+?)\/(.+?)\/(.+?)\/(.+)$/,
    re = class a {
        static getReleaseChannelType(e) {
            if (lf.plugin.includes(e)) return "plugin";
            if (lf.theme.includes(e)) return "theme"
        }
        static convertToPreviewURL(e) {
            let t = e.match(uf);
            if (!t) throw new Error("Failed to parse url!");
            let [, o, r, n, s] = t, d = `https://cdn.jsdelivr.net/gh/${o}/${r}@${n}/${s}`;
            return `https://discord-preview.vercel.app/?file=${encodeURIComponent(d)}`
        }
        static convertRawToGitHubURL(e) {
            let t = e.match(uf);
            if (!t) throw new Error("Failed to parse url!");
            let [, o, r, n, s] = t;
            return `https://github.com/${o}/${r}/blob/${n}/${s}`
        }
        static API_VERSION = cf;
        static hostname = $i;
        static redirects = {
            github: Un("/gh-redirect"),
            download: Un("/download"),
            theme: Un("/theme"),
            plugin: Un("/plugin")
        };
        static pages = {
            themes: vo("/themes"),
            theme: Ki("/theme"),
            plugins: vo("/plugins"),
            plugin: Ki("/plugin"),
            developers: vo("/developers"),
            developer: Ki("/developer")
        };
        static resources = {
            EMPTY_THUMBNAIL: Xy ? "/resources/store/missing.svg" : "/resources/ui/content_thumbnail.svg",
            thumbnail: e => vo(e || a.resources.EMPTY_THUMBNAIL)
        };
        static store = {
            addons: Rn("/store/addons"),
            themes: Rn("/store/themes"),
            plugins: Rn("/store/plugins"),
            addon: e => Rn(`/store/${encodeURIComponent(e)}`),
            tags: {
                plugin: ["fun", "roles", "activity", "status", "game", "edit", "library", "notifications", "emotes", "channels", "shortcut", "enhancement", "servers", "chat", "security", "organization", "friends", "members", "utility", "developers", "search", "text", "voice"],
                theme: ["flat", "transparent", "layout", "customizable", "fiction", "nature", "space", "dark", "light", "game", "anime", "red", "orange", "green", "purple", "black", "other", "high-contrast", "white", "aqua", "animated", "yellow", "blue", "abstract"]
            }
        }
    };
Fe();
xe();
$t();
dt();
fr();
Fa();
be();
I();
$t();
oe();

function Zi(a) {
    let [e, t] = i.useState(a.value), o = i.useCallback(() => {
        a.disabled || t(r => (a.onChange?.(!r), !r))
    }, [a]);
    return i.createElement(j, {
        className: O("bd-checkbox", a.className, {
            "bd-checkbox-disabled": a.disabled,
            "bd-checkbox-has-label": a.label,
            "bd-checkbox-reverse": a.reverse
        }),
        align: j.Align.CENTER,
        direction: a.reverse ? j.Direction.HORIZONTAL_REVERSE : j.Direction.HORIZONTAL,
        onClick: o
    }, i.createElement("input", {
        type: "checkbox",
        checked: e,
        id: a.id,
        className: O("bd-checkbox-input", a.inputClassName)
    }), i.createElement("div", {
        className: O("bd-checkbox-box", a.iconClassName)
    }, i.createElement(Ye, {
        size: "18px"
    })), a.label && i.createElement("div", {
        className: O("bd-checkbox-label", a.label)
    }, a.label))
}
be();
I();
_();
var Jy = C.AccessibilityContext || i.createContext({
        reducedMotion: {
            enabled: !1
        }
    }),
    ta = ff.Type = Object.freeze({
        WANDERING_CUBES: "wandering-cubes",
        CHASING_DOTS: "chasing-dots",
        PULSING_ELLIPSIS: "pulsing-ellipsis",
        SPINNING_CIRCLE: "spinning-circle",
        SPINNING_CIRCLE_SIMPLE: "spinning-circle-simple",
        LOW_MOTION: "low-motion"
    });

function ff(a) {
    let {
        reducedMotion: e
    } = i.useContext(Jy), {
        animated: t = !0
    } = a, o = i.useMemo(() => {
        let s = a.type || ta.WANDERING_CUBES;
        if (!e?.enabled) return s;
        switch (s) {
            case ta.WANDERING_CUBES:
            case ta.CHASING_DOTS:
                return ta.LOW_MOTION;
            default:
                return s
        }
    }, [a.type, e?.enabled]), r = i.useMemo(() => O({
        "bd-spinner-stopAnimation": !t
    }, "bd-spinner", `bd-spinner-${o}`, a.className), [a.className, t, o]), n = i.useMemo(() => O("bd-spinner-path", a.itemClassName), [a.itemClassName]);
    switch (o) {
        case ta.SPINNING_CIRCLE:
        case ta.SPINNING_CIRCLE_SIMPLE:
            return i.createElement("div", {
                className: r,
                role: "img",
                "aria-label": a["aria-label"],
                ...a
            }, i.createElement("div", {
                className: "bd-spinner-inner"
            }, i.createElement("svg", {
                className: "bd-spinner-circular",
                viewBox: "25 25 50 50"
            }, o === ta.SPINNING_CIRCLE && i.createElement(i.Fragment, null, i.createElement("circle", {
                cx: 50,
                cy: 50,
                r: 20,
                className: n
            }), i.createElement("circle", {
                cx: 50,
                cy: 50,
                r: 20,
                className: n
            })), i.createElement("circle", {
                cx: 50,
                cy: 50,
                r: 20,
                className: n
            }))));
        default:
            return i.createElement("span", {
                className: r,
                role: "img",
                "aria-label": a["aria-label"],
                ...a
            }, i.createElement("span", {
                className: "bd-spinner-inner"
            }, i.createElement("span", {
                className: n
            }), i.createElement("span", {
                className: n
            }), (o === ta.PULSING_ELLIPSIS || o === ta.LOW_MOTION) && i.createElement("span", {
                className: n
            })))
    }
}
var at = Object.freeze(ff);
I();
V();
_();
xe();
Dt();
I();
xe();
var {
    useCallback: Yy
} = i, Qy = "bd-settings-title", ex = "bd-settings-title bd-settings-group-title";

function kt({
    isGroup: a = !1,
    className: e = "",
    button: t = void 0,
    onClick: o = void 0,
    text: r,
    children: n = []
}) {
    let s = Yy(u => {
            u.stopPropagation(), u.preventDefault(), t?.onClick?.(u)
        }, [t]),
        d = a ? ex : Qy,
        l = e ? `${d} ${e}` : d;
    return i.createElement("h2", {
        className: l,
        onClick: () => {
            o?.()
        }
    }, r, t && i.createElement(v, {
        className: "bd-button-title",
        onClick: s,
        size: v.Sizes.NONE
    }, t.title), n)
}
oe();
var jn = () => [{
    label: p("Sorting.ascending"),
    value: !0
}, {
    label: p("Sorting.descending"),
    value: !1
}];

function ja(a, e, t, o) {
    return i.createElement(C.Tooltip, {
        color: "primary",
        position: "top",
        "aria-label": a,
        text: a,
        key: o
    }, r => i.createElement(v, {
        ...r,
        "aria-label": a,
        size: v.Sizes.NONE,
        look: v.Looks.BLANK,
        className: "bd-button",
        onClick: t
    }, e))
}

function qa(a, e, t) {
    let o = Q.get("misc", "addonlistControls") || {};
    return !o[a] || !Object.prototype.hasOwnProperty.call(o[a], e) ? t : o[a][e]
}

function Ha(a, e, t) {
    let o = Q.get("misc", "addonlistControls") || {};
    o[a] || (o[a] = {}), o[a][e] = t, Q.set("misc", "addonlistControls", o)
}
var wo = i.createContext();

function qn({
    children: a,
    count: e,
    searching: t
}) {
    let {
        title: o,
        toggleStore: r,
        showingStore: n
    } = i.useContext(wo), s = i.useCallback(() => {
        n && r()
    }, [n, r]);
    return i.useContext(aa)(i.createElement(kt, {
        text: i.createElement("div", {
            className: "bd-addon-title",
            "data-showing-store": n
        }, i.createElement("span", {
            onClick: s
        }, o), n && i.createElement(i.Fragment, null, i.createElement(Ht, {
            size: "24px"
        }), i.createElement("span", null, p("Addons.store"))), t && i.createElement("span", null, " - ", p("Addons.results", {
            count: e
        })))
    }, a))
}

function Hn({
    size: a = 16
}) {
    return i.createElement(C.Tooltip, {
        text: p("Addons.official"),
        "aria-label": p("Addons.official"),
        hideOnClick: !1
    }, e => i.createElement("div", {
        className: "bd-flower-star",
        ...e
    }, i.createElement(fa, {
        size: `${a}px`
    })))
}
oe();
var {
    useLayoutEffect: pf,
    useCallback: Wn,
    useState: Xi,
    useRef: tx
} = i;

function ko({
    leading: a,
    content: e,
    trailing: t,
    action: o
}) {
    return i.createElement(j, {
        onClick: o,
        className: `bd-install-modal-item${typeof o=="function"?" bd-install-modal-clickable":""}`,
        align: j.Align.CENTER
    }, a && i.createElement("div", {
        className: "bd-install-modal-item-leading"
    }, a), e && i.createElement("div", {
        className: "bd-install-modal-item-content"
    }, e), t && i.createElement("div", {
        className: "bd-install-modal-item-trailing"
    }, t))
}

function ax({
    guild: a
}) {
    let [e, t] = Xi(() => a.hash?.trim() ? 0 : 2), o = tx();
    return pf(() => {
        if (!a.hash?.trim()) return;
        let r = new Image,
            n = () => {
                try {
                    o.current.append(r), t(1)
                } finally {
                    d()
                }
            },
            s = () => {
                t(2), d(), r = null
            },
            d = () => {
                r && (r.removeEventListener("load", n), r.removeEventListener("error", s))
            };
        return r.addEventListener("load", n), r.addEventListener("error", s), r.src = a.url, d
    }, [a]), i.createElement("div", {
        className: "bd-install-modal-guild",
        ref: o
    }, e === 0 ? i.createElement(at, {
        type: at.Type.PULSING_ELLIPSIS
    }) : e === 1 ? null : a.acronym)
}

function Ji({
    addon: a,
    transitionState: e,
    install: t,
    onClose: o
}) {
    let [r, n] = Xi(() => w.get("settings", "store", "alwaysEnable")), s = Wn(() => a.openAuthorPage(), [a]), d = Wn(() => a.guild.join(), [a]), l = Wn(() => a.openSourceCode(), [a]), [u, c] = Xi(!1), f = Wn(() => {
        c(!0), t(r).catch(() => o())
    }, [t, r, o]);
    return pf(() => {
        if (a.isInstalled()) return o();
        let m = () => {
            a.isInstalled() && o()
        };
        return N.on(`${a.type}-loaded`, m), () => N.off(`${a.type}-loaded`, m)
    }, [a, o]), i.createElement(Le, {
        transitionState: e,
        size: Le.Sizes.SMALL,
        className: "bd-addon-store-modal"
    }, i.createElement("div", {
        className: "bd-install-modal-splash"
    }, i.createElement("div", {
        className: "bd-install-modal-preview"
    }, i.createElement("img", {
        src: a.thumbnail,
        onError: m => {
            m.currentTarget.src = re.resources.thumbnail()
        },
        loading: "lazy",
        className: "bd-install-modal-preview-img",
        alt: `Thumbnail ${a.name}`
    })), i.createElement("div", {
        className: "bd-install-modal-author"
    }, i.createElement("svg", {
        height: 48,
        width: 48,
        className: "bd-install-modal-author-svg",
        viewBox: "0 0 48 48"
    }, i.createElement("foreignObject", {
        x: 0,
        y: 0,
        height: 48,
        width: 48,
        overflow: "visible",
        mask: "url(#svg-mask-squircle)"
    }, i.createElement("div", {
        className: "bd-install-modal-author-mask"
    }, i.createElement("svg", {
        height: 40,
        width: 40,
        className: "bd-install-modal-author-svg",
        viewBox: "0 0 40 40"
    }, i.createElement("foreignObject", {
        x: 0,
        y: 0,
        height: 40,
        width: 40,
        overflow: "visible",
        mask: "url(#svg-mask-squircle)"
    }, i.createElement(C.Tooltip, {
        text: a.author
    }, m => i.createElement("img", {
        loading: "lazy",
        className: "bd-install-modal-author-img",
        src: a.avatar,
        ...m
    }))))))))), i.createElement("div", {
        className: "bd-install-modal-header"
    }, i.createElement(Hn, {
        size: 20
    }), i.createElement(D, {
        size: D.Sizes.SIZE_20,
        color: D.Colors.HEADER_PRIMARY
    }, a.name)), i.createElement("div", {
        className: "bd-install-modal-items"
    }, i.createElement(ko, {
        leading: i.createElement(je, {
            size: "24px"
        }),
        content: a.description
    }), i.createElement(ko, {
        leading: i.createElement(dr, {
            size: "24px"
        }),
        content: a.version
    }), i.createElement(ko, {
        leading: i.createElement(Ho, {
            size: "24px"
        }),
        content: a.lastModified.toLocaleString(On.discordLocale)
    }), i.createElement(ko, {
        leading: i.createElement(xt, {
            size: "24px"
        }),
        content: a.filename,
        action: l
    }), i.createElement(ko, {
        leading: i.createElement(ur, {
            size: "24px"
        }),
        content: a.author,
        action: s
    }), a.guild && i.createElement(ko, {
        leading: i.createElement(it, {
            size: "24px"
        }),
        content: i.createElement(j, {
            direction: j.Direction.VERTICAL
        }, i.createElement(D, null, a.guild.name), i.createElement(D, {
            size: D.Sizes.SIZE_12,
            color: D.Colors.MUTED
        }, p("Addons.invite"))),
        trailing: i.createElement(ax, {
            guild: a.guild
        }),
        action: d
    })), i.createElement(Zt, {
        justify: j.Justify.BETWEEN,
        align: j.Align.CENTER
    }, i.createElement(v, {
        onClick: f,
        disabled: u
    }, u ? i.createElement(at, {
        type: at.Type.PULSING_ELLIPSIS
    }) : p("Addons.downloadAddon")), i.createElement(Zi, {
        value: r,
        onChange: n,
        label: i.createElement(D, null, p("Modals.automaticallyEnable"))
    })))
}
me();
mr();

function ox(a) {
    return new Promise(e => {
        z.showConfirmationModal(p("Modals.confirmAction"), p("Addons.confirmDelete", {
            name: a.name
        }), {
            danger: !0,
            confirmText: p("Addons.deleteAddon"),
            onConfirm: () => {
                e(!0)
            },
            onCancel: () => {
                e(!1)
            }
        })
    })
}
var _n = class {
        name;
        id;
        invite;
        hash;
        static cache = {};
        static from(e) {
            if (typeof this.cache[e.snowflake] == "object") {
                let t = this.cache[e.snowflake];
                return t.name = e.name, t.invite = e.invite_link, t.hash = e.avatar_hash, t
            }
            return new this(e)
        }
        constructor(e) {
            this.name = e.name, this.id = e.snowflake, this.invite = e.invite_link, this.hash = e.avatar_hash?.trim?.()
        }
        get url() {
            let e = `${this.hash}.webp`;
            return e.startsWith("a_") && (e = `${this.hash}.gif`), `https://cdn.discordapp.com/icons/${this.id}/${e}?size=256`
        }
        get acronym() {
            return this.name.replace(/'s /g, " ").replace(/\w+/g, e => e[0]).replace(/\s/g, "")
        }
        join() {
            z.showGuildJoinModal(this.invite)
        }
    },
    ga = class a {
        id;
        name;
        avatar;
        author;
        manager;
        filename;
        type;
        description;
        likes;
        downloads;
        tags;
        thumbnail;
        releaseDate;
        lastModified;
        guild;
        version;
        latestSourceUrl;
        _addon;
        static cache = {};
        static from(e) {
            if (typeof this.cache[e.id] == "object") {
                let t = this.cache[e.id];
                t.downloads = Math.max(t.downloads, e.downloads), t.likes = Math.max(t.likes, e.likes);
                let o = e.guild || e.author.guild;
                return t.guild = o ? _n.from(o) : null, t.latestSourceUrl = e.latest_source_url, t.version = e.version, t.description = e.description, t.tags = e.tags, t.thumbnail = re.resources.thumbnail(e.thumbnail_url), t._addon = e, t
            }
            return new this(e)
        }
        constructor(e) {
            this.id = e.id, this.name = e.name, this.releaseDate = new Date(e.initial_release_date), this.lastModified = new Date(e.latest_release_date), this.type = e.type, this.thumbnail = re.resources.thumbnail(e.thumbnail_url), this.avatar = `https://avatars.githubusercontent.com/u/${e.author.github_id}?v=4`, this.author = e.author.display_name;
            let t = e.guild || e.author.guild;
            this.guild = t ? _n.from(t) : null, this.manager = e.type === "plugin" ? le : Ee, this.description = e.description, this.tags = e.tags, this.downloads = e.downloads, this.likes = e.likes, this.version = e.version, this.filename = e.file_name, this.latestSourceUrl = e.latest_source_url, this._addon = e, a.cache[e.id] = this
        }
        isUnknown() {
            return Yi.isUnknown(this.filename)
        }
        markAsKnown() {
            Yi.markAsKnown(this.filename)
        }
        openPreview() {
            if (this.type === "plugin") throw new Error("Addon is a plugin!");
            window.open(re.convertToPreviewURL(this.latestSourceUrl), "_blank", "noopener,noreferrer")
        }
        openAddonPage() {
            window.open(re.redirects[this.type](this.id.toString()), "_blank", "noopener,noreferrer")
        }
        openSourceCode() {
            window.open(re.convertRawToGitHubURL(this.latestSourceUrl), "_blank", "noopener,noreferrer")
        }
        openAuthorPage() {
            window.open(re.pages.developer(this.author), "_blank", "noopener,noreferrer")
        }
        async download(e = !1) {
            if (this.isInstalled()) {
                q.show(p("Addons.alreadyInstalled", {
                    name: this.name
                }), {
                    type: "info"
                });
                return
            }
            let t = o => new Promise((r, n) => {
                sa(re.redirects.github(this.id.toString()), {
                    headers: {
                        "X-Store-Download": this.name,
                        "Cache-Control": "no-cache",
                        Pragma: "no-cache"
                    }
                }, (s, d, l) => {
                    try {
                        if (s || d.aborted || d.statusMessage !== "OK") throw s || d;
                        if (o) {
                            try {
                                let u = Xt.prototype.extractMeta(l, this.filename);
                                this.manager.state[u.name || this.name] = !0
                            } catch {
                                this.manager.state[this.name] = !0
                            }
                            this.manager.saveState()
                        }
                        hf.default.writeFileSync(mf.default.join(this.manager.addonFolder, this.filename), l), q.show(p("Addons.successfullyDownload", {
                            name: this.name
                        }), {
                            type: "success"
                        }), this.downloads++
                    } catch (u) {
                        b.stacktrace("AddonStore", `Failed to fetch addon '${this.filename}':`, u), q.show(p("Addons.failedToDownload", {
                            context: this.type,
                            name: this.name
                        }), {
                            type: "error"
                        }), n(u)
                    } finally {
                        r()
                    }
                })
            });
            return this._download ??= new Promise(o => {
                let r = () => {
                    delete this._download, o()
                };
                if (e) return t(w.get("settings", "store", "alwaysEnable")).finally(() => r());
                let n = !1,
                    s = z.ModalActions.openModal(d => i.createElement(Ji, {
                        ...d,
                        addon: this,
                        install: l => (n = !0, t(l))
                    }), {
                        onCloseCallback: r,
                        onCloseRequest() {
                            n || z.ModalActions.closeModal(s)
                        }
                    })
            })
        }
        _download;
        async delete(e = !1) {
            let t = this.manager.addonList.find(o => o.filename == this.filename);
            t && (!e && !await ox(t) || this.manager.deleteAddon && this.manager.deleteAddon(t))
        }
        isInstalled() {
            return this.manager.isLoaded(this.filename)
        }
        recentlyUpdated() {
            let e = new Date,
                t = new Date;
            return t.setDate(e.getDate() - 7), this.lastModified > t && this.lastModified <= e
        }
    },
    Yi = new class {
        initialize() {
            this._cache = Q.get("addon-store") || {
                addons: {},
                known: [],
                version: ""
            }, this._cache.version !== re.API_VERSION && (this._cache = {
                known: this._cache.known || [],
                addons: {},
                version: re.API_VERSION
            }), this._useCache(), this.requestAddons(!0)
        }
        _cache = {
            addons: {},
            known: [],
            version: ""
        };
        _useCache() {
            for (let e in this._cache.addons) Object.prototype.hasOwnProperty.call(this._cache.addons, e) && this.addons.push(new ga(this._cache.addons[e]))
        }
        _writeCache(e = this._cache) {
            this._cache = e, Q.set("addon-store", this._cache)
        }
        _singleAddonCache = {};
        requestAddon(e) {
            let t = this.getAddon(e);
            return typeof t == "object" ? Promise.resolve(t) : this._singleAddonCache[e] ??= new Promise((o, r) => {
                sa(re.store.addon(e), {
                    headers: {
                        "Cache-Control": "no-cache",
                        Pragma: "no-cache"
                    }
                }, (n, s, d) => {
                    try {
                        if (n || s.aborted || s.statusMessage !== "OK") throw n || s;
                        let l = JSON.parse(d);
                        if (!s.ok || l.status === 404) throw new Error(l.title);
                        this._singleAddonCache[l.name] = this._singleAddonCache[e], this._singleAddonCache[l.id] = this._singleAddonCache[e], o(ga.from(l))
                    } catch (l) {
                        b.stacktrace("AddonStore", `Failed to fetch ${e}`, l), q.show(p("Addons.failedToFetch"), {
                            type: "error"
                        }), delete this._singleAddonCache[e], r(l instanceof Error ? l : new Error(`Failed to request addons: Status ${s.statusCode}`))
                    }
                })
            })
        }
        getAddon(e) {
            let t = decodeURIComponent(e.toString()).toLowerCase();
            for (let o in ga.cache)
                if (Object.prototype.hasOwnProperty.call(ga.cache, o)) {
                    let r = ga.cache[o];
                    if (r.id.toString() === t || r.name.toLowerCase() === t) return r
                }
        }
        isOfficial() {
            return !1
        }
        isUnknown(e) {
            return e.toLowerCase() in this._cache.addons && !this._cache.known.includes(e)
        }
        markAsKnown(e) {
            this.isUnknown(e) && (this._cache.known.push(e), this._writeCache())
        }
        addons = [];
        getAddons() {
            return this.addons.concat()
        }
        error = null;
        loading = !1;
        _onLineListener = () => {
            window.removeEventListener("online", this._onLineListener), this.requestAddons()
        };
        async requestAddons(e = !1) {
            b.debug("AddonStore", "Requesting all addons"), e && Object.keys(this._cache.addons).length || (this.addons.length = 0), this.loading = !0, this._setTimeout && window.clearTimeout(this._setTimeout), this._setTimeout = null, this._emitChange();
            let t = !1,
                o = () => {
                    window.removeEventListener("offline", o), t = !0, this.loading = !1, b.debug("AddonStore", "User is offline waiting for connection..."), window.removeEventListener("online", this._onLineListener), window.addEventListener("online", this._onLineListener), q.show(p("Addons.failedToFetch"), {
                        type: "error"
                    }), this.error = new Error("Failed to request addons: User is offline!"), this._useCache(), this._emitChange()
                };
            if (window.navigator.onLine) window.addEventListener("offline", o);
            else {
                o();
                return
            }
            sa(re.store.addons, {
                headers: {
                    "Cache-Control": "no-cache",
                    Pragma: "no-cache"
                }
            }, (r, n, s) => {
                if (window.removeEventListener("offline", o), t) return;
                try {
                    if (r || n.aborted || n.statusMessage !== "OK") throw r || n;
                    let l = JSON.parse(s),
                        u = this._cache.known.length === 0 && Object.keys(this._cache.addons).length === 0,
                        c = {
                            known: this._cache.known || {},
                            addons: {},
                            version: re.API_VERSION
                        };
                    this.addons.length = 0;
                    for (let f of l) this.addons.push(ga.from(f)), c.addons[f.file_name.toLowerCase()] = f, u && c.known.push(f.file_name);
                    this._writeCache(c), this.error = null
                } catch (l) {
                    b.stacktrace("AddonStore", "Failed to request addons", l), q.show(p("Addons.failedToFetch"), {
                        type: "error"
                    }), this.error = l instanceof Error ? l : new Error(`Failed to request addons: Status ${n.statusCode}`), this._useCache()
                }
                this.loading = !1, this._emitChange();
                let d = 60;
                if (this.error && (d = 5, this.error.message.startsWith("getaddrinfo ENOTFOUND") && !window.navigator.onLine)) {
                    b.debug("AddonStore", "User is offline waiting for connection..."), window.removeEventListener("online", this._onLineListener), window.addEventListener("online", this._onLineListener);
                    return
                }
                this._setTimeout = window.setTimeout(() => this.requestAddons(), d * 60 * 1e3)
            })
        }
        _setTimeout = null;
        _subscribers = new Set;
        _emitChange() {
            for (let e of this._subscribers) e()
        }
        getState() {
            return {
                error: this.error,
                addons: this.getAddons(),
                loading: this.loading
            }
        }
        useState() {
            let [e, t] = i.useState(() => this.getState());
            return i.useEffect(() => {
                t(this.getState());
                let o = () => t(this.getState());
                return this._subscribers.add(o), () => void this._subscribers.delete(o)
            }, []), e
        }
        addChangeListener(e) {
            return this._subscribers.add(e), () => void this._subscribers.delete(e)
        }
    },
    Ze = Yi;
V();
ze();
tt();
Bt();
be();
I();
V();
_();
Fe();
xe();
oe();
var {
    useCallback: Wa,
    useMemo: gf,
    useState: Qi,
    useEffect: rx,
    useContext: nx,
    createContext: ix
} = i, wr = ix();

function bf(a) {
    if (a = Number(a), a === 0) return "0";
    let e = ["", "k", "M", "B", "T"],
        t = Math.floor(Math.log10(Math.abs(a)) / 3),
        o = Math.pow(10, t * 3),
        r = (a / o).toFixed(1);
    return r.endsWith(".0") && (r = r.slice(0, -2)), `${r}${e[t]}`
}

function kr({
    addon: a,
    isEmbed: e
}) {
    let [t, o] = Qi(() => a.isInstalled()), [r, n] = Qi(!1), [s, d] = Qi(a.downloads), [l, u] = nx(wr), c = Wa(A => a.delete(A.shiftKey), [a]), f = Wa(async A => {
        n(!0), await a.download(A.shiftKey), d(a.downloads), n(!1)
    }, [a]), m = Wa(() => a.guild.join(), [a]), h = Wa(() => a.openSourceCode(), [a]), g = Wa(() => a.openAddonPage(), [a]), k = Wa(() => a.openPreview(), [a]), L = Wa(() => a.openAuthorPage(), [a]);
    rx(() => {
        let A = () => {
            o(a.isInstalled())
        };
        return A(), N.on(`${a.manager.prefix}-loaded`, A), N.on(`${a.manager.prefix}-unloaded`, A), () => {
            N.off(`${a.manager.prefix}-loaded`, A), N.off(`${a.manager.prefix}-unloaded`, A)
        }
    }, [a]);
    let R = gf(() => {
            if (a.isUnknown()) return p("Addons.new");
            if (a.recentlyUpdated()) return p("Addons.updated")
        }, [a]),
        {
            downloads: T,
            likes: H
        } = gf(() => ({
            downloads: p("Addons.downloadCount", {
                count: s
            }, {
                count: bf
            }),
            likes: p("Addons.likeCount", {
                count: a.likes
            }, {
                count: bf
            })
        }), [a, s]);
    return i.createElement("div", {
        className: O({
            "bd-addon-store-card": !0,
            "bd-addon-store-card-embed": e
        }),
        onMouseEnter: () => {
            a.markAsKnown()
        }
    }, i.createElement("div", {
        className: "bd-addon-store-card-splash"
    }, i.createElement("div", {
        className: "bd-addon-store-card-preview"
    }, i.createElement("img", {
        src: a.thumbnail,
        onError: A => {
            A.currentTarget.src = re.resources.thumbnail()
        },
        loading: "lazy",
        className: "bd-addon-store-card-preview-img",
        alt: `Thumbnail ${a.name}`
    })), i.createElement("div", {
        className: "bd-addon-store-card-author"
    }, i.createElement("svg", {
        height: 48,
        width: 48,
        className: "bd-addon-store-card-author-svg",
        viewBox: "0 0 48 48"
    }, i.createElement("foreignObject", {
        x: 0,
        y: 0,
        height: 48,
        width: 48,
        overflow: "visible",
        mask: "url(#svg-mask-squircle)"
    }, i.createElement("div", {
        className: "bd-addon-store-card-author-mask"
    }, i.createElement("svg", {
        height: 40,
        width: 40,
        className: "bd-addon-store-card-author-svg",
        viewBox: "0 0 40 40"
    }, i.createElement("foreignObject", {
        x: 0,
        y: 0,
        height: 40,
        width: 40,
        overflow: "visible",
        mask: "url(#svg-mask-squircle)"
    }, i.createElement(C.Tooltip, {
        text: a.author
    }, A => i.createElement("img", {
        loading: "lazy",
        className: "bd-addon-store-card-author-img",
        src: a.avatar,
        ...A,
        onClick: L
    })))))))), R && i.createElement("div", {
        className: "bd-addon-store-card-badge"
    }, R)), i.createElement("div", {
        className: "bd-addon-store-card-body"
    }, i.createElement("div", {
        className: "bd-addon-store-card-name"
    }, i.createElement(Hn, null), i.createElement("span", null, a.name)), i.createElement("div", {
        className: "bd-addon-store-card-description"
    }, a.description), i.createElement("div", {
        className: "bd-addon-store-card-tags"
    }, a.tags.map(A => i.createElement("span", {
        className: O({
            "bd-addon-store-card-tag": !0,
            "bd-addon-store-card-tag-selected": l(A)
        }),
        onClick: () => u(A)
    }, A))), i.createElement("div", {
        className: "bd-addon-store-card-spacer"
    }), i.createElement("div", {
        className: "bd-addon-store-card-info"
    }, i.createElement("div", {
        className: "bd-addon-store-card-likes"
    }, i.createElement("div", {
        className: "bd-addon-store-card-dot"
    }), i.createElement("div", {
        className: "bd-addon-store-card-value"
    }, H)), i.createElement("div", {
        className: "bd-addon-store-card-downloads"
    }, i.createElement("div", {
        className: "bd-addon-store-card-dot"
    }), i.createElement("div", {
        className: "bd-addon-store-card-value"
    }, T))), i.createElement("div", {
        className: "bd-addon-store-card-actions"
    }, i.createElement(C.Tooltip, {
        text: p("Addons.website")
    }, A => i.createElement(v, {
        ...A,
        size: v.Sizes.ICON,
        look: v.Looks.BLANK,
        onClick: g
    }, i.createElement(Ma, {
        size: "20px"
    }))), i.createElement(C.Tooltip, {
        text: p("Addons.source")
    }, A => i.createElement(v, {
        ...A,
        size: v.Sizes.ICON,
        look: v.Looks.BLANK,
        onClick: h
    }, i.createElement(xt, {
        size: "20px"
    }))), a.type === "theme" && i.createElement(C.Tooltip, {
        text: p("Addons.preview")
    }, A => i.createElement(v, {
        ...A,
        size: v.Sizes.ICON,
        look: v.Looks.BLANK,
        onClick: k
    }, i.createElement(_o, {
        size: "20px"
    }))), a.guild && i.createElement(C.Tooltip, {
        text: p("Addons.invite")
    }, A => i.createElement(v, {
        ...A,
        size: v.Sizes.ICON,
        look: v.Looks.BLANK,
        onClick: m
    }, i.createElement(it, {
        size: "20px"
    }))), i.createElement("div", {
        className: "bd-addon-store-card-spacer"
    }), t ? i.createElement(C.Tooltip, {
        text: p("Addons.deleteAddon")
    }, A => i.createElement(v, {
        ...A,
        onClick: c,
        color: v.Colors.RED,
        size: v.Sizes.ICON
    }, i.createElement(Pa, {
        size: "20px"
    }))) : i.createElement(v, {
        onClick: f,
        disabled: r
    }, p("Addons.downloadAddon")))))
}
I();
xe();
oe();
var {
    useState: sx,
    useEffect: dx,
    useCallback: yf,
    useRef: lx
} = i;

function _a({
    onChange: a,
    className: e,
    onKeyDown: t,
    placeholder: o
}) {
    let r = lx(null),
        [n, s] = sx("");
    dx(() => {
        r.current && r.current.focus()
    }, []);
    let d = yf(u => {
            a?.(u), s(u.target.value)
        }, [a]),
        l = yf(() => {
            s(""), a?.({
                target: {
                    value: ""
                },
                currentTarget: {
                    value: ""
                }
            }), r.current?.focus()
        }, [a]);
    return i.createElement("div", {
        className: "bd-search-wrapper" + (e ? ` ${e}` : "")
    }, i.createElement("input", {
        onChange: d,
        onKeyDown: t,
        type: "text",
        className: "bd-search",
        placeholder: o,
        maxLength: 50,
        value: n,
        ref: r
    }), !n && i.createElement(or, {
        size: "18px"
    }), n && i.createElement(v, {
        look: v.Looks.BLANK,
        color: v.Colors.TRANSPARENT,
        size: v.Sizes.NONE,
        onClick: l
    }, i.createElement(We, {
        size: "16px"
    })))
}
I();
wt();
be();
oe();
var {
    useState: xf,
    useCallback: ux,
    useContext: cx,
    useEffect: fx,
    useLayoutEffect: px,
    useRef: es
} = i;

function Ct({
    value: a,
    options: e,
    style: t,
    onChange: o,
    disabled: r
}) {
    let [n, s] = xf(a ?? e[0].value), [d, l] = xf(!1), {
        value: u,
        disabled: c
    } = cx(Ie), f = u !== fe ? u : n, m = u !== fe ? c : r, h = es(null), g = es(null), k = es(null), L = ux(T => {
        o?.(T), s(T), g.current?.togglePopover(!1)
    }, [o]);
    fx(() => {
        let T = h.current,
            H = g.current;
        if (!T || !H) return;
        T.popoverTargetElement = H, T.popoverTargetAction = "toggle";
        let A = new IntersectionObserver(([E]) => {
            E.isIntersecting || H.togglePopover(!1)
        });
        return A.observe(T), () => {
            T && A.unobserve(T)
        }
    }, []), px(() => {
        d && k.current?.scrollIntoView({
            block: "center",
            behavior: "instant"
        })
    }, [d]);
    let R = e.find(T => T.value == f) ?? e[0];
    return i.createElement(i.Fragment, null, i.createElement("button", {
        ref: h,
        type: "button",
        className: O("bd-select", m && "bd-select-disabled", t == "transparent" && "bd-select-transparent"),
        disabled: m
    }, i.createElement("span", {
        className: "bd-select-value"
    }, R.label), i.createElement(Ta, {
        size: "16px",
        className: "bd-select-arrow"
    })), i.createElement("ul", {
        ref: g,
        onToggle: T => l(T.newState === "open"),
        popover: "auto",
        role: "listbox",
        className: "bd-select-options bd-scroller-thin"
    }, e.map(T => i.createElement("li", {
        ref: R.value == T.value ? k : null,
        className: O("bd-select-option", R.value == T.value && "selected"),
        role: "option",
        onClick: () => L(T.value)
    }, T.label))))
}
be();
I();
V();

function mx(a) {
    let e = a.size || "160px";
    return i.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            width: e,
            height: e
        },
        viewBox: "0 0 160 160"
    }, i.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, i.createElement("g", {
        transform: "translate(9 9)"
    }, i.createElement("path", {
        fill: "rgba(0,0,0,0.1)",
        d: "M42.1262,100.7598 C25.1382,83.7718 25.1382,56.2288 42.1262,39.2408 C59.1142,22.2538 86.6572,22.2538 103.6452,39.2408 C120.6322,56.2288 120.6322,83.7718 103.6452,100.7598 C86.6572,117.7478 59.1142,117.7478 42.1262,100.7598"
    }), i.createElement("path", {
        stroke: "#1E2126",
        strokeWidth: "2",
        d: "M121.8938,119.4976 C94.5578,146.8346 50.2358,146.8346 22.8988,119.4976 C-4.4382,92.1616 -4.4382,47.8396 22.8988,20.5026 C50.2358,-6.8334 94.5578,-6.8344 121.8938,20.5026 C149.2308,47.8396 149.2308,92.1616 121.8938,119.4976 Z",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "4 5"
    }), i.createElement("path", {
        fill: "#C9D2F0",
        d: "M1.8313,140.566 L1.8313,140.566 C-0.6097,138.125 -0.6097,134.166 1.8313,131.725 L38.6023,94.954 L47.4433,103.795 L10.6723,140.566 C8.2303,143.007 4.2723,143.007 1.8313,140.566"
    }), i.createElement("path", {
        stroke: "#1E2126",
        strokeWidth: "2",
        d: "M1.8313,140.566 L1.8313,140.566 C-0.6097,138.125 -0.6097,134.166 1.8313,131.725 L38.6023,94.954 L47.4433,103.795 L10.6723,140.566 C8.2303,143.007 4.2723,143.007 1.8313,140.566 Z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), i.createElement("path", {
        fill: "#9F7373",
        d: "M12.1457,139.0923 L3.3047,130.2513 C1.6767,128.6233 1.6767,125.9853 3.3047,124.3573 L20.7417,106.9203 C22.3687,105.2923 25.0077,105.2923 26.6357,106.9203 L35.4767,115.7613 C37.1037,117.3893 37.1037,120.0283 35.4767,121.6553 L18.0397,139.0923 C16.4127,140.7193 13.7727,140.7193 12.1457,139.0923"
    }), i.createElement("path", {
        stroke: "#1E2126",
        strokeWidth: "2",
        d: "M12.1457,139.0923 L3.3047,130.2513 C1.6767,128.6233 1.6767,125.9853 3.3047,124.3573 L20.7417,106.9203 C22.3687,105.2923 25.0077,105.2923 26.6357,106.9203 L35.4767,115.7613 C37.1037,117.3893 37.1037,120.0283 35.4767,121.6553 L18.0397,139.0923 C16.4127,140.7193 13.7727,140.7193 12.1457,139.0923 Z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), i.createElement("path", {
        fill: "#F3F9FF",
        d: "M44.112,98.2847 C28.491,82.6637 28.491,57.3377 44.112,41.7167 C59.733,26.0957 85.06,26.0957 100.681,41.7157 C116.302,57.3367 116.302,82.6637 100.681,98.2847 C85.06,113.9057 59.733,113.9057 44.112,98.2847 M108.007,34.3897 C88.34,14.7227 56.453,14.7227 36.786,34.3897 C17.119,54.0567 17.119,85.9437 36.786,105.6107 C56.453,125.2777 88.34,125.2777 108.007,105.6107 C127.674,85.9437 127.674,54.0567 108.007,34.3897"
    }), i.createElement("path", {
        stroke: "#1E2126",
        strokeWidth: "2",
        d: "M116.386 94.545C115.853 95.498 115.287 96.438 114.688 97.362M108.0071 105.6109C88.3401 125.2779 56.4531 125.2779 36.7861 105.6109 17.1191 85.9439 17.1191 54.0569 36.7861 34.3899 56.4531 14.7229 88.3401 14.7229 108.0071 34.3899 122.7701 49.1529 126.4511 70.7999 119.0511 88.9969",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), i.createElement("path", {
        stroke: "#1E2126",
        strokeWidth: "2",
        d: "M44.112,98.2847 C28.491,82.6637 28.491,57.3377 44.112,41.7167 C59.733,26.0957 85.06,26.0957 100.681,41.7157 C116.302,57.3367 116.302,82.6637 100.681,98.2847 C85.06,113.9057 59.733,113.9057 44.112,98.2847 Z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })), i.createElement("rect", {
        width: "160",
        height: "160",
        y: "-1"
    })))
}

function Cr(a) {
    return i.createElement("div", {
        className: O("bd-empty-results", a.className)
    }, a.image ? a.image : i.createElement(mx, null), i.createElement("div", {
        className: "bd-empty-results-text"
    }, a.text || p("Addons.results", {
        count: 0
    }) || ""), a.children)
}
ma();
be();
I();
V();
xe();
var {
    useMemo: vf
} = i;

function ts({
    className: a,
    currentPage: e,
    length: t,
    pageSize: o,
    onPageChange: r,
    maxVisible: n = 7
}) {
    let s = vf(() => Math.ceil(t / o), [t, o]),
        d = vf(() => {
            let l = [];
            if (s <= n)
                for (let u = 0; u < s; u++) l.push(u);
            else {
                let u = Math.trunc(n / 2),
                    c = n - 2;
                if (e <= u) {
                    for (let f = 0; f < c; f++) l.push(f);
                    l.push("...", s - 1)
                } else if (e >= s - u - 1) {
                    l.push(0, "...");
                    for (let f = s - c; f < s; f++) l.push(f)
                } else {
                    let f = Math.floor((n - 4) / 2);
                    l.push(0, "...");
                    for (let m = e - f; m <= e + f; m++) l.push(m);
                    l.push("...", s - 1)
                }
            }
            return l
        }, [e, s, n]);
    return i.createElement("div", {
        className: O("bd-paginator", a)
    }, i.createElement(v, {
        className: "bd-paginator-back",
        color: v.Colors.TRANSPARENT,
        look: v.Looks.BLANK,
        disabled: e === 0,
        onClick: () => r(e - 1)
    }, p("Paginator.back")), i.createElement("div", {
        className: "bd-paginator-bubbles"
    }, d.map((l, u) => {
        let c = l === "...";
        return i.createElement("div", {
            key: u,
            className: "bd-paginator-bubble",
            onClick: c ? () => {} : () => r(l),
            "data-selected": e === l,
            "data-ellipsis": c
        }, c ? l : l + 1)
    })), i.createElement(v, {
        className: "bd-paginator-next",
        color: v.Colors.TRANSPARENT,
        look: v.Looks.BLANK,
        disabled: e === s - 1,
        onClick: () => r(e + 1)
    }, p("Paginator.next")))
}
ee();
oe();
var {
    useState: Sr,
    useMemo: Co,
    useCallback: Vn
} = i, hx = () => [{
    label: p("Addons.downloads"),
    value: "downloads"
}, {
    label: p("Addons.name"),
    value: "name"
}, {
    label: p("Addons.author"),
    value: "author"
}, {
    label: p("Addons.version"),
    value: "version"
}, {
    label: p("Addons.lastUpdated"),
    value: "modified"
}, {
    label: p("Addons.releaseDate"),
    value: "releaseDate"
}, {
    label: p("Addons.isInstalled"),
    value: "isInstalled"
}, {
    label: p("Addons.likes"),
    value: "likes"
}], as = 30;

function gx({
    content: a,
    refToScroller: e,
    page: t,
    setPage: o
}) {
    let r = Co(() => a.slice(t * as, (t + 1) * as), [a, t]);
    return i.createElement("div", {
        className: "bd-addon-store-wrapper"
    }, i.createElement("div", {
        className: "bd-addon-store"
    }, r), i.createElement(ts, {
        currentPage: t,
        length: a.length,
        pageSize: as,
        maxVisible: 9,
        onPageChange: n => {
            o(n);
            let s = e?.current?.getScrollerNode();
            s && s.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }))
}

function bx({
    type: a,
    selected: e,
    onChange: t
}) {
    let o = i.useRef(null),
        r = i.useRef(null),
        n = Co(() => re.store.tags[a], [a]),
        s = Co(() => Object.entries(e).filter(([, d]) => d).map(([d]) => d), [e]);
    return i.useEffect(() => {
        let d = o.current,
            l = r.current;
        if (!d || !l) return;
        d.popoverTargetElement = l, d.popoverTargetAction = "toggle";
        let u = new IntersectionObserver(([c]) => {
            c.isIntersecting || l.togglePopover(!1)
        });
        return u.observe(d), () => {
            d && u.unobserve(d)
        }
    }, []), i.createElement(i.Fragment, null, i.createElement("button", {
        ref: o,
        type: "button",
        className: "bd-select bd-select-transparent"
    }, i.createElement("span", {
        className: "bd-select-value"
    }, s.length, "/", n.length), i.createElement(Ta, {
        className: "bd-select-arrow",
        size: "16px"
    })), i.createElement("ul", {
        ref: r,
        popover: "auto",
        role: "listbox",
        className: "bd-select-options bd-scroller-thin"
    }, n.map((d, l) => {
        let u = s.includes(d);
        return i.createElement("li", {
            className: `bd-select-option${u?" selected":""}`,
            role: "option",
            onClick: () => t(d),
            key: l
        }, i.createElement("input", {
            type: "checkbox",
            checked: u,
            readOnly: !0
        }), d)
    })))
}

function os({
    type: a,
    refToScroller: e
}) {
    let {
        error: t,
        addons: o,
        loading: r
    } = Ze.useState(), [n, s] = Sr(0), [d, l] = Sr({}), u = Vn((ae, B) => {
        s(0), l(ue => ({
            ...ue,
            [ae]: B ?? !ue[ae]
        }))
    }, []), [c, f] = Sr(""), m = Vn(ae => {
        f(ae.target.value.toLocaleLowerCase()), s(0)
    }, []), [h, g] = Sr(() => qa(`${a}-store`, "sort", "downloads")), [k, L] = Sr(() => qa(`${a}-store`, "ascending", !0)), R = Vn(ae => {
        Ha(`${a}-store`, "ascending", ae), L(ae)
    }, [a]), T = Vn(ae => {
        Ha(`${a}-store`, "sort", ae), g(ae)
    }, [a]), H = Co(() => {
        let ae = c.toLowerCase();
        return o.filter(B => B.type !== a || !(B.name.toLowerCase().includes(ae) || B.author.toLowerCase().includes(ae) || B.description.toLowerCase().includes(ae)) ? !1 : Object.entries(d).every(([ue, Ce]) => Ce ? B.tags.includes(ue) : !0))
    }, [a, o, c, d]), A = Co(() => {
        if (r) return i.createElement("div", {
            className: "bd-addon-store-center"
        }, i.createElement(at, {
            type: at.Type.WANDERING_CUBES
        }));
        if (!H.length) return i.createElement("div", {
            className: "bd-addon-store-center"
        }, i.createElement(Cr, null));
        let B = H.concat().sort((ue, Ce) => {
            let G = 0;
            switch (h) {
                case "author":
                case "version":
                    G = ue[h].localeCompare(Ce[h]);
                    break;
                case "likes":
                case "downloads":
                    G = Ce[h] - ue[h];
                    break;
                case "isInstalled":
                    G = ue.isInstalled() === Ce.isInstalled() ? 0 : ue.isInstalled() ? -1 : 1;
                    break;
                case "modified":
                    G = Ce.lastModified - ue.lastModified;
                    break;
                case "releaseDate":
                    G = Ce.releaseDate - ue.releaseDate;
                    break;
                case "name":
                    break;
                default:
                    b.warn("AddonStore", `Sorting method '${h}' is unknown`);
                    break
            }
            return (G === 0 || isNaN(G)) && (G = ue.name.localeCompare(Ce.name)), k ? G : -G
        }).map(ue => i.createElement(ce, {
            key: ue.id
        }, i.createElement(kr, {
            addon: ue
        })));
        return i.createElement(gx, {
            content: B,
            refToScroller: e,
            setPage: s,
            page: n
        })
    }, [H, k, h, s, n, e, r]), E = Co(() => a === "plugin" ? le : Ee, [a]);
    return [i.createElement(qn, {
        key: "title",
        count: H.length,
        searching: c.length !== 0
    }, i.createElement(_a, {
        onChange: m,
        placeholder: `${p("Addons.search",{count:H.length,context:a})}...`
    })), i.createElement("div", {
        className: "bd-controls bd-addon-controls"
    }, i.createElement("div", {
        className: "bd-controls-basic"
    }, ja(p("Addons.openFolder", {
        context: a
    }), i.createElement(Ea, {
        size: "20px"
    }), () => J.openPath(E.addonFolder), "folder"), ja(p("Addons.reload"), i.createElement(st, {
        size: "20px"
    }), () => r ? {} : Ze.requestAddons(), "reload")), i.createElement("div", {
        className: "bd-controls-advanced"
    }, i.createElement("div", {
        className: "bd-addon-dropdowns"
    }, i.createElement("div", {
        className: "bd-select-wrapper"
    }, i.createElement("label", {
        className: "bd-label"
    }, p("Addons.tags"), ":"), i.createElement(bx, {
        type: a,
        selected: d,
        onChange: u
    })), i.createElement("div", {
        className: "bd-select-wrapper"
    }, i.createElement("label", {
        className: "bd-label"
    }, p("Sorting.sortBy"), ":"), i.createElement(Ct, {
        options: hx(),
        value: h,
        onChange: T,
        style: "transparent"
    })), i.createElement("div", {
        className: "bd-select-wrapper"
    }, i.createElement("label", {
        className: "bd-label"
    }, p("Sorting.order"), ":"), i.createElement(Ct, {
        options: jn(),
        value: k,
        onChange: R,
        style: "transparent"
    }))))), !r && t && i.createElement("div", {
        className: "bd-addon-store-warning"
    }, i.createElement(je, {
        size: "24px"
    }), i.createElement("div", null, i.createElement("div", null, p("Addons.failedToFetch")), i.createElement("div", null, t.message))), i.createElement(wr.Provider, {
        value: [ae => !!d[ae], u]
    }, A)]
}
I();
V();
_();
ze();
xe();
ee();
et();
En();
I();
V();
_();
gr();
ve();
oe();
pe();
var {
    useCallback: rs,
    useMemo: wf
} = i, Af = {
    website: Ma,
    source: xt,
    invite: it,
    donate: qo,
    patreon: Vo
}, kf = {
    pushLayer(a) {
        C.Dispatcher.dispatch({
            type: "LAYER_PUSH",
            component: a
        })
    },
    popLayer() {
        C.Dispatcher.dispatch({
            type: "LAYER_POP"
        })
    },
    popAllLayers() {
        C.Dispatcher.dispatch({
            type: "LAYER_POP_ALL"
        })
    }
}, Cf = te(["getCurrentUser"], {
    firstId: 287809,
    cacheId: "core-addoncard-UserStore"
}), Sf = te(["getDMFromUserId"], {
    firstId: 734057,
    cacheId: "core-addoncard-ChannelStore"
}), Lf = te(["openPrivateChannel"], {
    firstId: 308528,
    cacheId: "core-addoncard-PrivateChannelActions"
}), If = te(["selectPrivateChannel"], {
    searchExports: !0,
    firstId: 956793,
    cacheId: "core-addoncard-ChannelActions"
}), So = a => typeof a == "string" ? a : a?.toString?.() || "";

function Gn(a, e, t, {
    isControl: o = !1,
    danger: r = !1,
    disabled: n = !1
} = {}) {
    let s = o ? "button" : "div";
    return i.createElement(C.Tooltip, {
        color: "primary",
        position: "top",
        text: a
    }, d => i.createElement(s, {
        ...d,
        "aria-label": a.toString(),
        className: (o ? "bd-button bd-button-filled bd-addon-button" : "bd-addon-button") + (r ? " bd-button-color-red" : o ? " bd-button-color-brand" : "") + (n ? " bd-button-disabled" : ""),
        onClick: t,
        disabled: n
    }, e))
}

function yx(a, e) {
    if (!e) return null;
    let t = i.createElement(Af[a], {
            size: "20px"
        }),
        o = i.createElement("a", {
            className: "bd-link bd-link-website",
            href: e,
            target: "_blank",
            rel: "noopener noreferrer"
        }, t);
    return a == "invite" && (o.props.onClick = function(r) {
        r.preventDefault(), r.stopPropagation(), z.showGuildJoinModal(e)
    }), Gn(p(`Addons.${a}`), o)
}

function ns({
    addon: a,
    enabled: e,
    type: t,
    disabled: o,
    onChange: r,
    hasSettings: n,
    editAddon: s,
    deleteAddon: d,
    getSettingsPanel: l
}) {
    let u = rs(() => {
            r && r(a.id)
        }, [a.id, r]),
        c = rs(() => {
            if (!n || !e) return;
            let g = So(a.name);
            try {
                z.showAddonSettingsModal(g, l())
            } catch (k) {
                q.show(p("Addons.settingsError", {
                    name: g
                }), {
                    type: "error"
                }), b.stacktrace("Addon Settings", "Unable to get settings panel for " + g + ".", k)
            }
        }, [n, e, a.name, l]),
        f = rs(() => {
            if (!a.authorId || (kf && kf.popLayer(), !Cf || !If || !Sf || !Lf)) return;
            let g = Cf.getCurrentUser().id;
            if (g == a.authorId) return;
            let k = Sf.getDMFromUserId(a.authorId);
            if (k) return If.selectPrivateChannel(k);
            Lf.openPrivateChannel(g, a.authorId)
        }, [a.authorId]),
        m = wf(() => {
            let g = p("Addons.byline").split(/({{[A-Za-z]+}})/),
                k = a.authorLink || a.authorId ? i.createElement("a", {
                    className: "bd-link bd-link-website",
                    href: a.authorLink || "",
                    onClick: f,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, So(a.author)) : i.createElement("span", {
                    className: "bd-author"
                }, So(a.author)),
                L = g.findIndex(R => R == "{{author}}");
            return L && (g[L] = k), [i.createElement("div", {
                className: "bd-name"
            }, So(a.name)), i.createElement("div", {
                className: "bd-meta"
            }, i.createElement("span", {
                className: "bd-version"
            }, "v", So(a.version)), g)]
        }, [a.name, a.version, a.authorLink, a.authorId, a.author, f]),
        h = wf(() => {
            let k = Object.keys(Af).map(L => yx(L, a[L])).filter(L => L);
            return i.createElement("div", {
                className: "bd-footer"
            }, i.createElement("span", {
                className: "bd-links"
            }, k), i.createElement("div", {
                className: "bd-controls"
            }, n && Gn(p("Addons.addonSettings"), i.createElement(rr, {
                size: "20px"
            }), c, {
                isControl: !0,
                disabled: !e
            }), s && Gn(p("Addons.editAddon"), i.createElement(Vt, {
                size: "20px"
            }), s, {
                isControl: !0
            }), d && Gn(p("Addons.deleteAddon"), i.createElement(Pa, {
                size: "20px"
            }), d, {
                isControl: !0,
                danger: !0
            })))
        }, [n, s, d, a, e, c]);
    return i.createElement("div", {
        id: `${a.id}-card`,
        className: "bd-addon-card" + (o ? " bd-addon-card-disabled" : "")
    }, i.createElement("div", {
        className: "bd-addon-header"
    }, t === "plugin" ? i.createElement(Gt, {
        size: "20px",
        className: "bd-icon"
    }) : i.createElement(_t, {
        size: "20px",
        className: "bd-icon"
    }), i.createElement("div", {
        className: "bd-title"
    }, m), i.createElement(Jt, {
        internalState: !1,
        disabled: o,
        value: e,
        onChange: u
    })), i.createElement("div", {
        className: "bd-description-wrap"
    }, o && i.createElement("div", {
        className: "banner banner-danger"
    }, i.createElement(nr, {
        className: "bd-icon"
    }), `An error was encountered while trying to load this ${t}.`), i.createElement("div", {
        className: "bd-description"
    }, vt.parseToReact(So(a.description)))), h)
}
ve();
ma();
be();
En();
I();
V();

function xx() {
    return i.createElement("svg", {
        fill: "none",
        height: "110",
        viewBox: "0 0 240 110",
        width: "240"
    }, i.createElement("linearGradient", {
        id: "a",
        gradientUnits: "userSpaceOnUse",
        x1: "39.567",
        x2: "39.567",
        y1: "39.2948",
        y2: "101.804"
    }, i.createElement("stop", {
        offset: "0",
        stopColor: "#72767d"
    }), i.createElement("stop", {
        offset: "1",
        stopColor: "#fff",
        stopOpacity: "0"
    })), i.createElement("clipPath", {
        id: "b"
    }, i.createElement("path", {
        d: "m0 0h240v110h-240z"
    })), i.createElement("g", {
        clipPath: "url(#b)"
    }, i.createElement("path", {
        d: "m0 109.243v-5.607c0-2.272.917198-4.3935 2.52229-5.9844l11.77071-11.6667c2.0637-2.0454 3.2102-4.7727 3.2102-7.6515v-14.5454c0-6.6667 5.5032-12.1213 12.2293-12.1213h169.5285c6.726 0 12.229 5.4546 12.229 12.1213v27.2727c0 2.5 2.064 4.5454 4.586 4.5454h11.542c5.732 0 10.318 4.6209 10.318 10.2269v3.41z",
        fill: "#72767d",
        opacity: ".2"
    }), i.createElement("path", {
        d: "m83.465 56.2122h-22.1656v53.0298h22.1656z",
        fill: "#36393f"
    }), i.createElement("path", {
        d: "m193.529 56.2122h-110.064v53.0298h110.064z",
        fill: "#4f545c"
    }), i.createElement("path", {
        d: "m106.395 78.9395h-22.93v30.3025h22.93z",
        fill: "#b9bbbe"
    }), i.createElement("path", {
        d: "m109.452 74.3938h-25.987v4.5455h25.987z",
        fill: "#dcddde"
    }), i.createElement("path", {
        d: "m83.465 74.3938h-14.5223v4.5455h14.5223z",
        fill: "#72767d"
    }), i.createElement("path", {
        d: "m103.338 66.8181h-19.873v7.5758h19.873z",
        fill: "#f6f6f7"
    }), i.createElement("path", {
        d: "m83.465 66.8181h-6.879v7.5758h6.879z",
        fill: "#b9bbbe"
    }), i.createElement("path", {
        d: "m102.573 82.7273h-15.2864v1.5151h15.2864z",
        fill: "#72767d"
    }), i.createElement("path", {
        d: "m102.573 84.2424h-15.2864v1.5152h15.2864z",
        fill: "#4f545c"
    }), i.createElement("path", {
        d: "m102.573 85.7576h-15.2864v1.5151h15.2864z",
        fill: "#72767d"
    }), i.createElement("path", {
        d: "m102.573 87.2727h-15.2864v1.5152h15.2864z",
        fill: "#4f545c"
    }), i.createElement("path", {
        d: "m102.573 88.7878h-15.2864v1.5152h15.2864z",
        fill: "#72767d"
    }), i.createElement("path", {
        d: "m102.573 90.303h-15.2864v1.5151h15.2864z",
        fill: "#4f545c"
    }), i.createElement("path", {
        d: "m102.573 91.8181h-15.2864v1.5152h15.2864z",
        fill: "#72767d"
    }), i.createElement("path", {
        d: "m102.573 93.3333h-15.2864v1.5151h15.2864z",
        fill: "#4f545c"
    }), i.createElement("path", {
        d: "m104.102 94.8484h-18.344v3.0303h18.344z",
        fill: "#dcddde"
    }), i.createElement("path", {
        d: "m83.465 78.9395h-12.2293v30.3025h12.2293z",
        fill: "#202225"
    }), i.createElement("path", {
        d: "m75.0573 94.8485h4.586v-9.8485c0-1.2879-.9936-2.2727-2.293-2.2727s-2.293.9848-2.293 2.2727z",
        fill: "#36393f"
    }), i.createElement("path", {
        d: "m185.885 74.394h-16.815v25.758h16.815z",
        fill: "#72767d"
    }), i.createElement("path", {
        d: "m183.592 76.6667h-12.229v21.2122h12.229z",
        fill: "#b9bbbe"
    }), i.createElement("path", {
        d: "m115.524 109.214h45.86v-37.8789h-45.86z",
        fill: "#72767d"
    }), i.createElement("path", {
        d: "m118.582 109.214h39.745v-34.8486h-39.745z",
        fill: "#040405"
    }), i.createElement("path", {
        d: "m140.025 73.6362h-3.057v35.6058h3.057z",
        fill: "#72767d"
    }), i.createElement("path", {
        d: "m144.611 92.1968h-12.229v6.0606h12.229z",
        fill: "#72767d"
    }), i.createElement("path", {
        d: "m120.153 26.6667h-36.688c-5.0446 0-9.172 4.091-9.172 9.091v9.0909h45.86z",
        fill: "#72767d"
    }), i.createElement("path", {
        d: "m111.745 26.6667h57.325c5.045 0 9.172 4.091 9.172 9.091v9.0909h-75.669v-9.0909c0-5 4.051-9.091 9.172-9.091z",
        fill: "#b9bbbe"
    }), i.createElement("path", {
        d: "m105.631 44.8485v-9.0909c0-3.3333 2.751-6.0606 6.114-6.0606h57.325c3.363 0 6.115 2.7273 6.115 6.0606v9.0909z",
        fill: "#72767d"
    }), i.createElement("path", {
        d: "m196.586 38.0303h-113.121v21.9697h113.121z",
        fill: "#dcddde"
    }), i.createElement("path", {
        d: "m83.4224 56.9412h110.0636v-3.7879h-110.0636z",
        fill: "#f6f6f7"
    }), i.createElement("path", {
        d: "m193.529 47.1213h-110.064v3.7879h110.064z",
        fill: "#f6f6f7"
    }), i.createElement("path", {
        d: "m83.4224 44.8201h110.0636v-3.7879h-110.0636z",
        fill: "#f6f6f7"
    }), i.createElement("path", {
        d: "m83.465 38.0303h-25.2229v21.9697h25.2229z",
        fill: "#b9bbbe"
    }), i.createElement("path", {
        d: "m61.2568 56.9412h22.1656v-3.7879h-22.1656z",
        fill: "#dcddde"
    }), i.createElement("path", {
        d: "m61.2568 50.8806h22.1656v-3.7879h-22.1656z",
        fill: "#dcddde"
    }), i.createElement("path", {
        d: "m61.2568 44.8201h22.1656v-3.7879h-22.1656z",
        fill: "#dcddde"
    }), i.createElement("path", {
        d: "m209.885 2.12121c0-.68182.077-1.439392.23-2.12121-5.351.984848-9.478 5.68182-9.478 11.2879 0 6.3636 5.197 11.4394 11.541 11.4394 5.656 0 10.395-4.0152 11.389-9.394-.688.1515-1.376.2273-2.14.2273-6.421 0-11.542-5.15151-11.542-11.43939z",
        fill: "#b9bbbe"
    }), i.createElement("path", {
        d: "m6.19112 73.8636-.99363 1.9697c-.2293.4546.2293.9849.76433.7576l1.98726-.9848c.15287-.0758.30573-.0758.4586 0l1.98722.9848c.4586.2273.9937-.2273.7644-.7576l-.9937-1.9697c-.0764-.1515-.0764-.303 0-.4545l.9937-1.9697c.2293-.4546-.2293-.9849-.7644-.7576l-1.98722.9849c-.15287.0757-.30573.0757-.4586 0l-1.98726-.9849c-.4586-.2273-.99363.2273-.76433.7576l.99363 1.9697c.07643.1515.07643.303 0 .4545z",
        fill: "#b9bbbe"
    }), i.createElement("path", {
        d: "m191.465 30.3031-.994 1.9697c-.229.4545.23.9848.765.7576l1.987-.9849c.153-.0757.306-.0757.458 0l1.988.9849c.458.2272.993-.2273.764-.7576l-.994-1.9697c-.076-.1515-.076-.303 0-.4546l.994-1.9697c.229-.4545-.229-.9848-.764-.7575l-1.988.9848c-.152.0758-.305.0758-.458 0l-1.987-.9848c-.459-.2273-.994.2272-.765.7575l.994 1.9697c.076.1516.076.3031 0 .4546z",
        fill: "#4f545c"
    }), i.createElement("g", {
        fill: "#dcddde"
    }, i.createElement("path", {
        d: "m235.796 26.2879c-.458 0-.764-.3031-.764-.7576v-.7576c0-.4545.306-.7576.764-.7576.459 0 .764.3031.764.7576v.7576c0 .3788-.382.7576-.764.7576z"
    }), i.createElement("path", {
        d: "m235.796 32.3484c-.458 0-.764-.303-.764-.7576v-.7575c0-.4546.306-.7576.764-.7576.459 0 .764.303.764.7576v.7575c0 .3788-.382.7576-.764.7576z"
    }), i.createElement("path", {
        d: "m237.707 28.1819c0-.4546.306-.7576.764-.7576h.765c.458 0 .764.303.764.7576 0 .4545-.306.7576-.764.7576h-.765c-.458 0-.764-.3788-.764-.7576z"
    }), i.createElement("path", {
        d: "m231.592 28.1819c0-.4546.306-.7576.765-.7576h.764c.459 0 .764.303.764.7576 0 .4545-.305.7576-.764.7576h-.764c-.459 0-.765-.3788-.765-.7576z"
    })), i.createElement("g", {
        fill: "#040505"
    }, i.createElement("path", {
        d: "m37.2229 93.106c0-1.4394-1.07-2.803-2.5223-3.0303-1.8344-.303-3.4395 1.1363-3.4395 2.8788 0 1.5909-.3057 3.2575-1.1465 4.6212-.3821.6818-.6114 1.5151-.6114 2.3485.0764 2.4238 2.0637 4.3938 4.4331 4.5458 2.6752.151 4.8917-1.97 4.8917-4.6216 0-.8333-.2293-1.5909-.6114-2.197-.6879-1.3636-.9937-2.9545-.9937-4.5454z"
    }), i.createElement("path", {
        d: "m32.1783 110c-.3822 0-.6879-.303-.6879-.682v-8.333c0-.379.3057-.682.6879-.682s.6879.303.6879.682v8.333c0 .379-.3057.682-.6879.682z"
    }), i.createElement("path", {
        d: "m36.3057 110c-.3822 0-.6879-.303-.6879-.682v-8.333c0-.379.3057-.682.6879-.682s.6879.303.6879.682v8.333c-.0764.379-.3822.682-.6879.682z"
    }), i.createElement("path", {
        d: "m182.752 93.106c0-1.4394-1.07-2.803-2.523-3.0303-1.834-.303-3.439 1.1363-3.439 2.8788 0 1.5909-.306 3.2575-1.147 4.6212-.382.6818-.611 1.5151-.611 2.3485.076 2.4238 2.064 4.3938 4.433 4.5458 2.675.151 4.892-1.97 4.892-4.6216 0-.8333-.23-1.5909-.612-2.197-.688-1.3636-.993-2.9545-.993-4.5454z"
    }), i.createElement("path", {
        d: "m177.707 110c-.382 0-.688-.303-.688-.682v-8.333c0-.379.306-.682.688-.682s.688.303.688.682v8.333c0 .379-.306.682-.688.682z"
    }), i.createElement("path", {
        d: "m181.834 110c-.382 0-.688-.303-.688-.682v-8.333c0-.379.306-.682.688-.682.383 0 .688.303.688.682v8.333c-.076.379-.382.682-.688.682z"
    })), i.createElement("path", {
        d: "m16.6624 109.242h45.8599l-18.344-65.1512h-9.1719z",
        fill: "url(#a)"
    }), i.createElement("path", {
        d: "m32.7134 44.0909h13.7579v-1.5152c0-1.6667-1.3758-3.0303-3.0573-3.0303h-7.6433c-1.6815 0-3.0573 1.3636-3.0573 3.0303z",
        fill: "#dcddde"
    }), i.createElement("path", {
        d: "m39.5923 41.8181v-8.7878c0-3.3334 2.6752-5.9849 6.0383-5.9849 3.363 0 6.0382 2.6515 6.0382 5.9849v76.2117",
        stroke: "#dcddde",
        strokeMiterlimit: "10",
        strokeWidth: "2"
    })))
}

function is(a) {
    return i.createElement("div", {
        className: O("bd-empty-image-container", a.className)
    }, i.createElement(xx, null), i.createElement("div", {
        className: "bd-empty-image-title"
    }, a.title || p("Addons.blankSlateHeaderGeneric")), i.createElement("div", {
        className: "bd-empty-image-message"
    }, vt.parseToReact(a.message || p("Addons.blankSlateMessageGeneric"))), a.children)
}
me();
dt();
oe();
Yt();
mr();
var vx = () => [{
    label: p("Addons.name"),
    value: "name"
}, {
    label: p("Addons.author"),
    value: "author"
}, {
    label: p("Addons.version"),
    value: "version"
}, {
    label: p("Addons.added"),
    value: "added"
}, {
    label: p("Addons.modified"),
    value: "modified"
}, {
    label: p("Addons.isEnabled"),
    value: "isEnabled"
}];

function Ef(a) {
    J.openPath(a)
}

function wx({
    type: a,
    folder: e
}) {
    let {
        toggleStore: t
    } = i.useContext(wo), o = w.get("settings", "store", "bdAddonStore"), r = p("Addons.blankSlateMessage", {
        link: re.pages[`${a}s`],
        context: a
    }).toString(), n = o ? t : () => Ef(e), s = o ? "Addons.openStore" : "Addons.openFolder";
    return i.createElement(is, {
        title: p("Addons.blankSlateHeader", {
            context: a
        }),
        message: o ? "" : r
    }, i.createElement(v, {
        size: v.Sizes.LARGE,
        onClick: n
    }, p(s, {
        context: a
    })))
}

function Tf(a, e, t, o = !1) {
    return i.createElement(C.Tooltip, {
        color: "primary",
        position: "top",
        text: a.toString()
    }, r => i.createElement(v, {
        ...r,
        size: v.Sizes.NONE,
        "aria-label": a.toString(),
        look: v.Looks.BLANK,
        className: "bd-button bd-view-button" + (o ? " selected" : ""),
        onClick: t
    }, e))
}

function kx(a) {
    return new Promise(e => {
        z.showConfirmationModal(p("Modals.confirmAction"), p("Addons.confirmDelete", {
            name: a.name
        }), {
            danger: !0,
            confirmText: p("Addons.deleteAddon"),
            onConfirm: () => {
                e(!0)
            },
            onCancel: () => {
                e(!1)
            }
        })
    })
}

function Cx(a, e) {
    return function(t) {
        if (t.shiftKey) return a();
        z.showConfirmationModal(p("Modals.confirmAction"), p("Addons.enableAllWarning", {
            context: e.toLocaleLowerCase()
        }), {
            confirmText: p("Modals.okay"),
            cancelText: p("Modals.cancel"),
            danger: !0,
            onConfirm: a
        })
    }
}

function Sx() {
    let {
        toggleStore: a,
        store: e
    } = i.useContext(wo);
    if (w.get("settings", "store", "bdAddonStore")) return i.createElement("div", {
        className: "bd-store-card",
        onClick: a
    }, i.createElement("div", {
        className: "bd-store-card-icon"
    }, i.createElement(ir, {
        size: "24px"
    })), i.createElement("div", {
        className: "bd-store-card-body"
    }, i.createElement(D, {
        color: D.Colors.HEADER_PRIMARY,
        className: "bd-store-card-title"
    }, p("Addons.openStore", {
        context: e.prefix
    })), i.createElement(D, {
        color: D.Colors.HEADER_SECONDARY,
        className: "bd-store-card-description"
    }, p("Addons.storeMessage", {
        context: e.prefix
    }))), i.createElement("div", {
        className: "bd-store-card-caret"
    }, i.createElement(Ht, {
        size: "24px"
    })))
}

function ss({
    store: a
}) {
    let [e, t] = jt(""), [o, r] = jt(qa.bind(null, a.prefix, "sort", "name")), [n, s] = jt(qa.bind(null, a.prefix, "ascending", !0)), [d, l] = jt(qa.bind(null, a.prefix, "view", "list")), u = ye(a, () => a.addonList.concat(), [a], !0), c = ye(a, () => Object.assign({}, a.state), [a], !0), f = nt(G => {
        a.toggleAddon(G)
    }, [a]), m = nt(() => {
        a.enableAllAddons()
    }, [a]), h = nt(() => {
        a.disableAllAddons()
    }, [a]), g = nt(G => {
        Ha(a.prefix, "view", G), l(G)
    }, [a.prefix]), k = nt(() => g("list"), [g]), L = nt(() => g("grid"), [g]), R = nt(G => {
        Ha(a.prefix, "ascending", G), s(G)
    }, [a.prefix]), T = nt(G => {
        Ha(a.prefix, "sort", G), r(G)
    }, [a.prefix]), H = nt(G => t(G.currentTarget.value.toLocaleLowerCase()), []), A = nt(G => a.editAddon?.(G), [a]), E = nt(async G => {
        let ie = u.find(K => K.id == G);
        await kx(ie) && a?.deleteAddon?.(ie)
    }, [u, a]), ae = dl(() => {
        let G = u.sort((ie, Be) => {
            let K = o === "isEnabled",
                Re = K ? c[ie.id] : ie[o],
                ne = K ? c[Be.id] : Be[o],
                se = (Ue, Me) => Ue.toLocaleLowerCase().localeCompare(Me.toLocaleLowerCase());
            return typeof Re == "string" && typeof ne == "string" ? se(Re, ne) : typeof Re == "boolean" && typeof ne == "boolean" ? Re === ne ? se(ie.name, Be.name) : Re ? -1 : 1 : Re > ne ? 1 : ne > Re ? -1 : 0
        });
        return n || G.reverse(), e && (G = G.filter(ie => {
            let Be = ie.name.toLocaleLowerCase().includes(e);
            return Be = Be || ie.author.toLocaleLowerCase().includes(e), Be = Be || ie.description.toLocaleLowerCase().includes(e), !!Be
        })), G.map(ie => {
            let Be = ie.instance && typeof ie.instance.getSettingsPanel == "function",
                K = Be && ie.instance.getSettingsPanel.bind(ie.instance);
            return i.createElement(ce, {
                id: ie.id,
                name: "AddonCard"
            }, i.createElement(ns, {
                store: a,
                disabled: ie.partial,
                type: a.prefix,
                editAddon: () => A(ie.id),
                deleteAddon: () => E(ie.id),
                key: ie.id,
                addon: ie,
                onChange: f,
                enabled: c[ie.id],
                hasSettings: Be,
                getSettingsPanel: K || void 0
            }))
        })
    }, [a, u, c, f, E, A, e, n, o]), B = u.length !== 0, ue = !!e, Ce = ae.length !== 0;
    return [i.createElement(qn, {
        count: ae.length,
        searching: ue
    }, i.createElement(_a, {
        onChange: H,
        placeholder: `${p("Addons.search",{count:ae.length,context:a.prefix})}...`
    })), i.createElement("div", {
        className: "bd-controls bd-addon-controls"
    }, i.createElement("div", {
        className: "bd-controls-basic"
    }, ja(p("Addons.openFolder", {
        context: a.prefix
    }), i.createElement(Ea, {
        size: "20px"
    }), Ef.bind(null, a.addonFolder), "folder"), ja(p("Addons.enableAll"), i.createElement(Ye, {
        size: "20px"
    }), Cx(m, a.prefix), "enable-all"), ja(p("Addons.disableAll"), i.createElement(We, {
        size: "20px"
    }), h, "disable-all")), i.createElement("div", {
        className: "bd-controls-advanced"
    }, i.createElement("div", {
        className: "bd-addon-dropdowns"
    }, i.createElement("div", {
        className: "bd-select-wrapper"
    }, i.createElement("label", {
        className: "bd-label"
    }, p("Sorting.sortBy"), ":"), i.createElement(Ct, {
        options: vx(),
        value: o,
        onChange: T,
        style: "transparent"
    })), i.createElement("div", {
        className: "bd-select-wrapper"
    }, i.createElement("label", {
        className: "bd-label"
    }, p("Sorting.order"), ":"), i.createElement(Ct, {
        options: jn(),
        value: n,
        onChange: R,
        style: "transparent"
    }))), i.createElement("div", {
        className: "bd-addon-views"
    }, Tf(p("Addons.listView"), i.createElement(sr, {
        size: "20px"
    }), k, d === "list"), Tf(p("Addons.gridView"), i.createElement($o, null), L, d === "grid")))), i.createElement(Sx, null), !B && i.createElement(wx, {
        type: a.prefix,
        folder: a.addonFolder
    }), ue && !Ce && B && i.createElement(Cr, null), B && i.createElement("div", {
        key: "addonList",
        className: "bd-addon-list" + (d == "grid" ? " bd-grid-view" : "")
    }, ae)]
}
me();
var {
    useState: Lx,
    useCallback: Ix
} = i;

function ds(a) {
    let [e, t] = Lx(() => w.get("settings", "store", "bdAddonStore") && !a.store.addonList.length), o = Ix(() => t(r => !r), []);
    return i.createElement(wo.Provider, {
        value: {
            toggleStore: o,
            showingStore: e,
            ...a
        }
    }, e ? i.createElement(os, {
        ...a,
        type: a.store.prefix
    }) : i.createElement(ss, {
        ...a
    }))
}
_();
tt();
I();
V();
Bt();
me();
dt();
Yt();
He();
_();
tt();
Bt();

function Ax() {
    let a = C.GetClientInfo?.();
    return a ? `${a.releaseChannel[0].toUpperCase()}${a.releaseChannel.substring(1)} ${a.buildNumber} (${a.versionHash.substring(0,7)})` : C.RemoteModule?.releaseChannel ?? "Unknown"
}

function Tx() {
    let a = C.RemoteModule;
    return a ? `Host ${a.version.join(".")} ${a.architecture} (${a.buildNumber})` : "Host Unknown"
}

function Ex() {
    let a = C.RemoteModule;
    if (!a) return "OS Unknown";
    let e = window.DiscordNative?.os?.release,
        t = C.UserAgentInfo?.os.toString();
    if (!e || !t) return "OS Unknown";
    let [o, r, n] = a.parsedOSRelease;
    return t.includes("Windows 10") && n >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && o >= 20 && (t = "macOS ".concat((o - 9).toString())), `${t} (${e})`
}

function ls(a = !0) {
    let e = [Ax(), Tx(), Ex()];
    return a ? e.join(`
`) : e
}

function Lr(a) {
    return {
        total: a.addonList.length,
        enabled: a.addonList.filter(e => a.isEnabled(e.id)).length
    }
}

function Mf(a) {
    return a.addonList.map(e => `- ${e.name}${a.isEnabled(e.id)?" (Enabled)":""}`).join(`
`)
}

function us() {
    return `${W.isCanary?"Canary":"Stable"} ${W.get("version")} (${W.get("commit")?.substring(0,7)})
`
}

function Mx() {
    let a = Lr(le),
        e = Lr(Ee);
    return [`### ${a.total} Plugins (${a.enabled} Enabled):
${Mf(le)}
`, `### ${e.total} Themes (${e.enabled} Enabled):
${Mf(Ee)}
`].join(`
`)
}

function Ir() {
    return [`## Discord Info
${ls()}
`, "## BetterDiscord", us(), Mx()].join(`
`)
}
pe();
var {
    useMemo: Kn,
    useState: Dx,
    useCallback: Df
} = i, St = 10, Px = new Set(["247863095647535104", "343423092670070786", "66043140208857088", "234600632567201792", "249746236008169473", "506287150984069120", "257900031351193600", "336678828233588736", "676620914632294467", "178394162381455360", "907344440945967114", "309976820109803520", "241334335884492810", "343383572805058560", "560112831371149312", "619261917352951815", "1030617301818552320", "528850043227340801", "310741793668857859", "1323433010858557523", "459937621481750528", "254362351170617345", "1019660983758766130", "515780151791976453", "398131626695196672", "538487970408300544", "917630027477159986", "226677096091484160", "174868361040232448", "155149108183695360", "262055523896131584", "116242787980017679", "403581288046526474", "76052829285916672", "332394843743584256", "224538553944637440", "238108500109033472", "777264613867257857", "102528230413578240", "678469587444170762", "219363409097916416", "582170007505731594", "354191516979429376", "468132563714703390", "323980738175434752", "801089753038061669", "415849376598982656", "68834122860077056", "384009727253807105", "247153658385399818", "306111596143443969", "508863359777505290", "278543574059057154", "282414867506528259", "231675734693773325", "234086939102281728", "316707214075101196", "382062281623863298", "282110343549812736", "332116671294734336", "188323207793606656", "557388558017495046", "300294176501923841", "385895514324992011", "264163473179672576", "340614112331694081", "374663636347650049", "152927763605618689", "133659541198864384", "295190422244950017", "135895345296048128", "220161488516546561", "110574243023966208", "437579806616322049", "153562159161278473", "490604571824226306", "253480609224065025", "502701912370577418", "112685077707665408", "98468214824001536", "399416615742996480", "214478470972047360", "678541597654253600", "179681974879911946", "211270674482724864", "583750578094735360", "135554522616561664", "741262207391629343", "124017508662378500", "194151269399527425", "267228264580382721", "709377715320651838", "402272736665272320", "427179231164760066", "98087545497206784", "354831939099688962", "137259132305539072", "147077474222604288", "516091504524132362", "712318895062515809", "124276233478471680", "521340540411838464", "1060238753823723530", "332150412763332608", "310450863845933057", "142347724392497152", "705153934758772746", "120202910586896385", "301194255731392513", "869418754348580885", "131212461499088896", "270848136006729728", "92969646403121152", "769144538107215872", "304260051915374603", "80593258903773184", "346338830011596800", "393900343135830016", "419610859392860162", "359175647257690113", "224085382474498048", "705798778472366131"]);

function cs() {
    let [a, e] = Dx(0), t = Kn(() => Pe.UserStore?.getCurrentUser()?.id, []), o = ye(w, () => w.get("developer", "canary")), r = Kn(() => ls(!1).map(m => i.createElement(D, {
        color: D.Colors.MUTED,
        size: D.Sizes.SIZE_12
    }, m)), []), n = Df(() => {
        if (DiscordNative?.clipboard?.copy(`\`\`\`md
${Ir()}
\`\`\``), !Px.has(t)) return e(1);
        let f = a + 1;
        f > St || (f === St && w.set("developer", "canary", !o), e(f))
    }, [a, t, o]), s = Df(() => {
        setTimeout(() => e(0), 250)
    }, []), d = ye(le, () => Lr(le), [], !0), l = ye(Ee, () => Lr(Ee), [], !0), u = Kn(() => {
        if (a === 0) return "Click to copy";
        if (a > 0 && a < St / 2) return "Copied";
        if (a >= St / 2 && a < St) return `${St-a} clicks to go`;
        if (a >= St) return o ? "Switched to BD canary" : "Switched to BD stable"
    }, [a, o]), c = Kn(() => {
        if (a === 0) return "primary";
        if (a > 0 && a < St / 2) return "green";
        if (a >= St / 2 && a < St) return "yellow";
        if (a >= St) return "brand"
    }, [a]);
    return i.createElement(C.Tooltip, {
        color: c,
        position: "top",
        text: u
    }, f => i.createElement("div", {
        ...f,
        className: "bd-version-info",
        onClick: n,
        onMouseLeave: m => {
            f.onMouseLeave(m), s()
        }
    }, r, i.createElement(D, {
        color: D.Colors.MUTED,
        size: D.Sizes.SIZE_12
    }, "BD ", us()), i.createElement(D, {
        color: D.Colors.MUTED,
        size: D.Sizes.SIZE_12
    }, p("Panels.plugins"), " ", d.total, " (", d.enabled, " ", p("Addons.isEnabled"), ")"), i.createElement(D, {
        color: D.Colors.MUTED,
        size: D.Sizes.SIZE_12
    }, p("Panels.themes"), " ", l.total, " (", l.enabled, " ", p("Addons.isEnabled"), ")")))
}
pt();
Yt();
I();
V();
me();
_();
xe();
ve();
I();
I();
Ln();
var {
    useState: zx,
    useCallback: Bx,
    useRef: Nx
} = i, Fx = "bd-settings-group";

function Lo({
    name: a,
    collapsible: e,
    shown: t = !0,
    showDivider: o,
    children: r,
    titleChildren: n,
    onDrawerToggle: s
}) {
    let d = Nx(null),
        [l, u] = zx(!!e && !t),
        c = Bx(() => {
            let h = d.current,
                g = l ? 300 : 1;
            h.style.setProperty("height", h.scrollHeight + "px"), h.classList.add("animating"), s && s(l), u(!l), setTimeout(() => {
                h.style.setProperty("height", ""), h.classList.remove("animating")
            }, g)
        }, [l, s]),
        m = `${Fx} ${e?`collapsible ${l?"collapsed":"expanded"}`:""}`;
    return i.createElement("div", {
        className: m
    }, i.createElement(kt, {
        text: a,
        onClick: c,
        isGroup: !0
    }, n), i.createElement("div", {
        className: "bd-settings-container",
        ref: d
    }, r), o && i.createElement(ho, null))
}
gr();
I();
wt();
xe();
oe();
var {
    useState: Ox,
    useCallback: fs,
    useContext: Rx
} = i;

function Ar({
    value: a,
    min: e,
    max: t,
    step: o = 1,
    onChange: r,
    disabled: n
}) {
    let [s, d] = Ox(a), {
        value: l,
        disabled: u
    } = Rx(Ie), c = l !== fe ? l : s, f = l !== fe ? u : n, m = fs(k => {
        r?.(k.target.value), d(k.target.value)
    }, [r]), h = fs(() => {
        let L = parseFloat(String(c)) + o;
        t !== void 0 && L > t || (r?.(L), d(L))
    }, [r, c, t, o]), g = fs(() => {
        let L = parseFloat(String(c)) - o;
        e !== void 0 && L < e || (r?.(L), d(L))
    }, [r, c, e, o]);
    return i.createElement("div", {
        className: `bd-number-input-wrapper ${f?"bd-number-input-disabled":""}`
    }, i.createElement(v, {
        size: v.Sizes.ICON,
        look: v.Looks.FILLED,
        color: v.Colors.PRIMARY,
        className: "bd-number-input-decrement",
        onClick: g
    }, i.createElement(Jo, {
        size: "24px"
    })), i.createElement("input", {
        onChange: m,
        type: "number",
        className: "bd-number-input",
        min: e,
        max: t,
        step: o,
        value: c,
        disabled: f
    }), i.createElement(v, {
        size: v.Sizes.ICON,
        look: v.Looks.FILLED,
        color: v.Colors.PRIMARY,
        className: "bd-number-input-increment",
        onClick: h
    }, i.createElement(er, {
        size: "24px"
    })))
}
I();
Ln();

function ba({
    id: a,
    name: e,
    note: t,
    inline: o,
    children: r
}) {
    return i.createElement("div", {
        className: "bd-setting-item" + (o ? " inline" : "")
    }, i.createElement("div", {
        className: "bd-setting-header"
    }, i.createElement("label", {
        htmlFor: a,
        className: "bd-setting-title"
    }, e), o && r), i.createElement("div", {
        className: "bd-setting-note"
    }, t), !o && r, i.createElement(ho, {
        className: "bd-setting-divider"
    }))
}
I();
wt();
var {
    useState: Ux,
    useCallback: jx,
    useContext: qx
} = i;

function Tr({
    value: a,
    maxLength: e,
    placeholder: t,
    onKeyDown: o,
    onChange: r,
    disabled: n
}) {
    let [s, d] = Ux(a), {
        value: l,
        disabled: u
    } = qx(Ie), c = l !== fe ? l : s, f = l !== fe ? u : n, m = jx(h => {
        f || (r?.(h.currentTarget.value), d(h.currentTarget.value))
    }, [r, f]);
    return i.createElement("input", {
        onChange: m,
        onKeyDown: o,
        type: "text",
        className: "bd-text-input",
        placeholder: t,
        maxLength: e,
        value: c,
        disabled: f
    })
}
I();
wt();
var {
    useState: Hx,
    useCallback: $n,
    useMemo: Wx,
    useRef: _x,
    useContext: Vx
} = i;

function Er({
    value: a,
    min: e,
    max: t,
    step: o,
    onChange: r,
    disabled: n,
    units: s = "",
    markers: d = []
}) {
    let [l, u] = Hx(a), {
        value: c,
        disabled: f
    } = Vx(Ie), m = c !== fe ? c : l, h = c !== fe ? f : n, g = _x(null), k = $n(A => {
        h || (r?.(A.target.value), u(A.target.value))
    }, [r, h]), L = $n(A => {
        h || (r?.(A), u(A))
    }, [r, h]), R = $n(A => (A - e) * 100 / (t - e), [e, t]), T = Wx(() => {
        let A = -37.5 / (t - e),
            E = m * A + -25;
        return E < -62.5 ? -62.5 : E
    }, [m, e, t]), H = $n(A => {
        let E = A.currentTarget.getBoundingClientRect(),
            ue = (A.clientX - E.left) / E.width * (t - e) + e;
        g.current.value = ue.toString(), L(g.current.value)
    }, [t, e, L, g]);
    return i.createElement("div", {
        className: `bd-slider-wrap ${h?"bd-slider-disabled":""} ${d.length>0?"bd-slider-markers":""}`
    }, i.createElement("input", {
        onChange: k,
        type: "range",
        className: "bd-slider-input",
        min: e,
        max: t,
        step: o,
        value: m,
        disabled: n,
        ref: g
    }), i.createElement("div", {
        className: "bd-slider-label",
        style: {
            left: `${R(m)}%`,
            transform: `translateX(${T}%)`
        }
    }, m, s), i.createElement("div", {
        className: "bd-slider-track",
        style: {
            backgroundSize: R(m) + "% 100%"
        },
        onClick: H
    }), d?.length > 0 && i.createElement("div", {
        className: "bd-slider-marker-container"
    }, d.map(A => {
        let E = typeof A == "number" ? A : A.value,
            ae = typeof A == "number" ? A : A?.label,
            B = s && typeof A == "number";
        return i.createElement("div", {
            className: "bd-slider-marker",
            style: {
                left: R(E) + "%"
            },
            onClick: () => L(E)
        }, ae, B && s)
    })))
}
I();
wt();
var {
    useState: Gx,
    useCallback: Kx,
    useContext: $x
} = i;

function Zx({
    checked: a
}) {
    return i.createElement("svg", {
        className: "bd-radio-indicator",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
    }, i.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12",
        strokeWidth: "2",
        fill: "none",
        className: "bd-radio-icon"
    }), a && i.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "5",
        fill: "#fff"
    }))
}

function Mr({
    name: a,
    value: e,
    options: t,
    onChange: o,
    disabled: r
}) {
    let {
        value: n,
        disabled: s
    } = $x(Ie), d = n !== fe ? n : e, l = n !== fe ? s : r, [u, c] = Gx(t.findIndex(h => h.value === d)), f = Kx(h => {
        if (l) return;
        let g = parseInt(h.target.value),
            k = t[g].value;
        o?.(k), c(g)
    }, [t, o, l]);

    function m(h, g) {
        let k = u === g;
        return i.createElement("label", {
            className: "bd-radio-option" + (k ? " bd-radio-selected" : ""),
            style: {
                borderColor: h.color ?? "transparent"
            }
        }, i.createElement("input", {
            onChange: f,
            type: "radio",
            name: a,
            checked: k,
            value: g,
            disabled: l
        }), i.createElement(Zx, {
            checked: k
        }), i.createElement("div", {
            className: "bd-radio-label-wrap"
        }, i.createElement("div", {
            className: "bd-radio-label"
        }, h.name), i.createElement("div", {
            className: "bd-radio-description"
        }, h.desc || h.description)))
    }
    return i.createElement("div", {
        className: `bd-radio-group ${l?"bd-radio-disabled":""}`
    }, t.map(m))
}
I();
xe();
oe();
wt();
var {
    useState: Pf,
    useCallback: Zn,
    useEffect: Xx,
    useContext: Jx
} = i;

function Dr({
    value: a,
    onChange: e,
    max: t = 4,
    clearable: o = !1,
    disabled: r
}) {
    let [n, s] = Pf({
        isRecording: !1,
        accum: []
    }), [d, l] = Pf(a), {
        value: u,
        disabled: c
    } = Jx(Ie), f = u !== fe ? u : d, m = u !== fe ? c : r;
    Xx(() => (window.addEventListener("keydown", h, !0), window.addEventListener("keyup", g, !0), () => {
        window.removeEventListener("keydown", h, !0), window.removeEventListener("keyup", g, !0)
    }));
    let h = Zn(T => {
            n.isRecording && (T.stopImmediatePropagation(), T.stopPropagation(), T.preventDefault(), !(T.repeat || n.accum.includes(T.key)) && (n.accum.push(T.key), n.accum.length == t && (s({
                isRecording: !1,
                accum: []
            }), l(n.accum.slice(0)), e?.(n.accum))))
        }, [n, t, e]),
        g = Zn(T => {
            n.isRecording && (T.stopImmediatePropagation(), T.stopPropagation(), T.preventDefault(), T.key === n.accum[0] && (s({
                isRecording: !1,
                accum: []
            }), l(n.accum.slice(0)), e?.(n.accum)))
        }, [n, e]),
        k = Zn(T => {
            T.stopPropagation(), T.preventDefault(), !m && (e && e([]), l([]), s({
                ...n,
                isRecording: !1,
                accum: []
            }))
        }, [e, n, m]),
        L = Zn(T => {
            if (!m) {
                if (T.currentTarget?.className?.includes?.("bd-keybind-clear") || T.currentTarget?.closest(".bd-button")?.className?.includes("bd-keybind-clear")) return k(T);
                s({
                    ...n,
                    isRecording: !n.isRecording
                })
            }
        }, [n, k, m]),
        R = f.length ? f.map(T => T === "Control" ? "Ctrl" : T).join(" + ") : "";
    return i.createElement("div", {
        className: "bd-keybind-wrap" + (n.isRecording ? " recording" : "") + (m ? " bd-keybind-disabled" : ""),
        onClick: L
    }, i.createElement(v, {
        size: v.Sizes.ICON,
        look: v.Looks.FILLED,
        color: n.isRecording ? v.Colors.RED : v.Colors.PRIMARY,
        className: "bd-keybind-record",
        onClick: L
    }, i.createElement(Ko, {
        size: "24px"
    })), i.createElement("input", {
        readOnly: !0,
        type: "text",
        className: "bd-keybind-input",
        value: R,
        placeholder: "No keybind set",
        disabled: r
    }), o && i.createElement(v, {
        size: v.Sizes.ICON,
        look: v.Looks.BLANK,
        onClick: k,
        className: "bd-keybind-clear"
    }, i.createElement(We, {
        size: "24px"
    })))
}
I();
_();
V();
oe();
wt();
var {
    useState: Yx,
    useCallback: Qx,
    useContext: ev
} = i, tv = [1752220, 3066993, 3447003, 10181046, 15277667, 15844367, 15105570, 15158332, 9807270, 6323595, 1146986, 2067276, 2123412, 7419530, 11342935, 12745742, 11027200, 10038562, 9936031, 5533306];

function Nt(a, e = !0) {
    switch (typeof a) {
        case (e && "number"):
            return `#${a.toString(16)}`;
        case (!e && "string"):
            return Number.parseInt(a.replace("#", ""), 16);
        case (!e && "number"):
            return a;
        case (e && "string"):
            return a;
        default:
            return a
    }
}
var av = a => {
        let e = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a);
        if (e) return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])];
        if (e = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)%\s*,\s*([0-9]+(?:\.[0-9]+)?)%\s*,\s*([0-9]+(?:\.[0-9]+)?)%\s*\)/.exec(a), e) return [parseFloat(e[1]) * 2.55, parseFloat(e[2]) * 2.55, parseFloat(e[3]) * 2.55];
        if (e = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a), e) return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)];
        if (e = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(a), e) return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
    },
    ov = a => {
        let e = typeof a == "string" ? av(a) : a;
        return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
    },
    ps = a => ov(a) >= 150 ? "#000" : "#fff";

function Pr({
    value: a,
    onChange: e,
    colors: t = tv,
    defaultValue: o,
    disabled: r
}) {
    let [n, s] = Yx(a), {
        value: d,
        disabled: l
    } = ev(Ie), u = d !== fe ? d : n, c = d !== fe ? l : r, f = Qx(h => {
        c || (e?.(Nt(h.target.value)), s(h.target.value))
    }, [e, c]), m = Nt(u, !1);
    return i.createElement("div", {
        className: `bd-color-picker-container ${c?"bd-color-picker-disabled":""}`
    }, i.createElement("div", {
        className: "bd-color-picker-controls"
    }, o && i.createElement(C.Tooltip, {
        text: "Default",
        position: "bottom"
    }, h => i.createElement("div", {
        ...h,
        className: "bd-color-picker-default",
        style: {
            backgroundColor: Nt(o)
        },
        onClick: () => f({
            target: {
                value: o
            }
        })
    }, m === Nt(o, !1) ? i.createElement(Ye, {
        size: "25px",
        color: ps(Nt(o, !0))
    }) : null)), i.createElement(C.Tooltip, {
        text: p("Settings.customColor"),
        position: "bottom"
    }, h => i.createElement("div", {
        className: "bd-color-picker-custom"
    }, i.createElement(Qo, {
        size: "14px",
        color: ps(Nt(u, !0))
    }), i.createElement("input", {
        ...h,
        style: {
            backgroundColor: Nt(u)
        },
        type: "color",
        className: "bd-color-picker",
        value: Nt(u),
        onChange: f,
        disabled: r
    })))), t?.length > 0 && i.createElement("div", {
        className: "bd-color-picker-swatch"
    }, t.map((h, g) => i.createElement("div", {
        key: g,
        className: "bd-color-picker-swatch-item",
        style: {
            backgroundColor: Nt(h)
        },
        onClick: () => f({
            target: {
                value: h
            }
        })
    }, m === h ? i.createElement(Ye, {
        size: "16px",
        color: ps(Nt(u, !0))
    }) : null))))
}
var zf = require("electron");
I();
xe();
oe();
var {
    useRef: rv,
    useCallback: ms,
    useEffect: nv
} = i;

function hs({
    multiple: a,
    accept: e,
    clearable: t,
    onChange: o,
    disabled: r,
    actions: n
}) {
    let s = rv(null),
        d = ms(c => {
            if (r) return;
            let f = [];
            for (let m of c.target.files) f.push(zf.webUtils.getPathForFile(m));
            o?.(a === !0 ? f : f[0])
        }, [o, r, a]),
        l = ms(() => {
            s.current.value = "", o?.(a === !0 ? [] : "")
        }, [o, a]);
    nv(() => {
        n && (n.clear = l)
    }, [l, n]);
    let u = ms(() => {
        s.current?.click()
    }, []);
    return i.createElement("div", {
        className: `bd-file-input-wrap ${r?"bd-file-input-disabled":""}`
    }, i.createElement(v, {
        size: v.Sizes.ICON,
        look: v.Looks.FILLED,
        color: v.Colors.PRIMARY,
        className: "bd-file-input-browse",
        onClick: u
    }, "Browse"), i.createElement("input", {
        onChange: d,
        type: "file",
        className: "bd-file-input",
        multiple: a,
        accept: e,
        disabled: r,
        ref: s
    }), t && i.createElement(v, {
        size: v.Sizes.ICON,
        look: v.Looks.BLANK,
        onClick: l,
        className: "bd-file-input-clear"
    }, i.createElement(We, {
        size: "24px"
    })))
}
xe();
I();
dt();
wt();
var iv = ["top-left", "top-right", "bottom-left", "bottom-right"],
    sv = ({
        value: a,
        onChange: e,
        disabled: t
    }) => {
        let [o, r] = jt(a), {
            value: n,
            disabled: s
        } = yn(Ie), d = n !== fe ? n : o, l = n !== fe ? s : t, u = f => {
            l || (e?.(f), r(f))
        }, c = f => `bd-box${l?"-disabled":""} ${f} ${d===f?"selected":""}`;
        return i.createElement("div", {
            className: "position-wrapper"
        }, i.createElement("div", {
            className: `bd-container${l?"-disabled":""}`
        }, iv.map(f => i.createElement("button", {
            key: f,
            className: c(f),
            onClick: () => u(f),
            role: "radio",
            "aria-checked": d === f,
            "aria-label": `Select ${f} position`,
            disabled: l,
            tabIndex: l ? -1 : 0
        }))), i.createElement("div", {
            className: "bd-position-info"
        }, d ? i.createElement(i.Fragment, null, i.createElement(D, null, "Selected Position:"), i.createElement(D, null, d.replace(/-/g, " ").toUpperCase())) : i.createElement(D, null, "Click a box to select position")))
    },
    Bf = sv;
wt();
Yt();
me();
var {
    useCallback: dv
} = i;

function lv({
    collection: a,
    category: e,
    id: t,
    children: o
}) {
    let r = i.useCallback(() => {
            let d = w.getSetting(a, e, t);
            return {
                value: w.get(a, e, t),
                disabled: d?.disabled ?? !1
            }
        }, [a, e, t]),
        n = ye(w, r),
        s = i.useMemo(() => n, [n]);
    return i.createElement(Ie.Provider, {
        value: s
    }, o)
}

function Va({
    onChange: a,
    id: e,
    name: t = "",
    shown: o,
    onDrawerToggle: r,
    showDivider: n = !1,
    collapsible: s,
    settings: d,
    children: l = null,
    collection: u
}) {
    let c = dv((f, m) => {
        e ? a?.(e, f, m) : a?.(f, m)
    }, [e, a]);
    return i.createElement(Lo, {
        collapsible: s,
        name: t,
        shown: o,
        onDrawerToggle: r,
        showDivider: n
    }, d?.length > 0 && d.filter(f => !f.hidden).map(f => {
        let h = Xn({
            ...f,
            onChange: g => {
                f?.onChange?.(g), c(f.id, g)
            }
        });
        return u ? i.createElement(lv, {
            collection: u,
            category: e,
            id: f.id
        }, h) : h
    }), l)
}

function Xn(a) {
    let e = null;
    return a.type === "dropdown" && (e = i.createElement(Ct, {
        ...a
    })), a.type === "number" && (e = i.createElement(Ar, {
        ...a
    })), a.type === "switch" && (e = i.createElement(Jt, {
        ...a
    })), a.type === "text" && (e = i.createElement(Tr, {
        ...a
    })), a.type === "file" && (e = i.createElement(hs, {
        ...a
    })), a.type === "slider" && (e = i.createElement(Er, {
        ...a
    })), a.type === "radio" && (e = i.createElement(Mr, {
        ...a
    })), a.type === "keybind" && (e = i.createElement(Dr, {
        ...a
    })), a.type === "color" && (e = i.createElement(Pr, {
        ...a
    })), a.type === "button" && (e = i.createElement(v, {
        ...a
    })), a.type === "position" && (e = i.createElement(Bf, {
        ...a
    })), a.type === "custom" && (e = a.children), e ? i.createElement(ba, {
        id: a.id,
        inline: a.hasOwnProperty("inline") ? a.inline : a.type !== "radio",
        key: a.id,
        name: a.name,
        note: a.note
    }, e) : null
}
oe();

function uv(a, e) {
    let t = cv(() => {
        w.resetCollection(a), e?.()
    });
    return i.createElement(C.Tooltip, {
        color: "primary",
        position: "top",
        text: p("Settings.resetSettings")
    }, o => i.createElement(v, {
        ...o,
        "aria-label": p("Settings.resetSettings"),
        size: v.Sizes.ICON,
        look: v.Looks.BLANK,
        color: v.Colors.TRANSPARENT,
        onClick: t
    }, i.createElement(Zo, null)))
}

function cv(a) {
    return () => {
        z.showConfirmationModal(p("Modals.confirmAction"), p("Settings.resetSettingsWarning"), {
            confirmText: p("Modals.okay"),
            cancelText: p("Modals.cancel"),
            danger: !0,
            onConfirm: a
        })
    }
}

function gs({
    id: a,
    title: e,
    groups: t,
    onChange: o,
    onDrawerToggle: r,
    getDrawerState: n
}) {
    let s = i.useContext(aa);
    return i.createElement(i.Fragment, null, s(i.createElement(kt, {
        text: e
    }, uv(a))), t.map(d => {
        let l = Object.assign({}, d, {
            collection: a,
            onChange: o,
            onDrawerToggle: u => r(a, d.id, u),
            shown: n(a, d.id, d.hasOwnProperty("shown") ? d.shown : !0)
        });
        return i.createElement(Va, {
            ...l
        })
    }))
}
I();
var fv = {
        xxs: 12,
        xs: 16,
        sm: 18,
        md: 24,
        lg: 32,
        custom: void 0,
        refresh_sm: 20
    },
    zr = (a, e = t => t) => sl(t => i.createElement(a, e({
        size: fv[t.size || "md"],
        className: t.className,
        color: t.color
    }, t)));
I();
be();
oe();
var pv = typeof Aa.render == "function" ? Aa.render : Aa,
    Nf = (a, e) => {
        let t = {
            d: a
        };
        return typeof e == "string" && (t.fill = e), ["path", t]
    },
    bs = a => {
        let e = pv({
            ...a,
            className: O("lucide-betterdiscord", a.className),
            iconNode: [Nf("M1402.2,631.7c-9.7-353.4-286.2-496-642.6-496H68.4v714.1l442,398V490.7h257c274.5,0,274.5,344.9,0,344.9H597.6v329.5h169.8c274.5,0,274.5,344.8,0,344.8h-699v354.9h691.2c356.3,0,632.8-142.6,642.6-496c0-162.6-44.5-284.1-122.9-368.6C1357.7,915.8,1402.2,794.3,1402.2,631.7z", a.accent ? "var(--bd-brand)" : a.color || "currentcolor"), Nf("M1262.5,135.2L1262.5,135.2l-76.8,0c26.6,13.3,51.7,28.1,75,44.3c70.7,49.1,126.1,111.5,164.6,185.3c39.9,76.6,61.5,165.6,64.3,264.6l0,1.2v1.2c0,141.1,0,596.1,0,737.1v1.2l0,1.2c-2.7,99-24.3,188-64.3,264.6c-38.5,73.8-93.8,136.2-164.6,185.3c-22.6,15.7-46.9,30.1-72.6,43.1h72.5c346.2,1.9,671-171.2,671-567.9V716.7C1933.5,312.2,1608.7,135.2,1262.5,135.2z", a.secondaryColor || a.color || "currentcolor")]
        }, a.ref);
        return i.cloneElement(e, {
            viewBox: "0 0 2000 2000",
            enableBackground: "new 0 0 2000 2000",
            stoke: void 0
        })
    },
    Ga = Object.assign(bs, {
        Discord: zr(bs),
        DiscordAccented: zr(bs, a => ({
            ...a,
            accent: !0
        }))
    });
_();
xe();
oe();
V();
ve();
tt();
_e();
et();
pe();
ee();
I();
_();
_e();
var Ao = !1,
    Ka = te(["MenuItem", "Menu"], {
        cacheId: "core-contextmenu-ModulesBundle"
    }),
    he = {
        Separator: Ka?.MenuSeparator,
        CheckboxItem: Ka?.MenuCheckboxItem,
        RadioItem: Ka?.MenuRadioItem,
        ControlItem: Ka?.MenuControlItem,
        Group: Ka?.MenuGroup,
        Item: Ka?.MenuItem,
        Menu: Ka?.Menu
    };
Ao = Object.values(he).every(a => a);
if (!Ao) {
    let a = /(function .{1,3}\(.{1,3}\){return null}){5}/,
        e = /\.type===.{1,3}\.(.{1,3})\)return .{1,3}\.push\((?:null!=.{1,3}\.props\..+?)?{type:"(.+?)",/g,
        t = /\.type===.{1,3}\.(.{1,3})\){.+{type:"groupstart"/,
        o = /\.type===.{1,3}\.(.{1,3})\){.+{type:"(groupstart|customitem)".+\.type===.{1,3}\.(.{1,3})\){.+?{type:"(groupstart|customitem)"/,
        r, n = "";
    for (let u in X.m)
        if (Object.prototype.hasOwnProperty.call(X.m, u) && a.test(X.m[u].toString())) {
            r = u;
            break
        } for (let u in X.m)
        if (Object.prototype.hasOwnProperty.call(X.m, u)) {
            let c = X.m[u].toString();
            if (c.includes(r) && c.includes("Menu API only allows Items and groups of Items as children")) {
                n = c;
                break
            }
        } let s = X(r);
    for (let [, u, c] of n.matchAll(e)) switch (c) {
        case "separator":
            he.Separator ??= s[u];
            break;
        case "radio":
            he.RadioItem ??= s[u];
            break;
        case "checkbox":
            he.CheckboxItem ??= s[u];
            break;
        case "compositecontrol":
        case "control":
            he.ControlItem ??= s[u];
            break;
        case "customitem":
        case "item":
            he.Item ??= s[u];
            break
    }
    let d = n.match(t);
    d && (he.Group ??= s[d[1]]);
    let l = n.match(o);
    l && (he.Group ??= s[l[l[2] === "groupstart" ? 1 : 3]], he.Item ??= s[l[l[2] === "customitem" ? 1 : 3]]), he.Menu ??= de(F.byStrings("getContainerProps()", ".keyboardModeEnabled&&null!="), {
        searchExports: !0,
        firstId: 397927,
        cacheId: "core-contextmenu-menu"
    })
}
Ao = Object.values(he).every(a => a);
var ys = (() => {
    let a = {};
    try {
        Object.assign(a, la(F.bySource("new DOMRect", "CONTEXT_MENU_CLOSE"), {
            closeContextMenu: F.byStrings("CONTEXT_MENU_CLOSE"),
            openContextMenu: F.byStrings("renderLazy")
        }, {
            searchDefault: !1,
            cacheId: "core-contextmenu-Actions"
        })), Ao &&= typeof a.closeContextMenu == "function" && typeof a.openContextMenu == "function"
    } catch (e) {
        Ao = !1, b.stacktrace("ContextMenu~Components", "Fatal startup error:", e), Object.assign(a, {
            closeContextMenu: () => {},
            openContextMenu: () => {}
        })
    }
    return a
})();

function Ff(a) {
    let e = "^";
    for (let t = 0; t < a.length; t++) {
        let o = a[t];
        if (o === "*") {
            e += ".*";
            continue
        }
        "\\^$+?.()|{}[]".includes(o) && (e += "\\"), e += o
    }
    return e += "$", new RegExp(e)
}
var Of = new Ua,
    Io = class a {
        static async contextMenuFixForLucide() {
            let e = await Zd(["colorDefault", "focused"], {
                cacheId: "core-contextmenu-classes"
            });
            P.injectStyle("bd-lucide-context-menu-fix", `
            :where(.${e.colorDefault}, ${e.colorDanger}).${e.focused}:not(.${e.checkboxContainer}) .lucide:not(.lucide-betterdiscord) path {
                fill: revert;
            }
        `)
        }
        static MAX_PATCH_ITERATIONS = 10;
        static patches = {
            named: {},
            regex: []
        };
        static handleRender(e) {
            let t = {
                type: e
            };
            return Of.patch(t, (o, r, n) => (i.isValidElement(r) && (r.props.navId ? a.runPatches(r.props.navId, r, o, n) : r.type && typeof r.type != "string" && a.patchRecursive(r)), r)), t.type
        }
        static initialize() {
            if (!Ao) return b.warn("ContextMenu~Patcher", "Startup wasn't successful, aborting initialization.");
            this.contextMenuFixForLucide(), C.Dispatcher.addInterceptor(e => {
                if (e.type === "CONTEXT_MENU_OPEN")
                    if (e.contextMenu.renderLazy) {
                        let t = e.contextMenu.renderLazy;
                        e.contextMenu.renderLazy = async () => {
                            let o = await t();
                            return this.handleRender(o)
                        }
                    } else e.contextMenu.render = this.handleRender(e.contextMenu.render)
            })
        }
        static patchRecursive(e, t = 0) {
            if (t >= this.MAX_PATCH_ITERATIONS) return;
            let o = ++t;
            Of.patch(e, (r, n, s) => {
                if (i.isValidElement(n)) {
                    let d = n.props;
                    if (d?.navId ?? d?.children?.props?.navId) a.runPatches(d.navId ?? d?.children?.props?.navId, n, r, s);
                    else {
                        let l = d?.children ? d.children : n;
                        l?.type && typeof l.type != "string" && a.patchRecursive(l, o)
                    }
                }
                return n
            })
        }
        static runPatches(e, t, o, r) {
            if (this.patches.named[e])
                for (let n of this.patches.named[e]) try {
                    n(t, o, r)
                } catch (s) {
                    b.error("ContextMenu~runPatches", `Could not run ${e} patch for`, n, s)
                }
            for (let n of this.patches.regex)
                if (n.regex.test(e))
                    for (let s of n.patches) try {
                        s(t, o, r)
                    } catch (d) {
                        b.error("ContextMenu~runPatches", `Could not run ${e} patch for`, s, d)
                    }
        }
        static patch(e, t) {
            if (typeof e == "string" && e.includes("*") && (e = Ff(e)), typeof e == "object") {
                let o = this.patches.regex.findIndex(r => r.regex.flags === e.flags && r.regex.source === e.source);
                o !== -1 ? this.patches.regex[o].patches.add(t) : this.patches.regex.push({
                    regex: e,
                    patches: new Set([t])
                });
                return
            }
            this.patches.named[e] ??= new Set, this.patches.named[e].add(t)
        }
        static unpatch(e, t) {
            if (typeof e == "string" && e.includes("*") && (e = Ff(e)), typeof e == "object") {
                let o = this.patches.regex.findIndex(r => r.regex.flags === e.flags && r.regex.source === e.source);
                o !== -1 && (this.patches.regex[o].patches.delete(t), this.patches.regex[o].patches.size === 0 && this.patches.regex.splice(o, 1));
                return
            }
            this.patches.named[e]?.delete(t), this.patches.named[e]?.size === 0 && delete this.patches.named[e]
        }
    },
    Br = class {
        patch(e, t) {
            return Io.patch(e, t), () => Io.unpatch(e, t)
        }
        unpatch(e, t) {
            Io.unpatch(e, t)
        }
        buildItem(e) {
            let {
                type: t
            } = e;
            if (t === "separator") return i.createElement(he.Separator);
            let o = he.Item;
            if (t === "submenu" ? e.children || (e.children = this.buildMenuChildren(e.render || e.items)) : t === "toggle" || t === "radio" ? (o = t === "toggle" ? he.CheckboxItem : he.RadioItem, e.active && (e.checked = e.active)) : t === "control" && (o = he.ControlItem), e.id || (e.id = `${e.label.replace(/^[^a-z]+|[^\w-]+/gi,"-")}`), e.danger && (e.color = "danger"), e.onClick && !e.action && (e.action = e.onClick), e.extended = !0, t === "toggle") {
                let [r, n] = i.useState(e.checked || !1), s = e.action;
                e.checked = r, e.action = function(d) {
                    s(d), d.defaultPrevented || n(!r)
                }
            }
            return i.createElement(o, e)
        }
        buildMenuChildren(e) {
            let t = r => r.type === "group" ? o(r) : this.buildItem(r),
                o = function(r) {
                    let n = r.items.map(t).filter(s => s);
                    return i.createElement(he.Group, null, n)
                };
            return e.map(t).filter(r => r)
        }
        buildMenu(e) {
            return t => i.createElement(he.Menu, t, this.buildMenuChildren(e))
        }
        open(e, t, o) {
            return ys.openContextMenu(e, function(r) {
                return i.createElement(t, Object.assign({}, r, {
                    onClose: ys.closeContextMenu
                }))
            }, o)
        }
        close() {
            ys.closeContextMenu()
        }
        Separator = he.Separator;
        CheckboxItem = he.CheckboxItem;
        RadioItem = he.RadioItem;
        ControlItem = he.ControlItem;
        Group = he.Group;
        Item = he.Item;
        Menu = he.Menu
    };
Object.freeze(Br);
Object.freeze(Br.prototype);
try {
    Io.initialize()
} catch (a) {
    b.error("ContextMenu~Patcher", "Fatal error:", a)
}
try {
    Object.defineProperty(document, "ownerDocument", {
        value: document
    })
} catch {}
var Jn = Br;
var Rf = new class {
        initialize() {
            this.patchModalSettings(), this.patchVersionInformation()
        }
        onDrawerToggle(e, t, o) {
            let r = Q.get("misc", "drawerStates") || {};
            r[e] || (r[e] = {}), r[e][t] = o, Q.set("misc", "drawerStates", r)
        }
        getDrawerState(e, t, o) {
            let r = Q.get("misc", "drawerStates") || {};
            return !r[e] || !r[e].hasOwnProperty(t) ? o : r[e][t]
        }
        onChange(e) {
            return (t, o, r) => {
                e(t, o, r), o === "customcss" && setTimeout(this.forceUpdate.bind(this), 250)
            }
        }
        buildSettingsPanel(e, t, o, r) {
            return i.createElement(gs, {
                id: e,
                title: t,
                groups: o,
                onChange: this.onChange(r).bind(this),
                onDrawerToggle: this.onDrawerToggle.bind(this),
                getDrawerState: this.getDrawerState.bind(this)
            })
        }
        getAddonPanel(e, t = {}) {
            return o => i.createElement(ds, Object.assign({}, {
                title: e,
                ...o
            }, t))
        }
        layoutBuilder;
        getLayoutBuilder() {
            if (this.layoutBuilder) return this.layoutBuilder;
            let e = C.Layout,
                t = {};
            for (let o in e) {
                if (!Object.hasOwn(e, o)) continue;
                let r = String(e[o]).match(/\..{1,3}\.(.+?),/);
                if (r) {
                    let n = r[1].toLowerCase().replace(/_([a-z])/gi, (s, d) => d.toUpperCase());
                    Object.defineProperty(t, n, {
                        value(s, ...d) {
                            return typeof s == "string" && (s = `betterdiscord_${s}_${n}`), e[o](s, ...d)
                        }
                    })
                }
            }
            return this.layoutBuilder = t
        }
        async patchModalSettings() {
            let e = await Oe(r => r?.key === "$Root", {
                searchExports: !0,
                searchDefault: !1
            });
            if (!e) return;
            this.patchSettingsSearch();
            let t = this.getLayoutBuilder(),
                o = t.section("betterdiscord", {
                    buildLayout: () => {
                        let r = [],
                            n = (d, l) => {
                                let u = [];
                                if ("render" in l) {
                                    let f = t.custom(d, {
                                            Component: () => i.createElement(l.render, null)
                                        }),
                                        m = t.category(d, {
                                            buildLayout: () => [f]
                                        });
                                    u = [t.panel(d, {
                                        buildLayout: () => [m],
                                        useTitle: l.header
                                    })]
                                }
                                let c = t.sidebarItem(d, {
                                    buildLayout: () => u,
                                    useTitle: l.title,
                                    icon: l.icon,
                                    usePredicate: () => !0,
                                    useSearchTerms: () => ["betterdiscord", "bd", ...l.useSearchTerms()]
                                });
                                typeof l.predicate == "function" && (c.usePredicate = () => !!l.predicate()), typeof l.useMenu == "function" && (c.useMenu = () => l.useMenu()), "onClick" in l && (c.onClick = l.onClick), r.push(c)
                            },
                            s = d => {
                                let l = {
                                        current: {}
                                    },
                                    u;

                                function c() {
                                    let [f, m] = i.useState();
                                    return u = yr()[1], i.createElement(i.Fragment, null, i.createElement("div", {
                                        className: "bd-settings-page-title",
                                        ref: h => {
                                            let g = h?.closest("div[data-wrap][data-full-width] > nav")?.parentElement;
                                            return g ? (g.classList.add("bd-settings-title-extend"), m(g)) : h?.parentElement?.parentElement ? (h.parentElement.parentElement.classList.add("bd-settings-title-extend"), m(h.parentElement.parentElement)) : m(h), () => m(void 0)
                                        }
                                    }, l.current.text), f && Ro.createPortal(i.createElement("div", {
                                        className: "bd-settings-page-title-children"
                                    }, l.current.children), f))
                                }
                                return {
                                    header: () => i.createElement(c, null),
                                    render: () => i.createElement(aa, {
                                        value: f => (l.current = f.props, u(), null)
                                    }, d)
                                }
                            };
                        for (let d of w.collections) {
                            let l = d.settings.map(u => [u.name, u.settings.map(c => c.name)]).flat(2);
                            n(d.id, {
                                ...s(this.buildSettingsPanel(d.id, d.name, d.settings, w.onSettingChange.bind(w, d.id))),
                                icon: Ga.Discord,
                                title: () => d.name,
                                useMenu: () => bv(d),
                                useSearchTerms: () => [d.name, ...l]
                            })
                        }
                        for (let d of w.panels.sort((l, u) => l.order > u.order ? 1 : -1)) {
                            d.type === "addon" && !d.element && (d.element = this.getAddonPanel(d.label, {
                                store: d.manager
                            }));
                            let l = d.icon ? zr(d.icon) : () => d.id;
                            if (d.id === "customcss") {
                                n("customcss_tab", {
                                    ...s(i.createElement(d.element)),
                                    icon: l,
                                    title: () => d.label,
                                    predicate: hv,
                                    useSearchTerms: () => [d.label]
                                }), n("customcss_clickable", {
                                    icon: l,
                                    title: () => d.label,
                                    predicate: Uf,
                                    onClick: () => Xe.open(),
                                    useSearchTerms: () => [d.label]
                                });
                                continue
                            }
                            n(d.id, {
                                ...s(i.createElement(d.element)),
                                icon: l,
                                title: () => d.label,
                                useMenu: d.type === "addon" ? () => yv(d.manager) : void 0,
                                useSearchTerms: () => [d.label, typeof d.searchable == "function" ? d.searchable().filter(u => typeof u == "string") : []].flat()
                            })
                        }
                        return r
                    },
                    useTitle: () => Object.assign(i.createElement(gv, null), {
                        toString: () => "BetterDiscord"
                    })
                });
            $.after("SettingsManager", e, "buildLayout", (r, n, s) => {
                let d = s.findIndex(l => l.key === "activity_section") + 1;
                d === -1 && (d = s.length), s.splice(d, 0, o)
            })
        }
        patchSettingsSearch() {
            let e = la(".PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]", {
                search: F.byStrings(".PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]")
            }, {
                cacheId: "core-settings-search"
            });
            $.after("SettingsManager", e, "search", (t, o, r) => {
                r = {
                    ...r
                };

                function n(s, d) {
                    r[`BETTERDISCORD_${s}`] = {
                        ...d,
                        ariaLabel: d.label,
                        section: "betterdiscord"
                    }
                }
                for (let s of w.collections) {
                    let d = s.settings.map(l => [l.name, l.settings.map(u => u.name)]).flat(2);
                    n(s.id, {
                        label: s.name,
                        searchableTitles: ["betterdiscord", s.name, ...d]
                    })
                }
                for (let s of w.panels.sort((d, l) => d.order > l.order ? 1 : -1)) {
                    let d = {
                        label: s.label,
                        searchableTitles: ["betterdiscord", s.label, typeof s.searchable == "function" ? s.searchable().filter(l => typeof l == "string") : []].flat()
                    };
                    if (s.id === "customcss") {
                        n("customcss_tab", d), n("customcss_clickable", d);
                        continue
                    }
                    n(s.id, d)
                }
                return Object.freeze(r)
            })
        }
        async patchVersionInformation() {
            let e = await fo(["copyValue", "RELEASE_CHANNEL"], {
                defaultExport: !1
            });
            e?.A && $.after("SettingsManager", e, "A", () => i.createElement(cs))
        }
        openSettingsPage(e) {
            mv?.openUserSettings?.(`betterdiscord_${e==="customcss"?"customcss_tab":e}_panel`, {
                section: e
            })
        }
        forceUpdate() {
            let e = C.ViewClasses?.standardSidebarView.split(" ")[0],
                t = document.querySelector(`.${e}`);
            if (!t) return;
            let o = ke(lt.getInternalInstance(t), r => r && r.getPredicateSections, {
                walkable: ["return", "stateNode"]
            });
            o && o.forceUpdate()
        }
    },
    $a = new Jn,
    mv = te(["openUserSettings", "openUserSettingsFromParsedUrl"], {
        firstId: 840065,
        cacheId: "core-settings-usersettings"
    }),
    Uf = () => {
        let a = ye(w, () => w.get("settings", "customcss", "openAction"));
        return ["detached", "external", "system"].includes(a)
    },
    hv = () => !Uf();

function gv() {
    let [a, e] = i.useState();
    return i.createElement(i.Fragment, null, i.createElement("div", {
        className: "bd-sidebar-header",
        ref: t => {
            let o = t;
            return t?.parentElement?.parentElement && (t.parentElement.parentElement.role === "group" ? o = t.parentElement : o = t.parentElement.parentElement), e(o), e
        }
    }, "BetterDiscord"), a && Ro.createPortal(i.createElement(C.Tooltip, {
        color: "primary",
        position: "top",
        text: p("Modals.changelog")
    }, t => i.createElement(v, {
        ...t,
        className: "bd-changelog-button",
        look: v.Looks.BLANK,
        color: v.Colors.TRANSPARENT,
        size: v.Sizes.NONE,
        onClick: () => z.showChangelogModal(nn)
    }, i.createElement(Go, {
        className: "bd-icon",
        size: "16px"
    }))), a))
}
var aa = i.createContext(a => a);

function jf(a) {
    $a.close(), Rf.openSettingsPage(a)
}

function bv(a) {
    let e = ye(w, () => a.settings.map(t => ({
        id: t.id,
        name: t.name,
        settings: t.settings.filter(o => o.type === "switch" && !o.hidden).map(o => ({
            id: o.id,
            label: o.name,
            disabled: o.disabled,
            checked: w.get(a.id, t.id, o.id),
            action: () => w.set(a.id, t.id, o.id, !w.get(a.id, t.id, o.id))
        }))
    })), []);
    return i.createElement(i.Fragment, null, e.map(t => i.createElement($a.Item, {
        label: t.name,
        id: t.id,
        action: () => jf(a.id),
        key: `bd.${a.id}.${t.id}`
    }, t.settings.map(o => i.createElement($a.CheckboxItem, {
        ...o,
        key: `bd.${a.id}.${t.id}.${o.id}`
    })))))
}

function yv(a) {
    let e = ye(a, () => a.addonList.map(r => r.name || r.getName?.()).sort((r, n) => r.toLowerCase().localeCompare(n.toLowerCase())).map(r => [r, a.getAddon(r), a.isEnabled(r)]), [], !0),
        t = ye(w, () => w.get("settings", "store", "bdAddonStore"), []),
        o = i.useMemo(() => e.map(([r, n, s]) => i.createElement($a.CheckboxItem, {
            label: r,
            id: r,
            checked: s,
            key: `bd.${a.prefix}.${r}`,
            disabled: n?.partial,
            action: d => {
                if (!d.shiftKey) {
                    a.toggleAddon(r);
                    return
                }
                if (!a.isEnabled(r)) {
                    q.warning(p("Addons.isDisabled", {
                        name: r
                    }));
                    return
                }
                let l = n.instance && typeof n.instance.getSettingsPanel == "function",
                    u = l && n.instance.getSettingsPanel.bind(n.instance);
                l ? z.showAddonSettingsModal(r, u()) : q.warning(p("Addons.noSettings", {
                    name: r
                }))
            }
        })), [e, a]);
    return i.createElement(i.Fragment, null, i.createElement($a.Group, {
        key: `bd.${a.prefix}.installed`
    }, o), t && i.createElement($a.Group, {
        key: `bd.${a.prefix}.store`
    }, i.createElement($a.Item, {
        label: p("Addons.openStore", {
            context: a.prefix
        }),
        id: `${a.prefix}-store`,
        action: () => {
            jf(a.prefix + "s"), P.onAdded(":where(.bd-store-card, .bd-addon-title > :nth-child(3))", r => r?.click())
        }
    })))
}
var To = Rf;
He();
I();
Fe();
_e();
V();
_();
I();
V();
Fe();
me();
qi();
oe();
var {
    useState: xv,
    useCallback: Za,
    useEffect: vv,
    forwardRef: wv,
    useImperativeHandle: kv,
    useRef: Cv
} = i, xs = wv(function({
    css: e,
    openNative: t,
    update: o,
    save: r,
    onChange: n,
    readOnly: s = !1,
    id: d = "bd-customcss-editor",
    openDetached: l = !1
}, u) {
    let c = Cv(null),
        [f, m] = xv(!1),
        h = Za(A => {
            c.current.value = A
        }, [c]);
    kv(u, () => ({
        resize() {
            c.current.resize()
        },
        get value() {
            return c.current.getValue()
        },
        set value(A) {
            c.current.setValue(A)
        },
        get hasUnsavedChanges() {
            return f
        }
    }), [f]), vv(() => (N.on("customcss-updated", h), () => N.off("customcss-updated", h)), [h]);
    let g = Za(A => w.set("settings", "customcss", "liveUpdate", A), []),
        k = Za((A, E) => o?.(E), [o]),
        L = Za(() => t?.(), [t]),
        R = Za((A, E) => l?.(E), [l]),
        T = Za(A => {
            n?.(A), m(!0)
        }, [n]),
        H = Za((A, E) => {
            r?.(E), m(!1)
        }, [r]);
    return i.createElement(Pn, {
        ref: c,
        readOnly: s,
        id: d,
        onChange: T,
        controls: [{
            label: i.createElement(st, {
                size: "18px"
            }),
            tooltip: p("CustomCSS.update"),
            onClick: k
        }, {
            label: i.createElement(Da, {
                size: "18px"
            }),
            tooltip: p("CustomCSS.save"),
            onClick: H
        }, {
            label: i.createElement(Vt, {
                size: "18px"
            }),
            tooltip: p("CustomCSS.openNative"),
            onClick: L
        }, {
            label: p("Collections.settings.customcss.liveUpdate.name"),
            type: "boolean",
            onChange: g,
            checked: w.get("settings", "customcss", "liveUpdate"),
            side: "right"
        }, l && {
            label: i.createElement(Wo, {
                size: "18px"
            }),
            tooltip: p("CustomCSS.openDetached"),
            onClick: R,
            side: "right"
        }].filter(A => A),
        value: e
    })
});
Bn();
pt();
Ge();
oe();
pe();
var Sv = ht(["closeUserSettings"]),
    Lv = te(["updateAccount"], {
        firstId: 252452,
        cacheId: "core-customcss-usersettings"
    }),
    Xe = new class extends Y {
        get name() {
            return "Custom CSS"
        }
        get category() {
            return "customcss"
        }
        get id() {
            return "customcss"
        }
        get startDetached() {
            return w.get(this.collection, this.category, "openAction") == "detached"
        }
        get nativeOpen() {
            return w.get(this.collection, this.category, "openAction") == "system"
        }
        get startAsExternal() {
            return w.get(this.collection, this.category, "openAction") == "external"
        }
        get file() {
            return vs.default.resolve(W.get("channelPath"), "custom.css")
        }
        savedCss;insertedCss;isDetached;watcher;constructor() {
            super(), this.savedCss = "", this.insertedCss = "", this.isDetached = !1
        }
        Page = () => [i.useContext(aa)(i.createElement(kt, {
            text: p("CustomCSS.editorTitle")
        })), i.createElement(xs, {
            css: this.savedCss,
            save: this.saveCSS.bind(this),
            update: this.insertCSS.bind(this),
            openNative: this.openNative.bind(this),
            openDetached: this.openDetached.bind(this),
            onChange: this.onChange.bind(this)
        })];async enabled() {
            w.registerPanel(this.id, p("Panels.customcss"), {
                order: 2,
                icon: Vt,
                element: () => i.createElement(this.Page),
                onClick: e => {
                    if (this.isDetached) return;
                    if (this.nativeOpen) return this.openNative();
                    if (this.startDetached) return this.openDetached(this.savedCss);
                    if (this.startAsExternal) return this.openExternal();
                    let t = ke(e._reactInternals, o => o && o.onSetSection, {
                        walkable: ["child", "memoizedProps", "props", "children"]
                    });
                    t && t.onSetSection && t.onSetSection(this.id)
                }
            }), this.loadCSS(), this.insertCSS(this.savedCss), this.watchContent()
        }
        async disabled() {
            w.removePanel(this.id), this.unwatchContent(), this.insertCSS("")
        }
        watchContent() {
            if (this.watcher) return this.error("Already watching content.");
            if (!oa.default.existsSync(this.file)) try {
                oa.default.mkdirSync(vs.default.dirname(this.file), {
                    recursive: !0
                }), oa.default.writeFileSync(this.file, "")
            } catch (t) {
                return this.error("Could not create custom.css file.", t)
            }
            let e = {};
            this.log("Starting to watch content."), this.watcher = oa.default.watch(this.file, {
                persistent: !1
            }, async (t, o) => {
                if (!t || !o) return;
                await new Promise(n => setTimeout(n, 50));
                try {
                    oa.default.statSync(this.file)
                } catch (n) {
                    if (n.code !== "ENOENT") return;
                    delete e[o], this.saveCSS("")
                }
                let r = oa.default.statSync(this.file);
                if (!(!r || !r.mtimeMs) && typeof r.mtimeMs == "number" && e[o] != r.mtimeMs && (e[o] = r.mtimeMs, t == "change")) {
                    let n = this.savedCss;
                    if (this.loadCSS(), n === this.savedCss) return;
                    this.insertCSS(this.savedCss), N.emit("customcss-updated", this.savedCss)
                }
            })
        }
        unwatchContent() {
            if (!this.watcher) return this.error("Was not watching content.");
            this.watcher.close(), delete this.watcher, this.log("No longer watching content.")
        }
        onChange(e) {
            w.get("settings", "customcss", "liveUpdate") && (this.insertCSS(e), this.saveCSS(e))
        }
        loadCSS() {
            try {
                this.savedCss = oa.default.readFileSync(this.file).toString()
            } catch {
                this.savedCss = ""
            }
        }
        insertCSS(e) {
            typeof e > "u" ? e = this.insertedCss : this.insertedCss = e, P.updateCustomCSS(e)
        }
        saveCSS(e) {
            typeof e < "u" && (this.savedCss = e), oa.default.writeFileSync(this.file, this.savedCss)
        }
        open() {
            if (!this.isDetached) return this.nativeOpen ? this.openNative() : this.startDetached ? this.openDetached(this.savedCss) : this.startAsExternal ? this.openExternal() : To.openSettingsPage(this.id)
        }
        openNative() {
            qf.default.shell.openExternal(`file://${this.file}`)
        }
        openDetached(e) {
            let t = i.createRef(),
                o = i.createElement(xs, {
                    id: "bd-floating-editor",
                    ref: t,
                    css: e,
                    save: this.saveCSS.bind(this),
                    update: this.insertCSS.bind(this),
                    openNative: this.openNative.bind(this),
                    onChange: io(this.onChange.bind(this), 500)
                });
            Qt.open({
                onClose: () => {
                    this.isDetached = !1
                },
                onResize: () => {
                    !t || !t.current || !t.current.resize || t.current.resize()
                },
                title: p("CustomCSS.editorTitle"),
                id: "floating-editor-window",
                height: 470,
                width: 410,
                center: !0,
                resizable: !0,
                children: o,
                confirmClose: () => !t || !t.current || w.get("settings", "customcss", "liveUpdate") ? !1 : t.current.hasUnsavedChanges,
                confirmationText: p("CustomCSS.confirmationText")
            }), this.isDetached = !0, !Sv?.() && (Lv?.close(), C.Dispatcher?.dispatch({
                type: "LAYER_POP"
            }))
        }
        openExternal() {
            M.editor.open("custom-css")
        }
    };
_();
var Hf = new class extends Y {
    get name() {
        return "VoiceDisconnect"
    }
    get category() {
        return "general"
    }
    get id() {
        return "voiceDisconnect"
    }
    constructor() {
        super(), this.beforeUnload = this.beforeUnload.bind(this)
    }
    async enabled() {
        window.addEventListener("beforeunload", this.beforeUnload)
    }
    async disabled() {
        window.removeEventListener("beforeunload", this.beforeUnload)
    }
    beforeUnload() {
        C.ChannelActions?.selectVoiceChannel(null, null)
    }
};
V();
ze();
ve();
var Wf = new class extends Y {
    get name() {
        return "DisableMediaKeys"
    }
    get category() {
        return "general"
    }
    get id() {
        return "mediaKeys"
    }
    async enabled() {
        this.showModal()
    }
    async disabled() {
        this.showModal()
    }
    showModal() {
        this.initialized && z.showConfirmationModal(p("Modals.additionalInfo"), p("Modals.restartPrompt"), {
            confirmText: p("Modals.restartNow"),
            cancelText: p("Modals.restartLater"),
            danger: !0,
            onConfirm: () => J.relaunch()
        })
    }
};
pe();
pt();
I();
var _f = i.createContext({
        first: !1,
        last: !1
    }),
    Vf = new class extends Y {
        get name() {
            return "ThemeAttributes"
        }
        get category() {
            return "general"
        }
        get id() {
            return "themeAttributes"
        }
        async patchMessage() {
            let e = await Oe(t => String(t.type).includes("Message must not be a thread starter message"), {
                cacheId: "core-themeattributes-MessageComponent"
            });
            this.after(e, "type", (t, [o], r) => {
                let {
                    first: n,
                    last: s
                } = i.useContext(_f), d = ke(r, c => c?.className?.includes("messageListItem"));
                if (!d) return;
                let l = ke(o, c => c?.username, {
                        walkable: ["message", "author"]
                    }),
                    u = l?.id;
                u && (d["data-author-id"] = u, d["data-author-username"] = l?.username, d["data-is-self"] = l.id === Pe.UserStore?.getCurrentUser?.()?.id, d["data-is-webhook"] = l.discriminator === "0000" && l.bot, d["data-author-is-deleted"] = l.id === "456226577798135808", d["data-author-is-bot"] = l.bot && l.discriminator !== "0000", d["data-message-group-start"] = n, d["data-message-group-end"] = s, d["data-message-is-reply"] = o?.message?.messageReference?.type === 0, d["data-message-is-forward"] = o?.message?.messageReference?.type === 1)
            })
        }
        async patchMessageHook() {
            let e = await fo(["SUMMARIES_UNREAD_BAR_VIEWED,{num_unread_summaries"], {
                cacheId: "core-themeattributes-messageHook",
                defaultExport: !1
            });
            this.after(e, "A", (t, o, r) => {
                if (!Array.isArray(r.channelStreamMarkup)) return;
                let n = [];
                for (let s = 0; s < r.channelStreamMarkup.length; s++) {
                    let d = r.channelStreamMarkup[s];
                    i.isValidElement(d) && typeof d.props.groupId == "string" && n.push([s, d])
                }
                if (n.length)
                    for (let s = 0; s < n.length; s++) {
                        let [d, l] = n[s], u = n[s + 1], c = n[s - 1], f = !0;
                        typeof c == "object" && (f = c[1].props.groupId !== l.props.groupId);
                        let m = !1;
                        u ? l.props.groupId !== u[1].props.groupId && (m = !0) : m = !0, r.channelStreamMarkup[d] = i.createElement(_f, {
                            value: {
                                last: m,
                                first: f
                            }
                        }, r.channelStreamMarkup[d])
                    }
            })
        }
        async patchVoiceUserComponent() {
            let e = await fo(["userNameClassName:", "avatarContainerClass:"], {
                cacheId: "core-themeattributes-VoiceUserComponent",
                defaultExport: !1
            });
            this.after(e, "Ay", (t, [{
                speaking: o
            }], r) => {
                let n = ke(r, s => s?.attributes, {
                    walkable: ["ref", "current"]
                });
                n && (n.dataset.speaking = o)
            })
        }
        async patchTabBarComponent() {
            let e = await fo(["({getFocusableElements:()=>{let"], {
                searchExports: !0,
                firstId: 158954,
                cacheId: "core-themeattributes-TabBar"
            });
            this.after(e?.Item?.prototype, "render", (t, o, r) => {
                r.props["data-tab-id"] = t?.props?.id
            })
        }
        async patchUserProfileComponent() {
            let e = await Oe(t => t.render?.toString?.().includes("pendingThemeColors"), {
                firstId: 946356,
                cacheId: "core-themeattributes-UserProfile"
            });
            this.after(e, "render", (t, [{
                user: o
            }], r) => {
                r.props["data-member-id"] = o.id, r.props["data-is-self"] = !!o.email
            })
        }
        async patchChatAvatar() {
            let e = await Oe(t => String(t.type).includes("showCommunicationDisabledStyles"), {
                cacheId: "core-themeattributes-ChatAvatar"
            });
            this.after(e, "type", (t, o, r) => {
                if (r.props.avatar) {
                    let n = ke(r.props.avatar, d => typeof d?.props?.children == "function");
                    if (!n || n.props.__bdPatched) return;
                    let s = n.props.children;
                    Object.assign(n.props, {
                        children(...d) {
                            let l = s.apply(this, d),
                                u = ke(l, c => c?.type === "img" && c?.props?.className?.includes("avatar") && c.props.ref, {
                                    walkable: ["props", "children"]
                                });
                            if (!u?.props?.src || u.props.src.startsWith("data:")) return l;
                            u.props.style ??= {};
                            for (let c of [128, 256, 512, 1024, 2048, 4096]) u.props.style[`--avatar-url-${c}`] = `url(${u.props.src.replace(/\d+$/,String(c))})`;
                            return l
                        },
                        __bdPatched: !0
                    })
                }
            })
        }
        async patchAvatars() {
            let e = await el("AvatarImg", {
                searchExports: !0,
                cacheId: "core-themeattributes-AvatarImg"
            });
            this.after(e, "render", (t, o, r) => {
                let n = ke(r, s => s?.type === "img" && s?.props?.className?.includes("avatar"), {
                    walkable: ["props", "children"]
                });
                if (!(!n?.props?.src || n.props.src.startsWith("data:"))) {
                    n.props.style ??= {};
                    for (let s of [128, 256, 512, 1024, 2048, 4096]) n.props.style[`--avatar-url-${s}`] = `url(${n.props.src.replace(/\d+$/,String(s))})`
                }
            })
        }
        async enabled() {
            this.patchMessage(), this.patchMessageHook(), this.patchTabBarComponent(), this.patchUserProfileComponent(), this.patchVoiceUserComponent(), this.patchChatAvatar(), this.patchAvatars()
        }
        async disabled() {
            this.unpatchAll()
        }
    };
V();
_();
tt();
Bt();
var ws = a => {
    let e = a === "plugin" ? le : Ee;
    return {
        id: `${a}s`,
        name: `${a}s`,
        description: `Enable, disable, or view your ${a}s`,
        options: [{
            type: $e.STRING,
            name: "action",
            description: "Action to take",
            required: !0,
            choices: [{
                name: "Enable",
                value: "enable"
            }, {
                name: "Disable",
                value: "disable"
            }, {
                name: "Show Info",
                value: "info"
            }, {
                name: "Share In Chat",
                value: "share"
            }]
        }, {
            type: $e.STRING,
            name: "name",
            description: `Name of the ${a}`,
            required: !0,
            get choices() {
                return e.addonList.map(t => ({
                    name: t.name,
                    value: t.id
                }))
            }
        }],
        execute: async (t, {
            channel: o
        }) => {
            let r = t.find(l => l.name === "action").value,
                n = t.find(l => l.name === "name").value,
                s = e.getAddon(n),
                d = e.isEnabled(s.id);
            if (r === "enable") return d ? {
                content: `${s.name} is already enabled!`
            } : e.enableAddon(s.id) ? {
                content: p("Addons.couldNotEnable", {
                    name: s.id
                })
            } : {
                content: p("Addons.enabled", {
                    name: s.id
                })
            };
            if (r === "disable") return d ? e.disableAddon(s.id) ? {
                content: p("Addons.couldNotDisable", {
                    name: s.id
                })
            } : (p("Addons.disabled"), {
                content: p("Addons.disabled", {
                    name: s.id
                })
            }) : {
                content: `${s.name} is already disabled!`
            };
            if (r === "info") {
                let l = [{
                    name: "Author",
                    value: s.authorLink ? `[${s.author}](${s.authorLink})` : s.author,
                    inline: !0
                }, {
                    name: "Version",
                    value: `v${s.version}`,
                    inline: !0
                }, {
                    name: "Enabled",
                    value: d ? "✅" : "❌",
                    inline: !0
                }];
                return s.source && l.push({
                    name: "Source",
                    value: `[GitHub](${s.source})`,
                    inline: !0
                }), s.invite && l.push({
                    name: "Support",
                    value: `[Discord](https://discord.gg/${s.invite})`,
                    inline: !0
                }), s.donate && l.push({
                    name: "Donate",
                    value: `[Link](${s.donate})`,
                    inline: !0
                }), {
                    embeds: [{
                        color: 4096741,
                        title: s.name,
                        description: s.description,
                        fields: l,
                        footer: {
                            text: "Last updated"
                        },
                        timestamp: new Date(s.modified).toISOString()
                    }]
                }
            }
            r === "share" && C.MessageUtils.sendMessage(o.id, {
                content: `<betterdiscord://store/${encodeURIComponent(s.name)}>`
            }, void 0, {})
        }
    }
};
_();
var Gf = {
    id: "debug",
    name: "debug",
    description: "Gets debug information useful for support",
    options: [{
        type: $e.BOOLEAN,
        name: "send",
        description: "Should the info be sent in public chat?",
        required: !0
    }],
    execute: async (a, {
        channel: e
    }) => {
        let t = a.find(s => s.name === "send").value,
            o = Ir(),
            r = `\`\`\`md
${o}
\`\`\``;
        if (!t) return {
            content: r
        };
        let n = new File([o], "debug.md", {
            type: "text/markdown"
        });
        return C.promptToUpload ? setTimeout(() => C.promptToUpload?.([n], e, 0), 1) : {
            content: "Unable to attach your debug info as a file. Please report this issue to BetterDiscord's [GitHub](https://github.com/BetterDiscord/BetterDiscord) if no one else has already done so!"
        }
    }
};
ze();
var Kf = {
    id: "restart",
    name: "restart",
    description: "Restart Discord with or without BetterDiscord",
    options: [{
        type: $e.BOOLEAN,
        name: "vanilla",
        description: "Should Discord be relaunched without BetterDiscord?",
        required: !0
    }],
    execute: async a => {
        let e = a.find(t => t.name === "vanilla").value;
        J.relaunch(e ? ["--vanilla"] : [])
    }
};
ve();
var $f = {
    id: "support",
    name: "support",
    description: "Get help and support for BetterDiscord",
    options: [],
    execute: async () => {
        z.showGuildJoinModal("rC8b2H6SCt")
    }
};
_();
me();
var Zf = {
    id: "customcss",
    name: "customcss",
    description: "Enable, disable, open, or share your CustomCSS",
    options: [{
        type: $e.STRING,
        name: "action",
        description: "Action to take",
        required: !0,
        choices: [{
            name: "Enable",
            value: "enable"
        }, {
            name: "Disable",
            value: "disable"
        }, {
            name: "Open Editor",
            value: "open"
        }, {
            name: "Share In Chat",
            value: "share"
        }]
    }],
    execute: async (a, {
        channel: e
    }) => {
        let t = a.find(r => r.name === "action").value,
            o = w.get("customcss", "customcss");
        if (t === "enable") return o ? {
            content: "CustomCSS is already enabled!"
        } : (w.set("customcss", "customcss", !0), {
            content: "CustomCSS has been enabled!"
        });
        if (t === "disable") return o ? (w.set("customcss", "customcss", !1), {
            content: "CustomCSS has been disabled!"
        }) : {
            content: "CustomCSS is already disabled!"
        };
        if (t === "open") {
            if (!o) return {
                content: "You cannot open CustomCSS if it's disabled!"
            };
            Xe.open()
        }
        if (t === "share") {
            let r = Xe.savedCss,
                n = new File([r], "custom.css", {
                    type: "text/css"
                });
            return C.promptToUpload ? setTimeout(() => C.promptToUpload?.([n], e, 0), 1) : {
                content: "Unable to attach your Custom CSS as a file. Please report this issue to BetterDiscord's [GitHub](https://github.com/BetterDiscord/BetterDiscord) if no one else has already done so!"
            }
        }
    }
};
me();
var Xf = {
    id: "settings",
    name: "settings",
    description: "Enable or disable your settings",
    options: [{
        type: $e.STRING,
        name: "action",
        description: "Action to take",
        required: !0,
        choices: [{
            name: "Enable",
            value: "enable"
        }, {
            name: "Disable",
            value: "disable"
        }]
    }, {
        type: $e.STRING,
        name: "setting",
        description: "Which setting to modify?",
        required: !0,
        get choices() {
            return w.collections[0].settings.map(a => a.settings.filter(t => t.type === "switch").map(t => ({
                name: t.name,
                value: `${a.id}-${t.id}-${t.name}`
            }))).flat()
        }
    }],
    execute: async a => {
        let e = a.find(d => d.name === "action").value,
            t = a.find(d => d.name === "setting").value.split("-"),
            o = t[0],
            r = t[1],
            n = t[2],
            s = w.get(o, r);
        if (e === "enable") return s ? {
            content: `${n} is already enabled!`
        } : (w.set(o, r, !0), {
            content: `${n} has been enabled!`
        });
        if (e === "disable") return s ? (w.set(o, r, !1), {
            content: `${n} has been disabled!`
        }) : {
            content: `${n} is already disabled!`
        }
    }
};
var Jf = new class extends Y {
    get name() {
        return "DefaultCommands"
    }
    get category() {
        return "general"
    }
    get id() {
        return "defaultCommands"
    }
    async initialize() {
        this.addCommands(ws("plugin"), ws("theme"), Gf, Kf, $f, Zf, Xf)
    }
};
I();
me();
I();
var {
    useState: ks,
    useEffect: Iv
} = i;

function Nr({
    id: a,
    original: e
}) {
    let [t, o] = ks(() => Ze.getAddon(a)), [r, n] = ks(() => !0), [s, d] = ks({});
    return Iv(() => (o(Ze.getAddon(a)), n(Ze.loading), Ze.addChangeListener(() => {
        o(Ze.getAddon(a)), n(Ze.loading)
    })), [a]), t ? i.createElement(wr.Provider, {
        value: [l => s[l] === !0, (l, u) => d(c => ({
            ...c,
            [l]: u ?? !c[l]
        }))]
    }, i.createElement(kr, {
        addon: t,
        isEmbed: !0
    })) : r ? i.createElement("div", {
        className: "bd-addon-store-card-embed bd-addon-store-card-loading"
    }, i.createElement(at, {
        type: at.Type.SPINNING_CIRCLE
    })) : e
}
ma();
Ge();
pe();
pt();
_();
var Yf, Qf = 10,
    Av = /^<betterdiscord:\/\/(?:(?:theme|plugin|addon)s?|store)\/([^/\s]+)\/?>/i,
    Tv = /^betterdiscord:\/\/(?:(?:theme|plugin|addon)s?|store)\/([^/]+)\/?$/i,
    ep = new RegExp([Av.source.slice(1), /https?:\/\/betterdiscord\.app\/(?:theme|plugin)(?:\/([^/\s]+)\/?|\?id=(\d+))/.source].join("|"), "gi"),
    Ev = /(`+)([\s\S]*?[^`])\1(?!`)/g;

function Mv(a, e = 1 / 0) {
    ep.lastIndex = 0;
    let t = [];
    if (e <= 0) return t;
    let o = Array.from(a.matchAll(Ev), n => [n.index, n.index + n[0].length]),
        r;
    for (; r = ep.exec(a);) {
        if (r[0][0] === "h" && a[r.index - 1] === "<") continue;
        let n = r.index + r.length,
            s = !1;
        for (let [d, l] of o)
            if (d < r.index && n < l) {
                s = !0;
                break
            } if (!s && (t.push({
                id: r[1] || r[2] || r[3],
                match: r[0],
                index: r.index
            }), t.length >= e)) break
    }
    return t
}
var tp = new class extends Y {
    constructor() {
        super(), w.on(this.collection, this.category, "addonEmbeds", () => this.forceUpdateChat())
    }
    async initialize() {
        return M.addProtocolListener(e => {
            if (!w.get(this.collection, this.category, this.id)) return;
            let t = e.match(Tv);
            t && Ze.requestAddon(decodeURIComponent(t[1])).then(o => o.download())
        }), super.initialize()
    }
    get name() {
        return "AddonStore"
    }
    get category() {
        return "store"
    }
    get id() {
        return "bdAddonStore"
    }
    async enabled() {
        this.patchEmbeds(), this.patchLinkOpener(), this.extractDiscordProtocolList().push("betterdiscord:")
    }
    forceUpdateChat() {
        for (let e of document.querySelectorAll("[id^=chat-messages-]")) {
            let t = lt.getInternalInstance(e),
                o = ke(t, r => typeof r?.memoizedProps?.onMouseLeave == "function", {
                    walkable: ["child"]
                });
            typeof o < "u" && (o.memoizedProps.onMouseLeave(), o.memoizedProps.onMouseMove());
            for (let r of e.querySelectorAll('[id^="message-accessories-"] [id^="message-accessories-"]')) lt.getOwnerInstance(r).forceUpdate()
        }
    }
    linkOpener;
    async patchLinkOpener() {
        let [e, t] = this.linkOpener ??= Mt(o => String(o).includes(".trackAnnouncementMessageLinkClicked("), {
            target: await Yd([".trackAnnouncementMessageLinkClicked("])
        });
        this.before(e, t, (o, r) => {
            if (r[0].href) {
                let n = new URL(r[0].href, location.href),
                    s = Number(n.searchParams.get("id"));
                n.host === re.hostname && n.pathname.toLowerCase() === "/download" && !isNaN(s) && ((r[1] || window.event)?.preventDefault?.(), r[0].href = `betterdiscord://store/${s}`, r[0].shouldConfirm = !0)
            }
        })
    }
    protocolList;
    extractDiscordProtocolList() {
        if (this.protocolList) return this.protocolList;
        let e = [],
            t = C.LinkParser,
            o = Array.prototype.includes;
        return Array.prototype.includes = function(...r) {
            return o.call(this, "discord:") ? (Array.prototype.includes = o, e = this, !1) : o.apply(this, r)
        }, t.parse(["", "link", "betterdiscord://foo/bar"]), this.protocolList = e
    }
    async patchEmbeds() {
        Yf ??= await Oe(F.byPrototypeKeys(["renderEmbeds"]), {
            searchExports: !0
        }), this.after(Yf.prototype, "renderEmbeds", (e, [t], o) => {
            if (!w.get(this.collection, this.category, "addonEmbeds")) return o;
            o ??= [];
            let r = re.getReleaseChannelType(t.channel_id);
            if (!r && t.messageReference?.type === 1 && !t.messageSnapshots.length && (r = re.getReleaseChannelType(t.messageReference.channel_id)), r) {
                let s = t.embeds[0].rawDescription?.split?.(`
`)?.at?.(-1)?.match?.(/\?id=(\d+)/);
                return s ? i.createElement(ce, null, i.createElement(Nr, {
                    id: s[1],
                    original: o
                })) : o
            }
            let n = Mv(t.content, Qf);
            if (n.length) {
                let s = [...o];
                for (let d = 0; d < n.length; d++) {
                    let {
                        match: l,
                        id: u
                    } = n[d], c = s.length < Qf;
                    for (let f = 0; f < o.length; f++)
                        if (s[f]?.props?.children?.props?.embed?.url === l) {
                            c = !1, s[f] = i.createElement(ce, {
                                key: d
                            }, i.createElement(Nr, {
                                id: u,
                                original: s[f]
                            }));
                            break
                        } c && s.push(i.createElement(ce, {
                        key: d
                    }, i.createElement(Nr, {
                        id: u
                    })))
                }
                return s
            }
            return o
        }), this.forceUpdateChat()
    }
    async disabled() {
        let e = this.extractDiscordProtocolList(),
            t = e.indexOf("betterdiscord:");
        t !== -1 && e.splice(t, 1), this.unpatchAll(), this.forceUpdateChat()
    }
};
xe();
I();
ee();
_();
V();
me();
et();
tt();
ze();
ve();
pe();
I();
xe();
me();
Ot();
var ra = new class extends we {
    notificationsArray = [];
    setNotifications(e) {
        this.notificationsArray = e, this.emitChange()
    }
    removeNotification(e) {
        this.notificationsArray = this.notificationsArray.filter(t => t.id !== e), this.emitChange()
    }
    addNotification(e) {
        this.notificationsArray.push(e), this.emitChange()
    }
    get notifications() {
        return this.notificationsArray
    }
};
dt();
oe();
_e();
_();
Yt();
zi();
ma();
var Cs = C.ReactSpring,
    Dv = ({
        type: a
    }) => {
        switch (a) {
            case "warning":
                return i.createElement(Qe, {
                    color: "var(--status-warning)",
                    size: "18px"
                });
            case "error":
                return i.createElement(Pt, {
                    color: "var(--status-danger)",
                    size: "18px"
                });
            case "info":
                return i.createElement(je, {
                    color: "#3B82F6",
                    size: "18px"
                });
            case "success":
                return i.createElement(zt, {
                    color: "var(--status-positive)",
                    size: "18px"
                });
            default:
                return null
        }
    },
    Ss = class a {
        static container = null;
        constructor() {
            let e = "bd-notifications-container",
                t = document.getElementById(e);
            t || (t = document.createElement("div"), t.id = e, P.bdBody.appendChild(t)), a.container = t, Ro.createRoot(t).render(i.createElement(Pv, null))
        }
        show(e) {
            let t = ra.notifications.find(r => r.id === e.id);
            if (!t) {
                let r = Symbol("kSelf");
                t = {
                    ...e,
                    [r]: !0
                }, this.upsertNotification(t)
            }
            let o = Reflect.ownKeys(t).at(-1);
            return {
                id: t.id,
                isVisible: () => ra.notifications.findIndex(n => n[o]) !== -1,
                close: () => {
                    ra.notifications.findIndex(s => s[o]) !== -1 && this.hide(t.id)
                }
            }
        }
        upsertNotification(e) {
            ra.addNotification(e)
        }
        hide(e) {
            let t = ra.notifications,
                o = t.findIndex(r => r.id === e);
            o !== -1 && ra.removeNotification(t[o].id)
        }
    },
    Pv = () => {
        let a = ye(ra, () => ra.notifications.concat(), [], !0),
            e = ye(w, () => w.get("settings", "general", "notificationPosition"));
        return i.createElement("div", {
            id: "bd-notifications-root",
            className: `bd-notification-${e}`
        }, a.map(t => i.createElement(zv, {
            key: t.id,
            notification: t
        })))
    },
    ap = new Ss,
    zv = ({
        notification: a
    }) => {
        let {
            id: e,
            title: t = "",
            content: o = "",
            type: r = "info",
            duration: n = 5e3,
            actions: s = []
        } = a, [d, l] = i.useState(!1), u = Cs.useSpring({
            width: "0%",
            from: {
                width: "100%"
            },
            config: {
                duration: n
            },
            pause: d,
            onChange: ({
                width: f
            }) => {
                f === "0%" && c()
            }
        }), c = () => {
            ap.hide(e), a.onClose?.()
        };
        return i.createElement(Cs.animated.div, {
            onMouseEnter: () => l(!0),
            onMouseLeave: () => l(!1),
            className: `bd-notification bd-notification-${r}`
        }, i.createElement("div", {
            className: "bd-notification-content"
        }, i.createElement("div", {
            className: "bd-notification-header"
        }, i.createElement("div", {
            className: "bd-notification-icon"
        }, i.createElement("div", {
            className: "bd-notification-icon"
        }, a.icon ? i.createElement(ce, null, i.createElement(a.icon, null)) : i.createElement(Dv, {
            type: r
        }))), t && i.createElement("div", {
            className: "bd-notification-title"
        }, t)), o && i.createElement("div", {
            className: "bd-notification-body"
        }, i.createElement("div", {
            className: "bd-notification-content-text"
        }, o && i.createElement("div", {
            className: "bd-notification-body"
        }, i.createElement("div", {
            className: "bd-notification-content-text"
        }, typeof o == "string" ? i.createElement(pr, null, o) : i.createElement(ce, null, o)))))), s.length > 0 && i.createElement("div", {
            className: "bd-notification-footer"
        }, s.map((f, m) => {
            let h = za[f?.color?.toUpperCase()] ? `bd-button-color-${f?.color}` : v.Colors.PRIMARY,
                g = Sn[f?.look?.toUpperCase()] ? `bd-button-${f?.look}` : v.Looks.FILLED;
            return i.createElement(v, {
                ...f,
                key: m,
                color: h,
                look: g,
                onClick: k => {
                    k.stopPropagation(), f.onClick?.(k), !f.dontClose && !(f.dontCloseOnActionIfHoldingShiftKey && k.shiftKey) && c()
                },
                className: "bd-notification-action"
            }, f?.label)
        })), i.createElement(D, {
            onClick: f => {
                f.stopPropagation(), c()
            },
            className: "bd-notification-close"
        }, "✕"), i.createElement(Cs.animated.div, {
            className: "bd-notification-progress",
            style: {
                ...u,
                backgroundColor: {
                    success: "var(--status-positive)",
                    error: "var(--status-danger)",
                    warning: "var(--status-warning)",
                    info: "var(--bd-brand)"
                } [r]
            }
        }))
    },
    na = ap;
He();
be();
var op = C.Dispatcher,
    Bv = /betterdiscord:\/\/(plugins)\/(.*?).(\w+).js/;
async function rp() {
    let a = ht(["transitionTo - Transitioning to"], {
            searchExports: !0,
            firstId: 976860,
            cacheId: "core-recovery-transitionTo"
        }),
        e = [{
            action: () => op?.dispatch?.({
                type: "LAYER_POP_ALL"
            }),
            errorMessage: "Failed to pop all layers"
        }, {
            action: () => op?.dispatch?.({
                type: "MODAL_POP_ALL"
            }),
            errorMessage: "Failed to pop all modals"
        }, {
            action: () => a?.("/channels/@me"),
            errorMessage: "Failed to route to main channel"
        }, {
            action: () => z.ModalActions?.closeAllModals?.(),
            errorMessage: "Failed to close all modals"
        }],
        t = !0;
    for (let {
            action: o,
            errorMessage: r
        }
        of e) try {
        await o()
    } catch (n) {
        b.error("Recovery", `${r}:, ${n}`), t = !1
    }
    return t
}
var Nv = a => {
        try {
            let e = new URL(a?.replace(/^(http:\/\/|git:\/\/|git\+https:\/\/|git@)/, "https://"));
            if (!e.hostname.includes("github")) return null;
            let [t, o] = e.pathname.split("/").filter(Boolean);
            return t && o ? `https://github.com/${t}/${o.replace(/\.git$/,"")}` : null
        } catch {
            return null
        }
    },
    Fv = ({
        componentStack: a,
        pluginInfo: e,
        stack: t,
        instance: o
    }) => {
        let [r, n] = i.useState(!1), [s, d] = i.useState(0), l = i.useRef(null);
        i.useEffect(() => {
            let f = () => {
                if (r) {
                    let m = Math.min(.6 * window.innerHeight, 534);
                    d(m)
                } else d(0)
            };
            return f(), window.addEventListener("resize", f), () => window.removeEventListener("resize", f)
        }, [r]);
        let u = () => {
                if (e?.githubUrl) {
                    let f = Nv(e.githubUrl);
                    if (!f) return;
                    let m = encodeURIComponent(`[Bug Report] Plugin Crash - ${e?.name} v${e?.version}`),
                        h = encodeURIComponent(`### Error Details
\`\`\`js
${t}
\`\`\`
 - Generated by BD Recovery Builtin.

### Steps to Reproduce
1.
2.
3.

### Additional Context
`);
                    window.open(`${f}/issues/new?title=${m}&body=${h}`, "_blank")
                }
            },
            c = async () => {
                e?.invite && (await rp() ? (o.setState({
                    info: null,
                    error: null
                }), e.invite && z.showGuildJoinModal(e.invite)) : q.show(p("Toasts.recoveryFailed")))
            };
        return i.createElement("div", {
            className: "bd-error-container"
        }, i.createElement("div", {
            className: "bd-error-toggle-wrapper"
        }, i.createElement(v, {
            className: `bd-error-toggle ${r?"expanded":""}`,
            onClick: () => n(!r)
        }, r ? "Hide Error Details ▼" : "Show Error Details ▶"), i.createElement("div", {
            className: "bd-error-actions"
        }, e?.githubUrl && i.createElement(v, {
            className: "bd-error-github",
            onClick: u,
            color: za.YELLOW
        }, p("Collections.settings.developer.recovery.report")), e?.invite && i.createElement(v, {
            className: "bd-error-discord",
            onClick: c
        }, p("Addons.invite")), i.createElement(v, {
            className: "bd-error-safe-mode",
            onClick: async () => {
                le.addonList.forEach(f => le.disableAddon(f.name)), await J.relaunch()
            },
            color: za.RED
        }, p("Collections.settings.developer.recovery.safeMode")))), i.createElement("div", {
            className: "bd-error-content-wrapper",
            style: {
                height: `${s}px`,
                overflow: "hidden"
            }
        }, i.createElement("div", {
            ref: l,
            className: "bd-error-content"
        }, a)))
    },
    np = new class extends Y {
        get name() {
            return "Recovery"
        }
        get category() {
            return "developer"
        }
        get id() {
            return "recovery"
        }
        async enabled() {
            this.patchErrorBoundry()
        }
        async disabled() {
            this.unpatchAll()
        }
        getPluginInfo(e) {
            try {
                let t = le.getPlugin(e);
                return {
                    name: t.name || e,
                    githubUrl: t.source || t.github,
                    invite: t.invite || null,
                    version: t.version || "0.0.0"
                }
            } catch (t) {
                return b.error("Recovery", `Failed to get plugin info: ${t}`), null
            }
        }
        patchErrorBoundry() {
            let e = Xd(["_handleSubmitReport"], {
                firstId: 670735,
                cacheId: "core-recovery-ErrorBoundary"
            });
            this.after(e?.prototype, "render", (t, o, r) => {
                if (!w.get(this.collection, this.category, this.id)) return;
                let n = r?.props?.action?.props;
                if (!n) return;
                let s = t.state,
                    d = s ? C.SimpleMarkdown.parse(`\`\`\`${s.error?.stack}

${s.info?.componentStack}\`\`\``) : null,
                    l = Bv.exec(s.error?.stack),
                    u = null;
                if (l) {
                    let c = `${l[2]}.plugin.js`;
                    u = this.getPluginInfo(c), le.disableAddon(l[2]), na.show({
                        id: "plugin-crash",
                        title: p("Addons.disabled", {
                            name: c
                        }),
                        content: p("Modals.addonCrashed"),
                        duration: 1 / 0,
                        type: "info",
                        icon: () => i.createElement(Ga, {
                            size: 16,
                            accent: !0
                        }),
                        actions: [...W.isCanary ? [{
                            label: "Re-enable",
                            onClick: () => le.enableAddon(l[2]),
                            dontClose: !0
                        }] : []]
                    })
                }
                n.className = O(n.className, "bd-recovery-buttons"), n.children.push(i.createElement(v, {
                    className: "bd-button-recovery",
                    onClick: async () => {
                        await rp() ? t.setState({
                            info: null,
                            error: null
                        }) : q.show(p("Toasts.recoveryFailed"))
                    }
                }, p("Collections.settings.developer.recovery.button"))), d && (r.props.action = [r?.props?.action, i.createElement(Fv, {
                    componentStack: d,
                    stack: s?.error?.stack,
                    pluginInfo: u,
                    instance: t
                })])
            })
        }
    };
ze();
var ip = new class extends Y {
    get name() {
        return "DevTools"
    }
    get category() {
        return "developer"
    }
    get id() {
        return "devTools"
    }
    async initialize() {
        super.initialize(), this.toggleDevTools = this.toggleDevTools.bind(this), document.addEventListener("keydown", this.toggleDevTools)
    }
    toggleDevTools(e) {
        (process.platform === "darwin" ? e.metaKey : e.ctrlKey) && e.shiftKey && e.key === "I" && (e.stopPropagation(), e.preventDefault(), this.get(this.collection, this.category, this.id) && J.toggleDevTools())
    }
};
var sp = new class extends Y {
    get name() {
        return "Debugger"
    }
    get category() {
        return "developer"
    }
    get id() {
        return "debuggerHotkey"
    }
    async enabled() {
        document.addEventListener("keydown", this.debugListener)
    }
    async disabled() {
        document.removeEventListener("keydown", this.debugListener)
    }
    debugListener(e) {
        if (e.key === "F7" || e.key == "F8") {
            debugger;
            e.preventDefault(), e.stopImmediatePropagation()
        }
    }
};
V();
ze();
ve();
var dp = new class extends Y {
    get name() {
        return "ReactDevTools"
    }
    get category() {
        return "developer"
    }
    get id() {
        return "reactDevTools"
    }
    async enabled() {
        this.showModal()
    }
    async disabled() {
        this.showModal()
    }
    async initialize() {
        super.initialize();
        let e = window.$type?.__originalFunction || window.$type;
        Object.defineProperty(window, "$type", {
            get: () => e,
            set: t => {
                e = t?.__originalFunction || t
            }
        })
    }
    showModal() {
        this.initialized && z.showConfirmationModal(p("Modals.additionalInfo"), p("Modals.restartPrompt"), {
            confirmText: p("Modals.restartNow"),
            cancelText: p("Modals.restartLater"),
            danger: !0,
            onConfirm: () => J.relaunch()
        })
    }
};
ze();
var lp = new class extends Y {
    get name() {
        return "InspectElementHotkey"
    }
    get category() {
        return "developer"
    }
    get id() {
        return "inspectElement"
    }
    async enabled() {
        document.addEventListener("keydown", this.inspectElement)
    }
    async disabled() {
        document.removeEventListener("keydown", this.inspectElement)
    }
    inspectElement(e) {
        (process.platform === "darwin" ? e.metaKey : e.ctrlKey) && e.shiftKey && e.key === "C" && J.inspectElement()
    }
};
Ge();
var up = new class extends Y {
    get name() {
        return "StopDevToolsWarning"
    }
    get category() {
        return "developer"
    }
    get id() {
        return "devToolsWarning"
    }
    async enabled() {
        M.setDevToolsWarningState(!0)
    }
    async disabled() {
        M.setDevToolsWarningState(!1)
    }
};
var Fr = Ae(require("fs"), 1),
    cp = Ae(require("path"), 1);
He();
V();
ve();
var Ls = () => new Date().toISOString().replace("T", " ").replace("Z", ""),
    Ov = ["log", "info", "warn", "error", "debug"],
    Rv = () => {
        let a = new WeakSet;
        return (e, t) => {
            if (typeof t == "object" && t !== null) {
                if (a.has(t)) return "[Circular Reference]";
                a.add(t)
            }
            return t
        }
    },
    Uv = (a, e) => {
        let t = new RegExp(e, "g");
        return (a.match(t) || []).length
    },
    fp = new class extends Y {
        get name() {
            return "DebugLogs"
        }
        get category() {
            return "developer"
        }
        get id() {
            return "debugLogs"
        }
        logFile;stream;async enabled() {
            this.logFile = cp.default.join(W.get("channelPath"), "debug.log"), await this.checkFilesize(), this.stream = Fr.default.createWriteStream(this.logFile, {
                flags: "a"
            }), this.stream.write(`

================= Starting Debug Log (${Ls()}) =================
`);
            for (let e of Ov) this.after(console, e, (t, o) => {
                let r = this.sanitize(...o);
                this.stream?.write(`[${Ls()}][CONSOLE:${e.toUpperCase()}] ${r}
`)
            })
        }
        async disabled() {
            this.unpatchAll(), this.stream && this.stream.end(`

================= Ending Debug Log (${Ls()}) =================`)
        }
        sanitize(...e) {
            let t = [];
            for (let o = 0; o < e.length; o++) {
                let r = e[o];
                if (typeof r == "string") {
                    let n = Uv(r, "%c");
                    t.push(r.replace(/%c/g, "")), n > 0 && (o += n)
                }
                typeof r > "u" && t.push("undefined"), typeof r == "object" && r && r.message && r.stack ? t.push(`${r.message}
${r.stack}`) : typeof r == "object" && t.push(JSON.stringify(r, Rv())), (typeof r == "function" || typeof r == "boolean" || typeof r == "number") && t.push(r.toString())
            }
            return t.join(" ")
        }
        async checkFilesize() {
            try {
                return !this.logFile || !Fr.default.existsSync(this.logFile) || Fr.default.statSync(this.logFile).size / (1024 * 1024) < 100 ? void 0 : new Promise(o => z.showConfirmationModal(p("Modals.additionalInfo"), p("Modals.debuglog"), {
                    confirmText: p("Modals.okay"),
                    cancelText: p("Modals.cancel"),
                    danger: !0,
                    onConfirm: () => Fr.default.rmSync(this.logFile),
                    onClose: o
                }))
            } catch (e) {
                this.stacktrace("Could not get debug log filesize", e)
            }
        }
    };
V();
ze();
ve();
var pp = new class extends Y {
    get name() {
        return "WindowTransparency"
    }
    get category() {
        return "window"
    }
    get id() {
        return "transparency"
    }
    async enabled() {
        this.showModal(p("WindowPrefs.enabledInfo")), document.body.classList.add("bd-transparency")
    }
    async disabled() {
        this.showModal(p("WindowPrefs.disabledInfo")), document.body.classList.remove("bd-transparency")
    }
    showModal(e) {
        this.initialized && z.showConfirmationModal(p("Modals.additionalInfo"), e, {
            confirmText: p("Modals.restartNow"),
            cancelText: p("Modals.restartLater"),
            danger: !0,
            onConfirm: () => J.relaunch()
        })
    }
};
ze();
ve();
V();
var mp = new class extends Y {
    get name() {
        return "RemoveMinimumSize"
    }
    get category() {
        return "window"
    }
    get id() {
        return "removeMinimumSize"
    }
    async enabled() {
        this.showModal()
    }
    async disabled() {
        this.showModal()
    }
    showModal() {
        this.initialized && z.showConfirmationModal(p("Modals.additionalInfo"), p("Modals.restartPrompt"), {
            confirmText: p("Modals.restartNow"),
            cancelText: p("Modals.restartLater"),
            danger: !0,
            onConfirm: () => J.relaunch()
        })
    }
};
ze();
ve();
V();
Fe();
var hp = new class extends Y {
    get name() {
        return "NativeFrame"
    }
    get category() {
        return "window"
    }
    get id() {
        return "frame"
    }
    async initialize() {
        N.on("setting-updated", (e, t, o) => {
            e != this.collection || t !== this.category || o !== "inAppTrafficLights" || this.showModal()
        }), super.initialize()
    }
    async enabled() {
        document.body.classList.add("bd-frame"), this.showModal()
    }
    async disabled() {
        document.body.classList.remove("bd-frame"), this.showModal()
    }
    showModal() {
        this.initialized && z.showConfirmationModal(p("Modals.additionalInfo"), p("Modals.restartPrompt"), {
            confirmText: p("Modals.restartNow"),
            cancelText: p("Modals.restartLater"),
            danger: !0,
            onConfirm: () => J.relaunch()
        })
    }
};
_e();
tt();
Bt();
me();
Dt();
_();
ze();
var ai = Ae(require("request"), 1),
    xp = Ae(require("fs"), 1),
    Eo = Ae(require("path"), 1);
ee();
He();
var Or = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
    Is = /^[0-9]+$/;

function Qn(a, e) {
    let t = Is.test(a.toString()),
        o = Is.test(e.toString());
    return t && o && (a = +a, e = +e), a === e ? 0 : t && !o ? -1 : o && !t ? 1 : a < e ? -1 : 1
}

function gp(a) {
    return a.split(".").map(e => {
        if (!Is.test(e)) return e;
        let t = +e;
        return t >= 0 && t < Number.MAX_SAFE_INTEGER ? t : e
    })
}

function jv(a, e) {
    let t = gp(a),
        o = gp(e);
    for (let r = 0;; r++) {
        let n = t[r],
            s = o[r];
        if (n === void 0 && s === void 0) return 0;
        if (s === void 0) return 1;
        if (n === void 0) return -1;
        if (n === s) continue;
        return Qn(n, s)
    }
}

function qv(a, e) {
    return a.length && !e.length ? -1 : !a.length && e.length ? 1 : !a.length && !e.length ? 0 : jv(a, e)
}

function Rr(a, e) {
    let t = Or.exec(a),
        o = Or.exec(e);
    if (!t || !o) return 0;
    let r = Qn(o[1], t[1]) || Qn(o[2], t[2]) || Qn(o[3], t[3]),
        n = qv(o[4] ?? "", t[4] ?? "");
    return r || n
}
Fe();
ze();
V();
Dt();
I();
me();
tt();
Bt();
et();
ve();
He();
et();
I();
V();
Fe();
_();
xe();
oe();
var {
    useState: bp,
    useCallback: Xa,
    useEffect: Hv
} = i;

function ei(a, e, t, o = {}) {
    let {
        size: r = v.Sizes.ICON,
        look: n = v.Looks.BLANK,
        color: s = v.Colors.TRANSPARENT,
        className: d = "",
        stopAnimation: l = !1
    } = o, u = async c => {
        let f = c.currentTarget.closest("button");
        f.classList.add("animate"), await t(), l && (await new Promise(m => setTimeout(m, 500)), f?.classList?.remove("animate"))
    };
    return i.createElement(C.Tooltip, {
        color: "primary",
        position: "top",
        text: a
    }, c => i.createElement(v, {
        ...c,
        "aria-label": a,
        className: `bd-update-button ${d}`,
        size: r,
        look: n,
        color: s,
        onClick: u
    }, e))
}

function Wv({
    hasUpdate: a,
    remoteVersion: e,
    update: t
}) {
    return i.createElement(Lo, {
        name: "BetterDiscord",
        collapsible: !0
    }, i.createElement(ba, {
        name: `Core v${W.get("version")}`,
        note: a ? p("Updater.versionAvailable", {
            version: e
        }) : p("Updater.noUpdatesAvailable"),
        inline: !0,
        id: "core-updater"
    }, !a && i.createElement("div", {
        className: "bd-filled-checkmark"
    }, i.createElement(Ye, {
        size: "18px"
    })), a && ei(p("Updater.updateButton"), i.createElement(jo, null), t, {
        className: "no-animation"
    })))
}

function _v({
    type: a
}) {
    return i.createElement("div", {
        className: "bd-empty-updates"
    }, i.createElement(Ye, {
        size: "48px"
    }), p("Updater.upToDateBlankslate", {
        context: a.slice(0, -1)
    }))
}

function yp({
    pending: a,
    type: e,
    updater: t,
    update: o,
    updateAll: r
}) {
    return i.createElement(Lo, {
        name: p(`Panels.${e}`),
        collapsible: !0,
        titleChildren: a.length > 1 ? ei(p("Updater.updateAll"), i.createElement(st, {
            size: "20px"
        }), () => r(e)) : null
    }, !a.length && i.createElement(_v, {
        type: e
    }), a.map(n => {
        let s = t.cache[n],
            d = t.manager.addonList.find(l => l.filename === n);
        return s ? i.createElement(ba, {
            key: d.filename,
            name: `${d.name} v${d.version}`,
            note: p("Updater.versionAvailable", {
                version: s.version
            }),
            inline: !0,
            id: d.name
        }, ei(p("Updater.updateButton"), i.createElement(st, null), () => o(e, n))) : null
    }))
}

function As({
    coreUpdater: a,
    pluginUpdater: e,
    themeUpdater: t
}) {
    let [o, r] = bp(a.hasUpdate), [n, s] = bp({
        plugins: e.pending.slice(0),
        themes: t.pending.slice(0)
    }), d = Xa(async k => {
        let L = k === "plugins" ? e : t;
        await L.checkAll(!1), s({
            ...n,
            [k]: L.pending.slice(0)
        })
    }, [n, e, t]), l = Xa(() => {
        d("plugins"), d("themes")
    }, [d]);
    Hv(() => (N.on("plugin-loaded", l), N.on("plugin-unloaded", l), N.on("theme-loaded", l), N.on("theme-unloaded", l), () => {
        N.off("plugin-loaded", l), N.off("plugin-unloaded", l), N.off("theme-loaded", l), N.off("theme-unloaded", l)
    }), [l]);
    let u = Xa(async () => {
            await a.checkForUpdate(!1), r(a.hasUpdate)
        }, [a]),
        c = Xa(async () => {
            q.info(p("Updater.checking")), await u(), await d("plugins"), await d("themes"), s({
                plugins: e.pending.slice(0),
                themes: t.pending.slice(0)
            }), q.info(p("Updater.finishedChecking"))
        }, [d, u, e, t]),
        f = Xa(async () => {
            await a.update(), r(!1)
        }, [a]),
        m = Xa(async (k, L) => {
            await (k === "plugins" ? e : t).updateAddon(L), s(T => (T[k].splice(T[k].indexOf(L), 1), T))
        }, [e, t]),
        h = Xa(async k => {
            let L = n[k].slice(0);
            for (let R of L) await m(k, R)
        }, [m, n]);
    return [i.useContext(aa)(i.createElement(kt, {
        text: p("Panels.updates")
    }, ei(p("Updater.checkForUpdates"), i.createElement(ar, null), c, {
        className: "bd-update-check",
        stopAnimation: !0
    }))), i.createElement(Wv, {
        remoteVersion: a.remoteVersion,
        hasUpdate: o,
        update: f
    }), i.createElement(yp, {
        type: "plugins",
        pending: n.plugins,
        update: m,
        updateAll: h,
        updater: e
    }), i.createElement(yp, {
        type: "themes",
        pending: n.themes,
        update: m,
        updateAll: h,
        updater: t
    })]
}
oe();
var Vv = a => new Promise(e => {
        (0, ai.default)({
            url: a,
            headers: {
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
            }
        }, (t, o, r) => {
            if (t) return e([]);
            e(JSON.parse(r))
        })
    }),
    Gv = (a, e) => (e.version === "Unknown" || (a[e.file_name] = {
        name: e.name,
        version: e.version,
        id: e.id
    }), a),
    jr = class {
        static updateCheckInterval = null;
        static initialize() {
            w.registerPanel("updates", p("Panels.updates"), {
                order: 1,
                icon: tr,
                element: () => i.createElement(As, {
                    coreUpdater: Ur,
                    pluginUpdater: Ts,
                    themeUpdater: Es
                })
            }), Ur.initialize(), Ts.initialize(), Es.initialize(), N.on("setting-updated", (e, t, o) => {
                e !== "settings" || t !== "addons" || o !== "updateInterval" && o !== "checkForUpdates" || this.startUpdateInterval()
            }), this.startUpdateInterval()
        }
        static startUpdateInterval() {
            if (this.updateCheckInterval && (clearInterval(this.updateCheckInterval), this.updateCheckInterval = null), !w.get("addons", "checkForUpdates")) return;
            let e = w.get("addons", "updateInterval");
            this.updateCheckInterval = setInterval(() => {
                Ur.checkForUpdate(), Ts.checkAll(), Es.checkAll()
            }, e * 60 * 60 * 1e3)
        }
    },
    Ur = class {
        static hasUpdate = !1;
        static apiData;
        static remoteVersion = "";
        static async initialize() {
            w.get("addons", "checkForUpdates") && this.checkForUpdate()
        }
        static async checkForStable(e = !1) {
            let o = await (await fetch("https://api.github.com/repos/BetterDiscord/BetterDiscord/releases/latest", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "User-Agent": "BetterDiscord Updater"
                    }
                })).json(),
                r = o.tag_name.startsWith("v") ? o.tag_name.slice(1) : o.tag_name;
            this.hasUpdate = e || Rr(W.get("version"), r) > 0, this.remoteVersion = r, this.apiData = o
        }
        static async checkForCanary(e = !1) {
            let r = (await (await fetch("https://api.github.com/repos/BetterDiscord/BetterDiscord/releases", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "User-Agent": "BetterDiscord Updater"
                    }
                })).json()).find(l => l.prerelease && l.tag_name === "canary"),
                n = r?.assets.find(l => l.name === "betterdiscord.asar");
            if (!r || !n) {
                this.hasUpdate = !1, this.remoteVersion = "";
                return
            }
            let s = Q.get("misc", "canaryUpdated"),
                d = n.updated_at;
            try {
                s ? s = new Date(s) : s = new Date(0), d = new Date(d)
            } catch {
                return
            }
            this.hasUpdate = e || d > s, this.remoteVersion = d.toISOString(), this.apiData = r
        }
        static async checkForUpdate(e = !0) {
            if (W.isDevelopment) return;
            let t = W.isCanary;
            w.get("developer", "canary") ? await this.checkForCanary(!t) : await this.checkForStable(t), !(!this.hasUpdate || !e) && na.show({
                id: "BD-core-update",
                title: p("Updater.updateAvailable", {
                    version: this.remoteVersion
                }),
                type: "warning",
                icon: () => i.createElement(Ga, {
                    size: 16,
                    accent: !0
                }),
                duration: 1 / 0,
                actions: [{
                    label: p("Updater.updateButton"),
                    onClick: () => this.update()
                }]
            })
        }
        static async update() {
            try {
                let e = this.apiData.assets.find(n => n.name === "betterdiscord.asar");
                if (!e) return;
                let t = await new Promise((n, s) => (0, ai.default)(e.url, {
                        headers: {
                            "Content-Type": "application/octet-stream",
                            "User-Agent": "BetterDiscord Updater",
                            Accept: "application/octet-stream"
                        }
                    }, (d, l, u) => d || l.statusCode != 200 ? s(d || `${l.statusCode} ${l.statusMessage}`) : n(u))),
                    o = Eo.default.join(W.get("dataPath"), "betterdiscord.asar");
                require("original-fs").writeFileSync(o, t), this.hasUpdate = !1, w.get("developer", "canary") ? Q.set("misc", "canaryUpdated", this.remoteVersion) : W.set("version", this.remoteVersion), z.showConfirmationModal(p("Updater.updateSuccessful"), p("Modals.restartPrompt"), {
                    confirmText: p("Modals.restartNow"),
                    cancelText: p("Modals.restartLater"),
                    danger: !0,
                    onConfirm: () => J.relaunch()
                })
            } catch (e) {
                b.stacktrace("Updater", "Failed to update", e), z.showConfirmationModal(p("Updater.updateFailed"), p("Updater.updateFailedMessage"), {
                    cancelText: null
                })
            }
        }
    },
    ti = class {
        manager;
        type;
        cache;
        pending;
        constructor(e) {
            this.manager = e === "plugin" ? le : Ee, this.type = e, this.cache = {}, this.pending = []
        }
        async initialize() {
            await this.updateCache(), w.get("addons", "checkForUpdates") && this.checkAll(), N.on(`${this.type}-loaded`, e => {
                w.get("addons", "checkForUpdates") && this.checkForUpdate(e.filename, e.version)
            }), N.on(`${this.type}-unloaded`, e => {
                let t = this.pending.indexOf(e.filename);
                t >= 0 && this.pending.splice(t, 1)
            })
        }
        async updateCache() {
            this.cache = {}, this.pending.length = 0, (await Vv(re.store[this.type + "s"])).reduce(Gv, this.cache)
        }
        clearPending() {
            this.pending.splice(0, this.pending.length)
        }
        async checkAll(e = !0) {
            await this.updateCache();
            for (let t of this.manager.addonList) this.checkForUpdate(t.filename, t.version);
            e && this.showUpdateNotice()
        }
        checkForUpdate(e, t) {
            if (this.pending.includes(e)) return;
            let o = this.cache[Eo.default.basename(e)];
            if (!o) return;
            let r = o.version > t;
            Or.test(o.version) && Or.test(t) && (r = Rr(t, o.version) > 0), r && this.pending.push(e)
        }
        async updateAddon(e) {
            let t = this.cache[e];
            (0, ai.default)({
                url: re.redirects.github(t.id.toString()),
                headers: {
                    "Cache-Control": "no-cache",
                    Pragma: "no-cache"
                }
            }, (o, r, n) => {
                if (o || r.statusCode !== 200) {
                    b.stacktrace("AddonUpdater", `Failed to download body for ${t.id}:`, o), q.error(p("Updater.addonUpdateFailed", {
                        name: t.name,
                        version: t.version
                    }));
                    return
                }
                let s = Eo.default.join(Eo.default.resolve(this.manager.addonFolder), e);
                xp.default.writeFile(s, n.toString(), () => {
                    q.success(p("Updater.addonUpdated", {
                        name: t.name,
                        version: t.version
                    })), this.pending.splice(this.pending.indexOf(e), 1)
                })
            })
        }
        showUpdateNotice() {
            if (!this.pending.length) return;
            let e = this.pending.map(t => {
                let o = this.cache[Eo.default.basename(t)];
                return {
                    name: o ? o.name : t,
                    version: o ? o.version : ""
                }
            });
            na.show({
                id: `addon-updates-${this.type}`,
                title: p("Updater.addonUpdaterNotificationTitle"),
                content: [p("Updater.addonUpdatesAvailable", {
                    count: this.pending.length,
                    context: this.type
                }), i.createElement("ul", {
                    className: "bd-notification-updates-list"
                }, e.map(t => i.createElement("li", {}, [t.name, " ", i.createElement("i", {}, `(${t.version})`)])))],
                type: "info",
                icon: () => i.createElement(Ga, {
                    size: 16,
                    accent: !0
                }),
                duration: 1 / 0,
                actions: [{
                    label: p("Updater.viewUpdates"),
                    onClick: () => To.openSettingsPage("updates")
                }, {
                    label: p("Updater.updateAll"),
                    onClick: () => {
                        for (let t of this.pending) this.updateAddon(t)
                    }
                }]
            })
        }
    },
    Ts = new ti("plugin"),
    Es = new ti("theme");
var vp = '#bd-editor-panel{background:var(--bd-editor-background,var(--background-base-lower));flex-direction:column;display:flex}#bd-editor-controls button{color:var(--interactive-text-default);background:0 0;border-radius:3px;align-items:center;height:26px;margin:0 5px 0 0;font-weight:600;display:flex}#bd-editor-controls button:hover{background:var(--interactive-background-hover);color:var(--interactive-text-hover)}#bd-editor-controls button:active{background:var(--interactive-background-active)}#bd-editor-controls{background:var(--background-secondary-alt);color:var(--text-default);box-shadow:var(--elevation-low);z-index:10;border:none;justify-content:space-between;align-items:center;padding:5px;display:flex}.editor-wrapper{display:flex}.editor{box-sizing:border-box;width:100%;height:calc(100vh - 250px);font-size:14px}.controls-section{align-items:center;display:flex}.controls-section.controls-right{gap:15px}.monaco-editor:not(.rename-box),.monaco-editor .overflow-guard,.monaco-editor .editor-scrollable,.monaco-editor .minimap-shadow-visible,.monaco-editor .decorationsOverviewRuler{height:100%!important}.monaco-editor:not(.rename-box),.monaco-editor .overflow-guard,.monaco-editor .overlayWidgets,#bd-customcss-editor>div>.overflow-guard>div:nth-child(3){width:100%!important}.monaco-editor .minimap{right:14px;left:unset!important;height:100%!important}.monaco-editor .editor-scrollable{width:calc(100% - 64px)!important}.monaco-editor .view-overlays .current-line{width:1000000px!important}.bd-fallback-editor{resize:none;white-space:nowrap;width:100%;height:100%;overflow:auto}[class*=errorPage_] [class*=buttons_]{flex-direction:column;align-items:center;gap:8px;padding:16px;display:flex}[class*=errorPage_] [class*=buttons_] [class*=button_]{width:100%;max-width:400px;margin:0;transition:all .2s}.bd-recovery-buttons.bd-recovery-buttons{justify-content:center}.bd-button-recovery{height:var(--custom-button-button-lg-height);min-height:var(--custom-button-button-lg-height);background-color:var(--red-new-50)!important;width:100%!important;max-width:400px!important;margin-top:8px!important}.bd-error-content-wrapper{height:0;transition:height .3s cubic-bezier(.4,0,.2,1);overflow:hidden}.bd-error-content{color:var(--text-default);background:var(--background-base-lower);border-top:1px solid var(--border-subtle);opacity:1;transform-origin:top;max-height:500px;padding:16px;font-family:monospace;font-size:12px;line-height:1.5;transition:opacity .2s,transform .2s;overflow-y:auto}.bd-error-content::-webkit-scrollbar{width:8px;height:8px}.bd-error-content::-webkit-scrollbar-thumb{background-color:var(--scrollbar-auto-thumb);border-radius:4px}.bd-error-content::-webkit-scrollbar-track{background-color:var(--scrollbar-auto-track);border-radius:4px}.bd-error-content::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-auto-thumb-hover)}.bd-error-content pre{white-space:pre-wrap;word-break:break-all;margin:0}.bd-error-container{background:var(--background-base-lower);border-radius:8px;width:100%;max-width:1500px;margin:16px auto;overflow:hidden}.bd-error-toggle-wrapper{background:var(--background-base-lowest);flex-direction:column;align-items:center;gap:8px;padding:8px;display:flex}.bd-error-toggle{cursor:pointer;color:var(--text-default);z-index:1;font-size:14px;font-weight:500;transition:all .3s;position:relative;text-align:center!important;background:var(--background-base-lowest)!important;border:none!important;width:30%!important;padding:12px!important}.bd-error-toggle.expanded{background:var(--interactive-background-selected)!important}.bd-error-toggle:hover{background:var(--interactive-background-hover)!important}.bd-error-actions{justify-content:center;gap:8px;width:100%;max-width:800px;padding:0 16px;display:flex}.bd-error-actions button{border-radius:4px;flex:1;max-width:200px;font-size:14px;font-weight:500;transition:all .2s;padding:8px 16px!important}.bd-error-github{background-color:"#fdd18c"!important}.bd-error-github:hover{background-color:"#fcc145"!important}.bd-error-discord{background-color:var(--control-connect-background-default)!important}.bd-error-discord:hover{background-color:var(--control-connect-background-hover)!important}';
var wp = '.bd-reload{cursor:pointer;vertical-align:top;fill:#dcddde}.bd-reload:hover{fill:#fff}.bd-reload-header{margin-left:5px}.bd-reload-card{margin-right:5px}.bd-controls,.bd-controls-basic,.bd-controls-advanced{display:flex}.bd-addon-list{user-select:text}.bd-addon-list.bd-grid-view{grid-template-columns:1fr 1fr;gap:10px;display:grid}.bd-addon-list .bd-addon-card{border-radius:var(--radius-sm);background:var(--background-mod-subtle);border:1px solid var(--border-subtle);box-shadow:var(--shadow-low);flex-direction:column;margin-bottom:20px;display:flex;overflow:hidden}.bd-addon-list.bd-grid-view .bd-addon-card{margin-bottom:0}.bd-addon-list .bd-addon-header{color:var(--text-strong);background:var(--background-mod-subtle);border-bottom:1px solid var(--border-subtle);border-radius:var(--radius-sm)var(--radius-sm)0 0;justify-content:space-between;align-items:center;padding:16px;font-size:14px;font-weight:600;line-height:20px;display:flex;overflow:hidden}.bd-addon-header .bd-icon{color:var(--text-strong);margin-right:8px}.bd-grid-view .bd-addon-header .bd-icon{width:24px;height:24px;margin-right:12px}.disabled .bd-addon-header .bd-icon{color:red}.bd-title,.bd-name,.bd-meta{line-height:normal;display:inline}.bd-title{flex:1;min-width:0}.bd-meta{color:var(--channels-default);font-weight:500}.bd-name{white-space:nowrap;text-overflow:ellipsis;gap:4px;display:inline-flex;overflow:hidden}.bd-name:after,.bd-version:after{content:" ";display:inline}.bd-grid-view .bd-title{flex-direction:column;display:flex}.bd-grid-view .bd-meta{font-size:12px}.bd-description-wrap{flex:1;padding:8px 16px 0}.bd-description-wrap .banner{color:#fff;font-weight:700px;background:#26191e;border:2px solid gray;border-radius:5px;align-items:center;padding:5px;font-size:16px;display:flex}.banner.banner-danger{background:#473c41;border-color:#f04747}.banner .bd-icon{fill:#fff;margin-right:5px;height:16px!important}.banner-danger .bd-icon{color:#f04747;fill:none}.bd-addon-list .bd-description{word-break:break-word;-webkit-line-clamp:3;max-height:175px;color:var(--text-default);margin-bottom:5px;padding:5px 0;font-size:14px;line-height:18px;overflow-y:auto}.bd-description em{font-style:italic}.bd-description code{white-space:pre-wrap;background:var(--background-base-lowest);border-radius:3px;margin:-.2em 0;padding:.2em;font-size:85%;line-height:1.125rem}.bd-addon-list .scroller::-webkit-scrollbar-track-piece,.bd-addon-list .scroller::-webkit-scrollbar-thumb{border-color:#0000;border-radius:0!important}.bd-addon-list .bd-footer{justify-content:space-between;align-items:center;padding:8px 16px 16px;display:flex;overflow:hidden}.bd-controls>.bd-addon-button{border-radius:0;padding:4px 6px}.bd-links .bd-addon-button:not(:first-child){margin-left:10px}.bd-controls>.bd-addon-button svg{color:var(--interactive-text-active)}.bd-controls>.bd-addon-button:first-of-type{border-radius:3px 0 0 3px}.bd-controls>.bd-addon-button:last-of-type{border-radius:0 3px 3px 0}.bd-controls>.bd-addon-button:only-child{border-radius:3px}.bd-controls+.bd-addon-list{margin-top:10px}.bd-addon-controls{flex-wrap:wrap;justify-content:space-between;align-items:center}.bd-settings-title .bd-search{width:200px;margin:0;font-size:13px}.bd-addon-dropdowns{display:flex}.react-error{color:red;cursor:pointer;font-family:Arial,Helvetica,sans-serif;font-weight:700}.settings-open .bd-close{cursor:pointer;float:right}.bd-addon-modal{min-height:0}.bd-addon-modal-settings{padding:0 16px 16px}.bd-addon-modal-footer .bd-button{background-color:var(--bd-brand)}.bd-addon-modal-footer .bd-button:hover{background-color:#3875ce}.bd-addon-modal-footer .bd-button:active{background-color:#3268b7}.bd-addon-views{margin-left:10px;display:flex}.bd-addon-controls .bd-button{background-color:#0000;padding:3px 4px}.bd-addon-controls .bd-button svg{color:var(--interactive-text-default)}.bd-addon-controls .bd-button.selected svg{color:#fff}.bd-addon-controls .bd-button:hover{background-color:var(--interactive-background-selected)}.bd-addon-controls .bd-button:active{background-color:var(--app-frame-border)}.bd-addon-controls .bd-button.selected{background-color:var(--bd-brand)}.bd-addon-controls .bd-button+.bd-button{margin-left:5px}.bd-controls-basic .bd-button:active svg{color:#fff}.bd-controls-basic .bd-button:active{background-color:var(--bd-brand)}.bd-addon-list .bd-footer .bd-links,.bd-addon-list .bd-footer .bd-links a,.bd-addon-list .bd-footer .bd-addon-button{align-items:center;display:flex}.bd-addon-list .bd-footer .bd-link{color:var(--interactive-text-default)}.bd-addon-list .bd-footer .bd-link:hover{color:var(--interactive-text-hover)}.bd-addon-list .bd-footer .bd-link:active{color:var(--interactive-text-active)}.bd-addon-list .bd-footer .bd-link svg{color:var(--interactive-text-default)}.bd-addon-list .bd-footer .bd-links .bd-addon-button{height:24px}.bd-store-card{background-color:var(--card-background-default);border:1px solid var(--border-subtle);border-radius:var(--radius-sm);cursor:pointer;flex-direction:row;justify-content:center;align-items:center;margin:10px 0;padding:16px 24px 16px 16px;display:flex}.bd-store-card:hover{background-color:var(--interactive-background-hover)}.bd-store-card-icon{background:var(--background-base-low);color:var(--interactive-text-default);border-radius:50%;flex-direction:row;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center;padding:8px;display:flex}.bd-store-card-body{flex-direction:column;flex-grow:1;flex-shrink:1;justify-content:flex-start;align-items:flex-start;margin-left:12px;display:flex}.bd-store-card-caret{color:var(--interactive-text-default)}';
var kp = '.bd-addon-store-card{background:var(--bg-surface-raised);border-radius:8px;flex-direction:column;width:100%;max-width:320px;min-height:320px;display:flex;position:relative;overflow:hidden}.theme-dark .bd-addon-store-card{background:var(--bg-surface-raised)}.theme-dark .bd-addon-store-card:hover,.theme-dark .bd-addon-store-card:hover .bd-addon-store-card-author-mask{background-color:var(--bg-surface-overlay-tmp)}.full-motion .bd-addon-store-card{transition:box-shadow .2s ease-out,transform .2s ease-out,background .2s ease-out,opacity .2s ease-in}.full-motion .bd-addon-store-card:hover{box-shadow:var(--elevation-high);transform:translateY(-1px)}.bd-addon-store-card-author{position:absolute;bottom:-21px;left:12px}.bd-addon-store-card-author-mask{background-color:var(--bg-surface-raised);padding:4px}.theme-dark .bd-addon-store-card-author-mask{background-color:var(--bg-surface-raised)}.full-motion .bd-addon-store-card-author-mask{transition:box-shadow .2s ease-out,transform .2s ease-out,background .2s ease-out}.bd-addon-store-card-info{align-items:center;gap:16px;margin-bottom:8px;display:flex}.bd-addon-store-card-actions{align-items:center;gap:8px;display:flex}.bd-addon-store-card-spacer{flex:auto}.bd-addon-store-card-downloads,.bd-addon-store-card-likes{min-width:0;color:var(--text-default);white-space:nowrap;text-overflow:ellipsis;font-family:var(--font-primary);align-items:center;gap:4px;font-size:12px;font-weight:400;line-height:1.33333;display:flex;overflow:hidden}.bd-addon-store-card-dot{background-color:var(--green-360);border-radius:50%;flex-shrink:0;width:8px;height:8px}.bd-addon-store-card-downloads .bd-addon-store-card-dot{background-color:var(--primary-300)}.bd-addon-store-card-author-svg{contain:paint}.bd-addon-store-card-author-img{width:100%;height:100%}.bd-addon-store-card-splash{height:143px;margin-bottom:32px;display:block;position:relative;overflow:visible}.bd-addon-store-card-preview{width:100%;height:100%;display:block;position:absolute;top:0;left:0}.bd-addon-store-card-preview-img{object-fit:cover;width:100%;height:100%}.bd-addon-store-card-body{flex-direction:column;flex:auto;align-content:stretch;padding:0 16px 16px;display:flex;position:relative;overflow:hidden}.bd-addon-store-card-name{white-space:nowrap;text-overflow:ellipsis;width:100%;color:var(--text-strong);font-weight:600;font-family:var(--font-display);align-items:center;gap:4px;font-size:16px;line-height:1.25;display:flex;overflow:hidden}.bd-addon-store-card-description{color:var(--text-default);-webkit-line-clamp:4;font-family:var(--font-primary);user-select:text;-webkit-box-orient:vertical;margin:4px 0 8px;font-size:14px;font-weight:400;line-height:1.28571;overflow:hidden}.bd-addon-store-card-tags{user-select:none;flex-wrap:wrap;gap:4px;margin-bottom:16px;display:flex}.bd-addon-store-card-tag{color:var(--interactive-text-default);background:var(--background-mod-subtle);border:1px solid var(--bg-surface-raised);cursor:pointer;border-radius:8px;padding:2px 5px;transition:border-color .2s linear,color .2s linear}.bd-addon-store-card-tag:hover{color:var(--interactive-text-hover)}.bd-addon-store-card-tag-selected,.bd-addon-store-card-tag:hover:active{border-color:var(--brand-500);color:var(--interactive-text-active)}button.bd-addon-store-card-button{color:var(--interactive-text-default)}.bd-addon-store-card-button:hover{color:var(--interactive-text-hover)}.bd-addon-store-card-button:hover:active{color:var(--interactive-text-active)}.bd-addon-store-card .bd-button.bd-button-filled svg{color:var(--interactive-text-hover)}.bd-addon-store-card .bd-button.bd-button-filled.bd-color-red{padding:8px}.bd-addon-store-card-badge{white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;min-width:16px;height:16px;min-height:16px;color:var(--white);background:var(--red-400);text-align:center;font-family:var(--font-display);text-transform:uppercase;letter-spacing:.02em;user-select:none;border-radius:8px;flex:none;padding:0 6px;font-size:12px;font-weight:700;line-height:1.33333;position:absolute;top:8px;right:8px;overflow:hidden}.bd-addon-store{grid-template-columns:1fr 1fr;gap:20px clamp(8px,2vw,20px);margin:10px 0;display:grid}.bd-addon-store-warning{background:var(--info-warning-background);border:1px solid var(--background-feedback-warning);color:var(--info-warning-text);border-radius:6px;align-items:center;gap:6px;margin-top:10px;padding:6px;display:flex}.bd-addon-store-card-loading{background-color:var(--bg-surface-raised);border-radius:50%;padding:4px}img:where(.bd-addon-store-card-preview-img,.bd-install-modal-preview-img)[src="https://betterdiscord.app/resources/ui/content_thumbnail.svg"]{object-fit:contain}.bd-addon-store-card:last-child:nth-child(odd):not(.bd-addon-store-card-embed){margin-left:calc(50% + 10px)}.bd-addon-title{align-items:center;display:flex}.bd-addon-title[data-showing-store=true]>span:first-child{cursor:pointer}.bd-addon-title[data-showing-store=true]>span:first-child:hover{background:var(--interactive-background-hover)}.bd-addon-title>span{border-radius:3px;padding:2px 4px}.bd-flower-star{color:var(--green-360);justify-content:center;align-items:center;display:inline-flex;overflow:hidden}';
var Cp = '.theme-dark .bd-social-logo path{fill:#adadad}.theme-light .bd-social-logo path{fill:#b9bbbe}.bd-social-link:hover .bd-social-logo{opacity:1}.bd-social-link:hover .bd-social-logo path:first-of-type{fill:var(--bd-brand)}.bd-button-title{margin-left:10px}.bd-select-wrapper{color:var(--text-default);align-items:center;font-size:13px;display:flex}.bd-select-wrapper+.bd-select-wrapper{margin-left:10px}.bd-select-wrapper label{margin-right:5px}.bd-select{cursor:pointer;color:var(--interactive-text-default);background-color:var(--input-background-default);border:1px solid var(--input-border-default);border-radius:var(--radius-sm);font-family:var(--font-primary);text-overflow:ellipsis;white-space:nowrap;justify-content:space-between;align-items:center;padding:8px 12px;font-size:16px;font-weight:500;line-height:1.25;transition:border-color .15s;display:flex;position:relative}.bd-select.bd-select-disabled{cursor:not-allowed;opacity:.5}.bd-select.bd-select-transparent{background:0 0;border:none;align-items:flex-start;padding:0}.bd-select-arrow{color:var(--interactive-text-default);margin-left:10px}.bd-select-options{background:var(--background-surface-higher);font-family:var(--font-primary);color:var(--text-default);border-radius:var(--radius-sm);max-height:300px;min-width:anchor-size(width);border:1px solid var(--input-border-default);margin-top:4px;position:fixed;inset-block-start:anchor(end);inset-inline-start:anchor(start);overflow:auto}.bd-select-option{cursor:pointer;white-space:pre;padding:8px 12px}.bd-select-option:hover{background:var(--interactive-background-hover);color:var(--interactive-text-hover)}.bd-select-option.selected{background:var(--interactive-background-selected);color:var(--interactive-text-active)}.bd-setting-item .bd-select{min-width:200px}.bd-setting-item{flex-direction:column;margin-bottom:20px;display:flex}.bd-setting-header{justify-content:space-between;align-items:center;display:flex}.bd-setting-header label{word-wrap:break-word;color:var(--text-strong);font-size:16px;font-weight:500;line-height:24px;overflow:hidden}.bd-setting-note{color:var(--text-default);margin-top:4px;font-size:14px;font-weight:400;line-height:20px}.bd-setting-item:not(.inline) .bd-setting-note{margin-bottom:10px}.bd-divider.bd-setting-divider{margin-top:20px}.bd-settings-container{height:auto;transition:height .3s cubic-bezier(.47,0,.745,.715);overflow:hidden}.bd-settings-group.collapsed .bd-settings-container{height:0}.bd-settings-group.expanded .bd-settings-container:not(.animating){overflow:visible}.bd-settings-title{color:var(--text-strong,var(--text-default));cursor:default;flex:1;justify-content:space-between;font-weight:600;display:flex}.bd-settings-title:not(.bd-settings-group-title){margin-bottom:20px;font-size:20px;line-height:24px}.bd-settings-group.collapsible .bd-settings-title{order:1;justify-content:space-between;align-items:center;display:flex}.bd-settings-group.collapsible .bd-settings-title:before{content:"";background-color:var(--app-frame-border);flex:1;order:2;height:2px;margin:0 10px 0 15px}.bd-settings-group.collapsible .bd-settings-title:after{content:"";background:var(--text-default);vertical-align:bottom;order:3;width:20px;height:20px;transition:transform .3s;display:inline-block;transform:rotate(0);-webkit-mask:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSItOTUwIDUzMiAxOCAxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtOTUwIDUzMiAxOCAxODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS05MzIsNTMydjE4aC0xOHYtMThILTkzMnoiLz4NCjxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9Ii05MzYuNiw1MzguOCAtOTQxLDU0My4yIC05NDUuNCw1MzguOCAiLz4NCjwvc3ZnPg0K) 50%/contain no-repeat;mask:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSItOTUwIDUzMiAxOCAxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtOTUwIDUzMiAxOCAxODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS05MzIsNTMydjE4aC0xOHYtMThILTkzMnoiLz4NCjxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9Ii05MzYuNiw1MzguOCAtOTQxLDU0My4yIC05NDUuNCw1MzguOCAiLz4NCjwvc3ZnPg0K) 50%/contain no-repeat}.bd-settings-group.collapsed .bd-settings-title:after{transition:transform .3s;transform:rotate(90deg)}.bd-settings-group~.bd-settings-group .bd-settings-title{margin-top:30px;transition:margin-top .3s}.bd-settings-group.collapsed+.bd-settings-group .bd-settings-title{margin-top:0}.bd-settings-title.bd-settings-group-title{text-transform:uppercase;color:var(--interactive-text-default);margin-bottom:10px;font-size:14px}.checkbox-item{display:flex}.checkbox-item .checkbox-label{margin-right:8px}';
var Sp = '.bd-changelog-modal iframe,.bd-changelog-modal video,.bd-changelog-modal img{border-radius:5px;outline:none;width:100%}.bd-changelog-modal code{border:1px solid var(--background-base-lowest);white-space:pre-wrap;background:var(--background-base-lower);border:1px solid var(--background-base-lowest);border-radius:4px;margin:-.2em 0;padding:0 .2em;font-size:85%;line-height:1.125rem}.bd-changelog-modal .bd-modal-content{font-size:16px;line-height:20px}.bd-changelog-modal .bd-modal-content .emoji{object-fit:contain;width:22px;height:22px}.bd-changelog-modal .bd-modal-content h1{font-size:16px;line-height:20px}.bd-changelog-modal .bd-modal-content h1,.bd-changelog-modal .bd-modal-content h2,.bd-changelog-modal .bd-modal-content strong{font-weight:700}.bd-changelog-modal .bd-modal-content em,.bd-changelog-modal .bd-modal-content i{font-style:italic}.bd-changelog-modal .bd-modal-content p+p{margin-top:10px}.bd-changelog-modal .bd-modal-content ol{margin:16px 0 16px 16px}.bd-changelog-modal .bd-modal-content ol li{margin-bottom:8px;margin-left:20px;list-style-type:decimal}.bd-changelog-modal .bd-modal-content ul{margin:20px 0 8px 20px}.bd-changelog-modal .bd-modal-content ul ul{margin-top:8px}.bd-changelog-modal .bd-modal-content ul li{user-select:text;margin-bottom:8px;list-style:none;position:relative}.bd-changelog-modal .bd-modal-content ul li:last-child{margin-bottom:0}.bd-changelog-modal .bd-modal-content ul li:before{content:"";opacity:.3;border-radius:50%;width:6px;height:6px;margin-top:-4px;margin-left:-3px;position:absolute;top:10px;left:-15px}.bd-changelog-modal .bd-modal-content ul li li:before{border-radius:0;height:2px;top:12px}.bd-changelog-modal .bd-modal-content img,.bd-changelog-modal .bd-modal-content video,.bd-changelog-modal .bd-modal-content iframe{width:100%}.bd-changelog-modal .bd-modal-content iframe{height:346px}.bd-changelog-modal .bd-modal-content a{color:hsl(200,calc(var(--saturation-factor,1)*100%),49.4%);text-decoration:none;transition:all 50ms}.bd-changelog-modal .bd-modal-content a:hover{text-decoration:underline}.theme-dark .bd-changelog-modal .bd-modal-content ol,.theme-dark .bd-changelog-modal .bd-modal-content p,.theme-dark .bd-changelog-modal .bd-modal-content ul li{color:hsl(210,calc(var(--saturation-factor,1)*9.3%),78.8%)}.theme-dark .bd-changelog-modal .bd-modal-content ul li:before{background-color:hsl(216,calc(var(--saturation-factor,1)*9.8%),90%)}.theme-light .bd-changelog-modal .bd-modal-content ol,.theme-light .bd-changelog-modal .bd-modal-content p,.theme-light .bd-changelog-modal .bd-modal-content ul li{color:hsl(223,calc(var(--saturation-factor,1)*5.8%),52.9%)}.theme-light .bd-changelog-modal .bd-modal-content ul li:before{background-color:hsl(223,calc(var(--saturation-factor,1)*5.8%),52.9%)}.bd-changelog-title{text-transform:uppercase;align-items:center;margin-top:40px;font-size:16px;font-weight:700;line-height:20px;display:flex}.bd-changelog-title.bd-changelog-first{margin-top:20px}.bd-changelog-title:after{content:"";opacity:.6;flex:auto;height:1px;margin-left:4px}.bd-changelog-added{color:var(--text-feedback-positive)}.bd-changelog-added:after{background-color:var(--background-feedback-positive)}.bd-changelog-fixed{color:hsl(359,calc(var(--saturation-factor,1)*87.3%),59.8%)}.bd-changelog-fixed:after{background-color:hsl(359,calc(var(--saturation-factor,1)*87.3%),59.8%)}.bd-changelog-progress{color:var(--text-feedback-warning)}.bd-changelog-progress:after{background-color:var(--background-feedback-warning)}.bd-changelog-improved{color:hsl(235,calc(var(--saturation-factor,1)*85.6%),64.7%)}.bd-changelog-improved:after{background-color:hsl(235,calc(var(--saturation-factor,1)*85.6%),64.7%)}.theme-dark .bd-changelog-improved{color:hsl(235,calc(var(--saturation-factor,1)*86.1%),77.5%)}.theme-dark .bd-changelog-improved:after{background-color:hsl(235,calc(var(--saturation-factor,1)*86.1%),77.5%)}.bd-social{opacity:.7;transition:opacity .17s}.bd-social:hover{opacity:1}.bd-changelog-modal .bd-social:not(:first-child){margin-left:10px}';
var Lp = ".bd-checkbox{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;gap:8px;position:relative}.bd-checkbox.bd-checkbox-has-label{flex:auto;max-width:100%;font-size:16px}.bd-checkbox-input{cursor:pointer;opacity:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:1;width:24px;height:24px;margin:0;padding:0;position:absolute;top:0;left:0}.bd-checkbox-box{border-color:var(--primary-400);box-sizing:border-box;width:24px;height:24px;color:var(--interactive-text-active);border-style:solid;border-width:1px;border-radius:6px;flex:none;justify-content:center;align-items:center;display:flex}.bd-checkbox-input:checked+.bd-checkbox-box{border-color:var(--bd-brand);background-color:var(--bd-brand)}.bd-checkbox-input:not(:checked)+.bd-checkbox-box>svg{display:none}.bd-checkbox-label{flex:auto;min-width:0}.bd-checkbox.bd-checkbox-disabled{opacity:.6;cursor:not-allowed}";
var Ip = ".bd-color-picker-container{justify-content:center;display:flex}.bd-color-picker-container.bd-color-picker-disabled{cursor:not-allowed;opacity:.5}.bd-color-picker-container.bd-color-picker-disabled>.bd-color-picker-controls,.bd-color-picker-container.bd-color-picker-disabled>.bd-color-picker-swatch{pointer-events:none}.bd-color-picker-controls{padding-top:2px;padding-left:1px;display:flex}.bd-color-picker-default{cursor:pointer;border-radius:4px;justify-content:center;align-items:center;width:75px;height:60px;margin-top:1px;margin-right:9px;display:flex}.bd-color-picker-custom{display:inline-table;position:relative}.bd-color-picker-custom svg{pointer-events:none;position:absolute;top:5px;right:5px}.bd-color-picker{cursor:pointer;border:none;border-radius:4px;outline:none;width:75px;height:60px;margin-top:1px}.bd-color-picker::-webkit-color-swatch{border:none}.bd-color-picker-swatch{flex-wrap:wrap;align-content:flex-start;max-width:330px;display:flex;margin-left:5px!important}.bd-color-picker-swatch-item{cursor:pointer;border-radius:4px;justify-content:center;align-items:center;width:15px;height:15px;margin:4px;display:flex}.bd-setting-item.inline .bd-color-picker-swatch{max-width:220px;margin-top:1px}.bd-setting-item.inline .bd-color-picker-default,.bd-setting-item.inline .bd-color-picker{width:50px;height:40px}.bd-setting-item.inline .bd-color-picker-swatch-item{width:18px;height:18px;margin:2px}";
var Ap = ".bd-error-modal-header{flex-direction:column;align-items:flex-start}.bd-addon-errors{margin-top:16px}.bd-addon-error{background:var(--deprecated-card-editable-bg);border:1px solid;border-radius:5px;margin-bottom:16px;padding:0;position:relative}.theme-dark .bd-addon-error{border-color:var(--background-base-lower)}.theme-light .bd-addon-error{border-color:var(--background-base-lowest)}.bd-addon-error-header{cursor:pointer;border-radius:5px;outline:none;align-items:center;padding:20px 16px;display:flex}.bd-addon-error-header:focus-visible{box-shadow:0 0 0 4px var(--border-focus)}.bd-addon-error-icon{background-color:var(--background-base-lowest);border-radius:50%;justify-content:center;align-self:flex-start;align-items:center;width:48px;height:48px;margin-right:10px;display:flex}.bd-addon-error-icon svg{color:var(--interactive-text-default);width:24px!important;height:24px!important}.bd-addon-error-expander{color:var(--interactive-text-default);transition:transform .2s;transform:none}.bd-addon-error[open] .bd-addon-error-expander{transform:rotate(90deg)}.bd-addon-error-expander,.bd-addon-error-icon{flex:none}.bd-addon-error-header-inner{flex-direction:column;flex:auto;display:flex}.bd-addon-error-body{padding:0 16px 24px}.bd-addon-error-body .bd-divider{margin-bottom:24px}.bd-addon-error-stack code{user-select:text;text-indent:0;white-space:pre-wrap;scrollbar-width:thin;scrollbar-color:var(--background-base-lowest)var(--background-base-lower);background:var(--background-base-lower);border:1px solid var(--background-base-lowest);font-size:.875rem;line-height:1.125rem}.bd-addon-error-stack pre{position:relative}.bd-addon-error-stack pre [class*=codeActions]{color:var(--text-default);display:none;position:absolute;top:8px;right:4px}.bd-addon-error-stack pre:hover [class*=codeActions]{display:block}.bd-addon-error-stack pre [class*=codeActions]>div{cursor:pointer}.bd-addon-error-details{flex-grow:0;justify-content:flex-start;margin-top:4px;display:flex}.bd-addon-error-details-icon{color:var(--interactive-text-default);margin-right:4px}";
var Tp = ".bd-file-input-wrap{box-sizing:border-box;border-radius:var(--radius-sm);background-color:var(--input-background-default);border:1px solid var(--input-border-default);align-items:center;gap:5px;min-width:250px;height:40px;padding:0 4px;display:flex;position:relative}.bd-file-input-wrap:hover{border-color:var(--bd-brand)}.bd-setting-item.inline .bd-file-input-wrap{max-width:300px}.bd-file-input{color:var(--text-default);cursor:pointer;outline:none;flex:1;width:100%;font-size:16px;font-weight:600}.bd-file-input::-webkit-file-upload-button{visibility:hidden;user-select:none;pointer-events:none;width:0;height:0;margin:0;padding:0!important}.bd-file-input-wrap .bd-file-input-browse{padding:7px 16px}.bd-file-input-wrap .bd-file-input-clear{opacity:.5;margin-left:5px;padding-right:4px!important}.bd-file-input-wrap .bd-file-input-clear:hover{opacity:1}.bd-file-input-wrap .bd-file-input-clear svg{width:18px!important;height:18px!important}.bd-file-input-wrap.bd-file-input-disabled{cursor:not-allowed;opacity:.5}.bd-file-input-wrap.bd-file-input-disabled .bd-file-input-browse,.bd-file-input-wrap.bd-file-input-disabled .bd-file-input,.bd-file-input-wrap.bd-file-input-disabled .bd-file-input-clear{pointer-events:none}";
var Ep = ".bd-flex{display:flex}.bd-flex-align-start{align-items:flex-start}.bd-flex-align-end{align-items:flex-end}.bd-flex-align-center{align-items:center}.bd-flex-align-stretch{align-items:stretch}.bd-flex-align-baseline{align-items:baseline}.bd-flex-justify-start{justify-content:flex-start}.bd-flex-justify-end{justify-content:flex-end}.bd-flex-justify-center{justify-content:center}.bd-flex-justify-around{justify-content:space-around}.bd-flex-justify-between{justify-content:space-between}.bd-flex-no-wrap{flex-wrap:nowrap}.bd-flex-wrap{flex-wrap:wrap}.bd-flex-wrap-reverse{flex-wrap:wrap-reverse}.bd-flex-horizontal{flex-direction:row}.bd-flex-reverse{flex-direction:row-reverse}.bd-flex-vertical{flex-direction:column}.spacer-2upayl{flex:1;overflow:hidden}.bd-flex-horizontal>.spacer-2upayl,.bd-flex-reverse>.spacer-2upayl,.bd-flex-vertical>.spacer-2upayl{min-height:1px}.bd-flex-horizontal>.bd-flex,.bd-flex-horizontal>.bd-flex-child{margin-left:10px;margin-right:10px}.bd-flex-horizontal>.bd-flex:first-child,.bd-flex-horizontal>.bd-flex-child:first-child{margin-left:0}.bd-flex-horizontal>.bd-flex:last-child,.bd-flex-horizontal>.bd-flex-child:last-child{margin-right:0}.bd-flex-reverse>.bd-flex,.bd-flex-reverse>.bd-flex-child{margin-left:10px;margin-right:10px}.bd-flex-reverse>.bd-flex:first-child,.bd-flex-reverse>.bd-flex-child:first-child{margin-right:0}.bd-flex-reverse>.bd-flex:last-child,.bd-flex-reverse>.bd-flex-child:last-child{margin-left:0}";
var Mp = "@keyframes open-window{0%{transform:scale(.9)}to{transform:none}}.floating-window{-webkit-app-region:no-drag;z-index:1002;box-sizing:border-box;flex-direction:column;min-width:200px;min-height:300px;animation:.2s open-window;display:flex;position:fixed;box-shadow:0 2px 10px #0003}.floating-window.modal-open{z-index:999}.floating-window.resizable{resize:both;background:var(--bd-editor-background,var(--background-base-lowest));padding-bottom:10px;overflow:auto}.floating-window-titlebar{color:#fff;background:var(--background-base-lowest);justify-content:space-between;align-items:center;width:100%;height:28px;display:flex}.floating-window-content{background:var(--bd-editor-background,var(--background-base-lower));color:#fff;flex-direction:column;flex:1;display:flex;overflow:hidden}.floating-window-titlebar .title{color:var(--text-default);flex:1;padding:0 8px;font-size:.85em;font-weight:600}.floating-window-buttons{display:flex}.floating-window-buttons .button{cursor:pointer;width:30px;height:28px;color:var(--interactive-text-default);justify-content:center;align-items:center;display:flex}.floating-window-buttons .button svg,.floating-window-buttons .button .fill{fill:currentColor}.floating-window-buttons .maximize-button:hover{background:var(--interactive-background-hover)}.floating-window-buttons .maximize-button:active{background:var(--interactive-background-active)}.floating-window-buttons .close-button:hover{color:#fff;background:#f04747}.floating-window-content #bd-editor-panel{flex-direction:column;flex:1;height:100%;display:flex;overflow:hidden}.editor-wrapper{position:relative}.floating-window .editor-wrapper{flex:1;overflow:hidden}.floating-window .editor{flex:1;height:auto}.floating-window #bd-editor-controls{z-index:10;background:var(--background-base-lower);height:auto;box-shadow:var(--elevation-low);border:none}#floating-editor-window{min-width:340px;max-width:750px;min-height:280px;max-height:900px}.floating-addon-window{min-width:535px;max-width:90%;min-height:605px;max-height:90%}.bd-editor-footer{color:var(--bd-editor-foreground);border-top:1px solid var(--bd-editor-divider);justify-content:space-between;align-items:center;display:flex}.bd-editor-footer-left,.bd-editor-footer-right{display:flex}.bd-editor-footer-item{cursor:pointer;text-overflow:ellipsis;white-space:pre;font-variant-numeric:tabular-nums;outline-width:0;align-items:center;height:100%;margin-left:3px;margin-right:3px;padding:0 5px;font-size:12px;line-height:22px;display:flex;overflow:hidden}.bd-editor-problems{background:var(--bd-editor-background,var(--background-base-lowest));z-index:5;width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden scroll}.bd-editor-problem{color:var(--bd-editor-foreground,var(--text-default));gap:8px;padding:3px 4px 0;display:inline-flex}.bd-editor-problem.bd-editor-severity-8 svg{color:var(--background-feedback-critical)}.bd-editor-problem.bd-editor-severity-4 svg,.bd-editor-problem.bd-editor-severity-2 svg,.bd-editor-problem.bd-editor-severity-1 svg{color:var(--background-feedback-info)}.bd-editor-problem>:nth-child(2)~span{opacity:.7}.bd-editor-no-problems{color:var(--bd-editor-foreground,var(--text-default));padding:4px}.bd-editor-footer-right .codicon{cursor:pointer;text-overflow:ellipsis;white-space:pre;outline-width:0;align-items:center;height:100%;padding:0 3px;display:flex;overflow:hidden}";
var Dp = ".bd-install-modal-guild{--guild-size:32px;width:var(--guild-size);height:var(--guild-size);background-color:var(--background-base-low);white-space:nowrap;border-radius:6px;justify-content:center;align-items:center;font-weight:500;line-height:1.2em;transition:background-color .15s ease-out,color .15s ease-out;display:flex;position:relative;overflow:hidden}.bd-install-modal-guild img{width:var(--guild-size);height:var(--guild-size)}.bd-install-modal-item:hover .bd-install-modal-guild{color:var(--white);background-color:var(--background-brand)}.bd-install-modal-header{align-items:center;gap:8px;margin:0 20px;display:flex}.bd-install-modal-items{background:var(--background-base-lower);border-radius:8px;margin:20px;padding:12px}.bd-install-modal-item{color:var(--text-default);gap:12px;padding:12px}.bd-install-modal-items>.bd-install-modal-item:not(:last-child){border-bottom:1px solid var(--border-subtle)}.bd-install-modal-item-leading{min-width:24px;max-width:24px;display:flex}.bd-install-modal-item-trailing{display:flex}.bd-install-modal-item-content{width:100%}.bd-install-modal-clickable{cursor:pointer;background-color:#0000;border-radius:3px;transition:background-color .1s}.bd-install-modal-clickable:hover{color:var(--interactive-text-hover);background:var(--bg-overlay-hover,var(--interactive-background-hover))}.bd-install-modal-author-svg{contain:paint}.bd-install-modal-author-img{width:100%;height:100%}.bd-install-modal-splash{height:197px;margin-bottom:32px;display:block;position:relative;overflow:visible}.bd-install-modal-preview{width:100%;height:100%;display:block;position:absolute;top:0;left:0}.bd-install-modal-preview-img{object-fit:cover;border-radius:3px 3px 0 0;width:100%;height:100%}.bd-install-modal-author{position:absolute;bottom:-21px;left:12px}.bd-install-modal-author-mask{background-color:var(--background-base-low);padding:4px}";
var Pp = ".bd-keybind-wrap{box-sizing:border-box;border-radius:var(--radius-sm);background-color:var(--input-background-default);border:1px solid var(--input-border-default);cursor:pointer;align-items:center;gap:5px;min-width:250px;height:40px;padding:0 4px;display:flex;position:relative}.bd-keybind-wrap.bd-keybind-disabled{cursor:not-allowed;opacity:.5}.bd-keybind-wrap.bd-keybind-disabled .bd-keybind-record,.bd-keybind-wrap.bd-keybind-disabled .bd-keybind-clear,.bd-keybind-wrap.bd-keybind-disabled .bd-keybind-input{pointer-events:none}.bd-keybind-wrap input{pointer-events:none;color:var(--text-default);text-transform:uppercase;background:0 0;border:none;outline:none;flex:1;font-size:16px;font-weight:600}.bd-keybind-wrap input::placeholder{text-transform:capitalize}.bd-keybind-wrap.recording,.bd-keybind-wrap:not(.bd-keybind-disabled):hover{border-color:hsl(var(--red-400-hsl)/.3)}.bd-keybind-wrap.recording{box-shadow:0 0 6px hsl(var(--red-400-hsl)/.3)}.bd-keybind-wrap.recording input{color:var(--status-danger)}.bd-keybind-wrap .bd-keybind-record{padding:3px 8px}.bd-keybind-wrap .bd-keybind-record.bd-button-color-red svg{color:var(--interactive-text-active)}.bd-keybind-clear{opacity:.5;margin-left:5px;padding-right:4px!important}.bd-keybind-clear:hover{opacity:1}.bd-keybind-clear svg{width:18px!important;height:18px!important}";
var zp = ".bd-modal-wrapper{z-index:1000;width:100vw;height:100vh;position:absolute}.bd-backdrop{background:#0009;width:100%;height:100%;position:absolute}.bd-modal{width:33%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.bd-modal-inner{background:var(--background-base-low);border-radius:var(--radius-md);animation:.3s ease-out bd-modal-open;overflow:hidden}.bd-modal-wrapper.closing .bd-modal-inner{animation:.3s ease-in bd-modal-close}.bd-modal .footer{background:var(--background-base-lower);justify-content:flex-end;padding:15px;display:flex}.bd-modal-body{padding:0 15px 20px}.bd-modal .header{padding:15px}.bd-modal .title{color:#fff;font-size:22px;font-weight:600}.bd-modal-body{color:#fff}.bd-modal .footer .bd-button{min-width:80px;height:38px}@keyframes bd-modal-close{to{transform:scale(.7)}}@keyframes bd-modal-open{0%{transform:scale(.7)}}.bd-modal-root{background-color:var(--modal-background);border-radius:var(--radius-md);border:1px solid var(--border-normal);pointer-events:all;flex-direction:column;max-height:100%;margin:0 auto;display:flex;position:relative}.bd-close-button{opacity:.5;cursor:pointer;height:26px;color:var(--interactive-text-default);box-sizing:content-box;border-radius:3px;padding:4px;transition:opacity .2s ease-in-out}.bd-close-button:hover{opacity:1;color:var(--interactive-text-hover)}.bd-modal-small{width:440px;min-height:200px;max-height:720px}.bd-modal-standard{white-space:pre-wrap;word-wrap:break-word;width:490px;max-height:min(800px,60vh);font-size:13px}.bd-modal-medium{width:600px;min-height:400px;max-height:min(800px,60vh)}.bd-modal-large{width:800px;min-height:400px;max-height:min(960px,70vh)}.bd-addon-modal{min-height:0}.bd-modal-header,.bd-modal-footer{z-index:1;flex:none;padding:16px;position:relative;overflow-x:hidden}.bd-modal-header{border-radius:var(--radius-md)var(--radius-md)0 0;word-wrap:break-word;transition:box-shadow .1s ease-out}.bd-modal-footer{border-radius:0 0 var(--radius-md)var(--radius-md);background-color:var(--modal-footer-background);overflow:hidden}.bd-modal-content{z-index:0;border-radius:var(--radius-md)var(--radius-md)0 0;color:var(--text-default);padding-left:16px;padding-right:8px;font-size:16px;line-height:20px;position:relative;overflow:hidden scroll}.bd-modal-backdrop{top:0;right:var(--devtools-sidebar-width,0);pointer-events:all;position:fixed;bottom:0;left:0;-webkit-transform:translateZ(0);transform:translateZ(0)}#bd-modal-container{top:0;left:0;right:var(--devtools-sidebar-width,0);pointer-events:none;z-index:1002;position:absolute;bottom:0;background:0 0!important}.bd-modal-layer{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;justify-content:center;align-items:center;min-height:0;padding-top:40px;padding-bottom:40px;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;inset:0}";
var Bp = ".bd-notice-success{--color:#3ba55d}.bd-notice-error{--color:#ed4245}.bd-notice-info{--color:#4a8fe1}.bd-notice-warning{--color:#faa81a}.bd-notice-closing{transition:height .4s;height:0!important}@keyframes bd-open-notice{0%{height:0}}#bd-notices{grid-area:notice}.bd-notice{text-align:center;z-index:101;height:36px;box-shadow:var(--elevation-low);color:#fff;background:var(--color,var(--brand-experiment-600,#3c45a5));flex-grow:0;flex-shrink:0;padding-left:4px;padding-right:28px;font-size:14px;font-weight:500;line-height:36px;animation:.4s bd-open-notice;position:relative;overflow:hidden}.bd-notice:first-child{border-radius:8px 0 0}.bd-notice-close{opacity:.5;cursor:pointer;-webkit-app-region:no-drag;background:url(https://discord.com/assets/7731c77d99babca1a8faec204d98c380.svg) 50% 55%/10px 10px no-repeat;width:36px;height:36px;transition:opacity .2s;position:absolute;top:0;right:0}.bd-notice-button{color:#fff;box-sizing:border-box;vertical-align:top;-webkit-app-region:no-drag;background:0 0;border:1px solid #fff;border-radius:3px;height:24px;margin-left:10px;padding:0 10px;font-size:14px;font-weight:500;line-height:22px;transition:background-color .2s,color .2s,border-color .2s;display:inline-block;position:relative;top:6px}.bd-notice-button:hover{color:var(--color,var(--background-mobile-secondary));background:#fff}.bd-notice-close:hover{opacity:1}";
var Np = "#bd-notifications-root{z-index:9999;pointer-events:none;padding:16px;display:flex;position:fixed}#bd-notifications-root>*{pointer-events:auto}.bd-notification-container{z-index:3002;flex-direction:column;gap:8px;display:flex;position:fixed}.bd-notification{background-color:var(--card-background-default);border:1px solid var(--border-subtle);border-radius:var(--radius-sm);box-shadow:var(--shadow-medium);flex-direction:column;width:350px;margin-bottom:20px;display:flex;position:relative}.bd-notification [class*=markdown_] [class*=paragraph_]:last-child{margin-bottom:0!important}.bd-notification-top-left{flex-direction:column;top:16px;left:16px}.bd-notification-top-right{flex-direction:column;top:16px;right:16px}.bd-notification-bottom-right{flex-direction:column-reverse;bottom:16px;right:16px}.bd-notification-bottom-left{flex-direction:column-reverse;bottom:16px;left:16px}.bd-notification-content{border-radius:8px 8px 0 0;flex-direction:column;padding:16px 40px 0 16px;display:flex}.bd-notification-icon{filter:saturate(var(--saturation-factor,1));color:var(--text-default);flex-shrink:0;margin-right:6px}.bd-notification-topbar{place-content:center space-between;align-items:center;margin-left:3px;padding:10px 10px 0;font-size:16px;font-weight:700;display:inline-flex}.bd-notification-header{align-items:flex-start;display:flex}.bd-notification-body{margin-top:4px}.bd-notification-title{color:var(--text-default);font-family:var(--font-display);word-wrap:break-word;word-break:break-word;overflow-wrap:break-word;flex:1;font-size:16px;font-weight:600;line-height:1.25}.bd-notification-content-text{color:var(--text-default);font-family:var(--font-display);word-wrap:break-word;word-break:break-word;overflow-wrap:break-word;font-size:14px;font-weight:400;line-height:1.28571}.bd-notification-close{color:var(--interactive-text-default);cursor:pointer;opacity:.5;margin:-10px;padding:10px;position:absolute;top:12px;right:12px}.bd-notification-close:hover{color:var(--interactive-text-hover)}.bd-notification-updates-list{margin-top:8px;margin-bottom:0}.bd-notification-footer{background-color:var(--card-background-default);border-radius:0 0 8px 8px;flex-wrap:wrap;gap:8px;padding:10px 16px 0;display:flex}.bd-notification-action{background-color:var(--control-secondary-background-default);color:var(--control-secondary-text-default);cursor:pointer;border:none;border-radius:8px;flex:1;min-width:calc(33.3333% - 8px);padding:8px 16px;font-size:14px;transition:background-color .2s ease-in-out}.bd-notification-action:hover{background-color:var(--control-secondary-background-hover)}.bd-notification-progress{border-bottom-right-radius:12px;border-bottom-left-radius:12px;height:4px;margin-top:14px;transition:width .1s linear}.bd-notification-enter{animation:.5s ease-out forwards slideIn}.bd-notification-exit{animation:.5s ease-in forwards slideOut}@keyframes slideIn{0%{opacity:0;transform:translate(100%)}to{opacity:1;transform:translate(0)}}@keyframes slideOut{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(100%)}}.bd-container{background:var(--background-base-lower);border:3px solid var(--brand-500);color:var(--text-default);border-radius:8px;width:500px;height:300px;margin:50px auto;position:relative}.bd-container-disabled{background:var(--background-base-lower);border:3px solid var(--red-400);color:var(--text-default);border-radius:8px;width:500px;height:300px;margin:50px auto;position:relative}.position-wrapper{width:500px}.bd-box{background-color:var(--primary-400);cursor:pointer;border-radius:3px;width:150px;height:80px;margin:6px;transition:background-color .3s;position:absolute}.bd-box:hover{background-color:var(--brand-500);opacity:.8}.bd-box.selected{background-color:var(--brand-500)}.bd-box-disabled{background-color:var(--primary-400);opacity:.5;border-radius:3px;width:150px;height:80px;margin:6px;transition:background-color .3s;position:absolute;cursor:not-allowed!important}.bd-box-disabled:hover{background-color:var(--brand-500);opacity:.8}.bd-box-disabled.selected{background-color:var(--brand-500)}.bd-center-svg{width:100px;height:100px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.top-left{top:0;left:0}.top-right{top:0;right:0}.bottom-left{bottom:0;left:0}.bottom-right{bottom:0;right:0}.bd-center-text{text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.bd-text{color:var(--text-default);margin:0}.bd-p{color:var(--text-default);margin:10px 0 0}";
var Fp = ".bd-number-input-wrapper{display:flex}.bd-number-input::-webkit-inner-spin-button,.bd-number-input::-webkit-outer-spin-button{display:none}.bd-number-input{box-sizing:border-box;background-color:var(--input-background-default);border:1px solid var(--input-border-default);color:var(--text-default);text-align:center;padding:8px 12px;font-size:16px}.bd-number-input:focus-within{border-color:var(--bd-brand)}.bd-number-input:not([min][max]){width:65px}.bd-button.bd-number-input-decrement{border-right:unset;border-radius:var(--radius-sm)0 0 var(--radius-sm)}.bd-button.bd-number-input-increment{border-left:unset;border-radius:0 var(--radius-sm)var(--radius-sm)0}.bd-number-input-wrapper.bd-number-input-disabled{cursor:not-allowed;opacity:.5}.bd-number-input-wrapper.bd-number-input-disabled .bd-number-input,.bd-number-input-wrapper.bd-number-input-disabled .bd-button.bd-number-input-decrement,.bd-number-input-wrapper.bd-number-input-disabled .bd-button.bd-number-input-increment{pointer-events:none}";
var Op = ".bd-paginator{justify-content:space-between;align-items:center;margin:auto;display:flex}.bd-paginator-bubbles{justify-content:center;align-items:center;display:flex}.bd-paginator-back,.bd-paginator-next{padding:0 8px}#app-mount :where(.bd-paginator-back,.bd-paginator-next),.bd-paginator-bubble{box-sizing:border-box;cursor:pointer;width:min-content;min-width:28px;height:28px;min-height:28px;color:var(--text-strong);justify-content:center;align-items:center;margin:4px;padding:6px;font-weight:600;display:flex}:where(.bd-paginator-back,.bd-paginator-next):disabled{cursor:not-allowed;opacity:.5}#app-mount :where(.bd-paginator-back,.bd-paginator-next):hover{color:var(--interactive-text-hover);background-color:var(--background-base-lower)}.bd-paginator-back,.bd-paginator-next{padding-right:12px}.bd-paginator-bubble:where([data-selected=true],:hover){color:var(--white-500);background-color:var(--brand-500)}.bd-paginator-bubble{border-radius:14px;min-width:28px}";
var Rp = ".bd-radio-group{min-width:300px}.bd-radio-option{cursor:pointer;user-select:none;border-radius:var(--radius-sm);color:var(--text-primary);border-left:3px solid #0000;align-items:center;gap:8px;margin-bottom:4px;padding:12px 16px;display:flex}.bd-radio-group.bd-radio-disabled{cursor:not-allowed;opacity:.5}.bd-radio-group.bd-radio-disabled .bd-radio-option{pointer-events:none}.bd-radio-option:hover{background-color:var(--background-mod-subtle);color:var(--interactive-text-hover)}.bd-radio-option.bd-radio-selected{background-color:var(--background-mod-subtle);color:var(--interactive-text-active)}.bd-radio-option input{opacity:0;cursor:pointer;width:0;height:0;position:absolute}.bd-radio-indicator{border-radius:50%}.bd-radio-icon{stroke:var(--checkbox-border-default)}.bd-radio-selected .bd-radio-icon{stroke:var(--bd-brand);fill:var(--bd-brand)}.bd-radio-label-wrap{flex-direction:column;display:flex}.bd-radio-label{font-family:var(--font-primary);font-size:16px;font-weight:500;line-height:20px}.bd-radio-description{font-family:var(--font-primary);font-size:14px;font-weight:400;line-height:18px}";
var Up = ".bd-scroller-base{box-sizing:border-box;flex:auto;min-height:0;position:relative}@supports not selector(::-webkit-scrollbar){.bd-scroller-thin{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thin-thumb)var(--scrollbar-thin-track)}}.bd-scroller-thin::-webkit-scrollbar-track{border-color:var(--scrollbar-thin-track);background-color:var(--scrollbar-thin-track);border:2px solid var(--scrollbar-thin-track)}.bd-scroller-thin::-webkit-scrollbar{width:8px;height:8px}.bd-scroller-thin::-webkit-scrollbar-corner{background-color:#0000}.bd-scroller-thin::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:var(--scrollbar-thin-thumb);border:2px solid #0000;border-radius:4px;min-height:40px}";
var jp = ".bd-sidebar-header{justify-content:space-between;align-items:center;display:flex}.bd-sidebar-header h2{box-sizing:border-box;color:#96989d;white-space:nowrap;text-overflow:ellipsis;text-transform:uppercase;letter-spacing:.02em;flex-shrink:0;padding:6px 10px;font-size:12px;font-weight:700;display:flex;overflow:hidden}.bd-sidebar-header .bd-changelog-button{height:16px;padding:0}.bd-sidebar-header .bd-icon{cursor:pointer;color:var(--interactive-text-default)}.bd-sidebar-header .bd-changelog-button:hover .bd-icon{color:var(--interactive-text-hover)}";
var qp = '.bd-setting-item:not(.inline) .bd-slider-wrap{margin-top:10px}.bd-slider-wrap{color:var(--text-default);flex-direction:column;justify-content:center;align-items:center;margin:0 10px;display:flex;position:relative}.bd-slider-wrap.bd-slider-markers{margin-bottom:10px;padding-bottom:10px}.bd-slider-wrap.bd-slider-disabled{cursor:not-allowed;opacity:.5}.bd-slider-wrap.bd-slider-disabled>.bd-slider-input,.bd-slider-wrap.bd-slider-disabled>.bd-slider-label,.bd-slider-wrap.bd-slider-disabled>.bd-slider-track,.bd-slider-wrap.bd-slider-disabled>.bd-slider-marker-container,.bd-slider-wrap.bd-slider-disabled>.bd-slider-input::-webkit-slider-thumb{pointer-events:none}.bd-slider-label{opacity:0;pointer-events:none;background:#000;border-radius:5px;padding:5px 7px;font-weight:700;position:absolute;top:-45px}.bd-slider-input:hover+.bd-slider-label{opacity:1}.bd-slider-input{appearance:none;pointer-events:none;z-index:2;background:0 0;outline:none;width:100%;position:absolute}.bd-slider-input::-webkit-slider-thumb{appearance:none;background-color:hsl(0,calc(var(--saturation-factor,1)*0%),100%);border:1px solid hsl(210,calc(var(--saturation-factor,1)*2.9%),86.7%);width:10px;height:24px;-webkit-box-shadow:0 3px 1px 0 hsla(0,calc(var(--saturation-factor,1)*0%),0%,.05),0 2px 2px 0 hsla(0,calc(var(--saturation-factor,1)*0%),0%,.1),0 3px 3px 0 hsla(0,calc(var(--saturation-factor,1)*0%),0%,.05);box-shadow:0 3px 1px 0 hsla(0,calc(var(--saturation-factor,1)*0%),0%,.05),0 2px 2px 0 hsla(0,calc(var(--saturation-factor,1)*0%),0%,.1),0 3px 3px 0 hsla(0,calc(var(--saturation-factor,1)*0%),0%,.05);cursor:ew-resize;pointer-events:all;border-radius:3px;top:50%}.bd-slider-track{background:hsl(217,calc(var(--saturation-factor,1)*7.6%),33.5%);background-image:linear-gradient(var(--bd-brand),var(--bd-brand));cursor:pointer;z-index:1;background-repeat:no-repeat;background-size:70% 100%;border-radius:5px;width:100%;min-width:350px;height:8px;transition:opacity .2s}.bd-slider-marker-container{justify-content:space-between;width:98%;display:flex;position:absolute;bottom:0}.bd-slider-marker{cursor:pointer;font-size:12px;position:absolute;transform:translate(-50%)}.bd-slider-marker:before{content:"";z-index:-1;background:#fff3;width:2px;height:24px;position:absolute;top:-26px;left:calc(50% - 1px)}.bd-setting-item.inline:first-child:has(.bd-slider-wrap){padding-top:50px}';
var Hp = '.bd-switch{transition:filter .25s cubic-bezier(0,.3,.7,1),opacity .25s cubic-bezier(0,.3,.7,1);position:relative}.bd-switch-body{--switch-color:#72767d;--symbol1path:path("M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z");--symbol2path:path("M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z");background-color:var(--switch-color);border-radius:14px;width:40px;height:24px;transition:background-color .25s cubic-bezier(0,.3,.7,1);position:relative}.bd-switch input:active+.bd-switch-body{--switch-color:var(--bd-brand)}.bd-switch input:checked+.bd-switch-body{--switch-color:var(--bd-brand);--symbol1path:path("M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z");--symbol2path:path("M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z")}.full-motion .bd-switch input:active+.bd-switch-body{--symbol1path:path("M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z");--symbol2path:path("M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z")}.bd-switch input:checked:active+.bd-switch-body{--switch-color:var(--bd-brand)}.full-motion .bd-switch input:checked:active+.bd-switch-body{--symbol1path:path("M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z");--symbol2path:path("M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z")}.bd-switch .bd-switch-symbol path{fill:var(--switch-color);transition:all .25s cubic-bezier(0,.3,.7,1)}.bd-switch .bd-switch-symbol path:first-child{d:var(--symbol1path)}.bd-switch .bd-switch-symbol path:last-child{d:var(--symbol2path)}.bd-switch input{z-index:1;opacity:0;cursor:pointer;border-radius:100px;width:100%;height:100%;margin:0;position:absolute}.bd-switch-body .bd-switch-slider{width:28px;height:18px;margin:3px;transition:all .25s cubic-bezier(0,.3,.7,1);display:block;position:absolute;left:-3px}.bd-switch input:active+.bd-switch-body .bd-switch-slider{left:1px}.bd-switch input:checked+.bd-switch-body .bd-switch-slider{left:12px}.bd-switch input:active:checked+.bd-switch-body .bd-switch-slider{left:8px}.bd-switch-body .bd-switch-slider .bd-switch-handle{transition:all .25s cubic-bezier(0,.3,.7,1);position:relative}.bd-switch input:active+.bd-switch-body .bd-switch-handle{y:1;x:0;width:28px;height:18px}.bd-switch input:checked:active+.bd-switch-body .bd-switch-handle{x:0}.bd-switch-disabled{opacity:.5;filter:grayscale()}.bd-switch-disabled input{cursor:not-allowed}';
var Wp = ".bd-tab-bar{flex-direction:row;display:flex}.bd-tab-item{text-align:center;-webkit-app-region:no-drag;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;min-width:40px;color:var(--interactive-text-default);border-radius:4px;flex-shrink:0;justify-content:center;align-items:center;margin-right:16px;padding:2px 8px;font-size:16px;font-weight:500;line-height:20px;display:flex;position:relative;overflow:hidden}.bd-tab-item:last-child{margin:0}.bd-tab-item:hover,.bd-tab-item.selected{color:var(--interactive-text-active)}.bd-tab-item.selected{cursor:default;background-color:var(--interactive-background-selected)}.bd-tab-item:hover{background-color:var(--interactive-background-hover)}.bd-tab-item:active{background-color:var(--interactive-background-active)}";
var _p = ".bd-text-input{box-sizing:border-box;border-radius:var(--radius-sm);min-width:250px;color:var(--text-default);background-color:var(--input-background-default);border:1px solid var(--input-border-default);height:40px;padding:10px;font-size:16px}.bd-text-input:focus-within{border-color:var(--bd-brand)}.bd-text-input:disabled{cursor:not-allowed;opacity:.5}";
var Vp = "#bd-toasts{pointer-events:none;z-index:1003;flex-direction:column;justify-content:flex-end;align-items:center;gap:10px;padding-bottom:40px;display:flex;position:absolute;inset:0}.bd-toast{--toast-bg:hsl(218,calc(var(--saturation-factor,1)*14%),15%);--toast-fg:var(--text-default);pointer-events:none;user-select:none;background-color:var(--toast-bg);border-radius:var(--radius-xl);box-shadow:var(--shadow-high);color:var(--toast-fg);flex-shrink:0;align-items:center;padding:5px;font-size:16px;font-weight:500;display:flex;overflow:hidden}.bd-toast span,.bd-toast svg{padding:5px}.bd-toast svg{width:20px;height:20px;stroke:var(--toast-fg);padding-right:unset}.bd-toast.toast-info{--toast-bg:hsl(219,calc(var(--saturation-factor,1)*29%),13%);--toast-fg:hsl(216,calc(var(--saturation-factor,1)*76%),57%)}.bd-toast.toast-success{--toast-bg:hsl(168,calc(var(--saturation-factor,1)*24%),12%);--toast-fg:hsl(145,calc(var(--saturation-factor,1)*54%),49%)}.bd-toast.toast-warning{--toast-bg:hsl(37,calc(var(--saturation-factor,1)*22%),14%);--toast-fg:hsl(43,calc(var(--saturation-factor,1)*96%),56%)}.bd-toast.toast-error{--toast-bg:hsl(337,calc(var(--saturation-factor,1)*21%),12%);--toast-fg:hsl(0,calc(var(--saturation-factor,1)*54%),60%)}";
var Gp = ".bd-layer{position:absolute}.bd-tooltip{box-sizing:border-box;word-wrap:break-word;z-index:1002;will-change:opacity,transform;max-width:190px;box-shadow:var(--elevation-high);color:var(--text-strong);border-radius:5px;font-size:14px;font-weight:500;line-height:16px;position:relative}.bd-tooltip-content{padding:8px 12px;overflow:hidden}.bd-tooltip-pointer{pointer-events:none;border:5px solid #0000;width:0;height:0}.bd-tooltip-primary{background-color:var(--background-base-low);color:var(--text-default)}.bd-tooltip-primary .bd-tooltip-pointer{border-top-color:var(--background-base-lowest)}.bd-tooltip-info{background-color:#4a90e2}.bd-tooltip-info .bd-tooltip-pointer{border-top-color:#4a90e2}.bd-tooltip-success{background-color:#43b581}.bd-tooltip-success .bd-tooltip-pointer{border-top-color:#43b581}.bd-tooltip-danger{background-color:#f04747}.bd-tooltip-danger .bd-tooltip-pointer{border-top-color:#f04747}.bd-tooltip-warn{background-color:#ffa600}.bd-tooltip-warn .bd-tooltip-pointer{border-top-color:#ffa600}.bd-tooltip-top .bd-tooltip-pointer{margin-left:-5px;position:absolute;top:100%;left:50%}.bd-tooltip-bottom .bd-tooltip-pointer{margin-left:-5px;position:absolute;bottom:100%;left:50%;transform:rotate(180deg)}.bd-tooltip-right .bd-tooltip-pointer{border-left-width:5px;margin-top:-5px;position:absolute;top:50%;right:100%;transform:rotate(90deg)}.bd-tooltip-left .bd-tooltip-pointer{border-left-width:5px;margin-top:-5px;position:absolute;top:50%;left:100%;transform:rotate(270deg)}";
var Kp = ".bd-filled-checkmark{color:var(--interactive-text-active);background:#43b581;border-radius:50%;justify-content:center;align-items:center;margin-right:4px;padding:3px;display:flex}.bd-empty-updates{color:var(--text-strong);flex-direction:column;justify-content:center;align-items:center;font-size:16px;font-weight:500;display:flex}.bd-empty-updates svg{color:#43b581;margin-bottom:20px}.bd-button.bd-button-icon svg{color:var(--interactive-text-default)}.bd-button.bd-button-icon:hover svg{color:var(--interactive-text-hover)}.bd-button.bd-button-icon.animate{animation:.5s linear infinite bd-update-spin}.bd-button.bd-button-icon.no-animate{animation:none!important}.bd-settings-group-title .bd-button-icon{margin-left:3px;margin-right:-8px}@keyframes bd-update-spin{0%{transform:rotate(0)}50%{transform:rotate(180deg)}to{transform:rotate(360deg)}}";
var $p = ".bd-empty-image-container{flex-direction:column;align-items:center;max-width:340px;margin:150px auto 0;display:flex}.bd-empty-image-title{color:var(--text-strong);text-align:center;margin:16px 0 8px;font-size:24px;font-weight:600}.bd-empty-image-message{color:var(--text-default);text-align:center;margin-bottom:16px}";
var Zp = ".bd-empty-results{color:var(--text-default);flex-direction:column;align-items:center;margin-top:100px;font-size:16px;line-height:24px;display:flex}.bd-empty-results-text{text-align:center;width:280px;margin-top:40px}";
var Xp = ".bd-button{box-sizing:border-box;border-radius:var(--radius-sm);user-select:none;background:0 0;border:none;justify-content:center;align-items:center;padding:2px 16px;font-size:14px;font-weight:500;line-height:16px;display:flex;position:relative}.bd-button:disabled{cursor:not-allowed;opacity:.5}.bd-button .bd-button-content{--button--underline-color:transparent;background-image:linear-gradient(0deg,transparent,transparent 1px,var(--button--underline-color)0,var(--button--underline-color)2px,transparent 0);justify-content:center;align-items:center;display:flex}.bd-button:disabled .bd-button-content{background-image:none!important}.bd-button-outlined:disabled{background-color:#0000!important}.bd-button-tiny{width:52px;min-width:52px;height:24px;min-height:24px}.bd-button-small{width:60px;min-width:60px;height:32px;min-height:32px}.bd-button-medium{width:96px;min-width:96px;height:38px;min-height:38px}.bd-button-large{width:130px;min-width:130px;height:44px;min-height:44px}.bd-button-xlarge{width:148px;min-width:148px;height:50px;min-height:50px;padding:2px 20px;font-size:16px;line-height:normal}.bd-button-icon{height:auto;padding:4px}.bd-button-grow,.bd-button-icon{width:auto}.bd-button-filled{-webkit-transition:background-color .17s,color .17s;transition:background-color .17s,color .17s}.bd-button-outlined{border-style:solid;border-width:1px;-webkit-transition:color .17s,background-color .17s,border-color .17s;transition:color .17s,background-color .17s,border-color .17s}.bd-button-blank{color:currentColor;background:0 0;border:0;margin:0}.bd-button-filled .bd-button-content,.bd-button-link .bd-button-content,.bd-button-outlined .bd-button-content{white-space:nowrap;text-overflow:ellipsis;margin:0 auto;overflow:hidden}.bd-button-filled.bd-button-color-brand{color:var(--white-500);background-color:var(--bd-brand)}.bd-button-filled.bd-button-color-brand:hover{background-color:var(--bd-brand-hover)}.bd-button-filled.bd-button-color-brand:active{background-color:var(--bd-brand-active)}.bd-button-filled.bd-button-color-brand:disabled{background-color:var(--bd-brand);opacity:.4}.bd-button-outlined.bd-button-color-brand{color:var(--control-secondary-text-default);border-color:var(--control-secondary-border-default)}.bd-button-outlined.bd-button-color-brand:hover{background-color:var(--button-outline-brand-background-hover);border-color:var(--control-secondary-border-hover);color:var(--control-secondary-text-hover)}.bd-button-outlined.bd-button-color-brand:active{background-color:var(--control-secondary-background-active);border-color:var(--button-outline-brand-border-active);color:var(--control-secondary-text-active)}.bd-button-link.bd-button-color-brand{color:var(--bd-brand)}.bd-button-link.bd-button-color-brand:hover .bd-button-content{--button--underline-color:var(--bd-brand)}.bd-button-filled.bd-button-color-blurple{color:var(--white-500);background-color:var(--brand-experiment)}.bd-button-filled.bd-button-color-blurple:hover{background-color:var(--brand-experiment-560)}.bd-button-filled.bd-button-color-blurple:active{background-color:var(--brand-experiment-600)}.bd-button-filled.bd-button-color-blurple:disabled{background-color:var(--brand-experiment)}.bd-button-outlined.bd-button-color-blurple{color:var(--control-secondary-text-default);border-color:var(--control-secondary-border-default)}.bd-button-outlined.bd-button-color-blurple:hover{background-color:var(--button-outline-brand-background-hover);border-color:var(--control-secondary-border-hover);color:var(--control-secondary-text-hover)}.bd-button-outlined.bd-button-color-blurple:active{background-color:var(--control-secondary-background-active);border-color:var(--button-outline-brand-border-active);color:var(--control-secondary-text-active)}.bd-button-link.bd-button-color-blurple{color:var(--brand-experiment)}.bd-button-link.bd-button-color-blurple:hover .bd-button-content{--button--underline-color:var(--brand-experiment)}.bd-button-filled.bd-button-color-yellow{color:var(--white-500);background-color:var(--status-warning)}.bd-button-filled.bd-button-color-yellow:active,.bd-button-filled.bd-button-color-yellow:hover{background-color:null}.bd-button-filled.bd-button-color-yellow:disabled{background-color:var(--status-warning)}.bd-button-outlined.bd-button-color-yellow{color:var(--status-warning);border-color:var(--status-warning)}.bd-button-outlined.bd-button-color-yellow:active{background-color:hsl(var(--yellow-300-hsl)/.1)}.bd-button-link.bd-button-color-yellow{color:var(--status-warning)}.bd-button-link.bd-button-color-yellow:hover .bd-button-content{--button--underline-color:var(--status-warning)}.bd-button-filled.bd-button-color-link{color:var(--white-500);background-color:var(--text-link)}.bd-button-filled.bd-button-color-link:active,.bd-button-filled.bd-button-color-link:hover{background-color:null}.bd-button-filled.bd-button-color-link:disabled{background-color:var(--text-link)}.bd-button-outlined.bd-button-color-link{color:var(--text-link);border-color:var(--text-link)}.bd-button-outlined.bd-button-color-link:active{background-color:hsl(var(--text-link-hsl)/.1)}.bd-button-link.bd-button-color-link{color:var(--text-link)}.bd-button-link.bd-button-color-link:hover .bd-button-content{--button--underline-color:var(--text-link)}.bd-button-filled.bd-button-color-white{color:var(--primary-500);background-color:var(--white-500)}.bd-button-filled.bd-button-color-white:active,.bd-button-filled.bd-button-color-white:hover{background-color:null}.bd-button-filled.bd-button-color-white:disabled{background-color:var(--white-500)}.bd-button-outlined.bd-button-color-white{color:var(--white-500);border-color:var(--white-500)}.bd-button-outlined.bd-button-color-white:active{background-color:hsl(var(--white-500-hsl)/.1)}.bd-button-link.bd-button-color-white{color:var(--white-500)}.bd-button-link.bd-button-color-white:hover .bd-button-content{--button--underline-color:var(--white-500)}.bd-button-filled.bd-button-color-red{color:var(--white-500);background-color:var(--control-critical-primary-background-default)}.bd-button-filled.bd-button-color-red:hover{background-color:var(--control-critical-primary-background-hover)}.bd-button-filled.bd-button-color-red:active{background-color:var(--control-critical-primary-background-active)}.bd-button-outlined.bd-button-color-red{color:var(--control-critical-secondary-text-default);border-color:var(--control-critical-secondary-border-default)}.bd-button-outlined.bd-button-color-red:hover{background-color:var(--control-critical-secondary-border-hover);border-color:var(--control-critical-secondary-border-hover);color:var(--control-critical-secondary-border-hover)}.bd-button-outlined.bd-button-color-red:active{background-color:var(--control-critical-secondary-background-active);border-color:var(--control-critical-secondary-border-active);color:var(--control-critical-secondary-text-active)}.bd-button-link.bd-button-color-red{color:var(--text-danger)}.bd-button-link.bd-button-color-red:hover .bd-button-content{--button--underline-color:var(--text-danger)}.bd-button-filled.bd-button-color-green{color:var(--white-500);background-color:var(--control-connect-background-default)}.bd-button-filled.bd-button-color-green:hover{background-color:var(--control-connect-background-hover)}.bd-button-filled.bd-button-color-green:active{background-color:var(--control-connect-background-active)}.bd-button-outlined.bd-button-color-green{color:var(--control-primary-text-default);border-color:var(--control-connect-border-default)}.bd-button-outlined.bd-button-color-green:hover{background-color:var(--control-connect-background-hover);border-color:var(--control-connect-border-hover);color:var(--control-primary-text-hover)}.bd-button-outlined.bd-button-color-green:active{background-color:var(--control-connect-background-active);border-color:var(--control-connect-border-active);color:var(--control-primary-text-active)}.bd-button-link.bd-button-color-green{color:var(--green-360)}.bd-button-link.bd-button-color-green:hover .bd-button-content{--button--underline-color:var(--green-360)}.bd-button-outlined.bd-button-color-primary{color:var(--button-outline-primary-text);border-color:var(--control-secondary-border-default)}.bd-button-outlined.bd-button-color-primary:hover{background-color:var(--control-secondary-background-hover);border-color:var(--control-secondary-border-hover);color:var(--control-secondary-text-hover)}.bd-button-outlined.bd-button-color-primary:active{background-color:var(--control-secondary-background-active);border-color:var(--control-secondary-border-active);color:var(--control-secondary-text-active)}.bd-button-filled.bd-button-color-primary{color:var(--text-default);background-color:var(--control-secondary-background-default)}.bd-button-filled.bd-button-color-primary:hover{background-color:var(--control-secondary-background-hover)}.bd-button-filled.bd-button-color-primary:active{background-color:var(--control-secondary-background-active)}.theme-dark .bd-button-link.bd-button-color-primary{color:var(--white-500)}.theme-dark .bd-button-link.bd-button-color-primary:hover .bd-button-content{--button--underline-color:var(--white-500)}.theme-light .bd-button-link.bd-button-color-primary{color:var(--primary-400)}.theme-light .bd-button-link.bd-button-color-primary:hover .bd-button-content{--button--underline-color:var(--primary-400)}.theme-dark .bd-button-filled.bd-button-color-transparent{color:var(--primary-100);background-color:hsl(var(--white-500-hsl)/.1)}.theme-dark .bd-button-filled.bd-button-color-transparent:hover{background-color:hsl(var(--white-500-hsl)/.05)}.theme-dark .bd-button-filled.bd-button-color-transparent:active{background-color:hsl(var(--white-500-hsl)/.01)}.theme-dark .bd-button-filled.bd-button-color-transparent:disabled{background-color:hsl(var(--white-500-hsl)/.1)}.theme-dark .bd-button-outlined.bd-button-color-transparent{color:var(--primary-200);border-color:var(--primary-200)}.theme-dark .bd-button-outlined.bd-button-color-transparent:active{background-color:hsl(var(--primary-200-hsl)/.1)}.theme-dark .bd-button-link.bd-button-color-transparent{color:var(--primary-200)}.theme-dark .bd-button-link.bd-button-color-transparent:hover .bd-button-content{--button--underline-color:var(--primary-200)}.theme-light .bd-button-filled.bd-button-color-transparent{color:var(--primary-400);background-color:hsl(var(--primary-400-hsl)/.01)}.theme-light .bd-button-filled.bd-button-color-transparent:hover{background-color:hsl(var(--primary-400-hsl)/.2)}.theme-light .bd-button-filled.bd-button-color-transparent:active{background-color:hsl(var(--primary-400-hsl)/.25)}.theme-light .bd-button-filled.bd-button-color-transparent:disabled{background-color:hsl(var(--primary-400-hsl)/.01)}.theme-light .bd-button-outlined.bd-button-color-transparent{color:var(--primary-400);border-color:var(--primary-400)}.theme-light .bd-button-outlined.bd-button-color-transparent:active{background-color:hsl(var(--primary-400-hsl)/.1)}.theme-light .bd-button-link.bd-button-color-transparent{color:var(--primary-400)}.theme-light .bd-button-link.bd-button-color-transparent:hover .bd-button-content{--button--underline-color:var(--primary-400)}";
var Jp = ".bd-spinner{justify-content:center;align-items:center;display:flex}.bd-spinner-inner{contain:paint;justify-content:center;align-items:center;width:32px;height:32px;display:inline-flex;position:relative}.bd-spinner-spinning-circle,.bd-spinner-spinning-circle-simple{width:100%}:where(.bd-spinner-spinning-circle,.bd-spinner-spinning-circle-simple) .bd-spinner-inner{transform:rotate(280deg)}.bd-spinner-circular{width:100%;height:100%;animation:2s linear infinite bd-spinner-spinning-circle-rotate}.bd-spinner-circular .bd-spinner-path{stroke-dasharray:1 200;stroke-dashoffset:0;fill:none;stroke-width:6px;stroke-miterlimit:10;stroke-linecap:round;stroke:var(--brand-500);animation:2s ease-in-out infinite bd-spinner-spinning-circle-dash}.bd-spinner-circular .bd-spinner-path:nth-last-child(3){stroke:var(--text-brand);animation-delay:.23s}.bd-spinner-circular .bd-spinner-path:nth-last-child(2){stroke:var(--text-brand);opacity:.6;animation-delay:.15s}.bd-spinner-low-motion .bd-spinner-path{background-color:var(--interactive-text-normal);opacity:.3;border-radius:3px;width:6px;height:6px;margin-right:2px;animation:1.4s ease-in-out infinite bd-spinner-low-motion;display:inline-block}.bd-spinner-low-motion .bd-spinner-path:nth-child(2){animation-delay:.2s}.bd-spinner-low-motion .bd-spinner-path:nth-child(3){animation-delay:.4s}.bd-spinner-chasing-dots .bd-spinner-inner{animation:2s linear infinite bd-spinner-chasing-dots-rotate}.bd-spinner-chasing-dots .bd-spinner-path{background-color:var(--brand-500);border-radius:100%;width:60%;height:60%;animation:2s ease-in-out infinite bd-spinner-chasing-dots-bounce;display:inline-block;position:absolute;top:0}.bd-spinner-chasing-dots .bd-spinner-path:last-child{animation-delay:-1s;top:auto;bottom:0}.bd-spinner-wandering-cubes .bd-spinner-path{background-color:var(--brand-400);width:10px;height:10px;animation:1.8s ease-in-out infinite bd-spinner-wandering-cubes;position:absolute;top:0;left:0}.bd-spinner-wandering-cubes .bd-spinner-path:last-child{animation-delay:.9s}.bd-spinner-pulsing-ellipsis .bd-spinner-inner{justify-content:center;width:28px;height:auto;display:flex;position:relative}.bd-spinner-pulsing-ellipsis .bd-spinner-path{background-color:var(--primary-100);opacity:.3;border-radius:3px;width:6px;height:6px;margin-right:2px;animation:1.4s ease-in-out infinite bd-spinner-pulsing-ellipsis;display:inline-block}.bd-spinner-pulsing-ellipsis .bd-spinner-path:nth-child(2){animation-delay:.2s}.bd-spinner-pulsing-ellipsis .bd-spinner-path:nth-child(3){animation-delay:.4s}@keyframes bd-spinner-low-motion{0%{opacity:1}50%{opacity:.6}to{opacity:1}}@keyframes bd-spinner-spinning-circle-rotate{to{transform:rotate(360deg)}}@keyframes bd-spinner-spinning-circle-dash{0%{stroke-dasharray:1 200;stroke-dashoffset:0}50%{stroke-dasharray:130 200}to{stroke-dasharray:130 200;stroke-dashoffset:-124px}}@keyframes bd-spinner-chasing-dots-rotate{to{transform:rotate(360deg)}}@keyframes bd-spinner-chasing-dots-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes bd-spinner-wandering-cubes{25%{transform:translate(22px)rotate(-90deg)scale(.5)}50%{transform:translate(22px)translateY(22px)rotate(-180deg)}75%{transform:translate(0)translateY(22px)rotate(-270deg)scale(.5)}to{transform:rotate(-360deg)}}@keyframes bd-spinner-pulsing-ellipsis{0%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(.8)}to{opacity:1;transform:scale(1)}}";
var Yp = ".bd-search-wrapper{background-color:var(--background-base-lowest);color:var(--text-default);border:0;border-radius:3px;outline:none;align-items:center;padding:3px;display:flex}.bd-search{color:var(--text-default);background:0 0;border:0;flex:1;padding:2px 3px}.bd-search::-webkit-input-placeholder{color:var(--text-default)}.bd-search-wrapper>svg{color:var(--interactive-text-default);margin-right:2px}.bd-search-wrapper>.bd-button{background:0 0;margin-right:2px;padding:0}.bd-search-wrapper>.bd-button>svg .fill{fill:var(--interactive-text-default)}.bd-search-wrapper>.bd-button:hover>svg .fill{fill:var(--interactive-text-hover)}";
var Qp = ".bd-text-normal{color:var(--text-default)}.bd-text-muted{color:var(--text-muted)}.bd-text-error{color:var(--red-400)}.bd-text-brand{color:var(--text-brand)}.bd-text-link{color:var(--text-link)}.bd-header-primary{color:var(--text-strong)}.bd-header-secondary{color:var(--text-default)}.bd-text-yellow{color:var(--text-feedback-warning)}.bd-text-green{color:var(--text-feedback-positive)}.bd-text-red{color:var(--status-danger)}.bd-text-white{color:var(--white-500)}.bd-text-10{font-size:10px;line-height:12px}.bd-text-12{font-size:12px;line-height:16px}.bd-text-14{font-size:14px;line-height:18px}.bd-text-16{font-size:16px;line-height:20px}.bd-text-20{font-size:20px;line-height:24px}.bd-text-24{font-size:24px;line-height:30px}.bd-text-32{font-size:32px;line-height:40px}.bd-text-strong{font-weight:600}.bd-selectable{user-select:text}";
var em = vp + wp + kp + Cp + Sp + Lp + Ip + Ap + Tp + Ep + Mp + Dp + Pp + zp + Bp + Np + Fp + Op + Rp + Up + jp + qp + Hp + Wp + _p + Vp + Gp + Kp + $p + Zp + Xp + Jp + Yp + Qp + ":root{--bd-brand:#3e82e5;--bd-brand-hover:#3875ce;--bd-brand-active:#3268b7}.bd-chat-badge{vertical-align:bottom;height:1.25rem;line-height:1.375rem;display:inline-block}.bd-member-badge{height:15px;margin-left:4px}.bd-link{text-decoration:none}.bd-link:hover{text-decoration:underline}.bd-divider{border:none;border-top:thin solid var(--border-subtle);width:100%;height:1px;margin:0}.bd-version-info{cursor:pointer}.bd-settings-title-extend{width:100%}.bd-settings-page-title-children{margin-left:auto;margin-right:12px}";
ve();
Bn();
I();
_();
_e();
po();
et();
I();
oe();

function Ms({
    type: a
}) {
    switch (a) {
        case "info":
            return i.createElement(je, {
                size: "24px"
            });
        case "success":
            return i.createElement(zt, {
                size: "24px"
            });
        case "warning":
            return i.createElement(Qe, {
                size: "24px"
            });
        case "error":
            return i.createElement(Pt, {
                size: "24px"
            });
        default:
            return null
    }
}
Yt();
be();
var Ds = C.ReactSpring;

function Kv({
    content: a,
    type: e,
    icon: t,
    style: o
}) {
    return i.createElement(Ds.animated.div, {
        className: O("bd-toast", `toast-${e}`),
        style: o
    }, t && i.createElement(Ms, {
        type: e
    }), i.createElement("span", null, a))
}

function $v() {
    let a = ye(q, () => q.toasts),
        e = Ds.useTransition(a, {
            keys: t => t.key,
            from: {
                opacity: 0,
                transform: "translateY(100%)"
            },
            enter: {
                opacity: 1,
                transform: "translateY(0px)"
            },
            leave: {
                opacity: 0,
                transform: "translateY(100%)"
            },
            config: Ds.config.stiff
        });
    return i.createElement(nl, null, e((t, o) => i.createElement(Kv, {
        key: o.key,
        content: o.content,
        type: o.type,
        icon: o.icon,
        style: t
    })))
}
var qr = class a {
    static root;
    static initialize() {
        let e = document.createElement("div");
        e.id = "bd-toasts", P.bdBody.appendChild(e), a.root = gt.createRoot(e), a.root.render(i.createElement($v))
    }
};
Kt();
I();
_e();
me();
et();
_();
V();
oe();
pe();
ee();
ve();
pt();
var Ps = class {
        static activeNotifications = new Map;
        static async initialize() {
            let e = C.SimpleMarkdownWrapper.defaultRules.codeBlock,
                t = await Oe(F.byKeys(["codeActions"]), {
                    firstId: 992595,
                    cacheId: "core-mdinstallcss-codeBlockStyles"
                });
            !e.react || typeof e.react != "function" || ($.after("InstallCSS", e, "react", (o, [r], n) => {
                if (!w.get("customcss", "customcss") || !r.content || n?.type !== "pre" || r?.lang?.toLowerCase() !== "css") return;
                let l = ke(n, c => c?.className?.includes("codeActions"), {
                    walkable: ["props", "children"]
                });
                if (!l || !r?.content) return;
                let u = Array.isArray(l.children) ? l.children : [l.children];
                l.children = [...u, i.createElement(Yo, {
                    style: {
                        cursor: "pointer"
                    },
                    size: "16px",
                    key: "icon",
                    onClick: async c => {
                        if (c.shiftKey) {
                            r.content && this.handleCSSInstall(r.content);
                            return
                        }
                        z.showConfirmationModal(p("Modals.confirmAction"), p("Modals.installCss"), {
                            confirmText: p("Modals.okay"),
                            cancelText: p("Modals.cancel"),
                            onConfirm: () => r?.content && this.handleCSSInstall(r.content)
                        })
                    }
                })]
            }), P.injectStyle("bd-installcss", `.${t.markup} .${t.codeContainer}:hover .${t.codeActions} {
                display: flex;
                flex-direction: row-reverse;
                gap: 8px;
            }`))
        }
        static handleCSSInstall(e) {
            try {
                let o = (Xe.savedCss || "") + `
` + e;
                Xe.saveCSS(o), Xe.insertCSS(o), q.show(p("CustomCSS.cssInstallSuccess"), {
                    type: "success"
                });
                let r = `css-undo-${Date.now()}`;
                this.activeNotifications.set(r, e), na.show({
                    id: r,
                    title: p("CustomCSS.cssInstalled"),
                    content: p("CustomCSS.cssReverting"),
                    type: "warning",
                    duration: 1e4,
                    actions: [{
                        label: "Keep",
                        onClick: () => this.keepChanges(r)
                    }],
                    onClose: () => this.revertCSS(r)
                })
            } catch (t) {
                b.log("InstallCSS", "Failed to install CSS:", t), q.show(p("CustomCSS.cssInstallError"), {
                    type: "error"
                })
            }
        }
        static keepChanges(e) {
            this.activeNotifications.delete(e), q.show(p("CustomCSS.cssKept"), {
                type: "success"
            })
        }
        static revertCSS(e) {
            let t = this.activeNotifications.get(e);
            if (!t) return;
            let r = (Xe.savedCss || "").replace(t, "");
            Xe.saveCSS(r), Xe.insertCSS(r), this.activeNotifications.delete(e), q.show(p("CustomCSS.cssReverted"), {
                type: "error"
            })
        }
    },
    tm = Ps;
pe();
Kt();
var am = new class {
    hasStarted = !1;
    trustBetterDiscordProtocol() {
        $.after("BetterDiscordProtocol", La("MaskedLinkStore"), "isTrustedProtocol", (e, [t], o) => o || t.startsWith("betterdiscord://"))
    }
    async startup() {
        if (this.hasStarted) return;
        this.hasStarted = !0, J.getSystemAccentColor().then(r => P.injectStyle("bd-os-values", `:root {--os-accent-color: #${r};}`)), this.trustBetterDiscordProtocol(), b.log("Startup", "Injecting BD Styles"), P.injectStyle("bd-stylesheet", em.toString()), b.log("Startup", "Initializing AddonStore"), Ze.initialize(), b.log("Startup", "Initializing LocaleManager"), On.initialize(), b.log("Startup", "Initializing Settings"), w.initialize(), To.initialize(), b.log("Startup", "Initializing DOMManager"), P.initialize(), b.log("Startup", "Initializing CommandManager"), ea.initialize(), b.log("Startup", "Initializing Internal InstallCSS"), tm.initialize(), b.log("Startup", "Waiting for connection..."), await this.waitForConnection(), b.log("Startup", "Initializing FloatingWindows"), Qt.initialize(), b.log("Startup", "Initializing Toasts"), qr.initialize(), b.log("Startup", "Initializing Builtins");
        for (let r in Yn) Yn[r].initialize();
        b.log("Startup", "Loading Plugins");
        let e = le.initialize();
        b.log("Startup", "Loading Themes");
        let t = Ee.initialize();
        b.log("Startup", "Initializing Updater"), jr.initialize(), b.log("Startup", "Removing Loading Icon"), no.hide(), b.log("Startup", "Collecting Startup Errors"), z.showAddonErrors({
            plugins: e,
            themes: t
        });
        let o = Q.get("misc", "version");
        W.get("version") !== o && (z.showChangelogModal(nn), Q.set("misc", "version", W.get("version")))
    }
    waitForConnection() {
        return new Promise(e => {
            if (Pe.UserStore?.getCurrentUser()) return e();
            C.Dispatcher?.subscribe("CONNECTION_OPEN", e)
        })
    }
};
ee();
tt();
Bt();
_();
He();
var Hr = class {
    #e;
    constructor(e) {
        this.#e = e
    }
    get folder() {
        return this.#e.addonFolder
    }
    isEnabled(e) {
        return this.#e.isEnabled(e)
    }
    enable(e) {
        return this.#e.enableAddon(e)
    }
    disable(e) {
        return this.#e.disableAddon(e)
    }
    toggle(e) {
        return this.#e.toggleAddon(e)
    }
    reload(e) {
        return this.#e.reloadAddon(e)
    }
    get(e) {
        return this.#e.getAddon(e)
    }
    getAll() {
        return this.#e.addonList.map(e => this.#e.getAddon(e.id))
    }
};
Object.freeze(Hr);
Object.freeze(Hr.prototype);
var zs = Hr;
Dt();
var Wr = class {
    #e = "";
    constructor(e) {
        e && (this.#e = e)
    }
    save(...e) {
        return this.#e ? Q.setData(this.#e, ...e) : Q.setData(...e)
    }
    load(...e) {
        return this.#e ? Q.getData(this.#e, e[0]) : Q.getData(e[0], e[1])
    }
    async recache(...e) {
        let t = this.#e || e[0];
        return Q.recache(t)
    }
    delete(...e) {
        return this.#e ? Q.deleteData(this.#e, e[0]) : Q.deleteData(e[0], e[1])
    }
};
Object.freeze(Wr);
Object.freeze(Wr.prototype);
var Bs = Wr;
_e();
var _r = class {
    get screenWidth() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    }
    get screenHeight() {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    }
    #e = "";constructor(e) {
        e && (this.#e = e)
    }
    addStyle(...e) {
        if (e.length === 1)
            if (this.#e) e.unshift(this.#e);
            else throw new Error("No css provided");
        P.injectStyle(e[0], e[1])
    }
    removeStyle(...e) {
        let t = e[0];
        if (this.#e && arguments.length === 0 && (t = this.#e), !t) throw new Error("No id provided");
        P.removeStyle(t)
    }
    onRemoved(e, t) {
        return P.onRemoved(e, t)
    }
    onAdded(e, t) {
        return P.onAdded(e, t)
    }
    animate(e, t, o = {}) {
        return P.animate({
            update: e,
            duration: t,
            timing: o.timing
        })
    }
    createElement(e, t = {}, ...o) {
        return P.createElement(e, t, ...o)
    }
    parseHTML(e, t = !1) {
        return P.parseHTML(e, t)
    }
};
Object.freeze(_r);
Object.freeze(_r.prototype);
var Ns = _r;
ee();
Kt();

function Mo(a) {
    return typeof a != "object" && typeof a != "function" && a !== null
}
var Vr = class {
    #e = "";
    constructor(e) {
        e && (this.#e = e)
    }
    before(...e) {
        if (!this.#e && !e[3]) throw new Error("Trying to use shorthand without a bound api");
        if (this.#e) {
            let [s, d, l] = e;
            if (typeof l != "function") throw new Error("3rd parameter should be function");
            if (typeof d != "string") throw new Error("2nd parameter should be function name");
            if (Mo(s)) throw new Error("1st parameter should be module");
            return $.pushChildPatch(this.#e, s, d, l, {
                type: "before"
            })
        }
        let [t, o, r, n] = e;
        if (typeof n != "function") throw new Error("4th parameter should be function");
        if (typeof r != "string") throw new Error("3rd parameter should be function name");
        if (Mo(o)) throw new Error("2nd parameter should be module");
        if (typeof t != "string") throw new Error("1st parameter should be string");
        return $.pushChildPatch(t, o, r, n, {
            type: "before"
        })
    }
    instead(...e) {
        if (!this.#e && !e[3]) throw new Error("Trying to use shorthand without a bound api");
        if (this.#e) {
            let [s, d, l] = e;
            if (typeof l != "function") throw new Error("3rd parameter should be function");
            if (typeof d != "string") throw new Error("2nd parameter should be function name");
            if (Mo(s)) throw new Error("1st parameter should be module");
            return $.pushChildPatch(this.#e, s, d, l, {
                type: "instead"
            })
        }
        let [t, o, r, n] = e;
        if (typeof n != "function") throw new Error("4th parameter should be function");
        if (typeof r != "string") throw new Error("3rd parameter should be function name");
        if (Mo(o)) throw new Error("2nd parameter should be module");
        if (typeof t != "string") throw new Error("1st parameter should be string");
        return $.pushChildPatch(t, o, r, n, {
            type: "instead"
        })
    }
    after(...e) {
        if (!this.#e && !e[3]) throw new Error("Trying to use shorthand without a bound api");
        if (this.#e) {
            let [s, d, l] = e;
            if (typeof l != "function") throw new Error("3rd parameter should be function");
            if (typeof d != "string") throw new Error("2nd parameter should be function name");
            if (Mo(s)) throw new Error("1st parameter should be module");
            return $.pushChildPatch(this.#e, s, d, l, {
                type: "after"
            })
        }
        let [t, o, r, n] = e;
        if (typeof n != "function") throw new Error("4th parameter should be function");
        if (typeof r != "string") throw new Error("3rd parameter should be function name");
        if (Mo(o)) throw new Error("2nd parameter should be module");
        if (typeof t != "string") throw new Error("1st parameter should be string");
        return $.pushChildPatch(t, o, r, n, {
            type: "after"
        })
    }
    getPatchesByCaller(e) {
        return this.#e && (e = this.#e), typeof e != "string" ? b.err("BdApi.Patcher", "Parameter 0 of getPatchesByCaller must be a string representing the caller") : $.getPatchesByCaller(e)
    }
    unpatchAll(e) {
        if (this.#e && (e = this.#e), typeof e != "string") return b.err("BdApi.Patcher", "Parameter 0 of unpatchAll must be a string representing the caller");
        $.unpatchAll(e)
    }
};
Object.freeze(Vr);
Object.freeze(Vr.prototype);
var Fs = Vr;
ze();
ve();
et();
_();
_e();
be();
var Gr = class {
    static __baseClass;
    static __errorPageClass;
    static get baseClass() {
        return this.__baseClass ??= C.NoticesBaseClasses?.base
    }
    static get errorPageClass() {
        return this.__errorPageClass ??= C.NoticesPageClasses?.errorPage
    }
    static info(e, t = {}) {
        return this.show(e, Object.assign({}, t, {
            type: "info"
        }))
    }
    static warn(e, t = {}) {
        return this.show(e, Object.assign({}, t, {
            type: "warning"
        }))
    }
    static error(e, t = {}) {
        return this.show(e, Object.assign({}, t, {
            type: "error"
        }))
    }
    static success(e, t = {}) {
        return this.show(e, Object.assign({}, t, {
            type: "success"
        }))
    }
    static createElement(e, t = {}, ...o) {
        let r = document.createElement(e);
        Object.assign(r, t);
        let n = o.filter(s => s);
        return n.length > 0 && r.append(...n), r
    }
    static show(e, t = {}) {
        let {
            type: o,
            buttons: r = [],
            timeout: n = 0,
            onClose: s = () => {}
        } = t;
        if (!this.ensureContainer()) return;
        let l = function(c = !1) {
                if (s?.(), c) return u.remove();
                u.classList.add("bd-notice-closing"), setTimeout(() => {
                    u.remove()
                }, 300)
            },
            u = this.createElement("div", {
                className: O("bd-notice", o && `bd-notice-${o}`)
            }, this.createElement("div", {
                className: "bd-notice-close",
                onclick: l.bind(null, !1)
            }), this.createElement("span", {
                className: "bd-notice-content"
            }, e), ...r.map(c => !c || !c.label || typeof c.onClick != "function" ? null : this.createElement("button", {
                className: "bd-notice-button",
                onclick: c.onClick.bind(null, l)
            }, c.label)));
        return document.getElementById("bd-notices").appendChild(u), n > 0 && setTimeout(l, n), l
    }
    static ensureContainer() {
        if (document.getElementById("bd-notices")) return !0;
        let e = document.querySelector(`.${this.baseClass}`);
        if (!e) return !1;
        let t = this.createElement("div", {
            id: "bd-notices"
        });
        return e.prepend(t), P.onRemoved(e, async () => {
            if (!this.errorPageClass) return;
            (await new Promise(r => P.onAdded(`.${this.errorPageClass}`, r))).prepend(t)
        }), !0
    }
};
_e();
var Do = function(a) {
        return `${a}px`
    },
    Zv = ["primary", "info", "success", "warn", "danger"],
    Xv = ["top", "right", "bottom", "left"],
    Kr = class a {
        node;
        label;
        style;
        side;
        preventFlip;
        disabled;
        active;
        element;
        tooltipElement;
        labelElement;
        observer;
        constructor(e, t, o = {}) {
            let {
                style: r = "primary",
                side: n = "top",
                preventFlip: s = !1,
                disabled: d = !1
            } = o;
            if (this.node = e, this.label = t, this.style = r, this.side = n, this.preventFlip = s, this.disabled = d, this.active = !1, !Xv.includes(this.side)) throw new Error(`Tooltip - Side ${this.side} does not exist.`);
            if (!Zv.includes(this.style)) throw new Error(`Tooltip - Style ${this.style} does not exist.`);
            this.element = P.parseHTML('<div class="bd-layer">'), this.tooltipElement = P.parseHTML('<div class="bd-tooltip"><div class="bd-tooltip-pointer"></div><div class="bd-tooltip-content"></div></div>'), this.tooltipElement.classList.add(`bd-tooltip-${this.style}`), this.labelElement = this.tooltipElement.childNodes[1], t instanceof HTMLElement ? this.labelElement.append(t) : this.labelElement.textContent = t, this.element.append(this.tooltipElement), this.node.addEventListener("mouseenter", () => {
                this.disabled || this.show()
            }), this.node.addEventListener("mouseleave", () => {
                this.hide()
            })
        }
        static create(e, t, o = {}) {
            return new a(e, t, o)
        }
        get container() {
            return document.querySelector("#app-mount")
        }
        get canShowAbove() {
            return this.node.getBoundingClientRect().top - this.element.offsetHeight >= 0
        }
        get canShowBelow() {
            return this.node.getBoundingClientRect().top + this.node.offsetHeight + this.element.offsetHeight <= P.screenHeight
        }
        get canShowLeft() {
            return this.node.getBoundingClientRect().left - this.element.offsetWidth >= 0
        }
        get canShowRight() {
            return this.node.getBoundingClientRect().left + this.node.offsetWidth + this.element.offsetWidth <= P.screenWidth
        }
        hide() {
            this.active && (this.active = !1, this.element.remove())
        }
        show() {
            this.active || (this.active = !0, this.container.append(this.element), this.side == "top" && (this.canShowAbove || !this.canShowAbove && this.preventFlip ? this.showAbove() : this.showBelow()), this.side == "bottom" && (this.canShowBelow || !this.canShowBelow && this.preventFlip ? this.showBelow() : this.showAbove()), this.side == "left" && (this.canShowLeft || !this.canShowLeft && this.preventFlip ? this.showLeft() : this.showRight()), this.side == "right" && (this.canShowRight || !this.canShowRight && this.preventFlip ? this.showRight() : this.showLeft()), !this.observer && (this.observer = new MutationObserver(e => {
                e.forEach(t => {
                    let o = Array.from(t.removedNodes),
                        r = o.indexOf(this.node) > -1,
                        n = o.some(s => s.contains(this.node));
                    (r || n) && (this.hide(), this.observer?.disconnect())
                })
            }), this.observer.observe(document.body, {
                subtree: !0,
                childList: !0
            })))
        }
        showAbove() {
            this.tooltipElement.classList.add("bd-tooltip-top"), this.element.style.setProperty("top", Do(this.node.getBoundingClientRect().top - this.element.offsetHeight - 10)), this.centerHorizontally()
        }
        showBelow() {
            this.tooltipElement.classList.add("bd-tooltip-bottom"), this.element.style.setProperty("top", Do(this.node.getBoundingClientRect().top + this.node.offsetHeight + 10)), this.centerHorizontally()
        }
        showLeft() {
            this.tooltipElement.classList.add("bd-tooltip-left"), this.element.style.setProperty("left", Do(this.node.getBoundingClientRect().left - this.element.offsetWidth - 10)), this.centerVertically()
        }
        showRight() {
            this.tooltipElement.classList.add("bd-tooltip-right"), this.element.style.setProperty("left", Do(this.node.getBoundingClientRect().left + this.node.offsetWidth + 10)), this.centerVertically()
        }
        centerHorizontally() {
            let e = this.node.getBoundingClientRect().left + this.node.offsetWidth / 2;
            this.element.style.setProperty("left", Do(e - this.element.offsetWidth / 2))
        }
        centerVertically() {
            let e = this.node.getBoundingClientRect().top + this.node.offsetHeight / 2;
            this.element.style.setProperty("top", Do(e - this.element.offsetHeight / 2))
        }
    };
I();
ma();
me();
var om = {
    alert(a, e) {
        z.alert(a, e)
    },
    showNotification(a) {
        if (!w.get("settings", "general", "notificationEnabled")) return;
        let t = {
            ...{
                title: "",
                content: "",
                type: "info",
                duration: 5e3,
                icon: null,
                actions: []
            },
            ...a
        };
        return na.show(t)
    },
    createTooltip(a, e, t = {}) {
        return Kr.create(a, e, t)
    },
    showConfirmationModal(a, e, t = {}) {
        return z.showConfirmationModal(a, e, t)
    },
    showChangelogModal(a) {
        return z.showChangelogModal(a)
    },
    showInviteModal(a) {
        return z.showGuildJoinModal(a)
    },
    showToast(a, e = {}) {
        q.show(a, e)
    },
    showNotice(a, e = {}) {
        return Gr.show(a, e)
    },
    async openDialog(a) {
        let e = await J.openDialog(a);
        if (e.error) throw new Error(e.error);
        return e
    },
    buildSettingItem(a) {
        return Xn(a)
    },
    buildSettingsPanel({
        settings: a,
        onChange: e,
        onDrawerToggle: t,
        getDrawerState: o
    }) {
        if (!a?.length) throw new Error("No settings provided!");
        return i.createElement(ce, {
            id: "buildSettingsPanel",
            name: "BdApi.UI"
        }, a.map(r => {
            if (!r.id || !r.type) throw new Error("Setting item missing id or type");
            if (r.type === "category") {
                let n = r.hasOwnProperty("shown") ? r.shown : !0;
                return i.createElement(Va, {
                    ...r,
                    onChange: e,
                    onDrawerToggle: s => t?.(r.id, s),
                    shown: o?.(r.id, n) ?? n
                })
            }
            return Xn({
                ...r,
                onChange: n => {
                    r?.onChange?.(n), e(null, r.id, n)
                }
            })
        }))
    }
};
Object.freeze(om);
var Os = om;
be();
pt();
pe();
Ot();
var rm = {
    findInTree: ke,
    forceLoad: Kd,
    extend: Rt,
    debounce: io,
    escapeHTML(a) {
        let e = document.createTextNode(""),
            t = document.createElement("span");
        return t.append(e), e.nodeValue = a, t.innerHTML
    },
    className: O,
    getNestedValue(a, e) {
        return ft(a, e)
    },
    semverCompare: Rr,
    Store: we
};
Object.freeze(rm);
var Rs = rm;
ee();
pe();
var ya = (a, e = {}) => (a.length > 1 && typeof a[a.length - 1] == "object" && !Array.isArray(a[a.length - 1]) && a[a.length - 1] !== null && Object.assign(e, a.pop()), [a, e]),
    ut = {
        modules: ln,
        Stores: Pe,
        Filters: {
            byKeys(...a) {
                return F.byKeys(a)
            },
            byPrototypeKeys(...a) {
                return F.byPrototypeKeys(a)
            },
            byRegex(a) {
                return F.byRegex(a)
            },
            bySource(...a) {
                return F.bySource(...a)
            },
            byStrings(...a) {
                return F.byStrings(...a)
            },
            byDisplayName(a) {
                return F.byDisplayName(a)
            },
            byStoreName(a) {
                return F.byStoreName(a)
            },
            combine(...a) {
                return F.combine(...a)
            },
            not(a) {
                return F.not(a)
            },
            byComponentType(a) {
                return e => {
                    let t = lt.getType(e);
                    return typeof t == "function" && a(t)
                }
            }
        },
        getWithKey(a, e = {}) {
            return "first" in e ? b.error("BdApi.Webpack~getWithKey", "Unsupported option first.") : "defaultExport" in e && typeof e.defaultExport != "boolean" ? b.error("BdApi.Webpack~getWithKey", "Invalid type for options.defaultExport", e.defaultExport, "Expected: boolean") : "searchExports" in e && typeof e.searchExports != "boolean" ? b.error("BdApi.Webpack~getWithKey", "Invalid type for options.searchExports", e.searchExports, "Expected: boolean") : "raw" in e && typeof e.raw != "boolean" ? b.error("BdApi.Webpack~getWithKey", "Invalid type for options.raw", e.raw, "Expected: boolean") : Mt(a, e)
        },
        getModule(a, e = {}) {
            return "first" in e && typeof e.first != "boolean" ? b.error("BdApi.Webpack~get", "Invalid type for options.first", e.first, "Expected: boolean") : "defaultExport" in e && typeof e.defaultExport != "boolean" ? b.error("BdApi.Webpack~getModule", "Invalid type for options.defaultExport", e.defaultExport, "Expected: boolean") : "searchExports" in e && typeof e.searchExports != "boolean" ? b.error("BdApi.Webpack~getModule", "Invalid type for options.searchExports", e.searchExports, "Expected: boolean") : "raw" in e && typeof e.raw != "boolean" ? b.error("BdApi.Webpack~getModule", "Invalid type for options.raw", e.raw, "Expected: boolean") : e.first === !1 ? co(a, e) : de(a, e)
        },
        getModules(a, e = {}) {
            return "defaultExport" in e && typeof e.defaultExport != "boolean" ? b.error("BdApi.Webpack~getModules", "Invalid type for options.defaultExport", e.defaultExport, "Expected: boolean") : "searchExports" in e && typeof e.searchExports != "boolean" ? b.error("BdApi.Webpack~getModules", "Invalid type for options.searchExports", e.searchExports, "Expected: boolean") : "raw" in e && typeof e.raw != "boolean" ? b.error("BdApi.Webpack~getModules", "Invalid type for options.raw", e.raw, "Expected: boolean") : co(a, e)
        },
        getBulk(...a) {
            return Si(...a)
        },
        getBulkKeyed(a) {
            return gn(a)
        },
        waitForModule(a, e = {}) {
            return "defaultExport" in e && typeof e.defaultExport != "boolean" ? b.error("BdApi.Webpack~waitForModule", "Invalid type for options.defaultExport", e.defaultExport, "Expected: boolean") : "signal" in e && !(e.signal instanceof AbortSignal) ? b.error("BdApi.Webpack~waitForModule", "Invalid type for options.signal", e.signal, "AbortSignal expected.") : "searchExports" in e && typeof e.searchExports != "boolean" ? b.error("BdApi.Webpack~waitForModule", "Invalid type for options.searchExports", e.searchExports, "Expected: boolean") : "raw" in e && typeof e.raw != "boolean" ? b.error("BdApi.Webpack~waitForModule", "Invalid type for options.raw", e.raw, "Expected: boolean") : Oe(a, e)
        },
        getByRegex(a, e = {}) {
            return ut.getModule(F.byRegex(a), e)
        },
        getAllByRegex(a, e = {}) {
            return ut.getModule(F.byRegex(a), Object.assign({}, e, {
                first: !1
            }))
        },
        getMangled(a, e, t = {}) {
            let {
                defaultExport: o = !1,
                searchExports: r = !1,
                raw: n = !1
            } = t;
            return typeof o != "boolean" ? b.error("BdApi.Webpack~getMangled", "Invalid type for options.defaultExport", o, "Expected: boolean") : typeof r != "boolean" ? b.error("BdApi.Webpack~getMangled", "Invalid type for options.searchExports", r, "Expected: boolean") : typeof n != "boolean" ? b.error("BdApi.Webpack~getMangled", "Invalid type for options.raw", n, "Expected: boolean") : la(a, e, t)
        },
        getByPrototypeKeys(...a) {
            let [e, t] = ya(a);
            return ut.getModule(F.byPrototypeKeys(e), t)
        },
        getAllByPrototypeKeys(...a) {
            let [e, t] = ya(a);
            return ut.getModule(F.byPrototypeKeys(e), Object.assign({}, t, {
                first: !1
            }))
        },
        getByKeys(...a) {
            let [e, t] = ya(a);
            return ut.getModule(F.byKeys(e), t)
        },
        getAllByKeys(...a) {
            let [e, t] = ya(a);
            return ut.getModule(F.byKeys(e), Object.assign({}, t, {
                first: !1
            }))
        },
        getByStrings(...a) {
            let [e, t] = ya(a);
            return ut.getModule(F.byStrings(...e), t)
        },
        getAllByStrings(...a) {
            let [e, t] = ya(a);
            return ut.getModule(F.byStrings(...e), Object.assign({}, t, {
                first: !1
            }))
        },
        getBySource(...a) {
            let [e, t] = ya(a);
            return ut.getModule(F.bySource(...e), t)
        },
        getAllBySource(...a) {
            let [e, t] = ya(a);
            return ut.getModule(F.bySource(...e), Object.assign({}, t, {
                first: !1
            }))
        },
        getStore(a) {
            return La(a)
        },
        getById(a) {
            return Ci(a)
        }
    };
Object.freeze(ut);
Object.freeze(F);
var Us = ut;

function nm(a) {
    let t = new Response(a).body.getReader();
    return {
        read: () => t.read(),
        cancel: () => t.cancel()
    }
}

function im(a) {
    return new ReadableStream({
        async start(e) {
            for (;;) {
                let {
                    done: t,
                    value: o
                } = await a.read();
                if (t) {
                    e.close();
                    break
                } else e.enqueue(o)
            }
        },
        type: "bytes"
    })
}
Ge();
var Jv = 20,
    Yv = 3e3,
    Qv = new Set(["GET", "PUT", "POST", "DELETE", "PATCH", "OPTIONS", "HEAD", "CONNECT", "TRACE"]);

function ew(a) {
    return {
        aborted: () => a.aborted,
        reason: () => a.reason,
        addListener: e => {
            if (a.aborted) try {
                e()
            } finally {
                return () => {}
            }
            let t = () => e();
            return a.addEventListener("abort", t, {
                once: !0
            }), () => void a.removeEventListener("abort", t)
        }
    }
}
var js = class extends Response {
    #e;
    constructor(e) {
        super(e.body ? im(e.body) : null, {
            headers: e.headers,
            status: e.status,
            statusText: e.statusText
        }), this.#e = e
    }
    get url() {
        return this.#e.url
    }
    get redirected() {
        return this.#e.redirected
    }
};
async function tw(a, e) {
    let t;
    a instanceof URL ? t = new Request(a.href, e) : t = new Request(a, e);
    let o = t.headers;
    e?.headers && (o = new Headers(e.headers));
    let r = await M.nativeFetch({
        url: t.url,
        body: t.body ? nm(t.body) : null,
        headers: Object.fromEntries(o),
        keepalive: t.keepalive,
        method: Qv.has(t.method) ? t.method : "GET",
        redirect: t.redirect,
        signal: t.signal ? ew(t.signal) : null,
        timeout: e?.timeout ?? Yv,
        maxRedirects: e?.maxRedirects ?? Jv,
        rejectUnauthorized: e?.rejectUnauthorized ?? !0
    });
    return new js(r)
}
var qs = tw;
var aw = {
        error: "error",
        debug: "debug",
        log: "log",
        warn: "warn",
        info: "info"
    },
    ow = a => aw[a] || "log",
    $r = class {
        #e = "";
        #t = "color: #3a71c1; font-weight: 700;";
        #a = "";
        constructor(e, t, o) {
            e && (this.#e = e, t && (this.#t = t), o && (this.#a = o))
        }
        stacktrace(e, t, o) {
            this.#e && (o = t, t = e, e = this.#e), console.error(`%c[${e}]%c ${t}

%c`, this.#t, "color: red; font-weight: 700;", "color: red;", o)
        }
        error(...e) {
            this.#o(e, "error")
        }
        warn(...e) {
            this.#o(e, "warn")
        }
        info(...e) {
            this.#o(e, "info")
        }
        debug(...e) {
            this.#o(e, "debug")
        }
        log(...e) {
            this.#o(e)
        }
        #o(e, t = "log") {
            t = ow(t);
            let o = this.#e;
            this.#e || (o = e.shift()), console[t](`%c[${o}]%c`, this.#t, this.#a, ...e)
        }
    };
Object.freeze($r);
Object.freeze($r.prototype);
var Hs = $r;
var Ja = class {
    #e = "";
    constructor(e) {
        e && (this.#e = e)
    }
    Types = {
        OptionTypes: $e,
        CommandTypes: vr,
        InputTypes: Nn,
        MessageEmbedTypes: nf
    };
    register(...e) {
        let t = this.#e || e[0],
            o = e[this.#e ? 0 : 1];
        if (this.#t(t, o)) return ea.registerCommand(t, o)
    }
    unregister(...e) {
        let t = this.#e || e[0],
            o = e[this.#e ? 0 : 1];
        this.#a(t, o) && ea.unregisterCommand(t, o)
    }
    #t(e, t) {
        if (e === "BetterDiscord") throw new Error("Plugins cannot register commands as BetterDiscord");
        return typeof e == "string" && typeof t == "object" && t?.id && t?.name && t?.execute
    }
    #a(e, t) {
        return typeof e == "string" && (!t || typeof t == "string")
    }
    unregisterAll(e) {
        this.#e && (e = this.#e), ea.unregisterAll(e)
    }
    getCommandsByCaller(e) {
        return this.#e && (e = this.#e), ea.getCommandsByCaller(e)
    }
};
Object.freeze(Ja);
Object.freeze(Ja.prototype);
Object.freeze(Ja.prototype.Types);
Object.freeze(Ja.constructor);
var Ws = Ja;
Dt();
Yt();
var Zr = class {
    #e;
    constructor(e) {
        this.#e = e
    }
    useStateFromStores = ye;
    useForceUpdate = yr;
    useData(...e) {
        let t = this.#e || e.shift();
        return Q.useData(t, e[0])
    }
};
Object.freeze(Zr);
Object.freeze(Zr.prototype);
var _s = Zr;
gr();
ma();
dt();
$t();
xe();
po();
var Vs = new Map,
    um = new zs(le),
    cm = new zs(Ee),
    fm = new Fs,
    pm = new Bs,
    mm = new Ns,
    hm = new Jn,
    gm = new Ws,
    rw = new _s,
    bm = new Hs,
    ym = {
        get Tooltip() {
            return C.Tooltip
        },
        get ColorInput() {
            return Pr
        },
        get DropdownInput() {
            return Ct
        },
        get SettingItem() {
            return ba
        },
        get KeybindInput() {
            return Dr
        },
        get NumberInput() {
            return Ar
        },
        get RadioInput() {
            return Mr
        },
        get SearchInput() {
            return _a
        },
        get SliderInput() {
            return Er
        },
        get SwitchInput() {
            return Jt
        },
        get TextInput() {
            return Tr
        },
        get SettingGroup() {
            return Va
        },
        get ErrorBoundary() {
            return ce
        },
        get Text() {
            return D
        },
        get Flex() {
            return j
        },
        get Button() {
            return v
        },
        get Spinner() {
            return at
        }
    },
    sm = C.React,
    dm = gt,
    lm = W.get("version"),
    ge = class a {
        Patcher = fm;
        Data = pm;
        DOM = mm;
        Logger = bm;
        Commands = gm;
        React = sm;
        ReactDOM = dm;
        version = lm;
        static Patcher;
        static Data;
        static DOM;
        static Logger;
        static Commands;
        static Hooks;
        static React = sm;
        static ReactDOM = dm;
        static version = lm;
        static Plugins;
        static Themes;
        static Webpack;
        static UI;
        static ReactUtils;
        static Utils;
        static ContextMenu;
        static Components;
        static Net;
        constructor(e) {
            if (!e) return a;
            if (Vs.has(e)) return Vs.get(e);
            if (typeof e != "string") return b.error("BdApi", "Plugin name not a string, returning generic API!"), a;
            this.Patcher = new Fs(e), this.Data = new Bs(e), this.DOM = new Ns(e), this.Logger = new Hs(e), this.Commands = new Ws(e), this.Hooks = new _s(e), Vs.set(e, this)
        }
        get Plugins() {
            return um
        }
        get Themes() {
            return cm
        }
        get Webpack() {
            return Us
        }
        get Utils() {
            return Rs
        }
        get UI() {
            return Os
        }
        get ReactUtils() {
            return lt
        }
        get ContextMenu() {
            return hm
        }
        get Components() {
            return ym
        }
        Net = {
            fetch: qs
        }
    };
ge.Plugins = um;
ge.Themes = cm;
ge.Patcher = fm;
ge.Webpack = Us;
ge.Data = pm;
ge.UI = Os;
ge.ReactUtils = lt;
ge.Utils = Rs;
ge.DOM = mm;
ge.ContextMenu = hm;
ge.Components = ym;
ge.Commands = gm;
ge.Net = {
    fetch: qs
};
ge.Logger = bm;
ge.Hooks = rw;
Object.freeze(ge);
Object.freeze(ge.Net);
Object.freeze(ge.prototype);
Object.freeze(ge.Components);
Td();
Object.defineProperty(window, "BdApi", {
    value: ge,
    writable: !1,
    configurable: !1
});
window.global = window;
no.show();
am.startup();