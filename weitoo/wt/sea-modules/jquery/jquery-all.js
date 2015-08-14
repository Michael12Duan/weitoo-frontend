define([], function(require, exports, module) {
    window.$ = window.jQuery = require('jquery');
    require('jquery-cookie');
    require("jquery-hotkeys");
    require("jquery-placeholder");
    require("jquery-noty");
    require("select2");
});

/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery.min.map
 */
(function(e, t) {
    var n, r, i = typeof t,
        o = e.document,
        a = e.location,
        s = e.jQuery,
        u = e.$,
        l = {},
        c = [],
        p = "1.9.1",
        f = c.concat,
        d = c.push,
        h = c.slice,
        g = c.indexOf,
        m = l.toString,
        y = l.hasOwnProperty,
        v = p.trim,
        b = function(e, t) {
            return new b.fn.init(e, t, r)
        },
        x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = /\S+/g,
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        k = /^[\],:{}\s]*$/,
        E = /(?:^|:|,)(?:\s*\[)+/g,
        S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        j = /^-ms-/,
        D = /-([\da-z])/gi,
        L = function(e, t) {
            return t.toUpperCase()
        },
        H = function(e) {
            (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(),
                b.ready())
        },
        q = function() {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1),
                e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H),
                e.detachEvent("onload", H))
        };
    b.fn = b.prototype = {
            jquery: p,
            constructor: b,
            init: function(e, n, r) {
                var i, a;
                if (!e)
                    return this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n)
                        return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof b ? n[0] : n,
                            b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)),
                            C.test(i[1]) && b.isPlainObject(n))
                            for (i in n)
                                b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    if (a = o.getElementById(i[2]),
                        a && a.parentNode) {
                        if (a.id !== i[2])
                            return r.find(e);
                        this.length = 1,
                            this[0] = a
                    }
                    return this.context = o,
                        this.selector = e,
                        this
                }
                return e.nodeType ? (this.context = this[0] = e,
                    this.length = 1,
                    this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
                        this.context = e.context),
                    b.makeArray(e, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return h.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = b.merge(this.constructor(), e);
                return t.prevObject = this,
                    t.context = this.context,
                    t
            },
            each: function(e, t) {
                return b.each(this, e, t)
            },
            ready: function(e) {
                return b.ready.promise().done(e),
                    this
            },
            slice: function() {
                return this.pushStack(h.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(b.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: d,
            sort: [].sort,
            splice: [].splice
        },
        b.fn.init.prototype = b.fn,
        b.extend = b.fn.extend = function() {
            var e, n, r, i, o, a, s = arguments[0] || {},
                u = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s,
                    s = arguments[1] || {},
                    u = 2),
                "object" == typeof s || b.isFunction(s) || (s = {}),
                l === u && (s = this,
                    --u); l > u; u++)
                if (null != (o = arguments[u]))
                    for (i in o)
                        e = s[i],
                        r = o[i],
                        s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1,
                                a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {},
                            s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
            return s
        },
        b.extend({
            noConflict: function(t) {
                return e.$ === b && (e.$ = u),
                    t && e.jQuery === b && (e.jQuery = s),
                    b
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? b.readyWait++ : b.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--b.readyWait : !b.isReady) {
                    if (!o.body)
                        return setTimeout(b.ready);
                    b.isReady = !0,
                        e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]),
                            b.fn.trigger && b(o).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === b.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === b.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (n) {
                    return !1
                }
                var r;
                for (r in e)
                ;
                return r === t || y.call(e, r)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            error: function(e) {
                throw Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e)
                    return null;
                "boolean" == typeof t && (n = t,
                        t = !1),
                    t = t || o;
                var r = C.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i),
                    i && b(i).remove(),
                    b.merge([], r.childNodes))
            },
            parseJSON: function(n) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n),
                    n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n),
                    t)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || "string" != typeof n)
                    return null;
                try {
                    e.DOMParser ? (i = new DOMParser,
                        r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                        r.async = "false",
                        r.loadXML(n))
                } catch (o) {
                    r = t
                }
                return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n),
                    r
            },
            noop: function() {},
            globalEval: function(t) {
                t && b.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(j, "ms-").replace(D, L)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var r, i = 0,
                    o = e.length,
                    a = M(e);
                if (n) {
                    if (a) {
                        for (; o > i; i++)
                            if (r = t.apply(e[i], n),
                                r === !1)
                                break
                    } else
                        for (i in e)
                            if (r = t.apply(e[i], n),
                                r === !1)
                                break
                } else if (a) {
                    for (; o > i; i++)
                        if (r = t.call(e[i], i, e[i]),
                            r === !1)
                            break
                } else
                    for (i in e)
                        if (r = t.call(e[i], i, e[i]),
                            r === !1)
                            break;
                return e
            },
            trim: v && !v.call("\ufeff\u00a0") ? function(e) {
                return null == e ? "" : v.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(T, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)),
                    n
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (g)
                        return g.call(t, e, n);
                    for (r = t.length,
                        n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof r)
                    for (; r > o; o++)
                        e[i++] = n[o];
                else
                    while (n[o] !== t)
                        e[i++] = n[o++];
                return e.length = i,
                    e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    o = 0,
                    a = e.length;
                for (n = !!n; a > o; o++)
                    r = !!t(e[o], o),
                    n !== r && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var r, i = 0,
                    o = e.length,
                    a = M(e),
                    s = [];
                if (a)
                    for (; o > i; i++)
                        r = t(e[i], i, n),
                        null != r && (s[s.length] = r);
                else
                    for (i in e)
                        r = t(e[i], i, n),
                        null != r && (s[s.length] = r);
                return f.apply([], s)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, o;
                return "string" == typeof n && (o = e[n],
                        n = e,
                        e = o),
                    b.isFunction(e) ? (r = h.call(arguments, 2),
                        i = function() {
                            return e.apply(n || this, r.concat(h.call(arguments)))
                        },
                        i.guid = e.guid = e.guid || b.guid++,
                        i) : t
            },
            access: function(e, n, r, i, o, a, s) {
                var u = 0,
                    l = e.length,
                    c = null == r;
                if ("object" === b.type(r)) {
                    o = !0;
                    for (u in r)
                        b.access(e, n, u, r[u], !0, a, s)
                } else if (i !== t && (o = !0,
                        b.isFunction(i) || (s = !0),
                        c && (s ? (n.call(e, i),
                            n = null) : (c = n,
                            n = function(e, t, n) {
                                return c.call(b(e), n)
                            }
                        )),
                        n))
                    for (; l > u; u++)
                        n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
                return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
            },
            now: function() {
                return (new Date).getTime()
            }
        }),
        b.ready.promise = function(t) {
            if (!n)
                if (n = b.Deferred(),
                    "complete" === o.readyState)
                    setTimeout(b.ready);
                else if (o.addEventListener)
                o.addEventListener("DOMContentLoaded", H, !1),
                e.addEventListener("load", H, !1);
            else {
                o.attachEvent("onreadystatechange", H),
                    e.attachEvent("onload", H);
                var r = !1;
                try {
                    r = null == e.frameElement && o.documentElement
                } catch (i) {}
                r && r.doScroll && function a() {
                        if (!b.isReady) {
                            try {
                                r.doScroll("left")
                            } catch (e) {
                                return setTimeout(a, 50)
                            }
                            q(),
                                b.ready()
                        }
                    }
                    ()
            }
            return n.promise(t)
        },
        b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            l["[object " + t + "]"] = t.toLowerCase()
        });

    function M(e) {
        var t = e.length,
            n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = b(o);
    var _ = {};

    function F(e) {
        var t = _[e] = {};
        return b.each(e.match(w) || [], function(e, n) {
                t[n] = !0
            }),
            t
    }
    b.Callbacks = function(e) {
            e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
            var n, r, i, o, a, s, u = [],
                l = !e.once && [],
                c = function(t) {
                    for (r = e.memory && t,
                        i = !0,
                        a = s || 0,
                        s = 0,
                        o = u.length,
                        n = !0; u && o > a; a++)
                        if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            r = !1;
                            break
                        }
                    n = !1,
                        u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
                },
                p = {
                    add: function() {
                        if (u) {
                            var t = u.length;
                            (function i(t) {
                                b.each(t, function(t, n) {
                                    var r = b.type(n);
                                    "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                                })
                            })(arguments),
                            n ? o = u.length : r && (s = t,
                                c(r))
                        }
                        return this
                    },
                    remove: function() {
                        return u && b.each(arguments, function(e, t) {
                                var r;
                                while ((r = b.inArray(t, u, r)) > -1)
                                    u.splice(r, 1),
                                    n && (o >= r && o--,
                                        a >= r && a--)
                            }),
                            this
                    },
                    has: function(e) {
                        return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
                    },
                    empty: function() {
                        return u = [],
                            this
                    },
                    disable: function() {
                        return u = l = r = t,
                            this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return l = t,
                            r || p.disable(),
                            this
                    },
                    locked: function() {
                        return !l
                    },
                    fireWith: function(e, t) {
                        return t = t || [],
                            t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)),
                            this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments),
                            this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return p
        },
        b.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", b.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", b.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", b.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments),
                                this
                        },
                        then: function() {
                            var e = arguments;
                            return b.Deferred(function(n) {
                                b.each(t, function(t, o) {
                                        var a = o[0],
                                            s = b.isFunction(e[t]) && e[t];
                                        i[o[1]](function() {
                                            var e = s && s.apply(this, arguments);
                                            e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                        })
                                    }),
                                    e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? b.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then,
                    b.each(t, function(e, o) {
                        var a = o[2],
                            s = o[3];
                        r[o[1]] = a.add,
                            s && a.add(function() {
                                n = s
                            }, t[1 ^ e][2].disable, t[2][2].lock),
                            i[o[0]] = function() {
                                return i[o[0] + "With"](this === i ? r : this, arguments),
                                    this
                            },
                            i[o[0] + "With"] = a.fireWith
                    }),
                    r.promise(i),
                    e && e.call(i, i),
                    i
            },
            when: function(e) {
                var t = 0,
                    n = h.call(arguments),
                    r = n.length,
                    i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
                    o = 1 === i ? e : b.Deferred(),
                    a = function(e, t, n) {
                        return function(r) {
                            t[e] = this,
                                n[e] = arguments.length > 1 ? h.call(arguments) : r,
                                n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                        }
                    },
                    s, u, l;
                if (r > 1)
                    for (s = Array(r),
                        u = Array(r),
                        l = Array(r); r > t; t++)
                        n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
                return i || o.resolveWith(l, n),
                    o.promise()
            }
        }),
        b.support = function() {
            var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
            if (d.setAttribute("className", "t"),
                d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                n = d.getElementsByTagName("*"),
                r = d.getElementsByTagName("a")[0], !n || !r || !n.length)
                return {};
            s = o.createElement("select"),
                l = s.appendChild(o.createElement("option")),
                a = d.getElementsByTagName("input")[0],
                r.style.cssText = "top:1px;float:left;opacity:.5",
                t = {
                    getSetAttribute: "t" !== d.className,
                    leadingWhitespace: 3 === d.firstChild.nodeType,
                    tbody: !d.getElementsByTagName("tbody").length,
                    htmlSerialize: !!d.getElementsByTagName("link").length,
                    style: /top/.test(r.getAttribute("style")),
                    hrefNormalized: "/a" === r.getAttribute("href"),
                    opacity: /^0.5/.test(r.style.opacity),
                    cssFloat: !!r.style.cssFloat,
                    checkOn: !!a.value,
                    optSelected: l.selected,
                    enctype: !!o.createElement("form").enctype,
                    html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
                    boxModel: "CSS1Compat" === o.compatMode,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    boxSizingReliable: !0,
                    pixelPosition: !1
                },
                a.checked = !0,
                t.noCloneChecked = a.cloneNode(!0).checked,
                s.disabled = !0,
                t.optDisabled = !l.disabled;
            try {
                delete d.test
            } catch (h) {
                t.deleteExpando = !1
            }
            a = o.createElement("input"),
                a.setAttribute("value", ""),
                t.input = "" === a.getAttribute("value"),
                a.value = "t",
                a.setAttribute("type", "radio"),
                t.radioValue = "t" === a.value,
                a.setAttribute("checked", "t"),
                a.setAttribute("name", "t"),
                u = o.createDocumentFragment(),
                u.appendChild(a),
                t.appendChecked = a.checked,
                t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked,
                d.attachEvent && (d.attachEvent("onclick", function() {
                        t.noCloneEvent = !1
                    }),
                    d.cloneNode(!0).click());
            for (f in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                })
                d.setAttribute(c = "on" + f, "t"),
                t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
            return d.style.backgroundClip = "content-box",
                d.cloneNode(!0).style.backgroundClip = "",
                t.clearCloneStyle = "content-box" === d.style.backgroundClip,
                b(function() {
                    var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                        u = o.getElementsByTagName("body")[0];
                    u && (n = o.createElement("div"),
                        n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                        u.appendChild(n).appendChild(d),
                        d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                        a = d.getElementsByTagName("td"),
                        a[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                        p = 0 === a[0].offsetHeight,
                        a[0].style.display = "",
                        a[1].style.display = "none",
                        t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight,
                        d.innerHTML = "",
                        d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                        t.boxSizing = 4 === d.offsetWidth,
                        t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop,
                        e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top,
                            t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                                width: "4px"
                            }).width,
                            r = d.appendChild(o.createElement("div")),
                            r.style.cssText = d.style.cssText = s,
                            r.style.marginRight = r.style.width = "0",
                            d.style.width = "1px",
                            t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)),
                        typeof d.style.zoom !== i && (d.innerHTML = "",
                            d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1",
                            t.inlineBlockNeedsLayout = 3 === d.offsetWidth,
                            d.style.display = "block",
                            d.innerHTML = "<div></div>",
                            d.firstChild.style.width = "5px",
                            t.shrinkWrapBlocks = 3 !== d.offsetWidth,
                            t.inlineBlockNeedsLayout && (u.style.zoom = 1)),
                        u.removeChild(n),
                        n = d = a = r = null)
                }),
                n = s = u = l = r = a = null,
                t
        }
        ();
    var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        B = /([A-Z])/g;

    function P(e, n, r, i) {
        if (b.acceptData(e)) {
            var o, a, s = b.expando,
                u = "string" == typeof n,
                l = e.nodeType,
                p = l ? b.cache : e,
                f = l ? e[s] : e[s] && s;
            if (f && p[f] && (i || p[f].data) || !u || r !== t)
                return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s),
                    p[f] || (p[f] = {},
                        l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)),
                    o = p[f],
                    i || (o.data || (o.data = {}),
                        o = o.data),
                    r !== t && (o[b.camelCase(n)] = r),
                    u ? (a = o[n],
                        null == a && (a = o[b.camelCase(n)])) : a = o,
                    a
        }
    }

    function R(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, o, a = e.nodeType,
                s = a ? b.cache : e,
                u = a ? e[b.expando] : b.expando;
            if (s[u]) {
                if (t && (o = n ? s[u] : s[u].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t),
                        t = t in o ? [t] : t.split(" "));
                    for (r = 0,
                        i = t.length; i > r; r++)
                        delete o[t[r]];
                    if (!(n ? $ : b.isEmptyObject)(o))
                        return
                }
                (n || (delete s[u].data,
                    $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
            }
        }
    }
    b.extend({
            cache: {},
            expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e)
            },
            data: function(e, t, n) {
                return P(e, t, n)
            },
            removeData: function(e, t) {
                return R(e, t)
            },
            _data: function(e, t, n) {
                return P(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return R(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)
                    return !1;
                var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
                return true
            }
        }),
        b.fn.extend({
            data: function(e, n) {
                var r, i, o = this[0],
                    a = 0,
                    s = null;
                if (e === t) {
                    if (this.length && (s = b.data(o),
                            1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                        for (r = o.attributes; r.length > a; a++)
                            i = r[a].name,
                            i.indexOf("data-") || (i = b.camelCase(i.slice(5)),
                                W(o, i, s[i]));
                        b._data(o, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof e ? this.each(function() {
                    b.data(this, e)
                }) : b.access(this, function(n) {
                    return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function() {
                            b.data(this, e, n)
                        }),
                        t)
                }, null, n, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    b.removeData(this, e)
                })
            }
        });

    function W(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(B, "-$1").toLowerCase();
            if (r = e.getAttribute(i),
                "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
                } catch (o) {}
                b.data(e, n, r)
            } else
                r = t
        }
        return r
    }

    function $(e) {
        var t;
        for (t in e)
            if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    b.extend({
            queue: function(e, n, r) {
                var i;
                return e ? (n = (n || "fx") + "queue",
                    i = b._data(e, n),
                    r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)),
                    i || []) : t
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = b.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = b._queueHooks(e, t),
                    a = function() {
                        b.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(),
                        r--),
                    o.cur = i,
                    i && ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return b._data(e, n) || b._data(e, n, {
                    empty: b.Callbacks("once memory").add(function() {
                        b._removeData(e, t + "queue"),
                            b._removeData(e, n)
                    })
                })
            }
        }),
        b.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return "string" != typeof e && (n = e,
                        e = "fx",
                        r--),
                    r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function() {
                        var t = b.queue(this, e, n);
                        b._queueHooks(this, e),
                            "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    b.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = b.fx ? b.fx.speeds[e] || e : e,
                    t = t || "fx",
                    this.queue(t, function(t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function() {
                            clearTimeout(r)
                        }
                    })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var r, i = 1,
                    o = b.Deferred(),
                    a = this,
                    s = this.length,
                    u = function() {
                        --i || o.resolveWith(a, [a])
                    };
                "string" != typeof e && (n = e,
                        e = t),
                    e = e || "fx";
                while (s--)
                    r = b._data(a[s], e + "queueHooks"),
                    r && r.empty && (i++,
                        r.empty.add(u));
                return u(),
                    o.promise(n)
            }
        });
    var I, z, X = /[\t\r\n]/g,
        U = /\r/g,
        V = /^(?:input|select|textarea|button|object)$/i,
        Y = /^(?:a|area)$/i,
        J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        G = /^(?:checked|selected)$/i,
        Q = b.support.getSetAttribute,
        K = b.support.input;
    b.fn.extend({
            attr: function(e, t) {
                return b.access(this, b.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    b.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return b.access(this, b.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = b.propFix[e] || e,
                    this.each(function() {
                        try {
                            this[e] = t,
                                delete this[e]
                        } catch (n) {}
                    })
            },
            addClass: function(e) {
                var t, n, r, i, o, a = 0,
                    s = this.length,
                    u = "string" == typeof e && e;
                if (b.isFunction(e))
                    return this.each(function(t) {
                        b(this).addClass(e.call(this, t, this.className))
                    });
                if (u)
                    for (t = (e || "").match(w) || []; s > a; a++)
                        if (n = this[a],
                            r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                            o = 0;
                            while (i = t[o++])
                                0 > r.indexOf(" " + i + " ") && (r += i + " ");
                            n.className = b.trim(r)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a = 0,
                    s = this.length,
                    u = 0 === arguments.length || "string" == typeof e && e;
                if (b.isFunction(e))
                    return this.each(function(t) {
                        b(this).removeClass(e.call(this, t, this.className))
                    });
                if (u)
                    for (t = (e || "").match(w) || []; s > a; a++)
                        if (n = this[a],
                            r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                            o = 0;
                            while (i = t[o++])
                                while (r.indexOf(" " + i + " ") >= 0)
                                    r = r.replace(" " + i + " ", " ");
                            n.className = e ? b.trim(r) : ""
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "boolean" == typeof t;
                return b.isFunction(e) ? this.each(function(n) {
                    b(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n) {
                        var o, a = 0,
                            s = b(this),
                            u = t,
                            l = e.match(w) || [];
                        while (o = l[a++])
                            u = r ? u : !s.hasClass(o),
                            s[u ? "addClass" : "removeClass"](o)
                    } else
                        (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className),
                            this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                var t = " " + e + " ",
                    n = 0,
                    r = this.length;
                for (; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0)
                        return !0;
                return !1
            },
            val: function(e) {
                var n, r, i, o = this[0]; {
                    if (arguments.length)
                        return i = b.isFunction(e),
                            this.each(function(n) {
                                var o, a = b(this);
                                1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e,
                                    null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function(e) {
                                        return null == e ? "" : e + ""
                                    })),
                                    r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()],
                                    r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                            });
                    if (o)
                        return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()],
                            r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value,
                                "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
                }
            }
        }),
        b.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r = e.options,
                            i = e.selectedIndex,
                            o = "select-one" === e.type || 0 > i,
                            a = o ? null : [],
                            s = o ? i + 1 : r.length,
                            u = 0 > i ? s : o ? i : 0;
                        for (; s > u; u++)
                            if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                                if (t = b(n).val(),
                                    o)
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        var n = b.makeArray(t);
                        return b(e).find("option").each(function() {
                                this.selected = b.inArray(b(this).val(), n) >= 0
                            }),
                            n.length || (e.selectedIndex = -1),
                            n
                    }
                }
            },
            attr: function(e, n, r) {
                var o, a, s, u = e.nodeType;
                if (e && 3 !== u && 8 !== u && 2 !== u)
                    return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e),
                        a && (n = n.toLowerCase(),
                            o = b.attrHooks[n] || (J.test(n) ? z : I)),
                        r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)),
                            null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""),
                            r) : (b.removeAttr(e, n),
                            t))
            },
            removeAttr: function(e, t) {
                var n, r, i = 0,
                    o = t && t.match(w);
                if (o && 1 === e.nodeType)
                    while (n = o[i++])
                        r = b.propFix[n] || n,
                        J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""),
                        e.removeAttribute(Q ? n : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, n, r) {
                var i, o, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return a = 1 !== s || !b.isXMLDoc(e),
                        a && (n = b.propFix[n] || n,
                            o = b.propHooks[n]),
                        r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }),
        z = {
            get: function(e, n) {
                var r = b.prop(e, n),
                    i = "boolean" == typeof r && e.getAttribute(n),
                    o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
                return o && o.value !== !1 ? n.toLowerCase() : t
            },
            set: function(e, t, n) {
                return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0,
                    n
            }
        },
        K && Q || (b.attrHooks.value = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
            },
            set: function(e, n, r) {
                return b.nodeName(e, "input") ? (e.defaultValue = n,
                    t) : I && I.set(e, n, r)
            }
        }),
        Q || (I = b.valHooks.button = {
                get: function(e, n) {
                    var r = e.getAttributeNode(n);
                    return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
                },
                set: function(e, n, r) {
                    var i = e.getAttributeNode(r);
                    return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
                        i.value = n += "",
                        "value" === r || n === e.getAttribute(r) ? n : t
                }
            },
            b.attrHooks.contenteditable = {
                get: I.get,
                set: function(e, t, n) {
                    I.set(e, "" === t ? !1 : t, n)
                }
            },
            b.each(["width", "height"], function(e, n) {
                b.attrHooks[n] = b.extend(b.attrHooks[n], {
                    set: function(e, r) {
                        return "" === r ? (e.setAttribute(n, "auto"),
                            r) : t
                    }
                })
            })),
        b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
                b.attrHooks[n] = b.extend(b.attrHooks[n], {
                    get: function(e) {
                        var r = e.getAttribute(n, 2);
                        return null == r ? t : r
                    }
                })
            }),
            b.each(["href", "src"], function(e, t) {
                b.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            })),
        b.support.style || (b.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }),
        b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex),
                    null
            }
        })),
        b.support.enctype || (b.propFix.enctype = "encoding"),
        b.support.checkOn || b.each(["radio", "checkbox"], function() {
            b.valHooks[this] = {
                get: function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }),
        b.each(["radio", "checkbox"], function() {
            b.valHooks[this] = b.extend(b.valHooks[this], {
                set: function(e, n) {
                    return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
                }
            })
        });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }
    b.event = {
            global: {},
            add: function(e, n, r, o, a) {
                var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
                if (v) {
                    r.handler && (c = r,
                            r = c.handler,
                            a = c.selector),
                        r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                                return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
                            },
                            f.elem = e),
                        n = (n || "").match(w) || [""],
                        l = n.length;
                    while (l--)
                        s = rt.exec(n[l]) || [],
                        g = y = s[1],
                        m = (s[2] || "").split(".").sort(),
                        p = b.event.special[g] || {},
                        g = (a ? p.delegateType : p.bindType) || g,
                        p = b.event.special[g] || {},
                        d = b.extend({
                            type: g,
                            origType: y,
                            data: o,
                            handler: r,
                            guid: r.guid,
                            selector: a,
                            needsContext: a && b.expr.match.needsContext.test(a),
                            namespace: m.join(".")
                        }, c), (h = u[g]) || (h = u[g] = [],
                            h.delegateCount = 0,
                            p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))),
                        p.add && (p.add.call(e, d),
                            d.handler.guid || (d.handler.guid = r.guid)),
                        a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                        b.event.global[g] = !0;
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
                if (m && (c = m.events)) {
                    t = (t || "").match(w) || [""],
                        l = t.length;
                    while (l--)
                        if (s = rt.exec(t[l]) || [],
                            d = g = s[1],
                            h = (s[2] || "").split(".").sort(),
                            d) {
                            p = b.event.special[d] || {},
                                d = (r ? p.delegateType : p.bindType) || d,
                                f = c[d] || [],
                                s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                u = o = f.length;
                            while (o--)
                                a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1),
                                    a.selector && f.delegateCount--,
                                    p.remove && p.remove.call(e, a));
                            u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle),
                                delete c[d])
                        } else
                            for (d in c)
                                b.event.remove(e, d + t[l], n, r, !0);
                    b.isEmptyObject(c) && (delete m.handle,
                        b._removeData(e, "events"))
                }
            },
            trigger: function(n, r, i, a) {
                var s, u, l, c, p, f, d, h = [i || o],
                    g = y.call(n, "type") ? n.type : n,
                    m = y.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = f = i = i || o,
                    3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."),
                            g = m.shift(),
                            m.sort()),
                        u = 0 > g.indexOf(":") && "on" + g,
                        n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n),
                        n.isTrigger = !0,
                        n.namespace = m.join("."),
                        n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        n.result = t,
                        n.target || (n.target = i),
                        r = null == r ? [n] : b.makeArray(r, [n]),
                        p = b.event.special[g] || {},
                        a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                    if (!a && !p.noBubble && !b.isWindow(i)) {
                        for (c = p.delegateType || g,
                            nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode)
                            h.push(l),
                            f = l;
                        f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
                    }
                    d = 0;
                    while ((l = h[d++]) && !n.isPropagationStopped())
                        n.type = d > 1 ? c : p.bindType || g,
                        s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"),
                        s && s.apply(l, r),
                        s = u && l[u],
                        s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
                    if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                        f = i[u],
                            f && (i[u] = null),
                            b.event.triggered = g;
                        try {
                            i[g]()
                        } catch (v) {}
                        b.event.triggered = t,
                            f && (i[u] = f)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = b.event.fix(e);
                var n, r, i, o, a, s = [],
                    u = h.call(arguments),
                    l = (b._data(this, "events") || {})[e.type] || [],
                    c = b.event.special[e.type] || {};
                if (u[0] = e,
                    e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    s = b.event.handlers.call(this, e, l),
                        n = 0;
                    while ((o = s[n++]) && !e.isPropagationStopped()) {
                        e.currentTarget = o.elem,
                            a = 0;
                        while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())
                            (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                                e.data = i.data,
                                r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u),
                                r !== t && (e.result = r) === !1 && (e.preventDefault(),
                                    e.stopPropagation()))
                    }
                    return c.postDispatch && c.postDispatch.call(this, e),
                        e.result
                }
            },
            handlers: function(e, n) {
                var r, i, o, a, s = [],
                    u = n.delegateCount,
                    l = e.target;
                if (u && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (o = [],
                                a = 0; u > a; a++)
                                i = n[a],
                                r = i.selector + " ",
                                o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length),
                                o[r] && o.push(i);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return n.length > u && s.push({
                        elem: this,
                        handlers: n.slice(u)
                    }),
                    s
            },
            fix: function(e) {
                if (e[b.expando])
                    return e;
                var t, n, r, i = e.type,
                    a = e,
                    s = this.fixHooks[i];
                s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}),
                    r = s.props ? this.props.concat(s.props) : this.props,
                    e = new b.Event(a),
                    t = r.length;
                while (t--)
                    n = r[t],
                    e[n] = a[n];
                return e.target || (e.target = a.srcElement || o),
                    3 === e.target.nodeType && (e.target = e.target.parentNode),
                    e.metaKey = !!e.metaKey,
                    s.filter ? s.filter(e, a) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                        e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, a, s = n.button,
                        u = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o,
                            a = i.documentElement,
                            r = i.body,
                            e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0),
                            e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u),
                        e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                        e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== o.activeElement && this.focus)
                            try {
                                return this.focus(), !1
                            } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === o.activeElement && this.blur ? (this.blur(), !1) : t
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = b.extend(new b.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i),
                    i.isDefaultPrevented() && n.preventDefault()
            }
        },
        b.removeEvent = o.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === i && (e[r] = null),
                e.detachEvent(r, n))
        },
        b.Event = function(e, n) {
            return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e,
                    this.type = e.type,
                    this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e,
                n && b.extend(this, n),
                this.timeStamp = e && e.timeStamp || b.now(),
                this[b.expando] = !0,
                t) : new b.Event(e, n)
        },
        b.Event.prototype = {
            isDefaultPrevented: ot,
            isPropagationStopped: ot,
            isImmediatePropagationStopped: ot,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = it,
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = it,
                    e && (e.stopPropagation && e.stopPropagation())
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = it,
                    this.stopPropagation()
            }
        },
        b.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            b.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType,
                            n = o.handler.apply(this, arguments),
                            e.type = t),
                        n
                }
            }
        }),
        b.support.submitBubbles || (b.event.special.submit = {
            setup: function() {
                return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function(e) {
                        var n = e.target,
                            r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                        r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
                                e._submit_bubble = !0
                            }),
                            b._data(r, "submitBubbles", !0))
                    }),
                    t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble,
                    this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"),
                    t)
            }
        }),
        b.support.changeBubbles || (b.event.special.change = {
            setup: function() {
                return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                    }),
                    b.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1),
                            b.event.simulate("change", this, e, !0)
                    })), !1) : (b.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
                                !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                            }),
                            b._data(t, "changeBubbles", !0))
                    }),
                    t)
            },
            handle: function(e) {
                var n = e.target;
                return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return b.event.remove(this, "._change"), !Z.test(this.nodeName)
            }
        }),
        b.support.focusinBubbles || b.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    b.event.simulate(t, e.target, b.event.fix(e), !0)
                };
            b.event.special[t] = {
                setup: function() {
                    0 === n++ && o.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && o.removeEventListener(e, r, !0)
                }
            }
        }),
        b.fn.extend({
            on: function(e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n,
                        n = t);
                    for (a in e)
                        this.on(a, n, r, e[a], o);
                    return this
                }
                if (null == r && null == i ? (i = n,
                        r = n = t) : null == i && ("string" == typeof n ? (i = r,
                        r = t) : (i = r,
                        r = n,
                        n = t)),
                    i === !1)
                    i = ot;
                else if (!i)
                    return this;
                return 1 === o && (s = i,
                        i = function(e) {
                            return b().off(e),
                                s.apply(this, arguments)
                        },
                        i.guid = s.guid || (s.guid = b.guid++)),
                    this.each(function() {
                        b.event.add(this, e, i, r, n)
                    })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj,
                        b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                        this;
                if ("object" == typeof e) {
                    for (o in e)
                        this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r = n,
                        n = t),
                    r === !1 && (r = ot),
                    this.each(function() {
                        b.event.remove(this, e, r, n)
                    })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    b.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, n) {
                var r = this[0];
                return r ? b.event.trigger(e, n, r, !0) : t
            }
        }),
        function(e, t) {
            var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date,
                w = e.document,
                T = {},
                N = 0,
                C = 0,
                k = it(),
                E = it(),
                S = it(),
                A = typeof t,
                j = 1 << 31,
                D = [],
                L = D.pop,
                H = D.push,
                q = D.slice,
                M = D.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++)
                        if (this[t] === e)
                            return t;
                    return -1
                },
                _ = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                O = F.replace("w", "w#"),
                B = "([*^$|!~]?=)",
                P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
                R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
                W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
                $ = RegExp("^" + _ + "*," + _ + "*"),
                I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"),
                z = RegExp(R),
                X = RegExp("^" + O + "$"),
                U = {
                    ID: RegExp("^#(" + F + ")"),
                    CLASS: RegExp("^\\.(" + F + ")"),
                    NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                    TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + P),
                    PSEUDO: RegExp("^" + R),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                    needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
                },
                V = /[\x20\t\r\n\f]*[+~]/,
                Y = /^[^{]+\{\s*\[native code/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                G = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                K = /'|\\/g,
                Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                tt = function(e, t) {
                    var n = "0x" + t - 65536;
                    return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                };
            try {
                q.call(w.documentElement.childNodes, 0)[0].nodeType
            } catch (nt) {
                q = function(e) {
                    var t, n = [];
                    while (t = this[e++])
                        n.push(t);
                    return n
                }
            }

            function rt(e) {
                return Y.test(e + "")
            }

            function it() {
                var e, t = [];
                return e = function(n, r) {
                    return t.push(n += " ") > i.cacheLength && delete e[t.shift()],
                        e[n] = r
                }
            }

            function ot(e) {
                return e[x] = !0,
                    e
            }

            function at(e) {
                var t = p.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }

            function st(e, t, n, r) {
                var i, o, a, s, u, l, f, g, m, v;
                if ((t ? t.ownerDocument || t : w) !== p && c(t),
                    t = t || p,
                    n = n || [], !e || "string" != typeof e)
                    return n;
                if (1 !== (s = t.nodeType) && 9 !== s)
                    return [];
                if (!d && !r) {
                    if (i = J.exec(e))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode)
                                    return n;
                                if (o.id === a)
                                    return n.push(o),
                                        n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a)
                                return n.push(o),
                                    n
                        } else {
                            if (i[2])
                                return H.apply(n, q.call(t.getElementsByTagName(e), 0)),
                                    n;
                            if ((a = i[3]) && T.getByClassName && t.getElementsByClassName)
                                return H.apply(n, q.call(t.getElementsByClassName(a), 0)),
                                    n
                        }
                    if (T.qsa && !h.test(e)) {
                        if (f = !0,
                            g = x,
                            m = t,
                            v = 9 === s && e,
                            1 === s && "object" !== t.nodeName.toLowerCase()) {
                            l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g),
                                g = "[id='" + g + "'] ",
                                u = l.length;
                            while (u--)
                                l[u] = g + dt(l[u]);
                            m = V.test(e) && t.parentNode || t,
                                v = l.join(",")
                        }
                        if (v)
                            try {
                                return H.apply(n, q.call(m.querySelectorAll(v), 0)),
                                    n
                            } catch (b) {} finally {
                                f || t.removeAttribute("id")
                            }
                    }
                }
                return wt(e.replace(W, "$1"), t, n, r)
            }
            a = st.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                },
                c = st.setDocument = function(e) {
                    var n = e ? e.ownerDocument || e : w;
                    return n !== p && 9 === n.nodeType && n.documentElement ? (p = n,
                        f = n.documentElement,
                        d = a(n),
                        T.tagNameNoComments = at(function(e) {
                            return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                        }),
                        T.attributes = at(function(e) {
                            e.innerHTML = "<select></select>";
                            var t = typeof e.lastChild.getAttribute("multiple");
                            return "boolean" !== t && "string" !== t
                        }),
                        T.getByClassName = at(function(e) {
                            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                                e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e",
                                    2 === e.getElementsByClassName("e").length) : !1
                        }),
                        T.getByName = at(function(e) {
                            e.id = x + 0,
                                e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>",
                                f.insertBefore(e, f.firstChild);
                            var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                            return T.getIdNotName = !n.getElementById(x),
                                f.removeChild(e),
                                t
                        }),
                        i.attrHandle = at(function(e) {
                            return e.innerHTML = "<a href='#'></a>",
                                e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
                        }) ? {} : {
                            href: function(e) {
                                return e.getAttribute("href", 2)
                            },
                            type: function(e) {
                                return e.getAttribute("type")
                            }
                        },
                        T.getIdNotName ? (i.find.ID = function(e, t) {
                                if (typeof t.getElementById !== A && !d) {
                                    var n = t.getElementById(e);
                                    return n && n.parentNode ? [n] : []
                                }
                            },
                            i.filter.ID = function(e) {
                                var t = e.replace(et, tt);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }
                        ) : (i.find.ID = function(e, n) {
                                if (typeof n.getElementById !== A && !d) {
                                    var r = n.getElementById(e);
                                    return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
                                }
                            },
                            i.filter.ID = function(e) {
                                var t = e.replace(et, tt);
                                return function(e) {
                                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }
                        ),
                        i.find.TAG = T.tagNameNoComments ? function(e, n) {
                            return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
                        } : function(e, t) {
                            var n, r = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                while (n = o[i++])
                                    1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        },
                        i.find.NAME = T.getByName && function(e, n) {
                            return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
                        },
                        i.find.CLASS = T.getByClassName && function(e, n) {
                            return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
                        },
                        g = [],
                        h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
                                e.innerHTML = "<select><option selected=''></option></select>",
                                    e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                                    e.querySelectorAll(":checked").length || h.push(":checked")
                            }),
                            at(function(e) {
                                e.innerHTML = "<input type='hidden' i=''/>",
                                    e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"),
                                    e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    h.push(",.*:")
                            })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
                            T.disconnectedMatch = m.call(e, "div"),
                                m.call(e, "[s!='']:x"),
                                g.push("!=", R)
                        }),
                        h = RegExp(h.join("|")),
                        g = RegExp(g.join("|")),
                        y = rt(f.contains) || f.compareDocumentPosition ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                while (t = t.parentNode)
                                    if (t === e)
                                        return !0;
                            return !1
                        },
                        v = f.compareDocumentPosition ? function(e, t) {
                            var r;
                            return e === t ? (u = !0,
                                0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                        } : function(e, t) {
                            var r, i = 0,
                                o = e.parentNode,
                                a = t.parentNode,
                                s = [e],
                                l = [t];
                            if (e === t)
                                return u = !0,
                                    0;
                            if (!o || !a)
                                return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
                            if (o === a)
                                return ut(e, t);
                            r = e;
                            while (r = r.parentNode)
                                s.unshift(r);
                            r = t;
                            while (r = r.parentNode)
                                l.unshift(r);
                            while (s[i] === l[i])
                                i++;
                            return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                        },
                        u = !1, [0, 0].sort(v),
                        T.detectDuplicates = u,
                        p) : p
                },
                st.matches = function(e, t) {
                    return st(e, null, null, t)
                },
                st.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== p && c(e),
                        t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t)))
                        try {
                            var n = m.call(e, t);
                            if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return n
                        } catch (r) {}
                    return st(t, p, null, [e]).length > 0
                },
                st.contains = function(e, t) {
                    return (e.ownerDocument || e) !== p && c(e),
                        y(e, t)
                },
                st.attr = function(e, t) {
                    var n;
                    return (e.ownerDocument || e) !== p && c(e),
                        d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
                },
                st.error = function(e) {
                    throw Error("Syntax error, unrecognized expression: " + e)
                },
                st.uniqueSort = function(e) {
                    var t, n = [],
                        r = 1,
                        i = 0;
                    if (u = !T.detectDuplicates,
                        e.sort(v),
                        u) {
                        for (; t = e[r]; r++)
                            t === e[r - 1] && (i = n.push(r));
                        while (i--)
                            e.splice(n[i], 1)
                    }
                    return e
                };

            function ut(e, t) {
                var n = t && e,
                    r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
                if (r)
                    return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }

            function lt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function ct(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function pt(e) {
                return ot(function(t) {
                    return t = +t,
                        ot(function(n, r) {
                            var i, o = e([], n.length, t),
                                a = o.length;
                            while (a--)
                                n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                })
            }
            o = st.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += o(e)
                        } else if (3 === i || 4 === i)
                            return e.nodeValue
                    } else
                        for (; t = e[r]; r++)
                            n += o(t);
                    return n
                },
                i = st.selectors = {
                    cacheLength: 50,
                    createPseudo: ot,
                    match: U,
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(et, tt),
                                e[3] = (e[4] || e[5] || "").replace(et, tt),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                                "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]),
                                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]),
                                e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[5] && e[2];
                            return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                    e[2] = n.slice(0, t)),
                                e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            return "*" === e ? function() {
                                return !0
                            } : (e = e.replace(et, tt).toLowerCase(),
                                function(t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            )
                        },
                        CLASS: function(e) {
                            var t = k[e + " "];
                            return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) {
                                return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = st.attr(r, e);
                                return null == i ? "!=" === t : t ? (i += "",
                                    "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    y = s && t.nodeName.toLowerCase(),
                                    v = !u && !s;
                                if (m) {
                                    if (o) {
                                        while (g) {
                                            p = t;
                                            while (p = p[g])
                                                if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                                    return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? m.firstChild : m.lastChild],
                                        a && v) {
                                        c = m[x] || (m[x] = {}),
                                            l = c[e] || [],
                                            d = l[0] === N && l[1],
                                            f = l[0] === N && l[2],
                                            p = d && m.childNodes[d];
                                        while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                            if (1 === p.nodeType && ++f && p === t) {
                                                c[e] = [N, d, f];
                                                break
                                            }
                                    } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N)
                                        f = l[1];
                                    else
                                        while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                            if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]),
                                                    p === t))
                                                break;
                                    return f -= i,
                                        f === r || 0 === f % r && f / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                            return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                                i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
                                    var i, o = r(e, t),
                                        a = o.length;
                                    while (a--)
                                        i = M.call(e, o[a]),
                                        e[i] = !(n[i] = o[a])
                                }) : function(e) {
                                    return r(e, 0, n)
                                }
                            ) : r
                        }
                    },
                    pseudos: {
                        not: ot(function(e) {
                            var t = [],
                                n = [],
                                r = s(e.replace(W, "$1"));
                            return r[x] ? ot(function(e, t, n, i) {
                                var o, a = r(e, null, i, []),
                                    s = e.length;
                                while (s--)
                                    (o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e,
                                    r(t, null, o, n), !n.pop()
                            }
                        }),
                        has: ot(function(e) {
                            return function(t) {
                                return st(e, t).length > 0
                            }
                        }),
                        contains: ot(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                            }
                        }),
                        lang: ot(function(e) {
                            return X.test(e || "") || st.error("unsupported lang: " + e),
                                e = e.replace(et, tt).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang)
                                            return n = n.toLowerCase(),
                                                n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === f
                        },
                        focus: function(e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                                e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !i.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Q.test(e.nodeName)
                        },
                        input: function(e) {
                            return G.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: pt(function() {
                            return [0]
                        }),
                        last: pt(function(e, t) {
                            return [t - 1]
                        }),
                        eq: pt(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: pt(function(e, t) {
                            var n = 0;
                            for (; t > n; n += 2)
                                e.push(n);
                            return e
                        }),
                        odd: pt(function(e, t) {
                            var n = 1;
                            for (; t > n; n += 2)
                                e.push(n);
                            return e
                        }),
                        lt: pt(function(e, t, n) {
                            var r = 0 > n ? n + t : n;
                            for (; --r >= 0;)
                                e.push(r);
                            return e
                        }),
                        gt: pt(function(e, t, n) {
                            var r = 0 > n ? n + t : n;
                            for (; t > ++r;)
                                e.push(r);
                            return e
                        })
                    }
                };
            for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                i.pseudos[n] = lt(n);
            for (n in {
                    submit: !0,
                    reset: !0
                })
                i.pseudos[n] = ct(n);

            function ft(e, t) {
                var n, r, o, a, s, u, l, c = E[e + " "];
                if (c)
                    return t ? 0 : c.slice(0);
                s = e,
                    u = [],
                    l = i.preFilter;
                while (s) {
                    (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                        u.push(o = [])),
                    n = !1, (r = I.exec(s)) && (n = r.shift(),
                        o.push({
                            value: n,
                            type: r[0].replace(W, " ")
                        }),
                        s = s.slice(n.length));
                    for (a in i.filter)
                        !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(),
                            o.push({
                                value: n,
                                type: a,
                                matches: r
                            }),
                            s = s.slice(n.length));
                    if (!n)
                        break
                }
                return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
            }

            function dt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++)
                    r += e[t].value;
                return r
            }

            function ht(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    a = C++;
                return t.first ? function(t, n, r) {
                    while (t = t[i])
                        if (1 === t.nodeType || o)
                            return e(t, n, r)
                } : function(t, n, s) {
                    var u, l, c, p = N + " " + a;
                    if (s) {
                        while (t = t[i])
                            if ((1 === t.nodeType || o) && e(t, n, s))
                                return !0
                    } else
                        while (t = t[i])
                            if (1 === t.nodeType || o)
                                if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
                                    if ((u = l[1]) === !0 || u === r)
                                        return u === !0
                                } else if (l = c[i] = [p],
                        l[1] = e(t, n, s) || r,
                        l[1] === !0)
                        return !0
                }
            }

            function gt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r))
                            return !1;
                    return !0
                } : e[0]
            }

            function mt(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    u = e.length,
                    l = null != t;
                for (; u > s; s++)
                    (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                        l && t.push(s));
                return a
            }

            function yt(e, t, n, r, i, o) {
                return r && !r[x] && (r = yt(r)),
                    i && !i[x] && (i = yt(i, o)),
                    ot(function(o, a, s, u) {
                        var l, c, p, f = [],
                            d = [],
                            h = a.length,
                            g = o || xt(t || "*", s.nodeType ? [s] : s, []),
                            m = !e || !o && t ? g : mt(g, f, e, s, u),
                            y = n ? i || (o ? e : h || r) ? [] : a : m;
                        if (n && n(m, y, s, u),
                            r) {
                            l = mt(y, d),
                                r(l, [], s, u),
                                c = l.length;
                            while (c--)
                                (p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
                        }
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    l = [],
                                        c = y.length;
                                    while (c--)
                                        (p = y[c]) && l.push(m[c] = p);
                                    i(null, y = [], l, u)
                                }
                                c = y.length;
                                while (c--)
                                    (p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
                            }
                        } else
                            y = mt(y === a ? y.splice(h, y.length) : y),
                            i ? i(null, a, y, u) : H.apply(a, y)
                    })
            }

            function vt(e) {
                var t, n, r, o = e.length,
                    a = i.relative[e[0].type],
                    s = a || i.relative[" "],
                    u = a ? 1 : 0,
                    c = ht(function(e) {
                        return e === t
                    }, s, !0),
                    p = ht(function(e) {
                        return M.call(t, e) > -1
                    }, s, !0),
                    f = [function(e, n, r) {
                        return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }];
                for (; o > u; u++)
                    if (n = i.relative[e[u].type])
                        f = [ht(gt(f), n)];
                    else {
                        if (n = i.filter[e[u].type].apply(null, e[u].matches),
                            n[x]) {
                            for (r = ++u; o > r; r++)
                                if (i.relative[e[r].type])
                                    break;
                            return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
                        }
                        f.push(n)
                    }
                return gt(f)
            }

            function bt(e, t) {
                var n = 0,
                    o = t.length > 0,
                    a = e.length > 0,
                    s = function(s, u, c, f, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            T = l,
                            C = s || a && i.find.TAG("*", d && u.parentNode || u),
                            k = N += null == T ? 1 : Math.random() || .1;
                        for (w && (l = u !== p && u,
                                r = n); null != (h = C[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++])
                                    if (m(h, u, c)) {
                                        f.push(h);
                                        break
                                    }
                                w && (N = k,
                                    r = ++n)
                            }
                            o && ((h = !m && h) && v--,
                                s && x.push(h))
                        }
                        if (v += b,
                            o && b !== v) {
                            g = 0;
                            while (m = t[g++])
                                m(x, y, u, c);
                            if (s) {
                                if (v > 0)
                                    while (b--)
                                        x[b] || y[b] || (y[b] = L.call(f));
                                y = mt(y)
                            }
                            H.apply(f, y),
                                w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
                        }
                        return w && (N = k,
                                l = T),
                            x
                    };
                return o ? ot(s) : s
            }
            s = st.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = S[e + " "];
                if (!o) {
                    t || (t = ft(e)),
                        n = t.length;
                    while (n--)
                        o = vt(t[n]),
                        o[x] ? r.push(o) : i.push(o);
                    o = S(e, bt(i, r))
                }
                return o
            };

            function xt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++)
                    st(e, t[r], n);
                return n
            }

            function wt(e, t, n, r) {
                var o, a, u, l, c, p = ft(e);
                if (!r && 1 === p.length) {
                    if (a = p[0] = p[0].slice(0),
                        a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                        if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t)
                            return n;
                        e = e.slice(a.shift().value.length)
                    }
                    o = U.needsContext.test(e) ? 0 : a.length;
                    while (o--) {
                        if (u = a[o],
                            i.relative[l = u.type])
                            break;
                        if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                            if (a.splice(o, 1),
                                e = r.length && dt(a), !e)
                                return H.apply(n, q.call(r, 0)),
                                    n;
                            break
                        }
                    }
                }
                return s(e, p)(r, t, d, n, V.test(e)),
                    n
            }
            i.pseudos.nth = i.pseudos.eq;

            function Tt() {}
            i.filters = Tt.prototype = i.pseudos,
                i.setFilters = new Tt,
                c(),
                st.attr = b.attr,
                b.find = st,
                b.expr = st.selectors,
                b.expr[":"] = b.expr.pseudos,
                b.unique = st.uniqueSort,
                b.text = st.getText,
                b.isXMLDoc = st.isXML,
                b.contains = st.contains
        }
        (e);
    var at = /Until$/,
        st = /^(?:parents|prev(?:Until|All))/,
        ut = /^.[^:#\[\.,]*$/,
        lt = b.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    b.fn.extend({
            find: function(e) {
                var t, n, r, i = this.length;
                if ("string" != typeof e)
                    return r = this,
                        this.pushStack(b(e).filter(function() {
                            for (t = 0; i > t; t++)
                                if (b.contains(r[t], this))
                                    return !0
                        }));
                for (n = [],
                    t = 0; i > t; t++)
                    b.find(e, this[t], n);
                return n = this.pushStack(i > 1 ? b.unique(n) : n),
                    n.selector = (this.selector ? this.selector + " " : "") + e,
                    n
            },
            has: function(e) {
                var t, n = b(e, this),
                    r = n.length;
                return this.filter(function() {
                    for (t = 0; r > t; t++)
                        if (b.contains(this, n[t]))
                            return !0
                })
            },
            not: function(e) {
                return this.pushStack(ft(this, e, !1))
            },
            filter: function(e) {
                return this.pushStack(ft(this, e, !0))
            },
            is: function(e) {
                return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    o = [],
                    a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
                for (; i > r; r++) {
                    n = this[r];
                    while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                        if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                            o.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                }
                return this.pushStack(o.length > 1 ? b.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
                    r = b.merge(this.get(), n);
                return this.pushStack(b.unique(r))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        b.fn.andSelf = b.fn.addBack;

    function pt(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    b.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return b.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return b.dir(e, "parentNode", n)
            },
            next: function(e) {
                return pt(e, "nextSibling")
            },
            prev: function(e) {
                return pt(e, "previousSibling")
            },
            nextAll: function(e) {
                return b.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return b.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return b.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return b.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return b.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return b.sibling(e.firstChild)
            },
            contents: function(e) {
                return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
            }
        }, function(e, t) {
            b.fn[e] = function(n, r) {
                var i = b.map(this, t, n);
                return at.test(e) || (r = n),
                    r && "string" == typeof r && (i = b.filter(r, i)),
                    i = this.length > 1 && !ct[e] ? b.unique(i) : i,
                    this.length > 1 && st.test(e) && (i = i.reverse()),
                    this.pushStack(i)
            }
        }),
        b.extend({
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"),
                    1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
            },
            dir: function(e, n, r) {
                var i = [],
                    o = e[n];
                while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r)))
                    1 === o.nodeType && i.push(o),
                    o = o[n];
                return i
            },
            sibling: function(e, t) {
                var n = [];
                for (; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });

    function ft(e, t, n) {
        if (t = t || 0,
            b.isFunction(t))
            return b.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            });
        if (t.nodeType)
            return b.grep(e, function(e) {
                return e === t === n
            });
        if ("string" == typeof t) {
            var r = b.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (ut.test(t))
                return b.filter(t, r, !n);
            t = b.filter(t, r)
        }
        return b.grep(e, function(e) {
            return b.inArray(e, t) >= 0 === n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length)
                n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Nt = /^(?:checkbox|radio)$/i,
        Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        jt = dt(o),
        Dt = jt.appendChild(o.createElement("div"));
    At.optgroup = At.option,
        At.tbody = At.tfoot = At.colgroup = At.caption = At.thead,
        At.th = At.td,
        b.fn.extend({
            text: function(e) {
                return b.access(this, function(e) {
                    return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (b.isFunction(e))
                    return this.each(function(t) {
                        b(this).wrapAll(e.call(this, t))
                    });
                if (this[0]) {
                    var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                        t.map(function() {
                            var e = this;
                            while (e.firstChild && 1 === e.firstChild.nodeType)
                                e = e.firstChild;
                            return e
                        }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return b.isFunction(e) ? this.each(function(t) {
                    b(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = b(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = b.isFunction(e);
                return this.each(function(n) {
                    b(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                var n, r = 0;
                for (; null != (n = this[r]); r++)
                    (!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)),
                        n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")),
                            n.parentNode.removeChild(n)));
                return this
            },
            empty: function() {
                var e, t = 0;
                for (; null != (e = this[t]); t++) {
                    1 === e.nodeType && b.cleanData(Ot(e, !1));
                    while (e.firstChild)
                        e.removeChild(e.firstChild);
                    e.options && b.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return b.clone(this, e, t)
                    })
            },
            html: function(e) {
                return b.access(this, function(e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t)
                        return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                    if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(vt, "<$1></$2>");
                        try {
                            for (; i > r; r++)
                                n = this[r] || {},
                                1 === n.nodeType && (b.cleanData(Ot(n, !1)),
                                    n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                var t = b.isFunction(e);
                return t || "string" == typeof e || (e = b(e).not(this).detach()),
                    this.domManip([e], !0, function(e) {
                        var t = this.nextSibling,
                            n = this.parentNode;
                        n && (b(this).remove(),
                            n.insertBefore(e, t))
                    })
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, r) {
                e = f.apply([], e);
                var i, o, a, s, u, l, c = 0,
                    p = this.length,
                    d = this,
                    h = p - 1,
                    g = e[0],
                    m = b.isFunction(g);
                if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g))
                    return this.each(function(i) {
                        var o = d.eq(i);
                        m && (e[0] = g.call(this, i, n ? o.html() : t)),
                            o.domManip(e, n, r)
                    });
                if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this),
                        i = l.firstChild,
                        1 === l.childNodes.length && (l = i),
                        i)) {
                    for (n = n && b.nodeName(i, "tr"),
                        s = b.map(Ot(l, "script"), Ht),
                        a = s.length; p > c; c++)
                        o = l,
                        c !== h && (o = b.clone(o, !0, !0),
                            a && b.merge(s, Ot(o, "script"))),
                        r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
                    if (a)
                        for (u = s[s.length - 1].ownerDocument,
                            b.map(s, qt),
                            c = 0; a > c; c++)
                            o = s[c],
                            kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
                                url: o.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
                    l = i = null
                }
                return this
            }
        });

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function Ht(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type,
            e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
            e
    }

    function Mt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++)
            b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
    }

    function _t(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, o = b._data(e),
                a = b._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle,
                    a.events = {};
                for (n in s)
                    for (r = 0,
                        i = s[n].length; i > r; r++)
                        b.event.add(t, n, s[n][r])
            }
            a.data && (a.data = b.extend({}, a.data))
        }
    }

    function Ft(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events)
                    b.removeEvent(t, r, i.handle);
                t.removeAttribute(b.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text,
                qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
                b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
                t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        b.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = b(e),
                a = o.length - 1;
            for (; a >= r; r++)
                n = r === a ? this : this.clone(!0),
                b(o[r])[t](n),
                d.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ot(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [],
                r = e.childNodes || e; null != (o = r[a]); a++)
                !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
    }

    function Bt(e) {
        Nt.test(e.type) && (e.defaultChecked = e.checked)
    }
    b.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML,
                    Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (r = Ot(o),
                    s = Ot(e),
                    a = 0; null != (i = s[a]); ++a)
                    r[a] && Ft(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ot(e),
                        r = r || Ot(o),
                        a = 0; null != (i = s[a]); a++)
                        _t(i, r[a]);
                else
                    _t(e, o);
            return r = Ot(o, "script"),
                r.length > 0 && Mt(r, !u && Ot(e, "script")),
                r = s = i = null,
                o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, u, l, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h],
                    o || 0 === o)
                    if ("object" === b.type(o))
                        b.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")),
                    u = (bt.exec(o) || ["", ""])[1].toLowerCase(),
                    c = At[u] || At._default,
                    s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2],
                    i = c[0];
                while (i--)
                    s = s.lastChild;
                if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
                    o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild,
                        i = o && o.childNodes.length;
                    while (i--)
                        b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
                }
                b.merge(d, s.childNodes),
                    s.textContent = "";
                while (s.firstChild)
                    s.removeChild(s.firstChild);
                s = f.lastChild
            } else
                d.push(t.createTextNode(o));
            s && f.removeChild(s),
                b.support.appendChecked || b.grep(Ot(d, "input"), Bt),
                h = 0;
            while (o = d[h++])
                if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o),
                        s = Ot(f.appendChild(o), "script"),
                        a && Mt(s),
                        n)) {
                    i = 0;
                    while (o = s[i++])
                        kt.test(o.type || "") && n.push(o)
                }
            return s = null,
                f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                u = b.expando,
                l = b.cache,
                p = b.support.deleteExpando,
                f = b.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || b.acceptData(n)) && (o = n[u],
                        a = o && l[o])) {
                    if (a.events)
                        for (r in a.events)
                            f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
                    l[o] && (delete l[o],
                        p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null,
                        c.push(o))
                }
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + x + ")(.*)$", "i"),
        Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + x + ")", "i"),
        Gt = {
            BODY: "block"
        },
        Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e)
            return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n,
                t in e)
                return t;
        return r
    }

    function nn(e, t) {
        return e = t || e,
            "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++)
            r = e[a],
            r.style && (o[a] = b._data(r, "olddisplay"),
                n = r.style.display,
                t ? (o[a] || "none" !== n || (r.style.display = ""),
                    "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    b.fn.extend({
            css: function(e, n) {
                return b.access(this, function(e, n, r) {
                    var i, o, a = {},
                        s = 0;
                    if (b.isArray(n)) {
                        for (o = Rt(e),
                            i = n.length; i > s; s++)
                            a[n[s]] = b.css(e, n[s], !1, o);
                        return a
                    }
                    return r !== t ? b.style(e, n, r) : b.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return rn(this, !0)
            },
            hide: function() {
                return rn(this)
            },
            toggle: function(e) {
                var t = "boolean" == typeof e;
                return this.each(function() {
                    (t ? e : nn(this)) ? b(this).show(): b(this).hide()
                })
            }
        }),
        b.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Wt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, u = b.camelCase(n),
                        l = e.style;
                    if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)),
                        s = b.cssHooks[n] || b.cssHooks[u],
                        r === t)
                        return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                    if (a = typeof r,
                        "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)),
                            a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"),
                            b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"),
                            s && "set" in s && (r = s.set(e, r, i)) === t)))
                        try {
                            l[n] = r
                        } catch (c) {}
                }
            },
            css: function(e, n, r, i) {
                var o, a, s, u = b.camelCase(n);
                return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)),
                    s = b.cssHooks[n] || b.cssHooks[u],
                    s && "get" in s && (a = s.get(e, !0, r)),
                    a === t && (a = Wt(e, n, i)),
                    "normal" === a && n in Kt && (a = Kt[n]),
                    "" === r || r ? (o = parseFloat(a),
                        r === !0 || b.isNumeric(o) ? o || 0 : a) : a
            },
            swap: function(e, t, n, r) {
                var i, o, a = {};
                for (o in t)
                    a[o] = e.style[o],
                    e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t)
                    e.style[o] = a[o];
                return i
            }
        }),
        e.getComputedStyle ? (Rt = function(t) {
                return e.getComputedStyle(t, null)
            },
            Wt = function(e, n, r) {
                var i, o, a, s = r || Rt(e),
                    u = s ? s.getPropertyValue(n) || s[n] : t,
                    l = e.style;
                return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)),
                        Yt.test(u) && Ut.test(n) && (i = l.width,
                            o = l.minWidth,
                            a = l.maxWidth,
                            l.minWidth = l.maxWidth = l.width = u,
                            u = s.width,
                            l.width = i,
                            l.minWidth = o,
                            l.maxWidth = a)),
                    u
            }
        ) : o.documentElement.currentStyle && (Rt = function(e) {
                return e.currentStyle
            },
            Wt = function(e, n, r) {
                var i, o, a, s = r || Rt(e),
                    u = s ? s[n] : t,
                    l = e.style;
                return null == u && l && l[n] && (u = l[n]),
                    Yt.test(u) && !zt.test(n) && (i = l.left,
                        o = e.runtimeStyle,
                        a = o && o.left,
                        a && (o.left = e.currentStyle.left),
                        l.left = "fontSize" === n ? "1em" : u,
                        u = l.pixelLeft + "px",
                        l.left = i,
                        a && (o.left = a)),
                    "" === u ? "auto" : u
            }
        );

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2)
            "margin" === n && (a += b.css(e, n + Zt[o], !0, i)),
            r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)),
                "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i),
                "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]),
                Yt.test(i))
                return i;
            r = a && (b.support.boxSizingReliable || i === e.style[t]),
                i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function un(e) {
        var t = o,
            n = Gt[e];
        return n || (n = ln(e, t),
                "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
                    t = (Pt[0].contentWindow || Pt[0].contentDocument).document,
                    t.write("<!doctype html><html><body>"),
                    t.close(),
                    n = ln(e, t),
                    Pt.detach()),
                Gt[e] = n),
            n
    }

    function ln(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body),
            r = b.css(n[0], "display");
        return n.remove(),
            r
    }
    b.each(["height", "width"], function(e, n) {
            b.cssHooks[n] = {
                get: function(e, r, i) {
                    return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function() {
                        return sn(e, n, i)
                    }) : sn(e, n, i) : t
                },
                set: function(e, t, r) {
                    var i = r && Rt(e);
                    return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }),
        b.support.opacity || (b.cssHooks.opacity = {
            get: function(e, t) {
                return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                    "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
            }
        }),
        b(function() {
            b.support.reliableMarginRight || (b.cssHooks.marginRight = {
                get: function(e, n) {
                    return n ? b.swap(e, {
                        display: "inline-block"
                    }, Wt, [e, "marginRight"]) : t
                }
            }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, n) {
                b.cssHooks[n] = {
                    get: function(e, r) {
                        return r ? (r = Wt(e, n),
                            Yt.test(r) ? b(e).position()[n] + "px" : r) : t
                    }
                }
            })
        }),
        b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
                return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
            },
            b.expr.filters.visible = function(e) {
                return !b.expr.filters.hidden(e)
            }
        ),
        b.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            b.cssHooks[e + t] = {
                    expand: function(n) {
                        var r = 0,
                            i = {},
                            o = "string" == typeof n ? n.split(" ") : [n];
                        for (; 4 > r; r++)
                            i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                },
                Ut.test(e) || (b.cssHooks[e + t].set = on)
        });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
            serialize: function() {
                return b.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = b.prop(this, "elements");
                    return e ? b.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
                }).map(function(e, t) {
                    var n = b(this).val();
                    return null == n ? null : b.isArray(n) ? b.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(fn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(fn, "\r\n")
                    }
                }).get()
            }
        }),
        b.param = function(e, n) {
            var r, i = [],
                o = function(e, t) {
                    t = b.isFunction(t) ? t() : null == t ? "" : t,
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional),
                b.isArray(e) || e.jquery && !b.isPlainObject(e))
                b.each(e, function() {
                    o(this.name, this.value)
                });
            else
                for (r in e)
                    gn(r, e[r], n, o);
            return i.join("&").replace(cn, "+")
        };

    function gn(e, t, n, r) {
        var i;
        if (b.isArray(t))
            b.each(t, function(t, i) {
                n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== b.type(t))
            r(e, t);
        else
            for (i in t)
                gn(e + "[" + i + "]", t[i], n, r)
    }
    b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            b.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        b.fn.hover = function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        };
    var mn, yn, vn = b.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Cn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = b.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try {
        yn = a.href
    } catch (Ln) {
        yn = o.createElement("a"),
            yn.href = "",
            yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
                t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(w) || [];
            if (b.isFunction(n))
                while (r = o[i++])
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;

        function s(u) {
            var l;
            return o[u] = !0,
                b.each(e[u] || [], function(e, u) {
                    var c = u(n, r, i);
                    return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c),
                        s(c), !1)
                }),
                l
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function Mn(e, n) {
        var r, i, o = b.ajaxSettings.flatOptions || {};
        for (i in n)
            n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r),
            e
    }
    b.fn.load = function(e, n, r) {
            if ("string" != typeof e && Sn)
                return Sn.apply(this, arguments);
            var i, o, a, s = this,
                u = e.indexOf(" ");
            return u >= 0 && (i = e.slice(u, e.length),
                    e = e.slice(0, u)),
                b.isFunction(n) ? (r = n,
                    n = t) : n && "object" == typeof n && (a = "POST"),
                s.length > 0 && b.ajax({
                    url: e,
                    type: a,
                    dataType: "html",
                    data: n
                }).done(function(e) {
                    o = arguments,
                        s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
                }).complete(r && function(e, t) {
                    s.each(r, o || [e.responseText, t, e])
                }),
                this
        },
        b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            b.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        b.each(["get", "post"], function(e, n) {
            b[n] = function(e, r, i, o) {
                return b.isFunction(r) && (o = o || i,
                        i = r,
                        r = t),
                    b.ajax({
                        url: e,
                        type: n,
                        dataType: o,
                        data: r,
                        success: i
                    })
            }
        }),
        b.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: yn,
                type: "GET",
                isLocal: Nn.test(mn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Dn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": b.parseJSON,
                    "text xml": b.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
            },
            ajaxPrefilter: Hn(An),
            ajaxTransport: Hn(jn),
            ajax: function(e, n) {
                "object" == typeof e && (n = e,
                        e = t),
                    n = n || {};
                var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n),
                    f = p.context || p,
                    d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
                    h = b.Deferred(),
                    g = b.Callbacks("once memory"),
                    m = p.statusCode || {},
                    y = {},
                    v = {},
                    x = 0,
                    T = "canceled",
                    N = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!c) {
                                    c = {};
                                    while (t = Tn.exec(a))
                                        c[t[1].toLowerCase()] = t[2]
                                }
                                t = c[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = v[n] = v[n] || e,
                                    y[e] = t),
                                this
                        },
                        overrideMimeType: function(e) {
                            return x || (p.mimeType = e),
                                this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > x)
                                    for (t in e)
                                        m[t] = [m[t], e[t]];
                                else
                                    N.always(e[N.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || T;
                            return l && l.abort(t),
                                k(0, t),
                                this
                        }
                    };
                if (h.promise(N).complete = g.add,
                    N.success = N.done,
                    N.error = N.fail,
                    p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"),
                    p.type = n.method || n.type || p.method || p.type,
                    p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""],
                    null == p.crossDomain && (r = En.exec(p.url.toLowerCase()),
                        p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))),
                    p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)),
                    qn(An, p, n, N),
                    2 === x)
                    return N;
                u = p.global,
                    u && 0 === b.active++ && b.event.trigger("ajaxStart"),
                    p.type = p.type.toUpperCase(),
                    p.hasContent = !Cn.test(p.type),
                    o = p.url,
                    p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data,
                            delete p.data),
                        p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)),
                    p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]),
                        b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType),
                    N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
                for (i in p.headers)
                    N.setRequestHeader(i, p.headers[i]);
                if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x))
                    return N.abort();
                T = "abort";
                for (i in {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                    N[i](p[i]);
                if (l = qn(jn, p, n, N)) {
                    N.readyState = 1,
                        u && d.trigger("ajaxSend", [N, p]),
                        p.async && p.timeout > 0 && (s = setTimeout(function() {
                            N.abort("timeout")
                        }, p.timeout));
                    try {
                        x = 1,
                            l.send(y, k)
                    } catch (C) {
                        if (!(2 > x))
                            throw C;
                        k(-1, C)
                    }
                } else
                    k(-1, "No Transport");

                function k(e, n, r, i) {
                    var c, y, v, w, T, C = n;
                    2 !== x && (x = 2,
                        s && clearTimeout(s),
                        l = t,
                        a = i || "",
                        N.readyState = e > 0 ? 4 : 0,
                        r && (w = _n(p, N, r)),
                        e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"),
                                T && (b.lastModified[o] = T),
                                T = N.getResponseHeader("etag"),
                                T && (b.etag[o] = T)),
                            204 === e ? (c = !0,
                                C = "nocontent") : 304 === e ? (c = !0,
                                C = "notmodified") : (c = Fn(p, w),
                                C = c.state,
                                y = c.data,
                                v = c.error,
                                c = !v)) : (v = C, (e || !C) && (C = "error",
                            0 > e && (e = 0))),
                        N.status = e,
                        N.statusText = (n || C) + "",
                        c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]),
                        N.statusCode(m),
                        m = t,
                        u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]),
                        g.fireWith(f, [N, C]),
                        u && (d.trigger("ajaxComplete", [N, p]),
                            --b.active || b.event.trigger("ajaxStop")))
                }
                return N
            },
            getScript: function(e, n) {
                return b.get(e, t, n, "script")
            },
            getJSON: function(e, t, n) {
                return b.get(e, t, n, "json")
            }
        });

    function _n(e, n, r) {
        var i, o, a, s, u = e.contents,
            l = e.dataTypes,
            c = e.responseFields;
        for (s in c)
            s in r && (n[c[s]] = r[s]);
        while ("*" === l[0])
            l.shift(),
            o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in u)
                if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in r)
            a = l[0];
        else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a),
            r[a]) : t
    }

    function Fn(e, t) {
        var n, r, i, o, a = {},
            s = 0,
            u = e.dataTypes.slice(),
            l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u[1])
            for (i in e.converters)
                a[i.toLowerCase()] = e.converters[i];
        for (; r = u[++s];)
            if ("*" !== r) {
                if ("*" !== l && l !== r) {
                    if (i = a[l + " " + r] || a["* " + r], !i)
                        for (n in a)
                            if (o = n.split(" "),
                                o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0],
                                    u.splice(s--, 0, r));
                                break
                            }
                    if (i !== !0)
                        if (i && e["throws"])
                            t = i(t);
                        else
                            try {
                                t = i(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: i ? c : "No conversion from " + l + " to " + r
                                }
                            }
                }
                l = r
            }
        return {
            state: "success",
            data: t
        }
    }
    b.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return b.globalEval(e),
                        e
                }
            }
        }),
        b.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1),
                e.crossDomain && (e.type = "GET",
                    e.global = !1)
        }),
        b.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, r = o.head || b("head")[0] || o.documentElement;
                return {
                    send: function(t, i) {
                        n = o.createElement("script"),
                            n.async = !0,
                            e.scriptCharset && (n.charset = e.scriptCharset),
                            n.src = e.url,
                            n.onload = n.onreadystatechange = function(e, t) {
                                (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                                    n.parentNode && n.parentNode.removeChild(n),
                                    n = null,
                                    t || i(200, "success"))
                            },
                            r.insertBefore(n, r.firstChild)
                    },
                    abort: function() {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
    var On = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = On.pop() || b.expando + "_" + vn++;
                return this[e] = !0,
                    e
            }
        }),
        b.ajaxPrefilter("json jsonp", function(n, r, i) {
            var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
            return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
                u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
                n.converters["script json"] = function() {
                    return s || b.error(o + " was not called"),
                        s[0]
                },
                n.dataTypes[0] = "json",
                a = e[o],
                e[o] = function() {
                    s = arguments
                },
                i.always(function() {
                    e[o] = a,
                        n[o] && (n.jsonpCallback = r.jsonpCallback,
                            On.push(o)),
                        s && b.isFunction(a) && a(s[0]),
                        s = a = t
                }),
                "script") : t
        });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() {
            var e;
            for (e in Pn)
                Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    b.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && In() || zn()
        } : In,
        Rn = b.ajaxSettings.xhr(),
        b.support.cors = !!Rn && "withCredentials" in Rn,
        Rn = b.support.ajax = !!Rn,
        Rn && b.ajaxTransport(function(n) {
            if (!n.crossDomain || b.support.cors) {
                var r;
                return {
                    send: function(i, o) {
                        var a, s, u = n.xhr();
                        if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async),
                            n.xhrFields)
                            for (s in n.xhrFields)
                                u[s] = n.xhrFields[s];
                        n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType),
                            n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in i)
                                u.setRequestHeader(s, i[s])
                        } catch (l) {}
                        u.send(n.hasContent && n.data || null),
                            r = function(e, i) {
                                var s, l, c, p;
                                try {
                                    if (r && (i || 4 === u.readyState))
                                        if (r = t,
                                            a && (u.onreadystatechange = b.noop,
                                                $n && delete Pn[a]),
                                            i)
                                            4 !== u.readyState && u.abort();
                                        else {
                                            p = {},
                                                s = u.status,
                                                l = u.getAllResponseHeaders(),
                                                "string" == typeof u.responseText && (p.text = u.responseText);
                                            try {
                                                c = u.statusText
                                            } catch (f) {
                                                c = ""
                                            }
                                            s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                        }
                                } catch (d) {
                                    i || o(-1, d)
                                }
                                p && o(s, c, p, l)
                            },
                            n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn,
                                $n && (Pn || (Pn = {},
                                        b(e).unload($n)),
                                    Pn[a] = r),
                                u.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(t, !0)
                    }
                }
            }
        });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    o = Yn.exec(t),
                    a = i.cur(),
                    s = +a || 0,
                    u = 1,
                    l = 20;
                if (o) {
                    if (n = +o[2],
                        r = o[3] || (b.cssNumber[e] ? "" : "px"),
                        "px" !== r && s) {
                        s = b.css(i.elem, e, !0) || n || 1;
                        do
                            u = u || ".5",
                            s /= u,
                            b.style(i.elem, e, s + r);
                        while (u !== (u = i.cur() / a) && 1 !== u && --l)
                    }
                    i.unit = r,
                        i.start = s,
                        i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }]
        };

    function Kn() {
        return setTimeout(function() {
                Xn = t
            }),
            Xn = b.now()
    }

    function Zn(e, t) {
        b.each(t, function(t, n) {
            var r = (Qn[t] || []).concat(Qn["*"]),
                i = 0,
                o = r.length;
            for (; o > i; i++)
                if (r[i].call(e, t, n))
                    return
        })
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = b.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i)
                    return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = n / l.duration || 0,
                    o = 1 - r,
                    a = 0,
                    u = l.tweens.length;
                for (; u > a; a++)
                    l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]),
                    1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r),
                        r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i)
                        return this;
                    for (i = !0; r > n; n++)
                        l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                        this
                }
            }),
            c = l.props;
        for (tr(c, l.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(l, e, c, l.opts))
                return r;
        return Zn(l, c),
            b.isFunction(l.opts.start) && l.opts.start.call(e, l),
            b.fx.timer(b.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (i in e)
            if (r = b.camelCase(i),
                o = t[r],
                n = e[i],
                b.isArray(n) && (o = n[1],
                    n = e[i] = n[0]),
                i !== r && (e[r] = n,
                    delete e[i]),
                a = b.cssHooks[r],
                a && "expand" in a) {
                n = a.expand(n),
                    delete e[r];
                for (i in n)
                    i in e || (e[i] = n[i],
                        t[i] = o)
            } else
                t[r] = o
    }
    b.Animation = b.extend(er, {
        tweener: function(e, t) {
            b.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++)
                n = e[r],
                Qn[n] = Qn[n] || [],
                Qn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, u, l, c, p, f = this,
            d = e.style,
            h = {},
            g = [],
            m = e.nodeType && nn(e);
        n.queue || (c = b._queueHooks(e, "fx"),
                null == c.unqueued && (c.unqueued = 0,
                    p = c.empty.fire,
                    c.empty.fire = function() {
                        c.unqueued || p()
                    }
                ),
                c.unqueued++,
                f.always(function() {
                    f.always(function() {
                        c.unqueued--,
                            b.queue(e, "fx").length || c.empty.fire()
                    })
                })),
            1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
                "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
            n.overflow && (d.overflow = "hidden",
                b.support.shrinkWrapBlocks || f.always(function() {
                    d.overflow = n.overflow[0],
                        d.overflowX = n.overflow[1],
                        d.overflowY = n.overflow[2]
                }));
        for (i in t)
            if (a = t[i],
                Vn.exec(a)) {
                if (delete t[i],
                    u = u || "toggle" === a,
                    a === (m ? "hide" : "show"))
                    continue;
                g.push(i)
            }
        if (o = g.length) {
            s = b._data(e, "fxshow") || b._data(e, "fxshow", {}),
                "hidden" in s && (m = s.hidden),
                u && (s.hidden = !m),
                m ? b(e).show() : f.done(function() {
                    b(e).hide()
                }),
                f.done(function() {
                    var t;
                    b._removeData(e, "fxshow");
                    for (t in h)
                        b.style(e, t, h[t])
                });
            for (i = 0; o > i; i++)
                r = g[i],
                l = f.createTween(r, m ? s[r] : 0),
                h[r] = s[r] || b.style(e, r),
                r in s || (s[r] = l.start,
                    m && (l.end = l.start,
                        l.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    b.Tween = rr,
        rr.prototype = {
            constructor: rr,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = i || "swing",
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (b.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = rr.propHooks[this.prop];
                return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = rr.propHooks[this.prop];
                return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : rr.propHooks._default.set(this),
                    this
            }
        },
        rr.prototype.init.prototype = rr.prototype,
        rr.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        },
        rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        b.each(["toggle", "show", "hide"], function(e, t) {
            var n = b.fn[t];
            b.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
            }
        }),
        b.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(nn).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = b.isEmptyObject(e),
                    o = b.speed(t, n, r),
                    a = function() {
                        var t = er(this, b.extend({}, e), o);
                        a.finish = function() {
                            t.stop(!0)
                        }, (i || b._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a,
                    i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, n, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(r)
                };
                return "string" != typeof e && (r = n,
                        n = e,
                        e = t),
                    n && e !== !1 && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0,
                            n = null != e && e + "queueHooks",
                            o = b.timers,
                            a = b._data(this);
                        if (n)
                            a[n] && a[n].stop && i(a[n]);
                        else
                            for (n in a)
                                a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                        for (n = o.length; n--;)
                            o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r),
                                t = !1,
                                o.splice(n, 1));
                        (t || !r) && b.dequeue(this, e)
                    })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                    this.each(function() {
                        var t, n = b._data(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = b.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0,
                            b.queue(this, e, []),
                            i && i.cur && i.cur.finish && i.cur.finish.call(this),
                            t = o.length; t--;)
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                o.splice(t, 1));
                        for (t = 0; a > t; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
            }
        });

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = Zt[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
            r
    }
    b.each({
            slideDown: ir("show"),
            slideUp: ir("hide"),
            slideToggle: ir("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            b.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        b.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? b.extend({}, e) : {
                complete: n || !n && t || b.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !b.isFunction(t) && t
            };
            return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    b.isFunction(r.old) && r.old.call(this),
                        r.queue && b.dequeue(this, r.queue)
                },
                r
        },
        b.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        },
        b.timers = [],
        b.fx = rr.prototype.init,
        b.fx.tick = function() {
            var e, n = b.timers,
                r = 0;
            for (Xn = b.now(); n.length > r; r++)
                e = n[r],
                e() || n[r] !== e || n.splice(r--, 1);
            n.length || b.fx.stop(),
                Xn = t
        },
        b.fx.timer = function(e) {
            e() && b.timers.push(e) && b.fx.start()
        },
        b.fx.interval = 13,
        b.fx.start = function() {
            Un || (Un = setInterval(b.fx.tick, b.fx.interval))
        },
        b.fx.stop = function() {
            clearInterval(Un),
                Un = null
        },
        b.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        b.fx.step = {},
        b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
            return b.grep(b.timers, function(t) {
                return e === t.elem
            }).length
        }),
        b.fn.offset = function(e) {
            if (arguments.length)
                return e === t ? this : this.each(function(t) {
                    b.offset.setOffset(this, e, t)
                });
            var n, r, o = {
                    top: 0,
                    left: 0
                },
                a = this[0],
                s = a && a.ownerDocument;
            if (s)
                return n = s.documentElement,
                    b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()),
                        r = or(s), {
                            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
                        }) : o
        },
        b.offset = {
            setOffset: function(e, t, n) {
                var r = b.css(e, "position");
                "static" === r && (e.style.position = "relative");
                var i = b(e),
                    o = i.offset(),
                    a = b.css(e, "top"),
                    s = b.css(e, "left"),
                    u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
                    l = {},
                    c = {},
                    p, f;
                u ? (c = i.position(),
                        p = c.top,
                        f = c.left) : (p = parseFloat(a) || 0,
                        f = parseFloat(s) || 0),
                    b.isFunction(t) && (t = t.call(e, n, o)),
                    null != t.top && (l.top = t.top - o.top + p),
                    null != t.left && (l.left = t.left - o.left + f),
                    "using" in t ? t.using.call(e, l) : i.css(l)
            }
        },
        b.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        r = this[0];
                    return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                        b.nodeName(e[0], "html") || (n = e.offset()),
                        n.top += b.css(e[0], "borderTopWidth", !0),
                        n.left += b.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - b.css(r, "marginTop", !0),
                        left: t.left - n.left - b.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent || o.documentElement;
                    while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position"))
                        e = e.offsetParent;
                    return e || o.documentElement
                })
            }
        }),
        b.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var r = /Y/.test(n);
            b.fn[e] = function(i) {
                return b.access(this, function(e, i, o) {
                    var a = or(e);
                    return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o,
                        t)
                }, e, i, arguments.length, null)
            }
        });

    function or(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    b.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            b.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(r, i) {
                b.fn[i] = function(i, o) {
                    var a = arguments.length && (r || "boolean" != typeof i),
                        s = r || (i === !0 || o === !0 ? "margin" : "border");
                    return b.access(this, function(n, r, i) {
                        var o;
                        return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                            Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
                    }, n, a ? i : t, a, null)
                }
            })
        }),
        e.jQuery = e.$ = b,
        "function" == typeof define && define("jquery/1.9.1/jquery", [], function() {
            return b
        })
})(window);;
$.noConflict();;
/**jquery-cookie.js*/
define("jquery/plugins/cookie/1.3/cookie", [], function(require, exports, module) {
    var jQuery = require("jquery");
    ! function($, document, undefined) {
        var pluses = /\+/g;

        function raw(s) {
            return s
        }

        function decoded(s) {
            return decodeURIComponent(s.replace(pluses, " "))
        }
        var config = $.cookie = function(key, value, options) {
            if (value !== undefined) {
                options = $.extend({}, config.defaults, options);
                if (value === null) {
                    options.expires = -1
                }
                if (typeof options.expires === "number") {
                    var days = options.expires,
                        t = options.expires = new Date;
                    t.setDate(t.getDate() + days)
                }
                value = config.json ? JSON.stringify(value) : String(value);
                return document.cookie = [encodeURIComponent(key), "=", config.raw ? value : encodeURIComponent(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("")
            }
            var decode = config.raw ? raw : decoded;
            var cookies = document.cookie.split("; ");
            for (var i = 0, l = cookies.length; i < l; i++) {
                var parts = cookies[i].split("=");
                if (decode(parts.shift()) === key) {
                    var cookie = decode(parts.join("="));
                    return config.json ? JSON.parse(cookie) : cookie
                }
            }
            return null
        };
        config.defaults = {};
        $.removeCookie = function(key, options) {
            if ($.cookie(key) !== null) {
                $.cookie(key, null, options);
                return true
            }
            return false
        }
    }
    (jQuery, document)
});;
/**jquery-hotkeys.js*/
define("jquery/plugins/jquery-hotkeys/jquery-hotkeys", [], function(require, exports, module) {
    var jQuery = require("jquery");
    ! function(jQuery) {
        jQuery.hotkeys = {
            version: "0.8",
            specialKeys: {
                8: "backspace",
                9: "tab",
                13: "return",
                16: "shift",
                17: "ctrl",
                18: "alt",
                19: "pause",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "insert",
                46: "del",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                112: "f1",
                113: "f2",
                114: "f3",
                115: "f4",
                116: "f5",
                117: "f6",
                118: "f7",
                119: "f8",
                120: "f9",
                121: "f10",
                122: "f11",
                123: "f12",
                144: "numlock",
                145: "scroll",
                191: "/",
                224: "meta"
            },
            shiftNums: {
                "`": "~",
                1: "!",
                2: "@",
                3: "#",
                4: "$",
                5: "%",
                6: "^",
                7: "&",
                8: "*",
                9: "(",
                0: ")",
                "-": "_",
                "=": "+",
                ";": ": ",
                "'": '"',
                ",": "<",
                ".": ">",
                "/": "?",
                "\\": "|"
            }
        };

        function keyHandler(handleObj) {
            if (typeof handleObj.data !== "string") {
                return
            }
            var origHandler = handleObj.handler,
                keys = handleObj.data.toLowerCase().split(" "),
                textAcceptingInputTypes = ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color"];
            handleObj.handler = function(event) {
                if (this !== event.target && (/textarea|select/i.test(event.target.nodeName) || jQuery.inArray(event.target.type, textAcceptingInputTypes) > -1)) {
                    return
                }
                var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[event.which],
                    character = String.fromCharCode(event.which).toLowerCase(),
                    key, modif = "",
                    possible = {};
                if (event.altKey && special !== "alt") {
                    modif += "alt+"
                }
                if (event.ctrlKey && special !== "ctrl") {
                    modif += "ctrl+"
                }
                if (event.metaKey && !event.ctrlKey && special !== "meta") {
                    modif += "meta+"
                }
                if (event.shiftKey && special !== "shift") {
                    modif += "shift+"
                }
                if (special) {
                    possible[modif + special] = true
                } else {
                    possible[modif + character] = true;
                    possible[modif + jQuery.hotkeys.shiftNums[character]] = true;
                    if (modif === "shift+") {
                        possible[jQuery.hotkeys.shiftNums[character]] = true
                    }
                }
                for (var i = 0, l = keys.length; i < l; i++) {
                    if (possible[keys[i]]) {
                        return origHandler.apply(this, arguments)
                    }
                }
            }
        }
        jQuery.each(["keydown", "keyup", "keypress"], function() {
            jQuery.event.special[this] = {
                add: keyHandler
            }
        })
    }
    (jQuery)
});;
// jquery placeholder
! function(a) {
    var b = "function" == typeof define,
        c = "undefined" != typeof module && module.exports;
    if (b)
        define("jquery/plugins/jquery-placeholder/jquery.placeholder", [], a);
    else {
        if (!c)
            throw new Error("undefined type");
        a(require, module.exports, module)
    }
}
(function() {
    ! function(a, b, c) {
        function k(a) {
            var b = {},
                d = /^jQuery\d+$/;
            return c.each(a.attributes, function(a, c) {
                    c.specified && !d.test(c.name) && (b[c.name] = c.value)
                }),
                b
        }

        function l(a, b) {
            var d = this,
                e = c(d);
            if (d.value == e.attr("placeholder") && e.hasClass("placeholder"))
                if (e.data("placeholder-password")) {
                    if (e = e.hide().next().show().attr("id", e.removeAttr("id").data("placeholder-id")),
                        a === !0)
                        return e[0].value = b;
                    e.focus()
                } else
                    d.value = "",
                    e.removeClass("placeholder"),
                    d == n() && d.select()
        }

        function m() {
            var a, b = this,
                d = c(b),
                e = this.id;
            if ("" == b.value) {
                if ("password" == b.type) {
                    if (!d.data("placeholder-textinput")) {
                        try {
                            a = d.clone().attr({
                                type: "text"
                            })
                        } catch (f) {
                            a = c("<input>").attr(c.extend(k(this), {
                                type: "text"
                            }))
                        }
                        a.removeAttr("name").data({
                                "placeholder-password": d,
                                "placeholder-id": e
                            }).bind("focus.placeholder", l),
                            d.data({
                                "placeholder-textinput": a,
                                "placeholder-id": e
                            }).before(a)
                    }
                    d = d.removeAttr("id").hide().prev().attr("id", e).show()
                }
                d.addClass("placeholder"),
                    d[0].value = d.attr("placeholder")
            } else
                d.removeClass("placeholder")
        }

        function n() {
            try {
                return b.activeElement
            } catch (a) {}
        }
        var i, j, d = "placeholder" in b.createElement("input"),
            e = "placeholder" in b.createElement("textarea"),
            f = c.fn,
            g = c.valHooks,
            h = c.propHooks;
        d && e ? (j = f.placeholder = function() {
                return this
            },
            j.input = j.textarea = !0) : (j = f.placeholder = function() {
                var a = this;
                return a.filter((d ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                        "focus.placeholder": l,
                        "blur.placeholder": m
                    }).data("placeholder-enabled", !0).trigger("blur.placeholder"),
                    a
            },
            j.input = d,
            j.textarea = e,
            i = {
                get: function(a) {
                    var b = c(a),
                        d = b.data("placeholder-password");
                    return d ? d[0].value : b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
                },
                set: function(a, b) {
                    var d = c(a),
                        e = d.data("placeholder-password");
                    return e ? e[0].value = b : d.data("placeholder-enabled") ? ("" == b ? (a.value = b,
                            a != n() && m.call(a)) : d.hasClass("placeholder") ? l.call(a, !0, b) || (a.value = b) : a.value = b,
                        d) : a.value = b
                }
            },
            d || (g.input = i,
                h.value = i),
            e || (g.textarea = i,
                h.value = i),
            c(function() {
                c(b).delegate("form", "submit.placeholder", function() {
                    var a = c(".placeholder", this).each(l);
                    setTimeout(function() {
                        a.each(m)
                    }, 10)
                })
            }),
            c(a).bind("beforeunload.placeholder", function() {
                c(".placeholder").each(function() {
                    this.value = ""
                })
            }))
    }
    (this, document, jQuery)
});;
// jquery.noty.packaged.min
define("jquery/plugins/noty/jquery.noty.packaged", ["jquery"], function() {
    "function" != typeof Object.create && (Object.create = function(a) {
            function b() {}
            return b.prototype = a,
                new b
        }),
        function(a) {
            var b = {
                init: function(b) {
                    return this.options = a.extend({}, a.noty.defaults, b),
                        this.options.layout = this.options.custom ? a.noty.layouts.inline : a.noty.layouts[this.options.layout],
                        a.noty.themes[this.options.theme] ? this.options.theme = a.noty.themes[this.options.theme] : b.themeClassName = this.options.theme,
                        delete b.layout,
                        delete b.theme,
                        this.options = a.extend({}, this.options, this.options.layout.options),
                        this.options.id = "noty_" + (new Date).getTime() * Math.floor(1e6 * Math.random()),
                        this.options = a.extend({}, this.options, b),
                        this._build(),
                        this
                },
                _build: function() {
                    var b = a('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
                    if (b.append(this.options.template).find(".noty_text").html(this.options.text),
                        this.$bar = null !== this.options.layout.parent.object ? a(this.options.layout.parent.object).css(this.options.layout.parent.css).append(b) : b,
                        this.options.themeClassName && this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type),
                        this.options.buttons) {
                        this.options.closeWith = [],
                            this.options.timeout = !1;
                        var c = a("<div/>").addClass("noty_buttons");
                        null !== this.options.layout.parent.object ? this.$bar.find(".noty_bar").append(c) : this.$bar.append(c);
                        var d = this;
                        a.each(this.options.buttons, function(b, c) {
                            var e = a("<button/>").addClass(c.addClass ? c.addClass : "gray").html(c.text).attr("id", c.id ? c.id : "button-" + b).appendTo(d.$bar.find(".noty_buttons")).bind("click", function() {
                                a.isFunction(c.onClick) && c.onClick.call(e, d)
                            })
                        })
                    }
                    this.$message = this.$bar.find(".noty_message"),
                        this.$closeButton = this.$bar.find(".noty_close"),
                        this.$buttons = this.$bar.find(".noty_buttons"),
                        this.$qycCloseBtn = this.$bar.find(".qyc-close-btn"),
                        a.noty.store[this.options.id] = this
                },
                show: function() {
                    var b = this;
                    return b.options.custom ? b.options.custom.find(b.options.layout.container.selector).append(b.$bar) : a(b.options.layout.container.selector).append(b.$bar),
                        b.options.theme && b.options.theme.style && b.options.theme.style.apply(b),
                        "function" === a.type(b.options.layout.css) ? this.options.layout.css.apply(b.$bar) : b.$bar.css(this.options.layout.css || {}),
                        b.$bar.addClass(b.options.layout.addClass),
                        b.options.layout.container.style.apply(a(b.options.layout.container.selector)),
                        b.showing = !0,
                        b.options.theme && b.options.theme.style && b.options.theme.callback.onShow.apply(this),
                        a.inArray("click", b.options.closeWith) > -1 && b.$bar.css("cursor", "pointer").one("click", function(a) {
                            b.stopPropagation(a),
                                b.options.callback.onCloseClick && b.options.callback.onCloseClick.apply(b),
                                b.close()
                        }),
                        a.inArray("hover", b.options.closeWith) > -1 && b.$bar.one("mouseenter", function() {
                            b.close()
                        }),
                        a.inArray("button", b.options.closeWith) > -1 && b.$closeButton.one("click", function(a) {
                            b.stopPropagation(a),
                                b.close()
                        }), -1 == a.inArray("button", b.options.closeWith) && b.$closeButton.remove(),
                        b.options.callback.onShow && b.options.callback.onShow.apply(b),
                        b.$qycCloseBtn.one("click", function(a) {
                            b.stopPropagation(a),
                                b.close()
                        }),
                        b.$bar.animate(b.options.animation.open, b.options.animation.speed, b.options.animation.easing, function() {
                            b.options.callback.afterShow && b.options.callback.afterShow.apply(b),
                                b.showing = !1,
                                b.shown = !0
                        }),
                        b.options.timeout && b.$bar.delay(b.options.timeout).promise().done(function() {
                            b.close()
                        }),
                        this
                },
                close: function() {
                    if (!(this.closed || this.$bar && this.$bar.hasClass("i-am-closing-now"))) {
                        var b = this;
                        if (this.showing)
                            return b.$bar.queue(function() {
                                    b.close.apply(b)
                                }),
                                void 0;
                        if (!this.shown && !this.showing) {
                            var c = [];
                            return a.each(a.noty.queue, function(a, d) {
                                    d.options.id != b.options.id && c.push(d)
                                }),
                                a.noty.queue = c,
                                void 0
                        }
                        b.$bar.addClass("i-am-closing-now"),
                            b.options.callback.onClose && b.options.callback.onClose.apply(b),
                            b.$bar.clearQueue().stop().animate(b.options.animation.close, b.options.animation.speed, b.options.animation.easing, function() {
                                b.options.callback.afterClose && b.options.callback.afterClose.apply(b)
                            }).promise().done(function() {
                                b.options.modal && (a.notyRenderer.setModalCount(-1),
                                        0 == a.notyRenderer.getModalCount() && a(".noty_modal").fadeOut("fast", function() {
                                            a(this).remove()
                                        })),
                                    a.notyRenderer.setLayoutCountFor(b, -1),
                                    0 == a.notyRenderer.getLayoutCountFor(b) && a(b.options.layout.container.selector).remove(),
                                    "undefined" != typeof b.$bar && null !== b.$bar && (b.$bar.remove(),
                                        b.$bar = null,
                                        b.closed = !0),
                                    delete a.noty.store[b.options.id],
                                    b.options.theme.callback && b.options.theme.callback.onClose && b.options.theme.callback.onClose.apply(b),
                                    b.options.dismissQueue || (a.noty.ontap = !0,
                                        a.notyRenderer.render()),
                                    b.options.maxVisible > 0 && b.options.dismissQueue && a.notyRenderer.render()
                            })
                    }
                },
                setText: function(a) {
                    return this.closed || (this.options.text = a,
                            this.$bar.find(".noty_text").html(a)),
                        this
                },
                setType: function(a) {
                    return this.closed || (this.options.type = a,
                            this.options.theme.style.apply(this),
                            this.options.theme.callback.onShow.apply(this)),
                        this
                },
                setTimeout: function(a) {
                    if (!this.closed) {
                        var b = this;
                        this.options.timeout = a,
                            b.$bar.delay(b.options.timeout).promise().done(function() {
                                b.close()
                            })
                    }
                    return this
                },
                stopPropagation: function(a) {
                    a = a || window.event,
                        "undefined" != typeof a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
                },
                closed: !1,
                showing: !1,
                shown: !1
            };
            a.notyRenderer = {},
                a.notyRenderer.init = function(c) {
                    var d = Object.create(b).init(c);
                    return d.options.killer && a.noty.closeAll(),
                        d.options.force ? a.noty.queue.unshift(d) : a.noty.queue.push(d),
                        a.notyRenderer.render(),
                        "object" == a.noty.returns ? d : d.options.id
                },
                a.notyRenderer.render = function() {
                    var b = a.noty.queue[0];
                    "object" === a.type(b) ? b.options.dismissQueue ? b.options.maxVisible > 0 ? a(b.options.layout.container.selector + " li").length < b.options.maxVisible && a.notyRenderer.show(a.noty.queue.shift()) : a.notyRenderer.show(a.noty.queue.shift()) : a.noty.ontap && (a.notyRenderer.show(a.noty.queue.shift()),
                        a.noty.ontap = !1) : a.noty.ontap = !0
                },
                a.notyRenderer.show = function(b) {
                    b.options.modal && (a.notyRenderer.createModalFor(b),
                            a.notyRenderer.setModalCount(1)),
                        b.options.custom ? 0 == b.options.custom.find(b.options.layout.container.selector).length ? b.options.custom.append(a(b.options.layout.container.object).addClass("i-am-new")) : b.options.custom.find(b.options.layout.container.selector).removeClass("i-am-new") : 0 == a(b.options.layout.container.selector).length ? a("body").append(a(b.options.layout.container.object).addClass("i-am-new")) : a(b.options.layout.container.selector).removeClass("i-am-new"),
                        a.notyRenderer.setLayoutCountFor(b, 1),
                        b.show()
                },
                a.notyRenderer.createModalFor = function(b) {
                    if (0 == a(".noty_modal").length) {
                        var c = a("<div/>").addClass("noty_modal").addClass(b.options.theme).data("noty_modal_count", 0);
                        b.options.theme.modal && b.options.theme.modal.css && c.css(b.options.theme.modal.css),
                            c.prependTo(a("body")).fadeIn("fast")
                    }
                },
                a.notyRenderer.getLayoutCountFor = function(b) {
                    return a(b.options.layout.container.selector).data("noty_layout_count") || 0
                },
                a.notyRenderer.setLayoutCountFor = function(b, c) {
                    return a(b.options.layout.container.selector).data("noty_layout_count", a.notyRenderer.getLayoutCountFor(b) + c)
                },
                a.notyRenderer.getModalCount = function() {
                    return a(".noty_modal").data("noty_modal_count") || 0
                },
                a.notyRenderer.setModalCount = function(b) {
                    return a(".noty_modal").data("noty_modal_count", a.notyRenderer.getModalCount() + b)
                },
                a.fn.noty = function(b) {
                    return b.custom = a(this),
                        a.notyRenderer.init(b)
                },
                a.noty = {},
                a.noty.queue = [],
                a.noty.ontap = !0,
                a.noty.layouts = {},
                a.noty.themes = {},
                a.noty.returns = "object",
                a.noty.store = {},
                a.noty.get = function(b) {
                    return a.noty.store.hasOwnProperty(b) ? a.noty.store[b] : !1
                },
                a.noty.close = function(b) {
                    return a.noty.get(b) ? a.noty.get(b).close() : !1
                },
                a.noty.setText = function(b, c) {
                    return a.noty.get(b) ? a.noty.get(b).setText(c) : !1
                },
                a.noty.setType = function(b, c) {
                    return a.noty.get(b) ? a.noty.get(b).setType(c) : !1
                },
                a.noty.clearQueue = function() {
                    a.noty.queue = []
                },
                a.noty.closeAll = function() {
                    a.noty.clearQueue(),
                        a.each(a.noty.store, function(a, b) {
                            b.close()
                        })
                };
            var c = window.alert;
            a.noty.consumeAlert = function(b) {
                    window.alert = function(c) {
                        b ? b.text = c : b = {
                                text: c
                            },
                            a.notyRenderer.init(b)
                    }
                },
                a.noty.stopConsumeAlert = function() {
                    window.alert = c
                },
                a.noty.defaults = {
                    layout: "center",
                    theme: "defaultTheme",
                    type: "alert",
                    text: "",
                    dismissQueue: !0,
                    template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
                    animation: {
                        open: {
                            height: "toggle"
                        },
                        close: {
                            height: "toggle"
                        },
                        easing: "swing",
                        speed: 500
                    },
                    timeout: !1,
                    force: !1,
                    modal: !1,
                    maxVisible: 5,
                    killer: !0,
                    closeWith: ["click"],
                    callback: {
                        onShow: function() {},
                        afterShow: function() {},
                        onClose: function() {},
                        afterClose: function() {},
                        onCloseClick: function() {}
                    },
                    buttons: !1
                },
                a(window).resize(function() {
                    a.each(a.noty.layouts, function(b, c) {
                        c.container.style.apply(a(c.container.selector))
                    })
                })
        }
        (jQuery),
        window.noty = function(a) {
            return jQuery.notyRenderer.init(a)
        },
        function(a) {
            a.noty.layouts.bottom = {
                name: "bottom",
                options: {},
                container: {
                    object: '<ul id="noty_bottom_layout_container" />',
                    selector: "ul#noty_bottom_layout_container",
                    style: function() {
                        a(this).css({
                            bottom: 0,
                            left: "5%",
                            position: "fixed",
                            width: "90%",
                            height: "auto",
                            margin: 0,
                            padding: 0,
                            listStyleType: "none",
                            zIndex: 9999999
                        })
                    }
                },
                parent: {
                    object: "<li />",
                    selector: "li",
                    css: {}
                },
                css: {
                    display: "none"
                },
                addClass: ""
            }
        }
        (jQuery),
        function(a) {
            a.noty.layouts.bottomCenter = {
                name: "bottomCenter",
                options: {},
                container: {
                    object: '<ul id="noty_bottomCenter_layout_container" />',
                    selector: "ul#noty_bottomCenter_layout_container",
                    style: function() {
                        a(this).css({
                                bottom: 20,
                                left: 0,
                                position: "fixed",
                                width: "310px",
                                height: "auto",
                                margin: 0,
                                padding: 0,
                                listStyleType: "none",
                                zIndex: 1e7
                            }),
                            a(this).css({
                                left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px"
                            })
                    }
                },
                parent: {
                    object: "<li />",
                    selector: "li",
                    css: {}
                },
                css: {
                    display: "none",
                    width: "310px"
                },
                addClass: ""
            }
        }
        (jQuery),
        function(a) {
            a.noty.layouts.bottomLeft = {
                name: "bottomLeft",
                options: {},
                container: {
                    object: '<ul id="noty_bottomLeft_layout_container" />',
                    selector: "ul#noty_bottomLeft_layout_container",
                    style: function() {
                        a(this).css({
                                bottom: 20,
                                left: 20,
                                position: "fixed",
                                width: "310px",
                                height: "auto",
                                margin: 0,
                                padding: 0,
                                listStyleType: "none",
                                zIndex: 1e7
                            }),
                            window.innerWidth < 600 && a(this).css({
                                left: 5
                            })
                    }
                },
                parent: {
                    object: "<li />",
                    selector: "li",
                    css: {}
                },
                css: {
                    display: "none",
                    width: "310px"
                },
                addClass: ""
            }
        }
        (jQuery),
        function(a) {
            a.noty.layouts.bottomRight = {
                name: "bottomRight",
                options: {},
                container: {
                    object: '<ul id="noty_bottomRight_layout_container" />',
                    selector: "ul#noty_bottomRight_layout_container",
                    style: function() {
                        a(this).css({
                                bottom: 20,
                                right: 20,
                                position: "fixed",
                                width: "310px",
                                height: "auto",
                                margin: 0,
                                padding: 0,
                                listStyleType: "none",
                                zIndex: 1e7
                            }),
                            window.innerWidth < 600 && a(this).css({
                                right: 5
                            })
                    }
                },
                parent: {
                    object: "<li />",
                    selector: "li",
                    css: {}
                },
                css: {
                    display: "none",
                    width: "310px"
                },
                addClass: ""
            }
        }
        (jQuery),
        function(a) {
            a.noty.layouts.center = {
                name: "center",
                options: {},
                container: {
                    object: '<ul id="noty_center_layout_container" />',
                    selector: "ul#noty_center_layout_container",
                    style: function() {
                        a(this).css({
                            position: "fixed",
                            width: "310px",
                            height: "auto",
                            margin: 0,
                            padding: 0,
                            listStyleType: "none",
                            zIndex: 1e7
                        });
                        var b = a(this).clone().css({
                            visibility: "hidden",
                            display: "block",
                            position: "absolute",
                            top: 0,
                            left: 0
                        }).attr("id", "dupe");
                        a("body").append(b),
                            b.find(".i-am-closing-now").remove(),
                            b.find("li").css("display", "block");
                        var c = b.height();
                        b.remove(),
                            a(this).hasClass("i-am-new") ? a(this).css({
                                left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px",
                                top: (a(window).height() - c) / 2 + "px"
                            }) : a(this).animate({
                                left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px",
                                top: (a(window).height() - c) / 2 + "px"
                            }, 500)
                    }
                },
                parent: {
                    object: "<li />",
                    selector: "li",
                    css: {}
                },
                css: {
                    display: "none",
                    width: "310px"
                },
                addClass: ""
            }
        }
        (jQuery),
        function(a) {
            a.noty.layouts.centerLeft = {
                name: "centerLeft",
                options: {},
                container: {
                    object: '<ul id="noty_centerLeft_layout_container" />',
                    selector: "ul#noty_centerLeft_layout_container",
                    style: function() {
                        a(this).css({
                            left: 20,
                            position: "fixed",
                            width: "310px",
                            height: "auto",
                            margin: 0,
                            padding: 0,
                            listStyleType: "none",
                            zIndex: 1e7
                        });
                        var b = a(this).clone().css({
                            visibility: "hidden",
                            display: "block",
                            position: "absolute",
                            top: 0,
                            left: 0
                        }).attr("id", "dupe");
                        a("body").append(b),
                            b.find(".i-am-closing-now").remove(),
                            b.find("li").css("display", "block");
                        var c = b.height();
                        b.remove(),
                            a(this).hasClass("i-am-new") ? a(this).css({
                                top: (a(window).height() - c) / 2 + "px"
                            }) : a(this).animate({
                                top: (a(window).height() - c) / 2 + "px"
                            }, 500),
                            window.innerWidth < 600 && a(this).css({
                                left: 5
                            })
                    }
                },
                parent: {
                    object: "<li />",
                    selector: "li",
                    css: {}
                },
                css: {
                    display: "none",
                    width: "310px"
                },
                addClass: ""
            }
        }
        (jQuery),
        function(a) {
            a.noty.layouts.centerRight = {
                name: "centerRight",
                options: {},
                container: {
                    object: '<ul id="noty_centerRight_layout_container" />',
                    selector: "ul#noty_centerRight_layout_container",
                    style: function() {
                        a(this).css({
                            right: 20,
                            position: "fixed",
                            width: "310px",
                            height: "auto",
                            margin: 0,
                            padding: 0,
                            listStyleType: "none",
                            zIndex: 1e7
                        });
                        var b = a(this).clone().css({
                            visibility: "hidden",
                            display: "block",
                            position: "absolute",
                            top: 0,
                            left: 0
                        }).attr("id", "dupe");
                        a("body").append(b),
                            b.find(".i-am-closing-now").remove(),
                            b.find("li").css("display", "block");
                        var c = b.height();
                        b.remove(),
                            a(this).hasClass("i-am-new") ? a(this).css({
                                top: (a(window).height() - c) / 2 + "px"
                            }) : a(this).animate({
                                top: (a(window).height() - c) / 2 + "px"
                            }, 500),
                            window.innerWidth < 600 && a(this).css({
                                right: 5
                            })
                    }
                },
                parent: {
                    object: "<li />",
                    selector: "li",
                    css: {}
                },
                css: {
                    display: "none",
                    width: "310px"
                },
                addClass: ""
            }
        }
        (jQuery),
        function(a) {
            a.noty.layouts.inline = {
                name: "inline",
                options: {},
                container: {
                    object: '<ul class="noty_inline_layout_container" />',
                    selector: "ul.noty_inline_layout_container",
                    style: function() {
                        a(this).css({
                            width: "100%",
                            height: "auto",
                            margin: 0,
                            padding: 0,
                            listStyleType: "none",
                            zIndex: 9999999
                        })
                    }
                },
                parent: {
                    object: "<li />",
                    selector: "li",
                    css: {}
                },
                css: {
                    display: "none"
                },
                addClass: ""
            }
        }
        (jQuery),
        function(a) {
            a.noty.layouts.top = {
                name: "top",
                options: {},
                container: {
                    object: '<ul id="noty_top_layout_container" />',
                    selector: "ul#noty_top_layout_container",
                    style: function() {
                        a(this).css({
                            top: 0,
                            left: "5%",
                            position: "fixed",
                            width: "90%",
                            height: "auto",
                            margin: 0,
                            padding: 0,
                            listStyleType: "none",
                            zIndex: 9999999
                        })
                    }
                },
                parent: {
                    object: "<li />",
                    selector: "li",
                    css: {}
                },
                css: {
                    display: "none"
                },
                addClass: ""
            }
        }
        (jQuery),
        function(a) {
            a.noty.layouts.topCenter = {
                name: "topCenter",
                options: {},
                container: {
                    object: '<ul id="noty_topCenter_layout_container" />',
                    selector: "ul#noty_topCenter_layout_container",
                    style: function() {
                        a(this).css({
                                top: 20,
                                left: 0,
                                position: "fixed",
                                width: "310px",
                                height: "auto",
                                margin: 0,
                                padding: 0,
                                listStyleType: "none",
                                zIndex: 1e7
                            }),
                            a(this).css({
                                left: (a(window).width() - a(this).outerWidth(!1)) / 2 + "px"
                            })
                    }
                },
                parent: {
                    object: "<li />",
                    selector: "li",
                    css: {}
                },
                css: {
                    display: "none",
                    width: "310px"
                },
                addClass: ""
            }
        }
        (jQuery),
        function(a) {
            a.noty.layouts.topLeft = {
                name: "topLeft",
                options: {},
                container: {
                    object: '<ul id="noty_topLeft_layout_container" />',
                    selector: "ul#noty_topLeft_layout_container",
                    style: function() {
                        a(this).css({
                                top: 20,
                                left: 20,
                                position: "fixed",
                                width: "310px",
                                height: "auto",
                                margin: 0,
                                padding: 0,
                                listStyleType: "none",
                                zIndex: 1e7
                            }),
                            window.innerWidth < 600 && a(this).css({
                                left: 5
                            })
                    }
                },
                parent: {
                    object: "<li />",
                    selector: "li",
                    css: {}
                },
                css: {
                    display: "none",
                    width: "310px"
                },
                addClass: ""
            }
        }
        (jQuery),
        function(a) {
            a.noty.layouts.topRight = {
                name: "topRight",
                options: {},
                container: {
                    object: '<ul id="noty_topRight_layout_container" />',
                    selector: "ul#noty_topRight_layout_container",
                    style: function() {
                        a(this).css({
                                top: 20,
                                right: 20,
                                position: "fixed",
                                width: "310px",
                                height: "auto",
                                margin: 0,
                                padding: 0,
                                listStyleType: "none",
                                zIndex: 1e7
                            }),
                            window.innerWidth < 600 && a(this).css({
                                right: 5
                            })
                    }
                },
                parent: {
                    object: "<li />",
                    selector: "li",
                    css: {}
                },
                css: {
                    display: "none",
                    width: "310px"
                },
                addClass: ""
            }
        }
        (jQuery),
        function(a) {
            a.noty.themes.defaultTheme = {
                name: "defaultTheme",
                helpers: {
                    borderFix: function() {
                        if (this.options.dismissQueue) {
                            var b = this.options.layout.container.selector + " " + this.options.layout.parent.selector;
                            switch (this.options.layout.name) {
                                case "top":
                                    a(b).css({
                                            borderRadius: "0px 0px 0px 0px"
                                        }),
                                        a(b).last().css({
                                            borderRadius: "0px 0px 5px 5px"
                                        });
                                    break;
                                case "topCenter":
                                case "topLeft":
                                case "topRight":
                                case "bottomCenter":
                                case "bottomLeft":
                                case "bottomRight":
                                case "center":
                                case "centerLeft":
                                case "centerRight":
                                case "inline":
                                    a(b).css({
                                            borderRadius: "0px 0px 0px 0px"
                                        }),
                                        a(b).first().css({
                                            "border-top-left-radius": "5px",
                                            "border-top-right-radius": "5px"
                                        }),
                                        a(b).last().css({
                                            "border-bottom-left-radius": "5px",
                                            "border-bottom-right-radius": "5px"
                                        });
                                    break;
                                case "bottom":
                                    a(b).css({
                                            borderRadius: "0px 0px 0px 0px"
                                        }),
                                        a(b).first().css({
                                            borderRadius: "5px 5px 0px 0px"
                                        })
                            }
                        }
                    }
                },
                modal: {
                    css: {
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#000",
                        zIndex: 1e4,
                        opacity: .6,
                        display: "none",
                        left: 0,
                        top: 0
                    }
                },
                style: function() {
                    switch (this.$bar.css({
                            overflow: "hidden"
                        }),
                        this.$message.css({
                            fontSize: "13px",
                            lineHeight: "16px",
                            textAlign: "center",
                            padding: "8px 10px 9px",
                            width: "auto",
                            position: "relative"
                        }),
                        this.$closeButton.css({
                            position: "absolute",
                            top: 4,
                            right: 4,
                            width: 10,
                            height: 10,
                            background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAATpJREFUeNoszrFqVFEUheG19zlz7sQ7ijMQBAvfYBqbpJCoZSAQbOwEE1IHGytbLQUJ8SUktW8gCCFJMSGSNxCmFBJO7j5rpXD6n5/P5vM53H3b3T9LOiB5AQDuDjM7BnA7DMPHDGBH0nuSzwHsRcRVRNRSysuU0i6AOwA/02w2+9Fae00SEbEh6SGAR5K+k3zWWptKepCm0+kpyRoRGyRBcpPkDsn1iEBr7drdP2VJZyQXERGSPpiZAViTBACXKaV9kqd5uVzCzO5KKb/d/UZSDwD/eyxqree1VqSu6zKAF2Z2RPJJaw0rAkjOJT0m+SuT/AbgDcmnkmBmfwAsJL1dXQ8lWY6IGwB1ZbrOOb8zs8thGP4COFwx/mE8Ho9Go9ErMzvJOW/1fY/JZIJSypqZfXX3L13X9fcDAKJct1sx3OiuAAAAAElFTkSuQmCC)",
                            display: "none",
                            cursor: "pointer"
                        }),
                        this.$buttons.css({
                            padding: 5,
                            textAlign: "right",
                            borderTop: "1px solid #ccc",
                            backgroundColor: "#fff"
                        }),
                        this.$buttons.find("button").css({
                            marginLeft: 5
                        }),
                        this.$buttons.find("button:first").css({
                            marginLeft: 0
                        }),
                        this.$bar.bind({
                            mouseenter: function() {
                                a(this).find(".noty_close").stop().fadeTo("normal", 1)
                            },
                            mouseleave: function() {
                                a(this).find(".noty_close").stop().fadeTo("normal", 0)
                            }
                        }),
                        this.options.layout.name) {
                        case "top":
                            this.$bar.css({
                                borderRadius: "0px 0px 5px 5px",
                                borderBottom: "2px solid #eee",
                                borderLeft: "2px solid #eee",
                                borderRight: "2px solid #eee",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                            });
                            break;
                        case "topCenter":
                        case "center":
                        case "bottomCenter":
                        case "inline":
                            this.$bar.css({
                                    borderRadius: "5px",
                                    border: "1px solid #eee",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                                }),
                                this.$message.css({
                                    fontSize: "13px",
                                    textAlign: "center"
                                });
                            break;
                        case "topLeft":
                        case "topRight":
                        case "bottomLeft":
                        case "bottomRight":
                        case "centerLeft":
                        case "centerRight":
                            this.$bar.css({
                                    borderRadius: "5px",
                                    border: "1px solid #eee",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                                }),
                                this.$message.css({
                                    fontSize: "13px",
                                    textAlign: "left"
                                });
                            break;
                        case "bottom":
                            this.$bar.css({
                                borderRadius: "5px 5px 0px 0px",
                                borderTop: "2px solid #eee",
                                borderLeft: "2px solid #eee",
                                borderRight: "2px solid #eee",
                                boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                            });
                            break;
                        default:
                            this.$bar.css({
                                border: "2px solid #eee",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                            })
                    }
                    switch (this.options.type) {
                        case "alert":
                        case "notification":
                            this.$bar.css({
                                backgroundColor: "#FFF",
                                borderColor: "#CCC",
                                color: "#444"
                            });
                            break;
                        case "warning":
                            this.$bar.css({
                                    backgroundColor: "#FFEAA8",
                                    borderColor: "#FFC237",
                                    color: "#826200"
                                }),
                                this.$buttons.css({
                                    borderTop: "1px solid #FFC237"
                                });
                            break;
                        case "error":
                            this.$bar.css({
                                    backgroundColor: "red",
                                    borderColor: "darkred",
                                    color: "#FFF"
                                }),
                                this.$message.css({
                                    fontWeight: "bold"
                                }),
                                this.$buttons.css({
                                    borderTop: "1px solid darkred"
                                });
                            break;
                        case "information":
                            this.$bar.css({
                                    backgroundColor: "#57B7E2",
                                    borderColor: "#0B90C4",
                                    color: "#FFF"
                                }),
                                this.$buttons.css({
                                    borderTop: "1px solid #0B90C4"
                                });
                            break;
                        case "success":
                            this.$bar.css({
                                    backgroundColor: "lightgreen",
                                    borderColor: "#50C24E",
                                    color: "darkgreen"
                                }),
                                this.$buttons.css({
                                    borderTop: "1px solid #50C24E"
                                });
                            break;
                        default:
                            this.$bar.css({
                                backgroundColor: "#FFF",
                                borderColor: "#CCC",
                                color: "#444"
                            })
                    }
                },
                callback: {
                    onShow: function() {
                        a.noty.themes.defaultTheme.helpers.borderFix.apply(this)
                    },
                    onClose: function() {
                        a.noty.themes.defaultTheme.helpers.borderFix.apply(this)
                    }
                }
            }
        }
        (jQuery),
        $.noty.defaults = {
            layout: "center",
            theme: "defaultTheme",
            type: "alert",
            text: "",
            dismissQueue: !0,
            template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
            animation: {
                open: {
                    height: "toggle"
                },
                close: {
                    height: "toggle"
                },
                easing: "swing",
                speed: 300
            },
            timeout: !1,
            force: !1,
            modal: !1,
            maxVisible: 5,
            killer: !0,
            closeWith: ["click"],
            callback: {
                onShow: function() {},
                afterShow: function() {},
                onClose: function() {},
                afterClose: function() {}
            },
            buttons: !1
        };
    noty.success = function(a) {
            return noty({
                text: a,
                template: '<div class="noty_message"><i class="icon-custom-noty-success"></i><span class="noty_text"></span></div>',
                type: "success",
                timeout: 3e3,
                maxVisiable: 3
            })
        },
        noty.info = function(a) {
            return noty({
                text: a,
                type: "infomation",
                timeout: 3e3
            })
        },
        noty.error = function(a, b) {
            return noty({
                text: a,
                type: "alert",
                modal: !0,
                template: '<div class="noty_header">\u4fe1\u606f\u63d0\u793a<span class="qyc-close-btn">X</span></div><div class="noty_message"><i class="icon-custom-noty-error"></i><span class="noty_text"></span></div>',
                callback: {
                    onClose: function() {
                        b && b()
                    }
                },
                buttons: [{
                    addClass: "btn noty-btn-error",
                    text: "\u5173\u95ed",
                    onClick: function(a) {
                        a.close()
                    }
                }]
            })
        },
        noty.warn = function(a, b) {
            return noty({
                text: a,
                type: "warning",
                modal: !0,
                template: '<div class="noty_header">\u4fe1\u606f\u63d0\u793a<span class="qyc-close-btn">X</span></div><div class="noty_message"><i class="icon-custom-noty-warn"></i><span class="noty_text"></span></div>',
                buttons: [{
                    addClass: "btn noty-btn-retry",
                    text: "\u91cd\u8bd5",
                    onClick: function(a) {
                        a.close(),
                            b && b(!0)
                    }
                }, {
                    addClass: "btn noty-btn-cancel",
                    text: "\u53d6\u6d88",
                    onClick: function(a) {
                        a.close(),
                            b && b(!1)
                    }
                }]
            })
        },
        noty.confirm = function(a, b) {
            noty({
                    text: a,
                    type: "confirm",
                    modal: !0,
                    template: '<div class="noty_header">\u4fe1\u606f\u63d0\u793a<span class="qyc-close-btn">X</span></div><div class="noty_message"><i class="icon-custom-noty-confirm"></i><span class="noty_text"></span></div>',
                    buttons: [{
                        addClass: "btn noty-btn-confirm",
                        text: "\u786e\u5b9a",
                        onClick: function(a) {
                            a.close(),
                                b && b(!0)
                        }
                    }, {
                        addClass: "btn noty-btn-cancel",
                        text: "\u53d6\u6d88",
                        onClick: function(a) {
                            a.close(),
                                b && b(!1)
                        }
                    }]
                }),
                $()
        },
        noty.alert = function(a, b) {
            return noty({
                text: a,
                type: "alert",
                template: '<div class="noty_header">\u4fe1\u606f\u63d0\u793a<span class="qyc-close-btn">X</span></div><div class="noty_message"><i class="icon-custom-noty-alert"></i><span class="noty_text"></span></div>',
                modal: !0,
                callback: {
                    onClose: function() {
                        b && b()
                    }
                },
                buttons: [{
                    addClass: "btn noty-btn-alert",
                    text: "\u5173\u95ed",
                    onClick: function(a) {
                        a.close()
                    }
                }]
            })
        },
        noty.fail = noty.error;
});;
//jqueryztree
define("jquery/plugins/jqueryztree/jquery.ztree.all-3.5.min", [], function(require, exports, module) {
    var jQuery = require('jquery');
    /*
     * JQuery zTree core 3.5.13-beta.8
     */
    (function(o) {
        var E, F, G, H, I, J, r = {},
            K = {},
            s = {},
            L = {
                treeId: "",
                treeObj: null,
                view: {
                    addDiyDom: null,
                    autoCancelSelected: !0,
                    dblClickExpand: !0,
                    expandSpeed: "fast",
                    fontCss: {},
                    nameIsHTML: !1,
                    selectedMulti: !0,
                    showIcon: !0,
                    showLine: !0,
                    showTitle: !0
                },
                data: {
                    key: {
                        children: "children",
                        name: "name",
                        title: "",
                        url: "url"
                    },
                    simpleData: {
                        enable: !1,
                        idKey: "id",
                        pIdKey: "pId",
                        rootPId: null
                    },
                    keep: {
                        parent: !1,
                        leaf: !1
                    }
                },
                async: {
                    enable: !1,
                    contentType: "application/x-www-form-urlencoded",
                    type: "post",
                    dataType: "text",
                    url: "",
                    autoParam: [],
                    otherParam: [],
                    dataFilter: null
                },
                callback: {
                    beforeAsync: null,
                    beforeClick: null,
                    beforeDblClick: null,
                    beforeRightClick: null,
                    beforeMouseDown: null,
                    beforeMouseUp: null,
                    beforeExpand: null,
                    beforeCollapse: null,
                    beforeRemove: null,
                    onAsyncError: null,
                    onAsyncSuccess: null,
                    onNodeCreated: null,
                    onClick: null,
                    onDblClick: null,
                    onRightClick: null,
                    onMouseDown: null,
                    onMouseUp: null,
                    onExpand: null,
                    onCollapse: null,
                    onRemove: null
                }
            },
            t = [function(b) {
                var a = b.treeObj,
                    c = e.event;
                a.bind(c.NODECREATED, function(a, c, g) {
                    j.apply(b.callback.onNodeCreated, [a, c, g])
                });
                a.bind(c.CLICK, function(a, c, g, l, h) {
                    j.apply(b.callback.onClick, [c, g, l, h])
                });
                a.bind(c.EXPAND, function(a, c, g) {
                    j.apply(b.callback.onExpand, [a, c, g])
                });
                a.bind(c.COLLAPSE, function(a, c, g) {
                    j.apply(b.callback.onCollapse, [a, c, g])
                });
                a.bind(c.ASYNC_SUCCESS, function(a, c, g, l) {
                    j.apply(b.callback.onAsyncSuccess, [a, c, g, l])
                });
                a.bind(c.ASYNC_ERROR, function(a, c, g, l, h, e) {
                    j.apply(b.callback.onAsyncError, [a, c, g, l, h, e])
                })
            }],
            u = [function(b) {
                var a = e.event;
                b.treeObj.unbind(a.NODECREATED).unbind(a.CLICK).unbind(a.EXPAND).unbind(a.COLLAPSE).unbind(a.ASYNC_SUCCESS).unbind(a.ASYNC_ERROR)
            }],
            v = [function(b) {
                var a = h.getCache(b);
                a || (a = {},
                    h.setCache(b, a));
                a.nodes = [];
                a.doms = []
            }],
            w = [function(b, a, c, d, f, g) {
                if (c) {
                    var l = h.getRoot(b),
                        e = b.data.key.children;
                    c.level = a;
                    c.tId = b.treeId + "_" + ++l.zId;
                    c.parentTId = d ? d.tId : null;
                    if (c[e] && c[e].length > 0) {
                        if (typeof c.open == "string")
                            c.open = j.eqs(c.open, "true");
                        c.open = !!c.open;
                        c.isParent = !0;
                        c.zAsync = !0
                    } else {
                        c.open = !1;
                        if (typeof c.isParent == "string")
                            c.isParent = j.eqs(c.isParent, "true");
                        c.isParent = !!c.isParent;
                        c.zAsync = !c.isParent
                    }
                    c.isFirstNode = f;
                    c.isLastNode = g;
                    c.getParentNode =
                        function() {
                            return h.getNodeCache(b, c.parentTId)
                        };
                    c.getPreNode = function() {
                        return h.getPreNode(b, c)
                    };
                    c.getNextNode = function() {
                        return h.getNextNode(b, c)
                    };
                    c.isAjaxing = !1;
                    h.fixPIdKeyValue(b, c)
                }
            }],
            x = [function(b) {
                var a = b.target,
                    c = h.getSetting(b.data.treeId),
                    d = "",
                    f = null,
                    g = "",
                    l = "",
                    i = null,
                    p = null,
                    k = null;
                if (j.eqs(b.type, "mousedown"))
                    l = "mousedown";
                else if (j.eqs(b.type, "mouseup"))
                    l = "mouseup";
                else if (j.eqs(b.type, "contextmenu"))
                    l = "contextmenu";
                else if (j.eqs(b.type, "click"))
                    if (j.eqs(a.tagName, "span") && a.getAttribute("treeNode" +
                            e.id.SWITCH) !== null)
                        d = (o(a).parent("li").get(0) || o(a).parentsUntil("li").parent().get(0)).id,
                        g = "switchNode";
                    else {
                        if (k = j.getMDom(c, a, [{
                                tagName: "a",
                                attrName: "treeNode" + e.id.A
                            }]))
                            d = (o(k).parent("li").get(0) || o(k).parentsUntil("li").parent().get(0)).id,
                            g = "clickNode"
                    } else if (j.eqs(b.type, "dblclick") && (l = "dblclick",
                        k = j.getMDom(c, a, [{
                            tagName: "a",
                            attrName: "treeNode" + e.id.A
                        }])))
                    d = (o(k).parent("li").get(0) || o(k).parentsUntil("li").parent().get(0)).id,
                    g = "switchNode";
                if (l.length > 0 && d.length == 0 && (k = j.getMDom(c,
                        a, [{
                            tagName: "a",
                            attrName: "treeNode" + e.id.A
                        }])))
                    d = (o(k).parent("li").get(0) || o(k).parentsUntil("li").parent().get(0)).id;
                if (d.length > 0)
                    switch (f = h.getNodeCache(c, d),
                        g) {
                        case "switchNode":
                            f.isParent ? j.eqs(b.type, "click") || j.eqs(b.type, "dblclick") && j.apply(c.view.dblClickExpand, [c.treeId, f], c.view.dblClickExpand) ? i = E : g = "" : g = "";
                            break;
                        case "clickNode":
                            i = F
                    }
                switch (l) {
                    case "mousedown":
                        p = G;
                        break;
                    case "mouseup":
                        p = H;
                        break;
                    case "dblclick":
                        p = I;
                        break;
                    case "contextmenu":
                        p = J
                }
                return {
                    stop: !1,
                    node: f,
                    nodeEventType: g,
                    nodeEventCallback: i,
                    treeEventType: l,
                    treeEventCallback: p
                }
            }],
            y = [function(b) {
                var a = h.getRoot(b);
                a || (a = {},
                    h.setRoot(b, a));
                a[b.data.key.children] = [];
                a.expandTriggerFlag = !1;
                a.curSelectedList = [];
                a.noSelection = !0;
                a.createdNodes = [];
                a.zId = 0;
                a._ver = (new Date).getTime()
            }],
            z = [],
            A = [],
            B = [],
            C = [],
            D = [],
            h = {
                addNodeCache: function(b, a) {
                    h.getCache(b).nodes[h.getNodeCacheId(a.tId)] = a
                },
                getNodeCacheId: function(b) {
                    return b.substring(b.lastIndexOf("_") + 1)
                },
                addAfterA: function(b) {
                    A.push(b)
                },
                addBeforeA: function(b) {
                    z.push(b)
                },
                addInnerAfterA: function(b) {
                    C.push(b)
                },
                addInnerBeforeA: function(b) {
                    B.push(b)
                },
                addInitBind: function(b) {
                    t.push(b)
                },
                addInitUnBind: function(b) {
                    u.push(b)
                },
                addInitCache: function(b) {
                    v.push(b)
                },
                addInitNode: function(b) {
                    w.push(b)
                },
                addInitProxy: function(b) {
                    x.push(b)
                },
                addInitRoot: function(b) {
                    y.push(b)
                },
                addNodesData: function(b, a, c) {
                    var d = b.data.key.children;
                    a[d] || (a[d] = []);
                    if (a[d].length > 0)
                        a[d][a[d].length - 1].isLastNode = !1,
                        i.setNodeLineIcos(b, a[d][a[d].length - 1]);
                    a.isParent = !0;
                    a[d] = a[d].concat(c)
                },
                addSelectedNode: function(b, a) {
                    var c = h.getRoot(b);
                    h.isSelectedNode(b,
                        a) || c.curSelectedList.push(a)
                },
                addCreatedNode: function(b, a) {
                    (b.callback.onNodeCreated || b.view.addDiyDom) && h.getRoot(b).createdNodes.push(a)
                },
                addZTreeTools: function(b) {
                    D.push(b)
                },
                exSetting: function(b) {
                    o.extend(!0, L, b)
                },
                fixPIdKeyValue: function(b, a) {
                    b.data.simpleData.enable && (a[b.data.simpleData.pIdKey] = a.parentTId ? a.getParentNode()[b.data.simpleData.idKey] : b.data.simpleData.rootPId)
                },
                getAfterA: function(b, a, c) {
                    for (var d = 0, f = A.length; d < f; d++)
                        A[d].apply(this, arguments)
                },
                getBeforeA: function(b, a, c) {
                    for (var d =
                            0, f = z.length; d < f; d++)
                        z[d].apply(this, arguments)
                },
                getInnerAfterA: function(b, a, c) {
                    for (var d = 0, f = C.length; d < f; d++)
                        C[d].apply(this, arguments)
                },
                getInnerBeforeA: function(b, a, c) {
                    for (var d = 0, f = B.length; d < f; d++)
                        B[d].apply(this, arguments)
                },
                getCache: function(b) {
                    return s[b.treeId]
                },
                getNextNode: function(b, a) {
                    if (!a)
                        return null;
                    for (var c = b.data.key.children, d = a.parentTId ? a.getParentNode() : h.getRoot(b), f = 0, g = d[c].length - 1; f <= g; f++)
                        if (d[c][f] === a)
                            return f == g ? null : d[c][f + 1];
                    return null
                },
                getNodeByParam: function(b, a,
                    c, d) {
                    if (!a || !c)
                        return null;
                    for (var f = b.data.key.children, g = 0, l = a.length; g < l; g++) {
                        if (a[g][c] == d)
                            return a[g];
                        var e = h.getNodeByParam(b, a[g][f], c, d);
                        if (e)
                            return e
                    }
                    return null
                },
                getNodeCache: function(b, a) {
                    if (!a)
                        return null;
                    var c = s[b.treeId].nodes[h.getNodeCacheId(a)];
                    return c ? c : null
                },
                getNodeName: function(b, a) {
                    return "" + a[b.data.key.name]
                },
                getNodeTitle: function(b, a) {
                    return "" + a[b.data.key.title === "" ? b.data.key.name : b.data.key.title]
                },
                getNodes: function(b) {
                    return h.getRoot(b)[b.data.key.children]
                },
                getNodesByParam: function(b,
                    a, c, d) {
                    if (!a || !c)
                        return [];
                    for (var f = b.data.key.children, g = [], l = 0, e = a.length; l < e; l++)
                        a[l][c] == d && g.push(a[l]),
                        g = g.concat(h.getNodesByParam(b, a[l][f], c, d));
                    return g
                },
                getNodesByParamFuzzy: function(b, a, c, d) {
                    if (!a || !c)
                        return [];
                    for (var f = b.data.key.children, g = [], d = d.toLowerCase(), l = 0, e = a.length; l < e; l++)
                        typeof a[l][c] == "string" && a[l][c].toLowerCase().indexOf(d) > -1 && g.push(a[l]),
                        g = g.concat(h.getNodesByParamFuzzy(b, a[l][f], c, d));
                    return g
                },
                getNodesByFilter: function(b, a, c, d, f) {
                    if (!a)
                        return d ? null : [];
                    for (var g =
                            b.data.key.children, e = d ? null : [], i = 0, k = a.length; i < k; i++) {
                        if (j.apply(c, [a[i], f], !1)) {
                            if (d)
                                return a[i];
                            e.push(a[i])
                        }
                        var m = h.getNodesByFilter(b, a[i][g], c, d, f);
                        if (d && m)
                            return m;
                        e = d ? m : e.concat(m)
                    }
                    return e
                },
                getPreNode: function(b, a) {
                    if (!a)
                        return null;
                    for (var c = b.data.key.children, d = a.parentTId ? a.getParentNode() : h.getRoot(b), f = 0, g = d[c].length; f < g; f++)
                        if (d[c][f] === a)
                            return f == 0 ? null : d[c][f - 1];
                    return null
                },
                getRoot: function(b) {
                    return b ? K[b.treeId] : null
                },
                getSetting: function(b) {
                    return r[b]
                },
                getSettings: function() {
                    return r
                },
                getZTreeTools: function(b) {
                    return (b = this.getRoot(this.getSetting(b))) ? b.treeTools : null
                },
                initCache: function(b) {
                    for (var a = 0, c = v.length; a < c; a++)
                        v[a].apply(this, arguments)
                },
                initNode: function(b, a, c, d, f, g) {
                    for (var e = 0, h = w.length; e < h; e++)
                        w[e].apply(this, arguments)
                },
                initRoot: function(b) {
                    for (var a = 0, c = y.length; a < c; a++)
                        y[a].apply(this, arguments)
                },
                isSelectedNode: function(b, a) {
                    for (var c = h.getRoot(b), d = 0, f = c.curSelectedList.length; d < f; d++)
                        if (a === c.curSelectedList[d])
                            return !0;
                    return !1
                },
                removeNodeCache: function(b,
                    a) {
                    var c = b.data.key.children;
                    if (a[c])
                        for (var d = 0, f = a[c].length; d < f; d++)
                            arguments.callee(b, a[c][d]);
                    h.getCache(b).nodes[h.getNodeCacheId(a.tId)] = null
                },
                removeSelectedNode: function(b, a) {
                    for (var c = h.getRoot(b), d = 0, f = c.curSelectedList.length; d < f; d++)
                        if (a === c.curSelectedList[d] || !h.getNodeCache(b, c.curSelectedList[d].tId))
                            c.curSelectedList.splice(d, 1),
                            d--,
                            f--
                },
                setCache: function(b, a) {
                    s[b.treeId] = a
                },
                setRoot: function(b, a) {
                    K[b.treeId] = a
                },
                setZTreeTools: function(b, a) {
                    for (var c = 0, d = D.length; c < d; c++)
                        D[c].apply(this,
                            arguments)
                },
                transformToArrayFormat: function(b, a) {
                    if (!a)
                        return [];
                    var c = b.data.key.children,
                        d = [];
                    if (j.isArray(a))
                        for (var f = 0, g = a.length; f < g; f++)
                            d.push(a[f]),
                            a[f][c] && (d = d.concat(h.transformToArrayFormat(b, a[f][c])));
                    else
                        d.push(a),
                        a[c] && (d = d.concat(h.transformToArrayFormat(b, a[c])));
                    return d
                },
                transformTozTreeFormat: function(b, a) {
                    var c, d, f = b.data.simpleData.idKey,
                        g = b.data.simpleData.pIdKey,
                        e = b.data.key.children;
                    if (!f || f == "" || !a)
                        return [];
                    if (j.isArray(a)) {
                        var h = [],
                            i = [];
                        for (c = 0,
                            d = a.length; c < d; c++)
                            i[a[c][f]] =
                            a[c];
                        for (c = 0,
                            d = a.length; c < d; c++)
                            i[a[c][g]] && a[c][f] != a[c][g] ? (i[a[c][g]][e] || (i[a[c][g]][e] = []),
                                i[a[c][g]][e].push(a[c])) : h.push(a[c]);
                        return h
                    } else
                        return [a]
                }
            },
            m = {
                bindEvent: function(b) {
                    for (var a = 0, c = t.length; a < c; a++)
                        t[a].apply(this, arguments)
                },
                unbindEvent: function(b) {
                    for (var a = 0, c = u.length; a < c; a++)
                        u[a].apply(this, arguments)
                },
                bindTree: function(b) {
                    var a = {
                            treeId: b.treeId
                        },
                        b = b.treeObj;
                    b.bind("selectstart", function(a) {
                        a = a.originalEvent.srcElement.nodeName.toLowerCase();
                        return a === "input" || a === "textarea"
                    }).css({
                        "-moz-user-select": "-moz-none"
                    });
                    b.bind("click", a, m.proxy);
                    b.bind("dblclick", a, m.proxy);
                    b.bind("mouseover", a, m.proxy);
                    b.bind("mouseout", a, m.proxy);
                    b.bind("mousedown", a, m.proxy);
                    b.bind("mouseup", a, m.proxy);
                    b.bind("contextmenu", a, m.proxy)
                },
                unbindTree: function(b) {
                    b.treeObj.unbind("click", m.proxy).unbind("dblclick", m.proxy).unbind("mouseover", m.proxy).unbind("mouseout", m.proxy).unbind("mousedown", m.proxy).unbind("mouseup", m.proxy).unbind("contextmenu", m.proxy)
                },
                doProxy: function(b) {
                    for (var a = [], c = 0, d = x.length; c < d; c++) {
                        var f = x[c].apply(this,
                            arguments);
                        a.push(f);
                        if (f.stop)
                            break
                    }
                    return a
                },
                proxy: function(b) {
                    var a = h.getSetting(b.data.treeId);
                    if (!j.uCanDo(a, b))
                        return !0;
                    for (var a = m.doProxy(b), c = !0, d = 0, f = a.length; d < f; d++) {
                        var g = a[d];
                        g.nodeEventCallback && (c = g.nodeEventCallback.apply(g, [b, g.node]) && c);
                        g.treeEventCallback && (c = g.treeEventCallback.apply(g, [b, g.node]) && c)
                    }
                    return c
                }
            };
        E = function(b, a) {
            var c = h.getSetting(b.data.treeId);
            if (a.open) {
                if (j.apply(c.callback.beforeCollapse, [c.treeId, a], !0) == !1)
                    return !0
            } else if (j.apply(c.callback.beforeExpand, [c.treeId, a], !0) == !1)
                return !0;
            h.getRoot(c).expandTriggerFlag = !0;
            i.switchNode(c, a);
            return !0
        };
        F = function(b, a) {
            var c = h.getSetting(b.data.treeId),
                d = c.view.autoCancelSelected && b.ctrlKey && h.isSelectedNode(c, a) ? 0 : c.view.autoCancelSelected && b.ctrlKey && c.view.selectedMulti ? 2 : 1;
            if (j.apply(c.callback.beforeClick, [c.treeId, a, d], !0) == !1)
                return !0;
            d === 0 ? i.cancelPreSelectedNode(c, a) : i.selectNode(c, a, d === 2);
            c.treeObj.trigger(e.event.CLICK, [b, c.treeId, a, d]);
            return !0
        };
        G = function(b, a) {
            var c = h.getSetting(b.data.treeId);
            j.apply(c.callback.beforeMouseDown, [c.treeId, a], !0) && j.apply(c.callback.onMouseDown, [b, c.treeId, a]);
            return !0
        };
        H = function(b, a) {
            var c = h.getSetting(b.data.treeId);
            j.apply(c.callback.beforeMouseUp, [c.treeId, a], !0) && j.apply(c.callback.onMouseUp, [b, c.treeId, a]);
            return !0
        };
        I = function(b, a) {
            var c = h.getSetting(b.data.treeId);
            j.apply(c.callback.beforeDblClick, [c.treeId, a], !0) && j.apply(c.callback.onDblClick, [b, c.treeId, a]);
            return !0
        };
        J = function(b, a) {
            var c = h.getSetting(b.data.treeId);
            j.apply(c.callback.beforeRightClick, [c.treeId, a], !0) && j.apply(c.callback.onRightClick, [b, c.treeId, a]);
            return typeof c.callback.onRightClick != "function"
        };
        var j = {
                apply: function(b, a, c) {
                    return typeof b == "function" ? b.apply(M, a ? a : []) : c
                },
                canAsync: function(b, a) {
                    var c = b.data.key.children;
                    return b.async.enable && a && a.isParent && !(a.zAsync || a[c] && a[c].length > 0)
                },
                clone: function(b) {
                    if (b === null)
                        return null;
                    var a = j.isArray(b) ? [] : {},
                        c;
                    for (c in b)
                        a[c] = b[c] instanceof Date ? new Date(b[c].getTime()) : typeof b[c] === "object" ? arguments.callee(b[c]) : b[c];
                    return a
                },
                eqs: function(b, a) {
                    return b.toLowerCase() === a.toLowerCase()
                },
                isArray: function(b) {
                    return Object.prototype.toString.apply(b) === "[object Array]"
                },
                $: function(b, a, c) {
                    a && typeof a != "string" && (c = a,
                        a = "");
                    return typeof b == "string" ? o(b, c ? c.treeObj.get(0).ownerDocument : null) : o("#" + b.tId + a, c ? c.treeObj : null)
                },
                getMDom: function(b, a, c) {
                    if (!a)
                        return null;
                    for (; a && a.id !== b.treeId;) {
                        for (var d = 0, f = c.length; a.tagName && d < f; d++)
                            if (j.eqs(a.tagName, c[d].tagName) && a.getAttribute(c[d].attrName) !== null)
                                return a;
                        a = a.parentNode
                    }
                    return null
                },
                uCanDo: function() {
                    return !0
                }
            },
            i = {
                addNodes: function(b, a, c, d) {
                    if (!b.data.keep.leaf || !a || a.isParent)
                        if (j.isArray(c) || (c = [c]),
                            b.data.simpleData.enable && (c = h.transformTozTreeFormat(b, c)),
                            a) {
                            var f = k(a, e.id.SWITCH, b),
                                g = k(a, e.id.ICON, b),
                                l = k(a, e.id.UL, b);
                            if (!a.open)
                                i.replaceSwitchClass(a, f, e.folder.CLOSE),
                                i.replaceIcoClass(a, g, e.folder.CLOSE),
                                a.open = !1,
                                l.css({
                                    display: "none"
                                });
                            h.addNodesData(b, a, c);
                            i.createNodes(b, a.level + 1, c, a);
                            d || i.expandCollapseParentNode(b, a, !0)
                        } else
                            h.addNodesData(b, h.getRoot(b), c),
                            i.createNodes(b,
                                0, c, null)
                },
                appendNodes: function(b, a, c, d, f, g) {
                    if (!c)
                        return [];
                    for (var e = [], j = b.data.key.children, k = 0, m = c.length; k < m; k++) {
                        var n = c[k];
                        if (f) {
                            var o = (d ? d : h.getRoot(b))[j].length == c.length && k == 0;
                            h.initNode(b, a, n, d, o, k == c.length - 1, g);
                            h.addNodeCache(b, n)
                        }
                        o = [];
                        n[j] && n[j].length > 0 && (o = i.appendNodes(b, a + 1, n[j], n, f, g && n.open));
                        g && (i.makeDOMNodeMainBefore(e, b, n),
                            i.makeDOMNodeLine(e, b, n),
                            h.getBeforeA(b, n, e),
                            i.makeDOMNodeNameBefore(e, b, n),
                            h.getInnerBeforeA(b, n, e),
                            i.makeDOMNodeIcon(e, b, n),
                            h.getInnerAfterA(b, n, e),
                            i.makeDOMNodeNameAfter(e,
                                b, n),
                            h.getAfterA(b, n, e),
                            n.isParent && n.open && i.makeUlHtml(b, n, e, o.join("")),
                            i.makeDOMNodeMainAfter(e, b, n),
                            h.addCreatedNode(b, n))
                    }
                    return e
                },
                appendParentULDom: function(b, a) {
                    var c = [],
                        d = k(a, b);
                    !d.get(0) && a.parentTId && (i.appendParentULDom(b, a.getParentNode()),
                        d = k(a, b));
                    if (!k(a, e.id.UL, b).get(0)) {
                        var f = i.appendNodes(b, a.level + 1, a[b.data.key.children], a, !1, !0);
                        i.makeUlHtml(b, a, c, f.join(""));
                        d.append(c.join(""))
                    }
                },
                asyncNode: function(b, a, c, d) {
                    var f, g;
                    if (a && !a.isParent)
                        return j.apply(d), !1;
                    else if (a && a.isAjaxing)
                        return !1;
                    else if (j.apply(b.callback.beforeAsync, [b.treeId, a], !0) == !1)
                        return j.apply(d), !1;
                    if (a)
                        a.isAjaxing = !0,
                        k(a, e.id.ICON, b).attr({
                            style: "",
                            "class": e.className.BUTTON + " " + e.className.ICO_LOADING
                        });
                    var l = {};
                    for (f = 0,
                        g = b.async.autoParam.length; a && f < g; f++) {
                        var q = b.async.autoParam[f].split("="),
                            p = q;
                        q.length > 1 && (p = q[1],
                            q = q[0]);
                        l[p] = a[q]
                    }
                    if (j.isArray(b.async.otherParam))
                        for (f = 0,
                            g = b.async.otherParam.length; f < g; f += 2)
                            l[b.async.otherParam[f]] = b.async.otherParam[f + 1];
                    else
                        for (var m in b.async.otherParam)
                            l[m] = b.async.otherParam[m];
                    var n = h.getRoot(b)._ver;
                    o.ajax({
                        contentType: b.async.contentType,
                        type: b.async.type,
                        url: j.apply(b.async.url, [b.treeId, a], b.async.url),
                        data: l,
                        dataType: b.async.dataType,
                        success: function(f) {
                            if (n == h.getRoot(b)._ver) {
                                var g = [];
                                try {
                                    g = !f || f.length == 0 ? [] : typeof f == "string" ? eval("(" + f + ")") : f
                                } catch (l) {
                                    g = f
                                }
                                if (a)
                                    a.isAjaxing = null,
                                    a.zAsync = !0;
                                i.setNodeLineIcos(b, a);
                                g && g !== "" ? (g = j.apply(b.async.dataFilter, [b.treeId, a, g], g),
                                    i.addNodes(b, a, g ? j.clone(g) : [], !!c)) : i.addNodes(b, a, [], !!c);
                                b.treeObj.trigger(e.event.ASYNC_SUCCESS, [b.treeId, a, f]);
                                j.apply(d)
                            }
                        },
                        error: function(c, d, f) {
                            if (n == h.getRoot(b)._ver) {
                                if (a)
                                    a.isAjaxing = null;
                                i.setNodeLineIcos(b, a);
                                b.treeObj.trigger(e.event.ASYNC_ERROR, [b.treeId, a, c, d, f])
                            }
                        }
                    });
                    return !0
                },
                cancelPreSelectedNode: function(b, a) {
                    for (var c = h.getRoot(b).curSelectedList, d = c.length - 1; d >= 0; d--)
                        if (!a || a === c[d])
                            if (k(c[d], e.id.A, b).removeClass(e.node.CURSELECTED),
                                a) {
                                h.removeSelectedNode(b, a);
                                break
                            }
                    if (!a)
                        h.getRoot(b).curSelectedList = []
                },
                createNodeCallback: function(b) {
                    if (b.callback.onNodeCreated || b.view.addDiyDom)
                        for (var a =
                                h.getRoot(b); a.createdNodes.length > 0;) {
                            var c = a.createdNodes.shift();
                            j.apply(b.view.addDiyDom, [b.treeId, c]);
                            b.callback.onNodeCreated && b.treeObj.trigger(e.event.NODECREATED, [b.treeId, c])
                        }
                },
                createNodes: function(b, a, c, d) {
                    if (c && c.length != 0) {
                        var f = h.getRoot(b),
                            g = b.data.key.children,
                            g = !d || d.open || !!k(d[g][0], b).get(0);
                        f.createdNodes = [];
                        a = i.appendNodes(b, a, c, d, !0, g);
                        d ? (d = k(d, e.id.UL, b),
                            d.get(0) && d.append(a.join(""))) : b.treeObj.append(a.join(""));
                        i.createNodeCallback(b)
                    }
                },
                destroy: function(b) {
                    b && (h.initCache(b),
                        h.initRoot(b),
                        m.unbindTree(b),
                        m.unbindEvent(b),
                        b.treeObj.empty())
                },
                expandCollapseNode: function(b, a, c, d, f) {
                    var g = h.getRoot(b),
                        l = b.data.key.children;
                    if (a) {
                        if (g.expandTriggerFlag) {
                            var q = f,
                                f = function() {
                                    q && q();
                                    a.open ? b.treeObj.trigger(e.event.EXPAND, [b.treeId, a]) : b.treeObj.trigger(e.event.COLLAPSE, [b.treeId, a])
                                };
                            g.expandTriggerFlag = !1
                        }
                        if (!a.open && a.isParent && (!k(a, e.id.UL, b).get(0) || a[l] && a[l].length > 0 && !k(a[l][0], b).get(0)))
                            i.appendParentULDom(b, a),
                            i.createNodeCallback(b);
                        if (a.open == c)
                            j.apply(f, []);
                        else {
                            var c =
                                k(a, e.id.UL, b),
                                g = k(a, e.id.SWITCH, b),
                                p = k(a, e.id.ICON, b);
                            a.isParent ? (a.open = !a.open,
                                a.iconOpen && a.iconClose && p.attr("style", i.makeNodeIcoStyle(b, a)),
                                a.open ? (i.replaceSwitchClass(a, g, e.folder.OPEN),
                                    i.replaceIcoClass(a, p, e.folder.OPEN),
                                    d == !1 || b.view.expandSpeed == "" ? (c.show(),
                                        j.apply(f, [])) : a[l] && a[l].length > 0 ? c.slideDown(b.view.expandSpeed, f) : (c.show(),
                                        j.apply(f, []))) : (i.replaceSwitchClass(a, g, e.folder.CLOSE),
                                    i.replaceIcoClass(a, p, e.folder.CLOSE),
                                    d == !1 || b.view.expandSpeed == "" || !(a[l] && a[l].length > 0) ?
                                    (c.hide(),
                                        j.apply(f, [])) : c.slideUp(b.view.expandSpeed, f))) : j.apply(f, [])
                        }
                    } else
                        j.apply(f, [])
                },
                expandCollapseParentNode: function(b, a, c, d, f) {
                    a && (a.parentTId ? (i.expandCollapseNode(b, a, c, d),
                        a.parentTId && i.expandCollapseParentNode(b, a.getParentNode(), c, d, f)) : i.expandCollapseNode(b, a, c, d, f))
                },
                expandCollapseSonNode: function(b, a, c, d, f) {
                    var g = h.getRoot(b),
                        e = b.data.key.children,
                        g = a ? a[e] : g[e],
                        e = a ? !1 : d,
                        j = h.getRoot(b).expandTriggerFlag;
                    h.getRoot(b).expandTriggerFlag = !1;
                    if (g)
                        for (var k = 0, m = g.length; k < m; k++)
                            g[k] &&
                            i.expandCollapseSonNode(b, g[k], c, e);
                    h.getRoot(b).expandTriggerFlag = j;
                    i.expandCollapseNode(b, a, c, d, f)
                },
                makeDOMNodeIcon: function(b, a, c) {
                    var d = h.getNodeName(a, c),
                        d = a.view.nameIsHTML ? d : d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    b.push("<span id='", c.tId, e.id.ICON, "' title='' treeNode", e.id.ICON, " class='", i.makeNodeIcoClass(a, c), "' style='", i.makeNodeIcoStyle(a, c), "'></span><span id='", c.tId, e.id.SPAN, "'>", d, "</span>")
                },
                makeDOMNodeLine: function(b, a, c) {
                    b.push("<span id='", c.tId,
                        e.id.SWITCH, "' title='' class='", i.makeNodeLineClass(a, c), "' treeNode", e.id.SWITCH, "></span>")
                },
                makeDOMNodeMainAfter: function(b) {
                    b.push("</li>")
                },
                makeDOMNodeMainBefore: function(b, a, c) {
                    b.push("<li id='", c.tId, "' class='", e.className.LEVEL, c.level, "' tabindex='0' hidefocus='true' treenode>")
                },
                makeDOMNodeNameAfter: function(b) {
                    b.push("</a>")
                },
                makeDOMNodeNameBefore: function(b, a, c) {
                    var d = h.getNodeTitle(a, c),
                        f = i.makeNodeUrl(a, c),
                        g = i.makeNodeFontCss(a, c),
                        l = [],
                        k;
                    for (k in g)
                        l.push(k, ":", g[k], ";");
                    b.push("<a id='",
                        c.tId, e.id.A, "' class='", e.className.LEVEL, c.level, "' treeNode", e.id.A, ' onclick="', c.click || "", '" ', f != null && f.length > 0 ? "href='" + f + "'" : "", " target='", i.makeNodeTarget(c), "' style='", l.join(""), "'");
                    j.apply(a.view.showTitle, [a.treeId, c], a.view.showTitle) && d && b.push("title='", d.replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "'");
                    b.push(">")
                },
                makeNodeFontCss: function(b, a) {
                    var c = j.apply(b.view.fontCss, [b.treeId, a], b.view.fontCss);
                    return c && typeof c != "function" ? c : {}
                },
                makeNodeIcoClass: function(b,
                    a) {
                    var c = ["ico"];
                    a.isAjaxing || (c[0] = (a.iconSkin ? a.iconSkin + "_" : "") + c[0],
                        a.isParent ? c.push(a.open ? e.folder.OPEN : e.folder.CLOSE) : c.push(e.folder.DOCU));
                    return e.className.BUTTON + " " + c.join("_")
                },
                makeNodeIcoStyle: function(b, a) {
                    var c = [];
                    if (!a.isAjaxing) {
                        var d = a.isParent && a.iconOpen && a.iconClose ? a.open ? a.iconOpen : a.iconClose : a.icon;
                        d && c.push("background:url(", d, ") 0 0 no-repeat;");
                        (b.view.showIcon == !1 || !j.apply(b.view.showIcon, [b.treeId, a], !0)) && c.push("width:0px;height:0px;")
                    }
                    return c.join("")
                },
                makeNodeLineClass: function(b,
                    a) {
                    var c = [];
                    b.view.showLine ? a.level == 0 && a.isFirstNode && a.isLastNode ? c.push(e.line.ROOT) : a.level == 0 && a.isFirstNode ? c.push(e.line.ROOTS) : a.isLastNode ? c.push(e.line.BOTTOM) : c.push(e.line.CENTER) : c.push(e.line.NOLINE);
                    a.isParent ? c.push(a.open ? e.folder.OPEN : e.folder.CLOSE) : c.push(e.folder.DOCU);
                    return i.makeNodeLineClassEx(a) + c.join("_")
                },
                makeNodeLineClassEx: function(b) {
                    return e.className.BUTTON + " " + e.className.LEVEL + b.level + " " + e.className.SWITCH + " "
                },
                makeNodeTarget: function(b) {
                    return b.target || "_blank"
                },
                makeNodeUrl: function(b, a) {
                    var c = b.data.key.url;
                    return a[c] ? a[c] : null
                },
                makeUlHtml: function(b, a, c, d) {
                    c.push("<ul id='", a.tId, e.id.UL, "' class='", e.className.LEVEL, a.level, " ", i.makeUlLineClass(b, a), "' style='display:", a.open ? "block" : "none", "'>");
                    c.push(d);
                    c.push("</ul>")
                },
                makeUlLineClass: function(b, a) {
                    return b.view.showLine && !a.isLastNode ? e.line.LINE : ""
                },
                removeChildNodes: function(b, a) {
                    if (a) {
                        var c = b.data.key.children,
                            d = a[c];
                        if (d) {
                            for (var f = 0, g = d.length; f < g; f++)
                                h.removeNodeCache(b, d[f]);
                            h.removeSelectedNode(b);
                            delete a[c];
                            b.data.keep.parent ? k(a, e.id.UL, b).empty() : (a.isParent = !1,
                                a.open = !1,
                                c = k(a, e.id.SWITCH, b),
                                d = k(a, e.id.ICON, b),
                                i.replaceSwitchClass(a, c, e.folder.DOCU),
                                i.replaceIcoClass(a, d, e.folder.DOCU),
                                k(a, e.id.UL, b).remove())
                        }
                    }
                },
                setFirstNode: function(b, a) {
                    var c = b.data.key.children;
                    if (a[c].length > 0)
                        a[c][0].isFirstNode = !0
                },
                setLastNode: function(b, a) {
                    var c = b.data.key.children,
                        d = a[c].length;
                    if (d > 0)
                        a[c][d - 1].isLastNode = !0
                },
                removeNode: function(b, a) {
                    var c = h.getRoot(b),
                        d = b.data.key.children,
                        f = a.parentTId ? a.getParentNode() :
                        c;
                    a.isFirstNode = !1;
                    a.isLastNode = !1;
                    a.getPreNode = function() {
                        return null
                    };
                    a.getNextNode = function() {
                        return null
                    };
                    if (h.getNodeCache(b, a.tId)) {
                        k(a, b).remove();
                        h.removeNodeCache(b, a);
                        h.removeSelectedNode(b, a);
                        for (var g = 0, l = f[d].length; g < l; g++)
                            if (f[d][g].tId == a.tId) {
                                f[d].splice(g, 1);
                                break
                            }
                        i.setFirstNode(b, f);
                        i.setLastNode(b, f);
                        var j, g = f[d].length;
                        if (!b.data.keep.parent && g == 0)
                            f.isParent = !1,
                            f.open = !1,
                            g = k(f, e.id.UL, b),
                            l = k(f, e.id.SWITCH, b),
                            j = k(f, e.id.ICON, b),
                            i.replaceSwitchClass(f, l, e.folder.DOCU),
                            i.replaceIcoClass(f,
                                j, e.folder.DOCU),
                            g.css("display", "none");
                        else if (b.view.showLine && g > 0) {
                            var m = f[d][g - 1],
                                g = k(m, e.id.UL, b),
                                l = k(m, e.id.SWITCH, b);
                            j = k(m, e.id.ICON, b);
                            f == c ? f[d].length == 1 ? i.replaceSwitchClass(m, l, e.line.ROOT) : (c = k(f[d][0], e.id.SWITCH, b),
                                i.replaceSwitchClass(f[d][0], c, e.line.ROOTS),
                                i.replaceSwitchClass(m, l, e.line.BOTTOM)) : i.replaceSwitchClass(m, l, e.line.BOTTOM);
                            g.removeClass(e.line.LINE)
                        }
                    }
                },
                replaceIcoClass: function(b, a, c) {
                    if (a && !b.isAjaxing && (b = a.attr("class"),
                            b != void 0)) {
                        b = b.split("_");
                        switch (c) {
                            case e.folder.OPEN:
                            case e.folder.CLOSE:
                            case e.folder.DOCU:
                                b[b.length -
                                    1] = c
                        }
                        a.attr("class", b.join("_"))
                    }
                },
                replaceSwitchClass: function(b, a, c) {
                    if (a) {
                        var d = a.attr("class");
                        if (d != void 0) {
                            d = d.split("_");
                            switch (c) {
                                case e.line.ROOT:
                                case e.line.ROOTS:
                                case e.line.CENTER:
                                case e.line.BOTTOM:
                                case e.line.NOLINE:
                                    d[0] = i.makeNodeLineClassEx(b) + c;
                                    break;
                                case e.folder.OPEN:
                                case e.folder.CLOSE:
                                case e.folder.DOCU:
                                    d[1] = c
                            }
                            a.attr("class", d.join("_"));
                            c !== e.folder.DOCU ? a.removeAttr("disabled") : a.attr("disabled", "disabled")
                        }
                    }
                },
                selectNode: function(b, a, c) {
                    c || i.cancelPreSelectedNode(b);
                    k(a, e.id.A,
                        b).addClass(e.node.CURSELECTED);
                    h.addSelectedNode(b, a)
                },
                setNodeFontCss: function(b, a) {
                    var c = k(a, e.id.A, b),
                        d = i.makeNodeFontCss(b, a);
                    d && c.css(d)
                },
                setNodeLineIcos: function(b, a) {
                    if (a) {
                        var c = k(a, e.id.SWITCH, b),
                            d = k(a, e.id.UL, b),
                            f = k(a, e.id.ICON, b),
                            g = i.makeUlLineClass(b, a);
                        g.length == 0 ? d.removeClass(e.line.LINE) : d.addClass(g);
                        c.attr("class", i.makeNodeLineClass(b, a));
                        a.isParent ? c.removeAttr("disabled") : c.attr("disabled", "disabled");
                        f.removeAttr("style");
                        f.attr("style", i.makeNodeIcoStyle(b, a));
                        f.attr("class",
                            i.makeNodeIcoClass(b, a))
                    }
                },
                setNodeName: function(b, a) {
                    var c = h.getNodeTitle(b, a),
                        d = k(a, e.id.SPAN, b);
                    d.empty();
                    b.view.nameIsHTML ? d.html(h.getNodeName(b, a)) : d.text(h.getNodeName(b, a));
                    j.apply(b.view.showTitle, [b.treeId, a], b.view.showTitle) && k(a, e.id.A, b).attr("title", !c ? "" : c)
                },
                setNodeTarget: function(b, a) {
                    k(a, e.id.A, b).attr("target", i.makeNodeTarget(a))
                },
                setNodeUrl: function(b, a) {
                    var c = k(a, e.id.A, b),
                        d = i.makeNodeUrl(b, a);
                    d == null || d.length == 0 ? c.removeAttr("href") : c.attr("href", d)
                },
                switchNode: function(b, a) {
                    a.open ||
                        !j.canAsync(b, a) ? i.expandCollapseNode(b, a, !a.open) : b.async.enable ? i.asyncNode(b, a) || i.expandCollapseNode(b, a, !a.open) : a && i.expandCollapseNode(b, a, !a.open)
                }
            };
        o.fn.zTree = {
            consts: {
                className: {
                    BUTTON: "button",
                    LEVEL: "level",
                    ICO_LOADING: "ico_loading",
                    SWITCH: "switch"
                },
                event: {
                    NODECREATED: "ztree_nodeCreated",
                    CLICK: "ztree_click",
                    EXPAND: "ztree_expand",
                    COLLAPSE: "ztree_collapse",
                    ASYNC_SUCCESS: "ztree_async_success",
                    ASYNC_ERROR: "ztree_async_error"
                },
                id: {
                    A: "_a",
                    ICON: "_ico",
                    SPAN: "_span",
                    SWITCH: "_switch",
                    UL: "_ul"
                },
                line: {
                    ROOT: "root",
                    ROOTS: "roots",
                    CENTER: "center",
                    BOTTOM: "bottom",
                    NOLINE: "noline",
                    LINE: "line"
                },
                folder: {
                    OPEN: "open",
                    CLOSE: "close",
                    DOCU: "docu"
                },
                node: {
                    CURSELECTED: "curSelectedNode"
                }
            },
            _z: {
                tools: j,
                view: i,
                event: m,
                data: h
            },
            getZTreeObj: function(b) {
                return (b = h.getZTreeTools(b)) ? b : null
            },
            destroy: function(b) {
                if (b && b.length > 0)
                    i.destroy(h.getSetting(b));
                else
                    for (var a in r)
                        i.destroy(r[a])
            },
            init: function(b, a, c) {
                var d = j.clone(L);
                o.extend(!0, d, a);
                d.treeId = b.attr("id");
                d.treeObj = b;
                d.treeObj.empty();
                r[d.treeId] = d;
                if (typeof document.body.style.maxHeight ===
                    "undefined")
                    d.view.expandSpeed = "";
                h.initRoot(d);
                b = h.getRoot(d);
                a = d.data.key.children;
                c = c ? j.clone(j.isArray(c) ? c : [c]) : [];
                b[a] = d.data.simpleData.enable ? h.transformTozTreeFormat(d, c) : c;
                h.initCache(d);
                m.unbindTree(d);
                m.bindTree(d);
                m.unbindEvent(d);
                m.bindEvent(d);
                c = {
                    setting: d,
                    addNodes: function(a, b, c) {
                        function e() {
                            i.addNodes(d, a, h, c == !0)
                        }
                        if (!b)
                            return null;
                        a || (a = null);
                        if (a && !a.isParent && d.data.keep.leaf)
                            return null;
                        var h = j.clone(j.isArray(b) ? b : [b]);
                        j.canAsync(d, a) ? i.asyncNode(d, a, c, e) : e();
                        return h
                    },
                    cancelSelectedNode: function(a) {
                        i.cancelPreSelectedNode(d,
                            a)
                    },
                    destroy: function() {
                        i.destroy(d)
                    },
                    expandAll: function(a) {
                        a = !!a;
                        i.expandCollapseSonNode(d, null, a, !0);
                        return a
                    },
                    expandNode: function(a, b, c, e, m) {
                        if (!a || !a.isParent)
                            return null;
                        b !== !0 && b !== !1 && (b = !a.open);
                        if ((m = !!m) && b && j.apply(d.callback.beforeExpand, [d.treeId, a], !0) == !1)
                            return null;
                        else if (m && !b && j.apply(d.callback.beforeCollapse, [d.treeId, a], !0) == !1)
                            return null;
                        b && a.parentTId && i.expandCollapseParentNode(d, a.getParentNode(), b, !1);
                        if (b === a.open && !c)
                            return null;
                        h.getRoot(d).expandTriggerFlag = m;
                        if (c)
                            i.expandCollapseSonNode(d,
                                a, b, !0,
                                function() {
                                    if (e !== !1)
                                        try {
                                            k(a, d).focus().blur()
                                        } catch (b) {}
                                }
                            );
                        else if (a.open = !b,
                            i.switchNode(this.setting, a),
                            e !== !1)
                            try {
                                k(a, d).focus().blur()
                            } catch (o) {}
                        return b
                    },
                    getNodes: function() {
                        return h.getNodes(d)
                    },
                    getNodeByParam: function(a, b, c) {
                        return !a ? null : h.getNodeByParam(d, c ? c[d.data.key.children] : h.getNodes(d), a, b)
                    },
                    getNodeByTId: function(a) {
                        return h.getNodeCache(d, a)
                    },
                    getNodesByParam: function(a, b, c) {
                        return !a ? null : h.getNodesByParam(d, c ? c[d.data.key.children] : h.getNodes(d), a, b)
                    },
                    getNodesByParamFuzzy: function(a,
                        b, c) {
                        return !a ? null : h.getNodesByParamFuzzy(d, c ? c[d.data.key.children] : h.getNodes(d), a, b)
                    },
                    getNodesByFilter: function(a, b, c, e) {
                        b = !!b;
                        return !a || typeof a != "function" ? b ? null : [] : h.getNodesByFilter(d, c ? c[d.data.key.children] : h.getNodes(d), a, b, e)
                    },
                    getNodeIndex: function(a) {
                        if (!a)
                            return null;
                        for (var b = d.data.key.children, c = a.parentTId ? a.getParentNode() : h.getRoot(d), e = 0, i = c[b].length; e < i; e++)
                            if (c[b][e] == a)
                                return e;
                        return -1
                    },
                    getSelectedNodes: function() {
                        for (var a = [], b = h.getRoot(d).curSelectedList, c = 0, e = b.length; c <
                            e; c++)
                            a.push(b[c]);
                        return a
                    },
                    isSelectedNode: function(a) {
                        return h.isSelectedNode(d, a)
                    },
                    reAsyncChildNodes: function(a, b, c) {
                        if (this.setting.async.enable) {
                            var j = !a;
                            j && (a = h.getRoot(d));
                            if (b == "refresh") {
                                for (var b = this.setting.data.key.children, m = 0, o = a[b] ? a[b].length : 0; m < o; m++)
                                    h.removeNodeCache(d, a[b][m]);
                                h.removeSelectedNode(d);
                                a[b] = [];
                                j ? this.setting.treeObj.empty() : k(a, e.id.UL, d).empty()
                            }
                            i.asyncNode(this.setting, j ? null : a, !!c)
                        }
                    },
                    refresh: function() {
                        this.setting.treeObj.empty();
                        var a = h.getRoot(d),
                            b = a[d.data.key.children];
                        h.initRoot(d);
                        a[d.data.key.children] = b;
                        h.initCache(d);
                        i.createNodes(d, 0, a[d.data.key.children])
                    },
                    removeChildNodes: function(a) {
                        if (!a)
                            return null;
                        var b = a[d.data.key.children];
                        i.removeChildNodes(d, a);
                        return b ? b : null
                    },
                    removeNode: function(a, b) {
                        a && (b = !!b,
                            b && j.apply(d.callback.beforeRemove, [d.treeId, a], !0) == !1 || (i.removeNode(d, a),
                                b && this.setting.treeObj.trigger(e.event.REMOVE, [d.treeId, a])))
                    },
                    selectNode: function(a, b) {
                        if (a && j.uCanDo(d)) {
                            b = d.view.selectedMulti && b;
                            if (a.parentTId)
                                i.expandCollapseParentNode(d,
                                    a.getParentNode(), !0, !1,
                                    function() {
                                        try {
                                            k(a, d).focus().blur()
                                        } catch (b) {}
                                    }
                                );
                            else
                                try {
                                    k(a, d).focus().blur()
                                } catch (c) {}
                            i.selectNode(d, a, b)
                        }
                    },
                    transformTozTreeNodes: function(a) {
                        return h.transformTozTreeFormat(d, a)
                    },
                    transformToArray: function(a) {
                        return h.transformToArrayFormat(d, a)
                    },
                    updateNode: function(a) {
                        a && k(a, d).get(0) && j.uCanDo(d) && (i.setNodeName(d, a),
                            i.setNodeTarget(d, a),
                            i.setNodeUrl(d, a),
                            i.setNodeLineIcos(d, a),
                            i.setNodeFontCss(d, a))
                    }
                };
                b.treeTools = c;
                h.setZTreeTools(d, c);
                b[a] && b[a].length > 0 ? i.createNodes(d,
                    0, b[a]) : d.async.enable && d.async.url && d.async.url !== "" && i.asyncNode(d);
                return c
            }
        };
        var M = o.fn.zTree,
            k = j.$,
            e = M.consts
    })(jQuery);

    /*
     * JQuery zTree excheck 3.5.13-beta.8
     */
    (function(m) {
        var q, r, s, p = {
                event: {
                    CHECK: "ztree_check"
                },
                id: {
                    CHECK: "_check"
                },
                checkbox: {
                    STYLE: "checkbox",
                    DEFAULT: "chk",
                    DISABLED: "disable",
                    FALSE: "false",
                    TRUE: "true",
                    FULL: "full",
                    PART: "part",
                    FOCUS: "focus"
                },
                radio: {
                    STYLE: "radio",
                    TYPE_ALL: "all",
                    TYPE_LEVEL: "level"
                }
            },
            w = {
                check: {
                    enable: !1,
                    autoCheckTrigger: !1,
                    chkStyle: p.checkbox.STYLE,
                    nocheckInherit: !1,
                    chkDisabledInherit: !1,
                    radioType: p.radio.TYPE_LEVEL,
                    chkboxType: {
                        Y: "ps",
                        N: "ps"
                    }
                },
                data: {
                    key: {
                        checked: "checked"
                    }
                },
                callback: {
                    beforeCheck: null,
                    onCheck: null
                }
            };
        q = function(b,
            a) {
            if (a.chkDisabled === !0)
                return !1;
            var c = f.getSetting(b.data.treeId),
                d = c.data.key.checked;
            if (l.apply(c.callback.beforeCheck, [c.treeId, a], !0) == !1)
                return !0;
            a[d] = !a[d];
            e.checkNodeRelation(c, a);
            d = n(a, k.id.CHECK, c);
            e.setChkClass(c, d, a);
            e.repairParentChkClassWithSelf(c, a);
            c.treeObj.trigger(k.event.CHECK, [b, c.treeId, a]);
            return !0
        };
        r = function(b, a) {
            if (a.chkDisabled === !0)
                return !1;
            var c = f.getSetting(b.data.treeId),
                d = n(a, k.id.CHECK, c);
            a.check_Focus = !0;
            e.setChkClass(c, d, a);
            return !0
        };
        s = function(b, a) {
            if (a.chkDisabled ===
                !0)
                return !1;
            var c = f.getSetting(b.data.treeId),
                d = n(a, k.id.CHECK, c);
            a.check_Focus = !1;
            e.setChkClass(c, d, a);
            return !0
        };
        m.extend(!0, m.fn.zTree.consts, p);
        m.extend(!0, m.fn.zTree._z, {
            tools: {},
            view: {
                checkNodeRelation: function(b, a) {
                    var c, d, h, i = b.data.key.children,
                        j = b.data.key.checked;
                    c = k.radio;
                    if (b.check.chkStyle == c.STYLE) {
                        var g = f.getRadioCheckedList(b);
                        if (a[j])
                            if (b.check.radioType == c.TYPE_ALL) {
                                for (d = g.length - 1; d >= 0; d--)
                                    c = g[d],
                                    c[j] = !1,
                                    g.splice(d, 1),
                                    e.setChkClass(b, n(c, k.id.CHECK, b), c),
                                    c.parentTId != a.parentTId &&
                                    e.repairParentChkClassWithSelf(b, c);
                                g.push(a)
                            } else {
                                g = a.parentTId ? a.getParentNode() : f.getRoot(b);
                                for (d = 0,
                                    h = g[i].length; d < h; d++)
                                    c = g[i][d],
                                    c[j] && c != a && (c[j] = !1,
                                        e.setChkClass(b, n(c, k.id.CHECK, b), c))
                            } else if (b.check.radioType == c.TYPE_ALL)
                            for (d = 0,
                                h = g.length; d < h; d++)
                                if (a == g[d]) {
                                    g.splice(d, 1);
                                    break
                                }
                    } else
                        a[j] && (!a[i] || a[i].length == 0 || b.check.chkboxType.Y.indexOf("s") > -1) && e.setSonNodeCheckBox(b, a, !0), !a[j] && (!a[i] || a[i].length == 0 || b.check.chkboxType.N.indexOf("s") > -1) && e.setSonNodeCheckBox(b, a, !1),
                        a[j] &&
                        b.check.chkboxType.Y.indexOf("p") > -1 && e.setParentNodeCheckBox(b, a, !0), !a[j] && b.check.chkboxType.N.indexOf("p") > -1 && e.setParentNodeCheckBox(b, a, !1)
                },
                makeChkClass: function(b, a) {
                    var c = b.data.key.checked,
                        d = k.checkbox,
                        h = k.radio,
                        i = "",
                        i = a.chkDisabled === !0 ? d.DISABLED : a.halfCheck ? d.PART : b.check.chkStyle == h.STYLE ? a.check_Child_State < 1 ? d.FULL : d.PART : a[c] ? a.check_Child_State === 2 || a.check_Child_State === -1 ? d.FULL : d.PART : a.check_Child_State < 1 ? d.FULL : d.PART,
                        c = b.check.chkStyle + "_" + (a[c] ? d.TRUE : d.FALSE) + "_" + i,
                        c = a.check_Focus &&
                        a.chkDisabled !== !0 ? c + "_" + d.FOCUS : c;
                    return k.className.BUTTON + " " + d.DEFAULT + " " + c
                },
                repairAllChk: function(b, a) {
                    if (b.check.enable && b.check.chkStyle === k.checkbox.STYLE)
                        for (var c = b.data.key.checked, d = b.data.key.children, h = f.getRoot(b), i = 0, j = h[d].length; i < j; i++) {
                            var g = h[d][i];
                            g.nocheck !== !0 && g.chkDisabled !== !0 && (g[c] = a);
                            e.setSonNodeCheckBox(b, g, a)
                        }
                },
                repairChkClass: function(b, a) {
                    if (a && (f.makeChkFlag(b, a),
                            a.nocheck !== !0)) {
                        var c = n(a, k.id.CHECK, b);
                        e.setChkClass(b, c, a)
                    }
                },
                repairParentChkClass: function(b, a) {
                    if (a &&
                        a.parentTId) {
                        var c = a.getParentNode();
                        e.repairChkClass(b, c);
                        e.repairParentChkClass(b, c)
                    }
                },
                repairParentChkClassWithSelf: function(b, a) {
                    if (a) {
                        var c = b.data.key.children;
                        a[c] && a[c].length > 0 ? e.repairParentChkClass(b, a[c][0]) : e.repairParentChkClass(b, a)
                    }
                },
                repairSonChkDisabled: function(b, a, c, d) {
                    if (a) {
                        var h = b.data.key.children;
                        if (a.chkDisabled != c)
                            a.chkDisabled = c;
                        e.repairChkClass(b, a);
                        if (a[h] && d)
                            for (var i = 0, j = a[h].length; i < j; i++)
                                e.repairSonChkDisabled(b, a[h][i], c, d)
                    }
                },
                repairParentChkDisabled: function(b, a, c,
                    d) {
                    if (a) {
                        if (a.chkDisabled != c && d)
                            a.chkDisabled = c;
                        e.repairChkClass(b, a);
                        e.repairParentChkDisabled(b, a.getParentNode(), c, d)
                    }
                },
                setChkClass: function(b, a, c) {
                    a && (c.nocheck === !0 ? a.hide() : a.show(),
                        a.removeClass(),
                        a.addClass(e.makeChkClass(b, c)))
                },
                setParentNodeCheckBox: function(b, a, c, d) {
                    var h = b.data.key.children,
                        i = b.data.key.checked,
                        j = n(a, k.id.CHECK, b);
                    d || (d = a);
                    f.makeChkFlag(b, a);
                    a.nocheck !== !0 && a.chkDisabled !== !0 && (a[i] = c,
                        e.setChkClass(b, j, a),
                        b.check.autoCheckTrigger && a != d && b.treeObj.trigger(k.event.CHECK, [null, b.treeId, a]));
                    if (a.parentTId) {
                        j = !0;
                        if (!c)
                            for (var h = a.getParentNode()[h], g = 0, o = h.length; g < o; g++)
                                if (h[g].nocheck !== !0 && h[g].chkDisabled !== !0 && h[g][i] || (h[g].nocheck === !0 || h[g].chkDisabled === !0) && h[g].check_Child_State > 0) {
                                    j = !1;
                                    break
                                }
                        j && e.setParentNodeCheckBox(b, a.getParentNode(), c, d)
                    }
                },
                setSonNodeCheckBox: function(b, a, c, d) {
                    if (a) {
                        var h = b.data.key.children,
                            i = b.data.key.checked,
                            j = n(a, k.id.CHECK, b);
                        d || (d = a);
                        var g = !1;
                        if (a[h])
                            for (var o = 0, l = a[h].length; o < l && a.chkDisabled !== !0; o++) {
                                var m = a[h][o];
                                e.setSonNodeCheckBox(b,
                                    m, c, d);
                                m.chkDisabled === !0 && (g = !0)
                            }
                        if (a != f.getRoot(b) && a.chkDisabled !== !0) {
                            g && a.nocheck !== !0 && f.makeChkFlag(b, a);
                            if (a.nocheck !== !0 && a.chkDisabled !== !0) {
                                if (a[i] = c, !g)
                                    a.check_Child_State = a[h] && a[h].length > 0 ? c ? 2 : 0 : -1
                            } else
                                a.check_Child_State = -1;
                            e.setChkClass(b, j, a);
                            b.check.autoCheckTrigger && a != d && a.nocheck !== !0 && a.chkDisabled !== !0 && b.treeObj.trigger(k.event.CHECK, [null, b.treeId, a])
                        }
                    }
                }
            },
            event: {},
            data: {
                getRadioCheckedList: function(b) {
                    for (var a = f.getRoot(b).radioCheckedList, c = 0, d = a.length; c < d; c++)
                        f.getNodeCache(b,
                            a[c].tId) || (a.splice(c, 1),
                            c--,
                            d--);
                    return a
                },
                getCheckStatus: function(b, a) {
                    if (!b.check.enable || a.nocheck || a.chkDisabled)
                        return null;
                    var c = b.data.key.checked;
                    return {
                        checked: a[c],
                        half: a.halfCheck ? a.halfCheck : b.check.chkStyle == k.radio.STYLE ? a.check_Child_State === 2 : a[c] ? a.check_Child_State > -1 && a.check_Child_State < 2 : a.check_Child_State > 0
                    }
                },
                getTreeCheckedNodes: function(b, a, c, d) {
                    if (!a)
                        return [];
                    for (var h = b.data.key.children, i = b.data.key.checked, e = c && b.check.chkStyle == k.radio.STYLE && b.check.radioType == k.radio.TYPE_ALL,
                            d = !d ? [] : d, g = 0, o = a.length; g < o; g++) {
                        if (a[g].nocheck !== !0 && a[g].chkDisabled !== !0 && a[g][i] == c && (d.push(a[g]),
                                e))
                            break;
                        f.getTreeCheckedNodes(b, a[g][h], c, d);
                        if (e && d.length > 0)
                            break
                    }
                    return d
                },
                getTreeChangeCheckedNodes: function(b, a, c) {
                    if (!a)
                        return [];
                    for (var d = b.data.key.children, h = b.data.key.checked, c = !c ? [] : c, i = 0, e = a.length; i < e; i++)
                        a[i].nocheck !== !0 && a[i].chkDisabled !== !0 && a[i][h] != a[i].checkedOld && c.push(a[i]),
                        f.getTreeChangeCheckedNodes(b, a[i][d], c);
                    return c
                },
                makeChkFlag: function(b, a) {
                    if (a) {
                        var c = b.data.key.children,
                            d = b.data.key.checked,
                            h = -1;
                        if (a[c])
                            for (var e = 0, j = a[c].length; e < j; e++) {
                                var g = a[c][e],
                                    f = -1;
                                if (b.check.chkStyle == k.radio.STYLE)
                                    if (f = g.nocheck === !0 || g.chkDisabled === !0 ? g.check_Child_State : g.halfCheck === !0 ? 2 : g[d] ? 2 : g.check_Child_State > 0 ? 2 : 0,
                                        f == 2) {
                                        h = 2;
                                        break
                                    } else
                                        f == 0 && (h = 0);
                                else if (b.check.chkStyle == k.checkbox.STYLE)
                                    if (f = g.nocheck === !0 || g.chkDisabled === !0 ? g.check_Child_State : g.halfCheck === !0 ? 1 : g[d] ? g.check_Child_State === -1 || g.check_Child_State === 2 ? 2 : 1 : g.check_Child_State > 0 ? 1 : 0,
                                        f === 1) {
                                        h = 1;
                                        break
                                    } else if (f ===
                                    2 && h > -1 && e > 0 && f !== h) {
                                    h = 1;
                                    break
                                } else if (h === 2 && f > -1 && f < 2) {
                                    h = 1;
                                    break
                                } else
                                    f > -1 && (h = f)
                            }
                        a.check_Child_State = h
                    }
                }
            }
        });
        var m = m.fn.zTree,
            l = m._z.tools,
            k = m.consts,
            e = m._z.view,
            f = m._z.data,
            n = l.$;
        f.exSetting(w);
        f.addInitBind(function(b) {
            b.treeObj.bind(k.event.CHECK, function(a, c, d, h) {
                l.apply(b.callback.onCheck, [c ? c : a, d, h])
            })
        });
        f.addInitUnBind(function(b) {
            b.treeObj.unbind(k.event.CHECK)
        });
        f.addInitCache(function() {});
        f.addInitNode(function(b, a, c, d) {
            if (c) {
                a = b.data.key.checked;
                typeof c[a] == "string" && (c[a] = l.eqs(c[a],
                    "true"));
                c[a] = !!c[a];
                c.checkedOld = c[a];
                if (typeof c.nocheck == "string")
                    c.nocheck = l.eqs(c.nocheck, "true");
                c.nocheck = !!c.nocheck || b.check.nocheckInherit && d && !!d.nocheck;
                if (typeof c.chkDisabled == "string")
                    c.chkDisabled = l.eqs(c.chkDisabled, "true");
                c.chkDisabled = !!c.chkDisabled || b.check.chkDisabledInherit && d && !!d.chkDisabled;
                if (typeof c.halfCheck == "string")
                    c.halfCheck = l.eqs(c.halfCheck, "true");
                c.halfCheck = !!c.halfCheck;
                c.check_Child_State = -1;
                c.check_Focus = !1;
                c.getCheckStatus = function() {
                    return f.getCheckStatus(b,
                        c)
                };
                b.check.chkStyle == k.radio.STYLE && b.check.radioType == k.radio.TYPE_ALL && c[a] && f.getRoot(b).radioCheckedList.push(c)
            }
        });
        f.addInitProxy(function(b) {
            var a = b.target,
                c = f.getSetting(b.data.treeId),
                d = "",
                h = null,
                e = "",
                j = null;
            if (l.eqs(b.type, "mouseover")) {
                if (c.check.enable && l.eqs(a.tagName, "span") && a.getAttribute("treeNode" + k.id.CHECK) !== null)
                    d = a.parentNode.id,
                    e = "mouseoverCheck"
            } else if (l.eqs(b.type, "mouseout")) {
                if (c.check.enable && l.eqs(a.tagName, "span") && a.getAttribute("treeNode" + k.id.CHECK) !== null)
                    d = a.parentNode.id,
                    e = "mouseoutCheck"
            } else if (l.eqs(b.type, "click") && c.check.enable && l.eqs(a.tagName, "span") && a.getAttribute("treeNode" + k.id.CHECK) !== null)
                d = a.parentNode.id,
                e = "checkNode";
            if (d.length > 0)
                switch (h = f.getNodeCache(c, d),
                    e) {
                    case "checkNode":
                        j = q;
                        break;
                    case "mouseoverCheck":
                        j = r;
                        break;
                    case "mouseoutCheck":
                        j = s
                }
            return {
                stop: !1,
                node: h,
                nodeEventType: e,
                nodeEventCallback: j,
                treeEventType: "",
                treeEventCallback: null
            }
        });
        f.addInitRoot(function(b) {
            f.getRoot(b).radioCheckedList = []
        });
        f.addBeforeA(function(b, a, c) {
            b.check.enable &&
                (f.makeChkFlag(b, a),
                    c.push("<span ID='", a.tId, k.id.CHECK, "' class='", e.makeChkClass(b, a), "' treeNode", k.id.CHECK, a.nocheck === !0 ? " style='display:none;'" : "", "></span>"))
        });
        f.addZTreeTools(function(b, a) {
            a.checkNode = function(a, c, f, j) {
                var g = b.data.key.checked;
                if (a.chkDisabled !== !0 && (c !== !0 && c !== !1 && (c = !a[g]),
                        j = !!j, (a[g] !== c || f) && !(j && l.apply(this.setting.callback.beforeCheck, [b.treeId, a], !0) == !1) && l.uCanDo(this.setting) && b.check.enable && a.nocheck !== !0))
                    a[g] = c,
                    c = n(a, k.id.CHECK, b), (f || b.check.chkStyle ===
                        k.radio.STYLE) && e.checkNodeRelation(b, a),
                    e.setChkClass(b, c, a),
                    e.repairParentChkClassWithSelf(b, a),
                    j && b.treeObj.trigger(k.event.CHECK, [null, b.treeId, a])
            };
            a.checkAllNodes = function(a) {
                e.repairAllChk(b, !!a)
            };
            a.getCheckedNodes = function(a) {
                var c = b.data.key.children;
                return f.getTreeCheckedNodes(b, f.getRoot(b)[c], a !== !1)
            };
            a.getChangeCheckedNodes = function() {
                var a = b.data.key.children;
                return f.getTreeChangeCheckedNodes(b, f.getRoot(b)[a])
            };
            a.setChkDisabled = function(a, c, f, j) {
                c = !!c;
                f = !!f;
                e.repairSonChkDisabled(b,
                    a, c, !!j);
                e.repairParentChkDisabled(b, a.getParentNode(), c, f)
            };
            var c = a.updateNode;
            a.updateNode = function(d, f) {
                c && c.apply(a, arguments);
                if (d && b.check.enable && n(d, b).get(0) && l.uCanDo(b)) {
                    var i = n(d, k.id.CHECK, b);
                    (f == !0 || b.check.chkStyle === k.radio.STYLE) && e.checkNodeRelation(b, d);
                    e.setChkClass(b, i, d);
                    e.repairParentChkClassWithSelf(b, d)
                }
            }
        });
        var t = e.createNodes;
        e.createNodes = function(b, a, c, d) {
            t && t.apply(e, arguments);
            c && e.repairParentChkClassWithSelf(b, d)
        };
        var u = e.removeNode;
        e.removeNode = function(b, a) {
            var c =
                a.getParentNode();
            u && u.apply(e, arguments);
            a && c && (e.repairChkClass(b, c),
                e.repairParentChkClass(b, c))
        };
        var v = e.appendNodes;
        e.appendNodes = function(b, a, c, d, h, i) {
            var j = "";
            v && (j = v.apply(e, arguments));
            d && f.makeChkFlag(b, d);
            return j
        }
    })(jQuery);

    /*
     * JQuery zTree exedit 3.5.13-beta.8
     */
    (function(t) {
        var I = {
                event: {
                    DRAG: "ztree_drag",
                    DROP: "ztree_drop",
                    REMOVE: "ztree_remove",
                    RENAME: "ztree_rename"
                },
                id: {
                    EDIT: "_edit",
                    INPUT: "_input",
                    REMOVE: "_remove"
                },
                move: {
                    TYPE_INNER: "inner",
                    TYPE_PREV: "prev",
                    TYPE_NEXT: "next"
                },
                node: {
                    CURSELECTED_EDIT: "curSelectedNode_Edit",
                    TMPTARGET_TREE: "tmpTargetzTree",
                    TMPTARGET_NODE: "tmpTargetNode"
                }
            },
            F = {
                onHoverOverNode: function(b, a) {
                    var c = o.getSetting(b.data.treeId),
                        d = o.getRoot(c);
                    if (d.curHoverNode != a)
                        F.onHoverOutNode(b);
                    d.curHoverNode = a;
                    f.addHoverDom(c, a)
                },
                onHoverOutNode: function(b) {
                    var b =
                        o.getSetting(b.data.treeId),
                        a = o.getRoot(b);
                    if (a.curHoverNode && !o.isSelectedNode(b, a.curHoverNode))
                        f.removeTreeDom(b, a.curHoverNode),
                        a.curHoverNode = null
                },
                onMousedownNode: function(b, a) {
                    function c(b) {
                        if (z.dragFlag == 0 && Math.abs(M - b.clientX) < e.edit.drag.minMoveSize && Math.abs(N - b.clientY) < e.edit.drag.minMoveSize)
                            return !0;
                        var a, c, g, j, k;
                        k = e.data.key.children;
                        C.css("cursor", "pointer");
                        if (z.dragFlag == 0) {
                            if (h.apply(e.callback.beforeDrag, [e.treeId, l], !0) == !1)
                                return m(b), !0;
                            for (a = 0,
                                c = l.length; a < c; a++) {
                                if (a == 0)
                                    z.dragNodeShowBefore = [];
                                g = l[a];
                                g.isParent && g.open ? (f.expandCollapseNode(e, g, !g.open),
                                    z.dragNodeShowBefore[g.tId] = !0) : z.dragNodeShowBefore[g.tId] = !1
                            }
                            z.dragFlag = 1;
                            z.showHoverDom = !1;
                            h.showIfameMask(e, !0);
                            g = !0;
                            j = -1;
                            if (l.length > 1) {
                                var r = l[0].parentTId ? l[0].getParentNode()[k] : o.getNodes(e);
                                k = [];
                                for (a = 0,
                                    c = r.length; a < c; a++)
                                    if (z.dragNodeShowBefore[r[a].tId] !== void 0 && (g && j > -1 && j + 1 !== a && (g = !1),
                                            k.push(r[a]),
                                            j = a),
                                        l.length === k.length) {
                                        l = k;
                                        break
                                    }
                            }
                            g && (F = l[0].getPreNode(),
                                G = l[l.length - 1].getNextNode());
                            y = q("<ul class='zTreeDragUL'></ul>",
                                e);
                            for (a = 0,
                                c = l.length; a < c; a++)
                                if (g = l[a],
                                    g.editNameFlag = !1,
                                    f.selectNode(e, g, a > 0),
                                    f.removeTreeDom(e, g),
                                    j = q("<li id='" + g.tId + "_tmp'></li>", e),
                                    j.append(q(g, d.id.A, e).clone()),
                                    j.css("padding", "0"),
                                    j.children("#" + g.tId + d.id.A).removeClass(d.node.CURSELECTED),
                                    y.append(j),
                                    a == e.edit.drag.maxShowNodeNum - 1) {
                                    j = q("<li id='" + g.tId + "_moretmp'><a>  ...  </a></li>", e);
                                    y.append(j);
                                    break
                                }
                            y.attr("id", l[0].tId + d.id.UL + "_tmp");
                            y.addClass(e.treeObj.attr("class"));
                            y.appendTo(C);
                            x = q("<span class='tmpzTreeMove_arrow'></span>",
                                e);
                            x.attr("id", "zTreeMove_arrow_tmp");
                            x.appendTo(C);
                            e.treeObj.trigger(d.event.DRAG, [b, e.treeId, l])
                        }
                        if (z.dragFlag == 1) {
                            s && x.attr("id") == b.target.id && u && b.clientX + D.scrollLeft() + 2 > t("#" + u + d.id.A, s).offset().left ? (g = t("#" + u + d.id.A, s),
                                b.target = g.length > 0 ? g.get(0) : b.target) : s && (s.removeClass(d.node.TMPTARGET_TREE),
                                u && t("#" + u + d.id.A, s).removeClass(d.node.TMPTARGET_NODE + "_" + d.move.TYPE_PREV).removeClass(d.node.TMPTARGET_NODE + "_" + I.move.TYPE_NEXT).removeClass(d.node.TMPTARGET_NODE + "_" + I.move.TYPE_INNER));
                            u = s = null;
                            H = !1;
                            i = e;
                            g = o.getSettings();
                            for (var B in g)
                                if (g[B].treeId && g[B].edit.enable && g[B].treeId != e.treeId && (b.target.id == g[B].treeId || t(b.target).parents("#" + g[B].treeId).length > 0))
                                    H = !0,
                                    i = g[B];
                            B = D.scrollTop();
                            j = D.scrollLeft();
                            k = i.treeObj.offset();
                            a = i.treeObj.get(0).scrollHeight;
                            g = i.treeObj.get(0).scrollWidth;
                            c = b.clientY + B - k.top;
                            var p = i.treeObj.height() + k.top - b.clientY - B,
                                n = b.clientX + j - k.left,
                                J = i.treeObj.width() + k.left - b.clientX - j;
                            k = c < e.edit.drag.borderMax && c > e.edit.drag.borderMin;
                            var r = p < e.edit.drag.borderMax &&
                                p > e.edit.drag.borderMin,
                                K = n < e.edit.drag.borderMax && n > e.edit.drag.borderMin,
                                E = J < e.edit.drag.borderMax && J > e.edit.drag.borderMin,
                                p = c > e.edit.drag.borderMin && p > e.edit.drag.borderMin && n > e.edit.drag.borderMin && J > e.edit.drag.borderMin,
                                n = k && i.treeObj.scrollTop() <= 0,
                                J = r && i.treeObj.scrollTop() + i.treeObj.height() + 10 >= a,
                                O = K && i.treeObj.scrollLeft() <= 0,
                                P = E && i.treeObj.scrollLeft() + i.treeObj.width() + 10 >= g;
                            if (b.target.id && i.treeObj.find("#" + b.target.id).length > 0) {
                                for (var A = b.target; A && A.tagName && !h.eqs(A.tagName, "li") &&
                                    A.id != i.treeId;)
                                    A = A.parentNode;
                                var Q = !0;
                                for (a = 0,
                                    c = l.length; a < c; a++)
                                    if (g = l[a],
                                        A.id === g.tId) {
                                        Q = !1;
                                        break
                                    } else if (q(g, e).find("#" + A.id).length > 0) {
                                    Q = !1;
                                    break
                                }
                                if (Q && b.target.id && (b.target.id == A.id + d.id.A || t(b.target).parents("#" + A.id + d.id.A).length > 0))
                                    s = t(A),
                                    u = A.id
                            }
                            g = l[0];
                            if (p && (b.target.id == i.treeId || t(b.target).parents("#" + i.treeId).length > 0)) {
                                if (!s && (b.target.id == i.treeId || n || J || O || P) && (H || !H && g.parentTId))
                                    s = i.treeObj;
                                k ? i.treeObj.scrollTop(i.treeObj.scrollTop() - 10) : r && i.treeObj.scrollTop(i.treeObj.scrollTop() +
                                    10);
                                K ? i.treeObj.scrollLeft(i.treeObj.scrollLeft() - 10) : E && i.treeObj.scrollLeft(i.treeObj.scrollLeft() + 10);
                                s && s != i.treeObj && s.offset().left < i.treeObj.offset().left && i.treeObj.scrollLeft(i.treeObj.scrollLeft() + s.offset().left - i.treeObj.offset().left)
                            }
                            y.css({
                                top: b.clientY + B + 3 + "px",
                                left: b.clientX + j + 3 + "px"
                            });
                            k = a = 0;
                            if (s && s.attr("id") != i.treeId) {
                                var w = u == null ? null : o.getNodeCache(i, u);
                                c = b.ctrlKey && e.edit.drag.isMove && e.edit.drag.isCopy || !e.edit.drag.isMove && e.edit.drag.isCopy;
                                a = !!(F && u === F.tId);
                                k = !!(G && u ===
                                    G.tId);
                                j = g.parentTId && g.parentTId == u;
                                g = (c || !k) && h.apply(i.edit.drag.prev, [i.treeId, l, w], !!i.edit.drag.prev);
                                a = (c || !a) && h.apply(i.edit.drag.next, [i.treeId, l, w], !!i.edit.drag.next);
                                E = (c || !j) && !(i.data.keep.leaf && !w.isParent) && h.apply(i.edit.drag.inner, [i.treeId, l, w], !!i.edit.drag.inner);
                                if (!g && !a && !E) {
                                    if (s = null,
                                        u = "",
                                        v = d.move.TYPE_INNER,
                                        x.css({
                                            display: "none"
                                        }),
                                        window.zTreeMoveTimer)
                                        clearTimeout(window.zTreeMoveTimer),
                                        window.zTreeMoveTargetNodeTId = null
                                } else {
                                    c = t("#" + u + d.id.A, s);
                                    k = w.isLastNode ? null : t("#" +
                                        w.getNextNode().tId + d.id.A, s.next());
                                    r = c.offset().top;
                                    j = c.offset().left;
                                    K = g ? E ? 0.25 : a ? 0.5 : 1 : -1;
                                    E = a ? E ? 0.75 : g ? 0.5 : 0 : -1;
                                    b = (b.clientY + B - r) / c.height();
                                    (K == 1 || b <= K && b >= -0.2) && g ? (a = 1 - x.width(),
                                        k = r - x.height() / 2,
                                        v = d.move.TYPE_PREV) : (E == 0 || b >= E && b <= 1.2) && a ? (a = 1 - x.width(),
                                        k = k == null || w.isParent && w.open ? r + c.height() - x.height() / 2 : k.offset().top - x.height() / 2,
                                        v = d.move.TYPE_NEXT) : (a = 5 - x.width(),
                                        k = r,
                                        v = d.move.TYPE_INNER);
                                    x.css({
                                        display: "block",
                                        top: k + "px",
                                        left: j + a + "px"
                                    });
                                    c.addClass(d.node.TMPTARGET_NODE + "_" + v);
                                    if (R !=
                                        u || S != v)
                                        L = (new Date).getTime();
                                    if (w && w.isParent && v == d.move.TYPE_INNER && (b = !0,
                                            window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId !== w.tId ? (clearTimeout(window.zTreeMoveTimer),
                                                window.zTreeMoveTargetNodeTId = null) : window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId === w.tId && (b = !1),
                                            b))
                                        window.zTreeMoveTimer = setTimeout(function() {
                                            v == d.move.TYPE_INNER && w && w.isParent && !w.open && (new Date).getTime() - L > i.edit.drag.autoOpenTime && h.apply(i.callback.beforeDragOpen, [i.treeId, w], !0) && (f.switchNode(i, w),
                                                i.edit.drag.autoExpandTrigger &&
                                                i.treeObj.trigger(d.event.EXPAND, [i.treeId, w]))
                                        }, i.edit.drag.autoOpenTime + 50),
                                        window.zTreeMoveTargetNodeTId = w.tId
                                }
                            } else if (v = d.move.TYPE_INNER,
                                s && h.apply(i.edit.drag.inner, [i.treeId, l, null], !!i.edit.drag.inner) ? s.addClass(d.node.TMPTARGET_TREE) : s = null,
                                x.css({
                                    display: "none"
                                }),
                                window.zTreeMoveTimer)
                                clearTimeout(window.zTreeMoveTimer),
                                window.zTreeMoveTargetNodeTId = null;
                            R = u;
                            S = v
                        }
                        return !1
                    }

                    function m(b) {
                        if (window.zTreeMoveTimer)
                            clearTimeout(window.zTreeMoveTimer),
                            window.zTreeMoveTargetNodeTId = null;
                        S = R = null;
                        D.unbind("mousemove", c);
                        D.unbind("mouseup", m);
                        D.unbind("selectstart", g);
                        C.css("cursor", "auto");
                        s && (s.removeClass(d.node.TMPTARGET_TREE),
                            u && t("#" + u + d.id.A, s).removeClass(d.node.TMPTARGET_NODE + "_" + d.move.TYPE_PREV).removeClass(d.node.TMPTARGET_NODE + "_" + I.move.TYPE_NEXT).removeClass(d.node.TMPTARGET_NODE + "_" + I.move.TYPE_INNER));
                        h.showIfameMask(e, !1);
                        z.showHoverDom = !0;
                        if (z.dragFlag != 0) {
                            z.dragFlag = 0;
                            var a, k, j;
                            for (a = 0,
                                k = l.length; a < k; a++)
                                j = l[a],
                                j.isParent && z.dragNodeShowBefore[j.tId] && !j.open && (f.expandCollapseNode(e,
                                        j, !j.open),
                                    delete z.dragNodeShowBefore[j.tId]);
                            y && y.remove();
                            x && x.remove();
                            var p = b.ctrlKey && e.edit.drag.isMove && e.edit.drag.isCopy || !e.edit.drag.isMove && e.edit.drag.isCopy;
                            !p && s && u && l[0].parentTId && u == l[0].parentTId && v == d.move.TYPE_INNER && (s = null);
                            if (s) {
                                var n = u == null ? null : o.getNodeCache(i, u);
                                if (h.apply(e.callback.beforeDrop, [i.treeId, l, n, v, p], !0) != !1) {
                                    var r = p ? h.clone(l) : l;
                                    a = function() {
                                        if (H) {
                                            if (!p)
                                                for (var a = 0, c = l.length; a < c; a++)
                                                    f.removeNode(e, l[a]);
                                            if (v == d.move.TYPE_INNER)
                                                f.addNodes(i, n, r);
                                            else if (f.addNodes(i,
                                                    n.getParentNode(), r),
                                                v == d.move.TYPE_PREV)
                                                for (a = 0,
                                                    c = r.length; a < c; a++)
                                                    f.moveNode(i, n, r[a], v, !1);
                                            else
                                                for (a = -1,
                                                    c = r.length - 1; a < c; c--)
                                                    f.moveNode(i, n, r[c], v, !1)
                                        } else if (p && v == d.move.TYPE_INNER)
                                            f.addNodes(i, n, r);
                                        else if (p && f.addNodes(i, n.getParentNode(), r),
                                            v != d.move.TYPE_NEXT)
                                            for (a = 0,
                                                c = r.length; a < c; a++)
                                                f.moveNode(i, n, r[a], v, !1);
                                        else
                                            for (a = -1,
                                                c = r.length - 1; a < c; c--)
                                                f.moveNode(i, n, r[c], v, !1);
                                        for (a = 0,
                                            c = r.length; a < c; a++)
                                            f.selectNode(i, r[a], a > 0);
                                        q(r[0], e).focus().blur();
                                        e.treeObj.trigger(d.event.DROP, [b, i.treeId,
                                            r, n, v, p
                                        ])
                                    };
                                    v == d.move.TYPE_INNER && h.canAsync(i, n) ? f.asyncNode(i, n, !1, a) : a()
                                }
                            } else {
                                for (a = 0,
                                    k = l.length; !H && a < k; a++)
                                    f.selectNode(i, l[a], a > 0);
                                e.treeObj.trigger(d.event.DROP, [b, e.treeId, l, null, null, null])
                            }
                        }
                    }

                    function g() {
                        return !1
                    }
                    var k, j, e = o.getSetting(b.data.treeId),
                        z = o.getRoot(e);
                    if (b.button == 2 || !e.edit.enable || !e.edit.drag.isCopy && !e.edit.drag.isMove)
                        return !0;
                    var p = b.target,
                        n = o.getRoot(e).curSelectedList,
                        l = [];
                    if (o.isSelectedNode(e, a))
                        for (k = 0,
                            j = n.length; k < j; k++) {
                            if (n[k].editNameFlag && h.eqs(p.tagName, "input") &&
                                p.getAttribute("treeNode" + d.id.INPUT) !== null)
                                return !0;
                            l.push(n[k]);
                            if (l[0].parentTId !== n[k].parentTId) {
                                l = [a];
                                break
                            }
                        } else
                        l = [a];
                    f.editNodeBlur = !0;
                    f.cancelCurEditNode(e);
                    var D = t(e.treeObj.get(0).ownerDocument),
                        C = t(e.treeObj.get(0).ownerDocument.body),
                        y, x, s, H = !1,
                        i = e,
                        F, G, R = null,
                        S = null,
                        u = null,
                        v = d.move.TYPE_INNER,
                        M = b.clientX,
                        N = b.clientY,
                        L = (new Date).getTime();
                    h.uCanDo(e) && D.bind("mousemove", c);
                    D.bind("mouseup", m);
                    D.bind("selectstart", g);
                    b.preventDefault && b.preventDefault();
                    return !0
                }
            };
        t.extend(!0, t.fn.zTree.consts,
            I);
        t.extend(!0, t.fn.zTree._z, {
            tools: {
                getAbs: function(b) {
                    b = b.getBoundingClientRect();
                    return [b.left, b.top]
                },
                inputFocus: function(b) {
                    b.get(0) && (b.focus(),
                        h.setCursorPosition(b.get(0), b.val().length))
                },
                inputSelect: function(b) {
                    b.get(0) && (b.focus(),
                        b.select())
                },
                setCursorPosition: function(b, a) {
                    if (b.setSelectionRange)
                        b.focus(),
                        b.setSelectionRange(a, a);
                    else if (b.createTextRange) {
                        var c = b.createTextRange();
                        c.collapse(!0);
                        c.moveEnd("character", a);
                        c.moveStart("character", a);
                        c.select()
                    }
                },
                showIfameMask: function(b,
                    a) {
                    for (var c = o.getRoot(b); c.dragMaskList.length > 0;)
                        c.dragMaskList[0].remove(),
                        c.dragMaskList.shift();
                    if (a)
                        for (var d = q("iframe", b), g = 0, f = d.length; g < f; g++) {
                            var j = d.get(g),
                                e = h.getAbs(j),
                                j = q("<div id='zTreeMask_" + g + "' class='zTreeMask' style='top:" + e[1] + "px; left:" + e[0] + "px; width:" + j.offsetWidth + "px; height:" + j.offsetHeight + "px;'></div>", b);
                            j.appendTo(body);
                            c.dragMaskList.push(j)
                        }
                }
            },
            view: {
                addEditBtn: function(b, a) {
                    if (!(a.editNameFlag || q(a, d.id.EDIT, b).length > 0) && h.apply(b.edit.showRenameBtn, [b.treeId,
                            a
                        ], b.edit.showRenameBtn)) {
                        var c = q(a, d.id.A, b),
                            m = "<span class='" + d.className.BUTTON + " edit' id='" + a.tId + d.id.EDIT + "' title='" + h.apply(b.edit.renameTitle, [b.treeId, a], b.edit.renameTitle) + "' treeNode" + d.id.EDIT + " style='display:none;'></span>";
                        c.append(m);
                        q(a, d.id.EDIT, b).bind("click", function() {
                            if (!h.uCanDo(b) || h.apply(b.callback.beforeEditName, [b.treeId, a], !0) == !1)
                                return !1;
                            f.editNode(b, a);
                            return !1
                        }).show()
                    }
                },
                addRemoveBtn: function(b, a) {
                    if (!(a.editNameFlag || q(a, d.id.REMOVE, b).length > 0) && h.apply(b.edit.showRemoveBtn, [b.treeId, a], b.edit.showRemoveBtn)) {
                        var c = q(a, d.id.A, b),
                            m = "<span class='" + d.className.BUTTON + " remove' id='" + a.tId + d.id.REMOVE + "' title='" + h.apply(b.edit.removeTitle, [b.treeId, a], b.edit.removeTitle) + "' treeNode" + d.id.REMOVE + " style='display:none;'></span>";
                        c.append(m);
                        q(a, d.id.REMOVE, b).bind("click", function() {
                            if (!h.uCanDo(b) || h.apply(b.callback.beforeRemove, [b.treeId, a], !0) == !1)
                                return !1;
                            f.removeNode(b, a);
                            b.treeObj.trigger(d.event.REMOVE, [b.treeId, a]);
                            return !1
                        }).bind("mousedown", function() {
                            return !0
                        }).show()
                    }
                },
                addHoverDom: function(b, a) {
                    if (o.getRoot(b).showHoverDom)
                        a.isHover = !0,
                        b.edit.enable && (f.addEditBtn(b, a),
                            f.addRemoveBtn(b, a)),
                        h.apply(b.view.addHoverDom, [b.treeId, a])
                },
                cancelCurEditNode: function(b, a) {
                    var c = o.getRoot(b),
                        m = b.data.key.name,
                        g = c.curEditNode;
                    if (g) {
                        var k = c.curEditInput,
                            j = a ? a : k.val(),
                            e = !!a;
                        if (h.apply(b.callback.beforeRename, [b.treeId, g, j, e], !0) === !1)
                            return !1;
                        else
                            g[m] = j ? j : k.val(),
                            b.treeObj.trigger(d.event.RENAME, [b.treeId, g, e]);
                        q(g, d.id.A, b).removeClass(d.node.CURSELECTED_EDIT);
                        k.unbind();
                        f.setNodeName(b,
                            g);
                        g.editNameFlag = !1;
                        c.curEditNode = null;
                        c.curEditInput = null;
                        f.selectNode(b, g, !1)
                    }
                    return c.noSelection = !0
                },
                editNode: function(b, a) {
                    var c = o.getRoot(b);
                    f.editNodeBlur = !1;
                    if (o.isSelectedNode(b, a) && c.curEditNode == a && a.editNameFlag)
                        setTimeout(function() {
                            h.inputFocus(c.curEditInput)
                        }, 0);
                    else {
                        var m = b.data.key.name;
                        a.editNameFlag = !0;
                        f.removeTreeDom(b, a);
                        f.cancelCurEditNode(b);
                        f.selectNode(b, a, !1);
                        q(a, d.id.SPAN, b).html("<input type=text class='rename' id='" + a.tId + d.id.INPUT + "' treeNode" + d.id.INPUT + " >");
                        var g =
                            q(a, d.id.INPUT, b);
                        g.attr("value", a[m]);
                        b.edit.editNameSelectAll ? h.inputSelect(g) : h.inputFocus(g);
                        g.bind("blur", function() {
                            f.editNodeBlur || f.cancelCurEditNode(b)
                        }).bind("keydown", function(c) {
                            c.keyCode == "13" ? (f.editNodeBlur = !0,
                                f.cancelCurEditNode(b)) : c.keyCode == "27" && f.cancelCurEditNode(b, a[m])
                        }).bind("click", function() {
                            return !1
                        }).bind("dblclick", function() {
                            return !1
                        });
                        q(a, d.id.A, b).addClass(d.node.CURSELECTED_EDIT);
                        c.curEditInput = g;
                        c.noSelection = !1;
                        c.curEditNode = a
                    }
                },
                moveNode: function(b, a, c, m, g, k) {
                    var j =
                        o.getRoot(b),
                        e = b.data.key.children;
                    if (a != c && (!b.data.keep.leaf || !a || a.isParent || m != d.move.TYPE_INNER)) {
                        var h = c.parentTId ? c.getParentNode() : j,
                            p = a === null || a == j;
                        p && a === null && (a = j);
                        if (p)
                            m = d.move.TYPE_INNER;
                        j = a.parentTId ? a.getParentNode() : j;
                        if (m != d.move.TYPE_PREV && m != d.move.TYPE_NEXT)
                            m = d.move.TYPE_INNER;
                        if (m == d.move.TYPE_INNER)
                            if (p)
                                c.parentTId = null;
                            else {
                                if (!a.isParent)
                                    a.isParent = !0,
                                    a.open = !!a.open,
                                    f.setNodeLineIcos(b, a);
                                c.parentTId = a.tId
                            }
                        var n;
                        p ? n = p = b.treeObj : (!k && m == d.move.TYPE_INNER ? f.expandCollapseNode(b,
                                a, !0, !1) : k || f.expandCollapseNode(b, a.getParentNode(), !0, !1),
                            p = q(a, b),
                            n = q(a, d.id.UL, b),
                            p.get(0) && !n.get(0) && (n = [],
                                f.makeUlHtml(b, a, n, ""),
                                p.append(n.join(""))),
                            n = q(a, d.id.UL, b));
                        var l = q(c, b);
                        l.get(0) ? p.get(0) || l.remove() : l = f.appendNodes(b, c.level, [c], null, !1, !0).join("");
                        n.get(0) && m == d.move.TYPE_INNER ? n.append(l) : p.get(0) && m == d.move.TYPE_PREV ? p.before(l) : p.get(0) && m == d.move.TYPE_NEXT && p.after(l);
                        var t = -1,
                            C = 0,
                            y = null,
                            p = null,
                            x = c.level;
                        if (c.isFirstNode) {
                            if (t = 0,
                                h[e].length > 1)
                                y = h[e][1],
                                y.isFirstNode = !0
                        } else if (c.isLastNode)
                            t =
                            h[e].length - 1,
                            y = h[e][t - 1],
                            y.isLastNode = !0;
                        else
                            for (n = 0,
                                l = h[e].length; n < l; n++)
                                if (h[e][n].tId == c.tId) {
                                    t = n;
                                    break
                                }
                        t >= 0 && h[e].splice(t, 1);
                        if (m != d.move.TYPE_INNER)
                            for (n = 0,
                                l = j[e].length; n < l; n++)
                                j[e][n].tId == a.tId && (C = n);
                        if (m == d.move.TYPE_INNER) {
                            a[e] || (a[e] = []);
                            if (a[e].length > 0)
                                p = a[e][a[e].length - 1],
                                p.isLastNode = !1;
                            a[e].splice(a[e].length, 0, c);
                            c.isLastNode = !0;
                            c.isFirstNode = a[e].length == 1
                        } else
                            a.isFirstNode && m == d.move.TYPE_PREV ? (j[e].splice(C, 0, c),
                                p = a,
                                p.isFirstNode = !1,
                                c.parentTId = a.parentTId,
                                c.isFirstNode = !0,
                                c.isLastNode = !1) : a.isLastNode && m == d.move.TYPE_NEXT ? (j[e].splice(C + 1, 0, c),
                                p = a,
                                p.isLastNode = !1,
                                c.parentTId = a.parentTId,
                                c.isFirstNode = !1,
                                c.isLastNode = !0) : (m == d.move.TYPE_PREV ? j[e].splice(C, 0, c) : j[e].splice(C + 1, 0, c),
                                c.parentTId = a.parentTId,
                                c.isFirstNode = !1,
                                c.isLastNode = !1);
                        o.fixPIdKeyValue(b, c);
                        o.setSonNodeLevel(b, c.getParentNode(), c);
                        f.setNodeLineIcos(b, c);
                        f.repairNodeLevelClass(b, c, x);
                        !b.data.keep.parent && h[e].length < 1 ? (h.isParent = !1,
                            h.open = !1,
                            a = q(h, d.id.UL, b),
                            m = q(h, d.id.SWITCH, b),
                            e = q(h, d.id.ICON,
                                b),
                            f.replaceSwitchClass(h, m, d.folder.DOCU),
                            f.replaceIcoClass(h, e, d.folder.DOCU),
                            a.css("display", "none")) : y && f.setNodeLineIcos(b, y);
                        p && f.setNodeLineIcos(b, p);
                        b.check && b.check.enable && f.repairChkClass && (f.repairChkClass(b, h),
                            f.repairParentChkClassWithSelf(b, h),
                            h != c.parent && f.repairParentChkClassWithSelf(b, c));
                        k || f.expandCollapseParentNode(b, c.getParentNode(), !0, g)
                    }
                },
                removeEditBtn: function(b, a) {
                    q(a, d.id.EDIT, b).unbind().remove()
                },
                removeRemoveBtn: function(b, a) {
                    q(a, d.id.REMOVE, b).unbind().remove()
                },
                removeTreeDom: function(b,
                    a) {
                    a.isHover = !1;
                    f.removeEditBtn(b, a);
                    f.removeRemoveBtn(b, a);
                    h.apply(b.view.removeHoverDom, [b.treeId, a])
                },
                repairNodeLevelClass: function(b, a, c) {
                    if (c !== a.level) {
                        var f = q(a, b),
                            g = q(a, d.id.A, b),
                            b = q(a, d.id.UL, b),
                            c = d.className.LEVEL + c,
                            a = d.className.LEVEL + a.level;
                        f.removeClass(c);
                        f.addClass(a);
                        g.removeClass(c);
                        g.addClass(a);
                        b.removeClass(c);
                        b.addClass(a)
                    }
                }
            },
            event: {},
            data: {
                setSonNodeLevel: function(b, a, c) {
                    if (c) {
                        var d = b.data.key.children;
                        c.level = a ? a.level + 1 : 0;
                        if (c[d])
                            for (var a = 0, g = c[d].length; a < g; a++)
                                c[d][a] &&
                                o.setSonNodeLevel(b, c, c[d][a])
                    }
                }
            }
        });
        var G = t.fn.zTree,
            h = G._z.tools,
            d = G.consts,
            f = G._z.view,
            o = G._z.data,
            q = h.$;
        o.exSetting({
            edit: {
                enable: !1,
                editNameSelectAll: !1,
                showRemoveBtn: !0,
                showRenameBtn: !0,
                removeTitle: "remove",
                renameTitle: "rename",
                drag: {
                    autoExpandTrigger: !1,
                    isCopy: !0,
                    isMove: !0,
                    prev: !0,
                    next: !0,
                    inner: !0,
                    minMoveSize: 5,
                    borderMax: 10,
                    borderMin: -5,
                    maxShowNodeNum: 5,
                    autoOpenTime: 500
                }
            },
            view: {
                addHoverDom: null,
                removeHoverDom: null
            },
            callback: {
                beforeDrag: null,
                beforeDragOpen: null,
                beforeDrop: null,
                beforeEditName: null,
                beforeRename: null,
                onDrag: null,
                onDrop: null,
                onRename: null
            }
        });
        o.addInitBind(function(b) {
            var a = b.treeObj,
                c = d.event;
            a.bind(c.RENAME, function(a, c, d, f) {
                h.apply(b.callback.onRename, [a, c, d, f])
            });
            a.bind(c.REMOVE, function(a, c, d) {
                h.apply(b.callback.onRemove, [a, c, d])
            });
            a.bind(c.DRAG, function(a, c, d, f) {
                h.apply(b.callback.onDrag, [c, d, f])
            });
            a.bind(c.DROP, function(a, c, d, f, e, o, p) {
                h.apply(b.callback.onDrop, [c, d, f, e, o, p])
            })
        });
        o.addInitUnBind(function(b) {
            var b = b.treeObj,
                a = d.event;
            b.unbind(a.RENAME);
            b.unbind(a.REMOVE);
            b.unbind(a.DRAG);
            b.unbind(a.DROP)
        });
        o.addInitCache(function() {});
        o.addInitNode(function(b, a, c) {
            if (c)
                c.isHover = !1,
                c.editNameFlag = !1
        });
        o.addInitProxy(function(b) {
            var a = b.target,
                c = o.getSetting(b.data.treeId),
                f = b.relatedTarget,
                g = "",
                k = null,
                j = "",
                e = null,
                q = null;
            if (h.eqs(b.type, "mouseover")) {
                if (q = h.getMDom(c, a, [{
                        tagName: "a",
                        attrName: "treeNode" + d.id.A
                    }]))
                    g = q.parentNode.id,
                    j = "hoverOverNode"
            } else if (h.eqs(b.type, "mouseout"))
                q = h.getMDom(c, f, [{
                    tagName: "a",
                    attrName: "treeNode" + d.id.A
                }]),
                q || (g = "remove",
                    j = "hoverOutNode");
            else if (h.eqs(b.type, "mousedown") && (q = h.getMDom(c, a, [{
                    tagName: "a",
                    attrName: "treeNode" + d.id.A
                }])))
                g = q.parentNode.id,
                j = "mousedownNode";
            if (g.length > 0)
                switch (k = o.getNodeCache(c, g),
                    j) {
                    case "mousedownNode":
                        e = F.onMousedownNode;
                        break;
                    case "hoverOverNode":
                        e = F.onHoverOverNode;
                        break;
                    case "hoverOutNode":
                        e = F.onHoverOutNode
                }
            return {
                stop: !1,
                node: k,
                nodeEventType: j,
                nodeEventCallback: e,
                treeEventType: "",
                treeEventCallback: null
            }
        });
        o.addInitRoot(function(b) {
            b = o.getRoot(b);
            b.curEditNode = null;
            b.curEditInput = null;
            b.curHoverNode =
                null;
            b.dragFlag = 0;
            b.dragNodeShowBefore = [];
            b.dragMaskList = [];
            b.showHoverDom = !0
        });
        o.addZTreeTools(function(b, a) {
            a.cancelEditName = function(a) {
                var d = o.getRoot(b),
                    g = b.data.key.name,
                    h = d.curEditNode;
                d.curEditNode && f.cancelCurEditNode(b, a ? a : h[g])
            };
            a.copyNode = function(a, m, g, k) {
                if (!m)
                    return null;
                if (a && !a.isParent && b.data.keep.leaf && g === d.move.TYPE_INNER)
                    return null;
                var j = h.clone(m);
                if (!a)
                    a = null,
                    g = d.move.TYPE_INNER;
                g == d.move.TYPE_INNER ? (m = function() {
                        f.addNodes(b, a, [j], k)
                    },
                    h.canAsync(b, a) ? f.asyncNode(b, a, k, m) :
                    m()) : (f.addNodes(b, a.parentNode, [j], k),
                    f.moveNode(b, a, j, g, !1, k));
                return j
            };
            a.editName = function(a) {
                a && a.tId && a === o.getNodeCache(b, a.tId) && (a.parentTId && f.expandCollapseParentNode(b, a.getParentNode(), !0),
                    f.editNode(b, a))
            };
            a.moveNode = function(a, m, g, k) {
                function j() {
                    f.moveNode(b, a, m, g, !1, k)
                }
                if (!m)
                    return m;
                if (a && !a.isParent && b.data.keep.leaf && g === d.move.TYPE_INNER)
                    return null;
                else if (a && (m.parentTId == a.tId && g == d.move.TYPE_INNER || q(m, b).find("#" + a.tId).length > 0))
                    return null;
                else
                    a || (a = null);
                h.canAsync(b,
                    a) && g === d.move.TYPE_INNER ? f.asyncNode(b, a, k, j) : j();
                return m
            };
            a.setEditable = function(a) {
                b.edit.enable = a;
                return this.refresh()
            }
        });
        var M = f.cancelPreSelectedNode;
        f.cancelPreSelectedNode = function(b, a) {
            for (var c = o.getRoot(b).curSelectedList, d = 0, g = c.length; d < g; d++)
                if (!a || a === c[d])
                    if (f.removeTreeDom(b, c[d]),
                        a)
                        break;
            M && M.apply(f, arguments)
        };
        var N = f.createNodes;
        f.createNodes = function(b, a, c, d) {
            N && N.apply(f, arguments);
            c && f.repairParentChkClassWithSelf && f.repairParentChkClassWithSelf(b, d)
        };
        var T = f.makeNodeUrl;
        f.makeNodeUrl = function(b, a) {
            return b.edit.enable ? null : T.apply(f, arguments)
        };
        var L = f.removeNode;
        f.removeNode = function(b, a) {
            var c = o.getRoot(b);
            if (c.curEditNode === a)
                c.curEditNode = null;
            L && L.apply(f, arguments)
        };
        var O = f.selectNode;
        f.selectNode = function(b, a, c) {
            var d = o.getRoot(b);
            if (o.isSelectedNode(b, a) && d.curEditNode == a && a.editNameFlag)
                return !1;
            O && O.apply(f, arguments);
            f.addHoverDom(b, a);
            return !0
        };
        var P = h.uCanDo;
        h.uCanDo = function(b, a) {
            var c = o.getRoot(b);
            return a && (h.eqs(a.type, "mouseover") || h.eqs(a.type,
                "mouseout") || h.eqs(a.type, "mousedown") || h.eqs(a.type, "mouseup")) ? !0 : !c.curEditNode && (P ? P.apply(f, arguments) : !0)
        }
    })(jQuery);

    /*
     * JQuery zTree exHideNodes 3.5.13-beta.8
     */
    (function(g) {
        g.extend(!0, g.fn.zTree._z, {
            view: {
                clearOldFirstNode: function(c, a) {
                    for (var b = a.getNextNode(); b;) {
                        if (b.isFirstNode) {
                            b.isFirstNode = !1;
                            f.setNodeLineIcos(c, b);
                            break
                        }
                        if (b.isLastNode)
                            break;
                        b = b.getNextNode()
                    }
                },
                clearOldLastNode: function(c, a) {
                    for (var b = a.getPreNode(); b;) {
                        if (b.isLastNode) {
                            b.isLastNode = !1;
                            f.setNodeLineIcos(c, b);
                            break
                        }
                        if (b.isFirstNode)
                            break;
                        b = b.getPreNode()
                    }
                },
                makeDOMNodeMainBefore: function(c, a, b) {
                    c.push("<li ", b.isHidden ? "style='display:none;' " : "", "id='", b.tId, "' class='", l.className.LEVEL,
                        b.level, "' tabindex='0' hidefocus='true' treenode>")
                },
                showNode: function(c, a) {
                    a.isHidden = !1;
                    e.initShowForExCheck(c, a);
                    j(a, c).show()
                },
                showNodes: function(c, a, b) {
                    if (a && a.length != 0) {
                        var d = {},
                            i, k;
                        for (i = 0,
                            k = a.length; i < k; i++) {
                            var h = a[i];
                            if (!d[h.parentTId]) {
                                var g = h.getParentNode();
                                d[h.parentTId] = g === null ? e.getRoot(c) : h.getParentNode()
                            }
                            f.showNode(c, h, b)
                        }
                        for (var j in d)
                            a = d[j][c.data.key.children],
                            f.setFirstNodeForShow(c, a),
                            f.setLastNodeForShow(c, a)
                    }
                },
                hideNode: function(c, a) {
                    a.isHidden = !0;
                    a.isFirstNode = !1;
                    a.isLastNode = !1;
                    e.initHideForExCheck(c, a);
                    f.cancelPreSelectedNode(c, a);
                    j(a, c).hide()
                },
                hideNodes: function(c, a, b) {
                    if (a && a.length != 0) {
                        var d = {},
                            i, k;
                        for (i = 0,
                            k = a.length; i < k; i++) {
                            var h = a[i];
                            if ((h.isFirstNode || h.isLastNode) && !d[h.parentTId]) {
                                var g = h.getParentNode();
                                d[h.parentTId] = g === null ? e.getRoot(c) : h.getParentNode()
                            }
                            f.hideNode(c, h, b)
                        }
                        for (var j in d)
                            a = d[j][c.data.key.children],
                            f.setFirstNodeForHide(c, a),
                            f.setLastNodeForHide(c, a)
                    }
                },
                setFirstNode: function(c, a) {
                    var b = c.data.key.children,
                        d = a[b].length;
                    d > 0 && !a[b][0].isHidden ?
                        a[b][0].isFirstNode = !0 : d > 0 && f.setFirstNodeForHide(c, a[b])
                },
                setLastNode: function(c, a) {
                    var b = c.data.key.children,
                        d = a[b].length;
                    d > 0 && !a[b][0].isHidden ? a[b][d - 1].isLastNode = !0 : d > 0 && f.setLastNodeForHide(c, a[b])
                },
                setFirstNodeForHide: function(c, a) {
                    var b, d, i;
                    for (d = 0,
                        i = a.length; d < i; d++) {
                        b = a[d];
                        if (b.isFirstNode)
                            break;
                        if (!b.isHidden && !b.isFirstNode) {
                            b.isFirstNode = !0;
                            f.setNodeLineIcos(c, b);
                            break
                        } else
                            b = null
                    }
                    return b
                },
                setFirstNodeForShow: function(c, a) {
                    var b, d, i, e, h;
                    for (d = 0,
                        i = a.length; d < i; d++)
                        if (b = a[d], !e && !b.isHidden &&
                            b.isFirstNode) {
                            e = b;
                            break
                        } else if (!e && !b.isHidden && !b.isFirstNode)
                        b.isFirstNode = !0,
                        e = b,
                        f.setNodeLineIcos(c, b);
                    else if (e && b.isFirstNode) {
                        b.isFirstNode = !1;
                        h = b;
                        f.setNodeLineIcos(c, b);
                        break
                    }
                    return {
                        "new": e,
                        old: h
                    }
                },
                setLastNodeForHide: function(c, a) {
                    var b, d;
                    for (d = a.length - 1; d >= 0; d--) {
                        b = a[d];
                        if (b.isLastNode)
                            break;
                        if (!b.isHidden && !b.isLastNode) {
                            b.isLastNode = !0;
                            f.setNodeLineIcos(c, b);
                            break
                        } else
                            b = null
                    }
                    return b
                },
                setLastNodeForShow: function(c, a) {
                    var b, d, e, g;
                    for (d = a.length - 1; d >= 0; d--)
                        if (b = a[d], !e && !b.isHidden &&
                            b.isLastNode) {
                            e = b;
                            break
                        } else if (!e && !b.isHidden && !b.isLastNode)
                        b.isLastNode = !0,
                        e = b,
                        f.setNodeLineIcos(c, b);
                    else if (e && b.isLastNode) {
                        b.isLastNode = !1;
                        g = b;
                        f.setNodeLineIcos(c, b);
                        break
                    }
                    return {
                        "new": e,
                        old: g
                    }
                }
            },
            data: {
                initHideForExCheck: function(c, a) {
                    if (a.isHidden && c.check && c.check.enable) {
                        if (typeof a._nocheck == "undefined")
                            a._nocheck = !!a.nocheck,
                            a.nocheck = !0;
                        a.check_Child_State = -1;
                        f.repairParentChkClassWithSelf && f.repairParentChkClassWithSelf(c, a)
                    }
                },
                initShowForExCheck: function(c, a) {
                    if (!a.isHidden && c.check &&
                        c.check.enable) {
                        if (typeof a._nocheck != "undefined")
                            a.nocheck = a._nocheck,
                            delete a._nocheck;
                        if (f.setChkClass) {
                            var b = j(a, l.id.CHECK, c);
                            f.setChkClass(c, b, a)
                        }
                        f.repairParentChkClassWithSelf && f.repairParentChkClassWithSelf(c, a)
                    }
                }
            }
        });
        var g = g.fn.zTree,
            m = g._z.tools,
            l = g.consts,
            f = g._z.view,
            e = g._z.data,
            j = m.$;
        e.addInitNode(function(c, a, b) {
            if (typeof b.isHidden == "string")
                b.isHidden = m.eqs(b.isHidden, "true");
            b.isHidden = !!b.isHidden;
            e.initHideForExCheck(c, b)
        });
        e.addBeforeA(function() {});
        e.addZTreeTools(function(c, a) {
            a.showNodes =
                function(a, b) {
                    f.showNodes(c, a, b)
                };
            a.showNode = function(a, b) {
                a && f.showNodes(c, [a], b)
            };
            a.hideNodes = function(a, b) {
                f.hideNodes(c, a, b)
            };
            a.hideNode = function(a, b) {
                a && f.hideNodes(c, [a], b)
            };
            var b = a.checkNode;
            if (b)
                a.checkNode = function(c, e, f, h) {
                    (!c || !c.isHidden) && b.apply(a, arguments)
                }
        });
        var n = e.initNode;
        e.tmpHideParent = -1;
        e.initNode = function(c, a, b, d, i, g, h) {
            if (e.tmpHideParent !== d) {
                e.tmpHideParent = d == null ? -1 : d;
                var j = (d ? d : e.getRoot(c))[c.data.key.children];
                e.tmpHideFirstNode = f.setFirstNodeForHide(c, j);
                e.tmpHideLastNode =
                    f.setLastNodeForHide(c, j);
                f.setNodeLineIcos(c, e.tmpHideFirstNode);
                f.setNodeLineIcos(c, e.tmpHideLastNode)
            }
            i = e.tmpHideFirstNode === b;
            g = e.tmpHideLastNode === b;
            n && n.apply(e, arguments);
            g && f.clearOldLastNode(c, b)
        };
        var o = e.makeChkFlag;
        if (o)
            e.makeChkFlag = function(c, a) {
                (!a || !a.isHidden) && o.apply(e, arguments)
            };
        var p = e.getTreeCheckedNodes;
        if (p)
            e.getTreeCheckedNodes = function(c, a, b, d) {
                if (a && a.length > 0) {
                    var f = a[0].getParentNode();
                    if (f && f.isHidden)
                        return []
                }
                return p.apply(e, arguments)
            };
        var q = e.getTreeChangeCheckedNodes;
        if (q)
            e.getTreeChangeCheckedNodes = function(c, a, b) {
                if (a && a.length > 0) {
                    var d = a[0].getParentNode();
                    if (d && d.isHidden)
                        return []
                }
                return q.apply(e, arguments)
            };
        var r = f.expandCollapseSonNode;
        if (r)
            f.expandCollapseSonNode = function(c, a, b, d, e) {
                (!a || !a.isHidden) && r.apply(f, arguments)
            };
        var s = f.setSonNodeCheckBox;
        if (s)
            f.setSonNodeCheckBox = function(c, a, b, d) {
                (!a || !a.isHidden) && s.apply(f, arguments)
            };
        var t = f.repairParentChkClassWithSelf;
        if (t)
            f.repairParentChkClassWithSelf = function(c, a) {
                (!a || !a.isHidden) && t.apply(f, arguments)
            }
    })(jQuery);
});;
// select2
define("jquery/plugins/select2/select2", [], function(a) {
    var d = a("jquery");
    ! function(a) {
        "undefined" == typeof a.fn.each2 && a.fn.extend({
            each2: function(b) {
                for (var c = a([0]), d = -1, e = this.length; ++d < e && (c.context = c[0] = this[d]) && b.call(c[0], d, c) !== !1;)
                ;
                return this
            }
        })
    }
    (d),
    function(a, b) {
        "use strict";

        function m(a, b) {
            for (var c = 0, d = b.length; d > c; c += 1)
                if (o(a, b[c]))
                    return c;
            return -1
        }

        function n() {
            var b = a(l);
            b.appendTo("body");
            var c = {
                width: b.width() - b[0].clientWidth,
                height: b.height() - b[0].clientHeight
            };
            return b.remove(),
                c
        }

        function o(a, c) {
            return a === c ? !0 : a === b || c === b ? !1 : null === a || null === c ? !1 : a.constructor === String ? a + "" == c + "" : c.constructor === String ? c + "" == a + "" : !1
        }

        function p(b, c) {
            var d, e, f;
            if (null === b || b.length < 1)
                return [];
            for (d = b.split(c),
                e = 0,
                f = d.length; f > e; e += 1)
                d[e] = a.trim(d[e]);
            return d
        }

        function q(a) {
            return a.outerWidth(!1) - a.width()
        }

        function r(c) {
            var d = "keyup-change-value";
            c.on("keydown", function() {
                    a.data(c, d) === b && a.data(c, d, c.val())
                }),
                c.on("keyup", function() {
                    var e = a.data(c, d);
                    e !== b && c.val() !== e && (a.removeData(c, d),
                        c.trigger("keyup-change"))
                })
        }

        function s(c) {
            c.on("mousemove", function(c) {
                var d = i;
                (d === b || d.x !== c.pageX || d.y !== c.pageY) && a(c.target).trigger("mousemove-filtered", c)
            })
        }

        function t(a, c, d) {
            d = d || b;
            var e;
            return function() {
                var b = arguments;
                window.clearTimeout(e),
                    e = window.setTimeout(function() {
                        c.apply(d, b)
                    }, a)
            }
        }

        function u(a) {
            var c, b = !1;
            return function() {
                return b === !1 && (c = a(),
                        b = !0),
                    c
            }
        }

        function v(a, b) {
            var c = t(a, function(a) {
                b.trigger("scroll-debounced", a)
            });
            b.on("scroll", function(a) {
                m(a.target, b.get()) >= 0 && c(a)
            })
        }

        function w(a) {
            a[0] !== document.activeElement && window.setTimeout(function() {
                var d, b = a[0],
                    c = a.val().length;
                a.focus(),
                    a.is(":visible") && b === document.activeElement && (b.setSelectionRange ? b.setSelectionRange(c, c) : b.createTextRange && (d = b.createTextRange(),
                        d.collapse(!1),
                        d.select()))
            }, 0)
        }

        function x(b) {
            b = a(b)[0];
            var c = 0,
                d = 0;
            if ("selectionStart" in b)
                c = b.selectionStart,
                d = b.selectionEnd - c;
            else if ("selection" in document) {
                b.focus();
                var e = document.selection.createRange();
                d = document.selection.createRange().text.length,
                    e.moveStart("character", -b.value.length),
                    c = e.text.length - d
            }
            return {
                offset: c,
                length: d
            }
        }

        function y(a) {
            a.preventDefault(),
                a.stopPropagation()
        }

        function z(a) {
            a.preventDefault(),
                a.stopImmediatePropagation()
        }

        function A(b) {
            if (!h) {
                var c = b[0].currentStyle || window.getComputedStyle(b[0], null);
                h = a(document.createElement("div")).css({
                        position: "absolute",
                        left: "-10000px",
                        top: "-10000px",
                        display: "none",
                        fontSize: c.fontSize,
                        fontFamily: c.fontFamily,
                        fontStyle: c.fontStyle,
                        fontWeight: c.fontWeight,
                        letterSpacing: c.letterSpacing,
                        textTransform: c.textTransform,
                        whiteSpace: "nowrap"
                    }),
                    h.attr("class", "select2-sizer"),
                    a("body").append(h)
            }
            return h.text(b.val()),
                h.width()
        }

        function B(b, c, d) {
            var e, g, f = [];
            e = b.attr("class"),
                e && (e = "" + e,
                    a(e.split(" ")).each2(function() {
                        0 === this.indexOf("select2-") && f.push(this)
                    })),
                e = c.attr("class"),
                e && (e = "" + e,
                    a(e.split(" ")).each2(function() {
                        0 !== this.indexOf("select2-") && (g = d(this),
                            g && f.push(this))
                    })),
                b.attr("class", f.join(" "))
        }

        function C(a, b, c, d) {
            var e = a.toUpperCase().indexOf(b.toUpperCase()),
                f = b.length;
            return 0 > e ? (c.push(d(a)),
                void 0) : (c.push(d(a.substring(0, e))),
                c.push("<span class='select2-match'>"),
                c.push(d(a.substring(e, e + f))),
                c.push("</span>"),
                c.push(d(a.substring(e + f, a.length))),
                void 0)
        }

        function D(c) {
            var d, e = 0,
                f = null,
                g = c.quietMillis || 100,
                h = c.url,
                i = this;
            return function(j) {
                window.clearTimeout(d),
                    d = window.setTimeout(function() {
                        e += 1;
                        var d = e,
                            g = c.data,
                            k = h,
                            l = c.transport || a.fn.select2.ajaxDefaults.transport,
                            m = {
                                type: c.type || "GET",
                                cache: c.cache || !1,
                                jsonpCallback: c.jsonpCallback || b,
                                dataType: c.dataType || "json"
                            },
                            n = a.extend({}, a.fn.select2.ajaxDefaults.params, m);
                        g = g ? g.call(i, j.term, j.page, j.context) : null,
                            k = "function" == typeof k ? k.call(i, j.term, j.page, j.context) : k,
                            null !== f && f.abort(),
                            c.params && (a.isFunction(c.params) ? a.extend(n, c.params.call(i)) : a.extend(n, c.params)),
                            a.extend(n, {
                                url: k,
                                dataType: c.dataType,
                                data: g,
                                success: function(a) {
                                    if (!(e > d)) {
                                        var b = c.results(a, j.page);
                                        j.callback(b)
                                    }
                                }
                            }),
                            f = l.call(i, n)
                    }, g)
            }
        }

        function E(b) {
            var d, e, c = b,
                f = function(a) {
                    return "" + a.text
                };
            a.isArray(c) && (e = c,
                    c = {
                        results: e
                    }),
                a.isFunction(c) === !1 && (e = c,
                    c = function() {
                        return e
                    }
                );
            var g = c();
            return g.text && (f = g.text,
                    a.isFunction(f) || (d = g.text,
                        f = function(a) {
                            return a[d]
                        }
                    )),
                function(b) {
                    var g, d = b.term,
                        e = {
                            results: []
                        };
                    return "" === d ? (b.callback(c()),
                        void 0) : (g = function(c, e) {
                            var h, i;
                            if (c = c[0],
                                c.children) {
                                h = {};
                                for (i in c)
                                    c.hasOwnProperty(i) && (h[i] = c[i]);
                                h.children = [],
                                    a(c.children).each2(function(a, b) {
                                        g(b, h.children)
                                    }), (h.children.length || b.matcher(d, f(h), c)) && e.push(h)
                            } else
                                b.matcher(d, f(c), c) && e.push(c)
                        },
                        a(c().results).each2(function(a, b) {
                            g(b, e.results)
                        }),
                        b.callback(e),
                        void 0)
                }
        }

        function F(c) {
            var d = a.isFunction(c);
            return function(e) {
                var f = e.term,
                    g = {
                        results: []
                    };
                a(d ? c() : c).each(function() {
                        var a = this.text !== b,
                            c = a ? this.text : this;
                        ("" === f || e.matcher(f, c)) && g.results.push(a ? this : {
                            id: this,
                            text: this
                        })
                    }),
                    e.callback(g)
            }
        }

        function G(b) {
            if (a.isFunction(b))
                return !0;
            if (!b)
                return !1;
            throw new Error("formatterName must be a function or a falsy value")
        }

        function H(b) {
            return a.isFunction(b) ? b() : b
        }

        function I(b) {
            var c = 0;
            return a.each(b, function(a, b) {
                    b.children ? c += I(b.children) : c++
                }),
                c
        }

        function J(a, c, d, e) {
            var h, i, j, k, l, f = a,
                g = !1;
            if (!e.createSearchChoice || !e.tokenSeparators || e.tokenSeparators.length < 1)
                return b;
            for (;;) {
                for (i = -1,
                    j = 0,
                    k = e.tokenSeparators.length; k > j && (l = e.tokenSeparators[j],
                        i = a.indexOf(l), !(i >= 0)); j++)
                ;
                if (0 > i)
                    break;
                if (h = a.substring(0, i),
                    a = a.substring(i + l.length),
                    h.length > 0 && (h = e.createSearchChoice(h, c),
                        h !== b && null !== h && e.id(h) !== b && null !== e.id(h))) {
                    for (g = !1,
                        j = 0,
                        k = c.length; k > j; j++)
                        if (o(e.id(h), e.id(c[j]))) {
                            g = !0;
                            break
                        }
                    g || d(h)
                }
            }
            return f !== a ? a : void 0
        }

        function K(b, c) {
            var d = function() {};
            return d.prototype = new b,
                d.prototype.constructor = d,
                d.prototype.parent = b.prototype,
                d.prototype = a.extend(d.prototype, c),
                d
        }
        if (window.Select2 === b) {
            var c, d, e, f, g, h, j, k, i = {
                    x: 0,
                    y: 0
                },
                c = {
                    TAB: 9,
                    ENTER: 13,
                    ESC: 27,
                    SPACE: 32,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    HOME: 36,
                    END: 35,
                    BACKSPACE: 8,
                    DELETE: 46,
                    isArrow: function(a) {
                        switch (a = a.which ? a.which : a) {
                            case c.LEFT:
                            case c.RIGHT:
                            case c.UP:
                            case c.DOWN:
                                return !0
                        }
                        return !1
                    },
                    isControl: function(a) {
                        var b = a.which;
                        switch (b) {
                            case c.SHIFT:
                            case c.CTRL:
                            case c.ALT:
                                return !0
                        }
                        return a.metaKey ? !0 : !1
                    },
                    isFunctionKey: function(a) {
                        return a = a.which ? a.which : a,
                            a >= 112 && 123 >= a
                    }
                },
                l = "<div class='select2-measure-scrollbar'></div>";
            j = a(document),
                g = function() {
                    var a = 1;
                    return function() {
                        return a++
                    }
                }
                (),
                j.on("mousemove", function(a) {
                    i.x = a.pageX,
                        i.y = a.pageY
                }),
                d = K(Object, {
                    bind: function(a) {
                        var b = this;
                        return function() {
                            a.apply(b, arguments)
                        }
                    },
                    init: function(c) {
                        var d, e, h, i, f = ".select2-results";
                        this.opts = c = this.prepareOpts(c),
                            this.id = c.id,
                            c.element.data("select2") !== b && null !== c.element.data("select2") && this.destroy(),
                            this.container = this.createContainer(),
                            this.containerId = "s2id_" + (c.element.attr("id") || "autogen" + g()),
                            this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"),
                            this.container.attr("id", this.containerId),
                            this.body = u(function() {
                                return c.element.closest("body")
                            }),
                            B(this.container, this.opts.element, this.opts.adaptContainerCssClass),
                            this.container.css(H(c.containerCss)),
                            this.container.addClass(H(c.containerCssClass)),
                            this.elementTabIndex = this.opts.element.attr("tabindex"),
                            this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container),
                            this.container.data("select2", this),
                            this.dropdown = this.container.find(".select2-drop"),
                            this.dropdown.addClass(H(c.dropdownCssClass)),
                            this.dropdown.data("select2", this),
                            this.results = d = this.container.find(f),
                            this.search = e = this.container.find("input.select2-input"),
                            this.resultsPage = 0,
                            this.context = null,
                            this.initContainer(),
                            s(this.results),
                            this.dropdown.on("mousemove-filtered touchstart touchmove touchend", f, this.bind(this.highlightUnderEvent)),
                            v(80, this.results),
                            this.dropdown.on("scroll-debounced", f, this.bind(this.loadMoreIfNeeded)),
                            a(this.container).on("change", ".select2-input", function(a) {
                                a.stopPropagation()
                            }),
                            a(this.dropdown).on("change", ".select2-input", function(a) {
                                a.stopPropagation()
                            }),
                            a.fn.mousewheel && d.mousewheel(function(a, b, c, e) {
                                var f = d.scrollTop();
                                e > 0 && 0 >= f - e ? (d.scrollTop(0),
                                    y(a)) : 0 > e && d.get(0).scrollHeight - d.scrollTop() + e <= d.height() && (d.scrollTop(d.get(0).scrollHeight - d.height()),
                                    y(a))
                            }),
                            r(e),
                            e.on("keyup-change input paste", this.bind(this.updateResults)),
                            e.on("focus", function() {
                                e.addClass("select2-focused")
                            }),
                            e.on("blur", function() {
                                e.removeClass("select2-focused")
                            }),
                            this.dropdown.on("mouseup", f, this.bind(function(b) {
                                a(b.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(b),
                                    this.selectHighlighted(b))
                            })),
                            this.dropdown.on("click mouseup mousedown", function(a) {
                                a.stopPropagation()
                            }),
                            a.isFunction(this.opts.initSelection) && (this.initSelection(),
                                this.monitorSource()),
                            null !== c.maximumInputLength && this.search.attr("maxlength", c.maximumInputLength);
                        var h = c.element.prop("disabled");
                        h === b && (h = !1),
                            this.enable(!h);
                        var i = c.element.prop("readonly");
                        i === b && (i = !1),
                            this.readonly(i),
                            k = k || n(),
                            this.autofocus = c.element.prop("autofocus"),
                            c.element.prop("autofocus", !1),
                            this.autofocus && this.focus()
                    },
                    destroy: function() {
                        var a = this.opts.element.data("select2");
                        this.propertyObserver && (delete this.propertyObserver,
                                this.propertyObserver = null),
                            a !== b && (a.container.remove(),
                                a.dropdown.remove(),
                                a.opts.element.removeClass("select2-offscreen").removeData("select2").off(".select2").attr({
                                    tabindex: this.elementTabIndex
                                }).prop("autofocus", this.autofocus || !1).show())
                    },
                    optionToData: function(a) {
                        return a.is("option") ? {
                            id: a.prop("value"),
                            text: a.text(),
                            element: a.get(),
                            css: a.attr("class"),
                            disabled: a.prop("disabled"),
                            locked: o(a.attr("locked"), "locked")
                        } : a.is("optgroup") ? {
                            text: a.attr("label"),
                            children: [],
                            element: a.get(),
                            css: a.attr("class")
                        } : void 0
                    },
                    prepareOpts: function(c) {
                        var d, e, f, g, h = this;
                        if (d = c.element,
                            "select" === d.get(0).tagName.toLowerCase() && (this.select = e = c.element),
                            e && a.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                                if (this in c)
                                    throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                            }),
                            c = a.extend({}, {
                                populateResults: function(d, e, f) {
                                    var g, l = this.opts.id;
                                    g = function(d, e, i) {
                                            var j, k, m, n, o, p, q, r, s, t;
                                            for (d = c.sortResults(d, e, f),
                                                j = 0,
                                                k = d.length; k > j; j += 1)
                                                m = d[j],
                                                o = m.disabled === !0,
                                                n = !o && l(m) !== b,
                                                p = m.children && m.children.length > 0,
                                                q = a("<li></li>"),
                                                q.addClass("select2-results-dept-" + i),
                                                q.addClass("select2-result"),
                                                q.addClass(n ? "select2-result-selectable" : "select2-result-unselectable"),
                                                o && q.addClass("select2-disabled"),
                                                p && q.addClass("select2-result-with-children"),
                                                q.addClass(h.opts.formatResultCssClass(m)),
                                                r = a(document.createElement("div")),
                                                r.addClass("select2-result-label"),
                                                t = c.formatResult(m, r, f, h.opts.escapeMarkup),
                                                t !== b && r.html(t),
                                                q.append(r),
                                                p && (s = a("<ul></ul>"),
                                                    s.addClass("select2-result-sub"),
                                                    g(m.children, s, i + 1),
                                                    q.append(s)),
                                                q.data("select2-data", m),
                                                e.append(q)
                                        },
                                        g(e, d, 0)
                                }
                            }, a.fn.select2.defaults, c),
                            "function" != typeof c.id && (f = c.id,
                                c.id = function(a) {
                                    return a[f]
                                }
                            ),
                            a.isArray(c.element.data("select2Tags"))) {
                            if ("tags" in c)
                                throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + c.element.attr("id");
                            c.tags = c.element.data("select2Tags")
                        }
                        if (e ? (c.query = this.bind(function(c) {
                                    var g, i, j, e = {
                                            results: [],
                                            more: !1
                                        },
                                        f = c.term;
                                    j = function(a, b) {
                                            var d;
                                            a.is("option") ? c.matcher(f, a.text(), a) && b.push(h.optionToData(a)) : a.is("optgroup") && (d = h.optionToData(a),
                                                a.children().each2(function(a, b) {
                                                    j(b, d.children)
                                                }),
                                                d.children.length > 0 && b.push(d))
                                        },
                                        g = d.children(),
                                        this.getPlaceholder() !== b && g.length > 0 && (i = g[0],
                                            "" === a(i).text() && (g = g.not(i))),
                                        g.each2(function(a, b) {
                                            j(b, e.results)
                                        }),
                                        c.callback(e)
                                }),
                                c.id = function(a) {
                                    return a.id
                                },
                                c.formatResultCssClass = function(a) {
                                    return a.css
                                }
                            ) : "query" in c || ("ajax" in c ? (g = c.element.data("ajax-url"),
                                g && g.length > 0 && (c.ajax.url = g),
                                c.query = D.call(c.element, c.ajax)) : "data" in c ? c.query = E(c.data) : "tags" in c && (c.query = F(c.tags),
                                c.createSearchChoice === b && (c.createSearchChoice = function(a) {
                                    return {
                                        id: a,
                                        text: a
                                    }
                                }),
                                c.initSelection === b && (c.initSelection = function(b, d) {
                                    var e = [];
                                    a(p(b.val(), c.separator)).each(function() {
                                            var b = this,
                                                d = this,
                                                f = c.tags;
                                            a.isFunction(f) && (f = f()),
                                                a(f).each(function() {
                                                    return o(this.id, b) ? (d = this.text, !1) : void 0
                                                }),
                                                e.push({
                                                    id: b,
                                                    text: d
                                                })
                                        }),
                                        d(e)
                                }))),
                            "function" != typeof c.query)
                            throw "query function not defined for Select2 " + c.element.attr("id");
                        return c
                    },
                    monitorSource: function() {
                        var c, a = this.opts.element;
                        a.on("change.select2", this.bind(function() {
                                this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                            })),
                            c = this.bind(function() {
                                var d, f = a.prop("disabled");
                                f === b && (f = !1),
                                    this.enable(!f);
                                var d = a.prop("readonly");
                                d === b && (d = !1),
                                    this.readonly(d),
                                    B(this.container, this.opts.element, this.opts.adaptContainerCssClass),
                                    this.container.addClass(H(this.opts.containerCssClass)),
                                    B(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass),
                                    this.dropdown.addClass(H(this.opts.dropdownCssClass))
                            }),
                            a.on("propertychange.select2 DOMAttrModified.select2", c),
                            this.mutationCallback === b && (this.mutationCallback = function(a) {
                                a.forEach(c)
                            }),
                            "undefined" != typeof WebKitMutationObserver && (this.propertyObserver && (delete this.propertyObserver,
                                    this.propertyObserver = null),
                                this.propertyObserver = new WebKitMutationObserver(this.mutationCallback),
                                this.propertyObserver.observe(a.get(0), {
                                    attributes: !0,
                                    subtree: !1
                                }))
                    },
                    triggerSelect: function(b) {
                        var c = a.Event("select2-selecting", {
                            val: this.id(b),
                            object: b
                        });
                        return this.opts.element.trigger(c), !c.isDefaultPrevented()
                    },
                    triggerChange: function(b) {
                        b = b || {},
                            b = a.extend({}, b, {
                                type: "change",
                                val: this.val()
                            }),
                            this.opts.element.data("select2-change-triggered", !0),
                            this.opts.element.trigger(b),
                            this.opts.element.data("select2-change-triggered", !1),
                            this.opts.element.click(),
                            this.opts.blurOnChange && this.opts.element.blur()
                    },
                    isInterfaceEnabled: function() {
                        return this.enabledInterface === !0
                    },
                    enableInterface: function() {
                        var a = this._enabled && !this._readonly,
                            b = !a;
                        return a === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", b),
                            this.close(),
                            this.enabledInterface = a, !0)
                    },
                    enable: function(a) {
                        return a === b && (a = !0),
                            this._enabled === a ? !1 : (this._enabled = a,
                                this.opts.element.prop("disabled", !a),
                                this.enableInterface(), !0)
                    },
                    readonly: function(a) {
                        return a === b && (a = !1),
                            this._readonly === a ? !1 : (this._readonly = a,
                                this.opts.element.prop("readonly", a),
                                this.enableInterface(), !0)
                    },
                    opened: function() {
                        return this.container.hasClass("select2-dropdown-open")
                    },
                    positionDropdown: function() {
                        var q, r, s, t, b = this.dropdown,
                            c = this.container.offset(),
                            d = this.container.outerHeight(!1),
                            e = this.container.outerWidth(!1),
                            f = b.outerHeight(!1),
                            g = a(window).scrollLeft() + a(window).width(),
                            h = a(window).scrollTop() + a(window).height(),
                            i = c.top + d,
                            j = c.left,
                            l = h >= i + f,
                            m = c.top - f >= this.body().scrollTop(),
                            n = b.outerWidth(!1),
                            o = g >= j + n,
                            p = b.hasClass("select2-drop-above");
                        this.opts.dropdownAutoWidth ? (t = a(".select2-results", b)[0],
                                b.addClass("select2-drop-auto-width"),
                                b.css("width", ""),
                                n = b.outerWidth(!1) + (t.scrollHeight === t.clientHeight ? 0 : k.width),
                                n > e ? e = n : n = e,
                                o = g >= j + n) : this.container.removeClass("select2-drop-auto-width"),
                            "static" !== this.body().css("position") && (q = this.body().offset(),
                                i -= q.top,
                                j -= q.left),
                            p ? (r = !0, !m && l && (r = !1)) : (r = !1, !l && m && (r = !0)),
                            o || (j = c.left + e - n),
                            r ? (i = c.top - f,
                                this.container.addClass("select2-drop-above"),
                                b.addClass("select2-drop-above")) : (this.container.removeClass("select2-drop-above"),
                                b.removeClass("select2-drop-above")),
                            s = a.extend({
                                top: i,
                                left: j,
                                width: e
                            }, H(this.opts.dropdownCss)),
                            b.css(s)
                    },
                    shouldOpen: function() {
                        var b;
                        return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (b = a.Event("select2-opening"),
                            this.opts.element.trigger(b), !b.isDefaultPrevented())
                    },
                    clearDropdownAlignmentPreference: function() {
                        this.container.removeClass("select2-drop-above"),
                            this.dropdown.removeClass("select2-drop-above")
                    },
                    open: function() {
                        return this.shouldOpen() ? (this.opening(), !0) : !1
                    },
                    opening: function() {
                        function h() {
                            return {
                                width: Math.max(document.documentElement.scrollWidth, a(window).width()),
                                height: Math.max(document.documentElement.scrollHeight, a(window).height())
                            }
                        }
                        var f, b = this.containerId,
                            c = "scroll." + b,
                            d = "resize." + b,
                            e = "orientationchange." + b;
                        this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),
                            this.clearDropdownAlignmentPreference(),
                            this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()),
                            f = a("#select2-drop-mask"),
                            0 == f.length && (f = a(document.createElement("div")),
                                f.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"),
                                f.hide(),
                                f.appendTo(this.body()),
                                f.on("mousedown touchstart", function(b) {
                                    var d, c = a("#select2-drop");
                                    c.length > 0 && (d = c.data("select2"),
                                        d.opts.selectOnBlur && d.selectHighlighted({
                                            noFocus: !0
                                        }),
                                        d.close(),
                                        b.preventDefault(),
                                        b.stopPropagation())
                                })),
                            this.dropdown.prev()[0] !== f[0] && this.dropdown.before(f),
                            a("#select2-drop").removeAttr("id"),
                            this.dropdown.attr("id", "select2-drop"),
                            f.css(h()),
                            f.show(),
                            this.dropdown.show(),
                            this.positionDropdown(),
                            this.dropdown.addClass("select2-drop-active"),
                            this.ensureHighlightVisible();
                        var g = this;
                        this.container.parents().add(window).each(function() {
                            a(this).on(d + " " + c + " " + e, function() {
                                a("#select2-drop-mask").css(h()),
                                    g.positionDropdown()
                            })
                        })
                    },
                    close: function() {
                        if (this.opened()) {
                            var b = this.containerId,
                                c = "scroll." + b,
                                d = "resize." + b,
                                e = "orientationchange." + b;
                            this.container.parents().add(window).each(function() {
                                    a(this).off(c).off(d).off(e)
                                }),
                                this.clearDropdownAlignmentPreference(),
                                a("#select2-drop-mask").hide(),
                                this.dropdown.removeAttr("id"),
                                this.dropdown.hide(),
                                this.container.removeClass("select2-dropdown-open"),
                                this.results.empty(),
                                this.clearSearch(),
                                this.search.removeClass("select2-active"),
                                this.opts.element.trigger(a.Event("select2-close"))
                        }
                    },
                    clearSearch: function() {},
                    getMaximumSelectionSize: function() {
                        return H(this.opts.maximumSelectionSize)
                    },
                    ensureHighlightVisible: function() {
                        var c, d, e, f, g, h, i, b = this.results;
                        if (d = this.highlight(), !(0 > d)) {
                            if (0 == d)
                                return b.scrollTop(0),
                                    void 0;
                            c = this.findHighlightableChoices().find(".select2-result-label"),
                                e = a(c[d]),
                                f = e.offset().top + e.outerHeight(!0),
                                d === c.length - 1 && (i = b.find("li.select2-more-results"),
                                    i.length > 0 && (f = i.offset().top + i.outerHeight(!0))),
                                g = b.offset().top + b.outerHeight(!0),
                                f > g && b.scrollTop(b.scrollTop() + (f - g)),
                                h = e.offset().top - b.offset().top,
                                0 > h && "none" != e.css("display") && b.scrollTop(b.scrollTop() + h)
                        }
                    },
                    findHighlightableChoices: function() {
                        return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)")
                    },
                    moveHighlight: function(b) {
                        for (var c = this.findHighlightableChoices(), d = this.highlight(); d > -1 && d < c.length;) {
                            d += b;
                            var e = a(c[d]);
                            if (e.hasClass("select2-result-selectable") && !e.hasClass("select2-disabled") && !e.hasClass("select2-selected")) {
                                this.highlight(d);
                                break
                            }
                        }
                    },
                    highlight: function(b) {
                        var d, e, c = this.findHighlightableChoices();
                        return 0 === arguments.length ? m(c.filter(".select2-highlighted")[0], c.get()) : (b >= c.length && (b = c.length - 1),
                            0 > b && (b = 0),
                            this.results.find(".select2-highlighted").removeClass("select2-highlighted"),
                            d = a(c[b]),
                            d.addClass("select2-highlighted"),
                            this.ensureHighlightVisible(),
                            e = d.data("select2-data"),
                            e && this.opts.element.trigger({
                                type: "select2-highlight",
                                val: this.id(e),
                                choice: e
                            }),
                            void 0)
                    },
                    countSelectableResults: function() {
                        return this.findHighlightableChoices().length
                    },
                    highlightUnderEvent: function(b) {
                        var c = a(b.target).closest(".select2-result-selectable");
                        if (c.length > 0 && !c.is(".select2-highlighted")) {
                            var d = this.findHighlightableChoices();
                            this.highlight(d.index(c))
                        } else
                            0 == c.length && this.results.find(".select2-highlighted").removeClass("select2-highlighted")
                    },
                    loadMoreIfNeeded: function() {
                        var c, a = this.results,
                            b = a.find("li.select2-more-results"),
                            e = this.resultsPage + 1,
                            f = this,
                            g = this.search.val(),
                            h = this.context;
                        0 !== b.length && (c = b.offset().top - a.offset().top - a.height(),
                            c <= this.opts.loadMorePadding && (b.addClass("select2-active"),
                                this.opts.query({
                                    element: this.opts.element,
                                    term: g,
                                    page: e,
                                    context: h,
                                    matcher: this.opts.matcher,
                                    callback: this.bind(function(c) {
                                        f.opened() && (f.opts.populateResults.call(this, a, c.results, {
                                                term: g,
                                                page: e,
                                                context: h
                                            }),
                                            f.postprocessResults(c, !1, !1),
                                            c.more === !0 ? (b.detach().appendTo(a).text(f.opts.formatLoadMore(e + 1)),
                                                window.setTimeout(function() {
                                                    f.loadMoreIfNeeded()
                                                }, 10)) : b.remove(),
                                            f.positionDropdown(),
                                            f.resultsPage = e,
                                            f.context = c.context)
                                    })
                                })))
                    },
                    tokenize: function() {},
                    updateResults: function(c) {
                        function l() {
                            e.scrollTop(0),
                                d.removeClass("select2-active"),
                                h.positionDropdown()
                        }

                        function m(a) {
                            e.html(a),
                                l()
                        }
                        var g, i, d = this.search,
                            e = this.results,
                            f = this.opts,
                            h = this,
                            j = d.val(),
                            k = a.data(this.container, "select2-last-term");
                        if ((c === !0 || !k || !o(j, k)) && (a.data(this.container, "select2-last-term", j),
                                c === !0 || this.showSearchInput !== !1 && this.opened())) {
                            var n = this.getMaximumSelectionSize();
                            if (n >= 1 && (g = this.data(),
                                    a.isArray(g) && g.length >= n && G(f.formatSelectionTooBig, "formatSelectionTooBig")))
                                return m("<li class='select2-selection-limit'>" + f.formatSelectionTooBig(n) + "</li>"),
                                    void 0;
                            if (d.val().length < f.minimumInputLength)
                                return G(f.formatInputTooShort, "formatInputTooShort") ? m("<li class='select2-no-results'>" + f.formatInputTooShort(d.val(), f.minimumInputLength) + "</li>") : m(""),
                                    c && this.showSearch && this.showSearch(!0),
                                    void 0;
                            if (f.maximumInputLength && d.val().length > f.maximumInputLength)
                                return G(f.formatInputTooLong, "formatInputTooLong") ? m("<li class='select2-no-results'>" + f.formatInputTooLong(d.val(), f.maximumInputLength) + "</li>") : m(""),
                                    void 0;
                            f.formatSearching && 0 === this.findHighlightableChoices().length && m("<li class='select2-searching'>" + f.formatSearching() + "</li>"),
                                d.addClass("select2-active"),
                                i = this.tokenize(),
                                i != b && null != i && d.val(i),
                                this.resultsPage = 1,
                                f.query({
                                    element: f.element,
                                    term: d.val(),
                                    page: this.resultsPage,
                                    context: null,
                                    matcher: f.matcher,
                                    callback: this.bind(function(g) {
                                        var i;
                                        return this.opened() ? (this.context = g.context === b ? null : g.context,
                                            this.opts.createSearchChoice && "" !== d.val() && (i = this.opts.createSearchChoice.call(null, d.val(), g.results),
                                                i !== b && null !== i && h.id(i) !== b && null !== h.id(i) && 0 === a(g.results).filter(function() {
                                                    return o(h.id(this), h.id(i))
                                                }).length && g.results.unshift(i)),
                                            0 === g.results.length && G(f.formatNoMatches, "formatNoMatches") ? (m("<li class='select2-no-results'>" + f.formatNoMatches(d.val()) + "</li>"),
                                                void 0) : (e.empty(),
                                                h.opts.populateResults.call(this, e, g.results, {
                                                    term: d.val(),
                                                    page: this.resultsPage,
                                                    context: null
                                                }),
                                                g.more === !0 && G(f.formatLoadMore, "formatLoadMore") && (e.append("<li class='select2-more-results'>" + h.opts.escapeMarkup(f.formatLoadMore(this.resultsPage)) + "</li>"),
                                                    window.setTimeout(function() {
                                                        h.loadMoreIfNeeded()
                                                    }, 10)),
                                                this.postprocessResults(g, c),
                                                l(),
                                                this.opts.element.trigger({
                                                    type: "select2-loaded",
                                                    data: g
                                                }),
                                                void 0)) : (this.search.removeClass("select2-active"),
                                            void 0)
                                    })
                                })
                        }
                    },
                    cancel: function() {
                        this.close()
                    },
                    blur: function() {
                        this.opts.selectOnBlur && this.selectHighlighted({
                                noFocus: !0
                            }),
                            this.close(),
                            this.container.removeClass("select2-container-active"),
                            this.search[0] === document.activeElement && this.search.blur(),
                            this.clearSearch(),
                            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
                    },
                    focusSearch: function() {
                        w(this.search)
                    },
                    selectHighlighted: function(a) {
                        var b = this.highlight(),
                            c = this.results.find(".select2-highlighted"),
                            d = c.closest(".select2-result").data("select2-data");
                        d && (this.highlight(b),
                            this.onSelect(d, a))
                    },
                    getPlaceholder: function() {
                        return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder
                    },
                    initContainerWidth: function() {
                        function c() {
                            var c, d, e, f, g;
                            if ("off" === this.opts.width)
                                return null;
                            if ("element" === this.opts.width)
                                return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                            if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                                if (c = this.opts.element.attr("style"),
                                    c !== b)
                                    for (d = c.split(";"),
                                        f = 0,
                                        g = d.length; g > f; f += 1)
                                        if (e = d[f].replace(/\s/g, "").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),
                                            null !== e && e.length >= 1)
                                            return e[1];
                                return c = this.opts.element.css("width"),
                                    c && c.length > 0 ? c : "resolve" === this.opts.width ? 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px" : null
                            }
                            return a.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                        }
                        var d = c.call(this);
                        null !== d && this.container.css("width", d)
                    }
                }),
                e = K(d, {
                    createContainer: function() {
                        var b = a(document.createElement("div")).attr({
                            "class": "select2-container"
                        }).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>", "   <span>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>", "   <div><b></b></div>", "</a>", "<input class='select2-focusser select2-offscreen' type='text'/>", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>", "   </div>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                        return b
                    },
                    enableInterface: function() {
                        this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
                    },
                    opening: function() {
                        var b, c, d;
                        this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0),
                            this.parent.opening.apply(this, arguments),
                            this.showSearchInput !== !1 && this.search.val(this.focusser.val()),
                            this.search.focus(),
                            b = this.search.get(0),
                            b.createTextRange ? (c = b.createTextRange(),
                                c.collapse(!1),
                                c.select()) : b.setSelectionRange && (d = this.search.val().length,
                                b.setSelectionRange(d, d)),
                            this.focusser.prop("disabled", !0).val(""),
                            this.updateResults(!0),
                            this.opts.element.trigger(a.Event("select2-open"))
                    },
                    close: function() {
                        this.opened() && (this.parent.close.apply(this, arguments),
                            this.focusser.removeAttr("disabled"),
                            this.focusser.focus())
                    },
                    focus: function() {
                        this.opened() ? this.close() : (this.focusser.removeAttr("disabled"),
                            this.focusser.focus())
                    },
                    isFocused: function() {
                        return this.container.hasClass("select2-container-active")
                    },
                    cancel: function() {
                        this.parent.cancel.apply(this, arguments),
                            this.focusser.removeAttr("disabled"),
                            this.focusser.focus()
                    },
                    initContainer: function() {
                        var b, d = this.container,
                            e = this.dropdown;
                        this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0),
                            this.selection = b = d.find(".select2-choice"),
                            this.focusser = d.find(".select2-focusser"),
                            this.focusser.attr("id", "s2id_autogen" + g()),
                            a("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.focusser.attr("id")),
                            this.focusser.attr("tabindex", this.elementTabIndex),
                            this.search.on("keydown", this.bind(function(a) {
                                if (this.isInterfaceEnabled()) {
                                    if (a.which === c.PAGE_UP || a.which === c.PAGE_DOWN)
                                        return y(a),
                                            void 0;
                                    switch (a.which) {
                                        case c.UP:
                                        case c.DOWN:
                                            return this.moveHighlight(a.which === c.UP ? -1 : 1),
                                                y(a),
                                                void 0;
                                        case c.ENTER:
                                            return this.selectHighlighted(),
                                                y(a),
                                                void 0;
                                        case c.TAB:
                                            return this.selectHighlighted({
                                                    noFocus: !0
                                                }),
                                                void 0;
                                        case c.ESC:
                                            return this.cancel(a),
                                                y(a),
                                                void 0
                                    }
                                }
                            })),
                            this.search.on("blur", this.bind(function() {
                                document.activeElement === this.body().get(0) && window.setTimeout(this.bind(function() {
                                    this.search.focus()
                                }), 0)
                            })),
                            this.focusser.on("keydown", this.bind(function(a) {
                                return !this.isInterfaceEnabled() || a.which === c.TAB || c.isControl(a) || c.isFunctionKey(a) || a.which === c.ESC ? void 0 : this.opts.openOnEnter === !1 && a.which === c.ENTER ? (y(a),
                                    void 0) : a.which == c.DOWN || a.which == c.UP || a.which == c.ENTER && this.opts.openOnEnter ? (this.open(),
                                    y(a),
                                    void 0) : a.which == c.DELETE || a.which == c.BACKSPACE ? (this.opts.allowClear && this.clear(),
                                    y(a),
                                    void 0) : void 0
                            })),
                            r(this.focusser),
                            this.focusser.on("keyup-change input", this.bind(function(a) {
                                if (this.opts.minimumResultsForSearch >= 0) {
                                    if (a.stopPropagation(),
                                        this.opened())
                                        return;
                                    this.open()
                                }
                            })),
                            b.on("mousedown", "abbr", this.bind(function(a) {
                                this.isInterfaceEnabled() && (this.clear(),
                                    z(a),
                                    this.close(),
                                    this.selection.focus())
                            })),
                            b.on("mousedown", this.bind(function(b) {
                                this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")),
                                    this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(),
                                    y(b)
                            })),
                            e.on("mousedown", this.bind(function() {
                                this.search.focus()
                            })),
                            b.on("focus", this.bind(function(a) {
                                y(a)
                            })),
                            this.focusser.on("focus", this.bind(function() {
                                this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")),
                                    this.container.addClass("select2-container-active")
                            })).on("blur", this.bind(function() {
                                this.opened() || (this.container.removeClass("select2-container-active"),
                                    this.opts.element.trigger(a.Event("select2-blur")))
                            })),
                            this.search.on("focus", this.bind(function() {
                                this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")),
                                    this.container.addClass("select2-container-active")
                            })),
                            this.initContainerWidth(),
                            this.opts.element.addClass("select2-offscreen"),
                            this.setPlaceholder()
                    },
                    clear: function(a) {
                        var b = this.selection.data("select2-data");
                        b && (this.opts.element.val(""),
                            this.selection.find("span").empty(),
                            this.selection.removeData("select2-data"),
                            this.setPlaceholder(),
                            a !== !1 && (this.opts.element.trigger({
                                    type: "select2-removed",
                                    val: this.id(b),
                                    choice: b
                                }),
                                this.triggerChange({
                                    removed: b
                                })))
                    },
                    initSelection: function() {
                        if ("" === this.opts.element.val() && "" === this.opts.element.text())
                            this.updateSelection([]),
                            this.close(),
                            this.setPlaceholder();
                        else {
                            var c = this;
                            this.opts.initSelection.call(null, this.opts.element, function(a) {
                                a !== b && null !== a && (c.updateSelection(a),
                                    c.close(),
                                    c.setPlaceholder())
                            })
                        }
                    },
                    prepareOpts: function() {
                        var b = this.parent.prepareOpts.apply(this, arguments),
                            c = this;
                        return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                                var d = a.find(":selected");
                                b(c.optionToData(d))
                            } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                                var e = c.val(),
                                    f = null;
                                b.query({
                                    matcher: function(a, c, d) {
                                        var g = o(e, b.id(d));
                                        return g && (f = d),
                                            g
                                    },
                                    callback: a.isFunction(d) ? function() {
                                        d(f)
                                    } : a.noop
                                })
                            }),
                            b
                    },
                    getPlaceholder: function() {
                        return this.select && "" !== this.select.find("option").first().text() ? b : this.parent.getPlaceholder.apply(this, arguments)
                    },
                    setPlaceholder: function() {
                        var a = this.getPlaceholder();
                        if ("" === this.opts.element.val() && a !== b) {
                            if (this.select && "" !== this.select.find("option:first").text())
                                return;
                            this.selection.find("span").html(this.opts.escapeMarkup(a)),
                                this.selection.addClass("select2-default"),
                                this.container.removeClass("select2-allowclear")
                        }
                    },
                    postprocessResults: function(a, b, c) {
                        var d = 0,
                            e = this;
                        if (this.findHighlightableChoices().each2(function(a, b) {
                                return o(e.id(b.data("select2-data")), e.opts.element.val()) ? (d = a, !1) : void 0
                            }),
                            c !== !1 && this.highlight(d),
                            b === !0) {
                            var g = this.opts.minimumResultsForSearch;
                            g >= 0 && this.showSearch(I(a.results) >= g)
                        }
                    },
                    showSearch: function(b) {
                        this.showSearchInput !== b && (this.showSearchInput = b,
                            this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !b),
                            this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !b),
                            a(this.dropdown, this.container).toggleClass("select2-with-searchbox", b))
                    },
                    onSelect: function(a, b) {
                        if (this.triggerSelect(a)) {
                            var c = this.opts.element.val(),
                                d = this.data();
                            this.opts.element.val(this.id(a)),
                                this.updateSelection(a),
                                this.opts.element.trigger({
                                    type: "select2-selected",
                                    val: this.id(a),
                                    choice: a
                                }),
                                this.close(),
                                b && b.noFocus || this.selection.focus(),
                                o(c, this.id(a)) || this.triggerChange({
                                    added: a,
                                    removed: d
                                })
                        }
                    },
                    updateSelection: function(a) {
                        var d, e, c = this.selection.find("span");
                        this.selection.data("select2-data", a),
                            c.empty(),
                            d = this.opts.formatSelection(a, c),
                            d !== b && c.append(this.opts.escapeMarkup(d)),
                            e = this.opts.formatSelectionCssClass(a, c),
                            e !== b && c.addClass(e),
                            this.selection.removeClass("select2-default"),
                            this.opts.allowClear && this.getPlaceholder() !== b && this.container.addClass("select2-allowclear")
                    },
                    val: function() {
                        var a, c = !1,
                            d = null,
                            e = this,
                            f = this.data();
                        if (0 === arguments.length)
                            return this.opts.element.val();
                        if (a = arguments[0],
                            arguments.length > 1 && (c = arguments[1]),
                            this.select)
                            this.select.val(a).find(":selected").each2(function(a, b) {
                                return d = e.optionToData(b), !1
                            }),
                            this.updateSelection(d),
                            this.setPlaceholder(),
                            c && this.triggerChange({
                                added: d,
                                removed: f
                            });
                        else {
                            if (this.opts.initSelection === b)
                                throw new Error("cannot call val() if initSelection() is not defined");
                            if (!a && 0 !== a)
                                return this.clear(c),
                                    void 0;
                            this.opts.element.val(a),
                                this.opts.initSelection(this.opts.element, function(a) {
                                    e.opts.element.val(a ? e.id(a) : ""),
                                        e.updateSelection(a),
                                        e.setPlaceholder(),
                                        c && e.triggerChange({
                                            added: a,
                                            removed: f
                                        })
                                })
                        }
                    },
                    clearSearch: function() {
                        this.search.val(""),
                            this.focusser.val("")
                    },
                    data: function(a, c) {
                        var d;
                        return 0 === arguments.length ? (d = this.selection.data("select2-data"),
                            d == b && (d = null),
                            d) : (a && "" !== a ? (d = this.data(),
                                this.opts.element.val(a ? this.id(a) : ""),
                                this.updateSelection(a),
                                c && this.triggerChange({
                                    added: a,
                                    removed: d
                                })) : this.clear(c),
                            void 0)
                    }
                }),
                f = K(d, {
                    createContainer: function() {
                        var b = a(document.createElement("div")).attr({
                            "class": "select2-container select2-container-multi"
                        }).html(["    <ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitilize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                        return b
                    },
                    prepareOpts: function() {
                        var b = this.parent.prepareOpts.apply(this, arguments),
                            c = this;
                        return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                                var d = [];
                                a.find(":selected").each2(function(a, b) {
                                        d.push(c.optionToData(b))
                                    }),
                                    b(d)
                            } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                                var e = p(c.val(), b.separator),
                                    f = [];
                                b.query({
                                    matcher: function(c, d, g) {
                                        var h = a.grep(e, function(a) {
                                            return o(a, b.id(g))
                                        }).length;
                                        return h && f.push(g),
                                            h
                                    },
                                    callback: a.isFunction(d) ? function() {
                                        for (var a = [], c = 0; c < e.length; c++)
                                            for (var g = e[c], h = 0; h < f.length; h++) {
                                                var i = f[h];
                                                if (o(g, b.id(i))) {
                                                    a.push(i),
                                                        f.splice(h, 1);
                                                    break
                                                }
                                            }
                                        d(a)
                                    } : a.noop
                                })
                            }),
                            b
                    },
                    selectChoice: function(a) {
                        var b = this.container.find(".select2-search-choice-focus");
                        b.length && a && a[0] == b[0] || (b.length && this.opts.element.trigger("choice-deselected", b),
                            b.removeClass("select2-search-choice-focus"),
                            a && a.length && (this.close(),
                                a.addClass("select2-search-choice-focus"),
                                this.opts.element.trigger("choice-selected", a)))
                    },
                    initContainer: function() {
                        var d, b = ".select2-choices";
                        this.searchContainer = this.container.find(".select2-search-field"),
                            this.selection = d = this.container.find(b);
                        var e = this;
                        this.selection.on("mousedown", ".select2-search-choice", function() {
                                e.search[0].focus(),
                                    e.selectChoice(a(this))
                            }),
                            this.search.attr("id", "s2id_autogen" + g()),
                            a("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.search.attr("id")),
                            this.search.on("input paste", this.bind(function() {
                                this.isInterfaceEnabled() && (this.opened() || this.open())
                            })),
                            this.search.attr("tabindex", this.elementTabIndex),
                            this.keydowns = 0,
                            this.search.on("keydown", this.bind(function(a) {
                                if (this.isInterfaceEnabled()) {
                                    ++this.keydowns;
                                    var b = d.find(".select2-search-choice-focus"),
                                        e = b.prev(".select2-search-choice:not(.select2-locked)"),
                                        f = b.next(".select2-search-choice:not(.select2-locked)"),
                                        g = x(this.search);
                                    if (b.length && (a.which == c.LEFT || a.which == c.RIGHT || a.which == c.BACKSPACE || a.which == c.DELETE || a.which == c.ENTER)) {
                                        var h = b;
                                        return a.which == c.LEFT && e.length ? h = e : a.which == c.RIGHT ? h = f.length ? f : null : a.which === c.BACKSPACE ? (this.unselect(b.first()),
                                                this.search.width(10),
                                                h = e.length ? e : f) : a.which == c.DELETE ? (this.unselect(b.first()),
                                                this.search.width(10),
                                                h = f.length ? f : null) : a.which == c.ENTER && (h = null),
                                            this.selectChoice(h),
                                            y(a),
                                            h && h.length || this.open(),
                                            void 0
                                    }
                                    if ((a.which === c.BACKSPACE && 1 == this.keydowns || a.which == c.LEFT) && 0 == g.offset && !g.length)
                                        return this.selectChoice(d.find(".select2-search-choice:not(.select2-locked)").last()),
                                            y(a),
                                            void 0;
                                    if (this.selectChoice(null),
                                        this.opened())
                                        switch (a.which) {
                                            case c.UP:
                                            case c.DOWN:
                                                return this.moveHighlight(a.which === c.UP ? -1 : 1),
                                                    y(a),
                                                    void 0;
                                            case c.ENTER:
                                                return this.selectHighlighted(),
                                                    y(a),
                                                    void 0;
                                            case c.TAB:
                                                return this.selectHighlighted({
                                                        noFocus: !0
                                                    }),
                                                    void 0;
                                            case c.ESC:
                                                return this.cancel(a),
                                                    y(a),
                                                    void 0
                                        }
                                    if (a.which !== c.TAB && !c.isControl(a) && !c.isFunctionKey(a) && a.which !== c.BACKSPACE && a.which !== c.ESC) {
                                        if (a.which === c.ENTER) {
                                            if (this.opts.openOnEnter === !1)
                                                return;
                                            if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey)
                                                return
                                        }
                                        this.open(), (a.which === c.PAGE_UP || a.which === c.PAGE_DOWN) && y(a),
                                            a.which === c.ENTER && y(a)
                                    }
                                }
                            })),
                            this.search.on("keyup", this.bind(function() {
                                this.keydowns = 0,
                                    this.resizeSearch()
                            })),
                            this.search.on("blur", this.bind(function(b) {
                                this.container.removeClass("select2-container-active"),
                                    this.search.removeClass("select2-focused"),
                                    this.selectChoice(null),
                                    this.opened() || this.clearSearch(),
                                    b.stopImmediatePropagation(),
                                    this.opts.element.trigger(a.Event("select2-blur"))
                            })),
                            this.container.on("mousedown", b, this.bind(function(b) {
                                this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null),
                                    this.clearPlaceholder(),
                                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")),
                                    this.open(),
                                    this.focusSearch(),
                                    b.preventDefault()))
                            })),
                            this.container.on("focus", b, this.bind(function() {
                                this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")),
                                    this.container.addClass("select2-container-active"),
                                    this.dropdown.addClass("select2-drop-active"),
                                    this.clearPlaceholder())
                            })),
                            this.initContainerWidth(),
                            this.opts.element.addClass("select2-offscreen"),
                            this.clearSearch()
                    },
                    enableInterface: function() {
                        this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
                    },
                    initSelection: function() {
                        if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]),
                                this.close(),
                                this.clearSearch()),
                            this.select || "" !== this.opts.element.val()) {
                            var c = this;
                            this.opts.initSelection.call(null, this.opts.element, function(a) {
                                a !== b && null !== a && (c.updateSelection(a),
                                    c.close(),
                                    c.clearSearch())
                            })
                        }
                    },
                    clearSearch: function() {
                        var a = this.getPlaceholder(),
                            c = this.getMaxSearchWidth();
                        a !== b && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(a).addClass("select2-default"),
                            this.search.width(c > 0 ? c : this.container.css("width"))) : this.search.val("").width(10)
                    },
                    clearPlaceholder: function() {
                        this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
                    },
                    opening: function() {
                        this.clearPlaceholder(),
                            this.resizeSearch(),
                            this.parent.opening.apply(this, arguments),
                            this.focusSearch(),
                            this.updateResults(!0),
                            this.search.focus(),
                            this.opts.element.trigger(a.Event("select2-open"))
                    },
                    close: function() {
                        this.opened() && this.parent.close.apply(this, arguments)
                    },
                    focus: function() {
                        this.close(),
                            this.search.focus()
                    },
                    isFocused: function() {
                        return this.search.hasClass("select2-focused")
                    },
                    updateSelection: function(b) {
                        var c = [],
                            d = [],
                            e = this;
                        a(b).each(function() {
                                m(e.id(this), c) < 0 && (c.push(e.id(this)),
                                    d.push(this))
                            }),
                            b = d,
                            this.selection.find(".select2-search-choice").remove(),
                            a(b).each(function() {
                                e.addSelectedChoice(this)
                            }),
                            e.postprocessResults()
                    },
                    tokenize: function() {
                        var a = this.search.val();
                        a = this.opts.tokenizer(a, this.data(), this.bind(this.onSelect), this.opts),
                            null != a && a != b && (this.search.val(a),
                                a.length > 0 && this.open())
                    },
                    onSelect: function(a, b) {
                        this.triggerSelect(a) && (this.addSelectedChoice(a),
                            this.opts.element.trigger({
                                type: "selected",
                                val: this.id(a),
                                choice: a
                            }), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(),
                            this.opts.closeOnSelect ? (this.close(),
                                this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10),
                                this.resizeSearch(),
                                this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() && this.updateResults(!0),
                                this.positionDropdown()) : (this.close(),
                                this.search.width(10)),
                            this.triggerChange({
                                added: a
                            }),
                            b && b.noFocus || this.focusSearch())
                    },
                    cancel: function() {
                        this.close(),
                            this.focusSearch()
                    },
                    addSelectedChoice: function(c) {
                        var j, k, d = !c.locked,
                            e = a("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                            f = a("<li class='select2-search-choice select2-locked'><div></div></li>"),
                            g = d ? e : f,
                            h = this.id(c),
                            i = this.getVal();
                        j = this.opts.formatSelection(c, g.find("div")),
                            j != b && g.find("div").replaceWith("<div title='" + this.opts.escapeMarkup(j) + "'>" + this.opts.escapeMarkup(j) + "</div>"),
                            k = this.opts.formatSelectionCssClass(c, g.find("div")),
                            k != b && g.addClass(k),
                            d && g.find(".select2-search-choice-close").on("mousedown", y).on("click dblclick", this.bind(function(b) {
                                this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").fadeOut("fast", this.bind(function() {
                                        this.unselect(a(b.target)),
                                            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),
                                            this.close(),
                                            this.focusSearch()
                                    })).dequeue(),
                                    y(b))
                            })).on("focus", this.bind(function() {
                                this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"),
                                    this.dropdown.addClass("select2-drop-active"))
                            })),
                            g.data("select2-data", c),
                            g.insertBefore(this.searchContainer),
                            i.push(h),
                            this.setVal(i)
                    },
                    unselect: function(a) {
                        var c, d, b = this.getVal();
                        if (a = a.closest(".select2-search-choice"),
                            0 === a.length)
                            throw "Invalid argument: " + a + ". Must be .select2-search-choice";
                        c = a.data("select2-data"),
                            c && (d = m(this.id(c), b),
                                d >= 0 && (b.splice(d, 1),
                                    this.setVal(b),
                                    this.select && this.postprocessResults()),
                                a.remove(),
                                this.opts.element.trigger({
                                    type: "removed",
                                    val: this.id(c),
                                    choice: c
                                }),
                                this.triggerChange({
                                    removed: c
                                }))
                    },
                    postprocessResults: function(a, b, c) {
                        var d = this.getVal(),
                            e = this.results.find(".select2-result"),
                            f = this.results.find(".select2-result-with-children"),
                            g = this;
                        e.each2(function(a, b) {
                                var c = g.id(b.data("select2-data"));
                                m(c, d) >= 0 && (b.addClass("select2-selected"),
                                    b.find(".select2-result-selectable").addClass("select2-selected"))
                            }),
                            f.each2(function(a, b) {
                                b.is(".select2-result-selectable") || 0 !== b.find(".select2-result-selectable:not(.select2-selected)").length || b.addClass("select2-selected")
                            }), -1 == this.highlight() && c !== !1 && g.highlight(0), !this.opts.createSearchChoice && !e.filter(".select2-result:not(.select2-selected)").length > 0 && (!a || a && !a.more && 0 === this.results.find(".select2-no-results").length) && this.results.append("<li class='select2-no-results'>" + g.opts.formatNoMatches(g.search.val()) + "</li>")
                    },
                    getMaxSearchWidth: function() {
                        return this.selection.width() - q(this.search)
                    },
                    resizeSearch: function() {
                        var a, b, c, d, e, f = q(this.search);
                        a = A(this.search) + 10,
                            b = this.search.offset().left,
                            c = this.selection.width(),
                            d = this.selection.offset().left,
                            e = c - (b - d) - f,
                            a > e && (e = c - f),
                            40 > e && (e = c - f),
                            0 >= e && (e = a),
                            this.search.width(e)
                    },
                    getVal: function() {
                        var a;
                        return this.select ? (a = this.select.val(),
                            null === a ? [] : a) : (a = this.opts.element.val(),
                            p(a, this.opts.separator))
                    },
                    setVal: function(b) {
                        var c;
                        this.select ? this.select.val(b) : (c = [],
                            a(b).each(function() {
                                m(this, c) < 0 && c.push(this)
                            }),
                            this.opts.element.val(0 === c.length ? "" : c.join(this.opts.separator)))
                    },
                    buildChangeDetails: function(a, b) {
                        for (var b = b.slice(0), a = a.slice(0), c = 0; c < b.length; c++)
                            for (var d = 0; d < a.length; d++)
                                o(this.opts.id(b[c]), this.opts.id(a[d])) && (b.splice(c, 1),
                                    c--,
                                    a.splice(d, 1),
                                    d--);
                        return {
                            added: b,
                            removed: a
                        }
                    },
                    val: function(c, d) {
                        var e, f = this;
                        if (0 === arguments.length)
                            return this.getVal();
                        if (e = this.data(),
                            e.length || (e = []), !c && 0 !== c)
                            return this.opts.element.val(""),
                                this.updateSelection([]),
                                this.clearSearch(),
                                d && this.triggerChange({
                                    added: this.data(),
                                    removed: e
                                }),
                                void 0;
                        if (this.setVal(c),
                            this.select)
                            this.opts.initSelection(this.select, this.bind(this.updateSelection)),
                            d && this.triggerChange(this.buildChangeDetails(e, this.data()));
                        else {
                            if (this.opts.initSelection === b)
                                throw new Error("val() cannot be called if initSelection() is not defined");
                            this.opts.initSelection(this.opts.element, function(b) {
                                var c = a(b).map(f.id);
                                f.setVal(c),
                                    f.updateSelection(b),
                                    f.clearSearch(),
                                    d && f.triggerChange(this.buildChangeDetails(e, this.data()))
                            })
                        }
                        this.clearSearch()
                    },
                    onSortStart: function() {
                        if (this.select)
                            throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                        this.search.width(0),
                            this.searchContainer.hide()
                    },
                    onSortEnd: function() {
                        var b = [],
                            c = this;
                        this.searchContainer.show(),
                            this.searchContainer.appendTo(this.searchContainer.parent()),
                            this.resizeSearch(),
                            this.selection.find(".select2-search-choice").each(function() {
                                b.push(c.opts.id(a(this).data("select2-data")))
                            }),
                            this.setVal(b),
                            this.triggerChange()
                    },
                    data: function(b, c) {
                        var e, f, d = this;
                        return 0 === arguments.length ? this.selection.find(".select2-search-choice").map(function() {
                            return a(this).data("select2-data")
                        }).get() : (f = this.data(),
                            b || (b = []),
                            e = a.map(b, function(a) {
                                return d.opts.id(a)
                            }),
                            this.setVal(e),
                            this.updateSelection(b),
                            this.clearSearch(),
                            c && this.triggerChange(this.buildChangeDetails(f, this.data())),
                            void 0)
                    }
                }),
                a.fn.select2 = function() {
                    var d, g, h, i, c = Array.prototype.slice.call(arguments, 0),
                        j = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "onSortStart", "onSortEnd", "enable", "readonly", "positionDropdown", "data"],
                        k = ["val", "opened", "isFocused", "container", "data"];
                    return this.each(function() {
                            if (0 === c.length || "object" == typeof c[0])
                                d = 0 === c.length ? {} : a.extend({}, c[0]),
                                d.element = a(this),
                                "select" === d.element.get(0).tagName.toLowerCase() ? i = d.element.prop("multiple") : (i = d.multiple || !1,
                                    "tags" in d && (d.multiple = i = !0)),
                                g = i ? new f : new e,
                                g.init(d);
                            else {
                                if ("string" != typeof c[0])
                                    throw "Invalid arguments to select2 plugin: " + c;
                                if (m(c[0], j) < 0)
                                    throw "Unknown method: " + c[0];
                                if (h = b,
                                    g = a(this).data("select2"),
                                    g === b)
                                    return;
                                if (h = "container" === c[0] ? g.container : g[c[0]].apply(g, c.slice(1)),
                                    m(c[0], k) >= 0)
                                    return !1
                            }
                        }),
                        h === b ? this : h
                },
                a.fn.select2.defaults = {
                    width: "copy",
                    loadMorePadding: 0,
                    closeOnSelect: !0,
                    openOnEnter: !0,
                    containerCss: {},
                    dropdownCss: {},
                    containerCssClass: "",
                    dropdownCssClass: "",
                    formatResult: function(a, b, c, d) {
                        var e = [];
                        return C(a.text, c.term, e, d),
                            e.join("")
                    },
                    formatSelection: function(a) {
                        return a ? a.text : b
                    },
                    sortResults: function(a) {
                        return a
                    },
                    formatResultCssClass: function() {
                        return b
                    },
                    formatSelectionCssClass: function() {
                        return b
                    },
                    formatNoMatches: function() {
                        return "No matches found"
                    },
                    formatInputTooShort: function(a, b) {
                        var c = b - a.length;
                        return "Please enter " + c + " more character" + (1 == c ? "" : "s")
                    },
                    formatInputTooLong: function(a, b) {
                        var c = a.length - b;
                        return "Please delete " + c + " character" + (1 == c ? "" : "s")
                    },
                    formatSelectionTooBig: function(a) {
                        return "You can only select " + a + " item" + (1 == a ? "" : "s")
                    },
                    formatLoadMore: function() {
                        return "Loading more results..."
                    },
                    formatSearching: function() {
                        return "Searching..."
                    },
                    minimumResultsForSearch: 0,
                    minimumInputLength: 0,
                    maximumInputLength: null,
                    maximumSelectionSize: 0,
                    id: function(a) {
                        return a.id
                    },
                    matcher: function(a, b) {
                        return ("" + b).toUpperCase().indexOf(("" + a).toUpperCase()) >= 0
                    },
                    separator: ",",
                    tokenSeparators: [],
                    tokenizer: J,
                    escapeMarkup: function(a) {
                        var b = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return String(a).replace(/[&<>"'\/\\]/g, function(a) {
                            return b[a]
                        })
                    },
                    blurOnChange: !1,
                    selectOnBlur: !1,
                    adaptContainerCssClass: function(a) {
                        return a
                    },
                    adaptDropdownCssClass: function() {
                        return null
                    }
                },
                a.fn.select2.ajaxDefaults = {
                    transport: a.ajax,
                    params: {
                        type: "GET",
                        cache: !1,
                        dataType: "json"
                    }
                },
                window.Select2 = {
                    query: {
                        ajax: D,
                        local: E,
                        tags: F
                    },
                    util: {
                        debounce: t,
                        markMatch: C
                    },
                    "class": {
                        "abstract": d,
                        single: e,
                        multi: f
                    }
                }
        }
    }
    (d);;
    ! function(a) {
        "use strict";
        a.extend(a.fn.select2.defaults, {
            formatNoMatches: function() {
                return "\u6ca1\u6709\u627e\u5230\u5339\u914d\u9879"
            },
            formatInputTooShort: function(a, b) {
                var c = b - a.length;
                return "\u8bf7\u518d\u8f93\u5165" + c + "\u4e2a\u5b57\u7b26"
            },
            formatInputTooLong: function(a, b) {
                var c = a.length - b;
                return "\u8bf7\u5220\u6389" + c + "\u4e2a\u5b57\u7b26"
            },
            formatSelectionTooBig: function(a) {
                return "\u4f60\u53ea\u80fd\u9009\u62e9\u6700\u591a" + a + "\u9879"
            },
            formatLoadMore: function() {
                return "\u52a0\u8f7d\u7ed3\u679c\u4e2d..."
            },
            formatSearching: function() {
                return "\u641c\u7d22\u4e2d..."
            }
        })
    }
    (d);
});;
/* WebUploader 0.1.5 */
! function(a, b) {
    var c, d = {},
        e = function(a, b) {
            var c, d, e;
            if ("string" == typeof a)
                return h(a);
            for (c = [],
                d = a.length,
                e = 0; d > e; e++)
                c.push(h(a[e]));
            return b.apply(null, c)
        },
        f = function(a, b, c) {
            2 === arguments.length && (c = b,
                    b = null),
                e(b || [], function() {
                    g(a, c, arguments)
                })
        },
        g = function(a, b, c) {
            var f, g = {
                exports: b
            };
            "function" == typeof b && (c.length || (c = [e, g.exports, g]),
                    f = b.apply(null, c),
                    void 0 !== f && (g.exports = f)),
                d[a] = g.exports
        },
        h = function(b) {
            var c = d[b] || a[b];
            if (!c)
                throw new Error("`" + b + "` is undefined");
            return c
        },
        i = function(a) {
            var b, c, e, f, g, h;
            h = function(a) {
                return a && a.charAt(0).toUpperCase() + a.substr(1)
            };
            for (b in d)
                if (c = a,
                    d.hasOwnProperty(b)) {
                    for (e = b.split("/"),
                        g = h(e.pop()); f = h(e.shift());)
                        c[f] = c[f] || {},
                        c = c[f];
                    c[g] = d[b]
                }
            return a
        },
        j = function(c) {
            return a.__dollar = c,
                i(b(a, f, e))
        };
    "object" == typeof module && "object" == typeof module.exports ? module.exports = j() : "function" == typeof define && define.amd ? define(["jquery"], j) : (c = a.WebUploader,
        a.WebUploader = j(),
        a.WebUploader.noConflict = function() {
            a.WebUploader = c
        }
    )
}
(window, function(a, b, c) {
    return b("dollar-third", [], function() {
            var b = a.__dollar || a.jQuery || a.Zepto;
            if (!b)
                throw new Error("jQuery or Zepto not found!");
            return b
        }),
        b("dollar", ["dollar-third"], function(a) {
            return a
        }),
        b("promise-third", ["dollar"], function(a) {
            return {
                Deferred: a.Deferred,
                when: a.when,
                isPromise: function(a) {
                    return a && "function" == typeof a.then
                }
            }
        }),
        b("promise", ["promise-third"], function(a) {
            return a
        }),
        b("base", ["dollar", "promise"], function(b, c) {
            function d(a) {
                return function() {
                    return h.apply(a, arguments)
                }
            }

            function e(a, b) {
                return function() {
                    return a.apply(b, arguments)
                }
            }

            function f(a) {
                var b;
                return Object.create ? Object.create(a) : (b = function() {},
                    b.prototype = a,
                    new b)
            }
            var g = function() {},
                h = Function.call;
            return {
                version: "0.1.5",
                $: b,
                Deferred: c.Deferred,
                isPromise: c.isPromise,
                when: c.when,
                browser: function(a) {
                        var b = {},
                            c = a.match(/WebKit\/([\d.]+)/),
                            d = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/),
                            e = a.match(/MSIE\s([\d\.]+)/) || a.match(/(?:trident)(?:.*rv:([\w.]+))?/i),
                            f = a.match(/Firefox\/([\d.]+)/),
                            g = a.match(/Safari\/([\d.]+)/),
                            h = a.match(/OPR\/([\d.]+)/);
                        return c && (b.webkit = parseFloat(c[1])),
                            d && (b.chrome = parseFloat(d[1])),
                            e && (b.ie = parseFloat(e[1])),
                            f && (b.firefox = parseFloat(f[1])),
                            g && (b.safari = parseFloat(g[1])),
                            h && (b.opera = parseFloat(h[1])),
                            b
                    }
                    (navigator.userAgent),
                os: function(a) {
                        var b = {},
                            c = a.match(/(?:Android);?[\s\/]+([\d.]+)?/),
                            d = a.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);
                        return c && (b.android = parseFloat(c[1])),
                            d && (b.ios = parseFloat(d[1].replace(/_/g, "."))),
                            b
                    }
                    (navigator.userAgent),
                inherits: function(a, c, d) {
                    var e;
                    return "function" == typeof c ? (e = c,
                            c = null) : e = c && c.hasOwnProperty("constructor") ? c.constructor : function() {
                            return a.apply(this, arguments)
                        },
                        b.extend(!0, e, a, d || {}),
                        e.__super__ = a.prototype,
                        e.prototype = f(a.prototype),
                        c && b.extend(!0, e.prototype, c),
                        e
                },
                noop: g,
                bindFn: e,
                log: function() {
                        return a.console ? e(console.log, console) : g
                    }
                    (),
                nextTick: function() {
                        return function(a) {
                            setTimeout(a, 1)
                        }
                    }
                    (),
                slice: d([].slice),
                guid: function() {
                        var a = 0;
                        return function(b) {
                            for (var c = (+new Date).toString(32), d = 0; 5 > d; d++)
                                c += Math.floor(65535 * Math.random()).toString(32);
                            return (b || "wu_") + c + (a++).toString(32)
                        }
                    }
                    (),
                formatSize: function(a, b, c) {
                    var d;
                    for (c = c || ["B", "K", "M", "G", "TB"];
                        (d = c.shift()) && a > 1024;)
                        a /= 1024;
                    return ("B" === d ? a : a.toFixed(b || 2)) + d
                }
            }
        }),
        b("mediator", ["base"], function(a) {
            function b(a, b, c, d) {
                return f.grep(a, function(a) {
                    return !(!a || b && a.e !== b || c && a.cb !== c && a.cb._cb !== c || d && a.ctx !== d)
                })
            }

            function c(a, b, c) {
                f.each((a || "").split(h), function(a, d) {
                    c(d, b)
                })
            }

            function d(a, b) {
                for (var c, d = !1, e = -1, f = a.length; ++e < f;)
                    if (c = a[e],
                        c.cb.apply(c.ctx2, b) === !1) {
                        d = !0;
                        break
                    }
                return !d
            }
            var e, f = a.$,
                g = [].slice,
                h = /\s+/;
            return e = {
                    on: function(a, b, d) {
                        var e, f = this;
                        return b ? (e = this._events || (this._events = []),
                            c(a, b, function(a, b) {
                                var c = {
                                    e: a
                                };
                                c.cb = b,
                                    c.ctx = d,
                                    c.ctx2 = d || f,
                                    c.id = e.length,
                                    e.push(c)
                            }),
                            this) : this
                    },
                    once: function(a, b, d) {
                        var e = this;
                        return b ? (c(a, b, function(a, b) {
                                var c = function() {
                                    return e.off(a, c),
                                        b.apply(d || e, arguments)
                                };
                                c._cb = b,
                                    e.on(a, c, d)
                            }),
                            e) : e
                    },
                    off: function(a, d, e) {
                        var g = this._events;
                        return g ? a || d || e ? (c(a, d, function(a, c) {
                                f.each(b(g, a, c, e), function() {
                                    delete g[this.id]
                                })
                            }),
                            this) : (this._events = [],
                            this) : this
                    },
                    trigger: function(a) {
                        var c, e, f;
                        return this._events && a ? (c = g.call(arguments, 1),
                            e = b(this._events, a),
                            f = b(this._events, "all"),
                            d(e, c) && d(f, arguments)) : this
                    }
                },
                f.extend({
                    installTo: function(a) {
                        return f.extend(a, e)
                    }
                }, e)
        }),
        b("uploader", ["base", "mediator"], function(a, b) {
            function c(a) {
                this.options = d.extend(!0, {}, c.options, a),
                    this._init(this.options)
            }
            var d = a.$;
            return c.options = {},
                b.installTo(c.prototype),
                d.each({
                    upload: "start-upload",
                    stop: "stop-upload",
                    getFile: "get-file",
                    getFiles: "get-files",
                    addFile: "add-file",
                    addFiles: "add-file",
                    sort: "sort-files",
                    removeFile: "remove-file",
                    cancelFile: "cancel-file",
                    skipFile: "skip-file",
                    retry: "retry",
                    isInProgress: "is-in-progress",
                    makeThumb: "make-thumb",
                    md5File: "md5-file",
                    getDimension: "get-dimension",
                    addButton: "add-btn",
                    predictRuntimeType: "predict-runtime-type",
                    refresh: "refresh",
                    disable: "disable",
                    enable: "enable",
                    reset: "reset"
                }, function(a, b) {
                    c.prototype[a] = function() {
                        return this.request(b, arguments)
                    }
                }),
                d.extend(c.prototype, {
                    state: "pending",
                    _init: function(a) {
                        var b = this;
                        b.request("init", a, function() {
                            b.state = "ready",
                                b.trigger("ready")
                        })
                    },
                    option: function(a, b) {
                        var c = this.options;
                        return arguments.length > 1 ? void(d.isPlainObject(b) && d.isPlainObject(c[a]) ? d.extend(c[a], b) : c[a] = b) : a ? c[a] : c
                    },
                    getStats: function() {
                        var a = this.request("get-stats");
                        return a ? {
                            successNum: a.numOfSuccess,
                            progressNum: a.numOfProgress,
                            cancelNum: a.numOfCancel,
                            invalidNum: a.numOfInvalid,
                            uploadFailNum: a.numOfUploadFailed,
                            queueNum: a.numOfQueue,
                            interruptNum: a.numofInterrupt
                        } : {}
                    },
                    trigger: function(a) {
                        var c = [].slice.call(arguments, 1),
                            e = this.options,
                            f = "on" + a.substring(0, 1).toUpperCase() + a.substring(1);
                        return b.trigger.apply(this, arguments) === !1 || d.isFunction(e[f]) && e[f].apply(this, c) === !1 || d.isFunction(this[f]) && this[f].apply(this, c) === !1 || b.trigger.apply(b, [this, a].concat(c)) === !1 ? !1 : !0
                    },
                    destroy: function() {
                        this.request("destroy", arguments),
                            this.off()
                    },
                    request: a.noop
                }),
                a.create = c.create = function(a) {
                    return new c(a)
                },
                a.Uploader = c,
                c
        }),
        b("runtime/runtime", ["base", "mediator"], function(a, b) {
            function c(b) {
                this.options = d.extend({
                        container: document.body
                    }, b),
                    this.uid = a.guid("rt_")
            }
            var d = a.$,
                e = {},
                f = function(a) {
                    for (var b in a)
                        if (a.hasOwnProperty(b))
                            return b;
                    return null
                };
            return d.extend(c.prototype, {
                    getContainer: function() {
                        var a, b, c = this.options;
                        return this._container ? this._container : (a = d(c.container || document.body),
                            b = d(document.createElement("div")),
                            b.attr("id", "rt_" + this.uid),
                            b.css({
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "1px",
                                height: "1px",
                                overflow: "hidden"
                            }),
                            a.append(b),
                            a.addClass("webuploader-container"),
                            this._container = b,
                            this._parent = a,
                            b)
                    },
                    init: a.noop,
                    exec: a.noop,
                    destroy: function() {
                        this._container && this._container.remove(),
                            this._parent && this._parent.removeClass("webuploader-container"),
                            this.off()
                    }
                }),
                c.orders = "html5,flash",
                c.addRuntime = function(a, b) {
                    e[a] = b
                },
                c.hasRuntime = function(a) {
                    return !!(a ? e[a] : f(e))
                },
                c.create = function(a, b) {
                    var g, h;
                    if (b = b || c.orders,
                        d.each(b.split(/\s*,\s*/g), function() {
                            return e[this] ? (g = this, !1) : void 0
                        }),
                        g = g || f(e), !g)
                        throw new Error("Runtime Error");
                    return h = new e[g](a)
                },
                b.installTo(c.prototype),
                c
        }),
        b("runtime/client", ["base", "mediator", "runtime/runtime"], function(a, b, c) {
            function d(b, d) {
                var f, g = a.Deferred();
                this.uid = a.guid("client_"),
                    this.runtimeReady = function(a) {
                        return g.done(a)
                    },
                    this.connectRuntime = function(b, h) {
                        if (f)
                            throw new Error("already connected!");
                        return g.done(h),
                            "string" == typeof b && e.get(b) && (f = e.get(b)),
                            f = f || e.get(null, d),
                            f ? (a.$.extend(f.options, b),
                                f.__promise.then(g.resolve),
                                f.__client++) : (f = c.create(b, b.runtimeOrder),
                                f.__promise = g.promise(),
                                f.once("ready", g.resolve),
                                f.init(),
                                e.add(f),
                                f.__client = 1),
                            d && (f.__standalone = d),
                            f
                    },
                    this.getRuntime = function() {
                        return f
                    },
                    this.disconnectRuntime = function() {
                        f && (f.__client--,
                            f.__client <= 0 && (e.remove(f),
                                delete f.__promise,
                                f.destroy()),
                            f = null)
                    },
                    this.exec = function() {
                        if (f) {
                            var c = a.slice(arguments);
                            return b && c.unshift(b),
                                f.exec.apply(this, c)
                        }
                    },
                    this.getRuid = function() {
                        return f && f.uid
                    },
                    this.destroy = function(a) {
                        return function() {
                            a && a.apply(this, arguments),
                                this.trigger("destroy"),
                                this.off(),
                                this.exec("destroy"),
                                this.disconnectRuntime()
                        }
                    }
                    (this.destroy)
            }
            var e;
            return e = function() {
                    var a = {};
                    return {
                        add: function(b) {
                            a[b.uid] = b
                        },
                        get: function(b, c) {
                            var d;
                            if (b)
                                return a[b];
                            for (d in a)
                                if (!c || !a[d].__standalone)
                                    return a[d];
                            return null
                        },
                        remove: function(b) {
                            delete a[b.uid]
                        }
                    }
                }
                (),
                b.installTo(d.prototype),
                d
        }),
        b("lib/dnd", ["base", "mediator", "runtime/client"], function(a, b, c) {
            function d(a) {
                a = this.options = e.extend({}, d.options, a),
                    a.container = e(a.container),
                    a.container.length && c.call(this, "DragAndDrop")
            }
            var e = a.$;
            return d.options = {
                    accept: null,
                    disableGlobalDnd: !1
                },
                a.inherits(c, {
                    constructor: d,
                    init: function() {
                        var a = this;
                        a.connectRuntime(a.options, function() {
                            a.exec("init"),
                                a.trigger("ready")
                        })
                    }
                }),
                b.installTo(d.prototype),
                d
        }),
        b("widgets/widget", ["base", "uploader"], function(a, b) {
            function c(a) {
                if (!a)
                    return !1;
                var b = a.length,
                    c = e.type(a);
                return 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && "string" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
            }

            function d(a) {
                this.owner = a,
                    this.options = a.options
            }
            var e = a.$,
                f = b.prototype._init,
                g = b.prototype.destroy,
                h = {},
                i = [];
            return e.extend(d.prototype, {
                    init: a.noop,
                    invoke: function(a, b) {
                        var c = this.responseMap;
                        return c && a in c && c[a] in this && e.isFunction(this[c[a]]) ? this[c[a]].apply(this, b) : h
                    },
                    request: function() {
                        return this.owner.request.apply(this.owner, arguments)
                    }
                }),
                e.extend(b.prototype, {
                    _init: function() {
                        var a = this,
                            b = a._widgets = [],
                            c = a.options.disableWidgets || "";
                        return e.each(i, function(d, e) {
                                (!c || !~c.indexOf(e._name)) && b.push(new e(a))
                            }),
                            f.apply(a, arguments)
                    },
                    request: function(b, d, e) {
                        var f, g, i, j, k = 0,
                            l = this._widgets,
                            m = l && l.length,
                            n = [],
                            o = [];
                        for (d = c(d) ? d : [d]; m > k; k++)
                            f = l[k],
                            g = f.invoke(b, d),
                            g !== h && (a.isPromise(g) ? o.push(g) : n.push(g));
                        return e || o.length ? (i = a.when.apply(a, o),
                            j = i.pipe ? "pipe" : "then",
                            i[j](function() {
                                var b = a.Deferred(),
                                    c = arguments;
                                return 1 === c.length && (c = c[0]),
                                    setTimeout(function() {
                                        b.resolve(c)
                                    }, 1),
                                    b.promise()
                            })[e ? j : "done"](e || a.noop)) : n[0]
                    },
                    destroy: function() {
                        g.apply(this, arguments),
                            this._widgets = null
                    }
                }),
                b.register = d.register = function(b, c) {
                    var f, g = {
                        init: "init",
                        destroy: "destroy",
                        name: "anonymous"
                    };
                    return 1 === arguments.length ? (c = b,
                            e.each(c, function(a) {
                                return "_" === a[0] || "name" === a ? void("name" === a && (g.name = c.name)) : void(g[a.replace(/[A-Z]/g, "-$&").toLowerCase()] = a)
                            })) : g = e.extend(g, b),
                        c.responseMap = g,
                        f = a.inherits(d, c),
                        f._name = g.name,
                        i.push(f),
                        f
                },
                b.unRegister = d.unRegister = function(a) {
                    if (a && "anonymous" !== a)
                        for (var b = i.length; b--;)
                            i[b]._name === a && i.splice(b, 1)
                },
                d
        }),
        b("widgets/filednd", ["base", "uploader", "lib/dnd", "widgets/widget"], function(a, b, c) {
            var d = a.$;
            return b.options.dnd = "",
                b.register({
                    name: "dnd",
                    init: function(b) {
                        if (b.dnd && "html5" === this.request("predict-runtime-type")) {
                            var e, f = this,
                                g = a.Deferred(),
                                h = d.extend({}, {
                                    disableGlobalDnd: b.disableGlobalDnd,
                                    container: b.dnd,
                                    accept: b.accept
                                });
                            return this.dnd = e = new c(h),
                                e.once("ready", g.resolve),
                                e.on("drop", function(a) {
                                    f.request("add-file", [a])
                                }),
                                e.on("accept", function(a) {
                                    return f.owner.trigger("dndAccept", a)
                                }),
                                e.init(),
                                g.promise()
                        }
                    },
                    destroy: function() {
                        this.dnd && this.dnd.destroy()
                    }
                })
        }),
        b("lib/filepaste", ["base", "mediator", "runtime/client"], function(a, b, c) {
            function d(a) {
                a = this.options = e.extend({}, a),
                    a.container = e(a.container || document.body),
                    c.call(this, "FilePaste")
            }
            var e = a.$;
            return a.inherits(c, {
                    constructor: d,
                    init: function() {
                        var a = this;
                        a.connectRuntime(a.options, function() {
                            a.exec("init"),
                                a.trigger("ready")
                        })
                    }
                }),
                b.installTo(d.prototype),
                d
        }),
        b("widgets/filepaste", ["base", "uploader", "lib/filepaste", "widgets/widget"], function(a, b, c) {
            var d = a.$;
            return b.register({
                name: "paste",
                init: function(b) {
                    if (b.paste && "html5" === this.request("predict-runtime-type")) {
                        var e, f = this,
                            g = a.Deferred(),
                            h = d.extend({}, {
                                container: b.paste,
                                accept: b.accept
                            });
                        return this.paste = e = new c(h),
                            e.once("ready", g.resolve),
                            e.on("paste", function(a) {
                                f.owner.request("add-file", [a])
                            }),
                            e.init(),
                            g.promise()
                    }
                },
                destroy: function() {
                    this.paste && this.paste.destroy()
                }
            })
        }),
        b("lib/blob", ["base", "runtime/client"], function(a, b) {
            function c(a, c) {
                var d = this;
                d.source = c,
                    d.ruid = a,
                    this.size = c.size || 0,
                    this.type = !c.type && this.ext && ~"jpg,jpeg,png,gif,bmp".indexOf(this.ext) ? "image/" + ("jpg" === this.ext ? "jpeg" : this.ext) : c.type || "application/octet-stream",
                    b.call(d, "Blob"),
                    this.uid = c.uid || this.uid,
                    a && d.connectRuntime(a)
            }
            return a.inherits(b, {
                    constructor: c,
                    slice: function(a, b) {
                        return this.exec("slice", a, b)
                    },
                    getSource: function() {
                        return this.source
                    }
                }),
                c
        }),
        b("lib/file", ["base", "lib/blob"], function(a, b) {
            function c(a, c) {
                var f;
                this.name = c.name || "untitled" + d++,
                    f = e.exec(c.name) ? RegExp.$1.toLowerCase() : "", !f && c.type && (f = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(c.type) ? RegExp.$1.toLowerCase() : "",
                        this.name += "." + f),
                    this.ext = f,
                    this.lastModifiedDate = c.lastModifiedDate || (new Date).toLocaleString(),
                    b.apply(this, arguments)
            }
            var d = 1,
                e = /\.([^.]+)$/;
            return a.inherits(b, c)
        }),
        b("lib/filepicker", ["base", "runtime/client", "lib/file"], function(b, c, d) {
            function e(a) {
                if (a = this.options = f.extend({}, e.options, a),
                    a.container = f(a.id), !a.container.length)
                    throw new Error("按钮指定错误");
                a.innerHTML = a.innerHTML || a.label || a.container.html() || "",
                    a.button = f(a.button || document.createElement("div")),
                    a.button.html(a.innerHTML),
                    a.container.html(a.button),
                    c.call(this, "FilePicker", !0)
            }
            var f = b.$;
            return e.options = {
                    button: null,
                    container: null,
                    label: null,
                    innerHTML: null,
                    multiple: !0,
                    accept: null,
                    name: "file"
                },
                b.inherits(c, {
                    constructor: e,
                    init: function() {
                        var c = this,
                            e = c.options,
                            g = e.button;
                        g.addClass("webuploader-pick"),
                            c.on("all", function(a) {
                                var b;
                                switch (a) {
                                    case "mouseenter":
                                        g.addClass("webuploader-pick-hover");
                                        break;
                                    case "mouseleave":
                                        g.removeClass("webuploader-pick-hover");
                                        break;
                                    case "change":
                                        b = c.exec("getFiles"),
                                            c.trigger("select", f.map(b, function(a) {
                                                return a = new d(c.getRuid(), a),
                                                    a._refer = e.container,
                                                    a
                                            }), e.container)
                                }
                            }),
                            c.connectRuntime(e, function() {
                                c.refresh(),
                                    c.exec("init", e),
                                    c.trigger("ready")
                            }),
                            this._resizeHandler = b.bindFn(this.refresh, this),
                            f(a).on("resize", this._resizeHandler)
                    },
                    refresh: function() {
                        var a = this.getRuntime().getContainer(),
                            b = this.options.button,
                            c = b.outerWidth ? b.outerWidth() : b.width(),
                            d = b.outerHeight ? b.outerHeight() : b.height(),
                            e = b.offset();
                        c && d && a.css({
                            bottom: "auto",
                            right: "auto",
                            width: c + "px",
                            height: d + "px"
                        }).offset(e)
                    },
                    enable: function() {
                        var a = this.options.button;
                        a.removeClass("webuploader-pick-disable"),
                            this.refresh()
                    },
                    disable: function() {
                        var a = this.options.button;
                        this.getRuntime().getContainer().css({
                                top: "-99999px"
                            }),
                            a.addClass("webuploader-pick-disable")
                    },
                    destroy: function() {
                        var b = this.options.button;
                        f(a).off("resize", this._resizeHandler),
                            b.removeClass("webuploader-pick-disable webuploader-pick-hover webuploader-pick")
                    }
                }),
                e
        }),
        b("widgets/filepicker", ["base", "uploader", "lib/filepicker", "widgets/widget"], function(a, b, c) {
            var d = a.$;
            return d.extend(b.options, {
                    pick: null,
                    accept: null
                }),
                b.register({
                    name: "picker",
                    init: function(a) {
                        return this.pickers = [],
                            a.pick && this.addBtn(a.pick)
                    },
                    refresh: function() {
                        d.each(this.pickers, function() {
                            this.refresh()
                        })
                    },
                    addBtn: function(b) {
                        var e = this,
                            f = e.options,
                            g = f.accept,
                            h = [];
                        if (b)
                            return d.isPlainObject(b) || (b = {
                                    id: b
                                }),
                                d(b.id).each(function() {
                                    var i, j, k;
                                    k = a.Deferred(),
                                        i = d.extend({}, b, {
                                            accept: d.isPlainObject(g) ? [g] : g,
                                            swf: f.swf,
                                            runtimeOrder: f.runtimeOrder,
                                            id: this
                                        }),
                                        j = new c(i),
                                        j.once("ready", k.resolve),
                                        j.on("select", function(a) {
                                            e.owner.request("add-file", [a])
                                        }),
                                        j.init(),
                                        e.pickers.push(j),
                                        h.push(k.promise())
                                }),
                                a.when.apply(a, h)
                    },
                    disable: function() {
                        d.each(this.pickers, function() {
                            this.disable()
                        })
                    },
                    enable: function() {
                        d.each(this.pickers, function() {
                            this.enable()
                        })
                    },
                    destroy: function() {
                        d.each(this.pickers, function() {
                                this.destroy()
                            }),
                            this.pickers = null
                    }
                })
        }),
        b("lib/image", ["base", "runtime/client", "lib/blob"], function(a, b, c) {
            function d(a) {
                this.options = e.extend({}, d.options, a),
                    b.call(this, "Image"),
                    this.on("load", function() {
                        this._info = this.exec("info"),
                            this._meta = this.exec("meta")
                    })
            }
            var e = a.$;
            return d.options = {
                    quality: 90,
                    crop: !1,
                    preserveHeaders: !1,
                    allowMagnify: !1
                },
                a.inherits(b, {
                    constructor: d,
                    info: function(a) {
                        return a ? (this._info = a,
                            this) : this._info
                    },
                    meta: function(a) {
                        return a ? (this._meta = a,
                            this) : this._meta
                    },
                    loadFromBlob: function(a) {
                        var b = this,
                            c = a.getRuid();
                        this.connectRuntime(c, function() {
                            b.exec("init", b.options),
                                b.exec("loadFromBlob", a)
                        })
                    },
                    resize: function() {
                        var b = a.slice(arguments);
                        return this.exec.apply(this, ["resize"].concat(b))
                    },
                    crop: function() {
                        var b = a.slice(arguments);
                        return this.exec.apply(this, ["crop"].concat(b))
                    },
                    getAsDataUrl: function(a) {
                        return this.exec("getAsDataUrl", a)
                    },
                    getAsBlob: function(a) {
                        var b = this.exec("getAsBlob", a);
                        return new c(this.getRuid(), b)
                    }
                }),
                d
        }),
        b("widgets/image", ["base", "uploader", "lib/image", "widgets/widget"], function(a, b, c) {
            var d, e = a.$;
            return d = function(a) {
                    var b = 0,
                        c = [],
                        d = function() {
                            for (var d; c.length && a > b;)
                                d = c.shift(),
                                b += d[0],
                                d[1]()
                        };
                    return function(a, e, f) {
                        c.push([e, f]),
                            a.once("destroy", function() {
                                b -= e,
                                    setTimeout(d, 1)
                            }),
                            setTimeout(d, 1)
                    }
                }
                (5242880),
                e.extend(b.options, {
                    thumb: {
                        width: 110,
                        height: 110,
                        quality: 70,
                        allowMagnify: !0,
                        crop: !0,
                        preserveHeaders: !1,
                        type: "image/jpeg"
                    },
                    compress: {
                        width: 1600,
                        height: 1600,
                        quality: 90,
                        allowMagnify: !1,
                        crop: !1,
                        preserveHeaders: !0
                    }
                }),
                b.register({
                    name: "image",
                    makeThumb: function(a, b, f, g) {
                        var h, i;
                        return a = this.request("get-file", a),
                            a.type.match(/^image/) ? (h = e.extend({}, this.options.thumb),
                                e.isPlainObject(f) && (h = e.extend(h, f),
                                    f = null),
                                f = f || h.width,
                                g = g || h.height,
                                i = new c(h),
                                i.once("load", function() {
                                    a._info = a._info || i.info(),
                                        a._meta = a._meta || i.meta(),
                                        1 >= f && f > 0 && (f = a._info.width * f),
                                        1 >= g && g > 0 && (g = a._info.height * g),
                                        i.resize(f, g)
                                }),
                                i.once("complete", function() {
                                    b(!1, i.getAsDataUrl(h.type)),
                                        i.destroy()
                                }),
                                i.once("error", function(a) {
                                    b(a || !0),
                                        i.destroy()
                                }),
                                void d(i, a.source.size, function() {
                                    a._info && i.info(a._info),
                                        a._meta && i.meta(a._meta),
                                        i.loadFromBlob(a.source)
                                })) : void b(!0)
                    },
                    beforeSendFile: function(b) {
                        var d, f, g = this.options.compress || this.options.resize,
                            h = g && g.compressSize || 0,
                            i = g && g.noCompressIfLarger || !1;
                        return b = this.request("get-file", b), !g || !~"image/jpeg,image/jpg".indexOf(b.type) || b.size < h || b._compressed ? void 0 : (g = e.extend({}, g),
                            f = a.Deferred(),
                            d = new c(g),
                            f.always(function() {
                                d.destroy(),
                                    d = null
                            }),
                            d.once("error", f.reject),
                            d.once("load", function() {
                                var a = g.width,
                                    c = g.height;
                                b._info = b._info || d.info(),
                                    b._meta = b._meta || d.meta(),
                                    1 >= a && a > 0 && (a = b._info.width * a),
                                    1 >= c && c > 0 && (c = b._info.height * c),
                                    d.resize(a, c)
                            }),
                            d.once("complete", function() {
                                var a, c;
                                try {
                                    a = d.getAsBlob(g.type),
                                        c = b.size, (!i || a.size < c) && (b.source = a,
                                            b.size = a.size,
                                            b.trigger("resize", a.size, c)),
                                        b._compressed = !0,
                                        f.resolve()
                                } catch (e) {
                                    f.resolve()
                                }
                            }),
                            b._info && d.info(b._info),
                            b._meta && d.meta(b._meta),
                            d.loadFromBlob(b.source),
                            f.promise())
                    }
                })
        }),
        b("file", ["base", "mediator"], function(a, b) {
            function c() {
                return f + g++
            }

            function d(a) {
                this.name = a.name || "Untitled",
                    this.size = a.size || 0,
                    this.type = a.type || "application/octet-stream",
                    this.lastModifiedDate = a.lastModifiedDate || 1 * new Date,
                    this.id = c(),
                    this.ext = h.exec(this.name) ? RegExp.$1 : "",
                    this.statusText = "",
                    i[this.id] = d.Status.INITED,
                    this.source = a,
                    this.loaded = 0,
                    this.on("error", function(a) {
                        this.setStatus(d.Status.ERROR, a)
                    })
            }
            var e = a.$,
                f = "WU_FILE_",
                g = 0,
                h = /\.([^.]+)$/,
                i = {};
            return e.extend(d.prototype, {
                    setStatus: function(a, b) {
                        var c = i[this.id];
                        "undefined" != typeof b && (this.statusText = b),
                            a !== c && (i[this.id] = a,
                                this.trigger("statuschange", a, c))
                    },
                    getStatus: function() {
                        return i[this.id]
                    },
                    getSource: function() {
                        return this.source
                    },
                    destroy: function() {
                        this.off(),
                            delete i[this.id]
                    }
                }),
                b.installTo(d.prototype),
                d.Status = {
                    INITED: "inited",
                    QUEUED: "queued",
                    PROGRESS: "progress",
                    ERROR: "error",
                    COMPLETE: "complete",
                    CANCELLED: "cancelled",
                    INTERRUPT: "interrupt",
                    INVALID: "invalid"
                },
                d
        }),
        b("queue", ["base", "mediator", "file"], function(a, b, c) {
            function d() {
                this.stats = {
                        numOfQueue: 0,
                        numOfSuccess: 0,
                        numOfCancel: 0,
                        numOfProgress: 0,
                        numOfUploadFailed: 0,
                        numOfInvalid: 0,
                        numofDeleted: 0,
                        numofInterrupt: 0
                    },
                    this._queue = [],
                    this._map = {}
            }
            var e = a.$,
                f = c.Status;
            return e.extend(d.prototype, {
                    append: function(a) {
                        return this._queue.push(a),
                            this._fileAdded(a),
                            this
                    },
                    prepend: function(a) {
                        return this._queue.unshift(a),
                            this._fileAdded(a),
                            this
                    },
                    getFile: function(a) {
                        return "string" != typeof a ? a : this._map[a]
                    },
                    fetch: function(a) {
                        var b, c, d = this._queue.length;
                        for (a = a || f.QUEUED,
                            b = 0; d > b; b++)
                            if (c = this._queue[b],
                                a === c.getStatus())
                                return c;
                        return null
                    },
                    sort: function(a) {
                        "function" == typeof a && this._queue.sort(a)
                    },
                    getFiles: function() {
                        for (var a, b = [].slice.call(arguments, 0), c = [], d = 0, f = this._queue.length; f > d; d++)
                            a = this._queue[d], (!b.length || ~e.inArray(a.getStatus(), b)) && c.push(a);
                        return c
                    },
                    removeFile: function(a) {
                        var b = this._map[a.id];
                        b && (delete this._map[a.id],
                            a.destroy(),
                            this.stats.numofDeleted++)
                    },
                    _fileAdded: function(a) {
                        var b = this,
                            c = this._map[a.id];
                        c || (this._map[a.id] = a,
                            a.on("statuschange", function(a, c) {
                                b._onFileStatusChange(a, c)
                            }))
                    },
                    _onFileStatusChange: function(a, b) {
                        var c = this.stats;
                        switch (b) {
                            case f.PROGRESS:
                                c.numOfProgress--;
                                break;
                            case f.QUEUED:
                                c.numOfQueue--;
                                break;
                            case f.ERROR:
                                c.numOfUploadFailed--;
                                break;
                            case f.INVALID:
                                c.numOfInvalid--;
                                break;
                            case f.INTERRUPT:
                                c.numofInterrupt--
                        }
                        switch (a) {
                            case f.QUEUED:
                                c.numOfQueue++;
                                break;
                            case f.PROGRESS:
                                c.numOfProgress++;
                                break;
                            case f.ERROR:
                                c.numOfUploadFailed++;
                                break;
                            case f.COMPLETE:
                                c.numOfSuccess++;
                                break;
                            case f.CANCELLED:
                                c.numOfCancel++;
                                break;
                            case f.INVALID:
                                c.numOfInvalid++;
                                break;
                            case f.INTERRUPT:
                                c.numofInterrupt++
                        }
                    }
                }),
                b.installTo(d.prototype),
                d
        }),
        b("widgets/queue", ["base", "uploader", "queue", "file", "lib/file", "runtime/client", "widgets/widget"], function(a, b, c, d, e, f) {
            var g = a.$,
                h = /\.\w+$/,
                i = d.Status;
            return b.register({
                name: "queue",
                init: function(b) {
                    var d, e, h, i, j, k, l, m = this;
                    if (g.isPlainObject(b.accept) && (b.accept = [b.accept]),
                        b.accept) {
                        for (j = [],
                            h = 0,
                            e = b.accept.length; e > h; h++)
                            i = b.accept[h].extensions,
                            i && j.push(i);
                        j.length && (k = "\\." + j.join(",").replace(/,/g, "$|\\.").replace(/\*/g, ".*") + "$"),
                            m.accept = new RegExp(k, "i")
                    }
                    return m.queue = new c,
                        m.stats = m.queue.stats,
                        "html5" === this.request("predict-runtime-type") ? (d = a.Deferred(),
                            this.placeholder = l = new f("Placeholder"),
                            l.connectRuntime({
                                runtimeOrder: "html5"
                            }, function() {
                                m._ruid = l.getRuid(),
                                    d.resolve()
                            }),
                            d.promise()) : void 0
                },
                _wrapFile: function(a) {
                    if (!(a instanceof d)) {
                        if (!(a instanceof e)) {
                            if (!this._ruid)
                                throw new Error("Can't add external files.");
                            a = new e(this._ruid, a)
                        }
                        a = new d(a)
                    }
                    return a
                },
                acceptFile: function(a) {
                    var b = !a || !a.size || this.accept && h.exec(a.name) && !this.accept.test(a.name);
                    return !b
                },
                _addFile: function(a) {
                    var b = this;
                    return a = b._wrapFile(a),
                        b.owner.trigger("beforeFileQueued", a) ? b.acceptFile(a) ? (b.queue.append(a),
                            b.owner.trigger("fileQueued", a),
                            a) : void b.owner.trigger("error", "Q_TYPE_DENIED", a) : void 0
                },
                getFile: function(a) {
                    return this.queue.getFile(a)
                },
                addFile: function(a) {
                    var b = this;
                    a.length || (a = [a]),
                        a = g.map(a, function(a) {
                            return b._addFile(a)
                        }),
                        b.owner.trigger("filesQueued", a),
                        b.options.auto && setTimeout(function() {
                            b.request("start-upload")
                        }, 20)
                },
                getStats: function() {
                    return this.stats
                },
                removeFile: function(a, b) {
                    var c = this;
                    a = a.id ? a : c.queue.getFile(a),
                        this.request("cancel-file", a),
                        b && this.queue.removeFile(a)
                },
                getFiles: function() {
                    return this.queue.getFiles.apply(this.queue, arguments)
                },
                fetchFile: function() {
                    return this.queue.fetch.apply(this.queue, arguments)
                },
                retry: function(a, b) {
                    var c, d, e, f = this;
                    if (a)
                        return a = a.id ? a : f.queue.getFile(a),
                            a.setStatus(i.QUEUED),
                            void(b || f.request("start-upload"));
                    for (c = f.queue.getFiles(i.ERROR),
                        d = 0,
                        e = c.length; e > d; d++)
                        a = c[d],
                        a.setStatus(i.QUEUED);
                    f.request("start-upload")
                },
                sortFiles: function() {
                    return this.queue.sort.apply(this.queue, arguments)
                },
                reset: function() {
                    this.owner.trigger("reset"),
                        this.queue = new c,
                        this.stats = this.queue.stats
                },
                destroy: function() {
                    this.reset(),
                        this.placeholder && this.placeholder.destroy()
                }
            })
        }),
        b("widgets/runtime", ["uploader", "runtime/runtime", "widgets/widget"], function(a, b) {
            return a.support = function() {
                    return b.hasRuntime.apply(b, arguments)
                },
                a.register({
                    name: "runtime",
                    init: function() {
                        if (!this.predictRuntimeType())
                            throw Error("Runtime Error")
                    },
                    predictRuntimeType: function() {
                        var a, c, d = this.options.runtimeOrder || b.orders,
                            e = this.type;
                        if (!e)
                            for (d = d.split(/\s*,\s*/g),
                                a = 0,
                                c = d.length; c > a; a++)
                                if (b.hasRuntime(d[a])) {
                                    this.type = e = d[a];
                                    break
                                }
                        return e
                    }
                })
        }),
        b("lib/transport", ["base", "runtime/client", "mediator"], function(a, b, c) {
            function d(a) {
                var c = this;
                a = c.options = e.extend(!0, {}, d.options, a || {}),
                    b.call(this, "Transport"),
                    this._blob = null,
                    this._formData = a.formData || {},
                    this._headers = a.headers || {},
                    this.on("progress", this._timeout),
                    this.on("load error", function() {
                        c.trigger("progress", 1),
                            clearTimeout(c._timer)
                    })
            }
            var e = a.$;
            return d.options = {
                    server: "",
                    method: "POST",
                    withCredentials: !1,
                    fileVal: "file",
                    timeout: 12e4,
                    formData: {},
                    headers: {},
                    sendAsBinary: !1
                },
                e.extend(d.prototype, {
                    appendBlob: function(a, b, c) {
                        var d = this,
                            e = d.options;
                        d.getRuid() && d.disconnectRuntime(),
                            d.connectRuntime(b.ruid, function() {
                                d.exec("init")
                            }),
                            d._blob = b,
                            e.fileVal = a || e.fileVal,
                            e.filename = c || e.filename
                    },
                    append: function(a, b) {
                        "object" == typeof a ? e.extend(this._formData, a) : this._formData[a] = b
                    },
                    setRequestHeader: function(a, b) {
                        "object" == typeof a ? e.extend(this._headers, a) : this._headers[a] = b
                    },
                    send: function(a) {
                        this.exec("send", a),
                            this._timeout()
                    },
                    abort: function() {
                        return clearTimeout(this._timer),
                            this.exec("abort")
                    },
                    destroy: function() {
                        this.trigger("destroy"),
                            this.off(),
                            this.exec("destroy"),
                            this.disconnectRuntime()
                    },
                    getResponse: function() {
                        return this.exec("getResponse")
                    },
                    getResponseAsJson: function() {
                        return this.exec("getResponseAsJson")
                    },
                    getStatus: function() {
                        return this.exec("getStatus")
                    },
                    _timeout: function() {
                        var a = this,
                            b = a.options.timeout;
                        b && (clearTimeout(a._timer),
                            a._timer = setTimeout(function() {
                                a.abort(),
                                    a.trigger("error", "timeout")
                            }, b))
                    }
                }),
                c.installTo(d.prototype),
                d
        }),
        b("widgets/upload", ["base", "uploader", "file", "lib/transport", "widgets/widget"], function(a, b, c, d) {
            function e(a, b) {
                var c, d, e = [],
                    f = a.source,
                    g = f.size,
                    h = b ? Math.ceil(g / b) : 1,
                    i = 0,
                    j = 0;
                for (d = {
                        file: a,
                        has: function() {
                            return !!e.length
                        },
                        shift: function() {
                            return e.shift()
                        },
                        unshift: function(a) {
                            e.unshift(a)
                        }
                    }; h > j;)
                    c = Math.min(b, g - i),
                    e.push({
                        file: a,
                        start: i,
                        end: b ? i + c : g,
                        total: g,
                        chunks: h,
                        chunk: j++,
                        cuted: d
                    }),
                    i += c;
                return a.blocks = e.concat(),
                    a.remaning = e.length,
                    d
            }
            var f = a.$,
                g = a.isPromise,
                h = c.Status;
            f.extend(b.options, {
                    prepareNextFile: !1,
                    chunked: !1,
                    chunkSize: 5242880,
                    chunkRetry: 2,
                    threads: 3,
                    formData: {}
                }),
                b.register({
                    name: "upload",
                    init: function() {
                        var b = this.owner,
                            c = this;
                        this.runing = !1,
                            this.progress = !1,
                            b.on("startUpload", function() {
                                c.progress = !0
                            }).on("uploadFinished", function() {
                                c.progress = !1
                            }),
                            this.pool = [],
                            this.stack = [],
                            this.pending = [],
                            this.remaning = 0,
                            this.__tick = a.bindFn(this._tick, this),
                            b.on("uploadComplete", function(a) {
                                a.blocks && f.each(a.blocks, function(a, b) {
                                        b.transport && (b.transport.abort(),
                                                b.transport.destroy()),
                                            delete b.transport
                                    }),
                                    delete a.blocks,
                                    delete a.remaning
                            })
                    },
                    reset: function() {
                        this.request("stop-upload", !0),
                            this.runing = !1,
                            this.pool = [],
                            this.stack = [],
                            this.pending = [],
                            this.remaning = 0,
                            this._trigged = !1,
                            this._promise = null
                    },
                    startUpload: function(b) {
                        var c = this;
                        if (f.each(c.request("get-files", h.INVALID), function() {
                                c.request("remove-file", this)
                            }),
                            b)
                            if (b = b.id ? b : c.request("get-file", b),
                                b.getStatus() === h.INTERRUPT)
                                f.each(c.pool, function(a, c) {
                                    c.file === b && c.transport && c.transport.send()
                                }),
                                b.setStatus(h.QUEUED);
                            else {
                                if (b.getStatus() === h.PROGRESS)
                                    return;
                                b.setStatus(h.QUEUED)
                            } else
                            f.each(c.request("get-files", [h.INITED]), function() {
                                this.setStatus(h.QUEUED)
                            });
                        if (!c.runing) {
                            c.runing = !0;
                            var d = [];
                            f.each(c.pool, function(a, b) {
                                var e = b.file;
                                e.getStatus() === h.INTERRUPT && (d.push(e),
                                    c._trigged = !1,
                                    b.transport && b.transport.send())
                            });
                            for (var b; b = d.shift();)
                                b.setStatus(h.PROGRESS);
                            b || f.each(c.request("get-files", h.INTERRUPT), function() {
                                    this.setStatus(h.PROGRESS)
                                }),
                                c._trigged = !1,
                                a.nextTick(c.__tick),
                                c.owner.trigger("startUpload")
                        }
                    },
                    stopUpload: function(b, c) {
                        var d = this;
                        if (b === !0 && (c = b,
                                b = null),
                            d.runing !== !1) {
                            if (b) {
                                if (b = b.id ? b : d.request("get-file", b),
                                    b.getStatus() !== h.PROGRESS && b.getStatus() !== h.QUEUED)
                                    return;
                                return b.setStatus(h.INTERRUPT),
                                    f.each(d.pool, function(a, c) {
                                        c.file === b && (c.transport && c.transport.abort(),
                                            d._putback(c),
                                            d._popBlock(c))
                                    }),
                                    a.nextTick(d.__tick)
                            }
                            d.runing = !1,
                                this._promise && this._promise.file && this._promise.file.setStatus(h.INTERRUPT),
                                c && f.each(d.pool, function(a, b) {
                                    b.transport && b.transport.abort(),
                                        b.file.setStatus(h.INTERRUPT)
                                }),
                                d.owner.trigger("stopUpload")
                        }
                    },
                    cancelFile: function(a) {
                        a = a.id ? a : this.request("get-file", a),
                            a.blocks && f.each(a.blocks, function(a, b) {
                                var c = b.transport;
                                c && (c.abort(),
                                    c.destroy(),
                                    delete b.transport)
                            }),
                            a.setStatus(h.CANCELLED),
                            this.owner.trigger("fileDequeued", a)
                    },
                    isInProgress: function() {
                        return !!this.progress
                    },
                    _getStats: function() {
                        return this.request("get-stats")
                    },
                    skipFile: function(a, b) {
                        a = a.id ? a : this.request("get-file", a),
                            a.setStatus(b || h.COMPLETE),
                            a.skipped = !0,
                            a.blocks && f.each(a.blocks, function(a, b) {
                                var c = b.transport;
                                c && (c.abort(),
                                    c.destroy(),
                                    delete b.transport)
                            }),
                            this.owner.trigger("uploadSkip", a)
                    },
                    _tick: function() {
                        var b, c, d = this,
                            e = d.options;
                        return d._promise ? d._promise.always(d.__tick) : void(d.pool.length < e.threads && (c = d._nextBlock()) ? (d._trigged = !1,
                            b = function(b) {
                                d._promise = null,
                                    b && b.file && d._startSend(b),
                                    a.nextTick(d.__tick)
                            },
                            d._promise = g(c) ? c.always(b) : b(c)) : d.remaning || d._getStats().numOfQueue || d._getStats().numofInterrupt || (d.runing = !1,
                            d._trigged || a.nextTick(function() {
                                d.owner.trigger("uploadFinished")
                            }),
                            d._trigged = !0))
                    },
                    _putback: function(a) {
                        var b;
                        a.cuted.unshift(a),
                            b = this.stack.indexOf(a.cuted), ~b || this.stack.unshift(a.cuted)
                    },
                    _getStack: function() {
                        for (var a, b = 0; a = this.stack[b++];) {
                            if (a.has() && a.file.getStatus() === h.PROGRESS)
                                return a;
                            (!a.has() || a.file.getStatus() !== h.PROGRESS && a.file.getStatus() !== h.INTERRUPT) && this.stack.splice(--b, 1)
                        }
                        return null
                    },
                    _nextBlock: function() {
                        var a, b, c, d, f = this,
                            h = f.options;
                        return (a = this._getStack()) ? (h.prepareNextFile && !f.pending.length && f._prepareNextFile(),
                            a.shift()) : f.runing ? (!f.pending.length && f._getStats().numOfQueue && f._prepareNextFile(),
                            b = f.pending.shift(),
                            c = function(b) {
                                return b ? (a = e(b, h.chunked ? h.chunkSize : 0),
                                    f.stack.push(a),
                                    a.shift()) : null
                            },
                            g(b) ? (d = b.file,
                                b = b[b.pipe ? "pipe" : "then"](c),
                                b.file = d,
                                b) : c(b)) : void 0
                    },
                    _prepareNextFile: function() {
                        var a, b = this,
                            c = b.request("fetch-file"),
                            d = b.pending;
                        c && (a = b.request("before-send-file", c, function() {
                                return c.getStatus() === h.PROGRESS || c.getStatus() === h.INTERRUPT ? c : b._finishFile(c)
                            }),
                            b.owner.trigger("uploadStart", c),
                            c.setStatus(h.PROGRESS),
                            a.file = c,
                            a.done(function() {
                                var b = f.inArray(a, d);
                                ~b && d.splice(b, 1, c)
                            }),
                            a.fail(function(a) {
                                c.setStatus(h.ERROR, a),
                                    b.owner.trigger("uploadError", c, a),
                                    b.owner.trigger("uploadComplete", c)
                            }),
                            d.push(a))
                    },
                    _popBlock: function(a) {
                        var b = f.inArray(a, this.pool);
                        this.pool.splice(b, 1),
                            a.file.remaning--,
                            this.remaning--
                    },
                    _startSend: function(b) {
                        var c, d = this,
                            e = b.file;
                        return e.getStatus() !== h.PROGRESS ? void(e.getStatus() === h.INTERRUPT && d._putback(b)) : (d.pool.push(b),
                            d.remaning++,
                            b.blob = 1 === b.chunks ? e.source : e.source.slice(b.start, b.end),
                            c = d.request("before-send", b, function() {
                                e.getStatus() === h.PROGRESS ? d._doSend(b) : (d._popBlock(b),
                                    a.nextTick(d.__tick))
                            }),
                            void c.fail(function() {
                                1 === e.remaning ? d._finishFile(e).always(function() {
                                    b.percentage = 1,
                                        d._popBlock(b),
                                        d.owner.trigger("uploadComplete", e),
                                        a.nextTick(d.__tick)
                                }) : (b.percentage = 1,
                                    d.updateFileProgress(e),
                                    d._popBlock(b),
                                    a.nextTick(d.__tick))
                            }))
                    },
                    _doSend: function(b) {
                        var c, e, g = this,
                            i = g.owner,
                            j = g.options,
                            k = b.file,
                            l = new d(j),
                            m = f.extend({}, j.formData),
                            n = f.extend({}, j.headers);
                        b.transport = l,
                            l.on("destroy", function() {
                                delete b.transport,
                                    g._popBlock(b),
                                    a.nextTick(g.__tick)
                            }),
                            l.on("progress", function(a) {
                                b.percentage = a,
                                    g.updateFileProgress(k)
                            }),
                            c = function(a) {
                                var c;
                                return e = l.getResponseAsJson() || {},
                                    e._raw = l.getResponse(),
                                    c = function(b) {
                                        a = b
                                    },
                                    i.trigger("uploadAccept", b, e, c) || (a = a || "server"),
                                    a
                            },
                            l.on("error", function(a, d) {
                                b.retried = b.retried || 0,
                                    b.chunks > 1 && ~"http,abort".indexOf(a) && b.retried < j.chunkRetry ? (b.retried++,
                                        l.send()) : (d || "server" !== a || (a = c(a)),
                                        k.setStatus(h.ERROR, a),
                                        i.trigger("uploadError", k, a),
                                        i.trigger("uploadComplete", k))
                            }),
                            l.on("load", function() {
                                var a;
                                return (a = c()) ? void l.trigger("error", a, !0) : void(1 === k.remaning ? g._finishFile(k, e) : l.destroy())
                            }),
                            m = f.extend(m, {
                                id: k.id,
                                name: k.name,
                                type: k.type,
                                lastModifiedDate: k.lastModifiedDate,
                                size: k.size
                            }),
                            b.chunks > 1 && f.extend(m, {
                                chunks: b.chunks,
                                chunk: b.chunk
                            }),
                            i.trigger("uploadBeforeSend", b, m, n),
                            l.appendBlob(j.fileVal, b.blob, k.name),
                            l.append(m),
                            l.setRequestHeader(n),
                            l.send()
                    },
                    _finishFile: function(a, b, c) {
                        var d = this.owner;
                        return d.request("after-send-file", arguments, function() {
                            a.setStatus(h.COMPLETE),
                                d.trigger("uploadSuccess", a, b, c)
                        }).fail(function(b) {
                            a.getStatus() === h.PROGRESS && a.setStatus(h.ERROR, b),
                                d.trigger("uploadError", a, b)
                        }).always(function() {
                            d.trigger("uploadComplete", a)
                        })
                    },
                    updateFileProgress: function(a) {
                        var b = 0,
                            c = 0;
                        a.blocks && (f.each(a.blocks, function(a, b) {
                                c += (b.percentage || 0) * (b.end - b.start)
                            }),
                            b = c / a.size,
                            this.owner.trigger("uploadProgress", a, b || 0))
                    }
                })
        }),
        b("widgets/validator", ["base", "uploader", "file", "widgets/widget"], function(a, b, c) {
            var d, e = a.$,
                f = {};
            return d = {
                    addValidator: function(a, b) {
                        f[a] = b
                    },
                    removeValidator: function(a) {
                        delete f[a]
                    }
                },
                b.register({
                    name: "validator",
                    init: function() {
                        var b = this;
                        a.nextTick(function() {
                            e.each(f, function() {
                                this.call(b.owner)
                            })
                        })
                    }
                }),
                d.addValidator("fileNumLimit", function() {
                    var a = this,
                        b = a.options,
                        c = 0,
                        d = parseInt(b.fileNumLimit, 10),
                        e = !0;
                    d && (a.on("beforeFileQueued", function(a) {
                            return c >= d && e && (e = !1,
                                    this.trigger("error", "Q_EXCEED_NUM_LIMIT", d, a),
                                    setTimeout(function() {
                                        e = !0
                                    }, 1)),
                                c >= d ? !1 : !0
                        }),
                        a.on("fileQueued", function() {
                            c++
                        }),
                        a.on("fileDequeued", function() {
                            c--
                        }),
                        a.on("reset", function() {
                            c = 0
                        }))
                }),
                d.addValidator("fileSizeLimit", function() {
                    var a = this,
                        b = a.options,
                        c = 0,
                        d = parseInt(b.fileSizeLimit, 10),
                        e = !0;
                    d && (a.on("beforeFileQueued", function(a) {
                            var b = c + a.size > d;
                            return b && e && (e = !1,
                                    this.trigger("error", "Q_EXCEED_SIZE_LIMIT", d, a),
                                    setTimeout(function() {
                                        e = !0
                                    }, 1)),
                                b ? !1 : !0
                        }),
                        a.on("fileQueued", function(a) {
                            c += a.size
                        }),
                        a.on("fileDequeued", function(a) {
                            c -= a.size
                        }),
                        a.on("reset", function() {
                            c = 0
                        }))
                }),
                d.addValidator("fileSingleSizeLimit", function() {
                    var a = this,
                        b = a.options,
                        d = b.fileSingleSizeLimit;
                    d && a.on("beforeFileQueued", function(a) {
                        return a.size > d ? (a.setStatus(c.Status.INVALID, "exceed_size"),
                            this.trigger("error", "F_EXCEED_SIZE", d, a), !1) : void 0
                    })
                }),
                d.addValidator("duplicate", function() {
                    function a(a) {
                        for (var b, c = 0, d = 0, e = a.length; e > d; d++)
                            b = a.charCodeAt(d),
                            c = b + (c << 6) + (c << 16) - c;
                        return c
                    }
                    var b = this,
                        c = b.options,
                        d = {};
                    c.duplicate || (b.on("beforeFileQueued", function(b) {
                            var c = b.__hash || (b.__hash = a(b.name + b.size + b.lastModifiedDate));
                            return d[c] ? (this.trigger("error", "F_DUPLICATE", b), !1) : void 0
                        }),
                        b.on("fileQueued", function(a) {
                            var b = a.__hash;
                            b && (d[b] = !0)
                        }),
                        b.on("fileDequeued", function(a) {
                            var b = a.__hash;
                            b && delete d[b]
                        }),
                        b.on("reset", function() {
                            d = {}
                        }))
                }),
                d
        }),
        b("lib/md5", ["runtime/client", "mediator"], function(a, b) {
            function c() {
                a.call(this, "Md5")
            }
            return b.installTo(c.prototype),
                c.prototype.loadFromBlob = function(a) {
                    var b = this;
                    b.getRuid() && b.disconnectRuntime(),
                        b.connectRuntime(a.ruid, function() {
                            b.exec("init"),
                                b.exec("loadFromBlob", a)
                        })
                },
                c.prototype.getResult = function() {
                    return this.exec("getResult")
                },
                c
        }),
        b("widgets/md5", ["base", "uploader", "lib/md5", "lib/blob", "widgets/widget"], function(a, b, c, d) {
            return b.register({
                name: "md5",
                md5File: function(b, e, f) {
                    var g = new c,
                        h = a.Deferred(),
                        i = b instanceof d ? b : this.request("get-file", b).source;
                    return g.on("progress load", function(a) {
                            a = a || {},
                                h.notify(a.total ? a.loaded / a.total : 1)
                        }),
                        g.on("complete", function() {
                            h.resolve(g.getResult())
                        }),
                        g.on("error", function(a) {
                            h.reject(a)
                        }),
                        arguments.length > 1 && (e = e || 0,
                            f = f || 0,
                            0 > e && (e = i.size + e),
                            0 > f && (f = i.size + f),
                            f = Math.min(f, i.size),
                            i = i.slice(e, f)),
                        g.loadFromBlob(i),
                        h.promise()
                }
            })
        }),
        b("runtime/compbase", [], function() {
            function a(a, b) {
                this.owner = a,
                    this.options = a.options,
                    this.getRuntime = function() {
                        return b
                    },
                    this.getRuid = function() {
                        return b.uid
                    },
                    this.trigger = function() {
                        return a.trigger.apply(a, arguments)
                    }
            }
            return a
        }),
        b("runtime/html5/runtime", ["base", "runtime/runtime", "runtime/compbase"], function(b, c, d) {
            function e() {
                var a = {},
                    d = this,
                    e = this.destroy;
                c.apply(d, arguments),
                    d.type = f,
                    d.exec = function(c, e) {
                        var f, h = this,
                            i = h.uid,
                            j = b.slice(arguments, 2);
                        return g[c] && (f = a[i] = a[i] || new g[c](h, d),
                            f[e]) ? f[e].apply(f, j) : void 0
                    },
                    d.destroy = function() {
                        return e && e.apply(this, arguments)
                    }
            }
            var f = "html5",
                g = {};
            return b.inherits(c, {
                    constructor: e,
                    init: function() {
                        var a = this;
                        setTimeout(function() {
                            a.trigger("ready")
                        }, 1)
                    }
                }),
                e.register = function(a, c) {
                    var e = g[a] = b.inherits(d, c);
                    return e
                },
                a.Blob && a.FileReader && a.DataView && c.addRuntime(f, e),
                e
        }),
        b("runtime/html5/blob", ["runtime/html5/runtime", "lib/blob"], function(a, b) {
            return a.register("Blob", {
                slice: function(a, c) {
                    var d = this.owner.source,
                        e = d.slice || d.webkitSlice || d.mozSlice;
                    return d = e.call(d, a, c),
                        new b(this.getRuid(), d)
                }
            })
        }),
        b("runtime/html5/dnd", ["base", "runtime/html5/runtime", "lib/file"], function(a, b, c) {
            var d = a.$,
                e = "webuploader-dnd-";
            return b.register("DragAndDrop", {
                init: function() {
                    var b = this.elem = this.options.container;
                    this.dragEnterHandler = a.bindFn(this._dragEnterHandler, this),
                        this.dragOverHandler = a.bindFn(this._dragOverHandler, this),
                        this.dragLeaveHandler = a.bindFn(this._dragLeaveHandler, this),
                        this.dropHandler = a.bindFn(this._dropHandler, this),
                        this.dndOver = !1,
                        b.on("dragenter", this.dragEnterHandler),
                        b.on("dragover", this.dragOverHandler),
                        b.on("dragleave", this.dragLeaveHandler),
                        b.on("drop", this.dropHandler),
                        this.options.disableGlobalDnd && (d(document).on("dragover", this.dragOverHandler),
                            d(document).on("drop", this.dropHandler))
                },
                _dragEnterHandler: function(a) {
                    var b, c = this,
                        d = c._denied || !1;
                    return a = a.originalEvent || a,
                        c.dndOver || (c.dndOver = !0,
                            b = a.dataTransfer.items,
                            b && b.length && (c._denied = d = !c.trigger("accept", b)),
                            c.elem.addClass(e + "over"),
                            c.elem[d ? "addClass" : "removeClass"](e + "denied")),
                        a.dataTransfer.dropEffect = d ? "none" : "copy", !1
                },
                _dragOverHandler: function(a) {
                    var b = this.elem.parent().get(0);
                    return b && !d.contains(b, a.currentTarget) ? !1 : (clearTimeout(this._leaveTimer),
                        this._dragEnterHandler.call(this, a), !1)
                },
                _dragLeaveHandler: function() {
                    var a, b = this;
                    return a = function() {
                            b.dndOver = !1,
                                b.elem.removeClass(e + "over " + e + "denied")
                        },
                        clearTimeout(b._leaveTimer),
                        b._leaveTimer = setTimeout(a, 100), !1
                },
                _dropHandler: function(a) {
                    var b, f, g = this,
                        h = g.getRuid(),
                        i = g.elem.parent().get(0);
                    if (i && !d.contains(i, a.currentTarget))
                        return !1;
                    a = a.originalEvent || a,
                        b = a.dataTransfer;
                    try {
                        f = b.getData("text/html")
                    } catch (j) {}
                    return f ? void 0 : (g._getTansferFiles(b, function(a) {
                            g.trigger("drop", d.map(a, function(a) {
                                return new c(h, a)
                            }))
                        }),
                        g.dndOver = !1,
                        g.elem.removeClass(e + "over"), !1)
                },
                _getTansferFiles: function(b, c) {
                    var d, e, f, g, h, i, j, k = [],
                        l = [];
                    for (d = b.items,
                        e = b.files,
                        j = !(!d || !d[0].webkitGetAsEntry),
                        h = 0,
                        i = e.length; i > h; h++)
                        f = e[h],
                        g = d && d[h],
                        j && g.webkitGetAsEntry().isDirectory ? l.push(this._traverseDirectoryTree(g.webkitGetAsEntry(), k)) : k.push(f);
                    a.when.apply(a, l).done(function() {
                        k.length && c(k)
                    })
                },
                _traverseDirectoryTree: function(b, c) {
                    var d = a.Deferred(),
                        e = this;
                    return b.isFile ? b.file(function(a) {
                            c.push(a),
                                d.resolve()
                        }) : b.isDirectory && b.createReader().readEntries(function(b) {
                            var f, g = b.length,
                                h = [],
                                i = [];
                            for (f = 0; g > f; f++)
                                h.push(e._traverseDirectoryTree(b[f], i));
                            a.when.apply(a, h).then(function() {
                                c.push.apply(c, i),
                                    d.resolve()
                            }, d.reject)
                        }),
                        d.promise()
                },
                destroy: function() {
                    var a = this.elem;
                    a && (a.off("dragenter", this.dragEnterHandler),
                        a.off("dragover", this.dragOverHandler),
                        a.off("dragleave", this.dragLeaveHandler),
                        a.off("drop", this.dropHandler),
                        this.options.disableGlobalDnd && (d(document).off("dragover", this.dragOverHandler),
                            d(document).off("drop", this.dropHandler)))
                }
            })
        }),
        b("runtime/html5/filepaste", ["base", "runtime/html5/runtime", "lib/file"], function(a, b, c) {
            return b.register("FilePaste", {
                init: function() {
                    var b, c, d, e, f = this.options,
                        g = this.elem = f.container,
                        h = ".*";
                    if (f.accept) {
                        for (b = [],
                            c = 0,
                            d = f.accept.length; d > c; c++)
                            e = f.accept[c].mimeTypes,
                            e && b.push(e);
                        b.length && (h = b.join(","),
                            h = h.replace(/,/g, "|").replace(/\*/g, ".*"))
                    }
                    this.accept = h = new RegExp(h, "i"),
                        this.hander = a.bindFn(this._pasteHander, this),
                        g.on("paste", this.hander)
                },
                _pasteHander: function(a) {
                    var b, d, e, f, g, h = [],
                        i = this.getRuid();
                    for (a = a.originalEvent || a,
                        b = a.clipboardData.items,
                        f = 0,
                        g = b.length; g > f; f++)
                        d = b[f],
                        "file" === d.kind && (e = d.getAsFile()) && h.push(new c(i, e));
                    h.length && (a.preventDefault(),
                        a.stopPropagation(),
                        this.trigger("paste", h))
                },
                destroy: function() {
                    this.elem.off("paste", this.hander)
                }
            })
        }),
        b("runtime/html5/filepicker", ["base", "runtime/html5/runtime"], function(a, b) {
            var c = a.$;
            return b.register("FilePicker", {
                init: function() {
                    var a, b, d, e, f = this.getRuntime().getContainer(),
                        g = this,
                        h = g.owner,
                        i = g.options,
                        j = this.label = c(document.createElement("label")),
                        k = this.input = c(document.createElement("input"));
                    if (k.attr("type", "file"),
                        k.attr("name", i.name),
                        k.addClass("webuploader-element-invisible"),
                        j.on("click", function() {
                            k.trigger("click")
                        }),
                        j.css({
                            opacity: 0,
                            width: "100%",
                            height: "100%",
                            display: "block",
                            cursor: "pointer",
                            background: "#ffffff"
                        }),
                        i.multiple && k.attr("multiple", "multiple"),
                        i.accept && i.accept.length > 0) {
                        for (a = [],
                            b = 0,
                            d = i.accept.length; d > b; b++)
                            a.push(i.accept[b].mimeTypes);
                        k.attr("accept", a.join(","))
                    }
                    f.append(k),
                        f.append(j),
                        e = function(a) {
                            h.trigger(a.type)
                        },
                        k.on("change", function(a) {
                            var b, d = arguments.callee;
                            g.files = a.target.files,
                                b = this.cloneNode(!0),
                                b.value = null,
                                this.parentNode.replaceChild(b, this),
                                k.off(),
                                k = c(b).on("change", d).on("mouseenter mouseleave", e),
                                h.trigger("change")
                        }),
                        j.on("mouseenter mouseleave", e)
                },
                getFiles: function() {
                    return this.files
                },
                destroy: function() {
                    this.input.off(),
                        this.label.off()
                }
            })
        }),
        b("runtime/html5/util", ["base"], function(b) {
            var c = a.createObjectURL && a || a.URL && URL.revokeObjectURL && URL || a.webkitURL,
                d = b.noop,
                e = d;
            return c && (d = function() {
                    return c.createObjectURL.apply(c, arguments)
                },
                e = function() {
                    return c.revokeObjectURL.apply(c, arguments)
                }
            ), {
                createObjectURL: d,
                revokeObjectURL: e,
                dataURL2Blob: function(a) {
                    var b, c, d, e, f, g;
                    for (g = a.split(","),
                        b = ~g[0].indexOf("base64") ? atob(g[1]) : decodeURIComponent(g[1]),
                        d = new ArrayBuffer(b.length),
                        c = new Uint8Array(d),
                        e = 0; e < b.length; e++)
                        c[e] = b.charCodeAt(e);
                    return f = g[0].split(":")[1].split(";")[0],
                        this.arrayBufferToBlob(d, f)
                },
                dataURL2ArrayBuffer: function(a) {
                    var b, c, d, e;
                    for (e = a.split(","),
                        b = ~e[0].indexOf("base64") ? atob(e[1]) : decodeURIComponent(e[1]),
                        c = new Uint8Array(b.length),
                        d = 0; d < b.length; d++)
                        c[d] = b.charCodeAt(d);
                    return c.buffer
                },
                arrayBufferToBlob: function(b, c) {
                    var d, e = a.BlobBuilder || a.WebKitBlobBuilder;
                    return e ? (d = new e,
                        d.append(b),
                        d.getBlob(c)) : new Blob([b], c ? {
                        type: c
                    } : {})
                },
                canvasToDataUrl: function(a, b, c) {
                    return a.toDataURL(b, c / 100)
                },
                parseMeta: function(a, b) {
                    b(!1, {})
                },
                updateImageHead: function(a) {
                    return a
                }
            }
        }),
        b("runtime/html5/imagemeta", ["runtime/html5/util"], function(a) {
            var b;
            return b = {
                    parsers: {
                        65505: []
                    },
                    maxMetaDataSize: 262144,
                    parse: function(a, b) {
                        var c = this,
                            d = new FileReader;
                        d.onload = function() {
                                b(!1, c._parse(this.result)),
                                    d = d.onload = d.onerror = null
                            },
                            d.onerror = function(a) {
                                b(a.message),
                                    d = d.onload = d.onerror = null
                            },
                            a = a.slice(0, c.maxMetaDataSize),
                            d.readAsArrayBuffer(a.getSource())
                    },
                    _parse: function(a, c) {
                        if (!(a.byteLength < 6)) {
                            var d, e, f, g, h = new DataView(a),
                                i = 2,
                                j = h.byteLength - 4,
                                k = i,
                                l = {};
                            if (65496 === h.getUint16(0)) {
                                for (; j > i && (d = h.getUint16(i),
                                        d >= 65504 && 65519 >= d || 65534 === d) && (e = h.getUint16(i + 2) + 2, !(i + e > h.byteLength));) {
                                    if (f = b.parsers[d], !c && f)
                                        for (g = 0; g < f.length; g += 1)
                                            f[g].call(b, h, i, e, l);
                                    i += e,
                                        k = i
                                }
                                k > 6 && (l.imageHead = a.slice ? a.slice(2, k) : new Uint8Array(a).subarray(2, k))
                            }
                            return l
                        }
                    },
                    updateImageHead: function(a, b) {
                        var c, d, e, f = this._parse(a, !0);
                        return e = 2,
                            f.imageHead && (e = 2 + f.imageHead.byteLength),
                            d = a.slice ? a.slice(e) : new Uint8Array(a).subarray(e),
                            c = new Uint8Array(b.byteLength + 2 + d.byteLength),
                            c[0] = 255,
                            c[1] = 216,
                            c.set(new Uint8Array(b), 2),
                            c.set(new Uint8Array(d), b.byteLength + 2),
                            c.buffer
                    }
                },
                a.parseMeta = function() {
                    return b.parse.apply(b, arguments)
                },
                a.updateImageHead = function() {
                    return b.updateImageHead.apply(b, arguments)
                },
                b
        }),
        b("runtime/html5/imagemeta/exif", ["base", "runtime/html5/imagemeta"], function(a, b) {
            var c = {};
            return c.ExifMap = function() {
                    return this
                },
                c.ExifMap.prototype.map = {
                    Orientation: 274
                },
                c.ExifMap.prototype.get = function(a) {
                    return this[a] || this[this.map[a]]
                },
                c.exifTagTypes = {
                    1: {
                        getValue: function(a, b) {
                            return a.getUint8(b)
                        },
                        size: 1
                    },
                    2: {
                        getValue: function(a, b) {
                            return String.fromCharCode(a.getUint8(b))
                        },
                        size: 1,
                        ascii: !0
                    },
                    3: {
                        getValue: function(a, b, c) {
                            return a.getUint16(b, c)
                        },
                        size: 2
                    },
                    4: {
                        getValue: function(a, b, c) {
                            return a.getUint32(b, c)
                        },
                        size: 4
                    },
                    5: {
                        getValue: function(a, b, c) {
                            return a.getUint32(b, c) / a.getUint32(b + 4, c)
                        },
                        size: 8
                    },
                    9: {
                        getValue: function(a, b, c) {
                            return a.getInt32(b, c)
                        },
                        size: 4
                    },
                    10: {
                        getValue: function(a, b, c) {
                            return a.getInt32(b, c) / a.getInt32(b + 4, c)
                        },
                        size: 8
                    }
                },
                c.exifTagTypes[7] = c.exifTagTypes[1],
                c.getExifValue = function(b, d, e, f, g, h) {
                    var i, j, k, l, m, n, o = c.exifTagTypes[f];
                    if (!o)
                        return void a.log("Invalid Exif data: Invalid tag type.");
                    if (i = o.size * g,
                        j = i > 4 ? d + b.getUint32(e + 8, h) : e + 8,
                        j + i > b.byteLength)
                        return void a.log("Invalid Exif data: Invalid data offset.");
                    if (1 === g)
                        return o.getValue(b, j, h);
                    for (k = [],
                        l = 0; g > l; l += 1)
                        k[l] = o.getValue(b, j + l * o.size, h);
                    if (o.ascii) {
                        for (m = "",
                            l = 0; l < k.length && (n = k[l],
                                "\x00" !== n); l += 1)
                            m += n;
                        return m
                    }
                    return k
                },
                c.parseExifTag = function(a, b, d, e, f) {
                    var g = a.getUint16(d, e);
                    f.exif[g] = c.getExifValue(a, b, d, a.getUint16(d + 2, e), a.getUint32(d + 4, e), e)
                },
                c.parseExifTags = function(b, c, d, e, f) {
                    var g, h, i;
                    if (d + 6 > b.byteLength)
                        return void a.log("Invalid Exif data: Invalid directory offset.");
                    if (g = b.getUint16(d, e),
                        h = d + 2 + 12 * g,
                        h + 4 > b.byteLength)
                        return void a.log("Invalid Exif data: Invalid directory size.");
                    for (i = 0; g > i; i += 1)
                        this.parseExifTag(b, c, d + 2 + 12 * i, e, f);
                    return b.getUint32(h, e)
                },
                c.parseExifData = function(b, d, e, f) {
                    var g, h, i = d + 10;
                    if (1165519206 === b.getUint32(d + 4)) {
                        if (i + 8 > b.byteLength)
                            return void a.log("Invalid Exif data: Invalid segment size.");
                        if (0 !== b.getUint16(d + 8))
                            return void a.log("Invalid Exif data: Missing byte alignment offset.");
                        switch (b.getUint16(i)) {
                            case 18761:
                                g = !0;
                                break;
                            case 19789:
                                g = !1;
                                break;
                            default:
                                return void a.log("Invalid Exif data: Invalid byte alignment marker.")
                        }
                        if (42 !== b.getUint16(i + 2, g))
                            return void a.log("Invalid Exif data: Missing TIFF marker.");
                        h = b.getUint32(i + 4, g),
                            f.exif = new c.ExifMap,
                            h = c.parseExifTags(b, i, i + h, g, f)
                    }
                },
                b.parsers[65505].push(c.parseExifData),
                c
        }),
        b("runtime/html5/jpegencoder", [], function() {
            function a(a) {
                function b(a) {
                    for (var b = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], c = 0; 64 > c; c++) {
                        var d = y((b[c] * a + 50) / 100);
                        1 > d ? d = 1 : d > 255 && (d = 255),
                            z[P[c]] = d
                    }
                    for (var e = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], f = 0; 64 > f; f++) {
                        var g = y((e[f] * a + 50) / 100);
                        1 > g ? g = 1 : g > 255 && (g = 255),
                            A[P[f]] = g
                    }
                    for (var h = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], i = 0, j = 0; 8 > j; j++)
                        for (var k = 0; 8 > k; k++)
                            B[i] = 1 / (z[P[i]] * h[j] * h[k] * 8),
                            C[i] = 1 / (A[P[i]] * h[j] * h[k] * 8),
                            i++
                }

                function c(a, b) {
                    for (var c = 0, d = 0, e = new Array, f = 1; 16 >= f; f++) {
                        for (var g = 1; g <= a[f]; g++)
                            e[b[d]] = [],
                            e[b[d]][0] = c,
                            e[b[d]][1] = f,
                            d++,
                            c++;
                        c *= 2
                    }
                    return e
                }

                function d() {
                    t = c(Q, R),
                        u = c(U, V),
                        v = c(S, T),
                        w = c(W, X)
                }

                function e() {
                    for (var a = 1, b = 2, c = 1; 15 >= c; c++) {
                        for (var d = a; b > d; d++)
                            E[32767 + d] = c,
                            D[32767 + d] = [],
                            D[32767 + d][1] = c,
                            D[32767 + d][0] = d;
                        for (var e = -(b - 1); - a >= e; e++)
                            E[32767 + e] = c,
                            D[32767 + e] = [],
                            D[32767 + e][1] = c,
                            D[32767 + e][0] = b - 1 + e;
                        a <<= 1,
                            b <<= 1
                    }
                }

                function f() {
                    for (var a = 0; 256 > a; a++)
                        O[a] = 19595 * a,
                        O[a + 256 >> 0] = 38470 * a,
                        O[a + 512 >> 0] = 7471 * a + 32768,
                        O[a + 768 >> 0] = -11059 * a,
                        O[a + 1024 >> 0] = -21709 * a,
                        O[a + 1280 >> 0] = 32768 * a + 8421375,
                        O[a + 1536 >> 0] = -27439 * a,
                        O[a + 1792 >> 0] = -5329 * a
                }

                function g(a) {
                    for (var b = a[0], c = a[1] - 1; c >= 0;)
                        b & 1 << c && (I |= 1 << J),
                        c--,
                        J--,
                        0 > J && (255 == I ? (h(255),
                                h(0)) : h(I),
                            J = 7,
                            I = 0)
                }

                function h(a) {
                    H.push(N[a])
                }

                function i(a) {
                    h(a >> 8 & 255),
                        h(255 & a)
                }

                function j(a, b) {
                    var c, d, e, f, g, h, i, j, k, l = 0,
                        m = 8,
                        n = 64;
                    for (k = 0; m > k; ++k) {
                        c = a[l],
                            d = a[l + 1],
                            e = a[l + 2],
                            f = a[l + 3],
                            g = a[l + 4],
                            h = a[l + 5],
                            i = a[l + 6],
                            j = a[l + 7];
                        var o = c + j,
                            p = c - j,
                            q = d + i,
                            r = d - i,
                            s = e + h,
                            t = e - h,
                            u = f + g,
                            v = f - g,
                            w = o + u,
                            x = o - u,
                            y = q + s,
                            z = q - s;
                        a[l] = w + y,
                            a[l + 4] = w - y;
                        var A = .707106781 * (z + x);
                        a[l + 2] = x + A,
                            a[l + 6] = x - A,
                            w = v + t,
                            y = t + r,
                            z = r + p;
                        var B = .382683433 * (w - z),
                            C = .5411961 * w + B,
                            D = 1.306562965 * z + B,
                            E = .707106781 * y,
                            G = p + E,
                            H = p - E;
                        a[l + 5] = H + C,
                            a[l + 3] = H - C,
                            a[l + 1] = G + D,
                            a[l + 7] = G - D,
                            l += 8
                    }
                    for (l = 0,
                        k = 0; m > k; ++k) {
                        c = a[l],
                            d = a[l + 8],
                            e = a[l + 16],
                            f = a[l + 24],
                            g = a[l + 32],
                            h = a[l + 40],
                            i = a[l + 48],
                            j = a[l + 56];
                        var I = c + j,
                            J = c - j,
                            K = d + i,
                            L = d - i,
                            M = e + h,
                            N = e - h,
                            O = f + g,
                            P = f - g,
                            Q = I + O,
                            R = I - O,
                            S = K + M,
                            T = K - M;
                        a[l] = Q + S,
                            a[l + 32] = Q - S;
                        var U = .707106781 * (T + R);
                        a[l + 16] = R + U,
                            a[l + 48] = R - U,
                            Q = P + N,
                            S = N + L,
                            T = L + J;
                        var V = .382683433 * (Q - T),
                            W = .5411961 * Q + V,
                            X = 1.306562965 * T + V,
                            Y = .707106781 * S,
                            Z = J + Y,
                            $ = J - Y;
                        a[l + 40] = $ + W,
                            a[l + 24] = $ - W,
                            a[l + 8] = Z + X,
                            a[l + 56] = Z - X,
                            l++
                    }
                    var _;
                    for (k = 0; n > k; ++k)
                        _ = a[k] * b[k],
                        F[k] = _ > 0 ? _ + .5 | 0 : _ - .5 | 0;
                    return F
                }

                function k() {
                    i(65504),
                        i(16),
                        h(74),
                        h(70),
                        h(73),
                        h(70),
                        h(0),
                        h(1),
                        h(1),
                        h(0),
                        i(1),
                        i(1),
                        h(0),
                        h(0)
                }

                function l(a, b) {
                    i(65472),
                        i(17),
                        h(8),
                        i(b),
                        i(a),
                        h(3),
                        h(1),
                        h(17),
                        h(0),
                        h(2),
                        h(17),
                        h(1),
                        h(3),
                        h(17),
                        h(1)
                }

                function m() {
                    i(65499),
                        i(132),
                        h(0);
                    for (var a = 0; 64 > a; a++)
                        h(z[a]);
                    h(1);
                    for (var b = 0; 64 > b; b++)
                        h(A[b])
                }

                function n() {
                    i(65476),
                        i(418),
                        h(0);
                    for (var a = 0; 16 > a; a++)
                        h(Q[a + 1]);
                    for (var b = 0; 11 >= b; b++)
                        h(R[b]);
                    h(16);
                    for (var c = 0; 16 > c; c++)
                        h(S[c + 1]);
                    for (var d = 0; 161 >= d; d++)
                        h(T[d]);
                    h(1);
                    for (var e = 0; 16 > e; e++)
                        h(U[e + 1]);
                    for (var f = 0; 11 >= f; f++)
                        h(V[f]);
                    h(17);
                    for (var g = 0; 16 > g; g++)
                        h(W[g + 1]);
                    for (var j = 0; 161 >= j; j++)
                        h(X[j])
                }

                function o() {
                    i(65498),
                        i(12),
                        h(3),
                        h(1),
                        h(0),
                        h(2),
                        h(17),
                        h(3),
                        h(17),
                        h(0),
                        h(63),
                        h(0)
                }

                function p(a, b, c, d, e) {
                    for (var f, h = e[0], i = e[240], k = 16, l = 63, m = 64, n = j(a, b), o = 0; m > o; ++o)
                        G[P[o]] = n[o];
                    var p = G[0] - c;
                    c = G[0],
                        0 == p ? g(d[0]) : (f = 32767 + p,
                            g(d[E[f]]),
                            g(D[f]));
                    for (var q = 63; q > 0 && 0 == G[q]; q--)
                    ;
                    if (0 == q)
                        return g(h),
                            c;
                    for (var r, s = 1; q >= s;) {
                        for (var t = s; 0 == G[s] && q >= s; ++s)
                        ;
                        var u = s - t;
                        if (u >= k) {
                            r = u >> 4;
                            for (var v = 1; r >= v; ++v)
                                g(i);
                            u = 15 & u
                        }
                        f = 32767 + G[s],
                            g(e[(u << 4) + E[f]]),
                            g(D[f]),
                            s++
                    }
                    return q != l && g(h),
                        c
                }

                function q() {
                    for (var a = String.fromCharCode, b = 0; 256 > b; b++)
                        N[b] = a(b)
                }

                function r(a) {
                    if (0 >= a && (a = 1),
                        a > 100 && (a = 100),
                        x != a) {
                        var c = 0;
                        c = Math.floor(50 > a ? 5e3 / a : 200 - 2 * a),
                            b(c),
                            x = a
                    }
                }

                function s() {
                    a || (a = 50),
                        q(),
                        d(),
                        e(),
                        f(),
                        r(a)
                }
                var t, u, v, w, x, y = (Math.round,
                        Math.floor),
                    z = new Array(64),
                    A = new Array(64),
                    B = new Array(64),
                    C = new Array(64),
                    D = new Array(65535),
                    E = new Array(65535),
                    F = new Array(64),
                    G = new Array(64),
                    H = [],
                    I = 0,
                    J = 7,
                    K = new Array(64),
                    L = new Array(64),
                    M = new Array(64),
                    N = new Array(256),
                    O = new Array(2048),
                    P = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
                    Q = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                    R = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    S = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
                    T = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
                    U = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                    V = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    W = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
                    X = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
                this.encode = function(a, b) {
                        b && r(b),
                            H = new Array,
                            I = 0,
                            J = 7,
                            i(65496),
                            k(),
                            m(),
                            l(a.width, a.height),
                            n(),
                            o();
                        var c = 0,
                            d = 0,
                            e = 0;
                        I = 0,
                            J = 7,
                            this.encode.displayName = "_encode_";
                        for (var f, h, j, q, s, x, y, z, A, D = a.data, E = a.width, F = a.height, G = 4 * E, N = 0; F > N;) {
                            for (f = 0; G > f;) {
                                for (s = G * N + f,
                                    x = s,
                                    y = -1,
                                    z = 0,
                                    A = 0; 64 > A; A++)
                                    z = A >> 3,
                                    y = 4 * (7 & A),
                                    x = s + z * G + y,
                                    N + z >= F && (x -= G * (N + 1 + z - F)),
                                    f + y >= G && (x -= f + y - G + 4),
                                    h = D[x++],
                                    j = D[x++],
                                    q = D[x++],
                                    K[A] = (O[h] + O[j + 256 >> 0] + O[q + 512 >> 0] >> 16) - 128,
                                    L[A] = (O[h + 768 >> 0] + O[j + 1024 >> 0] + O[q + 1280 >> 0] >> 16) - 128,
                                    M[A] = (O[h + 1280 >> 0] + O[j + 1536 >> 0] + O[q + 1792 >> 0] >> 16) - 128;
                                c = p(K, B, c, t, v),
                                    d = p(L, C, d, u, w),
                                    e = p(M, C, e, u, w),
                                    f += 32
                            }
                            N += 8
                        }
                        if (J >= 0) {
                            var P = [];
                            P[1] = J + 1,
                                P[0] = (1 << J + 1) - 1,
                                g(P)
                        }
                        i(65497);
                        var Q = "data:image/jpeg;base64," + btoa(H.join(""));
                        return H = [],
                            Q
                    },
                    s()
            }
            return a.encode = function(b, c) {
                    var d = new a(c);
                    return d.encode(b)
                },
                a
        }),
        b("runtime/html5/androidpatch", ["runtime/html5/util", "runtime/html5/jpegencoder", "base"], function(a, b, c) {
            var d, e = a.canvasToDataUrl;
            a.canvasToDataUrl = function(a, f, g) {
                var h, i, j, k, l;
                return c.os.android ? ("image/jpeg" === f && "undefined" == typeof d && (k = e.apply(null, arguments),
                        l = k.split(","),
                        k = ~l[0].indexOf("base64") ? atob(l[1]) : decodeURIComponent(l[1]),
                        k = k.substring(0, 2),
                        d = 255 === k.charCodeAt(0) && 216 === k.charCodeAt(1)),
                    "image/jpeg" !== f || d ? e.apply(null, arguments) : (i = a.width,
                        j = a.height,
                        h = a.getContext("2d"),
                        b.encode(h.getImageData(0, 0, i, j), g))) : e.apply(null, arguments)
            }
        }),
        b("runtime/html5/image", ["base", "runtime/html5/runtime", "runtime/html5/util"], function(a, b, c) {
            var d = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
            return b.register("Image", {
                modified: !1,
                init: function() {
                    var a = this,
                        b = new Image;
                    b.onload = function() {
                            a._info = {
                                    type: a.type,
                                    width: this.width,
                                    height: this.height
                                },
                                a._metas || "image/jpeg" !== a.type ? a.owner.trigger("load") : c.parseMeta(a._blob, function(b, c) {
                                    a._metas = c,
                                        a.owner.trigger("load")
                                })
                        },
                        b.onerror = function() {
                            a.owner.trigger("error")
                        },
                        a._img = b
                },
                loadFromBlob: function(a) {
                    var b = this,
                        d = b._img;
                    b._blob = a,
                        b.type = a.type,
                        d.src = c.createObjectURL(a.getSource()),
                        b.owner.once("load", function() {
                            c.revokeObjectURL(d.src)
                        })
                },
                resize: function(a, b) {
                    var c = this._canvas || (this._canvas = document.createElement("canvas"));
                    this._resize(this._img, c, a, b),
                        this._blob = null,
                        this.modified = !0,
                        this.owner.trigger("complete", "resize")
                },
                crop: function(a, b, c, d, e) {
                    var f = this._canvas || (this._canvas = document.createElement("canvas")),
                        g = this.options,
                        h = this._img,
                        i = h.naturalWidth,
                        j = h.naturalHeight,
                        k = this.getOrientation();
                    e = e || 1,
                        f.width = c,
                        f.height = d,
                        g.preserveHeaders || this._rotate2Orientaion(f, k),
                        this._renderImageToCanvas(f, h, -a, -b, i * e, j * e),
                        this._blob = null,
                        this.modified = !0,
                        this.owner.trigger("complete", "crop")
                },
                getAsBlob: function(a) {
                    var b, d = this._blob,
                        e = this.options;
                    if (a = a || this.type,
                        this.modified || this.type !== a) {
                        if (b = this._canvas,
                            "image/jpeg" === a) {
                            if (d = c.canvasToDataUrl(b, a, e.quality),
                                e.preserveHeaders && this._metas && this._metas.imageHead)
                                return d = c.dataURL2ArrayBuffer(d),
                                    d = c.updateImageHead(d, this._metas.imageHead),
                                    d = c.arrayBufferToBlob(d, a)
                        } else
                            d = c.canvasToDataUrl(b, a);
                        d = c.dataURL2Blob(d)
                    }
                    return d
                },
                getAsDataUrl: function(a) {
                    var b = this.options;
                    return a = a || this.type,
                        "image/jpeg" === a ? c.canvasToDataUrl(this._canvas, a, b.quality) : this._canvas.toDataURL(a)
                },
                getOrientation: function() {
                    return this._metas && this._metas.exif && this._metas.exif.get("Orientation") || 1
                },
                info: function(a) {
                    return a ? (this._info = a,
                        this) : this._info
                },
                meta: function(a) {
                    return a ? (this._meta = a,
                        this) : this._meta
                },
                destroy: function() {
                    var a = this._canvas;
                    this._img.onload = null,
                        a && (a.getContext("2d").clearRect(0, 0, a.width, a.height),
                            a.width = a.height = 0,
                            this._canvas = null),
                        this._img.src = d,
                        this._img = this._blob = null
                },
                _resize: function(a, b, c, d) {
                    var e, f, g, h, i, j = this.options,
                        k = a.width,
                        l = a.height,
                        m = this.getOrientation();
                    ~[5, 6, 7, 8].indexOf(m) && (c ^= d,
                            d ^= c,
                            c ^= d),
                        e = Math[j.crop ? "max" : "min"](c / k, d / l),
                        j.allowMagnify || (e = Math.min(1, e)),
                        f = k * e,
                        g = l * e,
                        j.crop ? (b.width = c,
                            b.height = d) : (b.width = f,
                            b.height = g),
                        h = (b.width - f) / 2,
                        i = (b.height - g) / 2,
                        j.preserveHeaders || this._rotate2Orientaion(b, m),
                        this._renderImageToCanvas(b, a, h, i, f, g)
                },
                _rotate2Orientaion: function(a, b) {
                    var c = a.width,
                        d = a.height,
                        e = a.getContext("2d");
                    switch (b) {
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                            a.width = d,
                                a.height = c
                    }
                    switch (b) {
                        case 2:
                            e.translate(c, 0),
                                e.scale(-1, 1);
                            break;
                        case 3:
                            e.translate(c, d),
                                e.rotate(Math.PI);
                            break;
                        case 4:
                            e.translate(0, d),
                                e.scale(1, -1);
                            break;
                        case 5:
                            e.rotate(.5 * Math.PI),
                                e.scale(1, -1);
                            break;
                        case 6:
                            e.rotate(.5 * Math.PI),
                                e.translate(0, -d);
                            break;
                        case 7:
                            e.rotate(.5 * Math.PI),
                                e.translate(c, -d),
                                e.scale(-1, 1);
                            break;
                        case 8:
                            e.rotate(-.5 * Math.PI),
                                e.translate(-c, 0)
                    }
                },
                _renderImageToCanvas: function() {
                        function b(a, b, c) {
                            var d, e, f, g = document.createElement("canvas"),
                                h = g.getContext("2d"),
                                i = 0,
                                j = c,
                                k = c;
                            for (g.width = 1,
                                g.height = c,
                                h.drawImage(a, 0, 0),
                                d = h.getImageData(0, 0, 1, c).data; k > i;)
                                e = d[4 * (k - 1) + 3],
                                0 === e ? j = k : i = k,
                                k = j + i >> 1;
                            return f = k / c,
                                0 === f ? 1 : f
                        }

                        function c(a) {
                            var b, c, d = a.naturalWidth,
                                e = a.naturalHeight;
                            return d * e > 1048576 ? (b = document.createElement("canvas"),
                                b.width = b.height = 1,
                                c = b.getContext("2d"),
                                c.drawImage(a, -d + 1, 0),
                                0 === c.getImageData(0, 0, 1, 1).data[3]) : !1
                        }
                        return a.os.ios ? a.os.ios >= 7 ? function(a, c, d, e, f, g) {
                            var h = c.naturalWidth,
                                i = c.naturalHeight,
                                j = b(c, h, i);
                            return a.getContext("2d").drawImage(c, 0, 0, h * j, i * j, d, e, f, g)
                        } : function(a, d, e, f, g, h) {
                            var i, j, k, l, m, n, o, p = d.naturalWidth,
                                q = d.naturalHeight,
                                r = a.getContext("2d"),
                                s = c(d),
                                t = "image/jpeg" === this.type,
                                u = 1024,
                                v = 0,
                                w = 0;
                            for (s && (p /= 2,
                                    q /= 2),
                                r.save(),
                                i = document.createElement("canvas"),
                                i.width = i.height = u,
                                j = i.getContext("2d"),
                                k = t ? b(d, p, q) : 1,
                                l = Math.ceil(u * g / p),
                                m = Math.ceil(u * h / q / k); q > v;) {
                                for (n = 0,
                                    o = 0; p > n;)
                                    j.clearRect(0, 0, u, u),
                                    j.drawImage(d, -n, -v),
                                    r.drawImage(i, 0, 0, u, u, e + o, f + w, l, m),
                                    n += u,
                                    o += l;
                                v += u,
                                    w += m
                            }
                            r.restore(),
                                i = j = null
                        } : function(b) {
                            var c = a.slice(arguments, 1),
                                d = b.getContext("2d");
                            d.drawImage.apply(d, c)
                        }
                    }
                    ()
            })
        }),
        b("runtime/html5/transport", ["base", "runtime/html5/runtime"], function(a, b) {
            var c = a.noop,
                d = a.$;
            return b.register("Transport", {
                init: function() {
                    this._status = 0,
                        this._response = null
                },
                send: function() {
                    var b, c, e, f = this.owner,
                        g = this.options,
                        h = this._initAjax(),
                        i = f._blob,
                        j = g.server;
                    g.sendAsBinary ? (j += (/\?/.test(j) ? "&" : "?") + d.param(f._formData),
                            c = i.getSource()) : (b = new FormData,
                            d.each(f._formData, function(a, c) {
                                b.append(a, c)
                            }),
                            b.append(g.fileVal, i.getSource(), g.filename || f._formData.name || "")),
                        g.withCredentials && "withCredentials" in h ? (h.open(g.method, j, !0),
                            h.withCredentials = !0) : h.open(g.method, j),
                        this._setRequestHeader(h, g.headers),
                        c ? (h.overrideMimeType && h.overrideMimeType("application/octet-stream"),
                            a.os.android ? (e = new FileReader,
                                e.onload = function() {
                                    h.send(this.result),
                                        e = e.onload = null
                                },
                                e.readAsArrayBuffer(c)) : h.send(c)) : h.send(b)
                },
                getResponse: function() {
                    return this._response
                },
                getResponseAsJson: function() {
                    return this._parseJson(this._response)
                },
                getStatus: function() {
                    return this._status
                },
                abort: function() {
                    var a = this._xhr;
                    a && (a.upload.onprogress = c,
                        a.onreadystatechange = c,
                        a.abort(),
                        this._xhr = a = null)
                },
                destroy: function() {
                    this.abort()
                },
                _initAjax: function() {
                    var a = this,
                        b = new XMLHttpRequest,
                        d = this.options;
                    return !d.withCredentials || "withCredentials" in b || "undefined" == typeof XDomainRequest || (b = new XDomainRequest),
                        b.upload.onprogress = function(b) {
                            var c = 0;
                            return b.lengthComputable && (c = b.loaded / b.total),
                                a.trigger("progress", c)
                        },
                        b.onreadystatechange = function() {
                            return 4 === b.readyState ? (b.upload.onprogress = c,
                                b.onreadystatechange = c,
                                a._xhr = null,
                                a._status = b.status,
                                b.status >= 200 && b.status < 300 ? (a._response = b.responseText,
                                    a.trigger("load")) : b.status >= 500 && b.status < 600 ? (a._response = b.responseText,
                                    a.trigger("error", "server")) : a.trigger("error", a._status ? "http" : "abort")) : void 0
                        },
                        a._xhr = b,
                        b
                },
                _setRequestHeader: function(a, b) {
                    d.each(b, function(b, c) {
                        a.setRequestHeader(b, c)
                    })
                },
                _parseJson: function(a) {
                    var b;
                    try {
                        b = JSON.parse(a)
                    } catch (c) {
                        b = {}
                    }
                    return b
                }
            })
        }),
        b("runtime/html5/md5", ["runtime/html5/runtime"], function(a) {
            var b = function(a, b) {
                    return a + b & 4294967295
                },
                c = function(a, c, d, e, f, g) {
                    return c = b(b(c, a), b(e, g)),
                        b(c << f | c >>> 32 - f, d)
                },
                d = function(a, b, d, e, f, g, h) {
                    return c(b & d | ~b & e, a, b, f, g, h)
                },
                e = function(a, b, d, e, f, g, h) {
                    return c(b & e | d & ~e, a, b, f, g, h)
                },
                f = function(a, b, d, e, f, g, h) {
                    return c(b ^ d ^ e, a, b, f, g, h)
                },
                g = function(a, b, d, e, f, g, h) {
                    return c(d ^ (b | ~e), a, b, f, g, h)
                },
                h = function(a, c) {
                    var h = a[0],
                        i = a[1],
                        j = a[2],
                        k = a[3];
                    h = d(h, i, j, k, c[0], 7, -680876936),
                        k = d(k, h, i, j, c[1], 12, -389564586),
                        j = d(j, k, h, i, c[2], 17, 606105819),
                        i = d(i, j, k, h, c[3], 22, -1044525330),
                        h = d(h, i, j, k, c[4], 7, -176418897),
                        k = d(k, h, i, j, c[5], 12, 1200080426),
                        j = d(j, k, h, i, c[6], 17, -1473231341),
                        i = d(i, j, k, h, c[7], 22, -45705983),
                        h = d(h, i, j, k, c[8], 7, 1770035416),
                        k = d(k, h, i, j, c[9], 12, -1958414417),
                        j = d(j, k, h, i, c[10], 17, -42063),
                        i = d(i, j, k, h, c[11], 22, -1990404162),
                        h = d(h, i, j, k, c[12], 7, 1804603682),
                        k = d(k, h, i, j, c[13], 12, -40341101),
                        j = d(j, k, h, i, c[14], 17, -1502002290),
                        i = d(i, j, k, h, c[15], 22, 1236535329),
                        h = e(h, i, j, k, c[1], 5, -165796510),
                        k = e(k, h, i, j, c[6], 9, -1069501632),
                        j = e(j, k, h, i, c[11], 14, 643717713),
                        i = e(i, j, k, h, c[0], 20, -373897302),
                        h = e(h, i, j, k, c[5], 5, -701558691),
                        k = e(k, h, i, j, c[10], 9, 38016083),
                        j = e(j, k, h, i, c[15], 14, -660478335),
                        i = e(i, j, k, h, c[4], 20, -405537848),
                        h = e(h, i, j, k, c[9], 5, 568446438),
                        k = e(k, h, i, j, c[14], 9, -1019803690),
                        j = e(j, k, h, i, c[3], 14, -187363961),
                        i = e(i, j, k, h, c[8], 20, 1163531501),
                        h = e(h, i, j, k, c[13], 5, -1444681467),
                        k = e(k, h, i, j, c[2], 9, -51403784),
                        j = e(j, k, h, i, c[7], 14, 1735328473),
                        i = e(i, j, k, h, c[12], 20, -1926607734),
                        h = f(h, i, j, k, c[5], 4, -378558),
                        k = f(k, h, i, j, c[8], 11, -2022574463),
                        j = f(j, k, h, i, c[11], 16, 1839030562),
                        i = f(i, j, k, h, c[14], 23, -35309556),
                        h = f(h, i, j, k, c[1], 4, -1530992060),
                        k = f(k, h, i, j, c[4], 11, 1272893353),
                        j = f(j, k, h, i, c[7], 16, -155497632),
                        i = f(i, j, k, h, c[10], 23, -1094730640),
                        h = f(h, i, j, k, c[13], 4, 681279174),
                        k = f(k, h, i, j, c[0], 11, -358537222),
                        j = f(j, k, h, i, c[3], 16, -722521979),
                        i = f(i, j, k, h, c[6], 23, 76029189),
                        h = f(h, i, j, k, c[9], 4, -640364487),
                        k = f(k, h, i, j, c[12], 11, -421815835),
                        j = f(j, k, h, i, c[15], 16, 530742520),
                        i = f(i, j, k, h, c[2], 23, -995338651),
                        h = g(h, i, j, k, c[0], 6, -198630844),
                        k = g(k, h, i, j, c[7], 10, 1126891415),
                        j = g(j, k, h, i, c[14], 15, -1416354905),
                        i = g(i, j, k, h, c[5], 21, -57434055),
                        h = g(h, i, j, k, c[12], 6, 1700485571),
                        k = g(k, h, i, j, c[3], 10, -1894986606),
                        j = g(j, k, h, i, c[10], 15, -1051523),
                        i = g(i, j, k, h, c[1], 21, -2054922799),
                        h = g(h, i, j, k, c[8], 6, 1873313359),
                        k = g(k, h, i, j, c[15], 10, -30611744),
                        j = g(j, k, h, i, c[6], 15, -1560198380),
                        i = g(i, j, k, h, c[13], 21, 1309151649),
                        h = g(h, i, j, k, c[4], 6, -145523070),
                        k = g(k, h, i, j, c[11], 10, -1120210379),
                        j = g(j, k, h, i, c[2], 15, 718787259),
                        i = g(i, j, k, h, c[9], 21, -343485551),
                        a[0] = b(h, a[0]),
                        a[1] = b(i, a[1]),
                        a[2] = b(j, a[2]),
                        a[3] = b(k, a[3])
                },
                i = function(a) {
                    var b, c = [];
                    for (b = 0; 64 > b; b += 4)
                        c[b >> 2] = a.charCodeAt(b) + (a.charCodeAt(b + 1) << 8) + (a.charCodeAt(b + 2) << 16) + (a.charCodeAt(b + 3) << 24);
                    return c
                },
                j = function(a) {
                    var b, c = [];
                    for (b = 0; 64 > b; b += 4)
                        c[b >> 2] = a[b] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24);
                    return c
                },
                k = function(a) {
                    var b, c, d, e, f, g, j = a.length,
                        k = [1732584193, -271733879, -1732584194, 271733878];
                    for (b = 64; j >= b; b += 64)
                        h(k, i(a.substring(b - 64, b)));
                    for (a = a.substring(b - 64),
                        c = a.length,
                        d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        b = 0; c > b; b += 1)
                        d[b >> 2] |= a.charCodeAt(b) << (b % 4 << 3);
                    if (d[b >> 2] |= 128 << (b % 4 << 3),
                        b > 55)
                        for (h(k, d),
                            b = 0; 16 > b; b += 1)
                            d[b] = 0;
                    return e = 8 * j,
                        e = e.toString(16).match(/(.*?)(.{0,8})$/),
                        f = parseInt(e[2], 16),
                        g = parseInt(e[1], 16) || 0,
                        d[14] = f,
                        d[15] = g,
                        h(k, d),
                        k
                },
                l = function(a) {
                    var b, c, d, e, f, g, i = a.length,
                        k = [1732584193, -271733879, -1732584194, 271733878];
                    for (b = 64; i >= b; b += 64)
                        h(k, j(a.subarray(b - 64, b)));
                    for (a = i > b - 64 ? a.subarray(b - 64) : new Uint8Array(0),
                        c = a.length,
                        d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        b = 0; c > b; b += 1)
                        d[b >> 2] |= a[b] << (b % 4 << 3);
                    if (d[b >> 2] |= 128 << (b % 4 << 3),
                        b > 55)
                        for (h(k, d),
                            b = 0; 16 > b; b += 1)
                            d[b] = 0;
                    return e = 8 * i,
                        e = e.toString(16).match(/(.*?)(.{0,8})$/),
                        f = parseInt(e[2], 16),
                        g = parseInt(e[1], 16) || 0,
                        d[14] = f,
                        d[15] = g,
                        h(k, d),
                        k
                },
                m = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
                n = function(a) {
                    var b, c = "";
                    for (b = 0; 4 > b; b += 1)
                        c += m[a >> 8 * b + 4 & 15] + m[a >> 8 * b & 15];
                    return c
                },
                o = function(a) {
                    var b;
                    for (b = 0; b < a.length; b += 1)
                        a[b] = n(a[b]);
                    return a.join("")
                },
                p = function(a) {
                    return o(k(a))
                },
                q = function() {
                    this.reset()
                };
            return "5d41402abc4b2a76b9719d911017c592" !== p("hello") && (b = function(a, b) {
                    var c = (65535 & a) + (65535 & b),
                        d = (a >> 16) + (b >> 16) + (c >> 16);
                    return d << 16 | 65535 & c
                }),
                q.prototype.append = function(a) {
                    return /[\u0080-\uFFFF]/.test(a) && (a = unescape(encodeURIComponent(a))),
                        this.appendBinary(a),
                        this
                },
                q.prototype.appendBinary = function(a) {
                    this._buff += a,
                        this._length += a.length;
                    var b, c = this._buff.length;
                    for (b = 64; c >= b; b += 64)
                        h(this._state, i(this._buff.substring(b - 64, b)));
                    return this._buff = this._buff.substr(b - 64),
                        this
                },
                q.prototype.end = function(a) {
                    var b, c, d = this._buff,
                        e = d.length,
                        f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (b = 0; e > b; b += 1)
                        f[b >> 2] |= d.charCodeAt(b) << (b % 4 << 3);
                    return this._finish(f, e),
                        c = a ? this._state : o(this._state),
                        this.reset(),
                        c
                },
                q.prototype._finish = function(a, b) {
                    var c, d, e, f = b;
                    if (a[f >> 2] |= 128 << (f % 4 << 3),
                        f > 55)
                        for (h(this._state, a),
                            f = 0; 16 > f; f += 1)
                            a[f] = 0;
                    c = 8 * this._length,
                        c = c.toString(16).match(/(.*?)(.{0,8})$/),
                        d = parseInt(c[2], 16),
                        e = parseInt(c[1], 16) || 0,
                        a[14] = d,
                        a[15] = e,
                        h(this._state, a)
                },
                q.prototype.reset = function() {
                    return this._buff = "",
                        this._length = 0,
                        this._state = [1732584193, -271733879, -1732584194, 271733878],
                        this
                },
                q.prototype.destroy = function() {
                    delete this._state,
                        delete this._buff,
                        delete this._length
                },
                q.hash = function(a, b) {
                    /[\u0080-\uFFFF]/.test(a) && (a = unescape(encodeURIComponent(a)));
                    var c = k(a);
                    return b ? c : o(c)
                },
                q.hashBinary = function(a, b) {
                    var c = k(a);
                    return b ? c : o(c)
                },
                q.ArrayBuffer = function() {
                    this.reset()
                },
                q.ArrayBuffer.prototype.append = function(a) {
                    var b, c = this._concatArrayBuffer(this._buff, a),
                        d = c.length;
                    for (this._length += a.byteLength,
                        b = 64; d >= b; b += 64)
                        h(this._state, j(c.subarray(b - 64, b)));
                    return this._buff = d > b - 64 ? c.subarray(b - 64) : new Uint8Array(0),
                        this
                },
                q.ArrayBuffer.prototype.end = function(a) {
                    var b, c, d = this._buff,
                        e = d.length,
                        f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (b = 0; e > b; b += 1)
                        f[b >> 2] |= d[b] << (b % 4 << 3);
                    return this._finish(f, e),
                        c = a ? this._state : o(this._state),
                        this.reset(),
                        c
                },
                q.ArrayBuffer.prototype._finish = q.prototype._finish,
                q.ArrayBuffer.prototype.reset = function() {
                    return this._buff = new Uint8Array(0),
                        this._length = 0,
                        this._state = [1732584193, -271733879, -1732584194, 271733878],
                        this
                },
                q.ArrayBuffer.prototype.destroy = q.prototype.destroy,
                q.ArrayBuffer.prototype._concatArrayBuffer = function(a, b) {
                    var c = a.length,
                        d = new Uint8Array(c + b.byteLength);
                    return d.set(a),
                        d.set(new Uint8Array(b), c),
                        d
                },
                q.ArrayBuffer.hash = function(a, b) {
                    var c = l(new Uint8Array(a));
                    return b ? c : o(c)
                },
                a.register("Md5", {
                    init: function() {},
                    loadFromBlob: function(a) {
                        var b, c, d = a.getSource(),
                            e = 2097152,
                            f = Math.ceil(d.size / e),
                            g = 0,
                            h = this.owner,
                            i = new q.ArrayBuffer,
                            j = this,
                            k = d.mozSlice || d.webkitSlice || d.slice;
                        c = new FileReader, (b = function() {
                            var l, m;
                            l = g * e,
                                m = Math.min(l + e, d.size),
                                c.onload = function(b) {
                                    i.append(b.target.result),
                                        h.trigger("progress", {
                                            total: a.size,
                                            loaded: m
                                        })
                                },
                                c.onloadend = function() {
                                    c.onloadend = c.onload = null,
                                        ++g < f ? setTimeout(b, 1) : setTimeout(function() {
                                            h.trigger("load"),
                                                j.result = i.end(),
                                                b = a = d = i = null,
                                                h.trigger("complete")
                                        }, 50)
                                },
                                c.readAsArrayBuffer(k.call(d, l, m))
                        })()
                    },
                    getResult: function() {
                        return this.result
                    }
                })
        }),
        b("runtime/flash/runtime", ["base", "runtime/runtime", "runtime/compbase"], function(b, c, d) {
            function e() {
                var a;
                try {
                    a = navigator.plugins["Shockwave Flash"],
                        a = a.description
                } catch (b) {
                    try {
                        a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
                    } catch (c) {
                        a = "0.0"
                    }
                }
                return a = a.match(/\d+/g),
                    parseFloat(a[0] + "." + a[1], 10)
            }

            function f() {
                function d(a, b) {
                    var c, d, e = a.type || a;
                    c = e.split("::"),
                        d = c[0],
                        e = c[1],
                        "Ready" === e && d === j.uid ? j.trigger("ready") : f[d] && f[d].trigger(e.toLowerCase(), a, b)
                }
                var e = {},
                    f = {},
                    g = this.destroy,
                    j = this,
                    k = b.guid("webuploader_");
                c.apply(j, arguments),
                    j.type = h,
                    j.exec = function(a, c) {
                        var d, g = this,
                            h = g.uid,
                            k = b.slice(arguments, 2);
                        return f[h] = g,
                            i[a] && (e[h] || (e[h] = new i[a](g, j)),
                                d = e[h],
                                d[c]) ? d[c].apply(d, k) : j.flashExec.apply(g, arguments)
                    },
                    a[k] = function() {
                        var a = arguments;
                        setTimeout(function() {
                            d.apply(null, a)
                        }, 1)
                    },
                    this.jsreciver = k,
                    this.destroy = function() {
                        return g && g.apply(this, arguments)
                    },
                    this.flashExec = function(a, c) {
                        var d = j.getFlash(),
                            e = b.slice(arguments, 2);
                        return d.exec(this.uid, a, c, e)
                    }
            }
            var g = b.$,
                h = "flash",
                i = {};
            return b.inherits(c, {
                    constructor: f,
                    init: function() {
                        var a, c = this.getContainer(),
                            d = this.options;
                        c.css({
                                position: "absolute",
                                top: "-8px",
                                left: "-8px",
                                width: "9px",
                                height: "9px",
                                overflow: "hidden"
                            }),
                            a = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + d.swf + '" ',
                            b.browser.ie && (a += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),
                            a += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + d.swf + '" /><param name="flashvars" value="uid=' + this.uid + "&jsreciver=" + this.jsreciver + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>',
                            c.html(a)
                    },
                    getFlash: function() {
                        return this._flash ? this._flash : (this._flash = g("#" + this.uid).get(0),
                            this._flash)
                    }
                }),
                f.register = function(a, c) {
                    return c = i[a] = b.inherits(d, g.extend({
                        flashExec: function() {
                            var a = this.owner,
                                b = this.getRuntime();
                            return b.flashExec.apply(a, arguments)
                        }
                    }, c))
                },
                e() >= 11.4 && c.addRuntime(h, f),
                f
        }),
        b("runtime/flash/filepicker", ["base", "runtime/flash/runtime"], function(a, b) {
            var c = a.$;
            return b.register("FilePicker", {
                init: function(a) {
                    var b, d, e = c.extend({}, a);
                    for (b = e.accept && e.accept.length,
                        d = 0; b > d; d++)
                        e.accept[d].title || (e.accept[d].title = "Files");
                    delete e.button,
                        delete e.id,
                        delete e.container,
                        this.flashExec("FilePicker", "init", e)
                },
                destroy: function() {
                    this.flashExec("FilePicker", "destroy")
                }
            })
        }),
        b("runtime/flash/image", ["runtime/flash/runtime"], function(a) {
            return a.register("Image", {
                loadFromBlob: function(a) {
                    var b = this.owner;
                    b.info() && this.flashExec("Image", "info", b.info()),
                        b.meta() && this.flashExec("Image", "meta", b.meta()),
                        this.flashExec("Image", "loadFromBlob", a.uid)
                }
            })
        }),
        b("runtime/flash/transport", ["base", "runtime/flash/runtime", "runtime/client"], function(b, c, d) {
            var e = b.$;
            return c.register("Transport", {
                init: function() {
                    this._status = 0,
                        this._response = null,
                        this._responseJson = null
                },
                send: function() {
                    var a, b = this.owner,
                        c = this.options,
                        d = this._initAjax(),
                        f = b._blob,
                        g = c.server;
                    d.connectRuntime(f.ruid),
                        c.sendAsBinary ? (g += (/\?/.test(g) ? "&" : "?") + e.param(b._formData),
                            a = f.uid) : (e.each(b._formData, function(a, b) {
                                d.exec("append", a, b)
                            }),
                            d.exec("appendBlob", c.fileVal, f.uid, c.filename || b._formData.name || "")),
                        this._setRequestHeader(d, c.headers),
                        d.exec("send", {
                            method: c.method,
                            url: g,
                            forceURLStream: c.forceURLStream,
                            mimeType: "application/octet-stream"
                        }, a)
                },
                getStatus: function() {
                    return this._status
                },
                getResponse: function() {
                    return this._response || ""
                },
                getResponseAsJson: function() {
                    return this._responseJson
                },
                abort: function() {
                    var a = this._xhr;
                    a && (a.exec("abort"),
                        a.destroy(),
                        this._xhr = a = null)
                },
                destroy: function() {
                    this.abort()
                },
                _initAjax: function() {
                    var b = this,
                        c = new d("XMLHttpRequest");
                    return c.on("uploadprogress progress", function(a) {
                            var c = a.loaded / a.total;
                            return c = Math.min(1, Math.max(0, c)),
                                b.trigger("progress", c)
                        }),
                        c.on("load", function() {
                            var d, e = c.exec("getStatus"),
                                f = !1,
                                g = "";
                            return c.off(),
                                b._xhr = null,
                                e >= 200 && 300 > e ? f = !0 : e >= 500 && 600 > e ? (f = !0,
                                    g = "server") : g = "http",
                                f && (b._response = c.exec("getResponse"),
                                    b._response = decodeURIComponent(b._response),
                                    d = a.JSON && a.JSON.parse || function(a) {
                                        try {
                                            return new Function("return " + a).call()
                                        } catch (b) {
                                            return {}
                                        }
                                    },
                                    b._responseJson = b._response ? d(b._response) : {}),
                                c.destroy(),
                                c = null,
                                g ? b.trigger("error", g) : b.trigger("load")
                        }),
                        c.on("error", function() {
                            c.off(),
                                b._xhr = null,
                                b.trigger("error", "http")
                        }),
                        b._xhr = c,
                        c
                },
                _setRequestHeader: function(a, b) {
                    e.each(b, function(b, c) {
                        a.exec("setRequestHeader", b, c)
                    })
                }
            })
        }),
        b("runtime/flash/blob", ["runtime/flash/runtime", "lib/blob"], function(a, b) {
            return a.register("Blob", {
                slice: function(a, c) {
                    var d = this.flashExec("Blob", "slice", a, c);
                    return new b(d.uid, d)
                }
            })
        }),
        b("runtime/flash/md5", ["runtime/flash/runtime"], function(a) {
            return a.register("Md5", {
                init: function() {},
                loadFromBlob: function(a) {
                    return this.flashExec("Md5", "loadFromBlob", a.uid)
                }
            })
        }),
        b("preset/all", ["base", "widgets/filednd", "widgets/filepaste", "widgets/filepicker", "widgets/image", "widgets/queue", "widgets/runtime", "widgets/upload", "widgets/validator", "widgets/md5", "runtime/html5/blob", "runtime/html5/dnd", "runtime/html5/filepaste", "runtime/html5/filepicker", "runtime/html5/imagemeta/exif", "runtime/html5/androidpatch", "runtime/html5/image", "runtime/html5/transport", "runtime/html5/md5", "runtime/flash/filepicker", "runtime/flash/image", "runtime/flash/transport", "runtime/flash/blob", "runtime/flash/md5"], function(a) {
            return a
        }),
        b("webuploader", ["preset/all"], function(a) {
            return a
        }),
        c("webuploader")
});;