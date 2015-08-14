define("bootstrap/bootstrap-all", [], function(require, exports, module) {
    require("bootstrap");
    require('bootstrap-editable');
    require("bootstrap-datetimepicker");
    require("bootstrap-contextmenu");

    $.fn.modal.Constructor.prototype.enforceFocus = function() {};
});
/*!
 * Bootstrap.js by @fat & @mdo
 * Copyright 2012 Twitter, Inc.
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
define("bootstrap/2.2.2/bootstrap", [], function() {
    return (function($) {
        ! function(e) {
            "use strict";
            e(function() {
                e.support.transition = function() {
                    var e = function() {
                        var e = document.createElement("bootstrap"),
                            t = {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd otransitionend",
                                transition: "transitionend"
                            },
                            n;
                        for (n in t)
                            if (e.style[n] !== undefined) return t[n]
                    }();
                    return e && {
                        end: e
                    }
                }()
            })
        }(window.jQuery), ! function(e) {
            "use strict";
            var t = '[data-dismiss="alert"]',
                n = function(n) {
                    e(n).on("click", t, this.close)
                };
            n.prototype.close = function(t) {
                function s() {
                    i.trigger("closed").remove()
                }
                var n = e(this),
                    r = n.attr("data-target"),
                    i;
                r || (r = n.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = e(r), t && t.preventDefault(), i.length || (i = n.hasClass("alert") ? n : n.parent()), i.trigger(t = e.Event("close"));
                if (t.isDefaultPrevented()) return;
                i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, s) : s()
            };
            var r = e.fn.alert;
            e.fn.alert = function(t) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("alert");
                    i || r.data("alert", i = new n(this)), typeof t == "string" && i[t].call(r)
                })
            }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
                return e.fn.alert = r, this
            }, e(document).on("click.alert.data-api", t, n.prototype.close)
        }(window.jQuery), ! function(e) {
            "use strict";
            var t = function(t, n) {
                this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n)
            };
            t.prototype.setState = function(e) {
                var t = "disabled",
                    n = this.$element,
                    r = n.data(),
                    i = n.is("input") ? "val" : "html";
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
                    var r = e(this),
                        i = r.data("button"),
                        s = typeof n == "object" && n;
                    i || r.data("button", i = new t(this, s)), n == "toggle" ? i.toggle() : n && i.setState(n)
                })
            }, e.fn.button.defaults = {
                loadingText: "loading..."
            }, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
                return e.fn.button = n, this
            }, e(document).on("click.button.data-api", "[data-toggle^=button]", function(t) {
                var n = e(t.target);
                n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle")
            })
        }(window.jQuery), ! function(e) {
            "use strict";
            var t = function(t, n) {
                this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.options.pause == "hover" && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
            };
            t.prototype = {
                cycle: function(t) {
                    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
                },
                getActiveIndex: function() {
                    return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
                },
                to: function(t) {
                    var n = this.getActiveIndex(),
                        r = this;
                    if (t > this.$items.length - 1 || t < 0) return;
                    return this.sliding ? this.$element.one("slid", function() {
                        r.to(t)
                    }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", e(this.$items[t]))
                },
                pause: function(t) {
                    return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
                },
                next: function() {
                    if (this.sliding) return;
                    return this.slide("next")
                },
                prev: function() {
                    if (this.sliding) return;
                    return this.slide("prev")
                },
                slide: function(t, n) {
                    var r = this.$element.find(".item.active"),
                        i = n || r[t](),
                        s = this.interval,
                        o = t == "next" ? "left" : "right",
                        u = t == "next" ? "first" : "last",
                        a = this,
                        f;
                    this.sliding = !0, s && this.pause(), i = i.length ? i : this.$element.find(".item")[u](), f = e.Event("slide", {
                        relatedTarget: i[0],
                        direction: o
                    });
                    if (i.hasClass("active")) return;
                    this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                        var t = e(a.$indicators.children()[a.getActiveIndex()]);
                        t && t.addClass("active")
                    }));
                    if (e.support.transition && this.$element.hasClass("slide")) {
                        this.$element.trigger(f);
                        if (f.isDefaultPrevented()) return;
                        i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), this.$element.one(e.support.transition.end, function() {
                            i.removeClass([t, o].join(" ")).addClass("active"), r.removeClass(["active", o].join(" ")), a.sliding = !1, setTimeout(function() {
                                a.$element.trigger("slid")
                            }, 0)
                        })
                    } else {
                        this.$element.trigger(f);
                        if (f.isDefaultPrevented()) return;
                        r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                    }
                    return s && this.cycle(), this
                }
            };
            var n = e.fn.carousel;
            e.fn.carousel = function(n) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("carousel"),
                        s = e.extend({}, e.fn.carousel.defaults, typeof n == "object" && n),
                        o = typeof n == "string" ? n : s.slide;
                    i || r.data("carousel", i = new t(this, s)), typeof n == "number" ? i.to(n) : o ? i[o]() : s.interval && i.pause().cycle()
                })
            }, e.fn.carousel.defaults = {
                interval: 5e3,
                pause: "hover"
            }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
                return e.fn.carousel = n, this
            }, e(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
                var n = e(this),
                    r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")),
                    s = e.extend({}, i.data(), n.data()),
                    o;
                i.carousel(s), (o = n.attr("data-slide-to")) && i.data("carousel").pause().to(o).cycle(), t.preventDefault()
            })
        }(window.jQuery), ! function(e) {
            "use strict";
            var t = function(t, n) {
                this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
            };
            t.prototype = {
                constructor: t,
                dimension: function() {
                    var e = this.$element.hasClass("width");
                    return e ? "width" : "height"
                },
                show: function() {
                    var t, n, r, i;
                    if (this.transitioning || this.$element.hasClass("in")) return;
                    t = this.dimension(), n = e.camelCase(["scroll", t].join("-")), r = this.$parent && this.$parent.find("> .accordion-group > .in");
                    if (r && r.length) {
                        i = r.data("collapse");
                        if (i && i.transitioning) return;
                        r.collapse("hide"), i || r.data("collapse", null)
                    }
                    this.$element[t](0), this.transition("addClass", e.Event("show"), "shown"), e.support.transition && this.$element[t](this.$element[0][n])
                },
                hide: function() {
                    var t;
                    if (this.transitioning || !this.$element.hasClass("in")) return;
                    t = this.dimension(), this.reset(this.$element[t]()), this.transition("removeClass", e.Event("hide"), "hidden"), this.$element[t](0)
                },
                reset: function(e) {
                    var t = this.dimension();
                    return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[e !== null ? "addClass" : "removeClass"]("collapse"), this
                },
                transition: function(t, n, r) {
                    var i = this,
                        s = function() {
                            n.type == "show" && i.reset(), i.transitioning = 0, i.$element.trigger(r)
                        };
                    this.$element.trigger(n);
                    if (n.isDefaultPrevented()) return;
                    this.transitioning = 1, this.$element[t]("in"), e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, s) : s()
                },
                toggle: function() {
                    this[this.$element.hasClass("in") ? "hide" : "show"]()
                }
            };
            var n = e.fn.collapse;
            e.fn.collapse = function(n) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("collapse"),
                        s = e.extend({}, e.fn.collapse.defaults, r.data(), typeof n == "object" && n);
                    i || r.data("collapse", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.collapse.defaults = {
                toggle: !0
            }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
                return e.fn.collapse = n, this
            }, e(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
                var n = e(this),
                    r, i = n.attr("data-target") || t.preventDefault() || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""),
                    s = e(i).data("collapse") ? "toggle" : n.data();
                n[e(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), e(i).collapse(s)
            })
        }(window.jQuery), ! function(e) {
            "use strict";

            function r() {
                e(t).each(function() {
                    i(e(this)).removeClass("open")
                })
            }

            function i(t) {
                var n = t.attr("data-target"),
                    r;
                n || (n = t.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")), r = n && e(n);
                if (!r || !r.length) r = t.parent();
                return r
            }
            var t = "[data-toggle=dropdown]",
                n = function(t) {
                    var n = e(t).on("click.dropdown.data-api", this.toggle);
                    e("html").on("click.dropdown.data-api", function() {
                        n.parent().removeClass("open")
                    })
                };
            n.prototype = {
                constructor: n,
                toggle: function(t) {
                    var n = e(this),
                        s, o;
                    if (n.is(".disabled, :disabled")) return;
                    return s = i(n), o = s.hasClass("open"), r(), o || s.toggleClass("open"), n.focus(), !1
                },
                keydown: function(n) {
                    var r, s, o, u, a, f;
                    if (!/(38|40|27)/.test(n.keyCode)) return;
                    r = e(this), n.preventDefault(), n.stopPropagation();
                    if (r.is(".disabled, :disabled")) return;
                    u = i(r), a = u.hasClass("open");
                    if (!a || a && n.keyCode == 27) return n.which == 27 && u.find(t).focus(), r.click();
                    s = e("[role=menu] li:not(.divider):visible a", u);
                    if (!s.length) return;
                    f = s.index(s.filter(":focus")), n.keyCode == 38 && f > 0 && f--, n.keyCode == 40 && f < s.length - 1 && f++, ~f || (f = 0), s.eq(f).focus()
                }
            };
            var s = e.fn.dropdown;
            e.fn.dropdown = function(t) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("dropdown");
                    i || r.data("dropdown", i = new n(this)), typeof t == "string" && i[t].call(r)
                })
            }, e.fn.dropdown.Constructor = n, e.fn.dropdown.noConflict = function() {
                return e.fn.dropdown = s, this
            }, e(document).on("click.dropdown.data-api", r).on("click.dropdown.data-api", ".dropdown form", function(e) {
                e.stopPropagation()
            }).on("click.dropdown-menu", function(e) {
                e.stopPropagation()
            }).on("click.dropdown.data-api", t, n.prototype.toggle).on("keydown.dropdown.data-api", t + ", [role=menu]", n.prototype.keydown)
        }(window.jQuery), ! function(e) {
            "use strict";
            var t = function(t, n) {
                this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
            };
            t.prototype = {
                constructor: t,
                toggle: function() {
                    return this[this.isShown ? "hide" : "show"]()
                },
                show: function() {
                    var t = this,
                        n = e.Event("show");
                    this.$element.trigger(n);
                    if (this.isShown || n.isDefaultPrevented()) return;
                    this.isShown = !0, this.escape(), this.backdrop(function() {
                        var n = e.support.transition && t.$element.hasClass("fade");
                        t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function() {
                            t.$element.focus().trigger("shown")
                        }) : t.$element.focus().trigger("shown")
                    })
                },
                hide: function(t) {
                    t && t.preventDefault();
                    var n = this;
                    t = e.Event("hide"), this.$element.trigger(t);
                    if (!this.isShown || t.isDefaultPrevented()) return;
                    this.isShown = !1, this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
                },
                enforceFocus: function() {
                    var t = this;
                    e(document).on("focusin.modal", function(e) {
                        t.$element[0] !== e.target && !t.$element.has(e.target).length && t.$element.focus()
                    })
                },
                escape: function() {
                    var e = this;
                    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
                        t.which == 27 && e.hide()
                    }) : this.isShown || this.$element.off("keyup.dismiss.modal")
                },
                hideWithTransition: function() {
                    var t = this,
                        n = setTimeout(function() {
                            t.$element.off(e.support.transition.end), t.hideModal()
                        }, 500);
                    this.$element.one(e.support.transition.end, function() {
                        clearTimeout(n), t.hideModal()
                    })
                },
                hideModal: function() {
                    var e = this;
                    this.$element.hide(), this.backdrop(function() {
                        e.removeBackdrop(), e.$element.trigger("hidden")
                    })
                },
                removeBackdrop: function() {
                    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
                },
                backdrop: function(t) {
                    var n = this,
                        r = this.$element.hasClass("fade") ? "fade" : "";
                    if (this.isShown && this.options.backdrop) {
                        var i = e.support.transition && r;
                        this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.$backdrop.click(this.options.backdrop == "static" ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in");
                        if (!t) return;
                        i ? this.$backdrop.one(e.support.transition.end, t) : t()
                    } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t()
                }
            };
            var n = e.fn.modal;
            e.fn.modal = function(n) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("modal"),
                        s = e.extend({}, e.fn.modal.defaults, r.data(), typeof n == "object" && n);
                    i || r.data("modal", i = new t(this, s)), typeof n == "string" ? i[n]() : s.show && i.show()
                })
            }, e.fn.modal.defaults = {
                backdrop: 'static',
                keyboard: !0,
                show: !0
            }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
                return e.fn.modal = n, this
            }, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
                var n = e(this),
                    r = n.attr("href"),
                    i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                    s = i.data("modal") ? "toggle" : e.extend({
                        remote: !/#/.test(r) && r
                    }, i.data(), n.data());
                t.preventDefault(), i.modal(s).one("hide", function() {
                    n.focus()
                })
            })
        }(window.jQuery), ! function(e) {
            "use strict";
            var t = function(e, t) {
                this.init("tooltip", e, t)
            };
            t.prototype = {
                constructor: t,
                init: function(t, n, r) {
                    var i, s, o, u, a;
                    this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, o = this.options.trigger.split(" ");
                    for (a = o.length; a--;) u = o[a], u == "click" ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : u != "manual" && (i = u == "hover" ? "mouseenter" : "focus", s = u == "hover" ? "mouseleave" : "blur", this.$element.on(i + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
                    this.options.selector ? this._options = e.extend({}, this.options, {
                        trigger: "manual",
                        selector: ""
                    }) : this.fixTitle()
                },
                getOptions: function(t) {
                    return t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
                        show: t.delay,
                        hide: t.delay
                    }), t
                },
                enter: function(t) {
                    var n = e.fn[this.type].defaults,
                        r = {},
                        i;
                    this._options && e.each(this._options, function(e, t) {
                        n[e] != t && (r[e] = t)
                    }, this), i = e(t.currentTarget)[this.type](r).data(this.type);
                    if (!i.options.delay || !i.options.delay.show) return i.show();
                    clearTimeout(this.timeout), i.hoverState = "in", this.timeout = setTimeout(function() {
                        i.hoverState == "in" && i.show()
                    }, i.options.delay.show)
                },
                leave: function(t) {
                    var n = e(t.currentTarget)[this.type](this._options).data(this.type);
                    this.timeout && clearTimeout(this.timeout);
                    if (!n.options.delay || !n.options.delay.hide) return n.hide();
                    n.hoverState = "out", this.timeout = setTimeout(function() {
                        n.hoverState == "out" && n.hide()
                    }, n.options.delay.hide)
                },
                show: function() {
                    var t, n, r, i, s, o, u = e.Event("show");
                    if (this.hasContent() && this.enabled) {
                        this.$element.trigger(u);
                        if (u.isDefaultPrevented()) return;
                        t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), s = typeof this.options.placement == "function" ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, t.detach().css({
                            top: 0,
                            left: 0,
                            display: "block"
                        }), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), n = this.getPosition(), r = t[0].offsetWidth, i = t[0].offsetHeight;
                        switch (s) {
                            case "bottom":
                                o = {
                                    top: n.top + n.height,
                                    left: n.left + n.width / 2 - r / 2
                                };
                                break;
                            case "top":
                                o = {
                                    top: n.top - i,
                                    left: n.left + n.width / 2 - r / 2
                                };
                                break;
                            case "left":
                                o = {
                                    top: n.top + n.height / 2 - i / 2,
                                    left: n.left - r
                                };
                                break;
                            case "right":
                                o = {
                                    top: n.top + n.height / 2 - i / 2,
                                    left: n.left + n.width
                                }
                        }
                        this.applyPlacement(o, s), this.$element.trigger("shown")
                    }
                },
                applyPlacement: function(e, t) {
                    var n = this.tip(),
                        r = n[0].offsetWidth,
                        i = n[0].offsetHeight,
                        s, o, u, a;
                    n.offset(e).addClass(t).addClass("in"), s = n[0].offsetWidth, o = n[0].offsetHeight, t == "top" && o != i && (e.top = e.top + i - o, a = !0), t == "bottom" || t == "top" ? (u = 0, e.left < 0 && (u = e.left * -2, e.left = 0, n.offset(e), s = n[0].offsetWidth, o = n[0].offsetHeight), this.replaceArrow(u - r + s, s, "left")) : this.replaceArrow(o - i, o, "top"), a && n.offset(e)
                },
                replaceArrow: function(e, t, n) {
                    this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
                },
                setContent: function() {
                    var e = this.tip(),
                        t = this.getTitle();
                    e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
                },
                hide: function() {
                    function i() {
                        var t = setTimeout(function() {
                            n.off(e.support.transition.end).detach()
                        }, 500);
                        n.one(e.support.transition.end, function() {
                            clearTimeout(t), n.detach()
                        })
                    }
                    var t = this,
                        n = this.tip(),
                        r = e.Event("hide");
                    this.$element.trigger(r);
                    if (r.isDefaultPrevented()) return;
                    return n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? i() : n.detach(), this.$element.trigger("hidden"), this
                },
                fixTitle: function() {
                    var e = this.$element;
                    (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
                },
                hasContent: function() {
                    return this.getTitle()
                },
                getPosition: function() {
                    var t = this.$element[0];
                    return e.extend({}, typeof t.getBoundingClientRect == "function" ? t.getBoundingClientRect() : {
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    }, this.$element.offset())
                },
                getTitle: function() {
                    var e, t = this.$element,
                        n = this.options;
                    return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e
                },
                tip: function() {
                    return this.$tip = this.$tip || e(this.options.template)
                },
                arrow: function() {
                    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                },
                validate: function() {
                    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
                },
                enable: function() {
                    this.enabled = !0
                },
                disable: function() {
                    this.enabled = !1
                },
                toggleEnabled: function() {
                    this.enabled = !this.enabled
                },
                toggle: function(t) {
                    var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
                    n.tip().hasClass("in") ? n.hide() : n.show()
                },
                destroy: function() {
                    this.hide().$element.off("." + this.type).removeData(this.type)
                }
            };
            var n = e.fn.tooltip;
            e.fn.tooltip = function(n) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("tooltip"),
                        s = typeof n == "object" && n;
                    i || r.data("tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1
            }, e.fn.tooltip.noConflict = function() {
                return e.fn.tooltip = n, this
            }
        }(window.jQuery), ! function(e) {
            "use strict";
            var t = function(e, t) {
                this.init("popover", e, t)
            };
            t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
                constructor: t,
                setContent: function() {
                    var e = this.tip(),
                        t = this.getTitle(),
                        n = this.getContent();
                    e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in")
                },
                hasContent: function() {
                    return this.getTitle() || this.getContent()
                },
                getContent: function() {
                    var e, t = this.$element,
                        n = this.options;
                    return e = (typeof n.content == "function" ? n.content.call(t[0]) : n.content) || t.attr("data-content"), e
                },
                tip: function() {
                    return this.$tip || (this.$tip = e(this.options.template)), this.$tip
                },
                destroy: function() {
                    this.hide().$element.off("." + this.type).removeData(this.type)
                }
            });
            var n = e.fn.popover;
            e.fn.popover = function(n) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("popover"),
                        s = typeof n == "object" && n;
                    i || r.data("popover", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }), e.fn.popover.noConflict = function() {
                return e.fn.popover = n, this
            }
        }(window.jQuery), ! function(e) {
            "use strict";

            function t(t, n) {
                var r = e.proxy(this.process, this),
                    i = e(t).is("body") ? e(window) : e(t),
                    s;
                this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = i.on("scroll.scroll-spy.data-api", r), this.selector = (this.options.target || (s = e(t).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = e("body"), this.refresh(), this.process()
            }
            t.prototype = {
                constructor: t,
                refresh: function() {
                    var t = this,
                        n;
                    this.offsets = e([]), this.targets = e([]), n = this.$body.find(this.selector).map(function() {
                        var n = e(this),
                            r = n.data("target") || n.attr("href"),
                            i = /^#\w/.test(r) && e(r);
                        return i && i.length && [
                            [i.position().top + (!e.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), r]
                        ] || null
                    }).sort(function(e, t) {
                        return e[0] - t[0]
                    }).each(function() {
                        t.offsets.push(this[0]), t.targets.push(this[1])
                    })
                },
                process: function() {
                    var e = this.$scrollElement.scrollTop() + this.options.offset,
                        t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                        n = t - this.$scrollElement.height(),
                        r = this.offsets,
                        i = this.targets,
                        s = this.activeTarget,
                        o;
                    if (e >= n) return s != (o = i.last()[0]) && this.activate(o);
                    for (o = r.length; o--;) s != i[o] && e >= r[o] && (!r[o + 1] || e <= r[o + 1]) && this.activate(i[o])
                },
                activate: function(t) {
                    var n, r;
                    this.activeTarget = t, e(this.selector).parent(".active").removeClass("active"), r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', n = e(r).parent("li").addClass("active"), n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate")
                }
            };
            var n = e.fn.scrollspy;
            e.fn.scrollspy = function(n) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("scrollspy"),
                        s = typeof n == "object" && n;
                    i || r.data("scrollspy", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {
                offset: 10
            }, e.fn.scrollspy.noConflict = function() {
                return e.fn.scrollspy = n, this
            }, e(window).on("load", function() {
                e('[data-spy="scroll"]').each(function() {
                    var t = e(this);
                    t.scrollspy(t.data())
                })
            })
        }(window.jQuery), ! function(e) {
            "use strict";
            var t = function(t) {
                this.element = e(t)
            };
            t.prototype = {
                constructor: t,
                show: function() {
                    var t = this.element,
                        n = t.closest("ul:not(.dropdown-menu)"),
                        r = t.attr("data-target"),
                        i, s, o;
                    r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
                    if (t.parent("li").hasClass("active")) return;
                    i = n.find(".active:last a")[0], o = e.Event("show", {
                        relatedTarget: i
                    }), t.trigger(o);
                    if (o.isDefaultPrevented()) return;
                    s = e(r), this.activate(t.parent("li"), n), this.activate(s, s.parent(), function() {
                        t.trigger({
                            type: "shown",
                            relatedTarget: i
                        })
                    })
                },
                activate: function(t, n, r) {
                    function o() {
                        i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
                    }
                    var i = n.find("> .active"),
                        s = r && e.support.transition && i.hasClass("fade");
                    s ? i.one(e.support.transition.end, o) : o(), i.removeClass("in")
                }
            };
            var n = e.fn.tab;
            e.fn.tab = function(n) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("tab");
                    i || r.data("tab", i = new t(this)), typeof n == "string" && i[n]()
                })
            }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
                return e.fn.tab = n, this
            }, e(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
                t.preventDefault(), e(this).tab("show")
            })
        }(window.jQuery), ! function(e) {
            "use strict";
            var t = function(t, n) {
                this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = e(this.options.menu), this.shown = !1, this.listen()
            };
            t.prototype = {
                constructor: t,
                select: function() {
                    var e = this.$menu.find(".active").attr("data-value");
                    return this.$element.val(this.updater(e)).change(), this.hide()
                },
                updater: function(e) {
                    return e
                },
                show: function() {
                    var t = e.extend({}, this.$element.position(), {
                        height: this.$element[0].offsetHeight
                    });
                    return this.$menu.insertAfter(this.$element).css({
                        top: t.top + t.height,
                        left: t.left
                    }).show(), this.shown = !0, this
                },
                hide: function() {
                    return this.$menu.hide(), this.shown = !1, this
                },
                lookup: function(t) {
                    var n;
                    return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (n = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, n ? this.process(n) : this)
                },
                process: function(t) {
                    var n = this;
                    return t = e.grep(t, function(e) {
                        return n.matcher(e)
                    }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
                },
                matcher: function(e) {
                    return ~e.toLowerCase().indexOf(this.query.toLowerCase())
                },
                sorter: function(e) {
                    var t = [],
                        n = [],
                        r = [],
                        i;
                    while (i = e.shift()) i.toLowerCase().indexOf(this.query.toLowerCase()) ? ~i.indexOf(this.query) ? n.push(i) : r.push(i) : t.push(i);
                    return t.concat(n, r)
                },
                highlighter: function(e) {
                    var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                    return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t) {
                        return "<strong>" + t + "</strong>"
                    })
                },
                render: function(t) {
                    var n = this;
                    return t = e(t).map(function(t, r) {
                        return t = e(n.options.item).attr("data-value", r), t.find("a").html(n.highlighter(r)), t[0]
                    }), t.first().addClass("active"), this.$menu.html(t), this
                },
                next: function(t) {
                    var n = this.$menu.find(".active").removeClass("active"),
                        r = n.next();
                    r.length || (r = e(this.$menu.find("li")[0])), r.addClass("active")
                },
                prev: function(e) {
                    var t = this.$menu.find(".active").removeClass("active"),
                        n = t.prev();
                    n.length || (n = this.$menu.find("li").last()), n.addClass("active")
                },
                listen: function() {
                    this.$element.on("focus", e.proxy(this.focus, this)).on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", e.proxy(this.keydown, this)), this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this)).on("mouseleave", "li", e.proxy(this.mouseleave, this))
                },
                eventSupported: function(e) {
                    var t = e in this.$element;
                    return t || (this.$element.setAttribute(e, "return;"), t = typeof this.$element[e] == "function"), t
                },
                move: function(e) {
                    if (!this.shown) return;
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
                },
                keydown: function(t) {
                    this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [40, 38, 9, 13, 27]), this.move(t)
                },
                keypress: function(e) {
                    if (this.suppressKeyPressRepeat) return;
                    this.move(e)
                },
                keyup: function(e) {
                    switch (e.keyCode) {
                        case 40:
                        case 38:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        case 9:
                        case 13:
                            if (!this.shown) return;
                            this.select();
                            break;
                        case 27:
                            if (!this.shown) return;
                            this.hide();
                            break;
                        default:
                            this.lookup()
                    }
                    e.stopPropagation(), e.preventDefault()
                },
                focus: function(e) {
                    this.focused = !0
                },
                blur: function(e) {
                    this.focused = !1, !this.mousedover && this.shown && this.hide()
                },
                click: function(e) {
                    e.stopPropagation(), e.preventDefault(), this.select(), this.$element.focus()
                },
                mouseenter: function(t) {
                    this.mousedover = !0, this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active")
                },
                mouseleave: function(e) {
                    this.mousedover = !1, !this.focused && this.shown && this.hide()
                }
            };
            var n = e.fn.typeahead;
            e.fn.typeahead = function(n) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("typeahead"),
                        s = typeof n == "object" && n;
                    i || r.data("typeahead", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.typeahead.defaults = {
                source: [],
                items: 8,
                menu: '<ul class="typeahead dropdown-menu"></ul>',
                item: '<li><a href="#"></a></li>',
                minLength: 1
            }, e.fn.typeahead.Constructor = t, e.fn.typeahead.noConflict = function() {
                return e.fn.typeahead = n, this
            }, e(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(t) {
                var n = e(this);
                if (n.data("typeahead")) return;
                n.typeahead(n.data())
            })
        }(window.jQuery), ! function(e) {
            "use strict";
            var t = function(t, n) {
                this.options = e.extend({}, e.fn.affix.defaults, n), this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)).on("click.affix.data-api", e.proxy(function() {
                    setTimeout(e.proxy(this.checkPosition, this), 1)
                }, this)), this.$element = e(t), this.checkPosition()
            };
            t.prototype.checkPosition = function() {
                if (!this.$element.is(":visible")) return;
                var t = e(document).height(),
                    n = this.$window.scrollTop(),
                    r = this.$element.offset(),
                    i = this.options.offset,
                    s = i.bottom,
                    o = i.top,
                    u = "affix affix-top affix-bottom",
                    a;
                typeof i != "object" && (s = o = i), typeof o == "function" && (o = i.top()), typeof s == "function" && (s = i.bottom()), a = this.unpin != null && n + this.unpin <= r.top ? !1 : s != null && r.top + this.$element.height() >= t - s ? "bottom" : o != null && n <= o ? "top" : !1;
                if (this.affixed === a) return;
                this.affixed = a, this.unpin = a == "bottom" ? r.top - n : null, this.$element.removeClass(u).addClass("affix" + (a ? "-" + a : ""))
            };
            var n = e.fn.affix;
            e.fn.affix = function(n) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("affix"),
                        s = typeof n == "object" && n;
                    i || r.data("affix", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }, e.fn.affix.Constructor = t, e.fn.affix.defaults = {
                offset: 0
            }, e.fn.affix.noConflict = function() {
                return e.fn.affix = n, this
            }, e(window).on("load", function() {
                e('[data-spy="affix"]').each(function() {
                    var t = e(this),
                        n = t.data();
                    n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
                })
            })
        }(window.jQuery);
    })($);
});;
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
        t.prototype = {
            constructor: t,
            initInput: function() {
                this.input = this.options.input, this.value = this.input.str2value(this.options.value)
            },
            initTemplate: function() {
                this.$form = e(e.fn.editableform.template)
            },
            initButtons: function() {
                this.$form.find(".editable-buttons").append(e.fn.editableform.buttons)
            },
            render: function() {
                this.$loading = e(e.fn.editableform.loading), this.$div.empty().append(this.$loading), this.initTemplate(), this.options.showbuttons ? this.initButtons() : this.$form.find(".editable-buttons").remove(), this.showLoading(), this.$div.triggerHandler("rendering"), this.initInput(), this.input.prerender(), this.$form.find("div.editable-input").append(this.input.$tpl), this.$div.append(this.$form), e.when(this.input.render()).then(e.proxy(function() {
                    this.options.showbuttons || this.input.autosubmit(), this.$form.find(".editable-cancel").click(e.proxy(this.cancel, this)), this.input.error ? (this.error(this.input.error), this.$form.find(".editable-submit").attr("disabled", !0), this.input.$input.attr("disabled", !0), this.$form.submit(function(e) {
                        e.preventDefault()
                    })) : (this.error(!1), this.input.$input.removeAttr("disabled"), this.$form.find(".editable-submit").removeAttr("disabled"), this.input.value2input(this.value), this.$form.submit(e.proxy(this.submit, this))), this.$div.triggerHandler("rendered"), this.showForm(), this.input.postrender && this.input.postrender()
                }, this))
            },
            cancel: function() {
                this.$div.triggerHandler("cancel")
            },
            showLoading: function() {
                var e, t;
                this.$form ? (e = this.$form.outerWidth(), t = this.$form.outerHeight(), e && this.$loading.width(e), t && this.$loading.height(t), this.$form.hide()) : (e = this.$loading.parent().width(), e && this.$loading.width(e)), this.$loading.show()
            },
            showForm: function(e) {
                this.$loading.hide(), this.$form.show(), e !== !1 && this.input.activate(), this.$div.triggerHandler("show")
            },
            error: function(t) {
                var n = this.$form.find(".control-group"),
                    r = this.$form.find(".editable-error-block"),
                    i;
                if (t === !1) n.removeClass(e.fn.editableform.errorGroupClass), r.removeClass(e.fn.editableform.errorBlockClass).empty().hide();
                else {
                    if (t) {
                        i = t.split("\n");
                        for (var s = 0; s < i.length; s++) i[s] = e("<div>").text(i[s]).html();
                        t = i.join("<br>")
                    }
                    n.addClass(e.fn.editableform.errorGroupClass), r.addClass(e.fn.editableform.errorBlockClass).html(t).show()
                }
            },
            submit: function(t) {
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
                    t && typeof t == "object" && t.hasOwnProperty("newValue") && (r = t.newValue), this.error(!1), this.value = r, this.$div.triggerHandler("save", {
                        newValue: r,
                        response: e
                    })
                }, this)).fail(e.proxy(function(e) {
                    this.error(typeof e == "string" ? e : e.responseText || e.statusText || "Unknown error!"), this.showForm()
                }, this))
            },
            save: function(t) {
                var n = this.input.value2submit(t);
                this.options.pk = e.fn.editableutils.tryParseJson(this.options.pk, !0);
                var r = typeof this.options.pk == "function" ? this.options.pk.call(this.options.scope) : this.options.pk,
                    i = !!(typeof this.options.url == "function" || this.options.url && (this.options.send === "always" || this.options.send === "auto" && r)),
                    s;
                if (i) return this.showLoading(), s = {
                    name: this.options.name || "",
                    value: n,
                    pk: r
                }, typeof this.options.params == "function" ? s = this.options.params.call(this.options.scope, s) : (this.options.params = e.fn.editableutils.tryParseJson(this.options.params, !0), e.extend(s, this.options.params)), typeof this.options.url == "function" ? this.options.url.call(this.options.scope, s) : e.ajax(e.extend({
                    url: this.options.url,
                    data: s,
                    type: "POST"
                }, this.options.ajaxOptions))
            },
            validate: function(e) {
                e === undefined && (e = this.value);
                if (typeof this.options.validate == "function") return this.options.validate.call(this.options.scope, e)
            },
            option: function(e, t) {
                e in this.options && (this.options[e] = t), e === "value" && this.setValue(t)
            },
            setValue: function(e, t) {
                t ? this.value = this.input.str2value(e) : this.value = e, this.$form && this.$form.is(":visible") && this.input.value2input(this.value)
            }
        }, e.fn.editableform = function(n) {
            var r = arguments;
            return this.each(function() {
                var i = e(this),
                    s = i.data("editableform"),
                    o = typeof n == "object" && n;
                s || i.data("editableform", s = new t(this, o)), typeof n == "string" && s[n].apply(s, Array.prototype.slice.call(r, 1))
            })
        }, e.fn.editableform.Constructor = t, e.fn.editableform.defaults = {
            type: "text",
            url: null,
            params: null,
            name: null,
            pk: null,
            value: null,
            send: "auto",
            validate: null,
            success: null,
            ajaxOptions: null,
            showbuttons: !0,
            scope: null,
            savenochange: !1
        }, e.fn.editableform.template = '<form class="form-inline editableform"><div class="control-group"><div><div class="editable-input"></div><div class="editable-buttons"></div></div><div class="editable-error-block"></div></div></form>', e.fn.editableform.loading = '<div class="editableform-loading"></div>', e.fn.editableform.buttons = '<button type="submit" class="editable-submit">ok</button><button type="button" class="editable-cancel">cancel</button>', e.fn.editableform.errorGroupClass = null, e.fn.editableform.errorBlockClass = "editable-error"
    })(window.jQuery),
    function(e) {
        e.fn.editableutils = {
            inherit: function(e, t) {
                var n = function() {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.superclass = t.prototype
            },
            setCursorPosition: function(e, t) {
                if (e.setSelectionRange) e.setSelectionRange(t, t);
                else if (e.createTextRange) {
                    var n = e.createTextRange();
                    n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select()
                }
            },
            tryParseJson: function(e, t) {
                if (typeof e == "string" && e.length && e.match(/^[\{\[].*[\}\]]$/))
                    if (t) try {
                        e = (new Function("return " + e))()
                    } catch (n) {} finally {
                        return e
                    } else e = (new Function("return " + e))();
                return e
            },
            sliceObj: function(t, n, r) {
                var i, s, o = {};
                if (!e.isArray(n) || !n.length) return o;
                for (var u = 0; u < n.length; u++) {
                    i = n[u], t.hasOwnProperty(i) && (o[i] = t[i]);
                    if (r === !0) continue;
                    s = i.toLowerCase(), t.hasOwnProperty(s) && (o[i] = t[s])
                }
                return o
            },
            getConfigData: function(t) {
                var n = {};
                return e.each(t.data(), function(e, t) {
                    if (typeof t != "object" || t && typeof t == "object" && (t.constructor === Object || t.constructor === Array)) n[e] = t
                }), n
            },
            objectKeys: function(e) {
                if (Object.keys) return Object.keys(e);
                if (e !== Object(e)) throw new TypeError("Object.keys called on a non-object");
                var t = [],
                    n;
                for (n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            },
            escape: function(t) {
                return e("<div>").text(t).html()
            },
            itemsByValue: function(t, n, r) {
                if (!n || t === null) return [];
                r = r || "value";
                var i = e.isArray(t),
                    s = [],
                    o = this;
                return e.each(n, function(n, u) {
                    u.children ? s = s.concat(o.itemsByValue(t, u.children, r)) : i ? e.grep(t, function(e) {
                        return e == (u && typeof u === "object" ? u[r] : u)
                    }).length && s.push(u) : t == (u && typeof u === "object" ? u[r] : u) && s.push(u)
                }), s
            },
            createInput: function(t) {
                var n, r, i, s = t.type;
                return s === "date" && (t.mode === "inline" ? e.fn.editabletypes.datefield ? s = "datefield" : e.fn.editabletypes.dateuifield && (s = "dateuifield") : e.fn.editabletypes.date ? s = "date" : e.fn.editabletypes.dateui && (s = "dateui"), s === "date" && !e.fn.editabletypes.date && (s = "combodate")), s === "wysihtml5" && !e.fn.editabletypes[s] && (s = "textarea"), typeof e.fn.editabletypes[s] == "function" ? (n = e.fn.editabletypes[s], r = this.sliceObj(t, this.objectKeys(n.defaults)), i = new n(r), i) : (e.error("Unknown type: " + s), !1)
            }
        }
    }(window.jQuery),
    function(e) {
        var t = function(e, t) {
                this.init(e, t)
            },
            n = function(e, t) {
                this.init(e, t)
            };
        t.prototype = {
            containerName: null,
            innerCss: null,
            init: function(n, r) {
                this.$element = e(n), this.options = e.extend({}, e.fn.editableContainer.defaults, r), this.splitOptions(), this.formOptions.scope = this.$element[0], this.initContainer(), this.$element.on("destroyed", e.proxy(function() {
                    this.destroy()
                }, this)), e(document).data("editable-handlers-attached") || (e(document).on("keyup.editable", function(t) {
                    t.which === 27 && e(".editable-open").editableContainer("hide")
                }), e(document).on("click.editable", function(n) {
                    var r = e(n.target),
                        i, s = [".editable-container", ".ui-datepicker-header", ".modal-backdrop", ".bootstrap-wysihtml5-insert-image-modal", ".bootstrap-wysihtml5-insert-link-modal"];
                    for (i = 0; i < s.length; i++)
                        if (r.is(s[i]) || r.parents(s[i]).length) return;
                    t.prototype.closeOthers(n.target)
                }), e(document).data("editable-handlers-attached", !0))
            },
            splitOptions: function() {
                this.containerOptions = {}, this.formOptions = {};
                var t = e.fn[this.containerName].defaults;
                for (var n in this.options) n in t ? this.containerOptions[n] = this.options[n] : this.formOptions[n] = this.options[n]
            },
            tip: function() {
                return this.container() ? this.container().$tip : null
            },
            container: function() {
                return this.$element.data(this.containerDataName || this.containerName)
            },
            call: function() {
                this.$element[this.containerName].apply(this.$element, arguments)
            },
            initContainer: function() {
                this.call(this.containerOptions)
            },
            renderForm: function() {
                this.$form.editableform(this.formOptions).on({
                    save: e.proxy(this.save, this),
                    nochange: e.proxy(function() {
                        this.hide("nochange")
                    }, this),
                    cancel: e.proxy(function() {
                        this.hide("cancel")
                    }, this),
                    show: e.proxy(this.setPosition, this),
                    rendering: e.proxy(this.setPosition, this),
                    resize: e.proxy(this.setPosition, this),
                    rendered: e.proxy(function() {
                        this.$element.triggerHandler("shown")
                    }, this)
                }).editableform("render")
            },
            show: function(t) {
                this.$element.addClass("editable-open"), t !== !1 && this.closeOthers(this.$element[0]), this.innerShow(), this.tip().addClass("editable-container"), this.$form, this.$form = e("<div>"), this.tip().is(this.innerCss) ? this.tip().append(this.$form) : this.tip().find(this.innerCss).append(this.$form), this.renderForm()
            },
            hide: function(e) {
                if (!this.tip() || !this.tip().is(":visible") || !this.$element.hasClass("editable-open")) return;
                this.$element.removeClass("editable-open"), this.innerHide(), this.$element.triggerHandler("hidden", e)
            },
            innerShow: function() {},
            innerHide: function() {},
            toggle: function(e) {
                this.container() && this.tip() && this.tip().is(":visible") ? this.hide() : this.show(e)
            },
            setPosition: function() {},
            save: function(e, t) {
                this.$element.triggerHandler("save", t), this.hide("save")
            },
            option: function(e, t) {
                this.options[e] = t, e in this.containerOptions ? (this.containerOptions[e] = t, this.setContainerOption(e, t)) : (this.formOptions[e] = t, this.$form && this.$form.editableform("option", e, t))
            },
            setContainerOption: function(e, t) {
                this.call("option", e, t)
            },
            destroy: function() {
                this.hide(), this.innerDestroy(), this.$element.off("destroyed"), this.$element.removeData("editableContainer")
            },
            innerDestroy: function() {},
            closeOthers: function(t) {
                e(".editable-open").each(function(n, r) {
                    if (r === t || e(r).find(t).length) return;
                    var i = e(r),
                        s = i.data("editableContainer");
                    if (!s) return;
                    s.options.onblur === "cancel" ? i.data("editableContainer").hide("onblur") : s.options.onblur === "submit" && i.data("editableContainer").tip().find("form").submit()
                })
            },
            activate: function() {
                this.tip && this.tip().is(":visible") && this.$form && this.$form.data("editableform").input.activate()
            }
        }, e.fn.editableContainer = function(r) {
            var i = arguments;
            return this.each(function() {
                var s = e(this),
                    o = "editableContainer",
                    u = s.data(o),
                    a = typeof r == "object" && r,
                    f = a.mode === "inline" ? n : t;
                u || s.data(o, u = new f(this, a)), typeof r == "string" && u[r].apply(u, Array.prototype.slice.call(i, 1))
            })
        }, e.fn.editableContainer.Popup = t, e.fn.editableContainer.Inline = n, e.fn.editableContainer.defaults = {
            value: null,
            placement: "top",
            autohide: !0,
            onblur: "cancel",
            anim: !1,
            mode: "popup"
        }, jQuery.event.special.destroyed = {
            remove: function(e) {
                e.handler && e.handler()
            }
        }
    }(window.jQuery),
    function(e) {
        e.extend(e.fn.editableContainer.Inline.prototype, e.fn.editableContainer.Popup.prototype, {
            containerName: "editableform",
            innerCss: ".editable-inline",
            initContainer: function() {
                this.$tip = e("<span></span>").addClass("editable-inline"), this.options.anim || (this.options.anim = 0)
            },
            splitOptions: function() {
                this.containerOptions = {}, this.formOptions = this.options
            },
            tip: function() {
                return this.$tip
            },
            innerShow: function() {
                this.$element.hide(), this.tip().insertAfter(this.$element).show()
            },
            innerHide: function() {
                this.$tip.hide(this.options.anim, e.proxy(function() {
                    this.$element.show(), this.innerDestroy()
                }, this))
            },
            innerDestroy: function() {
                this.tip() && this.tip().empty().remove()
            }
        })
    }(window.jQuery),
    function(e) {
        var t = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, e.fn.editable.defaults, n, e.fn.editableutils.getConfigData(this.$element)), this.options.selector ? this.initLive() : this.init()
        };
        t.prototype = {
            constructor: t,
            init: function() {
                var t = !1,
                    n, r;
                this.options.name = this.options.name || this.$element.attr("id"), this.options.scope = this.$element[0], this.input = e.fn.editableutils.createInput(this.options);
                if (!this.input) return;
                this.options.value === undefined || this.options.value === null ? (this.value = this.input.html2value(e.trim(this.$element.html())), t = !0) : (this.options.value = e.fn.editableutils.tryParseJson(this.options.value, !0), typeof this.options.value == "string" ? this.value = this.input.str2value(this.options.value) : this.value = this.options.value), this.$element.addClass("editable"), this.options.toggle !== "manual" ? (this.$element.addClass("editable-click"), this.$element.on(this.options.toggle + ".editable", e.proxy(function(e) {
                    e.preventDefault();
                    if (this.options.toggle === "mouseenter") this.show();
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
            },
            initLive: function() {
                var t = this.options.selector;
                this.options.selector = !1, this.options.autotext = "never", this.$element.on(this.options.toggle + ".editable", t, e.proxy(function(t) {
                    var n = e(t.target);
                    n.data("editable") || (n.hasClass(this.options.emptyclass) && n.empty(), n.editable(this.options).trigger(t))
                }, this))
            },
            render: function(e) {
                if (this.options.display === !1) return;
                return this.input.value2htmlFinal ? this.input.value2html(this.value, this.$element[0], this.options.display, e) : typeof this.options.display == "function" ? this.options.display.call(this.$element[0], this.value, e) : this.input.value2html(this.value, this.$element[0])
            },
            enable: function() {
                this.options.disabled = !1, this.$element.removeClass("editable-disabled"), this.handleEmpty(this.isEmpty), this.options.toggle !== "manual" && this.$element.attr("tabindex") === "-1" && this.$element.removeAttr("tabindex")
            },
            disable: function() {
                this.options.disabled = !0, this.hide(), this.$element.addClass("editable-disabled"), this.handleEmpty(this.isEmpty), this.$element.attr("tabindex", -1)
            },
            toggleDisabled: function() {
                this.options.disabled ? this.enable() : this.disable()
            },
            option: function(t, n) {
                if (t && typeof t == "object") {
                    e.each(t, e.proxy(function(t, n) {
                        this.option(e.trim(t), n)
                    }, this));
                    return
                }
                this.options[t] = n;
                if (t === "disabled") return n ? this.disable() : this.enable();
                t === "value" && this.setValue(n), this.container && this.container.option(t, n), this.input.option && this.input.option(t, n)
            },
            handleEmpty: function(t) {
                if (this.options.display === !1) return;
                this.isEmpty = t !== undefined ? t : e.trim(this.$element.text()) === "", this.options.disabled ? this.isEmpty && (this.$element.empty(), this.options.emptyclass && this.$element.removeClass(this.options.emptyclass)) : this.isEmpty ? (this.$element.text(this.options.emptytext), this.options.emptyclass && this.$element.addClass(this.options.emptyclass)) : this.options.emptyclass && this.$element.removeClass(this.options.emptyclass)
            },
            show: function(t) {
                if (this.options.disabled) return;
                if (!this.container) {
                    var n = e.extend({}, this.options, {
                        value: this.value,
                        input: this.input
                    });
                    this.$element.editableContainer(n), this.$element.on("save.internal", e.proxy(this.save, this)), this.container = this.$element.data("editableContainer")
                } else if (this.container.tip().is(":visible")) return;
                this.container.show(t)
            },
            hide: function() {
                this.container && this.container.hide()
            },
            toggle: function(e) {
                this.container && this.container.tip().is(":visible") ? this.hide() : this.show(e)
            },
            save: function(e, t) {
                if (this.options.unsavedclass) {
                    var n = !1;
                    n = n || typeof this.options.url == "function", n = n || this.options.display === !1, n = n || t.response !== undefined, n = n || this.options.savenochange && this.input.value2str(this.value) !== this.input.value2str(t.newValue), n ? this.$element.removeClass(this.options.unsavedclass) : this.$element.addClass(this.options.unsavedclass)
                }
                this.setValue(t.newValue, !1, t.response)
            },
            validate: function() {
                if (typeof this.options.validate == "function") return this.options.validate.call(this, this.value)
            },
            setValue: function(t, n, r) {
                n ? this.value = this.input.str2value(t) : this.value = t, this.container && this.container.option("value", this.value), e.when(this.render(r)).then(e.proxy(function() {
                    this.handleEmpty()
                }, this))
            },
            activate: function() {
                this.container && this.container.activate()
            },
            destroy: function() {
                this.container && this.container.destroy(), this.options.toggle !== "manual" && (this.$element.removeClass("editable-click"), this.$element.off(this.options.toggle + ".editable")), this.$element.off("save.internal"), this.$element.removeClass("editable"), this.$element.removeClass("editable-open"), this.$element.removeData("editable")
            }
        }, e.fn.editable = function(n) {
            var r = {},
                i = arguments,
                s = "editable";
            switch (n) {
                case "validate":
                    return this.each(function() {
                        var t = e(this),
                            n = t.data(s),
                            i;
                        n && (i = n.validate()) && (r[n.options.name] = i)
                    }), r;
                case "getValue":
                    return this.each(function() {
                        var t = e(this),
                            n = t.data(s);
                        n && n.value !== undefined && n.value !== null && (r[n.options.name] = n.input.value2submit(n.value))
                    }), r;
                case "submit":
                    var o = arguments[1] || {},
                        u = this,
                        a = this.editable("validate"),
                        f;
                    return e.isEmptyObject(a) ? (f = this.editable("getValue"), o.data && e.extend(f, o.data), e.ajax(e.extend({
                        url: o.url,
                        data: f,
                        type: "POST"
                    }, o.ajaxOptions)).success(function(e) {
                        typeof o.success == "function" && o.success.call(u, e, o)
                    }).error(function() {
                        typeof o.error == "function" && o.error.apply(u, arguments)
                    })) : typeof o.error == "function" && o.error.call(u, a), this
            }
            return this.each(function() {
                var r = e(this),
                    o = r.data(s),
                    u = typeof n == "object" && n;
                o || r.data(s, o = new t(this, u)), typeof n == "string" && o[n].apply(o, Array.prototype.slice.call(i, 1))
            })
        }, e.fn.editable.defaults = {
            type: "text",
            disabled: !1,
            toggle: "click",
            emptytext: "Empty",
            autotext: "auto",
            value: null,
            display: null,
            emptyclass: "editable-empty",
            unsavedclass: "editable-unsaved",
            selector: null
        }
    }(window.jQuery),
    function(e) {
        e.fn.editabletypes = {};
        var t = function() {};
        t.prototype = {
            init: function(t, n, r) {
                this.type = t, this.options = e.extend({}, r, n)
            },
            prerender: function() {
                this.$tpl = e(this.options.tpl), this.$input = this.$tpl, this.$clear = null, this.error = null
            },
            render: function() {},
            value2html: function(t, n) {
                e(n).text(t)
            },
            html2value: function(t) {
                return e("<div>").html(t).text()
            },
            value2str: function(e) {
                return e
            },
            str2value: function(e) {
                return e
            },
            value2submit: function(e) {
                return e
            },
            value2input: function(e) {
                this.$input.val(e)
            },
            input2value: function() {
                return this.$input.val()
            },
            activate: function() {
                this.$input.is(":visible") && this.$input.focus()
            },
            clear: function() {
                this.$input.val(null)
            },
            escape: function(t) {
                return e("<div>").text(t).html()
            },
            autosubmit: function() {},
            setClass: function() {
                this.options.inputclass && this.$input.addClass(this.options.inputclass)
            },
            setAttr: function(e) {
                this.options[e] !== undefined && this.options[e] !== null && this.$input.attr(e, this.options[e])
            },
            option: function(e, t) {
                this.options[e] = t
            }
        }, t.defaults = {
            tpl: "",
            inputclass: "input-medium",
            scope: null
        }, e.extend(e.fn.editabletypes, {
            abstractinput: t
        })
    }(window.jQuery),
    function(e) {
        var t = function(e) {};
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            render: function() {
                var t = e.Deferred();
                return this.error = null, this.onSourceReady(function() {
                    this.renderList(), t.resolve()
                }, function() {
                    this.error = this.options.sourceError, t.resolve()
                }), t.promise()
            },
            html2value: function(e) {
                return null
            },
            value2html: function(t, n, r, i) {
                var s = e.Deferred(),
                    o = function() {
                        typeof r == "function" ? r.call(n, t, this.sourceData, i) : this.value2htmlFinal(t, n), s.resolve()
                    };
                return t === null ? o.call(this) : this.onSourceReady(o, function() {
                    s.resolve()
                }), s.promise()
            },
            onSourceReady: function(t, n) {
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
                        var s = i,
                            o;
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
                    e.ajax({
                        url: i,
                        type: "get",
                        cache: !1,
                        dataType: "json",
                        success: e.proxy(function(r) {
                            o && (o.loading = !1), this.sourceData = this.makeArray(r), e.isArray(this.sourceData) ? (o && (o.sourceData = this.sourceData, e.each(o.callbacks, function() {
                                this.call()
                            })), this.doPrepend(), t.call(this)) : (n.call(this), o && e.each(o.err_callbacks, function() {
                                this.call()
                            }))
                        }, this),
                        error: e.proxy(function() {
                            n.call(this), o && (o.loading = !1, e.each(o.err_callbacks, function() {
                                this.call()
                            }))
                        }, this)
                    })
                } else this.sourceData = this.makeArray(i), e.isArray(this.sourceData) ? (this.doPrepend(), t.call(this)) : n.call(this)
            },
            doPrepend: function() {
                if (this.options.prepend === null || this.options.prepend === undefined) return;
                e.isArray(this.prependData) || (e.isFunction(this.options.prepend) && (this.options.prepend = this.options.prepend.call(this.options.scope)), this.options.prepend = e.fn.editableutils.tryParseJson(this.options.prepend, !0), typeof this.options.prepend == "string" && (this.options.prepend = {
                    "": this.options.prepend
                }), this.prependData = this.makeArray(this.options.prepend)), e.isArray(this.prependData) && e.isArray(this.sourceData) && (this.sourceData = this.prependData.concat(this.sourceData))
            },
            renderList: function() {},
            value2htmlFinal: function(e, t) {},
            makeArray: function(t) {
                var n, r, i = [],
                    s, o;
                if (!t || typeof t == "string") return null;
                if (e.isArray(t)) {
                    o = function(e, t) {
                        r = {
                            value: e,
                            text: t
                        };
                        if (n++ >= 2) return !1
                    };
                    for (var u = 0; u < t.length; u++) s = t[u], typeof s == "object" ? (n = 0, e.each(s, o), n === 1 ? i.push(r) : n > 1 && (s.children && (s.children = this.makeArray(s.children)), i.push(s))) : i.push({
                        value: s,
                        text: s
                    })
                } else e.each(t, function(e, t) {
                    i.push({
                        value: e,
                        text: t
                    })
                });
                return i
            },
            option: function(e, t) {
                this.options[e] = t, e === "source" && (this.sourceData = null), e === "prepend" && (this.prependData = null)
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            source: null,
            prepend: !1,
            sourceError: "Error when loading list",
            sourceCache: !0
        }), e.fn.editabletypes.list = t
    }(window.jQuery),
    function(e) {
        var t = function(e) {
            this.init("text", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            render: function() {
                this.renderClear(), this.setClass(), this.setAttr("placeholder")
            },
            activate: function() {
                this.$input.is(":visible") && (this.$input.focus(), e.fn.editableutils.setCursorPosition(this.$input.get(0), this.$input.val().length), this.toggleClear && this.toggleClear())
            },
            renderClear: function() {
                this.options.clear && (this.$clear = e('<span class="editable-clear-x"></span>'), this.$input.after(this.$clear).css("padding-right", 24).keyup(e.proxy(function(t) {
                    if (~e.inArray(t.keyCode, [40, 38, 9, 13, 27])) return;
                    clearTimeout(this.t);
                    var n = this;
                    this.t = setTimeout(function() {
                        n.toggleClear(t)
                    }, 100)
                }, this)).parent().css("position", "relative"), this.$clear.click(e.proxy(this.clear, this)))
            },
            postrender: function() {
                if (this.$clear) {
                    var e = this.$input.outerHeight() || 20,
                        t = (e - this.$clear.height()) / 2;
                    t < 3 && (t = 3), this.$clear.css({
                        bottom: t,
                        right: t
                    })
                }
            },
            toggleClear: function(e) {
                if (!this.$clear) return;
                var t = this.$input.val().length,
                    n = this.$clear.is(":visible");
                t && !n && this.$clear.show(), !t && n && this.$clear.hide()
            },
            clear: function() {
                this.$clear.hide(), this.$input.val("").focus()
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            tpl: '<input type="text">',
            placeholder: null,
            clear: !0
        }), e.fn.editabletypes.text = t
    }(window.jQuery),
    function(e) {
        var t = function(e) {
            this.init("textarea", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            render: function() {
                this.setClass(), this.setAttr("placeholder"), this.setAttr("rows"), this.$input.keydown(function(t) {
                    t.ctrlKey && t.which === 13 && e(this).closest("form").submit()
                })
            },
            value2html: function(t, n) {
                var r = "",
                    i;
                if (t) {
                    i = t.split("\n");
                    for (var s = 0; s < i.length; s++) i[s] = e("<div>").text(i[s]).html();
                    r = i.join("<br>")
                }
                e(n).html(r)
            },
            html2value: function(t) {
                if (!t) return "";
                var n = new RegExp(String.fromCharCode(10), "g"),
                    r = t.split(/<br\s*\/?>/i);
                for (var i = 0; i < r.length; i++) {
                    var s = e("<div>").html(r[i]).text();
                    s = s.replace(n, ""), r[i] = s
                }
                return r.join("\n")
            },
            activate: function() {
                e.fn.editabletypes.text.prototype.activate.call(this)
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            tpl: "<textarea></textarea>",
            inputclass: "input-large",
            placeholder: null,
            rows: 7
        }), e.fn.editabletypes.textarea = t
    }(window.jQuery),
    function(e) {
        var t = function(e) {
            this.init("select", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.list), e.extend(t.prototype, {
            renderList: function() {
                this.$input.empty();
                var t = function(n, r) {
                    if (e.isArray(r))
                        for (var i = 0; i < r.length; i++) r[i].children ? n.append(t(e("<optgroup>", {
                            label: r[i].text
                        }), r[i].children)) : n.append(e("<option>", {
                            value: r[i].value
                        }).text(r[i].text));
                    return n
                };
                t(this.$input, this.sourceData), this.setClass(), this.$input.on("keydown.editable", function(t) {
                    t.which === 13 && e(this).closest("form").submit()
                })
            },
            value2htmlFinal: function(t, n) {
                var r = "",
                    i = e.fn.editableutils.itemsByValue(t, this.sourceData);
                i.length && (r = i[0].text), e(n).text(r)
            },
            autosubmit: function() {
                this.$input.off("keydown.editable").on("change.editable", function() {
                    e(this).closest("form").submit()
                })
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.list.defaults, {
            tpl: "<select></select>"
        }), e.fn.editabletypes.select = t
    }(window.jQuery),
    function(e) {
        var t = function(e) {
            this.init("checklist", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.list), e.extend(t.prototype, {
            renderList: function() {
                var t, n;
                this.$tpl.empty();
                if (!e.isArray(this.sourceData)) return;
                for (var r = 0; r < this.sourceData.length; r++) t = e("<label>").append(e("<input>", {
                    type: "checkbox",
                    value: this.sourceData[r].value
                })).append(e("<span>").text(" " + this.sourceData[r].text)), e("<div>").append(t).appendTo(this.$tpl);
                this.$input = this.$tpl.find('input[type="checkbox"]'), this.setClass()
            },
            value2str: function(t) {
                return e.isArray(t) ? t.sort().join(e.trim(this.options.separator)) : ""
            },
            str2value: function(t) {
                var n, r = null;
                return typeof t == "string" && t.length ? (n = new RegExp("\\s*" + e.trim(this.options.separator) + "\\s*"), r = t.split(n)) : e.isArray(t) && (r = t), r
            },
            value2input: function(t) {
                this.$input.prop("checked", !1), e.isArray(t) && t.length && this.$input.each(function(n, r) {
                    var i = e(r);
                    e.each(t, function(e, t) {
                        i.val() == t && i.prop("checked", !0)
                    })
                })
            },
            input2value: function() {
                var t = [];
                return this.$input.filter(":checked").each(function(n, r) {
                    t.push(e(r).val())
                }), t
            },
            value2htmlFinal: function(t, n) {
                var r = [],
                    i = e.fn.editableutils.itemsByValue(t, this.sourceData);
                i.length ? (e.each(i, function(t, n) {
                    r.push(e.fn.editableutils.escape(n.text))
                }), e(n).html(r.join("<br>"))) : e(n).empty()
            },
            activate: function() {
                this.$input.first().focus()
            },
            autosubmit: function() {
                this.$input.on("keydown", function(t) {
                    t.which === 13 && e(this).closest("form").submit()
                })
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.list.defaults, {
            tpl: '<div class="editable-checklist"></div>',
            inputclass: null,
            separator: ","
        }), e.fn.editabletypes.checklist = t
    }(window.jQuery),
    function(e) {
        var t = function(e) {
            this.init("password", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), e.extend(t.prototype, {
            value2html: function(t, n) {
                t ? e(n).text("[hidden]") : e(n).empty()
            },
            html2value: function(e) {
                return null
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {
            tpl: '<input type="password">'
        }), e.fn.editabletypes.password = t
    }(window.jQuery),
    function(e) {
        var t = function(e) {
            this.init("email", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {
            tpl: '<input type="email">'
        }), e.fn.editabletypes.email = t
    }(window.jQuery),
    function(e) {
        var t = function(e) {
            this.init("url", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {
            tpl: '<input type="url">'
        }), e.fn.editabletypes.url = t
    }(window.jQuery),
    function(e) {
        var t = function(e) {
            this.init("tel", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {
            tpl: '<input type="tel">'
        }), e.fn.editabletypes.tel = t
    }(window.jQuery),
    function(e) {
        var t = function(e) {
            this.init("number", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), e.extend(t.prototype, {
            render: function() {
                t.superclass.render.call(this), this.setAttr("min"), this.setAttr("max"), this.setAttr("step")
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {
            tpl: '<input type="number">',
            inputclass: "input-mini",
            min: null,
            max: null,
            step: null
        }), e.fn.editabletypes.number = t
    }(window.jQuery),
    function(e) {
        var t = function(e) {
            this.init("range", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.number), e.extend(t.prototype, {
            render: function() {
                this.$input = this.$tpl.filter("input"), this.setClass(), this.setAttr("min"), this.setAttr("max"), this.setAttr("step"), this.$input.on("input", function() {
                    e(this).siblings("output").text(e(this).val())
                })
            },
            activate: function() {
                this.$input.focus()
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.number.defaults, {
            tpl: '<input type="range"><output style="width: 30px; display: inline-block"></output>',
            inputclass: "input-medium"
        }), e.fn.editabletypes.range = t
    }(window.jQuery),
    function(e) {
        var t = function(n) {
            this.init("select2", n, t.defaults), n.select2 = n.select2 || {};
            var r = this,
                i = {
                    placeholder: n.placeholder
                };
            this.isMultiple = n.select2.tags || n.select2.multiple, n.select2.tags || (n.source && (i.data = n.source), i.initSelection = function(t, n) {
                var s = r.str2value(t.val()),
                    o = e.fn.editableutils.itemsByValue(s, i.data, "id");
                e.isArray(o) && o.length && !r.isMultiple && (o = o[0]), n(o)
            }), this.options.select2 = e.extend({}, t.defaults.select2, i, n.select2)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            render: function() {
                this.setClass(), this.$input.select2(this.options.select2), "ajax" in this.options.select2, this.isMultiple && this.$input.on("change", function() {
                    e(this).closest("form").parent().triggerHandler("resize")
                })
            },
            value2html: function(t, n) {
                var r = "",
                    i;
                this.$input ? i = this.$input.select2("data") : this.options.select2.tags ? i = t : this.options.select2.data && (i = e.fn.editableutils.itemsByValue(t, this.options.select2.data, "id")), e.isArray(i) ? (r = [], e.each(i, function(e, t) {
                    r.push(t && typeof t == "object" ? t.text : t)
                })) : i && (r = i.text), r = e.isArray(r) ? r.join(this.options.viewseparator) : r, e(n).text(r)
            },
            html2value: function(e) {
                return this.options.select2.tags ? this.str2value(e, this.options.viewseparator) : null
            },
            value2input: function(e) {
                this.$input.val(e).trigger("change", !0)
            },
            input2value: function() {
                return this.$input.select2("val")
            },
            str2value: function(t, n) {
                if (typeof t != "string" || !this.isMultiple) return t;
                n = n || this.options.select2.separator || e.fn.select2.defaults.separator;
                var r, i, s;
                if (t === null || t.length < 1) return null;
                r = t.split(n);
                for (i = 0, s = r.length; i < s; i += 1) r[i] = e.trim(r[i]);
                return r
            },
            autosubmit: function() {
                this.$input.on("change", function(t, n) {
                    n || e(this).closest("form").submit()
                })
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            tpl: '<input type="hidden">',
            select2: null,
            placeholder: null,
            source: null,
            viewseparator: ", "
        }), e.fn.editabletypes.select2 = t
    }(window.jQuery),
    function(e) {
        var t = function(t, n) {
            this.$element = e(t);
            if (!this.$element.is("input")) {
                e.error("Combodate should be applied to INPUT element");
                return
            }
            this.options = e.extend({}, e.fn.combodate.defaults, n, this.$element.data()), this.init()
        };
        t.prototype = {
            constructor: t,
            init: function() {
                this.map = {
                    day: ["D", "date"],
                    month: ["M", "month"],
                    year: ["Y", "year"],
                    hour: ["[Hh]", "hours"],
                    minute: ["m", "minutes"],
                    second: ["s", "seconds"],
                    ampm: ["[Aa]", ""]
                }, this.$widget = e('<span class="combodate"></span>').html(this.getTemplate()), this.initCombos(), this.$widget.on("change", "select", e.proxy(function() {
                    this.$element.val(this.getValue())
                }, this)), this.$widget.find("select").css("width", "auto"), this.$element.hide().after(this.$widget), this.setValue(this.$element.val() || this.options.value)
            },
            getTemplate: function() {
                var t = this.options.template;
                return e.each(this.map, function(e, n) {
                    n = n[0];
                    var r = new RegExp(n + "+"),
                        i = n.length > 1 ? n.substring(1, 2) : n;
                    t = t.replace(r, "{" + i + "}")
                }), t = t.replace(/ /g, "&nbsp;"), e.each(this.map, function(e, n) {
                    n = n[0];
                    var r = n.length > 1 ? n.substring(1, 2) : n;
                    t = t.replace("{" + r + "}", '<select class="' + e + '"></select>')
                }), t
            },
            initCombos: function() {
                var t = this;
                e.each(this.map, function(e, n) {
                    var r = t.$widget.find("." + e),
                        i, s;
                    r.length && (t["$" + e] = r, i = "fill" + e.charAt(0).toUpperCase() + e.slice(1), s = t[i](), t["$" + e].html(t.renderItems(s)))
                })
            },
            initItems: function(e) {
                var t = [],
                    n;
                if (this.options.firstItem === "name") {
                    n = moment.relativeTime || moment.langData()._relativeTime;
                    var r = typeof n[e] == "function" ? n[e](1, !0, e, !1) : n[e];
                    r = r.split(" ").reverse()[0], t.push(["", r])
                } else this.options.firstItem === "empty" && t.push(["", ""]);
                return t
            },
            renderItems: function(e) {
                var t = [];
                for (var n = 0; n < e.length; n++) t.push('<option value="' + e[n][0] + '">' + e[n][1] + "</option>");
                return t.join("\n")
            },
            fillDay: function() {
                var e = this.initItems("d"),
                    t, n, r = this.options.template.indexOf("DD") !== -1;
                for (n = 1; n <= 31; n++) t = r ? this.leadZero(n) : n, e.push([n, t]);
                return e
            },
            fillMonth: function() {
                var e = this.initItems("M"),
                    t, n, r = this.options.template.indexOf("MMMM") !== -1,
                    i = this.options.template.indexOf("MMM") !== -1,
                    s = this.options.template.indexOf("MM") !== -1;
                for (n = 0; n <= 11; n++) r ? t = moment().month(n).format("MMMM") : i ? t = moment().month(n).format("MMM") : s ? t = this.leadZero(n + 1) : t = n + 1, e.push([n, t]);
                return e
            },
            fillYear: function() {
                var e = this.initItems("y"),
                    t, n, r = this.options.template.indexOf("YYYY") !== -1;
                for (n = this.options.maxYear; n >= this.options.minYear; n--) t = r ? n : (n + "").substring(2), e.push([n, t]);
                return e
            },
            fillHour: function() {
                var e = this.initItems("h"),
                    t, n, r = this.options.template.indexOf("h") !== -1,
                    i = this.options.template.indexOf("H") !== -1,
                    s = this.options.template.toLowerCase().indexOf("hh") !== -1,
                    o = r ? 12 : 23;
                for (n = 0; n <= o; n++) t = s ? this.leadZero(n) : n, e.push([n, t]);
                return e
            },
            fillMinute: function() {
                var e = this.initItems("m"),
                    t, n, r = this.options.template.indexOf("mm") !== -1;
                for (n = 0; n <= 59; n += this.options.minuteStep) t = r ? this.leadZero(n) : n, e.push([n, t]);
                return e
            },
            fillSecond: function() {
                var e = this.initItems("s"),
                    t, n, r = this.options.template.indexOf("ss") !== -1;
                for (n = 0; n <= 59; n += this.options.secondStep) t = r ? this.leadZero(n) : n, e.push([n, t]);
                return e
            },
            fillAmpm: function() {
                var e = this.options.template.indexOf("a") !== -1,
                    t = this.options.template.indexOf("A") !== -1,
                    n = [
                        ["am", e ? "am" : "AM"],
                        ["pm", e ? "pm" : "PM"]
                    ];
                return n
            },
            getValue: function(t) {
                var n, r = {},
                    i = this,
                    s = !1;
                return e.each(this.map, function(e, t) {
                    if (e === "ampm") return;
                    var n = e === "day" ? 1 : 0;
                    r[e] = i["$" + e] ? parseInt(i["$" + e].val(), 10) : n;
                    if (isNaN(r[e])) return s = !0, !1
                }), s ? "" : (this.$ampm && (r.hour = this.$ampm.val() === "am" ? r.hour : r.hour + 12, r.hour === 24 && (r.hour = 0)), n = moment([r.year, r.month, r.day, r.hour, r.minute, r.second]), this.highlight(n), t = t === undefined ? this.options.format : t, t === null ? n.isValid() ? n : null : n.isValid() ? n.format(t) : "")
            },
            setValue: function(t) {
                if (!t) return;
                var n = typeof t == "string" ? moment(t, this.options.format) : moment(t),
                    r = this,
                    i = {};
                n.isValid() && (e.each(this.map, function(e, t) {
                    if (e === "ampm") return;
                    i[e] = n[t[1]]()
                }), this.$ampm && (i.hour > 12 ? (i.hour -= 12, i.ampm = "pm") : i.ampm = "am"), e.each(i, function(e, t) {
                    r["$" + e] && r["$" + e].val(t)
                }), this.$element.val(n.format(this.options.format)))
            },
            highlight: function(e) {
                e.isValid() ? this.options.errorClass ? this.$widget.removeClass(this.options.errorClass) : this.$widget.find("select").css("border-color", this.borderColor) : this.options.errorClass ? this.$widget.addClass(this.options.errorClass) : (this.borderColor || (this.borderColor = this.$widget.find("select").css("border-color")), this.$widget.find("select").css("border-color", "red"))
            },
            leadZero: function(e) {
                return e <= 9 ? "0" + e : e
            },
            destroy: function() {
                this.$widget.remove(), this.$element.removeData("combodate").show()
            }
        }, e.fn.combodate = function(n) {
            var r, i = Array.apply(null, arguments);
            return i.shift(), n === "getValue" && this.length && (r = this.eq(0).data("combodate")) ? r.getValue.apply(r, i) : this.each(function() {
                var r = e(this),
                    s = r.data("combodate"),
                    o = typeof n == "object" && n;
                s || r.data("combodate", s = new t(this, o)), typeof n == "string" && typeof s[n] == "function" && s[n].apply(s, i)
            })
        }, e.fn.combodate.defaults = {
            format: "DD-MM-YYYY HH:mm",
            template: "D / MMM / YYYY   H : mm",
            value: null,
            minYear: 1970,
            maxYear: 2015,
            minuteStep: 5,
            secondStep: 1,
            firstItem: "empty",
            errorClass: null
        }
    }(window.jQuery),
    function(e) {
        var t = function(n) {
            this.init("combodate", n, t.defaults), this.options.viewformat || (this.options.viewformat = this.options.format), n.combodate = e.fn.editableutils.tryParseJson(n.combodate, !0), this.options.combodate = e.extend({}, t.defaults.combodate, n.combodate, {
                format: this.options.format,
                template: this.options.template
            })
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            render: function() {
                this.$input.combodate(this.options.combodate)
            },
            value2html: function(t, n) {
                var r = t ? t.format(this.options.viewformat) : "";
                e(n).text(r)
            },
            html2value: function(e) {
                return e ? moment(e, this.options.viewformat) : null
            },
            value2str: function(e) {
                return e ? e.format(this.options.format) : ""
            },
            str2value: function(e) {
                return e ? moment(e, this.options.format) : null
            },
            value2submit: function(e) {
                return this.value2str(e)
            },
            value2input: function(e) {
                this.$input.combodate("setValue", e)
            },
            input2value: function() {
                return this.$input.combodate("getValue", null)
            },
            activate: function() {
                this.$input.siblings(".combodate").find("select").eq(0).focus()
            },
            autosubmit: function() {}
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            tpl: '<input type="text">',
            inputclass: null,
            format: "YYYY-MM-DD",
            viewformat: null,
            template: "D / MMM / YYYY",
            combodate: null
        }), e.fn.editabletypes.combodate = t
    }(window.jQuery),
    function(e) {
        e.extend(e.fn.editableform.Constructor.prototype, {
            initTemplate: function() {
                this.$form = e(e.fn.editableform.template), this.$form.find(".editable-error-block").addClass("help-block")
            }
        }), e.fn.editableform.buttons = '<button type="submit" class="btn btn-primary editable-submit"><i class="icon-ok icon-white"></i></button><button type="button" class="btn editable-cancel"><i class="icon-remove"></i></button>', e.fn.editableform.errorGroupClass = "error", e.fn.editableform.errorBlockClass = null
    }(window.jQuery),
    function(e) {
        e.extend(e.fn.editableContainer.Popup.prototype, {
            containerName: "popover",
            innerCss: e(e.fn.popover.defaults.template).find("p").length ? ".popover-content p" : ".popover-content",
            initContainer: function() {
                e.extend(this.containerOptions, {
                    trigger: "manual",
                    selector: !1,
                    content: " ",
                    template: e.fn.popover.defaults.template
                });
                var t;
                this.$element.data("template") && (t = this.$element.data("template"), this.$element.removeData("template")), this.call(this.containerOptions), t && this.$element.data("template", t)
            },
            innerShow: function() {
                this.call("show")
            },
            innerHide: function() {
                this.call("hide")
            },
            innerDestroy: function() {
                this.call("destroy")
            },
            setContainerOption: function(e, t) {
                this.container().options[e] = t
            },
            setPosition: function() {
                (function() {
                    var e = this.tip(),
                        t, n, r, i, s, o;
                    s = typeof this.options.placement == "function" ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(s), e.removeClass("top right bottom left").css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }), n = this.getPosition(t), r = e[0].offsetWidth, i = e[0].offsetHeight;
                    switch (t ? s.split(" ")[1] : s) {
                        case "bottom":
                            o = {
                                top: n.top + n.height,
                                left: n.left + n.width / 2 - r / 2
                            };
                            break;
                        case "top":
                            o = {
                                top: n.top - i,
                                left: n.left + n.width / 2 - r / 2
                            };
                            break;
                        case "left":
                            o = {
                                top: n.top + n.height / 2 - i / 2,
                                left: n.left - r
                            };
                            break;
                        case "right":
                            o = {
                                top: n.top + n.height / 2 - i / 2,
                                left: n.left + n.width
                            }
                    }
                    e.offset(o).addClass(s).addClass("in")
                }).call(this.container())
            }
        })
    }(window.jQuery),
    function(e) {
        var t = function(e) {
            this.init("date", e, t.defaults), this.initPicker(e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            initPicker: function(t, n) {
                this.options.viewformat || (this.options.viewformat = this.options.format), this.options.datepicker = e.extend({}, n.datepicker, t.datepicker, {
                    format: this.options.viewformat
                }), this.options.datepicker.language = this.options.datepicker.language || "en", this.dpg = e.fn.datepicker.DPGlobal, this.parsedFormat = this.dpg.parseFormat(this.options.format), this.parsedViewFormat = this.dpg.parseFormat(this.options.viewformat)
            },
            render: function() {
                this.$input.datepicker(this.options.datepicker), this.options.clear && (this.$clear = e('<a href="#"></a>').html(this.options.clear).click(e.proxy(function(e) {
                    e.preventDefault(), e.stopPropagation(), this.clear()
                }, this)), this.$tpl.parent().append(e('<div class="editable-clear">').append(this.$clear)))
            },
            value2html: function(e, n) {
                var r = e ? this.dpg.formatDate(e, this.parsedViewFormat, this.options.datepicker.language) : "";
                t.superclass.value2html(r, n)
            },
            html2value: function(e) {
                return e ? this.dpg.parseDate(e, this.parsedViewFormat, this.options.datepicker.language) : null
            },
            value2str: function(e) {
                return e ? this.dpg.formatDate(e, this.parsedFormat, this.options.datepicker.language) : ""
            },
            str2value: function(e) {
                return e ? this.dpg.parseDate(e, this.parsedFormat, this.options.datepicker.language) : null
            },
            value2submit: function(e) {
                return this.value2str(e)
            },
            value2input: function(e) {
                this.$input.datepicker("update", e)
            },
            input2value: function() {
                return this.$input.data("datepicker").date
            },
            activate: function() {},
            clear: function() {
                this.$input.data("datepicker").date = null, this.$input.find(".active").removeClass("active")
            },
            autosubmit: function() {
                this.$input.on("mouseup", ".day", function(t) {
                    if (e(t.currentTarget).is(".old") || e(t.currentTarget).is(".new")) return;
                    var n = e(this).closest("form");
                    setTimeout(function() {
                        n.submit()
                    }, 200)
                })
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            tpl: '<div class="editable-date well"></div>',
            inputclass: null,
            format: "yyyy-mm-dd",
            viewformat: null,
            datepicker: {
                weekStart: 0,
                startView: 0,
                minViewMode: 0,
                autoclose: !1
            },
            clear: "&times; clear"
        }), e.fn.editabletypes.date = t
    }(window.jQuery),
    function(e) {
        var t = function(e) {
            this.init("datefield", e, t.defaults), this.initPicker(e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.date), e.extend(t.prototype, {
            render: function() {
                this.$input = this.$tpl.find("input"), this.setClass(), this.setAttr("placeholder"), this.$tpl.datepicker(this.options.datepicker), this.$input.off("focus keydown"), this.$input.keyup(e.proxy(function() {
                    this.$tpl.removeData("date"), this.$tpl.datepicker("update")
                }, this))
            },
            value2input: function(e) {
                this.$input.val(e ? this.dpg.formatDate(e, this.parsedViewFormat, this.options.datepicker.language) : ""), this.$tpl.datepicker("update")
            },
            input2value: function() {
                return this.html2value(this.$input.val())
            },
            activate: function() {
                e.fn.editabletypes.text.prototype.activate.call(this)
            },
            autosubmit: function() {}
        }), t.defaults = e.extend({}, e.fn.editabletypes.date.defaults, {
            tpl: '<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',
            inputclass: "input-small",
            datepicker: {
                weekStart: 0,
                startView: 0,
                minViewMode: 0,
                autoclose: !0
            }
        }), e.fn.editabletypes.datefield = t
    }(window.jQuery), ! function(e) {
        function t() {
            return new Date(Date.UTC.apply(Date, arguments))
        }

        function n() {
            var e = new Date;
            return t(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
        }
        var r = function(t, n) {
            var r = this;
            this.element = e(t), this.language = n.language || this.element.data("date-language") || "en", this.language = this.language in i ? this.language : this.language.split("-")[0], this.language = this.language in i ? this.language : "en", this.isRTL = i[this.language].rtl || !1, this.format = s.parseFormat(n.format || this.element.data("date-format") || i[this.language].format || "mm/dd/yyyy"), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && this.component.length === 0 && (this.component = !1), this._attachEvents(), this.forceParse = !0, "forceParse" in n ? this.forceParse = n.forceParse : "dateForceParse" in this.element.data() && (this.forceParse = this.element.data("date-force-parse")), this.picker = e(s.template).appendTo(this.isInline ? this.element : "body").on({
                click: e.proxy(this.click, this),
                mousedown: e.proxy(this.mousedown, this)
            }), this.isInline ? this.picker.addClass("datepicker-inline") : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.isRTL && (this.picker.addClass("datepicker-rtl"), this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")), e(document).on("mousedown", function(t) {
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
            if (typeof this.minViewMode == "string") switch (this.minViewMode) {
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
        r.prototype = {
            constructor: r,
            _events: [],
            _attachEvents: function() {
                this._detachEvents(), this.isInput ? this._events = [
                    [this.element, {
                        focus: e.proxy(this.show, this),
                        keyup: e.proxy(this.update, this),
                        keydown: e.proxy(this.keydown, this)
                    }]
                ] : this.component && this.hasInput ? this._events = [
                    [this.element.find("input"), {
                        focus: e.proxy(this.show, this),
                        keyup: e.proxy(this.update, this),
                        keydown: e.proxy(this.keydown, this)
                    }],
                    [this.component, {
                        click: e.proxy(this.show, this)
                    }]
                ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                    [this.element, {
                        click: e.proxy(this.show, this)
                    }]
                ];
                for (var t = 0, n, r; t < this._events.length; t++) n = this._events[t][0], r = this._events[t][1], n.on(r)
            },
            _detachEvents: function() {
                for (var e = 0, t, n; e < this._events.length; e++) t = this._events[e][0], n = this._events[e][1], t.off(n);
                this._events = []
            },
            show: function(t) {
                this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.update(), this.place(), e(window).on("resize", e.proxy(this.place, this)), t && (t.stopPropagation(), t.preventDefault()), this.element.trigger({
                    type: "show",
                    date: this.date
                })
            },
            hide: function(t) {
                if (this.isInline) return;
                if (!this.picker.is(":visible")) return;
                this.picker.hide(), e(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || e(document).off("mousedown", this.hide), this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this.element.trigger({
                    type: "hide",
                    date: this.date
                })
            },
            remove: function() {
                this._detachEvents(), this.picker.remove(), delete this.element.data().datepicker
            },
            getDate: function() {
                var e = this.getUTCDate();
                return new Date(e.getTime() + e.getTimezoneOffset() * 6e4)
            },
            getUTCDate: function() {
                return this.date
            },
            setDate: function(e) {
                this.setUTCDate(new Date(e.getTime() - e.getTimezoneOffset() * 6e4))
            },
            setUTCDate: function(e) {
                this.date = e, this.setValue()
            },
            setValue: function() {
                var e = this.getFormattedDate();
                this.isInput ? this.element.val(e) : (this.component && this.element.find("input").val(e), this.element.data("date", e))
            },
            getFormattedDate: function(e) {
                return e === undefined && (e = this.format), s.formatDate(this.date, e, this.language)
            },
            setStartDate: function(e) {
                this.startDate = e || -Infinity, this.startDate !== -Infinity && (this.startDate = s.parseDate(this.startDate, this.format, this.language)), this.update(), this.updateNavArrows()
            },
            setEndDate: function(e) {
                this.endDate = e || Infinity, this.endDate !== Infinity && (this.endDate = s.parseDate(this.endDate, this.format, this.language)), this.update(), this.updateNavArrows()
            },
            setDaysOfWeekDisabled: function(t) {
                this.daysOfWeekDisabled = t || [], e.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)), this.daysOfWeekDisabled = e.map(this.daysOfWeekDisabled, function(e) {
                    return parseInt(e, 10)
                }), this.update(), this.updateNavArrows()
            },
            place: function() {
                if (this.isInline) return;
                var t = parseInt(this.element.parents().filter(function() {
                        return e(this).css("z-index") != "auto"
                    }).first().css("z-index")) + 10,
                    n = this.component ? this.component.offset() : this.element.offset(),
                    r = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!0);
                this.picker.css({
                    top: n.top + r,
                    left: n.left,
                    zIndex: t
                })
            },
            update: function() {
                var e, t = !1;
                arguments && arguments.length && (typeof arguments[0] == "string" || arguments[0] instanceof Date) ? (e = arguments[0], t = !0) : e = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), this.date = s.parseDate(e, this.format, this.language), t && this.setValue(), this.date < this.startDate ? this.viewDate = new Date(this.startDate) : this.date > this.endDate ? this.viewDate = new Date(this.endDate) : this.viewDate = new Date(this.date), this.fill()
            },
            fillDow: function() {
                var e = this.weekStart,
                    t = "<tr>";
                if (this.calendarWeeks) {
                    var n = '<th class="cw">&nbsp;</th>';
                    t += n, this.picker.find(".datepicker-days thead tr:first-child").prepend(n)
                }
                while (e < this.weekStart + 7) t += '<th class="dow">' + i[this.language].daysMin[e++ % 7] + "</th>";
                t += "</tr>", this.picker.find(".datepicker-days thead").append(t)
            },
            fillMonths: function() {
                var e = "",
                    t = 0;
                while (t < 12) e += '<span class="month">' + i[this.language].monthsShort[t++] + "</span>";
                this.picker.find(".datepicker-months td").html(e)
            },
            fill: function() {
                var n = new Date(this.viewDate),
                    r = n.getUTCFullYear(),
                    o = n.getUTCMonth(),
                    u = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
                    a = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity,
                    f = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
                    l = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity,
                    c = this.date && this.date.valueOf(),
                    h = new Date;
                this.picker.find(".datepicker-days thead th.switch").text(i[this.language].months[o] + " " + r), this.picker.find("tfoot th.today").text(i[this.language].today).toggle(this.todayBtn !== !1), this.updateNavArrows(), this.fillMonths();
                var p = t(r, o - 1, 28, 0, 0, 0, 0),
                    d = s.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
                p.setUTCDate(d), p.setUTCDate(d - (p.getUTCDay() - this.weekStart + 7) % 7);
                var v = new Date(p);
                v.setUTCDate(v.getUTCDate() + 42), v = v.valueOf();
                var m = [],
                    g;
                while (p.valueOf() < v) {
                    if (p.getUTCDay() == this.weekStart) {
                        m.push("<tr>");
                        if (this.calendarWeeks) {
                            var y = new Date(+p + (this.weekStart - p.getUTCDay() - 7) % 7 * 864e5),
                                b = new Date(+y + (11 - y.getUTCDay()) % 7 * 864e5),
                                w = new Date(+(w = t(b.getUTCFullYear(), 0, 1)) + (11 - w.getUTCDay()) % 7 * 864e5),
                                E = (b - w) / 864e5 / 7 + 1;
                            m.push('<td class="cw">' + E + "</td>")
                        }
                    }
                    g = "";
                    if (p.getUTCFullYear() < r || p.getUTCFullYear() == r && p.getUTCMonth() < o) g += " old";
                    else if (p.getUTCFullYear() > r || p.getUTCFullYear() == r && p.getUTCMonth() > o) g += " new";
                    this.todayHighlight && p.getUTCFullYear() == h.getFullYear() && p.getUTCMonth() == h.getMonth() && p.getUTCDate() == h.getDate() && (g += " today"), c && p.valueOf() == c && (g += " active");
                    if (p.valueOf() < this.startDate || p.valueOf() > this.endDate || e.inArray(p.getUTCDay(), this.daysOfWeekDisabled) !== -1) g += " disabled";
                    m.push('<td class="day' + g + '">' + p.getUTCDate() + "</td>"), p.getUTCDay() == this.weekEnd && m.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(m.join(""));
                var S = this.date && this.date.getUTCFullYear(),
                    x = this.picker.find(".datepicker-months").find("th:eq(1)").text(r).end().find("span").removeClass("active");
                S && S == r && x.eq(this.date.getUTCMonth()).addClass("active"), (r < u || r > f) && x.addClass("disabled"), r == u && x.slice(0, a).addClass("disabled"), r == f && x.slice(l + 1).addClass("disabled"), m = "", r = parseInt(r / 10, 10) * 10;
                var T = this.picker.find(".datepicker-years").find("th:eq(1)").text(r + "-" + (r + 9)).end().find("td");
                r -= 1;
                for (var N = -1; N < 11; N++) m += '<span class="year' + (N == -1 || N == 10 ? " old" : "") + (S == r ? " active" : "") + (r < u || r > f ? " disabled" : "") + '">' + r + "</span>", r += 1;
                T.html(m)
            },
            updateNavArrows: function() {
                var e = new Date(this.viewDate),
                    t = e.getUTCFullYear(),
                    n = e.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.startDate !== -Infinity && t <= this.startDate.getUTCFullYear() && n <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), this.endDate !== Infinity && t >= this.endDate.getUTCFullYear() && n >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        });
                        break;
                    case 1:
                    case 2:
                        this.startDate !== -Infinity && t <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), this.endDate !== Infinity && t >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        })
                }
            },
            click: function(n) {
                n.stopPropagation(), n.preventDefault();
                var r = e(n.target).closest("span, td, th");
                if (r.length == 1) switch (r[0].nodeName.toLowerCase()) {
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
                                var a = 1,
                                    f = r.parent().find("span").index(r),
                                    l = this.viewDate.getUTCFullYear();
                                this.viewDate.setUTCMonth(f), this.element.trigger({
                                    type: "changeMonth",
                                    date: this.viewDate
                                }), this.minViewMode == 1 && this._setDate(t(l, f, a, 0, 0, 0, 0))
                            } else {
                                var l = parseInt(r.text(), 10) || 0,
                                    a = 1,
                                    f = 0;
                                this.viewDate.setUTCFullYear(l), this.element.trigger({
                                    type: "changeYear",
                                    date: this.viewDate
                                }), this.minViewMode == 2 && this._setDate(t(l, f, a, 0, 0, 0, 0))
                            }
                            this.showMode(-1), this.fill()
                        }
                        break;
                    case "td":
                        if (r.is(".day") && !r.is(".disabled")) {
                            var a = parseInt(r.text(), 10) || 1,
                                l = this.viewDate.getUTCFullYear(),
                                f = this.viewDate.getUTCMonth();
                            r.is(".old") ? f === 0 ? (f = 11, l -= 1) : f -= 1 : r.is(".new") && (f == 11 ? (f = 0, l += 1) : f += 1), this._setDate(t(l, f, a, 0, 0, 0, 0))
                        }
                }
            },
            _setDate: function(e, t) {
                if (!t || t == "date") this.date = e;
                if (!t || t == "view") this.viewDate = e;
                this.fill(), this.setValue(), this.element.trigger({
                    type: "changeDate",
                    date: this.date
                });
                var n;
                this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && (n.change(), this.autoclose && (!t || t == "date") && this.hide())
            },
            moveMonth: function(e, t) {
                if (!t) return e;
                var n = new Date(e.valueOf()),
                    r = n.getUTCDate(),
                    i = n.getUTCMonth(),
                    s = Math.abs(t),
                    o, u;
                t = t > 0 ? 1 : -1;
                if (s == 1) {
                    u = t == -1 ? function() {
                        return n.getUTCMonth() == i
                    } : function() {
                        return n.getUTCMonth() != o
                    }, o = i + t, n.setUTCMonth(o);
                    if (o < 0 || o > 11) o = (o + 12) % 12
                } else {
                    for (var a = 0; a < s; a++) n = this.moveMonth(n, t);
                    o = n.getUTCMonth(), n.setUTCDate(r), u = function() {
                        return o != n.getUTCMonth()
                    }
                }
                while (u()) n.setUTCDate(--r), n.setUTCMonth(o);
                return n
            },
            moveYear: function(e, t) {
                return this.moveMonth(e, t * 12)
            },
            dateWithinRange: function(e) {
                return e >= this.startDate && e <= this.endDate
            },
            keydown: function(e) {
                if (this.picker.is(":not(:visible)")) {
                    e.keyCode == 27 && this.show();
                    return
                }
                var t = !1,
                    n, r, i, s, o;
                switch (e.keyCode) {
                    case 27:
                        this.hide(), e.preventDefault();
                        break;
                    case 37:
                    case 39:
                        if (!this.keyboardNavigation) break;
                        n = e.keyCode == 37 ? -1 : 1, e.ctrlKey ? (s = this.moveYear(this.date, n), o = this.moveYear(this.viewDate, n)) : e.shiftKey ? (s = this.moveMonth(this.date, n), o = this.moveMonth(this.viewDate, n)) : (s = new Date(this.date), s.setUTCDate(this.date.getUTCDate() + n), o = new Date(this.viewDate), o.setUTCDate(this.viewDate.getUTCDate() + n)), this.dateWithinRange(s) && (this.date = s, this.viewDate = o, this.setValue(), this.update(), e.preventDefault(), t = !0);
                        break;
                    case 38:
                    case 40:
                        if (!this.keyboardNavigation) break;
                        n = e.keyCode == 38 ? -1 : 1, e.ctrlKey ? (s = this.moveYear(this.date, n), o = this.moveYear(this.viewDate, n)) : e.shiftKey ? (s = this.moveMonth(this.date, n), o = this.moveMonth(this.viewDate, n)) : (s = new Date(this.date), s.setUTCDate(this.date.getUTCDate() + n * 7), o = new Date(this.viewDate), o.setUTCDate(this.viewDate.getUTCDate() + n * 7)), this.dateWithinRange(s) && (this.date = s, this.viewDate = o, this.setValue(), this.update(), e.preventDefault(), t = !0);
                        break;
                    case 13:
                        this.hide(), e.preventDefault();
                        break;
                    case 9:
                        this.hide()
                }
                if (t) {
                    this.element.trigger({
                        type: "changeDate",
                        date: this.date
                    });
                    var u;
                    this.isInput ? u = this.element : this.component && (u = this.element.find("input")), u && u.change()
                }
            },
            showMode: function(e) {
                e && (this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + e))), this.picker.find(">div").hide().filter(".datepicker-" + s.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
            }
        }, e.fn.datepicker = function(t) {
            var n = Array.apply(null, arguments);
            return n.shift(), this.each(function() {
                var i = e(this),
                    s = i.data("datepicker"),
                    o = typeof t == "object" && t;
                s || i.data("datepicker", s = new r(this, e.extend({}, e.fn.datepicker.defaults, o))), typeof t == "string" && typeof s[t] == "function" && s[t].apply(s, n)
            })
        }, e.fn.datepicker.defaults = {}, e.fn.datepicker.Constructor = r;
        var i = e.fn.datepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today"
                }
            },
            s = {
                modes: [{
                    clsName: "days",
                    navFnc: "Month",
                    navStep: 1
                }, {
                    clsName: "months",
                    navFnc: "FullYear",
                    navStep: 1
                }, {
                    clsName: "years",
                    navFnc: "FullYear",
                    navStep: 10
                }],
                isLeapYear: function(e) {
                    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
                },
                getDaysInMonth: function(e, t) {
                    return [31, s.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
                },
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
                parseFormat: function(e) {
                    var t = e.replace(this.validParts, "\0").split("\0"),
                        n = e.match(this.validParts);
                    if (!t || !t.length || !n || n.length === 0) throw new Error("Invalid date format.");
                    return {
                        separators: t,
                        parts: n
                    }
                },
                parseDate: function(n, s, o) {
                    if (n instanceof Date) return n;
                    if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(n)) {
                        var u = /([\-+]\d+)([dmwy])/,
                            a = n.match(/([\-+]\d+)([dmwy])/g),
                            f, l;
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
                    var a = n && n.match(this.nonpunctuation) || [],
                        n = new Date,
                        h = {},
                        p = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        d = {
                            yyyy: function(e, t) {
                                return e.setUTCFullYear(t)
                            },
                            yy: function(e, t) {
                                return e.setUTCFullYear(2e3 + t)
                            },
                            m: function(e, t) {
                                t -= 1;
                                while (t < 0) t += 12;
                                t %= 12, e.setUTCMonth(t);
                                while (e.getUTCMonth() != t) e.setUTCDate(e.getUTCDate() - 1);
                                return e
                            },
                            d: function(e, t) {
                                return e.setUTCDate(t)
                            }
                        },
                        v, m, f;
                    d.M = d.MM = d.mm = d.m, d.dd = d.d, n = t(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0);
                    var g = s.parts.slice();
                    a.length != g.length && (g = e(g).filter(function(t, n) {
                        return e.inArray(n, p) !== -1
                    }).toArray());
                    if (a.length == g.length) {
                        for (var c = 0, y = g.length; c < y; c++) {
                            v = parseInt(a[c], 10), f = g[c];
                            if (isNaN(v)) switch (f) {
                                case "MM":
                                    m = e(i[o].months).filter(function() {
                                        var e = this.slice(0, a[c].length),
                                            t = a[c].slice(0, e.length);
                                        return e == t
                                    }), v = e.inArray(m[0], i[o].months) + 1;
                                    break;
                                case "M":
                                    m = e(i[o].monthsShort).filter(function() {
                                        var e = this.slice(0, a[c].length),
                                            t = a[c].slice(0, e.length);
                                        return e == t
                                    }), v = e.inArray(m[0], i[o].monthsShort) + 1
                            }
                            h[f] = v
                        }
                        for (var c = 0, b; c < p.length; c++) b = p[c], b in h && !isNaN(h[b]) && d[b](n, h[b])
                    }
                    return n
                },
                formatDate: function(t, n, r) {
                    var s = {
                        d: t.getUTCDate(),
                        D: i[r].daysShort[t.getUTCDay()],
                        DD: i[r].days[t.getUTCDay()],
                        m: t.getUTCMonth() + 1,
                        M: i[r].monthsShort[t.getUTCMonth()],
                        MM: i[r].months[t.getUTCMonth()],
                        yy: t.getUTCFullYear().toString().substring(2),
                        yyyy: t.getUTCFullYear()
                    };
                    s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m;
                    var t = [],
                        o = e.extend([], n.separators);
                    for (var u = 0, a = n.parts.length; u < a; u++) o.length && t.push(o.shift()), t.push(s[n.parts[u]]);
                    return t.join("")
                },
                headTemplate: '<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
            };
        s.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + s.headTemplate + "<tbody></tbody>" + s.footTemplate + "</table>" + "</div>" + '<div class="datepicker-months">' + '<table class="table-condensed">' + s.headTemplate + s.contTemplate + s.footTemplate + "</table>" + "</div>" + '<div class="datepicker-years">' + '<table class="table-condensed">' + s.headTemplate + s.contTemplate + s.footTemplate + "</table>" + "</div>" + "</div>", e.fn.datepicker.DPGlobal = s
    }(window.jQuery),
    function(e) {
        var t = function(n) {
            this.init("typeahead", n, t.defaults), this.options.typeahead = e.extend({}, t.defaults.typeahead, {
                matcher: this.matcher,
                sorter: this.sorter,
                highlighter: this.highlighter,
                updater: this.updater
            }, n.typeahead)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.list), e.extend(t.prototype, {
            renderList: function() {
                this.$input = this.$tpl.is("input") ? this.$tpl : this.$tpl.find('input[type="text"]'), this.options.typeahead.source = this.sourceData, this.$input.typeahead(this.options.typeahead);
                var t = this.$input.data("typeahead");
                t.render = e.proxy(this.typeaheadRender, t), t.select = e.proxy(this.typeaheadSelect, t), t.move = e.proxy(this.typeaheadMove, t), this.renderClear(), this.setClass(), this.setAttr("placeholder")
            },
            value2htmlFinal: function(t, n) {
                if (this.getIsObjects()) {
                    var r = e.fn.editableutils.itemsByValue(t, this.sourceData);
                    e(n).text(r.length ? r[0].text : "")
                } else e(n).text(t)
            },
            html2value: function(e) {
                return e ? e : null
            },
            value2input: function(t) {
                if (this.getIsObjects()) {
                    var n = e.fn.editableutils.itemsByValue(t, this.sourceData);
                    this.$input.data("value", t).val(n.length ? n[0].text : "")
                } else this.$input.val(t)
            },
            input2value: function() {
                if (this.getIsObjects()) {
                    var t = this.$input.data("value"),
                        n = e.fn.editableutils.itemsByValue(t, this.sourceData);
                    return n.length && n[0].text.toLowerCase() === this.$input.val().toLowerCase() ? t : null
                }
                return this.$input.val()
            },
            getIsObjects: function() {
                if (this.isObjects === undefined) {
                    this.isObjects = !1;
                    for (var e = 0; e < this.sourceData.length; e++)
                        if (this.sourceData[e].value !== this.sourceData[e].text) {
                            this.isObjects = !0;
                            break
                        }
                }
                return this.isObjects
            },
            activate: e.fn.editabletypes.text.prototype.activate,
            renderClear: e.fn.editabletypes.text.prototype.renderClear,
            postrender: e.fn.editabletypes.text.prototype.postrender,
            toggleClear: e.fn.editabletypes.text.prototype.toggleClear,
            clear: function() {
                e.fn.editabletypes.text.prototype.clear.call(this), this.$input.data("value", "")
            },
            matcher: function(t) {
                return e.fn.typeahead.Constructor.prototype.matcher.call(this, t.text)
            },
            sorter: function(e) {
                var t = [],
                    n = [],
                    r = [],
                    i, s;
                while (i = e.shift()) s = i.text, s.toLowerCase().indexOf(this.query.toLowerCase()) ? ~s.indexOf(this.query) ? n.push(i) : r.push(i) : t.push(i);
                return t.concat(n, r)
            },
            highlighter: function(t) {
                return e.fn.typeahead.Constructor.prototype.highlighter.call(this, t.text)
            },
            updater: function(e) {
                return this.$element.data("value", e.value), e.text
            },
            typeaheadRender: function(t) {
                var n = this;
                return t = e(t).map(function(t, r) {
                    return t = e(n.options.item).data("item", r), t.find("a").html(n.highlighter(r)), t[0]
                }), this.options.autoSelect && t.first().addClass("active"), this.$menu.html(t), this
            },
            typeaheadSelect: function() {
                var e = this.$menu.find(".active").data("item");
                return (this.options.autoSelect || e) && this.$element.val(this.updater(e)).change(), this.hide()
            },
            typeaheadMove: function(e) {
                if (!this.shown) return;
                switch (e.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        if (!this.$menu.find(".active").length) return;
                        e.preventDefault();
                        break;
                    case 38:
                        e.preventDefault(), this.prev();
                        break;
                    case 40:
                        e.preventDefault(), this.next()
                }
                e.stopPropagation()
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.list.defaults, {
            tpl: '<input type="text">',
            typeahead: null,
            clear: !0
        }), e.fn.editabletypes.typeahead = t
    }(window.jQuery);
});;
define("bootstrap/plugins/bootstrap-contextmenu/bootstrap-contextmenu", function(require, exports, module) {
    var jQuery = require('jquery');
    ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.$elements = a(b), this.options = c, this.before = this.options.before || this.before, this.onItem = this.options.onItem || this.onItem, this.options.target && this.$elements.attr("data-target", this.options.target), this.listen()
        };
        b.prototype = {
            constructor: b,
            show: function(b) {
                var d, f, c = a(this);
                if (!c.is(".disabled, :disabled") && (f = a.Event("context"), this.before.call(this, b, a(b.currentTarget)))) {
                    this.$elements.trigger(f), d = this.getMenu();
                    var g = this.getPosition(b, d);
                    return d.attr("style", "").css(g).data("_context_this_ref", this).addClass("open"), !1
                }
            },
            closemenu: function() {
                this.getMenu().removeClass("open")
            },
            before: function() {
                return !0
            },
            onItem: function() {
                return !0
            },
            listen: function() {
                var b = this;
                this.$elements.on("contextmenu.context.data-api", a.proxy(this.show, this)), a("html").on("click.context.data-api", a.proxy(this.closemenu, this));
                var c = a(this.$elements.attr("data-target"));
                c.on("click.context.data-api", function(c) {
                    a(this).data("_context_this_ref") == b && b.onItem.call(this, c, a(c.target))
                }), a("html").on("click.context.data-api", function(a) {
                    a.ctrlKey || c.removeClass("open")
                })
            },
            destroy: function() {
                this.$elements.off(".context.data-api").removeData("context"), a("html").off(".context.data-api");
                var b = a(this.$elements.attr("data-target"));
                b.off(".context.data-api")
            },
            getMenu: function() {
                var c, b = this.$elements.attr("data-target");
                return b || (b = this.$elements.attr("href"), b = b && b.replace(/.*(?=#[^\s]*$)/, "")), c = a(b)
            },
            getPosition: function(b, c) {
                var k, l, d = b.clientX,
                    e = b.clientY,
                    f = a(window).width(),
                    g = a(window).height(),
                    h = c.find(".dropdown-menu").outerWidth(),
                    i = c.find(".dropdown-menu").outerHeight(),
                    j = {
                        position: "absolute"
                    };
                return k = e + i > g ? {
                    top: e - i + a(window).scrollTop()
                } : {
                    top: e + a(window).scrollTop()
                }, l = d + h > f && d - h > 0 ? {
                    left: d - h + a(window).scrollLeft()
                } : {
                    left: d + a(window).scrollLeft()
                }, a.extend(j, k, l)
            },
            clearMenus: function(b) {
                b.ctrlKey || a("[data-toggle=context]").each(function() {
                    this.getMenu().removeClass("open")
                })
            }
        }, a.fn.contextmenu = function(a, c) {
            var d = this;
            return function() {
                var e = d.data("context"),
                    f = "object" == typeof a && a;
                e || d.data("context", e = new b(d, f)), "string" == typeof a && e[a].call(e, c)
            }()
        }, a.fn.contextmenu.Constructor = b, a(document).on("contextmenu.context.data-api", "[data-toggle=context]", function(b) {
            a(this).contextmenu("show", b), b.preventDefault()
        })
    }(jQuery);
});;
/**bootstrap-fuelux-wizard*/
define("bootstrap/plugins/bootstrap-fuelux/wizard", ["jquery"], function(a) {
    var b = a("jquery"),
        c = function(a, c) {
            var d;
            this.$element = b(a), this.options = b.extend({}, b.fn.wizard.defaults, c), this.currentStep = 1, this.numSteps = this.$element.find("li").length, this.$prevBtn = this.$element.find("button.btn-prev"), this.$nextBtn = this.$element.find("button.btn-next"), d = this.$nextBtn.children().detach(), this.nextText = b.trim(this.$nextBtn.text()), this.$nextBtn.append(d), this.$prevBtn.on("click", b.proxy(this.previous, this)), this.$nextBtn.on("click", b.proxy(this.next, this)), this.$element.on("click", "li.complete", b.proxy(this.stepclicked, this))
        };
    c.prototype = {
        constructor: c,
        setState: function() {
            var a = this.currentStep > 1,
                c = 1 === this.currentStep,
                d = this.currentStep === this.numSteps;
            this.$prevBtn.attr("disabled", c === !0 || a === !1);
            var e = this.$nextBtn.data();
            if (e && e.last && (this.lastText = e.last, "undefined" != typeof this.lastText)) {
                var f = d !== !0 ? this.nextText : this.lastText,
                    g = this.$nextBtn.children().detach();
                this.$nextBtn.text(f).append(g)
            }
            var h = this.$element.find("li");
            h.removeClass("active").removeClass("complete"), h.find("span.badge").removeClass("badge-info").removeClass("badge-success");
            var i = "li:lt(" + (this.currentStep - 1) + ")",
                j = this.$element.find(i);
            j.addClass("complete"), j.find("span.badge").addClass("badge-success");
            var k = "li:eq(" + (this.currentStep - 1) + ")",
                l = this.$element.find(k);
            l.addClass("active"), l.find("span.badge").addClass("badge-info");
            var m = l.data().target;
            b(".step-pane").removeClass("active"), b(m).addClass("active"), this.$element.trigger("changed")
        },
        stepclicked: function(a) {
            var c = b(a.currentTarget),
                d = b(".steps li").index(c),
                e = b.Event("stepclick");
            this.$element.trigger(e, {
                step: d + 1
            }), e.isDefaultPrevented() || (this.currentStep = d + 1, this.setState())
        },
        previous: function() {
            var a = this.currentStep > 1;
            if (a) {
                var c = b.Event("change");
                if (this.$element.trigger(c, {
                        step: this.currentStep,
                        direction: "previous"
                    }), c.isDefaultPrevented()) return;
                this.currentStep -= 1, this.setState()
            }
        },
        next: function() {
            var a = this.currentStep + 1 <= this.numSteps,
                c = this.currentStep === this.numSteps;
            if (a) {
                var d = b.Event("change");
                if (this.$element.trigger(d, {
                        step: this.currentStep,
                        direction: "next"
                    }), d.isDefaultPrevented()) return;
                this.currentStep += 1, this.setState()
            } else c && this.$element.trigger("finished")
        },
        selectedItem: function() {
            return {
                step: this.currentStep
            }
        }
    }, b.fn.wizard = function(a, d) {
        var e, f = this.each(function() {
            var f = b(this),
                g = f.data("wizard"),
                h = "object" == typeof a && a;
            g || f.data("wizard", g = new c(this, h)), "string" == typeof a && (e = g[a](d))
        });
        return void 0 === e ? f : e
    }, b.fn.wizard.defaults = {}, b.fn.wizard.Constructor = c, b(function() {
        b("body").on("mousedown.wizard.data-api", ".wizard", function() {
            var a = b(this);
            a.data("wizard") || a.wizard(a.data())
        })
    })
});;
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
            this.picker = $(DPGlobal.template).appendTo(this.isInline ? this.element : 'body').on({
                click: $.proxy(this.click, this),
                mousedown: $.proxy(this.mousedown, this)
            });
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
        Datetimepicker.prototype = {
            constructor: Datetimepicker,
            _events: [],
            _attachEvents: function() {
                this._detachEvents();
                if (this.isInput) {
                    this._events = [
                        [this.element, {
                            focus: $.proxy(this.show, this),
                            keyup: $.proxy(this.update, this),
                            keydown: $.proxy(this.keydown, this)
                        }]
                    ]
                } else if (this.component && this.hasInput) {
                    this._events = [
                        [this.element.find('input'), {
                            focus: $.proxy(this.show, this),
                            keyup: $.proxy(this.update, this),
                            keydown: $.proxy(this.keydown, this)
                        }],
                        [this.component, {
                            click: $.proxy(this.show, this)
                        }]
                    ];
                    if (this.componentReset) {
                        this._events.push([this.componentReset, {
                            click: $.proxy(this.reset, this)
                        }])
                    }
                } else if (this.element.is('div')) {
                    this.isInline = true
                } else {
                    this._events = [
                        [this.element, {
                            click: $.proxy(this.show, this)
                        }]
                    ]
                }
                for (var i = 0, el, ev; i < this._events.length; i++) {
                    el = this._events[i][0];
                    ev = this._events[i][1];
                    el.on(ev)
                }
            },
            _detachEvents: function() {
                for (var i = 0, el, ev; i < this._events.length; i++) {
                    el = this._events[i][0];
                    ev = this._events[i][1];
                    el.off(ev)
                }
                this._events = []
            },
            show: function(e) {
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
                this.element.trigger({
                    type: 'show',
                    date: this.date
                })
            },
            hide: function(e) {
                if (!this.isVisible) return;
                if (this.isInline) return;
                this.picker.hide();
                $(window).off('resize', this.place);
                this.viewMode = this.startViewMode;
                this.showMode();
                if (!this.isInput) {
                    $(document).off('mousedown', this.hide)
                }
                if (this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find('input').val())) this.setValue();
                this.isVisible = false;
                this.element.trigger({
                    type: 'hide',
                    date: this.date
                })
            },
            remove: function() {
                this._detachEvents();
                this.picker.remove();
                delete this.element.data().datetimepicker
            },
            getDate: function() {
                var d = this.getUTCDate();
                return new Date(d.getTime() + (d.getTimezoneOffset() * 60000))
            },
            getUTCDate: function() {
                return this.date
            },
            setDate: function(d) {
                this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset() * 60000)))
            },
            setUTCDate: function(d) {
                if (d >= this.startDate && d <= this.endDate) {
                    this.date = d;
                    this.setValue();
                    this.viewDate = this.date;
                    this.fill()
                } else {
                    this.element.trigger({
                        type: 'outOfRange',
                        date: d,
                        startDate: this.startDate,
                        endDate: this.endDate
                    })
                }
            },
            setFormat: function(format) {
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
            },
            setValue: function() {
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
            },
            getFormattedDate: function(format) {
                if (format == undefined) format = this.format;
                return DPGlobal.formatDate(this.date, format, this.language, this.formatType)
            },
            setStartDate: function(startDate) {
                this.startDate = startDate || -Infinity;
                if (this.startDate !== -Infinity) {
                    this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language, this.formatType)
                }
                this.update();
                this.updateNavArrows()
            },
            setEndDate: function(endDate) {
                this.endDate = endDate || Infinity;
                if (this.endDate !== Infinity) {
                    this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language, this.formatType)
                }
                this.update();
                this.updateNavArrows()
            },
            setDaysOfWeekDisabled: function(daysOfWeekDisabled) {
                this.daysOfWeekDisabled = daysOfWeekDisabled || [];
                if (!$.isArray(this.daysOfWeekDisabled)) {
                    this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)
                }
                this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function(d) {
                    return parseInt(d, 10)
                });
                this.update();
                this.updateNavArrows()
            },
            place: function() {
                if (this.isInline) return;
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
                this.picker.css({
                    top: top,
                    left: left,
                    zIndex: zIndex
                })
            },
            update: function() {
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
                if (fromArgs) this.setValue();
                if (this.date < this.startDate) {
                    this.viewDate = new Date(this.startDate)
                } else if (this.date > this.endDate) {
                    this.viewDate = new Date(this.endDate)
                } else {
                    this.viewDate = new Date(this.date)
                }
                this.fill()
            },
            fillDow: function() {
                var dowCnt = this.weekStart,
                    html = '<tr>';
                while (dowCnt < this.weekStart + 7) {
                    html += '<th class="dow">' + dates[this.language].daysMin[(dowCnt++) % 7] + '</th>'
                }
                html += '</tr>';
                this.picker.find('.datetimepicker-days thead').append(html)
            },
            fillMonths: function() {
                var html = '',
                    i = 0;
                while (i < 12) {
                    html += '<span class="month">' + dates[this.language].monthsShort[i++] + '</span>'
                }
                this.picker.find('.datetimepicker-months td').html(html)
            },
            fill: function() {
                if (this.date == null || this.viewDate == null) {
                    return
                }
                var d = new Date(this.viewDate),
                    year = d.getUTCFullYear(),
                    month = d.getUTCMonth(),
                    dayMonth = d.getUTCDate(),
                    hours = d.getUTCHours(),
                    minutes = d.getUTCMinutes(),
                    startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
                    startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity,
                    endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
                    endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity,
                    currentDate = (new UTCDate(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate())).valueOf(),
                    today = new Date();
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
                var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
                    day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
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
                var txt = '',
                    meridian = '',
                    meridianOld = '';
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
            },
            updateNavArrows: function() {
                var d = new Date(this.viewDate),
                    year = d.getUTCFullYear(),
                    month = d.getUTCMonth(),
                    day = d.getUTCDate(),
                    hour = d.getUTCHours();
                switch (this.viewMode) {
                    case 0:
                        if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth() && day <= this.startDate.getUTCDate() && hour <= this.startDate.getUTCHours()) {
                            this.picker.find('.prev').css({
                                visibility: 'hidden'
                            })
                        } else {
                            this.picker.find('.prev').css({
                                visibility: 'visible'
                            })
                        }
                        if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth() && day >= this.endDate.getUTCDate() && hour >= this.endDate.getUTCHours()) {
                            this.picker.find('.next').css({
                                visibility: 'hidden'
                            })
                        } else {
                            this.picker.find('.next').css({
                                visibility: 'visible'
                            })
                        }
                        break;
                    case 1:
                        if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth() && day <= this.startDate.getUTCDate()) {
                            this.picker.find('.prev').css({
                                visibility: 'hidden'
                            })
                        } else {
                            this.picker.find('.prev').css({
                                visibility: 'visible'
                            })
                        }
                        if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth() && day >= this.endDate.getUTCDate()) {
                            this.picker.find('.next').css({
                                visibility: 'hidden'
                            })
                        } else {
                            this.picker.find('.next').css({
                                visibility: 'visible'
                            })
                        }
                        break;
                    case 2:
                        if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth()) {
                            this.picker.find('.prev').css({
                                visibility: 'hidden'
                            })
                        } else {
                            this.picker.find('.prev').css({
                                visibility: 'visible'
                            })
                        }
                        if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth()) {
                            this.picker.find('.next').css({
                                visibility: 'hidden'
                            })
                        } else {
                            this.picker.find('.next').css({
                                visibility: 'visible'
                            })
                        }
                        break;
                    case 3:
                    case 4:
                        if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
                            this.picker.find('.prev').css({
                                visibility: 'hidden'
                            })
                        } else {
                            this.picker.find('.prev').css({
                                visibility: 'visible'
                            })
                        }
                        if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
                            this.picker.find('.next').css({
                                visibility: 'hidden'
                            })
                        } else {
                            this.picker.find('.next').css({
                                visibility: 'visible'
                            })
                        }
                        break
                }
            },
            click: function(e) {
                e.stopPropagation();
                e.preventDefault();
                var target = $(e.target).closest('span, td, th, legend');
                if (target.length == 1) {
                    if (target.is('.disabled')) {
                        this.element.trigger({
                            type: 'outOfRange',
                            date: this.viewDate,
                            startDate: this.startDate,
                            endDate: this.endDate
                        });
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
                                var year = this.viewDate.getUTCFullYear(),
                                    month = this.viewDate.getUTCMonth(),
                                    day = this.viewDate.getUTCDate(),
                                    hours = this.viewDate.getUTCHours(),
                                    minutes = this.viewDate.getUTCMinutes(),
                                    seconds = this.viewDate.getUTCSeconds();
                                if (target.is('.month')) {
                                    this.viewDate.setUTCDate(1);
                                    month = target.parent().find('span').index(target);
                                    day = this.viewDate.getUTCDate();
                                    this.viewDate.setUTCMonth(month);
                                    this.element.trigger({
                                        type: 'changeMonth',
                                        date: this.viewDate
                                    });
                                    if (this.viewSelect >= 3) {
                                        this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0))
                                    }
                                } else if (target.is('.year')) {
                                    this.viewDate.setUTCDate(1);
                                    year = parseInt(target.text(), 10) || 0;
                                    this.viewDate.setUTCFullYear(year);
                                    this.element.trigger({
                                        type: 'changeYear',
                                        date: this.viewDate
                                    });
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
                                    this.element.trigger({
                                        type: 'changeHour',
                                        date: this.viewDate
                                    });
                                    if (this.viewSelect >= 1) {
                                        this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0))
                                    }
                                } else if (target.is('.minute')) {
                                    minutes = parseInt(target.text().substr(target.text().indexOf(':') + 1), 10) || 0;
                                    this.viewDate.setUTCMinutes(minutes);
                                    this.element.trigger({
                                        type: 'changeMinute',
                                        date: this.viewDate
                                    });
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
                                var year = this.viewDate.getUTCFullYear(),
                                    month = this.viewDate.getUTCMonth(),
                                    hours = this.viewDate.getUTCHours(),
                                    minutes = this.viewDate.getUTCMinutes(),
                                    seconds = this.viewDate.getUTCSeconds();
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
                                this.element.trigger({
                                    type: 'changeDay',
                                    date: this.viewDate
                                });
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
            },
            _setDate: function(date, which) {
                if (!which || which == 'date') this.date = date;
                if (!which || which == 'view') this.viewDate = date;
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
                    if (this.autoclose && (!which || which == 'date')) {}
                }
                this.element.trigger({
                    type: 'changeDate',
                    date: this.date
                })
            },
            moveMinute: function(date, dir) {
                if (!dir) return date;
                var new_date = new Date(date.valueOf());
                new_date.setUTCMinutes(new_date.getUTCMinutes() + (dir * this.minuteStep));
                return new_date
            },
            moveHour: function(date, dir) {
                if (!dir) return date;
                var new_date = new Date(date.valueOf());
                new_date.setUTCHours(new_date.getUTCHours() + dir);
                return new_date
            },
            moveDate: function(date, dir) {
                if (!dir) return date;
                var new_date = new Date(date.valueOf());
                new_date.setUTCDate(new_date.getUTCDate() + dir);
                return new_date
            },
            moveMonth: function(date, dir) {
                if (!dir) return date;
                var new_date = new Date(date.valueOf()),
                    day = new_date.getUTCDate(),
                    month = new_date.getUTCMonth(),
                    mag = Math.abs(dir),
                    new_month, test;
                dir = dir > 0 ? 1 : -1;
                if (mag == 1) {
                    test = dir == -1 ? function() {
                        return new_date.getUTCMonth() == month
                    } : function() {
                        return new_date.getUTCMonth() != new_month
                    };
                    new_month = month + dir;
                    new_date.setUTCMonth(new_month);
                    if (new_month < 0 || new_month > 11) new_month = (new_month + 12) % 12
                } else {
                    for (var i = 0; i < mag; i++) new_date = this.moveMonth(new_date, dir);
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
            },
            moveYear: function(date, dir) {
                return this.moveMonth(date, dir * 12)
            },
            dateWithinRange: function(date) {
                return date >= this.startDate && date <= this.endDate
            },
            keydown: function(e) {
                if (this.picker.is(':not(:visible)')) {
                    if (e.keyCode == 27) this.show();
                    return
                }
                var dateChanged = false,
                    dir, day, month, newDate, newViewDate;
                switch (e.keyCode) {
                    case 27:
                        this.hide();
                        e.preventDefault();
                        break;
                    case 37:
                    case 39:
                        if (!this.keyboardNavigation) break;
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
                        if (!this.keyboardNavigation) break;
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
                    this.element.trigger({
                        type: 'changeDate',
                        date: this.date
                    })
                }
            },
            showMode: function(dir) {
                if (dir) {
                    var newViewMode = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + dir));
                    if (newViewMode >= this.minView && newViewMode <= this.maxView) {
                        this.element.trigger({
                            type: 'changeMode',
                            date: this.viewDate,
                            oldViewMode: this.viewMode,
                            newViewMode: newViewMode
                        });
                        this.viewMode = newViewMode
                    }
                }
                this.picker.find('>div').hide().filter('.datetimepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
                this.updateNavArrows()
            },
            reset: function(e) {
                this._setDate(null, 'date')
            }
        };
        $.fn.datetimepicker = function(option) {
            var args = Array.apply(null, arguments);
            args.shift();
            return this.each(function() {
                var $this = $(this),
                    data = $this.data('datetimepicker'),
                    options = typeof option == 'object' && option;
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
        var dates = $.fn.datetimepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                meridiem: ["am", "pm"],
                suffix: ["st", "nd", "rd", "th"],
                today: "Today"
            }
        };
        var DPGlobal = {
            modes: [{
                clsName: 'minutes',
                navFnc: 'Hours',
                navStep: 1
            }, {
                clsName: 'hours',
                navFnc: 'Date',
                navStep: 1
            }, {
                clsName: 'days',
                navFnc: 'Month',
                navStep: 1
            }, {
                clsName: 'months',
                navFnc: 'FullYear',
                navStep: 1
            }, {
                clsName: 'years',
                navFnc: 'FullYear',
                navStep: 10
            }],
            isLeapYear: function(year) {
                return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
            },
            getDaysInMonth: function(year, month) {
                return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
            },
            getDefaultFormat: function(type, field) {
                if (type == "standard") {
                    if (field == 'input') return 'yyyy-mm-dd hh:ii';
                    else return 'yyyy-mm-dd hh:ii:ss'
                } else if (type == "php") {
                    if (field == 'input') return 'Y-m-d H:i';
                    else return 'Y-m-d H:i:s'
                } else {
                    throw new Error("Invalid format type.");
                }
            },
            validParts: function(type) {
                if (type == "standard") {
                    return /hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g
                } else if (type == "php") {
                    return /[dDjlNwzFmMnStyYaABgGhHis]/g
                } else {
                    throw new Error("Invalid format type.");
                }
            },
            nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
            parseFormat: function(format, type) {
                var separators = format.replace(this.validParts(type), '\0').split('\0'),
                    parts = format.match(this.validParts(type));
                if (!separators || !separators.length || !parts || parts.length == 0) {
                    throw new Error("Invalid date format.");
                }
                return {
                    separators: separators,
                    parts: parts
                }
            },
            parseDate: function(date, format, language, type) {
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
                    var part_re = /([-+]\d+)([dmwy])/,
                        parts = date.match(/([-+]\d+)([dmwy])/g),
                        part, dir;
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
                var parts = date && date.match(this.nonpunctuation) || [],
                    date = new Date(0, 0, 0, 0, 0, 0, 0),
                    parsed = {},
                    setters_order = ['hh', 'h', 'ii', 'i', 'ss', 's', 'yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'D', 'DD', 'd', 'dd', 'H', 'HH', 'p', 'P'],
                    setters_map = {
                        hh: function(d, v) {
                            return d.setUTCHours(v)
                        },
                        h: function(d, v) {
                            return d.setUTCHours(v)
                        },
                        HH: function(d, v) {
                            return d.setUTCHours(v == 12 ? 0 : v)
                        },
                        H: function(d, v) {
                            return d.setUTCHours(v == 12 ? 0 : v)
                        },
                        ii: function(d, v) {
                            return d.setUTCMinutes(v)
                        },
                        i: function(d, v) {
                            return d.setUTCMinutes(v)
                        },
                        ss: function(d, v) {
                            return d.setUTCSeconds(v)
                        },
                        s: function(d, v) {
                            return d.setUTCSeconds(v)
                        },
                        yyyy: function(d, v) {
                            return d.setUTCFullYear(v)
                        },
                        yy: function(d, v) {
                            return d.setUTCFullYear(2000 + v)
                        },
                        m: function(d, v) {
                            v -= 1;
                            while (v < 0) v += 12;
                            v %= 12;
                            d.setUTCMonth(v);
                            while (d.getUTCMonth() != v) d.setUTCDate(d.getUTCDate() - 1);
                            return d
                        },
                        d: function(d, v) {
                            return d.setUTCDate(v)
                        },
                        p: function(d, v) {
                            return d.setUTCHours(v == 1 ? d.getUTCHours() + 12 : d.getUTCHours())
                        }
                    },
                    val, filtered, part;
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
                                        var m = this.slice(0, parts[i].length),
                                            p = parts[i].slice(0, m.length);
                                        return m == p
                                    });
                                    val = $.inArray(filtered[0], dates[language].months) + 1;
                                    break;
                                case 'M':
                                    filtered = $(dates[language].monthsShort).filter(function() {
                                        var m = this.slice(0, parts[i].length),
                                            p = parts[i].slice(0, m.length);
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
                        if (s in parsed && !isNaN(parsed[s])) setters_map[s](date, parsed[s])
                    }
                }
                return date
            },
            formatDate: function(date, format, language, type) {
                if (date == null) {
                    return ''
                }
                var val;
                if (type == 'standard') {
                    val = {
                        yy: date.getUTCFullYear().toString().substring(2),
                        yyyy: date.getUTCFullYear(),
                        m: date.getUTCMonth() + 1,
                        M: dates[language].monthsShort[date.getUTCMonth()],
                        MM: dates[language].months[date.getUTCMonth()],
                        d: date.getUTCDate(),
                        D: dates[language].daysShort[date.getUTCDay()],
                        DD: dates[language].days[date.getUTCDay()],
                        p: (dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
                        h: date.getUTCHours(),
                        i: date.getUTCMinutes(),
                        s: date.getUTCSeconds()
                    };
                    val.H = (val.h % 12 == 0 ? 12 : val.h % 12);
                    val.HH = (val.H < 10 ? '0' : '') + val.H;
                    val.P = val.p.toUpperCase();
                    val.hh = (val.h < 10 ? '0' : '') + val.h;
                    val.ii = (val.i < 10 ? '0' : '') + val.i;
                    val.ss = (val.s < 10 ? '0' : '') + val.s;
                    val.dd = (val.d < 10 ? '0' : '') + val.d;
                    val.mm = (val.m < 10 ? '0' : '') + val.m
                } else if (type == 'php') {
                    val = {
                        y: date.getUTCFullYear().toString().substring(2),
                        Y: date.getUTCFullYear(),
                        F: dates[language].months[date.getUTCMonth()],
                        M: dates[language].monthsShort[date.getUTCMonth()],
                        n: date.getUTCMonth() + 1,
                        t: DPGlobal.getDaysInMonth(date.getUTCFullYear(), date.getUTCMonth()),
                        j: date.getUTCDate(),
                        l: dates[language].days[date.getUTCDay()],
                        D: dates[language].daysShort[date.getUTCDay()],
                        w: date.getUTCDay(),
                        N: (date.getUTCDay() == 0 ? 7 : date.getUTCDay()),
                        S: (date.getUTCDate() % 10 <= dates[language].suffix.length ? dates[language].suffix[date.getUTCDate() % 10 - 1] : ''),
                        a: (dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
                        g: (date.getUTCHours() % 12 == 0 ? 12 : date.getUTCHours() % 12),
                        G: date.getUTCHours(),
                        i: date.getUTCMinutes(),
                        s: date.getUTCSeconds()
                    };
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
                var date = [],
                    seps = $.extend([], format.separators);
                for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
                    if (seps.length) date.push(seps.shift());
                    date.push(val[format.parts[i]])
                }
                return date.join('')
            },
            convertViewMode: function(viewMode) {
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
            },
            headTemplate: '<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
        };
        DPGlobal.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + DPGlobal.headTemplate + '<tbody></tbody>' + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div></div>';
        $.fn.datetimepicker.DPGlobal = DPGlobal
    })(jQuery);;
    (function($) {
        $.fn.datetimepicker.dates['zh-CN'] = {
            days: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d", "\u661f\u671f\u65e5"],
            daysShort: ["\u5468\u65e5", "\u5468\u4e00", "\u5468\u4e8c", "\u5468\u4e09", "\u5468\u56db", "\u5468\u4e94", "\u5468\u516d", "\u5468\u65e5"],
            daysMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u65e5"],
            months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
            monthsShort: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
            today: "\u4eca\u65e5",
            suffix: [],
            meridiem: []
        };
    }(jQuery));;
    (function($) {
        $.fn.datetimepicker.dates['zh-TW'] = {
            days: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d", "\u661f\u671f\u65e5"],
            daysShort: ["\u9031\u65e5", "\u9031\u4e00", "\u9031\u4e8c", "\u9031\u4e09", "\u9031\u56db", "\u9031\u4e94", "\u9031\u516d", "\u9031\u65e5"],
            daysMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u65e5"],
            months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
            monthsShort: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
            today: "\u4eca\u65e5",
            suffix: [],
            meridiem: []
        };
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
});;