window.jQuery, function () {
    function a(a, b) {
        for (var c = -1, d = b.length, e = a.length; ++c < d;)a[e + c] = b[c];
        return a
    }

    function b(a, b, c) {
        for (var d = -1, e = a.length; ++d < e;) {
            var f = a[d], g = b(f);
            if (null != g && (h === ia ? g === g : c(g, h)))var h = g, i = f
        }
        return i
    }

    function c(a, b, c) {
        var d;
        return c(a, function (a, c, e) {
            return b(a, c, e) ? (d = a, !1) : void 0
        }), d
    }

    function d(a, b, c, d, e) {
        return e(a, function (a, e, f) {
            c = d ? (d = !1, a) : b(c, a, e, f)
        }), c
    }

    function e(a, b) {
        return x(b, function (b) {
            return a[b]
        })
    }

    function f(a) {
        return a && a.Object === Object ? a : null
    }

    function g(a) {
        return na[a]
    }

    function h(a) {
        var b = !1;
        if (null != a && "function" != typeof a.toString)try {
            b = !!(a + "")
        } catch (a) {
        }
        return b
    }

    function i(a, b) {
        return a = "number" == typeof a || ma.test(a) ? +a : -1, a > -1 && 0 == a % 1 && (null == b ? 9007199254740991 : b) > a
    }

    function j(a) {
        if ($(a) && !Qa(a)) {
            if (a instanceof k)return a;
            if (ya.call(a, "__wrapped__")) {
                var b = new k(a.__wrapped__, a.__chain__);
                return b.__actions__ = C(a.__actions__), b
            }
        }
        return new k(a)
    }

    function k(a, b) {
        this.__wrapped__ = a, this.__actions__ = [], this.__chain__ = !!b
    }

    function l(a, b, c, d) {
        var e;
        return (e = a === ia) || (e = xa[c], e = (a === e || a !== a && e !== e) && !ya.call(d, c)), e ? b : a
    }

    function m(a) {
        return Z(a) ? Ea(a) : {}
    }

    function n(a, b, c) {
        if ("function" != typeof a)throw new TypeError("Expected a function");
        return setTimeout(function () {
            a.apply(ia, c)
        }, b)
    }

    function o(a, b) {
        var c = !0;
        return Ja(a, function (a, d, e) {
            return c = !!b(a, d, e)
        }), c
    }

    function p(a, b) {
        var c = [];
        return Ja(a, function (a, d, e) {
            b(a, d, e) && c.push(a)
        }), c
    }

    function q(b, c, d, e) {
        e || (e = []);
        for (var f = -1, g = b.length; ++f < g;) {
            var h = b[f];
            c > 0 && $(h) && W(h) && (d || Qa(h) || V(h)) ? c > 1 ? q(h, c - 1, d, e) : a(e, h) : d || (e[e.length] = h)
        }
        return e
    }

    function r(a, b) {
        return a && Ka(a, b, da)
    }

    function s(a, b) {
        return p(b, function (b) {
            return X(a[b])
        })
    }

    function t(a, b, c, d, e) {
        return a === b || (null == a || null == b || !Z(a) && !$(b) ? a !== a && b !== b : u(a, b, t, c, d, e))
    }

    function u(a, b, c, d, e, f) {
        var g = Qa(a), i = Qa(b), j = "[object Array]", k = "[object Array]";
        g || (j = Aa.call(a), "[object Arguments]" == j && (j = "[object Object]")), i || (k = Aa.call(b), "[object Arguments]" == k && (k = "[object Object]"));
        var l = "[object Object]" == j && !h(a), i = "[object Object]" == k && !h(b);
        return !(k = j == k) || g || l ? 2 & e || (j = l && ya.call(a, "__wrapped__"), i = i && ya.call(b, "__wrapped__"), !j && !i) ? !!k && (f || (f = []), (j = P(f, function (b) {
            return b[0] === a
        })) && j[1] ? j[1] == b : (f.push([a, b]), b = (g ? J : L)(a, b, c, d, e, f), f.pop(), b)) : c(j ? a.value() : a, i ? b.value() : b, d, e, f) : K(a, b, j)
    }

    function v(a) {
        var b = typeof a;
        return "function" == b ? a : null == a ? ga : ("object" == b ? y : A)(a)
    }

    function w(a) {
        a = null == a ? a : Object(a);
        var b, c = [];
        for (b in a)c.push(b);
        return c
    }

    function x(a, b) {
        var c = -1, d = W(a) ? Array(a.length) : [];
        return Ja(a, function (a, e, f) {
            d[++c] = b(a, e, f)
        }), d
    }

    function y(a) {
        var b = da(a);
        return function (c) {
            var d = b.length;
            if (null == c)return !d;
            for (c = Object(c); d--;) {
                var e = b[d];
                if (!(e in c && t(a[e], c[e], ia, 3)))return !1
            }
            return !0
        }
    }

    function z(a, b) {
        return a = Object(a), R(b, function (b, c) {
            return c in a && (b[c] = a[c]), b
        }, {})
    }

    function A(a) {
        return function (b) {
            return null == b ? ia : b[a]
        }
    }

    function B(a, b, c) {
        var d = -1, e = a.length;
        for (0 > b && (b = -b > e ? 0 : e + b), c = c > e ? e : c, 0 > c && (c += e), e = b > c ? 0 : c - b >>> 0, b >>>= 0, c = Array(e); ++d < e;)c[d] = a[d + b];
        return c
    }

    function C(a) {
        return B(a, 0, a.length)
    }

    function D(a, b) {
        var c;
        return Ja(a, function (a, d, e) {
            return c = b(a, d, e), !c
        }), !!c
    }

    function E(b, c) {
        return R(c, function (b, c) {
            return c.func.apply(c.thisArg, a([b], c.args))
        }, b)
    }

    function F(a, b, c, d) {
        c || (c = {});
        for (var e = -1, f = b.length; ++e < f;) {
            var g = b[e], h = d ? d(c[g], a[g], g, c, a) : a[g], i = c, j = i[g];
            ya.call(i, g) && (j === h || j !== j && h !== h) && (h !== ia || g in i) || (i[g] = h)
        }
        return c
    }

    function G(a) {
        return T(function (b, c) {
            var d = -1, e = c.length, f = e > 1 ? c[e - 1] : ia, f = "function" == typeof f ? (e--, f) : ia;
            for (b = Object(b); ++d < e;) {
                var g = c[d];
                g && a(b, g, d, f)
            }
            return b
        })
    }

    function H(a) {
        return function () {
            var b = arguments, c = m(a.prototype), b = a.apply(c, b);
            return Z(b) ? b : c
        }
    }

    function I(a, b, c) {
        function d() {
            for (var f = -1, g = arguments.length, h = -1, i = c.length, j = Array(i + g), k = this && this !== va && this instanceof d ? e : a; ++h < i;)j[h] = c[h];
            for (; g--;)j[h++] = arguments[++f];
            return k.apply(b, j)
        }

        if ("function" != typeof a)throw new TypeError("Expected a function");
        var e = H(a);
        return d
    }

    function J(a, b, c, d, e, f) {
        var g = -1, h = 1 & e, i = a.length, j = b.length;
        if (i != j && !(2 & e && j > i))return !1;
        for (j = !0; ++g < i;) {
            var k = a[g], l = b[g];
            if (void 0 !== ia) {
                j = !1;
                break
            }
            if (h) {
                if (!D(b, function (a) {
                        return k === a || c(k, a, d, e, f)
                    })) {
                    j = !1;
                    break
                }
            } else if (k !== l && !c(k, l, d, e, f)) {
                j = !1;
                break
            }
        }
        return j
    }

    function K(a, b, c) {
        switch (c) {
            case"[object Boolean]":
            case"[object Date]":
                return +a == +b;
            case"[object Error]":
                return a.name == b.name && a.message == b.message;
            case"[object Number]":
                return a != +a ? b != +b : a == +b;
            case"[object RegExp]":
            case"[object String]":
                return a == b + ""
        }
        return !1
    }

    function L(a, b, c, d, e, f) {
        var g = 2 & e, h = da(a), i = h.length, j = da(b).length;
        if (i != j && !g)return !1;
        for (var k = i; k--;) {
            var l = h[k];
            if (!(g ? l in b : ya.call(b, l)))return !1
        }
        for (j = !0; ++k < i;) {
            var l = h[k], m = a[l], n = b[l];
            if (void 0 !== ia || m !== n && !c(m, n, d, e, f)) {
                j = !1;
                break
            }
            g || (g = "constructor" == l)
        }
        return j && !g && (c = a.constructor, d = b.constructor, c != d && "constructor" in a && "constructor" in b && !("function" == typeof c && c instanceof c && "function" == typeof d && d instanceof d) && (j = !1)), j
    }

    function M(a) {
        var b = a ? a.length : ia;
        if (Y(b) && (Qa(a) || aa(a) || V(a))) {
            a = String;
            for (var c = -1, d = Array(b); ++c < b;)d[c] = a(c);
            b = d
        } else b = null;
        return b
    }

    function N(a) {
        var b = a && a.constructor, b = X(b) && b.prototype || xa;
        return a === b
    }

    function O(a) {
        return a ? a[0] : ia
    }

    function P(a, b) {
        return c(a, v(b), Ja)
    }

    function Q(a, b) {
        return Ja(a, "function" == typeof b ? b : ga)
    }

    function R(a, b, c) {
        return d(a, v(b), c, 3 > arguments.length, Ja)
    }

    function S(a, b) {
        var c;
        if ("function" != typeof b)throw new TypeError("Expected a function");
        return a = Ra(a), function () {
            return 0 < --a && (c = b.apply(this, arguments)), 1 >= a && (b = ia), c
        }
    }

    function T(a) {
        var b;
        if ("function" != typeof a)throw new TypeError("Expected a function");
        return b = Ia(b === ia ? a.length - 1 : Ra(b), 0), function () {
            for (var c = arguments, d = -1, e = Ia(c.length - b, 0), f = Array(e); ++d < e;)f[d] = c[b + d];
            for (e = Array(b + 1), d = -1; ++d < b;)e[d] = c[d];
            return e[b] = f, a.apply(this, e)
        }
    }

    function U(a, b) {
        return a > b
    }

    function V(a) {
        return $(a) && W(a) && ya.call(a, "callee") && (!Fa.call(a, "callee") || "[object Arguments]" == Aa.call(a))
    }

    function W(a) {
        return null != a && !("function" == typeof a && X(a)) && Y(La(a))
    }

    function X(a) {
        return a = Z(a) ? Aa.call(a) : "", "[object Function]" == a || "[object GeneratorFunction]" == a
    }

    function Y(a) {
        return "number" == typeof a && a > -1 && 0 == a % 1 && 9007199254740991 >= a
    }

    function Z(a) {
        var b = typeof a;
        return !!a && ("object" == b || "function" == b)
    }

    function $(a) {
        return !!a && "object" == typeof a
    }

    function _(a) {
        return "number" == typeof a || $(a) && "[object Number]" == Aa.call(a)
    }

    function aa(a) {
        return "string" == typeof a || !Qa(a) && $(a) && "[object String]" == Aa.call(a)
    }

    function ba(a, b) {
        return b > a
    }

    function ca(a) {
        return "string" == typeof a ? a : null == a ? "" : a + ""
    }

    function da(a) {
        var b = N(a);
        if (!b && !W(a))return Ha(Object(a));
        var c, d = M(a), e = !!d, d = d || [], f = d.length;
        for (c in a)!ya.call(a, c) || e && ("length" == c || i(c, f)) || b && "constructor" == c || d.push(c);
        return d
    }

    function ea(a) {
        for (var b = -1, c = N(a), d = w(a), e = d.length, f = M(a), g = !!f, f = f || [], h = f.length; ++b < e;) {
            var j = d[b];
            g && ("length" == j || i(j, h)) || "constructor" == j && (c || !ya.call(a, j)) || f.push(j)
        }
        return f
    }

    function fa(a) {
        return a ? e(a, da(a)) : []
    }

    function ga(a) {
        return a
    }

    function ha(b, c, d) {
        var e = da(c), f = s(c, e);
        null != d || Z(c) && (f.length || !e.length) || (d = c, c = b, b = this, f = s(c, da(c)));
        var g = !(Z(d) && "chain" in d) || d.chain, h = X(b);
        return Ja(f, function (d) {
            var e = c[d];
            b[d] = e, h && (b.prototype[d] = function () {
                var c = this.__chain__;
                if (g || c) {
                    var d = b(this.__wrapped__);
                    return (d.__actions__ = C(this.__actions__)).push({
                        func: e,
                        args: arguments,
                        thisArg: b
                    }), d.__chain__ = c, d
                }
                return e.apply(b, a([this.value()], arguments))
            })
        }), b
    }

    var ia, ja = 1 / 0, ka = /[&<>"'`]/g, la = RegExp(ka.source), ma = /^(?:0|[1-9]\d*)$/, na = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "`": "&#96;"
    }, oa = {
        function: !0,
        object: !0
    }, pa = oa[typeof exports] && exports && !exports.nodeType ? exports : ia, qa = oa[typeof module] && module && !module.nodeType ? module : ia, ra = qa && qa.exports === pa ? pa : ia, sa = f(oa[typeof self] && self), ta = f(oa[typeof window] && window), ua = f(oa[typeof this] && this), va = f(pa && qa && "object" == typeof global && global) || ta !== (ua && ua.window) && ta || sa || ua || Function("return this")(), wa = Array.prototype, xa = Object.prototype, ya = xa.hasOwnProperty, za = 0, Aa = xa.toString, Ba = va._, Ca = va.Reflect, Da = Ca ? Ca.f : ia, Ea = Object.create, Fa = xa.propertyIsEnumerable, Ga = va.isFinite, Ha = Object.keys, Ia = Math.max, Ja = function (a, b) {
        return function (c, d) {
            if (null == c)return c;
            if (!W(c))return a(c, d);
            for (var e = c.length, f = b ? e : -1, g = Object(c); (b ? f-- : ++f < e) && !1 !== d(g[f], f, g););
            return c
        }
    }(r), Ka = function (a) {
        return function (b, c, d) {
            var e = -1, f = Object(b);
            d = d(b);
            for (var g = d.length; g--;) {
                var h = d[a ? g : ++e];
                if (!1 === c(f[h], h, f))break
            }
            return b
        }
    }();
    Da && !Fa.call({valueOf: 1}, "valueOf") && (w = function (a) {
        a = Da(a);
        for (var b, c = []; !(b = a.next()).done;)c.push(b.value);
        return c
    });
    var La = A("length"), Ma = T(function (b, c) {
        return Qa(b) || (b = null == b ? [] : [Object(b)]), q(c, 1), a(C(b), fa)
    }), Na = T(function (a, b, c) {
        return I(a, b, c)
    }), Oa = T(function (a, b) {
        return n(a, 1, b)
    }), Pa = T(function (a, b, c) {
        return n(a, Sa(b) || 0, c)
    }), Qa = Array.isArray, Ra = Number, Sa = Number, Ta = G(function (a, b) {
        F(b, da(b), a)
    }), Ua = G(function (a, b) {
        F(b, ea(b), a)
    }), Va = G(function (a, b, c, d) {
        F(b, ea(b), a, d)
    }), Wa = T(function (a) {
        return a.push(ia, l), Va.apply(ia, a)
    }), Xa = T(function (a, b) {
        return null == a ? {} : z(a, q(b, 1))
    }), Ya = v;
    k.prototype = m(j.prototype), k.prototype.constructor = k, j.assignIn = Ua, j.before = S, j.bind = Na, j.chain = function (a) {
        return a = j(a), a.__chain__ = !0, a
    }, j.compact = function (a) {
        return p(a, Boolean)
    }, j.concat = Ma, j.create = function (a, b) {
        var c = m(a);
        return b ? Ta(c, b) : c
    }, j.defaults = Wa, j.defer = Oa, j.delay = Pa, j.filter = function (a, b) {
        return p(a, v(b))
    }, j.flatten = function (a) {
        return a && a.length ? q(a, 1) : []
    }, j.flattenDeep = function (a) {
        return a && a.length ? q(a, ja) : []
    }, j.iteratee = Ya, j.keys = da, j.map = function (a, b) {
        return x(a, v(b))
    }, j.matches = function (a) {
        return y(Ta({}, a))
    }, j.mixin = ha, j.negate = function (a) {
        if ("function" != typeof a)throw new TypeError("Expected a function");
        return function () {
            return !a.apply(this, arguments)
        }
    }, j.once = function (a) {
        return S(2, a)
    }, j.pick = Xa, j.slice = function (a, b, c) {
        var d = a ? a.length : 0;
        return c = c === ia ? d : +c, d ? B(a, null == b ? 0 : +b, c) : []
    }, j.sortBy = function (a, b) {
        var c = 0;
        return b = v(b), x(x(a, function (a, d, e) {
            return {c: a, b: c++, a: b(a, d, e)}
        }).sort(function (a, b) {
            var c;
            a:{
                c = a.a;
                var d = b.a;
                if (c !== d) {
                    var e = null === c, f = c === ia, g = c === c, h = null === d, i = d === ia, j = d === d;
                    if (c > d && !h || !g || e && !i && j || f && j) {
                        c = 1;
                        break a
                    }
                    if (d > c && !e || !j || h && !f && g || i && g) {
                        c = -1;
                        break a
                    }
                }
                c = 0
            }
            return c || a.b - b.b
        }), A("c"))
    }, j.tap = function (a, b) {
        return b(a), a
    }, j.thru = function (a, b) {
        return b(a)
    }, j.toArray = function (a) {
        return W(a) ? a.length ? C(a) : [] : fa(a)
    }, j.values = fa, j.extend = Ua, ha(j, j), j.clone = function (a) {
        return Z(a) ? Qa(a) ? C(a) : F(a, da(a)) : a
    }, j.escape = function (a) {
        return (a = ca(a)) && la.test(a) ? a.replace(ka, g) : a
    }, j.every = function (a, b, c) {
        return b = c ? ia : b, o(a, v(b))
    }, j.find = P, j.forEach = Q, j.has = function (a, b) {
        return null != a && ya.call(a, b)
    }, j.head = O, j.identity = ga, j.indexOf = function (a, b, c) {
        var d = a ? a.length : 0;
        c = "number" == typeof c ? 0 > c ? Ia(d + c, 0) : c : 0, c = (c || 0) - 1;
        for (var e = b === b; ++c < d;) {
            var f = a[c];
            if (e ? f === b : f !== f)return c
        }
        return -1
    }, j.isArguments = V, j.isArray = Qa, j.isBoolean = function (a) {
        return !0 === a || !1 === a || $(a) && "[object Boolean]" == Aa.call(a)
    }, j.isDate = function (a) {
        return $(a) && "[object Date]" == Aa.call(a)
    }, j.isEmpty = function (a) {
        if (W(a) && (Qa(a) || aa(a) || X(a.splice) || V(a)))return !a.length;
        for (var b in a)if (ya.call(a, b))return !1;
        return !0
    }, j.isEqual = function (a, b) {
        return t(a, b)
    }, j.isFinite = function (a) {
        return "number" == typeof a && Ga(a)
    }, j.isFunction = X, j.isNaN = function (a) {
        return _(a) && a != +a
    }, j.isNull = function (a) {
        return null === a
    }, j.isNumber = _, j.isObject = Z, j.isRegExp = function (a) {
        return Z(a) && "[object RegExp]" == Aa.call(a)
    }, j.isString = aa, j.isUndefined = function (a) {
        return a === ia
    }, j.last = function (a) {
        var b = a ? a.length : 0;
        return b ? a[b - 1] : ia
    }, j.max = function (a) {
        return a && a.length ? b(a, ga, U) : ia
    }, j.min = function (a) {
        return a && a.length ? b(a, ga, ba) : ia
    }, j.noConflict = function () {
        return va._ === this && (va._ = Ba), this
    }, j.noop = function () {
    }, j.reduce = R, j.result = function (a, b, c) {
        return b = null == a ? ia : a[b], b === ia && (b = c), X(b) ? b.call(a) : b
    }, j.size = function (a) {
        return null == a ? 0 : (a = W(a) ? a : da(a), a.length)
    }, j.some = function (a, b, c) {
        return b = c ? ia : b, D(a, v(b))
    }, j.uniqueId = function (a) {
        var b = ++za;
        return ca(a) + b
    }, j.each = Q, j.first = O, ha(j, function () {
        var a = {};
        return r(j, function (b, c) {
            ya.call(j.prototype, c) || (a[c] = b)
        }), a
    }(), {chain: !1}), j.VERSION = "4.5.1", Ja("pop join replace reverse split push shift sort splice unshift".split(" "), function (a) {
        var b = (/^(?:replace|split)$/.test(a) ? String.prototype : wa)[a], c = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru", d = /^(?:pop|join|replace|shift)$/.test(a);
        j.prototype[a] = function () {
            var a = arguments;
            return d && !this.__chain__ ? b.apply(this.value(), a) : this[c](function (c) {
                return b.apply(c, a)
            })
        }
    }), j.prototype.toJSON = j.prototype.valueOf = j.prototype.value = function () {
        return E(this.__wrapped__, this.__actions__)
    }, (ta || sa || {})._ = j, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return j
    }) : pa && qa ? (ra && ((qa.exports = j)._ = j), pa._ = j) : va._ = j
}.call(this);

/*! TiltFx */
!function (a) {
    "use strict";
    function b(a, b) {
        for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }

    function c(b) {
        var c = 0, d = 0;
        if (!b)var b = a.event;
        return b.pageX || b.pageY ? (c = b.pageX, d = b.pageY) : (b.clientX || b.clientY) && (c = b.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, d = b.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
            x: c,
            y: d
        }
    }

    function d(a, c) {
        this.DOM = {}, this.DOM.el = a, this.options = b({}, this.options), b(this.options, c), this._init()
    }

    d.prototype.options = {
        movement: {
            imgWrapper: {
                translation: {x: 0, y: 0, z: 0},
                rotation: {x: -5, y: 5, z: 0},
                reverseAnimation: {duration: 1200, easing: "easeOutElastic", elasticity: 600}
            },
            lines: {
                translation: {x: 10, y: 10, z: [0, 10]},
                reverseAnimation: {duration: 1e3, easing: "easeOutExpo", elasticity: 600}
            },
            caption: {
                translation: {x: 20, y: 20, z: 0},
                rotation: {x: 0, y: 0, z: 0},
                reverseAnimation: {duration: 1500, easing: "easeOutElastic", elasticity: 600}
            },
            shine: {
                translation: {x: 50, y: 50, z: 0},
                reverseAnimation: {duration: 1200, easing: "easeOutElastic", elasticity: 600}
            }
        }
    }, d.prototype._init = function () {
        this.DOM.animatable = {}, this.DOM.animatable.imgWrapper = this.DOM.el.querySelector(".tilter__figure"), this.DOM.animatable.lines = this.DOM.el.querySelector(".tilter__deco--lines"), this.DOM.animatable.caption = this.DOM.el.querySelector(".tilter__caption"), this.DOM.animatable.overlay = this.DOM.el.querySelector(".tilter__deco--overlay"), this.DOM.animatable.shine = this.DOM.el.querySelector(".tilter__deco--shine > div"), this._initEvents()
    }, d.prototype._initEvents = function () {
        var a = this;
        this.mouseenterFn = function () {
            for (var b in a.DOM.animatable)anime.remove(a.DOM.animatable[b])
        }, this.mousemoveFn = function (b) {
            requestAnimationFrame(function () {
                a._layout(b)
            })
        }, this.mouseleaveFn = function (b) {
            requestAnimationFrame(function () {
                for (var b in a.DOM.animatable)void 0 != a.options.movement[b] && anime({
                    targets: a.DOM.animatable[b],
                    duration: void 0 != a.options.movement[b].reverseAnimation ? a.options.movement[b].reverseAnimation.duration || 0 : 1,
                    easing: void 0 != a.options.movement[b].reverseAnimation ? a.options.movement[b].reverseAnimation.easing || "linear" : "linear",
                    elasticity: void 0 != a.options.movement[b].reverseAnimation ? a.options.movement[b].reverseAnimation.elasticity || null : null,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1,
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0
                })
            })
        }, this.DOM.el.addEventListener("mousemove", this.mousemoveFn), this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn), this.DOM.el.addEventListener("mouseenter", this.mouseenterFn)
    }, d.prototype._layout = function (a) {
        var b = c(a), d = {
            left: document.body.scrollLeft + document.documentElement.scrollLeft,
            top: document.body.scrollTop + document.documentElement.scrollTop
        }, e = this.DOM.el.getBoundingClientRect(), f = {x: b.x - e.left - d.left, y: b.y - e.top - d.top};
        for (var g in this.DOM.animatable)if (void 0 != this.DOM.animatable[g] && void 0 != this.options.movement[g]) {
            var h = void 0 != this.options.movement[g] ? this.options.movement[g].translation || {
                x: 0,
                y: 0,
                z: 0
            } : {x: 0, y: 0, z: 0}, i = void 0 != this.options.movement[g] ? this.options.movement[g].rotation || {
                x: 0,
                y: 0,
                z: 0
            } : {x: 0, y: 0, z: 0}, j = function (a) {
                for (var b in a)void 0 == a[b] ? a[b] = [0, 0] : "number" == typeof a[b] && (a[b] = [-1 * a[b], a[b]])
            };
            j(h), j(i);
            var k = {
                translation: {
                    x: (h.x[1] - h.x[0]) / e.width * f.x + h.x[0],
                    y: (h.y[1] - h.y[0]) / e.height * f.y + h.y[0],
                    z: (h.z[1] - h.z[0]) / e.height * f.y + h.z[0]
                },
                rotation: {
                    x: (i.x[1] - i.x[0]) / e.height * f.y + i.x[0],
                    y: (i.y[1] - i.y[0]) / e.width * f.x + i.y[0],
                    z: (i.z[1] - i.z[0]) / e.width * f.x + i.z[0]
                }
            };
            this.DOM.animatable[g].style.WebkitTransform = this.DOM.animatable[g].style.transform = "translateX(" + k.translation.x + "px) translateY(" + k.translation.y + "px) translateZ(" + k.translation.z + "px) rotateX(" + k.rotation.x + "deg) rotateY(" + k.rotation.y + "deg) rotateZ(" + k.rotation.z + "deg)"
        }
    }, a.TiltFx = d
}(window);

/*! enquire.js v2.1.2 */
!function (e, t, n) {
    var i = window.matchMedia;
    "undefined" != typeof module && module.exports ? module.exports = n(i) : "function" == typeof define && define.amd ? define(function () {
        return t[e] = n(i)
    }) : t[e] = n(i)
}("enquire", this, function (e) {
    "use strict";
    function t(e, t) {
        var n, i = 0, o = e.length;
        for (i; o > i && (n = t(e[i], i), n !== !1); i++);
    }

    function n(e) {
        return "[object Array]" === Object.prototype.toString.apply(e)
    }

    function i(e) {
        return "function" == typeof e
    }

    function o(e) {
        this.options = e, !e.deferSetup && this.setup()
    }

    function r(t, n) {
        this.query = t, this.isUnconditional = n, this.handlers = [], this.mql = e(t);
        var i = this;
        this.listener = function (e) {
            i.mql = e, i.assess()
        }, this.mql.addListener(this.listener)
    }

    function s() {
        if (!e)throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {}, this.browserIsIncapable = !e("only all").matches
    }

    return o.prototype = {
        setup: function () {
            this.options.setup && this.options.setup(), this.initialised = !0
        }, on: function () {
            !this.initialised && this.setup(), this.options.match && this.options.match()
        }, off: function () {
            this.options.unmatch && this.options.unmatch()
        }, destroy: function () {
            this.options.destroy ? this.options.destroy() : this.off()
        }, equals: function (e) {
            return this.options === e || this.options.match === e
        }
    }, r.prototype = {
        addHandler: function (e) {
            var t = new o(e);
            this.handlers.push(t), this.matches() && t.on()
        }, removeHandler: function (e) {
            var n = this.handlers;
            t(n, function (t, i) {
                return t.equals(e) ? (t.destroy(), !n.splice(i, 1)) : void 0
            })
        }, matches: function () {
            return this.mql.matches || this.isUnconditional
        }, clear: function () {
            t(this.handlers, function (e) {
                e.destroy()
            }), this.mql.removeListener(this.listener), this.handlers.length = 0
        }, assess: function () {
            var e = this.matches() ? "on" : "off";
            t(this.handlers, function (t) {
                t[e]()
            })
        }
    }, s.prototype = {
        register: function (e, o, s) {
            var a = this.queries, l = s && this.browserIsIncapable;
            return a[e] || (a[e] = new r(e, l)), i(o) && (o = {match: o}), n(o) || (o = [o]), t(o, function (t) {
                i(t) && (t = {match: t}), a[e].addHandler(t)
            }), this
        }, unregister: function (e, t) {
            var n = this.queries[e];
            return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
        }
    }, new s
}),

/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
    !function (e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document)throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function (e, t) {
        function n(e) {
            var t = !!e && "length" in e && e.length, n = re.type(e);
            return "function" !== n && !re.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e, t, n) {
            if (re.isFunction(t))return re.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType)return re.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (ve.test(t))return re.filter(t, e, n);
                t = re.filter(t, e)
            }
            return re.grep(e, function (e) {
                return K.call(t, e) > -1 !== n
            })
        }

        function o(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function r(e) {
            var t = {};
            return re.each(e.match(xe) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function s() {
            G.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), re.ready()
        }

        function a() {
            this.expando = re.expando + a.uid++
        }

        function l(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)if (i = "data-" + t.replace(Ae, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? re.parseJSON(n) : n)
                } catch (e) {
                }
                $e.set(e, t, n)
            } else n = void 0;
            return n
        }

        function u(e, t, n, i) {
            var o, r = 1, s = 20, a = i ? function () {
                return i.cur()
            } : function () {
                return re.css(e, t, "")
            }, l = a(), u = n && n[3] || (re.cssNumber[t] ? "" : "px"), c = (re.cssNumber[t] || "px" !== u && +l) && Ne.exec(re.css(e, t));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do r = r || ".5", c /= r, re.style(e, t, c + u); while (r !== (r = a() / l) && 1 !== r && --s)
            }
            return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
        }

        function c(e, t) {
            var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], n) : n
        }

        function d(e, t) {
            for (var n = 0, i = e.length; i > n; n++)Se.set(e[n], "globalEval", !t || Se.get(t[n], "globalEval"))
        }

        function p(e, t, n, i, o) {
            for (var r, s, a, l, u, p, f = t.createDocumentFragment(), h = [], v = 0, g = e.length; g > v; v++)if (r = e[v], r || 0 === r)if ("object" === re.type(r)) re.merge(h, r.nodeType ? [r] : r); else if (_e.test(r)) {
                for (s = s || f.appendChild(t.createElement("div")), a = (qe.exec(r) || ["", ""])[1].toLowerCase(), l = Le[a] || Le._default, s.innerHTML = l[1] + re.htmlPrefilter(r) + l[2], p = l[0]; p--;)s = s.lastChild;
                re.merge(h, s.childNodes), s = f.firstChild, s.textContent = ""
            } else h.push(t.createTextNode(r));
            for (f.textContent = "", v = 0; r = h[v++];)if (i && re.inArray(r, i) > -1) o && o.push(r); else if (u = re.contains(r.ownerDocument, r), s = c(f.appendChild(r), "script"), u && d(s), n)for (p = 0; r = s[p++];)Pe.test(r.type || "") && n.push(r);
            return f
        }

        function f() {
            return !0
        }

        function h() {
            return !1
        }

        function v() {
            try {
                return G.activeElement
            } catch (e) {
            }
        }

        function g(e, t, n, i, o, r) {
            var s, a;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in t)g(e, a, n, i, t[a], r);
                return e
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = h; else if (!o)return e;
            return 1 === r && (s = o, o = function (e) {
                return re().off(e), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = re.guid++)), e.each(function () {
                re.event.add(this, t, o, i, n)
            })
        }

        function m(e, t) {
            return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function y(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function w(e) {
            var t = Be.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function b(e, t) {
            var n, i, o, r, s, a, l, u;
            if (1 === t.nodeType) {
                if (Se.hasData(e) && (r = Se.access(e), s = Se.set(t, r), u = r.events)) {
                    delete s.handle, s.events = {};
                    for (o in u)for (n = 0, i = u[o].length; i > n; n++)re.event.add(t, o, u[o][n])
                }
                $e.hasData(e) && (a = $e.access(e), l = re.extend({}, a), $e.set(t, l))
            }
        }

        function x(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && He.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function k(e, t, n, i) {
            t = J.apply([], t);
            var o, r, s, a, l, u, d = 0, f = e.length, h = f - 1, v = t[0], g = re.isFunction(v);
            if (g || f > 1 && "string" == typeof v && !ie.checkClone && We.test(v))return e.each(function (o) {
                var r = e.eq(o);
                g && (t[0] = v.call(this, o, r.html())), k(r, t, n, i)
            });
            if (f && (o = p(t, e[0].ownerDocument, !1, e, i), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                for (s = re.map(c(o, "script"), y), a = s.length; f > d; d++)l = o, d !== h && (l = re.clone(l, !0, !0), a && re.merge(s, c(l, "script"))), n.call(e[d], l, d);
                if (a)for (u = s[s.length - 1].ownerDocument, re.map(s, w), d = 0; a > d; d++)l = s[d], Pe.test(l.type || "") && !Se.access(l, "globalEval") && re.contains(u, l) && (l.src ? re._evalUrl && re._evalUrl(l.src) : re.globalEval(l.textContent.replace(Ue, "")))
            }
            return e
        }

        function T(e, t, n) {
            for (var i, o = t ? re.filter(t, e) : e, r = 0; null != (i = o[r]); r++)n || 1 !== i.nodeType || re.cleanData(c(i)), i.parentNode && (n && re.contains(i.ownerDocument, i) && d(c(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function C(e, t) {
            var n = re(t.createElement(e)).appendTo(t.body), i = re.css(n[0], "display");
            return n.detach(), i
        }

        function S(e) {
            var t = G, n = Ye[e];
            return n || (n = C(e, t), "none" !== n && n || (Xe = (Xe || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Xe[0].contentDocument, t.write(), t.close(), n = C(e, t), Xe.detach()), Ye[e] = n), n
        }

        function $(e, t, n) {
            var i, o, r, s, a = e.style;
            return n = n || Qe(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || re.contains(e.ownerDocument, e) || (s = re.style(e, t)), n && !ie.pixelMarginRight() && Ge.test(s) && Ve.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
        }

        function E(e, t) {
            return {
                get: function () {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function A(e) {
            if (e in it)return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)if (e = nt[n] + t, e in it)return e
        }

        function j(e, t, n) {
            var i = Ne.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function N(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2)"margin" === n && (s += re.css(e, n + De[r], !0, o)), i ? ("content" === n && (s -= re.css(e, "padding" + De[r], !0, o)), "margin" !== n && (s -= re.css(e, "border" + De[r] + "Width", !0, o))) : (s += re.css(e, "padding" + De[r], !0, o), "padding" !== n && (s += re.css(e, "border" + De[r] + "Width", !0, o)));
            return s
        }

        function D(t, n, i) {
            var o = !0, r = "width" === n ? t.offsetWidth : t.offsetHeight, s = Qe(t), a = "border-box" === re.css(t, "boxSizing", !1, s);
            if (G.msFullscreenElement && e.top !== e && t.getClientRects().length && (r = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= r || null == r) {
                if (r = $(t, n, s), (0 > r || null == r) && (r = t.style[n]), Ge.test(r))return r;
                o = a && (ie.boxSizingReliable() || r === t.style[n]), r = parseFloat(r) || 0
            }
            return r + N(t, n, i || (a ? "border" : "content"), o, s) + "px"
        }

        function O(e, t) {
            for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++)i = e[s], i.style && (r[s] = Se.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Oe(i) && (r[s] = Se.access(i, "olddisplay", S(i.nodeName)))) : (o = Oe(i), "none" === n && o || Se.set(i, "olddisplay", o ? n : re.css(i, "display"))));
            for (s = 0; a > s; s++)i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
            return e
        }

        function H(e, t, n, i, o) {
            return new H.prototype.init(e, t, n, i, o)
        }

        function q() {
            return e.setTimeout(function () {
                ot = void 0
            }), ot = re.now()
        }

        function P(e, t) {
            var n, i = 0, o = {height: e};
            for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = De[i], o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function L(e, t, n) {
            for (var i, o = (I.tweeners[t] || []).concat(I.tweeners["*"]), r = 0, s = o.length; s > r; r++)if (i = o[r].call(n, t, e))return i
        }

        function _(e, t, n) {
            var i, o, r, s, a, l, u, c, d = this, p = {}, f = e.style, h = e.nodeType && Oe(e), v = Se.get(e, "fxshow");
            n.queue || (a = re._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, d.always(function () {
                d.always(function () {
                    a.unqueued--, re.queue(e, "fx").length || a.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = re.css(e, "display"), c = "none" === u ? Se.get(e, "olddisplay") || S(e.nodeName) : u, "inline" === c && "none" === re.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)if (o = t[i], st.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !v || void 0 === v[i])continue;
                    h = !0
                }
                p[i] = v && v[i] || re.style(e, i)
            } else u = void 0;
            if (re.isEmptyObject(p)) "inline" === ("none" === u ? S(e.nodeName) : u) && (f.display = u); else {
                v ? "hidden" in v && (h = v.hidden) : v = Se.access(e, "fxshow", {}), r && (v.hidden = !h), h ? re(e).show() : d.done(function () {
                    re(e).hide()
                }), d.done(function () {
                    var t;
                    Se.remove(e, "fxshow");
                    for (t in p)re.style(e, t, p[t])
                });
                for (i in p)s = L(h ? v[i] : 0, i, d), i in v || (v[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function z(e, t) {
            var n, i, o, r, s;
            for (n in e)if (i = re.camelCase(n), o = t[i], r = e[n], re.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = re.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r)n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
        }

        function I(e, t, n) {
            var i, o, r = 0, s = I.prefilters.length, a = re.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (o)return !1;
                for (var t = ot || q(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; l > s; s++)u.tweens[s].run(r);
                return a.notifyWith(e, [u, r, n]), 1 > r && l ? n : (a.resolveWith(e, [u]), !1)
            }, u = a.promise({
                elem: e,
                props: re.extend({}, t),
                opts: re.extend(!0, {specialEasing: {}, easing: re.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ot || q(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = re.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0, i = t ? u.tweens.length : 0;
                    if (o)return this;
                    for (o = !0; i > n; n++)u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }), c = u.props;
            for (z(c, u.opts.specialEasing); s > r; r++)if (i = I.prefilters[r].call(u, e, c, u.opts))return re.isFunction(i.stop) && (re._queueHooks(u.elem, u.opts.queue).stop = re.proxy(i.stop, i)), i;
            return re.map(c, L, u), re.isFunction(u.opts.start) && u.opts.start.call(e, u), re.fx.timer(re.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function F(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function M(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0, r = t.toLowerCase().match(xe) || [];
                if (re.isFunction(n))for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function R(e, t, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, re.each(e[a] || [], function (e, a) {
                    var u = a(t, n, i);
                    return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
                }), l
            }

            var r = {}, s = e === $t;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function W(e, t) {
            var n, i, o = re.ajaxSettings.flatOptions || {};
            for (n in t)void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && re.extend(!0, e, i), e
        }

        function B(e, t, n) {
            for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)for (o in a)if (a[o] && a[o].test(i)) {
                l.unshift(o);
                break
            }
            if (l[0] in n) r = l[0]; else {
                for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    s || (s = o)
                }
                r = r || s
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function U(e, t, n, i) {
            var o, r, s, a, l, u = {}, c = e.dataTypes.slice();
            if (c[1])for (s in e.converters)u[s.toLowerCase()] = e.converters[s];
            for (r = c.shift(); r;)if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                if (s = u[l + " " + r] || u["* " + r], !s)for (o in u)if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                    s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                    break
                }
                if (s !== !0)if (s && e.throws) t = s(t); else try {
                    t = s(t)
                } catch (e) {
                    return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r}
                }
            }
            return {state: "success", data: t}
        }

        function X(e, t, n, i) {
            var o;
            if (re.isArray(t)) re.each(t, function (t, o) {
                n || Nt.test(e) ? i(e, o) : X(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            }); else if (n || "object" !== re.type(t)) i(e, t); else for (o in t)X(e + "[" + o + "]", t[o], n, i)
        }

        function Y(e) {
            return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }

        var V = [], G = e.document, Q = V.slice, J = V.concat, Z = V.push, K = V.indexOf, ee = {}, te = ee.toString, ne = ee.hasOwnProperty, ie = {}, oe = "2.2.3", re = function (e, t) {
            return new re.fn.init(e, t)
        }, se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, le = /-([\da-z])/gi, ue = function (e, t) {
            return t.toUpperCase()
        };
        re.fn = re.prototype = {
            jquery: oe, constructor: re, selector: "", length: 0, toArray: function () {
                return Q.call(this)
            }, get: function (e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
            }, pushStack: function (e) {
                var t = re.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            }, each: function (e) {
                return re.each(this, e)
            }, map: function (e) {
                return this.pushStack(re.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(Q.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: Z, sort: V.sort, splice: V.splice
        }, re.extend = re.fn.extend = function () {
            var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || re.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)if (null != (e = arguments[a]))for (t in e)n = s[t], i = e[t], s !== i && (u && i && (re.isPlainObject(i) || (o = re.isArray(i))) ? (o ? (o = !1, r = n && re.isArray(n) ? n : []) : r = n && re.isPlainObject(n) ? n : {}, s[t] = re.extend(u, r, i)) : void 0 !== i && (s[t] = i));
            return s
        }, re.extend({
            expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isFunction: function (e) {
                return "function" === re.type(e)
            }, isArray: Array.isArray, isWindow: function (e) {
                return null != e && e === e.window
            }, isNumeric: function (e) {
                var t = e && e.toString();
                return !re.isArray(e) && t - parseFloat(t) + 1 >= 0
            }, isPlainObject: function (e) {
                var t;
                if ("object" !== re.type(e) || e.nodeType || re.isWindow(e))return !1;
                if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf"))return !1;
                for (t in e);
                return void 0 === t || ne.call(e, t)
            }, isEmptyObject: function (e) {
                var t;
                for (t in e)return !1;
                return !0
            }, type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
            }, globalEval: function (e) {
                var t, n = eval;
                e = re.trim(e), e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            }, camelCase: function (e) {
                return e.replace(ae, "ms-").replace(le, ue)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function (e, t) {
                var i, o = 0;
                if (n(e))for (i = e.length; i > o && t.call(e[o], o, e[o]) !== !1; o++); else for (o in e)if (t.call(e[o], o, e[o]) === !1)break;
                return e
            }, trim: function (e) {
                return null == e ? "" : (e + "").replace(se, "")
            }, makeArray: function (e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : Z.call(i, e)), i
            }, inArray: function (e, t, n) {
                return null == t ? -1 : K.call(t, e, n)
            }, merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; n > i; i++)e[o++] = t[i];
                return e.length = o, e
            }, grep: function (e, t, n) {
                for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++)i = !t(e[r], r), i !== a && o.push(e[r]);
                return o
            }, map: function (e, t, i) {
                var o, r, s = 0, a = [];
                if (n(e))for (o = e.length; o > s; s++)r = t(e[s], s, i), null != r && a.push(r); else for (s in e)r = t(e[s], s, i), null != r && a.push(r);
                return J.apply([], a)
            }, guid: 1, proxy: function (e, t) {
                var n, i, o;
                return "string" == typeof t && (n = e[t], t = e, e = n), re.isFunction(e) ? (i = Q.call(arguments, 2), o = function () {
                    return e.apply(t || this, i.concat(Q.call(arguments)))
                }, o.guid = e.guid = e.guid || re.guid++, o) : void 0
            }, now: Date.now, support: ie
        }), "function" == typeof Symbol && (re.fn[Symbol.iterator] = V[Symbol.iterator]), re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            ee["[object " + t + "]"] = t.toLowerCase()
        });
        var ce = function (e) {
            function t(e, t, n, i) {
                var o, r, s, a, l, u, d, f, h = t && t.ownerDocument, v = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== v && 9 !== v && 11 !== v)return n;
                if (!i && ((t ? t.ownerDocument || t : F) !== O && D(t), t = t || O, q)) {
                    if (11 !== v && (u = me.exec(e)))if (o = u[1]) {
                        if (9 === v) {
                            if (!(s = t.getElementById(o)))return n;
                            if (s.id === o)return n.push(s), n
                        } else if (h && (s = h.getElementById(o)) && z(t, s) && s.id === o)return n.push(s), n
                    } else {
                        if (u[2])return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = u[3]) && x.getElementsByClassName && t.getElementsByClassName)return Z.apply(n, t.getElementsByClassName(o)), n
                    }
                    if (x.qsa && !U[e + " "] && (!P || !P.test(e))) {
                        if (1 !== v) h = t, f = e; else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(we, "\\$&") : t.setAttribute("id", a = I), d = S(e), r = d.length, l = pe.test(a) ? "#" + a : "[id='" + a + "']"; r--;)d[r] = l + " " + p(d[r]);
                            f = d.join(","), h = ye.test(e) && c(t.parentNode) || t
                        }
                        if (f)try {
                            return Z.apply(n, h.querySelectorAll(f)), n
                        } catch (e) {
                        } finally {
                            a === I && t.removeAttribute("id")
                        }
                    }
                }
                return E(e.replace(ae, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
                }

                var t = [];
                return e
            }

            function i(e) {
                return e[I] = !0, e
            }

            function o(e) {
                var t = O.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = n.length; i--;)k.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                return e ? 1 : -1
            }

            function a(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return i(function (t) {
                    return t = +t, i(function (n, i) {
                        for (var o, r = e([], n.length, t), s = r.length; s--;)n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {
            }

            function p(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++)i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir, o = n && "parentNode" === i, r = R++;
                return t.first ? function (t, n, r) {
                    for (; t = t[i];)if (1 === t.nodeType || o)return e(t, n, r)
                } : function (t, n, s) {
                    var a, l, u, c = [M, r];
                    if (s) {
                        for (; t = t[i];)if ((1 === t.nodeType || o) && e(t, n, s))return !0
                    } else for (; t = t[i];)if (1 === t.nodeType || o) {
                        if (u = t[I] || (t[I] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = l[i]) && a[0] === M && a[1] === r)return c[2] = a[2];
                        if (l[i] = c, c[2] = e(t, n, s))return !0
                    }
                }
            }

            function h(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var o = e.length; o--;)if (!e[o](t, n, i))return !1;
                    return !0
                } : e[0]
            }

            function v(e, n, i) {
                for (var o = 0, r = n.length; r > o; o++)t(e, n[o], i);
                return i
            }

            function g(e, t, n, i, o) {
                for (var r, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), u && t.push(a)));
                return s
            }

            function m(e, t, n, o, r, s) {
                return o && !o[I] && (o = m(o)), r && !r[I] && (r = m(r, s)), i(function (i, s, a, l) {
                    var u, c, d, p = [], f = [], h = s.length, m = i || v(t || "*", a.nodeType ? [a] : a, []), y = !e || !i && t ? m : g(m, p, e, a, l), w = n ? r || (i ? e : h || o) ? [] : s : y;
                    if (n && n(y, w, a, l), o)for (u = g(w, f), o(u, [], a, l), c = u.length; c--;)(d = u[c]) && (w[f[c]] = !(y[f[c]] = d));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (u = [], c = w.length; c--;)(d = w[c]) && u.push(y[c] = d);
                                r(null, w = [], u, l)
                            }
                            for (c = w.length; c--;)(d = w[c]) && (u = r ? ee(i, d) : p[c]) > -1 && (i[u] = !(s[u] = d))
                        }
                    } else w = g(w === s ? w.splice(h, w.length) : w), r ? r(null, s, w, l) : Z.apply(s, w)
                })
            }

            function y(e) {
                for (var t, n, i, o = e.length, r = k.relative[e[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = f(function (e) {
                    return e === t
                }, s, !0), u = f(function (e) {
                    return ee(t, e) > -1
                }, s, !0), c = [function (e, n, i) {
                    var o = !r && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, o
                }]; o > a; a++)if (n = k.relative[e[a].type]) c = [f(h(c), n)]; else {
                    if (n = k.filter[e[a].type].apply(null, e[a].matches), n[I]) {
                        for (i = ++a; o > i && !k.relative[e[i].type]; i++);
                        return m(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ae, "$1"), n, i > a && y(e.slice(a, i)), o > i && y(e = e.slice(i)), o > i && p(e))
                    }
                    c.push(n)
                }
                return h(c)
            }

            function w(e, n) {
                var o = n.length > 0, r = e.length > 0, s = function (i, s, a, l, u) {
                    var c, d, p, f = 0, h = "0", v = i && [], m = [], y = A, w = i || r && k.find.TAG("*", u), b = M += null == y ? 1 : Math.random() || .1, x = w.length;
                    for (u && (A = s === O || s || u); h !== x && null != (c = w[h]); h++) {
                        if (r && c) {
                            for (d = 0, s || c.ownerDocument === O || (D(c), a = !q); p = e[d++];)if (p(c, s || O, a)) {
                                l.push(c);
                                break
                            }
                            u && (M = b)
                        }
                        o && ((c = !p && c) && f--, i && v.push(c))
                    }
                    if (f += h, o && h !== f) {
                        for (d = 0; p = n[d++];)p(v, m, s, a);
                        if (i) {
                            if (f > 0)for (; h--;)v[h] || m[h] || (m[h] = Q.call(l));
                            m = g(m)
                        }
                        Z.apply(l, m), u && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (M = b, A = y), v
                };
                return o ? i(s) : s
            }

            var b, x, k, T, C, S, $, E, A, j, N, D, O, H, q, P, L, _, z, I = "sizzle" + 1 * new Date, F = e.document, M = 0, R = 0, W = n(), B = n(), U = n(), X = function (e, t) {
                return e === t && (N = !0), 0
            }, Y = 1 << 31, V = {}.hasOwnProperty, G = [], Q = G.pop, J = G.push, Z = G.push, K = G.slice, ee = function (e, t) {
                for (var n = 0, i = e.length; i > n; n++)if (e[n] === t)return n;
                return -1
            }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(re), pe = new RegExp("^" + ie + "$"), fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, he = /^(?:input|select|textarea|button)$/i, ve = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, we = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), xe = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, ke = function () {
                D()
            };
            try {
                Z.apply(G = K.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
            } catch (e) {
                Z = {
                    apply: G.length ? function (e, t) {
                        J.apply(e, K.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            x = t.support = {}, C = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, D = t.setDocument = function (e) {
                var t, n, i = e ? e.ownerDocument || e : F;
                return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, H = O.documentElement, q = !C(O), (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), x.attributes = o(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = o(function (e) {
                    return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = ge.test(O.getElementsByClassName), x.getById = o(function (e) {
                    return H.appendChild(e).id = I, !O.getElementsByName || !O.getElementsByName(I).length
                }), x.getById ? (k.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && q) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, k.filter.ID = function (e) {
                    var t = e.replace(be, xe);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete k.find.ID, k.filter.ID = function (e) {
                    var t = e.replace(be, xe);
                    return function (e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), k.find.TAG = x.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [], o = 0, r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, k.find.CLASS = x.getElementsByClassName && function (e, t) {
                        return "undefined" != typeof t.getElementsByClassName && q ? t.getElementsByClassName(e) : void 0
                    }, L = [], P = [], (x.qsa = ge.test(O.querySelectorAll)) && (o(function (e) {
                    H.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + I + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || P.push(".#.+[+~]")
                }), o(function (e) {
                    var t = O.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
                })), (x.matchesSelector = ge.test(_ = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function (e) {
                    x.disconnectedMatch = _.call(e, "div"), _.call(e, "[s!='']:x"), L.push("!=", re)
                }), P = P.length && new RegExp(P.join("|")), L = L.length && new RegExp(L.join("|")), t = ge.test(H.compareDocumentPosition), z = t || ge.test(H.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)for (; t = t.parentNode;)if (t === e)return !0;
                    return !1
                }, X = t ? function (e, t) {
                    if (e === t)return N = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === F && z(F, e) ? -1 : t === O || t.ownerDocument === F && z(F, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t)return N = !0, 0;
                    var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], l = [t];
                    if (!o || !r)return e === O ? -1 : t === O ? 1 : o ? -1 : r ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                    if (o === r)return s(e, t);
                    for (n = e; n = n.parentNode;)a.unshift(n);
                    for (n = t; n = n.parentNode;)l.unshift(n);
                    for (; a[i] === l[i];)i++;
                    return i ? s(a[i], l[i]) : a[i] === F ? -1 : l[i] === F ? 1 : 0
                }, O) : O
            }, t.matches = function (e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== O && D(e), n = n.replace(ce, "='$1']"), x.matchesSelector && q && !U[n + " "] && (!L || !L.test(n)) && (!P || !P.test(n)))try {
                    var i = _.call(e, n);
                    if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
                } catch (e) {
                }
                return t(n, O, null, [e]).length > 0
            }, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== O && D(e), z(e, t)
            }, t.attr = function (e, t) {
                (e.ownerDocument || e) !== O && D(e);
                var n = k.attrHandle[t.toLowerCase()], i = n && V.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
                return void 0 !== i ? i : x.attributes || !q ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function (e) {
                var t, n = [], i = 0, o = 0;
                if (N = !x.detectDuplicates, j = !x.sortStable && e.slice(0), e.sort(X), N) {
                    for (; t = e[o++];)t === e[o] && (i = n.push(o));
                    for (; i--;)e.splice(n[i], 1)
                }
                return j = null, e
            }, T = t.getText = function (e) {
                var t, n = "", i = 0, o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent)return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)n += T(e)
                    } else if (3 === o || 4 === o)return e.nodeValue
                } else for (; t = e[i++];)n += T(t);
                return n
            }, k = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(be, xe).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                    }, ATTR: function (e, n, i) {
                        return function (o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    }, CHILD: function (e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                        return 1 === i && 0 === o ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var u, c, d, p, f, h, v = r !== s ? "nextSibling" : "previousSibling", g = t.parentNode, m = a && t.nodeName.toLowerCase(), y = !l && !a, w = !1;
                            if (g) {
                                if (r) {
                                    for (; v;) {
                                        for (p = t; p = p[v];)if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)return !1;
                                        h = v = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (p = g, d = p[I] || (p[I] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], f = u[0] === M && u[1], w = f && u[2], p = f && g.childNodes[f]; p = ++f && p && p[v] || (w = f = 0) || h.pop();)if (1 === p.nodeType && ++w && p === t) {
                                        c[e] = [M, f, w];
                                        break
                                    }
                                } else if (y && (p = t, d = p[I] || (p[I] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], f = u[0] === M && u[1], w = f), w === !1)for (; (p = ++f && p && p[v] || (w = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++w || (y && (d = p[I] || (p[I] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[e] = [M, w]), p !== t)););
                                return w -= o, w === i || w % i === 0 && w / i >= 0
                            }
                        }
                    }, PSEUDO: function (e, n) {
                        var o, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[I] ? r(n) : r.length > 1 ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                            for (var i, o = r(e, n), s = o.length; s--;)i = ee(e, o[s]), e[i] = !(t[i] = o[s])
                        }) : function (e) {
                            return r(e, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function (e) {
                        var t = [], n = [], o = $(e.replace(ae, "$1"));
                        return o[I] ? i(function (e, t, n, i) {
                            for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                        }) : function (e, i, r) {
                            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }), has: i(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }), contains: i(function (e) {
                        return e = e.replace(be, xe), function (t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                    }), lang: i(function (e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(), function (t) {
                            var n;
                            do if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === H
                    }, focus: function (e) {
                        return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: function (e) {
                        return e.disabled === !1
                    }, disabled: function (e) {
                        return e.disabled === !0
                    }, checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                        return !0
                    }, parent: function (e) {
                        return !k.pseudos.empty(e)
                    }, header: function (e) {
                        return ve.test(e.nodeName)
                    }, input: function (e) {
                        return he.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: u(function () {
                        return [0]
                    }), last: u(function (e, t) {
                        return [t - 1]
                    }), eq: u(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }), even: u(function (e, t) {
                        for (var n = 0; t > n; n += 2)e.push(n);
                        return e
                    }), odd: u(function (e, t) {
                        for (var n = 1; t > n; n += 2)e.push(n);
                        return e
                    }), lt: u(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;)e.push(i);
                        return e
                    }), gt: u(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;)e.push(i);
                        return e
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})k.pseudos[b] = a(b);
            for (b in{submit: !0, reset: !0})k.pseudos[b] = l(b);
            return d.prototype = k.filters = k.pseudos, k.setFilters = new d, S = t.tokenize = function (e, n) {
                var i, o, r, s, a, l, u, c = B[e + " "];
                if (c)return n ? 0 : c.slice(0);
                for (a = e, l = [], u = k.preFilter; a;) {
                    i && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ue.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(ae, " ")
                    }), a = a.slice(i.length));
                    for (s in k.filter)!(o = fe[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i)break
                }
                return n ? a.length : a ? t.error(e) : B(e, l).slice(0)
            }, $ = t.compile = function (e, t) {
                var n, i = [], o = [], r = U[e + " "];
                if (!r) {
                    for (t || (t = S(e)), n = t.length; n--;)r = y(t[n]), r[I] ? i.push(r) : o.push(r);
                    r = U(e, w(o, i)), r.selector = e
                }
                return r
            }, E = t.select = function (e, t, n, i) {
                var o, r, s, a, l, u = "function" == typeof e && e, d = !i && S(e = u.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === t.nodeType && q && k.relative[r[1].type]) {
                        if (t = (k.find.ID(s.matches[0].replace(be, xe), t) || [])[0], !t)return n;
                        u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);)if ((l = k.find[a]) && (i = l(s.matches[0].replace(be, xe), ye.test(r[0].type) && c(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && p(r), !e)return Z.apply(n, i), n;
                        break
                    }
                }
                return (u || $(e, d))(i, t, !q, n, !t || ye.test(e) && c(t.parentNode) || t), n
            }, x.sortStable = I.split("").sort(X).join("") === I, x.detectDuplicates = !!N, D(), x.sortDetached = o(function (e) {
                return 1 & e.compareDocumentPosition(O.createElement("div"))
            }), o(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function (e) {
                return null == e.getAttribute("disabled")
            }) || r(te, function (e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.uniqueSort = re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
        var de = function (e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                if (o && re(e).is(n))break;
                i.push(e)
            }
            return i
        }, pe = function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }, fe = re.expr.match.needsContext, he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, ve = /^.[^:#\[\.,]*$/;
        re.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, re.fn.extend({
            find: function (e) {
                var t, n = this.length, i = [], o = this;
                if ("string" != typeof e)return this.pushStack(re(e).filter(function () {
                    for (t = 0; n > t; t++)if (re.contains(o[t], this))return !0
                }));
                for (t = 0; n > t; t++)re.find(e, o[t], i);
                return i = this.pushStack(n > 1 ? re.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
            }, filter: function (e) {
                return this.pushStack(i(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(i(this, e || [], !0))
            }, is: function (e) {
                return !!i(this, "string" == typeof e && fe.test(e) ? re(e) : e || [], !1).length
            }
        });
        var ge, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ye = re.fn.init = function (e, t, n) {
            var i, o;
            if (!e)return this;
            if (n = n || ge, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : me.exec(e), !i || !i[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), he.test(i[1]) && re.isPlainObject(t))for (i in t)re.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return o = G.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = G, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
        };
        ye.prototype = re.fn, ge = re(G);
        var we = /^(?:parents|prev(?:Until|All))/, be = {children: !0, contents: !0, next: !0, prev: !0};
        re.fn.extend({
            has: function (e) {
                var t = re(e, this), n = t.length;
                return this.filter(function () {
                    for (var e = 0; n > e; e++)if (re.contains(this, t[e]))return !0
                })
            }, closest: function (e, t) {
                for (var n, i = 0, o = this.length, r = [], s = fe.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; o > i; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                    r.push(n);
                    break
                }
                return this.pushStack(r.length > 1 ? re.uniqueSort(r) : r)
            }, index: function (e) {
                return e ? "string" == typeof e ? K.call(re(e), this[0]) : K.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), re.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return de(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return de(e, "parentNode", n)
            }, next: function (e) {
                return o(e, "nextSibling")
            }, prev: function (e) {
                return o(e, "previousSibling")
            }, nextAll: function (e) {
                return de(e, "nextSibling")
            }, prevAll: function (e) {
                return de(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return de(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return de(e, "previousSibling", n)
            }, siblings: function (e) {
                return pe((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return pe(e.firstChild)
            }, contents: function (e) {
                return e.contentDocument || re.merge([], e.childNodes)
            }
        }, function (e, t) {
            re.fn[e] = function (n, i) {
                var o = re.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = re.filter(i, o)), this.length > 1 && (be[e] || re.uniqueSort(o), we.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var xe = /\S+/g;
        re.Callbacks = function (e) {
            e = "string" == typeof e ? r(e) : re.extend({}, e);
            var t, n, i, o, s = [], a = [], l = -1, u = function () {
                for (o = e.once, i = t = !0; a.length; l = -1)for (n = a.shift(); ++l < s.length;)s[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = s.length, n = !1);
                e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
            }, c = {
                add: function () {
                    return s && (n && !t && (l = s.length - 1, a.push(n)), function t(n) {
                        re.each(n, function (n, i) {
                            re.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== re.type(i) && t(i)
                        })
                    }(arguments), n && !t && u()), this
                }, remove: function () {
                    return re.each(arguments, function (e, t) {
                        for (var n; (n = re.inArray(t, s, n)) > -1;)s.splice(n, 1), l >= n && l--
                    }), this
                }, has: function (e) {
                    return e ? re.inArray(e, s) > -1 : s.length > 0
                }, empty: function () {
                    return s && (s = []), this
                }, disable: function () {
                    return o = a = [], s = n = "", this
                }, disabled: function () {
                    return !s
                }, lock: function () {
                    return o = a = [], n || (s = n = ""), this
                }, locked: function () {
                    return !!o
                }, fireWith: function (e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                }, fire: function () {
                    return c.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return c
        }, re.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]], n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return re.Deferred(function (n) {
                            re.each(t, function (t, r) {
                                var s = re.isFunction(e[t]) && e[t];
                                o[r[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && re.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? re.extend(e, i) : i
                    }
                }, o = {};
                return i.pipe = i.then, re.each(t, function (e, r) {
                    var s = r[2], a = r[3];
                    i[r[1]] = s.add, a && s.add(function () {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), e && e.call(o, o), o
            }, when: function (e) {
                var t, n, i, o = 0, r = Q.call(arguments), s = r.length, a = 1 !== s || e && re.isFunction(e.promise) ? s : 0, l = 1 === a ? e : re.Deferred(), u = function (e, n, i) {
                    return function (o) {
                        n[e] = this, i[e] = arguments.length > 1 ? Q.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
                if (s > 1)for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++)r[o] && re.isFunction(r[o].promise) ? r[o].promise().progress(u(o, n, t)).done(u(o, i, r)).fail(l.reject) : --a;
                return a || l.resolveWith(i, r), l.promise()
            }
        });
        var ke;
        re.fn.ready = function (e) {
            return re.ready.promise().done(e), this
        }, re.extend({
            isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? re.readyWait++ : re.ready(!0)
            }, ready: function (e) {
                (e === !0 ? --re.readyWait : re.isReady) || (re.isReady = !0, e !== !0 && --re.readyWait > 0 || (ke.resolveWith(G, [re]), re.fn.triggerHandler && (re(G).triggerHandler("ready"), re(G).off("ready"))))
            }
        }), re.ready.promise = function (t) {
            return ke || (ke = re.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(re.ready) : (G.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), ke.promise(t)
        }, re.ready.promise();
        var Te = function (e, t, n, i, o, r, s) {
            var a = 0, l = e.length, u = null == n;
            if ("object" === re.type(n)) {
                o = !0;
                for (a in n)Te(e, t, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, re.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(re(e), n)
                })), t))for (; l > a; a++)t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
        }, Ce = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        a.uid = 1, a.prototype = {
            register: function (e, t) {
                var n = t || {};
                return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), e[this.expando]
            }, cache: function (e) {
                if (!Ce(e))return {};
                var t = e[this.expando];
                return t || (t = {}, Ce(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            }, set: function (e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t) o[t] = n; else for (i in t)o[i] = t[i];
                return o
            }, get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
            }, access: function (e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, re.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            }, remove: function (e, t) {
                var n, i, o, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 === t) this.register(e); else {
                        re.isArray(t) ? i = t.concat(t.map(re.camelCase)) : (o = re.camelCase(t), t in r ? i = [t, o] : (i = o, i = i in r ? [i] : i.match(xe) || [])), n = i.length;
                        for (; n--;)delete r[i[n]]
                    }
                    (void 0 === t || re.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            }, hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !re.isEmptyObject(t)
            }
        };
        var Se = new a, $e = new a, Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ae = /[A-Z]/g;
        re.extend({
            hasData: function (e) {
                return $e.hasData(e) || Se.hasData(e)
            }, data: function (e, t, n) {
                return $e.access(e, t, n)
            }, removeData: function (e, t) {
                $e.remove(e, t)
            }, _data: function (e, t, n) {
                return Se.access(e, t, n)
            }, _removeData: function (e, t) {
                Se.remove(e, t)
            }
        }), re.fn.extend({
            data: function (e, t) {
                var n, i, o, r = this[0], s = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = $e.get(r), 1 === r.nodeType && !Se.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;)s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(r, i, o[i])));
                        Se.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function () {
                    $e.set(this, e)
                }) : Te(this, function (t) {
                    var n, i;
                    if (r && void 0 === t) {
                        if (n = $e.get(r, e) || $e.get(r, e.replace(Ae, "-$&").toLowerCase()), void 0 !== n)return n;
                        if (i = re.camelCase(e), n = $e.get(r, i), void 0 !== n)return n;
                        if (n = l(r, i, void 0), void 0 !== n)return n
                    } else i = re.camelCase(e), this.each(function () {
                        var n = $e.get(this, i);
                        $e.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && $e.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each(function () {
                    $e.remove(this, e)
                })
            }
        }), re.extend({
            queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = Se.get(e, t), n && (!i || re.isArray(n) ? i = Se.access(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = re.queue(e, t), i = n.length, o = n.shift(), r = re._queueHooks(e, t), s = function () {
                    re.dequeue(e, t)
                };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return Se.get(e, n) || Se.access(e, n, {
                        empty: re.Callbacks("once memory").add(function () {
                            Se.remove(e, [t + "queue", n])
                        })
                    })
            }
        }), re.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = re.queue(this, e, t);
                    re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    re.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, i = 1, o = re.Deferred(), r = this, s = this.length, a = function () {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)n = Se.get(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(t)
            }
        });
        var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ne = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"), De = ["Top", "Right", "Bottom", "Left"], Oe = function (e, t) {
            return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
        }, He = /^(?:checkbox|radio)$/i, qe = /<([\w:-]+)/, Pe = /^$|\/(?:java|ecma)script/i, Le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Le.optgroup = Le.option, Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead, Le.th = Le.td;
        var _e = /<|&#?\w+;/;
        !function () {
            var e = G.createDocumentFragment(), t = e.appendChild(G.createElement("div")), n = G.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var ze = /^key/, Ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Fe = /^([^.]*)(?:\.(.+)|)/;
        re.event = {
            global: {},
            add: function (e, t, n, i, o) {
                var r, s, a, l, u, c, d, p, f, h, v, g = Se.get(e);
                if (g)for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = re.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
                    return "undefined" != typeof re && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(xe) || [""], u = t.length; u--;)a = Fe.exec(t[u]) || [], f = v = a[1], h = (a[2] || "").split(".").sort(), f && (d = re.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = re.event.special[f] || {}, c = re.extend({
                    type: f,
                    origType: v,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && re.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), re.event.global[f] = !0)
            },
            remove: function (e, t, n, i, o) {
                var r, s, a, l, u, c, d, p, f, h, v, g = Se.hasData(e) && Se.get(e);
                if (g && (l = g.events)) {
                    for (t = (t || "").match(xe) || [""], u = t.length; u--;)if (a = Fe.exec(t[u]) || [], f = v = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = re.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;)c = p[r], !o && v !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(r, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                        s && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || re.removeEvent(e, f, g.handle), delete l[f])
                    } else for (f in l)re.event.remove(e, f + t[u], n, i, !0);
                    re.isEmptyObject(l) && Se.remove(e, "handle events")
                }
            },
            dispatch: function (e) {
                e = re.event.fix(e);
                var t, n, i, o, r, s = [], a = Q.call(arguments), l = (Se.get(this, "events") || {})[e.type] || [], u = re.event.special[e.type] || {};
                if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (s = re.event.handlers.call(this, e, l), t = 0; (o = s[t++]) && !e.isPropagationStopped();)for (e.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();)e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, i = ((re.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, i, o, r, s = [], a = t.delegateCount, l = e.target;
                if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                    for (i = [], n = 0; a > n; n++)r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? re(o, this).index(l) > -1 : re.find(o, this, null, [l]).length), i[o] && i.push(r);
                    i.length && s.push({elem: l, handlers: i})
                }
                return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, i, o, r = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            fix: function (e) {
                if (e[re.expando])return e;
                var t, n, i, o = e.type, r = e, s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Ie.test(o) ? this.mouseHooks : ze.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new re.Event(r), t = i.length; t--;)n = i[t], e[n] = r[n];
                return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        return this !== v() && this.focus ? (this.focus(), !1) : void 0
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === v() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : void 0
                    }, _default: function (e) {
                        return re.nodeName(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, re.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, re.Event = function (e, t) {
            return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
        }, re.Event.prototype = {
            constructor: re.Event,
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = f, e && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = f, e && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, re.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            re.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, o = e.relatedTarget, r = e.handleObj;
                    return o && (o === i || re.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), re.fn.extend({
            on: function (e, t, n, i) {
                return g(this, e, t, n, i)
            }, one: function (e, t, n, i) {
                return g(this, e, t, n, i, 1)
            }, off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e)this.off(o, t, e[o]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function () {
                    re.event.remove(this, e, n, t)
                })
            }
        });
        var Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Re = /<script|<style|<link/i, We = /checked\s*(?:[^=]|=\s*.checked.)/i, Be = /^true\/(.*)/, Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        re.extend({
            htmlPrefilter: function (e) {
                return e.replace(Me, "<$1></$2>")
            }, clone: function (e, t, n) {
                var i, o, r, s, a = e.cloneNode(!0), l = re.contains(e.ownerDocument, e);
                if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))for (s = c(a), r = c(e), i = 0, o = r.length; o > i; i++)x(r[i], s[i]);
                if (t)if (n)for (r = r || c(e), s = s || c(a), i = 0, o = r.length; o > i; i++)b(r[i], s[i]); else b(e, a);
                return s = c(a, "script"), s.length > 0 && d(s, !l && c(e, "script")), a
            }, cleanData: function (e) {
                for (var t, n, i, o = re.event.special, r = 0; void 0 !== (n = e[r]); r++)if (Ce(n)) {
                    if (t = n[Se.expando]) {
                        if (t.events)for (i in t.events)o[i] ? re.event.remove(n, i) : re.removeEvent(n, i, t.handle);
                        n[Se.expando] = void 0
                    }
                    n[$e.expando] && (n[$e.expando] = void 0)
                }
            }
        }), re.fn.extend({
            domManip: k, detach: function (e) {
                return T(this, e, !0)
            }, remove: function (e) {
                return T(this, e)
            }, text: function (e) {
                return Te(this, function (e) {
                    return void 0 === e ? re.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            }, append: function () {
                return k(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = m(this, e);
                        t.appendChild(e)
                    }
                })
            }, prepend: function () {
                return k(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = m(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return k(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return k(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (re.cleanData(c(e, !1)), e.textContent = "");
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return re.clone(this, e, t)
                })
            }, html: function (e) {
                return Te(this, function (e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                    if ("string" == typeof e && !Re.test(e) && !Le[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = re.htmlPrefilter(e);
                        try {
                            for (; i > n; n++)t = this[n] || {}, 1 === t.nodeType && (re.cleanData(c(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = [];
                return k(this, arguments, function (t) {
                    var n = this.parentNode;
                    re.inArray(this, e) < 0 && (re.cleanData(c(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), re.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            re.fn[e] = function (e) {
                for (var n, i = [], o = re(e), r = o.length - 1, s = 0; r >= s; s++)n = s === r ? this : this.clone(!0), re(o[s])[t](n), Z.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Xe, Ye = {
            HTML: "block",
            BODY: "block"
        }, Ve = /^margin/, Ge = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"), Qe = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        }, Je = function (e, t, n, i) {
            var o, r, s = {};
            for (r in t)s[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t)e.style[r] = s[r];
            return o
        }, Ze = G.documentElement;
        !function () {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ze.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ze.removeChild(s)
            }

            var n, i, o, r, s = G.createElement("div"), a = G.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), re.extend(ie, {
                pixelPosition: function () {
                    return t(), n
                }, boxSizingReliable: function () {
                    return null == i && t(), i
                }, pixelMarginRight: function () {
                    return null == i && t(), o
                }, reliableMarginLeft: function () {
                    return null == i && t(), r
                }, reliableMarginRight: function () {
                    var t, n = a.appendChild(G.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ze.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Ze.removeChild(s), a.removeChild(n), t
                }
            }))
        }();
        var Ke = /^(none|table(?!-c[ea]).+)/, et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, tt = {
            letterSpacing: "0",
            fontWeight: "400"
        }, nt = ["Webkit", "O", "Moz", "ms"], it = G.createElement("div").style;
        re.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = $(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {float: "cssFloat"},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, s, a = re.camelCase(t), l = e.style;
                    return t = re.cssProps[a] || (re.cssProps[a] = A(a) || a), s = re.cssHooks[t] || re.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = Ne.exec(n)) && o[1] && (n = u(e, t, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (re.cssNumber[a] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
                }
            },
            css: function (e, t, n, i) {
                var o, r, s, a = re.camelCase(t);
                return t = re.cssProps[a] || (re.cssProps[a] = A(a) || a), s = re.cssHooks[t] || re.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = $(e, t, i)), "normal" === o && t in tt && (o = tt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
            }
        }), re.each(["height", "width"], function (e, t) {
            re.cssHooks[t] = {
                get: function (e, n, i) {
                    return n ? Ke.test(re.css(e, "display")) && 0 === e.offsetWidth ? Je(e, et, function () {
                        return D(e, t, i)
                    }) : D(e, t, i) : void 0
                }, set: function (e, n, i) {
                    var o, r = i && Qe(e), s = i && N(e, t, i, "border-box" === re.css(e, "boxSizing", !1, r), r);
                    return s && (o = Ne.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = re.css(e, t)), j(e, n, s)
                }
            }
        }), re.cssHooks.marginLeft = E(ie.reliableMarginLeft, function (e, t) {
            return t ? (parseFloat($(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }), re.cssHooks.marginRight = E(ie.reliableMarginRight, function (e, t) {
            return t ? Je(e, {display: "inline-block"}, $, [e, "marginRight"]) : void 0
        }), re.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            re.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)o[e + De[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, Ve.test(e) || (re.cssHooks[e + t].set = j)
        }), re.fn.extend({
            css: function (e, t) {
                return Te(this, function (e, t, n) {
                    var i, o, r = {}, s = 0;
                    if (re.isArray(t)) {
                        for (i = Qe(e), o = t.length; o > s; s++)r[t[s]] = re.css(e, t[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
                }, e, t, arguments.length > 1)
            }, show: function () {
                return O(this, !0)
            }, hide: function () {
                return O(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Oe(this) ? re(this).show() : re(this).hide()
                })
            }
        }), re.Tween = H, H.prototype = {
            constructor: H, init: function (e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || re.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (re.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = H.propHooks[this.prop];
                return e && e.get ? e.get(this) : H.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = H.propHooks[this.prop];
                return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
            }
        }, H.prototype.init.prototype = H.prototype, H.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                }, set: function (e) {
                    re.fx.step[e.prop] ? re.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[re.cssProps[e.prop]] && !re.cssHooks[e.prop] ? e.elem[e.prop] = e.now : re.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, re.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, _default: "swing"
        }, re.fx = H.prototype.init, re.fx.step = {};
        var ot, rt, st = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
        re.Animation = re.extend(I, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return u(n.elem, e, Ne.exec(t), n), n
                }]
            }, tweener: function (e, t) {
                re.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(xe);
                for (var n, i = 0, o = e.length; o > i; i++)n = e[i], I.tweeners[n] = I.tweeners[n] || [], I.tweeners[n].unshift(t)
            }, prefilters: [_], prefilter: function (e, t) {
                t ? I.prefilters.unshift(e) : I.prefilters.push(e)
            }
        }), re.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? re.extend({}, e) : {
                complete: n || !n && t || re.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !re.isFunction(t) && t
            };
            return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
            }, i
        }, re.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Oe).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
            }, animate: function (e, t, n, i) {
                var o = re.isEmptyObject(e), r = re.speed(t, n, i), s = function () {
                    var t = I(this, re.extend({}, e), r);
                    (o || Se.get(this, "finish")) && t.stop(!0)
                };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            }, stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, o = null != e && e + "queueHooks", r = re.timers, s = Se.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]); else for (o in s)s[o] && s[o].stop && at.test(o) && i(s[o]);
                    for (o = r.length; o--;)r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    !t && n || re.dequeue(this, e)
                })
            }, finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = Se.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = re.timers, s = i ? i.length : 0;
                    for (n.finish = !0, re.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;)r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; s > t; t++)i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function (e, t) {
            var n = re.fn[t];
            re.fn[t] = function (e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, o)
            }
        }), re.each({
            slideDown: P("show"),
            slideUp: P("hide"),
            slideToggle: P("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            re.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), re.timers = [], re.fx.tick = function () {
            var e, t = 0, n = re.timers;
            for (ot = re.now(); t < n.length; t++)e = n[t],
            e() || n[t] !== e || n.splice(t--, 1);
            n.length || re.fx.stop(), ot = void 0
        }, re.fx.timer = function (e) {
            re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function () {
            rt || (rt = e.setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function () {
            e.clearInterval(rt), rt = null
        }, re.fx.speeds = {slow: 600, fast: 200, _default: 400}, re.fn.delay = function (t, n) {
            return t = re.fx ? re.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
                var o = e.setTimeout(n, t);
                i.stop = function () {
                    e.clearTimeout(o)
                }
            })
        }, function () {
            var e = G.createElement("input"), t = G.createElement("select"), n = t.appendChild(G.createElement("option"));
            e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
        }();
        var lt, ut = re.expr.attrHandle;
        re.fn.extend({
            attr: function (e, t) {
                return Te(this, re.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    re.removeAttr(this, e)
                })
            }
        }), re.extend({
            attr: function (e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)return "undefined" == typeof e.getAttribute ? re.prop(e, t, n) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(), o = re.attrHooks[t] || (re.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void re.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = re.find.attr(e, t), null == i ? void 0 : i))
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!ie.radioValue && "radio" === t && re.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }, removeAttr: function (e, t) {
                var n, i, o = 0, r = t && t.match(xe);
                if (r && 1 === e.nodeType)for (; n = r[o++];)i = re.propFix[n] || n, re.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            }
        }), lt = {
            set: function (e, t, n) {
                return t === !1 ? re.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, re.each(re.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ut[t] || re.find.attr;
            ut[t] = function (e, t, i) {
                var o, r;
                return i || (r = ut[t], ut[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, ut[t] = r), o
            }
        });
        var ct = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i;
        re.fn.extend({
            prop: function (e, t) {
                return Te(this, re.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each(function () {
                    delete this[re.propFix[e] || e]
                })
            }
        }), re.extend({
            prop: function (e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)return 1 === r && re.isXMLDoc(e) || (t = re.propFix[t] || t, o = re.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = re.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ct.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), ie.optSelected || (re.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }, set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            re.propFix[this.toLowerCase()] = this
        });
        var pt = /[\t\r\n\f]/g;
        re.fn.extend({
            addClass: function (e) {
                var t, n, i, o, r, s, a, l = 0;
                if (re.isFunction(e))return this.each(function (t) {
                    re(this).addClass(e.call(this, t, F(this)))
                });
                if ("string" == typeof e && e)for (t = e.match(xe) || []; n = this[l++];)if (o = F(n), i = 1 === n.nodeType && (" " + o + " ").replace(pt, " ")) {
                    for (s = 0; r = t[s++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                    a = re.trim(i), o !== a && n.setAttribute("class", a)
                }
                return this
            }, removeClass: function (e) {
                var t, n, i, o, r, s, a, l = 0;
                if (re.isFunction(e))return this.each(function (t) {
                    re(this).removeClass(e.call(this, t, F(this)))
                });
                if (!arguments.length)return this.attr("class", "");
                if ("string" == typeof e && e)for (t = e.match(xe) || []; n = this[l++];)if (o = F(n), i = 1 === n.nodeType && (" " + o + " ").replace(pt, " ")) {
                    for (s = 0; r = t[s++];)for (; i.indexOf(" " + r + " ") > -1;)i = i.replace(" " + r + " ", " ");
                    a = re.trim(i), o !== a && n.setAttribute("class", a)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function (n) {
                    re(this).toggleClass(e.call(this, n, F(this), t), t)
                }) : this.each(function () {
                    var t, i, o, r;
                    if ("string" === n)for (i = 0, o = re(this), r = e.match(xe) || []; t = r[i++];)o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || (t = F(this), t && Se.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Se.get(this, "__className__") || ""))
                })
            }, hasClass: function (e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)if (1 === n.nodeType && (" " + F(n) + " ").replace(pt, " ").indexOf(t) > -1)return !0;
                return !1
            }
        });
        var ft = /\r/g, ht = /[\x20\t\r\n\f]+/g;
        re.fn.extend({
            val: function (e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = re.isFunction(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, re(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(ft, "") : null == n ? "" : n)) : void 0
            }
        }), re.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = re.find.attr(e, "value");
                        return null != t ? t : re.trim(re.text(e)).replace(ht, " ")
                    }
                }, select: {
                    get: function (e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)if (n = i[l], (n.selected || l === o) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                            if (t = re(n).val(), r)return t;
                            s.push(t)
                        }
                        return s
                    }, set: function (e, t) {
                        for (var n, i, o = e.options, r = re.makeArray(t), s = o.length; s--;)i = o[s], (i.selected = re.inArray(re.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), re.each(["radio", "checkbox"], function () {
            re.valHooks[this] = {
                set: function (e, t) {
                    return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) > -1 : void 0
                }
            }, ie.checkOn || (re.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var vt = /^(?:focusinfocus|focusoutblur)$/;
        re.extend(re.event, {
            trigger: function (t, n, i, o) {
                var r, s, a, l, u, c, d, p = [i || G], f = ne.call(t, "type") ? t.type : t, h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = a = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !vt.test(f + re.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[re.expando] ? t : new re.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), d = re.event.special[f] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                    if (!o && !d.noBubble && !re.isWindow(i)) {
                        for (l = d.delegateType || f, vt.test(l + f) || (s = s.parentNode); s; s = s.parentNode)p.push(s), a = s;
                        a === (i.ownerDocument || G) && p.push(a.defaultView || a.parentWindow || e)
                    }
                    for (r = 0; (s = p[r++]) && !t.isPropagationStopped();)t.type = r > 1 ? l : d.bindType || f, c = (Se.get(s, "events") || {})[t.type] && Se.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && Ce(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                    return t.type = f, o || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !Ce(i) || u && re.isFunction(i[f]) && !re.isWindow(i) && (a = i[u], a && (i[u] = null), re.event.triggered = f, i[f](), re.event.triggered = void 0, a && (i[u] = a)), t.result
                }
            }, simulate: function (e, t, n) {
                var i = re.extend(new re.Event, n, {type: e, isSimulated: !0});
                re.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }), re.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    re.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                return n ? re.event.trigger(e, t, n, !0) : void 0
            }
        }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            re.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), re.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), ie.focusin = "onfocusin" in e, ie.focusin || re.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                re.event.simulate(t, e.target, re.event.fix(e))
            };
            re.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this, o = Se.access(i, t);
                    o || i.addEventListener(e, n, !0), Se.access(i, t, (o || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, o = Se.access(i, t) - 1;
                    o ? Se.access(i, t, o) : (i.removeEventListener(e, n, !0), Se.remove(i, t))
                }
            }
        });
        var gt = e.location, mt = re.now(), yt = /\?/;
        re.parseJSON = function (e) {
            return JSON.parse(e + "")
        }, re.parseXML = function (t) {
            var n;
            if (!t || "string" != typeof t)return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (e) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
        };
        var wt = /#.*$/, bt = /([?&])_=[^&]*/, xt = /^(.*?):[ \t]*([^\r\n]*)$/gm, kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Tt = /^(?:GET|HEAD)$/, Ct = /^\/\//, St = {}, $t = {}, Et = "*/".concat("*"), At = G.createElement("a");
        At.href = gt.href, re.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: gt.href,
                type: "GET",
                isLocal: kt.test(gt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Et,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": re.parseJSON, "text xml": re.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? W(W(e, re.ajaxSettings), t) : W(re.ajaxSettings, e)
            },
            ajaxPrefilter: M(St),
            ajaxTransport: M($t),
            ajax: function (t, n) {
                function i(t, n, i, a) {
                    var u, d, y, w, x, T = n;
                    2 !== b && (b = 2, l && e.clearTimeout(l), o = void 0, s = a || "", k.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, i && (w = B(p, k, i)), w = U(p, w, k, u), u ? (p.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (re.lastModified[r] = x), x = k.getResponseHeader("etag"), x && (re.etag[r] = x)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, d = w.data, y = w.error, u = !y)) : (y = T, !t && T || (T = "error", 0 > t && (t = 0))), k.status = t, k.statusText = (n || T) + "", u ? v.resolveWith(f, [d, T, k]) : v.rejectWith(f, [k, T, y]), k.statusCode(m), m = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [k, p, u ? d : y]), g.fireWith(f, [k, T]), c && (h.trigger("ajaxComplete", [k, p]), --re.active || re.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var o, r, s, a, l, u, c, d, p = re.ajaxSetup({}, n), f = p.context || p, h = p.context && (f.nodeType || f.jquery) ? re(f) : re.event, v = re.Deferred(), g = re.Callbacks("once memory"), m = p.statusCode || {}, y = {}, w = {}, b = 0, x = "canceled", k = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!a)for (a = {}; t = xt.exec(s);)a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = w[n] = w[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)if (2 > b)for (t in e)m[t] = [m[t], e[t]]; else k.always(e[k.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return o && o.abort(t), i(0, t), this
                    }
                };
                if (v.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, p.url = ((t || p.url || gt.href) + "").replace(wt, "").replace(Ct, gt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = re.trim(p.dataType || "*").toLowerCase().match(xe) || [""], null == p.crossDomain) {
                    u = G.createElement("a");
                    try {
                        u.href = p.url, u.href = u.href, p.crossDomain = At.protocol + "//" + At.host != u.protocol + "//" + u.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = re.param(p.data, p.traditional)), R(St, p, n, k), 2 === b)return k;
                c = re.event && p.global, c && 0 === re.active++ && re.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Tt.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (yt.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = bt.test(r) ? r.replace(bt, "$1_=" + mt++) : r + (yt.test(r) ? "&" : "?") + "_=" + mt++)), p.ifModified && (re.lastModified[r] && k.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && k.setRequestHeader("If-None-Match", re.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Et + "; q=0.01" : "") : p.accepts["*"]);
                for (d in p.headers)k.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (p.beforeSend.call(f, k, p) === !1 || 2 === b))return k.abort();
                x = "abort";
                for (d in{success: 1, error: 1, complete: 1})k[d](p[d]);
                if (o = R($t, p, n, k)) {
                    if (k.readyState = 1, c && h.trigger("ajaxSend", [k, p]), 2 === b)return k;
                    p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                        k.abort("timeout")
                    }, p.timeout));
                    try {
                        b = 1, o.send(y, i)
                    } catch (e) {
                        if (!(2 > b))throw e;
                        i(-1, e)
                    }
                } else i(-1, "No Transport");
                return k
            },
            getJSON: function (e, t, n) {
                return re.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return re.get(e, void 0, t, "script")
            }
        }), re.each(["get", "post"], function (e, t) {
            re[t] = function (e, n, i, o) {
                return re.isFunction(n) && (o = o || i, i = n, n = void 0), re.ajax(re.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, re.isPlainObject(e) && e))
            }
        }), re._evalUrl = function (e) {
            return re.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
        }, re.fn.extend({
            wrapAll: function (e) {
                var t;
                return re.isFunction(e) ? this.each(function (t) {
                    re(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                    return e
                }).append(this)), this)
            }, wrapInner: function (e) {
                return re.isFunction(e) ? this.each(function (t) {
                    re(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = re(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = re.isFunction(e);
                return this.each(function (n) {
                    re(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
                }).end()
            }
        }), re.expr.filters.hidden = function (e) {
            return !re.expr.filters.visible(e)
        }, re.expr.filters.visible = function (e) {
            return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
        };
        var jt = /%20/g, Nt = /\[\]$/, Dt = /\r?\n/g, Ot = /^(?:submit|button|image|reset|file)$/i, Ht = /^(?:input|select|textarea|keygen)/i;
        re.param = function (e, t) {
            var n, i = [], o = function (e, t) {
                t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function () {
                o(this.name, this.value)
            }); else for (n in e)X(n, e[n], t, o);
            return i.join("&").replace(jt, "+")
        }, re.fn.extend({
            serialize: function () {
                return re.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = re.prop(this, "elements");
                    return e ? re.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !re(this).is(":disabled") && Ht.test(this.nodeName) && !Ot.test(e) && (this.checked || !He.test(e))
                }).map(function (e, t) {
                    var n = re(this).val();
                    return null == n ? null : re.isArray(n) ? re.map(n, function (e) {
                        return {name: t.name, value: e.replace(Dt, "\r\n")}
                    }) : {name: t.name, value: n.replace(Dt, "\r\n")}
                }).get()
            }
        }), re.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest
            } catch (e) {
            }
        };
        var qt = {0: 200, 1223: 204}, Pt = re.ajaxSettings.xhr();
        ie.cors = !!Pt && "withCredentials" in Pt, ie.ajax = Pt = !!Pt, re.ajaxTransport(function (t) {
            var n, i;
            return ie.cors || Pt && !t.crossDomain ? {
                send: function (o, r) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (s in t.xhrFields)a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o)a.setRequestHeader(s, o[s]);
                    n = function (e) {
                        return function () {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                        4 === a.readyState && e.setTimeout(function () {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)throw e
                    }
                }, abort: function () {
                    n && n()
                }
            } : void 0
        }), re.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (e) {
                    return re.globalEval(e), e
                }
            }
        }), re.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), re.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, o) {
                        t = re("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                        }), G.head.appendChild(t[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Lt = [], _t = /(=)\?(?=&|$)|\?\?/;
        re.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Lt.pop() || re.expando + "_" + mt++;
                return this[e] = !0, e
            }
        }), re.ajaxPrefilter("json jsonp", function (t, n, i) {
            var o, r, s, a = t.jsonp !== !1 && (_t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(t.data) && "data");
            return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(_t, "$1" + o) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
                return s || re.error(o + " was not called"), s[0]
            }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
                s = arguments
            }, i.always(function () {
                void 0 === r ? re(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Lt.push(o)), s && re.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), re.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || G;
            var i = he.exec(e), o = !n && [];
            return i ? [t.createElement(i[1])] : (i = p([e], t, o), o && o.length && re(o).remove(), re.merge([], i.childNodes))
        };
        var zt = re.fn.load;
        re.fn.load = function (e, t, n) {
            if ("string" != typeof e && zt)return zt.apply(this, arguments);
            var i, o, r, s = this, a = e.indexOf(" ");
            return a > -1 && (i = re.trim(e.slice(a)), e = e.slice(0, a)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && re.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                r = arguments, s.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
            }).always(n && function (e, t) {
                    s.each(function () {
                        n.apply(this, r || [e.responseText, t, e])
                    })
                }), this
        }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            re.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), re.expr.filters.animated = function (e) {
            return re.grep(re.timers, function (t) {
                return e === t.elem
            }).length
        }, re.offset = {
            setOffset: function (e, t, n) {
                var i, o, r, s, a, l, u, c = re.css(e, "position"), d = re(e), p = {};
                "static" === c && (e.style.position = "relative"), a = d.offset(), r = re.css(e, "top"), l = re.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, re.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
            }
        }, re.fn.extend({
            offset: function (e) {
                if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                    re.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0], o = {top: 0, left: 0}, r = i && i.ownerDocument;
                return r ? (t = r.documentElement, re.contains(t, i) ? (o = i.getBoundingClientRect(), n = Y(r), {
                    top: o.top + n.pageYOffset - t.clientTop,
                    left: o.left + n.pageXOffset - t.clientLeft
                }) : o) : void 0
            }, position: function () {
                if (this[0]) {
                    var e, t, n = this[0], i = {top: 0, left: 0};
                    return "fixed" === re.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (i = e.offset()), i.top += re.css(e[0], "borderTopWidth", !0), i.left += re.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - re.css(n, "marginTop", !0),
                        left: t.left - i.left - re.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === re.css(e, "position");)e = e.offsetParent;
                    return e || Ze
                })
            }
        }), re.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = "pageYOffset" === t;
            re.fn[e] = function (i) {
                return Te(this, function (e, i, o) {
                    var r = Y(e);
                    return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
                }, e, i, arguments.length)
            }
        }), re.each(["top", "left"], function (e, t) {
            re.cssHooks[t] = E(ie.pixelPosition, function (e, n) {
                return n ? (n = $(e, t), Ge.test(n) ? re(e).position()[t] + "px" : n) : void 0
            })
        }), re.each({Height: "height", Width: "width"}, function (e, t) {
            re.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
                re.fn[i] = function (i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Te(this, function (t, n, i) {
                        var o;
                        return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? re.css(t, n, s) : re.style(t, n, i, s)
                    }, t, r ? i : void 0, r, null)
                }
            })
        }), re.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }, size: function () {
                return this.length
            }
        }), re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return re
        });
        var It = e.jQuery, Ft = e.$;
        return re.noConflict = function (t) {
            return e.$ === re && (e.$ = Ft), t && e.jQuery === re && (e.jQuery = It), re
        }, t || (e.jQuery = e.$ = re), re
    }),
/*
 * mobile-sniff.min.js
 */
    !function () {
        window.mobileCheck = function () {
            var e = !1;
            return function (t) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), e
        }
    }(),
/*!
 * modernizr 3.3.1
 */
    !function (e, n, t) {
        function o(e, n) {
            return typeof e === n
        }

        function s() {
            var e, n, t, s, a, i, r;
            for (var l in c)if (c.hasOwnProperty(l)) {
                if (e = [], n = c[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))for (t = 0; t < n.options.aliases.length; t++)e.push(n.options.aliases[t].toLowerCase());
                for (s = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++)i = e[a], r = i.split("."), 1 === r.length ? Modernizr[r[0]] = s : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = s), f.push((s ? "" : "no-") + r.join("-"))
            }
        }

        function a(e) {
            var n = u.className, t = Modernizr._config.classPrefix || "";
            if (p && (n = n.baseVal), Modernizr._config.enableJSClass) {
                var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
                n = n.replace(o, "$1" + t + "js$2")
            }
            Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), p ? u.className.baseVal = n : u.className = n)
        }

        function i() {
            return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
        }

        function r() {
            var e = n.body;
            return e || (e = i(p ? "svg" : "body"), e.fake = !0), e
        }

        function l(e, t, o, s) {
            var a, l, f, c, d = "modernizr", p = i("div"), h = r();
            if (parseInt(o, 10))for (; o--;)f = i("div"), f.id = s ? s[o] : d + (o + 1), p.appendChild(f);
            return a = i("style"), a.type = "text/css", a.id = "s" + d, (h.fake ? h : p).appendChild(a), h.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), p.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = u.style.overflow, u.style.overflow = "hidden", u.appendChild(h)), l = t(p, e), h.fake ? (h.parentNode.removeChild(h), u.style.overflow = c, u.offsetHeight) : p.parentNode.removeChild(p), !!l
        }

        var f = [], c = [], d = {
            _version: "3.3.1",
            _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
            _q: [],
            on: function (e, n) {
                var t = this;
                setTimeout(function () {
                    n(t[e])
                }, 0)
            },
            addTest: function (e, n, t) {
                c.push({name: e, fn: n, options: t})
            },
            addAsyncTest: function (e) {
                c.push({name: null, fn: e})
            }
        }, Modernizr = function () {
        };
        Modernizr.prototype = d, Modernizr = new Modernizr;
        var u = n.documentElement, p = "svg" === u.nodeName.toLowerCase(), h = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        d._prefixes = h;
        var m = d.testStyles = l;
        Modernizr.addTest("touchevents", function () {
            var t;
            if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0; else {
                var o = ["@media (", h.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                m(o, function (e) {
                    t = 9 === e.offsetTop
                })
            }
            return t
        }), s(), a(f), delete d.addTest, delete d.addAsyncTest;
        for (var v = 0; v < Modernizr._q.length; v++)Modernizr._q[v]();
        e.Modernizr = Modernizr
    }(window, document),
/*!
 * prepare-transition.min.js
 */
    !function (e) {
        e.fn.prepareTransition = function () {
            return this.each(function () {
                var t = e(this);
                t.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd", function () {
                    t.removeClass("is-transitioning")
                });
                var n = ["transition-duration", "-moz-transition-duration", "-webkit-transition-duration", "-o-transition-duration"], i = 0;
                e.each(n, function (e, n) {
                    i || (i = parseFloat(t.css(n)))
                }), 0 != i && (t.addClass("is-transitioning"), t[0].offsetWidth)
            })
        }
    }(jQuery),
/*!
 * slick-slim.min.js
 */
    !function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function (e) {
        "use strict";
        var t = window.Slick || {};
        t = function () {
            function t(t, i) {
                var o, r = this;
                r.defaults = {
                    accessibility: !0,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous slide" tabindex="0" role="button">Previous slide</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next slide" tabindex="0" role="button">Next slide</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    cssEase: "ease",
                    customPaging: function (t, n) {
                        return e('<button type="button" data-role="none" role="button" tabindex="0" />').text("Slide " + (n + 1))
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    initialSlide: 0,
                    lazyLoad: !0,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.init(!0)
            }

            var n = 0;
            return t
        }(), t.prototype.activateADA = function () {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({tabindex: "-1"}), e.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
        }, t.prototype.animateSlide = function (t, n) {
            var i = {}, o = this;
            o.options.rtl === !0 && (t = -t), o.transformsEnabled === !1 ? o.$slideTrack.animate({left: t}, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({animStart: o.currentLeft}).animate({animStart: t}, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function (e) {
                    e = Math.ceil(e), i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)
                },
                complete: function () {
                    n && n.call()
                }
            })) : (o.applyTransition(), t = Math.ceil(t), i[o.animType] = "translate3d(" + t + "px, 0px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {
                o.disableTransition(), n.call()
            }, o.options.speed))
        }, t.prototype.getNavTarget = function () {
            var t = this, n = t.options.asNavFor;
            return n && null !== n && (n = e(n).not(t.$slider)), n
        }, t.prototype.asNavFor = function (t) {
            var n = this, i = n.getNavTarget();
            null !== i && "object" == typeof i && i.each(function () {
                var n = e(this).slick("getSlick");
                n.unslicked || n.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function (e) {
            var t = this, n = {};
            t.options.fade === !1 ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.autoPlay = function () {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function () {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function () {
            var e = this, t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || e.slideHandler(t)
        }, t.prototype.buildArrows = function () {
            var t = this;
            t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function () {
            var t, n, i = this;
            if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1)n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, t.prototype.buildOut = function () {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
                e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), t.options.swipeToSlide === !0 && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function () {
            var e, t, n, i, o, r, s, a = this;
            if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var u = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                            var c = e * s + (t * a.options.slidesPerRow + n);
                            r.get(c) && u.appendChild(r.get(c))
                        }
                        l.appendChild(u)
                    }
                    i.appendChild(l)
                }
                a.$slider.empty().append(i), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.changeSlide = function (t, n) {
            var i, o, r, s = this, a = e(t.currentTarget);
            switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
                case"previous":
                    o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                    break;
                case"next":
                    o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                    break;
                case"index":
                    var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function (e) {
            var t, n, i = this;
            if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var o in t) {
                if (e < t[o]) {
                    e = n;
                    break
                }
                n = t[o]
            }
            return e
        }, t.prototype.cleanUpEvents = function () {
            var t = this;
            t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function () {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function () {
            var e, t = this;
            t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function (e) {
            var t = this;
            t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function (t) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                e(this).attr("style", e(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
        }, t.prototype.disableTransition = function (e) {
            var t = this, n = {};
            n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.fadeSlide = function (e, t) {
            var n = this;
            n.cssTransitions === !1 ? (n.$slides.eq(e).css({zIndex: n.options.zIndex}), n.$slides.eq(e).animate({opacity: 1}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), t && setTimeout(function () {
                n.disableTransition(e), t.call()
            }, n.options.speed))
        }, t.prototype.fadeSlideOut = function (e) {
            var t = this;
            t.cssTransitions === !1 ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function () {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (n) {
                n.stopImmediatePropagation();
                var i = e(this);
                setTimeout(function () {
                    t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
            var e = this;
            return e.currentSlide
        }, t.prototype.getDotCount = function () {
            for (var e = this, t = 0, n = 0, i = 0; t < e.slideCount;)++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return i - 1
        }, t.prototype.getLeft = function (e) {
            var t, n, i = this, o = 0;
            return i.slideOffset = 0, n = i.$slides.first().outerHeight(!0), i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1, o = n * i.options.slidesToShow * -1), i.slideCount % i.options.slidesToScroll !== 0 && e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (e > i.slideCount ? (i.slideOffset = (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth * -1, o = (i.options.slidesToShow - (e - i.slideCount)) * n * -1) : (i.slideOffset = i.slideCount % i.options.slidesToScroll * i.slideWidth * -1, o = i.slideCount % i.options.slidesToScroll * n * -1)), i.slideCount <= i.options.slidesToShow && (i.slideOffset = 0, o = 0), t = e * i.slideWidth * -1 + i.slideOffset
        }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
            var t = this;
            return t.options[e]
        }, t.prototype.getNavigableIndexes = function () {
            var e, t = this, n = 0, i = 0, o = [];
            for (n = t.options.slidesToScroll * -1, i = t.options.slidesToScroll * -1, e = 2 * t.slideCount; n < e;)o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, t.prototype.getSlick = function () {
            return this
        }, t.prototype.getSlideCount = function () {
            var t, n, i, o = this;
            return i = 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function (t, r) {
                if (r.offsetLeft - i + e(r).outerWidth() / 2 > o.swipeLeft * -1)return n = r, !1
            }), t = Math.abs(e(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
            var n = this;
            n.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
        }, t.prototype.init = function (t) {
            var n = this;
            e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateDots(), n.focusHandler()), t && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
        }, t.prototype.initADA = function () {
            var t, n, i, o = this;
            o.$slides.not(o.$slideTrack.find(".slick-cloned")).each(function (r) {
                e(this).attr("role", "option");
                var s = Math.floor(r / o.options.slidesToShow);
                o.options.dots === !0 && (n = "" + o.instanceUid + s, i = n, t === n && (n = "" + n + r), e(this).attr("id", "slickSlide" + n).attr("role", "tabpanel").attr("aria-labelledby", "slickDot" + i), t = "" + o.instanceUid + s)
            }), null !== o.$dots && o.$dots.attr("role", "tablist").find("li").each(function (t) {
                e(this).attr({
                    role: "tab",
                    "aria-selected": "false",
                    "aria-controls": "slickSlide" + o.instanceUid + t,
                    id: "slickDot" + o.instanceUid + t
                })
            }).first().attr("aria-selected", "true"), o.activateADA()
        }, t.prototype.initArrowEvents = function () {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide))
        }, t.prototype.updateADA = function () {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").attr("aria-selected", "false"), e.$dots.find(".slick-active").attr("aria-selected", "true")), e.activateADA()
        }, t.prototype.initArrowEvents = function () {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide))
        }, t.prototype.initDotEvents = function () {
            var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function () {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function () {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {action: "start"}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function () {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function (e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({data: {message: t.options.rtl === !0 ? "next" : "previous"}}) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({data: {message: t.options.rtl === !0 ? "previous" : "next"}}))
        }, t.prototype.lazyLoad = function () {
            function t(t) {
                e("img[data-lazy]", t).each(function () {
                    var t = e(this), n = e(this).attr("data-lazy"), i = document.createElement("img");
                    i.onload = function () {
                        t.animate({opacity: 0}, 100, function () {
                            t.attr("src", n).animate({opacity: 1}, 200, function () {
                                t.removeAttr("data-lazy").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, t, n])
                        })
                    }, i.onerror = function () {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n])
                    }, i.src = n
                })
            }

            var n, i, o, r, s = this;
            o = s.options.slidesToShow, r = Math.ceil(o + s.options.slidesToShow), s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++), n = s.$slider.find(".slick-slide").slice(o, r), t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(s.options.slidesToShow * -1), t(i))
        }, t.prototype.loadSlider = function () {
            var e = this;
            e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI()
        }, t.prototype.next = t.prototype.slickNext = function () {
            var e = this;
            e.changeSlide({data: {message: "next"}})
        }, t.prototype.orientationChange = function () {
            var e = this;
            e.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function () {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function () {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function (e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && t.updateADA())
        }, t.prototype.prev = t.prototype.slickPrev = function () {
            var e = this;
            e.changeSlide({data: {message: "previous"}})
        }, t.prototype.preventDefault = function (e) {
            e.preventDefault()
        }, t.prototype.refresh = function (t) {
            var n, i, o = this;
            i = o.slideCount - o.options.slidesToShow, o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {currentSlide: n}), o.init(), t || o.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, t.prototype.reinit = function () {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function () {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
                t.windowWidth = e(window).width(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.setCSS = function (e) {
            var t, n, i = this, o = {};
            i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {}, i.cssTransitions === !1 ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function () {
            var e = this;
            e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function () {
            var t, n = this;
            n.$slides.each(function (i, o) {
                t = n.slideWidth * i * -1, n.options.rtl === !0 ? e(o).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : e(o).css({position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0})
            }), n.$slides.eq(n.currentSlide).css({zIndex: n.options.zIndex - 1, opacity: 1})
        }, t.prototype.setOption = t.prototype.slickSetOption = function () {
            var t, n, i, o = this, r = !1;
            "object" === e.type(arguments[0]) ? (t = arguments[0], r = arguments[1], i = "multiple") : "string" === e.type(arguments[0]) && (t = arguments[0], n = arguments[1], r = arguments[2], "undefined" != typeof arguments[1] && (i = "single")), "single" === i ? o.options[t] = n : "multiple" === i && e.each(t, function (e, t) {
                o.options[e] = t
            }), r && (o.unload(), o.reinit())
        }, t.prototype.setPosition = function () {
            var e = this;
            e.setDimensions(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function () {
            var e = this, t = document.body.style;
            e.positionProp = "left", e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
        }, t.prototype.setSlideClasses = function (e) {
            var t, n, i, o = this;
            t = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= o.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (i = o.slideCount % o.options.slidesToShow, n = o.options.slidesToShow + e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? t.slice(n - (o.options.slidesToShow - i), n + i).addClass("slick-active").attr("aria-hidden", "false") : t.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), o.options.lazyLoad === !0 && o.lazyLoad()
        }, t.prototype.setupInfinite = function () {
            var t, n, i, o = this;
            if (o.options.fade === !1 && (n = null, o.slideCount > o.options.slidesToShow)) {
                for (i = o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1)n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < i; t += 1)n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.interrupt = function (e) {
            var t = this;
            e || t.autoPlay(), t.interrupted = e
        }, t.prototype.selectHandler = function (t) {
            var n = this, i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"), o = parseInt(i.attr("data-slick-index"));
            return o || (o = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(o), void n.asNavFor(o)) : void n.slideHandler(o)
        }, t.prototype.slideHandler = function (e, t, n) {
            var i, o, r, s, a, l = null, u = this;
            if (t = t || !1, (u.animating !== !0 || u.options.waitForAnimate !== !0) && !(u.options.fade === !0 && u.currentSlide === e || u.slideCount <= u.options.slidesToShow))return t === !1 && u.asNavFor(e), i = e, l = u.getLeft(i), s = u.getLeft(u.currentSlide), u.currentLeft = null === u.swipeLeft ? s : u.swipeLeft, u.options.autoplay && clearInterval(u.autoPlayTimer), o = i < 0 ? u.slideCount % u.options.slidesToScroll !== 0 ? u.slideCount - u.slideCount % u.options.slidesToScroll : u.slideCount + i : i >= u.slideCount ? u.slideCount % u.options.slidesToScroll !== 0 ? 0 : i - u.slideCount : i, u.animating = !0, u.$slider.trigger("beforeChange", [u, u.currentSlide, o]), r = u.currentSlide, u.currentSlide = o, u.setSlideClasses(u.currentSlide), u.options.asNavFor && (a = u.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(u.currentSlide)), u.updateDots(), u.options.fade === !0 ? void(n !== !0 ? (u.fadeSlideOut(r), u.fadeSlide(o, function () {
                u.postSlide(o)
            })) : u.postSlide(o)) : void(n !== !0 ? u.animateSlide(l, function () {
                u.postSlide(o)
            }) : u.postSlide(o))
        }, t.prototype.startLoad = function () {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function () {
            var e, t, n, i, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), i < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? o.options.rtl === !1 ? "left" : "right" : i <= 360 && i >= 315 ? o.options.rtl === !1 ? "left" : "right" : i >= 135 && i <= 225 ? o.options.rtl === !1 ? "right" : "left" : "vertical"
        }, t.prototype.swipeEnd = function (e) {
            var t, n, i = this;
            if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX)return !1;
            if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case"left":
                    case"down":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case"right":
                    case"up":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, t.prototype.swipeHandler = function (e) {
            var t = this;
            if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && e.type.indexOf("mouse") !== -1))switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, e.data.action) {
                case"start":
                    t.swipeStart(e);
                    break;
                case"move":
                    t.swipeMove(e);
                    break;
                case"end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function (e) {
            var t, n, i, o, r, s = this;
            return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), n = s.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.swipeLeft = t + i * o, s.options.fade !== !0 && s.options.touchMove !== !1 && (s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
        }, t.prototype.swipeStart = function (e) {
            var t, n = this;
            return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function () {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function (e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateDots = function () {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, t.prototype.visibility = function () {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function () {
            var e, n, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
            for (e = 0; e < s; e++)if ("object" == typeof o || "undefined" == typeof o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), "undefined" != typeof n)return n;
            return i
        }
    }), /*
 * jQuery throttle / debounce - v1.1
 */
    function (e, t) {
        var n, i = e.jQuery || e.Cowboy || (e.Cowboy = {});
        i.throttle = n = function (e, n, o, r) {
            function s() {
                function i() {
                    l = +new Date, o.apply(u, d)
                }

                function s() {
                    a = t
                }

                var u = this, c = +new Date - l, d = arguments;
                r && !a && i(), a && clearTimeout(a), r === t && c > e ? i() : n !== !0 && (a = setTimeout(r ? s : i, r === t ? e - c : e))
            }

            var a, l = 0;
            return "boolean" != typeof n && (r = o, o = n, n = t), i.guid && (s.guid = o.guid = o.guid || i.guid++), s
        }, i.debounce = function (e, i, o) {
            return o === t ? n(e, i, !1) : n(e, o, i !== !1)
        }
    }(this);
/*! VelocityJS.org (1.4.2) */
!function (a) {
    "use strict";
    function b(a) {
        var b = a.length, d = c.type(a);
        return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    if (!a.jQuery) {
        var c = function (a, b) {
            return new c.fn.init(a, b)
        };
        c.isWindow = function (a) {
            return a && a === a.window
        }, c.type = function (a) {
            return a ? "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a : a + ""
        }, c.isArray = Array.isArray || function (a) {
                return "array" === c.type(a)
            }, c.isPlainObject = function (a) {
            var b;
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a))return !1;
            try {
                if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf"))return !1
            } catch (a) {
                return !1
            }
            for (b in a);
            return void 0 === b || f.call(a, b)
        }, c.each = function (a, c, d) {
            var e, f = 0, g = a.length, h = b(a);
            if (d) {
                if (h)for (; f < g && (e = c.apply(a[f], d), e !== !1); f++); else for (f in a)if (a.hasOwnProperty(f) && (e = c.apply(a[f], d), e === !1))break
            } else if (h)for (; f < g && (e = c.call(a[f], f, a[f]), e !== !1); f++); else for (f in a)if (a.hasOwnProperty(f) && (e = c.call(a[f], f, a[f]), e === !1))break;
            return a
        }, c.data = function (a, b, e) {
            if (void 0 === e) {
                var f = a[c.expando], g = f && d[f];
                if (void 0 === b)return g;
                if (g && b in g)return g[b]
            } else if (void 0 !== b) {
                var h = a[c.expando] || (a[c.expando] = ++c.uuid);
                return d[h] = d[h] || {}, d[h][b] = e, e
            }
        }, c.removeData = function (a, b) {
            var e = a[c.expando], f = e && d[e];
            f && (b ? c.each(b, function (a, b) {
                delete f[b]
            }) : delete d[e])
        }, c.extend = function () {
            var a, b, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); i < j; i++)if (f = arguments[i])for (e in f)f.hasOwnProperty(e) && (a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d)));
            return h
        }, c.queue = function (a, d, e) {
            function f(a, c) {
                var d = c || [];
                return a && (b(Object(a)) ? !function (a, b) {
                    for (var c = +b.length, d = 0, e = a.length; d < c;)a[e++] = b[d++];
                    if (c !== c)for (; void 0 !== b[d];)a[e++] = b[d++];
                    return a.length = e, a
                }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
            }

            if (a) {
                d = (d || "fx") + "queue";
                var g = c.data(a, d);
                return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
            }
        }, c.dequeue = function (a, b) {
            c.each(a.nodeType ? [a] : a, function (a, d) {
                b = b || "fx";
                var e = c.queue(d, b), f = e.shift();
                "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function () {
                    c.dequeue(d, b)
                }))
            })
        }, c.fn = c.prototype = {
            init: function (a) {
                if (a.nodeType)return this[0] = a, this;
                throw new Error("Not a DOM node.")
            }, offset: function () {
                var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                return {
                    top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            }, position: function () {
                function a(a) {
                    for (var b = a.offsetParent; b && "html" !== b.nodeName.toLowerCase() && b.style && "static" === b.style.position;)b = b.offsetParent;
                    return b || document
                }

                var b = this[0], d = a(b), e = this.offset(), f = /^(?:body|html)$/i.test(d.nodeName) ? {
                    top: 0,
                    left: 0
                } : c(d).offset();
                return e.top -= parseFloat(b.style.marginTop) || 0, e.left -= parseFloat(b.style.marginLeft) || 0, d.style && (f.top += parseFloat(d.style.borderTopWidth) || 0, f.left += parseFloat(d.style.borderLeftWidth) || 0), {
                    top: e.top - f.top,
                    left: e.left - f.left
                }
            }
        };
        var d = {};
        c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
        for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++)e["[object " + h[i] + "]"] = h[i].toLowerCase();
        c.fn.init.prototype = c.fn, a.Velocity = {Utilities: c}
    }
}(window), function (a) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
}(function () {
    "use strict";
    return function (a, b, c, d) {
        function e(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }

        function f(a) {
            return t.isWrapped(a) ? a = s.call(a) : t.isNode(a) && (a = [a]), a
        }

        function g(a) {
            var b = o.data(a, "velocity");
            return null === b ? d : b
        }

        function h(a, b) {
            var c = g(a);
            c && c.delayTimer && !c.delayPaused && (c.delayRemaining = c.delay - b + c.delayBegin, c.delayPaused = !0, clearTimeout(c.delayTimer.setTimeout))
        }

        function i(a, b) {
            var c = g(a);
            c && c.delayTimer && c.delayPaused && (c.delayPaused = !1, c.delayTimer.setTimeout = setTimeout(c.delayTimer.next, c.delayRemaining))
        }

        function j(a) {
            return function (b) {
                return Math.round(b * a) * (1 / a)
            }
        }

        function k(a, c, d, e) {
            function f(a, b) {
                return 1 - 3 * b + 3 * a
            }

            function g(a, b) {
                return 3 * b - 6 * a
            }

            function h(a) {
                return 3 * a
            }

            function i(a, b, c) {
                return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
            }

            function j(a, b, c) {
                return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
            }

            function k(b, c) {
                for (var e = 0; e < p; ++e) {
                    var f = j(c, a, d);
                    if (0 === f)return c;
                    var g = i(c, a, d) - b;
                    c -= g / f
                }
                return c
            }

            function l() {
                for (var b = 0; b < t; ++b)x[b] = i(b * u, a, d)
            }

            function m(b, c, e) {
                var f, g, h = 0;
                do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
                return g
            }

            function n(b) {
                for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e)c += u;
                --e;
                var g = (b - x[e]) / (x[e + 1] - x[e]), h = c + g * u, i = j(h, a, d);
                return i >= q ? k(b, h) : 0 === i ? h : m(b, c, c + u)
            }

            function o() {
                y = !0, a === c && d === e || l()
            }

            var p = 4, q = .001, r = 1e-7, s = 10, t = 11, u = 1 / (t - 1), v = "Float32Array" in b;
            if (4 !== arguments.length)return !1;
            for (var w = 0; w < 4; ++w)if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w]))return !1;
            a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
            var x = v ? new Float32Array(t) : new Array(t), y = !1, z = function (b) {
                return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
            };
            z.getControlPoints = function () {
                return [{x: a, y: c}, {x: d, y: e}]
            };
            var A = "generateBezier(" + [a, c, d, e] + ")";
            return z.toString = function () {
                return A
            }, z
        }

        function l(a, b) {
            var c = a;
            return t.isString(a) ? x.Easings[a] || (c = !1) : c = t.isArray(a) && 1 === a.length ? j.apply(null, a) : t.isArray(a) && 2 === a.length ? y.apply(null, a.concat([b])) : !(!t.isArray(a) || 4 !== a.length) && k.apply(null, a), c === !1 && (c = x.Easings[x.defaults.easing] ? x.defaults.easing : w), c
        }

        function m(a) {
            if (a) {
                var b = x.timestamp && a !== !0 ? a : r.now(), c = x.State.calls.length;
                c > 1e4 && (x.State.calls = e(x.State.calls), c = x.State.calls.length);
                for (var f = 0; f < c; f++)if (x.State.calls[f]) {
                    var h = x.State.calls[f], i = h[0], j = h[2], k = h[3], l = !!k, q = null, s = h[5], u = h[6];
                    if (k || (k = x.State.calls[f][3] = b - 16), s) {
                        if (s.resume !== !0)continue;
                        k = h[3] = Math.round(b - u - 16), h[5] = null
                    }
                    u = h[6] = b - k;
                    for (var v = Math.min(u / j.duration, 1), w = 0, y = i.length; w < y; w++) {
                        var A = i[w], C = A.element;
                        if (g(C)) {
                            var D = !1;
                            if (j.display !== d && null !== j.display && "none" !== j.display) {
                                if ("flex" === j.display) {
                                    var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                    o.each(E, function (a, b) {
                                        z.setPropertyValue(C, "display", b)
                                    })
                                }
                                z.setPropertyValue(C, "display", j.display)
                            }
                            j.visibility !== d && "hidden" !== j.visibility && z.setPropertyValue(C, "visibility", j.visibility);
                            for (var F in A)if (A.hasOwnProperty(F) && "element" !== F) {
                                var G, H = A[F], I = t.isString(H.easing) ? x.Easings[H.easing] : H.easing;
                                if (t.isString(H.pattern)) {
                                    var J = 1 === v ? function (a, b, c) {
                                        var d = H.endValue[b];
                                        return c ? Math.round(d) : d
                                    } : function (a, b, c) {
                                        var d = H.startValue[b], e = H.endValue[b] - d, f = d + e * I(v, j, e);
                                        return c ? Math.round(f) : f
                                    };
                                    G = H.pattern.replace(/{(\d+)(!)?}/g, J)
                                } else if (1 === v) G = H.endValue; else {
                                    var K = H.endValue - H.startValue;
                                    G = H.startValue + K * I(v, j, K)
                                }
                                if (!l && G === H.currentValue)continue;
                                if (H.currentValue = G, "tween" === F) q = G; else {
                                    var L;
                                    if (z.Hooks.registered[F]) {
                                        L = z.Hooks.getRoot(F);
                                        var M = g(C).rootPropertyValueCache[L];
                                        M && (H.rootPropertyValue = M)
                                    }
                                    var N = z.setPropertyValue(C, F, H.currentValue + (p < 9 && 0 === parseFloat(G) ? "" : H.unitType), H.rootPropertyValue, H.scrollData);
                                    z.Hooks.registered[F] && (z.Normalizations.registered[L] ? g(C).rootPropertyValueCache[L] = z.Normalizations.registered[L]("extract", null, N[1]) : g(C).rootPropertyValueCache[L] = N[1]), "transform" === N[0] && (D = !0)
                                }
                            }
                            j.mobileHA && g(C).transformCache.translate3d === d && (g(C).transformCache.translate3d = "(0px, 0px, 0px)", D = !0), D && z.flushTransformCache(C)
                        }
                    }
                    j.display !== d && "none" !== j.display && (x.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (x.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], v, Math.max(0, k + j.duration - b), k, q), 1 === v && n(f)
                }
            }
            x.State.isTicking && B(m)
        }

        function n(a, b) {
            if (!x.State.calls[a])return !1;
            for (var c = x.State.calls[a][0], e = x.State.calls[a][1], f = x.State.calls[a][2], h = x.State.calls[a][4], i = !1, j = 0, k = c.length; j < k; j++) {
                var l = c[j].element;
                b || f.loop || ("none" === f.display && z.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && z.setPropertyValue(l, "visibility", f.visibility));
                var m = g(l);
                if (f.loop !== !0 && (o.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(o.queue(l)[1])) && m) {
                    m.isAnimating = !1, m.rootPropertyValueCache = {};
                    var n = !1;
                    o.each(z.Lists.transforms3D, function (a, b) {
                        var c = /^scale/.test(b) ? 1 : 0, e = m.transformCache[b];
                        m.transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete m.transformCache[b])
                    }), f.mobileHA && (n = !0, delete m.transformCache.translate3d), n && z.flushTransformCache(l), z.Values.removeClass(l, "velocity-animating")
                }
                if (!b && f.complete && !f.loop && j === k - 1)try {
                    f.complete.call(e, e)
                } catch (a) {
                    setTimeout(function () {
                        throw a
                    }, 1)
                }
                h && f.loop !== !0 && h(e), m && f.loop === !0 && !b && (o.each(m.tweensContainer, function (a, b) {
                    if (/^rotate/.test(a) && (parseFloat(b.startValue) - parseFloat(b.endValue)) % 360 === 0) {
                        var c = b.startValue;
                        b.startValue = b.endValue, b.endValue = c
                    }
                    /^
                    backgroundPosition /
                    .
                    test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
                }), x(l, "reverse", {loop: !0, delay: f.delay})), f.queue !== !1 && o.dequeue(l, f.queue)
            }
            x.State.calls[a] = !1;
            for (var p = 0, q = x.State.calls.length; p < q; p++)if (x.State.calls[p] !== !1) {
                i = !0;
                break
            }
            i === !1 && (x.State.isTicking = !1, delete x.State.calls, x.State.calls = [])
        }

        var o, p = function () {
            if (c.documentMode)return c.documentMode;
            for (var a = 7; a > 4; a--) {
                var b = c.createElement("div");
                if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length)return b = null, a
            }
            return d
        }(), q = function () {
            var a = 0;
            return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function (b) {
                    var c, d = (new Date).getTime();
                    return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function () {
                        b(d + c)
                    }, c)
                }
        }(), r = function () {
            var a = b.performance || {};
            if (!Object.prototype.hasOwnProperty.call(a, "now")) {
                var c = a.timing && a.timing.domComplete ? a.timing.domComplete : (new Date).getTime();
                a.now = function () {
                    return (new Date).getTime() - c
                }
            }
            return a
        }(), s = function () {
            var a = Array.prototype.slice;
            try {
                a.call(c.documentElement)
            } catch (b) {
                a = function () {
                    for (var a = this.length, b = []; --a > 0;)b[a] = this[a];
                    return b
                }
            }
            return a
        }(), t = {
            isNumber: function (a) {
                return "number" == typeof a
            }, isString: function (a) {
                return "string" == typeof a
            }, isArray: Array.isArray || function (a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }, isFunction: function (a) {
                return "[object Function]" === Object.prototype.toString.call(a)
            }, isNode: function (a) {
                return a && a.nodeType
            }, isWrapped: function (a) {
                return a && t.isNumber(a.length) && !t.isString(a) && !t.isFunction(a) && !t.isNode(a) && (0 === a.length || t.isNode(a[0]))
            }, isSVG: function (a) {
                return b.SVGElement && a instanceof b.SVGElement
            }, isEmptyObject: function (a) {
                for (var b in a)if (a.hasOwnProperty(b))return !1;
                return !0
            }
        }, u = !1;
        if (a.fn && a.fn.jquery ? (o = a, u = !0) : o = b.Velocity.Utilities, p <= 8 && !u)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (p <= 7)return void(jQuery.fn.velocity = jQuery.fn.animate);
        var v = 400, w = "swing", x = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: b.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: c.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: [],
                delayedElements: {count: 0}
            },
            CSS: {},
            Utilities: o,
            Redirects: {},
            Easings: {},
            Promise: b.Promise,
            defaults: {
                queue: "",
                duration: v,
                easing: w,
                begin: d,
                complete: d,
                progress: d,
                display: d,
                visibility: d,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0,
                promiseRejectEmpty: !0
            },
            init: function (a) {
                o.data(a, "velocity", {
                    isSVG: t.isSVG(a),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {major: 1, minor: 4, patch: 2},
            debug: !1,
            timestamp: !0,
            pauseAll: function (a) {
                var b = (new Date).getTime();
                o.each(x.State.calls, function (b, c) {
                    if (c) {
                        if (a !== d && (c[2].queue !== a || c[2].queue === !1))return !0;
                        c[5] = {resume: !1}
                    }
                }), o.each(x.State.delayedElements, function (a, c) {
                    c && h(c, b)
                })
            },
            resumeAll: function (a) {
                var b = (new Date).getTime();
                o.each(x.State.calls, function (b, c) {
                    if (c) {
                        if (a !== d && (c[2].queue !== a || c[2].queue === !1))return !0;
                        c[5] && (c[5].resume = !0)
                    }
                }), o.each(x.State.delayedElements, function (a, c) {
                    c && i(c, b)
                })
            }
        };
        b.pageYOffset !== d ? (x.State.scrollAnchor = b, x.State.scrollPropertyLeft = "pageXOffset", x.State.scrollPropertyTop = "pageYOffset") : (x.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, x.State.scrollPropertyLeft = "scrollLeft", x.State.scrollPropertyTop = "scrollTop");
        var y = function () {
            function a(a) {
                return -a.tension * a.x - a.friction * a.v
            }

            function b(b, c, d) {
                var e = {x: b.x + d.dx * c, v: b.v + d.dv * c, tension: b.tension, friction: b.friction};
                return {dx: e.v, dv: a(e)}
            }

            function c(c, d) {
                var e = {
                    dx: c.v,
                    dv: a(c)
                }, f = b(c, .5 * d, e), g = b(c, .5 * d, f), h = b(c, d, g), i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx), j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                return c.x = c.x + i * d, c.v = c.v + j * d, c
            }

            return function a(b, d, e) {
                var f, g, h, i = {x: -1, v: 0, tension: null, friction: null}, j = [0], k = 0, l = 1e-4, m = .016;
                for (b = parseFloat(b) || 500, d = parseFloat(d) || 20, e = e || null, i.tension = b, i.friction = d, f = null !== e, f ? (k = a(b, d), g = k / e * m) : g = m; h = c(h || i, g), j.push(1 + h.x), k += 16, Math.abs(h.x) > l && Math.abs(h.v) > l;);
                return f ? function (a) {
                    return j[a * (j.length - 1) | 0]
                } : k
            }
        }();
        x.Easings = {
            linear: function (a) {
                return a
            }, swing: function (a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }, spring: function (a) {
                return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
            }
        }, o.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (a, b) {
            x.Easings[b[0]] = k.apply(null, b[1])
        });
        var z = x.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                colorNames: {
                    aliceblue: "240,248,255",
                    antiquewhite: "250,235,215",
                    aquamarine: "127,255,212",
                    aqua: "0,255,255",
                    azure: "240,255,255",
                    beige: "245,245,220",
                    bisque: "255,228,196",
                    black: "0,0,0",
                    blanchedalmond: "255,235,205",
                    blueviolet: "138,43,226",
                    blue: "0,0,255",
                    brown: "165,42,42",
                    burlywood: "222,184,135",
                    cadetblue: "95,158,160",
                    chartreuse: "127,255,0",
                    chocolate: "210,105,30",
                    coral: "255,127,80",
                    cornflowerblue: "100,149,237",
                    cornsilk: "255,248,220",
                    crimson: "220,20,60",
                    cyan: "0,255,255",
                    darkblue: "0,0,139",
                    darkcyan: "0,139,139",
                    darkgoldenrod: "184,134,11",
                    darkgray: "169,169,169",
                    darkgrey: "169,169,169",
                    darkgreen: "0,100,0",
                    darkkhaki: "189,183,107",
                    darkmagenta: "139,0,139",
                    darkolivegreen: "85,107,47",
                    darkorange: "255,140,0",
                    darkorchid: "153,50,204",
                    darkred: "139,0,0",
                    darksalmon: "233,150,122",
                    darkseagreen: "143,188,143",
                    darkslateblue: "72,61,139",
                    darkslategray: "47,79,79",
                    darkturquoise: "0,206,209",
                    darkviolet: "148,0,211",
                    deeppink: "255,20,147",
                    deepskyblue: "0,191,255",
                    dimgray: "105,105,105",
                    dimgrey: "105,105,105",
                    dodgerblue: "30,144,255",
                    firebrick: "178,34,34",
                    floralwhite: "255,250,240",
                    forestgreen: "34,139,34",
                    fuchsia: "255,0,255",
                    gainsboro: "220,220,220",
                    ghostwhite: "248,248,255",
                    gold: "255,215,0",
                    goldenrod: "218,165,32",
                    gray: "128,128,128",
                    grey: "128,128,128",
                    greenyellow: "173,255,47",
                    green: "0,128,0",
                    honeydew: "240,255,240",
                    hotpink: "255,105,180",
                    indianred: "205,92,92",
                    indigo: "75,0,130",
                    ivory: "255,255,240",
                    khaki: "240,230,140",
                    lavenderblush: "255,240,245",
                    lavender: "230,230,250",
                    lawngreen: "124,252,0",
                    lemonchiffon: "255,250,205",
                    lightblue: "173,216,230",
                    lightcoral: "240,128,128",
                    lightcyan: "224,255,255",
                    lightgoldenrodyellow: "250,250,210",
                    lightgray: "211,211,211",
                    lightgrey: "211,211,211",
                    lightgreen: "144,238,144",
                    lightpink: "255,182,193",
                    lightsalmon: "255,160,122",
                    lightseagreen: "32,178,170",
                    lightskyblue: "135,206,250",
                    lightslategray: "119,136,153",
                    lightsteelblue: "176,196,222",
                    lightyellow: "255,255,224",
                    limegreen: "50,205,50",
                    lime: "0,255,0",
                    linen: "250,240,230",
                    magenta: "255,0,255",
                    maroon: "128,0,0",
                    mediumaquamarine: "102,205,170",
                    mediumblue: "0,0,205",
                    mediumorchid: "186,85,211",
                    mediumpurple: "147,112,219",
                    mediumseagreen: "60,179,113",
                    mediumslateblue: "123,104,238",
                    mediumspringgreen: "0,250,154",
                    mediumturquoise: "72,209,204",
                    mediumvioletred: "199,21,133",
                    midnightblue: "25,25,112",
                    mintcream: "245,255,250",
                    mistyrose: "255,228,225",
                    moccasin: "255,228,181",
                    navajowhite: "255,222,173",
                    navy: "0,0,128",
                    oldlace: "253,245,230",
                    olivedrab: "107,142,35",
                    olive: "128,128,0",
                    orangered: "255,69,0",
                    orange: "255,165,0",
                    orchid: "218,112,214",
                    palegoldenrod: "238,232,170",
                    palegreen: "152,251,152",
                    paleturquoise: "175,238,238",
                    palevioletred: "219,112,147",
                    papayawhip: "255,239,213",
                    peachpuff: "255,218,185",
                    peru: "205,133,63",
                    pink: "255,192,203",
                    plum: "221,160,221",
                    powderblue: "176,224,230",
                    purple: "128,0,128",
                    red: "255,0,0",
                    rosybrown: "188,143,143",
                    royalblue: "65,105,225",
                    saddlebrown: "139,69,19",
                    salmon: "250,128,114",
                    sandybrown: "244,164,96",
                    seagreen: "46,139,87",
                    seashell: "255,245,238",
                    sienna: "160,82,45",
                    silver: "192,192,192",
                    skyblue: "135,206,235",
                    slateblue: "106,90,205",
                    slategray: "112,128,144",
                    snow: "255,250,250",
                    springgreen: "0,255,127",
                    steelblue: "70,130,180",
                    tan: "210,180,140",
                    teal: "0,128,128",
                    thistle: "216,191,216",
                    tomato: "255,99,71",
                    turquoise: "64,224,208",
                    violet: "238,130,238",
                    wheat: "245,222,179",
                    whitesmoke: "245,245,245",
                    white: "255,255,255",
                    yellowgreen: "154,205,50",
                    yellow: "255,255,0"
                }
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                }, registered: {}, register: function () {
                    for (var a = 0; a < z.Lists.colors.length; a++) {
                        var b = "color" === z.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                        z.Hooks.templates[z.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                    }
                    var c, d, e;
                    if (p)for (c in z.Hooks.templates)if (z.Hooks.templates.hasOwnProperty(c)) {
                        d = z.Hooks.templates[c], e = d[0].split(" ");
                        var f = d[1].match(z.RegEx.valueSplit);
                        "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), z.Hooks.templates[c] = [e.join(" "), f.join(" ")])
                    }
                    for (c in z.Hooks.templates)if (z.Hooks.templates.hasOwnProperty(c)) {
                        d = z.Hooks.templates[c], e = d[0].split(" ");
                        for (var g in e)if (e.hasOwnProperty(g)) {
                            var h = c + e[g], i = g;
                            z.Hooks.registered[h] = [c, i]
                        }
                    }
                }, getRoot: function (a) {
                    var b = z.Hooks.registered[a];
                    return b ? b[0] : a
                }, getUnit: function (a, b) {
                    var c = (a.substr(b || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                    return c && z.Lists.units.indexOf(c) >= 0 ? c : ""
                }, fixColors: function (a) {
                    return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (a, b, c) {
                        return z.Lists.colorNames.hasOwnProperty(c) ? (b ? b : "rgba(") + z.Lists.colorNames[c] + (b ? "" : ",1)") : b + c
                    })
                }, cleanRootPropertyValue: function (a, b) {
                    return z.RegEx.valueUnwrap.test(b) && (b = b.match(z.RegEx.valueUnwrap)[1]), z.Values.isCSSNullValue(b) && (b = z.Hooks.templates[a][1]), b
                }, extractValue: function (a, b) {
                    var c = z.Hooks.registered[a];
                    if (c) {
                        var d = c[0], e = c[1];
                        return b = z.Hooks.cleanRootPropertyValue(d, b), b.toString().match(z.RegEx.valueSplit)[e]
                    }
                    return b
                }, injectValue: function (a, b, c) {
                    var d = z.Hooks.registered[a];
                    if (d) {
                        var e, f, g = d[0], h = d[1];
                        return c = z.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(z.RegEx.valueSplit), e[h] = b, f = e.join(" ")
                    }
                    return c
                }
            },
            Normalizations: {
                registered: {
                    clip: function (a, b, c) {
                        switch (a) {
                            case"name":
                                return "clip";
                            case"extract":
                                var d;
                                return z.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(z.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                            case"inject":
                                return "rect(" + c + ")"
                        }
                    }, blur: function (a, b, c) {
                        switch (a) {
                            case"name":
                                return x.State.isFirefox ? "filter" : "-webkit-filter";
                            case"extract":
                                var d = parseFloat(c);
                                if (!d && 0 !== d) {
                                    var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    d = e ? e[1] : 0
                                }
                                return d;
                            case"inject":
                                return parseFloat(c) ? "blur(" + c + ")" : "none"
                        }
                    }, opacity: function (a, b, c) {
                        if (p <= 8)switch (a) {
                            case"name":
                                return "filter";
                            case"extract":
                                var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                return c = d ? d[1] / 100 : 1;
                            case"inject":
                                return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                        } else switch (a) {
                            case"name":
                                return "opacity";
                            case"extract":
                                return c;
                            case"inject":
                                return c
                        }
                    }
                }, register: function () {
                    function a(a, b, c) {
                        var d = "border-box" === z.getPropertyValue(b, "boxSizing").toString().toLowerCase();
                        if (d === (c || !1)) {
                            var e, f, g = 0, h = "width" === a ? ["Left", "Right"] : ["Top", "Bottom"], i = ["padding" + h[0], "padding" + h[1], "border" + h[0] + "Width", "border" + h[1] + "Width"];
                            for (e = 0; e < i.length; e++)f = parseFloat(z.getPropertyValue(b, i[e])), isNaN(f) || (g += f);
                            return c ? -g : g
                        }
                        return 0
                    }

                    function b(b, c) {
                        return function (d, e, f) {
                            switch (d) {
                                case"name":
                                    return b;
                                case"extract":
                                    return parseFloat(f) + a(b, e, c);
                                case"inject":
                                    return parseFloat(f) - a(b, e, c) + "px"
                            }
                        }
                    }

                    p && !(p > 9) || x.State.isGingerbread || (z.Lists.transformsBase = z.Lists.transformsBase.concat(z.Lists.transforms3D));
                    for (var c = 0; c < z.Lists.transformsBase.length; c++)!function () {
                        var a = z.Lists.transformsBase[c];
                        z.Normalizations.registered[a] = function (b, c, e) {
                            switch (b) {
                                case"name":
                                    return "transform";
                                case"extract":
                                    return g(c) === d || g(c).transformCache[a] === d ? /^scale/i.test(a) ? 1 : 0 : g(c).transformCache[a].replace(/[()]/g, "");
                                case"inject":
                                    var f = !1;
                                    switch (a.substr(0, a.length - 1)) {
                                        case"translate":
                                            f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                            break;
                                        case"scal":
                                        case"scale":
                                            x.State.isAndroid && g(c).transformCache[a] === d && e < 1 && (e = 1), f = !/(\d)$/i.test(e);
                                            break;
                                        case"skew":
                                            f = !/(deg|\d)$/i.test(e);
                                            break;
                                        case"rotate":
                                            f = !/(deg|\d)$/i.test(e)
                                    }
                                    return f || (g(c).transformCache[a] = "(" + e + ")"), g(c).transformCache[a]
                            }
                        }
                    }();
                    for (var e = 0; e < z.Lists.colors.length; e++)!function () {
                        var a = z.Lists.colors[e];
                        z.Normalizations.registered[a] = function (b, c, e) {
                            switch (b) {
                                case"name":
                                    return a;
                                case"extract":
                                    var f;
                                    if (z.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e; else {
                                        var g, h = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : z.RegEx.isHex.test(e) ? g = "rgb(" + z.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(z.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return (!p || p > 8) && 3 === f.split(" ").length && (f += " 1"), f;
                                case"inject":
                                    return /^rgb/.test(e) ? e : (p <= 8 ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (p <= 8 ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                            }
                        }
                    }();
                    z.Normalizations.registered.innerWidth = b("width", !0), z.Normalizations.registered.innerHeight = b("height", !0), z.Normalizations.registered.outerWidth = b("width"), z.Normalizations.registered.outerHeight = b("height")
                }
            },
            Names: {
                camelCase: function (a) {
                    return a.replace(/-(\w)/g, function (a, b) {
                        return b.toUpperCase()
                    })
                }, SVGAttribute: function (a) {
                    var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (p || x.State.isAndroid && !x.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
                }, prefixCheck: function (a) {
                    if (x.State.prefixMatches[a])return [x.State.prefixMatches[a], !0];
                    for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; c < d; c++) {
                        var e;
                        if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function (a) {
                                return a.toUpperCase()
                            }), t.isString(x.State.prefixElement.style[e]))return x.State.prefixMatches[a] = e, [e, !0]
                    }
                    return [a, !1]
                }
            },
            Values: {
                hexToRgb: function (a) {
                    var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return a = a.replace(c, function (a, b, c, d) {
                        return b + b + c + c + d + d
                    }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                }, isCSSNullValue: function (a) {
                    return !a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                }, getUnitType: function (a) {
                    return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                }, getDisplayType: function (a) {
                    var b = a && a.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
                }, addClass: function (a, b) {
                    if (a)if (a.classList) a.classList.add(b); else if (t.isString(a.className)) a.className += (a.className.length ? " " : "") + b; else {
                        var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
                        a.setAttribute("class", c + (c ? " " : "") + b)
                    }
                }, removeClass: function (a, b) {
                    if (a)if (a.classList) a.classList.remove(b); else if (t.isString(a.className)) a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " "); else {
                        var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
                        a.setAttribute("class", c.replace(new RegExp("(^|s)" + b.split(" ").join("|") + "(s|$)", "gi"), " "))
                    }
                }
            },
            getPropertyValue: function (a, c, e, f) {
                function h(a, c) {
                    var e = 0;
                    if (p <= 8) e = o.css(a, c); else {
                        var i = !1;
                        /^(width|height)$/.test(c) && 0 === z.getPropertyValue(a, "display") && (i = !0, z.setPropertyValue(a, "display", z.Values.getDisplayType(a)));
                        var j = function () {
                            i && z.setPropertyValue(a, "display", "none")
                        };
                        if (!f) {
                            if ("height" === c && "border-box" !== z.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var k = a.offsetHeight - (parseFloat(z.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingBottom")) || 0);
                                return j(), k
                            }
                            if ("width" === c && "border-box" !== z.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var l = a.offsetWidth - (parseFloat(z.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingRight")) || 0);
                                return j(), l
                            }
                        }
                        var m;
                        m = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), e = 9 === p && "filter" === c ? m.getPropertyValue(c) : m[c], "" !== e && null !== e || (e = a.style[c]), j()
                    }
                    if ("auto" === e && /^(top|right|bottom|left)$/i.test(c)) {
                        var n = h(a, "position");
                        ("fixed" === n || "absolute" === n && /top|left/i.test(c)) && (e = o(a).position()[c] + "px")
                    }
                    return e
                }

                var i;
                if (z.Hooks.registered[c]) {
                    var j = c, k = z.Hooks.getRoot(j);
                    e === d && (e = z.getPropertyValue(a, z.Names.prefixCheck(k)[0])), z.Normalizations.registered[k] && (e = z.Normalizations.registered[k]("extract", a, e)), i = z.Hooks.extractValue(j, e)
                } else if (z.Normalizations.registered[c]) {
                    var l, m;
                    l = z.Normalizations.registered[c]("name", a), "transform" !== l && (m = h(a, z.Names.prefixCheck(l)[0]), z.Values.isCSSNullValue(m) && z.Hooks.templates[c] && (m = z.Hooks.templates[c][1])), i = z.Normalizations.registered[c]("extract", a, m)
                }
                if (!/^[\d-]/.test(i)) {
                    var n = g(a);
                    if (n && n.isSVG && z.Names.SVGAttribute(c))if (/^(height|width)$/i.test(c))try {
                        i = a.getBBox()[c]
                    } catch (a) {
                        i = 0
                    } else i = a.getAttribute(c); else i = h(a, z.Names.prefixCheck(c)[0])
                }
                return z.Values.isCSSNullValue(i) && (i = 0), x.debug >= 2 && console.log("Get " + c + ": " + i), i
            },
            setPropertyValue: function (a, c, d, e, f) {
                var h = c;
                if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d); else if (z.Normalizations.registered[c] && "transform" === z.Normalizations.registered[c]("name", a)) z.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c]; else {
                    if (z.Hooks.registered[c]) {
                        var i = c, j = z.Hooks.getRoot(c);
                        e = e || z.getPropertyValue(a, j), d = z.Hooks.injectValue(i, d, e), c = j
                    }
                    if (z.Normalizations.registered[c] && (d = z.Normalizations.registered[c]("inject", a, d), c = z.Normalizations.registered[c]("name", a)), h = z.Names.prefixCheck(c)[0], p <= 8)try {
                        a.style[h] = d
                    } catch (a) {
                        x.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
                    } else {
                        var k = g(a);
                        k && k.isSVG && z.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d
                    }
                    x.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
                }
                return [h, d]
            },
            flushTransformCache: function (a) {
                var b = "", c = g(a);
                if ((p || x.State.isAndroid && !x.State.isChrome) && c && c.isSVG) {
                    var d = function (b) {
                        return parseFloat(z.getPropertyValue(a, b))
                    }, e = {
                        translate: [d("translateX"), d("translateY")],
                        skewX: [d("skewX")],
                        skewY: [d("skewY")],
                        scale: 1 !== d("scale") ? [d("scale"), d("scale")] : [d("scaleX"), d("scaleY")],
                        rotate: [d("rotateZ"), 0, 0]
                    };
                    o.each(g(a).transformCache, function (a) {
                        /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), e[a] && (b += a + "(" + e[a].join(" ") + ") ", delete e[a])
                    })
                } else {
                    var f, h;
                    o.each(g(a).transformCache, function (c) {
                        return f = g(a).transformCache[c], "transformPerspective" === c ? (h = f, !0) : (9 === p && "rotateZ" === c && (c = "rotate"), void(b += c + f + " "))
                    }), h && (b = "perspective" + h + " " + b)
                }
                z.setPropertyValue(a, "transform", b)
            }
        };
        z.Hooks.register(), z.Normalizations.register(), x.hook = function (a, b, c) {
            var e;
            return a = f(a), o.each(a, function (a, f) {
                if (g(f) === d && x.init(f), c === d) e === d && (e = z.getPropertyValue(f, b)); else {
                    var h = z.setPropertyValue(f, b, c);
                    "transform" === h[0] && x.CSS.flushTransformCache(f), e = h
                }
            }), e
        };
        var A = function () {
            function a() {
                return k ? y.promise || null : p
            }

            function e(a, e) {
                function f(f) {
                    var k, n;
                    if (i.begin && 0 === C)try {
                        i.begin.call(r, r)
                    } catch (a) {
                        setTimeout(function () {
                            throw a
                        }, 1)
                    }
                    if ("scroll" === F) {
                        var p, q, v, w = /^x$/i.test(i.axis) ? "Left" : "Top", A = parseFloat(i.offset) || 0;
                        i.container ? t.isWrapped(i.container) || t.isNode(i.container) ? (i.container = i.container[0] || i.container, p = i.container["scroll" + w], v = p + o(a).position()[w.toLowerCase()] + A) : i.container = null : (p = x.State.scrollAnchor[x.State["scrollProperty" + w]], q = x.State.scrollAnchor[x.State["scrollProperty" + ("Left" === w ? "Top" : "Left")]], v = o(a).offset()[w.toLowerCase()] + A), j = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: p,
                                currentValue: p,
                                endValue: v,
                                unitType: "",
                                easing: i.easing,
                                scrollData: {container: i.container, direction: w, alternateValue: q}
                            }, element: a
                        }, x.debug && console.log("tweensContainer (scroll): ", j.scroll, a)
                    } else if ("reverse" === F) {
                        if (k = g(a), !k)return;
                        if (!k.tweensContainer)return void o.dequeue(a, i.queue);
                        "none" === k.opts.display && (k.opts.display = "auto"), "hidden" === k.opts.visibility && (k.opts.visibility = "visible"), k.opts.loop = !1, k.opts.begin = null, k.opts.complete = null, u.easing || delete i.easing, u.duration || delete i.duration, i = o.extend({}, k.opts, i), n = o.extend(!0, {}, k ? k.tweensContainer : null);
                        for (var D in n)if (n.hasOwnProperty(D) && "element" !== D) {
                            var E = n[D].startValue;
                            n[D].startValue = n[D].currentValue = n[D].endValue, n[D].endValue = E, t.isEmptyObject(u) || (n[D].easing = i.easing), x.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(n[D]), a)
                        }
                        j = n
                    } else if ("start" === F) {
                        k = g(a), k && k.tweensContainer && k.isAnimating === !0 && (n = k.tweensContainer);
                        var G = function (b, c) {
                            var d, f, g;
                            return t.isFunction(b) && (b = b.call(a, e, B)), t.isArray(b) ? (d = b[0], !t.isArray(b[1]) && /^[\d-]/.test(b[1]) || t.isFunction(b[1]) || z.RegEx.isHex.test(b[1]) ? g = b[1] : t.isString(b[1]) && !z.RegEx.isHex.test(b[1]) && x.Easings[b[1]] || t.isArray(b[1]) ? (f = c ? b[1] : l(b[1], i.duration), g = b[2]) : g = b[1] || b[2]) : d = b, c || (f = f || i.easing), t.isFunction(d) && (d = d.call(a, e, B)), t.isFunction(g) && (g = g.call(a, e, B)), [d || 0, f, g]
                        }, H = function (e, f) {
                            var g, l = z.Hooks.getRoot(e), m = !1, p = f[0], q = f[1], r = f[2];
                            if (!(k && k.isSVG || "tween" === l || z.Names.prefixCheck(l)[1] !== !1 || z.Normalizations.registered[l] !== d))return void(x.debug && console.log("Skipping [" + l + "] due to a lack of browser support."));
                            (i.display !== d && null !== i.display && "none" !== i.display || i.visibility !== d && "hidden" !== i.visibility) && /opacity|filter/.test(e) && !r && 0 !== p && (r = 0), i._cacheValues && n && n[e] ? (r === d && (r = n[e].endValue + n[e].unitType), m = k.rootPropertyValueCache[l]) : z.Hooks.registered[e] ? r === d ? (m = z.getPropertyValue(a, l), r = z.getPropertyValue(a, e, m)) : m = z.Hooks.templates[l][1] : r === d && (r = z.getPropertyValue(a, e));
                            var s, u, v, w = !1, y = function (a, b) {
                                var c, d;
                                return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (a) {
                                    return c = a, ""
                                }), c || (c = z.Values.getUnitType(a)), [d, c]
                            };
                            if (r !== p && t.isString(r) && t.isString(p)) {
                                g = "";
                                var A = 0, B = 0, C = [], D = [], E = 0, F = 0, G = 0;
                                for (r = z.Hooks.fixColors(r), p = z.Hooks.fixColors(p); A < r.length && B < p.length;) {
                                    var H = r[A], I = p[B];
                                    if (/[\d\.-]/.test(H) && /[\d\.-]/.test(I)) {
                                        for (var J = H, K = I, M = ".", N = "."; ++A < r.length;) {
                                            if (H = r[A], H === M) M = ".."; else if (!/\d/.test(H))break;
                                            J += H
                                        }
                                        for (; ++B < p.length;) {
                                            if (I = p[B], I === N) N = ".."; else if (!/\d/.test(I))break;
                                            K += I
                                        }
                                        var O = z.Hooks.getUnit(r, A), P = z.Hooks.getUnit(p, B);
                                        if (A += O.length, B += P.length, O === P) J === K ? g += J + O : (g += "{" + C.length + (F ? "!" : "") + "}" + O, C.push(parseFloat(J)), D.push(parseFloat(K))); else {
                                            var Q = parseFloat(J), R = parseFloat(K);
                                            g += (E < 5 ? "calc" : "") + "(" + (Q ? "{" + C.length + (F ? "!" : "") + "}" : "0") + O + " + " + (R ? "{" + (C.length + (Q ? 1 : 0)) + (F ? "!" : "") + "}" : "0") + P + ")", Q && (C.push(Q), D.push(0)), R && (C.push(0), D.push(R))
                                        }
                                    } else {
                                        if (H !== I) {
                                            E = 0;
                                            break
                                        }
                                        g += H, A++, B++, 0 === E && "c" === H || 1 === E && "a" === H || 2 === E && "l" === H || 3 === E && "c" === H || E >= 4 && "(" === H ? E++ : (E && E < 5 || E >= 4 && ")" === H && --E < 5) && (E = 0), 0 === F && "r" === H || 1 === F && "g" === H || 2 === F && "b" === H || 3 === F && "a" === H || F >= 3 && "(" === H ? (3 === F && "a" === H && (G = 1), F++) : G && "," === H ? ++G > 3 && (F = G = 0) : (G && F < (G ? 5 : 4) || F >= (G ? 4 : 3) && ")" === H && --F < (G ? 5 : 4)) && (F = G = 0)
                                    }
                                }
                                A === r.length && B === p.length || (x.debug && console.error('Trying to pattern match mis-matched strings ["' + p + '", "' + r + '"]'), g = d), g && (C.length ? (x.debug && console.log('Pattern found "' + g + '" -> ', C, D, "[" + r + "," + p + "]"), r = C, p = D, u = v = "") : g = d)
                            }
                            g || (s = y(e, r), r = s[0], v = s[1], s = y(e, p), p = s[0].replace(/^([+-\/*])=/, function (a, b) {
                                return w = b, ""
                            }), u = s[1], r = parseFloat(r) || 0, p = parseFloat(p) || 0, "%" === u && (/^(fontSize|lineHeight)$/.test(e) ? (p /= 100, u = "em") : /^scale/.test(e) ? (p /= 100, u = "") : /(Red|Green|Blue)$/i.test(e) && (p = p / 100 * 255, u = "")));
                            var S = function () {
                                var d = {
                                    myParent: a.parentNode || c.body,
                                    position: z.getPropertyValue(a, "position"),
                                    fontSize: z.getPropertyValue(a, "fontSize")
                                }, e = d.position === L.lastPosition && d.myParent === L.lastParent, f = d.fontSize === L.lastFontSize;
                                L.lastParent = d.myParent, L.lastPosition = d.position, L.lastFontSize = d.fontSize;
                                var g = 100, h = {};
                                if (f && e) h.emToPx = L.lastEmToPx, h.percentToPxWidth = L.lastPercentToPxWidth, h.percentToPxHeight = L.lastPercentToPxHeight; else {
                                    var i = k && k.isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                                    x.init(i), d.myParent.appendChild(i), o.each(["overflow", "overflowX", "overflowY"], function (a, b) {
                                        x.CSS.setPropertyValue(i, b, "hidden")
                                    }), x.CSS.setPropertyValue(i, "position", d.position), x.CSS.setPropertyValue(i, "fontSize", d.fontSize), x.CSS.setPropertyValue(i, "boxSizing", "content-box"), o.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (a, b) {
                                        x.CSS.setPropertyValue(i, b, g + "%")
                                    }), x.CSS.setPropertyValue(i, "paddingLeft", g + "em"), h.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(z.getPropertyValue(i, "width", null, !0)) || 1) / g, h.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(z.getPropertyValue(i, "height", null, !0)) || 1) / g, h.emToPx = L.lastEmToPx = (parseFloat(z.getPropertyValue(i, "paddingLeft")) || 1) / g, d.myParent.removeChild(i)
                                }
                                return null === L.remToPx && (L.remToPx = parseFloat(z.getPropertyValue(c.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(b.innerWidth) / 100, L.vhToPx = parseFloat(b.innerHeight) / 100), h.remToPx = L.remToPx, h.vwToPx = L.vwToPx, h.vhToPx = L.vhToPx, x.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(h), a), h
                            };
                            if (/[\/*]/.test(w)) u = v; else if (v !== u && 0 !== r)if (0 === p) u = v; else {
                                h = h || S();
                                var T = /margin|padding|left|right|width|text|word|letter/i.test(e) || /X$/.test(e) || "x" === e ? "x" : "y";
                                switch (v) {
                                    case"%":
                                        r *= "x" === T ? h.percentToPxWidth : h.percentToPxHeight;
                                        break;
                                    case"px":
                                        break;
                                    default:
                                        r *= h[v + "ToPx"]
                                }
                                switch (u) {
                                    case"%":
                                        r *= 1 / ("x" === T ? h.percentToPxWidth : h.percentToPxHeight);
                                        break;
                                    case"px":
                                        break;
                                    default:
                                        r *= 1 / h[u + "ToPx"]
                                }
                            }
                            switch (w) {
                                case"+":
                                    p = r + p;
                                    break;
                                case"-":
                                    p = r - p;
                                    break;
                                case"*":
                                    p *= r;
                                    break;
                                case"/":
                                    p = r / p
                            }
                            j[e] = {
                                rootPropertyValue: m,
                                startValue: r,
                                currentValue: r,
                                endValue: p,
                                unitType: u,
                                easing: q
                            }, g && (j[e].pattern = g), x.debug && console.log("tweensContainer (" + e + "): " + JSON.stringify(j[e]), a)
                        };
                        for (var I in s)if (s.hasOwnProperty(I)) {
                            var J = z.Names.camelCase(I), K = G(s[I]);
                            if (z.Lists.colors.indexOf(J) >= 0) {
                                var N = K[0], O = K[1], P = K[2];
                                if (z.RegEx.isHex.test(N)) {
                                    for (var Q = ["Red", "Green", "Blue"], R = z.Values.hexToRgb(N), S = P ? z.Values.hexToRgb(P) : d, T = 0; T < Q.length; T++) {
                                        var U = [R[T]];
                                        O && U.push(O), S !== d && U.push(S[T]), H(J + Q[T], U)
                                    }
                                    continue
                                }
                            }
                            H(J, K)
                        }
                        j.element = a
                    }
                    j.element && (z.Values.addClass(a, "velocity-animating"), M.push(j), k = g(a), k && ("" === i.queue && (k.tweensContainer = j, k.opts = i), k.isAnimating = !0), C === B - 1 ? (x.State.calls.push([M, r, i, null, y.resolver, null, 0]), x.State.isTicking === !1 && (x.State.isTicking = !0, m())) : C++)
                }

                var h, i = o.extend({}, x.defaults, u), j = {};
                switch (g(a) === d && x.init(a), parseFloat(i.delay) && i.queue !== !1 && o.queue(a, i.queue, function (b) {
                    x.velocityQueueEntryFlag = !0;
                    var c = x.State.delayedElements.count++;
                    x.State.delayedElements[c] = a;
                    var d = function (a) {
                        return function () {
                            x.State.delayedElements[a] = !1, b()
                        }
                    }(c);
                    g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
                        setTimeout: setTimeout(b, parseFloat(i.delay)),
                        next: d
                    }
                }), i.duration.toString().toLowerCase()) {
                    case"fast":
                        i.duration = 200;
                        break;
                    case"normal":
                        i.duration = v;
                        break;
                    case"slow":
                        i.duration = 600;
                        break;
                    default:
                        i.duration = parseFloat(i.duration) || 1
                }
                if (x.mock !== !1 && (x.mock === !0 ? i.duration = i.delay = 1 : (i.duration *= parseFloat(x.mock) || 1, i.delay *= parseFloat(x.mock) || 1)), i.easing = l(i.easing, i.duration), i.begin && !t.isFunction(i.begin) && (i.begin = null), i.progress && !t.isFunction(i.progress) && (i.progress = null), i.complete && !t.isFunction(i.complete) && (i.complete = null), i.display !== d && null !== i.display && (i.display = i.display.toString().toLowerCase(), "auto" === i.display && (i.display = x.CSS.Values.getDisplayType(a))), i.visibility !== d && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), i.mobileHA = i.mobileHA && x.State.isMobile && !x.State.isGingerbread, i.queue === !1)if (i.delay) {
                    var k = x.State.delayedElements.count++;
                    x.State.delayedElements[k] = a;
                    var n = function (a) {
                        return function () {
                            x.State.delayedElements[a] = !1, f()
                        }
                    }(k);
                    g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
                        setTimeout: setTimeout(f, parseFloat(i.delay)),
                        next: n
                    }
                } else f(); else o.queue(a, i.queue, function (a, b) {
                    return b === !0 ? (y.promise && y.resolver(r), !0) : (x.velocityQueueEntryFlag = !0, void f(a))
                });
                "" !== i.queue && "fx" !== i.queue || "inprogress" === o.queue(a)[0] || o.dequeue(a)
            }

            var j, k, p, q, r, s, u, w = arguments[0] && (arguments[0].p || o.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || t.isString(arguments[0].properties));
            t.isWrapped(this) ? (k = !1, q = 0, r = this, p = this) : (k = !0, q = 1, r = w ? arguments[0].elements || arguments[0].e : arguments[0]);
            var y = {promise: null, resolver: null, rejecter: null};
            if (k && x.Promise && (y.promise = new x.Promise(function (a, b) {
                    y.resolver = a, y.rejecter = b
                })), w ? (s = arguments[0].properties || arguments[0].p, u = arguments[0].options || arguments[0].o) : (s = arguments[q], u = arguments[q + 1]), r = f(r), !r)return void(y.promise && (s && u && u.promiseRejectEmpty === !1 ? y.resolver() : y.rejecter()));
            var B = r.length, C = 0;
            if (!/^(stop|finish|finishAll|pause|resume)$/i.test(s) && !o.isPlainObject(u)) {
                var D = q + 1;
                u = {};
                for (var E = D; E < arguments.length; E++)t.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? t.isString(arguments[E]) || t.isArray(arguments[E]) ? u.easing = arguments[E] : t.isFunction(arguments[E]) && (u.complete = arguments[E]) : u.duration = arguments[E]
            }
            var F;
            switch (s) {
                case"scroll":
                    F = "scroll";
                    break;
                case"reverse":
                    F = "reverse";
                    break;
                case"pause":
                    var G = (new Date).getTime();
                    return o.each(r, function (a, b) {
                        h(b, G)
                    }), o.each(x.State.calls, function (a, b) {
                        var c = !1;
                        b && o.each(b[1], function (a, e) {
                            var f = u === d ? "" : u;
                            return f !== !0 && b[2].queue !== f && (u !== d || b[2].queue !== !1) || (o.each(r, function (a, d) {
                                    if (d === e)return b[5] = {resume: !1}, c = !0, !1
                                }), !c && void 0)
                        })
                    }), a();
                case"resume":
                    return o.each(r, function (a, b) {
                        i(b, G)
                    }), o.each(x.State.calls, function (a, b) {
                        var c = !1;
                        b && o.each(b[1], function (a, e) {
                            var f = u === d ? "" : u;
                            return f !== !0 && b[2].queue !== f && (u !== d || b[2].queue !== !1) || !b[5] || (o.each(r, function (a, d) {
                                    if (d === e)return b[5].resume = !0, c = !0, !1
                                }), !c && void 0)
                        })
                    }), a();
                case"finish":
                case"finishAll":
                case"stop":
                    o.each(r, function (a, b) {
                        g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== s || u !== !0 && !t.isString(u) || (o.each(o.queue(b, t.isString(u) ? u : ""), function (a, b) {
                            t.isFunction(b) && b()
                        }), o.queue(b, t.isString(u) ? u : "", []))
                    });
                    var H = [];
                    return o.each(x.State.calls, function (a, b) {
                        b && o.each(b[1], function (c, e) {
                            var f = u === d ? "" : u;
                            return f !== !0 && b[2].queue !== f && (u !== d || b[2].queue !== !1) || void o.each(r, function (c, d) {
                                    if (d === e)if ((u === !0 || t.isString(u)) && (o.each(o.queue(d, t.isString(u) ? u : ""), function (a, b) {
                                            t.isFunction(b) && b(null, !0)
                                        }), o.queue(d, t.isString(u) ? u : "", [])), "stop" === s) {
                                        var h = g(d);
                                        h && h.tweensContainer && f !== !1 && o.each(h.tweensContainer, function (a, b) {
                                            b.endValue = b.currentValue
                                        }), H.push(a)
                                    } else"finish" !== s && "finishAll" !== s || (b[2].duration = 1)
                                })
                        })
                    }), "stop" === s && (o.each(H, function (a, b) {
                        n(b, !0)
                    }), y.promise && y.resolver(r)), a();
                default:
                    if (!o.isPlainObject(s) || t.isEmptyObject(s)) {
                        if (t.isString(s) && x.Redirects[s]) {
                            j = o.extend({}, u);
                            var I = j.duration, J = j.delay || 0;
                            return j.backwards === !0 && (r = o.extend(!0, [], r).reverse()), o.each(r, function (a, b) {
                                parseFloat(j.stagger) ? j.delay = J + parseFloat(j.stagger) * a : t.isFunction(j.stagger) && (j.delay = J + j.stagger.call(b, a, B)), j.drag && (j.duration = parseFloat(I) || (/^(callout|transition)/.test(s) ? 1e3 : v), j.duration = Math.max(j.duration * (j.backwards ? 1 - a / B : (a + 1) / B), .75 * j.duration, 200)), x.Redirects[s].call(b, b, j || {}, a, B, r, y.promise ? y : d)
                            }), a()
                        }
                        var K = "Velocity: First argument (" + s + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return y.promise ? y.rejecter(new Error(K)) : console.log(K), a()
                    }
                    F = "start"
            }
            var L = {
                lastParent: null,
                lastPosition: null,
                lastFontSize: null,
                lastPercentToPxWidth: null,
                lastPercentToPxHeight: null,
                lastEmToPx: null,
                remToPx: null,
                vwToPx: null,
                vhToPx: null
            }, M = [];
            o.each(r, function (a, b) {
                t.isNode(b) && e(b, a)
            }), j = o.extend({}, x.defaults, u), j.loop = parseInt(j.loop, 10);
            var N = 2 * j.loop - 1;
            if (j.loop)for (var O = 0; O < N; O++) {
                var P = {delay: j.delay, progress: j.progress};
                O === N - 1 && (P.display = j.display, P.visibility = j.visibility, P.complete = j.complete), A(r, "reverse", P)
            }
            return a()
        };
        x = o.extend(A, x), x.animate = A;
        var B = b.requestAnimationFrame || q;
        if (!x.State.isMobile && c.hidden !== d) {
            var C = function () {
                c.hidden ? (B = function (a) {
                    return setTimeout(function () {
                        a(!0)
                    }, 16)
                }, m()) : B = b.requestAnimationFrame || q
            };
            C(), c.addEventListener("visibilitychange", C)
        }
        return a.Velocity = x, a !== b && (a.fn.velocity = A, a.fn.velocity.defaults = x.defaults), o.each(["Down", "Up"], function (a, b) {
            x.Redirects["slide" + b] = function (a, c, e, f, g, h) {
                var i = o.extend({}, c), j = i.begin, k = i.complete, l = {}, m = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                };
                i.display === d && (i.display = "Down" === b ? "inline" === x.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function () {
                    0 === e && j && j.call(g, g);
                    for (var c in m)if (m.hasOwnProperty(c)) {
                        l[c] = a.style[c];
                        var d = z.getPropertyValue(a, c);
                        m[c] = "Down" === b ? [d, 0] : [0, d]
                    }
                    l.overflow = a.style.overflow, a.style.overflow = "hidden"
                }, i.complete = function () {
                    for (var b in l)l.hasOwnProperty(b) && (a.style[b] = l[b]);
                    e === f - 1 && (k && k.call(g, g), h && h.resolver(g))
                }, x(a, m, i)
            }
        }), o.each(["In", "Out"], function (a, b) {
            x.Redirects["fade" + b] = function (a, c, e, f, g, h) {
                var i = o.extend({}, c), j = i.complete, k = {opacity: "In" === b ? 1 : 0};
                0 !== e && (i.begin = null), e !== f - 1 ? i.complete = null : i.complete = function () {
                    j && j.call(g, g), h && h.resolver(g)
                }, i.display === d && (i.display = "In" === b ? "auto" : "none"), x(this, k, i)
            }
        }), x
    }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
}), !function (a) {
    "use strict";
    "function" == typeof require && "object" == typeof exports ? module.exports = a() : "function" == typeof define && define.amd ? define(["velocity"], a) : a()
}(function () {
    "use strict";
    return function (a, b, c, d) {
        function e(a, b) {
            var c = [];
            return !(!a || !b) && (g.each([a, b], function (a, b) {
                    var d = [];
                    g.each(b, function (a, b) {
                        for (; b.toString().length < 5;)b = "0" + b;
                        d.push(b)
                    }), c.push(d.join(""))
                }), parseFloat(c[0]) > parseFloat(c[1]))
        }

        var f = a.Velocity;
        if (!f || !f.Utilities)return void(b.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
        var g = f.Utilities, h = f.version, i = {major: 1, minor: 1, patch: 0};
        if (e(i, h)) {
            var j = "Velocity UI Pack: You need to update Velocity (velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
            throw alert(j), new Error(j)
        }
        f.RegisterEffect = f.RegisterUI = function (a, b) {
            function c(a, b, c, d) {
                var e, h = 0;
                g.each(a.nodeType ? [a] : a, function (a, b) {
                    d && (c += a * d), e = b.parentNode;
                    var i = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"];
                    "border-box" === f.CSS.getPropertyValue(b, "boxSizing").toString().toLowerCase() && (i = ["height"]), g.each(i, function (a, c) {
                        h += parseFloat(f.CSS.getPropertyValue(b, c))
                    })
                }), f.animate(e, {height: ("In" === b ? "+" : "-") + "=" + h}, {
                    queue: !1,
                    easing: "ease-in-out",
                    duration: c * ("In" === b ? .6 : 1)
                })
            }

            return f.Redirects[a] = function (e, h, i, j, k, l, m) {
                var n = i === j - 1, o = 0;
                m = m || b.loop, "function" == typeof b.defaultDuration ? b.defaultDuration = b.defaultDuration.call(k, k) : b.defaultDuration = parseFloat(b.defaultDuration);
                for (var p = 0; p < b.calls.length; p++)u = b.calls[p][1], "number" == typeof u && (o += u);
                var q = o >= 1 ? 0 : b.calls.length ? (1 - o) / b.calls.length : 1;
                for (p = 0; p < b.calls.length; p++) {
                    var r = b.calls[p], s = r[0], t = 1e3, u = r[1], v = r[2] || {}, w = {};
                    if (h.duration !== d ? t = h.duration : b.defaultDuration !== d && (t = b.defaultDuration), w.duration = t * ("number" == typeof u ? u : q), w.queue = h.queue || "", w.easing = v.easing || "ease", w.delay = parseFloat(v.delay) || 0, w.loop = !b.loop && v.loop, w._cacheValues = v._cacheValues || !0, 0 === p) {
                        if (w.delay += parseFloat(h.delay) || 0, 0 === i && (w.begin = function () {
                                h.begin && h.begin.call(k, k);
                                var b = a.match(/(In|Out)$/);
                                b && "In" === b[0] && s.opacity !== d && g.each(k.nodeType ? [k] : k, function (a, b) {
                                    f.CSS.setPropertyValue(b, "opacity", 0)
                                }), h.animateParentHeight && b && c(k, b[0], t + w.delay, h.stagger)
                            }), null !== h.display)if (h.display !== d && "none" !== h.display) w.display = h.display; else if (/In$/.test(a)) {
                            var x = f.CSS.Values.getDisplayType(e);
                            w.display = "inline" === x ? "inline-block" : x
                        }
                        h.visibility && "hidden" !== h.visibility && (w.visibility = h.visibility)
                    }
                    if (p === b.calls.length - 1) {
                        var y = function () {
                            h.display !== d && "none" !== h.display || !/Out$/.test(a) || g.each(k.nodeType ? [k] : k, function (a, b) {
                                f.CSS.setPropertyValue(b, "display", "none")
                            }), h.complete && h.complete.call(k, k), l && l.resolver(k || e)
                        };
                        w.complete = function () {
                            if (m && f.Redirects[a](e, h, i, j, k, l, m === !0 || Math.max(0, m - 1)), b.reset) {
                                for (var c in b.reset)if (b.reset.hasOwnProperty(c)) {
                                    var g = b.reset[c];
                                    f.CSS.Hooks.registered[c] !== d || "string" != typeof g && "number" != typeof g || (b.reset[c] = [b.reset[c], b.reset[c]])
                                }
                                var o = {duration: 0, queue: !1};
                                n && (o.complete = y), f.animate(e, b.reset, o)
                            } else n && y()
                        }, "hidden" === h.visibility && (w.visibility = h.visibility)
                    }
                    f.animate(e, s, w)
                }
            }, f
        }, f.RegisterEffect.packagedEffects = {
            "callout.bounce": {
                defaultDuration: 550,
                calls: [[{translateY: -30}, .25], [{translateY: 0}, .125], [{translateY: -15}, .125], [{translateY: 0}, .25]]
            },
            "callout.shake": {
                defaultDuration: 800,
                calls: [[{translateX: -11}], [{translateX: 11}], [{translateX: -11}], [{translateX: 11}], [{translateX: -11}], [{translateX: 11}], [{translateX: -11}], [{translateX: 0}]]
            },
            "callout.flash": {
                defaultDuration: 1100,
                calls: [[{opacity: [0, "easeInOutQuad", 1]}], [{opacity: [1, "easeInOutQuad"]}], [{opacity: [0, "easeInOutQuad"]}], [{opacity: [1, "easeInOutQuad"]}]]
            },
            "callout.pulse": {
                defaultDuration: 825,
                calls: [[{scaleX: 1.1, scaleY: 1.1}, .5, {easing: "easeInExpo"}], [{scaleX: 1, scaleY: 1}, .5]]
            },
            "callout.swing": {
                defaultDuration: 950,
                calls: [[{rotateZ: 15}], [{rotateZ: -10}], [{rotateZ: 5}], [{rotateZ: -5}], [{rotateZ: 0}]]
            },
            "callout.tada": {
                defaultDuration: 1e3,
                calls: [[{scaleX: .9, scaleY: .9, rotateZ: -3}, .1], [{
                    scaleX: 1.1,
                    scaleY: 1.1,
                    rotateZ: 3
                }, .1], [{
                    scaleX: 1.1,
                    scaleY: 1.1,
                    rotateZ: -3
                }, .1], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], [{
                    scaleX: 1,
                    scaleY: 1,
                    rotateZ: 0
                }, .2]]
            },
            "transition.fadeIn": {defaultDuration: 500, calls: [[{opacity: [1, 0]}]]},
            "transition.fadeOut": {defaultDuration: 500, calls: [[{opacity: [0, 1]}]]},
            "transition.flipXIn": {
                defaultDuration: 700,
                calls: [[{opacity: [1, 0], transformPerspective: [800, 800], rotateY: [0, -55]}]],
                reset: {transformPerspective: 0}
            },
            "transition.flipXOut": {
                defaultDuration: 700,
                calls: [[{opacity: [0, 1], transformPerspective: [800, 800], rotateY: 55}]],
                reset: {transformPerspective: 0, rotateY: 0}
            },
            "transition.flipYIn": {
                defaultDuration: 800,
                calls: [[{opacity: [1, 0], transformPerspective: [800, 800], rotateX: [0, -45]}]],
                reset: {transformPerspective: 0}
            },
            "transition.flipYOut": {
                defaultDuration: 800,
                calls: [[{opacity: [0, 1], transformPerspective: [800, 800], rotateX: 25}]],
                reset: {transformPerspective: 0, rotateX: 0}
            },
            "transition.flipBounceXIn": {
                defaultDuration: 900,
                calls: [[{opacity: [.725, 0], transformPerspective: [400, 400], rotateY: [-10, 90]}, .5], [{
                    opacity: .8,
                    rotateY: 10
                }, .25], [{opacity: 1, rotateY: 0}, .25]],
                reset: {transformPerspective: 0}
            },
            "transition.flipBounceXOut": {
                defaultDuration: 800,
                calls: [[{opacity: [.9, 1], transformPerspective: [400, 400], rotateY: -10}], [{
                    opacity: 0,
                    rotateY: 90
                }]],
                reset: {transformPerspective: 0, rotateY: 0}
            },
            "transition.flipBounceYIn": {
                defaultDuration: 850,
                calls: [[{opacity: [.725, 0], transformPerspective: [400, 400], rotateX: [-10, 90]}, .5], [{
                    opacity: .8,
                    rotateX: 10
                }, .25], [{opacity: 1, rotateX: 0}, .25]],
                reset: {transformPerspective: 0}
            },
            "transition.flipBounceYOut": {
                defaultDuration: 800,
                calls: [[{opacity: [.9, 1], transformPerspective: [400, 400], rotateX: -15}], [{
                    opacity: 0,
                    rotateX: 90
                }]],
                reset: {transformPerspective: 0, rotateX: 0}
            },
            "transition.swoopIn": {
                defaultDuration: 850,
                calls: [[{
                    opacity: [1, 0],
                    transformOriginX: ["100%", "50%"],
                    transformOriginY: ["100%", "100%"],
                    scaleX: [1, 0],
                    scaleY: [1, 0],
                    translateX: [0, -700],
                    translateZ: 0
                }]],
                reset: {transformOriginX: "50%", transformOriginY: "50%"}
            },
            "transition.swoopOut": {
                defaultDuration: 850,
                calls: [[{
                    opacity: [0, 1],
                    transformOriginX: ["50%", "100%"],
                    transformOriginY: ["100%", "100%"],
                    scaleX: 0,
                    scaleY: 0,
                    translateX: -700,
                    translateZ: 0
                }]],
                reset: {transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0}
            },
            "transition.whirlIn": {
                defaultDuration: 850,
                calls: [[{
                    opacity: [1, 0],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: [1, 0],
                    scaleY: [1, 0],
                    rotateY: [0, 160]
                }, 1, {easing: "easeInOutSine"}]]
            },
            "transition.whirlOut": {
                defaultDuration: 750,
                calls: [[{
                    opacity: [0, "easeInOutQuint", 1],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: 0,
                    scaleY: 0,
                    rotateY: 160
                }, 1, {easing: "swing"}]],
                reset: {scaleX: 1, scaleY: 1, rotateY: 0}
            },
            "transition.shrinkIn": {
                defaultDuration: 750,
                calls: [[{
                    opacity: [1, 0],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: [1, 1.5],
                    scaleY: [1, 1.5],
                    translateZ: 0
                }]]
            },
            "transition.shrinkOut": {
                defaultDuration: 600,
                calls: [[{
                    opacity: [0, 1],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: 1.3,
                    scaleY: 1.3,
                    translateZ: 0
                }]],
                reset: {scaleX: 1, scaleY: 1}
            },
            "transition.expandIn": {
                defaultDuration: 700,
                calls: [[{
                    opacity: [1, 0],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: [1, .625],
                    scaleY: [1, .625],
                    translateZ: 0
                }]]
            },
            "transition.expandOut": {
                defaultDuration: 700,
                calls: [[{
                    opacity: [0, 1],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: .5,
                    scaleY: .5,
                    translateZ: 0
                }]],
                reset: {scaleX: 1, scaleY: 1}
            },
            "transition.bounceIn": {
                defaultDuration: 800,
                calls: [[{opacity: [1, 0], scaleX: [1.05, .3], scaleY: [1.05, .3]}, .35], [{
                    scaleX: .9,
                    scaleY: .9,
                    translateZ: 0
                }, .2], [{scaleX: 1, scaleY: 1}, .45]]
            },
            "transition.bounceOut": {
                defaultDuration: 800,
                calls: [[{scaleX: .95, scaleY: .95}, .35], [{
                    scaleX: 1.1,
                    scaleY: 1.1,
                    translateZ: 0
                }, .35], [{opacity: [0, 1], scaleX: .3, scaleY: .3}, .3]],
                reset: {scaleX: 1, scaleY: 1}
            },
            "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [[{
                    opacity: [1, 0],
                    translateY: [-30, 1e3]
                }, .6, {easing: "easeOutCirc"}], [{translateY: 10}, .2], [{translateY: 0}, .2]]
            },
            "transition.bounceUpOut": {
                defaultDuration: 1e3,
                calls: [[{translateY: 20}, .2], [{opacity: [0, "easeInCirc", 1], translateY: -1e3}, .8]],
                reset: {translateY: 0}
            },
            "transition.bounceDownIn": {
                defaultDuration: 800,
                calls: [[{
                    opacity: [1, 0],
                    translateY: [30, -1e3]
                }, .6, {easing: "easeOutCirc"}], [{translateY: -10}, .2], [{translateY: 0}, .2]]
            },
            "transition.bounceDownOut": {
                defaultDuration: 1e3,
                calls: [[{translateY: -20}, .2], [{opacity: [0, "easeInCirc", 1], translateY: 1e3}, .8]],
                reset: {translateY: 0}
            },
            "transition.bounceLeftIn": {
                defaultDuration: 750,
                calls: [[{
                    opacity: [1, 0],
                    translateX: [30, -1250]
                }, .6, {easing: "easeOutCirc"}], [{translateX: -10}, .2], [{translateX: 0}, .2]]
            },
            "transition.bounceLeftOut": {
                defaultDuration: 750,
                calls: [[{translateX: 30}, .2], [{opacity: [0, "easeInCirc", 1], translateX: -1250}, .8]],
                reset: {translateX: 0}
            },
            "transition.bounceRightIn": {
                defaultDuration: 750,
                calls: [[{
                    opacity: [1, 0],
                    translateX: [-30, 1250]
                }, .6, {easing: "easeOutCirc"}], [{translateX: 10}, .2], [{translateX: 0}, .2]]
            },
            "transition.bounceRightOut": {
                defaultDuration: 750,
                calls: [[{translateX: -30}, .2], [{opacity: [0, "easeInCirc", 1], translateX: 1250}, .8]],
                reset: {translateX: 0}
            },
            "transition.slideUpIn": {
                defaultDuration: 900,
                calls: [[{opacity: [1, 0], translateY: [0, 20], translateZ: 0}]]
            },
            "transition.slideUpOut": {
                defaultDuration: 900,
                calls: [[{opacity: [0, 1], translateY: -20, translateZ: 0}]],
                reset: {translateY: 0}
            },
            "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [[{opacity: [1, 0], translateY: [0, -20], translateZ: 0}]]
            },
            "transition.slideDownOut": {
                defaultDuration: 900,
                calls: [[{opacity: [0, 1], translateY: 20, translateZ: 0}]],
                reset: {translateY: 0}
            },
            "transition.slideLeftIn": {
                defaultDuration: 1e3,
                calls: [[{opacity: [1, 0], translateX: [0, -20], translateZ: 0}]]
            },
            "transition.slideLeftOut": {
                defaultDuration: 1050,
                calls: [[{opacity: [0, 1], translateX: -20, translateZ: 0}]],
                reset: {translateX: 0}
            },
            "transition.slideRightIn": {
                defaultDuration: 1e3,
                calls: [[{opacity: [1, 0], translateX: [0, 20], translateZ: 0}]]
            },
            "transition.slideRightOut": {
                defaultDuration: 1050,
                calls: [[{opacity: [0, 1], translateX: 20, translateZ: 0}]],
                reset: {translateX: 0}
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [[{opacity: [1, 0], translateY: [0, 75], translateZ: 0}]]
            },
            "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [[{opacity: [0, 1], translateY: -75, translateZ: 0}]],
                reset: {translateY: 0}
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [[{opacity: [1, 0], translateY: [0, -75], translateZ: 0}]]
            },
            "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [[{opacity: [0, 1], translateY: 75, translateZ: 0}]],
                reset: {translateY: 0}
            },
            "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [[{opacity: [1, 0], translateX: [0, -75], translateZ: 0}]]
            },
            "transition.slideLeftBigOut": {
                defaultDuration: 750,
                calls: [[{opacity: [0, 1], translateX: -75, translateZ: 0}]],
                reset: {translateX: 0}
            },
            "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [[{opacity: [1, 0], translateX: [0, 75], translateZ: 0}]]
            },
            "transition.slideRightBigOut": {
                defaultDuration: 750,
                calls: [[{opacity: [0, 1], translateX: 75, translateZ: 0}]],
                reset: {translateX: 0}
            },
            "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [[{
                    opacity: [1, 0],
                    transformPerspective: [800, 800],
                    transformOriginX: [0, 0],
                    transformOriginY: ["100%", "100%"],
                    rotateX: [0, -180]
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
            },
            "transition.perspectiveUpOut": {
                defaultDuration: 850,
                calls: [[{
                    opacity: [0, 1],
                    transformPerspective: [800, 800],
                    transformOriginX: [0, 0],
                    transformOriginY: ["100%", "100%"],
                    rotateX: -180
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0}
            },
            "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [[{
                    opacity: [1, 0],
                    transformPerspective: [800, 800],
                    transformOriginX: [0, 0],
                    transformOriginY: [0, 0],
                    rotateX: [0, 180]
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
            },
            "transition.perspectiveDownOut": {
                defaultDuration: 850,
                calls: [[{
                    opacity: [0, 1],
                    transformPerspective: [800, 800],
                    transformOriginX: [0, 0],
                    transformOriginY: [0, 0],
                    rotateX: 180
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0}
            },
            "transition.perspectiveLeftIn": {
                defaultDuration: 950,
                calls: [[{
                    opacity: [1, 0],
                    transformPerspective: [2e3, 2e3],
                    transformOriginX: [0, 0],
                    transformOriginY: [0, 0],
                    rotateY: [0, -180]
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
            },
            "transition.perspectiveLeftOut": {
                defaultDuration: 950,
                calls: [[{
                    opacity: [0, 1],
                    transformPerspective: [2e3, 2e3],
                    transformOriginX: [0, 0],
                    transformOriginY: [0, 0],
                    rotateY: -180
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0}
            },
            "transition.perspectiveRightIn": {
                defaultDuration: 950,
                calls: [[{
                    opacity: [1, 0],
                    transformPerspective: [2e3, 2e3],
                    transformOriginX: ["100%", "100%"],
                    transformOriginY: [0, 0],
                    rotateY: [0, 180]
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
            },
            "transition.perspectiveRightOut": {
                defaultDuration: 950,
                calls: [[{
                    opacity: [0, 1],
                    transformPerspective: [2e3, 2e3],
                    transformOriginX: ["100%", "100%"],
                    transformOriginY: [0, 0],
                    rotateY: 180
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0}
            }
        };
        for (var k in f.RegisterEffect.packagedEffects)f.RegisterEffect.packagedEffects.hasOwnProperty(k) && f.RegisterEffect(k, f.RegisterEffect.packagedEffects[k]);
        f.RunSequence = function (a) {
            var b = g.extend(!0, [], a);
            b.length > 1 && (g.each(b.reverse(), function (a, c) {
                var d = b[a + 1];
                if (d) {
                    var e = c.o || c.options, h = d.o || d.options, i = e && e.sequenceQueue === !1 ? "begin" : "complete", j = h && h[i], k = {};
                    k[i] = function () {
                        var a = d.e || d.elements, b = a.nodeType ? [a] : a;
                        j && j.call(b, b), f(c)
                    }, d.o ? d.o = g.extend({}, h, k) : d.options = g.extend({}, h, k)
                }
            }), b.reverse()), f(b[0])
        }
    }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
});
/*! nanoScrollerJS - v0.8.7 */
!function (a) {
    return "function" == typeof define && define.amd ? define(["jquery"], function (b) {
        return a(b, window, document)
    }) : "object" == typeof exports ? module.exports = a(require("jquery"), window, document) : a(jQuery, window, document)
}(function (a, b, c) {
    "use strict";
    var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H;
    z = {
        paneClass: "nano-pane",
        sliderClass: "nano-slider",
        contentClass: "nano-content",
        enabledClass: "has-scrollbar",
        flashedClass: "flashed",
        activeClass: "active",
        iOSNativeScrolling: !1,
        preventPageScrolling: !1,
        disableResize: !1,
        alwaysVisible: !1,
        flashDelay: 1500,
        sliderMinHeight: 20,
        sliderMaxHeight: null,
        documentContext: null,
        windowContext: null
    }, u = "scrollbar", t = "scroll", l = "mousedown", m = "mouseenter", n = "mousemove", p = "mousewheel", o = "mouseup", s = "resize", h = "drag", i = "enter", w = "up", r = "panedown", f = "DOMMouseScroll", g = "down", x = "wheel", j = "keydown", k = "keyup", v = "touchmove", d = "Microsoft Internet Explorer" === b.navigator.appName && /msie 7./i.test(b.navigator.appVersion) && b.ActiveXObject, e = null, D = b.requestAnimationFrame, y = b.cancelAnimationFrame, F = c.createElement("div").style, H = function () {
        var a, b, c, d, e, f;
        for (d = ["t", "webkitT", "MozT", "msT", "OT"], a = e = 0, f = d.length; f > e; a = ++e)if (c = d[a], b = d[a] + "ransform", b in F)return d[a].substr(0, d[a].length - 1);
        return !1
    }(), G = function (a) {
        return H === !1 ? !1 : "" === H ? a : H + a.charAt(0).toUpperCase() + a.substr(1)
    }, E = G("transform"), B = E !== !1, A = function () {
        var a, b, d;
        return a = c.createElement("div"), b = a.style, b.position = "absolute", b.width = "100px", b.height = "100px", b.overflow = t, b.top = "-9999px", c.body.appendChild(a), d = a.offsetWidth - a.clientWidth, c.body.removeChild(a), d
    }, C = function () {
        var a, c, d;
        return c = b.navigator.userAgent, (a = /(?=.+Mac OS X)(?=.+Firefox)/.test(c)) ? (d = /Firefox\/\d{2}\./.exec(c), d && (d = d[0].replace(/\D+/g, "")), a && +d > 23) : !1
    }, q = function () {
        function j(d, f) {
            this.el = d, this.options = f, e || (e = A()), this.$el = a(this.el), this.doc = a(this.options.documentContext || c), this.win = a(this.options.windowContext || b), this.body = this.doc.find("body"), this.$content = this.$el.children("." + this.options.contentClass), this.$content.attr("tabindex", this.options.tabIndex || 0), this.content = this.$content[0], this.previousPosition = 0, this.options.iOSNativeScrolling && null != this.el.style.WebkitOverflowScrolling ? this.nativeScrolling() : this.generate(), this.createEvents(), this.addEvents(), this.reset()
        }

        return j.prototype.preventScrolling = function (a, b) {
            if (this.isActive)if (a.type === f) (b === g && a.originalEvent.detail > 0 || b === w && a.originalEvent.detail < 0) && a.preventDefault(); else if (a.type === p) {
                if (!a.originalEvent || !a.originalEvent.wheelDelta)return;
                (b === g && a.originalEvent.wheelDelta < 0 || b === w && a.originalEvent.wheelDelta > 0) && a.preventDefault()
            }
        }, j.prototype.nativeScrolling = function () {
            this.$content.css({WebkitOverflowScrolling: "touch"}), this.iOSNativeScrolling = !0, this.isActive = !0
        }, j.prototype.updateScrollValues = function () {
            var a, b;
            a = this.content, this.maxScrollTop = a.scrollHeight - a.clientHeight, this.prevScrollTop = this.contentScrollTop || 0, this.contentScrollTop = a.scrollTop, b = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same", this.previousPosition = this.contentScrollTop, "same" !== b && this.$el.trigger("update", {
                position: this.contentScrollTop,
                maximum: this.maxScrollTop,
                direction: b
            }), this.iOSNativeScrolling || (this.maxSliderTop = this.paneHeight - this.sliderHeight, this.sliderTop = 0 === this.maxScrollTop ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop)
        }, j.prototype.setOnScrollStyles = function () {
            var a;
            B ? (a = {}, a[E] = "translate(0, " + this.sliderTop + "px)") : a = {top: this.sliderTop}, D ? (y && this.scrollRAF && y(this.scrollRAF), this.scrollRAF = D(function (b) {
                return function () {
                    return b.scrollRAF = null, b.slider.css(a)
                }
            }(this))) : this.slider.css(a)
        }, j.prototype.createEvents = function () {
            this.events = {
                down: function (a) {
                    return function (b) {
                        return a.isBeingDragged = !0, a.offsetY = b.pageY - a.slider.offset().top, a.slider.is(b.target) || (a.offsetY = 0), a.pane.addClass(a.options.activeClass), a.doc.bind(n, a.events[h]).bind(o, a.events[w]), a.body.bind(m, a.events[i]), !1
                    }
                }(this), drag: function (a) {
                    return function (b) {
                        return a.sliderY = b.pageY - a.$el.offset().top - a.paneTop - (a.offsetY || .5 * a.sliderHeight), a.scroll(), a.contentScrollTop >= a.maxScrollTop && a.prevScrollTop !== a.maxScrollTop ? a.$el.trigger("scrollend") : 0 === a.contentScrollTop && 0 !== a.prevScrollTop && a.$el.trigger("scrolltop"), !1
                    }
                }(this), up: function (a) {
                    return function (b) {
                        return a.isBeingDragged = !1, a.pane.removeClass(a.options.activeClass), a.doc.unbind(n, a.events[h]).unbind(o, a.events[w]), a.body.unbind(m, a.events[i]), !1
                    }
                }(this), resize: function (a) {
                    return function (b) {
                        a.reset()
                    }
                }(this), panedown: function (a) {
                    return function (b) {
                        return a.sliderY = (b.offsetY || b.originalEvent.layerY) - .5 * a.sliderHeight, a.scroll(), a.events.down(b), !1
                    }
                }(this), scroll: function (a) {
                    return function (b) {
                        a.updateScrollValues(), a.isBeingDragged || (a.iOSNativeScrolling || (a.sliderY = a.sliderTop, a.setOnScrollStyles()), null != b && (a.contentScrollTop >= a.maxScrollTop ? (a.options.preventPageScrolling && a.preventScrolling(b, g), a.prevScrollTop !== a.maxScrollTop && a.$el.trigger("scrollend")) : 0 === a.contentScrollTop && (a.options.preventPageScrolling && a.preventScrolling(b, w), 0 !== a.prevScrollTop && a.$el.trigger("scrolltop"))))
                    }
                }(this), wheel: function (a) {
                    return function (b) {
                        var c;
                        if (null != b)return c = b.delta || b.wheelDelta || b.originalEvent && b.originalEvent.wheelDelta || -b.detail || b.originalEvent && -b.originalEvent.detail, c && (a.sliderY += -c / 3), a.scroll(), !1
                    }
                }(this), enter: function (a) {
                    return function (b) {
                        var c;
                        if (a.isBeingDragged)return 1 !== (b.buttons || b.which) ? (c = a.events)[w].apply(c, arguments) : void 0
                    }
                }(this)
            }
        }, j.prototype.addEvents = function () {
            var a;
            this.removeEvents(), a = this.events, this.options.disableResize || this.win.bind(s, a[s]), this.iOSNativeScrolling || (this.slider.bind(l, a[g]), this.pane.bind(l, a[r]).bind("" + p + " " + f, a[x])), this.$content.bind("" + t + " " + p + " " + f + " " + v, a[t])
        }, j.prototype.removeEvents = function () {
            var a;
            a = this.events, this.win.unbind(s, a[s]), this.iOSNativeScrolling || (this.slider.unbind(), this.pane.unbind()), this.$content.unbind("" + t + " " + p + " " + f + " " + v, a[t])
        }, j.prototype.generate = function () {
            var a, c, d, f, g, h, i;
            return f = this.options, h = f.paneClass, i = f.sliderClass, a = f.contentClass, (g = this.$el.children("." + h)).length || g.children("." + i).length || this.$el.append('<div class="' + h + '"><div class="' + i + '" /></div>'), this.pane = this.$el.children("." + h), this.slider = this.pane.find("." + i), 0 === e && C() ? (d = b.getComputedStyle(this.content, null).getPropertyValue("padding-right").replace(/[^0-9.]+/g, ""), c = {
                right: -14,
                paddingRight: +d + 14
            }) : e && (c = {right: -e}, this.$el.addClass(f.enabledClass)), null != c && this.$content.css(c), this
        }, j.prototype.restore = function () {
            this.stopped = !1, this.iOSNativeScrolling || this.pane.show(), this.addEvents()
        }, j.prototype.reset = function () {
            var a, b, c, f, g, h, i, j, k, l, m, n;
            return this.iOSNativeScrolling ? void(this.contentHeight = this.content.scrollHeight) : (this.$el.find("." + this.options.paneClass).length || this.generate().stop(), this.stopped && this.restore(), a = this.content, f = a.style, g = f.overflowY, d && this.$content.css({height: this.$content.height()}), b = a.scrollHeight + e, l = parseInt(this.$el.css("max-height"), 10), l > 0 && (this.$el.height(""), this.$el.height(a.scrollHeight > l ? l : a.scrollHeight)), i = this.pane.outerHeight(!1), k = parseInt(this.pane.css("top"), 10), h = parseInt(this.pane.css("bottom"), 10), j = i + k + h, n = Math.round(j / b * i), n < this.options.sliderMinHeight ? n = this.options.sliderMinHeight : null != this.options.sliderMaxHeight && n > this.options.sliderMaxHeight && (n = this.options.sliderMaxHeight), g === t && f.overflowX !== t && (n += e), this.maxSliderTop = j - n, this.contentHeight = b, this.paneHeight = i, this.paneOuterHeight = j, this.sliderHeight = n, this.paneTop = k, this.slider.height(n), this.events.scroll(), this.pane.show(), this.isActive = !0, a.scrollHeight === a.clientHeight || this.pane.outerHeight(!0) >= a.scrollHeight && g !== t ? (this.pane.hide(), this.isActive = !1) : this.el.clientHeight === a.scrollHeight && g === t ? this.slider.hide() : this.slider.show(), this.pane.css({
                opacity: this.options.alwaysVisible ? 1 : "",
                visibility: this.options.alwaysVisible ? "visible" : ""
            }), c = this.$content.css("position"), ("static" === c || "relative" === c) && (m = parseInt(this.$content.css("right"), 10), m && this.$content.css({
                right: "",
                marginRight: m
            })), this)
        }, j.prototype.scroll = function () {
            return this.isActive ? (this.sliderY = Math.max(0, this.sliderY), this.sliderY = Math.min(this.maxSliderTop, this.sliderY), this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop), this.iOSNativeScrolling || (this.updateScrollValues(), this.setOnScrollStyles()), this) : void 0
        }, j.prototype.scrollBottom = function (a) {
            return this.isActive ? (this.$content.scrollTop(this.contentHeight - this.$content.height() - a).trigger(p), this.stop().restore(), this) : void 0
        }, j.prototype.scrollTop = function (a) {
            return this.isActive ? (this.$content.scrollTop(+a).trigger(p), this.stop().restore(), this) : void 0
        }, j.prototype.scrollTo = function (a) {
            return this.isActive ? (this.scrollTop(this.$el.find(a).get(0).offsetTop), this) : void 0
        }, j.prototype.stop = function () {
            return y && this.scrollRAF && (y(this.scrollRAF), this.scrollRAF = null), this.stopped = !0, this.removeEvents(), this.iOSNativeScrolling || this.pane.hide(), this
        }, j.prototype.destroy = function () {
            return this.stopped || this.stop(), !this.iOSNativeScrolling && this.pane.length && this.pane.remove(), d && this.$content.height(""), this.$content.removeAttr("tabindex"), this.$el.hasClass(this.options.enabledClass) && (this.$el.removeClass(this.options.enabledClass), this.$content.css({right: ""})), this
        }, j.prototype.flash = function () {
            return !this.iOSNativeScrolling && this.isActive ? (this.reset(), this.pane.addClass(this.options.flashedClass), setTimeout(function (a) {
                return function () {
                    a.pane.removeClass(a.options.flashedClass)
                }
            }(this), this.options.flashDelay), this) : void 0
        }, j
    }(), a.fn.nanoScroller = function (b) {
        return this.each(function () {
            var c, d;
            if ((d = this.nanoscroller) || (c = a.extend({}, z, b), this.nanoscroller = d = new q(this, c)), b && "object" == typeof b) {
                if (a.extend(d.options, b), null != b.scrollBottom)return d.scrollBottom(b.scrollBottom);
                if (null != b.scrollTop)return d.scrollTop(b.scrollTop);
                if (b.scrollTo)return d.scrollTo(b.scrollTo);
                if ("bottom" === b.scroll)return d.scrollBottom(0);
                if ("top" === b.scroll)return d.scrollTop(0);
                if (b.scroll && b.scroll instanceof a)return d.scrollTo(b.scroll);
                if (b.stop)return d.stop();
                if (b.destroy)return d.destroy();
                if (b.flash)return d.flash()
            }
            return d.reset()
        })
    }, a.fn.nanoScroller.Constructor = q
});
/*! jQuery mmenu v5.7.8 */
!function (a) {
    function b() {
        a[c].glbl || (h = {
            $wndw: a(window),
            $docu: a(document),
            $html: a("html"),
            $body: a("body")
        }, e = {}, f = {}, g = {}, a.each([e, f, g], function (a, b) {
            b.add = function (a) {
                a = a.split(" ");
                for (var c = 0, d = a.length; c < d; c++)b[a[c]] = b.mm(a[c])
            }
        }), e.mm = function (a) {
            return "mm-" + a
        }, e.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), e.umm = function (a) {
            return "mm-" == a.slice(0, 3) && (a = a.slice(3)), a
        }, f.mm = function (a) {
            return "mm-" + a
        }, f.add("parent child"), g.mm = function (a) {
            return a + ".mm"
        }, g.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"), a[c]._c = e, a[c]._d = f, a[c]._e = g, a[c].glbl = h)
    }

    var c = "mmenu", d = "5.7.8";
    if (!(a[c] && a[c].version > d)) {
        a[c] = function (a, b, c) {
            this.$menu = a, this._api = ["bind", "getInstance", "update", "initPanels", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.opts = b, this.conf = c, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();
            var d = this.$pnls.children();
            return this._initAddons(), this.initPanels(d), "function" == typeof this.___debug && this.___debug(), this
        }, a[c].version = d, a[c].addons = {}, a[c].uniqueId = 0, a[c].defaults = {
            extensions: [],
            initMenu: function () {
            },
            initPanels: function () {
            },
            navbar: {add: !0, title: "Menu", titleLink: "panel"},
            onClick: {setSelected: !0},
            slidingSubmenus: !0
        }, a[c].configuration = {
            classNames: {
                divider: "Divider",
                inset: "Inset",
                panel: "Panel",
                selected: "Selected",
                spacer: "Spacer",
                vertical: "Vertical"
            }, clone: !1, openingInterval: 25, panelNodetype: "ul, ol, div", transitionDuration: 400
        }, a[c].prototype = {
            init: function (a) {
                this.initPanels(a)
            }, getInstance: function () {
                return this
            }, update: function () {
                this.trigger("update")
            }, initPanels: function (a) {
                a = a.not("." + e.nopanel), a = this._initPanels(a), this.opts.initPanels.call(this, a), this.trigger("initPanels", a), this.trigger("update")
            }, openPanel: function (b) {
                var d = b.parent(), f = this;
                if (d.hasClass(e.vertical)) {
                    var g = d.parents("." + e.subopened);
                    if (g.length)return void this.openPanel(g.first());
                    d.addClass(e.opened), this.trigger("openPanel", b), this.trigger("openingPanel", b), this.trigger("openedPanel", b)
                } else {
                    if (b.hasClass(e.current))return;
                    var h = this.$pnls.children("." + e.panel), i = h.filter("." + e.current);
                    h.removeClass(e.highest).removeClass(e.current).not(b).not(i).not("." + e.vertical).addClass(e.hidden), a[c].support.csstransitions || i.addClass(e.hidden), b.hasClass(e.opened) ? b.nextAll("." + e.opened).addClass(e.highest).removeClass(e.opened).removeClass(e.subopened) : (b.addClass(e.highest), i.addClass(e.subopened)), b.removeClass(e.hidden).addClass(e.current), f.trigger("openPanel", b), setTimeout(function () {
                        b.removeClass(e.subopened).addClass(e.opened), f.trigger("openingPanel", b), f.__transitionend(b, function () {
                            f.trigger("openedPanel", b)
                        }, f.conf.transitionDuration)
                    }, this.conf.openingInterval)
                }
            }, closePanel: function (a) {
                var b = a.parent();
                b.hasClass(e.vertical) && (b.removeClass(e.opened), this.trigger("closePanel", a), this.trigger("closingPanel", a), this.trigger("closedPanel", a))
            }, closeAllPanels: function () {
                this.$menu.find("." + e.listview).children().removeClass(e.selected).filter("." + e.vertical).removeClass(e.opened);
                var a = this.$pnls.children("." + e.panel), b = a.first();
                this.$pnls.children("." + e.panel).not(b).removeClass(e.subopened).removeClass(e.opened).removeClass(e.current).removeClass(e.highest).addClass(e.hidden), this.openPanel(b)
            }, togglePanel: function (a) {
                var b = a.parent();
                b.hasClass(e.vertical) && this[b.hasClass(e.opened) ? "closePanel" : "openPanel"](a)
            }, setSelected: function (a) {
                this.$menu.find("." + e.listview).children("." + e.selected).removeClass(e.selected), a.addClass(e.selected), this.trigger("setSelected", a)
            }, bind: function (a, b) {
                a = "init" == a ? "initPanels" : a, this.cbck[a] = this.cbck[a] || [], this.cbck[a].push(b)
            }, trigger: function () {
                var a = this, b = Array.prototype.slice.call(arguments), c = b.shift();
                if (c = "init" == c ? "initPanels" : c, this.cbck[c])for (var d = 0, e = this.cbck[c].length; d < e; d++)this.cbck[c][d].apply(a, b)
            }, _initMenu: function () {
                this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function () {
                    a(this).attr("id", e.mm(a(this).attr("id")))
                })), this.opts.initMenu.call(this, this.$menu, this.$orig), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = a('<div class="' + e.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.parent().addClass(e.wrapper);
                var b = [e.menu];
                this.opts.slidingSubmenus || b.push(e.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && b.push(this.opts.extensions), this.$menu.addClass(b.join(" ")), this.trigger("_initMenu")
            }, _initPanels: function (b) {
                var d = this, g = this.__findAddBack(b, "ul, ol");
                this.__refactorClass(g, this.conf.classNames.inset, "inset").addClass(e.nolistview + " " + e.nopanel), g.not("." + e.nolistview).addClass(e.listview);
                var h = this.__findAddBack(b, "." + e.listview).children();
                this.__refactorClass(h, this.conf.classNames.selected, "selected"), this.__refactorClass(h, this.conf.classNames.divider, "divider"), this.__refactorClass(h, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(b, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");
                var i = a(), j = b.add(b.find("." + e.panel)).add(this.__findAddBack(b, "." + e.listview).children().children(this.conf.panelNodetype)).not("." + e.nopanel);
                this.__refactorClass(j, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || j.addClass(e.vertical), j.each(function () {
                    var b = a(this), c = b;
                    b.is("ul, ol") ? (b.wrap('<div class="' + e.panel + '" />'), c = b.parent()) : c.addClass(e.panel);
                    var f = b.attr("id");
                    b.removeAttr("id"), c.attr("id", f || d.__getUniqueId()), b.hasClass(e.vertical) && (b.removeClass(d.conf.classNames.vertical), c.add(c.parent()).addClass(e.vertical)), i = i.add(c)
                });
                var k = a("." + e.panel, this.$menu);
                i.each(function (b) {
                    var g, h, i = a(this), j = i.parent(), k = j.children("a, span").first();
                    if (j.is("." + e.panels) || (j.data(f.child, i), i.data(f.parent, j)), j.children("." + e.next).length || j.parent().is("." + e.listview) && (g = i.attr("id"), h = a('<a class="' + e.next + '" href="#' + g + '" data-target="#' + g + '" />').insertBefore(k), k.is("span") && h.addClass(e.fullsubopen)), !i.children("." + e.navbar).length && !j.hasClass(e.vertical)) {
                        j.parent().is("." + e.listview) ? j = j.closest("." + e.panel) : (k = j.closest("." + e.panel).find('a[href="#' + i.attr("id") + '"]').first(), j = k.closest("." + e.panel));
                        var l = !1, m = a('<div class="' + e.navbar + '" />');
                        if (d.opts.navbar.add && i.addClass(e.hasnavbar), j.length) {
                            switch (g = j.attr("id"), d.opts.navbar.titleLink) {
                                case"anchor":
                                    l = k.attr("href");
                                    break;
                                case"panel":
                                case"parent":
                                    l = "#" + g;
                                    break;
                                default:
                                    l = !1
                            }
                            m.append('<a class="' + e.btn + " " + e.prev + '" href="#' + g + '" data-target="#' + g + '" />').append(a('<a class="' + e.title + '"' + (l ? ' href="' + l + '"' : "") + " />").text(k.text())).prependTo(i)
                        } else d.opts.navbar.title && m.append('<a class="' + e.title + '">' + a[c].i18n(d.opts.navbar.title) + "</a>").prependTo(i)
                    }
                });
                var l = this.__findAddBack(b, "." + e.listview).children("." + e.selected).removeClass(e.selected).last().addClass(e.selected);
                l.add(l.parentsUntil("." + e.menu, "li")).filter("." + e.vertical).addClass(e.opened).end().each(function () {
                    a(this).parentsUntil("." + e.menu, "." + e.panel).not("." + e.vertical).first().addClass(e.opened).parentsUntil("." + e.menu, "." + e.panel).not("." + e.vertical).first().addClass(e.opened).addClass(e.subopened)
                }), l.children("." + e.panel).not("." + e.vertical).addClass(e.opened).parentsUntil("." + e.menu, "." + e.panel).not("." + e.vertical).first().addClass(e.opened).addClass(e.subopened);
                var m = k.filter("." + e.opened);
                return m.length || (m = i.first()), m.addClass(e.opened).last().addClass(e.current), i.not("." + e.vertical).not(m.last()).addClass(e.hidden).end().filter(function () {
                    return !a(this).parent().hasClass(e.panels)
                }).appendTo(this.$pnls), this.trigger("_initPanels", i), i
            }, _initAnchors: function () {
                var b = this;
                h.$body.on(g.click + "-oncanvas", "a[href]", function (d) {
                    var f = a(this), g = !1, h = b.$menu.find(f).length;
                    for (var i in a[c].addons)if (a[c].addons[i].clickAnchor.call(b, f, h)) {
                        g = !0;
                        break
                    }
                    var j = f.attr("href");
                    if (!g && h && j.length > 1 && "#" == j.slice(0, 1))try {
                        var k = a(j, b.$menu);
                        k.is("." + e.panel) && (g = !0, b[f.parent().hasClass(e.vertical) ? "togglePanel" : "openPanel"](k))
                    } catch (a) {
                    }
                    if (g && d.preventDefault(), !g && h && f.is("." + e.listview + " > li > a") && !f.is('[rel="external"]') && !f.is('[target="_blank"]')) {
                        b.__valueOrFn(b.opts.onClick.setSelected, f) && b.setSelected(a(d.target).parent());
                        var l = b.__valueOrFn(b.opts.onClick.preventDefault, f, "#" == j.slice(0, 1));
                        l && d.preventDefault(), b.__valueOrFn(b.opts.onClick.close, f, l) && b.close()
                    }
                }), this.trigger("_initAnchors")
            }, _initAddons: function () {
                var b;
                for (b in a[c].addons)a[c].addons[b].add.call(this), a[c].addons[b].add = function () {
                };
                for (b in a[c].addons)a[c].addons[b].setup.call(this);
                this.trigger("_initAddons")
            }, _getOriginalMenuId: function () {
                var a = this.$menu.attr("id");
                return a && a.length && this.conf.clone && (a = e.umm(a)), a
            }, __api: function () {
                var b = this, c = {};
                return a.each(this._api, function (a) {
                    var d = this;
                    c[d] = function () {
                        var a = b[d].apply(b, arguments);
                        return "undefined" == typeof a ? c : a
                    }
                }), c
            }, __valueOrFn: function (a, b, c) {
                return "function" == typeof a ? a.call(b[0]) : "undefined" == typeof a && "undefined" != typeof c ? c : a
            }, __refactorClass: function (a, b, c) {
                return a.filter("." + b).removeClass(b).addClass(e[c])
            }, __findAddBack: function (a, b) {
                return a.find(b).add(a.filter(b))
            }, __filterListItems: function (a) {
                return a.not("." + e.divider).not("." + e.hidden)
            }, __transitionend: function (b, c, d) {
                var e = !1, f = function (d) {
                    if ("undefined" != typeof d) {
                        if (!a(d.target).is(b))return !1;
                        b.unbind(g.transitionend), b.unbind(g.webkitTransitionEnd)
                    }
                    e || c.call(b[0]), e = !0
                };
                b.on(g.transitionend, f), b.on(g.webkitTransitionEnd, f), setTimeout(f, 1.1 * d)
            }, __getUniqueId: function () {
                return e.mm(a[c].uniqueId++)
            }
        }, a.fn[c] = function (d, e) {
            b(), d = a.extend(!0, {}, a[c].defaults, d), e = a.extend(!0, {}, a[c].configuration, e);
            var f = a();
            return this.each(function () {
                var b = a(this);
                if (!b.data(c)) {
                    var g = new a[c](b, d, e);
                    g.$menu.data(c, g.__api()), f = f.add(g.$menu)
                }
            }), f
        }, a[c].i18n = function () {
            var b = {};
            return function (c) {
                switch (typeof c) {
                    case"object":
                        return a.extend(b, c), b;
                    case"string":
                        return b[c] || c;
                    case"undefined":
                    default:
                        return b
                }
            }
        }(), a[c].support = {
            touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
            csstransitions: function () {
                if ("undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransitions)return Modernizr.csstransitions;
                var a = document.body || document.documentElement, b = a.style, c = "transition";
                if ("string" == typeof b[c])return !0;
                var d = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                c = c.charAt(0).toUpperCase() + c.substr(1);
                for (var e = 0; e < d.length; e++)if ("string" == typeof b[d[e] + c])return !0;
                return !1
            }(),
            csstransforms: function () {
                return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms || Modernizr.csstransforms
            }(),
            csstransforms3d: function () {
                return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms3d || Modernizr.csstransforms3d
            }()
        };
        var e, f, g, h
    }
}(jQuery), function (a) {
    var b = "mmenu", c = "offCanvas";
    a[b].addons[c] = {
        setup: function () {
            if (this.opts[c]) {
                var e = this.opts[c], f = this.conf[c];
                g = a[b].glbl, this._api = a.merge(this._api, ["open", "close", "setPage"]), "top" != e.position && "bottom" != e.position || (e.zposition = "front"), "string" != typeof f.pageSelector && (f.pageSelector = "> " + f.pageNodetype), g.$allMenus = (g.$allMenus || a()).add(this.$menu), this.vars.opened = !1;
                var h = [d.offcanvas];
                "left" != e.position && h.push(d.mm(e.position)), "back" != e.zposition && h.push(d.mm(e.zposition)), this.$menu.addClass(h.join(" ")).parent().removeClass(d.wrapper), a[b].support.csstransforms || this.$menu.addClass(d["no-csstransforms"]), a[b].support.csstransforms3d || this.$menu.addClass(d["no-csstransforms3d"]), this.setPage(g.$page), this._initBlocker(), this["_initWindow_" + c](), this.$menu[f.menuInjectMethod + "To"](f.menuWrapperSelector);
                var i = window.location.hash;
                if (i) {
                    var j = this._getOriginalMenuId();
                    j && j == i.slice(1) && this.open()
                }
            }
        }, add: function () {
            d = a[b]._c, e = a[b]._d, f = a[b]._e, d.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"), e.add("style"), f.add("resize")
        }, clickAnchor: function (a, b) {
            var e = this;
            if (this.opts[c]) {
                var f = this._getOriginalMenuId();
                if (f && a.is('[href="#' + f + '"]')) {
                    if (b)return !0;
                    var h = a.closest("." + d.menu);
                    if (h.length) {
                        var i = h.data("mmenu");
                        if (i && i.close)return i.close(), e.__transitionend(h, function () {
                            e.open()
                        }, e.conf.transitionDuration), !0
                    }
                    return this.open(), !0
                }
                if (g.$page)return f = g.$page.first().attr("id"), f && a.is('[href="#' + f + '"]') ? (this.close(), !0) : void 0
            }
        }
    }, a[b].defaults[c] = {
        position: "left",
        zposition: "back",
        blockUI: !0,
        moveBackground: !0
    }, a[b].configuration[c] = {
        pageNodetype: "div",
        pageSelector: null,
        noPageSelector: [],
        wrapPageIfNeeded: !0,
        menuWrapperSelector: "body",
        menuInjectMethod: "prepend"
    }, a[b].prototype.open = function () {
        if (!this.vars.opened) {
            var a = this;
            this._openSetup(), setTimeout(function () {
                a._openFinish()
            }, this.conf.openingInterval), this.trigger("open")
        }
    }, a[b].prototype._openSetup = function () {
        var b = this, h = this.opts[c];
        this.closeAllOthers(), g.$page.each(function () {
            a(this).data(e.style, a(this).attr("style") || "")
        }), g.$wndw.trigger(f.resize + "-" + c, [!0]);
        var i = [d.opened];
        h.blockUI && i.push(d.blocking), "modal" == h.blockUI && i.push(d.modal), h.moveBackground && i.push(d.background), "left" != h.position && i.push(d.mm(this.opts[c].position)), "back" != h.zposition && i.push(d.mm(this.opts[c].zposition)), this.opts.extensions && i.push(this.opts.extensions), g.$html.addClass(i.join(" ")), setTimeout(function () {
            b.vars.opened = !0
        }, this.conf.openingInterval), this.$menu.addClass(d.current + " " + d.opened)
    }, a[b].prototype._openFinish = function () {
        var a = this;
        this.__transitionend(g.$page.first(), function () {
            a.trigger("opened")
        }, this.conf.transitionDuration), g.$html.addClass(d.opening), this.trigger("opening")
    }, a[b].prototype.close = function () {
        if (this.vars.opened) {
            var b = this;
            this.__transitionend(g.$page.first(), function () {
                b.$menu.removeClass(d.current + " " + d.opened);
                var f = [d.opened, d.blocking, d.modal, d.background, d.mm(b.opts[c].position), d.mm(b.opts[c].zposition)];
                b.opts.extensions && f.push(b.opts.extensions), g.$html.removeClass(f.join(" ")), g.$page.each(function () {
                    a(this).attr("style", a(this).data(e.style))
                }), b.vars.opened = !1, b.trigger("closed")
            }, this.conf.transitionDuration), g.$html.removeClass(d.opening), this.trigger("close"), this.trigger("closing")
        }
    }, a[b].prototype.closeAllOthers = function () {
        g.$allMenus.not(this.$menu).each(function () {
            var c = a(this).data(b);
            c && c.close && c.close()
        })
    }, a[b].prototype.setPage = function (b) {
        var e = this, f = this.conf[c];
        b && b.length || (b = g.$body.find(f.pageSelector), f.noPageSelector.length && (b = b.not(f.noPageSelector.join(", "))), b.length > 1 && f.wrapPageIfNeeded && (b = b.wrapAll("<" + this.conf[c].pageNodetype + " />").parent())), b.each(function () {
            a(this).attr("id", a(this).attr("id") || e.__getUniqueId())
        }), b.addClass(d.page + " " + d.slideout), g.$page = b, this.trigger("setPage", b)
    }, a[b].prototype["_initWindow_" + c] = function () {
        g.$wndw.off(f.keydown + "-" + c).on(f.keydown + "-" + c, function (a) {
            if (g.$html.hasClass(d.opened) && 9 == a.keyCode)return a.preventDefault(), !1
        });
        var a = 0;
        g.$wndw.off(f.resize + "-" + c).on(f.resize + "-" + c, function (b, c) {
            if (1 == g.$page.length && (c || g.$html.hasClass(d.opened))) {
                var e = g.$wndw.height();
                (c || e != a) && (a = e, g.$page.css("minHeight", e))
            }
        })
    }, a[b].prototype._initBlocker = function () {
        var b = this;
        this.opts[c].blockUI && (g.$blck || (g.$blck = a('<div id="' + d.blocker + '" class="' + d.slideout + '" />')), g.$blck.appendTo(g.$body).off(f.touchstart + "-" + c + " " + f.touchmove + "-" + c).on(f.touchstart + "-" + c + " " + f.touchmove + "-" + c, function (a) {
            a.preventDefault(), a.stopPropagation(), g.$blck.trigger(f.mousedown + "-" + c)
        }).off(f.mousedown + "-" + c).on(f.mousedown + "-" + c, function (a) {
            a.preventDefault(), g.$html.hasClass(d.modal) || (b.closeAllOthers(), b.close())
        }))
    };
    var d, e, f, g
}(jQuery), function (a) {
    var b = "mmenu", c = "scrollBugFix";
    a[b].addons[c] = {
        setup: function () {
            var e = this, h = this.opts[c];
            if (this.conf[c], g = a[b].glbl, a[b].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof h && (h = {fix: h}), "object" != typeof h && (h = {}), h = this.opts[c] = a.extend(!0, {}, a[b].defaults[c], h), h.fix)) {
                var i = this.$menu.attr("id"), j = !1;
                this.bind("opening", function () {
                    this.$pnls.children("." + d.current).scrollTop(0)
                }), g.$docu.on(f.touchmove, function (a) {
                    e.vars.opened && a.preventDefault()
                }), g.$body.on(f.touchstart, "#" + i + "> ." + d.panels + "> ." + d.current, function (a) {
                    e.vars.opened && (j || (j = !0, 0 === a.currentTarget.scrollTop ? a.currentTarget.scrollTop = 1 : a.currentTarget.scrollHeight === a.currentTarget.scrollTop + a.currentTarget.offsetHeight && (a.currentTarget.scrollTop -= 1), j = !1))
                }).on(f.touchmove, "#" + i + "> ." + d.panels + "> ." + d.current, function (b) {
                    e.vars.opened && a(this)[0].scrollHeight > a(this).innerHeight() && b.stopPropagation()
                }), g.$wndw.on(f.orientationchange, function () {
                    e.$pnls.children("." + d.current).scrollTop(0).css({"-webkit-overflow-scrolling": "auto"}).css({"-webkit-overflow-scrolling": "touch"})
                })
            }
        }, add: function () {
            d = a[b]._c, e = a[b]._d, f = a[b]._e
        }, clickAnchor: function (a, b) {
        }
    }, a[b].defaults[c] = {fix: !0};
    var d, e, f, g
}(jQuery);


/*! socialShare */
!function (a) {
    a.fn.extend({
        socialShare: function (b) {
            function c() {
                if (window.getSelection)return window.getSelection();
                if (document.getSelection)return document.getSelection();
                var a = document.selection && document.selection.createRange();
                return !!a.text && a.text
            }

            function d(b, c, d) {
                var e = a(b);
                e.each(function (b) {
                    a(this).delay(b * c).fadeTo(c, d)
                })
            }

            function e() {
                for (var c = {
                    blogger: {
                        text: "Blogger",
                        className: "blogger",
                        url: "http://www.blogger.com/blog_this.pyra?t=&amp;u={u}&amp;n={t}",
                        da: ""
                    },
                    delicious: {
                        text: "Delicious",
                        className: "delicious",
                        url: "http://del.icio.us/post?url={u}&amp;title={t}",
                        da: ""
                    },
                    digg: {
                        text: "Digg",
                        className: "aDigg",
                        url: "http://digg.com/submit?phase=2&amp;url={u}&amp;title={t}",
                        da: ""
                    },
                    facebook: {
                        text: "Facebook",
                        className: "facebook",
                        url: "http://www.facebook.com/sharer.php?u={u}",
                        da: ""
                    },
                    friendfeed: {
                        text: "FriendFeed",
                        className: "friendFeed",
                        url: "http://friendfeed.com/share?url={u}&amp;title={t}",
                        da: ""
                    },
                    google: {
                        text: "Google+",
                        className: "googleplus",
                        url: "https://plus.google.com/share?url={u}",
                        da: ""
                    },
                    linkedin: {
                        text: "LinkedIn",
                        className: "linkedin",
                        url: "http://www.linkedin.com/shareArticle?mini=true&amp;url={u}&amp;title={t}&amp;ro=false&amp;summary=&amp;source=",
                        da: ""
                    },
                    myspace: {
                        text: "MySpace",
                        className: "myspace",
                        url: "http://www.myspace.com/Modules/PostTo/Pages/?u={u}&amp;t={t}",
                        da: ""
                    },
                    pinterest: {
                        text: "Pinterest",
                        className: "pinterest",
                        url: "http://pinterest.com/pin/create/button/?url={u}&amp;media={m}&amp;description={t}",
                        da: ""
                    },
                    vk: {
                        text: "VKontakte",
                        className: "vk",
                        url: "http://vk.com/share.php?url={u}&amp;title={t}&amp;image={m}",
                        da: ""
                    },
                    reddit: {
                        text: "Reddit",
                        className: "reddit",
                        url: "http://reddit.com/submit?url={u}&amp;title={t}",
                        da: ""
                    },
                    stumbleupon: {
                        text: "StumbleUpon",
                        className: "stumbleUpon",
                        url: "http://www.stumbleupon.com/submit?url={u}&amp;title={t}",
                        da: ""
                    },
                    tumblr: {
                        text: "Tumblr",
                        className: "tumblr",
                        url: "http://www.tumblr.com/share/link?url={u}&name={t}&description={t}",
                        da: ""
                    },
                    twitter: {
                        text: "Twitter",
                        className: "twitter",
                        url: "http://twitter.com/home?status={t}%20{u}",
                        da: ""
                    },
                    windows: {
                        text: "Windows",
                        className: "windows",
                        url: "http://profile.live.com/badge?url={u}",
                        da: ""
                    },
                    yahoo: {
                        text: "Yahoo",
                        className: "yahoo",
                        url: "http://bookmarks.yahoo.com/toolbar/savebm?opener=tb&amp;u={u}&amp;t={t}",
                        da: ""
                    },
                    whatsapp: {
                        text: "WhatsApp",
                        className: "whatsapp",
                        url: "whatsapp://send?text={u}",
                        da: "data-action='share/whatsapp/share'"
                    }
                }, d = b.social.split(","), e = "", f = 0; f <= d.length - 1; f++)c[d[f]].url = c[d[f]].url.replace("{t}", encodeURIComponent(b.title)).replace("{u}", encodeURI(b.shareUrl)).replace("{d}", encodeURIComponent(b.description)).replace("{m}", encodeURI(b.mediaUrl)), e += '<li class="' + c[d[f]].className + '"><a href="' + c[d[f]].url + '" target="_blank" ' + c[d[f]].da + "></a><span>" + c[d[f]].text + "</span></li>";
                a("body").append(k + e + l)
            }

            function f(b) {
                b.blur && a("body").children().removeClass("blurred"), a(".arthrefSocialShare").find(".overlay").removeClass("active"), a(".arthrefSocialShare").find("ul").removeClass("active"), setTimeout(function () {
                    a(".arthrefSocialShare").find(".overlay").css("display", "none"), a(".arthrefSocialShare").remove()
                }, 300)
            }

            var g = {
                social: "",
                title: document.title,
                shareUrl: window.location.href,
                description: a('meta[name="description"]').attr("content"),
                mediaUrl: a(".social-sharing").attr("data-shareimg"),
                animation: "launchpad",
                chainAnimationSpeed: 100,
                whenSelect: !1,
                selectContainer: "body",
                blur: !1
            };
            if (a("#page-wrap").hasClass("mc-dark"))var h = "sdark"; else var h = "";
            var b = a.extend(!0, g, b), i = a(".box-share-master-container").attr("data-name"), j = a(".social-sharing").attr("data-name"), k = '<div class="arthref arthrefSocialShare ' + h + '"><div class="overlay ' + b.animation + '"><div class="icon-container"><div class="centered"><div class="share-title"><h4>' + i + "</h4><h1>" + j + '</h1></div><ul class="social-icons">', l = "</ul></div></div></div></div>";
            return this.each(function () {
                var g = b, h = a(this);
                g.whenSelect && a(g.selectContainer).mouseup(function (a) {
                    var d = c();
                    d && (d = new String(d).replace(/^\s+|\s+$/g, "")) && (b.title = d)
                }), h.click(function () {
                    e(), g.blur && (a(".arthrefSocialShare").find(".overlay").addClass("opaque"), a("body").children().not(".arthref, script").addClass("blurred")), a(".arthrefSocialShare").find(".overlay").css("display", "block"), setTimeout(function () {
                        a(".arthrefSocialShare").find(".overlay").addClass("active"), a(".arthrefSocialShare").find("ul").addClass("active"), "chain" == g.animation && d(a(".arthrefSocialShare").find("li"), g.chainAnimationSpeed, "1")
                    }, 100)
                }), a(document).on("click touchstart", ".arthrefSocialShare .overlay", function (a) {
                    f(g)
                }), a(document).on("keydown", function (a) {
                    27 == a.keyCode && f(g)
                }), a(document).on("click touchstart", ".arthrefSocialShare li", function (a) {
                    a.stopPropagation()
                })
            })
        }
    })
}(jQuery);

/*! Swiper 3.4.1 */
!function () {
    "use strict";
    function a(a) {
        a.fn.swiper = function (b) {
            var d;
            return a(this).each(function () {
                var a = new c(this, b);
                d || (d = a)
            }), d
        }
    }

    var b, c = function (a, e) {
        function f(a) {
            return Math.floor(a)
        }

        function g() {
            var a = w.params.autoplay, b = w.slides.eq(w.activeIndex);
            b.attr("data-swiper-autoplay") && (a = b.attr("data-swiper-autoplay") || w.params.autoplay), w.autoplayTimeoutId = setTimeout(function () {
                w.params.loop ? (w.fixLoop(), w._slideNext(), w.emit("onAutoplay", w)) : w.isEnd ? e.autoplayStopOnLast ? w.stopAutoplay() : (w._slideTo(0), w.emit("onAutoplay", w)) : (w._slideNext(), w.emit("onAutoplay", w))
            }, a)
        }

        function h(a, c) {
            var d = b(a.target);
            if (!d.is(c))if ("string" == typeof c) d = d.parents(c); else if (c.nodeType) {
                var e;
                return d.parents().each(function (a, b) {
                    b === c && (e = c)
                }), e ? c : void 0
            }
            if (0 !== d.length)return d[0]
        }

        function i(a, b) {
            b = b || {};
            var c = window.MutationObserver || window.WebkitMutationObserver, d = new c(function (a) {
                a.forEach(function (a) {
                    w.onResize(!0), w.emit("onObserverUpdate", w, a)
                })
            });
            d.observe(a, {
                attributes: "undefined" == typeof b.attributes || b.attributes,
                childList: "undefined" == typeof b.childList || b.childList,
                characterData: "undefined" == typeof b.characterData || b.characterData
            }), w.observers.push(d)
        }

        function j(a) {
            a.originalEvent && (a = a.originalEvent);
            var b = a.keyCode || a.charCode;
            if (!w.params.allowSwipeToNext && (w.isHorizontal() && 39 === b || !w.isHorizontal() && 40 === b))return !1;
            if (!w.params.allowSwipeToPrev && (w.isHorizontal() && 37 === b || !w.isHorizontal() && 38 === b))return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === b || 39 === b || 38 === b || 40 === b) {
                    var c = !1;
                    if (w.container.parents("." + w.params.slideClass).length > 0 && 0 === w.container.parents("." + w.params.slideActiveClass).length)return;
                    var d = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }, e = window.innerWidth, f = window.innerHeight, g = w.container.offset();
                    w.rtl && (g.left = g.left - w.container[0].scrollLeft);
                    for (var h = [[g.left, g.top], [g.left + w.width, g.top], [g.left, g.top + w.height], [g.left + w.width, g.top + w.height]], i = 0; i < h.length; i++) {
                        var j = h[i];
                        j[0] >= d.left && j[0] <= d.left + e && j[1] >= d.top && j[1] <= d.top + f && (c = !0)
                    }
                    if (!c)return
                }
                w.isHorizontal() ? (37 !== b && 39 !== b || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === b && !w.rtl || 37 === b && w.rtl) && w.slideNext(), (37 === b && !w.rtl || 39 === b && w.rtl) && w.slidePrev()) : (38 !== b && 40 !== b || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && w.slideNext(), 38 === b && w.slidePrev())
            }
        }

        function k() {
            var a = "onwheel", b = a in document;
            if (!b) {
                var c = document.createElement("div");
                c.setAttribute(a, "return;"), b = "function" == typeof c[a]
            }
            return !b && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (b = document.implementation.hasFeature("Events.wheel", "3.0")), b
        }

        function l(a) {
            a.originalEvent && (a = a.originalEvent);
            var b = 0, c = w.rtl ? -1 : 1, d = m(a);
            if (w.params.mousewheelForceToAxis)if (w.isHorizontal()) {
                if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY)))return;
                b = d.pixelX * c
            } else {
                if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX)))return;
                b = d.pixelY
            } else b = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * c : -d.pixelY;
            if (0 !== b) {
                if (w.params.mousewheelInvert && (b = -b), w.params.freeMode) {
                    var e = w.getWrapperTranslate() + b * w.params.mousewheelSensitivity, f = w.isBeginning, g = w.isEnd;
                    if (e >= w.minTranslate() && (e = w.minTranslate()), e <= w.maxTranslate() && (e = w.maxTranslate()), w.setWrapperTransition(0), w.setWrapperTranslate(e), w.updateProgress(), w.updateActiveIndex(), (!f && w.isBeginning || !g && w.isEnd) && w.updateClasses(), w.params.freeModeSticky ? (clearTimeout(w.mousewheel.timeout), w.mousewheel.timeout = setTimeout(function () {
                            w.slideReset()
                        }, 300)) : w.params.lazyLoading && w.lazy && w.lazy.load(), w.emit("onScroll", w, a), w.params.autoplay && w.params.autoplayDisableOnInteraction && w.stopAutoplay(), 0 === e || e === w.maxTranslate())return
                } else {
                    if ((new window.Date).getTime() - w.mousewheel.lastScrollTime > 60)if (b < 0)if (w.isEnd && !w.params.loop || w.animating) {
                        if (w.params.mousewheelReleaseOnEdges)return !0
                    } else w.slideNext(), w.emit("onScroll", w, a); else if (w.isBeginning && !w.params.loop || w.animating) {
                        if (w.params.mousewheelReleaseOnEdges)return !0
                    } else w.slidePrev(), w.emit("onScroll", w, a);
                    w.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
            }
        }

        function m(a) {
            var b = 10, c = 40, d = 800, e = 0, f = 0, g = 0, h = 0;
            return "detail" in a && (f = a.detail), "wheelDelta" in a && (f = -a.wheelDelta / 120), "wheelDeltaY" in a && (f = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (e = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (e = f, f = 0), g = e * b, h = f * b, "deltaY" in a && (h = a.deltaY), "deltaX" in a && (g = a.deltaX), (g || h) && a.deltaMode && (1 === a.deltaMode ? (g *= c, h *= c) : (g *= d, h *= d)), g && !e && (e = g < 1 ? -1 : 1), h && !f && (f = h < 1 ? -1 : 1), {
                spinX: e,
                spinY: f,
                pixelX: g,
                pixelY: h
            }
        }

        function n(a, c) {
            a = b(a);
            var d, e, f, g = w.rtl ? -1 : 1;
            d = a.attr("data-swiper-parallax") || "0", e = a.attr("data-swiper-parallax-x"), f = a.attr("data-swiper-parallax-y"), e || f ? (e = e || "0", f = f || "0") : w.isHorizontal() ? (e = d, f = "0") : (f = d, e = "0"), e = e.indexOf("%") >= 0 ? parseInt(e, 10) * c * g + "%" : e * c * g + "px", f = f.indexOf("%") >= 0 ? parseInt(f, 10) * c + "%" : f * c + "px", a.transform("translate3d(" + e + ", " + f + ",0px)")
        }

        function o(a) {
            return 0 !== a.indexOf("on") && (a = a[0] !== a[0].toUpperCase() ? "on" + a[0].toUpperCase() + a.substring(1) : "on" + a), a
        }

        if (!(this instanceof c))return new c(a, e);
        var p = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0},
            flip: {slideShadows: !0, limitRotation: !0},
            cube: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94},
            fade: {crossFade: !1},
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }, q = e && e.virtualTranslate;
        e = e || {};
        var r = {};
        for (var s in e)if ("object" != typeof e[s] || null === e[s] || e[s].nodeType || e[s] === window || e[s] === document || "undefined" != typeof d && e[s] instanceof d || "undefined" != typeof jQuery && e[s] instanceof jQuery) r[s] = e[s]; else {
            r[s] = {};
            for (var t in e[s])r[s][t] = e[s][t]
        }
        for (var u in p)if ("undefined" == typeof e[u]) e[u] = p[u]; else if ("object" == typeof e[u])for (var v in p[u])"undefined" == typeof e[u][v] && (e[u][v] = p[u][v]);
        var w = this;
        if (w.params = e, w.originalParams = r, w.classNames = [], "undefined" != typeof b && "undefined" != typeof d && (b = d), ("undefined" != typeof b || (b = "undefined" == typeof d ? window.Dom7 || window.Zepto || window.jQuery : d)) && (w.$ = b, w.currentBreakpoint = void 0, w.getActiveBreakpoint = function () {
                if (!w.params.breakpoints)return !1;
                var a, b = !1, c = [];
                for (a in w.params.breakpoints)w.params.breakpoints.hasOwnProperty(a) && c.push(a);
                c.sort(function (a, b) {
                    return parseInt(a, 10) > parseInt(b, 10)
                });
                for (var d = 0; d < c.length; d++)a = c[d], a >= window.innerWidth && !b && (b = a);
                return b || "max"
            }, w.setBreakpoint = function () {
                var a = w.getActiveBreakpoint();
                if (a && w.currentBreakpoint !== a) {
                    var b = a in w.params.breakpoints ? w.params.breakpoints[a] : w.originalParams, c = w.params.loop && b.slidesPerView !== w.params.slidesPerView;
                    for (var d in b)w.params[d] = b[d];
                    w.currentBreakpoint = a, c && w.destroyLoop && w.reLoop(!0)
                }
            }, w.params.breakpoints && w.setBreakpoint(), w.container = b(a), 0 !== w.container.length)) {
            if (w.container.length > 1) {
                var x = [];
                return w.container.each(function () {
                    x.push(new c(this, e))
                }), x
            }
            w.container[0].swiper = w, w.container.data("swiper", w), w.classNames.push(w.params.containerModifierClass + w.params.direction), w.params.freeMode && w.classNames.push(w.params.containerModifierClass + "free-mode"), w.support.flexbox || (w.classNames.push(w.params.containerModifierClass + "no-flexbox"), w.params.slidesPerColumn = 1), w.params.autoHeight && w.classNames.push(w.params.containerModifierClass + "autoheight"), (w.params.parallax || w.params.watchSlidesVisibility) && (w.params.watchSlidesProgress = !0), w.params.touchReleaseOnEdges && (w.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(w.params.effect) >= 0 && (w.support.transforms3d ? (w.params.watchSlidesProgress = !0, w.classNames.push(w.params.containerModifierClass + "3d")) : w.params.effect = "slide"), "slide" !== w.params.effect && w.classNames.push(w.params.containerModifierClass + w.params.effect), "cube" === w.params.effect && (w.params.resistanceRatio = 0, w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.centeredSlides = !1, w.params.spaceBetween = 0, w.params.virtualTranslate = !0, w.params.setWrapperSize = !1), "fade" !== w.params.effect && "flip" !== w.params.effect || (w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.watchSlidesProgress = !0, w.params.spaceBetween = 0, w.params.setWrapperSize = !1, "undefined" == typeof q && (w.params.virtualTranslate = !0)), w.params.grabCursor && w.support.touch && (w.params.grabCursor = !1), w.wrapper = w.container.children("." + w.params.wrapperClass), w.params.pagination && (w.paginationContainer = b(w.params.pagination), w.params.uniqueNavElements && "string" == typeof w.params.pagination && w.paginationContainer.length > 1 && 1 === w.container.find(w.params.pagination).length && (w.paginationContainer = w.container.find(w.params.pagination)), "bullets" === w.params.paginationType && w.params.paginationClickable ? w.paginationContainer.addClass(w.params.paginationModifierClass + "clickable") : w.params.paginationClickable = !1, w.paginationContainer.addClass(w.params.paginationModifierClass + w.params.paginationType)), (w.params.nextButton || w.params.prevButton) && (w.params.nextButton && (w.nextButton = b(w.params.nextButton), w.params.uniqueNavElements && "string" == typeof w.params.nextButton && w.nextButton.length > 1 && 1 === w.container.find(w.params.nextButton).length && (w.nextButton = w.container.find(w.params.nextButton))), w.params.prevButton && (w.prevButton = b(w.params.prevButton), w.params.uniqueNavElements && "string" == typeof w.params.prevButton && w.prevButton.length > 1 && 1 === w.container.find(w.params.prevButton).length && (w.prevButton = w.container.find(w.params.prevButton)))), w.isHorizontal = function () {
                return "horizontal" === w.params.direction
            }, w.rtl = w.isHorizontal() && ("rtl" === w.container[0].dir.toLowerCase() || "rtl" === w.container.css("direction")), w.rtl && w.classNames.push(w.params.containerModifierClass + "rtl"), w.rtl && (w.wrongRTL = "-webkit-box" === w.wrapper.css("display")), w.params.slidesPerColumn > 1 && w.classNames.push(w.params.containerModifierClass + "multirow"), w.device.android && w.classNames.push(w.params.containerModifierClass + "android"), w.container.addClass(w.classNames.join(" ")), w.translate = 0, w.progress = 0, w.velocity = 0, w.lockSwipeToNext = function () {
                w.params.allowSwipeToNext = !1, w.params.allowSwipeToPrev === !1 && w.params.grabCursor && w.unsetGrabCursor()
            }, w.lockSwipeToPrev = function () {
                w.params.allowSwipeToPrev = !1, w.params.allowSwipeToNext === !1 && w.params.grabCursor && w.unsetGrabCursor()
            }, w.lockSwipes = function () {
                w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !1, w.params.grabCursor && w.unsetGrabCursor()
            }, w.unlockSwipeToNext = function () {
                w.params.allowSwipeToNext = !0, w.params.allowSwipeToPrev === !0 && w.params.grabCursor && w.setGrabCursor()
            }, w.unlockSwipeToPrev = function () {
                w.params.allowSwipeToPrev = !0, w.params.allowSwipeToNext === !0 && w.params.grabCursor && w.setGrabCursor()
            }, w.unlockSwipes = function () {
                w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !0, w.params.grabCursor && w.setGrabCursor()
            }, w.setGrabCursor = function (a) {
                w.container[0].style.cursor = "move", w.container[0].style.cursor = a ? "-webkit-grabbing" : "-webkit-grab", w.container[0].style.cursor = a ? "-moz-grabbin" : "-moz-grab", w.container[0].style.cursor = a ? "grabbing" : "grab"
            }, w.unsetGrabCursor = function () {
                w.container[0].style.cursor = ""
            }, w.params.grabCursor && w.setGrabCursor(), w.imagesToLoad = [], w.imagesLoaded = 0, w.loadImage = function (a, b, c, d, e, f) {
                function g() {
                    f && f()
                }

                var h;
                a.complete && e ? g() : b ? (h = new window.Image, h.onload = g, h.onerror = g, d && (h.sizes = d), c && (h.srcset = c), b && (h.src = b)) : g()
            }, w.preloadImages = function () {
                function a() {
                    "undefined" != typeof w && null !== w && w && (void 0 !== w.imagesLoaded && w.imagesLoaded++, w.imagesLoaded === w.imagesToLoad.length && (w.params.updateOnImagesReady && w.update(), w.emit("onImagesReady", w)))
                }

                w.imagesToLoad = w.container.find("img");
                for (var b = 0; b < w.imagesToLoad.length; b++)w.loadImage(w.imagesToLoad[b], w.imagesToLoad[b].currentSrc || w.imagesToLoad[b].getAttribute("src"), w.imagesToLoad[b].srcset || w.imagesToLoad[b].getAttribute("srcset"), w.imagesToLoad[b].sizes || w.imagesToLoad[b].getAttribute("sizes"), !0, a)
            }, w.autoplayTimeoutId = void 0, w.autoplaying = !1, w.autoplayPaused = !1, w.startAutoplay = function () {
                return "undefined" == typeof w.autoplayTimeoutId && !!w.params.autoplay && !w.autoplaying && (w.autoplaying = !0, w.emit("onAutoplayStart", w), void g())
            }, w.stopAutoplay = function (a) {
                w.autoplayTimeoutId && (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), w.autoplaying = !1, w.autoplayTimeoutId = void 0, w.emit("onAutoplayStop", w))
            }, w.pauseAutoplay = function (a) {
                w.autoplayPaused || (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), w.autoplayPaused = !0, 0 === a ? (w.autoplayPaused = !1, g()) : w.wrapper.transitionEnd(function () {
                    w && (w.autoplayPaused = !1, w.autoplaying ? g() : w.stopAutoplay())
                }))
            }, w.minTranslate = function () {
                return -w.snapGrid[0]
            }, w.maxTranslate = function () {
                return -w.snapGrid[w.snapGrid.length - 1]
            }, w.updateAutoHeight = function () {
                var a, b = [], c = 0;
                if ("auto" !== w.params.slidesPerView && w.params.slidesPerView > 1)for (a = 0; a < Math.ceil(w.params.slidesPerView); a++) {
                    var d = w.activeIndex + a;
                    if (d > w.slides.length)break;
                    b.push(w.slides.eq(d)[0])
                } else b.push(w.slides.eq(w.activeIndex)[0]);
                for (a = 0; a < b.length; a++)if ("undefined" != typeof b[a]) {
                    var e = b[a].offsetHeight;
                    c = e > c ? e : c
                }
                c && w.wrapper.css("height", c + "px")
            }, w.updateContainerSize = function () {
                var a, b;
                a = "undefined" != typeof w.params.width ? w.params.width : w.container[0].clientWidth, b = "undefined" != typeof w.params.height ? w.params.height : w.container[0].clientHeight, 0 === a && w.isHorizontal() || 0 === b && !w.isHorizontal() || (a = a - parseInt(w.container.css("padding-left"), 10) - parseInt(w.container.css("padding-right"), 10), b = b - parseInt(w.container.css("padding-top"), 10) - parseInt(w.container.css("padding-bottom"), 10), w.width = a, w.height = b, w.size = w.isHorizontal() ? w.width : w.height)
            }, w.updateSlidesSize = function () {
                w.slides = w.wrapper.children("." + w.params.slideClass), w.snapGrid = [], w.slidesGrid = [], w.slidesSizesGrid = [];
                var a, b = w.params.spaceBetween, c = -w.params.slidesOffsetBefore, d = 0, e = 0;
                if ("undefined" != typeof w.size) {
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * w.size), w.virtualSize = -b, w.rtl ? w.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : w.slides.css({marginRight: "", marginBottom: ""});
                    var g;
                    w.params.slidesPerColumn > 1 && (g = Math.floor(w.slides.length / w.params.slidesPerColumn) === w.slides.length / w.params.slidesPerColumn ? w.slides.length : Math.ceil(w.slides.length / w.params.slidesPerColumn) * w.params.slidesPerColumn, "auto" !== w.params.slidesPerView && "row" === w.params.slidesPerColumnFill && (g = Math.max(g, w.params.slidesPerView * w.params.slidesPerColumn)));
                    var h, i = w.params.slidesPerColumn, j = g / i, k = j - (w.params.slidesPerColumn * j - w.slides.length);
                    for (a = 0; a < w.slides.length; a++) {
                        h = 0;
                        var l = w.slides.eq(a);
                        if (w.params.slidesPerColumn > 1) {
                            var m, n, o;
                            "column" === w.params.slidesPerColumnFill ? (n = Math.floor(a / i), o = a - n * i, (n > k || n === k && o === i - 1) && ++o >= i && (o = 0, n++), m = n + o * g / i, l.css({
                                "-webkit-box-ordinal-group": m,
                                "-moz-box-ordinal-group": m,
                                "-ms-flex-order": m,
                                "-webkit-order": m,
                                order: m
                            })) : (o = Math.floor(a / j), n = a - o * j), l.css("margin-" + (w.isHorizontal() ? "top" : "left"), 0 !== o && w.params.spaceBetween && w.params.spaceBetween + "px").attr("data-swiper-column", n).attr("data-swiper-row", o)
                        }
                        "none" !== l.css("display") && ("auto" === w.params.slidesPerView ? (h = w.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0), w.params.roundLengths && (h = f(h))) : (h = (w.size - (w.params.slidesPerView - 1) * b) / w.params.slidesPerView, w.params.roundLengths && (h = f(h)), w.isHorizontal() ? w.slides[a].style.width = h + "px" : w.slides[a].style.height = h + "px"), w.slides[a].swiperSlideSize = h, w.slidesSizesGrid.push(h), w.params.centeredSlides ? (c = c + h / 2 + d / 2 + b, 0 === a && (c = c - w.size / 2 - b), Math.abs(c) < .001 && (c = 0), e % w.params.slidesPerGroup === 0 && w.snapGrid.push(c), w.slidesGrid.push(c)) : (e % w.params.slidesPerGroup === 0 && w.snapGrid.push(c), w.slidesGrid.push(c), c = c + h + b), w.virtualSize += h + b, d = h, e++)
                    }
                    w.virtualSize = Math.max(w.virtualSize, w.size) + w.params.slidesOffsetAfter;
                    var p;
                    if (w.rtl && w.wrongRTL && ("slide" === w.params.effect || "coverflow" === w.params.effect) && w.wrapper.css({width: w.virtualSize + w.params.spaceBetween + "px"}), w.support.flexbox && !w.params.setWrapperSize || (w.isHorizontal() ? w.wrapper.css({width: w.virtualSize + w.params.spaceBetween + "px"}) : w.wrapper.css({height: w.virtualSize + w.params.spaceBetween + "px"})), w.params.slidesPerColumn > 1 && (w.virtualSize = (h + w.params.spaceBetween) * g, w.virtualSize = Math.ceil(w.virtualSize / w.params.slidesPerColumn) - w.params.spaceBetween, w.isHorizontal() ? w.wrapper.css({width: w.virtualSize + w.params.spaceBetween + "px"}) : w.wrapper.css({height: w.virtualSize + w.params.spaceBetween + "px"}), w.params.centeredSlides)) {
                        for (p = [], a = 0; a < w.snapGrid.length; a++)w.snapGrid[a] < w.virtualSize + w.snapGrid[0] && p.push(w.snapGrid[a]);
                        w.snapGrid = p
                    }
                    if (!w.params.centeredSlides) {
                        for (p = [], a = 0; a < w.snapGrid.length; a++)w.snapGrid[a] <= w.virtualSize - w.size && p.push(w.snapGrid[a]);
                        w.snapGrid = p, Math.floor(w.virtualSize - w.size) - Math.floor(w.snapGrid[w.snapGrid.length - 1]) > 1 && w.snapGrid.push(w.virtualSize - w.size)
                    }
                    0 === w.snapGrid.length && (w.snapGrid = [0]), 0 !== w.params.spaceBetween && (w.isHorizontal() ? w.rtl ? w.slides.css({marginLeft: b + "px"}) : w.slides.css({marginRight: b + "px"}) : w.slides.css({marginBottom: b + "px"})), w.params.watchSlidesProgress && w.updateSlidesOffset()
                }
            }, w.updateSlidesOffset = function () {
                for (var a = 0; a < w.slides.length; a++)w.slides[a].swiperSlideOffset = w.isHorizontal() ? w.slides[a].offsetLeft : w.slides[a].offsetTop
            }, w.currentSlidesPerView = function () {
                var a, b, c = 1;
                if (w.params.centeredSlides) {
                    var d, e = w.slides[w.activeIndex].swiperSlideSize;
                    for (a = w.activeIndex + 1; a < w.slides.length; a++)w.slides[a] && !d && (e += w.slides[a].swiperSlideSize, c++, e > w.size && (d = !0));
                    for (b = w.activeIndex - 1; b >= 0; b--)w.slides[b] && !d && (e += w.slides[b].swiperSlideSize, c++, e > w.size && (d = !0))
                } else for (a = w.activeIndex + 1; a < w.slides.length; a++)w.slidesGrid[a] - w.slidesGrid[w.activeIndex] < w.size && c++;
                return c
            }, w.updateSlidesProgress = function (a) {
                if ("undefined" == typeof a && (a = w.translate || 0), 0 !== w.slides.length) {
                    "undefined" == typeof w.slides[0].swiperSlideOffset && w.updateSlidesOffset();
                    var b = -a;
                    w.rtl && (b = a), w.slides.removeClass(w.params.slideVisibleClass);
                    for (var c = 0; c < w.slides.length; c++) {
                        var d = w.slides[c], e = (b + (w.params.centeredSlides ? w.minTranslate() : 0) - d.swiperSlideOffset) / (d.swiperSlideSize + w.params.spaceBetween);
                        if (w.params.watchSlidesVisibility) {
                            var f = -(b - d.swiperSlideOffset), g = f + w.slidesSizesGrid[c], h = f >= 0 && f < w.size || g > 0 && g <= w.size || f <= 0 && g >= w.size;
                            h && w.slides.eq(c).addClass(w.params.slideVisibleClass)
                        }
                        d.progress = w.rtl ? -e : e
                    }
                }
            }, w.updateProgress = function (a) {
                "undefined" == typeof a && (a = w.translate || 0);
                var b = w.maxTranslate() - w.minTranslate(), c = w.isBeginning, d = w.isEnd;
                0 === b ? (w.progress = 0, w.isBeginning = w.isEnd = !0) : (w.progress = (a - w.minTranslate()) / b, w.isBeginning = w.progress <= 0, w.isEnd = w.progress >= 1), w.isBeginning && !c && w.emit("onReachBeginning", w), w.isEnd && !d && w.emit("onReachEnd", w), w.params.watchSlidesProgress && w.updateSlidesProgress(a), w.emit("onProgress", w, w.progress)
            }, w.updateActiveIndex = function () {
                var a, b, c, d = w.rtl ? w.translate : -w.translate;
                for (b = 0; b < w.slidesGrid.length; b++)"undefined" != typeof w.slidesGrid[b + 1] ? d >= w.slidesGrid[b] && d < w.slidesGrid[b + 1] - (w.slidesGrid[b + 1] - w.slidesGrid[b]) / 2 ? a = b : d >= w.slidesGrid[b] && d < w.slidesGrid[b + 1] && (a = b + 1) : d >= w.slidesGrid[b] && (a = b);
                w.params.normalizeSlideIndex && (a < 0 || "undefined" == typeof a) && (a = 0), c = Math.floor(a / w.params.slidesPerGroup), c >= w.snapGrid.length && (c = w.snapGrid.length - 1), a !== w.activeIndex && (w.snapIndex = c, w.previousIndex = w.activeIndex, w.activeIndex = a, w.updateClasses(), w.updateRealIndex())
            }, w.updateRealIndex = function () {
                w.realIndex = parseInt(w.slides.eq(w.activeIndex).attr("data-swiper-slide-index") || w.activeIndex, 10)
            }, w.updateClasses = function () {
                w.slides.removeClass(w.params.slideActiveClass + " " + w.params.slideNextClass + " " + w.params.slidePrevClass + " " + w.params.slideDuplicateActiveClass + " " + w.params.slideDuplicateNextClass + " " + w.params.slideDuplicatePrevClass);
                var a = w.slides.eq(w.activeIndex);
                a.addClass(w.params.slideActiveClass), e.loop && (a.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass));
                var c = a.next("." + w.params.slideClass).addClass(w.params.slideNextClass);
                w.params.loop && 0 === c.length && (c = w.slides.eq(0), c.addClass(w.params.slideNextClass));
                var d = a.prev("." + w.params.slideClass).addClass(w.params.slidePrevClass);
                if (w.params.loop && 0 === d.length && (d = w.slides.eq(-1), d.addClass(w.params.slidePrevClass)), e.loop && (c.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicateNextClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicateNextClass), d.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicatePrevClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicatePrevClass)), w.paginationContainer && w.paginationContainer.length > 0) {
                    var f, g = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length;
                    if (w.params.loop ? (f = Math.ceil((w.activeIndex - w.loopedSlides) / w.params.slidesPerGroup), f > w.slides.length - 1 - 2 * w.loopedSlides && (f -= w.slides.length - 2 * w.loopedSlides), f > g - 1 && (f -= g), f < 0 && "bullets" !== w.params.paginationType && (f = g + f)) : f = "undefined" != typeof w.snapIndex ? w.snapIndex : w.activeIndex || 0, "bullets" === w.params.paginationType && w.bullets && w.bullets.length > 0 && (w.bullets.removeClass(w.params.bulletActiveClass), w.paginationContainer.length > 1 ? w.bullets.each(function () {
                            b(this).index() === f && b(this).addClass(w.params.bulletActiveClass)
                        }) : w.bullets.eq(f).addClass(w.params.bulletActiveClass)), "fraction" === w.params.paginationType && (w.paginationContainer.find("." + w.params.paginationCurrentClass).text(f + 1), w.paginationContainer.find("." + w.params.paginationTotalClass).text(g)), "progress" === w.params.paginationType) {
                        var h = (f + 1) / g, i = h, j = 1;
                        w.isHorizontal() || (j = h, i = 1), w.paginationContainer.find("." + w.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + i + ") scaleY(" + j + ")").transition(w.params.speed)
                    }
                    "custom" === w.params.paginationType && w.params.paginationCustomRender && (w.paginationContainer.html(w.params.paginationCustomRender(w, f + 1, g)), w.emit("onPaginationRendered", w, w.paginationContainer[0]))
                }
                w.params.loop || (w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.isBeginning ? (w.prevButton.addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(w.prevButton)) : (w.prevButton.removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(w.prevButton))), w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.isEnd ? (w.nextButton.addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(w.nextButton)) : (w.nextButton.removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(w.nextButton))))
            }, w.updatePagination = function () {
                if (w.params.pagination && w.paginationContainer && w.paginationContainer.length > 0) {
                    var a = "";
                    if ("bullets" === w.params.paginationType) {
                        for (var b = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length, c = 0; c < b; c++)a += w.params.paginationBulletRender ? w.params.paginationBulletRender(w, c, w.params.bulletClass) : "<" + w.params.paginationElement + ' class="' + w.params.bulletClass + '"></' + w.params.paginationElement + ">";
                        w.paginationContainer.html(a), w.bullets = w.paginationContainer.find("." + w.params.bulletClass), w.params.paginationClickable && w.params.a11y && w.a11y && w.a11y.initPagination()
                    }
                    "fraction" === w.params.paginationType && (a = w.params.paginationFractionRender ? w.params.paginationFractionRender(w, w.params.paginationCurrentClass, w.params.paginationTotalClass) : '<span class="' + w.params.paginationCurrentClass + '"></span> / <span class="' + w.params.paginationTotalClass + '"></span>', w.paginationContainer.html(a)), "progress" === w.params.paginationType && (a = w.params.paginationProgressRender ? w.params.paginationProgressRender(w, w.params.paginationProgressbarClass) : '<span class="' + w.params.paginationProgressbarClass + '"></span>', w.paginationContainer.html(a)), "custom" !== w.params.paginationType && w.emit("onPaginationRendered", w, w.paginationContainer[0])
                }
            }, w.update = function (a) {
                function b() {
                    w.rtl ? -w.translate : w.translate, d = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate()), w.setWrapperTranslate(d), w.updateActiveIndex(), w.updateClasses()
                }

                if (w)if (w.updateContainerSize(), w.updateSlidesSize(), w.updateProgress(), w.updatePagination(), w.updateClasses(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), a) {
                    var c, d;
                    w.controller && w.controller.spline && (w.controller.spline = void 0), w.params.freeMode ? (b(), w.params.autoHeight && w.updateAutoHeight()) : (c = ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0), c || b())
                } else w.params.autoHeight && w.updateAutoHeight()
            }, w.onResize = function (a) {
                w.params.breakpoints && w.setBreakpoint();
                var b = w.params.allowSwipeToPrev, c = w.params.allowSwipeToNext;
                w.params.allowSwipeToPrev = w.params.allowSwipeToNext = !0, w.updateContainerSize(), w.updateSlidesSize(), ("auto" === w.params.slidesPerView || w.params.freeMode || a) && w.updatePagination(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), w.controller && w.controller.spline && (w.controller.spline = void 0);
                var d = !1;
                if (w.params.freeMode) {
                    var e = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate());
                    w.setWrapperTranslate(e), w.updateActiveIndex(), w.updateClasses(), w.params.autoHeight && w.updateAutoHeight()
                } else w.updateClasses(), d = ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0);
                w.params.lazyLoading && !d && w.lazy && w.lazy.load(), w.params.allowSwipeToPrev = b, w.params.allowSwipeToNext = c
            }, w.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            }, window.navigator.pointerEnabled ? w.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (w.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }), w.touchEvents = {
                start: w.support.touch || !w.params.simulateTouch ? "touchstart" : w.touchEventsDesktop.start,
                move: w.support.touch || !w.params.simulateTouch ? "touchmove" : w.touchEventsDesktop.move,
                end: w.support.touch || !w.params.simulateTouch ? "touchend" : w.touchEventsDesktop.end
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === w.params.touchEventsTarget ? w.container : w.wrapper).addClass("swiper-wp8-" + w.params.direction), w.initEvents = function (a) {
                var b = a ? "off" : "on", c = a ? "removeEventListener" : "addEventListener", d = "container" === w.params.touchEventsTarget ? w.container[0] : w.wrapper[0], f = w.support.touch ? d : document, g = !!w.params.nested;
                if (w.browser.ie) d[c](w.touchEvents.start, w.onTouchStart, !1), f[c](w.touchEvents.move, w.onTouchMove, g), f[c](w.touchEvents.end, w.onTouchEnd, !1); else {
                    if (w.support.touch) {
                        var h = !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        d[c](w.touchEvents.start, w.onTouchStart, h), d[c](w.touchEvents.move, w.onTouchMove, g), d[c](w.touchEvents.end, w.onTouchEnd, h)
                    }
                    (e.simulateTouch && !w.device.ios && !w.device.android || e.simulateTouch && !w.support.touch && w.device.ios) && (d[c]("mousedown", w.onTouchStart, !1), document[c]("mousemove", w.onTouchMove, g), document[c]("mouseup", w.onTouchEnd, !1))
                }
                window[c]("resize", w.onResize), w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.nextButton[b]("click", w.onClickNext), w.params.a11y && w.a11y && w.nextButton[b]("keydown", w.a11y.onEnterKey)), w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.prevButton[b]("click", w.onClickPrev), w.params.a11y && w.a11y && w.prevButton[b]("keydown", w.a11y.onEnterKey)), w.params.pagination && w.params.paginationClickable && (w.paginationContainer[b]("click", "." + w.params.bulletClass, w.onClickIndex), w.params.a11y && w.a11y && w.paginationContainer[b]("keydown", "." + w.params.bulletClass, w.a11y.onEnterKey)), (w.params.preventClicks || w.params.preventClicksPropagation) && d[c]("click", w.preventClicks, !0)
            }, w.attachEvents = function () {
                w.initEvents()
            }, w.detachEvents = function () {
                w.initEvents(!0)
            }, w.allowClick = !0, w.preventClicks = function (a) {
                w.allowClick || (w.params.preventClicks && a.preventDefault(), w.params.preventClicksPropagation && w.animating && (a.stopPropagation(), a.stopImmediatePropagation()))
            }, w.onClickNext = function (a) {
                a.preventDefault(), w.isEnd && !w.params.loop || w.slideNext()
            }, w.onClickPrev = function (a) {
                a.preventDefault(), w.isBeginning && !w.params.loop || w.slidePrev()
            }, w.onClickIndex = function (a) {
                a.preventDefault();
                var c = b(this).index() * w.params.slidesPerGroup;
                w.params.loop && (c += w.loopedSlides), w.slideTo(c)
            }, w.updateClickedSlide = function (a) {
                var c = h(a, "." + w.params.slideClass), d = !1;
                if (c)for (var e = 0; e < w.slides.length; e++)w.slides[e] === c && (d = !0);
                if (!c || !d)return w.clickedSlide = void 0, void(w.clickedIndex = void 0);
                if (w.clickedSlide = c, w.clickedIndex = b(c).index(), w.params.slideToClickedSlide && void 0 !== w.clickedIndex && w.clickedIndex !== w.activeIndex) {
                    var f, g = w.clickedIndex, i = "auto" === w.params.slidesPerView ? w.currentSlidesPerView() : w.params.slidesPerView;
                    if (w.params.loop) {
                        if (w.animating)return;
                        f = parseInt(b(w.clickedSlide).attr("data-swiper-slide-index"), 10), w.params.centeredSlides ? g < w.loopedSlides - i / 2 || g > w.slides.length - w.loopedSlides + i / 2 ? (w.fixLoop(), g = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.' + w.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                            w.slideTo(g)
                        }, 0)) : w.slideTo(g) : g > w.slides.length - i ? (w.fixLoop(), g = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.' + w.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                            w.slideTo(g)
                        }, 0)) : w.slideTo(g)
                    } else w.slideTo(g)
                }
            };
            var y, z, A, B, C, D, E, F, G, H, I = "input, select, textarea, button, video", J = Date.now(), K = [];
            w.animating = !1, w.touches = {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0};
            var L, M;
            w.onTouchStart = function (a) {
                if (a.originalEvent && (a = a.originalEvent), L = "touchstart" === a.type, L || !("which" in a) || 3 !== a.which) {
                    if (w.params.noSwiping && h(a, "." + w.params.noSwipingClass))return void(w.allowClick = !0);
                    if (!w.params.swipeHandler || h(a, w.params.swipeHandler)) {
                        var c = w.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, d = w.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                        if (!(w.device.ios && w.params.iOSEdgeSwipeDetection && c <= w.params.iOSEdgeSwipeThreshold)) {
                            if (y = !0, z = !1, A = !0, C = void 0, M = void 0, w.touches.startX = c, w.touches.startY = d, B = Date.now(), w.allowClick = !0, w.updateContainerSize(), w.swipeDirection = void 0, w.params.threshold > 0 && (F = !1), "touchstart" !== a.type) {
                                var e = !0;
                                b(a.target).is(I) && (e = !1), document.activeElement && b(document.activeElement).is(I) && document.activeElement.blur(), e && a.preventDefault()
                            }
                            w.emit("onTouchStart", w, a)
                        }
                    }
                }
            }, w.onTouchMove = function (a) {
                if (a.originalEvent && (a = a.originalEvent), !L || "mousemove" !== a.type) {
                    if (a.preventedByNestedSwiper)return w.touches.startX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, void(w.touches.startY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY);
                    if (w.params.onlyExternal)return w.allowClick = !1, void(y && (w.touches.startX = w.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, w.touches.startY = w.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, B = Date.now()));
                    if (L && w.params.touchReleaseOnEdges && !w.params.loop)if (w.isHorizontal()) {
                        if (w.touches.currentX < w.touches.startX && w.translate <= w.maxTranslate() || w.touches.currentX > w.touches.startX && w.translate >= w.minTranslate())return
                    } else if (w.touches.currentY < w.touches.startY && w.translate <= w.maxTranslate() || w.touches.currentY > w.touches.startY && w.translate >= w.minTranslate())return;
                    if (L && document.activeElement && a.target === document.activeElement && b(a.target).is(I))return z = !0, void(w.allowClick = !1);
                    if (A && w.emit("onTouchMove", w, a), !(a.targetTouches && a.targetTouches.length > 1)) {
                        if (w.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, w.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, "undefined" == typeof C) {
                            var c;
                            w.isHorizontal() && w.touches.currentY === w.touches.startY || !w.isHorizontal() && w.touches.currentX === w.touches.startX ? C = !1 : (c = 180 * Math.atan2(Math.abs(w.touches.currentY - w.touches.startY), Math.abs(w.touches.currentX - w.touches.startX)) / Math.PI, C = w.isHorizontal() ? c > w.params.touchAngle : 90 - c > w.params.touchAngle)
                        }
                        if (C && w.emit("onTouchMoveOpposite", w, a), "undefined" == typeof M && w.browser.ieTouch && (w.touches.currentX === w.touches.startX && w.touches.currentY === w.touches.startY || (M = !0)), y) {
                            if (C)return void(y = !1);
                            if (M || !w.browser.ieTouch) {
                                w.allowClick = !1, w.emit("onSliderMove", w, a), a.preventDefault(), w.params.touchMoveStopPropagation && !w.params.nested && a.stopPropagation(), z || (e.loop && w.fixLoop(), E = w.getWrapperTranslate(), w.setWrapperTransition(0), w.animating && w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), w.params.autoplay && w.autoplaying && (w.params.autoplayDisableOnInteraction ? w.stopAutoplay() : w.pauseAutoplay()), H = !1, !w.params.grabCursor || w.params.allowSwipeToNext !== !0 && w.params.allowSwipeToPrev !== !0 || w.setGrabCursor(!0)), z = !0;
                                var d = w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY;
                                d *= w.params.touchRatio, w.rtl && (d = -d), w.swipeDirection = d > 0 ? "prev" : "next", D = d + E;
                                var f = !0;
                                if (d > 0 && D > w.minTranslate() ? (f = !1, w.params.resistance && (D = w.minTranslate() - 1 + Math.pow(-w.minTranslate() + E + d, w.params.resistanceRatio))) : d < 0 && D < w.maxTranslate() && (f = !1, w.params.resistance && (D = w.maxTranslate() + 1 - Math.pow(w.maxTranslate() - E - d, w.params.resistanceRatio))), f && (a.preventedByNestedSwiper = !0), !w.params.allowSwipeToNext && "next" === w.swipeDirection && D < E && (D = E), !w.params.allowSwipeToPrev && "prev" === w.swipeDirection && D > E && (D = E), w.params.threshold > 0) {
                                    if (!(Math.abs(d) > w.params.threshold || F))return void(D = E);
                                    if (!F)return F = !0, w.touches.startX = w.touches.currentX, w.touches.startY = w.touches.currentY, D = E, void(w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY)
                                }
                                w.params.followFinger && ((w.params.freeMode || w.params.watchSlidesProgress) && w.updateActiveIndex(), w.params.freeMode && (0 === K.length && K.push({
                                    position: w.touches[w.isHorizontal() ? "startX" : "startY"],
                                    time: B
                                }), K.push({
                                    position: w.touches[w.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })), w.updateProgress(D), w.setWrapperTranslate(D))
                            }
                        }
                    }
                }
            }, w.onTouchEnd = function (a) {
                if (a.originalEvent && (a = a.originalEvent), A && w.emit("onTouchEnd", w, a), A = !1, y) {
                    w.params.grabCursor && z && y && (w.params.allowSwipeToNext === !0 || w.params.allowSwipeToPrev === !0) && w.setGrabCursor(!1);
                    var c = Date.now(), d = c - B;
                    if (w.allowClick && (w.updateClickedSlide(a), w.emit("onTap", w, a), d < 300 && c - J > 300 && (G && clearTimeout(G), G = setTimeout(function () {
                            w && (w.params.paginationHide && w.paginationContainer.length > 0 && !b(a.target).hasClass(w.params.bulletClass) && w.paginationContainer.toggleClass(w.params.paginationHiddenClass), w.emit("onClick", w, a))
                        }, 300)), d < 300 && c - J < 300 && (G && clearTimeout(G), w.emit("onDoubleTap", w, a))), J = Date.now(), setTimeout(function () {
                            w && (w.allowClick = !0)
                        }, 0), !y || !z || !w.swipeDirection || 0 === w.touches.diff || D === E)return void(y = z = !1);
                    y = z = !1;
                    var e;
                    if (e = w.params.followFinger ? w.rtl ? w.translate : -w.translate : -D, w.params.freeMode) {
                        if (e < -w.minTranslate())return void w.slideTo(w.activeIndex);
                        if (e > -w.maxTranslate())return void(w.slides.length < w.snapGrid.length ? w.slideTo(w.snapGrid.length - 1) : w.slideTo(w.slides.length - 1));
                        if (w.params.freeModeMomentum) {
                            if (K.length > 1) {
                                var f = K.pop(), g = K.pop(), h = f.position - g.position, i = f.time - g.time;
                                w.velocity = h / i, w.velocity = w.velocity / 2, Math.abs(w.velocity) < w.params.freeModeMinimumVelocity && (w.velocity = 0), (i > 150 || (new window.Date).getTime() - f.time > 300) && (w.velocity = 0)
                            } else w.velocity = 0;
                            w.velocity = w.velocity * w.params.freeModeMomentumVelocityRatio, K.length = 0;
                            var j = 1e3 * w.params.freeModeMomentumRatio, k = w.velocity * j, l = w.translate + k;
                            w.rtl && (l = -l);
                            var m, n = !1, o = 20 * Math.abs(w.velocity) * w.params.freeModeMomentumBounceRatio;
                            if (l < w.maxTranslate()) w.params.freeModeMomentumBounce ? (l + w.maxTranslate() < -o && (l = w.maxTranslate() - o), m = w.maxTranslate(), n = !0, H = !0) : l = w.maxTranslate(); else if (l > w.minTranslate()) w.params.freeModeMomentumBounce ? (l - w.minTranslate() > o && (l = w.minTranslate() + o), m = w.minTranslate(), n = !0, H = !0) : l = w.minTranslate(); else if (w.params.freeModeSticky) {
                                var p, q = 0;
                                for (q = 0; q < w.snapGrid.length; q += 1)if (w.snapGrid[q] > -l) {
                                    p = q;
                                    break
                                }
                                l = Math.abs(w.snapGrid[p] - l) < Math.abs(w.snapGrid[p - 1] - l) || "next" === w.swipeDirection ? w.snapGrid[p] : w.snapGrid[p - 1], w.rtl || (l = -l)
                            }
                            if (0 !== w.velocity) j = w.rtl ? Math.abs((-l - w.translate) / w.velocity) : Math.abs((l - w.translate) / w.velocity); else if (w.params.freeModeSticky)return void w.slideReset();
                            w.params.freeModeMomentumBounce && n ? (w.updateProgress(m), w.setWrapperTransition(j), w.setWrapperTranslate(l), w.onTransitionStart(), w.animating = !0, w.wrapper.transitionEnd(function () {
                                w && H && (w.emit("onMomentumBounce", w), w.setWrapperTransition(w.params.speed), w.setWrapperTranslate(m), w.wrapper.transitionEnd(function () {
                                    w && w.onTransitionEnd()
                                }))
                            })) : w.velocity ? (w.updateProgress(l), w.setWrapperTransition(j), w.setWrapperTranslate(l), w.onTransitionStart(), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function () {
                                w && w.onTransitionEnd()
                            }))) : w.updateProgress(l), w.updateActiveIndex()
                        }
                        return void((!w.params.freeModeMomentum || d >= w.params.longSwipesMs) && (w.updateProgress(), w.updateActiveIndex()))
                    }
                    var r, s = 0, t = w.slidesSizesGrid[0];
                    for (r = 0; r < w.slidesGrid.length; r += w.params.slidesPerGroup)"undefined" != typeof w.slidesGrid[r + w.params.slidesPerGroup] ? e >= w.slidesGrid[r] && e < w.slidesGrid[r + w.params.slidesPerGroup] && (s = r, t = w.slidesGrid[r + w.params.slidesPerGroup] - w.slidesGrid[r]) : e >= w.slidesGrid[r] && (s = r, t = w.slidesGrid[w.slidesGrid.length - 1] - w.slidesGrid[w.slidesGrid.length - 2]);
                    var u = (e - w.slidesGrid[s]) / t;
                    if (d > w.params.longSwipesMs) {
                        if (!w.params.longSwipes)return void w.slideTo(w.activeIndex);
                        "next" === w.swipeDirection && (u >= w.params.longSwipesRatio ? w.slideTo(s + w.params.slidesPerGroup) : w.slideTo(s)), "prev" === w.swipeDirection && (u > 1 - w.params.longSwipesRatio ? w.slideTo(s + w.params.slidesPerGroup) : w.slideTo(s))
                    } else {
                        if (!w.params.shortSwipes)return void w.slideTo(w.activeIndex);
                        "next" === w.swipeDirection && w.slideTo(s + w.params.slidesPerGroup), "prev" === w.swipeDirection && w.slideTo(s)
                    }
                }
            }, w._slideTo = function (a, b) {
                return w.slideTo(a, b, !0, !0)
            }, w.slideTo = function (a, b, c, d) {
                "undefined" == typeof c && (c = !0), "undefined" == typeof a && (a = 0), a < 0 && (a = 0), w.snapIndex = Math.floor(a / w.params.slidesPerGroup), w.snapIndex >= w.snapGrid.length && (w.snapIndex = w.snapGrid.length - 1);
                var e = -w.snapGrid[w.snapIndex];
                if (w.params.autoplay && w.autoplaying && (d || !w.params.autoplayDisableOnInteraction ? w.pauseAutoplay(b) : w.stopAutoplay()), w.updateProgress(e), w.params.normalizeSlideIndex)for (var f = 0; f < w.slidesGrid.length; f++)-Math.floor(100 * e) >= Math.floor(100 * w.slidesGrid[f]) && (a = f);
                return !(!w.params.allowSwipeToNext && e < w.translate && e < w.minTranslate() || !w.params.allowSwipeToPrev && e > w.translate && e > w.maxTranslate() && (w.activeIndex || 0) !== a || ("undefined" == typeof b && (b = w.params.speed), w.previousIndex = w.activeIndex || 0, w.activeIndex = a, w.updateRealIndex(), w.rtl && -e === w.translate || !w.rtl && e === w.translate ? (w.params.autoHeight && w.updateAutoHeight(), w.updateClasses(), "slide" !== w.params.effect && w.setWrapperTranslate(e), 1) : (w.updateClasses(), w.onTransitionStart(c), 0 === b || w.browser.lteIE9 ? (w.setWrapperTranslate(e), w.setWrapperTransition(0), w.onTransitionEnd(c)) : (w.setWrapperTranslate(e), w.setWrapperTransition(b), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function () {
                    w && w.onTransitionEnd(c)
                }))), 0)))
            }, w.onTransitionStart = function (a) {
                "undefined" == typeof a && (a = !0), w.params.autoHeight && w.updateAutoHeight(), w.lazy && w.lazy.onTransitionStart(), a && (w.emit("onTransitionStart", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeStart", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextStart", w) : w.emit("onSlidePrevStart", w)))
            }, w.onTransitionEnd = function (a) {
                w.animating = !1, w.setWrapperTransition(0), "undefined" == typeof a && (a = !0), w.lazy && w.lazy.onTransitionEnd(), a && (w.emit("onTransitionEnd", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeEnd", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextEnd", w) : w.emit("onSlidePrevEnd", w))), w.params.history && w.history && w.history.setHistory(w.params.history, w.activeIndex), w.params.hashnav && w.hashnav && w.hashnav.setHash()
            }, w.slideNext = function (a, b, c) {
                return w.params.loop ? !w.animating && (w.fixLoop(), w.container[0].clientLeft, w.slideTo(w.activeIndex + w.params.slidesPerGroup, b, a, c)) : w.slideTo(w.activeIndex + w.params.slidesPerGroup, b, a, c)
            }, w._slideNext = function (a) {
                return w.slideNext(!0, a, !0)
            }, w.slidePrev = function (a, b, c) {
                return w.params.loop ? !w.animating && (w.fixLoop(), w.container[0].clientLeft, w.slideTo(w.activeIndex - 1, b, a, c)) : w.slideTo(w.activeIndex - 1, b, a, c)
            }, w._slidePrev = function (a) {
                return w.slidePrev(!0, a, !0)
            }, w.slideReset = function (a, b, c) {
                return w.slideTo(w.activeIndex, b, a)
            }, w.disableTouchControl = function () {
                return w.params.onlyExternal = !0, !0
            }, w.enableTouchControl = function () {
                return w.params.onlyExternal = !1, !0
            }, w.setWrapperTransition = function (a, b) {
                w.wrapper.transition(a), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTransition(a), w.params.parallax && w.parallax && w.parallax.setTransition(a), w.params.scrollbar && w.scrollbar && w.scrollbar.setTransition(a), w.params.control && w.controller && w.controller.setTransition(a, b), w.emit("onSetTransition", w, a)
            }, w.setWrapperTranslate = function (a, b, c) {
                var d = 0, e = 0, g = 0;
                w.isHorizontal() ? d = w.rtl ? -a : a : e = a, w.params.roundLengths && (d = f(d), e = f(e)), w.params.virtualTranslate || (w.support.transforms3d ? w.wrapper.transform("translate3d(" + d + "px, " + e + "px, " + g + "px)") : w.wrapper.transform("translate(" + d + "px, " + e + "px)")), w.translate = w.isHorizontal() ? d : e;
                var h, i = w.maxTranslate() - w.minTranslate();
                h = 0 === i ? 0 : (a - w.minTranslate()) / i, h !== w.progress && w.updateProgress(a), b && w.updateActiveIndex(), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTranslate(w.translate), w.params.parallax && w.parallax && w.parallax.setTranslate(w.translate), w.params.scrollbar && w.scrollbar && w.scrollbar.setTranslate(w.translate), w.params.control && w.controller && w.controller.setTranslate(w.translate, c), w.emit("onSetTranslate", w, w.translate)
            }, w.getTranslate = function (a, b) {
                var c, d, e, f;
                return "undefined" == typeof b && (b = "x"), w.params.virtualTranslate ? w.rtl ? -w.translate : w.translate : (e = window.getComputedStyle(a, null), window.WebKitCSSMatrix ? (d = e.transform || e.webkitTransform, d.split(",").length > 6 && (d = d.split(", ").map(function (a) {
                    return a.replace(",", ".")
                }).join(", ")), f = new window.WebKitCSSMatrix("none" === d ? "" : d)) : (f = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), c = f.toString().split(",")), "x" === b && (d = window.WebKitCSSMatrix ? f.m41 : 16 === c.length ? parseFloat(c[12]) : parseFloat(c[4])), "y" === b && (d = window.WebKitCSSMatrix ? f.m42 : 16 === c.length ? parseFloat(c[13]) : parseFloat(c[5])), w.rtl && d && (d = -d), d || 0)
            }, w.getWrapperTranslate = function (a) {
                return "undefined" == typeof a && (a = w.isHorizontal() ? "x" : "y"), w.getTranslate(w.wrapper[0], a)
            }, w.observers = [], w.initObservers = function () {
                if (w.params.observeParents)for (var a = w.container.parents(), b = 0; b < a.length; b++)i(a[b]);
                i(w.container[0], {childList: !1}), i(w.wrapper[0], {attributes: !1})
            }, w.disconnectObservers = function () {
                for (var a = 0; a < w.observers.length; a++)w.observers[a].disconnect();
                w.observers = []
            }, w.createLoop = function () {
                w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove();
                var a = w.wrapper.children("." + w.params.slideClass);
                "auto" !== w.params.slidesPerView || w.params.loopedSlides || (w.params.loopedSlides = a.length), w.loopedSlides = parseInt(w.params.loopedSlides || w.params.slidesPerView, 10), w.loopedSlides = w.loopedSlides + w.params.loopAdditionalSlides, w.loopedSlides > a.length && (w.loopedSlides = a.length);
                var c, d = [], e = [];
                for (a.each(function (c, f) {
                    var g = b(this);
                    c < w.loopedSlides && e.push(f), c < a.length && c >= a.length - w.loopedSlides && d.push(f), g.attr("data-swiper-slide-index", c)
                }), c = 0; c < e.length; c++)w.wrapper.append(b(e[c].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
                for (c = d.length - 1; c >= 0; c--)w.wrapper.prepend(b(d[c].cloneNode(!0)).addClass(w.params.slideDuplicateClass))
            }, w.destroyLoop = function () {
                w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove(), w.slides.removeAttr("data-swiper-slide-index")
            }, w.reLoop = function (a) {
                var b = w.activeIndex - w.loopedSlides;
                w.destroyLoop(), w.createLoop(), w.updateSlidesSize(), a && w.slideTo(b + w.loopedSlides, 0, !1)
            }, w.fixLoop = function () {
                var a;
                w.activeIndex < w.loopedSlides ? (a = w.slides.length - 3 * w.loopedSlides + w.activeIndex, a += w.loopedSlides, w.slideTo(a, 0, !1, !0)) : ("auto" === w.params.slidesPerView && w.activeIndex >= 2 * w.loopedSlides || w.activeIndex > w.slides.length - 2 * w.params.slidesPerView) && (a = -w.slides.length + w.activeIndex + w.loopedSlides, a += w.loopedSlides, w.slideTo(a, 0, !1, !0))
            }, w.appendSlide = function (a) {
                if (w.params.loop && w.destroyLoop(), "object" == typeof a && a.length)for (var b = 0; b < a.length; b++)a[b] && w.wrapper.append(a[b]); else w.wrapper.append(a);
                w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0)
            }, w.prependSlide = function (a) {
                w.params.loop && w.destroyLoop();
                var b = w.activeIndex + 1;
                if ("object" == typeof a && a.length) {
                    for (var c = 0; c < a.length; c++)a[c] && w.wrapper.prepend(a[c]);
                    b = w.activeIndex + a.length
                } else w.wrapper.prepend(a);
                w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0), w.slideTo(b, 0, !1)
            }, w.removeSlide = function (a) {
                w.params.loop && (w.destroyLoop(), w.slides = w.wrapper.children("." + w.params.slideClass));
                var b, c = w.activeIndex;
                if ("object" == typeof a && a.length) {
                    for (var d = 0; d < a.length; d++)b = a[d], w.slides[b] && w.slides.eq(b).remove(), b < c && c--;
                    c = Math.max(c, 0)
                } else b = a, w.slides[b] && w.slides.eq(b).remove(), b < c && c--, c = Math.max(c, 0);
                w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0), w.params.loop ? w.slideTo(c + w.loopedSlides, 0, !1) : w.slideTo(c, 0, !1)
            }, w.removeAllSlides = function () {
                for (var a = [], b = 0; b < w.slides.length; b++)a.push(b);
                w.removeSlide(a)
            }, w.effects = {
                fade: {
                    setTranslate: function () {
                        for (var a = 0; a < w.slides.length; a++) {
                            var b = w.slides.eq(a), c = b[0].swiperSlideOffset, d = -c;
                            w.params.virtualTranslate || (d -= w.translate);
                            var e = 0;
                            w.isHorizontal() || (e = d, d = 0);
                            var f = w.params.fade.crossFade ? Math.max(1 - Math.abs(b[0].progress), 0) : 1 + Math.min(Math.max(b[0].progress, -1), 0);
                            b.css({opacity: f}).transform("translate3d(" + d + "px, " + e + "px, 0px)")
                        }
                    }, setTransition: function (a) {
                        if (w.slides.transition(a), w.params.virtualTranslate && 0 !== a) {
                            var b = !1;
                            w.slides.transitionEnd(function () {
                                if (!b && w) {
                                    b = !0, w.animating = !1;
                                    for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], c = 0; c < a.length; c++)w.wrapper.trigger(a[c])
                                }
                            })
                        }
                    }
                }, flip: {
                    setTranslate: function () {
                        for (var a = 0; a < w.slides.length; a++) {
                            var c = w.slides.eq(a), d = c[0].progress;
                            w.params.flip.limitRotation && (d = Math.max(Math.min(c[0].progress, 1), -1));
                            var e = c[0].swiperSlideOffset, f = -180 * d, g = f, h = 0, i = -e, j = 0;
                            if (w.isHorizontal() ? w.rtl && (g = -g) : (j = i, i = 0, h = -g, g = 0), c[0].style.zIndex = -Math.abs(Math.round(d)) + w.slides.length, w.params.flip.slideShadows) {
                                var k = w.isHorizontal() ? c.find(".swiper-slide-shadow-left") : c.find(".swiper-slide-shadow-top"), l = w.isHorizontal() ? c.find(".swiper-slide-shadow-right") : c.find(".swiper-slide-shadow-bottom");
                                0 === k.length && (k = b('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), c.append(k)), 0 === l.length && (l = b('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), c.append(l)), k.length && (k[0].style.opacity = Math.max(-d, 0)), l.length && (l[0].style.opacity = Math.max(d, 0))
                            }
                            c.transform("translate3d(" + i + "px, " + j + "px, 0px) rotateX(" + h + "deg) rotateY(" + g + "deg)")
                        }
                    }, setTransition: function (a) {
                        if (w.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), w.params.virtualTranslate && 0 !== a) {
                            var c = !1;
                            w.slides.eq(w.activeIndex).transitionEnd(function () {
                                if (!c && w && b(this).hasClass(w.params.slideActiveClass)) {
                                    c = !0, w.animating = !1;
                                    for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], d = 0; d < a.length; d++)w.wrapper.trigger(a[d])
                                }
                            })
                        }
                    }
                }, cube: {
                    setTranslate: function () {
                        var a, c = 0;
                        w.params.cube.shadow && (w.isHorizontal() ? (a = w.wrapper.find(".swiper-cube-shadow"), 0 === a.length && (a = b('<div class="swiper-cube-shadow"></div>'), w.wrapper.append(a)), a.css({height: w.width + "px"})) : (a = w.container.find(".swiper-cube-shadow"), 0 === a.length && (a = b('<div class="swiper-cube-shadow"></div>'), w.container.append(a))));
                        for (var d = 0; d < w.slides.length; d++) {
                            var e = w.slides.eq(d), f = 90 * d, g = Math.floor(f / 360);
                            w.rtl && (f = -f, g = Math.floor(-f / 360));
                            var h = Math.max(Math.min(e[0].progress, 1), -1), i = 0, j = 0, k = 0;
                            d % 4 === 0 ? (i = 4 * -g * w.size, k = 0) : (d - 1) % 4 === 0 ? (i = 0, k = 4 * -g * w.size) : (d - 2) % 4 === 0 ? (i = w.size + 4 * g * w.size, k = w.size) : (d - 3) % 4 === 0 && (i = -w.size, k = 3 * w.size + 4 * w.size * g), w.rtl && (i = -i), w.isHorizontal() || (j = i, i = 0);
                            var l = "rotateX(" + (w.isHorizontal() ? 0 : -f) + "deg) rotateY(" + (w.isHorizontal() ? f : 0) + "deg) translate3d(" + i + "px, " + j + "px, " + k + "px)";
                            if (h <= 1 && h > -1 && (c = 90 * d + 90 * h, w.rtl && (c = 90 * -d - 90 * h)), e.transform(l), w.params.cube.slideShadows) {
                                var m = w.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"), n = w.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                                0 === m.length && (m = b('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), e.append(m)), 0 === n.length && (n = b('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), e.append(n)), m.length && (m[0].style.opacity = Math.max(-h, 0)), n.length && (n[0].style.opacity = Math.max(h, 0))
                            }
                        }
                        if (w.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                "transform-origin": "50% 50% -" + w.size / 2 + "px"
                            }), w.params.cube.shadow)if (w.isHorizontal()) a.transform("translate3d(0px, " + (w.width / 2 + w.params.cube.shadowOffset) + "px, " + -w.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + w.params.cube.shadowScale + ")"); else {
                            var o = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90), p = 1.5 - (Math.sin(2 * o * Math.PI / 360) / 2 + Math.cos(2 * o * Math.PI / 360) / 2), q = w.params.cube.shadowScale, r = w.params.cube.shadowScale / p, s = w.params.cube.shadowOffset;
                            a.transform("scale3d(" + q + ", 1, " + r + ") translate3d(0px, " + (w.height / 2 + s) + "px, " + -w.height / 2 / r + "px) rotateX(-90deg)")
                        }
                        var t = w.isSafari || w.isUiWebView ? -w.size / 2 : 0;
                        w.wrapper.transform("translate3d(0px,0," + t + "px) rotateX(" + (w.isHorizontal() ? 0 : c) + "deg) rotateY(" + (w.isHorizontal() ? -c : 0) + "deg)")
                    }, setTransition: function (a) {
                        w.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), w.params.cube.shadow && !w.isHorizontal() && w.container.find(".swiper-cube-shadow").transition(a)
                    }
                }, coverflow: {
                    setTranslate: function () {
                        for (var a = w.translate, c = w.isHorizontal() ? -a + w.width / 2 : -a + w.height / 2, d = w.isHorizontal() ? w.params.coverflow.rotate : -w.params.coverflow.rotate, e = w.params.coverflow.depth, f = 0, g = w.slides.length; f < g; f++) {
                            var h = w.slides.eq(f), i = w.slidesSizesGrid[f], j = h[0].swiperSlideOffset, k = (c - j - i / 2) / i * w.params.coverflow.modifier, l = w.isHorizontal() ? d * k : 0, m = w.isHorizontal() ? 0 : d * k, n = -e * Math.abs(k), o = w.isHorizontal() ? 0 : w.params.coverflow.stretch * k, p = w.isHorizontal() ? w.params.coverflow.stretch * k : 0;
                            Math.abs(p) < .001 && (p = 0), Math.abs(o) < .001 && (o = 0), Math.abs(n) < .001 && (n = 0), Math.abs(l) < .001 && (l = 0), Math.abs(m) < .001 && (m = 0);
                            var q = "translate3d(" + p + "px," + o + "px," + n + "px)  rotateX(" + m + "deg) rotateY(" + l + "deg)";
                            if (h.transform(q), h[0].style.zIndex = -Math.abs(Math.round(k)) + 1, w.params.coverflow.slideShadows) {
                                var r = w.isHorizontal() ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"), s = w.isHorizontal() ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                                0 === r.length && (r = b('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), h.append(r)), 0 === s.length && (s = b('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), h.append(s)), r.length && (r[0].style.opacity = k > 0 ? k : 0), s.length && (s[0].style.opacity = -k > 0 ? -k : 0)
                            }
                        }
                        if (w.browser.ie) {
                            var t = w.wrapper[0].style;
                            t.perspectiveOrigin = c + "px 50%"
                        }
                    }, setTransition: function (a) {
                        w.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a)
                    }
                }
            }, w.lazy = {
                initialImageLoaded: !1, loadImageInSlide: function (a, c) {
                    if ("undefined" != typeof a && ("undefined" == typeof c && (c = !0), 0 !== w.slides.length)) {
                        var d = w.slides.eq(a), e = d.find("." + w.params.lazyLoadingClass + ":not(." + w.params.lazyStatusLoadedClass + "):not(." + w.params.lazyStatusLoadingClass + ")");
                        !d.hasClass(w.params.lazyLoadingClass) || d.hasClass(w.params.lazyStatusLoadedClass) || d.hasClass(w.params.lazyStatusLoadingClass) || (e = e.add(d[0])), 0 !== e.length && e.each(function () {
                            var a = b(this);
                            a.addClass(w.params.lazyStatusLoadingClass);
                            var e = a.attr("data-background"), f = a.attr("data-src"), g = a.attr("data-srcset"), h = a.attr("data-sizes");
                            w.loadImage(a[0], f || e, g, h, !1, function () {
                                if (e ? (a.css("background-image", 'url("' + e + '")'), a.removeAttr("data-background")) : (g && (a.attr("srcset", g), a.removeAttr("data-srcset")), h && (a.attr("sizes", h), a.removeAttr("data-sizes")), f && (a.attr("src", f), a.removeAttr("data-src"))), a.addClass(w.params.lazyStatusLoadedClass).removeClass(w.params.lazyStatusLoadingClass), d.find("." + w.params.lazyPreloaderClass + ", ." + w.params.preloaderClass).remove(), w.params.loop && c) {
                                    var b = d.attr("data-swiper-slide-index");
                                    if (d.hasClass(w.params.slideDuplicateClass)) {
                                        var i = w.wrapper.children('[data-swiper-slide-index="' + b + '"]:not(.' + w.params.slideDuplicateClass + ")");
                                        w.lazy.loadImageInSlide(i.index(), !1)
                                    } else {
                                        var j = w.wrapper.children("." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + b + '"]');
                                        w.lazy.loadImageInSlide(j.index(), !1)
                                    }
                                }
                                w.emit("onLazyImageReady", w, d[0], a[0])
                            }), w.emit("onLazyImageLoad", w, d[0], a[0])
                        })
                    }
                }, load: function () {
                    var a, c = w.params.slidesPerView;
                    if ("auto" === c && (c = 0), w.lazy.initialImageLoaded || (w.lazy.initialImageLoaded = !0), w.params.watchSlidesVisibility) w.wrapper.children("." + w.params.slideVisibleClass).each(function () {
                        w.lazy.loadImageInSlide(b(this).index())
                    }); else if (c > 1)for (a = w.activeIndex; a < w.activeIndex + c; a++)w.slides[a] && w.lazy.loadImageInSlide(a); else w.lazy.loadImageInSlide(w.activeIndex);
                    if (w.params.lazyLoadingInPrevNext)if (c > 1 || w.params.lazyLoadingInPrevNextAmount && w.params.lazyLoadingInPrevNextAmount > 1) {
                        var d = w.params.lazyLoadingInPrevNextAmount, e = c, f = Math.min(w.activeIndex + e + Math.max(d, e), w.slides.length), g = Math.max(w.activeIndex - Math.max(e, d), 0);
                        for (a = w.activeIndex + c; a < f; a++)w.slides[a] && w.lazy.loadImageInSlide(a);
                        for (a = g; a < w.activeIndex; a++)w.slides[a] && w.lazy.loadImageInSlide(a)
                    } else {
                        var h = w.wrapper.children("." + w.params.slideNextClass);
                        h.length > 0 && w.lazy.loadImageInSlide(h.index());
                        var i = w.wrapper.children("." + w.params.slidePrevClass);
                        i.length > 0 && w.lazy.loadImageInSlide(i.index())
                    }
                }, onTransitionStart: function () {
                    w.params.lazyLoading && (w.params.lazyLoadingOnTransitionStart || !w.params.lazyLoadingOnTransitionStart && !w.lazy.initialImageLoaded) && w.lazy.load()
                }, onTransitionEnd: function () {
                    w.params.lazyLoading && !w.params.lazyLoadingOnTransitionStart && w.lazy.load()
                }
            }, w.scrollbar = {
                isTouched: !1, setDragPosition: function (a) {
                    var b = w.scrollbar, c = w.isHorizontal() ? "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX || a.clientX : "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY || a.clientY, d = c - b.track.offset()[w.isHorizontal() ? "left" : "top"] - b.dragSize / 2, e = -w.minTranslate() * b.moveDivider, f = -w.maxTranslate() * b.moveDivider;
                    d < e ? d = e : d > f && (d = f), d = -d / b.moveDivider, w.updateProgress(d), w.setWrapperTranslate(d, !0)
                }, dragStart: function (a) {
                    var b = w.scrollbar;
                    b.isTouched = !0, a.preventDefault(), a.stopPropagation(), b.setDragPosition(a), clearTimeout(b.dragTimeout), b.track.transition(0), w.params.scrollbarHide && b.track.css("opacity", 1), w.wrapper.transition(100), b.drag.transition(100), w.emit("onScrollbarDragStart", w)
                }, dragMove: function (a) {
                    var b = w.scrollbar;
                    b.isTouched && (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.setDragPosition(a), w.wrapper.transition(0), b.track.transition(0), b.drag.transition(0), w.emit("onScrollbarDragMove", w))
                }, dragEnd: function (a) {
                    var b = w.scrollbar;
                    b.isTouched && (b.isTouched = !1, w.params.scrollbarHide && (clearTimeout(b.dragTimeout), b.dragTimeout = setTimeout(function () {
                        b.track.css("opacity", 0), b.track.transition(400)
                    }, 1e3)), w.emit("onScrollbarDragEnd", w), w.params.scrollbarSnapOnRelease && w.slideReset())
                }, draggableEvents: function () {
                    return w.params.simulateTouch !== !1 || w.support.touch ? w.touchEvents : w.touchEventsDesktop
                }(), enableDraggable: function () {
                    var a = w.scrollbar, c = w.support.touch ? a.track : document;
                    b(a.track).on(a.draggableEvents.start, a.dragStart), b(c).on(a.draggableEvents.move, a.dragMove), b(c).on(a.draggableEvents.end, a.dragEnd)
                }, disableDraggable: function () {
                    var a = w.scrollbar, c = w.support.touch ? a.track : document;
                    b(a.track).off(a.draggableEvents.start, a.dragStart), b(c).off(a.draggableEvents.move, a.dragMove), b(c).off(a.draggableEvents.end, a.dragEnd)
                }, set: function () {
                    if (w.params.scrollbar) {
                        var a = w.scrollbar;
                        a.track = b(w.params.scrollbar), w.params.uniqueNavElements && "string" == typeof w.params.scrollbar && a.track.length > 1 && 1 === w.container.find(w.params.scrollbar).length && (a.track = w.container.find(w.params.scrollbar)), a.drag = a.track.find(".swiper-scrollbar-drag"), 0 === a.drag.length && (a.drag = b('<div class="swiper-scrollbar-drag"></div>'), a.track.append(a.drag)), a.drag[0].style.width = "", a.drag[0].style.height = "", a.trackSize = w.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight, a.divider = w.size / w.virtualSize, a.moveDivider = a.divider * (a.trackSize / w.size), a.dragSize = a.trackSize * a.divider, w.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px", a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "", w.params.scrollbarHide && (a.track[0].style.opacity = 0)
                    }
                }, setTranslate: function () {
                    if (w.params.scrollbar) {
                        var a, b = w.scrollbar, c = (w.translate || 0, b.dragSize);
                        a = (b.trackSize - b.dragSize) * w.progress, w.rtl && w.isHorizontal() ? (a = -a, a > 0 ? (c = b.dragSize - a, a = 0) : -a + b.dragSize > b.trackSize && (c = b.trackSize + a)) : a < 0 ? (c = b.dragSize + a, a = 0) : a + b.dragSize > b.trackSize && (c = b.trackSize - a), w.isHorizontal() ? (w.support.transforms3d ? b.drag.transform("translate3d(" + a + "px, 0, 0)") : b.drag.transform("translateX(" + a + "px)"), b.drag[0].style.width = c + "px") : (w.support.transforms3d ? b.drag.transform("translate3d(0px, " + a + "px, 0)") : b.drag.transform("translateY(" + a + "px)"), b.drag[0].style.height = c + "px"), w.params.scrollbarHide && (clearTimeout(b.timeout), b.track[0].style.opacity = 1, b.timeout = setTimeout(function () {
                            b.track[0].style.opacity = 0, b.track.transition(400)
                        }, 1e3))
                    }
                }, setTransition: function (a) {
                    w.params.scrollbar && w.scrollbar.drag.transition(a)
                }
            }, w.controller = {
                LinearSpline: function (a, b) {
                    this.x = a, this.y = b, this.lastIndex = a.length - 1;
                    var c, d;
                    this.x.length, this.interpolate = function (a) {
                        return a ? (d = e(this.x, a), c = d - 1, (a - this.x[c]) * (this.y[d] - this.y[c]) / (this.x[d] - this.x[c]) + this.y[c]) : 0
                    };
                    var e = function () {
                        var a, b, c;
                        return function (d, e) {
                            for (b = -1, a = d.length; a - b > 1;)d[c = a + b >> 1] <= e ? b = c : a = c;
                            return a
                        }
                    }()
                }, getInterpolateFunction: function (a) {
                    w.controller.spline || (w.controller.spline = w.params.loop ? new w.controller.LinearSpline(w.slidesGrid, a.slidesGrid) : new w.controller.LinearSpline(w.snapGrid, a.snapGrid))
                }, setTranslate: function (a, b) {
                    function d(b) {
                        a = b.rtl && "horizontal" === b.params.direction ? -w.translate : w.translate, "slide" === w.params.controlBy && (w.controller.getInterpolateFunction(b), f = -w.controller.spline.interpolate(-a)), f && "container" !== w.params.controlBy || (e = (b.maxTranslate() - b.minTranslate()) / (w.maxTranslate() - w.minTranslate()), f = (a - w.minTranslate()) * e + b.minTranslate()), w.params.controlInverse && (f = b.maxTranslate() - f), b.updateProgress(f), b.setWrapperTranslate(f, !1, w), b.updateActiveIndex()
                    }

                    var e, f, g = w.params.control;
                    if (w.isArray(g))for (var h = 0; h < g.length; h++)g[h] !== b && g[h] instanceof c && d(g[h]); else g instanceof c && b !== g && d(g)
                }, setTransition: function (a, b) {
                    function d(b) {
                        b.setWrapperTransition(a, w), 0 !== a && (b.onTransitionStart(), b.wrapper.transitionEnd(function () {
                            f && (b.params.loop && "slide" === w.params.controlBy && b.fixLoop(), b.onTransitionEnd())
                        }))
                    }

                    var e, f = w.params.control;
                    if (w.isArray(f))for (e = 0; e < f.length; e++)f[e] !== b && f[e] instanceof c && d(f[e]); else f instanceof c && b !== f && d(f)
                }
            }, w.hashnav = {
                onHashCange: function (a, b) {
                    var c = document.location.hash.replace("#", ""), d = w.slides.eq(w.activeIndex).attr("data-hash");
                    c !== d && w.slideTo(w.wrapper.children("." + w.params.slideClass + '[data-hash="' + c + '"]').index())
                }, attachEvents: function (a) {
                    var c = a ? "off" : "on";
                    b(window)[c]("hashchange", w.hashnav.onHashCange)
                }, setHash: function () {
                    if (w.hashnav.initialized && w.params.hashnav)if (w.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + w.slides.eq(w.activeIndex).attr("data-hash") || ""); else {
                        var a = w.slides.eq(w.activeIndex), b = a.attr("data-hash") || a.attr("data-history");
                        document.location.hash = b || ""
                    }
                }, init: function () {
                    if (w.params.hashnav && !w.params.history) {
                        w.hashnav.initialized = !0;
                        var a = document.location.hash.replace("#", "");
                        if (a)for (var b = 0, c = 0, d = w.slides.length; c < d; c++) {
                            var e = w.slides.eq(c), f = e.attr("data-hash") || e.attr("data-history");
                            if (f === a && !e.hasClass(w.params.slideDuplicateClass)) {
                                var g = e.index();
                                w.slideTo(g, b, w.params.runCallbacksOnInit, !0)
                            }
                        }
                        w.params.hashnavWatchState && w.hashnav.attachEvents()
                    }
                }, destroy: function () {
                    w.params.hashnavWatchState && w.hashnav.attachEvents(!0)
                }
            }, w.history = {
                init: function () {
                    if (w.params.history) {
                        if (!window.history || !window.history.pushState)return w.params.history = !1, void(w.params.hashnav = !0);
                        w.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, w.params.runCallbacksOnInit), w.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                }, setHistoryPopState: function () {
                    w.history.paths = w.history.getPathValues(), w.history.scrollToSlide(w.params.speed, w.history.paths.value, !1)
                }, getPathValues: function () {
                    var a = window.location.pathname.slice(1).split("/"), b = a.length, c = a[b - 2], d = a[b - 1];
                    return {key: c, value: d}
                }, setHistory: function (a, b) {
                    if (w.history.initialized && w.params.history) {
                        var c = w.slides.eq(b), d = this.slugify(c.attr("data-history"));
                        window.location.pathname.includes(a) || (d = a + "/" + d), w.params.replaceState ? window.history.replaceState(null, null, d) : window.history.pushState(null, null, d)
                    }
                }, slugify: function (a) {
                    return a.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                }, scrollToSlide: function (a, b, c) {
                    if (b)for (var d = 0, e = w.slides.length; d < e; d++) {
                        var f = w.slides.eq(d), g = this.slugify(f.attr("data-history"));
                        if (g === b && !f.hasClass(w.params.slideDuplicateClass)) {
                            var h = f.index();
                            w.slideTo(h, a, c)
                        }
                    } else w.slideTo(0, a, c)
                }
            }, w.disableKeyboardControl = function () {
                w.params.keyboardControl = !1, b(document).off("keydown", j)
            }, w.enableKeyboardControl = function () {
                w.params.keyboardControl = !0, b(document).on("keydown", j)
            }, w.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            }, w.params.mousewheelControl && (w.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : k() ? "wheel" : "mousewheel"), w.disableMousewheelControl = function () {
                if (!w.mousewheel.event)return !1;
                var a = w.container;
                return "container" !== w.params.mousewheelEventsTarged && (a = b(w.params.mousewheelEventsTarged)), a.off(w.mousewheel.event, l), !0
            }, w.enableMousewheelControl = function () {
                if (!w.mousewheel.event)return !1;
                var a = w.container;
                return "container" !== w.params.mousewheelEventsTarged && (a = b(w.params.mousewheelEventsTarged)), a.on(w.mousewheel.event, l), !0
            }, w.parallax = {
                setTranslate: function () {
                    w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                        n(this, w.progress)
                    }), w.slides.each(function () {
                        var a = b(this);
                        a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                            var b = Math.min(Math.max(a[0].progress, -1), 1);
                            n(this, b)
                        })
                    })
                }, setTransition: function (a) {
                    "undefined" == typeof a && (a = w.params.speed), w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                        var c = b(this), d = parseInt(c.attr("data-swiper-parallax-duration"), 10) || a;
                        0 === a && (d = 0), c.transition(d)
                    })
                }
            }, w.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: w.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0},
                getDistanceBetweenTouches: function (a) {
                    if (a.targetTouches.length < 2)return 1;
                    var b = a.targetTouches[0].pageX, c = a.targetTouches[0].pageY, d = a.targetTouches[1].pageX, e = a.targetTouches[1].pageY, f = Math.sqrt(Math.pow(d - b, 2) + Math.pow(e - c, 2));
                    return f
                },
                onGestureStart: function (a) {
                    var c = w.zoom;
                    if (!w.support.gestures) {
                        if ("touchstart" !== a.type || "touchstart" === a.type && a.targetTouches.length < 2)return;
                        c.gesture.scaleStart = c.getDistanceBetweenTouches(a)
                    }
                    return c.gesture.slide && c.gesture.slide.length || (c.gesture.slide = b(this), 0 === c.gesture.slide.length && (c.gesture.slide = w.slides.eq(w.activeIndex)), c.gesture.image = c.gesture.slide.find("img, svg, canvas"), c.gesture.imageWrap = c.gesture.image.parent("." + w.params.zoomContainerClass), c.gesture.zoomMax = c.gesture.imageWrap.attr("data-swiper-zoom") || w.params.zoomMax, 0 !== c.gesture.imageWrap.length) ? (c.gesture.image.transition(0), void(c.isScaling = !0)) : void(c.gesture.image = void 0)
                },
                onGestureChange: function (a) {
                    var b = w.zoom;
                    if (!w.support.gestures) {
                        if ("touchmove" !== a.type || "touchmove" === a.type && a.targetTouches.length < 2)return;
                        b.gesture.scaleMove = b.getDistanceBetweenTouches(a)
                    }
                    b.gesture.image && 0 !== b.gesture.image.length && (w.support.gestures ? b.scale = a.scale * b.currentScale : b.scale = b.gesture.scaleMove / b.gesture.scaleStart * b.currentScale, b.scale > b.gesture.zoomMax && (b.scale = b.gesture.zoomMax - 1 + Math.pow(b.scale - b.gesture.zoomMax + 1, .5)), b.scale < w.params.zoomMin && (b.scale = w.params.zoomMin + 1 - Math.pow(w.params.zoomMin - b.scale + 1, .5)), b.gesture.image.transform("translate3d(0,0,0) scale(" + b.scale + ")"))
                },
                onGestureEnd: function (a) {
                    var b = w.zoom;
                    !w.support.gestures && ("touchend" !== a.type || "touchend" === a.type && a.changedTouches.length < 2) || b.gesture.image && 0 !== b.gesture.image.length && (b.scale = Math.max(Math.min(b.scale, b.gesture.zoomMax), w.params.zoomMin), b.gesture.image.transition(w.params.speed).transform("translate3d(0,0,0) scale(" + b.scale + ")"), b.currentScale = b.scale, b.isScaling = !1, 1 === b.scale && (b.gesture.slide = void 0))
                },
                onTouchStart: function (a, b) {
                    var c = a.zoom;
                    c.gesture.image && 0 !== c.gesture.image.length && (c.image.isTouched || ("android" === a.device.os && b.preventDefault(), c.image.isTouched = !0, c.image.touchesStart.x = "touchstart" === b.type ? b.targetTouches[0].pageX : b.pageX, c.image.touchesStart.y = "touchstart" === b.type ? b.targetTouches[0].pageY : b.pageY))
                },
                onTouchMove: function (a) {
                    var b = w.zoom;
                    if (b.gesture.image && 0 !== b.gesture.image.length && (w.allowClick = !1, b.image.isTouched && b.gesture.slide)) {
                        b.image.isMoved || (b.image.width = b.gesture.image[0].offsetWidth, b.image.height = b.gesture.image[0].offsetHeight, b.image.startX = w.getTranslate(b.gesture.imageWrap[0], "x") || 0, b.image.startY = w.getTranslate(b.gesture.imageWrap[0], "y") || 0, b.gesture.slideWidth = b.gesture.slide[0].offsetWidth, b.gesture.slideHeight = b.gesture.slide[0].offsetHeight, b.gesture.imageWrap.transition(0), w.rtl && (b.image.startX = -b.image.startX), w.rtl && (b.image.startY = -b.image.startY));
                        var c = b.image.width * b.scale, d = b.image.height * b.scale;
                        if (!(c < b.gesture.slideWidth && d < b.gesture.slideHeight)) {
                            if (b.image.minX = Math.min(b.gesture.slideWidth / 2 - c / 2, 0), b.image.maxX = -b.image.minX, b.image.minY = Math.min(b.gesture.slideHeight / 2 - d / 2, 0), b.image.maxY = -b.image.minY, b.image.touchesCurrent.x = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, b.image.touchesCurrent.y = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, !b.image.isMoved && !b.isScaling) {
                                if (w.isHorizontal() && Math.floor(b.image.minX) === Math.floor(b.image.startX) && b.image.touchesCurrent.x < b.image.touchesStart.x || Math.floor(b.image.maxX) === Math.floor(b.image.startX) && b.image.touchesCurrent.x > b.image.touchesStart.x)return void(b.image.isTouched = !1);
                                if (!w.isHorizontal() && Math.floor(b.image.minY) === Math.floor(b.image.startY) && b.image.touchesCurrent.y < b.image.touchesStart.y || Math.floor(b.image.maxY) === Math.floor(b.image.startY) && b.image.touchesCurrent.y > b.image.touchesStart.y)return void(b.image.isTouched = !1)
                            }
                            a.preventDefault(), a.stopPropagation(), b.image.isMoved = !0, b.image.currentX = b.image.touchesCurrent.x - b.image.touchesStart.x + b.image.startX, b.image.currentY = b.image.touchesCurrent.y - b.image.touchesStart.y + b.image.startY, b.image.currentX < b.image.minX && (b.image.currentX = b.image.minX + 1 - Math.pow(b.image.minX - b.image.currentX + 1, .8)), b.image.currentX > b.image.maxX && (b.image.currentX = b.image.maxX - 1 + Math.pow(b.image.currentX - b.image.maxX + 1, .8)), b.image.currentY < b.image.minY && (b.image.currentY = b.image.minY + 1 - Math.pow(b.image.minY - b.image.currentY + 1, .8)), b.image.currentY > b.image.maxY && (b.image.currentY = b.image.maxY - 1 + Math.pow(b.image.currentY - b.image.maxY + 1, .8)), b.velocity.prevPositionX || (b.velocity.prevPositionX = b.image.touchesCurrent.x), b.velocity.prevPositionY || (b.velocity.prevPositionY = b.image.touchesCurrent.y), b.velocity.prevTime || (b.velocity.prevTime = Date.now()), b.velocity.x = (b.image.touchesCurrent.x - b.velocity.prevPositionX) / (Date.now() - b.velocity.prevTime) / 2, b.velocity.y = (b.image.touchesCurrent.y - b.velocity.prevPositionY) / (Date.now() - b.velocity.prevTime) / 2, Math.abs(b.image.touchesCurrent.x - b.velocity.prevPositionX) < 2 && (b.velocity.x = 0), Math.abs(b.image.touchesCurrent.y - b.velocity.prevPositionY) < 2 && (b.velocity.y = 0), b.velocity.prevPositionX = b.image.touchesCurrent.x, b.velocity.prevPositionY = b.image.touchesCurrent.y, b.velocity.prevTime = Date.now(), b.gesture.imageWrap.transform("translate3d(" + b.image.currentX + "px, " + b.image.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function (a, b) {
                    var c = a.zoom;
                    if (c.gesture.image && 0 !== c.gesture.image.length) {
                        if (!c.image.isTouched || !c.image.isMoved)return c.image.isTouched = !1, void(c.image.isMoved = !1);
                        c.image.isTouched = !1, c.image.isMoved = !1;
                        var d = 300, e = 300, f = c.velocity.x * d, g = c.image.currentX + f, h = c.velocity.y * e, i = c.image.currentY + h;
                        0 !== c.velocity.x && (d = Math.abs((g - c.image.currentX) / c.velocity.x)), 0 !== c.velocity.y && (e = Math.abs((i - c.image.currentY) / c.velocity.y));
                        var j = Math.max(d, e);
                        c.image.currentX = g, c.image.currentY = i;
                        var k = c.image.width * c.scale, l = c.image.height * c.scale;
                        c.image.minX = Math.min(c.gesture.slideWidth / 2 - k / 2, 0), c.image.maxX = -c.image.minX, c.image.minY = Math.min(c.gesture.slideHeight / 2 - l / 2, 0), c.image.maxY = -c.image.minY, c.image.currentX = Math.max(Math.min(c.image.currentX, c.image.maxX), c.image.minX), c.image.currentY = Math.max(Math.min(c.image.currentY, c.image.maxY), c.image.minY), c.gesture.imageWrap.transition(j).transform("translate3d(" + c.image.currentX + "px, " + c.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function (a) {
                    var b = a.zoom;
                    b.gesture.slide && a.previousIndex !== a.activeIndex && (b.gesture.image.transform("translate3d(0,0,0) scale(1)"), b.gesture.imageWrap.transform("translate3d(0,0,0)"), b.gesture.slide = b.gesture.image = b.gesture.imageWrap = void 0, b.scale = b.currentScale = 1)
                },
                toggleZoom: function (a, c) {
                    var d = a.zoom;
                    if (d.gesture.slide || (d.gesture.slide = a.clickedSlide ? b(a.clickedSlide) : a.slides.eq(a.activeIndex), d.gesture.image = d.gesture.slide.find("img, svg, canvas"), d.gesture.imageWrap = d.gesture.image.parent("." + a.params.zoomContainerClass)), d.gesture.image && 0 !== d.gesture.image.length) {
                        var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
                        "undefined" == typeof d.image.touchesStart.x && c ? (e = "touchend" === c.type ? c.changedTouches[0].pageX : c.pageX, f = "touchend" === c.type ? c.changedTouches[0].pageY : c.pageY) : (e = d.image.touchesStart.x, f = d.image.touchesStart.y), d.scale && 1 !== d.scale ? (d.scale = d.currentScale = 1, d.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), d.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), d.gesture.slide = void 0) : (d.scale = d.currentScale = d.gesture.imageWrap.attr("data-swiper-zoom") || a.params.zoomMax, c ? (u = d.gesture.slide[0].offsetWidth, v = d.gesture.slide[0].offsetHeight, g = d.gesture.slide.offset().left, h = d.gesture.slide.offset().top, i = g + u / 2 - e, j = h + v / 2 - f, m = d.gesture.image[0].offsetWidth, n = d.gesture.image[0].offsetHeight, o = m * d.scale, p = n * d.scale, q = Math.min(u / 2 - o / 2, 0), r = Math.min(v / 2 - p / 2, 0), s = -q, t = -r, k = i * d.scale, l = j * d.scale, k < q && (k = q), k > s && (k = s), l < r && (l = r), l > t && (l = t)) : (k = 0, l = 0), d.gesture.imageWrap.transition(300).transform("translate3d(" + k + "px, " + l + "px,0)"), d.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + d.scale + ")"))
                    }
                },
                attachEvents: function (a) {
                    var c = a ? "off" : "on";
                    if (w.params.zoom) {
                        var d = (w.slides, !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        });
                        w.support.gestures ? (w.slides[c]("gesturestart", w.zoom.onGestureStart, d), w.slides[c]("gesturechange", w.zoom.onGestureChange, d), w.slides[c]("gestureend", w.zoom.onGestureEnd, d)) : "touchstart" === w.touchEvents.start && (w.slides[c](w.touchEvents.start, w.zoom.onGestureStart, d), w.slides[c](w.touchEvents.move, w.zoom.onGestureChange, d), w.slides[c](w.touchEvents.end, w.zoom.onGestureEnd, d)), w[c]("touchStart", w.zoom.onTouchStart), w.slides.each(function (a, d) {
                            b(d).find("." + w.params.zoomContainerClass).length > 0 && b(d)[c](w.touchEvents.move, w.zoom.onTouchMove)
                        }), w[c]("touchEnd", w.zoom.onTouchEnd), w[c]("transitionEnd", w.zoom.onTransitionEnd), w.params.zoomToggle && w.on("doubleTap", w.zoom.toggleZoom)
                    }
                },
                init: function () {
                    w.zoom.attachEvents()
                },
                destroy: function () {
                    w.zoom.attachEvents(!0)
                }
            }, w._plugins = [];
            for (var N in w.plugins) {
                var O = w.plugins[N](w, w.params[N]);
                O && w._plugins.push(O)
            }
            return w.callPlugins = function (a) {
                for (var b = 0; b < w._plugins.length; b++)a in w._plugins[b] && w._plugins[b][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, w.emitterEventListeners = {}, w.emit = function (a) {
                w.params[a] && w.params[a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var b;
                if (w.emitterEventListeners[a])for (b = 0; b < w.emitterEventListeners[a].length; b++)w.emitterEventListeners[a][b](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                w.callPlugins && w.callPlugins(a, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, w.on = function (a, b) {
                return a = o(a), w.emitterEventListeners[a] || (w.emitterEventListeners[a] = []), w.emitterEventListeners[a].push(b), w
            }, w.off = function (a, b) {
                var c;
                if (a = o(a), "undefined" == typeof b)return w.emitterEventListeners[a] = [], w;
                if (w.emitterEventListeners[a] && 0 !== w.emitterEventListeners[a].length) {
                    for (c = 0; c < w.emitterEventListeners[a].length; c++)w.emitterEventListeners[a][c] === b && w.emitterEventListeners[a].splice(c, 1);
                    return w
                }
            }, w.once = function (a, b) {
                a = o(a);
                var c = function () {
                    b(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), w.off(a, c)
                };
                return w.on(a, c), w
            }, w.a11y = {
                makeFocusable: function (a) {
                    return a.attr("tabIndex", "0"), a
                },
                addRole: function (a, b) {
                    return a.attr("role", b), a
                },
                addLabel: function (a, b) {
                    return a.attr("aria-label", b), a
                },
                disable: function (a) {
                    return a.attr("aria-disabled", !0), a
                },
                enable: function (a) {
                    return a.attr("aria-disabled", !1), a
                },
                onEnterKey: function (a) {
                    13 === a.keyCode && (b(a.target).is(w.params.nextButton) ? (w.onClickNext(a), w.isEnd ? w.a11y.notify(w.params.lastSlideMessage) : w.a11y.notify(w.params.nextSlideMessage)) : b(a.target).is(w.params.prevButton) && (w.onClickPrev(a), w.isBeginning ? w.a11y.notify(w.params.firstSlideMessage) : w.a11y.notify(w.params.prevSlideMessage)), b(a.target).is("." + w.params.bulletClass) && b(a.target)[0].click())
                },
                liveRegion: b('<span class="' + w.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function (a) {
                    var b = w.a11y.liveRegion;
                    0 !== b.length && (b.html(""), b.html(a))
                },
                init: function () {
                    w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.a11y.makeFocusable(w.nextButton), w.a11y.addRole(w.nextButton, "button"), w.a11y.addLabel(w.nextButton, w.params.nextSlideMessage)), w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.a11y.makeFocusable(w.prevButton), w.a11y.addRole(w.prevButton, "button"), w.a11y.addLabel(w.prevButton, w.params.prevSlideMessage)), b(w.container).append(w.a11y.liveRegion)
                },
                initPagination: function () {
                    w.params.pagination && w.params.paginationClickable && w.bullets && w.bullets.length && w.bullets.each(function () {
                        var a = b(this);
                        w.a11y.makeFocusable(a), w.a11y.addRole(a, "button"), w.a11y.addLabel(a, w.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                    })
                },
                destroy: function () {
                    w.a11y.liveRegion && w.a11y.liveRegion.length > 0 && w.a11y.liveRegion.remove()
                }
            }, w.init = function () {
                w.params.loop && w.createLoop(), w.updateContainerSize(), w.updateSlidesSize(), w.updatePagination(), w.params.scrollbar && w.scrollbar && (w.scrollbar.set(), w.params.scrollbarDraggable && w.scrollbar.enableDraggable()), "slide" !== w.params.effect && w.effects[w.params.effect] && (w.params.loop || w.updateProgress(), w.effects[w.params.effect].setTranslate()), w.params.loop ? w.slideTo(w.params.initialSlide + w.loopedSlides, 0, w.params.runCallbacksOnInit) : (w.slideTo(w.params.initialSlide, 0, w.params.runCallbacksOnInit), 0 === w.params.initialSlide && (w.parallax && w.params.parallax && w.parallax.setTranslate(), w.lazy && w.params.lazyLoading && (w.lazy.load(), w.lazy.initialImageLoaded = !0))), w.attachEvents(), w.params.observer && w.support.observer && w.initObservers(), w.params.preloadImages && !w.params.lazyLoading && w.preloadImages(), w.params.zoom && w.zoom && w.zoom.init(), w.params.autoplay && w.startAutoplay(), w.params.keyboardControl && w.enableKeyboardControl && w.enableKeyboardControl(), w.params.mousewheelControl && w.enableMousewheelControl && w.enableMousewheelControl(), w.params.hashnavReplaceState && (w.params.replaceState = w.params.hashnavReplaceState), w.params.history && w.history && w.history.init(), w.params.hashnav && w.hashnav && w.hashnav.init(), w.params.a11y && w.a11y && w.a11y.init(), w.emit("onInit", w)
            }, w.cleanupStyles = function () {
                w.container.removeClass(w.classNames.join(" ")).removeAttr("style"), w.wrapper.removeAttr("style"), w.slides && w.slides.length && w.slides.removeClass([w.params.slideVisibleClass, w.params.slideActiveClass, w.params.slideNextClass, w.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), w.paginationContainer && w.paginationContainer.length && w.paginationContainer.removeClass(w.params.paginationHiddenClass), w.bullets && w.bullets.length && w.bullets.removeClass(w.params.bulletActiveClass), w.params.prevButton && b(w.params.prevButton).removeClass(w.params.buttonDisabledClass), w.params.nextButton && b(w.params.nextButton).removeClass(w.params.buttonDisabledClass), w.params.scrollbar && w.scrollbar && (w.scrollbar.track && w.scrollbar.track.length && w.scrollbar.track.removeAttr("style"), w.scrollbar.drag && w.scrollbar.drag.length && w.scrollbar.drag.removeAttr("style"))
            }, w.destroy = function (a, b) {
                w.detachEvents(), w.stopAutoplay(), w.params.scrollbar && w.scrollbar && w.params.scrollbarDraggable && w.scrollbar.disableDraggable(), w.params.loop && w.destroyLoop(), b && w.cleanupStyles(), w.disconnectObservers(), w.params.zoom && w.zoom && w.zoom.destroy(), w.params.keyboardControl && w.disableKeyboardControl && w.disableKeyboardControl(), w.params.mousewheelControl && w.disableMousewheelControl && w.disableMousewheelControl(), w.params.a11y && w.a11y && w.a11y.destroy(), w.params.history && !w.params.replaceState && window.removeEventListener("popstate", w.history.setHistoryPopState), w.params.hashnav && w.hashnav && w.hashnav.destroy(), w.emit("onDestroy"), a !== !1 && (w = null)
            }, w.init(), w
        }
    };
    c.prototype = {
        isSafari: function () {
            var a = window.navigator.userAgent.toLowerCase();
            return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function (a) {
            return "[object Array]" === Object.prototype.toString.apply(a)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function () {
                var a = document.createElement("div");
                return a.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === a.getElementsByTagName("i").length
            }()
        },
        device: function () {
            var a = window.navigator.userAgent, b = a.match(/(Android);?[\s\/]+([\d.]+)?/), c = a.match(/(iPad).*OS\s([\d_]+)/), d = a.match(/(iPod)(.*OS\s([\d_]+))?/), e = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {ios: c || e || d, android: b}
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function () {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
                var a = document.createElement("div").style;
                return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a
            }(), flexbox: function () {
                for (var a = document.createElement("div").style, b = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), c = 0; c < b.length; c++)if (b[c] in a)return !0
            }(), observer: function () {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }(), passiveListener: function () {
                var a = !1;
                try {
                    var b = Object.defineProperty({}, "passive", {
                        get: function () {
                            a = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, b)
                } catch (a) {
                }
                return a
            }(), gestures: function () {
                return "ongesturestart" in window
            }()
        },
        plugins: {}
    };
    for (var d = (function () {
        var a = function (a) {
            var b = this, c = 0;
            for (c = 0; c < a.length; c++)b[c] = a[c];
            return b.length = a.length, this
        }, b = function (b, c) {
            var d = [], e = 0;
            if (b && !c && b instanceof a)return b;
            if (b)if ("string" == typeof b) {
                var f, g, h = b.trim();
                if (h.indexOf("<") >= 0 && h.indexOf(">") >= 0) {
                    var i = "div";
                    for (0 === h.indexOf("<li") && (i = "ul"), 0 === h.indexOf("<tr") && (i = "tbody"), 0 !== h.indexOf("<td") && 0 !== h.indexOf("<th") || (i = "tr"), 0 === h.indexOf("<tbody") && (i = "table"), 0 === h.indexOf("<option") && (i = "select"), g = document.createElement(i), g.innerHTML = b, e = 0; e < g.childNodes.length; e++)d.push(g.childNodes[e])
                } else for (f = c || "#" !== b[0] || b.match(/[ .<>:~]/) ? (c || document).querySelectorAll(b) : [document.getElementById(b.split("#")[1])], e = 0; e < f.length; e++)f[e] && d.push(f[e])
            } else if (b.nodeType || b === window || b === document) d.push(b); else if (b.length > 0 && b[0].nodeType)for (e = 0; e < b.length; e++)d.push(b[e]);
            return new a(d)
        };
        return a.prototype = {
            addClass: function (a) {
                if ("undefined" == typeof a)return this;
                for (var b = a.split(" "), c = 0; c < b.length; c++)for (var d = 0; d < this.length; d++)this[d].classList.add(b[c]);
                return this
            }, removeClass: function (a) {
                for (var b = a.split(" "), c = 0; c < b.length; c++)for (var d = 0; d < this.length; d++)this[d].classList.remove(b[c]);
                return this
            }, hasClass: function (a) {
                return !!this[0] && this[0].classList.contains(a)
            }, toggleClass: function (a) {
                for (var b = a.split(" "), c = 0; c < b.length; c++)for (var d = 0; d < this.length; d++)this[d].classList.toggle(b[c]);
                return this
            }, attr: function (a, b) {
                if (1 === arguments.length && "string" == typeof a)return this[0] ? this[0].getAttribute(a) : void 0;
                for (var c = 0; c < this.length; c++)if (2 === arguments.length) this[c].setAttribute(a, b); else for (var d in a)this[c][d] = a[d], this[c].setAttribute(d, a[d]);
                return this
            }, removeAttr: function (a) {
                for (var b = 0; b < this.length; b++)this[b].removeAttribute(a);
                return this
            }, data: function (a, b) {
                if ("undefined" != typeof b) {
                    for (var c = 0; c < this.length; c++) {
                        var d = this[c];
                        d.dom7ElementDataStorage || (d.dom7ElementDataStorage = {}), d.dom7ElementDataStorage[a] = b
                    }
                    return this
                }
                if (this[0]) {
                    var e = this[0].getAttribute("data-" + a);
                    return e ? e : this[0].dom7ElementDataStorage && a in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[a] : void 0
                }
            }, transform: function (a) {
                for (var b = 0; b < this.length; b++) {
                    var c = this[b].style;
                    c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = a
                }
                return this
            }, transition: function (a) {
                "string" != typeof a && (a += "ms");
                for (var b = 0; b < this.length; b++) {
                    var c = this[b].style;
                    c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = a
                }
                return this
            }, on: function (a, c, d, e) {
                function f(a) {
                    var e = a.target;
                    if (b(e).is(c)) d.call(e, a); else for (var f = b(e).parents(), g = 0; g < f.length; g++)b(f[g]).is(c) && d.call(f[g], a)
                }

                var g, h, i = a.split(" ");
                for (g = 0; g < this.length; g++)if ("function" == typeof c || c === !1)for ("function" == typeof c && (d = arguments[1], e = arguments[2] || !1), h = 0; h < i.length; h++)this[g].addEventListener(i[h], d, e); else for (h = 0; h < i.length; h++)this[g].dom7LiveListeners || (this[g].dom7LiveListeners = []), this[g].dom7LiveListeners.push({
                    listener: d,
                    liveListener: f
                }), this[g].addEventListener(i[h], f, e);
                return this
            }, off: function (a, b, c, d) {
                for (var e = a.split(" "), f = 0; f < e.length; f++)for (var g = 0; g < this.length; g++)if ("function" == typeof b || b === !1) "function" == typeof b && (c = arguments[1], d = arguments[2] || !1), this[g].removeEventListener(e[f], c, d); else if (this[g].dom7LiveListeners)for (var h = 0; h < this[g].dom7LiveListeners.length; h++)this[g].dom7LiveListeners[h].listener === c && this[g].removeEventListener(e[f], this[g].dom7LiveListeners[h].liveListener, d);
                return this
            }, once: function (a, b, c, d) {
                function e(g) {
                    c(g), f.off(a, b, e, d)
                }

                var f = this;
                "function" == typeof b && (b = !1, c = arguments[1], d = arguments[2]), f.on(a, b, e, d)
            }, trigger: function (a, b) {
                for (var c = 0; c < this.length; c++) {
                    var d;
                    try {
                        d = new window.CustomEvent(a, {detail: b, bubbles: !0, cancelable: !0})
                    } catch (c) {
                        d = document.createEvent("Event"), d.initEvent(a, !0, !0), d.detail = b
                    }
                    this[c].dispatchEvent(d)
                }
                return this
            }, transitionEnd: function (a) {
                function b(f) {
                    if (f.target === this)for (a.call(this, f), c = 0; c < d.length; c++)e.off(d[c], b)
                }

                var c, d = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], e = this;
                if (a)for (c = 0; c < d.length; c++)e.on(d[c], b);
                return this
            }, width: function () {
                return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
            }, outerWidth: function (a) {
                return this.length > 0 ? a ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
            }, height: function () {
                return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
            }, outerHeight: function (a) {
                return this.length > 0 ? a ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
            }, offset: function () {
                if (this.length > 0) {
                    var a = this[0], b = a.getBoundingClientRect(), c = document.body, d = a.clientTop || c.clientTop || 0, e = a.clientLeft || c.clientLeft || 0, f = window.pageYOffset || a.scrollTop, g = window.pageXOffset || a.scrollLeft;
                    return {top: b.top + f - d, left: b.left + g - e}
                }
                return null
            }, css: function (a, b) {
                var c;
                if (1 === arguments.length) {
                    if ("string" != typeof a) {
                        for (c = 0; c < this.length; c++)for (var d in a)this[c].style[d] = a[d];
                        return this
                    }
                    if (this[0])return window.getComputedStyle(this[0], null).getPropertyValue(a)
                }
                if (2 === arguments.length && "string" == typeof a) {
                    for (c = 0; c < this.length; c++)this[c].style[a] = b;
                    return this
                }
                return this
            }, each: function (a) {
                for (var b = 0; b < this.length; b++)a.call(this[b], b, this[b]);
                return this
            }, html: function (a) {
                if ("undefined" == typeof a)return this[0] ? this[0].innerHTML : void 0;
                for (var b = 0; b < this.length; b++)this[b].innerHTML = a;
                return this
            }, text: function (a) {
                if ("undefined" == typeof a)return this[0] ? this[0].textContent.trim() : null;
                for (var b = 0; b < this.length; b++)this[b].textContent = a;
                return this
            }, is: function (c) {
                if (!this[0])return !1;
                var d, e;
                if ("string" == typeof c) {
                    var f = this[0];
                    if (f === document)return c === document;
                    if (f === window)return c === window;
                    if (f.matches)return f.matches(c);
                    if (f.webkitMatchesSelector)return f.webkitMatchesSelector(c);
                    if (f.mozMatchesSelector)return f.mozMatchesSelector(c);
                    if (f.msMatchesSelector)return f.msMatchesSelector(c);
                    for (d = b(c), e = 0; e < d.length; e++)if (d[e] === this[0])return !0;
                    return !1
                }
                if (c === document)return this[0] === document;
                if (c === window)return this[0] === window;
                if (c.nodeType || c instanceof a) {
                    for (d = c.nodeType ? [c] : c, e = 0; e < d.length; e++)if (d[e] === this[0])return !0;
                    return !1
                }
                return !1
            }, index: function () {
                if (this[0]) {
                    for (var a = this[0], b = 0; null !== (a = a.previousSibling);)1 === a.nodeType && b++;
                    return b
                }
            }, eq: function (b) {
                if ("undefined" == typeof b)return this;
                var c, d = this.length;
                return b > d - 1 ? new a([]) : b < 0 ? (c = d + b, new a(c < 0 ? [] : [this[c]])) : new a([this[b]])
            }, append: function (b) {
                var c, d;
                for (c = 0; c < this.length; c++)if ("string" == typeof b) {
                    var e = document.createElement("div");
                    for (e.innerHTML = b; e.firstChild;)this[c].appendChild(e.firstChild)
                } else if (b instanceof a)for (d = 0; d < b.length; d++)this[c].appendChild(b[d]); else this[c].appendChild(b);
                return this
            }, prepend: function (b) {
                var c, d;
                for (c = 0; c < this.length; c++)if ("string" == typeof b) {
                    var e = document.createElement("div");
                    for (e.innerHTML = b, d = e.childNodes.length - 1; d >= 0; d--)this[c].insertBefore(e.childNodes[d], this[c].childNodes[0])
                } else if (b instanceof a)for (d = 0; d < b.length; d++)this[c].insertBefore(b[d], this[c].childNodes[0]); else this[c].insertBefore(b, this[c].childNodes[0]);
                return this
            }, insertBefore: function (a) {
                for (var c = b(a), d = 0; d < this.length; d++)if (1 === c.length) c[0].parentNode.insertBefore(this[d], c[0]); else if (c.length > 1)for (var e = 0; e < c.length; e++)c[e].parentNode.insertBefore(this[d].cloneNode(!0), c[e])
            }, insertAfter: function (a) {
                for (var c = b(a), d = 0; d < this.length; d++)if (1 === c.length) c[0].parentNode.insertBefore(this[d], c[0].nextSibling); else if (c.length > 1)for (var e = 0; e < c.length; e++)c[e].parentNode.insertBefore(this[d].cloneNode(!0), c[e].nextSibling)
            }, next: function (c) {
                return new a(this.length > 0 ? c ? this[0].nextElementSibling && b(this[0].nextElementSibling).is(c) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
            }, nextAll: function (c) {
                var d = [], e = this[0];
                if (!e)return new a([]);
                for (; e.nextElementSibling;) {
                    var f = e.nextElementSibling;
                    c ? b(f).is(c) && d.push(f) : d.push(f), e = f
                }
                return new a(d)
            }, prev: function (c) {
                return new a(this.length > 0 ? c ? this[0].previousElementSibling && b(this[0].previousElementSibling).is(c) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
            }, prevAll: function (c) {
                var d = [], e = this[0];
                if (!e)return new a([]);
                for (; e.previousElementSibling;) {
                    var f = e.previousElementSibling;
                    c ? b(f).is(c) && d.push(f) : d.push(f), e = f
                }
                return new a(d)
            }, parent: function (a) {
                for (var c = [], d = 0; d < this.length; d++)a ? b(this[d].parentNode).is(a) && c.push(this[d].parentNode) : c.push(this[d].parentNode);
                return b(b.unique(c))
            }, parents: function (a) {
                for (var c = [], d = 0; d < this.length; d++)for (var e = this[d].parentNode; e;)a ? b(e).is(a) && c.push(e) : c.push(e), e = e.parentNode;
                return b(b.unique(c))
            }, find: function (b) {
                for (var c = [], d = 0; d < this.length; d++)for (var e = this[d].querySelectorAll(b), f = 0; f < e.length; f++)c.push(e[f]);
                return new a(c)
            }, children: function (c) {
                for (var d = [], e = 0; e < this.length; e++)for (var f = this[e].childNodes, g = 0; g < f.length; g++)c ? 1 === f[g].nodeType && b(f[g]).is(c) && d.push(f[g]) : 1 === f[g].nodeType && d.push(f[g]);
                return new a(b.unique(d))
            }, remove: function () {
                for (var a = 0; a < this.length; a++)this[a].parentNode && this[a].parentNode.removeChild(this[a]);
                return this
            }, add: function () {
                var a, c, d = this;
                for (a = 0; a < arguments.length; a++) {
                    var e = b(arguments[a]);
                    for (c = 0; c < e.length; c++)d[d.length] = e[c], d.length++
                }
                return d
            }
        }, b.fn = a.prototype, b.unique = function (a) {
            for (var b = [], c = 0; c < a.length; c++)b.indexOf(a[c]) === -1 && b.push(a[c]);
            return b
        }, b
    }()), e = ["jQuery", "Zepto", "Dom7"], f = 0; f < e.length; f++)window[e[f]] && a(window[e[f]]);
    var g;
    g = "undefined" == typeof d ? window.Dom7 || window.Zepto || window.jQuery : d, g && ("transitionEnd" in g.fn || (g.fn.transitionEnd = function (a) {
        function b(f) {
            if (f.target === this)for (a.call(this, f), c = 0; c < d.length; c++)e.off(d[c], b)
        }

        var c, d = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], e = this;
        if (a)for (c = 0; c < d.length; c++)e.on(d[c], b);
        return this
    }), "transform" in g.fn || (g.fn.transform = function (a) {
        for (var b = 0; b < this.length; b++) {
            var c = this[b].style;
            c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = a
        }
        return this
    }), "transition" in g.fn || (g.fn.transition = function (a) {
        "string" != typeof a && (a += "ms");
        for (var b = 0; b < this.length; b++) {
            var c = this[b].style;
            c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = a
        }
        return this
    }),
    "outerWidth" in g.fn || (g.fn.outerWidth = function (a) {
        return this.length > 0 ? a ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    })), window.Swiper = c
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
    "use strict";
    return window.Swiper
});

/*! Owl Carousel v2.2.1 */
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function (b, c) {
            this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {Default: "default", Inner: "inner", Outer: "outer"}, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl, e = {
                width: "auto",
                "margin-left": d ? b : "",
                "margin-right": d ? "" : b
            };
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null, d = this._items.length, e = !this.settings.autoWidth, f = [];
            for (a.items = {
                merge: !1,
                width: b
            }; d--;)c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4), f = 2 * Math.ceil(c.length / 2), g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "", i = "";
            for (g /= 2; g--;)b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;)d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var a = this.settings.stagePadding, b = this._coordinates, c = {
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || ""
            };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children();
            if (c && a.items.merge)for (; b--;)a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++)a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], e.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.setup = function () {
        var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
        c ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, e.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", {content: b});
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a]
        }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function () {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function (b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function (a) {
        var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)), f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current, f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function (b, c) {
        var d = -1, e = 30, f = this.width(), g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
    }, e.prototype.animate = function (b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : c ? this.$stage.animate({left: b + "px"}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: b + "px"})
    }, e.prototype.is = function (a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function (a) {
        if (a === d)return this._current;
        if (0 === this._items.length)return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {property: {name: "position", value: a}});
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function (b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
            return b
        })
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function (a, b) {
        var c = this._items.length, e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function (a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function (a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2, e = c + this._items.length, f = function (a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function (a, b) {
            return f(b)
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function (b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function (a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function (a, b) {
        var c = this.current(), d = null, e = a - this.relative(c), f = (e > 0) - (e < 0), g = this._items.length, h = this.minimum(), i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function (a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)))return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function () {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function (b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
            content: b,
            position: c
        })
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.preloadAutoWidthImages = function (b) {
        b.each(a.proxy(function (b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins)this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case"<":
                return d ? a > c : a < c;
            case">":
                return d ? a < c : a > c;
            case">=":
                return d ? a <= c : a >= c;
            case"<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function (b, c, d, f, g) {
        var h = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }, i = a.camelCase(a.grep(["on", b, d], function (a) {
            return a
        }).join("-").toLowerCase()), j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, h, c));
        return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function (b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function (a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function (a) {
        var c = {x: null, y: null};
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function (a) {
        return !isNaN(parseFloat(a))
    }, e.prototype.difference = function (a, b) {
        return {x: a.x - b.x, y: a.y - b.y}
    }, a.fn.owlCarousel = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var d = a(this), f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, e.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers)this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))"function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
                    this.load(b)
                }, this); f++ < e;)this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {lazyLoad: !1}, e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", {element: f, url: g}, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
                f.css({"background-image": 'url("' + g + '")', opacity: "1"}), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers)this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, e.prototype.update = function () {
        var b = this._core._current, c = b + this._core.settings.items, d = this._core.$stage.children().toArray().slice(b, c), e = [], f = 0;
        a.each(d, function (b, c) {
            e.push(a(c).height())
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers)this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, e.prototype.fetch = function (a, b) {
        var c = function () {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
        }(), d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"), e = a.attr("data-width") || this._core.settings.videoWidth, f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
        if (!g)throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else if (d[3].indexOf("vimeo") > -1) c = "vimeo"; else {
            if (!(d[3].indexOf("vzaar") > -1))throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function (b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (a) {
            e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
        };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length)return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a[0].thumbnail_large, l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a.framegrab_url, l(f)
            }
        })
    }, e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function (b) {
        var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function () {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this), "translate.owl.carousel": a.proxy(function (a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({left: b + "px"}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers)this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    },
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                a.namespace && this.play(b, c)
            }, this), "stop.owl.autoplay": a.proxy(function (a) {
                a.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype.play = function (a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, e.prototype._getNextTimeout = function (d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), d || this._core.settings.autoplayTimeout)
    }, e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    }, e.prototype.stop = function () {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0)
    }, e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers)this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function (b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function (b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function () {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides)this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers)this.$element.off(a, this._handlers[a]);
        for (b in this._controls)this._controls[b].remove();
        for (d in this.overides)this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))"function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function () {
        var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
                if (this._pages.push({start: Math.min(f, a - d), end: a - d + h - 1}), Math.min(f, a - d) === f)break;
                b = 0, ++c
            }
            b += this._core.mergers(this._core.relative(a))
        }
    }, e.prototype.draw = function () {
        var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }, e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function (a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function (b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function (c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c)return;
                    this._hashes[c] = b.content
                }
            }, this), "changed.owl.carousel": a.proxy(function (c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())), e = a.map(this._hashes, function (a, b) {
                        return a === d ? b : null
                    }).join();
                    if (!e || b.location.hash.slice(1) === e)return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
            var c = b.location.hash.substring(1), e = this._core.$stage.children(), f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {URLhashListener: !1}, e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers)this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))"function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    function e(b, c) {
        var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
            if (g[b] !== d)return e = !c || b, !1
        }), e
    }

    function f(a) {
        return e(a, !0)
    }

    var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, j = {
        csstransforms: function () {
            return !!e("transform")
        }, csstransforms3d: function () {
            return !!e("perspective")
        }, csstransitions: function () {
            return !!e("transition")
        }, cssanimations: function () {
            return !!e("animation")
        }
    };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);



/*! easyzoom 2.5.0 */
!function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        b(a)
    }) : "object" == typeof module && module.exports ? module.exports = a.EasyZoom = b(require("jquery")) : a.EasyZoom = b(a.jQuery)
}(this, function (a) {
    "use strict";
    function b(b, c) {
        this.$target = a(b), this.opts = a.extend({}, i, c, this.$target.data()), void 0 === this.isOpen && this._init()
    }

    var c, d, e, f, g, h, i = {
        loadingNotice: "Loading image",
        errorNotice: "The image could not be loaded",
        errorDuration: 2500,
        linkAttribute: "href",
        preventClicks: !0,
        beforeShow: a.noop,
        beforeHide: a.noop,
        onShow: a.noop,
        onHide: a.noop,
        onMove: a.noop
    };
    b.prototype._init = function () {
        this.$link = this.$target.find("a"), this.$image = this.$target.find("img"), this.$flyout = a('<div class="easyzoom-flyout" />'), this.$notice = a('<div class="easyzoom-notice" />'), this.$target.on({
            "mousemove.easyzoom touchmove.easyzoom": a.proxy(this._onMove, this),
            "mouseleave.easyzoom touchend.easyzoom": a.proxy(this._onLeave, this),
            "mouseenter.easyzoom touchstart.easyzoom": a.proxy(this._onEnter, this)
        }), this.opts.preventClicks && this.$target.on("click.easyzoom", function (a) {
            a.preventDefault()
        })
    }, b.prototype.show = function (a, b) {
        var g, h, i, j, k = this;
        if (this.opts.beforeShow.call(this) !== !1) {
            if (!this.isReady)return this._loadImage(this.$link.attr(this.opts.linkAttribute), function () {
                !k.isMouseOver && b || k.show(a)
            });
            this.$target.append(this.$flyout), g = this.$target.width(), h = this.$target.height(), i = this.$flyout.width(), j = this.$flyout.height(), c = this.$zoom.width() - i, d = this.$zoom.height() - j, c < 0 && (c = 0), d < 0 && (d = 0), e = c / g, f = d / h, this.isOpen = !0, this.opts.onShow.call(this), a && this._move(a)
        }
    }, b.prototype._onEnter = function (a) {
        var b = a.originalEvent.touches;
        this.isMouseOver = !0, b && 1 != b.length || (a.preventDefault(), this.show(a, !0))
    }, b.prototype._onMove = function (a) {
        this.isOpen && (a.preventDefault(), this._move(a))
    }, b.prototype._onLeave = function () {
        this.isMouseOver = !1, this.isOpen && this.hide()
    }, b.prototype._onLoad = function (a) {
        a.currentTarget.width && (this.isReady = !0, this.$notice.detach(), this.$flyout.html(this.$zoom), this.$target.removeClass("is-loading").addClass("is-ready"), a.data.call && a.data())
    }, b.prototype._onError = function () {
        var a = this;
        this.$notice.text(this.opts.errorNotice), this.$target.removeClass("is-loading").addClass("is-error"), this.detachNotice = setTimeout(function () {
            a.$notice.detach(), a.detachNotice = null
        }, this.opts.errorDuration)
    }, b.prototype._loadImage = function (b, c) {
        var d = new Image;
        this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)), this.$zoom = a(d).on("error", a.proxy(this._onError, this)).on("load", c, a.proxy(this._onLoad, this)), d.style.position = "absolute", d.src = b
    }, b.prototype._move = function (a) {
        if (0 === a.type.indexOf("touch")) {
            var b = a.touches || a.originalEvent.touches;
            g = b[0].pageX, h = b[0].pageY
        } else g = a.pageX || g, h = a.pageY || h;
        var i = this.$target.offset(), j = h - i.top, k = g - i.left, l = Math.ceil(j * f), m = Math.ceil(k * e);
        if (m < 0 || l < 0 || m > c || l > d) this.hide(); else {
            var n = l * -1, o = m * -1;
            this.$zoom.css({top: n, left: o}), this.opts.onMove.call(this, n, o)
        }
    }, b.prototype.hide = function () {
        this.isOpen && this.opts.beforeHide.call(this) !== !1 && (this.$flyout.detach(), this.isOpen = !1, this.opts.onHide.call(this))
    }, b.prototype.swap = function (b, c, d) {
        this.hide(), this.isReady = !1, this.detachNotice && clearTimeout(this.detachNotice), this.$notice.parent().length && this.$notice.detach(), this.$target.removeClass("is-loading is-ready is-error"), this.$image.attr({
            src: b,
            srcset: a.isArray(d) ? d.join() : d
        }), this.$link.attr(this.opts.linkAttribute, c)
    }, b.prototype.teardown = function () {
        this.hide(), this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"), this.detachNotice && clearTimeout(this.detachNotice), delete this.$link, delete this.$zoom, delete this.$image, delete this.$notice, delete this.$flyout, delete this.isOpen, delete this.isReady
    }, a.fn.easyZoom = function (c) {
        return this.each(function () {
            var d = a.data(this, "easyZoom");
            d ? void 0 === d.isOpen && d._init() : a.data(this, "easyZoom", new b(this, c))
        })
    }
});



/*! PhotoSwipe - v4.1.1 */
!function (a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipe = b()
}(this, function () {
    "use strict";
    var a = function (a, b, c, d) {
        var e = {
            features: null, bind: function (a, b, c, d) {
                var e = (d ? "remove" : "add") + "EventListener";
                b = b.split(" ");
                for (var f = 0; f < b.length; f++)b[f] && a[e](b[f], c, !1)
            }, isArray: function (a) {
                return a instanceof Array
            }, createEl: function (a, b) {
                var c = document.createElement(b || "div");
                return a && (c.className = a), c
            }, getScrollY: function () {
                var a = window.pageYOffset;
                return void 0 !== a ? a : document.documentElement.scrollTop
            }, unbind: function (a, b, c) {
                e.bind(a, b, c, !0)
            }, removeClass: function (a, b) {
                var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
                a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }, addClass: function (a, b) {
                e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b)
            }, hasClass: function (a, b) {
                return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
            }, getChildByClass: function (a, b) {
                for (var c = a.firstChild; c;) {
                    if (e.hasClass(c, b))return c;
                    c = c.nextSibling
                }
            }, arraySearch: function (a, b, c) {
                for (var d = a.length; d--;)if (a[d][c] === b)return d;
                return -1
            }, extend: function (a, b, c) {
                for (var d in b)if (b.hasOwnProperty(d)) {
                    if (c && a.hasOwnProperty(d))continue;
                    a[d] = b[d]
                }
            }, easing: {
                sine: {
                    out: function (a) {
                        return Math.sin(a * (Math.PI / 2))
                    }, inOut: function (a) {
                        return -(Math.cos(Math.PI * a) - 1) / 2
                    }
                }, cubic: {
                    out: function (a) {
                        return --a * a * a + 1
                    }
                }
            }, detectFeatures: function () {
                if (e.features)return e.features;
                var a = e.createEl(), b = a.style, c = "", d = {};
                if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !d.pointerEvent) {
                    var f = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && 8 > g && (d.isOldIOSPhone = !0))
                    }
                    var h = f.match(/Android\s([0-9\.]*)/), i = h ? h[1] : 0;
                    i = parseFloat(i), i >= 1 && (4.4 > i && (d.isOldAndroid = !0), d.androidVersion = i), d.isMobileOpera = /opera mini|opera mobi/i.test(f)
                }
                for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; 4 > n; n++) {
                    c = m[n];
                    for (var o = 0; 3 > o; o++)j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), !d[j] && k in b && (d[j] = k);
                    c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]))
                }
                if (!d.raf) {
                    var p = 0;
                    d.raf = function (a) {
                        var b = (new Date).getTime(), c = Math.max(0, 16 - (b - p)), d = window.setTimeout(function () {
                            a(b + c)
                        }, c);
                        return p = b + c, d
                    }, d.caf = function (a) {
                        clearTimeout(a)
                    }
                }
                return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, e.features = d, d
            }
        };
        e.detectFeatures(), e.features.oldIE && (e.bind = function (a, b, c, d) {
            b = b.split(" ");
            for (var e, f = (d ? "detach" : "attach") + "Event", g = function () {
                c.handleEvent.call(c)
            }, h = 0; h < b.length; h++)if (e = b[h])if ("object" == typeof c && c.handleEvent) {
                if (d) {
                    if (!c["oldIE" + e])return !1
                } else c["oldIE" + e] = g;
                a[f]("on" + e, c["oldIE" + e])
            } else a[f]("on" + e, c)
        });
        var f = this, g = 25, h = 3, i = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function (a) {
                return "A" === a.tagName
            },
            getDoubleTapZoom: function (a, b) {
                return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
        };
        e.extend(i, d);
        var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la = function () {
            return {x: 0, y: 0}
        }, ma = la(), na = la(), oa = la(), pa = {}, qa = 0, ra = {}, sa = la(), ta = 0, ua = !0, va = [], wa = {}, xa = !1, ya = function (a, b) {
            e.extend(f, b.publicMethods), va.push(a)
        }, za = function (a) {
            var b = _b();
            return a > b - 1 ? a - b : 0 > a ? b + a : a
        }, Aa = {}, Ba = function (a, b) {
            return Aa[a] || (Aa[a] = []), Aa[a].push(b)
        }, Ca = function (a) {
            var b = Aa[a];
            if (b) {
                var c = Array.prototype.slice.call(arguments);
                c.shift();
                for (var d = 0; d < b.length; d++)b[d].apply(f, c)
            }
        }, Da = function () {
            return (new Date).getTime()
        }, Ea = function (a) {
            ia = a, f.bg.style.opacity = a * i.bgOpacity
        }, Fa = function (a, b, c, d, e) {
            (!xa || e && e !== f.currItem) && (d /= e ? e.fitRatio : f.currItem.fitRatio), a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")"
        }, Ga = function (a) {
            da && (a && (s > f.currItem.fitRatio ? xa || (lc(f.currItem, !1, !0), xa = !0) : xa && (lc(f.currItem), xa = !1)), Fa(da, oa.x, oa.y, s))
        }, Ha = function (a) {
            a.container && Fa(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a)
        }, Ia = function (a, b) {
            b[E] = u + a + "px, 0px" + v
        }, Ja = function (a, b) {
            if (!i.loop && b) {
                var c = m + (sa.x * qa - a) / sa.x, d = Math.round(a - sb.x);
                (0 > c && d > 0 || c >= _b() - 1 && 0 > d) && (a = sb.x + d * i.mainScrollEndFriction)
            }
            sb.x = a, Ia(a, n)
        }, Ka = function (a, b) {
            var c = tb[a] - ra[a];
            return na[a] + ma[a] + c - c * (b / t)
        }, La = function (a, b) {
            a.x = b.x, a.y = b.y, b.id && (a.id = b.id)
        }, Ma = function (a) {
            a.x = Math.round(a.x), a.y = Math.round(a.y)
        }, Na = null, Oa = function () {
            Na && (e.unbind(document, "mousemove", Oa), e.addClass(a, "pswp--has_mouse"), i.mouseUsed = !0, Ca("mouseUsed")), Na = setTimeout(function () {
                Na = null
            }, 100)
        }, Pa = function () {
            e.bind(document, "keydown", f), N.transform && e.bind(f.scrollWrap, "click", f), i.mouseUsed || e.bind(document, "mousemove", Oa), e.bind(window, "resize scroll", f), Ca("bindEvents")
        }, Qa = function () {
            e.unbind(window, "resize", f), e.unbind(window, "scroll", r.scroll), e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Oa), N.transform && e.unbind(f.scrollWrap, "click", f), U && e.unbind(window, p, f), Ca("unbindEvents")
        }, Ra = function (a, b) {
            var c = hc(f.currItem, pa, a);
            return b && (ca = c), c
        }, Sa = function (a) {
            return a || (a = f.currItem), a.initialZoomLevel
        }, Ta = function (a) {
            return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1
        }, Ua = function (a, b, c, d) {
            return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], !0) : (c[a] = Ka(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] && (c[a] = b.max[a], !0))
        }, Va = function () {
            if (E) {
                var b = N.perspective && !G;
                return u = "translate" + (b ? "3d(" : "("), void(v = N.perspective ? ", 0px)" : ")")
            }
            E = "left", e.addClass(a, "pswp--ie"), Ia = function (a, b) {
                b.left = a + "px"
            }, Ha = function (a) {
                var b = a.fitRatio > 1 ? 1 : a.fitRatio, c = a.container.style, d = b * a.w, e = b * a.h;
                c.width = d + "px", c.height = e + "px", c.left = a.initialPosition.x + "px", c.top = a.initialPosition.y + "px"
            }, Ga = function () {
                if (da) {
                    var a = da, b = f.currItem, c = b.fitRatio > 1 ? 1 : b.fitRatio, d = c * b.w, e = c * b.h;
                    a.width = d + "px", a.height = e + "px", a.left = oa.x + "px", a.top = oa.y + "px"
                }
            }
        }, Wa = function (a) {
            var b = "";
            i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, f[b]()))
        }, Xa = function (a) {
            a && (X || W || ea || S) && (a.preventDefault(), a.stopPropagation())
        }, Ya = function () {
            f.setScrollOffset(0, e.getScrollY())
        }, Za = {}, $a = 0, _a = function (a) {
            Za[a] && (Za[a].raf && I(Za[a].raf), $a--, delete Za[a])
        }, ab = function (a) {
            Za[a] && _a(a), Za[a] || ($a++, Za[a] = {})
        }, bb = function () {
            for (var a in Za)Za.hasOwnProperty(a) && _a(a)
        }, cb = function (a, b, c, d, e, f, g) {
            var h, i = Da();
            ab(a);
            var j = function () {
                if (Za[a]) {
                    if (h = Da() - i, h >= d)return _a(a), f(c), void(g && g());
                    f((c - b) * e(h / d) + b), Za[a].raf = H(j)
                }
            };
            j()
        }, db = {
            shout: Ca, listen: Ba, viewportSize: pa, options: i, isMainScrollAnimating: function () {
                return ea
            }, getZoomLevel: function () {
                return s
            }, getCurrentIndex: function () {
                return m
            }, isDragging: function () {
                return U
            }, isZooming: function () {
                return _
            }, setScrollOffset: function (a, b) {
                ra.x = a, M = ra.y = b, Ca("updateScrollOffset", ra)
            }, applyZoomPan: function (a, b, c, d) {
                oa.x = b, oa.y = c, s = a, Ga(d)
            }, init: function () {
                if (!j && !k) {
                    var c;
                    f.framework = e, f.template = a, f.bg = e.getChildByClass(a, "pswp__bg"), J = a.className, j = !0, N = e.detectFeatures(), H = N.raf, I = N.caf, E = N.transform, L = N.oldIE, f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), n = f.container.style, f.itemHolders = y = [{
                        el: f.container.children[0],
                        wrap: 0,
                        index: -1
                    }, {el: f.container.children[1], wrap: 0, index: -1}, {
                        el: f.container.children[2],
                        wrap: 0,
                        index: -1
                    }], y[0].el.style.display = y[2].el.style.display = "none", Va(), r = {
                        resize: f.updateSize,
                        scroll: Ya,
                        keydown: Wa,
                        click: Xa
                    };
                    var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                    for (N.animationName && N.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0; c < va.length; c++)f["init" + va[c]]();
                    if (b) {
                        var g = f.ui = new b(f, e);
                        g.init()
                    }
                    Ca("firstUpdate"), m = m || i.index || 0, (isNaN(m) || 0 > m || m >= _b()) && (m = 0), f.currItem = $b(m), (N.isOldIOSPhone || N.isOldAndroid) && (ua = !1), a.setAttribute("aria-hidden", "false"), i.modal && (ua ? a.style.position = "fixed" : (a.style.position = "absolute", a.style.top = e.getScrollY() + "px")), void 0 === M && (Ca("initialLayout"), M = K = e.getScrollY());
                    var l = "pswp--open ";
                    for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), l += G ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", l += N.svg ? " pswp--svg" : "", e.addClass(a, l), f.updateSize(), o = -1, ta = null, c = 0; h > c; c++)Ia((c + o) * sa.x, y[c].el.style);
                    L || e.bind(f.scrollWrap, q, f), Ba("initialZoomInEnd", function () {
                        f.setContent(y[0], m - 1), f.setContent(y[2], m + 1), y[0].el.style.display = y[2].el.style.display = "block", i.focus && a.focus(), Pa()
                    }), f.setContent(y[1], m), f.updateCurrItem(), Ca("afterInit"), ua || (w = setInterval(function () {
                        $a || U || _ || s !== f.currItem.initialZoomLevel || f.updateSize()
                    }, 1e3)), e.addClass(a, "pswp--visible")
                }
            }, close: function () {
                j && (j = !1, k = !0, Ca("close"), Qa(), bc(f.currItem, null, !0, f.destroy))
            }, destroy: function () {
                Ca("destroy"), Wb && clearTimeout(Wb), a.setAttribute("aria-hidden", "true"), a.className = J, w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), yb(), bb(), Aa = null
            }, panTo: function (a, b, c) {
                c || (a > ca.min.x ? a = ca.min.x : a < ca.max.x && (a = ca.max.x), b > ca.min.y ? b = ca.min.y : b < ca.max.y && (b = ca.max.y)), oa.x = a, oa.y = b, Ga()
            }, handleEvent: function (a) {
                a = a || window.event, r[a.type] && r[a.type](a)
            }, goTo: function (a) {
                a = za(a);
                var b = a - m;
                ta = b, m = a, f.currItem = $b(m), qa -= b, Ja(sa.x * qa), bb(), ea = !1, f.updateCurrItem()
            }, next: function () {
                f.goTo(m + 1)
            }, prev: function () {
                f.goTo(m - 1)
            }, updateCurrZoomItem: function (a) {
                if (a && Ca("beforeChange", 0), y[1].el.children.length) {
                    var b = y[1].el.children[0];
                    da = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null
                } else da = null;
                ca = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, oa.x = ca.center.x, oa.y = ca.center.y, a && Ca("afterChange")
            }, invalidateCurrItems: function () {
                x = !0;
                for (var a = 0; h > a; a++)y[a].item && (y[a].item.needsUpdate = !0)
            }, updateCurrItem: function (a) {
                if (0 !== ta) {
                    var b, c = Math.abs(ta);
                    if (!(a && 2 > c)) {
                        f.currItem = $b(m), xa = !1, Ca("beforeChange", ta), c >= h && (o += ta + (ta > 0 ? -h : h), c = h);
                        for (var d = 0; c > d; d++)ta > 0 ? (b = y.shift(), y[h - 1] = b, o++, Ia((o + 2) * sa.x, b.el.style), f.setContent(b, m - c + d + 1 + 1)) : (b = y.pop(), y.unshift(b), o--, Ia(o * sa.x, b.el.style), f.setContent(b, m + c - d - 1 - 1));
                        if (da && 1 === Math.abs(ta)) {
                            var e = $b(z);
                            e.initialZoomLevel !== s && (hc(e, pa), lc(e), Ha(e))
                        }
                        ta = 0, f.updateCurrZoomItem(), z = m, Ca("afterChange")
                    }
                }
            }, updateSize: function (b) {
                if (!ua && i.modal) {
                    var c = e.getScrollY();
                    if (M !== c && (a.style.top = c + "px", M = c), !b && wa.x === window.innerWidth && wa.y === window.innerHeight)return;
                    wa.x = window.innerWidth, wa.y = window.innerHeight, a.style.height = wa.y + "px"
                }
                if (pa.x = f.scrollWrap.clientWidth, pa.y = f.scrollWrap.clientHeight, Ya(), sa.x = pa.x + Math.round(pa.x * i.spacing), sa.y = pa.y, Ja(sa.x * qa), Ca("beforeResize"), void 0 !== o) {
                    for (var d, g, j, k = 0; h > k; k++)d = y[k], Ia((k + o) * sa.x, d.el.style), j = m + k - 1, i.loop && _b() > 2 && (j = za(j)), g = $b(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : -1 === d.index && j >= 0 && f.setContent(d, j), g && g.container && (hc(g, pa), lc(g), Ha(g));
                    x = !1
                }
                t = s = f.currItem.initialZoomLevel, ca = f.currItem.bounds, ca && (oa.x = ca.center.x, oa.y = ca.center.y, Ga(!0)), Ca("resize")
            }, zoomTo: function (a, b, c, d, f) {
                b && (t = s, tb.x = Math.abs(b.x) - oa.x, tb.y = Math.abs(b.y) - oa.y, La(na, oa));
                var g = Ra(a, !1), h = {};
                Ua("x", g, h, a), Ua("y", g, h, a);
                var i = s, j = {x: oa.x, y: oa.y};
                Ma(h);
                var k = function (b) {
                    1 === b ? (s = a, oa.x = h.x, oa.y = h.y) : (s = (a - i) * b + i, oa.x = (h.x - j.x) * b + j.x, oa.y = (h.y - j.y) * b + j.y), f && f(b), Ga(1 === b)
                };
                c ? cb("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1)
            }
        }, eb = 30, fb = 10, gb = {}, hb = {}, ib = {}, jb = {}, kb = {}, lb = [], mb = {}, nb = [], ob = {}, pb = 0, qb = la(), rb = 0, sb = la(), tb = la(), ub = la(), vb = function (a, b) {
            return a.x === b.x && a.y === b.y
        }, wb = function (a, b) {
            return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g
        }, xb = function (a, b) {
            return ob.x = Math.abs(a.x - b.x), ob.y = Math.abs(a.y - b.y), Math.sqrt(ob.x * ob.x + ob.y * ob.y)
        }, yb = function () {
            Y && (I(Y), Y = null)
        }, zb = function () {
            U && (Y = H(zb), Pb())
        }, Ab = function () {
            return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel)
        }, Bb = function (a, b) {
            return !!a && (!(a.className && a.className.indexOf("pswp__scroll-wrap") > -1) && (b(a) ? a : Bb(a.parentNode, b)))
        }, Cb = {}, Db = function (a, b) {
            return Cb.prevent = !Bb(a.target, i.isClickableElement), Ca("preventDragEvent", a, b, Cb), Cb.prevent
        }, Eb = function (a, b) {
            return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b
        }, Fb = function (a, b, c) {
            c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y)
        }, Gb = function (a, b, c) {
            if (a - P > 50) {
                var d = nb.length > 2 ? nb.shift() : {};
                d.x = b, d.y = c, nb.push(d), P = a
            }
        }, Hb = function () {
            var a = oa.y - f.currItem.initialPosition.y;
            return 1 - Math.abs(a / (pa.y / 2))
        }, Ib = {}, Jb = {}, Kb = [], Lb = function (a) {
            for (; Kb.length > 0;)Kb.pop();
            return F ? (ka = 0, lb.forEach(function (a) {
                0 === ka ? Kb[0] = a : 1 === ka && (Kb[1] = a), ka++
            })) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Kb[0] = Eb(a.touches[0], Ib), a.touches.length > 1 && (Kb[1] = Eb(a.touches[1], Jb))) : (Ib.x = a.pageX, Ib.y = a.pageY, Ib.id = "", Kb[0] = Ib), Kb
        }, Mb = function (a, b) {
            var c, d, e, g, h = 0, j = oa[a] + b[a], k = b[a] > 0, l = sb.x + b.x, m = sb.x - mb.x;
            return c = j > ca.min[a] || j < ca.max[a] ? i.panEndFriction : 1, j = oa[a] + b[a] * c, !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (da ? "h" !== fa || "x" !== a || W || (k ? (j > ca.min[a] && (c = i.panEndFriction, h = ca.min[a] - j, d = ca.min[a] - na[a]), (0 >= d || 0 > m) && _b() > 1 ? (g = l, 0 > m && l > mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j)) : (j < ca.max[a] && (c = i.panEndFriction, h = j - ca.max[a], d = na[a] - ca.max[a]), (0 >= d || m > 0) && _b() > 1 ? (g = l, m > 0 && l < mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j))) : g = l, "x" !== a) ? void(ea || Z || s > f.currItem.fitRatio && (oa[a] += b[a] * c)) : (void 0 !== g && (Ja(g, !0), Z = g !== mb.x), ca.min.x !== ca.max.x && (void 0 !== e ? oa.x = e : Z || (oa.x += b.x * c)), void 0 !== g)
        }, Nb = function (a) {
            if (!("mousedown" === a.type && a.button > 0)) {
                if (Zb)return void a.preventDefault();
                if (!T || "mousedown" !== a.type) {
                    if (Db(a, !0) && a.preventDefault(), Ca("pointerDown"), F) {
                        var b = e.arraySearch(lb, a.pointerId, "id");
                        0 > b && (b = lb.length), lb[b] = {x: a.pageX, y: a.pageY, id: a.pointerId}
                    }
                    var c = Lb(a), d = c.length;
                    $ = null, bb(), U && 1 !== d || (U = ga = !0, e.bind(window, p, f), R = ja = ha = S = Z = X = V = W = !1, fa = null, Ca("firstTouchStart", c), La(na, oa), ma.x = ma.y = 0, La(jb, c[0]), La(kb, jb), mb.x = sa.x * qa, nb = [{
                        x: jb.x,
                        y: jb.y
                    }], P = O = Da(), Ra(s, !0), yb(), zb()), !_ && d > 1 && !ea && !Z && (t = s, W = !1, _ = V = !0, ma.y = ma.x = 0, La(na, oa), La(gb, c[0]), La(hb, c[1]), Fb(gb, hb, ub), tb.x = Math.abs(ub.x) - oa.x, tb.y = Math.abs(ub.y) - oa.y, aa = ba = xb(gb, hb))
                }
            }
        }, Ob = function (a) {
            if (a.preventDefault(), F) {
                var b = e.arraySearch(lb, a.pointerId, "id");
                if (b > -1) {
                    var c = lb[b];
                    c.x = a.pageX, c.y = a.pageY
                }
            }
            if (U) {
                var d = Lb(a);
                if (fa || X || _) $ = d; else if (sb.x !== sa.x * qa) fa = "h"; else {
                    var f = Math.abs(d[0].x - jb.x) - Math.abs(d[0].y - jb.y);
                    Math.abs(f) >= fb && (fa = f > 0 ? "h" : "v", $ = d)
                }
            }
        }, Pb = function () {
            if ($) {
                var a = $.length;
                if (0 !== a)if (La(gb, $[0]), ib.x = gb.x - jb.x, ib.y = gb.y - jb.y, _ && a > 1) {
                    if (jb.x = gb.x, jb.y = gb.y, !ib.x && !ib.y && vb($[1], hb))return;
                    La(hb, $[1]), W || (W = !0, Ca("zoomGestureStarted"));
                    var b = xb(gb, hb), c = Ub(b);
                    c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ja = !0);
                    var d = 1, e = Sa(), g = Ta();
                    if (e > c)if (i.pinchToClose && !ja && t <= f.currItem.initialZoomLevel) {
                        var h = e - c, j = 1 - h / (e / 1.2);
                        Ea(j), Ca("onPinchClose", j), ha = !0
                    } else d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3); else c > g && (d = (c - g) / (6 * e), d > 1 && (d = 1), c = g + d * e);
                    0 > d && (d = 0), aa = b, Fb(gb, hb, qb), ma.x += qb.x - ub.x, ma.y += qb.y - ub.y, La(ub, qb), oa.x = Ka("x", c), oa.y = Ka("y", c), R = c > s, s = c, Ga()
                } else {
                    if (!fa)return;
                    if (ga && (ga = !1, Math.abs(ib.x) >= fb && (ib.x -= $[0].x - kb.x), Math.abs(ib.y) >= fb && (ib.y -= $[0].y - kb.y)), jb.x = gb.x, jb.y = gb.y, 0 === ib.x && 0 === ib.y)return;
                    if ("v" === fa && i.closeOnVerticalDrag && !Ab()) {
                        ma.y += ib.y, oa.y += ib.y;
                        var k = Hb();
                        return S = !0, Ca("onVerticalDrag", k), Ea(k), void Ga()
                    }
                    Gb(Da(), gb.x, gb.y), X = !0, ca = f.currItem.bounds;
                    var l = Mb("x", ib);
                    l || (Mb("y", ib), Ma(oa), Ga())
                }
            }
        }, Qb = function (a) {
            if (N.isOldAndroid) {
                if (T && "mouseup" === a.type)return;
                a.type.indexOf("touch") > -1 && (clearTimeout(T), T = setTimeout(function () {
                    T = 0
                }, 600))
            }
            Ca("pointerUp"), Db(a, !1) && a.preventDefault();
            var b;
            if (F) {
                var c = e.arraySearch(lb, a.pointerId, "id");
                if (c > -1)if (b = lb.splice(c, 1)[0], navigator.pointerEnabled) b.type = a.pointerType || "mouse"; else {
                    var d = {4: "mouse", 2: "touch", 3: "pen"};
                    b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse")
                }
            }
            var g, h = Lb(a), j = h.length;
            if ("mouseup" === a.type && (j = 0), 2 === j)return $ = null, !0;
            1 === j && La(kb, h[0]), 0 !== j || fa || ea || (b || ("mouseup" === a.type ? b = {
                x: a.pageX,
                y: a.pageY,
                type: "mouse"
            } : a.changedTouches && a.changedTouches[0] && (b = {
                x: a.changedTouches[0].pageX,
                y: a.changedTouches[0].pageY,
                type: "touch"
            })), Ca("touchRelease", a, b));
            var k = -1;
            if (0 === j && (U = !1, e.unbind(window, p, f), yb(), _ ? k = 0 : -1 !== rb && (k = Da() - rb)), rb = 1 === j ? Da() : -1, g = -1 !== k && 150 > k ? "zoom" : "swipe", _ && 2 > j && (_ = !1, 1 === j && (g = "zoomPointerUp"), Ca("zoomGestureEnded")), $ = null, X || W || ea || S)if (bb(), Q || (Q = Rb()), Q.calculateSwipeSpeed("x"), S) {
                var l = Hb();
                if (l < i.verticalDragRange) f.close(); else {
                    var m = oa.y, n = ia;
                    cb("verticalDrag", 0, 1, 300, e.easing.cubic.out, function (a) {
                        oa.y = (f.currItem.initialPosition.y - m) * a + m, Ea((1 - n) * a + n), Ga()
                    }), Ca("onVerticalDrag", 1)
                }
            } else {
                if ((Z || ea) && 0 === j) {
                    var o = Tb(g, Q);
                    if (o)return;
                    g = "zoomPointerUp"
                }
                if (!ea)return "swipe" !== g ? void Vb() : void(!Z && s > f.currItem.fitRatio && Sb(Q))
            }
        }, Rb = function () {
            var a, b, c = {
                lastFlickOffset: {},
                lastFlickDist: {},
                lastFlickSpeed: {},
                slowDownRatio: {},
                slowDownRatioReverse: {},
                speedDecelerationRatio: {},
                speedDecelerationRatioAbs: {},
                distanceOffset: {},
                backAnimDestination: {},
                backAnimStarted: {},
                calculateSwipeSpeed: function (d) {
                    nb.length > 1 ? (a = Da() - P + 50, b = nb[nb.length - 2][d]) : (a = Da() - O, b = kb[d]), c.lastFlickOffset[d] = jb[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), c.lastFlickDist[d] > 20 ? c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a : c.lastFlickSpeed[d] = 0, Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1
                },
                calculateOverBoundsAnimOffset: function (a, b) {
                    c.backAnimStarted[a] || (oa[a] > ca.min[a] ? c.backAnimDestination[a] = ca.min[a] : oa[a] < ca.max[a] && (c.backAnimDestination[a] = ca.max[a]), void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, cb("bounceZoomPan" + a, oa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function (b) {
                        oa[a] = b, Ga()
                    }))))
                },
                calculateAnimOffset: function (a) {
                    c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, oa[a] += c.distanceOffset[a])
                },
                panAnimLoop: function () {
                    return Za.zoomPan && (Za.zoomPan.raf = H(c.panAnimLoop), c.now = Da(), c.timeDiff = c.now - c.lastNow, c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Ga(), c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05) ? (oa.x = Math.round(oa.x), oa.y = Math.round(oa.y), Ga(), void _a("zoomPan")) : void 0
                }
            };
            return c
        }, Sb = function (a) {
            return a.calculateSwipeSpeed("y"), ca = f.currItem.bounds, a.backAnimDestination = {}, a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (ab("zoomPan"), a.lastNow = Da(), void a.panAnimLoop())
        }, Tb = function (a, b) {
            var c;
            ea || (pb = m);
            var d;
            if ("swipe" === a) {
                var g = jb.x - kb.x, h = b.lastFlickDist.x < 10;
                g > eb && (h || b.lastFlickOffset.x > 20) ? d = -1 : -eb > g && (h || b.lastFlickOffset.x < -20) && (d = 1)
            }
            var j;
            d && (m += d, 0 > m ? (m = i.loop ? _b() - 1 : 0, j = !0) : m >= _b() && (m = i.loop ? 0 : _b() - 1, j = !0), (!j || i.loop) && (ta += d, qa -= d, c = !0));
            var k, l = sa.x * qa, n = Math.abs(l - sb.x);
            return c || l > sb.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, pb === m && (c = !1), ea = !0, Ca("mainScrollAnimStart"), cb("mainScroll", sb.x, l, k, e.easing.cubic.out, Ja, function () {
                bb(), ea = !1, pb = -1, (c || pb !== m) && f.updateCurrItem(), Ca("mainScrollAnimComplete")
            }), c && f.updateCurrItem(!0), c
        }, Ub = function (a) {
            return 1 / ba * a * t
        }, Vb = function () {
            var a = s, b = Sa(), c = Ta();
            b > s ? a = b : s > c && (a = c);
            var d, g = 1, h = ia;
            return ha && !R && !ja && b > s ? (f.close(), !0) : (ha && (d = function (a) {
                Ea((g - h) * a + h)
            }), f.zoomTo(a, 0, 200, e.easing.cubic.out, d), !0)
        };
        ya("Gestures", {
            publicMethods: {
                initGestures: function () {
                    var a = function (a, b, c, d, e) {
                        A = a + b, B = a + c, C = a + d, D = e ? a + e : ""
                    };
                    F = N.pointerEvent, F && N.touch && (N.touch = !1), F ? navigator.pointerEnabled ? a("pointer", "down", "move", "up", "cancel") : a("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (a("touch", "start", "move", "end", "cancel"), G = !0) : a("mouse", "down", "move", "up"), p = B + " " + C + " " + D, q = A, F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), f.likelyTouchDevice = G, r[A] = Nb, r[B] = Ob, r[C] = Qb, D && (r[D] = r[C]), N.touch && (q += " mousedown", p += " mousemove mouseup", r.mousedown = r[A], r.mousemove = r[B], r.mouseup = r[C]), G || (i.allowPanToNext = !1)
                }
            }
        });
        var Wb, Xb, Yb, Zb, $b, _b, ac, bc = function (b, c, d, g) {
            Wb && clearTimeout(Wb), Zb = !0, Yb = !0;
            var h;
            b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
            var j = d ? i.hideAnimationDuration : i.showAnimationDuration, k = function () {
                _a("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Ea(1), c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Ca("initialZoom" + (d ? "OutEnd" : "InEnd"))), g && g(), Zb = !1
            };
            if (!j || !h || void 0 === h.x)return Ca("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), a.style.opacity = d ? 0 : 1, Ea(1), void(j ? setTimeout(function () {
                k()
            }, j) : k());
            var n = function () {
                var c = l, g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
                b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, oa.x = h.x, oa.y = h.y - K, f[g ? "template" : "bg"].style.opacity = .001, Ga()), ab("initialZoom"), d && !c && e.removeClass(a, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity") : setTimeout(function () {
                    e.addClass(a, "pswp--animate_opacity")
                }, 30)), Wb = setTimeout(function () {
                    if (Ca("initialZoom" + (d ? "Out" : "In")), d) {
                        var f = h.w / b.w, i = {x: oa.x, y: oa.y}, l = s, m = ia, n = function (b) {
                            1 === b ? (s = f, oa.x = h.x, oa.y = h.y - M) : (s = (f - l) * b + l, oa.x = (h.x - i.x) * b + i.x, oa.y = (h.y - M - i.y) * b + i.y), Ga(), g ? a.style.opacity = 1 - b : Ea(m - b * m)
                        };
                        c ? cb("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Wb = setTimeout(k, j + 20))
                    } else s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), Ea(1), g ? a.style.opacity = 1 : Ea(1), Wb = setTimeout(k, j + 20)
                }, d ? 25 : 90)
            };
            n()
        }, cc = {}, dc = [], ec = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function () {
                return Xb.length
            }
        }, fc = function () {
            return {center: {x: 0, y: 0}, max: {x: 0, y: 0}, min: {x: 0, y: 0}}
        }, gc = function (a, b, c) {
            var d = a.bounds;
            d.center.x = Math.round((cc.x - b) / 2), d.center.y = Math.round((cc.y - c) / 2) + a.vGap.top, d.max.x = b > cc.x ? Math.round(cc.x - b) : d.center.x, d.max.y = c > cc.y ? Math.round(cc.y - c) + a.vGap.top : d.center.y, d.min.x = b > cc.x ? 0 : d.center.x, d.min.y = c > cc.y ? a.vGap.top : d.center.y
        }, hc = function (a, b, c) {
            if (a.src && !a.loadError) {
                var d = !c;
                if (d && (a.vGap || (a.vGap = {
                        top: 0,
                        bottom: 0
                    }), Ca("parseVerticalMargin", a)), cc.x = b.x, cc.y = b.y - a.vGap.top - a.vGap.bottom, d) {
                    var e = cc.x / a.w, f = cc.y / a.h;
                    a.fitRatio = f > e ? e : f;
                    var g = i.scaleMode;
                    "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, a.bounds || (a.bounds = fc())
                }
                if (!c)return;
                return gc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds
            }
            return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = fc(), a.initialPosition = a.bounds.center, a.bounds
        }, ic = function (a, b, c, d, e, g) {
            b.loadError || d && (b.imageAppended = !0, lc(b, d, b === f.currItem && xa), c.appendChild(d), g && setTimeout(function () {
                b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null)
            }, 500))
        }, jc = function (a) {
            a.loading = !0, a.loaded = !1;
            var b = a.img = e.createEl("pswp__img", "img"), c = function () {
                a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, b.onload = b.onerror = null, b = null
            };
            return b.onload = c, b.onerror = function () {
                a.loadError = !0, c()
            }, b.src = a.src, b
        }, kc = function (a, b) {
            return a.src && a.loadError && a.container ? (b && (a.container.innerHTML = ""), a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0) : void 0
        }, lc = function (a, b, c) {
            if (a.src) {
                b || (b = a.container.lastChild);
                var d = c ? a.w : Math.round(a.w * a.fitRatio), e = c ? a.h : Math.round(a.h * a.fitRatio);
                a.placeholder && !a.loaded && (a.placeholder.style.width = d + "px", a.placeholder.style.height = e + "px"), b.style.width = d + "px", b.style.height = e + "px"
            }
        }, mc = function () {
            if (dc.length) {
                for (var a, b = 0; b < dc.length; b++)a = dc[b], a.holder.index === a.index && ic(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
                dc = []
            }
        };
        ya("Controller", {
            publicMethods: {
                lazyLoadItem: function (a) {
                    a = za(a);
                    var b = $b(a);
                    b && (!b.loaded && !b.loading || x) && (Ca("gettingData", a, b), b.src && jc(b))
                }, initController: function () {
                    e.extend(i, ec, !0), f.items = Xb = c, $b = f.getItemAt, _b = i.getNumItemsFn, ac = i.loop, _b() < 3 && (i.loop = !1), Ba("beforeChange", function (a) {
                        var b, c = i.preload, d = null === a || a >= 0, e = Math.min(c[0], _b()), g = Math.min(c[1], _b());
                        for (b = 1; (d ? g : e) >= b; b++)f.lazyLoadItem(m + b);
                        for (b = 1; (d ? e : g) >= b; b++)f.lazyLoadItem(m - b)
                    }), Ba("initialLayout", function () {
                        f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m)
                    }), Ba("mainScrollAnimComplete", mc), Ba("initialZoomInEnd", mc), Ba("destroy", function () {
                        for (var a, b = 0; b < Xb.length; b++)a = Xb[b], a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
                        dc = null
                    })
                }, getItemAt: function (a) {
                    return a >= 0 && void 0 !== Xb[a] && Xb[a]
                }, allowProgressiveImg: function () {
                    return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200
                }, setContent: function (a, b) {
                    i.loop && (b = za(b));
                    var c = f.getItemAt(a.index);
                    c && (c.container = null);
                    var d, g = f.getItemAt(b);
                    if (!g)return void(a.el.innerHTML = "");
                    Ca("gettingData", b, g), a.index = b, a.item = g;
                    var h = g.container = e.createEl("pswp__zoom-wrap");
                    if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), kc(g), hc(g, pa), !g.src || g.loadError || g.loaded) g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), d.style.opacity = 1, d.src = g.src, lc(g, d), ic(b, g, h, d, !0)); else {
                        if (g.loadComplete = function (c) {
                                if (j) {
                                    if (a && a.index === b) {
                                        if (kc(c, !0))return c.loadComplete = c.img = null, hc(c, pa), Ha(c), void(a.index === m && f.updateCurrZoomItem());
                                        c.imageAppended ? !Zb && c.placeholder && (c.placeholder.style.display = "none", c.placeholder = null) : N.transform && (ea || Zb) ? dc.push({
                                            item: c,
                                            baseDiv: h,
                                            img: c.img,
                                            index: b,
                                            holder: a,
                                            clearPlaceholder: !0
                                        }) : ic(b, c, h, c.img, ea || Zb, !0)
                                    }
                                    c.loadComplete = null, c.img = null, Ca("imageLoadComplete", b, c)
                                }
                            }, e.features.transform) {
                            var k = "pswp__img pswp__img--placeholder";
                            k += g.msrc ? "" : " pswp__img--placeholder--blank";
                            var l = e.createEl(k, g.msrc ? "img" : "");
                            g.msrc && (l.src = g.msrc), lc(g, l), h.appendChild(l), g.placeholder = l
                        }
                        g.loading || jc(g), f.allowProgressiveImg() && (!Yb && N.transform ? dc.push({
                            item: g,
                            baseDiv: h,
                            img: g.img,
                            index: b,
                            holder: a
                        }) : ic(b, g, h, g.img, !0, !0))
                    }
                    Yb || b !== m ? Ha(g) : (da = h.style, bc(g, d || g.img)), a.el.innerHTML = "", a.el.appendChild(h)
                }, cleanSlide: function (a) {
                    a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1
                }
            }
        });
        var nc, oc = {}, pc = function (a, b, c) {
            var d = document.createEvent("CustomEvent"), e = {
                origEvent: a,
                target: a.target,
                releasePoint: b,
                pointerType: c || "touch"
            };
            d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d)
        };
        ya("Tap", {
            publicMethods: {
                initTap: function () {
                    Ba("firstTouchStart", f.onTapStart), Ba("touchRelease", f.onTapRelease), Ba("destroy", function () {
                        oc = {}, nc = null
                    })
                }, onTapStart: function (a) {
                    a.length > 1 && (clearTimeout(nc), nc = null)
                }, onTapRelease: function (a, b) {
                    if (b && !X && !V && !$a) {
                        var c = b;
                        if (nc && (clearTimeout(nc), nc = null, wb(c, oc)))return void Ca("doubleTap", c);
                        if ("mouse" === b.type)return void pc(a, b, "mouse");
                        var d = a.target.tagName.toUpperCase();
                        if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap"))return void pc(a, b);
                        La(oc, c), nc = setTimeout(function () {
                            pc(a, b), nc = null
                        }, 300)
                    }
                }
            }
        });
        var qc;
        ya("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function () {
                    L || (G ? Ba("mouseUsed", function () {
                        f.setupDesktopZoom()
                    }) : f.setupDesktopZoom(!0))
                }, setupDesktopZoom: function (b) {
                    qc = {};
                    var c = "wheel mousewheel DOMMouseScroll";
                    Ba("bindEvents", function () {
                        e.bind(a, c, f.handleMouseWheel)
                    }), Ba("unbindEvents", function () {
                        qc && e.unbind(a, c, f.handleMouseWheel)
                    }), f.mouseZoomedIn = !1;
                    var d, g = function () {
                        f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), f.mouseZoomedIn = !1), 1 > s ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), h()
                    }, h = function () {
                        d && (e.removeClass(a, "pswp--dragging"), d = !1)
                    };
                    Ba("resize", g), Ba("afterChange", g), Ba("pointerDown", function () {
                        f.mouseZoomedIn && (d = !0, e.addClass(a, "pswp--dragging"))
                    }), Ba("pointerUp", h), b || g()
                }, handleMouseWheel: function (a) {
                    if (s <= f.currItem.fitRatio)return i.modal && (!i.closeOnScroll || $a || U ? a.preventDefault() : E && Math.abs(a.deltaY) > 2 && (l = !0, f.close())), !0;
                    if (a.stopPropagation(), qc.x = 0, "deltaX" in a) 1 === a.deltaMode ? (qc.x = 18 * a.deltaX, qc.y = 18 * a.deltaY) : (qc.x = a.deltaX, qc.y = a.deltaY); else if ("wheelDelta" in a) a.wheelDeltaX && (qc.x = -.16 * a.wheelDeltaX), a.wheelDeltaY ? qc.y = -.16 * a.wheelDeltaY : qc.y = -.16 * a.wheelDelta; else {
                        if (!("detail" in a))return;
                        qc.y = a.detail
                    }
                    Ra(s, !0);
                    var b = oa.x - qc.x, c = oa.y - qc.y;
                    (i.modal || b <= ca.min.x && b >= ca.max.x && c <= ca.min.y && c >= ca.max.y) && a.preventDefault(), f.panTo(b, c)
                }, toggleDesktopZoom: function (b) {
                    b = b || {x: pa.x / 2 + ra.x, y: pa.y / 2 + ra.y};
                    var c = i.getDoubleTapZoom(!0, f.currItem), d = s === c;
                    f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in")
                }
            }
        });
        var rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc = {history: !0, galleryUID: 1}, Ec = function () {
            return Bc.hash.substring(1)
        }, Fc = function () {
            rc && clearTimeout(rc), tc && clearTimeout(tc)
        }, Gc = function () {
            var a = Ec(), b = {};
            if (a.length < 5)return b;
            var c, d = a.split("&");
            for (c = 0; c < d.length; c++)if (d[c]) {
                var e = d[c].split("=");
                e.length < 2 || (b[e[0]] = e[1])
            }
            if (i.galleryPIDs) {
                var f = b.pid;
                for (b.pid = 0, c = 0; c < Xb.length; c++)if (Xb[c].pid === f) {
                    b.pid = c;
                    break
                }
            } else b.pid = parseInt(b.pid, 10) - 1;
            return b.pid < 0 && (b.pid = 0), b
        }, Hc = function () {
            if (tc && clearTimeout(tc), $a || U)return void(tc = setTimeout(Hc, 500));
            uc ? clearTimeout(sc) : uc = !0;
            var a = m + 1, b = $b(m);
            b.hasOwnProperty("pid") && (a = b.pid);
            var c = xc + "&gid=" + i.galleryUID + "&pid=" + a;
            yc || -1 === Bc.hash.indexOf(c) && (Ac = !0);
            var d = Bc.href.split("#")[0] + "#" + c;
            Cc ? "#" + c !== window.location.hash && history[yc ? "replaceState" : "pushState"]("", document.title, d) : yc ? Bc.replace(d) : Bc.hash = c, yc = !0, sc = setTimeout(function () {
                uc = !1
            }, 60)
        };
        ya("History", {
            publicMethods: {
                initHistory: function () {
                    if (e.extend(i, Dc, !0), i.history) {
                        Bc = window.location, Ac = !1, zc = !1, yc = !1, xc = Ec(), Cc = "pushState" in history, xc.indexOf("gid=") > -1 && (xc = xc.split("&gid=")[0], xc = xc.split("?gid=")[0]), Ba("afterChange", f.updateURL), Ba("unbindEvents", function () {
                            e.unbind(window, "hashchange", f.onHashChange)
                        });
                        var a = function () {
                            wc = !0, zc || (Ac ? history.back() : xc ? Bc.hash = xc : Cc ? history.pushState("", document.title, Bc.pathname + Bc.search) : Bc.hash = ""), Fc()
                        };
                        Ba("unbindEvents", function () {
                            l && a()
                        }), Ba("destroy", function () {
                            wc || a()
                        }), Ba("firstUpdate", function () {
                            m = Gc().pid
                        });
                        var b = xc.indexOf("pid=");
                        b > -1 && (xc = xc.substring(0, b), "&" === xc.slice(-1) && (xc = xc.slice(0, -1))), setTimeout(function () {
                            j && e.bind(window, "hashchange", f.onHashChange)
                        }, 40)
                    }
                }, onHashChange: function () {
                    return Ec() === xc ? (zc = !0, void f.close()) : void(uc || (vc = !0, f.goTo(Gc().pid), vc = !1))
                }, updateURL: function () {
                    Fc(), vc || (yc ? rc = setTimeout(Hc, 800) : Hc())
                }
            }
        }), e.extend(f, db)
    };
    return a
});
!function (a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b()
}(this, function () {
    "use strict";
    var a = function (a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this, w = !1, x = !0, y = !0, z = {
            barsSize: {
                top: 44,
                bottom: "auto"
            },
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            addCaptionHTMLFn: function (a, b) {
                return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1)
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
            getImageURLForShare: function () {
                return a.currItem.src || ""
            },
            getPageURLForShare: function () {
                return window.location.href
            },
            getTextForShare: function () {
                return a.currItem.title || ""
            },
            indexIndicatorSep: " / "
        }, A = function (a) {
            if (r)return !0;
            a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
            for (var c, d, e = a.target || a.srcElement, f = e.className, g = 0; g < S.length; g++)c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
            if (d) {
                a.stopPropagation && a.stopPropagation(), r = !0;
                var h = b.features.isOldAndroid ? 600 : 30;
                s = setTimeout(function () {
                    r = !1
                }, h)
            }
        }, B = function () {
            return !a.likelyTouchDevice || q.mouseUsed || screen.width > 1200
        }, C = function (a, c, d) {
            b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c)
        }, D = function () {
            var a = 1 === q.getNumItemsFn();
            a !== p && (C(d, "ui--one-slide", a), p = a)
        }, E = function () {
            C(i, "share-modal--hidden", y)
        }, F = function () {
            return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function () {
                y && E()
            }, 300)) : (E(), setTimeout(function () {
                y || b.addClass(i, "pswp__share-modal--fade-in")
            }, 30)), y || H(), !1
        }, G = function (b) {
            b = b || window.event;
            var c = b.target || b.srcElement;
            return a.shout("shareLinkClick", b, c), !!c.href && (!!c.hasAttribute("download") || (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1))
        }, H = function () {
            for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++)a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
            i.children[0].innerHTML = f, i.children[0].onclick = G
        }, I = function (a) {
            for (var c = 0; c < q.closeElClasses.length; c++)if (b.hasClass(a, "pswp__" + q.closeElClasses[c]))return !0
        }, J = 0, K = function () {
            clearTimeout(u), J = 0, k && v.setIdle(!1)
        }, L = function (a) {
            a = a ? a : window.event;
            var b = a.relatedTarget || a.toElement;
            b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function () {
                v.setIdle(!0)
            }, q.timeToIdleOutside))
        }, M = function () {
            q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"))
        }, N = function () {
            q.preloaderEl && (O(!0), l("beforeChange", function () {
                clearTimeout(o), o = setTimeout(function () {
                    a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0)
                }, q.loadingIndicatorDelay)
            }), l("imageLoadComplete", function (b, c) {
                a.currItem === c && O(!0)
            }))
        }, O = function (a) {
            n !== a && (C(m, "preloader--active", !a), n = a)
        }, P = function (a) {
            var c = a.vGap;
            if (B()) {
                var g = q.barsSize;
                if (q.captionEl && "auto" === g.bottom)if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
                    var h = f.clientHeight;
                    c.bottom = parseInt(h, 10) || 44
                } else c.bottom = g.top; else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
                c.top = g.top
            } else c.top = c.bottom = 0
        }, Q = function () {
            q.timeToIdle && l("mouseUsed", function () {
                b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function () {
                    J++, 2 === J && v.setIdle(!0)
                }, q.timeToIdle / 2)
            })
        }, R = function () {
            l("onVerticalDrag", function (a) {
                x && .95 > a ? v.hideControls() : !x && a >= .95 && v.showControls()
            });
            var a;
            l("onPinchClose", function (b) {
                x && .9 > b ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls()
            }), l("zoomGestureEnded", function () {
                a = !1, a && !x && v.showControls()
            })
        }, S = [{
            name: "caption", option: "captionEl", onInit: function (a) {
                e = a
            }
        }, {
            name: "share-modal", option: "shareEl", onInit: function (a) {
                i = a
            }, onTap: function () {
                F()
            }
        }, {
            name: "button--share", option: "shareEl", onInit: function (a) {
                h = a
            }, onTap: function () {
                F()
            }
        }, {name: "button--zoom", option: "zoomEl", onTap: a.toggleDesktopZoom}, {
            name: "counter",
            option: "counterEl",
            onInit: function (a) {
                g = a
            }
        }, {name: "button--close", option: "closeEl", onTap: a.close}, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: a.prev
        }, {name: "button--arrow--right", option: "arrowEl", onTap: a.next}, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function () {
                c.isFullscreen() ? c.exit() : c.enter()
            }
        }, {
            name: "preloader", option: "preloaderEl", onInit: function (a) {
                m = a
            }
        }], T = function () {
            var a, c, e, f = function (d) {
                if (d)for (var f = d.length, g = 0; f > g; g++) {
                    a = d[g], c = a.className;
                    for (var h = 0; h < S.length; h++)e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"))
                }
            };
            f(d.children);
            var g = b.getChildByClass(d, "pswp__top-bar");
            g && f(g.children)
        };
        v.init = function () {
            b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function (b) {
                var c = a.currItem.initialZoomLevel;
                a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333)
            }), l("preventDragEvent", function (a, b, c) {
                var d = a.target || a.srcElement;
                d && d.className && a.type.indexOf("mouse") > -1 && (d.className.indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1)
            }), l("bindEvents", function () {
                b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver)
            }), l("unbindEvents", function () {
                y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null)
            }), l("destroy", function () {
                q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1)
            }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function () {
                q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden")
            }), l("initialZoomOut", function () {
                b.addClass(d, "pswp__ui--hidden")
            }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N()
        }, v.setIdle = function (a) {
            k = a, C(d, "ui--idle", a)
        }, v.update = function () {
            x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D()
        }, v.updateFullscreen = function (d) {
            d && setTimeout(function () {
                a.setScrollOffset(0, b.getScrollY())
            }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs")
        }, v.updateIndexIndicator = function () {
            q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn())
        }, v.onGlobalTap = function (c) {
            c = c || window.event;
            var d = c.target || c.srcElement;
            if (!r)if (c.detail && "mouse" === c.detail.pointerType) {
                if (I(d))return void a.close();
                b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint))
            } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d)))return void a.close()
        }, v.onMouseOver = function (a) {
            a = a || window.event;
            var b = a.target || a.srcElement;
            C(d, "ui--over-close", I(b))
        }, v.hideControls = function () {
            b.addClass(d, "pswp__ui--hidden"), x = !1
        }, v.showControls = function () {
            x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden")
        }, v.supportsFullscreen = function () {
            var a = document;
            return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen)
        }, v.getFullscreenAPI = function () {
            var b, c = document.documentElement, d = "fullscreenchange";
            return c.requestFullscreen ? b = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: d
            } : c.mozRequestFullScreen ? b = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + d
            } : c.webkitRequestFullscreen ? b = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + d
            } : c.msRequestFullscreen && (b = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), b && (b.enter = function () {
                return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, b.exit = function () {
                return q.closeOnScroll = j, document[this.exitK]()
            }, b.isFullscreen = function () {
                return document[this.elementK]
            }), b
        }
    };
    return a
});
/*! BackgroundCheck - v1.2.2 */
!function (a, b) {
    "function" == typeof define && define.amd ? define(b) : a.BackgroundCheck = b(a)
}(this, function () {
    "use strict";
    function a(a) {
        if (void 0 === a || void 0 === a.targets)throw"Missing attributes";
        H.debug = d(a.debug, !1), H.debugOverlay = d(a.debugOverlay, !1), H.targets = g(a.targets), H.images = g(a.images || "img", !0), H.changeParent = d(a.changeParent, !1), H.threshold = d(a.threshold, 50), H.minComplexity = d(a.minComplexity, 30), H.minOverlap = d(a.minOverlap, 50), H.windowEvents = d(a.windowEvents, !0), H.maxDuration = d(a.maxDuration, 500), H.mask = d(a.mask, {
            r: 0,
            g: 255,
            b: 0
        }), H.classes = d(a.classes, {
            dark: "background--dark",
            light: "background--light",
            complex: "background--complex"
        }), void 0 === B && (h(), B && (C.style.position = "fixed", C.style.top = "0px", C.style.left = "0px", C.style.width = "100%", C.style.height = "100%", window.addEventListener(G, x.bind(null, function () {
            k(), w()
        })), window.addEventListener("scroll", x.bind(null, w)), k(), w()))
    }

    function b() {
        B = null, C = null, D = null, H = {}, E && clearTimeout(E)
    }

    function c(a) {
        z("debug") && console.log(a)
    }

    function d(a, b) {
        return e(a, typeof b), void 0 === a ? b : a
    }

    function e(a, b) {
        if (void 0 !== a && typeof a !== b)throw"Incorrect attribute type"
    }

    function f(a) {
        for (var b, d, e = [], f = 0; f < a.length; f++)if (b = a[f], e.push(b), "IMG" !== b.tagName) {
            if (d = window.getComputedStyle(b).backgroundImage, d.split(/,url|, url/).length > 1)throw"Multiple backgrounds are not supported";
            if (!d || "none" === d)throw"Element is not an <img> but does not have a background-image";
            e[f] = {
                img: new Image,
                el: e[f]
            }, d = d.slice(4, -1), d = d.replace(/"/g, ""), e[f].img.src = d, c("CSS Image - " + d)
        }
        return e
    }

    function g(a, b) {
        var c = a;
        if ("string" == typeof a ? c = document.querySelectorAll(a) : a && 1 === a.nodeType && (c = [a]), !c || 0 === c.length || void 0 === c.length)throw"Elements not found";
        return b && (c = f(c)), c = Array.prototype.slice.call(c)
    }

    function h() {
        C = document.createElement("canvas"), C && C.getContext ? (D = C.getContext("2d"), B = !0) : B = !1, i()
    }

    function i() {
        z("debugOverlay") ? (C.style.opacity = .5, C.style.pointerEvents = "none", document.body.appendChild(C)) : C.parentNode && C.parentNode.removeChild(C)
    }

    function j(a) {
        var d = (new Date).getTime() - a;
        c("Duration: " + d + "ms"), d > z("maxDuration") && (console.log("BackgroundCheck - Killed"), q(), b())
    }

    function k() {
        F = {
            left: 0,
            top: 0,
            right: document.body.clientWidth,
            bottom: window.innerHeight
        }, C.width = document.body.clientWidth, C.height = window.innerHeight
    }

    function l(a, b, c) {
        var d, e;
        return -1 !== a.indexOf("px") ? d = parseFloat(a) : -1 !== a.indexOf("%") ? (d = parseFloat(a), e = d / 100, d = e * b, c && (d -= c * e)) : d = b, d
    }

    function m(a) {
        var b = window.getComputedStyle(a.el);
        a.el.style.backgroundRepeat = "no-repeat", a.el.style.backgroundOrigin = "padding-box";
        var c = b.backgroundSize.split(" "), d = c[0], e = void 0 === c[1] ? "auto" : c[1], f = a.el.clientWidth / a.el.clientHeight, g = a.img.naturalWidth / a.img.naturalHeight;
        "cover" === d ? f >= g ? (d = "100%", e = "auto") : (d = "auto", c[0] = "auto", e = "100%") : "contain" === d && (1 / g > 1 / f ? (d = "auto", c[0] = "auto", e = "100%") : (d = "100%", e = "auto")), d = "auto" === d ? a.img.naturalWidth : l(d, a.el.clientWidth), e = "auto" === e ? d / a.img.naturalWidth * a.img.naturalHeight : l(e, a.el.clientHeight), "auto" === c[0] && "auto" !== c[1] && (d = e / a.img.naturalHeight * a.img.naturalWidth);
        var h = b.backgroundPosition;
        "top" === h ? h = "50% 0%" : "left" === h ? h = "0% 50%" : "right" === h ? h = "100% 50%" : "bottom" === h ? h = "50% 100%" : "center" === h && (h = "50% 50%"), h = h.split(" ");
        var i, j;
        return 4 === h.length ? (i = h[1], j = h[3]) : (i = h[0], j = h[1]), j = j || "50%", i = l(i, a.el.clientWidth, d), j = l(j, a.el.clientHeight, e), 4 === h.length && ("right" === h[0] && (i = a.el.clientWidth - a.img.naturalWidth - i), "bottom" === h[2] && (j = a.el.clientHeight - a.img.naturalHeight - j)), i += a.el.getBoundingClientRect().left, j += a.el.getBoundingClientRect().top, {
            left: Math.floor(i),
            right: Math.floor(i + d),
            top: Math.floor(j),
            bottom: Math.floor(j + e),
            width: Math.floor(d),
            height: Math.floor(e)
        }
    }

    function n(a) {
        var b, c, d;
        if (a.nodeType) {
            var e = a.getBoundingClientRect();
            b = {
                left: e.left,
                right: e.right,
                top: e.top,
                bottom: e.bottom,
                width: e.width,
                height: e.height
            }, d = a.parentNode, c = a
        } else b = m(a), d = a.el, c = a.img;
        d = d.getBoundingClientRect(), b.imageTop = 0, b.imageLeft = 0, b.imageWidth = c.naturalWidth, b.imageHeight = c.naturalHeight;
        var f, g = b.imageHeight / b.height;
        return b.top < d.top && (f = d.top - b.top, b.imageTop = g * f, b.imageHeight -= g * f, b.top += f, b.height -= f), b.left < d.left && (f = d.left - b.left, b.imageLeft += g * f, b.imageWidth -= g * f, b.width -= f, b.left += f), b.bottom > d.bottom && (f = b.bottom - d.bottom, b.imageHeight -= g * f, b.height -= f), b.right > d.right && (f = b.right - d.right, b.imageWidth -= g * f, b.width -= f), b.imageTop = Math.floor(b.imageTop), b.imageLeft = Math.floor(b.imageLeft), b.imageHeight = Math.floor(b.imageHeight), b.imageWidth = Math.floor(b.imageWidth), b
    }

    function o(a) {
        var b = n(a);
        a = a.nodeType ? a : a.img, b.imageWidth > 0 && b.imageHeight > 0 && b.width > 0 && b.height > 0 ? D.drawImage(a, b.imageLeft, b.imageTop, b.imageWidth, b.imageHeight, b.left, b.top, b.width, b.height) : c("Skipping image - " + a.src + " - area too small")
    }

    function p(a, b, c) {
        var d = a.className;
        switch (c) {
            case"add":
                d += " " + b;
                break;
            case"remove":
                var e = new RegExp("(?:^|\\s)" + b + "(?!\\S)", "g");
                d = d.replace(e, "")
        }
        a.className = d.trim()
    }

    function q(a) {
        for (var b, c = a ? [a] : z("targets"), d = 0; d < c.length; d++)b = c[d], b = z("changeParent") ? b.parentNode : b, p(b, z("classes").light, "remove"), p(b, z("classes").dark, "remove"), p(b, z("classes").complex, "remove")
    }

    function r(a) {
        var b, d, e, f, g = a.getBoundingClientRect(), h = 0, i = 0, j = 0, k = 0, l = z("mask");
        if (g.width > 0 && g.height > 0) {
            q(a), a = z("changeParent") ? a.parentNode : a, d = D.getImageData(g.left, g.top, g.width, g.height).data;
            for (var m = 0; m < d.length; m += 4)d[m] === l.r && d[m + 1] === l.g && d[m + 2] === l.b ? k++ : (h++, b = .2126 * d[m] + .7152 * d[m + 1] + .0722 * d[m + 2], e = b - j, i += e * e, j += e / h);
            k <= d.length / 4 * (1 - z("minOverlap") / 100) && (f = Math.sqrt(i / h) / 255, j /= 255, c("Target: " + a.className + " lum: " + j + " var: " + f), p(a, j <= z("threshold") / 100 ? z("classes").dark : z("classes").light, "add"), f > z("minComplexity") / 100 && p(a, z("classes").complex, "add"))
        }
    }

    function s(a, b) {
        return a = (a.nodeType ? a : a.el).getBoundingClientRect(), b = b === F ? b : (b.nodeType ? b : b.el).getBoundingClientRect(), !(a.right < b.left || a.left > b.right || a.top > b.bottom || a.bottom < b.top)
    }

    function t(a) {
        for (var b, c = (new Date).getTime(), d = a && ("IMG" === a.tagName || a.img) ? "image" : "targets", e = a ? !1 : !0, f = z("targets").length, g = 0; f > g; g++)b = z("targets")[g], s(b, F) && ("targets" !== d || a && a !== b ? "image" === d && s(b, a) && r(b) : (e = !0, r(b)));
        if ("targets" === d && !e)throw a + " is not a target";
        j(c)
    }

    function u(a) {
        var b = function (a) {
            var b = 0;
            return "static" !== window.getComputedStyle(a).position && (b = parseInt(window.getComputedStyle(a).zIndex, 10) || 0, b >= 0 && b++), b
        }, c = a.parentNode, d = c ? b(c) : 0, e = b(a);
        return 1e5 * d + e
    }

    function v(a) {
        var b = !1;
        return a.sort(function (a, c) {
            a = a.nodeType ? a : a.el, c = c.nodeType ? c : c.el;
            var d = a.compareDocumentPosition(c), e = 0;
            return a = u(a), c = u(c), a > c && (b = !0), a === c && 2 === d ? e = 1 : a === c && 4 === d && (e = -1), e || a - c
        }), c("Sorted: " + b), b && c(a), b
    }

    function w(a, b, d) {
        if (B) {
            var e = z("mask");
            c("--- BackgroundCheck ---"), c("onLoad event: " + (d && d.src)), b !== !0 && (D.clearRect(0, 0, C.width, C.height), D.fillStyle = "rgb(" + e.r + ", " + e.g + ", " + e.b + ")", D.fillRect(0, 0, C.width, C.height));
            for (var f, g, h = d ? [d] : z("images"), i = v(h), j = !1, k = 0; k < h.length; k++)f = h[k], s(f, F) && (g = f.nodeType ? f : f.img, 0 === g.naturalWidth ? (j = !0, c("Loading... " + f.src), g.removeEventListener("load", w), i ? g.addEventListener("load", w.bind(null, null, !1, null)) : g.addEventListener("load", w.bind(null, a, !0, f))) : (c("Drawing: " + f.src), o(f)));
            d || j ? d && t(d) : t(a)
        }
    }

    function x(a) {
        z("windowEvents") === !0 && (E && clearTimeout(E), E = setTimeout(a, 200))
    }

    function y(a, b) {
        if (void 0 === H[a])throw"Unknown property - " + a;
        if (void 0 === b)throw"Missing value for " + a;
        if ("targets" === a || "images" === a)try {
            b = g("images" !== a || b ? b : "img", "images" === a ? !0 : !1)
        } catch (c) {
            throw b = [], c
        } else e(b, typeof H[a]);
        q(), H[a] = b, w(), "debugOverlay" === a && i()
    }

    function z(a) {
        if (void 0 === H[a])throw"Unknown property - " + a;
        return H[a]
    }

    function A() {
        for (var a, b = z("images"), c = [], d = 0; d < b.length; d++)a = n(b[d]), c.push(a);
        return c
    }

    var B, C, D, E, F, G = void 0 !== window.orientation ? "orientationchange" : "resize", H = {};
    return {init: a, destroy: b, refresh: w, set: y, get: z, getImageData: A}
});

/*! Anime v1.1.2 */
!function (a, b) {
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof module && module.exports ? module.exports = b() : a.anime = b()
}(this, function () {
    var c, a = {
        duration: 1e3,
        delay: 0,
        loop: !1,
        autoplay: !0,
        direction: "normal",
        easing: "easeOutElastic",
        elasticity: 400,
        round: !1,
        begin: void 0,
        update: void 0,
        complete: void 0
    }, b = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "), d = {
        arr: function (a) {
            return Array.isArray(a)
        }, obj: function (a) {
            return -1 < Object.prototype.toString.call(a).indexOf("Object")
        }, svg: function (a) {
            return a instanceof SVGElement
        }, dom: function (a) {
            return a.nodeType || d.svg(a)
        }, num: function (a) {
            return !isNaN(parseInt(a))
        }, str: function (a) {
            return "string" == typeof a
        }, fnc: function (a) {
            return "function" == typeof a
        }, und: function (a) {
            return "undefined" == typeof a
        }, nul: function (a) {
            return "null" == typeof a
        }, hex: function (a) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
        }, rgb: function (a) {
            return /^rgb/.test(a)
        }, hsl: function (a) {
            return /^hsl/.test(a)
        }, col: function (a) {
            return d.hex(a) || d.rgb(a) || d.hsl(a)
        }
    }, e = function () {
        var a = {}, b = {
            Sine: function (a) {
                return 1 - Math.cos(a * Math.PI / 2)
            }, Circ: function (a) {
                return 1 - Math.sqrt(1 - a * a)
            }, Elastic: function (a, b) {
                if (0 === a || 1 === a)return a;
                var c = 1 - Math.min(b, 998) / 1e3, d = a / 1 - 1;
                return -(Math.pow(2, 10 * d) * Math.sin(2 * (d - c / (2 * Math.PI) * Math.asin(1)) * Math.PI / c))
            }, Back: function (a) {
                return a * a * (3 * a - 2)
            }, Bounce: function (a) {
                for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
            }
        };
        return ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (a, c) {
            b[a] = function (a) {
                return Math.pow(a, c + 2)
            }
        }), Object.keys(b).forEach(function (c) {
            var d = b[c];
            a["easeIn" + c] = d, a["easeOut" + c] = function (a, b) {
                return 1 - d(1 - a, b)
            }, a["easeInOut" + c] = function (a, b) {
                return .5 > a ? d(2 * a, b) / 2 : 1 - d(-2 * a + 2, b) / 2
            }, a["easeOutIn" + c] = function (a, b) {
                return .5 > a ? (1 - d(1 - 2 * a, b)) / 2 : (d(2 * a - 1, b) + 1) / 2
            }
        }), a.linear = function (a) {
            return a
        }, a
    }(), f = function (a) {
        return d.str(a) ? a : a + ""
    }, g = function (a) {
        return a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }, h = function (a) {
        if (d.col(a))return !1;
        try {
            return document.querySelectorAll(a)
        } catch (a) {
            return !1
        }
    }, i = function (a) {
        return a.reduce(function (a, b) {
            return a.concat(d.arr(b) ? i(b) : b)
        }, [])
    }, j = function (a) {
        return d.arr(a) ? a : (d.str(a) && (a = h(a) || a), a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a])
    }, k = function (a, b) {
        return a.some(function (a) {
            return a === b
        })
    }, l = function (a, b) {
        var c = {};
        return a.forEach(function (a) {
            var d = JSON.stringify(b.map(function (b) {
                return a[b]
            }));
            c[d] = c[d] || [], c[d].push(a)
        }), Object.keys(c).map(function (a) {
            return c[a]
        })
    }, m = function (a) {
        return a.filter(function (a, b, c) {
            return c.indexOf(a) === b
        })
    }, n = function (a) {
        var c, b = {};
        for (c in a)b[c] = a[c];
        return b
    }, o = function (a, b) {
        for (var c in b)a[c] = d.und(a[c]) ? b[c] : a[c];
        return a
    }, p = function (a) {
        a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, b, c, d) {
            return b + b + c + c + d + d
        });
        var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
        a = parseInt(b[1], 16);
        var c = parseInt(b[2], 16), b = parseInt(b[3], 16);
        return "rgb(" + a + "," + c + "," + b + ")"
    }, q = function (a) {
        a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);
        var b = parseInt(a[1]) / 360, c = parseInt(a[2]) / 100, d = parseInt(a[3]) / 100;
        if (a = function (a, b, c) {
                return 0 > c && (c += 1), 1 < c && --c, c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a
            }, 0 == c) c = d = b = d; else var e = .5 > d ? d * (1 + c) : d + c - d * c, f = 2 * d - e, c = a(f, e, b + 1 / 3), d = a(f, e, b), b = a(f, e, b - 1 / 3);
        return "rgb(" + 255 * c + "," + 255 * d + "," + 255 * b + ")"
    }, r = function (a) {
        return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(a)[2]
    }, s = function (a, b, c) {
        return r(b) ? b : -1 < a.indexOf("translate") ? r(c) ? b + r(c) : b + "px" : -1 < a.indexOf("rotate") || -1 < a.indexOf("skew") ? b + "deg" : b
    }, t = function (a, b) {
        if (b in a.style)return getComputedStyle(a).getPropertyValue(g(b)) || "0"
    }, u = function (a, b) {
        var c = -1 < b.indexOf("scale") ? 1 : 0, d = a.style.transform;
        if (!d)return c;
        for (var e = /(\w+)\((.+?)\)/g, f = [], g = [], h = []; f = e.exec(d);)g.push(f[1]), h.push(f[2]);
        return d = h.filter(function (a, c) {
            return g[c] === b
        }), d.length ? d[0] : c
    }, v = function (a, c) {
        return d.dom(a) && k(b, c) ? "transform" : d.dom(a) && (a.getAttribute(c) || d.svg(a) && a[c]) ? "attribute" : d.dom(a) && "transform" !== c && t(a, c) ? "css" : d.nul(a[c]) || d.und(a[c]) ? void 0 : "object"
    }, w = function (a, b) {
        switch (v(a, b)) {
            case"transform":
                return u(a, b);
            case"css":
                return t(a, b);
            case"attribute":
                return a.getAttribute(b)
        }
        return a[b] || 0
    }, x = function (a, b, c) {
        return d.col(b) ? b = d.rgb(b) ? b : d.hex(b) ? p(b) : d.hsl(b) ? q(b) : void 0 : r(b) ? b : (a = r(r(a.to) ? a.to : a.from), !a && c && (a = r(c)), a ? b + a : b)
    }, y = function (a) {
        var b = /-?\d*\.?\d+/g;
        return {original: a, numbers: f(a).match(b) ? f(a).match(b).map(Number) : [0], strings: f(a).split(b)}
    }, z = function (a, b, c) {
        return b.reduce(function (b, d, e) {
            return d = d ? d : c[e - 1], b + a[e - 1] + d
        })
    }, A = function (a) {
        return a = a ? i(d.arr(a) ? a.map(j) : j(a)) : [], a.map(function (a, b) {
            return {target: a, id: b}
        })
    }, B = function (a, b, c, d) {
        return "transform" === c ? (c = a + "(" + s(a, b.from, b.to) + ")", b = a + "(" + s(a, b.to) + ")") : (a = "css" === c ? t(d, a) : void 0, c = x(b, b.from, a), b = x(b, b.to, a)), {
            from: y(c),
            to: y(b)
        }
    }, C = function (a, b) {
        var c = [];
        return a.forEach(function (e, f) {
            var g = e.target;
            return b.forEach(function (b) {
                var h = v(g, b.name);
                if (h) {
                    var i;
                    i = b.name;
                    var k = b.value, k = j(d.fnc(k) ? k(g, f) : k);
                    i = {
                        from: 1 < k.length ? k[0] : w(g, i),
                        to: 1 < k.length ? k[1] : k[0]
                    }, k = n(b), k.animatables = e, k.type = h, k.from = B(b.name, i, k.type, g).from, k.to = B(b.name, i, k.type, g).to, k.round = d.col(i.from) || k.round ? 1 : 0, k.delay = (d.fnc(k.delay) ? k.delay(g, f, a.length) : k.delay) / R.speed, k.duration = (d.fnc(k.duration) ? k.duration(g, f, a.length) : k.duration) / R.speed, c.push(k)
                }
            })
        }), c
    }, D = function (a, b) {
        var c = C(a, b);
        return l(c, ["name", "from", "to", "delay", "duration"]).map(function (a) {
            var b = n(a[0]);
            return b.animatables = a.map(function (a) {
                return a.animatables
            }), b.totalDuration = b.delay + b.duration, b
        })
    }, E = function (a, b) {
        a.tweens.forEach(function (c) {
            var d = c.from, e = a.duration - (c.delay + c.duration);
            c.from = c.to, c.to = d, b && (c.delay = e)
        }), a.reversed = !a.reversed
    }, F = function (a) {
        if (a.length)return Math.max.apply(Math, a.map(function (a) {
            return a.totalDuration
        }))
    }, G = function (a) {
        if (a.length)return Math.min.apply(Math, a.map(function (a) {
            return a.delay
        }))
    }, H = function (a) {
        var b = [], c = [];
        return a.tweens.forEach(function (a) {
            "css" !== a.type && "transform" !== a.type || (b.push("css" === a.type ? g(a.name) : "transform"), a.animatables.forEach(function (a) {
                c.push(a.target)
            }))
        }), {properties: m(b).join(", "), elements: m(c)}
    }, I = function (a) {
        var b = H(a);
        b.elements.forEach(function (a) {
            a.style.willChange = b.properties
        })
    }, J = function (a) {
        H(a).elements.forEach(function (a) {
            a.style.removeProperty("will-change")
        })
    }, K = function (a, b) {
        var c = a.path, d = a.value * b, e = function (e) {
            return e = e || 0, c.getPointAtLength(1 < b ? a.value + e : d + e)
        }, f = e(), g = e(-1), e = e(1);
        switch (a.name) {
            case"translateX":
                return f.x;
            case"translateY":
                return f.y;
            case"rotate":
                return 180 * Math.atan2(e.y - g.y, e.x - g.x) / Math.PI
        }
    }, L = function (a, b) {
        var c = Math.min(Math.max(b - a.delay, 0), a.duration) / a.duration, d = a.to.numbers.map(function (b, d) {
            var f = a.from.numbers[d], g = e[a.easing](c, a.elasticity), f = a.path ? K(a, g) : f + g * (b - f);
            return f = a.round ? Math.round(f * a.round) / a.round : f
        });
        return z(d, a.to.strings, a.from.strings)
    }, M = function (a, b) {
        var d;
        a.currentTime = b, a.progress = b / a.duration * 100;
        for (var e = 0; e < a.tweens.length; e++) {
            var f = a.tweens[e];
            f.currentValue = L(f, b);
            for (var g = f.currentValue, h = 0; h < f.animatables.length; h++) {
                var i = f.animatables[h], j = i.id, i = i.target, k = f.name;
                switch (f.type) {
                    case"css":
                        i.style[k] = g;
                        break;
                    case"attribute":
                        i.setAttribute(k, g);
                        break;
                    case"object":
                        i[k] = g;
                        break;
                    case"transform":
                        d || (d = {}), d[j] || (d[j] = []), d[j].push(g)
                }
            }
        }
        if (d)for (e in c || (c = (t(document.body, "transform") ? "" : "-webkit-") + "transform"), d)a.animatables[e].target.style[c] = d[e].join(" ")
    }, N = function (b) {
        var c = {};
        c.animatables = A(b.targets), c.settings = o(b, a);
        var g, e = c.settings, f = [];
        for (g in b)if (!a.hasOwnProperty(g) && "targets" !== g) {
            var h = d.obj(b[g]) ? n(b[g]) : {value: b[g]};
            h.name = g, f.push(o(h, e))
        }
        return c.properties = f, c.tweens = D(c.animatables, c.properties), c.duration = F(c.tweens) || b.duration, c.delay = G(c.tweens) || b.delay, c.currentTime = 0, c.progress = 0, c.ended = !1, c
    }, O = [], P = 0, Q = function () {
        var a = function () {
            P = requestAnimationFrame(b)
        }, b = function (b) {
            if (O.length) {
                for (var c = 0; c < O.length; c++)O[c].tick(b);
                a()
            } else cancelAnimationFrame(P), P = 0
        };
        return a
    }(), R = function (a) {
        var b = N(a), c = {};
        return b.tick = function (a) {
            b.ended = !1, c.start || (c.start = a), c.current = Math.min(Math.max(c.last + a - c.start, 0), b.duration), M(b, c.current);
            var e = b.settings;
            c.current >= b.delay && (e.begin && e.begin(b), e.begin = void 0, e.update && e.update(b)), c.current >= b.duration && (e.loop ? (c.start = a, "alternate" === e.direction && E(b, !0), d.num(e.loop) && e.loop--) : (b.ended = !0, b.pause(), e.complete && e.complete(b)), c.last = 0)
        }, b.seek = function (a) {
            M(b, a / 100 * b.duration)
        }, b.pause = function () {
            J(b);
            var a = O.indexOf(b);
            -1 < a && O.splice(a, 1)
        }, b.play = function (a) {
            b.pause(), a && (b = o(N(o(a, b.settings)), b)), c.start = 0, c.last = b.ended ? 0 : b.currentTime, a = b.settings, "reverse" === a.direction && E(b), "alternate" !== a.direction || a.loop || (a.loop = 1), I(b), O.push(b), P || Q()
        }, b.restart = function () {
            b.reversed && E(b), b.pause(), b.seek(0), b.play()
        }, b.settings.autoplay && b.play(), b
    };
    return R.version = "1.1.2", R.speed = 1, R.list = O, R.remove = function (a) {
        a = i(d.arr(a) ? a.map(j) : j(a));
        for (var b = O.length - 1; 0 <= b; b--)for (var c = O[b], e = c.tweens, f = e.length - 1; 0 <= f; f--)for (var g = e[f].animatables, h = g.length - 1; 0 <= h; h--)k(a, g[h].target) && (g.splice(h, 1), g.length || e.splice(f, 1), e.length || c.pause())
    }, R.easings = e, R.getValue = w, R.path = function (a) {
        return a = d.str(a) ? h(a)[0] : a, {path: a, value: a.getTotalLength()}
    }, R.random = function (a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    }, R
});
/*! Notify */
!function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function (t) {
    function e(e, i, n) {
        var i = {
            content: {
                message: "object" == typeof i ? i.message : i,
                title: i.title ? i.title : "",
                icon: i.icon ? i.icon : "",
                url: i.url ? i.url : "#",
                target: i.target ? i.target : "-"
            }
        };
        n = t.extend(!0, {}, i, n), this.settings = t.extend(!0, {}, s, n), this._defaults = s, "-" == this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = {
            start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
            end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
        }, "number" == typeof this.settings.offset && (this.settings.offset = {
            x: this.settings.offset,
            y: this.settings.offset
        }), this.init()
    }

    var s = {
        element: "body",
        position: null,
        type: "info",
        allow_dismiss: !0,
        newest_on_top: !1,
        placement: {from: "top", align: "right"},
        offset: 20,
        spacing: 10,
        z_index: 2031,
        delay: 5e3,
        timer: 1e3,
        url_target: "_blank",
        mouse_over: null,
        animate: {enter: "animated fadeInDown", exit: "animated fadeOutUp"},
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: "class",
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    };
    String.format = function () {
        for (var t = arguments[0], e = 1; e < arguments.length; e++)t = t.replace(RegExp("\\{" + (e - 1) + "\\}", "gm"), arguments[e]);
        return t
    }, t.extend(e.prototype, {
        init: function () {
            var t = this;
            this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.placement(), this.bind(), this.notify = {
                $ele: this.$ele,
                update: function (e, s) {
                    switch (e) {
                        case"type":
                            this.$ele.removeClass("alert-" + t.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + t.settings.type), t.settings.type = s, this.$ele.addClass("alert-" + s).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + s);
                            break;
                        case"icon":
                            var i = this.$ele.find('[data-notify="icon"]');
                            "class" == t.settings.icon_type.toLowerCase() ? i.removeClass(t.settings.content.icon).addClass(s) : (i.is("img") || i.find("img"), i.attr("src", s));
                            break;
                        case"url":
                            this.$ele.find('[data-notify="url"]').attr("href", s);
                            break;
                        case"target":
                            this.$ele.find('[data-notify="url"]').attr("target", s);
                            break;
                        default:
                            this.$ele.find('[data-notify="' + e + '"]').html(s)
                    }
                    var n = this.$ele.outerHeight() + parseInt(t.settings.spacing) + parseInt(t.settings.offset.y);
                    t.reposition(n)
                },
                close: function () {
                    t.close()
                }
            }
        }, buildNotify: function () {
            var e = this.settings.content;
            this.$ele = t(String.format(this.settings.template, this.settings.type, e.title, e.message, e.url, e.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), this.settings.delay <= 0 && this.$ele.find('[data-notify="progressbar"]').remove()
        }, setIcon: function () {
            "class" == this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
        }, styleURL: function () {
            this.$ele.find('[data-notify="url"]').css({
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                height: "100%",
                left: "0px",
                position: "absolute",
                top: "0px",
                width: "100%",
                zIndex: this.settings.z_index + 1
            }), this.$ele.find('[data-notify="dismiss"]').css({
                position: "absolute",
                right: "10px",
                top: "5px",
                zIndex: this.settings.z_index + 2
            })
        }, placement: function () {
            var e = this, s = this.settings.offset.y, i = {
                display: "inline-block",
                margin: "0px auto",
                position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
                transition: "all .5s ease-in-out",
                zIndex: this.settings.z_index
            }, n = !1, a = this.settings;
            switch (t('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
                return s = Math.max(s, parseInt(t(this).css(a.placement.from)) + parseInt(t(this).outerHeight()) + parseInt(a.spacing))
            }), 1 == this.settings.newest_on_top && (s = this.settings.offset.y), i[this.settings.placement.from] = s + "px", this.settings.placement.align) {
                case"left":
                case"right":
                    i[this.settings.placement.align] = this.settings.offset.x + "px";
                    break;
                case"center":
                    i.left = 0, i.right = 0
            }
            this.$ele.css(i).addClass(this.settings.animate.enter), t(this.settings.element).append(this.$ele), 1 == this.settings.newest_on_top && (s = parseInt(s) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(s)), t.isFunction(e.settings.onShow) && e.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function () {
                n = !0
            }).one(this.animations.end, function () {
                t.isFunction(e.settings.onShown) && e.settings.onShown.call(this)
            }), setTimeout(function () {
                n || t.isFunction(e.settings.onShown) && e.settings.onShown.call(this)
            }, 600)
        }, bind: function () {
            var e = this;
            if (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
                    e.close()
                }), this.$ele.mouseover(function () {
                    t(this).data("data-hover", "true")
                }).mouseout(function () {
                    t(this).data("data-hover", "false")
                }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) {
                e.$ele.data("notify-delay", e.settings.delay);
                var s = setInterval(function () {
                    var t = parseInt(e.$ele.data("notify-delay")) - e.settings.timer;
                    if ("false" === e.$ele.data("data-hover") && "pause" == e.settings.mouse_over || "pause" != e.settings.mouse_over) {
                        var i = (e.settings.delay - t) / e.settings.delay * 100;
                        e.$ele.data("notify-delay", t), e.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i).css("width", i + "%")
                    }
                    t <= -e.settings.timer && (clearInterval(s), e.close())
                }, e.settings.timer)
            }
        }, close: function () {
            var e = this, s = parseInt(this.$ele.css(this.settings.placement.from)), i = !1;
            this.$ele.data("closing", "true").addClass(this.settings.animate.exit), e.reposition(s), t.isFunction(e.settings.onClose) && e.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function () {
                i = !0
            }).one(this.animations.end, function () {
                t(this).remove(), t.isFunction(e.settings.onClosed) && e.settings.onClosed.call(this)
            }), setTimeout(function () {
                i || (e.$ele.remove(), e.settings.onClosed && e.settings.onClosed(e.$ele))
            }, 600)
        }, reposition: function (e) {
            var s = this, i = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])', n = this.$ele.nextAll(i);
            1 == this.settings.newest_on_top && (n = this.$ele.prevAll(i)), n.each(function () {
                t(this).css(s.settings.placement.from, e), e = parseInt(e) + parseInt(s.settings.spacing) + t(this).outerHeight()
            })
        }
    }), t.notify = function (t, s) {
        var i = new e(this, t, s);
        return i.notify
    }, t.notifyDefaults = function (e) {
        return s = t.extend(!0, {}, s, e)
    }, t.notifyClose = function (e) {
        "undefined" == typeof e || "all" == e ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t('[data-notify-position="' + e + '"]').find('[data-notify="dismiss"]').trigger("click")
    }
});
/*! fitVids */
!function ($) {
    "use strict";
    $.fn.fitVids = function (t) {
        var e = {customSelector: null, ignore: null};
        if (!document.getElementById("fit-vids-style")) {
            var i = document.head || document.getElementsByTagName("head")[0], r = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}", a = document.createElement("div");
            a.innerHTML = '<p>x</p><style id="fit-vids-style">' + r + "</style>", i.appendChild(a.childNodes[1])
        }
        return t && $.extend(e, t), this.each(function () {
            var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            e.customSelector && t.push(e.customSelector);
            var i = ".fitvidsignore";
            e.ignore && (i = i + ", " + e.ignore);
            var r = $(this).find(t.join(","));
            r = r.not("object object"), r = r.not(i), r.each(function () {
                var t = $(this);
                if (!(t.parents(i).length > 0 || "embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                    t.css("height") || t.css("width") || !isNaN(t.attr("height")) && !isNaN(t.attr("width")) || (t.attr("height", 9), t.attr("width", 16));
                    var e = "object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(), r = isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10), a = e / r;
                    if (!t.attr("name")) {
                        var d = "fitvid" + $.fn.fitVids._count;
                        t.attr("name", d), $.fn.fitVids._count++
                    }
                    t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * a + "%"), t.removeAttr("height").removeAttr("width")
                }
            })
        })
    }, $.fn.fitVids._count = 0
}(window.jQuery || window.Zepto);
/*! Instafeed 1.4.1 */
(function () {
    var e;
    e = function () {
        function e(e, t) {
            var n, r;
            this.options = {
                target: "instafeed",
                get: "popular",
                resolution: "thumbnail",
                sortBy: "none",
                links: !0,
                mock: !1,
                useHttp: !1
            };
            if (typeof e == "object")for (n in e)r = e[n], this.options[n] = r;
            this.context = t != null ? t : this, this.unique = this._genKey()
        }

        return e.prototype.hasNext = function () {
            return typeof this.context.nextUrl == "string" && this.context.nextUrl.length > 0
        }, e.prototype.next = function () {
            return this.hasNext() ? this.run(this.context.nextUrl) : !1
        }, e.prototype.run = function (t) {
            var n, r, i;
            if (typeof this.options.clientId != "string" && typeof this.options.accessToken != "string")throw new Error("Missing clientId or accessToken.");
            if (typeof this.options.accessToken != "string" && typeof this.options.clientId != "string")throw new Error("Missing clientId or accessToken.");
            return this.options.before != null && typeof this.options.before == "function" && this.options.before.call(this), typeof document != "undefined" && document !== null && (i = document.createElement("script"), i.id = "instafeed-fetcher", i.src = t || this._buildUrl(), n = document.getElementsByTagName("head"), n[0].appendChild(i), r = "instafeedCache" + this.unique, window[r] = new e(this.options, this), window[r].unique = this.unique), !0
        }, e.prototype.parse = function (e) {
            var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D;
            if (typeof e != "object") {
                if (this.options.error != null && typeof this.options.error == "function")return this.options.error.call(this, "Invalid JSON data"), !1;
                throw new Error("Invalid JSON response")
            }
            if (e.meta.code !== 200) {
                if (this.options.error != null && typeof this.options.error == "function")return this.options.error.call(this, e.meta.error_message), !1;
                throw new Error("Error from Instagram: " + e.meta.error_message)
            }
            if (e.data.length === 0) {
                if (this.options.error != null && typeof this.options.error == "function")return this.options.error.call(this, "No images were returned from Instagram"), !1;
                throw new Error("No images were returned from Instagram")
            }
            this.options.success != null && typeof this.options.success == "function" && this.options.success.call(this, e), this.context.nextUrl = "", e.pagination != null && (this.context.nextUrl = e.pagination.next_url);
            if (this.options.sortBy !== "none") {
                this.options.sortBy === "random" ? M = ["", "random"] : M = this.options.sortBy.split("-"), O = M[0] === "least" ? !0 : !1;
                switch (M[1]) {
                    case"random":
                        e.data.sort(function () {
                            return .5 - Math.random()
                        });
                        break;
                    case"recent":
                        e.data = this._sortBy(e.data, "created_time", O);
                        break;
                    case"liked":
                        e.data = this._sortBy(e.data, "likes.count", O);
                        break;
                    case"commented":
                        e.data = this._sortBy(e.data, "comments.count", O);
                        break;
                    default:
                        throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                }
            }
            if (typeof document != "undefined" && document !== null && this.options.mock === !1) {
                m = e.data, A = parseInt(this.options.limit, 10), this.options.limit != null && m.length > A && (m = m.slice(0, A)), u = document.createDocumentFragment(), this.options.filter != null && typeof this.options.filter == "function" && (m = this._filter(m, this.options.filter));
                if (this.options.template != null && typeof this.options.template == "string") {
                    f = "", d = "", w = "", D = document.createElement("div");
                    for (c = 0, N = m.length; c < N; c++) {
                        h = m[c], p = h.images[this.options.resolution];
                        if (typeof p != "object")throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
                        E = p.width, y = p.height, b = "square", E > y && (b = "landscape"), E < y && (b = "portrait"), v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), d = this._makeTemplate(this.options.template, {
                            model: h,
                            id: h.id,
                            link: h.link,
                            type: h.type,
                            image: v,
                            width: E,
                            height: y,
                            orientation: b,
                            caption: this._getObjectProperty(h, "caption.text"),
                            likes: h.likes.count,
                            comments: h.comments.count,
                            location: this._getObjectProperty(h, "location.name")
                        }), f += d
                    }
                    D.innerHTML = f, i = [], r = 0, n = D.childNodes.length;
                    while (r < n)i.push(D.childNodes[r]), r += 1;
                    for (x = 0, C = i.length; x < C; x++)L = i[x], u.appendChild(L)
                } else for (T = 0, k = m.length; T < k; T++) {
                    h = m[T], g = document.createElement("img"), p = h.images[this.options.resolution];
                    if (typeof p != "object")throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
                    v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), g.src = v, this.options.links === !0 ? (t = document.createElement("a"), t.href = h.link, t.appendChild(g), u.appendChild(t)) : u.appendChild(g)
                }
                _ = this.options.target, typeof _ == "string" && (_ = document.getElementById(_));
                if (_ == null)throw o = 'No element with id="' + this.options.target + '" on page.', new Error(o);
                _.appendChild(u), a = document.getElementsByTagName("head")[0], a.removeChild(document.getElementById("instafeed-fetcher")), S = "instafeedCache" + this.unique, window[S] = void 0;
                try {
                    delete window[S]
                } catch (P) {
                    s = P
                }
            }
            return this.options.after != null && typeof this.options.after == "function" && this.options.after.call(this), !0
        }, e.prototype._buildUrl = function () {
            var e, t, n;
            e = "https://api.instagram.com/v1";
            switch (this.options.get) {
                case"popular":
                    t = "media/popular";
                    break;
                case"tagged":
                    if (!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");
                    t = "tags/" + this.options.tagName + "/media/recent";
                    break;
                case"location":
                    if (!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");
                    t = "locations/" + this.options.locationId + "/media/recent";
                    break;
                case"user":
                    if (!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");
                    t = "users/" + this.options.userId + "/media/recent";
                    break;
                default:
                    throw new Error("Invalid option for get: '" + this.options.get + "'.")
            }
            return n = e + "/" + t, this.options.accessToken != null ? n += "?access_token=" + this.options.accessToken : n += "?client_id=" + this.options.clientId, this.options.limit != null && (n += "&count=" + this.options.limit), n += "&callback=instafeedCache" + this.unique + ".parse", n
        }, e.prototype._genKey = function () {
            var e;
            return e = function () {
                return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
            }, "" + e() + e() + e() + e()
        }, e.prototype._makeTemplate = function (e, t) {
            var n, r, i, s, o;
            r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, n = e;
            while (r.test(n))s = n.match(r)[1], o = (i = this._getObjectProperty(t, s)) != null ? i : "", n = n.replace(r, function () {
                return "" + o
            });
            return n
        }, e.prototype._getObjectProperty = function (e, t) {
            var n, r;
            t = t.replace(/\[(\w+)\]/g, ".$1"), r = t.split(".");
            while (r.length) {
                n = r.shift();
                if (!(e != null && n in e))return null;
                e = e[n]
            }
            return e
        }, e.prototype._sortBy = function (e, t, n) {
            var r;
            return r = function (e, r) {
                var i, s;
                return i = this._getObjectProperty(e, t), s = this._getObjectProperty(r, t), n ? i > s ? 1 : -1 : i < s ? 1 : -1
            }, e.sort(r.bind(this)), e
        }, e.prototype._filter = function (e, t) {
            var n, r, i, s, o;
            n = [], r = function (e) {
                if (t(e))return n.push(e)
            };
            for (i = 0, o = e.length; i < o; i++)s = e[i], r(s);
            return n
        }, e
    }(), function (e, t) {
        return typeof define == "function" && define.amd ? define([], t) : typeof module == "object" && module.exports ? module.exports = t() : e.Instafeed = t()
    }(this, function () {
        return e
    })
}).call(this);
/*! Foundation */
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}
!function (t) {
    "use strict";
    function e(t) {
        if (void 0 === Function.prototype.name) {
            var e = /function\s([^(]{1,})\(/, i = e.exec(t.toString());
            return i && i.length > 1 ? i[1].trim() : ""
        }
        return void 0 === t.prototype ? t.constructor.name : t.prototype.constructor.name
    }

    function i(t) {
        return /true/.test(t) ? !0 : /false/.test(t) ? !1 : isNaN(1 * t) ? t : parseFloat(t)
    }

    function n(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }

    var s = "6.2.4", o = {
        version: s, _plugins: {}, _uuids: [], rtl: function () {
            return "rtl" === t("html").attr("dir")
        }, plugin: function (t, i) {
            var s = i || e(t), o = n(s);
            this._plugins[o] = this[s] = t
        }, registerPlugin: function (t, i) {
            var s = i ? n(i) : e(t.constructor).toLowerCase();
            t.uuid = this.GetYoDigits(6, s), t.$element.attr("data-" + s) || t.$element.attr("data-" + s, t.uuid), t.$element.data("zfPlugin") || t.$element.data("zfPlugin", t), t.$element.trigger("init.zf." + s), this._uuids.push(t.uuid)
        }, unregisterPlugin: function (t) {
            var i = n(e(t.$element.data("zfPlugin").constructor));
            this._uuids.splice(this._uuids.indexOf(t.uuid), 1), t.$element.removeAttr("data-" + i).removeData("zfPlugin").trigger("destroyed.zf." + i);
            for (var s in t)t[s] = null
        }, reInit: function (e) {
            var i = e instanceof t;
            try {
                if (i) e.each(function () {
                    t(this).data("zfPlugin")._init()
                }); else {
                    var s = typeof e, o = this, a = {
                        object: function (e) {
                            e.forEach(function (e) {
                                e = n(e), t("[data-" + e + "]").foundation("_init")
                            })
                        }, string: function () {
                            e = n(e), t("[data-" + e + "]").foundation("_init")
                        }, undefined: function () {
                            this.object(Object.keys(o._plugins))
                        }
                    };
                    a[s](e)
                }
            } catch (r) {
                console.error(r)
            } finally {
                return e
            }
        }, GetYoDigits: function (t, e) {
            return t = t || 6, Math.round(Math.pow(36, t + 1) - Math.random() * Math.pow(36, t)).toString(36).slice(1) + (e ? "-" + e : "")
        }, reflow: function (e, n) {
            "undefined" == typeof n ? n = Object.keys(this._plugins) : "string" == typeof n && (n = [n]);
            var s = this;
            t.each(n, function (n, o) {
                var a = s._plugins[o], r = t(e).find("[data-" + o + "]").addBack("[data-" + o + "]");
                r.each(function () {
                    var e = t(this), n = {};
                    if (e.data("zfPlugin"))return void console.warn("Tried to initialize " + o + " on an element that already has a Foundation plugin.");
                    if (e.attr("data-options")) {
                        e.attr("data-options").split(";").forEach(function (t, e) {
                            var s = t.split(":").map(function (t) {
                                return t.trim()
                            });
                            s[0] && (n[s[0]] = i(s[1]))
                        })
                    }
                    try {
                        e.data("zfPlugin", new a(t(this), n))
                    } catch (s) {
                        console.error(s)
                    } finally {
                        return
                    }
                })
            })
        }, getFnName: e, transitionend: function (t) {
            var e, i = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            }, n = document.createElement("div");
            for (var s in i)"undefined" != typeof n.style[s] && (e = i[s]);
            return e ? e : (e = setTimeout(function () {
                t.triggerHandler("transitionend", [t])
            }, 1), "transitionend")
        }
    };
    o.util = {
        throttle: function (t, e) {
            var i = null;
            return function () {
                var n = this, s = arguments;
                null === i && (i = setTimeout(function () {
                    t.apply(n, s), i = null
                }, e))
            }
        }
    };
    var a = function (i) {
        var n = typeof i, s = t("meta.foundation-mq"), a = t(".no-js");
        if (s.length || t('<meta class="foundation-mq">').appendTo(document.head), a.length && a.removeClass("no-js"), "undefined" === n) o.MediaQuery._init(), o.reflow(this); else {
            if ("string" !== n)throw new TypeError("We're sorry, " + n + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
            var r = Array.prototype.slice.call(arguments, 1), l = this.data("zfPlugin");
            if (void 0 === l || void 0 === l[i])throw new ReferenceError("We're sorry, '" + i + "' is not an available method for " + (l ? e(l) : "this element") + ".");
            1 === this.length ? l[i].apply(l, r) : this.each(function (e, n) {
                l[i].apply(t(n).data("zfPlugin"), r)
            })
        }
        return this
    };
    window.Foundation = o, t.fn.foundation = a, function () {
        Date.now && window.Date.now || (window.Date.now = Date.now = function () {
            return (new Date).getTime()
        });
        for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
            var i = t[e];
            window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var n = 0;
            window.requestAnimationFrame = function (t) {
                var e = Date.now(), i = Math.max(n + 16, e);
                return setTimeout(function () {
                    t(n = i)
                }, i - e)
            }, window.cancelAnimationFrame = clearTimeout
        }
        window.performance && window.performance.now || (window.performance = {
            start: Date.now(), now: function () {
                return Date.now() - this.start
            }
        })
    }(), Function.prototype.bind || (Function.prototype.bind = function (t) {
        if ("function" != typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var e = Array.prototype.slice.call(arguments, 1), i = this, n = function () {
        }, s = function () {
            return i.apply(this instanceof n ? this : t, e.concat(Array.prototype.slice.call(arguments)))
        };
        return this.prototype && (n.prototype = this.prototype), s.prototype = new n, s
    })
}(jQuery), !function (t) {
    function e(t) {
        var e = {};
        return "string" != typeof t ? e : (t = t.trim().slice(1, -1)) ? e = t.split("&").reduce(function (t, e) {
            var i = e.replace(/\+/g, " ").split("="), n = i[0], s = i[1];
            return n = decodeURIComponent(n), s = void 0 === s ? null : decodeURIComponent(s), t.hasOwnProperty(n) ? Array.isArray(t[n]) ? t[n].push(s) : t[n] = [t[n], s] : t[n] = s, t
        }, {}) : e
    }

    var i = {
        queries: [], current: "", _init: function () {
            var i, n = this, s = t(".foundation-mq").css("font-family");
            i = e(s);
            for (var o in i)i.hasOwnProperty(o) && n.queries.push({
                name: o,
                value: "only screen and (min-width: " + i[o] + ")"
            });
            this.current = this._getCurrentSize(), this._watcher()
        }, atLeast: function (t) {
            var e = this.get(t);
            return e ? window.matchMedia(e).matches : !1
        }, get: function (t) {
            for (var e in this.queries)if (this.queries.hasOwnProperty(e)) {
                var i = this.queries[e];
                if (t === i.name)return i.value
            }
            return null
        }, _getCurrentSize: function () {
            for (var t, e = 0; e < this.queries.length; e++) {
                var i = this.queries[e];
                window.matchMedia(i.value).matches && (t = i)
            }
            return "object" == typeof t ? t.name : t
        }, _watcher: function () {
            var e = this;
            t(window).on("resize.zf.mediaquery", function () {
                var i = e._getCurrentSize(), n = e.current;
                i !== n && (e.current = i, t(window).trigger("changed.zf.mediaquery", [i, n]))
            })
        }
    };
    Foundation.MediaQuery = i, window.matchMedia || (window.matchMedia = function () {
        "use strict";
        var t = window.styleMedia || window.media;
        if (!t) {
            var e = document.createElement("style"), i = document.getElementsByTagName("script")[0], n = null;
            e.type = "text/css", e.id = "matchmediajs-test", i && i.parentNode && i.parentNode.insertBefore(e, i), n = "getComputedStyle" in window && window.getComputedStyle(e, null) || e.currentStyle, t = {
                matchMedium: function (t) {
                    var i = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                    return e.styleSheet ? e.styleSheet.cssText = i : e.textContent = i, "1px" === n.width
                }
            }
        }
        return function (e) {
            return {matches: t.matchMedium(e || "all"), media: e || "all"}
        }
    }()), Foundation.MediaQuery = i
}(jQuery), !function (t) {
    function e(t, e, n, s) {
        var o, a, r, l, u = i(t);
        if (e) {
            var d = i(e);
            a = u.offset.top + u.height <= d.height + d.offset.top, o = u.offset.top >= d.offset.top, r = u.offset.left >= d.offset.left, l = u.offset.left + u.width <= d.width + d.offset.left
        } else a = u.offset.top + u.height <= u.windowDims.height + u.windowDims.offset.top, o = u.offset.top >= u.windowDims.offset.top, r = u.offset.left >= u.windowDims.offset.left, l = u.offset.left + u.width <= u.windowDims.width;
        var h = [a, o, r, l];
        return n ? r === l == !0 : s ? o === a == !0 : -1 === h.indexOf(!1)
    }

    function i(t, e) {
        if (t = t.length ? t[0] : t, t === window || t === document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var i = t.getBoundingClientRect(), n = t.parentNode.getBoundingClientRect(), s = document.body.getBoundingClientRect(), o = window.pageYOffset, a = window.pageXOffset;
        return {
            width: i.width,
            height: i.height,
            offset: {top: i.top + o, left: i.left + a},
            parentDims: {width: n.width, height: n.height, offset: {top: n.top + o, left: n.left + a}},
            windowDims: {width: s.width, height: s.height, offset: {top: o, left: a}}
        }
    }

    function n(t, e, n, s, o, a) {
        var r = i(t), l = e ? i(e) : null;
        switch (n) {
            case"top":
                return {
                    left: Foundation.rtl() ? l.offset.left - r.width + l.width : l.offset.left,
                    top: l.offset.top - (r.height + s)
                };
            case"left":
                return {left: l.offset.left - (r.width + o), top: l.offset.top};
            case"right":
                return {left: l.offset.left + l.width + o, top: l.offset.top};
            case"center top":
                return {left: l.offset.left + l.width / 2 - r.width / 2, top: l.offset.top - (r.height + s)};
            case"center bottom":
                return {left: a ? o : l.offset.left + l.width / 2 - r.width / 2, top: l.offset.top + l.height + s};
            case"center left":
                return {left: l.offset.left - (r.width + o), top: l.offset.top + l.height / 2 - r.height / 2};
            case"center right":
                return {left: l.offset.left + l.width + o + 1, top: l.offset.top + l.height / 2 - r.height / 2};
            case"center":
                return {
                    left: r.windowDims.offset.left + r.windowDims.width / 2 - r.width / 2,
                    top: r.windowDims.offset.top + r.windowDims.height / 2 - r.height / 2
                };
            case"reveal":
                return {left: (r.windowDims.width - r.width) / 2, top: r.windowDims.offset.top + s};
            case"reveal full":
                return {left: r.windowDims.offset.left, top: r.windowDims.offset.top};
            case"left bottom":
                return {left: l.offset.left, top: l.offset.top + l.height};
            case"right bottom":
                return {left: l.offset.left + l.width + o - r.width, top: l.offset.top + l.height};
            default:
                return {
                    left: Foundation.rtl() ? l.offset.left - r.width + l.width : l.offset.left + o,
                    top: l.offset.top + l.height + s
                }
        }
    }

    Foundation.Box = {ImNotTouchingYou: e, GetDimensions: i, GetOffsets: n}
}(jQuery), !function (t) {
    function e(t, e, i) {
        function n(r) {
            a || (a = window.performance.now()), o = r - a, i.apply(e), t > o ? s = window.requestAnimationFrame(n, e) : (window.cancelAnimationFrame(s), e.trigger("finished.zf.animate", [e]).triggerHandler("finished.zf.animate", [e]))
        }

        var s, o, a = null;
        s = window.requestAnimationFrame(n)
    }

    function i(e, i, o, a) {
        function r() {
            e || i.hide(), l(), a && a.apply(i)
        }

        function l() {
            i[0].style.transitionDuration = 0, i.removeClass(u + " " + d + " " + o)
        }

        if (i = t(i).eq(0), i.length) {
            var u = e ? n[0] : n[1], d = e ? s[0] : s[1];
            l(), i.addClass(o).css("transition", "none"), requestAnimationFrame(function () {
                i.addClass(u), e && i.show()
            }), requestAnimationFrame(function () {
                i[0].offsetWidth, i.css("transition", "").addClass(d)
            }), i.one(Foundation.transitionend(i), r)
        }
    }

    var n = ["mui-enter", "mui-leave"], s = ["mui-enter-active", "mui-leave-active"], o = {
        animateIn: function (t, e, n) {
            i(!0, t, e, n)
        }, animateOut: function (t, e, n) {
            i(!1, t, e, n)
        }
    };
    Foundation.Move = e, Foundation.Motion = o
}(jQuery), !function (t) {
    function e() {
        o(), n(), s(), i()
    }

    function i(e) {
        var i = t("[data-yeti-box]"), n = ["dropdown", "tooltip", "reveal"];
        if (e && ("string" == typeof e ? n.push(e) : "object" == typeof e && "string" == typeof e[0] ? n.concat(e) : console.error("Plugin names must be strings")), i.length) {
            var s = n.map(function (t) {
                return "closeme.zf." + t
            }).join(" ");
            t(window).off(s).on(s, function (e, i) {
                var n = e.namespace.split(".")[0], s = t("[data-" + n + "]").not('[data-yeti-box="' + i + '"]');
                s.each(function () {
                    var e = t(this);
                    e.triggerHandler("close.zf.trigger", [e])
                })
            })
        }
    }

    function n(e) {
        var i = void 0, n = t("[data-resize]");
        n.length && t(window).off("resize.zf.trigger").on("resize.zf.trigger", function (s) {
            i && clearTimeout(i), i = setTimeout(function () {
                a || n.each(function () {
                    t(this).triggerHandler("resizeme.zf.trigger")
                }), n.attr("data-events", "resize")
            }, e || 10)
        })
    }

    function s(e) {
        var i = void 0, n = t("[data-scroll]");
        n.length && t(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function (s) {
            i && clearTimeout(i), i = setTimeout(function () {
                a || n.each(function () {
                    t(this).triggerHandler("scrollme.zf.trigger")
                }), n.attr("data-events", "scroll")
            }, e || 10)
        })
    }

    function o() {
        if (!a)return !1;
        var e = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"), i = function (e) {
            var i = t(e[0].target);
            switch (i.attr("data-events")) {
                case"resize":
                    i.triggerHandler("resizeme.zf.trigger", [i]);
                    break;
                case"scroll":
                    i.triggerHandler("scrollme.zf.trigger", [i, window.pageYOffset]);
                    break;
                default:
                    return !1
            }
        };
        if (e.length)for (var n = 0; n <= e.length - 1; n++) {
            var s = new a(i);
            s.observe(e[n], {
                attributes: !0,
                childList: !1,
                characterData: !1,
                subtree: !1,
                attributeFilter: ["data-events"]
            })
        }
    }

    var a = function () {
        for (var t = ["WebKit", "Moz", "O", "Ms", ""], e = 0; e < t.length; e++)if (t[e] + "MutationObserver" in window)return window[t[e] + "MutationObserver"];
        return !1
    }(), r = function (e, i) {
        e.data(i).split(" ").forEach(function (n) {
            t("#" + n)["close" === i ? "trigger" : "triggerHandler"](i + ".zf.trigger", [e])
        })
    };
    t(document).on("click.zf.trigger", "[data-open]", function () {
        r(t(this), "open")
    }), t(document).on("click.zf.trigger", "[data-close]", function () {
        var e = t(this).data("close");
        e ? r(t(this), "close") : t(this).trigger("close.zf.trigger")
    }), t(document).on("click.zf.trigger", "[data-toggle]", function () {
        r(t(this), "toggle")
    }), t(document).on("close.zf.trigger", "[data-closable]", function (e) {
        e.stopPropagation();
        var i = t(this).data("closable");
        "" !== i ? Foundation.Motion.animateOut(t(this), i, function () {
            t(this).trigger("closed.zf")
        }) : t(this).fadeOut().trigger("closed.zf")
    }), t(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function () {
        var e = t(this).data("toggle-focus");
        t("#" + e).triggerHandler("toggle.zf.trigger", [t(this)])
    }), t(window).on("load", function () {
        e()
    }), Foundation.IHearYou = e
}(jQuery), !function (t) {
    function e(t) {
        var e = {};
        for (var i in t)e[t[i]] = t[i];
        return e
    }

    var i = {
        9: "TAB",
        13: "ENTER",
        27: "ESCAPE",
        32: "SPACE",
        37: "ARROW_LEFT",
        38: "ARROW_UP",
        39: "ARROW_RIGHT",
        40: "ARROW_DOWN"
    }, n = {}, s = {
        keys: e(i), parseKey: function (t) {
            var e = i[t.which || t.keyCode] || String.fromCharCode(t.which).toUpperCase();
            return t.shiftKey && (e = "SHIFT_" + e), t.ctrlKey && (e = "CTRL_" + e), t.altKey && (e = "ALT_" + e), e
        }, handleKey: function (e, i, s) {
            var o, a, r, l = n[i], u = this.parseKey(e);
            if (!l)return console.warn("Component not defined!");
            if (o = "undefined" == typeof l.ltr ? l : Foundation.rtl() ? t.extend({}, l.ltr, l.rtl) : t.extend({}, l.rtl, l.ltr), a = o[u], r = s[a], r && "function" == typeof r) {
                var d = r.apply();
                (s.handled || "function" == typeof s.handled) && s.handled(d)
            } else(s.unhandled || "function" == typeof s.unhandled) && s.unhandled()
        }, findFocusable: function (e) {
            return e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function () {
                return t(this).is(":visible") && !(t(this).attr("tabindex") < 0)
            })
        }, register: function (t, e) {
            n[t] = e
        }
    };
    Foundation.Keyboard = s
}(jQuery), !function (t) {
    var e = {
        Feather: function (e) {
            var i = arguments.length <= 1 || void 0 === arguments[1] ? "zf" : arguments[1];
            e.attr("role", "menubar");
            var n = e.find("li").attr({role: "menuitem"}), s = "is-" + i + "-submenu", o = s + "-item", a = "is-" + i + "-submenu-parent";
            e.find("a:first").attr("tabindex", 0), n.each(function () {
                var e = t(this), i = e.children("ul");
                i.length && (e.addClass(a).attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1,
                    "aria-label": e.children("a:first").text()
                }), i.addClass("submenu " + s).attr({
                    "data-submenu": "",
                    "aria-hidden": !0,
                    role: "menu"
                })), e.parent("[data-submenu]").length && e.addClass("is-submenu-item " + o)
            })
        }, Burn: function (t, e) {
            var i = (t.find("li").removeAttr("tabindex"), "is-" + e + "-submenu"), n = i + "-item", s = "is-" + e + "-submenu-parent";
            t.find(">li, .menu, .menu > li").removeClass(i + " " + n + " " + s + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
        }
    };
    Foundation.Nest = e
}(jQuery), !function (t) {
    function e(t, e, i) {
        var n, s, o = this, a = e.duration, r = Object.keys(t.data())[0] || "timer", l = -1;
        this.isPaused = !1, this.restart = function () {
            l = -1, clearTimeout(s), this.start()
        }, this.start = function () {
            this.isPaused = !1, clearTimeout(s), l = 0 >= l ? a : l, t.data("paused", !1), n = Date.now(), s = setTimeout(function () {
                e.infinite && o.restart(), i && "function" == typeof i && i()
            }, l), t.trigger("timerstart.zf." + r)
        }, this.pause = function () {
            this.isPaused = !0, clearTimeout(s), t.data("paused", !0);
            var e = Date.now();
            l -= e - n, t.trigger("timerpaused.zf." + r)
        }
    }

    function i(e, i) {
        function n() {
            s--, 0 === s && i()
        }

        var s = e.length;
        0 === s && i(), e.each(function () {
            this.complete ? n() : "undefined" != typeof this.naturalWidth && this.naturalWidth > 0 ? n() : t(this).one("load", function () {
                n()
            })
        })
    }

    Foundation.Timer = e, Foundation.onImagesLoaded = i
}(jQuery), function (t) {
    function e() {
        this.removeEventListener("touchmove", i), this.removeEventListener("touchend", e), u = !1
    }

    function i(i) {
        if (t.spotSwipe.preventDefault && i.preventDefault(), u) {
            var n, s = i.touches[0].pageX, a = (i.touches[0].pageY, o - s);
            l = (new Date).getTime() - r, Math.abs(a) >= t.spotSwipe.moveThreshold && l <= t.spotSwipe.timeThreshold && (n = a > 0 ? "left" : "right"), n && (i.preventDefault(), e.call(this), t(this).trigger("swipe", n).trigger("swipe" + n))
        }
    }

    function n(t) {
        1 == t.touches.length && (o = t.touches[0].pageX, a = t.touches[0].pageY, u = !0, r = (new Date).getTime(), this.addEventListener("touchmove", i, !1), this.addEventListener("touchend", e, !1))
    }

    function s() {
        this.addEventListener && this.addEventListener("touchstart", n, !1)
    }

    t.spotSwipe = {
        version: "1.0.0",
        enabled: "ontouchstart" in document.documentElement,
        preventDefault: !1,
        moveThreshold: 75,
        timeThreshold: 200
    };
    var o, a, r, l, u = !1;
    t.event.special.swipe = {setup: s}, t.each(["left", "up", "down", "right"], function () {
        t.event.special["swipe" + this] = {
            setup: function () {
                t(this).on("swipe", t.noop)
            }
        }
    })
}(jQuery), !function (t) {
    t.fn.addTouch = function () {
        this.each(function (i, n) {
            t(n).bind("touchstart touchmove touchend touchcancel", function () {
                e(event)
            })
        });
        var e = function (t) {
            var e, i = t.changedTouches, n = i[0], s = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            }, o = s[t.type];
            "MouseEvent" in window && "function" == typeof window.MouseEvent ? e = new window.MouseEvent(o, {
                bubbles: !0,
                cancelable: !0,
                screenX: n.screenX,
                screenY: n.screenY,
                clientX: n.clientX,
                clientY: n.clientY
            }) : (e = document.createEvent("MouseEvent"), e.initMouseEvent(o, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null)), n.target.dispatchEvent(e)
        }
    }
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    function e(t, e) {
        return t / e
    }

    function i(t, e, i, n) {
        return Math.abs(t.position()[e] + t[n]() / 2 - i)
    }

    var n = function () {
        function n(e, i) {
            _classCallCheck(this, n), this.$element = e, this.options = t.extend({}, n.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Slider"), Foundation.Keyboard.register("Slider", {
                ltr: {
                    ARROW_RIGHT: "increase",
                    ARROW_UP: "increase",
                    ARROW_DOWN: "decrease",
                    ARROW_LEFT: "decrease",
                    SHIFT_ARROW_RIGHT: "increase_fast",
                    SHIFT_ARROW_UP: "increase_fast",
                    SHIFT_ARROW_DOWN: "decrease_fast",
                    SHIFT_ARROW_LEFT: "decrease_fast"
                },
                rtl: {
                    ARROW_LEFT: "increase",
                    ARROW_RIGHT: "decrease",
                    SHIFT_ARROW_LEFT: "increase_fast",
                    SHIFT_ARROW_RIGHT: "decrease_fast"
                }
            })
        }

        return _createClass(n, [{
            key: "_init", value: function () {
                this.inputs = this.$element.find("input"), this.handles = this.$element.find("[data-slider-handle]"), this.$handle = this.handles.eq(0), this.$input = this.inputs.length ? this.inputs.eq(0) : t("#" + this.$handle.attr("aria-controls")), this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
                var e = !1, i = this;
                (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0, this.$element.addClass(this.options.disabledClass)), this.inputs.length || (this.inputs = t().add(this.$input), this.options.binding = !0), this._setInitAttr(0), this._events(this.$handle), this.handles[1] && (this.options.doubleSided = !0, this.$handle2 = this.handles.eq(1), this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : t("#" + this.$handle2.attr("aria-controls")), this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)), e = !0, this._setHandlePos(this.$handle, this.options.initialStart, !0, function () {
                    i._setHandlePos(i.$handle2, i.options.initialEnd, !0)
                }), this._setInitAttr(1), this._events(this.$handle2)), e || this._setHandlePos(this.$handle, this.options.initialStart, !0)
            }
        }, {
            key: "_setHandlePos", value: function (t, i, n, s) {
                if (!this.$element.hasClass(this.options.disabledClass)) {
                    i = parseFloat(i), i < this.options.start ? i = this.options.start : i > this.options.end && (i = this.options.end);
                    var o = this.options.doubleSided;
                    if (o)if (0 === this.handles.index(t)) {
                        var a = parseFloat(this.$handle2.attr("aria-valuenow"));
                        i = i >= a ? a - this.options.step : i
                    } else {
                        var r = parseFloat(this.$handle.attr("aria-valuenow"));
                        i = r >= i ? r + this.options.step : i
                    }
                    this.options.vertical && !n && (i = this.options.end - i);
                    var l = this, u = this.options.vertical, d = u ? "height" : "width", h = u ? "top" : "left", c = t[0].getBoundingClientRect()[d], f = this.$element[0].getBoundingClientRect()[d], p = e(i - this.options.start, this.options.end - this.options.start).toFixed(2), m = (f - c) * p, v = (100 * e(m, f)).toFixed(this.options.decimal);
                    i = parseFloat(i.toFixed(this.options.decimal));
                    var g = {};
                    if (this._setValues(t, i), o) {
                        var w, y = 0 === this.handles.index(t), b = ~~(100 * e(c, f));
                        if (y) g[h] = v + "%", w = parseFloat(this.$handle2[0].style[h]) - v + b, s && "function" == typeof s && s(); else {
                            var $ = parseFloat(this.$handle[0].style[h]);
                            w = v - (isNaN($) ? this.options.initialStart / ((this.options.end - this.options.start) / 100) : $) + b
                        }
                        g["min-" + d] = w + "%"
                    }
                    this.$element.one("finished.zf.animate", function () {
                        l.$element.trigger("moved.zf.slider", [t])
                    });
                    var C = this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime;
                    Foundation.Move(C, t, function () {
                        t.css(h, v + "%"), l.options.doubleSided ? l.$fill.css(g) : l.$fill.css(d, 100 * p + "%")
                    }), clearTimeout(l.timeout), l.timeout = setTimeout(function () {
                        l.$element.trigger("changed.zf.slider", [t])
                    }, l.options.changedDelay)
                }
            }
        }, {
            key: "_setInitAttr", value: function (t) {
                var e = this.inputs.eq(t).attr("id") || Foundation.GetYoDigits(6, "slider");
                this.inputs.eq(t).attr({
                    id: e,
                    max: this.options.end,
                    min: this.options.start,
                    step: this.options.step
                }), this.handles.eq(t).attr({
                    role: "slider",
                    "aria-controls": e,
                    "aria-valuemax": this.options.end,
                    "aria-valuemin": this.options.start,
                    "aria-valuenow": 0 === t ? this.options.initialStart : this.options.initialEnd,
                    "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                    tabindex: 0
                })
            }
        }, {
            key: "_setValues", value: function (t, e) {
                var i = this.options.doubleSided ? this.handles.index(t) : 0;
                this.inputs.eq(i).val(e), t.attr("aria-valuenow", e)
            }
        }, {
            key: "_handleEvent", value: function (n, s, o) {
                var a, r;
                if (o) a = this._adjustValue(null, o), r = !0; else {
                    n.preventDefault();
                    var l = this, u = this.options.vertical, d = u ? "height" : "width", h = u ? "top" : "left", c = u ? n.pageY : n.pageX, f = (this.$handle[0].getBoundingClientRect()[d] / 2, this.$element[0].getBoundingClientRect()[d]), p = u ? t(window).scrollTop() : t(window).scrollLeft(), m = this.$element.offset()[h];
                    n.clientY === n.pageY && (c += p);
                    var v, g = c - m;
                    v = 0 > g ? 0 : g > f ? f : g;
                    var w = e(v, f);
                    if (a = (this.options.end - this.options.start) * w + this.options.start, Foundation.rtl() && !this.options.vertical && (a = this.options.end - a), a = l._adjustValue(null, a), r = !1, !s) {
                        var y = i(this.$handle, h, v, d), b = i(this.$handle2, h, v, d);
                        s = b >= y ? this.$handle : this.$handle2
                    }
                }
                this._setHandlePos(s, a, r)
            }
        }, {
            key: "_adjustValue", value: function (t, e) {
                var i, n, s, o, a = this.options.step, r = parseFloat(a / 2);
                return i = t ? parseFloat(t.attr("aria-valuenow")) : e, n = i % a, s = i - n, o = s + a, 0 === n ? i : i = i >= s + r ? o : s
            }
        }, {
            key: "_events", value: function (e) {
                var i, n = this;
                if (this.inputs.off("change.zf.slider").on("change.zf.slider", function (e) {
                        var i = n.inputs.index(t(this));
                        n._handleEvent(e, n.handles.eq(i), t(this).val())
                    }), this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", function (e) {
                        return n.$element.data("dragging") ? !1 : void(t(e.target).is("[data-slider-handle]") || (n.options.doubleSided ? n._handleEvent(e) : n._handleEvent(e, n.$handle)))
                    }), this.options.draggable) {
                    this.handles.addTouch();
                    var s = t("body");
                    e.off("mousedown.zf.slider").on("mousedown.zf.slider", function (o) {
                        e.addClass("is-dragging"), n.$fill.addClass("is-dragging"), n.$element.data("dragging", !0), i = t(o.currentTarget), s.on("mousemove.zf.slider", function (t) {
                            t.preventDefault(), n._handleEvent(t, i)
                        }).on("mouseup.zf.slider", function (t) {
                            n._handleEvent(t, i), e.removeClass("is-dragging"), n.$fill.removeClass("is-dragging"), n.$element.data("dragging", !1), s.off("mousemove.zf.slider mouseup.zf.slider")
                        })
                    }).on("selectstart.zf.slider touchmove.zf.slider", function (t) {
                        t.preventDefault()
                    })
                }
                e.off("keydown.zf.slider").on("keydown.zf.slider", function (e) {
                    var i, s = t(this), o = n.options.doubleSided ? n.handles.index(s) : 0, a = parseFloat(n.inputs.eq(o).val());
                    Foundation.Keyboard.handleKey(e, "Slider", {
                        decrease: function () {
                            i = a - n.options.step
                        }, increase: function () {
                            i = a + n.options.step
                        }, decrease_fast: function () {
                            i = a - 10 * n.options.step
                        }, increase_fast: function () {
                            i = a + 10 * n.options.step
                        }, handled: function () {
                            e.preventDefault(), n._setHandlePos(s, i, !0)
                        }
                    })
                })
            }
        }, {
            key: "destroy", value: function () {
                this.handles.off(".zf.slider"), this.inputs.off(".zf.slider"), this.$element.off(".zf.slider"), Foundation.unregisterPlugin(this)
            }
        }]), n
    }();
    n.defaults = {
        start: 0,
        end: 100,
        step: 1,
        initialStart: 0,
        initialEnd: 100,
        binding: !1,
        clickSelect: !0,
        vertical: !1,
        draggable: !0,
        disabled: !1,
        doubleSided: !1,
        decimal: 2,
        moveTime: 200,
        disabledClass: "disabled",
        invertVertical: !1,
        changedDelay: 500
    }, Foundation.plugin(n, "Slider")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), Foundation.Nest.Feather(this.$element, "drilldown"), this._init(), Foundation.registerPlugin(this, "Drilldown"), Foundation.Keyboard.register("Drilldown", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close",
                TAB: "down",
                SHIFT_TAB: "up"
            })
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a"), this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]"), this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "menuitem").find("a"), this._prepareMenu(), this._keyboardEvents()
            }
        }, {
            key: "_prepareMenu", value: function () {
                var e = this;
                this.$submenuAnchors.each(function () {
                    var i = t(this), n = i.parent();
                    e.options.parentLink && i.clone().prependTo(n.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>'), i.data("savedHref", i.attr("href")).removeAttr("href").attr("tabindex", 0), i.children("[data-submenu]").attr({
                        "aria-hidden": !0,
                        tabindex: 0,
                        role: "menu"
                    }), e._events(i)
                }), this.$submenus.each(function () {
                    var i = t(this), n = i.find(".js-drilldown-back");
                    n.length || i.prepend(e.options.backButton), e._back(i)
                }), this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = t(this.options.wrapper).addClass("is-drilldown"), this.$wrapper = this.$element.wrap(this.$wrapper).parent().css(this._getMaxDims()))
            }
        }, {
            key: "_events", value: function (e) {
                var i = this;
                e.off("click.zf.drilldown").on("click.zf.drilldown", function (n) {
                    if (t(n.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && (n.stopImmediatePropagation(), n.preventDefault()), i._show(e.parent("li")), i.options.closeOnClick) {
                        var s = t("body");
                        s.off(".zf.drilldown").on("click.zf.drilldown", function (e) {
                            e.target === i.$element[0] || t.contains(i.$element[0], e.target) || (e.preventDefault(), i._hideAll(), s.off(".zf.drilldown"))
                        })
                    }
                })
            }
        }, {
            key: "_keyboardEvents", value: function () {
                var e = this;
                this.$menuItems.add(this.$element.find(".js-drilldown-back > a")).on("keydown.zf.drilldown", function (i) {
                    var n, s, o = t(this), a = o.parent("li").parent("ul").children("li").children("a");
                    a.each(function (e) {
                        return t(this).is(o) ? (n = a.eq(Math.max(0, e - 1)), void(s = a.eq(Math.min(e + 1, a.length - 1)))) : void 0
                    }), Foundation.Keyboard.handleKey(i, "Drilldown", {
                        next: function () {
                            return o.is(e.$submenuAnchors) ? (e._show(o.parent("li")), o.parent("li").one(Foundation.transitionend(o), function () {
                                o.parent("li").find("ul li a").filter(e.$menuItems).first().focus()
                            }), !0) : void 0
                        }, previous: function () {
                            return e._hide(o.parent("li").parent("ul")), o.parent("li").parent("ul").one(Foundation.transitionend(o), function () {
                                setTimeout(function () {
                                    o.parent("li").parent("ul").parent("li").children("a").first().focus()
                                }, 1)
                            }), !0
                        }, up: function () {
                            return n.focus(), !0
                        }, down: function () {
                            return s.focus(), !0
                        }, close: function () {
                            e._back()
                        }, open: function () {
                            return o.is(e.$menuItems) ? o.is(e.$submenuAnchors) ? (e._show(o.parent("li")), o.parent("li").one(Foundation.transitionend(o), function () {
                                o.parent("li").find("ul li a").filter(e.$menuItems).first().focus()
                            }), !0) : void 0 : (e._hide(o.parent("li").parent("ul")), o.parent("li").parent("ul").one(Foundation.transitionend(o), function () {
                                setTimeout(function () {
                                    o.parent("li").parent("ul").parent("li").children("a").first().focus()
                                }, 1)
                            }), !0)
                        }, handled: function (t) {
                            t && i.preventDefault(), i.stopImmediatePropagation()
                        }
                    })
                })
            }
        }, {
            key: "_hideAll", value: function () {
                var t = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
                t.one(Foundation.transitionend(t), function (e) {
                    t.removeClass("is-active is-closing")
                }), this.$element.trigger("closed.zf.drilldown")
            }
        }, {
            key: "_back", value: function (t) {
                var e = this;
                t.off("click.zf.drilldown"), t.children(".js-drilldown-back").on("click.zf.drilldown", function (i) {
                    i.stopImmediatePropagation(), e._hide(t);
                    var n = t.parent("li").parent("ul").parent("li");
                    n.length && e._show(n)
                })
            }
        }, {
            key: "_menuLinkEvents", value: function () {
                var t = this;
                this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function (e) {
                    setTimeout(function () {
                        t._hideAll()
                    }, 0)
                })
            }
        }, {
            key: "_show", value: function (t) {
                t.attr("aria-expanded", !0), t.children("[data-submenu]").addClass("is-active").attr("aria-hidden", !1), this.$element.trigger("open.zf.drilldown", [t])
            }
        }, {
            key: "_hide", value: function (t) {
                t.parent("li").attr("aria-expanded", !1), t.attr("aria-hidden", !0).addClass("is-closing").one(Foundation.transitionend(t), function () {
                    t.removeClass("is-active is-closing"), t.blur()
                }), t.trigger("hide.zf.drilldown", [t])
            }
        }, {
            key: "_getMaxDims", value: function () {
                var t = 0, e = {};
                return this.$submenus.add(this.$element).each(function (e, i) {
                    var n = i.getBoundingClientRect().height;
                    n > t && (t = n)
                }), e["min-height"] = t + "px", e["max-width"] = this.$element[0].getBoundingClientRect().width + "px", e
            }
        }, {
            key: "destroy", value: function () {
                this._hideAll(), Foundation.Nest.Burn(this.$element, "drilldown"), this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"), this.$submenuAnchors.each(function () {
                    t(this).off(".zf.drilldown")
                }), this.$element.find("a").each(function () {
                    var e = t(this);
                    e.removeAttr("tabindex"), e.data("savedHref") && e.attr("href", e.data("savedHref")).removeData("savedHref")
                }), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
        wrapper: "<div></div>",
        parentLink: !1,
        closeOnClick: !1
    }, Foundation.plugin(e, "Drilldown")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), Foundation.Nest.Feather(this.$element, "accordion"), this._init(), Foundation.registerPlugin(this, "AccordionMenu"), Foundation.Keyboard.register("AccordionMenu", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_RIGHT: "open",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "close",
                ESCAPE: "closeAll"
            })
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                this.$element.find("[data-submenu]").not(".is-active").slideUp(0), this.$element.attr({
                    role: "menu",
                    "aria-multiselectable": this.options.multiOpen
                }), this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"), this.$menuLinks.each(function () {
                    var e = this.id || Foundation.GetYoDigits(6, "acc-menu-link"), i = t(this), n = i.children("[data-submenu]"), s = n[0].id || Foundation.GetYoDigits(6, "acc-menu"), o = n.hasClass("is-active");
                    i.attr({"aria-controls": s, "aria-expanded": o, role: "menuitem", id: e}), n.attr({
                        "aria-labelledby": e,
                        "aria-hidden": !o,
                        role: "menu",
                        id: s
                    })
                });
                var e = this.$element.find(".is-active");
                if (e.length) {
                    var i = this;
                    e.each(function () {
                        i.down(t(this))
                    })
                }
                this._events()
            }
        }, {
            key: "_events", value: function () {
                var e = this;
                this.$element.find("li").each(function () {
                    var i = t(this).children("[data-submenu]");
                    i.length && t(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function (t) {
                        t.preventDefault(), e.toggle(i)
                    })
                }).on("keydown.zf.accordionmenu", function (i) {
                    var n, s, o = t(this), a = o.parent("ul").children("li"), r = o.children("[data-submenu]");
                    a.each(function (e) {
                        return t(this).is(o) ? (n = a.eq(Math.max(0, e - 1)).find("a").first(), s = a.eq(Math.min(e + 1, a.length - 1)).find("a").first(), t(this).children("[data-submenu]:visible").length && (s = o.find("li:first-child").find("a").first()), t(this).is(":first-child") ? n = o.parents("li").first().find("a").first() : n.parents("li").first().children("[data-submenu]:visible").length && (n = n.parents("li").find("li:last-child").find("a").first()), void(t(this).is(":last-child") && (s = o.parents("li").first().next("li").find("a").first()))) : void 0
                    }), Foundation.Keyboard.handleKey(i, "AccordionMenu", {
                        open: function () {
                            r.is(":hidden") && (e.down(r), r.find("li").first().find("a").first().focus())
                        }, close: function () {
                            r.length && !r.is(":hidden") ? e.up(r) : o.parent("[data-submenu]").length && (e.up(o.parent("[data-submenu]")), o.parents("li").first().find("a").first().focus())
                        }, up: function () {
                            return n.focus(), !0
                        }, down: function () {
                            return s.focus(), !0
                        }, toggle: function () {
                            o.children("[data-submenu]").length && e.toggle(o.children("[data-submenu]"))
                        }, closeAll: function () {
                            e.hideAll()
                        }, handled: function (t) {
                            t && i.preventDefault(), i.stopImmediatePropagation()
                        }
                    })
                })
            }
        }, {
            key: "hideAll", value: function () {
                this.$element.find("[data-submenu]").slideUp(this.options.slideSpeed)
            }
        }, {
            key: "toggle", value: function (t) {
                t.is(":animated") || (t.is(":hidden") ? this.down(t) : this.up(t))
            }
        }, {
            key: "down", value: function (t) {
                var e = this;
                this.options.multiOpen || this.up(this.$element.find(".is-active").not(t.parentsUntil(this.$element).add(t))), t.addClass("is-active").attr({"aria-hidden": !1}).parent(".is-accordion-submenu-parent").attr({"aria-expanded": !0}), t.slideDown(e.options.slideSpeed, function () {
                    e.$element.trigger("down.zf.accordionMenu", [t])
                })
            }
        }, {
            key: "up", value: function (t) {
                var e = this;
                t.slideUp(e.options.slideSpeed, function () {
                    e.$element.trigger("up.zf.accordionMenu", [t])
                });
                var i = t.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden", !0);
                i.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1)
            }
        }, {
            key: "destroy", value: function () {
                this.$element.find("[data-submenu]").slideDown(0).css("display", ""), this.$element.find("a").off("click.zf.accordionMenu"), Foundation.Nest.Burn(this.$element, "accordion"), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {slideSpeed: 250, multiOpen: !0}, Foundation.plugin(e, "AccordionMenu")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), Foundation.Nest.Feather(this.$element, "dropdown"), this._init(), Foundation.registerPlugin(this, "DropdownMenu"), Foundation.Keyboard.register("DropdownMenu", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close"
            })
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                var t = this.$element.find("li.is-dropdown-submenu-parent");
                this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), this.$menuItems = this.$element.find('[role="menuitem"]'), this.$tabs = this.$element.children('[role="menuitem"]'), this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), this.$element.hasClass(this.options.rightClass) || "right" === this.options.alignment || Foundation.rtl() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right", t.addClass("opens-left")) : t.addClass("opens-right"), this.changed = !1, this._events()
            }
        }, {
            key: "_isVertical", value: function () {
                return "block" === this.$tabs.css("display")
            }
        }, {
            key: "_events", value: function () {
                var e = this, i = "ontouchstart" in window || "undefined" != typeof window.ontouchstart, n = "is-dropdown-submenu-parent", s = function (s) {
                    var o = t(s.target).parentsUntil("ul", "." + n), a = o.hasClass(n), r = "true" === o.attr("data-is-click"), l = o.children(".is-dropdown-submenu");
                    if (!a)return void(e.options.closeOnClickInside && e._hide(o));
                    if (r) {
                        if (!e.options.closeOnClick || !e.options.clickOpen && !i || e.options.forceFollow && i)return;
                        s.stopImmediatePropagation(), s.preventDefault(), e._hide(o)
                    } else s.preventDefault(), s.stopImmediatePropagation(), e._show(l), o.add(o.parentsUntil(e.$element, "." + n)).attr("data-is-click", !0)
                };
                (this.options.clickOpen || i) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", s), this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownmenu", function (i) {
                    var s = t(this), o = s.hasClass(n);
                    o && (clearTimeout(e.delay), e.delay = setTimeout(function () {
                        e._show(s.children(".is-dropdown-submenu"))
                    }, e.options.hoverDelay))
                }).on("mouseleave.zf.dropdownmenu", function (i) {
                    var s = t(this), o = s.hasClass(n);
                    if (o && e.options.autoclose) {
                        if ("true" === s.attr("data-is-click") && e.options.clickOpen)return !1;
                        clearTimeout(e.delay), e.delay = setTimeout(function () {
                            e._hide(s)
                        }, e.options.closingTime)
                    }
                }), this.$menuItems.on("keydown.zf.dropdownmenu", function (i) {
                    var n, s, o = t(i.target).parentsUntil("ul", '[role="menuitem"]'), a = e.$tabs.index(o) > -1, r = a ? e.$tabs : o.siblings("li").add(o);
                    r.each(function (e) {
                        return t(this).is(o) ? (n = r.eq(e - 1), void(s = r.eq(e + 1))) : void 0
                    });
                    var l = function () {
                        o.is(":last-child") || (s.children("a:first").focus(), i.preventDefault())
                    }, u = function () {
                        n.children("a:first").focus(), i.preventDefault()
                    }, d = function () {
                        var t = o.children("ul.is-dropdown-submenu");
                        t.length && (e._show(t), o.find("li > a:first").focus(), i.preventDefault())
                    }, h = function () {
                        var t = o.parent("ul").parent("li");
                        t.children("a:first").focus(), e._hide(t), i.preventDefault()
                    }, c = {
                        open: d, close: function () {
                            e._hide(e.$element), e.$menuItems.find("a:first").focus(), i.preventDefault()
                        }, handled: function () {
                            i.stopImmediatePropagation()
                        }
                    };
                    a ? e._isVertical() ? Foundation.rtl() ? t.extend(c, {
                        down: l,
                        up: u,
                        next: h,
                        previous: d
                    }) : t.extend(c, {down: l, up: u, next: d, previous: h}) : Foundation.rtl() ? t.extend(c, {
                        next: u,
                        previous: l,
                        down: d,
                        up: h
                    }) : t.extend(c, {next: l, previous: u, down: d, up: h}) : Foundation.rtl() ? t.extend(c, {
                        next: h,
                        previous: d,
                        down: l,
                        up: u
                    }) : t.extend(c, {
                        next: d,
                        previous: h,
                        down: l,
                        up: u
                    }), Foundation.Keyboard.handleKey(i, "DropdownMenu", c)
                })
            }
        }, {
            key: "_addBodyHandler", value: function () {
                var e = t(document.body), i = this;
                e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function (t) {
                    var n = i.$element.find(t.target);
                    n.length || (i._hide(), e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))
                })
            }
        }, {
            key: "_show", value: function (e) {
                var i = this.$tabs.index(this.$tabs.filter(function (i, n) {
                    return t(n).find(e).length > 0
                })), n = e.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                this._hide(n, i), e.css("visibility", "hidden").addClass("js-dropdown-active").attr({"aria-hidden": !1}).parent("li.is-dropdown-submenu-parent").addClass("is-active").attr({"aria-expanded": !0});
                var s = Foundation.Box.ImNotTouchingYou(e, null, !0);
                if (!s) {
                    var o = "left" === this.options.alignment ? "-right" : "-left", a = e.parent(".is-dropdown-submenu-parent");
                    a.removeClass("opens" + o).addClass("opens-" + this.options.alignment), s = Foundation.Box.ImNotTouchingYou(e, null, !0), s || a.removeClass("opens-" + this.options.alignment).addClass("opens-inner"), this.changed = !0
                }
                e.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdownmenu", [e])
            }
        }, {
            key: "_hide", value: function (t, e) {
                var i;
                i = t && t.length ? t : void 0 !== e ? this.$tabs.not(function (t, i) {
                    return t === e
                }) : this.$element;
                var n = i.hasClass("is-active") || i.find(".is-active").length > 0;
                if (n) {
                    if (i.find("li.is-active").add(i).attr({
                            "aria-expanded": !1,
                            "data-is-click": !1
                        }).removeClass("is-active"), i.find("ul.js-dropdown-active").attr({"aria-hidden": !0}).removeClass("js-dropdown-active"), this.changed || i.find("opens-inner").length) {
                        var s = "left" === this.options.alignment ? "right" : "left";
                        i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-" + this.options.alignment).addClass("opens-" + s), this.changed = !1
                    }
                    this.$element.trigger("hide.zf.dropdownmenu", [i])
                }
            }
        }, {
            key: "destroy", value: function () {
                this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), t(document.body).off(".zf.dropdownmenu"), Foundation.Nest.Burn(this.$element, "dropdown"), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 50,
        clickOpen: !1,
        closingTime: 500,
        alignment: "left",
        closeOnClick: !0,
        closeOnClickInside: !0,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: !0
    }, Foundation.plugin(e, "DropdownMenu")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Magellan")
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                var e = this.$element[0].id || Foundation.GetYoDigits(6, "magellan");
                this.$targets = t("[data-magellan-target]"), this.$links = this.$element.find("a"), this.$element.attr({
                    "data-resize": e,
                    "data-scroll": e,
                    id: e
                }), this.$active = t(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events()
            }
        }, {
            key: "calcPoints", value: function () {
                var e = this, i = document.body, n = document.documentElement;
                this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, n.clientHeight)), this.docHeight = Math.round(Math.max(i.scrollHeight, i.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)), this.$targets.each(function () {
                    var i = t(this), n = Math.round(i.offset().top - e.options.threshold);
                    i.targetPoint = n, e.points.push(n)
                })
            }
        }, {
            key: "_events", value: function () {
                var e = this;
                t("html, body"), {duration: e.options.animationDuration, easing: e.options.animationEasing};
                t(window).one("load", function () {
                    e.options.deepLinking && location.hash && e.scrollToLoc(location.hash), e.calcPoints(), e._updateActive()
                }), this.$element.on({
                    "resizeme.zf.trigger": this.reflow.bind(this),
                    "scrollme.zf.trigger": this._updateActive.bind(this)
                }).on("click.zf.magellan", 'a[href^="#"]', function (t) {
                    t.preventDefault();
                    var i = this.getAttribute("href");
                    e.scrollToLoc(i)
                })
            }
        }, {
            key: "scrollToLoc", value: function (e) {
                if (!t(e).length)return !1;
                var i = Math.round(t(e).offset().top - this.options.threshold / 2 - this.options.barOffset);
                t("html, body").stop(!0).animate({scrollTop: i}, this.options.animationDuration, this.options.animationEasing)
            }
        }, {
            key: "reflow", value: function () {
                this.calcPoints(), this._updateActive()
            }
        }, {
            key: "_updateActive", value: function () {
                var t, e = parseInt(window.pageYOffset, 10);
                if (e + this.winHeight === this.docHeight) t = this.points.length - 1; else if (e < this.points[0]) t = 0; else {
                    var i = this.scrollPos < e, n = this, s = this.points.filter(function (t, s) {
                        return i ? t - n.options.barOffset <= e : t - n.options.barOffset - n.options.threshold <= e
                    });
                    t = s.length ? s.length - 1 : 0
                }
                if (this.$active.removeClass(this.options.activeClass), this.$active = this.$links.filter('[href="#' + this.$targets.eq(t).data("magellan-target") + '"]').addClass(this.options.activeClass), this.options.deepLinking) {
                    var o = this.$active[0].getAttribute("href");
                    window.history.pushState ? window.history.pushState(null, null, o) : window.location.hash = o
                }
                this.scrollPos = e, this.$element.trigger("update.zf.magellan", [this.$active])
            }
        }, {
            key: "destroy", value: function () {
                if (this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass), this.options.deepLinking) {
                    var t = this.$active[0].getAttribute("href");
                    window.location.hash.replace(t, "")
                }
                Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "active",
        deepLinking: !1,
        barOffset: 0
    }, Foundation.plugin(e, "Magellan")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = t(i), this.rules = this.$element.data("responsive-menu"), this.currentMq = null, this.currentPlugin = null, this._init(), this._events(), Foundation.registerPlugin(this, "ResponsiveMenu")
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                if ("string" == typeof this.rules) {
                    for (var e = {}, n = this.rules.split(" "), s = 0; s < n.length; s++) {
                        var o = n[s].split("-"), a = o.length > 1 ? o[0] : "small", r = o.length > 1 ? o[1] : o[0];
                        null !== i[r] && (e[a] = i[r])
                    }
                    this.rules = e
                }
                t.isEmptyObject(this.rules) || this._checkMediaQueries()
            }
        }, {
            key: "_events", value: function () {
                var e = this;
                t(window).on("changed.zf.mediaquery", function () {
                    e._checkMediaQueries()
                })
            }
        }, {
            key: "_checkMediaQueries", value: function () {
                var e, n = this;
                t.each(this.rules, function (t) {
                    Foundation.MediaQuery.atLeast(t) && (e = t)
                }), e && (this.currentPlugin instanceof this.rules[e].plugin || (t.each(i, function (t, e) {
                    n.$element.removeClass(e.cssClass)
                }), this.$element.addClass(this.rules[e].cssClass), this.currentPlugin && this.currentPlugin.destroy(), this.currentPlugin = new this.rules[e].plugin(this.$element, {})))
            }
        }, {
            key: "destroy", value: function () {
                this.currentPlugin.destroy(), t(window).off(".zf.ResponsiveMenu"), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {};
    var i = {
        dropdown: {cssClass: "dropdown", plugin: Foundation._plugins["dropdown-menu"] || null},
        drilldown: {cssClass: "drilldown", plugin: Foundation._plugins.drilldown || null},
        accordion: {cssClass: "accordion-menu", plugin: Foundation._plugins["accordion-menu"] || null}
    };
    Foundation.plugin(e, "ResponsiveMenu")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Accordion"), Foundation.Keyboard.register("Accordion", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_DOWN: "next",
                ARROW_UP: "previous"
            })
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("li, [data-accordion-item]"), this.$tabs.each(function (e, i) {
                    var n = t(i), s = n.children("[data-tab-content]"), o = s[0].id || Foundation.GetYoDigits(6, "accordion"), a = i.id || o + "-label";
                    n.find("a:first").attr({
                        "aria-controls": o,
                        role: "tab",
                        id: a,
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }), s.attr({role: "tabpanel", "aria-labelledby": a, "aria-hidden": !0, id: o})
                });
                var e = this.$element.find(".is-active").children("[data-tab-content]");
                e.length && this.down(e, !0), this._events()
            }
        }, {
            key: "_events", value: function () {
                var e = this;
                this.$tabs.each(function () {
                    var i = t(this), n = i.children("[data-tab-content]");
                    n.length && i.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function (t) {
                        t.preventDefault(), e.toggle(n)
                    }).on("keydown.zf.accordion", function (t) {
                        Foundation.Keyboard.handleKey(t, "Accordion", {
                            toggle: function () {
                                e.toggle(n)
                            }, next: function () {
                                var t = i.next().find("a").focus();
                                e.options.multiExpand || t.trigger("click.zf.accordion")
                            }, previous: function () {
                                var t = i.prev().find("a").focus();
                                e.options.multiExpand || t.trigger("click.zf.accordion")
                            }, handled: function () {
                                t.preventDefault(), t.stopPropagation()
                            }
                        })
                    })
                })
            }
        }, {
            key: "toggle", value: function (t) {
                t.parent().hasClass("is-active") ? this.up(t) : this.down(t)
            }
        }, {
            key: "down", value: function (e, i) {
                var n = this;
                if (e.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active"), !this.options.multiExpand && !i) {
                    var s = this.$element.children(".is-active").children("[data-tab-content]");
                    s.length && this.up(s.not(e))
                }
                e.slideDown(this.options.slideSpeed, function () {
                    n.$element.trigger("down.zf.accordion", [e])
                }), t("#" + e.attr("aria-labelledby")).attr({"aria-expanded": !0, "aria-selected": !0})
            }
        }, {
            key: "up", value: function (e) {
                var i = e.parent().siblings(), n = this;
                (this.options.allowAllClosed || i.hasClass("is-active")) && e.parent().hasClass("is-active") && (e.slideUp(n.options.slideSpeed, function () {
                    n.$element.trigger("up.zf.accordion", [e])
                }), e.attr("aria-hidden", !0).parent().removeClass("is-active"), t("#" + e.attr("aria-labelledby")).attr({
                    "aria-expanded": !1,
                    "aria-selected": !1
                }))
            }
        }, {
            key: "destroy", value: function () {
                this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {slideSpeed: 250, multiExpand: !1, allowAllClosed: !1}, Foundation.plugin(e, "Accordion")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Dropdown"), Foundation.Keyboard.register("Dropdown", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close",
                TAB: "tab_forward",
                SHIFT_TAB: "tab_backward"
            })
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                var e = this.$element.attr("id");
                this.$anchor = t(t('[data-toggle="' + e + '"]').length ? '[data-toggle="' + e + '"]' : '[data-open="' + e + '"]'), this.$anchor.attr({
                    "aria-controls": e,
                    "data-is-focus": !1,
                    "data-yeti-box": e,
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), this.options.positionClass = this.getPositionClass(), this.counter = 4, this.usedPositions = [], this.$element.attr({
                    "aria-hidden": "true",
                    "data-yeti-box": e,
                    "data-resize": e,
                    "aria-labelledby": this.$anchor[0].id || Foundation.GetYoDigits(6, "dd-anchor")
                }), this._events()
            }
        }, {
            key: "getPositionClass", value: function () {
                var t = this.$element[0].className.match(/(top|left|right|bottom)/g);
                t = t ? t[0] : "";
                var e = /float-(\S+)/.exec(this.$anchor[0].className);
                e = e ? e[1] : "";
                var i = e ? e + " " + t : t;
                return i
            }
        }, {
            key: "_reposition", value: function (t) {
                this.usedPositions.push(t ? t : "bottom"), !t && this.usedPositions.indexOf("top") < 0 ? this.$element.addClass("top") : "top" === t && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(t) : "left" === t && this.usedPositions.indexOf("right") < 0 ? this.$element.removeClass(t).addClass("right") : "right" === t && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(t).addClass("left") : !t && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.addClass("left") : "top" === t && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(t).addClass("left") : "left" === t && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(t) : "right" === t && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(t) : this.$element.removeClass(t), this.classChanged = !0, this.counter--
            }
        }, {
            key: "_setPosition", value: function () {
                if ("false" === this.$anchor.attr("aria-expanded"))return !1;
                var t = this.getPositionClass(), e = Foundation.Box.GetDimensions(this.$element), i = (Foundation.Box.GetDimensions(this.$anchor), "left" === t ? "left" : "right" === t ? "left" : "top"), n = "top" === i ? "height" : "width";
                "height" === n ? this.options.vOffset : this.options.hOffset;
                if (e.width >= e.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.$element))return this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                    width: e.windowDims.width - 2 * this.options.hOffset,
                    height: "auto"
                }), this.classChanged = !0, !1;
                for (this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, t, this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.$element, !1, !0) && this.counter;)this._reposition(t), this._setPosition()
            }
        }, {
            key: "_events", value: function () {
                var e = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": this._setPosition.bind(this)
                }), this.options.hover && (this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function () {
                    t('body[data-whatinput="mouse"]').is("*") && (clearTimeout(e.timeout), e.timeout = setTimeout(function () {
                        e.open(), e.$anchor.data("hover", !0)
                    }, e.options.hoverDelay))
                }).on("mouseleave.zf.dropdown", function () {
                    clearTimeout(e.timeout), e.timeout = setTimeout(function () {
                        e.close(), e.$anchor.data("hover", !1)
                    }, e.options.hoverDelay)
                }), this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function () {
                    clearTimeout(e.timeout)
                }).on("mouseleave.zf.dropdown", function () {
                    clearTimeout(e.timeout), e.timeout = setTimeout(function () {
                        e.close(), e.$anchor.data("hover", !1)
                    }, e.options.hoverDelay)
                })), this.$anchor.add(this.$element).on("keydown.zf.dropdown", function (i) {
                    var n = t(this), s = Foundation.Keyboard.findFocusable(e.$element);
                    Foundation.Keyboard.handleKey(i, "Dropdown", {
                        tab_forward: function () {
                            e.$element.find(":focus").is(s.eq(-1)) && (e.options.trapFocus ? (s.eq(0).focus(), i.preventDefault()) : e.close())
                        }, tab_backward: function () {
                            (e.$element.find(":focus").is(s.eq(0)) || e.$element.is(":focus")) && (e.options.trapFocus ? (s.eq(-1).focus(), i.preventDefault()) : e.close())
                        }, open: function () {
                            n.is(e.$anchor) && (e.open(), e.$element.attr("tabindex", -1).focus(), i.preventDefault())
                        }, close: function () {
                            e.close(), e.$anchor.focus()
                        }
                    })
                })
            }
        }, {
            key: "_addBodyHandler", value: function () {
                var e = t(document.body).not(this.$element), i = this;
                e.off("click.zf.dropdown").on("click.zf.dropdown", function (t) {
                    i.$anchor.is(t.target) || i.$anchor.find(t.target).length || i.$element.find(t.target).length || (i.close(), e.off("click.zf.dropdown"))
                })
            }
        }, {
            key: "open", value: function () {
                if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")), this.$anchor.addClass("hover").attr({"aria-expanded": !0}), this._setPosition(), this.$element.addClass("is-open").attr({"aria-hidden": !1}), this.options.autoFocus) {
                    var t = Foundation.Keyboard.findFocusable(this.$element);
                    t.length && t.eq(0).focus()
                }
                this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdown", [this.$element])
            }
        }, {
            key: "close", value: function () {
                if (!this.$element.hasClass("is-open"))return !1;
                if (this.$element.removeClass("is-open").attr({"aria-hidden": !0}), this.$anchor.removeClass("hover").attr("aria-expanded", !1), this.classChanged) {
                    var t = this.getPositionClass();
                    t && this.$element.removeClass(t), this.$element.addClass(this.options.positionClass).css({
                        height: "",
                        width: ""
                    }), this.classChanged = !1, this.counter = 4, this.usedPositions.length = 0
                }
                this.$element.trigger("hide.zf.dropdown", [this.$element])
            }
        }, {
            key: "toggle", value: function () {
                if (this.$element.hasClass("is-open")) {
                    if (this.$anchor.data("hover"))return;
                    this.close()
                } else this.open()
            }
        }, {
            key: "destroy", value: function () {
                this.$element.off(".zf.trigger").hide(), this.$anchor.off(".zf.dropdown"), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        hoverDelay: 250,
        hover: !1,
        hoverPane: !1,
        vOffset: 1,
        hOffset: 1,
        positionClass: "",
        trapFocus: !1,
        autoFocus: !1,
        closeOnClick: !1
    }, Foundation.plugin(e, "Dropdown")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this.$lastTrigger = t(), this.$triggers = t(), this._init(), this._events(), Foundation.registerPlugin(this, "OffCanvas"), Foundation.Keyboard.register("OffCanvas", {ESCAPE: "close"})
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                var e = this.$element.attr("id");
                if (this.$element.attr("aria-hidden", "true"), this.$triggers = t(document).find('[data-open="' + e + '"], [data-close="' + e + '"], [data-toggle="' + e + '"]').attr("aria-expanded", "false").attr("aria-controls", e), this.options.closeOnClick)if (t(".js-off-canvas-exit").length) this.$exiter = t(".js-off-canvas-exit"); else {
                    var i = document.createElement("div");
                    i.setAttribute("class", "js-off-canvas-exit"), t("[data-off-canvas-content]").append(i), this.$exiter = t(i)
                }
                this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, "g").test(this.$element[0].className), this.options.isRevealed && (this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2], this._setMQChecker()), this.options.transitionTime || (this.options.transitionTime = 1e3 * parseFloat(window.getComputedStyle(t("[data-off-canvas-wrapper]")[0]).transitionDuration))
            }
        }, {
            key: "_events", value: function () {
                this.$element.off(".zf.trigger .zf.offcanvas").on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
                }), this.options.closeOnClick && this.$exiter.length && this.$exiter.on({"click.zf.offcanvas": this.close.bind(this)})
            }
        }, {
            key: "_setMQChecker", value: function () {
                var e = this;
                t(window).on("changed.zf.mediaquery", function () {
                    Foundation.MediaQuery.atLeast(e.options.revealOn) ? e.reveal(!0) : e.reveal(!1)
                }).one("load.zf.offcanvas", function () {
                    Foundation.MediaQuery.atLeast(e.options.revealOn) && e.reveal(!0)
                })
            }
        }, {
            key: "reveal", value: function (t) {
                var e = this.$element.find("[data-close]");
                t ? (this.close(), this.isRevealed = !0, this.$element.off("open.zf.trigger toggle.zf.trigger"), e.length && e.hide()) : (this.isRevealed = !1, this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this)
                }), e.length && e.show())
            }
        }, {
            key: "open", value: function (e, i) {
                if (!this.$element.hasClass("is-open") && !this.isRevealed) {
                    var n = this;
                    t(document.body);
                    this.options.forceTop && t("body").scrollTop(0);
                    var s = t("[data-off-canvas-wrapper]");
                    s.addClass("is-off-canvas-open is-open-" + n.options.position), n.$element.addClass("is-open"), this.$triggers.attr("aria-expanded", "true"), this.$element.attr("aria-hidden", "false").trigger("opened.zf.offcanvas"), this.options.closeOnClick && this.$exiter.addClass("is-visible"), i && (this.$lastTrigger = i), this.options.autoFocus && s.one(Foundation.transitionend(s), function () {
                        n.$element.hasClass("is-open") && (n.$element.attr("tabindex", "-1"), n.$element.focus())
                    }), this.options.trapFocus && s.one(Foundation.transitionend(s), function () {
                        n.$element.hasClass("is-open") && (n.$element.attr("tabindex", "-1"), n.trapFocus())
                    })
                }
            }
        }, {
            key: "_trapFocus", value: function () {
                var t = Foundation.Keyboard.findFocusable(this.$element), e = t.eq(0), i = t.eq(-1);
                t.off(".zf.offcanvas").on("keydown.zf.offcanvas", function (t) {
                    var n = Foundation.Keyboard.parseKey(t);
                    "TAB" === n && t.target === i[0] && (t.preventDefault(), e.focus()), "SHIFT_TAB" === n && t.target === e[0] && (t.preventDefault(), i.focus())
                })
            }
        }, {
            key: "close", value: function (e) {
                if (this.$element.hasClass("is-open") && !this.isRevealed) {
                    var i = this;
                    t("[data-off-canvas-wrapper]").removeClass("is-off-canvas-open is-open-" + i.options.position), i.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"), this.options.closeOnClick && this.$exiter.removeClass("is-visible"), this.$triggers.attr("aria-expanded", "false"), this.options.trapFocus && t("[data-off-canvas-content]").removeAttr("tabindex")
                }
            }
        }, {
            key: "toggle", value: function (t, e) {
                this.$element.hasClass("is-open") ? this.close(t, e) : this.open(t, e)
            }
        }, {
            key: "_handleKeyboard", value: function (t) {
                var e = this;
                Foundation.Keyboard.handleKey(t, "OffCanvas", {
                    close: function () {
                        return e.close(), e.$lastTrigger.focus(), !0
                    }, handled: function () {
                        t.stopPropagation(), t.preventDefault()
                    }
                })
            }
        }, {
            key: "destroy", value: function () {
                this.close(), this.$element.off(".zf.trigger .zf.offcanvas"), this.$exiter.off(".zf.offcanvas"), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        closeOnClick: !0,
        transitionTime: 0,
        position: "left",
        forceTop: !0,
        isRevealed: !1,
        revealOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-",
        trapFocus: !1
    }, Foundation.plugin(e, "OffCanvas")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Tabs"), Foundation.Keyboard.register("Tabs", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "previous",
                ARROW_DOWN: "next",
                ARROW_LEFT: "previous"
            })
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                var e = this;
                if (this.$tabTitles = this.$element.find("." + this.options.linkClass), this.$tabContent = t('[data-tabs-content="' + this.$element[0].id + '"]'), this.$tabTitles.each(function () {
                        var i = t(this), n = i.find("a"), s = i.hasClass("is-active"), o = n[0].hash.slice(1), a = n[0].id ? n[0].id : o + "-label", r = t("#" + o);
                        i.attr({role: "presentation"}), n.attr({
                            role: "tab",
                            "aria-controls": o,
                            "aria-selected": s,
                            id: a
                        }), r.attr({
                            role: "tabpanel",
                            "aria-hidden": !s,
                            "aria-labelledby": a
                        }), s && e.options.autoFocus && n.focus()
                    }), this.options.matchHeight) {
                    var i = this.$tabContent.find("img");
                    i.length ? Foundation.onImagesLoaded(i, this._setHeight.bind(this)) : this._setHeight()
                }
                this._events()
            }
        }, {
            key: "_events", value: function () {
                this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), t(window).on("changed.zf.mediaquery", this._setHeightMqHandler))
            }
        }, {
            key: "_addClickHandler", value: function () {
                var e = this;
                this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function (i) {
                    i.preventDefault(), i.stopPropagation(), t(this).hasClass("is-active") || e._handleTabChange(t(this))
                })
            }
        }, {
            key: "_addKeyHandler", value: function () {
                var e = this;
                e.$element.find("li:first-of-type"), e.$element.find("li:last-of-type");
                this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function (i) {
                    if (9 !== i.which) {
                        var n, s, o = t(this), a = o.parent("ul").children("li");
                        a.each(function (i) {
                            return t(this).is(o) ? void(e.options.wrapOnKeys ? (n = 0 === i ? a.last() : a.eq(i - 1),
                                s = i === a.length - 1 ? a.first() : a.eq(i + 1)) : (n = a.eq(Math.max(0, i - 1)), s = a.eq(Math.min(i + 1, a.length - 1)))) : void 0
                        }), Foundation.Keyboard.handleKey(i, "Tabs", {
                            open: function () {
                                o.find('[role="tab"]').focus(), e._handleTabChange(o)
                            }, previous: function () {
                                n.find('[role="tab"]').focus(), e._handleTabChange(n)
                            }, next: function () {
                                s.find('[role="tab"]').focus(), e._handleTabChange(s)
                            }, handled: function () {
                                i.stopPropagation(), i.preventDefault()
                            }
                        })
                    }
                })
            }
        }, {
            key: "_handleTabChange", value: function (e) {
                var i = e.find('[role="tab"]'), n = i[0].hash, s = this.$tabContent.find(n), o = this.$element.find("." + this.options.linkClass + ".is-active").removeClass("is-active").find('[role="tab"]').attr({"aria-selected": "false"});
                t("#" + o.attr("aria-controls")).removeClass("is-active").attr({"aria-hidden": "true"}), e.addClass("is-active"), i.attr({"aria-selected": "true"}), s.addClass("is-active").attr({"aria-hidden": "false"}), this.$element.trigger("change.zf.tabs", [e])
            }
        }, {
            key: "selectTab", value: function (t) {
                var e;
                e = "object" == typeof t ? t[0].id : t, e.indexOf("#") < 0 && (e = "#" + e);
                var i = this.$tabTitles.find('[href="' + e + '"]').parent("." + this.options.linkClass);
                this._handleTabChange(i)
            }
        }, {
            key: "_setHeight", value: function () {
                var e = 0;
                this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function () {
                    var i = t(this), n = i.hasClass("is-active");
                    n || i.css({visibility: "hidden", display: "block"});
                    var s = this.getBoundingClientRect().height;
                    n || i.css({visibility: "", display: ""}), e = s > e ? s : e
                }).css("height", e + "px")
            }
        }, {
            key: "destroy", value: function () {
                this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide(), this.options.matchHeight && null != this._setHeightMqHandler && t(window).off("changed.zf.mediaquery", this._setHeightMqHandler), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        linkClass: "tabs-title",
        panelClass: "tabs-panel"
    }, Foundation.plugin(e, "Tabs")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    function e() {
        return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent)
    }

    function i() {
        return /Android/.test(window.navigator.userAgent)
    }

    function n() {
        return e() || i()
    }

    var s = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Reveal"), Foundation.Keyboard.register("Reveal", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close",
                TAB: "tab_forward",
                SHIFT_TAB: "tab_backward"
            })
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {mq: Foundation.MediaQuery.current}, this.isMobile = n(), this.$anchor = t(t('[data-open="' + this.id + '"]').length ? '[data-open="' + this.id + '"]' : '[data-toggle="' + this.id + '"]'), this.$anchor.attr({
                    "aria-controls": this.id,
                    "aria-haspopup": !0,
                    tabindex: 0
                }), (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), this.$element.attr({
                    role: "dialog",
                    "aria-hidden": !0,
                    "data-yeti-box": this.id,
                    "data-resize": this.id
                }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(t("body")), this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#" + this.id && t(window).one("load.zf.reveal", this.open.bind(this))
            }
        }, {
            key: "_makeOverlay", value: function (e) {
                var i = t("<div></div>").addClass("reveal-overlay").appendTo("body");
                return i
            }
        }, {
            key: "_updatePosition", value: function () {
                var e, i, n = this.$element.outerWidth(), s = t(window).width(), o = this.$element.outerHeight(), a = t(window).height();
                e = "auto" === this.options.hOffset ? parseInt((s - n) / 2, 10) : parseInt(this.options.hOffset, 10), i = "auto" === this.options.vOffset ? o > a ? parseInt(Math.min(100, a / 10), 10) : parseInt((a - o) / 4, 10) : parseInt(this.options.vOffset, 10), this.$element.css({top: i + "px"}), this.$overlay && "auto" === this.options.hOffset || (this.$element.css({left: e + "px"}), this.$element.css({margin: "0px"}))
            }
        }, {
            key: "_events", value: function () {
                var e = this, i = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this), "close.zf.trigger": function (n, s) {
                        return n.target === i.$element[0] || t(n.target).parents("[data-closable]")[0] === s ? e.close.apply(e) : void 0
                    }, "toggle.zf.trigger": this.toggle.bind(this), "resizeme.zf.trigger": function () {
                        i._updatePosition()
                    }
                }), this.$anchor.length && this.$anchor.on("keydown.zf.reveal", function (t) {
                    13 !== t.which && 32 !== t.which || (t.stopPropagation(), t.preventDefault(), i.open())
                }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function (e) {
                    e.target !== i.$element[0] && !t.contains(i.$element[0], e.target) && t.contains(document, e.target) && i.close()
                }), this.options.deepLink && t(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this))
            }
        }, {
            key: "_handleState", value: function (t) {
                window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open()
            }
        }, {
            key: "open", value: function () {
                var e = this;
                if (this.options.deepLink) {
                    var i = "#" + this.id;
                    window.history.pushState ? window.history.pushState(null, null, i) : window.location.hash = i
                }
                if (this.isActive = !0, this.$element.css({visibility: "hidden"}).show().scrollTop(0), this.options.overlay && this.$overlay.css({visibility: "hidden"}).show(), this._updatePosition(), this.$element.hide().css({visibility: ""}), this.$overlay && (this.$overlay.css({visibility: ""}).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id), this.options.animationIn) {
                    var n;
                    !function () {
                        var t = function () {
                            n.$element.attr({"aria-hidden": !1, tabindex: -1}).focus()
                        };
                        n = e, e.options.overlay && Foundation.Motion.animateIn(e.$overlay, "fade-in"), Foundation.Motion.animateIn(e.$element, e.options.animationIn, function () {
                            e.focusableElements = Foundation.Keyboard.findFocusable(e.$element), t()
                        })
                    }()
                } else this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay);
                this.$element.attr({
                    "aria-hidden": !1,
                    tabindex: -1
                }).focus(), this.$element.trigger("open.zf.reveal"), this.isMobile ? (this.originalScrollPos = window.pageYOffset, t("html, body").addClass("is-reveal-open")) : t("body").addClass("is-reveal-open"), setTimeout(function () {
                    e._extraHandlers()
                }, 0)
            }
        }, {
            key: "_extraHandlers", value: function () {
                var e = this;
                this.focusableElements = Foundation.Keyboard.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || t("body").on("click.zf.reveal", function (i) {
                    i.target !== e.$element[0] && !t.contains(e.$element[0], i.target) && t.contains(document, i.target) && e.close()
                }), this.options.closeOnEsc && t(window).on("keydown.zf.reveal", function (t) {
                    Foundation.Keyboard.handleKey(t, "Reveal", {
                        close: function () {
                            e.options.closeOnEsc && (e.close(), e.$anchor.focus())
                        }
                    })
                }), this.$element.on("keydown.zf.reveal", function (i) {
                    var n = t(this);
                    Foundation.Keyboard.handleKey(i, "Reveal", {
                        tab_forward: function () {
                            return e.focusableElements = Foundation.Keyboard.findFocusable(e.$element), e.$element.find(":focus").is(e.focusableElements.eq(-1)) ? (e.focusableElements.eq(0).focus(), !0) : 0 === e.focusableElements.length ? !0 : void 0
                        }, tab_backward: function () {
                            return e.focusableElements = Foundation.Keyboard.findFocusable(e.$element), e.$element.find(":focus").is(e.focusableElements.eq(0)) || e.$element.is(":focus") ? (e.focusableElements.eq(-1).focus(), !0) : 0 === e.focusableElements.length ? !0 : void 0
                        }, open: function () {
                            e.$element.find(":focus").is(e.$element.find("[data-close]")) ? setTimeout(function () {
                                e.$anchor.focus()
                            }, 1) : n.is(e.focusableElements) && e.open()
                        }, close: function () {
                            e.options.closeOnEsc && (e.close(), e.$anchor.focus())
                        }, handled: function (t) {
                            t && i.preventDefault()
                        }
                    })
                })
            }
        }, {
            key: "close", value: function () {
                function e() {
                    i.isMobile ? (t("html, body").removeClass("is-reveal-open"), i.originalScrollPos && (t("body").scrollTop(i.originalScrollPos), i.originalScrollPos = null)) : t("body").removeClass("is-reveal-open"), i.$element.attr("aria-hidden", !0), i.$element.trigger("closed.zf.reveal")
                }

                if (!this.isActive || !this.$element.is(":visible"))return !1;
                var i = this;
                this.options.animationOut ? (this.options.overlay ? Foundation.Motion.animateOut(this.$overlay, "fade-out", e) : e(), Foundation.Motion.animateOut(this.$element, this.options.animationOut)) : (this.options.overlay ? this.$overlay.hide(0, e) : e(), this.$element.hide(this.options.hideDelay)), this.options.closeOnEsc && t(window).off("keydown.zf.reveal"), !this.options.overlay && this.options.closeOnClick && t("body").off("click.zf.reveal"), this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), this.isActive = !1, i.options.deepLink && (window.history.replaceState ? window.history.replaceState("", document.title, window.location.pathname) : window.location.hash = "")
            }
        }, {
            key: "toggle", value: function () {
                this.isActive ? this.close() : this.open()
            }
        }, {
            key: "destroy", value: function () {
                this.options.overlay && (this.$element.appendTo(t("body")), this.$overlay.hide().off().remove()), this.$element.hide().off(), this.$anchor.off(".zf"), t(window).off(".zf.reveal:" + this.id), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    s.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: "auto",
        hOffset: "auto",
        fullScreen: !1,
        btmOffsetPct: 10,
        overlay: !0,
        resetOnClose: !1,
        deepLink: !1
    }, Foundation.plugin(s, "Reveal")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this.isActive = !1, this.isClick = !1, this._init(), Foundation.registerPlugin(this, "Tooltip")
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                var e = this.$element.attr("aria-describedby") || Foundation.GetYoDigits(6, "tooltip");
                this.options.positionClass = this.options.positionClass || this._getPositionClass(this.$element), this.options.tipText = this.options.tipText || this.$element.attr("title"), this.template = this.options.template ? t(this.options.template) : this._buildTemplate(e), this.template.appendTo(document.body).text(this.options.tipText).hide(), this.$element.attr({
                    title: "",
                    "aria-describedby": e,
                    "data-yeti-box": e,
                    "data-toggle": e,
                    "data-resize": e
                }).addClass(this.options.triggerClass), this.usedPositions = [], this.counter = 4, this.classChanged = !1, this._events()
            }
        }, {
            key: "_getPositionClass", value: function (t) {
                if (!t)return "";
                var e = t[0].className.match(/\b(top|left|right)\b/g);
                return e = e ? e[0] : ""
            }
        }, {
            key: "_buildTemplate", value: function (e) {
                var i = (this.options.tooltipClass + " " + this.options.positionClass + " " + this.options.templateClasses).trim(), n = t("<div></div>").addClass(i).attr({
                    role: "tooltip",
                    "aria-hidden": !0,
                    "data-is-active": !1,
                    "data-is-focus": !1,
                    id: e
                });
                return n
            }
        }, {
            key: "_reposition", value: function (t) {
                this.usedPositions.push(t ? t : "bottom"), !t && this.usedPositions.indexOf("top") < 0 ? this.template.addClass("top") : "top" === t && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : "left" === t && this.usedPositions.indexOf("right") < 0 ? this.template.removeClass(t).addClass("right") : "right" === t && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(t).addClass("left") : !t && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.addClass("left") : "top" === t && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(t).addClass("left") : "left" === t && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : "right" === t && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : this.template.removeClass(t), this.classChanged = !0, this.counter--
            }
        }, {
            key: "_setPosition", value: function () {
                var t = this._getPositionClass(this.template), e = Foundation.Box.GetDimensions(this.template), i = Foundation.Box.GetDimensions(this.$element), n = "left" === t ? "left" : "right" === t ? "left" : "top", s = "top" === n ? "height" : "width";
                "height" === s ? this.options.vOffset : this.options.hOffset;
                if (e.width >= e.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.template))return this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                    width: i.windowDims.width - 2 * this.options.hOffset,
                    height: "auto"
                }), !1;
                for (this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center " + (t || "bottom"), this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.template) && this.counter;)this._reposition(t), this._setPosition()
            }
        }, {
            key: "show", value: function () {
                if ("all" !== this.options.showOn && !Foundation.MediaQuery.atLeast(this.options.showOn))return !1;
                var t = this;
                this.template.css("visibility", "hidden").show(), this._setPosition(), this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), this.template.attr({
                    "data-is-active": !0,
                    "aria-hidden": !1
                }), t.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function () {
                }), this.$element.trigger("show.zf.tooltip")
            }
        }, {
            key: "hide", value: function () {
                var t = this;
                this.template.stop().attr({
                    "aria-hidden": !0,
                    "data-is-active": !1
                }).fadeOut(this.options.fadeOutDuration, function () {
                    t.isActive = !1, t.isClick = !1, t.classChanged && (t.template.removeClass(t._getPositionClass(t.template)).addClass(t.options.positionClass), t.usedPositions = [], t.counter = 4, t.classChanged = !1)
                }), this.$element.trigger("hide.zf.tooltip")
            }
        }, {
            key: "_events", value: function () {
                var t = this, e = (this.template, !1);
                this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function (e) {
                    t.isActive || (t.timeout = setTimeout(function () {
                        t.show()
                    }, t.options.hoverDelay))
                }).on("mouseleave.zf.tooltip", function (i) {
                    clearTimeout(t.timeout), (!e || t.isClick && !t.options.clickOpen) && t.hide()
                }), this.options.clickOpen ? this.$element.on("mousedown.zf.tooltip", function (e) {
                    e.stopImmediatePropagation(), t.isClick || (t.isClick = !0, !t.options.disableHover && t.$element.attr("tabindex") || t.isActive || t.show())
                }) : this.$element.on("mousedown.zf.tooltip", function (e) {
                    e.stopImmediatePropagation(), t.isClick = !0
                }), this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function (e) {
                    t.isActive ? t.hide() : t.show()
                }), this.$element.on({"close.zf.trigger": this.hide.bind(this)}), this.$element.on("focus.zf.tooltip", function (i) {
                    return e = !0, t.isClick ? (t.options.clickOpen || (e = !1), !1) : void t.show()
                }).on("focusout.zf.tooltip", function (i) {
                    e = !1, t.isClick = !1, t.hide()
                }).on("resizeme.zf.trigger", function () {
                    t.isActive && t._setPosition()
                })
            }
        }, {
            key: "toggle", value: function () {
                this.isActive ? this.hide() : this.show()
            }
        }, {
            key: "destroy", value: function () {
                this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tootip").removeAttr("aria-describedby").removeAttr("data-yeti-box").removeAttr("data-toggle").removeAttr("data-resize"), this.template.remove(), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        disableForTouch: !1,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        positionClass: "",
        vOffset: 10,
        hOffset: 12
    }, Foundation.plugin(e, "Tooltip")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Orbit"), Foundation.Keyboard.register("Orbit", {
                ltr: {
                    ARROW_RIGHT: "next",
                    ARROW_LEFT: "previous"
                }, rtl: {ARROW_LEFT: "next", ARROW_RIGHT: "previous"}
            })
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                this.$wrapper = this.$element.find("." + this.options.containerClass), this.$slides = this.$element.find("." + this.options.slideClass);
                var t = this.$element.find("img"), e = this.$slides.filter(".is-active");
                e.length || this.$slides.eq(0).addClass("is-active"), this.options.useMUI || this.$slides.addClass("no-motionui"), t.length ? Foundation.onImagesLoaded(t, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(), this.options.bullets && this._loadBullets(), this._events(), this.options.autoPlay && this.$slides.length > 1 && this.geoSync(), this.options.accessible && this.$wrapper.attr("tabindex", 0)
            }
        }, {
            key: "_loadBullets", value: function () {
                this.$bullets = this.$element.find("." + this.options.boxOfBullets).find("button")
            }
        }, {
            key: "geoSync", value: function () {
                var t = this;
                this.timer = new Foundation.Timer(this.$element, {
                    duration: this.options.timerDelay,
                    infinite: !1
                }, function () {
                    t.changeSlide(!0)
                }), this.timer.start()
            }
        }, {
            key: "_prepareForOrbit", value: function () {
                var t = this;
                this._setWrapperHeight(function (e) {
                    t._setSlideHeight(e)
                })
            }
        }, {
            key: "_setWrapperHeight", value: function (e) {
                var i, n = 0, s = 0;
                this.$slides.each(function () {
                    i = this.getBoundingClientRect().height, t(this).attr("data-slide", s), s && t(this).css({
                        position: "relative",
                        display: "none"
                    }), n = i > n ? i : n, s++
                }), s === this.$slides.length && (this.$wrapper.css({height: n}), e(n))
            }
        }, {
            key: "_setSlideHeight", value: function (e) {
                this.$slides.each(function () {
                    t(this).css("max-height", e)
                })
            }
        }, {
            key: "_events", value: function () {
                var e = this;
                if (this.$slides.length > 1) {
                    if (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function (t) {
                            t.preventDefault(), e.changeSlide(!0)
                        }).on("swiperight.zf.orbit", function (t) {
                            t.preventDefault(), e.changeSlide(!1)
                        }), this.options.autoPlay && (this.$slides.on("click.zf.orbit", function () {
                            e.$element.data("clickedOn", !e.$element.data("clickedOn")), e.timer[e.$element.data("clickedOn") ? "pause" : "start"]()
                        }), this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", function () {
                            e.timer.pause()
                        }).on("mouseleave.zf.orbit", function () {
                            e.$element.data("clickedOn") || e.timer.start()
                        })), this.options.navButtons) {
                        var i = this.$element.find("." + this.options.nextClass + ", ." + this.options.prevClass);
                        i.attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function (i) {
                            i.preventDefault(), e.changeSlide(t(this).hasClass(e.options.nextClass))
                        })
                    }
                    this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", function () {
                        if (/is-active/g.test(this.className))return !1;
                        var i = t(this).data("slide"), n = i > e.$slides.filter(".is-active").data("slide"), s = e.$slides.eq(i);
                        e.changeSlide(n, s, i)
                    }), this.options.accessible && this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function (i) {
                        Foundation.Keyboard.handleKey(i, "Orbit", {
                            next: function () {
                                e.changeSlide(!0)
                            }, previous: function () {
                                e.changeSlide(!1)
                            }, handled: function () {
                                t(i.target).is(e.$bullets) && e.$bullets.filter(".is-active").focus()
                            }
                        })
                    })
                }
            }
        }, {
            key: "changeSlide", value: function (t, e, i) {
                var n = this.$slides.filter(".is-active").eq(0);
                if (/mui/g.test(n[0].className))return !1;
                var s, o = this.$slides.first(), a = this.$slides.last(), r = t ? "Right" : "Left", l = t ? "Left" : "Right", u = this;
                s = e ? e : t ? this.options.infiniteWrap ? n.next("." + this.options.slideClass).length ? n.next("." + this.options.slideClass) : o : n.next("." + this.options.slideClass) : this.options.infiniteWrap ? n.prev("." + this.options.slideClass).length ? n.prev("." + this.options.slideClass) : a : n.prev("." + this.options.slideClass), s.length && (this.$element.trigger("beforeslidechange.zf.orbit", [n, s]), this.options.bullets && (i = i || this.$slides.index(s), this._updateBullets(i)), this.options.useMUI ? (Foundation.Motion.animateIn(s.addClass("is-active").css({
                    position: "absolute",
                    top: 0
                }), this.options["animInFrom" + r], function () {
                    s.css({position: "relative", display: "block"}).attr("aria-live", "polite")
                }), Foundation.Motion.animateOut(n.removeClass("is-active"), this.options["animOutTo" + l], function () {
                    n.removeAttr("aria-live"), u.options.autoPlay && !u.timer.isPaused && u.timer.restart()
                })) : (n.removeClass("is-active is-in").removeAttr("aria-live").hide(), s.addClass("is-active is-in").attr("aria-live", "polite").show(), this.options.autoPlay && !this.timer.isPaused && this.timer.restart()), this.$element.trigger("slidechange.zf.orbit", [s]))
            }
        }, {
            key: "_updateBullets", value: function (t) {
                var e = this.$element.find("." + this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(), i = e.find("span:last").detach();
                this.$bullets.eq(t).addClass("is-active").append(i)
            }
        }, {
            key: "destroy", value: function () {
                this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        bullets: !0,
        navButtons: !0,
        animInFromRight: "slide-in-right",
        animOutToRight: "slide-out-right",
        animInFromLeft: "slide-in-left",
        animOutToLeft: "slide-out-left",
        autoPlay: !0,
        timerDelay: 5e3,
        infiniteWrap: !0,
        swipe: !0,
        pauseOnHover: !0,
        accessible: !0,
        containerClass: "orbit-container",
        slideClass: "orbit-slide",
        boxOfBullets: "orbit-bullets",
        nextClass: "orbit-next",
        prevClass: "orbit-previous",
        useMUI: !0
    }, Foundation.plugin(e, "Orbit")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    function e(t) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * t
    }

    var i = function () {
        function i(e, n) {
            _classCallCheck(this, i), this.$element = e, this.options = t.extend({}, i.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Sticky")
        }

        return _createClass(i, [{
            key: "_init", value: function () {
                var e = this.$element.parent("[data-sticky-container]"), i = this.$element[0].id || Foundation.GetYoDigits(6, "sticky"), n = this;
                e.length || (this.wasWrapped = !0), this.$container = e.length ? e : t(this.options.container).wrapInner(this.$element), this.$container.addClass(this.options.containerClass), this.$element.addClass(this.options.stickyClass).attr({"data-resize": i}), this.scrollCount = this.options.checkEvery, this.isStuck = !1, t(window).one("load.zf.sticky", function () {
                    n.containerHeight = "none" == n.$element.css("display") ? 0 : n.$element[0].getBoundingClientRect().height, n.$container.css("height", n.containerHeight), n.elemHeight = n.containerHeight, "" !== n.options.anchor ? n.$anchor = t("#" + n.options.anchor) : n._parsePoints(), n._setSizes(function () {
                        n._calc(!1)
                    }), n._events(i.split("-").reverse().join("-"))
                })
            }
        }, {
            key: "_parsePoints", value: function () {
                for (var e = "" == this.options.topAnchor ? 1 : this.options.topAnchor, i = "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor, n = [e, i], s = {}, o = 0, a = n.length; a > o && n[o]; o++) {
                    var r;
                    if ("number" == typeof n[o]) r = n[o]; else {
                        var l = n[o].split(":"), u = t("#" + l[0]);
                        r = u.offset().top, l[1] && "bottom" === l[1].toLowerCase() && (r += u[0].getBoundingClientRect().height)
                    }
                    s[o] = r
                }
                this.points = s
            }
        }, {
            key: "_events", value: function (e) {
                var i = this, n = this.scrollListener = "scroll.zf." + e;
                this.isOn || (this.canStick && (this.isOn = !0, t(window).off(n).on(n, function (t) {
                    0 === i.scrollCount ? (i.scrollCount = i.options.checkEvery, i._setSizes(function () {
                        i._calc(!1, window.pageYOffset)
                    })) : (i.scrollCount--, i._calc(!1, window.pageYOffset))
                })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function (t, s) {
                    i._setSizes(function () {
                        i._calc(!1), i.canStick ? i.isOn || i._events(e) : i.isOn && i._pauseListeners(n)
                    })
                }))
            }
        }, {
            key: "_pauseListeners", value: function (e) {
                this.isOn = !1, t(window).off(e), this.$element.trigger("pause.zf.sticky")
            }
        }, {
            key: "_calc", value: function (t, e) {
                return t && this._setSizes(), this.canStick ? (e || (e = window.pageYOffset), void(e >= this.topPoint ? e <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0))) : (this.isStuck && this._removeSticky(!0), !1)
            }
        }, {
            key: "_setSticky", value: function () {
                var t = this, e = this.options.stickTo, i = "top" === e ? "marginTop" : "marginBottom", n = "top" === e ? "bottom" : "top", s = {};
                s[i] = this.options[i] + "em", s[e] = 0, s[n] = "auto", s.left = this.$container.offset().left + parseInt(window.getComputedStyle(this.$container[0])["padding-left"], 10), this.isStuck = !0, this.$element.removeClass("is-anchored is-at-" + n).addClass("is-stuck is-at-" + e).css(s).trigger("sticky.zf.stuckto:" + e), this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
                    t._setSizes()
                })
            }
        }, {
            key: "_removeSticky", value: function (t) {
                var e = this.options.stickTo, i = "top" === e, n = {}, s = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight, o = i ? "marginTop" : "marginBottom", a = t ? "top" : "bottom";
                n[o] = 0, n.bottom = "auto", t ? n.top = 0 : n.top = s, n.left = "", this.isStuck = !1, this.$element.removeClass("is-stuck is-at-" + e).addClass("is-anchored is-at-" + a).css(n).trigger("sticky.zf.unstuckfrom:" + a)
            }
        }, {
            key: "_setSizes", value: function (t) {
                this.canStick = Foundation.MediaQuery.atLeast(this.options.stickyOn), this.canStick || t && "function" == typeof t && t();
                var e = this.$container[0].getBoundingClientRect().width, i = window.getComputedStyle(this.$container[0]), n = parseInt(i["padding-right"], 10);
                this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), this.$element.css({"max-width": e - n + "px"});
                var s = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                if ("none" == this.$element.css("display") && (s = 0), this.containerHeight = s, this.$container.css({height: s}), this.elemHeight = s, this.isStuck) this.$element.css({left: this.$container.offset().left + parseInt(i["padding-left"], 10)}); else if (this.$element.hasClass("is-at-bottom")) {
                    var o = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                    this.$element.css("top", o)
                }
                this._setBreakPoints(s, function () {
                    t && "function" == typeof t && t()
                })
            }
        }, {
            key: "_setBreakPoints", value: function (t, i) {
                if (!this.canStick) {
                    if (!i || "function" != typeof i)return !1;
                    i()
                }
                var n = e(this.options.marginTop), s = e(this.options.marginBottom), o = this.points ? this.points[0] : this.$anchor.offset().top, a = this.points ? this.points[1] : o + this.anchorHeight, r = window.innerHeight;
                "top" === this.options.stickTo ? (o -= n, a -= t + n) : "bottom" === this.options.stickTo && (o -= r - (t + s), a -= r - s), this.topPoint = o, this.bottomPoint = a, i && "function" == typeof i && i()
            }
        }, {
            key: "destroy", value: function () {
                this._removeSticky(!0), this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({
                    height: "",
                    top: "",
                    bottom: "",
                    "max-width": ""
                }).off("resizeme.zf.trigger"), this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"), t(window).off(this.scrollListener), this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({height: ""}), Foundation.unregisterPlugin(this)
            }
        }]), i
    }();
    i.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        checkEvery: -1
    }, Foundation.plugin(i, "Sticky")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, n), this.rules = [], this.currentPath = "", this._init(), this._events(), Foundation.registerPlugin(this, "Interchange")
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                this._addBreakpoints(), this._generateRules(), this._reflow()
            }
        }, {
            key: "_events", value: function () {
                t(window).on("resize.zf.interchange", Foundation.util.throttle(this._reflow.bind(this), 50))
            }
        }, {
            key: "_reflow", value: function () {
                var t;
                for (var e in this.rules)if (this.rules.hasOwnProperty(e)) {
                    var i = this.rules[e];
                    window.matchMedia(i.query).matches && (t = i)
                }
                t && this.replace(t.path)
            }
        }, {
            key: "_addBreakpoints", value: function () {
                for (var t in Foundation.MediaQuery.queries)if (Foundation.MediaQuery.queries.hasOwnProperty(t)) {
                    var i = Foundation.MediaQuery.queries[t];
                    e.SPECIAL_QUERIES[i.name] = i.value
                }
            }
        }, {
            key: "_generateRules", value: function (t) {
                var i, n = [];
                i = this.options.rules ? this.options.rules : this.$element.data("interchange").match(/\[.*?\]/g);
                for (var s in i)if (i.hasOwnProperty(s)) {
                    var o = i[s].slice(1, -1).split(", "), a = o.slice(0, -1).join(""), r = o[o.length - 1];
                    e.SPECIAL_QUERIES[r] && (r = e.SPECIAL_QUERIES[r]), n.push({path: a, query: r})
                }
                this.rules = n
            }
        }, {
            key: "replace", value: function (e) {
                if (this.currentPath !== e) {
                    var i = this, n = "replaced.zf.interchange";
                    "IMG" === this.$element[0].nodeName ? this.$element.attr("src", e).on("load", function () {
                        i.currentPath = e
                    }).trigger(n) : e.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? this.$element.css({"background-image": "url(" + e + ")"}).trigger(n) : t.get(e, function (s) {
                        i.$element.html(s).trigger(n), t(s).foundation(), i.currentPath = e
                    })
                }
            }
        }, {
            key: "destroy", value: function () {
            }
        }]), e
    }();
    e.defaults = {rules: null}, e.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    }, Foundation.plugin(e, "Interchange")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = t(i), this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), this._events(), Foundation.registerPlugin(this, "ResponsiveToggle")
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                var e = this.$element.data("responsive-toggle");
                e || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."), this.$targetMenu = t("#" + e), this.$toggler = this.$element.find("[data-toggle]"), this._update()
            }
        }, {
            key: "_events", value: function () {
                this._updateMqHandler = this._update.bind(this), t(window).on("changed.zf.mediaquery", this._updateMqHandler), this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this))
            }
        }, {
            key: "_update", value: function () {
                Foundation.MediaQuery.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), this.$targetMenu.hide())
            }
        }, {
            key: "toggleMenu", value: function () {
                Foundation.MediaQuery.atLeast(this.options.hideFor) || (this.$targetMenu.toggle(0), this.$element.trigger("toggled.zf.responsiveToggle"))
            }
        }, {
            key: "destroy", value: function () {
                this.$element.off(".zf.responsiveToggle"), this.$toggler.off(".zf.responsiveToggle"), t(window).off("changed.zf.mediaquery", this._updateMqHandler), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {hideFor: "medium"}, Foundation.plugin(e, "ResponsiveToggle")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, i.data(), n), this.className = "", this._init(), this._events(), Foundation.registerPlugin(this, "Toggler")
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                var e;
                this.options.animate ? (e = this.options.animate.split(" "), this.animationIn = e[0], this.animationOut = e[1] || null) : (e = this.$element.data("toggler"), this.className = "." === e[0] ? e.slice(1) : e);
                var i = this.$element[0].id;
                t('[data-open="' + i + '"], [data-close="' + i + '"], [data-toggle="' + i + '"]').attr("aria-controls", i), this.$element.attr("aria-expanded", !this.$element.is(":hidden"))
            }
        }, {
            key: "_events",
            value: function () {
                this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
            }
        }, {
            key: "toggle", value: function () {
                this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
            }
        }, {
            key: "_toggleClass", value: function () {
                this.$element.toggleClass(this.className);
                var t = this.$element.hasClass(this.className);
                t ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"), this._updateARIA(t)
            }
        }, {
            key: "_toggleAnimate", value: function () {
                var t = this;
                this.$element.is(":hidden") ? Foundation.Motion.animateIn(this.$element, this.animationIn, function () {
                    t._updateARIA(!0), this.trigger("on.zf.toggler")
                }) : Foundation.Motion.animateOut(this.$element, this.animationOut, function () {
                    t._updateARIA(!1), this.trigger("off.zf.toggler")
                })
            }
        }, {
            key: "_updateARIA", value: function (t) {
                this.$element.attr("aria-expanded", !!t)
            }
        }, {
            key: "destroy", value: function () {
                this.$element.off(".zf.toggler"), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {animate: !1}, Foundation.plugin(e, "Toggler")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i) {
            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Abide")
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                this.$inputs = this.$element.find("input, textarea, select"), this._events()
            }
        }, {
            key: "_events", value: function () {
                var e = this;
                this.$element.off(".abide").on("reset.zf.abide", function () {
                    e.resetForm()
                }).on("submit.zf.abide", function () {
                    return e.validateForm()
                }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function (i) {
                    e.validateInput(t(i.target))
                }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function (i) {
                    e.validateInput(t(i.target))
                })
            }
        }, {
            key: "_reflow", value: function () {
                this._init()
            }
        }, {
            key: "requiredCheck", value: function (t) {
                if (!t.attr("required"))return !0;
                var e = !0;
                switch (t[0].type) {
                    case"checkbox":
                        e = t[0].checked;
                        break;
                    case"select":
                    case"select-one":
                    case"select-multiple":
                        var i = t.find("option:selected");
                        i.length && i.val() || (e = !1);
                        break;
                    default:
                        t.val() && t.val().length || (e = !1)
                }
                return e
            }
        }, {
            key: "findFormError", value: function (t) {
                var e = t.siblings(this.options.formErrorSelector);
                return e.length || (e = t.parent().find(this.options.formErrorSelector)), e
            }
        }, {
            key: "findLabel", value: function (t) {
                var e = t[0].id, i = this.$element.find('label[for="' + e + '"]');
                return i.length ? i : t.closest("label")
            }
        }, {
            key: "findRadioLabels", value: function (e) {
                var i = this, n = e.map(function (e, n) {
                    var s = n.id, o = i.$element.find('label[for="' + s + '"]');
                    return o.length || (o = t(n).closest("label")), o[0]
                });
                return t(n)
            }
        }, {
            key: "addErrorClasses", value: function (t) {
                var e = this.findLabel(t), i = this.findFormError(t);
                e.length && e.addClass(this.options.labelErrorClass), i.length && i.addClass(this.options.formErrorClass), t.addClass(this.options.inputErrorClass).attr("data-invalid", "")
            }
        }, {
            key: "removeRadioErrorClasses", value: function (t) {
                var e = this.$element.find(':radio[name="' + t + '"]'), i = this.findRadioLabels(e), n = this.findFormError(e);
                i.length && i.removeClass(this.options.labelErrorClass), n.length && n.removeClass(this.options.formErrorClass), e.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "removeErrorClasses", value: function (t) {
                if ("radio" == t[0].type)return this.removeRadioErrorClasses(t.attr("name"));
                var e = this.findLabel(t), i = this.findFormError(t);
                e.length && e.removeClass(this.options.labelErrorClass), i.length && i.removeClass(this.options.formErrorClass), t.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "validateInput", value: function (t) {
                var e = this.requiredCheck(t), i = !1, n = !0, s = t.attr("data-validator"), o = !0;
                if (t.is("[data-abide-ignore]") || t.is('[type="hidden"]'))return !0;
                switch (t[0].type) {
                    case"radio":
                        i = this.validateRadio(t.attr("name"));
                        break;
                    case"checkbox":
                        i = e;
                        break;
                    case"select":
                    case"select-one":
                    case"select-multiple":
                        i = e;
                        break;
                    default:
                        i = this.validateText(t)
                }
                s && (n = this.matchValidation(t, s, t.attr("required"))), t.attr("data-equalto") && (o = this.options.validators.equalTo(t));
                var a = -1 === [e, i, n, o].indexOf(!1), r = (a ? "valid" : "invalid") + ".zf.abide";
                return this[a ? "removeErrorClasses" : "addErrorClasses"](t), t.trigger(r, [t]), a
            }
        }, {
            key: "validateForm", value: function () {
                var e = [], i = this;
                this.$inputs.each(function () {
                    e.push(i.validateInput(t(this)))
                });
                var n = -1 === e.indexOf(!1);
                return this.$element.find("[data-abide-error]").css("display", n ? "none" : "block"), this.$element.trigger((n ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]), n
            }
        }, {
            key: "validateText", value: function (t, e) {
                e = e || t.attr("pattern") || t.attr("type");
                var i = t.val(), n = !1;
                return i.length ? n = this.options.patterns.hasOwnProperty(e) ? this.options.patterns[e].test(i) : e !== t.attr("type") ? new RegExp(e).test(i) : !0 : t.prop("required") || (n = !0), n
            }
        }, {
            key: "validateRadio", value: function (e) {
                var i = this.$element.find(':radio[name="' + e + '"]'), n = !1, s = !1;
                return i.each(function (e, i) {
                    t(i).attr("required") && (s = !0)
                }), s || (n = !0), n || i.each(function (e, i) {
                    t(i).prop("checked") && (n = !0)
                }), n
            }
        }, {
            key: "matchValidation", value: function (t, e, i) {
                var n = this;
                i = !!i;
                var s = e.split(" ").map(function (e) {
                    return n.options.validators[e](t, i, t.parent())
                });
                return -1 === s.indexOf(!1)
            }
        }, {
            key: "resetForm", value: function () {
                var e = this.$element, i = this.options;
                t("." + i.labelErrorClass, e).not("small").removeClass(i.labelErrorClass), t("." + i.inputErrorClass, e).not("small").removeClass(i.inputErrorClass), t(i.formErrorSelector + "." + i.formErrorClass).removeClass(i.formErrorClass), e.find("[data-abide-error]").css("display", "none"), t(":input", e).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid"), t(":input:radio", e).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), t(":input:checkbox", e).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), e.trigger("formreset.zf.abide", [e])
            }
        }, {
            key: "destroy", value: function () {
                var e = this;
                this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function () {
                    e.removeErrorClasses(t(this))
                }), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        liveValidate: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        },
        validators: {
            equalTo: function (e, i, n) {
                return t("#" + e.attr("data-equalto")).val() === e.val()
            }
        }
    }, Foundation.plugin(e, "Abide")
}(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
!function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Equalizer")
        }

        return _createClass(e, [{
            key: "_init", value: function () {
                var e = this.$element.attr("data-equalizer") || "", i = this.$element.find('[data-equalizer-watch="' + e + '"]');
                this.$watched = i.length ? i : this.$element.find("[data-equalizer-watch]"), this.$element.attr("data-resize", e || Foundation.GetYoDigits(6, "eq")), this.hasNested = this.$element.find("[data-equalizer]").length > 0, this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0, this.isOn = !1, this._bindHandler = {
                    onResizeMeBound: this._onResizeMe.bind(this),
                    onPostEqualizedBound: this._onPostEqualized.bind(this)
                };
                var n, s = this.$element.find("img");
                this.options.equalizeOn ? (n = this._checkMQ(), t(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), (void 0 !== n && n === !1 || void 0 === n) && (s.length ? Foundation.onImagesLoaded(s, this._reflow.bind(this)) : this._reflow())
            }
        }, {
            key: "_pauseEvents", value: function () {
                this.isOn = !1, this.$element.off({
                    ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                    "resizeme.zf.trigger": this._bindHandler.onResizeMeBound
                })
            }
        }, {
            key: "_onResizeMe", value: function (t) {
                this._reflow()
            }
        }, {
            key: "_onPostEqualized", value: function (t) {
                t.target !== this.$element[0] && this._reflow()
            }
        }, {
            key: "_events", value: function () {
                this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound), this.isOn = !0
            }
        }, {
            key: "_checkMQ", value: function () {
                var t = !Foundation.MediaQuery.atLeast(this.options.equalizeOn);
                return t ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), t
            }
        }, {
            key: "_killswitch", value: function () {
            }
        }, {
            key: "_reflow", value: function () {
                return !this.options.equalizeOnStack && this._isStacked() ? (this.$watched.css("height", "auto"), !1) : void(this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this)))
            }
        }, {
            key: "_isStacked", value: function () {
                return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top
            }
        }, {
            key: "getHeights", value: function (t) {
                for (var e = [], i = 0, n = this.$watched.length; n > i; i++)this.$watched[i].style.height = "auto", e.push(this.$watched[i].offsetHeight);
                t(e)
            }
        }, {
            key: "getHeightsByRow", value: function (e) {
                var i = this.$watched.length ? this.$watched.first().offset().top : 0, n = [], s = 0;
                n[s] = [];
                for (var o = 0, a = this.$watched.length; a > o; o++) {
                    this.$watched[o].style.height = "auto";
                    var r = t(this.$watched[o]).offset().top;
                    r != i && (s++, n[s] = [], i = r), n[s].push([this.$watched[o], this.$watched[o].offsetHeight])
                }
                for (var l = 0, u = n.length; u > l; l++) {
                    var d = t(n[l]).map(function () {
                        return this[1]
                    }).get(), h = Math.max.apply(null, d);
                    n[l].push(h)
                }
                e(n)
            }
        }, {
            key: "applyHeight", value: function (t) {
                var e = Math.max.apply(null, t);
                this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", e), this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "applyHeightByRow", value: function (e) {
                this.$element.trigger("preequalized.zf.equalizer");
                for (var i = 0, n = e.length; n > i; i++) {
                    var s = e[i].length, o = e[i][s - 1];
                    if (2 >= s) t(e[i][0][0]).css({height: "auto"}); else {
                        this.$element.trigger("preequalizedrow.zf.equalizer");
                        for (var a = 0, r = s - 1; r > a; a++)t(e[i][a][0]).css({height: o});
                        this.$element.trigger("postequalizedrow.zf.equalizer")
                    }
                }
                this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "destroy", value: function () {
                this._pauseEvents(), this.$watched.css("height", "auto"), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {equalizeOnStack: !1, equalizeByRow: !1, equalizeOn: ""}, Foundation.plugin(e, "Equalizer")
}(jQuery);

/*! BG Loaded */
!function (a) {
    a.fn.bgLoaded = function (b) {
        var c = this, d = {
            afterLoaded: function () {
                this.addClass("bg-loaded")
            }
        }, e = a.extend({}, d, b);
        c.each(function () {
            var b = a(this), c = b.css("background-image").split(", ");
            b.data("loaded-count", 0), a.each(c, function (d, f) {
                var g = f.replace(/^url\(["']?/, "").replace(/["']?\)$/, "");
                a("<img/>").attr("src", g).load(function () {
                    a(this).remove(), b.data("loaded-count", b.data("loaded-count") + 1), b.data("loaded-count") >= c.length && e.afterLoaded.call(b)
                })
            })
        })
    }
}(jQuery);

/*! Cookie plugin */
jQuery.cookie = function (b, j, m) {
    if (typeof j != "undefined") {
        m = m || {};
        if (j === null) {
            j = "";
            m.expires = -1
        }
        var e = "";
        if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
            var f;
            if (typeof m.expires == "number") {
                f = new Date();
                f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
            } else {
                f = m.expires
            }
            e = "; expires=" + f.toUTCString()
        }
        var l = m.path ? "; path=" + (m.path) : "";
        var g = m.domain ? "; domain=" + (m.domain) : "";
        var a = m.secure ? "; secure" : "";
        document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("")
    } else {
        var d = null;
        if (document.cookie && document.cookie != "") {
            var k = document.cookie.split(";");
            for (var h = 0; h < k.length; h++) {
                var c = jQuery.trim(k[h]);
                if (c.substring(0, b.length + 1) == (b + "=")) {
                    d = decodeURIComponent(c.substring(b.length + 1));
                    break
                }
            }
        }
        return d
    }
};

/*! Currency tools  */
if (typeof Currency === "undefined") {
    var Currency = {}
}
Currency.cookie = {
    configuration: {expires: 365, path: "/", domain: window.location.hostname},
    name: "currency",
    write: function (a) {
        jQuery.cookie(this.name, a, this.configuration)
    },
    read: function () {
        return jQuery.cookie(this.name)
    },
    destroy: function () {
        jQuery.cookie(this.name, null, this.configuration)
    }
};
Currency.moneyFormats = {
    USD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} USD"},
    EUR: {money_format: "&euro;{{amount}}", money_with_currency_format: "&euro;{{amount}} EUR"},
    GBP: {money_format: "&pound;{{amount}}", money_with_currency_format: "&pound;{{amount}} GBP"},
    CAD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} CAD"},
    ALL: {money_format: "Lek {{amount}}", money_with_currency_format: "Lek {{amount}} ALL"},
    DZD: {money_format: "DA {{amount}}", money_with_currency_format: "DA {{amount}} DZD"},
    AOA: {money_format: "Kz{{amount}}", money_with_currency_format: "Kz{{amount}} AOA"},
    ARS: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} ARS"
    },
    AMD: {money_format: "{{amount}} AMD", money_with_currency_format: "{{amount}} AMD"},
    AWG: {money_format: "Afl{{amount}}", money_with_currency_format: "Afl{{amount}} AWG"},
    AUD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} AUD"},
    BBD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} Bds"},
    AZN: {money_format: "m.{{amount}}", money_with_currency_format: "m.{{amount}} AZN"},
    BDT: {money_format: "Tk {{amount}}", money_with_currency_format: "Tk {{amount}} BDT"},
    BSD: {money_format: "BS${{amount}}", money_with_currency_format: "BS${{amount}} BSD"},
    BHD: {money_format: "{{amount}}0 BD", money_with_currency_format: "{{amount}}0 BHD"},
    BYR: {money_format: "Br {{amount}}", money_with_currency_format: "Br {{amount}} BYR"},
    BZD: {money_format: "BZ${{amount}}", money_with_currency_format: "BZ${{amount}} BZD"},
    BTN: {money_format: "Nu {{amount}}", money_with_currency_format: "Nu {{amount}} BTN"},
    BAM: {
        money_format: "KM {{amount_with_comma_separator}}",
        money_with_currency_format: "KM {{amount_with_comma_separator}} BAM"
    },
    BRL: {
        money_format: "R$ {{amount_with_comma_separator}}",
        money_with_currency_format: "R$ {{amount_with_comma_separator}} BRL"
    },
    BOB: {
        money_format: "Bs{{amount_with_comma_separator}}",
        money_with_currency_format: "Bs{{amount_with_comma_separator}} BOB"
    },
    BWP: {money_format: "P{{amount}}", money_with_currency_format: "P{{amount}} BWP"},
    BND: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} BND"},
    BGN: {money_format: "{{amount}} лв", money_with_currency_format: "{{amount}} лв BGN"},
    MMK: {money_format: "K{{amount}}", money_with_currency_format: "K{{amount}} MMK"},
    KHR: {money_format: "KHR{{amount}}", money_with_currency_format: "KHR{{amount}}"},
    KYD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} KYD"},
    XAF: {money_format: "FCFA{{amount}}", money_with_currency_format: "FCFA{{amount}} XAF"},
    CLP: {money_format: "${{amount_no_decimals}}", money_with_currency_format: "${{amount_no_decimals}} CLP"},
    CNY: {money_format: "&#165;{{amount}}", money_with_currency_format: "&#165;{{amount}} CNY"},
    COP: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} COP"
    },
    CRC: {
        money_format: "&#8353; {{amount_with_comma_separator}}",
        money_with_currency_format: "&#8353; {{amount_with_comma_separator}} CRC"
    },
    HRK: {
        money_format: "{{amount_with_comma_separator}} kn",
        money_with_currency_format: "{{amount_with_comma_separator}} kn HRK"
    },
    CZK: {
        money_format: "{{amount_with_comma_separator}} K&#269;",
        money_with_currency_format: "{{amount_with_comma_separator}} K&#269;"
    },
    DKK: {
        money_format: "{{amount_with_comma_separator}}",
        money_with_currency_format: "kr.{{amount_with_comma_separator}}"
    },
    DOP: {money_format: "RD$ {{amount}}", money_with_currency_format: "RD$ {{amount}}"},
    XCD: {money_format: "${{amount}}", money_with_currency_format: "EC${{amount}}"},
    EGP: {money_format: "LE {{amount}}", money_with_currency_format: "LE {{amount}} EGP"},
    ETB: {money_format: "Br{{amount}}", money_with_currency_format: "Br{{amount}} ETB"},
    XPF: {
        money_format: "{{amount_no_decimals_with_comma_separator}} XPF",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} XPF"
    },
    FJD: {money_format: "${{amount}}", money_with_currency_format: "FJ${{amount}}"},
    GMD: {money_format: "D {{amount}}", money_with_currency_format: "D {{amount}} GMD"},
    GHS: {money_format: "GH&#8373;{{amount}}", money_with_currency_format: "GH&#8373;{{amount}}"},
    GTQ: {money_format: "Q{{amount}}", money_with_currency_format: "{{amount}} GTQ"},
    GYD: {money_format: "G${{amount}}", money_with_currency_format: "${{amount}} GYD"},
    GEL: {money_format: "{{amount}} GEL", money_with_currency_format: "{{amount}} GEL"},
    HNL: {money_format: "L {{amount}}", money_with_currency_format: "L {{amount}} HNL"},
    HKD: {money_format: "${{amount}}", money_with_currency_format: "HK${{amount}}"},
    HUF: {
        money_format: "{{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} Ft"
    },
    ISK: {money_format: "{{amount_no_decimals}} kr", money_with_currency_format: "{{amount_no_decimals}} kr ISK"},
    INR: {money_format: "Rs. {{amount}}", money_with_currency_format: "Rs. {{amount}}"},
    IDR: {
        money_format: "{{amount_with_comma_separator}}",
        money_with_currency_format: "Rp {{amount_with_comma_separator}}"
    },
    ILS: {money_format: "{{amount}} NIS", money_with_currency_format: "{{amount}} NIS"},
    JMD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} JMD"},
    JPY: {money_format: "&#165;{{amount_no_decimals}}", money_with_currency_format: "&#165;{{amount_no_decimals}} JPY"},
    JEP: {money_format: "&pound;{{amount}}", money_with_currency_format: "&pound;{{amount}} JEP"},
    JOD: {money_format: "{{amount}}0 JD", money_with_currency_format: "{{amount}}0 JOD"},
    KZT: {money_format: "{{amount}} KZT", money_with_currency_format: "{{amount}} KZT"},
    KES: {money_format: "KSh{{amount}}", money_with_currency_format: "KSh{{amount}}"},
    KWD: {money_format: "{{amount}}0 KD", money_with_currency_format: "{{amount}}0 KWD"},
    KGS: {money_format: "лв{{amount}}", money_with_currency_format: "лв{{amount}}"},
    LVL: {money_format: "Ls {{amount}}", money_with_currency_format: "Ls {{amount}} LVL"},
    LBP: {money_format: "L&pound;{{amount}}", money_with_currency_format: "L&pound;{{amount}} LBP"},
    LTL: {money_format: "{{amount}} Lt", money_with_currency_format: "{{amount}} Lt"},
    MGA: {money_format: "Ar {{amount}}", money_with_currency_format: "Ar {{amount}} MGA"},
    MKD: {money_format: "ден {{amount}}", money_with_currency_format: "ден {{amount}} MKD"},
    MOP: {money_format: "MOP${{amount}}", money_with_currency_format: "MOP${{amount}}"},
    MVR: {money_format: "Rf{{amount}}", money_with_currency_format: "Rf{{amount}} MRf"},
    MXN: {money_format: "$ {{amount}}", money_with_currency_format: "$ {{amount}} MXN"},
    MYR: {money_format: "RM{{amount}} MYR", money_with_currency_format: "RM{{amount}} MYR"},
    MUR: {money_format: "Rs {{amount}}", money_with_currency_format: "Rs {{amount}} MUR"},
    MDL: {money_format: "{{amount}} MDL", money_with_currency_format: "{{amount}} MDL"},
    MAD: {money_format: "{{amount}} dh", money_with_currency_format: "Dh {{amount}} MAD"},
    MNT: {money_format: "{{amount_no_decimals}} &#8366", money_with_currency_format: "{{amount_no_decimals}} MNT"},
    MZN: {money_format: "{{amount}} Mt", money_with_currency_format: "Mt {{amount}} MZN"},
    NAD: {money_format: "N${{amount}}", money_with_currency_format: "N${{amount}} NAD"},
    NPR: {money_format: "Rs{{amount}}", money_with_currency_format: "Rs{{amount}} NPR"},
    ANG: {money_format: "&fnof;{{amount}}", money_with_currency_format: "{{amount}} NA&fnof;"},
    NZD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} NZD"},
    NIO: {money_format: "C${{amount}}", money_with_currency_format: "C${{amount}} NIO"},
    NGN: {money_format: "&#8358;{{amount}}", money_with_currency_format: "&#8358;{{amount}} NGN"},
    NOK: {
        money_format: "kr {{amount_with_comma_separator}}",
        money_with_currency_format: "kr {{amount_with_comma_separator}} NOK"
    },
    OMR: {
        money_format: "{{amount_with_comma_separator}} OMR",
        money_with_currency_format: "{{amount_with_comma_separator}} OMR"
    },
    PKR: {money_format: "Rs.{{amount}}", money_with_currency_format: "Rs.{{amount}} PKR"},
    PGK: {money_format: "K {{amount}}", money_with_currency_format: "K {{amount}} PGK"},
    PYG: {
        money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "Gs. {{amount_no_decimals_with_comma_separator}} PYG"
    },
    PEN: {money_format: "S/. {{amount}}", money_with_currency_format: "S/. {{amount}} PEN"},
    PHP: {money_format: "&#8369;{{amount}}", money_with_currency_format: "&#8369;{{amount}} PHP"},
    PLN: {
        money_format: "{{amount_with_comma_separator}} zl",
        money_with_currency_format: "{{amount_with_comma_separator}} zl PLN"
    },
    QAR: {
        money_format: "QAR {{amount_with_comma_separator}}",
        money_with_currency_format: "QAR {{amount_with_comma_separator}}"
    },
    RON: {
        money_format: "{{amount_with_comma_separator}} lei",
        money_with_currency_format: "{{amount_with_comma_separator}} lei RON"
    },
    RUB: {
        money_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
        money_with_currency_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
    },
    RWF: {money_format: "{{amount_no_decimals}} RF", money_with_currency_format: "{{amount_no_decimals}} RWF"},
    WST: {money_format: "WS$ {{amount}}", money_with_currency_format: "WS$ {{amount}} WST"},
    SAR: {money_format: "{{amount}} SR", money_with_currency_format: "{{amount}} SAR"},
    STD: {money_format: "Db {{amount}}", money_with_currency_format: "Db {{amount}} STD"},
    RSD: {money_format: "{{amount}} RSD", money_with_currency_format: "{{amount}} RSD"},
    SCR: {money_format: "Rs {{amount}}", money_with_currency_format: "Rs {{amount}} SCR"},
    SGD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} SGD"},
    SYP: {money_format: "S&pound;{{amount}}", money_with_currency_format: "S&pound;{{amount}} SYP"},
    ZAR: {money_format: "R {{amount}}", money_with_currency_format: "R {{amount}} ZAR"},
    KRW: {
        money_format: "&#8361;{{amount_no_decimals}}",
        money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW"
    },
    LKR: {money_format: "Rs {{amount}}", money_with_currency_format: "Rs {{amount}} LKR"},
    SEK: {money_format: "{{amount_no_decimals}} kr", money_with_currency_format: "{{amount_no_decimals}} kr SEK"},
    CHF: {money_format: "SFr. {{amount}}", money_with_currency_format: "SFr. {{amount}} CHF"},
    TWD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} TWD"},
    THB: {money_format: "{{amount}} &#xe3f;", money_with_currency_format: "{{amount}} &#xe3f; THB"},
    TZS: {money_format: "{{amount}} TZS", money_with_currency_format: "{{amount}} TZS"},
    TTD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} TTD"},
    TND: {money_format: "{{amount}}", money_with_currency_format: "{{amount}} DT"},
    TRY: {money_format: "{{amount}}TL", money_with_currency_format: "{{amount}}TL"},
    UGX: {money_format: "Ush {{amount_no_decimals}}", money_with_currency_format: "Ush {{amount_no_decimals}} UGX"},
    UAH: {money_format: "₴{{amount}}", money_with_currency_format: "₴{{amount}} UAH"},
    AED: {money_format: "Dhs. {{amount}}", money_with_currency_format: "Dhs. {{amount}} AED"},
    UYU: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} UYU"
    },
    VUV: {money_format: "${{amount}}", money_with_currency_format: "${{amount}}VT"},
    VEF: {
        money_format: "Bs. {{amount_with_comma_separator}}",
        money_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF"
    },
    VND: {
        money_format: "{{amount_no_decimals_with_comma_separator}}&#8363;",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} VND"
    },
    XBT: {money_format: "{{amount_no_decimals}} BTC", money_with_currency_format: "{{amount_no_decimals}} BTC"},
    XOF: {money_format: "CFA{{amount}}", money_with_currency_format: "CFA{{amount}} XOF"},
    ZMW: {
        money_format: "K{{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "ZMW{{amount_no_decimals_with_comma_separator}}"
    }
};
Currency.formatMoney = function (b, g) {
    if (typeof Shopify.formatMoney === "function") {
        return Shopify.formatMoney(b, g)
    }
    if (typeof b == "string") {
        b = b.replace(".", "")
    }
    var f = "";
    var e = /\{\{\s*(\w+)\s*\}\}/;
    var a = g || "${{amount}}";

    function c(h, i) {
        return (typeof h == "undefined" ? i : h)
    }

    function d(m, k, l, j) {
        k = c(k, 2);
        l = c(l, ",");
        j = c(j, ".");
        if (isNaN(m) || m == null) {
            return 0
        }
        m = (m / 100).toFixed(k);
        var n = m.split("."), i = n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + l), h = n[1] ? (j + n[1]) : "";
        return i + h
    }

    switch (a.match(e)[1]) {
        case"amount":
            f = d(b, 2);
            break;
        case"amount_no_decimals":
            f = d(b, 0);
            break;
        case"amount_with_comma_separator":
            f = d(b, 2, ".", ",");
            break;
        case"amount_no_decimals_with_comma_separator":
            f = d(b, 0, ".", ",");
            break
    }
    return a.replace(e, f)
};
Currency.currentCurrency = "";
Currency.format = "money_with_currency_format";
Currency.convertAll = function (c, b, a, d) {
    jQuery(a || "span.money").each(function () {
        if (jQuery(this).attr("data-currency") === b) {
            return
        }
        if (jQuery(this).attr("data-currency-" + b)) {
            jQuery(this).html(jQuery(this).attr("data-currency-" + b))
        } else {
            var e = 0;
            var f = Currency.moneyFormats[c][d || Currency.format] || "{{amount}}";
            var g = Currency.moneyFormats[b][d || Currency.format] || "{{amount}}";
            if (f.indexOf("amount_no_decimals") !== -1) {
                e = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ""), 10) * 100, c, b)
            } else {
                if (c === "JOD" || c == "KWD" || c == "BHD") {
                    e = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ""), 10) / 10, c, b)
                } else {
                    e = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ""), 10), c, b)
                }
            }
            var h = Currency.formatMoney(e, g);
            jQuery(this).html(h);
            jQuery(this).attr("data-currency-" + b, h)
        }
        jQuery(this).attr("data-currency", b)
    });
    this.currentCurrency = b;
    this.cookie.write(b)
};
