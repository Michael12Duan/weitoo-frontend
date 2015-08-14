define("app/login/header", function() {
    angular.module("login").controller("HeaderCtrl", function() {})
});;
define("app/login/login", function(require) {//require引入依赖
    function e(loginEntity, o, r, i, modelUrl) {
        function a(loginEntity, modelUrlFn) {
            (loginEntity || modelUrlFn) && loginErr()
        }

        function loginErr() {
            "Quick" !== loginEntity.loginBean.mode && loginEntity.loginForm.entName.$error.required ? showError("entNameRequire") : !loginEntity.loginBean.account && loginEntity.loginForm.account.$error.required ? showError("accountRequire") : loginEntity.loginForm.password.$error.required ? showError("passwordRequire") : loginEntity.formError = ""
        }

        function c(n) {
            i.setUserLoginCookies("Quick" === loginEntity.loginBean.mode, loginEntity.loginBean.entName, loginEntity.loginBean.account, loginEntity.loginBean.clientId, n)
        }

        function showError(erro_name) {
            var errMsg = loginEntity.errorMap[erro_name];
            errMsg && (loginEntity.formError = errMsg)
        }
        console.log(r)
        loginEntity.loginBean = new modelUrl,
            loginEntity.login = !1,//false
            loginEntity.formError = "",
            loginEntity.lang = webhelper.getLang(),
            loginEntity.switchLoginTxt = "msgOldLogin",
            loginEntity.loginBtnText = r("msg1"),
            loginEntity.onUserLogin = function() {
                return "Account" !== loginEntity.loginBean.mode || loginEntity.loginBean.entName && $.trim(loginEntity.loginBean.entName).length ? (loginEntity.commit = !0,//true
                    loginEntity.loginBtnText = "登录中...",
                    loginEntity.loginBean.signin().then(function(n) {
                        var o = webhelper.getUrlEncodedKey("from") || "";
                        if ("app.oatos.com" === location.host && n.vip)
                            location.assign("http://vip.oatos.com/auth-oatos?" + $.param({
                                ut: n.token,
                                v: n.vip ? 1 : 0,
                                ci: loginEntity.loginBean.clientId,
                                from: o
                            }));
                        else {
                            if (c(n.token), !o)
                                return location.assign(i.getWebsiteUrl()), !0;
                            switch (o) {
                                case "admin":
                                    location.assign(i.getAdminUrl());
                                    break;
                                case "buy":
                                    location.assign(i.getBuyUrl());
                                    break;
                                case "2015":
                                    location.assign(i.getPromoteUrl());
                                    break;
                                case "meeting":
                                    location.assign(i.getMeetingUrl())
                            }
                        }
                    })["catch"](function(o) {
                        showError(o),
                            loginEntity.commit = !1,
                            loginEntity.loginBtnText = r("msg1"),
                            log.debug(n, " signin: ", o, ", formError: ", loginEntity.formError)
                    }), !1) : (showError("entNameRequire"), !1)
            },
            loginEntity.onSwitchLang = function(n) {
                r.uses(n),
                    loginEntity.$parent.lang = n,
                    i.setCookie("lang", n),
                    $("body").removeClass("zh_CN zh_TW en_US").addClass(n)
            },
            loginEntity.onSwitchLogin = function() {
                "Quick" === loginEntity.loginBean.mode ? (loginEntity.loginBean.mode = "Account",
                    loginEntity.switchLoginTxt = "msgNewLogin") : (loginEntity.loginBean.mode = "Quick",
                    loginEntity.switchLoginTxt = "msgOldLogin")
            },
            loginEntity.errorMap = {
                errorWrongPWD: "密码错误",
                errorWrongAccount: "账号未注册",
                errorUserLocked: "用户被锁定，禁止登陆",
                error500: "登录失败! 请稍后重试",
                entNameRequire: "企业名称不能为空",
                accountRequire: "账号不能为空",
                passwordRequire: "密码不能为空",
                errorAuditFail: r("msgServiceExpire"),
                errorUserNotActive: r("msgAccountNotActive"),
                errorUserDeleted: r("msgAccountDeleted"),
                errorNotAuthed: r("msgUnAuthErr"),
                errorExpirationTimeOver: r("msgActiveUserErr")
            },
            loginEntity.$watch("loginBean.entName", a),
            loginEntity.$watch("loginBean.account", a),
            loginEntity.$watch("loginBean.password", a),
            $("body").removeClass("zh_CN zh_TW en_US").addClass(e.lang)
     } {
        var n = "[LoginCtrl]-";
        require("security")
    }
    angular.module("login").controller("LoginCtrl", ["$scope", "$log", "$translate", "constants", "LoginBean", e])
});;

define("app/login/main", function(require) {
    angular.module("login", ["ngRoute", "ngTranslate", "commons.services", "commons.models", "commons.filters", "commons.directives"]),
        require("app/login/login"),//引入模块
        require("app/login/header"),
        angular.module("login").config(["$translateProvider", function(o) {
            require("app/support/services/message")(o),
                o.uses("zh_CN")
        }]),
        angular.module("login").config(["$routeProvider", "$logProvider", "$translateProvider", function(o, e, n) {
            "use strict";
            e.debugEnabled(!0),
                n.uses(webhelper.getLang()),
                o.when("/", {
                    controller: "LoginCtrl",
                    templateUrl: "loginform.html"
                }).otherwise({
                    redirectTo: "/"
                })
        }]),
        angular.module("login").run(["$rootScope", "constants", function(o, e) {
            o._ = _,
                o.constants = e,
                window.cache = {
                    token: e.getCookie("ut"),
                    userId: void 0,
                    showType: e.getCookie("stp") || "list",
                    clientId: e.getCookie("ci") || webhelper.guid()
                }
        }]),
        angular.bootstrap(document, ["login"])
});