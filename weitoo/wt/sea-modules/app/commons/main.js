define("app/commons/utils/noty-extend", function() {
    noty.success = function(t) {
            return noty({
                text: t,
                template: '<div class="noty_message"><i class="icon-custom-noty-success"></i><span class="noty_text"></span></div>',
                type: "success",
                timeout: 3e3,
                maxVisiable: 3
            })
        },
        noty.info = function(t) {
            return noty({
                text: t,
                type: "infomation",
                timeout: 3e3
            })
        },
        noty.error = function(t, s) {
            return noty({
                text: t,
                type: "alert",
                modal: !0,
                template: '<div class="noty_header">' + msgs.msgInfoTip + '<span class="qyc-close-btn">X</span></div><div class="noty_message"><i class="icon-custom-noty-error"></i><span class="noty_text"></span></div>',
                buttons: [{
                    addClass: "btn noty-btn-error",
                    text: msgs.msg141,
                    onClick: function(t) {
                        t.close(),
                            s && s()
                    }
                }]
            })
        },
        noty.warn = function(t, s) {
            return noty({
                text: t,
                type: "warning",
                modal: !0,
                template: '<div class="noty_header">' + msgs.msgInfoTip + '<span class="qyc-close-btn">X</span></div><div class="noty_message"><i class="icon-custom-noty-warn"></i><span class="noty_text"></span></div>',
                buttons: [{
                    addClass: "btn noty-btn-retry",
                    text: msgs.msg199,
                    onClick: function(t) {
                        t.close(),
                            s && s(!0)
                    }
                }, {
                    addClass: "btn noty-btn-cancel",
                    text: msgs.msg87,
                    onClick: function(t) {
                        t.close(),
                            s && s(!1)
                    }
                }]
            })
        },
        noty.confirm = function(t, s) {
            noty({
                    text: t,
                    type: "confirm",
                    modal: !0,
                    template: '<div class="noty_header">' + msgs.msgInfoTip + '<span class="qyc-close-btn">X</span></div><div class="noty_message"><i class="icon-custom-noty-confirm"></i><span class="noty_text"></span></div>',
                    buttons: [{
                        addClass: "btn noty-btn-confirm",
                        text: msgs.msg168,
                        onClick: function(t) {
                            t.close(),
                                s && s(!0)
                        }
                    }, {
                        addClass: "btn noty-btn-cancel",
                        text: msgs.msg87,
                        onClick: function(t) {
                            t.close(),
                                s && s(!1)
                        }
                    }]
                }),
                $()
        },
        noty.alert = function(t, s) {
            return noty({
                text: t,
                type: "alert",
                template: '<div class="noty_header">' + msgs.msgInfoTip + '<span class="qyc-close-btn">X</span></div><div class="noty_message"><i class="icon-custom-noty-alert"></i><span class="noty_text"></span></div>',
                modal: !0,
                callback: {
                    onClose: function() {
                        s && s()
                    }
                },
                buttons: [{
                    addClass: "btn noty-btn-alert",
                    text: msgs.msg141,
                    onClick: function(t) {
                        t.close(),
                            s && s()
                    }
                }]
            })
        }
});;
define("app/commons/main", function(require) {
    require("app/commons/utils/noty-extend"),
        seajs.devMode = -1 !== location.href.indexOf("?dev") ? !0 : !1,
        seajs.isPrivate = seajs.data.isPrivate
});;
define("app/commons/models/ent/EntServiceDTO", function(require, e, t) {
    t.exports = window.EntServiceDTO = Backbone.Model.extend({
        urlRoot: "",
        defaults: {
            type: "",
            name: "",
            allSize: "",
            usedPercent: "",
            startDate: "",
            endDate: ""
        },
        initialize: function() {
            var e = this.get("type"),
                t = this.get("buySize"),
                s = this.get("freeSize"),
                i = this.get("usedSize");
            this.set("allSize", t + s);
            this.get("allSize");
            switch (this.set("usedPercent", i / (t + s) * 100 + "%"),
                e) {
                case "ENT_DISK":
                    this.set("name", msgs.msgEntFileSize);
                    break;
                case "USER_ADD":
                    this.set("name", msgs.msgCurrentUsersNumber);
                    break;
                case "TEL":
                    this.set("name", msgs.msg858)
            }
        }
    })
});;
define("app/commons/models/ent/EntServiceListDTO", function(require, e, n) {
    require("app/commons/models/ent/EntServiceDTO"),
        n.exports = window.EntServiceListDTO = Backbone.Collection.extend({
            model: EntServiceDTO,
            url: "",
            fetch: function() {
                var e = this;
                e.reset(),
                    resturl.getCurrentService(cache.baseParam, function(n) {
                        e.add(_.map(n.list, function(e) {
                                return new EntServiceDTO(e)
                            })),
                            e.trigger("reloaded")
                    })
            }
        })
});;
define("app/commons/models/ent/EnterpriseDTO", function(require, t, e) {
    var s = require("security");
    e.exports = window.EnterpriseDTO = Backbone.Model.extend({
        urlRoot: "",
        defaults: {
            entName: void 0,
            adminName: void 0,
            adminPwd: void 0,
            contact: void 0,
            mail: void 0,
            phone: void 0,
            confirmPassword: void 0,
            contacts: void 0,
            agent: webhelper.getAgent()
        },
        customized: {},
        validation: {
            agent: {
                required: !1
            },
            confirmPassword: [{
                required: !0,
                msg: msgs.msgRepasswordEmpty
            }, {
                equalTo: "adminPwd",
                msg: msgs.msgRepasswordError
            }],
            adminPwd: [{
                required: !0,
                msg: msgs.msgPasswordEmpty
            }, {
                pattern: constants.pattern.password,
                msg: msgs.msgPasswordLength
            }],
            adminName: [{
                required: !0,
                msg: msgs.msgAccountEmpty
            }, {
                pattern: constants.pattern.userName,
                msg: msgs.msgAccountLengthError
            }],
            entName: [{
                required: !0,
                msg: msgs.msgEntEmpty
            }, {
                pattern: constants.pattern.entName,
                msg: msgs.msgEntLengthError
            }],
            phone: [{
                required: !0,
                msg: msgs.msgPhoneEmpty
            }, {
                minLength: 6,
                maxLength: 20,
                msg: msgs.msgPhoneLengthError
            }],
            mail: {
                pattern: "email",
                msg: msgs.msgEmailFormatError
            },
            contact: {
                required: !0,
                msg: msgs.msgRealnameEmpty
            }
        },
        initialize: function() {
            this.on("change:logo", this.onChangeLogo, this),
                this.on("change:txtLogo", this.onChangeTxtLogo, this)
        },
        onChangeLogo: function() {
            _.startsWith(this.get("logo"), "/os") ? this.set("logo", _.strRight(this.get("logo"), "/os"), {
                silent: !0
            }) : _.startsWith(this.get("logo"), "res/") ? this.set("logo", "/" + this.get("logo"), {
                silent: !0
            }) : _.startsWith(this.get("logo"), "/group") ? this.set("logo", "/res/" + this.get("logo"), {
                silent: !0
            }) : this.get("logo") && this.set("logo", "/res/" + this.get("logo"), {
                silent: !0
            })
        },
        onChangeTxtLogo: function() {
            var t = this.get("txtLogo");
            this.set("txtLogo", "true" == t || 1 == t ? !0 : !1)
        },
        fetch: function(t) {
            var e = this;
            resturl.getEnterpriseInfo(cache.userId, function(s) {
                constants.isResError(s) ? noty.error(msgs.msgFetchEntInfoErr, function() {
                    constants.redirectToLogin()
                }) : (e.set(s),
                    e.get("registerTime") && e.set("registerTimeStr", constants.dateStrFromMisc(e.get("registerTime"))),
                    log.info("Fetch ent info OK!"),
                    t && t())
            })
        },
        fetchSimple: function(t, e) {
            var s = this;
            resturl.getSimpleEntInfoByEntId(t, function(t) {
                s.set(t),
                    e && e(t)
            })
        },
        register: function(t) {
            var e = _.omit(this.toJSON(), "VerCode1", "agreeCheck", "confirmPassword", "logo"),
                o = s.getNonceDTO(this.get("entName"), this.get("adminPwd"));
            _.extend(e, {
                    nonce: o.nonce,
                    hashKey: o.hashKey,
                    adminPwd: o.password
                }),
                resturl.register(JSON.stringify(e), t)
        },
        updateEmpDefaultPwd: function(t, e) {
            resturl.updateEmpDefaultPwd({
                entId: cache.entId,
                userId: cache.userId,
                empPwd: Crypto.SHA256($.trim(t))
            }, e)
        },
        resetLogo: function(t) {
            var e = this;
            resturl.changeLogo({
                entId: cache.entId,
                userId: cache.userId
            }, function(s) {
                constants.isResponseOK(s) && e.set("logo", void 0),
                    t && t(s)
            })
        },
        updateEntInfo: function(t) {
            var e = this.asUpdateEntParam();
            seajs.isPrivate && model.currentUser.isAdmin() && (e.entName = this.get("entName")),
                resturl.updateEntInfo(e, t)
        },
        asUpdateEntParam: function() {
            return {
                userId: cache.userId,
                entId: this.get("entId"),
                contact: this.get("contact"),
                phone: this.get("phone"),
                fax: this.get("fax"),
                mobile: this.get("mobile"),
                address: this.get("address"),
                mail: this.get("mail"),
                postcode: this.get("postcode"),
                website: this.get("website"),
                logo: this.get("logo"),
                txtLogo: this.get("txtLogo")
            }
        },
        getAvailableDiskSize: function() {
            return this.get("diskSize") - this.get("diskUsed")
        },
        getAllocatableDiskSize: function(t) {
            var e = this;
            return resturl.getDeptAvailableMaxSiz("", function(s) {
                    var o = s.availableMaxSize;
                    e.set("availableDiskSize", o),
                        t && t(o)
                }),
                this.get("availableDiskSize") || "-"
        },
        showDiskSpaceTip: function() {
            var t = 100 * this.get("diskUsed") / this.get("diskSize");
            t > 60 && noty.alert(_.template(msgs.msgDiskSpaceTip, {
                percent: _.numberFormat(t, 2)
            }))
        }
    })
});;
define("app/commons/models/file/BaseFileDTO", function(require, t, e) {
    e.exports = Backbone.Model.extend({
        isEntDisk: function() {
            return this.get("diskType") === constants.fileType.shareDisk || this.get("fileType") === constants.fileType.shareDisk
        },
        isFolder: function() {
            return "folder" === this.get("type") || this.get("folder")
        },
        isEditType: function() {
            return !this.isFolder() && constants.isEditType(this.get("type"))
        },
        isExcelType: function() {
            return constants.isExcelType(this.get("type"))
        },
        isImgType: function() {
            return constants.isImgType(this.get("type"))
        },
        isSysFolder: function() {
            return this.get("sysFolder")
        },
        getFolderId: function() {
            return this.isRootFolder() ? null : this.id
        },
        getParentId: function() {
            return constants.isRootFolder(this.get("parentId")) ? null : this.get("parentId")
        },
        isRootFolder: function() {
            return constants.isRootFolder(this.get("fileId"))
        },
        isPreviewSupport: function() {
            return this.isFolder() || !this.get("type") ? !1 : constants.isPdfType(this.get("type")) ? !0 : constants.isFileConvertSupport(this.get("type")) ? this.get("fileStatus") === constants.FileConvertStatus.CONVERT_DONE : constants.isPreviewSupport(this.get("type"))
        },
        canDirectOpenFile: function() {
            return this.isFolder() || !this.get("type") ? !1 : constants.canDirectOpenFile(this.get("type"))
        },
        isConvertDone: function() {
            return constants.isFileConvertSupport(this.get("type")) ? this.get("fileStatus") === constants.FileConvertStatus.CONVERT_DONE : !1
        },
        canPreview: function() {
            return this.isFolder() || !this.get("type") ? !1 : constants.isPreviewSupport(this.get("type"))
        },
        isNeedConvert: function() {
            return this.isFolder() ? !1 : constants.isFileConvertSupport(this.get("type")) ? !_.contains([constants.FileConvertStatus.CONVERT_DONE, constants.FileConvertStatus.CONVERT_START], this.get("fileStatus")) : !1
        },
        isConvertSupport: function() {
            return this.isFolder() || !this.get("type") ? !1 : constants.isFileConvertSupport(this.get("type"))
        },
        isFileConverting: function() {
            return !this.isFolder() && this.get("type") && constants.isFileConvertSupport(this.get("type")) ? constants.isPdfType(this.get("type")) ? !1 : constants.isFileConverting(this.get("fileStatus")) : !1
        },
        toViewFile: function() {
            return {
                fileId: this.get("fileId"),
                linkId: cache.linkId ? cache.linkId : void 0,
                fileType: this.isEntDisk() ? constants.fileType.shareDisk : constants.fileType.onlineDisk
            }
        },
        viewFileAsImage: function(t) {
            resturl.viewFileAsImg(this.toViewFile(), function(e) {
                return constants.isResError(e.msg) ? (noty.alert(ErrorType.viewFileAsImgError(e.msg)),
                    void(t && t(e))) : void(t && t(null, e))
            })
        },
        viewFileAsPdf: function(t) {
            var e = this;
            resturl.viewFileAsPdf(this.toViewFile(), function(s) {
                constants.isResError(s) || constants.isResError(s.msg) ? (e.set("fileStatus", constants.FileConvertStatus.CONVERT_ERROR),
                    t && t(s, null)) : (constants.isResOK(s.msg) && e.set({
                        fileStatus: constants.FileConvertStatus.CONVERT_DONE,
                        ipadView: resturl.baseurl2 + s.fileUrl
                    }),
                    t && t(null, s))
            })
        },
        convertToViewFile: function(t) {
            var e = this,
                s = "pdf";
            this.isExcelType() ? s = "html" : webhelper.isIE8() && (s = "swf"),
                nodeRest.get("/" + (this.get("diskType") || this.get("fileType")) + "/" + this.id + "/view-as-" + s, function(s, i) {
                    i = i.data || i,
                        constants.isResError(i) || constants.isResError(i.msg) ? (e.set("fileStatus", constants.FileConvertStatus.CONVERT_ERROR),
                            t && t(i, null)) : (constants.isResOK(i.msg) && (e.set("pdfUrl", i.fileUrl),
                                e.set("fileStatus", constants.FileConvertStatus.CONVERT_DONE)),
                            t && t(null, i))
                })
        },
        viewAsTxt: function(t) {
            resturl.viewAsTxt(this.toViewFile(), function(e) {
                constants.isResError(e) || !constants.isResOK(e.msg) ? t && t(e.msg || e, null) : t && t(null, e.text)
            })
        },
        viewAsHtml: function(t) {
            var e = _.sprintf("/%s/%s/view-as-%s", this.get("diskType"), this.get("fileId"), "html");
            cache.linkId && (e += "?linkId=" + cache.linkId),
                nodeRest.get(e, t)
        },
        hasPermission: function() {
            return !1
        },
        getPreviewUrl: function() {
            return constants.getItemPreviewUrl(this)
        },
        getOpenFolderUrl: function() {
            return constants.getOpenFolderUrl(this.isEntDisk(), this.isFolder(), this.get("fileId"))
        },
        isLock: function() {
            return this.isEntDisk() && !!this.get("lockByUserId")
        },
        getSpecialFolder: function() {
            var t = constants.dealEntSpecialFolder(this.isEntDisk() ? this.get("name") : this.get("name"));
            return t
        },
        getSpecialPath: function() {
            var t = this.isEntDisk() ? constants.dealEntSpecialPath(this.get("path")) : constants.dealPersonSpecialPath(this.get("path"));
            return t
        },
        canUpload: function() {
            return this.isFolder ? this.isRootFolder() ? !1 : model.currentUser.isAdmin() ? !0 : this.isEntDisk() && !this.hasPermission("upload") ? !1 : !0 : !1
        },
        canCreate: function() {
            return this.isFolder ? this.isEntDisk() ? this.canCreateFolder() || this.canCreateFile() : !0 : !1
        },
        canCreateFolder: function() {
            return this.isEntDisk() ? model.currentUser.isAdmin() ? !0 : this.hasPermission("createFolder") : !0
        },
        canCreateFile: function() {
            return this.isRootFolder() ? !1 : this.isEntDisk() ? model.currentUser.isAdmin() ? !0 : this.hasPermission("upload") || this.hasPermission("write") : !0
        },
        updateFileLabel: function(t) {
            var e = this.pick("fileType", "fileId", "version", "labels");
            resturl.updateFileLabel(e, t)
        },
        updateFileComment: function(t, e) {
            var s = this.pick("fileType", "fileId", "version");
            s.commentId = t.commentId,
                s.commentBody = t.commentBody,
                s.userName = t.userName,
                resturl.updateFileComment(s, e)
        },
        getFileComments: function(t) {
            var e = this.pick("fileId", "fileType");
            resturl.getFileComments(e, t)
        },
        deleteFileComment: function(t, e) {
            var s = this.pick("fileType", "fileId", "version");
            s.commentId = t.commentId,
                s.commentBody = t.commentBody,
                s.userName = t.userName,
                resturl.deleteFileComment(s, e)
        },
        getViewType: function() {
            return constants.getViewType(this.get("type"))
        },
        getPdfUrl: function() {
            return "/wt/node/" + this.get("diskType") + "/" + this.id + "/as-pdf-stream"
        },
        getPdfName: function() {
            return constants.getFilePrefix(this.get("name")) + ".pdf"
        }
    })
});;
define("app/commons/models/file/BaseFileList", function(require, e, t) {
    t.exports = Backbone.Collection.extend({
        order: {
            orderBy: "name",
            descending: !1
        },
        isEntDisk: function() {
            return !0
        },
        reloadFile: function(e, t) {
            var r = this.get(e);
            r && r.reload && r.reload(t)
        },
        getCheckedFiles: function() {
            return this.where({
                checked: !0
            })
        },
        getOnlyCheckedFile: function() {
            var e = this.getCheckedFiles();
            return e[0]
        },
        uncheckAll: function() {
            this.each(function(e) {
                e.get("checked") && e.set("checked", !1)
            })
        },
        checkFiles: function(e) {
            _.each(e, function(e) {
                var t = this.get(e);
                t && t.set("checked", !0)
            }, this)
        },
        children: function(e) {
            return this.where({
                parentId: e
            })
        },
        removeOldChildren: function(e) {
            var t = this.where({
                parentId: e
            });
            t.length && this.remove(t)
        },
        getParentIds: function(e) {
            for (var t = [], r = this.get(e); r && r.get("parentId");) {
                t.unshift(e);
                var n = this.get(r.get("parentId"));
                if (!n)
                    break;
                t.unshift(n.id),
                    r = n
            }
            return t
        },
        getFolderNavNames: function(e) {
            return _.map(this.getFolderNav(e), function(e) {
                return e.get("name")
            })
        },
        getDefaultUploadFolderId: function() {
            if (this.isEntDisk()) {
                var e = this.findWhere({
                    realname: "Share",
                    parentId: "entRoot",
                    sysFolder: !0
                });
                return e && e.id
            }
            var e = this.findWhere({
                realname: "My documents",
                parentId: "personRoot",
                sysFolder: !0
            });
            return e && e.id
        },
        getFolderNav: function(e) {
            var t, r = [],
                n = this.getRootFolder();
            if (constants.isRootFolder(e))
                return r.unshift(n),
                    r;
            for (t = this.get(e),
                r.unshift(t);;) {
                if (t = this.get(t.get("parentId")), !t)
                    break;
                r.unshift(t)
            }
            return r
        },
        getFoldersSon: function() {
            var e, t = this;
            return this.some(function(r) {
                    var n = !0;
                    return t.each(function(e) {
                            e.get("parentId") === r.id && (n = !1)
                        }),
                        n && (e = r),
                        n
                }),
                e
        },
        getRealFolderId: function(e) {
            return constants.isRootFolder(e) ? null : e
        },
        getRootFolder: function() {
            return this.find(function(e) {
                return e.isRootFolder()
            })
        },
        getFolderById: function(e) {
            return !e || constants.isRootFolder(e) ? this.getRootFolder() : this.get(e)
        },
        getGrpFileParam: function(e) {
            var t = _.groupBy(e, function(e) {
                    return e.isFolder() ? "folder" : "file"
                }),
                r = _.map(t.file, function(e) {
                    return {
                        fileId: e.id,
                        version: e.isEntDisk() ? e.get("version") : void 0
                    }
                }),
                n = _.map(t.folder, function(e) {
                    return {
                        folderId: e.id,
                        version: e.isEntDisk() ? e.get("version") : void 0
                    }
                });
            return {
                fileList: r,
                folderList: n
            }
        },
        getPersonGrpFileParam: function(e) {
            var t = _.groupBy(e, function(e) {
                    return e.isFolder() ? "folder" : "file"
                }),
                r = _.map(t.file, function(e) {
                    return e.id
                }),
                n = _.map(t.folder, function(e) {
                    return e.id
                });
            return {
                fileList: r,
                folderList: n
            }
        },
        toggleSelectFile: function(e, t) {
            var r = this.length > 1 && this.every(function(e) {
                return e.get("checked")
            });
            this.each(function(t) {
                    t.id !== e.id && t.get("checked") && t.set("checked", !1),
                        t.get("edit") && t.set("edit", !1)
                }, this),
                e.set("checked", t || r || !e.get("checked"))
        },
        searchFile: function(e, t) {
            var r = this,
                n = _.pick(e, "fileType", "searchKey", "docType", "labelId", "operatorId", "operatorName", "startTime", "endTime");
            this.trigger(EventType.startLoad),
                resturl.searchFile(n, function(e) {
                    return constants.isResponseError(e) ? void noty.error(msgs.msgServerError) : (r.reset(e.files),
                        t && t(e),
                        void r.trigger(EventType.stopLoad))
                })
        }
    })
});;
define("app/commons/models/file/BreadModels", function(require, e) {
    var o = Backbone.Model.extend({
            defaults: {
                name: void 0,
                route: void 0
            }
        }),
        d = Backbone.Collection.extend({
            model: o
        });
    e.FileBreadDTO = o,
        e.FileBreadList = d
});;
define("app/commons/models/file/CommentDTO", function(require, e, o) {
    o.exports = Backbone.Model.extend({
        idAttribute: "commentId",
        defaults: {
            commentId: void 0,
            commentBody: void 0,
            createrId: void 0,
            createrName: void 0,
            createTime: void 0
        }
    })
});;
define("app/commons/models/file/CommentList", function(require, e, o) {
    var m = require("app/commons/models/file/CommentDTO");
    o.exports = Backbone.Collection.extend({
        model: m
    })
});;
define("app/commons/models/user/UserDTO", function(require, e, t) {
    var s = require("security");
    t.exports = window.UserDTO = Backbone.Model.extend({
        urlRoot: "",
        idAttribute: "userId",
        attributes: {
            dept: void 0,
            department: void 0
        },
        defaults: {
            userId: void 0,
            entId: void 0,
            deptId: void 0,
            userName: void 0,
            realName: void 0,
            nameAccount: void 0,
            userType: void 0,
            empNum: void 0,
            jobTitle: void 0,
            phone: void 0,
            mobile: void 0,
            gender: void 0,
            age: void 0,
            birthday: void 0,
            icon: "",
            signature: void 0,
            mail: void 0,
            userStatus: void 0,
            locked: !1,
            usualContact: !1,
            blocked: !1,
            onlineStatus: "",
            agent: void 0,
            mailAuthed: void 0,
            mobileAuthed: void 0
        },
        getLoginUserProfile: function(e) {
            this.getCurrentUser(!0, e)
        },
        getCurrentUser: function(e, t) {
            var s = this;
            resturl.getUserInfo({}, function(n) {
                return constants.isResError(n) && e ? void noty.error(msgs.msgFetchUserInfoErr, function() {
                    constants.redirectToLogin()
                }) : (s.set(n),
                    "online" !== model.currentUser.get("onlineStatus") && (model.currentUser.changeUserStatus("online"),
                        model.currentUser.set("onlineStatus", "online")),
                    s.set("prevOnlineStatus", model.currentUser.get("onlineStatus")),
                    s.initialize(),
                    cache.username = model.currentUser.get("userName"),
                    cache.userId = model.currentUser.id,
                    cache.entId = model.currentUser.get("entId"),
                    cache.baseParam = {
                        userId: cache.userId,
                        entId: cache.entId
                    },
                    void(t && t()))
            })
        },
        isAdmin: function() {
            return this.get("userType") === constants.UserType.Administrator
        },
        isSecAdmin: function() {
            return this.get("userType") === constants.UserType.SecondAdministrator
        },
        isSelf: function() {
            return this.get("userId") == cache.userId
        },
        isEmailRegUser: function() {
            return constants.pattern.email.test(this.get("userName"))
        },
        isAdminOrSecAdmin: function() {
            return this.isAdmin() || this.isSecAdmin()
        },
        fetch: function() {
            var e = this;
            resturl.getUserInfo({}, function(t) {
                e.set(t)
            })
        },
        fetchPermission: function(e) {
            resturl.getUserPermissions({
                entId: cache.entId,
                userId: cache.userId,
                otherUserId: this.get("userId")
            }, function(t) {
                e && e(t)
            })
        },
        initialize: function() {
            this.get("gender") === msgs.msg94 && this.set("gender", "f"),
                "f" !== this.get("gender") && this.get("gender") && this.set("gender", "m"),
                this.set("icon", constants.getAvatarIcon(this.get("icon"), this.get("gender"))),
                this.setNameAccount(),
                this.get("deptId") ? (!this.get("dept") && collection.departmentList && this.set("dept", collection.departmentList.get(this.get("deptId"))),
                    this.get("dept") && this.get("dept") && this.set("deptName", this.get("dept").get("name"))) : (this.set("deptId", constants.departIdNull),
                    this.set("deptName", msgs.msgUngrpContact)),
                this.get("joinTime") && this.set("joinTimeStr", constants.dateStrFromMisc(this.get("joinTime"), "YYYY-MM-0d")), !this.get("locked") && this.set("locked", !1)
        },
        setNameAccount: function() {
            this.set("nameAccount", this.get("realName") && this.get("realName") != this.get("userName") ? this.get("realName") + "(" + this.get("userName") + ")" : this.get("userName"))
        },
        setUsualContact: function(e, t) {
            resturl.addUsualContact({
                entId: cache.entId,
                userId: this.get("userId"),
                contactUserId: e
            }, t)
        },
        getDeptById: function(e) {
            resturl.getDeptById({
                deptId: this.get("deptId"),
                entId: cache.entId,
                userId: cache.userId
            }, e)
        },
        deleteUsualContact: function(e, t) {
            resturl.deleteUsualContact({
                entId: cache.entId,
                userId: cache.userId,
                contactUserId: e
            }, t)
        },
        isOffline: function() {
            return _.contains(["offline", "leave"], this.get("onlineStatus"))
        },
        logout: function(e) {
            resturl.logoff(cache.baseParam, e)
        },
        updateUserInfo: function(e) {
            var t = this.asUpdateUserParam();
            resturl.updateUserInfo(t, function(s) {
                constants.isResponseOK(s) && (model.currentUser.set(t),
                        model.currentUser.set("prevOnlineStatus", model.currentUser.get("onlineStatus")),
                        model.currentUser.setNameAccount()),
                    e && e(s)
            })
        },
        asUpdateUserParam: function() {
            var e = this.get("icon");
            e = "m" == this.get("gender") ? e.indexOf(constants.defaultWomenIcon) > -1 ? constants.defaultIcon : e : e.indexOf(constants.defaultIcon) > -1 ? constants.defaultWomenIcon : e;
            var t = {
                entId: cache.entId,
                userId: cache.userId,
                signature: this.get("signature"),
                icon: e,
                realName: this.get("realName"),
                gender: this.get("gender"),
                birthday: this.get("birthday"),
                age: this.get("age"),
                hobby: this.get("hobby"),
                jobTitle: this.get("jobTitle"),
                city: this.get("city"),
                major: this.get("major"),
                mail: this.get("mail"),
                phone: this.get("phone"),
                mobile: this.get("mobile")
            };
            return t
        },
        changeUserStatus: function(e) {
            var t = this;
            resturl.changeOnlineStatus({
                userId: cache.userId,
                entId: cache.entId,
                status: e,
                agent: webhelper.getAgent()
            }, function() {
                t.set({
                        onlineStatus: e,
                        prevOnlineStatus: e
                    }),
                    collection.userList && collection.userList.trigger(EventType.changeDepartmentUserOnline, t)
            })
        },
        getDisplayName: function() {
            return this.get("realName") || this.get("userName")
        },
        getAvatar: function() {
            return this.get("icon") || constants.defaultIcon
        },
        editUser: function(e) {
            var t = this.pick("deptId", "userName", "realName", "empNum", "jobTitle", "mail", "gender");
            _.extend(t, {
                    resetUserId: this.get("userId"),
                    entId: cache.entId,
                    userId: cache.userId,
                    deptId: t.deptId === constants.departIdNull ? null : t.deptId
                }),
                resturl.resetUserInfo(t, function(t) {
                    e && e(t)
                })
        },
        resetPassword: function(e, t) {
            var n = s.getNonceDTO(this.id, e);
            resturl.resetPassword(_.extend({
                entId: cache.entId,
                userId: cache.userId,
                resetUserId: this.id,
                agent: "web"
            }, n), t)
        },
        updateUserPermissions: function(e) {
            var t = constants.asBaseParam();
            t.otherUserId = this.get("userId"),
                t.permissions = this.get("permissions"),
                resturl.updateUserPermissions(t, {
                    timeout: 25e3
                }, e)
        },
        canChangePwd: function() {
            return !seajs.isPrivate || "LDAP" !== this.get("userFrom")
        },
        updateSingleUserFolderPermission: function(e, t) {
            var s = constants.asBaseParam();
            s.folderId = e,
                s.otherUserId = this.get("userId"),
                s.permission = this.get("permission"),
                resturl.updateSingleUserFolderPermission(s, t)
        },
        getPersonalDiskUsedSizeByUserId: function(e) {
            var t = this;
            resturl.getPersonalDiskUsedSizeByUserId({
                entId: cache.entId,
                userId: this.id
            }, function(s) {
                constants.isResponseError(s) || t.set("diskUsed", s),
                    e && e(s)
            })
        },
        checkUserPwd: function(e, t) {
            this.set(s.getNonceDTO(this.get("userId"), e));
            var n = _.pick(this.toJSON(), "hashKey", "nonce", "password", "userId");
            n.agent = "web",
                resturl.checkUserPwd(n, t)
        },
        getPersonDiskPercent: function() {
            var e = 100 * this.get("diskUsed") / this.get("diskSize");
            return 2 > e && (e = 2),
                e + "%"
        }
    })
});;
define("app/commons/models/permission/FolderPermissionDTO", function(require, s, e) {
    e.exports = Backbone.Model.extend({
        idAttribute: "targetId",
        defaults: {
            permissionType: void 0,
            targetId: void 0,
            targetName: void 0,
            targetPath: void 0,
            folderId: void 0,
            folderName: void 0,
            folderPath: void 0,
            permission: void 0,
            syncType: void 0
        },
        isUserPermission: function() {
            return "user" == this.get("permissionType")
        },
        convertPermissionType: function() {
            var s = "";
            switch (this.get("permissionType")) {
                case constants.permissionType.user:
                    s = msgs.msgUser;
                    break;
                case constants.permissionType.department:
                    s = msgs.msg843;
                    break;
                case constants.permissionType.group:
                    s = msgs.msg399;
                    break;
                case constants.permissionType.admin:
                    s = msgs.msgAdmin
            }
            return s
        },
        getPermissionStr: function() {
            var s = _.keys(_.pick(this.get("permission"), function(s) {
                return !!s
            }));
            switch (s = _.without(s, "statusCode"),
                s.length) {
                case 0:
                    return msgs.msg427;
                case 1:
                    switch (s[0]) {
                        case "read":
                            return msgs.msg421;
                        case "download":
                            return msgs.msg423;
                        case "upload":
                            return msgs.msg422;
                        default:
                            return msgs.msg427
                    }
                case 2:
                    return _.contains(s, "upload") ? msgs.msg424 : _.contains(s, "download") ? msgs.msg425 : msgs.msg427;
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    return msgs.msg427;
                case 8:
                    return msgs.msg426
            }
        }
    })
});;
define("app/commons/models/permission/FolderPermissionList", function(require, e, o) {
    var s = require("app/commons/models/permission/FolderPermissionDTO");
    o.exports = Backbone.Collection.extend({
        model: s,
        urlRoot: "",
        updateFolderPermissions: function(e, o) {
            resturl.updateFolderPermissions({
                folderId: e,
                permissions: this.map(function(e) {
                    return _.pick(e.toJSON(), "permissionType", "targetId", "permission")
                }),
                entId: cache.entId,
                userId: cache.userId
            }, function(e) {
                o && o(e)
            })
        }
    })
});;
define("app/commons/models/file/ShareLinkDTO", function(require, e, t) {
    t.exports = Backbone.DeepModel.extend({
        urlRoot: "",
        idAttribute: "linkId",
        defaults: {
            linkId: void 0,
            checkExpireDate: !1,
            checkDownloadAmt: !1,
            checkPassword: !1,
            linkCode: void 0,
            password: void 0,
            downloadAmt: void 0,
            expireDate: void 0,
            type: "Download",
            https: void 0,
            fileType: void 0
        },
        initialize: function() {
            var e = this.attributes;
            e.createTime && (e.createTime = constants.dateStrFromMisc(e.createTime)),
                e.file && (e.name = e.file.name,
                    e.fileType = e.file.fileType),
                this.get("maxDownload") && (this.set("checkDownloadAmt", !0),
                    this.set("downloadAmt", this.get("maxDownload"))),
                this.get("expirationTime") && (this.set("checkExpireDate", !0),
                    this.set("expireDate", constants.dateStrFromMisc(parseInt(this.get("expirationTime")), "YYYY-MM-DD"))),
                this.set("checkPassword", !!this.get("password"))
        },
        fetch: function(e) {
            var t = this;
            resturl.getLinkById({
                linkId: this.id,
                fileType: this.get("file").fileType
            }, function(i) {
                t.set(i).initialize(),
                    t.set("linkHref", constants.getShareUrl(t.toJSON(), t.get("file").fileType)),
                    e && e(t)
            })
        },
        getLinkByCode: function(e, t) {
            var i = this;
            resturl.getLinkByCode(e, function(e) {
                !e || _.isEmpty(e) ? noty.alert(msgs.msgLinkNoExist) : constants.isResError(e) ? noty.error(ErrorType.getLinkByCodeError(e)) : (cache.token = e.token,
                    cache.entId = e.entDTO.entId, !constants.getCookie("ut") && constants.setCookie("ut", cache.token),
                    cache.userId = "",
                    cache.baseParam = {
                        userId: cache.userId,
                        entId: cache.entId
                    },
                    i.set(e.linkDTO),
                    i.set("createTime", constants.dateStrFromMisc(i.get("createTime"))),
                    i.set(e.entDTO),
                    t && t(e.entDTO, e.fileDTO))
            })
        },
        isUploadLink: function() {
            return "Upload" === this.get("type")
        },
        isPreviewLink: function() {
            return "Preview" === this.get("type")
        },
        createShareLink: function(e) {
            resturl.createLink({
                expirationTime: this.get("expireDate") && moment(this.get("expireDate") + " 23:59:59", "YYYY-MM-DD HH:mm:ss").toDate().getTime() + "",
                password: this.get("password"),
                type: this.get("type"),
                fileId: this.get("file").fileId
            }, e)
        },
        createLink: function(e) {
            var t = this,
                i = this.pick("linkId", "type", "maxDownload", "password", "expirationTime", "https", "fileId");
            return i.fileType = this.get("file").fileType,
                resturl.createLink(i, function(i) {
                    constants.isResError(i) ? e(ErrorType.createLinkError(i)) : (t.set({
                            linkId: i.linkId,
                            linkCode: i.linkCode
                        }),
                        t.set("linkHref", constants.getShareUrl(t.toJSON(), t.get("file").fileType)),
                        e(null, this))
                })
        },
        updateLink: function(e) {
            var t = this.pick("linkId", "type", "maxDownload", "password", "expirationTime", "https", "fileId");
            return t.fileType = this.get("file").fileType,
                resturl.updateLink(t, function(t) {
                    constants.isResError(t) ? e(ErrorType.createLinkError(t)) : e(null, this)
                })
        },
        cancelLink: function(e) {
            resturl.deleteLink({
                entId: cache.entId,
                userId: cache.userId,
                linkId: this.get("linkId"),
                fileType: this.get("file").fileType
            }, e)
        },
        isFolder: function() {
            return "folder" === this.get("file").type
        },
        isEntDisk: function() {
            return this.get("fileType") == constants.fileType.shareDisk
        },
        canUpload: function() {
            return this.isFolder() ? this.isEntDisk() ? this.get("file").permissionDTO && this.get("file").permissionDTO.upload : !0 : !1
        },
        canDownload: function() {
            return this.isEntDisk() ? this.get("file").permissionDTO && this.get("file").permissionDTO.download : !0
        },
        fetchFile: function(e) {
            var t = this,
                i = new EntFileDTO;
            i.fetch(constants.fileType.shareDisk, this.isFolder(), this.get("fileId"), function() {
                t.set("file", i),
                    e && e()
            })
        }
    })
});;
define("app/commons/models/file/EntFileDTO", function(require, e, t) {
    var r = require("app/commons/models/user/UserDTO"),
        s = require("app/commons/models/file/BaseFileDTO"),
        i = require("app/commons/models/permission/FolderPermissionList"),
        n = require("app/commons/models/file/ShareLinkDTO");
    t.exports = window.EntFileDTO = s.extend({
        url: "/entfile",
        idAttribute: "fileId",
        defaults: {
            searchMode: !1,
            permissionDTO: void 0,
            checked: !1,
            loaded: !1,
            edit: !1,
            diskType: constants.fileType.shareDisk,
            fileType: constants.fileType.shareDisk,
            collectionType: "entDisk",
            remind: !1
        },
        constructor: function() {
            var e = arguments[0];
            e && (arguments[0] = this.parse(e)),
                Backbone.Model.apply(this, arguments)
        },
        parse: function(e) {
            if (e.fileType) {
                var t = e.fileName || e.name;
                return {
                    enterpriseId: e.entId,
                    userId: e.userId,
                    diskType: e.fileType,
                    parentId: e.parentId || "entRoot",
                    fileId: e.fileId,
                    name: t,
                    type: e.folder ? "folder" : constants.getFileSuffix(t),
                    size: e.fileSize,
                    guid: e.fileGuid,
                    version: e.version,
                    createTime: e.createTime && constants.dateStrFromMisc(parseInt(e.createTime)),
                    updateTime: e.updateTime && constants.dateStrFromMisc(parseInt(e.updateTime)),
                    thumb: e.thumb,
                    shareLinkId: e.linkDTO && e.linkDTO.linkId,
                    lockByUserId: e.lockByDTO && e.lockByDTO.lockByUserId,
                    lockByUser: e.lockByDTO && e.lockByDTO.lockByUser,
                    remark: e.remark,
                    favorite: e.favorite,
                    fileStatus: e.convStatus,
                    remind: e.remind,
                    convertSupport: constants.isFileConvertSupport(constants.getFileSuffix(t)),
                    permissionDTO: e.permissionDTO,
                    path: e.path,
                    isFolder: e.folder,
                    folder: e.folder,
                    labels: e.labels,
                    linkDTO: e.linkDTO,
                    sysFolder: e.sysFolder,
                    updateUserName: e.upadteUserName,
                    version: e.version
                }
            }
            return !e.fileId || "folder" === e.type && e.folder ? this._parseFromFolder(e) : this._parseFromFile(e)
        },
        initFromEntFolder: function(e) {
            return this.set(this._parseFromFolder(e))
        },
        _parseFromFolder: function(e) {
            return e.folderPath && (0 === e.folderPath.indexOf("/Share") && (e.folderPath = e.folderPath.replace("Share", constants.entSpecialFolderNames.Share)),
                    0 === e.folderPath.indexOf("/share") && (e.folderPath = e.folderPath.replace("share", constants.entSpecialFolderNames.share))),
                e.path && 0 === e.path.indexOf("/Share") && (e.path = e.path.replace("Share", constants.entSpecialFolderNames.Share)), {
                    fileId: e.folderId,
                    realname: e.name,
                    name: !e.parentId && constants.isSpecialEntFolder(e.name) ? constants.entSpecialFolderNames[e.name] : e.name,
                    parentId: e.parentId ? e.parentId : "entRoot",
                    diskType: constants.fileType.shareDisk,
                    thumb: e.thumb,
                    remark: e.remark,
                    version: e.version,
                    type: "folder",
                    shareLinkId: e.shareLinkId,
                    remind: e.remind,
                    convertSupport: !1,
                    sysFolder: e.sysFolder,
                    folderPath: e.folderPath,
                    permissionDTO: e.permissionDTO,
                    deleted: e.deleted,
                    path: e.path,
                    isFolder: !0,
                    maxSize: e.maxSize,
                    createTime: e.createTime && constants.dateStrFromMisc(parseInt(e.createTime)),
                    updateTime: e.updateTime && constants.dateStrFromMisc(parseInt(e.updateTime)),
                    folder: !0
                }
        },
        initFromFile: function(e) {
            return this.set(this._parseFromFile(e))
        },
        _parseFromFile: function(e) {
            e.path && 0 === e.path.indexOf("/Share") && (e.path = e.path.replace("Share", constants.entSpecialFolderNames.Share));
            var t = e.name || e.fileName;
            return {
                fileId: e.fileId,
                name: t,
                parentId: e.parentId || e.folderId,
                guid: e.guid || e.fileGuid,
                type: constants.getFileSuffix(t),
                createTime: e.createTime && constants.dateStrFromMisc(parseInt(e.createTime)),
                updateTime: e.updateTime && constants.dateStrFromMisc(parseInt(e.updateTime)),
                thumb: e.thumb && "/" + e.thumb,
                version: e.version,
                size: e.size || e.fileSize,
                shareLinkId: e.shareLinkId,
                lockByUserId: e.lockByUserId,
                lockByUser: e.lockByUser,
                remark: e.remark,
                favorite: e.favorite,
                userId: e.userId,
                enterpriseId: e.enterpriseId,
                deleted: e.deleted,
                fileStatus: e.fileStatus,
                remind: e.remind,
                convertSupport: constants.isFileConvertSupport(constants.getFileSuffix(t)),
                failCount: e.failCount,
                permissionDTO: e.permissionDTO,
                path: e.path,
                isFolder: !1,
                folder: !1
            }
        },
        initRootFolder: function() {
            return this.set({
                parentId: null,
                fileId: "entRoot",
                type: "folder",
                name: msgs.msgEntFile,
                diskType: constants.fileType.shareDisk,
                folder: !0,
                fileType: constants.fileType.shareDisk
            })
        },
        fetchPermission: function(e) {
            resturl.getUserPermissionsByFolderId({
                folderId: this.get("fileId")
            }, function(t) {
                if (constants.isResponseError(t))
                    e && e(t);
                else {
                    var s = new UserListDTO;
                    s.reset(_.map(t || [], function(e) {
                            return new r(e)
                        })),
                        e && e(null, s)
                }
            })
        },
        fetchUserAndRolePermission: function(e) {
            resturl.getFolderPermissions({
                fileId: this.id,
                fileType: this.get("fileType")
            }, function(t) {
                if (constants.isResponseError(t))
                    e && e(t);
                else {
                    var r = new i;
                    r.reset(t.permissions),
                        e && e(null, r)
                }
            })
        },
        getPermissionOperations: function() {
            var e = [],
                t = this.get("permissionDTO");
            return t ? (t.read && e.push(constants.PermissionOperateMap.read),
                t.upload && e.push(constants.PermissionOperateMap.upload),
                t.download && e.push(constants.PermissionOperateMap.download),
                t.write && e.push(constants.PermissionOperateMap.write),
                t.share && e.push(constants.PermissionOperateMap.share),
                t["delete"] && e.push(constants.PermissionOperateMap["delete"]),
                t.local && e.push(constants.PermissionOperateMap.local),
                t.manage && e.push(constants.PermissionOperateMap.manage),
                _.uniq(_.flatten(e))) : e
        },
        getOperations: function() {
            var e = this.getPermissionOperations();
            return webhelper.without(e, this.hasRemind() ? ["attention"] : ["unattention"]),
                this.hasLock() ? (webhelper.without(e, ["lock"]),
                    this.hasLockByMe() || webhelper.without(e, ["rename", "move", "delete", "edit"])) : webhelper.without(e, ["unlock"]),
                webhelper.without(e, this.isFolder() ? ["lock", "unlock"] : ["permission", "sync"]),
                this.isSysFolder() && webhelper.without(e, ["rename", "move", "delete"]),
                webhelper.without(e, !this.isFolder() && constants.isEditType(this.get("type")) ? [] : ["edit"]),
                e
        },
        getMultiFilesOperations: function() {
            var e = this.getPermissionOperations();
            return webhelper.without(e, ["share", "rename", "lock", "unlock", "edit", "permission", "property"]),
                webhelper.without(e, this.isSysFolder() ? ["move", "copy", "delete"] : []),
                e
        },
        hasLock: function() {
            return !!this.get("lockByUserId")
        },
        hasLockByMe: function() {
            return this.get("lockByUserId") && this.get("lockByUserId") === cache.userId
        },
        hasUnlockOperation: function() {
            return this.hasLock() ? model.currentUser ? this.get("lockByUserId") === model.currentUser.id || model.currentUser.isAdmin() || model.currentUser.isSecAdmin() && this.hasPermission("manage") : this.get("lockByUserId") === cache.userId : !1
        },
        isLock: function() {
            return !!this.get("lockByUserId")
        },
        hasShareLink: function() {
            return !!this.get("shareLinkId")
        },
        hasRemind: function() {
            return !!this.get("remind")
        },
        hasPermission: function(e) {
            return this.get("permissionDTO") && !!this.get("permissionDTO")[e]
        },
        hasOperatePermission: function(e) {
            return _.contains(this.getPermissionOperations(), e)
        },
        loadFile: function(e) {
            var t = this;
            resturl.getEntFileById(this.asFileIdParam(), function(r) {
                t.isFolder() ? t.initFromEntFolder(r) : t.initFromFile(r),
                    e && e(r)
            })
        },
        loadFileNoCheckPermission: function(e) {
            var t = this;
            resturl.getEntFileNoCheckPermission(this.asFileIdParam(), function(r) {
                t.set(t.parse(r)),
                    r.pageCount && t.set("pageCount", r.pageCount),
                    e && e(r)
            })
        },
        fetch: function(e) {
            this.isFolder() ? resturl.getEntFolderById(this.asFileIdParam(), this._fetchCallback(e)) : resturl.getEntFileById(this.asFileIdParam(), this._fetchCallback(e))
        },
        _fetchCallback: function(e) {
            var t = this;
            return function(r) {
                return constants.isResponseError(r) ? !1 : (t.isEntDisk() ? t.isFolder() ? t.initFromEntFolder(r) : t.initFromFile(r) : t.isFolder() ? t.initFromPersonFolder(r) : t.initFromFile(r),
                    void(e && e()))
            }
        },
        reload: function(e) {
            this.isFolder() ? resturl.getEntFolderById(this.asFileIdParam(), this._reloadCallback(e)) : resturl.getEntFileById(this.asFileIdParam(), this._reloadCallback(e))
        },
        _reloadCallback: function(e) {
            var t = this;
            return function(r) {
                t.set(t.parse(r)),
                    e && e()
            }
        },
        move: function(e, t) {
            var r = this.asFileParam();
            _.extend(r, {
                    toFolderId: e.isRootFolder() ? null : e.get("fileId")
                }),
                this.isEntDisk() ? this.isFolder() ? resturl.moveEntFolder(r, t) : resturl.moveEntFile(r, t) : this.isFolder() ? resturl.movePersonalFolder(r, t) : resturl.movePersonalFile(r, t)
        },
        rename: function(e) {
            var t = this.asFileParam();
            t.name = this.get("name"),
                this.isFolder() ? resturl.renameEntFolder(t, e) : resturl.renameEntFile(t, e)
        },
        createFolder: function(e) {
            resturl.createFolder({
                parentId: this.getParentId(),
                name: this.get("name"),
                maxSize: this.get("maxSize"),
                fileType: constants.fileType.shareDisk
            }, e)
        },
        deleteToRecycle: function(e) {
            var t = this.asFileParam();
            this.isFolder() ? resturl.deleteEntFolderToRecycle(t, {
                timeout: 6e4
            }, e) : resturl.deleteEntFileToRecycle(t, {
                timeout: 6e4
            }, e)
        },
        restore: function(e) {
            var t = this.asFileParam();
            this.isEntDisk() ? this.isFolder() ? resturl.restoreEntFolder(t, e) : resturl.restoreEntFile(t, e) : this.isFolder() ? resturl.restorePersonalFolder(t, e) : resturl.restorePersonalFile(t, e)
        },
        deleteFromRecycle: function(e) {
            var t = this.asFileParam();
            this.isFolder() ? resturl.deleteRecycleEntFolder(t, e) : resturl.deleteRecycleEntFile(t, e)
        },
        deleteFavFile: function(e) {
            resturl.deleteFavFile(this.asFileIdParam, e)
        },
        lockEntFile: function(e) {
            var t = this;
            resturl.lockEntFile(this.asFileIdParam(), function(r) {
                constants.isResponseOK(r) && (t.set("lockByUserId", cache.userId),
                        t.set("lockByUser", cache.username)),
                    e && e(r)
            })
        },
        unlockEntFile: function(e) {
            var t = this;
            resturl.unlockEntFile(this.asFileIdParam(), function(r) {
                constants.isResponseOK(r) && (t.set("lockByUserId", ""),
                        t.set("lockByUser", "")),
                    e && e(r)
            })
        },
        remindShareFile: function(e) {
            this.isFolder() ? resturl.remindEntFolder(this.asFileIdParam(), e) : resturl.remindEntFile(this.asFileIdParam(), e)
        },
        updateFileRemark: function(e) {
            if (this.isEntDisk()) {
                var t = _.extend(this.asFileParam(), {
                    remark: this.get("remark")
                });
                this.isFolder() ? resturl.updateEntFolderRemark(t, e) : resturl.updateEntFileRemark(t, e)
            } else {
                var t = _.extend(this.asFileParam(), {
                    remark: this.get("remark")
                });
                this.isFolder() ? resturl.updatePersonalFolderRemark(t, e) : resturl.updatePersonalFileRemark(t, e)
            }
        },
        deleteRemindShareFile: function(e) {
            this.isFolder() ? resturl.deleteRemindEntFolder(this.asFileIdParam(), e) : resturl.deleteRemindEntFile(this.asFileIdParam(), e)
        },
        deleteLink: function() {
            var e = this;
            resturl.deleteLink({
                entId: cache.entId,
                userId: cache.userId,
                linkId: this.get("shareLinkId"),
                fileType: this.get("fileType")
            }, function(t) {
                constants.isResponseOK(t) ? e.set("shareLinkId", null) : noty.error(t == ErrorType.errorNoPermission ? msgs.msgNoPermission : msgs.msgServerError)
            })
        },
        checkPermission: function(e, t) {
            resturl.checkPermission({
                entId: cache.entId,
                userId: cache.userId,
                folderId: "entRoot" === this.id ? null : this.id,
                permission: e
            }, function(e) {
                t && t(e)
            })
        },
        checkFilePermission: function(e, t) {
            resturl.checkPermission({
                entId: cache.entId,
                userId: cache.userId,
                folderId: "entRoot" === this.get("parentId") ? null : this.get("parentId"),
                permission: e
            }, function(e) {
                t && t(e)
            })
        },
        restoreFileVersion: function(e, t) {
            var r = _.extend({
                entId: cache.entId,
                userId: cache.userId,
                version: e.get("version")
            }, this.isFolder() ? {
                folderId: this.get("fileId")
            } : {
                fileId: this.get("fileId")
            });
            this.isFolder() ? resturl.restoreEntFolderVersion(r, t) : resturl.restoreEntFileVersion(r, t)
        },
        asFileIdParam: function() {
            var e = {
                entId: cache.entId,
                userId: cache.userId
            };
            return _.extend(e, this.isFolder() ? {
                    folderId: this.get("fileId")
                } : {
                    fileId: this.get("fileId")
                }),
                e
        },
        asFileParam: function() {
            var e = {
                entId: cache.entId,
                userId: cache.userId
            };
            return _.extend(e, this.isFolder() ? {
                    folderId: this.get("fileId")
                } : {
                    fileId: this.get("fileId")
                }),
                _.extend(e, this.isEntDisk() ? {
                    version: this.get("version")
                } : {}),
                e
        },
        asFileAndFolderListParam: function() {
            var e = {
                version: this.get("version")
            };
            return _.extend(e, this.isFolder() ? {
                    folderId: this.get("fileId")
                } : {
                    fileId: this.get("fileId")
                }),
                e
        },
        getShareLinkByLinkId: function(e) {
            var t = this,
                r = _.extend({
                    linkId: this.get("shareLinkId"),
                    fileType: this.get("fileType")
                }, cache.baseParam);
            return resturl.getLinkById(r, function(r) {
                    if (r == ErrorType.error500)
                        noty.error(msgs.msgServerError);
                    else {
                        var s = r;
                        s.file = t.toJSON(),
                            t.set("shareLink", new n(s)),
                            e && e()
                    }
                }),
                this
        },
        getPermissionByFolderId: function(e) {
            var t = this,
                s = (this.get("fileId"),
                    _.extend({
                        folderId: t.get("fileId")
                    }, cache.baseParam));
            resturl.getUserPermissionsByFolderId(s, function(t) {
                var s;
                constants.isResponseError(t) ? s = t : (s = new UserListDTO,
                        s.add(_.map(t, function(e) {
                            return new r(e)
                        }))),
                    e && e(s)
            })
        },
        getParentFoldersAndSelfByFolder: function(e) {
            var t = constants.asBaseParam();
            t.folderId = this.get("fileId"),
                resturl.getParentEntFoldersAndSelfByFolder(t, e)
        },
        getParentEntFolders: function(e) {
            var t = constants.asBaseParam();
            "folder" === this.get("type") ? t.folderId = this.get("fileId") : t.fileId = this.get("fileId"),
                "folder" === this.get("type") ? resturl.getParentEntFoldersByFolder(t, e) : resturl.getParentEntFoldersByFile(t, e)
        },
        hasPreviewPermission: function() {
            return this.isFolder() || this.hasPermission("read")
        },
        getAllocatableDiskSizeAsync: function(e) {
            resturl.getAvailableMaxSize({
                fileId: this.id
            }, function(t) {
                var r = t.availableMaxSize;
                e && e(r)
            })
        },
        getFile: function(e) {
            var t = this;
            resturl.getFile({
                fileId: this.id,
                fileType: this.get("fileType"),
                entId: cache.entId,
                userId: cache.userId
            }, function(r) {
                constants.isResponseError(r) || (t.trigger(EventType.loadFile, r),
                    e && e(r))
            })
        },
        displayName: function() {
            return constants.dealEntSpecialFolder(this.get("name"))
        }
    })
});;
define("app/commons/models/file/EntFileListDTO", function(require, e, t) {
    var r = "[EntFileListDTO]-",
        n = require("app/commons/models/file/EntFileDTO"),
        i = require("app/commons/models/file/BaseFileList");
    t.exports = window.EntFileListDTO = i.extend({
        model: n,
        diskType: constants.fileType.shareDisk,
        fileType: constants.fileType.shareDisk,
        initialize: function() {
            model.messageEvent && this.listenTo(model.messageEvent, MessageType.FileConvertDone, this.onFileConvertDone)
        },
        getFiles: function(e, t) {
            var r, i = this;
            this.removeOldChildren(e);
            var o = this.getRealFolderId(this.get(e).id),
                d = {
                    fileType: this.fileType,
                    folderId: o
                };
            this.order && (d.order = this.order),
                resturl.getFiles(d, function(e) {
                    var o = _.map(e.files, function(e) {
                        return new n(e)
                    });
                    i.add(o).trigger(EventType.loadFile, o, r),
                        t && t()
                })
        },
        fetch: function(e, t) {
            var r;
            this.removeOldChildren(e),
                r = this.get(e),
                this._fetch(r, t)
        },
        _fetch: function(e, t) {
            var r = this,
                i = this.getRealFolderId(e.id);
            resturl.getPagedEntFilesByFolder({
                entId: cache.entId,
                userId: cache.userId,
                folderId: i,
                order: {
                    orderBy: "name"
                }
            }, function(o) {
                var d = _.map(o.forderList.concat(o.fileList), function(e) {
                    return i || (e.parentId = null),
                        new n(e)
                });
                r.add(d).trigger(EventType.loadFile, d, e),
                    t && t()
            })
        },
        fetchAncestor: function(e, t) {
            var r = this;
            resturl.getParentEntFoldersAndSelfByFolder(_.extend({
                folderId: e
            }, cache.baseParam), function(e) {
                !constants.isResponseError(e) && e.length && (r.reset(model.rootEntFolder),
                        r.add(_.map(e, function(e) {
                            return new n(e)
                        }))),
                    t && t(e)
            })
        },
        search: function(e, t) {
            var r = this;
            resturl.getPagedEntFilesByFolder({
                entId: cache.entId,
                userId: cache.userId,
                fileName: e,
                global: !0,
                order: {
                    orderBy: "name"
                }
            }, function(e) {
                var i = _.map(e.forderList.concat(e.fileList), function(e) {
                    return new n(e)
                });
                r.reset(i),
                    t && t(e)
            })
        },
        isEntDisk: function() {
            return !0
        },
        onUpdateFile: function(e) {
            var t = _.isArray(e) ? e : [e],
                r = this;
            _.each(t, function(e) {
                var t = r.get(e.id);
                t && t.set(e.pick("shareLinkId", "remind", "favorite", "lockByUserId"))
            })
        },
        onRemoveFile: function(e) {
            var t = _.isArray(e) ? e : [e],
                r = this,
                n = [];
            _.each(t, function(e) {
                    var t = r.get(e.id);
                    t && r.remove(t) && n.push(t)
                }),
                n.length > 0 && r.trigger(EventType.removeFile, n)
        },
        onLockShareFile: function(e) {
            var t = this.get(e.fileId);
            t && t.reload()
        },
        onFileConvertDone: function(e) {
            var t = JSON.parse(e.get("msgBody")),
                r = this.get(t.fileId);
            r && r.set("fileStatus", t.status)
        },
        rootChildren: function() {
            return this.where({
                folderId: null
            })
        },
        getShareFolderNav: function(e) {
            var t = [],
                r = this.get(e);
            if ("shareRoot" === r.get("parentId"))
                t.unshift(r);
            else
                for (t.unshift(r); r && r.get("parentId");) {
                    var n = this.get(r.get("parentId"));
                    if (!n)
                        break;
                    t.unshift(n),
                        r = n
                }
            return t
        },
        ensureEntFolders: function(e, t) {
            var n = this;
            resturl.getEntParentIdsByFolder({
                entId: cache.entId,
                userId: cache.userId,
                folderId: e
            }, function(i) {
                i.push(e),
                    n._ensureFetchFolders(i, t),
                    log.info(r, "ensureEntFolders OK!")
            })
        },
        eunsureEntFile: function(e, t) {
            var r = this;
            resturl.getEntParentIdsByFile({
                entId: cache.entId,
                userId: cache.userId,
                fileId: parseInt(e)
            }, function(e) {
                return e == ErrorType.errorNoPermission ? void(t && t()) : void r._ensureFetchFolders(e, t)
            })
        },
        _ensureFetchFolders: function(e, t) {
            var r = this;
            resturl.getEntFolderAndFileByFolderIds({
                entId: cache.entId,
                userId: cache.userId,
                folderIds: e
            }, function(e) {
                var n = _.map([].concat(e.forderList).concat(e.fileList), r._createEntFile);
                r.add(n).trigger(EventType.addFolderNodes, n),
                    t && t()
            })
        },
        fetchRootFolder: function(e) {
            var t = this;
            resturl.getEntFolderAndFileByFolderId({
                entId: cache.entId,
                userId: cache.userId,
                folderId: null
            }, function(r) {
                var i = _.map(r.forderList.concat(r.fileList), function(e) {
                    var t = e.fileId ? (new n).initFromFile(e) : (new n).initFromEntFolder(e);
                    return t.set("diskType", constants.fileType.shareDisk),
                        t.set("collectionType", constants.FileCollectionType.entDisk),
                        t
                });
                t.reset(),
                    t.add(i).trigger(EventType.loadFile, i, model.rootEntFolder),
                    e && e(),
                    log.info("[EntFileListDTO]-[fetchRootFolder]")
            })
        },
        fetchFolder: function(e, t) {
            var r = this;
            return !e || constants.isRootFolder(e) ? void this.fetchRootFolder(t) : void resturl.getEntFolderAndFileByFolderId({
                entId: cache.entId,
                userId: cache.userId,
                folderId: e
            }, function(n) {
                var i = _.map(n.forderList.concat(n.fileList), r._createEntFile);
                r.removeOldChildren(e),
                    r.add(i).trigger(EventType.loadFile, i, r.findWhere({
                        fileId: e
                    })),
                    t && t()
            })
        },
        _createEntFile: function(e) {
            return new n(e)
        },
        fetchAdminFolders: function(e, t) {
            var r = this;
            resturl.getAdminFoldersByFolderId({
                entId: cache.entId,
                userId: cache.userId,
                folderId: e
            }, function(n) {
                var i = _.map(n.forderList, r._createEntFile);
                null == e ? (_.each(i, function(e) {
                            e.set("parentId", "entRoot")
                        }),
                        r.reset(),
                        r.add(i).trigger(EventType.loadFile, i, model.rootEntFolder)) : r.add(i).trigger(EventType.loadFile, i, r.findWhere({
                        fileId: e
                    })),
                    t && t()
            })
        }
    })
});;
define("app/commons/models/file/PersonFileDTO", function(require, e, t) {
    var r = require("app/commons/models/file/BaseFileDTO");
    t.exports = r.extend({
        idAttribute: "fileId",
        defaults: {
            entId: void 0,
            userId: void 0,
            fileId: void 0,
            parentId: void 0,
            type: void 0,
            isFolder: !1,
            guid: void 0,
            name: void 0,
            size: void 0,
            createTime: void 0,
            updateTime: void 0,
            thumb: void 0,
            remark: void 0,
            md5: void 0,
            deleted: 0,
            path: void 0,
            pageCount: 0,
            fileStatus: void 0,
            checked: !1,
            loaded: !1,
            diskType: constants.fileType.onlineDisk,
            fileType: constants.fileType.onlineDisk
        },
        constructor: function() {
            var e = arguments[0];
            e && (arguments[0] = this._parse(e)),
                Backbone.Model.apply(this, arguments)
        },
        _parse: function(e) {
            if (e.fileType) {
                var t = e.fileName || e.name;
                return {
                    enterpriseId: e.entId,
                    userId: e.userId,
                    diskType: e.fileType,
                    parentId: e.parentId || "personRoot",
                    fileId: e.fileId,
                    name: t,
                    type: e.folder ? "folder" : constants.getFileSuffix(t),
                    size: e.fileSize,
                    guid: e.fileGuid,
                    version: e.version,
                    createTime: e.createTime && constants.dateStrFromMisc(parseInt(e.createTime)),
                    updateTime: e.updateTime && constants.dateStrFromMisc(parseInt(e.updateTime)),
                    thumb: e.thumb,
                    shareLinkId: e.linkDTO && e.linkDTO.linkId,
                    lockByUserId: e.lockByDTO && e.lockByDTO.lockByUserId,
                    lockByUser: e.lockByDTO && e.lockByDTO.lockByUser,
                    remark: e.remark,
                    favorite: e.favorite,
                    fileStatus: e.convStatus,
                    remind: e.remind,
                    convertSupport: constants.isFileConvertSupport(constants.getFileSuffix(t)),
                    permissionDTO: e.permissionDTO,
                    path: e.path,
                    isFolder: e.folder,
                    folder: e.folder,
                    labels: e.labels,
                    linkDTO: e.linkDTO,
                    sysFolder: e.sysFolder,
                    updateUserName: e.upadteUserName
                }
            }
            return e.fileId ? this._parseFromFile(e) : this._parseFromFolder(e)
        },
        initFromPersonFolder: function(e) {
            return this.set(this._parseFromFolder(e))
        },
        _parseFromFolder: function(e) {
            return {
                entId: e.enterpriseId,
                userId: e.userId,
                fileId: e.folderId,
                isFolder: !0,
                realname: e.name,
                parentId: e.parentId ? e.parentId : "personRoot",
                name: !e.parentId && constants.isSpecialPersonFolder(e.name) ? constants.personSpecialFolderNames[e.name] : e.name,
                thumb: e.thumb,
                remark: e.remark,
                type: "folder",
                convertSupport: !1,
                sysFolder: e.sysFolder,
                deleted: e.deleted,
                path: e.path && constants.dealPersonSpecialPath(e.path),
                createTime: e.createTime && constants.dateStrFromMisc(parseInt(e.createTime)),
                updateTime: e.updateTime && constants.dateStrFromMisc(parseInt(e.updateTime)),
                shareLinkId: e.shareLinkId
            }
        },
        initFromFile: function(e) {
            return this.set(this._parseFromFile(e))
        },
        _parseFromFile: function(e) {
            var t = e.name || e.fileName;
            return {
                entId: e.enterpriseId,
                userId: e.userId,
                fileId: e.fileId,
                name: t,
                parentId: e.parentId || e.folderId,
                guid: e.guid || e.fileGuid,
                type: constants.getFileSuffix(t),
                createTime: e.createTime && constants.dateStrFromMisc(parseInt(e.createTime)),
                updateTime: e.updateTime && constants.dateStrFromMisc(parseInt(e.updateTime)),
                thumb: e.thumb && resturl.baseurl2 + e.thumb,
                size: e.size,
                remark: e.remark,
                deleted: e.deleted,
                fileStatus: e.fileStatus,
                path: e.path && constants.dealPersonSpecialPath(e.path),
                convertSupport: constants.isFileConvertSupport(constants.getFileSuffix(t))
            }
        },
        initRootFolder: function() {
            return this.set({
                parentId: null,
                fileId: "personRoot",
                type: "folder",
                name: msgs.msgPersonFile,
                isFolder: !0,
                diskType: constants.fileType.onlineDisk,
                folder: !0,
                fileType: constants.fileType.onlineDisk
            })
        },
        getOperations: function() {
            var e = ["move", "copyto", "rename", "delete", "download", "upload", "create", "edit", "property", "label"];
            return this.get("sysFolder") && webhelper.without(e, ["rename", "move", "delete"]),
                webhelper.without(e, this.isFolder() || !constants.isEditType(this.get("type")) ? ["edit"] : []),
                e
        },
        hasOperatePermission: function(e) {
            return _.contains(this.getOperations(), e)
        },
        hasPermission: function() {
            return !0
        },
        loadFile: function(e) {
            var t = this;
            resturl.getPersonFileById(this.asFileIdParam(), function(r) {
                t.isFolder() ? t.initFromPersonFolder(r) : t.initFromFile(r),
                    e && e(r)
            })
        },
        fetch: function(e) {
            this.isFolder() ? resturl.getPersonFolderById(this.asFileIdParam(), this._fetchCallback(e)) : resturl.getPersonFileById(this.asFileIdParam(), this._fetchCallback(e))
        },
        _fetchCallback: function(e) {
            var t = this;
            return function(r) {
                return constants.isResponseError(r) ? !1 : (t.set(t._parse(r)),
                    void(e && e(t, r)))
            }
        },
        reload: function(e) {
            this.isFolder() ? resturl.getPersonalFolderById(this.asFileIdParam(), this._reloadCallback(e)) : resturl.getPersonFileById(this.asFileIdParam(), this._reloadCallback(e))
        },
        _reloadCallback: function(e) {
            var t = this;
            return function(r) {
                t.set(t._parse(r)),
                    e && e(r)
            }
        },
        move: function(e, t) {
            var r = this.asFileParam();
            _.extend(r, {
                    toFolderId: e.isRootFolder() ? null : e.get("fileId")
                }),
                this.isFolder() ? resturl.movePersonalFolder(r, t) : resturl.movePersonalFile(r, t)
        },
        rename: function(e) {
            var t = this.asFileParam();
            t.name = this.get("name"),
                this.isFolder() ? resturl.renamePersonalFolder(t, e) : resturl.renamePersonalFile(t, e)
        },
        createFolder: function(e) {
            resturl.createPersonalFolder({
                parentId: this.getParentId(),
                name: this.get("name")
            }, e)
        },
        deleteToRecycle: function(e) {
            this.isFolder() ? resturl.deletePersonFolderToRecycle(this.asFileParam(), e) : resturl.deletePersonFileToRecycle(this.asFileParam(), e)
        },
        restore: function(e) {
            this.isFolder() ? resturl.restorePersonalFolder(this.asFileParam(), e) : resturl.restorePersonalFile(this.asFileParam(), e)
        },
        deleteFromRecycle: function(e) {
            this.isFolder() ? resturl.deleteRecyclePersonalFolder(this.asFileParam(), {
                timeout: 6e4
            }, e) : resturl.deleteRecyclePersonalFile(this.asFileParam(), {
                timeout: 6e4
            }, e)
        },
        updateFileRemark: function(e) {
            var t = _.extend(this.asFileParam(), {
                remark: this.get("remark")
            });
            this.isFolder() ? resturl.updatePersonalFolderRemark(t, e) : resturl.updatePersonalFileRemark(t, e)
        },
        asFileIdParam: function() {
            var e = {
                entId: cache.entId,
                userId: cache.userId
            };
            return _.extend(e, this.isFolder() ? {
                    folderId: this.get("fileId")
                } : {
                    fileId: this.get("fileId")
                }),
                e
        },
        asFileParam: function() {
            var e = {
                entId: cache.entId,
                userId: cache.userId
            };
            return _.extend(e, this.isFolder() ? {
                    folderId: this.get("fileId")
                } : {
                    fileId: this.get("fileId")
                }),
                e
        },
        asFileAndFolderListParam: function() {
            return this.id
        },
        hasPreviewPermission: function() {
            return !0
        },
        getParentFoldersAndSelfByFolder: function(e) {
            resturl.getParentPersonalFoldersAndSelfByFolder({
                folderId: this.id
            }, e)
        },
        getParentPersonFolders: function(e) {
            var t = constants.asBaseParam();
            "folder" === this.get("type") ? t.folderId = this.get("fileId") : t.fileId = this.get("fileId"),
                "folder" === this.get("type") ? resturl.getParentPersonalFoldersByFolder(t, e) : resturl.getParentPersonalFoldersByFile(t, e)
        },
        getFile: function(e) {
            var t = this;
            resturl.getFile({
                fileId: this.id,
                fileType: this.get("fileType"),
                entId: cache.entId,
                userId: cache.userId
            }, function(r) {
                constants.isResponseError(r) || (t.trigger(EventType.loadFile, r),
                    e && e(r))
            })
        },
        displayName: function() {
            return constants.dealPersonSpecialFolder(this.get("name"))
        }
    })
});;
define("app/commons/models/file/FolderList", function(require, e, r) {
    var n = require("app/commons/models/file/EntFileDTO"),
        t = require("app/commons/models/file/PersonFileDTO"),
        d = require("app/commons/models/file/BaseFileList");
    r.exports = d.extend({
        model: n,
        fileType: constants.fileType.shareDisk,
        isEntDisk: function() {
            return this.fileType === constants.fileType.shareDisk
        },
        fetchAdminFolders: function(e, r) {
            var t = this,
                d = this.getRealFolderId(e);
            resturl.getAdminFoldersByFolderId({
                entId: cache.entId,
                userId: cache.userId,
                folderId: d
            }, function(i) {
                var l = _.map(i.forderList, function(e) {
                    return d || (e.parentId = null),
                        new n(e)
                });
                t.removeOldChildren(e),
                    t.add(l).trigger(EventType.loadFile, l, t.findWhere({
                        fileId: e
                    })),
                    r && r()
            })
        },
        fetchFolder: function(e, r, n) {
            r === constants.fileType.shareDisk ? this.fetchEntFolder(e, n) : this.fetchPersonFolder(e, n)
        },
        fetchEntFolder: function(e, r) {
            var t = this,
                d = this.getRealFolderId(e);
            resturl.getPagedEntFilesByFolder(this.asPageParam(d), function(i) {
                var l = _.map(i.forderList, function(e) {
                    return d || (e.parentId = null),
                        new n(e)
                });
                t.removeOldChildren(e),
                    t.add(l).trigger(EventType.loadFile, l, t.findWhere({
                        fileId: e
                    })),
                    r && r()
            })
        },
        fetchPersonFolder: function(e, r) {
            var n = this,
                d = this.getRealFolderId(e);
            resturl.getPagedPersonalFilesByFolder(this.asPageParam(d), function(d) {
                var i = _.map(d.forderList, function(e) {
                    return new t(e)
                });
                n.removeOldChildren(e),
                    n.add(i).trigger(EventType.loadFile, i, n.findWhere({
                        fileId: e
                    })),
                    r && r()
            })
        },
        asPageParam: function(e) {
            return {
                entId: cache.entId,
                userId: cache.userId,
                folderId: e,
                order: {
                    orderBy: "name"
                },
                fileType: "folder"
            }
        },
        searchFolders: function(e, r) {
            var n = this;
            resturl.getFiles({
                fileType: this.fileType,
                folderId: 0,
                searchKey: e,
                entId: cache.entId,
                userId: cache.userId
            }, function(e) {
                _.each(e.files, function(e) {
                        e.folder && n.add(e)
                    }),
                    r && r(e)
            })
        }
    })
});;
define("app/commons/models/file/MultiFileDownloadDTO", function(require, e, t) {
    t.exports = window.MultiFileDownloadDTO = Backbone.Model.extend({
        urlRoot: "",
        defaults: {
            entId: void 0,
            userId: void 0,
            type: void 0,
            token: void 0,
            folderId: void 0,
            linkId: void 0,
            folderName: void 0,
            fileIds: void 0,
            folderIds: void 0,
            path: void 0
        },
        initFromFiles: function(e, t) {
            var d = {
                entId: cache.entId,
                userId: cache.userId,
                type: t.get("diskType"),
                token: cache.token
            };
            _.extend(d, {
                    fileIds: _.map(_.filter(e, function(e) {
                        return !e.isFolder()
                    }), function(e) {
                        return e.id
                    }),
                    folderIds: _.map(_.filter(e, function(e) {
                        return e.isFolder()
                    }), function(e) {
                        return e.id
                    }),
                    folderId: t.id
                }),
                isNaN(d.folderId) && (d.folderId = null),
                d.folderName = null,
                d.folderName = e.length > 1 ? constants.dealSpecialFolder(t.get("name"), t.get("fileType")) : constants.dealSpecialFolder(e[0].get("name"), e[0].get("fileType")),
                this.set(d)
        },
        isOnlyFolder: function() {
            return !(this.get("fileIds") || this.get("folderIds"))
        },
        zipMultiFiles: function(e) {
            var t = _.pick(this.toJSON(), "entId", "userId", "folderId", "folderName", "type", "folderIds", "fileIds", "linkId");
            resturl.zipFiles(t, {
                timeout: 6e4
            }, e)
        },
        getDownloadUrl: function() {
            return resturl.zipDownload + "?" + $.param(_.extend({
                ei: this.get("entId"),
                ui: this.get("userId"),
                path: this.get("path")
            }, this.get("li") ? {
                li: this.get("linkId")
            } : {}))
        }
    })
});;
define("app/commons/models/file/PersonFileList", function(require, e, t) {
    var n = "[PersonFileList]-",
        r = require("app/commons/models/file/BaseFileList"),
        o = require("app/commons/models/file/PersonFileDTO");
    t.exports = r.extend({
        model: o,
        diskType: constants.fileType.onlineDisk,
        fileType: constants.fileType.onlineDisk,
        initialize: function() {
            this.listenTo(model.messageEvent, MessageType.FileConvertDone, this._onFileConvertDone),
                this.listenTo(model.messageEvent, EventType.removeFile, this.onRemoveFile)
        },
        getFiles: function(e, t) {
            var n, r = this;
            this.removeOldChildren(e);
            var i = this.getRealFolderId(this.get(e).id);
            resturl.getFiles(_.extend({
                fileType: this.fileType,
                folderId: i
            }, {
                order: this.order
            }), function(e) {
                var i = _.map(e.files, function(e) {
                    return new o(e)
                });
                r.add(i).trigger(EventType.loadFile, i, n),
                    t && t()
            })
        },
        fetch: function(e, t) {
            var n;
            this.removeOldChildren(e),
                n = this.get(e),
                this._fetch(n, t)
        },
        _fetch: function(e, t) {
            var r = "[_fetch]-",
                i = this;
            resturl.getPersonalFolderAndFileByFolderId({
                entId: cache.entId,
                userId: cache.userId,
                folderId: this.getRealFolderId(e.id)
            }, function(s) {
                var l = _.map([].concat(s.forderList).concat(s.fileList), function(e) {
                    return new o(e)
                });
                i.add(l).trigger(EventType.loadFile, l, e),
                    t && t(),
                    log.info(n, r, " OK!")
            })
        },
        fetchAncestor: function(e, t) {
            var n = this;
            resturl.getParentPersonalFoldersAndSelfByFolder(_.extend({
                folderId: e
            }, cache.baseParam), function(e) {
                !constants.isResponseError(e) && e.length && (n.reset(model.rootPersonFolder),
                        n.add(_.map(e, function(e) {
                            return new o(e)
                        }))),
                    t && t(e)
            })
        },
        fetchRootFolder: function(e) {
            this.fetch("personRoot", e)
        },
        search: function(e, t) {
            var n = this;
            resturl.getPagedPersonalFilesByFolder({
                entId: cache.entId,
                userId: cache.userId,
                fileName: e,
                global: !0,
                order: {
                    orderBy: "name"
                }
            }, function(e) {
                var r = _.map(e.forderList.concat(e.fileList), function(e) {
                    return new o(e)
                });
                n.reset(r),
                    t && t(e)
            })
        },
        getPageParam: function(e) {
            var t = e.toPage - e.fromPage || 1;
            return _.extend({
                skipResults: e.fromPage * e.pageSize,
                maxResults: (e.fromPage + t) * e.pageSize,
                folderId: this.currentFolder.getFolderId(),
                order: {
                    orderBy: "name"
                }
            }, cache.baseParam)
        },
        cleanFolder: function(e) {
            return this.data.length = 0,
                constants.isRootFolder(e) ? void this.reset() : void this.removeOldChildren(e)
        },
        _onRemoveFile: function(e) {
            var t = _.isArray(e) ? e : [e],
                n = this,
                r = [];
            _.each(t, function(e) {
                    var t = n.get(e.id);
                    t && n.remove(t) && r.push(t)
                }),
                r.length > 0 && n.trigger(EventType.removeFile, r)
        },
        _onFileConvertDone: function(e) {
            var t = JSON.parse(e.get("msgBody")),
                n = this.get(t.fileId);
            n && n.set("fileStatus", t.status)
        },
        isEntDisk: function() {
            return !1
        },
        rootChildren: function() {
            return this.where({
                folderId: null
            })
        }
    })
});;
define("app/commons/models/file/SyncFolderDTO", function(require, e, t) {
    t.exports = Backbone.Model.extend({
        idAttribute: "syncId",
        defaults: {
            folderId: void 0,
            folderPath: void 0,
            folderName: void 0,
            createrName: void 0,
            createrTime: void 0,
            syncUsers: void 0,
            userIds: void 0,
            checked: !1
        },
        initialize: function() {
            this.get("folderName") && this.set("folderName", constants.dealEntSpecialFolder(this.get("folderName"))),
                this.get("folderPath") && this.set("folderPath", constants.dealEntSpecialPath(this.get("folderPath")))
        },
        getSyncUsers: function() {
            var e = this;
            resturl.getSyncUsersBySyncId(this.getParam(), function(t) {
                if (constants.isResponseError(t))
                    return void noty.error(msgs.msgServerError);
                var s = [];
                _.each(t.users, function(e) {
                        s.push(e.userId)
                    }),
                    e.set("userIds", s),
                    e.trigger("getSyncUserReady", e)
            })
        },
        getSyncFolderInfo: function(e) {
            var t = this;
            this.get("folderId") && resturl.getSyncFolderInfo({
                fileId: this.get("folderId"),
                syncId: this.get("syncId"),
                fileType: constants.fileType.shareDisk,
                userId: cache.userId,
                entId: cache.entId
            }, function(s) {
                constants.isResError(s) || (!!s.syncId && t.set(s),
                        t.trigger("setSyncUserReady", t)),
                    e && e(s)
            })
        },
        deleteSyncFolder: function(e) {
            resturl.deleteSyncFolder(this.getParam(), e)
        },
        getParam: function() {
            return {
                userId: cache.userId,
                entId: cache.entId,
                folderId: this.get("folderId"),
                syncId: this.get("syncId")
            }
        }
    })
});;
define("app/commons/models/file/SyncFolderPageList", function(require, e, t) {
    var r = require("app/commons/models/file/SyncFolderDTO");
    t.exports = Backbone.Paginator.requestPager.extend({
        model: r,
        paginator_core: {
            url: resturl.flexService + "/sc/admin/sync/getAdminSyncFolders",
            type: "POST",
            headers: {
                UT: cache.token,
                "Content-Type": "text/plain; charset=UTF-8",
                Accept: "text/plain;charset=UTF-8"
            },
            dataType: "json",
            processData: !1
        },
        paginator_ui: {
            firstPage: 1,
            currentPage: 1,
            perPage: 30
        },
        server_api: {
            userId: cache.userId,
            entId: cache.entId,
            skipResults: function() {
                return (this.currentPage - 1) * this.perPage
            },
            maxResults: function() {
                return this.perPage
            }
        },
        parse: function(e) {
            return this.count = e.resultCount,
                this.totalRecords = e.resultCount,
                this.trigger(EventType.getRecord, this.count),
                e.folders
        },
        refreshCurrentPage: function(e) {
            var t = this.info();
            this.goTo(e ? t.currentPage > 1 ? t.currentPage - 1 : 1 : t.currentPage)
        },
        pageQuery: function(e, t) {
            this.server_api = _.pick(this.server_api, "userId", "entId", "skipResults", "maxResults"),
                t && _.extend(this.server_api, t),
                this.goTo(e)
        },
        getCheckedFolders: function() {
            return this.where({
                checked: !0
            })
        },
        cancelSyncs: function(e) {
            var t = this.getCheckedFolders();
            t && 0 != t.length && resturl.deleteSyncFolders({
                entId: cache.entId,
                userId: cache.userId,
                syncIds: _.map(t, function(e) {
                    return e.get("syncId")
                })
            }, e)
        },
        getCreatedSyncFolders: function(e) {
            var t = this;
            resturl.getCreatedSyncFolders({
                entId: cache.entId,
                userId: cache.userId
            }, function(r) {
                t.add(r.folders),
                    e && e(r)
            })
        }
    })
});;
define("app/commons/models/file/UploadFileDTO", function(require, e, s) {
    var t = require("security"),
        r = require("app/commons/models/file/EntFileDTO"),
        i = require("app/commons/models/file/PersonFileDTO");
    s.exports = window.UploadFileDTO = Backbone.Model.extend({
        urlRoot: "",
        idAttribute: "id",
        defaults: {
            id: void 0,
            uploadId: void 0,
            index: 0,
            name: void 0,
            size: 0,
            uploadedSize: 0,
            status: void 0,
            type: void 0,
            diskType: void 0,
            creationdate: void 0,
            modificationdate: void 0,
            folderId: void 0,
            password: void 0,
            newFileName: void 0
        },
        security: function(e) {
            _.extend(this.attributes, t.getNonceDTO(cache.userId, e))
        },
        isEntDisk: function() {
            return constants.isEntDisk(this.get("diskType"))
        },
        isWait: function() {
            return "wait" === this.get("status")
        },
        startUpload: function() {
            this.set("status", "uploading")
        },
        setErrorStatus: function(e) {
            switch (e) {
                case ErrorType.errorSameFile:
                    this.set("status", "sameName");
                    break;
                case ErrorType.errorNoSpace:
                    this.set("status", "errorNoSpace");
                    break;
                case ErrorType.errorFolderSpaceOver:
                    this.set("status", "errorFolderSpaceOver");
                    break;
                case ErrorType.errorFolderDeleted:
                    this.set("status", "errorFolderDeleted");
                    break;
                case ErrorType.errorCheckToken:
                case ErrorType.error500:
                default:
                    this.set("status", "error")
            }
        },
        checkFileUpload: function(e) {
            var s = this.pick("folderId", "name", "size", "linkId");
            s.fileType = this.get("fileType"),
                nodeRest.post("/upload/single/check", s, e)
        },
        afterUploadSucc: function(e) {
            this.set({
                status: "success",
                fileId: e.fileId
            });
            var s;
            this.isEntDisk() ? (s = new r(e),
                    s.set("permissionDTO", model.currentFolder.get("permissionDTO")),
                    this.get("messageUsers") && this.sendMsgNotify(s)) : s = new i(e),
                model.currentFolder.id === s.get("parentId") && collection.currentFileList.add(s)
        },
        sendMsgNotify: function(e) {
            Amq.sendMessages(_.map(this.get("messageUsers"), function(s) {
                return {
                    msgType: MessageType.ShareFileUpload,
                    msgBody: JSON.stringify({
                        entId: cache.entId,
                        userId: cache.userId,
                        operation: constants.operation.UploadFile,
                        msgList: [{
                            parentId: e.get("parentId"),
                            fileId: e.get("fileId"),
                            name: e.get("name")
                        }]
                    }),
                    receiverId: s,
                    senderId: cache.userId,
                    senderName: model.currentUser.getDisplayName()
                }
            }))
        }
    })
});;
define("app/commons/models/file/UploadFileListDTO", function(require, e, t) {
    var i = require("app/commons/models/file/UploadFileDTO");
    t.exports = window.UploadFileListDTO = Backbone.Collection.extend({
        model: i,
        getWaitFiles: function() {
            return this.where({
                status: "wait"
            })
        },
        getOneWaitFile: function() {
            return this.findWhere({
                status: "wait"
            })
        },
        isCompleteForSameUploadId: function(e) {
            var t = this.findWhere({
                uploadId: e
            });
            return !t
        },
        getSuccFilesForSameUploadId: function(e) {
            return this.where({
                uploadId: e,
                status: "success"
            })
        },
        getNeetMailNotifyFiles: function(e) {
            return this.where({
                uploadId: e,
                needMail: !0,
                status: "success"
            })
        },
        hasUploadingFile: function() {
            return !!this.findWhere({
                status: "uploading"
            })
        },
        checkFileUpload: function() {
            var e = this,
                t = this.findWhere({
                    status: "wait"
                });
            t && t.checkFileUpload(function(i, s) {
                i ? (t.setErrorStatus(i),
                    e.checkFileUpload()) : "OK" === s.statusCode ? t.startUpload() : t.afterUploadSucc(s)
            })
        }
    })
});;
define("app/commons/models/message/AppEvent", function(require, e, n) {
    function o() {}
    _.extend(o.prototype, Backbone.Events),
        n.exports = new o
});;
define("app/commons/models/message/ChatMsgDTO", function(require, e, s) {
    s.exports = Backbone.Model.extend({
        urlRoot: "",
        defaults: {
            msgId: void 0,
            senderId: void 0,
            senderName: void 0,
            msgBody: void 0,
            msgStatus: void 0,
            msgType: void 0,
            sendTime: void 0,
            receiverName: void 0,
            receiverId: void 0
        },
        initialize: function() {
            if (this.get("sendTime") && (this.set("sendDate", constants.dateStrFromMisc(this.get("sendTime"), "YYYY-MM-DD")),
                    this.set("sendHour", constants.dateStrFromMisc(this.get("sendTime"), "HH:mm:ss")),
                    this.set("sendTime", constants.dateStrFromMisc(this.get("sendTime")))),
                "SFUpload" === this.get("msgType"))
                try {
                    var e = JSON.parse(this.get("msgBody")),
                        s = e.msgList[0];
                    this.set("msgBody", " 【通知】上传文件: " + s.name)
                } catch (t) {
                    this.set("msgBody", " 【通知】上传文件: 上传了多个文件")
                }
        },
        parseToView: function() {
            var e = this.get("msgBody");
            if (e.indexOf('"operation":"SendFile"') > -1) {
                var s = JSON.parse(e);
                e = "";
                for (var t in s.msgList)
                    e += msgs.msgSendFiles + ":" + s.msgList[t].name
            }
            e.match(/<|>/g) && (e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;")),
                e = e.replace(/&lt;br\/&gt;/g, "<br/>").replace(/&lt;br&gt;/g, "<br/>"),
                this.set("msgBody", e)
        }
    })
});;
define("app/commons/models/message/ChatHistoryPageDTO", function(require, e, t) {
    var s = require("app/commons/models/message/ChatMsgDTO");
    t.exports = Backbone.Paginator.requestPager.extend({
        model: s,
        initialize: function() {
            this.on("add", this.hideNoDataTip, this)
        },
        hideNoDataTip: function(e) {
            var t = this.indexOf(e);
            if (0 === t)
                return e.set("anotherDay", !0), !0;
            var s = this.at(t - 1);
            e.get("sendDate") !== s.get("sendDate") && e.set("anotherDay", !0)
        },
        paginator_core: {
            url: resturl.flexService + "/sc/msg/getPagedChatHistory",
            type: "POST",
            headers: {
                UT: cache.token,
                "Content-Type": "text/plain; charset=UTF-8",
                Accept: "text/plain;charset=UTF-8"
            },
            dataType: "json",
            processData: !1
        },
        paginator_ui: {
            firstPage: 1,
            currentPage: 1,
            perPage: 30,
            totalPages: 10
        },
        updateTimeRange: function(e, t) {
            return this.server_api.startTime = e ? constants.getMillSec(e + " 00:00:00") : void 0,
                this.server_api.endTime = t ? constants.getMillSec(t + " 23:59:59") : void 0,
                this
        },
        server_api: {
            userId: cache.userId,
            entId: void 0,
            senderId: void 0,
            receiverId: void 0,
            startTime: void 0,
            endTime: void 0,
            skipResults: function() {
                return (this.currentPage - 1) * this.perPage
            },
            maxResults: function() {
                return this.perPage
            }
        },
        parse: function(e) {
            return constants.isResError(e) ? void this.trigger("error") : (this.count = e.count,
                this.totalRecords = e.count,
                this.trigger(EventType.pagerEnd),
                e.msgList)
        }
    })
});;
define("app/commons/models/message/MessageDTO", function(require, e, s) {
    s.exports = window.MessageDTO = Backbone.Model.extend({
        urlRoot: "/message",
        moreAttrs: void 0,
        defaults: {
            msgType: void 0,
            msgBody: void 0,
            msgCode: void 0,
            senderId: void 0,
            senderName: void 0,
            sendTime: void 0,
            receiverId: void 0,
            receiverName: void 0,
            msgStatus: void 0
        },
        initialize: function() {
            if (this.get("senderId") && 0 !== this.get("senderId")) {
                var e = collection.userList ? collection.userList.get(this.get("senderId")) : void 0;
                e ? (this.set("icon", e.get("icon")),
                    this.set("senderName", e.getDisplayName())) : (this.set("icon", constants.defaultIcon),
                    this.get("senderName") || this.set("senderName", "未知用户"))
            } else
                this.set("icon", constants.defaultIcon),
                this.set("senderName", "系统");
            return this.get("sendTime") && this.set("sendTimeStr", constants.dateStrFromMisc(this.get("sendTime"))),
                this.isChatMsg() || this.isNoticeMsg() ? void this.set("content", this.get("msgBody")) : (this.isFileMsg() && this.initFileMsg(),
                    void(this.isChatFileMsg() && this.initChatFileMsg()))
        },
        initFileMsg: function() {
            if (this.get("msgType") !== MessageType.FileConvertDone) {
                var e = JSON.parse(this.get("msgBody"));
                this.set("fileMessage", e),
                    this.isSingleFileOperate() ? (this.set("type", constants.typeConverter("ModelToView", e.folderId ? "folder" : constants.getFileSuffix(e.name))),
                        this.set("content", e.name),
                        this.set("isSingle", !0)) : (this.set("content", "多个文件"),
                        this.set("isSingle", !1)),
                    e.recordType ? this.set("operationLabel", constants.getFileOperationTip(e.recordType)) : (this.set("operationLabel", constants.getFileOperationTip(e.operation) + ":"),
                        this.set("isShow", e.operation !== constants.operation.Delete)),
                    e.operation === constants.operation.Lock && collection.entFileList.trigger(EventType.lockShareFile, this)
            }
        },
        initChatFileMsg: function() {
            var e, s = this.get("msgBody");
            e = _.isString(s) ? JSON.parse(s) : s,
                this.set({
                    fileMessage: e,
                    operation: e.operation
                })
        },
        isSingleFileOperate: function() {
            return this.get("fileMessage") && 1 == this.get("fileMessage").msgList.length
        },
        isChatMsg: function() {
            return MessageType.isChatMsgType(this.get("msgType"))
        },
        isFileMsg: function() {
            return _.contains(MessageType.getFileMsgType(), this.get("msgType"))
        },
        isVoiceMsg: function() {
            return this.get("msgType") === MessageType.SendVoice
        },
        isChatFileMsg: function() {
            return MessageType.isChatFileMsgType(this.get("msgType"))
        },
        isNoticeMsg: function() {
            return MessageType.isNoticeMsgType(this.get("msgType"))
        },
        isUploadSendFileMsg: function() {
            return _.contains(MessageType.getUploadSendFileMsgType(), this.get("msgType"))
        },
        getChatKey: function() {
            return cache.userId + "_" + this.getOtherUserId()
        },
        getOtherUserId: function() {
            return this.get(this.get("senderId") !== cache.userId ? "senderId" : "receiverId")
        },
        confirm: function(e) {
            resturl.confirmMsg({
                entId: cache.entId,
                userId: cache.userId,
                senderId: this.get("senderId"),
                sendTime: this.get("sendTime")
            }, e)
        },
        confirmSelf: function(e) {
            resturl.confirmMsg({
                entId: cache.entId,
                userId: cache.userId,
                senderId: this.get("senderId"),
                msgType: this.get("msgType"),
                msgId: this.get("msgId"),
                sendTime: this.get("sendTime")
            }, e)
        },
        sendMessage: function(e) {
            this.set("sendTime", (new Date).valueOf());
            var s = Amq.sendMessage(this.pick(_.keys(this.defaults)));
            e && e(s)
        },
        receiveFile: function(e, s) {
            resturl.copyPersonFileToPerson({
                userId: cache.userId,
                entId: cache.entId,
                otherUserId: this.get("senderId"),
                fileId: e
            }, s)
        },
        parseToView: function() {
            var e = this.get("msgBody");
            if (e.indexOf('"operation":"SendFile"') > -1) {
                var s = JSON.parse(e);
                e = "";
                for (var t in s.msgList)
                    e += msgs.msgSendFiles + ":" + s.msgList[t].name
            }
            e.match(/<|>/g) && (e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;")),
                e = e.replace(/&lt;br\/&gt;/g, "<br/>").replace(/&lt;br&gt;/g, "<br/>"),
                this.set("msgBody", e)
        }
    })
});;
define("app/commons/models/message/ChatMsgPageDTO", function(require, e, t) {
    var a = require("app/commons/models/message/MessageDTO");
    t.exports = Backbone.Paginator.clientPager.extend({
        model: a,
        initialize: function() {
            this.on("add", this.hideNoDataTip, this)
        },
        hideNoDataTip: function(e) {
            var t = this.indexOf(e);
            if (0 === t)
                return e.set("anotherDay", !0), !0;
            var a = this.at(t - 1);
            constants.dateStrFromMisc(e.get("sendTime"), "YYYY-MM-DD") !== constants.dateStrFromMisc(a.get("sendTime"), "YYYY-MM-DD") && e.set("anotherDay", !0)
        },
        paginator_core: {
            url: resturl.flexService + "/sc/msg/getChatRecord",
            type: "POST",
            headers: {
                UT: cache.token,
                "Content-Type": "text/plain; charset=UTF-8",
                Accept: "text/plain;charset=UTF-8"
            },
            dataType: "json",
            processData: !1
        },
        paginator_ui: {
            firstPage: 1,
            currentPage: 1,
            perPage: 30
        },
        server_api: {
            userId: cache.userId,
            entId: void 0
        },
        parse: function(e) {
            return this.trigger(EventType.pagerEnd),
                e
        }
    })
});;
define("app/commons/models/message/MessageEventDTO", function(require, e, n) {
    var t = "[MessageEvent]-";
    n.exports = window.MessageEventDTO = Backbone.Model.extend({
        initialize: function() {
            this.listenTo(this, "all", this.writerLog)
        },
        writerLog: function() {
            !!arguments[0] && log.info(t, "trigger [event]:", arguments[0])
        }
    })
});;
define("app/commons/models/message/MessageListDTO", function(require, e, s) {
    var n = require("app/commons/models/message/MessageDTO");
    s.exports = window.MessageListDTO = Backbone.Collection.extend({
        model: n,
        url: "",
        confirmMsg: function() {
            var e = this.last();
            e && (resturl.confirmMsg({
                    entId: cache.entId,
                    userId: cache.userId,
                    senderId: e.get("senderId"),
                    sendTime: e.get("sendTime")
                }),
                this.each(function(s) {
                    s.get("senderId") === e.get("senderId") && s.set("msgStatus", "Read")
                }))
        },
        hasUnreadMsg: function() {
            return !!this.find(function(e) {
                return "New" === e.get("msgStatus")
            })
        },
        getFileAccessRecords: function() {
            var e = this;
            resturl.getFileAccessLog(cache.baseParam, function(s) {
                e.count = s.count;
                var t = _.map(s.messageDTOList, function(e) {
                    return new n(e)
                });
                e.add(t)
            })
        }
    })
});;
define("app/commons/models/permission/FilePermissionDTO", function(require, e, t) {
    t.exports = Backbone.Model.extend({
        urlRoot: "",
        defaults: {
            folderId: void 0,
            roleId: void 0,
            read: !1,
            upload: !1,
            download: !1,
            share: !1,
            write: !1,
            "delete": !1,
            local: !1
        },
        getChecked: function() {
            return _.filter(_.without(_.keys(this.defaults), ["roleId", "folderId"]), function(e) {
                return this.get(e)
            }, this)
        },
        uncheckAll: function() {
            this.set(_.omit(this.defaults, "folderId", "roleId"))
        },
        checkAll: function() {
            _.each(_.without(_.keys(this.defaults), ["roleId", "folderId"]), function(e) {
                this.set(e, !0)
            }, this)
        }
    })
});;
define("app/commons/models/permission/FilePermissionListDTO", function(require, e, o) {
    var i = require("app/commons/models/permission/FilePermissionDTO");
    o.exports = Backbone.Collection.extend({
        model: i,
        url: "",
        getPermission: function(e, o) {
            return this.findWhere({
                folderId: o,
                roleId: e
            })
        }
    })
});;
define("app/commons/models/permission/PermissionDTO", function(require, e, t) {
    t.exports = window.PermissionDTO = Backbone.Model.extend({
        urlRoot: "",
        defaults: {
            read: !1,
            write: !1,
            "delete": !1,
            upload: !1,
            download: !1,
            share: !1,
            local: !1,
            manage: !1,
            createFolder: !1
        },
        getChecked: function() {
            return _.filter(_.without(_.keys(this.defaults), ["roleId", "folderId"]), function(e) {
                return this.get(e)
            }, this)
        },
        uncheckAll: function() {
            this.set(_.omit(this.defaults, "folderId", "roleId"))
        },
        checkAll: function() {
            _.each(_.without(_.keys(this.defaults), ["roleId", "folderId", "manage"]), function(e) {
                this.set(e, !0)
            }, this)
        }
    })
});;
define("app/commons/models/user/AddUserDTO", function(require, e, s) {
    var r = require("security");
    s.exports = window.AddUserDTO = Backbone.Model.extend({
        defaults: {
            entId: void 0,
            userId: void 0,
            account: void 0,
            userName: void 0,
            realName: void 0,
            mail: void 0,
            empNum: void 0,
            jobTitle: void 0,
            gender: void 0,
            password: void 0,
            nonce: void 0,
            hashKey: void 0,
            agent: void 0,
            deptId: void 0
        },
        initFromUser: function(e) {
            var s = e.pick("entId", "userId", "userName", "realName", "mail", "empNum", "jobTitle", "gender", "deptId");
            return this.set(s),
                this.set("operate", "edit"),
                this
        },
        password_validation: {
            password: [{
                required: !0,
                msg: msgs.msgPasswordEmpty
            }, {
                minLength: 6,
                maxLength: 20,
                msg: msgs.msgPasswordLength
            }],
            repassword: [{
                required: !0,
                msg: msgs.msgRepasswordEmpty
            }, {
                equalTo: "password",
                msg: msgs.msgRepasswordError
            }]
        },
        validation: {
            userName: [{
                required: !0,
                msg: msgs.msgAccountEmpty
            }, {
                minLength: 2,
                maxLength: 50,
                msg: msgs.msgAccountLengthError
            }, {
                pattern: /^\S.*\S$/,
                msg: msgs.msgAccountSpacesError
            }],
            realName: [{
                required: !0,
                msg: msgs.msgRealnameEmpty
            }, {
                minLength: 2,
                msg: msgs.msgRealnameLength
            }],
            mail: [{
                required: !0,
                msg: msgs.msgEmailEmpty
            }, {
                pattern: "email",
                msg: msgs.msgEmailFormatError
            }],
            password: [{
                required: !0,
                msg: msgs.msgPasswordEmpty
            }, {
                minLength: 6,
                maxLength: 20,
                msg: msgs.msgPasswordLength
            }],
            repassword: [{
                required: !0,
                msg: msgs.msgPasswordLength
            }, {
                equalTo: "password",
                msg: msgs.msgRepasswordError
            }]
        },
        save: function(e) {
            this.set({
                    entId: cache.entId,
                    userId: cache.userId
                }),
                this.securityDTO();
            var s = this.pick(_.keys(this.defaults));
            resturl.addUser(s, function(s) {
                var r = {
                        errorCheckHashkey: "您提交的用户信息没有通过安全验证!",
                        errorEnterpriseNotExist: "企业不存在",
                        errorUserNoOver: "您企业的用户数量已经用完!",
                        errorPayExpired: "您购买的账号已经过期! ",
                        errorEmployeeAlreadyExist: "该账号已经存在!",
                        error500: "系统错误! 新增账号失败!"
                    },
                    t = r[s];
                if (t)
                    return noty.alert(t), !1;
                if (noty.success(msgs.msgAddSucc), !constants.isResponseError(s)) {
                    var d = parseInt(s);
                    e && e(d)
                }
            })
        },
        saveAdd: function(e) {
            var s = this;
            this.set({
                    entId: cache.entId,
                    userId: cache.userId,
                    userName: $.trim(s.get("userName"))
                }),
                this.securityDTO(),
                this.unset("repassword");
            var r = this.toJSON();
            resturl.addUser(r, e)
        },
        createUser: function(e) {
            this.set("account", $.trim(this.get("account")));
            var s = _.pick(this.toJSON(), "account", "realName", "gender", "empNum", "deptId", "jobTitle", "permissions");
            resturl.createUser(_.extend(s, {
                entId: cache.entId,
                userId: cache.userId
            }), {
                timeout: 25e3
            }, e)
        },
        edit: function(e) {
            var s = this;
            this.set("userName", $.trim(s.get("userName")));
            var r = this.pick("deptId", "userName", "realName", "empNum", "jobTitle", "mail", "gender");
            _.extend(r, {
                    resetUserId: this.get("userId"),
                    entId: cache.entId,
                    userId: cache.userId,
                    deptId: r.deptId === constants.departIdNull ? null : r.deptId
                }),
                resturl.resetUserInfo(r, function(s) {
                    return constants.isResponseOK(s) ? (noty.success("用户信息修改成功!"),
                        void(e && e(s))) : void noty.alert(msgs.msgEditFail)
                })
        },
        securityDTO: function() {
            this.set(r.getNonceDTO(this.get("userName"), this.get("password")))
        }
    })
});;
define("app/commons/models/user/AdminPermissionDTO", function(require, e, t) {
    t.exports = Backbone.Model.extend({
        defaults: {
            userId: void 0,
            editEntInfo: !1,
            createDept: !1,
            createMember: !1,
            createFolder: !1,
            folderPermission: !1,
            setRole: !1,
            setBlock: !1,
            record: !1,
            deptIds: [],
            folderIds: []
        },
        hasUserMgrPermisson: function() {
            return this.get("createDept") || this.get("createMember") || this.get("setBlock")
        },
        hasPermissionMgr: function() {
            return this.get("folderPermission") || this.get("createFolder") || this.get("setRole")
        },
        save: function() {}
    })
});;
define("app/commons/models/user/DepartmentDTO", function(require, e, t) {
    var n = require("app/commons/models/user/UserDTO");
    t.exports = window.DepartmentDTO = Backbone.Model.extend({
        urlRoot: "",
        idAttribute: "departmentId",
        defaults: {
            departmentId: void 0,
            parentId: void 0,
            name: void 0,
            orderValue: void 0,
            permission: void 0,
            isDefault: !1,
            space: void 0
        },
        customized: {
            availableDiskSize: void 0
        },
        initialize: function() {
            this.get("deptId") && this.set("departmentId", this.get("deptId"))
        },
        renameDept: function(e, t) {
            var n = this;
            resturl.renameDept({
                entId: cache.entId,
                userId: cache.userId,
                deptId: this.id,
                name: e
            }, function(s) {
                constants.isResponseOK(s) && n.set("name", e),
                    t && t(s)
            })
        },
        addDept: function(e) {
            var t = this;
            resturl.addDept({
                entId: cache.entId,
                userId: cache.userId,
                parentId: this.get("parentId"),
                name: this.get("name")
            }, function(n) {
                constants.isResponseError(n) || t.set("departmentId", parseInt(n)),
                    e && e(n)
            })
        },
        createDepartment: function(e) {
            var t = this;
            resturl.createDepartment({
                entId: cache.entId,
                userId: cache.userId,
                parentId: this.get("parentId"),
                name: this.get("name"),
                permission: this.get("permission"),
                maxSize: this.get("maxSize")
            }, function(n) {
                constants.isResponseError(n) || (t.set("departmentId", n.deptId),
                        t.set(n),
                        t.set("orderValue", 100)),
                    e && e(n)
            })
        },
        updateDeptPermission: function(e, t) {
            var n = this;
            resturl.updateDeptPermission({
                entId: cache.entId,
                userId: cache.userId,
                deptId: this.get("departmentId"),
                permission: e
            }, function(s) {
                constants.isResponseOK(s) && n.set("permission", e),
                    t && t(s)
            })
        },
        updateDeptMaxSize: function(e, t) {
            var n = this;
            resturl.updateDeptMaxSize({
                entId: cache.entId,
                userId: cache.userId,
                deptId: this.get("departmentId"),
                maxSize: e
            }, function(s) {
                constants.isResponseOK(s) && e && n.set("maxSize", e),
                    t && t(s)
            })
        },
        getDeptUsers: function(e) {
            resturl.getUserByDeptId({
                deptId: this.get("departmentId") > 1 ? this.get("departmentId") : null
            }, function(t) {
                t && t.length ? e && e(_.map(t, function(e) {
                    return new n(e)
                })) : e && e([])
            })
        },
        delDept: function(e) {
            resturl.deleteDept({
                entId: cache.entId,
                userId: cache.userId,
                deptId: this.get("departmentId")
            }, function(t) {
                e && e(t)
            })
        },
        getAllocatableDiskSizeAsync: function(e) {
            resturl.getDeptAvailableMaxSiz({
                deptId: this.id
            }, function(t) {
                var n = t.availableMaxSize;
                e && e(n)
            })
        }
    })
});;
define("app/commons/models/user/DepartmentListDTO", function(require, e, t) {
    var n = require("app/commons/models/user/DepartmentDTO"),
        r = require("app/commons/models/user/UserDTO");
    t.exports = window.DepartmentListDTO = Backbone.Collection.extend({
        model: n,
        localStorage: new Backbone.LocalStorage("departmentListStorage"),
        url: "",
        userList: void 0,
        sumDepartmentId: function(e) {
            var t = e ? e.get("departmentId") : 0;
            return e && e.get("parentId") && (t += this.sumDepartmentId(this.get(e.get("parentId")))),
                t
        },
        initialize: function() {},
        getDeptList: function(e) {
            var t = this;
            resturl.getDeptList({}, function(r) {
                t.reset(_.map(r, function(e) {
                        return new n(e)
                    })),
                    t.add(new n({
                        departmentId: constants.departIdNull,
                        parentId: null,
                        name: msgs.msgUngrpContact,
                        orderValue: "100000000"
                    })),
                    e && e(t),
                    t.trigger(EventType.loadDepartment, t)
            })
        },
        fetch: function(e) {
            var t = this;
            return resturl.getDeptAndUserWithStatus({
                entId: cache.entId,
                userId: cache.userId
            }, function(r) {
                var s = r.deptList;
                s.sort(function(e, t) {
                        var n = e.orderValue || 0,
                            r = t.orderValue || 0;
                        return e.parentId ? t.parentId ? n - r : 1 : t.parentId ? -1 : n - r
                    }),
                    t.reset(_.map(s, function(e) {
                        return new n(e)
                    })),
                    t.add(new n({
                        departmentId: constants.departIdNull,
                        parentId: null,
                        name: msgs.msgUngrpContact,
                        orderValue: "100000000"
                    })),
                    t.trigger(EventType.loadDepartment, t),
                    e && e(r.userList)
            })
        },
        fetchManage: function(e, t) {
            var s = this;
            return resturl.getAdminDeptAndUser({
                entId: cache.entId,
                userId: cache.userId
            }, function(d) {
                s.reset(_.map(d.deptList, function(e) {
                        return new n(e)
                    })),
                    e || s.add(new n({
                        departmentId: constants.departIdNull,
                        parentId: null,
                        name: msgs.msgUngroupContact,
                        orderValue: "100000000"
                    })),
                    e ? s.userList && s.userList.reset(_.filter(d.userList, function(e) {
                        return e.deptId && new r(e)
                    })) : s.userList && s.userList.reset(_.map(d.userList, function(e) {
                        return new r(e.deptId ? e : _.extend({
                            dept: s.get(constants.departIdNull)
                        }, e))
                    })),
                    s.trigger(EventType.loadDepartment, s),
                    t && t()
            })
        },
        fetchManageDept: function(e, t) {
            var r = this;
            return resturl.getAdminDeptList({
                entId: cache.entId,
                userId: cache.userId
            }, function(s) {
                r.reset(_.map(s.departments, function(e) {
                        return new n(e)
                    })),
                    e || r.add(new n({
                        departmentId: constants.departIdNull,
                        parentId: null,
                        name: msgs.msgUngroupContact,
                        orderValue: "100000000"
                    })),
                    r.trigger(EventType.loadDepartment, r),
                    t && t()
            })
        },
        fetchDepts: function(e, t) {
            var r = this;
            return resturl.getDeptList({
                entId: cache.entId,
                userId: cache.userId
            }, function(s) {
                r.reset(_.map(s, function(e) {
                        return new n(e)
                    })),
                    e || r.add(new n({
                        departmentId: constants.departIdNull,
                        parentId: null,
                        name: msgs.msgUngroupContact,
                        orderValue: "100000000"
                    })),
                    r.trigger(EventType.loadDepartment, r),
                    t && t()
            })
        },
        getAllUserIds: function(e) {
            var t = this.getAllChildrenIds(e);
            if (t.push(e), !this.userList)
                return [];
            var n = this.userList.filter(function(e) {
                return _.find(t, function(t) {
                    return t === e.get("deptId")
                })
            });
            return _.pluck(n, "id")
        },
        getAllUsers: function(e) {
            var t = this.getAllChildrenIds(e);
            if (t.push(e), !this.userList)
                return [];
            var n = this.userList.filter(function(e) {
                return _.find(t, function(t) {
                    return e.get("deptId") === t
                })
            });
            return n
        },
        getDirectChildren: function(e) {
            return this.where({
                parentId: e
            })
        },
        getDirectChildrenIds: function(e) {
            return _.pluck(this.getDirectChildren(e), "id")
        },
        getAllChildren: function(e) {
            var t = [];
            return this._getAllChildren(t, e),
                t
        },
        _getAllChildren: function(e, t) {
            var n = this.getDirectChildren(t);
            n.length && _.each(n, function(t) {
                e.push(t),
                    this._getAllChildren(e, t.id)
            }, this)
        },
        getAllChildrenIds: function(e) {
            var t = [];
            return this._getAllChildrenIds(t, e),
                t
        },
        _getAllChildrenIds: function(e, t) {
            var n = this.getDirectChildrenIds(t);
            n.length && _.each(n, function(t) {
                e.push(t),
                    this._getAllChildrenIds(e, t)
            }, this)
        },
        ensure: function(e) {
            this.length > 0 ? e && e() : this.fetch(e)
        },
        secAdminFilter: function() {
            if (model.currentUser.isAdmin())
                return !0;
            if (model.adminPermission.get("deptIds") && model.adminPermission.get("deptIds").length) {
                var e = this.filter(function(e) {
                    return _.find(model.adminPermission.get("deptIds"), function(t) {
                        return t === e.id
                    })
                });
                this.reset(e);
                var t = this.userList.filter(function(e) {
                    return _.find(model.adminPermission.get("deptIds"), function(t) {
                        return t === e.get("deptId")
                    })
                });
                this.userList.reset(t)
            }
        },
        updateDeptOrder: function(e) {
            var t = this.asDepartmentOrderParam();
            resturl.updateDeptOrder(t, e)
        },
        asDepartmentOrderParam: function() {
            var e = [];
            return this.each(function(t) {
                e.push({
                    deptId: t.get("departmentId"),
                    orderValue: t.get("orderValue")
                })
            }), {
                entId: cache.entId,
                userId: cache.userId,
                deptOrders: e
            }
        },
        getParentPath: function(e, t) {
            var n = this.findWhere({
                departmentId: e
            });
            return n ? (t.push(n.get("name")),
                this.getParentPath(n.get("parentId"), t),
                t) : t
        },
        getDeptPath: function(e) {
            var t = this.getParentPath(e, []);
            return "/" + t.reverse().join("/")
        }
    })
});;
define("app/commons/models/user/RoleDTO", function(require, e, s) {
    var t = require("app/commons/models/permission/FilePermissionDTO"),
        r = require("app/commons/models/permission/FilePermissionListDTO");
    s.exports = Backbone.Model.extend({
        urlRoot: "",
        idAttribute: "roleId",
        defaults: {
            entId: void 0,
            name: void 0,
            roleId: void 0,
            permissions: void 0
        },
        initialize: function() {
            this.get("roleId") || this.set("roleId", this.get("groupId")),
                this.get("name") || this.set("name", this.get("groupName"))
        },
        getPermissionsByRoleId: function(e) {
            var s = this;
            resturl.getPermissionsByRoleId({
                entId: cache.entId,
                userId: cache.userId,
                roleId: this.id
            }, function(o) {
                var i = _.map(o, function(e) {
                    return new t(e)
                });
                s.set("permissions", new r(i)),
                    e && e()
            })
        },
        getUserIdsByRoleId: function(e) {
            var s = this;
            resturl.getUserIdsByRoleId({
                entId: cache.entId,
                userId: cache.userId,
                roleId: this.id
            }, function(t) {
                s.set("userIds", t),
                    e && e()
            })
        },
        createRole: function(e) {
            var s = constants.asBaseParam();
            s.name = this.get("name"),
                s.permissions = this.get("permissions"),
                s.userIds = this.get("userIds"),
                resturl.createRole(s, e)
        },
        updateRolePermission: function(e) {
            var s = constants.asBaseParam();
            s.roleId = this.get("roleId"),
                s.permissions = this.get("permissions"),
                s.userIds = this.get("userIds"),
                resturl.updateRolePermission(s, {
                    timeout: 25e3
                }, e)
        },
        rename: function(e) {
            var s = constants.asBaseParam();
            s.roleId = this.get("roleId"),
                s.name = this.get("name"),
                resturl.renameRole(s, e)
        },
        deleteRole: function(e) {
            var s = constants.asBaseParam();
            s.roleId = this.get("roleId"),
                resturl.deleteRoleById(s, e)
        },
        getFolderPermissionsAndUserByRoleId: function(e) {
            var s = constants.asBaseParam();
            s.roleId = this.get("roleId"),
                resturl.getFolderPermissionsAndUserByRoleId(s, e)
        },
        getUsersByRoleId: function(e) {
            resturl.getUsersByRoleId({
                roleId: this.get("roleId"),
                entId: cache.entId,
                userId: cache.userId
            }, function(s) {
                e && e(s)
            })
        }
    })
});;
define("app/commons/models/user/UserListDTO", function(require, e, t) {
    var s = require("app/commons/models/user/UserDTO"),
        n = require("app/commons/models/user/AdminPermissionDTO"),
        r = require("app/commons/models/message/MessageDTO");
    t.exports = window.UserListDTO = Backbone.Collection.extend({
        model: s,
        localStorage: new Backbone.LocalStorage("userListStorage"),
        url: "",
        departmentList: void 0,
        initialize: function() {
            this.listenTo(model.messageEvent, MessageType.UserJoin, this.onUserJoin),
                this.listenTo(model.messageEvent, MessageType.ColleagueNew, this.onColleagueNew),
                this.listenTo(model.messageEvent, MessageType.UserLeave, this.onUserLeave),
                this.listenTo(model.messageEvent, MessageType.UserStatusChange, this.onUserStatusChange),
                this.listenTo(model.messageEvent, MessageType.UserInfoUpdate, this.onUserInfoUpdate)
        },
        loadUser: function(e) {
            var t = this;
            resturl.getOtherUserInfo({
                entId: cache.entId,
                userId: cache.userId,
                otherUserId: e
            }, function(e) {
                if (!constants.isResponseError(e)) {
                    var n = e.deptId && t.departmentList.get(e.deptId),
                        r = new s(_.extend({
                            dept: n
                        }, e));
                    t.get(r.id) ? (t.get(r).set(r.toJSON()),
                        t.get(r).set("dept", n)) : t.add(r).trigger(EventType.addUserEvent, r)
                }
            })
        },
        fetchSecAdmins: function(e) {
            resturl.getAdminList({
                entId: cache.entId,
                userId: cache.userId
            }, function(t) {
                if (constants.isResponseError(t))
                    return !1; {
                    var s = t;
                    _.map(s, function(t) {
                        var s = e.get(t.userId);
                        return s && s.set("adminPermission", new n(t)),
                            s
                    })
                }
            })
        },
        startUserStatusTimer: function() {
            setInterval(function() {
                resturl.changeOnlineStatus({
                        entId: cache.entId,
                        userId: cache.userId,
                        agent: "web",
                        status: model.currentUser.get("onlineStatus")
                    }),
                    resturl.getUserStatuses({
                        entId: cache.entId,
                        userId: cache.userId
                    }, function(e) {
                        _.each(e, function(e) {
                            var t = collection.userList.get(e.userId);
                            t && t.get("onlineStatus") !== e.userStatus && model.messageEvent.trigger(MessageType.UserStatusChange, new r({
                                senderId: t.id,
                                msgBody: e.userStatus
                            }))
                        })
                    })
            }, 12e4)
        },
        getCheckedUsers: function() {
            return this.where({
                checked: !0
            })
        },
        getDepartUsers: function(e) {
            return this.where({
                departmentId: e
            })
        },
        fetchDeptUsers: function(e, t) {
            resturl.getDeptAndUserByDeptId({
                deptId: e && -1 === e ? null : e
            }, function(e) {
                e.userList && t && t(_.map(e.userList, function(e) {
                    return new s(e)
                }))
            })
        },
        searchUsers: function(e, t) {
            resturl.searchUsers({
                key: e
            }, function(e) {
                e.userList && t && t(_.map(e.userList, function(e) {
                    return new s(e)
                }))
            })
        },
        onUserJoin: function(e) {
            var t = this.get(e.get("senderId"));
            t && t.set({
                onlineStatus: constants.UserStatus.Online,
                agent: e.get("msgBody")
            })
        },
        onUserLeave: function(e) {
            var t = this.get(e.get("senderId"));
            t && t.set({
                onlineStatus: constants.UserStatus.Logout
            })
        },
        onUserStatusChange: function(e) {
            var t = this.get(e.get("senderId"));
            t && t.set({
                onlineStatus: e.get("msgBody")
            })
        },
        onUserInfoUpdate: function(e) {
            var t = this.get(e.get("senderId"));
            if (t) {
                var s = JSON.parse(e.get("msgBody"));
                t.set(s)
            }
        },
        onColleagueNew: function() {
            log.info("UserListDTO > onColleagueNew")
        },
        updateDeptUsers: function(e, t) {
            var s = [];
            this.each(function(e) {
                s.push(e.get("userId"))
            });
            var n = {
                userId: cache.userId,
                entId: cache.entId,
                deptId: e,
                userIds: s
            };
            resturl.updateDeptUser(n, function(e) {
                t && t(e)
            })
        },
        getAllDeptUsers: function(e) {
            return this.filter(function(t) {
                return _.contains(e, t.get("deptId"))
            })
        }
    })
});;
define("app/commons/models/user/RoleListDTO", function(require, e, r) {
    var s = require("app/commons/models/user/RoleDTO"),
        t = require("app/commons/models/user/UserDTO"),
        n = require("app/commons/models/user/UserListDTO");
    r.exports = Backbone.Collection.extend({
        model: s,
        localStorage: new Backbone.LocalStorage("userListStorage"),
        url: "",
        fetch: function(e) {
            var r = this;
            return resturl.getRoleList({
                    userId: cache.userId,
                    entId: cache.entId
                }, function(s) {
                    _.each(s, function(e) {
                            r.add(e)
                        }),
                        e && e()
                }),
                this
        },
        updateRoleUser: function(e) {
            resturl.updateRoleUsers({
                entId: cache.entId,
                userId: cache.userId,
                roleUsers: _.map(this.filter(function(e) {
                    return e.get("userIds")
                }), function(e) {
                    return {
                        roleId: e.id,
                        userIds: e.get("userIds")
                    }
                })
            }, e)
        },
        getChecked: function() {
            return this.findWhere({
                checked: !0
            })
        },
        uncheckAll: function() {
            this.each(function(e) {
                e.set("checked", !1)
            })
        },
        getRoleAndUsers: function() {
            var e = this;
            resturl.getUserGroupAndUsers(function(r) {
                constants.isResponseError(r) ? noty.error(msgs.msgServerError) : r.groups && e.reset(_.map(r.groups, function(e) {
                    var r = new s({
                        groupId: e.groupId,
                        groupName: e.groupName
                    });
                    if (e.users) {
                        var o = new n,
                            u = _.map(e.users, function(e) {
                                return new t(e)
                            });
                        o.reset(u),
                            r.set("users", o)
                    }
                    return r
                }))
            })
        }
    })
});;
define("app/commons/models/user/SettingDTO", function(require, t, i) {
    i.exports = window.SettingDTO = Backbone.Model.extend({
        urlRoot: "",
        defaults: {
            minBodyWidth: 1024,
            minBodyHeight: 698,
            minMainboxHeight: 631,
            minContentRightWidth: 500,
            headerHeight: 80,
            slideRightHeaderHeight: 26,
            slideRightNavTabHeight: 37,
            slideRightSearchHeight: 40,
            footerHeight: 25,
            fileOperationBarHeight: 61,
            filleBreadcrumb: 30,
            fileTableHeaderHeight: 35,
            folderTreeBottomHeight: 114,
            fileThumbHeight: 190,
            fileDealBtnHeight: 95,
            contentLeftWidth: 206,
            collapseContentLeftWidth: 50,
            contentRightMargin: 20,
            slideRightWidth: 269,
            adminTitleHeight: 45,
            adminNameHeight: 30,
            adminNavtabsHeight: 68,
            adminButtonHeight: 40,
            adminFolderPermissionHeight: 51,
            adminSubBtnHeight: 35,
            adminRecordSpaceHeight: 20,
            adminUserMgrTitleHeight: 40,
            adminRecordListHead: 70,
            adminRecordListTitle: 40,
            adminRecordListPage: 22,
            phoneContactReturnBar: 36,
            width: 0,
            height: 0,
            orientation: 0
        },
        initialize: function() {
            this.set({
                    width: $(window).width(),
                    height: $(window).height(),
                    innerWidth: $(window).innerWidth(),
                    innerHeight: $(window).innerHeight()
                }),
                $(window).resize(function() {
                    model.setting.set({
                        width: $(window).width(),
                        height: $(window).height(),
                        innerWidth: $(window).innerWidth(),
                        innerHeight: $(window).innerHeight()
                    })
                })
        },
        getSlideContentHeight: function() {
            return this.getMainboxHeight() - this.get("slideRightHeaderHeight") - this.get("slideRightNavTabHeight")
        },
        geDepartmentTreeHeight: function() {
            return this.getMainboxHeight() - this.get("slideRightHeaderHeight") - this.get("slideRightNavTabHeight") - this.get("slideRightSearchHeight") - 15
        },
        getSlideRightContentHeight: function() {
            return this.getMainboxHeight() - this.get("slideRightHeaderHeight")
        },
        getNewConferenceHeight: function() {
            return this.getMainboxHeight() - this.get("slideRightHeaderHeight") - this.get("slideRightNavTabHeight") - 10
        },
        getUsualContactTreeHeight: function() {
            return this.getMainboxHeight() - this.get("slideRightHeaderHeight") - this.get("slideRightNavTabHeight") - 40
        },
        getContentRightWidth: function() {
            return this.get("width") - this.get("contentLeftWidth") - 2
        },
        getContentRightWidthMinusSlide: function() {
            return this.get("width") - this.get("contentLeftWidth") - this.get("slideRightWidth") - 2
        },
        getContentRightCollapseLeft: function() {
            return this.get("width") < this.get("minBodyWidth") ? this.get("minBodyWidth") - 50 - 1 : this.get("width") - this.get("collapseContentLeftWidth") - 1
        },
        getContentRightCollapseLeftMinusSlide: function() {
            return this.get("width") < this.get("minBodyWidth") ? this.get("minBodyWidth") - 50 - this.get("slideRightWidth") - 1 : this.get("width") - this.get("collapseContentLeftWidth") - this.get("slideRightWidth") - 1
        },
        getMainboxHeight: function() {
            return this.get("height") - this.get("headerHeight") - this.get("footerHeight")
        },
        getMainboxWidth: function() {
            return this.get("width")
        },
        getFileTableHeight: function() {
            var t = this.getMainboxHeight() - this.get("fileOperationBarHeight") - this.get("filleBreadcrumb") - this.get("fileTableHeaderHeight") - 10;
            return t
        },
        getFolderTreeHeight: function() {
            return this.getMainboxHeight() - this.get("folderTreeBottomHeight")
        },
        getFileDetailHeight: function() {
            return this.getMainboxHeight() - this.get("slideRightHeaderHeight") - this.get("fileThumbHeight")
        },
        getAdminLeftHeight: function() {
            return this.getMainboxHeight()
        },
        getAdminServicesHeight: function() {
            return this.getMainboxHeight() - this.get("adminTitleHeight") - this.get("adminNameHeight") - this.get("adminNavtabsHeight")
        },
        getAdminShareDiskHeight: function() {
            return this.getMainboxHeight() - this.get("adminTitleHeight") - this.get("adminNavtabsHeight") - this.get("adminButtonHeight")
        },
        getAdminFolderPermissionHeight: function() {
            return this.getMainboxHeight() - this.get("adminTitleHeight") - this.get("adminNavtabsHeight") - this.get("adminFolderPermissionHeight") - this.get("adminSubBtnHeight")
        },
        getAdminSetRoleHeight: function() {
            return this.getMainboxHeight() - this.get("adminTitleHeight") - this.get("adminNavtabsHeight") - this.get("adminButtonHeight") - this.get("adminSubBtnHeight")
        },
        getAdminRecordDepartHeight: function() {
            return this.getMainboxHeight() - this.get("adminTitleHeight") - this.get("adminRecordSpaceHeight") - this.get("adminButtonHeight")
        },
        getAdminRecordHeight: function() {
            return this.getMainboxHeight() - this.get("adminTitleHeight") - this.get("adminRecordSpaceHeight") - this.get("adminNavtabsHeight")
        },
        getAdminUserMgrHeight: function() {
            return this.getMainboxHeight() - this.get("adminTitleHeight") - this.get("adminNavtabsHeight") - this.get("adminButtonHeight") - this.get("adminUserMgrTitleHeight")
        },
        getRecordListHeight: function() {
            return this.getMainboxHeight() - this.get("adminRecordListHead") - this.get("adminRecordListTitle") - this.get("adminRecordListPage")
        },
        getAdminCommMarHeight: function() {},
        getPhoneContactEditHeight: function() {
            return this.getMainboxHeight() - this.get("slideRightHeaderHeight") - this.get("phoneContactReturnBar") - 50 - this.get("footerHeight")
        },
        getPhoneMeetingPeopleHeight: function() {
            return this.getMainboxHeight() - this.get("slideRightHeaderHeight") - 430 - this.get("footerHeight")
        },
        getPhoneContactListHeight: function() {
            return this.getMainboxHeight() - this.get("slideRightHeaderHeight") - 67 - this.get("footerHeight")
        },
        getChatRecordColleagueHeight: function() {
            return this.getMainboxHeight() - 55
        },
        getChatRecordInfoHeight: function() {
            return this.getMainboxHeight() - 55 - 89
        }
    })
});;
define("app/commons/msg/message_en_US", function(require, e, s) {
    s.exports = {
        msg1: "Login",
        msg2: "Register",
        msg3: "Features",
        msg4: "Private Cloud",
        msg5: "Use Case",
        msg6: "Download",
        msg7: "Help",
        msg8: "About",
        msg9: "OATOS",
        msg11: "Forums",
        msg12: "Follow OATOS",
        msg13: "Terms of Service",
        msg14: "Guang Dong ICP Record No.010221",
        msg16: "Rights Reserved",
        msg18: "Company",
        msg19: "Enterprise Name",
        msg20: "Account",
        msg22: "Password",
        msg24: "Use HTTPS",
        msg25: "Domain account",
        msg27: "Register now",
        msg28: "Get Free service from OATOS",
        msg29: "Create free OATOS accounts",
        msg30: "Enterprise login info",
        msg32: "The name of project, team or company",
        msg34: "Administrator account",
        msg36: "digits and letters mixed",
        msg37: "Confirm password",
        msg38: "Re-enter password",
        msg40: "Name",
        msg41: "Real name",
        msg43: "Email address",
        msg45: "Phone No.",
        msg46: "Verification code",
        msg48: "Next",
        msg49: "Have read and agreed with",
        msg50: "《OATOS Terms of Service》",
        msg52: "Have OATOS account",
        msg53: "Login Now",
        msg54: "Support:",
        msg55: "Shen Zhen Qycloud Technology Co., Ltd.",
        msg59: "Locked",
        msg60: "Closed",
        msg61: "Operation",
        msg62: "Change the permission",
        msg63: "Change the passwrod",
        msg64: "Change the information",
        msg65: "Change the department",
        msg66: "Delete the account",
        msg67: "Personal files settings",
        msg68: "Account settings",
        msg69: "Create account",
        msg70: "Batch import accounts",
        msg73: "Gender",
        msg74: "Department",
        msg75: "Latest login",
        msg76: "Creator",
        msg77: "Personal folders",
        msg79: "Set the folder permission",
        msg80: "Please choose the folders that the selected account can manage",
        msg81: "Choose folders",
        msg82: "Folders",
        msg83: "Permission",
        msgSetPermission: "Set permission",
        msg85: "Go on choosing",
        msg86: "Confirm",
        msg87: "Cancel",
        msg88: "Login Account",
        msg89: "Required",
        msg93: "Male",
        msg94: "Female",
        msg95: "Enterprise Email",
        msg97: "Login Password",
        msg101: "ID No.",
        msg102: "Position",
        msg103: "All departments",
        msg108: "Account:",
        msg113: "Processing",
        msg127: "The results of batch importing accounts",
        msg136: "Verification",
        msg137: "Import again",
        msg138: "\\'s personal files setting",
        msg139: "Personal files:",
        msg140: "On",
        msg141: "Off",
        msg142: "Warning ! If you disable the personal files, all the files that it contained will be deleted.",
        msg143: "The storage of personal files:",
        msg146: "Reset password",
        msg147: "New password: ",
        msg148: "New password",
        msg149: "Confirm password",
        msg154: "Import template files",
        msg155: "Choose files",
        msg156: "Delete",
        msg157: "Confirm to import",
        msg158: "Batch import introduction:",
        msg159: "Please",
        msg160: "download the template at first",
        msg161: "then fill in the template and import again",
        msg162: "&nbsp;Download template&nbsp;",
        msg163: "Please set the folder permissions right after successfully importing account and department, otherwise the imported accounts will not be able to see the enterprise files in OATOS.",
        msg164: "Please fill in the template according to the requirements; if not, it can\\'t be imported.",
        msg165: "You can view the account information and set accordingly permissions in the account settings; and also can batch set the file permissions in the advanced settings",
        msg167: "Verification",
        msg168: "Confirm",
        msg169: "Enter your phone number used: ",
        msg170: "Send verification code",
        msg171: "Please enter the verification code short interest: ",
        msg174: "Open cloud conference call services",
        msg175: "温馨提示：",
        msg176: "OATOS云电话会议无需任何硬件投入，直接通过客户端开会，高品质通话效果，语音清晰流畅，带给您面对面交谈的体验效果；",
        msg177: "支持一对一通话及20人以内（包含20人）的云电话会议，无需再疲于奔波于总部与工作岗位之间，让管理者真正实现了运筹帷幄之中，决胜千里之外。",
        msg178: "恭喜你开通成功！",
        msgCompere: "主持人",
        msg179: "主叫号码",
        msg180: "被叫号码",
        msg181: "开始时间",
        msgCallTime: "呼出时间",
        msgMeetingCallTime: "发起时间",
        msgConnectedTime: "接通时间",
        msg182: "结束时间",
        msgCallStatus: "通话状态",
        msgMeetingMembers: "会议人次(人)",
        msgCallLength: "通话时长(分钟)",
        msgCallTotalLength: "会议时长(分钟)",
        msgMeetingMemberPhone: "参会人员号码",
        msg183: "时长（分）",
        msg184: "费用（元）",
        msg185: "套餐名称",
        msg186: "购买时间",
        msg187: "套餐分鐘數(分)",
        msg188: "单价（元）",
        msg189: "金额（元）",
        msg190: "套餐管理",
        msg191: "Totaltime:（minutes）",
        msg192: "Availabletime: (minutes)",
        msg193: "续费",
        msg194: "购买记录",
        msg195: "账单记录",
        msg196: "支付结果",
        msg197: "支付失败",
        msg198: "抱歉，您未能完成付款，请重新付款",
        msg199: "重试",
        msg200: "支付成功",
        msg201: "您已成功付款，对方将立即收到您的付款，为您开通优惠套餐",
        msg203: "开通服务",
        msg204: "开通您需要的云电话会议服务",
        msg205: "选择号码",
        msg206: "选择您需要的号码",
        msg207: "选择套餐",
        msg208: "选择您需要的套餐",
        msg209: "开通成功",
        msg210: "开通云电话成功，去体验吧",
        msg215: "使用现有号码",
        msg216: "新办电信号码",
        msg218: "呼叫显示号码是指与电话会议连接的号码。会议主持人在OATOS企业云盘上发起会议，呼叫显示号码将依次呼叫连接主持人、参会人A、参会人B等；",
        msg219: "呼叫显示号码，仅支持电信手机号码或者企业座机（总机号码）；",
        msg220: "填写电信手机号码，点击发送验证码，系统将自动发送验证码到该手机；",
        msg221: "企业座机请填写区号+企业总机号码，例如0755xxxxxxx，点击发送验证码，系统将自动呼叫您所填写的号码，进行语音验证码提示，敬请留意。",
        msg222: "100分钟送10分钟",
        msg223: "资费：0.15元/分钟",
        msg224: "立即办理",
        msg225: "300分钟送30分钟",
        msg228: "1000分钟送100分钟",
        msg232: "个性化的包月套餐任您选择，充值可享有更多优惠，管理员账号支付费用，其他参会人同时享有云电话会议功能；",
        msg233: "套餐可叠加购买，通话分钟将以套餐累积数为准，当月订购的套餐通话时间仅限当月有效，当月未使用部分不可结转至下月；",
        msg234: "更多包月优惠套餐，请咨询400-030-1108。",
        msg235: "呼叫显示号码：",
        msg237: "Verification code:",
        msg238: "Submit",
        msg239: "Colleagues",
        msg240: "the person you\\'re looking for",
        msg241: "Search",
        msg242: "Search cancel",
        msg243: "Messengers",
        msg246: "No instant messaging",
        msg248: "Chat history",
        msg249: "Beginning",
        msg250: "Deadline",
        msg252: "Chat log",
        msg253: "OATOS log",
        msg254: "Filter log",
        msg255: "Operation Types",
        msg256: "All",
        msg257: "Login",
        msg258: "Upload",
        msg259: "Download",
        msg260: "Preview",
        msg262: "Share link",
        msg263: "New",
        msg264: "Edit",
        msg265: "Move",
        msg266: "Rename",
        msg267: "Exact search",
        msg268: "Search account",
        msg269: "Can search one everytime",
        msg270: "Select",
        msg271: "Search files",
        msg272: "Enter the file name",
        msg276: "Date",
        msg279: "File name or folder name",
        msg280: "The folder",
        msg281: "Select the range of log",
        msg282: "Note: The (front, back) of log stands for the accordingly file information, in the condition of file moving forward (or backward), rename before (or after)",
        msgSelectQueryType: "请选择筛选项!",
        msg285: "Current service",
        msg286: "Services",
        msg287: "Basic service",
        msg288: "Value-added service",
        msg289: "Total",
        msg290: "Usage",
        msg291: "Contact us to purchase",
        msg293: "Pricing",
        msg296: "New Administrator",
        msg297: "Account authroization",
        msg298: "(you can only select one as the administrator)",
        msg299: "Select account",
        msg300: "Authroize the enterprise folders for the administrator management",
        msg307: "Administrator permission",
        msg308: "Account settings",
        msg309: "Create administrator for the deparment, and then they can manage the others in there",
        msg310: "Role permission settings:",
        msg311: "Set role permissions for the members in this department",
        msg312: "Hide account or department:",
        msg313: "Hide department or sub-sectors account",
        msg314: "Administrator settings:",
        msg315: "Set the members of the deparment as administrator",
        msg316: "Log management:",
        msg317: "The log management of the department account",
        msg318: "Role name",
        msg319: "20 characters, support Chinese or English",
        msg321: "Folder permission settings",
        msg323: "Required",
        msg328: "Add account for the role",
        msg331: "Continue adding",
        msg332: "Processing...",
        msg335: "Modify",
        msg336: "Change the administrator",
        msg337: "Lock",
        msg338: "Unlock",
        msg340: "Administrator settings",
        msg342: "Administrator account",
        msg343: "Department",
        msg345: "Status",
        msg346: "Enterprise information",
        msg347: "Role permissions",
        msg348: "Hide account or department",
        msg350: "Cloud phone settings",
        msg351: "Domain settings",
        msg353: "Whether to open the domain integration",
        msg356: "Domain type",
        msg357: "Domain server address",
        msg358: "Domain",
        msg359: "The domain administrator account",
        msg360: "The domain administrator password",
        msg361: "Auto-sync domain account",
        msg364: "Test domain link",
        msg365: "Save",
        msg366: "Manage the folders",
        msg367: "The enterprise folders that this administrator can manage",
        msg373: "Enterprise info",
        msg374: "Enterprise name",
        msg375: "Enterprise logo",
        msg376: "Change",
        msg378: "Support the JPG, PNG, GIF format of picture size: 200x55 PX",
        msg379: "Contact name",
        msg380: "Name of enteprise contacts",
        msg381: "Telphone:",
        msg382: "Enteprise contacts phone No.",
        msg383: "Email",
        msg384: "Enteprise contacts Email",
        msg385: "Address",
        msg386: "Enterprise addr.",
        msg387: "Registration time",
        msg393: "Make",
        msg394: "View or modify",
        msg397: "Role permissions setting",
        msg398: "New role permissions",
        msg399: "Role",
        msg400: "Role permissions",
        msg401: "Creator",
        msg402: "Admin management",
        msg403: "Service center",
        msg405: "Advanced settings",
        msg406: "Log management",
        msg407: "Exit",
        msg408: "Upload files",
        msg409: "Choose files",
        msg410: "Please select the file to upload",
        msg412: "Select the colleagues that need to be notified ",
        msg413: "at the same time, send messages to the colleagues",
        msg415: "Confirm",
        msg419: "Please select the type of permission",
        msg420: "Permission Types",
        msg421: "Preview only",
        msg422: "Upload only",
        msg423: "Download only",
        msg424: "Preview & upload",
        msg425: "Preview & download",
        msg426: "All",
        msg427: "Custom",
        msg428: "File permissions",
        msg435: "Local seamless interaction",
        msg436: "Types",
        msg437: "Authorized accounts can operate within the authorized folders",
        msg439: "Online preview office, images, audio, video and the other types of documents",
        msg441: "Upload files,generate the upload share links if you\\'ve the link permission",
        msg443: "Download files or folders, generate the download share links if you\\'ve the link permission",
        msg445: "Can generate the preview share link,if you\\'ve the upload or download permission, then it can be generated as upload or download share links.",
        msg446: "Can generate the upload share link with the download permission",
        msg447: "The Download share link",
        msg449: "New, move, rename files or folders",
        msg451: "Delete files or folders",
        msg453: "OATOS desktop clients can call the local software to edit the online files, and sync to OATOS seamlessly.",
        msg454: "Permission settings",
        msg468: "Share",
        msg472: "Cancel",
        msg473: "Saving...",
        msg474: "Confirm",
        msg486: "Shenzhen Qycloud Technology Co.,Ltd.",
        msg488: " version:",
        msg491: "Add to selected colleagues",
        msg492: "Selected colleagues",
        msg493: "Canceling ...",
        msg494: "Cancel Send",
        msg495: "Add",
        msg496: "Share link settings",
        msg497: 'Create a share link for "',
        msg498: ' ", then you can send the url to your relevant working partners via Email or QQ to work together',
        msg499: "Access permission",
        msg501: "Preview and Download",
        msg503: "Expiration date",
        msg504: "Access Password",
        msg505: "(Access password cannot be less than 4 characters)",
        msg507: "Disable link",
        msg509: "Generate link",
        msg511: "Shared the links to you by OATOS",
        msg512: "Please click on the link below to view the files",
        msg513: "Expiration date:",
        msg514: "Access password:",
        msg515: "Share link setting - mail notification",
        msg516: "Please enter the members email addresses need to be shared",
        msg517: "More than one email addresses, please use &nbsp;",
        msg518: "&nbsp;to make a distinction",
        msg519: "Contents of Email",
        msg522: "Send",
        msg526: "Send the share link via Email",
        msg527: "Visit the share link",
        msg528: "Copy the share link",
        msg533: "Please perfect the table of contents",
        msg534: "Messages",
        msg535: "File compressing",
        msg536: "Please wait",
        msg538: "Compression",
        msg539: "Close",
        msg540: "Search",
        msg541: "This permission settings will be applied to the current folder and all its subfolders",
        msg542: "Select colleagues",
        msg545: "The list of departments at the same level",
        msg546: "The list of departments",
        msg556: "Empty all",
        msg557: "Accept",
        msg558: "Refuse",
        msg562: "Go to the folder",
        msg563: "Declined",
        msg564: "Instant messaging",
        msg565: "Video chat",
        msg566: "Send file",
        msg567: "Add to favorite contacts",
        msg568: "There\\'re new messages",
        msg569: "Unknown account",
        msg572: "Meeting room",
        msg573: "Attendees",
        msg574: "Attend the meeting",
        msg576: "Cloud conference",
        msg578: "Meeting topic",
        msg580: "New meeting room",
        msg581: "Meeting room:",
        msg582: "Meeting topic or number",
        msg583: "Create a new meeting room",
        msg585: "New folder",
        renameFolder: "Rename folder",
        renameFile: "Rename file",
        msg586: "Please enter a folder name",
        msg590: "File name",
        msg591: "File Type",
        msg592: "File Size",
        msg593: "Creator",
        msg594: "Creation time",
        msg595: "Modified by",
        msg596: "Version Management",
        msg597: "Modification time",
        msg598: "Document Processing ...",
        msg603: "Follow",
        msg604: "Unfollow",
        msg606: "Edit share link",
        msg609: "Star",
        msg610: "Remove star",
        msg613: "Copy to",
        msg614: "Copy",
        msg617: "Online preview",
        msg618: "View all",
        msg621: "Updated time",
        msg625: "Starred",
        msgFavFile: "Starred",
        msg626: "Sort",
        msg627: "Ascending",
        msg628: "Descending",
        msg630: "Back",
        msg631: "Forward",
        msg638: "Detailed info",
        msg644: "Share link addr.",
        msg645: "Permission management",
        msg647: "More",
        msg648: "Remarks",
        msg649: "No remarks",
        msg654: "File location",
        msg655: "Restore",
        msg656: "Followed files",
        msg661: "Shared files",
        msg662: "Starred",
        msg663: "Recycle bin",
        msg681: "Authroized account",
        msg686: "Current",
        msg687: "Current files",
        msg688: "All files",
        msg690: "You have selected",
        msg691: " items",
        msg692: " folders",
        msg693: " files",
        msg694: "Please select the file you want to preview",
        msg695: "No share link settings",
        msg696: "Set",
        msg704: "New file",
        msg706: "Version No.",
        msg709: "Instructions",
        msgNoPermissonTip: "No permission to operate",
        msg710: "Enterprise files stored here, then you can share with the other colleagues for collaboration in real-time",
        msg711: "Administrator can set permissions for the folders in enterprise files, then the authroized accounts can visit the relevant folders",
        msg712: "The authroized accounts can operate the files, if the system remind you\\'ve no permissions, please contact the administrator",
        msg713: "You can store your personal files here, the others can\\'t see except you ",
        msg714: "Personal files takes up the enterpise storage space",
        msg715: "Enterpise files cannot copy to personal files, on the contrary, it can",
        msg743: "Permission settings",
        msg744: "Please select the account that you want to authorize and set the file/folder permissions",
        msg750: "Empty the list",
        msg777: "Restore",
        msg778: "Save as",
        msg779: "Upload completed",
        msgNetError: "Something wrong with the network",
        msgUploadSameName: "There\\'re duplicate files",
        msg781: "Pause",
        msg782: "Remove",
        msg784: "Overwrite",
        msg786: "Upload & download",
        msg787: "Uploading",
        msg788: "Pause all",
        msg789: "Delete all",
        msg792: "Quick reply",
        msg794: "View History",
        msg796: "There\\'s no message yet",
        msg797: "Info management --",
        msg798: "Info management",
        msg799: "Follow updates",
        msg803: "Contact --",
        msg805: "to",
        msg806: "File",
        msg807: "Picture",
        msg808: "Video",
        msg809: "Audio",
        msg810: "Others",
        msg811: "Advanced settings",
        msg814: "Add to contacts",
        msg815: "Close keyboard",
        msg818: "My phone No.",
        msg819: "Time left:",
        msg820: "min",
        msg821: "No. of attendees:",
        msg822: "Start a teleconference",
        msg826: "Call No.:",
        msg827: "Enter the mobile number",
        msg829: "Select from the address book",
        msg830: "Call",
        msg831: "Delete the contacts",
        msg835: "Add the contacts",
        msg838: "Contacts name",
        msg839: "Phone",
        msg840: "Contacts Telephone",
        msg841: "Enterprise",
        msg842: "In which company does he/she work",
        msg843: "Department",
        msg844: "In which departement does he/she work",
        msg845: "Job title",
        msg846: "What is his/her job title?",
        msg850: "Connecting...",
        msg851: "Add attendees",
        msg852: "End the conference",
        msg855: "recalling",
        msg856: "Continue dialing",
        msg857: "End the call",
        msg858: "Cloud phone",
        msg861: "Cloud phone conference",
        msg863: "Address book",
        msg870: "Delete all",
        msg876: "Empty",
        msg877: "Recycle bin",
        msg882: "Renew:",
        msg883: "1 year",
        msg884: "3 years",
        msg885: "5 years",
        msg886: "Pay",
        msg887: "Purchase the space:",
        msg893: "Exit personal settings",
        msg894: "Mobile app download",
        msg895: "OATOS QR Code",
        msg897: "Scan QR Code to download",
        msg898: "Support iOS & Andorid",
        msg899: "OATOS Android clients",
        conferencePlugDown: "Download the video conference plug-ins",
        installOnline: "Online installation",
        msg900: "Client download",
        msg901: "Destop client",
        msg902: "Suitable for: Android 2.3 and above",
        msg903: "New version: 2.6.0  Size：16.95M",
        msg904: "Installation:",
        msg905: "Scan QR Code on the left to download and install",
        msg906: "Download package to your computer, and install it in your phone",
        msg907: "OATOS PC desktop clients download",
        msg908: "OATOS iPhone clients",
        msg910: "Surport：iOS 5.0 above",
        msg911: "Latest version：2.6.0 Size：6.4M",
        msg913: "Go to App-store",
        msg914: "Install",
        msg915: " Scan QR Code on the upside to download and install",
        msg919: "Surport：iOS 5.0",
        msg920: "Size: ",
        msg922: "Download the installation package and use iTunes to sync to iPad",
        msg923: "PC clients download",
        msg927: "Surport：WinXP/Vista/Win7/Win8",
        msg928: "Latest version:",
        msg929: "client download",
        msg930: "64-bit client download",
        msg931: "Upgrade Guide",
        msg935: "Surport：OS X 10.7.4 above",
        msg937: "Document download",
        msg938: " Help",
        msg941: "OATOS User guide v3.0",
        msg942: "OATOS Administrator guide v3.0",
        msg945: "OATOS Introduction",
        msg946: "OATOS manuals",
        msg947: "OATOS brochures",
        msg955: "Latest version：2.1.2 Size：6.09M",
        msg957: "Copy the package to the phone memory card to install directly",
        msg962: "Latest version：2.1.0 Size：2.5M",
        msg964: "Download the installation package and use iTunes to sync to iPhone",
        msg969: "Latest version：2.1.6",
        msg976: "Latest version：1.0.0 Size：4.2M",
        msg992: "Old password",
        msg993: "Password",
        msg995: "New password",
        msg997: "Re-enter new password",
        msg999: "Personal info",
        msg1001: "System setting",
        msg1004: "Version info",
        msg1007: "Sound setting",
        msg1008: "Send message",
        msg1009: "Contact message",
        msg1010: "Video call",
        msg1011: "Audio call",
        msg1012: "Contact sign-in",
        msg1013: "Contact sign-out",
        msg1017: "Login account",
        msg1018: "Online status",
        msg1019: "Online",
        msg1020: "Busy",
        msg1021: "Invisible",
        msg1022: "Signature",
        msg1024: "Change Avatar",
        msg1026: "User info",
        msg1029: "Gender",
        msg1032: "Birthday",
        msg1033: "Age",
        msg1034: "Hobby",
        msg1035: "Interests, hobbies, strengths, etc.",
        msg1036: "Work info",
        msg1037: "Job title",
        msg1038: "City",
        msg1040: "Major",
        msg1041: "Major",
        msg1043: "Enterprise or common email",
        msg1044: "Telephone",
        msg1045: "Inline No.",
        msg1046: "Cellphone",
        msg1047: "Cellphone",
        msg1051: "Current version",
        msg1052: "新版功能",
        msg1053: "新版的视频会议功能",
        msg1054: "开会沟通更加高效方便",
        msg1055: "后台管理中新增了用户批量导入功能",
        msg1056: "添加用户更加快捷方便",
        msg1057: "聊天框中可以直接发送本地文件或者云盘中的文件",
        msg1058: "文档协同更加简单",
        msg1059: "新版的文件夹和多文件下载功能",
        msg1060: "不用等待即可下载文件夹和大文件",
        msg1061: "添加外链权限限制",
        msg1062: "关联要分享的云盘文件权限",
        msg1063: "文件共享更加安全",
        msg1064: "版本",
        msg1065: "全新的管理员后台设计",
        msg1066: "全面提升管理员的管理能力和操作体验",
        msg1067: "新增管理员前端文件夹权限设置功能",
        msg1068: "文件夹权限收放更自如",
        msg1069: "优化角色权限和二级管理员配置",
        msg1070: "权限分配更合理",
        msg1071: "新增个人文件空间开关功能",
        msg1072: "个人文件空间管理更便捷",
        msg1073: "优化视频会议",
        msg1074: "会议界面更美观",
        msg1075: "新增外链上传功能",
        msg1076: "文件共享随心所欲",
        msg1078: "上传文件到企业文件目录时新增了通知同事的功能",
        msg1079: "上传的文件可以以消息或邮件方式通知指定的人员",
        msg1080: "新增外链邮件通知功能",
        msg1081: "用户可以将分享外链直接以邮件方式发送到指定邮箱",
        msg1082: "新增外链编辑功能",
        msg1083: "便于用户对已分享的外链设置进行修改",
        msg1084: "新增文件模块使用说明",
        msg1085: "便于用户了解各产品各模块的具体功能",
        msg1086: "文件增加备注功能",
        msg1087: "用户可以为选定的文件编辑备注说明",
        msg1088: "方便多人协作办公",
        msg1089: "上传同名文件时",
        msg1090: "新增",
        msg1091: "重命名、覆盖、删除",
        msg1092: "选项",
        msg1093: "方便用户对同名文件做适当处理",
        msg1095: "用户界面和产品功能全面升级",
        msg1096: "将带给您全新的用户体验",
        msg1097: "云盘文件新增详细信息展示界面",
        msg1098: "信息获取更轻松",
        msg1099: "云盘文件新增快捷操作入口",
        msg1100: "办公操作更便捷",
        msg1101: "优化文件搜索功能",
        msg1102: "文件定位更快捷",
        msg1103: "优化文件版本管理",
        msg1104: "历史记录、版本恢复",
        msg1105: "功能",
        msg1106: "文件维护更给力",
        msg1107: "即时通讯聊天框自动叠加",
        msg1108: "多人聊天更简便",
        msg1109: "新增用户信息名片",
        msg1110: "用户信息更醒目",
        msg1111: "优化消息管理模块",
        msg1112: "消息管理更直观",
        msg1113: "企业文件新增文件关注功能",
        msg1114: "让用户实时掌控文档的状态变更",
        msg1115: "企业文件新增文件收藏功能",
        msg1116: "提升用户的文档管理体验",
        msg1117: "个人文件新增文件复制功能",
        msg1118: "个人文件可以轻松复制到企业云盘",
        msg1119: "新增上传下载模块",
        msg1120: "实时显示文件上传/下载状态",
        msg1121: "并记录上传/下载信息",
        msg1122: "新版不支持增强版登录.",
        msg1123: "Department",
        msg1124: "Job title",
        msg1126: "Take a photo",
        msg1129: "Ext",
        msg1135: "Add frequent contacts",
        msg1137: "Delete frequent contacts",
        msg1139: "Frequent contacts",
        msg1154: "Department: ",
        msg1155: "Post: ",
        msg1156: "Inline No.",
        msg1160: "Space left",
        msg1161: "Purchase the value-added service",
        msg1162: "Account management",
        msg1163: "Sign out",
        msg1168: "Remove frequent contacts",
        msg1176: "Please give a description about the files you want to upload",
        msg1177: "within 20 characters",
        msg1180: "Preview",
        msg1188: "Hotline",
        msg1189: "Share links center",
        msg1190: "File info",
        msg1193: "Expiration date",
        msg1194: "Suggestions",
        msg1195: "Online service",
        msg1196: "Question feedback",
        msg1197: "Please enter the password to preview",
        msg1199: "Sorry",
        msg1200: "The file doesn\\'t exist",
        msg1202: "System error",
        msg1203: "please try again later",
        msg1204: "Waiting",
        msg1205: "Upload failed",
        msg1208: "Please upload the files",
        msg1209: "File name",
        msg1226: "Congratulations!",
        msg1227: "Sorry",
        msg1232: "Image loading... ",
        msg1233: "Turn down",
        msg1234: "Turn up",
        msg1235: "Restore",
        msgToSmall: "最小化",
        msg1236: "Previous",
        msg1237: "Next",
        msg1238: "Left rotation",
        msg1239: "Right rotation",
        msg1240: "Print",
        msg1241: "Full screen",
        msg1242: "新增关注、外链、收藏文件夹中文件路径显示，文件预览功能，屏蔽属性栏显示;",
        msg1243: "屏蔽企业文件属性栏操作功能;",
        msg1244: "刷新功能优化为刷新当前目录;",
        msg1245: "新增企业文件复制功能;",
        msg1246: "优化上传列表显示方式;",
        msg1247: "管理员后台增加日志管理功能;",
        msg1248: "修改部分BUG;",
        msgGoBack: "goback",
        msgCanNotContactUser: "无法联系到该用户！",
        msgEnterAccountOrName: "请输入账号或者真实姓名",
        msgUserNumber: "企业用户总数",
        deleteFileTip: "The operation cannot be restored, are you sure to delete?",
        emptyFileTip: "Are you sure to empty the Recycle Bin? Back It won't restore files after emptying the Recycle Bin!",
        restoreFileTip: "Are you sure to restore it ?",
        msgDeleteFail: "Failed to delete",
        msgRepasswordError: "The passwords don\\'t match!",
        msgPasswordError: "Wrong password!",
        msgSaveFail: "Failed to save!",
        msgSaveSuccess: "Saved successfully",
        msgCreateFail: "Failed to create! Please try again later",
        msgEditPermConfirm: "This permission will be apply to the current parent folders and its all subfolders",
        msgCopySuccess: "Copied successfully",
        msgPageLoadError: "Load the content failed! Please refresh and retry",
        msgRequestExpire: "The network isn\\'t stable! Please try again later",
        msgSysAbnormal: "Something goes wrong, please try again later.",
        msgServerError: "System error",
        msgComming: "There\\'re new messages",
        msgAddSucc: "Added successfully",
        msgAddFail: "Failed to add ",
        msgDelSucc: "Deleted successfully",
        msgDelFail: "Failed to delete ",
        msgPersonDiskClose: "Your personal file has been disabled by the administrator",
        msgAccountLoginOther: "Your account has been signed in somewhere else",
        msgFileHaveExist: "Already existed",
        msgEntFile: "Enterprise files",
        msgPersonFile: "Personal files",
        msgStatusOnline: "Online",
        msgStatusBusy: "Busy",
        msgStatusLeave: "Offline",
        msgStatusCorbet: "Invisible",
        msgEntEmpty: "Enterprise name is required",
        msgEntLengthError: "Enterprise name must be consist of 2~50 characters or numbers",
        msgEntRegisted: "This enterprise is already existed",
        msgEntFormatError: "Cannot use the special characters for the enterprise name",
        msgEntSpacesError: "There should be no space between the beginning and ending of the enterprise name",
        msgAccountEmpty: "The account is required",
        msgAccountLocked: "The account is locked",
        msgAccountLengthError: "The account must be consist of 2~50 characters or numbers",
        msgAccountSpacesError: "There should be no space between the beginning and ending of the account",
        msgPasswordEmpty: "The password is required",
        msgPasswordLength: "The password must be consist of 6~30 characters or numbers",
        msgRepasswordEmpty: "Please re-enter your password",
        msgLoginInfoError: "The username or password you entered is incorrect",
        msgServiceExpire: "Your service has expired",
        msgRealnameEmpty: "Name",
        msgRealnameLength: "real names of 2-60 Chinese / English / characters",
        msgRealnameLengthLongError: "Real name is too long!",
        msgEmailEmpty: "Email",
        msgEmailRegisted: "The Email already exists",
        msgEmailFormatError: "Invalid email",
        msgPhoneEmpty: "The phone is required",
        msgPhoneLengthError: "The length should be 6~20 characters",
        msgValidateError: "Wrong verfication code",
        msgAgreeTerms: "Agreed with the Terms of Service and then register",
        msgNoUser: "Please select the account",
        msgSameFile: "Failed to operate! The name of the document cannot be the same",
        msgUploadNumLimit: "Upload file cannot be more than 200!",
        msgNoFile: "Please select the operation file",
        msgNoFileFolder: "Please select the file or folder",
        msgNoFolder: "Please select the folder",
        msgNoPermission2: "You have no permission!",
        msgPersonFolderExceed: "Run out of space! Please contact the administrator to expand your space",
        msgNameInjectError: "Invalid name",
        msgCreateDestFolderDeleted: "Please back up the files! The folder you created has already been deleted",
        msgNameConflict: "Name conflict!The name is already taken under the current folder",
        msgNameNull: "The name is required",
        msgDiskSizeFull: "The space is full",
        msgDiskSizeLack: "Enterprise files is running out of space!",
        msgNoFlashPlugin: "Please download and install adobe flash player before uploading, click here to install",
        msgReadNoFlashPlugin: "Please download and install adobe flash player before previewing, click here to install",
        msgDiskLessAssign: "The left space is not enough to be allocated",
        msgDiskUsedOverAssign: "The used space has over the allocated space",
        msgFolderNameConfict: "There\\'re same folders in the current folder",
        msgFolderCreateConflict: "Rename conflict! Current folder have the same name folder!",
        msgFolderNameNull: "The folder name is required",
        msgFolderNameInjectError: "Cannot use the special characters for the folder name",
        msgFolderSaveConflict: "Failed to save! The same folder exists",
        msgFolderNoExist: "The folder isn\\'t exist",
        msgFolderMoveNameConflict: "Failed to save! There\\'re same folders in the target folder",
        msgFolderDeleted: "The folder has already been deleted",
        msgParentFolderDeleted: "The parent folder has already been deleted",
        msgUploadCoverFail: "Fail to overwirte ! Please try again later",
        msgUploadRootFolder: "Cannot upload the files to the root directory",
        msgUploadConflict: "The name is already taken under the current folder! Rename or not?",
        msgFileContentInjectError: "There are inappropriate contents in this file ! Please modify and save",
        msgFileLocked: "The file has been locked",
        msgFileEditLocked: "The file has been locked and cannot edit",
        msgFileNoExist: "The file doesn\\'t exist",
        msgFileDelLocked: "The file has been locked ! Please unlock to continue the operation",
        msgFileMoveNameConflict: "Failed to move! There\\'re same files in the target folder",
        msgFileMoveSuccess: "Moved successfully",
        msgFileRoot: "Cannot store the files in the root directory",
        msgEntDefaultFolder: "Can\\'t store the files in the root directory! The file will be stored in the‘Shared folder’！",
        msgPersonDefaultFolder: "Can\\'t store the files in the root directory! The file will be stored in‘My document’！",
        msgFileDealing: "Processing, please hold on",
        msgFileTransterFail: "Failed to convert! Please try again later",
        msgFileDealComplete: "Processing completed, please click to open",
        msgFileConflict: "There\\'re files with the same name in the folder",
        msgFileDeleted: "The file cannot be found or deleted, please refresh and retry",
        msgFileVerConflict: "Version conflict",
        msgNameFileError: 'Filename cannot contain any of the following characters:  / : * ? " < > |',
        msgNameFolderError: 'Foldername cannot contain any of the following characters:  / : * ? " < > |',
        msgIsSureDel: "Are you sure to delete?",
        msgIsSureLock: "Are you sure to lock?",
        msgFileIsLockedByYou: "The file has been locked! Please unlock first",
        msgOtherUser: "Other accounts",
        msgFileIsLock: "The file has been locked",
        msgPlsContact: "Please contact",
        msgContactAdminUnlock: " or  administrator to unlock",
        msgFolder: "folder",
        msgFile: "file",
        msgIsSureUnlock: "Are you sure to unlock?",
        msgUngrpContact: "Ungrouped contacts",
        msgFileInvisible: "No permission to preview the file, or the file has already been modified or deleted",
        msgRenameNull: "The name is required",
        msgRenameForbidden: "Cannot rename",
        msgRenameOne: "Only one file or folder can be renamed one time",
        msgRenameFail: "Failed to rename",
        msgCopyToParent: "The folder has this file, please re-select the folder!",
        msgVersionEditConflict: "Failed to modify! The file has been modified by the others",
        msgVersionDelConflict: "Failed to delete failed ! The file has been modified by the others",
        msgLockFail: "Failed to lock ",
        msgLockNoFile: "Please select the file you want to lock",
        msgLockOne: "Only one file can be locked one time",
        msgUnlockFail: "Failed to unlock",
        msgUnLockOne: "Only one file can be unlocked one time",
        msgUnLockNoFile: "Please select the file you want to unlock",
        msgAttentionFail: "Failed to follow",
        msgUnAttentionFail: "Failed to unfollow",
        msgUnCollectSuccess: "Failed to remove star",
        msgCollectFail: "Failed to star",
        msgCollectSuccess: "Starred successfully",
        msgCollectFolderError: "Cannot star the folder",
        msgUnCollectFail: "Failed to star the file!",
        msgUnCollectError: "You selected has no starred files!",
        msgLinkEndtimeError: "The expiration date of share link cannot be earlier than today",
        msgLinkPasswordLength: "The length of the password should be 4~6 characters",
        msgLinkAddressEmpty: "Please enter the receivers\\' Email addresses",
        msgLinkContactEmpty: "Please select the receiver (s)",
        msgUnLinkSuccess: "Disable link successfully",
        msgMoveSuccess: "Moved successfully",
        msgMoveNoDest: "Please select the folder for moving to !",
        msgMoveToRootFolder: "Can not be moved to the root!",
        msgMoveToSub: "Failed to move! Parent folders can not be moved to its subfolders",
        msgMoveSameDirError: "Failed to move! You cannot move the file to the same directory",
        msgMoveOnFolderConflict: "Failed to move! There\\'re same folders in the target folder!",
        msgMoveOnFileConflict: "Failed to move! There\\'re same folders in the target file!",
        msgMoveOnVersionConflict: "Failed to move! The current file has already been modified by the others",
        msgMoveForbidden: "Can\\'t move!",
        msgCopyNoFile: "Please select the files you want to operate",
        msgCopyFolderError: "Cannot copy the folder",
        msgFileCopySuccess: "Copied file successfully",
        msgCompressComplete: "Compressed completed! Please click the button to download",
        msgZipComplete: "Compressed completed! Please click the button to download!",
        msgDownloadOnCompressing: "The files are compressing, please try again later",
        msgDownloadOnLargeCompressing: "The files are compressing! After completed, you will get the system messages to remind you to download",
        msgCompressFail: "Failed to compress! Please retry",
        msgSaveToFolderDeleted: "The saving routine of the current file has already been modified by the administrator! Please restore the files",
        msgMailSendFail: "Failed to send email! Please try again later",
        msgMailSendSuccess: "Sent successfully",
        msgPersonFolderClosed: "Your personal files has been closed",
        msgGetPermissionFail: "Failed to load the file permission configuration, please try again later",
        msgPermissionNoUser: "Please select the account",
        msgPermissionFail: "Failed to set the permission, please reset again.",
        msgPermissionSuccess: "Set the permission successfully",
        msgReadUnsupport: "The document doesn\\'t support preview for the moment",
        msgReadDelFile: "The picture you saw has been deleted, we\\'ll show the first picture in the picture list!",
        msgFirstPic: "The current picture is the first one!",
        msgLastPic: "The current picture is the last one!",
        msgFirstPagePic: "This\\'s the first set of pictures!",
        msgLastPagePic: "This\\'s the last set of pictures!",
        msgBigestPic: "Can not be magnified!",
        msgLeastPic: "Can not be demagnified!",
        msgEditUnsupport: "The document doesn\\'t support online editing",
        msgRecoverFail: "Failed to restore! Please try again later",
        msgRecoverSuccess: "Restored successfully",
        msgRecoverNoVersion: "Please select the file version for saving",
        msgRecoverySaveasFail: "Failed to save! Please try again later",
        msgRecoverySaveasSuccess: "Saved successfully",
        msgMarkFail: "Failed to modify the remarks, please try again later.",
        msgMarkSuccess: "You have successfully modified the remarks ! ",
        msgRecycleVerConflict: "Version conflict, please refresh and try again !",
        msgRecycleFileConflict: "There\\'re files with the same name in the target folder !",
        msgRecycleFolderConflict: "There\\'re folders with the same name in the target directory !",
        msgConfirmEmptyRecycle: "Are you sure to empty all?",
        msgShareOne: "Only one file or folder can be shared one time",
        msgUnShareOne: "Only one file or folder can be cancelled sharing one time",
        msgDeleteOnVerConflict: "Failed to delete! File version conflict",
        msgSysFileForbidden: "Sorry, you have no permission to modify the system files",
        msgSysFolderForbidden: "Sorry, you\\'ve no permission to modify the system files!",
        msgSysRenameForbidden: "Not support to rename the system files",
        msgSysDelForbidden: "Not support to delete the system files",
        msgSysMoveForbidden: "Not support to move the system files",
        msgAddUsualNoUser: "Please select the frequent contacts you want to add",
        msgAddUsualSucess: "Added successfully",
        msgAddUsualFail: "Failed to add! Please try again later",
        msgDelUsualNoUser: "Please select the frequent contacts you want to delete",
        msgDelUsualSucess: "Deleted successfully",
        msgDelUsualFail: "Failed to delete! Please try again later",
        msgChatInjectError: "Failed to send! The contents you enetered contains invalid information.",
        msgChatOnline: "You can only start video chat with online colleagues.",
        msgSendFileError: "System error ! Help us to solve this problem by sending the error report.",
        msgReceiveFileError: "Failed to receive!",
        msgFileMissed: "The file cannot be found or deleted, please refresh and retry",
        msgMeetingNoName: "The name of the conference room is required",
        msgMeetingNameConflict: "This conference room already exists",
        msgCreateMeetingFail: "Failed to create the conference.",
        msgDelMeetingFail: "Failed to deleted the conference.",
        msgOpenAttNoPermission: "No permission! Plesase contact the administrator for authorization",
        msgAttFileNoExist: "The file doesn\\'t exist! It's been modified or deleted",
        msgEditAccountFail: "Failed to modify personal data.",
        msgOriginPassError: "Invalid old password",
        msgNewPassLength: "The password should be consist of 6-30 characters",
        msgEditPassFail: "System error!Please try again later",
        msgEditPassSuccess: "You have successfully modified the password.",
        msgSysSettingSuccess: "Modified successfully",
        msgLinkNoExist: "The share link doesn\\'t exist",
        msgLinkExpire: "The share link has expired",
        msgLinkPasswordError: "Wrong password",
        msgLinkFolderConflict: "Failed to save! There\\'re folders with the same name in the current directory.",
        msgLinkSaveFail: "Failed to save",
        msgLinkDownloadDisable: "The share links cannot be downloaded",
        msgLinkDownloadNoFile: "Please select the files to download",
        msgDeptNameError: "You can only use special characters.",
        msgDeptExisted: "This department already exists",
        msgCreateDeptFail: "Failed to create the department!",
        msgDelDeptConfirm: "The department and all its sub-sectors have also been removed, all the members of the departments and sub-departments will become the ungrouped members! Are you sure to delete the department?",
        msgDelDeptFail: "Failed to delete the department!",
        msgAddAccountSuccess: "You have successfully added the members !",
        msgCreateAccNoFolder: "Please select the folder",
        msgAccSafeAuthFail: "The account information is not standardized or incomplete! Please modify and submit again",
        msgAccMunbersLimit: "You cannot create more accounts for your colleagues, please contact the administrator to purchase extra plans",
        msgAccExisted: "The account already exists",
        msgMailPhone: "Please enter a valid email address or phone number!",
        msgAccGetPermFail: "The network is unstable! Please try again later",
        msgAccEditPermNoPerm: "Please set the appropriate file permissions",
        msgAccEditPermSuccess: "Modify the permission successfully",
        msgAccEditSuccess: "You have successfully modified the account.",
        msgAccLocked: "The account has been locked",
        msgAccLockSucess: "You have successfully locked the account.",
        msgAccUnlockSuccess: "You have successfully unlocked the account.",
        msgDelAccConfirm: "Are you sure to delete this account",
        msgDelAccSuccess: "Account deleted successfully",
        msgFolder0Size: "The storage of the folder cannot less than one unit",
        msgPersonFolderLess: "The space of personal files cannot be smaller than the space used now",
        msgEntServiceExpire: "Your service has expired, please contacts the administrator to purchase extra plans",
        msgEntNotExist: "The enterprise does not exist",
        msgEditPasswordSuccess: "You have successfully modified the password!",
        msgImportFormatError: "File format is incorrect! Please download the standard template, filled correctly and then import",
        msgImportInfoError: "The imported account information is non-standard or incomplete! Please modify and import again",
        msgImportAccLenSpace: "The account shoud be consist of 2~50 characters, the beginning and the end can not use the space",
        msgImportAccountOK: "You have successfully imported the accounts !",
        msgImportGenderEmpty: "Please select the gender",
        msgImportEmailEmptyFormat: "Invalid email address",
        msgLockAdmin: "No permission! This account is the super administrator",
        msgUnlockAdmin: "No permission ! This account is the super administrator!",
        msgOperateAdmin: "No permission ! This account is the super administrator!",
        msgGetInfoFail: "The network is not stable ! Please try again later!",
        msgAdminNameEmpty: "Please enter your name",
        msgAdminPhoneEmpty: "Phone is required",
        msgAdminPhoneLength: "Phone number (11 characters) or landline numbers (area code - phone number)",
        msgAdminEmailFormatError: "Email format is unnormal",
        msgAccIsAdmin: "This account has already been authorized as the administrator.",
        msgAdminCreateOk: "You have successfully created the administrator !",
        msgAdminSettingGetInfoFail: "The network is not stable ! Please try again later!",
        msgAdminSettingNoFolder: "Please set the folders need to be managed by the administrator",
        msgAdminEditOk: "You have successfully modified the administrator!",
        msgAdminChangeOk: "You have successfully changed the administrator!",
        msgAdminLockOk: "Locked successfully",
        msgAdminUnlockOk: "Unlocked successfully",
        msgAdminDelOk: "Administrator deleted successfully",
        msgDomainTestFail: "Domain link is unavailable",
        msgDomainTestOk: "Domain link is available",
        msgDomainFail: "Failed to set the domain! Please check the domain setup information",
        msgDomainOK: "Domain setting successfully",
        msgEntEditSuccess: "You have successfully modified the enterprise information !",
        msgRoleNameEmpty: "Please name for the role",
        msgRoleNoPerm: "Please set the appropriate permissions for the role",
        msgRoleNoAcc: "Please add the accounts for the role",
        msgRoleExisted: "The role already exists",
        msgRoleCreateOk: "You have successfully created the role!",
        msgRoleEditGetInfoError: "The network is not stable ! Please try again later!",
        msgRoleEditFail: "System error! Failed to modify",
        msgRoleEditOk: "You have successfully modified the role!",
        msgRoleNameFormatError: "You can not use spaces when using Chinese, however, the space between English is allowed; but without the special characters",
        msgDelRoleConFirm: "Are you sure to delete this role",
        msgDelRoleFail: "System error! Failed to delete the role",
        msgDelRoleOk: "The role has been deleted",
        msgReset: "Reset",
        msgConfirmResetLogo: "Are you sure restore default Logo?",
        msgChangeLogoFail: "Failed to replace the LOGO",
        msgPhoneNotEnable: "Your enterprise has not activated the cloud phone yet, please contact the administrator to open",
        msgPhoneNotSetting: "Please add your phone number first: click on the profile picture -> Account Management -> Job Information -> phone numbers, to add",
        msgPhoneTimeLess: "The minutes of the cloud phone for your enterprise has been used up, please contact the administrator for extra plans",
        msgQueryPhoneRecord: "Call Query",
        msgUnConnect: "Not turned",
        msgConnectSuccess: "Call success",
        msgInfoDealing: "Data Processing",
        msgPhoneRecord: "Call records",
        msgLook: "Viewing",
        msgCloseUp: "Colspase",
        msgDetails: "Detail",
        msgNextStep: "Next",
        msgSubmitEdit: "Submit",
        msgResend: "Resend",
        msgClickResend: " seconds,click resend again",
        msgMailExisted: "Email address already exists！",
        msgPhoneExisted: "Cellphone already exists！",
        msgMailOrPhoneCorrect: "Please enter a valid email address or phone number！",
        msgSetPwd: "Please set your OATOS login password",
        msgCompleteEntInfo: "Please perfect the basic information of your enterprise",
        msgInputNewPwd: "Please enter a login password",
        msgValitdateTimeOut: "Authentication timeout!Please resend the verification code and verify again!",
        msgFolderSpaceOver: "The target folder is out of space!",
        msgGetPwd: "Forget your password?",
        msgLoginMailOrPhone: "Your login account: E-mail address or phone number",
        msgAskQuestion: "If you have any questions, please contact customer service: ",
        msgInviteColleague: "Invite colleagues to join",
        msgColleagueMailOrPhone: "Colleague\\'s e-mail address/phone number",
        msgColleagueInfo: "Colleague Info",
        msgUsualMailOrPhone: "Your email address or cellphone",
        msgMailOrPhone: "Email address / cellphone",
        msgSendValiInfo: "Send the authentication info",
        msgBackLogin: "Return to the login page",
        msgChangePwdOk: "Password changed successfully!",
        msgTips: "Warm tips",
        msgLoginNow: "Login now",
        msgRegisterS: "Register&nbsp;&nbsp;",
        msgAccountLogin: "The login already has an account",
        msgAccountReg: "Register",
        msgForgetPwd: "Forgot password",
        msgLoginS: "Login&nbsp;&nbsp;",
        msgShiftLogin: "Switch to login page",
        msgOldLogin: "Old version",
        msgLoginPwd: "Login password",
        msgEntName: "Enterprise name",
        msgMailOrPhoneOrAccount: "Account/Email address/Cellphone",
        msgNewLogin: "New version",
        msgEntNameComplete: "Suggest to enter the full name of the enterprise ",
        msgContact: "Contacts",
        msgContactNotEmpty: "Contact can't be empty",
        msgContactWay: "Contact",
        msgContactWayNotEmpty: "Contact can not be empty ",
        msgMailMobilePhone: "Email addressCellphoneTelephone",
        msgPrevStep: "Back",
        msgLoginDiskPwd: "Enter login password",
        msgInputPwdAgain: "Re-enter password",
        msgFinish: "Finished",
        msgEntRegSuccess: "Enterprise registered successfully!",
        msgLoginAccount: "Login Account",
        msgMailMessageSent: "the system has sent a verification email to {{mail}} , please login your email to see!",
        msgSenconds: "seconds",
        msgInputPhoneValidate: "Please enter the phone verification code",
        msgResendValidate: "Resend verification code",
        msgSubmitValiCode: "Submit verification code",
        msgAboutUs: "About us",
        msgLogin: "Login",
        msgRegister: "Register",
        msgMailPhoneToLogin: "E-mail registration is recommended to use",
        msgDoubtConsult: "Any questions,please feel free to contact us",
        msgCSOnline: "Online Service：",
        msgOrCallPhone: "Call：",
        msgContactCS: "The above methods cannot retrieve password,please contact the custumer service",
        msgPhone: "Telephone",
        msgMail: "Email",
        msgReadClause: "Please read the Terms of Service",
        msgClickToMessage: "Click here to send a message",
        msgDownloadFile: "Download files",
        msgDownloadRoute: "Download path",
        msgChooseRoute: "Please choose the path",
        msgBrowser: "Browse",
        msgDownload: "Download",
        msgCancel: "Cancel",
        msgLocalPhoto: "Local photos",
        msgSaveImg: "Save picture",
        msgOatosUpgrade: "OATOS upgrade",
        msgOatosUpgrading: "Please wait while upgrading ...",
        msgChooseValidate: "Validate email or phone",
        msgChooseMailValidate: "validate email",
        msgChoosePhoneValidate: "validate phone",
        msgUsualMailValidate: "Email address verification",
        msgPhoneValidate: "Valid phone number verification",
        msgValidate: "Verification&nbsp;",
        msgValidated: "Authenticated",
        msgLoginValidate: "Login verification",
        msgValidateBenifit: "why need to validate email and phone?",
        msgValidateDescription: "&nbsp;&nbsp;OATOS account system has upgraded，after you validate email and phone，enjoy better security and functional experience. Validated email address and phone number, you can: ",
        msgUseForLogin: "Can be as the login account to log in OATOS directly",
        msgUseForGetPwd: "Can easily find OATOS login password",
        msgMoreSecurity: "Can provide more security",
        msgValidateMail: "why need to validate email?",
        msgValidateMailDescription: "&nbsp;&nbsp;OATOS account system has upgraded，after you validate email ，enjoy better security and functional experience. Validated email address, you can: ",
        msgMailMoreSecurity: "优先获得新功能体验或活动优惠.",
        msgValidatePhone: "为什么要验证手机号？",
        msgValidatePhoneDescription: "&nbsp;&nbsp;OATOS account system has upgraded，after you validate email and phone，enjoy better security and functional experience. Validated email address and phone number, you can: ",
        msgPhoneMoreSecurity: "优先体验云电话功能。",
        msgRegAgain: "The authentication infomation is lost, please re-",
        msgAccountUsed: "Account has been used",
        msgEntNameUsed: "The Enterprise has been registered",
        msgRecycleEmpty: "No files in the Recycle Bin",
        msgAttentionEmpty: "No followed files",
        msgLinkEmpty: "No share link files",
        msgFavoriteEmpty: "No starred files",
        msgSearchEmpty: "No items match the current search",
        msgNoPermission: "You have no permission",
        msgMeetingRoom: "Meeting room",
        msgEditFail: "Failed to modify",
        msgEditOK: "Modified successfully",
        msgInputDeptName: "Please enter a valid department name!",
        msgMyDoc: "My document",
        msgMyPic: "My pictures",
        msgReceiveFiles: "Received files",
        msgSendFiles: "Sent files",
        msgShareFolder: "Shared folders",
        msgSimMyDoc: "我的文档",
        msgSimMyPic: "我的图片",
        msgSimReceiveFiles: "接收的文件",
        msgSimSendFiles: "发送的文件",
        msgSimShareFolder: "共享文件夹",
        msgTraMyDoc: "我的文檔",
        msgTraMyPic: "我的圖片",
        msgTraReceiveFiles: "接收的文件",
        msgTraSendFiles: "發送的文件",
        msgTraShareFolder: "共享文件夾",
        msgEngMyDoc: "My document",
        msgEngMyPic: "My pictures",
        msgEngReceiveFiles: "Received files",
        msgEngSendFiles: "Sent files",
        msgEngShareFolder: "Shared folders",
        msgFolderNameError: "The root folder can not be named folder name reserved for the system!",
        msgLeave: "leave",
        msgOffline: "offline",
        msgAll: "All",
        msgCurrent: "Current",
        msgLangSetting: "Language",
        msgLanguage: "English",
        msgChineseCn: "中文简体",
        msgChineseTw: "中文繁體",
        msgEnglish: "English",
        msgEntFileSize: "Enterprise files storage",
        msgPersonalFileSize: "Personal files storage",
        msgCurrentUsersNumber: "The current number of users",
        msgLinkFlow: "Share link flow",
        msgShareFiles: "Share Files",
        msgEntFolder: "Enterprise Folder",
        msgPersonFolder: "Personal Folder",
        msgAddDelUser: "Add/Delete User",
        msgSearchResults: "Search Results",
        msgEntFileDirectory: "Enterprise Folder",
        msgInfoTip: "Information Tips",
        msgCreate: "Create",
        msgRecycle: "Remove to Recycle",
        msgRestoreVersion: "Restored version",
        msgCreateLink: "Create a new Link",
        msgCreateTxt: "New Text",
        msgOldPwdCorrect: "Old password is Correct!",
        msgNewSubDept: "New sub-sectors",
        msgSortDept: "Sort department",
        msgDelDept: "Delete departments",
        msgSuperAdmin: "Super Administrator",
        msgSuperAdminIs: "The user is super administrator!",
        msgAdminIs: "The user is administrator",
        msgUnlockAccount: "Unlock Account",
        msgLockAccount: "Lock Account",
        msgNormal: "Normal",
        msgUngroupContact: "Ungrouped Contacts",
        msgAdmin: "Administrator",
        msgSecAdmin: "Second Administrator",
        msgAuth: "Authentication Service",
        msgSecurityUpload: "Encryption Upload",
        msgSecPwdTip: "password length of 4 to 6",
        msgPwdInputTip: "Please enter the encryption password!",
        msgInputLoginPwd: "Please enter a new login password",
        msgInputLoginPwdAgain: "Please enter a new login password again",
        msgErrorValidationCode: "Verification code error",
        msgBBS: "Feedback",
        msgErrorWaiting: "send authentication information can not be duplicated in a minute.",
        msgMailBinded: "The mailbox has been bound by other users!",
        msgMailFormatError: "Please enter a valid email address",
        msgMobileFormatError: "Please enter the correct phone number",
        msgMobileBinded: "The cellphone already exists ! <br/> Please change another one to verify again.",
        msgMailBinded: "The Email already exists ! <br/>Please change another one to verify again.",
        msgNewMessage: "You have new messages",
        msgEmailBindSucc: "Mailbox Authentication is successful!",
        msgEmailBindFail: "Email Authentication failed!",
        msgPhoneBindSucc: "phone number to bind success!",
        msgMinute: "minutes",
        msgPerson: "people",
        msgStartAll: "Start All",
        msgChooseDelContacts: "Please select the contacts you want to delete",
        msgFileNoSave: "The document has not been saved, are you sure to close ?",
        msgWebsiteTitle: "OATOS",
        msgCreateFileTitle: "New Document - OATOS enterprise cloud disk",
        msgViewerTitle: "File viewer - OATOS enterprise cloud disk",
        msgShareTitle: "Shared Document - OATOS enterprise cloud disk",
        msgLoginTitle: "User login - OATOS enterprise cloud disk",
        msgRegisterTitle: "User Registration - OATOS enterprise cloud disk",
        msgAdminTitle: "Manage - OATOS enterprise cloud disk",
        msgGetPwdTitle: "Forgot your password - OATOS enterprise cloud disk",
        msgZipNotFiles: "there is no file in this folder!",
        msgEntAuthFirst: "uncertified companies can not bind to display numbers !",
        msgWaitAuthPass: "your enterprise certification has not been approved, please wait patiently or contact customer service!",
        msgNewbieHelp: "Help",
        msgFreeReg: "Register for Free",
        msgInputContactTip: "Please enter a real business contacts.",
        msgAccountNotExist: "Account does not exist!",
        msgAccountNotActive: "Account not active",
        msgAccountDeleted: "account has been deleted.",
        msgAdminName: "Admin realname",
        msgAdminNameTip: "Please enter your real name",
        msgInputContactTel: "Telephone",
        msgInputContactTelTip: "Please enter your phone or landline number, landline please press the format such as 0755-12345678",
        msgInputEmail: "Email Address",
        msgPwdResetFail: "I am sorry that the account is not activated, the password reset failed!",
        msgOperateFail: "Operation failed!",
        msgZipMaxSize: "you want to compress files over 100MB, please download a single file!",
        msgShareCenter: "Share Center",
        msg1191: "Delete success!",
        msgRecycleFile: "Recycle bin",
        msgFileOrFolder: "File or folder",
        msgOperator: "Operator",
        msgOperateTime: "Operate Time",
        msgStartSearch: "Start Search",
        msgFileSearchTitle: "Please input the file name",
        msgRestoreAllFiles: "Restore all files",
        msgEmptyAllFiles: "Delete all files",
        msgDateRangeErr: "Sorry ! start time can not be greater than the end time!",
        msgEntAddrErr: "enterprise address format is incorrect!",
        msgLinkPwdErr: "share link password format is incorrect! must be word/number/underscore!",
        msgFormatErr: " format is incorrect!",
        msgRealNameErr: "real name format is incorrect!",
        msgUnAuthErr: "unauthorize email or phone number, login fail!",
        msgActiveUser: "Active account",
        msgUploadMaxErr: "I\\'m sorry OATOS largest web version of the file can upload 500M, larger files please use the Window client upload!",
        msgDialStopErr: "You have an ongoing conference call dial or temporarily not turn off cloud phone!",
        msgSortOK: "Sort success!",
        msgSortFail: "Sort failed!",
        msgSelectQueryItem: "Please select Filters",
        msgRenameOK: "Rename success!",
        msgRenameFail: "Rename failed",
        msgSelectDepartErr: "Please select the department after the new sub-sector",
        msgNewDepart: "new department",
        msgNameDuplicate: "duplicate name!",
        msgInputInvalid: "You have entered an invalid content",
        msgImgPreviewErr: "image is too large, please download the preview displayed as thumbnails!",
        msgAddUserSuccess: "Add account success!",
        msgSelectDept: "Please select a department!",
        msgActiveUserErr: "Verification code error! please contact the administrator to resend the activation email!",
        msgAccountErr: "Account is not registered",
        msgSystemMessage: "System message",
        msgNewSystemMessage: "New system message!",
        msgBirthdayError: "Date of birth is wrong!",
        msgErrorMailOver: "the number of mail you send today has exceeded the limit, the mail can not be sent!",
        msgShareLinkMailSubject: "share files notify",
        msgErrorNotHaveRead: "you do not have permission to preview!",
        msgIsEmptyRecycle: "Are you sure to empty the Recycle Bin",
        msgChatFail: "you are currently offline, can not chat or send file!",
        msgNoUserOrDeleted: "The user was deleted!",
        msgActiveUserTitle: "OATOS-Active user",
        msgResetPwdTitle: "OATOS-Reset password",
        msgSetEntInfo: "set enterprise info",
        msgLoginMaibox: "Login Email",
        msgRestoreFolderDel: "Restore failed! Files you want to restore the folder has been deleted!",
        msgUserDeleted: "The user was deleted!",
        msgSyncManage: "Sync Management",
        msgViewSync: "View sync details",
        msgCancelSync: "Cancel sync",
        msgAddSync: "Add sync",
        msgParentFolderDeleted: "Parent folder has been deleted!",
        msgCancelSyncConfirm: "After cancelling sync, the system will delete the local folders of the associated colleagues! Are you sure to continue?",
        msgSyncSetting: "Set up sync",
        msgRefresh: "Refresh",
        msgMore: "More",
        msgMyShare: "Shared files",
        msgMyFocus: "Followed files",
        msgSetPwd: "Set password",
        msgCancelPwd: "Remove password",
        msgPwd: "password",
        msgExpireDate: "Expired date",
        msgSetExpireDate: "Setting expire date",
        msgCancelExpireDate: "Remove expire date",
        msgCopyLink: "Copy link",
        msgDiskSizeMustInt: "disk size can be set only integer",
        msgSelectSyncFolder: "Select the folder to be synchronized",
        msgSelectSyncColleague: "Choose to be synchronized colleagues",
        msgSyncConfirm: "In this display synchronization confirmation",
        msgSyncSuccTip: "<li> those users will get synchronization permission, and receive  the synchronization notification message; </li> <li> current folder and its subfolders contained in the files will be synchronized to the local; </li> <li > does not remove the cloud file; </li> ",
        msgSyncUserInfo: "will be synchronized by following persons: ",
        msgAddUserErrTip: "please input valid email or phone number!",
        msgAddAccountSucc: "Add Account success",
        msgAddAccountEmailTip: "the system has sent a notification e-mail to this mailbox, please inform colleagues Login E-mail and follow the prompts to activate the mail account!",
        msgAddAccountSmsTip: "the system login password has been sent to this phone number, please notify colleagues using this phone number and password to access www.oatos.com Login OATOS enterprise cloud plate",
        msgAddAcountNoTip: "Already know how to activate the sub-account, after no longer prompt",
        msgShareSuccess: "Shared successfully!",
        msgViewSharePage: "View share page",
        msgShareLink: "Share link",
        msgSendMailMobile: "Sent to the email, mobile phone",
        msgUploadOnly: "Only allow the user to upload documents to the folder",
        msgCopyLinkTip: "Copied the following share link and sent to relevant colleagues, customers and partners! ",
        msgInputSpace: "Please enter a valid email or phone number, separated by the space",
        msgSendContent: "Send content",
        msgShareFileTip: "use [OATOS] to share the files for you",
        msgSendLink: "Send share link",
        msgSendLinkFree: "The generated share links <b> freely </b> send to:",
        msgSendMailMobileNoty: "Please enter the email address and phone number you want to send!",
        msgSendSuccess: "Sent successfully!",
        msgSendFail: "Not successfully sent!",
        msgSendWait: "You have just sent a message, wait two minutes to send again!",
        msgFolderNameLength20Error: "Folder name can not be more than 20 characters!",
        msgRemarkError: "Please enter an incorrect format 1-100 characters!",
        msgDeptLongError: "Department name is too long!",
        msgEntAddressEmpty: "Please input a enterprise address",
        msgUploadFileError: "you can not upload exe/cmd/bat files!",
        msgDownloadFileError: "you can not download exe/bat/cmd files!",
        msgChatSendError: "I am sorry chat box can send 500MB maximum file!",
        msgImportWait: "Users are importing , please wait ...",
        msgAccDuplite: "Account repeat!",
        msgFileDuplicate: "File name duplicate",
        msgMessageList: "Messages",
        msgSyncFile: "Sync File",
        msgUnknowOper: "Unknow",
        msgDomainLoginError: "domain user login info error",
        msgNoUploadPermission: "You have no upload permission in current folder!",
        msgFolderSyncSetSucc: "Setting folder synchronized successfully !",
        msgFolderSyncSetFail: "Setting folder synchronized failure!",
        msgNewDept: "New department",
        msgNewDeptTip: "please input new department name",
        msgCancelShareConfirm: "Cancel Share will make all the pages of the file sharing link failure can not be accessed. Are you sure you want to cancel Share?",
        msgChangeSpace: "Modify space",
        msgPersonSetting: "Personal setting",
        msgCompany: "Company",
        msgErrorCheckHashkey: "Data not verified by security",
        msgChangeDeptSizeOk: "Change department\\'s space success",
        msgSelectAll: "Select",
        msgDeptFolderSize: "Department Folder Size",
        msgAllocateSpace: "Allocation of space",
        msgNoLimit: "Unlimited",
        msgExpandSpace: "Expansion",
        msgAvailSize: "Allocatable space",
        msgDeptPermission: "Department folder permissions",
        msgDefaultSetting: "Default settings",
        msgCustomSetting: "Custom settings",
        msgSettingFolderSize: "Set folder size",
        msgSpaceFomat: "the space must be an integer greater than zero",
        msgProperty: "Properties",
        msgRemark: "Remarks",
        msgTempNoTip: "Temporarily no content",
        msgFileNameNull: "Please enter a file name",
        msgReminded: "concerned",
        msgDisReminded: "Not concerned",
        msgCurrentVersion: "current version",
        msgSize: "size",
        msgInclude: "contain",
        magPath: "position",
        msgUsedSize: "used space",
        msgMaxSize: "max space",
        msgRemindStatus: "concerned status",
        msgFilesNum: "files",
        msgTableEmpty: "No data in list",
        msgDataLoadFail: "load data failure!",
        msgUserNotExist: "The user does not exist or has been deleted",
        msgOpenChatView: "Double-click to open the chat window",
        msgClear: "clear",
        msgShowListInfo: "List view",
        msgShowThumbInfo: "Thumbnail view",
        msgSysBusy: "System is busy, please try again later",
        msgAddContactErr: "All users you select your department has a common contact!",
        msgMyDevice: "My device",
        msgAllSingleSync: "All single synchronization",
        msgSingleSync: "single synchronization",
        msgObjectName: "Object name",
        msgShowLogo: "LOGO Show",
        msgShowLogoPic: "Corporate LOGO (picture)",
        msgShowLogoText: "Company Name (text)",
        msgSelectUserError: "Please select colleagues to be notified!",
        msgUserActiveSucc: "User account verify success!",
        msgBuyService: "Buy service",
        msgDiskSpaceTip: "OATOS disk space has been used by <%=percent%>%, go buy center for expansion!",
        msgFolderOverflow: "Insufficient space!",
        msgRoleError: "Role name is limited to 1-60 for the character!",
        msgAdminLockError: "Super administrator can not be locked!",
        msgAdminPwdError: "You can not modify the super administrator password!",
        msgAdminDelError: "Super administrator can not be deleted!",
        msgAdminChangeDeptError: "You can not replace the super administrator department!",
        msgAdminChangePermissionError: "You can not replace the super administrator privileges!",
        msgAdminFolderSetError: "You can not modify the super administrator's personal folder size!",
        msgClearSyncUserSucc: "Clear sync between this folder and users successfully!",
        msgResendEmail: "Resend activation email",
        msgResendSms: "Re-send the activation SMS",
        msgUserActiveError: "The user has activated!",
        msgActEmailSendSucc: "Activation email sent successfully!",
        msgActSmsSendSucc: "Activate SMS sent successfully!",
        msgSecAdminLockError: "Administrators can not lock yourself!",
        msgSecAdminDelError: "Administrators can not delete your own!",
        msgSecAdminChangeDeptError: "Administrators can not modify their own department!",
        msgSecAdminSetDiskError: "Administrators can not modify your own personal folder size!",
        msgMailSendTip: "The system will send a verification email to your registered email {{mail}}, please complete the mailbox to retrieve login password",
        msgTxtInputTip: "Please enter the document content",
        msgTxtContentFail: "Get the document content failed!",
        msgPurchaseCenter: "Purchase center",
        msgContactCs: "Contact Customer Service",
        msgHasRead: "Read",
        msgSearchAllFile: "Search all files",
        msgFullTextSearch: "Text search",
        msgSingleSyncTips: "<b>Unidirectional sync:</b>Synchronized from the cloud to the local, local update does not affect the cloud",
        msgNewDocument: "New Document",
        msgEditDocument: "Edit Document",
        msgSelectPermission: "Please select privileges!",
        msgFileLengthError: "File names, folder names can not be longer than 100 characters! ",
        msgRequestDataError: "Request data is incorrect! ",
        msgSelectShareType: "Choose select type",
        msgUserUpload: "By allowing users to upload documents to the folder",
        msgFreeTry: "Free Trial",
        msgFullTxtFunc: "full text search function",
        msgInviteCode: "Submit invitation code",
        msgSimpleTip: "simple explanation",
        msgEaseUse: "functional experience does not affect your data security, please rest assured that trial. ",
        msgFullTxt500: "Open daily 500 business user experience, experience is full quota can not submit an application. ",
        msgGetYanmaiWechat: "can get real-time customer support and latest offers enterprise cloud disk by oats public number. ",
        msgMethodGetInvieteCode: "Get an invitation code method",
        msgRemindYanmai: 'micro-channel sweep the concerns "oat enterprise cloud disk"',
        msgEnterYanmai: 'enter oats public enterprise cloud plate number, send "to experience the full text search" to get an invitation code. ',
        msgSorryTrialQuota: "Sorry, trial quota of today is full, please apply again tomorrow. ",
        msgFocusYanmai: "You can still focus on enterprise cloud disk oats public support or customer service number to obtain real-time information on the latest offers. ",
        msgInputSearch: "Inter the keyword you want to search",
        msgSearchForFullTxt: "● Cloud disk for all documents to search and display all user-visible document permissions",
        msgSearchInfoQuickly: '● Quickly find relevant information in the massive document, support the use of "*" fuzzy search',
        msgSearchTip3: "● Newly uploaded document, please wait five minutes after the search, the document will be sorted according to relevance descending Show",
        msgSearchFileOrContent: "Search for a document name and content of the information contained",
        msgRelevance: "Relevance",
        msgTheDirectory: "Directory",
        msgLocateFileContent: '"Full text search" to help you quickly locate the information contained in the document content',
        msgSearchNoMatches: "No search terms that match the criteria",
        msgFreeCodeError: "Invitation code error",
        msgAllFind: "Search results",
        msgRelateResults: "Relevant results",
        msgA: "",
        msgExpandSidebar: "Expand sidebar",
        msgCloseSidebar: "Hide sidebar",
        msgSelectUploadFiles: "Please select a file to upload!",
        msgSyncFolderSearchTip: "Please enter the synchronized file folder you want to search",
        msgDaysKeepsInput: "Please enter the number of days you want to keep!",
        msgSaveVersionConfigOk: "The save of historical versions of the configuration is successful!",
        msgVersionsKeepsInput: "Please enter the number of the version you want to keep!",
        msgSaveVersionConfigFail: "The save of historical versions of configuration failed!",
        msgErrorFolderMaxSize: "Settings space of the folder is less than the used space",
        msgShareOnlyRead: "Only allow users to preview files",
        msgShareReadDownload: "Allows the user to preview and download files",
        msgInputMobilePhone: "Please enter your frequently used phone numbers or phone numbers",
        msgCodeExpired: "Verification code has expired",
        msgInputSearchContent: "Please enter the content you want to search",
        msgNameDeptError: 'Department name can not be empty and can not contain any of the following symbols:  /: * \\ "<> |?',
        msgErrorNoParentMaxSize: "You have not allocate space for the parent folder, please parent folder allocate space! ",
        msgErrorNoParentDeptMaxSize: "You have not allocate space for the higher authorities, first allocate space for the parent department! ",
        msgSelectEntSubFolder: "Please select a folder under the enterprise disk! ",
        msgPermissionDetail: "Permissions details",
        msgUser: "User",
        msgLoginTokenMiss: "Sorry! Your login credentials does not exist, please re-login!",
        msgFetchEntInfoErr: "Failed to obtain corporate information, please log on again!",
        msgFetchUserInfoErr: "Failed to obtain user information, please log on again!",
        msgAccessAdminPageError: "Sorry! You are not an administrator, the administrator can not access the page!",
        msgSelectAlready: "Chosen",
        msgSelectFolder: "Please select the folder you want to add",
        msgInputSearchFolder: "Please enter the folder you want to search",
        msgFileConverting: "The document being converted, please wait!",
        msgConvertDone: "Document conversion is complete!",
        msgFileSendFail: "Sending file failed",
        msgPermissionList: "Permission list",
        msgCurrentAccount: "Current account",
        msgAddFilePermission: "Adding file permissions",
        msgFolderName: "Folder name",
        msgPermissionContent: "Permission content",
        msgCurrentFolder: "Current folder",
        msgSelectToAuthorize: "Please select members you want to authorize",
        msgType: "Type",
        msgPermission: "Permission",
        msgMemberList: "Member list",
        msgRoleList: "Role list",
        msgDblClickToAdd: "Double-click the colleagues, department, role on left to add. ",
        msgNextPermission: 'Click "Next", set permissions. ',
        msgViewOriginImg: "查看原图",
        msgClickOpen: "点击打开",
        msgDeptRolesPermissionTips: "<b>Department</b> and <b>Role</b> permission type modified, the corresponding <b>department permission to modify</b> or <b>role permissions to modify</b> in the be modified. ",
        msgDeleteLockFileErr: "有文件已被锁定, 不能删除!",
        msgMoveLockFileErr: "有文件已被锁定, 不能移动!",
        msgCurrentPicListDetelted: "Pictures in current folder have all been deleted",
        msgSearchDeptResult: "Search result of department",
        msgSearchMemResult: "Search result of members",
        msgSearchRoleResult: "Search result of roles",
        msgShareInfo: "Share information",
        msgPersonDiskNoSpace: "Personal Folders lack of space!",
        msgSearchFileAndMark: "Search for all documents or labels",
        msgComment: "Comment",
        msgPublishComment: "Post",
        msgNickname: "Nickname",
        msgCommentPlaceholder: "Please enter the content you want to comment",
        msgAnonymity: "Anonymity",
        msgLabel: "Mark",
        msgInputLabel: "Please enter the label name you want to create",
        msgFileLabel: "File labels",
        msgOperateObj: "Operation object:",
        msgLabelName: "Label name",
        msgLabelLib: "Label library",
        msgLabelSeparate: "Multiple tags with a space or carriage return",
        msgUnfold: "Expand",
        msgFold: "Collapse",
        msgSearchFactors: "Search terms:",
        msgSearchExit: "Exit search",
        msgDocument: "Document",
        msgOperatorNameAccount: "Name or account of operator",
        msgAllType: "All types",
        msgSelectColleague: "Please select a colleague",
        msgStartDate: "Start Date",
        msgEndDate: "End Date",
        msgLabelModifySuccess: "Labels modified successfully!",
        msgMax3Labels: "一个文件最多创建三个标签！",
        msgCreateLab: "New label",
        msgDeleteLibLab: "After you remove the label, the label associated with the file will be deleted",
        msgPost: "Post",
        msgCurrentCommentCount: "The number of comments",
        msgBackup: "备份",
        msgGrpPermSetting: "群组权限设置",
        msgPermissionFolder: "Please select folders you want to set permissions",
        msgCreateFolderError: "您没有新建文件夹权限!",
        msgFileLockedByOthers: "File locked by others",
        msgOnceDownload: "You can only download 30 files once!",
        msgErrorCopyToOwn: "Folder can not be copied to subfolders"
    }
});;
define("app/commons/msg/message_zh_CN", function(require, s, m) {
    m.exports = {
        msg1: "登录",
        msg2: "注册",
        msg3: "产品介绍",
        msg4: "私有云",
        msg5: "客户案例",
        msg6: "下载中心",
        msg7: "帮助中心",
        msg8: "关于我们",
        msg9: "燕麦企业云盘",
        msg11: "互动社区",
        msg12: "关注燕麦企业云盘",
        msg13: "服务条款",
        msg14: "粤ICP证010221号",
        msg16: "版权所有",
        msg18: "企业",
        msg19: "企业名称",
        msg20: "账号",
        msg22: "密码",
        msg24: "使用HTTPS",
        msg25: "域账号",
        msg27: "立即注册",
        msg28: "获取燕麦企业云盘永久免费服务",
        msg29: "创建免费的燕麦企业云盘",
        msg30: "企业登录信息",
        msg32: "企业或项目名称",
        msg34: "管理员账号",
        msg36: "位数字、字母混合",
        msg37: "确认密码",
        msg38: "再次输入密码",
        msg40: "姓名",
        msg41: "真实姓名",
        msg43: "常用的邮箱",
        msg45: "手机或座机号码",
        msg46: "验证码",
        msg48: "换一张",
        msg49: "已经阅读并同意",
        msg50: "《燕麦企业云盘服务条款》",
        msg52: "已有燕麦账号",
        msg53: "立即登录",
        msg54: "技术支持：",
        msg55: "深圳市企业云科技有限公司",
        msg59: "已锁定",
        msg60: "已关闭",
        msg61: "操作",
        msg62: "修改权限",
        msg63: "修改密码",
        msg64: "修改资料",
        msg65: "更换部门",
        msg66: "删除账号",
        msg67: "个人文件夹设置",
        msg68: "账号设置",
        msg69: "新建账号",
        msg70: "批量导入账号",
        msg73: "性别",
        msg74: "所在部门",
        msg75: "最近登录",
        msg76: "创建者",
        msg77: "个人文件夹",
        msg79: "设置文件夹权限",
        msg80: "请选择该账号管理的文件夹!",
        msg81: "选择文件夹",
        msg82: "文件夹",
        msg83: "权限",
        msgSetPermission: "设置权限",
        msg85: "继续选择",
        msg86: "确定",
        msg87: "取消",
        msg88: "登录账号",
        msg89: "必填",
        msg93: "男",
        msg94: "女",
        msg95: "企业邮箱",
        msg97: "登录密码",
        msg101: "工号",
        msg102: "所在职位",
        msg103: "所有部门",
        msg108: "账号",
        msg113: "处理中",
        msg127: "批量导入账号结果",
        msg136: "校验",
        msg137: "重新导入",
        msg138: "的个人文件设置",
        msg139: "个人文件",
        msg140: "开启",
        msg141: "关闭",
        msg142: "关闭个人文件将删除个人文件的所有文件，请谨慎操作!",
        msg143: "个人文件夹容量",
        msg146: "密码重置",
        msg147: "新密码",
        msg148: "新密码",
        msg149: "确认密码",
        msg154: "导入模板文件",
        msg155: "选择文件",
        msg156: "删除",
        msg157: "确定导入",
        msg158: "批量导入说明",
        msg159: "请先",
        msg160: "下载导入模板",
        msg161: "填写模板内容后导入模板。",
        msg162: "下载模板",
        msg163: "导入账号及部门信息成功后，请设置账号所要管理文件夹的权限，否则账号将无法访问云盘文件。",
        msg164: "请按规范正确填写模板内容；内容不符合规范，将无法导入系统。",
        msg165: "可以在账号设置中查看账号相关信息，并设置相应文件的权限；也可在高级设置中使用角色权限批量设置文件权限。",
        msg167: "导入校验",
        msg168: "确定",
        msg169: "请输入您常用的手机号",
        msg170: "发送验证码",
        msg171: "请输入短息验证码：",
        msg174: "开通云电话会议服务",
        msg175: "温馨提示",
        msg176: "燕麦云电话会议无需任何硬件投入，直接通过客户端开会，高品质通话效果，语音清晰流畅，带给您面对面交谈的体验效果；",
        msg177: "支持一对一通话及20人以内（包含20人）的云电话会议，无需再疲于奔波于总部与工作岗位之间，让管理者真正实现了运筹帷幄之中，决胜千里之外。",
        msg178: "恭喜您开通成功！",
        msgCompere: "主持人",
        msg179: "主叫号码",
        msg180: "被叫号码",
        msg181: "开始时间",
        msgCallTime: "呼出时间",
        msgMeetingCallTime: "发起时间",
        msgConnectedTime: "接通时间",
        msg182: "结束时间",
        msgCallStatus: "通话状态",
        msgMeetingMembers: "会议人次(人)",
        msgCallLength: "通话时长(分钟)",
        msgCallTotalLength: "会议时长(分钟)",
        msgMeetingMemberPhone: "参会人员号码",
        msg183: "时长（分钟）",
        msg184: "费用（元）",
        msg185: "套餐名称",
        msg186: "购买时间",
        msg187: "套餐分钟数(分钟)",
        msg188: "单价（元）",
        msg189: "金额（元）",
        msg190: "套餐管理",
        msg191: "总时长（分钟）",
        msg192: "剩余时长(分钟)",
        msg193: "续费",
        msg194: "购买记录",
        msg195: "账单记录",
        msg196: "支付结果",
        msg197: "支付失败",
        msg198: "抱歉，您未能完成付款，请重新付款",
        msg199: "重试",
        msg200: "支付成功",
        msg201: "您已成功付款，对方将立即收到您的付款，为您开通优惠套餐",
        msg203: "开通服务",
        msg204: "开通您需要的云电话会议服务",
        msg205: "选择号码",
        msg206: "选择您需要的号码",
        msg207: "选择套餐",
        msg208: "选择您需要的套餐",
        msg209: "开通成功",
        msg210: "开通云电话成功，去体验吧",
        msg215: "使用现有号码",
        msg216: "新办电信号码",
        msg218: "呼叫显示号码是指与电话会议连接的号码。会议主持人在燕麦企业云盘上发起会议，呼叫显示号码将依次呼叫连接主持人、参会人A、参会人B等；",
        msg219: "呼叫显示号码，仅支持电信手机号码或者企业座机（总机号码）；",
        msg220: "填写电信手机号码，点击发送验证码，系统将自动发送验证码到该手机；",
        msg221: "企业座机请填写区号+企业总机号码，例如0755xxxxxxx，点击发送验证码，系统将自动呼叫您所填写的号码，进行语音验证码提示，敬请留意。",
        msg222: "100分钟送10分钟",
        msg223: "资费：0.15元/分钟",
        msg224: "立即办理",
        msg225: "300分钟送30分钟",
        msg228: "1000分钟送100分钟",
        msg232: "个性化的包月套餐任您选择，充值可享有更多优惠，管理员账号支付费用，其他参会人同时享有云电话会议功能；",
        msg233: "套餐可叠加购买，通话分钟将以套餐累积数为准，当月订购的套餐通话时间仅限当月有效，当月未使用部分不可结转至下月；",
        msg234: "更多包月优惠套餐，请咨询400-030-1108。",
        msg235: "呼叫显示号码：",
        msg237: "验证码：",
        msg238: "提交",
        msg239: "同事列表",
        msg240: "您需要查找的人",
        msg241: "查找",
        msg242: "取消搜索",
        msg243: "聊天对象",
        msg246: "无即时通讯消息",
        msg248: "聊天记录",
        msg249: "起始时间",
        msg250: "截止时间",
        msg252: "聊天日志",
        msg253: "云盘日志",
        msg254: "筛选日志",
        msg255: "操作类型",
        msg256: "全部日志",
        msg257: "登录",
        msg258: "上传",
        msg259: "下载",
        msg260: "预览",
        msg262: "分享",
        msg263: "新建",
        msg264: "编辑",
        msg265: "移动",
        msg266: "重命名",
        msg267: "精准查找",
        msg268: "查找账号",
        msg269: "只能查找一个账号",
        msg270: "选择",
        msg271: "查找文件",
        msg272: "请输入查找的文件名",
        msg276: "时间",
        msg279: "文件名/文件夹名",
        msg280: "所属文件夹",
        msg281: "请在左侧选择您要查找日志的范围",
        msg282: "注：日志中（前、后）代表文件移动前（后）、重命名前（后）相对应的文件信息",
        msgSelectQueryType: "请选择筛选项!",
        msg285: "当前服务",
        msg286: "服务项目",
        msg287: "基础服务",
        msg288: "增值服务",
        msg289: "总计",
        msg290: "使用情况",
        msg291: "联系客服购买",
        msgBuyService: "购买服务",
        msg293: "服务价格",
        msg296: "新建管理员",
        msg297: "授权账号",
        msg298: "（只能选择一个账号为管理员）",
        msg299: "选择账号",
        msg300: "授权该管理员需要管理的企业文件夹",
        msg307: "管理员权限",
        msg308: "账号设置",
        msg309: "在部门中创建管理员账号，管理该部门中其他账号",
        msg310: "角色权限设置",
        msg311: "为所属部门成员设置角色权限",
        msg312: "隐藏账号或部门",
        msg313: "隐藏所属部门账号或子部门",
        msg314: "管理员设置",
        msg315: "设置所属部门成员为管理员",
        msg316: "日志管理",
        msg317: "所属部门账号日志管理",
        msg318: "角色名称",
        msg319: "20个字符,支持中英文",
        msg321: "文件夹权限设置",
        msg323: "必选",
        msg328: "为角色添加账号",
        msg331: "继续添加",
        msg332: "处理中...",
        msg335: "修改",
        msg336: "更换管理员",
        msg337: "锁定",
        msg338: "解锁",
        msg340: "管理员设置",
        msg342: "管理员账号",
        msg343: "所属部门",
        msg345: "状态",
        msg346: "企业信息管理",
        msg347: "角色权限管理",
        msg348: "隐藏账号或部门",
        msg350: "云电话设置",
        msg351: "域设置",
        msg353: "是否开启域集成",
        msg356: "域类型",
        msg357: "域服务器地址",
        msg358: "域名",
        msg359: "域管理员账号",
        msg360: "域管理员密码",
        msg361: "域账号自动同步",
        msg364: "测试域链接",
        msg365: "保存",
        msg366: "管理文件夹",
        msg367: "授权该管理员管理的企业文件夹",
        msg373: "企业信息",
        msg374: "企业名称",
        msg375: "企业LOGO",
        msg376: "更换",
        msg378: "支持JPG、PNG、GIF格式图片大小：200x55 PX",
        msg379: "联系人姓名",
        msg380: "企业联系人真实姓名",
        msg381: "企业电话",
        msg382: "企业联系人电话号码",
        msg383: "企业邮箱",
        msg384: "企业联系人常用邮箱",
        msg385: "企业地址",
        msg386: "企业地址",
        msg387: "注册时间",
        msg393: "制作",
        msg394: "查看或修改",
        msg397: "角色权限设置",
        msg398: "新建角色权限",
        msg399: "角色",
        msg400: "角色权限",
        msg401: "创建者",
        msg402: "后台管理",
        msg403: "服务中心",
        msg405: "高级",
        msg406: "日志管理",
        msg407: "退出",
        msg408: "上传文件",
        msg409: "选择的文件",
        msg410: "请选择需要上传的文件",
        msg412: "选择需要通知的同事",
        msg413: "同时发送邮件给同事",
        msg415: "确定上传",
        msg419: "请选择权限类型",
        msg420: "权限类型",
        msg421: "仅预览",
        msg422: "仅上传",
        msg423: "仅下载",
        msg424: "预览和上传",
        msg425: "预览和下载",
        msg426: "全部",
        msg427: "自定义",
        msg428: "文件权限",
        msg435: "本地交互",
        msg436: "权限项",
        msg437: "被授权账号可以在授权文件夹内的操作",
        msg439: "在线预览office、图片、音频、视频等类型文件",
        msg441: "上传文件，有分享权限时生成上传分享",
        msg443: "下载文件、下载文件夹，有分享权限时生成下载分享",
        msg445: "生成预览分享，有上传",
        msg446: "下载权限可生成上传",
        msg447: "下载外链",
        msg449: "新建、移动、重命名文件或文件夹",
        msg451: "删除文件或文件夹",
        msg453: "客户端可调用本地软件编辑文件，保存更新到云盘",
        msg454: "权限设置",
        msg468: "分享",
        msg472: "取 消",
        msg473: "保存中...",
        msg474: "确 定",
        msg486: "2015深圳企业云科技有限公司",
        msg488: "当前版本信息：",
        msg491: "添加至选择的同事",
        msg492: "选择的同事",
        msg493: "正在取消...",
        msg494: "取消发送",
        msg495: "添加",
        msg496: "分享设置-",
        msg497: "为“",
        msg498: "”创建一个分享，将分享通过邮件或QQ发送给相关工作伙伴，一起来访问这个文件夹协同工作",
        msg499: "访问权限",
        msg501: "预览与下载",
        msg503: "分享期限",
        msg504: "访问密码",
        msg505: "（访问密码不能小于4位）",
        msg507: "取消分享",
        msg509: "生成分享",
        msg511: "通过燕麦企业云盘给您分享了外链",
        msg512: "请点击下面链接查看文件",
        msg513: "分享有效期到",
        msg514: "分享访问密码",
        msg515: "分享设置-邮件通知",
        msg516: "请输入需要分享此外链人员的邮箱地址",
        msg517: "输入多个邮件地址时请用",
        msg518: "进行区分",
        msg519: "邮件内容",
        msg522: "发送",
        msg526: "邮件发送分享",
        msg527: "访问",
        msg528: "复制",
        msg533: "请完善表格内容",
        msg534: "消息提示",
        msg535: "文件压缩中",
        msg536: "请稍候",
        msg538: "正在压缩",
        msg539: "关 闭",
        msg540: "搜索",
        msg541: "该权限将应用于当前文件夹及其所有子文件夹!",
        msg542: "选择同事",
        msg545: "同级部门列表",
        msg546: "部门列表",
        msg556: "全部清空",
        msg557: "接受",
        msg558: "拒绝",
        msg562: "打开所在文件夹",
        msg563: "已拒收",
        msg564: "即时通讯",
        msg565: "视频聊天",
        msg566: "发送文件",
        msg567: "添加至常用联系人",
        msg568: "有新的消息",
        msg569: "未知账号",
        msg572: "会议室名称",
        msg573: "参会人员",
        msg574: "参加会议",
        msg576: "视频会议",
        msg578: "会议主题",
        msg580: "新建会议室",
        msg581: "会议室名称：",
        msg582: "会议主题或编号",
        msg583: "创建会议室",
        msg585: "新建文件夹",
        renameFolder: "重命名文件夹",
        renameFile: "重命名文件",
        msg586: "请输入文件夹名称",
        msg590: "文件名",
        msg591: "文件类型",
        msg592: "文件大小",
        msg593: "创建人",
        msg594: "创建时间",
        msg595: "修改人",
        msg596: "版本管理",
        msg597: "修改时间",
        msg598: "文档处理中...",
        msg603: "关注",
        msg604: "取消关注",
        msg606: "编辑分享",
        msg609: "收藏",
        msg610: "取消收藏",
        msg613: "复制到",
        msg614: "复制",
        msg617: "在线预览",
        msg618: "查看全部",
        msg621: "更新时间",
        msg625: "收藏夹",
        msgFavFile: "收藏的文件",
        msg626: "排序",
        msg627: "升序",
        msg628: "降序",
        msg630: "后退",
        msg631: "前进",
        msg638: "详细信息",
        msg644: "分享地址",
        msg645: "权限管理",
        msg647: "查看更多",
        msg648: "备注说明",
        msg649: "没有备注",
        msg654: "文件所在位置",
        msg655: "恢复",
        msg656: "关注的文件",
        msg661: "分享的文件",
        msg662: "收 藏 夹",
        msg663: "回收站",
        msg681: "被授权者",
        msg686: "当前",
        msg687: "当前文件",
        msg688: "所有文件",
        msg690: "已选中",
        msg691: "项",
        msg692: " 个文件夹",
        msg693: " 个文件",
        msg694: "请选择要预览的文件",
        msg695: "未设置分享",
        msg696: "设置",
        msg704: "新建文件",
        msg706: "版本号",
        msg709: "使用说明",
        msgNoPermissonTip: "无操作权限",
        msg710: "企业办公文件存储在这里，即时共享给同事协同办公",
        msg711: "管理员可为企业文件中的文件夹设置权限，设置了权限的文件夹可被关联的账号访问",
        msg712: "账号可依据授权对文件进行操作，如操作文件时系统提示没有权限，请联系管理员申请权限",
        msg713: "您的个人文件可以存储在这里，其他同事看不到您的个人文件",
        msg714: "个人文件占用企业云盘空间",
        msg715: "企业文件不能复制到个人文件，个人文件可以复制到企业文件",
        msg743: "权限设置",
        msg744: "请选择需要授权的账号，并设置权限",
        msg750: "清空列表",
        msg777: "恢  复",
        msg778: "另存为",
        msg779: "上传完成",
        msgNetError: "网络错误",
        msgUploadSameName: "存在重名文件",
        msg781: "停止",
        msg782: "移除",
        msg784: "覆盖",
        msg786: "上传下载",
        msg787: "上传中",
        msg788: "全部停止",
        msg789: "全部删除",
        msg792: "快速回复",
        msg794: "查看历史",
        msg796: "暂时还没有文件消息",
        msg797: "信息管理 --",
        msg798: "消息中心",
        msg799: "关注更新",
        msg803: "联系人 --",
        msg805: "至",
        msg806: "文件",
        msg807: "图片",
        msg808: "视频",
        msg809: "音频",
        msg810: "其他",
        msg811: "高级搜索",
        msg814: "添加到通讯录",
        msg815: "关闭键盘",
        msg818: "我的号码",
        msg819: "剩余时间",
        msg820: "分钟",
        msg821: "其他参会人员的号码：",
        msg822: "开始云电话会议",
        msg826: "对方的号码：",
        msg827: "请输入对方的手机号码",
        msg829: "从通讯录中选择",
        msg830: "呼叫",
        msg831: "删除联系人",
        msg835: "添加联系人",
        msg838: "联系人姓名",
        msg839: "手机",
        msg840: "联系人手机号码",
        msg841: "企业",
        msg842: "联系人所在企业",
        msg843: "部门",
        msg844: "联系人所在部门",
        msg845: "职务",
        msg846: "联系人当前职务",
        msg850: "联通中...",
        msg851: "添加人员",
        msg852: "结束会议",
        msg855: "重拨",
        msg856: "继续拨号",
        msg857: "结束通话",
        msg858: "云电话",
        msg861: "云电话会议",
        msg863: "通讯录",
        msg870: "彻底删除",
        msg876: "清空",
        msg877: "回收站",
        msg878: "企业文件",
        msg879: "个人文件",
        msg882: "续 费：",
        msg883: "一年",
        msg884: "三年",
        msg885: "五年",
        msg886: "支付",
        msg887: "购买空间：",
        msg893: "退出个人设置",
        msg894: "移动端下载",
        msg895: "燕麦企业云盘二维码",
        msg897: "扫描二维码下载APP",
        msg898: "支持iOS和Android系统",
        msg899: "企业云盘安卓版",
        conferencePlugDown: "视频会议插件下载",
        installOnline: "在线安装",
        msg900: "燕麦客户端下载",
        msg901: "客户端",
        msg902: "适合：Android 2.3及 以上",
        msg903: "最新版本：2.6.0 软件大小：16.95M",
        msg904: "安装方式",
        msg905: "手机扫描左方二维码直接下载安装",
        msg906: "安装包下载到电脑中,通过豌豆荚/91等手机助手软件进行安装",
        msg907: "企业云盘客户端下载",
        msg908: "企业云盘iPhone版",
        msg910: "适合：iOS 5.0 以上",
        msg911: "最新版本：2.6.0 软件大小：6.4M",
        msg913: "进入App Store搜索",
        msg914: "安装",
        msg915: "手机扫描左上方二维码直接下载安装",
        msg919: "适合：iOS 5.0",
        msg920: "软件大小",
        msg922: "下载安装包并使用iTunes同步到iPad",
        msg923: "桌面客户端下载",
        msg927: "适合：WinXP/Vista/Win7/Win8",
        msg928: "最新版本",
        msg929: "客户端下载",
        msg930: "64位客户端下载",
        msg931: "升级指南",
        msg935: "适合：OS X 10.7.4 以上",
        msg937: "文档下载",
        msg938: "帮助文档",
        msg941: "企业云盘用户指南v3.0",
        msg942: "企业云盘管理员指南v3.0",
        msg945: "介绍文档",
        msg946: "产品手册",
        msg947: "宣传手册",
        msg955: "最新版本：2.1.2 软件大小：6.09M",
        msg957: "将安装包复制到手机内存卡直接安装",
        msg962: "最新版本：2.1.0 软件大小：2.5M",
        msg964: "下载安装包并使用iTunes同步到iPhone",
        msg969: "最新版本：2.1.6",
        msg976: "最新版本：1.0.0 软件大小：4.2M",
        msg992: "旧密码",
        msg993: "当前使用的密码",
        msg995: "新的密码",
        msg997: "重新输入新密码",
        msg999: "个人资料",
        msg1001: "系统设置",
        msg1004: "版本信息",
        msg1007: "声音设置",
        msg1008: "发送消息提示音",
        msg1009: "接收消息提示音",
        msg1010: "视频通话提示音",
        msg1011: "语音通话提示音",
        msg1012: "同事登录提示音",
        msg1013: "同事退出提示音",
        msg1017: "登录账号",
        msg1018: "在线状态",
        msg1019: "在线",
        msg1020: "忙碌",
        msg1021: "隐身",
        msg1022: "个性签名",
        msg1024: "更换头像",
        msg1026: "个人信息",
        msg1029: "性 别",
        msg1032: "出生日期",
        msg1033: "真实年龄",
        msg1034: "个人兴趣",
        msg1035: "个人兴趣、爱好、特长等",
        msg1036: "工作信息",
        msg1037: "当前职位",
        msg1038: "所在城市",
        msg1040: "专业类型",
        msg1041: "专业类型",
        msg1043: "企业内部邮箱或常用邮箱",
        msg1044: "座机号码",
        msg1045: "企业内部分机号码",
        msg1046: "手机号码",
        msg1047: "手机号码",
        msg1051: "当前版本",
        msg1052: "新版功能",
        msg1053: "新版的视频会议功能",
        msg1054: "开会沟通更加高效方便",
        msg1055: "后台管理中新增了用户批量导入功能",
        msg1056: "添加用户更加快捷方便",
        msg1057: "聊天框中可以直接发送本地文件或者云盘中的文件",
        msg1058: "文档协同更加简单",
        msg1059: "新版的文件夹和多文件下载功能",
        msg1060: "不用等待即可下载文件夹和大文件",
        msg1061: "添加分享权限限制",
        msg1062: "关联要分享的云盘文件权限",
        msg1063: "文件共享更加安全",
        msg1064: "版本",
        msg1065: "全新的管理员后台设计",
        msg1066: "全面提升管理员的管理能力和操作体验",
        msg1067: "新增管理员前端文件夹权限设置功能",
        msg1068: "文件夹权限收放更自如",
        msg1069: "优化角色权限和二级管理员配置",
        msg1070: "权限分配更合理",
        msg1071: "新增个人文件空间开关功能",
        msg1072: "个人文件空间管理更便捷",
        msg1073: "优化视频会议",
        msg1074: "会议界面更美观",
        msg1075: "新增分享上传功能",
        msg1076: "文件共享随心所欲",
        msg1078: "上传文件到企业文件目录时新增了通知同事的功能",
        msg1079: "上传的文件可以以消息或邮件方式通知指定的人员",
        msg1080: "新增分享邮件通知功能",
        msg1081: "用户可以将分享外链直接以邮件方式发送到指定邮箱",
        msg1082: "新增分享编辑功能",
        msg1083: "便于用户对已分享的外链设置进行修改",
        msg1084: "新增文件模块使用说明",
        msg1085: "便于用户了解各产品各模块的具体功能",
        msg1086: "文件增加备注功能",
        msg1087: "用户可以为选定的文件编辑备注说明",
        msg1088: "方便多人协作办公",
        msg1089: "上传同名文件时",
        msg1090: "新增",
        msg1091: "重命名、覆盖、删除",
        msg1092: "选项",
        msg1093: "方便用户对同名文件做适当处理",
        msg1095: "用户界面和产品功能全面升级",
        msg1096: "将带给您全新的用户体验",
        msg1097: "云盘文件新增详细信息展示界面",
        msg1098: "信息获取更轻松",
        msg1099: "云盘文件新增快捷操作入口",
        msg1100: "办公操作更便捷",
        msg1101: "优化文件搜索功能",
        msg1102: "文件定位更快捷",
        msg1103: "优化文件版本管理",
        msg1104: "历史记录、版本恢复",
        msg1105: "功能",
        msg1106: "文件维护更给力",
        msg1107: "即时通讯聊天框自动叠加",
        msg1108: "多人聊天更简便",
        msg1109: "新增用户信息名片",
        msg1110: "用户信息更醒目",
        msg1111: "优化消息管理模块",
        msg1112: "消息管理更直观",
        msg1113: "企业文件新增文件关注功能",
        msg1114: "让用户实时掌控文档的状态变更",
        msg1115: "企业文件新增文件收藏功能",
        msg1116: "提升用户的文档管理体验",
        msg1117: "个人文件新增文件复制功能",
        msg1118: "个人文件可以轻松复制到企业云盘",
        msg1119: "新增上传下载模块",
        msg1120: "实时显示文件上传/下载状态",
        msg1121: "并记录上传/下载信息",
        msg1122: "新版不支持增强版登录.",
        msg1123: "部门",
        msg1124: "职位",
        msg1126: "拍照",
        msg1129: "内线",
        msg1135: "添加常用联系人",
        msg1137: "删除常用联系人",
        msg1139: "常用联系人",
        msg1154: "部门:",
        msg1155: "职位:",
        msg1156: "内线:",
        msg1160: "当前空间剩余",
        msg1161: "购买增值服务",
        msg1162: "账 号 管 理",
        msg1163: "安全退出",
        msg1168: "移除常用联系人",
        msg1176: "请描述您将要上传的文件",
        msg1177: "20字以内",
        msg1180: "查看",
        msg1188: "服务热线",
        msg1189: "分享中心",
        msg1190: "文件信息",
        msg1193: "到期时间",
        msg1194: "意见反馈",
        msg1195: "在 线 客 服",
        msg1196: "问 题 反 馈",
        msg1197: "请输入查看密码",
        msg1199: "对不起",
        msg1200: "文件不存在.",
        msg1202: "服务异常",
        msg1203: "请稍后再试.",
        msg1204: "等待中",
        msg1205: "上传失败",
        msg1208: "请上传文件",
        msg1209: "文件名称",
        msg1226: "恭喜",
        msg1227: "抱歉",
        msg1232: "图片加载中...",
        msg1233: "缩小",
        msg1234: "放大",
        msg1235: "还原",
        msgToSmall: "最小化",
        msg1236: "上一张",
        msg1237: "下一张",
        msg1238: "左旋转",
        msg1239: "右旋转",
        msg1240: "打印",
        msg1241: "全屏",
        msg1242: "新增关注、分享、收藏文件夹中文件路径显示，文件预览功能，屏蔽属性栏显示;",
        msg1243: "屏蔽企业文件属性栏操作功能;",
        msg1244: "刷新功能优化为刷新当前目录;",
        msg1245: "新增企业文件复制功能;",
        msg1246: "优化上传列表显示方式;",
        msg1247: "管理员后台增加日志管理功能;",
        msg1248: "修改部分BUG;",
        msgGoBack: "返回",
        msgCanNotContactUser: "无法联系到该用户！",
        msgEnterAccountOrName: "请输入账号或者真实姓名",
        msgUserNumber: "企业用户总数",
        deleteFileTip: "该操作不可恢复, 确定要删除?",
        emptyFileTip: "确定要清空回收站? 文件被清空后将无法还原!",
        restoreFileTip: "您确定要恢复吗?",
        msgDeleteFail: "删除失败!",
        msgRepasswordError: "两次密码输入不一致!",
        msgPasswordError: "密码有误!",
        msgSaveFail: "保存失败!",
        msgSaveSuccess: "保存成功!",
        msgCreateFail: "创建失败!请稍后重试。",
        msgEditPermConfirm: "该权限将应用在当前文件夹及其所有子文件夹!",
        msgCopySuccess: "复制成功!",
        msgPageLoadError: "内容加载失败!请刷新页面后重试。",
        msgRequestExpire: "网络不稳定!请稍后重试。",
        msgSysAbnormal: "系统异常，稍后再试!",
        msgServerError: "系统有误! 请稍后重试!",
        msgComming: "来消息了",
        msgAddSucc: "添加成功!",
        msgAddFail: "添加失败!",
        msgDelSucc: "删除成功!",
        msgDelFail: "删除失败!",
        msgPersonDiskClose: "您的个人文件目录已被管理员关闭!",
        msgAccountLoginOther: "您的账号在别处登录!",
        msgFileHaveExist: "已经存在!",
        msgEntFile: "企业文件",
        msgPersonFile: "个人文件",
        msgStatusOnline: "在线",
        msgStatusBusy: "忙碌",
        msgStatusLeave: "离线",
        msgStatusCorbet: "隐身",
        msgEntEmpty: "企业名不能为空",
        msgEntLengthError: "企业名由2-50个中英文或数字组成",
        msgEntRegisted: "该企业已存在",
        msgEntFormatError: "企业名不能使用特殊字符",
        msgEntSpacesError: "企业名开头和结尾不能使用空格",
        msgAccountEmpty: "账号不能为空",
        msgAccountLocked: "账号被锁定",
        msgAccountLengthError: "账号由2-20个中英文或数字组成",
        msgAccountSpacesError: "账号开头和结尾不能使用空格",
        msgPasswordEmpty: "密码不能为空",
        msgPasswordLength: "密码由6-30个英文字母、数字或字符组成",
        msgRepasswordEmpty: "请再次输入您的密码",
        msgLoginInfoError: "登录信息有误",
        msgServiceExpire: "企业服务已到期",
        msgRealnameEmpty: "真实姓名",
        msgRealnameLength: "真实姓名由2-60个字符组成",
        msgRealnameLengthLongError: "真实姓名过长!",
        msgEmailEmpty: "请填入您常用的邮箱!",
        msgEmailRegisted: "该邮箱已经被注册过!",
        msgEmailFormatError: "邮箱地址格式错误!",
        msgPhoneEmpty: "号码不能为空!",
        msgPhoneLengthError: "'号码长度为6-20位'",
        msgValidateError: "验证码错误!",
        msgAgreeTerms: "同意条款才能注册!",
        msgNoUser: "请选择用户!",
        msgSameFile: "失败!存在同名文件!",
        msgUploadNumLimit: "一次上传文件不能超过200个",
        msgNoFile: "请选择要操作的文件!",
        msgNoFileFolder: "请选择文件或文件夹!",
        msgNoFolder: "请选择文件夹!",
        msgNoPermission2: "无此权限!",
        msgPersonFolderExceed: "文件夹已满!请到购买中心扩展空间!",
        msgNameInjectError: "名称不能包含代码!",
        msgCreateDestFolderDeleted: "您创建的文件所在文件夹已经被删除，请备份内容!",
        msgNameConflict: "命名冲突!当前目录下有相同命名!",
        msgNameNull: "名称不能为空!",
        msgDiskSizeFull: "云盘空间已满!",
        msgDiskSizeLack: "云盘空间不足!",
        msgNoFlashPlugin: "使用上传功能，需要安装Flash插件，点击这里快速安装!",
        msgReadNoFlashPlugin: "使用文件预览功能，需要安装Flash插件，点击这里快速安装!",
        msgDiskLessAssign: "企业云盘剩余空间不足分配",
        msgDiskUsedOverAssign: "云盘已使用空间超过分配空间",
        msgFolderNameConfict: "当前文件夹下存在相同文件夹!",
        msgFolderCreateConflict: "命名冲突!当前目录下有相同命名!",
        msgFolderNameNull: "文件夹名称不能为空!",
        msgFolderNameInjectError: "文件夹名称不能包含特殊符号!",
        msgFolderSaveConflict: "操作失败! 存在同名文件夹!",
        msgFolderNoExist: "文件夹不存在!",
        msgFolderMoveNameConflict: "移动失败! 目标文件夹下有同名文件夹!",
        msgFolderDeleted: "文件夹已被删除!",
        msgParentFolderDeleted: "父文件夹已被删除!",
        msgUploadCoverFail: "覆盖失败! 请稍后重试!",
        msgUploadRootFolder: "根目录下不能上传文件!",
        msgUploadConflict: "当前目录下有相同命名!是否重命名?",
        msgFileContentInjectError: "文档中存在非法的内容!请修改后再保存!",
        msgFileLocked: "文件已被锁定!",
        msgFileEditLocked: "文件被加锁，无法编辑!",
        msgFileNoExist: "文件不存在!",
        msgFileDelLocked: "文件被锁定!请先解锁!",
        msgFileMoveNameConflict: "移动失败! 目标文件夹下有同名文件!",
        msgFileMoveSuccess: "文件移动成功!",
        msgFileRoot: "根目录下不能存放文件!",
        msgEntDefaultFolder: "根目录下不能存放文件,文件将存放在‘共享文件夹’下！",
        msgPersonDefaultFolder: "根目录下不能存放文件,文件将存放在‘我的文档’下！",
        msgFileDealing: "文档处理中, 请稍候!",
        msgFileTransterFail: "文档转换失败!请稍后重试!",
        msgFileDealComplete: "文档处理完成, 请点击打开!",
        msgFileConflict: "文件夹下存在同名文件",
        msgFileDeleted: "文件无法找到，可能被删除，请刷新后重试!",
        msgFileVerConflict: "文件版本冲突",
        msgNameFileError: '文件名不能为空! 且不能包含任何以下符号：  / : * ? \\" < > |',
        msgNameFolderError: '文件夹命名中不能包含任何以下符号：  / : * ? \\" < > |',
        msgIsSureDel: "确定删除?",
        msgIsSureLock: "确定锁定?",
        msgFileIsLockedByYou: "该文件被您锁定!请解锁后操作。",
        msgOtherUser: "其他账号",
        msgFileIsLock: "该文件被锁定",
        msgPlsContact: "请联系",
        msgContactAdminUnlock: "或 管理员 进行解锁!",
        msgFolder: "文件夹",
        msgFile: "文件",
        msgIsSureUnlock: "确定解锁?",
        msgUngrpContact: "未分组联系人",
        msgFileInvisible: "无权限查看文件，或者文件被修改、删除!",
        msgRenameNull: "名称不能为空",
        msgRenameForbidden: "不能重命名",
        msgRenameOne: "一次只能重命名一个文件或文件夹!",
        msgRenameFail: "重命名失败",
        msgCopyToParent: "该文件夹下已有此文件，请重新选择文件夹!",
        msgVersionEditConflict: "修改失败!该文件已被他人修改。",
        msgVersionDelConflict: "删除失败!该文件已被他人修改。",
        msgLockFail: "锁定失败!",
        msgLockNoFile: "请选择要锁定的文件!",
        msgLockOne: "一次只能锁定一个文件!",
        msgUnlockFail: "解锁失败!",
        msgUnLockOne: "一次只能解锁一个文件!",
        msgUnLockNoFile: "请选择要解锁的文件!",
        msgAttentionFail: "关注失败!",
        msgUnAttentionFail: "取消关注失败!",
        msgUnCollectSuccess: "取消收藏成功!",
        msgCollectFail: "收藏失败!",
        msgCollectSuccess: "收藏成功!",
        msgCollectFolderError: "不能收藏文件夹!",
        msgUnCollectFail: "收藏文件失败!",
        msgUnCollectError: "您选中的文件中存在没有被收藏的!",
        msgLinkEndtimeError: "分享到期时间不能早于今天!",
        msgLinkPasswordLength: "密码长度4-6位!",
        msgLinkAddressEmpty: "请输入收件人的邮箱!",
        msgLinkContactEmpty: "请选择收件人!",
        msgUnLinkSuccess: "取消分享成功!",
        msgMoveSuccess: "移动成功!",
        msgMoveNoDest: "请选择移动到的文件夹!",
        msgMoveToRootFolder: "不能移动到根目录!",
        msgMoveToSub: "移动失败!父文件夹无法移动到其子文件夹中。",
        msgMoveSameDirError: "移动失败!文件移动前后位置相同",
        msgMoveOnFolderConflict: "移动失败! 目标文件夹下有同名文件夹!",
        msgMoveOnFileConflict: "移动失败! 目标文件下有同名文件!",
        msgMoveOnVersionConflict: "移动失败!当前文件已被他人修改。",
        msgMoveForbidden: "不能移动!",
        msgCopyNoFile: "请选择要操作的文件!",
        msgCopyFolderError: "不支持文件夹复制!",
        msgFileCopySuccess: "文件复制成功!",
        msgCompressComplete: "压缩完成!请点击下载按钮下载。",
        msgZipComplete: "文件夹的文件压缩完成!请点击确认按钮下载!",
        msgDownloadOnCompressing: "已有文件正在压缩中，请稍后重试!",
        msgDownloadOnLargeCompressing: "文件压缩中!压缩完成后，您将收到系统消息提醒您进行下载。",
        msgCompressFail: "压缩失败!请重新下载。",
        msgSaveToFolderDeleted: "当前文件保存路径已被管理员修改!请备份文件。",
        msgMailSendFail: "邮件发送失败!请稍后重试。",
        msgMailSendSuccess: "邮件发送成功!",
        msgPersonFolderClosed: "您的个人文件夹已被关闭!",
        msgGetPermissionFail: "权限获取失败! 请稍后重试。",
        msgPermissionNoUser: "请选择账号!",
        msgPermissionFail: "权限设置失败!请重新设置。",
        msgPermissionSuccess: "权限设置成功!",
        msgReadUnsupport: "该文件暂不支持预览!",
        msgReadDelFile: "您查看的图片已经被删除,我们将展示图片列表中的第一张图片!",
        msgFirstPic: "当前图片是第一张!",
        msgLastPic: "当前图片是最后一张!",
        msgFirstPagePic: "当前已是第一组图片!",
        msgLastPagePic: "当前已是最后一组图片!",
        msgBigestPic: "不能再放大了!",
        msgLeastPic: "不能再缩小了!",
        msgEditUnsupport: "该文件暂不支持在线编辑!",
        msgRecoverFail: "恢复失败!请稍后重试。",
        msgRecoverSuccess: "恢复成功!",
        msgRecoverNoVersion: "请选择要保存的文件版本!",
        msgRecoverySaveasFail: "保存失败!请稍后重试。",
        msgRecoverySaveasSuccess: "保存成功!",
        msgMarkFail: "备注修改失败! 请稍后重试。",
        msgMarkSuccess: "备注修改成功!",
        msgRecycleVerConflict: "版本冲突! 请刷新后重试。",
        msgRecycleFileConflict: "目标文件夹下有同名文件!",
        msgRecycleFolderConflict: "目标文件夹下有同名文件夹!",
        msgConfirmEmptyRecycle: "确定要清空回收站内所有的文件吗?",
        msgShareOne: "一次只能分享一个文件或文件夹!",
        msgUnShareOne: "一次只能取消分享一个文件或文件夹!",
        msgDeleteOnVerConflict: "删除失败！文件版本冲突。",
        msgSysFileForbidden: "您无权修改系统文件。",
        msgSysFolderForbidden: "您无权修改系统文件!",
        msgSysRenameForbidden: "系统文件不支持重命名!",
        msgSysDelForbidden: "系统文件不支持删除!",
        msgSysMoveForbidden: "文件不支持移动!",
        msgAddUsualNoUser: "请选择要添加的常用联系人!",
        msgAddUsualSucess: "添加成功!",
        msgAddUsualFail: "添加失败!请稍后尝试。",
        msgDelUsualNoUser: "请选中要删除的常用联系人!",
        msg1191: "删除成功!",
        msgDelUsualFail: "删除失败!请稍后尝试。",
        msgChatInjectError: "发送失败!您输入的信息包含不安全信息。",
        msgChatOnline: "只能与在线用户进行视频。",
        msgSendFileError: "系统有误! 我们将尽快解决问题，是否发送有误报告?",
        msgReceiveFileError: "接收失败!",
        msgFileMissed: "文件无法找到或被删除，请刷新后重试!",
        msgMeetingNoName: "会议室名称不能为空!",
        msgMeetingNameConflict: "该会议室已存在!",
        msgCreateMeetingFail: "会议创建失败!",
        msgDelMeetingFail: "会议删除失败!",
        msgOpenAttNoPermission: "无此权限!请联系管理员授权。",
        msgAttFileNoExist: "文件不存在!文件被修改或删除!",
        msgEditAccountFail: "修改个人资料失败!",
        msgOriginPassError: "旧密码不正确!",
        msgNewPassLength: "密码由6-30个字符组成!",
        msgEditPassFail: "系统有误!请稍后重试。",
        msgEditPassSuccess: "密码修改成功!",
        msgSysSettingSuccess: "修改成功!",
        msgLinkNoExist: "分享不存在!",
        msgLinkExpire: "分享已过期!",
        msgLinkPasswordError: "密码有误",
        msgLinkFolderConflict: "保存失败!存在同名文件夹。",
        msgLinkSaveFail: "保存失败!",
        msgLinkDownloadDisable: "该文件分享不支持下载!",
        msgLinkDownloadNoFile: "请选择要下载的文件!",
        msgDeptNameError: "只能用中英文,不能使用特殊符号（英文中间可以使用空格）",
        msgDeptExisted: "该部门已存在!",
        msgCreateDeptFail: "新建部门失败",
        msgDelDeptConfirm: "该部门及其所有子部门也将同时被删除，其下所有成员将成为未分组成员!您确定删除该部门吗？",
        msgDelDeptFail: "删除部门失败",
        msgAddAccountSuccess: "成员添加成功!",
        msgCreateAccNoFolder: "请选择文件夹!",
        msgAccSafeAuthFail: "账号信息不规范或不完整!请修改后再次提交。",
        msgAccMunbersLimit: "企业账号数不足，请联系管理员购买!",
        msgAccExisted: "该账号已经存在!",
        msgMailPhone: "请输入正确的邮箱地址或者正确的手机号码!",
        msgAccGetPermFail: "网络不稳定!请稍后重试。",
        msgAccEditPermNoPerm: "请设置文件相应权限!",
        msgAccEditPermSuccess: "权限修改成功!",
        msgAccEditSuccess: "账号修改成功!",
        msgAccLocked: "该账号已被锁定!",
        msgAccLockSucess: "账号锁定成功!",
        msgAccUnlockSuccess: "账号解锁成功!",
        msgDelAccConfirm: "确定要删除该账号?",
        msgDelAccSuccess: "账号删除成功!",
        msgFolder0Size: "文件夹容量不能小于1个单位!",
        msgPersonFolderLess: "个人文件夹容量不能小于已使用容量!",
        msgEntServiceExpire: "企业服务已到期，请联系管理员续费!",
        msgEntNotExist: "企业不存在!",
        msgEditPasswordSuccess: "密码修改成功!",
        msgImportFormatError: "文件格式不正确!请下载标准模板，正确填写后导入。",
        msgImportInfoError: "导入的账号信息不规范或不完整!请修改后再次导入。",
        msgImportAccLenSpace: "账号由2~50个字符组成,并且开头、结尾不能使用空格!",
        msgImportAccountOK: "账号导入成功!",
        msgImportGenderEmpty: "请选择性别",
        msgImportEmailEmptyFormat: "邮箱不能为空,并且格式要规范!",
        msgLockAdmin: "无此权限!该账号为超级管理员。",
        msgUnlockAdmin: "无此权限!该账号为超级管理员!",
        msgOperateAdmin: "无此权限!该账号为超级管理员!",
        msgGetInfoFail: "网络不稳定!请稍后重试!",
        msgAdminNameEmpty: "请输入真实姓名!",
        msgAdminPhoneEmpty: "电话不能为空",
        msgAdminPhoneLength: "手机号码（11位）或座机号码（区号-电话号码）",
        msgAdminEmailFormatError: "邮箱格式不规范",
        msgAccIsAdmin: "该账号已经是管理员!",
        msgAdminCreateOk: "管理员创建成功!",
        msgAdminSettingGetInfoFail: "网络不稳定!请稍后重试!",
        msgAdminSettingNoFolder: "请为管理员设置需要管理的文件夹!",
        msgAdminEditOk: "管理员修改成功!",
        msgAdminChangeOk: "管理员更换成功!",
        msgAdminLockOk: "锁定成功!",
        msgAdminUnlockOk: "解锁成功!",
        msgAdminDelOk: "管理员删除成功!",
        msgDomainTestFail: "域链接不可用!",
        msgDomainTestOk: "域链接可用!",
        msgDomainFail: "域设置失败!请检测域设置信息。",
        msgDomainOK: "域设置成功!",
        msgEntEditSuccess: "企业信息修改成功!",
        msgRoleNameEmpty: "请为角色命名!",
        msgRoleNoPerm: "请为角色设置相应权限!",
        msgRoleNoAcc: "请为角色添加账号!",
        msgRoleExisted: "该角色已经存在!",
        msgRoleCreateOk: "角色创建成功!                                      `",
        msgRoleEditGetInfoError: "网络不稳定!请稍后重试!",
        msgRoleEditFail: "系统有误!角色修改失败。",
        msgRoleEditOk: "角色修改成功!",
        msgRoleNameFormatError: "中文不能使用空格，英文中间可以使用空格；但不能使用特殊字符",
        msgDelRoleConFirm: "确定要删除该角色?",
        msgDelRoleFail: "系统有误!删除角色失败。",
        msgDelRoleOk: "角色已被删除!",
        msgReset: "重置",
        msgConfirmResetLogo: "确定还原默认Logo?",
        msgChangeLogoFail: "企业LOGO更换失败!",
        msgPhoneNotEnable: "您企业尚未开通云电话功能，请联系管理员开通。",
        msgPhoneNotSetting: "请先添加您的手机号码：请点击头像->账户管理->工作信息->手机号码 中添加。",
        msgPhoneTimeLess: "贵企业剩余云电话分钟数不足，请联系管理员续费!",
        msgQueryPhoneRecord: "通话查询",
        msgUnConnect: "未接通",
        msgConnectSuccess: "通话成功",
        msgInfoDealing: "数据处理中",
        msgPhoneRecord: "通话记录",
        msgLook: "查 看",
        msgCloseUp: "收 起",
        msgDetails: "详情",
        msgNextStep: "下一步",
        msgSubmitEdit: "提交修改",
        msgResend: "再次发送",
        msgClickResend: "秒后再次点击发送",
        msgMailExisted: "邮箱地址已存在！",
        msgPhoneExisted: "手机号码已存在！",
        msgMailOrPhoneCorrect: "请输入正确的邮箱或手机号码！",
        msgSetPwd: "请设置您登录企业云盘的密码",
        msgCompleteEntInfo: "完善您企业的基本信息",
        msgInputNewPwd: "设置燕麦企业云盘登录密码",
        msgValitdateTimeOut: "验证超时!请重新发送验证码，再次验证!",
        msgFolderSpaceOver: "目标文件夹空间不足!",
        msgGetPwdTitle: "找回密码-燕麦企业云盘",
        msgGetPwd: "找回密码",
        msgLoginMailOrPhone: "您的登录账号：邮箱地址或者手机号",
        msgAskQuestion: "如有任何问题，请联系客服人员：",
        msgInviteColleague: "邀请同事加入",
        msgColleagueInfo: "同事信息",
        msgColleagueMailOrPhone: "同事的邮箱地址\\手机号码",
        msgUsualMailOrPhone: "常用的邮箱地址或手机号码",
        msgMailOrPhone: "邮箱地址/手机号",
        msgSendValiInfo: "发送验证信息",
        msgBackLogin: "返回登录界面",
        msgChangePwdOk: "密码修改成功!",
        msgTips: "温馨提示",
        msgLoginNow: "马上登录",
        msgRegisterS: "注&nbsp;&nbsp;册",
        msgAccountLogin: "已有账号登录",
        msgAccountReg: "账号注册",
        msgForgetPwd: "忘记密码",
        msgLoginS: "登&nbsp;&nbsp;录",
        msgShiftLogin: "切换登录界面",
        msgOldLogin: "旧登录界面",
        msgLoginPwd: "登录密码",
        msgEntName: "企业名称",
        msgMailOrPhoneOrAccount: "账号/邮箱地址/手机号",
        msgNewLogin: "新登录界面",
        msgEntNameComplete: "建议输入完整企业名称",
        msgContact: "联系人",
        msgContactNotEmpty: "联系人不能为空",
        msgContactWay: "联系方式",
        msgContactWayNotEmpty: "联系方式不能为空",
        msgMailMobilePhone: "邮箱地址\\手机号码\\座机号码",
        msgPrevStep: "上一步",
        msgLoginDiskPwd: "请输入登录密码",
        msgInputPwdAgain: "再次输入密码",
        msgFinish: "完成",
        msgEntRegSuccess: "企业注册成功!",
        msgLoginAccount: "登录账号",
        msgMailMessageSent: "系统给您的注册邮箱{{mail}}发送了一封验证邮件, 请登录邮箱查看",
        msgSenconds: "秒",
        msgInputPhoneValidate: "请输入手机验证码",
        msgResendValidate: "重新发送验证码",
        msgSubmitValiCode: "提交验证码",
        msgAboutUs: "关于我们",
        msgLogin: "登录",
        msgRegister: "注册",
        msgMailPhoneToLogin: "建议使用企业邮箱注册",
        msgDoubtConsult: "如有任何问题，请联系客服人员：",
        msgCSOnline: "在线客服",
        msgOrCallPhone: "客服热线：",
        msgContactCS: "以上方式无法找回密码的用户，请联系客服处理",
        msgPhone: "电话",
        msgMail: "邮箱",
        msgReadClause: "请阅读服务条款, 并选择同意",
        msgClickToMessage: "点击这里给我发消息",
        msgDownloadFile: "下载文件",
        msgDownloadRoute: "下载路径",
        msgChooseRoute: "请选择路径",
        msgBrowser: "浏 览",
        msgDownload: "下 载",
        msgCancel: "取 消",
        msgLocalPhoto: "本地相片",
        msgSaveImg: "保存头像",
        msgOatosUpgrade: "燕麦升级程序",
        msgOatosUpgrading: "燕麦程序正在升级, 请稍候",
        msgChooseValidate: "验证邮箱地址或手机号",
        msgChooseMailValidate: "验证邮箱地址",
        msgChoosePhoneValidate: "验证手机号",
        msgUsualMailValidate: "常用邮箱地址验证",
        msgPhoneValidate: "有效手机号码验证",
        msgValidate: "验证",
        msgValidated: "已验证",
        msgLoginValidate: "登录账号验证",
        msgValidateBenifit: "为什么要验证邮箱或手机号？",
        msgValidateDescription: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕麦企业云盘账号系统已升级，您验证邮箱地址或手机号后，可以享受更好的安全保障和功能体验。通过验证的邮箱地址和手机号，您可以：",
        msgUseForLogin: "作为登录账号直接登录企业云盘;",
        msgUseForGetPwd: "在线找回企业云盘登录密码;",
        msgMoreSecurity: "验证手机号优先体验云电话功能。",
        msgValidateMail: "为什么要验证邮箱地址？",
        msgValidateMailDescription: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕麦企业云盘账号系统已升级，您验证邮箱地址后，可以享受更好的安全保障和功能体验。通过验证的邮箱地址，您可以：",
        msgMailMoreSecurity: "优先获得新功能体验或活动优惠。",
        msgValidatePhone: "为什么要验证手机号？",
        msgValidatePhoneDescription: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕麦企业云盘账号系统已升级，您验证手机号可以享受更好的安全保障和功能体验。通过验证的手机号，您可以：",
        msgPhoneMoreSecurity: "优先体验云电话功能。",
        msgRegAgain: "验证信息丢失,请重新",
        msgAccountUsed: "账号已被使用",
        msgEntNameUsed: "该企业已被注册",
        msgNoPermission: "您还没有此权限",
        msgMeetingRoom: "会议室",
        msgEditFail: "修改失败",
        msgEditOK: "修改成功",
        msgInputDeptName: "请输入合法的部门名称!",
        msgRecycleEmpty: "回收站中没有文件",
        msgAttentionEmpty: "没有关注的文件",
        msgLinkEmpty: "没有分享的文件",
        msgFavoriteEmpty: "没有收藏的文件",
        msgSearchEmpty: "没有与搜索条件匹配的项",
        msgMyDoc: "我的文档",
        msgMyPic: "我的图片",
        msgReceiveFiles: "接收的文件",
        msgSendFiles: "发送的文件",
        msgShareFolder: "共享文件夹",
        msgSimMyDoc: "我的文档",
        msgSimMyPic: "我的图片",
        msgSimReceiveFiles: "接收的文件",
        msgSimSendFiles: "发送的文件",
        msgSimShareFolder: "共享文件夹",
        msgTraMyDoc: "我的文檔",
        msgTraMyPic: "我的圖片",
        msgTraReceiveFiles: "接收的文件",
        msgTraSendFiles: "發送的文件",
        msgTraShareFolder: "共享文件夾",
        msgEngMyDoc: "My document",
        msgEngMyPic: "My pictures",
        msgEngReceiveFiles: "Received files",
        msgEngSendFiles: "Sent files",
        msgEngShareFolder: "Shared folders",
        msgFolderNameError: "根目录文件夹不能命名为系统保留文件夹名!",
        msgLeave: "离开",
        msgOffline: "离线",
        msgAll: "所有",
        msgCurrent: "当前",
        msgLangSetting: "语言",
        msgLanguage: "中文简体",
        msgChineseCn: "中文简体",
        msgChineseTw: "中文繁體",
        msgEnglish: "English",
        msgEntFileSize: "企业文件容量",
        msgPersonalFileSize: "个人文件容量",
        msgCurrentUsersNumber: "当前用户数量",
        msgLinkFlow: "分享流量",
        msgShareFiles: "分享文件",
        msgEntFolder: "企业文件夹目录",
        msgPersonFolder: "个人文件夹目录",
        msgAddDelUser: "添加/删除成员",
        msgSearchResults: "搜索结果",
        msgEntFileDirectory: "企业文件目录",
        msgInfoTip: "信息提示",
        msgCreate: "创建",
        msgRecycle: "删除回收站",
        msgRestoreVersion: "恢复版本",
        msgCreateLink: "新建分享",
        msgCreateTxt: "新建文本",
        msgOldPwdCorrect: "原始密码正确!",
        msgNewSubDept: "新建子部门",
        msgSortDept: "部门排序",
        msgDelDept: "删除部门",
        msgSuperAdmin: "超级管理员",
        msgSuperAdminIs: "该用户为超级管理员",
        msgAdminIs: "该用户为管理员",
        msgUnlockAccount: "解锁账号",
        msgLockAccount: "锁定账号",
        msgNormal: "正常",
        msgUngroupContact: "未分组联系人",
        msgAdmin: "管理员",
        msgSecAdmin: "二级管理员",
        msgAuth: "认证服务",
        msgSecurityUpload: "加密上传",
        msgSecPwdTip: "密码长度4~6位",
        msgPwdInputTip: "请输入加密密码!",
        msgInputLoginPwd: "请输入新的登录密码",
        msgInputLoginPwdAgain: "请再次输入新的登录密码",
        msgErrorValidationCode: "验证码错误",
        msgBBS: "问题反馈",
        msgErrorWaiting: "一分钟内不能重复发送验证信息",
        msgMailBinded: "该邮箱已被其他用户绑定!",
        msgMailFormatError: "请输入正确的邮箱地址",
        msgMobileFormatError: "请输入正确的手机号码",
        msgMobileBinded: "该手机号已存在!<br/>请更换手机号码验证。",
        msgMailBinded: "该邮箱已存在!<br/>请更换邮箱地址验证。",
        msgNewMessage: "您有新消息",
        msgEmailBindSucc: "邮箱验证成功!",
        msgEmailBindFail: "邮箱验证失败!",
        msgPhoneBindSucc: "手机号绑定成功!",
        msgMinute: "分钟",
        msgPerson: "人",
        msgStartAll: "全部开始",
        msgChooseDelContacts: "请选中要删除的联系人",
        msgFileNoSave: "文档尚未保存, 确认要关闭吗? ",
        msgWebsiteTitle: "燕麦企业云盘",
        msgCreateFileTitle: "新建文档-燕麦企业云盘",
        msgViewerTitle: "文件浏览-燕麦企业云盘",
        msgShareTitle: "文档共享-燕麦企业云盘",
        msgLoginTitle: "用户登录-燕麦企业云盘",
        msgRegisterTitle: "用户注册-燕麦企业云盘",
        msgAdminTitle: "后台管理-燕麦企业云盘",
        msgZipNotFiles: "该文件夹中没有文件!",
        msgEntAuthFirst: "未认证的企业不能绑定显示号码! 请先到 服务中心 -> 认证服务 中认证企业信息!",
        msgWaitAuthPass: "您的企业认证尚未通过审核, 请耐心等待或联系客服!",
        msgNewbieHelp: "新手帮助",
        msgFreeReg: "免费注册",
        msgInputContactTip: "请输入真实的企业联系人",
        msgAccountNotExist: "账号不存在!",
        msgAccountNotActive: "账号未激活",
        msgAccountDeleted: "账号已被删除",
        msgAdminName: "管理员姓名",
        msgAdminNameTip: "请填入您的真实姓名",
        msgInputContactTel: "联系电话",
        msgInputContactTelTip: "请填入您的手机或座机号码，座机请按“区号-号码”格式填写，如 0755-12345678",
        msgInputEmail: "邮箱地址",
        msgPwdResetFail: "该账号未激活, 密码重置失败!",
        msgOperateFail: "操作失败!",
        msgDelUsualSucess: "删除成功!",
        msgZipMaxSize: " 您要压缩的文件超过了100MB, 请单个文件下载!",
        msgOatosSupport: "本页面由 燕麦企业云盘 提供支持",
        msgShareCenter: "分享中心",
        msgRecycleFile: "回收站文件",
        msgFileOrFolder: "文件或文件夹名",
        msgOperator: "操作人",
        msgOperateTime: "操作时间",
        msgStartSearch: "开始搜索",
        msgFileSearchTitle: "请输入您要搜索的文件名",
        msgRestoreAllFiles: "恢复所有文件",
        msgEmptyAllFiles: "清空所有文件",
        msgDateRangeErr: " 开始时间不能大于结束时间!",
        msgEntAddrErr: "企业地址格式不正确",
        msgLinkPwdErr: "外链密码格式不正确, 必须是4-6位字符/数字/下划线",
        msgFormatErr: "格式不正确!",
        msgRealNameErr: "真实姓名格式不正确!",
        msgUnAuthErr: "未验证的手机号或邮箱, 登录失败",
        msgActiveUser: "激活账号",
        msgUploadMaxErr: "燕麦网页版文件最大只能上传500M, 更大的文件请用Window客户端上传!",
        msgDialStopErr: "您正在进行拨号或者电话会议, 暂不能关闭云电话!",
        msgSortOK: "排序成功!",
        msgSortFail: "排序失败!",
        msgSelectQueryItem: "请选择筛选项",
        msgRenameOK: "重命名成功!",
        msgRenameFail: "重命名失败",
        msgSelectDepartErr: "请选择部门后新建子部门",
        msgNewDepart: "新部门",
        msgNameDuplicate: "名称重复!",
        msgInputInvalid: "您输入了不合法的内容",
        msgImgPreviewErr: "图片过大，请下载后预览，显示的为缩略图!",
        msgAddUserSuccess: "账号添加成功!",
        msgSelectDept: "请选择部门",
        msgActiveUserErr: "验证码错误! 请联系管理员重新发送激活邮件!",
        msgAccountErr: "账号未注册",
        msgSystemMessage: "系统消息",
        msgNewSystemMessage: "您有新的系统消息!",
        msgBirthdayError: "出生日期错误!",
        msgErrorMailOver: " 你今天发送的邮件数已经超出了限制, 邮件不能发送!",
        msgShareLinkMailSubject: "分享文件通知",
        msgErrorNotHaveRead: " 您没有预览权限!",
        msgIsEmptyRecycle: "确定要清空回收站",
        msgChatFail: " 您当前是离线状态, 不能聊天或发送文件!",
        msgNoUserOrDeleted: "该用户已被删除",
        msgActiveUserTitle: "燕麦-激活用户",
        msgResetPwdTitle: "燕麦-重置密码",
        msgSetEntInfo: "设置企业信息",
        msgLoginMaibox: "登录邮箱",
        msgRestoreFolderDel: "恢复失败! 你要恢复的文件所在的文件夹已被删除!",
        msgUserDeleted: "该用户已被删除",
        msgSyncManage: "同步管理",
        msgViewSync: "查看同步详情",
        msgCancelSync: "取消同步",
        msgAddSync: "添加同步",
        msgParentFolderDeleted: "父文件夹已经被删除",
        msgCancelSyncConfirm: "取消同步后,系统将删除相关同事的本地文件夹!您确定继续取消操作?",
        msgSyncSetting: "设置同步",
        msgRefresh: "刷新",
        msgMore: "更多",
        msgMyShare: "我的分享",
        msgMyFocus: "我的关注",
        msgSetPwd: "设置密码",
        msgCancelPwd: "取消密码",
        msgPwd: "密码",
        msgExpireDate: "到期时间",
        msgSetExpireDate: "设置到期时间",
        msgCancelExpireDate: "取消到期时间",
        msgCopyLink: "复制链接",
        msgSelectSyncFolder: "选择需要同步的文件夹",
        msgSelectSyncColleague: "选择需要同步的同事",
        msgSyncConfirm: "在此显示同步确认",
        msgSyncSuccTip: "<li>以上人员将获得同步权限,并受到同步通知消息;</li><li>当前文件夹及其子文件夹中所含文件将被同步到本地;</li><li>并不会删除云端文件;</li>",
        msgSyncUserInfo: "将被以下人员同步",
        msgDiskSizeMustInt: "云盘大小只能设置整数",
        msgAddUserErrTip: "请输入正确的邮箱或者手机号!",
        msgAddAccountSucc: "添加账号成功",
        msgAddAccountEmailTip: "系统已经发送了通知邮件到此邮箱, 请通知同事登录邮箱并按照邮件里的提示激活账号!",
        msgAddAccountSmsTip: "系统已发送了登录密码到此手机号, 请通知同事使用此手机号和登录密码访问www.oatos.com登录燕麦企业云盘",
        msgAddAcountNoTip: "我已知道如何激活子账号, 以后不用再提示",
        msgShareSuccess: "分享成功!",
        msgViewSharePage: "查看分享页面",
        msgShareLink: "分享外链",
        msgSendMailMobile: "发送到邮件、手机",
        msgUploadOnly: "仅允许用户上传文档至该文件夹",
        msgCopyLinkTip: "复制以下分享外链,发送给相关同事、客户、合作伙伴！",
        msgInputSpace: "请输入有效的邮箱或手机号,用空格分隔",
        msgSendContent: "发送内容",
        msgShareFileTip: "用【燕麦企业云盘】给您分享了文件",
        msgSendLink: "发送链接",
        msgSendLinkFree: "将已生成的分享链接<b>免费</b>发送到:",
        msgSendMailMobileNoty: "请输入要发送的邮箱地址和手机号码!",
        msgSendSuccess: "发送成功!",
        msgSendFail: "未发送成功!",
        msgSendWait: "您刚刚发送了消息, 请等待2分钟后再次发送!",
        msgFolderNameLength20Error: "文件夹名称不能超过20个字符!",
        msgRemarkError: "备注格式不正确! 请输入1-100位的字符!",
        msgDeptLongError: "部门名称限制为1-60位字符!",
        msgEntAddressEmpty: "请输入企业地址",
        msgUploadFileError: " 您不能上传exe/bat/cmd文件!",
        msgDownloadFileError: " 您不能下载exe/bat/cmd文件!",
        msgChatSendError: " 聊天框中最大只能发送500MB文件!",
        msgImportWait: "用户正在导入中...",
        msgAccDuplite: "账号重复!",
        msgFileDuplicate: "文件名重复",
        msgMessageList: "消息中心",
        msgSyncFile: "同步文件",
        msgUnknowOper: "未知操作",
        msgNoUploadPermission: "您没有当前文件夹的上传权限!",
        msgFolderSyncSetSucc: "文件夹设置同步成功!",
        msgFolderSyncSetFail: "文件夹设置同步失败!",
        msgDomainLoginError: "域用户登录信息有误",
        msgNewDept: "新建部门",
        msgNewDeptTip: "请输入你要创建的部门名称",
        msgCancelShareConfirm: "取消分享将会使该文件的分享链接失效，不能访问。您确定要取消分享吗?",
        msgChangeSpace: "修改空间",
        msgCompany: "公司",
        msgPersonSetting: "个人设置",
        msgErrorCheckHashkey: "数据未通过安全验证",
        msgChangeDeptSizeOk: "修改部门空间成功",
        msgSelectAll: "全选",
        msgDeptFolderSize: "部门文件夹大小",
        msgAllocateSpace: "分配空间",
        msgNoLimit: "无限制",
        msgExpandSpace: "扩容",
        msgAvailSize: "可分配空间",
        msgDeptPermission: "部门文件夹权限",
        msgDefaultSetting: "默认设置",
        msgCustomSetting: "自定义设置",
        msgSettingFolderSize: "设置文件夹大小",
        msgSpaceFomat: "空间大小为整数且大于零",
        msgProperty: "属性",
        msgRemark: "备注",
        msgTempNoTip: "暂时没有内容, 请输入不超过100个字符!",
        msgFileNameNull: "请输入文件名称",
        msgReminded: "已关注",
        msgDisReminded: "未关注",
        msgCurrentVersion: "当前版本号",
        msgSize: "大小",
        msgInclude: "包含",
        magPath: "位置",
        msgUsedSize: "已用空间",
        msgMaxSize: "最大空间",
        msgRemindStatus: "关注状态",
        msgFilesNum: "个文件",
        msgTableEmpty: "列表中没有数据",
        msgDataLoadFail: "数据加载失败!",
        msgUserNotExist: "用户不存在或已被删除",
        msgOpenChatView: "双击打开聊天窗口",
        msgClear: "清空",
        msgShowListInfo: "列表视图",
        msgShowThumbInfo: "缩略图视图",
        msgSysBusy: "系统繁忙，请稍后重试",
        msgAddContactErr: "您选中部门的所有用户已经是您的常用联系人了!",
        msgObjectName: "对象名称",
        msgMyDevice: "我的设备",
        msgAllSingleSync: "全部设为单向同步",
        msgSingleSync: "单向同步",
        msgShowLogo: "LOGO显示",
        msgShowLogoPic: "企业LOGO(图片)",
        msgShowLogoText: "企业名称(文字)",
        msgSelectUserError: "请选择要通知的同事!",
        msgUserActiveSucc: "用户账号激活成功!",
        msgBuyService: "购买服务",
        msgDiskSpaceTip: "云盘空间已使用<%=percent%>%, 请到购买中心进行扩容!",
        msgFolderOverflow: "文件夹空间不足",
        msgRoleError: "角色名称长度限制为1-60为字符!",
        msgAdminLockError: "超级管理员不能被锁定!",
        msgAdminPwdError: "您不能修改超级管理员的密码!",
        msgAdminDelError: "超级管理员不能被删除!",
        msgAdminChangeDeptError: "您不能更换超级管理员的部门!",
        msgAdminChangePermissionError: "您不能更换超级管理员的权限!",
        msgAdminFolderSetError: "您不能修改超级管理员的个人文件夹大小!",
        msgClearSyncUserSucc: "清空文件夹同步用户成功!",
        msgResendEmail: "重新发送激活邮件",
        msgResendSms: "重新发送激活短信",
        msgUserActiveError: "该用户已经激活了!",
        msgActEmailSendSucc: "激活邮件发送成功!",
        msgActSmsSendSucc: "激活短信发送成功!",
        msgSecAdminLockError: "二级管理员不能锁定自己!",
        msgSecAdminDelError: "二级管理员不能删除自己!",
        msgSecAdminChangeDeptError: "二级管理员不能修改自己的部门!",
        msgSecAdminSetDiskError: "二级管理员不能设置自己的个人文件夹大小!",
        msgMailSendTip: "系统给您的注册邮箱{{mail}}发送了一封验证邮件, 请登录邮箱完成找回密码",
        msgTxtInputTip: "请输入文档内容",
        msgTxtContentFail: "获取文档内容失败!",
        msgPurchaseCenter: "购买中心",
        msgContactCs: "联系客服",
        msgHasRead: "已读",
        msgSearchAllFile: "搜索全部文件",
        msgFullTextSearch: "全文搜索",
        msgSingleSyncTips: "<b>单向同步:</b>从云端同步到本地,本地更新不影响云端",
        msgNewDocument: "新建文档",
        msgEditDocument: "编辑文档",
        msgSelectPermission: "请选择权限!",
        msgFileLengthError: "文件名，文件夾名長度不能超過100個字符！",
        msgRequestDataError: "请求数据有误！",
        msgSelectShareType: "选择分享类型",
        msgUserUpload: "仅允许用户上传文档至该文件夹",
        msgFreeTry: "免费试用",
        msgFullTxtFunc: "全文搜索功能",
        msgInviteCode: "提交邀请码",
        msgSimpleTip: "简单的说明",
        msgEaseUse: "功能体验不会影响您的数据安全，请放心试用。",
        msgFullTxt500: "每天开放500家企业用户体验，体验名额已满时不能提交申请。",
        msgGetYanmaiWechat: "可通过燕麦企业云盘公众号获取实时客服支持和最新优惠信息。",
        msgMethodGetInvieteCode: "获取邀请码方法",
        msgRemindYanmai: "微信 扫一扫 关注“燕麦企业云盘”",
        msgEnterYanmai: "进入燕麦企业云盘公众号，发送“体验全文搜索”，获取邀请码。",
        msgSorryTrialQuota: "抱歉，今天的体验名额已满，请明天再申请体验。",
        msgFocusYanmai: "您仍然可关注燕麦企业云盘公众号获取实时客服支持或最新优惠信息。",
        msgInputSearch: "输入搜索的内容",
        msgSearchForFullTxt: "● 对云盘中的所有文档进行搜索，并显示用户有可见权限的全部文档",
        msgSearchInfoQuickly: "● 在海量文件中快速找到相关信息，支持使用“*”进行模糊搜索",
        msgSearchTip3: "● 新上传的文档请等待五分钟后再搜索，文档会根据相关度由高到低排序显示",
        msgSearchFileOrContent: "搜索文档名称与内容中包含的信息",
        msgRelevance: "相关度",
        msgTheDirectory: "所在位置",
        msgLocateFileContent: '"全文检索"帮您快速定位文档内容中包含的信息',
        msgSearchNoMatches: "没有与搜索条件匹配的项",
        msgFreeCodeError: "邀请码错误",
        msgAllFind: "共搜索到",
        msgRelateResults: "个相关结果",
        msgA: "个",
        msgExpandSidebar: "展开侧边栏",
        msgCloseSidebar: "收起侧边栏",
        msgSyncFolderSearchTip: "请输入您要搜索的同步文件夹",
        msgSelectUploadFiles: "请选择要上传的文件!",
        msgDaysKeepsInput: "请输入您要保留的天数!",
        msgSaveVersionConfigOk: "保存历史版本配置成功!",
        msgVersionsKeepsInput: "请输入您要保留的版本数!",
        msgSaveVersionConfigFail: "保存历史版本配置失败!",
        msgErrorFolderMaxSize: "设置的文件夹空间小于使用空间",
        msgShareOnlyRead: "仅允许用户预览文件",
        msgShareReadDownload: "允许用户预览和下载文件",
        msgInputMobilePhone: "请输入您常用的手机号码或电话号码",
        msgCodeExpired: "验证码已过期",
        msgInputSearchContent: "请输入您要搜索的内容",
        msgNameDeptError: '部门名不能为空! 且不能包含任何以下符号：  / : * ? \\" < > |',
        msgErrorNoParentMaxSize: "您还没有为父文件夹分配空间，请先为父文件夹分配空间！",
        msgErrorNoParentDeptMaxSize: "您还没有为上级部门分配空间，请先为上级部门分配空间！",
        msgSelectEntSubFolder: "请选择企业文件下的文件夹！",
        msgPermissionDetail: "权限详情",
        msgUser: "用户",
        msgLoginTokenMiss: "对不起!您的登录凭证不存在, 请重新登录!",
        msgFetchEntInfoErr: "获取企业信息失败, 请重新登录!",
        msgFetchUserInfoErr: "获取用户信息失败, 请重新登录!",
        msgAccessAdminPageError: "对不起! 您不是管理员, 不能访问管理员页面!",
        msgSelectAlready: "已选择",
        msgSelectFolder: "请选择您要添加的文件夹",
        msgInputSearchFolder: "请输入你要搜索的文件夹",
        msgFileConverting: "文档正在转换中, 请稍候!",
        msgConvertDone: "文档转换完成!",
        msgFileSendFail: "文件发送失败",
        msgPermissionList: "权限列表",
        msgCurrentAccount: "当前账号",
        msgAddFilePermission: "添加文件权限",
        msgFolderName: "文件夹名",
        msgPermissionContent: "权限内容",
        msgCurrentFolder: "当前文件夹",
        msgSelectToAuthorize: "请选择需要授权的成员",
        msgType: "类型",
        msgPermission: "权限",
        msgMemberList: "成员列表",
        msgRoleList: "角色列表",
        msgDblClickToAdd: "双击左侧需要添加的同事、部门、角色添加到右侧。",
        msgNextPermission: "点击“下一步”，设置权限。",
        msgViewOriginImg: "查看原图",
        msgClickOpen: "点击打开",
        msgDeptRolesPermissionTips: "<b>部门</b>与<b>角色</b>权限类型修改，请在对应的<b>部门权限修改</b>或<b>角色权限修改</b>中进行修改。",
        msgDeleteLockFileErr: "有文件已被锁定, 不能删除!",
        msgMoveLockFileErr: "有文件已被锁定, 不能移动!",
        msgCurrentPicListDetelted: "当前文件夹中的图片已全部被删除",
        msgSearchDeptResult: "搜索到的部门",
        msgSearchMemResult: "搜索到的成员",
        msgSearchRoleResult: "搜索到的角色",
        msgShareInfo: "分享信息",
        msgPersonDiskNoSpace: "个人文件夹空间不足!",
        msgSearchFileAndMark: "搜索全部文件或标签",
        msgComment: "评论",
        msgPublishComment: "发表评论",
        msgNickname: "昵称",
        msgCommentPlaceholder: "请输入您要评论的内容",
        msgAnonymity: "匿名",
        msgLabel: "标签",
        msgInputLabel: "请输入您要创建的标签名称",
        msgFileLabel: "文件标签",
        msgOperateObj: "操作对象：",
        msgLabelName: "标签名称",
        msgLabelLib: "标签库",
        msgLabelSeparate: "多个标签请使用空格或回车分隔",
        msgUnfold: "展开",
        msgFold: "收起",
        msgSearchFactors: "搜索条件：",
        msgSearchExit: "退出搜索",
        msgDocument: "文档",
        msgOperatorNameAccount: "操作人的姓名或账号",
        msgAllType: "所有类型",
        msgSelectColleague: "请选择同事",
        msgStartDate: "开始日期",
        msgEndDate: "结束日期",
        msgLabelModifySuccess: "标签修改成功",
        msgMax3Labels: "一个文件最多创建三个标签！",
        msgCreateLab: "新建标签",
        msgDeleteLibLab: "删除标签后，与之相关文件的标签也将被删除",
        msgPost: "发表",
        msgCurrentCommentCount: "当前评论数",
        msgBackup: "备份",
        msgGrpPermSetting: "群组权限设置",
        msgPermissionFolder: "请选择需要授权的文件夹",
        msgCreateFolderTip: "可以新建文件夹",
        msgCreateFolderError: "您没有新建文件夹权限!",
        msgFileLockedByOthers: "该文件已被他人锁定, 您不能解锁! ",
        msgOnceDownload: "一次最多下载30个文件！",
        msgErrorCopyToOwn: "複製失敗!文件夾不能複製到自己的子文件夾下"
    }
});;
define("app/commons/msg/message_zh_TW", function(require, s, m) {
    m.exports = {
        msg1: "登錄",
        msg2: "註冊",
        msg3: "產品介紹",
        msg4: "私有云",
        msg5: "客戶案例",
        msg6: "下載中心",
        msg7: "幫助中心",
        msg8: "關於我們",
        msg9: "燕麥企業雲盤",
        msg11: "互動社區",
        msg12: "關注燕麥",
        msg13: "服務條款",
        msg14: "粵ICP證010221號",
        msg16: "版權所有",
        msg18: "企業",
        msg19: "企業名稱",
        msg20: "賬號",
        msg22: "密碼",
        msg24: "使用HTTPS",
        msg25: "域用戶",
        msg27: "立即註冊",
        msg28: "獲取燕麥永久免費服務",
        msg29: "創建一個免費的燕麥企業雲盤",
        msg30: "企業登錄信息",
        msg32: "公司或項目名稱",
        msg34: "管理員賬號",
        msg36: "位數字、字母混合",
        msg37: "確認密碼",
        msg38: "再次輸入密碼",
        msg40: "姓名",
        msg41: "真實姓名",
        msg43: "常用的郵箱",
        msg45: "手機或座機號碼",
        msg46: "驗證碼",
        msg48: "換一張",
        msg49: "我已經閱讀並同意",
        msg50: "《燕麥服務條款》",
        msg52: "已有燕麥賬號",
        msg53: "立即登錄",
        msg54: "技術提供：",
        msg55: "深圳市企業雲科技有限公司",
        msg59: "已鎖定",
        msg60: "已關閉",
        msg61: "操作",
        msg62: "修改權限",
        msg63: "修改密碼",
        msg64: "修改資料",
        msg65: "更換部門",
        msg66: "刪除賬號",
        msg67: "個人文件設置",
        msg68: "賬號設置",
        msg69: "新建賬號",
        msg70: "批量導入賬號",
        msg73: "性別",
        msg74: "所在部門",
        msg75: "最近登錄",
        msg76: "創建者",
        msg77: "個人文件夾",
        msg79: "設置文件夾權限",
        msg80: "請選擇文件夾設置文件權限！ ",
        msg81: "選擇文件夾",
        msg82: "文件夾",
        msg83: "權限",
        msgSetPermission: "設置權限",
        msg85: "繼續選擇",
        msg86: "確定",
        msg87: "取消",
        msg88: "登陸賬號",
        msg89: "必填",
        msg93: "男",
        msg94: "女",
        msg95: "企業郵箱",
        msg97: "登陸密碼",
        msg101: "工號",
        msg102: "所在職位",
        msg103: "所有部門",
        msg108: "賬號",
        msg113: "處理中",
        msg127: "批量導入賬號結果",
        msg136: "校驗",
        msg137: "重新導入",
        msg138: "的個人文件設置",
        msg139: "個人文件",
        msg140: "開啟",
        msg141: "關閉",
        msg142: "關閉個人文件將刪除個人文件的所有文件，請謹慎操作!",
        msg143: "個人文件容量：",
        msg146: "密碼重置",
        msg147: "新密碼",
        msg148: "新密碼",
        msg149: "確認密碼",
        msg154: "導入模板文件",
        msg155: "選擇文件",
        msg156: "刪除",
        msg157: "確定導入",
        msg158: "批量導入說明",
        msg159: "請先",
        msg160: "下載導入模板",
        msg161: "填寫模板內容後再導入模板。 ",
        msg162: "下載模板",
        msg163: "僅導入賬號及部門信息，導入成功後請設置賬號文件權限，否則賬號將無法訪問雲盤文件。 ",
        msg164: "請按要求正確填寫模板；如果內容不符合規範，將校驗失敗，不能導入。 ",
        msg165: "可以在賬號設置查看賬號並設置文件​​權限；也可在高級設置使用角色權限管理批量設置文件權限。 ",
        msg167: "導入校驗",
        msg168: "確認",
        msg169: "請輸入您常用的手機號",
        msg170: "發送驗證碼",
        msg171: "請輸入短息驗證碼：",
        msg174: "開通雲電話會議服務",
        msg175: "溫馨提示：",
        msg176: "燕麥雲電話會議無需任何硬件投入，直接通過客戶端開會，高品質通話效果，語音清晰流暢，帶給您面對面交談的體驗效果；",
        msg177: "支持一對一通話及20人以內（包含20人）的雲電話會議，無需再疲於奔波於總部與工作崗位之間，讓管理者真正實現了運籌帷幄之中，決胜千里之外。 ",
        msg178: "恭喜您開通成功！ ",
        msgCompere: "主持人",
        msg179: "主叫號碼",
        msg180: "被叫號碼",
        msg181: "開始時間",
        msgCallTime: "呼出時間",
        msgMeetingCallTime: "發起時間",
        msgConnectedTime: "接通時間",
        msg182: "結束時間",
        msgCallStatus: "通話狀態",
        msgMeetingMembers: "會議人次(人)",
        msgCallLength: "通話時長(分鐘)",
        msgCallTotalLength: "會議時長(分鐘)",
        msgMeetingMemberPhone: "參會人員號碼",
        msg183: "時長（分鐘）",
        msg184: "費用（元）",
        msg185: "套餐名稱",
        msg186: "購買時間",
        msg187: "套餐分鐘數(分鐘)",
        msg188: "單價（元）",
        msg189: "金額（元）",
        msg190: "套餐管理",
        msg191: "總時長（分鐘）",
        msg192: "剩餘時長(分鐘)",
        msg193: "續費",
        msg194: "購買記錄",
        msg195: "賬單記錄",
        msg196: "支付結果",
        msg197: "支付失敗",
        msg198: "抱歉，您未能完成付款，請重新付款",
        msg199: "重試",
        msg200: "支付成功",
        msg201: "您已成功付款，對方將立即收到您的付款，為您開通優惠套餐",
        msg203: "開通服務",
        msg204: "開通您需要的雲電話會議服務",
        msg205: "選擇號碼",
        msg206: "選擇您需要的號碼",
        msg207: "選擇套餐",
        msg208: "選擇您需要的套餐",
        msg209: "開通成功",
        msg210: "開通雲電話成功，去體驗吧",
        msg215: "使用現有號碼",
        msg216: "新辦電信號碼",
        msg218: "呼叫顯示號碼是指與電話會議連接的號碼。會議主持人在燕麥企業雲盤上發起會議，呼叫顯示號碼將依次呼叫連接主持人、參會人A、參會人B等；",
        msg219: "呼叫顯示號碼，僅支持電信手機號碼或者企業座機（總機號碼）；",
        msg220: "填寫電信手機號碼，點擊發送驗證碼，系統將自動發送驗證碼到該手機；",
        msg221: "企業座機請填寫區號+企業總機號碼，例如0755xxxxxxx，點擊發送驗證碼，系統將自動呼叫您所填寫的號碼，進行語音驗證碼提示，敬請留意。 ",
        msg222: "100分鐘送10分鐘",
        msg223: "資費：0.15元/分鐘",
        msg224: "立即辦理",
        msg225: "300分鐘送30分鐘",
        msg228: "1000分鐘送100分鐘",
        msg232: "個性化的包月套餐任您選擇，充值可享有更多優惠，管理員賬號支付費用，其他參會人同時享有云電話會議功能；",
        msg233: "套餐可疊加購買，通話分鐘將以套餐累積數為準，當月訂購的套餐通話時間僅限當月有效，當月未使用部分不可結轉至下月；",
        msg234: "更多包月優惠套餐，請諮詢400-030-1108。 ",
        msg235: "呼叫顯示號碼",
        msg237: "驗證 碼：",
        msg238: "提交",
        msg239: "同事列表",
        msg240: "查找您需要的人",
        msg241: "查找",
        msg242: "取消搜索",
        msg243: "聊天對象",
        msg246: "暫時還沒有即時通訊消息",
        msg248: "聊天記錄",
        msg249: "起始時間",
        msg250: "截止時間",
        msg252: "聊天日誌",
        msg253: "雲盤日誌",
        msg254: "篩選日誌",
        msg255: "操作類型",
        msg256: "全部日誌",
        msg257: "登陸",
        msg258: "上傳",
        msg259: "下載",
        msg260: "預覽",
        msg262: "分享",
        msg263: "新建",
        msg264: "編輯",
        msg265: "移動",
        msg266: "重命名",
        msg267: "精準查找",
        msg268: "查找賬號",
        msg269: "只能查找一個賬號",
        msg270: "選擇",
        msg271: "查找文件",
        msg272: "請輸入查找的文件名",
        msg276: "時間",
        msg279: "文件名/文件夾名",
        msg280: "所屬文件夾",
        msg281: "請在左側選擇您要查找日誌的範圍",
        msg282: "注：日誌中（前、後）代表文件移動前（後）、重命名前（後）相對應的文件信息",
        msgSelectQueryType: "請選擇篩選項!",
        msg285: "當前服務",
        msg286: "服務項目",
        msg287: "基礎服務",
        msg288: "增值服務",
        msg289: "總計",
        msg290: "使用情況",
        msg291: "聯繫客服購買",
        msg293: "服務價格",
        msg296: "新建管理員",
        msg297: "授權賬號",
        msg298: "（只能選擇一個賬號為管理員）",
        msg299: "選擇賬號",
        msg300: "授權該二級管理員的企業文件夾",
        msg307: "管理員權限",
        msg308: "賬號設置",
        msg309: "新建賬號到所屬部門，管理部門賬號",
        msg310: "角色權限設置",
        msg311: "為所屬部門成員設置角色權限",
        msg312: "隱藏賬號或部門",
        msg313: "隱藏所屬部門賬號或子部門",
        msg314: "管理員管理",
        msg315: "設置所屬部門成員為管理員",
        msg316: "日誌管理",
        msg317: "所屬部門賬號日誌管理",
        msg318: "角色名稱",
        msg319: "20個字符，支持中文或者英文",
        msg321: "文件夾權限設置",
        msg323: "必選",
        msg328: "為角色添加賬號",
        msg331: "繼續添加",
        msg332: "處理中...",
        msg335: "修改",
        msg336: "更換管理員",
        msg337: "鎖定",
        msg338: "解鎖",
        msg340: "管理員設置",
        msg342: "管理員賬號",
        msg343: "所屬部門",
        msg345: "狀態",
        msg346: "企業信息管理",
        msg347: "角色權限管理",
        msg348: "隱藏賬號或部門",
        msg350: "雲電話設置",
        msg351: "域設置",
        msg353: "是否開啟域集成",
        msg356: "域類型",
        msg357: "域服務器地址",
        msg358: "域名",
        msg359: "域管理員賬號",
        msg360: "域管理員密碼",
        msg361: "域賬號自動同步",
        msg364: "測試域鏈接",
        msg365: "保存",
        msg366: "管理文件夾",
        msg367: "授權該二級管理員管理的企業文件夾",
        msg373: "企業信息",
        msg374: "企業名稱",
        msg375: "企業LOGO",
        msg376: "更換LOGO",
        msg378: "支持JPG、PNG、GIF格式圖片大小：200x55 PX",
        msg379: "聯繫人姓名",
        msg380: "企業聯繫人真實姓名",
        msg381: "企業電話",
        msg382: "企業聯繫人常用電話號碼",
        msg383: "企業郵箱",
        msg384: "企業聯繫人常用郵箱",
        msg385: "企業地址",
        msg386: "企業地址",
        msg387: "註冊時間",
        msg393: "製作",
        msg394: "查看或修改",
        msg397: "角色權限設置",
        msg398: "新建角色權限",
        msg399: "角色",
        msg400: "角色 權 限",
        msg401: "創建 者",
        msg402: "後臺管理",
        msg403: "服務中心",
        msg405: "高級",
        msg406: "日誌管理",
        msg407: "退出",
        msg408: "上傳文件",
        msg409: "選擇的文件",
        msg410: "請選擇需要上傳的文件",
        msg412: "選擇需要通知的同事",
        msg413: "同時發送郵件給同事",
        msg415: "確定上傳",
        msg419: "請選擇權限類型",
        msg420: "權限類型",
        msg421: "僅預覽",
        msg422: "僅上傳",
        msg423: "僅下載",
        msg424: "預覽和上傳",
        msg425: "預覽和下載",
        msg426: "全部",
        msg427: "自定義",
        msg428: "文件權限",
        msg435: "本地交互",
        msg436: "權限項",
        msg437: "被授權賬號可在文件夾內的操作",
        msg439: "在線預覽office、圖片、音頻、視頻等類型文件",
        msg441: "上傳文件，有分享權限時生成上傳分享",
        msg443: "下載文件、下載文件夾，有分享權限時生成下載分享",
        msg445: "生成預覽分享，有上傳",
        msg446: "下載權限可生成上傳",
        msg447: "下載分享",
        msg449: "新建、移動、重命名文件或文件夾",
        msg451: "刪除文件或文件夾",
        msg453: "客戶端可調用本地軟件編輯文件，保存更新到雲盤",
        msg454: "權限設置",
        msg468: "分享",
        msg472: "取 消",
        msg473: "正在保存...",
        msg474: "確 定",
        msg486: "2015深圳企業雲科技有限公司",
        msg488: "當前版本信息：",
        msg491: "添加至選擇的同事",
        msg492: "選擇的同事",
        msg493: "正在取消...",
        msg494: "取消發送",
        msg495: "添加",
        msg496: "分享設置-",
        msg497: "為“",
        msg498: "”創建一個分享，將分享通過郵件或QQ發送給相關工作夥伴，一起來訪問這個文件夾協同工作",
        msg499: "訪問權限",
        msg501: "預覽與下載",
        msg503: "分享期限",
        msg504: "訪問密碼",
        msg505: "（訪問密碼不能小於4位）",
        msg507: "取消分享",
        msg509: "生成分享",
        msg511: "通過燕麥企業雲盤給您分享了",
        msg512: "請點擊下面鏈接查看文件",
        msg513: "分享有效期到",
        msg514: "分享訪問密碼",
        msg515: "分享設置-郵件通知",
        msg516: "請輸入需要分享此外鏈的工作人員的電子郵箱",
        msg517: "輸入多個郵件地址時請用",
        msg518: "進行區分",
        msg519: "郵件內容",
        msg522: "發送",
        msg526: "郵件發送分享",
        msg527: "訪問分享",
        msg528: "複製分享",
        msg533: "表格中沒有數據",
        msg534: "消息提示",
        msg535: "文件正在壓縮中",
        msg536: "請稍候",
        msg538: "正在壓縮",
        msg539: "關 閉",
        msg540: "搜索",
        msg541: "該權限將應用在當前​​文件夾及其所有子文件夾！ ",
        msg542: "員工選擇窗",
        msg545: "同級部門列表",
        msg546: "部門列表",
        msg556: "全部清空",
        msg557: "接受",
        msg558: "拒絕",
        msg562: "打開所在文件夾",
        msg563: "已拒收",
        msg564: "即時通訊",
        msg565: "視頻聊天",
        msg566: "發送文件",
        msg567: "添加至常用聯繫人",
        msg568: "來消息了",
        msg569: "未知用戶",
        msg572: "會議室名稱",
        msg573: "參會人員",
        msg574: "參加會議",
        msg576: "視頻會議",
        msg578: "會議主題",
        msg580: "新建會議室",
        msg581: "會議室名稱：",
        msg582: "會議主題或會議編號",
        msg583: "創建會議室",
        msg585: "新建文件夾",
        renameFolder: "重命名文件夾",
        renameFile: "重命名文件",
        msg586: "請輸入文件夾名稱",
        msg590: "文件名",
        msg591: "文件類型",
        msg592: "文件大小",
        msg593: "創建人",
        msg594: "創建時間",
        msg595: "修改人",
        msg596: "版本管理",
        msg597: "修改時間",
        msg598: "文檔處理中...",
        msg603: "關注",
        msg604: "取消關注",
        msg606: "編輯分享",
        msg609: "收藏",
        msg610: "取消收藏",
        msg613: "複製到",
        msg614: "複製",
        msg617: "在線預覽",
        msg618: "查看全部",
        msg621: "更新時間",
        msg625: "收藏夾",
        msgFavFile: "收藏的文件",
        msg626: "排序",
        msg627: "升序",
        msg628: "降序",
        msg630: "返回",
        msg631: "前進",
        msg638: "詳細信息",
        msg644: "分享地址",
        msg645: "權限管理",
        msg647: "查看更多",
        msg648: "備註說明",
        msg649: "沒有備註",
        msg654: "文件所在位置",
        msg655: "恢復",
        msg656: "關注的文件",
        msg661: "分享的文件",
        msg662: "收藏夾",
        msg663: "回收站",
        msg681: "被授權者",
        msg686: "當前",
        msg687: "當前文件夾",
        msg688: "所有文件夾",
        msg690: "已選中",
        msg691: "項",
        msg692: "個文件夾",
        msg693: "個文件",
        msg694: "請選擇要預覽的文件。 ",
        msg695: "未設置分享",
        msg696: "設置",
        msg704: "新建文件",
        msg706: "版本號",
        msg709: "使用說明",
        msgNoPermissonTip: "無操作權限",
        msg710: "企業辦公文件存儲在這裡，即時共享給同事協同辦公。 ",
        msg711: "管理員可為企業文件下的文件夾設置權限，設置了權限的文件夾可被關聯的賬號訪問",
        msg712: "用戶可依據授權對文件進行操作，如操作文件時系統提示沒有權限，請與管理員聯繫申請權限",
        msg713: "您的個人文件可以存儲在這裡，其他同事看不到您的個人文件。 ",
        msg714: "個人文件佔用企業雲盤空間",
        msg715: "企業文件不能轉移到個人文件裡，個人文件可以復製到企業文件",
        msg743: "權限設置",
        msg744: "請選擇需要授權的賬號，並設置權限",
        msg750: "清空列表",
        msg777: "恢 复",
        msg778: "另存為",
        msg779: "上傳完成",
        msgNetError: "網絡錯誤",
        msgUploadSameName: "存在重名文件",
        msg781: "停止",
        msg782: "移除",
        msg784: "覆蓋",
        msg786: "上傳下載",
        msg787: "上傳中",
        msg788: "全部停止",
        msg789: "全部刪除",
        msg792: "快速回复​​",
        msg794: "查看歷史",
        msg796: "暫時還沒有文件消息",
        msg797: "信息管理 --",
        msg798: "消息中心",
        msg799: "關注更新",
        msg803: "聯繫人 --",
        msg805: "至",
        msg806: "文件",
        msg807: "圖片",
        msg808: "視頻",
        msg809: "音頻",
        msg810: "其他",
        msg811: "高級搜索",
        msg814: "添加到通訊錄",
        msg815: "關閉鍵盤",
        msg818: "我的號碼：",
        msg819: "剩餘時間：",
        msg820: "分鐘",
        msg821: "其他參會人員的號碼：",
        msg822: "開始雲電話會議",
        msg826: "對方的號碼：",
        msg827: "輸入手機號",
        msg829: "從通訊錄中選擇",
        msg830: "呼叫",
        msg831: "刪除聯繫人",
        msg835: "添加聯繫人",
        msg838: "聯繫人姓名",
        msg839: "手機",
        msg840: "聯繫人手機號碼",
        msg841: "公司",
        msg842: "聯繫人所在公司",
        msg843: "部門",
        msg844: "聯繫人所在部門",
        msg845: "職務",
        msg846: "聯繫人當前職務",
        msg850: "正在聯通各方...",
        msg851: "增加人員",
        msg852: "結束會議",
        msg855: "重撥",
        msg856: "繼續撥號",
        msg857: "結束通話",
        msg858: "雲電話",
        msg861: "雲電話會議",
        msg863: "通訊錄",
        msg870: "徹底刪除",
        msg876: "清空",
        msg877: "回收站",
        msg878: "企業文件",
        msg882: "續 費",
        msg883: "一年",
        msg884: "三年",
        msg885: "五年",
        msg886: "支付",
        msg887: "購買空間：",
        msg893: "退出个人设置",
        msg894: "移動端下載",
        msg895: "燕麥企業雲盤二維碼",
        msg897: "掃描二維碼下載APP",
        msg898: "同時支持iOS和Android系統",
        msg899: "企業雲盤安卓版",
        conferencePlugDown: "視頻會議插件下載",
        installOnline: "在線安裝",
        msg900: "燕麥客戶端下載",
        msg901: "客戶端",
        msg902: "適合：Android 2.3及 以上",
        msg903: "最新版本：2.6.0 軟件大小：16.95M",
        msg904: "安裝方式",
        msg905: "手機掃描左方二維碼直接下載安裝",
        msg906: "下載安裝包到電腦通過豌豆莢/91手機助手等軟件安裝",
        msg907: "企業雲盤客戶端下載",
        msg908: "企業雲盤iPhone版",
        msg910: "適合：iOS 5.0 以上",
        msg911: "最新版本：2.6.0 軟件大小：6.4M",
        msg913: "進入App Store搜索",
        msg914: "安裝",
        msg915: "手機掃描左上方二維碼直接下載安裝",
        msg919: "適合：iOS 5.0",
        msg920: "最新版本：1.4 軟件大小：7.9M",
        msg922: "下載安裝包並使用iTunes同步到iPad",
        msg923: "桌面客戶端下載",
        msg927: "適合：WinXP/Vista/Win7/Win8",
        msg928: "最新版本",
        msg929: "客戶端下載",
        msg930: "64位客戶端下載",
        msg931: "升級指南",
        msg935: "適合：OS X 10.7.4 以上",
        msg937: "文檔下載",
        msg938: "幫助文檔",
        msg941: "企業雲盤用戶指南v3.0",
        msg942: "企業雲盤管理員指南v3.0",
        msg945: "介紹文檔",
        msg946: "產品手冊",
        msg947: "宣傳手冊",
        msg955: "最新版本:2.1.2 軟件大小:6.09M",
        msg957: "將安裝包複製到手機內存卡直接安裝",
        msg962: "最新版本: 2.1.0 軟件大小: 2.5M",
        msg964: "下載安裝包並使用iTunes同步到iPhone",
        msg969: "最新版本: 2.1.6",
        msg976: "最新版本: 1.0.0 軟件大小: 4.2M",
        msg992: "舊密碼",
        msg993: "當前使用的密碼",
        msg995: "新的密碼",
        msg997: "重新輸入新密碼",
        msg999: "個人資料",
        msg1001: "系統設置",
        msg1004: "版本信息",
        msg1007: "聲音設置",
        msg1008: "發送消息提示音",
        msg1009: "接收消息提示音",
        msg1010: "視頻通話提示音",
        msg1011: "語音通話提示音",
        msg1012: "好友登入提示音",
        msg1013: "好友登出提示音",
        msg1017: "登陸賬號",
        msg1018: "在線狀態",
        msg1019: "在線",
        msg1020: "忙碌",
        msg1021: "隱身",
        msg1022: "個性簽名",
        msg1023: "個性簽名",
        msg1024: "更換頭像",
        msg1026: "個人信息",
        msg1029: "性 別",
        msg1032: "出生日期",
        msg1033: "真實年齡",
        msg1034: "個人興趣",
        msg1035: "個人興趣、愛好、特長等",
        msg1036: "工作信息",
        msg1037: "當前職位",
        msg1038: "所在城市",
        msg1039: "所在城市",
        msg1040: "專業類型",
        msg1041: "專業類型",
        msg1043: "企業內部郵箱或常用郵箱",
        msg1044: "座機號碼",
        msg1045: "企業內部座機號碼",
        msg1046: "手機號碼",
        msg1047: "手機號碼",
        msg1051: "當前版本",
        msg1052: "新版功能",
        msg1053: "新版的視頻會議功能",
        msg1054: "開會溝通更加高效方便",
        msg1055: "後臺管理中新增了用戶批量導入功能",
        msg1056: "添加用戶更加快捷方便",
        msg1057: "聊天框中可以直接發送本地文件或者雲盤中的文件",
        msg1058: "文檔協同更加簡單",
        msg1059: "新版的文件夾和多文件下載功能",
        msg1060: "不用等待即可下載文件夾和大文件",
        msg1061: "添加分享權限限制",
        msg1062: "關聯要分享的雲盤文件權限",
        msg1063: "文件共享更加安全",
        msg1064: "版本",
        msg1065: "全新的管理員後臺設計",
        msg1066: "全面提升管理員的管理能力和操作體驗",
        msg1067: "新增管理員前端文件夾權限設置功能",
        msg1068: "文件夾權限收放更自如",
        msg1069: "優化角色權限和二級管理員配置",
        msg1070: "權限分配更合理",
        msg1071: "新增個人文件空間開關功能",
        msg1072: "個人文件空間管理更便捷",
        msg1073: "優化視頻會議",
        msg1074: "會議界面更美觀",
        msg1075: "新增分享上傳功能",
        msg1076: "文件共享隨心所欲",
        msg1078: "上傳文件到企業文件目錄時新增了通知同事的功能",
        msg1079: "上傳的文件可以以消息或郵件方式通知指定的人員",
        msg1080: "新增分享郵件通知功能",
        msg1081: "用戶可以將分享外鏈直接以郵件方式發送到指定郵箱",
        msg1082: "新增分享編輯功能",
        msg1083: "便於用戶對已分享的外鏈設置進行修改",
        msg1084: "新增文件模塊使用說明",
        msg1085: "便於用戶了解各產品各模塊的具體功能",
        msg1086: "文件增加備註功能",
        msg1087: "用戶可以為選定的文件編輯備註說明",
        msg1088: "方便多人協作辦公",
        msg1089: "上傳同名文件時",
        msg1090: "新增",
        msg1091: "重命名、覆蓋、刪除",
        msg1092: "選項",
        msg1093: "方便用戶對同名文件做適當處理",
        msg1095: "用戶界面和產品功能全面升級",
        msg1096: "將帶給您全新的用戶體驗",
        msg1097: "雲盤文件新增詳細信息展示界面",
        msg1098: "信息獲取更輕鬆",
        msg1099: "雲盤文件新增快捷操作入口",
        msg1100: "辦公操作更便捷",
        msg1101: "優化文件搜索功能",
        msg1102: "文件定位更快捷",
        msg1103: "優化文件版本管理",
        msg1104: "歷史記錄、版本恢復",
        msg1105: "功能",
        msg1106: "文件維護更給力",
        msg1107: "即時通訊聊天框自動疊加",
        msg1108: "多人聊天更簡便",
        msg1109: "新增用戶信息名片",
        msg1110: "用戶信息更醒目",
        msg1111: "優化消息管理模塊",
        msg1112: "消息管理更直觀",
        msg1113: "企業文件新增文件關注功能",
        msg1114: "讓用戶實時掌控文檔的狀態變更",
        msg1115: "企業文件新增文件收藏功能",
        msg1116: "提升用戶的文檔管理體驗",
        msg1117: "個人文件新增文件複製功能",
        msg1118: "個人文件可以輕鬆複製到企業雲盤",
        msg1119: "新增上傳下載模塊",
        msg1120: "實時顯示文件上傳/下載狀態",
        msg1121: "並記錄上傳/下載信息",
        msg1122: "新版不支持增強版登陸.",
        msg1123: "部門",
        msg1124: "職位",
        msg1126: "拍照",
        msg1129: "內線",
        msg1135: "添加常用聯繫人",
        msg1137: "刪除常用聯繫人",
        msg1139: "常用聯繫人",
        msg1154: "部門:",
        msg1155: "職位:",
        msg1156: "內線:",
        msg1160: "當前空間剩餘",
        msg1161: "購買增值服務",
        msg1162: "賬 戶 管 理",
        msg1163: "安 全 退 出",
        msg1168: "移除常用聯繫人",
        msg1176: "請描述您將要上傳的文件",
        msg1177: "20字以內",
        msg1180: "查看",
        msg1188: "服務熱線",
        msg1189: "分享中心",
        msg1190: "文件信息",
        msg1193: "到期時間",
        msg1194: "意見反饋",
        msg1195: "在 線 客 服",
        msg1196: "問 題 反 饋",
        msg1197: "請輸入查看密碼",
        msg1199: "對不起",
        msg1200: "文件不存在.",
        msg1202: "服務異常",
        msg1203: "請稍後再試.",
        msg1204: "等待中",
        msg1205: "上傳失敗",
        msg1208: "請上傳文件",
        msg1209: "文件名稱",
        msg1226: "恭喜",
        msg1227: "抱歉",
        msg1232: "圖片加載中...",
        msg1233: "縮小",
        msg1234: "放大",
        msg1235: "還原",
        msgToSmall: "最小化",
        msg1236: "上一張",
        msg1237: "下一張",
        msg1238: "左旋轉",
        msg1239: "右旋轉",
        msg1240: "打印",
        msg1241: "全屏",
        msg1242: "新增關注、分享、收藏文件夾中文件路徑顯示，文件預覽功能，屏蔽屬性欄顯示;",
        msg1243: "屏蔽企業文件屬性欄操作功能;",
        msg1244: "刷新功能優化為刷新當前目錄;",
        msg1245: "新增企業文件複製功能;",
        msg1246: "優化上傳列表顯示方式;",
        msg1247: "管理員後臺增加日誌管理功能;",
        msg1248: "修改部分BUG;",
        msgGoBack: "返回",
        msgCanNotContactUser: "無法聯繫到該用戶！",
        msgEnterAccountOrName: "請輸入賬號或者真實姓名",
        msgUserNumber: "企業用戶總數",
        deleteFileTip: "該操作不可恢復, 確定要刪除?",
        emptyFileTip: "確定要清空回收站? 清空回收站後回將無法還原被清除的文件",
        restoreFileTip: "您確定要恢復嗎?",
        msgDeleteFail: "刪除失敗!",
        msgRepasswordError: "兩次密碼不一致!",
        msgPasswordError: "密碼錯誤",
        msgSaveFail: "保存失敗!",
        msgSaveSuccess: "保存成功!",
        msgCreateFail: "創建失敗!請稍後重試!",
        msgEditPermConfirm: "該權限將應用在當前​​文件夾及其所有子文件夾!",
        msgCopySuccess: "複製成功!",
        msgPageLoadError: "頁面加載失敗提示：內容加載失敗!請刷新頁面後重試!",
        msgRequestExpire: "請求操作超時提示：網絡不穩定!請稍後重試!",
        msgSysAbnormal: "系統異常，稍後再試!",
        msgServerError: "系統錯誤!",
        msgComming: "來消息了",
        msgAddSucc: " 添加成功!",
        msgAddFail: "添加失敗!",
        msgDelSucc: "刪除成功!",
        msgDelFail: "刪除失敗!",
        msgPersonDiskClose: "您的個人雲盤被關閉!",
        msgAccountLoginOther: "您的賬號在別處登錄!",
        msgFileHaveExist: "已經存在!",
        msgEntFile: "企業文件",
        msgPersonFile: "個人文件",
        msgStatusOnline: "在線",
        msgStatusBusy: "忙碌",
        msgStatusLeave: "離線",
        msgStatusCorbet: "隱身",
        msgEntEmpty: "企業名不能為空!",
        msgEntLengthError: "企業名由2-50個中英文或數字字符組成!",
        msgEntRegisted: "該企業已存在",
        msgEntFormatError: "企業名不能使用特殊字符!",
        msgEntSpacesError: "企業名開頭和結尾不能有空格",
        msgAccountEmpty: "賬號不能為空!",
        msgAccountLocked: "賬號已被鎖定!",
        msgAccountLengthError: "賬號由2-20個中英文或數字字符組成!",
        msgAccountSpacesError: "賬號開頭和結尾不能有空格!",
        msgPasswordEmpty: "密碼不能為空!",
        msgPasswordLength: "密碼由6-30中英文字母或數字字符組成!",
        msgRepasswordEmpty: "請再次輸入您的密碼!",
        msgLoginInfoError: "登錄信息錯誤!",
        msgServiceExpire: "企業服務已到期!",
        msgRealnameEmpty: "輸入真實姓名!",
        msgRealnameLength: "真實姓名由2-60個中文/英文/字符組成",
        msgRealnameLengthLongError: "真實姓名過長!",
        msgEmailEmpty: "輸入您常用的郵箱!",
        msgEmailRegisted: "該郵箱已經被註冊過!",
        msgEmailFormatError: "郵箱地址格式錯誤!",
        msgPhoneEmpty: "號碼不能為空!",
        msgPhoneLengthError: "'號碼長度為6-20位'",
        msgValidateError: "驗證碼錯誤!",
        msgAgreeTerms: "同意條款才能註冊!",
        msgNoUser: "請選擇用戶!",
        msgSameFile: "失敗!存在同名文件!",
        msgUploadNumLimit: "一次上傳文件不能超過200個",
        msgNoFile: "請選擇要操作的文件!",
        msgNoFileFolder: "請選擇文件或文件夾!",
        msgNoFolder: "請選擇文件夾!",
        msgNoPermission2: "無此權限!",
        msgPersonFolderExceed: "文件夾已滿!請聯繫管理員擴展空間!",
        msgNameInjectError: "名稱不能包含代碼!",
        msgCreateDestFolderDeleted: "您創建的文件所在文件夾已經被刪除，請備份內容!",
        msgNameConflict: "命名衝突!當前目錄下有相同命名!",
        msgNameNull: "名稱不能為空!",
        msgDiskSizeFull: "雲盤空間已滿!",
        msgDiskSizeLack: "雲盤空間不足!",
        msgNoFlashPlugin: "使用上傳功能，需要安裝Flash插件，點擊這裡快速安裝!",
        msgReadNoFlashPlugin: "使用文件預覽功能，需要安裝Flash插件，點擊這裡快速安裝!",
        msgDiskLessAssign: "企業雲盤剩餘空間不足分配",
        msgDiskUsedOverAssign: "雲盤已使用空間超過分配空間",
        msgFolderNameConfict: "當前文件夾下存在相同文件夾!",
        msgFolderCreateConflict: "命名衝突!當前目錄下有相同命名!",
        msgFolderNameNull: "文件夾名稱不能為空!",
        msgFolderNameInjectError: "文件夾名稱不能包含特殊符號!",
        msgFolderSaveConflict: "保存失敗!存在同名文件夾!",
        msgFolderNoExist: "文件夾不存在!",
        msgFolderMoveNameConflict: "移動失敗! 目標文件夾下有同名文件夾!",
        msgFolderDeleted: "文件夾已被刪除!",
        msgParentFolderDeleted: "父文件夾被刪除!",
        msgUploadCoverFail: "覆蓋失敗!請稍後重試!",
        msgUploadRootFolder: "根目錄下不能上傳文件!",
        msgUploadConflict: "當前目錄下有相同命名!是否重命名?",
        msgFileContentInjectError: "文檔中存在非法的內容!請修改後再保存!",
        msgFileLocked: "文件已被鎖定!",
        msgFileEditLocked: "文件被加鎖，無法編輯!",
        msgFileNoExist: "文件不存在!",
        msgFileDelLocked: "文件被鎖定!請先解鎖!",
        msgFileMoveNameConflict: "移動失敗! 目標文件夾下有同名文件!",
        msgFileMoveSuccess: "文件移動成功!",
        msgFileRoot: "根目錄下不能存放文件!",
        msgEntDefaultFolder: "根目錄下不能存放文件,文件將存放在'共享文件夾'下！",
        msgPersonDefaultFolder: "根目錄下不能存放文件,文件將存放在'我的文檔'下！",
        msgFileDealing: "文檔處理中, 請稍候!",
        msgFileTransterFail: "文檔轉換失敗!請稍後重試!",
        msgFileDealComplete: "文檔處理完成, 請點擊打開!",
        msgFileConflict: "文件夾下存在同名文件",
        msgFileDeleted: "文件無法找到，可能被刪除，請刷新後重試!",
        msgFileVerConflict: "文件版本衝突",
        msgNameFileError: '文件命名中不能包含任何以下符號：  / : * ? \\" < > |',
        msgNameFolderError: '文件夹命名中不能包含任何以下符号：  / : * ? \\" < > |',
        msgIsSureDel: "確定刪除?",
        msgIsSureLock: "確定鎖定?",
        msgFileIsLockedByYou: "該文件被您鎖定!點擊解鎖按鈕進行解鎖",
        msgOtherUser: "其他用戶",
        msgFileIsLock: "該文件被鎖定",
        msgPlsContact: "請聯繫",
        msgContactAdminUnlock: "或管理員進行解鎖!",
        msgFolder: "文件夾 ",
        msgFile: "文件",
        msgIsSureUnlock: "確定解鎖?",
        msgUngrpContact: "未分組聯繫人",
        msgFileInvisible: "無權限查看文件，或者文件被修改、刪除，無法找到!",
        msgRenameNull: "名稱不能為空",
        msgRenameForbidden: "不能重命名",
        msgRenameOne: "一次只能重命名一個文件或文件夾!",
        msgRenameFail: "重命名失敗",
        msgCopyToParent: "該文件夾下已有此文件，請重新選擇文件夾!",
        msgVersionEditConflict: ",修改失敗，版本衝突!文件已被他人修改!",
        msgVersionDelConflict: "刪除失敗!版本衝突，該文件已被修改!",
        msgLockFail: "鎖定失敗!",
        msgLockNoFile: "請選擇要鎖定的文件!",
        msgLockOne: "一次只能鎖定一個文件!",
        msgUnlockFail: "解鎖失敗!",
        msgUnLockOne: "一次只能解鎖一個文件!",
        msgUnLockNoFile: "請選擇要解鎖的文件!",
        msgAttentionFail: "關注失敗!",
        msgUnAttentionFail: "取消關注失敗!",
        msgUnCollectSuccess: "取消收藏成功!",
        msgCollectFail: "收藏失敗!",
        msgCollectSuccess: "收藏成功!",
        msgCollectFolderError: "不能收藏文件夾!",
        msgUnCollectFail: "收藏文件失敗!",
        msgUnCollectError: "您選中的文件中存在沒有被收藏的!",
        msgLinkEndtimeError: "分享到期時間不能早於今天!",
        msgLinkPasswordLength: "密碼長度4-6位!",
        msgLinkAddressEmpty: "請輸入收件人的郵箱!",
        msgLinkContactEmpty: "請選擇接收郵件的聯繫人!",
        msgUnLinkSuccess: "取消分享成功!",
        msgMoveSuccess: "移動成功!",
        msgMoveNoDest: "請選擇移動到的文件夾!",
        msgMoveToRootFolder: "不能移動到根目錄!",
        msgMoveToSub: "操作有誤!父文件夾無法移動到其子文件夾​​中!",
        msgMoveSameDirError: "操作有誤!文件移動前後位置相同!",
        msgMoveOnFolderConflict: "移動失敗! 目標文件夾下有同名文件夾!",
        msgMoveOnFileConflict: "移動失敗! 目標文件下有同名文件!",
        msgMoveOnVersionConflict: "移動失敗!當前文件已被修改!",
        msgMoveForbidden: "不能移動!",
        msgCopyNoFile: "請選擇要操作的文件!",
        msgCopyFolderError: "不支持文件夾複製!",
        msgFileCopySuccess: "文件複製成功!",
        msgCompressComplete: "壓縮完成!請點擊下載按鈕下載!",
        msgZipComplete: "文件夾的文件壓縮完成!請點擊確認按鈕下載!",
        msgDownloadOnCompressing: "其他文件正在壓縮中, 請稍後!",
        msgDownloadOnLargeCompressing: "文件壓縮中!壓縮完成後您將收到系統消息提示您進行下載!",
        msgCompressFail: "壓縮失敗!請重新下載!",
        msgSaveToFolderDeleted: "當前文件保存路徑已被管理員修改!請備份文件內容!",
        msgMailSendFail: "郵件發送失敗!請稍後重試!",
        msgMailSendSuccess: "發送郵件成功!",
        msgPersonFolderClosed: "您的個人文件夾被關閉!",
        msgGetPermissionFail: "獲取權限失敗!請稍後重試!",
        msgPermissionNoUser: "請選擇用戶!",
        msgPermissionFail: "權限設置異常!請重新設置!",
        msgPermissionSuccess: "權限設置成功!",
        msgReadUnsupport: "該文件暫不支持預覽!",
        msgReadDelFile: "您查看的圖片已經被刪除,我們將展示圖片列表中的第一張圖片!",
        msgFirstPic: "當前圖片是第一張!",
        msgLastPic: "當前圖片是最後一張!",
        msgFirstPagePic: "當前已是第一組圖片!",
        msgLastPagePic: "當前已是最後一組圖片!",
        msgBigestPic: "不能再放大了!",
        msgLeastPic: "不能再縮小了!",
        msgEditUnsupport: "該文件暫不支持在線編輯!",
        msgRecoverFail: "恢復失敗!請稍後重試!",
        msgRecoverSuccess: "恢復成功!",
        msgRecoverNoVersion: "請選擇要保存的文件版本!",
        msgRecoverySaveasFail: "保存失敗!請稍後重試!",
        msgRecoverySaveasSuccess: "保存成功!",
        msgMarkFail: "修改備註失敗!請稍後重試!",
        msgMarkSuccess: "修改備註成功!",
        msgRecycleVerConflict: "版本衝突!請刷新後重試!",
        msgRecycleFileConflict: "目標文件夾下有同名文件!",
        msgRecycleFolderConflict: "目標文件夾下有同名文件夾!",
        msgConfirmEmptyRecycle: "您確定要清空回收站內所有的文件嗎?",
        msgShareOne: "一次只能分享一個文件或文件夾!",
        msgUnShareOne: "一次只能取消分享一個文件或文件夾!",
        msgDeleteOnVerConflict: "刪除失敗，文件版本衝突!",
        msgSysFileForbidden: "您無權修改系統文件!",
        msgSysFolderForbidden: "您無權修改系統文件!",
        msgSysRenameForbidden: "系統文件不支持重命名!",
        msgSysDelForbidden: "系統文件不能刪除!",
        msgSysMoveForbidden: "系統文件不支持移動!",
        msgAddUsualNoUser: "請選擇要添加的常用聯繫人!",
        msgAddUsualSucess: "添加成功!",
        msgAddUsualFail: "添加失敗!請稍後嘗試!",
        msgDelUsualNoUser: "請選擇要刪除的常用聯繫人!",
        msgDelUsualSucess: "刪除成功!",
        msgDelUsualFail: "刪除失敗!請稍後嘗試!",
        msgChatInjectError: "發送失敗!您輸入的信息包含不安全信息!",
        msgChatOnline: "只能與在線用戶進行視頻!",
        msgSendFileError: "系統錯誤!我們將盡快解決問題，是否發送錯誤報告?",
        msgReceiveFileError: "接收失敗!",
        msgFileMissed: "文件無法找到，可能被刪除，請刷新後重試!",
        msgMeetingNoName: "請為會議室命名!",
        msgMeetingNameConflict: "會議室命名衝突!",
        msgCreateMeetingFail: "會議創建失敗!",
        msgDelMeetingFail: "會議刪除失敗!",
        msgOpenAttNoPermission: "無此權限!請聯繫管理員授權!",
        msgAttFileNoExist: "文件不存在!文件被修改或刪除!",
        msgEditAccountFail: "修改個人資料失敗!",
        msgOriginPassError: "原始密碼不正確!",
        msgNewPassLength: "密碼由6-30個字符組成!",
        msgEditPassFail: "系統錯誤!請稍後重試!",
        msgEditPassSuccess: "密碼修改成功!",
        msgSysSettingSuccess: "修改成功!",
        msgLinkNoExist: "分享不存在!",
        msgLinkExpire: "分享已過期!",
        msgLinkPasswordError: "密碼錯誤",
        msgLinkFolderConflict: "保存失敗!存在同名文件夾!",
        msgLinkSaveFail: "保存失敗!",
        msgLinkDownloadDisable: "該分享文件不能下載!",
        msgLinkDownloadNoFile: "請選擇要下載的文件!",
        msgDeptNameError: "只能用英文、中文不能使用特殊符號（英文單次中間可以使用空格）",
        msgDeptExisted: "該部門已存在!",
        msgCreateDeptFail: "新建部門失敗",
        msgDelDeptConfirm: "該部門及其所有子部門也同時被刪除，部門及其所有子部門下的所有成員成為未分組成員!您確定刪除該部門嗎",
        msgDelDeptFail: "刪除部門失敗",
        msgAddAccountSuccess: "成員添加成功!",
        msgCreateAccNoFolder: "請選擇文件夾!",
        msgAccSafeAuthFail: "用戶信息不規範或不完整!請修改後再次提交!",
        msgAccMunbersLimit: "企業可用用戶數不足!請聯繫管理員購買!",
        msgAccExisted: "該賬號已經存在!",
        msgMailPhone: "請輸入正確的郵箱地址或者正確的手機號碼!",
        msgAccGetPermFail: "網絡不穩定!請稍後重試!",
        msgAccEditPermNoPerm: "請對文件設置相應權限!",
        msgAccEditPermSuccess: "權限修改成功!",
        msgAccEditSuccess: "賬號修改成功!",
        msgAccLocked: "該賬號已被鎖定!",
        msgAccLockSucess: "賬號鎖定成功!",
        msgAccUnlockSuccess: "賬號解鎖成功!",
        msgDelAccConfirm: "您確定要刪除該賬號嗎?",
        msgDelAccSuccess: "賬號刪除成功!",
        msgFolder0Size: "文件容量不能為0!",
        msgPersonFolderLess: "個人文件容量不能小於已使用容量!",
        msgEntServiceExpire: "企業服務已到期!請聯繫管理員續費!",
        msgEntNotExist: "企業不存在!",
        msgEditPasswordSuccess: "密碼修改成功!",
        msgImportFormatError: "文件格式不正確!請下載標準模板，正確填寫後導入!",
        msgImportInfoError: "導入的用戶信息不規範或不完整!請修改後再次導入!",
        msgImportAccLenSpace: "賬號由2~50個字符組成, 且開頭結尾不能為空!",
        msgImportAccountOK: "賬號導入成功!",
        msgImportGenderEmpty: "性別不能為空",
        msgImportEmailEmptyFormat: "郵箱不能為空, 且格式要正確!",
        msgLockAdmin: "無此權限!該賬號為超級管理員!",
        msgUnlockAdmin: "無此權限!該賬號為超級管理員!",
        msgOperateAdmin: "無此權限!該賬號為超級管理員!",
        msgGetInfoFail: "網絡不穩定!請稍後重試!",
        msgAdminNameEmpty: "請輸入用戶真實姓名!",
        msgAdminPhoneEmpty: "電話不能為空!",
        msgAdminPhoneLength: "手機號碼（11位）或座機號碼（區號-電話號碼）!",
        msgAdminEmailFormatError: "郵箱格式不正確!",
        msgAccIsAdmin: "該賬號已經是管理員!",
        msgAdminCreateOk: "管理員創建成功!",
        msgAdminSettingGetInfoFail: "網絡不穩定!請稍後重試!",
        msgAdminSettingNoFolder: "請設置該管理員需要管理的文件夾!",
        msgAdminEditOk: "管理員修改成功!",
        msgAdminChangeOk: "管理員更換成功!",
        msgAdminLockOk: "鎖定成功!",
        msgAdminUnlockOk: "解鎖成功!",
        msgAdminDelOk: "管理員刪除成功!",
        msgDomainTestFail: "域鏈接不可用!",
        msgDomainTestOk: "域鏈接可用!",
        msgDomainFail: "域設置失敗!請檢測域設置信息!",
        msgDomainOK: "域設置成功!",
        msgEntEditSuccess: "企業信息修改成功!",
        msgRoleNameEmpty: "請為角色命名!",
        msgRoleNoPerm: "請為角色設置相應權限!",
        msgRoleNoAcc: "請為角色添加賬號!",
        msgRoleExisted: "該角色已經存在!",
        msgRoleCreateOk: "角色創建成功!",
        msgRoleEditGetInfoError: "網絡不穩定!請稍後重試!",
        msgRoleEditFail: "系統錯誤!角色修改失敗!",
        msgRoleEditOk: "角色修改成功!",
        msgRoleNameFormatError: "中文賬號不能使用空格，英文單次中間可以使用空格，不能使用特殊字符",
        msgDelRoleConFirm: "您確定要刪除該角色嗎?",
        msgDelRoleFail: "系統錯誤!刪除角色失敗!",
        msgDelRoleOk: "角色已被刪除!",
        msgEntEditSuccess: "企業信息修改成功!",
        msgRoleNameEmpty: "請為角色命名!",
        msgRoleNoPerm: "請為角色設置相應權限!",
        msgRoleNoAcc: "請為角色添加賬號!",
        msgRoleCreateOk: "角色創建成功!",
        msgRoleEditGetInfoError: "網絡不穩定!請稍後重試!",
        msgRoleEditFail: "系統錯誤!角色修改失敗!",
        msgRoleEditOk: "角色修改成功!",
        msgRoleNameFormatError: "中文賬號不能使用空格，英文單次中間可以使用空格，不能使用特殊字符",
        msgDelRoleConFirm: "您確定要刪除該角色嗎?",
        msgDelRoleFail: "系統錯誤!刪除角色失敗!",
        msgDelRoleOk: "角色已被刪除!",
        msgReset: "重置",
        msgConfirmResetLogo: "確定還原默認Logo?",
        msgChangeLogoFail: "企業LOGO更換失敗!",
        msgPhoneNotEnable: "您公司尚未開通雲電話功能, 請聯繫管理員開通!",
        msgPhoneNotSetting: "請點擊頭像-->賬號管理-->手機號碼中添加手機號碼，然後才能成功撥號!",
        msgPhoneTimeLess: "貴公司雲電話的分鐘數已經不夠使用! 請聯繫管理員續費!",
        msgQueryPhoneRecord: "通話查詢",
        msgUnConnect: "未接通",
        msgConnectSuccess: "通話成功",
        msgInfoDealing: "数据处理中",
        msgPhoneRecord: "通話記錄",
        msgLook: "查 看",
        msgCloseUp: "收 起",
        msgDetails: "詳情",
        msgNextStep: "下一步",
        msgSubmitEdit: "提交修改",
        msgResend: "再次發送",
        msgClickResend: "秒後再次點擊發送",
        msgMailExisted: "郵箱地址已存在！ ",
        msgPhoneExisted: "手機號碼已存在！ ",
        msgMailOrPhoneCorrect: "請輸入正確的郵箱或手機號碼！ ",
        msgSetPwd: "請設置您登錄企業雲盤的密碼",
        msgCompleteEntInfo: "完善您所在企業的基本信息",
        msgInputNewPwd: "設置燕麥企業雲盤登錄密碼",
        msgValitdateTimeOut: "驗證超時!請重新發送驗證碼，再次驗證!",
        msgFolderSpaceOver: "目標文件夾空間不足!",
        msgGetPwd: "找回密碼",
        msgLoginMailOrPhone: "您的登錄賬號：郵箱地址或者手機號",
        msgAskQuestion: "如有任何問題，請聯繫客服人員：",
        msgInviteColleague: "邀請同事加入",
        msgColleagueMailOrPhone: "同事的郵箱地址\\手機號碼",
        msgColleagueInfo: "同事信息",
        msgUsualMailOrPhone: "常用的郵箱地址或手機號碼",
        msgMailOrPhone: "郵箱地址/手機號",
        msgSendValiInfo: "發送驗證信息",
        msgBackLogin: "返回登錄界面",
        msgChangePwdOk: "密碼修改成功!",
        msgTips: "溫馨提示",
        msgLoginNow: "馬上登錄",
        msgRegisterS: "注&nbsp;&nbsp;冊",
        msgAccountLogin: "已有賬號登錄",
        msgAccountReg: "賬號註冊",
        msgForgetPwd: "忘記密碼",
        msgLoginS: "登&nbsp;&nbsp;錄",
        msgShiftLogin: "切換登陸界面",
        msgOldLogin: "舊登錄界面",
        msgLoginPwd: "登錄密碼",
        msgEntName: "企業名稱",
        msgMailOrPhoneOrAccount: "賬號/郵箱地址/手機號",
        msgNewLogin: "新登錄界面",
        msgEntNameComplete: "建議輸入完整企業名稱",
        msgContact: "聯繫人",
        msgContactNotEmpty: "聯繫人不能為空",
        msgContactWay: "聯繫方式",
        msgContactWayNotEmpty: "聯繫方式不能為空",
        msgMailMobilePhone: "郵箱地址手機號碼座機號碼",
        msgPrevStep: "上一步",
        msgLoginDiskPwd: "請輸入登錄密碼",
        msgInputPwdAgain: "再次輸入密碼",
        msgFinish: "完成",
        msgEntRegSuccess: "企業註冊成功!",
        msgLoginAccount: "登錄賬號",
        msgMailMessageSent: "系統給您的註冊郵箱{{mail}}發送了一封驗證郵件, 請登錄郵箱查看",
        msgSenconds: "秒",
        msgInputPhoneValidate: "請輸入手機驗證碼",
        msgResendValidate: "重新發送驗證碼",
        msgSubmitValiCode: "提交驗證碼",
        msgAboutUs: "關於我們",
        msgLogin: "登錄",
        msgRegister: "註冊",
        msgMailPhoneToLogin: "建議使用企業郵箱註冊",
        msgDoubtConsult: "如有疑問請諮詢",
        msgCSOnline: "在線客服",
        msgOrCallPhone: "客服熱線：",
        msgContactCS: "以上方式無法找回密碼的用戶，請聯繫客服處理",
        msgPhone: "電話",
        msgMail: "郵箱",
        msgReadClause: "請先閱讀服務條款",
        msgClickToMessage: "點擊這裡給我發消息",
        msgDownloadFile: "下載文件",
        msgDownloadRoute: "下載路徑",
        msgChooseRoute: "請選擇路徑",
        msgBrowser: "瀏 覽",
        msgDownload: "下 載",
        msgCancel: "取 消",
        msgLocalPhoto: "本地相片",
        msgSaveImg: "保存頭像",
        msgOatosUpgrade: "燕麥升級程序",
        msgOatosUpgrading: "燕麥程序正在升級, 請稍候",
        msgChooseValidate: "验证邮箱地址或手机号",
        msgChooseMailValidate: "验证邮箱地址",
        msgChoosePhoneValidate: "验证手机号",
        msgUsualMailValidate: "常用郵箱地址驗證",
        msgPhoneValidate: "有效手機號碼驗證",
        msgValidate: "驗證",
        msgValidated: "已驗證",
        msgLoginValidate: "登錄賬號驗證",
        msgValidateBenifit: "為什麼要驗證郵箱或手機號？",
        msgValidateDescription: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕麥企业雲盤账号系统已升级，您验证邮箱地址或手机号后，可以享受更好的安全保障和功能体验。通过验证的邮箱地址和手机号，您可以：",
        msgUseForLogin: "作為登錄賬號直接登錄企業雲盤;",
        msgUseForGetPwd: "在線找回企業雲盤登錄密碼;",
        msgMoreSecurity: "驗證手機號優先體驗雲電話功能。",
        msgValidateMail: "為什麼要驗證郵箱地址？",
        msgValidateMailDescription: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕麥企业雲盤账号系统已升级，您验证邮箱地址后，可以享受更好的安全保障和功能体验。通过验证的邮箱地址，您可以：",
        msgMailMoreSecurity: "優先獲得新功能體驗或活動優惠。",
        msgValidatePhone: "為什麼要驗證手機號？",
        msgValidatePhoneDescription: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕麥企业雲盤账号系统已升级，您验证手机号可以享受更好的安全保障和功能体验。通过验证的手机号，您可以：",
        msgPhoneMoreSecurity: "優先體驗雲電話功能。",
        msgRegAgain: "驗證信息丟失,請重新",
        msgAccountUsed: "賬號已被使用",
        msgEntNameUsed: "該企業已被註冊",
        msgNoPermission: "您還沒有此權限",
        msgMeetingRoom: "會議室",
        msgEditFail: "修改失敗",
        msgEditOK: "修改成功",
        msgInputDeptName: "請輸入合法的部門名稱!",
        msgRecycleEmpty: "回收站中沒有文件",
        msgAttentionEmpty: "沒有關注的文件",
        msgLinkEmpty: "没有分享的文件",
        msgFavoriteEmpty: "沒有分享的文件",
        msgSearchEmpty: "沒有與搜索條件匹配的項",
        msgMyDoc: "我的文檔",
        msgMyPic: "我的圖片",
        msgReceiveFiles: "接收的文件",
        msgSendFiles: "發送的文件",
        msgShareFolder: "共享文件夾",
        msgSimMyDoc: "我的文档",
        msgSimMyPic: "我的图片",
        msgSimReceiveFiles: "接收的文件",
        msgSimSendFiles: "发送的文件",
        msgSimShareFolder: "共享文件夹",
        msgTraMyDoc: "我的文檔",
        msgTraMyPic: "我的圖片",
        msgTraReceiveFiles: "接收的文件",
        msgTraSendFiles: "發送的文件",
        msgTraShareFolder: "共享文件夾",
        msgEngMyDoc: "My document",
        msgEngMyPic: "My pictures",
        msgEngReceiveFiles: "Received files",
        msgEngSendFiles: "Sent files",
        msgEngShareFolder: "Shared folders",
        msgFolderNameError: "根目錄文件夾不能命名為系統保留文件夾名!",
        msgLeave: "離開",
        msgOffline: "離線",
        msgAll: "所有",
        msgCurrent: "當前",
        msgLangSetting: "語言設置",
        msgLanguage: "中文繁體",
        msgChineseCn: "中文简体",
        msgChineseTw: "中文繁體",
        msgEnglish: "English",
        msgEntFileSize: "企業文件容量",
        msgPersonalFileSize: "個人文件容量",
        msgCurrentUsersNumber: "當前用戶數量",
        msgLinkFlow: "分享流量",
        msgShareFiles: "分享文件",
        msgEntFolder: "企業文件夾目錄",
        msgPersonFolder: "個人文件夾目錄",
        msgAddDelUser: "添加/刪除成員",
        msgSearchResults: "搜索結果",
        msgEntFileDirectory: "企業文件目錄",
        msgInfoTip: "信息提示",
        msgCreate: "創建",
        msgRecycle: "刪除回收站",
        msgRestoreVersion: "恢復版本",
        msgCreateLink: "新建分享",
        msgCreateTxt: "新建文本",
        msgOldPwdCorrect: "原始密碼正確!",
        msgNewSubDept: "新建子部門",
        msgSortDept: "部門排序",
        msgDelDept: "刪除部門",
        msgSuperAdmin: "超級管理員",
        msgSuperAdminIs: "該用户为超級管理員",
        msgAdminIs: "該用戶為管理員",
        msgUnlockAccount: "解鎖賬號",
        msgLockAccount: "鎖定賬號",
        msgNormal: "正常",
        msgUngroupContact: "未分組聯繫人",
        msgAdmin: "管理員",
        msgSecAdmin: "二級管理員",
        msgAuth: "認證服務",
        msgSecurityUpload: "加密上傳",
        msgSecPwdTip: "密碼長度4~6位",
        msgPwdInputTip: "請輸入加密密碼!",
        msgInputLoginPwd: "請輸入新的登陸密碼",
        msgInputLoginPwdAgain: "請再次輸入新的登陸密碼",
        msgErrorValidationCode: "驗證碼錯誤",
        msgBBS: "問題反饋",
        msgErrorWaiting: "一分鐘內不能重複發送驗證信息",
        msgMailBinded: "該郵箱被其他用戶綁定!",
        msgMailFormatError: "請輸入正確的郵箱地址",
        msgMobileFormatError: "請輸入正確的手機號碼",
        msgMobileBinded: "該手機號已存在！<br/>請更換手機號碼驗證。",
        msgMailBinded: "該郵箱已存在！<br/>請更換郵箱地址驗證。",
        msgNewMessage: "您有新消息",
        msgEmailBindSucc: "郵箱驗證成功!",
        msgEmailBindFail: "郵箱驗證失敗!",
        msgPhoneBindSucc: "手機號綁定成功!",
        msgMinute: "分鐘",
        msgPerson: "人",
        msgStartAll: "全部開始",
        msgChooseDelContacts: "請選中要刪除的聯繫人",
        msgFileNoSave: "文檔尚未保存, 确认要关闭吗?",
        msgWebsiteTitle: "燕麥企业云盘",
        msgCreateFileTitle: "新建文檔-燕麥企业云盘",
        msgViewerTitle: "文件瀏覽-燕麥企业云盘",
        msgShareTitle: "文檔共享-燕麥企业云盘",
        msgLoginTitle: "用戶登錄-燕麥企業雲盤",
        msgRegisterTitle: "用戶註冊-燕麥企業雲盤",
        msgAdminTitle: "後台管理-燕麥企業雲盤",
        msgGetPwdTitle: "找回密碼-燕麥企業雲盤",
        msgZipNotFiles: "該文件夾中沒有文件!",
        msgEntAuthFirst: "未認證的企業不能綁定顯示號碼! 請先到服務中心-> 認證服務中認證企業信息!",
        msgWaitAuthPass: "您的企業認證尚未通過審核, 請耐心等待或聯繫客服!",
        msgNewbieHelp: "新手幫助",
        msgFreeReg: "免費註冊",
        msgInputContactTip: "請輸入真實的企業聯繫人",
        msgAccountNotExist: "賬號不存在!",
        msgAccountNotActive: "賬號未激活",
        msgAccountDeleted: "賬號已被刪除",
        msgAdminName: "管理員姓名",
        msgAdminNameTip: "請填入您的真實姓名",
        msgInputContactTel: "聯繫電話",
        msgInputContactTelTip: "請填入您的手機或座機號碼，座機請按“區號-號碼”格式填寫，如 0755-12345678",
        msgInputEmail: "郵箱地址",
        msgPwdResetFail: "该账号未激活, 密码重置失败!",
        msgOperateFail: "操作失敗!",
        msgZipMaxSize: "您要壓縮的文件超過了100MB, 請單個文件下載!",
        msgShareCenter: "分享中心",
        msg1191: "删除成功!",
        msgRecycleFile: "回收站文件",
        msgFileOrFolder: "文件或文件夾名",
        msgOperator: "操作人",
        msgOperateTime: "操作時間",
        msgStartSearch: "開始搜索",
        msgFileOrFolder: "文件或文件夹名",
        msgOperator: "操作人",
        msgOperateTime: "操作时间",
        msgStartSearch: "开始搜索",
        msgFileSearchTitle: "請輸入您要搜索的文件名",
        msgRestoreAllFiles: "恢復所有文件",
        msgEmptyAllFiles: "清空所有文件",
        msgDateRangeErr: "開始時間不能大於結束時間!",
        msgEntAddrErr: "企業地址格式不正確",
        msgLinkPwdErr: "分享密碼格式不正確, 必須是4-6位字符/數字/下劃線",
        msgFormatErr: "格式不正確!",
        msgRealNameErr: "真實姓名格式不正確",
        msgUnAuthErr: "未驗證的手機號或郵箱, 登錄失敗",
        msgActiveUser: "激活賬號",
        msgUploadMaxErr: "OATOS網頁版文件最大隻能上傳500M, 更大的文件請用Window客戶端上傳!",
        msgDialStopErr: "您正在進行撥號或者電話會議, 暫不能關閉雲電話!",
        msgSortOK: "排序成功!",
        msgSortFail: "排序失敗!",
        msgSelectQueryItem: "請選擇篩選項",
        msgRenameOK: "重命名成功!",
        msgRenameFail: "重命名失敗",
        msgSelectDepartErr: "請選擇部門後新建子部門",
        msgNewDepart: "新部門",
        msgNameDuplicate: "名稱重複!",
        msgInputInvalid: "您輸入了不合法的內容",
        msgImgPreviewErr: "圖片過大，請下載後預覽，顯示的為縮略圖!",
        msgAddUserSuccess: "賬號添加成功!",
        msgSelectDept: "請選擇部門",
        msgActiveUserErr: "驗證碼錯誤! 請聯繫管理員重新發送激活郵件!",
        msgAccountErr: "账号未注册",
        msgSystemMessage: "系統消息",
        msgNewSystemMessage: "您有新的系統消息!",
        msgBirthdayError: "出生日期錯誤!",
        msgErrorMailOver: "你今天發送的郵件數已經超出了限制, 郵件不能發送!",
        msgShareLinkMailSubject: "分享文件通知",
        msgErrorNotHaveRead: "您沒有預覽權限!",
        msgIsEmptyRecycle: "確定要清空回收站",
        msgChatFail: "您當前是離線狀態, 不能聊天或發送文件!",
        msgUserDeleted: "該用戶已被刪除",
        msgActiveUserTitle: "燕麥-激活用戶",
        msgResetPwdTitle: "燕麥-重置密碼",
        msgSetEntInfo: "設置企業信息",
        msgLoginMaibox: "登錄郵箱",
        msgRestoreFolderDel: "恢复失败! 你要恢复的文件所在的文件夹已被删除!",
        msgUserDeleted: "該用戶已被刪除",
        msgSyncManage: "同步管理",
        msgViewSync: "查看同步详情",
        msgCancelSync: "取消同步",
        msgAddSync: "添加同步",
        msgParentFolderDeleted: "父文件夾已經被刪除",
        msgCancelSyncConfirm: "取消同步後,系統將刪除相關同事的本地文件夾!您確定繼續取消操作?",
        msgSyncSetting: "設置同步",
        msgRefresh: "刷新",
        msgMore: "更多",
        msgMyShare: "我的分享",
        msgMyFocus: "我的關注",
        msgSetPwd: "设置密码",
        msgCancelPwd: "取消密码",
        msgPwd: "密码",
        msgExpireDate: "到期時間",
        msgSetExpireDate: "设置到期時間",
        msgCancelExpireDate: "取消到期時間",
        msgCopyLink: "复制链接",
        msgSelectSyncFolder: "選擇需要同步的文件夾",
        msgSelectSyncColleague: "選擇需要同步的同事",
        msgSyncConfirm: "在此顯示同步確認",
        msgSyncSuccTip: "<li>以上人員將獲得同步權限,並受到同步通知消息;</li><li>當前文件夾及其子文件夾​​中所含文件將被同步到本地;</li><li >並不會刪除雲端文件;</li>",
        msgSyncUserInfo: "將被以下人員同步",
        msgDiskSizeMustInt: "網盤大小只能設置整數",
        msgAddUserErrTip: "請輸入正確的郵箱或者手機號!",
        msgAddAccountSucc: "添加賬號成功",
        msgAddAccountEmailTip: "系統已經發送了通知郵件到此郵箱, 請通知同事登錄郵箱並按照郵件裡的提示激活賬號!",
        msgAddAccountSmsTip: "系統已發送了登錄密碼到此手機號, 請通知同事使用此手機號和登錄密碼訪問www.oatos.com登錄燕麥企業雲盤",
        msgAddAcountNoTip: "我已知道如何激活子賬號, 以後不用再提示",
        msgShareSuccess: "分享成功!",
        msgViewSharePage: "查看分享頁面",
        msgShareLink: "分享外鏈",
        msgSendMailMobile: "發送到郵件、手機",
        msgUploadOnly: "僅允許用戶上傳文檔至該文件夾",
        msgCopyLinkTip: "複製以下分享外鏈,發送給相關同事、客戶、合作夥伴！ ",
        msgInputSpace: "請輸入有效郵箱或手機號,用空格分隔",
        msgSendContent: "發送內容",
        msgShareFileTip: "用【燕麥企業雲盤】給您分享了文件",
        msgSendLink: "發送鏈接",
        msgSendLinkFree: "將已生成的分享鏈接<b>免費</b>發送到:",
        msgSendMailMobileNoty: "請輸入要發送的郵箱地址和手機號碼!",
        msgSendSuccess: "發送成功!",
        msgSendFail: "未發送成功!",
        msgSendWait: "您剛剛發送了消息, 請等待2分鐘後再次發送！",
        msgFolderNameLength20Error: "文件夾名稱不能超過20個字符!",
        msgRemarkError: "备注格式不正確! 請輸入1-100位的字符!",
        msgDeptLongError: "部門名稱限制为1-60位字符!",
        msgEntAddressEmpty: "请输入企业地址",
        msgUploadFileError: "您不能上傳exe/bat/cmd文件!",
        msgDownloadFileError: "您不能下載exe/bat/cmd文件!",
        msgChatSendError: "聊天框中最大隻能發送500MB文件!",
        msgImportWait: "用戶正在導入中...",
        msgAccDuplite: "賬號重複!",
        msgFileDuplicate: "文件名重複",
        msgMessageList: "消息中心",
        msgSyncFile: "同步文件",
        msgUnknowOper: "未知操作",
        msgNoUploadPermission: "您沒有當前文件夾的上傳權限!",
        msgFolderSyncSetSucc: "文件夾設置同步成功!",
        msgFolderSyncSetFail: "文件夾設置同步失敗!",
        msgDomainLoginError: "域用戶登錄信息有誤",
        msgNewDept: "新建部門",
        msgNewDeptTip: "請輸入你要創建的部門名稱",
        msgCancelShareConfirm: "取消分享將會使該文件的所有頁面分享鏈接失效，不能訪問。您確定要取消分享嗎?",
        msgChangeSpace: "修改空間",
        msgCompany: "公司",
        msgPersonSetting: "個人設置",
        msgErrorCheckHashkey: "數據未通過安全驗證",
        msgChangeDeptSizeOk: "修改部門空間成功",
        msgSelectAll: "全選",
        msgAllocateSpace: "分配空間",
        msgNoLimit: "無限制",
        msgExpandSpace: "擴容",
        msgDeptFolderSize: "部門文件夾大小",
        msgAvailSize: "可分配空間",
        msgDeptPermission: "部門文件夾權限",
        msgDefaultSetting: "默認設置",
        msgCustomSetting: "自定義設置",
        msgSettingFolderSize: "設置文件夾大小",
        msgSpaceFomat: "空間大小為整數且大於零",
        msgProperty: "屬性",
        msgRemark: "備註",
        msgTempNoTip: "暫時沒有內容, 請輸入不超過100個字符!",
        msgFileNameNull: "請輸入文件名稱",
        msgReminded: "已關注",
        msgDisReminded: "未關注",
        msgCurrentVersion: "當前版本號",
        msgSize: "大小",
        msgInclude: "包含",
        magPath: "位置",
        msgRemindStatus: "关注状态",
        msgUsedSize: "已用空間",
        msgMaxSize: "最大空間",
        RemindStatus: "關注狀態",
        msgFilesNum: "個文件",
        msgTableEmpty: "列表中沒有數據",
        msgDataLoadFail: "數據加載失敗",
        msgUserNotExist: "用戶不存在或已被刪除",
        msgOpenChatView: "雙擊打開聊天窗口",
        msgClear: "清空",
        msgShowListInfo: "列表視圖",
        msgShowThumbInfo: "縮略圖視圖",
        msgSysBusy: "系统繁忙，请稍后重试",
        msgAddContactErr: "您选中部门的所有用户已经是您的常用联系人了!",
        msgMyDevice: "我的設備",
        msgAllSingleSync: "全部設為單向同步",
        msgSingleSync: "單向同步",
        msgObjectName: "对象名称",
        msgShowLogo: "LOGO顯示",
        msgShowLogoPic: "企業LOGO(圖片)",
        msgShowLogoText: "企業名稱(文字)",
        msgSelectUserError: "请选择要通知的同事!",
        msgUserActiveSucc: "用户账号激活成功!",
        msgBuyService: "购买服务",
        msgDiskSpaceTip: "云盘空间已使用<%=percent%>%, 请到购买中心进行扩容!",
        msgFolderOverflow: "文件夹空间不足",
        msgRoleError: "角色名称长度限制为1-60为字符!",
        msgAdminLockError: "超级管理员不能被锁定!",
        msgAdminPwdError: "您不能修改超级管理员的密码!",
        msgAdminDelError: "超级管理员不能被删除!",
        msgAdminChangeDeptError: "您不能更換超級管理員的部門!",
        msgAdminChangePermissionError: "您不能更换超级管理员的权限!",
        msgAdminFolderSetError: "您不能修改超级管理员的个人文件夹大小!",
        msgClearSyncUserSucc: "清空文件夹同步用户成功!",
        msgResendEmail: "重新发送激活邮件",
        msgResendSms: "重新发送激活短信",
        msgUserActiveError: "该用户已经激活了!",
        msgActEmailSendSucc: "激活邮件发送成功!",
        msgActSmsSendSucc: "激活短信发送成功!",
        msgSecAdminLockError: "二级管理员不能锁定自己!",
        msgSecAdminDelError: "二级管理员不能删除自己!",
        msgSecAdminChangeDeptError: "二级管理员不能修改自己的部门!",
        msgSecAdminSetDiskError: "二级管理员不能设置自己的个人文件夹大小!",
        msgMailSendTip: "系统给您的注册邮箱{{mail}}发送了一封验证邮件, 请登录邮箱完成找回密码",
        msgTxtInputTip: "请输入文档内容",
        msgTxtContentFail: "获取文档内容失败!",
        msgPurchaseCenter: "購買中心",
        msgContactCs: "聯繫客服",
        msgHasRead: "已讀",
        msgSearchAllFile: "搜索全部文件",
        msgFullTextSearch: "全文搜索",
        msgSingleSyncTips: "<b>單向同步：</b>從雲端同步到本地，本地更新不影響雲端",
        msgNewDocument: "新建文檔",
        msgEditDocument: "編輯文檔",
        msgSelectPermission: "请选择权限!",
        msgFileLengthError: "文件名，文件夾名長度不能超過100個字符！",
        msgRequestDataError: "請求數據有誤！",
        msgSelectShareType: "選擇分享類型",
        msgUserUpload: "僅允許用戶上傳文檔至該文件夾",
        msgFreeTry: "免費試用",
        msgFullTxtFunc: "全文搜索功能",
        msgInviteCode: "提交邀請碼",
        msgSimpleTip: "簡單的說明",
        msgEaseUse: "功能體驗不會影響您的數據安全，請放心試用。",
        msgFullTxt500: "每天開放500家企業用戶體驗，體驗名額已滿時不能提交申請。",
        msgGetYanmaiWechat: "可通過燕麥企業雲盤公眾號獲取實時客服支持和最新優惠信息。",
        msgMethodGetInvieteCode: "獲取邀請碼方法",
        msgRemindYanmai: "微信掃一掃關注“燕麥企業雲盤”",
        msgEnterYanmai: "進入燕麥企業雲盤公眾號，發送“體驗全文搜索”，獲取邀請碼。",
        msgSorryTrialQuota: "抱歉，今天的體驗名額已滿，請明天再申請體驗。",
        msgFocusYanmai: "您仍然可關注燕麥企業雲盤公眾號獲取實時客服支持或最新優惠信息。",
        msgInputSearch: "輸入搜索的內容",
        msgSearchForFullTxt: "● 對雲盤中的所有文檔進行搜索，並顯示用戶有可見權限的全部文檔",
        msgSearchInfoQuickly: "● 在海量文件中快速找到相關信息，支持使用“*”進行模糊搜索",
        msgSearchTip3: "● 新上傳的文檔請等待五分鐘後再搜索，文檔會根據相關度由高到低排序顯示",
        msgSearchFileOrContent: "搜索文档名称与内容中包含的信息",
        msgSearchFileOrContent: "搜索文檔名稱與內容中包含的信息",
        msgRelevance: "相關度",
        msgTheDirectory: "所在位置",
        msgLocateFileContent: '"全文檢索"幫您快速定位文檔內容中包含的信息',
        msgSearchNoMatches: "沒有與搜索條件匹配的項",
        msgFreeCodeError: "邀請碼錯誤",
        msgAllFind: "共搜索到",
        msgRelateResults: "個相關結果",
        msgA: "個",
        msgExpandSidebar: "展開側邊欄",
        msgCloseSidebar: "收起側邊欄",
        msgSyncFolderSearchTip: "请输入您要搜索的同步文件夹",
        msgSelectUploadFiles: "请选择要上传的文件!",
        msgDaysKeepsInput: "請輸入您要保留的天數!",
        msgSaveVersionConfigOk: "保存歷史版本配置成功!",
        msgVersionsKeepsInput: "請輸入您要保留的版本數!",
        msgSaveVersionConfigFail: "保存歷史版本配置失敗!",
        msgErrorFolderMaxSize: "設置的文件夾空間小於使用空間",
        msgShareOnlyRead: "僅允許用戶預覽文件",
        msgShareReadDownload: "允許用戶預覽和下載文件",
        msgInputMobilePhone: "請輸入您常用的手機號碼或電話號碼",
        msgCodeExpired: "驗證碼已過期",
        msgInputSearchContent: "請輸入您要搜索的內容",
        msgNameDeptError: '部門名不能為空! 且不能包含任何以下符號：  / : * ? \\" < > |',
        msgErrorNoParentMaxSize: "您還沒有為父文件夾分配空間，請先為父文件夾分配空間！",
        msgErrorNoParentDeptMaxSize: "您還沒有為上級部門分配空間，請先為上級部門分配空間！",
        msgSelectEntSubFolder: "請選擇企業文件下的文件夾！",
        msgPermissionDetail: "權限詳情",
        msgUser: "用戶",
        msgLoginTokenMiss: "对不起!您的登录凭证不存在, 请重新登录!",
        msgFetchEntInfoErr: "获取企业信息失败, 请重新登录!",
        msgFetchUserInfoErr: "获取用户信息失败, 请重新登录!",
        msgAccessAdminPageError: "对不起! 您不是管理员, 不能访问管理员页面!",
        msgSelectAlready: "已選擇",
        msgSelectFolder: "請選擇您要添加的文件夾",
        msgInputSearchFolder: "請輸入你要搜索的文件夾",
        msgFileConverting: "文档正在转换中, 请稍候!",
        msgConvertDone: "文档转换完成!",
        msgFileSendFail: "文件发送失败",
        msgPermissionList: "權限列表",
        msgCurrentAccount: "當前賬號",
        msgAddFilePermission: "添加文件權限",
        msgFolderName: "文件夾名",
        msgPermissionContent: "權限內容",
        msgCurrentFolder: "當前文件夾",
        msgSelectToAuthorize: "請選擇需要授權的成員",
        msgType: "類型",
        msgPermission: "權限",
        msgMemberList: "成員列表",
        msgRoleList: "角色列表",
        msgDblClickToAdd: "雙擊左側需要添加的同事、部門、角色添加到右側。",
        msgNextPermission: "點擊“下一步”，設置權限。 ",
        msgViewOriginImg: "查看原图",
        msgClickOpen: "点击打开",
        msgDeptRolesPermissionTips: "<b>部門</b>與<b>角色</b>權限類型修改，請在對應的<b>部門權限修改</b>或<b>角色權限修改</b>中進行修改。",
        msgDeleteLockFileErr: "有文件已被锁定, 不能删除!",
        msgMoveLockFileErr: "有文件已被锁定, 不能移动!",
        msgCurrentPicListDetelted: "當前文件夾中的圖片已全部被刪除",
        msgSearchDeptResult: "搜索到的部門",
        msgSearchMemResult: "搜索到的成員",
        msgSearchRoleResult: "搜索到的角色",
        msgShareInfo: "分享信息",
        msgPersonDiskNoSpace: "个人文件夹空间不足!",
        msgSearchFileAndMark: "搜索全部文件或標籤",
        msgComment: "評論",
        msgPublishComment: "發表評論",
        msgNickname: "暱稱",
        msgCommentPlaceholder: "請輸入您要評論的內容",
        msgAnonymity: "匿名",
        msgLabel: "標籤",
        msgInputLabel: "請輸入您要創建的標籤名稱",
        msgFileLabel: "文件標籤",
        msgOperateObj: "操作對象：",
        msgLabelName: "標籤名稱",
        msgLabelLib: "標籤庫",
        msgLabelSeparate: "多個標籤請使用空格或回車分隔",
        msgUnfold: "展開",
        msgFold: "收起",
        msgSearchFactors: "搜索條件：",
        msgSearchExit: "退出搜索",
        msgDocument: "文檔",
        msgOperatorNameAccount: "操作人的姓名或賬號",
        msgAllType: "所有類型",
        msgSelectColleague: "請選擇同事",
        msgStartDate: "開始日期",
        msgEndDate: "結束日期",
        msgLabelModifySuccess: "標籤修改成功",
        msgMax3Labels: "一個文件最多創建三個標籤！",
        msgCreateLab: "新建標籤",
        msgDeleteLibLab: "刪除標籤後，與之相關文件的標籤也將被刪除",
        msgPost: "發表",
        msgCurrentCommentCount: "當前評論數",
        msgBackup: "备份",
        msgGrpPermSetting: "群組權限設置",
        msgPermissionFolder: "請選擇需要授權的文件夾",
        msgCreateFolderTip: "可以新建文件夹",
        msgCreateFolderError: "您没有新建文件夹权限!",
        msgFileLockedByOthers: "該文件已被他人鎖定, 您不能解鎖!",
        msgOnceDownload: "一次最多下載30個文件！ "
    }
});;
define("app/commons/resturl/AdminUrl", function(require, e, s) {
    s.exports = {
        getAdminInfo: "/sc/admin/getAdminInfo",
        addUser: "/sc/user/addUser",
        createUser: "/sc/user/createUser",
        resetUserInfo: "/sc/user/resetUserInfo",
        lockUsers: "/sc/user/lockUsers",
        unlockUsers: "/sc/user/unlockUsers",
        deleteUsers: "/sc/user/deleteUsers",
        getBlockUserIdsByUserId: "/sc/block/getBlockUserIdsByUserId",
        deleteEntBlock: "/sc/block/deleteEntBlock",
        updateEntBlock: "/sc/block/updateEntBlock",
        getAdminList: "/sc/admin/getAdminList",
        updateAdmin: "/sc/admin/updateAdmin",
        delAdmin: "/sc/admin/delAdmin",
        lockAdmin: "/sc/admin/lockAdmin",
        unlockAdmin: "/sc/admin/unlockAdmin",
        addAdmin: "/sc/admin/addAdmin",
        changeAdmin: "/sc/admin/changeAdmin",
        getAdminFolderList: "/sc/admin/getAdminFolderList",
        updateEmpDefaultPwd: "/sc/ent/updateEmpDefaultPwd",
        getLoginLog: "/sc/user/getLoginLog",
        updateEmpDefaultPwd: "/sc/ent/updateEmpDefaultPwd",
        resetPassword: "/sc/user/resetPassword",
        getUserIdsByRoleId: "/sc/entDisk/getUserIdsByRoleId",
        updateRoleUsers: "/sc/entDisk/updateRoleUsers",
        addDept: "/sc/user/addDept",
        createDepartment: "/sc/admin/user/createDepartment",
        updateDeptPermission: "/sc/admin/user/updateDeptPermission",
        updateDeptMaxSize: "/sc/admin/user/updateDeptMaxSize",
        renameDept: "/sc/user/renameDept",
        deleteDept: "/sc/user/deleteDept",
        updateDeptOrder: "/sc/user/updateDeptOrder",
        lockUser: "/sc/user/lockUser",
        lockUsers: "/sc/user/lockUsers",
        unlockUser: "/sc/user/unlockUser",
        unLockUsers: "/sc/user/unLockUsers",
        deleteUser: "/sc/user/deleteUser",
        changePasswords: "/sc/admin/user/resetUsersPwd",
        changePersonalSizes: "/sc/admin/user/updateUsersDiskSize",
        getLdapConfig: "/sc/ldap/getLdapConfig",
        updateLdapConfig: "/sc/ldap/updateLdapConfig",
        testLdapConnection: "/sc/ldap/testLdapConnection",
        restoreAdminRecycleFile: "/sc/admin/recycle/restoreAdminRecycleFile",
        restoreAdminRecycleFiles: "/sc/admin/recycle/restoreAdminRecycleFiles",
        restoreAllAdminRecycleFiles: "/sc/admin/recycle/restoreAllAdminRecycleFiles",
        deleteAdminRecycleFile: "/sc/admin/recycle/deleteAdminRecycleFile",
        deleteAdminRecycleFiles: "/sc/admin/recycle/deleteAdminRecycleFiles",
        deleteAllAdminRecycleFiles: "/sc/admin/recycle/deleteAllAdminRecycleFiles",
        getDeptAvailableMaxSiz: "/sc/admin/user/getDeptAvailableMaxSize",
        resendUserActiveMsg: "/sc/admin/user/resendUserActiveMsg",
        updateHistoryConfig: "/sc/admin/history/updateHistoryConfig",
        getHistoryConfig: "/sc/admin/history/getHistoryConfig",
        getUserGroupAndUsers: "/sc/admin/permission/getUserGroupAndUsers",
        getUsersByRoleId: "/sc/entDisk/getUsersByRoleId"
    }
});;
define("app/commons/resturl/EntDiskUrl", function(require, e, t) {
    var n = {
            getFiles: "/sc/file/getFiles",
            getPagedEntFolderAndFileByFolderId: "/sc/entDisk/getPagedEntFolderAndFileByFolderId",
            getEntPicturesByFolder: "/sc/entDisk/getEntPicturesByFolder",
            checkPermission: "/sc/entDisk/checkEntFolderPermission",
            checkPermissions: "/sc/entDisk/checkEntFoldersPermission",
            checkEntFolderPermissions: "/sc/entDisk/checkEntFolderPermissions",
            lockEntFile: "/sc/entDisk/lockEntFile",
            unlockEntFile: "/sc/entDisk/unlockEntFile",
            updateEntFileRemark: "/sc/entDisk/updateEntFileRemark",
            updateEntFolderRemark: "/sc/entDisk/updateEntFolderRemark",
            getEntFolderAndFileByFolderIds: "/sc/entDisk/getEntFolderAndFileByFolderIds",
            getEntParentIdsByFolder: "/sc/entDisk/getEntParentIdsByFolder",
            getEntParentIdsByFile: "/sc/entDisk/getEntParentIdsByFile",
            searchEntFile: "/sc/entDisk/searchEntFile",
            moveEntFile: "/sc/entDisk/moveEntFile",
            moveEntFolder: "/sc/entDisk/moveEntFolder",
            moveEntFolderAndFile: "/sc/entDisk/moveEntFolderAndFile",
            renameEntFile: "/sc/entDisk/renameEntFile",
            renameEntFolder: "/sc/entDisk/renameEntFolder",
            getEntFileById: "/sc/entDisk/getEntFile",
            getEntFileNoCheckPermission: "/sc/entDisk/getEntFileById",
            getEntFolderById: "/sc/entDisk/getEntFolder",
            deleteEntFolderToRecycle: "/sc/entDisk/deleteEntFolderToRecycle",
            deleteEntFileToRecycle: "/sc/entDisk/deleteEntFileToRecycle",
            deleteEntFolderAndFileToRecycle: "/sc/entDisk/deleteEntFolderAndFileToRecycle",
            createEntFolder: "/sc/entDisk/createEntFolder",
            getAdminFoldersByFolderId: "/sc/entDisk/getAdminFoldersFolderId",
            getEntFolderAndFileByFolderId: "/sc/entDisk/getEntFolderAndFileByFolderId",
            getPagedEntFilesByFolder: "/sc/entDisk/getPagedEntFilesByFolder",
            getFileOperateLog: "/sc/entDisk/getFileOperateLog",
            getFileAccessLog: "/sc/entDisk/getFileAccessLog",
            checkEntFileUpload: "/sc/entDisk/checkEntFileUpload",
            getAvailableMaxSize: "/sc/file/getAvailableMaxSize"
        },
        l = {
            getRecycleEntFolderAndFile: "/sc/entDisk/getRecycleEntFolderAndFile",
            emptyEntRecycle: "/sc/entDisk/emptyEntRecycle",
            restoreEntFile: "/sc/entDisk/restoreEntFile",
            restoreEntFolder: "/sc/entDisk/restoreEntFolder",
            restoreEntFolderAndFile: "/sc/entDisk/restoreEntFolderAndFile",
            deleteRecycleEntFile: "/sc/entDisk/deleteRecycleEntFile",
            deleteRecycleEntFolder: "/sc/entDisk/deleteRecycleEntFolder",
            deleteRecycleEntFolderAndFile: "/sc/entDisk/deleteRecycleEntFolderAndFile",
            getPagedEntRecycle: "/sc/entDisk/getPagedRecycleEntFolderAndFile",
            getPagedPersonalRecycle: "/sc/disk/getPagedRecyclePersonalFolderAndFile"
        },
        s = {
            getEntFileHistory: "/sc/entDisk/getEntFileHistory",
            getEntFolderHistory: "/sc/entDisk/getEntFolderHistory",
            getPagedEntDiskHistory: "/sc/entDisk/getEntDiskHistory",
            getParentEntFoldersAndSelfByFolder: "/sc/entDisk/getParentEntFoldersAndSelfByFolder",
            getParentEntFoldersByFile: "/sc/entDisk/getParentEntFoldersByFile",
            getParentEntFoldersByFolder: "/sc/entDisk/getParentEntFoldersByFolder",
            restoreEntFileVersion: "/sc/entDisk/restoreEntFileVersion",
            restoreEntFolderVersion: "/sc/entDisk/restoreEntFolderVersion",
            getEntFolderVersionDetail: "/sc/entDisk/getEntFolderVersionDetail",
            getEntFileVersionDetail: "/sc/entDisk/getEntFileVersionDetail"
        },
        i = {
            getRemindEntFolderAndFile: "/sc/entDisk/getRemindEntFolderAndFile",
            getRemindFiles: "/sc/remind/getRemindFiles",
            getPagedRemindEntFiles: "/sc/entDisk/getPagedRemindEntFiles",
            remindEntFile: "/sc/entDisk/remindEntFile",
            remindEntFolder: "/sc/entDisk/remindEntFolder",
            remindEntFolderAndFile: "/sc/entDisk/remindEntFolderAndFile",
            deleteRemindEntFile: "/sc/entDisk/deleteRemindEntFile",
            deleteRemindEntFolder: "/sc/entDisk/deleteRemindEntFolder",
            deleteRemindEntFolderAndFile: "/sc/entDisk/deleteRemindEntFolderAndFile"
        },
        d = {
            addFavoriteFile: "/sc/entDisk/addFavFile",
            addFavFiles: "/sc/entDisk/addFavFiles",
            deleteFavFile: "/sc/entDisk/deleteFavFile",
            deleteFavFiles: "/sc/entDisk/deleteFavFiles",
            getFavFileList: "/sc/entDisk/getFavFileList",
            getPagedFavFileList: "/sc/entDisk/getPagedFavFileList"
        },
        F = {
            deleteSyncFolder: "/sc/admin/sync/deleteSyncFolder",
            deleteSyncFolders: "/sc/admin/sync/deleteSyncFolders",
            getSyncUsersBySyncId: "/sc/admin/sync/getSyncUsersBySyncId",
            updateSyncFolder: "/sc/admin/sync/updateSyncFolder",
            getSyncFolderInfo: "/sc/admin/sync/getSyncFolderInfoByFolderId",
            getCreatedSyncFolders: "/sc/admin/sync/getSyncFoldersByCreaterId",
            createFolder: "/sc/file/createFolder",
            getFile: "/sc/file/getFile",
            getFileProperties: "/sc/file/getFileInfo",
            updateFileInfo: "/sc/file/updateFileInfo"
        };
    t.exports = _.extend(n, l, s, i, d, F)
});;
define("app/commons/resturl/EnterpriseUrl", function(require, e, t) {
    t.exports = {
        isEntNameUsable: "/pub/ent/isEntNameUsable",
        register: "/pub/ent/register",
        updateEntInfo: "/sc/ent/updateEntInfo",
        getEntInfoByUserId: "/sc/ent/getEntInfoByUserId",
        getEnterpriseInfo: "/sc/ent/getEnterpriseInfo",
        changeLogo: "/sc/ent/changeLogo",
        getEntServiceStatus: "/pub/pay/info",
        getCurrentService: "/sc/service/getCurrServiceList",
        checkValidationCode: "/pub/checkValidationCode",
        getSimpleEntInfoByEntId: "/pub/ent/getSimpleEntInfoByEntId",
        registerDone: "/pub/ent/registerDone",
        bindAccount: "/pub/user/bindAccount",
        getBuyHistory: "/sc/buy/getBuyHistory"
    }
});;
define("app/commons/resturl/FileMgrUrl", function(require, e, i) {
    i.exports = {
        zipFiles: "/sc/zip/files",
        saveFile: "/sc/file/saveHtml",
        viewAsTxt: "/sc/file/viewAsTxt",
        editFileAsHtml: "/sc/file/editFileAsHtml",
        saveEntFileToPersonDisk: "/sc/file/saveFileToDisk",
        copyPersonFileToPerson: "/sc/file/copyPersonFile",
        entDiskCopy: "/entdisk/copy",
        getDownloadUrl: "/sc/file/getFileDownloadInfo",
        viewFileAsImg: "/sc/file/viewAsImg",
        viewFileAsPdf: "/sc/file/viewAsPdf"
    }
});;
define("app/commons/resturl/FileUrl", function(require, e, l) {
    l.exports = {
        createFolder: "/sc/file/createFolder",
        fullTextSearch: "/sc/file/fullTextSearch",
        searchFile: "/sc/file/searchFile",
        getServiceStatus: "/sc/ent/getServiceStatus",
        applyFreeService: "/sc/buy/applyFreeService",
        updateFileLabel: "/sc/file/updateFileLabel",
        getLabels: "/sc/file/getLabels",
        deleteLabel: "/sc/file/deleteLabel",
        updateFileComment: "/sc/file/updateFileComment",
        getFileComments: "/sc/file/getFileComments",
        deleteFileComment: "/sc/file/deleteFileComment",
        copyFiles: "/sc/files/copy"
    }
});;
define("app/commons/resturl/LoginUrl", function(require, e, n) {
    n.exports = {
        logon: "/pub/user/logon",
        signin: "/pub/user/signin",
        loginByLdap: "/pub/user/loginByLdap",
        adminLogin: "/pub/ent/admin/login",
        logoff: "/sc/user/logoff",
        changePwd: "/sc/user/changePwd",
        checkUserPwd: "/sc/user/checkUserPwd",
        sendValidationMsg: "/pub/code/sendValidationMsg",
        checkValidationMsg: "/pub/code/checkValidationMsg",
        resetPwd: "/pub/user/resetPwd"
    }
});;
define("app/commons/resturl/MessageUrl", function(require, e, s) {
    s.exports = {
        getUnreadMsg: "/sc/msg/getUnreadMsg",
        confirmMsg: "/sc/msg/confirmMsg",
        getMessageRecord: "/sc/message/getMessageRecord",
        getChatRecord: "/sc/msg/getChatRecord",
        getPagedChatHistory: "/sc/msg/getPagedChatHistory",
        getFileAccessRecords: "/sc/message/getEntRecord",
        sendMail: "/sc/mail/sendMail"
    }
});;
define("app/commons/resturl/NodeRest", function(require, e) {
    function t(e) {
        var t = e.param || null,
            a = e.callback || null;
        _.isFunction(t) && (a = t,
            t = null);
        var n = {
            url: "/wt/node" + e.route + (t ? "?" + $.param(t) : ""),
            type: e.type,
            headers: {
                UT: e.token,
                "Content-Type": "application/json",
                Accept: "text/plain;charset=UTF-8"
            },
            processData: !0,
            timeout: 6e4
        };
        return e.data && _.extend(n, {
                data: _.isString(e.data) ? e.data : JSON.stringify(e.data)
            }),
            $.ajax(n).done(o(e.route, n.data, a)).fail(s(e.route, n.data, a))
    }

    function a(e) {
        this.type = void 0,
            this.route = void 0,
            this.param = void 0,
            this.token = void 0,
            this.data = void 0,
            this.callback = void 0,
            e && _.extend(this, e)
    }

    function o(e, t, a) {
        return function(o) {
            log.info("[NODE-REST]-[" + e + "]-[OK]-[resp-data]: ", o, ", [req-body] ", t),
                o.statusCode ? constants.isResError(o.statusCode) ? a && a(o.statusCode) : constants.isResOK(o.statusCode) && a && a(null, o) : a && a(null, o || {
                    statusCode: "OK"
                })
        }
    }

    function s(e, t, a) {
        return function(o, s) {
            if (504 == s)
                a && a("error500");
            else {
                var n = JSON.parse(o.responseText);
                log.error("[NODE-REST]-[" + e + "]-[ERR]-[resp-data]: ", n, ", [req-body] ", t),
                    a && a(n.statusCode || "error500")
            }
        }
    }
    e.route = {
            sendMsg: "/sendmsg",
            sendMsgs: "/sendmsgs",
            checkWordVerify: "/servlet/wordVerify",
            packages: "/buy/packages",
            filelogs: "/filelogs",
            getPreviewUrl: "/v28/file/preview/url",
            viewFile: "/:fileType/:fileId/view-as-:viewType"
        },
        e.get = function(e, o, s) {
            return t(new a({
                type: "GET",
                route: e,
                token: cache.token,
                param: o,
                callback: s
            }))
        },
        e.post = function(e, o, s) {
            return t(new a({
                type: "POST",
                route: e,
                token: cache.token,
                data: o,
                callback: s
            }))
        }
});;
define("app/commons/resturl/OrderUrl", function(require, e, r) {
    r.exports = {
        getCurrServiceList: "/sc/service/getCurrServiceList",
        saveSingleOrder: "/pub/order/saveSingleOrder",
        payOrder: "/pub/order/payOrder",
        getBuyRecords: "/sc/order/getBuyRecords",
        updatePayStatus: "/pub/buy/updatePayStatus"
    }
});;
define("app/commons/resturl/PermissionUrl", function(require, s, e) {
    e.exports = {
        getUserPermissionsByFolderId: "/sc/entDisk/getUserPermissionsByFolderId",
        updateFolderPermission: "/sc/entDisk/updateFolderPermission",
        updateSingleUserFolderPermission: "/sc/entDisk/updateSingleUserFolderPermission",
        getFolderPermissionsByUserId: "/sc/entDisk/getFolderPermissionsByUserId",
        updateUserPermissions: "/sc/admin/permission/updateUserPermissions",
        getFolderPermissions: "/sc/admin/permission/getFolderPermissions",
        getUserPermissions: "/sc/admin/permission/getUserPermissions",
        updateFolderPermissions: "/sc/admin/permission/updateFolderPermissions"
    }
});;
define("app/commons/resturl/PersonDiskUrl", function(require, e, l) {
    var s = {
            getRecyclePersonalFolderAndFile: "/sc/disk/getRecyclePersonalFolderAndFile",
            deleteRecyclePersonalFile: "/sc/disk/deleteRecyclePersonalFile",
            deleteRecyclePersonalFolder: "/sc/disk/deleteRecyclePersonalFolder",
            deleteRecyclePersonalFolderAndFile: "/sc/disk/deleteRecyclePersonalFolderAndFile",
            restorePersonalFile: "/sc/disk/restorePersonalFile",
            restorePersonalFolder: "/sc/disk/restorePersonalFolder",
            restorePersonalFolderAndFile: "/sc/disk/restorePersonalFolderAndFile",
            emptyPersonalRecycle: "/sc/disk/emptyPersonalRecycle",
            checkPersonalFileUpload: "/sc/disk/checkPersonalFileUpload"
        },
        r = {
            getPersonalFolderAndFileByFolderId: "/sc/disk/getPersonalFolderAndFileByFolderId",
            getPagedPersonalFilesByFolder: "/sc/disk/getPagedPersonalFilesByFolder",
            searchPersonalFilesAll: "/sc/disk/searchPersonalFile",
            movePersonalFile: "/sc/disk/movePersonalFile",
            movePersonalFolder: "/sc/disk/movePersonalFolder",
            movePersonalFolderAndFile: "/sc/disk/movePersonalFolderAndFile",
            renamePersonalFile: "/sc/disk/renamePersonalFile",
            renamePersonalFolder: "/sc/disk/renamePersonalFolder",
            getPersonFileById: "/sc/disk/getPersonalFile",
            getPersonFolderById: "/sc/disk/getPersonalFolder",
            getPersonalFolderById: "/sc/disk/getPersonalFolder",
            getParentPersonalFoldersByFile: "/sc/disk/getParentPersonalFoldersByFile",
            getParentPersonalFoldersByFolder: "/sc/disk/getParentPersonalFoldersByFolder",
            getParentPersonalFoldersAndSelfByFolder: "/sc/disk/getParentPersonalFoldersAndSelfByFolder",
            deletePersonFileToRecycle: "/sc/disk/deleteFileToRecycle",
            deletePersonFolderToRecycle: "/sc/disk/deleteFolderToRecycle",
            deletePersonalFolderAndFileToRecycle: "/sc/disk/deletePersonalFolderAndFileToRecycle",
            createPersonalFolder: "/sc/disk/createPersonalFolder",
            updatePersonalFileRemark: "/sc/disk/updatePersonalFileRemark",
            updatePersonalFolderRemark: "/sc/disk/updatePersonalFolderRemark",
            getPersonalDiskUsedSizeByUserId: "/sc/disk/getPersonalDiskUsedSizeByUserId",
            getPersonalPicturesByFolder: "/sc/disk/getPersonalPicturesByFolder"
        };
    l.exports = _.extend(r, s)
});;
define("app/commons/resturl/PhoneUrl", function(require, e, n) {
    n.exports = {
        phoneDial: "/web/phone/dial",
        stopDial: "/web/phone/stop",
        updateCallTime: "/phone/update/calltime",
        notifyStatus: "/web/phone/status",
        queryIms: "/phone/query/ims",
        sendSmsCode: "/phone/sendsms",
        chooseIms: "/phone/choseims",
        openMeeting: "/web/meeting/open",
        inviteMembers: "/web/meeting/invite",
        closeMeeting: "/web/meeting/close",
        soundoff: "/web/meeting/soundoff",
        getMembersState: "/web/meeting/getstate",
        removeSub: "/web/meeting/removesub"
    }
});;
define("app/commons/resturl/RoleUrl", function(require, e, s) {
    s.exports = {
        getRoleList: "/sc/entDisk/getRoleList",
        createRole: "/sc/entDisk/createRole",
        renameRole: "/sc/entDisk/renameRole",
        deleteRoleById: "/sc/entDisk/deleteRoleById",
        getPermissionsByRoleId: "/sc/entDisk/getPermissionsByRoleId",
        getFolderPermissionsAndUserByRoleId: "/sc/entDisk/getFolderPermissionsAndUserByRoleId",
        updateRolePermission: "/sc/entDisk/updateRolePermission"
    }
});;
define("app/commons/resturl/ShareLinkUrl", function(require, e, n) {
    n.exports = {
        createLink: "/sc/link/createLink",
        updateLink: "/sc/shareLink/updateLink",
        getLinkFiles: "/sc/link/getLinkFiles",
        getLinkByCode: "/pub/link/getLinkInfoByCode",
        getPagedLinkEntFolderAndFile: "/sc/shareLink/getPagedLinkEntFolderAndFile",
        deleteLink: "/sc/shareLink/deleteLink",
        deleteLinks: "/sc/shareLink/deleteLinks",
        getLinkById: "/sc/link/getLinkById",
        createLinkFolder: "/sc/shareLink/createLinkFolder",
        sendLinkSms: "/sc/link/sendLinkSms",
        sendLink: "/sc/link/sendLink",
        createLink: "/sc/link/createLink"
    }
});;
define("app/commons/resturl/TelUrl", function(require, e, t) {
    t.exports = {
        addTelContact: "/sc/tel/addTelContact",
        updateTelContact: "/sc/tel/updateTelContact",
        getTelContactList: "/sc/tel/getTelContactList",
        deleteTelContacts: "/sc/tel/deleteTelContacts",
        getTelServiceInfo: "/sc/tel/getTelServiceInfo",
        createTelCall: "/sc/tel/createTelCall",
        hangUpTelCall: "/sc/tel/hangUpTelCall",
        createTelMeeting: "/sc/tel/createTelMeeting",
        hangUpTelMeeting: "/sc/tel/hangUpTelMeeting",
        hangUpTelMeetingMember: "/sc/tel/hangUpTelMeetingMember",
        getTelBills: "/sc/tel/getTelBills",
        getBuyRecords: "/sc/order/getBuyRecords",
        getTelAuthByEntId: "/sc/tel/getTelAuthByEntId",
        updateTelAuthInfo: "/sc/tel/updateTelAuthInfo",
        reviewTelAuth: "/pub/tel/reviewTelAuth",
        getTelMeetingMembers: "/sc/tel/getTelMeetingMembers"
    }
});;
define("app/commons/resturl/UrlEncode", function(require, e, c) {
    c.exports = {
        "/sc/admin/getAdminList": "/4daca767c069cc2d409ca2b52beca34b",
        "/sc/admin/getAdminFolderList": "/98c56b9473dd097d263ad3ed08d0023a",
        "/sc/admin/addAdmin": "/5c299cd8cb665c217700e60785fded71",
        "/sc/admin/delAdmin": "/f2ccd64d29cdb789caaac59aab5925ed",
        "/sc/admin/updateAdmin": "/1a42b128922dc8161d688b8c2dc7a3d7",
        "/sc/admin/changeAdmin": "/a359b973036f75fd6f6e255c962aa365",
        "/sc/admin/lockAdmin": "/448806d14f71511d8d48a3fb88c0ea51",
        "/sc/admin/unlockAdmin": "/556ff55672e55987d0dd04fe1d47c688",
        "/pub/admin/resetAdminPw": "/8753e0dff2c2b9406f7758963c5929f2",
        "/sc/admin/hide/updateDeptHide": "/e89d6d5d73d4c8b4a1a7961ae8cb5b5f",
        "/sc/admin/hide/deleteDeptHide": "/67bf159d075c9193718f4db76769db5b",
        "/sc/admin/hide/getDeptHideByDeptId": "/33f47132f619bcff67b39142bd34405d",
        "/sc/admin/hide/getDeptHideList": "/c0a2c16fd07fa7c82faf5c597a6cca02",
        "/sc/download/confdoc": "/f05f96dbc01f561f7fe7ca76f8031264",
        "/v27/sc/download/confdoc": "/08c3faf40a2bd8f5b07d8f208954eeee",
        "/sc/zip/files": "/67b7c208cf981a0a24ae313a169b7ca1",
        "/sc/download/zipfile": "/1e77af319b879818ef8e373f1df9289f",
        "/v27/sc/checkDiskFile": "/31b6fe709b52ff475275e459d445e1d5",
        "/v27/file/download/checkDiskPdfFile": "/742d84db44d0de4ca490dc9f4d2a7030",
        "/file/download/downloadDocAsPdf": "/71d10b63856d237419197dbd24f4208c",
        "/v27/file/download/downloadDocAsPdf": "/ff19816402fcbd348baeaf987d9da325",
        "/sc/file/sectionOnlineFileDownload": "/5e27d81518f2edc6997c995cfb22a9b8",
        "/sc/file/shareLinkDownload": "/790374c89d387c3065bb7c13cdbc798c",
        "/v27/sc/file/shareLinkDownload": "/1ed37a3337c4f466b7e92b198f5b3adf",
        "/sc/entDisk/getEntDiskHistory": "/a22fae67f39d0ba46bcf3e395034601c",
        "/sc/entDisk/getEntFileHistory": "/969be3ad43c63234a619c69ab27ee67d",
        "/sc/entDisk/getEntFolderHistory": "/4e23645c43ccc12f25a17490d9f16490",
        "/sc/entDisk/getEntFileVersionDetail": "/99978ce81f55891d78a00a77bcbbb1d8",
        "/sc/entDisk/getEntFolderVersionDetail": "/05f810382619dbe533b1195475c4a097",
        "/sc/entDisk/restoreEntFolderVersion": "/d632545c0cb9c030d083ae91f4aaae69",
        "/sc/entDisk/restoreEntFileVersion": "/8d2e12aa13050c037b926e80a1200c04",
        "/sc/entDisk/getEntFileByVersion": "/66801e9fc58221ecd49889cdf04565ec",
        "/sc/entDisk/deleteEntFileHistory": "/7d7593ff0313293d3eb02f3d641865da",
        "/sc/entDisk/createEntFolder": "/1fe0133a64c9e90b10ecb73b0ad59a81",
        "/sc/entDisk/checkEntFileUpload": "/78d0feeef332c0ed897e5150e3def402",
        "/sc/entDisk/getEntFolderAndFileByFolderId": "/fe0e5ec58146a0b93cfa4bb751c2d25e",
        "/sc/entDisk/getEntFolderAndFileByFolderIds": "/2d3cf0cc23f4e0c0b17441168d535262",
        "/sc/entDisk/getEntFolderByUserId": "/64f3038858f71ec269ee01136102fa05",
        "/sc/entDisk/getEntFolderByEntId": "/4788424c7c63fc38eae81e75e08ff578",
        "/sc/entDisk/getEntFolderAndFile": "/39685cbbe12764fa6c42083563b463a6",
        "/sc/entDisk/getRecycleEntFolderAndFile": "/6838f8802c637305602cbc1651507e71",
        "/sc/entDisk/getPagedRecycleEntFolderAndFile": "/ebb79df2788619be04cc7571f8e94b87",
        "/sc/entDisk/lockEntFile": "/eef844dc9476a3d81965938a43ef6415",
        "/sc/entDisk/unlockEntFile": "/fc8aacec500f88ed915d6920322b98de",
        "/sc/entDisk/searchEntFile": "/961c7c019b6214bd357d4f2fce458e7c",
        "/sc/entDisk/getEntComplexFolder": "/314ecd9877ab6ac0cb93ff287f8684b3",
        "/sc/entDisk/moveEntFile": "/16851d7f3eacd52cf1cc2d9ad39783ed",
        "/sc/entDisk/moveEntFolder": "/ecceb21b2efe7e1218721dc3d4b5ecd8",
        "/sc/entDisk/moveEntFolderAndFile": "/c1ebf813384efb151be6feab711c56b3",
        "/sc/entDisk/renameEntFile": "/a411c1c92904c07c89470149baa0d120",
        "/sc/entDisk/renameEntFolder": "/f28d95140297a44ac82e5b730afc8058",
        "/sc/entDisk/deleteRecycleEntFile": "/e51866af71eb29a286e9c134da2b6b3e",
        "/sc/entDisk/deleteRecycleEntFolder": "/03ae5a8995dc94c457ebea4b1cf5b6d5",
        "/sc/entDisk/deleteRecycleEntFolderAndFile": "/bdad1954a13efdfbe62c2350eff969eb",
        "/sc/entDisk/emptyEntRecycle": "/9af6946d3d389c0b2c1aff71ccf7cdc0",
        "/sc/entDisk/restoreEntFile": "/d5948689f7da0c986d915ec70ef51767",
        "/sc/entDisk/restoreEntFolder": "/815ae3804128f59ca62a58ae419e77b3",
        "/sc/entDisk/restoreEntFolderAndFile": "/db97862bf41e382c07846f95000a2afc",
        "/sc/entDisk/deleteEntFileToRecycle": "/3e78207e4c9124754d6bd8dfd4595164",
        "/sc/entDisk/deleteEntFolderToRecycle": "/257089409af59a4949469d06f3dce553",
        "/sc/entDisk/deleteEntFolderAndFileToRecycle": "/8a840aa007c5390325eab138266b3f98",
        "/sc/entDisk/getEntParentIdsByFolder": "/19ee89eb799cf7a9753ba503cb294442",
        "/sc/entDisk/getEntParentIdsByFile": "/538f59e35ae1ff0cd4d83a81954623e5",
        "/sc/entDisk/updateEntFileThumb": "/f89e51ccd74956a8f162561184866032",
        "/sc/entDisk/updateEntFileRemark": "/efe7ec7cb5498c4c6831e4514ecc5793",
        "/sc/entDisk/updateEntFolderRemark": "/6b93110235b66111888aabe5a4e0a1c1",
        "/sc/entDisk/getEntFile": "/88e3b081ff60a103a564ecc861e53a62",
        "/sc/entDisk/getEntFolder": "/afb6836d848b1064bd847e1661f1641e",
        "/sc/entDisk/getEntFolderAndFileById": "/0ff61aa85c06d9595d7b7d74639e99af",
        "/pub/entDisk/updateEntFileSyncStatus": "/609aa6d2678147ec9382f21c49c3698c",
        "/sc/entDisk/getEntFileById": "/46426e92fe8733a9d6252fee4f1cc6c4",
        "/sc/entDisk/getEntFolderById": "/ba80879fb18a7f7f76e63b938f5621dd",
        "/sc/entDisk/getEntDiskUsedSize": "/5fe4203ad75e3d82de0d7cfeb869480a",
        "/sc/entDisk/getAdminEntFolders": "/4e27b10320c6d1293c7b83e56ada9c06",
        "/sc/entDisk/updateEntFolderSize": "/4dc2c8aa994ba79d2b492d27a941e240",
        "/pub/entDisk/getUnSyncEntFile": "/05b020df17d91098d4b3125ebec51b77",
        "/sc/entDisk/getParentEntFoldersByFolder": "/9771fbccbcfaec93c5183947364d8df2",
        "/sc/entDisk/getParentEntFoldersAndSelfByFolder": "/a8fb282d292c3fb137dead0a12101dbe",
        "/sc/entDisk/getParentEntFoldersByFile": "/8b88c6bfef4702733a0fe74252a84122",
        "/sc/entDisk/getPagedEntFilesByFolder": "/54bc74ee622991ccdaf2f90dda6edad5",
        "/sc/entDisk/getAdminFoldersFolderId": "/915b4b3b53c11d2feeee12ab3dfbc93c",
        "/sc/entDisk/getEntFolderSizes": "/1f3089b7e8fd196d61ecc1610a222698",
        "/sc/entDisk/getEntFoldersByFolderId": "/c986ea6307a2562c3a3235c3caaf39f0",
        "/sc/file/checkFilePwd": "/43f865e50910752cc48324d06a318709",
        "/sc/entDisk/getEntPicturesByFolder": "/4340d7fcdcba9c31a142da0c387d25b7",
        "/sc/entDisk/getEntComplexFolderByFolderId": "/d9fd94455f25f872d078004eb6de70be",
        "/sc/shareLink/createEntFileLink": "/3d9abee426e622590e9e448b791cac53",
        "/sc/shareLink/createEntFolderLink": "/327c64b75d3aa1c5b43b745db171346f",
        "/sc/shareLink/updateLink": "/f65516ada4af447e0cb9af4a15e3b34f",
        "/sc/shareLink/deleteLink": "/1f780c2acbd5cf6eab87fd0ed0d66d4e",
        "/sc/shareLink/deleteLinks": "/adc48907e7b30fb72ea4f30e479a3c1d",
        "/sc/shareLink/checkLinkDownload": "/51a916a77b192886e5a027bcb6393e16",
        "/sc/shareLink/updateLinkDownCount": "/23b668c3fb3307cd9708405b9f0593a5",
        "/sc/shareLink/sendLinkMail": "/503ba5c3ad31582301c0725b7c0982a4",
        "/sc/shareLink/createLinkFolder": "/767c75fc812eac429ae02037584af78b",
        "/sc/link/getLinkFiles": "/436d76a84dc261fe96c0aa02dff81151",
        "/sc/link/sendLinkSms": "/cf1ba2ffd96ba132cd1453d1d63f2f40",
        "/sc/link/sendLink": "/8f6f15e08c5cb9ade818c56825315fda",
        "/pub/ent/register": "/3909d32b56897e79ba1e184b3d745696",
        "/pub/ent/isEntNameUsable": "/83abd21fc56107b943221a7c793443f4",
        "/sc/ent/changeLogo": "/0b9a8ba4a946f81b7f70c3f86a1c4d5d",
        "/sc/ent/updateEntInfo": "/5e50be465a1745f1d2316726fae08e65",
        "/sc/ent/getEntInfoByUserId": "/a2bec449f728dc1ac7aa1eed43242a6a",
        "/sc/ent/getEntInfoByEntId": "/c63170b54033783249f74aa412a2f463",
        "/sc/ent/updateEmpDefaultPwd": "/f5c6b70a4a1c16390013c689bcb4faaf",
        "/pub/ent/getSimpleEntInfoByEntId": "/33140d83f522c26db4602dbd38ec2082",
        "/sc/ent/checkEntStatus": "/dcd8053af2f68127632986cc6cb43f47",
        "/pub/ent/registerDone": "/44fc7154ac53c0158a2d350c92e50cc0",
        "/sc/ent/getEnterpriseInfo": "/b4a4c7fd4c3220d600b2797593ef65e1",
        "/sc/entDisk/addFavFile": "/9ef10d39ea7c35e9e64ecf2d62226255",
        "/sc/entDisk/addFavFiles": "/42967d9d3a8a8b7b96b7072478b9d19c",
        "/sc/entDisk/deleteFavFile": "/3cca2919c857718cc4f329542ff61243",
        "/sc/entDisk/deleteFavFiles": "/c4977fd55946439769d7a7cde7f421dc",
        "/sc/entDisk/getFavFileList": "/3b32c9ee3f1a30016eda6ee4e6c3cefe",
        "/sc/entDisk/getPagedFavFileList": "/7f06fd0e7da0a945d50568d34caf1022",
        "/file/fileUpload": "/10c40e6a02b509304b27dbdee1417335",
        "/file/checkSectionUpload": "/875b9e05c02f628252308c2984b41e7d",
        "/file/sectionUpload": "/51d878481b76c0d56e57ea373f92bbbd",
        "/sc/file/upload/checkSyncUpload": "/6a4fde2e2e04decbc864980fa9ef1b87",
        "/sc/file/upload/syncUpload": "/4367b6fa8249d303c354daab1901d01d",
        "/sc/swf/takePicture": "/266be0efeb7ab2807bb9076c280b1936",
        "/sc/upload/entlogo": "/7368da5d22ce01ba314a32389f5a1f54",
        "/sc/file/UploadSendFile": "/642e763f6956fdb4db0ddf2dc7dafc80",
        "/sc/file/saveHtml": "/d0ddb700f83cdc2e169df2dfd7e7d3b5",
        "/sc/file/upload/getRangeStart": "/c98c46fd9e56f2c0dbb97e43cb63cbcb",
        "/sc/file/upload/rangeUpload": "/e293ea46ecd516ada4438417d5795de3",
        "/sc/file/saveFileToDisk": "/6c8a7a76ce6b660bc64367c567e46167",
        "/entdisk/copy": "/83922d3dbd884e0755bc5dc2ddd17240",
        "/sc/file/copyPersonFile": "/8f759b1f36ef9e5bda846e390d8dd8d4",
        "/sc/file/getFiles": "/3c3f749358e88870f71cd66549773321",
        "/sc/file/createFolder": "/70507e9cb791bbbdca660f0da98d147b",
        "/sc/file/renameFile": "/fd8fb4e8281dac325afa917dd3a0f64c",
        "/sc/file/updateFileThumb": "/1f0886fdd664e70d73e9af6b6bbdb127",
        "/sc/file/updateFileRemark": "/f0e6f1294ef47e8d1cbdc49c9a0e169e",
        "/sc/file/moveFile": "/6e3a1359a74971ba0a7e3abc5b5f8b44",
        "/sc/file/moveFiles": "/591524803efd8d3eb5ceab21ca58f82d",
        "/sc/file/deleteFileToRecycle": "/5a28ccbf25320fef9b9ed85b625e754c",
        "/sc/file/deleteFilesToRecycle": "/152aa0ebaeb670a43f7c575fe75a9793",
        "/sc/file/getFile": "/e50060d96b8bdded00db3289a28b95d2",
        "/sc/file/getFoldersByParentId": "/468e48ec7f188389e43633e4b15f9e32",
        "/sc/file/getParentFoldersAndSelf": "/07029b07488f0faee1cf07562d908446",
        "/sc/admin/file/getAdminFoldersByParentId": "/9cb1cb82e97f87bf30390bc66d8078b8",
        "/pub/user/loginByLdap": "/9a2e5f9712add6da3476f9a227c3f4c5",
        "/sc/ldap/updateLdapConfig": "/aadbd16b0784971a53c2d4894bbfd3ec",
        "/sc/ldap/getLdapConfig": "/dc6ff9f9423aba2884d70f0c8daa8ee4",
        "/sc/ldap/testLdapConnection": "/7c42570426ba930045660e81f7d6b4ac",
        "/sc/log/searchLog": "/f388d33d46d74b613e537de822bbdd0c",
        "/sc/log/insertLog": "/87b346da614be42de23859a3546406e8",
        "/sc/log/insertLogs": "/1fdf84246f9ffe33418aaa3cf3dd2e3f",
        "/pub/log/feedback": "/b882ab579d6d7e6d026e13a0e74a2f0c",
        "/pub/log/functionStat": "/f517cf1d83205d00c16252256337eada",
        "/pub/user/logon": "/53562f464e728ee1a8cca349154c2f44",
        "/pub/user/signin": "/01f6a903037c6e1fada2d40ebc911108",
        "/sc/user/logoff": "/a70ba81552ffbb82e1293c5899abf340",
        "/sc/user/changePwd": "/9bae020e38277ec891cef4437da77b3c",
        "/sc/user/checkUserPwd": "/38f265d29eea480f969b9318eecf35ad",
        "/pub/user/resetPwd": "/f43985a27c8d59b62a9e24112f761b1c",
        "/sc/user/checktoken": "/3c841c358ec3f4cd5936334ad3bbd021",
        "/sc/mail/sendMail": "/67b68797d1bcb167dba734ba45de0780",
        "/pub/msg/getUserDeviceTokensHasUnreadMsg": "/00040136e2da0a59fcea3e59a06d3fa0",
        "/sc/msg/getUnreadMsg": "/e4ae23e08ac99dd81158a003a536a609",
        "/sc/msg/confirmMsg": "/9148520d0ac85669a8a8902c8b2c2cb8",
        "/sc/msg/getChatRecord": "/79f9e2bd5c5726f86ea7579427f82d03",
        "/sc/msg/getPagedChatHistory": "/2f0d9029f1a33cbcf2f2aa38949e719e",
        "/sc/msg/saveMsg": "/eb3446f504ca1fe79d396c768f1e6eb7",
        "/sc/msg/saveMsgs": "/465339a9b05d91a12a59c0ead50fbec9",
        "/sc/msg/getSysMsgHistory": "/ae295865ff5ad5adc758aff3ea35246a",
        "/pub/msg/createSysMsg": "/cf24cea151d1bdfe11eb9fd387334496",
        "/pub/msg/updateSysMsg": "/f07b2ed989ae6080d375283e3ea8bfda",
        "/pub/msg/cancelSendSysMsg": "/7039881877124583d4f2384cd7f44654",
        "/pub/msg/getSysMsgByStatus": "/0a33b05e8c8625b03a01b97811f41bb7",
        "/sc/service/getCurrServiceList": "/b901069c32cd869629788699fe4d5ede",
        "/pub/order/saveSingleOrder": "/f14e84c8c93e83c795a895fda81556a9",
        "/pub/order/payOrder": "/6ab7945b561aec895741d56e391d1d0e",
        "/sc/order/getBuyRecords": "/d69a7b9aa5b4b9055bdd0246a9cc286b",
        "/sc/file/permission/checkFilePermission": "/bb8b2cc05f0fcaf44f498b5bc3569c6b",
        "/sc/entDisk/checkEntFolderPermission": "/9ae2eb97af81cfab1b56269e5fef009d",
        "/sc/entDisk/checkEntFolderPermissions": "/345d5793f34ab7e11b854da3f3c25a9e",
        "/sc/entDisk/checkEntFoldersPermission": "/c7c9ca7934bed5f79d6a52055c19df1d",
        "/sc/entDisk/createRole": "/8de9a193c7b96fa0bd505df284622c68",
        "/sc/entDisk/renameRole": "/25f92e6c46a463b3fd8b0033dfc3d761",
        "/sc/entDisk/deleteRoleById": "/34290d085e399d0e3db4212dcb7779f5",
        "/sc/entDisk/getRoleById": "/294104df4299d5f664fcdc910143fa90",
        "/sc/entDisk/getRoleList": "/1638cad3ee77ddc5374cd73fdff22e55",
        "/sc/entDisk/updateFolderPermission": "/eede0c36f1b96f059e00da1961559642",
        "/sc/entDisk/updateSingleUserFolderPermission": "/ad71561a3a518d4ba0fa0c7f122b3899",
        "/sc/entDisk/updateUserPermission": "/363dc7219fdeadba00a93b062b371673",
        "/sc/entDisk/updateRolePermission": "/6d07a1f14facf01e5a2a6a328350f1b4",
        "/sc/entDisk/getUserPermissionsByFolderId": "/4cbf3b24ec76ad476d947453544b9873",
        "/sc/entDisk/getFolderPermissionsByUserId": "/8431e11a4c5e425f7c8748a55f914215",
        "/sc/entDisk/getFolderPermissionsByRoleId": "/f9d25ffe454e036b7df888f053604e73",
        "/sc/entDisk/getUsersByRoleId": "/b3128c62921a32d294cfec824e4c9c0d",
        "/sc/entDisk/getFolderPermissionsAndUserByRoleId": "/7a165279939593c37e8a5a9fd36294d5",
        "/sc/disk/searchPersonalFile": "/f60b1080fa679f950c727c6b64d75752",
        "/sc/disk/getPersonalComplexFolder": "/cfd36b6f578e5ab033d7f4f66f809909",
        "/sc/disk/movePersonalFile": "/fcf7e03881a7d13f7d2b07a7f366a7dc",
        "/sc/disk/movePersonalFolder": "/dbbcbfcfb0accb69125d4a6d3fc61f87",
        "/sc/disk/movePersonalFolderAndFile": "/caa39681137185dbb751844fa4da2c09",
        "/sc/disk/renamePersonalFile": "/f06367d8bac74aa24683b49c60b3e0ac",
        "/sc/disk/renamePersonalFolder": "/48c29d9d60b2583f1c1e0da09f87dead",
        "/sc/disk/deleteRecyclePersonalFile": "/55743da7dfec53180b2ac54ab6dd9c85",
        "/sc/disk/deleteRecyclePersonalFolder": "/d0c3b450c45484b772a46ce6d68e4520",
        "/sc/disk/deleteRecyclePersonalFolderAndFile": "/e403e2da13a8dca1ea6fac1dfc761c3f",
        "/sc/disk/emptyPersonalRecycle": "/e6fdf71a911bac34e2d47d8cb0181136",
        "/sc/disk/restorePersonalFile": "/5b182dfd98c4fc2c7a0367ea76f38410",
        "/sc/disk/restorePersonalFolder": "/a9ab93e96cd5f63c6343593ea9721a32",
        "/sc/disk/restorePersonalFolderAndFile": "/90dab570739f570dbad381773fd66eee",
        "/sc/disk/deleteFileToRecycle": "/35f311a9397801e792a825b7341e8acc",
        "/sc/disk/deleteFolderToRecycle": "/825b47e570a17b13699f0e8d577955fb",
        "/sc/disk/deletePersonalFolderAndFileToRecycle": "/4f6c2529536d40368e2830bd2f93c00e",
        "/sc/disk/updatePersonalFileThumb": "/c51a1fa142d3cf14234bc287bd7a9fb8",
        "/sc/disk/updatePersonalFileRemark": "/52e3acb3e8ad49d998405bc11532e2e1",
        "/sc/disk/updatePersonalFolderRemark": "/3a7dbffcf533d29f8d0e42a8931786d4",
        "/sc/disk/getPersonalFolderAndFileById": "/d6ed77a1feba39569290b69689f96c6d",
        "/sc/disk/getPersonalFolder": "/74b8c306705ae66de9e04206e35c8d75",
        "/sc/disk/getPersonalFile": "/7472f1d8b87c09955df809847297c04a",
        "/sc/disk/getPersonalFolderAndFileByFolderId": "/8d4dec96a40f959ddbe30813c05c2999",
        "/sc/disk/getPersonalFolders": "/f4360507b0cf42dd325dca5a78f34d1f",
        "/sc/disk/getPersonalFolderAndFile": "/65c93c2a203ece475a6b9ffb84edf791",
        "/sc/disk/getRecyclePersonalFolderAndFile": "/cd87205a124ed71efc5e93622895f37b",
        "/sc/disk/getPagedRecyclePersonalFolderAndFile": "/c9beee2a4df708dd43f8492c79deb4af",
        "/sc/disk/createPersonalFolder": "/208220572bc27fd83f6e60833a390eab",
        "/sc/disk/checkPersonalFileUpload": "/4e63daa603385a4fdc8fde8037b09b44",
        "/pub/disk/updatePersonalFileSyncStatus": "/abaa4313b036fedc8f9dbf30aa4dff86",
        "/sc/disk/getPersonalDiskUsedSizeByUserId": "/11723b265d37d137eb76ca8b4294aee3",
        "/pub/disk/getUnSyncPersonalFile": "/a15507fab47ee9439e3c60fc29b5df15",
        "/sc/disk/getPersonalParentIdsByFolder": "/5b58e3eb8d0163b6ced809b6c1f71444",
        "/sc/disk/getPersonalParentIdsByFile": "/0e5469af9452162f94c7926dc6c67c17",
        "/sc/disk/getParentPersonalFoldersByFolder": "/c8663099e6a8008a698c9152e57c66b7",
        "/sc/disk/getParentPersonalFoldersAndSelfByFolder": "/21d25b403aa7d0c55f64006fa16d8686",
        "/sc/disk/getParentPersonalFoldersByFile": "/69497533d2b21121c54c8c633775be43",
        "/sc/disk/getPagedPersonalFilesByFolder": "/6d6d10563db6dfe787efcec116bc5be1",
        "/sc/disk/saveSendFile": "/8d6aaae527643e08bcf86c7720ac1a55",
        "/sc/disk/saveReceiveFile": "/ff7b802fc8c9574f6f7eecc603a9ad7c",
        "/sc/disk/getPersonalFoldersByFolderId": "/8df6626374c28332df02799ba29447b8",
        "/sc/disk/getPersonalPicturesByFolder": "/58f2e59bc55ca467a3d6e45488ab4ee8",
        "/sc/admin/recycle/getAdminRecycleFiles": "/9e8f8069dccd786634583325ed0e790c",
        "/sc/admin/recycle/restoreAdminRecycleFile": "/39d4d228e4c051833122974681d77c6b",
        "/sc/admin/recycle/restoreAdminRecycleFiles": "/31a52f197056f899b3f0bfe344074d37",
        "/sc/admin/recycle/restoreAllAdminRecycleFiles": "/df110e039c73d1d05a6a1168cf9c447a",
        "/sc/admin/recycle/deleteAdminRecycleFile": "/fdcfc48cfd43a73eff7e780a14683f18",
        "/sc/admin/recycle/deleteAdminRecycleFiles": "/cbf6ce80c3cbde2a394abc42e13846db",
        "/sc/admin/recycle/deleteAllAdminRecycleFiles": "/60ce58ea9bc2dfa4d8a9c2df1f2f180e",
        "/sc/recycle/getRecycleFiles": "/5c37b8dc5c54fe770e80147bb7913c06",
        "/sc/recycle/deleteRecycleFile": "/20d510eab498a2cafcb606647ac80730",
        "/sc/recycle/deleteRecycleFiles": "/7549fb6028a320bd878d933c74167597",
        "/sc/recycle/emptyRecycle": "/36983a72ea481593ecbe97d1250294fd",
        "/sc/recycle/restoreFileFromRecycle": "/97ff1ec9db3f3cfd8b3160adb13a0687",
        "/sc/recycle/restoreFilesFromRecycle": "/77aeaa7c319be00e97d88223908d9ee7",
        "/sc/entDisk/remindEntFolder": "/33eb1de6b2ec1c7d413b67a2157725c2",
        "/sc/entDisk/remindEntFile": "/2a3c814684440e16843564b5d72c6650",
        "/sc/entDisk/remindEntFolderAndFile": "/cf4682ce8d8474fccdfbca9a363a9483",
        "/sc/entDisk/getRemindEntFolderAndFile": "/0f942ff65e92fe37573d6759cfd320fb",
        "/sc/entDisk/deleteRemindEntFolder": "/8bbac1d934ca6a5db3f6f3b36c525663",
        "/sc/entDisk/deleteRemindEntFile": "/cfeaee8bb1d130b4c8178995b5f476ba",
        "/sc/entDisk/deleteRemindEntFolderAndFile": "/fe035fd560b6f7c28a07c09562a325c9",
        "/sc/entDisk/isEntFolderReminded": "/ff94397f290222ffbec6cd45cdd5ccd1",
        "/sc/entDisk/isEntFileReminded": "/4ac83da82b6304ac156248ce5169c757",
        "/sc/entDisk/getPagedRemindEntFiles": "/3d59e25535496e54d9456f8be6931cdc",
        "/sc/entDisk/isEntFilesReminded": "/4eb15389902a2c812479c0def0bfbd15",
        "/sc/remind/getRemindFiles": "/772f521243e88f728c1f8113d4939469",
        "/sc/remind/remindFiles": "/7d950c6a6a36beb845caab1a586070a0",
        "/sc/personalLink/enablePersonalLink": "/b6e763f707ce8545ae0511efa856915a",
        "/sc/personalLink/createPersonalFileLink": "/d407c0fa3d50d8de2b9b1dba58c027ef",
        "/sc/personalLink/createPersonalFolderLink": "/b158f0f3c9b59f50f27a4d3ea2189959",
        "/sc/personalLink/updatePersonalLink": "/d35ed8d8b6f9ea3e450ffefab88e736e",
        "/sc/personalLink/deletePersonalLink": "/b50f06c728f1a7d1f8eb3916778c3f8e",
        "/sc/personalLink/deletePersonalLinks": "/0ef9b3ebd90c5e6e94fee82a6ca49a8c",
        "/sc/personalLink/getLinkPersonalFolderAndFile": "/3d7965b8a27b1ab7d8c37e2013f06b66",
        "/sc/personalLink/getPersonalLinkByLinkId": "/a8d9e1008705b9cb89ad733a96adec39",
        "/pub/personalLink/getPersonalLinkByCode": "/c9d35e1c6fe4bfe4606f02a4c8d19769",
        "/sc/personalLink/checkPersonalLinkDownload": "/8007105082a21b4675adae0840213299",
        "/sc/personalLink/updatePersonalLinkDownCount": "/7ff9e635b9f17cd017511b61e4446223",
        "/sc/personalLink/getPersonalFolderAndFileByLinkFolder": "/dbad4384f5c293b6d53a67d6c65e9115",
        "/sc/personalLink/createPersonalLinkFolder": "/c1e3e312c6fe7d763913b9cbcc14e305",
        "/pub/rx/rxCustomerRegister": "/4bfd2e8ee193dd5a4d16dde0c98369e1",
        "/pub/rx/rxCustomerLogon": "/a63a35e217b258dcabaa8c0f48387d16",
        "/sc/rx/addRxCustomerFile": "/f5a9c773a9ed5a430eb6470f68f478d3",
        "/sc/rx/createRxFolder": "/e6c46113816dec3460daae3a21591447",
        "/sc/rx/applyFinance": "/a68c2f7bb6efef2a936cb206c5b56440",
        "/sc/rx/getProgresses": "/f9b48832c6d968fb6aa8f093f9e6e75f",
        "/sc/admin/sync/updateSyncFolder": "/3112f0911a60015c2a04f9055ebb3d09",
        "/sc/admin/sync/deleteSyncFolder": "/9970a99cac40775542ac06358125dc9a",
        "/sc/admin/sync/deleteSyncFolders": "/194ef0d8ea26120959e08f40246f1137",
        "/sc/admin/sync/getAdminSyncFolders": "/fe76b5f83825f28cb8631f052a6e9e3d",
        "/sc/admin/sync/getSyncUsersBySyncId": "/aabafec9f6a698b31328b1c3eb3aee84",
        "/sc/admin/sync/getSyncFolderInfoByFolderId": "/58570776d3864d7e2622148d0a19ed59",
        "/sc/user/sync/getSyncEntFolders": "/6b3868b9b192f725aaa8a4434020bec0",
        "/sc/tel/addTelContact": "/274217afefbe3a882c27ed64363fd4d0",
        "/sc/tel/updateTelContact": "/087c46b3aeffa97dfb26f4a69e93274b",
        "/sc/tel/deleteTelContact": "/b37d02aac544f77c53d54834be67a414",
        "/sc/tel/getTelContactList": "/0b355f5cae90241c602e4669e4136c19",
        "/sc/tel/deleteTelContacts": "/e0567c645f8931ecfa1f4100bdf72655",
        "/sc/tel/getTelServiceInfo": "/10e5295cda8464923077016ca0f59b82",
        "/sc/tel/updateTelNumber": "/1d9393fa3c565028d3d08c7a78ed984e",
        "/sc/tel/createTelCall": "/eee7fcb95d6cbea6e097a62b4104ad3a",
        "/sc/tel/createTelMeeting": "/d08d71a2c4d8314ac04ac2601f24d4f1",
        "/sc/tel/addTelMeetingMember": "/2437ecdab43830a7bd94cb9ee204fd6e",
        "/pub/tel/updateTelCallStatus": "/8e5dc2da86806da15548bf4cc03236d1",
        "/pub/tel/updateTelMeetingStatus": "/b8b592ef98a91526f92cf99578254234",
        "/sc/tel/updateTelMeetingMemberStatus": "/9c1ddda627a5b2e76b5315937a972b82",
        "/sc/tel/getTelBills": "/8dc5c79e068ad2f2a03863ec2d8050aa",
        "/pub/tel/getUnckeckedTels": "/14997609c192ae5aa272c636703f1a9e",
        "/sc/tel/getTelCallHistory": "/00fe78b5168b4f5542c31e2419b34ae0",
        "/sc/tel/getTelMeetingHistory": "/f0747f76611a7e8b3a13872c49309d49",
        "/sc/tel/getTelMeetingMembers": "/cf7c1ffeb083127efafaa40dc44fc482",
        "/sc/tel/getTelAuthByEntId": "/a68f8eec3b809f7117cb76280642eff1",
        "/sc/tel/updateTelAuthInfo": "/b9aac7bf71e9bebd8a924bdbdc4a7fc6",
        "/pub/tel/searchTelAuth": "/45ceccd55d5cf78f89c0ecc8c0b8f2ce",
        "/pub/tel/reviewTelAuth": "/bd09e87552c00502ed59b0044474e5c1",
        "/pub/statisticalUser": "/56bfa127e889cdb7bc502de5d7541d7d",
        "/sc/user/changeUserIcon": "/ed78cc6238aa3ce7031cb27f9ecae45e",
        "/sc/user/changeOlineStatus": "/1153a6c5fb2c1bc242033c4da6576103",
        "/sc/user/getUserStatuses": "/9db958920116bb2df1c840a2caeab60a",
        "/sc/user/addDept": "/11b9b4d510060e299c720c80855f0234",
        "/sc/user/addUser": "/bec8d7f8c31cfe667b14645c1bbc2d52",
        "/sc/user/updateUserInfo": "/451e75dab6e27a50fa8126fc13dd9ca7",
        "/sc/user/getUserInfo": "/d985ec758d7d3ebc604dfd1218467154",
        "/sc/user/getOtherUserInfo": "/08150298bacdead6e38eabad283ec794",
        "/sc/user/importUser": "/2b04f74241969952647951e6cd5a614e",
        "/sc/user/getDeptAndUserWithStatus": "/0d6d1321b8cd5695a6b390688390d522",
        "/sc/user/renameDept": "/e428845c2efb1a4c86ec6845a663ce02",
        "/sc/user/deleteDept": "/96b1e899109f382d8b9ca6f7a667669c",
        "/sc/user/updateDeptOrder": "/80187e15eea85f47bed9d80ef97924ba",
        "/sc/user/getDeptById": "/222d897036128fee011dbd59978f3f94",
        "/sc/user/getDeptList": "/36f069223009ae44834d1914ede9a32e",
        "/sc/user/getDeptAndUser": "/ac7a2bfeae957a2723986ef12db9e8f1",
        "/sc/user/getDeptAndUserWithStatusByDeptId": "/19d6ffc56d464aa9f5216dfa7c7704c8",
        "/sc/user/getDeptAndUserByDeptId": "/608f0b9e9976fd3b6f1a929ab44f9c47",
        "/sc/user/getUserByDeptId": "/bb350016cda59b34f6d32c2534bb9cfb",
        "/sc/user/getAdminDeptList": "/cfe28102ba4ff3eace00849f5ffb0da1",
        "/sc/user/getAdminDeptAndUser": "/b36875ffda318ef84bcebc6b86a2345c",
        "/sc/user/deleteUser": "/0d43d458dc0bf3a3e17c85a8e290a6a3",
        "/sc/user/deleteUsers": "/70cd29f485eb675683a221f70b882c56",
        "/sc/user/lockUser": "/6b00b644009d2bd4223fb749368c0f7b",
        "/sc/user/lockUsers": "/260afb0c08af541198916773f783b462",
        "/sc/user/unlockUser": "/1d2fea6719ca0dc2af79f63d2518ea27",
        "/sc/user/unlockUsers": "/3bc8688a317858cb8b5c6a434b613996",
        "/sc/user/resetUserInfo": "/253bf12fe49ae037e30e69510968fc2a",
        "/sc/user/resetPassword": "/2a0ac3c18c14b54fa699b7374d6f7c77",
        "/sc/user/updatePersonalDiskSize": "/ffd58474d759da73c53f562403510ee2",
        "/sc/user/moveUser": "/49c19358637b620a0a8ab65e1ea2adcc",
        "/sc/user/updateDeptUser": "/3ef26e86c76166f33fec51e0d0fc16e3",
        "/pub/user/parseImportUsers": "/49c9d2319f93d701a2fdab5bb5ac100d",
        "/sc/user/createUser": "/6e3191020a45212a43644ad0326be80b",
        "/pub/user/bindAccount": "/c0003833b04bc2ad18203fd554271d8f",
        "/sc/user/searchUsers": "/6e05dbfa75cc6ef086bdf60d9cce6864",
        "/sc/contact/createContactGroup": "/75c467a7b985997242aff10be8667438",
        "/sc/contact/renameContactGroup": "/8e037cd7baeb2832175f649329d91b33",
        "/sc/contact/deleteContactGroup": "/175f81dbdf78e3b99b8bff447894f99e",
        "/sc/contact/addContact": "/6e768a6b8b1873b2a31da826e15258d6",
        "/sc/contact/addContacts": "/504af343cdf8c8759cdce974bfbeb08e",
        "/sc/contact/deleteContact": "/13bf1d27bfc78756667f6cd323c77eb1",
        "/sc/contact/deleteContacts": "/36422794e8d7eff3f36d3ba59207b3b9",
        "/sc/contact/getContactGroupList": "/929d56863e3709a0fca74c76479668bd",
        "/sc/contact/getContactGroupAndUser": "/8bf967723756439a63491773624cadc4",
        "/pub/code/sendValidationMsg": "/ee882551c6687ca76dc7b6b0cb2207ad",
        "/pub/code/checkValidationMsg": "/a316f1158e4808f90d488b24836f18d4",
        "/sc/file/viewFileAsHtml": "/22e3854268f736a96cb5631094c34f0c",
        "/sc/file/viewFileAsImage": "/06f20a1aa3c0a1ff6d6ecb5d3f2db83e",
        "/sc/file/viewFileAsPdf": "/9afe452890faa200cb093802d7c9df8b",
        "/sc/file/viewConferenceDoc": "/141ad2760b95c69271eec779866a384d",
        "/sc/file/sectionOnlineFileDownload": "/5e27d81518f2edc6997c995cfb22a9b8",
        "/sc/file/sectionFileUpload": "/debd14382d7c92d00bcaa408ce90950f",
        "/getVersion": "/db14f9c1376d24bed2e68030b5101cb9",
        "/sc/file/fileRoutingUpload": "/bd43a4e129216ee90a86b44cd20f9511",
        "/sc/file/fileDownload": "/2eae030588dba72e724244c1083d834d",
        "/sc/folder/zip": "/db17811ba0d94936910063c0ff7b88b3",
        "/sc/folder/download": "/c61c93aae0eb87723c715a4c688737fe",
        "/sc/multifile/download": "/d273c6b0e5362af0f748c5424997c4f4",
        "/sc/multifile/zip": "/4919f74bc7824928f6be7531d2c7ed2b",
        "/sc/file/shareLinkDownload": "/790374c89d387c3065bb7c13cdbc798c",
        "/sc/user/icon/upload": "/e17d3a0c5ec5f7750679ed266612cff3",
        "/sc/checkDiskFile": "/d7d53a7ee4ab7f886e6b0286994862b4",
        "/sc/download/zipfile": "/1e77af319b879818ef8e373f1df9289f",
        "/file/getMediaStream": "/a692c021bd91bfcdd15b7583a7cdbdb2",
        "/getConfig": "/fe34ce5df76aad017dd6705b145a34bc",
        "/validationCodeServlet": "/0c7f677518fc653b59489bcaff713ab0",
        "/servlet/wordVerify": "/2abc2732bf47971666fa0604c4cc76d4",
        "/sc/file/viewFileAsImage": "/06f20a1aa3c0a1ff6d6ecb5d3f2db83e",
        "/sc/file/viewFileAsHtml": "/22e3854268f736a96cb5631094c34f0c",
        "/sc/file/viewFileAsPdf": "/9afe452890faa200cb093802d7c9df8b",
        "/sc/file/viewFileAsSwf": "/c187306ce5b93f739f8ee9422f0c5cd5",
        "/sc/file/editFileAsHtml": "/38dd18bc05350f2a397323df94bbdff7",
        "/sc/file/saveHtml": "/d0ddb700f83cdc2e169df2dfd7e7d3b5",
        "/sc/file/saveFileToDisk": "/6c8a7a76ce6b660bc64367c567e46167",
        "/sc/shareDisk/sharePersonalFile": "/d144ea7f27ab2cf08bbc0bbf816c7608",
        "/sc/file/getFileStream": "/30a9c22bec810cb2ebed67868cca292f",
        "/sc/write/log": "/4593b0e5b5cb8f6ad31d27b097c3003c",
        "/sc/file/viewFileAsMedia": "/ffcb50251553aa83c33e95d9310095a6",
        "/sc/file/viewConferenceDoc": "/141ad2760b95c69271eec779866a384d",
        "/sendmsg": "/84cce15940a9b1c7c820f416a96383b5",
        "/sendmsgs": "/aa2ca10d10393a49a3a1110312f078e1"
    }
});;
define("app/commons/resturl/UserUrl", function(require, e, t) {
    t.exports = {
        getUserInfo: "/sc/user/getUserInfo",
        getOtherUserInfo: "/sc/user/getOtherUserInfo",
        updateUserInfo: "/sc/user/updateUserInfo",
        getDeptAndUserWithStatus: "/sc/user/getDeptAndUserWithStatus",
        getContactGroupAndUser: "/sc/contact/getContactGroupAndUser",
        deleteUsualContact: "/sc/contact/deleteContact",
        deleteUsualContacts: "/sc/contact/deleteContacts",
        addUsualContact: "/sc/contact/addContact",
        addUsualContacts: "/sc/contact/addContacts",
        changeOnlineStatus: "/sc/user/changeOlineStatus",
        getUserStatuses: "/sc/user/getUserStatuses",
        moveUsersDept: "/sc/user/moveUser",
        updateDeptUser: "/sc/user/updateDeptUser",
        getUserByDeptId: "/sc/user/getUserByDeptId",
        getDeptAndUserWithStatusByDeptId: "/sc/user/getDeptAndUserWithStatusByDeptId",
        updatePersonalDiskSize: "/sc/user/updatePersonalDiskSize",
        getAdminDeptAndUser: "/sc/user/getAdminDeptAndUser",
        getAdminDeptList: "/sc/admin/user/getAdminDepts",
        getDeptById: "/sc/user/getDeptById",
        searchUsers: "/sc/user/searchUsers",
        importUser: "/sc/user/importUser",
        getDeptAndUserByDeptId: "/sc/user/getDeptAndUserByDeptId",
        getDeptList: "/sc/user/getDeptList"
    }
});;
define("app/commons/resturl/WebUrl", function(require, e, s) {
    s.exports = {
        sendMsg: "/sendmsg",
        sendMsgs: "/sendmsgs",
        checkWordVerify: "/servlet/wordVerify"
    }
});;
define("app/commons/uikit/file/CommentView", function(require, e, t) {
    var n = require("app/commons/models/file/CommentList"),
        i = Backbone.View.extend({
            tagName: "li",
            className: "comment-item",
            initialize: function() {
                this.render()
            },
            render: function() {
                return this.$el.html(__html(Handlebars.template(function(e, t, n, i, s) {
                        this.compilerInfo = [4, ">= 1.0.0"],
                            n = this.merge(n, e.helpers),
                            s = s || {};
                        var o, a, m = "",
                            r = "function",
                            c = this.escapeExpression;
                        return m += '<div class="list-item"><div class="comment-header"><span class="title">', (a = n.createrName) ? o = a.call(t, {
                                hash: {},
                                data: s
                            }) : (a = t && t.createrName,
                                o = typeof a === r ? a.call(t, {
                                    hash: {},
                                    data: s
                                }) : a),
                            m += c(o) + '</span>&nbsp;<span class="time light">', (a = n.createTime) ? o = a.call(t, {
                                hash: {},
                                data: s
                            }) : (a = t && t.createTime,
                                o = typeof a === r ? a.call(t, {
                                    hash: {},
                                    data: s
                                }) : a),
                            m += c(o) + '</span></div><div class="comment-body">', (a = n.commentBody) ? o = a.call(t, {
                                hash: {},
                                data: s
                            }) : (a = t && t.commentBody,
                                o = typeof a === r ? a.call(t, {
                                    hash: {},
                                    data: s
                                }) : a),
                            m += c(o) + "</div></div>"
                    }), {
                        commentBody: this.model.get("commentBody"),
                        createrName: this.model.get("createrName"),
                        createTime: constants.dateStrFromMisc(parseInt(this.model.get("createTime")))
                    })),
                    this
            },
            close: function() {
                this.undelegateEvents(),
                    this.off(),
                    this.remove()
            }
        });
    t.exports = Backbone.View.extend({
        className: "comment-view",
        commentList: void 0,
        collectionBinder: void 0,
        events: {
            "click .comment-btn": "_onPostComment"
        },
        initialize: function() {
            var e = this;
            this.commentList = new n,
                this.model.getFileComments(function(t) {
                    e.commentList.add(t.comments)
                });
            var t = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(t),
                this._addListeners(),
                this.render()
        },
        render: function() {
            var e = this;
            return this.$el.html(__html(Handlebars.template(function(e, t, n, i, s) {
                    function o() {
                        return '<%= msgNickname %>&nbsp;<input type="text" class="nickname" maxlength="30"/><span class="red-font">&nbsp;*<%= msg89 %></span>'
                    }
                    this.compilerInfo = [4, ">= 1.0.0"],
                        n = this.merge(n, e.helpers),
                        s = s || {};
                    var a, m = "",
                        r = this;
                    return m += '<div class="comment-title"><%= msgComment %></div><ul class="comment-list"></ul><div class=\'comment-post\'><textarea placeholder="<%= msgCommentPlaceholder %>" class="comment-area" maxlength="200"></textarea><div class="post"><div class="inline-block fl">',
                        a = n["if"].call(t, t && t.needNickname, {
                            hash: {},
                            inverse: r.noop,
                            fn: r.program(1, o, s),
                            data: s
                        }), (a || 0 === a) && (m += a),
                        m += '</div><div class="inline-block fr"><a class="comment-btn"><%= msgPublishComment %></a></div><div class="clear"></div></div></div>'
                }), {
                    needNickname: !cache.userId
                })),
                this.collectionBinder.bind(this.commentList, this.$(".comment-list")),
                this._onChangeHeight(),
                this.$(".comment-area,.nickname").bind("keydown", "return", function(t) {
                    return t.stopPropagation(),
                        t.preventDefault(),
                        e.$(".comment-btn").click(), !1
                }),
                this._onAddRemove(),
                this
        },
        viewCreator: function(e, t) {
            return new i({
                model: e,
                collection: t
            })
        },
        _addListeners: function() {
            this.listenTo(model.setting, "change:height", this._onChangeHeight),
                this.listenTo(this.commentList, "add remove", this._onAddRemove)
        },
        _onAddRemove: function() {
            this.$(".comment-title").toggleClass("hide", 0 == this.commentList.length)
        },
        _onPostComment: function() {
            var e = this,
                t = $.trim(this.$(".comment-area").val()),
                n = $.trim(this.$(".nickname").val());
            return model.currentUser && model.currentUser.get("userId") && (n = model.currentUser.get("realName") || model.currentUser.get("userName")), !t || t.length > 100 ? void noty.alert("请输入100字以内的评论信息！") : n || cache.userId ? void this.model.updateFileComment({
                commentBody: t,
                userName: n || msgs.msgAnonymity
            }, function(t) {
                if (!constants.isResponseError(t))
                    return e.commentList.add(t),
                        e.$(".comment-area").val(""),
                        void e.$(".comment-list").scrollTop(e.$(".comment-list")[0].scrollHeight);
                switch (t) {
                    case ErrorType.errorNoPermission:
                        noty.alert(msgs.msgNoPermission2);
                        break;
                    default:
                        noty.error(msgs.msgServerError)
                }
            }) : void noty.alert("请输入昵称!")
        },
        _onChangeHeight: function() {
            this.$(".comment-list").height(model.setting.getMainboxHeight() - 80 - 270)
        },
        close: function() {
            this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/file/EntFolderSelectTree", function(require, e, t) {
    t.exports = window.EntFolderSelectTree = Backbone.View.extend({
        tagName: "ul",
        className: "ztree entFolderSelectTree folder-tree",
        id: "EntFolderSelectTree",
        zTree: void 0,
        checkCallback: void 0,
        settingObj: void 0,
        initialize: function() {
            this.listenTo(this.collection, EventType.loadFile, this.onLoadFiles),
                this.settingObj = this.options.settingObj,
                this.render()
        },
        render: function() {
            this.$el.html("");
            var e = this;
            if (this.initSetting(),
                this.zTree = $.fn.zTree.init(this.$el, {
                    view: {
                        dblClickExpand: !0,
                        showLine: !1,
                        selectedMulti: !1
                    },
                    check: {
                        enable: !!this.settingObj.showCheckBox,
                        chkboxType: this.settingObj.chkboxType
                    },
                    data: {
                        simpleData: {
                            enable: !0,
                            idKey: "fileId",
                            pIdKey: "parentId",
                            rootPId: ""
                        }
                    },
                    callback: {
                        beforeClick: function(t, i) {
                            return i.open ? (e.trigger(EventType.selectFolder, e.collection.get(i.id)),
                                e.zTree.expandNode(i, !1), !1) : (e.onBeforeExpand()(t, i),
                                e.zTree.expandNode(i), !0)
                        },
                        beforeExpand: this.onBeforeExpand(),
                        onCheck: this.createCheckCallback()
                    }
                }, []),
                this.addFolderNode(model.rootEntFolder),
                this.settingObj.showCheckBox) {
                var t = this.zTree.getNodeByParam("fileId", model.rootEntFolder.get("fileId"));
                this.zTree.setChkDisabled(t, !0)
            }
            return this
        },
        hasParentSonRelated: function() {
            return !this.settingObj.chkboxType == {
                Y: "",
                N: ""
            }
        },
        initSetting: function() {
            this.settingObj || (this.settingObj = {}),
                void 0 == this.settingObj.chkboxType && (this.settingObj.chkboxType = {
                    Y: "s",
                    N: "ps"
                }),
                this.$el.toggleClass("p-s-no-related", !this.hasParentSonRelated())
        },
        createCheckCallback: function() {
            var e = this;
            return function() {
                var t = e.zTree.getCheckedNodes(!0),
                    i = _.map(t, function(e) {
                        return e.fileId
                    });
                e.checkCallback && e.checkCallback(i)
            }
        },
        addCheckCallback: function(e) {
            this.checkCallback = e
        },
        onBeforeExpand: function() {
            var e = this;
            return function(t, i) {
                e.settingObj.showManageFolder ? e.collection.fetchAdminFolders(i.fileId) : e.collection.fetchFolder(i.fileId, e.collection.fileType)
            }
        },
        onLoadFiles: function(e, t) {
            var i = _.filter(e, function(e) {
                return e.isFolder()
            });
            i.length && _.each(i, this.addFolderNode, this);
            var n = this.zTree.getNodeByParam("fileId", t.id);
            n && !n.open && this.zTree.expandNode(n)
        },
        showDialog: function(e) {
            var t = this;
            $.dialog({
                    title: msgs.msgEntFileDirectory,
                    content: this.el,
                    max: !1,
                    min: !1,
                    width: 200,
                    height: 320,
                    init: function() {
                        t.render(),
                            t.delegateEvents()
                    },
                    ok: e,
                    cancelVal: msgs.msg141,
                    cancel: !0
                }),
                this.collection.fetchRootFolder()
        },
        onChangeHeight: function(e) {
            this.$el.height(e)
        },
        clean: function() {
            this.zTree.cancelSelectedNode()
        },
        checkFolders: function(e) {
            _.each(e, function(e) {
                var t = this.zTree.getNodeByParam("fileId", e);
                t && this.zTree.checkNode(t, !0)
            }, this)
        },
        getSelectedFolder: function() {
            var e = this.getSelectedFolders();
            return e && e[0]
        },
        getSelectedFolders: function() {
            var e = this,
                t = _.map(this.zTree.getSelectedNodes(), function(t) {
                    return constants.isRootFolder(t.fileId) ? model.rootEntFolder : e.collection.get(t.fileId)
                });
            return t
        },
        addFolderNode: function(e) {
            if (!e.isFolder() || this.zTree.getNodeByParam("fileId", e.get("fileId")))
                return !1;
            var t = e.get("parentId"),
                i = t ? this.zTree.getNodeByParam("fileId", t) : null,
                n = {
                    fileId: e.get("fileId"),
                    parentId: e.get("parentId") || 0,
                    name: e.get("name"),
                    open: !1,
                    isParent: !0,
                    iconSkin: "folder"
                };
            this.zTree.addNodes(i, n, !0),
                this.settingObj.chkboxType.Y && this.settingObj.chkboxType.Y.indexOf("s") && i && i.getCheckStatus() && i.getCheckStatus().checked && this.zTree.checkNode(i, !0, !0)
        },
        showCheckbox: function(e) {
            this.zTree.setting.check.enable = e
        },
        getCheckFolders: function(e) {
            var t = this,
                i = _.map(this.zTree.getCheckedNodes(e), function(e) {
                    return constants.isRootFolder(e.fileId) ? model.rootEntFolder : t.collection.get(e.fileId)
                });
            return i
        },
        getFullCheckedFolders: function() {
            var e = this,
                t = _.filter(this.zTree.getCheckedNodes(!0), function(t) {
                    var i = e.zTree.getNodeByTId(t.tId);
                    return i && !i.getCheckStatus().half
                }),
                i = _.map(t, function(t) {
                    return constants.isRootFolder(t.fileId) ? model.rootEntFolder : e.collection.get(t.fileId)
                });
            return i
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/file/EntFolderTree", function(require, e, t) {
    t.exports = window.EntFolderTree = Backbone.View.extend({
        tagName: "ul",
        className: "ztree",
        id: "entFolderTree",
        zTree: void 0,
        isSelect: !1,
        folderList: void 0,
        initialize: function() {
            this.folderList = this.collection,
                this.listenTo(this.folderList, EventType.loadFile, this.onLoadFiles),
                this.listenTo(this.folderList, EventType.addFolderNodes, this.onAddFolderNodes),
                this.listenTo(this.folderList, EventType.newFile, this.addFolderNode),
                this.listenTo(this.folderList, EventType.removeFile, this.removeNode),
                this.listenTo(model.messageEvent, EventType.selectPerTree, this.notSelectEntTree),
                this.listenTo(model.messageEvent, EventType.selectFileTreeBottom, this.notSelectEntTree),
                this.render()
        },
        render: function() {
            this.$el.html("");
            var e = this;
            return this.zTree = $.fn.zTree.init(this.$el, {
                    view: {
                        dblClickExpand: !0,
                        showLine: !1,
                        selectedMulti: !1
                    },
                    data: {
                        simpleData: {
                            enable: !0,
                            idKey: "fileId",
                            pIdKey: "parentId",
                            rootPId: ""
                        },
                        keep: {
                            parent: !0
                        }
                    },
                    callback: {
                        beforeExpand: function(t, i) {
                            return e.$el.find("#" + i.tId + "_a").click(), !1
                        },
                        onClick: function(t, i, r) {
                            e.trigger(EventType.selectEntTree, e.folderList.get(r.fileId));
                            var o = e.folderList.get(r.fileId);
                            return e.trigger(EventType.selectFolder, o || model.rootEntFolder),
                                $(t.target).is("a") && e.zTree.expandNode(r, !r.open),
                                e.isSelect = !0, !1
                        },
                        beforeRename: this.beforeRename()
                    }
                }, []),
                this.addFolderNode(model.rootEntFolder),
                this
        },
        close: function() {
            this.undelegateEvents(),
                this.remove(),
                $.fn.zTree.destroy(this.id)
        },
        rebind: function() {
            this.initialize(),
                this.delegateEvents()
        },
        onLoadFiles: function(e, t) {
            var i = _.filter(e, function(e) {
                    return e.isFolder()
                }),
                r = this.zTree.getNodeByParam("fileId", t.id);
            if (!r && (this.addFolderNode(t),
                    r = this.zTree.getNodeByParam("fileId", t.id), !r))
                return log.info("[EntFolderTree] > [onLoadFiles] parentNode is not exist and cann't insert to ztree for folder:  ", t), !1;
            var o = _.pluck(this.zTree.getNodesByParam("parentId", t.id, r), "fileId"),
                d = _.map(i, function(e) {
                    return e.id
                }),
                n = _.without(d, o),
                s = _.without(o, d);
            this.doAddNodes(_.filter(i, function(e) {
                    return _.contains(n, e.id)
                }), r),
                _.each(s, function(e) {
                    this.zTree.removeNode(this.zTree.getNodeByParam("fileId", e, r))
                }, this),
                this.trigger(EventType.addFolderNode)
        },
        addFolderNode: function(e, t) {
            if (!e.isFolder() || this.zTree.getNodeByParam("fileId", e.get("fileId")))
                return !1;
            t && this.doAddNode(e, t);
            var i = e.get("parentId"),
                t = i ? this.zTree.getNodeByParam("fileId", i) : null;
            return i && "entRoot" !== i && !t ? !1 : void this.doAddNode(e, t)
        },
        onAddFolderNodes: function(e) {
            _.each(e, function(e) {
                this.addFolderNode(e)
            }, this)
        },
        doAddNode: function(e, t) {
            return this.zTree.addNodes(t, {
                fileId: e.get("fileId"),
                parentId: e.get("parentId") || 0,
                name: e.get("name"),
                open: !1,
                isParent: !0,
                iconSkin: "folder"
            }, !0)
        },
        doAddNodes: function(e, t) {
            this.zTree.addNodes(t, _.map(e, function(e) {
                return {
                    fileId: e.get("fileId"),
                    parentId: e.get("parentId") || 0,
                    name: e.get("name"),
                    open: !1,
                    isParent: !0,
                    iconSkin: "folder"
                }
            }, this), !0)
        },
        removeNode: function(e) {
            var t = _.isArray(e) ? e : [e];
            _.each(t, function(e) {
                e.isFolder() && this.zTree.removeNode(this.zTree.getNodeByParam("fileId", e.id))
            }, this)
        },
        removeChildNodes: function(e) {
            var t = this.zTree.getNodeByParam("fileId", e);
            t && this.zTree.removeChildNodes(t)
        },
        getSelectFolder: function() {
            var e = this.zTree.getSelectedNodes();
            if (!e.length)
                return null;
            var t = this.folderList.get(e[0].fileId);
            return t || model.rootEntFolder
        },
        showAddFolderView: function(e) {
            this.folderList.unshift(e);
            var t = this.zTree.getNodeByParam("fileId", e.get("parentId")),
                i = this.doAddNode(e, t);
            this.zTree.editName(i[0]),
                this.placeHold(i[0])
        },
        showOnlyFolder: function(e) {
            var t = this.folderList.filter(function(t) {
                    return "entRoot" !== t.id && !_.contains(e, t.id)
                }),
                i = _.map(t, function(e) {
                    return this.zTree.getNodeByParam("fileId", e.id)
                }, this);
            this.zTree.hideNodes(_.compact(i))
        },
        placeHold: function(e) {
            this.$el.find("#" + e.tId + "_input").val(""),
                this.$el.find("#" + e.tId + "_input").attr("placeholder", msgs.msgNewDept)
        },
        showRenameView: function(e) {
            var t = this.zTree.getNodeByParam("fileId", e.id);
            t ? (t.oldName = t.name,
                this.zTree.editName(t)) : noty.alert(msgs.msgFolderNoExist)
        },
        beforeRename: function() {
            var e = this;
            return function(t, i, r) {
                return r && $.trim(r) ? ("new" == i.fileId ? e.submitNewFolder(t, i, r) : e.submitRenameFolder(t, i, r), !0) : (noty.alert(msgs.msgFolderNameNull),
                    "new" == i.fileId ? e.zTree.removeNode(i) : e.zTree.cancelEditName(), !1)
            }
        },
        submitRenameFolder: function(e, t, i) {
            if (t.oldName == i)
                return !0;
            var r = this,
                o = this.folderList.get(t.fileId);
            o.set("name", i),
                o.rename(function(e) {
                    if (constants.isResponseOK(e))
                        o.reload(),
                        noty.success(msgs.msgRenameOK);
                    else {
                        var i;
                        i = e === ErrorType.errorSameFolder ? msgs.msgFolderNameConfict : msgs.msgRenameFail,
                            noty.confirm(i, function(e) {
                                e ? (t.name = t.oldName,
                                    r.showRenameView(r.getSelectFolder())) : (t.name = t.oldName,
                                    r.showRenameView(r.getSelectFolder()),
                                    r.zTree.cancelEditName())
                            })
                    }
                })
        },
        submitNewFolder: function(e, t, i) {
            var r = this,
                o = this.folderList.get(t.fileId),
                d = this.folderList.get(t.parentId);
            o.set("name", i),
                o.createFolder(function(e) {
                    if (constants.isResponseError(e)) {
                        var i;
                        i = e === ErrorType.errorSameFolder ? msgs.msgFolderMoveNameConflict : e === ErrorType.errorFolderDeleted ? msgs.msgParentFolderDeleted : msgs.msgCreateFail,
                            noty.confirm(i, function(e) {
                                e ? (t.name = t.oldName,
                                    r.showRenameView(r.getSelectFolder())) : (t.name = t.oldName,
                                    r.showRenameView(r.getSelectFolder()))
                            })
                    } else
                        o.set("fileId", e.folderId),
                        d.set("version", e.version),
                        o.reload(),
                        t.fileId = e.folderId,
                        noty.alert(msgs.msgAddSucc)
                })
        },
        deleteSelectNode: function() {
            var e = this,
                t = this.zTree.getSelectedNodes();
            if (t.length) {
                var i = this.folderList.get(t[0].fileId);
                resturl.deleteEntFolderToRecycle(i.asFileParam(), {
                    timeout: 6e4
                }, function(r) {
                    switch (r) {
                        case ErrorType.OK_MARK:
                            noty.success(msgs.msgDelSucc),
                                e.zTree.removeNode(t[0]),
                                e.folderList.remove(i);
                            break;
                        case ErrorType.errorEditSysFolder:
                            noty.error(msgs.msgSysDelForbidden);
                            break;
                        case ErrorType.error500:
                            noty.error(msgs.msgServerError);
                            break;
                        default:
                            noty.error(msgs.msgDeleteFail)
                    }
                })
            }
        },
        onMoveFiles: function(e, t) {
            var i = this.zTree.getNodeByParam("fileId", e.get("fileId"));
            _.each(t, function(e) {
                if (e.isFolder()) {
                    var t = this.zTree.getNodeByParam("fileId", e.get("fileId"));
                    this.zTree.moveNode(i, t, "inner")
                }
            }, this)
        },
        notSelectEntTree: function() {
            this.isSelect && (this.$el.find("a.curSelectedNode").removeClass("curSelectedNode"),
                this.isSelect = !1)
        },
        secAdminFolderFilter: function() {
            return model.currentUser.isAdmin() ? !0 : void(model.adminPermission.get("folderIds") && model.adminPermission.get("folderIds").length && this.showOnlyFolder(model.adminPermission.get("folderIds")))
        }
    })
});;
define("app/commons/uikit/file/FileBreadItem", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "li",
        template: '<span class="divider">/</span><a href="<%=route%>" name="file-name" title="<%=name%>"><%=name%></a>',
        entRootTemplate: '<a href="<%=route%>" name="file-name" title="<%=name%>"><i class="icon-custom-ent-root"></i></a>',
        personRootTemplate: '<a href="<%=route%>" name="file-name" title="<%=name%>"><i class="icon-custom-person-root"></i></a>',
        initialize: function() {
            this.render()
        },
        render: function() {
            var e = this.template;
            switch (this.model.get("name")) {
                case msgs.msg878:
                    e = this.entRootTemplate;
                    break;
                case msgs.msg879:
                    e = this.personRootTemplate
            }
            return this.$el.html(_.template(e, {
                    route: this.model.get("route"),
                    name: this.model.get("name")
                })),
                this
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/file/FileUploadItem", function(require, e, i) {
    i.exports = window.FileUploadItem = Backbone.View.extend({
        tagName: "li",
        _modelBinder: void 0,
        events: {
            "click a.file-del": "cancelUpload"
        },
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder,
                this.render()
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, i, l, t, n) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                    l = this.merge(l, e.helpers),
                    n = n || {},
                    '<ul class="upload-file-item"><li name="file-name" class="text-overflow"></li><li name="file-size" class="text-overflow"></li><li class="text-overflow"><a class="file-del" href="###"><%=msg156%></a></li></ul>'
            })));
            var e = {
                name: "[name=file-name]",
                size: {
                    selector: "[name=file-size]",
                    converter: this.setSize
                },
                status: {
                    selector: "[class=upload-file-item]",
                    elAttribute: "class",
                    converter: this.isShow
                }
            };
            return this._modelBinder.bind(this.model, this.el, e),
                this
        },
        setSize: function(e, i) {
            return "ModelToView" === e ? (i /= 1024,
                i = i / 1024 >= 1 ? Math.round(i / 1024 * 100) / 100 + "M" : Math.ceil(i) + "KB") : void 0
        },
        isShow: function(e, i) {
            return "ModelToView" === e ? "wait" == i ? "" : "hide" : void 0
        },
        cancelUpload: function() {
            this.collection.remove(this.model)
        },
        close: function() {
            this._modelBinder.unbind(),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/file/PersonFolderSelectTree", function(require, e, t) {
    t.exports = window.PersonFolderSelectTree = Backbone.View.extend({
        tagName: "ul",
        className: "ztree personFolderSelectTree folder-tree",
        id: "personFolderSelectTree",
        zTree: void 0,
        settingObj: void 0,
        initialize: function() {
            this.listenTo(this.collection, EventType.loadFile, this.onLoadFiles),
                this.settingObj = this.options.settingObj,
                this.render()
        },
        render: function() {
            this.$el.html("");
            var e = this;
            if (this.initSetting(),
                this.zTree = $.fn.zTree.init(this.$el, {
                    view: {
                        dblClickExpand: !0,
                        showLine: !1,
                        selectedMulti: !1
                    },
                    check: {
                        enable: !!this.settingObj.showCheckBox,
                        chkboxType: this.settingObj.chkboxType
                    },
                    data: {
                        simpleData: {
                            enable: !0,
                            idKey: "fileId",
                            pIdKey: "parentId",
                            rootPId: ""
                        }
                    },
                    callback: {
                        beforeClick: function(t, i) {
                            return i.open ? (e.zTree.expandNode(i, !1), !1) : (e.onBeforeExpand()(t, i),
                                e.zTree.expandNode(i), !0)
                        },
                        beforeExpand: this.onBeforeExpand()
                    }
                }, []),
                this.addFolderNode(model.rootPersonFolder),
                this.settingObj.showCheckBox) {
                var t = this.zTree.getNodeByParam("fileId", model.rootPersonFolder.get("fileId"));
                this.zTree.setChkDisabled(t, !0)
            }
            return this
        },
        hasParentSonRelated: function() {
            return !this.settingObj.chkboxType == {
                Y: "",
                N: ""
            }
        },
        initSetting: function() {
            this.settingObj || (this.settingObj = {}),
                void 0 == this.settingObj.chkboxType && (this.settingObj.chkboxType = {
                    Y: "s",
                    N: "ps"
                }),
                this.$el.toggleClass("p-s-no-related", !this.hasParentSonRelated())
        },
        onLoadFiles: function(e, t) {
            var i = _.filter(e, function(e) {
                return e.isFolder()
            });
            i.length && _.each(i, this.addFolderNode, this);
            var o = this.zTree.getNodeByParam("fileId", t.id);
            o && !o.open && this.zTree.expandNode(o)
        },
        showDialog: function(e) {
            var t = this;
            $.dialog({
                title: msgs.msg77,
                content: this.el,
                max: !1,
                min: !1,
                width: 200,
                height: 320,
                init: function() {
                    t.render(),
                        t.delegateEvents()
                },
                ok: e,
                cancelVal: msgs.msg141,
                cancel: !0
            })
        },
        clean: function() {
            this.zTree.cancelSelectedNode()
        },
        onBeforeExpand: function() {
            var e = this;
            return function(t, i) {
                e.collection.fetchFolder(i.fileId)
            }
        },
        getSelectedFolder: function() {
            var e = this.getSelectedFolders();
            return e && e[0]
        },
        getSelectedFolders: function() {
            var e = this,
                t = _.map(this.zTree.getSelectedNodes(), function(t) {
                    return constants.isRootFolder(t.fileId) ? model.rootPersonFolder : e.collection.get(t.fileId)
                });
            return t
        },
        addFolderNode: function(e) {
            if (!e.isFolder() || this.zTree.getNodeByParam("fileId", e.get("fileId")))
                return !1;
            var t = e.get("parentId"),
                i = t ? this.zTree.getNodeByParam("fileId", t) : null,
                o = {
                    fileId: e.get("fileId"),
                    parentId: e.get("parentId") || 0,
                    name: e.get("name"),
                    open: !1,
                    isParent: !0,
                    iconSkin: "folder"
                };
            this.zTree.addNodes(i, o, !0),
                this.settingObj.chkboxType.Y && this.settingObj.chkboxType.Y.indexOf("s") && i && i.getCheckStatus() && i.getCheckStatus().checked && this.zTree.checkNode(i, !0, !0)
        },
        showCheckbox: function(e) {
            this.zTree.setting.check.enable = e
        },
        getCheckFolders: function(e) {
            var t = this,
                i = _.map(this.zTree.getCheckedNodes(e), function(e) {
                    return constants.isRootFolder(e.fileId) ? model.rootPersonFolder : t.collection.get(e.fileId)
                });
            return i
        },
        getFullCheckedFolders: function() {
            var e = this,
                t = _.filter(this.zTree.getCheckedNodes(!0), function(t) {
                    var i = e.zTree.getNodeByTId(t.tId);
                    return i && !i.getCheckStatus().half
                }),
                i = _.map(t, function(t) {
                    return constants.isRootFolder(t.fileId) ? model.rootPersonFolder : e.collection.get(t.fileId)
                });
            return i
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/file/FolderTreeModal", function(require, e, t) {
    var s = require("app/commons/uikit/file/EntFolderSelectTree"),
        i = require("app/commons/uikit/file/PersonFolderSelectTree"),
        o = require("app/commons/models/file/FolderList");
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "folderTreeModal",
        folderSelectTree: void 0,
        rootFolder: void 0,
        passInfo: void 0,
        folderList: void 0,
        events: {
            "click .ok-folders-select-btn": "confirmSelect",
            "click .cancel-folders-select-btn": "cancelSelect"
        },
        initialize: function() {
            this.settingObj = this.options.settingObj,
                this.passInfo = this.options.passInfo,
                this.render()
        },
        render: function() {
            return this.initSettingObj(),
                this.folderList = new o,
                this.$el.html(__html(Handlebars.template(function(e, t, s, i, o) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        s = this.merge(s, e.helpers),
                        o = o || {};
                    var n, l, a = "",
                        r = "function",
                        d = this.escapeExpression;
                    return a += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-header-title"><span class="modal-header-icon"><i class="', (l = s.headerIcon) ? n = l.call(t, {
                            hash: {},
                            data: o
                        }) : (l = t && t.headerIcon,
                            n = typeof l === r ? l.call(t, {
                                hash: {},
                                data: o
                            }) : l),
                        a += d(n) + '"></i></span><span>', (l = s.headerText) ? n = l.call(t, {
                            hash: {},
                            data: o
                        }) : (l = t && t.headerText,
                            n = typeof l === r ? l.call(t, {
                                hash: {},
                                data: o
                            }) : l),
                        a += d(n) + '</span></h3></div><div class="modal-body"><div class="folders-tree common-box" style="border:0;margin-left:15px;"></div></div><div class="modal-footer"><span class="btn ok-folders-select-btn btn-blue">', (l = s.okBtnText) ? n = l.call(t, {
                            hash: {},
                            data: o
                        }) : (l = t && t.okBtnText,
                            n = typeof l === r ? l.call(t, {
                                hash: {},
                                data: o
                            }) : l),
                        a += d(n) + '</span><span class="btn cancel-folders-select-btn btn-white-blue">', (l = s.cancelBtnText) ? n = l.call(t, {
                            hash: {},
                            data: o
                        }) : (l = t && t.cancelBtnText,
                            n = typeof l === r ? l.call(t, {
                                hash: {},
                                data: o
                            }) : l),
                        a += d(n) + "</span></div>"
                }), this.settingObj)),
                this.settingObj.isEntDisk ? (this.folderList.fileType = constants.fileType.shareDisk,
                    this.rootFolder = model.rootEntFolder) : (this.folderList.fileType = constants.fileType.onlineDisk,
                    this.rootFolder = model.rootPersonFolder),
                this.folderList.add(this.rootFolder),
                this.settingObj.showManageFolder ? this.folderList.fetchAdminFolders(this.rootFolder.id) : this.folderList.fetchFolder(this.rootFolder.id, this.folderList.fileType),
                this.folderSelectTree = this.settingObj.isEntDisk ? new s({
                    collection: this.folderList,
                    settingObj: this.settingObj
                }) : new i({
                    collection: this.folderList,
                    settingObj: this.settingObj
                }),
                this.$el.find(".folders-tree").append(this.folderSelectTree.el),
                this
        },
        initSettingObj: function() {
            !this.settingObj && (this.settingObj = {}),
                _.defaults(this.settingObj, {
                    isEntDisk: !0,
                    fullChecked: !1,
                    fatherOnly: !1,
                    showPath: !1,
                    headerIcon: this.settingObj.isEntDisk ? "icon-custom-ent-nav-white" : "icon-custom-person-nav-white",
                    headerText: this.settingObj.isEntDisk ? msgs.msgEntFolder : msgs.msgPersonFolder,
                    okBtnIcon: "btn-ok-icon",
                    okBtnText: msgs.msg86,
                    cancelBtnIcon: "btn-cancel-icon",
                    cancelBtnText: msgs.msg87
                })
        },
        confirmSelect: function() {
            var e, t;
            if (e = this.folderSelectTree.getSelectedFolder(),
                t = this.settingObj.fullChecked ? this.folderSelectTree.getFullCheckedFolders() : this.folderSelectTree.getCheckFolders(!0),
                this.settingObj.fatherOnly) {
                var s = t;
                t = [];
                for (var i in s) {
                    var o = !1;
                    for (var n in s)
                        if (s[i].get("parentId") == s[n].id) {
                            o = !0;
                            break
                        }
                    o || t.push(s[i])
                }
            }
            this.settingObj.showPath && t && t.length && _.each(t, function(e) {
                    e.set("folderPath", e.get("path"))
                }),
                this.settingObj.showPath && !this.settingObj.showCheckBox && e && folder.set("folderPath", folder.get("path"));
            var l = {
                destFolder: e,
                destFolders: t,
                passInfo: this.passInfo
            };
            this.trigger(EventType.selectFolders, l)
        },
        setPath: function(e, t) {
            var s = this.folderList.get(t.get("parentId"));
            return s && (e = s.get("name") + "/" + e,
                    e = this.setPath(e, s)),
                e
        },
        cancelSelect: function() {
            this.trigger(EventType.cancelSelectFolders)
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/file/FolderTreeWindow", function(require, e, i) {
    var o = require("app/commons/uikit/file/FolderTreeModal");
    i.exports = Backbone.View.extend({
        tagName: "div",
        id: "folderTreeWindow",
        className: "modal fade hide modal-window",
        folderTreeModal: void 0,
        settingObj: void 0,
        passInfo: void 0,
        initialize: function() {
            this.settingObj = this.options.settingObj,
                this.passInfo = this.options.passInfo,
                this.render()
        },
        render: function() {
            return this.folderTreeModal = new o({
                    settingObj: this.settingObj,
                    passInfo: this.passInfo
                }),
                this.$el.append(this.folderTreeModal.el),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this
        },
        close: function() {
            this.$el.modal("hide"),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/file/MultiFileDownloadView", function(require, i, e) {
    e.exports = Backbone.View.extend({
        tagName: "div",
        id: "multiFileDownloadView",
        className: "modal modal-window fade hide multiFileDownloadView",
        $downloadBtn: void 0,
        $zipTip: void 0,
        $loadingView: void 0,
        downloadCallback: void 0,
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(i, e, s, o, t) {
                    return this.compilerInfo = [4, ">= 1.0.0"],
                        s = this.merge(s, i.helpers),
                        t = t || {},
                        '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3><%=msg534%></h3></div><div class="modal-body old-modal"><div class="download-tips"><img class="loading-img" src="/wt/assets/img/common/loading.gif" width="31" height="31"/><label id="zip-tip"><%=msg535%>, <%=msg536%>!</label></div></div><div class="modal-footer"><a class="btn btn-blue disabled" id="downloadBtn" data-loading-text="<%=msg473%>" autocomplete="off" href="###"><%=msg538%></a><a href="#" class="btn btn-white-blue" data-dismiss="modal"><%=msg539%></a></div>'
                }))),
                this.$zipTip = this.$el.find("#zip-tip"),
                this.$downloadBtn = this.$el.find("#downloadBtn"),
                this.$loadingView = this.$el.find(".loading-img"),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this.zipFiles(),
                this
        },
        zipFiles: function() {
            var i = this;
            this.model.zipMultiFiles(function(e) {
                i.$loadingView.hide(),
                    constants.isResError(e) ? i._showCompressError(e) : i._onCompressComplete(e)
            })
        },
        _onCompressComplete: function(i) {
            var e = this;
            e.model.set("path", i),
                e.$zipTip.text(msgs.msgCompressComplete),
                e.webDownload()
        },
        _showCompressError: function(i) {
            var e = this;
            switch (e.$downloadBtn.addClass("hide"),
                i) {
                case ErrorType.errorNoPermission:
                    e.$zipTip.text(msgs.msgOpenAttNoPermission);
                    break;
                case ErrorType.errorZipTaskRunning:
                    e.$zipTip.text(msgs.msgDownloadOnCompressing);
                    break;
                case ErrorType.errorFileIsZipping:
                    e.$zipTip.text(msgs.msgDownloadOnLargeCompressing);
                    break;
                case ErrorType.errorZipNoFiles:
                    e.$zipTip.text(msgs.msgZipNotFiles);
                    break;
                case ErrorType.errorZipMaxSize:
                    e.$zipTip.text(msgs.msgZipMaxSize);
                    break;
                default:
                    e.$zipTip.text(msgs.msgCompressFail)
            }
        },
        webDownload: function() {
            var i = this;
            this.$downloadBtn.removeClass("disabled").text(msgs.msg259).attr("href", this.model.getDownloadUrl()).attr("target", "_blank"),
                this.$downloadBtn.click(function() {
                    return i.downloadCallback && i.downloadCallback(),
                        i.close(), !0
                })
        },
        close: function() {
            this.$el.modal("hide"),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/file/PersonFolderTree", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "ul",
        id: "personFolderTree",
        className: "ztree",
        isSelect: !1,
        folderList: void 0,
        initialize: function() {
            this.folderList = this.collection,
                this.listenTo(this.folderList, EventType.loadFile, this.onLoadFiles),
                this.listenTo(this.folderList, EventType.newFile, this.addFolderNode),
                this.listenTo(this.folderList, EventType.removeFile, this.removeNode),
                this.listenTo(this.folderList, EventType.moveFiles, this.onMoveFiles),
                this.listenTo(model.messageEvent, EventType.selectEntTree, this.notSelectPerTree),
                this.listenTo(model.messageEvent, EventType.selectFileTreeBottom, this.notSelectPerTree),
                this.render()
        },
        render: function() {
            this.$el.html("");
            var e = this;
            return this.zTree = $.fn.zTree.init(this.$el, {
                    view: {
                        dblClickExpand: !1,
                        showLine: !1,
                        selectedMulti: !1
                    },
                    data: {
                        simpleData: {
                            enable: !0,
                            idKey: "fileId",
                            pIdKey: "parentId",
                            rootPId: ""
                        }
                    },
                    callback: {
                        beforeExpand: function(t, i) {
                            return e.$el.find("#" + i.tId + "_a").click(), !1
                        },
                        onClick: function(t, i, o) {
                            model.messageEvent.trigger(EventType.selectPerTree, e.folderList.get(o.fileId));
                            var d = e.folderList.get(o.fileId);
                            return e.trigger(EventType.selectFolder, d || model.rootPersonFolder),
                                $(t.target).is("a") && e.zTree.expandNode(o, !o.open),
                                e.isSelect = !0, !1
                        }
                    }
                }, []),
                this.addFolderNode(model.rootPersonFolder),
                this
        },
        close: function() {
            this.undelegateEvents(),
                this.remove(),
                $.fn.zTree.destroy(this.id)
        },
        getSelectFolder: function() {
            var e = this.zTree.getSelectedNodes();
            return e.length ? this.folderList.get(e[0].fileId) : null
        },
        rebind: function() {
            this.initialize(),
                this.delegateEvents()
        },
        addFolderNode: function(e, t) {
            if (!e.isFolder() || this.zTree.getNodeByParam("fileId", e.get("fileId")))
                return !1;
            t && this.doAddNode(e, t);
            var i = e.get("parentId"),
                t = i ? this.zTree.getNodeByParam("fileId", i) : null;
            return i && "personRoot" !== i && !t ? !1 : void this.doAddNode(e, t)
        },
        doAddNode: function(e, t) {
            this.zTree.addNodes(t, {
                fileId: e.get("fileId"),
                parentId: e.get("parentId") || 0,
                name: e.get("name"),
                open: !1,
                isParent: !0,
                iconSkin: "folder"
            }, !0)
        },
        doAddNodes: function(e, t) {
            this.zTree.addNodes(t, _.map(e, function(e) {
                return {
                    fileId: e.get("fileId"),
                    parentId: e.get("parentId") || 0,
                    name: e.get("name"),
                    open: !1,
                    isParent: !0,
                    iconSkin: "folder"
                }
            }, this), !0)
        },
        removeNode: function(e) {
            var t = _.isArray(e) ? e : [e];
            _.each(t, function(e) {
                e.isFolder() && this.zTree.removeNode(this.zTree.getNodeByParam("fileId", e.get("fileId")))
            }, this)
        },
        onLoadFiles: function(e, t) {
            var i = _.filter(e, function(e) {
                    return e.isFolder()
                }),
                o = this.zTree.getNodeByParam("fileId", t.id),
                d = _.pluck(this.zTree.getNodesByParam("parentId", t.id, o), "fileId"),
                n = _.map(i, function(e) {
                    return e.id
                }),
                r = _.without(n, d),
                s = _.without(d, n);
            this.doAddNodes(_.filter(i, function(e) {
                    return _.contains(r, e.id)
                }), o),
                _.each(s, function(e) {
                    this.zTree.removeNode(this.zTree.getNodeByParam("fileId", e, o))
                }, this)
        },
        onMoveFiles: function(e, t) {
            var i = this.zTree.getNodeByParam("fileId", e.get("fileId"));
            _.each(t, function(e) {
                if (e.isFolder()) {
                    var t = this.zTree.getNodeByParam("fileId", e.get("fileId"));
                    this.zTree.moveNode(i, t, "inner")
                }
            }, this)
        },
        notSelectPerTree: function() {
            this.isSelect && (this.$el.find("a.curSelectedNode").removeClass("curSelectedNode"),
                this.isSelect = !1)
        }
    })
});;
define("app/commons/uikit/user/ContactSelectTree2", function(require, e, t) {
    var i = require("app/commons/models/user/DepartmentListDTO"),
        s = require("app/commons/models/user/UserListDTO");
    t.exports = Backbone.View.extend({
        tagName: "ul",
        id: "contactSelectTree",
        className: "contactSelectTree ztree user-tree overflow-auto",
        zTree: void 0,
        hideNodes: [],
        departmentList: void 0,
        userList: void 0,
        settingObj: void 0,
        initialize: function() {
            this.settingObj = this.options.settingObj,
                this.initSettingObj(),
                this.departmentList = new i,
                this.settingObj.fetchManageDept ? this.departmentList.fetchManageDept(!1) : this.departmentList.getDeptList(),
                this.userList = new s,
                this.listenTo(this.departmentList, EventType.loadDepartment, this.addDepartmentNodes),
                this.listenTo(this.userList, EventType.addUserEvent, this.onAddUser),
                this.render()
        },
        render: function() {
            this.$el.html(" "),
                this.onChangeHeight();
            var e = this;
            this.zTree = $.fn.zTree.init(this.$el, {
                    view: {
                        dblClickExpand: !1,
                        showLine: !1,
                        selectedMulti: !1,
                        addDiyDom: function(t, i) {
                            e.showAvatar(i, e),
                                e.settingObj && e.settingObj.showDeptDiyBtn && e.showAddDeptUsersBtn(i, e)
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
                        beforeExpand: function(t, i) {
                            i && "department" === i.type && e._expandDept(i.id)
                        },
                        beforeClick: function(t, i) {
                            if (e.zTree.expandNode(i),
                                "user" === i.type) {
                                var s = e.userList.get(i.id);
                                e.settingObj.showPath && !s.get("deptPath") && s.set("deptPath", e.departmentList.getDeptPath(s.get("deptId"))),
                                    e.trigger(EventType.selectUser, s)
                            }
                            if ("department" === i.type) {
                                e._expandDept(i.id);
                                var n = e.departmentList.get(i.id);
                                e.settingObj.showPath && !n.get("deptPath") && n.set("deptPath", e.departmentList.getDeptPath(n.id)),
                                    e.trigger(EventType.selectDept, n)
                            }
                            return !0
                        },
                        onCheck: function(t, i, s) {
                            return "user" === s.type && e.trigger(EventType.checkUser, e.userList.get(s.id), s.checked),
                                "department" === s.type && e.trigger(EventType.checkDept, e.departmentList.get(s.id), s.checked), !0
                        },
                        onNodeCreated: function(t, i, s) {
                            var n = "#" + s.tId + "_a";
                            e.$el.find(n).addClass(s.type);
                            var d = "#" + s.tId + "_check";
                            if (e.$el.find(d).attr("name", s.type + "_chk"),
                                "user" == s.type && e.settingObj.hideAdmins) {
                                var r = e.userList.get(s.id);
                                (r.isAdmin() || r.isSecAdmin()) && e.zTree.hideNode(s)
                            }
                        }
                    }
                }, []),
                setTimeout(function() {
                    e.departmentList.length && e.addDepartmentNodes(e.departmentList)
                }, 100)
        },
        initSettingObj: function() {
            this.settingObj || (this.settingObj = {}),
                _.defaults(this.settingObj, {
                    hideAdmins: !1,
                    fetchManageDept: !0
                })
        },
        showAvatar: function(e, t) {
            if ("user" === e.type) {
                var i = t.userList.get(e.id),
                    s = t.$el.find("#" + e.tId + "_a .button"),
                    n = i.get("icon") || constants.defaultIcon,
                    d = "<img alt='avatar' src='" + n + "' >";
                s.append(d)
            }
        },
        showAddDeptUsersBtn: function(e, t) {
            if ("user" != e.type) {
                var i = t.$el.find("#" + e.tId + "_a"),
                    s = '<span class="add-dept-users"><i></i></span>';
                i.append(s),
                    i.find(".add-dept-users").bind("click", function() {
                        t.trigger(EventType.addDeptUsers, t.departmentList.get(e.id))
                    })
            }
        },
        close: function() {
            this.undelegateEvents(),
                this.remove()
        },
        rebind: function() {
            this.initialize(),
                this.delegateEvents()
        },
        onChangeHeight: function(e) {
            this.$el.height(e ? e : model.setting.getUsualContactTreeHeight() - 40)
        },
        reset: function() {
            this.zTree.checkAllNodes(!1)
        },
        hideUsers: function(e) {
            this.hideNodes && this.hideNodes.length && (this.zTree.showNodes(this.hideNodes),
                    this.hideNodes = []),
                _.each(e, function(e) {
                    var t = this.zTree.getNodeByParam("id", e);
                    t && (this.zTree.hideNode(t),
                        this.hideNodes.push(t))
                }, this)
        },
        showUsers: function() {
            var e = this.zTree.getNodesByParam("isHidden", !0);
            this.zTree.showNodes(e)
        },
        checkedUsers: function(e) {
            this.zTree.checkAllNodes(!1);
            var t = this;
            _.each(e, function(e) {
                var i = t.zTree.getNodeByParam("id", e.id);
                i && t.zTree.checkNode(i, !0)
            })
        },
        checkedUserIds: function(e) {
            var t = this;
            this.zTree.checkAllNodes(!1),
                _.each(e, function(e) {
                    var i = t.zTree.getNodeByParam("id", e);
                    i && t.zTree.checkNode(i, !0)
                })
        },
        getCheckUsers: function() {
            var e = this.zTree.getCheckedNodes(!0);
            return _.map(_.where(e, {
                type: "user"
            }), function(e) {
                return this.userList.get(e.id)
            }, this)
        },
        getCheckUserIds: function() {
            var e = this.zTree.getCheckedNodes(!0);
            return _.map(_.where(e, {
                type: "user"
            }), function(e) {
                return e.id
            })
        },
        getCheckedDepartIds: function() {
            var e = this.zTree.getCheckedNodes(!0);
            return e.length ? _.map(_.where(e, {
                type: "department"
            }), function(e) {
                return e.id
            }) : []
        },
        getSelectUserId: function() {
            var e = this.zTree.getSelectedNodes();
            return e.length && "user" === e[0].type ? e[0].id : null
        },
        getSelectDeptId: function() {
            var e = this.zTree.getSelectedNodes();
            return e.length && "department" === e[0].type ? e[0].id : null
        },
        getSelectUser: function() {
            return this.userList.get(this.getSelectUserId())
        },
        showCheckbox: function(e) {
            this.zTree.setting.check.enable = e
        },
        isCheckbox: function() {
            return this.zTree.setting.check.enable
        },
        addDepartmentNodes: function(e) {
            if (e.each(function(t) {
                    this._addDepartmentNode(e, t)
                }, this),
                this.settingObj.selectDeptId) {
                var t = this.zTree.getNodeByParam("id", this.settingObj.selectDeptId);
                t && (this.zTree.selectNode(t, !1),
                    this.zTree.expandNode(t, !0, !1, !0, !0))
            }
        },
        _addDepartmentNode: function(e, t) {
            if (t) {
                var i = this.zTree.getNodeByParam("id", t.id);
                if (i)
                    return i;
                var s = null;
                t.get("parentId") && (s = this.zTree.getNodeByParam("id", t.get("parentId")),
                    s || (s = this._addDepartmentNode(e, e.get(t.get("parentId")))));
                var n = this.zTree.addNodes(s, {
                    id: t.get("departmentId"),
                    parentId: t.get("parentId") || 0,
                    name: t.get("name"),
                    open: !1,
                    type: "department",
                    isParent: !0
                }, !0);
                return this.addUserNodes(this.userList.where({
                        deptId: t.get("departmentId")
                    })),
                    n[0]
            }
        },
        addUserNodes: function(e) {
            _.each(e, function(e) {
                this.addUserNode(e, !0)
            }, this)
        },
        onAddUser: function(e) {
            this.addUserNode(e, !1)
        },
        addUserNode: function(e, t) {
            var i = e.get("deptId") ? this.zTree.getNodeByParam("id", e.get("deptId")) : null;
            this.zTree.addNodes(i, {
                id: e.get("userId"),
                parentId: e.get("deptId") || 0,
                name: e.get("nameAccount") || e.get("userName"),
                open: !1,
                type: "user",
                isParent: !1,
                iconSkin: "user_avatar"
            }, t)
        },
        _expandDept: function(e) {
            var t = this,
                i = this.userList.findWhere({
                    deptId: e
                });
            i || this.userList.fetchDeptUsers(e, function(e) {
                t.userList.add(e),
                    t.addUserNodes(e)
            })
        }
    })
});;
define("app/commons/uikit/user/SearchUsersView", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "ul",
        id: "searchUsers",
        className: "overflow-auto-y search-list",
        collectionBinder: void 0,
        settingObj: void 0,
        events: {
            "click li": "selectUser"
        },
        initialize: function() {
            this.collection = new UserListDTO,
                this.settingObj = this.options.settingObj;
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e),
                this.initSettingObj(),
                this.render()
        },
        render: function() {
            return this.$el.append('<li class="empty-table-tip hide-force">' + msgs.msgTableEmpty + "</li>"),
                this.collectionBinder.bind(this.collection, this.$el),
                this
        },
        _addListeners: function() {
            this.listenTo(this.collection, "reset add remove", this._onChangeCollection)
        },
        _onChangeCollection: function() {
            var e = this.$(".empty-table-tip");
            e.toggleClass("hide-force", this.collection.length > 0)
        },
        initSettingObj: function() {
            this.settingObj || (this.settingObj = {}),
                _.defaults(this.settingObj, {
                    hideAdmins: !1,
                    isShowSelf: !1
                })
        },
        onChangeHeight: function(e) {
            this.$el.height(e ? e : model.setting.geDepartmentTreeHeight())
        },
        viewCreator: function(e) {
            return new i({
                model: e
            })
        },
        rebind: function() {
            this.delegateEvents(),
                this.collectionBinder.unbind(),
                this.collectionBinder.bind(collection.resultUserList, this.$el)
        },
        doSearch: function(e) {
            var t = this;
            this.collection.searchUsers(e, function(e) {
                t.collection.reset(e),
                    t._onChangeCollection()
            })
        },
        compareData: function(e, t) {
            return t && !e.get("nameAccount").match(t) ? !1 : e.get("userId") != cache.userId || this.settingObj.isShowSelf ? e.isAdminOrSecAdmin() && this.settingObj.hideAdmins ? !1 : !0 : !1
        },
        selectUser: function(e) {
            this.$el.find("li").removeClass("is-selected");
            var t = $(e.target),
                i = t.attr("userid");
            i ? t.parent().addClass("is-selected") : (i = $(e.target).find("div.user-info").attr("userid"),
                    t.addClass("is-selected")),
                i = parseInt(i),
                this.trigger(EventType.selectUser, this.collection.get(i))
        },
        close: function() {
            this.collectionBinder.unbind(),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    });
    var i = Backbone.View.extend({
        tagName: "li",
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, i, s, n) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        i = this.merge(i, e.helpers),
                        n = n || {};
                    var a, l, o = "",
                        r = "function",
                        c = this.escapeExpression;
                    return o += '<div class="user-info" userid="', (l = i.userId) ? a = l.call(t, {
                            hash: {},
                            data: n
                        }) : (l = t && t.userId,
                            a = typeof l === r ? l.call(t, {
                                hash: {},
                                data: n
                            }) : l),
                        o += c(a) + '">', (l = i.realName) ? a = l.call(t, {
                            hash: {},
                            data: n
                        }) : (l = t && t.realName,
                            a = typeof l === r ? l.call(t, {
                                hash: {},
                                data: n
                            }) : l),
                        o += c(a) + "(", (l = i.userName) ? a = l.call(t, {
                            hash: {},
                            data: n
                        }) : (l = t && t.userName,
                            a = typeof l === r ? l.call(t, {
                                hash: {},
                                data: n
                            }) : l),
                        o += c(a) + ')</div><div userid="', (l = i.userId) ? a = l.call(t, {
                            hash: {},
                            data: n
                        }) : (l = t && t.userId,
                            a = typeof l === r ? l.call(t, {
                                hash: {},
                                data: n
                            }) : l),
                        o += c(a) + '">', (l = i.deptName) ? a = l.call(t, {
                            hash: {},
                            data: n
                        }) : (l = t && t.deptName,
                            a = typeof l === r ? l.call(t, {
                                hash: {},
                                data: n
                            }) : l),
                        o += c(a) + "</div>"
                }), this.model.toJSON())),
                this.$el.attr("title", this.model.getDisplayName()),
                this
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/user/UsersSelectModal", function(require, e, s) {
    var t = "[UsersSelectModal]-",
        i = require("app/commons/models/user/UserListDTO"),
        n = require("app/commons/uikit/user/ContactSelectTree2"),
        a = require("app/commons/uikit/user/SearchUsersView");
    s.exports = Backbone.View.extend({
        tagName: "div",
        id: "usersSelectModal",
        collectionBinder: void 0,
        userTree: void 0,
        searchUsersView: void 0,
        settingObj: void 0,
        selectUsers: void 0,
        events: {
            "click .ok-users-select-btn": "addMember",
            "click .cancel-users-select-btn": "cancelAddMember",
            "click .btn-search": "searchDepartmentUser",
            "click div.cancel-search-btn span": "cancelSearchUser",
            "click div.clear-selected-users span": "clearSelectedUsers",
            "click .send-mail": "toggleSendMail"
        },
        initialize: function() {
            var e = this.options.selectedUserList;
            this.settingObj = this.initSettingObj(this.options.settingObj),
                this.selectUsers = new i(e ? e.models : []);
            var s = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator, this.selectUsers);
            this.collectionBinder = new Backbone.CollectionBinder(s),
                this._addListeners(),
                this.render()
        },
        _addListeners: function() {
            this.listenTo(this.selectUsers, "reset add remove", this._onChangeSelectedUser)
        },
        render: function() {
            var e = this;
            return this.$el.html(__html(Handlebars.template(function(e, s, t, i, n) {
                    function a() {
                        return " hide-force "
                    }
                    this.compilerInfo = [4, ">= 1.0.0"],
                        t = this.merge(t, e.helpers),
                        n = n || {};
                    var l, c, r = "",
                        o = "function",
                        h = this.escapeExpression,
                        d = this;
                    return r += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 class="modal-header-title"><span class="modal-header-icon"><i class="', (c = t.headerIcon) ? l = c.call(s, {
                            hash: {},
                            data: n
                        }) : (c = s && s.headerIcon,
                            l = typeof c === o ? c.call(s, {
                                hash: {},
                                data: n
                            }) : c),
                        r += h(l) + '"></i></span><span>', (c = t.headerText) ? l = c.call(s, {
                            hash: {},
                            data: n
                        }) : (c = s && s.headerText,
                            l = typeof c === o ? c.call(s, {
                                hash: {},
                                data: n
                            }) : c),
                        r += h(l) + '</span></h3></div><div class="modal-body old-modal"><div class="row-fluid"><div class="span5"><%=msg239%></div><div class="span2 offset1"><%=msg492%></div><div class="span3 hide-private"><span class="checkbox-sprite send-mail ',
                        l = t.unless.call(s, s && s.sendMail, {
                            hash: {},
                            inverse: d.noop,
                            fn: d.program(1, a, n),
                            data: n
                        }), (l || 0 === l) && (r += l),
                        r += '"></span>同时发送邮件通知</div></div><div class="row-fluid"><div class="span5 user-box common-box"><div class="input-append"><input type="text" placeholder="<%=msg540%>" name="keyword" class="input-medium"><a class="btn btn-search custom-btn"><div class="search-btn-border"></div><i class="icon-custom-search"></i></a></div><div id="userTreeModal"></div><div class="search-list cancel-search-btn"><span><%=msg242%></span></div></div><div class="span1" style="line-height:300px"><span class="arrows-right"></span></div><div class="span5 user-box common-box" id="selectUser"><ul class="overflow-auto-y select-users-list"></ul><ul class="empty-tips hide-private"><li>温馨提示:</li><li>1. 单击左侧需要添加的同事到右侧</li><li>2. 如需邮件通知, 请勾选\'同时发送邮件通知\'</li><li>3. 点击\'发送通知\'按钮, 文件上传完成后, 选择的同事将收到消息或邮件通知</li></ul><div class="clear-selected-users hide-force"><span><%=msg556%></span></div></div></div></div><div class="modal-footer"><span class="btn ok-users-select-btn btn-blue">', (c = t.okBtnText) ? l = c.call(s, {
                            hash: {},
                            data: n
                        }) : (c = s && s.okBtnText,
                            l = typeof c === o ? c.call(s, {
                                hash: {},
                                data: n
                            }) : c),
                        r += h(l) + '</span><span class="btn cancel-users-select-btn btn-white-blue">', (c = t.cancelBtnText) ? l = c.call(s, {
                            hash: {},
                            data: n
                        }) : (c = s && s.cancelBtnText,
                            l = typeof c === o ? c.call(s, {
                                hash: {},
                                data: n
                            }) : c),
                        r += h(l) + "</span></div>"
                }), this.settingObj)),
                this.$sendMail = this.$(".send-mail"),
                this.userTree = new n({
                    id: "usersSelectTreeModal",
                    settingObj: this.settingObj
                }),
                this.settingObj.isShowSelf || setTimeout(function() {
                    e.userTree.hideUsers([cache.userId])
                }, 100),
                this.userTree.onChangeHeight(269),
                this.userTree.on(EventType.selectUser, this.onSelectUser, this),
                this.userTree.on(EventType.addDeptUsers, this.addDepartmentUsers, this),
                this.$("#userTreeModal").html(this.userTree.el),
                this.collectionBinder.unbind(),
                this.collectionBinder.bind(this.selectUsers, this.$("ul.select-users-list")),
                this._onChangeSelectedUser(),
                this._bindEnter(),
                this
        },
        _onChangeSelectedUser: function() {
            log.debug(t, "change select users! length: ", this.selectUsers.length),
                this.$(".clear-selected-users").toggleClass("hide-force", 0 === this.selectUsers.length),
                this.$(".empty-tips").toggleClass("hide-force", this.selectUsers.length > 0)
        },
        initSettingObj: function(e) {
            return _.defaults(e || {}, {
                showDeptDiyBtn: !0,
                showPath: !1,
                headerIcon: "users-select-icon",
                headerText: msgs.msg239,
                okBtnIcon: "btn-ok-icon",
                okBtnText: msgs.msg86,
                cancelBtnIcon: "btn-cancel-icon",
                cancelBtnText: msgs.msg87,
                isShowSelf: !1,
                fetchManageDept: !1,
                canSelectSelf: !1,
                sendMail: !1
            })
        },
        viewCreator: function(e, s) {
            return new l({
                model: e,
                collection: s
            })
        },
        _bindEnter: function() {
            var e = this;
            this.$(".input-append input.input-medium").bind("keydown", "return", function(s) {
                return s.stopPropagation(),
                    s.preventDefault(),
                    e.searchDepartmentUser(), !1
            })
        },
        searchDepartmentUser: function() {
            var e = this.$(".input-append .input-medium").val();
            return e && 0 !== e.length ? (this.$("#usersSelectTreeModal").hide(),
                this.searchUsersView || (this.searchUsersView = new a({
                        settingObj: {
                            hideAdmins: this.settingObj.hideAdmins,
                            isShowSelf: this.settingObj.isShowSelf
                        }
                    }),
                    this.searchUsersView.onChangeHeight(248),
                    this.$("#userTreeModal").append(this.searchUsersView.el)),
                this.$(".search-list").show(),
                this.searchUsersView.doSearch(e),
                void this.searchUsersView.on(EventType.selectUser, this.onSelectUser, this)) : void this.cancelSearchUser()
        },
        cancelSearchUser: function() {
            this.$(".search-list").hide(),
                this.$("#usersSelectTreeModal").show(),
                this.$(".input-medium").val("")
        },
        clearSelectedUsers: function() {
            this.selectUsers.reset()
        },
        onSelectUser: function(e) {
            return e ? void this.selectUsers.add(e) : !1
        },
        addDepartmentUsers: function(e) {
            var s = this;
            e.getDeptUsers(function(e) {
                    e.length ? s.selectUsers.add(e) : noty.success("该部门下没有用户!")
                }),
                this.settingObj.canSelectSelf || this.selectUsers.remove(this.selectUsers.get(cache.userId))
        },
        addMember: function() {
            var e = this;
            this.selectUsers.each(function(s) {
                    s.set("sendMail", e.$sendMail.hasClass("true"))
                }),
                this.trigger(EventType.selectUsers, this.selectUsers)
        },
        cancelAddMember: function() {
            this.trigger(EventType.cancelSelectUsers)
        },
        toggleSendMail: function(e) {
            var s = $(e.target);
            s.toggleClass("true")
        },
        close: function() {
            this.collectionBinder.unbind(),
                this.selectUsers.reset(),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    });
    var l = Backbone.View.extend({
        tagName: "li",
        template: '<span class="name label label-info"><%=name%></span> <span class="del-user"><i class="icon-remove"></i></span>',
        selectUsers: void 0,
        events: {
            "click .del-user": "delSelectedUser"
        },
        initialize: function() {
            this.selectUsers = this.options.collection,
                this.render()
        },
        render: function() {
            return this.$el.html(_.template(this.template, {
                    name: this.model.get("nameAccount") || this.model.get("userName")
                })),
                this
        },
        delSelectedUser: function() {
            log.debug("before del user: ", this.selectUsers.length),
                this.selectUsers.remove(this.model),
                log.debug("after del user: ", this.selectUsers.length)
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/file/SyncConfirmModal", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "syncConfirmModal",
        className: "sync-confirm-modal",
        collectionBinder: void 0,
        syncFolder: void 0,
        syncUserList: void 0,
        events: {
            "click .submit-btn": "_onSubmit",
            "click .prev-btn": "_onShowPrev"
        },
        initialize: function() {
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e),
                this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, n, i, s) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        n = this.merge(n, e.helpers),
                        s = s || {};
                    var o, l, a = "",
                        c = "function",
                        r = this.escapeExpression;
                    return a += '<div class="modal-header"><button type="button" class="close prev-btn" id="closeModal">&times;</button><h3 class="modal-header-title"><span class="modal-header-icon"><i class="user-add-icon"></i></span><span><%=msgAddSync%></span></h3></div><div class="modal-body old-modal"><div class="info"><%=msg82%><b>“', (l = n.folderName) ? o = l.call(t, {
                            hash: {},
                            data: s
                        }) : (l = t && t.folderName,
                            o = typeof l === c ? l.call(t, {
                                hash: {},
                                data: s
                            }) : l),
                        a += r(o) + '”</b><%=msgSyncUserInfo%></div><ul class="overflow-auto-y common-user-list sync-user-list "></ul><ul class="tips" style="list-style-type: decimal;"><%=msgSyncSuccTip%></ul></div><div class="modal-footer ar"><span class="btn submit-btn btn-blue"><%=msg86%></span><span class="btn prev-btn btn-white-blue"><%=msg87%></span></div>'
                }), {
                    folderName: this.model.get("folderName")
                })),
                this.collectionBinder.bind(this.collection, this.$el.find(".sync-user-list")),
                this
        },
        viewCreator: function(e) {
            return new n({
                model: e
            })
        },
        _onSubmit: function() {
            this.trigger(EventType.submit)
        },
        _onShowPrev: function() {
            this.trigger(EventType.prevStep)
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    });
    var n = Backbone.View.extend({
        tagName: "li",
        className: "sync-user-item",
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(this.model.get("nameAccount")),
                this
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/file/SyncUserItem", function(require, e, t) {
    t.exports = window.SelectedUserItemView = Backbone.View.extend({
        tagName: "li",
        className: "sync-user-item",
        events: {
            "click .sync-direct": "multiCheck",
            "click .del-user": "delSelectedUser",
            "click ": "toggleCheck"
        },
        initialize: function() {
            this.render(),
                this.listenTo(this.model, "change:downOnly", this._onCheck)
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, s, l, i) {
                    function a(e, t) {
                        var l, i, a = "";
                        return a += "( ", (i = s.jobTitle) ? l = i.call(e, {
                                hash: {},
                                data: t
                            }) : (i = e && e.jobTitle,
                                l = typeof i === h ? i.call(e, {
                                    hash: {},
                                    data: t
                                }) : i),
                            a += d(l) + " )"
                    }
                    this.compilerInfo = [4, ">= 1.0.0"],
                        s = this.merge(s, e.helpers),
                        i = i || {};
                    var n, o, c = "",
                        h = "function",
                        d = this.escapeExpression,
                        r = this;
                    return c += '<ul class="item-ul"><li class="user-icon"><img src="', (o = s.icon) ? n = o.call(t, {
                            hash: {},
                            data: i
                        }) : (o = t && t.icon,
                            n = typeof o === h ? o.call(t, {
                                hash: {},
                                data: i
                            }) : o),
                        c += d(n) + '" alt="avatar" name="icon"/></li><li class="user-info"><div class="name-job"><span class="name">', (o = s.name) ? n = o.call(t, {
                            hash: {},
                            data: i
                        }) : (o = t && t.name,
                            n = typeof o === h ? o.call(t, {
                                hash: {},
                                data: i
                            }) : o),
                        c += d(n) + '</span><span class="job">',
                        n = s["if"].call(t, t && t.jobTitle, {
                            hash: {},
                            inverse: r.noop,
                            fn: r.program(1, a, i),
                            data: i
                        }), (n || 0 === n) && (c += n),
                        c += '</span></div><div class="mail">', (o = s.mail) ? n = o.call(t, {
                            hash: {},
                            data: i
                        }) : (o = t && t.mail,
                            n = typeof o === h ? o.call(t, {
                                hash: {},
                                data: i
                            }) : o),
                        c += d(n) + '</div></li><li class="sync-direct"><span class=\'checkbox-sprite ', (o = s.downOnly) ? n = o.call(t, {
                            hash: {},
                            data: i
                        }) : (o = t && t.downOnly,
                            n = typeof o === h ? o.call(t, {
                                hash: {},
                                data: i
                            }) : o),
                        c += d(n) + '\'><input type="checkbox" style=\'visibility:hidden\' checked=false></span><span class="check-txt"><%=msgSingleSync%></span></li><li class="del-user"><a><i class="icon-custom-delete-red"></i></a></li></ul>'
                }), {
                    name: this.model.get("realName") || this.model.get("userName"),
                    jobTitle: this.model.get("jobTitle"),
                    mail: this.model.get("mail"),
                    downOnly: this.model.get("downOnly") ? "true" : "",
                    icon: this.model.get("icon")
                })),
                this
        },
        _onCheck: function() {
            this.$(".checkbox-sprite").toggleClass("true", this.model.get("downOnly"))
        },
        multiCheck: function(e) {
            this.model.set("downOnly", !this.model.get("downOnly")),
                e.stopPropagation()
        },
        toggleCheck: function(e) {
            var t = this,
                s = this.model.get("downOnly"),
                l = $(e.target);
            if (l.is("a") || l.is("input"))
                return e.stopPropagation(), !0;
            if (l.hasClass("sync-direct") || l.hasClass("checkbox-sprite") || l.hasClass("check-txt") || l.hasClass("del-user"))
                return e.stopPropagation(), !0;
            var i = this.collection.length > 1 && this.collection.every(function(e) {
                return e.get("downOnly")
            });
            this.collection.each(function(e) {
                    e.id !== t.model.id && e.get("downOnly") && e.set("downOnly", !1)
                }, this),
                this.model.set("downOnly", i || !s)
        },
        delSelectedUser: function() {
            this.collection.remove(this.model)
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/file/SetSyncWindow", function(require, e, s) {
    var t = require("app/commons/uikit/user/UsersSelectModal"),
        i = require("app/commons/uikit/file/FolderTreeModal"),
        o = require("app/commons/uikit/file/SyncConfirmModal"),
        l = require("app/commons/models/file/SyncFolderDTO"),
        n = require("app/commons/uikit/file/SyncUserItem");
    s.exports = Backbone.View.extend({
        tagName: "div",
        id: "setSyncWindow",
        className: "modal fade hide modal-window set-sync-window",
        userCollectionBinder: void 0,
        folderModal: void 0,
        userModal: void 0,
        syncConfirmModal: void 0,
        syncFolder: void 0,
        syncUserList: void 0,
        departmentList: void 0,
        userList: void 0,
        $syncLayout: void 0,
        $confirmLayout: void 0,
        $folderLayout: void 0,
        $userLayout: void 0,
        $folderSelectArea: void 0,
        $userSelectArea: void 0,
        events: {
            "click .closeWindow": "close",
            "click .ok-sync-btn": "_onShowConfirmSync",
            "click .select-folder": "_onShowFolderSelect",
            "click .select-users": "_onShowUsersSelect",
            "click .check-all": "_onCheckAll"
        },
        initialize: function() {
            var e = this;
            this.settingObj = this.options.settingObj,
                this.syncFolder = this.options.syncFolder || new l,
                this.syncUserList = new UserListDTO,
                _.each(this.syncFolder.get("syncUsers"), function(s) {
                    if (s.userId == cache.userId)
                        e.syncUserList.add(model.currentUser);
                    else {
                        var t = new UserDTO;
                        t.set("userId", s.userId),
                            t.set("userName", s.userName),
                            t.setNameAccount(),
                            t.set("downOnly", s.downOnly),
                            e.syncUserList.add(t)
                    }
                });
            var s = (model.currentUser.get("userType") > 0 && model.currentUser.isSecAdmin(),
                new Backbone.CollectionBinder.ViewManagerFactory(this.userViewCreator()));
            this.userCollectionBinder = new Backbone.CollectionBinder(s),
                this.addListeners(),
                this.render()
        },
        addListeners: function() {
            this.listenTo(this.syncUserList, "change:downOnly", this._onCheck),
                this.listenTo(this.syncUserList, "add remove", this._onCheck)
        },
        render: function() {
            return this._initSettingObj(),
                this.$el.html(__html(Handlebars.template(function(e, s, t, i, o) {
                    function l() {
                        return '<div class="show-folder"><label><%=msgObjectName%>: </label><span class="folder-path" name="folder-path"></span></div>'
                    }

                    function n() {
                        return '<div class="btn-layout"><label><%=msgSelectSyncFolder%></label><div><span class="qyc-btn select-folder" id="selectFolder"><%=msg81%></span></div></div><div class="show-folder hide"><label><%=msgObjectName%>: </label><span class="folder-path" name="folder-path"></span><a class="select-folder" style="float:right"><%=msg335%></a></div>'
                    }
                    this.compilerInfo = [4, ">= 1.0.0"],
                        t = this.merge(t, e.helpers),
                        o = o || {};
                    var d, r = "",
                        a = this;
                    return r += '<div class="modal-layout sync-layout"><div id="addSyncModal" class="add-sync-modal sync-modal"><div class="modal-header"><button type="button" class="close closeWindow" data-dismiss="modal" aria-hidden="true" id="closeModal">&times;</button><h3 class="modal-header-title"><span class="modal-header-icon"><i class="user-add-icon"></i></span><span><%=msgAddSync%></span></h3></div><div class="modal-body old-modal"><div class="select-area folder">',
                        d = t["if"].call(s, s && s.isView, {
                            hash: {},
                            inverse: a.program(3, n, o),
                            fn: a.program(1, l, o),
                            data: o
                        }), (d || 0 === d) && (r += d),
                        r += '</div><div class="select-area user"><div class="row-fluid"><div class="span6"><label><%= msgSelectSyncColleague %></label></div><div class="span6 ar" style="line-height:30px;"><a class="select-users continue hide">继续添加</a></div></div><div class="btn-layout"><span class="qyc-btn select-users" id="selectUsers"><%=msg542%></span></div><div class="common-box sync-users-box hide"><div class="list-header"><ul class="item-ul"><li class="lab"><span><%=msg492%></span></li><li class="check"><span class=\'check-all checkbox-sprite\'><input type="checkbox" style=\'visibility:hidden\' checked=false></span><span class="check-txt"><%=msgAllSingleSync%></span><a class="select-users"><%=msg85%></a></li><li style="clear: both;"></li></ul></div><ul class="sync-user-list common-user-list"></ul></div><div class="single-sync-tips hide"><%= msgSingleSyncTips %></div></div></div><div class="modal-footer"><div class="ar"><span class="btn ok-sync-btn btn-blue"><%=msg86%></span><span class="btn cancel-sync-btn closeWindow btn-white-blue"><%=msg87%></span></div></div></div></div><div class="modal-layout folder-layout hide"></div><div class="modal-layout user-layout hide"></div><div class="modal-layout sync-confirm-layout hide"><%=msgSyncConfirm%></div>'
                }), {
                    isView: this.settingObj.isView
                })),
                this.$syncLayout = this.$(".sync-layout"),
                this.$syncConfirmLayout = this.$(".sync-confirm-layout"),
                this.$folderLayout = this.$(".folder-layout"),
                this.$userLayout = this.$(".user-layout"),
                this.$folderSelectArea = this.$(".select-area.folder"),
                this.$userSelectArea = this.$(".select-area.user"),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this.syncFolder.get("folderId") && (this.$folderSelectArea.find(".btn-layout").addClass("hide"),
                    this.$folderSelectArea.find(".show-folder").removeClass("hide"),
                    this.syncFolder.get("folderPath") && this.$folderSelectArea.find(".folder-path").html(constants.dealEntSpecialPath(this.syncFolder.get("folderPath")))),
                this.syncFolder.get("syncUsers") && (this.$userSelectArea.find(".btn-layout").addClass("hide"),
                    this.$userSelectArea.find(".common-box").removeClass("hide"),
                    this.$userSelectArea.find(".continue").removeClass("hide")),
                this.userCollectionBinder.bind(this.syncUserList, this.$el.find(".sync-user-list")),
                this
        },
        _initSettingObj: function() {
            this.settingObj = this.settingObj || {},
                _.defaults(this.settingObj, {
                    isView: !1
                })
        },
        userViewCreator: function() {
            var e = this;
            return function(s) {
                return new n({
                    model: s,
                    collection: e.syncUserList
                })
            }
        },
        _onCheck: function() {
            var e = this.syncUserList.where({
                    downOnly: !0
                }),
                s = 0 !== this.syncUserList.length && this.syncUserList.length === e.length;
            this.$(".check-all").toggleClass("true", s)
        },
        _onCheckAll: function() {
            var e = this.$(".check-all").hasClass("true");
            this.syncUserList.each(function(s) {
                s.set("downOnly", !e)
            })
        },
        _onShowFolderSelect: function() {
            this.folderModal && this.folderModal.close(),
                this.folderModal = new i({
                    settingObj: {
                        isEntDisk: !0,
                        showCheckBox: !1,
                        chkboxType: {
                            Y: "ps",
                            N: "ps"
                        },
                        headerText: msgs.msg81,
                        showManageFolder: !0
                    }
                }),
                this.$folderLayout.html(this.folderModal.el),
                this.$(".modal-layout").addClass("hide"),
                this.$folderLayout.removeClass("hide"),
                this.folderModal.on(EventType.selectFolders, this._onFolderSelected, this),
                this.folderModal.on(EventType.cancelSelectFolders, this._onShowSync, this)
        },
        _onFolderSelected: function(e) {
            if (!e.destFolder)
                return noty.error(msgs.msgNoFolder), !1;
            if (e.destFolder.isRootFolder())
                return noty.alert(msgs.msgSelectEntSubFolder), !1;
            var s = e.destFolder.toJSON();
            this.syncFolder.set({
                    folderId: s.fileId,
                    folderPath: s.path,
                    folderName: s.name
                }),
                this.$folderSelectArea.find(".folder-path").html(s.path),
                this.$folderSelectArea.find(".btn-layout").addClass("hide"),
                this.$folderSelectArea.find(".show-folder").removeClass("hide"),
                this._onShowSync()
        },
        _onShowUsersSelect: function() {
            this.userModal && this.userModal.close(),
                this.userModal = new t({
                    selectedUserList: this.syncUserList,
                    settingObj: {
                        headerText: msgs.msg542,
                        isShowSelf: !0,
                        canSelectSelf: !0
                    }
                }),
                this.$userLayout.html(this.userModal.el),
                this.$(".modal-layout").addClass("hide"),
                this.$userLayout.removeClass("hide"),
                this.userModal.on(EventType.selectUsers, this._onUsersSelected, this),
                this.userModal.on(EventType.cancelSelectUsers, this._onShowSync, this)
        },
        _onUsersSelected: function(e) {
            var s = this;
            return e.length ? (e.each(function(e) {
                    s.syncUserList.add(e)
                }),
                _.each(this.syncFolder.get("syncUsers"), function(s) {
                    var t = e.findWhere({
                        userId: s.userId
                    });
                    t && t.set("downOnly", s.downOnly)
                }),
                this.$userSelectArea.find(".btn-layout").addClass("hide"),
                this.$userSelectArea.find(".common-box").removeClass("hide"),
                this.$userSelectArea.find(".continue").removeClass("hide"),
                this.$userSelectArea.find(".single-sync-tips").removeClass("hide"),
                void this._onShowSync()) : void noty.error(msgs.msgNoUser)
        },
        _onShowConfirmSync: function() {
            return this.syncFolder && this.syncFolder.get("folderId") ? this.syncFolder.get("syncId") && 0 === this.syncUserList.length ? void this._onSubmitSync(!0) : this.syncUserList && 0 !== this.syncUserList.length ? (this.syncConfirmModal && this.syncConfirmModal.close(),
                this.syncConfirmModal = new o({
                    model: this.syncFolder,
                    collection: this.syncUserList
                }),
                this.syncConfirmModal.on(EventType.submit, this._onSubmitSync, this),
                this.syncConfirmModal.on(EventType.prevStep, this._onShowSync, this),
                this.$syncConfirmLayout.html(this.syncConfirmModal.el),
                this.$el.addClass("show-confirm"),
                this.$(".modal-layout").addClass("hide"),
                void this.$syncConfirmLayout.removeClass("hide")) : void noty.error(msgs.msgNoUser) : void noty.error(msgs.msgNoFolder)
        },
        _onSubmitSync: function(e) {
            var s = this,
                t = this.syncUserList.map(function(e) {
                    return {
                        userId: e.get("userId"),
                        downOnly: e.get("downOnly")
                    }
                }),
                i = {
                    folderId: this.syncFolder.get("folderId"),
                    users: t,
                    userId: cache.userId,
                    entId: cache.entId
                };
            this.syncFolder.get("syncId") && (i.syncId = this.syncFolder.get("syncId")),
                resturl.updateSyncFolder(_.extend(i), function(t) {
                    constants.isResponseError(t) ? noty.error(ErrorType.updateSyncFolderError(t)) : (noty.success(e ? msgs.msgClearSyncUserSucc : msgs.msgFolderSyncSetSucc),
                        s.trigger(EventType.operateSuccess),
                        s.close())
                })
        },
        _onShowSync: function() {
            this.$el.removeClass("show-confirm"),
                this.$(".modal-layout").addClass("hide"),
                this.$syncLayout.removeClass("hide")
        },
        close: function() {
            this.$el.modal("hide"),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/file/UploadHelper", function(require, e) {
    function t(e) {
        return _.defaults(e, {
            view: null,
            $uploadBtn: null,
            $placeholder: null,
            uploadUrl: resturl.uploadUrl,
            btnImg: "",
            btnWith: 65,
            btnHeight: 27,
            btnText: "",
            btnTextStyle: "",
            fileTypes: "*.*"
        })
    }

    function o(e) {
        var t, o = e.view;
        t = {
                swfuploadLoaded: function() {
                    o.trigger(EventType.swfuploadLoaded)
                },
                fileDialogStart: function() {
                    o.trigger(EventType.fileDialogStart)
                },
                fileQueued: function(e, t) {
                    o.trigger(EventType.fileQueued, t)
                },
                fileQueueError: function(e, t, l, n) {
                    log.error("File queue error", n, ", errorCode: ", l),
                        o.trigger(EventType.fileQueueError), -110 === l && noty.error(msgs.msgUploadMaxErr)
                },
                fileDialogComplete: function() {
                    o.trigger(EventType.fileDialogComplete)
                },
                uploadStart: function(e, t) {
                    log.info("Upload start - ", t.name),
                        o.trigger(EventType.uploadStart, t)
                },
                uploadProgress: function(e, t, l) {
                    o.trigger(EventType.uploadProgress, t, l)
                },
                uploadSuccess: function(e, t, l) {
                    o.trigger(EventType.uploadSuccess, t, l)
                },
                uploadComplete: function(e, t) {
                    o.trigger(EventType.uploadComplete, t)
                },
                uploadError: function(e, t, n, r) {
                    log.warn(l, "uploadError> file: ", t, ", errorCode: ", n, ",message: ", r), -290 != n && o.trigger(EventType.uploadError, t, n, !0)
                }
            },
            $.each(t, function(t, o) {
                e.$uploadBtn.bind(t, o)
            })
    }
    var l = "[UploadHelper]-";
    e.initialize = function(e) {
        var e = t(e);
        e.$uploadBtn.swfupload({
                upload_url: e.uploadUrl,
                use_query_string: !1,
                file_post_name: "file",
                file_types: e.fileTypes,
                file_types_description: "All Files",
                file_upload_limit: constants.uploadFileSizeLimit,
                file_size_limit: "500 MB",
                flash_url: "/wt/sea-modules/swf/swfupload/swfupload.swf",
                button_image_url: e.btnImg,
                button_width: e.btnWith,
                button_height: e.btnHeight,
                button_placeholder: e.$placeholder,
                button_text: e.btnText,
                button_text_style: e.btnTextStyle,
                button_text_left_padding: 8,
                button_text_top_padding: 4,
                debug: !1,
                custom_settings: {
                    something: "here"
                },
                button_window_mode: "transparent"
            }),
            e.view.swfupload = e.$uploadBtn.data("__swfu"),
            o(e)
    }
});;
define("app/commons/utils/PrivateModifier", function(require, e) {
    e.modify = function(e) {
        switch (e.id) {
            case "indexView":
                e.$(".footer-bbs,.pipe").hide();
                break;
            case "userInfoView":
                e.$(".qyc-mail-field span, .qyc-mobile-field span ").hide();
                break;
            case "currentService":
                e.$(".service-buy").hide();
                break;
            case "entUploadWindow":
                e.$(".mail-box").hide();
                break;
            case "linkOperateView":
                e.$(".mailSend").hide();
                break;
            case "ServiceCenterLeft":
                e.$(".phone-auth-li, .cloudPhone, .service-price-li").hide()
        }
    }
});;
define("app/commons/uikit/index/indexview", function(require, e, i) {
    var s = require("app/commons/utils/PrivateModifier");
    i.exports = window.IndexView = Backbone.View.extend({
        id: "indexView",
        initialize: function() {
            this.render()
        },
        render: function() {
            return $(this.el).html(__html(Handlebars.template(function(e, i, s, t, n) {
                    function a() {
                        return '<a href="https://app.oatos.com/wt/buy.html" target="_blank" class="qyc-buy footer-bbs"><%=msgPurchaseCenter%></a><span class="pipe" style="color:#1c88fd;margin:0 5px;">|</span>'
                    }
                    this.compilerInfo = [4, ">= 1.0.0"],
                        s = this.merge(s, e.helpers),
                        n = n || {};
                    var o, r = "",
                        l = this;
                    return r += '<div class="navbar navbar-inverse header " id="headerbox"></div><div class="container" id="mainbox"></div><ul class="footer"><li class="align-l"> <%=msg16%> &copy <%=msg9%> V3.6.0</li><li class="align-r">',
                        o = s.unless.call(i, i && i.hideBuy, {
                            hash: {},
                            inverse: l.noop,
                            fn: l.program(1, a, n),
                            data: n
                        }), (o || 0 === o) && (r += o),
                        r += '<a href="http://www.oatos.com/bbs/" target="_blank" class="footer-bbs"><%= msgBBS%></a></li></ul><!--/.fluid-container-->'
                }), {
                    hideBuy: this.options.hideBuy
                })),
                this.$(".qyc-buy").attr("href", constants.getBuyUrl()),
                seajs.isPrivate && s.modify(this),
                this
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/index/mainboxview", function(require, t, e) {
    e.exports = window.MainboxView = Backbone.View.extend({
        $contentLeft: void 0,
        $contentRight: void 0,
        $slideRight: void 0,
        adminInfoView: void 0,
        _isSlideAnimate: !1,
        initialize: function() {
            this.listenTo(this.model, "change:width", this.onChangeWidth),
                this.listenTo(this.model, "change:height", this.onChangeHeight),
                this.render()
        },
        render: function() {
            return this.$el.append(__html(Handlebars.template(function(t, e, i, n, s) {
                    return this.compilerInfo = [4, ">= 1.0.0"],
                        i = this.merge(i, t.helpers),
                        s = s || {},
                        '<div id="content-left" class=\'content-left custom-content-left overflow-hidden\'></div><div id="content-right" class=\'content-right\'></div><div id="slide-right" class=\'slide-right hide\' style="display: inline-block; overflow: hidden"></div>'
                }))),
                this.$contentLeft = this.$el.find("#content-left"),
                this.$contentRight = this.$el.find("#content-right"),
                this.$slideRight = this.$el.find("#slide-right"),
                this.ctrlXScroll(),
                this.ctrlYScroll(),
                this.$contentLeft.width(this.model.get("contentLeftWidth")),
                this.$slideRight.width(this.model.get("slideRightWidth")),
                this.$contentRight.width(this.model.getContentRightWidth()),
                this._setRightStandard(this.model.getContentRightWidth()),
                this.$contentRight.height(model.setting.getMainboxHeight()),
                this.$el.height(model.setting.getMainboxHeight()),
                this
        },
        updateContentLeft: function(t) {
            view.contentLeft && view.contentLeft.id === t.id || this.doUpdateContentLeft(t)
        },
        isShowContentLeft: function(t) {
            return view.contentLeft && t && view.contentLeft.id === t.id
        },
        doUpdateContentLeft: function(t) {
            view.contentLeft && view.contentLeft.close(),
                view.contentLeft = t,
                this.$contentLeft.append(t.el)
        },
        updateContentRight: function(t) {
            this.isContentViewShow(t) || this.doUpdateContentRight(t)
        },
        isContentViewShow: function(t) {
            return t && view.contentRight && view.contentRight.id === t.id && t.isShow()
        },
        doUpdateContentRight: function(t) {
            view.contentRight && view.contentRight.close(),
                view.contentRight = t,
                this.$contentRight.html(t.el)
        },
        isShowEntDisk: function() {
            return view.contentRight && "entFileTable" === view.contentRight.id ? !0 : !1
        },
        isShowPersonDisk: function() {
            return view.contentRight && "personFileTable" === view.contentRight.id ? !0 : !1
        },
        updateSlideRight: function(t) {
            if (view.slideRight) {
                if (view.slideRight.id === t)
                    return;
                if ("telephoneView" === view.slideRight.id && view.phoneView.isDialOrMeeting())
                    return void noty.error(msgs.msgDialStopErr)
            }
            view.slideRight && view.slideRight.close(),
                view.slideRight = t,
                this.$slideRight.append(t.el),
                this.showSlideRight(),
                view.header.switchNav()
        },
        ctrlYScroll: function() {
            this.$el.height(this.model.getMainboxHeight())
        },
        ctrlXScroll: function() {
            $("body").width(this.model.getMainboxWidth()),
                this.$el.width(this.model.getMainboxWidth())
        },
        onChangeWidth: function() {
            this.ctrlXScroll();
            var t = this.getContentRightWidth(this.isSlideShow(), this.isCollapsed());
            this.$contentRight.width(t),
                this._setRightStandard(t),
                model.messageEvent.trigger(EventType.changeWidth)
        },
        onChangeHeight: function() {
            this.ctrlYScroll(),
                this.$el.height(model.setting.getMainboxHeight()),
                this.$contentLeft.height(model.setting.getMainboxHeight()),
                this.$contentRight.height(model.setting.getMainboxHeight()),
                this.$slideRight.height(model.setting.getMainboxHeight()),
                view.fileLeftView && view.fileLeftView.onChangeHeight(),
                view.userLayout && view.userLayout.onChangeHeight(),
                view.fileDetailView && view.fileDetailView.onChangeHeight(),
                view.messageView && view.messageView.onChangeHeight(),
                view.permissionView && view.permissionView.onChangeHeight(),
                view.domainSettingView && view.domainSettingView.onChangeHeight(),
                model.messageEvent.trigger(EventType.changeHeight)
        },
        isSlideShow: function() {
            return !this.$slideRight.hasClass("hide")
        },
        isCollapsed: function() {
            return !!this.$contentLeft.hasClass("collapsed")
        },
        getContentRightWidth: function(t, e) {
            var i = this.model.getContentRightWidth();
            return t && (i = this.model.getContentRightWidthMinusSlide()),
                e && (i += this.model.get("contentLeftWidth") - this.model.get("collapseContentLeftWidth")),
                i
        },
        showSlideRight: function() {
            if (this.$slideRight.hasClass("hide") && !this._isSlideAnimate) {
                var t = this;
                this._isSlideAnimate = !0,
                    this.$contentRight.animate({
                        width: this.getContentRightWidth(!0, this.isCollapsed()) + "px"
                    }, 500, function() {
                        model.messageEvent.trigger(EventType.changeSlide),
                            t.$slideRight.removeClass("hide"),
                            t._isSlideAnimate = !1
                    }),
                    this.$(".breadcrumb").animate({
                        width: this.getContentRightWidth(!0, t.isCollapsed()) - 20 - 5 - 130 - 280
                    }, 500),
                    this._setRightStandard(this.getContentRightWidth(!0, this.isCollapsed()))
            }
        },
        hideSlideRight: function() {
            if (!this.$slideRight.hasClass("hide") && !this._isSlideAnimate) {
                var t = this;
                this._isSlideAnimate = !0,
                    this.$contentRight.animate({
                        width: this.getContentRightWidth(!1, this.isCollapsed()) + "px"
                    }, 500, function() {
                        model.messageEvent.trigger(EventType.changeSlide),
                            model.messageEvent.trigger(EventType.closeSlide),
                            t.$slideRight.addClass("hide"),
                            view.slideRight && view.slideRight.close(),
                            view.slideRight = null,
                            view.header.switchNav(),
                            t._setRightStandard(t.getContentRightWidth(!1, t.isCollapsed())),
                            t._isSlideAnimate = !1
                    })
            }
        },
        collapseContentLeft: function(t) {
            var e = this,
                i = this.getContentRightWidth(e.isSlideShow(), !!t);
            t ? (this.$contentLeft.addClass("collapsed"),
                    this.$contentLeft.animate({
                        width: e.model.get("collapseContentLeftWidth") + "px"
                    }, 500)) : this.$contentLeft.animate({
                    width: e.model.get("contentLeftWidth") + "px"
                }, 500, function() {
                    e.$contentLeft.removeClass("collapsed")
                }),
                this.$contentRight.animate({
                    width: i + "px"
                }, 500),
                this.$(".file-table-header").animate({
                    width: i - 20 + "px"
                }, 500),
                this.$(".breadcrumb").animate({
                    width: i - 20 - 5 - 130 - 280
                }, 500)
        },
        _setRightStandard: function(t) {
            900 > t ? this.$contentRight.removeClass("small-screen-size").removeClass("nomal-screen-size").removeClass("big-screen-size") : 1100 > t ? this.$contentRight.removeClass("nomal-screen-size").removeClass("big-screen-size").addClass("small-screen-size") : 1300 > t ? this.$contentRight.removeClass("small-screen-size").removeClass("big-screen-size").addClass("nomal-screen-size") : this.$contentRight.removeClass("small-screen-size").removeClass("nomal-screen-size").addClass("big-screen-size")
        },
        close: function() {
            this.undelegateEvents(),
                this.off(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/permission/FilePermissionItemView", function(require, e, i) {
    i.exports = Backbone.View.extend({
        tagName: "li",
        modelBinder: void 0,
        events: {
            "click .edit": "edit",
            "click .delete": "del"
        },
        initialize: function() {
            this.modelBinder = new Backbone.ModelBinder,
                this.render()
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, i, t, n, s) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                    t = this.merge(t, e.helpers),
                    s = s || {},
                    '<ul><li name="path"></li><li name="permission"></li><li><a href="###" class="edit"><%=msg335%></a> | <a href="###" class="delete"><%=msg156%></a></li></ul>'
            })));
            var e = {
                folderPath: "[name=path]",
                permissionDTO: {
                    selector: "[name=permission]",
                    converter: constants.permissionConverter
                }
            };
            return this.modelBinder.bind(this.model, this.el, e),
                this
        },
        edit: function() {
            this.model.set("edit", !0)
        },
        del: function() {
            this.collection.remove(this.model)
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/permission/PermissionSelectModal", function(require, s, e) {
    e.exports = window.PermissionSelectModal = Backbone.View.extend({
        tagName: "div",
        id: "permissionSelectModal",
        className: "permission-select-modal",
        _modelBinder: void 0,
        settingObj: void 0,
        events: {
            "click .permission_select li >a": "changePerssion",
            "click .modal-footer .ok-permission-set-btn": "onSubmit",
            "click .modal-footer .cancel-permission-set-btn": "onCancel"
        },
        initialize: function() {
            this.listenTo(this.model, "change", this.onChangePermission),
                this.settingObj = this.options.settingObj,
                this.passInfo = this.options.passInfo,
                this._modelBinder = new Backbone.ModelBinder,
                this.render()
        },
        render: function() {
            this.initSettingObj(),
                this.$el.html(__html(Handlebars.template(function(s, e, i, t, l) {
                    function a(s, e) {
                        var t, l, a = "";
                        return a += '<div class="folder-info"><%=msgCurrentFolder %>：<b class="green">', (l = i.folderName) ? t = l.call(s, {
                                hash: {},
                                data: e
                            }) : (l = s && s.folderName,
                                t = typeof l === r ? l.call(s, {
                                    hash: {},
                                    data: e
                                }) : l),
                            a += d(t) + "</b></div>"
                    }
                    this.compilerInfo = [4, ">= 1.0.0"],
                        i = this.merge(i, s.helpers),
                        l = l || {};
                    var n, o, c = "",
                        r = "function",
                        d = this.escapeExpression,
                        m = this;
                    return c += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true" id="closeModal">&times;</button><h3 class="modal-header-title"><%= msgSetPermission %></h3></div><div class="modal-body"><div>',
                        n = i["if"].call(e, e && e.isEdit, {
                            hash: {},
                            inverse: m.noop,
                            fn: m.program(1, a, l),
                            data: l
                        }), (n || 0 === n) && (c += n),
                        c += '<div class="permission_content"><div class="modal-ul"><div class="permission-select fl"><div class="permission-types ac"><%=msg420%></div><ul class="permission_select"><li><a data-permission="read"><%=msg421%></a><span class="blue-right-arrow-8"></span></li><li><a data-permission="upload"><%=msg422%></a><span class="blue-right-arrow-8"></span></li><li><a data-permission="download"><%=msg423%></a><span class="blue-right-arrow-8"></span></li><li><a data-permission="read,upload"><%=msg424%></a><span class="blue-right-arrow-8"></span></li><li><a data-permission="read,download"><%=msg425%></a><span class="blue-right-arrow-8"></span></li><li><a data-permission="all"><%=msg426%></a><span class="blue-right-arrow-8"></span></li><li><a data-permission="self"><%=msg427%></a><span class="blue-right-arrow-8"></span></li></ul></div><div class="permission-list fl"><div class="permission_bottom2px title-list ac"><%= msg428 %></div><div class="permission-checks"><ul><li class="createFolder-check"><span class=\'checkbox-sprite false\' name="createFolder"></span> <%=msg585%></li><li class="read-check"><span class=\'checkbox-sprite false\' name="read"></span> <%=msg260%></li><li class="upload-check"><span class=\'checkbox-sprite false\' name="upload"></span> <%=msg258%></li><li class="download-check"><span class=\'checkbox-sprite false\' name="download"></span> <%=msg259%></li><br/><li class="share-check"><span class=\'checkbox-sprite false\' name="share"></span> <%=msg262%></li><li class="write-check"><span class=\'checkbox-sprite false\' name="write"></span> <%=msg264%></li><li class="delete-check"><span class=\'checkbox-sprite false\' name="delete"></span> <%=msg156%></li><li class="local-check"><span class=\'checkbox-sprite false\' name="local"></span> <%=msg435%></li></ul></div><div class="permission-intros"><ul class="permission-item createFolder"><li class="title"><%=msg585%></li><li class="intro"><%=msgCreateFolderTip%></li></ul><ul class="permission-item read"><li class="title"><%=msg260%></li><li class="intro"><%=msg439%></li></ul><ul class="permission-item upload"><li class="title"><%=msg258%></li><li class="intro"><%=msg441%></li></ul><ul class="permission-item download"><li class="title"><%=msg259%></li><li class="intro"><%=msg443%></li></ul><ul class="permission-item share"><li class="title"><%=msg262%></li><li class="intro"><%=msg445%>\\<%=msg446%>\\<%=msg447%></li></ul><ul class="permission-item write"><li class="title"><%=msg264%></li><li class="intro"><%=msg449%></li></ul><ul class="permission-item delete"><li class="title"><%=msg156%></li><li class="intro"><%=msg451%></li></ul><ul class="permission-item local"><li class="title"><%=msg435%></li><li class="intro">PC<%=msg453%></li></ul></div></div></div></div></div></div><div class="modal-footer"><span class="btn btn-blue ok-permission-set-btn">', (o = i.okBtnText) ? n = o.call(e, {
                            hash: {},
                            data: l
                        }) : (o = e && e.okBtnText,
                            n = typeof o === r ? o.call(e, {
                                hash: {},
                                data: l
                            }) : o),
                        c += d(n) + '</span><span class="btn btn-white-blue cancel-permission-set-btn">', (o = i.cancelBtnText) ? n = o.call(e, {
                            hash: {},
                            data: l
                        }) : (o = e && e.cancelBtnText,
                            n = typeof o === r ? o.call(e, {
                                hash: {},
                                data: l
                            }) : o),
                        c += d(n) + "</span></div>"
                }), this.settingObj)),
                this.$checks = this.$el.find(".permission-list span.checkbox-sprite");
            var s = Backbone.ModelBinder.createDefaultBindings(this.$el.find(".permission-list"), "name", constants.checkConverter, "class");
            this._modelBinder.bind(this.model, this.$el.find(".permission-list"), s);
            var e = this.model.getChecked();
            return !e.length && this.model.set("read", !0),
                this.selectDefaultPermission(),
                this
        },
        initSettingObj: function() {
            this.settingObj || (this.settingObj = {}),
                void 0 == this.settingObj.headerIcon && (this.settingObj.headerIcon = "permission-select-icon"),
                void 0 == this.settingObj.headerText && (this.settingObj.headerText = msgs.msg454),
                void 0 == this.settingObj.okBtnIcon && (this.settingObj.okBtnIcon = "btn-ok-icon"),
                void 0 == this.settingObj.okBtnText && (this.settingObj.okBtnText = msgs.msg86),
                void 0 == this.settingObj.cancelBtnIcon && (this.settingObj.cancelBtnIcon = "btn-cancel-icon"),
                void 0 == this.settingObj.cancelBtnText && (this.settingObj.cancelBtnText = msgs.msg87)
        },
        rebind: function() {
            this.selectDefaultPermission(),
                this.delegateEvents()
        },
        selectDefaultPermission: function() {
            var s = this.model.getChecked(),
                e = "read",
                i = s.length;
            1 === i ? (e = s[0],
                _.contains(["read", "upload", "download"], e) || (e = "self")) : e = 2 === i ? 0 === _.difference(s, ["read", "upload"]).length ? s.join(",") : 0 === _.difference(s, ["read", "download"]).length ? s.join(",") : "self" : i >= 8 ? "all" : "self";
            var t = this.$(".permission_select a[data-permission='" + e + "']");
            this._changePermission(t),
                _.each(s, function(s) {
                    this.model.set(s, !0)
                }, this)
        },
        changePerssion: function(s) {
            var e = $(s.target);
            this._changePermission(e)
        },
        onChangePermission: function() {
            var s = this;
            this.$el.find(".permission-item").addClass("hide"),
                _.each(this.model.toJSON(), function(e, i) {
                    s.$("." + i + "-check").toggleClass("strong", !!e),
                        e && (s.$("." + i).removeClass("hide"),
                            s.$("." + i + "-check").removeClass("hide"))
                })
        },
        _changePermission: function(s) {
            this.$(".permission_select li").removeClass("active"),
                s.parent().addClass("active");
            var e = s.attr("data-permission");
            if (this.$checks.unbind(),
                e)
                if (this.$(".permission-checks .checkbox-sprite").toggleClass("no-cursor", "self" !== e),
                    "all" === e)
                    this.model.checkAll();
                else if ("self" === e)
                this.model.uncheckAll(),
                this.bindCheckListener();
            else {
                this.model.uncheckAll();
                var i = e.split(",");
                _.each(i, function(s) {
                    this.model.set(s, !0)
                }, this)
            }
        },
        bindCheckListener: function() {
            var s = this;
            this.$checks.click(function(e) {
                var i = $(e.target),
                    t = i.attr("name");
                s.model.set(t, !s.model.get(t))
            })
        },
        onSubmit: function() {
            var s = this.model.getChecked();
            if (!s.length)
                return void noty.alert(msgs.msgSelectPermission);
            var e = {
                permission: this.model
            };
            return this.passInfo && this.passInfo.editPermission && (e.editPermission = this.passInfo.editPermission),
                this.trigger(EventType.selectPermissionOk, e), !1
        },
        onCancel: function() {
            return this.trigger(EventType.selectPermissionCancel), !1
        },
        close: function() {
            this._modelBinder.unbind(),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/permission/PermissionSelectWindow", function(require, e, i) {
    var s = require("app/commons/uikit/permission/PermissionSelectModal");
    i.exports = Backbone.View.extend({
        tagName: "div",
        className: "modal fade hide modal-window",
        id: "permissionSelectWindow",
        settingObj: void 0,
        permissionSelectModal: void 0,
        initialize: function() {
            this.settingObj = this.options.settingObj,
                this.render()
        },
        render: function() {
            return this.permissionSelectModal = new s({
                    model: this.model,
                    settingObj: this.settingObj
                }),
                this.$el.append(this.permissionSelectModal.el),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this
        },
        close: function() {
            this.$el.modal("hide"),
                this.permissionSelectModal.close(),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/reglogin/MailSendView", function(require, t, e) {
    e.exports = Backbone.View.extend({
        id: "mailSendView",
        className: "mail-send-view",
        _timer: void 0,
        _timeHtml: '<span class="time">60</span>' + msgs.msgClickResend,
        $time: void 0,
        $resend: void 0,
        events: {
            "click .resendActive": "_onResendMail"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            var t = this._getRedirectUrl();
            this.$el.html(__html(Handlebars.template(function(t, e, s, i, n) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        s = this.merge(s, t.helpers),
                        n = n || {};
                    var a, r, c = "",
                        o = "function",
                        m = this.escapeExpression;
                    return c += '<div class="ac send-title"></div><div class="operate"><a class="btn btn-login-mailbox" href="', (r = s.redirectUrl) ? a = r.call(e, {
                            hash: {},
                            data: n
                        }) : (r = e && e.redirectUrl,
                            a = typeof r === o ? r.call(e, {
                                hash: {},
                                data: n
                            }) : r),
                        c += m(a) + '"><%=msgLoginMaibox%></a><span class="btn gray-btn mail-resend-btn" id="mailResend"><span class="time">60</span><%=msgClickResend%></span></div>'
                }), {
                    mail: this.options.mail,
                    redirectUrl: t
                })),
                _.startsWith(t, "http") && this.$(".btn-login-mailbox").attr("target", "_blank"),
                this.$time = this.$(".time"),
                this.$resend = this.$("#mailResend");
            var e = "FindPassword" === this.options.type ? msgs.msgMailSendTip : msgs.msgMailMessageSent;
            return this.$(".send-title").text(e.replace("{{mail}}", this.options.mail)),
                constants.timeCount(120, this._timeCallback()),
                this
        },
        _getRedirectUrl: function() {
            var t = this.options.mail,
                e = _.strRightBack(t, "@");
            switch (e) {
                case "qq.com":
                    return "https://mail.qq.com/";
                case "163.com":
                    return "http://mail.163.com/";
                case "vip.163.com":
                    return "http://vip.163.com/";
                case "vip.163.net":
                    return "http://vip.163.net/";
                case "126.com":
                    return "http://mail.126.com/";
                case "vip.126.net":
                    return "http://vip.126.net/";
                case "vip.126.com":
                    return "http://vip.126.com/";
                case "sina.com":
                case "sina.cn":
                    return "https://mail.sina.com.cn/";
                case "vip.sina.com":
                    return "http://vip.sina.com.cn/";
                case "sohu.com":
                    return "http://mail.sohu.com/";
                case "sohu.net":
                    return "http://mail.sohu.net/";
                case "vip.sohu.net":
                    return "http://vip.sohu.net/";
                case "vip.sohu.com":
                    return "http://vip.sohu.com/";
                case "gmail.com":
                    return "http://www.gmail.com/";
                case "qycloud.com":
                    return "http://mail.qycloud.com/";
                case "21cn.com":
                    return "http://mail.21cn.com/";
                case "vip.21cn.com":
                    return "http://mail.21cn.com/vip/";
                default:
                    return "#/redirect/" + t
            }
        },
        _onResendMail: function() {
            this._resendBtnShift(!1),
                constants.timeCount(120, this._timeCallback()),
                this._sendValidationMsg(this.options.mail || this.model.get("account"))
        },
        _sendValidationMsg: function(t) {
            resturl.sendValidationMsg({
                account: t,
                type: this.options.type || "Register",
                entId: cache.entId || 0,
                userId: cache.userId || 0
            }, function(t) {
                constants.isResponseOK(t) || noty.error(msgs.msgServerError)
            })
        },
        _timeCallback: function() {
            var t = this;
            return function(e) {
                e > 0 ? t.$(".time").html(e) : t._resendBtnShift(!0)
            }
        },
        _resendBtnShift: function(t) {
            t ? (this.$resend.html(msgs.msgResend),
                this.$resend.addClass("blue-btn resendActive").removeClass("gray-btn")) : (this.$resend.removeClass("blue-btn resendActive").addClass("gray-btn"),
                this.$resend.html(this._timeHtml))
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/reglogin/PhoneSendView", function(require, e, t) {
    t.exports = Backbone.View.extend({
        id: "phoneSendView",
        className: "phone-send-view",
        $time: void 0,
        $submit: void 0,
        _timer: void 0,
        events: {
            "click .resend.active": "_onResendCode",
            "keyup #phoneCode": "_onCheckInput",
            "click #submitCode": "_onSubmit"
        },
        initialize: function() {
            this.render(),
                this._phone = this.options.phone,
                this.sendType = this.options.type ? this.options.type : "Register"
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, s, i, n) {
                    return this.compilerInfo = [4, ">= 1.0.0"],
                        s = this.merge(s, e.helpers),
                        n = n || {},
                        '<div class="control-group control-time"><div class="time-show ac"><span class="time">120</span><%=msgSenconds%></div></div><div class="control-group"><input type="text" placeholder="<%=msgInputPhoneValidate%>" id="phoneCode" name="phoneCode"><span class="help-inline message red"></span></div><div class="control-group"><a class="btn gray-btn main-btn resend"><%=msgResendValidate%></a></div><div class="control-group"><span class="btn blue-btn main-btn" id="submitCode"><%=msgSubmitValiCode%></span></div>'
                }))),
                this.$time = this.$(".time"),
                this.$submit = this.$("#submitCode"),
                this.$phoneCode = this.$("#phoneCode"),
                constants.timeCount(120, this._timeCallback()),
                this
        },
        _onCheckInput: function(e) {
            if (!$(e.target).val())
                return void this._submitBtnShift(!1);
            this._submitBtnShift(!0);
            var t = e.charCode || e.keyCode;
            return 13 == t ? void this._onSubmit() : void 0
        },
        _onResendCode: function() {
            this.$(".resend").removeClass("active"),
                clearTimeout(this._timer),
                this._submitBtnShift(!1),
                this.$phoneCode.val(""),
                constants.timeCount(120, this._timeCallback()),
                this._sendValidationMsg(this._phone || this.model.get("account"))
        },
        _sendValidationMsg: function(e) {
            resturl.sendValidationMsg({
                account: e,
                type: this.sendType,
                entId: cache.entId || 0,
                userId: cache.userId || 0
            }, function(e) {
                constants.isResponseOK(e) || noty.error(msgs.msgServerError)
            })
        },
        _onSubmit: function() {
            var e = this,
                t = this.$phoneCode.val();
            resturl.checkValidationMsg({
                account: this._phone || this.model.get("account"),
                code: t,
                type: this.sendType
            }, function(s) {
                if (constants.isResOK(s))
                    return void e.trigger("success", e._phone || e.model.get("account"), t);
                switch (s) {
                    case ErrorType.errorValidationCode:
                        noty.alert(msgs.msgValidateError);
                        break;
                    default:
                        noty.error(msgs.msgServerError)
                }
            })
        },
        _showMessage: function(e) {
            this.$(".message").html(e)
        },
        _submitBtnShift: function(e) {
            this._showMessage(""),
                this.$("#submitCode").toggleClass("blue-btn ", e).toggleClass("submitActive", e).toggleClass("gray-btn", !e)
        },
        _timeCallback: function() {
            var e = this;
            return function(t) {
                e.$(".time").html(t), !t > 0 && (e._showMessage(msgs.msgValitdateTimeOut),
                    e.$(".resend").addClass("active"))
            }
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/sharelink/ShareSettingView", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "shareSettingView",
        className: "share-setting-view",
        datePicker: void 0,
        cacheParam: [],
        $pwd: void 0,
        $cancelPwd: void 0,
        $setExpire: void 0,
        $btnCancelExpire: void 0,
        setExpireTpl: '<a class="btn btn-link set-expire" href="###">' + msgs.msgSetExpireDate + "</a>",
        events: {
            "click .set-pwd": "onSetPwd",
            "click .cancel-expire": "_onCancelExpire"
        },
        initialize: function() {
            this.addListeners(),
                this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, i, s, n) {
                    return this.compilerInfo = [4, ">= 1.0.0"],
                        i = this.merge(i, e.helpers),
                        n = n || {},
                        '<a class="btn-link set-pwd" href="###"><%=msgSetPwd%></a><span class="pipe">|</span><span class="link-expire"><a class="btn-link set-expire date" id="set-expire1" href="###"><%=msgSetExpireDate%></a></span><a class="btn-link cancel-expire hide" href="###"><%=msgCancelExpireDate%></a>'
                }), {
                    isFolder: this.model.get("file").isFolder
                })),
                this.$el.toggleClass("hide-force", this.model.get("type") == constants.shareType.upload),
                this.$pwd = this.$(".set-pwd"),
                this.$setExpire = this.$(".set-expire"),
                this.$btnCancelExpire = this.$(".cancel-expire"),
                this._onChangePwd(),
                this._onChangeExpire(),
                this
        },
        addListeners: function() {
            this.listenTo(this.model, "change:password", this._onChangePwd),
                this.listenTo(this.model, "change:expireDate", this._onChangeExpire),
                this.listenTo(this.model, "change:type", this._onChangeLinkType)
        },
        onSetPwd: function() {
            var e = this.$pwd.text() === msgs.msgCancelPwd;
            this.model.set("password", e ? void 0 : constants.generateLinkPwd()),
                this.model.updateLink(function(e) {
                    e && noty.error(e)
                })
        },
        _onCancelExpire: function() {
            this._onSetExpire(null)
        },
        _onSetExpire: function(e) {
            e ? this.model.set("expireDate", e) : this.model.unset("expireDate"),
                this._onChangeExpire(),
                this.model.updateLink(function(e) {
                    e && noty.error(e)
                })
        },
        _onChangePwd: function() {
            this.$pwd.text(this.model.get("password") ? msgs.msgCancelPwd : msgs.msgSetPwd)
        },
        _onChangeExpire: function() {
            var e = this.model.get("expireDate");
            e ? (this.model.set("expirationTime", moment(e + " 23:59:59", "YYYY-MM-DD HH:mm:ss").toDate().getTime() + ""),
                this.$(".link-expire").addClass("hide"),
                this.deleteDatePicker(),
                this.$btnCancelExpire.removeClass("hide")) : (this.model.unset("expirationTime"),
                this.$btnCancelExpire.addClass("hide"),
                this.$(".link-expire").html(this.setExpireTpl),
                this.$(".link-expire").removeClass("hide"),
                this.addDatePicker())
        },
        _onChangeLinkType: function() {
            this.$el.toggleClass("hide-force", this.model.get("type") == constants.shareType.upload),
                this.model.get("type") == constants.shareType.upload && this.model.set({
                    expireDate: null,
                    password: null,
                    expirationTime: void 0
                }),
                this.model.updateLink(function(e) {
                    e && noty.error(e)
                })
        },
        addDatePicker: function() {
            var e = this;
            this.datePicker = this.$(".set-expire").datetimepicker({
                autoclose: !0,
                startDate: new Date,
                pickerPosition: "bottom-right",
                pickTime: !1
            }).on("changeDate", function(t) {
                var i = constants.date_format(new Date(t.date.valueOf() - 288e5), "YYYY-MM-DD");
                e._onSetExpire(i)
            })
        },
        deleteDatePicker: function() {
            this.datepicker && this.datepicker.remove() && delete this.datepicker
        },
        close: function() {
            this.undelegateEvents(),
                this.off(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/sharelink/ShareInfoView", function(require, e, i) {
    i.exports = Backbone.View.extend({
        tagName: "span",
        className: "share-info-view",
        $linkPwd: void 0,
        $linkExpiredDate: void 0,
        initialize: function() {
            this.addListeners(),
                this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, t, s, n) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        t = this.merge(t, e.helpers),
                        n = n || {};
                    var a, h, l = "",
                        r = "function",
                        o = this.escapeExpression;
                    return l += '<a class="link-url" target="_blank" href="', (h = t.linkHref) ? a = h.call(i, {
                            hash: {},
                            data: n
                        }) : (h = i && i.linkHref,
                            a = typeof h === r ? h.call(i, {
                                hash: {},
                                data: n
                            }) : h),
                        l += o(a) + '">', (h = t.linkHref) ? a = h.call(i, {
                            hash: {},
                            data: n
                        }) : (h = i && i.linkHref,
                            a = typeof h === r ? h.call(i, {
                                hash: {},
                                data: n
                            }) : h),
                        l += o(a) + '</a><span class="link-pwd">', (h = t.password) ? a = h.call(i, {
                            hash: {},
                            data: n
                        }) : (h = i && i.password,
                            a = typeof h === r ? h.call(i, {
                                hash: {},
                                data: n
                            }) : h),
                        l += o(a) + '</span><span class="link-expire-date">', (h = t.expireDate) ? a = h.call(i, {
                            hash: {},
                            data: n
                        }) : (h = i && i.expireDate,
                            a = typeof h === r ? h.call(i, {
                                hash: {},
                                data: n
                            }) : h),
                        l += o(a) + "</span>"
                }), {
                    linkHref: this.model.get("linkHref"),
                    expireDate: this.model.get("expireDate")
                })),
                this.$linkPwd = this.$(".link-pwd"),
                this.$linkExpiredDate = this.$(".link-expire-date"),
                this._onChangePwd(),
                this._onChangeExpire(),
                this
        },
        addListeners: function() {
            this.listenTo(this.model, "change:password", this._onChangePwd),
                this.listenTo(this.model, "change:expireDate", this._onChangeExpire),
                this.listenTo(this.model, "change:linkHref", this._onChangeLinkHref)
        },
        _onChangePwd: function() {
            var e = this.model.get("password");
            this.$linkPwd.text(e ? _.sprintf("【%s: %s】", msgs.msgPwd, e) : "")
        },
        _onChangeLinkHref: function() {
            this.$(".link-url").html(this.model.get("linkHref")),
                this.$(".link-url").attr("href", this.model.get("linkHref"))
        },
        _onChangeExpire: function() {
            var e = this.model.get("expireDate");
            this.$linkExpiredDate.text(e ? _.sprintf("【%s: %s】", msgs.msgExpireDate, e) : "")
        },
        close: function() {
            this.undelegateEvents(),
                this.off(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/sharelink/ShareCopyView", function(require, e, i) {
    var s = require("app/commons/uikit/sharelink/ShareSettingView"),
        t = require("app/commons/uikit/sharelink/ShareInfoView");
    i.exports = Backbone.View.extend({
        tagName: "div",
        id: "shareCopy",
        shareSettingView: void 0,
        shareInfo: void 0,
        $shareSetting: void 0,
        $shareInfo: void 0,
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, s, t, n) {
                    return this.compilerInfo = [4, ">= 1.0.0"],
                        s = this.merge(s, e.helpers),
                        n = n || {},
                        '<p class="share-tip"><%=msgCopyLinkTip%></p><div class="share-info"></div><div class="share-setting"></div><div class="ac btns"><span id="createCopyFlash"></span><a class="btn btn-blue btn-link-copy"><%=msgCopyLink%></a></div>'
                }), {
                    linkHref: this.model.get("linkHref"),
                    name: this.model.get("name")
                })),
                this.$shareSetting = this.$(".share-setting"),
                this.$shareInfo = this.$(".share-info"),
                this.shareSettingView = new s({
                    model: this.model,
                    el: this.$shareSetting
                }),
                this.shareInfoView = new t({
                    model: this.model
                }),
                this.$shareInfo.html(this.shareInfoView.el),
                this.customModify(),
                this
        },
        customModify: function() {
            var e = this;
            setTimeout(function() {
                e.addCopeFlash()
            }, 1e3)
        },
        addCopeFlash: function() {
            swfobject.embedSWF("/wt/swf/clipboard.swf", "createCopyFlash", "155px", "40px", "11.1.0", "expressInstall.swf", {
                id: "createCopyFlash"
            }, {
                wmode: "transparent"
            }, {})
        },
        close: function() {
            this.undelegateEvents(),
                this.off(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/sharelink/ShareSendView", function(require, e, s) {
    var t = require("app/commons/uikit/sharelink/ShareSettingView"),
        i = require("app/commons/uikit/sharelink/ShareInfoView");
    s.exports = Backbone.View.extend({
        tagName: "div",
        id: "shareSend",
        shareSettingView: void 0,
        shareInfo: void 0,
        $shareSetting: void 0,
        $shareInfo: void 0,
        _sendInputTpl: '<li class="send-input-item"><span class="send-box <%= sendType %>"><i class="icon-custom-send-type" title="格式不支持"></i><span style="display: inline-block;max-width: 200px; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;vertical-align: middle;"><%= sendItem %></span><i class="icon-custom-remove btn-link removeSend" data="<%= sendItem %>"></i></span></li>',
        _receivers: [],
        events: {
            "click .removeSend": "onRemoveSend",
            "click .sendLink": "onSendLink",
            "blur .send-input": "_onSetSend"
        },
        initialize: function() {
            this._receivers.splice(0, this._receivers.length),
                this.render()
        },
        render: function() {
            var e = this;
            return this.$el.html(__html(Handlebars.template(function(e, s, t, i, n) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        t = this.merge(t, e.helpers),
                        n = n || {};
                    var a, r, l = "",
                        d = "function",
                        o = this.escapeExpression;
                    return l += '<p class="share-tip"><%=msgSendLinkFree%></p><div class="share-receiver"><ul class="send-input-box" style="width: 450px;"><li class="send-input-field"><input type="text" class="send-input" tabindex="0" placeholder="<%=msgInputSpace%>" style="width:436px;"></li></ul></div><div class="share-content"><div class="send-content"><label><%=msgSendContent%>:</label> ', (r = t.createUserName) ? a = r.call(s, {
                            hash: {},
                            data: n
                        }) : (r = s && s.createUserName,
                            a = typeof r === d ? r.call(s, {
                                hash: {},
                                data: n
                            }) : r),
                        l += o(a) + '<%=msgShareFileTip%><span class="share-url">', (r = t.linkHref) ? a = r.call(s, {
                            hash: {},
                            data: n
                        }) : (r = s && s.linkHref,
                            a = typeof r === d ? r.call(s, {
                                hash: {},
                                data: n
                            }) : r),
                        l += o(a) + ' <span class="link-pwd"></span> <span class="link-expire-date"></span></span></div><div class="setting-layout"><div class="blank"></div><div class="share-setting"></div></div></div><div class="ac btns"><a class="btn btn-blue btn-link-send sendLink"><%=msgSendLink%></a></div>'
                }), {
                    createUserName: this.model.get("createUserName") || this.model.get("createrName"),
                    linkHref: this.model.get("linkHref"),
                    name: this.model.get("name"),
                    isFolder: this.model.get("file").isFolder
                })),
                this.$shareSetting = this.$(".share-setting"),
                this.$shareInfo = this.$(".share-url"),
                this.shareSettingView = new t({
                    model: this.model,
                    el: this.$shareSetting
                }),
                this.shareInfoView = new i({
                    model: this.model,
                    el: this.$shareInfo
                }),
                this.$(".send-input").bind("keydown", "space return", function(s) {
                    return s.stopPropagation(),
                        s.preventDefault(),
                        e._onSetSend(s), !1
                }),
                this
        },
        _onSetSend: function(e) {
            var s = $(e.target),
                t = s.val();
            return t ? (s.val(""),
                t.match(constants.pattern.email) ? (_.uniq(this._receivers.push(t)),
                    void this.$(".send-input-field").before(_.template(this._sendInputTpl, {
                        sendType: "mail",
                        sendItem: t
                    }))) : t.match(constants.pattern.Mobile) ? (_.uniq(this._receivers.push(t)),
                    void this.$(".send-input-field").before(_.template(this._sendInputTpl, {
                        sendType: "mobile",
                        sendItem: t
                    }))) : void this.$(".send-input-field").before(_.template(this._sendInputTpl, {
                    sendType: "",
                    sendItem: t
                }))) : void 0
        },
        onRemoveSend: function(e) {
            var s = $(e.target).attr("data");
            $(e.target).parents("li.send-input-item").remove(),
                this._receivers = _.without(this._receivers, s)
        },
        onSendLink: function() {
            return 0 === this._receivers.length ? void noty.alert(msgs.msgSendMailMobileNoty) : void resturl.sendLink({
                linkId: this.model.get("linkId"),
                linkUrl: this.model.get("linkHref"),
                fileType: this.model.get("fileType"),
                receivers: this._receivers
            }, function(e) {
                if (constants.isResponseOK(e))
                    return void noty.success(msgs.msgSendSuccess);
                switch (e) {
                    case ErrorType.errorWaiting:
                        noty.error(msgs.msgSendWait);
                        break;
                    default:
                        noty.error(msgs.msgServerError)
                }
            })
        },
        close: function() {
            this.undelegateEvents(),
                this.off(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/sharelink/ShareLinkView", function(require, e, s) {
    var a = require("app/commons/uikit/sharelink/ShareCopyView"),
        i = require("app/commons/uikit/sharelink/ShareSendView");
    s.exports = Backbone.View.extend({
        tagName: "div",
        id: "shareLink",
        className: "modal modal-window fade hide share-link",
        _modelBinder: void 0,
        shareCopyView: void 0,
        shareSendView: void 0,
        $shareCopyTab: void 0,
        $shareSendTab: void 0,
        events: {
            "click #copyTab": "showShareCopy",
            "click #sendTab": "showSendView",
            "click .cancel-share": "onCancelShare",
            "click #checkHttps": "checkHttps",
            "click .close-modal": "close"
        },
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder,
                this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, s, a, i, t) {
                    function o() {
                        return "<%=msgFolder%>"
                    }

                    function n() {
                        return "<%=msgFile%>"
                    }

                    function l() {
                        return '<option value="Download" title="<%= msgShareReadDownload %>"><%=msg501%></option>'
                    }

                    function r(e, s) {
                        var i;
                        return i = a["if"].call(e, e && e.canUpload, {
                                hash: {},
                                inverse: v.noop,
                                fn: v.program(8, h, s),
                                data: s
                            }),
                            i || 0 === i ? i : ""
                    }

                    function h() {
                        return '<option value="Upload" title="<%=msgUserUpload%>"><%=msg422%></option>'
                    }

                    function d() {
                        return "true"
                    }
                    this.compilerInfo = [4, ">= 1.0.0"],
                        a = this.merge(a, e.helpers),
                        t = t || {};
                    var c, m, p = "",
                        v = this,
                        f = "function",
                        g = this.escapeExpression;
                    return p += '<div class="modal-header"><button type="button" class="close close-modal" data-dismiss="modal" aria-hidden="true">&times;</button><h3><i class="icon-custom-share-white"></i><%=msg468%>: ',
                        c = a["if"].call(s, s && s.isFolder, {
                            hash: {},
                            inverse: v.program(3, n, t),
                            fn: v.program(1, o, t),
                            data: t
                        }), (c || 0 === c) && (p += c),
                        p += '"', (m = a.name) ? c = m.call(s, {
                            hash: {},
                            data: t
                        }) : (m = s && s.name,
                            c = typeof m === f ? m.call(s, {
                                hash: {},
                                data: t
                            }) : m),
                        p += g(c) + '"</h3></div><div class="modal-body"><div><div class="inline-block left share-msg"><i class="icon-custom-ok-share"></i><%=msgShareSuccess%></div><div class="inline-block right share-operate"><a class="view-share" href="', (m = a.linkHref) ? c = m.call(s, {
                            hash: {},
                            data: t
                        }) : (m = s && s.linkHref,
                            c = typeof m === f ? m.call(s, {
                                hash: {},
                                data: t
                            }) : m),
                        p += g(c) + '" id="linkHref" target="_blank"><%=msgViewSharePage%></a><span class="pipe">|</span><a class="cancel-share"><%=msg507%></a></div><div class="clear"></div></div><div class="tabbable"><ul class="nav nav-tabs"><li id="copyTab" class="active"><a href="#tab1" data-toggle="tab"><%=msgShareLink%></a></li><li id=\'sendTab\'><a href="#tab2" data-toggle="tab"><%=msgSendMailMobile%></a></li></ul><div class="tab-content"><div class="tab-pane active share-copy-tab" id="tab1"></div><div class="tab-pane share-send-tab" id="tab2"></div></div></div><div class="share-choose"><div class="inline-block fl choosing"><span class="check-txt"><%=msgSelectShareType %>&nbsp;&nbsp;</span><select name="type" class="inline-block link-type" id="linkType"><option value="Preview" title="<%= msgShareOnlyRead %>"><%=msg421%></option>',
                        c = a["if"].call(s, s && s.canDownload, {
                            hash: {},
                            inverse: v.noop,
                            fn: v.program(5, l, t),
                            data: t
                        }), (c || 0 === c) && (p += c),
                        c = a["if"].call(s, s && s.isFolder, {
                            hash: {},
                            inverse: v.noop,
                            fn: v.program(7, r, t),
                            data: t
                        }), (c || 0 === c) && (p += c),
                        p += '</select></div><div class="inline-block fr setting"><span class=\'checkbox-sprite ',
                        c = a["if"].call(s, s && s.https, {
                            hash: {},
                            inverse: v.noop,
                            fn: v.program(10, d, t),
                            data: t
                        }), (c || 0 === c) && (p += c),
                        p += '\' id="checkHttps"><input type="checkbox" style=\'visibility:hidden\' checked="false"/></span><span><%=msg24%></span></div><div style="clear:both;"></div></div></div><div class="modal-footer"><a class="btn btn-white-blue close-modal" data-dismiss="modal"><%=msg141%></a></div>'
                }), {
                    linkHref: this.model.get("linkHref"),
                    name: constants.dealSpecialFolder(this.model.get("file").name, this.model.get("file").fileType),
                    isFolder: this.model.get("file").isFolder,
                    https: this.model.get("https"),
                    canUpload: this.model.canUpload(),
                    canDownload: this.model.canDownload()
                })),
                this.$shareCopyTab = this.$(".share-copy-tab"),
                this.$shareSendTab = this.$(".share-send-tab"),
                this.showShareCopy(),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this._modelBinder.bind(this.model, this.el),
                this
        },
        showShareCopy: function() {
            this.shareCopyView && this.shareCopyView.close(),
                this.shareCopyView = new a({
                    model: this.model
                }),
                this.$shareCopyTab.html(this.shareCopyView.el)
        },
        showSendView: function() {
            this.shareSendView && this.shareSendView.close(),
                this.shareSendView = new i({
                    model: this.model
                }),
                this.$shareSendTab.html(this.shareSendView.el)
        },
        onCancelShare: function() {
            var e = this;
            noty.confirm(msgs.msgCancelShareConfirm, function(s) {
                s && e.model.cancelLink(e._cancelShareCallback())
            })
        },
        _cancelShareCallback: function() {
            var e = this;
            return function(s) {
                if (constants.isResponseOK(s))
                    return model.messageEvent.trigger(EventType.onCancelShare, e.model.get("fileId") || e.model.get("folderId")),
                        noty.success(msgs.msgUnLinkSuccess),
                        void e.close();
                switch (s) {
                    case ErrorType.errorNoPermission:
                        noty.error(msgs.msgNoPermission);
                        break;
                    default:
                        noty.error(msgs.msgServerError)
                }
            }
        },
        checkHttps: function() {
            var e = this.model.get("https");
            this.$("#checkHttps").toggleClass("true", !e),
                this.model.set("https", !e);
            var s = constants.getShareUrl(this.model.toJSON(), this.model.get("file").fileType);
            this.model.set("linkHref", s),
                this.$(".view-share").attr("href", s),
                this.model.updateLink(function(e) {
                    e && noty.error(e)
                })
        },
        close: function() {
            this.$el.modal("hide"),
                this.undelegateEvents(),
                this.off(),
                this.remove(),
                this.shareCopyView && this.shareCopyView.close(),
                this.shareSendView && this.shareSendView.close()
        }
    })
});;
define("app/commons/uikit/support/EmptyView", function(require, t, e) {
    e.exports = Backbone.View.extend({
        $emptyTable: void 0,
        $tips: void 0,
        content: void 0,
        initialize: function() {
            this.content = this.options.content,
                this.type = this.options.type,
                this.tips = this.options.tips || {},
                this.render()
        },
        render: function() {
            switch (this.$el.append(__html(Handlebars.template(function(t, e, i, s, n) {
                    return this.compilerInfo = [4, ">= 1.0.0"],
                        i = this.merge(i, t.helpers),
                        n = n || {},
                        '<div class="empty-table" style="display: none;"><div class="empty-data"><%=msg533%></div></div>'
                }))),
                this.$emptyTable = this.$(".empty-table"),
                this.type) {
                case "empty-folder":
                    this.$emptyTable.find("div").html(__html(Handlebars.template(function(t, e, i, s, n) {
                        return this.compilerInfo = [4, ">= 1.0.0"],
                            i = this.merge(i, t.helpers),
                            n = n || {},
                            '<a class="empty-folder-upload" id="emptyFolderUpload"><span class="empty-folder-icon"></span><br/><span class="empty-folder-txt"></span></a>'
                    })));
                    break;
                case "empty-list":
                    this.$emptyTable.find("div").html(__html(Handlebars.template(function(t, e, i, s, n) {
                        this.compilerInfo = [4, ">= 1.0.0"],
                            i = this.merge(i, t.helpers),
                            n = n || {};
                        var p, h, l = "",
                            a = "function",
                            o = this.escapeExpression;
                        return l += '<div class="tips">', (h = i.tips) ? p = h.call(e, {
                                hash: {},
                                data: n
                            }) : (h = e && e.tips,
                                p = typeof h === a ? h.call(e, {
                                    hash: {},
                                    data: n
                                }) : h),
                            l += o(p) + "</div>"
                    }), {
                        tips: this.tips
                    }))
            }
            return this.$tips = this.$emptyTable.find(".tips"),
                this
        },
        changeHeight: function(t) {
            this.$emptyTable.height(t)
        },
        show: function(t) {
            this.$emptyTable.css("display", "table"),
                t && this.$tips && this.$tips.html(t)
        },
        hide: function() {
            this.$emptyTable.hide()
        },
        resetPostion: function() {
            this.$emptyTable.css({
                width: this.$el.width(),
                height: this.$el.height(),
                left: this.$el.offset().left,
                top: this.$el.offset().top
            })
        },
        close: function() {
            this.undelegateEvents(),
                this.off(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/support/HelpTipView", function(require, i, t) {
    t.exports = Backbone.View.extend({
        id: "helpTip",
        className: "help-tip",
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(i, t, e, a, s) {
                    return this.compilerInfo = [4, ">= 1.0.0"],
                        e = this.merge(e, i.helpers),
                        s = s || {},
                        '<div class="title"><span class="inline-block fl"><%=msg900%></span><a href="http://app.oatos.com/wt/register.html" target="_blank" class="inline-block subjoin fr">注册</a><div class="clear"></div></div><ul class="clients"><li><a title="windows <%=msg929%>" target="_blank" href="http://app.oatos.com/client/oatos_client.zip"><i class="icon-windows reglogin"></i></a></li><li><a title="iPhone <%=msg929%>" target="_blank" href="http://app.oatos.com/mobile/oatos_iphone.ipa"><i class="icon-iphone reglogin"></i></a></li><li><a title="Android <%=msg929%>" target="_blank" href="http://app.oatos.com/mobile/oatos_android.apk"><i class="icon-android reglogin"></i></a></li><li><a title="iPad <%=msg929%>" target="_blank" href="http://app.oatos.com/mobile/oatos_ipad.ipa"><i class="icon-ipad reglogin"></i></a></li></ul><ul class="helps hide"><li><a href="https://app.oatos.com/wt/register.html" target="_blank"><i class="icon-question-sign"></i>注册燕麦企业云盘</a></li><li><a target="_blank" href="http://www.oatos.com"><i class="icon-headphones"></i>了解燕麦企业云盘</a></li></ul>'
                }), {
                    website: this.options.website,
                    shareCenter: this.options.shareCenter
                })),
                this
        },
        close: function() {
            this.undelegateEvents(),
                this.off(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/support/LoadingView", function(require, e, i) {
    i.exports = Backbone.View.extend({
        className: "loading-view",
        $parent: void 0,
        $deferArea: void 0,
        $loadingImg: void 0,
        initialize: function() {
            this.$parent = this.options.parent,
                this.render()
        },
        render: function() {
            return this.$el.append(__html(Handlebars.template(function(e, i, t, s, n) {
                    return this.compilerInfo = [4, ">= 1.0.0"],
                        t = this.merge(t, e.helpers),
                        n = n || {},
                        '<div class="loading-view defer-area modal-backdrop hide"><img class="loading-img" src="/wt/assets/img/common/loading.gif" alt="" width="31" height="31"/></div>'
                }))),
                this.$deferArea = this.$(".defer-area"),
                this.$loadingImg = this.$(".loading-img"),
                this
        },
        setParent: function(e) {
            return this.$parent = e,
                this
        },
        isShow: function() {
            return !this.$deferArea.hasClass("hide")
        },
        show: function() {
            this.resetPosition(),
                this.$deferArea.removeClass("hide")
        },
        resetPosition: function() {
            var e = {
                width: 100,
                height: 50,
                left: "auto",
                top: "auto",
                right: "40%",
                bottom: "30%"
            };
            return this.resetCss(e),
                this
        },
        resetCss: function(e) {
            this.$deferArea.css(e)
        },
        hide: function() {
            this.$deferArea.addClass("hide")
        },
        close: function() {
            this.undelegateEvents(),
                this.off(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/support/LoadingView2", function() {
    window.LoadingView2 = Backbone.View.extend({
        className: "defer-area modal-backdrop hide",
        template: '<img class="loading-img" src="/wt/assets/img/common/loading.gif" alt=""/>',
        $deferArea: void 0,
        $loadingImg: void 0,
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(this.template),
                this.$deferArea = this.$el.find(".defer-area"),
                this.$loadingImg = this.$el.find(".loading-img"),
                this
        },
        isShow: function() {
            return !this.$deferArea.hasClass("hide")
        },
        show: function() {
            this.$deferArea.removeClass("hide")
        },
        hide: function() {
            this.$deferArea.addClass("hide")
        },
        resetPostion: function(e) {
            var i = e || this.$el;
            this.$deferArea.css({
                width: i.width(),
                height: i.height(),
                left: i.offset().left,
                top: i.offset().top
            })
        }
    })
});;
define("app/commons/uikit/support/PageView", function(require, e, t) {
    t.exports = window.PageView = Backbone.View.extend({
        tagName: "div",
        className: "page-view",
        events: {
            "click a.first": "gotoFirst",
            "click a.prev": "gotoPrev",
            "click a.next": "gotoNext",
            "click a.last": "gotoLast",
            "click a.page": "gotoPage",
            "change .howmany #changePageSize": "changeCount",
            "click a.filter": "filter"
        },
        initialize: function() {
            this.collection.on("sync", this.render, this),
                this.collection.on("reset", this.render, this),
                this.render()
        },
        render: function() {
            var e = this.collection.info();
            e.totalPages || (e.totalPages = 1),
                e.currentPage || (e.currentPage = 1),
                this.$el.html(__html(Handlebars.template(function(e, t, i, a, n) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        i = this.merge(i, e.helpers),
                        n = n || {};
                    var o, r, s = "",
                        l = "function",
                        c = this.escapeExpression;
                    return s += '<span class="inline-block page-operate"><a href="###" class="first"><i class="icon-fast-backward"></i></a>&nbsp;&nbsp;<a href="###" class="prev"><i class="icon-step-backward"></i></a>&nbsp;&nbsp;<a href="###">', (r = i.currentPage) ? o = r.call(t, {
                            hash: {},
                            data: n
                        }) : (r = t && t.currentPage,
                            o = typeof r === l ? r.call(t, {
                                hash: {},
                                data: n
                            }) : r),
                        s += c(o) + '<a>/<a href="###">', (r = i.totalPages) ? o = r.call(t, {
                            hash: {},
                            data: n
                        }) : (r = t && t.totalPages,
                            o = typeof r === l ? r.call(t, {
                                hash: {},
                                data: n
                            }) : r),
                        s += c(o) + '</a>&nbsp;&nbsp;<a href="###" class="next"><i class="icon-step-forward"></i></a>&nbsp;&nbsp;<a href="###" class="last"><i class="icon-fast-forward"></i></a></span><span class="howmany per-page"><select id="changePageSize" style="width: 45px; height:20px; padding:0;"><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="50">50</option><option value="100">100</option></select></span>'
                }), e)),
                this.$el.find("select > option").removeAttr("selected"),
                this.$el.find(_.sprintf("select > option[value=%s]", e.perPage)).attr("selected", "selected");
            var t = e.totalPages,
                i = e.currentPage;
            return this.$("a.first, a.prev").toggleClass("disabled", 1 >= i),
                this.$("a.last, a.next").toggleClass("disabled", i === t),
                this
        },
        rebind: function() {
            this.delegateEvents(),
                this.collection.on("sync", this.render, this),
                this.render()
        },
        gotoFirst: function(e) {
            e.preventDefault(),
                this.trigger(EventType.pagerStart),
                this.collection.goTo(1)
        },
        gotoPrev: function(e) {
            e.preventDefault();
            var t = this.collection.info();
            t.currentPage > 1 && (this.trigger(EventType.pagerStart),
                this.collection.prevPage())
        },
        gotoNext: function(e) {
            e.preventDefault();
            var t = this.collection.info();
            t.currentPage < t.totalPages && (this.trigger(EventType.pagerStart),
                this.collection.nextPage())
        },
        gotoLast: function(e) {
            e.preventDefault(),
                this.trigger(EventType.pagerStart),
                this.collection.goTo(this.collection.information.totalPages)
        },
        gotoPage: function(e) {
            e.preventDefault();
            var t = $(e.target).text();
            this.trigger(EventType.pagerStart),
                this.collection.goTo(t)
        },
        changeCount: function(e) {
            e.preventDefault();
            var t = parseInt($(e.target).val());
            this.collection.howManyPer(t)
        },
        getFilterField: function() {
            return $("#filterByOption").val()
        },
        getFilterValue: function() {
            return $("#filterString").val()
        },
        preserveFilterField: function(e) {
            $("#filterByOption").val(e)
        },
        preserveFilterValue: function(e) {
            $("#filterString").val(e)
        },
        filter: function(e) {
            e.preventDefault();
            var t = this.getFilterField(),
                i = this.getFilterValue();
            this.collection.setFilter(t, i),
                this.collection.pager(),
                this.preserveFilterField(t),
                this.preserveFilterValue(i)
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/support/PdfNotSupportView", function(require, a, i) {
    i.exports = Backbone.View.extend({
        tagName: "div",
        className: "modal fade hide modal-window pdf-not-support",
        settings: void 0,
        initialize: function() {
            this.render(),
                this.settings = this.options.setting
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(a, i, e, s, t) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        e = this.merge(e, a.helpers),
                        t = t || {};
                    var l, o, n = "",
                        r = "function",
                        c = this.escapeExpression;
                    return n += '<div class="modal-header"><button class="close" data-dismiss="modal" aria-hidden="true">×</button><h3>不支持预览提示</h3></div><div class="modal-body"><div class="row-fluid browser-upgrade"><h2 class="title ac">您当前的浏览器不支持该文件的预览,请升级至最新版本</h2><div class="browser-layout"><div class="setting-upgrade"><label class="setting-title inline-block">支持浏览器<a href="http://dl.oatos.com/other/chrome_installer.exe" class="blue-ie">(点击下载)</a></label><ul class="info"><li><a href="http://www.google.cn/intl/zh-CN/chrome/browser/" target="_blank"><span><i class="cs-icon-chrome"></i></span>Googlechrome</a></li><li><a href="http://www.apple.com/cn/safari/" target="_blank"><span><i class="cs-icon-safari"></i></span>Safari</a></li><li><a href="http://www.firefox.com.cn/download/" target="_blank"><span><i class="cs-icon-fireFox"></i></span>FireFox</a></li><li><a href="http://www.opera.com/zh-cn" target="_blank"><span><i class="cs-icon-opera"></i></span>Opera</a></li><li><a href="http://www.microsoft.com/zh-cn/download/internet-explorer.aspx" target="_blank"><span><i class="cs-icon-ie"></i></span>IE8以上版本</a></li></ul></div></div></div><div class="row-fluid">或者, 下载该文件PDF格式: <a href="', (o = e.pdfUrl) ? l = o.call(i, {
                            hash: {},
                            data: t
                        }) : (o = i && i.pdfUrl,
                            l = typeof o === r ? o.call(i, {
                                hash: {},
                                data: t
                            }) : o),
                        n += c(l) + '" target="_blank">', (o = e.fileName) ? l = o.call(i, {
                            hash: {},
                            data: t
                        }) : (o = i && i.fileName,
                            l = typeof o === r ? o.call(i, {
                                hash: {},
                                data: t
                            }) : o),
                        n += c(l) + '</a></div></div><div class="modal-footer"><button class="btn btn-blue" data-dismiss="modal"> 关闭</button></div>'
                }), {
                    pdfUrl: this.options.pdfUrl,
                    fileName: this.options.fileName
                })),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this
        },
        close: function() {
            this.$el.modal("hide"),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/support/SearchBox", function(require, t, e) {
    e.exports = window.SearchBox = Backbone.View.extend({
        className: "input-append",
        settingObj: void 0,
        events: {
            "click .btn-search": "_onSearch"
        },
        initialize: function() {
            this.settingObj = this.options.settingObj,
                this.render()
        },
        render: function() {
            this._initSettingObj(),
                this.$el.html(__html(Handlebars.template(function(t, e, i, n, s) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        i = this.merge(i, t.helpers),
                        s = s || {};
                    var o, a, r = "",
                        h = "function",
                        c = this.escapeExpression;
                    return r += '<input class="input-medium keyword" type="text" placeholder="', (a = i.title) ? o = a.call(e, {
                            hash: {},
                            data: s
                        }) : (a = e && e.title,
                            o = typeof a === h ? a.call(e, {
                                hash: {},
                                data: s
                            }) : a),
                        r += c(o) + '"><a class="btn btn-search custom-btn"><i class="icon-custom-search"></i></a>'
                }), this.settingObj));
            var t = this;
            return this.$(".keyword").bind("keydown", "return", function(e) {
                    return e.stopPropagation(),
                        e.preventDefault(),
                        t._onSearch(), !1
                }),
                this
        },
        rebind: function() {
            this.delegateEvents(),
                this.$el.find(".keyword").val("")
        },
        _initSettingObj: function() {
            !this.settingObj && (this.settingObj = {}),
                _.defaults(this.settingObj, {
                    title: msgs.msg540
                })
        },
        _onSearch: function() {
            this.trigger(EventType.onSearch, this.$el.find(".keyword").val())
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/support/SearchAndBackView", function(require, e, s) {
    var t = require("app/commons/uikit/support/SearchBox");
    s.exports = Backbone.View.extend({
        $searchBox: void 0,
        $searchGobackBtn: void 0,
        settingObj: void 0,
        events: {
            "click .form-search-custom .search-goback-btn": "_searchGoBack"
        },
        initialize: function() {
            this.settingObj = this.options.settingObj,
                this.render()
        },
        render: function() {
            this.$el.append(__html(Handlebars.template(function(e, s, t, a, i) {
                    return this.compilerInfo = [4, ">= 1.0.0"],
                        t = this.merge(t, e.helpers),
                        i = i || {},
                        '<div class="form-search-custom pull-right fileSelectSearch"><div class="searchBox"><div class="btn hide search-goback-btn"><i class="icon-chevron-left"></i> <span><%=msgGoBack%></span> <span class="separate-border"></span></div></div></div>'
                }))),
                this.$searchBox = this.$(".form-search-custom .searchBox"),
                this.$searchGobackBtn = this.$(".form-search-custom .search-goback-btn"),
                this.searchBox = new t({
                    settingObj: this.settingObj
                }),
                this.searchBox.on(EventType.onSearch, this._onSearch, this),
                this.$(".searchBox").append(this.searchBox.el)
        },
        _onSearch: function(e) {
            this.trigger(EventType.onSearch, e),
                this.$searchBox.addClass("input-prepend input-append search-box"),
                this.$searchGobackBtn.toggleClass("hide", !e)
        },
        _searchGoBack: function() {
            this.searchBox.$(".keyword").val(""),
                this.trigger(EventType.onSearch),
                this.$searchBox.removeClass("input-prepend input-append search-box"),
                this.$searchGobackBtn.addClass("hide")
        },
        close: function() {
            this.undelegateEvents(),
                this.off(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/support/TipsWindow", function() {
    window.TipsWindow = Backbone.View.extend({
        tagName: "div",
        id: "tipsWindow",
        className: "modal fade hide modal-window tips-window",
        passInfo: void 0,
        settingObj: void 0,
        events: {
            "click .ok-confirm-btn": "okConfirm",
            "click .cancel-confirm-btn": "cancelConfirm"
        },
        initialize: function() {
            this.passInfo = this.options.passInfo,
                this.settingObj = this.options.settingObj,
                this.render()
        },
        render: function() {
            return this.initSettingObj(),
                this.$el.html(__html(Handlebars.template(function(t, n, s, i, a) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        s = this.merge(s, t.helpers),
                        a = a || {};
                    var e, o, c = "",
                        d = "function",
                        l = this.escapeExpression;
                    return c += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 class="modal-header-title"><span class="modal-header-icon"><i class="', (o = s.headerIcon) ? e = o.call(n, {
                            hash: {},
                            data: a
                        }) : (o = n && n.headerIcon,
                            e = typeof o === d ? o.call(n, {
                                hash: {},
                                data: a
                            }) : o),
                        c += l(e) + '"></i></span><span>', (o = s.headerText) ? e = o.call(n, {
                            hash: {},
                            data: a
                        }) : (o = n && n.headerText,
                            e = typeof o === d ? o.call(n, {
                                hash: {},
                                data: a
                            }) : o),
                        c += l(e) + '</span></h3></div><div class="modal-body"><div class="tips-info"><div class="body-icon"><i class="tips-warn-icon"></i></div><div class="body-tips"><%=msg541%></div></div><div class="deal-btn"><span class="btn ok-confirm-btn"><span class="deal-btn-icon"><i class="', (o = s.okBtnIcon) ? e = o.call(n, {
                            hash: {},
                            data: a
                        }) : (o = n && n.okBtnIcon,
                            e = typeof o === d ? o.call(n, {
                                hash: {},
                                data: a
                            }) : o),
                        c += l(e) + '"></i></span><span>', (o = s.okBtnText) ? e = o.call(n, {
                            hash: {},
                            data: a
                        }) : (o = n && n.okBtnText,
                            e = typeof o === d ? o.call(n, {
                                hash: {},
                                data: a
                            }) : o),
                        c += l(e) + '</span></span><span class="btn cancel-confirm-btn"><span class="deal-btn-icon"><i class="', (o = s.cancelBtnIcon) ? e = o.call(n, {
                            hash: {},
                            data: a
                        }) : (o = n && n.cancelBtnIcon,
                            e = typeof o === d ? o.call(n, {
                                hash: {},
                                data: a
                            }) : o),
                        c += l(e) + '"></i></span><span>', (o = s.cancelBtnText) ? e = o.call(n, {
                            hash: {},
                            data: a
                        }) : (o = n && n.cancelBtnText,
                            e = typeof o === d ? o.call(n, {
                                hash: {},
                                data: a
                            }) : o),
                        c += l(e) + "</span></span></div></div>"
                }), this.settingObj)),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this
        },
        initSettingObj: function() {
            this.settingObj || (this.settingObj = {}),
                void 0 == this.settingObj.headerIcon && (this.settingObj.headerIcon = "hide-important"),
                void 0 == this.settingObj.headerText && (this.settingObj.headerText = msgs.msgInfoTip),
                void 0 == this.settingObj.okBtnIcon && (this.settingObj.okBtnIcon = "btn-ok-icon"),
                void 0 == this.settingObj.okBtnText && (this.settingObj.okBtnText = msgs.msg86),
                void 0 == this.settingObj.cancelBtnIcon && (this.settingObj.cancelBtnIcon = "btn-cancel-icon"),
                void 0 == this.settingObj.cancelBtnText && (this.settingObj.cancelBtnText = msgs.msg87)
        },
        okConfirm: function() {
            this.trigger(EventType.secondConfirm, this.passInfo)
        },
        cancelConfirm: function() {
            this.trigger(EventType.secondConfirm, !1)
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/user/AddDepartmentWindow", function(require, e, s) {
    var i = require("app/commons/models/permission/PermissionDTO");
    s.exports = Backbone.View.extend({
        tagName: "div",
        id: "addDepartmentWindow",
        className: "modal fade hide modal-window add-dept-window",
        _parent: void 0,
        _modelBinder: void 0,
        _permissionBinder: void 0,
        _checkedAllPermissions: {
            read: !0,
            write: !0,
            "delete": !0,
            upload: !0,
            download: !0,
            share: !0,
            local: !0
        },
        _unCheckedAllPermissions: {
            read: !1,
            write: !1,
            "delete": !1,
            upload: !1,
            download: !1,
            share: !1,
            local: !1
        },
        selectedPermission: void 0,
        events: {
            "click .permission-checks .checkbox-sprite": "onTogglePermission",
            "click .check-all": "onCheckAll",
            "click .create-confirm": "onConfirm",
            "click .close": "close"
        },
        initialize: function() {
            this._parent = this.options.parent,
                this.selectedPermission = new i(this.model.get("permission")),
                this._modelBinder = new Backbone.ModelBinder,
                this._permissionBinder = new Backbone.ModelBinder,
                this.model.get("availableDiskSize") && this.model.set("availableDiskSize", 1024 * this.model.get("availableDiskSize") * 1024 * 1024),
                this.addListeners(),
                this.render()
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, s, i, t, a) {
                    return this.compilerInfo = [4, ">= 1.0.0"],
                        i = this.merge(i, e.helpers),
                        a = a || {},
                        '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true" id="closeModal">&times;</button><h3><%=msgNewDept%></h3></div><div class="modal-body old-modal"><div class="department"><input type="text" class="dept-name" name="deptName" data-placement="<%=msgNewDeptTip%>" placeholder="<%=msgNewDeptTip%>"></div><div class="hr"></div><div class="radios"><span class="radio-item"><input type="radio" name="isDefault" checked="checked" value="true"><span class="check-txt"><%=msgDefaultSetting%></span></span><span class="radio-item"><input type="radio" name="isDefault" value="false"><span class="check-txt"><%=msgCustomSetting%></span></span></div><div class="settings"><div class="default-setting"><ul><li>1.创建部门后系统会自动创建关联此部门的部门文件夹,空间默认<b>无限制</b></li><li>2.此部门下的成员默认享有部门文件夹下<b>“全部”</b>权限</li><li>3.如果需要自定文件夹空间和权限,请选择<b>自定义设置</b></li></ul></div><div class="custom-setting hide"><div class="title"><span class="left"><%=msgDeptPermission%></span><span class="opt right"><span class=\'check-all checkbox-sprite\'></span><span class="check-txt"><%=msgSelectAll%></span></span><div style="clear:both"></div></div><div class="permission"><ul class="permission-checks"><li><span class=\'checkbox-sprite\' name="read"></span><span class="check-txt"><%=msg260%></span></li><li><span class=\'checkbox-sprite\' name="upload"></span><span class="check-txt"><%=msg258%></span></li><li><span class=\'checkbox-sprite\' name="download"></span><span class="check-txt"> <%=msg259%></span></li><li><span class=\'checkbox-sprite\' name="share"></span><span class="check-txt"><%=msg262%></span></li><li><span class=\'checkbox-sprite\' name="write"></span><span class="check-txt"><%=msg264%></span></li><li><span class=\'checkbox-sprite\' name="delete"></span><span class="check-txt"><%=msg156%></span></li><li><span class=\'checkbox-sprite\' name="local"></span><span class="check-txt"><%=msg435%></span></li></ul></div><div class="title"><%=msgDeptFolderSize%></div><div class="space"><div class="inline-block left"><%=msgAllocateSpace%><input type=\'text\' class="input-space" name="space" placeholder="<%=msgNoLimit%>"/>GB<span class="light">(<%=msgAvailSize%>:<span name="availSize"></span>)</span></div><a class="btn btn-blue expand-btn right" href="#" target="_blank"><%=msgExpandSpace%></a><div style="clear:both"></div></div></div></div><div class="btns ac"><span class="btn btn-blue create-confirm">&nbsp;<%=msgCreate%></span></div></div>'
                }))),
                seajs.isPrivate ? this.$(".expand-btn").remove() : this.$(".expand-btn").attr("href", constants.getBuyUrl()),
                this.model.set("availSize", "-");
            var e = {
                isDefault: {
                    selector: "[name=isDefault]",
                    converter: this.defaultSettingConverter()
                },
                name: {
                    selector: "[name=deptName]"
                },
                availSize: {
                    selector: "[name=availSize]"
                }
            };
            this._modelBinder.bind(this.model, this.el, e),
                this.getAllocatableDiskSizeAsync();
            var s = Backbone.ModelBinder.createDefaultBindings(this.$el.find(".permission-checks"), "name", this.permissionConverter, "class");
            return this._permissionBinder.bind(this.selectedPermission, this.$el.find(".permission-checks"), s),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this.onChangePermission(),
                this.$(".dept-name").focus(),
                this
        },
        addListeners: function() {
            this.listenTo(this.model, "change:isDefault", this.onChangeDefault),
                this.listenTo(this.selectedPermission, "change", this.onChangePermission)
        },
        defaultSettingConverter: function() {
            var e = this;
            return function(s, i) {
                var t = 1 == i || "true" == i;
                return e.$(".default-setting").toggleClass("hide", !t),
                    e.$(".custom-setting").toggleClass("hide", t),
                    t ? "true" : "false"
            }
        },
        onCheckAll: function() {
            var e = this.$(".check-all").hasClass("true");
            return e ? void this.selectedPermission.set(this._unCheckedAllPermissions) : void this.selectedPermission.set(this._checkedAllPermissions)
        },
        onChangePermission: function() {
            var e = _.keys(_.pick(this.selectedPermission.toJSON(), function(e) {
                return !!e
            }));
            this.$(".check-all").toggleClass("true", e.length >= 7)
        },
        onChangeDefault: function() {
            "true" === this.model.get("isDefault") ? (this.model.set("space", void 0),
                this.model.set("maxSize", void 0),
                this.selectedPermission.set(this._checkedAllPermissions)) : this.getAllocatableDiskSizeAsync()
        },
        getAllocatableDiskSizeAsync: function() {
            var e = this;
            this._parent ? this._parent.getAllocatableDiskSizeAsync(function(s) {
                e.model.set("availableDiskSize", s),
                    e.$("[name=availSize]").text(constants.convertSize(s))
            }) : model.currentEnterprise.getAllocatableDiskSize(function(s) {
                e.model.set("availableDiskSize", s),
                    e.$("[name=availSize]").text(constants.convertSize(s))
            })
        },
        onTogglePermission: function(e) {
            var s = $(e.target).hasClass("true"),
                i = $(e.target).attr("name");
            this.selectedPermission.set(i, !s)
        },
        permissionConverter: function(e, s) {
            return "checkbox-sprite " + (s && "true")
        },
        onConfirm: function() {
            this.model.set({
                permission: this.selectedPermission.toJSON(),
                name: $.trim(this.model.get("name"))
            });
            var e = this.model.get("name");
            if (!e)
                return void noty.alert(msgs.msgInputDeptName);
            if (e.length > 60 || e.length < 1)
                return void noty.alert(msgs.msgDeptLongError);
            if (constants.pattern.fileName.test(e))
                return noty.alert(msgs.msgNameDeptError), !1;
            var s = this.$("[name=isDefault]:checked").val();
            if ("true" === s)
                return void this.trigger(EventType.confirm, this.model);
            var i = $.trim(this.$(".input-space").val());
            i && !i.match(constants.pattern.integer) ? noty.alert(msgs.msgSpaceFomat) : 1024 * i * 1024 * 1024 > this.model.get("availableDiskSize") ? noty.error(msgs.msgDiskLessAssign) : (this.model.set("maxSize", parseInt(i)),
                this.trigger(EventType.confirm, this.model))
        },
        close: function() {
            this.$el.modal("hide"),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/user/ColleagueSelectTree", function(require, e, t) {
    var i = require("app/commons/models/user/DepartmentListDTO"),
        s = require("app/commons/models/user/UserListDTO");
    t.exports = Backbone.View.extend({
        tagName: "ul",
        id: "contactSelectTree",
        className: "contactSelectTree ztree user-tree overflow-auto",
        zTree: void 0,
        hideNodes: [],
        departmentList: void 0,
        userList: void 0,
        settingObj: void 0,
        initialize: function() {
            this.departmentList = new i,
                this.departmentList.fetchDepts(!1),
                this.userList = new s,
                this.settingObj = this.options.settingObj,
                this.initSettingObj(),
                this.listenTo(this.departmentList, EventType.loadDepartment, this.addDepartmentNodes),
                this.listenTo(this.userList, EventType.addUserEvent, this.onAddUser),
                this.render()
        },
        render: function() {
            this.$el.html(" "),
                this.onChangeHeight();
            var e = this;
            this.zTree = $.fn.zTree.init(this.$el, {
                    view: {
                        dblClickExpand: !1,
                        showLine: !1,
                        selectedMulti: !1,
                        addDiyDom: function(t, i) {
                            e.showAvatar(i, e),
                                e.settingObj && e.settingObj.showDeptDiyBtn && e.showAddDeptUsersBtn(i, e)
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
                        beforeExpand: function(t, i) {
                            i && "department" === i.type && e._expandDept(i.id)
                        },
                        beforeClick: function(t, i) {
                            if (e.zTree.expandNode(i),
                                "user" === i.type) {
                                var s = e.userList.get(i.id);
                                e.settingObj.showPath && !s.get("deptPath") && s.set("deptPath", e.departmentList.getDeptPath(s.get("deptId"))),
                                    e.trigger(EventType.selectUser, s)
                            }
                            if ("department" === i.type) {
                                e._expandDept(i.id);
                                var n = e.departmentList.get(i.id);
                                e.settingObj.showPath && !n.get("deptPath") && n.set("deptPath", e.departmentList.getDeptPath(n.id)),
                                    e.trigger(EventType.selectDept, n)
                            }
                            return !0
                        },
                        onCheck: function(t, i, s) {
                            return "user" === s.type && e.trigger(EventType.checkUser, e.userList.get(s.id), s.checked),
                                "department" === s.type && e.trigger(EventType.checkDept, e.departmentList.get(s.id), s.checked), !0
                        },
                        onNodeCreated: function(t, i, s) {
                            var n = "#" + s.tId + "_a";
                            e.$el.find(n).addClass(s.type);
                            var d = "#" + s.tId + "_check";
                            if (e.$el.find(d).attr("name", s.type + "_chk"),
                                "user" == s.type && e.settingObj.hideAdmins) {
                                var r = e.userList.get(s.id);
                                (r.isAdmin() || r.isSecAdmin()) && e.zTree.hideNode(s)
                            }
                        }
                    }
                }, []),
                setTimeout(function() {
                    e.departmentList.length && e.addDepartmentNodes(e.departmentList)
                }, 100)
        },
        initSettingObj: function() {
            this.settingObj || (this.settingObj = {}),
                _.defaults(this.settingObj, {
                    hideAdmins: !1
                })
        },
        showAvatar: function(e, t) {
            if ("user" === e.type) {
                var i = t.userList.get(e.id),
                    s = t.$el.find("#" + e.tId + "_a .button"),
                    n = i.get("icon") || constants.defaultIcon,
                    d = "<img alt='avatar' src='" + n + "' >";
                s.append(d)
            }
        },
        showAddDeptUsersBtn: function(e, t) {
            if ("user" != e.type) {
                var i = t.$el.find("#" + e.tId + "_a"),
                    s = '<span class="add-dept-users"><i></i></span>';
                i.append(s),
                    i.find(".add-dept-users").bind("click", function() {
                        t.trigger(EventType.addDeptUsers, t.departmentList.get(e.id))
                    })
            }
        },
        close: function() {
            this.undelegateEvents(),
                this.remove()
        },
        rebind: function() {
            this.initialize(),
                this.delegateEvents()
        },
        onChangeHeight: function(e) {
            this.$el.height(e ? e : model.setting.getUsualContactTreeHeight() - 40)
        },
        reset: function() {
            this.zTree.checkAllNodes(!1)
        },
        hideUsers: function(e) {
            this.hideNodes && this.hideNodes.length && (this.zTree.showNodes(this.hideNodes),
                    this.hideNodes = []),
                _.each(e, function(e) {
                    var t = this.zTree.getNodeByParam("id", e);
                    t && (this.zTree.hideNode(t),
                        this.hideNodes.push(t))
                }, this)
        },
        showUsers: function() {
            var e = this.zTree.getNodesByParam("isHidden", !0);
            this.zTree.showNodes(e)
        },
        checkedUsers: function(e) {
            this.zTree.checkAllNodes(!1);
            var t = this;
            _.each(e, function(e) {
                var i = t.zTree.getNodeByParam("id", e.id);
                i && t.zTree.checkNode(i, !0)
            })
        },
        checkedUserIds: function(e) {
            var t = this;
            this.zTree.checkAllNodes(!1),
                _.each(e, function(e) {
                    var i = t.zTree.getNodeByParam("id", e);
                    i && t.zTree.checkNode(i, !0)
                })
        },
        getCheckUsers: function() {
            var e = this.zTree.getCheckedNodes(!0);
            return _.map(_.where(e, {
                type: "user"
            }), function(e) {
                return this.userList.get(e.id)
            }, this)
        },
        getCheckUserIds: function() {
            var e = this.zTree.getCheckedNodes(!0);
            return _.map(_.where(e, {
                type: "user"
            }), function(e) {
                return e.id
            })
        },
        getCheckedDepartIds: function() {
            var e = this.zTree.getCheckedNodes(!0);
            return e.length ? _.map(_.where(e, {
                type: "department"
            }), function(e) {
                return e.id
            }) : []
        },
        getSelectUserId: function() {
            var e = this.zTree.getSelectedNodes();
            return e.length && "user" === e[0].type ? e[0].id : null
        },
        getSelectDeptId: function() {
            var e = this.zTree.getSelectedNodes();
            return e.length && "department" === e[0].type ? e[0].id : null
        },
        getSelectUser: function() {
            return this.userList.get(this.getSelectUserId())
        },
        showCheckbox: function(e) {
            this.zTree.setting.check.enable = e
        },
        isCheckbox: function() {
            return this.zTree.setting.check.enable
        },
        addDepartmentNodes: function(e) {
            if (e.each(function(t) {
                    this._addDepartmentNode(e, t)
                }, this),
                this.settingObj.selectDeptId) {
                var t = this.zTree.getNodeByParam("id", this.settingObj.selectDeptId);
                t && (this.zTree.selectNode(t, !1),
                    this.zTree.expandNode(t, !0, !1, !0, !0))
            }
        },
        _addDepartmentNode: function(e, t) {
            if (t) {
                var i = this.zTree.getNodeByParam("id", t.id);
                if (i)
                    return i;
                var s = null;
                t.get("parentId") && (s = this.zTree.getNodeByParam("id", t.get("parentId")),
                    s || (s = this._addDepartmentNode(e, e.get(t.get("parentId")))));
                var n = this.zTree.addNodes(s, {
                    id: t.get("departmentId"),
                    parentId: t.get("parentId") || 0,
                    name: t.get("name"),
                    open: !1,
                    type: "department",
                    isParent: !0
                }, !0);
                return this.addUserNodes(this.userList.where({
                        deptId: t.get("departmentId")
                    })),
                    n[0]
            }
        },
        addUserNodes: function(e) {
            _.each(e, function(e) {
                this.addUserNode(e, !0)
            }, this)
        },
        onAddUser: function(e) {
            this.addUserNode(e, !1)
        },
        addUserNode: function(e, t) {
            var i = e.get("deptId") ? this.zTree.getNodeByParam("id", e.get("deptId")) : null;
            this.zTree.addNodes(i, {
                id: e.get("userId"),
                parentId: e.get("deptId") || 0,
                name: e.get("nameAccount") || e.get("userName"),
                open: !1,
                type: "user",
                isParent: !1,
                iconSkin: "user_avatar"
            }, t)
        },
        _expandDept: function(e) {
            var t = this,
                i = this.userList.findWhere({
                    deptId: e
                });
            i || this.userList.fetchDeptUsers(e, function(e) {
                t.userList.add(e),
                    t.addUserNodes(e)
            })
        }
    })
});;
define("app/commons/uikit/user/ColleagueSelectWindow", function(require, e, s) {
    var t = require("app/commons/uikit/user/ColleagueSelectTree"),
        i = require("app/commons/uikit/user/SearchUsersView");
    s.exports = window.UserSelectWindow = Backbone.View.extend({
        tagName: "div",
        id: "colleagueSelectWindow",
        className: "singleSelectModal modal fade hide modal-window",
        collectionBinder: void 0,
        userTree: void 0,
        searchUsersView: void 0,
        departmentList: void 0,
        userList: void 0,
        selectedUser: void 0,
        settingObj: void 0,
        events: {
            "click .ok-user-select-btn": "addMember",
            "click .close-modal": "close",
            "click .btn-search": "searchDepartmentUser",
            "click div.cancel-search-btn span": "cancelSearchUser"
        },
        initialize: function() {
            this.settingObj = this.options.settingObj,
                this.initSettingObj(),
                this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, s, t, i, n) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        t = this.merge(t, e.helpers),
                        n = n || {};
                    var a, c, l = "",
                        r = "function",
                        d = this.escapeExpression;
                    return l += '<div class="modal-header"><button type="button" class="close close-modal" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-header-title"><span class="modal-header-icon"><i class="', (c = t.headerIcon) ? a = c.call(s, {
                            hash: {},
                            data: n
                        }) : (c = s && s.headerIcon,
                            a = typeof c === r ? c.call(s, {
                                hash: {},
                                data: n
                            }) : c),
                        l += d(a) + '"></i></span><span>', (c = t.headerText) ? a = c.call(s, {
                            hash: {},
                            data: n
                        }) : (c = s && s.headerText,
                            a = typeof c === r ? c.call(s, {
                                hash: {},
                                data: n
                            }) : c),
                        l += d(a) + '</span></h3></div><div class="modal-body old-modal"><div class="modal-user-title"><%=msg239%></div><div class="list-box common-box"><div class="input-append"><input type="text" placeholder="<%=msg540%>" name="keyword" class="input-medium input-search"><a class="btn btn-search custom-btn"><div class="search-btn-border"></div><i class="icon-custom-search"></i></a></div><div id="userTreeModal" class="tree-list"></div><div class="search-list cancel-search-btn"><span><%=msg242%></span></div></div></div><div class="modal-footer"><span class="btn ok-user-select-btn btn-blue">', (c = t.okBtnText) ? a = c.call(s, {
                            hash: {},
                            data: n
                        }) : (c = s && s.okBtnText,
                            a = typeof c === r ? c.call(s, {
                                hash: {},
                                data: n
                            }) : c),
                        l += d(a) + '</span><span class="btn btn-white-blue close-modal">', (c = t.cancelBtnText) ? a = c.call(s, {
                            hash: {},
                            data: n
                        }) : (c = s && s.cancelBtnText,
                            a = typeof c === r ? c.call(s, {
                                hash: {},
                                data: n
                            }) : c),
                        l += d(a) + "</span></div>"
                }), this.settingObj)),
                this.userTree = new t({
                    id: "colleagueSelectTree",
                    settingObj: this.settingObj
                }),
                this.userTree.onChangeHeight(269),
                this.userTree.on(EventType.selectUser, this.onSelectUser, this),
                this.$el.find("#userTreeModal").html(this.userTree.el),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this._bindEnter(),
                this
        },
        initSettingObj: function() {
            this.settingObj || (this.settingObj = {}),
                _.defaults(this.settingObj, {
                    showDeptDiyBtn: !1,
                    showPath: !1,
                    headerIcon: "users-select-icon",
                    headerText: msgs.msg239,
                    okBtnIcon: "btn-ok-icon",
                    okBtnText: msgs.msg86,
                    cancelBtnIcon: "btn-cancel-icon",
                    cancelBtnText: msgs.msg87
                })
        },
        _bindEnter: function() {
            var e = this;
            this.$el.find(".input-append input.input-search").bind("keydown", "return", function(s) {
                s.stopPropagation(),
                    s.preventDefault(),
                    e.$(".btn-search").click()
            })
        },
        searchDepartmentUser: function() {
            var e = this.$el.find(".input-append .input-medium").val();
            e && (this.$el.find(".contactSelectTree").hide(),
                this.searchUsersView || (this.searchUsersView = new i({
                        settingObj: {
                            hideAdmins: this.settingObj.hideAdmins,
                            isShowSelf: this.settingObj.isShowSelf
                        }
                    }),
                    this.searchUsersView.onChangeHeight(245),
                    this.$el.find("#userTreeModal").append(this.searchUsersView.el)),
                this.$el.find(".search-list").show(),
                this.searchUsersView.doSearch(e),
                this.searchUsersView.on(EventType.selectUser, this.onSelectUser, this))
        },
        cancelSearchUser: function() {
            this.$el.find(".search-list").hide(),
                this.$el.find(".contactSelectTree").show(),
                this.$el.find(".input-medium").val("")
        },
        onSelectUser: function(e) {
            return e && e.get("userId") ? (this.selectedUser || (this.selectedUser = new UserDTO),
                void this.selectedUser.set(e.toJSON())) : !1
        },
        addMember: function() {
            return this.selectedUser ? (this.selectedUser && !this.selectedUser.get("userId") && (this.selectedUser = void 0),
                this.trigger(EventType.selectUsers, this.selectedUser),
                void this.close()) : void noty.alert(msgs.msgSelectColleague)
        },
        close: function() {
            this.$el.modal("hide"),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/user/ContactSelectTree", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "ul",
        id: "contactSelectTree",
        className: "contactSelectTree ztree user-tree overflow-auto",
        zTree: void 0,
        hideNodes: [],
        departmentList: void 0,
        userList: void 0,
        settingObj: void 0,
        initialize: function() {
            this.departmentList = this.options.departmentList,
                this.userList = this.options.userList,
                this.settingObj = this.options.settingObj,
                this.initSettingObj(),
                this.listenTo(this.departmentList, EventType.loadDepartment, this.addDepartmentNodes),
                this.listenTo(this.userList, EventType.addUserEvent, this.onAddUser),
                this.render()
        },
        render: function() {
            this.$el.html(" "),
                this.onChangeHeight();
            var e = this;
            this.zTree = $.fn.zTree.init(this.$el, {
                    view: {
                        dblClickExpand: !1,
                        showLine: !1,
                        selectedMulti: !1,
                        addDiyDom: function(t, i) {
                            e.showAvatar(i, e),
                                e.settingObj && e.settingObj.showDeptDiyBtn && e.showAddDeptUsersBtn(i, e)
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
                        beforeClick: function(t, i) {
                            return e.zTree.expandNode(i),
                                "user" === i.type && e.trigger(EventType.selectUser, e.userList.get(i.id)),
                                "department" === i.type && e.trigger(EventType.selectDept, e.departmentList.get(i.id)), !0
                        },
                        onCheck: function(t, i, s) {
                            return "user" === s.type && e.trigger(EventType.checkUser, e.userList.get(s.id), s.checked),
                                "department" === s.type && e.trigger(EventType.checkDept, e.departmentList.get(s.id), s.checked), !0
                        },
                        onNodeCreated: function(t, i, s) {
                            var n = "#" + s.tId + "_a";
                            e.$el.find(n).addClass(s.type);
                            var d = "#" + s.tId + "_check";
                            if (e.$el.find(d).attr("name", s.type + "_chk"),
                                "user" == s.type && e.settingObj.hideAdmins) {
                                var r = e.userList.get(s.id);
                                (r.isAdmin() || r.isSecAdmin()) && e.zTree.hideNode(s)
                            }
                        }
                    }
                }, []),
                setTimeout(function() {
                    e.departmentList.length && e.addDepartmentNodes(e.departmentList)
                }, 100)
        },
        initSettingObj: function() {
            this.settingObj || (this.settingObj = {}),
                _.defaults(this.settingObj, {
                    hideAdmins: !1
                })
        },
        showAvatar: function(e, t) {
            if ("user" === e.type) {
                var i = t.userList.get(e.id),
                    s = t.$el.find("#" + e.tId + "_a .button"),
                    n = i.get("icon") || constants.defaultIcon,
                    d = "<img alt='avatar' src='" + n + "' >";
                s.append(d)
            }
        },
        showAddDeptUsersBtn: function(e, t) {
            if ("user" != e.type) {
                var i = t.$el.find("#" + e.tId + "_a"),
                    s = '<span class="add-dept-users"><i></i></span>';
                i.append(s),
                    i.find(".add-dept-users").bind("click", function() {
                        t.trigger(EventType.addDeptUsers, t.departmentList.get(e.id))
                    })
            }
        },
        close: function() {
            this.undelegateEvents(),
                this.remove()
        },
        rebind: function() {
            this.initialize(),
                this.delegateEvents()
        },
        onChangeHeight: function(e) {
            this.$el.height(e ? e : model.setting.getUsualContactTreeHeight() - 40)
        },
        reset: function() {
            this.zTree.checkAllNodes(!1)
        },
        hideUsers: function(e) {
            this.hideNodes && this.hideNodes.length && (this.zTree.showNodes(this.hideNodes),
                    this.hideNodes = []),
                _.each(e, function(e) {
                    var t = this.zTree.getNodeByParam("id", e);
                    t && (this.zTree.hideNode(t),
                        this.hideNodes.push(t))
                }, this)
        },
        showUsers: function() {
            var e = this.zTree.getNodesByParam("isHidden", !0);
            this.zTree.showNodes(e)
        },
        checkedUsers: function(e) {
            this.zTree.checkAllNodes(!1);
            var t = this;
            _.each(e, function(e) {
                var i = t.zTree.getNodeByParam("id", e.id);
                i && t.zTree.checkNode(i, !0)
            })
        },
        checkedUserIds: function(e) {
            var t = this;
            this.zTree.checkAllNodes(!1),
                _.each(e, function(e) {
                    var i = t.zTree.getNodeByParam("id", e);
                    i && t.zTree.checkNode(i, !0)
                })
        },
        getCheckUsers: function() {
            var e = this.zTree.getCheckedNodes(!0);
            return _.map(_.where(e, {
                type: "user"
            }), function(e) {
                return this.userList.get(e.id)
            }, this)
        },
        getCheckUserIds: function() {
            var e = this.zTree.getCheckedNodes(!0);
            return _.map(_.where(e, {
                type: "user"
            }), function(e) {
                return e.id
            })
        },
        getCheckedDepartIds: function() {
            var e = this.zTree.getCheckedNodes(!0);
            return e.length ? _.map(_.where(e, {
                type: "department"
            }), function(e) {
                return e.id
            }) : []
        },
        getSelectUserId: function() {
            var e = this.zTree.getSelectedNodes();
            return e.length && "user" === e[0].type ? e[0].id : null
        },
        getSelectDeptId: function() {
            var e = this.zTree.getSelectedNodes();
            return e.length && "department" === e[0].type ? e[0].id : null
        },
        getSelectUser: function() {
            return this.userList.get(this.getSelectUserId())
        },
        showCheckbox: function(e) {
            this.zTree.setting.check.enable = e
        },
        isCheckbox: function() {
            return this.zTree.setting.check.enable
        },
        addDepartmentNodes: function(e) {
            e.each(function(t) {
                this._addDepartmentNode(e, t)
            }, this)
        },
        _addDepartmentNode: function(e, t) {
            if (t) {
                var i = this.zTree.getNodeByParam("id", t.id);
                if (i)
                    return i;
                var s = null;
                t.get("parentId") && (s = this.zTree.getNodeByParam("id", t.get("parentId")),
                    s || (s = this._addDepartmentNode(e, e.get(t.get("parentId")))));
                var n = this.zTree.addNodes(s, {
                    id: t.get("departmentId"),
                    parentId: t.get("parentId") || 0,
                    name: t.get("name"),
                    open: !1,
                    type: "department",
                    isParent: !0
                }, !0);
                return this.addUserNodes(this.userList.where({
                        deptId: t.get("departmentId")
                    })),
                    n[0]
            }
        },
        addUserNodes: function(e) {
            _.each(e, function(e) {
                this.addUserNode(e, !0)
            }, this)
        },
        onAddUser: function(e) {
            this.addUserNode(e, !1)
        },
        addUserNode: function(e, t) {
            var i = e.get("deptId") ? this.zTree.getNodeByParam("id", e.get("deptId")) : null;
            this.zTree.addNodes(i, {
                id: e.get("userId"),
                parentId: e.get("deptId") || 0,
                name: e.get("nameAccount") || e.get("userName"),
                open: !1,
                type: "user",
                isParent: !1,
                iconSkin: "user_avatar"
            }, t)
        }
    })
});;
define("app/commons/uikit/user/ContactSelectDialog", function(require, t, e) {
    var i = require("app/commons/uikit/user/ContactSelectTree");
    e.exports = window.ContactSelectDialog = Backbone.View.extend({
        tagName: "div",
        className: "contact-select-dialog modal fade hide",
        $contactTree: void 0,
        submitCallback: void 0,
        contactTree: void 0,
        departmentList: void 0,
        userList: void 0,
        initialize: function() {
            this.departmentList = this.options.departmentList,
                this.userList = this.options.userList,
                this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(t, e, i, s, a) {
                    return this.compilerInfo = [4, ">= 1.0.0"],
                        i = this.merge(i, t.helpers),
                        a = a || {},
                        '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><span> <%=msg542%></span></div><div class="modal-body"><div class="contact-tree-wrap"></div></div><div class="modal-footer"><button class="btn btn-add-cancel" data-dismiss="modal"><%=msg87%></button><button class="btn btn-primary btn-add-sure"><%=msg86%></button></div>'
                }))),
                this.$contactTree = this.$el.find(".contact-tree-wrap"),
                this.contactTree = new i({
                    id: "contactSelectDialogTree",
                    departmentList: this.departmentList,
                    userList: this.userList
                }),
                this.contactTree.showCheckbox(!0),
                this.contactTree.onChangeHeight(388),
                this.$contactTree.html(this.contactTree.el),
                this
        },
        addSubmitCallback: function(t) {
            this.submitCallback = t
        },
        show: function() {
            return this.contactTree.reset(),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this
        },
        hide: function() {
            this.$el.modal("hide")
        },
        events: {
            "click .btn-add-sure": "onSubmit"
        },
        onSubmit: function() {
            this.submitCallback && this.submitCallback(this.contactTree.isCheckbox() ? this.contactTree.getCheckUsers() : this.contactTree.getSelectUser()),
                this.hide()
        }
    })
});;
define("app/commons/uikit/user/DepartmentOrderModal", function(require, t, e) {
    e.exports = window.DepartmentOrderModal = Backbone.View.extend({
        tagName: "div",
        id: "departmentOrderModal",
        className: "department-order",
        collectionBinder: void 0,
        departmentList: void 0,
        oldDepartmentList: void 0,
        settingObj: void 0,
        events: {
            "click .ok-dept-order-btn": "orderDept",
            "click .cancel-dept-order-btn": "cancelOrderDept",
            "click li span.order-up": "upOrder",
            "click li span.order-down": "downOrder"
        },
        initialize: function() {
            this.departmentList = this.options.departmentList,
                this.settingObj = this.options.settingObj,
                this.oldDepartmentList = new DepartmentListDTO;
            var t = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator());
            this.collectionBinder = new Backbone.CollectionBinder(t),
                this.render()
        },
        render: function() {
            return this.initSettingObj(),
                this.$el.html(__html(Handlebars.template(function(t, e, n, i, d) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        n = this.merge(n, t.helpers),
                        d = d || {};
                    var a, r, s = "",
                        o = "function",
                        l = this.escapeExpression;
                    return s += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 class="modal-header-title"><span class="modal-header-icon"><i class="', (r = n.headerIcon) ? a = r.call(e, {
                            hash: {},
                            data: d
                        }) : (r = e && e.headerIcon,
                            a = typeof r === o ? r.call(e, {
                                hash: {},
                                data: d
                            }) : r),
                        s += l(a) + '"></i></span><span>', (r = n.headerText) ? a = r.call(e, {
                            hash: {},
                            data: d
                        }) : (r = e && e.headerText,
                            a = typeof r === o ? r.call(e, {
                                hash: {},
                                data: d
                            }) : r),
                        s += l(a) + '</span></h3></div><div class="modal-body old-modal"><div class=""><%=msg545%></div><div class="list-box common-box overflow-auto-y"><ul></ul></div></div><div class="modal-footer"><div class="ar"><span class="btn ok-dept-order-btn btn-blue">', (r = n.okBtnText) ? a = r.call(e, {
                            hash: {},
                            data: d
                        }) : (r = e && e.okBtnText,
                            a = typeof r === o ? r.call(e, {
                                hash: {},
                                data: d
                            }) : r),
                        s += l(a) + '</span><span class="btn cancel-dept-order-btn btn-white-blue">', (r = n.cancelBtnText) ? a = r.call(e, {
                            hash: {},
                            data: d
                        }) : (r = e && e.cancelBtnText,
                            a = typeof r === o ? r.call(e, {
                                hash: {},
                                data: d
                            }) : r),
                        s += l(a) + "</span></div></div>"
                }), this.settingObj)),
                this.collectionBinder.bind(this.departmentList, this.$el.find(".list-box ul")),
                this
        },
        initSettingObj: function() {
            this.settingObj || (this.settingObj = {}),
                void 0 == this.settingObj.headerIcon && (this.settingObj.headerIcon = "dept-select-icon"),
                void 0 == this.settingObj.headerText && (this.settingObj.headerText = msgs.msgSortDept),
                void 0 == this.settingObj.okBtnIcon && (this.settingObj.okBtnIcon = "btn-ok-icon"),
                void 0 == this.settingObj.okBtnText && (this.settingObj.okBtnText = msgs.msg86),
                void 0 == this.settingObj.cancelBtnIcon && (this.settingObj.cancelBtnIcon = "btn-cancel-icon"),
                void 0 == this.settingObj.cancelBtnText && (this.settingObj.cancelBtnText = msgs.msg87)
        },
        viewCreator: function() {
            var t = this;
            return function(e) {
                return new n({
                    model: e,
                    collection: t.oldDepartmentList
                })
            }
        },
        upOrder: function(t) {
            var e = $(t.target).parent(),
                n = e.prev(),
                i = n.find(".department").text(),
                d = n.find(".department").attr("departmentid");
            d && (n.find(".department").text(e.find(".department").text()),
                n.find(".department").attr("departmentid", e.find(".department").attr("departmentid")),
                e.find(".department").text(i),
                e.find(".department").attr("departmentid", d))
        },
        downOrder: function(t) {
            var e = $(t.target).parent(),
                n = e.next(),
                i = n.find(".department").text(),
                d = n.find(".department").attr("departmentid");
            d && (n.find(".department").text(e.find(".department").text()),
                n.find(".department").attr("departmentid", e.find(".department").attr("departmentid")),
                e.find(".department").text(i),
                e.find(".department").attr("departmentid", d))
        },
        orderDept: function() {
            var t = this,
                e = 1;
            this.$el.find("ul li").each(function() {
                    deptId = parseInt($(this).find(".department").attr("departmentid")),
                        t.oldDepartmentList.get(deptId).set("orderValue", e),
                        e++
                }),
                this.trigger(EventType.orderDept, this.oldDepartmentList)
        },
        cancelOrderDept: function() {
            this.departmentList.reset(),
                this.departmentList = this.oldDepartmentList,
                this.trigger(EventType.cancelOrderDept)
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    });
    var n = Backbone.View.extend({
        tagName: "li",
        modelBinder: void 0,
        oldDepartmentList: void 0,
        initialize: function() {
            this.oldDepartmentList = this.options.collection,
                this.modelBinder = new Backbone.ModelBinder,
                this.render()
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(t, e, n, i, d) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                    n = this.merge(n, t.helpers),
                    d = d || {},
                    '<span class="department" departmentid=""></span><span class="order-btn order-down"></span><span class="order-btn order-up"></span>'
            })));
            var t = {
                name: "[class=department]",
                departmentId: {
                    selector: "[class=department]",
                    elAttribute: "departmentid"
                }
            };
            return this.modelBinder.bind(this.model, this.el, t),
                this.model.id != constants.departIdNull && this.oldDepartmentList.add(this.model),
                this
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/user/DepartmentOrderWindow", function(require, t, e) {
    var i = require("app/commons/uikit/user/DepartmentOrderModal");
    e.exports = window.DepartmentOrderWindow = Backbone.View.extend({
        tagName: "div",
        id: "departmentOrderWindow",
        className: "modal fade hide modal-window",
        departmentList: void 0,
        settingObj: void 0,
        departmentOrderModal: void 0,
        initialize: function() {
            this.departmentList = this.options.departmentList,
                this.settingObj = this.options.settingObj,
                this.render()
        },
        render: function() {
            return this.departmentOrderModal = new i({
                    departmentList: this.departmentList,
                    settingObj: this.settingObj
                }),
                this.$el.append(this.departmentOrderModal.el),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/user/DepartmentPermissionWindow", function(require, s, e) {
    var i = require("app/commons/models/permission/PermissionDTO");
    e.exports = Backbone.View.extend({
        tagName: "div",
        id: "departmentPermission",
        className: "modal fade hide modal-window dept-permission-window",
        _permissionBinder: void 0,
        _checkedAllPermissions: {
            read: !0,
            write: !0,
            "delete": !0,
            upload: !0,
            download: !0,
            share: !0,
            local: !0
        },
        _unCheckedAllPermissions: {
            read: !1,
            write: !1,
            "delete": !1,
            upload: !1,
            download: !1,
            share: !1,
            local: !1
        },
        selectedPermission: void 0,
        events: {
            "click .permission-checks .checkbox-sprite": "onTogglePermission",
            "click .check-all": "onCheckAll",
            "click .ok-btn": "onConfirm",
            "click .cancel-btn": "close"
        },
        initialize: function() {
            this._permissionBinder = new Backbone.ModelBinder,
                this.selectedPermission = new i(this.model.get("permission")),
                this.listenTo(this.selectedPermission, "change", this.onChangePermission),
                this.render()
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(s, e, i, n, t) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                    i = this.merge(i, s.helpers),
                    t = t || {},
                    '<div class="modal-header"><button type="button" class="close cancel-btn" data-dismiss="modal" aria-hidden="true"id="closeModal">&times;</button><h3><%=msg62%></h3></div><div class="modal-body old-modal"><div class="title"><span class="opt"><span class=\'check-all checkbox-sprite\'></span><span class="check-txt"><%= msgSelectAll %></span></span><div style="clear:both"></div></div><div class="permission"><ul class="permission-checks"><li><span class=\'checkbox-sprite\' name="read"></span><span class="check-txt"><%=msg260%></span></li><li><span class=\'checkbox-sprite\' name="upload"></span><span class="check-txt"><%=msg258%></span></li><li><span class=\'checkbox-sprite\' name="download"></span><span class="check-txt"> <%=msg259%></span></li><li><span class=\'checkbox-sprite\' name="share"></span><span class="check-txt"><%=msg262%></span></li><li><span class=\'checkbox-sprite\' name="write"></span><span class="check-txt"><%=msg264%></span></li><li><span class=\'checkbox-sprite\' name="delete"></span><span class="check-txt"><%=msg156%></span></li><li><span class=\'checkbox-sprite\' name="local"></span><span class="check-txt"><%=msg435%></span></li></ul></div></div><div class="modal-footer ar"><span class="btn btn-blue ok-btn"><%=msg86%></span><span class="btn btn-white-blue cancel-btn"><%=msg87%></span></div>'
            })));
            var s = Backbone.ModelBinder.createDefaultBindings(this.$el.find(".permission-checks"), "name", this.permissionConverter, "class");
            return this._permissionBinder.bind(this.selectedPermission, this.$el.find(".permission-checks"), s),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this.onChangePermission(),
                this
        },
        onCheckAll: function() {
            var s = this.$(".check-all").hasClass("true");
            return s ? void this.selectedPermission.set(this._unCheckedAllPermissions) : void this.selectedPermission.set(this._checkedAllPermissions)
        },
        permissionConverter: function(s, e) {
            return "checkbox-sprite " + (e && "true")
        },
        onTogglePermission: function(s) {
            var e = $(s.target).hasClass("true"),
                i = $(s.target).attr("name");
            this.selectedPermission.set(i, !e)
        },
        onChangePermission: function() {
            var s = _.keys(_.pick(this.selectedPermission.toJSON(), function(s) {
                return !!s
            }));
            this.$(".check-all").toggleClass("true", s.length >= 7)
        },
        onConfirm: function() {
            return _.some(this.selectedPermission.toJSON()) ? void this.trigger(EventType.confirm, {
                department: this.model,
                permission: this.selectedPermission.toJSON()
            }) : void noty.alert(msgs.msgSelectPermission)
        },
        close: function() {
            this.$el.modal("hide"),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/user/DepartmentSpaceWindow", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "departmentSpaceWindow",
        _parent: void 0,
        className: "modal fade hide modal-window dept-space-window",
        events: {
            "click .ok-btn": "onConfirm",
            "click .cancel-btn": "close"
        },
        initialize: function() {
            this._parent = this.options.parent,
                this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, a, s, i) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        a = this.merge(a, e.helpers),
                        i = i || {};
                    var n, l, o = "",
                        c = "function",
                        d = this.escapeExpression;
                    return o += '<div class="modal-header"><button type="button" class="close cancel-btn" data-dismiss="modal" aria-hidden="true" id="closeModal">&times;</button><h3><%=msgChangeSpace%></h3></div><div class="modal-body old-modal"><div class="space"><div class="inline-block left">分配空间<input type=\'text\' class="input-space" name="space" placeholder="无限制" value="', (l = a.maxSize) ? n = l.call(t, {
                            hash: {},
                            data: i
                        }) : (l = t && t.maxSize,
                            n = typeof l === c ? l.call(t, {
                                hash: {},
                                data: i
                            }) : l),
                        o += d(n) + '"/>GB<span class="light">(可分配空间: <strong>', (l = a.availSize) ? n = l.call(t, {
                            hash: {},
                            data: i
                        }) : (l = t && t.availSize,
                            n = typeof l === c ? l.call(t, {
                                hash: {},
                                data: i
                            }) : l),
                        o += d(n) + '</strong>)</span></div><a class="btn btn-blue expand-btn right" href="#" target="_blank"><%=msgExpandSpace%></a><div style="clear:both"></div></div><div class="btns ac"><span class="btn btn-blue ok-btn"><%=msg86%></span><span class="btn btn-white-blue cancel-btn"><%=msg87%></span></div></div>'
                }), {
                    maxSize: this.model.get("maxSize"),
                    availSize: "-"
                })),
                seajs.isPrivate ? this.$(".expand-btn").remove() : this.$(".expand-btn").attr("href", constants.getBuyUrl()),
                this.getAllocatableDiskSizeAsync(),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this
        },
        getAllocatableDiskSizeAsync: function() {
            var e = this;
            this._parent ? this._parent.getAllocatableDiskSizeAsync(function(t) {
                e.model.set("availableDiskSize", t),
                    e.$("strong").text(constants.convertSize(t))
            }) : model.currentEnterprise.getAllocatableDiskSize(function(t) {
                e.model.set("availableDiskSize", t),
                    e.$("strong").text(constants.convertSize(t))
            })
        },
        onConfirm: function() {
            var e = $.trim(this.$(".input-space").val());
            return e > 999999 ? void noty.alert(msgs.msgDiskSizeLack) : void(e && !e.match(constants.pattern.integer) ? noty.alert(msgs.msgSpaceFomat) : this.trigger(EventType.onConfirm, {
                department: this.model,
                maxSize: parseInt(e)
            }))
        },
        close: function() {
            this.$el.modal("hide"),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/user/UsersSelectWindow", function(require, e, s) {
    var t = require("app/commons/uikit/user/UsersSelectModal");
    s.exports = Backbone.View.extend({
        tagName: "div",
        id: "usersSelectWindow",
        className: "modal fade hide modal-window",
        usersSelectModal: void 0,
        selectedUserList: void 0,
        departmentList: void 0,
        userList: void 0,
        settingObj: void 0,
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.usersSelectModal = new t({
                    selectedUserList: this.options.selectedUserList,
                    settingObj: this.options.settingObj
                }),
                this.$el.append(this.usersSelectModal.el),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this
        },
        close: function() {
            this.$el.modal("hide"),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/user/DepartmentSelectTree", function(require, e, t) {
    var n = require("app/commons/uikit/user/AddDepartmentWindow"),
        i = require("app/commons/uikit/user/DepartmentPermissionWindow"),
        s = require("app/commons/uikit/user/DepartmentSpaceWindow"),
        r = require("app/commons/uikit/user/UsersSelectWindow"),
        a = require("app/commons/uikit/user/DepartmentOrderWindow");
    t.exports = window.DepartmentSelectTree = Backbone.View.extend({
        tagName: "ul",
        id: "departmentSelectTree",
        className: "departmentSelectTree ztree user-tree overflow-auto",
        zTree: void 0,
        checkCallback: void 0,
        settingObj: void 0,
        selectedUserList: void 0,
        departmentList: void 0,
        userList: void 0,
        rankDeptList: void 0,
        userSettingObj: void 0,
        usersSelectWindow: void 0,
        addDepartWindow: void 0,
        departPermissionWindow: void 0,
        departSpaceWindow: void 0,
        _checkedAllPermissions: {
            read: !0,
            write: !0,
            "delete": !0,
            upload: !0,
            download: !0,
            share: !0,
            local: !0
        },
        operateHtml: '<span class="rename-btn hide"><span class="ok-rename"></span><span class="cancel-rename"></span></span><div class="btn-group dept-setting-btn"><span data-toggle="dropdown" class="dropdown-toggle"></span><ul class="dropdown-menu"><li class="change-user"><a>' + msgs.msgAddDelUser + '</a></li><li class="create-sub"><a>' + msgs.msgNewSubDept + '</a></li><li class="hr"></li><li class="change-permission"><a>' + msgs.msg62 + '</a></li><li class="change-space"><a>' + msgs.msgChangeSpace + '</a></li><li class="hr"></li><li class="sort"><a>' + msgs.msgSortDept + '</a></li><li class="hr"></li><li class="rename"><a>' + msgs.msg266 + '</a></li><li class="delete"><a>' + msgs.msgDelDept + "</a></li></ul></div>",
        initialize: function() {
            this.departmentList = this.collection,
                this.userList = this.options.userList,
                this.settingObj = this.options.settingObj,
                this.hideUngroup = this.options.hideUngroup,
                this.listenTo(this.departmentList, EventType.loadDepartment, this.addDepartmentNodes),
                this.render()
        },
        render: function() {
            this.$el.html(" ");
            var e = this;
            this.zTree = $.fn.zTree.init(this.$el, {
                    view: {
                        dblClickExpand: !1,
                        showLine: !1,
                        selectedMulti: !1,
                        addDiyDom: function(t, n) {
                            e.settingObj && e.settingObj.showDeptSettingBtn && e.addDeptSettingBtn(n, e)
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
                            return e.trigger(EventType.selectDept, e.departmentList.get(n.id)), !0
                        },
                        onClick: function(t, n, i) {
                            return $(t.target).attr("id") && $(t.target).attr("id").indexOf("_span") > 0 && e.zTree.expandNode(i), !1
                        },
                        onNodeCreated: function(t, n, i) {
                            var s = "#" + i.tId + "_a";
                            e.$el.find(s).addClass(i.type);
                            var r = "#" + i.tId + "_check";
                            e.$el.find(r).attr("name", i.type + "_chk"), -1 == i.id && 1 == e.hideUngroup && e.zTree.hideNode(i)
                        },
                        onCheck: this.createCheckDepartCallback(),
                        beforeRename: this.beforeRename()
                    }
                }, []),
                setTimeout(function() {
                    e.departmentList.length && e.addDepartmentNodes(e.departmentList)
                }, 10)
        },
        rebind: function() {
            this.initialize(),
                this.delegateEvents()
        },
        onChangeHeight: function(e) {
            this.$el.height(e ? e : model.setting.getUsualContactTreeHeight() - 40)
        },
        addDeptSettingBtn: function(e, t) {
            if (-1 != e.id) {
                var n = t.$el.find("#" + e.tId + "_a");
                n.append(this.operateHtml),
                    n.find("li.change-user").bind("click", function() {
                        t.showUsersWindow(e)
                    }),
                    n.find("li.create-sub").bind("click", function() {
                        t.zTree.expandNode(e, !0),
                            t.onAddChildDepart()
                    }),
                    n.find("li.change-permission").bind("click", function() {
                        t.onChangePermission(e)
                    }),
                    n.find("li.change-space").bind("click", function() {
                        t.onChangeSpace(e)
                    }),
                    n.find("li.sort").bind("click", function() {
                        t.onDepartOrder(e)
                    }),
                    n.find("li.rename").bind("click", function() {
                        t.showRenameView(e)
                    }),
                    n.find("li.delete").bind("click", function() {
                        t.delDepartment(e)
                    }),
                    n.find("span.ok-rename").bind("click", function() {
                        var i = n.find("input.rename").val();
                        t.doRename(e, i)
                    }),
                    n.find("span.cancel-rename").bind("click", function() {
                        t.cancelRename(e)
                    })
            }
        },
        showUsersWindow: function(e) {
            var t = this;
            this.usersSelectWindow && this.usersSelectWindow.close();
            var n = new UserListDTO;
            this.departmentList.get(e).getDeptUsers(function(e) {
                    n.reset(e)
                }),
                t.usersSelectWindow = new r({
                    selectedUserList: n,
                    settingObj: {
                        headerText: msgs.msg542,
                        hideAdmins: !1,
                        isShowSelf: !0,
                        canSelectSelf: !0,
                        selectDeptId: e.id
                    }
                }),
                t.usersSelectWindow.usersSelectModal.on(EventType.selectUsers, t.addDeptUsers, t),
                t.usersSelectWindow.usersSelectModal.on(EventType.cancelSelectUsers, t.hideSelectWindow, t)
        },
        hideSelectWindow: function() {
            this.usersSelectWindow.$el.modal("hide")
        },
        addDeptUsers: function(e) {
            var t = this,
                n = this.getSelectDepart();
            model.currentUser.get("deptId") == n.get("departmentId") && e.add(model.currentUser),
                n && e.updateDeptUsers(n.get("departmentId"), function(e) {
                    return t.hideSelectWindow(),
                        constants.isResponseOK(e) ? (noty.success(msgs.msgEditOK),
                            void t.trigger(EventType.usersChange, n)) : void noty.error(msgs.msgEditFail)
                })
        },
        beforeRename: function() {
            return function(e, t) {
                return !!t.renameDone
            }
        },
        doRename: function(e, t) {
            return t && $.trim(t) ? t.length > 60 ? void noty.alert(msgs.msgDeptLongError) : void this.submitRenameDepart(e, t) : void noty.alert(msgs.msgInputDeptName)
        },
        submitRenameDepart: function(e, t) {
            var n = this;
            if (e.oldName == t)
                return this.showRenameView(e),
                    e.renameDone = !0,
                    setTimeout(function() {
                        n.zTree.cancelEditName()
                    }, 10),
                    this.hideRenameBtn(e), !0;
            var i = this.departmentList.get(e.id);
            i.renameDept(t, function(t) {
                if (constants.isResponseOK(t))
                    _.extend(e, {
                        id: i.id,
                        name: i.get("name"),
                        rename: !1
                    }),
                    n.zTree.updateNode(e),
                    n.showRenameView(e),
                    e.renameDone = !0,
                    setTimeout(function() {
                        n.zTree.cancelEditName()
                    }, 10),
                    n.trigger(EventType.renameDept, i),
                    n.hideRenameBtn(e);
                else {
                    var s;
                    s = t === ErrorType.errorSameName ? "部门名重复!" : "重命名失败!",
                        noty.confirm(s, function(t) {
                            t ? (e.name = e.oldName,
                                n.showRenameView(e)) : (e.name = e.oldName,
                                n.showRenameView(e),
                                e.renameDone = !0,
                                setTimeout(function() {
                                    n.zTree.cancelEditName()
                                }, 10),
                                n.hideRenameBtn(e))
                        })
                }
            })
        },
        showRenameView: function(e) {
            e.renameDone = !1,
                e.oldName = e.name,
                this.zTree.editName(e),
                this.showRenameBtn(e)
        },
        showRenameBtn: function(e) {
            var t = this,
                n = this.$el.find("#" + e.tId + "_a");
            n.find("span.rename-btn").removeClass("hide"),
                n.find("div.dept-setting-btn").addClass("hide-important"),
                n.find("input").bind("keydown", "return", function() {
                    var i = n.find("input.rename").val();
                    return t.doRename(e, i), !1
                })
        },
        hideRenameBtn: function(e) {
            var t = this.$el.find("#" + e.tId + "_a");
            t.find("span.rename-btn").addClass("hide"),
                t.find("div.dept-setting-btn").removeClass("hide-important")
        },
        onAddChildDepart: function() {
            var e = this.getSelectDepart();
            if (!e)
                return noty.error(msgs.msgSelectDepartErr), !1;
            var t = new DepartmentDTO({
                departmentId: "new",
                parentId: e.id,
                permission: this._checkedAllPermissions,
                isDefault: !0,
                availableDiskSize: e.get("maxSize")
            });
            this.showAddDepartView(t, e)
        },
        showAddDepartView: function(e, t) {
            this.addDepartWindow = new n({
                    model: e,
                    parent: t
                }),
                this.addDepartWindow.on(EventType.confirm, this.createDepartment, this)
        },
        createDepartment: function(e) {
            var t = this;
            e.createDepartment(function(n) {
                constants.isResponseError(n) ? noty.error(ErrorType.createDeptError(n)) : (t.departmentList.unshift(e),
                    t.createDepartmentNode(e),
                    t.addDepartWindow.close(),
                    noty.success("<b>部门创建成功!</b><br/>系统自动创建了对应的文件夹和权限;<br/>文件夹在文件列表中能找到,权限对应在后台url(角色管理)"))
            })
        },
        createDepartmentNode: function(e) {
            var t = e.get("parentId") === constants.departIdNull ? null : this.zTree.getNodeByParam("id", e.get("parentId"));
            this.zTree.addNodes(t, {
                id: e.get("departmentId"),
                parentId: e.get("parentId") || 0,
                name: e.get("name"),
                open: !1,
                type: "department",
                isParent: !0,
                newDepart: null
            }, !0)
        },
        placeHold: function(e) {
            this.$el.find("#" + e.tId + "_input").val(""),
                this.$el.find("#" + e.tId + "_input").attr("placeholder", msgs.msgNewDept)
        },
        cancelRename: function(e) {
            var t = this;
            e.name = e.oldName,
                this.showRenameView(e),
                e.renameDone = !0,
                setTimeout(function() {
                    t.zTree.cancelEditName()
                }, 10),
                this.hideRenameBtn(e)
        },
        onDepartOrder: function(e) {
            var t = this;
            this.deptList = new DepartmentListDTO,
                this.rankDeptList = new DepartmentListDTO,
                this.deptList.fetchManage(!1, function() {
                    var n = t.deptList.get(e.id);
                    t.rankDeptList.add(t.deptList.where({
                            parentId: n.get("parentId")
                        })),
                        t.rankDeptList.get(constants.departIdNull) && t.rankDeptList.remove(t.rankDeptList.get(constants.departIdNull))
                }),
                this.departmentOrderWindow && this.departmentOrderWindow.close(),
                this.departmentOrderWindow = new a({
                    departmentList: this.rankDeptList
                }),
                this.departmentOrderWindow.departmentOrderModal.on(EventType.orderDept, this.orderDepts, this),
                this.departmentOrderWindow.departmentOrderModal.on(EventType.cancelOrderDept, this.hideOrderWindow, this)
        },
        orderDepts: function(e) {
            var t = this;
            e.updateDeptOrder(function(n) {
                    constants.isResponseOK(n) ? (e.each(function(e) {
                            t.departmentList.set(e, {
                                add: !1,
                                remove: !1
                            })
                        }),
                        t.departmentList.reset(t.departmentList.sort().models),
                        t.zTree.destroy(),
                        t.render(),
                        noty.success(msgs.msgSortOK)) : noty.error(msgs.msgSortFail)
                }),
                this.hideOrderWindow()
        },
        hideOrderWindow: function() {
            this.departmentOrderWindow.$el.modal("hide")
        },
        delDepartment: function(e) {
            var t = this;
            noty.confirm(msgs.msgIsSureDel, function(n) {
                if (!n)
                    return !1;
                var i = t.departmentList.get(e.id);
                i.delDept(function(n) {
                    constants.isResponseOK(n) ? (noty.success(msgs.msgDelUsualSucess),
                        t.trigger(EventType.deleteDept, i),
                        t.zTree.hideNode(e)) : noty.error(n == ErrorType.errorDeleteDepartUserExist ? "存在子部门或同事，无法删除!" : msgs.msgDeleteFail)
                })
            })
        },
        onChangePermission: function(e) {
            var t = this.departmentList.findWhere({
                departmentId: e.id
            });
            this.departPermissionWindow = new i({
                    model: t
                }),
                this.departPermissionWindow.on(EventType.confirm, this.changePermission, this)
        },
        changePermission: function(e) {
            var t = this,
                n = e.department,
                i = e.permission;
            n.updateDeptPermission(i, function(e) {
                if (constants.isResponseOK(e))
                    return t.departPermissionWindow.close(),
                        void noty.success(msgs.msgAccEditPermSuccess);
                switch (e) {
                    case ErrorType.errorNoPermission:
                        noty.error(msgs.msgNoPermission);
                        break;
                    default:
                        noty.error(msgs.msgServerError)
                }
            })
        },
        onChangeSpace: function(e) {
            var t = this.departmentList.get(e.id),
                n = this.departmentList.get(t.get("parentId"));
            this.departSpaceWindow && this.departSpaceWindow.close(),
                this.departSpaceWindow = new s({
                    model: t,
                    parent: n
                }),
                this.departSpaceWindow.on(EventType.confirm, this.changeSpace, this)
        },
        changeSpace: function(e) {
            var t = this,
                n = e.department,
                i = e.maxSize;
            n.updateDeptMaxSize(i, function(e) {
                constants.isResponseOK(e) ? (t.departSpaceWindow.close(), !i && n.unset("maxSize"),
                    noty.success(msgs.msgChangeDeptSizeOk)) : noty.error(ErrorType.updateDeptMaxSizeError(e))
            })
        },
        checkDeparts: function(e) {
            _.each(e, function(e) {
                var t = this.zTree.getNodeByParam("id", e);
                t && this.zTree.checkNode(t, !0)
            }, this)
        },
        getSelectDepart: function() {
            var e = this.zTree.getSelectedNodes();
            return e.length ? this.departmentList.get(e[0].id) : null
        },
        selectDepartment: function(e) {
            var t = this.zTree.getNodeByParam("id", e);
            t && this.zTree.selectNode(t, !1)
        },
        createCheckDepartCallback: function() {
            var e = this;
            return function() {
                var t = e.zTree.getCheckedNodes(!0),
                    n = _.map(t, function(e) {
                        return e.id
                    });
                e.checkCallback && e.checkCallback(n)
            }
        },
        addCheckCallback: function(e) {
            this.checkCallback = e
        },
        showCheckbox: function(e) {
            this.zTree.setting.check.enable = e
        },
        reset: function() {
            this.zTree.checkAllNodes(!1)
        },
        addDepartmentNodes: function(e) {
            e.each(function(t) {
                this._addDepartmentNode(e, t)
            }, this)
        },
        _addDepartmentNode: function(e, t) {
            if (t) {
                var n = this.zTree.getNodeByParam("id", t.id);
                if (n)
                    return n;
                var i = null;
                t.get("parentId") && (i = this.zTree.getNodeByParam("id", t.get("parentId")),
                    i || (i = this._addDepartmentNode(e, e.get(t.get("parentId")))));
                var s = this.zTree.addNodes(i, {
                    id: t.get("departmentId"),
                    parentId: t.get("parentId") || 0,
                    name: t.get("name"),
                    open: !1,
                    type: "department",
                    isParent: !0
                }, !0);
                return s[0]
            }
        },
        close: function() {
            this.zTree.destroy(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/user/SearchDepartmentsView", function() {
    window.SearchDepartmentsView = Backbone.View.extend({
            tagName: "ul",
            id: "searchDepartments",
            className: "overflow-auto-y search-list",
            collectionBinder: void 0,
            departmentList: void 0,
            events: {
                "click li div": "selectDepartment"
            },
            initialize: function() {
                this.departmentList = this.options.departmentList;
                var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
                this.collectionBinder = new Backbone.CollectionBinder(e),
                    this.render()
            },
            render: function() {
                return this.collectionBinder.bind(this.collection, this.$el),
                    this
            },
            onChangeHeight: function(e) {
                this.$el.height(e ? e : model.setting.geDepartmentTreeHeight())
            },
            viewCreator: function(e) {
                return new SearchDepartmentsItemView({
                    model: e
                })
            },
            rebind: function() {
                this.delegateEvents(),
                    this.collectionBinder.unbind(),
                    this.collectionBinder.bind(collection.resultUserList, this.$el)
            },
            doSearch: function(e) {
                var t = this;
                this.collection.reset(this.departmentList.filter(function(i) {
                    return t.compareData(i, e)
                }))
            },
            compareData: function(e, t) {
                return t && !e.get("name").match(t) ? !1 : !0
            },
            selectDepartment: function(e) {
                this.$el.find("li").removeClass("is-selected");
                var t = $(e.target);
                t.parent().addClass("is-selected");
                var i = t.attr("departmentid");
                i = parseInt(i),
                    this.trigger(EventType.selectDept, this.collection.get(i))
            },
            close: function() {
                this.collectionBinder.unbind(),
                    this.off(),
                    this.undelegateEvents(),
                    this.remove()
            }
        }),
        window.SearchDepartmentsItemView = Backbone.View.extend({
            tagName: "li",
            initialize: function() {
                this.render()
            },
            render: function() {
                return this.$el.html(__html(Handlebars.template(function(e, t, i, n, a) {
                        this.compilerInfo = [4, ">= 1.0.0"],
                            i = this.merge(i, e.helpers),
                            a = a || {};
                        var r, s, o = "",
                            c = "function",
                            l = this.escapeExpression;
                        return o += '<div departmentid="', (s = i.departmentId) ? r = s.call(t, {
                                hash: {},
                                data: a
                            }) : (s = t && t.departmentId,
                                r = typeof s === c ? s.call(t, {
                                    hash: {},
                                    data: a
                                }) : s),
                            o += l(r) + '">', (s = i.name) ? r = s.call(t, {
                                hash: {},
                                data: a
                            }) : (s = t && t.name,
                                r = typeof s === c ? s.call(t, {
                                    hash: {},
                                    data: a
                                }) : s),
                            o += l(r) + "</div>"
                    }), this.model.toJSON())),
                    this
            },
            close: function() {
                this.off(),
                    this.undelegateEvents(),
                    this.remove()
            }
        })
});;
define("app/commons/uikit/user/DepartmentSelectModal", function(require, e, t) {
    require("app/commons/uikit/user/DepartmentSelectTree"),
        require("app/commons/uikit/user/SearchDepartmentsView"),
        t.exports = Backbone.View.extend({
            tagName: "div",
            id: "departmentSelectModal",
            className: "singleSelectModal",
            collectionBinder: void 0,
            departmentTree: void 0,
            searchDepartmentsView: void 0,
            departmentList: void 0,
            selectedDepartment: void 0,
            settingObj: void 0,
            events: {
                "click .ok-dept-select-btn": "selectDept",
                "click .cancel-dept-select-btn": "cancelSelectDept",
                "click i.icon-custom-search": "searchDepartment",
                "click div.cancel-search-btn span": "cancelSearchDept"
            },
            initialize: function() {
                this.departmentList = this.options.departmentList,
                    this.settingObj = this.options.settingObj,
                    this.selectedDepartment = new DepartmentDTO,
                    this.render()
            },
            render: function() {
                return this.initSettingObj(),
                    this.$el.html(__html(Handlebars.template(function(e, t, n, i, s) {
                        this.compilerInfo = [4, ">= 1.0.0"],
                            n = this.merge(n, e.helpers),
                            s = s || {};
                        var a, c, l = "",
                            d = "function",
                            h = this.escapeExpression;
                        return l += '<div class="modal-header"><button type="button" class="cancel-dept-select-btn close" data-dismiss="modal" aria-hidden="true">×</button><h3 class="modal-header-title"><span class="modal-header-icon"><i class="', (c = n.headerIcon) ? a = c.call(t, {
                                hash: {},
                                data: s
                            }) : (c = t && t.headerIcon,
                                a = typeof c === d ? c.call(t, {
                                    hash: {},
                                    data: s
                                }) : c),
                            l += h(a) + '"></i></span><span>', (c = n.headerText) ? a = c.call(t, {
                                hash: {},
                                data: s
                            }) : (c = t && t.headerText,
                                a = typeof c === d ? c.call(t, {
                                    hash: {},
                                    data: s
                                }) : c),
                            l += h(a) + '</span></h3></div><div class="modal-body old-modal"><div class=""><%=msg546%></div><div class="list-box common-box"><div class="input-append"><input type="text" placeholder="<%=msg540%>" name="keyword" class="input-medium"><a class="btn btn-search custom-btn"><div class="search-btn-border"></div><i class="icon-custom-search"></i></a></div><div id="departmentTreeModal" class="tree-list"></div><div class="search-list cancel-search-btn"><span><%=msg242%></span></div></div></div><div class="modal-footer"><div class="ar"><span class="btn ok-dept-select-btn btn-blue">', (c = n.okBtnText) ? a = c.call(t, {
                                hash: {},
                                data: s
                            }) : (c = t && t.okBtnText,
                                a = typeof c === d ? c.call(t, {
                                    hash: {},
                                    data: s
                                }) : c),
                            l += h(a) + '</span><span class="btn cancel-dept-select-btn btn-white-blue">', (c = n.cancelBtnText) ? a = c.call(t, {
                                hash: {},
                                data: s
                            }) : (c = t && t.cancelBtnText,
                                a = typeof c === d ? c.call(t, {
                                    hash: {},
                                    data: s
                                }) : c),
                            l += h(a) + "</span></div></div>"
                    }), this.settingObj)),
                    this.departmentTree = new DepartmentSelectTree({
                        id: "departmentSelectTreeModal",
                        collection: this.departmentList,
                        settingObj: this.settingObj,
                        hideUngroup: _.has(this.settingObj, "hideUngroup") ? this.settingObj.hideUngroup : !0
                    }),
                    this.departmentTree.onChangeHeight(269),
                    this.departmentTree.on(EventType.selectDept, this.onSelectDept, this),
                    this.$el.find("#departmentTreeModal").html(this.departmentTree.el),
                    this._bindEnter(),
                    this
            },
            _bindEnter: function() {
                var e = this;
                this.$(".input-append input.input-medium").bind("keydown", "return", function(t) {
                    return t.stopPropagation(),
                        t.preventDefault(),
                        e.searchDepartment(), !1
                })
            },
            initSettingObj: function() {
                this.settingObj || (this.settingObj = {}),
                    void 0 == this.settingObj.showDeptSettingBtn && (this.settingObj.showDeptSettingBtn = !1),
                    void 0 == this.settingObj.headerIcon && (this.settingObj.headerIcon = "dept-select-icon"),
                    void 0 == this.settingObj.headerText && (this.settingObj.headerText = msgs.msg546),
                    void 0 == this.settingObj.okBtnIcon && (this.settingObj.okBtnIcon = "btn-ok-icon"),
                    void 0 == this.settingObj.okBtnText && (this.settingObj.okBtnText = msgs.msg86),
                    void 0 == this.settingObj.cancelBtnIcon && (this.settingObj.cancelBtnIcon = "btn-cancel-icon"),
                    void 0 == this.settingObj.cancelBtnText && (this.settingObj.cancelBtnText = msgs.msg87)
            },
            searchDepartment: function() {
                var e = this.$el.find(".input-append .input-medium").val();
                if (e) {
                    if (this.$el.find("#departmentSelectTreeModal").hide(), !this.searchDepartmentsView) {
                        var t = new UserListDTO;
                        this.searchDepartmentsView = new SearchDepartmentsView({
                                collection: t,
                                departmentList: this.departmentList
                            }),
                            this.searchDepartmentsView.onChangeHeight(245),
                            this.$el.find("#departmentTreeModal").append(this.searchDepartmentsView.el)
                    }
                    this.$el.find(".search-list").show(),
                        this.searchDepartmentsView.doSearch(e),
                        this.searchDepartmentsView.on(EventType.selectDept, this.onSelectDept, this)
                }
            },
            cancelSearchDept: function() {
                this.$el.find(".search-list").hide(),
                    this.$el.find("#departmentSelectTreeModal").show(),
                    this.$el.find(".input-medium").val("")
            },
            onSelectDept: function(e) {
                return e ? void this.selectedDepartment.set(e.toJSON()) : !1
            },
            selectDept: function() {
                this.trigger(EventType.selectDept, this.selectedDepartment)
            },
            cancelSelectDept: function() {
                this.trigger(EventType.cancelSelectDept)
            },
            close: function() {
                this.off(),
                    this.undelegateEvents(),
                    this.remove()
            }
        })
});;
define("app/commons/uikit/user/DepartmentSelectWindow", function(require, e, t) {
    var i = require("app/commons/uikit/user/DepartmentSelectModal");
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "departmentSelectWindow",
        className: "modal fade hide modal-window dept-select-window",
        departmentList: void 0,
        settingObj: void 0,
        departmentSelectModal: void 0,
        initialize: function() {
            this.departmentList = this.collection,
                this.settingObj = this.options.settingObj,
                this.render()
        },
        render: function() {
            return this.departmentSelectModal = new i({
                    departmentList: this.departmentList,
                    settingObj: this.settingObj
                }),
                this.$el.append(this.departmentSelectModal.el),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this
        },
        close: function() {
            this.$el.modal("hide"),
                this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/user/DepartmentTree", function() {
    window.DepartmentTree = Backbone.View.extend({
        tagName: "ul",
        id: "departmentTree",
        className: "departmentTree ztree",
        zTree: void 0,
        nodeCurrent: void 0,
        initialize: function() {
            this.departmentList = this.collection,
                this.listenTo(this.departmentList, EventType.loadDepartment, this.addDepartmentNodes),
                this.render()
        },
        render: function() {
            this.$el.html("");
            var e = this;
            this.zTree = $.fn.zTree.init(this.$el, {
                    view: {
                        dblClickExpand: !1,
                        showLine: !1,
                        selectedMulti: !1
                    },
                    edit: {
                        enable: !0,
                        showRemoveBtn: !1,
                        showRenameBtn: !1
                    },
                    data: {
                        simpleData: {
                            enable: !0,
                            idKey: "id",
                            pIdKey: "parentId",
                            rootPId: ""
                        },
                        keep: {
                            parent: !0
                        }
                    },
                    callback: {
                        beforeClick: function(t, r) {
                            return e.zTree.expandNode(r), !0
                        },
                        beforeRename: e.beforeRename()
                    }
                }, []),
                this.departmentList.length > 0 && this.addDepartmentNodes(this.departmentList)
        },
        beforeRename: function() {
            var e = this;
            return function(t, r, a) {
                return r.rename || r.newDepart ? a && $.trim(a) && "新建的部门" !== a ? r.newDepart ? (e.submitNewDepart(t, r, a), !1) : r.rename ? (e.submitRenameDepart(t, r, a), !1) : !1 : (noty.alert("请输入合法的部门名称!"),
                    r.newDepart ? e.zTree.removeNode(r) : e.zTree.cancelEditName(), !1) : !0
            }
        },
        submitRenameDepart: function(e, t, r) {
            var a = this,
                n = this.departmentList.get(t.id);
            n.renameDept(r, function(e) {
                switch (e) {
                    case ErrorType.errorSameName:
                        noty.alert(msgs.msgNameDuplicate),
                            a.zTree.removeNode(t);
                        break;
                    case ErrorType.error500:
                        noty.alert(msgs.msgRenameFail),
                            a.zTree.removeNode(t);
                        break;
                    default:
                        t.name != r && noty.alert("重命名部门成功!"),
                            _.extend(t, {
                                id: n.id,
                                name: n.get("name"),
                                rename: !1
                            }),
                            a.zTree.updateNode(t),
                            a.zTree.cancelEditName()
                }
            })
        },
        submitNewDepart: function(e, t, r) {
            var a = this,
                n = this.departmentList.get(t.id);
            n.set("name", r),
                n.addDept(function(e) {
                    switch (e) {
                        case ErrorType.errorSameName:
                            noty.alert("该部门名称重复了!"),
                                a.zTree.removeNode(t);
                            break;
                        case ErrorType.error500:
                            noty.alert("新建部门失败!"),
                                a.zTree.removeNode(t);
                            break;
                        default:
                            noty.alert("新建部门成功!"),
                                _.extend(t, {
                                    id: n.id,
                                    name: n.get("name"),
                                    newDepart: null
                                }),
                                a.zTree.updateNode(t),
                                a.zTree.cancelEditName()
                    }
                })
        },
        showAddDepartView: function(e) {
            this.departmentList.add(e);
            var t = e.get("parentId") === constants.departIdNull ? null : this.zTree.getNodeByParam("id", e.get("parentId")),
                r = this.zTree.addNodes(t, {
                    id: e.get("departmentId"),
                    parentId: e.get("parentId") || 0,
                    name: e.get("name"),
                    open: !1,
                    type: "department",
                    isParent: !0,
                    newDepart: !0
                }, !0);
            this.zTree.editName(r[0]),
                this.placeHold(r[0])
        },
        placeHold: function(e) {
            this.$el.find("#" + e.tId + "_input").val(""),
                this.$el.find("#" + e.tId + "_input").attr("placeholder", "新建的部门")
        },
        showRenameView: function(e) {
            var t = this.zTree.getNodeByParam("id", e.id);
            t ? (t.rename = !0,
                this.zTree.editName(t)) : noty.alert("该部门不存在!")
        },
        reset: function() {
            this.zTree.checkAllNodes(!1)
        },
        getSelectDepart: function() {
            var e = this.zTree.getSelectedNodes();
            return e.length ? this.departmentList.get(e[0].id) : null
        },
        deleteSelectNode: function() {
            var e = this,
                t = this.zTree.getSelectedNodes();
            t.length && (e.zTree.removeNode(t[0]),
                e.$el.find("#" + t[0].parentTId + "_ul").remove())
        },
        addDepartmentNodes: function(e) {
            e.each(function(t) {
                this._addDepartmentNode(e, t)
            }, this)
        },
        _addDepartmentNode: function(e, t) {
            if (t.id === constants.departIdNull)
                return !1;
            var r = this.zTree.getNodeByParam("id", t.id);
            if (r)
                return r;
            var a = null;
            t.get("parentId") && (a = this.zTree.getNodeByParam("id", t.get("parentId")),
                a || (a = this._addDepartmentNode(e, e.get(t.get("parentId")))));
            var n = this.zTree.addNodes(a, {
                id: t.get("departmentId"),
                parentId: t.get("parentId") || 0,
                name: t.get("name"),
                open: !1,
                type: "department",
                isParent: !0
            }, !0);
            return n[0]
        }
    })
});;
define("app/commons/uikit/user/SelectedUserItemView", function(require, e, t) {
    t.exports = window.SelectedUserItemView = Backbone.View.extend({
        tagName: "li",
        template: '<span  class="name label label-info"><%=name%></span><span class="del-user"><i class="icon-remove"></i></span>',
        selectedUserList: void 0,
        events: {
            "click .del-user": "delSelectedUser"
        },
        initialize: function() {
            this.selectedUserList = this.options.collection,
                this.render()
        },
        render: function() {
            return this.$el.html(_.template(this.template, {
                    name: this.model.get("nameAccount")
                })),
                this
        },
        delSelectedUser: function() {
            this.selectedUserList.remove(this.model)
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/user/UserSelectModal", function(require, e, s) {
    var t = require("app/commons/uikit/user/ContactSelectTree2"),
        i = require("app/commons/uikit/user/SearchUsersView");
    s.exports = Backbone.View.extend({
        tagName: "div",
        id: "userSelectModal",
        className: "singleSelectModal",
        collectionBinder: void 0,
        userTree: void 0,
        searchUsersView: void 0,
        departmentList: void 0,
        userList: void 0,
        selectedUser: void 0,
        settingObj: void 0,
        events: {
            "click .ok-user-select-btn": "addMember",
            "click .cancel-user-select-btn": "cancelAddMember",
            "click .btn-search": "searchDepartmentUser",
            "click div.cancel-search-btn span": "cancelSearchUser"
        },
        initialize: function() {
            this.settingObj = this.options.settingObj,
                this.selectedUser = new UserDTO,
                this.render()
        },
        render: function() {
            return this.initSettingObj(),
                this.$el.html(__html(Handlebars.template(function(e, s, t, i, n) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                        t = this.merge(t, e.helpers),
                        n = n || {};
                    var a, c, r = "",
                        l = "function",
                        d = this.escapeExpression;
                    return r += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 class="modal-header-title"><span class="modal-header-icon"><i class="', (c = t.headerIcon) ? a = c.call(s, {
                            hash: {},
                            data: n
                        }) : (c = s && s.headerIcon,
                            a = typeof c === l ? c.call(s, {
                                hash: {},
                                data: n
                            }) : c),
                        r += d(a) + '"></i></span><span>', (c = t.headerText) ? a = c.call(s, {
                            hash: {},
                            data: n
                        }) : (c = s && s.headerText,
                            a = typeof c === l ? c.call(s, {
                                hash: {},
                                data: n
                            }) : c),
                        r += d(a) + '</span></h3></div><div class="modal-body old-modal"><div class="modal-user-title"><%=msg239%></div><div class="list-box common-box"><div class="input-append"><input type="text" placeholder="<%=msg540%>" name="keyword" class="input-medium input-search"><a class="btn btn-search custom-btn"><div class="search-btn-border"></div><i class="icon-custom-search"></i></a></div><div id="userTreeModal" class="tree-list"></div><div class="search-list cancel-search-btn"><span><%=msg242%></span></div></div></div><div class="modal-footer"><span class="btn ok-user-select-btn btn-blue">', (c = t.okBtnText) ? a = c.call(s, {
                            hash: {},
                            data: n
                        }) : (c = s && s.okBtnText,
                            a = typeof c === l ? c.call(s, {
                                hash: {},
                                data: n
                            }) : c),
                        r += d(a) + '</span><span class="btn cancel-user-select-btn btn-white-blue">', (c = t.cancelBtnText) ? a = c.call(s, {
                            hash: {},
                            data: n
                        }) : (c = s && s.cancelBtnText,
                            a = typeof c === l ? c.call(s, {
                                hash: {},
                                data: n
                            }) : c),
                        r += d(a) + "</span></div>"
                }), this.settingObj)),
                this.userTree = new t({
                    id: "userSelectTreeModal",
                    settingObj: this.settingObj
                }),
                this.userTree.onChangeHeight(269),
                this.userTree.on(EventType.selectUser, this.onSelectUser, this),
                this.$el.find("#userTreeModal").html(this.userTree.el),
                this._bindEnter(),
                this
        },
        initSettingObj: function() {
            this.settingObj || (this.settingObj = {}),
                _.defaults(this.settingObj, {
                    showDeptDiyBtn: !1,
                    showPath: !1,
                    headerIcon: "users-select-icon",
                    headerText: msgs.msg239,
                    okBtnIcon: "btn-ok-icon",
                    okBtnText: msgs.msg86,
                    cancelBtnIcon: "btn-cancel-icon",
                    cancelBtnText: msgs.msg87
                })
        },
        _bindEnter: function() {
            var e = this;
            this.$el.find(".input-append input.input-search").bind("keydown", "return", function(s) {
                s.stopPropagation(),
                    s.preventDefault(),
                    e.$(".btn-search").click()
            })
        },
        searchDepartmentUser: function() {
            var e = this.$el.find(".input-append .input-medium").val();
            e && (this.$el.find("#userSelectTreeModal").hide(),
                this.searchUsersView || (this.searchUsersView = new i({
                        settingObj: {
                            hideAdmins: this.settingObj.hideAdmins,
                            isShowSelf: this.settingObj.isShowSelf
                        }
                    }),
                    this.searchUsersView.onChangeHeight(245),
                    this.$el.find("#userTreeModal").append(this.searchUsersView.el)),
                this.$el.find(".search-list").show(),
                this.searchUsersView.doSearch(e),
                this.searchUsersView.on(EventType.selectUser, this.onSelectUser, this))
        },
        cancelSearchUser: function() {
            this.$el.find(".search-list").hide(),
                this.$el.find("#userSelectTreeModal").show(),
                this.$el.find(".input-medium").val("")
        },
        onSelectUser: function(e) {
            return e && e.get("userId") ? (this.selectedUser || (this.selectedUser = new UserDTO),
                void this.selectedUser.set(e.toJSON())) : !1
        },
        addMember: function() {
            this.selectedUser && !this.selectedUser.get("userId") && (this.selectedUser = void 0),
                this.trigger(EventType.selectUsers, this.selectedUser)
        },
        cancelAddMember: function() {
            this.trigger(EventType.cancelSelectUsers)
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/uikit/user/UserSelectWindow", function(require, e, t) {
    var i = require("app/commons/uikit/user/UserSelectModal");
    t.exports = window.UserSelectWindow = Backbone.View.extend({
        tagName: "div",
        id: "userSelectWindow",
        className: "modal fade hide modal-window",
        userSelectModal: void 0,
        settingObj: void 0,
        initialize: function() {
            this.settingObj = this.options.settingObj,
                this.render()
        },
        render: function() {
            return this.userSelectModal = new i({
                    settingObj: this.settingObj
                }),
                this.$el.append(this.userSelectModal.el),
                this.$el.modal({
                    keyboard: !0,
                    backdrop: "static"
                }),
                this
        },
        close: function() {
            this.off(),
                this.undelegateEvents(),
                this.remove()
        }
    })
});;
define("app/commons/utils/RestHelper", function(require, t, e) {
    function r(t, e, r, i) {
        var u = $.Deferred();
        return $.ajax(n(t, e, r, i)).done(o(e, r, u)).fail(a(e, r, u)),
            u.promise()
    }

    function n(t, e, r, n) {
        return _.extend({
            url: p + e + ("GET" === t && r ? "?" + $.param(r) : ""),
            type: t,
            headers: {
                UT: cache.token,
                "Content-Type": "text/plain; charset=UTF-8",
                Accept: "text/plain;charset=UTF-8"
            },
            timeout: 6e4,
            dataType: "json",
            data: JSON.stringify(r && {
                data: r
            } || {})
        }, n || {})
    }

    function a(t, e, r) {
        return function(n) {
            log.warn("[REST]-[", t, "]-[resp]: ", n, ", [data] ", e),
                r.reject("error500")
        }
    }

    function o(t, e, r) {
        return function(n) {
            _.startsWith(n.statusCode, "error") ? (log.warn("[REST]-[" + t + "]-[resp]: " + n + ", Error happen!"),
                r.reject(n.statusCode)) : "OK" === n.statusCode ? (log.info("[REST]-[" + t + "]-[resp]: ", n, ", [param] ", e),
                r.resolve(n.data || n.statusCode)) : r.resolve(n)
        }
    }

    function i(t, e, n) {
        return r("GET", t, e, n)
    }

    function u(t, e, n) {
        return r("POST", t, e, n)
    }

    function s(t, e, n) {
        return r("PUT", t, e, n)
    }

    function c(t, e, n) {
        return r("DELETE", t, e, n)
    }
    var p = location.protocol + "//" + location.host + "/wt/java";
    e.exports = {
        get: i,
        post: u,
        put: s,
        remove: c,
        publish: function(t) {
            var e = {};
            return _.each(t, function(t, r) {
                    e[r] = {},
                        _.each(t, function(n, a) {
                            switch (a) {
                                case "get":
                                    e[r].get = _.isFunction(n) ? n : _.partial(i, t.uri);
                                    break;
                                case "post":
                                    e[r].post = _.isFunction(n) ? n : _.partial(u, t.uri);
                                    break;
                                case "put":
                                    e[r].put = _.isFunction(n) ? n : _.partial(s, t.uri);
                                    break;
                                case "remove":
                                    e[r].remove = _.isFunction(n) ? n : _.partial(c, t.uri);
                                    break;
                                default:
                                    _.isFunction(t[a]) && (e[r][a] = t[a])
                            }
                        })
                }),
                e
        }
    }
});;
define("app/commons/utils/AdminRest", function(require, e, t) {
    var r = require("app/commons/utils/RestHelper");
    t.exports = r.publish({
        serviceInfo: {
            uri: "/sc/admin/serviceinfo",
            get: !0
        },
        entInfo: {
            uri: "/sc/admin/entinfo",
            get: !0,
            put: !0
        },
        depts: {
            uri: "/sc/admin/depts",
            get: !0,
            post: !0
        },
        dept: {
            uri: "/sc/admin/dept",
            get: !0,
            put: !0,
            remove: !0
        },
        users: {
            uri: "/sc/admin/users",
            get: !0,
            post: !0,
            remove: !0,
            lock: function(e, t) {
                return r.put("/sc/admin/users/lock", e, t)
            },
            unlock: function(e, t) {
                return r.remove("/sc/admin/users/lock", e, t)
            },
            move: function(e, t) {
                return r.put("/sc/admin/users/move", e, t)
            },
            setDiskSize: function(e, t) {
                return r.put("/sc/admin/users/disk", e, t)
            },
            importUser: function(e, t) {
                return r.post("/pub/admin/users/import", e, t)
            },
            getImportStatus: function() {
                return r.get("/pub/admin/users/import")
            }
        },
        user: {
            uri: "/sc/admin/user",
            put: !0,
            remove: !0,
            lock: function(e, t) {
                return r.put("/sc/admin/user/lock", e, t)
            },
            unlock: function(e, t) {
                return r.remove("/sc/admin/user/lock", e, t)
            },
            move: function(e, t) {
                return r.put("/sc/admin/user/move", e, t)
            },
            setDiskSize: function(e, t) {
                return r.put("/sc/admin/user/disk", e, t)
            },
            updatePermission: function(e, t) {
                return r.put("/sc/admin/user/permission", e, t)
            },
            resendActiveMsg: function(e, t) {
                return r.post("/sc/admin/user/resendUserActiveMsg", e, t)
            },
            resetPwd: function(e, t) {
                return r.post("/sc/admin/user/resetUsersPwd", e, t)
            }
        },
        admins: {
            uri: "/sc/admin/admins",
            post: !0,
            remove: !0
        },
        roles: {
            uri: "/sc/admin/roles",
            get: !0,
            post: !0,
            remove: !0
        },
        role: {
            uri: "/sc/admin/role",
            get: !0,
            put: !0,
            remove: !0
        },
        syncFolders: {
            uri: "/sc/admin/syncfolders",
            get: !0,
            post: !0,
            remove: !0
        },
        syncFolder: {
            uri: "/sc/admin/syncfolder",
            get: !0,
            remove: !0
        },
        versionConfig: {
            uri: "/sc/admin/historyconfig",
            get: !0,
            put: !0
        },
        recycleFiles: {
            uri: "/sc/admin/recyclefiles",
            get: !0,
            put: !0,
            remove: !0,
            restoreAll: function(e, t) {
                return r.put("/sc/admin/recyclefiles/all", e, t)
            },
            deleteAll: function(e, t) {
                return r.remove("/sc/admin/recyclefiles/all", e, t)
            }
        },
        recycleFile: {
            uri: "/sc/admin/recyclefile",
            put: !0,
            remove: !0
        },
        operateLogs: {
            uri: "/sc/admin/operationlogs",
            get: !0,
            exportLog: function(e, t) {
                return r.post("/sc/admin/operationlogs/export", e, t)
            },
            getExportStatus: function(e, t) {
                return r.get("/sc/admin/operationlogs/export", e, t)
            },
            download: function(e, t) {
                return r.get("/sc/admin/operationlogs/download", e, t)
            }
        },
        chatLogs: {
            uri: "/sc/admin/chatlogs",
            get: !0,
            exportLog: function(e, t) {
                return r.post("/sc/admin/chatlogs/export", e, t)
            },
            getExportStatus: function(e, t) {
                return r.get("/sc/admin/chatlogs/export", e, t)
            },
            download: function(e, t) {
                return r.get("/sc/admin/chatlogs/download", e, t)
            }
        },
        copyFiles: {
            uri: "/sc/files/copy",
            post: !0
        }
    })
});;
define("app/commons/utils/ErrorType", function(require, r, e) {
    e.exports = {
        OK: "OK",
        OK_MARK: "OK",
        error404: "error404",
        error500: "error500",
        errorFileQueue: "errorFileQueue",
        errorConvertFail: "errorConvertFail",
        errorCheckToken: "errorCheckToken",
        errorTokenNotExists: "errorTokenNotExists",
        errorRequestData: "errorRequestData",
        errorCheckHashkey: "errorCheckHashkey",
        errorWrongAccount: "errorWrongAccount",
        errorWrongPWD: "errorWrongPWD",
        errorWrongOldPWD: "errorWrongOldPWD",
        errorConnotSameBuddy: "errorConnotSameBuddy",
        errorInactive: "errorInactive",
        errorAlreadyActivated: "errorAlreadyActivated",
        errorCreateFriedGroup: "errorCreateFriedGroup",
        errorFriendAlreadyExist: "errorFriendAlreadyExist",
        errorSameFile: "errorSameFile",
        errorSameFolder: "errorSameFolder",
        errorMoveToSubFolder: "errorMoveToSubFolder",
        errorNoSpace: "errorNoSpace",
        errorUserIsOffline: "errorUserIsOffline",
        errorConlectIsExist: "errorConlectIsExist",
        errorNullOfGroup: "errorNullOfGroup",
        errorExitMemeber: "errorExitMemeber",
        errorUserNoOver: "errorUserNoOver",
        errorUserAlreadyExist: "errorUserAlreadyExist",
        errorEnterpriseNotExist: "errorEnterpriseNotExist",
        errorWrongEnterpriseName: "errorWrongEnterpriseName",
        errorEmployeeAlreadyExist: "errorEmployeeAlreadyExist",
        errorInvalidProductKey: "errorInvalidProductKey",
        errorEnterpriseAlreadyExist: "errorEnterpriseAlreadyExist",
        errorFileNotFound: "errorFileNotFound",
        errorFileLocked: "errorFileLocked",
        errorNoPermission: "errorNoPermission",
        errorUserLocked: "errorUserLocked",
        errorNotSupported: "errorNotSupported",
        errorMQDisconnected: "errorMQDisconnected",
        errorFolderSpaceOver: "errorFolderSpaceOver",
        errorProductKeyFree: "errorProductKeyFree",
        errorAccountExpired: "errorAccountExpired",
        errorConferenceMemberOver: "errorConferenceMemberOver",
        errorDownCountOver: "errorDownCountOver",
        errorFlowOver: "errorFlowOver",
        errorExpirationTimeOver: "errorExpirationTimeOver",
        errorDiskUsedOver: "errorDiskUsedOver",
        errorFreeCode: "errorFreeCode",
        errorTodayApplyOver: "errorTodayApplyOver",
        errorFolderMaxSize: "errorFolderMaxSize",
        errorNoParentMaxSize: "errorNoParentMaxSize",
        errorMoveToOwn: "errorMoveToOwn",
        errorPersonalDiskDisabled: "errorPersonalDiskDisabled",
        errorVersionConflict: "errorVersionConflict",
        errorAuditing: "errorAuditing",
        errorAuditFail: "errorAuditFail",
        errorSameName: "errorSameName",
        errorUserNoExistInLdap: "errorUserNoExistInLdap",
        errorWrongLDAPAccount: "errorWrongLDAPAccount",
        errorLDAPUserLocked: "errorLDAPUserLocked",
        errorPayExpired: "errorPayExpired",
        errorEntDiskGreetThanFreeSize: "errorEntDiskGreetThanFreeSize",
        errorOrderNotExist: "errorOrderNotExist",
        errorPersonDiskOverflow: "errorPersonDiskOverflow",
        errorPersonDiskUsedExceedAllocSize: "errorPersonDiskUsedExceedAllocSize",
        errorDeleteDepartUserExist: "errorDeleteDepartUserExist",
        errorFolderDeleted: "errorFolderDeleted",
        errorFileDeleted: "errorFileDeleted",
        errorEditSysFolder: "errorEditSysFolder",
        errorAdminExists: "errorAdminExists",
        errorZipTaskRunning: "errorZipTaskRunning",
        errorFileIsZipping: "errorFileIsZipping",
        errorChooseIms: "errorChooseIms",
        errorAccountUsed: "errorAccountUsed",
        errorValidationCode: "errorValidationCode",
        errorWaiting: "errorWaiting",
        errorZipNoFiles: "errorZipNoFiles",
        errorZipMaxSize: "errorZipMaxSize",
        errorUserNotActive: "errorUserNotActive",
        errorUserDeleted: "errorUserDeleted",
        errorInviteChairman: "errorInviteChairman",
        errorNotAuthed: "errorNotAuthed",
        errorMailOver: "errorMailOver",
        viewFileAsImgError: function(r) {
            var e = msgs.msgServerError;
            switch (r) {
                case ErrorType.errorFileNotFound:
                    e = msgs.msg1200;
                    break;
                case ErrorType.errorNoPermission:
                    e = msgs.msgNoPermission2;
                    break;
                case ErrorType.errorFileDeleted:
                    e = msgs.msgAttFileNoExist;
                    break;
                default:
                    e = msgs.msgServerError
            }
            return e
        },
        updateFileInfoError: function(r) {
            var e = msgs.msgServerError;
            switch (r) {
                case ErrorType.errorNoPermission:
                    e = msgs.msgNoPermission;
                    break;
                case ErrorType.errorFileLocked:
                    e = msgs.msgFileIsLock;
                    break;
                case ErrorType.errorVersionConflict:
                    e = msgs.msgFileVerConflict;
                    break;
                case ErrorType.errorDiskUsedOver:
                    e = msgs.msgServerError;
                    break;
                case ErrorType.errorNoSpace:
                    e = msgs.msgDiskSizeLack;
                    break;
                case ErrorType.errorSameFolder:
                    e = msgs.msgFolderSaveConflict;
                    break;
                case ErrorType.errorSameFile:
                    e = msgs.msgFileConflict;
                    break;
                case ErrorType.errorRequestData:
                    e = msgs.msgRequestDataError;
                    break;
                case ErrorType.errorFolderMaxSize:
                    e = msgs.msgErrorFolderMaxSize;
                    break;
                case ErrorType.errorNoParentMaxSize:
                    e = msgs.msgErrorNoParentMaxSize;
                    break;
                default:
                    e = msgs.msgServerError
            }
            return e
        },
        viewAsTxtError: function(r) {
            var e = msgs.msgServerError;
            switch (r) {
                case ErrorType.errorNotSupported:
                    e = msgs.msgReadUnsupport;
                    break;
                case ErrorType.errorFileNotFound:
                    e = msgs.msgFileNoExist;
                    break;
                case ErrorType.errorNoPermission:
                    e = msgs.msgNoPermission;
                    break;
                default:
                    e = msgs.msgServerError
            }
            return e
        },
        registerDoneError: function(r) {
            var e = msgs.msgServerError;
            switch (r) {
                case ErrorType.errorAccountUsed:
                    e = msgs.msgAccountUsed;
                    break;
                case ErrorType.errorEnterpriseAlreadyExist:
                    e = msgs.msgEntNameUsed;
                    break;
                default:
                    e = msgs.msgServerError
            }
            return e
        },
        restoreFileVersionError: function(r) {
            var e = msgs.msgServerError;
            switch (r) {
                case ErrorType.errorFolderDeleted:
                    e = msgs.msgFolderDeleted;
                    break;
                case ErrorType.errorSameFile:
                    e = msgs.msgFileConflict;
                    break;
                case ErrorType.error500:
                default:
                    e = msgs.msgServerError
            }
            return e
        },
        entDiskCopyError: function(r) {
            var e = "";
            switch (r) {
                case ErrorType.errorNoPermission:
                    e = msgs.msgNoPermission;
                    break;
                case ErrorType.errorSameFile:
                    e = msgs.msgSameFile;
                    break;
                case ErrorType.errorSameFolder:
                    e = msgs.msgFolderSaveConflict;
                    break;
                case ErrorType.errorNoSpace:
                    e = msgs.msgDiskSizeLack;
                    break;
                case ErrorType.errorFolderSpaceOver:
                    e = msgs.msgFolderSpaceOver;
                    break;
                case ErrorType.errorMoveToOwn:
                    e = msgs.msgErrorCopyToOwn;
                    break;
                default:
                    e = msgs.msgServerError
            }
            return e
        },
        createDeptError: function(r) {
            var e;
            switch (r) {
                case ErrorType.errorSameName:
                    e = msgs.msgDeptExisted;
                    break;
                case ErrorType.errorNoSpace:
                    e = msgs.msgDiskLessAssign;
                    break;
                case ErrorType.errorNoParentMaxSize:
                    e = msgs.msgErrorNoParentDeptMaxSize;
                    break;
                default:
                    e = msgs.msgCreateFail
            }
            return e
        },
        updateDeptMaxSizeError: function(r) {
            var e = msgs.msgServerError;
            switch (r) {
                case ErrorType.errorNoPermission:
                    e = msgs.msgNoPermission;
                    break;
                case ErrorType.errorNoSpace:
                    e = msgs.msgDiskLessAssign;
                    break;
                case ErrorType.errorFolderMaxSize:
                    e = msgs.msgErrorFolderMaxSize;
                    break;
                case ErrorType.errorNoParentMaxSize:
                    e = msgs.msgErrorNoParentDeptMaxSize
            }
            return e
        },
        lockUserError: function(r) {
            var e = msgs.msgServerError;
            switch (r) {
                case ErrorType.errorNoPermission:
                    e = msgs.msgNoPermission;
                    break;
                case ErrorType.error500:
            }
            return e
        },
        updateSyncFolderError: function(r) {
            var e = msgs.msgServerError;
            switch (r) {
                case ErrorType.errorNoPermission:
                    e = msgs.msgNoPermissonTip;
                    break;
                case ErrorType.errorFolderDeleted:
                default:
                    e = msgs.msgServerError
            }
            return e
        },
        resendUserActiveMsgError: function(r) {
            var e = msgs.msgServerError;
            switch (r) {
                case "errorAlreadyActived":
                    e = msgs.msgUserActiveError;
                    break;
                case ErrorType.errorWaiting:
                    e = msgs.msgErrorWaiting;
                    break;
                case ErrorType.error500:
            }
            return e
        },
        createFolderError: function(r) {
            var e = msgs.msgSaveFail;
            switch (r) {
                case ErrorType.errorSameFolder:
                    e = msgs.msgFolderSaveConflict;
                    break;
                case ErrorType.errorNoPermission:
                    e = msgs.msgNoPermission;
                    break;
                case ErrorType.errorFolderDeleted:
                    e = msgs.msgParentFolderDeleted;
                    break;
                case ErrorType.errorNoSpace:
                    e = msgs.msgDiskLessAssign;
                    break;
                case ErrorType.errorPersonalDiskDisabled:
                    e = msgs.msgPersonFolderClosed;
                    break;
                case ErrorType.errorNoParentMaxSize:
                    e = msgs.msgErrorNoParentMaxSize
            }
            return e
        },
        saveOrUpdateFileError: function(r) {
            var e = msgs.msgServerError;
            switch (r) {
                case ErrorType.errorSameFile:
                    e = msgs.msgFileConflict;
                    break;
                case ErrorType.errorFolderDeleted:
                    e = msgs.msgCreateDestFolderDeleted;
                    break;
                case ErrorType.errorVersionConflict:
                    e = msgs.msgVersionEditConflict;
                    break;
                case ErrorType.errorNoPermission:
                    e = msgs.msgNoPermissonTip;
                    break;
                default:
                    e = msgs.msgSysBusy
            }
            return e
        },
        adminDeleteFilesError: function(r) {
            var e = msgs.msgDeleteFail;
            switch (r) {
                case ErrorType.errorNoPermission:
                    e = msgs.msgNoPermission;
                    break;
                case ErrorType.errorVersionConflict:
                    e = msgs.msgDeleteOnVerConflict;
                    break;
                case ErrorType.error500:
                default:
                    e = msgs.msgDeleteFail
            }
            return e
        },
        loginError: function(r) {
            var e = msgs.msgServerError;
            switch (r) {
                case ErrorType.errorWrongPWD:
                    e = msgs.msgPasswordError;
                    break;
                case ErrorType.errorWrongAccount:
                    e = msgs.msgAccountErr;
                    break;
                case ErrorType.errorUserLocked:
                    e = msgs.msgAccountLocked;
                    break;
                case ErrorType.errorAuditFail:
                    e = msgs.msgServiceExpire;
                    break;
                case ErrorType.errorUserNotActive:
                    e = msgs.msgAccountNotActive;
                    break;
                case ErrorType.errorUserDeleted:
                    e = msgs.msgAccountDeleted;
                    break;
                case ErrorType.errorNotAuthed:
                    e = msgs.msgUnAuthErr;
                    break;
                case ErrorType.errorExpirationTimeOver:
                    e = msgs.msgActiveUserErr
            }
            return e
        },
        moveFileError: function(r) {
            var e = null;
            switch (r) {
                case ErrorType.errorNoPermission:
                    e = msgs.msgNoPermission;
                    break;
                case ErrorType.errorSameFolder:
                    e = msgs.msgMoveOnFolderConflict;
                    break;
                case ErrorType.errorSameFile:
                    e = msgs.msgMoveOnFileConflict;
                    break;
                case ErrorType.errorMoveToSubFolder:
                    e = msgs.msgMoveToSub;
                    break;
                case ErrorType.errorFileLocked:
                    e = msgs.msgMoveLockFileErr;
                    break;
                case ErrorType.errorVersionConflict:
                    e = msgs.msgMoveOnVersionConflict;
                    break;
                case ErrorType.errorFolderSpaceOver:
                    e = msgs.msgFolderSpaceOver;
                    break;
                case ErrorType.error500:
                default:
                    e = msgs.msgServerError
            }
            return e
        },
        getLinkByCodeError: function(r) {
            var e = null;
            switch (r) {
                case ErrorType.errorExpirationTimeOver:
                    e = msgs.msgLinkExpire;
                    break;
                case ErrorType.errorFileNotFound:
                    e = msgs.msg1200;
                    break;
                case ErrorType.error500:
                default:
                    e = msgs.msgLinkNoExist
            }
            return e
        },
        createLinkError: function(r) {
            var e = msgs.msgServerError;
            switch (r) {
                case ErrorType.errorNoPermission:
                    e = msgs.msgNoPermission;
                    break;
                case ErrorType.errorFileDeleted:
                    e = msgs.msgFileDeleted;
                    break;
                default:
                    e = msgs.msgServerError
            }
            return e
        },
        showDeleteFileError: function(r) {
            var e = "";
            switch (r) {
                case ErrorType.OK_MARK:
                    break;
                case ErrorType.errorNoPermission:
                    e = msgs.msgNoPermission;
                    break;
                case ErrorType.errorFileLocked:
                    e = msgs.msgDeleteLockFileErr;
                    break;
                case ErrorType.errorVersionConflict:
                    e = msgs.msgFileVerConflict;
                    break;
                case ErrorType.error500:
                default:
                    e = msgs.msgServerError
            }
            return e
        },
        saveToPersonDiskError: function(r) {
            var e = "";
            switch (r) {
                case ErrorType.errorSameFile:
                    e = msgs.msgSameFile;
                    break;
                case ErrorType.errorNoSpace:
                    e = msgs.msgPersonDiskNoSpace;
                    break;
                default:
                    e = msgs.msgSaveFail
            }
            return e
        }
    }
});;
define("app/commons/utils/EventType", function(require, e, t) {
    var o = "entFolder: ",
        l = "currentEntFolder:",
        a = {
            changeCurrentEntFolder: l + "change",
            addEntFolder: o + "add",
            newFile: "newFile",
            rename: "rename",
            removeFile: "removeFile",
            updateFile: "updateFile",
            updateNextFile: "updateNextFile",
            swfuploadLoaded: "swfuploadLoaded",
            fileDialogStart: "fileDialogStart",
            fileQueued: "fileQueued",
            fileQueueError: "fileQueueError",
            fileDialogComplete: "fileDialogComplete",
            uploadStart: "uploadStart",
            uploadBeforeSend: "uploadBeforeSend",
            uploadProgress: "uploadProgress",
            uploadSuccess: "uploadSuccess",
            uploadComplete: "uploadComplete",
            uploadError: "uploadError",
            uploadCancelAll: "uploadCancelAll",
            updateDialogShow: "updateDialogShow",
            updateDialogComplete: "updateDialogComplete",
            updateFileComplete: "updateFileComplete",
            upSendDialogComplete: "upSendDialogComplete",
            upSendFileComplete: "upSendFileComplete",
            upSendNextFile: "upSendNextFile",
            moveFiles: "moveFiles",
            loadFile: "loadFile",
            addFolderNodes: "addFolderNodes",
            selectFile: "selectFile",
            selectFolder: "selectFolder",
            checkChange: "checkChange",
            addFile: "addFile",
            changeCurrentFolder: "changeCurrentFolder",
            loadRecycleFiles: "recycle:load",
            loadPersonalRecycleFiles: "personalRecycle:load",
            addUsualContact: "addUsualContact",
            removeUsualContact: "removeUsualContact",
            lockShareFile: "lockShareFile",
            addRemindFile: "addRemindFile",
            removeRemindFile: "removeInterestFile",
            addFavouriteFile: "addFavouriteFile",
            removeFavouriteFile: "removeFavouriteFile",
            addShareLink: "addShareLink",
            removeShareLink: "removeShareLink",
            selectEntTree: "selectEntTree",
            selectPerTree: "selectPerTree",
            selectFileTreeBottom: "selectFileTreeBottom",
            fileDialogComplete: "fileDialogComplete",
            fileMsgArrive: "fileMsgArrive",
            fileMsgShow: "fileMsgShow",
            addFolderNode: "addFolderNode",
            selectPermissionOk: "selectPermissionOk",
            selectPermissionCancel: "selectPermissionCancel",
            submitUserPermission: "submitUserPermission",
            cancelUserPermission: "cancelUserPermission",
            clearUserPermission: "clearUserPermission",
            secondConfirm: "secondConfirm",
            personDiskDisabled: "personDiskDisabled",
            onCreateFolderConfirm: "onCreateFolderConfirm",
            clearContextmenus: "clearContextmenus",
            deleteFileLabInLib: "deleteFileLabInLib"
        },
        r = {
            addDepartment: "add",
            loadDepartment: "load",
            currentUserInfoChange: "InfoChange",
            addUserEvent: "addUser",
            selectUser: "selectUser",
            selectDept: "selectDept",
            selectRole: "selectRole",
            cancelSelectDept: "cancelSelectDept",
            renameDept: "renameDept",
            deleteDept: "deleteDept",
            orderDept: "orderDept",
            cancelOrderDept: "cancelOrderDept",
            addDeptUsers: "addDeptUsers",
            checkUser: "checkUser",
            checkDept: "checkDept",
            chatMsg: "chatMsg",
            switchChatUser: "switchChatUser",
            removeChatUser: "removeChatUser",
            selectUsers: "selectUsers",
            cancelSelectUsers: "cancelSelectUsers",
            selectFolders: "selectFolders",
            cancelSelectFolders: "cancelSelectFolders",
            receiveChatMsg: "receiveChatMsg",
            receiveSysNotice: "receiveSysNotice",
            submitPersonalDisk: "submitPersonalDisk",
            selectCloudContacts: "selectCloudContacts",
            selectContact: "selectContact",
            showContactSelectView: "showContactSelectView",
            showDelContactsView: "showDelContactsView",
            delCloudContacts: "delCloudContacts",
            userInfoChange: "userInfoChange",
            usersChange: "usersChange",
            importCancel: "importCancel",
            importConfirm: "importConfirm",
            reImport: "reImport",
            importValidateError: "importValidateError",
            operateSuccess: "operateSuccess",
            passwordSet: "passwordSet"
        },
        s = {
            AmqDisconnect: "AmqDisconnect",
            AmqConnect: "AmqConnect",
            changeSlide: "changeSlide",
            closeSlide: "closeSlide",
            openSlide: "openSlide",
            pagerStart: "pagerStart",
            pagerEnd: "pagerEnd",
            showChatMsgView: "showChatMsgView",
            showChatHistoryView: "showChatHistoryView",
            refreshConfInfo: "refreshConfInfo",
            seachRecord: "seachRecord",
            getRecord: "getRecord",
            changeHeight: "changeHeight",
            changeWidth: "changeWidth",
            onSearch: "onSearch",
            fetched: "fetched",
            fetchPageData: "fetchPageData"
        },
        i = {
            phoneDial: "phoneDial",
            phoneMsg: "phoneMsg",
            PhoneMeeting: "PhoneMeeting",
            redial: "redial",
            openMeeting: "openMeeting",
            openMeetingFail: "openMeetingFail",
            closeOpenMeetingView: "closeOpenMeetingView",
            closePhoneView: "closePhoneView",
            cancelEditPhoneContact: "cancelEditPhoneContact",
            showAddContact: "showAddContact",
            showEditContact: "showEditContact",
            showPhoneDialView: "showPhoneDialView",
            showPhoneMeetingView: "showPhoneMeetingView",
            onCancelShare: "onCancelShare",
            viewerDelete: "viewerDelete"
        },
        n = {
            nextStep: "nextStep",
            prevStep: "prevStep",
            submit: "submit",
            shiftView: "shiftView",
            edit: "edit",
            cancel: "cancel",
            select: "select",
            permission: "permission",
            deletion: "deletion",
            startLoad: "startLoad",
            stopLoad: "stopLoad"
        };
    t.exports = _.extend({}, a, r, s, i, n)
});;
define("app/commons/utils/FileRest", function(require, e, s) {
    var i = require("app/commons/utils/RestHelper");
    s.exports = i.publish({
        remindFiles: {
            uri: "/sc/reminds",
            post: !0,
            put: !0,
            remove: function(e, s) {
                return i.post("/sc/reminds/delete", e, s)
            }
        },
        recycleFiles: {
            uri: "/sc/recyclefiles",
            post: !0
        }
    })
});;
define("app/commons/utils/MessageType", function(require, e, i) {
    i.exports = {
        ChatMessage: "Chat",
        Reply: "Reply",
        ForceOffline: "UserSign",
        PersonalDiskDisabled: "PersonalDiskDisabled",
        InstantFile: "InsFile",
        AudioInvite: "AudInv",
        AudioStart: "AudSta",
        AudioRefuse: "AudRef",
        AudioEnd: "AudEnd",
        OfflineFile: "OffFile",
        isChatMsgType: function(e) {
            return this._chatMsgType || (this._chatMsgType = [this.ChatMessage, this.Reply, this.InstantFile, this.OfflineFile]),
                _.contains(this._chatMsgType, e)
        },
        UserJoin: "UserJoin",
        UserStatusChange: "UserSCh",
        UserLeave: "UserLea",
        UserInfoUpdate: "UserUpd",
        Login: "Login",
        ColleagueNew: "ColNew",
        SysMsg: "SysMsg",
        isNoticeMsgType: function(e) {
            return this._noticeMsgType || (this._noticeMsgType = [this.UserJoin, this.UserStatusChange, this.UserLeave, this.UserInfoUpdate, this.Login, this.ColleagueNew, this.ForceOffline, this.PersonalDiskDisabled, this.SysMsg, this.SynLogin, this.NewSyncFolder]),
                _.contains(this._noticeMsgType, e)
        },
        FileDown: "fd",
        FileAccessRecord: "fa",
        ShareFileNew: "SFNew",
        ShareFileUpload: "SFUpload",
        UploadSendFile: "USFile",
        DoSendFile: "DSFile",
        FileConvertDone: "FileConvertDone",
        FileUploadDone: "FileUploadDone",
        getFileMsgType: function() {
            return this._fileMsgType || (this._fileMsgType = [this.FileDown, this.FileAccessRecord, this.ShareFileNew, this.FileConvertDone]),
                this._fileMsgType
        },
        isFileMsgType: function(e) {
            return _.contains(this.getFileMsgType(), e)
        },
        isChatFileMsgType: function(e) {
            return this._chatFileMsgType || (this._chatFileMsgType = [this.ShareFileUpload, this.DoSendFile]),
                _.contains(this._chatFileMsgType, e)
        },
        getUploadSendFileMsgType: function() {
            return this._uploadSendFileMsgType || (this._uploadSendFileMsgType = [this.UploadSendFile]),
                this._uploadSendFileMsgType
        },
        phone: "phone",
        PhoneMeeting: "PhoneMeeting",
        SynLogin: "SynLogin",
        SendVoice: "SVoice",
        NewSyncFolder: "NewSF"
    }
});;
define("app/commons/utils/resturl", function(require, o, e) {
    function r(o, e, r, s, t) {
        r && _.isFunction(r) && (t = r,
                r = {}),
            s && _.isFunction(s) && (t = s,
                s = null);
        var n = l(o, e, r, s && !_.isFunction(s) ? s : {});
        return $.ajax(n).done(function(o) {
            var l;
            if (constants.isResponseError(o))
                log.warn("[REST]-[" + e + "]-[resp]: ", o, ", [param] ", r),
                l = o;
            else if (constants.isResponseOK(o))
                log.info("[REST]-[" + e + "]-[resp]: ", o, ", [param] ", r),
                l = o;
            else
                try {
                    l = JSON.parse(o)
                } catch (s) {
                    l = o,
                        log.warn("[ERR]-[REST]-[" + e + "]-[resp] ", o, "  [param] ", r)
                }
            t && t(l)
        }).fail(function(o) {
            log.warn("[REST]-[", e, "]-[resp]: ", o, ", [data] ", r),
                t && t("error500")
        })
    }

    function l(o, e, r, l) {
        return seajs.restsecret && _.include(o, "java") && s[e] && (o = n,
                e = s[e]),
            _.extend({
                url: o + e,
                type: "POST",
                headers: {
                    UT: cache.token,
                    "Content-Type": _.include(o, "/wt/node") ? "application/json; charset=UTF-8" : "text/plain; charset=UTF-8",
                    Accept: "text/plain;charset=UTF-8"
                },
                timeout: 6e4,
                data: _.isString(r) ? r : JSON.stringify(r),
                dataType: "text"
            }, l || {})
    }
    var s = require("app/commons/resturl/UrlEncode"),
        t = location.protocol + "//" + location.host + "/wt/java",
        n = location.protocol + "//" + location.host + "/wt/flex2",
        a = location.protocol + "//" + location.host + "/wt/node",
        i = "http://" + location.host,
        p = location.protocol + "//" + location.host + "/wt/fm",
        c = "http://" + location.host + "/wt/fm",
        u = {
            adminUrl: require("app/commons/resturl/AdminUrl"),
            fileUrl: require("app/commons/resturl/FileUrl"),
            entDiskUrl: require("app/commons/resturl/EntDiskUrl"),
            enterpriseUrl: require("app/commons/resturl/EnterpriseUrl"),
            loginUrl: require("app/commons/resturl/LoginUrl"),
            messageUrl: require("app/commons/resturl/MessageUrl"),
            personDiskUrl: require("app/commons/resturl/PersonDiskUrl"),
            roleUrl: require("app/commons/resturl/RoleUrl"),
            shareLinkUrl: require("app/commons/resturl/ShareLinkUrl"),
            userUrl: require("app/commons/resturl/UserUrl"),
            webUrl: require("app/commons/resturl/WebUrl"),
            permissionUrl: require("app/commons/resturl/PermissionUrl"),
            telUrl: require("app/commons/resturl/TelUrl"),
            phoneUrl: require("app/commons/resturl/PhoneUrl"),
            orderUrl: require("app/commons/resturl/OrderUrl"),
            fileMgrUrl: require("app/commons/resturl/FileMgrUrl")
        },
        m = {};
    _.each(u, function(o, e) {
            _.each(o, function(o, l) {
                var s = t;
                "webUrl" === e || "phoneUrl" === e ? s = a : "fileMgrUrl" === e && (s = p),
                    this[l] = _.partial(r, s, o)
            }, this)
        }, m),
        e.exports = _.extend({
            baseurl: "/os",
            baseurl2: "/wt/",
            fmservice: p,
            previewUrl: location.protocol + "//" + location.host + "/onlinedisk/",
            fdfsBaseUrl: location.protocol + "//" + location.host,
            flexService: t,
            createValidationCode: t + "/pub/createValidationCode",
            nodeFileDownload: a + "/v27/download/file",
            takePhotoUrl: i + "/upload/usericon",
            uploadLogoUrl: i + "/upload/entlogo",
            uploadUrl: i + "/upload/single",
            uploadSendFile: i + "/upload/send/file",
            zipDownload: c + "/sc/download/zipfile",
            getMediaStreamUrl: c + "/file/getMediaStream",
            excelParse: t + "/pub/user/parseImportUsers",
            excelDownloadUrl: a + "/file/download/excel",
            submitEntAuth: c + "/sc/tel/updateTelAuthInfo",
            execDownloadFile: a + "/v27/download/file"
        }, m)
});;
define("app/commons/utils/constants", function(require, e, t) {
    {
        var n = require("app/commons/utils/EventType"),
            s = require("app/commons/utils/ErrorType"),
            r = require("app/commons/utils/MessageType"),
            i = require("app/commons/utils/resturl"),
            o = require("app/commons/utils/AdminRest"),
            a = require("app/commons/resturl/NodeRest"),
            l = require("app/commons/msg/message_zh_CN"),
            c = require("app/commons/msg/message_zh_TW"),
            u = require("app/commons/msg/message_en_US");
        require("app/commons/models/message/AppEvent")
    }
    _.extend(window, {
        EventType: n,
        ErrorType: s,
        MessageType: r,
        resturl: i,
        AdminRest: o,
        nodeRest: a,
        msgs: {},
        model: {},
        collection: {},
        cache: {},
        router: {},
        setting: {},
        view: {}
    });
    var d = webhelper.getLang();
    window.lang = d,
        $("body").addClass(d),
        seajs.isPrivate && $("body").addClass("private"),
        window.msgs = "zh_TW" === d ? c : "en_US" === d ? u : l,
        window.__html = function(e, t) {
            return _.template(e(t), msgs)
        },
        t.exports = {
            ERROR_MARK: "error",
            OK_MARK: "OK",
            QUEUED: "QUEUED",
            uploadFileSizeLimit: 200,
            LINK_PWD_STR: "ABCDEFGHIGKLMNPQRSTUVWXYabcdefghigkmnprstuvwxy",
            docType: ["doc", "docx", "wps", "dot", "dotx", "odt", "DOC", "DOCX", "WPS", "DOT", "DOTX", "ODT"],
            excelType: ["xls", "xlsx", "xlt", "csv", "XLS", "XLSX", "XLT", "CSV"],
            imgType: ["png", "jpg", "gif", "jpeg", "bmp", "ico", "wbmp", "tif", "TIF", "PNG", "JPG", "GIF", "JPEG", "BMP", "ICO", "WBMP"],
            pptType: ["ppt", "pptx", "PPT", "PPTX"],
            pdfType: ["pdf", "PDF"],
            txtType: ["txt", "TXT"],
            htmlType: ["html", "htm", "HTML", "HTM"],
            mp4Type: ["mp4", "mov", "flv", "webm", "m4v", "avi", "ogv", "f4v", "wmv", "MP4", "MOV", "FLV", "WEBM", "M4V", "AVI", "OGV", "F4V", "WMV"],
            mp3Type: ["mp3", "aac", "m4a", "f4a", "ogg", "oga", "MP3", "AAC", "M4A", "F4A", "OGG", "OGA"],
            zipType: ["zip", "7z", "war", "tar", "rar", "ZIP", "7Z", "WAR", "TAR", "RAR"],
            invalidType: ["exe", "bat", "cmd", "EXE", "BAT", "CMD"],
            departIdNull: -1,
            defaultIcon: "/wt/assets/img/defaultAvatar64man.png",
            defaultWomenIcon: "/wt/assets/img/defaultAvatar64woman.png",
            defaultImgThumb: "/wt/assets/img/default-img-thumb.png",
            FILE_PAGE_SIZE: 50,
            pattern: {
                digits: /^\d+$/,
                integer: /^[1-9]+\d*$/,
                number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
                email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
                url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                Phone: /^0\d{2,3}(\-)?\d{7,8}$/,
                Mobile: /^(1(([35][\d])|(47)|[8][\d]|(70)))\d{8}$/,
                entName: /^[\u0391-\uFFE5a-zA-Z0-9][\u0391-\uFFE5a-zA-Z0-9\s\.\-]{0,48}[\u0391-\uFFE5a-zA-Z0-9\.\-]$/,
                userName: /^[\u0391-\uFFE5a-zA-Z0-9\s]{2,20}$/,
                fileName: /[\/\\:\*\?"<>\|]/,
                password: /^\S{6,30}$/
            },
            isEmail: function(e) {
                return this.pattern.email.test(e)
            },
            timeUnit: {
                year: "year",
                month: "month"
            },
            CallState: {
                failed: "FAILED",
                answered: "ANSWERED",
                ringing: "RINGING",
                disconnected: "DISCONNECTED"
            },
            permissionType: {
                user: "user",
                department: "department",
                group: "group",
                admin: "admin"
            },
            PermissionOperateMap: {
                read: ["view", "attention", "unattention", "property", "label"],
                upload: ["upload", "create-file", "create"],
                download: ["download"],
                write: ["view", "edit", "lock", "unlock", "attention", "unattention", "copy", "move", "rename", "create", "create-file", "collect"],
                share: ["share"],
                "delete": ["delete"],
                local: ["lock", "unlock", "attention", "unattention"],
                manage: ["permission", "sync"],
                createFolder: ["create-folder", "create"]
            },
            OperateBtnMap: {
                move: "move-btn",
                copy: "copy-btn",
                copyto: "copyto-btn",
                rename: "rename-btn",
                "delete": "delete-btn",
                download: "download-btn",
                upload: "upload-btn",
                "create-file": "create-file",
                "create-folder": "create-folder",
                edit: "edit-btn",
                lock: "lock-btn",
                unlock: "unlock-btn",
                attention: "attention-btn",
                unattention: "del-attention-btn",
                share: "share-btn",
                permission: "permission-btn",
                sync: "sync-btn",
                property: "property-btn",
                label: "label-btn",
                collect: "collect-btn"
            },
            FilePermission: {
                Read: "Read",
                Write: "Write",
                Download: "Download",
                Upload: "Upload",
                Delete: "Delete",
                Share: "Share",
                Local: "Local",
                manage: "Manage"
            },
            PhoneMeetingStatus: {
                Schedule: "Schedule",
                Creating: "Creating",
                Created: "Created",
                Destroyed: "Destroyed"
            },
            ConferenceMemberStatus: {
                Invited: "invited",
                Accepted: "accepted",
                Refused: "refused",
                Attended: "attended"
            },
            ConferenceType: {
                appointment: 0,
                immediate: 1
            },
            ConferenceStatus: {
                Created: "new",
                Held: "held",
                Ended: "ended"
            },
            UserStatus: {
                Online: "online",
                Busy: "busy",
                Corbet: "corbet",
                Offline: "offline"
            },
            DATE_TIME_FORMAT: "YYYY-MM-DD HH:mm:ss",
            TIME_FORMAT: "HH:mm:ss",
            dateTypeMap: {
                all: msgs.msgAll,
                day_1: "今天",
                week_1: "最近一周",
                month_1: "最近一个月",
                month_3: "最近三个月"
            },
            specialFolderMap: {
                Share: msgs.msgShareFolder,
                share: msgs.msgShareFolder,
                "My documents": msgs.msgMyDoc,
                "My pictures": msgs.msgMyPic,
                "Received files": msgs.msgReceiveFiles,
                "Send files": msgs.msgSendFiles
            },
            entSpecialFolderNames: {
                Share: msgs.msgShareFolder,
                share: msgs.msgShareFolder
            },
            personSpecialFolderNames: {
                "My documents": msgs.msgMyDoc,
                "My pictures": msgs.msgMyPic,
                "Received files": msgs.msgReceiveFiles,
                "Send files": msgs.msgSendFiles,
                "My device": msgs.msgMyDevice
            },
            entSystemFolderNames: [msgs.msgSimShareFolder, msgs.msgTraShareFolder, msgs.msgEngShareFolder],
            personSystemFolderNames: [msgs.msgSimMyDoc, msgs.msgSimMyPic, msgs.msgSimReceiveFiles, msgs.msgSimSendFiles, msgs.msgTraMyDoc, msgs.msgTraMyPic, msgs.msgTraReceiveFiles, msgs.msgTraSendFiles, msgs.msgEngMyDoc, msgs.msgEngMyPic, msgs.msgEngReceiveFiles, msgs.msgEngSendFiles],
            rootFolderId: {
                entDisk: "entRoot",
                personDisk: "personRoot"
            },
            fileDeleteStatus: {
                active: 0,
                recycle: 1,
                deleted: -1
            },
            MsgStatus: {
                New: "New",
                Read: "Read"
            },
            adminStatus: {
                active: "act",
                locked: "lock"
            },
            serviceType: {
                userAdd: "USER_ADD",
                entDisk: "ENT_DISK",
                tel: "TEL",
                search: "search"
            },
            userNumConvert: function(e) {
                return !e || e.length <= 0 || "--" === e ? "0" : _.numberFormat(e, 0) + " " + msgs.msgPerson
            },
            timeConvertMinutes: function(e) {
                return e ? e + " " + msgs.msgMinute : "0 " + msgs.msgMinute
            },
            UserType: {
                PersonalUser: 0,
                BusinessUser: 1,
                Administrator: 2,
                SecondAdministrator: 3
            },
            Cookies: {
                COOKIE_ENTERPRISE_NAME: "en",
                COOKIE_USER_ACCOUNT: "ua",
                COOKIE_USER_TOKEN: "ut",
                COOKIE_KEEP_SIGN_IN: "ksi",
                COOKIE_SIGN_IN: "si",
                COOKIE_ENTADMIN_TOKEN: "eat"
            },
            FileCollectionType: {
                entDisk: "entDisk",
                personDisk: "personDisk",
                shareList: "shareList",
                remindList: "remindList"
            },
            shareType: {
                download: "Download",
                upload: "Upload",
                preview: "Preview"
            },
            FilePermissionErrorMsg: {
                Read: "无此权限!",
                Write: "无此权限!",
                Download: "无此权限!",
                Upload: "无此权限!",
                Delete: "无此权限!",
                Share: "无此权限!",
                List: "无此权限!",
                Local: "无此权限!"
            },
            operation: {
                NewFolder: "NewFolder",
                NewFile: "NewFile",
                UploadFile: "UploadFile",
                RenameFile: "RenameFile",
                RenameFolder: "RenameFolder",
                Delete: "Delete",
                DeletePermanently: "DeletePermanently",
                Move: "Move",
                RestoreFromRecycle: "RestoreFromRecycle",
                RestoreVersion: "RestoreVersion",
                EmptyRecycle: "EmptyRecycle",
                EditFile: "EditFile",
                ShareFile: "ShareFile",
                Lock: "Lock",
                SetFolderSize: "SetFolderSize",
                SendFile: "SendFile"
            },
            fileType: {
                shareDisk: "sharedisk",
                onlineDisk: "onlinedisk",
                sendFile: "sendfile",
                sendVoice: "sendvoice",
                confDoc: "conferenceDoc",
                icon: "icon",
                temp: "tempfile"
            },
            fileStatus: {
                active: 0,
                recycle: 1,
                deleted: -1
            },
            FileConvertStatus: {
                UPLOAD_TO_CACHE: "0",
                UPLOAD_TO_FS: "1",
                CONVERT_START: "2",
                CONVERT_DONE: "3",
                CONVERT_ERROR: "4"
            },
            FileLeftNav: {
                RemindFileView: "RemindFileView",
                LinkFileView: "LinkFileView",
                FavFileView: "FavFileView",
                RecycleView: "RecycleView"
            },
            menu: {
                entDiskView: "entDiskView",
                personDiskView: "personDiskView",
                remindFileView: "remindFileView",
                favFileView: "favFileView",
                linkFileView: "linkFileView",
                entRecycleView: "entRecycleView",
                personRecycleView: "personRecycleView"
            },
            operates: {
                move: "move",
                copy: "copy",
                copyto: "copyto",
                rename: "rename",
                "delete": "delete",
                download: "download",
                upload: "upload",
                create: "create",
                edit: "edit",
                lock: "lock",
                unlock: "unlock",
                attention: "attention",
                unattention: "del-attention",
                share: "share",
                editShare: "edit-share",
                unshare: "del-share",
                permission: "permission"
            },
            getDefuaultLogo: function() {
                var e, t = webhelper.getLang();
                switch (t) {
                    case "zh_TW":
                        e = "/wt/assets/img/common/logo-tw.png";
                        break;
                    case "en_US":
                        e = "/wt/assets/img/common/logo-en.png";
                        break;
                    case "zh_CN":
                    default:
                        e = "/wt/assets/img/common/logo.png"
                }
                return e
            },
            getAvatarIcon: function(e, t) {
                return !e && t ? "f" === t ? constants.defaultWomenIcon : constants.defaultIcon : _.include(e, "defaultAvatar64woman") || _.include(e, "man.png") ? constants.defaultIcon : _.include(e, "defaultAvatar64woman") || _.include(e, "woman.png") ? constants.defaultWomenIcon : e == constants.defaultIcon && "f" === t ? constants.defaultWomenIcon : e
            },
            getFileOperationTip: function(e) {
                switch (e) {
                    case this.operation.NewFolder:
                        return msgs.msg585;
                    case this.operation.NewFile:
                        return msgs.msgCreate;
                    case this.operation.UploadFile:
                        return msgs.msg258;
                    case this.operation.RenameFile:
                    case this.operation.RenameFolder:
                        return msgs.msg266;
                    case this.operation.Delete:
                        return msgs.msg156;
                    case this.operation.DeletePermanently:
                        return msgs.msgRecycle;
                    case this.operation.Move:
                        return msgs.msg265;
                    case this.operation.RestoreFromRecycle:
                        return msgs.msg655;
                    case this.operation.RestoreVersion:
                        return msgs.msgRestoreVersion;
                    case this.operation.Lock:
                        return msgs.msg337;
                    case this.operation.SendFile:
                        return msgs.msg522
                }
                return msgs.msg335
            },
            getFileOperationAllTip: function(e) {
                switch (e) {
                    case this.operation.NewFolder:
                        return msgs.msg585;
                    case this.operation.NewFile:
                        return msgs.msg704;
                    case this.operation.UploadFile:
                        return msgs.msg408;
                    case this.operation.RenameFile:
                        return msgs.renameFile;
                    case this.operation.RenameFolder:
                        return msgs.renameFolder;
                    case this.operation.Delete:
                        return msgs.msg156;
                    case this.operation.DeletePermanently:
                        return msgs.msgRecycle;
                    case this.operation.Move:
                        return msgs.msg265;
                    case this.operation.RestoreFromRecycle:
                        return msgs.msg655;
                    case this.operation.RestoreVersion:
                        return msgs.msgRestoreVersion;
                    case this.operation.Lock:
                        return msgs.msg337
                }
                return msgs.msg335
            },
            isFileConvertSupport: function(e) {
                return this._convertTypes || (this._convertTypes = [],
                    _.each([this.docType, this.excelType, this.pptType, this.pdfType], function(e) {
                        this._convertTypes = this._convertTypes.concat(e)
                    }, this)), -1 !== _.indexOf(this._convertTypes, e)
            },
            isPreviewSupport: function(e) {
                if (!this._previewTypes) {
                    var t = this;
                    this._previewTypes = [],
                        _.each([this.docType, this.excelType, this.imgType, this.pptType, this.pdfType, this.txtType, this.htmlType, this.mp3Type, this.mp4Type], function(e) {
                            t._previewTypes = t._previewTypes.concat(e)
                        })
                }
                return -1 !== _.indexOf(this._previewTypes, e)
            },
            canDirectOpenFile: function(e) {
                if (!this._directViewTypes) {
                    var t = this;
                    this._directViewTypes = [],
                        _.each([this.imgType, this.htmlType, this.mp3Type, this.mp4Type], function(e) {
                            t._directViewTypes = t._directViewTypes.concat(e)
                        })
                }
                return -1 !== _.indexOf(this._directViewTypes, e)
            },
            isResponseError: function(e) {
                return _.startsWith(e, this.ERROR_MARK)
            },
            isResError: function(e) {
                return _.startsWith(e, this.ERROR_MARK)
            },
            isResponseOK: function(e) {
                return e === this.OK_MARK
            },
            isResOK: function(e) {
                return e === this.OK_MARK
            },
            isHtmlType: function(e) {
                return -1 !== _.indexOf(this.htmlType, e)
            },
            isTxtType: function(e) {
                return -1 !== _.indexOf(this.txtType, e)
            },
            isDocType: function(e) {
                return e && -1 !== _.indexOf(this.docType, e.toLowerCase())
            },
            isPptType: function(e) {
                return e && -1 !== _.indexOf(this.pptType, e.toLowerCase())
            },
            isPdfType: function(e) {
                return e && "pdf" === e.toLowerCase()
            },
            isExcelType: function(e) {
                return e && -1 !== _.indexOf(this.excelType, e.toLowerCase())
            },
            isMp4Type: function(e) {
                return -1 !== _.indexOf(this.mp4Type, e)
            },
            isInvalidFile: function(e) {
                var t = this.getFileType(e);
                return _.some(this.invalidType, function(e) {
                    return e === t
                })
            },
            isMp3Type: function(e) {
                return -1 !== _.indexOf(this.mp3Type, e)
            },
            isImgType: function(e) {
                return -1 !== _.indexOf(this.imgType, e)
            },
            isEditType: function(e) {
                return -1 !== _.indexOf(["txt", "TXT"], e)
            },
            isDocSupport: function(e) {
                return -1 !== _.indexOf(this.docType.concat(this.excelType).concat(this.pptType), e)
            },
            isLocalOpen: function(e) {
                return this.isDocSupport(e) || this.isPdfType(e) || this.isMp3Type(e) || this.isMp4Type(e)
            },
            searchFileType: function() {
                if (!this._fileMap) {
                    var e = this;
                    this._fileMap = [],
                        _.each([this.docType, this.excelType, this.pptType, this.pdfType, this.txtType], function(t) {
                            e._fileMap = e._fileMap.concat(t)
                        })
                }
                return this._fileMap
            },
            isEntDisk: function(e) {
                return e === this.fileType.shareDisk
            },
            isFileConverting: function(e) {
                return e ? -1 !== _.indexOf([this.FileConvertStatus.UPLOAD_TO_CACHE, this.FileConvertStatus.UPLOAD_TO_FS, this.FileConvertStatus.CONVERT_START], e) : !0
            },
            isSpecialFolder: function(e) {
                var t = e.get("parentId");
                return e.isEntDisk() && "entRoot" === t ? this.isSpecialEntFolder(e.get("realname")) : "personRoot" !== t || e.isEntDisk() ? !1 : this.isSpecialPersonFolder(e.get("realname"))
            },
            isSpecialEntFolder: function(e) {
                return _.some(_.keys(this.entSpecialFolderNames), function(t) {
                    return t === e
                })
            },
            isSpecialPersonFolder: function(e) {
                return _.some(_.keys(this.personSpecialFolderNames), function(t) {
                    return t === e
                })
            },
            getUserStatusTip: function(e) {
                var t = "未知";
                switch (e) {
                    case constants.UserStatus.Online:
                        t = "在线";
                        break;
                    case constants.UserStatus.Busy:
                        t = "忙碌";
                        break;
                    case constants.UserStatus.Offline:
                        t = "离开";
                        break;
                    case constants.UserStatus.Corbet:
                        t = "隐身";
                        break;
                    default:
                        t = "离开"
                }
                return t
            },
            getFileDownloadUrl: function(e) {
                return e.isEntDisk() ? "#sharedisk/download/" + e.id : "#onlinedisk/download/" + e.id
            },
            getDownloadUrl: function(e, t) {
                var n = {
                    fileId: e,
                    fileType: t
                };
                return i.nodeFileDownload + "?" + $.param(n)
            },
            date_format: function(e, t) {
                return moment(e).format(t || this.DATE_TIME_FORMAT)
            },
            getMillSec: function(e, t) {
                var t = t || this.DATE_TIME_FORMAT;
                return moment(e, t).toDate().getTime()
            },
            dateFromMisc: function(e, t) {
                var n = moment(parseInt(e)).toDate();
                return t && (n = moment(n).format(t)),
                    n
            },
            dateStrFromMisc: function(e, t) {
                var t = t || this.DATE_TIME_FORMAT;
                return moment(parseInt(e)).format(t)
            },
            timeFromMillSec: function(e, t) {
                var t = t || this.TIME_FORMAT;
                return moment(parseInt(e)).format(t)
            },
            timeCount: function(e, t) {
                var n = this;
                return n._timer = e,
                    t && t(e),
                    --e > 0 ? void setTimeout(function() {
                        n.timeCount(e, t)
                    }, 1e3) : void(t && t(e))
            },
            getRenameFileMsg: function(e) {
                var t = null;
                switch (e) {
                    case s.OK_MARK:
                        t = "重命名成功!";
                        break;
                    case s.errorNoPermission:
                        t = "无此权限!";
                        break;
                    case s.errorSameFile:
                        t = "文件夹下存在同名文件!";
                        break;
                    case s.errorSameFolder:
                        t = "文件夹下存在同名文件夹!";
                        break;
                    case s.errorFileLocked:
                        t = "文件被锁定!";
                        break;
                    case s.errorVersionConflict:
                        t = "版本冲突!";
                        break;
                    case s.error500:
                        t = "系统错误!"
                }
                return t
            },
            clearLoginCookies: function() {
                this.setCookie("ut", null),
                    this.setCookie("ci", null)
            },
            setUserLoginCookies: function(e, t) {
                this.clearLoginCookies(),
                    this.setCookie("en", e.get("entName")),
                    this.setCookie(e.isQuickMode() ? "ua" : "un", e.get("userName")),
                    this.setCookie("ut", t),
                    this.setCookie("ci", e.get("clientId"))
            },
            setCookie: function(e, t) {
                $.cookie(e, t, {
                    path: "/"
                })
            },
            getCookie: function(e) {
                return $.cookie(e)
            },
            getVideoMsgTip: function(e) {
                switch (e) {
                    case r.VideoInvite:
                        return "邀请您视频聊天";
                    case r.VideoStart:
                        return "接受您的视频邀请";
                    case r.VideoEnd:
                        return "结束视频聊天";
                    case r.VideoRefuse:
                        return "拒绝视频聊天"
                }
            },
            getFileSuffix: function(e) {
                return _.include(e, ".") ? _.strRightBack(e, ".") : ""
            },
            getFileType: function(e) {
                return this.getFileSuffix(e)
            },
            getFilePrefix: function(e) {
                return _.strLeftBack(e, ".")
            },
            hasPreviewPermission: function(e) {
                var t = e.get("permissionDTO");
                return t ? t.read || t.write || t.local : !1
            },
            checkPermission: function(e) {
                var t = {};
                return e.isFolder() ? e.get("permissionDTO") && (e.get("permissionDTO").download && (t.aldown = !0),
                        e.get("permissionDTO")["delete"] && (t.aldel = !0),
                        e.get("permissionDTO").share && (t.alshare = !0),
                        e.get("permissionDTO").write && (t.alwrite = !0),
                        e.get("permissionDTO").read && (t.alread = !0),
                        e.get("permissionDTO").manage && (t.almanage = !0),
                        e.get("permissionDTO").local && (t.allocal = !0)) : model.currentFolder && model.currentFolder.get("permissionDTO") && (model.currentFolder.get("permissionDTO").download && (t.aldown = !0),
                        model.currentFolder.get("permissionDTO")["delete"] && (t.aldel = !0),
                        model.currentFolder.get("permissionDTO").share && (t.alshare = !0),
                        model.currentFolder.get("permissionDTO").write && (t.alwrite = !0),
                        model.currentFolder.get("permissionDTO").read && (t.alread = !0),
                        model.currentFolder.get("permissionDTO").manage && (t.almanage = !0),
                        model.currentFolder.get("permissionDTO").local && (t.allocal = !0)),
                    t
            },
            hasUnlockPermissin: function(e) {
                return e && e === cache.userId
            },
            isRootFolder: function(e) {
                return "entRoot" === e || "personRoot" === e
            },
            asBaseParam: function() {
                var e = {
                    entId: cache.entId,
                    userId: cache.userId
                };
                return e
            },
            createGuid: function(e) {
                return webhelper.guid() + "." + this.getFileSuffix(e)
            },
            getClock: function(e) {
                var t = 0,
                    n = 0,
                    s = 0;
                e >= 3600 && (t = Math.floor(e / 3600),
                        e %= 3600),
                    e >= 60 && (n = Math.floor(e / 60),
                        e %= 60),
                    s = e;
                var r = "";
                return r = r + (t >= 10 ? t : "0" + t) + ":",
                    r = r + (n >= 10 ? n : "0" + n) + ":",
                    r += s >= 10 ? s : "0" + s
            },
            getCurrentUploadFolderId: function() {
                var e = model.currentFolder.get("fileId");
                if (-1 !== _.indexOf(["entRoot", "personRoot"], model.currentFolder.get("fileId"))) {
                    var t = model.currentFolder.isEntDisk() ? collection.entFileList.findWhere({
                        realname: "Share",
                        parentId: "entRoot"
                    }) : collection.personFileList.findWhere({
                        realname: "My documents",
                        parentId: "personRoot"
                    });
                    e = t.get("fileId")
                }
                return e
            },
            addParamToUrl: function(e, t, n) {
                return -1 === e.indexOf("?") ? e : n && -1 !== e.indexOf("?dev") ? i.baseurl2 + _.strLeft(e, "?dev") + "?dev&" + $.param(t) + _.strRight(e, "?dev") : i.baseurl2 + _.strLeft(e, "?") + "?" + $.param(t) + "&" + _.strRight(e, "?")
            },
            isTeleNum: function(e) {
                return this.pattern.Phone.test(e) || this.pattern.Mobile.test(e)
            },
            isMobileNum: function(e) {
                return this.pattern.Mobile.test(e)
            },
            _getUrl: function(e, t, n) {
                var s, r = location.pathname,
                    t = t || webhelper.getLang(),
                    i = (_.include(e, "login.html") || _.include(e, "register.html")) && "app.oatos.com" === location.host && !seajs.isPrivate;
                return s = (i ? "https:" : "http:") + "//" + location.host + r.substring(0, r.lastIndexOf("/")),
                    s = s + "/" + e + (seajs.devMode ? "?dev" : ""),
                    "zh_CN" !== t && (s += _.include(s, "?") ? "&locale=" + t : "?locale=" + t),
                    n && (s += "#" + n),
                    s
            },
            _getUri: function(e, t, n) {
                var s = location.pathname;
                return uri = s.substring(0, s.lastIndexOf("/")),
                    uri = uri + "/" + e + (seajs.devMode ? "?dev" : ""),
                    t && "zh_CN" !== t && (uri += _.include(uri, "?") ? "&locale=" + t : "?locale=" + t),
                    n && (uri += "#" + n),
                    uri
            },
            getWebsiteUrl: function(e) {
                return this._getUrl("home.html", e)
            },
            getRegloginUrl: function(e, t) {
                return this._getUrl("reglogin.html", e, t)
            },
            getVedioConfUrl: function(e) {
                var t = t || webhelper.getLang();
                return "swf/videoconference/VideoConferencing.html?conferenceId=" + e + "&locale=" + t
            },
            getLoginUrl: function(e, t) {
                var n = this._getUrl("login.html", e);
                return t && (n += -1 == n.indexOf("?") ? "?" : "&",
                        n += t),
                    n
            },
            getRegisterUrl: function(e, t) {
                return this._getUrl("register.html", e, t)
            },
            getAdminUrl: function(e) {
                return this._getUrl("admin.html", null, e)
            },
            getShareUrl: function(e, t) {
                var n = "http://",
                    s = e.https,
                    r = e.linkCode;
                if (s && (n = "https://"),
                    /(?:app|vip)\.oatos\.com/.test(location.host))
                    return n + (s ? "app.oatos.com/wt/share.html?lc=" : "s.oatos.com/") + r;
                var i = n + location.host + this._getUri("share.html");
                if (!r)
                    return i;
                var o = t == constants.fileType.shareDisk ? "lc" : "pc";
                return i = i + (_.include(i, "?") ? "&" : "?") + o + "=" + r
            },
            getViewUrl: function() {
                return this._getUrl("fileviewer.html")
            },
            getPdfViewerUrl: function() {
                return this._getUrl("pdfviewer.html")
            },
            getBuyUrl: function() {
                return this._getUrl("buy.html")
            },
            getMeetingUrl: function() {
                return "http://" + location.host + "/meeting/index.html"
            },
            getNewFileUrl: function() {
                return this._getUrl("newfile.html")
            },
            getOpenFolderUrl: function(e, t, n) {
                var s = e ? "sharedisk/forward" : "onlinedisk/forward";
                return s + (t ? "folder" : "file") + "/" + n
            },
            getSharePreviewUrl: function(e, t) {
                return e.isFolder() ? "#" + e.get("diskType") + "/openfolder/" + e.id : this.getPreviewUrl({
                    fileId: e.id,
                    folderId: e.get("parentId"),
                    type: e.get("type"),
                    diskType: e.get("diskType"),
                    guid: e.get("guid"),
                    linkId: t
                })
            },
            getViewType: function(e) {
                return constants.isImgType(e) ? "pic" : constants.isExcelType(e) ? "excel" : constants.isPdfType(e) || constants.isDocSupport(e) ? "pdf" : constants.isTxtType(e) || constants.isHtmlType(e) ? "html" : constants.isMp4Type(e) ? "vid" : constants.isMp3Type(e) ? "aud" : "unknow"
            },
            getPreviewUrl: function(e) {
                var t = this.getViewType(e.type),
                    n = this.getViewUrl(),
                    s = {
                        ei: cache.entId,
                        ui: cache.userId,
                        fi: e.folderId,
                        fid: e.fileId,
                        dp: e.diskType,
                        sk: e.searchKey,
                        fp: t
                    };
                switch (t) {
                    case "pic":
                    case "aud":
                    case "vid":
                    case "html":
                        break;
                    case "pdf":
                        if (n = this.getPdfViewerUrl(),
                            webhelper.isIE8())
                            return "#pdf/not/support";
                        s.file = encodeURIComponent(this.isPdfType(e.type) ? "res/" + e.guid : "/wt/node/" + e.diskType + "/" + e.fileId + "/as-pdf-stream" + (e.linkId ? "?linkId=" + e.linkId : ""))
                }
                return e.linkId && (s.li = e.linkId),
                    n = _.include(n, "?") ? n + "&" : n + "?",
                    n + $.param(s)
            },
            getItemPreviewUrl: function(e) {
                return e.isFolder() || "folder" === e.get("type") ? "#" + e.get("diskType") + "/openfolder/" + e.get("fileId") : e.isPreviewSupport() ? this.isTxtType(e.get("type")) ? "#/file/preview/" + e.get("fileId") : this.getPreviewUrl({
                    fileId: e.get("fileId"),
                    folderId: e.get("parentId"),
                    type: e.get("type"),
                    guid: e.get("guid"),
                    diskType: e.get("diskType")
                }) : "###"
            },
            convertSize: function(e) {
                var t = "B";
                return 0 === e ? 0 : (e >= 1024 && (e /= 1024,
                        t = "K"),
                    e >= 1024 && (e /= 1024,
                        t = "M"),
                    e >= 1024 && (e /= 1024,
                        t = "G"),
                    e >= 1024 && (e /= 1024,
                        t = "T"),
                    _.numberFormat(e, 1) + t)
            },
            sizeConverter: function(e, t) {
                var t = 1 === arguments.length ? e : t;
                return 1 === arguments.length || "ModelToView" === e ? !t || t.length <= 0 || "--" === t ? "-" : constants.convertSize(t) : void 0
            },
            convertMSize: function(e, t) {
                return t = t ? t : 0,
                    parseInt(t / 1024 / 1024)
            },
            byteConvertGb: function(e) {
                return e = e ? parseInt(e / 1024 / 1024 / 1024) : void 0
            },
            gbConvertByte: function(e) {
                return e = e ? parseInt(1024 * e * 1024 * 1024) : void 0
            },
            uploadedSizePercent: function(e, t) {
                var n = Math.round(100 * e / t);
                return (n >= 100 ? 100 : n) + "%"
            },
            sendDateConverter: function(e, t) {
                return constants.sendDateFromMs(t)
            },
            sendDateFromMs: function(e) {
                var t = new Date(parseInt(e)),
                    n = moment().format("YYYY-MM-DD"),
                    s = moment(t).format("YYYY-MM-DD");
                return s = moment(t).format(n == s ? "HH:mm:ss" : "YYYY-MM-DD HH:mm:ss")
            },
            permissionConverter: function(e, t) {
                var n = _.keys(_.pick(t, function(e) {
                    return !!e
                }));
                if (0 === n.length)
                    return "";
                if (1 === n.length) {
                    var s = n[0];
                    switch (s) {
                        case "read":
                            return msgs.msg421;
                        case "download":
                            return msgs.msg423;
                        case "upload":
                            return msgs.msg422;
                        default:
                            return msgs.msg427
                    }
                }
                return 2 === n.length ? 0 === _.difference(n, ["read", "upload"]).length ? msgs.msg424 : 0 === _.difference(n, ["read", "download"]).length ? msgs.msg425 : msgs.msg427 : n.length >= 7 ? msgs.msg426 : msgs.msg427
            },
            typeConverter: function(e, t) {
                var t = 1 === arguments.length ? arguments[0] : t;
                if (1 === arguments.length || "ModelToView" === e) {
                    if (!t)
                        return "file-unknow";
                    var n = t.toLocaleLowerCase();
                    return "folder" === t ? "file-folder" : constants.isTxtType(n) || constants.isHtmlType(n) ? "file-txt" : -1 !== _.indexOf(constants.pdfType, n) ? "file-pdf" : -1 !== _.indexOf(constants.imgType, n) ? "file-img" : -1 !== _.indexOf(constants.mp3Type, n) ? "file-mp3" : -1 !== _.indexOf(constants.docType, n) ? "file-doc" : -1 !== _.indexOf(constants.excelType, n) ? "file-excel" : -1 !== _.indexOf(constants.mp4Type, n) ? "file-mp4" : -1 !== _.indexOf(constants.pptType, n) ? "file-ppt" : -1 !== _.indexOf(constants.zipType, n) ? "file-zip" : "file-unknow"
                }
            },
            dateConverter: function(e, t) {
                return t ? constants.dateStrFromMisc(parseInt(t)) : " - "
            },
            checkConverter: function(e, t) {
                return "ModelToView" === e ? t + " " + (t && "entFileItemSelect") : void 0
            },
            getAdminStatus: function(e, t) {
                return t == constants.adminStatus.active ? msgs.msgNormal : msgs.msg337
            },
            convertColor: function(e, t) {
                return t == cache.userId ? "my-title" : "other-title"
            },
            getUserStatusTip: function(e, t) {
                var n;
                switch (t) {
                    case constants.UserStatus.Online:
                        n = msgs.msgStatusOnline;
                        break;
                    case constants.UserStatus.Busy:
                        n = msgs.msgStatusBusy;
                        break;
                    case constants.UserStatus.Leave:
                        n = msgs.msgStatusLeave;
                        break;
                    case constants.UserStatus.Corbet:
                        n = msgs.msgStatusCorbet;
                        break;
                    default:
                        n = msgs.msgStatusLeave
                }
                return n
            },
            getFileName: function(e) {
                return e && -1 !== e.indexOf(".") ? e.substring(0, e.lastIndexOf(".")).toLowerCase() : e
            },
            setUsualContactTitle: function(e, t) {
                var n = msgs.msg1135;
                return t && (n = msgs.msg1137),
                    n
            },
            setUsualContactClass: function(e, t) {
                return "icon-custom-contact-" + (t ? "remove" : "add")
            },
            initLoading: function(e) {
                var t = $(".loading-indicator").length ? $(".loading-indicator") : $("<span class='loading-indicator'><label>加载中...</label></span>").appendTo(document.body);
                return t.css({
                        position: "absolute",
                        top: e.position().top + e.height() / 2 - t.height() / 2,
                        left: e.position().left + e.width() / 2 - t.width() / 2
                    }),
                    t
            },
            toggleLoading: function(e, t) {
                e && (t ? e.show() : e.fadeOut())
            },
            getFileFolderIds: function(e) {
                var t = _.groupBy(e, function(e) {
                        return e.isFolder() ? "folders" : "files"
                    }),
                    n = _.map(t.files, function(e) {
                        return e.id
                    }),
                    s = _.map(t.folders, function(e) {
                        return e.id
                    });
                return {
                    fileIds: n,
                    folderIds: s
                }
            },
            getDatetimepickerSet: function() {
                var e = webhelper.getLang();
                return {
                    language: "en_US" === e ? "en" : "zh_CN" === e ? "zh-CN" : "zh-TW",
                    minView: "month",
                    format: "yyyy-mm-dd",
                    weekStart: 1,
                    todayHighlight: !0
                }
            },
            getAddAccountErrorMsg: function(e) {
                var t = msgs.msgSysAbnormal;
                switch (e) {
                    case s.errorAccountUsed:
                        t = msgs.msgAccDuplite;
                        break;
                    case s.errorEnterpriseNotExist:
                        t = msgs.msgAccExisted;
                        break;
                    case s.errorUserNoOver:
                        t = msgs.msgAccMunbersLimit;
                        break;
                    case s.errorPayExpired:
                        t = msgs.msgEntServiceExpire;
                        break;
                    case s.errorEmployeeAlreadyExist:
                        t = msgs.msgAccDuplite;
                        break;
                    default:
                        t = msgs.msgSysAbnormal
                }
                return t
            },
            ValidationType: {
                Register: "Register",
                FindPassword: "FindPassword",
                VerifyAccount: "VerifyAccount"
            },
            convertCloudTelNum: function(e) {
                return e && _.startsWith(e, "865") ? "0" + e.substr(2, 3) + "-" + e.substr(5) : e
            },
            getViewUrlFromRes: function(e) {
                var t = e.url;
                return t.replace("http:", location.protocol)
            },
            executeFileDownload: function(e) {
                $("#downloadFrame").remove();
                var t = {
                    fileId: e.get("fileId"),
                    fileType: e.get("diskType"),
                    port: location.port
                };
                e.get("linkId") && _.extend(t, {
                    linkId: e.get("linkId")
                });
                var n = i.execDownloadFile + "?" + $.param(t);
                $("body").append("<iframe id='downloadFrame' style='width:1px;height:1px;' src='" + n + "'></iframe>")
            },
            convertCallStatus: function(e) {
                switch (e) {
                    case "0":
                        return "未接通";
                    case "1":
                    case "2":
                        return "通话成功"
                }
            },
            addClipboardCallback: function() {
                window.getClipboardContent = function(e) {
                    try {
                        var t = "拷贝错误";
                        switch (e) {
                            case "createCopyFlash":
                                t = $("#linkHref").attr("href");
                                break;
                            case "linkViewCopy":
                                t = $(".link-url").html();
                                break;
                            default:
                                t = $("#file-detail #fileDetailShareLink").text()
                        }
                        return noty.success(msgs.msgCopySuccess),
                            t
                    } catch (n) {
                        log.error("[getClipboardContent]  err:", n.stack)
                    }
                }
            },
            dealEntSpecialPath: function(e) {
                return e ? (_.find(constants.entSpecialFolderNames, function(t, n) {
                        return 0 === e.indexOf("/" + n) ? (e = e.replace(n, constants.entSpecialFolderNames[n]), !0) : void 0
                    }),
                    e) : ""
            },
            dealEntSpecialFolder: function(e) {
                return _.find(constants.entSpecialFolderNames, function(t, n) {
                        return e === n ? (e = constants.entSpecialFolderNames[n], !0) : void 0
                    }),
                    e
            },
            dealPersonSpecialPath: function(e) {
                return e ? (_.find(constants.personSpecialFolderNames, function(t, n) {
                        return 0 === e.indexOf("/" + n) ? (e = e.replace(n, constants.personSpecialFolderNames[n]), !0) : void 0
                    }),
                    e) : ""
            },
            dealPersonSpecialFolder: function(e) {
                return _.find(constants.personSpecialFolderNames, function(t, n) {
                        return e === n ? (e = constants.personSpecialFolderNames[n], !0) : void 0
                    }),
                    e
            },
            dealSpecialFolder: function(e, t) {
                return t == this.fileType.shareDisk ? this.dealEntSpecialFolder(e) : this.dealPersonSpecialFolder(e)
            },
            dealSpecialPath: function(e, t) {
                return t == this.fileType.shareDisk ? this.dealEntSpecialPath(e) : this.dealPersonSpecialPath(e)
            },
            showRestoreErrMsg: function(e) {
                var t = msgs.msgServerError;
                switch (e) {
                    case s.errorNoPermission:
                        t = msgs.msgNoPermission2;
                        break;
                    case s.errorVersionConflict:
                        t = msgs.msgFileVerConflict;
                        break;
                    case s.errorSameFile:
                        t = msgs.msgRecycleFileConflict;
                        break;
                    case s.errorSameFolder:
                        t = msgs.msgRecycleFolderConflict;
                        break;
                    case s.errorNoSpace:
                        t = msgs.msgDiskSizeLack;
                        break;
                    case s.errorFolderSpaceOver:
                        t = msgs.msgFolderSpaceOver;
                        break;
                    case "errorFolderDeleted":
                        t = msgs.msgRestoreFolderDel;
                        break;
                    default:
                        t = msgs.msgServerError
                }
                noty.alert(t)
            },
            generateTradeNo: function() {
                var e = "QY" + this.date_format(new Date, "YYYYMMDD");
                return e + _.random(1e5, 999999)
            },
            generateLinkPwd: function() {
                var e = this.LINK_PWD_STR;
                return e.charAt(_.random(0, 46)) + e.charAt(_.random(0, 46)) + _.random(10, 99)
            },
            selectTextRange: function(e, t) {
                var n = e.get(0),
                    s = this.getFileSuffix(t),
                    r = t.length;
                if (s && (r = t.length - s.length - 1),
                    n.setSelectionRange)
                    n.setSelectionRange(0, r);
                else if (n.createTextRange) {
                    var i = n.createTextRange();
                    i.collapse(!0),
                        i.moveStart("character", 0),
                        i.moveEnd("character", r),
                        i.select()
                }
                e.focus()
            },
            redirectToLogin: function() {
                constants.clearLoginCookies(),
                    location.assign(constants.getLoginUrl())
            },
            hasFlashInstalled: function() {
                var e = !1,
                    t = webhelper.isIE();
                if (t)
                    try {
                        {
                            new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                        }
                        e = !0
                    } catch (n) {
                        e = !1
                    } else
                        try {
                            var s = navigator.plugins["Shockwave Flash"];
                            e = void 0 == s ? !1 : !0
                        } catch (n) {
                            e = !1
                        }
                return e
            },
            isValidLabel: function(e) {
                if (!e)
                    return !1;
                var t = e.match(/[\u0391-\uFFE5]/g),
                    n = t ? t.length : 0,
                    s = e.length - n;
                return 16 >= 2 * n + s
            }
        }
});