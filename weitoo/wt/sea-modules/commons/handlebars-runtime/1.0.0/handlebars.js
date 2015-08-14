define("commons/handlebars-runtime/1.0.0/handlebars", [], function(a, b, c) {
    var d = {};
    d.VERSION = "1.0.0", d.COMPILER_REVISION = 4, d.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: ">= 1.0.0"
    }, d.helpers = {}, d.partials = {};
    var e = Object.prototype.toString,
        f = "[object Function]",
        g = "[object Object]";
    d.registerHelper = function(a, b, c) {
        if (e.call(a) === g) {
            if (c || b) throw new d.Exception("Arg not supported with multiple helpers");
            d.Utils.extend(this.helpers, a)
        } else c && (b.not = c), this.helpers[a] = b
    }, d.registerPartial = function(a, b) {
        e.call(a) === g ? d.Utils.extend(this.partials, a) : this.partials[a] = b
    }, d.registerHelper("helperMissing", function(a) {
        if (2 === arguments.length) return void 0;
        throw new Error("Missing helper: '" + a + "'")
    }), d.registerHelper("blockHelperMissing", function(a, b) {
        var c = b.inverse || function() {},
            g = b.fn,
            h = e.call(a);
        return h === f && (a = a.call(this)), a === !0 ? g(this) : a === !1 || null == a ? c(this) : "[object Array]" === h ? a.length > 0 ? d.helpers.each(a, b) : c(this) : g(a)
    }), d.K = function() {}, d.createFrame = Object.create || function(a) {
        d.K.prototype = a;
        var b = new d.K;
        return d.K.prototype = null, b
    }, d.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
        },
        log: function(a, b) {
            if (d.logger.level <= a) {
                var c = d.logger.methodMap[a];
                "undefined" != typeof console && console[c] && console[c].call(console, b)
            }
        }
    }, d.log = function(a, b) {
        d.logger.log(a, b)
    }, d.registerHelper("each", function(a, b) {
        var j, c = b.fn,
            g = b.inverse,
            h = 0,
            i = "",
            k = e.call(a);
        if (k === f && (a = a.call(this)), b.data && (j = d.createFrame(b.data)), a && "object" == typeof a)
            if (a instanceof Array)
                for (var l = a.length; l > h; h++) j && (j.index = h), i += c(a[h], {
                    data: j
                });
            else
                for (var m in a) a.hasOwnProperty(m) && (j && (j.key = m), i += c(a[m], {
                    data: j
                }), h++);
        return 0 === h && (i = g(this)), i
    }), d.registerHelper("if", function(a, b) {
        var c = e.call(a);
        return c === f && (a = a.call(this)), !a || d.Utils.isEmpty(a) ? b.inverse(this) : b.fn(this)
    }), d.registerHelper("unless", function(a, b) {
        return d.helpers["if"].call(this, a, {
            fn: b.inverse,
            inverse: b.fn
        })
    }), d.registerHelper("with", function(a, b) {
        var c = e.call(a);
        return c === f && (a = a.call(this)), d.Utils.isEmpty(a) ? void 0 : b.fn(a)
    }), d.registerHelper("log", function(a, b) {
        var c = b.data && null != b.data.level ? parseInt(b.data.level, 10) : 1;
        d.log(c, a)
    });
    var h = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    d.Exception = function() {
        for (var b = Error.prototype.constructor.apply(this, arguments), c = 0; c < h.length; c++) this[h[c]] = b[h[c]]
    }, d.Exception.prototype = new Error, d.SafeString = function(a) {
        this.string = a
    }, d.SafeString.prototype.toString = function() {
        return this.string.toString()
    };
    var i = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        j = /[&<>"'`]/g,
        k = /[&<>"'`]/,
        l = function(a) {
            return i[a] || "&amp;"
        };
    d.Utils = {
        extend: function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        escapeExpression: function(a) {
            return a instanceof d.SafeString ? a.toString() : null == a || a === !1 ? "" : (a = a.toString(), k.test(a) ? a.replace(j, l) : a)
        },
        isEmpty: function(a) {
            return a || 0 === a ? "[object Array]" === e.call(a) && 0 === a.length ? !0 : !1 : !0
        }
    }, d.VM = {
        template: function(a) {
            var b = {
                escapeExpression: d.Utils.escapeExpression,
                invokePartial: d.VM.invokePartial,
                programs: [],
                program: function(a, b, c) {
                    var e = this.programs[a];
                    return c ? e = d.VM.program(a, b, c) : e || (e = this.programs[a] = d.VM.program(a, b)), e
                },
                merge: function(a, b) {
                    var c = a || b;
                    return a && b && (c = {}, d.Utils.extend(c, b), d.Utils.extend(c, a)), c
                },
                programWithDepth: d.VM.programWithDepth,
                noop: d.VM.noop,
                compilerInfo: null
            };
            return function(c, e) {
                e = e || {};
                var f = a.call(b, d, c, e.helpers, e.partials, e.data),
                    g = b.compilerInfo || [],
                    h = g[0] || 1,
                    i = d.COMPILER_REVISION;
                if (h !== i) {
                    if (i > h) {
                        var j = d.REVISION_CHANGES[i],
                            k = d.REVISION_CHANGES[h];
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + j + ") or downgrade your runtime to an older version (" + k + ")."
                    }
                    throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + g[1] + ")."
                }
                return f
            }
        },
        programWithDepth: function(a, b, c) {
            var d = Array.prototype.slice.call(arguments, 3),
                e = function(a, e) {
                    return e = e || {}, b.apply(this, [a, e.data || c].concat(d))
                };
            return e.program = a, e.depth = d.length, e
        },
        program: function(a, b, c) {
            var d = function(a, d) {
                return d = d || {}, b(a, d.data || c)
            };
            return d.program = a, d.depth = 0, d
        },
        noop: function() {
            return ""
        },
        invokePartial: function(a, b, c, e, f, g) {
            var h = {
                helpers: e,
                partials: f,
                data: g
            };
            if (void 0 === a) throw new d.Exception("The partial " + b + " could not be found");
            if (a instanceof Function) return a(c, h);
            if (d.compile) return f[b] = d.compile(a, {
                data: void 0 !== g
            }), f[b](c, h);
            throw new d.Exception("The partial " + b + " could not be compiled when running in runtime-only mode")
        }
    }, d.template = d.VM.template, "object" == typeof c && c.exports ? c.exports = d : "function" == typeof define && define.amd ? define(function() {
        return d
    }) : this.Handlebars = d, b.Handlebars = d
});