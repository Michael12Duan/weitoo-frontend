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
    var c = this._,
        d = this.jQuery;
    this._ = a("underscore"), this.jQuery = a("$"),
        function() {
            var i, c = this,
                d = c.Backbone,
                e = [],
                f = e.push,
                g = e.slice,
                h = e.splice;
            i = "undefined" != typeof b ? b : c.Backbone = {}, i.VERSION = "1.0.0";
            var j = c._;
            j || "undefined" == typeof a || (j = a("underscore")), i.$ = c.jQuery || c.Zepto || c.ender || c.$, i.noConflict = function() {
                return c.Backbone = d, this
            }, i.emulateHTTP = !1, i.emulateJSON = !1;
            var k = i.Events = {
                    on: function(a, b, c) {
                        if (!m(this, "on", a, [b, c]) || !b) return this;
                        this._events || (this._events = {});
                        var d = this._events[a] || (this._events[a] = []);
                        return d.push({
                            callback: b,
                            context: c,
                            ctx: c || this
                        }), this
                    },
                    once: function(a, b, c) {
                        if (!m(this, "once", a, [b, c]) || !b) return this;
                        var d = this,
                            e = j.once(function() {
                                d.off(a, e), b.apply(this, arguments)
                            });
                        return e._callback = b, this.on(a, e, c)
                    },
                    off: function(a, b, c) {
                        var d, e, f, g, h, i, k, l;
                        if (!this._events || !m(this, "off", a, [b, c])) return this;
                        if (!a && !b && !c) return this._events = {}, this;
                        for (g = a ? [a] : j.keys(this._events), h = 0, i = g.length; i > h; h++)
                            if (a = g[h], f = this._events[a]) {
                                if (this._events[a] = d = [], b || c)
                                    for (k = 0, l = f.length; l > k; k++) e = f[k], (b && b !== e.callback && b !== e.callback._callback || c && c !== e.context) && d.push(e);
                                d.length || delete this._events[a]
                            }
                        return this
                    },
                    trigger: function(a) {
                        if (!this._events) return this;
                        var b = g.call(arguments, 1);
                        if (!m(this, "trigger", a, b)) return this;
                        var c = this._events[a],
                            d = this._events.all;
                        return c && n(c, b), d && n(d, arguments), this
                    },
                    stopListening: function(a, b, c) {
                        var d = this._listeners;
                        if (!d) return this;
                        var e = !b && !c;
                        "object" == typeof b && (c = this), a && ((d = {})[a._listenerId] = a);
                        for (var f in d) d[f].off(b, c, this), e && delete this._listeners[f];
                        return this
                    }
                },
                l = /\s+/,
                m = function(a, b, c, d) {
                    if (!c) return !0;
                    if ("object" == typeof c) {
                        for (var e in c) a[b].apply(a, [e, c[e]].concat(d));
                        return !1
                    }
                    if (l.test(c)) {
                        for (var f = c.split(l), g = 0, h = f.length; h > g; g++) a[b].apply(a, [f[g]].concat(d));
                        return !1
                    }
                    return !0
                },
                n = function(a, b) {
                    var c, d = -1,
                        e = a.length,
                        f = b[0],
                        g = b[1],
                        h = b[2];
                    switch (b.length) {
                        case 0:
                            for (; ++d < e;)(c = a[d]).callback.call(c.ctx);
                            return;
                        case 1:
                            for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f);
                            return;
                        case 2:
                            for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g);
                            return;
                        case 3:
                            for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g, h);
                            return;
                        default:
                            for (; ++d < e;)(c = a[d]).callback.apply(c.ctx, b)
                    }
                },
                o = {
                    listenTo: "on",
                    listenToOnce: "once"
                };
            j.each(o, function(a, b) {
                k[b] = function(b, c, d) {
                    var e = this._listeners || (this._listeners = {}),
                        f = b._listenerId || (b._listenerId = j.uniqueId("l"));
                    return e[f] = b, "object" == typeof c && (d = this), b[a](c, d, this), this
                }
            }), k.bind = k.on, k.unbind = k.off, j.extend(i, k);
            var p = i.Model = function(a, b) {
                    var c, d = a || {};
                    b || (b = {}), this.cid = j.uniqueId("c"), this.attributes = {}, j.extend(this, j.pick(b, q)), b.parse && (d = this.parse(d, b) || {}), (c = j.result(this, "defaults")) && (d = j.defaults({}, d, c)), this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments)
                },
                q = ["url", "urlRoot", "collection"];
            j.extend(p.prototype, k, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                initialize: function() {},
                toJSON: function() {
                    return j.clone(this.attributes)
                },
                sync: function() {
                    return i.sync.apply(this, arguments)
                },
                get: function(a) {
                    return this.attributes[a]
                },
                escape: function(a) {
                    return j.escape(this.get(a))
                },
                has: function(a) {
                    return null != this.get(a)
                },
                set: function(a, b, c) {
                    var d, e, f, g, h, i, k, l;
                    if (null == a) return this;
                    if ("object" == typeof a ? (e = a, c = b) : (e = {})[a] = b, c || (c = {}), !this._validate(e, c)) return !1;
                    f = c.unset, h = c.silent, g = [], i = this._changing, this._changing = !0, i || (this._previousAttributes = j.clone(this.attributes), this.changed = {}), l = this.attributes, k = this._previousAttributes, this.idAttribute in e && (this.id = e[this.idAttribute]);
                    for (d in e) b = e[d], j.isEqual(l[d], b) || g.push(d), j.isEqual(k[d], b) ? delete this.changed[d] : this.changed[d] = b, f ? delete l[d] : l[d] = b;
                    if (!h) {
                        g.length && (this._pending = !0);
                        for (var m = 0, n = g.length; n > m; m++) this.trigger("change:" + g[m], this, l[g[m]], c)
                    }
                    if (i) return this;
                    if (!h)
                        for (; this._pending;) this._pending = !1, this.trigger("change", this, c);
                    return this._pending = !1, this._changing = !1, this
                },
                unset: function(a, b) {
                    return this.set(a, void 0, j.extend({}, b, {
                        unset: !0
                    }))
                },
                clear: function(a) {
                    var b = {};
                    for (var c in this.attributes) b[c] = void 0;
                    return this.set(b, j.extend({}, a, {
                        unset: !0
                    }))
                },
                hasChanged: function(a) {
                    return null == a ? !j.isEmpty(this.changed) : j.has(this.changed, a)
                },
                changedAttributes: function(a) {
                    if (!a) return this.hasChanged() ? j.clone(this.changed) : !1;
                    var b, c = !1,
                        d = this._changing ? this._previousAttributes : this.attributes;
                    for (var e in a) j.isEqual(d[e], b = a[e]) || ((c || (c = {}))[e] = b);
                    return c
                },
                previous: function(a) {
                    return null != a && this._previousAttributes ? this._previousAttributes[a] : null
                },
                previousAttributes: function() {
                    return j.clone(this._previousAttributes)
                },
                fetch: function(a) {
                    a = a ? j.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
                    var b = this,
                        c = a.success;
                    return a.success = function(d) {
                        return b.set(b.parse(d, a), a) ? (c && c(b, d, a), b.trigger("sync", b, d, a), void 0) : !1
                    }, N(this, a), this.sync("read", this, a)
                },
                save: function(a, b, c) {
                    var d, e, f, g = this.attributes;
                    if (null == a || "object" == typeof a ? (d = a, c = b) : (d = {})[a] = b, !(!d || c && c.wait || this.set(d, c))) return !1;
                    if (c = j.extend({
                            validate: !0
                        }, c), !this._validate(d, c)) return !1;
                    d && c.wait && (this.attributes = j.extend({}, g, d)), void 0 === c.parse && (c.parse = !0);
                    var h = this,
                        i = c.success;
                    return c.success = function(a) {
                        h.attributes = g;
                        var b = h.parse(a, c);
                        return c.wait && (b = j.extend(d || {}, b)), j.isObject(b) && !h.set(b, c) ? !1 : (i && i(h, a, c), h.trigger("sync", h, a, c), void 0)
                    }, N(this, c), e = this.isNew() ? "create" : c.patch ? "patch" : "update", "patch" === e && (c.attrs = d), f = this.sync(e, this, c), d && c.wait && (this.attributes = g), f
                },
                destroy: function(a) {
                    a = a ? j.clone(a) : {};
                    var b = this,
                        c = a.success,
                        d = function() {
                            b.trigger("destroy", b, b.collection, a)
                        };
                    if (a.success = function(e) {
                            (a.wait || b.isNew()) && d(), c && c(b, e, a), b.isNew() || b.trigger("sync", b, e, a)
                        }, this.isNew()) return a.success(), !1;
                    N(this, a);
                    var e = this.sync("delete", this, a);
                    return a.wait || d(), e
                },
                url: function() {
                    var a = j.result(this, "urlRoot") || j.result(this.collection, "url") || M();
                    return this.isNew() ? a : a + ("/" === a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id)
                },
                parse: function(a) {
                    return a
                },
                clone: function() {
                    return new this.constructor(this.attributes)
                },
                isNew: function() {
                    return null == this.id
                },
                isValid: function(a) {
                    return this._validate({}, j.extend(a || {}, {
                        validate: !0
                    }))
                },
                _validate: function(a, b) {
                    if (!b.validate || !this.validate) return !0;
                    a = j.extend({}, this.attributes, a);
                    var c = this.validationError = this.validate(a, b) || null;
                    return c ? (this.trigger("invalid", this, c, j.extend(b || {}, {
                        validationError: c
                    })), !1) : !0
                }
            });
            var r = ["keys", "values", "pairs", "invert", "pick", "omit"];
            j.each(r, function(a) {
                p.prototype[a] = function() {
                    var b = g.call(arguments);
                    return b.unshift(this.attributes), j[a].apply(j, b)
                }
            });
            var s = i.Collection = function(a, b) {
                    b || (b = {}), b.url && (this.url = b.url), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, j.extend({
                        silent: !0
                    }, b))
                },
                t = {
                    add: !0,
                    remove: !0,
                    merge: !0
                },
                u = {
                    add: !0,
                    merge: !1,
                    remove: !1
                };
            j.extend(s.prototype, k, {
                model: p,
                initialize: function() {},
                toJSON: function(a) {
                    return this.map(function(b) {
                        return b.toJSON(a)
                    })
                },
                sync: function() {
                    return i.sync.apply(this, arguments)
                },
                add: function(a, b) {
                    return this.set(a, j.defaults(b || {}, u))
                },
                remove: function(a, b) {
                    a = j.isArray(a) ? a.slice() : [a], b || (b = {});
                    var c, d, e, f;
                    for (c = 0, d = a.length; d > c; c++) f = this.get(a[c]), f && (delete this._byId[f.id], delete this._byId[f.cid], e = this.indexOf(f), this.models.splice(e, 1), this.length--, b.silent || (b.index = e, f.trigger("remove", f, this, b)), this._removeReference(f));
                    return this
                },
                set: function(a, b) {
                    b = j.defaults(b || {}, t), b.parse && (a = this.parse(a, b)), j.isArray(a) || (a = a ? [a] : []);
                    var c, d, e, i, k, l = b.at,
                        m = this.comparator && null == l && b.sort !== !1,
                        n = j.isString(this.comparator) ? this.comparator : null,
                        o = [],
                        p = [],
                        q = {};
                    for (c = 0, d = a.length; d > c; c++)(e = this._prepareModel(a[c], b)) && ((i = this.get(e)) ? (b.remove && (q[i.cid] = !0), b.merge && (i.set(e.attributes, b), m && !k && i.hasChanged(n) && (k = !0))) : b.add && (o.push(e), e.on("all", this._onModelEvent, this), this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e)));
                    if (b.remove) {
                        for (c = 0, d = this.length; d > c; ++c) q[(e = this.models[c]).cid] || p.push(e);
                        p.length && this.remove(p, b)
                    }
                    if (o.length && (m && (k = !0), this.length += o.length, null != l ? h.apply(this.models, [l, 0].concat(o)) : f.apply(this.models, o)), k && this.sort({
                            silent: !0
                        }), b.silent) return this;
                    for (c = 0, d = o.length; d > c; c++)(e = o[c]).trigger("add", e, this, b);
                    return k && this.trigger("sort", this, b), this
                },
                reset: function(a, b) {
                    b || (b = {});
                    for (var c = 0, d = this.models.length; d > c; c++) this._removeReference(this.models[c]);
                    return b.previousModels = this.models, this._reset(), this.add(a, j.extend({
                        silent: !0
                    }, b)), b.silent || this.trigger("reset", this, b), this
                },
                push: function(a, b) {
                    return a = this._prepareModel(a, b), this.add(a, j.extend({
                        at: this.length
                    }, b)), a
                },
                pop: function(a) {
                    var b = this.at(this.length - 1);
                    return this.remove(b, a), b
                },
                unshift: function(a, b) {
                    return a = this._prepareModel(a, b), this.add(a, j.extend({
                        at: 0
                    }, b)), a
                },
                shift: function(a) {
                    var b = this.at(0);
                    return this.remove(b, a), b
                },
                slice: function(a, b) {
                    return this.models.slice(a, b)
                },
                get: function(a) {
                    return null == a ? void 0 : this._byId[null != a.id ? a.id : a.cid || a]
                },
                at: function(a) {
                    return this.models[a]
                },
                where: function(a, b) {
                    return j.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
                        for (var c in a)
                            if (a[c] !== b.get(c)) return !1;
                        return !0
                    })
                },
                findWhere: function(a) {
                    return this.where(a, !0)
                },
                sort: function(a) {
                    if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                    return a || (a = {}), j.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(j.bind(this.comparator, this)), a.silent || this.trigger("sort", this, a), this
                },
                sortedIndex: function(a, b, c) {
                    b || (b = this.comparator);
                    var d = j.isFunction(b) ? b : function(a) {
                        return a.get(b)
                    };
                    return j.sortedIndex(this.models, a, d, c)
                },
                pluck: function(a) {
                    return j.invoke(this.models, "get", a)
                },
                fetch: function(a) {
                    a = a ? j.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
                    var b = a.success,
                        c = this;
                    return a.success = function(d) {
                        var e = a.reset ? "reset" : "set";
                        c[e](d, a), b && b(c, d, a), c.trigger("sync", c, d, a)
                    }, N(this, a), this.sync("read", this, a)
                },
                create: function(a, b) {
                    if (b = b ? j.clone(b) : {}, !(a = this._prepareModel(a, b))) return !1;
                    b.wait || this.add(a, b);
                    var c = this,
                        d = b.success;
                    return b.success = function(e) {
                        b.wait && c.add(a, b), d && d(a, e, b)
                    }, a.save(null, b), a
                },
                parse: function(a) {
                    return a
                },
                clone: function() {
                    return new this.constructor(this.models)
                },
                _reset: function() {
                    this.length = 0, this.models = [], this._byId = {}
                },
                _prepareModel: function(a, b) {
                    if (a instanceof p) return a.collection || (a.collection = this), a;
                    b || (b = {}), b.collection = this;
                    var c = new this.model(a, b);
                    return c._validate(a, b) ? c : (this.trigger("invalid", this, a, b), !1)
                },
                _removeReference: function(a) {
                    this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this)
                },
                _onModelEvent: function(a, b, c, d) {
                    ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments))
                }
            });
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
                },
                y = /^(\S+)\s*(.*)$/,
                z = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            j.extend(x.prototype, k, {
                tagName: "div",
                $: function(a) {
                    return this.$el.find(a)
                },
                initialize: function() {},
                render: function() {
                    return this
                },
                remove: function() {
                    return this.$el.remove(), this.stopListening(), this
                },
                setElement: function(a, b) {
                    return this.$el && this.undelegateEvents(), this.$el = a instanceof i.$ ? a : i.$(a), this.el = this.$el[0], b !== !1 && this.delegateEvents(), this
                },
                delegateEvents: function(a) {
                    if (!a && !(a = j.result(this, "events"))) return this;
                    this.undelegateEvents();
                    for (var b in a) {
                        var c = a[b];
                        if (j.isFunction(c) || (c = this[a[b]]), c) {
                            var d = b.match(y),
                                e = d[1],
                                f = d[2];
                            c = j.bind(c, this), e += ".delegateEvents" + this.cid, "" === f ? this.$el.on(e, c) : this.$el.on(e, f, c)
                        }
                    }
                    return this
                },
                undelegateEvents: function() {
                    return this.$el.off(".delegateEvents" + this.cid), this
                },
                _configure: function(a) {
                    this.options && (a = j.extend({}, j.result(this, "options"), a)), j.extend(this, j.pick(a, z)), this.options = a
                },
                _ensureElement: function() {
                    if (this.el) this.setElement(j.result(this, "el"), !1);
                    else {
                        var a = j.extend({}, j.result(this, "attributes"));
                        this.id && (a.id = j.result(this, "id")), this.className && (a["class"] = j.result(this, "className"));
                        var b = i.$("<" + j.result(this, "tagName") + ">").attr(a);
                        this.setElement(b, !1)
                    }
                }
            }), i.sync = function(a, b, c) {
                var d = A[a];
                j.defaults(c || (c = {}), {
                    emulateHTTP: i.emulateHTTP,
                    emulateJSON: i.emulateJSON
                });
                var e = {
                    type: d,
                    dataType: "json"
                };
                if (c.url || (e.url = j.result(b, "url") || M()), null != c.data || !b || "create" !== a && "update" !== a && "patch" !== a || (e.contentType = "application/json", e.data = JSON.stringify(c.attrs || b.toJSON(c))), c.emulateJSON && (e.contentType = "application/x-www-form-urlencoded", e.data = e.data ? {
                        model: e.data
                    } : {}), c.emulateHTTP && ("PUT" === d || "DELETE" === d || "PATCH" === d)) {
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
            var A = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
            i.ajax = function() {
                return i.$.ajax.apply(i.$, arguments)
            };
            var B = i.Router = function(a) {
                    a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
                },
                C = /\((.*?)\)/g,
                D = /(\(\?)?:\w+/g,
                E = /\*\w+/g,
                F = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            j.extend(B.prototype, k, {
                initialize: function() {},
                route: function(a, b, c) {
                    j.isRegExp(a) || (a = this._routeToRegExp(a)), j.isFunction(b) && (c = b, b = ""), c || (c = this[b]);
                    var d = this;
                    return i.history.route(a, function(e) {
                        var f = d._extractParameters(a, e);
                        c && c.apply(d, f), d.trigger.apply(d, ["route:" + b].concat(f)), d.trigger("route", b, f), i.history.trigger("route", d, b, f)
                    }), this
                },
                navigate: function(a, b) {
                    return i.history.navigate(a, b), this
                },
                _bindRoutes: function() {
                    if (this.routes) {
                        this.routes = j.result(this, "routes");
                        for (var a, b = j.keys(this.routes); null != (a = b.pop());) this.route(a, this.routes[a])
                    }
                },
                _routeToRegExp: function(a) {
                    return a = a.replace(F, "\\$&").replace(C, "(?:$1)?").replace(D, function(a, b) {
                        return b ? a : "([^/]+)"
                    }).replace(E, "(.*?)"), new RegExp("^" + a + "$")
                },
                _extractParameters: function(a, b) {
                    var c = a.exec(b).slice(1);
                    return j.map(c, function(a) {
                        return a ? decodeURIComponent(a) : null
                    })
                }
            });
            var G = i.History = function() {
                    this.handlers = [], j.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
                },
                H = /^[#\/]|\s+$/g,
                I = /^\/+|\/+$/g,
                J = /msie [\w.]+/,
                K = /\/$/;
            G.started = !1, j.extend(G.prototype, k, {
                interval: 50,
                getHash: function(a) {
                    var b = (a || this).location.href.match(/#(.*)$/);
                    return b ? b[1] : ""
                },
                getFragment: function(a, b) {
                    if (null == a)
                        if (this._hasPushState || !this._wantsHashChange || b) {
                            a = this.location.pathname;
                            var c = this.root.replace(K, "");
                            a.indexOf(c) || (a = a.substr(c.length))
                        } else a = this.getHash();
                    return a.replace(H, "")
                },
                start: function(a) {
                    if (G.started) throw new Error("Backbone.history has already been started");
                    G.started = !0, this.options = j.extend({}, {
                        root: "/"
                    }, this.options, a), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var b = this.getFragment(),
                        c = document.documentMode,
                        d = J.exec(navigator.userAgent.toLowerCase()) && (!c || 7 >= c);
                    this.root = ("/" + this.root + "/").replace(I, "/"), d && this._wantsHashChange && (this.iframe = i.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(b)), this._hasPushState ? i.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !d ? i.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = b;
                    var e = this.location,
                        f = e.pathname.replace(/[^\/]$/, "$&/") === this.root;
                    return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !f ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && f && e.hash && (this.fragment = this.getHash().replace(H, ""), this.history.replaceState({}, document.title, this.root + this.fragment + e.search)), this.options.silent ? void 0 : this.loadUrl())
                },
                stop: function() {
                    i.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), G.started = !1
                },
                route: function(a, b) {
                    this.handlers.unshift({
                        route: a,
                        callback: b
                    })
                },
                checkUrl: function() {
                    var b = this.getFragment();
                    return b === this.fragment && this.iframe && (b = this.getFragment(this.getHash(this.iframe))), b === this.fragment ? !1 : (this.iframe && this.navigate(b), this.loadUrl() || this.loadUrl(this.getHash()), void 0)
                },
                loadUrl: function(a) {
                    var b = this.fragment = this.getFragment(a),
                        c = j.any(this.handlers, function(a) {
                            return a.route.test(b) ? (a.callback(b), !0) : void 0
                        });
                    return c
                },
                navigate: function(a, b) {
                    if (!G.started) return !1;
                    if (b && b !== !0 || (b = {
                            trigger: b
                        }), a = this.getFragment(a || ""), this.fragment !== a) {
                        this.fragment = a;
                        var c = this.root + a;
                        if (this._hasPushState) this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
                        else {
                            if (!this._wantsHashChange) return this.location.assign(c);
                            this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace))
                        }
                        b.trigger && this.loadUrl(a)
                    }
                },
                _updateHash: function(a, b, c) {
                    if (c) {
                        var d = a.href.replace(/(javascript:|#).*$/, "");
                        a.replace(d + "#" + b)
                    } else a.hash = "#" + b
                }
            }), i.history = new G;
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
                },
                N = function(a, b) {
                    var c = b.error;
                    b.error = function(d) {
                        c && c(a, d, b), a.trigger("error", a, d, b)
                    }
                }
        }.call(this), this._ = c, this.jQuery = d
});;
define("backbone/plugins/backbone-deepmodel/backbone-deepmodel", ["underscore", "backbone"], function(a, b, c) {
    ! function() {
        var d, e, f, g, h, i, b = a("backbone"),
            c = a("underscore"),
            j = [].slice;
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
            if (null == f && (f = 20), 0 >= f) return console.warn("_.deepExtend(): Maximum depth of recursion hit."), c.extend(a, b);
            for (m = c.intersection(e(a), e(b)), i = function(c) {
                    return b[c] = h(a[c], b[c], f - 1)
                }, n = 0, p = m.length; p > n; n++) l = m[n], i(l);
            for (k = c.intersection(d(a), d(b)), g = function(d) {
                    return b[d] = c.union(a[d], b[d])
                }, o = 0, q = k.length; q > o; o++) j = k[o], g(j);
            return c.extend(a, b)
        }, g = function() {
            var a, b, d, e;
            if (d = 2 <= arguments.length ? j.call(arguments, 0, e = arguments.length - 1) : (e = 0, []), b = arguments[e++], c.isNumber(b) || (d.push(b), b = 20), d.length <= 1) return d[0];
            if (0 >= b) return c.extend.apply(this, d);
            for (a = d.shift(); d.length > 0;) a = h(a, f(d.shift()), b);
            return a
        }, c.mixin({
            deepClone: f,
            isBasicObject: i,
            basicObjects: e,
            arrays: d,
            deepExtend: g
        })
    }.call(this),
        function(b, d) {
            function e(a) {
                var c = {},
                    d = i.keyPathSeparator;
                for (var f in a) {
                    var g = a[f];
                    if (g && g.constructor === Object && !b.isEmpty(g)) {
                        var h = e(g);
                        for (var j in h) {
                            var k = h[j];
                            c[f + d + j] = k
                        }
                    } else c[f] = g
                }
                return c
            }

            function f(a, c, d) {
                for (var e = i.keyPathSeparator, f = c.split(e), g = a, h = 0, j = f.length; j > h; h++) {
                    if (d && !b.has(g, f[h])) return !1;
                    if (g = g[f[h]], null == g && j - 1 > h && (g = {}), "undefined" == typeof g) return d ? !0 : g
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
                g(a, b, null, {
                    unset: !0
                })
            }
            var d = a("backbone"),
                b = a("underscore"),
                i = d.Model.extend({
                    constructor: function(a, c) {
                        var d, e = a || {};
                        this.cid = b.uniqueId("c"), this.attributes = {}, c && c.collection && (this.collection = c.collection), c && c.parse && (e = this.parse(e, c) || {}), (d = b.result(this, "defaults")) && (e = b.deepExtend({}, d, e)), this.set(e, c), this.changed = {}, this.initialize.apply(this, arguments)
                    },
                    toJSON: function() {
                        return b.deepClone(this.attributes)
                    },
                    get: function(a) {
                        return f(this.attributes, a)
                    },
                    set: function(a, c, d) {
                        var j, k, l, m, n, o, p, q;
                        if (null == a) return this;
                        if ("object" == typeof a ? (k = a, d = c || {}) : (k = {})[a] = c, d || (d = {}), !this._validate(k, d)) return !1;
                        l = d.unset, n = d.silent, m = [], o = this._changing, this._changing = !0, o || (this._previousAttributes = b.deepClone(this.attributes), this.changed = {}), q = this.attributes, p = this._previousAttributes, this.idAttribute in k && (this.id = k[this.idAttribute]), k = e(k);
                        for (j in k) c = k[j], b.isEqual(f(q, j), c) || m.push(j), b.isEqual(f(p, j), c) ? h(this.changed, j) : g(this.changed, j, c), l ? h(q, j) : g(q, j, c);
                        if (!n) {
                            m.length && (this._pending = !0);
                            for (var r = i.keyPathSeparator, s = 0, t = m.length; t > s; s++) {
                                var a = m[s];
                                this.trigger("change:" + a, this, f(q, a), d);
                                for (var u = a.split(r), v = u.length - 1; v > 0; v--) {
                                    var w = b.first(u, v).join(r),
                                        x = w + r + "*";
                                    this.trigger("change:" + x, this, f(q, w), d)
                                }
                            }
                        }
                        if (o) return this;
                        if (!n)
                            for (; this._pending;) this._pending = !1, this.trigger("change", this, d);
                        return this._pending = !1, this._changing = !1, this
                    },
                    clear: function(a) {
                        var c = {},
                            d = e(this.attributes);
                        for (var f in d) c[f] = void 0;
                        return this.set(c, b.extend({}, a, {
                            unset: !0
                        }))
                    },
                    hasChanged: function(a) {
                        return null == a ? !b.isEmpty(this.changed) : void 0 !== f(this.changed, a)
                    },
                    changedAttributes: function(a) {
                        if (!a) return this.hasChanged() ? e(this.changed) : !1;
                        var c = this._changing ? this._previousAttributes : this.attributes;
                        a = e(a), c = e(c);
                        var d, f = !1;
                        for (var g in a) b.isEqual(c[g], d = a[g]) || ((f || (f = {}))[g] = d);
                        return f
                    },
                    previous: function(a) {
                        return null != a && this._previousAttributes ? f(this._previousAttributes, a) : null
                    },
                    previousAttributes: function() {
                        return b.deepClone(this._previousAttributes)
                    }
                });
            i.keyPathSeparator = ".", "undefined" != typeof c && (c.exports = i)
        }()
});;
define("backbone/plugins/backbone-modelbinder/backbone-modelbinder", ["underscore", "jquery", "backbone"], function(a) {
    var b = a("backbone"),
        c = a("underscore");
    if (!b) throw "Please include Backbone.js before Backbone.ModelBinder.js";
    return b.ModelBinder = function(a) {
        c.bindAll(this), this._modelSetOptions = a || {}
    }, b.ModelBinder.VERSION = "0.1.5", b.ModelBinder.Constants = {}, b.ModelBinder.Constants.ModelToView = "ModelToView", b.ModelBinder.Constants.ViewToModel = "ViewToModel", c.extend(b.ModelBinder.prototype, {
        bind: function(a, b, d, e) {
            if (this.unbind(), this._model = a, this._rootEl = b, this._modelSetOptions = c.extend({}, this._modelSetOptions, e), !this._model) throw "model must be specified";
            if (!this._rootEl) throw "rootEl must be specified";
            d ? (this._attributeBindings = $.extend(!0, {}, d), this._initializeAttributeBindings(), this._initializeElBindings()) : this._initializeDefaultBindings(), this._bindModelToView(), this._bindViewToModel()
        },
        unbind: function() {
            this._unbindModelToView(), this._unbindViewToModel(), this._attributeBindings && (delete this._attributeBindings, this._attributeBindings = void 0)
        },
        _initializeAttributeBindings: function() {
            var a, b, d, e, f;
            for (a in this._attributeBindings) {
                if (b = this._attributeBindings[a], c.isString(b)) d = {
                    elementBindings: [{
                        selector: b
                    }]
                };
                else if (c.isArray(b)) d = {
                    elementBindings: b
                };
                else {
                    if (!c.isObject(b)) throw "Unsupported type passed to Model Binder " + d;
                    d = {
                        elementBindings: [b]
                    }
                }
                for (e = 0; e < d.elementBindings.length; e++) f = d.elementBindings[e], f.attributeBinding = d;
                d.attributeName = a, this._attributeBindings[a] = d
            }
        },
        _initializeDefaultBindings: function() {
            var a, b, c, d, e;
            for (this._attributeBindings = {}, b = $("[name]", this._rootEl), a = 0; a < b.length; a++) c = b[a], d = $(c).attr("name"), this._attributeBindings[d] ? this._attributeBindings[d].elementBindings.push({
                attributeBinding: this._attributeBindings[d],
                boundEls: [c]
            }) : (e = {
                attributeName: d
            }, e.elementBindings = [{
                attributeBinding: e,
                boundEls: [c]
            }], this._attributeBindings[d] = e)
        },
        _initializeElBindings: function() {
            var a, b, c, d, e, f, g;
            for (a in this._attributeBindings)
                for (b = this._attributeBindings[a], c = 0; c < b.elementBindings.length; c++) {
                    if (d = b.elementBindings[c], e = "" === d.selector ? $(this._rootEl) : $(d.selector, this._rootEl), 0 === e.length) throw "Bad binding found. No elements returned for binding selector " + d.selector;
                    for (d.boundEls = [], f = 0; f < e.length; f++) g = e[f], d.boundEls.push(g)
                }
        },
        _bindModelToView: function() {
            this._model.on("change", this._onModelChange, this), this.copyModelAttributesToView()
        },
        copyModelAttributesToView: function(a) {
            var b, d;
            for (b in this._attributeBindings)(void 0 === a || -1 !== c.indexOf(a, b)) && (d = this._attributeBindings[b], this._copyModelToView(d))
        },
        _unbindModelToView: function() {
            this._model && (this._model.off("change", this._onModelChange), this._model = void 0)
        },
        _bindViewToModel: function() {
            $(this._rootEl).delegate("", "change", this._onElChanged), $(this._rootEl).delegate("[contenteditable]", "blur", this._onElChanged)
        },
        _unbindViewToModel: function() {
            this._rootEl && ($(this._rootEl).undelegate("", "change", this._onElChanged), $(this._rootEl).undelegate("[contenteditable]", "blur", this._onElChanged))
        },
        _onElChanged: function(a) {
            var b, c, d, e;
            for (b = $(a.target)[0], c = this._getElBindings(b), d = 0; d < c.length; d++) e = c[d], this._isBindingUserEditable(e) && this._copyViewToModel(e, b)
        },
        _isBindingUserEditable: function(a) {
            return void 0 === a.elAttribute || "text" === a.elAttribute || "html" === a.elAttribute
        },
        _getElBindings: function(a) {
            var b, c, d, e, f, g, h = [];
            for (b in this._attributeBindings)
                for (c = this._attributeBindings[b], d = 0; d < c.elementBindings.length; d++)
                    for (e = c.elementBindings[d], f = 0; f < e.boundEls.length; f++) g = e.boundEls[f], g === a && h.push(e);
            return h
        },
        _onModelChange: function() {
            var a, b;
            for (a in this._model.changedAttributes()) b = this._attributeBindings[a], b && this._copyModelToView(b)
        },
        _copyModelToView: function(a) {
            var c, d, e, f, g, h;
            for (g = this._model.get(a.attributeName), c = 0; c < a.elementBindings.length; c++)
                for (d = a.elementBindings[c], e = 0; e < d.boundEls.length; e++) f = d.boundEls[e], f._isSetting || (h = this._getConvertedValue(b.ModelBinder.Constants.ModelToView, d, g), this._setEl($(f), d, h))
        },
        _setEl: function(a, b, c) {
            b.elAttribute ? this._setElAttribute(a, b, c) : this._setElValue(a, c)
        },
        _setElAttribute: function(a, d, e) {
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
        },
        _setElValue: function(a, b) {
            if (a.attr("type")) switch (a.attr("type")) {
                case "radio":
                    a.val() === b && a.attr("checked", "checked");
                    break;
                case "checkbox":
                    b ? a.attr("checked", "checked") : a.removeAttr("checked");
                    break;
                default:
                    a.val(b)
            } else a.is("input") || a.is("select") || a.is("textarea") ? a.val(b) : a.text(b)
        },
        _copyViewToModel: function(a, c) {
            var d, e;
            c._isSetting || (c._isSetting = !0, this._setModel(a, $(c)), c._isSetting = !1, a.converter && (d = this._model.get(a.attributeBinding.attributeName), e = this._getConvertedValue(b.ModelBinder.Constants.ModelToView, a, d), this._setEl($(c), a, e)))
        },
        _getElValue: function(a, b) {
            switch (b.attr("type")) {
                case "checkbox":
                    return b.prop("checked") ? !0 : !1;
                default:
                    return void 0 !== b.attr("contenteditable") ? b.html() : b.val()
            }
        },
        _setModel: function(a, d) {
            var e = {},
                f = this._getElValue(a, d);
            f = this._getConvertedValue(b.ModelBinder.Constants.ViewToModel, a, f), e[a.attributeBinding.attributeName] = f;
            var g = c.extend({}, this._modelSetOptions, {
                changeSource: "ModelBinder"
            });
            this._model.set(e, g)
        },
        _getConvertedValue: function(a, b, c) {
            return b.converter && (c = b.converter(a, c, b.attributeBinding.attributeName, this._model)), c
        }
    }), b.ModelBinder.CollectionConverter = function(a) {
        if (this._collection = a, !this._collection) throw "Collection must be defined";
        c.bindAll(this, "convert")
    }, c.extend(b.ModelBinder.CollectionConverter.prototype, {
        convert: function(a, c) {
            return a === b.ModelBinder.Constants.ModelToView ? c ? c.id : void 0 : this._collection.get(c)
        }
    }), b.ModelBinder.createDefaultBindings = function(a, b, c, d) {
        var e, f, g, h, i = {};
        for (e = $("[" + b + "]", a), f = 0; f < e.length; f++)
            if (g = e[f], h = $(g).attr(b), !i[h]) {
                var j = {
                    selector: "[" + b + '="' + h + '"]'
                };
                i[h] = j, c && (i[h].converter = c), d && (i[h].elAttribute = d)
            }
        return i
    }, b.ModelBinder.combineBindings = function(a, b) {
        c.each(b, function(b, c) {
            var d = {
                selector: b.selector
            };
            b.converter && (d.converter = b.converter), b.elAttribute && (d.elAttribute = b.elAttribute), a[c] = a[c] ? [a[c], d] : d
        })
    }, b.ModelBinder
});;
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
            if (!this._elManagerFactory) throw 'elManagerFactory must be defined.';

            // Let the factory just use the trigger function on the view binder
            this._elManagerFactory.trigger = this.trigger;

            this._options = options || {};
        };

        Backbone.CollectionBinder.VERSION = '1.0.1';

        _.extend(Backbone.CollectionBinder.prototype, Backbone.Events, {
            bind: function(collection, parentEl) {
                this.unbind();

                if (!collection) throw 'collection must be defined';
                if (!parentEl) throw 'parentEl must be defined';

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

            if (!_.isString(this._elHtml)) throw 'elHtml must be a valid html string';
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
                            } else if (_.isObject(this._bindings)) {
                                this._modelBinder = new Backbone.ModelBinder();
                                this._modelBinder.bind(this._model, this._el, this._bindings);
                            } else {
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

            if (!_.isFunction(this._viewCreator)) throw 'viewCreator must be a valid function that accepts a model and returns a backbone view';
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
                        } else {
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

});;
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
        }, a.extend(b.LocalStorage.prototype, {
            save: function() {
                this.localStorage().setItem(this.name, this.records.join(","))
            },
            create: function(a) {
                return a.id || (a.id = d(), a.set(a.idAttribute, a.id)), this.localStorage().setItem(this.name + "-" + a.id, JSON.stringify(a)), this.records.push(a.id.toString()), this.save(), this.find(a)
            },
            update: function(b) {
                return this.localStorage().setItem(this.name + "-" + b.id, JSON.stringify(b)), a.include(this.records, b.id.toString()) || this.records.push(b.id.toString()), this.save(), this.find(b)
            },
            find: function(a) {
                return this.jsonData(this.localStorage().getItem(this.name + "-" + a.id))
            },
            findAll: function() {
                return a(this.records).chain().map(function(a) {
                    return this.jsonData(this.localStorage().getItem(this.name + "-" + a))
                }, this).compact().value()
            },
            destroy: function(b) {
                return b.isNew() ? !1 : (this.localStorage().removeItem(this.name + "-" + b.id), this.records = a.reject(this.records, function(a) {
                    return a === b.id.toString()
                }), this.save(), b)
            },
            localStorage: function() {
                return localStorage
            },
            jsonData: function(a) {
                return a && JSON.parse(a)
            },
            _clear: function() {
                var b = this.localStorage(),
                    c = new RegExp("^" + this.name + "-");
                b.removeItem(this.name), a.chain(b).keys().filter(function(a) {
                    return c.test(a)
                }).each(function(a) {
                    b.removeItem(a)
                })
            },
            _storageSize: function() {
                return this.localStorage().length
            }
        }), b.LocalStorage.sync = window.Store.sync = b.localSync = function(a, c, d) {
            var f, g, e = c.localStorage || c.collection.localStorage,
                h = $.Deferred && $.Deferred();
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
});;
define("backbone/plugins/backbone-paginator/backbone-paginator", [], function() {
    Backbone.Paginator = function(a, b, c) {
        "use strict";
        var d = b.map(a.VERSION.split("."), function(a) {
                return parseInt(a, 10)
            }),
            e = {};
        e.version = "<%= pkg.version %>", e.clientPager = a.Collection.extend({
            useDiacriticsPlugin: !0,
            useLevenshteinPlugin: !0,
            sortColumn: "",
            sortDirection: "desc",
            lastSortColumn: "",
            fieldFilterRules: [],
            lastFieldFilterRules: [],
            filterFields: "",
            filterExpression: "",
            lastFilterExpression: "",
            defaults_ui: {
                firstPage: 0,
                currentPage: 1,
                perPage: 5,
                totalPages: 10,
                pagesInRange: 4
            },
            initialize: function() {
                this.on("add", this.addModel, this), this.on("remove", this.removeModel, this), this.setDefaults()
            },
            setDefaults: function() {
                var a = b.defaults(this.paginator_ui, this.defaults_ui);
                b.defaults(this, a)
            },
            addModel: function(a) {
                this.origModels.push(a)
            },
            removeModel: function(a) {
                var c = b.indexOf(this.origModels, a);
                this.origModels.splice(c, 1)
            },
            sync: function(c, e, f) {
                var g = this;
                this.setDefaults();
                var h = {};
                b.each(b.result(g, "server_api"), function(a, c) {
                    b.isFunction(a) && (a = b.bind(a, g), a = a()), h[c] = a
                });
                var i = b.clone(g.paginator_core);
                b.each(i, function(a, c) {
                    b.isFunction(a) && (a = b.bind(a, g), a = a()), i[c] = a
                }), i = b.defaults(i, {
                    timeout: 25e3,
                    cache: !1,
                    type: "GET",
                    dataType: "jsonp"
                }), i = b.extend(i, {
                    data: JSON.stringify(h),
                    processData: !1,
                    url: b.result(i, "url")
                }, f);
                var j = !(0 === d[0] && 9 === d[1] && 10 === d[2]),
                    k = i.success;
                i.success = function(a, b, c) {
                    k && (j ? k(a, b, c) : k(e, a, i)), e && e.trigger && e.trigger("sync", e, a, i)
                };
                var l = i.error;
                i.error = function(a) {
                    l && l(e, a, i), e && e.trigger && e.trigger("error", e, a, i)
                };
                var m = i.xhr = a.ajax(i);
                return e && e.trigger && e.trigger("request", e, m, i), m
            },
            nextPage: function(a) {
                this.currentPage < this.information.totalPages && (this.currentPage = ++this.currentPage, this.pager(a))
            },
            previousPage: function(a) {
                this.currentPage > 1 && (this.currentPage = --this.currentPage, this.pager(a))
            },
            goTo: function(a, b) {
                void 0 !== a && (this.currentPage = parseInt(a, 10), this.pager(b))
            },
            howManyPer: function(a) {
                if (void 0 !== a) {
                    var b = this.perPage;
                    this.perPage = parseInt(a, 10), this.currentPage = Math.ceil((b * (this.currentPage - 1) + 1) / a), this.pager()
                }
            },
            setSort: function(a, b) {
                void 0 !== a && void 0 !== b && (this.lastSortColumn = this.sortColumn, this.sortColumn = a, this.sortDirection = b, this.pager(), this.info())
            },
            setFieldFilter: function(a) {
                b.isEmpty(a) ? (this.lastFieldFilterRules = this.fieldFilterRules, this.fieldFilterRules = "", this.pager(), this.info()) : (this.lastFieldFilterRules = this.fieldFilterRules, this.fieldFilterRules = a, this.pager(), this.info())
            },
            doFakeFieldFilter: function(a) {
                if (!b.isEmpty(a)) {
                    var c = this.origModels;
                    return void 0 === c && (c = this.models), c = this._fieldFilter(c, a), "" !== this.filterExpression && (c = this._filter(c, this.filterFields, this.filterExpression)), c.length
                }
            },
            setFilter: function(a, b) {
                void 0 !== a && void 0 !== b && (this.filterFields = a, this.lastFilterExpression = this.filterExpression, this.filterExpression = b, this.pager(), this.info())
            },
            doFakeFilter: function(a, c) {
                if (void 0 !== a && void 0 !== c) {
                    var d = this.origModels;
                    return void 0 === d && (d = this.models), b.isEmpty(this.fieldFilterRules) || (d = this._fieldFilter(d, this.fieldFilterRules)), d = this._filter(d, a, c), d.length
                }
            },
            pager: function(a) {
                var c = this,
                    d = this.perPage,
                    e = (c.currentPage - 1) * d,
                    f = e + d;
                void 0 === c.origModels && (c.origModels = c.models), c.models = c.origModels.slice(), "" !== this.sortColumn && (c.models = c._sort(c.models, this.sortColumn, this.sortDirection)), b.isEmpty(this.fieldFilterRules) || (c.models = c._fieldFilter(c.models, this.fieldFilterRules)), "" !== this.filterExpression && (c.models = c._filter(c.models, this.filterFields, this.filterExpression)), this.lastSortColumn === this.sortColumn && this.lastFilterExpression === this.filterExpression && b.isEqual(this.fieldFilterRules, this.lastFieldFilterRules) || (e = 0, f = e + d, c.currentPage = 1, this.lastSortColumn = this.sortColumn, this.lastFieldFilterRules = this.fieldFilterRules, this.lastFilterExpression = this.filterExpression), c.sortedAndFilteredModels = c.models.slice(), c.info(), c.reset(c.models.slice(e, f)), b.result(a, "success")
            },
            _sort: function(a, c, d) {
                return a = a.sort(function(a, e) {
                    var f = a.get(c),
                        g = e.get(c);
                    if (b.isUndefined(f) || b.isUndefined(g) || null === f || null === g) return 0;
                    if (f = f.toString().toLowerCase(), g = g.toString().toLowerCase(), "desc" === d)
                        if (!f.match(/[^\-\d\.]/) && f.match(/-?[\d\.]+/) && !g.match(/[^\-\d\.]/) && g.match(/-?[\d\.]+/)) {
                            if (g - 0 > f - 0) return 1;
                            if (f - 0 > g - 0) return -1
                        } else {
                            if (g > f) return 1;
                            if (f > g) return -1
                        } else if (!f.match(/[^\-\d\.]/) && f.match(/-?[\d\.]+/) && !g.match(/[^\-\d\.]/) && g.match(/-?[\d\.]+/)) {
                        if (g - 0 > f - 0) return -1;
                        if (f - 0 > g - 0) return 1
                    } else {
                        if (g > f) return -1;
                        if (f > g) return 1
                    }
                    if (a.cid && e.cid) {
                        var h = a.cid,
                            i = e.cid;
                        if (i > h) return -1;
                        if (h > i) return 1
                    }
                    return 0
                })
            },
            _fieldFilter: function(a, c) {
                if (b.isEmpty(c)) return a;
                var d = [];
                return b.each(a, function(a) {
                    var e = !0;
                    b.each(c, function(c) {
                        if (!e) return !1;
                        if (e = !1, "function" === c.type) {
                            var d = b.wrap(c.value, function(b) {
                                return b(a.get(c.field))
                            });
                            d() && (e = !0)
                        } else "required" === c.type ? b.isEmpty(a.get(c.field).toString()) || (e = !0) : "min" === c.type ? !b.isNaN(Number(a.get(c.field))) && !b.isNaN(Number(c.value)) && Number(a.get(c.field)) >= Number(c.value) && (e = !0) : "max" === c.type ? !b.isNaN(Number(a.get(c.field))) && !b.isNaN(Number(c.value)) && Number(a.get(c.field)) <= Number(c.value) && (e = !0) : "range" === c.type ? !b.isNaN(Number(a.get(c.field))) && b.isObject(c.value) && !b.isNaN(Number(c.value.min)) && !b.isNaN(Number(c.value.max)) && Number(a.get(c.field)) >= Number(c.value.min) && Number(a.get(c.field)) <= Number(c.value.max) && (e = !0) : "minLength" === c.type ? a.get(c.field).toString().length >= c.value && (e = !0) : "maxLength" === c.type ? a.get(c.field).toString().length <= c.value && (e = !0) : "rangeLength" === c.type ? b.isObject(c.value) && !b.isNaN(Number(c.value.min)) && !b.isNaN(Number(c.value.max)) && a.get(c.field).toString().length >= c.value.min && a.get(c.field).toString().length <= c.value.max && (e = !0) : "oneOf" === c.type ? b.isArray(c.value) && b.include(c.value, a.get(c.field)) && (e = !0) : "equalTo" === c.type ? c.value === a.get(c.field) && (e = !0) : "containsAllOf" === c.type ? b.isArray(c.value) && b.isArray(a.get(c.field)) && b.intersection(c.value, a.get(c.field)).length === c.value.length && (e = !0) : "pattern" === c.type ? a.get(c.field).toString().match(c.value) && (e = !0) : e = !1
                    }), e && d.push(a)
                }), d
            },
            _filter: function(c, d, e) {
                var f = this,
                    g = {};
                if (b.isString(d) ? g[d] = {
                        cmp_method: "regexp"
                    } : b.isArray(d) ? b.each(d, function(a) {
                        g[a] = {
                            cmp_method: "regexp"
                        }
                    }) : b.each(d, function(a, c) {
                        g[c] = b.defaults(a, {
                            cmp_method: "regexp"
                        })
                    }), d = g, b.has(a.Paginator, "removeDiacritics") && f.useDiacriticsPlugin && (e = a.Paginator.removeDiacritics(e)), "" === e || !b.isString(e)) return c;
                var h = b.map(e.match(/\w+/gi), function(a) {
                        return a.toLowerCase()
                    }),
                    i = "(" + b.uniq(h).join("|") + ")",
                    j = new RegExp(i, "igm"),
                    k = [];
                return b.each(c, function(c) {
                    var g = [];
                    b.each(d, function(d, i) {
                        var k = c.get(i);
                        if (k) {
                            var l = [];
                            if (k = b.has(a.Paginator, "removeDiacritics") && f.useDiacriticsPlugin ? a.Paginator.removeDiacritics(k.toString()) : k.toString(), "levenshtein" === d.cmp_method && b.has(a.Paginator, "levenshtein") && f.useLevenshteinPlugin) {
                                var m = a.Paginator.levenshtein(k, e);
                                b.defaults(d, {
                                    max_distance: 0
                                }), m <= d.max_distance && (l = b.uniq(h))
                            } else l = k.match(j);
                            l = b.map(l, function(a) {
                                return a.toString().toLowerCase()
                            }), b.each(l, function(a) {
                                g.push(a)
                            })
                        }
                    }), g = b.uniq(b.without(g, "")), b.isEmpty(b.difference(h, g)) && k.push(c)
                }), k
            },
            info: function() {
                var a = this,
                    b = {},
                    c = a.sortedAndFilteredModels ? a.sortedAndFilteredModels.length : a.length,
                    d = Math.ceil(c / a.perPage);
                return b = {
                    totalUnfilteredRecords: a.origModels ? a.origModels.length : 0,
                    totalRecords: c,
                    currentPage: a.currentPage,
                    perPage: this.perPage,
                    totalPages: d,
                    lastPage: d,
                    previous: !1,
                    next: !1,
                    startRecord: 0 === c ? 0 : (a.currentPage - 1) * this.perPage + 1,
                    endRecord: Math.min(c, a.currentPage * this.perPage)
                }, a.currentPage > 1 && (b.previous = a.currentPage - 1), a.currentPage < b.totalPages && (b.next = a.currentPage + 1), b.pageSet = a.setPagination(b), a.information = b, b
            },
            setPagination: function(a) {
                var b = [],
                    c = 0,
                    d = 0,
                    e = 2 * this.pagesInRange,
                    f = Math.ceil(a.totalRecords / a.perPage);
                if (f > 1)
                    if (1 + e >= f)
                        for (c = 1, d = f; d >= c; c++) b.push(c);
                    else if (a.currentPage <= this.pagesInRange + 1)
                    for (c = 1, d = 2 + e; d > c; c++) b.push(c);
                else if (f - this.pagesInRange > a.currentPage && a.currentPage > this.pagesInRange)
                    for (c = a.currentPage - this.pagesInRange; c <= a.currentPage + this.pagesInRange; c++) b.push(c);
                else
                    for (c = f - e; f >= c; c++) b.push(c);
                return b
            },
            bootstrap: function(a) {
                return b.extend(this, a), this.goTo(1), this.info(), this
            }
        }), e.clientPager.prototype.prevPage = e.clientPager.prototype.previousPage;
        var f = function() {
            var a = new c.Deferred;
            return a.reject(), a.promise()
        };
        return e.requestPager = a.Collection.extend({
            sync: function(c, e, f) {
                var g = this;
                g.setDefaults();
                var h = {};
                b.each(b.result(g, "server_api"), function(a, c) {
                    b.isFunction(a) && (a = b.bind(a, g), a = a()), h[c] = a
                });
                var i = b.clone(g.paginator_core);
                b.each(i, function(a, c) {
                    b.isFunction(a) && (a = b.bind(a, g), a = a()), i[c] = a
                }), i = b.defaults(i, {
                    timeout: 25e3,
                    cache: !1,
                    type: "GET",
                    dataType: "jsonp"
                }), f.data = f.data ? JSON.stringify(b.extend(h, f.data)) : JSON.stringify(h), i = b.extend(i, {
                    data: JSON.stringify(h),
                    processData: !1,
                    url: b.result(i, "url")
                }, f);
                var j = !(0 === d[0] && 9 === d[1] && 10 === d[2]),
                    k = i.success;
                i.success = function(a, b, c) {
                    k && (j ? k(a, b, c) : k(e, a, i)), d[0] < 1 && e && e.trigger && e.trigger("sync", e, a, i)
                };
                var l = i.error;
                i.error = function(a) {
                    l && l(e, a, i), e && e.trigger && e.trigger("error", e, a, i)
                };
                var m = i.xhr = a.ajax(i);
                return e && e.trigger && e.trigger("request", e, m, i), m
            },
            setDefaults: function() {
                var a = this;
                b.defaults(a.paginator_ui, {
                    firstPage: 0,
                    currentPage: 1,
                    perPage: 5,
                    totalPages: 10,
                    pagesInRange: 4
                }), b.each(a.paginator_ui, function(c, d) {
                    b.isUndefined(a[d]) && (a[d] = a.paginator_ui[d])
                })
            },
            requestNextPage: function(a) {
                return void 0 !== this.currentPage ? (this.currentPage += 1, this.pager(a)) : f()
            },
            requestPreviousPage: function(a) {
                return void 0 !== this.currentPage ? (this.currentPage -= 1, this.pager(a)) : f()
            },
            updateOrder: function(a, b) {
                return void 0 !== a ? (this.sortField = a, this.pager(b)) : f()
            },
            goTo: function(a, b) {
                return void 0 !== a ? (this.currentPage = parseInt(a, 10), this.pager(b)) : f()
            },
            howManyPer: function(a, b) {
                return void 0 !== a ? (this.currentPage = this.firstPage, this.perPage = a, this.pager(b)) : f()
            },
            info: function() {
                var a = {
                    totalRecords: this.totalRecords || 0,
                    currentPage: this.currentPage,
                    firstPage: this.firstPage,
                    totalPages: Math.ceil(this.totalRecords / this.perPage),
                    lastPage: this.totalPages,
                    perPage: this.perPage,
                    previous: !1,
                    next: !1
                };
                return this.currentPage > 1 && (a.previous = this.currentPage - 1), this.currentPage < a.totalPages && (a.next = this.currentPage + 1), a.hasNext = a.next, a.hasPrevious = a.next, a.pageSet = this.setPagination(a), this.information = a, a
            },
            setPagination: function(a) {
                var b = [],
                    c = 0,
                    d = 0,
                    e = 2 * this.pagesInRange,
                    f = Math.ceil(a.totalRecords / a.perPage);
                if (f > 1)
                    if (1 + e >= f)
                        for (c = 1, d = f; d >= c; c++) b.push(c);
                    else if (a.currentPage <= this.pagesInRange + 1)
                    for (c = 1, d = 2 + e; d > c; c++) b.push(c);
                else if (f - this.pagesInRange > a.currentPage && a.currentPage > this.pagesInRange)
                    for (c = a.currentPage - this.pagesInRange; c <= a.currentPage + this.pagesInRange; c++) b.push(c);
                else
                    for (c = f - e; f >= c; c++) b.push(c);
                return b
            },
            pager: function(a) {
                return b.isObject(a) || (a = {}), this.fetch(a)
            },
            url: function() {
                return void 0 !== this.paginator_core && void 0 !== this.paginator_core.url ? this.paginator_core.url : null
            },
            bootstrap: function(a) {
                return b.extend(this, a), this.setDefaults(), this.info(), this
            }
        }), e.requestPager.prototype.nextPage = e.requestPager.prototype.requestNextPage, e.requestPager.prototype.prevPage = e.requestPager.prototype.requestPreviousPage, e
    }(Backbone, _, jQuery)
});;
define("backbone/plugins/backbone-routefilter/backbone-routefilter", function(a) {
    var b = a("backbone"),
        c = a("underscore"),
        d = b.Router.prototype.route,
        e = function() {};
    c.extend(b.Router.prototype, {
        before: e,
        after: e,
        route: function(a, b, f) {
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
        }
    })
});;
define("backbone/plugins/backbone-validation/backbone-validation", function() {
    Backbone.Validation = function(a, b, c) {
        var d = {
                forceUpdate: !1,
                selector: "name",
                valid: Function.prototype,
                invalid: Function.prototype
            },
            e = function(a) {
                return b.reduce(b.keys(a.validation), function(a, b) {
                    return a[b] = c, a
                }, {})
            },
            f = function(c, d) {
                var e = c.validation[d] || {};
                return b.isFunction(e) ? e : b.isString(e) ? c[e] : (b.isArray(e) || (e = [e]), b.reduce(e, function(c, d) {
                    return b.each(b.without(b.keys(d), "msg"), function(b) {
                        c.push({
                            fn: a.Validation.validators[b],
                            val: d[b],
                            msg: d.msg
                        })
                    }), c
                }, []))
            },
            g = function(c, d, e, g) {
                var h = f(c, d);
                return b.isFunction(h) ? h.call(c, e, d, g) : b.reduce(h, function(b, f) {
                    var h = f.fn.call(a.Validation.validators, e, d, f.val, c, g);
                    return h === !1 || b === !1 ? !1 : h && !b ? f.msg || h : b
                }, "")
            },
            h = function(a, c) {
                var e, f, h = [],
                    i = [],
                    j = !0,
                    k = b.clone(c);
                for (f in c) e = g(a, f, c[f], k), e && (h.push(f), i.push(e), j = !1);
                return {
                    invalidAttrs: h,
                    errorMessages: i,
                    isValid: j
                }
            },
            i = function(a, c) {
                return {
                    isValid: function(a) {
                        if (b.isString(a)) return !g(this, a, this.get(a), this.toJSON());
                        if (b.isArray(a)) {
                            for (var c = 0; c < a.length; c++)
                                if (g(this, a[c], this.get(a[c]), this.toJSON())) return !1;
                            return !0
                        }
                        return a === !0 && this.validate(), this.validation ? this._isValid : !0
                    },
                    validate: function(d, f) {
                        var g = this,
                            i = !d,
                            j = b.extend({}, c, f),
                            k = b.extend(e(g), g.toJSON(), d),
                            l = d || k,
                            m = h(g, k);
                        g._isValid = m.isValid;
                        for (var n in k) {
                            var o = b.indexOf(m.invalidAttrs, n); - 1 !== o && (l.hasOwnProperty(n) || i) && j.invalid(a, n, m.errorMessages[o], j.selector), b.include(m.invalidAttrs, n) || j.valid(a, n, j.selector)
                        }
                        return b.defer(function() {
                            g.trigger("validated", g._isValid, g, m.invalidAttrs), g.trigger("validated:" + (g._isValid ? "valid" : "invalid"), g, m.invalidAttrs)
                        }), !j.forceUpdate && b.intersection(m.invalidAttrs, b.keys(l)).length > 0 ? m.errorMessages : void 0
                    }
                }
            },
            j = function(a, c, d) {
                b.extend(c, i(a, d))
            },
            k = function(a) {
                delete a.validate, delete a.isValid
            },
            l = function(a) {
                j(this.view, a, this.options)
            },
            m = function(a) {
                k(a)
            };
        return {
            version: "0.5.3",
            configure: function(a) {
                b.extend(d, a)
            },
            bind: function(c, e) {
                var f = c.model,
                    g = c.collection,
                    h = b.extend({}, d, a.Validation.callbacks, e);
                f && j(c, f, h), g && (g.each(function(a) {
                    j(c, a, h)
                }), g.bind("add", l, {
                    view: c,
                    options: h
                }), g.bind("remove", m))
            },
            unbind: function(a) {
                var b = a.model,
                    c = a.collection;
                b && k(a.model), c && (c.each(function(a) {
                    k(a)
                }), c.unbind("add", l), c.unbind("remove", m))
            },
            mixin: i(null, d)
        }
    }(Backbone, _), Backbone.Validation.callbacks = {
        valid: function(a, b, c) {
            a.$("[" + c + "~=" + b + "]").removeClass("invalid").removeAttr("data-error")
        },
        invalid: function(a, b, c, d) {
            a.$("[" + d + "~=" + b + "]").addClass("invalid").attr("data-error", c)
        }
    }, Backbone.Validation.patterns = {
        digits: /^\d+$/,
        number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
        email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
        url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
    }, Backbone.Validation.messages = {
        required: "{0} is required",
        acceptance: "{0} must be accepted",
        min: "{0} must be grater than or equal to {1}",
        max: "{0} must be less than or equal to {1}",
        range: "{0} must be between {1} and {2}",
        length: "{0} must be {1} characters",
        minLength: "{0} must be at least {1} characters",
        maxLength: "{0} must be at most {1} characters",
        rangeLength: "{0} must be between {1} and {2} characters",
        oneOf: "{0} must be one of: {1}",
        equalTo: "{0} must be the same as {1}",
        pattern: "{0} must be a valid {1}",
        object: "{0} must be an object"
    }, Backbone.Validation.validators = function(a, b, c) {
        var d = String.prototype.trim ? function(a) {
                return null === a ? "" : String.prototype.trim.call(a)
            } : function(a) {
                var b = /^\s+/,
                    c = /\s+$/;
                return null === a ? "" : a.toString().replace(b, "").replace(c, "")
            },
            e = function() {
                var a = Array.prototype.slice.call(arguments),
                    b = a.shift();
                return b.replace(/\{(\d+)\}/g, function(b, c) {
                    return "undefined" != typeof a[c] ? a[c] : b
                })
            },
            f = function(b) {
                return c.isNumber(b) || c.isString(b) && b.match(a.number)
            },
            g = function(a) {
                return !(c.isNull(a) || c.isUndefined(a) || c.isString(a) && "" === d(a))
            };
        return {
            fn: function(a, b, d, e, f) {
                return c.isString(d) && (d = e[d]), d.call(e, a, b, f)
            },
            required: function(a, d, f, h) {
                var i = c.isFunction(f) ? f.call(h) : f;
                return i || g(a) ? i && !g(a) ? e(b.required, d) : void 0 : !1
            },
            acceptance: function(a, d) {
                return "true" === a || c.isBoolean(a) && a !== !1 ? void 0 : e(b.acceptance, d)
            },
            min: function(a, c, d) {
                return !f(a) || d > a ? e(b.min, c, d) : void 0
            },
            max: function(a, c, d) {
                return !f(a) || a > d ? e(b.max, c, d) : void 0
            },
            range: function(a, c, d) {
                return !f(a) || a < d[0] || a > d[1] ? e(b.range, c, d[0], d[1]) : void 0
            },
            length: function(a, c, f) {
                return g(a) && d(a).length === f ? void 0 : e(b.length, c, f)
            },
            minLength: function(a, c, f) {
                return !g(a) || d(a).length < f ? e(b.minLength, c, f) : void 0
            },
            maxLength: function(a, c, f) {
                return !g(a) || d(a).length > f ? e(b.maxLength, c, f) : void 0
            },
            rangeLength: function(a, c, f) {
                return !g(a) || d(a).length < f[0] || d(a).length > f[1] ? e(b.rangeLength, c, f[0], f[1]) : void 0
            },
            oneOf: function(a, d, f) {
                return c.include(f, a) ? void 0 : e(b.oneOf, d, f.join(", "))
            },
            equalTo: function(a, c, d, f, g) {
                return a !== g[d] ? e(b.equalTo, c, d) : void 0
            },
            pattern: function(c, d, f) {
                return g(c) && c.toString().match(a[f] || f) ? void 0 : e(b.pattern, d, f)
            },
            validation: function(a, d) {
                return c.isObject(a) ? void 0 : e(b.object, d)
            }
        }
    }(Backbone.Validation.patterns, Backbone.Validation.messages, _)
});;