define("commons/commons-all", [], function(require) {
    var _ = require("/wt/sea-modules/commons/underscore/2.4.1/lodash.js");
    window._ = _;
    window._.str = require("/wt/sea-modules/commons/underscore-string/underscore.string.js");
    _.mixin(_.str);
    
    require("/wt/sea-modules/commons/json/1.0.3/json.js");
    window.moment = require("/wt/sea-modules/commons/moment/2.0.0/moment.js");
    require("/wt/sea-modules/commons/qycloud/firebugx.js");
    window.webhelper = require("/wt/sea-modules/commons/qycloud/webhelper.js");
    window.Handlebars = require("/wt/sea-modules/commons/handlebars-runtime/1.0.0/handlebars.js");
    
    require("backbone/backbone-all");
    require("bootstrap/bootstrap-all");
});
// lodash.underscore
!function() {
    function T(a, b, c) {
        for (var d = (c || 0) - 1, e = a ? a.length : 0; ++d < e; )
            if (a[d] === b)
                return d;
        return -1
    }
    
    function U(a, b) {
        var c = typeof b;
        if (a = a.cache, "boolean" == c || null == b)
            return a[b] ? 0 : -1;
        "number" != c && "string" != c && (c = "object");
        var d = "number" == c ? b : f + b;
        return a = (a = a[c]) && a[d], "object" == c ? a && T(a, b) > -1 ? 0 : -1 : a ? 0 : -1
    }
    
    function V(a) {
        var b = this.cache, c = typeof a;
        if ("boolean" == c || null == a)
            b[a] = !0;
        else {
            "number" != c && "string" != c && (c = "object");
            var d = "number" == c ? a : f + a, e = b[c] || (b[c] = {});
            "object" == c ? (e[d] || (e[d] = [])).push(a) : e[d] = !0
        }
    }
    
    function W(a) {
        return a.charCodeAt(0)
    }
    
    function X(a, b) {
        for (var c = a.criteria, d = b.criteria, e = -1, f = c.length; ++e < f; ) {
            var g = c[e], h = d[e];
            if (g !== h) {
                if (g > h || "undefined" == typeof g)
                    return 1;
                if (h > g || "undefined" == typeof h)
                    return -1
            }
        }
        return a.index - b.index
    }
    
    function Y(a) {
        var b = -1, c = a.length, d = a[0], e = a[0 | c / 2], f = a[c - 1];
        if (d && "object" == typeof d && e && "object" == typeof e && f && "object" == typeof f)
            return !1;
        var g = _();
        g["false"] = g["null"] = g["true"] = g.undefined = !1;
        var h = _();
        for (h.array = a, h.cache = g, h.push = V; ++b < c; )
            h.push(a[b]);
        return h
    }
    
    function Z(a) {
        return "\\" + N[a]
    }
    
    function $() {
        return b.pop() || []
    }
    
    function _() {
        return c.pop() || {array: null,cache: null,criteria: null,"false": !1,index: 0,"null": !1,number: null,object: null,push: null,string: null,"true": !1,undefined: !1,value: null}
    }
    
    function ab(a) {
        return "function" != typeof a.toString && "string" == typeof (a + "")
    }
    
    function bb(a) {
        a.length = 0, b.length < h && b.push(a)
    }
    
    function cb(a) {
        var b = a.cache;
        b && cb(b), a.array = a.cache = a.criteria = a.object = a.number = a.string = a.value = null, c.length < h && c.push(a)
    }
    
    function db(a, b, c) {
        b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
        for (var d = -1, e = c - b || 0, f = Array(0 > e ? 0 : e); ++d < e; )
            f[d] = a[b + d];
        return f
    }
    
    function eb(b) {
        function Nb(a) {
            return a && "object" == typeof a && !kc(a) && vb.call(a, "__wrapped__") ? a : new Ob(a)
        }
        
        function Ob(a, b) {
            this.__chain__ = !!b, this.__wrapped__ = a
        }
        
        function Rb(a) {
            function e() {
                if (c) {
                    var a = db(c);
                    wb.apply(a, arguments)
                }
                if (this instanceof e) {
                    var f = Tb(b.prototype), g = b.apply(f, a || arguments);
                    return Qc(g) ? g : f
                }
                return b.apply(d, a || arguments)
            }
            
            var b = a[0], c = a[2], d = a[4];
            return gc(e, a), e
        }
        
        function Sb(a, b, c, d, e) {
            if (c) {
                var f = c(a);
                if ("undefined" != typeof f)
                    return f
            }
            var g = Qc(a);
            if (!g)
                return a;
            var h = ob.call(a);
            if (!I[h] || !Pb.nodeClass && ab(a))
                return a;
            var i = Lb[h];
            switch (h) {
                case A:
                case B:
                    return new i(+a);
                case E:
                case H:
                    return new i(a);
                case G:
                    return f = i(a.source, o.exec(a)), f.lastIndex = a.lastIndex, f
            }
            var j = kc(a);
            if (b) {
                var k = !d;
                d || (d = $()), e || (e = $());
                for (var l = d.length; l--; )
                    if (d[l] == a)
                        return e[l];
                f = j ? i(a.length) : {}
            } else
                f = j ? db(a) : vc({}, a);
            return j && (vb.call(a, "index") && (f.index = a.index), vb.call(a, "input") && (f.input = a.input)), b ? (d.push(a), e.push(f), (j ? uc : Ec)(a, function(a, g) {
                f[g] = Sb(a, b, c, d, e)
            }), k && (bb(d), bb(e)), f) : f
        }
        
        function Tb(a) {
            return Qc(a) ? Cb(a) : {}
        }
        
        function Ub(a, b, c) {
            if ("function" != typeof a)
                return pe;
            if ("undefined" == typeof b || !("prototype" in a))
                return a;
            var d = a.__bindData__;
            if ("undefined" == typeof d && (Pb.funcNames && (d = !a.name), d = d || !Pb.funcDecomp, !d)) {
                var e = tb.call(a);
                Pb.funcNames || (d = !p.test(e)), d || (d = t.test(e), gc(a, d))
            }
            if (d === !1 || d !== !0 && 1 & d[1])
                return a;
            switch (c) {
                case 1:
                    return function(c) {
                        return a.call(b, c)
                    };
                case 2:
                    return function(c, d) {
                        return a.call(b, c, d)
                    };
                case 3:
                    return function(c, d, e) {
                        return a.call(b, c, d, e)
                    };
                case 4:
                    return function(c, d, e, f) {
                        return a.call(b, c, d, e, f)
                    }
            }
            return $d(a, b)
        }
        
        function Vb(a) {
            function m() {
                var a = h ? f : this;
                if (d) {
                    var n = db(d);
                    wb.apply(n, arguments)
                }
                if ((e || j) && (n || (n = db(arguments)), e && wb.apply(n, e), j && n.length < g))
                    return c |= 16, Vb([b, k ? c : -4 & c, n, null, f, g]);
                if (n || (n = arguments), i && (b = a[l]), this instanceof m) {
                    a = Tb(b.prototype);
                    var o = b.apply(a, n);
                    return Qc(o) ? o : a
                }
                return b.apply(a, n)
            }
            
            var b = a[0], c = a[1], d = a[2], e = a[3], f = a[4], g = a[5], h = 1 & c, i = 2 & c, j = 4 & c, k = 8 & c, l = b;
            return gc(m, a), m
        }
        
        function Wb(a, b) {
            var c = -1, d = ec(), e = a ? a.length : 0, f = e >= g && d === T, h = [];
            if (f) {
                var i = Y(b);
                i ? (d = U, b = i) : f = !1
            }
            for (; ++c < e; ) {
                var j = a[c];
                d(b, j) < 0 && h.push(j)
            }
            return f && cb(b), h
        }
        
        function Xb(a, b, c, d) {
            for (var e = (d || 0) - 1, f = a ? a.length : 0, g = []; ++e < f; ) {
                var h = a[e];
                if (h && "object" == typeof h && "number" == typeof h.length && (kc(h) || jc(h))) {
                    b || (h = Xb(h, b, c));
                    var i = -1, j = h.length, k = g.length;
                    for (g.length += j; ++i < j; )
                        g[k++] = h[i]
                } else
                    c || g.push(h)
            }
            return g
        }
        
        function Yb(a, b, c, d, e, f) {
            if (c) {
                var g = c(a, b);
                if ("undefined" != typeof g)
                    return !!g
            }
            if (a === b)
                return 0 !== a || 1 / a == 1 / b;
            var h = typeof a, i = typeof b;
            if (!(a !== a || a && M[h] || b && M[i]))
                return !1;
            if (null == a || null == b)
                return a === b;
            var j = ob.call(a), k = ob.call(b);
            if (j == y && (j = F), k == y && (k = F), j != k)
                return !1;
            switch (j) {
                case A:
                case B:
                    return +a == +b;
                case E:
                    return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                case G:
                case H:
                    return a == hb(b)
            }
            var l = j == z;
            if (!l) {
                var m = vb.call(a, "__wrapped__"), n = vb.call(b, "__wrapped__");
                if (m || n)
                    return Yb(m ? a.__wrapped__ : a, n ? b.__wrapped__ : b, c, d, e, f);
                if (j != F || !Pb.nodeClass && (ab(a) || ab(b)))
                    return !1;
                var o = !Pb.argsObject && jc(a) ? V : a.constructor, p = !Pb.argsObject && jc(b) ? V : b.constructor;
                if (o != p && !(Pc(o) && o instanceof o && Pc(p) && p instanceof p) && "constructor" in a && "constructor" in b)
                    return !1
            }
            var q = !e;
            e || (e = $()), f || (f = $());
            for (var r = e.length; r--; )
                if (e[r] == a)
                    return f[r] == b;
            var s = 0;
            if (g = !0, e.push(a), f.push(b), l) {
                if (r = a.length, s = b.length, g = s == r, g || d)
                    for (; s--; ) {
                        var t = r, u = b[s];
                        if (d)
                            for (; t-- && !(g = Yb(a[t], u, c, d, e, f)); )
                                ;
                        else if (!(g = Yb(a[s], u, c, d, e, f)))
                            break
                    }
            } else
                Cc(b, function(b, h, i) {
                    return vb.call(i, h) ? (s++, g = vb.call(a, h) && Yb(a[h], b, c, d, e, f)) : void 0
                }), g && !d && Cc(a, function(a, b, c) {
                    return vb.call(c, b) ? g = --s > -1 : void 0
                });
            return e.pop(), f.pop(), q && (bb(e), bb(f)), g
        }
        
        function Zb(a, b, c, d, e) {
            (kc(b) ? kd : Ec)(b, function(b, f) {
                var g, h, i = b, j = a[f];
                if (b && ((h = kc(b)) || Uc(b))) {
                    for (var k = d.length; k--; )
                        if (g = d[k] == b) {
                            j = e[k];
                            break
                        }
                    if (!g) {
                        var l;
                        c && (i = c(j, b), (l = "undefined" != typeof i) && (j = i)), l || (j = h ? kc(j) ? j : [] : Uc(j) ? j : {}), d.push(b), e.push(j), l || Zb(j, b, c, d, e)
                    }
                } else
                    c && (i = c(j, b), "undefined" == typeof i && (i = b)), "undefined" != typeof i && (j = i);
                a[f] = j
            })
        }
        
        function $b(a, b) {
            return a + sb(Kb() * (b - a + 1))
        }
        
        function _b(a, b, c) {
            var d = -1, e = ec(), f = a ? a.length : 0, h = [], i = !b && f >= g && e === T, j = c || i ? $() : h;
            if (i) {
                var k = Y(j);
                e = U, j = k
            }
            for (; ++d < f; ) {
                var l = a[d], m = c ? c(l, d, a) : l;
                (b ? !d || j[j.length - 1] !== m : e(j, m) < 0) && ((c || i) && j.push(m), h.push(l))
            }
            return i ? (bb(j.array), cb(j)) : c && bb(j), h
        }
        
        function ac(a) {
            return function(b, c, d) {
                var e = {};
                if (c = Nb.createCallback(c, d, 3), kc(b))
                    for (var f = -1, g = b.length; ++f < g; ) {
                        var h = b[f];
                        a(e, h, c(h, f, b), b)
                    }
                else
                    uc(b, function(b, d, f) {
                        a(e, b, c(b, d, f), f)
                    });
                return e
            }
        }
        
        function bc(a, b, c, d, e, f) {
            var g = 1 & b, h = 2 & b, i = 4 & b, k = 16 & b, l = 32 & b;
            if (!h && !Pc(a))
                throw new ib;
            k && !c.length && (b &= -17, k = c = !1), l && !d.length && (b &= -33, l = d = !1);
            var m = a && a.__bindData__;
            if (m && m !== !0)
                return m = db(m), m[2] && (m[2] = db(m[2])), m[3] && (m[3] = db(m[3])), !g || 1 & m[1] || (m[4] = e), !g && 1 & m[1] && (b |= 8), !i || 4 & m[1] || (m[5] = f), k && wb.apply(m[2] || (m[2] = []), c), l && Ab.apply(m[3] || (m[3] = []), d), m[1] |= b, bc.apply(null, m);
            var n = 1 == b || 17 === b ? Rb : Vb;
            return n([a, b, c, d, e, f])
        }
        
        function cc() {
            L.shadowedProps = w, L.array = L.bottom = L.loop = L.top = "", L.init = "iterable", L.useHas = !0;
            for (var a, b = 0; a = arguments[b]; b++)
                for (var c in a)
                    L[c] = a[c];
            var d = L.args;
            L.firstArg = /^[^,]+/.exec(d)[0];
            var f = Q("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + d + ") {\n" + Qb(L) + "\n}");
            return f(Ub, C, kb, vb, e, jc, kc, Wc, L.keys, lb, M, Mb, H, mb, ob)
        }
        
        function dc(a) {
            return qc[a]
        }
        
        function ec() {
            var a = (a = Nb.indexOf) === Jd ? T : a;
            return a
        }
        
        function fc(a) {
            return "function" == typeof a && pb.test(a)
        }
        
        function hc(a) {
            var b, c;
            return !a || ob.call(a) != F || (b = a.constructor, Pc(b) && !(b instanceof b)) || !Pb.argsClass && jc(a) || !Pb.nodeClass && ab(a) ? !1 : Pb.ownLast ? (Cc(a, function(a, b, d) {
                return c = vb.call(d, b), !1
            }), c !== !1) : (Cc(a, function(a, b) {
                c = b
            }), "undefined" == typeof c || vb.call(a, c))
        }
        
        function ic(a) {
            return rc[a]
        }
        
        function jc(a) {
            return a && "object" == typeof a && "number" == typeof a.length && ob.call(a) == y || !1
        }
        
        function wc(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = b, b = !1), Sb(a, b, "function" == typeof c && Ub(c, d, 1))
        }
        
        function xc(a, b, c) {
            return Sb(a, !0, "function" == typeof b && Ub(b, c, 1))
        }
        
        function yc(a, b) {
            var c = Tb(a);
            return b ? vc(c, b) : c
        }
        
        function Ac(a, b, c) {
            var d;
            return b = Nb.createCallback(b, c, 3), Ec(a, function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0
            }), d
        }
        
        function Bc(a, b, c) {
            var d;
            return b = Nb.createCallback(b, c, 3), Fc(a, function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0
            }), d
        }
        
        function Dc(a, b, c) {
            var d = [];
            Cc(a, function(a, b) {
                d.push(b, a)
            });
            var e = d.length;
            for (b = Ub(b, c, 3); e-- && b(d[e--], d[e], a) !== !1; )
                ;
            return a
        }
        
        function Fc(a, b, c) {
            var d = mc(a), e = d.length;
            for (b = Ub(b, c, 3); e--; ) {
                var f = d[e];
                if (b(a[f], f, a) === !1)
                    break
            }
            return a
        }
        
        function Gc(a) {
            var b = [];
            return Cc(a, function(a, c) {
                Pc(a) && b.push(c)
            }), b.sort()
        }
        
        function Hc(a, b) {
            return a ? vb.call(a, b) : !1
        }
        
        function Ic(a) {
            for (var b = -1, c = mc(a), d = c.length, e = {}; ++b < d; ) {
                var f = c[b];
                e[a[f]] = f
            }
            return e
        }
        
        function Jc(a) {
            return a === !0 || a === !1 || a && "object" == typeof a && ob.call(a) == A || !1
        }
        
        function Kc(a) {
            return a && "object" == typeof a && ob.call(a) == B || !1
        }
        
        function Lc(a) {
            return a && 1 === a.nodeType || !1
        }
        
        function Mc(a) {
            var b = !0;
            if (!a)
                return b;
            var c = ob.call(a), d = a.length;
            return c == z || c == H || (Pb.argsClass ? c == y : jc(a)) || c == F && "number" == typeof d && Pc(a.splice) ? !d : (Ec(a, function() {
                return b = !1
            }), b)
        }
        
        function Nc(a, b, c, d) {
            return Yb(a, b, "function" == typeof c && Ub(c, d, 2))
        }
        
        function Oc(a) {
            return Eb(a) && !Fb(parseFloat(a))
        }
        
        function Pc(a) {
            return "function" == typeof a
        }
        
        function Qc(a) {
            return !(!a || !M[typeof a])
        }
        
        function Rc(a) {
            return Tc(a) && a != +a
        }
        
        function Sc(a) {
            return null === a
        }
        
        function Tc(a) {
            return "number" == typeof a || a && "object" == typeof a && ob.call(a) == E || !1
        }
        
        function Vc(a) {
            return a && M[typeof a] && ob.call(a) == G || !1
        }
        
        function Wc(a) {
            return "string" == typeof a || a && "object" == typeof a && ob.call(a) == H || !1
        }
        
        function Xc(a) {
            return "undefined" == typeof a
        }
        
        function Yc(a, b, c) {
            var d = {};
            return b = Nb.createCallback(b, c, 3), Ec(a, function(a, c, e) {
                d[c] = b(a, c, e)
            }), d
        }
        
        function Zc(a) {
            var b = arguments, c = 2;
            if (!Qc(a))
                return a;
            if ("number" != typeof b[2] && (c = b.length), c > 3 && "function" == typeof b[c - 2])
                var d = Ub(b[--c - 1], b[c--], 2);
            else
                c > 2 && "function" == typeof b[c - 1] && (d = b[--c]);
            for (var e = db(arguments, 1, c), f = -1, g = $(), h = $(); ++f < c; )
                Zb(a, e[f], d, g, h);
            return bb(g), bb(h), a
        }
        
        function $c(a, b, c) {
            var d = {};
            if ("function" != typeof b) {
                var e = [];
                Cc(a, function(a, b) {
                    e.push(b)
                }), e = Wb(e, Xb(arguments, !0, !1, 1));
                for (var f = -1, g = e.length; ++f < g; ) {
                    var h = e[f];
                    d[h] = a[h]
                }
            } else
                b = Nb.createCallback(b, c, 3), Cc(a, function(a, c, e) {
                    b(a, c, e) || (d[c] = a)
                });
            return d
        }
        
        function _c(a) {
            for (var b = -1, d = mc(a), e = d.length, f = c(e); ++b < e; ) {
                var g = d[b];
                f[b] = [g, a[g]]
            }
            return f
        }
        
        function ad(a, b, c) {
            var d = {};
            if ("function" != typeof b)
                for (var e = -1, f = Xb(arguments, !0, !1, 1), g = Qc(a) ? f.length : 0; ++e < g; ) {
                    var h = f[e];
                    h in a && (d[h] = a[h])
                }
            else
                b = Nb.createCallback(b, c, 3), Cc(a, function(a, c, e) {
                    b(a, c, e) && (d[c] = a)
                });
            return d
        }
        
        function bd(a, b, c, d) {
            var e = kc(a);
            if (null == c)
                if (e)
                    c = [];
                else {
                    var f = a && a.constructor, g = f && f.prototype;
                    c = Tb(g)
                }
            return b && (b = Nb.createCallback(b, d, 4), (e ? uc : Ec)(a, function(a, d, e) {
                return b(c, a, d, e)
            })), c
        }
        
        function cd(a) {
            for (var b = -1, d = mc(a), e = d.length, f = c(e); ++b < e; )
                f[b] = a[d[b]];
            return f
        }
        
        function dd(a) {
            var b = arguments, d = -1, e = Xb(b, !0, !1, 1), f = b[2] && b[2][b[1]] === a ? 1 : e.length, g = c(f);
            for (Pb.unindexedChars && Wc(a) && (a = a.split("")); ++d < f; )
                g[d] = a[e[d]];
            return g
        }
        
        function ed(a, b, c) {
            var d = -1, e = ec(), f = a ? a.length : 0, g = !1;
            return c = (0 > c ? Hb(0, f + c) : c) || 0, kc(a) ? g = e(a, b, c) > -1 : "number" == typeof f ? g = (Wc(a) ? a.indexOf(b, c) : e(a, b, c)) > -1 : uc(a, function(a) {
                return ++d >= c ? !(g = a === b) : void 0
            }), g
        }
        
        function gd(a, b, c) {
            var d = !0;
            if (b = Nb.createCallback(b, c, 3), kc(a))
                for (var e = -1, f = a.length; ++e < f && (d = !!b(a[e], e, a)); )
                    ;
            else
                uc(a, function(a, c, e) {
                    return d = !!b(a, c, e)
                });
            return d
        }
        
        function hd(a, b, c) {
            var d = [];
            if (b = Nb.createCallback(b, c, 3), kc(a))
                for (var e = -1, f = a.length; ++e < f; ) {
                    var g = a[e];
                    b(g, e, a) && d.push(g)
                }
            else
                uc(a, function(a, c, e) {
                    b(a, c, e) && d.push(a)
                });
            return d
        }
        
        function id(a, b, c) {
            if (b = Nb.createCallback(b, c, 3), !kc(a)) {
                var g;
                return uc(a, function(a, c, d) {
                    return b(a, c, d) ? (g = a, !1) : void 0
                }), g
            }
            for (var d = -1, e = a.length; ++d < e; ) {
                var f = a[d];
                if (b(f, d, a))
                    return f
            }
        }
        
        function jd(a, b, c) {
            var d;
            return b = Nb.createCallback(b, c, 3), ld(a, function(a, c, e) {
                return b(a, c, e) ? (d = a, !1) : void 0
            }), d
        }
        
        function kd(a, b, c) {
            if (b && "undefined" == typeof c && kc(a))
                for (var d = -1, e = a.length; ++d < e && b(a[d], d, a) !== !1; )
                    ;
            else
                uc(a, b, c);
            return a
        }
        
        function ld(a, b, c) {
            var d = a, e = a ? a.length : 0;
            if (b = b && "undefined" == typeof c ? b : Ub(b, c, 3), kc(a))
                for (; e-- && b(a[e], e, a) !== !1; )
                    ;
            else {
                if ("number" != typeof e) {
                    var f = mc(a);
                    e = f.length
                } else
                    Pb.unindexedChars && Wc(a) && (d = a.split(""));
                uc(a, function(a, c, g) {
                    return c = f ? f[--e] : --e, b(d[c], c, g)
                })
            }
            return a
        }
        
        function od(a, b) {
            var d = db(arguments, 2), e = -1, f = "function" == typeof b, g = a ? a.length : 0, h = c("number" == typeof g ? g : 0);
            return kd(a, function(a) {
                h[++e] = (f ? b : a[b]).apply(a, d)
            }), h
        }
        
        function pd(a, b, d) {
            var e = -1, f = a ? a.length : 0, g = c("number" == typeof f ? f : 0);
            if (b = Nb.createCallback(b, d, 3), kc(a))
                for (; ++e < f; )
                    g[e] = b(a[e], e, a);
            else
                uc(a, function(a, c, d) {
                    g[++e] = b(a, c, d)
                });
            return g
        }
        
        function qd(a, b, c) {
            var d = -1 / 0, e = d;
            if ("function" != typeof b && c && c[b] === a && (b = null), null == b && kc(a))
                for (var f = -1, g = a.length; ++f < g; ) {
                    var h = a[f];
                    h > e && (e = h)
                }
            else
                b = null == b && Wc(a) ? W : Nb.createCallback(b, c, 3), uc(a, function(a, c, f) {
                    var g = b(a, c, f);
                    g > d && (d = g, e = a)
                });
            return e
        }
        
        function rd(a, b, c) {
            var d = 1 / 0, e = d;
            if ("function" != typeof b && c && c[b] === a && (b = null), null == b && kc(a))
                for (var f = -1, g = a.length; ++f < g; ) {
                    var h = a[f];
                    e > h && (e = h)
                }
            else
                b = null == b && Wc(a) ? W : Nb.createCallback(b, c, 3), uc(a, function(a, c, f) {
                    var g = b(a, c, f);
                    d > g && (d = g, e = a)
                });
            return e
        }
        
        function td(a, b, c, d) {
            var e = arguments.length < 3;
            if (b = Nb.createCallback(b, d, 4), kc(a)) {
                var f = -1, g = a.length;
                for (e && (c = a[++f]); ++f < g; )
                    c = b(c, a[f], f, a)
            } else
                uc(a, function(a, d, f) {
                    c = e ? (e = !1, a) : b(c, a, d, f)
                });
            return c
        }
        
        function ud(a, b, c, d) {
            var e = arguments.length < 3;
            return b = Nb.createCallback(b, d, 4), ld(a, function(a, d, f) {
                c = e ? (e = !1, a) : b(c, a, d, f)
            }), c
        }
        
        function vd(a, b, c) {
            return b = Nb.createCallback(b, c, 3), hd(a, function(a, c, d) {
                return !b(a, c, d)
            })
        }
        
        function wd(b, c, d) {
            if (b && "number" != typeof b.length ? b = cd(b) : Pb.unindexedChars && Wc(b) && (b = b.split("")), null == c || d)
                return b ? b[$b(0, b.length - 1)] : a;
            var e = xd(b);
            return e.length = Ib(Hb(0, c), e.length), e
        }
        
        function xd(a) {
            var b = -1, d = a ? a.length : 0, e = c("number" == typeof d ? d : 0);
            return kd(a, function(a) {
                var c = $b(0, ++b);
                e[b] = e[c], e[c] = a
            }), e
        }
        
        function yd(a) {
            var b = a ? a.length : 0;
            return "number" == typeof b ? b : mc(a).length
        }
        
        function zd(a, b, c) {
            var d;
            if (b = Nb.createCallback(b, c, 3), kc(a))
                for (var e = -1, f = a.length; ++e < f && !(d = b(a[e], e, a)); )
                    ;
            else
                uc(a, function(a, c, e) {
                    return !(d = b(a, c, e))
                });
            return !!d
        }
        
        function Ad(a, b, d) {
            var e = -1, f = kc(b), g = a ? a.length : 0, h = c("number" == typeof g ? g : 0);
            for (f || (b = Nb.createCallback(b, d, 3)), kd(a, function(a, c, d) {
                var g = h[++e] = _();
                f ? g.criteria = pd(b, function(b) {
                    return a[b]
                }) : (g.criteria = $())[0] = b(a, c, d), g.index = e, g.value = a
            }), g = h.length, h.sort(X); g--; ) {
                var i = h[g];
                h[g] = i.value, f || bb(i.criteria), cb(i)
            }
            return h
        }
        
        function Bd(a) {
            return a && "number" == typeof a.length ? Pb.unindexedChars && Wc(a) ? a.split("") : db(a) : cd(a)
        }
        
        function Dd(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c; ) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }
        
        function Ed(a) {
            return Wb(a, Xb(arguments, !0, !0, 1))
        }
        
        function Fd(a, b, c) {
            var d = -1, e = a ? a.length : 0;
            for (b = Nb.createCallback(b, c, 3); ++d < e; )
                if (b(a[d], d, a))
                    return d;
            return -1
        }
        
        function Gd(a, b, c) {
            var d = a ? a.length : 0;
            for (b = Nb.createCallback(b, c, 3); d--; )
                if (b(a[d], d, a))
                    return d;
            return -1
        }
        
        function Hd(b, c, d) {
            var e = 0, f = b ? b.length : 0;
            if ("number" != typeof c && null != c) {
                var g = -1;
                for (c = Nb.createCallback(c, d, 3); ++g < f && c(b[g], g, b); )
                    e++
            } else if (e = c, null == e || d)
                return b ? b[0] : a;
            return db(b, 0, Ib(Hb(0, e), f))
        }
        
        function Id(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (a = pd(a, c, d)), Xb(a, b)
        }
        
        function Jd(a, b, c) {
            if ("number" == typeof c) {
                var d = a ? a.length : 0;
                c = 0 > c ? Hb(0, d + c) : c || 0
            } else if (c) {
                var e = Sd(a, b);
                return a[e] === b ? e : -1
            }
            return T(a, b, c)
        }
        
        function Kd(a, b, c) {
            var d = 0, e = a ? a.length : 0;
            if ("number" != typeof b && null != b) {
                var f = e;
                for (b = Nb.createCallback(b, c, 3); f-- && b(a[f], f, a); )
                    d++
            } else
                d = null == b || c ? 1 : b || d;
            return db(a, 0, Ib(Hb(0, e - d), e))
        }
        
        function Ld() {
            for (var a = [], b = -1, c = arguments.length, d = $(), e = ec(), f = e === T, h = $(); ++b < c; ) {
                var i = arguments[b];
                (kc(i) || jc(i)) && (a.push(i), d.push(f && i.length >= g && Y(b ? a[b] : h)))
            }
            var j = a[0], k = -1, l = j ? j.length : 0, m = [];
            a: for (; ++k < l; ) {
                var n = d[0];
                if (i = j[k], (n ? U(n, i) : e(h, i)) < 0) {
                    for (b = c, (n || h).push(i); --b; )
                        if (n = d[b], (n ? U(n, i) : e(a[b], i)) < 0)
                            continue a;
                    m.push(i)
                }
            }
            for (; c--; )
                n = d[c], n && cb(n);
            return bb(d), bb(h), m
        }
        
        function Md(b, c, d) {
            var e = 0, f = b ? b.length : 0;
            if ("number" != typeof c && null != c) {
                var g = f;
                for (c = Nb.createCallback(c, d, 3); g-- && c(b[g], g, b); )
                    e++
            } else if (e = c, null == e || d)
                return b ? b[f - 1] : a;
            return db(b, Hb(0, f - e))
        }
        
        function Nd(a, b, c) {
            var d = a ? a.length : 0;
            for ("number" == typeof c && (d = (0 > c ? Hb(0, d + c) : Ib(c, d - 1)) + 1); d--; )
                if (a[d] === b)
                    return d;
            return -1
        }
        
        function Od(a) {
            for (var b = arguments, c = 0, d = b.length, e = a ? a.length : 0; ++c < d; )
                for (var f = -1, g = b[c]; ++f < e; )
                    a[f] === g && (zb.call(a, f--, 1), e--);
            return a
        }
        
        function Pd(a, b, d) {
            a = +a || 0, d = "number" == typeof d ? d : +d || 1, null == b && (b = a, a = 0);
            for (var e = -1, f = Hb(0, qb((b - a) / (d || 1))), g = c(f); ++e < f; )
                g[e] = a, a += d;
            return g
        }
        
        function Qd(a, b, c) {
            var d = -1, e = a ? a.length : 0, f = [];
            for (b = Nb.createCallback(b, c, 3); ++d < e; ) {
                var g = a[d];
                b(g, d, a) && (f.push(g), zb.call(a, d--, 1), e--)
            }
            return f
        }
        
        function Rd(a, b, c) {
            if ("number" != typeof b && null != b) {
                var d = 0, e = -1, f = a ? a.length : 0;
                for (b = Nb.createCallback(b, c, 3); ++e < f && b(a[e], e, a); )
                    d++
            } else
                d = null == b || c ? 1 : Hb(0, b);
            return db(a, d)
        }
        
        function Sd(a, b, c, d) {
            var e = 0, f = a ? a.length : e;
            for (c = c ? Nb.createCallback(c, d, 1) : pe, b = c(b); f > e; ) {
                var g = e + f >>> 1;
                c(a[g]) < b ? e = g + 1 : f = g
            }
            return e
        }
        
        function Td() {
            return _b(Xb(arguments, !0, !0))
        }
        
        function Ud(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (c = Nb.createCallback(c, d, 3)), _b(a, b, c)
        }
        
        function Vd(a) {
            return Wb(a, db(arguments, 1))
        }
        
        function Wd() {
            for (var a = -1, b = arguments.length; ++a < b; ) {
                var c = arguments[a];
                if (kc(c) || jc(c))
                    var d = d ? _b(Wb(d, c).concat(Wb(c, d))) : c
            }
            return d || []
        }
        
        function Xd() {
            for (var a = arguments.length > 1 ? arguments : arguments[0], b = -1, d = a ? qd(sd(a, "length")) : 0, e = c(0 > d ? 0 : d); ++b < d; )
                e[b] = sd(a, b);
            return e
        }
        
        function Yd(a, b) {
            var c = -1, d = a ? a.length : 0, e = {};
            for (b || !d || kc(a[0]) || (b = []); ++c < d; ) {
                var f = a[c];
                b ? e[f] = b[c] : f && (e[f[0]] = f[1])
            }
            return e
        }
        
        function Zd(a, b) {
            if (!Pc(b))
                throw new ib;
            return function() {
                return --a < 1 ? b.apply(this, arguments) : void 0
            }
        }
        
        function $d(a, b) {
            return arguments.length > 2 ? bc(a, 17, db(arguments, 2), null, b) : bc(a, 1, null, null, b)
        }
        
        function _d(a) {
            for (var b = arguments.length > 1 ? Xb(arguments, !0, !1, 1) : Gc(a), c = -1, d = b.length; ++c < d; ) {
                var e = b[c];
                a[e] = bc(a[e], 1, null, null, a)
            }
            return a
        }
        
        function ae(a, b) {
            return arguments.length > 2 ? bc(b, 19, db(arguments, 2), null, a) : bc(b, 3, null, null, a)
        }
        
        function be() {
            for (var a = arguments, b = a.length; b--; )
                if (!Pc(a[b]))
                    throw new ib;
            return function() {
                for (var b = arguments, c = a.length; c--; )
                    b = [a[c].apply(this, b)];
                return b[0]
            }
        }
        
        function ce(a, b) {
            return b = "number" == typeof b ? b : +b || a.length, bc(a, 4, null, null, null, b)
        }
        
        function de(b, c, d) {
            var e, f, g, h, i, j, k, l = 0, m = !1, n = !0;
            if (!Pc(b))
                throw new ib;
            if (c = Hb(0, c) || 0, d === !0) {
                var o = !0;
                n = !1
            } else
                Qc(d) && (o = d.leading, m = "maxWait" in d && (Hb(c, d.maxWait) || 0), n = "trailing" in d ? d.trailing : n);
            var p = function() {
                var d = c - (te() - h);
                if (0 >= d) {
                    f && rb(f);
                    var m = k;
                    f = j = k = a, m && (l = te(), g = b.apply(i, e), j || f || (e = i = null))
                } else
                    j = yb(p, d)
            }, q = function() {
                j && rb(j), f = j = k = a, (n || m !== c) && (l = te(), g = b.apply(i, e), j || f || (e = i = null))
            };
            return function() {
                if (e = arguments, h = te(), i = this, k = n && (j || !o), m === !1)
                    var a = o && !j;
                else {
                    f || o || (l = h);
                    var d = m - (h - l), r = 0 >= d;
                    r ? (f && (f = rb(f)), l = h, g = b.apply(i, e)) : f || (f = yb(q, d))
                }
                return r && j ? j = rb(j) : j || c === m || (j = yb(p, c)), a && (r = !0, g = b.apply(i, e)), !r || j || f || (e = i = null), g
            }
        }
        
        function ee(b) {
            if (!Pc(b))
                throw new ib;
            var c = db(arguments, 1);
            return yb(function() {
                b.apply(a, c)
            }, 1)
        }
        
        function fe(b, c) {
            if (!Pc(b))
                throw new ib;
            var d = db(arguments, 2);
            return yb(function() {
                b.apply(a, d)
            }, c)
        }
        
        function ge(a, b) {
            if (!Pc(a))
                throw new ib;
            var c = function() {
                var d = c.cache, e = b ? b.apply(this, arguments) : f + arguments[0];
                return vb.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
            };
            return c.cache = {}, c
        }
        
        function he(a) {
            var b, c;
            if (!Pc(a))
                throw new ib;
            return function() {
                return b ? c : (b = !0, c = a.apply(this, arguments), a = null, c)
            }
        }
        
        function ie(a) {
            return bc(a, 16, db(arguments, 1))
        }
        
        function je(a) {
            return bc(a, 32, null, db(arguments, 1))
        }
        
        function ke(a, b, c) {
            var d = !0, e = !0;
            if (!Pc(a))
                throw new ib;
            return c === !1 ? d = !1 : Qc(c) && (d = "leading" in c ? c.leading : d, e = "trailing" in c ? c.trailing : e), J.leading = d, J.maxWait = b, J.trailing = e, de(a, b, J)
        }
        
        function le(a, b) {
            return bc(b, 16, [a])
        }
        
        function me(a) {
            return function() {
                return a
            }
        }
        
        function ne(a, b, c) {
            var d = typeof a;
            if (null == a || "function" == d)
                return Ub(a, b, c);
            if ("object" != d)
                return ve(a);
            var e = mc(a), f = e[0], g = a[f];
            return 1 != e.length || g !== g || Qc(g) ? function(b) {
                for (var c = e.length, d = !1; c-- && (d = Yb(b[e[c]], a[e[c]], null, !0)); )
                    ;
                return d
            } : function(a) {
                var b = a[f];
                return g === b && (0 !== g || 1 / g == 1 / b)
            }
        }
        
        function oe(a) {
            return null == a ? "" : hb(a).replace(tc, dc)
        }
        
        function pe(a) {
            return a
        }
        
        function qe(a, b, c) {
            var d = !0, e = b && Gc(b);
            b && (c || e.length) || (null == c && (c = b), f = Ob, b = a, a = Nb, e = Gc(b)), c === !1 ? d = !1 : Qc(c) && "chain" in c && (d = c.chain);
            var f = a, g = Pc(f);
            kd(e, function(c) {
                var e = a[c] = b[c];
                g && (f.prototype[c] = function() {
                    var b = this.__chain__, c = this.__wrapped__, g = [c];
                    wb.apply(g, arguments);
                    var h = e.apply(a, g);
                    if (d || b) {
                        if (c === h && Qc(h))
                            return this;
                        h = new f(h), h.__chain__ = b
                    }
                    return h
                })
            })
        }
        
        function re() {
            return b._ = nb, this
        }
        
        function se() {
        }
        
        function ve(a) {
            return function(b) {
                return b[a]
            }
        }
        
        function we(a, b, c) {
            var d = null == a, e = null == b;
            if (null == c && ("boolean" == typeof a && e ? (c = a, a = 1) : e || "boolean" != typeof b || (c = b, e = !0)), d && e && (b = 1), a = +a || 0, e ? (b = a, a = 0) : b = +b || 0, c || a % 1 || b % 1) {
                var f = Kb();
                return Ib(a + f * (b - a + parseFloat("1e-" + ((f + "").length - 1))), b)
            }
            return $b(a, b)
        }
        
        function xe(a, b) {
            if (a) {
                var c = a[b];
                return Pc(c) ? a[b]() : c
            }
        }
        
        function ye(b, c, d) {
            var e = Nb.templateSettings;
            b = hb(b || ""), d = zc({}, d, e);
            var i, f = zc({}, d.imports, e.imports), g = mc(f), h = cd(f), k = 0, o = d.interpolate || s, p = "__p += '", r = gb((d.escape || s).source + "|" + o.source + "|" + (o === q ? n : s).source + "|" + (d.evaluate || s).source + "|$", "g");
            b.replace(r, function(a, c, d, e, f, g) {
                return d || (d = e), p += b.slice(k, g).replace(u, Z), c && (p += "' +\n__e(" + c + ") +\n'"), f && (i = !0, p += "';\n" + f + ";\n__p += '"), d && (p += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"), k = g + a.length, a
            }), p += "';\n";
            var t = d.variable, v = t;
            v || (t = "obj", p = "with (" + t + ") {\n" + p + "\n}\n"), p = (i ? p.replace(j, "") : p).replace(l, "$1").replace(m, "$1;"), p = "function(" + t + ") {\n" + (v ? "" : t + " || (" + t + " = {});\n") + "var __t, __p = '', __e = _.escape" + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
            var w = "\n/*\n//# sourceURL=" + (d.sourceURL || "/lodash/template/source[" + x++ + "]") + "\n*/";
            try {
                var y = Q(g, "return " + p + w).apply(a, h)
            } catch (z) {
                throw z.source = p, z
            }
            return c ? y(c) : (y.source = p, y)
        }
        
        function ze(a, b, d) {
            a = (a = +a) > -1 ? a : 0;
            var e = -1, f = c(a);
            for (b = Ub(b, d, 1); ++e < a; )
                f[e] = b(e);
            return f
        }
        
        function Ae(a) {
            return null == a ? "" : hb(a).replace(sc, ic)
        }
        
        function Be(a) {
            var b = ++d;
            return hb(null == a ? "" : a) + b
        }
        
        function Ce(a) {
            return a = new Ob(a), a.__chain__ = !0, a
        }
        
        function De(a, b) {
            return b(a), a
        }
        
        function Ee() {
            return this.__chain__ = !0, this
        }
        
        function Fe() {
            return hb(this.__wrapped__)
        }
        
        function Ge() {
            return this.__wrapped__
        }
        
        b = b ? fb.defaults(O.Object(), b, fb.pick(O, v)) : O;
        var c = b.Array, h = b.Boolean, N = b.Date, P = b.Error, Q = b.Function, R = b.Math, S = b.Number, V = b.Object, gb = b.RegExp, hb = b.String, ib = b.TypeError, jb = [], kb = P.prototype, lb = V.prototype, mb = hb.prototype, nb = b._, ob = lb.toString, pb = gb("^" + hb(ob).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"), qb = R.ceil, rb = b.clearTimeout, sb = R.floor, tb = Q.prototype.toString, ub = fc(ub = V.getPrototypeOf) && ub, vb = lb.hasOwnProperty, wb = jb.push, xb = lb.propertyIsEnumerable, yb = b.setTimeout, zb = jb.splice, Ab = jb.unshift, Bb = function() {
            try {
                var a = {}, b = fc(b = V.defineProperty) && b, c = b(a, a, a) && b
            } catch (d) {
            }
            return c
        }(), Cb = fc(Cb = V.create) && Cb, Db = fc(Db = c.isArray) && Db, Eb = b.isFinite, Fb = b.isNaN, Gb = fc(Gb = V.keys) && Gb, Hb = R.max, Ib = R.min, Jb = b.parseInt, Kb = R.random, Lb = {};
        Lb[z] = c, Lb[A] = h, Lb[B] = N, Lb[D] = Q, Lb[F] = V, Lb[E] = S, Lb[G] = gb, Lb[H] = hb;
        var Mb = {};
        Mb[z] = Mb[B] = Mb[E] = {constructor: !0,toLocaleString: !0,toString: !0,valueOf: !0}, Mb[A] = Mb[H] = {constructor: !0,toString: !0,valueOf: !0}, Mb[C] = Mb[D] = Mb[G] = {constructor: !0,toString: !0}, Mb[F] = {constructor: !0}, function() {
            for (var a = w.length; a--; ) {
                var b = w[a];
                for (var c in Mb)
                    vb.call(Mb, c) && !vb.call(Mb[c], b) && (Mb[c][b] = !1)
            }
        }(), Ob.prototype = Nb.prototype;
        var Pb = Nb.support = {};
        !function() {
            var a = function() {
                this.x = 1
            }, d = {0: 1,length: 1}, e = [];
            a.prototype = {valueOf: 1,y: 1};
            for (var f in new a)
                e.push(f);
            for (f in arguments)
                ;
            Pb.argsClass = ob.call(arguments) == y, Pb.argsObject = arguments.constructor == V && !(arguments instanceof c), Pb.enumErrorProps = xb.call(kb, "message") || xb.call(kb, "name"), Pb.enumPrototypes = xb.call(a, "prototype"), Pb.funcDecomp = !fc(b.WinRTError) && t.test(eb), Pb.funcNames = "string" == typeof Q.name, Pb.nonEnumArgs = 0 != f, Pb.nonEnumShadows = !/valueOf/.test(e), Pb.ownLast = "x" != e[0], Pb.spliceObjects = (jb.splice.call(d, 0, 1), !d[0]), Pb.unindexedChars = "xx" != "x"[0] + V("x")[0];
            try {
                Pb.nodeClass = !(ob.call(document) == F && !({toString: 0} + ""))
            } catch (g) {
                Pb.nodeClass = !0
            }
        }(1), Nb.templateSettings = {escape: /<%-([\s\S]+?)%>/g,evaluate: /<%([\s\S]+?)%>/g,interpolate: q,variable: "",imports: {_: Nb}};
        var Qb = function(a) {
            var b = "var index, iterable = " + a.firstArg + ", result = " + a.init + ";\nif (!iterable) return result;\n" + a.top + ";";
            a.array ? (b += "\nvar length = iterable.length; index = -1;\nif (" + a.array + ") {  ", Pb.unindexedChars && (b += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "), b += "\n  while (++index < length) {\n    " + a.loop + ";\n  }\n}\nelse {  ") : Pb.nonEnumArgs && (b += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + a.loop + ";\n    }\n  } else {  "), Pb.enumPrototypes && (b += "\n  var skipProto = typeof iterable == 'function';\n  "), Pb.enumErrorProps && (b += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
            var c = [];
            if (Pb.enumPrototypes && c.push('!(skipProto && index == "prototype")'), Pb.enumErrorProps && c.push('!(skipErrorProps && (index == "message" || index == "name"))'), a.useHas && a.keys)
                b += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n", c.length && (b += "    if (" + c.join(" && ") + ") {\n  "), b += a.loop + ";    ", c.length && (b += "\n    }"), b += "\n  }  ";
            else if (b += "\n  for (index in iterable) {\n", a.useHas && c.push("hasOwnProperty.call(iterable, index)"), c.length && (b += "    if (" + c.join(" && ") + ") {\n  "), b += a.loop + ";    ", c.length && (b += "\n    }"), b += "\n  }    ", Pb.nonEnumShadows) {
                for (b += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ", k = 0; 7 > k; k++)
                    b += "\n    index = '" + a.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))", a.useHas || (b += " || (!nonEnum[index] && iterable[index] !== objectProto[index])"), b += ") {\n      " + a.loop + ";\n    }      ";
                b += "\n  }    "
            }
            return (a.array || Pb.nonEnumArgs) && (b += "\n}"), b += a.bottom + ";\nreturn result"
        };
        Cb || (Tb = function() {
            function a() {
            }
            
            return function(c) {
                if (Qc(c)) {
                    a.prototype = c;
                    var d = new a;
                    a.prototype = null
                }
                return d || b.Object()
            }
        }());
        var gc = Bb ? function(a, b) {
            K.value = b, Bb(a, "__bindData__", K)
        } : se;
        Pb.argsClass || (jc = function(a) {
            return a && "object" == typeof a && "number" == typeof a.length && vb.call(a, "callee") && !xb.call(a, "callee") || !1
        });
        var kc = Db || function(a) {
            return a && "object" == typeof a && "number" == typeof a.length && ob.call(a) == z || !1
        }, lc = cc({args: "object",init: "[]",top: "if (!(objectTypes[typeof object])) return result",loop: "result.push(index)"}), mc = Gb ? function(a) {
            return Qc(a) ? Pb.enumPrototypes && "function" == typeof a || Pb.nonEnumArgs && a.length && jc(a) ? lc(a) : Gb(a) : []
        } : lc, nc = {args: "collection, callback, thisArg",top: "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",array: "typeof length == 'number'",keys: mc,loop: "if (callback(iterable[index], index, collection) === false) return result"}, oc = {args: "object, source, guard",top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",keys: mc,loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom: "  }\n}"}, pc = {top: "if (!objectTypes[typeof iterable]) return result;\n" + nc.top,array: !1}, qc = {"&": "&amp;","<": "&lt;",">": "&gt;",'"': "&quot;","'": "&#39;"}, rc = Ic(qc), sc = gb("(" + mc(rc).join("|") + ")", "g"), tc = gb("[" + mc(qc).join("") + "]", "g"), uc = cc(nc), vc = cc(oc, {top: oc.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"}), zc = cc(oc), Cc = cc(nc, pc, {useHas: !1}), Ec = cc(nc, pc);
        Pc(/x/) && (Pc = function(a) {
            return "function" == typeof a && ob.call(a) == D
        });
        var Uc = ub ? function(a) {
            if (!a || ob.call(a) != F || !Pb.argsClass && jc(a))
                return !1;
            var b = a.valueOf, c = fc(b) && (c = ub(b)) && ub(c);
            return c ? a == c || ub(a) == c : hc(a)
        } : hc, fd = ac(function(a, b, c) {
            vb.call(a, c) ? a[c]++ : a[c] = 1
        }), md = ac(function(a, b, c) {
            (vb.call(a, c) ? a[c] : a[c] = []).push(b)
        }), nd = ac(function(a, b, c) {
            a[c] = b
        }), sd = pd, Cd = hd, te = fc(te = N.now) && te || function() {
            return (new N).getTime()
        }, ue = 8 == Jb(i + "08") ? Jb : function(a, b) {
            return Jb(Wc(a) ? a.replace(r, "") : a, b || 0)
        };
        return Nb.after = Zd, Nb.assign = vc, Nb.at = dd, Nb.bind = $d, Nb.bindAll = _d, Nb.bindKey = ae, Nb.chain = Ce, Nb.compact = Dd, Nb.compose = be, Nb.constant = me, Nb.countBy = fd, Nb.create = yc, Nb.createCallback = ne, Nb.curry = ce, Nb.debounce = de, Nb.defaults = zc, Nb.defer = ee, Nb.delay = fe, Nb.difference = Ed, Nb.filter = hd, Nb.flatten = Id, Nb.forEach = kd, Nb.forEachRight = ld, Nb.forIn = Cc, Nb.forInRight = Dc, Nb.forOwn = Ec, Nb.forOwnRight = Fc, Nb.functions = Gc, Nb.groupBy = md, Nb.indexBy = nd, Nb.initial = Kd, Nb.intersection = Ld, Nb.invert = Ic, Nb.invoke = od, Nb.keys = mc, Nb.map = pd, Nb.mapValues = Yc, Nb.max = qd, Nb.memoize = ge, Nb.merge = Zc, Nb.min = rd, Nb.omit = $c, Nb.once = he, Nb.pairs = _c, Nb.partial = ie, Nb.partialRight = je, Nb.pick = ad, Nb.pluck = sd, Nb.property = ve, Nb.pull = Od, Nb.range = Pd, Nb.reject = vd, Nb.remove = Qd, Nb.rest = Rd, Nb.shuffle = xd, Nb.sortBy = Ad, Nb.tap = De, Nb.throttle = ke, Nb.times = ze, Nb.toArray = Bd, Nb.transform = bd, Nb.union = Td, Nb.uniq = Ud, Nb.values = cd, Nb.where = Cd, Nb.without = Vd, Nb.wrap = le, Nb.xor = Wd, Nb.zip = Xd, Nb.zipObject = Yd, Nb.collect = pd, Nb.drop = Rd, Nb.each = kd, Nb.eachRight = ld, Nb.extend = vc, Nb.methods = Gc, Nb.object = Yd, Nb.select = hd, Nb.tail = Rd, Nb.unique = Ud, Nb.unzip = Xd, qe(Nb), Nb.clone = wc, Nb.cloneDeep = xc, Nb.contains = ed, Nb.escape = oe, Nb.every = gd, Nb.find = id, Nb.findIndex = Fd, Nb.findKey = Ac, Nb.findLast = jd, Nb.findLastIndex = Gd, Nb.findLastKey = Bc, Nb.has = Hc, Nb.identity = pe, Nb.indexOf = Jd, Nb.isArguments = jc, Nb.isArray = kc, Nb.isBoolean = Jc, Nb.isDate = Kc, Nb.isElement = Lc, Nb.isEmpty = Mc, Nb.isEqual = Nc, Nb.isFinite = Oc, Nb.isFunction = Pc, Nb.isNaN = Rc, Nb.isNull = Sc, Nb.isNumber = Tc, Nb.isObject = Qc, Nb.isPlainObject = Uc, Nb.isRegExp = Vc, Nb.isString = Wc, Nb.isUndefined = Xc, Nb.lastIndexOf = Nd, Nb.mixin = qe, Nb.noConflict = re, Nb.noop = se, Nb.now = te, Nb.parseInt = ue, Nb.random = we, Nb.reduce = td, Nb.reduceRight = ud, Nb.result = xe, Nb.runInContext = eb, Nb.size = yd, Nb.some = zd, Nb.sortedIndex = Sd, Nb.template = ye, Nb.unescape = Ae, Nb.uniqueId = Be, Nb.all = gd, Nb.any = zd, Nb.detect = id, Nb.findWhere = id, Nb.foldl = td, Nb.foldr = ud, Nb.include = ed, Nb.inject = td, qe(function() {
            var a = {};
            return Ec(Nb, function(b, c) {
                Nb.prototype[c] || (a[c] = b)
            }), a
        }(), !1), Nb.first = Hd, Nb.last = Md, Nb.sample = wd, Nb.take = Hd, Nb.head = Hd, Ec(Nb, function(a, b) {
            var c = "sample" !== b;
            Nb.prototype[b] || (Nb.prototype[b] = function(b, d) {
                var e = this.__chain__, f = a(this.__wrapped__, b, d);
                return e || null != b && (!d || c && "function" == typeof b) ? new Ob(f, e) : f
            })
        }), Nb.VERSION = "2.4.1", Nb.prototype.chain = Ee, Nb.prototype.toString = Fe, Nb.prototype.value = Ge, Nb.prototype.valueOf = Ge, uc(["join", "pop", "shift"], function(a) {
            var b = jb[a];
            Nb.prototype[a] = function() {
                var a = this.__chain__, c = b.apply(this.__wrapped__, arguments);
                return a ? new Ob(c, a) : c
            }
        }), uc(["push", "reverse", "sort", "unshift"], function(a) {
            var b = jb[a];
            Nb.prototype[a] = function() {
                return b.apply(this.__wrapped__, arguments), this
            }
        }), uc(["concat", "slice", "splice"], function(a) {
            var b = jb[a];
            Nb.prototype[a] = function() {
                return new Ob(b.apply(this.__wrapped__, arguments), this.__chain__)
            }
        }), Pb.spliceObjects || uc(["pop", "shift", "splice"], function(a) {
            var b = jb[a], c = "splice" == a;
            Nb.prototype[a] = function() {
                var a = this.__chain__, d = this.__wrapped__, e = b.apply(d, arguments);
                return 0 === d.length && delete d[0], a || c ? new Ob(e, a) : e
            }
        }), Nb
    }
    
    var a, b = [], c = [], d = 0, e = {}, f = +new Date + "", g = 75, h = 40, i = " 	\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000", j = /\b__p \+= '';/g, l = /\b(__p \+=) '' \+/g, m = /(__e\(.*?\)|\b__t\)) \+\n'';/g, n = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, o = /\w*$/, p = /^\s*function[ \n\r\t]+\w/, q = /<%=([\s\S]+?)%>/g, r = RegExp("^[" + i + "]*0+(?=.$)"), s = /($^)/, t = /\bthis\b/, u = /['\n\r\t\u2028\u2029\\]/g, v = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"], w = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], x = 0, y = "[object Arguments]", z = "[object Array]", A = "[object Boolean]", B = "[object Date]", C = "[object Error]", D = "[object Function]", E = "[object Number]", F = "[object Object]", G = "[object RegExp]", H = "[object String]", I = {};
    I[D] = !1, I[y] = I[z] = I[A] = I[B] = I[E] = I[F] = I[G] = I[H] = !0;
    var J = {leading: !1,maxWait: 0,trailing: !1}, K = {configurable: !1,enumerable: !1,value: null,writable: !1}, L = {args: "",array: null,bottom: "",firstArg: "",init: "",keys: null,loop: "",shadowedProps: null,support: null,top: "",useHas: !1}, M = {"boolean": !1,"function": !0,object: !0,number: !1,string: !1,undefined: !1}, N = {"\\": "\\","'": "'","\n": "n","\r": "r","	": "t","\u2028": "u2028","\u2029": "u2029"}, O = M[typeof window] && window || this, P = M[typeof exports] && exports && !exports.nodeType && exports, Q = M[typeof module] && module && !module.nodeType && module, R = Q && Q.exports === P && P, S = M[typeof global] && global;
    !S || S.global !== S && S.window !== S || (O = S);
    var fb = eb();
    "function" == typeof define ? (O._ = fb, define("commons/underscore/2.4.1/lodash", [], function() {
        return fb
    })) : P && Q ? R ? (Q.exports = fb)._ = fb : P._ = fb : O._ = fb
}.call(this);
;
define("commons/underscore-string/underscore.string", function(require, exports, module) {
    !function(e, t) {
        "use strict";
        var n = t.prototype.trim, r = t.prototype.trimRight, i = t.prototype.trimLeft, s = function(e) {
            return e * 1 || 0
        }, o = function(e, t) {
            if (t < 1)
                return "";
            var n = "";
            while (t > 0)
                t & 1 && (n += e), t >>= 1, e += e;
            return n
        }, u = [].slice, a = function(e) {
            return e == null ? "\\s" : e.source ? e.source : "[" + p.escapeRegExp(e) + "]"
        }, f = {lt: "<",gt: ">",quot: '"',amp: "&",apos: "'"}, l = {};
        for (var c in f)
            l[f[c]] = c;
        l["'"] = "#39";
        var h = function() {
            function e(e) {
                return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
            }
            
            var n = o, r = function() {
                return r.cache.hasOwnProperty(arguments[0]) || (r.cache[arguments[0]] = r.parse(arguments[0])), r.format.call(null, r.cache[arguments[0]], arguments)
            };
            return r.format = function(r, i) {
                var s = 1, o = r.length, u = "", a, f = [], l, c, p, d, v, m;
                for (l = 0; l < o; l++) {
                    u = e(r[l]);
                    if (u === "string")
                        f.push(r[l]);
                    else if (u === "array") {
                        p = r[l];
                        if (p[2]) {
                            a = i[s];
                            for (c = 0; c < p[2].length; c++) {
                                if (!a.hasOwnProperty(p[2][c]))
                                    throw new Error(h('[_.sprintf] property "%s" does not exist', p[2][c]));
                                a = a[p[2][c]]
                            }
                        } else
                            p[1] ? a = i[p[1]] : a = i[s++];
                        if (/[^s]/.test(p[8]) && e(a) != "number")
                            throw new Error(h("[_.sprintf] expecting number but found %s", e(a)));
                        switch (p[8]) {
                            case "b":
                                a = a.toString(2);
                                break;
                            case "c":
                                a = t.fromCharCode(a);
                                break;
                            case "d":
                                a = parseInt(a, 10);
                                break;
                            case "e":
                                a = p[7] ? a.toExponential(p[7]) : a.toExponential();
                                break;
                            case "f":
                                a = p[7] ? parseFloat(a).toFixed(p[7]) : parseFloat(a);
                                break;
                            case "o":
                                a = a.toString(8);
                                break;
                            case "s":
                                a = (a = t(a)) && p[7] ? a.substring(0, p[7]) : a;
                                break;
                            case "u":
                                a = Math.abs(a);
                                break;
                            case "x":
                                a = a.toString(16);
                                break;
                            case "X":
                                a = a.toString(16).toUpperCase()
                        }
                        a = /[def]/.test(p[8]) && p[3] && a >= 0 ? "+" + a : a, v = p[4] ? p[4] == "0" ? "0" : p[4].charAt(1) : " ", m = p[6] - t(a).length, d = p[6] ? n(v, m) : "", f.push(p[5] ? a + d : d + a)
                    }
                }
                return f.join("")
            }, r.cache = {}, r.parse = function(e) {
                var t = e, n = [], r = [], i = 0;
                while (t) {
                    if ((n = /^[^\x25]+/.exec(t)) !== null)
                        r.push(n[0]);
                    else if ((n = /^\x25{2}/.exec(t)) !== null)
                        r.push("%");
                    else {
                        if ((n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)) === null)
                            throw new Error("[_.sprintf] huh?");
                        if (n[2]) {
                            i |= 1;
                            var s = [], o = n[2], u = [];
                            if ((u = /^([a-z_][a-z_\d]*)/i.exec(o)) === null)
                                throw new Error("[_.sprintf] huh?");
                            s.push(u[1]);
                            while ((o = o.substring(u[0].length)) !== "")
                                if ((u = /^\.([a-z_][a-z_\d]*)/i.exec(o)) !== null)
                                    s.push(u[1]);
                                else {
                                    if ((u = /^\[(\d+)\]/.exec(o)) === null)
                                        throw new Error("[_.sprintf] huh?");
                                    s.push(u[1])
                                }
                            n[2] = s
                        } else
                            i |= 2;
                        if (i === 3)
                            throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                        r.push(n)
                    }
                    t = t.substring(n[0].length)
                }
                return r
            }, r
        }(), p = {VERSION: "2.3.0",isBlank: function(e) {
                return e == null && (e = ""), /^\s*$/.test(e)
            },stripTags: function(e) {
                return e == null ? "" : t(e).replace(/<\/?[^>]+>/g, "")
            },capitalize: function(e) {
                return e = e == null ? "" : t(e), e.charAt(0).toUpperCase() + e.slice(1)
            },chop: function(e, n) {
                return e == null ? [] : (e = t(e), n = ~~n, n > 0 ? e.match(new RegExp(".{1," + n + "}", "g")) : [e])
            },clean: function(e) {
                return p.strip(e).replace(/\s+/g, " ")
            },count: function(e, n) {
                if (e == null || n == null)
                    return 0;
                e = t(e), n = t(n);
                var r = 0, i = 0, s = n.length;
                for (; ; ) {
                    i = e.indexOf(n, i);
                    if (i === -1)
                        break;
                    r++, i += s
                }
                return r
            },chars: function(e) {
                return e == null ? [] : t(e).split("")
            },swapCase: function(e) {
                return e == null ? "" : t(e).replace(/\S/g, function(e) {
                    return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()
                })
            },escapeHTML: function(e) {
                return e == null ? "" : t(e).replace(/[&<>"']/g, function(e) {
                    return "&" + l[e] + ";"
                })
            },unescapeHTML: function(e) {
                return e == null ? "" : t(e).replace(/\&([^;]+);/g, function(e, n) {
                    var r;
                    return n in f ? f[n] : (r = n.match(/^#x([\da-fA-F]+)$/)) ? t.fromCharCode(parseInt(r[1], 16)) : (r = n.match(/^#(\d+)$/)) ? t.fromCharCode(~~r[1]) : e
                })
            },escapeRegExp: function(e) {
                return e == null ? "" : t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
            },splice: function(e, t, n, r) {
                var i = p.chars(e);
                return i.splice(~~t, ~~n, r), i.join("")
            },insert: function(e, t, n) {
                return p.splice(e, t, 0, n)
            },include: function(e, n) {
                return n === "" ? !0 : e == null ? !1 : t(e).indexOf(n) !== -1
            },join: function() {
                var e = u.call(arguments), t = e.shift();
                return t == null && (t = ""), e.join(t)
            },lines: function(e) {
                return e == null ? [] : t(e).split("\n")
            },reverse: function(e) {
                return p.chars(e).reverse().join("")
            },startsWith: function(e, n) {
                return n === "" ? !0 : e == null || n == null ? !1 : (e = t(e), n = t(n), e.length >= n.length && e.slice(0, n.length) === n)
            },endsWith: function(e, n) {
                return n === "" ? !0 : e == null || n == null ? !1 : (e = t(e), n = t(n), e.length >= n.length && e.slice(e.length - n.length) === n)
            },succ: function(e) {
                return e == null ? "" : (e = t(e), e.slice(0, -1) + t.fromCharCode(e.charCodeAt(e.length - 1) + 1))
            },titleize: function(e) {
                return e == null ? "" : t(e).replace(/(?:^|\s)\S/g, function(e) {
                    return e.toUpperCase()
                })
            },camelize: function(e) {
                return p.trim(e).replace(/[-_\s]+(.)?/g, function(e, t) {
                    return t.toUpperCase()
                })
            },underscored: function(e) {
                return p.trim(e).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()
            },dasherize: function(e) {
                return p.trim(e).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
            },classify: function(e) {
                return p.titleize(t(e).replace(/_/g, " ")).replace(/\s/g, "")
            },humanize: function(e) {
                return p.capitalize(p.underscored(e).replace(/_id$/, "").replace(/_/g, " "))
            },trim: function(e, r) {
                return e == null ? "" : !r && n ? n.call(e) : (r = a(r), t(e).replace(new RegExp("^" + r + "+|" + r + "+$", "g"), ""))
            },ltrim: function(e, n) {
                return e == null ? "" : !n && i ? i.call(e) : (n = a(n), t(e).replace(new RegExp("^" + n + "+"), ""))
            },rtrim: function(e, n) {
                return e == null ? "" : !n && r ? r.call(e) : (n = a(n), t(e).replace(new RegExp(n + "+$"), ""))
            },truncate: function(e, n, r) {
                return e == null ? "" : (e = t(e), r = r || "...", n = ~~n, e.length > n ? e.slice(0, n) + r : e)
            },prune: function(e, n, r) {
                if (e == null)
                    return "";
                e = t(e), n = ~~n, r = r != null ? t(r) : "...";
                if (e.length <= n)
                    return e;
                var i = function(e) {
                    return e.toUpperCase() !== e.toLowerCase() ? "A" : " "
                }, s = e.slice(0, n + 1).replace(/.(?=\W*\w*$)/g, i);
                return s.slice(s.length - 2).match(/\w\w/) ? s = s.replace(/\s*\S+$/, "") : s = p.rtrim(s.slice(0, s.length - 1)), (s + r).length > e.length ? e : e.slice(0, s.length) + r
            },words: function(e, t) {
                return p.isBlank(e) ? [] : p.trim(e, t).split(t || /\s+/)
            },pad: function(e, n, r, i) {
                e = e == null ? "" : t(e), n = ~~n;
                var s = 0;
                r ? r.length > 1 && (r = r.charAt(0)) : r = " ";
                switch (i) {
                    case "right":
                        return s = n - e.length, e + o(r, s);
                    case "both":
                        return s = n - e.length, o(r, Math.ceil(s / 2)) + e + o(r, Math.floor(s / 2));
                    default:
                        return s = n - e.length, o(r, s) + e
                }
            },lpad: function(e, t, n) {
                return p.pad(e, t, n)
            },rpad: function(e, t, n) {
                return p.pad(e, t, n, "right")
            },lrpad: function(e, t, n) {
                return p.pad(e, t, n, "both")
            },sprintf: h,vsprintf: function(e, t) {
                return t.unshift(e), h.apply(null, t)
            },toNumber: function(e, n) {
                if (e == null || e == "")
                    return 0;
                e = t(e);
                var r = s(s(e).toFixed(~~n));
                return r === 0 && !e.match(/^0+$/) ? Number.NaN : r
            },numberFormat: function(e, t, n, r) {
                if (isNaN(e) || e == null)
                    return "";
                e = e.toFixed(~~t), r = typeof r == "string" ? r : ",";
                var i = e.split("."), s = i[0], o = i[1] ? (n || ".") + i[1] : "";
                return s.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + r) + o
            },strRight: function(e, n) {
                if (e == null)
                    return "";
                e = t(e), n = n != null ? t(n) : n;
                var r = n ? e.indexOf(n) : -1;
                return ~r ? e.slice(r + n.length, e.length) : e
            },strRightBack: function(e, n) {
                if (e == null)
                    return "";
                e = t(e), n = n != null ? t(n) : n;
                var r = n ? e.lastIndexOf(n) : -1;
                return ~r ? e.slice(r + n.length, e.length) : e
            },strLeft: function(e, n) {
                if (e == null)
                    return "";
                e = t(e), n = n != null ? t(n) : n;
                var r = n ? e.indexOf(n) : -1;
                return ~r ? e.slice(0, r) : e
            },strLeftBack: function(e, t) {
                if (e == null)
                    return "";
                e += "", t = t != null ? "" + t : t;
                var n = e.lastIndexOf(t);
                return ~n ? e.slice(0, n) : e
            },toSentence: function(e, t, n, r) {
                t = t || ", ", n = n || " and ";
                var i = e.slice(), s = i.pop();
                return e.length > 2 && r && (n = p.rtrim(t) + n), i.length ? i.join(t) + n + s : s
            },toSentenceSerial: function() {
                var e = u.call(arguments);
                return e[3] = !0, p.toSentence.apply(p, e)
            },slugify: function(e) {
                if (e == null)
                    return "";
                var n = "?àá???????èé?êìí???ńòó????ùúü?????", r = "aaaaaaaaceeeeeiiiilnoooooouuuunczz", i = new RegExp(a(n), "g");
                return e = t(e).toLowerCase().replace(i, function(e) {
                    var t = n.indexOf(e);
                    return r.charAt(t) || "-"
                }), p.dasherize(e.replace(/[^\w\s-]/g, ""))
            },surround: function(e, t) {
                return [t, e, t].join("")
            },quote: function(e) {
                return p.surround(e, '"')
            },exports: function() {
                var e = {};
                for (var t in this) {
                    if (!this.hasOwnProperty(t) || t.match(/^(?:include|contains|reverse)$/))
                        continue;
                    e[t] = this[t]
                }
                return e
            },repeat: function(e, n, r) {
                if (e == null)
                    return "";
                n = ~~n;
                if (r == null)
                    return o(t(e), n);
                for (var i = []; n > 0; i[--n] = e)
                    ;
                return i.join(r)
            },levenshtein: function(e, n) {
                if (e == null && n == null)
                    return 0;
                if (e == null)
                    return t(n).length;
                if (n == null)
                    return t(e).length;
                e = t(e), n = t(n);
                var r = [], i, s;
                for (var o = 0; o <= n.length; o++)
                    for (var u = 0; u <= e.length; u++)
                        o && u ? e.charAt(u - 1) === n.charAt(o - 1) ? s = i : s = Math.min(r[u], r[u - 1], i) + 1 : s = o + u, i = r[u], r[u] = s;
                return r.pop()
            }};
        p.strip = p.trim, p.lstrip = p.ltrim, p.rstrip = p.rtrim, p.center = p.lrpad, p.rjust = p.lpad, p.ljust = p.rpad, p.contains = p.include, p.q = p.quote, typeof exports != "undefined" && (typeof module != "undefined" && module.exports && (module.exports = p), exports._s = p), typeof define == "function" && define.amd && define("underscore.string", [], function() {
            return p
        }), e._ = e._ || {}, e._.string = e._.str = p
    }(this, String);
});
;
// JSON.js
"object" != typeof JSON && (JSON = {}), function() {
    "use strict";
    function f(a) {
        return 10 > a ? "0" + a : a
    }
    
    function quote(a) {
        return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
            var b = meta[a];
            return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }
    
    function str(a, b) {
        var c, d, e, f, g, h = gap, i = b[a];
        switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
            case "string":
                return quote(i);
            case "number":
                return isFinite(i) ? String(i) : "null";
            case "boolean":
            case "null":
                return String(i);
            case "object":
                if (!i)
                    return "null";
                if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                    for (f = i.length, c = 0; f > c; c += 1)
                        g[c] = str(c, i) || "null";
                    return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                }
                if (rep && "object" == typeof rep)
                    for (f = rep.length, c = 0; f > c; c += 1)
                        "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                else
                    for (d in i)
                        Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
        }
    }
    
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b","	": "\\t","\n": "\\n","\f": "\\f","\r": "\\r",'"': '\\"',"\\": "\\\\"}, rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
        var d;
        if (gap = "", indent = "", "number" == typeof c)
            for (d = 0; c > d; d += 1)
                indent += " ";
        else
            "string" == typeof c && (indent = c);
        if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length))
            throw new Error("JSON.stringify");
        return str("", {"": a})
    }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(a, b) {
            var c, d, e = a[b];
            if (e && "object" == typeof e)
                for (c in e)
                    Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
            return reviver.call(a, b, e)
        }
        
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), define("commons/json/1.0.3/json", [], function() {
    return window.JSON
});
;
(function(t) {
    var ender = 1;
    
    function e(t, e) {
        return function(n) {
            return u(t.call(this, n), e)
        }
    }
    
    function n(t, e) {
        return function(n) {
            return this.lang().ordinal(t.call(this, n), e)
        }
    }
    
    function s() {
    }
    
    function r(t) {
        a(this, t)
    }
    
    function i(t) {
        var e = this._data = {}, n = t.years || t.year || t.y || 0, s = t.months || t.month || t.M || 0, r = t.weeks || t.week || t.w || 0, i = t.days || t.day || t.d || 0, a = t.hours || t.hour || t.h || 0, u = t.minutes || t.minute || t.m || 0, d = t.seconds || t.second || t.s || 0, h = t.milliseconds || t.millisecond || t.ms || 0;
        this._milliseconds = h + 1e3 * d + 6e4 * u + 36e5 * a, this._days = i + 7 * r, this._months = s + 12 * n, e.milliseconds = h % 1e3, d += o(h / 1e3), e.seconds = d % 60, u += o(d / 60), e.minutes = u % 60, a += o(u / 60), e.hours = a % 24, i += o(a / 24), i += 7 * r, e.days = i % 30, s += o(i / 30), e.months = s % 12, n += o(s / 12), e.years = n
    }
    
    function a(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }
    
    function o(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }
    
    function u(t, e) {
        for (var n = t + ""; e > n.length; )
            n = "0" + n;
        return n
    }
    
    function d(t, e, n) {
        var s, r = e._milliseconds, i = e._days, a = e._months;
        r && t._d.setTime(+t + r * n), i && t.date(t.date() + i * n), a && (s = t.date(), t.date(1).month(t.month() + a * n).date(Math.min(s, t.daysInMonth())))
    }
    
    function h(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    
    function c(t, e) {
        var n, s = Math.min(t.length, e.length), r = Math.abs(t.length - e.length), i = 0;
        for (n = 0; s > n; n++)
            ~~t[n] !== ~~e[n] && i++;
        return i + r
    }
    
    function f(t) {
        return t ? se[t] || t.toLowerCase().replace(/(.)s$/, "$1") : t
    }
    
    function l(t, e) {
        return e.abbr = t, U[t] || (U[t] = new s), U[t].set(e), U[t]
    }
    
    function _(t) {
        return t ? (!U[t] && x && require("./lang/" + t), U[t]) : C.fn._lang
    }
    
    function m(t) {
        return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }
    
    function y(t) {
        var e, n, s = t.match(Z);
        for (e = 0, n = s.length; n > e; e++)
            s[e] = oe[s[e]] ? oe[s[e]] : m(s[e]);
        return function(r) {
            var i = "";
            for (e = 0; n > e; e++)
                i += "function" == typeof s[e].call ? s[e].call(r, t) : s[e];
            return i
        }
    }
    
    function M(t, e) {
        function n(e) {
            return t.lang().longDateFormat(e) || e
        }
        
        for (var s = 5; s-- && E.test(e); )
            e = e.replace(E, n);
        return re[e] || (re[e] = y(e)), re[e](t)
    }
    
    function g(t) {
        switch (t) {
            case "DDDD":
                return N;
            case "YYYY":
                return I;
            case "YYYYY":
                return X;
            case "S":
            case "SS":
            case "SSS":
            case "DDD":
                return V;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
            case "a":
            case "A":
                return $;
            case "X":
                return q;
            case "Z":
            case "ZZ":
                return R;
            case "T":
                return j;
            case "MM":
            case "DD":
            case "YY":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
                return J;
            default:
                return RegExp(t.replace("\\", ""))
        }
    }
    
    function D(t, e, n) {
        var s, r = n._a;
        switch (t) {
            case "M":
            case "MM":
                r[1] = null == e ? 0 : ~~e - 1;
                break;
            case "MMM":
            case "MMMM":
                s = _(n._l).monthsParse(e), null != s ? r[1] = s : n._isValid = !1;
                break;
            case "D":
            case "DD":
            case "DDD":
            case "DDDD":
                null != e && (r[2] = ~~e);
                break;
            case "YY":
                r[0] = ~~e + (~~e > 68 ? 1900 : 2e3);
                break;
            case "YYYY":
            case "YYYYY":
                r[0] = ~~e;
                break;
            case "a":
            case "A":
                n._isPm = "pm" === (e + "").toLowerCase();
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                r[3] = ~~e;
                break;
            case "m":
            case "mm":
                r[4] = ~~e;
                break;
            case "s":
            case "ss":
                r[5] = ~~e;
                break;
            case "S":
            case "SS":
            case "SSS":
                r[6] = ~~(1e3 * ("0." + e));
                break;
            case "X":
                n._d = new Date(1e3 * parseFloat(e));
                break;
            case "Z":
            case "ZZ":
                n._useUTC = !0, s = (e + "").match(te), s && s[1] && (n._tzh = ~~s[1]), s && s[2] && (n._tzm = ~~s[2]), s && "+" === s[0] && (n._tzh = -n._tzh, n._tzm = -n._tzm)
        }
        null == e && (n._isValid = !1)
    }
    
    function Y(t) {
        var e, n, s = [];
        if (!t._d) {
            for (e = 0; 7 > e; e++)
                t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            s[3] += t._tzh || 0, s[4] += t._tzm || 0, n = new Date(0), t._useUTC ? (n.setUTCFullYear(s[0], s[1], s[2]), n.setUTCHours(s[3], s[4], s[5], s[6])) : (n.setFullYear(s[0], s[1], s[2]), n.setHours(s[3], s[4], s[5], s[6])), t._d = n
        }
    }
    
    function w(t) {
        var e, n, s = t._f.match(Z), r = t._i;
        for (t._a = [], e = 0; s.length > e; e++)
            n = (g(s[e]).exec(r) || [])[0], n && (r = r.slice(r.indexOf(n) + n.length)), oe[s[e]] && D(s[e], n, t);
        t._isPm && 12 > t._a[3] && (t._a[3] += 12), t._isPm === !1 && 12 === t._a[3] && (t._a[3] = 0), Y(t)
    }
    
    function p(t) {
        var e, n, s, i, o, u = 99;
        for (i = t._f.length; i > 0; i--) {
            if (e = a({}, t), e._f = t._f[i - 1], w(e), n = new r(e), n.isValid()) {
                s = n;
                break
            }
            o = c(e._a, n.toArray()), u > o && (u = o, s = n)
        }
        a(t, s)
    }
    
    function k(t) {
        var e, n = t._i;
        if (B.exec(n)) {
            for (t._f = "YYYY-MM-DDT", e = 0; 4 > e; e++)
                if (Q[e][1].exec(n)) {
                    t._f += Q[e][0];
                    break
                }
            R.exec(n) && (t._f += " Z"), w(t)
        } else
            t._d = new Date(n)
    }
    
    function v(e) {
        var n = e._i, s = A.exec(n);
        n === t ? e._d = new Date : s ? e._d = new Date(+s[1]) : "string" == typeof n ? k(e) : h(n) ? (e._a = n.slice(0), Y(e)) : e._d = n instanceof Date ? new Date(+n) : new Date(n)
    }
    
    function T(t, e, n, s, r) {
        return r.relativeTime(e || 1, !!n, t, s)
    }
    
    function S(t, e, n) {
        var s = P(Math.abs(t) / 1e3), r = P(s / 60), i = P(r / 60), a = P(i / 24), o = P(a / 365), u = 45 > s && ["s", s] || 1 === r && ["m"] || 45 > r && ["mm", r] || 1 === i && ["h"] || 22 > i && ["hh", i] || 1 === a && ["d"] || 25 >= a && ["dd", a] || 45 >= a && ["M"] || 345 > a && ["MM", P(a / 30)] || 1 === o && ["y"] || ["yy", o];
        return u[2] = e, u[3] = t > 0, u[4] = n, T.apply({}, u)
    }
    
    function b(t, e, n) {
        var s, r = n - e, i = n - t.day();
        return i > r && (i -= 7), r - 7 > i && (i += 7), s = C(t).add("d", i), {week: Math.ceil(s.dayOfYear() / 7),year: s.year()}
    }
    
    function F(t) {
        var e = t._i, n = t._f;
        return null === e || "" === e ? null : ("string" == typeof e && (t._i = e = _().preparse(e)), C.isMoment(e) ? (t = a({}, e), t._d = new Date(+e._d)) : n ? h(n) ? p(t) : w(t) : v(t), new r(t))
    }
    
    function L(t, e) {
        C.fn[t] = C.fn[t + "s"] = function(t) {
            var n = this._isUTC ? "UTC" : "";
            return null != t ? (this._d["set" + n + e](t), this) : this._d["get" + n + e]()
        }
    }
    
    function H(t) {
        C.duration.fn[t] = function() {
            return this._data[t]
        }
    }
    
    function O(t, e) {
        C.duration.fn["as" + t] = function() {
            return +this / e
        }
    }
    
    for (var C, z, W = "2.0.0", P = Math.round, U = {}, x = "undefined" != typeof module && module.exports, A = /^\/?Date\((\-?\d+)/i, G = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/, Z = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, E = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, J = /\d\d?/, V = /\d{1,3}/, N = /\d{3}/, I = /\d{1,4}/, X = /[+\-]?\d{1,6}/, $ = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, R = /Z|[\+\-]\d\d:?\d\d/i, j = /T/i, q = /[\+\-]?\d+(\.\d{1,3})?/, B = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, K = "YYYY-MM-DDTHH:mm:ssZ", Q = [
        ["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], 
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], 
        ["HH:mm", /(T| )\d\d:\d\d/], 
        ["HH", /(T| )\d\d/]
    ], te = /([\+\-]|\d\d)/gi, ee = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), ne = {Milliseconds: 1,Seconds: 1e3,Minutes: 6e4,Hours: 36e5,Days: 864e5,Months: 2592e6,Years: 31536e6}, se = {ms: "millisecond",s: "second",m: "minute",h: "hour",d: "day",w: "week",M: "month",y: "year"}, re = {}, ie = "DDD w W M D d".split(" "), ae = "M D H h m s w W".split(" "), oe = {M: function() {
            return this.month() + 1
        },MMM: function(t) {
            return this.lang().monthsShort(this, t)
        },MMMM: function(t) {
            return this.lang().months(this, t)
        },D: function() {
            return this.date()
        },DDD: function() {
            return this.dayOfYear()
        },d: function() {
            return this.day()
        },dd: function(t) {
            return this.lang().weekdaysMin(this, t)
        },ddd: function(t) {
            return this.lang().weekdaysShort(this, t)
        },dddd: function(t) {
            return this.lang().weekdays(this, t)
        },w: function() {
            return this.week()
        },W: function() {
            return this.isoWeek()
        },YY: function() {
            return u(this.year() % 100, 2)
        },YYYY: function() {
            return u(this.year(), 4)
        },YYYYY: function() {
            return u(this.year(), 5)
        },gg: function() {
            return u(this.weekYear() % 100, 2)
        },gggg: function() {
            return this.weekYear()
        },ggggg: function() {
            return u(this.weekYear(), 5)
        },GG: function() {
            return u(this.isoWeekYear() % 100, 2)
        },GGGG: function() {
            return this.isoWeekYear()
        },GGGGG: function() {
            return u(this.isoWeekYear(), 5)
        },e: function() {
            return this.weekday()
        },E: function() {
            return this.isoWeekday()
        },a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },H: function() {
            return this.hours()
        },h: function() {
            return this.hours() % 12 || 12
        },m: function() {
            return this.minutes()
        },s: function() {
            return this.seconds()
        },S: function() {
            return ~~(this.milliseconds() / 100)
        },SS: function() {
            return u(~~(this.milliseconds() / 10), 2)
        },SSS: function() {
            return u(this.milliseconds(), 3)
        },Z: function() {
            var t = -this.zone(), e = "+";
            return 0 > t && (t = -t, e = "-"), e + u(~~(t / 60), 2) + ":" + u(~~t % 60, 2)
        },ZZ: function() {
            var t = -this.zone(), e = "+";
            return 0 > t && (t = -t, e = "-"), e + u(~~(10 * t / 6), 4)
        },X: function() {
            return this.unix()
        }}; ie.length; )
        z = ie.pop(), oe[z + "o"] = n(oe[z], z);
    for (; ae.length; )
        z = ae.pop(), oe[z + z] = e(oe[z], 2);
    for (oe.DDDD = e(oe.DDD, 3), s.prototype = {set: function(t) {
            var e, n;
            for (n in t)
                e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e
        },_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months: function(t) {
            return this._months[t.month()]
        },_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort: function(t) {
            return this._monthsShort[t.month()]
        },monthsParse: function(t) {
            var e, n, s;
            for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++)
                if (this._monthsParse[e] || (n = C([2e3, e]), s = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = RegExp(s.replace(".", ""), "i")), this._monthsParse[e].test(t))
                    return e
        },_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays: function(t) {
            return this._weekdays[t.day()]
        },_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort: function(t) {
            return this._weekdaysShort[t.day()]
        },_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin: function(t) {
            return this._weekdaysMin[t.day()]
        },weekdaysParse: function(t) {
            var e, n, s;
            for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)
                if (this._weekdaysParse[e] || (n = C([2e3, 1]).day(e), s = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = RegExp(s.replace(".", ""), "i")), this._weekdaysParse[e].test(t))
                    return e
        },_longDateFormat: {LT: "h:mm A",L: "MM/DD/YYYY",LL: "MMMM D YYYY",LLL: "MMMM D YYYY LT",LLLL: "dddd, MMMM D YYYY LT"},longDateFormat: function(t) {
            var e = this._longDateFormat[t];
            return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
                return t.slice(1)
            }), this._longDateFormat[t] = e), e
        },meridiem: function(t, e, n) {
            return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },_calendar: {sameDay: "[Today at] LT",nextDay: "[Tomorrow at] LT",nextWeek: "dddd [at] LT",lastDay: "[Yesterday at] LT",lastWeek: "[Last] dddd [at] LT",sameElse: "L"},calendar: function(t, e) {
            var n = this._calendar[t];
            return "function" == typeof n ? n.apply(e) : n
        },_relativeTime: {future: "in %s",past: "%s ago",s: "a few seconds",m: "a minute",mm: "%d minutes",h: "an hour",hh: "%d hours",d: "a day",dd: "%d days",M: "a month",MM: "%d months",y: "a year",yy: "%d years"},relativeTime: function(t, e, n, s) {
            var r = this._relativeTime[n];
            return "function" == typeof r ? r(t, e, n, s) : r.replace(/%d/i, t)
        },pastFuture: function(t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
        },ordinal: function(t) {
            return this._ordinal.replace("%d", t)
        },_ordinal: "%d",preparse: function(t) {
            return t
        },postformat: function(t) {
            return t
        },week: function(t) {
            return b(t, this._week.dow, this._week.doy).week
        },_week: {dow: 0,doy: 6}}, C = function(t, e, n) {
        return F({_i: t,_f: e,_l: n,_isUTC: !1})
    }, C.utc = function(t, e, n) {
        return F({_useUTC: !0,_isUTC: !0,_l: n,_i: t,_f: e})
    }, C.unix = function(t) {
        return C(1e3 * t)
    }, C.duration = function(t, e) {
        var n, s, r = C.isDuration(t), a = "number" == typeof t, o = r ? t._data : a ? {} : t, u = G.exec(t);
        return a ? e ? o[e] = t : o.milliseconds = t : u && (n = "-" === u[1] ? -1 : 1, o = {y: 0,d: ~~u[2] * n,h: ~~u[3] * n,m: ~~u[4] * n,s: ~~u[5] * n,ms: ~~u[6] * n}), s = new i(o), r && t.hasOwnProperty("_lang") && (s._lang = t._lang), s
    }, C.version = W, C.defaultFormat = K, C.lang = function(e, n) {
        return e ? (n ? l(e, n) : U[e] || _(e), C.duration.fn._lang = C.fn._lang = _(e), t) : C.fn._lang._abbr
    }, C.langData = function(t) {
        return t && t._lang && t._lang._abbr && (t = t._lang._abbr), _(t)
    }, C.isMoment = function(t) {
        return t instanceof r
    }, C.isDuration = function(t) {
        return t instanceof i
    }, C.fn = r.prototype = {clone: function() {
            return C(this)
        },valueOf: function() {
            return +this._d
        },unix: function() {
            return Math.floor(+this._d / 1e3)
        },toString: function() {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },toDate: function() {
            return this._d
        },toJSON: function() {
            return M(C(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },toArray: function() {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
        },isValid: function() {
            return null == this._isValid && (this._isValid = this._a ? !c(this._a, (this._isUTC ? C.utc(this._a) : C(this._a)).toArray()) : !isNaN(this._d.getTime())), !!this._isValid
        },utc: function() {
            return this._isUTC = !0, this
        },local: function() {
            return this._isUTC = !1, this
        },format: function(t) {
            var e = M(this, t || C.defaultFormat);
            return this.lang().postformat(e)
        },add: function(t, e) {
            var n;
            return n = "string" == typeof t ? C.duration(+e, t) : C.duration(t, e), d(this, n, 1), this
        },subtract: function(t, e) {
            var n;
            return n = "string" == typeof t ? C.duration(+e, t) : C.duration(t, e), d(this, n, -1), this
        },diff: function(t, e, n) {
            var s, r, i = this._isUTC ? C(t).utc() : C(t).local(), a = 6e4 * (this.zone() - i.zone());
            return e = f(e), "year" === e || "month" === e ? (s = 432e5 * (this.daysInMonth() + i.daysInMonth()), r = 12 * (this.year() - i.year()) + (this.month() - i.month()), r += (this - C(this).startOf("month") - (i - C(i).startOf("month"))) / s, "year" === e && (r /= 12)) : (s = this - i - a, r = "second" === e ? s / 1e3 : "minute" === e ? s / 6e4 : "hour" === e ? s / 36e5 : "day" === e ? s / 864e5 : "week" === e ? s / 6048e5 : s), n ? r : o(r)
        },from: function(t, e) {
            return C.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
        },fromNow: function(t) {
            return this.from(C(), t)
        },calendar: function() {
            var t = this.diff(C().startOf("day"), "days", !0), e = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(e, this))
        },isLeapYear: function() {
            var t = this.year();
            return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400
        },isDST: function() {
            return this.zone() < C([this.year()]).zone() || this.zone() < C([this.year(), 5]).zone()
        },day: function(t) {
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? "string" == typeof t && (t = this.lang().weekdaysParse(t), "number" != typeof t) ? this : this.add({d: t - e}) : e
        },month: function(t) {
            var e = this._isUTC ? "UTC" : "";
            return null != t ? "string" == typeof t && (t = this.lang().monthsParse(t), "number" != typeof t) ? this : (this._d["set" + e + "Month"](t), this) : this._d["get" + e + "Month"]()
        },startOf: function(t) {
            switch (t = f(t)) {
                case "year":
                    this.month(0);
                case "month":
                    this.date(1);
                case "week":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t && this.day(0), this
        },endOf: function(t) {
            return this.startOf(t).add(t, 1).subtract("ms", 1)
        },isAfter: function(e, n) {
            return n = n !== t ? n : "millisecond", +this.clone().startOf(n) > +C(e).startOf(n)
        },isBefore: function(e, n) {
            return n = n !== t ? n : "millisecond", +this.clone().startOf(n) < +C(e).startOf(n)
        },isSame: function(e, n) {
            return n = n !== t ? n : "millisecond", +this.clone().startOf(n) === +C(e).startOf(n)
        },zone: function() {
            return this._isUTC ? 0 : this._d.getTimezoneOffset()
        },daysInMonth: function() {
            return C.utc([this.year(), this.month() + 1, 0]).date()
        },dayOfYear: function(t) {
            var e = P((C(this).startOf("day") - C(this).startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add("d", t - e)
        },weekYear: function(t) {
            var e = b(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == t ? e : this.add("y", t - e)
        },isoWeekYear: function(t) {
            var e = b(this, 1, 4).year;
            return null == t ? e : this.add("y", t - e)
        },week: function(t) {
            var e = this.lang().week(this);
            return null == t ? e : this.add("d", 7 * (t - e))
        },isoWeek: function(t) {
            var e = b(this, 1, 4).week;
            return null == t ? e : this.add("d", 7 * (t - e))
        },weekday: function(t) {
            var e = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
            return null == t ? e : this.add("d", t - e)
        },isoWeekday: function(t) {
            var e = (this._d.getDay() + 6) % 7;
            return null == t ? e : this.add("d", t - e)
        },lang: function(e) {
            return e === t ? this._lang : (this._lang = _(e), this)
        }}, z = 0; ee.length > z; z++)
        L(ee[z].toLowerCase().replace(/s$/, ""), ee[z]);
    L("year", "FullYear"), C.fn.days = C.fn.day, C.fn.months = C.fn.month, C.fn.weeks = C.fn.week, C.fn.isoWeeks = C.fn.isoWeek, C.duration.fn = i.prototype = {weeks: function() {
            return o(this.days() / 7)
        },valueOf: function() {
            return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * ~~(this._months / 12)
        },humanize: function(t) {
            var e = +this, n = S(e, !t, this.lang());
            return t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n)
        },get: function(t) {
            return t = f(t), this[t.toLowerCase() + "s"]()
        },as: function(t) {
            return t = f(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]()
        },lang: C.fn.lang};
    for (z in ne)
        ne.hasOwnProperty(z) && (O(z, ne[z]), H(z.toLowerCase()));
    O("Weeks", 6048e5), C.duration.fn.asMonths = function() {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, C.lang("en", {ordinal: function(t) {
            var e = t % 10, n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + n
        }}), x && (module.exports = C), "undefined" == typeof ender && (this.moment = C), "function" == typeof define && define("commons/moment/2.0.0/moment", [], function() {
        return C
    })
}).call(this);
;
define("commons/qycloud/firebugx", [], function(require, exports, module) {
    if (typeof console === "undefined" || typeof console.log === "undefined") {
        var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", 
            "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
        
        window.console = {};
        for (var i = 0; i < names.length; ++i) {
            window.console[names[i]] = function() {
            }
        }
    }
    
    function arrayToStr(args) {
        var args = _.values(args), str = '';
        for (var i = 0, length = args.length; i < length; i++) {
            if (_.isString(args[i])) {
                str = str + args[i];
            } else {
                str = str + args[i];
            }
        }
        return str;
    }
    
    window.log = {};
    log.log = log.debug = function() {
        typeof console.log.apply === 'function' ? console.log.apply(console, arguments) : console.log(arrayToStr(arguments));
    };
    
    log.info = function() {
        typeof console.info.apply === 'function' ? console.info.apply(console, arguments) : console.info(arrayToStr(arguments));
    };
    
    log.warn = function() {
        typeof console.warn.apply === 'function' ? console.warn.apply(console, arguments) : console.warn(arrayToStr(arguments));
    };
    
    log.error = function() {
        typeof console.error.apply === 'function' ? console.error.apply(console, arguments) : console.error(arrayToStr(arguments));
    };
});
;
/**
 * web前端工具类
 */
define("commons/qycloud/webhelper", [], function(require, exports, module) {
    
    var reg_url = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    
    module.exports = {
        getCookie: function(name) {
            var arr = document.cookie
            .match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
            if (arr != null)
                return unescape(arr[2]);
            return null;
        },

        /**
         * Get locale
         */
        getLocale: function() {
            var locale = this.getCookie('lang');
            locale = locale || this.getUrlEncodedKey('locale');
            locale = locale ? locale : (navigator.language || navigator.browserLanguage 
            || navigator.systemLanguage || navigator.userLanguage).replace(
            /-/g, '_');
            var index = locale.indexOf('_');
            if (index != -1) {
                var lang, region;
                lang = locale.substring(0, index);
                region = locale.substring(index, locale.length).toUpperCase();
                locale = lang + region;
            }
            return locale;
        },
        
        getLang: function() {
            var lang = 'zh_CN', locale = this.getLocale();
            if (locale) {
                locale = locale.toLowerCase();
                _.include(locale, 'cn') && (lang = 'zh_CN');
                _.include(locale, 'en') && (lang = 'en_US');
                _.include(locale, 'tw') && (lang = 'zh_TW');
                _.include(locale, 'hk') && (lang = 'zh_TW');
            }
            return lang;
        },
        
        loadExternalFiles: function(settings) {
            var fileUrlStrs = [];
            var i;
            for (i in settings.fileUrls) {
                fileUrlStrs.push(settings.prefix + settings.fileUrls[i] + "?t=" 
                + settings.version + settings.suffix);
            }
            document.write(fileUrlStrs.join(""));
        },
        
        escapeRegExp: function(str) {
            if (str)
                return str.replace(/[.*+?^${}()|[\]\/\\]/g, "\\$0");
            return null;
        },
        
        trimEnd: function(str, c) {
            if (str && c)
                return str.replace(new RegExp(this.escapeRegExp(c) + "*$"), '');
            return str.replace(/\s+$/, '');
        },
        trimStart: function(str, c) {
            if (str && c)
                return str.replace(new RegExp("^" + this.escapeRegExp(c) + "*"), '');
            return str.replace(/^\s+/, '');
        },

        /**
         * set
         */
        setUrlEncodedKey: function(key, value, query) {
            query = query || window.location.search;
            var q = query + "&";
            var re = new RegExp("[?|&]" + key + "=.*?&");
            if (!re.test(q))
                q += key + "=" + encodeURI(value);
            else
                q = q.replace(re, "&" + key + "=" + encodeURIComponent(value) + "&");
            q = this.trimEnd(this.trimStart(q, "&"), "&");
            return q.charAt(0) == "?" ? q : q = "?" + q;
        },
        
        getUrlEncodedKey: function(key, query) {
            if (!query)
                query = window.location.search;
            var re = new RegExp("[?|&]" + key + "=(.*?)&");
            var matches = re.exec(query + "&");
            if (!matches || matches.length < 2)
                return null;
            return decodeURIComponent(matches[1].replace("+", " "));
        },
        isSupportBrowser: function() {
            var ua = navigator.userAgent.toLowerCase();
            if (function() {
                return ua.indexOf('msie 9') != -1;
            }())
                return true;
            if (function() {
                return ua.indexOf('msie 8') != -1;
            }())
                return true;
            if (function() {
                return ua.indexOf('msie 6') != -1 || ua.indexOf('msie 7') != -1;
            }()) {
                return false;
            }
            return true;
        },
        
        getBrowserAndVersions: function() {
            var Sys = {};
            var ua = navigator.userAgent.toLowerCase();
            var s;
            (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
            if (Sys.ie) { //Js判断为IE浏览器
                return ('IE' + Sys.ie);
            }
            if (Sys.firefox) { //Js判断为火狐(firefox)浏览器
                return ('firefox' + Sys.firefox);
            }
            if (Sys.chrome) { //Js判断为谷歌chrome浏览器
                return ('chrome' + Sys.chrome);
            }
            if (Sys.opera) { //Js判断为opera浏览器
                return ('opera' + Sys.opera);
            }
            if (Sys.safari) { //Js判断为苹果safari浏览器
                return ('safari' + Sys.safari);
            }
        },
        
        isCompatiableMode: function() {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf('msie') !== -2) {
                var iereg = /msie\s*(\d)/i;
                ua.match(iereg);
                var ieversion = RegExp.$1;
                var mode = document.documentMode;
                if (ieversion != mode && (ieversion >= 8 || mode >= 8) && !(ieversion >= 8 && mode >= 8)) {
                    return true;
                }
                // ie9 兼容视图
                if (ieversion == 7 && ua.indexOf('trident/5.0') != -1) {
                    return true;
                }
            }
            return false;
        },
        
        isIE: function() {
            var ua = navigator.userAgent.toLowerCase();
            return ua.indexOf('msie') != -1 || ua.indexOf("trident") != -1;
        },
        
        isIE9: function() {
            var ua = navigator.userAgent.toLowerCase();
            var iereg = /msie\s*(\d)/i;
            ua.match(iereg);
            var ieversion = RegExp.$1;
            return ua.indexOf('msie') != -1 && ieversion == 9;
        },
        
        isIE8: function() {
            var ua = navigator.userAgent.toLowerCase();
            var iereg = /msie\s*(\d+)/i;
            ua.match(iereg);
            var ieversion = RegExp.$1;
            return ua.indexOf('msie') != -1 && ieversion == 8;
        },
        
        isLessIE8: function() {
            var ua = navigator.userAgent.toLowerCase();
            var iereg = /msie\s*(\d+)/i;
            ua.match(iereg);
            var ieversion = RegExp.$1;
            return ua.indexOf('msie') != -1 && ieversion < 8;
        },
        
        getIEVersion: function() {
            var ua = navigator.userAgent.toLowerCase();
            var iereg = /msie\s*(\d+)/i;
            ua.match(iereg);
            var ieversion = RegExp.$1;
            return ua.indexOf('msie') != -1 && ieversion;
        },
        
        isMobile: function() {
            return this.isIPhone() || this.isAndroidPhone() || this.isIPad() 
            || this.isAndroidPad();
        },
        isIPad: function() {
            var platForm = navigator.platform.toLowerCase();
            if (platForm.indexOf("ipad") != -1) {
                return true;
            }
            return false;
        },
        isIPhone: function() {
            var platForm = navigator.platform.toLowerCase();
            if (platForm.indexOf("iphone") != -1 || platForm.indexOf("ipod") != -1) {
                return true;
            }
            return false;
        },
        isAndroidPhone: function() {
            var platForm = navigator.platform.toLowerCase();
            if (platForm.indexOf("android") != -1 
            || platForm.indexOf("linux armv7l") != -1) {
                return true;
            }
            return false;
        },
        isAndroidPad: function() {
            var platForm = navigator.platform.toLowerCase();
            if (platForm.indexOf("android") != -1 
            || platForm.indexOf("linux armv7l") != -1) {
                return true;
            }
            return false;
        },
        
        S4: function() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        },
        
        guid: function() {
            var S4 = this.S4;
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() 
            + S4() + S4());
        },
        //Weitoo backend do not need this parameter
        getAgent: function() {
            var agent = "web";
            if (this.isIPad() || this.isIPhone()) {
                agent = "pad";
            }
            return agent;
        },
        
        getFileSuffix: function(fileName) {
            if (!fileName || fileName.indexOf('.') === -1)
                return "";
            return fileName.substr(fileName.lastIndexOf('.') + 1).toLowerCase();
        },

        /**
         * 返回请求的url前缀: http://192.168.1.68/
         *
         * @returns {string}
         */
        getUrlPrefix: function() {
            return location.protocol + "//" + location.host;
        },
        
        loadJs: function(scriptId, file) {
            var scriptTag = document.getElementById(scriptId);
            var head = document.getElementsByTagName('head').item(0);
            if (scriptTag)
                head.removeChild(scriptTag);
            var script = document.createElement('script');
            script.src = file;
            script.type = 'text/javascript';
            script.id = scriptId;
            head.appendChild(script);
        },
        
        loadCss: function(cssId, file) {
            var cssTag = document.getElementById(cssId);
            var head = document.getElementsByTagName('head').item(0);
            if (cssTag)
                head.removeChild(cssTag);
            var css = document.createElement('link');
            css.href = file;
            css.rel = 'stylesheet';
            css.type = 'text/css';
            css.id = cssId;
            head.appendChild(css);
        },
        
        loadJsByJq: function(scriptId, file) {
            var head = $('head').remove('#' + scriptId);
            $("<scri" + "pt>" + "</scr" + "ipt>").attr({
                src: file,
                type: 'text/javascript',
                id: scriptId
            }).appendTo(head);
        },
        
        without: function(operates, withouts) {
            var index = -1;
            _.each(withouts, function(each) {
                index = _.indexOf(operates, each);
                index !== -1 && operates.splice(index, 1);
            });
        },
        
        becomeLink: function(str) {
            if (reg_url.test(str)) {
                var httpPos = str.indexOf("http");
                var hasHttp = httpPos !== -1;
                var linkStr = str.substring(httpPos);
                var url = hasHttp ? linkStr : 'http://' + linkStr;
                return str.substring(0, httpPos) + "<a href='" + url + "' target='_blank'>" + url + "</a>";
            } else {
                return str;
            }
        },

        /**
         * 初始化web
         */
        initBackboneWeb: function() {
            var lang = this.getLang();
            window.lang = lang;
            $("body").addClass(lang);
            seajs.isPrivate && $('body').addClass("private");
            
            _.extend(window, {
                model: {},
                modelbinder: {},
                tpl: {},
                view: {},
                tplpre: {},
                cache: {},
                collection: {},
                setting: {}
            });
        },
        
        getBrowerInfo: function() {
            var Sys = {};
            var ua = navigator.userAgent.toLowerCase();
            var s;
            (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : 
            (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : 
            (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : 
            (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : 
            (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

            //以下进行测试
            //if (Sys.ie) document.write('IE: ' + Sys.ie);
            //if (Sys.firefox) document.write('Firefox: ' + Sys.firefox);
            //if (Sys.chrome) document.write('Chrome: ' + Sys.chrome);
            //if (Sys.opera) document.write('Opera: ' + Sys.opera);
            //if (Sys.safari) document.write('Safari: ' + Sys.safari);
            return Sys;
        }
    }
});
;
define("commons/qycloud/security", ['crypto-sha256'], function(require, exports, module) {
    'use strict';
    
    require("crypto-sha256");
    
    (function() {
        var Security = {};
        
        var i = 0, j = 0, sbox = [];
        
        function setup(key) {
            var k, x;
            var kl = key.length;
            
            for (i = 0; i < 256; i++) {
                sbox[i] = i >= 128 ? (i % 128 - 128) : i;
            }
            
            for (i = 0, j = 0, k = 0; i < 256; i++) {
                j = j + sbox[i] + key.charCodeAt(k) & 0xff;
                k = (k + 1) % kl;
                
                x = sbox[i];
                sbox[i] = sbox[j];
                sbox[j] = x;
            }

            // Set things up to start coding/decoding
            
            i = 0;
            j = 0;
        }
        
        function codeDecode(key, plaintext) {
            setup(key);
            
            var x, r = "";
            var pl = plaintext.length;
            for (var k = 0; k < pl; k++) {
                i = i + 1 & 0xff;
                j = j + sbox[i] & 0xff;
                
                x = sbox[i];
                sbox[i] = sbox[j];
                sbox[j] = x;
                
                r += String.fromCharCode(plaintext.charCodeAt(k) 
                ^ sbox[sbox[i] + sbox[j] & 0xff] & 0xff);
            }
            return r;
        
        }
        
        function randomCharString() {
            var radStr = "1234567890abcdefghijklmnopqrstuvwxyz";
            var length = 32;
            var randBuffer = [];
            for (var i = 0; i < length; i++) {
                randBuffer[i] = radStr.charAt(~~(Math.floor(Math.random() * 36)));
            }
            return randBuffer.join("");
        }
        
        // function byteStringToHexString(s) {
        //     var r = "", i, tmp;
        //     for (i = 0; i < s.length; i++) {
        //         tmp = (s.charCodeAt(i)).toString(16);
        //         r += (tmp.length === 1 ? "0" + tmp : tmp);
        //     }
        //     return r;
        // }

        /**
         * 返回nonce对象
         * @param name
         * @param newpwd
         * @returns {{nonce: *, haskKey: *, password: *}}
         */
        // function getNonceDTO(name, newpwd) {
        //     var nonce = randomCharString();
        //     var password = newpwd; //Crypto.SHA256($.trim(newpwd));
        //     var hashKey = Crypto.SHA256(name + password + nonce);
        //     password = byteStringToHexString(codeDecode(nonce, password));
        //     return {
        //         nonce: nonce,
        //         hashKey: hashKey,
        //         password: password
        //     }
        // }
        
        /**
         * michael 修改后的加密算法
         */
        function getNonceDTO(name, newpwd) {
            var nonce = randomCharString();
            var pwd = Crypto.SHA256(newpwd); //Crypto.SHA256($.trim(newpwd));
            var hashKey = Crypto.SHA256(name + pwd + nonce);
            //password = byteStringToHexString(codeDecode(nonce, password));
            return {
                nonce: nonce,
                hashKey: hashKey,
                pwd: pwd
            }
        }
        
        
        function hexStringToByteString(str) {
            var byteString = "";
            var i;
            var len;
            
            for (i = 0, len = str.length; i < len; i += 2) {
                byteString += String.fromCharCode(parseInt(str.substring(i, i + 2), 16));
            }
            return byteString;
        }

        // export method
        Security.codeDecode = codeDecode;
        Security.randomCharString = randomCharString;
        //Security.byteStringToHexString = byteStringToHexString;
        Security.hexStringToByteString = hexStringToByteString;
        Security.getNonceDTO = getNonceDTO;
        
        module.exports = Security;
    })();
});
;
define("commons/crypto-sha256/crypto-sha256", function(require, exports, module) {
    /*
     * Crypto-JS v2.5.2
     * http://code.google.com/p/crypto-js/
     * (c) 2009-2011 by Jeff Mott. All rights reserved.
     * http://code.google.com/p/crypto-js/wiki/License
     */
    (typeof Crypto == "undefined" || !Crypto.util) && function() {
        var f = window.Crypto = {}, l = f.util = {rotl: function(b, a) {
                return b << a | b >>> 32 - a
            },rotr: function(b, a) {
                return b << 32 - a | b >>> a
            },endian: function(b) {
                if (b.constructor == Number)
                    return l.rotl(b, 8) & 16711935 | l.rotl(b, 24) & 4278255360;
                for (var a = 0; a < b.length; a++)
                    b[a] = l.endian(b[a]);
                return b
            },randomBytes: function(b) {
                for (var a = []; b > 0; b--)
                    a.push(Math.floor(Math.random() * 256));
                return a
            },bytesToWords: function(b) {
                for (var a = [], c = 0, d = 0; c < b.length; c++, d += 8)
                    a[d >>> 5] |= b[c] << 24 - 
                    d % 32;
                return a
            },wordsToBytes: function(b) {
                for (var a = [], c = 0; c < b.length * 32; c += 8)
                    a.push(b[c >>> 5] >>> 24 - c % 32 & 255);
                return a
            },bytesToHex: function(b) {
                for (var a = [], c = 0; c < b.length; c++)
                    a.push((b[c] >>> 4).toString(16)), a.push((b[c] & 15).toString(16));
                return a.join("")
            },hexToBytes: function(b) {
                for (var a = [], c = 0; c < b.length; c += 2)
                    a.push(parseInt(b.substr(c, 2), 16));
                return a
            },bytesToBase64: function(b) {
                if (typeof btoa == "function")
                    return btoa(g.bytesToString(b));
                for (var a = [], c = 0; c < b.length; c += 3)
                    for (var d = b[c] << 16 | b[c + 1] << 8 | 
                    b[c + 2], p = 0; p < 4; p++)
                        c * 8 + p * 6 <= b.length * 8 ? a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d >>> 6 * (3 - p) & 63)) : a.push("=");
                return a.join("")
            },base64ToBytes: function(b) {
                if (typeof atob == "function")
                    return g.stringToBytes(atob(b));
                for (var b = b.replace(/[^A-Z0-9+\/]/ig, ""), a = [], c = 0, d = 0; c < b.length; d = ++c % 4)
                    d != 0 && a.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b.charAt(c - 1)) & Math.pow(2, -2 * d + 8) - 1) << d * 2 | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b.charAt(c)) >>> 
                    6 - d * 2);
                return a
            }}, f = f.charenc = {};
        f.UTF8 = {stringToBytes: function(b) {
                return g.stringToBytes(unescape(encodeURIComponent(b)))
            },bytesToString: function(b) {
                return decodeURIComponent(escape(g.bytesToString(b)))
            }};
        var g = f.Binary = {stringToBytes: function(b) {
                for (var a = [], c = 0; c < b.length; c++)
                    a.push(b.charCodeAt(c) & 255);
                return a
            },bytesToString: function(b) {
                for (var a = [], c = 0; c < b.length; c++)
                    a.push(String.fromCharCode(b[c]));
                return a.join("")
            }}
    }();
    (function() {
        var f = Crypto, l = f.util, g = f.charenc, b = g.UTF8, a = g.Binary, c = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 
            2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], d = f.SHA256 = function(b, c) {
            var e = l.wordsToBytes(d._sha256(b));
            return c && c.asBytes ? e : c && c.asString ? a.bytesToString(e) : l.bytesToHex(e)
        };
        d._sha256 = function(a) {
            a.constructor == String && (a = b.stringToBytes(a));
            var d = l.bytesToWords(a), e = a.length * 8, a = [1779033703, 3144134277, 
                1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], f = [], g, m, q, i, n, o, r, s, h, k, j;
            d[e >> 5] |= 128 << 24 - e % 32;
            d[(e + 64 >> 9 << 4) + 15] = e;
            for (s = 0; s < d.length; s += 16) {
                e = a[0];
                g = a[1];
                m = a[2];
                q = a[3];
                i = a[4];
                n = a[5];
                o = a[6];
                r = a[7];
                for (h = 0; h < 64; h++) {
                    h < 16 ? f[h] = d[h + s] : (k = f[h - 15], j = f[h - 2], f[h] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + (f[h - 7] >>> 0) + ((j << 15 | j >>> 17) ^ (j << 13 | j >>> 19) ^ j >>> 10) + (f[h - 16] >>> 0));
                    j = e & g ^ e & m ^ g & m;
                    var t = (e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22);
                    k = (r >>> 0) + ((i << 26 | i >>> 6) ^ (i << 21 | i >>> 11) ^ (i << 7 | i >>> 25)) + 
                    (i & n ^ ~i & o) + c[h] + (f[h] >>> 0);
                    j = t + j;
                    r = o;
                    o = n;
                    n = i;
                    i = q + k;
                    q = m;
                    m = g;
                    g = e;
                    e = k + j
                }
                a[0] += e;
                a[1] += g;
                a[2] += m;
                a[3] += q;
                a[4] += i;
                a[5] += n;
                a[6] += o;
                a[7] += r
            }
            return a
        };
        d._blocksize = 16;
        d._digestsize = 32
    })();
});
;
define("commons/handlebars-runtime/1.0.0/handlebars", [], function(a, b, c) {
    var d = {};
    d.VERSION = "1.0.0", d.COMPILER_REVISION = 4, d.REVISION_CHANGES = {1: "<= 1.0.rc.2",2: "== 1.0.0-rc.3",3: "== 1.0.0-rc.4",4: ">= 1.0.0"}, d.helpers = {}, d.partials = {};
    var e = Object.prototype.toString, f = "[object Function]", g = "[object Object]";
    d.registerHelper = function(a, b, c) {
        if (e.call(a) === g) {
            if (c || b)
                throw new d.Exception("Arg not supported with multiple helpers");
            d.Utils.extend(this.helpers, a)
        } else
            c && (b.not = c), this.helpers[a] = b
    }, d.registerPartial = function(a, b) {
        e.call(a) === g ? d.Utils.extend(this.partials, a) : this.partials[a] = b
    }, d.registerHelper("helperMissing", function(a) {
        if (2 === arguments.length)
            return void 0;
        throw new Error("Missing helper: '" + a + "'")
    }), d.registerHelper("blockHelperMissing", function(a, b) {
        var c = b.inverse || function() {
        }, g = b.fn, h = e.call(a);
        return h === f && (a = a.call(this)), a === !0 ? g(this) : a === !1 || null == a ? c(this) : "[object Array]" === h ? a.length > 0 ? d.helpers.each(a, b) : c(this) : g(a)
    }), d.K = function() {
    }, d.createFrame = Object.create || function(a) {
        d.K.prototype = a;
        var b = new d.K;
        return d.K.prototype = null, b
    }, d.logger = {DEBUG: 0,INFO: 1,WARN: 2,ERROR: 3,level: 3,methodMap: {0: "debug",1: "info",2: "warn",3: "error"},log: function(a, b) {
            if (d.logger.level <= a) {
                var c = d.logger.methodMap[a];
                "undefined" != typeof console && console[c] && console[c].call(console, b)
            }
        }}, d.log = function(a, b) {
        d.logger.log(a, b)
    }, d.registerHelper("each", function(a, b) {
        var j, c = b.fn, g = b.inverse, h = 0, i = "", k = e.call(a);
        if (k === f && (a = a.call(this)), b.data && (j = d.createFrame(b.data)), a && "object" == typeof a)
            if (a instanceof Array)
                for (var l = a.length; l > h; h++)
                    j && (j.index = h), i += c(a[h], {data: j});
            else
                for (var m in a)
                    a.hasOwnProperty(m) && (j && (j.key = m), i += c(a[m], {data: j}), h++);
        return 0 === h && (i = g(this)), i
    }), d.registerHelper("if", function(a, b) {
        var c = e.call(a);
        return c === f && (a = a.call(this)), !a || d.Utils.isEmpty(a) ? b.inverse(this) : b.fn(this)
    }), d.registerHelper("unless", function(a, b) {
        return d.helpers["if"].call(this, a, {fn: b.inverse,inverse: b.fn})
    }), d.registerHelper("with", function(a, b) {
        var c = e.call(a);
        return c === f && (a = a.call(this)), d.Utils.isEmpty(a) ? void 0 : b.fn(a)
    }), d.registerHelper("log", function(a, b) {
        var c = b.data && null != b.data.level ? parseInt(b.data.level, 10) : 1;
        d.log(c, a)
    });
    var h = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    d.Exception = function() {
        for (var b = Error.prototype.constructor.apply(this, arguments), c = 0; c < h.length; c++)
            this[h[c]] = b[h[c]]
    }, d.Exception.prototype = new Error, d.SafeString = function(a) {
        this.string = a
    }, d.SafeString.prototype.toString = function() {
        return this.string.toString()
    };
    var i = {"&": "&amp;","<": "&lt;",">": "&gt;",'"': "&quot;","'": "&#x27;","`": "&#x60;"}, j = /[&<>"'`]/g, k = /[&<>"'`]/, l = function(a) {
        return i[a] || "&amp;"
    };
    d.Utils = {extend: function(a, b) {
            for (var c in b)
                b.hasOwnProperty(c) && (a[c] = b[c])
        },escapeExpression: function(a) {
            return a instanceof d.SafeString ? a.toString() : null == a || a === !1 ? "" : (a = a.toString(), k.test(a) ? a.replace(j, l) : a)
        },isEmpty: function(a) {
            return a || 0 === a ? "[object Array]" === e.call(a) && 0 === a.length ? !0 : !1 : !0
        }}, d.VM = {template: function(a) {
            var b = {escapeExpression: d.Utils.escapeExpression,invokePartial: d.VM.invokePartial,programs: [],program: function(a, b, c) {
                    var e = this.programs[a];
                    return c ? e = d.VM.program(a, b, c) : e || (e = this.programs[a] = d.VM.program(a, b)), e
                },merge: function(a, b) {
                    var c = a || b;
                    return a && b && (c = {}, d.Utils.extend(c, b), d.Utils.extend(c, a)), c
                },programWithDepth: d.VM.programWithDepth,noop: d.VM.noop,compilerInfo: null};
            return function(c, e) {
                e = e || {};
                var f = a.call(b, d, c, e.helpers, e.partials, e.data), g = b.compilerInfo || [], h = g[0] || 1, i = d.COMPILER_REVISION;
                if (h !== i) {
                    if (i > h) {
                        var j = d.REVISION_CHANGES[i], k = d.REVISION_CHANGES[h];
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + j + ") or downgrade your runtime to an older version (" + k + ")."
                    }
                    throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + g[1] + ")."
                }
                return f
            }
        },programWithDepth: function(a, b, c) {
            var d = Array.prototype.slice.call(arguments, 3), e = function(a, e) {
                return e = e || {}, b.apply(this, [a, e.data || c].concat(d))
            };
            return e.program = a, e.depth = d.length, e
        },program: function(a, b, c) {
            var d = function(a, d) {
                return d = d || {}, b(a, d.data || c)
            };
            return d.program = a, d.depth = 0, d
        },noop: function() {
            return ""
        },invokePartial: function(a, b, c, e, f, g) {
            var h = {helpers: e,partials: f,data: g};
            if (void 0 === a)
                throw new d.Exception("The partial " + b + " could not be found");
            if (a instanceof Function)
                return a(c, h);
            if (d.compile)
                return f[b] = d.compile(a, {data: void 0 !== g}), f[b](c, h);
            throw new d.Exception("The partial " + b + " could not be compiled when running in runtime-only mode")
        }}, d.template = d.VM.template, "object" == typeof c && c.exports ? c.exports = d : "function" == typeof define && define.amd ? define(function() {
        return d
    }) : this.Handlebars = d, b.Handlebars = d
});
;
define("commons/socket-io-client/socket.io", function(require, exports, module) {
    /*! Socket.IO.min.js build:0.9.11, production. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */
    var io = "undefined" == typeof module ? {} : module.exports;
    (function() {
        (function(a, b) {
            var c = a;
            c.version = "0.9.11", c.protocol = 1, c.transports = [], c.j = [], c.sockets = {}, c.connect = function(a, d) {
                var e = c.util.parseUri(a), f, g;
                b && b.location && (e.protocol = e.protocol || b.location.protocol.slice(0, -1), e.host = e.host || (b.document ? b.document.domain : b.location.hostname), e.port = e.port || b.location.port), f = c.util.uniqueUri(e);
                var h = {host: e.host,secure: "https" == e.protocol,port: e.port || ("https" == e.protocol ? 443 : 80),query: e.query || ""};
                c.util.merge(h, d);
                if (h["force new connection"] || !c.sockets[f])
                    g = new c.Socket(h);
                return !h["force new connection"] && g && (c.sockets[f] = g), g = g || c.sockets[f], g.of(e.path.length > 1 ? e.path : "")
            }
        })("object" == typeof module ? module.exports : this.io = {}, this), function(a, b) {
            var c = a.util = {}, d = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, e = ["source", "protocol", "authority", "userInfo", "user", "pwd", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            c.parseUri = function(a) {
                var b = d.exec(a || ""), c = {}, f = 14;
                while (f--)
                    c[e[f]] = b[f] || "";
                return c
            }, c.uniqueUri = function(a) {
                var c = a.protocol, d = a.host, e = a.port;
                return "document" in b ? (d = d || document.domain, e = e || (c == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)) : (d = d || "localhost", !e && c == "https" && (e = 443)), (c || "http") + "://" + d + ":" + (e || 80)
            }, c.query = function(a, b) {
                var d = c.chunkQuery(a || ""), e = [];
                c.merge(d, c.chunkQuery(b || ""));
                for (var f in d)
                    d.hasOwnProperty(f) && e.push(f + "=" + d[f]);
                return e.length ? "?" + e.join("&") : ""
            }, c.chunkQuery = function(a) {
                var b = {}, c = a.split("&"), d = 0, e = c.length, f;
                for (; d < e; ++d)
                    f = c[d].split("="), f[0] && (b[f[0]] = f[1]);
                return b
            };
            var f = !1;
            c.load = function(a) {
                if ("document" in b && document.readyState === "complete" || f)
                    return a();
                c.on(b, "load", a, !1)
            }, c.on = function(a, b, c, d) {
                a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener && a.addEventListener(b, c, d)
            }, c.request = function(a) {
                if (a && "undefined" != typeof XDomainRequest && !c.ua.hasCORS)
                    return new XDomainRequest;
                if ("undefined" != typeof XMLHttpRequest && (!a || c.ua.hasCORS))
                    return new XMLHttpRequest;
                if (!a)
                    try {
                        return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                    } catch (b) {
                    }
                return null
            }, "undefined" != typeof window && c.load(function() {
                f = !0
            }), c.defer = function(a) {
                if (!c.ua.webkit || "undefined" != typeof importScripts)
                    return a();
                c.load(function() {
                    setTimeout(a, 100)
                })
            }, c.merge = function(b, d, e, f) {
                var g = f || [], h = typeof e == "undefined" ? 2 : e, i;
                for (i in d)
                    d.hasOwnProperty(i) && c.indexOf(g, i) < 0 && (typeof b[i] != "object" || !h ? (b[i] = d[i], g.push(d[i])) : c.merge(b[i], d[i], h - 1, g));
                return b
            }, c.mixin = function(a, b) {
                c.merge(a.prototype, b.prototype)
            }, c.inherit = function(a, b) {
                function c() {
                }
                c.prototype = b.prototype, a.prototype = new c
            }, c.isArray = Array.isArray || function(a) {
                return Object.prototype.toString.call(a) === "[object Array]"
            }, c.intersect = function(a, b) {
                var d = [], e = a.length > b.length ? a : b, f = a.length > b.length ? b : a;
                for (var g = 0, h = f.length; g < h; g++)
                    ~c.indexOf(e, f[g]) && d.push(f[g]);
                return d
            }, c.indexOf = function(a, b, c) {
                for (var d = a.length, c = c < 0 ? c + d < 0 ? 0 : c + d : c || 0; c < d && a[c] !== b; c++)
                    ;
                return d <= c ? -1 : c
            }, c.toArray = function(a) {
                var b = [];
                for (var c = 0, d = a.length; c < d; c++)
                    b.push(a[c]);
                return b
            }, c.ua = {}, c.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
                try {
                    var a = new XMLHttpRequest
                } catch (b) {
                    return !1
                }
                return a.withCredentials != undefined
            }(), c.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent), c.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
        }("undefined" != typeof io ? io : module.exports, this), function(a, b) {
            function c() {
            }
            a.EventEmitter = c, c.prototype.on = function(a, c) {
                return this.$events || (this.$events = {}), this.$events[a] ? b.util.isArray(this.$events[a]) ? this.$events[a].push(c) : this.$events[a] = [this.$events[a], c] : this.$events[a] = c, this
            }, c.prototype.addListener = c.prototype.on, c.prototype.once = function(a, b) {
                function d() {
                    c.removeListener(a, d), b.apply(this, arguments)
                }
                var c = this;
                return d.listener = b, this.on(a, d), this
            }, c.prototype.removeListener = function(a, c) {
                if (this.$events && this.$events[a]) {
                    var d = this.$events[a];
                    if (b.util.isArray(d)) {
                        var e = -1;
                        for (var f = 0, g = d.length; f < g; f++)
                            if (d[f] === c || d[f].listener && d[f].listener === c) {
                                e = f;
                                break
                            }
                        if (e < 0)
                            return this;
                        d.splice(e, 1), d.length || delete this.$events[a]
                    } else
                        (d === c || d.listener && d.listener === c) && delete this.$events[a]
                }
                return this
            }, c.prototype.removeAllListeners = function(a) {
                return a === undefined ? (this.$events = {}, this) : (this.$events && this.$events[a] && (this.$events[a] = null), this)
            }, c.prototype.listeners = function(a) {
                return this.$events || (this.$events = {}), this.$events[a] || (this.$events[a] = []), b.util.isArray(this.$events[a]) || (this.$events[a] = [this.$events[a]]), this.$events[a]
            }, c.prototype.emit = function(a) {
                if (!this.$events)
                    return !1;
                var c = this.$events[a];
                if (!c)
                    return !1;
                var d = Array.prototype.slice.call(arguments, 1);
                if ("function" == typeof c)
                    c.apply(this, d);
                else {
                    if (!b.util.isArray(c))
                        return !1;
                    var e = c.slice();
                    for (var f = 0, g = e.length; f < g; f++)
                        e[f].apply(this, d)
                }
                return !0
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(exports, nativeJSON) {
            function f(a) {
                return a < 10 ? "0" + a : a
            }
            function date(a, b) {
                return isFinite(a.valueOf()) ? a.getUTCFullYear() + "-" + f(a.getUTCMonth() + 1) + "-" + f(a.getUTCDate()) + "T" + f(a.getUTCHours()) + ":" + f(a.getUTCMinutes()) + ":" + f(a.getUTCSeconds()) + "Z" : null
            }
            function quote(a) {
                return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                    var b = meta[a];
                    return typeof b == "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + a + '"'
            }
            function str(a, b) {
                var c, d, e, f, g = gap, h, i = b[a];
                i instanceof Date && (i = date(a)), typeof rep == "function" && (i = rep.call(b, a, i));
                switch (typeof i) {
                    case "string":
                        return quote(i);
                    case "number":
                        return isFinite(i) ? String(i) : "null";
                    case "boolean":
                    case "null":
                        return String(i);
                    case "object":
                        if (!i)
                            return "null";
                        gap += indent, h = [];
                        if (Object.prototype.toString.apply(i) === "[object Array]") {
                            f = i.length;
                            for (c = 0; c < f; c += 1)
                                h[c] = str(c, i) || "null";
                            return e = h.length === 0 ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
                        }
                        if (rep && typeof rep == "object") {
                            f = rep.length;
                            for (c = 0; c < f; c += 1)
                                typeof rep[c] == "string" && (d = rep[c], e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e))
                        } else
                            for (d in i)
                                Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
                        return e = h.length === 0 ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
                }
            }
            "use strict";
            if (nativeJSON && nativeJSON.parse)
                return exports.JSON = {parse: nativeJSON.parse,stringify: nativeJSON.stringify};
            var JSON = exports.JSON = {}, cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b","\t": "\\t","\n": "\\n","\f": "\\f","\r": "\\r",'"': '\\"',"\\": "\\\\"}, rep;
            JSON.stringify = function(a, b, c) {
                var d;
                gap = "", indent = "";
                if (typeof c == "number")
                    for (d = 0; d < c; d += 1)
                        indent += " ";
                else
                    typeof c == "string" && (indent = c);
                rep = b;
                if (!b || typeof b == "function" || typeof b == "object" && typeof b.length == "number")
                    return str("", {"": a});
                throw new Error("JSON.stringify")
            }, JSON.parse = function(text, reviver) {
                function walk(a, b) {
                    var c, d, e = a[b];
                    if (e && typeof e == "object")
                        for (c in e)
                            Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), d !== undefined ? e[c] = d : delete e[c]);
                    return reviver.call(a, b, e)
                }
                var j;
                text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }));
                if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                    return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({"": j}, "") : j;
                throw new SyntaxError("JSON.parse")
            }
        }("undefined" != typeof io ? io : module.exports, typeof JSON != "undefined" ? JSON : undefined), function(a, b) {
            var c = a.parser = {}, d = c.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"], e = c.reasons = ["transport not supported", "client not handshaken", "unauthorized"], f = c.advice = ["reconnect"], g = b.JSON, h = b.util.indexOf;
            c.encodePacket = function(a) {
                var b = h(d, a.type), c = a.id || "", i = a.endpoint || "", j = a.ack, k = null;
                switch (a.type) {
                    case "error":
                        var l = a.reason ? h(e, a.reason) : "", m = a.advice ? h(f, a.advice) : "";
                        if (l !== "" || m !== "")
                            k = l + (m !== "" ? "+" + m : "");
                        break;
                    case "message":
                        a.data !== "" && (k = a.data);
                        break;
                    case "event":
                        var n = {name: a.name};
                        a.args && a.args.length && (n.args = a.args), k = g.stringify(n);
                        break;
                    case "json":
                        k = g.stringify(a.data);
                        break;
                    case "connect":
                        a.qs && (k = a.qs);
                        break;
                    case "ack":
                        k = a.ackId + (a.args && a.args.length ? "+" + g.stringify(a.args) : "")
                }
                var o = [b, c + (j == "data" ? "+" : ""), i];
                return k !== null && k !== undefined && o.push(k), o.join(":")
            }, c.encodePayload = function(a) {
                var b = "";
                if (a.length == 1)
                    return a[0];
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    b += "\ufffd" + e.length + "\ufffd" + a[c]
                }
                return b
            };
            var i = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
            c.decodePacket = function(a) {
                var b = a.match(i);
                if (!b)
                    return {};
                var c = b[2] || "", a = b[5] || "", h = {type: d[b[1]],endpoint: b[4] || ""};
                c && (h.id = c, b[3] ? h.ack = "data" : h.ack = !0);
                switch (h.type) {
                    case "error":
                        var b = a.split("+");
                        h.reason = e[b[0]] || "", h.advice = f[b[1]] || "";
                        break;
                    case "message":
                        h.data = a || "";
                        break;
                    case "event":
                        try {
                            var j = g.parse(a);
                            h.name = j.name, h.args = j.args
                        } catch (k) {
                        }
                        h.args = h.args || [];
                        break;
                    case "json":
                        try {
                            h.data = g.parse(a)
                        } catch (k) {
                        }
                        break;
                    case "connect":
                        h.qs = a || "";
                        break;
                    case "ack":
                        var b = a.match(/^([0-9]+)(\+)?(.*)/);
                        if (b) {
                            h.ackId = b[1], h.args = [];
                            if (b[3])
                                try {
                                    h.args = b[3] ? g.parse(b[3]) : []
                                } catch (k) {
                                }
                        }
                        break;
                    case "disconnect":
                    case "heartbeat":
                }
                return h
            }, c.decodePayload = function(a) {
                if (a.charAt(0) == "\ufffd") {
                    var b = [];
                    for (var d = 1, e = ""; d < a.length; d++)
                        a.charAt(d) == "\ufffd" ? (b.push(c.decodePacket(a.substr(d + 1).substr(0, e))), d += Number(e) + 1, e = "") : e += a.charAt(d);
                    return b
                }
                return [c.decodePacket(a)]
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(a, b) {
            function c(a, b) {
                this.socket = a, this.sessid = b
            }
            a.Transport = c, b.util.mixin(c, b.EventEmitter), c.prototype.heartbeats = function() {
                return !0
            }, c.prototype.onData = function(a) {
                this.clearCloseTimeout(), (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout();
                if (a !== "") {
                    var c = b.parser.decodePayload(a);
                    if (c && c.length)
                        for (var d = 0, e = c.length; d < e; d++)
                            this.onPacket(c[d])
                }
                return this
            }, c.prototype.onPacket = function(a) {
                return this.socket.setHeartbeatTimeout(), a.type == "heartbeat" ? this.onHeartbeat() : (a.type == "connect" && a.endpoint == "" && this.onConnect(), a.type == "error" && a.advice == "reconnect" && (this.isOpen = !1), this.socket.onPacket(a), this)
            }, c.prototype.setCloseTimeout = function() {
                if (!this.closeTimeout) {
                    var a = this;
                    this.closeTimeout = setTimeout(function() {
                        a.onDisconnect()
                    }, this.socket.closeTimeout)
                }
            }, c.prototype.onDisconnect = function() {
                return this.isOpen && this.close(), this.clearTimeouts(), this.socket.onDisconnect(), this
            }, c.prototype.onConnect = function() {
                return this.socket.onConnect(), this
            }, c.prototype.clearCloseTimeout = function() {
                this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = null)
            }, c.prototype.clearTimeouts = function() {
                this.clearCloseTimeout(), this.reopenTimeout && clearTimeout(this.reopenTimeout)
            }, c.prototype.packet = function(a) {
                this.send(b.parser.encodePacket(a))
            }, c.prototype.onHeartbeat = function(a) {
                this.packet({type: "heartbeat"})
            }, c.prototype.onOpen = function() {
                this.isOpen = !0, this.clearCloseTimeout(), this.socket.onOpen()
            }, c.prototype.onClose = function() {
                var a = this;
                this.isOpen = !1, this.socket.onClose(), this.onDisconnect()
            }, c.prototype.prepareUrl = function() {
                var a = this.socket.options;
                return this.scheme() + "://" + a.host + ":" + a.port + "/" + a.resource + "/" + b.protocol + "/" + this.name + "/" + this.sessid
            }, c.prototype.ready = function(a, b) {
                b.call(this)
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(a, b, c) {
            function d(a) {
                this.options = {port: 80,secure: !1,document: "document" in c ? document : !1,resource: "socket.io",transports: b.transports,"connect timeout": 1e4,"try multiple transports": !0,reconnect: !0,"reconnection delay": 500,"reconnection limit": Infinity,"reopen delay": 3e3,"max reconnection attempts": 10,"sync disconnect on unload": !1,"auto connect": !0,"flash policy port": 10843,manualFlush: !1}, b.util.merge(this.options, a), this.connected = !1, this.open = !1, this.connecting = !1, this.reconnecting = !1, this.namespaces = {}, this.buffer = [], this.doBuffer = !1;
                if (this.options["sync disconnect on unload"] && (!this.isXDomain() || b.util.ua.hasCORS)) {
                    var d = this;
                    b.util.on(c, "beforeunload", function() {
                        d.disconnectSync()
                    }, !1)
                }
                this.options["auto connect"] && this.connect()
            }
            function e() {
            }
            a.Socket = d, b.util.mixin(d, b.EventEmitter), d.prototype.of = function(a) {
                return this.namespaces[a] || (this.namespaces[a] = new b.SocketNamespace(this, a), a !== "" && this.namespaces[a].packet({type: "connect"})), this.namespaces[a]
            }, d.prototype.publish = function() {
                this.emit.apply(this, arguments);
                var a;
                for (var b in this.namespaces)
                    this.namespaces.hasOwnProperty(b) && (a = this.of(b), a.$emit.apply(a, arguments))
            }, d.prototype.handshake = function(a) {
                function f(b) {
                    b instanceof Error ? (c.connecting = !1, c.onError(b.message)) : a.apply(null, b.split(":"))
                }
                var c = this, d = this.options, g = ["http" + (d.secure ? "s" : "") + ":/", d.host + ":" + d.port, d.resource, b.protocol, b.util.query(this.options.query, "t=" + +(new Date))].join("/");
                if (this.isXDomain() && !b.util.ua.hasCORS) {
                    var h = document.getElementsByTagName("script")[0], i = document.createElement("script");
                    i.src = g + "&jsonp=" + b.j.length, h.parentNode.insertBefore(i, h), b.j.push(function(a) {
                        f(a), i.parentNode.removeChild(i)
                    })
                } else {
                    var j = b.util.request();
                    j.open("GET", g, !0), this.isXDomain() && (j.withCredentials = !0), j.onreadystatechange = function() {
                        j.readyState == 4 && (j.onreadystatechange = e, j.status == 200 ? f(j.responseText) : j.status == 403 ? c.onError(j.responseText) : (c.connecting = !1, !c.reconnecting && c.onError(j.responseText)))
                    }, j.send(null)
                }
            }, d.prototype.getTransport = function(a) {
                var c = a || this.transports, d;
                for (var e = 0, f; f = c[e]; e++)
                    if (b.Transport[f] && b.Transport[f].check(this) && (!this.isXDomain() || b.Transport[f].xdomainCheck(this)))
                        return new b.Transport[f](this, this.sessionid);
                return null
            }, d.prototype.connect = function(a) {
                if (this.connecting)
                    return this;
                var c = this;
                return c.connecting = !0, this.handshake(function(d, e, f, g) {
                    function h(a) {
                        c.transport && c.transport.clearTimeouts(), c.transport = c.getTransport(a);
                        if (!c.transport)
                            return c.publish("connect_failed");
                        c.transport.ready(c, function() {
                            c.connecting = !0, c.publish("connecting", c.transport.name), c.transport.open(), c.options["connect timeout"] && (c.connectTimeoutTimer = setTimeout(function() {
                                if (!c.connected) {
                                    c.connecting = !1;
                                    if (c.options["try multiple transports"]) {
                                        var a = c.transports;
                                        while (a.length > 0 && a.splice(0, 1)[0] != c.transport.name)
                                            ;
                                        a.length ? h(a) : c.publish("connect_failed")
                                    }
                                }
                            }, c.options["connect timeout"]))
                        })
                    }
                    c.sessionid = d, c.closeTimeout = f * 1e3, c.heartbeatTimeout = e * 1e3, c.transports || (c.transports = c.origTransports = g ? b.util.intersect(g.split(","), c.options.transports) : c.options.transports), c.setHeartbeatTimeout(), h(c.transports), c.once("connect", function() {
                        clearTimeout(c.connectTimeoutTimer), a && typeof a == "function" && a()
                    })
                }), this
            }, d.prototype.setHeartbeatTimeout = function() {
                clearTimeout(this.heartbeatTimeoutTimer);
                if (this.transport && !this.transport.heartbeats())
                    return;
                var a = this;
                this.heartbeatTimeoutTimer = setTimeout(function() {
                    a.transport.onClose()
                }, this.heartbeatTimeout)
            }, d.prototype.packet = function(a) {
                return this.connected && !this.doBuffer ? this.transport.packet(a) : this.buffer.push(a), this
            }, d.prototype.setBuffer = function(a) {
                this.doBuffer = a, !a && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer())
            }, d.prototype.flushBuffer = function() {
                this.transport.payload(this.buffer), this.buffer = []
            }, d.prototype.disconnect = function() {
                if (this.connected || this.connecting)
                    this.open && this.of("").packet({type: "disconnect"}), this.onDisconnect("booted");
                return this
            }, d.prototype.disconnectSync = function() {
                var a = b.util.request(), c = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, b.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
                a.open("GET", c, !1), a.send(null), this.onDisconnect("booted")
            }, d.prototype.isXDomain = function() {
                var a = c.location.port || ("https:" == c.location.protocol ? 443 : 80);
                return this.options.host !== c.location.hostname || this.options.port != a
            }, d.prototype.onConnect = function() {
                this.connected || (this.connected = !0, this.connecting = !1, this.doBuffer || this.setBuffer(!1), this.emit("connect"))
            }, d.prototype.onOpen = function() {
                this.open = !0
            }, d.prototype.onClose = function() {
                this.open = !1, clearTimeout(this.heartbeatTimeoutTimer)
            }, d.prototype.onPacket = function(a) {
                this.of(a.endpoint).onPacket(a)
            }, d.prototype.onError = function(a) {
                a && a.advice && a.advice === "reconnect" && (this.connected || this.connecting) && (this.disconnect(), this.options.reconnect && this.reconnect()), this.publish("error", a && a.reason ? a.reason : a)
            }, d.prototype.onDisconnect = function(a) {
                var b = this.connected, c = this.connecting;
                this.connected = !1, this.connecting = !1, this.open = !1;
                if (b || c)
                    this.transport.close(), this.transport.clearTimeouts(), b && (this.publish("disconnect", a), "booted" != a && this.options.reconnect && !this.reconnecting && this.reconnect())
            }, d.prototype.reconnect = function() {
                function e() {
                    if (a.connected) {
                        for (var b in a.namespaces)
                            a.namespaces.hasOwnProperty(b) && "" !== b && a.namespaces[b].packet({type: "connect"});
                        a.publish("reconnect", a.transport.name, a.reconnectionAttempts)
                    }
                    clearTimeout(a.reconnectionTimer), a.removeListener("connect_failed", f), a.removeListener("connect", f), a.reconnecting = !1, delete a.reconnectionAttempts, delete a.reconnectionDelay, delete a.reconnectionTimer, delete a.redoTransports, a.options["try multiple transports"] = c
                }
                function f() {
                    if (!a.reconnecting)
                        return;
                    if (a.connected)
                        return e();
                    if (a.connecting && a.reconnecting)
                        return a.reconnectionTimer = setTimeout(f, 1e3);
                    a.reconnectionAttempts++ >= b ? a.redoTransports ? (a.publish("reconnect_failed"), e()) : (a.on("connect_failed", f), a.options["try multiple transports"] = !0, a.transports = a.origTransports, a.transport = a.getTransport(), a.redoTransports = !0, a.connect()) : (a.reconnectionDelay < d && (a.reconnectionDelay *= 2), a.connect(), a.publish("reconnecting", a.reconnectionDelay, a.reconnectionAttempts), a.reconnectionTimer = setTimeout(f, a.reconnectionDelay))
                }
                this.reconnecting = !0, this.reconnectionAttempts = 0, this.reconnectionDelay = this.options["reconnection delay"];
                var a = this, b = this.options["max reconnection attempts"], c = this.options["try multiple transports"], d = this.options["reconnection limit"];
                this.options["try multiple transports"] = !1, this.reconnectionTimer = setTimeout(f, this.reconnectionDelay), this.on("connect", f)
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function(a, b) {
            function c(a, b) {
                this.socket = a, this.name = b || "", this.flags = {}, this.json = new d(this, "json"), this.ackPackets = 0, this.acks = {}
            }
            function d(a, b) {
                this.namespace = a, this.name = b
            }
            a.SocketNamespace = c, b.util.mixin(c, b.EventEmitter), c.prototype.$emit = b.EventEmitter.prototype.emit, c.prototype.of = function() {
                return this.socket.of.apply(this.socket, arguments)
            }, c.prototype.packet = function(a) {
                return a.endpoint = this.name, this.socket.packet(a), this.flags = {}, this
            }, c.prototype.send = function(a, b) {
                var c = {type: this.flags.json ? "json" : "message",data: a};
                return "function" == typeof b && (c.id = ++this.ackPackets, c.ack = !0, this.acks[c.id] = b), this.packet(c)
            }, c.prototype.emit = function(a) {
                var b = Array.prototype.slice.call(arguments, 1), c = b[b.length - 1], d = {type: "event",name: a};
                return "function" == typeof c && (d.id = ++this.ackPackets, d.ack = "data", this.acks[d.id] = c, b = b.slice(0, b.length - 1)), d.args = b, this.packet(d)
            }, c.prototype.disconnect = function() {
                return this.name === "" ? this.socket.disconnect() : (this.packet({type: "disconnect"}), this.$emit("disconnect")), this
            }, c.prototype.onPacket = function(a) {
                function d() {
                    c.packet({type: "ack",args: b.util.toArray(arguments),ackId: a.id})
                }
                var c = this;
                switch (a.type) {
                    case "connect":
                        this.$emit("connect");
                        break;
                    case "disconnect":
                        this.name === "" ? this.socket.onDisconnect(a.reason || "booted") : this.$emit("disconnect", a.reason);
                        break;
                    case "message":
                    case "json":
                        var e = ["message", a.data];
                        a.ack == "data" ? e.push(d) : a.ack && this.packet({type: "ack",ackId: a.id}), this.$emit.apply(this, e);
                        break;
                    case "event":
                        var e = [a.name].concat(a.args);
                        a.ack == "data" && e.push(d), this.$emit.apply(this, e);
                        break;
                    case "ack":
                        this.acks[a.ackId] && (this.acks[a.ackId].apply(this, a.args), delete this.acks[a.ackId]);
                        break;
                    case "error":
                        a.advice ? this.socket.onError(a) : a.reason == "unauthorized" ? this.$emit("connect_failed", a.reason) : this.$emit("error", a.reason)
                }
            }, d.prototype.send = function() {
                this.namespace.flags[this.name] = !0, this.namespace.send.apply(this.namespace, arguments)
            }, d.prototype.emit = function() {
                this.namespace.flags[this.name] = !0, this.namespace.emit.apply(this.namespace, arguments)
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(a, b, c) {
            function d(a) {
                b.Transport.apply(this, arguments)
            }
            a.websocket = d, b.util.inherit(d, b.Transport), d.prototype.name = "websocket", d.prototype.open = function() {
                var a = b.util.query(this.socket.options.query), d = this, e;
                return e || (e = c.MozWebSocket || c.WebSocket), this.websocket = new e(this.prepareUrl() + a), this.websocket.onopen = function() {
                    d.onOpen(), d.socket.setBuffer(!1)
                }, this.websocket.onmessage = function(a) {
                    d.onData(a.data)
                }, this.websocket.onclose = function() {
                    d.onClose(), d.socket.setBuffer(!0)
                }, this.websocket.onerror = function(a) {
                    d.onError(a)
                }, this
            }, b.util.ua.iDevice ? d.prototype.send = function(a) {
                var b = this;
                return setTimeout(function() {
                    b.websocket.send(a)
                }, 0), this
            } : d.prototype.send = function(a) {
                return this.websocket.send(a), this
            }, d.prototype.payload = function(a) {
                for (var b = 0, c = a.length; b < c; b++)
                    this.packet(a[b]);
                return this
            }, d.prototype.close = function() {
                return this.websocket.close(), this
            }, d.prototype.onError = function(a) {
                this.socket.onError(a)
            }, d.prototype.scheme = function() {
                return this.socket.options.secure ? "wss" : "ws"
            }, d.check = function() {
                return "WebSocket" in c && !("__addTask" in WebSocket) || "MozWebSocket" in c
            }, d.xdomainCheck = function() {
                return !0
            }, b.transports.push("websocket")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function(a, b) {
            function c() {
                b.Transport.websocket.apply(this, arguments)
            }
            a.flashsocket = c, b.util.inherit(c, b.Transport.websocket), c.prototype.name = "flashsocket", c.prototype.open = function() {
                var a = this, c = arguments;
                return WebSocket.__addTask(function() {
                    b.Transport.websocket.prototype.open.apply(a, c)
                }), this
            }, c.prototype.send = function() {
                var a = this, c = arguments;
                return WebSocket.__addTask(function() {
                    b.Transport.websocket.prototype.send.apply(a, c)
                }), this
            }, c.prototype.close = function() {
                return WebSocket.__tasks.length = 0, b.Transport.websocket.prototype.close.call(this), this
            }, c.prototype.ready = function(a, d) {
                function e() {
                    var b = a.options, e = b["flash policy port"], g = ["http" + (b.secure ? "s" : "") + ":/", b.host + ":" + b.port, b.resource, "static/flashsocket", "WebSocketMain" + (a.isXDomain() ? "Insecure" : "") + ".swf"];
                    c.loaded || (typeof WEB_SOCKET_SWF_LOCATION == "undefined" && (WEB_SOCKET_SWF_LOCATION = g.join("/")), e !== 843 && WebSocket.loadFlashPolicyFile("xmlsocket://" + b.host + ":" + e), WebSocket.__initialize(), c.loaded = !0), d.call(f)
                }
                var f = this;
                if (document.body)
                    return e();
                b.util.load(e)
            }, c.check = function() {
                return typeof WebSocket != "undefined" && "__initialize" in WebSocket && !!swfobject ? swfobject.getFlashPlayerVersion().major >= 10 : !1
            }, c.xdomainCheck = function() {
                return !0
            }, typeof window != "undefined" && (WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = !0), b.transports.push("flashsocket")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
        if ("undefined" != typeof window)
            var swfobject = function() {
                function A() {
                    if (t)
                        return;
                    try {
                        var a = i.getElementsByTagName("body")[0].appendChild(Q("span"));
                        a.parentNode.removeChild(a)
                    } catch (b) {
                        return
                    }
                    t = !0;
                    var c = l.length;
                    for (var d = 0; d < c; d++)
                        l[d]()
                }
                function B(a) {
                    t ? a() : l[l.length] = a
                }
                function C(b) {
                    if (typeof h.addEventListener != a)
                        h.addEventListener("load", b, !1);
                    else if (typeof i.addEventListener != a)
                        i.addEventListener("load", b, !1);
                    else if (typeof h.attachEvent != a)
                        R(h, "onload", b);
                    else if (typeof h.onload == "function") {
                        var c = h.onload;
                        h.onload = function() {
                            c(), b()
                        }
                    } else
                        h.onload = b
                }
                function D() {
                    k ? E() : F()
                }
                function E() {
                    var c = i.getElementsByTagName("body")[0], d = Q(b);
                    d.setAttribute("type", e);
                    var f = c.appendChild(d);
                    if (f) {
                        var g = 0;
                        (function() {
                            if (typeof f.GetVariable != a) {
                                var b = f.GetVariable("$version");
                                b && (b = b.split(" ")[1].split(","), y.pv = [parseInt(b[0], 10), parseInt(b[1], 10), parseInt(b[2], 10)])
                            } else if (g < 10) {
                                g++, setTimeout(arguments.callee, 10);
                                return
                            }
                            c.removeChild(d), f = null, F()
                        })()
                    } else
                        F()
                }
                function F() {
                    var b = m.length;
                    if (b > 0)
                        for (var c = 0; c < b; c++) {
                            var d = m[c].id, e = m[c].callbackFn, f = {success: !1,id: d};
                            if (y.pv[0] > 0) {
                                var g = P(d);
                                if (g)
                                    if (S(m[c].swfVersion) && !(y.wk && y.wk < 312))
                                        U(d, !0), e && (f.success = !0, f.ref = G(d), e(f));
                                    else if (m[c].expressInstall && H()) {
                                        var h = {};
                                        h.data = m[c].expressInstall, h.width = g.getAttribute("width") || "0", h.height = g.getAttribute("height") || "0", g.getAttribute("class") && (h.styleclass = g.getAttribute("class")), g.getAttribute("align") && (h.align = g.getAttribute("align"));
                                        var i = {}, j = g.getElementsByTagName("param"), k = j.length;
                                        for (var l = 0; l < k; l++)
                                            j[l].getAttribute("name").toLowerCase() != "movie" && (i[j[l].getAttribute("name")] = j[l].getAttribute("value"));
                                        I(h, i, d, e)
                                    } else
                                        J(g), e && e(f)
                            } else {
                                U(d, !0);
                                if (e) {
                                    var n = G(d);
                                    n && typeof n.SetVariable != a && (f.success = !0, f.ref = n), e(f)
                                }
                            }
                        }
                }
                function G(c) {
                    var d = null, e = P(c);
                    if (e && e.nodeName == "OBJECT")
                        if (typeof e.SetVariable != a)
                            d = e;
                        else {
                            var f = e.getElementsByTagName(b)[0];
                            f && (d = f)
                        }
                    return d
                }
                function H() {
                    return !u && S("6.0.65") && (y.win || y.mac) && !(y.wk && y.wk < 312)
                }
                function I(b, c, d, e) {
                    u = !0, r = e || null, s = {success: !1,id: d};
                    var g = P(d);
                    if (g) {
                        g.nodeName == "OBJECT" ? (p = K(g), q = null) : (p = g, q = d), b.id = f;
                        if (typeof b.width == a || !/%$/.test(b.width) && parseInt(b.width, 10) < 310)
                            b.width = "310";
                        if (typeof b.height == a || !/%$/.test(b.height) && parseInt(b.height, 10) < 137)
                            b.height = "137";
                        i.title = i.title.slice(0, 47) + " - Flash Player Installation";
                        var j = y.ie && y.win ? ["Active"].concat("").join("X") : "PlugIn", k = "MMredirectURL=" + h.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + j + "&MMdoctitle=" + i.title;
                        typeof c.flashvars != a ? c.flashvars += "&" + k : c.flashvars = k;
                        if (y.ie && y.win && g.readyState != 4) {
                            var l = Q("div");
                            d += "SWFObjectNew", l.setAttribute("id", d), g.parentNode.insertBefore(l, g), g.style.display = "none", function() {
                                g.readyState == 4 ? g.parentNode.removeChild(g) : setTimeout(arguments.callee, 10)
                            }()
                        }
                        L(b, c, d)
                    }
                }
                function J(a) {
                    if (y.ie && y.win && a.readyState != 4) {
                        var b = Q("div");
                        a.parentNode.insertBefore(b, a), b.parentNode.replaceChild(K(a), b), a.style.display = "none", function() {
                            a.readyState == 4 ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
                        }()
                    } else
                        a.parentNode.replaceChild(K(a), a)
                }
                function K(a) {
                    var c = Q("div");
                    if (y.win && y.ie)
                        c.innerHTML = a.innerHTML;
                    else {
                        var d = a.getElementsByTagName(b)[0];
                        if (d) {
                            var e = d.childNodes;
                            if (e) {
                                var f = e.length;
                                for (var g = 0; g < f; g++)
                                    (e[g].nodeType != 1 || e[g].nodeName != "PARAM") && e[g].nodeType != 8 && c.appendChild(e[g].cloneNode(!0))
                            }
                        }
                    }
                    return c
                }
                function L(c, d, f) {
                    var g, h = P(f);
                    if (y.wk && y.wk < 312)
                        return g;
                    if (h) {
                        typeof c.id == a && (c.id = f);
                        if (y.ie && y.win) {
                            var i = "";
                            for (var j in c)
                                c[j] != Object.prototype[j] && (j.toLowerCase() == "data" ? d.movie = c[j] : j.toLowerCase() == "styleclass" ? i += ' class="' + c[j] + '"' : j.toLowerCase() != "classid" && (i += " " + j + '="' + c[j] + '"'));
                            var k = "";
                            for (var l in d)
                                d[l] != Object.prototype[l] && (k += '<param name="' + l + '" value="' + d[l] + '" />');
                            h.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + i + ">" + k + "</object>", n[n.length] = c.id, g = P(c.id)
                        } else {
                            var m = Q(b);
                            m.setAttribute("type", e);
                            for (var o in c)
                                c[o] != Object.prototype[o] && (o.toLowerCase() == "styleclass" ? m.setAttribute("class", c[o]) : o.toLowerCase() != "classid" && m.setAttribute(o, c[o]));
                            for (var p in d)
                                d[p] != Object.prototype[p] && p.toLowerCase() != "movie" && M(m, p, d[p]);
                            h.parentNode.replaceChild(m, h), g = m
                        }
                    }
                    return g
                }
                function M(a, b, c) {
                    var d = Q("param");
                    d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d)
                }
                function N(a) {
                    var b = P(a);
                    b && b.nodeName == "OBJECT" && (y.ie && y.win ? (b.style.display = "none", function() {
                        b.readyState == 4 ? O(a) : setTimeout(arguments.callee, 10)
                    }()) : b.parentNode.removeChild(b))
                }
                function O(a) {
                    var b = P(a);
                    if (b) {
                        for (var c in b)
                            typeof b[c] == "function" && (b[c] = null);
                        b.parentNode.removeChild(b)
                    }
                }
                function P(a) {
                    var b = null;
                    try {
                        b = i.getElementById(a)
                    } catch (c) {
                    }
                    return b
                }
                function Q(a) {
                    return i.createElement(a)
                }
                function R(a, b, c) {
                    a.attachEvent(b, c), o[o.length] = [a, b, c]
                }
                function S(a) {
                    var b = y.pv, c = a.split(".");
                    return c[0] = parseInt(c[0], 10), c[1] = parseInt(c[1], 10) || 0, c[2] = parseInt(c[2], 10) || 0, b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] >= c[2] ? !0 : !1
                }
                function T(c, d, e, f) {
                    if (y.ie && y.mac)
                        return;
                    var g = i.getElementsByTagName("head")[0];
                    if (!g)
                        return;
                    var h = e && typeof e == "string" ? e : "screen";
                    f && (v = null, w = null);
                    if (!v || w != h) {
                        var j = Q("style");
                        j.setAttribute("type", "text/css"), j.setAttribute("media", h), v = g.appendChild(j), y.ie && y.win && typeof i.styleSheets != a && i.styleSheets.length > 0 && (v = i.styleSheets[i.styleSheets.length - 1]), w = h
                    }
                    y.ie && y.win ? v && typeof v.addRule == b && v.addRule(c, d) : v && typeof i.createTextNode != a && v.appendChild(i.createTextNode(c + " {" + d + "}"))
                }
                function U(a, b) {
                    if (!x)
                        return;
                    var c = b ? "visible" : "hidden";
                    t && P(a) ? P(a).style.visibility = c : T("#" + a, "visibility:" + c)
                }
                function V(b) {
                    var c = /[\\\"<>\.;]/, d = c.exec(b) != null;
                    return d && typeof encodeURIComponent != a ? encodeURIComponent(b) : b
                }
                var a = "undefined", b = "object", c = "Shockwave Flash", d = "ShockwaveFlash.ShockwaveFlash", e = "application/x-shockwave-flash", f = "SWFObjectExprInst", g = "onreadystatechange", h = window, i = document, j = navigator, k = !1, l = [D], m = [], n = [], o = [], p, q, r, s, t = !1, u = !1, v, w, x = !0, y = function() {
                    var f = typeof i.getElementById != a && typeof i.getElementsByTagName != a && typeof i.createElement != a, g = j.userAgent.toLowerCase(), l = j.platform.toLowerCase(), m = l ? /win/.test(l) : /win/.test(g), n = l ? /mac/.test(l) : /mac/.test(g), o = /webkit/.test(g) ? parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, p = !1, q = [0, 0, 0], r = null;
                    if (typeof j.plugins != a && typeof j.plugins[c] == b)
                        r = j.plugins[c].description, r && (typeof j.mimeTypes == a || !j.mimeTypes[e] || !!j.mimeTypes[e].enabledPlugin) && (k = !0, p = !1, r = r.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), q[0] = parseInt(r.replace(/^(.*)\..*$/, "$1"), 10), q[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, "$1"), 10), q[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                    else if (typeof h[["Active"].concat("Object").join("X")] != a)
                        try {
                            var s = new (window[["Active"].concat("Object").join("X")])(d);
                            s && (r = s.GetVariable("$version"), r && (p = !0, r = r.split(" ")[1].split(","), q = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)]))
                        } catch (t) {
                        }
                    return {w3: f,pv: q,wk: o,ie: p,win: m,mac: n}
                }(), z = function() {
                    if (!y.w3)
                        return;
                    (typeof i.readyState != a && i.readyState == "complete" || typeof i.readyState == a && (i.getElementsByTagName("body")[0] || i.body)) && A(), t || (typeof i.addEventListener != a && i.addEventListener("DOMContentLoaded", A, !1), y.ie && y.win && (i.attachEvent(g, function() {
                        i.readyState == "complete" && (i.detachEvent(g, arguments.callee), A())
                    }), h == top && function() {
                        if (t)
                            return;
                        try {
                            i.documentElement.doScroll("left")
                        } catch (a) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        A()
                    }()), y.wk && function() {
                        if (t)
                            return;
                        if (!/loaded|complete/.test(i.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        A()
                    }(), C(A))
                }(), W = function() {
                    y.ie && y.win && window.attachEvent("onunload", function() {
                        var a = o.length;
                        for (var b = 0; b < a; b++)
                            o[b][0].detachEvent(o[b][1], o[b][2]);
                        var c = n.length;
                        for (var d = 0; d < c; d++)
                            N(n[d]);
                        for (var e in y)
                            y[e] = null;
                        y = null;
                        for (var f in swfobject)
                            swfobject[f] = null;
                        swfobject = null
                    })
                }();
                return {registerObject: function(a, b, c, d) {
                        if (y.w3 && a && b) {
                            var e = {};
                            e.id = a, e.swfVersion = b, e.expressInstall = c, e.callbackFn = d, m[m.length] = e, U(a, !1)
                        } else
                            d && d({success: !1,id: a})
                    },getObjectById: function(a) {
                        if (y.w3)
                            return G(a)
                    },embedSWF: function(c, d, e, f, g, h, i, j, k, l) {
                        var m = {success: !1,id: d};
                        y.w3 && !(y.wk && y.wk < 312) && c && d && e && f && g ? (U(d, !1), B(function() {
                            e += "", f += "";
                            var n = {};
                            if (k && typeof k === b)
                                for (var o in k)
                                    n[o] = k[o];
                            n.data = c, n.width = e, n.height = f;
                            var p = {};
                            if (j && typeof j === b)
                                for (var q in j)
                                    p[q] = j[q];
                            if (i && typeof i === b)
                                for (var r in i)
                                    typeof p.flashvars != a ? p.flashvars += "&" + r + "=" + i[r] : p.flashvars = r + "=" + i[r];
                            if (S(g)) {
                                var s = L(n, p, d);
                                n.id == d && U(d, !0), m.success = !0, m.ref = s
                            } else {
                                if (h && H()) {
                                    n.data = h, I(n, p, d, l);
                                    return
                                }
                                U(d, !0)
                            }
                            l && l(m)
                        })) : l && l(m)
                    },switchOffAutoHideShow: function() {
                        x = !1
                    },ua: y,getFlashPlayerVersion: function() {
                        return {major: y.pv[0],minor: y.pv[1],release: y.pv[2]}
                    },hasFlashPlayerVersion: S,createSWF: function(a, b, c) {
                        return y.w3 ? L(a, b, c) : undefined
                    },showExpressInstall: function(a, b, c, d) {
                        y.w3 && H() && I(a, b, c, d)
                    },removeSWF: function(a) {
                        y.w3 && N(a)
                    },createCSS: function(a, b, c, d) {
                        y.w3 && T(a, b, c, d)
                    },addDomLoadEvent: B,addLoadEvent: C,getQueryParamValue: function(a) {
                        var b = i.location.search || i.location.hash;
                        if (b) {
                            /\?/.test(b) && (b = b.split("?")[1]);
                            if (a == null)
                                return V(b);
                            var c = b.split("&");
                            for (var d = 0; d < c.length; d++)
                                if (c[d].substring(0, c[d].indexOf("=")) == a)
                                    return V(c[d].substring(c[d].indexOf("=") + 1))
                        }
                        return ""
                    },expressInstallCallback: function() {
                        if (u) {
                            var a = P(f);
                            a && p && (a.parentNode.replaceChild(p, a), q && (U(q, !0), y.ie && y.win && (p.style.display = "block")), r && r(s)), u = !1
                        }
                    }}
            }();
        (function() {
            if ("undefined" == typeof window || window.WebSocket)
                return;
            var a = window.console;
            if (!a || !a.log || !a.error)
                a = {log: function() {
                    },error: function() {
                    }};
            if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
                a.error("Flash Player >= 10.0.0 is required.");
                return
            }
            location.protocol == "file:" && a.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."), WebSocket = function(a, b, c, d, e) {
                var f = this;
                f.__id = WebSocket.__nextId++, WebSocket.__instances[f.__id] = f, f.readyState = WebSocket.CONNECTING, f.bufferedAmount = 0, f.__events = {}, b ? typeof b == "string" && (b = [b]) : b = [], setTimeout(function() {
                    WebSocket.__addTask(function() {
                        WebSocket.__flash.create(f.__id, a, b, c || null, d || 0, e || null)
                    })
                }, 0)
            }, WebSocket.prototype.send = function(a) {
                if (this.readyState == WebSocket.CONNECTING)
                    throw "INVALID_STATE_ERR: Web Socket connection has not been established";
                var b = WebSocket.__flash.send(this.__id, encodeURIComponent(a));
                return b < 0 ? !0 : (this.bufferedAmount += b, !1)
            }, WebSocket.prototype.close = function() {
                if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING)
                    return;
                this.readyState = WebSocket.CLOSING, WebSocket.__flash.close(this.__id)
            }, WebSocket.prototype.addEventListener = function(a, b, c) {
                a in this.__events || (this.__events[a] = []), this.__events[a].push(b)
            }, WebSocket.prototype.removeEventListener = function(a, b, c) {
                if (!(a in this.__events))
                    return;
                var d = this.__events[a];
                for (var e = d.length - 1; e >= 0; --e)
                    if (d[e] === b) {
                        d.splice(e, 1);
                        break
                    }
            }, WebSocket.prototype.dispatchEvent = function(a) {
                var b = this.__events[a.type] || [];
                for (var c = 0; c < b.length; ++c)
                    b[c](a);
                var d = this["on" + a.type];
                d && d(a)
            }, WebSocket.prototype.__handleEvent = function(a) {
                "readyState" in a && (this.readyState = a.readyState), "protocol" in a && (this.protocol = a.protocol);
                var b;
                if (a.type == "open" || a.type == "error")
                    b = this.__createSimpleEvent(a.type);
                else if (a.type == "close")
                    b = this.__createSimpleEvent("close");
                else {
                    if (a.type != "message")
                        throw "unknown event type: " + a.type;
                    var c = decodeURIComponent(a.message);
                    b = this.__createMessageEvent("message", c)
                }
                this.dispatchEvent(b)
            }, WebSocket.prototype.__createSimpleEvent = function(a) {
                if (document.createEvent && window.Event) {
                    var b = document.createEvent("Event");
                    return b.initEvent(a, !1, !1), b
                }
                return {type: a,bubbles: !1,cancelable: !1}
            }, WebSocket.prototype.__createMessageEvent = function(a, b) {
                if (document.createEvent && window.MessageEvent && !window.opera) {
                    var c = document.createEvent("MessageEvent");
                    return c.initMessageEvent("message", !1, !1, b, null, null, window, null), c
                }
                return {type: a,data: b,bubbles: !1,cancelable: !1}
            }, WebSocket.CONNECTING = 0, WebSocket.OPEN = 1, WebSocket.CLOSING = 2, WebSocket.CLOSED = 3, WebSocket.__flash = null, WebSocket.__instances = {}, WebSocket.__tasks = [], WebSocket.__nextId = 0, WebSocket.loadFlashPolicyFile = function(a) {
                WebSocket.__addTask(function() {
                    WebSocket.__flash.loadManualPolicyFile(a)
                })
            }, WebSocket.__initialize = function() {
                if (WebSocket.__flash)
                    return;
                WebSocket.__swfLocation && (window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation);
                if (!window.WEB_SOCKET_SWF_LOCATION) {
                    a.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                    return
                }
                var b = document.createElement("div");
                b.id = "webSocketContainer", b.style.position = "absolute", WebSocket.__isFlashLite() ? (b.style.left = "0px", b.style.top = "0px") : (b.style.left = "-100px", b.style.top = "-100px");
                var c = document.createElement("div");
                c.id = "webSocketFlash", b.appendChild(c), document.body.appendChild(b), swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {hasPriority: !0,swliveconnect: !0,allowScriptAccess: "always"}, null, function(b) {
                    b.success || a.error("[WebSocket] swfobject.embedSWF failed")
                })
            }, WebSocket.__onFlashInitialized = function() {
                setTimeout(function() {
                    WebSocket.__flash = document.getElementById("webSocketFlash"), WebSocket.__flash.setCallerUrl(location.href), WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
                    for (var a = 0; a < WebSocket.__tasks.length; ++a)
                        WebSocket.__tasks[a]();
                    WebSocket.__tasks = []
                }, 0)
            }, WebSocket.__onFlashEvent = function() {
                return setTimeout(function() {
                    try {
                        var b = WebSocket.__flash.receiveEvents();
                        for (var c = 0; c < b.length; ++c)
                            WebSocket.__instances[b[c].webSocketId].__handleEvent(b[c])
                    } catch (d) {
                        a.error(d)
                    }
                }, 0), !0
            }, WebSocket.__log = function(b) {
                a.log(decodeURIComponent(b))
            }, WebSocket.__error = function(b) {
                a.error(decodeURIComponent(b))
            }, WebSocket.__addTask = function(a) {
                WebSocket.__flash ? a() : WebSocket.__tasks.push(a)
            }, WebSocket.__isFlashLite = function() {
                if (!window.navigator || !window.navigator.mimeTypes)
                    return !1;
                var a = window.navigator.mimeTypes["application/x-shockwave-flash"];
                return !a || !a.enabledPlugin || !a.enabledPlugin.filename ? !1 : a.enabledPlugin.filename.match(/flashlite/i) ? !0 : !1
            }, window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION || (window.addEventListener ? window.addEventListener("load", function() {
                WebSocket.__initialize()
            }, !1) : window.attachEvent("onload", function() {
                WebSocket.__initialize()
            }))
        })(), function(a, b, c) {
            function d(a) {
                if (!a)
                    return;
                b.Transport.apply(this, arguments), this.sendBuffer = []
            }
            function e() {
            }
            a.XHR = d, b.util.inherit(d, b.Transport), d.prototype.open = function() {
                return this.socket.setBuffer(!1), this.onOpen(), this.get(), this.setCloseTimeout(), this
            }, d.prototype.payload = function(a) {
                var c = [];
                for (var d = 0, e = a.length; d < e; d++)
                    c.push(b.parser.encodePacket(a[d]));
                this.send(b.parser.encodePayload(c))
            }, d.prototype.send = function(a) {
                return this.post(a), this
            }, d.prototype.post = function(a) {
                function d() {
                    this.readyState == 4 && (this.onreadystatechange = e, b.posting = !1, this.status == 200 ? b.socket.setBuffer(!1) : b.onClose())
                }
                function f() {
                    this.onload = e, b.socket.setBuffer(!1)
                }
                var b = this;
                this.socket.setBuffer(!0), this.sendXHR = this.request("POST"), c.XDomainRequest && this.sendXHR instanceof XDomainRequest ? this.sendXHR.onload = this.sendXHR.onerror = f : this.sendXHR.onreadystatechange = d, this.sendXHR.send(a)
            }, d.prototype.close = function() {
                return this.onClose(), this
            }, d.prototype.request = function(a) {
                var c = b.util.request(this.socket.isXDomain()), d = b.util.query(this.socket.options.query, "t=" + +(new Date));
                c.open(a || "GET", this.prepareUrl() + d, !0);
                if (a == "POST")
                    try {
                        c.setRequestHeader ? c.setRequestHeader("Content-type", "text/plain;charset=UTF-8") : c.contentType = "text/plain"
                    } catch (e) {
                    }
                return c
            }, d.prototype.scheme = function() {
                return this.socket.options.secure ? "https" : "http"
            }, d.check = function(a, d) {
                try {
                    var e = b.util.request(d), f = c.XDomainRequest && e instanceof XDomainRequest, g = a && a.options && a.options.secure ? "https:" : "http:", h = c.location && g != c.location.protocol;
                    if (e && (!f || !h))
                        return !0
                } catch (i) {
                }
                return !1
            }, d.xdomainCheck = function(a) {
                return d.check(a, !0)
            }
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function(a, b) {
            function c(a) {
                b.Transport.XHR.apply(this, arguments)
            }
            a.htmlfile = c, b.util.inherit(c, b.Transport.XHR), c.prototype.name = "htmlfile", c.prototype.get = function() {
                this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile"), this.doc.open(), this.doc.write("<html></html>"), this.doc.close(), this.doc.parentWindow.s = this;
                var a = this.doc.createElement("div");
                a.className = "socketio", this.doc.body.appendChild(a), this.iframe = this.doc.createElement("iframe"), a.appendChild(this.iframe);
                var c = this, d = b.util.query(this.socket.options.query, "t=" + +(new Date));
                this.iframe.src = this.prepareUrl() + d, b.util.on(window, "unload", function() {
                    c.destroy()
                })
            }, c.prototype._ = function(a, b) {
                this.onData(a);
                try {
                    var c = b.getElementsByTagName("script")[0];
                    c.parentNode.removeChild(c)
                } catch (d) {
                }
            }, c.prototype.destroy = function() {
                if (this.iframe) {
                    try {
                        this.iframe.src = "about:blank"
                    } catch (a) {
                    }
                    this.doc = null, this.iframe.parentNode.removeChild(this.iframe), this.iframe = null, CollectGarbage()
                }
            }, c.prototype.close = function() {
                return this.destroy(), b.Transport.XHR.prototype.close.call(this)
            }, c.check = function(a) {
                if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window)
                    try {
                        var c = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                        return c && b.Transport.XHR.check(a)
                    } catch (d) {
                    }
                return !1
            }, c.xdomainCheck = function() {
                return !1
            }, b.transports.push("htmlfile")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(a, b, c) {
            function d() {
                b.Transport.XHR.apply(this, arguments)
            }
            function e() {
            }
            a["xhr-polling"] = d, b.util.inherit(d, b.Transport.XHR), b.util.merge(d, b.Transport.XHR), d.prototype.name = "xhr-polling", d.prototype.heartbeats = function() {
                return !1
            }, d.prototype.open = function() {
                var a = this;
                return b.Transport.XHR.prototype.open.call(a), !1
            }, d.prototype.get = function() {
                function b() {
                    this.readyState == 4 && (this.onreadystatechange = e, this.status == 200 ? (a.onData(this.responseText), a.get()) : a.onClose())
                }
                function d() {
                    this.onload = e, this.onerror = e, a.retryCounter = 1, a.onData(this.responseText), a.get()
                }
                function f() {
                    a.retryCounter++, !a.retryCounter || a.retryCounter > 3 ? a.onClose() : a.get()
                }
                if (!this.isOpen)
                    return;
                var a = this;
                this.xhr = this.request(), c.XDomainRequest && this.xhr instanceof XDomainRequest ? (this.xhr.onload = d, this.xhr.onerror = f) : this.xhr.onreadystatechange = b, this.xhr.send(null)
            }, d.prototype.onClose = function() {
                b.Transport.XHR.prototype.onClose.call(this);
                if (this.xhr) {
                    this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = e;
                    try {
                        this.xhr.abort()
                    } catch (a) {
                    }
                    this.xhr = null
                }
            }, d.prototype.ready = function(a, c) {
                var d = this;
                b.util.defer(function() {
                    c.call(d)
                })
            }, b.transports.push("xhr-polling")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function(a, b, c) {
            function e(a) {
                b.Transport["xhr-polling"].apply(this, arguments), this.index = b.j.length;
                var c = this;
                b.j.push(function(a) {
                    c._(a)
                })
            }
            var d = c.document && "MozAppearance" in c.document.documentElement.style;
            a["jsonp-polling"] = e, b.util.inherit(e, b.Transport["xhr-polling"]), e.prototype.name = "jsonp-polling", e.prototype.post = function(a) {
                function i() {
                    j(), c.socket.setBuffer(!1)
                }
                function j() {
                    c.iframe && c.form.removeChild(c.iframe);
                    try {
                        h = document.createElement('<iframe name="' + c.iframeId + '">')
                    } catch (a) {
                        h = document.createElement("iframe"), h.name = c.iframeId
                    }
                    h.id = c.iframeId, c.form.appendChild(h), c.iframe = h
                }
                var c = this, d = b.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
                if (!this.form) {
                    var e = document.createElement("form"), f = document.createElement("textarea"), g = this.iframeId = "socketio_iframe_" + this.index, h;
                    e.className = "socketio", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.display = "none", e.target = g, e.method = "POST", e.setAttribute("accept-charset", "utf-8"), f.name = "d", e.appendChild(f), document.body.appendChild(e), this.form = e, this.area = f
                }
                this.form.action = this.prepareUrl() + d, j(), this.area.value = b.JSON.stringify(a);
                try {
                    this.form.submit()
                } catch (k) {
                }
                this.iframe.attachEvent ? h.onreadystatechange = function() {
                    c.iframe.readyState == "complete" && i()
                } : this.iframe.onload = i, this.socket.setBuffer(!0)
            }, e.prototype.get = function() {
                var a = this, c = document.createElement("script"), e = b.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), c.async = !0, c.src = this.prepareUrl() + e, c.onerror = function() {
                    a.onClose()
                };
                var f = document.getElementsByTagName("script")[0];
                f.parentNode.insertBefore(c, f), this.script = c, d && setTimeout(function() {
                    var a = document.createElement("iframe");
                    document.body.appendChild(a), document.body.removeChild(a)
                }, 100)
            }, e.prototype._ = function(a) {
                return this.onData(a), this.isOpen && this.get(), this
            }, e.prototype.ready = function(a, c) {
                var e = this;
                if (!d)
                    return c.call(this);
                b.util.load(function() {
                    c.call(e)
                })
            }, e.check = function() {
                return "document" in c
            }, e.xdomainCheck = function() {
                return !0
            }, b.transports.push("jsonp-polling")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), typeof define == "function" && define.amd && define([], function() {
            return io
        })
    })()
});
;

define("backbone/backbone-all", [], function(require, exports) {
    window.Backbone = require("backbone/1.0.0/backbone");
    Backbone.View.prototype.isShow = function() {
        return this.$el.is(":visible");
    };
    Backbone.View.prototype.isHide = function() {
        return this.$el.is(":hidden");
    };
    
    require('backbone-validation');
    Backbone.DeepModel = require('backbone-deepmodel');
    Backbone.ModelBinder = require('backbone-modelbinder');
    require('backbone-collectionbinder');
    require('backbone-routefilter');
    require('backbone-paginator');
    require('backbone-localStorage');
});
define("backbone/1.0.0/backbone", ["underscore"], function(a, b) {
    var c = this._, d = this.jQuery;
    this._ = a("underscore"), this.jQuery = a("$"), function() {
        var i, c = this, d = c.Backbone, e = [], f = e.push, g = e.slice, h = e.splice;
        i = "undefined" != typeof b ? b : c.Backbone = {}, i.VERSION = "1.0.0";
        var j = c._;
        j || "undefined" == typeof a || (j = a("underscore")), i.$ = c.jQuery || c.Zepto || c.ender || c.$, i.noConflict = function() {
            return c.Backbone = d, this
        }, i.emulateHTTP = !1, i.emulateJSON = !1;
        var k = i.Events = {on: function(a, b, c) {
                if (!m(this, "on", a, [b, c]) || !b)
                    return this;
                this._events || (this._events = {});
                var d = this._events[a] || (this._events[a] = []);
                return d.push({callback: b,context: c,ctx: c || this}), this
            },once: function(a, b, c) {
                if (!m(this, "once", a, [b, c]) || !b)
                    return this;
                var d = this, e = j.once(function() {
                    d.off(a, e), b.apply(this, arguments)
                });
                return e._callback = b, this.on(a, e, c)
            },off: function(a, b, c) {
                var d, e, f, g, h, i, k, l;
                if (!this._events || !m(this, "off", a, [b, c]))
                    return this;
                if (!a && !b && !c)
                    return this._events = {}, this;
                for (g = a ? [a] : j.keys(this._events), h = 0, i = g.length; i > h; h++)
                    if (a = g[h], f = this._events[a]) {
                        if (this._events[a] = d = [], b || c)
                            for (k = 0, l = f.length; l > k; k++)
                                e = f[k], (b && b !== e.callback && b !== e.callback._callback || c && c !== e.context) && d.push(e);
                        d.length || delete this._events[a]
                    }
                return this
            },trigger: function(a) {
                if (!this._events)
                    return this;
                var b = g.call(arguments, 1);
                if (!m(this, "trigger", a, b))
                    return this;
                var c = this._events[a], d = this._events.all;
                return c && n(c, b), d && n(d, arguments), this
            },stopListening: function(a, b, c) {
                var d = this._listeners;
                if (!d)
                    return this;
                var e = !b && !c;
                "object" == typeof b && (c = this), a && ((d = {})[a._listenerId] = a);
                for (var f in d)
                    d[f].off(b, c, this), e && delete this._listeners[f];
                return this
            }}, l = /\s+/, m = function(a, b, c, d) {
            if (!c)
                return !0;
            if ("object" == typeof c) {
                for (var e in c)
                    a[b].apply(a, [e, c[e]].concat(d));
                return !1
            }
            if (l.test(c)) {
                for (var f = c.split(l), g = 0, h = f.length; h > g; g++)
                    a[b].apply(a, [f[g]].concat(d));
                return !1
            }
            return !0
        }, n = function(a, b) {
            var c, d = -1, e = a.length, f = b[0], g = b[1], h = b[2];
            switch (b.length) {
                case 0:
                    for (; ++d < e; )
                        (c = a[d]).callback.call(c.ctx);
                    return;
                case 1:
                    for (; ++d < e; )
                        (c = a[d]).callback.call(c.ctx, f);
                    return;
                case 2:
                    for (; ++d < e; )
                        (c = a[d]).callback.call(c.ctx, f, g);
                    return;
                case 3:
                    for (; ++d < e; )
                        (c = a[d]).callback.call(c.ctx, f, g, h);
                    return;
                default:
                    for (; ++d < e; )
                        (c = a[d]).callback.apply(c.ctx, b)
            }
        }, o = {listenTo: "on",listenToOnce: "once"};
        j.each(o, function(a, b) {
            k[b] = function(b, c, d) {
                var e = this._listeners || (this._listeners = {}), f = b._listenerId || (b._listenerId = j.uniqueId("l"));
                return e[f] = b, "object" == typeof c && (d = this), b[a](c, d, this), this
            }
        }), k.bind = k.on, k.unbind = k.off, j.extend(i, k);
        var p = i.Model = function(a, b) {
            var c, d = a || {};
            b || (b = {}), this.cid = j.uniqueId("c"), this.attributes = {}, j.extend(this, j.pick(b, q)), b.parse && (d = this.parse(d, b) || {}), (c = j.result(this, "defaults")) && (d = j.defaults({}, d, c)), this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments)
        }, q = ["url", "urlRoot", "collection"];
        j.extend(p.prototype, k, {changed: null,validationError: null,idAttribute: "id",initialize: function() {
            },toJSON: function() {
                return j.clone(this.attributes)
            },sync: function() {
                return i.sync.apply(this, arguments)
            },get: function(a) {
                return this.attributes[a]
            },escape: function(a) {
                return j.escape(this.get(a))
            },has: function(a) {
                return null != this.get(a)
            },set: function(a, b, c) {
                var d, e, f, g, h, i, k, l;
                if (null == a)
                    return this;
                if ("object" == typeof a ? (e = a, c = b) : (e = {})[a] = b, c || (c = {}), !this._validate(e, c))
                    return !1;
                f = c.unset, h = c.silent, g = [], i = this._changing, this._changing = !0, i || (this._previousAttributes = j.clone(this.attributes), this.changed = {}), l = this.attributes, k = this._previousAttributes, this.idAttribute in e && (this.id = e[this.idAttribute]);
                for (d in e)
                    b = e[d], j.isEqual(l[d], b) || g.push(d), j.isEqual(k[d], b) ? delete this.changed[d] : this.changed[d] = b, f ? delete l[d] : l[d] = b;
                if (!h) {
                    g.length && (this._pending = !0);
                    for (var m = 0, n = g.length; n > m; m++)
                        this.trigger("change:" + g[m], this, l[g[m]], c)
                }
                if (i)
                    return this;
                if (!h)
                    for (; this._pending; )
                        this._pending = !1, this.trigger("change", this, c);
                return this._pending = !1, this._changing = !1, this
            },unset: function(a, b) {
                return this.set(a, void 0, j.extend({}, b, {unset: !0}))
            },clear: function(a) {
                var b = {};
                for (var c in this.attributes)
                    b[c] = void 0;
                return this.set(b, j.extend({}, a, {unset: !0}))
            },hasChanged: function(a) {
                return null == a ? !j.isEmpty(this.changed) : j.has(this.changed, a)
            },changedAttributes: function(a) {
                if (!a)
                    return this.hasChanged() ? j.clone(this.changed) : !1;
                var b, c = !1, d = this._changing ? this._previousAttributes : this.attributes;
                for (var e in a)
                    j.isEqual(d[e], b = a[e]) || ((c || (c = {}))[e] = b);
                return c
            },previous: function(a) {
                return null != a && this._previousAttributes ? this._previousAttributes[a] : null
            },previousAttributes: function() {
                return j.clone(this._previousAttributes)
            },fetch: function(a) {
                a = a ? j.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
                var b = this, c = a.success;
                return a.success = function(d) {
                    return b.set(b.parse(d, a), a) ? (c && c(b, d, a), b.trigger("sync", b, d, a), void 0) : !1
                }, N(this, a), this.sync("read", this, a)
            },save: function(a, b, c) {
                var d, e, f, g = this.attributes;
                if (null == a || "object" == typeof a ? (d = a, c = b) : (d = {})[a] = b, !(!d || c && c.wait || this.set(d, c)))
                    return !1;
                if (c = j.extend({validate: !0}, c), !this._validate(d, c))
                    return !1;
                d && c.wait && (this.attributes = j.extend({}, g, d)), void 0 === c.parse && (c.parse = !0);
                var h = this, i = c.success;
                return c.success = function(a) {
                    h.attributes = g;
                    var b = h.parse(a, c);
                    return c.wait && (b = j.extend(d || {}, b)), j.isObject(b) && !h.set(b, c) ? !1 : (i && i(h, a, c), h.trigger("sync", h, a, c), void 0)
                }, N(this, c), e = this.isNew() ? "create" : c.patch ? "patch" : "update", "patch" === e && (c.attrs = d), f = this.sync(e, this, c), d && c.wait && (this.attributes = g), f
            },destroy: function(a) {
                a = a ? j.clone(a) : {};
                var b = this, c = a.success, d = function() {
                    b.trigger("destroy", b, b.collection, a)
                };
                if (a.success = function(e) {
                    (a.wait || b.isNew()) && d(), c && c(b, e, a), b.isNew() || b.trigger("sync", b, e, a)
                }, this.isNew())
                    return a.success(), !1;
                N(this, a);
                var e = this.sync("delete", this, a);
                return a.wait || d(), e
            },url: function() {
                var a = j.result(this, "urlRoot") || j.result(this.collection, "url") || M();
                return this.isNew() ? a : a + ("/" === a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id)
            },parse: function(a) {
                return a
            },clone: function() {
                return new this.constructor(this.attributes)
            },isNew: function() {
                return null == this.id
            },isValid: function(a) {
                return this._validate({}, j.extend(a || {}, {validate: !0}))
            },_validate: function(a, b) {
                if (!b.validate || !this.validate)
                    return !0;
                a = j.extend({}, this.attributes, a);
                var c = this.validationError = this.validate(a, b) || null;
                return c ? (this.trigger("invalid", this, c, j.extend(b || {}, {validationError: c})), !1) : !0
            }});
        var r = ["keys", "values", "pairs", "invert", "pick", "omit"];
        j.each(r, function(a) {
            p.prototype[a] = function() {
                var b = g.call(arguments);
                return b.unshift(this.attributes), j[a].apply(j, b)
            }
        });
        var s = i.Collection = function(a, b) {
            b || (b = {}), b.url && (this.url = b.url), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, j.extend({silent: !0}, b))
        }, t = {add: !0,remove: !0,merge: !0}, u = {add: !0,merge: !1,remove: !1};
        j.extend(s.prototype, k, {model: p,initialize: function() {
            },toJSON: function(a) {
                return this.map(function(b) {
                    return b.toJSON(a)
                })
            },sync: function() {
                return i.sync.apply(this, arguments)
            },add: function(a, b) {
                return this.set(a, j.defaults(b || {}, u))
            },remove: function(a, b) {
                a = j.isArray(a) ? a.slice() : [a], b || (b = {});
                var c, d, e, f;
                for (c = 0, d = a.length; d > c; c++)
                    f = this.get(a[c]), f && (delete this._byId[f.id], delete this._byId[f.cid], e = this.indexOf(f), this.models.splice(e, 1), this.length--, b.silent || (b.index = e, f.trigger("remove", f, this, b)), this._removeReference(f));
                return this
            },set: function(a, b) {
                b = j.defaults(b || {}, t), b.parse && (a = this.parse(a, b)), j.isArray(a) || (a = a ? [a] : []);
                var c, d, e, i, k, l = b.at, m = this.comparator && null == l && b.sort !== !1, n = j.isString(this.comparator) ? this.comparator : null, o = [], p = [], q = {};
                for (c = 0, d = a.length; d > c; c++)
                    (e = this._prepareModel(a[c], b)) && ((i = this.get(e)) ? (b.remove && (q[i.cid] = !0), b.merge && (i.set(e.attributes, b), m && !k && i.hasChanged(n) && (k = !0))) : b.add && (o.push(e), e.on("all", this._onModelEvent, this), this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e)));
                if (b.remove) {
                    for (c = 0, d = this.length; d > c; ++c)
                        q[(e = this.models[c]).cid] || p.push(e);
                    p.length && this.remove(p, b)
                }
                if (o.length && (m && (k = !0), this.length += o.length, null != l ? h.apply(this.models, [l, 0].concat(o)) : f.apply(this.models, o)), k && this.sort({silent: !0}), b.silent)
                    return this;
                for (c = 0, d = o.length; d > c; c++)
                    (e = o[c]).trigger("add", e, this, b);
                return k && this.trigger("sort", this, b), this
            },reset: function(a, b) {
                b || (b = {});
                for (var c = 0, d = this.models.length; d > c; c++)
                    this._removeReference(this.models[c]);
                return b.previousModels = this.models, this._reset(), this.add(a, j.extend({silent: !0}, b)), b.silent || this.trigger("reset", this, b), this
            },push: function(a, b) {
                return a = this._prepareModel(a, b), this.add(a, j.extend({at: this.length}, b)), a
            },pop: function(a) {
                var b = this.at(this.length - 1);
                return this.remove(b, a), b
            },unshift: function(a, b) {
                return a = this._prepareModel(a, b), this.add(a, j.extend({at: 0}, b)), a
            },shift: function(a) {
                var b = this.at(0);
                return this.remove(b, a), b
            },slice: function(a, b) {
                return this.models.slice(a, b)
            },get: function(a) {
                return null == a ? void 0 : this._byId[null != a.id ? a.id : a.cid || a]
            },at: function(a) {
                return this.models[a]
            },where: function(a, b) {
                return j.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
                    for (var c in a)
                        if (a[c] !== b.get(c))
                            return !1;
                    return !0
                })
            },findWhere: function(a) {
                return this.where(a, !0)
            },sort: function(a) {
                if (!this.comparator)
                    throw new Error("Cannot sort a set without a comparator");
                return a || (a = {}), j.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(j.bind(this.comparator, this)), a.silent || this.trigger("sort", this, a), this
            },sortedIndex: function(a, b, c) {
                b || (b = this.comparator);
                var d = j.isFunction(b) ? b : function(a) {
                    return a.get(b)
                };
                return j.sortedIndex(this.models, a, d, c)
            },pluck: function(a) {
                return j.invoke(this.models, "get", a)
            },fetch: function(a) {
                a = a ? j.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
                var b = a.success, c = this;
                return a.success = function(d) {
                    var e = a.reset ? "reset" : "set";
                    c[e](d, a), b && b(c, d, a), c.trigger("sync", c, d, a)
                }, N(this, a), this.sync("read", this, a)
            },create: function(a, b) {
                if (b = b ? j.clone(b) : {}, !(a = this._prepareModel(a, b)))
                    return !1;
                b.wait || this.add(a, b);
                var c = this, d = b.success;
                return b.success = function(e) {
                    b.wait && c.add(a, b), d && d(a, e, b)
                }, a.save(null, b), a
            },parse: function(a) {
                return a
            },clone: function() {
                return new this.constructor(this.models)
            },_reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },_prepareModel: function(a, b) {
                if (a instanceof p)
                    return a.collection || (a.collection = this), a;
                b || (b = {}), b.collection = this;
                var c = new this.model(a, b);
                return c._validate(a, b) ? c : (this.trigger("invalid", this, a, b), !1)
            },_removeReference: function(a) {
                this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this)
            },_onModelEvent: function(a, b, c, d) {
                ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments))
            }});
        var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
        j.each(v, function(a) {
            s.prototype[a] = function() {
                var b = g.call(arguments);
                return b.unshift(this.models), j[a].apply(j, b)
            }
        });
        var w = ["groupBy", "countBy", "sortBy"];
        j.each(w, function(a) {
            s.prototype[a] = function(b, c) {
                var d = j.isFunction(b) ? b : function(a) {
                    return a.get(b)
                };
                return j[a](this.models, d, c)
            }
        });
        var x = i.View = function(a) {
            this.cid = j.uniqueId("view"), this._configure(a || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
        }, y = /^(\S+)\s*(.*)$/, z = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        j.extend(x.prototype, k, {tagName: "div",$: function(a) {
                return this.$el.find(a)
            },initialize: function() {
            },render: function() {
                return this
            },remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },setElement: function(a, b) {
                return this.$el && this.undelegateEvents(), this.$el = a instanceof i.$ ? a : i.$(a), this.el = this.$el[0], b !== !1 && this.delegateEvents(), this
            },delegateEvents: function(a) {
                if (!a && !(a = j.result(this, "events")))
                    return this;
                this.undelegateEvents();
                for (var b in a) {
                    var c = a[b];
                    if (j.isFunction(c) || (c = this[a[b]]), c) {
                        var d = b.match(y), e = d[1], f = d[2];
                        c = j.bind(c, this), e += ".delegateEvents" + this.cid, "" === f ? this.$el.on(e, c) : this.$el.on(e, f, c)
                    }
                }
                return this
            },undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },_configure: function(a) {
                this.options && (a = j.extend({}, j.result(this, "options"), a)), j.extend(this, j.pick(a, z)), this.options = a
            },_ensureElement: function() {
                if (this.el)
                    this.setElement(j.result(this, "el"), !1);
                else {
                    var a = j.extend({}, j.result(this, "attributes"));
                    this.id && (a.id = j.result(this, "id")), this.className && (a["class"] = j.result(this, "className"));
                    var b = i.$("<" + j.result(this, "tagName") + ">").attr(a);
                    this.setElement(b, !1)
                }
            }}), i.sync = function(a, b, c) {
            var d = A[a];
            j.defaults(c || (c = {}), {emulateHTTP: i.emulateHTTP,emulateJSON: i.emulateJSON});
            var e = {type: d,dataType: "json"};
            if (c.url || (e.url = j.result(b, "url") || M()), null != c.data || !b || "create" !== a && "update" !== a && "patch" !== a || (e.contentType = "application/json", e.data = JSON.stringify(c.attrs || b.toJSON(c))), c.emulateJSON && (e.contentType = "application/x-www-form-urlencoded", e.data = e.data ? {model: e.data} : {}), c.emulateHTTP && ("PUT" === d || "DELETE" === d || "PATCH" === d)) {
                e.type = "POST", c.emulateJSON && (e.data._method = d);
                var f = c.beforeSend;
                c.beforeSend = function(a) {
                    return a.setRequestHeader("X-HTTP-Method-Override", d), f ? f.apply(this, arguments) : void 0
                }
            }
            "GET" === e.type || c.emulateJSON || (e.processData = !1), "PATCH" !== e.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (e.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var g = c.xhr = i.ajax(j.extend(e, c));
            return b.trigger("request", b, g, c), g
        };
        var A = {create: "POST",update: "PUT",patch: "PATCH","delete": "DELETE",read: "GET"};
        i.ajax = function() {
            return i.$.ajax.apply(i.$, arguments)
        };
        var B = i.Router = function(a) {
            a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
        }, C = /\((.*?)\)/g, D = /(\(\?)?:\w+/g, E = /\*\w+/g, F = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        j.extend(B.prototype, k, {initialize: function() {
            },route: function(a, b, c) {
                j.isRegExp(a) || (a = this._routeToRegExp(a)), j.isFunction(b) && (c = b, b = ""), c || (c = this[b]);
                var d = this;
                return i.history.route(a, function(e) {
                    var f = d._extractParameters(a, e);
                    c && c.apply(d, f), d.trigger.apply(d, ["route:" + b].concat(f)), d.trigger("route", b, f), i.history.trigger("route", d, b, f)
                }), this
            },navigate: function(a, b) {
                return i.history.navigate(a, b), this
            },_bindRoutes: function() {
                if (this.routes) {
                    this.routes = j.result(this, "routes");
                    for (var a, b = j.keys(this.routes); null != (a = b.pop()); )
                        this.route(a, this.routes[a])
                }
            },_routeToRegExp: function(a) {
                return a = a.replace(F, "\\$&").replace(C, "(?:$1)?").replace(D, function(a, b) {
                    return b ? a : "([^/]+)"
                }).replace(E, "(.*?)"), new RegExp("^" + a + "$")
            },_extractParameters: function(a, b) {
                var c = a.exec(b).slice(1);
                return j.map(c, function(a) {
                    return a ? decodeURIComponent(a) : null
                })
            }});
        var G = i.History = function() {
            this.handlers = [], j.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
        }, H = /^[#\/]|\s+$/g, I = /^\/+|\/+$/g, J = /msie [\w.]+/, K = /\/$/;
        G.started = !1, j.extend(G.prototype, k, {interval: 50,getHash: function(a) {
                var b = (a || this).location.href.match(/#(.*)$/);
                return b ? b[1] : ""
            },getFragment: function(a, b) {
                if (null == a)
                    if (this._hasPushState || !this._wantsHashChange || b) {
                        a = this.location.pathname;
                        var c = this.root.replace(K, "");
                        a.indexOf(c) || (a = a.substr(c.length))
                    } else
                        a = this.getHash();
                return a.replace(H, "")
            },start: function(a) {
                if (G.started)
                    throw new Error("Backbone.history has already been started");
                G.started = !0, this.options = j.extend({}, {root: "/"}, this.options, a), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var b = this.getFragment(), c = document.documentMode, d = J.exec(navigator.userAgent.toLowerCase()) && (!c || 7 >= c);
                this.root = ("/" + this.root + "/").replace(I, "/"), d && this._wantsHashChange && (this.iframe = i.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(b)), this._hasPushState ? i.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !d ? i.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = b;
                var e = this.location, f = e.pathname.replace(/[^\/]$/, "$&/") === this.root;
                return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !f ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && f && e.hash && (this.fragment = this.getHash().replace(H, ""), this.history.replaceState({}, document.title, this.root + this.fragment + e.search)), this.options.silent ? void 0 : this.loadUrl())
            },stop: function() {
                i.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), G.started = !1
            },route: function(a, b) {
                this.handlers.unshift({route: a,callback: b})
            },checkUrl: function() {
                var b = this.getFragment();
                return b === this.fragment && this.iframe && (b = this.getFragment(this.getHash(this.iframe))), b === this.fragment ? !1 : (this.iframe && this.navigate(b), this.loadUrl() || this.loadUrl(this.getHash()), void 0)
            },loadUrl: function(a) {
                var b = this.fragment = this.getFragment(a), c = j.any(this.handlers, function(a) {
                    return a.route.test(b) ? (a.callback(b), !0) : void 0
                });
                return c
            },navigate: function(a, b) {
                if (!G.started)
                    return !1;
                if (b && b !== !0 || (b = {trigger: b}), a = this.getFragment(a || ""), this.fragment !== a) {
                    this.fragment = a;
                    var c = this.root + a;
                    if (this._hasPushState)
                        this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
                    else {
                        if (!this._wantsHashChange)
                            return this.location.assign(c);
                        this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace))
                    }
                    b.trigger && this.loadUrl(a)
                }
            },_updateHash: function(a, b, c) {
                if (c) {
                    var d = a.href.replace(/(javascript:|#).*$/, "");
                    a.replace(d + "#" + b)
                } else
                    a.hash = "#" + b
            }}), i.history = new G;
        var L = function(a, b) {
            var d, c = this;
            d = a && j.has(a, "constructor") ? a.constructor : function() {
                return c.apply(this, arguments)
            }, j.extend(d, c, b);
            var e = function() {
                this.constructor = d
            };
            return e.prototype = c.prototype, d.prototype = new e, a && j.extend(d.prototype, a), d.__super__ = c.prototype, d
        };
        p.extend = s.extend = B.extend = x.extend = G.extend = L;
        var M = function() {
            throw new Error('A "url" property or function must be specified')
        }, N = function(a, b) {
            var c = b.error;
            b.error = function(d) {
                c && c(a, d, b), a.trigger("error", a, d, b)
            }
        }
    }.call(this), this._ = c, this.jQuery = d
});
;
define("backbone/plugins/backbone-deepmodel/backbone-deepmodel", ["underscore", "backbone"], function(a, b, c) {
    !function() {
        var d, e, f, g, h, i, b = a("backbone"), c = a("underscore"), j = [].slice;
        f = function(a) {
            var d, e;
            return !c.isObject(a) || c.isFunction(a) ? a : a instanceof b.Collection || a instanceof b.Model ? a : c.isDate(a) ? new Date(a.getTime()) : c.isRegExp(a) ? new RegExp(a.source, a.toString().replace(/.*\//, "")) : (e = c.isArray(a || c.isArguments(a)), d = function(a, b, c) {
                return e ? a.push(f(b)) : a[c] = f(b), a
            }, c.reduce(a, d, e ? [] : {}))
        }, i = function(a) {
            return null == a ? !1 : !(a.prototype !== {}.prototype && a.prototype !== Object.prototype || !c.isObject(a) || c.isArray(a) || c.isFunction(a) || c.isDate(a) || c.isRegExp(a) || c.isArguments(a))
        }, e = function(a) {
            return c.filter(c.keys(a), function(b) {
                return i(a[b])
            })
        }, d = function(a) {
            return c.filter(c.keys(a), function(b) {
                return c.isArray(a[b])
            })
        }, h = function(a, b, f) {
            var g, i, j, k, l, m, n, o, p, q;
            if (null == f && (f = 20), 0 >= f)
                return console.warn("_.deepExtend(): Maximum depth of recursion hit."), c.extend(a, b);
            for (m = c.intersection(e(a), e(b)), i = function(c) {
                return b[c] = h(a[c], b[c], f - 1)
            }, n = 0, p = m.length; p > n; n++)
                l = m[n], i(l);
            for (k = c.intersection(d(a), d(b)), g = function(d) {
                return b[d] = c.union(a[d], b[d])
            }, o = 0, q = k.length; q > o; o++)
                j = k[o], g(j);
            return c.extend(a, b)
        }, g = function() {
            var a, b, d, e;
            if (d = 2 <= arguments.length ? j.call(arguments, 0, e = arguments.length - 1) : (e = 0, []), b = arguments[e++], c.isNumber(b) || (d.push(b), b = 20), d.length <= 1)
                return d[0];
            if (0 >= b)
                return c.extend.apply(this, d);
            for (a = d.shift(); d.length > 0; )
                a = h(a, f(d.shift()), b);
            return a
        }, c.mixin({deepClone: f,isBasicObject: i,basicObjects: e,arrays: d,deepExtend: g})
    }.call(this), function(b, d) {
        function e(a) {
            var c = {}, d = i.keyPathSeparator;
            for (var f in a) {
                var g = a[f];
                if (g && g.constructor === Object && !b.isEmpty(g)) {
                    var h = e(g);
                    for (var j in h) {
                        var k = h[j];
                        c[f + d + j] = k
                    }
                } else
                    c[f] = g
            }
            return c
        }
        function f(a, c, d) {
            for (var e = i.keyPathSeparator, f = c.split(e), g = a, h = 0, j = f.length; j > h; h++) {
                if (d && !b.has(g, f[h]))
                    return !1;
                if (g = g[f[h]], null == g && j - 1 > h && (g = {}), "undefined" == typeof g)
                    return d ? !0 : g
            }
            return d ? !0 : g
        }
        function g(a, c, d, e) {
            e = e || {};
            for (var f = i.keyPathSeparator, g = c.split(f), h = a, j = 0, k = g.length; k > j && void 0 !== h; j++) {
                var l = g[j];
                j === k - 1 ? e.unset ? delete h[l] : h[l] = d : ("undefined" != typeof h[l] && b.isObject(h[l]) || (h[l] = {}), h = h[l])
            }
        }
        function h(a, b) {
            g(a, b, null, {unset: !0})
        }
        var d = a("backbone"), b = a("underscore"), i = d.Model.extend({constructor: function(a, c) {
                var d, e = a || {};
                this.cid = b.uniqueId("c"), this.attributes = {}, c && c.collection && (this.collection = c.collection), c && c.parse && (e = this.parse(e, c) || {}), (d = b.result(this, "defaults")) && (e = b.deepExtend({}, d, e)), this.set(e, c), this.changed = {}, this.initialize.apply(this, arguments)
            },toJSON: function() {
                return b.deepClone(this.attributes)
            },get: function(a) {
                return f(this.attributes, a)
            },set: function(a, c, d) {
                var j, k, l, m, n, o, p, q;
                if (null == a)
                    return this;
                if ("object" == typeof a ? (k = a, d = c || {}) : (k = {})[a] = c, d || (d = {}), !this._validate(k, d))
                    return !1;
                l = d.unset, n = d.silent, m = [], o = this._changing, this._changing = !0, o || (this._previousAttributes = b.deepClone(this.attributes), this.changed = {}), q = this.attributes, p = this._previousAttributes, this.idAttribute in k && (this.id = k[this.idAttribute]), k = e(k);
                for (j in k)
                    c = k[j], b.isEqual(f(q, j), c) || m.push(j), b.isEqual(f(p, j), c) ? h(this.changed, j) : g(this.changed, j, c), l ? h(q, j) : g(q, j, c);
                if (!n) {
                    m.length && (this._pending = !0);
                    for (var r = i.keyPathSeparator, s = 0, t = m.length; t > s; s++) {
                        var a = m[s];
                        this.trigger("change:" + a, this, f(q, a), d);
                        for (var u = a.split(r), v = u.length - 1; v > 0; v--) {
                            var w = b.first(u, v).join(r), x = w + r + "*";
                            this.trigger("change:" + x, this, f(q, w), d)
                        }
                    }
                }
                if (o)
                    return this;
                if (!n)
                    for (; this._pending; )
                        this._pending = !1, this.trigger("change", this, d);
                return this._pending = !1, this._changing = !1, this
            },clear: function(a) {
                var c = {}, d = e(this.attributes);
                for (var f in d)
                    c[f] = void 0;
                return this.set(c, b.extend({}, a, {unset: !0}))
            },hasChanged: function(a) {
                return null == a ? !b.isEmpty(this.changed) : void 0 !== f(this.changed, a)
            },changedAttributes: function(a) {
                if (!a)
                    return this.hasChanged() ? e(this.changed) : !1;
                var c = this._changing ? this._previousAttributes : this.attributes;
                a = e(a), c = e(c);
                var d, f = !1;
                for (var g in a)
                    b.isEqual(c[g], d = a[g]) || ((f || (f = {}))[g] = d);
                return f
            },previous: function(a) {
                return null != a && this._previousAttributes ? f(this._previousAttributes, a) : null
            },previousAttributes: function() {
                return b.deepClone(this._previousAttributes)
            }});
        i.keyPathSeparator = ".", "undefined" != typeof c && (c.exports = i)
    }()
});
;
define("backbone/plugins/backbone-modelbinder/backbone-modelbinder", ["underscore", "jquery", "backbone"], function(a) {
    var b = a("backbone"), c = a("underscore");
    if (!b)
        throw "Please include Backbone.js before Backbone.ModelBinder.js";
    return b.ModelBinder = function(a) {
        c.bindAll(this), this._modelSetOptions = a || {}
    }, b.ModelBinder.VERSION = "0.1.5", b.ModelBinder.Constants = {}, b.ModelBinder.Constants.ModelToView = "ModelToView", b.ModelBinder.Constants.ViewToModel = "ViewToModel", c.extend(b.ModelBinder.prototype, {bind: function(a, b, d, e) {
            if (this.unbind(), this._model = a, this._rootEl = b, this._modelSetOptions = c.extend({}, this._modelSetOptions, e), !this._model)
                throw "model must be specified";
            if (!this._rootEl)
                throw "rootEl must be specified";
            d ? (this._attributeBindings = $.extend(!0, {}, d), this._initializeAttributeBindings(), this._initializeElBindings()) : this._initializeDefaultBindings(), this._bindModelToView(), this._bindViewToModel()
        },unbind: function() {
            this._unbindModelToView(), this._unbindViewToModel(), this._attributeBindings && (delete this._attributeBindings, this._attributeBindings = void 0)
        },_initializeAttributeBindings: function() {
            var a, b, d, e, f;
            for (a in this._attributeBindings) {
                if (b = this._attributeBindings[a], c.isString(b))
                    d = {elementBindings: [{selector: b}]};
                else if (c.isArray(b))
                    d = {elementBindings: b};
                else {
                    if (!c.isObject(b))
                        throw "Unsupported type passed to Model Binder " + d;
                    d = {elementBindings: [b]}
                }
                for (e = 0; e < d.elementBindings.length; e++)
                    f = d.elementBindings[e], f.attributeBinding = d;
                d.attributeName = a, this._attributeBindings[a] = d
            }
        },_initializeDefaultBindings: function() {
            var a, b, c, d, e;
            for (this._attributeBindings = {}, b = $("[name]", this._rootEl), a = 0; a < b.length; a++)
                c = b[a], d = $(c).attr("name"), this._attributeBindings[d] ? this._attributeBindings[d].elementBindings.push({attributeBinding: this._attributeBindings[d],boundEls: [c]}) : (e = {attributeName: d}, e.elementBindings = [{attributeBinding: e,boundEls: [c]}], this._attributeBindings[d] = e)
        },_initializeElBindings: function() {
            var a, b, c, d, e, f, g;
            for (a in this._attributeBindings)
                for (b = this._attributeBindings[a], c = 0; c < b.elementBindings.length; c++) {
                    if (d = b.elementBindings[c], e = "" === d.selector ? $(this._rootEl) : $(d.selector, this._rootEl), 0 === e.length)
                        throw "Bad binding found. No elements returned for binding selector " + d.selector;
                    for (d.boundEls = [], f = 0; f < e.length; f++)
                        g = e[f], d.boundEls.push(g)
                }
        },_bindModelToView: function() {
            this._model.on("change", this._onModelChange, this), this.copyModelAttributesToView()
        },copyModelAttributesToView: function(a) {
            var b, d;
            for (b in this._attributeBindings)
                (void 0 === a || -1 !== c.indexOf(a, b)) && (d = this._attributeBindings[b], this._copyModelToView(d))
        },_unbindModelToView: function() {
            this._model && (this._model.off("change", this._onModelChange), this._model = void 0)
        },_bindViewToModel: function() {
            $(this._rootEl).delegate("", "change", this._onElChanged), $(this._rootEl).delegate("[contenteditable]", "blur", this._onElChanged)
        },_unbindViewToModel: function() {
            this._rootEl && ($(this._rootEl).undelegate("", "change", this._onElChanged), $(this._rootEl).undelegate("[contenteditable]", "blur", this._onElChanged))
        },_onElChanged: function(a) {
            var b, c, d, e;
            for (b = $(a.target)[0], c = this._getElBindings(b), d = 0; d < c.length; d++)
                e = c[d], this._isBindingUserEditable(e) && this._copyViewToModel(e, b)
        },_isBindingUserEditable: function(a) {
            return void 0 === a.elAttribute || "text" === a.elAttribute || "html" === a.elAttribute
        },_getElBindings: function(a) {
            var b, c, d, e, f, g, h = [];
            for (b in this._attributeBindings)
                for (c = this._attributeBindings[b], d = 0; d < c.elementBindings.length; d++)
                    for (e = c.elementBindings[d], f = 0; f < e.boundEls.length; f++)
                        g = e.boundEls[f], g === a && h.push(e);
            return h
        },_onModelChange: function() {
            var a, b;
            for (a in this._model.changedAttributes())
                b = this._attributeBindings[a], b && this._copyModelToView(b)
        },_copyModelToView: function(a) {
            var c, d, e, f, g, h;
            for (g = this._model.get(a.attributeName), c = 0; c < a.elementBindings.length; c++)
                for (d = a.elementBindings[c], e = 0; e < d.boundEls.length; e++)
                    f = d.boundEls[e], f._isSetting || (h = this._getConvertedValue(b.ModelBinder.Constants.ModelToView, d, g), this._setEl($(f), d, h))
        },_setEl: function(a, b, c) {
            b.elAttribute ? this._setElAttribute(a, b, c) : this._setElValue(a, c)
        },_setElAttribute: function(a, d, e) {
            switch (d.elAttribute) {
                case "html":
                    a.html(e);
                    break;
                case "text":
                    a.text(e);
                    break;
                case "enabled":
                    a.attr("disabled", !e);
                    break;
                case "displayed":
                    a[e ? "show" : "hide"]();
                    break;
                case "hidden":
                    a[e ? "hide" : "show"]();
                    break;
                case "css":
                    a.css(d.cssAttribute, e);
                    break;
                case "class":
                    var f = this._model.previous(d.attributeBinding.attributeName);
                    c.isUndefined(f) || (f = this._getConvertedValue(b.ModelBinder.Constants.ModelToView, d, f), a.removeClass(f)), e && a.addClass(e);
                    break;
                default:
                    a.attr(d.elAttribute, e)
            }
        },_setElValue: function(a, b) {
            if (a.attr("type"))
                switch (a.attr("type")) {
                    case "radio":
                        a.val() === b && a.attr("checked", "checked");
                        break;
                    case "checkbox":
                        b ? a.attr("checked", "checked") : a.removeAttr("checked");
                        break;
                    default:
                        a.val(b)
                }
            else
                a.is("input") || a.is("select") || a.is("textarea") ? a.val(b) : a.text(b)
        },_copyViewToModel: function(a, c) {
            var d, e;
            c._isSetting || (c._isSetting = !0, this._setModel(a, $(c)), c._isSetting = !1, a.converter && (d = this._model.get(a.attributeBinding.attributeName), e = this._getConvertedValue(b.ModelBinder.Constants.ModelToView, a, d), this._setEl($(c), a, e)))
        },_getElValue: function(a, b) {
            switch (b.attr("type")) {
                case "checkbox":
                    return b.prop("checked") ? !0 : !1;
                default:
                    return void 0 !== b.attr("contenteditable") ? b.html() : b.val()
            }
        },_setModel: function(a, d) {
            var e = {}, f = this._getElValue(a, d);
            f = this._getConvertedValue(b.ModelBinder.Constants.ViewToModel, a, f), e[a.attributeBinding.attributeName] = f;
            var g = c.extend({}, this._modelSetOptions, {changeSource: "ModelBinder"});
            this._model.set(e, g)
        },_getConvertedValue: function(a, b, c) {
            return b.converter && (c = b.converter(a, c, b.attributeBinding.attributeName, this._model)), c
        }}), b.ModelBinder.CollectionConverter = function(a) {
        if (this._collection = a, !this._collection)
            throw "Collection must be defined";
        c.bindAll(this, "convert")
    }, c.extend(b.ModelBinder.CollectionConverter.prototype, {convert: function(a, c) {
            return a === b.ModelBinder.Constants.ModelToView ? c ? c.id : void 0 : this._collection.get(c)
        }}), b.ModelBinder.createDefaultBindings = function(a, b, c, d) {
        var e, f, g, h, i = {};
        for (e = $("[" + b + "]", a), f = 0; f < e.length; f++)
            if (g = e[f], h = $(g).attr(b), !i[h]) {
                var j = {selector: "[" + b + '="' + h + '"]'};
                i[h] = j, c && (i[h].converter = c), d && (i[h].elAttribute = d)
            }
        return i
    }, b.ModelBinder.combineBindings = function(a, b) {
        c.each(b, function(b, c) {
            var d = {selector: b.selector};
            b.converter && (d.converter = b.converter), b.elAttribute && (d.elAttribute = b.elAttribute), a[c] = a[c] ? [a[c], d] : d
        })
    }, b.ModelBinder
});
;
define("backbone/plugins/backbone-collectionbinder/backbone-collectionbinder", ["backbone", "underscore"], function(require, exports, module) {
    // Backbone.CollectionBinder v1.0.1
    // (c) 2013 Bart Wood
    // Distributed Under MIT License
    
    (function() {
        //seajs 需要增加两行
        var Backbone = require('backbone');
        var _ = require('underscore');
        
        if (!Backbone) {
            throw 'Please include Backbone.js before Backbone.ModelBinder.js';
        }
        
        if (!Backbone.ModelBinder) {
            throw 'Please include Backbone.ModelBinder.js before Backbone.CollectionBinder.js';
        }
        
        Backbone.CollectionBinder = function(elManagerFactory, options) {
            _.bindAll(this);
            this._elManagers = {};
            
            this._elManagerFactory = elManagerFactory;
            if (!this._elManagerFactory)
                throw 'elManagerFactory must be defined.';

            // Let the factory just use the trigger function on the view binder
            this._elManagerFactory.trigger = this.trigger;
            
            this._options = options || {};
        };
        
        Backbone.CollectionBinder.VERSION = '1.0.1';
        
        _.extend(Backbone.CollectionBinder.prototype, Backbone.Events, {
            bind: function(collection, parentEl) {
                this.unbind();
                
                if (!collection)
                    throw 'collection must be defined';
                if (!parentEl)
                    throw 'parentEl must be defined';
                
                this._collection = collection;
                this._elManagerFactory.setParentEl(parentEl);
                this._elManagerFactory.setCollection(this._collection);
                
                this._onCollectionReset();
                
                this._collection.on('add', this._onCollectionAdd, this);
                this._collection.on('remove', this._onCollectionRemove, this);
                this._collection.on('reset', this._onCollectionReset, this);
                this._collection.on('sort', this._onCollectionSort, this);
            },
            
            unbind: function() {
                if (this._collection !== undefined) {
                    this._collection.off('add', this._onCollectionAdd);
                    this._collection.off('remove', this._onCollectionRemove);
                    this._collection.off('reset', this._onCollectionReset);
                    this._collection.off('sort', this._onCollectionSort);
                }
                
                this._removeAllElManagers();
            },
            
            getManagerForEl: function(el) {
                var i, elManager, elManagers = _.values(this._elManagers);
                
                for (i = 0; i < elManagers.length; i++) {
                    elManager = elManagers[i];
                    
                    if (elManager.isElContained(el)) {
                        return elManager;
                    }
                }
                
                return undefined;
            },
            
            getManagerForModel: function(model) {
                return this._elManagers[_.isObject(model) ? model.cid : model];
            },
            
            _onCollectionAdd: function(model) {
                var elMgr = this._isModelToInsert(model);
                if (elMgr)
                    this._elManagers[model.cid] = this._elManagerFactory.makeElManager(model, elMgr.getEl());
                else
                    this._elManagers[model.cid] = this._elManagerFactory.makeElManager(model);
                this._elManagers[model.cid].createEl();
                
                if (this._options['autoSort']) {
                    this.sortRootEls();
                }
            },
            
            _isModelToInsert: function(model) {
                var currentIndex = this._collection.indexOf(model);
                if (currentIndex === 0) {
                    var nextModel = this._collection.at(currentIndex + 1);
                    var elMgr = nextModel && this._elManagers[nextModel.cid];
                    return elMgr;
                }
                return false;
            },
            
            _onCollectionRemove: function(model) {
                this._removeElManager(model);
            },
            
            _onCollectionReset: function() {
                this._removeAllElManagers();
                
                this._collection.each(function(model) {
                    this._onCollectionAdd(model);
                }, this);
                
                this.trigger('elsReset', this._collection);
            },
            
            _onCollectionSort: function() {
                if (this._options['autoSort']) {
                    this.sortRootEls();
                }
            },
            
            _removeAllElManagers: function() {
                _.each(this._elManagers, function(elManager) {
                    elManager.removeEl();
                    delete this._elManagers[elManager._model.cid];
                }, this);
                
                delete this._elManagers;
                this._elManagers = {};
            },
            
            _removeElManager: function(model) {
                if (this._elManagers[model.cid] !== undefined) {
                    this._elManagers[model.cid].removeEl();
                    delete this._elManagers[model.cid];
                }
            },
            
            sortRootEls: function() {
                this._collection.each(function(model, modelIndex) {
                    var modelElManager = this.getManagerForModel(model);
                    if (modelElManager) {
                        var modelEl = modelElManager.getEl();
                        var currentRootEls = $(this._elManagerFactory.getParentEl()).children();
                        
                        if (currentRootEls[modelIndex] !== modelEl[0]) {
                            modelEl.detach();
                            modelEl.insertBefore(currentRootEls[modelIndex]);
                        }
                    }
                }, this);
            }
        });

        // The ElManagerFactory is used for els that are just html templates
        // elHtml - how the model's html will be rendered.  Must have a single root element (div,span).
        // bindings (optional) - either a string which is the binding attribute (name, id, data-name, etc.) or a normal bindings hash
        Backbone.CollectionBinder.ElManagerFactory = function(elHtml, bindings) {
            _.bindAll(this);
            
            this._elHtml = elHtml;
            this._bindings = bindings;
            
            if (!_.isString(this._elHtml))
                throw 'elHtml must be a valid html string';
        };
        
        _.extend(Backbone.CollectionBinder.ElManagerFactory.prototype, {
            setParentEl: function(parentEl) {
                this._parentEl = parentEl;
            },
            
            getParentEl: function() {
                return this._parentEl;
            },
            
            makeElManager: function(model) {
                
                var elManager = {
                    _model: model,
                    
                    createEl: function() {
                        
                        this._el = $(this._elHtml);
                        $(this._parentEl).append(this._el);
                        
                        if (this._bindings) {
                            if (_.isString(this._bindings)) {
                                this._modelBinder = new Backbone.ModelBinder();
                                this._modelBinder.bind(this._model, this._el, Backbone.ModelBinder.createDefaultBindings(this._el, this._bindings));
                            } 
                            else if (_.isObject(this._bindings)) {
                                this._modelBinder = new Backbone.ModelBinder();
                                this._modelBinder.bind(this._model, this._el, this._bindings);
                            } 
                            else {
                                throw 'Unsupported bindings type, please use a boolean or a bindings hash';
                            }
                        }
                        
                        this.trigger('elCreated', this._model, this._el);
                    },
                    
                    removeEl: function() {
                        if (this._modelBinder !== undefined) {
                            this._modelBinder.unbind();
                        }
                        
                        this._el.remove();
                        this.trigger('elRemoved', this._model, this._el);
                    },
                    
                    isElContained: function(findEl) {
                        return this._el === findEl || $(this._el).has(findEl).length > 0;
                    },
                    
                    getModel: function() {
                        return this._model;
                    },
                    
                    getEl: function() {
                        return this._el;
                    }
                };
                
                _.extend(elManager, this);
                return elManager;
            }
        });

        // The ViewManagerFactory is used for els that are created and owned by backbone views.
        // There is no bindings option because the view made by the viewCreator should take care of any binding
        // viewCreator - a callback that will create backbone view instances for a model passed to the callback
        Backbone.CollectionBinder.ViewManagerFactory = function(viewCreator, collection) {
            _.bindAll(this);
            this._viewCreator = viewCreator;
            collection && this.setCollection(collection);
            
            if (!_.isFunction(this._viewCreator))
                throw 'viewCreator must be a valid function that accepts a model and returns a backbone view';
        };
        
        _.extend(Backbone.CollectionBinder.ViewManagerFactory.prototype, {
            
            setCollection: function(collection) {
                this._collection = collection;
            },
            
            setParentEl: function(parentEl) {
                this._parentEl = parentEl;
            },
            
            getParentEl: function() {
                return this._parentEl;
            },
            
            makeElManager: function(model, nextEl) {
                var self = this;
                var elManager = {
                    
                    _model: model,
                    _nextEl: nextEl,
                    
                    createEl: function() {
                        this._view = this._viewCreator(model, self._collection);
                        if (!_.isUndefined(this._nextEl)) {
                            this._view.render(this._model).$el.insertBefore(this._nextEl);
                        } else {
                            $(this._parentEl).append(this._view.render(this._model).el);
                        }
                        this.trigger('elCreated', this._model, this._view);
                    },
                    
                    removeEl: function() {
                        if (this._view.close !== undefined) {
                            this._view.close();
                        } 
                        else {
                            this._view.$el.remove();
                            console.log('warning, you should implement a close() function for your view, you might end up with zombies');
                        }
                        
                        this.trigger('elRemoved', this._model, this._view);
                    },
                    
                    isElContained: function(findEl) {
                        return this._view.el === findEl || this._view.$el.has(findEl).length > 0;
                    },
                    
                    getModel: function() {
                        return this._model;
                    },
                    
                    getView: function() {
                        return this._view;
                    },
                    
                    getEl: function() {
                        return this._view.$el;
                    }
                };
                
                _.extend(elManager, this);
                
                return elManager;
            }
        });
    
    }).call(this);

});
;
define("backbone/plugins/backbone-localStorage/backbone-localStorage", function() {
    return function(a, b) {
        function c() {
            return (0 | 65536 * (1 + Math.random())).toString(16).substring(1)
        }
        function d() {
            return c() + c() + "-" + c() + "-" + c() + "-" + c() + "-" + c() + c() + c()
        }
        return b.LocalStorage = window.Store = function(a) {
            this.name = a;
            var b = this.localStorage().getItem(this.name);
            this.records = b && b.split(",") || []
        }, a.extend(b.LocalStorage.prototype, {save: function() {
                this.localStorage().setItem(this.name, this.records.join(","))
            },create: function(a) {
                return a.id || (a.id = d(), a.set(a.idAttribute, a.id)), this.localStorage().setItem(this.name + "-" + a.id, JSON.stringify(a)), this.records.push(a.id.toString()), this.save(), this.find(a)
            },update: function(b) {
                return this.localStorage().setItem(this.name + "-" + b.id, JSON.stringify(b)), a.include(this.records, b.id.toString()) || this.records.push(b.id.toString()), this.save(), this.find(b)
            },find: function(a) {
                return this.jsonData(this.localStorage().getItem(this.name + "-" + a.id))
            },findAll: function() {
                return a(this.records).chain().map(function(a) {
                    return this.jsonData(this.localStorage().getItem(this.name + "-" + a))
                }, this).compact().value()
            },destroy: function(b) {
                return b.isNew() ? !1 : (this.localStorage().removeItem(this.name + "-" + b.id), this.records = a.reject(this.records, function(a) {
                    return a === b.id.toString()
                }), this.save(), b)
            },localStorage: function() {
                return localStorage
            },jsonData: function(a) {
                return a && JSON.parse(a)
            },_clear: function() {
                var b = this.localStorage(), c = new RegExp("^" + this.name + "-");
                b.removeItem(this.name), a.chain(b).keys().filter(function(a) {
                    return c.test(a)
                }).each(function(a) {
                    b.removeItem(a)
                })
            },_storageSize: function() {
                return this.localStorage().length
            }}), b.LocalStorage.sync = window.Store.sync = b.localSync = function(a, c, d) {
            var f, g, e = c.localStorage || c.collection.localStorage, h = $.Deferred && $.Deferred();
            try {
                switch (a) {
                    case "read":
                        f = void 0 != c.id ? e.find(c) : e.findAll();
                        break;
                    case "create":
                        f = e.create(c);
                        break;
                    case "update":
                        f = e.update(c);
                        break;
                    case "delete":
                        f = e.destroy(c)
                }
            } catch (i) {
                g = i.code === DOMException.QUOTA_EXCEEDED_ERR && 0 === e._storageSize() ? "Private browsing is unsupported" : i.message
            }
            return f ? (c.trigger("sync", c, f, d), d && d.success && ("0.9.10" === b.VERSION ? d.success(c, f, d) : d.success(f)), h && h.resolve(f)) : (g = g ? g : "Record Not Found", c.trigger("error", c, g, d), d && d.error && ("0.9.10" === b.VERSION ? d.error(c, g, d) : d.error(g)), h && h.reject(g)), d && d.complete && d.complete(f), h && h.promise()
        }, b.ajaxSync = b.sync, b.getSyncMethod = function(a) {
            return a.localStorage || a.collection && a.collection.localStorage ? b.localSync : b.ajaxSync
        }, b.sync = function(a, c, d) {
            return b.getSyncMethod(c).apply(this, [a, c, d])
        }, b.LocalStorage
    }(_, Backbone)
});
;
define("backbone/plugins/backbone-paginator/backbone-paginator", [], function() {
    Backbone.Paginator = function(a, b, c) {
        "use strict";
        var d = b.map(a.VERSION.split("."), function(a) {
            return parseInt(a, 10)
        }), e = {};
        e.version = "<%= pkg.version %>", e.clientPager = a.Collection.extend({useDiacriticsPlugin: !0,useLevenshteinPlugin: !0,sortColumn: "",sortDirection: "desc",lastSortColumn: "",fieldFilterRules: [],lastFieldFilterRules: [],filterFields: "",filterExpression: "",lastFilterExpression: "",defaults_ui: {firstPage: 0,currentPage: 1,perPage: 5,totalPages: 10,pagesInRange: 4},initialize: function() {
                this.on("add", this.addModel, this), this.on("remove", this.removeModel, this), this.setDefaults()
            },setDefaults: function() {
                var a = b.defaults(this.paginator_ui, this.defaults_ui);
                b.defaults(this, a)
            },addModel: function(a) {
                this.origModels.push(a)
            },removeModel: function(a) {
                var c = b.indexOf(this.origModels, a);
                this.origModels.splice(c, 1)
            },sync: function(c, e, f) {
                var g = this;
                this.setDefaults();
                var h = {};
                b.each(b.result(g, "server_api"), function(a, c) {
                    b.isFunction(a) && (a = b.bind(a, g), a = a()), h[c] = a
                });
                var i = b.clone(g.paginator_core);
                b.each(i, function(a, c) {
                    b.isFunction(a) && (a = b.bind(a, g), a = a()), i[c] = a
                }), i = b.defaults(i, {timeout: 25e3,cache: !1,type: "GET",dataType: "jsonp"}), i = b.extend(i, {data: JSON.stringify(h),processData: !1,url: b.result(i, "url")}, f);
                var j = !(0 === d[0] && 9 === d[1] && 10 === d[2]), k = i.success;
                i.success = function(a, b, c) {
                    k && (j ? k(a, b, c) : k(e, a, i)), e && e.trigger && e.trigger("sync", e, a, i)
                };
                var l = i.error;
                i.error = function(a) {
                    l && l(e, a, i), e && e.trigger && e.trigger("error", e, a, i)
                };
                var m = i.xhr = a.ajax(i);
                return e && e.trigger && e.trigger("request", e, m, i), m
            },nextPage: function(a) {
                this.currentPage < this.information.totalPages && (this.currentPage = ++this.currentPage, this.pager(a))
            },previousPage: function(a) {
                this.currentPage > 1 && (this.currentPage = --this.currentPage, this.pager(a))
            },goTo: function(a, b) {
                void 0 !== a && (this.currentPage = parseInt(a, 10), this.pager(b))
            },howManyPer: function(a) {
                if (void 0 !== a) {
                    var b = this.perPage;
                    this.perPage = parseInt(a, 10), this.currentPage = Math.ceil((b * (this.currentPage - 1) + 1) / a), this.pager()
                }
            },setSort: function(a, b) {
                void 0 !== a && void 0 !== b && (this.lastSortColumn = this.sortColumn, this.sortColumn = a, this.sortDirection = b, this.pager(), this.info())
            },setFieldFilter: function(a) {
                b.isEmpty(a) ? (this.lastFieldFilterRules = this.fieldFilterRules, this.fieldFilterRules = "", this.pager(), this.info()) : (this.lastFieldFilterRules = this.fieldFilterRules, this.fieldFilterRules = a, this.pager(), this.info())
            },doFakeFieldFilter: function(a) {
                if (!b.isEmpty(a)) {
                    var c = this.origModels;
                    return void 0 === c && (c = this.models), c = this._fieldFilter(c, a), "" !== this.filterExpression && (c = this._filter(c, this.filterFields, this.filterExpression)), c.length
                }
            },setFilter: function(a, b) {
                void 0 !== a && void 0 !== b && (this.filterFields = a, this.lastFilterExpression = this.filterExpression, this.filterExpression = b, this.pager(), this.info())
            },doFakeFilter: function(a, c) {
                if (void 0 !== a && void 0 !== c) {
                    var d = this.origModels;
                    return void 0 === d && (d = this.models), b.isEmpty(this.fieldFilterRules) || (d = this._fieldFilter(d, this.fieldFilterRules)), d = this._filter(d, a, c), d.length
                }
            },pager: function(a) {
                var c = this, d = this.perPage, e = (c.currentPage - 1) * d, f = e + d;
                void 0 === c.origModels && (c.origModels = c.models), c.models = c.origModels.slice(), "" !== this.sortColumn && (c.models = c._sort(c.models, this.sortColumn, this.sortDirection)), b.isEmpty(this.fieldFilterRules) || (c.models = c._fieldFilter(c.models, this.fieldFilterRules)), "" !== this.filterExpression && (c.models = c._filter(c.models, this.filterFields, this.filterExpression)), this.lastSortColumn === this.sortColumn && this.lastFilterExpression === this.filterExpression && b.isEqual(this.fieldFilterRules, this.lastFieldFilterRules) || (e = 0, f = e + d, c.currentPage = 1, this.lastSortColumn = this.sortColumn, this.lastFieldFilterRules = this.fieldFilterRules, this.lastFilterExpression = this.filterExpression), c.sortedAndFilteredModels = c.models.slice(), c.info(), c.reset(c.models.slice(e, f)), b.result(a, "success")
            },_sort: function(a, c, d) {
                return a = a.sort(function(a, e) {
                    var f = a.get(c), g = e.get(c);
                    if (b.isUndefined(f) || b.isUndefined(g) || null === f || null === g)
                        return 0;
                    if (f = f.toString().toLowerCase(), g = g.toString().toLowerCase(), "desc" === d)
                        if (!f.match(/[^\-\d\.]/) && f.match(/-?[\d\.]+/) && !g.match(/[^\-\d\.]/) && g.match(/-?[\d\.]+/)) {
                            if (g - 0 > f - 0)
                                return 1;
                            if (f - 0 > g - 0)
                                return -1
                        } else {
                            if (g > f)
                                return 1;
                            if (f > g)
                                return -1
                        }
                    else if (!f.match(/[^\-\d\.]/) && f.match(/-?[\d\.]+/) && !g.match(/[^\-\d\.]/) && g.match(/-?[\d\.]+/)) {
                        if (g - 0 > f - 0)
                            return -1;
                        if (f - 0 > g - 0)
                            return 1
                    } else {
                        if (g > f)
                            return -1;
                        if (f > g)
                            return 1
                    }
                    if (a.cid && e.cid) {
                        var h = a.cid, i = e.cid;
                        if (i > h)
                            return -1;
                        if (h > i)
                            return 1
                    }
                    return 0
                })
            },_fieldFilter: function(a, c) {
                if (b.isEmpty(c))
                    return a;
                var d = [];
                return b.each(a, function(a) {
                    var e = !0;
                    b.each(c, function(c) {
                        if (!e)
                            return !1;
                        if (e = !1, "function" === c.type) {
                            var d = b.wrap(c.value, function(b) {
                                return b(a.get(c.field))
                            });
                            d() && (e = !0)
                        } else
                            "required" === c.type ? b.isEmpty(a.get(c.field).toString()) || (e = !0) : "min" === c.type ? !b.isNaN(Number(a.get(c.field))) && !b.isNaN(Number(c.value)) && Number(a.get(c.field)) >= Number(c.value) && (e = !0) : "max" === c.type ? !b.isNaN(Number(a.get(c.field))) && !b.isNaN(Number(c.value)) && Number(a.get(c.field)) <= Number(c.value) && (e = !0) : "range" === c.type ? !b.isNaN(Number(a.get(c.field))) && b.isObject(c.value) && !b.isNaN(Number(c.value.min)) && !b.isNaN(Number(c.value.max)) && Number(a.get(c.field)) >= Number(c.value.min) && Number(a.get(c.field)) <= Number(c.value.max) && (e = !0) : "minLength" === c.type ? a.get(c.field).toString().length >= c.value && (e = !0) : "maxLength" === c.type ? a.get(c.field).toString().length <= c.value && (e = !0) : "rangeLength" === c.type ? b.isObject(c.value) && !b.isNaN(Number(c.value.min)) && !b.isNaN(Number(c.value.max)) && a.get(c.field).toString().length >= c.value.min && a.get(c.field).toString().length <= c.value.max && (e = !0) : "oneOf" === c.type ? b.isArray(c.value) && b.include(c.value, a.get(c.field)) && (e = !0) : "equalTo" === c.type ? c.value === a.get(c.field) && (e = !0) : "containsAllOf" === c.type ? b.isArray(c.value) && b.isArray(a.get(c.field)) && b.intersection(c.value, a.get(c.field)).length === c.value.length && (e = !0) : "pattern" === c.type ? a.get(c.field).toString().match(c.value) && (e = !0) : e = !1
                    }), e && d.push(a)
                }), d
            },_filter: function(c, d, e) {
                var f = this, g = {};
                if (b.isString(d) ? g[d] = {cmp_method: "regexp"} : b.isArray(d) ? b.each(d, function(a) {
                    g[a] = {cmp_method: "regexp"}
                }) : b.each(d, function(a, c) {
                    g[c] = b.defaults(a, {cmp_method: "regexp"})
                }), d = g, b.has(a.Paginator, "removeDiacritics") && f.useDiacriticsPlugin && (e = a.Paginator.removeDiacritics(e)), "" === e || !b.isString(e))
                    return c;
                var h = b.map(e.match(/\w+/gi), function(a) {
                    return a.toLowerCase()
                }), i = "(" + b.uniq(h).join("|") + ")", j = new RegExp(i, "igm"), k = [];
                return b.each(c, function(c) {
                    var g = [];
                    b.each(d, function(d, i) {
                        var k = c.get(i);
                        if (k) {
                            var l = [];
                            if (k = b.has(a.Paginator, "removeDiacritics") && f.useDiacriticsPlugin ? a.Paginator.removeDiacritics(k.toString()) : k.toString(), "levenshtein" === d.cmp_method && b.has(a.Paginator, "levenshtein") && f.useLevenshteinPlugin) {
                                var m = a.Paginator.levenshtein(k, e);
                                b.defaults(d, {max_distance: 0}), m <= d.max_distance && (l = b.uniq(h))
                            } else
                                l = k.match(j);
                            l = b.map(l, function(a) {
                                return a.toString().toLowerCase()
                            }), b.each(l, function(a) {
                                g.push(a)
                            })
                        }
                    }), g = b.uniq(b.without(g, "")), b.isEmpty(b.difference(h, g)) && k.push(c)
                }), k
            },info: function() {
                var a = this, b = {}, c = a.sortedAndFilteredModels ? a.sortedAndFilteredModels.length : a.length, d = Math.ceil(c / a.perPage);
                return b = {totalUnfilteredRecords: a.origModels ? a.origModels.length : 0,totalRecords: c,currentPage: a.currentPage,perPage: this.perPage,totalPages: d,lastPage: d,previous: !1,next: !1,startRecord: 0 === c ? 0 : (a.currentPage - 1) * this.perPage + 1,endRecord: Math.min(c, a.currentPage * this.perPage)}, a.currentPage > 1 && (b.previous = a.currentPage - 1), a.currentPage < b.totalPages && (b.next = a.currentPage + 1), b.pageSet = a.setPagination(b), a.information = b, b
            },setPagination: function(a) {
                var b = [], c = 0, d = 0, e = 2 * this.pagesInRange, f = Math.ceil(a.totalRecords / a.perPage);
                if (f > 1)
                    if (1 + e >= f)
                        for (c = 1, d = f; d >= c; c++)
                            b.push(c);
                    else if (a.currentPage <= this.pagesInRange + 1)
                        for (c = 1, d = 2 + e; d > c; c++)
                            b.push(c);
                    else if (f - this.pagesInRange > a.currentPage && a.currentPage > this.pagesInRange)
                        for (c = a.currentPage - this.pagesInRange; c <= a.currentPage + this.pagesInRange; c++)
                            b.push(c);
                    else
                        for (c = f - e; f >= c; c++)
                            b.push(c);
                return b
            },bootstrap: function(a) {
                return b.extend(this, a), this.goTo(1), this.info(), this
            }}), e.clientPager.prototype.prevPage = e.clientPager.prototype.previousPage;
        var f = function() {
            var a = new c.Deferred;
            return a.reject(), a.promise()
        };
        return e.requestPager = a.Collection.extend({sync: function(c, e, f) {
                var g = this;
                g.setDefaults();
                var h = {};
                b.each(b.result(g, "server_api"), function(a, c) {
                    b.isFunction(a) && (a = b.bind(a, g), a = a()), h[c] = a
                });
                var i = b.clone(g.paginator_core);
                b.each(i, function(a, c) {
                    b.isFunction(a) && (a = b.bind(a, g), a = a()), i[c] = a
                }), i = b.defaults(i, {timeout: 25e3,cache: !1,type: "GET",dataType: "jsonp"}), f.data = f.data ? JSON.stringify(b.extend(h, f.data)) : JSON.stringify(h), i = b.extend(i, {data: JSON.stringify(h),processData: !1,url: b.result(i, "url")}, f);
                var j = !(0 === d[0] && 9 === d[1] && 10 === d[2]), k = i.success;
                i.success = function(a, b, c) {
                    k && (j ? k(a, b, c) : k(e, a, i)), d[0] < 1 && e && e.trigger && e.trigger("sync", e, a, i)
                };
                var l = i.error;
                i.error = function(a) {
                    l && l(e, a, i), e && e.trigger && e.trigger("error", e, a, i)
                };
                var m = i.xhr = a.ajax(i);
                return e && e.trigger && e.trigger("request", e, m, i), m
            },setDefaults: function() {
                var a = this;
                b.defaults(a.paginator_ui, {firstPage: 0,currentPage: 1,perPage: 5,totalPages: 10,pagesInRange: 4}), b.each(a.paginator_ui, function(c, d) {
                    b.isUndefined(a[d]) && (a[d] = a.paginator_ui[d])
                })
            },requestNextPage: function(a) {
                return void 0 !== this.currentPage ? (this.currentPage += 1, this.pager(a)) : f()
            },requestPreviousPage: function(a) {
                return void 0 !== this.currentPage ? (this.currentPage -= 1, this.pager(a)) : f()
            },updateOrder: function(a, b) {
                return void 0 !== a ? (this.sortField = a, this.pager(b)) : f()
            },goTo: function(a, b) {
                return void 0 !== a ? (this.currentPage = parseInt(a, 10), this.pager(b)) : f()
            },howManyPer: function(a, b) {
                return void 0 !== a ? (this.currentPage = this.firstPage, this.perPage = a, this.pager(b)) : f()
            },info: function() {
                var a = {totalRecords: this.totalRecords || 0,currentPage: this.currentPage,firstPage: this.firstPage,totalPages: Math.ceil(this.totalRecords / this.perPage),lastPage: this.totalPages,perPage: this.perPage,previous: !1,next: !1};
                return this.currentPage > 1 && (a.previous = this.currentPage - 1), this.currentPage < a.totalPages && (a.next = this.currentPage + 1), a.hasNext = a.next, a.hasPrevious = a.next, a.pageSet = this.setPagination(a), this.information = a, a
            },setPagination: function(a) {
                var b = [], c = 0, d = 0, e = 2 * this.pagesInRange, f = Math.ceil(a.totalRecords / a.perPage);
                if (f > 1)
                    if (1 + e >= f)
                        for (c = 1, d = f; d >= c; c++)
                            b.push(c);
                    else if (a.currentPage <= this.pagesInRange + 1)
                        for (c = 1, d = 2 + e; d > c; c++)
                            b.push(c);
                    else if (f - this.pagesInRange > a.currentPage && a.currentPage > this.pagesInRange)
                        for (c = a.currentPage - this.pagesInRange; c <= a.currentPage + this.pagesInRange; c++)
                            b.push(c);
                    else
                        for (c = f - e; f >= c; c++)
                            b.push(c);
                return b
            },pager: function(a) {
                return b.isObject(a) || (a = {}), this.fetch(a)
            },url: function() {
                return void 0 !== this.paginator_core && void 0 !== this.paginator_core.url ? this.paginator_core.url : null
            },bootstrap: function(a) {
                return b.extend(this, a), this.setDefaults(), this.info(), this
            }}), e.requestPager.prototype.nextPage = e.requestPager.prototype.requestNextPage, e.requestPager.prototype.prevPage = e.requestPager.prototype.requestPreviousPage, e
    }(Backbone, _, jQuery)
});
;
define("backbone/plugins/backbone-routefilter/backbone-routefilter", function(a) {
    var b = a("backbone"), c = a("underscore"), d = b.Router.prototype.route, e = function() {
    };
    c.extend(b.Router.prototype, {before: e,after: e,route: function(a, b, f) {
            f || (f = this[b]);
            var g = c.bind(function() {
                var d, b = [a, c.toArray(arguments)];
                if (d = c.isFunction(this.before) ? this.before : "undefined" != typeof this.before[a] ? this.before[a] : e, d.apply(this, b) !== !1) {
                    f && f.apply(this, arguments);
                    var g;
                    g = c.isFunction(this.after) ? this.after : "undefined" != typeof this.after[a] ? this.after[a] : e, g.apply(this, b)
                }
            }, this);
            return d.call(this, a, b, g)
        }})
});
;
define("backbone/plugins/backbone-validation/backbone-validation", function() {
    Backbone.Validation = function(a, b, c) {
        var d = {forceUpdate: !1,selector: "name",valid: Function.prototype,invalid: Function.prototype}, e = function(a) {
            return b.reduce(b.keys(a.validation), function(a, b) {
                return a[b] = c, a
            }, {})
        }, f = function(c, d) {
            var e = c.validation[d] || {};
            return b.isFunction(e) ? e : b.isString(e) ? c[e] : (b.isArray(e) || (e = [e]), b.reduce(e, function(c, d) {
                return b.each(b.without(b.keys(d), "msg"), function(b) {
                    c.push({fn: a.Validation.validators[b],val: d[b],msg: d.msg})
                }), c
            }, []))
        }, g = function(c, d, e, g) {
            var h = f(c, d);
            return b.isFunction(h) ? h.call(c, e, d, g) : b.reduce(h, function(b, f) {
                var h = f.fn.call(a.Validation.validators, e, d, f.val, c, g);
                return h === !1 || b === !1 ? !1 : h && !b ? f.msg || h : b
            }, "")
        }, h = function(a, c) {
            var e, f, h = [], i = [], j = !0, k = b.clone(c);
            for (f in c)
                e = g(a, f, c[f], k), e && (h.push(f), i.push(e), j = !1);
            return {invalidAttrs: h,errorMessages: i,isValid: j}
        }, i = function(a, c) {
            return {isValid: function(a) {
                    if (b.isString(a))
                        return !g(this, a, this.get(a), this.toJSON());
                    if (b.isArray(a)) {
                        for (var c = 0; c < a.length; c++)
                            if (g(this, a[c], this.get(a[c]), this.toJSON()))
                                return !1;
                        return !0
                    }
                    return a === !0 && this.validate(), this.validation ? this._isValid : !0
                },validate: function(d, f) {
                    var g = this, i = !d, j = b.extend({}, c, f), k = b.extend(e(g), g.toJSON(), d), l = d || k, m = h(g, k);
                    g._isValid = m.isValid;
                    for (var n in k) {
                        var o = b.indexOf(m.invalidAttrs, n);
                        -1 !== o && (l.hasOwnProperty(n) || i) && j.invalid(a, n, m.errorMessages[o], j.selector), b.include(m.invalidAttrs, n) || j.valid(a, n, j.selector)
                    }
                    return b.defer(function() {
                        g.trigger("validated", g._isValid, g, m.invalidAttrs), g.trigger("validated:" + (g._isValid ? "valid" : "invalid"), g, m.invalidAttrs)
                    }), !j.forceUpdate && b.intersection(m.invalidAttrs, b.keys(l)).length > 0 ? m.errorMessages : void 0
                }}
        }, j = function(a, c, d) {
            b.extend(c, i(a, d))
        }, k = function(a) {
            delete a.validate, delete a.isValid
        }, l = function(a) {
            j(this.view, a, this.options)
        }, m = function(a) {
            k(a)
        };
        return {version: "0.5.3",configure: function(a) {
                b.extend(d, a)
            },bind: function(c, e) {
                var f = c.model, g = c.collection, h = b.extend({}, d, a.Validation.callbacks, e);
                f && j(c, f, h), g && (g.each(function(a) {
                    j(c, a, h)
                }), g.bind("add", l, {view: c,options: h}), g.bind("remove", m))
            },unbind: function(a) {
                var b = a.model, c = a.collection;
                b && k(a.model), c && (c.each(function(a) {
                    k(a)
                }), c.unbind("add", l), c.unbind("remove", m))
            },mixin: i(null, d)}
    }(Backbone, _), Backbone.Validation.callbacks = {valid: function(a, b, c) {
            a.$("[" + c + "~=" + b + "]").removeClass("invalid").removeAttr("data-error")
        },invalid: function(a, b, c, d) {
            a.$("[" + d + "~=" + b + "]").addClass("invalid").attr("data-error", c)
        }}, Backbone.Validation.patterns = {digits: /^\d+$/,number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i}, Backbone.Validation.messages = {required: "{0} is required",acceptance: "{0} must be accepted",min: "{0} must be grater than or equal to {1}",max: "{0} must be less than or equal to {1}",range: "{0} must be between {1} and {2}",length: "{0} must be {1} characters",minLength: "{0} must be at least {1} characters",maxLength: "{0} must be at most {1} characters",rangeLength: "{0} must be between {1} and {2} characters",oneOf: "{0} must be one of: {1}",equalTo: "{0} must be the same as {1}",pattern: "{0} must be a valid {1}",object: "{0} must be an object"}, Backbone.Validation.validators = function(a, b, c) {
        var d = String.prototype.trim ? function(a) {
            return null === a ? "" : String.prototype.trim.call(a)
        } : function(a) {
            var b = /^\s+/, c = /\s+$/;
            return null === a ? "" : a.toString().replace(b, "").replace(c, "")
        }, e = function() {
            var a = Array.prototype.slice.call(arguments), b = a.shift();
            return b.replace(/\{(\d+)\}/g, function(b, c) {
                return "undefined" != typeof a[c] ? a[c] : b
            })
        }, f = function(b) {
            return c.isNumber(b) || c.isString(b) && b.match(a.number)
        }, g = function(a) {
            return !(c.isNull(a) || c.isUndefined(a) || c.isString(a) && "" === d(a))
        };
        return {fn: function(a, b, d, e, f) {
                return c.isString(d) && (d = e[d]), d.call(e, a, b, f)
            },required: function(a, d, f, h) {
                var i = c.isFunction(f) ? f.call(h) : f;
                return i || g(a) ? i && !g(a) ? e(b.required, d) : void 0 : !1
            },acceptance: function(a, d) {
                return "true" === a || c.isBoolean(a) && a !== !1 ? void 0 : e(b.acceptance, d)
            },min: function(a, c, d) {
                return !f(a) || d > a ? e(b.min, c, d) : void 0
            },max: function(a, c, d) {
                return !f(a) || a > d ? e(b.max, c, d) : void 0
            },range: function(a, c, d) {
                return !f(a) || a < d[0] || a > d[1] ? e(b.range, c, d[0], d[1]) : void 0
            },length: function(a, c, f) {
                return g(a) && d(a).length === f ? void 0 : e(b.length, c, f)
            },minLength: function(a, c, f) {
                return !g(a) || d(a).length < f ? e(b.minLength, c, f) : void 0
            },maxLength: function(a, c, f) {
                return !g(a) || d(a).length > f ? e(b.maxLength, c, f) : void 0
            },rangeLength: function(a, c, f) {
                return !g(a) || d(a).length < f[0] || d(a).length > f[1] ? e(b.rangeLength, c, f[0], f[1]) : void 0
            },oneOf: function(a, d, f) {
                return c.include(f, a) ? void 0 : e(b.oneOf, d, f.join(", "))
            },equalTo: function(a, c, d, f, g) {
                return a !== g[d] ? e(b.equalTo, c, d) : void 0
            },pattern: function(c, d, f) {
                return g(c) && c.toString().match(a[f] || f) ? void 0 : e(b.pattern, d, f)
            },validation: function(a, d) {
                return c.isObject(a) ? void 0 : e(b.object, d)
            }}
    }(Backbone.Validation.patterns, Backbone.Validation.messages, _)
});
;

;
define("bootstrap/bootstrap-all", [], function(require, exports, module) {
    require("bootstrap");
    require('bootstrap-editable');
    require("bootstrap-datetimepicker");
    require("bootstrap-contextmenu");
    
    $.fn.modal.Constructor.prototype.enforceFocus = function() {
    };
});
/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
define("bootstrap/2.2.2/bootstrap", [], function() {
    return (function($) {
        !function(e) {
            "use strict";
            e(function() {
                e.support.transition = function() {
                    var e = function() {
                        var e = document.createElement("bootstrap"), t = {WebkitTransition: "webkitTransitionEnd",MozTransition: "transitionend",OTransition: "oTransitionEnd otransitionend",transition: "transitionend"}, n;
                        for (n in t)
                            if (e.style[n] !== undefined)
                                return t[n]
                    }();
                    return e && {end: e}
                }()
            })
        }(window.jQuery), !function(e) {
            "use strict";
            var t = '[data-dismiss="alert"]', n = function(n) {
                e(n).on("click", t, this.close)
            };
            n.prototype.close = function(t) {
                function s() {
                    i.trigger("closed").remove()
                }
                var n = e(this), r = n.attr("data-target"), i;
                r || (r = n.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = e(r), t && t.preventDefault(), i.length || (i = n.hasClass("alert") ? n : n.parent()), i.trigger(t = e.Event("close"));
                if (t.isDefaultPrevented())
                    return;
                i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, s) : s()
            };
            var r = e.fn.alert;
            e.fn.alert = function(t) {
                return this.each(function() {
                    var r = e(this), i = r.data("alert");
                    i || r.data("alert", i = new n(this)), typeof t == "string" && i[t].call(r)
                })
            }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
                return e.fn.alert = r, this
            }, e(document).on("click.alert.data-api", t, n.prototype.close)
        }(window.jQuery), !function(e) {
            "use strict";
            var t = function(t, n) {
                this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n)
            };
            t.prototype.setState = function(e) {
                var t = "disabled", n = this.$element, r = n.data(), i = n.is("input") ? "val" : "html";
                e += "Text", r.resetText || n.data("resetText", n[i]()), n[i](r[e] || this.options[e]), setTimeout(function() {
                    e == "loadingText" ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
                }, 0)
            }, t.prototype.toggle = function() {
                var e = this.$element.closest('[data-toggle="buttons-radio"]');
                e && e.find(".active").removeClass("active"), this.$element.toggleClass("active")
            };
            var n = e.fn.button;
            e.fn.button = function(n) {
                return this.each(function() {
                    var r = e(this), i = r.data("button"), s = typeof n == "object" && n;
                    i || r.data("button", i = new t(this, s)), n == "toggle" ? i.toggle() : n && i.setState(n)
                })
            }, e.fn.button.defaults = {loadingText: "loading..."}, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
                return e.fn.button = n, this
            }, e(document).on("click.button.data-api", "[data-toggle^=button]", function(t) {
                var n = e(t.target);
                n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle")
            })
        }(window.jQuery), !function(e) {
            "use strict";
            var t = function(t, n) {
                this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.options.pause == "hover" && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
            };
            t.prototype = {cycle: function(t) {
                    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
                },getActiveIndex: function() {
                    return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
                },to: function(t) {
                    var n = this.getActiveIndex(), r = this;
                    if (t > this.$items.length - 1 || t < 0)
                        return;
                    return this.sliding ? this.$element.one("slid", function() {
                        r.to(t)
                    }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", e(this.$items[t]))
                },pause: function(t) {
                    return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
                },next: function() {
                    if (this.sliding)
                        return;
                    return this.slide("next")
                },prev: function() {
                    if (this.sliding)
                        return;
                    return this.slide("prev")
                },slide: function(t, n) {
                    var r = this.$element.find(".item.active"), i = n || r[t](), s = this.interval, o = t == "next" ? "left" : "right", u = t == "next" ? "first" : "last", a = this, f;
                    this.sliding = !0, s && this.pause(), i = i.length ? i : this.$element.find(".item")[u](), f = e.Event("slide", {relatedTarget: i[0],direction: o});
                    if (i.hasClass("active"))
                        return;
                    this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                        var t = e(a.$indicators.children()[a.getActiveIndex()]);
                        t && t.addClass("active")
                    }));
                    if (e.support.transition && this.$element.hasClass("slide")) {
                        this.$element.trigger(f);
                        if (f.isDefaultPrevented())
                            return;
                        i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), this.$element.one(e.support.transition.end, function() {
                            i.removeClass([t, o].join(" ")).addClass("active"), r.removeClass(["active", o].join(" ")), a.sliding = !1, setTimeout(function() {
                                a.$element.trigger("slid")
                            }, 0)
                        })
                    } else {
                        this.$element.trigger(f);
                        if (f.isDefaultPrevented())
                            return;
                        r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                    }
                    return s && this.cycle(), this
                }};
            var n = e.fn.carousel;
            e.fn.carousel = function(n) {
                return this.each(function() {
                    var r = e(this), i = r.data("carousel"), s = e.extend({}, e.fn.carousel.defaults, typeof n == "object" && n), o = typeof n == "string" ? n : s.slide;
                    i || r.data("carousel", i = new t(this, s)), typeof n == "number" ? i.to(n) : o ? i[o]() : s.interval && i.pause().cycle()
                })
            }, e.fn.carousel.defaults = {interval: 5e3,pause: "hover"}, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
                return e.fn.carousel = n, this
            }, e(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
                var n = e(this), r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")), s = e.extend({}, i.data(), n.data()), o;
                i.carousel(s), (o = n.attr("data-slide-to")) && i.data("carousel").pause().to(o).cycle(), t.preventDefault()
            })
        }(window.jQuery), !function(e) {
            "use strict";
            var t = function(t, n) {
                this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
            };
            t.prototype = {constructor: t,dimension: function() {
                    var e = this.$element.hasClass("width");
                    return e ? "width" : "height"
                },show: function() {
                    var t, n, r, i;
                    if (this.transitioning || this.$element.hasClass("in"))
                        return;
                    t = this.dimension(), n = e.camelCase(["scroll", t].join("-")), r = this.$parent && this.$parent.find("> .accordion-group > .in");
                    if (r && r.length) {
                        i = r.data("collapse");
                        if (i && i.transitioning)
                            return;
                        r.collapse("hide"), i || r.data("collapse", null)
                    }
                    this.$element[t](0), this.transition("addClass", e.Event("show"), "shown"), e.support.transition && this.$element[t](this.$element[0][n])
                },hide: function() {
                    var t;
                    if (this.transitioning || !this.$element.hasClass("in"))
                        return;
                    t = this.dimension(), this.reset(this.$element[t]()), this.transition("removeClass", e.Event("hide"), "hidden"), this.$element[t](0)
                },reset: function(e) {
                    var t = this.dimension();
                    return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[e !== null ? "addClass" : "removeClass"]("collapse"), this
                },transition: function(t, n, r) {
                    var i = this, s = function() {
                        n.type == "show" && i.reset(), i.transitioning = 0, i.$element.trigger(r)
                    };
                    this.$element.trigger(n);
                    if (n.isDefaultPrevented())
                        return;
                    this.transitioning = 1, this.$element[t]("in"), e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, s) : s()
                },toggle: function() {
                    this[this.$element.hasClass("in") ? "hide" : "show"]()
                }};
            var n = e.fn.collapse;
            e.fn.collapse = function(n) {
                return this.each(function() {
                    var r = e(this), i = r.data("collapse"), s = e.extend({}, e.fn.collapse.defaults, r.data(), typeof n == "object" && n);
                    i || r.data("collapse", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.collapse.defaults = {toggle: !0}, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
                return e.fn.collapse = n, this
            }, e(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
                var n = e(this), r, i = n.attr("data-target") || t.preventDefault() || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""), s = e(i).data("collapse") ? "toggle" : n.data();
                n[e(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), e(i).collapse(s)
            })
        }(window.jQuery), !function(e) {
            "use strict";
            function r() {
                e(t).each(function() {
                    i(e(this)).removeClass("open")
                })
            }
            function i(t) {
                var n = t.attr("data-target"), r;
                n || (n = t.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")), r = n && e(n);
                if (!r || !r.length)
                    r = t.parent();
                return r
            }
            var t = "[data-toggle=dropdown]", n = function(t) {
                var n = e(t).on("click.dropdown.data-api", this.toggle);
                e("html").on("click.dropdown.data-api", function() {
                    n.parent().removeClass("open")
                })
            };
            n.prototype = {constructor: n,toggle: function(t) {
                    var n = e(this), s, o;
                    if (n.is(".disabled, :disabled"))
                        return;
                    return s = i(n), o = s.hasClass("open"), r(), o || s.toggleClass("open"), n.focus(), !1
                },keydown: function(n) {
                    var r, s, o, u, a, f;
                    if (!/(38|40|27)/.test(n.keyCode))
                        return;
                    r = e(this), n.preventDefault(), n.stopPropagation();
                    if (r.is(".disabled, :disabled"))
                        return;
                    u = i(r), a = u.hasClass("open");
                    if (!a || a && n.keyCode == 27)
                        return n.which == 27 && u.find(t).focus(), r.click();
                    s = e("[role=menu] li:not(.divider):visible a", u);
                    if (!s.length)
                        return;
                    f = s.index(s.filter(":focus")), n.keyCode == 38 && f > 0 && f--, n.keyCode == 40 && f < s.length - 1 && f++, ~f || (f = 0), s.eq(f).focus()
                }};
            var s = e.fn.dropdown;
            e.fn.dropdown = function(t) {
                return this.each(function() {
                    var r = e(this), i = r.data("dropdown");
                    i || r.data("dropdown", i = new n(this)), typeof t == "string" && i[t].call(r)
                })
            }, e.fn.dropdown.Constructor = n, e.fn.dropdown.noConflict = function() {
                return e.fn.dropdown = s, this
            }, e(document).on("click.dropdown.data-api", r).on("click.dropdown.data-api", ".dropdown form", function(e) {
                e.stopPropagation()
            }).on("click.dropdown-menu", function(e) {
                e.stopPropagation()
            }).on("click.dropdown.data-api", t, n.prototype.toggle).on("keydown.dropdown.data-api", t + ", [role=menu]", n.prototype.keydown)
        }(window.jQuery), !function(e) {
            "use strict";
            var t = function(t, n) {
                this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
            };
            t.prototype = {constructor: t,toggle: function() {
                    return this[this.isShown ? "hide" : "show"]()
                },show: function() {
                    var t = this, n = e.Event("show");
                    this.$element.trigger(n);
                    if (this.isShown || n.isDefaultPrevented())
                        return;
                    this.isShown = !0, this.escape(), this.backdrop(function() {
                        var n = e.support.transition && t.$element.hasClass("fade");
                        t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function() {
                            t.$element.focus().trigger("shown")
                        }) : t.$element.focus().trigger("shown")
                    })
                },hide: function(t) {
                    t && t.preventDefault();
                    var n = this;
                    t = e.Event("hide"), this.$element.trigger(t);
                    if (!this.isShown || t.isDefaultPrevented())
                        return;
                    this.isShown = !1, this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
                },enforceFocus: function() {
                    var t = this;
                    e(document).on("focusin.modal", function(e) {
                        t.$element[0] !== e.target && !t.$element.has(e.target).length && t.$element.focus()
                    })
                },escape: function() {
                    var e = this;
                    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
                        t.which == 27 && e.hide()
                    }) : this.isShown || this.$element.off("keyup.dismiss.modal")
                },hideWithTransition: function() {
                    var t = this, n = setTimeout(function() {
                        t.$element.off(e.support.transition.end), t.hideModal()
                    }, 500);
                    this.$element.one(e.support.transition.end, function() {
                        clearTimeout(n), t.hideModal()
                    })
                },hideModal: function() {
                    var e = this;
                    this.$element.hide(), this.backdrop(function() {
                        e.removeBackdrop(), e.$element.trigger("hidden")
                    })
                },removeBackdrop: function() {
                    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
                },backdrop: function(t) {
                    var n = this, r = this.$element.hasClass("fade") ? "fade" : "";
                    if (this.isShown && this.options.backdrop) {
                        var i = e.support.transition && r;
                        this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.$backdrop.click(this.options.backdrop == "static" ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in");
                        if (!t)
                            return;
                        i ? this.$backdrop.one(e.support.transition.end, t) : t()
                    } else
                        !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t()
                }};
            var n = e.fn.modal;
            e.fn.modal = function(n) {
                return this.each(function() {
                    var r = e(this), i = r.data("modal"), s = e.extend({}, e.fn.modal.defaults, r.data(), typeof n == "object" && n);
                    i || r.data("modal", i = new t(this, s)), typeof n == "string" ? i[n]() : s.show && i.show()
                })
            }, e.fn.modal.defaults = {backdrop: 'static',keyboard: !0,show: !0}, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
                return e.fn.modal = n, this
            }, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
                var n = e(this), r = n.attr("href"), i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")), s = i.data("modal") ? "toggle" : e.extend({remote: !/#/.test(r) && r}, i.data(), n.data());
                t.preventDefault(), i.modal(s).one("hide", function() {
                    n.focus()
                })
            })
        }(window.jQuery), !function(e) {
            "use strict";
            var t = function(e, t) {
                this.init("tooltip", e, t)
            };
            t.prototype = {constructor: t,init: function(t, n, r) {
                    var i, s, o, u, a;
                    this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, o = this.options.trigger.split(" ");
                    for (a = o.length; a--; )
                        u = o[a], u == "click" ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : u != "manual" && (i = u == "hover" ? "mouseenter" : "focus", s = u == "hover" ? "mouseleave" : "blur", this.$element.on(i + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
                    this.options.selector ? this._options = e.extend({}, this.options, {trigger: "manual",selector: ""}) : this.fixTitle()
                },getOptions: function(t) {
                    return t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {show: t.delay,hide: t.delay}), t
                },enter: function(t) {
                    var n = e.fn[this.type].defaults, r = {}, i;
                    this._options && e.each(this._options, function(e, t) {
                        n[e] != t && (r[e] = t)
                    }, this), i = e(t.currentTarget)[this.type](r).data(this.type);
                    if (!i.options.delay || !i.options.delay.show)
                        return i.show();
                    clearTimeout(this.timeout), i.hoverState = "in", this.timeout = setTimeout(function() {
                        i.hoverState == "in" && i.show()
                    }, i.options.delay.show)
                },leave: function(t) {
                    var n = e(t.currentTarget)[this.type](this._options).data(this.type);
                    this.timeout && clearTimeout(this.timeout);
                    if (!n.options.delay || !n.options.delay.hide)
                        return n.hide();
                    n.hoverState = "out", this.timeout = setTimeout(function() {
                        n.hoverState == "out" && n.hide()
                    }, n.options.delay.hide)
                },show: function() {
                    var t, n, r, i, s, o, u = e.Event("show");
                    if (this.hasContent() && this.enabled) {
                        this.$element.trigger(u);
                        if (u.isDefaultPrevented())
                            return;
                        t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), s = typeof this.options.placement == "function" ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, t.detach().css({top: 0,left: 0,display: "block"}), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), n = this.getPosition(), r = t[0].offsetWidth, i = t[0].offsetHeight;
                        switch (s) {
                            case "bottom":
                                o = {top: n.top + n.height,left: n.left + n.width / 2 - r / 2};
                                break;
                            case "top":
                                o = {top: n.top - i,left: n.left + n.width / 2 - r / 2};
                                break;
                            case "left":
                                o = {top: n.top + n.height / 2 - i / 2,left: n.left - r};
                                break;
                            case "right":
                                o = {top: n.top + n.height / 2 - i / 2,left: n.left + n.width}
                        }
                        this.applyPlacement(o, s), this.$element.trigger("shown")
                    }
                },applyPlacement: function(e, t) {
                    var n = this.tip(), r = n[0].offsetWidth, i = n[0].offsetHeight, s, o, u, a;
                    n.offset(e).addClass(t).addClass("in"), s = n[0].offsetWidth, o = n[0].offsetHeight, t == "top" && o != i && (e.top = e.top + i - o, a = !0), t == "bottom" || t == "top" ? (u = 0, e.left < 0 && (u = e.left * -2, e.left = 0, n.offset(e), s = n[0].offsetWidth, o = n[0].offsetHeight), this.replaceArrow(u - r + s, s, "left")) : this.replaceArrow(o - i, o, "top"), a && n.offset(e)
                },replaceArrow: function(e, t, n) {
                    this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
                },setContent: function() {
                    var e = this.tip(), t = this.getTitle();
                    e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
                },hide: function() {
                    function i() {
                        var t = setTimeout(function() {
                            n.off(e.support.transition.end).detach()
                        }, 500);
                        n.one(e.support.transition.end, function() {
                            clearTimeout(t), n.detach()
                        })
                    }
                    var t = this, n = this.tip(), r = e.Event("hide");
                    this.$element.trigger(r);
                    if (r.isDefaultPrevented())
                        return;
                    return n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? i() : n.detach(), this.$element.trigger("hidden"), this
                },fixTitle: function() {
                    var e = this.$element;
                    (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
                },hasContent: function() {
                    return this.getTitle()
                },getPosition: function() {
                    var t = this.$element[0];
                    return e.extend({}, typeof t.getBoundingClientRect == "function" ? t.getBoundingClientRect() : {width: t.offsetWidth,height: t.offsetHeight}, this.$element.offset())
                },getTitle: function() {
                    var e, t = this.$element, n = this.options;
                    return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e
                },tip: function() {
                    return this.$tip = this.$tip || e(this.options.template)
                },arrow: function() {
                    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                },validate: function() {
                    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
                },enable: function() {
                    this.enabled = !0
                },disable: function() {
                    this.enabled = !1
                },toggleEnabled: function() {
                    this.enabled = !this.enabled
                },toggle: function(t) {
                    var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
                    n.tip().hasClass("in") ? n.hide() : n.show()
                },destroy: function() {
                    this.hide().$element.off("." + this.type).removeData(this.type)
                }};
            var n = e.fn.tooltip;
            e.fn.tooltip = function(n) {
                return this.each(function() {
                    var r = e(this), i = r.data("tooltip"), s = typeof n == "object" && n;
                    i || r.data("tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {animation: !0,placement: "top",selector: !1,template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger: "hover focus",title: "",delay: 0,html: !1,container: !1}, e.fn.tooltip.noConflict = function() {
                return e.fn.tooltip = n, this
            }
        }(window.jQuery), !function(e) {
            "use strict";
            var t = function(e, t) {
                this.init("popover", e, t)
            };
            t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {constructor: t,setContent: function() {
                    var e = this.tip(), t = this.getTitle(), n = this.getContent();
                    e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in")
                },hasContent: function() {
                    return this.getTitle() || this.getContent()
                },getContent: function() {
                    var e, t = this.$element, n = this.options;
                    return e = (typeof n.content == "function" ? n.content.call(t[0]) : n.content) || t.attr("data-content"), e
                },tip: function() {
                    return this.$tip || (this.$tip = e(this.options.template)), this.$tip
                },destroy: function() {
                    this.hide().$element.off("." + this.type).removeData(this.type)
                }});
            var n = e.fn.popover;
            e.fn.popover = function(n) {
                return this.each(function() {
                    var r = e(this), i = r.data("popover"), s = typeof n == "object" && n;
                    i || r.data("popover", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {placement: "right",trigger: "click",content: "",template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), e.fn.popover.noConflict = function() {
                return e.fn.popover = n, this
            }
        }(window.jQuery), !function(e) {
            "use strict";
            function t(t, n) {
                var r = e.proxy(this.process, this), i = e(t).is("body") ? e(window) : e(t), s;
                this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = i.on("scroll.scroll-spy.data-api", r), this.selector = (this.options.target || (s = e(t).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = e("body"), this.refresh(), this.process()
            }
            t.prototype = {constructor: t,refresh: function() {
                    var t = this, n;
                    this.offsets = e([]), this.targets = e([]), n = this.$body.find(this.selector).map(function() {
                        var n = e(this), r = n.data("target") || n.attr("href"), i = /^#\w/.test(r) && e(r);
                        return i && i.length && [[i.position().top + (!e.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), r]] || null
                    }).sort(function(e, t) {
                        return e[0] - t[0]
                    }).each(function() {
                        t.offsets.push(this[0]), t.targets.push(this[1])
                    })
                },process: function() {
                    var e = this.$scrollElement.scrollTop() + this.options.offset, t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, n = t - this.$scrollElement.height(), r = this.offsets, i = this.targets, s = this.activeTarget, o;
                    if (e >= n)
                        return s != (o = i.last()[0]) && this.activate(o);
                    for (o = r.length; o--; )
                        s != i[o] && e >= r[o] && (!r[o + 1] || e <= r[o + 1]) && this.activate(i[o])
                },activate: function(t) {
                    var n, r;
                    this.activeTarget = t, e(this.selector).parent(".active").removeClass("active"), r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', n = e(r).parent("li").addClass("active"), n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate")
                }};
            var n = e.fn.scrollspy;
            e.fn.scrollspy = function(n) {
                return this.each(function() {
                    var r = e(this), i = r.data("scrollspy"), s = typeof n == "object" && n;
                    i || r.data("scrollspy", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {offset: 10}, e.fn.scrollspy.noConflict = function() {
                return e.fn.scrollspy = n, this
            }, e(window).on("load", function() {
                e('[data-spy="scroll"]').each(function() {
                    var t = e(this);
                    t.scrollspy(t.data())
                })
            })
        }(window.jQuery), !function(e) {
            "use strict";
            var t = function(t) {
                this.element = e(t)
            };
            t.prototype = {constructor: t,show: function() {
                    var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), r = t.attr("data-target"), i, s, o;
                    r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
                    if (t.parent("li").hasClass("active"))
                        return;
                    i = n.find(".active:last a")[0], o = e.Event("show", {relatedTarget: i}), t.trigger(o);
                    if (o.isDefaultPrevented())
                        return;
                    s = e(r), this.activate(t.parent("li"), n), this.activate(s, s.parent(), function() {
                        t.trigger({type: "shown",relatedTarget: i})
                    })
                },activate: function(t, n, r) {
                    function o() {
                        i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
                    }
                    var i = n.find("> .active"), s = r && e.support.transition && i.hasClass("fade");
                    s ? i.one(e.support.transition.end, o) : o(), i.removeClass("in")
                }};
            var n = e.fn.tab;
            e.fn.tab = function(n) {
                return this.each(function() {
                    var r = e(this), i = r.data("tab");
                    i || r.data("tab", i = new t(this)), typeof n == "string" && i[n]()
                })
            }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
                return e.fn.tab = n, this
            }, e(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
                t.preventDefault(), e(this).tab("show")
            })
        }(window.jQuery), !function(e) {
            "use strict";
            var t = function(t, n) {
                this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = e(this.options.menu), this.shown = !1, this.listen()
            };
            t.prototype = {constructor: t,select: function() {
                    var e = this.$menu.find(".active").attr("data-value");
                    return this.$element.val(this.updater(e)).change(), this.hide()
                },updater: function(e) {
                    return e
                },show: function() {
                    var t = e.extend({}, this.$element.position(), {height: this.$element[0].offsetHeight});
                    return this.$menu.insertAfter(this.$element).css({top: t.top + t.height,left: t.left}).show(), this.shown = !0, this
                },hide: function() {
                    return this.$menu.hide(), this.shown = !1, this
                },lookup: function(t) {
                    var n;
                    return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (n = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, n ? this.process(n) : this)
                },process: function(t) {
                    var n = this;
                    return t = e.grep(t, function(e) {
                        return n.matcher(e)
                    }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
                },matcher: function(e) {
                    return ~e.toLowerCase().indexOf(this.query.toLowerCase())
                },sorter: function(e) {
                    var t = [], n = [], r = [], i;
                    while (i = e.shift())
                        i.toLowerCase().indexOf(this.query.toLowerCase()) ? ~i.indexOf(this.query) ? n.push(i) : r.push(i) : t.push(i);
                    return t.concat(n, r)
                },highlighter: function(e) {
                    var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                    return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t) {
                        return "<strong>" + t + "</strong>"
                    })
                },render: function(t) {
                    var n = this;
                    return t = e(t).map(function(t, r) {
                        return t = e(n.options.item).attr("data-value", r), t.find("a").html(n.highlighter(r)), t[0]
                    }), t.first().addClass("active"), this.$menu.html(t), this
                },next: function(t) {
                    var n = this.$menu.find(".active").removeClass("active"), r = n.next();
                    r.length || (r = e(this.$menu.find("li")[0])), r.addClass("active")
                },prev: function(e) {
                    var t = this.$menu.find(".active").removeClass("active"), n = t.prev();
                    n.length || (n = this.$menu.find("li").last()), n.addClass("active")
                },listen: function() {
                    this.$element.on("focus", e.proxy(this.focus, this)).on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", e.proxy(this.keydown, this)), this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this)).on("mouseleave", "li", e.proxy(this.mouseleave, this))
                },eventSupported: function(e) {
                    var t = e in this.$element;
                    return t || (this.$element.setAttribute(e, "return;"), t = typeof this.$element[e] == "function"), t
                },move: function(e) {
                    if (!this.shown)
                        return;
                    switch (e.keyCode) {
                        case 9:
                        case 13:
                        case 27:
                            e.preventDefault();
                            break;
                        case 38:
                            e.preventDefault(), this.prev();
                            break;
                        case 40:
                            e.preventDefault(), this.next()
                    }
                    e.stopPropagation()
                },keydown: function(t) {
                    this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [40, 38, 9, 13, 27]), this.move(t)
                },keypress: function(e) {
                    if (this.suppressKeyPressRepeat)
                        return;
                    this.move(e)
                },keyup: function(e) {
                    switch (e.keyCode) {
                        case 40:
                        case 38:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        case 9:
                        case 13:
                            if (!this.shown)
                                return;
                            this.select();
                            break;
                        case 27:
                            if (!this.shown)
                                return;
                            this.hide();
                            break;
                        default:
                            this.lookup()
                    }
                    e.stopPropagation(), e.preventDefault()
                },focus: function(e) {
                    this.focused = !0
                },blur: function(e) {
                    this.focused = !1, !this.mousedover && this.shown && this.hide()
                },click: function(e) {
                    e.stopPropagation(), e.preventDefault(), this.select(), this.$element.focus()
                },mouseenter: function(t) {
                    this.mousedover = !0, this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active")
                },mouseleave: function(e) {
                    this.mousedover = !1, !this.focused && this.shown && this.hide()
                }};
            var n = e.fn.typeahead;
            e.fn.typeahead = function(n) {
                return this.each(function() {
                    var r = e(this), i = r.data("typeahead"), s = typeof n == "object" && n;
                    i || r.data("typeahead", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.typeahead.defaults = {source: [],items: 8,menu: '<ul class="typeahead dropdown-menu"></ul>',item: '<li><a href="#"></a></li>',minLength: 1}, e.fn.typeahead.Constructor = t, e.fn.typeahead.noConflict = function() {
                return e.fn.typeahead = n, this
            }, e(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(t) {
                var n = e(this);
                if (n.data("typeahead"))
                    return;
                n.typeahead(n.data())
            })
        }(window.jQuery), !function(e) {
            "use strict";
            var t = function(t, n) {
                this.options = e.extend({}, e.fn.affix.defaults, n), this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)).on("click.affix.data-api", e.proxy(function() {
                    setTimeout(e.proxy(this.checkPosition, this), 1)
                }, this)), this.$element = e(t), this.checkPosition()
            };
            t.prototype.checkPosition = function() {
                if (!this.$element.is(":visible"))
                    return;
                var t = e(document).height(), n = this.$window.scrollTop(), r = this.$element.offset(), i = this.options.offset, s = i.bottom, o = i.top, u = "affix affix-top affix-bottom", a;
                typeof i != "object" && (s = o = i), typeof o == "function" && (o = i.top()), typeof s == "function" && (s = i.bottom()), a = this.unpin != null && n + this.unpin <= r.top ? !1 : s != null && r.top + this.$element.height() >= t - s ? "bottom" : o != null && n <= o ? "top" : !1;
                if (this.affixed === a)
                    return;
                this.affixed = a, this.unpin = a == "bottom" ? r.top - n : null, this.$element.removeClass(u).addClass("affix" + (a ? "-" + a : ""))
            };
            var n = e.fn.affix;
            e.fn.affix = function(n) {
                return this.each(function() {
                    var r = e(this), i = r.data("affix"), s = typeof n == "object" && n;
                    i || r.data("affix", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.affix.Constructor = t, e.fn.affix.defaults = {offset: 0}, e.fn.affix.noConflict = function() {
                return e.fn.affix = n, this
            }, e(window).on("load", function() {
                e('[data-spy="affix"]').each(function() {
                    var t = e(this), n = t.data();
                    n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
                })
            })
        }(window.jQuery);
    })($);
});
;
define("bootstrap/plugins/bootstrap-editable/bootstrap-editable", ["jquery"], function(require, exports, module) {
    var jQuery = require('jquery');
    /*! X-editable - v1.4.3
     * In-place editing with Twitter Bootstrap, jQuery UI or pure jQuery
     * http://github.com/vitalets/x-editable
     * Copyright (c) 2013 Vitaliy Potapov; Licensed MIT */
    (function(e) {
        var t = function(t, n) {
            this.options = e.extend({}, e.fn.editableform.defaults, n), this.$div = e(t), this.options.scope || (this.options.scope = this)
        };
        t.prototype = {constructor: t,initInput: function() {
                this.input = this.options.input, this.value = this.input.str2value(this.options.value)
            },initTemplate: function() {
                this.$form = e(e.fn.editableform.template)
            },initButtons: function() {
                this.$form.find(".editable-buttons").append(e.fn.editableform.buttons)
            },render: function() {
                this.$loading = e(e.fn.editableform.loading), this.$div.empty().append(this.$loading), this.initTemplate(), this.options.showbuttons ? this.initButtons() : this.$form.find(".editable-buttons").remove(), this.showLoading(), this.$div.triggerHandler("rendering"), this.initInput(), this.input.prerender(), this.$form.find("div.editable-input").append(this.input.$tpl), this.$div.append(this.$form), e.when(this.input.render()).then(e.proxy(function() {
                    this.options.showbuttons || this.input.autosubmit(), this.$form.find(".editable-cancel").click(e.proxy(this.cancel, this)), this.input.error ? (this.error(this.input.error), this.$form.find(".editable-submit").attr("disabled", !0), this.input.$input.attr("disabled", !0), this.$form.submit(function(e) {
                        e.preventDefault()
                    })) : (this.error(!1), this.input.$input.removeAttr("disabled"), this.$form.find(".editable-submit").removeAttr("disabled"), this.input.value2input(this.value), this.$form.submit(e.proxy(this.submit, this))), this.$div.triggerHandler("rendered"), this.showForm(), this.input.postrender && this.input.postrender()
                }, this))
            },cancel: function() {
                this.$div.triggerHandler("cancel")
            },showLoading: function() {
                var e, t;
                this.$form ? (e = this.$form.outerWidth(), t = this.$form.outerHeight(), e && this.$loading.width(e), t && this.$loading.height(t), this.$form.hide()) : (e = this.$loading.parent().width(), e && this.$loading.width(e)), this.$loading.show()
            },showForm: function(e) {
                this.$loading.hide(), this.$form.show(), e !== !1 && this.input.activate(), this.$div.triggerHandler("show")
            },error: function(t) {
                var n = this.$form.find(".control-group"), r = this.$form.find(".editable-error-block"), i;
                if (t === !1)
                    n.removeClass(e.fn.editableform.errorGroupClass), r.removeClass(e.fn.editableform.errorBlockClass).empty().hide();
                else {
                    if (t) {
                        i = t.split("\n");
                        for (var s = 0; s < i.length; s++)
                            i[s] = e("<div>").text(i[s]).html();
                        t = i.join("<br>")
                    }
                    n.addClass(e.fn.editableform.errorGroupClass), r.addClass(e.fn.editableform.errorBlockClass).html(t).show()
                }
            },submit: function(t) {
                t.stopPropagation(), t.preventDefault();
                var n, r = this.input.input2value();
                if (n = this.validate(r)) {
                    this.error(n), this.showForm();
                    return
                }
                if (!this.options.savenochange && this.input.value2str(r) == this.input.value2str(this.value)) {
                    this.$div.triggerHandler("nochange");
                    return
                }
                e.when(this.save(r)).done(e.proxy(function(e) {
                    var t = typeof this.options.success == "function" ? this.options.success.call(this.options.scope, e, r) : null;
                    if (t === !1) {
                        this.error(!1), this.showForm(!1);
                        return
                    }
                    if (typeof t == "string") {
                        this.error(t), this.showForm();
                        return
                    }
                    t && typeof t == "object" && t.hasOwnProperty("newValue") && (r = t.newValue), this.error(!1), this.value = r, this.$div.triggerHandler("save", {newValue: r,response: e})
                }, this)).fail(e.proxy(function(e) {
                    this.error(typeof e == "string" ? e : e.responseText || e.statusText || "Unknown error!"), this.showForm()
                }, this))
            },save: function(t) {
                var n = this.input.value2submit(t);
                this.options.pk = e.fn.editableutils.tryParseJson(this.options.pk, !0);
                var r = typeof this.options.pk == "function" ? this.options.pk.call(this.options.scope) : this.options.pk, i = !!(typeof this.options.url == "function" || this.options.url && (this.options.send === "always" || this.options.send === "auto" && r)), s;
                if (i)
                    return this.showLoading(), s = {name: this.options.name || "",value: n,pk: r}, typeof this.options.params == "function" ? s = this.options.params.call(this.options.scope, s) : (this.options.params = e.fn.editableutils.tryParseJson(this.options.params, !0), e.extend(s, this.options.params)), typeof this.options.url == "function" ? this.options.url.call(this.options.scope, s) : e.ajax(e.extend({url: this.options.url,data: s,type: "POST"}, this.options.ajaxOptions))
            },validate: function(e) {
                e === undefined && (e = this.value);
                if (typeof this.options.validate == "function")
                    return this.options.validate.call(this.options.scope, e)
            },option: function(e, t) {
                e in this.options && (this.options[e] = t), e === "value" && this.setValue(t)
            },setValue: function(e, t) {
                t ? this.value = this.input.str2value(e) : this.value = e, this.$form && this.$form.is(":visible") && this.input.value2input(this.value)
            }}, e.fn.editableform = function(n) {
            var r = arguments;
            return this.each(function() {
                var i = e(this), s = i.data("editableform"), o = typeof n == "object" && n;
                s || i.data("editableform", s = new t(this, o)), typeof n == "string" && s[n].apply(s, Array.prototype.slice.call(r, 1))
            })
        }, e.fn.editableform.Constructor = t, e.fn.editableform.defaults = {type: "text",url: null,params: null,name: null,pk: null,value: null,send: "auto",validate: null,success: null,ajaxOptions: null,showbuttons: !0,scope: null,savenochange: !1}, e.fn.editableform.template = '<form class="form-inline editableform"><div class="control-group"><div><div class="editable-input"></div><div class="editable-buttons"></div></div><div class="editable-error-block"></div></div></form>', e.fn.editableform.loading = '<div class="editableform-loading"></div>', e.fn.editableform.buttons = '<button type="submit" class="editable-submit">ok</button><button type="button" class="editable-cancel">cancel</button>', e.fn.editableform.errorGroupClass = null, e.fn.editableform.errorBlockClass = "editable-error"
    })(window.jQuery), function(e) {
        e.fn.editableutils = {inherit: function(e, t) {
                var n = function() {
                };
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.superclass = t.prototype
            },setCursorPosition: function(e, t) {
                if (e.setSelectionRange)
                    e.setSelectionRange(t, t);
                else if (e.createTextRange) {
                    var n = e.createTextRange();
                    n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select()
                }
            },tryParseJson: function(e, t) {
                if (typeof e == "string" && e.length && e.match(/^[\{\[].*[\}\]]$/))
                    if (t)
                        try {
                            e = (new Function("return " + e))()
                        } catch (n) {
                        }finally {
                            return e
                        }
                    else
                        e = (new Function("return " + e))();
                return e
            },sliceObj: function(t, n, r) {
                var i, s, o = {};
                if (!e.isArray(n) || !n.length)
                    return o;
                for (var u = 0; u < n.length; u++) {
                    i = n[u], t.hasOwnProperty(i) && (o[i] = t[i]);
                    if (r === !0)
                        continue;
                    s = i.toLowerCase(), t.hasOwnProperty(s) && (o[i] = t[s])
                }
                return o
            },getConfigData: function(t) {
                var n = {};
                return e.each(t.data(), function(e, t) {
                    if (typeof t != "object" || t && typeof t == "object" && (t.constructor === Object || t.constructor === Array))
                        n[e] = t
                }), n
            },objectKeys: function(e) {
                if (Object.keys)
                    return Object.keys(e);
                if (e !== Object(e))
                    throw new TypeError("Object.keys called on a non-object");
                var t = [], n;
                for (n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            },escape: function(t) {
                return e("<div>").text(t).html()
            },itemsByValue: function(t, n, r) {
                if (!n || t === null)
                    return [];
                r = r || "value";
                var i = e.isArray(t), s = [], o = this;
                return e.each(n, function(n, u) {
                    u.children ? s = s.concat(o.itemsByValue(t, u.children, r)) : i ? e.grep(t, function(e) {
                        return e == (u && typeof u === "object" ? u[r] : u)
                    }).length && s.push(u) : t == (u && typeof u === "object" ? u[r] : u) && s.push(u)
                }), s
            },createInput: function(t) {
                var n, r, i, s = t.type;
                return s === "date" && (t.mode === "inline" ? e.fn.editabletypes.datefield ? s = "datefield" : e.fn.editabletypes.dateuifield && (s = "dateuifield") : e.fn.editabletypes.date ? s = "date" : e.fn.editabletypes.dateui && (s = "dateui"), s === "date" && !e.fn.editabletypes.date && (s = "combodate")), s === "wysihtml5" && !e.fn.editabletypes[s] && (s = "textarea"), typeof e.fn.editabletypes[s] == "function" ? (n = e.fn.editabletypes[s], r = this.sliceObj(t, this.objectKeys(n.defaults)), i = new n(r), i) : (e.error("Unknown type: " + s), !1)
            }}
    }(window.jQuery), function(e) {
        var t = function(e, t) {
            this.init(e, t)
        }, n = function(e, t) {
            this.init(e, t)
        };
        t.prototype = {containerName: null,innerCss: null,init: function(n, r) {
                this.$element = e(n), this.options = e.extend({}, e.fn.editableContainer.defaults, r), this.splitOptions(), this.formOptions.scope = this.$element[0], this.initContainer(), this.$element.on("destroyed", e.proxy(function() {
                    this.destroy()
                }, this)), e(document).data("editable-handlers-attached") || (e(document).on("keyup.editable", function(t) {
                    t.which === 27 && e(".editable-open").editableContainer("hide")
                }), e(document).on("click.editable", function(n) {
                    var r = e(n.target), i, s = [".editable-container", ".ui-datepicker-header", ".modal-backdrop", ".bootstrap-wysihtml5-insert-image-modal", ".bootstrap-wysihtml5-insert-link-modal"];
                    for (i = 0; i < s.length; i++)
                        if (r.is(s[i]) || r.parents(s[i]).length)
                            return;
                    t.prototype.closeOthers(n.target)
                }), e(document).data("editable-handlers-attached", !0))
            },splitOptions: function() {
                this.containerOptions = {}, this.formOptions = {};
                var t = e.fn[this.containerName].defaults;
                for (var n in this.options)
                    n in t ? this.containerOptions[n] = this.options[n] : this.formOptions[n] = this.options[n]
            },tip: function() {
                return this.container() ? this.container().$tip : null
            },container: function() {
                return this.$element.data(this.containerDataName || this.containerName)
            },call: function() {
                this.$element[this.containerName].apply(this.$element, arguments)
            },initContainer: function() {
                this.call(this.containerOptions)
            },renderForm: function() {
                this.$form.editableform(this.formOptions).on({save: e.proxy(this.save, this),nochange: e.proxy(function() {
                        this.hide("nochange")
                    }, this),cancel: e.proxy(function() {
                        this.hide("cancel")
                    }, this),show: e.proxy(this.setPosition, this),rendering: e.proxy(this.setPosition, this),resize: e.proxy(this.setPosition, this),rendered: e.proxy(function() {
                        this.$element.triggerHandler("shown")
                    }, this)}).editableform("render")
            },show: function(t) {
                this.$element.addClass("editable-open"), t !== !1 && this.closeOthers(this.$element[0]), this.innerShow(), this.tip().addClass("editable-container"), this.$form, this.$form = e("<div>"), this.tip().is(this.innerCss) ? this.tip().append(this.$form) : this.tip().find(this.innerCss).append(this.$form), this.renderForm()
            },hide: function(e) {
                if (!this.tip() || !this.tip().is(":visible") || !this.$element.hasClass("editable-open"))
                    return;
                this.$element.removeClass("editable-open"), this.innerHide(), this.$element.triggerHandler("hidden", e)
            },innerShow: function() {
            },innerHide: function() {
            },toggle: function(e) {
                this.container() && this.tip() && this.tip().is(":visible") ? this.hide() : this.show(e)
            },setPosition: function() {
            },save: function(e, t) {
                this.$element.triggerHandler("save", t), this.hide("save")
            },option: function(e, t) {
                this.options[e] = t, e in this.containerOptions ? (this.containerOptions[e] = t, this.setContainerOption(e, t)) : (this.formOptions[e] = t, this.$form && this.$form.editableform("option", e, t))
            },setContainerOption: function(e, t) {
                this.call("option", e, t)
            },destroy: function() {
                this.hide(), this.innerDestroy(), this.$element.off("destroyed"), this.$element.removeData("editableContainer")
            },innerDestroy: function() {
            },closeOthers: function(t) {
                e(".editable-open").each(function(n, r) {
                    if (r === t || e(r).find(t).length)
                        return;
                    var i = e(r), s = i.data("editableContainer");
                    if (!s)
                        return;
                    s.options.onblur === "cancel" ? i.data("editableContainer").hide("onblur") : s.options.onblur === "submit" && i.data("editableContainer").tip().find("form").submit()
                })
            },activate: function() {
                this.tip && this.tip().is(":visible") && this.$form && this.$form.data("editableform").input.activate()
            }}, e.fn.editableContainer = function(r) {
            var i = arguments;
            return this.each(function() {
                var s = e(this), o = "editableContainer", u = s.data(o), a = typeof r == "object" && r, f = a.mode === "inline" ? n : t;
                u || s.data(o, u = new f(this, a)), typeof r == "string" && u[r].apply(u, Array.prototype.slice.call(i, 1))
            })
        }, e.fn.editableContainer.Popup = t, e.fn.editableContainer.Inline = n, e.fn.editableContainer.defaults = {value: null,placement: "top",autohide: !0,onblur: "cancel",anim: !1,mode: "popup"}, jQuery.event.special.destroyed = {remove: function(e) {
                e.handler && e.handler()
            }}
    }(window.jQuery), function(e) {
        e.extend(e.fn.editableContainer.Inline.prototype, e.fn.editableContainer.Popup.prototype, {containerName: "editableform",innerCss: ".editable-inline",initContainer: function() {
                this.$tip = e("<span></span>").addClass("editable-inline"), this.options.anim || (this.options.anim = 0)
            },splitOptions: function() {
                this.containerOptions = {}, this.formOptions = this.options
            },tip: function() {
                return this.$tip
            },innerShow: function() {
                this.$element.hide(), this.tip().insertAfter(this.$element).show()
            },innerHide: function() {
                this.$tip.hide(this.options.anim, e.proxy(function() {
                    this.$element.show(), this.innerDestroy()
                }, this))
            },innerDestroy: function() {
                this.tip() && this.tip().empty().remove()
            }})
    }(window.jQuery), function(e) {
        var t = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, e.fn.editable.defaults, n, e.fn.editableutils.getConfigData(this.$element)), this.options.selector ? this.initLive() : this.init()
        };
        t.prototype = {constructor: t,init: function() {
                var t = !1, n, r;
                this.options.name = this.options.name || this.$element.attr("id"), this.options.scope = this.$element[0], this.input = e.fn.editableutils.createInput(this.options);
                if (!this.input)
                    return;
                this.options.value === undefined || this.options.value === null ? (this.value = this.input.html2value(e.trim(this.$element.html())), t = !0) : (this.options.value = e.fn.editableutils.tryParseJson(this.options.value, !0), typeof this.options.value == "string" ? this.value = this.input.str2value(this.options.value) : this.value = this.options.value), this.$element.addClass("editable"), this.options.toggle !== "manual" ? (this.$element.addClass("editable-click"), this.$element.on(this.options.toggle + ".editable", e.proxy(function(e) {
                    e.preventDefault();
                    if (this.options.toggle === "mouseenter")
                        this.show();
                    else {
                        var t = this.options.toggle !== "click";
                        this.toggle(t)
                    }
                }, this))) : this.$element.attr("tabindex", -1);
                switch (this.options.autotext) {
                    case "always":
                        n = !0;
                        break;
                    case "auto":
                        n = !e.trim(this.$element.text()).length && this.value !== null && this.value !== undefined && !t;
                        break;
                    default:
                        n = !1
                }
                e.when(n ? this.render() : !0).then(e.proxy(function() {
                    this.options.disabled ? this.disable() : this.enable(), this.$element.triggerHandler("init", this)
                }, this))
            },initLive: function() {
                var t = this.options.selector;
                this.options.selector = !1, this.options.autotext = "never", this.$element.on(this.options.toggle + ".editable", t, e.proxy(function(t) {
                    var n = e(t.target);
                    n.data("editable") || (n.hasClass(this.options.emptyclass) && n.empty(), n.editable(this.options).trigger(t))
                }, this))
            },render: function(e) {
                if (this.options.display === !1)
                    return;
                return this.input.value2htmlFinal ? this.input.value2html(this.value, this.$element[0], this.options.display, e) : typeof this.options.display == "function" ? this.options.display.call(this.$element[0], this.value, e) : this.input.value2html(this.value, this.$element[0])
            },enable: function() {
                this.options.disabled = !1, this.$element.removeClass("editable-disabled"), this.handleEmpty(this.isEmpty), this.options.toggle !== "manual" && this.$element.attr("tabindex") === "-1" && this.$element.removeAttr("tabindex")
            },disable: function() {
                this.options.disabled = !0, this.hide(), this.$element.addClass("editable-disabled"), this.handleEmpty(this.isEmpty), this.$element.attr("tabindex", -1)
            },toggleDisabled: function() {
                this.options.disabled ? this.enable() : this.disable()
            },option: function(t, n) {
                if (t && typeof t == "object") {
                    e.each(t, e.proxy(function(t, n) {
                        this.option(e.trim(t), n)
                    }, this));
                    return
                }
                this.options[t] = n;
                if (t === "disabled")
                    return n ? this.disable() : this.enable();
                t === "value" && this.setValue(n), this.container && this.container.option(t, n), this.input.option && this.input.option(t, n)
            },handleEmpty: function(t) {
                if (this.options.display === !1)
                    return;
                this.isEmpty = t !== undefined ? t : e.trim(this.$element.text()) === "", this.options.disabled ? this.isEmpty && (this.$element.empty(), this.options.emptyclass && this.$element.removeClass(this.options.emptyclass)) : this.isEmpty ? (this.$element.text(this.options.emptytext), this.options.emptyclass && this.$element.addClass(this.options.emptyclass)) : this.options.emptyclass && this.$element.removeClass(this.options.emptyclass)
            },show: function(t) {
                if (this.options.disabled)
                    return;
                if (!this.container) {
                    var n = e.extend({}, this.options, {value: this.value,input: this.input});
                    this.$element.editableContainer(n), this.$element.on("save.internal", e.proxy(this.save, this)), this.container = this.$element.data("editableContainer")
                } else if (this.container.tip().is(":visible"))
                    return;
                this.container.show(t)
            },hide: function() {
                this.container && this.container.hide()
            },toggle: function(e) {
                this.container && this.container.tip().is(":visible") ? this.hide() : this.show(e)
            },save: function(e, t) {
                if (this.options.unsavedclass) {
                    var n = !1;
                    n = n || typeof this.options.url == "function", n = n || this.options.display === !1, n = n || t.response !== undefined, n = n || this.options.savenochange && this.input.value2str(this.value) !== this.input.value2str(t.newValue), n ? this.$element.removeClass(this.options.unsavedclass) : this.$element.addClass(this.options.unsavedclass)
                }
                this.setValue(t.newValue, !1, t.response)
            },validate: function() {
                if (typeof this.options.validate == "function")
                    return this.options.validate.call(this, this.value)
            },setValue: function(t, n, r) {
                n ? this.value = this.input.str2value(t) : this.value = t, this.container && this.container.option("value", this.value), e.when(this.render(r)).then(e.proxy(function() {
                    this.handleEmpty()
                }, this))
            },activate: function() {
                this.container && this.container.activate()
            },destroy: function() {
                this.container && this.container.destroy(), this.options.toggle !== "manual" && (this.$element.removeClass("editable-click"), this.$element.off(this.options.toggle + ".editable")), this.$element.off("save.internal"), this.$element.removeClass("editable"), this.$element.removeClass("editable-open"), this.$element.removeData("editable")
            }}, e.fn.editable = function(n) {
            var r = {}, i = arguments, s = "editable";
            switch (n) {
                case "validate":
                    return this.each(function() {
                        var t = e(this), n = t.data(s), i;
                        n && (i = n.validate()) && (r[n.options.name] = i)
                    }), r;
                case "getValue":
                    return this.each(function() {
                        var t = e(this), n = t.data(s);
                        n && n.value !== undefined && n.value !== null && (r[n.options.name] = n.input.value2submit(n.value))
                    }), r;
                case "submit":
                    var o = arguments[1] || {}, u = this, a = this.editable("validate"), f;
                    return e.isEmptyObject(a) ? (f = this.editable("getValue"), o.data && e.extend(f, o.data), e.ajax(e.extend({url: o.url,data: f,type: "POST"}, o.ajaxOptions)).success(function(e) {
                        typeof o.success == "function" && o.success.call(u, e, o)
                    }).error(function() {
                        typeof o.error == "function" && o.error.apply(u, arguments)
                    })) : typeof o.error == "function" && o.error.call(u, a), this
            }
            return this.each(function() {
                var r = e(this), o = r.data(s), u = typeof n == "object" && n;
                o || r.data(s, o = new t(this, u)), typeof n == "string" && o[n].apply(o, Array.prototype.slice.call(i, 1))
            })
        }, e.fn.editable.defaults = {type: "text",disabled: !1,toggle: "click",emptytext: "Empty",autotext: "auto",value: null,display: null,emptyclass: "editable-empty",unsavedclass: "editable-unsaved",selector: null}
    }(window.jQuery), function(e) {
        e.fn.editabletypes = {};
        var t = function() {
        };
        t.prototype = {init: function(t, n, r) {
                this.type = t, this.options = e.extend({}, r, n)
            },prerender: function() {
                this.$tpl = e(this.options.tpl), this.$input = this.$tpl, this.$clear = null, this.error = null
            },render: function() {
            },value2html: function(t, n) {
                e(n).text(t)
            },html2value: function(t) {
                return e("<div>").html(t).text()
            },value2str: function(e) {
                return e
            },str2value: function(e) {
                return e
            },value2submit: function(e) {
                return e
            },value2input: function(e) {
                this.$input.val(e)
            },input2value: function() {
                return this.$input.val()
            },activate: function() {
                this.$input.is(":visible") && this.$input.focus()
            },clear: function() {
                this.$input.val(null)
            },escape: function(t) {
                return e("<div>").text(t).html()
            },autosubmit: function() {
            },setClass: function() {
                this.options.inputclass && this.$input.addClass(this.options.inputclass)
            },setAttr: function(e) {
                this.options[e] !== undefined && this.options[e] !== null && this.$input.attr(e, this.options[e])
            },option: function(e, t) {
                this.options[e] = t
            }}, t.defaults = {tpl: "",inputclass: "input-medium",scope: null}, e.extend(e.fn.editabletypes, {abstractinput: t})
    }(window.jQuery), function(e) {
        var t = function(e) {
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {render: function() {
                var t = e.Deferred();
                return this.error = null, this.onSourceReady(function() {
                    this.renderList(), t.resolve()
                }, function() {
                    this.error = this.options.sourceError, t.resolve()
                }), t.promise()
            },html2value: function(e) {
                return null
            },value2html: function(t, n, r, i) {
                var s = e.Deferred(), o = function() {
                    typeof r == "function" ? r.call(n, t, this.sourceData, i) : this.value2htmlFinal(t, n), s.resolve()
                };
                return t === null ? o.call(this) : this.onSourceReady(o, function() {
                    s.resolve()
                }), s.promise()
            },onSourceReady: function(t, n) {
                if (e.isArray(this.sourceData)) {
                    t.call(this);
                    return
                }
                try {
                    this.options.source = e.fn.editableutils.tryParseJson(this.options.source, !1)
                } catch (r) {
                    n.call(this);
                    return
                }
                var i = this.options.source;
                e.isFunction(i) && (i = i.call(this.options.scope));
                if (typeof i == "string") {
                    if (this.options.sourceCache) {
                        var s = i, o;
                        e(document).data(s) || e(document).data(s, {}), o = e(document).data(s);
                        if (o.loading === !1 && o.sourceData) {
                            this.sourceData = o.sourceData, this.doPrepend(), t.call(this);
                            return
                        }
                        if (o.loading === !0) {
                            o.callbacks.push(e.proxy(function() {
                                this.sourceData = o.sourceData, this.doPrepend(), t.call(this)
                            }, this)), o.err_callbacks.push(e.proxy(n, this));
                            return
                        }
                        o.loading = !0, o.callbacks = [], o.err_callbacks = []
                    }
                    e.ajax({url: i,type: "get",cache: !1,dataType: "json",success: e.proxy(function(r) {
                            o && (o.loading = !1), this.sourceData = this.makeArray(r), e.isArray(this.sourceData) ? (o && (o.sourceData = this.sourceData, e.each(o.callbacks, function() {
                                this.call()
                            })), this.doPrepend(), t.call(this)) : (n.call(this), o && e.each(o.err_callbacks, function() {
                                this.call()
                            }))
                        }, this),error: e.proxy(function() {
                            n.call(this), o && (o.loading = !1, e.each(o.err_callbacks, function() {
                                this.call()
                            }))
                        }, this)})
                } else
                    this.sourceData = this.makeArray(i), e.isArray(this.sourceData) ? (this.doPrepend(), t.call(this)) : n.call(this)
            },doPrepend: function() {
                if (this.options.prepend === null || this.options.prepend === undefined)
                    return;
                e.isArray(this.prependData) || (e.isFunction(this.options.prepend) && (this.options.prepend = this.options.prepend.call(this.options.scope)), this.options.prepend = e.fn.editableutils.tryParseJson(this.options.prepend, !0), typeof this.options.prepend == "string" && (this.options.prepend = {"": this.options.prepend}), this.prependData = this.makeArray(this.options.prepend)), e.isArray(this.prependData) && e.isArray(this.sourceData) && (this.sourceData = this.prependData.concat(this.sourceData))
            },renderList: function() {
            },value2htmlFinal: function(e, t) {
            },makeArray: function(t) {
                var n, r, i = [], s, o;
                if (!t || typeof t == "string")
                    return null;
                if (e.isArray(t)) {
                    o = function(e, t) {
                        r = {value: e,text: t};
                        if (n++ >= 2)
                            return !1
                    };
                    for (var u = 0; u < t.length; u++)
                        s = t[u], typeof s == "object" ? (n = 0, e.each(s, o), n === 1 ? i.push(r) : n > 1 && (s.children && (s.children = this.makeArray(s.children)), i.push(s))) : i.push({value: s,text: s})
                } else
                    e.each(t, function(e, t) {
                        i.push({value: e,text: t})
                    });
                return i
            },option: function(e, t) {
                this.options[e] = t, e === "source" && (this.sourceData = null), e === "prepend" && (this.prependData = null)
            }}), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {source: null,prepend: !1,sourceError: "Error when loading list",sourceCache: !0}), e.fn.editabletypes.list = t
    }(window.jQuery), function(e) {
        var t = function(e) {
            this.init("text", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {render: function() {
                this.renderClear(), this.setClass(), this.setAttr("placeholder")
            },activate: function() {
                this.$input.is(":visible") && (this.$input.focus(), e.fn.editableutils.setCursorPosition(this.$input.get(0), this.$input.val().length), this.toggleClear && this.toggleClear())
            },renderClear: function() {
                this.options.clear && (this.$clear = e('<span class="editable-clear-x"></span>'), this.$input.after(this.$clear).css("padding-right", 24).keyup(e.proxy(function(t) {
                    if (~e.inArray(t.keyCode, [40, 38, 9, 13, 27]))
                        return;
                    clearTimeout(this.t);
                    var n = this;
                    this.t = setTimeout(function() {
                        n.toggleClear(t)
                    }, 100)
                }, this)).parent().css("position", "relative"), this.$clear.click(e.proxy(this.clear, this)))
            },postrender: function() {
                if (this.$clear) {
                    var e = this.$input.outerHeight() || 20, t = (e - this.$clear.height()) / 2;
                    t < 3 && (t = 3), this.$clear.css({bottom: t,right: t})
                }
            },toggleClear: function(e) {
                if (!this.$clear)
                    return;
                var t = this.$input.val().length, n = this.$clear.is(":visible");
                t && !n && this.$clear.show(), !t && n && this.$clear.hide()
            },clear: function() {
                this.$clear.hide(), this.$input.val("").focus()
            }}), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {tpl: '<input type="text">',placeholder: null,clear: !0}), e.fn.editabletypes.text = t
    }(window.jQuery), function(e) {
        var t = function(e) {
            this.init("textarea", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {render: function() {
                this.setClass(), this.setAttr("placeholder"), this.setAttr("rows"), this.$input.keydown(function(t) {
                    t.ctrlKey && t.which === 13 && e(this).closest("form").submit()
                })
            },value2html: function(t, n) {
                var r = "", i;
                if (t) {
                    i = t.split("\n");
                    for (var s = 0; s < i.length; s++)
                        i[s] = e("<div>").text(i[s]).html();
                    r = i.join("<br>")
                }
                e(n).html(r)
            },html2value: function(t) {
                if (!t)
                    return "";
                var n = new RegExp(String.fromCharCode(10), "g"), r = t.split(/<br\s*\/?>/i);
                for (var i = 0; i < r.length; i++) {
                    var s = e("<div>").html(r[i]).text();
                    s = s.replace(n, ""), r[i] = s
                }
                return r.join("\n")
            },activate: function() {
                e.fn.editabletypes.text.prototype.activate.call(this)
            }}), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {tpl: "<textarea></textarea>",inputclass: "input-large",placeholder: null,rows: 7}), e.fn.editabletypes.textarea = t
    }(window.jQuery), function(e) {
        var t = function(e) {
            this.init("select", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.list), e.extend(t.prototype, {renderList: function() {
                this.$input.empty();
                var t = function(n, r) {
                    if (e.isArray(r))
                        for (var i = 0; i < r.length; i++)
                            r[i].children ? n.append(t(e("<optgroup>", {label: r[i].text}), r[i].children)) : n.append(e("<option>", {value: r[i].value}).text(r[i].text));
                    return n
                };
                t(this.$input, this.sourceData), this.setClass(), this.$input.on("keydown.editable", function(t) {
                    t.which === 13 && e(this).closest("form").submit()
                })
            },value2htmlFinal: function(t, n) {
                var r = "", i = e.fn.editableutils.itemsByValue(t, this.sourceData);
                i.length && (r = i[0].text), e(n).text(r)
            },autosubmit: function() {
                this.$input.off("keydown.editable").on("change.editable", function() {
                    e(this).closest("form").submit()
                })
            }}), t.defaults = e.extend({}, e.fn.editabletypes.list.defaults, {tpl: "<select></select>"}), e.fn.editabletypes.select = t
    }(window.jQuery), function(e) {
        var t = function(e) {
            this.init("checklist", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.list), e.extend(t.prototype, {renderList: function() {
                var t, n;
                this.$tpl.empty();
                if (!e.isArray(this.sourceData))
                    return;
                for (var r = 0; r < this.sourceData.length; r++)
                    t = e("<label>").append(e("<input>", {type: "checkbox",value: this.sourceData[r].value})).append(e("<span>").text(" " + this.sourceData[r].text)), e("<div>").append(t).appendTo(this.$tpl);
                this.$input = this.$tpl.find('input[type="checkbox"]'), this.setClass()
            },value2str: function(t) {
                return e.isArray(t) ? t.sort().join(e.trim(this.options.separator)) : ""
            },str2value: function(t) {
                var n, r = null;
                return typeof t == "string" && t.length ? (n = new RegExp("\\s*" + e.trim(this.options.separator) + "\\s*"), r = t.split(n)) : e.isArray(t) && (r = t), r
            },value2input: function(t) {
                this.$input.prop("checked", !1), e.isArray(t) && t.length && this.$input.each(function(n, r) {
                    var i = e(r);
                    e.each(t, function(e, t) {
                        i.val() == t && i.prop("checked", !0)
                    })
                })
            },input2value: function() {
                var t = [];
                return this.$input.filter(":checked").each(function(n, r) {
                    t.push(e(r).val())
                }), t
            },value2htmlFinal: function(t, n) {
                var r = [], i = e.fn.editableutils.itemsByValue(t, this.sourceData);
                i.length ? (e.each(i, function(t, n) {
                    r.push(e.fn.editableutils.escape(n.text))
                }), e(n).html(r.join("<br>"))) : e(n).empty()
            },activate: function() {
                this.$input.first().focus()
            },autosubmit: function() {
                this.$input.on("keydown", function(t) {
                    t.which === 13 && e(this).closest("form").submit()
                })
            }}), t.defaults = e.extend({}, e.fn.editabletypes.list.defaults, {tpl: '<div class="editable-checklist"></div>',inputclass: null,separator: ","}), e.fn.editabletypes.checklist = t
    }(window.jQuery), function(e) {
        var t = function(e) {
            this.init("pwd", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), e.extend(t.prototype, {value2html: function(t, n) {
                t ? e(n).text("[hidden]") : e(n).empty()
            },html2value: function(e) {
                return null
            }}), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {tpl: '<input type="password">'}), e.fn.editabletypes.passwd = t
    }(window.jQuery), function(e) {
        var t = function(e) {
            this.init("email", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {tpl: '<input type="email">'}), e.fn.editabletypes.email = t
    }(window.jQuery), function(e) {
        var t = function(e) {
            this.init("url", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {tpl: '<input type="url">'}), e.fn.editabletypes.url = t
    }(window.jQuery), function(e) {
        var t = function(e) {
            this.init("tel", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {tpl: '<input type="tel">'}), e.fn.editabletypes.tel = t
    }(window.jQuery), function(e) {
        var t = function(e) {
            this.init("number", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), e.extend(t.prototype, {render: function() {
                t.superclass.render.call(this), this.setAttr("min"), this.setAttr("max"), this.setAttr("step")
            }}), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {tpl: '<input type="number">',inputclass: "input-mini",min: null,max: null,step: null}), e.fn.editabletypes.number = t
    }(window.jQuery), function(e) {
        var t = function(e) {
            this.init("range", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.number), e.extend(t.prototype, {render: function() {
                this.$input = this.$tpl.filter("input"), this.setClass(), this.setAttr("min"), this.setAttr("max"), this.setAttr("step"), this.$input.on("input", function() {
                    e(this).siblings("output").text(e(this).val())
                })
            },activate: function() {
                this.$input.focus()
            }}), t.defaults = e.extend({}, e.fn.editabletypes.number.defaults, {tpl: '<input type="range"><output style="width: 30px; display: inline-block"></output>',inputclass: "input-medium"}), e.fn.editabletypes.range = t
    }(window.jQuery), function(e) {
        var t = function(n) {
            this.init("select2", n, t.defaults), n.select2 = n.select2 || {};
            var r = this, i = {placeholder: n.placeholder};
            this.isMultiple = n.select2.tags || n.select2.multiple, n.select2.tags || (n.source && (i.data = n.source), i.initSelection = function(t, n) {
                var s = r.str2value(t.val()), o = e.fn.editableutils.itemsByValue(s, i.data, "id");
                e.isArray(o) && o.length && !r.isMultiple && (o = o[0]), n(o)
            }), this.options.select2 = e.extend({}, t.defaults.select2, i, n.select2)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {render: function() {
                this.setClass(), this.$input.select2(this.options.select2), "ajax" in this.options.select2, this.isMultiple && this.$input.on("change", function() {
                    e(this).closest("form").parent().triggerHandler("resize")
                })
            },value2html: function(t, n) {
                var r = "", i;
                this.$input ? i = this.$input.select2("data") : this.options.select2.tags ? i = t : this.options.select2.data && (i = e.fn.editableutils.itemsByValue(t, this.options.select2.data, "id")), e.isArray(i) ? (r = [], e.each(i, function(e, t) {
                    r.push(t && typeof t == "object" ? t.text : t)
                })) : i && (r = i.text), r = e.isArray(r) ? r.join(this.options.viewseparator) : r, e(n).text(r)
            },html2value: function(e) {
                return this.options.select2.tags ? this.str2value(e, this.options.viewseparator) : null
            },value2input: function(e) {
                this.$input.val(e).trigger("change", !0)
            },input2value: function() {
                return this.$input.select2("val")
            },str2value: function(t, n) {
                if (typeof t != "string" || !this.isMultiple)
                    return t;
                n = n || this.options.select2.separator || e.fn.select2.defaults.separator;
                var r, i, s;
                if (t === null || t.length < 1)
                    return null;
                r = t.split(n);
                for (i = 0, s = r.length; i < s; i += 1)
                    r[i] = e.trim(r[i]);
                return r
            },autosubmit: function() {
                this.$input.on("change", function(t, n) {
                    n || e(this).closest("form").submit()
                })
            }}), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {tpl: '<input type="hidden">',select2: null,placeholder: null,source: null,viewseparator: ", "}), e.fn.editabletypes.select2 = t
    }(window.jQuery), function(e) {
        var t = function(t, n) {
            this.$element = e(t);
            if (!this.$element.is("input")) {
                e.error("Combodate should be applied to INPUT element");
                return
            }
            this.options = e.extend({}, e.fn.combodate.defaults, n, this.$element.data()), this.init()
        };
        t.prototype = {constructor: t,init: function() {
                this.map = {day: ["D", "date"],month: ["M", "month"],year: ["Y", "year"],hour: ["[Hh]", "hours"],minute: ["m", "minutes"],second: ["s", "seconds"],ampm: ["[Aa]", ""]}, this.$widget = e('<span class="combodate"></span>').html(this.getTemplate()), this.initCombos(), this.$widget.on("change", "select", e.proxy(function() {
                    this.$element.val(this.getValue())
                }, this)), this.$widget.find("select").css("width", "auto"), this.$element.hide().after(this.$widget), this.setValue(this.$element.val() || this.options.value)
            },getTemplate: function() {
                var t = this.options.template;
                return e.each(this.map, function(e, n) {
                    n = n[0];
                    var r = new RegExp(n + "+"), i = n.length > 1 ? n.substring(1, 2) : n;
                    t = t.replace(r, "{" + i + "}")
                }), t = t.replace(/ /g, "&nbsp;"), e.each(this.map, function(e, n) {
                    n = n[0];
                    var r = n.length > 1 ? n.substring(1, 2) : n;
                    t = t.replace("{" + r + "}", '<select class="' + e + '"></select>')
                }), t
            },initCombos: function() {
                var t = this;
                e.each(this.map, function(e, n) {
                    var r = t.$widget.find("." + e), i, s;
                    r.length && (t["$" + e] = r, i = "fill" + e.charAt(0).toUpperCase() + e.slice(1), s = t[i](), t["$" + e].html(t.renderItems(s)))
                })
            },initItems: function(e) {
                var t = [], n;
                if (this.options.firstItem === "name") {
                    n = moment.relativeTime || moment.langData()._relativeTime;
                    var r = typeof n[e] == "function" ? n[e](1, !0, e, !1) : n[e];
                    r = r.split(" ").reverse()[0], t.push(["", r])
                } else
                    this.options.firstItem === "empty" && t.push(["", ""]);
                return t
            },renderItems: function(e) {
                var t = [];
                for (var n = 0; n < e.length; n++)
                    t.push('<option value="' + e[n][0] + '">' + e[n][1] + "</option>");
                return t.join("\n")
            },fillDay: function() {
                var e = this.initItems("d"), t, n, r = this.options.template.indexOf("DD") !== -1;
                for (n = 1; n <= 31; n++)
                    t = r ? this.leadZero(n) : n, e.push([n, t]);
                return e
            },fillMonth: function() {
                var e = this.initItems("M"), t, n, r = this.options.template.indexOf("MMMM") !== -1, i = this.options.template.indexOf("MMM") !== -1, s = this.options.template.indexOf("MM") !== -1;
                for (n = 0; n <= 11; n++)
                    r ? t = moment().month(n).format("MMMM") : i ? t = moment().month(n).format("MMM") : s ? t = this.leadZero(n + 1) : t = n + 1, e.push([n, t]);
                return e
            },fillYear: function() {
                var e = this.initItems("y"), t, n, r = this.options.template.indexOf("YYYY") !== -1;
                for (n = this.options.maxYear; n >= this.options.minYear; n--)
                    t = r ? n : (n + "").substring(2), e.push([n, t]);
                return e
            },fillHour: function() {
                var e = this.initItems("h"), t, n, r = this.options.template.indexOf("h") !== -1, i = this.options.template.indexOf("H") !== -1, s = this.options.template.toLowerCase().indexOf("hh") !== -1, o = r ? 12 : 23;
                for (n = 0; n <= o; n++)
                    t = s ? this.leadZero(n) : n, e.push([n, t]);
                return e
            },fillMinute: function() {
                var e = this.initItems("m"), t, n, r = this.options.template.indexOf("mm") !== -1;
                for (n = 0; n <= 59; n += this.options.minuteStep)
                    t = r ? this.leadZero(n) : n, e.push([n, t]);
                return e
            },fillSecond: function() {
                var e = this.initItems("s"), t, n, r = this.options.template.indexOf("ss") !== -1;
                for (n = 0; n <= 59; n += this.options.secondStep)
                    t = r ? this.leadZero(n) : n, e.push([n, t]);
                return e
            },fillAmpm: function() {
                var e = this.options.template.indexOf("a") !== -1, t = this.options.template.indexOf("A") !== -1, n = [["am", e ? "am" : "AM"], ["pm", e ? "pm" : "PM"]];
                return n
            },getValue: function(t) {
                var n, r = {}, i = this, s = !1;
                return e.each(this.map, function(e, t) {
                    if (e === "ampm")
                        return;
                    var n = e === "day" ? 1 : 0;
                    r[e] = i["$" + e] ? parseInt(i["$" + e].val(), 10) : n;
                    if (isNaN(r[e]))
                        return s = !0, !1
                }), s ? "" : (this.$ampm && (r.hour = this.$ampm.val() === "am" ? r.hour : r.hour + 12, r.hour === 24 && (r.hour = 0)), n = moment([r.year, r.month, r.day, r.hour, r.minute, r.second]), this.highlight(n), t = t === undefined ? this.options.format : t, t === null ? n.isValid() ? n : null : n.isValid() ? n.format(t) : "")
            },setValue: function(t) {
                if (!t)
                    return;
                var n = typeof t == "string" ? moment(t, this.options.format) : moment(t), r = this, i = {};
                n.isValid() && (e.each(this.map, function(e, t) {
                    if (e === "ampm")
                        return;
                    i[e] = n[t[1]]()
                }), this.$ampm && (i.hour > 12 ? (i.hour -= 12, i.ampm = "pm") : i.ampm = "am"), e.each(i, function(e, t) {
                    r["$" + e] && r["$" + e].val(t)
                }), this.$element.val(n.format(this.options.format)))
            },highlight: function(e) {
                e.isValid() ? this.options.errorClass ? this.$widget.removeClass(this.options.errorClass) : this.$widget.find("select").css("border-color", this.borderColor) : this.options.errorClass ? this.$widget.addClass(this.options.errorClass) : (this.borderColor || (this.borderColor = this.$widget.find("select").css("border-color")), this.$widget.find("select").css("border-color", "red"))
            },leadZero: function(e) {
                return e <= 9 ? "0" + e : e
            },destroy: function() {
                this.$widget.remove(), this.$element.removeData("combodate").show()
            }}, e.fn.combodate = function(n) {
            var r, i = Array.apply(null, arguments);
            return i.shift(), n === "getValue" && this.length && (r = this.eq(0).data("combodate")) ? r.getValue.apply(r, i) : this.each(function() {
                var r = e(this), s = r.data("combodate"), o = typeof n == "object" && n;
                s || r.data("combodate", s = new t(this, o)), typeof n == "string" && typeof s[n] == "function" && s[n].apply(s, i)
            })
        }, e.fn.combodate.defaults = {format: "DD-MM-YYYY HH:mm",template: "D / MMM / YYYY   H : mm",value: null,minYear: 1970,maxYear: 2015,minuteStep: 5,secondStep: 1,firstItem: "empty",errorClass: null}
    }(window.jQuery), function(e) {
        var t = function(n) {
            this.init("combodate", n, t.defaults), this.options.viewformat || (this.options.viewformat = this.options.format), n.combodate = e.fn.editableutils.tryParseJson(n.combodate, !0), this.options.combodate = e.extend({}, t.defaults.combodate, n.combodate, {format: this.options.format,template: this.options.template})
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {render: function() {
                this.$input.combodate(this.options.combodate)
            },value2html: function(t, n) {
                var r = t ? t.format(this.options.viewformat) : "";
                e(n).text(r)
            },html2value: function(e) {
                return e ? moment(e, this.options.viewformat) : null
            },value2str: function(e) {
                return e ? e.format(this.options.format) : ""
            },str2value: function(e) {
                return e ? moment(e, this.options.format) : null
            },value2submit: function(e) {
                return this.value2str(e)
            },value2input: function(e) {
                this.$input.combodate("setValue", e)
            },input2value: function() {
                return this.$input.combodate("getValue", null)
            },activate: function() {
                this.$input.siblings(".combodate").find("select").eq(0).focus()
            },autosubmit: function() {
            }}), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {tpl: '<input type="text">',inputclass: null,format: "YYYY-MM-DD",viewformat: null,template: "D / MMM / YYYY",combodate: null}), e.fn.editabletypes.combodate = t
    }(window.jQuery), function(e) {
        e.extend(e.fn.editableform.Constructor.prototype, {initTemplate: function() {
                this.$form = e(e.fn.editableform.template), this.$form.find(".editable-error-block").addClass("help-block")
            }}), e.fn.editableform.buttons = '<button type="submit" class="btn btn-primary editable-submit"><i class="icon-ok icon-white"></i></button><button type="button" class="btn editable-cancel"><i class="icon-remove"></i></button>', e.fn.editableform.errorGroupClass = "error", e.fn.editableform.errorBlockClass = null
    }(window.jQuery), function(e) {
        e.extend(e.fn.editableContainer.Popup.prototype, {containerName: "popover",innerCss: e(e.fn.popover.defaults.template).find("p").length ? ".popover-content p" : ".popover-content",initContainer: function() {
                e.extend(this.containerOptions, {trigger: "manual",selector: !1,content: " ",template: e.fn.popover.defaults.template});
                var t;
                this.$element.data("template") && (t = this.$element.data("template"), this.$element.removeData("template")), this.call(this.containerOptions), t && this.$element.data("template", t)
            },innerShow: function() {
                this.call("show")
            },innerHide: function() {
                this.call("hide")
            },innerDestroy: function() {
                this.call("destroy")
            },setContainerOption: function(e, t) {
                this.container().options[e] = t
            },setPosition: function() {
                (function() {
                    var e = this.tip(), t, n, r, i, s, o;
                    s = typeof this.options.placement == "function" ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(s), e.removeClass("top right bottom left").css({top: 0,left: 0,display: "block"}), n = this.getPosition(t), r = e[0].offsetWidth, i = e[0].offsetHeight;
                    switch (t ? s.split(" ")[1] : s) {
                        case "bottom":
                            o = {top: n.top + n.height,left: n.left + n.width / 2 - r / 2};
                            break;
                        case "top":
                            o = {top: n.top - i,left: n.left + n.width / 2 - r / 2};
                            break;
                        case "left":
                            o = {top: n.top + n.height / 2 - i / 2,left: n.left - r};
                            break;
                        case "right":
                            o = {top: n.top + n.height / 2 - i / 2,left: n.left + n.width}
                    }
                    e.offset(o).addClass(s).addClass("in")
                }).call(this.container())
            }})
    }(window.jQuery), function(e) {
        var t = function(e) {
            this.init("date", e, t.defaults), this.initPicker(e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {initPicker: function(t, n) {
                this.options.viewformat || (this.options.viewformat = this.options.format), this.options.datepicker = e.extend({}, n.datepicker, t.datepicker, {format: this.options.viewformat}), this.options.datepicker.language = this.options.datepicker.language || "en", this.dpg = e.fn.datepicker.DPGlobal, this.parsedFormat = this.dpg.parseFormat(this.options.format), this.parsedViewFormat = this.dpg.parseFormat(this.options.viewformat)
            },render: function() {
                this.$input.datepicker(this.options.datepicker), this.options.clear && (this.$clear = e('<a href="#"></a>').html(this.options.clear).click(e.proxy(function(e) {
                    e.preventDefault(), e.stopPropagation(), this.clear()
                }, this)), this.$tpl.parent().append(e('<div class="editable-clear">').append(this.$clear)))
            },value2html: function(e, n) {
                var r = e ? this.dpg.formatDate(e, this.parsedViewFormat, this.options.datepicker.language) : "";
                t.superclass.value2html(r, n)
            },html2value: function(e) {
                return e ? this.dpg.parseDate(e, this.parsedViewFormat, this.options.datepicker.language) : null
            },value2str: function(e) {
                return e ? this.dpg.formatDate(e, this.parsedFormat, this.options.datepicker.language) : ""
            },str2value: function(e) {
                return e ? this.dpg.parseDate(e, this.parsedFormat, this.options.datepicker.language) : null
            },value2submit: function(e) {
                return this.value2str(e)
            },value2input: function(e) {
                this.$input.datepicker("update", e)
            },input2value: function() {
                return this.$input.data("datepicker").date
            },activate: function() {
            },clear: function() {
                this.$input.data("datepicker").date = null, this.$input.find(".active").removeClass("active")
            },autosubmit: function() {
                this.$input.on("mouseup", ".day", function(t) {
                    if (e(t.currentTarget).is(".old") || e(t.currentTarget).is(".new"))
                        return;
                    var n = e(this).closest("form");
                    setTimeout(function() {
                        n.submit()
                    }, 200)
                })
            }}), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {tpl: '<div class="editable-date well"></div>',inputclass: null,format: "yyyy-mm-dd",viewformat: null,datepicker: {weekStart: 0,startView: 0,minViewMode: 0,autoclose: !1},clear: "&times; clear"}), e.fn.editabletypes.date = t
    }(window.jQuery), function(e) {
        var t = function(e) {
            this.init("datefield", e, t.defaults), this.initPicker(e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.date), e.extend(t.prototype, {render: function() {
                this.$input = this.$tpl.find("input"), this.setClass(), this.setAttr("placeholder"), this.$tpl.datepicker(this.options.datepicker), this.$input.off("focus keydown"), this.$input.keyup(e.proxy(function() {
                    this.$tpl.removeData("date"), this.$tpl.datepicker("update")
                }, this))
            },value2input: function(e) {
                this.$input.val(e ? this.dpg.formatDate(e, this.parsedViewFormat, this.options.datepicker.language) : ""), this.$tpl.datepicker("update")
            },input2value: function() {
                return this.html2value(this.$input.val())
            },activate: function() {
                e.fn.editabletypes.text.prototype.activate.call(this)
            },autosubmit: function() {
            }}), t.defaults = e.extend({}, e.fn.editabletypes.date.defaults, {tpl: '<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',inputclass: "input-small",datepicker: {weekStart: 0,startView: 0,minViewMode: 0,autoclose: !0}}), e.fn.editabletypes.datefield = t
    }(window.jQuery), !function(e) {
        function t() {
            return new Date(Date.UTC.apply(Date, arguments))
        }
        function n() {
            var e = new Date;
            return t(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
        }
        var r = function(t, n) {
            var r = this;
            this.element = e(t), this.language = n.language || this.element.data("date-language") || "en", this.language = this.language in i ? this.language : this.language.split("-")[0], this.language = this.language in i ? this.language : "en", this.isRTL = i[this.language].rtl || !1, this.format = s.parseFormat(n.format || this.element.data("date-format") || i[this.language].format || "mm/dd/yyyy"), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && this.component.length === 0 && (this.component = !1), this._attachEvents(), this.forceParse = !0, "forceParse" in n ? this.forceParse = n.forceParse : "dateForceParse" in this.element.data() && (this.forceParse = this.element.data("date-force-parse")), this.picker = e(s.template).appendTo(this.isInline ? this.element : "body").on({click: e.proxy(this.click, this),mousedown: e.proxy(this.mousedown, this)}), this.isInline ? this.picker.addClass("datepicker-inline") : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.isRTL && (this.picker.addClass("datepicker-rtl"), this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")), e(document).on("mousedown", function(t) {
                e(t.target).closest(".datepicker.datepicker-inline, .datepicker.datepicker-dropdown").length === 0 && r.hide()
            }), this.autoclose = !1, "autoclose" in n ? this.autoclose = n.autoclose : "dateAutoclose" in this.element.data() && (this.autoclose = this.element.data("date-autoclose")), this.keyboardNavigation = !0, "keyboardNavigation" in n ? this.keyboardNavigation = n.keyboardNavigation : "dateKeyboardNavigation" in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation")), this.viewMode = this.startViewMode = 0;
            switch (n.startView || this.element.data("date-start-view")) {
                case 2:
                case "decade":
                    this.viewMode = this.startViewMode = 2;
                    break;
                case 1:
                case "year":
                    this.viewMode = this.startViewMode = 1
            }
            this.minViewMode = n.minViewMode || this.element.data("date-min-view-mode") || 0;
            if (typeof this.minViewMode == "string")
                switch (this.minViewMode) {
                    case "months":
                        this.minViewMode = 1;
                        break;
                    case "years":
                        this.minViewMode = 2;
                        break;
                    default:
                        this.minViewMode = 0
                }
            this.viewMode = this.startViewMode = Math.max(this.startViewMode, this.minViewMode), this.todayBtn = n.todayBtn || this.element.data("date-today-btn") || !1, this.todayHighlight = n.todayHighlight || this.element.data("date-today-highlight") || !1, this.calendarWeeks = !1, "calendarWeeks" in n ? this.calendarWeeks = n.calendarWeeks : "dateCalendarWeeks" in this.element.data() && (this.calendarWeeks = this.element.data("date-calendar-weeks")), this.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function(e, t) {
                return parseInt(t) + 1
            }), this.weekStart = (n.weekStart || this.element.data("date-weekstart") || i[this.language].weekStart || 0) % 7, this.weekEnd = (this.weekStart + 6) % 7, this.startDate = -Infinity, this.endDate = Infinity, this.daysOfWeekDisabled = [], this.setStartDate(n.startDate || this.element.data("date-startdate")), this.setEndDate(n.endDate || this.element.data("date-enddate")), this.setDaysOfWeekDisabled(n.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled")), this.fillDow(), this.fillMonths(), this.update(), this.showMode(), this.isInline && this.show()
        };
        r.prototype = {constructor: r,_events: [],_attachEvents: function() {
                this._detachEvents(), this.isInput ? this._events = [[this.element, {focus: e.proxy(this.show, this),keyup: e.proxy(this.update, this),keydown: e.proxy(this.keydown, this)}]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), {focus: e.proxy(this.show, this),keyup: e.proxy(this.update, this),keydown: e.proxy(this.keydown, this)}], [this.component, {click: e.proxy(this.show, this)}]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {click: e.proxy(this.show, this)}]];
                for (var t = 0, n, r; t < this._events.length; t++)
                    n = this._events[t][0], r = this._events[t][1], n.on(r)
            },_detachEvents: function() {
                for (var e = 0, t, n; e < this._events.length; e++)
                    t = this._events[e][0], n = this._events[e][1], t.off(n);
                this._events = []
            },show: function(t) {
                this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.update(), this.place(), e(window).on("resize", e.proxy(this.place, this)), t && (t.stopPropagation(), t.preventDefault()), this.element.trigger({type: "show",date: this.date})
            },hide: function(t) {
                if (this.isInline)
                    return;
                if (!this.picker.is(":visible"))
                    return;
                this.picker.hide(), e(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || e(document).off("mousedown", this.hide), this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this.element.trigger({type: "hide",date: this.date})
            },remove: function() {
                this._detachEvents(), this.picker.remove(), delete this.element.data().datepicker
            },getDate: function() {
                var e = this.getUTCDate();
                return new Date(e.getTime() + e.getTimezoneOffset() * 6e4)
            },getUTCDate: function() {
                return this.date
            },setDate: function(e) {
                this.setUTCDate(new Date(e.getTime() - e.getTimezoneOffset() * 6e4))
            },setUTCDate: function(e) {
                this.date = e, this.setValue()
            },setValue: function() {
                var e = this.getFormattedDate();
                this.isInput ? this.element.val(e) : (this.component && this.element.find("input").val(e), this.element.data("date", e))
            },getFormattedDate: function(e) {
                return e === undefined && (e = this.format), s.formatDate(this.date, e, this.language)
            },setStartDate: function(e) {
                this.startDate = e || -Infinity, this.startDate !== -Infinity && (this.startDate = s.parseDate(this.startDate, this.format, this.language)), this.update(), this.updateNavArrows()
            },setEndDate: function(e) {
                this.endDate = e || Infinity, this.endDate !== Infinity && (this.endDate = s.parseDate(this.endDate, this.format, this.language)), this.update(), this.updateNavArrows()
            },setDaysOfWeekDisabled: function(t) {
                this.daysOfWeekDisabled = t || [], e.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)), this.daysOfWeekDisabled = e.map(this.daysOfWeekDisabled, function(e) {
                    return parseInt(e, 10)
                }), this.update(), this.updateNavArrows()
            },place: function() {
                if (this.isInline)
                    return;
                var t = parseInt(this.element.parents().filter(function() {
                    return e(this).css("z-index") != "auto"
                }).first().css("z-index")) + 10, n = this.component ? this.component.offset() : this.element.offset(), r = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!0);
                this.picker.css({top: n.top + r,left: n.left,zIndex: t})
            },update: function() {
                var e, t = !1;
                arguments && arguments.length && (typeof arguments[0] == "string" || arguments[0] instanceof Date) ? (e = arguments[0], t = !0) : e = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), this.date = s.parseDate(e, this.format, this.language), t && this.setValue(), this.date < this.startDate ? this.viewDate = new Date(this.startDate) : this.date > this.endDate ? this.viewDate = new Date(this.endDate) : this.viewDate = new Date(this.date), this.fill()
            },fillDow: function() {
                var e = this.weekStart, t = "<tr>";
                if (this.calendarWeeks) {
                    var n = '<th class="cw">&nbsp;</th>';
                    t += n, this.picker.find(".datepicker-days thead tr:first-child").prepend(n)
                }
                while (e < this.weekStart + 7)
                    t += '<th class="dow">' + i[this.language].daysMin[e++ % 7] + "</th>";
                t += "</tr>", this.picker.find(".datepicker-days thead").append(t)
            },fillMonths: function() {
                var e = "", t = 0;
                while (t < 12)
                    e += '<span class="month">' + i[this.language].monthsShort[t++] + "</span>";
                this.picker.find(".datepicker-months td").html(e)
            },fill: function() {
                var n = new Date(this.viewDate), r = n.getUTCFullYear(), o = n.getUTCMonth(), u = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity, a = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity, f = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity, l = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity, c = this.date && this.date.valueOf(), h = new Date;
                this.picker.find(".datepicker-days thead th.switch").text(i[this.language].months[o] + " " + r), this.picker.find("tfoot th.today").text(i[this.language].today).toggle(this.todayBtn !== !1), this.updateNavArrows(), this.fillMonths();
                var p = t(r, o - 1, 28, 0, 0, 0, 0), d = s.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
                p.setUTCDate(d), p.setUTCDate(d - (p.getUTCDay() - this.weekStart + 7) % 7);
                var v = new Date(p);
                v.setUTCDate(v.getUTCDate() + 42), v = v.valueOf();
                var m = [], g;
                while (p.valueOf() < v) {
                    if (p.getUTCDay() == this.weekStart) {
                        m.push("<tr>");
                        if (this.calendarWeeks) {
                            var y = new Date(+p + (this.weekStart - p.getUTCDay() - 7) % 7 * 864e5), b = new Date(+y + (11 - y.getUTCDay()) % 7 * 864e5), w = new Date(+(w = t(b.getUTCFullYear(), 0, 1)) + (11 - w.getUTCDay()) % 7 * 864e5), E = (b - w) / 864e5 / 7 + 1;
                            m.push('<td class="cw">' + E + "</td>")
                        }
                    }
                    g = "";
                    if (p.getUTCFullYear() < r || p.getUTCFullYear() == r && p.getUTCMonth() < o)
                        g += " old";
                    else if (p.getUTCFullYear() > r || p.getUTCFullYear() == r && p.getUTCMonth() > o)
                        g += " new";
                    this.todayHighlight && p.getUTCFullYear() == h.getFullYear() && p.getUTCMonth() == h.getMonth() && p.getUTCDate() == h.getDate() && (g += " today"), c && p.valueOf() == c && (g += " active");
                    if (p.valueOf() < this.startDate || p.valueOf() > this.endDate || e.inArray(p.getUTCDay(), this.daysOfWeekDisabled) !== -1)
                        g += " disabled";
                    m.push('<td class="day' + g + '">' + p.getUTCDate() + "</td>"), p.getUTCDay() == this.weekEnd && m.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(m.join(""));
                var S = this.date && this.date.getUTCFullYear(), x = this.picker.find(".datepicker-months").find("th:eq(1)").text(r).end().find("span").removeClass("active");
                S && S == r && x.eq(this.date.getUTCMonth()).addClass("active"), (r < u || r > f) && x.addClass("disabled"), r == u && x.slice(0, a).addClass("disabled"), r == f && x.slice(l + 1).addClass("disabled"), m = "", r = parseInt(r / 10, 10) * 10;
                var T = this.picker.find(".datepicker-years").find("th:eq(1)").text(r + "-" + (r + 9)).end().find("td");
                r -= 1;
                for (var N = -1; N < 11; N++)
                    m += '<span class="year' + (N == -1 || N == 10 ? " old" : "") + (S == r ? " active" : "") + (r < u || r > f ? " disabled" : "") + '">' + r + "</span>", r += 1;
                T.html(m)
            },updateNavArrows: function() {
                var e = new Date(this.viewDate), t = e.getUTCFullYear(), n = e.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.startDate !== -Infinity && t <= this.startDate.getUTCFullYear() && n <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.endDate !== Infinity && t >= this.endDate.getUTCFullYear() && n >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"});
                        break;
                    case 1:
                    case 2:
                        this.startDate !== -Infinity && t <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.endDate !== Infinity && t >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"})
                }
            },click: function(n) {
                n.stopPropagation(), n.preventDefault();
                var r = e(n.target).closest("span, td, th");
                if (r.length == 1)
                    switch (r[0].nodeName.toLowerCase()) {
                        case "th":
                            switch (r[0].className) {
                                case "switch":
                                    this.showMode(1);
                                    break;
                                case "prev":
                                case "next":
                                    var i = s.modes[this.viewMode].navStep * (r[0].className == "prev" ? -1 : 1);
                                    switch (this.viewMode) {
                                        case 0:
                                            this.viewDate = this.moveMonth(this.viewDate, i);
                                            break;
                                        case 1:
                                        case 2:
                                            this.viewDate = this.moveYear(this.viewDate, i)
                                    }
                                    this.fill();
                                    break;
                                case "today":
                                    var o = new Date;
                                    o = t(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0), this.showMode(-2);
                                    var u = this.todayBtn == "linked" ? null : "view";
                                    this._setDate(o, u)
                            }
                            break;
                        case "span":
                            if (!r.is(".disabled")) {
                                this.viewDate.setUTCDate(1);
                                if (r.is(".month")) {
                                    var a = 1, f = r.parent().find("span").index(r), l = this.viewDate.getUTCFullYear();
                                    this.viewDate.setUTCMonth(f), this.element.trigger({type: "changeMonth",date: this.viewDate}), this.minViewMode == 1 && this._setDate(t(l, f, a, 0, 0, 0, 0))
                                } else {
                                    var l = parseInt(r.text(), 10) || 0, a = 1, f = 0;
                                    this.viewDate.setUTCFullYear(l), this.element.trigger({type: "changeYear",date: this.viewDate}), this.minViewMode == 2 && this._setDate(t(l, f, a, 0, 0, 0, 0))
                                }
                                this.showMode(-1), this.fill()
                            }
                            break;
                        case "td":
                            if (r.is(".day") && !r.is(".disabled")) {
                                var a = parseInt(r.text(), 10) || 1, l = this.viewDate.getUTCFullYear(), f = this.viewDate.getUTCMonth();
                                r.is(".old") ? f === 0 ? (f = 11, l -= 1) : f -= 1 : r.is(".new") && (f == 11 ? (f = 0, l += 1) : f += 1), this._setDate(t(l, f, a, 0, 0, 0, 0))
                            }
                    }
            },_setDate: function(e, t) {
                if (!t || t == "date")
                    this.date = e;
                if (!t || t == "view")
                    this.viewDate = e;
                this.fill(), this.setValue(), this.element.trigger({type: "changeDate",date: this.date});
                var n;
                this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && (n.change(), this.autoclose && (!t || t == "date") && this.hide())
            },moveMonth: function(e, t) {
                if (!t)
                    return e;
                var n = new Date(e.valueOf()), r = n.getUTCDate(), i = n.getUTCMonth(), s = Math.abs(t), o, u;
                t = t > 0 ? 1 : -1;
                if (s == 1) {
                    u = t == -1 ? function() {
                        return n.getUTCMonth() == i
                    } : function() {
                        return n.getUTCMonth() != o
                    }, o = i + t, n.setUTCMonth(o);
                    if (o < 0 || o > 11)
                        o = (o + 12) % 12
                } else {
                    for (var a = 0; a < s; a++)
                        n = this.moveMonth(n, t);
                    o = n.getUTCMonth(), n.setUTCDate(r), u = function() {
                        return o != n.getUTCMonth()
                    }
                }
                while (u())
                    n.setUTCDate(--r), n.setUTCMonth(o);
                return n
            },moveYear: function(e, t) {
                return this.moveMonth(e, t * 12)
            },dateWithinRange: function(e) {
                return e >= this.startDate && e <= this.endDate
            },keydown: function(e) {
                if (this.picker.is(":not(:visible)")) {
                    e.keyCode == 27 && this.show();
                    return
                }
                var t = !1, n, r, i, s, o;
                switch (e.keyCode) {
                    case 27:
                        this.hide(), e.preventDefault();
                        break;
                    case 37:
                    case 39:
                        if (!this.keyboardNavigation)
                            break;
                        n = e.keyCode == 37 ? -1 : 1, e.ctrlKey ? (s = this.moveYear(this.date, n), o = this.moveYear(this.viewDate, n)) : e.shiftKey ? (s = this.moveMonth(this.date, n), o = this.moveMonth(this.viewDate, n)) : (s = new Date(this.date), s.setUTCDate(this.date.getUTCDate() + n), o = new Date(this.viewDate), o.setUTCDate(this.viewDate.getUTCDate() + n)), this.dateWithinRange(s) && (this.date = s, this.viewDate = o, this.setValue(), this.update(), e.preventDefault(), t = !0);
                        break;
                    case 38:
                    case 40:
                        if (!this.keyboardNavigation)
                            break;
                        n = e.keyCode == 38 ? -1 : 1, e.ctrlKey ? (s = this.moveYear(this.date, n), o = this.moveYear(this.viewDate, n)) : e.shiftKey ? (s = this.moveMonth(this.date, n), o = this.moveMonth(this.viewDate, n)) : (s = new Date(this.date), s.setUTCDate(this.date.getUTCDate() + n * 7), o = new Date(this.viewDate), o.setUTCDate(this.viewDate.getUTCDate() + n * 7)), this.dateWithinRange(s) && (this.date = s, this.viewDate = o, this.setValue(), this.update(), e.preventDefault(), t = !0);
                        break;
                    case 13:
                        this.hide(), e.preventDefault();
                        break;
                    case 9:
                        this.hide()
                }
                if (t) {
                    this.element.trigger({type: "changeDate",date: this.date});
                    var u;
                    this.isInput ? u = this.element : this.component && (u = this.element.find("input")), u && u.change()
                }
            },showMode: function(e) {
                e && (this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + e))), this.picker.find(">div").hide().filter(".datepicker-" + s.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
            }}, e.fn.datepicker = function(t) {
            var n = Array.apply(null, arguments);
            return n.shift(), this.each(function() {
                var i = e(this), s = i.data("datepicker"), o = typeof t == "object" && t;
                s || i.data("datepicker", s = new r(this, e.extend({}, e.fn.datepicker.defaults, o))), typeof t == "string" && typeof s[t] == "function" && s[t].apply(s, n)
            })
        }, e.fn.datepicker.defaults = {}, e.fn.datepicker.Constructor = r;
        var i = e.fn.datepicker.dates = {en: {days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],today: "Today"}}, s = {modes: [{clsName: "days",navFnc: "Month",navStep: 1}, {clsName: "months",navFnc: "FullYear",navStep: 1}, {clsName: "years",navFnc: "FullYear",navStep: 10}],isLeapYear: function(e) {
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
            },getDaysInMonth: function(e, t) {
                return [31, s.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
            },validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat: function(e) {
                var t = e.replace(this.validParts, "\0").split("\0"), n = e.match(this.validParts);
                if (!t || !t.length || !n || n.length === 0)
                    throw new Error("Invalid date format.");
                return {separators: t,parts: n}
            },parseDate: function(n, s, o) {
                if (n instanceof Date)
                    return n;
                if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(n)) {
                    var u = /([\-+]\d+)([dmwy])/, a = n.match(/([\-+]\d+)([dmwy])/g), f, l;
                    n = new Date;
                    for (var c = 0; c < a.length; c++) {
                        f = u.exec(a[c]), l = parseInt(f[1]);
                        switch (f[2]) {
                            case "d":
                                n.setUTCDate(n.getUTCDate() + l);
                                break;
                            case "m":
                                n = r.prototype.moveMonth.call(r.prototype, n, l);
                                break;
                            case "w":
                                n.setUTCDate(n.getUTCDate() + l * 7);
                                break;
                            case "y":
                                n = r.prototype.moveYear.call(r.prototype, n, l)
                        }
                    }
                    return t(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 0, 0, 0)
                }
                var a = n && n.match(this.nonpunctuation) || [], n = new Date, h = {}, p = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], d = {yyyy: function(e, t) {
                        return e.setUTCFullYear(t)
                    },yy: function(e, t) {
                        return e.setUTCFullYear(2e3 + t)
                    },m: function(e, t) {
                        t -= 1;
                        while (t < 0)
                            t += 12;
                        t %= 12, e.setUTCMonth(t);
                        while (e.getUTCMonth() != t)
                            e.setUTCDate(e.getUTCDate() - 1);
                        return e
                    },d: function(e, t) {
                        return e.setUTCDate(t)
                    }}, v, m, f;
                d.M = d.MM = d.mm = d.m, d.dd = d.d, n = t(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0);
                var g = s.parts.slice();
                a.length != g.length && (g = e(g).filter(function(t, n) {
                    return e.inArray(n, p) !== -1
                }).toArray());
                if (a.length == g.length) {
                    for (var c = 0, y = g.length; c < y; c++) {
                        v = parseInt(a[c], 10), f = g[c];
                        if (isNaN(v))
                            switch (f) {
                                case "MM":
                                    m = e(i[o].months).filter(function() {
                                        var e = this.slice(0, a[c].length), t = a[c].slice(0, e.length);
                                        return e == t
                                    }), v = e.inArray(m[0], i[o].months) + 1;
                                    break;
                                case "M":
                                    m = e(i[o].monthsShort).filter(function() {
                                        var e = this.slice(0, a[c].length), t = a[c].slice(0, e.length);
                                        return e == t
                                    }), v = e.inArray(m[0], i[o].monthsShort) + 1
                            }
                        h[f] = v
                    }
                    for (var c = 0, b; c < p.length; c++)
                        b = p[c], b in h && !isNaN(h[b]) && d[b](n, h[b])
                }
                return n
            },formatDate: function(t, n, r) {
                var s = {d: t.getUTCDate(),D: i[r].daysShort[t.getUTCDay()],DD: i[r].days[t.getUTCDay()],m: t.getUTCMonth() + 1,M: i[r].monthsShort[t.getUTCMonth()],MM: i[r].months[t.getUTCMonth()],yy: t.getUTCFullYear().toString().substring(2),yyyy: t.getUTCFullYear()};
                s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m;
                var t = [], o = e.extend([], n.separators);
                for (var u = 0, a = n.parts.length; u < a; u++)
                    o.length && t.push(o.shift()), t.push(s[n.parts[u]]);
                return t.join("")
            },headTemplate: '<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};
        s.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + s.headTemplate + "<tbody></tbody>" + s.footTemplate + "</table>" + "</div>" + '<div class="datepicker-months">' + '<table class="table-condensed">' + s.headTemplate + s.contTemplate + s.footTemplate + "</table>" + "</div>" + '<div class="datepicker-years">' + '<table class="table-condensed">' + s.headTemplate + s.contTemplate + s.footTemplate + "</table>" + "</div>" + "</div>", e.fn.datepicker.DPGlobal = s
    }(window.jQuery), function(e) {
        var t = function(n) {
            this.init("typeahead", n, t.defaults), this.options.typeahead = e.extend({}, t.defaults.typeahead, {matcher: this.matcher,sorter: this.sorter,highlighter: this.highlighter,updater: this.updater}, n.typeahead)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.list), e.extend(t.prototype, {renderList: function() {
                this.$input = this.$tpl.is("input") ? this.$tpl : this.$tpl.find('input[type="text"]'), this.options.typeahead.source = this.sourceData, this.$input.typeahead(this.options.typeahead);
                var t = this.$input.data("typeahead");
                t.render = e.proxy(this.typeaheadRender, t), t.select = e.proxy(this.typeaheadSelect, t), t.move = e.proxy(this.typeaheadMove, t), this.renderClear(), this.setClass(), this.setAttr("placeholder")
            },value2htmlFinal: function(t, n) {
                if (this.getIsObjects()) {
                    var r = e.fn.editableutils.itemsByValue(t, this.sourceData);
                    e(n).text(r.length ? r[0].text : "")
                } else
                    e(n).text(t)
            },html2value: function(e) {
                return e ? e : null
            },value2input: function(t) {
                if (this.getIsObjects()) {
                    var n = e.fn.editableutils.itemsByValue(t, this.sourceData);
                    this.$input.data("value", t).val(n.length ? n[0].text : "")
                } else
                    this.$input.val(t)
            },input2value: function() {
                if (this.getIsObjects()) {
                    var t = this.$input.data("value"), n = e.fn.editableutils.itemsByValue(t, this.sourceData);
                    return n.length && n[0].text.toLowerCase() === this.$input.val().toLowerCase() ? t : null
                }
                return this.$input.val()
            },getIsObjects: function() {
                if (this.isObjects === undefined) {
                    this.isObjects = !1;
                    for (var e = 0; e < this.sourceData.length; e++)
                        if (this.sourceData[e].value !== this.sourceData[e].text) {
                            this.isObjects = !0;
                            break
                        }
                }
                return this.isObjects
            },activate: e.fn.editabletypes.text.prototype.activate,renderClear: e.fn.editabletypes.text.prototype.renderClear,postrender: e.fn.editabletypes.text.prototype.postrender,toggleClear: e.fn.editabletypes.text.prototype.toggleClear,clear: function() {
                e.fn.editabletypes.text.prototype.clear.call(this), this.$input.data("value", "")
            },matcher: function(t) {
                return e.fn.typeahead.Constructor.prototype.matcher.call(this, t.text)
            },sorter: function(e) {
                var t = [], n = [], r = [], i, s;
                while (i = e.shift())
                    s = i.text, s.toLowerCase().indexOf(this.query.toLowerCase()) ? ~s.indexOf(this.query) ? n.push(i) : r.push(i) : t.push(i);
                return t.concat(n, r)
            },highlighter: function(t) {
                return e.fn.typeahead.Constructor.prototype.highlighter.call(this, t.text)
            },updater: function(e) {
                return this.$element.data("value", e.value), e.text
            },typeaheadRender: function(t) {
                var n = this;
                return t = e(t).map(function(t, r) {
                    return t = e(n.options.item).data("item", r), t.find("a").html(n.highlighter(r)), t[0]
                }), this.options.autoSelect && t.first().addClass("active"), this.$menu.html(t), this
            },typeaheadSelect: function() {
                var e = this.$menu.find(".active").data("item");
                return (this.options.autoSelect || e) && this.$element.val(this.updater(e)).change(), this.hide()
            },typeaheadMove: function(e) {
                if (!this.shown)
                    return;
                switch (e.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        if (!this.$menu.find(".active").length)
                            return;
                        e.preventDefault();
                        break;
                    case 38:
                        e.preventDefault(), this.prev();
                        break;
                    case 40:
                        e.preventDefault(), this.next()
                }
                e.stopPropagation()
            }}), t.defaults = e.extend({}, e.fn.editabletypes.list.defaults, {tpl: '<input type="text">',typeahead: null,clear: !0}), e.fn.editabletypes.typeahead = t
    }(window.jQuery);
});
;
define("bootstrap/plugins/bootstrap-contextmenu/bootstrap-contextmenu", function(require, exports, module) {
    var jQuery = require('jquery');
    !function(a) {
        "use strict";
        var b = function(b, c) {
            this.$elements = a(b), this.options = c, this.before = this.options.before || this.before, this.onItem = this.options.onItem || this.onItem, this.options.target && this.$elements.attr("data-target", this.options.target), this.listen()
        };
        b.prototype = {constructor: b,show: function(b) {
                var d, f, c = a(this);
                if (!c.is(".disabled, :disabled") && (f = a.Event("context"), this.before.call(this, b, a(b.currentTarget)))) {
                    this.$elements.trigger(f), d = this.getMenu();
                    var g = this.getPosition(b, d);
                    return d.attr("style", "").css(g).data("_context_this_ref", this).addClass("open"), !1
                }
            },closemenu: function() {
                this.getMenu().removeClass("open")
            },before: function() {
                return !0
            },onItem: function() {
                return !0
            },listen: function() {
                var b = this;
                this.$elements.on("contextmenu.context.data-api", a.proxy(this.show, this)), a("html").on("click.context.data-api", a.proxy(this.closemenu, this));
                var c = a(this.$elements.attr("data-target"));
                c.on("click.context.data-api", function(c) {
                    a(this).data("_context_this_ref") == b && b.onItem.call(this, c, a(c.target))
                }), a("html").on("click.context.data-api", function(a) {
                    a.ctrlKey || c.removeClass("open")
                })
            },destroy: function() {
                this.$elements.off(".context.data-api").removeData("context"), a("html").off(".context.data-api");
                var b = a(this.$elements.attr("data-target"));
                b.off(".context.data-api")
            },getMenu: function() {
                var c, b = this.$elements.attr("data-target");
                return b || (b = this.$elements.attr("href"), b = b && b.replace(/.*(?=#[^\s]*$)/, "")), c = a(b)
            },getPosition: function(b, c) {
                var k, l, d = b.clientX, e = b.clientY, f = a(window).width(), g = a(window).height(), h = c.find(".dropdown-menu").outerWidth(), i = c.find(".dropdown-menu").outerHeight(), j = {position: "absolute"};
                return k = e + i > g ? {top: e - i + a(window).scrollTop()} : {top: e + a(window).scrollTop()}, l = d + h > f && d - h > 0 ? {left: d - h + a(window).scrollLeft()} : {left: d + a(window).scrollLeft()}, a.extend(j, k, l)
            },clearMenus: function(b) {
                b.ctrlKey || a("[data-toggle=context]").each(function() {
                    this.getMenu().removeClass("open")
                })
            }}, a.fn.contextmenu = function(a, c) {
            var d = this;
            return function() {
                var e = d.data("context"), f = "object" == typeof a && a;
                e || d.data("context", e = new b(d, f)), "string" == typeof a && e[a].call(e, c)
            }()
        }, a.fn.contextmenu.Constructor = b, a(document).on("contextmenu.context.data-api", "[data-toggle=context]", function(b) {
            a(this).contextmenu("show", b), b.preventDefault()
        })
    }(jQuery);
});
;
/**bootstrap-fuelux-wizard*/
define("bootstrap/plugins/bootstrap-fuelux/wizard", ["jquery"], function(a) {
    var b = a("jquery"), c = function(a, c) {
        var d;
        this.$element = b(a), this.options = b.extend({}, b.fn.wizard.defaults, c), this.currentStep = 1, this.numSteps = this.$element.find("li").length, this.$prevBtn = this.$element.find("button.btn-prev"), this.$nextBtn = this.$element.find("button.btn-next"), d = this.$nextBtn.children().detach(), this.nextText = b.trim(this.$nextBtn.text()), this.$nextBtn.append(d), this.$prevBtn.on("click", b.proxy(this.previous, this)), this.$nextBtn.on("click", b.proxy(this.next, this)), this.$element.on("click", "li.complete", b.proxy(this.stepclicked, this))
    };
    c.prototype = {constructor: c,setState: function() {
            var a = this.currentStep > 1, c = 1 === this.currentStep, d = this.currentStep === this.numSteps;
            this.$prevBtn.attr("disabled", c === !0 || a === !1);
            var e = this.$nextBtn.data();
            if (e && e.last && (this.lastText = e.last, "undefined" != typeof this.lastText)) {
                var f = d !== !0 ? this.nextText : this.lastText, g = this.$nextBtn.children().detach();
                this.$nextBtn.text(f).append(g)
            }
            var h = this.$element.find("li");
            h.removeClass("active").removeClass("complete"), h.find("span.badge").removeClass("badge-info").removeClass("badge-success");
            var i = "li:lt(" + (this.currentStep - 1) + ")", j = this.$element.find(i);
            j.addClass("complete"), j.find("span.badge").addClass("badge-success");
            var k = "li:eq(" + (this.currentStep - 1) + ")", l = this.$element.find(k);
            l.addClass("active"), l.find("span.badge").addClass("badge-info");
            var m = l.data().target;
            b(".step-pane").removeClass("active"), b(m).addClass("active"), this.$element.trigger("changed")
        },stepclicked: function(a) {
            var c = b(a.currentTarget), d = b(".steps li").index(c), e = b.Event("stepclick");
            this.$element.trigger(e, {step: d + 1}), e.isDefaultPrevented() || (this.currentStep = d + 1, this.setState())
        },previous: function() {
            var a = this.currentStep > 1;
            if (a) {
                var c = b.Event("change");
                if (this.$element.trigger(c, {step: this.currentStep,direction: "previous"}), c.isDefaultPrevented())
                    return;
                this.currentStep -= 1, this.setState()
            }
        },next: function() {
            var a = this.currentStep + 1 <= this.numSteps, c = this.currentStep === this.numSteps;
            if (a) {
                var d = b.Event("change");
                if (this.$element.trigger(d, {step: this.currentStep,direction: "next"}), d.isDefaultPrevented())
                    return;
                this.currentStep += 1, this.setState()
            } else
                c && this.$element.trigger("finished")
        },selectedItem: function() {
            return {step: this.currentStep}
        }}, b.fn.wizard = function(a, d) {
        var e, f = this.each(function() {
            var f = b(this), g = f.data("wizard"), h = "object" == typeof a && a;
            g || f.data("wizard", g = new c(this, h)), "string" == typeof a && (e = g[a](d))
        });
        return void 0 === e ? f : e
    }, b.fn.wizard.defaults = {}, b.fn.wizard.Constructor = c, b(function() {
        b("body").on("mousedown.wizard.data-api", ".wizard", function() {
            var a = b(this);
            a.data("wizard") || a.wizard(a.data())
        })
    })
});
;
define("bootstrap/plugins/bootstrap-datetimepicker/bootstrap-datetimepicker", function(require, exports, module) {
    var jQuery = require('jquery');
    (function($) {
        function UTCDate() {
            return new Date(Date.UTC.apply(Date, arguments))
        }
        function UTCToday() {
            var today = new Date();
            return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds(), 0)
        }
        var Datetimepicker = function(element, options) {
            var that = this;
            this.element = $(element);
            this.language = options.language || this.element.data('date-language') || "en";
            this.language = this.language in dates ? this.language : "en";
            this.isRTL = dates[this.language].rtl || false;
            this.formatType = options.formatType || this.element.data('format-type') || 'standard';
            this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || DPGlobal.getDefaultFormat(this.formatType, 'input'), this.formatType);
            this.isInline = false;
            this.isVisible = false;
            this.isInput = this.element.is('input');
            this.component = this.element.is('.date') ? this.element.find('.add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar').parent() : false;
            this.componentReset = this.element.is('.date') ? this.element.find('.add-on .icon-remove').parent() : false;
            this.hasInput = this.component && this.element.find('input').length;
            if (this.component && this.component.length === 0) {
                this.component = false
            }
            this.linkField = options.linkField || this.element.data('link-field') || false;
            this.linkFormat = DPGlobal.parseFormat(options.linkFormat || this.element.data('link-format') || DPGlobal.getDefaultFormat(this.formatType, 'link'), this.formatType);
            this.minuteStep = options.minuteStep || this.element.data('minute-step') || 5;
            this.pickerPosition = options.pickerPosition || this.element.data('picker-position') || 'bottom-right';
            this.showMeridian = options.showMeridian || this.element.data('show-meridian') || false;
            this.initialDate = options.initialDate || new Date();
            this._attachEvents();
            this.formatViewType = "datetime";
            if ('formatViewType' in options) {
                this.formatViewType = options.formatViewType
            } else if ('formatViewType' in this.element.data()) {
                this.formatViewType = this.element.data('formatViewType')
            }
            this.minView = 0;
            if ('minView' in options) {
                this.minView = options.minView
            } else if ('minView' in this.element.data()) {
                this.minView = this.element.data('min-view')
            }
            this.minView = DPGlobal.convertViewMode(this.minView);
            this.maxView = DPGlobal.modes.length - 1;
            if ('maxView' in options) {
                this.maxView = options.maxView
            } else if ('maxView' in this.element.data()) {
                this.maxView = this.element.data('max-view')
            }
            this.maxView = DPGlobal.convertViewMode(this.maxView);
            this.startViewMode = 2;
            if ('startView' in options) {
                this.startViewMode = options.startView
            } else if ('startView' in this.element.data()) {
                this.startViewMode = this.element.data('start-view')
            }
            this.startViewMode = DPGlobal.convertViewMode(this.startViewMode);
            this.viewMode = this.startViewMode;
            this.viewSelect = this.minView;
            if ('viewSelect' in options) {
                this.viewSelect = options.viewSelect
            } else if ('viewSelect' in this.element.data()) {
                this.viewSelect = this.element.data('view-select')
            }
            this.viewSelect = DPGlobal.convertViewMode(this.viewSelect);
            this.forceParse = true;
            if ('forceParse' in options) {
                this.forceParse = options.forceParse
            } else if ('dateForceParse' in this.element.data()) {
                this.forceParse = this.element.data('date-force-parse')
            }
            this.picker = $(DPGlobal.template).appendTo(this.isInline ? this.element : 'body').on({click: $.proxy(this.click, this),mousedown: $.proxy(this.mousedown, this)});
            if (this.isInline) {
                this.picker.addClass('datetimepicker-inline')
            } else {
                this.picker.addClass('datetimepicker-dropdown-' + this.pickerPosition + ' dropdown-menu')
            }
            if (this.isRTL) {
                this.picker.addClass('datetimepicker-rtl');
                this.picker.find('.prev i, .next i').toggleClass('icon-arrow-left icon-arrow-right')
            }
            $(document).on('mousedown', function(e) {
                if ($(e.target).closest('.datetimepicker').length === 0) {
                    that.hide()
                }
            });
            this.autoclose = false;
            if ('autoclose' in options) {
                this.autoclose = options.autoclose
            } else if ('dateAutoclose' in this.element.data()) {
                this.autoclose = this.element.data('date-autoclose')
            }
            this.keyboardNavigation = true;
            if ('keyboardNavigation' in options) {
                this.keyboardNavigation = options.keyboardNavigation
            } else if ('dateKeyboardNavigation' in this.element.data()) {
                this.keyboardNavigation = this.element.data('date-keyboard-navigation')
            }
            this.todayBtn = (options.todayBtn || this.element.data('date-today-btn') || false);
            this.todayHighlight = (options.todayHighlight || this.element.data('date-today-highlight') || false);
            this.weekStart = ((options.weekStart || this.element.data('date-weekstart') || dates[this.language].weekStart || 0) % 7);
            this.weekEnd = ((this.weekStart + 6) % 7);
            this.startDate = -Infinity;
            this.endDate = Infinity;
            this.daysOfWeekDisabled = [];
            this.setStartDate(options.startDate || this.element.data('date-startdate'));
            this.setEndDate(options.endDate || this.element.data('date-enddate'));
            this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data('date-days-of-week-disabled'));
            this.fillDow();
            this.fillMonths();
            this.update();
            this.showMode();
            if (this.isInline) {
                this.show()
            }
        };
        Datetimepicker.prototype = {constructor: Datetimepicker,_events: [],_attachEvents: function() {
                this._detachEvents();
                if (this.isInput) {
                    this._events = [[this.element, {focus: $.proxy(this.show, this),keyup: $.proxy(this.update, this),keydown: $.proxy(this.keydown, this)}]]
                } else if (this.component && this.hasInput) {
                    this._events = [[this.element.find('input'), {focus: $.proxy(this.show, this),keyup: $.proxy(this.update, this),keydown: $.proxy(this.keydown, this)}], [this.component, {click: $.proxy(this.show, this)}]];
                    if (this.componentReset) {
                        this._events.push([this.componentReset, {click: $.proxy(this.reset, this)}])
                    }
                } else if (this.element.is('div')) {
                    this.isInline = true
                } else {
                    this._events = [[this.element, {click: $.proxy(this.show, this)}]]
                }
                for (var i = 0, el, ev; i < this._events.length; i++) {
                    el = this._events[i][0];
                    ev = this._events[i][1];
                    el.on(ev)
                }
            },_detachEvents: function() {
                for (var i = 0, el, ev; i < this._events.length; i++) {
                    el = this._events[i][0];
                    ev = this._events[i][1];
                    el.off(ev)
                }
                this._events = []
            },show: function(e) {
                this.picker.show();
                this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
                if (this.forceParse) {
                    this.update()
                }
                this.place();
                $(window).on('resize', $.proxy(this.place, this));
                if (e) {
                    e.stopPropagation();
                    e.preventDefault()
                }
                this.isVisible = true;
                this.element.trigger({type: 'show',date: this.date})
            },hide: function(e) {
                if (!this.isVisible)
                    return;
                if (this.isInline)
                    return;
                this.picker.hide();
                $(window).off('resize', this.place);
                this.viewMode = this.startViewMode;
                this.showMode();
                if (!this.isInput) {
                    $(document).off('mousedown', this.hide)
                }
                if (this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find('input').val()))
                    this.setValue();
                this.isVisible = false;
                this.element.trigger({type: 'hide',date: this.date})
            },remove: function() {
                this._detachEvents();
                this.picker.remove();
                delete this.element.data().datetimepicker
            },getDate: function() {
                var d = this.getUTCDate();
                return new Date(d.getTime() + (d.getTimezoneOffset() * 60000))
            },getUTCDate: function() {
                return this.date
            },setDate: function(d) {
                this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset() * 60000)))
            },setUTCDate: function(d) {
                if (d >= this.startDate && d <= this.endDate) {
                    this.date = d;
                    this.setValue();
                    this.viewDate = this.date;
                    this.fill()
                } else {
                    this.element.trigger({type: 'outOfRange',date: d,startDate: this.startDate,endDate: this.endDate})
                }
            },setFormat: function(format) {
                this.format = DPGlobal.parseFormat(format, this.formatType);
                var element;
                if (this.isInput) {
                    element = this.element
                } else if (this.component) {
                    element = this.element.find('input')
                }
                if (element && element.val()) {
                    this.setValue()
                }
            },setValue: function() {
                var formatted = this.getFormattedDate();
                if (!this.isInput) {
                    if (this.component) {
                        this.element.find('input').val(formatted)
                    }
                    this.element.data('date', formatted)
                } else {
                    this.element.val(formatted)
                }
                if (this.linkField) {
                    $('#' + this.linkField).val(this.getFormattedDate(this.linkFormat))
                }
            },getFormattedDate: function(format) {
                if (format == undefined)
                    format = this.format;
                return DPGlobal.formatDate(this.date, format, this.language, this.formatType)
            },setStartDate: function(startDate) {
                this.startDate = startDate || -Infinity;
                if (this.startDate !== -Infinity) {
                    this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language, this.formatType)
                }
                this.update();
                this.updateNavArrows()
            },setEndDate: function(endDate) {
                this.endDate = endDate || Infinity;
                if (this.endDate !== Infinity) {
                    this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language, this.formatType)
                }
                this.update();
                this.updateNavArrows()
            },setDaysOfWeekDisabled: function(daysOfWeekDisabled) {
                this.daysOfWeekDisabled = daysOfWeekDisabled || [];
                if (!$.isArray(this.daysOfWeekDisabled)) {
                    this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)
                }
                this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function(d) {
                    return parseInt(d, 10)
                });
                this.update();
                this.updateNavArrows()
            },place: function() {
                if (this.isInline)
                    return;
                var zIndex = parseInt(this.element.parents().filter(function() {
                    return $(this).css('z-index') != 'auto'
                }).first().css('z-index')) + 10;
                var offset, top, left;
                if (this.component) {
                    offset = this.component.offset();
                    left = offset.left;
                    if (this.pickerPosition == 'bottom-left' || this.pickerPosition == 'top-left') {
                        left += this.component.outerWidth(true) - this.picker.outerWidth(true)
                    }
                } else {
                    offset = this.element.offset();
                    left = offset.left
                }
                if (this.pickerPosition == 'top-left' || this.pickerPosition == 'top-right') {
                    top = offset.top - this.picker.outerHeight(true)
                } else {
                    top = offset.top + (this.component ? this.component.outerWidth(true) : 25)
                }
                this.picker.css({top: top,left: left,zIndex: zIndex})
            },update: function() {
                var date, fromArgs = false;
                if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
                    date = arguments[0];
                    fromArgs = true
                } else {
                    date = this.element.data('date') || (this.isInput ? this.element.val() : this.element.find('input').val()) || this.initialDate
                }
                if (!date) {
                    date = new Date();
                    fromArgs = false
                }
                this.date = DPGlobal.parseDate(date, this.format, this.language, this.formatType);
                if (fromArgs)
                    this.setValue();
                if (this.date < this.startDate) {
                    this.viewDate = new Date(this.startDate)
                } else if (this.date > this.endDate) {
                    this.viewDate = new Date(this.endDate)
                } else {
                    this.viewDate = new Date(this.date)
                }
                this.fill()
            },fillDow: function() {
                var dowCnt = this.weekStart, html = '<tr>';
                while (dowCnt < this.weekStart + 7) {
                    html += '<th class="dow">' + dates[this.language].daysMin[(dowCnt++) % 7] + '</th>'
                }
                html += '</tr>';
                this.picker.find('.datetimepicker-days thead').append(html)
            },fillMonths: function() {
                var html = '', i = 0;
                while (i < 12) {
                    html += '<span class="month">' + dates[this.language].monthsShort[i++] + '</span>'
                }
                this.picker.find('.datetimepicker-months td').html(html)
            },fill: function() {
                if (this.date == null || this.viewDate == null) {
                    return
                }
                var d = new Date(this.viewDate), year = d.getUTCFullYear(), month = d.getUTCMonth(), dayMonth = d.getUTCDate(), hours = d.getUTCHours(), minutes = d.getUTCMinutes(), startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity, startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity, endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity, endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity, currentDate = (new UTCDate(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate())).valueOf(), today = new Date();
                this.picker.find('.datetimepicker-days thead th:eq(1)').text(dates[this.language].months[month] + ' ' + year);
                if (this.formatViewType == "time") {
                    var hourConverted = hours % 12 ? hours % 12 : 12;
                    var hoursDisplay = (hourConverted < 10 ? '0' : '') + hourConverted;
                    var minutesDisplay = (minutes < 10 ? '0' : '') + minutes;
                    var meridianDisplay = dates[this.language].meridiem[hours < 12 ? 0 : 1];
                    this.picker.find('.datetimepicker-hours thead th:eq(1)').text(hoursDisplay + ':' + minutesDisplay + ' ' + meridianDisplay.toUpperCase());
                    this.picker.find('.datetimepicker-minutes thead th:eq(1)').text(hoursDisplay + ':' + minutesDisplay + ' ' + meridianDisplay.toUpperCase())
                } else {
                    this.picker.find('.datetimepicker-hours thead th:eq(1)').text(dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
                    this.picker.find('.datetimepicker-minutes thead th:eq(1)').text(dayMonth + ' ' + dates[this.language].months[month] + ' ' + year)
                }
                this.picker.find('tfoot th.today').text(dates[this.language].today).toggle(this.todayBtn !== false);
                this.updateNavArrows();
                this.fillMonths();
                var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0), day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
                prevMonth.setUTCDate(day);
                prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
                var nextMonth = new Date(prevMonth);
                nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
                nextMonth = nextMonth.valueOf();
                var html = [];
                var clsName;
                while (prevMonth.valueOf() < nextMonth) {
                    if (prevMonth.getUTCDay() == this.weekStart) {
                        html.push('<tr>')
                    }
                    clsName = '';
                    if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month)) {
                        clsName += ' old'
                    } else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month)) {
                        clsName += ' new'
                    }
                    if (this.todayHighlight && prevMonth.getUTCFullYear() == today.getFullYear() && prevMonth.getUTCMonth() == today.getMonth() && prevMonth.getUTCDate() == today.getDate()) {
                        clsName += ' today'
                    }
                    if (prevMonth.valueOf() == currentDate) {
                        clsName += ' active'
                    }
                    if ((prevMonth.valueOf() + 86400000) <= this.startDate || prevMonth.valueOf() > this.endDate || $.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
                        clsName += ' disabled'
                    }
                    html.push('<td class="day' + clsName + '">' + prevMonth.getUTCDate() + '</td>');
                    if (prevMonth.getUTCDay() == this.weekEnd) {
                        html.push('</tr>')
                    }
                    prevMonth.setUTCDate(prevMonth.getUTCDate() + 1)
                }
                this.picker.find('.datetimepicker-days tbody').empty().append(html.join(''));
                html = [];
                var txt = '', meridian = '', meridianOld = '';
                for (var i = 0; i < 24; i++) {
                    var actual = UTCDate(year, month, dayMonth, i);
                    clsName = '';
                    if ((actual.valueOf() + 3600000) <= this.startDate || actual.valueOf() > this.endDate) {
                        clsName += ' disabled'
                    } else if (hours == i) {
                        clsName += ' active'
                    }
                    if (this.showMeridian && dates[this.language].meridiem.length == 2) {
                        meridian = (i < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
                        if (meridian != meridianOld) {
                            if (meridianOld != '') {
                                html.push('</fieldset>')
                            }
                            html.push('<fieldset class="hour"><legend>' + meridian.toUpperCase() + '</legend>')
                        }
                        meridianOld = meridian;
                        txt = (i % 12 ? i % 12 : 12);
                        html.push('<span class="hour' + clsName + ' hour_' + (i < 12 ? 'am' : 'pm') + '">' + txt + '</span>');
                        if (i == 23) {
                            html.push('</fieldset>')
                        }
                    } else {
                        txt = i + ':00';
                        html.push('<span class="hour' + clsName + '">' + txt + '</span>')
                    }
                }
                this.picker.find('.datetimepicker-hours td').html(html.join(''));
                html = [];
                txt = '', meridian = '', meridianOld = '';
                for (var i = 0; i < 60; i += this.minuteStep) {
                    var actual = UTCDate(year, month, dayMonth, hours, i, 0);
                    clsName = '';
                    if (actual.valueOf() < this.startDate || actual.valueOf() > this.endDate) {
                        clsName += ' disabled'
                    } else if (Math.floor(minutes / this.minuteStep) == Math.floor(i / this.minuteStep)) {
                        clsName += ' active'
                    }
                    if (this.showMeridian && dates[this.language].meridiem.length == 2) {
                        meridian = (hours < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
                        if (meridian != meridianOld) {
                            if (meridianOld != '') {
                                html.push('</fieldset>')
                            }
                            html.push('<fieldset class="minute"><legend>' + meridian.toUpperCase() + '</legend>')
                        }
                        meridianOld = meridian;
                        txt = (hours % 12 ? hours % 12 : 12);
                        html.push('<span class="minute' + clsName + '">' + txt + ':' + (i < 10 ? '0' + i : i) + '</span>');
                        if (i == 59) {
                            html.push('</fieldset>')
                        }
                    } else {
                        txt = i + ':00';
                        html.push('<span class="minute' + clsName + '">' + hours + ':' + (i < 10 ? '0' + i : i) + '</span>')
                    }
                }
                this.picker.find('.datetimepicker-minutes td').html(html.join(''));
                var currentYear = this.date.getUTCFullYear();
                var months = this.picker.find('.datetimepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');
                if (currentYear == year) {
                    months.eq(this.date.getUTCMonth()).addClass('active')
                }
                if (year < startYear || year > endYear) {
                    months.addClass('disabled')
                }
                if (year == startYear) {
                    months.slice(0, startMonth).addClass('disabled')
                }
                if (year == endYear) {
                    months.slice(endMonth + 1).addClass('disabled')
                }
                html = '';
                year = parseInt(year / 10, 10) * 10;
                var yearCont = this.picker.find('.datetimepicker-years').find('th:eq(1)').text(year + '-' + (year + 9)).end().find('td');
                year -= 1;
                for (var i = -1; i < 11; i++) {
                    html += '<span class="year' + (i == -1 || i == 10 ? ' old' : '') + (currentYear == year ? ' active' : '') + (year < startYear || year > endYear ? ' disabled' : '') + '">' + year + '</span>';
                    year += 1
                }
                yearCont.html(html);
                this.place()
            },updateNavArrows: function() {
                var d = new Date(this.viewDate), year = d.getUTCFullYear(), month = d.getUTCMonth(), day = d.getUTCDate(), hour = d.getUTCHours();
                switch (this.viewMode) {
                    case 0:
                        if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth() && day <= this.startDate.getUTCDate() && hour <= this.startDate.getUTCHours()) {
                            this.picker.find('.prev').css({visibility: 'hidden'})
                        } else {
                            this.picker.find('.prev').css({visibility: 'visible'})
                        }
                        if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth() && day >= this.endDate.getUTCDate() && hour >= this.endDate.getUTCHours()) {
                            this.picker.find('.next').css({visibility: 'hidden'})
                        } else {
                            this.picker.find('.next').css({visibility: 'visible'})
                        }
                        break;
                    case 1:
                        if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth() && day <= this.startDate.getUTCDate()) {
                            this.picker.find('.prev').css({visibility: 'hidden'})
                        } else {
                            this.picker.find('.prev').css({visibility: 'visible'})
                        }
                        if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth() && day >= this.endDate.getUTCDate()) {
                            this.picker.find('.next').css({visibility: 'hidden'})
                        } else {
                            this.picker.find('.next').css({visibility: 'visible'})
                        }
                        break;
                    case 2:
                        if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth()) {
                            this.picker.find('.prev').css({visibility: 'hidden'})
                        } else {
                            this.picker.find('.prev').css({visibility: 'visible'})
                        }
                        if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth()) {
                            this.picker.find('.next').css({visibility: 'hidden'})
                        } else {
                            this.picker.find('.next').css({visibility: 'visible'})
                        }
                        break;
                    case 3:
                    case 4:
                        if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
                            this.picker.find('.prev').css({visibility: 'hidden'})
                        } else {
                            this.picker.find('.prev').css({visibility: 'visible'})
                        }
                        if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
                            this.picker.find('.next').css({visibility: 'hidden'})
                        } else {
                            this.picker.find('.next').css({visibility: 'visible'})
                        }
                        break
                }
            },click: function(e) {
                e.stopPropagation();
                e.preventDefault();
                var target = $(e.target).closest('span, td, th, legend');
                if (target.length == 1) {
                    if (target.is('.disabled')) {
                        this.element.trigger({type: 'outOfRange',date: this.viewDate,startDate: this.startDate,endDate: this.endDate});
                        return
                    }
                    switch (target[0].nodeName.toLowerCase()) {
                        case 'th':
                            switch (target[0].className) {
                                case 'switch':
                                    this.showMode(1);
                                    break;
                                case 'prev':
                                case 'next':
                                    var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
                                    switch (this.viewMode) {
                                        case 0:
                                            this.viewDate = this.moveHour(this.viewDate, dir);
                                            break;
                                        case 1:
                                            this.viewDate = this.moveDate(this.viewDate, dir);
                                            break;
                                        case 2:
                                            this.viewDate = this.moveMonth(this.viewDate, dir);
                                            break;
                                        case 3:
                                        case 4:
                                            this.viewDate = this.moveYear(this.viewDate, dir);
                                            break
                                    }
                                    this.fill();
                                    break;
                                case 'today':
                                    var date = new Date();
                                    date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);
                                    this.viewMode = this.startViewMode;
                                    this.showMode(0);
                                    this._setDate(date);
                                    this.fill();
                                    if (this.autoclose) {
                                        this.hide()
                                    }
                                    break
                            }
                            break;
                        case 'span':
                            if (!target.is('.disabled')) {
                                var year = this.viewDate.getUTCFullYear(), month = this.viewDate.getUTCMonth(), day = this.viewDate.getUTCDate(), hours = this.viewDate.getUTCHours(), minutes = this.viewDate.getUTCMinutes(), seconds = this.viewDate.getUTCSeconds();
                                if (target.is('.month')) {
                                    this.viewDate.setUTCDate(1);
                                    month = target.parent().find('span').index(target);
                                    day = this.viewDate.getUTCDate();
                                    this.viewDate.setUTCMonth(month);
                                    this.element.trigger({type: 'changeMonth',date: this.viewDate});
                                    if (this.viewSelect >= 3) {
                                        this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0))
                                    }
                                } else if (target.is('.year')) {
                                    this.viewDate.setUTCDate(1);
                                    year = parseInt(target.text(), 10) || 0;
                                    this.viewDate.setUTCFullYear(year);
                                    this.element.trigger({type: 'changeYear',date: this.viewDate});
                                    if (this.viewSelect >= 4) {
                                        this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0))
                                    }
                                } else if (target.is('.hour')) {
                                    hours = parseInt(target.text(), 10) || 0;
                                    if (target.hasClass('hour_am') || target.hasClass('hour_pm')) {
                                        if (hours == 12 && target.hasClass('hour_am')) {
                                            hours = 0
                                        } else if (hours != 12 && target.hasClass('hour_pm')) {
                                            hours += 12
                                        }
                                    }
                                    this.viewDate.setUTCHours(hours);
                                    this.element.trigger({type: 'changeHour',date: this.viewDate});
                                    if (this.viewSelect >= 1) {
                                        this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0))
                                    }
                                } else if (target.is('.minute')) {
                                    minutes = parseInt(target.text().substr(target.text().indexOf(':') + 1), 10) || 0;
                                    this.viewDate.setUTCMinutes(minutes);
                                    this.element.trigger({type: 'changeMinute',date: this.viewDate});
                                    if (this.viewSelect >= 0) {
                                        this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0))
                                    }
                                }
                                if (this.viewMode != 0) {
                                    var oldViewMode = this.viewMode;
                                    this.showMode(-1);
                                    this.fill();
                                    if (oldViewMode == this.viewMode && this.autoclose) {
                                        this.hide()
                                    }
                                } else {
                                    this.fill();
                                    if (this.autoclose) {
                                        this.hide()
                                    }
                                }
                            }
                            break;
                        case 'td':
                            if (target.is('.day') && !target.is('.disabled')) {
                                var day = parseInt(target.text(), 10) || 1;
                                var year = this.viewDate.getUTCFullYear(), month = this.viewDate.getUTCMonth(), hours = this.viewDate.getUTCHours(), minutes = this.viewDate.getUTCMinutes(), seconds = this.viewDate.getUTCSeconds();
                                if (target.is('.old')) {
                                    if (month === 0) {
                                        month = 11;
                                        year -= 1
                                    } else {
                                        month -= 1
                                    }
                                } else if (target.is('.new')) {
                                    if (month == 11) {
                                        month = 0;
                                        year += 1
                                    } else {
                                        month += 1
                                    }
                                }
                                this.viewDate.setUTCDate(day);
                                this.viewDate.setUTCMonth(month);
                                this.viewDate.setUTCFullYear(year);
                                this.element.trigger({type: 'changeDay',date: this.viewDate});
                                if (this.viewSelect >= 2) {
                                    this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0))
                                }
                            }
                            var oldViewMode = this.viewMode;
                            this.showMode(-1);
                            this.fill();
                            if (oldViewMode == this.viewMode && this.autoclose) {
                                this.hide()
                            }
                            break
                    }
                }
            },_setDate: function(date, which) {
                if (!which || which == 'date')
                    this.date = date;
                if (!which || which == 'view')
                    this.viewDate = date;
                this.fill();
                this.setValue();
                var element;
                if (this.isInput) {
                    element = this.element
                } else if (this.component) {
                    element = this.element.find('input')
                }
                if (element) {
                    element.change();
                    if (this.autoclose && (!which || which == 'date')) {
                    }
                }
                this.element.trigger({type: 'changeDate',date: this.date})
            },moveMinute: function(date, dir) {
                if (!dir)
                    return date;
                var new_date = new Date(date.valueOf());
                new_date.setUTCMinutes(new_date.getUTCMinutes() + (dir * this.minuteStep));
                return new_date
            },moveHour: function(date, dir) {
                if (!dir)
                    return date;
                var new_date = new Date(date.valueOf());
                new_date.setUTCHours(new_date.getUTCHours() + dir);
                return new_date
            },moveDate: function(date, dir) {
                if (!dir)
                    return date;
                var new_date = new Date(date.valueOf());
                new_date.setUTCDate(new_date.getUTCDate() + dir);
                return new_date
            },moveMonth: function(date, dir) {
                if (!dir)
                    return date;
                var new_date = new Date(date.valueOf()), day = new_date.getUTCDate(), month = new_date.getUTCMonth(), mag = Math.abs(dir), new_month, test;
                dir = dir > 0 ? 1 : -1;
                if (mag == 1) {
                    test = dir == -1 ? function() {
                        return new_date.getUTCMonth() == month
                    } : function() {
                        return new_date.getUTCMonth() != new_month
                    };
                    new_month = month + dir;
                    new_date.setUTCMonth(new_month);
                    if (new_month < 0 || new_month > 11)
                        new_month = (new_month + 12) % 12
                } else {
                    for (var i = 0; i < mag; i++)
                        new_date = this.moveMonth(new_date, dir);
                    new_month = new_date.getUTCMonth();
                    new_date.setUTCDate(day);
                    test = function() {
                        return new_month != new_date.getUTCMonth()
                    }
                }
                while (test()) {
                    new_date.setUTCDate(--day);
                    new_date.setUTCMonth(new_month)
                }
                return new_date
            },moveYear: function(date, dir) {
                return this.moveMonth(date, dir * 12)
            },dateWithinRange: function(date) {
                return date >= this.startDate && date <= this.endDate
            },keydown: function(e) {
                if (this.picker.is(':not(:visible)')) {
                    if (e.keyCode == 27)
                        this.show();
                    return
                }
                var dateChanged = false, dir, day, month, newDate, newViewDate;
                switch (e.keyCode) {
                    case 27:
                        this.hide();
                        e.preventDefault();
                        break;
                    case 37:
                    case 39:
                        if (!this.keyboardNavigation)
                            break;
                        dir = e.keyCode == 37 ? -1 : 1;
                        viewMode = this.viewMode;
                        if (e.ctrlKey) {
                            viewMode += 2
                        } else if (e.shiftKey) {
                            viewMode += 1
                        }
                        if (viewMode == 4) {
                            newDate = this.moveYear(this.date, dir);
                            newViewDate = this.moveYear(this.viewDate, dir)
                        } else if (viewMode == 3) {
                            newDate = this.moveMonth(this.date, dir);
                            newViewDate = this.moveMonth(this.viewDate, dir)
                        } else if (viewMode == 2) {
                            newDate = this.moveDate(this.date, dir);
                            newViewDate = this.moveDate(this.viewDate, dir)
                        } else if (viewMode == 1) {
                            newDate = this.moveHour(this.date, dir);
                            newViewDate = this.moveHour(this.viewDate, dir)
                        } else if (viewMode == 0) {
                            newDate = this.moveMinute(this.date, dir);
                            newViewDate = this.moveMinute(this.viewDate, dir)
                        }
                        if (this.dateWithinRange(newDate)) {
                            this.date = newDate;
                            this.viewDate = newViewDate;
                            this.setValue();
                            this.update();
                            e.preventDefault();
                            dateChanged = true
                        }
                        break;
                    case 38:
                    case 40:
                        if (!this.keyboardNavigation)
                            break;
                        dir = e.keyCode == 38 ? -1 : 1;
                        viewMode = this.viewMode;
                        if (e.ctrlKey) {
                            viewMode += 2
                        } else if (e.shiftKey) {
                            viewMode += 1
                        }
                        if (viewMode == 4) {
                            newDate = this.moveYear(this.date, dir);
                            newViewDate = this.moveYear(this.viewDate, dir)
                        } else if (viewMode == 3) {
                            newDate = this.moveMonth(this.date, dir);
                            newViewDate = this.moveMonth(this.viewDate, dir)
                        } else if (viewMode == 2) {
                            newDate = this.moveDate(this.date, dir * 7);
                            newViewDate = this.moveDate(this.viewDate, dir * 7)
                        } else if (viewMode == 1) {
                            if (this.showMeridian) {
                                newDate = this.moveHour(this.date, dir * 6);
                                newViewDate = this.moveHour(this.viewDate, dir * 6)
                            } else {
                                newDate = this.moveHour(this.date, dir * 4);
                                newViewDate = this.moveHour(this.viewDate, dir * 4)
                            }
                        } else if (viewMode == 0) {
                            newDate = this.moveMinute(this.date, dir * 4);
                            newViewDate = this.moveMinute(this.viewDate, dir * 4)
                        }
                        if (this.dateWithinRange(newDate)) {
                            this.date = newDate;
                            this.viewDate = newViewDate;
                            this.setValue();
                            this.update();
                            e.preventDefault();
                            dateChanged = true
                        }
                        break;
                    case 13:
                        if (this.viewMode != 0) {
                            var oldViewMode = this.viewMode;
                            this.showMode(-1);
                            this.fill();
                            if (oldViewMode == this.viewMode && this.autoclose) {
                                this.hide()
                            }
                        } else {
                            this.fill();
                            if (this.autoclose) {
                                this.hide()
                            }
                        }
                        e.preventDefault();
                        break;
                    case 9:
                        this.hide();
                        break
                }
                if (dateChanged) {
                    var element;
                    if (this.isInput) {
                        element = this.element
                    } else if (this.component) {
                        element = this.element.find('input')
                    }
                    if (element) {
                        element.change()
                    }
                    this.element.trigger({type: 'changeDate',date: this.date})
                }
            },showMode: function(dir) {
                if (dir) {
                    var newViewMode = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + dir));
                    if (newViewMode >= this.minView && newViewMode <= this.maxView) {
                        this.element.trigger({type: 'changeMode',date: this.viewDate,oldViewMode: this.viewMode,newViewMode: newViewMode});
                        this.viewMode = newViewMode
                    }
                }
                this.picker.find('>div').hide().filter('.datetimepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
                this.updateNavArrows()
            },reset: function(e) {
                this._setDate(null, 'date')
            }};
        $.fn.datetimepicker = function(option) {
            var args = Array.apply(null, arguments);
            args.shift();
            return this.each(function() {
                var $this = $(this), data = $this.data('datetimepicker'), options = typeof option == 'object' && option;
                if (!data) {
                    $this.data('datetimepicker', (data = new Datetimepicker(this, $.extend({}, $.fn.datetimepicker.defaults, options))))
                }
                if (typeof option == 'string' && typeof data[option] == 'function') {
                    data[option].apply(data, args)
                }
            })
        };
        $.fn.datetimepicker.defaults = {};
        $.fn.datetimepicker.Constructor = Datetimepicker;
        var dates = $.fn.datetimepicker.dates = {en: {days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],meridiem: ["am", "pm"],suffix: ["st", "nd", "rd", "th"],today: "Today"}};
        var DPGlobal = {modes: [{clsName: 'minutes',navFnc: 'Hours',navStep: 1}, {clsName: 'hours',navFnc: 'Date',navStep: 1}, {clsName: 'days',navFnc: 'Month',navStep: 1}, {clsName: 'months',navFnc: 'FullYear',navStep: 1}, {clsName: 'years',navFnc: 'FullYear',navStep: 10}],isLeapYear: function(year) {
                return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
            },getDaysInMonth: function(year, month) {
                return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
            },getDefaultFormat: function(type, field) {
                if (type == "standard") {
                    if (field == 'input')
                        return 'yyyy-mm-dd hh:ii';
                    else
                        return 'yyyy-mm-dd hh:ii:ss'
                } else if (type == "php") {
                    if (field == 'input')
                        return 'Y-m-d H:i';
                    else
                        return 'Y-m-d H:i:s'
                } else {
                    throw new Error("Invalid format type.");
                }
            },validParts: function(type) {
                if (type == "standard") {
                    return /hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g
                } else if (type == "php") {
                    return /[dDjlNwzFmMnStyYaABgGhHis]/g
                } else {
                    throw new Error("Invalid format type.");
                }
            },nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,parseFormat: function(format, type) {
                var separators = format.replace(this.validParts(type), '\0').split('\0'), parts = format.match(this.validParts(type));
                if (!separators || !separators.length || !parts || parts.length == 0) {
                    throw new Error("Invalid date format.");
                }
                return {separators: separators,parts: parts}
            },parseDate: function(date, format, language, type) {
                if (date instanceof Date) {
                    var dateUTC = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
                    dateUTC.setMilliseconds(0);
                    return dateUTC
                }
                if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
                    format = this.parseFormat('yyyy-mm-dd', type)
                }
                if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)) {
                    format = this.parseFormat('yyyy-mm-dd hh:ii', type)
                }
                if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)) {
                    format = this.parseFormat('yyyy-mm-dd hh:ii:ss', type)
                }
                if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)) {
                    var part_re = /([-+]\d+)([dmwy])/, parts = date.match(/([-+]\d+)([dmwy])/g), part, dir;
                    date = new Date();
                    for (var i = 0; i < parts.length; i++) {
                        part = part_re.exec(parts[i]);
                        dir = parseInt(part[1]);
                        switch (part[2]) {
                            case 'd':
                                date.setUTCDate(date.getUTCDate() + dir);
                                break;
                            case 'm':
                                date = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, date, dir);
                                break;
                            case 'w':
                                date.setUTCDate(date.getUTCDate() + dir * 7);
                                break;
                            case 'y':
                                date = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, date, dir);
                                break
                        }
                    }
                    return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), 0)
                }
                var parts = date && date.match(this.nonpunctuation) || [], date = new Date(0, 0, 0, 0, 0, 0, 0), parsed = {}, setters_order = ['hh', 'h', 'ii', 'i', 'ss', 's', 'yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'D', 'DD', 'd', 'dd', 'H', 'HH', 'p', 'P'], setters_map = {hh: function(d, v) {
                        return d.setUTCHours(v)
                    },h: function(d, v) {
                        return d.setUTCHours(v)
                    },HH: function(d, v) {
                        return d.setUTCHours(v == 12 ? 0 : v)
                    },H: function(d, v) {
                        return d.setUTCHours(v == 12 ? 0 : v)
                    },ii: function(d, v) {
                        return d.setUTCMinutes(v)
                    },i: function(d, v) {
                        return d.setUTCMinutes(v)
                    },ss: function(d, v) {
                        return d.setUTCSeconds(v)
                    },s: function(d, v) {
                        return d.setUTCSeconds(v)
                    },yyyy: function(d, v) {
                        return d.setUTCFullYear(v)
                    },yy: function(d, v) {
                        return d.setUTCFullYear(2000 + v)
                    },m: function(d, v) {
                        v -= 1;
                        while (v < 0)
                            v += 12;
                        v %= 12;
                        d.setUTCMonth(v);
                        while (d.getUTCMonth() != v)
                            d.setUTCDate(d.getUTCDate() - 1);
                        return d
                    },d: function(d, v) {
                        return d.setUTCDate(v)
                    },p: function(d, v) {
                        return d.setUTCHours(v == 1 ? d.getUTCHours() + 12 : d.getUTCHours())
                    }}, val, filtered, part;
                setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
                setters_map['dd'] = setters_map['d'];
                setters_map['P'] = setters_map['p'];
                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
                if (parts.length == format.parts.length) {
                    for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
                        val = parseInt(parts[i], 10);
                        part = format.parts[i];
                        if (isNaN(val)) {
                            switch (part) {
                                case 'MM':
                                    filtered = $(dates[language].months).filter(function() {
                                        var m = this.slice(0, parts[i].length), p = parts[i].slice(0, m.length);
                                        return m == p
                                    });
                                    val = $.inArray(filtered[0], dates[language].months) + 1;
                                    break;
                                case 'M':
                                    filtered = $(dates[language].monthsShort).filter(function() {
                                        var m = this.slice(0, parts[i].length), p = parts[i].slice(0, m.length);
                                        return m == p
                                    });
                                    val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                                    break;
                                case 'p':
                                case 'P':
                                    val = $.inArray(parts[i].toLowerCase(), dates[language].meridiem);
                                    break
                            }
                        }
                        parsed[part] = val
                    }
                    for (var i = 0, s; i < setters_order.length; i++) {
                        s = setters_order[i];
                        if (s in parsed && !isNaN(parsed[s]))
                            setters_map[s](date, parsed[s])
                    }
                }
                return date
            },formatDate: function(date, format, language, type) {
                if (date == null) {
                    return ''
                }
                var val;
                if (type == 'standard') {
                    val = {yy: date.getUTCFullYear().toString().substring(2),yyyy: date.getUTCFullYear(),m: date.getUTCMonth() + 1,M: dates[language].monthsShort[date.getUTCMonth()],MM: dates[language].months[date.getUTCMonth()],d: date.getUTCDate(),D: dates[language].daysShort[date.getUTCDay()],DD: dates[language].days[date.getUTCDay()],p: (dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),h: date.getUTCHours(),i: date.getUTCMinutes(),s: date.getUTCSeconds()};
                    val.H = (val.h % 12 == 0 ? 12 : val.h % 12);
                    val.HH = (val.H < 10 ? '0' : '') + val.H;
                    val.P = val.p.toUpperCase();
                    val.hh = (val.h < 10 ? '0' : '') + val.h;
                    val.ii = (val.i < 10 ? '0' : '') + val.i;
                    val.ss = (val.s < 10 ? '0' : '') + val.s;
                    val.dd = (val.d < 10 ? '0' : '') + val.d;
                    val.mm = (val.m < 10 ? '0' : '') + val.m
                } else if (type == 'php') {
                    val = {y: date.getUTCFullYear().toString().substring(2),Y: date.getUTCFullYear(),F: dates[language].months[date.getUTCMonth()],M: dates[language].monthsShort[date.getUTCMonth()],n: date.getUTCMonth() + 1,t: DPGlobal.getDaysInMonth(date.getUTCFullYear(), date.getUTCMonth()),j: date.getUTCDate(),l: dates[language].days[date.getUTCDay()],D: dates[language].daysShort[date.getUTCDay()],w: date.getUTCDay(),N: (date.getUTCDay() == 0 ? 7 : date.getUTCDay()),S: (date.getUTCDate() % 10 <= dates[language].suffix.length ? dates[language].suffix[date.getUTCDate() % 10 - 1] : ''),a: (dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),g: (date.getUTCHours() % 12 == 0 ? 12 : date.getUTCHours() % 12),G: date.getUTCHours(),i: date.getUTCMinutes(),s: date.getUTCSeconds()};
                    val.m = (val.n < 10 ? '0' : '') + val.n;
                    val.d = (val.j < 10 ? '0' : '') + val.j;
                    val.A = val.a.toString().toUpperCase();
                    val.h = (val.g < 10 ? '0' : '') + val.g;
                    val.H = (val.G < 10 ? '0' : '') + val.G;
                    val.i = (val.i < 10 ? '0' : '') + val.i;
                    val.s = (val.s < 10 ? '0' : '') + val.s
                } else {
                    throw new Error("Invalid format type.");
                }
                var date = [], seps = $.extend([], format.separators);
                for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
                    if (seps.length)
                        date.push(seps.shift());
                    date.push(val[format.parts[i]])
                }
                return date.join('')
            },convertViewMode: function(viewMode) {
                switch (viewMode) {
                    case 4:
                    case 'decade':
                        viewMode = 4;
                        break;
                    case 3:
                    case 'year':
                        viewMode = 3;
                        break;
                    case 2:
                    case 'month':
                        viewMode = 2;
                        break;
                    case 1:
                    case 'day':
                        viewMode = 1;
                        break;
                    case 0:
                    case 'hour':
                        viewMode = 0;
                        break
                }
                return viewMode
            },headTemplate: '<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};
        DPGlobal.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + DPGlobal.headTemplate + '<tbody></tbody>' + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div></div>';
        $.fn.datetimepicker.DPGlobal = DPGlobal
    })(jQuery);
    ;
    (function($) {
        $.fn.datetimepicker.dates['zh-CN'] = {days: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d", "\u661f\u671f\u65e5"],daysShort: ["\u5468\u65e5", "\u5468\u4e00", "\u5468\u4e8c", "\u5468\u4e09", "\u5468\u56db", "\u5468\u4e94", "\u5468\u516d", "\u5468\u65e5"],daysMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u65e5"],months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],monthsShort: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],today: "\u4eca\u65e5",suffix: [],meridiem: []};
    }(jQuery));
    ;
    (function($) {
        $.fn.datetimepicker.dates['zh-TW'] = {days: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d", "\u661f\u671f\u65e5"],daysShort: ["\u9031\u65e5", "\u9031\u4e00", "\u9031\u4e8c", "\u9031\u4e09", "\u9031\u56db", "\u9031\u4e94", "\u9031\u516d", "\u9031\u65e5"],daysMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u65e5"],months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],monthsShort: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],today: "\u4eca\u65e5",suffix: [],meridiem: []};
    }(jQuery));
    
    var lang = webhelper.getLang();
    $.fn.editable.defaults.mode = 'inline';
    $.fn.datetimepicker.defaults = {
        language: lang === 'en_US' ? 'en' : (lang === 'zh_CN' ? 'zh-CN' : 'zh-TW'),
        minView: 'month',
        format: 'yyyy-mm-dd',
        weekStart: 1,
        todayHighlight: true
    };
});
;

;










