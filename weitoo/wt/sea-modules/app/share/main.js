define("app/share/controllers/FileDetail", function() {
    function l(l, i) {
        l.ctrlName = e, l.$watch("$parent.focusFile", function(e) {
            l.focusFile = e ? e : i.fileDTO
        }), l.$watch("$root.linkInfo.fileDTO", function(e) {
            l.focusFile = e
        })
    }
    var e = "FileDetailCtrl::";
    angular.module("share").controller("FileDetailCtrl", ["$scope", "linkInfo", l])
});;
define("app/share/controllers/ShareCtrl", function() {
    function e(e, l, r, n, d, i, t, a, c, f) {
        function p(e) {
            $("#downloadFrame").remove();
            var o = n.execDownloadFile + "?" + $.param({
                fileId: e.fileId,
                fileType: e.fileType,
                linkId: r.linkDTO.linkId
            });
            $("body").append("<iframe id='downloadFrame' style='width:1px;height:1px;' src='" + o + "'></iframe>")
        }

        function s(o) {
            e.downloadBean = new a(e.currentFolder, o, r.linkId), e.downloadBean.fileType = r.fileType, e.modal.zipDownload = !0, e.downloadBean.status = "zipping", e.downloadBean.zipFiles().then(function() {
                e.downloadBean.status = "success"
            })["catch"](function(o) {
                e.downloadBean.status = "error", e.downloadBean.error = c.zipFilesError(o)
            })
        }

        function u(o) {
            var l = -1;
            _.find(e.breadFolders, function(e, r) {
                return e.fileId === o.fileId ? (l = r, e) : void 0
            }), l > -1 ? e.breadFolders.splice(l + 1, e.breadFolders.length) : e.breadFolders.push(o)
        }
        e.ctrlName = o, e.currentFolder = void 0, e.checkedFiles = [], e.pager = "sharedisk" === r.fileType ? new d : new i, e.breadFolders = [], e.step = "", e.toggleCheck = new t(e.pager.files, e.checkedFiles), e.$watch("pager.current", function() {
            e.currentFolder && (e.toggleCheck.uncheckAll(), e.pager.fetchPage())
        }), r.getLinkInfo().then(function() {
            e.pager.linkId = r.linkDTO.linkId, e.pager.files.push(r.fileDTO), r.linkDTO.password ? e.step = "inputpassword" : "Upload" === r.linkDTO.type ? (e.uploadFolder = r.createFolder(), e.step = "inputfoldername") : e.step = "fileview"
        }), e.confirmPwd = function() {
            return r.linkDTO.password !== r.linkDTO.repwd ? (noty.error("瀵嗙爜涓嶆纭�, 璇烽噸鏂拌緭鍏�!"), !1) : void("Upload" === r.linkDTO.type ? (e.uploadFolder = r.createFolder(), e.step = "inputfoldername") : e.step = "fileview")
        }, e.changeFolder = function(o, l) {
            return l && (l.preventDefault(), l.stopPropagation()), o ? "folder" === o.type ? (e.currentFolder = o, e.toggleCheck.uncheckAll(), e.pager.folderId = o.fileId, e.pager.current = 1, e.pager.fetchPage(), u(o), !1) : void 0 : void(e.currentFolder && (e.currentFolder = null, e.toggleCheck.uncheckAll(), e.pager.reset(r.fileDTO), e.breadFolders = []))
        }, e.downloadFile = function(o) {
            if (!o) {
                if (e.checkedFiles.length > 1) return void s(e.checkedFiles);
                o = e.checkedFiles[0]
            }
            o.isFolder ? s([o]) : p(o)
        }, e.onFocusFile = function(o) {
            e.focusFile = o
        }, e.createFolder = function() {
            return e.uploadFolder.name ? void e.uploadFolder.createFolder(r.linkId).then(function() {
                e.currentFolder = e.uploadFolder, e.breadFolders.push(e.uploadFolder), e.step = "uploadview"
            })["catch"](function(e) {
                noty.error(c.createFolderError(e))
            }) : (noty.error("璇疯緭鍏ユ湁鏁堢殑鏂囦欢澶瑰悕!"), !1)
        }, e.starFile = function(o) {
            o && e.toggleCheck.toggleCheck(o), e.linkInfo.hasLogin ? e.modal.personFolderSelector = !0 : e.modal.loginBox = !0
        }, e.onSelectFolder = function(o) {
            var l = _.groupBy(e.checkedFiles, function(e) {
                return e.folder ? "folder" : "file"
            });
            f.files.copy({
                folderId: o.fileId,
                srcType: r.fileType,
                destType: "onlinedisk",
                fileIds: _.pluck(l.file, "fileId"),
                folderIds: _.pluck(l.folder, "fileId"),
                linkId: e.linkInfo.linkId
            }).then(function() {
                noty.success("鏀惰棌鎴愬姛!")
            })["catch"](function(e) {
                noty.fail(c.copyFileError(e))
            })
        }, e.onLoginSucc = function(r) {
            l.debug(o, "login succ: ", r), e.linkInfo.updateLoginToken(r), e.modal.personFolderSelector = !0
        }
    }
    var o = "ShareCtrl::";
    angular.module("share").controller("ShareCtrl", ["$scope", "$log", "linkInfo", "resturl", "EntFilePager", "PersonFilePager", "ToggleCheck", "DownloadBean", "ErrorType", "FileRest", e])
});;
define("app/share/controllers/UploadCtrl", function() {
    function e(e, n, o) {
        function t(r) {
            return _.find(e.uploadFiles, {
                id: r
            })
        }

        function a() {
            var r = e.uploadFiles.length,
                n = _.filter(e.uploadFiles, function(e) {
                    return "success" === e.status
                }).length,
                o = _.filter(e.uploadFiles, function(e) {
                    return _.startsWith(e.status, "error")
                }).length;
            angular.extend(e.statusInfo, {
                total: r,
                success: n,
                error: o,
                upload: r - n - o
            })
        }
        e.ctrlName = r, e.uploadFiles = [], e.statusInfo = {
            total: 0,
            success: 0,
            error: 0,
            upload: 0
        }, e.settings = {
            pick: {
                id: "#shareFilePicker",
                label: "娣诲姞鏂囦欢",
                multiple: !0
            },
            dnd: "#dndArea2",
            disableGlobalDnd: !0,
            fileNumLimit: 199,
            fileSingleSizeLimit: 1073741824,
            server: "/upload/single"
        }, e.onQueue = function(o) {
            var t = new n(o),
                l = e.uploadFiles.length;
            if (l > 200) return !1;
            var i = _.find(e.uploadFiles, function(e) {
                return e.name === t.name
            });
            return i ? !1 : (log.debug(r, "onQueue: $parent: ", e.$parent), log.debug(r, "onQueue: currentFolder: ", e.$parent.currentFolder), angular.extend(t, {
                status: "wait",
                parentId: e.$parent.currentFolder.fileId,
                fileType: e.linkInfo.fileType,
                queueFile: o
            }), e.uploadFiles.push(t), a(), !0)
        }, e.onBeforeSend = function(e, r) {
            var n = t(r.id),
                l = {
                    folderId: n.parentId,
                    fileType: n.fileType,
                    fileName: n.name,
                    linkId: o.linkId,
                    token: o.token
                };
            log.info("upload param: ", JSON.stringify(l)), r.param = JSON.stringify(l), n.status = "upload", a()
        }, e.onprogress = function(e, n) {
            log.info(r, " uploadProgress: file: ", e.name, ", percent: ", n);
            var o = t(e.id);
            o.percent = _.numberFormat(100 * n, 2) + "%", o.completed = o.size * n
        }, e.onSuccess = function(e, n) {
            if (!n) return !1;
            log.info(r, "uploadSuccess: ", e, ", response: ", n);
            var o = t(e.id);
            return _.startsWith(n.statusCode, "error") ? (o.status = n.statusCode, !1) : (o.status = "success", void a())
        }, e.onUploadError = function(e, n) {
            log.warn(r, "uploadError: file: ", e.name, ", reason: ", n);
            var o = t(e.id);
            o.status = "error", a()
        }, e.onError = function(e) {
            switch (log.warn(r, "error: ", e), e) {
                case "Q_EXCEED_NUM_LIMIT":
                    noty.error("涓€娆′笉鑳介€夋嫨瓒呰繃200涓枃浠�!");
                    break;
                case "Q_EXCEED_SIZE_LIMIT":
                    noty.error("涓嶈兘閫夋嫨瓒呰繃1G鐨勬枃浠�!");
                    break;
                case "Q_TYPE_DENIED":
                    noty.error("涓嶅厑璁搁€夋嫨璇ユ枃浠剁被鍨�!");
                    break;
                case "F_DUPLICATE":
            }
        }
    }
    var r = "UploadCtrl::";
    angular.module("share").controller("UploadCtrl", ["$scope", "UploadFile", "linkInfo", e])
});;
define("app/share/controllers/index", function(require) {
    require("app/share/controllers/ShareCtrl"), require("app/share/controllers/FileDetail"), require("app/share/controllers/UploadCtrl")
});;
define("app/share/directives/shareResize", function() {
    angular.module("share").directive("shareResize", ["shareResizeDelegate", function(e) {
        function r(r, i) {
            e(i)
        }
        return {
            restrict: "A",
            replace: !1,
            transclude: !1,
            link: r
        }
    }])
});;
define("app/share/directives/shareViewfile", function() {
    function e(e, i, n) {
        "use strict";
        return {
            restrict: "EA",
            replace: !1,
            transclude: !1,
            link: function(t, r, c) {
                function l() {
                    return webhelper.isIE8() && "pdf" === i.getViewType(o.type) ? (r.unbind("click").attr("href", "#"), void r.click(function() {
                        return e.modal.pdfNotSupport = !0, !1
                    })) : (c.$set("ngClick", void 0), r.unbind("click"), r.attr("target", "_blank"), void r.attr("href", i.getPreviewUrl({
                        fileId: o.fileId,
                        folderId: o.parentId,
                        type: o.type,
                        diskType: o.fileType,
                        linkId: n.linkId,
                        guid: o.guid
                    })))
                }
                var o = t.linkFile;
                if ("folder" === o.type) o.previewUrl = "#!";
                else {
                    if (!i.isPreviewSupport(o.type)) return !1;
                    o.isNeedConvert() ? o.hasConvDone() ? l() : (c.$set("ngClick", void 0), r.unbind("click"), r.click(function() {
                        o.viewFile(n.linkId).then(function() {
                            noty.success("鏂囨。杞崲瀹屾垚, 璇峰啀娆＄偣鍑绘祻瑙�!"), l()
                        })["catch"](function() {
                            noty.success("鏂囨。姝ｅ湪杞崲涓�, 璇风◢鍊�!")
                        })
                    })) : l()
                }
            }
        }
    }
    angular.module("commons.directives").directive("shareViewFile", ["$rootScope", "constants", "linkInfo", e])
});;
define("app/share/directives/index", function(require) {
    require("app/share/directives/shareResize"), require("app/share/directives/shareViewfile")
});;
define("app/share/services/linkInfo", function() {
    function e(e, n, i, t, o, r, s, l) {
        return {
            userId: void 0,
            entId: void 0,
            fileType: void 0,
            linkCode: void 0,
            linkId: void 0,
            entDTO: void 0,
            linkDTO: void 0,
            fileDTO: void 0,
            hasLogin: !1,
            isEntDisk: function() {
                return "sharedisk" === this.fileType
            },
            isLinkType: function(e) {
                return this.linkDTO ? this.linkDTO.type === e : !1
            },
            getLinkInfo: function() {
                var k = this,
                    f = e.defer();
                return n.link.getLinkInfo({
                    code: this.linkCode,
                    type: this.fileType
                }).then(function(e) {
                    k.token = e.token, k.entDTO = e.entDTO, k.linkDTO = e.linkDTO, k.linkId = k.linkDTO.linkId, k.fileDTO = k.isEntDisk() ? new t(e.fileDTO) : new i(e.fileDTO), o.token || (o.token = k.token, r.setCookie("ut", o.token)), f.resolve(k)
                })["catch"](function(e) {
                    noty.error(l.getLinkByCodeError(e))
                }), s.getLoginUser().then(function() {
                    k.hasLogin = !0
                })["catch"](function() {
                    k.hasLogin = !1
                }), f.promise
            },
            updateLoginToken: function(e) {
                this.hasLogin = !0, o.token = e
            },
            createFolder: function() {
                return this.isEntDisk() ? t.createFolder(this.fileDTO.fileId) : i.createFolder(this.fileDTO.fileId)
            }
        }
    }
    angular.module("share").service("linkInfo", ["$q", "FileRest", "PersonFile", "EntFile", "cache", "constants", "User", "ErrorType", e])
});;
define("app/share/services/ToggleCheck", function() {
    function e() {
        function e(e, c) {
            this.items = e, this.checkeds = c
        }
        return e.prototype = {
            constructor: e,
            toggleCheckAll: function() {
                var e = this.items.length > 0 && this.checkeds.length === this.items.length;
                _.forEach(this.items, function(c) {
                    c.checked = !e
                }), this.updateCheckeds(e ? [] : this.items)
            },
            uncheckAll: function() {
                this.checkeds.splice(0, this.checkeds.length), _.each(this.items, function(e) {
                    e.checked = !1
                })
            },
            updateCheckeds: function(e) {
                Array.prototype.splice.apply(this.checkeds, [0, this.checkeds.length].concat(e))
            },
            toggleCheck: function(e) {
                e.checked = !e.checked, _.forEach(this.items, function(c) {
                    c.checked && c != e && (c.checked = !1)
                }), this.updateCheckeds(e.checked ? [e] : [])
            },
            checkItem: function(e) {
                e.checked = !0, _.forEach(this.items, function(c) {
                    c.checked && c != e && (c.checked = !1)
                }), this.updateCheckeds(e.checked ? [e] : [])
            },
            multiCheck: function(e) {
                e.checked = !e.checked;
                var c = _.filter(this.items, function(e) {
                    return e.checked
                });
                this.updateCheckeds(c)
            },
            hasCheckAll: function() {
                return this.checkeds.length > 0 && this.checkeds.length === this.items.length
            },
            writelog: function(e) {
                log.info(c, e, "::", "items length: ", this.items.length, ", checkeds length: ", this.checkeds.length)
            }
        }, e
    }
    var c = "ToggleCheck::";
    angular.module("share").factory("ToggleCheck", [e])
});;
define("app/share/services/shareResizeDelegate", function() {
    angular.module("share").factory("shareResizeDelegate", function() {
        return function(e) {
            var s = e.attr("share-resize"),
                t = $(window).width(),
                i = $(window).height(),
                a = 80,
                h = 30,
                r = 270,
                c = i - a - h - 20,
                n = t - r - 20 - 20;
            switch (s) {
                case "mainbox":
                    e.css({
                        width: t,
                        height: c
                    });
                    break;
                case "left-content":
                    e.css({
                        width: n,
                        height: c
                    });
                    break;
                case "right-content":
                    e.css({
                        width: r,
                        height: c
                    });
                    break;
                case "input-password":
                    e.css({
                        marginTop: c / 3,
                        "margin-left": (n - 450) / 2
                    });
                    break;
                case "file-items":
                    e.css({
                        height: c - 150,
                        width: n
                    });
                    break;
                case "upload-items":
                    e.css({
                        height: c - 150,
                        width: n
                    })
            }
        }
    })
});;
define("app/share/services/index", function(require) {
    require("app/share/services/linkInfo"), require("app/share/services/ToggleCheck"), require("app/share/services/shareResizeDelegate")
});;
define("app/share/main", function(require) {
    angular.module("share", ["ngRoute", "ngTranslate", "ui.bootstrap.tpls", "ui.bootstrap.pagination", "commons.services", "commons.filters", "commons.directives", "commons.models"]), require("app/share/directives/index"), require("app/share/services/index"), require("app/share/controllers/index"), angular.module("share").run(["$rootScope", "linkInfo", "shareResizeDelegate", function(e, o, n) {
        var a = webhelper.getUrlEncodedKey("lc"),
            r = webhelper.getUrlEncodedKey("pc");
        o.linkCode = a || r, o.fileType = a ? "sharedisk" : "onlinedisk", e._ = _, e.linkInfo = o, e.modal = {
            zipDownload: !1
        }, e.$on("share-resize", function(e, o) {
            n(o)
        })
    }]), angular.bootstrap(document, ["share"])
});