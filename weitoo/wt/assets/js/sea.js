! function(e, t) {
    function r(e) {
        return function(t) {
            return Object.prototype.toString.call(t) === "[object " + e + "]"
        }
    }

    function n() {
        return m++
    }

    function i(e, t) {
        var r;
        if (r = e.charAt(0),
            O.test(e))
            r = e;
        else if ("." === r)
            for (r = (t ? t.match(A)[0] : h.cwd) + e,
                r = r.replace(_, "/"); r.match(j);)
                r = r.replace(j, "/");
        else
            r = "/" === r ? (r = h.cwd.match(S)) ? r[0] + e.substring(1) : e : h.base + e;
        return r
    }

    function s(e, t) {
        if (!e)
            return "";
        var r, n = e,
            s = h.alias,
            n = e = s && p(s[n]) ? s[n] : n,
            s = h.paths;
        s && (r = n.match(T)) && p(s[r[1]]) && (n = s[r[1]] + r[2]),
            r = n;
        var a = h.vars;
        a && -1 < r.indexOf("{") && (r = r.replace(q, function(e, t) {
                return p(a[t]) ? a[t] : e
            })),
            n = r.length - 1,
            e = "#" === r.charAt(n) ? r.substring(0, n) : ".js" === r.substring(n - 2) || 0 < r.indexOf("?") || ".css" === r.substring(n - 3) ? r : r + ".js",
            r = i(e, t);
        var n = h.map,
            o = r;
        if (n)
            for (var s = 0, u = n.length; u > s && (o = n[s],
                    o = g(o) ? o(r) || r : r.replace(o[0], o[1]), !(o !== r)); s++)
        ;
        return o
    }

    function a(e, t) {
        var r, n = e.sheet;
        if (k)
            n && (r = !0);
        else if (n)
            try {
                n.cssRules && (r = !0)
            } catch (i) {
                "NS_ERROR_DOM_SECURITY_ERR" === i.name && (r = !0)
            }
        setTimeout(function() {
            r ? t() : a(e, t)
        }, 20)
    }

    function o() {
        if (E)
            return E;
        if (b && "interactive" === b.readyState)
            return b;
        for (var e = $.getElementsByTagName("script"), t = e.length - 1; t >= 0; t--) {
            var r = e[t];
            if ("interactive" === r.readyState)
                return b = r
        }
    }

    function u(e, t) {
        this.uri = e,
            this.dependencies = t || [],
            this.exports = null,
            this.status = 0,
            this._waitings = {},
            this._remain = 0
    }

    function c(e, t) {
        var r = {
            id: e,
            refUri: t
        };
        return w("resolve", r),
            r.uri || s(r.id, t)
    }

    function f(e, t) {
        var r = u.get(e);
        r.status < P.SAVED && (r.id = t.id || e,
            r.dependencies = t.deps || [],
            r.factory = t.factory,
            r.status = P.SAVED)
    }
    if (!e.seajs) {
        var l = e.seajs = {
                version: "2.1.0"
            },
            h = l.data = {},
            d = r("Object"),
            p = r("String"),
            v = Array.isArray || r("Array"),
            g = r("Function"),
            m = 0,
            y = h.events = {};
        l.on = function(e, t) {
                return (y[e] || (y[e] = [])).push(t),
                    l
            },
            l.off = function(e, t) {
                if (!e && !t)
                    return y = h.events = {},
                        l;
                var r = y[e];
                if (r)
                    if (t)
                        for (var n = r.length - 1; n >= 0; n--)
                            r[n] === t && r.splice(n, 1);
                    else
                        delete y[e];
                return l
            };
        var E, b, x, w = l.emit = function(e, t) {
                var r, n = y[e];
                if (n)
                    for (n = n.slice(); r = n.shift();)
                        r(t);
                return l
            },
            A = /[^?#]*\//,
            _ = /\/\.\//g,
            j = /\/[^/]+\/\.\.\//,
            T = /^([^/:]+)(\/.+)$/,
            q = /{([^{]+)}/g,
            O = /^\/\/.|:\//,
            S = /^.*?\/\/.*?\//,
            D = document,
            U = location,
            N = U.href.match(A)[0],
            C = D.getElementsByTagName("script"),
            C = D.getElementById("seajsnode") || C[C.length - 1],
            C = ((C.hasAttribute ? C.src : C.getAttribute("src", 4)) || N).match(A)[0],
            $ = D.getElementsByTagName("head")[0] || D.documentElement,
            I = $.getElementsByTagName("base")[0],
            R = /\.css(?:\?|$)/i,
            G = /^(?:loaded|complete|undefined)$/,
            k = 536 > 1 * navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/, "$1"),
            H = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,
            L = /\\\\/g,
            X = l.cache = {},
            B = {},
            F = {},
            M = {},
            P = u.STATUS = {
                FETCHING: 1,
                SAVED: 2,
                LOADING: 3,
                LOADED: 4,
                EXECUTING: 5,
                EXECUTED: 6
            };
        u.prototype.resolve = function() {
                for (var e = this.dependencies, t = [], r = 0, n = e.length; n > r; r++)
                    t[r] = c(e[r], this.uri);
                return t
            },
            u.prototype.load = function() {
                if (!(this.status >= P.LOADING)) {
                    this.status = P.LOADING;
                    var e = this.resolve();
                    w("load", e);
                    for (var t, r = this._remain = e.length, n = 0; r > n; n++)
                        t = u.get(e[n]),
                        t.status < P.LOADED ? t._waitings[this.uri] = (t._waitings[this.uri] || 0) + 1 : this._remain--;
                    if (0 === this._remain)
                        this.onload();
                    else {
                        for (var i = {}, n = 0; r > n; n++)
                            t = X[e[n]],
                            t.status < P.FETCHING ? t.fetch(i) : t.status === P.SAVED && t.load();
                        for (var s in i)
                            i.hasOwnProperty(s) && i[s]()
                    }
                }
            },
            u.prototype.onload = function() {
                this.status = P.LOADED,
                    this.callback && this.callback();
                var e, t, r = this._waitings;
                for (e in r)
                    r.hasOwnProperty(e) && (t = X[e],
                        t._remain -= r[e],
                        0 === t._remain) && t.onload();
                delete this._waitings,
                    delete this._remain
            },
            u.prototype.fetch = function(e) {
                function t() {
                    var e = i.requestUri,
                        t = i.onRequest,
                        r = i.charset,
                        n = R.test(e),
                        s = D.createElement(n ? "link" : "script");
                    r && (r = g(r) ? r(e) : r) && (s.charset = r);
                    var o = s;
                    !n || !k && "onload" in o ? o.onload = o.onerror = o.onreadystatechange = function() {
                            G.test(o.readyState) && (o.onload = o.onerror = o.onreadystatechange = null, !n && !h.debug && $.removeChild(o),
                                o = null,
                                t())
                        } : setTimeout(function() {
                            a(o, t)
                        }, 1),
                        n ? (s.rel = "stylesheet",
                            s.href = e) : (s.async = !0,
                            s.src = e),
                        E = s,
                        I ? $.insertBefore(s, I) : $.appendChild(s),
                        E = null
                }

                function r() {
                    delete B[s],
                        F[s] = !0,
                        x && (f(n, x),
                            x = null);
                    var e, t = M[s];
                    for (delete M[s]; e = t.shift();)
                        e.load()
                }
                var n = this.uri;
                this.status = P.FETCHING;
                var i = {
                    uri: n
                };
                w("fetch", i);
                var s = i.requestUri || n;
                !s || F[s] ? this.load() : B[s] ? M[s].push(this) : (B[s] = !0,
                    M[s] = [this],
                    w("request", i = {
                        uri: n,
                        requestUri: s,
                        onRequest: r,
                        charset: h.charset
                    }),
                    i.requested || (e ? e[i.requestUri] = t : t()))
            },
            u.prototype.exec = function() {
                function e(t) {
                    return X[e.resolve(t)].exec()
                }
                if (this.status >= P.EXECUTING)
                    return this.exports;
                this.status = P.EXECUTING;
                var r = this.uri;
                e.resolve = function(e) {
                        return c(e, r)
                    },
                    e.async = function(t, n) {
                        return u.use(t, n, r + "_async_" + m++),
                            e
                    };
                var n = this.factory,
                    n = g(n) ? n(e, this.exports = {}, this) : n;
                return n === t && (n = this.exports),
                    null === n && !R.test(r) && w("error", this),
                    delete this.factory,
                    this.exports = n,
                    this.status = P.EXECUTED,
                    w("exec", this),
                    n
            },
            u.define = function(e, r, n) {
                var i = arguments.length;
                if (1 === i ? (n = e,
                        e = t) : 2 === i && (n = r,
                        v(e) ? (r = e,
                            e = t) : r = t), !v(r) && g(n)) {
                    var s = [];
                    n.toString().replace(L, "").replace(H, function(e, t, r) {
                            r && s.push(r)
                        }),
                        r = s
                }
                if (i = {
                        id: e,
                        uri: c(e),
                        deps: r,
                        factory: n
                    }, !i.uri && D.attachEvent) {
                    var a = o();
                    a && (i.uri = a.src)
                }
                w("define", i),
                    i.uri ? f(i.uri, i) : x = i
            },
            u.get = function(e, t) {
                return X[e] || (X[e] = new u(e, t))
            },
            u.use = function(t, r, n) {
                var i = u.get(n, v(t) ? t : [t]);
                i.callback = function() {
                        for (var t = [], n = i.resolve(), s = 0, a = n.length; a > s; s++)
                            t[s] = X[n[s]].exec();
                        r && r.apply(e, t),
                            delete i.callback
                    },
                    i.load()
            },
            u.preload = function(e) {
                var t = h.preload,
                    r = t.length;
                r ? u.use(t, function() {
                    t.splice(0, r),
                        u.preload(e)
                }, h.cwd + "_preload_" + m++) : e()
            },
            l.use = function(e, t) {
                return u.preload(function() {
                        u.use(e, t, h.cwd + "_use_" + m++)
                    }),
                    l
            },
            u.define.cmd = {},
            e.define = u.define,
            l.Module = u,
            h.fetchedList = F,
            h.cid = n,
            l.resolve = s,
            l.require = function(e) {
                return (X[c(e)] || {}).exports
            },
            h.base = (C.match(/^(.+?\/)(\?\?)?(seajs\/)+/) || ["", C])[1],
            h.dir = C,
            h.cwd = N,
            h.charset = "utf-8";
        var N = h,
            V = [],
            U = U.search.replace(/(seajs-\w+)(&|$)/g, "$1=1$2"),
            U = U + (" " + D.cookie);
        U.replace(/(seajs-\w+)=1/g, function(e, t) {
                V.push(t)
            }),
            N.preload = V,
            l.config = function(e) {
                for (var t in e) {
                    var r = e[t],
                        n = h[t];
                    if (n && d(n))
                        for (var s in r)
                            n[s] = r[s];
                    else
                        v(n) ? r = n.concat(r) : "base" === t && ("/" === r.slice(-1) || (r += "/"),
                            r = i(r)),
                        h[t] = r
                }
                return w("config", e),
                    l
            }
    }
}
(this), ! function(e, t) {
    function r(e) {
        c[e.name] = e
    }

    function n(e) {
        return e && c.hasOwnProperty(e)
    }

    function i(e) {
        for (var t in c)
            if (n(t)) {
                var r = "," + c[t].ext.join(",") + ",";
                if (r.indexOf("," + e + ",") > -1)
                    return t
            }
    }

    function s(e, r) {
        var n = t.ActiveXObject ? new t.ActiveXObject("Microsoft.XMLHTTP") : new t.XMLHttpRequest;
        return n.open("GET", e, !0),
            n.onreadystatechange = function() {
                if (4 === n.readyState) {
                    if (n.status > 399 && n.status < 600)
                        throw new Error("Could not load: " + e + ", status = " + n.status);
                    r(n.responseText)
                }
            },
            n.send(null)
    }

    function a(e) {
        e && /\S/.test(e) && (t.execScript || function(e) {
            (t.eval || eval).call(t, e)
        })(e)
    }

    function o(e) {
        return e.replace(/(["\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
    }

    function u(e) {
        return e.replace(/\?.*$/, "")
    }
    var c = {},
        f = {};
    r({
            name: "text",
            ext: [".tpl", ".html"],
            exec: function(e, t) {
                a('define("' + e + '#", [], "' + o(t) + '")')
            }
        }),
        r({
            name: "json",
            ext: [".json"],
            exec: function(e, t) {
                a('define("' + e + '#", [], ' + t + ")")
            }
        }),
        r({
            name: "handlebars",
            ext: [".handlebars"],
            exec: function(e, t) {
                var r = ['define("' + e + '#", ["handlebars"], function(require, exports, module) {', '  var source = "' + o(t) + '"', '  var Handlebars = require("handlebars")', "  module.exports = function(data, options) {", "    var helpers = (options || {}).helpers || {}", "    for (var key in helpers) {", "      Handlebars.registerHelper(key, helpers[key])", "    }", "    return Handlebars.compile(source)(data)", "  }", "})"].join("\n");
                a(r)
            }
        }),
        e.on("resolve", function(t) {
            var r = t.id;
            if (!r)
                return "";
            var s, a;
            (a = r.match(/^(\w+)!(.+)$/)) && n(a[1]) ? (s = a[1],
                    r = a[2]) : (a = r.match(/[^?]+(\.\w+)(?:\?|#|$)/)) && (s = i(a[1])),
                s && -1 === r.indexOf("#") && (r += "#");
            var o = e.resolve(r, t.refUri);
            s && (f[o] = s),
                t.uri = o
        }),
        e.on("request", function(e) {
            var t = f[e.uri];
            t && (s(e.requestUri, function(r) {
                    c[t].exec(e.uri, r),
                        e.onRequest()
                }),
                e.requested = !0)
        }),
        "object" == typeof process && (s = function(e, t) {
            t(require("fs").readFileSync(u(e), "utf8"))
        }),
        define("seajs-text", [], {})
}
(seajs, this),
seajs.on("fetch", function(e) {
    var t = /(.*)\/sea-modules\/app\/(.*)/,
        r = e.uri.match(t);
    r && location.href.indexOf("?dev") > 0 && (e.requestUri = r[1] + "/app/" + r[2])
});