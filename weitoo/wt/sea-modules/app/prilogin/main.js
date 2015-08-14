define("app/prilogin/LoginCtrl", function(require) {
    function r(r, o, n, i) {
        function t(r, e) {
            (r || e) && a()
        }

        function a() {
            "Quick" !== r.loginBean.mode && r.loginForm.entName.$error.required ? c("entNameRequire") : !r.loginBean.account && r.loginForm.account.$error.required ? c("accountRequire") : r.loginForm.password.$error.required ? c("passwordRequire") : r.formError = ""
        }

        function g(e) {
            n.setUserLoginCookies("Quick" === r.loginBean.mode, r.loginBean.entName, r.loginBean.account, r.loginBean.clientId, e)
        }

        function c(e) {
            var o = r.errorMap[e];
            o || (o = r.errorMap.error500), r.formError = o
        }
        r.loginBean = new i, r.login = !1, r.formError = "", r.lang = webhelper.getLang(), r.switchLoginTxt = "旧登录界面", r.loginBtnText = "登录", r.onUserLogin = function() {
            return o.debug(e, "onUserLogin: ", r.formError), r.loginForm.$invalid ? !1 : (r.commit = !0, r.loginBtnText = "登录中...", r.loginBean.signin().then(function(r) {
                o.debug(e, "login result: ", r);
                var i = webhelper.getUrlEncodedKey("from") || "";
                if (g(r), !i) return location.assign(n.getWebsiteUrl()), !0;
                switch (i) {
                    case "admin":
                        location.assign(n.getAdminUrl());
                        break;
                    case "buy":
                        location.assign(n.getBuyUrl());
                        break;
                    case "2015":
                        location.assign(n.getPromoteUrl());
                        break;
                    case "meeting":
                        location.assign(n.getMeetingUrl())
                }
            })["catch"](function(n) {
                o.debug(e, "login error: ", n), c(n), r.commit = !1, r.loginBtnText = "登录"
            }), !1)
        }, r.errorMap = {
            errorWrongPWD: "密码错误",
            errorWrongAccount: "账号未注册",
            errorUserLocked: "用户被锁定，禁止登陆",
            error500: "登录失败! 请稍后重试",
            entNameRequire: "企业名称不能为空",
            accountRequire: "账号不能为空",
            passwordRequire: "密码不能为空",
            errorAuditFail: "企业服务已到期",
            errorUserNotActive: "账号未激活",
            errorUserDeleted: "账号已被删除",
            errorNotAuthed: "未验证的手机号或邮箱",
            errorExpirationTimeOver: "验证码错误! 请联系管理员重新发送激活信息!",
            errorNotSupported: "域用户登录信息有误"
        }, r.$watch("loginBean.entName", t), r.$watch("loginBean.account", t), r.$watch("loginBean.password", t)
    } {
        var e = "[LoginCtrl]-";
        require("security")
    }
    angular.module("login").controller("LoginCtrl", ["$scope", "$log", "constants", "LoginBean", r])
});;
define("app/prilogin/main", function(require) {
    angular.module("login", ["ngTranslate", "commons.services", "commons.models", "commons.directives"]), require("app/prilogin/LoginCtrl"), angular.bootstrap(document, ["login"])
});