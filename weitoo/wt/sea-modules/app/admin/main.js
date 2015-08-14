define("app/admin/controllers/entmgr/entinfo", function() {
    function e(e, t, r, o, i, s, c, l) {
        e.ctrlName = n, o.getEnterpriseInfo().then(function(n) {
            e.enterprise = n
        }), e.saveEnt = function() {
            e.entForm.$invalid || e.enterprise.save().then(function() {
                c.success(r("msgEntEditSuccess")), e.currentEnt.txtLogo = e.enterprise.txtLogo
            }, function() {
                c.error(r("msgServerError"))
            })
        }, e.settings = {
            pick: {
                id: "#entLogoPicker",
                label: "更换",
                multiple: !1
            },
            accept: {
                title: "Images",
                extensions: "gif,jpg,jpeg,bmp,png",
                mimeTypes: "image/*"
            },
            fileNumLimit: 0,
            fileSingleSizeLimit: 1073741824,
            server: "/upload/entlogo"
        }, e.onBeforeSend = function(r, o) {
            o.param = JSON.stringify({
                token: s.token,
                entId: e.enterprise.entId
            }), t.info(n, "onBeforeSend: ", o)
        }, e.onSuccess = function(o, s) {
            var a = s._raw;
            if (t.info(n, "upload ent logo result:", a), !i.isResponseError(a)) return void(e.currentEnt.logo = e.enterprise.logo = "res/" + _.strRight($.trim(a), "$"));
            switch (a) {
                case l.error500:
                    return c.alert(r("msgChangeLogoFail")), !1
            }
        }
    }
    var n = "EntInfoCtrl::";
    angular.module("admin").controller("EntInfoCtrl", ["$scope", "$log", "$translate", "Enterprise", "constants", "cache", "noty", "ErrorType", e])
});;
define("app/admin/controllers/entmgr/services", function() {
    function e(e, n, c, i) {
        e.ctrlName = r, e.currentServices = [], e.entdisk = new c, i.getCurrentService().then(function(r) {
            e.currentServices = r, e.entdisk = _.find(e.currentServices, {
                serviceType: "disk"
            }), e.user = _.find(e.currentServices, {
                serviceType: "user"
            }), e.search = _.find(e.currentServices, {
                serviceType: "search"
            }), e.sync = _.find(e.currentServices, {
                serviceType: "sync"
            })
        }), e.onSetting = function() {
            e.showDiskDetail = !1, e.showAccountDetail = !1
        }, e.onLooking = function() {
            e.showDiskDetail = !1, e.showAccountDetail = !1
        }
    }
    var r = "[ServicesCtr;]";
    angular.module("admin").controller("ServicesCtrl", ["$scope", "$log", "EntService", "EntServiceLoader", e])
});;
define("app/admin/controllers/filemgr/SyncDetail", function() {
    function e(e, n, c, s, o, l, r) {
        e.ctrlName = t, e.toggleCheck = c, e.$watch("$parent.showSyncDetail", function(t) {
            t && (e.commit = !1, e.page = "sync-detail", e.sync = e.$parent.checkedSyncs[0], e.updateFolder = [], e.sync.getFolderInfo().then(function(t) {
                e.selectUsers = t.syncUsers, e.selectFolder = new l({
                    fileId: t.folderId,
                    folder: !0,
                    fileType: "sharedisk",
                    fileName: t.folderName,
                    path: t.folderPath
                })
            }))
        }), e.changeStep = function(t) {
            switch (t) {
                case "step1":
                    e.page = "select-folders";
                    break;
                case "step2":
                    e.page = "select-users"
            }
        }, e.changePage = function() {
            switch (e.page) {
                case "sync-detail":
                    e.page = "sync-detail";
                    break;
                case "select-users":
                    e.page = "sync-detail";
                    break;
                case "select-folders":
                    e.page = "sync-detail"
            }
        }, e.stopSync = function() {
            s.confirm("相关成员本地同步文件夹将被删除<br/>您确定终止文件同步?", function(t) {
                return t ? void e.sync.stopSyncFolder().then(function(t) {
                    o.isResOK(t) && (s.success("终止同步成功!"), e.$parent.showSyncDetail = !1, r.getSyncFolderList().then(function(t) {
                        e.$parent.syncs = t
                    }))
                }) : !1
            })
        }, e.onSelectUsers = function(t) {
            var n = _.filter(t, function(t) {
                return !_.some(e.selectUsers, {
                    userId: t.userId
                })
            });
            e.selectUsers = e.selectUsers.concat(n)
        }, e.onSelectFolders = function(t) {
            e.updateFolder = t
        }, e.confirmSync = function() {
            return e.commit ? !1 : (e.commit = !0, e.sync.updateAttrs(e.selectUsers, e.selectFolder), void e.sync.updateFolder().then(function(t) {
                t ? (e.commit = !1, e.$parent.showSyncDetail = !1, s.success("编辑同步文件成功!")) : s.fail("编辑同步文件失败!")
            }))
        }
    }
    var t = "SyncDetailCtrl: ";
    angular.module("admin").controller("SyncDetailCtrl", ["$scope", "$log", "toggleCheck", "noty", "constants", "EntFile", "SyncLoader", e])
});;
define("app/admin/controllers/filemgr/createsyncfolder", function() {
    function e(e, n, c, r, s, o, l) {
        e.ctrlName = t, e.$watch("$parent.showCreateSyncFolder", function(t) {
            t && (e.commit = !1, e.step = "step1", e.sync = new o, e.selectUsers = [], e.selectFolder = void 0, e.$emit("uncheckAll"))
        });
        var p = ["step1", "step2", "step3"];
        e.nextStep = function() {
            var t = _.indexOf(p, e.step),
                n = p[t + 1];
            e.changeStep(n)
        }, e.changeStep = function(t) {
            return "step1" === e.step && t > e.step && !e.selectFolder ? (r.error("请先选择文件夹!"), !1) : "step2" === e.step && t > e.step && !e.selectUsers.length ? (r.error("请选择成员!"), !1) : void(e.step = t)
        }, e.previewStep = function() {
            var t = _.indexOf(p, e.step),
                n = p[t - 1];
            e.changeStep(n)
        }, e.onSelectFolder = function(t) {
            e.selectFolder = t
        }, e.onSelectUsers = function(t) {
            e.selectUsers = t
        }, e.confirm = function() {
            e.sync.updateAttrs(e.selectUsers, e.selectFolder), e.sync.updateFolder().then(function() {
                e.$parent.showCreateSyncFolder = !1, r.success("同步文件夹创建成功!"), e.$parent.syncs.push(e.sync), l.getSyncFolderList().then(function(t) {
                    e.$parent.syncs = t
                })
            })["catch"](function(t) {
                t && (e.$parent.showCreateSyncFolder = !1, r.fail("同步文件夹创建失败!"))
            })
        }
    }
    var t = "CreateSyncFolder";
    angular.module("admin").controller("CreateSyncFolderCtrl", ["$scope", "$rootScope", "$log", "noty", "constants", "SyncFolder", "SyncLoader", "EntFile", e])
});;
define("app/admin/controllers/filemgr/recyclemgr", function() {
    function e(e, n, i, r, t, l, o) {
        function s() {
            return f() ? e.entPager : e.personPager
        }

        function f() {
            return "sharedisk" === e.fileType
        }

        function u(e) {
            var c = s();
            c.searchKey = e, c.fetchPage()
        }
        e.ctrlName = c, e.checkedFiles = [], e.toggleCheck = r, e.fileType = i.fileType.shareDisk, e.entPager = new o("sharedisk"), e.personPager = new o("onlinedisk"), e.$watch("fileType", function() {
            e.checkedFiles = []
        }), e.$watch("entPager.current", function() {
            e.entPager.fetchPage()
        }), e.$watch("personPager.current", function() {
            e.personPager.fetchPage()
        }), e.onSearch = function(e) {
            u(e)
        }, e.goBack = function() {
            u()
        }, e.multiCheck = function(c) {
            e.checkedFiles = r.multiCheck(c, s().files)
        }, e.toggleCheck = function(c) {
            e.checkedFiles = r.toggleCheck(c, s().files)
        }, e.toggleCheckAll = function() {
            e.checkedFiles = r.toggleCheckAll(s().files, e.checkedFiles)
        }, e.emptAdminFiles = function() {
            t.confirm("清空文件将无法还原!<br/>你确定要清空回收站吗?", function(c) {
                return c ? void s().emptyFiles(e.fileType).then(function(e) {
                    i.isResOK(e) && (s().fetchPage(), t.success("清空回收站成功!"))
                })["catch"](function() {
                    t.error("清空回收站失败!")
                }) : !1
            })
        }, e.restoreAdminFiles = function() {
            var c = _.pluck(e.checkedFiles, "fileId");
            s().restoreFiles(c, e.fileType).then(function() {
                e.checkedFiles = [], s().fetchPage(), t.success("还原成功!")
            })["catch"](function(e) {
                t.error(l.restoreAdminFilesError(e))
            })
        }, e.deleteAdminFiles = function() {
            t.confirm("删除文件将无法还原!<br/>你确定要删除吗?", function(c) {
                if (!c) return !1;
                var n = _.pluck(e.checkedFiles, "fileId");
                s().deleteFiles(n, e.fileType).then(function(c) {
                    i.isResOK(c) && (e.checkedFiles = [], s().fetchPage(), t.success("删除成功!"))
                })["catch"](function(e) {
                    t.error(l.deleteAdminRecycleFilesError(e))
                })
            })
        }
    }
    var c = "RecycleMgrCtrl: ";
    angular.module("admin").controller("RecycleMgrCtrl", ["$scope", "$log", "constants", "toggleCheck", "noty", "ErrorType", "RecyclePager", e])
});;
define("app/admin/controllers/filemgr/syncmgr", function() {
    function n(n, e, o, t, l, s) {
        n.ctrlName = c, n.searchKey = null, n.syncs = [], n.checkedSyncs = [], n.toggleCheck = o, n.sync = new l, s.getSyncFolderList().then(function(c) {
            n.syncs = c
        }), n.createSyncFolder = function() {
            n.showCreateSyncFolder = !0
        }, n.lookDetail = function() {
            n.showSyncDetail = !0, n.selectFolder = n.checkedSyncs[0]
        }, n.$watch("showSeeDetail", function(c) {
            c && (n.checkedSync = n.checkedSyncs[0])
        }), n.deleteSyncFolders = function() {
            var c = _.pluck(n.checkedSyncs, "syncId");
            t.confirm("确认删除吗?", function(e) {
                return e ? void n.sync.deleteSyncFolders(c).then(function() {
                    n.checkedSyncs = [], s.getSyncFolderList().then(function(c) {
                        n.syncs = c
                    }), t.success("删除成功")
                }, function() {
                    t.fail("删除失败!")
                }) : !1
            })
        }, n.onSearch = function(c) {
            n.syncs = _.filter(n.syncs, function(n) {
                return n.folderName.indexOf(c) > -1
            })
        }, n.goBack = function() {
            n.searchKey = null, s.getSyncFolderList().then(function(c) {
                n.syncs = c
            })
        }
    }
    var c = "SyncMgrCtrl: ";
    angular.module("admin").controller("SyncMgrCtrl", ["$scope", "$log", "toggleCheck", "noty", "SyncFolder", "SyncLoader", n])
});;
define("app/admin/controllers/filemgr/versionmgr", function() {
    function e(e, n, i, r, s) {
        e.ctrlName = o, e.daysValue = "", e.versionsValue = "", i.getVersionConfig().then(function(o) {
            if (e.versionConfig = o, e.versionConfig) switch (e.versionConfig.option) {
                case "KeepDays":
                    e.daysValue = e.versionConfig.value;
                    break;
                case "KeepVersions":
                    e.versionsValue = e.versionConfig.value
            } else e.versionConfig.option = "KeepAll"
        }), e.$watch("versionConfig.option", function(o) {
            switch (delete e.errorinfo, o) {
                case "KeepAll":
                case "NeverKeep":
                    delete e.daysValue, delete e.versionsValue, delete e.errorinfo, delete e.versionConfig.value;
                    break;
                case "KeepDays":
                    delete e.versionsValue;
                    break;
                case "KeepVersions":
                    delete e.daysValue
            }
        }), e.$watch("daysValue", function(o) {
            o && (e.versionConfig.value = o, delete e.errorinfo)
        }), e.$watch("versionsValue", function(o) {
            o && (e.versionConfig.value = o, delete e.errorinfo)
        }), e.onSave = function() {
            return "KeepDays" !== e.versionConfig.option || e.daysValue && /^\d+$/.test(e.daysValue) ? "KeepVersions" !== e.versionConfig.option || e.versionsValue && /^\d+$/.test(e.versionsValue) ? void e.versionConfig.update().then(function() {
                s.success("保存成功!")
            }) : (e.errorinfo = "请输入要保存的版本数", !1) : (e.errorinfo = "请输入要保存的天数", !1)
        }
    }
    var o = "VersionMgrCtrl: ";
    angular.module("admin").controller("VersionMgrCtrl", ["$scope", "$log", "VersionConfigLoader", "constants", "noty", e])
});;
define("app/admin/controllers/header", function() {
    function e(e, o, i, r) {
        e.ctrlName = n, e.signOut = function() {
            try {
                window.opener = null, window.open("", "_self"), window.close()
            } catch (e) {
                i.clearLoginCookies(), location.replace(i.getLoginUrl())
            }
        }, o.$on("admin-resize", function(e, n) {
            r(n)
        })
    }
    var n = "[HeaderCtrl]";
    angular.module("admin").controller("HeaderCtrl", ["$scope", "$rootScope", "constants", "adminResizeDelegate", e])
});;
define("app/admin/controllers/left", function() {
    function e(e, t, o, i) {
        e.ctrlName = n, e.activeTab = "services", e.tabs = [{
            name: "services",
            icon: "icon-custom-current-serive",
            text: "当前服务",
            border: !0
        }, {
            name: "entinfo",
            icon: "icon-custom-entinfo",
            text: "企业信息",
            border: !1
        }, {
            name: "_usermgr",
            text: "账号管理",
            header: !0
        }, {
            name: "usermgr",
            icon: "icon-custom-user-manage",
            text: "成员管理"
        }, {
            name: "rolemgr",
            icon: "icon-custom-role-manage",
            text: "角色管理"
        }, {
            name: "_filemgr",
            text: "文件管理",
            header: !0
        }, {
            name: "syncmgr",
            icon: "icon-custom-sync-manage",
            text: "同步管理"
        }, {
            name: "versionmgr",
            icon: "icon-custom-version-manage",
            text: "版本管理"
        }, {
            name: "recyclemgr",
            icon: "icon-custom-recycles-manage",
            text: "回收站管理"
        }, {
            name: "_logmgr",
            text: "日志管理",
            header: !0
        }, {
            name: "operatelog",
            icon: "icon-custom-operation",
            text: "操作日志"
        }, {
            name: "chatlog",
            icon: "icon-custom-chat-log",
            text: "聊天日志"
        }, {
            name: "_servermgr",
            text: "服务器管理",
            header: !0
        }, {
            name: "domainmgr",
            icon: "icon-custom-doMain-setting",
            text: "域设置"
        }, {
            name: "mailsetting",
            icon: "icon-custom-mail-setting",
            text: "邮箱设置"
        }], e.$on("$locationChangeSuccess", function() {
            var t = i.path();
            if (log.info(n, "$locationChangeSuccess: hash: ", i.hash(), ", path: ", t), t) {
                e.activeTab = i.path().substr(1);
                var o = _.find(e.tabs, {
                    name: e.activeTab
                });
                o && o.text && (document.title = "燕麦企业云盘-" + o.text)
            }
        }), e.isShow = function(e) {
            var i = ["entinfo", "versionmgr", "recyclemgr", "_servermgr", "domainmgr", "mailsetting"],
                a = t.currentUser,
                c = ["versionmgr", "_servermgr", "domainmgr", "mailsetting"];
            return !seajs.isPrivate && _.contains(c, e) ? !1 : (o.info(n, "isShow: ", e), a && a.isSecAdmin() ? !_.contains(i, e) : !0)
        }, e.signOut = function() {
            window.opener = null, window.open("", "_self"), window.close()
        }
    }
    var n = "[LeftCtrl] ";
    angular.module("admin").controller("LeftCtrl", ["$scope", "$rootScope", "$log", "$location", e])
});;
define("app/admin/controllers/usermgr/usermgr", function() {
    function e(e, n, c, r, t, i, d, a, o, u, l) {
        function m() {
            e.checkedUsers = [], e.userPager.deptId = e.currentDept && e.currentDept.deptId, e.userPager.fetchPage()
        }

        function p() {
            if (!e.checkedUsers.length) return !1;
            var s = _.find(e.checkedUsers, {
                userType: d.UserType.Administrator
            });
            return !!s
        }

        function k() {
            if (!e.checkedUsers.length) return !1;
            var s = _.find(e.checkedUsers, {
                userType: d.UserType.SecondAdministrator
            });
            return !!s
        }

        function h() {
            return e.checkedUsers.length ? _.every(e.checkedUsers, {
                userType: d.UserType.SecondAdministrator
            }) : !1
        }

        function f() {
            return e.checkedUsers.length ? _.every(e.checkedUsers, function(e) {
                return !!e.locked
            }) : !1
        }

        function g() {
            var s = e.checkedUsers.length,
                c = n.currentUser && n.currentUser.isAdmin(),
                r = [];
            0 === s ? r = [] : 1 === s ? (r = p() ? e.operationMap[c ? "admin => admin" : "secadmin => admin"] : k() ? e.operationMap[c ? "admin => secadmin" : "secadmin => secadmin"] : e.operationMap[c ? "admin => user" : "secadmin => user"], r = _.without(r, f() ? "lock" : "unlock")) : (r = p() ? e.operationMap[c ? "admin => admin+users" : "secadmin => admin+users"] : h() ? e.operationMap[c ? "admin => secadmins" : "secadmin => secadmins"] : k() ? e.operationMap[c ? "admin => secadmin+users" : "secadmin => secadmin+users"] : e.operationMap[c ? "admin => users" : "secadmin => users"], r = _.without(r, f() ? "lock" : "unlock")), e.operations = r
        }
        e.ctrlName = s, e.depts = [], e.userPager = new u, e.currentDept = null, e.checkedUsers = [], e.toggleCheck = t, e.operations = [], e.operationMap = {
            "admin => admin": ["edit", "set-persondisk", "change-dept"],
            "secadmin => admin": ["admin-stop"],
            "admin => secadmin": ["edit", "user-permission", "cancel-admin", "set-persondisk", "change-dept", "lock", "unlock", "delete"],
            "secadmin => secadmin": ["secadmin-stop"],
            "admin => user": ["edit", "user-permission", "set-admin", "set-persondisk", "change-dept", "lock", "unlock", "delete"],
            "secadmin => user": ["edit", "user-permission", "set-admin", "set-persondisk", "change-dept", "lock", "unlock", "delete"],
            "admin => admin+users": ["change-dept", "set-persondisk"],
            "secadmin => admin+users": ["admin-stop"],
            "admin => secadmins": ["set-persondisk", "cancel-admin", "change-dept", "lock", "unlock", "delete"],
            "admin => secadmin+users": ["set-persondisk", "change-dept", "lock", "unlock", "delete"],
            "secadmin => secadmin+users": ["secadmin-stop"],
            "admin => users": ["set-admin", "set-persondisk", "change-dept", "lock", "unlock", "delete"],
            "secadmin => users": ["set-admin", "set-persondisk", "change-dept", "lock", "unlock", "delete"]
        }, e.$watch("checkedUsers", function() {
            g()
        }), e.$watch("userPager.current", m), e.hasop = function(s) {
            return _.any(e.operations, function(e) {
                return e === s
            })
        }, e.lockUsers = function() {
            l.users.lock({
                userIds: _.pluck(e.checkedUsers, "userId")
            }).then(function() {
                _.each(e.checkedUsers, function(e) {
                    e.locked = !0
                }), a.success(r("msgAccLockSucess")), g()
            })["catch"](function() {
                a.error(o.lockUserError(result))
            })
        }, e.unlockUsers = function() {
            l.users.unlock({
                userIds: _.pluck(e.checkedUsers, "userId")
            }).then(function() {
                _.each(e.checkedUsers, function(e) {
                    e.locked = !1
                }), a.success(r("msgAccUnlockSuccess")), g()
            })["catch"](function() {
                a.error("解锁失败!")
            })
        }, e.deleteUsers = function() {
            a.confirm(r("msgIsSureDel"), function(s) {
                s && i.deleteUsers({
                    userIds: _.pluck(e.checkedUsers, "userId")
                }).then(function(s) {
                    d.isResOK(s) ? (m(), e.checkedUsers = [], a.success(r("msgDelAccSuccess"))) : a.error("删除失败!")
                })
            })
        }, e.onSearch = function(s) {
            e.userPager.searchKey = s, m()
        }, e.goBack = function() {
            e.userPager.searchKey = null, m()
        }, e.setAdmin = function() {
            l.admins.post({
                otherUserIds: _.pluck(e.checkedUsers, "userId")
            }).then(function() {
                a.success("设置部门管理员成功!"), m()
            })["catch"](function() {
                a.fail("设置部门管理员失败!")
            })
        }, e.cancelAdmin = function() {
            l.admins.remove({
                otherUserIds: _.pluck(e.checkedUsers, "userId")
            }).then(function() {
                a.success("取消部门管理员成功!"), m()
            })["catch"](function() {
                a.fail("取消部门管理员失败!")
            })
        }, e.resendValidate = function(s, n) {
            n && (n.preventDefault(), n.stopPropagation());
            var c = !d.getCookie("add_acc_tip_ignore");
            e.activeUser = s, i.resendUserActiveMsg({
                otherUserId: s.userId
            }).then(function() {
                c ? e.modal.activeAccount = !0 : a.success("重新发送激活信息成功!")
            })["catch"](function(e) {
                switch (e) {
                    case "errorWaiting":
                        a.fail("1分钟内您不能重复发送激活信息!");
                        break;
                    case "errorAlreadyActived":
                        a.fail("该用户已经激活!");
                        break;
                    default:
                        a.fail("激活账号失败!")
                }
            })
        }, e.disableActiveAccountTip = function(e) {
            e.target.checked && d.setCookie("add_acc_tip_ignore", "1")
        }, e.refreshPage = m
    }
    var s = "UserMgrCtrl: ";
    angular.module("admin").controller("UserMgrCtrl", ["$scope", "$rootScope", "$log", "$translate", "toggleCheck", "resturl", "constants", "noty", "ErrorType", "UserPager", "AdminRest", e])
});;
define("app/admin/controllers/usermgr/createdept", function() {
    function e(e, r, a, n, o, d) {
        e.ctrlName = t, e.modalTitle = "新建部门", e.deptLabel = "顶级部门名称", e.$watch("modal.createDept", function(t) {
            t && (e.commit = !1, e.isCreateFolder = !0, e.$parent.currentDept ? (e.modalTitle = "新建部门", e.deptLabel = "部门名称", e.dept = new n({
                name: "",
                parentId: e.$parent.currentDept.deptId
            })) : (e.modalTitle = "新建顶级部门", e.deptLabel = "顶级部门名称", e.dept = new n({
                name: ""
            })))
        }), e.confirmCreateDept = function() {
            return log.debug(t, "deptForm: ", e.dept.name), d.isValidName(e.dept.name, 36) ? e.deptForm.$invalid ? (a.error("部门名称不能为空!"), !1) : (e.commit = !0, void e.dept.createDept(e.isCreateFolder).then(function() {
                e.commit = !1, a.success("部门创建成功!"), r.debug(t, "after create dept: ", e.dept), e.$root.$emit("create-dept", e.dept), e.modal.createDept = !1
            })["catch"](function(t) {
                e.commit = !1, a.fail(o.createDeptError(t))
            })) : (a.alert("部门名称错误（不能超过18个汉字，36个英文/数字）！"), !1)
        }
    }
    var t = "CreateDeptCtrl: ";
    angular.module("admin").controller("CreateDeptCtrl", ["$scope", "$log", "noty", "Dept", "ErrorType", "constants", e])
});;
define("app/admin/controllers/usermgr/editdept", function() {
    function t(t, n, d, a) {
        t.ctrlName = e, t.dept = null, t.$watch("modal.editDept", function(e) {
            e && (t.commit = !1, t.dept = new d(t.$parent.currentDept), t.dept.getDetail())
        }), t.confirm = function() {
            return a.isValidName(t.dept.name, 36) ? t.deptForm.$invalid ? !1 : (t.commit = !0, void t.dept.update().then(function() {
                noty.success("编辑部门成功!"), angular.extend(t.$parent.currentDept, t.dept), t.$parent.$broadcast("edit-dept", t.$parent.currentDept), t.modal.editDept = !1
            })["catch"](function() {
                noty.fail("编辑部门失败!"), t.modal.editDept = !1
            })) : (noty.alert("部门名称错误（不能超过18个汉字，36个英文/数字）！"), !1)
        }
    }
    var e = "EditDeptCtrl: ";
    angular.module("admin").controller("EditDeptCtrl", ["$scope", "AdminRest", "Dept", "constants", "noty", t])
});;
define("app/admin/controllers/usermgr/edituser", function() {
    function e(e, n, t, o) {
        e.ctrlName = r, e.$watch("modal.editUser", function(r) {
            r && (e.commit = !1, e.user = new o(e.$parent.checkedUsers[0]))
        }), e.mailValidate = function() {}, e.phoneValidate = function() {}, e.confirm = function() {
            return e.loginForm.$invalid ? void noty.error("登录信息未通过检查, 请修改!") : e.changePwdForm.$invalid ? (noty.error("修改密码信息未通过检查, 请修改!"), !1) : (e.commit = !0, void e.user.updateByAdmin().then(function() {
                e.modal.editUser = !1, noty.success("编辑成功!"), e.$parent.refreshPage()
            })["catch"](function(r) {
                switch (r) {
                    case "errorUserNotActive":
                        noty.fail("该用户未激活, 不能修改密码!");
                        break;
                    case "errorAccountUsed":
                        noty.fail("该账号已经被使用!");
                        break;
                    case "errorNoPermission":
                        noty.fail("无权修改该账号!");
                        break;
                    default:
                        noty.fail("编辑失败!")
                }
                e.modal.editUser = !1
            }))
        }
    }
    var r = "EditUserCtrl: ";
    angular.module("admin").controller("EditUserCtrl", ["$scope", "$log", "$translate", "User", e])
});;
define("app/admin/controllers/usermgr/setpersondisk", function() {
    function e(e, i, r, n, t, o, d, c) {
        function a() {
            i.currentEnt.getAllocatableDiskSize().then(function(s) {
                e.maxSize = s
            })
        }
        e.ctrlName = s, e.maxSize = 0, e.diskSize = 0, e.$watch("modal.setPersonDisk", function(s) {
            if (s) {
                if (e.commit = !1, e.users = e.$parent.checkedUsers, 1 === e.users.length) e.diskSize = n("byte2mb")(e.users[0].diskSize);
                else {
                    var i = _.uniq(_.pluck(e.users, "diskSize"));
                    e.diskSize = 1 === i.length ? n("byte2mb")(i[0]) : 0
                }
                e.diskEnabled = !0, a()
            }
        }), e.confirm = function() {
            return !e.diskSize || e.diskSize <= 0 ? (o.error("请输入正整数的云盘空间大小!"), !1) : (e.commit = !0, void d.users.setDiskSize({
                userIds: _.pluck(e.users, "userId"),
                diskEnabled: e.diskEnabled,
                diskSize: e.diskEnabled && e.diskSize ? 1024 * parseInt(e.diskSize) * 1024 : void 0
            }).then(function() {
                o.success("个人云盘空间设置成功!"), e.modal.setPersonDisk = !1, e.commit = !1, e.$parent.refreshPage()
            })["catch"](function(s) {
                o.error(c.setPersonDiskSizeError(s)), e.commit = !1
            }))
        }
    }
    var s = "SetPersonDiskCtrl: ";
    angular.module("admin").controller("SetPersonDiskCtrl", ["$scope", "$rootScope", "$translate", "$filter", "constants", "noty", "AdminRest", "ErrorType", e])
});;
define("app/admin/controllers/usermgr/createuser", function() {
    function e(e, t, s, a, n, c) {
        e.ctrlName = r, e.$watch("modal.createUser", function(r) {
            r && (e.commit = !1, e.createdUsers = [""], e.validUsers = [])
        }), e.addValidUser = function(r) {
            var t = e.createdUsers[r];
            t && (s.pattern.emailOrMobile.test(t) ? (-1 === _.indexOf(e.validUsers, t) && e.validUsers.push(t), e.createdUsers.splice(r, 1), 0 === e.createdUsers.length && e.createdUsers.push("")) : e.userForm.createUser.$error.pattern = !0)
        }, e.confirm = function() {
            return e.validUsers.length <= 0 ? (a.error("请输入要创建的账号!"), !1) : (e.commit = !0, void c.users.post({
                deptId: e.$parent.currentDept && e.$parent.currentDept.deptId,
                accounts: e.validUsers
            }).then(function() {
                e.modal.createUser = !1, a.success("账号创建成功!"), e.$parent.refreshPage()
            })["catch"](function(r) {
                e.commit = !1, a.error(n.addAccountError(r))
            }))
        }
    }
    var r = "CreateUserCtrl: ";
    angular.module("admin").controller("CreateUserCtrl", ["$scope", "$log", "constants", "noty", "ErrorType", "AdminRest", e])
});;
define("app/admin/controllers/usermgr/importuser", function() {
    function e(e, t, r, s, n, i) {
        function c(e) {
            s.users.getImportStatus().then(function(o) {
                r.isResOK(o) && (noty.success("账号导入完成! 请到账号管理中查看!"), e && window.clearInterval(e))
            })["catch"](function(o) {
                "errorTaskRunning" === o ? noty.success("账号正在导入中, 请稍候!") : (noty.fail(i.importUserError(o)), e && window.clearInterval(e))
            })
        }
        e.settings = {
            pick: {
                id: "#importUserPicker",
                label: "上传模版文件",
                multiple: !1
            },
            accept: {
                title: "excel",
                extensions: "xlt,xls,xlsx,csv,XLS,XLSX,XLT,CSV"
            },
            fileNumLimit: 0,
            fileSingleSizeLimit: 1073741824,
            server: "/wt/java/pub/admin/users/import"
        }, e.$watch("modal.importUser", function(o) {
            o && (e.users = [], e.showResult = !1, e.commit = !1)
        }), e.onBeforeSend = function(r, s) {
            s.UT = n.token, t.info(o, "onBeforeSend: ", s), noty.success("用户正在导入中, 请等待导入成功提示!"), e.modal.importUser = !1
        }, e.onSuccess = function(r, s) {
            if (t.debug(o, "onSuccess: ", s), e.modal.importUser = !1, "OK" === s.statusCode) {
                e.modal.importUser = !1;
                var n = window.setInterval(function() {
                    c(n)
                }, 2e3)
            } else "errorTaskRunning" === s.statusCode ? noty.fail("您的另一个账号导入任务正在执行中, 请等待该任务执行完成后再导入!") : (e.modal.importUser = !1, noty.fail(i.importUserError(s.statusCode)))
        }
    }
    var o = "ImportUserCtrl::";
    angular.module("admin").controller("ImportUserCtrl", ["$scope", "$log", "constants", "AdminRest", "cache", "ErrorType", e])
});;
define("app/admin/controllers/usermgr/userleft", function() {
    function e(e, r, n, o, c, s, p) {
        e.ctrlName = t, e.changeDestDept = void 0, e.$watch("modal.changeDept", function(t) {
            t || (e.changeDestDept = null, e.commit = !1)
        }), e.onSelectDept = function(t) {
            t ? e.currentDept && e.currentDept.deptId === t.deptId || (e.$parent.currentDept = t, e.$parent.refreshPage()) : (e.$parent.currentDept = null, e.$parent.refreshPage())
        }, e.onCreateDept = function(t) {
            t || e.currentUser.isAdmin() ? (e.$parent.currentDept = t, e.modal.createDept = !0) : $rootScope.currentUser.isSecAdmin() && o.error("您不能创建顶级部门! ")
        }, e.onEditDept = function(t) {
            e.$parent.currentDept = t, e.modal.editDept = !0
        }, e.onDeleteDept = function(t) {
            o.confirm("部门内成员将被移动到'未分组成员'中! <br/> 确认要删除部门吗? ", function(r) {
                r && t.deleteDept().then(function(r) {
                    c.isResOK(r) ? (o.success(n("msgDelSucc")), e.$emit("delete-dept", t)) : o.error(n("msgDelFail"))
                })
            })
        }, e.onSortDept = function(t) {
            e.$parent.currentDept = t, e.sortDepts = t ? _.filter(e.depts, {
                parentId: t.deptId
            }) : _.filter(e.depts, function(e) {
                return !e.parentId && -1 !== e.deptId
            }), _.each(e.sortDepts, function(e, t) {
                e.orderValue || (e.orderValue = t)
            }), e.modal.sortDept = !0
        }, e.changeOrder = function(t, r, n) {
            switch (t) {
                case "up":
                    --n.orderValue, ++e.sortDepts[r - 1].orderValue;
                    break;
                case "down":
                    ++n.orderValue, --e.sortDepts[r + 1].orderValue
            }
            e.sortDepts = _.sortBy(e.sortDepts, "orderValue")
        }, e.confirmSortDept = function() {
            e.commit = !0, p.updateDeptOrder({
                deptOrders: _.map(e.sortDepts, function(e) {
                    return {
                        deptId: e.deptId,
                        orderValue: e.orderValue
                    }
                })
            }).then(function() {
                e.commit = !1, o.success("部门排序成功!"), e.modal.sortDept = !1, e.$emit("sort-dept", {
                    select: e.currentDept,
                    children: e.sortDepts
                })
            })["catch"](function() {
                e.commit = !1, o.fail("部门排序失败!")
            })
        }, e.selectDestDept = function(t) {
            e.changeDestDept = t
        }, e.confirmChangeDept = function() {
            return e.changeDestDept ? (e.commit = !0, void s.users.move({
                toDeptId: -1 === e.changeDestDept.deptId ? null : e.changeDestDept.deptId,
                userIds: _.pluck(e.checkedUsers, "userId")
            }).then(function() {
                e.modal.changeDept = !1, o.success("更换部门成功!"), e.$parent.refreshPage()
            })["catch"](function() {
                e.modal.changeDept = !1, o.error("更换部门失败!")
            })) : (o.alert("请选择目标部门!"), !1)
        }
    }
    var t = "UserLeftCtrl::";
    angular.module("admin").controller("UserLeftCtrl", ["$scope", "$log", "$translate", "noty", "constants", "AdminRest", "resturl", e])
});;
define("app/admin/controllers/usermgr/UserPermission", function() {
    function e(e, i, r, n, o, t) {
        function m(s, i) {
            var t = r.defer();
            e.commit = !0;
            var m = _.map(e.permissionItems, function(e) {
                return {
                    targetId: e.targetId,
                    permissionType: e.permissionType,
                    folderId: e.folderId,
                    permission: e.permission.toJSON()
                }
            });
            return o.userPermission.put({
                otherUserId: e.user.userId,
                permissions: m
            }).then(function() {
                e.commit = !1, n.success(s), t.resolve("OK")
            })["catch"](function() {
                e.commit = !1, n.error(i), t.reject("error")
            }), t.promise
        }

        function d() {
            o.userPermission.get({
                userid: e.user.userId
            }).then(function(s) {
                _.each(s, function(e) {
                    e.permission && (e.permission = new t(e.permission))
                }), e.permissionItems = s
            })
        }

        function c() {
            _.each(e.addedFolders, function(s) {
                s.permission = new t(e.folderPermission.toJSON())
            })
        }
        e.ctrlName = s, e.$watch("modal.userPermission", function(s) {
            s && (e.commit = !1, e.page = "permission-list", e.user = e.$parent.checkedUsers[0], e.folderPermission = new t, e.permissions = [], e.addedFolders = [], e.selectItem = void 0, d())
        }), e.changePage = function() {
            switch (e.page) {
                case "permission-list":
                    break;
                case "select-folders":
                    e.$emit("uncheckAll"), e.page = "set-permission";
                    break;
                case "set-permission":
                    c(), e.page = "permission-list"
            }
        }, e.confirmSetPermission = function() {
            if (e.addedFolders.length) {
                var s = _.map(e.addedFolders, function(s) {
                    return {
                        targetId: e.user.userId,
                        targetName: e.user.userName,
                        folderId: s.fileId,
                        folderName: s.name,
                        folderPath: s.path,
                        permissionType: "user",
                        permission: e.folderPermission
                    }
                });
                e.permissionItems = s.concat(e.permissionItems), e.addedFolders = [], e.folderPermission = new t
            } else e.selectItem && (e.selectItem.permission = e.folderPermission, e.selectItem = null, e.folderPermission = new t);
            e.page = "permission-list"
        }, e.onSelectFolders = function(s) {
            e.addedFolders = s
        }, e.deletePermission = function(s) {
            e.folderPermission.uncheckAll(), s.permission.uncheckAll()
        }, e.selectPermissionItem = function(s) {
            e.selectItem = s, e.folderPermission.reset(s.permission), e.page = "set-permission"
        }, e.confirm = function() {
            m("设置权限成功!", "设置权限失败!").then(function() {
                e.modal.userPermission = !1
            })
        }
    }
    var s = "UserPermissionCtrl::";
    angular.module("admin").controller("UserPermissionCtrl", ["$scope", "$log", "$q", "noty", "AdminRest", "Permission", e])
});;
define("app/admin/controllers/rolemgr/rolemgr", function() {
    function e(e, o, n, t, c, l, u) {
        function a(r) {
            e.currentGroup = _.find(r, function(e) {
                return e.isDomain()
            }) || r[0]
        }

        function i() {
            e.rolePager.fetchPage().then(function(e) {
                a(e)
            }).fail(function() {
                n.error("获取角色信息失败!")
            })
        }
        e.ctrlName = r, e.customPermission = u, e.rolePager = new l, e.groups = [], e.checkedRoles = [], e.role = new c, e.currentGroup = e.role, e.createRole = function() {
            e.modal.createRole = !0
        }, e.editRole = function(r) {
            e.checkedRoles = [r], e.modal.editRole = !0
        }, e.deleteRole = function(r) {
            n.confirm("确认删除角色吗?", function(o) {
                return o ? void e.rolePager.deleteRoles([r.groupId]).then(function(e) {
                    t.isResOK(e) && i()
                }) : !1
            })
        }, e.onSearch = function(r) {
            e.rolePager.current = 1, e.rolePager.searchKey = r, i()
        }, e.goBack = function() {
            e.rolePager.current = 1, e.rolePager.searchKey = null, i()
        }, e.showGroup = function(r) {
            e.currentGroup = _.find(e.rolePager.roles, function(e) {
                return e.groupId == r
            })
        }, e.showOneGroup = function(r) {
            e.rolePager.searchKey = r.groupName, e.rolePager.current = 1, i()
        }, e.refreshPage = i, e.$watch("rolePager.current", i)
    }
    var r = "RoleMgrCtrl: ";
    angular.module("admin").controller("RoleMgrCtrl", ["$scope", "$log", "noty", "constants", "Role", "RolePager", "customPermission", e])
});;
define("app/admin/controllers/rolemgr/createrole", function() {
    function e(e, r, s, o, n, l, c, i) {
        function p() {
            _.each(e.selectFolders, function(t) {
                t.permission = new c(e.folderPermission.toJSON())
            })
        }
        e.ctrlName = t, e.$watch("modal.createRole", function(t) {
            t && (e.commit = !1, e.step = "step1", e.role = new l, e.selectFolders = [], e.folderPermission = new c, e.selectUsers = [], e.$emit("uncheckAll"))
        });
        var a = ["step1", "step2", "step3", "step4", "step5"];
        e.nextStep = function() {
            var t = _.indexOf(a, e.step),
                r = a[t + 1];
            e.changeStep(r)
        }, e.changeStep = function(t) {
            if ("step1" === e.step && t > e.step && (e.roleForm.roleName.$invalid || e.role.name.length > 30)) return o.error("请输入角色名为1-30位的字符"), !1;
            if ("step2" === e.step && t > e.step && !e.selectUsers.length) return o.error("请选择用户!"), !1;
            if ("step3" === e.step && t > e.step && !e.selectFolders.length) return o.error("请先选择文件夹!"), !1;
            if ("step4" === e.step && t > e.step) {
                if (e.folderPermission.hasNone()) return o.error("请先选择文件夹权限!"), !1;
                p()
            }
            e.step = t
        }, e.previewStep = function() {
            var t = _.indexOf(a, e.step),
                r = a[t - 1];
            e.changeStep(r)
        }, e.onSelectFolders = function(r) {
            e.selectFolders = r, s.debug(t, "onSelectFolders: ", e.selectFolders)
        }, e.onSelectDepts = function(e) {
            s.debug(t, "select depts: ", e)
        }, e.onSelectUsers = function(r) {
            e.selectUsers = r, s.debug(t, "onSelectUsers: ", e.selectUsers)
        }, e.showCustomPermission = function(t) {
            i.permission = t.permission, e.modal.setPermission = !0
        }, e.confirm = function() {
            return e.commit ? !1 : (e.commit = !0, e.role.updateAttrs(e.selectUsers, e.selectFolders), void e.role.createRole().then(function() {
                e.commit = !1, e.modal.createRole = !1, o.success("角色创建成功!"), e.$parent.refreshPage()
            }).fail(function(e) {
                switch (e) {
                    case "errorSameName":
                        o.error("角色名称重复了!");
                        break;
                    case "error500":
                        o.error("系统错误")
                }
            }))
        }
    }
    var t = "CreateRoleCtrl: ";
    angular.module("admin").controller("CreateRoleCtrl", ["$scope", "$rootScope", "$log", "noty", "constants", "Role", "Permission", "customPermission", e])
});;
define("app/admin/controllers/rolemgr/editrole", function() {
    function e(e, o, r, t, l, i) {
        function n() {
            _.each(e.addedFolders, function(s) {
                s.permission = new l(e.folderPermission.toJSON())
            }), _.remove(e.selectFolders, function(s) {
                return _.some(e.addedFolders, {
                    fileId: s.fileId
                })
            }), e.selectFolders = e.selectFolders.concat(e.addedFolders)
        }
        e.ctrlName = s, e.$watch("modal.editRole", function(s) {
            s && (e.commit = !1, e.page = "role-detail", e.role = e.$parent.checkedRoles[0], e.folderPermission = new l, e.addedFolders = [], e.title = e.role && e.role.isDomain() ? "域角色权限设置" : "编辑角色", e.role.fetchRoleDetail().then(function(s) {
                e.selectUsers = s.users, e.selectFolders = _.map(s.permissions, function(e) {
                    var s = new t({
                        fileType: "sharedisk",
                        folder: !0,
                        fileId: e.folderId,
                        path: e.folderPath,
                        fileName: o.getFolderName(e.folderPath)
                    });
                    return s.permission = new l(e.permissionDTO), s
                })
            }))
        }), e.changeStep = function(s) {
            switch (s) {
                case "step2":
                    e.page = "select-users";
                    break;
                case "step3":
                    e.page = "select-folders"
            }
        }, e.changePage = function() {
            switch (e.page) {
                case "role-detail":
                    break;
                case "select-users":
                    e.page = "role-detail";
                    break;
                case "select-folders":
                    e.$emit("uncheckAll"), e.page = "set-permission";
                    break;
                case "set-permission":
                    n(), e.page = "role-detail"
            }
        }, e.onSelectUsers = function(s) {
            var o = _.filter(s, function(s) {
                return !_.some(e.selectUsers, {
                    userId: s.userId
                })
            });
            e.selectUsers = e.selectUsers.concat(o)
        }, e.onSelectFolders = function(s) {
            e.addedFolders = s
        }, e.showCustomPermission = function(s) {
            i.permission = s.permission, e.modal.setPermission = !0
        }, e.confirm = function() {
            return e.commit ? !1 : (e.commit = !0, e.role.updateAttrs(e.selectUsers, e.selectFolders), void e.role.updateRole().then(function() {
                e.commit = !1, e.role.groupName = e.role.name, e.modal.editRole = !1, r.success("编辑角色成功!")
            }))
        }
    }
    var s = "EditRoleCtrl: ";
    angular.module("admin").controller("EditRoleCtrl", ["$scope", "constants", "noty", "EntFile", "Permission", "customPermission", e])
});;
define("app/admin/controllers/logmgr/operatelog", function() {
    function e(e, t, r, o, n, s, c) {
        e.ctrlName = a, e.pager = new n, e.timeHtml = '<div class="span5 input-append date"\r\n     style="margin-right: 35px"\r\n     datetimepicker>\r\n    <input class="input-small" type="text" ng-model="pager.startTime" readonly/>\r\n    <span class="add-on"><i class="icon-calendar"></i></span>\r\n</div>\r\n<div class="span5 input-append date" datetimepicker>\r\n    <input class="input-small" type="text" ng-model="pager.endTime" readonly/>\r\n    <span class="add-on"><i class="icon-calendar"></i></span>\r\n</div>', e.toggleSearch = function() {
            e.showSearch || e.searchMode ? (e.showSearch = !1, e.searchMode = !1, e.pager.clearQuery(), e.pager.fetchPage()) : (e.searchMode = !0, e.showSearch = !0, e.pager.logs = [])
        }, e.onSearch = function(a) {
            var t = e.pager.checkTime();
            return t ? (noty.success(t), !1) : (e.showSearch = !1, e.searchMode = !0, void(1 != e.pager.current ? e.pager.current = 1 : (e.pager.targetName = a, e.pager.fetchPage(a))))
        }, e.goBack = function() {
            e.showSearch = !1, e.searchMode = !1, e.pager.clearQuery(), e.pager.fetchPage()
        }, e.$watch("pager.current", function() {
            e.pager.fetchPage()
        }), e.onSelectUser = function(t) {
            r.debug(a, "onSelectUser: user: ", t), e.pager.operatorName = t ? t.userName : ""
        }, e.$watch("modal.exportOperateLog", function(a) {
            a && (e.exportStatus = "exporting")
        }), e.exportLog = function() {
            e.modal.exportOperateLog = !0, e.pager.exportLog().then(function() {
                e.statusTask = window.setInterval(function() {
                    s.operateLogs.getExportStatus().then(function(t) {
                        c.isResError(t) || (r.debug(a, "export status ret: ", t), e.exportStatus = "ok", e.downloadUrl = "/wt/java/sc/admin/operationlog?file=" + t, e.statusTask && window.clearInterval(e.statusTask))
                    })["catch"](function(t) {
                        r.debug(a, "Get export status: ", t), e.exportStatus = "error", e.statusTask && window.clearInterval(e.statusTask)
                    })
                })
            })["catch"](function() {
                e.exportStatus = "error", e.modal.exportOperateLog = !1
            })
        }, e.onClose = function() {
            e.statusTask && window.clearInterval(e.statusTask), e.modal.exportOperateLog = !1
        }
    }
    var a = "OperateLogCtrl: ";
    angular.module("admin").controller("OperateLogCtrl", ["$scope", "$compile", "$log", "$interval", "OperateLogPager", "AdminRest", "constants", e])
});;
define("app/admin/controllers/logmgr/ChatLog", function() {
    function e(e, a, r, c, s, n, o) {
        function h() {
            a.chatUsers = [], a.isSearchUser = !1, a.isSearchObject = !1
        }

        function i(e) {
            n.getChatUsers(a.chatPager.senderId).then(function(t) {
                a.chatUsers = e ? _.filter(t, e) : t
            })
        }
        a.ctrlName = t, a.showSearch = !1, a.searchUsers = [], a.isSearchUser = !1, a.isSearchObject = !1, a.chatPager = new n, a.chatUsers = [], a.showChatLog = function(e) {
            a.chatPager.receiverId = e.userId, a.chatPager.fetchPage()
        }, a.$watch("chatPager.current", function() {
            a.chatPager.fetchPage()
        }), a.onSelectUser = function(r) {
            e.debug(t, "onSelectUser: user: ", r), a.chatPager.clearQuery(), a.chatPager.senderId = r.userId, a.chatPager.msgList = [], i()
        }, a.searchUser = function(e) {
            o.searchUsers({
                key: e,
                max: 1e3
            }).then(function(e) {
                a.searchUsers = e
            })
        }, a.cancelSearchUser = function() {
            a.isSearchUser = !1
        }, a.onSearch = function(e) {
            a.showSearch = !0, h(), a.chatPager.searchPage(e)
        }, a.goBack = function() {
            a.showSearch = !1, h(), a.chatPager.clearQuery(), a.chatPager.fetchPage()
        }, a.searchObject = function(e) {
            i(function(t) {
                return t.contains(e)
            })
        }, a.cancelSearchObject = function() {
            a.isSearchObject = !1, i()
        }, a.showDetail = function(e) {
            a.showSearch = !1;
            var t = s.dateStrFromMisc(e.sendTime, "YYYY-MM-DD");
            a.chatPager.fetchDetailPage({
                senderId: e.senderId,
                receiverId: e.receiverId,
                startTime: s.getMillSec(t + " 00:00:00"),
                endTime: s.getMillSec(t + " 23:59:59")
            })
        }, a.exportChatLog = function() {
            a.modal.exportChatLog = !0, a.chatPager.exportLog().then(function() {
                a.statusTask = window.setInterval(function() {
                    c.chatLogs.getExportStatus().then(function(e) {
                        a.exportStatus = "ok", a.downloadUrl = "/wt/java/sc/admin/chatlog?file=" + e, a.statusTask && window.clearInterval(a.statusTask)
                    })["catch"](function() {
                        a.exportStatus = "error", a.statusTask && window.clearInterval(a.statusTask)
                    })
                })
            })["catch"](function() {
                a.exportStatus = "error", a.modal.exportChatLog = !1
            })
        }, a.onClose = function() {
            a.statusTask && window.clearInterval(a.statusTask), a.modal.exportChatLog = !1
        }
    }
    var t = "ChatLogCtrl:";
    angular.module("admin").controller("ChatLogCtrl", ["$log", "$scope", "$timeout", "AdminRest", "constants", "ChatLogPager", "UserLoader", "User", e])
});;
define("app/admin/controllers/servermgr/DomainMgr", function() {
    function n(n, a, e, i, t) {
        n.ctrlName = o, t.load().then(function(o) {
            n.domainConfig = o
        }), n.save = function() {
            n.domainForm.$invalid || n.domainConfig.update().then(function(n) {
                n && i.success("保存成功!")
            })["catch"](function(n) {
                switch (n) {
                    case "errorLdapConnection":
                        i.fail("域连接不可用!");
                        break;
                    case "errorNotSupported":
                        i.fail("域连接不可用");
                        break;
                    default:
                        i.fail("系统错误!")
                }
            })
        }, n.test = function() {
            n.domainConfig.testLdapConnection().then(function(n) {
                e.isResOK(n) && i.success("域链接可用!")
            })["catch"](function(n) {
                switch (n) {
                    case "errorLdapConnection":
                        i.fail("域连接不可用!");
                        break;
                    case "errorNotSupported":
                        i.fail("域连接不可用");
                        break;
                    default:
                        i.fail("系统错误!")
                }
            })
        }
    }
    var o = "DomainMgrCtrl: ";
    angular.module("admin").controller("DomainMgrCtrl", ["$scope", "$log", "constants", "noty", "DomainConfig", n])
});;
define("app/admin/controllers/servermgr/MailSetting", function() {
    function n(n, t, i, e, l) {
        t.ctrlName = a, l.getMailInfo().then(function(n) {
            t.mailLoader = n
        }), t.saveMail = function() {
            t.mailForm.$invalid || t.mailLoader.update().then(function(n) {
                n && i.success("保存成功!")
            })["catch"](function(n) {
                switch (n) {
                    case "error500":
                        i.fail("系统错误!")
                }
            })
        }
    }
    var a = "MailSettingCtrl: ";
    angular.module("admin").controller("MailSettingCtrl", ["$log", "$scope", "noty", "constants", "MailLoader", n])
});;
define("app/admin/controllers/index", function(require) {
    require("app/admin/controllers/header"), require("app/admin/controllers/left"), require("app/admin/controllers/entmgr/services"), require("app/admin/controllers/entmgr/entinfo"), require("app/admin/controllers/usermgr/usermgr"), require("app/admin/controllers/usermgr/createdept"), require("app/admin/controllers/usermgr/editdept"), require("app/admin/controllers/usermgr/edituser"), require("app/admin/controllers/usermgr/setpersondisk"), require("app/admin/controllers/usermgr/createuser"), require("app/admin/controllers/usermgr/importuser"), require("app/admin/controllers/usermgr/userleft"), require("app/admin/controllers/usermgr/UserPermission"), require("app/admin/controllers/rolemgr/rolemgr"), require("app/admin/controllers/rolemgr/createrole"), require("app/admin/controllers/rolemgr/editrole"), require("app/admin/controllers/filemgr/syncmgr"), require("app/admin/controllers/filemgr/createsyncfolder"), require("app/admin/controllers/filemgr/SyncDetail"), require("app/admin/controllers/filemgr/versionmgr"), require("app/admin/controllers/filemgr/recyclemgr"), require("app/admin/controllers/logmgr/operatelog"), require("app/admin/controllers/logmgr/ChatLog"), require("app/admin/controllers/servermgr/DomainMgr"), require("app/admin/controllers/servermgr/MailSetting")
});;
define("app/admin/directives/DeptEditTree", function(require) {
    function e(e, n, d, i, a) {
        function r(e, d) {
            function r() {
                i.fetchManageDepts().then(function(t) {
                    e.$parent.depts = t, a.addDeptNodes(g, e.$parent.depts)
                })
            }

            function c(t) {
                e.$parent.depts.push(t), a.addDeptNode(g, e.$parent.depts, t)
            }

            function o() {
                g = u(f), r()
            }

            function p() {
                return _.defaults(e.settings, {
                    showDeptSettingBtn: !1,
                    hideUngroup: !1
                })
            }

            function l() {
                var t = g.getSelectedNodes();
                return t.length ? _.find(e.$parent.depts, {
                    deptId: t[0].id
                }) : null
            }

            function s(t) {
                if (-1 != t.id) {
                    var n = d.find("#" + t.tId + "_a");
                    n.append('<div class="btn-group dept-setting-btn">\r\n    <span data-toggle="dropdown" class="dropdown-toggle"></span>\r\n\r\n    <ul class="dropdown-menu">\r\n        <li class="create"><a> 新建子部门</a></li>\r\n        <li class="sort"><a> 子部门排序 </a></li>\r\n        <li class="edit"><a> 编辑</a></li>\r\n        <li class="delete"><a> 删除</a></li>\r\n    </ul>\r\n</div>'), n.find("li.create").click(function() {
                        g.expandNode(t, !0), e.create && e.$apply(function() {
                            e.create({
                                select: l()
                            })
                        })
                    }), n.find("li.sort").click(function() {
                        e.sort && e.$apply(function() {
                            e.sort({
                                select: l()
                            })
                        })
                    }), n.find("li.edit").click(function() {
                        e.edit && e.$apply(function() {
                            e.edit({
                                select: l()
                            })
                        })
                    }), n.find("li.delete").click(function() {
                        e["delete"] && e.$apply(function() {
                            e["delete"]({
                                select: l()
                            })
                        })
                    })
                }
            }

            function u(t) {
                var n = $.fn.zTree.init(d, {
                    view: {
                        dblClickExpand: !1,
                        showLine: !1,
                        selectedMulti: !1,
                        addDiyDom: function(e, n) {
                            t.showDeptSettingBtn && s(n)
                        }
                    },
                    data: {
                        simpleData: {
                            enable: !0,
                            idKey: "id",
                            pIdKey: "parentId",
                            rootPId: ""
                        }
                    },
                    callback: {
                        beforeClick: function(t, n) {
                            return e.selectDept && e.$apply(function() {
                                e.selectDept({
                                    select: _.find(e.$parent.depts, {
                                        deptId: n.id
                                    })
                                })
                            }), !0
                        },
                        onClick: function(e, t, d) {
                            return $(e.target).attr("id") && $(e.target).attr("id").indexOf("_span") > 0 && n.expandNode(d), !1
                        }
                    }
                }, []);
                return n
            }
            e.directiveName = t;
            var f = p(),
                g = u(f);
            r(), n.$on("create-dept", function(e, t) {
                c(t)
            }), e.$parent.$on("sort-dept", function(e, t) {
                o(t.select, t.children)
            }), e.$parent.$on("delete-dept", function(e, t) {
                var n = g.getNodeByParam("id", t.deptId);
                n && g.hideNode(n)
            }), e.$parent.$on("edit-dept", function(e, t) {
                var n = g.getNodeByParam("id", t.deptId);
                n && (n.name = t.name, g.updateNode(n))
            }), e.$watch("$parent.currentDept", function(e) {
                e || g.cancelSelectedNode()
            })
        }
        return {
            restrict: "EA",
            replace: !1,
            transclude: !1,
            scope: {
                settings: "=",
                selectDept: "&",
                checkDepts: "&",
                create: "&",
                sort: "&",
                edit: "&",
                "delete": "&"
            },
            link: r
        }
    }
    var t = "DeptEditTree::";
    require("jquery-ztree"), angular.module("admin").directive("deptEditTree", ["$log", "$rootScope", "$compile", "DeptLoader", "DeptTreeUtils", e])
});;
define("app/admin/directives/adminResize", function() {
    angular.module("admin").directive("adminResize", ["adminResizeDelegate", function(e) {
        function i(i, n) {
            e(n)
        }
        return {
            restrict: "A",
            replace: !1,
            transclude: !1,
            link: i
        }
    }])
});;
define("app/admin/directives/validateEnt", function() {
    function i(i) {
        return {
            require: "ngModel",
            link: function(e, n, t, d) {
                e.$watch(t.ngModel, function(e) {
                    return e ? (!i.isValidName(e), void(36 && d.$setValidity("lengthover", !0))) : void d.$setValidity("required", !0)
                })
            }
        }
    }
    angular.module("admin").directive("validateEnt", ["constants", i])
});;
define("app/admin/directives/index", function(require) {
    require("app/admin/directives/DeptEditTree"), require("app/admin/directives/adminResize"), require("app/admin/directives/validateEnt")
});;
define("app/admin/filters/adminDisplayName", function() {
    angular.module("admin").filter("adminDisplayName", function() {
        return function(a) {
            return a ? a.realName ? a.realName + "(" + a.userName + ")" : a.userName : ""
        }
    })
});;
define("app/admin/filters/deptPath", function() {
    angular.module("admin").filter("deptPath", ["$translate", function(n) {
        return function(t, r) {
            function e(n, t, r) {
                if (r.unshift(n.name), n.parentId) {
                    var i = _.find(t, {
                        deptId: n.parentId
                    });
                    i && e(i, t, r)
                }
                return r
            }
            if (r) {
                if (t) {
                    var i = _.find(r, {
                        deptId: t
                    });
                    if (i) {
                        var a = e(i, r, []);
                        return _.reduce(a, function(n, t) {
                            return n + "/" + t
                        }, "")
                    }
                    return ""
                }
                return "/" + n("msgUngrpContact")
            }
            return "-"
        }
    }])
});;
define("app/admin/filters/validPermissions", function() {
    angular.module("admin").filter("validPermissions", function() {
        return function(n) {
            return _.filter(n, function(n) {
                return n.hasNone ? !n.hasNone() : !n.permission.hasNone()
            })
        }
    })
});;
define("app/admin/filters/roleFilter", function() {
    angular.module("admin").filter("roleFilter", function() {
        return function(n, i) {
            var n = n;
            return i && (n = _.filter(n, function(n) {
                return "NORMAL" === i ? !n.isDomain() : n.isDomain()
            })), n
        }
    })
});;
define("app/admin/filters/userIcon2", function() {
    angular.module("admin").filter("userIcon2", function() {
        return function(n) {
            return n.isAdmin() ? "icon-custom-ent-admin" : n.isSecAdmin() ? n.locked ? "icon-custom-dept-admin-lock" : "icon-custom-dept-admin" : n.locked ? "icon-custom-user-locked" : n.gender && "f" === n.gender ? "icon-custom-woman" : "icon-custom-man"
        }
    })
});;
define("app/admin/filters/index", function(require) {
    require("app/admin/filters/adminDisplayName"), require("app/admin/filters/deptPath"), require("app/admin/filters/validPermissions"), require("app/admin/filters/roleFilter"), require("app/admin/filters/userIcon2")
});;
define("app/admin/models/VersionConfig", function() {
    function n(n, e) {
        function i(n) {
            this.option = void 0, this.value = void 0, n && angular.extend(this, n)
        }
        return i.prototype.update = function() {
            var i = n.defer();
            return e.versionConfig.put({
                option: this.option,
                value: this.value
            }).then(function(n) {
                i.resolve(n)
            }), i.promise
        }, i
    }

    function e(n, e, i) {
        return {
            getVersionConfig: function() {
                var o = n.defer();
                return e.versionConfig.get().then(function(n) {
                    o.resolve(new i(n))
                }), o.promise
            }
        }
    }
    angular.module("admin").service("VersionConfig", ["$q", "AdminRest", n]), angular.module("admin").factory("VersionConfigLoader", ["$q", "AdminRest", "VersionConfig", e])
});;
define("app/admin/models/Role", function() {
    function e(e, r, s) {
        function t(e) {
            this.roleId = void 0, this.name = void 0, this.permissions = [], this.users = [], this.from = "NORMAL", e && angular.extend(this, e)
        }
        return t.prototype = {
            rename: function() {
                return r.renameRole({
                    roleId: this.roleId,
                    name: this.newName
                })
            },
            createRole: function() {
                return s.roles.post({
                    name: this.name,
                    permissions: this.permissions,
                    userIds: _.pluck(this.users, "userId")
                })
            },
            updateAttrs: function(e, r) {
                this.permissions = _.map(r, function(e) {
                    return {
                        folderId: e.fileId,
                        permission: e.permission
                    }
                }), this.users = e
            },
            updateRole: function() {
                return s.role.put({
                    roleId: this.roleId,
                    name: this.name,
                    permissions: this.permissions,
                    userIds: _.pluck(this.users, "userId")
                })
            },
            fetchRoleDetail: function() {
                return s.role.get({
                    roleid: this.roleId
                })
            },
            isDomain: function() {
                return "NORMAL" !== this.from
            }
        }, t
    }

    function r(e, r, s, t, n) {
        function o() {
            this.searchKey = void 0, this.roles = []
        }
        return o.prototype = new n, angular.extend(o.prototype, {
            fetchPage: function() {
                var r = this,
                    n = e.defer();
                return t.groups.get({
                    key: this.searchKey,
                    skip: (this.current - 1) * this.perPage,
                    max: this.perPage
                }).then(function(e) {
                    r.roles = e.groups ? _.map(e.groups, function(e) {
                        return e.roleId = e.groupId, e.name = e.groupName, new s(e)
                    }) : [], r.total = e.resultCount, n.resolve(r.roles)
                }), n.promise
            },
            deleteRoles: function(e) {
                return t.roles.remove({
                    roleIds: e
                })
            }
        }), o
    }
    angular.module("admin").service("Role", ["$q", "resturl", "AdminRest", e]), angular.module("admin").service("RolePager", ["$q", "$log", "Role", "AdminRest", "BasePager", r])
});;
define("app/admin/models/SyncFolder", function() {
    function e(e, n, r) {
        function s(e) {
            this.syncId = void 0, this.folderName = void 0, this.syncUsers = [], this.folderId = void 0, this.users = [], e && angular.extend(this, e)
        }
        return s.prototype = {
            getFolderInfo: function() {
                var s = this,
                    t = e.defer();
                return n.syncFolder.get({
                    fileid: this.folderId,
                    syncid: this.syncId
                }).then(function(e) {
                    s.syncUsers = _.map(e.syncUsers, function(e) {
                        return new r(e)
                    }), t.resolve(s)
                }), t.promise
            },
            updateFolder: function() {
                return n.syncFolders.post({
                    syncId: this.syncId,
                    folderId: this.folderId,
                    users: this.users
                })
            },
            updateAttrs: function(e, n) {
                this.folderId = n.fileId, this.users = _.map(e, function(e) {
                    return {
                        userId: e.userId,
                        downOnly: !1
                    }
                })
            },
            stopSyncFolder: function() {
                var r = e.defer();
                return n.syncFolder.remove(null, {
                    query: {
                        syncid: this.syncId
                    }
                }).then(function(e) {
                    r.resolve(e)
                }), r.promise
            },
            deleteSyncFolders: function(e) {
                return n.syncFolders.remove({
                    syncIds: e
                })
            }
        }, s
    }

    function n(e, n, r) {
        return {
            getSyncFolderList: function() {
                var s = e.defer();
                return r.syncFolders.get().then(function(e) {
                    var r = _.map(e.folders, function(e) {
                        return new n(e)
                    });
                    s.resolve(r)
                }), s.promise
            }
        }
    }
    angular.module("admin").service("SyncFolder", ["$q", "AdminRest", "User", e]), angular.module("admin").factory("SyncLoader", ["$q", "SyncFolder", "AdminRest", n])
});;
define("app/admin/models/RecyclePager", function() {
    function e(e, t, i, l, s) {
        function r(e) {
            this.searchKey = void 0, this.fileType = e, this.files = []
        }
        return r.prototype = new i, angular.extend(r.prototype, {
            fetchPage: function() {
                var i = this,
                    r = e.defer();
                return t.recycleFiles.post({
                    fileType: this.fileType,
                    targetName: this.searchKey,
                    skipResults: (this.current - 1) * this.perPage,
                    maxResults: this.perPage
                }).then(function(e) {
                    i.files = _.map(e.files, function(e) {
                        return "sharedisk" === i.fileType ? new l(e) : new s(e)
                    }), i.total = e.resultCount, r.resolve(i)
                }), r.promise
            },
            emptyFiles: function(e) {
                return t.recycleFiles.deleteAll({
                    type: e
                })
            },
            restoreFiles: function(e, i) {
                return t.recycleFiles.put({
                    fileIds: e,
                    fileType: i
                })
            },
            deleteFiles: function(e, i) {
                return t.recycleFiles.deleteFiles({
                    fileIds: e,
                    fileType: i
                })
            }
        }), r
    }
    angular.module("admin").service("RecyclePager", ["$q", "AdminRest", "BasePager", "EntFile", "PersonFile", e])
});;
define("app/admin/models/FileOperation", function() {
    function n() {
        function n(n) {
            n && angular.extend(this, n)
        }
        return n.prototype = {}, n
    }
    angular.module("admin").service("FileOperation", [n])
});;
define("app/admin/models/OperateLog", function() {
    function e() {
        function e(e) {
            this.entId = void 0, this.userId = void 0, this.logTime = void 0, this.module = void 0, this.operation = void 0, this.remark = void 0, this.displayName = void 0, this.targetName = void 0, this.targetPath = void 0, e && angular.extend(this, e)
        }
        return e.prototype = {}, e
    }

    function t(e, t, a, o) {
        function s() {
            this.logs = [], this.allOperations = ["logon", "Upload", "Download", "Preview", "DeleteToRecycle", "EntLink", "Create", "Edit", "Move", "Rename"], this.operations = this.allOperations, this.targetName = void 0, this.operatorName = void 0, this.startTime = void 0, this.endTime = void 0, this.timeMode = void 0
        }
        return s.prototype = new t, angular.extend(s.prototype, {
            setOperation: function(e) {
                this.operations = "all" === e ? this.allOperations : [e]
            },
            setTime: function(e) {
                switch ("userdef" !== e && (this.endTime = moment().format(i), this.timeMode = e), e) {
                    case "1day":
                        this.startTime = this.endTime;
                        break;
                    case "1week":
                        this.startTime = moment().subtract(1, "weeks").format(i);
                        break;
                    case "1month":
                        this.startTime = moment().subtract(1, "months").format(i);
                        break;
                    case "3month":
                        this.startTime = moment().subtract(3, "months").format(i);
                        break;
                    case "1year":
                        this.startTime = moment().subtract(1, "years").format(i);
                        break;
                    case "userdef":
                    default:
                        this.timeMode = void 0
                }
            },
            operationTag: function() {
                if (this.operations.length > 1) return "所有";
                switch (this.operations[0]) {
                    case "logon":
                        return "登录";
                    case "Upload":
                        return "上传";
                    case "Download":
                        return "下载";
                    case "Preview":
                        return "预览";
                    case "DeleteToRecycle":
                        return "删除";
                    case "EntLink":
                        return "分享";
                    case "Create":
                        return "新建";
                    case "Edit":
                        return "编辑";
                    case "Move":
                        return "移动";
                    case "Rename":
                        return "重命名"
                }
            },
            showTimeMode: function() {
                switch (this.timeMode) {
                    case "1day":
                        return "今天";
                    case "1week":
                        return "最近一周";
                    case "1month":
                        return "最近一月";
                    case "3month":
                        return "最近三月";
                    case "1year":
                        return "最近一年";
                    default:
                        return ""
                }
            },
            clearTime: function() {
                this.timeMode = null, this.startTime = null, this.endTime = null
            },
            getQueryParam: function() {
                return {
                    operations: this.operations,
                    operatorName: this.operatorName,
                    targetName: this.targetName,
                    skipResults: (this.current - 1) * this.perPage,
                    maxResults: this.perPage,
                    startTime: this.startTime && moment(this.startTime, i).toDate().valueOf(),
                    endTime: this.endTime && moment(this.endTime + " 23:59:59", r).toDate().valueOf()
                }
            },
            checkTime: function() {
                var e = this.getQueryParam(),
                    t = moment().endOf("day").valueOf();
                return e.startTime && e.startTime > t ? "开始时间不能超出当天!" : e.endTime && e.endTime > t ? "截止时间不能超出当天!" : e.startTime && e.endTime && e.startTime > e.endTime ? "截止时间必须大于当前时间!" : void 0
            },
            fetchPage: function() {
                var t = this,
                    i = e.defer();
                return o.operateLogs.get(this.getQueryParam()).then(function(e) {
                    t.logs = e.logDTOs ? _.map(e.logDTOs, function(e) {
                        return new a(e)
                    }) : [], t.total = e.count, i.resolve(t)
                }), i.promise
            },
            clearQuery: function() {
                this.operations = this.allOperations, this.targetName = void 0, this.operatorName = void 0, this.startTime = void 0, this.endTime = void 0
            },
            exportLog: function() {
                return o.operateLogs.exportLog(this.getQueryParam())
            }
        }), s
    }
    var i = "YYYY/MM/DD",
        r = "YYYY/MM/DD hh:mm:ss";
    angular.module("admin").service("OperateLog", [e]), angular.module("admin").service("OperateLogPager", ["$q", "BasePager", "OperateLog", "AdminRest", t])
});;
define("app/admin/models/DomainLoader", function() {
    function e(e, i) {
        function r(e) {
            this.enabled = !0, this.ldapUrl = void 0, this.dominName = void 0, this.userName = void 0, this.password = void 0, this.ldapType = void 0, this.ou = void 0, this.syncUser = void 0, this.userFilter = void 0, this.groupFilter = void 0, this.syncGroup = void 0, e && angular.extend(this, e)
        }
        return r.load = function() {
            var t = e.defer();
            return i.ldapConfig.get().then(function(e) {
                if (e.userFilter) {
                    var i = e.userFilter.indexOf("=");
                    e.userFilterKey = e.userFilter.slice(0, i), e.userFilterVal = e.userFilter.slice(i + 1)
                }
                if (e.groupFilter) {
                    var i = e.groupFilter.indexOf("=");
                    e.groupFilterKey = e.groupFilter.slice(0, i), e.groupFilterVal = e.groupFilter.slice(i + 1)
                }
                t.resolve(new r(e))
            }), t.promise
        }, r.prototype = {
            update: function() {
                return this.groupFilter = this.groupFilterKey + "=" + this.groupFilterVal, this.userFilter = this.userFilterKey + "=" + this.userFilterVal, i.ldapConfig.put(this.toJSON())
            },
            toJSON: function() {
                return {
                    enabled: this.enabled,
                    ldapUrl: this.ldapUrl,
                    dominName: this.dominName,
                    userName: this.userName,
                    password: this.password,
                    ldapType: this.ldapType,
                    ou: this.ou,
                    userFilter: this.userFilter,
                    groupFilter: this.groupFilter,
                    syncGroup: this.syncGroup
                }
            },
            testLdapConnection: function() {
                return i.ldapConfig.test({
                    enabled: this.enabled,
                    ldapUrl: this.ldapUrl,
                    dominName: this.dominName,
                    userName: this.userName,
                    password: this.password,
                    ldapType: this.ldapType,
                    syncUser: this.syncUser
                })
            }
        }, r
    }
    angular.module("admin").service("DomainConfig", ["$q", "AdminRest", e])
});;
define("app/admin/models/MailLoader", function() {
    function i(i) {
        function n(i) {
            this.mailEnabled = !0, this.sendHost = void 0, this.sendPort = void 0, this.userName = void 0, this.password = void 0, i && angular.extend(this, i)
        }
        return n.prototype = {
            update: function() {
                return i.mailConfig.put({
                    mailEnabled: this.mailEnabled,
                    sendHost: this.sendHost,
                    sendPort: this.sendPort,
                    userName: this.userName,
                    password: this.password
                })
            }
        }, n
    }

    function n(i, n, e) {
        return {
            getMailInfo: function() {
                var t = i.defer();
                return n.mailConfig.get().then(function(i) {
                    t.resolve(new e(i))
                }), t.promise
            }
        }
    }
    angular.module("admin").service("MailConfig", ["AdminRest", i]), angular.module("admin").factory("MailLoader", ["$q", "AdminRest", "MailConfig", n])
});;
define("app/admin/models/ChatLogPager", function() {
    function e(e, i, r, n, a) {
        function h() {
            this.senderId = void 0, this.receiverId = void 0, this.searchKey = void 0, this.startTime = void 0, this.endTime = void 0, this.msgList = []
        }
        return h.prototype = new r, h.getChatUsers = function(t) {
            var s = e.defer();
            return n.chatLogs.getChatUsers({
                userid: t
            }).then(function(e) {
                s.resolve(_.map(e.users, function(e) {
                    return new a(e)
                }))
            }), s.promise
        }, angular.extend(h.prototype, {
            fetchPage: function(s) {
                var r = e.defer(),
                    a = this;
                return n.chatLogs.post(s || this.getChatParam()).then(function(e) {
                    var s = _.map(e.msgList, function(e) {
                        return i.dateStrFromMisc(e.sendTime, t)
                    });
                    _.each(s, function(r, n) {
                        if (0 === n)
                            if (a.msgList.length > 0) {
                                var h = i.dateStrFromMisc(a.msgList[a.msgList.length - 1], t);
                                h !== r && (e.msgList[0].header = !0)
                            } else e.msgList[0].header = !0;
                        else r !== s[n - 1] && (e.msgList[n].header = !0)
                    }), a.msgList = e.msgList, a.total = e.count, r.resolve(a)
                }), r.promise
            },
            searchPage: function(e) {
                return this.current = 1, this.senderId = null, this.receiverId = null, this.searchKey = e, this.fetchPage()
            },
            fetchDetailPage: function(e) {
                return this.senderId = e.senderId, this.receiverId = e.receiverId, this.fetchPage(e)
            },
            exportLog: function() {
                return n.chatLogs.exportLog(_.omit(this.getChatParam(), "skipResults", "maxResults"))
            },
            getChatParam: function() {
                return {
                    senderId: this.senderId,
                    receiverId: this.receiverId,
                    startTime: this.startTime && moment(this.startTime, t).toDate().valueOf(),
                    endTime: this.endTime && moment(this.endTime + " 23:59", s).toDate().valueOf(),
                    searchKey: this.searchKey,
                    skipResults: (this.current - 1) * this.perPage,
                    maxResults: this.perPage
                }
            },
            clearQuery: function() {
                this.searchKey = void 0, this.senderId = void 0, this.receiverId = void 0, this.startTime = void 0, this.endTime = void 0, this.current = 1
            }
        }), h
    }
    var t = "YYYY/MM/DD",
        s = "YYYY/MM/DD hh:mm";
    angular.module("admin").factory("ChatLogPager", ["$q", "constants", "BasePager", "AdminRest", "User", e])
});;
define("app/admin/models/index", function(require) {
    require("app/admin/models/VersionConfig"), require("app/admin/models/Role"), require("app/admin/models/SyncFolder"), require("app/admin/models/RecyclePager"), require("app/admin/models/FileOperation"), require("app/admin/models/OperateLog"), require("app/admin/models/DomainLoader"), require("app/admin/models/MailLoader"), require("app/admin/models/ChatLogPager")
});;
define("app/admin/services/leftFilter", function() {
    function e(e) {
        return function(n) {
            var r = ["entinfo", "recyclemgr"],
                i = ["versionmgr", "_servermgr", "domainmgr", "mailsetting"];
            if (!seajs.isPrivate && _.contains(i, n)) return !1;
            var t = e.currentUser;
            return t && t.isSecAdmin() ? !_.contains(r, n) && !_.contains(i, n) : !0
        }
    }
    angular.module("admin").filter("leftFilter", ["$rootScope", e])
});;
define("app/admin/services/customPermission", function() {
    angular.module("admin").factory("customPermission", ["Permission", function(i) {
        return {
            permission: new i
        }
    }])
});;
define("app/admin/services/adminResizeDelegate", function() {
    angular.module("admin").factory("adminResizeDelegate", function() {
        return function(i) {
            function s() {
                i.find(".user-list").css({
                    height: y - 40
                }).find(".user-items,.search-users").css({
                    height: y - 40 - 35
                }), i.find(".chat-list").css({
                    width: z,
                    height: y - 50 - 60
                }), i.find(".chat-object").css({
                    height: y - 40
                }), i.find(".chat-info").css({
                    width: z - 402,
                    height: y - 40
                }), i.find(".chat-list-body").css({
                    height: y - 40 - 40 - 30
                }), i.find(".chat-search").css({
                    width: z,
                    height: y - 40
                }).find(".search-list").css({
                    height: y - 40 - 65
                })
            }

            function e() {
                i.css({
                    height: y - 40
                })
            }

            function t() {
                i.css({
                    height: 540 >= k ? 580 : k
                })
            }

            function h() {
                i.css({
                    height: k,
                    overflow: 540 >= k ? "auto" : "hidden"
                })
            }

            function n() {
                var s = b - v - 40 - 5;
                i.css({
                    width: s,
                    height: y,
                    marginRight: 540 >= k ? "0" : "20"
                })
            }

            function c() {
                i.css({
                    width: z,
                    height: y
                })
            }

            function a() {
                i.css({
                    width: z
                })
            }

            function r() {
                var s = g();
                i.find(".user-left").css({
                    width: s.left,
                    height: y - 40
                }).find(".depart-edit-ztree").height(y - 40 - 80);
                var e = y - 78 - 40 - 30;
                i.find(".user-table").css({
                    width: s.right,
                    height: y - 40
                }).children(".list-body").css({
                    height: e
                }).siblings(".empty-tips").css({
                    height: e,
                    marginTop: e / 2
                })
            }

            function g() {
                var i = z / 3;
                220 > i && (i = 220), i > 400 && (i = 400);
                var s = z - i - 9;
                return {
                    left: i,
                    right: s
                }
            }

            function d() {
                var s = g();
                i.find(".check").css({
                    width: 30
                }).siblings(".user-gender").css({
                    width: 60
                }).siblings(".user-size").css({
                    width: 120
                });
                var e = s.right - 30 - 60 - 120 - 200 - 40,
                    t = 200 > e ? 200 : e,
                    h = e > 200 ? 200 : e;
                i.find(".user-job-title").css({
                    width: h
                }).siblings(".user-main").css({
                    width: t
                }).find(".two-rows-cell").css({
                    width: t - 60
                })
            }

            function o() {
                var s = y - 100 - 50;
                i.css({
                    height: s
                }), i.siblings(".empty-tips").css({
                    height: s,
                    marginTop: s / 2
                })
            }

            function f() {
                var s = y - 40 - 40 - 30 - 45 - 12;
                i.css({
                    height: s
                }), i.siblings(".empty-tips").css({
                    height: s,
                    marginTop: s / 2
                })
            }

            function u() {
                var s = y - 100 - 10 - 10;
                i.css({
                    height: s
                }), i.find(".empty-tips").css({
                    height: s,
                    marginTop: s / 2
                })
            }

            function l() {
                var s = y - 100 - 10 - 5;
                i.css({
                    height: s
                }), i.siblings(".empty-tips").css({
                    height: s,
                    marginTop: s / 2
                })
            }
            var m = i.attr("admin-resize"),
                b = $(window).width(),
                w = $(window).height(),
                p = 80,
                v = 175,
                k = w - p,
                y = w - p - 50;
            b = b > 1024 ? b : 1024;
            var z = b - v - 40 - 20;
            switch (m) {
                case "mainbox":
                    h();
                    break;
                case "admin-left":
                    t();
                    break;
                case "admin-right":
                    n();
                    break;
                case "right-content":
                    c();
                    break;
                case "usermgr":
                    r();
                    break;
                case "role-items":
                    u();
                    break;
                case "recycle-items":
                    o();
                    break;
                case "log-items":
                    f();
                    break;
                case "sync-items":
                    l();
                    break;
                case "version-content":
                    a();
                    break;
                case "ent-form":
                    e();
                    break;
                case "user-list":
                    d();
                    break;
                case "chat-log":
                    s()
            }
        }
    })
});;
define("app/admin/services/index", function(require) {
    require("app/admin/services/leftFilter"), require("app/admin/services/customPermission"), require("app/admin/services/adminResizeDelegate")
});;
define("app/admin/main", function(require) {
    var e = "[admin: main]-",
        r = require("app/support/services/message");
    log.info(e, " start::", (new Date).toString()), angular.module("admin", ["ngRoute", "ngTranslate", "ui.bootstrap.tpls", "ui.bootstrap.pagination", "commons.services", "commons.filters", "commons.directives", "commons.models"]), require("app/admin/controllers/index"), require("app/admin/models/index"), require("app/admin/directives/index"), require("app/admin/filters/index"), require("app/admin/services/index"), angular.module("admin").config(["$translateProvider", function(e) {
        r(e), e.uses("zh_CN")
    }]), angular.module("admin").config(["$locationProvider", function(e) {
        e.html5Mode(!1), e.hashPrefix("!")
    }]), angular.module("admin").config(["$routeProvider", function(e) {
        "use strict";
        e.when("/services", {
            controller: "ServicesCtrl",
            templateUrl: "services.html"
        }).when("/entinfo", {
            controller: "EntInfoCtrl",
            templateUrl: "entinfo.html"
        }).when("/usermgr", {
            controller: "UserMgrCtrl",
            templateUrl: "usermgr.html"
        }).when("/rolemgr", {
            controller: "RoleMgrCtrl",
            templateUrl: "rolemgr.html"
        }).when("/syncmgr", {
            controller: "SyncMgrCtrl",
            templateUrl: "syncmgr.html"
        }).when("/versionmgr", {
            controller: "VersionMgrCtrl",
            templateUrl: "versionmgr.html"
        }).when("/recyclemgr", {
            controller: "RecycleMgrCtrl",
            templateUrl: "recyclemgr.html"
        }).when("/operatelog", {
            controller: "OperateLogCtrl",
            templateUrl: "operatelog.html"
        }).when("/chatlog", {
            controller: "ChatLogCtrl",
            templateUrl: "ChatLog.html"
        }).when("/domainmgr", {
            controller: "DomainMgrCtrl",
            templateUrl: "DomainMgr.html"
        }).when("/mailsetting", {
            controller: "MailSettingCtrl",
            templateUrl: "MailSetting.html"
        }).otherwise({
            redirectTo: "/services"
        })
    }]), angular.module("admin").run(["$rootScope", "constants", "cache", "LoginDataLoader", "noty", function(r, t, n, o, l) {
        seajs.data.isPrivate && $("body").addClass("private"), r._ = _, r.constants = t, r.cache = n, r.modal = {
            createUser: !1,
            editUser: !1,
            importUser: !1,
            createDept: !1,
            changeDept: !1,
            editDept: !1,
            setPersonDisk: !1,
            exportOperateLog: !1,
            exportChatLog: !1,
            createRole: !1,
            editRole: !1,
            renameRole: !1,
            activeAccount: !1,
            userPermission: !1
        }, r.navHide = {
            entinfo: !1,
            syncmgr: !1,
            versionmgr: !1,
            recyclemgr: !1
        }, o().then(function(e) {
            var r = e.currentUser;
            r.isAdmin() || r.isSecAdmin() || l.error("你不是管理员, 不能访问管理后台!", function() {
                location.assign(t.getLoginUrl(null, "from=admin"))
            })
        })["catch"](function() {
            log.debug(e, "LoginDataLoader error!noty: ", l), l.error("获取用户或者企业信息失败!请重新登录", function() {
                location.assign(t.getLoginUrl(null, "from=admin"))
            })
        })
    }]), angular.bootstrap(document, ["admin"])
});