define("app/reg/controllers/BindAccount", function() {
    function e(e, r, t, a, i, l, o) {
        e.ctrlName = n, e.registerBean = o, e.registerBean.email = webhelper.getUrlEncodedKey("email"), e.registerBean.code = webhelper.getUrlEncodedKey("code"), e.loginUrl = i.getLoginUrl(), l.bindAccount({
            account: e.registerBean.email,
            code: e.registerBean.code
        }).then(function() {
            e.registerBean.message = a("msgEmailBindSucc")
        })["catch"](function() {
            e.registerBean.message = a("msgEmailBindFail")
        }), $("body").removeClass("zh_CN zh_TW en_US").addClass(e.lang)
    }
    var n = "[BindCtrl]-";
    angular.module("register").controller("BindCtrl", ["$scope", "$rootScope", "$log", "$translate", "constants", "resturl", "registerBean", e])
});;
define("app/reg/controllers/FindPwd", function() {
    function e(e, t, a, n, i, c, o, s, d, l) {
        e.ctrlName = r, document.title = t("msgGetPwdTitle"), e.registerBean = s, e.registerBean.validateType = "FindPassword", e.sendType = "default", e.SendService = d, e.sendValidateMsg = function() {
            var r = $.trim(e.registerBean.account);
            return r.match(i.pattern.email) || r.match(i.pattern.Mobile) ? void c.sendValidationMsg({
                account: e.registerBean.account,
                type: e.registerBean.validateType
            }).then(function() {
                e.sendType = e.registerBean.isEmail() ? "mail" : "phone", e.titleData = {
                    account: e.registerBean.account
                }, e.SendService.startTimer()
            })["catch"](function(r) {
                switch (r) {
                    case o.errorWrongAccount:
                        e.accountForm.account.$error.wrongAccount = !0;
                        break;
                    case o.errorWaiting:
                        e.accountForm.account.$error.waiting = !0;
                        break;
                    default:
                        e.accountForm.account.$error.server = !0
                }
            }) : void(e.accountForm.account.$error.required = !0)
        }, e.submitSmsCode = function() {
            c.checkValidationMsg({
                account: e.registerBean.account,
                code: e.registerBean.code,
                type: e.registerBean.validateType
            }).then(function() {
                switch (a.info("registerBean:", e.registerBean), e.registerBean.validateType) {
                    case i.ValidationType.Register:
                        n.path("/active/admin"), a.debug("go to active/admin");
                        break;
                    case i.ValidationType.FindPassword:
                        l.phone = e.registerBean.account, n.path("/reset/pwd")
                }
            })["catch"](function(r) {
                var a = "msgServerError";
                switch (r) {
                    case o.errorValidationCode:
                        a = "msgValidateError"
                }
                e.registerBean.message = t(a)
            })
        }, $("body").removeClass("zh_CN zh_TW en_US").addClass(e.lang)
    }
    var r = "[FindCtrl]-";
    angular.module("register").controller("FindCtrl", ["$scope", "$translate", "$log", "$location", "constants", "resturl", "ErrorType", "registerBean", "SendService", "cache", e])
});;
define("app/reg/controllers/ResetPwd", function(require) {
    function e(e, a, n, r, o, c, i, d, s) {
        e.ctrlName = t, e.registerBean = d, "pwd" == n.account ? s.phone ? e.validate = "OK" : (e.registerBean.account = webhelper.getUrlEncodedKey("email"), e.registerBean.code = webhelper.getUrlEncodedKey("code"), e.registerBean.validateType = c.ValidationType.FindPassword, i.checkValidationMsg({
            account: e.registerBean.account,
            code: e.registerBean.code,
            type: e.registerBean.validateType
        }).then(function() {
            e.validate = "OK"
        }, function() {
            e.validate = "error"
        })) : a.path("/"), e.onNext = function() {
            r.debug("onNext"), i.resetPwd(e.registerBean.getResetPwdParam()).then(function() {
                e.validate = "changePwdOK"
            }, function() {
                e.validate = "error"
            })
        }, e.submitSmsCode = function() {
            i.checkValidationMsg({
                account: e.registerBean.account,
                code: e.registerBean.code,
                type: e.registerBean.validateType
            }).then(function() {
                e.validate = "changePwdOK"
            }, function() {
                e.validate = "error"
            })
        }, $("body").removeClass("zh_CN zh_TW en_US").addClass(e.lang)
    } {
        var t = "[ResetCtrl]-";
        require("security")
    }
    angular.module("register").controller("ResetCtrl", ["$scope", "$location", "$routeParams", "$log", "$translate", "constants", "resturl", "registerBean", "cache", e])
});;
define("app/reg/controllers/SetEntInfo", function(require) {
    function e(e, r, a, n, i, o, s, c, d, l) {
        function u(t) {
            e.registerBean.account = webhelper.getUrlEncodedKey("email"), e.registerBean.code = webhelper.getUrlEncodedKey("code"), e.registerBean.validateType = "admin" === t ? "Register" : "VerifyAccount", c.checkValidationMsg({
                account: e.registerBean.account,
                code: e.registerBean.code,
                type: e.registerBean.validateType
            }).then(function() {
                e.validate = "OK"
            })["catch"](function() {
                switch (a.account) {
                    case "admin":
                        e.validate = "adminError";
                        break;
                    case "user":
                        e.validate = "userError"
                }
            })
        }
        if (e.ctrlName = t, r.header = "setentinfo", e.registerBean = l, e.step = "setPwd", n.debug(t, "registerBean: ", l, ", account: ", l.account), l.account) e.validate = "OK";
        else {
            if (!webhelper.getUrlEncodedKey("email")) return void o.path("/");
            switch (a.account) {
                case "admin":
                    document.title = i("msgSetEntInfo"), u("admin");
                    break;
                case "user":
                    document.title = i("msgActiveUserTitle"), u("user")
            }
        }
        e.isMail = e.registerBean.isEmail(), e.contactWayTip = i(e.isMail ? "msgInputContactTelTip" : "msgEmailEmpty"), e.contactWayPattern = e.isMail ? s.pattern.phoneOrMobile : s.pattern.email, e.onPrev = function() {
            e.step = "setPwd"
        }, e.onFinish = function() {
            return e.setForm.$invalid ? (d.fail("您填写的数据不合格, 请修改!"), !1) : void c.registerDone(e.registerBean.getRegisterDoneParam()).then(function() {
                e.finish = !0
            })["catch"](function(t) {
                switch (e.setForm.$invalid = !0, t) {
                    case "errorAccountUsed":
                        e.setForm.entName.$error.accountUsed = !0;
                        break;
                    case "errorEnterpriseAlreadyExist":
                        e.setForm.entName.$error.existsEntName = !0;
                        break;
                    default:
                        e.setForm.entName.$error.server = !0
                }
            })
        }, e.onNext = function() {
            return e.pwdForm.$invalid || e.registerBean.password !== e.registerBean.repassword ? (d.fail("您填写的数据不合格, 请修改!"), !1) : "admin" == a.account ? void(e.step = "setEntInfo") : void c.resetPwd(e.registerBean.getResetPwdParam()).then(function() {
                e.validate = "activeUserOK"
            })["catch"](function() {
                e.validate = "userError"
            })
        }, $("body").removeClass("zh_CN zh_TW en_US").addClass(e.lang)
    } {
        var t = "[SetCtrl]-";
        require("security")
    }
    angular.module("register").controller("SetCtrl", ["$scope", "$rootScope", "$routeParams", "$log", "$translate", "$location", "constants", "resturl", "noty", "registerBean", e])
});;
define("app/reg/controllers/mainbox", function() {
    angular.module("register").controller("MainboxCtrl", ["$scope", "$rootScope", "constants", function(o, n, e) {
        n.header = "default", n.constants = e
    }])
});;
define("app/reg/controllers/register", function() {
    function e(e, t, a, n, i, o, c, s, g) {
        e.ctrlName = r, e.registerBean = s, e.SendService = g, e.sendType = "default", e.agree = !1, e.$watch("agree", function(r) {
            r && (e.regForm.account.$error.agree = !r)
        }), e.onSubmit = function() {
            var r = $.trim(e.registerBean.account);
            return r.match(i.pattern.email) || r.match(i.pattern.Mobile) ? e.agree ? void o.sendValidationMsg({
                account: e.registerBean.account,
                type: "Register"
            }).then(function() {
                e.sendType = e.registerBean.isEmail() ? "mail" : "phone", e.titleData = {
                    account: e.registerBean.account
                }, e.SendService.startTimer()
            })["catch"](function(r) {
                switch (t.debug("register result: ", r), r) {
                    case c.errorAccountUsed:
                        e.regForm.account.$error.used = !0;
                        break;
                    case c.errorWaiting:
                        e.regForm.account.$error.waiting = !0;
                        break;
                    default:
                        e.regForm.account.$error.server = !0
                }
            }) : void(e.regForm.account.$error.agree = !0) : void(e.regForm.account.$error.required = !0)
        }, e.submitSmsCode = function() {
            o.checkValidationMsg({
                account: e.registerBean.account,
                code: e.registerBean.code,
                type: e.registerBean.validateType
            }).then(function() {
                switch (t.info("registerBean:", e.registerBean), e.registerBean.validateType) {
                    case i.ValidationType.Register:
                        n.path("/active/admin"), t.debug("go to active/admin");
                        break;
                    case i.ValidationType.FindPassword:
                        n.path("#/reset/" + e.registerBean.account)
                }
            })["catch"](function(r) {
                var t = "msgServerError";
                switch (r) {
                    case c.errorValidationCode:
                        t = "msgValidateError"
                }
                e.registerBean.message = a(t)
            })
        }, $("body").removeClass("zh_CN zh_TW en_US").addClass(e.lang)
    }
    var r = "[RegCtrl]-";
    angular.module("register").controller("RegCtrl", ["$scope", "$log", "$translate", "$location", "constants", "resturl", "ErrorType", "registerBean", "SendService", e])
});;
define("app/reg/controllers/index", function(require) {
    require("app/reg/controllers/mainbox"), require("app/reg/controllers/register"), require("app/reg/controllers/SetEntInfo"), require("app/reg/controllers/FindPwd"), require("app/reg/controllers/ResetPwd"), require("app/reg/controllers/BindAccount")
});;
define("app/reg/services/registerBean", function(require) {
    var t = require("security");
    angular.module("register").factory("registerBean", ["constants", function(e) {
        return {
            account: void 0,
            code: void 0,
            agreeRegister: !1,
            validateType: "Register",
            password: void 0,
            repassword: void 0,
            entName: void 0,
            contact: void 0,
            contactWay: void 0,
            remindTime: 0,
            message: void 0,
            isEmail: function() {
                return this.account.match(e.pattern.email)
            },
            getRegisterDoneParam: function() {
                var e = t.getNonceDTO(this.account, this.password);
                return angular.extend(e, {
                    account: this.account,
                    agent: "web",
                    code: this.code,
                    entName: this.entName,
                    mail: !this.isEmail() && this.contactWay,
                    mobile: this.isEmail() && this.contactWay,
                    contact: this.contact
                }), e
            },
            getResetPwdParam: function() {
                var e = t.getNonceDTO(this.account, this.password);
                return angular.extend(e, {
                    account: this.account,
                    agent: "web",
                    code: this.code
                }), e
            }
        }
    }])
});;
define("app/reg/services/SendService", function() {
    function e(e, r, n, i, t) {
        return {
            onResendMail: function() {
                var e = this;
                t.remindTime > 0 || (t.message = "", n.sendValidationMsg({
                    account: t.account,
                    type: t.validateType
                }).then(function() {
                    e.startTimer()
                })["catch"](function(e) {
                    switch (e) {
                        case i.errorWaiting:
                            t.message = r("msgErrorWaiting");
                            break;
                        default:
                            t.message = r("msgServerError")
                    }
                }))
            },
            onResendSms: function() {
                var e = this;
                t.remindTime > 0 || n.sendValidationMsg({
                    account: t.account,
                    type: t.validateType
                }).then(function() {
                    e.startTimer()
                })["catch"](function(e) {
                    switch (e) {
                        case i.errorWaiting:
                            t.message = r("msgErrorWaiting");
                            break;
                        default:
                            t.message = r("msgServerError")
                    }
                })
            },
            startTimer: function() {
                t.remindTime = 120, e(function() {
                    t.remindTime > 0 && t.remindTime--
                }, 1e3, t.remindTime)
            }
        }
    }
    angular.module("register").factory("SendService", ["$interval", "$translate", "resturl", "ErrorType", "registerBean", e])
});;
define("app/reg/services/index", function(require) {
    require("app/reg/services/registerBean"), require("app/reg/services/SendService")
});;
define("app/reg/main", function(require) {
    angular.module("register", ["ngRoute", "ngTranslate", "commons.services", "commons.filters", "commons.directives"]), require("app/reg/services/index"), require("app/reg/controllers/index"), angular.module("register").config(["$translateProvider", function(e) {
        require("app/support/services/message")(e), e.uses("zh_CN")
    }]), angular.module("register").config(["$routeProvider", function(e) {
        "use strict";
        e.when("/", {
            controller: "RegCtrl",
            templateUrl: "RegView.html"
        }).when("/active/:account", {
            controller: "SetCtrl",
            templateUrl: "SetView.html"
        }).when("/find/pwd", {
            controller: "FindCtrl",
            templateUrl: "FindView.html"
        }).when("/reset/:account", {
            controller: "ResetCtrl",
            templateUrl: "ResetView.html"
        }).when("/bind/account", {
            controller: "BindCtrl",
            templateUrl: "BindView.html"
        }).otherwise({
            redirectTo: "/"
        })
    }]), angular.bootstrap(document, ["register"])
});