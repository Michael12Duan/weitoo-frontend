define("app/website/MorePopView", function(require, e, i) {
    require("app/commons/utils/PrivateModifier");
    i.exports = Backbone.View.extend({
        id: "morePopView",
        className: "popover fade bottom in more-pop",
        initialize: function() {
            this.render()
        },
        render: function() {
            return $(this.el).html(__html(Handlebars.template(function(e, i, t, a, s) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                s = s || {},
                '<div class="arrow"></div><div class="popover-content"><ul class="nav navbar-text"><li class="header-nav-buy"><a href="buy.html" id="buy-nav" title=\'<%= msgPurchaseCenter %>\' target="_blank"><div class="head-icon"><i class="icon-custom-buy"></i></div><div class="head-txt"><%= msgPurchaseCenter %></div></a></li><li class="header-nav-feedback"><a href="http://www.oatos.com/bbs/" id="feedback-nav" title=\'<%= msgBBS %>\' target="_blank"><div class="head-icon"><i class="icon-custom-feedback"></i></div><div class="head-txt"><%= msgBBS %></div></a></li><li class="header-nav-contact"><a href="http://www.oatos.com/contact/" id="contact-nav" title=\'<%=msgContactCs%>\' target="_blank"><div class="head-icon"><i class="icon-custom-contact-cs"></i></div><div class="head-txt"><%=msgContactCs%></div></a></li><li class="header-nav-exit"><a class="safe-exit" href="#loginout" title=\'<%= msg1163 %>\'><div class="head-icon"><i class="icon-custom-exit"></i></div><div class="head-txt"><%= msg1163 %></div></a></li></ul><div style="clear:both;"></div></div>'
            }
            ))),
            this
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/chat/models/ChatUserListDTO", function(require, e, n) {
    var s = require("app/commons/models/user/UserDTO");
    n.exports = window.ChatUserListDTO = Backbone.Collection.extend({
        model: s,
        url: "",
        initialize: function() {},
        hasUser: function(e) {
            return e = parseInt(e),
            !!this.findWhere({
                userId: e
            })
        }
    })
}
);
;define("app/website/chat/views/ChatFileView", function(require, e, a) {
    a.exports = Backbone.View.extend({
        tagName: "div",
        className: "chat-item",
        openFileId: void 0,
        events: {
            "click .accept-file": "receiveFile",
            "click .refuse-file": "refuseFile",
            "click .open-file": "openFile"
        },
        initialize: function() {
            !this.model.get("fileMessage").receivedList && (this.model.get("fileMessage").receivedList = [])
        },
        render: function() {
            this.model.set("time", constants.sendDateConverter(null , this.model.get("sendTime"))),
            this.model.set("titleColor", this.model.get("senderId") === cache.userId ? "my-title" : "other-title"),
            this.$el.html(__html(Handlebars.template(function(e, a, i, t, s) {
                this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                s = s || {};
                var l, d, n = "", r = "function", o = this.escapeExpression;
                return n += '<div class="message_title ',
                (d = i.titleColor) ? l = d.call(a, {
                    hash: {},
                    data: s
                }) : (d = a && a.titleColor,
                l = typeof d === r ? d.call(a, {
                    hash: {},
                    data: s
                }) : d),
                n += o(l) + '" name="messageTitle"><span name="senderName">',
                (d = i.senderName) ? l = d.call(a, {
                    hash: {},
                    data: s
                }) : (d = a && a.senderName,
                l = typeof d === r ? d.call(a, {
                    hash: {},
                    data: s
                }) : d),
                n += o(l) + '</span><span name="sendTime" class="sendTime">',
                (d = i.time) ? l = d.call(a, {
                    hash: {},
                    data: s
                }) : (d = a && a.time,
                l = typeof d === r ? d.call(a, {
                    hash: {},
                    data: s
                }) : d),
                n += o(l) + "</span></div>"
            }
            ), this.model.toJSON()));
            var e = this.model.get("fileMessage").msgList
              , a = {}
              , i = constants.getFileOperationTip(this.model.get("fileMessage").operation);
            a.operation = i,
            this.model.get("msgType") == MessageType.ShareFileUpload ? (a.acceptFile = "hide",
            a.refuseFile = "hide",
            a.diskType = constants.fileType.shareDisk) : this.model.get("msgType") == MessageType.DoSendFile && (a.openFile = "hide",
            a.diskType = constants.fileType.onlineDisk);
            for (var t in e)
                a.type = constants.typeConverter("ModelToView", e[t].folderId ? "folder" : constants.getFileSuffix(e[t].name)),
                a.name = e[t].name,
                a.fileId = e[t].fileId,
                a.parentId = e[t].parentId,
                a.folderId = e[t].folderId,
                this.$el.append(__html(Handlebars.template(function(e, a, i, t, s) {
                    this.compilerInfo = [4, ">= 1.0.0"],
                    i = this.merge(i, e.helpers),
                    s = s || {};
                    var l, d, n = "", r = "function", o = this.escapeExpression;
                    return n += '<div class="filecontent"><div name="operation" class="operation">',
                    (d = i.operation) ? l = d.call(a, {
                        hash: {},
                        data: s
                    }) : (d = a && a.operation,
                    l = typeof d === r ? d.call(a, {
                        hash: {},
                        data: s
                    }) : d),
                    n += o(l) + ':</div><div class="fileItem"><i class="file-icon ',
                    (d = i.type) ? l = d.call(a, {
                        hash: {},
                        data: s
                    }) : (d = a && a.type,
                    l = typeof d === r ? d.call(a, {
                        hash: {},
                        data: s
                    }) : d),
                    n += o(l) + '" name="file-icon"></i></div><div name="content" class="fileName">',
                    (d = i.name) ? l = d.call(a, {
                        hash: {},
                        data: s
                    }) : (d = a && a.name,
                    l = typeof d === r ? d.call(a, {
                        hash: {},
                        data: s
                    }) : d),
                    n += o(l) + '</div></div><div class="clear"></div><div class="fileOpt" oldfid="',
                    (d = i.fileId) ? l = d.call(a, {
                        hash: {},
                        data: s
                    }) : (d = a && a.fileId,
                    l = typeof d === r ? d.call(a, {
                        hash: {},
                        data: s
                    }) : d),
                    n += o(l) + '" fileid="',
                    (d = i.fileId) ? l = d.call(a, {
                        hash: {},
                        data: s
                    }) : (d = a && a.fileId,
                    l = typeof d === r ? d.call(a, {
                        hash: {},
                        data: s
                    }) : d),
                    n += o(l) + '" folderid="',
                    (d = i.folderId) ? l = d.call(a, {
                        hash: {},
                        data: s
                    }) : (d = a && a.folderId,
                    l = typeof d === r ? d.call(a, {
                        hash: {},
                        data: s
                    }) : d),
                    n += o(l) + '" parentid="',
                    (d = i.parentId) ? l = d.call(a, {
                        hash: {},
                        data: s
                    }) : (d = a && a.parentId,
                    l = typeof d === r ? d.call(a, {
                        hash: {},
                        data: s
                    }) : d),
                    n += o(l) + '" disktype="',
                    (d = i.diskType) ? l = d.call(a, {
                        hash: {},
                        data: s
                    }) : (d = a && a.diskType,
                    l = typeof d === r ? d.call(a, {
                        hash: {},
                        data: s
                    }) : d),
                    n += o(l) + '"><a href="###" class="accept-file ',
                    (d = i.acceptFile) ? l = d.call(a, {
                        hash: {},
                        data: s
                    }) : (d = a && a.acceptFile,
                    l = typeof d === r ? d.call(a, {
                        hash: {},
                        data: s
                    }) : d),
                    n += o(l) + '"><%=msg557%></a><a href="###" class="refuse-file ',
                    (d = i.refuseFile) ? l = d.call(a, {
                        hash: {},
                        data: s
                    }) : (d = a && a.refuseFile,
                    l = typeof d === r ? d.call(a, {
                        hash: {},
                        data: s
                    }) : d),
                    n += o(l) + '"><%=msg558 %></a><a href="###" class="download-file hide" target="_blank"><%=msg259%></a><a class="open-file ',
                    (d = i.openFile) ? l = d.call(a, {
                        hash: {},
                        data: s
                    }) : (d = a && a.openFile,
                    l = typeof d === r ? d.call(a, {
                        hash: {},
                        data: s
                    }) : d),
                    n += o(l) + '" href="###"><%=msg562%></a> <span class="refused-tips hide"><%=msg563%></span></div>'
                }
                ), a));
            if (this.model.get("msgType") == MessageType.DoSendFile && this.model.get("fileMessage").receivedList.length) {
                var s = this.model.get("fileMessage").receivedList;
                for (var t in s)
                    "received" == s[t].type ? this.showOpenFile(s[t].oldFileId, s[t].file) : this.showRefuseFile(s[t].oldFileId)
            }
            return this
        },
        receiveFile: function(e) {
            var a = $(e.target).parent().attr("oldfid");
            if (a && !isNaN(a)) {
                a = parseInt(a);
                var i = this;
                this.model.receiveFile(a, function(t) {
                    if (constants.isResponseError(t))
                        noty.error(msgs.msgReceiveFileError);
                    else {
                        i.showOpenFile(a, t),
                        i.addReceivedFiles("received", a, t);
                        var s = $(e.target).parent().prev().prev().find(".fileName").html();
                        Amq.sendMessage({
                            msgType: MessageType.ChatMessage,
                            msgBody: "已接收文件: " + s,
                            senderId: cache.userId,
                            senderName: model.currentUser.getDisplayName(),
                            receiverId: i.model.get("senderId")
                        })
                    }
                }
                )
            }
        },
        showOpenFile: function(e, a) {
            var i = this.$(".fileOpt[oldfid=" + e + "]");
            i.attr("fileid", a.fileId).attr("parentid", a.folderId),
            i.find(".accept-file").addClass("hide"),
            i.find(".refuse-file").addClass("hide"),
            model.currentUser.get("diskEnabled") && i.find(".open-file").removeClass("hide");
            var t = constants.getDownloadUrl(a.fileId, constants.fileType.onlineDisk);
            i.find(".download-file").removeClass("hide").attr("href", t)
        },
        addReceivedFiles: function(e, a, i) {
            var t = {
                type: e,
                oldFileId: a,
                file: {
                    fileId: i.fileId,
                    folderId: i.folderId
                }
            };
            this.model.get("fileMessage").receivedList.push(t)
        },
        refuseFile: function(e) {
            var a = $(e.target).parent().attr("oldfid");
            this.showRefuseFile(a),
            this.addReceivedFiles("refused", a, {});
            var i = $(e.target).parent().prev().prev().find(".fileName").html();
            Amq.sendMessage({
                msgType: MessageType.ChatMessage,
                msgBody: "拒绝接收:" + i,
                senderId: cache.userId,
                senderName: model.currentUser.get("realName") || cache.username,
                receiverId: this.model.get("senderId")
            })
        },
        showRefuseFile: function(e) {
            var a = this.$(".fileOpt[oldfid=" + e + "]");
            a.find(".accept-file").addClass("hide"),
            a.find(".refuse-file").addClass("hide"),
            a.find(".refused-tips").removeClass("hide")
        },
        openFile: function(e) {
            var a = $(e.target).parents(".fileOpt")
              , i = a.attr("disktype");
            this.openFileId = a.attr("fileid") || a.attr("folderid");
            var t = a.attr("fileid") ? "forwardfile" : "forwardfolder";
            router.approuter.navigate(i + "/" + t + "/" + this.openFileId, !0),
            view.fileLeftView && view.fileLeftView.activeLink(".left-nav-person")
        },
        setSelect: function() {
            var e = this;
            setTimeout(function() {
                var a = collection.currentFileList.get(e.openFileId);
                a && view.fileTable.$("#ent-file-list > li").get(collection.currentFileList.indexOf(a)).click()
            }
            , 200)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/chat/views/ChatItemView", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "div",
        className: "chat-item",
        _modelBinder: void 0,
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder,
            this.listenTo(this.model, "change:msgBody", this.render),
            this.render()
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, t, s, n, i) {
                this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                i = i || {};
                var a, d, o = "", m = "function", h = this.escapeExpression;
                return o += '<div class="message_title" name="senderId"><span name="senderName">',
                (d = s.senderName) ? a = d.call(t, {
                    hash: {},
                    data: i
                }) : (d = t && t.senderName,
                a = typeof d === m ? d.call(t, {
                    hash: {},
                    data: i
                }) : d),
                o += h(a) + '</span><span name="sendTime" class="sendTime"></span></div><div class="content" name="msgBody">',
                (d = s.msgBody) ? a = d.call(t, {
                    hash: {},
                    data: i
                }) : (d = t && t.msgBody,
                a = typeof d === m ? d.call(t, {
                    hash: {},
                    data: i
                }) : d),
                o += h(a) + "</div>"
            }
            ), this.model.toJSON())),
            this.$("[name=senderId]").addClass(this.model.get("senderId") === cache.userId ? "my-title" : "other-title");
            var e = {
                sendTime: {
                    selector: "[name=sendTime]",
                    converter: constants.sendDateConverter
                }
            };
            return this._modelBinder.bind(this.model, this.el, e),
            this.createHttpLink(),
            this
        },
        createHttpLink: function() {
            this.$("div[name=msgBody]").html(webhelper.becomeLink(this.model.get("msgBody")))
        },
        close: function() {
            this._modelBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/chat/views/ChatUploadItem", function(require, e, s) {
    s.exports = Backbone.View.extend({
        tagName: "div",
        className: "chat-upload-content",
        $progress: void 0,
        $complete: void 0,
        events: {
            "click .cs-remove-item": "onRemoveItem"
        },
        initialize: function() {
            this.collection = this.options.collection,
            this.listenTo(this.model, "change:percent", this.onprogress),
            this.listenTo(this.model, "change:status", this.onstatus),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, s, t, a, l) {
                this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                l = l || {};
                var i, o, r = "", n = "function", c = this.escapeExpression;
                return r += '<div class="row-fluid my-title"><div class="span6 text-overflow"><span name="senderName">',
                (o = t.senderName) ? i = o.call(s, {
                    hash: {},
                    data: l
                }) : (o = s && s.senderName,
                i = typeof o === n ? o.call(s, {
                    hash: {},
                    data: l
                }) : o),
                r += c(i) + '</span></div><div class="span6 pull-right text-overflow"><div class="sendTime">',
                (o = t.sendTime) ? i = o.call(s, {
                    hash: {},
                    data: l
                }) : (o = s && s.sendTime,
                i = typeof o === n ? o.call(s, {
                    hash: {},
                    data: l
                }) : o),
                r += c(i) + '</div></div></div><div class="position-relative chat-upload-item progress"><div style="width: 0%" class="bar upload-progress"></div><ul class="row-fluid upload-item-body"><li class="span4 file-name text-overflow">',
                (o = t.name) ? i = o.call(s, {
                    hash: {},
                    data: l
                }) : (o = s && s.name,
                i = typeof o === n ? o.call(s, {
                    hash: {},
                    data: l
                }) : o),
                r += c(i) + '</li><li class="span4 file-complete">(0%)</li><li class="span2 file-size">',
                (o = t.size) ? i = o.call(s, {
                    hash: {},
                    data: l
                }) : (o = s && s.size,
                i = typeof o === n ? o.call(s, {
                    hash: {},
                    data: l
                }) : o),
                r += c(i) + '</li><li class="span2 file-operations"></li></ul></div>'
            }
            ), {
                name: this.model.get("name"),
                size: constants.convertSize(this.model.get("size")),
                senderName: this.model.get("senderName"),
                sendTime: constants.dateStrFromMisc(this.model.get("sendTime"))
            })),
            this.$progress = this.$(".upload-progress.bar"),
            this.$complete = this.$(".file-complete"),
            this
        },
        onprogress: function() {
            log.debug("onprogress: ", this.model.get("percent")),
            this.$progress.css("width", this.model.get("percent")),
            this.$complete.html("<span class='label'>" + this.model.get("percent") + "</span>")
        },
        onstatus: function() {
            if (log.debug("onstatus: file: ", this.model.get("name"), ", status: ", this.model.get("status")),
            this.model.get("status")) {
                switch (this.model.get("status")) {
                case "init":
                    this.$complete.html("<span class='label'>等待上传</span>");
                    break;
                case "checking":
                    this.$complete.html("<span class='label label-success'>检查中</span>");
                    break;
                case "wait":
                    this.$progress.removeClass("hide-force"),
                    this.$complete.html("<span class='label label-success'>等待上传</span>");
                    break;
                case "upload":
                    this.$complete.html("<span class='label'>上传中</span>");
                    break;
                case "success":
                    this.$progress.addClass("hide-force"),
                    this.$complete.html("<span class='label label-info'>上传完成</span> ");
                    break;
                default:
                    this.$progress.addClass("hide-force"),
                    this.$complete.html("<span class='label label-important'>" + this.getStatusText() + "</span>")
                }
                this.$(".cs-rename-file").toggleClass("hide-force", "errorSameFile" !== this.model.get("status"))
            }
        },
        onRemoveItem: function() {
            this.collection.remove(this.model)
        },
        getStatusText: function() {
            switch (this.model.get("status")) {
            case ErrorType.errorSameFile:
                return "文件名重复";
            case ErrorType.errorNoSpace:
                return "云盘空间不足";
            case ErrorType.errorFolderSpaceOver:
                return "文件夹空间不足";
            case ErrorType.errorFolderDeleted:
                return "文件夹已被删除";
            case ErrorType.errorCheckToken:
            case ErrorType.error500:
            default:
                return "网络错误"
            }
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/chat/views/VoiceMsgItem", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "div",
        className: "voice-msg-item",
        _fileUrl: void 0,
        _length: void 0,
        events: {
            "click .btn": "_onPlay"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            var e = JSON.parse(this.model.get("msgBody"));
            return this._fileUrl = "/res/" + e.receiveFileDTO.fileGuid,
            this._length = e.length,
            this.$el.html(__html(Handlebars.template(function(e, t, s, i, a) {
                this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                a = a || {};
                var n, l, o = "", d = "function", h = this.escapeExpression;
                return o += '<div class="message_title" name="senderId"><span name="senderName">',
                (l = s.senderName) ? n = l.call(t, {
                    hash: {},
                    data: a
                }) : (l = t && t.senderName,
                n = typeof l === d ? l.call(t, {
                    hash: {},
                    data: a
                }) : l),
                o += h(n) + '</span><span name="sendTime" class="sendTime">',
                (l = s.sendTimeStr) ? n = l.call(t, {
                    hash: {},
                    data: a
                }) : (l = t && t.sendTimeStr,
                n = typeof l === d ? l.call(t, {
                    hash: {},
                    data: a
                }) : l),
                o += h(n) + '</span></div><div class="content" name="msgBody"><span class="btn btn-white-blue voice-btn"><img src="/os/assets/img/website/voice.png" alt="voice-png"/><span id="oatosVoicePlay" style="visibility: hidden"></span></span><span>',
                (l = s.length) ? n = l.call(t, {
                    hash: {},
                    data: a
                }) : (l = t && t.length,
                n = typeof l === d ? l.call(t, {
                    hash: {},
                    data: a
                }) : l),
                o += h(n) + "''</span></div>"
            }
            ), {
                senderName: this.model.get("senderName"),
                sendTimeStr: this.model.get("sendTimeStr"),
                length: e.length
            })),
            this.$("[name=senderId]").addClass(this.model.get("senderId") === cache.userId ? "my-title" : "other-title"),
            this
        },
        initFlash: function() {
            swfobject.embedSWF("/os/swf/oatosPlayer.swf", "oatosVoicePlay", "1", "1", "9.0.0", "expressInstall.swf", {}, {
                wmode: "transparent"
            })
        },
        _onPlay: function() {
            var e = this;
            this.initFlash(),
            setTimeout(function() {
                var t = document.getElementById("oatosVoicePlay");
                log.info("player: ", t),
                t && t.play("http://localhost" + e._fileUrl),
                e.$(".btn img").attr("src", "/os/assets/img/website/voice.gif"),
                setTimeout(function() {
                    e.$(".btn img").attr("src", "/os/assets/img/website/voice.png")
                }
                , 1e3 * e._length)
            }
            , 500)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/upload/UploadFile", function(require, e, t) {
    t.exports = Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: void 0,
            name: void 0,
            size: void 0,
            ext: void 0,
            status: void 0,
            statusText: void 0,
            fileType: void 0,
            path: void 0,
            completed: 0,
            queueFile: void 0,
            notifyUserIds: void 0,
            notifyMails: void 0
        },
        constructor: function() {
            var e = arguments[0];
            e && (arguments[0] = this.parse(e)),
            Backbone.Model.apply(this, arguments)
        },
        parse: function(e) {
            return {
                id: e.id,
                name: e.name,
                size: e.size,
                statusText: e.statusText,
                ext: e.ext
            }
        },
        checkUpload: function(e) {
            return nodeRest.post("/upload/single/check", {
                fileType: this.get("fileType"),
                folderId: this.get("parentId"),
                name: this.get("name"),
                size: this.get("size"),
                fileMd5: this.get("fileMd5")
            }, e)
        },
        isComplete: function() {
            return "success" === this.get("status") || _.startsWith(this.get("status"), "error")
        },
        isEntDisk: function() {
            return "sharedisk" === this.get("fileType")
        }
    })
}
);
;define("app/website/upload/UploadFileList", function(require, e, t) {
    function n(e, t) {
        Amq.sendMessages(_.map(e, function(e) {
            var n = {
                msgType: MessageType.ShareFileUpload,
                msgBody: JSON.stringify({
                    entId: cache.entId,
                    userId: cache.userId,
                    operation: constants.operation.UploadFile,
                    msgList: _.map(t, function(e) {
                        return {
                            parentId: e.get("parentId"),
                            fileId: e.get("fileId"),
                            name: e.get("name")
                        }
                    }
                    )
                }),
                senderId: cache.userId,
                senderName: model.currentUser.getDisplayName(),
                receiverId: e.get("userId"),
                receiverName: e.getDisplayName()
            };
            return log.debug("Amq msg notify: ", e.get("userName"), ", message: ", n),
            n
        }
        ))
    }
    function r(e, t) {
        var n = model.currentUser.getDisplayName() + "通过燕麦企业云盘上传了: <br/>";
        n += _.reduce(t, function(e, t) {
            return e + t.get("path") + "<br/>"
        }
        , ""),
        n += "请<a href='http://app.oatos.com/os/login.html' target='_blank'>登录燕麦企业云盘</a>查阅<br/><br/>",
        n += model.currentUser.getDisplayName() + " " + moment().format("YYYY年MM月DD日"),
        log.debug("mail notify: ", e, ", content: ", n),
        resturl.sendMail({
            entId: cache.entId,
            userId: cache.userId,
            subject: "燕麦企业云盘上传文件消息提醒",
            to: e,
            content: n
        }, function(e) {
            switch (e) {
            case ErrorType.errorMailOver:
                noty.success(msgs.msgErrorMailOver);
                break;
            case "errorWaiting":
                noty.success("上传文件邮件通知失败! 一分钟之内只能发送一份邮件, 请稍候!");
                break;
            default:
                noty.success("成功发送上传文件邮件通知!")
            }
        }
        )
    }
    var s = require("app/website/upload/UploadFile");
    t.exports = Backbone.Collection.extend({
        model: s,
        getStatInfo: function() {
            var e = this.length
              , t = this.filter(function(e) {
                return "success" === e.get("status")
            }
            ).length
              , n = this.filter(function(e) {
                return _.startsWith(e.get("status"), "error")
            }
            ).length;
            return {
                total: e,
                success: t,
                error: n,
                upload: e - t - n
            }
        },
        hasUploadFile: function() {
            return !!this.find(function(e) {
                return _.contains(["upload", "wait", "checking", "init"], e.get("status")) ? !0 : void 0
            }
            )
        },
        sendNotify: function(e) {
            if (!e || !e.length)
                return !1;
            var t = this.filter(function(e) {
                return e.isEntDisk() && "success" === e.get("status") && !e.get("hasNotify")
            }
            );
            if (!t.length)
                return !1;
            n(e, t),
            noty.success("成功发送即时通讯发送上传文件消息!");
            var s = _.map(e, function(e) {
                return e.get("sendMail") ? e.get(constants.isEmail(e.get("userName")) ? "userName" : "mail") : null 
            }
            );
            s = _.compact(s),
            s.length && r(s, t),
            _.each(t, function(e) {
                e.set("hasNotify", !0)
            }
            )
        }
    })
}
);
;define("app/website/chat/views/ChatPanelView", function(require, e, t) {
    var s = "ChatPanelView::"
      , a = require("app/website/chat/views/ChatUploadItem")
      , i = require("app/commons/models/message/MessageDTO")
      , o = require("app/website/chat/views/ChatFileView")
      , n = require("app/website/chat/views/ChatItemView")
      , r = require("app/website/chat/views/VoiceMsgItem")
      , c = require("app/website/upload/UploadFile")
      , l = require("app/website/upload/UploadFileList");
    t.exports = Backbone.View.extend({
        tagName: "div",
        className: "tab-pane",
        _modelBinder: void 0,
        collectionBinder: void 0,
        $chatBody: void 0,
        $content: void 0,
        $sendBtn: void 0,
        $uploader: void 0,
        msgList: void 0,
        chatUser: void 0,
        chatKey: void 0,
        uploadList: void 0,
        events: {
            "click a.send-btn": "sendMessage",
            "click a.operate-btn": "toggleContact",
            "focus textarea.chat-content": "_onFocusTextArea"
        },
        initialize: function() {
            var e = this;
            this.msgList = this.collection,
            this.chatUser = this.options.chatUser,
            this.chatKey = this.options.chatKey,
            this.uploadList = new l,
            this.listenTo(this.chatUser, "change:selected", this.onConfirmMsg),
            this.listenTo(model.messageEvent, "remove-contact", function(t) {
                log.debug(s, "listenTo: remove-contact: ", t, ", chatUser: ", e.chatUser.get("userId")),
                e.chatUser.get("userId") === t && (e.chatUser.set("usualContact", !1),
                e._setToggleContact())
            }
            ),
            this.listenTo(model.messageEvent, "add-contact", function(t) {
                e.chatUser.get("userId") === t && (e.chatUser.set("usualContact", !0),
                e._setToggleContact())
            }
            ),
            this._modelBinder = new Backbone.ModelBinder;
            var t = new Backbone.CollectionBinder.ViewManagerFactory(this._viewCreator());
            this.collectionBinder = new Backbone.CollectionBinder(t),
            this.render()
        },
        render: function() {
            var e = this;
            return this.$el.html(__html(Handlebars.template(function(e, t, s, a, i) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                i = i || {},
                '<div class="chat-body"></div><div class="chat-foot"><div class="row-fluid chat-operate"><div class="span4"><div name="sendPicker" class="upload-btn"></div></div><div class="span8 pull-right contact-operates"><a class="operate-btn add-contact" title="添加常用联系人"><i class="icon-custom-contact-add"></i></a><a class="operate-btn remove-contact" title="删除常用联系人"><i class="icon-custom-contact-remove"></i></a></div></div><div class="row-fluid content-area" id="sendDndArea"><textarea name="chatContent" class="chat-content left"></textarea><div class="chat-content-border left"></div><a class="send-btn right"><i class="icon-custom-sendMessage"></i></a></div></div>'
            }
            ))),
            this.$chatBody = this.$(".chat-body"),
            this.$content = this.$(".chat-foot textarea"),
            this.$el.attr("id", "chatuser" + this.chatUser.id),
            this.$uploader = this.$("[name=sendPicker]"),
            this.$uploader.attr("id", "sendPicker_" + this.chatUser.id),
            this._setToggleContact(),
            this._bindContent(),
            this.collectionBinder.bind(this.collection, this.$chatBody),
            this.collectionBinder.on("elCreated", function() {
                e.$chatBody.scrollTop(e.$chatBody[0].scrollHeight + 38)
            }
            ),
            e.$chatBody.scrollTop(e.$chatBody[0].scrollHeight),
            setTimeout(function() {
                e.initUpload()
            }
            , 500),
            this
        },
        initUpload: function() {
            var e = this;
            log.debug(s, "initUpload: pick: ", this.$uploader.attr("id")),
            this.uploader = WebUploader.create({
                auto: !0,
                swf: "/os/sea-modules/jquery/plugins/webuploader/Uploader.swf",
                pick: {
                    id: "#" + this.$uploader.attr("id"),
                    innerHTML: '<i class="icon-custom-send-file"></i>'
                },
                fileNumLimit: 20,
                fileSingleSizeLimit: 1073741824,
                server: "/upload/send/file"
            });
            var t = {
                beforeFileQueued: function(t) {
                    var a = new c(t)
                      , o = e.uploadList.some(function(e) {
                        return e.get("name") === a.get("name")
                    }
                    );
                    if (log.debug(s, "duplicate: ", o),
                    o)
                        return noty.error("不能重复发送文件!"),
                        !1;
                    a.set({
                        status: "init",
                        fileType: "onlinedisk",
                        receiverId: e.chatUser.get("userId"),
                        receiverName: e.chatUser.getDisplayName(),
                        senderName: model.currentUser.getDisplayName(),
                        sendTime: (new Date).valueOf(),
                        queueFile: t
                    });
                    var n = new i({
                        msgType: MessageType.UploadSendFile,
                        msgBody: a,
                        senderId: cache.userId,
                        senderName: a.get("senderName"),
                        receiverId: a.get("receiverId"),
                        sendTime: a.get("sendTime")
                    });
                    return e.collection.add(n),
                    e.uploadList.add(a),
                    !0
                },
                uploadBeforeSend: function(t, s) {
                    if (model.currentUser.isOffline())
                        return noty.alert(msgs.msgChatFail),
                        !1;
                    var a = e.uploadList.get(s.id)
                      , i = {
                        token: cache.token,
                        fileName: a.get("name"),
                        fileType: "sendfile",
                        senderId: cache.userId,
                        senderName: model.currentUser.getDisplayName(),
                        receiverId: a.get("receiverId"),
                        receiverName: a.get("receiverName")
                    };
                    log.info("upload param: ", JSON.stringify(i)),
                    s.param = JSON.stringify(i),
                    a.set("status", "upload")
                },
                uploadProgress: function(t, a) {
                    log.info(s, " uploadProgress: file: ", t.name, ", percent: ", a);
                    var i = e.uploadList.get(t.id);
                    i.set("percent", _.numberFormat(100 * a, 2) + "%"),
                    i.set("completed", i.get("size") * a)
                },
                uploadError: function(t, a) {
                    log.warn(s, "uploadError: file: ", t.name, ", reason: ", a);
                    var i = e.uploadList.get(t.id);
                    i.set("status", "error")
                },
                uploadSuccess: function(t, a) {
                    if (!a)
                        return !1;
                    log.info(s, "uploadSuccess: ", t, ", response: ", a);
                    var i = e.uploadList.get(t.id);
                    return _.startsWith(a.statusCode, "error") ? (i.set("status", a.statusCode),
                    !1) : void i.set({
                        status: "success",
                        fileId: a.fileId
                    })
                },
                error: function(e) {
                    switch (log.warn(s, "error: ", e),
                    e) {
                    case "Q_EXCEED_NUM_LIMIT":
                        noty.error("一次不能选择超过20个文件!");
                        break;
                    case "Q_EXCEED_SIZE_LIMIT":
                        noty.error("不能选择超过1G的文件!");
                        break;
                    case "Q_TYPE_DENIED":
                        noty.error("不允许选择该文件类型!");
                        break;
                    case "F_DUPLICATE":
                        noty.error("不能重复发送文件!")
                    }
                }
            };
            _.each(t, function(t, s) {
                e.uploader.on(s, t)
            }
            ),
            this._ctrlDnd(this.$("#sendDndArea"))
        },
        _ctrlDnd: function(e) {
            webhelper.isIE8() ? e.removeClass("placeholder") : e.on("dragenter dragover", function() {
                e.addClass("placeholder-hover")
            }
            ).on("dragleave drop", function() {
                e.removeClass("placeholder-hover")
            }
            )
        },
        _addUploadHook: function() {
            var e = this;
            WebUploader.Uploader.register({
                "before-send-file": "preupload"
            }, {
                preupload: function(t) {
                    var a = this.owner
                      , i = e.collection.get(t.id)
                      , o = WebUploader.Deferred();
                    return i.set("status", "checking"),
                    a.md5File(t.source).fail(function() {
                        o.reject()
                    }
                    ).then(function(n) {
                        log.info(s, "hook, file: ", t.name, ", md5: ", n, ", uploadFile: ", i),
                        i.set("fileMd5", n),
                        i.checkUpload(function(n, r) {
                            n ? (log.error("fail to check upload: ", i.get("name"), ", err: ", n),
                            log.warn(s, " skip file: ", i.get("name")),
                            i.set("status", n),
                            a.skipFile(t),
                            o.resolve()) : r.fileId ? (i.set("status", "success"),
                            a.skipFile(t),
                            e._onUploadSuccess()(t, r),
                            o.resolve()) : (i.set("status", "wait"),
                            o.resolve())
                        }
                        )
                    }
                    ),
                    o.promise()
                }
            })
        },
        _setToggleContact: function() {
            this.$(".operate-btn.add-contact").toggleClass("hide-force", this.chatUser.get("usualContact")),
            this.$(".operate-btn.remove-contact").toggleClass("hide-force", !this.chatUser.get("usualContact"))
        },
        _bindContent: function() {
            var e = this;
            this.$content.bind("keydown", "return", function(t) {
                return t.stopPropagation(),
                t.preventDefault(),
                e.$("a.send-btn").click(),
                !1
            }
            ).bind("keydown", "ctrl+return", function() {
                return e.$content.val(e.$content.val() + "\r"),
                !1
            }
            ),
            $(document).bind("keydown", "return", function(t) {
                return t.stopPropagation(),
                t.preventDefault(),
                e.$("a.send-btn").click(),
                !1
            }
            ).bind("keydown", "ctrl+return", function() {
                return e.$content.val(e.$content.val() + "\r"),
                !1
            }
            )
        },
        _onFocusTextArea: function() {
            router.approuter.clearMsgTitleTimer()
        },
        onConfirmMsg: function() {
            this.chatUser.get("selected") && this.msgList.confirmMsg()
        },
        _viewCreator: function() {
            var e = this;
            return function(t) {
                return t.isChatFileMsg() ? new o({
                    model: t
                }) : t.isUploadSendFileMsg() ? new a({
                    model: t.get("msgBody"),
                    collection: e.uploadList
                }) : t.isVoiceMsg() ? new r({
                    model: t
                }) : new n({
                    model: t
                })
            }
        },
        sendMessage: function() {
            if (model.currentUser.isOffline())
                return noty.alert(msgs.msgChatFail),
                !1;
            if ($.trim(this.$content.val())) {
                var e = this.$content.val().replace(/\n/g, "<br/>").replace(/\s/g, "&nbsp;");
                e.match(/<|>/g) && (this.$content.val(""),
                e = _.escape(e),
                e = e.replace(/\&lt\;br\/\&gt;/g, "<br/>").replace(/\&amp\;nbsp\;/g, "&nbsp"));
                var t = new i({
                    msgBody: e,
                    msgType: "Chat",
                    senderId: cache.userId,
                    senderName: cache.username,
                    receiverId: this.chatUser.get("userId"),
                    receiverName: this.chatUser.get("userName")
                });
                this.msgList.add(t),
                this.$content.val(""),
                t.sendMessage(function(s) {
                    s || t.set("msgBody", '<i class="icon-custom-send-type" title="消息发送失败"></i>' + e)
                }
                )
            }
        },
        toggleContact: function() {
            this.chatUser.get("usualContact") ? router.approuter.navigate("usual/del/" + this.chatUser.id, !0) : router.approuter.navigate("usual/add/" + this.chatUser.id, !0)
        },
        close: function() {
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/chat/views/ChatTipView", function(require, i, t) {
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "chatTipView",
        className: "messageTip",
        dialog: void 0,
        message: void 0,
        initialize: function() {
            this.message = []
        },
        render: function() {
            return this
        },
        initDialog: function() {
            var i = this;
            this.dialog = $.dialog({
                id: this.id,
                title: "初始化消息",
                content: "",
                left: this.getTipsLeft(),
                top: this.getTipsTop(),
                width: 207,
                height: 33,
                init: function() {
                    i.$el.parents("table.ui_border").addClass("tips-dialog"),
                    this.min(),
                    $(this.DOM.close).hide()
                },
                min: !1,
                max: !1,
                close: function() {
                    return this.hide(),
                    !1
                }
            }),
            this.bindDialogEvents(),
            this.dialog.hide()
        },
        showDialog: function(i, t) {
            this.message.push(i),
            this.dialog.title(t),
            this.dialog.position(this.getTipsLeft(), this.getTipsTop()),
            this.dialog.show()
        },
        getTipsLeft: function() {
            return view.mainbox.isSlideShow() ? model.setting.getMainboxWidth() - model.setting.get("slideRightWidth") - 237 : model.setting.getMainboxWidth() - 237
        },
        getTipsTop: function() {
            return model.setting.getMainboxHeight() + 31
        },
        bindDialogEvents: function() {
            var i = this;
            $(this.dialog.DOM.inner).off("click").on("click", function() {
                for (var t in i.message)
                    i.message[t].get("senderId") ? router.approuter.chatWithUser(i.message[t].get("senderId")) : router.approuter.readSysMsg(i.message[t]);
                i.message = [],
                i.dialog.close()
            }
            ),
            $(window).resize(function() {
                i.dialog && i.dialog.position(i.getTipsLeft(), i.getTipsTop())
            }
            )
        },
        close: function() {}
    })
}
);
;define("app/website/chat/views/ChatUserView", function(require, e, s) {
    s.exports = Backbone.View.extend({
        tagName: "li",
        className: "chat-user",
        _modelBinder: void 0,
        chatTimer: void 0,
        chatUser: void 0,
        events: {
            "click div.userBox": "switchChatUser",
            "click div.removeUser b": "removeChatUser"
        },
        initialize: function() {
            this.chatUser = this.model,
            this.chatUser.set("displayName", this.chatUser.getDisplayName()),
            this.listenTo(this.chatUser, "change:selected", this.onConfirmMsg),
            this.listenTo(this.chatUser, EventType.chatMsg, this.onMsgReceive),
            this._modelBinder = new Backbone.ModelBinder
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, s, t, i, a) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                a = a || {},
                '<div data-toggle="tab" class="userBox"><div class="status"></div><div class="avatarBox"><img src="" class="avatar"/></div><div class="userName"><%=msg569%></div></div><div class="removeUser"><b></b></div><div style="clear:both;"></div>'
            }
            )));
            var e = {
                displayName: "[class=userName]",
                icon: {
                    selector: "[class=avatar]",
                    elAttribute: "src"
                },
                userId: [{
                    selector: "[data-toggle=tab]",
                    elAttribute: "data-target",
                    converter: this.getUserId
                }, {
                    selector: "[class=removeUser]",
                    elAttribute: "val"
                }],
                onlineStatus: {
                    selector: "[class=status]",
                    elAttribute: "class"
                }
            };
            return this._modelBinder.bind(this.chatUser, this.el, e),
            this
        },
        getUserId: function(e, s) {
            return "#chatuser" + s
        },
        onMsgReceive: function() {
            var e = this;
            this.chatTimer && clearInterval(this.chatTimer),
            this.chatTimer = setInterval(function() {
                e.$el.hasClass("new-msg-blue") ? e.$el.removeClass("new-msg-blue").addClass("new-msg-gray") : e.$el.removeClass("new-msg-gray").addClass("new-msg-blue")
            }
            , 500)
        },
        onConfirmMsg: function() {
            this.$el.removeClass("new-msg-gray").removeClass("new-msg-blue"),
            this.chatUser.get("selected") && this.$("div.userBox").tab("show")
        },
        switchChatUser: function() {
            this.$("div.userBox").tab("show"),
            model.messageEvent.trigger(EventType.switchChatUser, this.chatUser),
            this.chatTimer && clearInterval(this.chatTimer)
        },
        removeChatUser: function() {
            return model.messageEvent.trigger(EventType.removeChatUser, this.model),
            this.close(),
            !1
        },
        close: function() {
            this._modelBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/chat/views/SysChatItem", function(require, s, a) {
    a.exports = Backbone.View.extend({
        tagName: "li",
        className: "sys-msg-item",
        events: {
            "click .msg-link": "_onRead"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            var s = this.model.pick("sendTime", "msgTitle", "msgLink");
            return _.startsWith(s.msgLink, "http://") || (s.msgLink = "http://" + s.msgLink),
            s.hasRead = this.model.hasRead(),
            this.$el.html(__html(Handlebars.template(function(s, a, e, t, i) {
                function n() {
                    return '<span class="right"><%=msgHasRead%></span>'
                }
                function h() {
                    return " msg-read "
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                e = this.merge(e, s.helpers),
                i = i || {};
                var l, r, d = "", m = "function", c = this.escapeExpression, o = this;
                return d += '<div class="time"><span>',
                (r = e.sendTime) ? l = r.call(a, {
                    hash: {},
                    data: i
                }) : (r = a && a.sendTime,
                l = typeof r === m ? r.call(a, {
                    hash: {},
                    data: i
                }) : r),
                d += c(l) + "</span>",
                l = e["if"].call(a, a && a.hasRead, {
                    hash: {},
                    inverse: o.noop,
                    fn: o.program(1, n, i),
                    data: i
                }),
                (l || 0 === l) && (d += l),
                d += '</div><div class="msg-content">',
                (r = e.msgTitle) ? l = r.call(a, {
                    hash: {},
                    data: i
                }) : (r = a && a.msgTitle,
                l = typeof r === m ? r.call(a, {
                    hash: {},
                    data: i
                }) : r),
                d += c(l) + '</div><div class="msg-link"><a href="',
                (r = e.msgLink) ? l = r.call(a, {
                    hash: {},
                    data: i
                }) : (r = a && a.msgLink,
                l = typeof r === m ? r.call(a, {
                    hash: {},
                    data: i
                }) : r),
                d += c(l) + '" class="',
                l = e["if"].call(a, a && a.hasRead, {
                    hash: {},
                    inverse: o.noop,
                    fn: o.program(3, h, i),
                    data: i
                }),
                (l || 0 === l) && (d += l),
                d += '" target="_blank">查看详情</a></div>'
            }
            ), s)),
            this
        },
        _onRead: function() {
            var s = this;
            this.model.confirm(function() {
                s.render()
            }
            )
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/chat/views/ChatView", function(require, e, t) {
    var s = require("app/website/chat/views/ChatUserView")
      , i = require("app/website/chat/views/ChatPanelView")
      , a = require("app/website/chat/views/SysChatItem")
      , h = require("app/commons/models/message/MessageDTO");
    t.exports = Backbone.View.extend({
        tagName: "div",
        className: "chat-windows",
        id: "chatView",
        collectionBinder: void 0,
        collectionBinderSys: void 0,
        collectionBinderPanel: void 0,
        dialog: void 0,
        chatUserList: void 0,
        sysMsgList: void 0,
        chatUser: void 0,
        currentGroup: 1,
        events: {
            "click a.scrollLeft": "moveLeftGroup",
            "click a.scrollRight": "moveRightGroup",
            "click a.closeBtn": "closeModal",
            "click .system-user>.userBox": "showSysMsg",
            "click .system-user>.removeUser": "closeSysMsg"
        },
        initialize: function() {
            this.chatUserList = this.collection,
            this.chatUser = this.chatUser || this.options.chatUser,
            this.sysMsgList = this.sysMsgList || this.options.sysMsgList,
            this.addListener();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e);
            var t = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreatorSys);
            this.collectionBinderSys = new Backbone.CollectionBinder(t);
            var s = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreatorPanel);
            this.collectionBinderPanel = new Backbone.CollectionBinder(s)
        },
        viewCreator: function(e) {
            return new s({
                model: e
            })
        },
        viewCreatorSys: function(e) {
            return new a({
                model: e
            })
        },
        viewCreatorPanel: function(e) {
            var t = cache.userId + "_" + e.get("userId");
            return new i({
                collection: cache.chatMsgListMap[t],
                chatUser: e,
                chatKey: t
            })
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, s, i, a) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                a = a || {},
                '<div class="tabbable"><div class="user-header user_list"><a href="###" class="scrollLeft">‹</a><div class="system-user hide"><div data-toggle="tab" class="userBox"><div class="userName"><i class="icon-custom-system-msg"></i><%=msgSystemMessage%></div></div><div class="removeUser"><b></b></div><div style="clear:both;"></div></div><ul class="nav nav-tabs"></ul><a class="scrollRight" href="###">›</a><div style="clear:both;"></div></div><ul class="tab-sysMsg hide"></ul><div class="tab-content"></div></div>'
            }
            ))),
            this.$navTab = this.$(".nav-tabs"),
            this.$tabContent = this.$(".tab-content"),
            this.collectionBinder.bind(this.chatUserList, this.$navTab),
            this.collectionBinderPanel.bind(this.chatUserList, this.$tabContent),
            this.collectionBinderSys.bind(this.sysMsgList, this.$(".tab-sysMsg")),
            this.delegateEvents(),
            this.dialog && this.dialog.show(),
            this
        },
        addListener: function() {
            this.listenTo(model.messageEvent, EventType.removeChatUser, this.removeChatUser),
            this.listenTo(model.messageEvent, EventType.switchChatUser, this.switchChatUser),
            this.listenTo(model.messageEvent, EventType.changeSlide, this.changeSlide),
            this.listenTo(model.messageEvent, EventType.upSendDialogComplete, this.setSendFileChat),
            this.listenTo(model.messageEvent, EventType.upSendNextFile, this.uploadFilesing)
        },
        initDialog: function() {
            var e = this;
            this.render(),
            this.dialog = $.dialog({
                id: "chatViewDialog",
                title: msgs.msg564,
                content: this.$el,
                max: !1,
                min: !0,
                resize: !0,
                drag: !0,
                left: this.getChatLeft(),
                top: this.getChatTop(),
                padding: 0,
                width: 385,
                height: 198,
                init: function() {
                    e.$el.parents("table.ui_border").addClass("chat-dialogs"),
                    e.$el.parents("table.ui_border").find("div.ui_title_bar").addClass("chat-title-bars")
                },
                close: function() {
                    return this.hide(),
                    e.close(),
                    !1
                }
            }),
            this.bindDialogEvents(),
            this.dialog.hide()
        },
        showDialog: function() {
            $(".chat-dialogs .ui_title_bar .ui_bac_b").trigger("click"),
            $(".chat-dialogs .ui_title_bar .ui_main").show(),
            this.dialog && this.dialog.show(),
            this.$(".tab-pane.active .chat-body").scrollTop(99999)
        },
        showChatMsgDialog: function() {
            this.showDialog(),
            this.onReceiveChatMsg()
        },
        showSysMsgDialog: function() {
            this.showDialog(),
            this.showSysMsg()
        },
        checkUserList: function(e) {
            var t = this.isVisibleSysMsg() ? 3 : 4;
            this.currentGroup = Math.ceil((this.chatUserList.indexOf(e) + 1) / t),
            this.changeUserGroup()
        },
        changeUserGroup: function() {
            this.$(".user_list .nav li").addClass("hide");
            for (var e = this.isVisibleSysMsg() ? 3 : 4, t = (this.currentGroup - 1) * e; t < this.currentGroup * e; t++)
                this.$(".user_list .nav li").eq(t).removeClass("hide")
        },
        moveLeftGroup: function() {
            this.currentGroup > 1 && (this.currentGroup--,
            this.changeUserGroup())
        },
        moveRightGroup: function() {
            var e = this.isVisibleSysMsg() ? 3 : 4;
            this.currentGroup < Math.ceil(this.chatUserList.length / e) && (this.currentGroup++,
            this.changeUserGroup())
        },
        getChatLeft: function() {
            return view.mainbox.isSlideShow() ? model.setting.getMainboxWidth() - model.setting.get("slideRightWidth") - 400 : model.setting.getMainboxWidth() - 400
        },
        getChatTop: function() {
            return model.setting.getMainboxHeight() - 249
        },
        changeSlide: function() {
            this.dialog && this.dialog.position(this.getChatLeft(), this.getChatTop())
        },
        bindDialogEvents: function() {
            var e = this;
            $(".chat-dialogs .ui_title_bar .ui_min b").click(function(e) {
                $(e.target).toggleClass("ui_min_b").toggleClass("ui_bac_b"),
                $(e.target).hasClass("ui_min_b") ? $(e.target).parent().attr("title", msgs.msgToSmall) : $(e.target).parent().attr("title", msgs.msg1235)
            }
            ),
            $(window).resize(function() {
                e.dialog && e.dialog.position(e.getChatLeft(), e.getChatTop())
            }
            )
        },
        onReceiveChatMsg: function() {
            if (1 === collection.chatUserList.length)
                return void this.switchChatUser(this.chatUser);
            if (this.chatUser.get("selected"))
                this.chatUser.trigger("change:selected");
            else {
                var e = this._getChatKey()
                  , t = cache.chatMsgListMap[e];
                t.hasUnreadMsg() && this.chatUser.trigger(EventType.chatMsg)
            }
        },
        _getChatKey: function() {
            return cache.userId + "_" + this.chatUser.id
        },
        switchChatUser: function(e) {
            this.checkUserList(e),
            this.chatUserList.each(function(e) {
                e.get("selected") && e.set("selected", !1)
            }
            ),
            e.set("selected", !0),
            this.hideSysMsg()
        },
        removeChatUser: function(e) {
            if (1 === this.chatUserList.length)
                this.chatUserList.remove(e),
                this.isVisibleSysMsg() ? this.showSysMsg() : this.dialog.close();
            else {
                var t = this.chatUserList.indexOf(e);
                this.chatUserList.remove(e);
                var s = t - 1;
                -1 === t || t >= this.chatUserList.length - 1 ? s = this.chatUserList.length - 1 : 0 === t && (s = t + 1);
                var i = this.chatUserList.at(s);
                this.switchChatUser(i || this.chatUserList.first())
            }
        },
        setSendFileChat: function() {
            var e = collection.sendFileList.where({
                status: "wait",
                hasAdd: !1
            });
            e && e.length && _.each(e, function(e) {
                var t = cache.userId + "_" + e.get("receiverId")
                  , s = cache.chatMsgListMap[t];
                s || (s = new MessageListDTO,
                cache.chatMsgListMap[t] = s);
                var i = (new Date).getTime() + "";
                e.set({
                    senderName: model.currentUser.get("realName") || model.currentUser.get("userName"),
                    sendTime: i
                });
                var a = new h({
                    msgType: MessageType.UploadSendFile,
                    msgBody: e,
                    senderId: cache.userId,
                    receiverId: e.get("receiverId"),
                    sendTime: i
                });
                e.set("hasAdd", !0),
                e.set("isSendFile", !0),
                s.add(a)
            }
            ),
            this.uploadFilesing()
        },
        uploadFilesing: function() {
            if (!collection.sendFileList.findWhere({
                status: "uploading"
            })) {
                var e = collection.sendFileList.findWhere({
                    status: "wait"
                });
                if (!e)
                    return;
                e.set("status", "uploading")
            }
        },
        showSysMsg: function() {
            this.$navTab.addClass("short"),
            this.$(".nav-tabs .chat-user").removeClass("active"),
            this.$(".system-user").removeClass("hide").addClass("active"),
            this.$tabContent.addClass("hide"),
            this.$(".tab-sysMsg").removeClass("hide")
        },
        hideSysMsg: function() {
            this.$(".system-user").removeClass("active"),
            this.$tabContent.removeClass("hide"),
            this.$(".tab-sysMsg").addClass("hide"),
            0 === this.chatUserList.length && this.dialog.close()
        },
        closeSysMsg: function() {
            this.hideSysMsg(),
            this.chatUser && this.chatUserList.length > 0 && this.switchChatUser(this.chatUser),
            this.$navTab.removeClass("short"),
            this.$(".system-user").addClass("hide")
        },
        isVisibleDialog: function() {
            return $(".chat-dialogs").hasClass("ui_state_visible")
        },
        isVisibleSysMsg: function() {
            return !this.$(".system-user").hasClass("hide")
        },
        closeModal: function() {
            this.dialog.close()
        },
        close: function() {
            this.chatUserList.reset()
        }
    })
}
);
;define("app/website/chat/views/SendUploadFileView", function(require, e) {
    function t(e, t) {
        var i = {
            swfuploadLoaded: function() {
                e.listenTo(collection.sendFileList, "change:status", function(t) {
                    switch (t.get("status")) {
                    case "pause":
                        e.swfupload.stopUpload();
                        break;
                    case "cancel":
                        e.swfupload.stopUpload();
                        break;
                    case "uploading":
                        e.swfupload.startUpload(t.get("id"))
                    }
                }
                )
            },
            fileDialogStart: function() {},
            fileQueued: function(e, s) {
                var i = new UploadFileDTO(s);
                if (constants.isInvalidFile(i.get("name")))
                    return noty.error(msgs.msgUploadFileError),
                    !1;
                i.set({
                    status: "wait",
                    diskType: constants.fileType.onlineDisk,
                    receiverId: t,
                    hasAdd: !1
                });
                var o = collection.sendFileList.findWhere({
                    name: i.get("name"),
                    status: "wait",
                    receiverId: t
                });
                !o && collection.sendFileList.add(i)
            },
            fileQueueError: function(t, s, i, o) {
                log.error("File queue error", o, ", errorCode: ", i),
                e.trigger(EventType.fileQueueError),
                -110 === i && noty.error(msgs.msgFileSendFail)
            },
            fileDialogComplete: function() {
                model.messageEvent.trigger(EventType.upSendDialogComplete)
            },
            uploadStart: function(t, s) {
                if (model.currentUser.isOffline())
                    return noty.alert(msgs.msgChatFail),
                    !1;
                log.info("Upload start - ", s.name);
                var i = collection.sendFileList.get(s.id);
                i.set("status", "uploading"),
                e.swfupload.addPostParam("param", JSON.stringify({
                    token: cache.token,
                    fileName: i.get("name"),
                    fileType: "sendfile",
                    senderId: cache.userId,
                    senderName: model.currentUser.getDisplayName(),
                    receiverId: i.get("receiverId")
                }))
            },
            uploadProgress: function(e, t, s) {
                collection.sendFileList.get(t.id) && collection.sendFileList.get(t.id).set("uploadedSize", s)
            },
            uploadSuccess: function(e, t, i) {
                log.info(s, "Upload success: ", i);
                var o = JSON.parse(i);
                if (constants.isResError(o.statusCode))
                    switch (i) {
                    case ErrorType.errorSameFile:
                        return noty.error(msgs.msgFileConflict),
                        collection.sendFileList.get(t.id).set("status", "sameName"),
                        !1;
                    case ErrorType.errorNoSpace:
                        return noty.error(msgs.msgDiskSizeFull),
                        collection.sendFileList.get(t.id).set("status", "error"),
                        !1;
                    case ErrorType.error500:
                        return noty.error(msgs.msgServerError),
                        collection.sendFileList.get(t.id).set("status", "error"),
                        !1
                    }
                var n = collection.sendFileList.get(t.id);
                n.set({
                    status: "success",
                    fileId: o.fileId,
                    name: o.fileName,
                    folderId: o.parentId
                }),
                model.messageEvent.trigger(EventType.upSendFileComplete, n)
            },
            uploadComplete: function() {
                model.messageEvent.trigger(EventType.upSendNextFile)
            },
            uploadError: function(e, t, s, i) {
                if (log.info("errorCode:", s),
                log.info("message:", i),
                t) {
                    var o = collection.sendFileList.get(t.id);
                    o && -1 === _.indexOf(["pause", "cancel"], o.get("status")) && o.set("status", "error")
                }
            }
        };
        $.each(i, function(t, s) {
            e.$(".chat-file-upload").bind(t, s)
        }
        )
    }
    var s = "[SendUploadFileView]-";
    e.initialize = function(e, s, i) {
        e.$(".chat-file-upload").swfupload({
            upload_url: resturl.uploadSendFile,
            use_query_string: !1,
            file_post_name: "file",
            file_types: "*.*",
            file_types_description: "All Files",
            file_upload_limit: "0",
            flash_url: "/os/sea-modules/swf/swfupload/swfupload.swf",
            button_image_url: i && i.btnImg ? i.btnImg : "",
            button_width: i && i.btnWith ? i.btnWith : 28,
            button_height: i && i.btnHeight ? i.btnHeight : 28,
            button_placeholder: e.$(".btn-chat-upload")[0],
            button_text: i && i.btnText ? i.btnText : "",
            button_text_style: "",
            button_text_left_padding: 4,
            button_text_top_padding: 4,
            button_cursor: SWFUpload.CURSOR.HAND,
            debug: !1,
            custom_settings: {
                something: "here"
            },
            button_window_mode: "transparent"
        }),
        e.swfupload = e.$(".chat-file-upload").data("__swfu"),
        t(e, s)
    }
    ,
    e.addListeners = t
}
);
;define("app/website/file/views/FileLabelItem", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "span",
        className: "label",
        tpl: '<%= labelName %><a class="delMark del-mark">&nbsp;&times;</a>&nbsp;',
        events: {
            "click .delMark": "_onDelete"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(_.template(this.tpl, {
                labelName: this.model.get("labelName")
            })),
            this
        },
        _onDelete: function() {
            this.collection.remove(this.model)
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/models/LabelDTO", function(require, e, l) {
    l.exports = Backbone.Model.extend({
        idAttribute: "labelId",
        defaults: {
            labelName: void 0
        }
    })
}
);
;define("app/website/file/models/LabelList", function(require, e, l) {
    var t = require("app/website/file/models/LabelDTO");
    l.exports = Backbone.Collection.extend({
        model: t,
        getLabels: function(e) {
            var l = this;
            resturl.getLabels(function(t) {
                l.add(t.labels),
                e && e(t)
            }
            )
        },
        deleteLabel: function(e, l) {
            var t = this;
            resturl.deleteLabel({
                labelId: e.get("labelId"),
                labelName: e.get("labelName")
            }, function(n) {
                constants.isResponseOK(n) && (t.remove(e),
                l && l())
            }
            )
        },
        onlyCheck: function(e) {
            this.unCheckAll();
            var l = this.findWhere({
                labelId: e
            });
            return l.set("checked", !0),
            l
        },
        unCheckAll: function() {
            this.each(function(e) {
                e.set("checked", !1)
            }
            )
        }
    })
}
);
;define("app/website/file/views/EntFileItem", function(require, e, a) {
    var t = require("app/website/file/views/FileLabelItem")
      , l = require("app/website/file/models/LabelList")
      , s = require("app/commons/uikit/support/PdfNotSupportView");
    a.exports = Backbone.View.extend({
        tagName: "li",
        className: "entFileItem markable",
        chatDialogs: void 0,
        labelsBinder: void 0,
        events: {
            "click .checkbox-sprite": "multiSelectFile",
            "click ": "toggleSelectFile",
            "blur .cs-rename-file  input": "_onExitRename",
            "click .set-mark": "_onMarkSetting"
        },
        initialize: function() {
            this.labelList = new l;
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.labelCreator);
            this.labelsBinder = new Backbone.CollectionBinder(e),
            this._addListeners()
        },
        render: function() {
            var e = {
                searchMode: this.model.get("searchMode"),
                fileId: this.model.get("fileId"),
                downloadUrl: constants.getFileDownloadUrl(this.model),
                name: this.model.displayName(),
                icon: constants.typeConverter(this.model.get("type")),
                viewUrl: this.model.hasPreviewPermission() ? constants.getItemPreviewUrl(this.model) : "#sharedisk/not/read",
                updateTime: this.model.get("updateTime"),
                size: constants.sizeConverter(this.model.get("size")),
                isLock: this.model.isLock(),
                isRemind: this.model.hasRemind(),
                isLink: this.model.hasShareLink(),
                isConverting: this.model.isFileConverting(),
                path: constants.dealEntSpecialPath(this.model.get("path")) || "-",
                openFolderUrl: this.model.getOpenFolderUrl(),
                canRead: this.model.hasPermission("read")
            };
            this.$el.html(__html(Handlebars.template(function(e, a, t, l, s) {
                function i() {
                    return "show-path"
                }
                function n() {
                    return " hide "
                }
                function o() {
                    return "hide-important"
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                s = s || {};
                var c, h, d = "", r = this, m = "function", f = this.escapeExpression;
                return d += "<ul class='each-file-item ",
                c = t["if"].call(a, a && a.searchMode, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(1, i, s),
                    data: s
                }),
                (c || 0 === c) && (d += c),
                d += '\'><li class="file-check"><span class=\'checkbox-sprite\'><input type="checkbox" style=\'visibility:hidden\' checked=false></span></li><li class="pipe"></li><li class="file-name"><div class="inline-block icon"><a href="',
                (h = t.viewUrl) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.viewUrl,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="file-name" name="file-name" title="',
                (h = t.name) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.name,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + "\"><i name='file-icon' class=\"file-icon-medium ",
                (h = t.icon) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.icon,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '"></i></a></div><div class="inline-block info"><div style="line-height: 20px;" class="name"><a href="',
                (h = t.viewUrl) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.viewUrl,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="file-name" name="file-name" title="',
                (h = t.name) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.name,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '">',
                (h = t.name) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.name,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '</a><div class="cs-rename-file hide-force"><input type="text" value="',
                (h = t.name) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.name,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" style="margin-bottom: 1px" maxlength="60"/></span></div></div><div style="line-height: 20px;" class="marks"><a class="set-mark" href="#file/mark/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '"><i class="icon-custom-mark"></i></a><div class="label-list inline-block"></div></div></div></li><li class="pipe"></li><li class="file-status"><a class="btn btn-link file-icon-comment" href="#file/comment/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '"><i class="icon-custom-comment"></i></a><a class="btn btn-link file-icon-delshare ',
                c = t.unless.call(a, a && a.isLink, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(3, n, s),
                    data: s
                }),
                (c || 0 === c) && (d += c),
                d += '"href="#sharedisk/share/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" title="<%= msg262 %>"><i class="icon-custom-share"></i></a><a class="btn btn-link file-icon-delattention ',
                c = t.unless.call(a, a && a.isRemind, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(3, n, s),
                    data: s
                }),
                (c || 0 === c) && (d += c),
                d += '"href="#sharedisk/delattention/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" title="<%= msg604 %>"><i class="icon-custom-attention"></i></a><a class="btn btn-link file-icon-convert ',
                c = t.unless.call(a, a && a.isConverting, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(3, n, s),
                    data: s
                }),
                (c || 0 === c) && (d += c),
                d += '" href="###"title="<%=msg598%>"><i class="fa fa-spinner fa-spin" name="icon-spin"></i></a><a class="btn btn-link file-icon-unlock ',
                c = t.unless.call(a, a && a.isLock, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(3, n, s),
                    data: s
                }),
                (c || 0 === c) && (d += c),
                d += '" href="#sharedisk/unlock/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '"><i class="icon-custom-lock"></i></a></li><li class="pipe"></li><li class="file-size"><span name="size">',
                (h = t.size) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.size,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '</span></li><li class="pipe"></li><li class="file-time"><span name="updateTime" class=\'update\'>',
                (h = t.updateTime) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.updateTime,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '</span></li><li class="pipe"></li><li class="file-path ',
                c = t.unless.call(a, a && a.searchMode, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(5, o, s),
                    data: s
                }),
                (c || 0 === c) && (d += c),
                d += '"><a href="#',
                (h = t.openFolderUrl) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.openFolderUrl,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" title="<%=msg562%>">',
                (h = t.path) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.path,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '</a></li></ul><div id="context-menu-',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="file-context-menu"><ul class="dropdown-menu" role="menu"><li class="download-btn"><a href="',
                (h = t.downloadUrl) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.downloadUrl,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-download"></i>&nbsp;<%=msg259 %></a></li><li class="share-btn"><a href="#file/share/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-share"></i>&nbsp;<%=msg262%></a></li><li class="attention-btn"><a href="#sharedisk/attention/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-attention"></i>&nbsp;<%=msg603%></a></li><li class="del-attention-btn"><a href="#sharedisk/delattention/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-attention-alt"></i>&nbsp;<%=msg604%></a></li><hr/><li class="lock-btn"><a href="#sharedisk/lock/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-lock"></i>&nbsp;<%=msg337%></a></li><li class="unlock-btn"><a href="#sharedisk/unlock/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-lock-alt"></i>&nbsp;<%=msg338%></a></li><li class="edit-btn"><a href="#file/edit/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" target="',
                (h = t.editTarget) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.editTarget,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-edit"></i>&nbsp;<%=msg264%></a></li><li class="move-btn"><a href="#sharedisk/move/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-move"></i>&nbsp;<%=msg265%></a></li><li class="copy-btn"><a href="#sharedisk/copy/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-copy"></i>&nbsp;<%=msg614%></a></li><li class="label-btn"><a href="#file/mark/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-label"></i>&nbsp;<%=msgLabel %></a></li><!--<li class="collect-btn" style="display:none ! important;"><a href="#sharedisk/collect/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="fa fa-star"></i>&nbsp;<%= msg609 %></a></li>--><li class="rename-btn"><a href="#file/rename/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-rename"></i>&nbsp;<%=msg266%></a></li><li class="delete-btn"><a href="#sharedisk/delete/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-recycle"></i>&nbsp;<%=msg156%></a></li><li class="view-btn"><a href="#sharedisk/view/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-move"></i>&nbsp;<%=msg617%></a></li><li class="property-btn"><a href="#file/property/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-property"></i>&nbsp;<%=msgProperty%></a></li><hr/><li class="permission-btn"><a href="#sharedisk/permission/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-permission-orange"></i>&nbsp;<%=msgSetPermission%></a></li><li class="sync-btn"><a href="#sharedisk/sync/',
                (h = t.fileId) ? c = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-sync-orange"></i>&nbsp;<%=msgSyncSetting%></a></li></ul></div>'
            }
            ), e)),
            this._ctrlView(),
            this._onChecked();
            var a = this.model.getOperations();
            return webhelper.without(a, ["upload", "create"]),
            0 !== a.length && this._bindContextmenu(),
            this._onChangeLabels(),
            this.labelsBinder.bind(this.labelList, this.$(".label-list")),
            this
        },
        labelCreator: function(e, a) {
            return new t({
                model: e,
                collection: a
            })
        },
        _addListeners: function() {
            this.listenTo(this.model, EventType.rename, this._onChangeEditAttr),
            this.listenTo(this.model, "change", this._onChange),
            this.listenTo(this.labelList, "remove", this._onDeleteLabel),
            this.listenTo(model.messageEvent, EventType.deleteFileLabInLib, this._onLibLableDelete),
            this.listenTo(this.model, "change:labels", this._onChangeLabels)
        },
        _onChangeLabels: function() {
            this.labelList.reset(this.model.get("labels"))
        },
        _onDeleteLabel: function() {
            this.model.set("labels", this.labelList.toJSON()),
            this.model.updateFileLabel(function(e) {
                if (!constants.isResponseOK(e))
                    switch (e) {
                    case ErrorType.errorNoPermission:
                        noty.alert(msgs.msgNoPermission);
                        break;
                    default:
                        noty.error(msgs.msgServerError)
                    }
            }
            )
        },
        _onLibLableDelete: function(e) {
            var a = this.labelList.findWhere({
                labelName: e.get("labelName")
            });
            a && this.labelList.remove(a),
            this.model.set(this.labelList.toJSON())
        },
        _onChangeEditAttr: function() {
            var e = this
              , a = this.$(".cs-rename-file input");
            this._oldName = this.model.get("name"),
            a.val(this.model.get("name")),
            this.$(".cs-rename-file").removeClass("hide-force"),
            this.$(".cs-rename-file").siblings("a.file-name").addClass("hide-force"),
            this.$("li.file-name .marks").addClass("hide-force"),
            this.$el.addClass("on-edit"),
            a.focus(),
            a.bind("keydown", "return", function() {
                e._oldName === $.trim(a.val()) ? e._onCancelRename() : e._onConfirmRename()
            }
            ).bind("keydown", "esc", function() {}
            )
        },
        _onConfirmRename: function() {
            this._oldName = null ;
            var e = this.$(".cs-rename-file  input");
            return e.attr("disabled", "disabled"),
            router.fileRouter.renameFile(this.model, $.trim(e.val())),
            e.removeAttr("disabled"),
            this._onCancelRename(),
            !1
        },
        _onCancelRename: function() {
            this._oldName = null ;
            var e = this.$(".cs-rename-file  input");
            return e.unbind("blur"),
            this.$(".cs-rename-file").addClass("hide-force"),
            this.$(".cs-rename-file").siblings("a.file-name").removeClass("hide-force"),
            this.$("li.file-name .marks").removeClass("hide-force"),
            this.$el.removeClass("on-edit"),
            !1
        },
        _onExitRename: function() {
            var e = $.trim(this.$(".cs-rename-file  input").val());
            return this._oldName ? (e !== this._oldName ? this._onConfirmRename() : this._onCancelRename(),
            !1) : !1
        },
        _onChange: function(e) {
            void 0 !== e.changed.checked ? this._onChecked() : void 0 !== e.changed.labels || (log.debug("EntFileItem: onChange: render()"),
            this.render())
        },
        _ctrlView: function() {
            var e = this
              , a = e.$("a[name=file-name],a[name=file-icon]");
            if (!this.model.isFolder()) {
                if (this.model.get("lockByUserId") && this.setLockTips(),
                !this.model.hasPreviewPermission())
                    return void a.removeAttr("target").css({
                        cursor: "default",
                        "text-decoration": "none"
                    });
                if (!constants.isTxtType(this.model.get("type"))) {
                    var t = this.model.getViewType();
                    switch (t) {
                    case "pic":
                    case "aud":
                    case "vid":
                    case "html":
                        a.unbind("click").attr("target", "_blank");
                        break;
                    case "excel":
                        this.model.isConvertDone() ? a.unbind("click").attr("target", "_blank") : a.click(function() {
                            router.shareDiskRouter.doShowFile(e.model)
                        }
                        );
                        break;
                    case "pdf":
                        webhelper.isIE8() ? (a.unbind("click").attr("href", "#"),
                        a.click(function() {
                            return e.showPdfNotSupport(),
                            !1
                        }
                        ),
                        log.debug("bind pdfNotSupport to IE8")) : constants.isPdfType(this.model.get("type")) || this.model.isConvertDone() ? a.unbind("click").attr("target", "_blank") : a.click(function() {
                            router.shareDiskRouter.doShowFile(e.model)
                        }
                        );
                        break;
                    case "unknow":
                    default:
                        a.unbind("click").css({
                            cursor: "default",
                            "text-decoration": "none"
                        })
                    }
                }
            }
        },
        showPdfNotSupport: function() {
            log.debug("showPdfNotSupport"),
            new s({
                pdfUrl: this.model.getPdfUrl(),
                fileName: this.model.getPdfName()
            })
        },
        _onChecked: function() {
            this.$(".checkbox-sprite, .each-file-item").toggleClass("true", this.model.get("checked"))
        },
        ctrlBtnHide: function() {
            var e;
            this._hideAllBtns();
            var a = this.model.getOperations();
            _.each(a, function(a) {
                e = constants.OperateBtnMap[a],
                e && this.$("ul.dropdown-menu > li." + e).removeClass("hide-important")
            }
            , this)
        },
        _bindContextmenu: function() {
            var e = this;
            this.$("ul.each-file-item").contextmenu({
                target: "#context-menu-" + this.model.get("fileId"),
                before: function() {
                    return model.messageEvent.trigger(EventType.clearContextmenus),
                    e.ctrlBtnHide(),
                    e.collection.toggleSelectFile(e.model, !0),
                    !0
                }
            })
        },
        _hideAllBtns: function() {
            this.$("ul.dropdown-menu > li").addClass("hide-important")
        },
        setLockTips: function() {
            var e, a = this;
            if (this.model.get("lockByUserId") == cache.userId)
                e = '<div class="lock-popover"><div>' + msgs.msgFileIsLockedByYou + "</div>";
            else {
                var t = collection.userList.get(this.model.get("lockByUserId"))
                  , l = t ? t.getDisplayName() : msgs.msgOtherUser;
                e = '<div class="lock-popover"><div>' + msgs.msgFileIsLock + "!</div><div>" + msgs.msgPlsContact + '<a href="#chat/' + this.model.get("lockByUserId") + '"><span style="display:inline-block;max-width:200px; overflow: hidden;white-space: nowrap; word-wrap: normal; text-overflow: ellipsis;vertical-align:middle">' + l + "</span></a> " + msgs.msgContactAdminUnlock + "</div></div>"
            }
            this.$("a.file-icon-unlock").popover({
                trigger: "manual",
                placement: "bottom",
                html: !0,
                content: e
            }).mouseenter(function() {
                $(this).popover("show")
            }
            ),
            this.$("li.file-status").mouseleave(function() {
                a.$("a.file-icon-unlock").popover("hide")
            }
            ),
            this.$("li.file-status .popover").mouseleave(function() {
                a.$("a.file-icon-unlock").popover("hide")
            }
            )
        },
        multiSelectFile: function(e) {
            this.model.set("checked", !this.model.get("checked")),
            model.messageEvent.trigger(EventType.clearContextmenus),
            e.stopPropagation()
        },
        toggleSelectFile: function(e) {
            var a = $(e.target);
            return a.is("input") || a.hasClass("custom-btn") ? !0 : void this.collection.toggleSelectFile(this.model)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/FileThumbItem", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "li",
        className: "file-thumb-item default",
        events: {
            "click .checkbox-sprite": "multiSelectFile",
            "click ": "toggleSelectFile",
            "blur .cs-rename-file  input": "_onExitRename"
        },
        initialize: function() {
            this._addListeners()
        },
        render: function() {
            var e = this
              , t = {
                searchMode: this.model.get("searchMode"),
                fileId: this.model.get("fileId"),
                downloadUrl: constants.getFileDownloadUrl(this.model),
                name: this.model.displayName(),
                icon: constants.typeConverter(this.model.get("type")),
                viewUrl: this.model.hasPreviewPermission() ? this.model.getPreviewUrl() : "#sharedisk/not/read",
                updateTime: this.model.get("updateTime"),
                size: constants.sizeConverter(this.model.get("size")),
                path: this.model.get("path") || "-",
                openFolderUrl: this.model.getOpenFolderUrl()
            };
            return this.$el.html(__html(Handlebars.template(function(e, t, a, l, s) {
                this.compilerInfo = [4, ">= 1.0.0"],
                a = this.merge(a, e.helpers),
                s = s || {};
                var i, n, o = "", c = "function", d = this.escapeExpression;
                return o += '<ul class="file-thumb-wrap" title="',
                (n = a.name) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.name,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '"><li class="file-check"><span class=\'checkbox-sprite\'></span></li><li class="file-type"><a name=\'file-icon\' class="file-icon-large ',
                (n = a.icon) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.icon,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" href="',
                (n = a.viewUrl) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.viewUrl,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '"></a></li><li class="file-name"><a href="',
                (n = a.viewUrl) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.viewUrl,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="file-name" target="" name="file-name" title="',
                (n = a.name) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.name,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '">',
                (n = a.name) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.name,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '</a><div class="cs-rename-file hide-force"><input type="text" value="',
                (n = a.name) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.name,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" style="margin-bottom: 1px"/></div></li></ul><div name="context-menu-',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="file-context-menu show-ent-disk"><ul class="dropdown-menu" role="menu"><li class="download-btn"><a href="',
                (n = a.downloadUrl) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.downloadUrl,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-download"></i> <%=msg259%></a></li><li class="share-btn"><a href="#file/share/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-share"></i> <%=msg262%></a></li><li class="attention-btn"><a href="#sharedisk/attention/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-attention"></i> <%=msg603%></a></li><li class="del-attention-btn"><a href="#sharedisk/delattention/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-attention-alt"></i> <%=msg604%></a></li><hr/><li class="lock-btn"><a href="#sharedisk/lock/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-lock"></i> <%=msg337%></a></li><li class="unlock-btn"><a href="#sharedisk/unlock/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-lock-alt"></i> <%=msg338%></a></li><li class="edit-btn"><a href="#/file/edit/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" target="',
                (n = a.editTarget) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.editTarget,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-edit"></i> <%=msg264%></a></li><li class="move-btn"><a href="#sharedisk/move/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-move"></i> <%=msg265%></a></li><li class="copyto-btn"><a href="#onlinedisk/copyto/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-copy"></i> <%=msg613%></a></li><li class="copy-btn"><a href="#sharedisk/copy/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-copy"></i> <%=msg614%></a></li><li class="rename-btn"><a href="#file/rename/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-rename"></i> <%=msg266 %></a></li><li class="delete-btn"><a href="#sharedisk/delete/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-recycle"></i> <%=msg156%></a></li><li class="view-btn"><a href="#sharedisk/view/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-move"></i> <%=msg617%></a></li><li class="property-btn"><a href="#file/property/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-property"></i> <%=msgProperty%></a></li><hr/><li class="permission-btn"><a href="#sharedisk/permission/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-filepermission"></i> <%=msgSetPermission%></a></li><li class="sync-btn"><a href="#sharedisk/sync/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-btn-sync"></i> <%=msgSyncSetting%></a></li></ul></div><div name="context-menu-',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="file-context-menu show-person-disk"><ul class="dropdown-menu" role="menu"><li class="download-btn"><a href="',
                (n = a.downloadUrl) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.downloadUrl,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-download"></i> <%=msg259%></a></li><li class="edit-btn"><a href="#/file/edit/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" target="',
                (n = a.editTarget) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.editTarget,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-edit"></i> <%=msg264%></a></li><li class="share-btn"><a href="#file/share/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-share"></i> <%=msg262%></a></li><li class="move-btn"><a href="#onlinedisk/move/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-move"></i> <%=msg265%></a></li><li class="copyto-btn"><a href="#onlinedisk/copyto/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-copy"></i> <%=msg613%></a></li><li class="rename-btn"><a href="#file/rename/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-rename"></i> <%=msg266%></a></li><li class="delete-btn"><a href="#onlinedisk/delete/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-recycle"></i> <%=msg156%></a></li><li class="property-btn"><a href="#file/property/',
                (n = a.fileId) ? i = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                i = typeof n === c ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += d(i) + '" class="btn btn-link custom-btn"><i class="icon-custom-property"></i> <%=msgProperty%></a></li></ul></div>'
            }
            ), t)),
            this.model.get("thumb") ? setTimeout(function() {
                e.$(".file-icon-large").css({
                    "background-image": 'url("' + e.model.get("thumb") + '")'
                }).removeClass("file-img").addClass("image-center")
            }
            , 100) : constants.isImgType(this.model.get("type")) && this.model.get("type") && this.$(".file-icon-large").addClass("file-img-default"),
            this.model.isEntDisk() ? this.$(".show-person-disk").remove() : this.$(".show-ent-disk").remove(),
            this._ctrlView(),
            this._onChecked(),
            this._bindContextmenu(),
            this
        },
        _addListeners: function() {
            this.listenTo(this.model, "change", this._onChange),
            this.listenTo(this.model, EventType.rename, this._onChangeEditAttr)
        },
        _onChange: function(e) {
            void 0 !== e.changed.checked ? this._onChecked() : this.render()
        },
        _onChangeEditAttr: function() {
            var e = this
              , t = this.$(".cs-rename-file input");
            t.val(this.model.get("name")),
            this._oldName = this.model.get("name"),
            this.$("a.file-name").addClass("hide-force"),
            this.$(".cs-rename-file").removeClass("hide-force"),
            this.$el.addClass("on-edit"),
            t.focus(),
            t.bind("keydown", "return", function() {
                e._oldName !== $.trim(t.val()) ? e._onConfirmRename() : e._onCancelRename()
            }
            ).bind("keydown", "esc", function() {
                e._onCancelRename()
            }
            )
        },
        _onConfirmRename: function() {
            this._oldName = null ;
            var e = this.$(".cs-rename-file  input");
            e.attr("disabled", "disabled");
            var t = router.fileRouter.renameFile(this.model, $.trim(e.val()));
            return e.removeAttr("disabled"),
            t && this._onCancelRename(),
            !1
        },
        _onCancelRename: function() {
            return this._oldName = null ,
            this.$("a.file-name").removeClass("hide-force"),
            this.$(".cs-rename-file").addClass("hide-force"),
            this.$el.removeClass("on-edit"),
            !1
        },
        _onExitRename: function() {
            var e = $.trim(this.$(".cs-rename-file  input").val());
            return this._oldName ? (e !== this._oldName ? this._onConfirmRename() : this._onCancelRename(),
            !1) : !1
        },
        _ctrlView: function() {
            var e = this
              , t = e.$("a[name=file-name],a[name=file-icon]");
            if (!this.model.isFolder())
                return webhelper.isIPad() && constants.isFileConvertSupport(this.model.get("type")) && !this.model.get("ipadView") ? void t.click(function() {
                    router.shareDiskRouter.onIpadViewPdf(e.model)
                }
                ) : this.model.hasPreviewPermission() ? this.model.canDirectOpenFile() || this.model.isConvertDone() ? void t.unbind("click").attr("target", "_blank") : this.model.isConvertSupport() ? void t.click(function() {
                    router.shareDiskRouter.doShowFile(e.model)
                }
                ) : void t.unbind("click").css({
                    cursor: "default",
                    "text-decoration": "none"
                }) : void t.removeAttr("target").css({
                    cursor: "default",
                    "text-decoration": "none"
                })
        },
        _onChecked: function() {
            this.$(".checkbox-sprite").toggleClass("true", this.model.get("checked")),
            this.$el.toggleClass("selected", this.model.get("checked"))
        },
        ctrlBtnHide: function() {
            var e;
            this._hideAllBtns();
            var t = this.model.getOperations();
            _.each(t, function(t) {
                e = constants.OperateBtnMap[t],
                this.$("ul.dropdown-menu > li." + e).removeClass("hide-important")
            }
            , this),
            0 === t.length && this.$(".file-context-menu").addClass("hide-important")
        },
        _bindContextmenu: function() {
            var e = this;
            this.$("ul.file-thumb-wrap").contextmenu({
                target: "[name=context-menu-" + this.model.get("fileId") + "]",
                before: function() {
                    return model.messageEvent.trigger(EventType.clearContextmenus),
                    e.collection.toggleSelectFile(e.model, !0),
                    e.ctrlBtnHide(),
                    !0
                }
            })
        },
        _hideAllBtns: function() {
            this.$("ul.dropdown-menu > li").addClass("hide-important")
        },
        multiSelectFile: function(e) {
            this.model.set("checked", !this.model.get("checked")),
            model.messageEvent.trigger(EventType.clearContextmenus),
            e.stopPropagation()
        },
        toggleSelectFile: function(e) {
            if ("new" === this.model.get("fileId") && this.model.isFolder())
                return !0;
            var t = $(e.target);
            return t.is("input") ? !0 : void this.collection.toggleSelectFile(this.model)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/DiskFileSearchView", function(require, e, s) {
    var i = require("app/commons/uikit/support/SearchBox");
    s.exports = Backbone.View.extend({
        $searchMode: void 0,
        $searchGroupSelect: void 0,
        $searchGobackBtn: void 0,
        searchMode: "all",
        fileList: void 0,
        events: {
            "click .form-search-custom .btn-group": "_showIcon",
            "click .form-search-custom .dropdown-menu>li": "_switchSearchMode",
            "click .form-search-custom .search-goback-btn": "_searchGoBack",
            "click .form-search-custom .full-text-search": "_searchAll"
        },
        initialize: function() {
            this.fileList = this.options.fileList,
            this.render()
        },
        render: function() {
            this.$el.append(__html(Handlebars.template(function(e, s, i, r, t) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                t = t || {},
                '<div class="form-search-custom pull-right fileSelectSearch"><div class="searchBox input-prepend input-append search-box file-search"></div><a class="high-search highSearch">&nbsp;<%=msg811%></a></div>'
            }
            ))),
            this.$searchGroupSelect = this.$(".form-search-custom .search-group-select"),
            this.$searchGobackBtn = this.$(".form-search-custom .search-goback-btn"),
            this.searchBox = new i({
                settingObj: {
                    title: msgs.msgSearchFileAndMark
                }
            }),
            this.searchBox.on(EventType.onSearch, this._fileQuery, this),
            this.$(".searchBox").append(this.searchBox.el)
        },
        _showIcon: function() {
            "all" == this.searchMode ? (this.$(".form-search-custom .dropdown-menu>li").removeClass("hover").last().addClass("hover"),
            this.$("#searchModeShort").html(msgs.msgAll)) : (this.$(".form-search-custom .dropdown-menu>li").removeClass("hover").first().addClass("hover"),
            this.$("#searchModeShort").html(msgs.msgCurrent))
        },
        _fileQuery: function(e) {
            e = $.trim(e),
            e && (this.collection.uncheckAll(),
            this._queryAllFolder(e))
        },
        _queryAllFolder: function(e) {
            var s = this;
            this.collection.searchFile({
                searchKey: e,
                fileType: this.collection.fileType
            }, function(e) {
                s.trigger(EventType.onSearch, e)
            }
            )
        },
        searchViewBack: function() {
            this.searchBox.$(".keyword").val(""),
            this.trigger(EventType.onSearch, !1),
            this.$searchGroupSelect.removeClass("hide"),
            this.$searchGobackBtn.addClass("hide")
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/FileBreadView", function(require, e, r) {
    var o = require("app/commons/models/file/BreadModels")
      , t = require("app/commons/uikit/file/FileBreadItem");
    r.exports = Backbone.View.extend({
        breadList: void 0,
        _breadBinder: void 0,
        folderRecord: void 0,
        folderIndex: void 0,
        $breadcrumb: void 0,
        $breadcrumbBack: void 0,
        $breadcrumbForward: void 0,
        events: {
            "click #breadcrumbBack": "goToBack",
            "click #breadcrumbForward": "goToForward",
            "click .refresh-btn": "_onRefresh"
        },
        initialize: function() {
            this.currentFolder = this.options.currentFolder,
            this.breadList = new o.FileBreadList,
            this.folderRecord = [];
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.breadCreator);
            this._breadBinder = new Backbone.CollectionBinder(e),
            this.addListeners(),
            this.render()
        },
        render: function() {
            this.$el.append(__html(Handlebars.template(function(e, r, o, t, d) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                o = this.merge(o, e.helpers),
                d = d || {},
                '<div class="breadcrumb-div"><div class="breadcrumb-move"><span id=\'breadcrumbBack\' class="breadcrumb-back-disable" title="<%=msg630%>"></span><span id=\'breadcrumbForward\' class="breadcrumb-forward-disable" title="<%=msg631%>"></span></div><div class="breadcrumb-route inline-block"><ul class="breadcrumb text-overflow"><li class="search-result hide-force"><%= msgAllFind %><strong>" <span class="count"></span> "</strong><%=msgRelateResults %></li></ul><span class="pipe" style="color:#cacaca;">|</span><a class="refresh-btn"><i class="icon-custom-refresh"></i></a></div></div>'
            }
            ))),
            this.$breadcrumb = this.$("ul.breadcrumb"),
            this.$searchMode = this.$(".form-search-custom .dropdown-menu>li.hover"),
            this.$breadcrumbBack = this.$(".breadcrumb-div #breadcrumbBack"),
            this.$breadcrumbForward = this.$(".breadcrumb-div #breadcrumbForward"),
            this._breadBinder.bind(this.breadList, this.$breadcrumb),
            this._onResize()
        },
        addListeners: function() {
            this.listenTo(model.setting, "change:width change:height", this._onResize),
            this.listenTo(model.messageEvent, EventType.changeSlide, this._onResize)
        },
        _onResize: function() {
            this.$(".breadcrumb").width($("#content-right").width() - 20 - 5 - 130 - 280)
        },
        breadCreator: function(e) {
            return new t({
                model: e
            })
        },
        goToBack: function() {
            this.folderRecord.length && 1 !== this.folderRecord.length && 0 !== this.folderIndex && (void 0 == this.folderIndex ? this.folderIndex = this.folderRecord.length - 2 : this.folderIndex--,
            this._toggleForwardBtn(!0),
            0 === this.folderIndex && this._toggleBackBtn(!1),
            this.collection.isEntDisk() ? router.shareDiskRouter.onForwardEntFolder(this.folderRecord[this.folderIndex]) : router.onlineDiskRouter.onForwardPersonFolder(this.folderRecord[this.folderIndex]))
        },
        goToForward: function() {
            this.folderRecord.length && 1 !== this.folderRecord.length && void 0 != this.folderIndex && this.folderIndex != this.folderRecord.length - 1 && (this.folderIndex++,
            this._toggleBackBtn(!0),
            this.folderIndex == this.folderRecord.length - 1 && this._toggleForwardBtn(!1),
            this.collection.isEntDisk() ? router.shareDiskRouter.onForwardEntFolder(this.folderRecord[this.folderIndex]) : router.onlineDiskRouter.onForwardPersonFolder(this.folderRecord[this.folderIndex]))
        },
        _toggleForwardBtn: function(e) {
            this.$breadcrumbForward.toggleClass("breadcrumb-forward", e).toggleClass("breadcrumb-forward-disable", !e)
        },
        _toggleBackBtn: function(e) {
            this.$breadcrumbBack.toggleClass("breadcrumb-back", e).toggleClass("breadcrumb-back-disable", !e)
        },
        changeBread: function(e) {
            var r = _.map(e, function(e) {
                return new o.FileBreadDTO({
                    name: e.displayName(),
                    route: "#" + e.get("fileType") + "/openfolder/" + e.id
                })
            }
            );
            this.breadList.reset(r)
        },
        setFolderRecord: function(e) {
            return this.folderRecord.length > 0 && this._toggleBackBtn(!0),
            void 0 == this.folderIndex ? void this.folderRecord.push(e) : (this.folderRecord[this.folderIndex + 1] = e,
            this.folderRecord.length = this.folderIndex + 2,
            this.folderIndex = void 0,
            void this._toggleForwardBtn(!1))
        },
        _onRefresh: function() {
            var e = this;
            return this.currentFolder.isEntDisk() ? router.shareDiskRouter.onForwardEntFolder(this.currentFolder.id) : router.onlineDiskRouter.onForwardPersonFolder(this.currentFolder.id),
            e.trigger(EventType.onSearch, !1),
            !1
        },
        close: function() {
            this._breadBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/CreateFolderView", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "createFolder",
        className: "modal fade show-important modal-window create-folder-window",
        $checkbox: void 0,
        fileInfo: void 0,
        currentFolder: void 0,
        events: {
            "click .confirm": "_onConfirm",
            "click .chkbox-area": "_onCheckSize",
            "click .cancel": "close",
            "click .close": "close"
        },
        initialize: function() {
            this.currentFolder = this.options.currentFolder,
            this.render()
        },
        render: function() {
            var e = this
              , t = this.currentFolder
              , i = !1;
            return t && t.isEntDisk() && t.get("permissionDTO") && (i = t.id == constants.rootFolderId.entDisk ? model.currentUser.isAdmin() : t.get("permissionDTO").manage),
            this.$el.html(__html(Handlebars.template(function(e, t, i, s, a) {
                function n(e, t) {
                    var s, a, n = "";
                    return n += '<div class="space"><div class="inline-block chkbox-area" style="cursor: pointer;"><span class=\'checkbox-sprite\'></span><span class="check-txt"><%=msgSettingFolderSize%></span></div><div class="inline-block"><input type=\'text\' class="input-space space-setting visib-hide" name="space" placeholder="<%=msgNoLimit%>"/><div class="inline-block light space-setting visib-hide"><em>GB</em>(<%=msgAvailSize%>:<span name="availSize" class="space-setting visib-hide light"><strong> ',
                    (a = i.availSize) ? s = a.call(e, {
                        hash: {},
                        data: t
                    }) : (a = e && e.availSize,
                    s = typeof a === c ? a.call(e, {
                        hash: {},
                        data: t
                    }) : a),
                    n += d(s) + ' </strong></span>)</div></div><a class="btn btn-blue expand-btn space-setting visib-hide right" href="#" target="_blank"><%=msgExpandSpace%></a><div style="clear:both"></div></div>'
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                a = a || {};
                var l, o, r = "", c = "function", d = this.escapeExpression, h = this;
                return r += '<div class="file-upload-modal"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 id="myModalLabel">',
                (o = i.title) ? l = o.call(t, {
                    hash: {},
                    data: a
                }) : (o = t && t.title,
                l = typeof o === c ? o.call(t, {
                    hash: {},
                    data: a
                }) : o),
                r += d(l) + '</h3></div><div class="modal-body old-modal"><div class="input-name"><input type="text" placeholder="<%=msg586%>" class="create-folder" value="',
                (o = i.name) ? l = o.call(t, {
                    hash: {},
                    data: a
                }) : (o = t && t.name,
                l = typeof o === c ? o.call(t, {
                    hash: {},
                    data: a
                }) : o),
                r += d(l) + '" id="folderName"></div>',
                l = i["if"].call(t, t && t.canSetSpace, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(1, n, a),
                    data: a
                }),
                (l || 0 === l) && (r += l),
                r += '</div><div class="modal-footer"><span class="btn btn-blue confirm"><%=msg86%></span><span data-dismiss="modal" class="btn btn-white-blue cancel"><%=msg87%></span></div></div>'
            }
            ), _.extend(this.model.toJSON(), {
                availSize: "-",
                canSetSpace: i
            }))),
            this.getAllocatableDiskSizeAsync(),
            this.$checkbox = this.$(".checkbox-sprite"),
            this.$(".create-folder").bind("keydown", "return", function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e._onConfirm()
            }
            ),
            seajs.isPrivate ? this.$(".expand-btn").remove() : this.$(".expand-btn").attr("href", constants.getBuyUrl()),
            this.$el.modal({
                keyboard: !0,
                backdrop: "static"
            }),
            this
        },
        _setMaxSizeText: function(e) {
            this.$(".space-setting strong").text(constants.sizeConverter(e))
        },
        getAllocatableDiskSizeAsync: function() {
            var e = this;
            return this.currentFolder && this.currentFolder.isEntDisk() ? void (this.currentFolder && !this.currentFolder.isRootFolder() ? this.currentFolder.getAllocatableDiskSizeAsync(function(t) {
                e._setMaxSizeText(t)
            }
            ) : model.currentEnterprise.getAllocatableDiskSize(function(t) {
                e._setMaxSizeText(t)
            }
            )) : !1
        },
        _onConfirm: function() {
            var e = $.trim(this.$("#folderName").val());
            if (!e)
                return noty.alert(msgs.msg586),
                !1;
            if (constants.pattern.fileName.test(e))
                return noty.alert(msgs.msgNameFileError),
                !1;
            if (e.length > 100)
                return void noty.alert(msgs.msgFileLengthError);
            this.model.set("name", e);
            var t = $.trim(this.$(".input-space").val());
            return t && !t.match(constants.pattern.integer) ? void noty.alert(msgs.msgSpaceFomat) : (this.model.set("maxSize", 1024 * t * 1024 * 1024),
            void this.trigger(EventType.submit, this.model))
        },
        _onCheckSize: function() {
            this.$checkbox.toggleClass("true");
            var e = this.$checkbox.hasClass("true");
            this.$(".space-setting").toggleClass("visib-hide", !e),
            this.$(".input-space").val("")
        },
        close: function() {
            this.$el.modal("hide"),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/models/EditFileNameParam", function(require, e, t) {
    t.exports = Backbone.Model.extend({
        defaults: {
            name: "",
            prefix: void 0,
            suffix: void 0,
            operate: "createFolder",
            parentId: void 0,
            fileId: void 0,
            title: ""
        },
        initialize: function() {
            switch (this.get("name") && _.include(this.get("name"), ".") && (this.set("prefix", _.strLeftBack(this.get("name"), ".")),
            this.set("suffix", _.strRightBack(this.get("name"), "."))),
            this.get("operate")) {
            case "createFolder":
                this.set("title", msgs.msg585);
                break;
            case "renameFile":
                this.set("title", msgs.renameFile);
                break;
            case "renameFolder":
                this.set("title", msgs.renameFolder)
            }
            this.on("change:prefix", this._onChangeName, this)
        },
        _onChangeName: function() {
            this.set("name", this.get("prefix") + this.get("suffix") ? "." + this.get("suffix") : "")
        },
        _asCreateFolderParam: function() {
            return {
                name: this.get("name"),
                parentId: this.get("parentId"),
                maxSize: this.get("maxSize"),
                type: "folder"
            }
        }
    })
}
);
;define("app/website/file/models/NewFileDTO", function(require, e, t) {
    t.exports = Backbone.Model.extend({
        idAttribute: "fileId",
        defaults: {
            fileId: void 0,
            name: void 0,
            folderId: void 0,
            version: void 0,
            prefix: msgs.msgCreateTxt,
            suffix: ".txt",
            content: "",
            lockByUserId: void 0,
            writable: !0
        },
        createFrom: function(e) {
            return this.set({
                fileId: e.id,
                folderId: e.get("parentId"),
                name: e.get("name"),
                prefix: constants.getFilePrefix(e.get("name")),
                suffix: "." + constants.getFileSuffix(e.get("name")),
                version: e.get("version"),
                toType: e.get("diskType"),
                lockByUserId: e.get("lockByUserId"),
                writable: e.isEntDisk() ? e.hasPermission("write") : !0
            }),
            this
        },
        canWrite: function() {
            return !(this.get("lockByUserId") && this.get("lockByUserId") !== cache.userId || !this.get("writable"))
        },
        saveOrUpdateFile: function(e) {
            var t = this.pick("fileId", "folderId", "content", "version", "toType");
            t.name = this.get("prefix") + this.get("suffix"),
            resturl.saveFile(t, e)
        },
        getName: function() {
            return this.get("prefix") + this.get("suffix")
        },
        viewAsTxt: function(e) {
            resturl.viewAsTxt({
                fileId: this.get("fileId"),
                linkId: cache.linkId ? cache.linkId : void 0,
                fileType: this.get("toType")
            }, e)
        }
    })
}
);
;define("app/website/file/views/NewFileModal", function(require, e, t) {
    var s = (require("app/website/file/models/NewFileDTO"),
    require("app/commons/models/file/EntFileDTO"))
      , i = require("app/commons/models/file/PersonFileDTO");
    t.exports = Backbone.View.extend({
        className: "modal fade modal-window newfile ",
        $editor: void 0,
        $fileName: void 0,
        currentFolder: void 0,
        events: {
            "click .text-save .btn-save": "saveFile",
            "click .close": "_onClose"
        },
        initialize: function() {
            this.settingObj = this.options.settingObj,
            this._initsettingObj(),
            this.currentFolder = this.options.currentFolder,
            this.render()
        },
        render: function() {
            var e = this;
            return this.$el.html(__html(Handlebars.template(function(e, t, s, i, a) {
                function o(e, t) {
                    var i, a, o = "";
                    return o += '<div class="text-save"><div class="alert alert-success succ-save hide-force"></div><div class="alert alert-error error-save hide-force"></div><div class="file-name"><label><%=msg590%>: </label><input type="text" name="prefix" class="input-medium" value="',
                    (a = s.prefix) ? i = a.call(e, {
                        hash: {},
                        data: t
                    }) : (a = e && e.prefix,
                    i = typeof a === d ? a.call(e, {
                        hash: {},
                        data: t
                    }) : a),
                    o += c(i) + '" maxlength="60"><label name="suffix">',
                    (a = s.suffix) ? i = a.call(e, {
                        hash: {},
                        data: t
                    }) : (a = e && e.suffix,
                    i = typeof a === d ? a.call(e, {
                        hash: {},
                        data: t
                    }) : a),
                    o += c(i) + '</label></div><span class="btn btn-blue btn-save" data-loading-text="<%=msg473%>" autocomplete="off"><%=msg365%></span></div>'
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                a = a || {};
                var l, n, r = "", d = "function", c = this.escapeExpression, h = this;
                return r += '<div class="modal-header"><button type="button" class="close">×</button><h3>',
                (n = s.title) ? l = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.title,
                l = typeof n === d ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                r += c(l) + '</h3></div><div class="modal-body old-modal overflow-hidden"><div class="text-body"><textarea class="editor" placeholder="<%=msgTxtInputTip%>" style="resize: none;">',
                (n = s.content) ? l = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.content,
                l = typeof n === d ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                r += c(l) + "</textarea></div>",
                l = s.unless.call(t, t && t.view, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(1, o, a),
                    data: a
                }),
                (l || 0 === l) && (r += l),
                r += "</div>"
            }
            ), _.extend(this.model.toJSON(), this.settingObj))),
            this.$fileName = this.$(".text-save .input-medium"),
            this.$editor = this.$("textarea.editor"),
            (this.settingObj.view || !this.model.canWrite()) && this.$editor.attr("readonly", "readonly"),
            this.model.id ? (this.model.viewAsTxt(function(t) {
                if (constants.isResError(t) || constants.isResError(t.msg))
                    return noty.error(msgs.msgTxtContentFail),
                    !1;
                var s = _.escapeHTML(t.text);
                e.model.set("content", s),
                e.$editor.val(s)
            }
            ),
            !this.model.canWrite() && this.$(".btn-save").attr("disabled", "disabled")) : (this.$editor.placeholder(msgs.msgTxtInputTip),
            this.$editor.focus()),
            this.$el.modal({
                keyboard: !0,
                backdrop: "static"
            }),
            this
        },
        _initsettingObj: function() {
            this.settingObj || (this.settingObj = {}),
            _.defaults(this.settingObj, {
                title: msgs.msgNewDocument
            })
        },
        _onClose: function() {
            var e = this;
            if (!this.model.canWrite() || this.settingObj.view)
                return void this.close();
            var t = $.trim(this.$editor.val());
            return t !== this.model.get("content") ? (noty.confirm(msgs.msgFileNoSave, function(t) {
                t && e.close()
            }
            ),
            !1) : void this.close()
        },
        saveFile: function(e) {
            var t = $.trim(this.$editor.val())
              , s = $.trim(this.$fileName.val());
            return !$.trim(s) || constants.pattern.fileName.test(s) ? (noty.alert(msgs.msgNameFileError),
            !1) : t.match(/<script>.*<\/script>/g) ? (noty.alert(msgs.msgInputInvalid),
            !1) : (this.model.set({
                content: t,
                prefix: s
            }),
            void this._saveFile(e))
        },
        _saveFile: function(e) {
            var t = this;
            $(e.target).button("loading"),
            this.$(".alert-error, .alert-success").addClass("hide-force"),
            this.model.saveOrUpdateFile(function(a) {
                if ($(e.target).button("reset"),
                constants.isResError(a))
                    t.$(".alert-error").text(ErrorType.saveOrUpdateFileError(a)).removeClass("hide-force");
                else if (t.model.id)
                    t.model.set({
                        version: a.version
                    }),
                    collection.currentFileList.reloadFile(a.fileId),
                    noty.success(msgs.msgSaveSuccess),
                    t.close();
                else {
                    if (t.model.set({
                        fileId: a.fileId,
                        version: a.version
                    }),
                    t.$fileName.attr("readonly", "readonly"),
                    !t.currentFolder.isRootFolder()) {
                        var o = constants.isEntDisk(a.type) ? new s(a) : new i(a);
                        o.reload(),
                        collection.currentFileList.unshift(o)
                    }
                    noty.success(msgs.msgSaveSuccess),
                    t.close()
                }
            }
            )
        },
        close: function() {
            this.$el.modal("hide"),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/FileOperateView", function(require, e, t) {
    var n = (require("app/commons/models/file/EntFileDTO"),
    require("app/commons/models/file/PersonFileDTO"),
    require("app/website/file/views/CreateFolderView"))
      , o = require("app/website/file/models/EditFileNameParam")
      , i = require("app/website/file/views/NewFileModal")
      , s = require("app/website/file/models/NewFileDTO");
    t.exports = Backbone.View.extend({
        tagName: "ul",
        className: "operate-btn",
        currentFolder: void 0,
        currentFileList: void 0,
        events: {
            "click .upload-btn": "uploadFileModal",
            "mouseover .create-btn": "_onShowCreate",
            "mouseout .create-btn": "_onHideCreate",
            "click .create-folder": "_onCreateFolder",
            "click .create-file": "_onCreateFile",
            "click .lock-btn": "_onLockFile",
            "click .unlock-btn": "_onUnLockFile",
            "click .download-btn": "_onDownloadFile",
            "click .attention-btn": "_onClickAttention",
            "click .del-attention-btn": "_onClickDelAttention",
            "click .share-btn ": "_onClickShare",
            "click .btn-modify-link ": "_onClickEditShare",
            "click .del-share-btn": "_onClickDelShare",
            "click .edit-btn": "_onClickEdit",
            "click .move-btn": "_onClickMove",
            "click .copyto-btn": "_onDiskCopy",
            "click .copy-btn": "_onDiskCopy",
            "click .rename-btn": "_onClickRename",
            "click .delete-btn": "_onClickDelete",
            "click .permission-btn": "_onClickPermission",
            "click .sync-btn": "_onSyncSetting",
            "click .property-btn": "_onClickProperty",
            "click .label-btn": "_onClickLabel",
            "mouseover .btn-pop-more": "_onShowMore",
            "mouseout .btn-pop-more": "_onHideMore"
        },
        initialize: function() {
            this.currentFileList = this.collection,
            this.currentFolder = this.options.currentFolder,
            this.router = router.fileRouter,
            this.render()
        },
        render: function() {
            return this.$el.html(""),
            this.$el.html(__html(Handlebars.template(function(e, t, n, o, i) {
                function s() {
                    return "disabled"
                }
                function l(e, t) {
                    var o, i = "";
                    return i += '<ul class="dropdown-menu" style="margin-top:-5px;"><li><a href="###" class="create-folder ',
                    o = n.unless.call(e, e && e.canCreateFolder, {
                        hash: {},
                        inverse: u.noop,
                        fn: u.program(4, r, t),
                        data: t
                    }),
                    (o || 0 === o) && (i += o),
                    i += '"><%= msg585 %></a></li>',
                    o = n.unless.call(e, e && e.isRoot, {
                        hash: {},
                        inverse: u.noop,
                        fn: u.program(6, c, t),
                        data: t
                    }),
                    (o || 0 === o) && (i += o),
                    i += "</ul>"
                }
                function r() {
                    return " disabled "
                }
                function c(e, t) {
                    var o, i = "";
                    return i += '<li><a href="###" class="create-file ',
                    o = n.unless.call(e, e && e.canCreateFile, {
                        hash: {},
                        inverse: u.noop,
                        fn: u.program(4, r, t),
                        data: t
                    }),
                    (o || 0 === o) && (i += o),
                    i += '"><%= msg704 %></a></li>'
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                n = this.merge(n, e.helpers),
                i = i || {};
                var a, d = "", u = this;
                return d += '<li class="upload-btn"><div id="picker"></div><a class="btn btn-green btn-logic-upload ',
                a = n.unless.call(t, t && t.canUpload, {
                    hash: {},
                    inverse: u.noop,
                    fn: u.program(1, s, i),
                    data: i
                }),
                (a || 0 === a) && (d += a),
                d += '"><iclass="icon-custom-upload"></i>&nbsp;<%=msg258 %></a></li><li class="create-btn"><div class="btn-group"><a class="btn btn-white-blue btn-create dropdown-toggle ',
                a = n.unless.call(t, t && t.canCreate, {
                    hash: {},
                    inverse: u.noop,
                    fn: u.program(1, s, i),
                    data: i
                }),
                (a || 0 === a) && (d += a),
                d += '"><i class="icon-custom-create"></i>&nbsp;<%= msg263 %></a>',
                a = n["if"].call(t, t && t.canCreate, {
                    hash: {},
                    inverse: u.noop,
                    fn: u.program(3, l, i),
                    data: i
                }),
                (a || 0 === a) && (d += a),
                d += '</div></li><li class="download-btn hide-force"><a href="###" class="btn  btn-white-blue"><i class="icon-custom-download"></i>&nbsp;<span><%=msg259%></span></a></li><li class="share-btn hide-force"><a href="###" class="btn  btn-white-blue"><i class="icon-custom-share"></i>&nbsp;<span><%=msg262%></span></a></li><li class="attention-btn hide-force"><a href="###" class="btn  btn-white-blue"><i class="icon-custom-attention"></i>&nbsp;<span><%=msg603%></span></a></li><li class="del-attention-btn hide-force"><a href="###" class="btn  btn-white-blue"><i class="icon-custom-attention-alt"></i>&nbsp;<span><%=msg604%></span></a></li><li class="lock-btn hide-force"><a href="###" class="btn  btn-white-blue"><i class="icon-custom-lock"></i>&nbsp;<span><%=msg337%></span></a></li><li class="unlock-btn hide-force"><a href="###" class="btn  btn-white-blue"><i class="icon-custom-lock-alt"></i>&nbsp;<span><%=msg338%></span></a></li><li class="move-btn hide-force"><a href="###" class="btn btn-white-blue"><i class="icon-custom-move"></i>&nbsp;<span><%=msg265%></span></a></li><li class="copyto-btn hide-force"><a href="###" class="btn btn-white-blue"><i class="icon-custom-copy"></i>&nbsp;<span><%=msg613%></span></a></li><li class="copy-btn hide-force"><a href="###" class="btn btn-white-blue"><i class="icon-custom-copy"></i>&nbsp;<span><%=msg614%></span></a></li><li class="edit-btn hide-force"><a href="###" class="btn btn-white-blue"><i class="icon-custom-edit"></i>&nbsp;<span><%=msg264%></span></a></li><li class="rename-btn hide-force"><a href="###" class="btn btn-white-blue"><i class="icon-custom-rename"></i>&nbsp;<span><%=msg266%></span></a></li><li class="delete-btn hide-force"><a href="###" class="btn btn-white-blue"><i class="icon-custom-recycle"></i>&nbsp;<span><%=msg156%></span></a></li><li class="label-btn hide-force"><a class="btn btn-white-blue"><i class="icon-custom-label"></i>&nbsp;<span><%= msgLabel %></span></a></li><!--<li class="collect-btn hide-force hide-important"><a class="btn btn-white-blue"><i class="fa fa-star"></i>&nbsp;&nbsp;<span><%= msg609 %></span></a></li>--><li class="property-btn hide-force"><a href="###" class="btn btn-white-blue"><i class="icon-custom-property"></i>&nbsp;<span><%=msgProperty%></span></a></li><div class="btn-group hide-force btn-pop-more"><a class="btn dropdown-toggle btn-white-blue"><i class="icon-custom-more"></i>&nbsp;<span><%=msgMore%></span><i class="icon-custom-downmenu"></i></a><ul class="dropdown-menu more-dropdown-menu" style="margin-top:-5px;"><!-- dropdown menu links --></ul></div><li class="permission-btn hide-force"><a href="###" class="btn btn-white-orange"><i class="icon-custom-permission-orange"></i>&nbsp;<span><%=msgSetPermission%></span></a></li><li class="sync-btn hide-force"><a href="###" class="btn btn-white-orange"><i class="icon-custom-sync-orange"></i>&nbsp;<span class="sync-btn-txt"><%=msgSyncSetting%></span></a></li><li class="no-btn hide-force"><span><%=msgNoPermissonTip%></span></li>'
            }
            ), {
                isRoot: constants.isRootFolder(this.currentFolder.id),
                canUpload: this.currentFolder.canUpload(),
                canCreate: this.currentFolder.canCreate(),
                canCreateFolder: this.currentFolder.canCreateFolder(),
                canCreateFile: this.currentFolder.canCreateFile()
            })),
            this.$checkAll = this.$(".operate-btn .checkbox-sprite"),
            this
        },
        ctrlBtnShow: function(e, t) {
            e = _.without(e, "upload", "create"),
            this.render();
            var n = _.difference(e, ["permission", "sync", "upload", "create", "create-file"]);
            if (t && (e = _.without(e, "upload", "create"),
            this.$(".upload-btn").addClass("hide-important"),
            this.$(".create-btn").addClass("hide-important")),
            n.length <= 4)
                return void this._showBtns(e);
            var o = _.intersection(n, ["download", "share", "unshare", "attention", "unattention"])
              , i = _.difference(n, o);
            o.length < 3 && (o = o.concat(i.splice(0, 3 - o.length)));
            {
                var s = ""
                  , l = _.reduce(i, function(e, t) {
                    return s = constants.OperateBtnMap[t],
                    e.length ? e + ", ." + s : "." + s
                }
                , "", this);
                this.$(l)
            }
            this.$(".btn-group").removeClass("hide-force"),
            this.$(l).appendTo(this.$(".more-dropdown-menu")).children("a.btn").removeClass("btn-clear").addClass("btn-link"),
            this._showBtns(e)
        },
        _showBtns: function(e) {
            var t;
            _.each(e, function(e) {
                t = constants.OperateBtnMap[e],
                t && this.$("." + t).removeClass("hide-force")
            }
            , this)
        },
        _onLockFile: function() {
            router.shareDiskRouter.doLockFile(this.collection.getOnlyCheckedFile())
        },
        _onUnLockFile: function() {
            router.shareDiskRouter.doUnLockFile(this.collection.getOnlyCheckedFile())
        },
        _onClickRename: function() {
            var e = this.collection.getOnlyCheckedFile();
            e.trigger(EventType.rename)
        },
        _onDownloadFile: function() {
            var e = this.collection.getCheckedFiles();
            return e.length > 1 || e[0].isFolder() ? e.length > 30 ? void noty.alert(msgs.msgOnceDownload) : void (this.collection.isEntDisk() ? router.shareDiskRouter.downloadMultiFilesOrFolder(this.collection.diskType, e) : router.onlineDiskRouter.downloadMultiFilesOrFolder(this.collection.diskType, e)) : (this.collection.isEntDisk() ? router.shareDiskRouter.downloadSingleFile(e[0]) : router.onlineDiskRouter.downloadSingleFile(e[0]),
            !1)
        },
        _onClickShare: function() {
            var e = this.collection.getOnlyCheckedFile();
            return router.fileRouter.shareFile(e.get("fileId")),
            !1
        },
        _onClickEditShare: function() {
            return router.shareDiskRouter.shareFile(this.collection.getOnlyCheckedFile()),
            !1
        },
        _onClickDelShare: function() {
            var e = this.collection.getCheckedFiles();
            1 == e.length ? router.shareDiskRouter.doDelShare(e[0]) : router.shareDiskRouter.doDelShares(e)
        },
        _onClickEdit: function() {
            router.fileRouter.onEditFile(this.collection.getOnlyCheckedFile())
        },
        _onClickPermission: function() {
            var e = this.collection.getOnlyCheckedFile();
            return e.fetchUserAndRolePermission(router.shareDiskRouter.fetchPermissionCallback(e.id)),
            !1
        },
        _onClickAttention: function() {
            var e = this.collection.getCheckedFiles();
            return 0 === e.length ? (noty.alert(msgs.msgNoFileFolder),
            !1) : (router.shareDiskRouter.doAttentionFile(e),
            !1)
        },
        _onClickDelAttention: function() {
            var e = this.collection.getCheckedFiles();
            return 0 === e.length ? (noty.alert(msgs.msgNoFileFolder),
            !1) : void router.shareDiskRouter.doDelAttentionFile(e)
        },
        _onClickDelete: function() {
            var e = this
              , t = this.collection.getCheckedFiles();
            return noty.confirm(msgs.msgIsSureDel, function(n) {
                return n ? (e.collection.remove(t),
                collection.currentFileList.remove(t),
                void (e.collection.isEntDisk() ? router.shareDiskRouter.doDeleteFile(t) : router.onlineDiskRouter.doDeleteFile(t))) : !1
            }
            ),
            !1
        },
        _onClickMove: function() {
            var e = this.collection.getCheckedFiles();
            this.collection.isEntDisk() ? router.shareDiskRouter.doMoveFile(e) : router.onlineDiskRouter.doMoveFile(e)
        },
        _onDiskCopy: function() {
            this.collection.isEntDisk() ? router.shareDiskRouter.doCopyFiles(this.collection.getCheckedFiles()) : router.onlineDiskRouter.doCopyFiles(this.collection.getCheckedFiles())
        },
        _onClickCollect: function() {
            router.shareDiskRouter.collectFiles(this.collection.getCheckedFiles())
        },
        _onSyncSetting: function() {
            var e = this.collection.getCheckedFiles();
            e.length > 1 || router.shareDiskRouter.doSyncSetting(e[0])
        },
        onOpenFolder: function() {
            router.fileRouter.navigate(this.collection.getOnlyCheckedFile().getOpenFolderUrl(), !0)
        },
        _onClickProperty: function() {
            var e = this.collection.getCheckedFiles();
            e.length > 1 || router.fileRouter.onShowProperty(e[0].id)
        },
        _onClickLabel: function() {
            var e = this.collection.getCheckedFiles();
            e.length > 1 || router.fileRouter.onFileMark(e[0].id)
        },
        uploadFileModal: function() {
            return this.currentFolder.isRootFolder() ? void noty.alert(msgs.msgUploadRootFolder) : this.currentFolder.canUpload() ? this.currentFolder.isEntDisk() && !this.currentFolder.hasPermission("upload") ? void noty.error(msgs.msgNoUploadPermission) : void view.uploadView.show() : void noty.alert(msgs.msgOpenAttNoPermission)
        },
        _onCreate: function() {
            return this.currentFolder.canCreate() ? void 0 : (noty.alert(msgs.msgOpenAttNoPermission),
            !1)
        },
        _onShowCreate: function(e) {
            $(e.currentTarget).find(".btn-group").addClass("open")
        },
        _onHideCreate: function(e) {
            $(e.currentTarget).find(".btn-group").removeClass("open")
        },
        _onShowMore: function(e) {
            $(e.currentTarget).addClass("open")
        },
        _onHideMore: function(e) {
            $(e.currentTarget).removeClass("open")
        },
        _onCreateFolder: function() {
            if (!this.currentFolder.canCreateFolder())
                return noty.error(msgs.msgCreateFolderError),
                !1;
            var e = (this.currentFolder.get("permissionDTO"),
            new n({
                model: new o({
                    operate: "createFolder",
                    parentId: this.currentFolder.id
                }),
                currentFolder: this.currentFolder
            }));
            e.on(EventType.submit, function(t) {
                var n = this.currentFolder.isEntDisk() ? router.shareDiskRouter.createFolder : router.onlineDiskRouter.createFolder;
                n(t, function(t) {
                    constants.isResError(t) || e.close()
                }
                )
            }
            , this)
        },
        _onCreateFile: function() {
            var e = this.currentFolder.id;
            constants.isRootFolder(this.currentFolder.id) && (noty.success(msgs.msgEntDefaultFolder),
            e = this.currentFolder.isEntDisk() ? collection.entFileList.getDefaultUploadFolderId() : collection.personFileList.getDefaultUploadFolderId()),
            new i({
                currentFolder: this.currentFolder,
                model: new s({
                    folderId: e,
                    toType: this.currentFolder.get("diskType")
                })
            })
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/FileInfoView", function(require, e, a) {
    a.exports = Backbone.View.extend({
        tagName: "ul",
        className: "file-info-view",
        initialize: function() {
            this.listenTo(this.model, EventType.loadFile, this._onFileLoaded),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, a, s, t, i) {
                this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                i = i || {};
                var n, l, p = "", m = "function", c = this.escapeExpression;
                return p += '<li class="file-type"><a class="file-icon-medium ',
                (l = s.icon) ? n = l.call(a, {
                    hash: {},
                    data: i
                }) : (l = a && a.icon,
                n = typeof l === m ? l.call(a, {
                    hash: {},
                    data: i
                }) : l),
                p += c(n) + '" name="file-icon"></a></li><li class="file-intro"><ul><li class="file-name"><span class="file-name">',
                (l = s.name) ? n = l.call(a, {
                    hash: {},
                    data: i
                }) : (l = a && a.name,
                n = typeof l === m ? l.call(a, {
                    hash: {},
                    data: i
                }) : l),
                p += c(n) + '</span></li><li class="file-info"><span class="light"><%= msg593 %>:</span>&nbsp;<span class="green createrName" name="createrName"></span><span class="pipe"></span><span class="light"><%= msg594 %>:</span>&nbsp;<span class="green" name="createTime">',
                (l = s.createTime) ? n = l.call(a, {
                    hash: {},
                    data: i
                }) : (l = a && a.createTime,
                n = typeof l === m ? l.call(a, {
                    hash: {},
                    data: i
                }) : l),
                p += c(n) + '</span><span class="pipe"></span><span class="light"><%= msg595 %>:</span>&nbsp;<span class="green upadteUserName" name="upadteUserName"></span><span class="pipe"></span><span class="light"><%= msg597 %>:</span>&nbsp;<span class="green" name="updateTime">',
                (l = s.updateTime) ? n = l.call(a, {
                    hash: {},
                    data: i
                }) : (l = a && a.updateTime,
                n = typeof l === m ? l.call(a, {
                    hash: {},
                    data: i
                }) : l),
                p += c(n) + "</span></li></ul></li>"
            }
            ), {
                name: this.model.displayName(),
                createTime: this.model.get("createTime"),
                updateTime: this.model.get("updateTime"),
                icon: constants.typeConverter(this.model.get("type"))
            })),
            this.model.getFile(),
            this.$(".file-name").width(view.mainbox.$(".content-right").width() - 60),
            this
        },
        _onFileLoaded: function(e) {
            this.$(".createrName").html(e.createrName || model.currentUser.getDisplayName()),
            this.$(".upadteUserName").html(e.upadteUserName || model.currentUser.getDisplayName())
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/SwitchView", function(require, s, t) {
    t.exports = Backbone.View.extend({
        className: "list-icon-switch",
        events: {
            "click .switch-item.thumb": "_onListSwitch",
            "click .switch-item.collapse": "_onCollapseSwitch"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(s, t, e, i, a) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                e = this.merge(e, s.helpers),
                a = a || {},
                '<span class="switch-item collapse" title=""><i class="icon-custom-collapse"></i></span><span class="switch-item thumb" title=""><i class="icon-custom-thumb"></i></span>'
            }
            ))),
            this.$(".switch-item.thumb").toggleClass("true", "thumb" == cache.showType),
            this.$(".switch-item.collapse").toggleClass("true", 1 == cache.isCollapse),
            this.$(".switch-item.thumb").attr("title", this.$(".switch-item.thumb").hasClass("true") ? msgs.msgShowListInfo : msgs.msgShowThumbInfo),
            this.$(".switch-item.collapse").attr("title", this.$(".switch-item.collapse").hasClass("true") ? msgs.msgExpandSidebar : msgs.msgCloseSidebar),
            this
        },
        _onListSwitch: function(s) {
            var t = $(s.currentTarget)
              , e = t.hasClass("true") ? "list" : "thumb";
            return t.hasClass("disabled") ? void 0 : (t.addClass("disabled"),
            cache.showType = e,
            $.cookie("stp", cache.showType),
            this.trigger("changeShowType", e),
            t.attr("title", t.hasClass("true") ? msgs.msgShowThumbInfo : msgs.msgShowListInfo),
            t.toggleClass("true"),
            setTimeout(function() {
                t.removeClass("disabled")
            }
            , 200),
            !1)
        },
        _onCollapseSwitch: function(s) {
            var t = $(s.currentTarget)
              , e = t.hasClass("true");
            return t.hasClass("disabled") ? void 0 : (cache.isCollapse = !e,
            $.cookie("isCollapse", cache.isCollapse),
            t.addClass("disabled"),
            this.trigger("toggleCollapse", !e),
            t.attr("title", t.hasClass("true") ? msgs.msgCloseSidebar : msgs.msgExpandSidebar),
            t.toggleClass("true"),
            setTimeout(function() {
                t.removeClass("disabled")
            }
            , 510),
            !1)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/models/HighSearchDTO", function(require, e, o) {
    o.exports = Backbone.Model.extend({
        defaults: {
            fileType: void 0,
            searchKey: void 0,
            docType: void 0,
            labelId: void 0,
            operatorId: void 0,
            operatorName: void 0,
            startTime: void 0,
            endTime: void 0,
            skipResults: void 0,
            maxResults: void 0
        }
    })
}
);
;define("app/website/file/models/SearchFactorList", function(require, e, o) {
    var d = Backbone.Model.extend({
        defaults: {
            type: void 0,
            name: void 0,
            checked: !1
        }
    });
    o.exports = Backbone.Collection.extend({
        model: d
    })
}
);
;define("app/website/file/views/SearchFactorView", function(require, e, t) {
    var i = Backbone.View.extend({
        tagName: "span",
        className: "cs-label label-white-blue",
        tpl: '<%= name %>&nbsp;<a class="delete"><i class="icon-custom-remove"></i></a>',
        events: {
            "click .delete": "_onDelete"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(_.template(this.tpl, {
                name: this.model.get("name")
            })),
            this
        },
        _onDelete: function() {
            this.collection.trigger("deleteFactor", this.model)
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    });
    t.exports = Backbone.View.extend({
        className: "search-items-view",
        tpl: '<b><%= msgSearchFactors %></b>&nbsp;<div class="inline-block factor-list list-item"></div>',
        collectionBinder: void 0,
        initialize: function() {
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.render()
        },
        render: function() {
            return this.$el.html(_.template(this.tpl, {
                msgSearchFactors: msgs.msgSearchFactors
            })),
            this.collectionBinder.bind(this.collection, this.$(".factor-list")),
            this
        },
        viewCreator: function(e, t) {
            return new i({
                model: e,
                collection: t
            })
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/models/SearchTypeList", function(require, e, s) {
    var t = Backbone.Model.extend({
        defaults: {
            type: void 0,
            name: void 0,
            checked: !1
        }
    });
    s.exports = Backbone.Collection.extend({
        model: t,
        initSearchType: function() {
            this.reset([{
                type: "all",
                name: msgs.msgAll
            }, {
                type: "folder",
                name: msgs.msg82
            }, {
                type: "document",
                name: msgs.msgDocument
            }, {
                type: "picture",
                name: msgs.msg807
            }, {
                type: "video",
                name: msgs.msg808
            }, {
                type: "music",
                name: msgs.msg809
            }])
        },
        unCheckAll: function() {
            this.each(function(e) {
                e.set("checked", !1)
            }
            )
        }
    })
}
);
;define("app/website/file/views/SearchTypeView", function(require, e, t) {
    var i = require("app/website/file/models/SearchTypeList")
      , n = Backbone.View.extend({
        tagName: "li",
        className: "search-type-item",
        tpl: '<span class="cs-label label-trans-blue"><%= name %></span><span class="pipe">|</span>',
        events: {
            "click ": "_onSelect"
        },
        initialize: function() {
            this.listenTo(this.model, "change:checked", this._onChecked),
            this.render()
        },
        render: function() {
            return this.$el.html(_.template(this.tpl, {
                name: this.model.get("name")
            })),
            this._onChecked(),
            this
        },
        _onSelect: function() {
            this.collection.trigger(EventType.select, this.model)
        },
        _onChecked: function() {
            this.$(".cs-label").toggleClass("active", this.model.get("checked"))
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    });
    t.exports = Backbone.View.extend({
        className: "search-type-view",
        collectionBinder: void 0,
        initialize: function() {
            this.collection = new i,
            this.collection.initSearchType();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this._addListeners(),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, i, n, s) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                s = s || {},
                '<b class="space"><%= msgType %></b>&nbsp;<ul class="inline-block search-type-list list-item"></ul>'
            }
            ))),
            this.collectionBinder.bind(this.collection, this.$(".search-type-list")),
            this
        },
        _addListeners: function() {
            this.listenTo(this.collection, EventType.select, this._onSelect)
        },
        viewCreator: function(e, t) {
            return new n({
                model: e,
                collection: t
            })
        },
        _onSelect: function(e) {
            this.collection.unCheckAll(),
            e.set("checked", !0),
            this.trigger("selectType", e)
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/SearchLabelView", function(require, e, t) {
    var l = require("app/website/file/models/LabelList")
      , i = Backbone.View.extend({
        tagName: "span",
        className: "cs-label label-blue",
        tpl: "<%= labelName %>",
        events: {
            click: "_onSelect"
        },
        initialize: function() {
            this._addListeners(),
            this.render()
        },
        render: function() {
            return this.$el.html(_.template(this.tpl, {
                labelName: this.model.get("labelName")
            })),
            this.onChecked(),
            this
        },
        _addListeners: function() {
            this.listenTo(this.model, "change:checked", this.onChecked)
        },
        _onSelect: function() {
            this.collection.trigger(EventType.select, this.model.get("labelId"))
        },
        onChecked: function() {
            this.$el.toggleClass("active", this.model.get("checked"))
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    });
    t.exports = Backbone.View.extend({
        className: "search-label-view",
        labelsBinder: void 0,
        shortLabelsBinder: void 0,
        labelList: void 0,
        initialize: function() {
            var e = this;
            this.labelList = new l,
            this.shortLabelList = new l,
            this.labelList.getLabels(function(t) {
                e.shortLabelList.add(t.labels.slice(0, 5))
            }
            );
            var t = new Backbone.CollectionBinder.ViewManagerFactory(this.labelCreator);
            this.labelsBinder = new Backbone.CollectionBinder(t);
            var i = new Backbone.CollectionBinder.ViewManagerFactory(this.labelCreator);
            this.shortLabelsBinder = new Backbone.CollectionBinder(i),
            this._addListeners(),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, l, i, s) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                l = this.merge(l, e.helpers),
                s = s || {},
                '<b class="space"><%= msgLabel %></b>&nbsp;<div class="collapsed-labels inline-block"><div class="collapsed-label-list inline-block list-item"></div>&nbsp;<a class="expand-btn"><%= msgUnfold %>&nbsp;<i class="fa fa-angle-down"></i></a></div><div class="expanded-labels inline-block hide-force" style="vertical-align: top;"><div class="label-list list-item"></div><div class="collapse-bar ar"><a class="collapse-btn"><%= msgFold %>&nbsp;<i class="fa fa-angle-up"></i></a></div></div>'
            }
            ))),
            this.labelsBinder.bind(this.labelList, this.$(".label-list")),
            this.shortLabelsBinder.bind(this.shortLabelList, this.$(".collapsed-label-list")),
            this
        },
        _addListeners: function() {
            this.listenTo(this.labelList, EventType.select, this._onSelectLabelList),
            this.listenTo(this.shortLabelList, EventType.select, this._onSelectShortLabelList)
        },
        labelCreator: function(e, t) {
            return new i({
                model: e,
                collection: t
            })
        },
        _onSelectLabelList: function(e) {
            var t = this.labelList.onlyCheck(e)
              , l = this.shortLabelList.findWhere({
                labelId: e
            });
            return this.trigger("selectLabel", t),
            l ? void this.shortLabelList.onlyCheck(e) : (this.shortLabelList.pop(),
            void this.shortLabelList.unshift(t))
        },
        _onSelectShortLabelList: function(e) {
            var t = this.shortLabelList.onlyCheck(e);
            this.labelList.onlyCheck(e),
            this.trigger("selectLabel", t)
        },
        unCheckAll: function() {
            this.labelList.unCheckAll(),
            this.shortLabelList.unCheckAll()
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/SearchOperatorView", function(require, e, t) {
    var o = require("app/commons/uikit/user/ColleagueSelectWindow")
      , s = require("app/commons/models/user/UserDTO");
    t.exports = Backbone.View.extend({
        className: "search-operator-view",
        colleagueWindow: void 0,
        modelBinder: void 0,
        operator: void 0,
        events: {
            "click .userSearch": "_onShowColleague"
        },
        initialize: function() {
            this.model = new s,
            this._modelBinder = new Backbone.ModelBinder,
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, o, s, i) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                o = this.merge(o, e.helpers),
                i = i || {},
                '<b><%= msgOperator %></b>&nbsp;&nbsp;&nbsp;&nbsp;<div class="input-append search-util"><input type="text" placeholder="<%= msgOperatorNameAccount %>" class="input-medium keyword" readonly="readonly"name="realName"><a class="btn start-search userSearch"><span class="pipe">|</span><%= msgMemberList %></a></div>'
            }
            ))),
            this._modelBinder.bind(this.model, this.el),
            this
        },
        _onShowColleague: function() {
            this.colleagueWindow && this.colleagueWindow.close(),
            this.colleagueWindow = new o,
            this.colleagueWindow.on(EventType.selectUsers, this._onSelectColleague, this)
        },
        _onSelectColleague: function(e) {
            this.model.set(e.toJSON()),
            e && e.get("userId") && this.trigger("selectOperator", e)
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/models/SearchTimeDTO", function(require, t, e) {
    e.exports = Backbone.Model.extend({
        defaults: {
            startTime: void 0,
            startDate: void 0,
            endTime: void 0,
            endDate: void 0,
            timeName: void 0,
            nowDate: void 0
        },
        setTypeDate: function(t) {
            switch (this.setEndNow(),
            t) {
            case "custom":
            case "all":
                this.clear();
                break;
            case "day_1":
                this.set({
                    startDate: this.get("nowDate"),
                    startTime: constants.getMillSec(this.get("nowDate") + " 00:00:00"),
                    timeName: constants.dateTypeMap.day_1
                });
                break;
            case "week_1":
                this.setStartToNow(1, "week"),
                this.set("timeName", constants.dateTypeMap.week_1);
                break;
            case "month_1":
                this.setStartToNow(1, "month"),
                this.set("timeName", constants.dateTypeMap.month_1);
                break;
            case "month_3":
                this.setStartToNow(3, "month"),
                this.set("timeName", constants.dateTypeMap.month_3);
                break;
            default:
                this.set("startDate", void 0)
            }
        },
        setEndNow: function() {
            this.set("nowDate", moment().format("YYYY-MM-DD")),
            this.set({
                endDate: this.get("nowDate"),
                endTime: constants.getMillSec(this.get("nowDate") + " 23:59:59")
            })
        },
        setStartToNow: function(t, e) {
            this.set("startDate", moment().subtract(t, e).format("YYYY-MM-DD")),
            this.set("startTime", constants.getMillSec(this.get("startDate") + " 23:59:59"))
        },
        setCustomTimeName: function() {
            var t = this.get("startDate") ? this.get("startDate") : ""
              , e = this.get("endDate") ? this.get("endDate") : "";
            this.set("timeName", t + " - " + e)
        },
        setCustomStart: function(t) {
            this.set("startDate", t),
            this.set("startTime", t ? constants.getMillSec(t + " 00:00:00") : void 0),
            this.setCustomTimeName()
        },
        setCustomEnd: function(t) {
            this.set("endDate", t),
            this.set("endTime", t ? constants.getMillSec(t + " 23:59:59") : void 0),
            this.setCustomTimeName()
        }
    })
}
);
;define("app/website/file/views/SearchTimeView", function(require, t, e) {
    var a = require("app/website/file/models/SearchTimeDTO")
      , s = Backbone.View.extend({
        id: "startEndDatePop",
        className: "popover fade bottom in start-end-date-pop visib-hide",
        _collectionBinder: void 0,
        initialize: function() {
            this.render()
        },
        render: function() {
            var t = this;
            return this.$el.html(__html(Handlebars.template(function(t, e, a, s, i) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                a = this.merge(a, t.helpers),
                i = i || {},
                '<div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"><div id="startDate" class="input-append inline-block date" style="margin-right:10px;"><input class="input start-Time" size="16" type="text" value="" readonly="readonly" placeholder="<%= msgStartDate %>"/><span class="add-on"><i class="icon-calendar"></i></span></div><div id="endDate" class="input-append inline-block date"><input class="input end-Time" size="16" type="text" value="" readonly="readonly" placeholder="<%= msgEndDate %>"/><span class="add-on"><i class="icon-calendar"></i></span></div></div>'
            }
            ))),
            this.$("#startDate").datetimepicker({
                autoclose: !0,
                pickTime: !1,
                startDate: "",
                endDate: new Date,
                pickerPosition: "bottom-left"
            }).on("changeDate", function(e) {
                var a = constants.date_format(new Date(e.date.valueOf() - 288e5), "YYYY-MM-DD");
                t._onSetStartDate(a)
            }
            ),
            this.$("#endDate").datetimepicker({
                autoclose: !0,
                pickTime: !1,
                endDate: new Date,
                pickerPosition: "bottom-left"
            }).on("changeDate", function(e) {
                var a = constants.date_format(new Date(e.date.valueOf() - 288e5), "YYYY-MM-DD");
                t._onSetEndDate(a)
            }
            ),
            this
        },
        _onSetStartDate: function(t) {
            this.trigger("setStartDate", t),
            this.$("#endDate").datetimepicker("setStartDate", t)
        },
        _onSetEndDate: function(t) {
            this.trigger("setEndDate", t),
            this.$("#startDate").datetimepicker("setEndDate", t)
        },
        clearTimePick: function() {
            this.$(".start-Time").val(""),
            this.$("#startDate").datetimepicker("update"),
            this.$(".end-Time").val(""),
            this.$("#endDate").datetimepicker("update"),
            this.$("#startDate").datetimepicker("setEndDate", new Date),
            this.$("#endDate").datetimepicker("setStartDate", null )
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    });
    e.exports = Backbone.View.extend({
        className: "search-operator-view",
        datePop: void 0,
        nowDate: void 0,
        isShowCustom: void 0,
        events: {
            "click .custom": "_onToggleDatePop",
            "click .time-pick": "_onTimeClick"
        },
        initialize: function() {
            this.model = new a,
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(t, e, a, s, i) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                a = this.merge(a, t.helpers),
                i = i || {},
                '<b class="space"><%= msg276 %></b>&nbsp;<span class="cs-label label-trans-blue time-pick all-pick" data="all">所有</span><span class="pipe">|</span><span class="cs-label label-trans-blue time-pick" data="day_1">今天</span><span class="pipe">|</span><span class="cs-label label-trans-blue time-pick" data="week_1">最近一周</span><span class="pipe">|</span><span class="cs-label label-trans-blue time-pick" data="month_1">最近一个月</span><span class="pipe">|</span><span class="cs-label label-trans-blue time-pick" data="month_3">最近三个月</span><span class="pipe">|</span><span class="cs-label label-trans-blue custom" data="custom" style="position:relative;"><%= msg427 %>&nbsp;<i class="fa fa-caret-down"></i></span>'
            }
            ))),
            this._createDatePop(),
            this
        },
        _createDatePop: function() {
            this.datePop = new s,
            this.$(".custom").append(this.datePop.el),
            this.datePop.on("setStartDate", this._onSetCustomStart, this),
            this.datePop.on("setEndDate", this._onCustomEnd, this)
        },
        _onSetCustomStart: function(t) {
            this.model.setCustomStart(t),
            this.trigger("selectDate", this.model),
            this.$(".time-pick").removeClass("active")
        },
        _onCustomEnd: function(t) {
            this.model.setCustomEnd(t),
            this.trigger("selectDate", this.model),
            this.$(".time-pick").removeClass("active")
        },
        _onTimeClick: function(t) {
            this.$(".time-pick").removeClass("active"),
            this.$(".start-end-date-pop").addClass("visib-hide");
            var e = $(t.currentTarget).attr("data");
            $(t.currentTarget).addClass("active"),
            this.dealCustomDate(!1),
            this.model.setTypeDate(e),
            this.trigger("selectDate", this.model)
        },
        _onToggleDatePop: function() {
            this.isShowCustom = !this.isShowCustom,
            this.model.setTypeDate("custom"),
            this.dealCustomDate(!0)
        },
        dealCustomDate: function(t) {
            this.datePop.clearTimePick(),
            t ? (this.model.clear(),
            this.$(".start-end-date-pop").toggleClass("visib-hide", this.isShowCustom)) : this.$(".start-end-date-pop").addClass("visible-hide")
        },
        clear: function() {
            this.$(".all-pick").click(),
            this.$(".time-pick").removeClass("active")
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/HighSearchView", function(require, e, t) {
    var i = require("app/website/file/models/HighSearchDTO")
      , s = require("app/website/file/models/SearchFactorList");
    SearchFactorView = require("app/website/file/views/SearchFactorView"),
    SearchTypeView = require("app/website/file/views/SearchTypeView"),
    SearchLabelView = require("app/website/file/views/SearchLabelView"),
    SearchOperatorView = require("app/website/file/views/SearchOperatorView"),
    SearchTimeView = require("app/website/file/views/SearchTimeView"),
    t.exports = Backbone.View.extend({
        className: "high-search-view",
        currentFolder: void 0,
        factorList: void 0,
        searchFactorView: void 0,
        searchTypeView: void 0,
        searchLabelView: void 0,
        searchOperatorView: void 0,
        searchTimeView: void 0,
        events: {
            "click .exit-search": "_onExitSearch",
            "click .expand-btn": "_onLabelExpand",
            "click .startSearch": "_onSearch",
            "click .collapse-btn": "_onLabelCollapse"
        },
        initialize: function() {
            this._initData(),
            this._addListeners(),
            this.render()
        },
        _initData: function() {
            this.currentFolder = this.options.currentFolder,
            this.collection.reset(),
            this.model = new i({
                fileType: this.currentFolder.get("fileType")
            }),
            this.factorList = new s
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, i, s, a) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                a = a || {},
                '<div class="search-top"><div class="input-append search-util fl"><input type="text" placeholder="<%= msgSearchFileAndMark %>" class="input-medium keyword"><a class="btn start-search startSearch"><span class="pipe">|</span><%= msgStartSearch %></a></div><div class="inline-block fr"><a class="exit-search"><%= msgSearchExit %></a></div><div class="clear"></div></div><div class="factors"></div><ul class="search-selects"><li class="type search-type"></li><li class="labels search-label"></li><li class="operator search-operator"></li><li class="time search-time"></li></ul>'
            }
            ))),
            this._showSearchFactor(),
            this._showSearchType(),
            this._showSearchLabel(),
            this._showSearchOperator(),
            this._showSearchTime(),
            this.$(".keyword").bind("keydown", "return", function(e) {
                e.stopPropagation(),
                e.preventDefault(),
                self.$(".startSearch").click()
            }
            ),
            this
        },
        _addListeners: function() {
            this.listenTo(this.factorList, "deleteFactor", this._onDeleteFactor)
        },
        _onSearch: function() {
            this.model.set("searchKey", $.trim(this.$(".keyword").val())),
            this.collection.searchFile(this.model.toJSON())
        },
        _showSearchFactor: function() {
            this.searchFactorView && this.searchFactorView.close(),
            this.searchFactorView = new SearchFactorView({
                el: this.$(".factors"),
                collection: this.factorList
            })
        },
        _showSearchType: function() {
            this.searchTypeView && this.searchTypeView.close(),
            this.searchTypeView = new SearchTypeView({
                el: this.$(".search-type")
            }),
            this.searchTypeView.on("selectType", this._onSelectType, this)
        },
        _onSelectType: function(e) {
            var t = this.factorList.findWhere({
                factor: "docType"
            });
            t && this.factorList.remove(t),
            this.factorList.add({
                factor: "docType",
                name: "all" == e.get("type") ? msgs.msgAllType : e.get("name"),
                factorInfo: e.toJSON()
            }),
            this.model.set("docType", e.get("type"))
        },
        _showSearchLabel: function() {
            this.searchLabelView && this.searchLabelView.close(),
            this.searchLabelView = new SearchLabelView({
                el: this.$(".search-label")
            }),
            this.searchLabelView.on("selectLabel", this._onSelectLabel, this)
        },
        _onSelectLabel: function(e) {
            var t = this.factorList.findWhere({
                factor: "label"
            });
            t && this.factorList.remove(t),
            this.factorList.add({
                factor: "label",
                name: e.get("labelName"),
                factorInfo: e.toJSON()
            }),
            this.model.set("labelId", e.get("labelId"))
        },
        _showSearchOperator: function() {
            this.searchOperatorView && this.searchOperatorView.close(),
            this.searchOperatorView = new SearchOperatorView({
                el: this.$(".search-operator")
            }),
            this.searchOperatorView.on("selectOperator", this._onSelectOperator, this)
        },
        _onSelectOperator: function(e) {
            var t = this.factorList.findWhere({
                factor: "operator"
            });
            t && this.factorList.remove(t),
            this.factorList.add({
                factor: "operator",
                name: e.get("realName") || e.get("userName"),
                factorInfo: e.toJSON()
            }),
            this.model.set("operatorId", e.get("userId"))
        },
        _showSearchTime: function() {
            this.searchTimeView && this.searchTimeView.close(),
            this.searchTimeView = new SearchTimeView({
                el: this.$(".search-time")
            }),
            this.searchTimeView.on("selectDate", this._onSelectDate, this)
        },
        _onSelectDate: function(e) {
            var t = this.factorList.findWhere({
                factor: "time"
            });
            t && this.factorList.remove(t),
            e.get("timeName") && (this.factorList.add({
                factor: "time",
                name: e.get("timeName"),
                factorInfo: e.toJSON()
            }),
            this.model.set({
                startTime: e.get("startTime"),
                endTime: e.get("endTime")
            }))
        },
        _onLabelExpand: function() {
            this.$(".collapsed-labels").addClass("hide-force"),
            this.$(".expanded-labels").removeClass("hide-force")
        },
        _onLabelCollapse: function() {
            this.$(".collapsed-labels").removeClass("hide-force"),
            this.$(".expanded-labels").addClass("hide-force")
        },
        _onDeleteFactor: function(e) {
            switch (e.get("factor")) {
            case "docType":
                this.searchTypeView.collection.unCheckAll(),
                this.model.unset("docType");
                break;
            case "label":
                this.searchLabelView.unCheckAll(),
                this.model.unset("labelId");
                break;
            case "operator":
                this.searchOperatorView.model.clear(),
                this.model.unset("operatorId"),
                this.model.unset("operatorName");
                break;
            case "time":
                this.searchTimeView.clear(),
                this.model.unset("startTime"),
                this.model.unset("endTime")
            }
            this.factorList.remove(e)
        },
        _onExitSearch: function() {
            this.trigger("onExitSearch"),
            this.close()
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/EntFileTable", function(require, e, i) {
    var t = "[EntFileTable]-"
      , s = require("app/commons/models/file/EntFileDTO")
      , l = require("app/commons/uikit/support/EmptyView")
      , o = require("app/commons/uikit/support/LoadingView")
      , n = require("app/website/file/views/EntFileItem")
      , h = require("app/website/file/views/FileThumbItem")
      , r = require("app/website/file/views/DiskFileSearchView")
      , a = require("app/website/file/views/FileBreadView")
      , c = require("app/website/file/views/FileOperateView")
      , d = require("app/website/file/views/FileInfoView")
      , f = require("app/website/file/views/SwitchView")
      , w = require("app/website/file/views/HighSearchView");
    i.exports = Backbone.View.extend({
        tagName: "div",
        id: "entFileTable",
        className: "file-main",
        collectionBinder: void 0,
        swfupload: void 0,
        emptyView: void 0,
        entFileList: void 0,
        currentFolder: void 0,
        isShowSearchResult: !1,
        fileBreadView: void 0,
        fileSearchView: void 0,
        fileOperateView: void 0,
        fileInfoView: void 0,
        switchView: void 0,
        highSearchView: void 0,
        events: {
            "click .file-table-header .check-all": "_onCheckAll",
            "click #emptyFolderUpload": "_onUploadFileModal",
            "click .highSearch": "_showHighSearch",
            "click .file-table-header .file-name": "sortByName",
            "click .file-table-header .file-size": "sortBySize",
            "click .file-table-header .file-time": "sortByTime"
        },
        initialize: function() {
            this.entFileList = this.options.entFileList,
            this.currentFolder = model.currentFolder,
            this._addListeners();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator,this.collection);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.render()
        },
        render: function() {
            return this._addChildViews(),
            this._onResize(),
            this.collectionBinder.unbind(),
            this.collectionBinder.bind(this.collection, this.$listView),
            this
        },
        _addChildViews: function() {
            this.$el.html(__html(Handlebars.template(function(e, i, t, s, l) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                l = l || {},
                '<div class="file-view-top"><div class="no-search"><div class="bread-container inline-block left"></div><div class="search-container inline-block right"></div></div><div class="high-search-container hide"></div></div><div class="file-view-operate"><div class="operates-container inline-block left"></div><div class="switch-container inline-block right"></div></div><div class="file-table"><ul class="file-table-header"><li class="file-check" name="file-check"><span class=\'checkbox-sprite check-all\'></span></li><li class="pipe"></li><li class="file-name cursor-pointer"><%=msg590%> <i class="fa fa-sort-asc"></i></li><li class="pipe"></li><li class="file-status"><%=msg345%></li><li class="pipe"></li><li class="file-size cursor-pointer"><%=msgSize%> <i class="fa fa-sort-asc hide-force"></i></li><li class="pipe"></li><li class="file-time cursor-pointer"><%= msg597 %> <i class="fa fa-sort-asc hide-force"></i></li><li class="file-path hide-force"><span class="pipe"></span><%= msgTheDirectory %></li></ul><div class="file-list-wrapper" style="overflow-y: auto;"><ul id="ent-file-list" class="overflow-auto"><li class="empty-table-tip hide-force" style="margin-top: 20% !important;"><%=msgTableEmpty%></li></ul><div class="file-tips"></div></div></div>'
            }
            ))),
            this.$fileTable = this.$(".file-table"),
            this.$listView = this.$("#ent-file-list"),
            this.$operateBtns = this.$(".operate-btn"),
            this.$fileTips = this.$(".file-tips"),
            this.fileBreadView = new a({
                el: this.$(".bread-container"),
                collection: this.entFileList,
                currentFolder: this.currentFolder
            }),
            this.fileBreadView.on(EventType.onSearch, this._toggleSearchResult, this),
            this.fileSearchView = new r({
                el: this.$(".search-container"),
                model: this.currentFolder,
                collection: this.collection,
                fileList: this.entFileList
            }),
            this.fileSearchView.on(EventType.onSearch, this._toggleSearchResult, this),
            this.fileOperateView = new c({
                model: this.currentFolder,
                collection: this.collection,
                fileList: this.entFileList,
                currentFolder: this.currentFolder
            }),
            this.$(".operates-container").html(this.fileOperateView.el),
            this.switchView = new f,
            this.$(".switch-container").html(this.switchView.el),
            this._switchShow(),
            this.loadingView = new o({
                el: this.$el,
                parent: this.$fileTable
            }),
            this.emptyView = new l({
                el: this.$listView,
                type: "empty-folder"
            })
        },
        _switchShow: function() {
            var e = this;
            this._dealHeaderShow(this.isShowSearchResult, "thumb" === cache.showType),
            this.switchView.on("changeShowType", function() {
                e.collection.reset(e.collection.models),
                e._dealHeaderShow(e.isShowSearchResult, "thumb" === cache.showType)
            }
            ),
            this.switchView.on("toggleCollapse", function(e) {
                view.mainbox.collapseContentLeft(e)
            }
            )
        },
        _dealHeaderShow: function(e, i) {
            this.$(".file-table-header >li").toggleClass("hide-force", i),
            this.$(".file-table-header >li.file-check").removeClass("hide-force"),
            this.$(".file-table-header .file-path").toggleClass("hide-force", !e || i)
        },
        _addListeners: function() {
            this.listenTo(this.collection, "add remove reset", this._onAddOrRemoveFile),
            this.listenTo(this.collection, "change:checked change:lockByUserId change:remind change:shareLinkId change:favorite", this.onFileSelect),
            this.listenTo(this.collection, EventType.checkChange, this.onFileSelect),
            this.listenTo(model.setting, "change:width change:height", this._onResize),
            this.listenTo(model.messageEvent, EventType.changeSlide, this._onResize),
            this.listenTo(model.messageEvent, EventType.clearContextmenus, this.hideContextMenu),
            this.listenTo(model.messageEvent, EventType.onCancelShare, this._onCancelShare),
            this.listenTo(this.collection, EventType.startLoad, this._onStartLoad),
            this.listenTo(this.collection, EventType.stopLoad, this._onStopLoad)
        },
        _onCancelShare: function(e) {
            var i = this.collection.get(e);
            i.set("shareLinkId", null )
        },
        $checkAll: function() {
            return this.$(".file-table-header .check-all")
        },
        viewCreator: function(e, i) {
            return "list" === cache.showType ? new n({
                model: e,
                collection: i
            }) : new h({
                model: e,
                collection: i
            })
        },
        _toggleSearchResult: function(e) {
            return e ? (this.isShowSearchResult = !0,
            this._dealHeaderShow(!0, "thumb" === cache.showType),
            this.$(".breadcrumb-div .breadcrumb-move").addClass("hide-force"),
            this.$("li.search-result").removeClass("hide-force"),
            this.$("li.search-result .count").html(e.resultCount),
            this.$("ul.breadcrumb>li").not(".search-result").hide(),
            this.$(".file-table-header").addClass("show-path"),
            this.fileOperateView.$(".upload-btn,.create-btn").addClass("hide-important"),
            this.collection.each(function(e) {
                e.set("searchMode", !0)
            }
            ),
            void this._onAddOrRemoveFile()) : (this.isShowSearchResult = !1,
            this._dealHeaderShow(!1, "thumb" === cache.showType),
            this.$(".file-table-header").removeClass("show-path"),
            this.$(".breadcrumb-div .breadcrumb-move").removeClass("hide-force"),
            this.$("li.search-result").addClass("hide-force"),
            this.$("ul.breadcrumb>li").show(),
            this.fileOperateView.$(".upload-btn,.create-btn").removeClass("hide-important"),
            this.collection.each(function(e) {
                e.set("searchMode", !1)
            }
            ),
            this._onAddOrRemoveFile(),
            this.onFileSelect(),
            void 0)
        },
        _onAddOrRemoveFile: function() {
            return this.isShowSearchResult ? (this.$(".empty-table-tip").toggleClass("hide-force", this.collection.length > 0),
            void this.emptyView.hide()) : (this.$(".empty-table-tip").addClass("hide-force"),
            0 === this.collection.length ? this.emptyView.show() : this.emptyView.hide(),
            void this.onFileSelect())
        },
        _onCheckAll: function() {
            var e = this.$checkAll().hasClass("true");
            this.$checkAll().toggleClass("true"),
            this.collection.each(function(i) {
                i.set({
                    checked: !e,
                    silent: !0
                })
            }
            ),
            this.$listView.find(".entFileItem .checkbox-sprite").toggleClass("true", !e),
            this.onFileSelect()
        },
        _ctrlCheckAllBtn: function(e) {
            var i = !!e.length && e.length === this.collection.length;
            this.$checkAll().toggleClass("true", i)
        },
        onFileSelect: function() {
            var e = this.collection.getCheckedFiles();
            this._ctrlBtnShow(e),
            1 == e.length ? this._showFileInfo(e[0]) : this._hideFileInfo(),
            this._onResize()
        },
        _showFileInfo: function(e) {
            this.fileInfoView && this.fileInfoView.close(),
            this.fileInfoView = new d({
                model: e
            }),
            this.$fileTips.html(this.fileInfoView.el)
        },
        _hideFileInfo: function() {
            this.fileInfoView && this.fileInfoView.close(),
            this.fileInfoView = null 
        },
        _ctrlBtnShow: function(e) {
            var i = [];
            if (e) {
                var t = e.length;
                if (1 === e.length) {
                    var s = e[0];
                    i = s.getOperations()
                } else if (e.length > 1) {
                    var l = 0;
                    i = ["download", "copy", "delete", "move", "attention", "unattention", "collect"],
                    _.each(e, function(e) {
                        e.hasRemind() && l++,
                        i = _.intersection(e.getMultiFilesOperations(), i)
                    }
                    ),
                    _.indexOf(i, "attention") > -1 && webhelper.without(i, l === t ? ["attention"] : ["unattention"])
                }
                this._ctrlCheckAllBtn(e)
            }
            this.fileOperateView.ctrlBtnShow(i, this.isShowSearchResult)
        },
        hideAllBtns: function() {
            this.fileOperateView.render()
        },
        _onResize: function() {
            var e = this.$(".no-search").hasClass("hide") ? model.setting.getFileTableHeight() - 180 : model.setting.getFileTableHeight();
            this.fileInfoView && (e -= 35),
            this.$(".file-list-wrapper").height(e),
            this.emptyView && this.emptyView.changeHeight(e - 50),
            this.$(".file-table-header").width(view.mainbox.$contentRight.width() - 20),
            this.$(".file-tips").width(view.mainbox.$contentRight.width()),
            this.$(".file-list-wrapper>ul").height(e - 1)
        },
        changeFolder: function(e) {
            this.exitHighSearch(),
            this.isShowSearchResult && this.fileSearchView.searchViewBack(),
            this._onChangeFolder(e),
            this.fileBreadView.setFolderRecord(e.id)
        },
        _onChangeFolder: function(e) {
            var i = this;
            this._onStartLoad(),
            this.$checkAll().removeClass("true"),
            this.hideAllBtns(),
            this.currentFolder.set(e.toJSON()),
            this.fileBreadView.changeBread(this.entFileList.getFolderNav(this.currentFolder.id)),
            this.collection.reset(),
            this.entFileList.getFiles(this.currentFolder.id, function() {
                i.collection.add(i.entFileList.children(i.currentFolder.id)),
                i.onFileSelect(),
                i._onStopLoad(),
                0 === i.collection.length ? i.emptyView.show() : i.emptyView.hide()
            }
            )
        },
        _onStartLoad: function() {
            this.loadingView.show()
        },
        _onStopLoad: function() {
            this.loadingView.hide()
        },
        openRecordFolder: function(e) {
            var i;
            if (i = constants.isRootFolder(e) ? model.rootEntFolder : this.entFileList.get(e))
                return i.set("checked", !1),
                void this._onChangeFolder(i);
            var t = this;
            i = new s({
                fileId: e
            }),
            i.set("diskType", constants.fileType.shareDisk),
            i.getParentFoldersAndSelfByFolder(function(e) {
                if (e == ErrorType.errorNoPermission)
                    return void noty.error(msgs.msgNoPermission);
                if (constants.isResponseError(e))
                    return void noty.alert(msgs.msgFileDeleted);
                var l = _.map(e, function(e) {
                    var t = (new s).initFromEntFolder(e);
                    return t.set("diskType", i.get("diskType")),
                    t.set("collectionType", constants.FileCollectionType.entDisk),
                    t
                }
                );
                t.entFileList.reset(),
                t.entFileList.add(l),
                t._onChangeFolder(i)
            }
            )
        },
        showForwardFile: function(e, i) {
            var t, l;
            if (t = this.entFileList.get(e),
            t && (l = this.entFileList.get(t.get("parentId"))),
            l)
                return l.set("checked", !1),
                void this._showForwardFile(l, t);
            var o = this;
            t = new s({
                fileId: e
            }),
            i && t.set("type", "folder"),
            t.getParentEntFolders(function(e) {
                if (e == ErrorType.errorNoPermission)
                    return void noty.error(msgs.msgNoPermission);
                if (constants.isResponseError(e))
                    return void noty.alert(msgs.msgFileDeleted);
                var i = _.map(e, function(e) {
                    return new s(e)
                }
                );
                o.entFileList.reset(i),
                o.entFileList.add(model.rootEntFolder),
                l = e.length ? o.entFileList.getFoldersSon() : model.rootEntFolder,
                o._showForwardFile(l, t),
                o._toggleSearchResult(!1)
            }
            )
        },
        _showForwardFile: function(e, i) {
            var t = this;
            this.$checkAll().removeClass("true"),
            this.hideAllBtns(),
            this.currentFolder.set(e.toJSON()),
            this.fileBreadView.changeBread(this.entFileList.getFolderNav(this.currentFolder.id)),
            this.collection.reset(),
            i.fetch(function() {
                t.collection.add(i),
                t.entFileList.add(i),
                i.set("checked", !0),
                t.onFileSelect()
            }
            ),
            this.fileBreadView.setFolderRecord(e.id)
        },
        scrollToFile: function(e) {
            var i = this.collection.indexOf(e);
            -1 != i && (i = i - 2 > 0 ? i - 2 : 1,
            this.$listView.scrollTop(35 * i))
        },
        _onUploadFileModal: function() {
            this.fileOperateView.uploadFileModal()
        },
        hideContextMenu: function() {
            this.$(".file-context-menu").removeClass("open")
        },
        _showHighSearch: function() {
            this.isShowSearchResult = !0,
            this._hideFileInfo(),
            this.highSearchView && this.highSearchView.close(),
            this.highSearchView = new w({
                currentFolder: this.currentFolder,
                collection: this.collection
            }),
            this.$(".high-search-container").html(this.highSearchView.el),
            this.highSearchView.on("onExitSearch", this._onExitHighSearch, this),
            this.$(".high-search-container").removeClass("hide"),
            this.$(".no-search").addClass("hide"),
            this.fileOperateView.$(".upload-btn,.create-btn").addClass("hide-important"),
            this._onResize()
        },
        _onExitHighSearch: function() {
            this.isShowSearchResult = !1,
            this.exitHighSearch(),
            this.changeFolder(this.currentFolder)
        },
        exitHighSearch: function() {
            this.$(".high-search-container").addClass("hide"),
            this.$(".no-search").removeClass("hide"),
            this.fileOperateView.$(".upload-btn,.create-btn").addClass("hide-important"),
            this._onResize()
        },
        sortByName: function() {
            this._sortByAttr("name", this.$(".file-table-header .file-name i"))
        },
        sortBySize: function() {
            this._sortByAttr("size", this.$(".file-table-header .file-size i"))
        },
        sortByTime: function() {
            this._sortByAttr("updateTime", this.$(".file-table-header .file-time i"))
        },
        _sortByAttr: function(e, i) {
            var t = this.changeOrderByIcon(e)
              , s = i.hasClass("fa-sort-asc");
            t || (i.toggleClass("fa-sort-asc", !s).toggleClass("fa-sort-desc", s),
            this.entFileList.order = {
                orderBy: e,
                descending: s
            }),
            this.isShowSearchResult || this._onChangeFolder(this.currentFolder)
        },
        changeOrderByIcon: function(e) {
            this._changeOrderByIcon(this.$(".file-table-header"), this.entFileList, e)
        },
        _changeOrderByIcon: function(e, i, s) {
            var l = e.find(".file-name i")
              , o = e.find(".file-size i")
              , n = e.find(".file-time i");
            if (log.debug(t, "orderBy: ", s, ", entFileList order: ", i.order),
            i.order.orderBy === s)
                return !1;
            switch (i.order.descending = !1,
            i.order.orderBy = s,
            s) {
            case "name":
                o.addClass("hide-force"),
                n.addClass("hide-force"),
                l.removeClass("hide-force");
                break;
            case "size":
                n.addClass("hide-force"),
                l.addClass("hide-force"),
                o.removeClass("hide-force");
                break;
            case "updateTime":
                l.addClass("hide-force"),
                o.addClass("hide-force"),
                n.removeClass("hide-force")
            }
        },
        close: function() {
            this.collectionBinder.unbind(),
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/UserSearchItem", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "li",
        className: "search-item",
        template: '<div class="name"><%= realName %>&nbsp;(<%= userName %>)</div><div class="department"><%= department %></div>',
        events: {
            dblclick: "_onSelect"
        },
        initialize: function() {
            this.addListeners(),
            this.render()
        },
        render: function() {
            return this.$el.html(_.template(this.template, {
                realName: this.model.get("realName"),
                userName: this.model.get("userName"),
                department: this.model.get("deptPath") || this.model.get("deptName")
            })),
            this
        },
        addListeners: function() {
            this.listenTo(this.model, "change", this.render)
        },
        _onSelect: function() {
            this.collection.trigger(EventType.selectUser, this.model)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/RoleUserSearchView", function(require, e, t) {
    var s = require("app/commons/models/user/UserListDTO")
      , i = require("app/commons/models/user/RoleListDTO")
      , r = require("app/website/file/views/UserSearchItem");
    t.exports = Backbone.View.extend({
        tagName: "div",
        className: "role-user-search",
        id: "roleUserSearch",
        roleBinder: void 0,
        userBinder: void 0,
        userSearchList: void 0,
        roleSearchList: void 0,
        initialize: function() {
            this._initData(),
            this._addListeners(),
            this.render()
        },
        _initData: function() {
            this.roleList = this.options.roleList,
            this.userSearchList = new s,
            this.roleSearchList = new i;
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.roleCreator);
            this.roleBinder = new Backbone.CollectionBinder(e);
            var t = new Backbone.CollectionBinder.ViewManagerFactory(this.userCreator);
            this.userBinder = new Backbone.CollectionBinder(t)
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, s, i, r) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                r = r || {},
                '<div class="role-search" style="margin-bottom:10px;"><div style="padding-left:10px;"><b><%=msgSearchRoleResult %></b></div><ul class="role-search-list"></ul></div><div class="user-search"><div style="padding-left:10px;"><b><%= msgSearchMemResult %></b></div><ul class="user-search-list"></ul></div>'
            }
            ))),
            this.roleBinder.bind(this.roleSearchList, this.$(".role-search-list")),
            this.userBinder.bind(this.userSearchList, this.$(".user-search-list")),
            this
        },
        _addListeners: function() {
            this.listenTo(this.roleSearchList, EventType.selectRole, this._onSelectRole),
            this.listenTo(this.userSearchList, EventType.selectUser, this._onSelectUser),
            this.listenTo(this.roleSearchList, "add remove", this._onSearchResultsChange),
            this.listenTo(this.userSearchList, "add remove", this._onSearchResultsChange)
        },
        doSearch: function(e) {
            var t = new RegExp(e,"gi");
            this.roleSearchList.reset(this.roleList.filter(function(e) {
                return t.test(e.get("name"))
            }
            ));
            var s = [];
            this.roleList.each(function(e) {
                e.get("users") && e.get("users").each(function(e) {
                    var i = !e.isSelf() && !e.isAdmin()
                      , r = t.test(e.get("userName")) || t.test(e.get("realName"));
                    i && r && (e.set("deptName", "-"),
                    s.push(e))
                }
                )
            }
            ),
            this.userSearchList.reset(s)
        },
        roleCreator: function(e, t) {
            return new n({
                model: e,
                collection: t
            })
        },
        userCreator: function(e, t) {
            return new r({
                model: e,
                collection: t
            })
        },
        _onSelectRole: function(e) {
            this.trigger(EventType.selectRole, e)
        },
        _onSelectUser: function(e) {
            this.trigger(EventType.selectUser, e)
        },
        _onSearchResultsChange: function() {
            this.$(".role-search").toggleClass("hide", 0 === this.roleSearchList.length),
            this.$(".user-search").toggleClass("hide", 0 === this.userSearchList.length)
        },
        close: function() {
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    });
    var n = Backbone.View.extend({
        tagName: "li",
        className: "search-item",
        template: "<div><%= name %></div>",
        events: {
            dblclick: "_onSelect"
        },
        initialize: function() {
            this.addListeners(),
            this.render()
        },
        render: function() {
            return this.$el.html(_.template(this.template, {
                name: this.model.get("name")
            })),
            this
        },
        addListeners: function() {
            this.listenTo(this.model, "change", this.render)
        },
        _onSelect: function() {
            this.collection.trigger(EventType.selectRole, this.model)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/RoleUserView", function(require, e, t) {
    var i = require("app/commons/models/user/RoleListDTO")
      , s = (require("app/commons/models/user/UserListDTO"),
    require("app/website/file/views/RoleUserSearchView"));
    t.exports = Backbone.View.extend({
        tagName: "ul",
        id: "roleListView",
        className: "role-list-view",
        collectionBinder: void 0,
        searchList: void 0,
        events: {
            "click .btn-search": "_onSearch"
        },
        initialize: function() {
            this._initData(),
            this._addListeners(),
            this.render()
        },
        _initData: function() {
            this.roleList = this.collection = new i,
            this.roleList.getRoleAndUsers();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e)
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, i, s, n) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                n = n || {},
                '<div class="search-container"><div class="input-append"><input type="text" placeholder="<%=msg540%>" name="keyword" class="input-medium keyword"><a class="btn btn-search custom-btn"><i class="icon-custom-search"></i></a></div></div><div class="result-list"></div><div class="search-results hide"></div>'
            }
            ))),
            this.collectionBinder.bind(this.collection, this.$(".result-list")),
            this._bindEnter(),
            this._createRoleUserSearch(),
            this
        },
        _createRoleUserSearch: function() {
            this.roleUserSearch = new s({
                roleList: this.roleList
            }),
            this.roleUserSearch.on(EventType.selectUser, this.onSelectUser, this),
            this.roleUserSearch.on(EventType.selectRole, this.onSelectRole, this),
            this.$(".search-results").html(this.roleUserSearch.el)
        },
        _addListeners: function() {
            this.listenTo(this.roleList, EventType.selectRole, this.onSelectRole),
            this.listenTo(this.roleList, EventType.selectUser, this.onSelectUser)
        },
        viewCreator: function(e, t) {
            return new l({
                model: e,
                collection: t
            })
        },
        _bindEnter: function() {
            var e = this;
            this.$(".input-append input.keyword").bind("keydown", "return", function(t) {
                return t.stopPropagation(),
                t.preventDefault(),
                e.$(".btn-search").click(),
                !1
            }
            )
        },
        onSelectRole: function(e) {
            this.trigger(EventType.selectRole, e)
        },
        onSelectUser: function(e) {
            this.trigger(EventType.selectUser, e)
        },
        _onSearch: function() {
            var e = $.trim(this.$(".keyword").val());
            return e ? (this.roleUserSearch.doSearch(e),
            this.$(".search-results").removeClass("hide"),
            void this.$(".result-list").addClass("hide")) : void this.cancelSearchUser()
        },
        cancelSearchUser: function() {
            this.$(".search-results").addClass("hide"),
            this.$(".result-list").removeClass("hide"),
            this.$(".keyword").val("")
        },
        close: function() {
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    });
    var n = Backbone.View.extend({
        tagName: "li",
        className: "user-item",
        template: '<a><img src="<%= icon %>" style="width:25px;"/> <%= userName %></a>',
        events: {
            dblclick: "_onSelectUser"
        },
        initialize: function() {
            this.roleList = this.options.roleList,
            this.render()
        },
        render: function() {
            var e = this;
            return this.$el.html(_.template(this.template, {
                userName: e.model.get("realName") || e.model.get("userName"),
                icon: e.model.get("icon") || ""
            })),
            this
        },
        _onSelectUser: function() {
            this.roleList.trigger(EventType.selectUser, this.model)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
      , l = Backbone.View.extend({
        tagName: "li",
        className: "role-list-item",
        template: '<div class="role-item"><a class="expand"><i class="icon-custom-tree-sub"></i></a><a class="select"><%= name %></a></div><ul class="users hide" style="margin-left:15px;"></ul>',
        collectionBinder: void 0,
        events: {
            "click .expand": "_onExpand",
            "dblclick .select": "_onSelectRole"
        },
        initialize: function() {
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator());
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.render()
        },
        render: function() {
            return this.$el.html(_.template(this.template, {
                name: this.model.get("name")
            })),
            this.collectionBinder.bind(this.model.get("users"), this.$(".users")),
            this
        },
        _onExpand: function() {
            var e = this.$(".expand").hasClass("true");
            this.$(".expand").toggleClass("true", !e),
            this.$(".users").toggleClass("hide", e)
        },
        _onSelectRole: function() {
            this.collection.trigger(EventType.selectRole, this.model),
            this.$(".expand").click()
        },
        viewCreator: function() {
            var e = this;
            return function(t) {
                return new n({
                    model: t,
                    roleList: e.collection
                })
            }
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/DeptUserTree", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "ul",
        id: "deptUserTree",
        className: "dept-user-tree ztree user-tree overflow-auto",
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
            this.$el.html(" ");
            var e = this;
            this.zTree = $.fn.zTree.init(this.$el, {
                view: {
                    showLine: !1,
                    selectedMulti: !1,
                    addDiyDom: function(t, i) {
                        e.showAvatar(i, e)
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
                check: {
                    enable: !1
                },
                callback: {
                    beforeDblClick: function(t, i) {
                        if (i)
                            if ("user" === i.type) {
                                var s = e.userList.get(i.id);
                                e.settingObj.showPath && s.set({
                                    deptPath: e.departmentList.getDeptPath(s.get("deptId"))
                                }),
                                e.trigger(EventType.selectUser, s)
                            } else if ("department" === i.type) {
                                var d = e.departmentList.get(i.id);
                                e.settingObj.showPath && d.set({
                                    deptPath: e.departmentList.getDeptPath(d.id)
                                }),
                                e.trigger(EventType.selectDept, d)
                            }
                        return !0
                    },
                    beforeExpand: function(t, i) {
                        i && "department" === i.type && e._expandDept(i.id)
                    },
                    onNodeCreated: function(t, i, s) {
                        var d = "#" + s.tId + "_a";
                        e.$el.find(d).addClass(s.type);
                        var n = "#" + s.tId + "_check";
                        if (e.$el.find(n).attr("name", s.type + "_chk"),
                        "user" == s.type && e.settingObj.hideAdmins) {
                            var r = e.userList.get(s.id);
                            r.isSecAdmin() && e.zTree.hideNode(s)
                        }
                        if ("user" == s.type && e.settingObj.hideAdmin) {
                            var r = e.userList.get(s.id);
                            r.isAdmin() && e.zTree.hideNode(s)
                        }
                        if ("user" == s.type && !e.settingObj.isShowSelf) {
                            var r = e.userList.get(s.id);
                            r.userId == cache.userId && e.zTree.hideNode(s)
                        }
                    }
                }
            }, []),
            setTimeout(function() {
                e.departmentList.length && e.addDepartmentNodes(e.departmentList)
            }
            , 100)
        },
        initSettingObj: function() {
            this.settingObj || (this.settingObj = {}),
            _.defaults(this.settingObj, {
                hideAdmins: !1,
                hideAdmin: !1,
                isShowSelf: !0
            })
        },
        showAvatar: function(e, t) {
            if ("user" === e.type) {
                var i = t.userList.get(e.id)
                  , s = t.$el.find("#" + e.tId + "_a .button")
                  , d = i.get("icon") || constants.defaultIcon
                  , n = "<img alt='avatar' src='" + d + "' >";
                s.append(n)
            }
        },
        hideUsers: function(e) {
            this.hideNodes && this.hideNodes.length && (this.zTree.showNodes(this.hideNodes),
            this.hideNodes = []),
            _.each(e, function(e) {
                var t = this.zTree.getNodeByParam("id", e);
                t && (this.zTree.hideNode(t),
                this.hideNodes.push(t))
            }
            , this)
        },
        showUsers: function() {
            var e = this.zTree.getNodesByParam("isHidden", !0);
            this.zTree.showNodes(e)
        },
        addDepartmentNodes: function(e) {
            e.each(function(t) {
                this._addDepartmentNode(e, t)
            }
            , this)
        },
        _addDepartmentNode: function(e, t) {
            if (t) {
                var i = this.zTree.getNodeByParam("id", t.id);
                if (i)
                    return i;
                var s = null ;
                t.get("parentId") && (s = this.zTree.getNodeByParam("id", t.get("parentId")),
                s || (s = this._addDepartmentNode(e, e.get(t.get("parentId")))));
                var d = this.zTree.addNodes(s, {
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
                d[0]
            }
        },
        addUserNodes: function(e) {
            _.each(e, function(e) {
                this.addUserNode(e, !0)
            }
            , this)
        },
        onAddUser: function(e) {
            this.addUserNode(e, !1)
        },
        addUserNode: function(e, t) {
            var i = e.get("deptId") ? this.zTree.getNodeByParam("id", e.get("deptId")) : null ;
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
            var t = this
              , i = this.userList.findWhere({
                deptId: e
            });
            i || this.userList.fetchDeptUsers(e, function(e) {
                t.userList.add(e),
                t.addUserNodes(e)
            }
            )
        },
        close: function() {
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/DeptUserSearchView", function(require, e, t) {
    var s = require("app/commons/models/user/UserListDTO")
      , i = require("app/commons/models/user/DepartmentListDTO")
      , n = require("app/website/file/views/UserSearchItem");
    t.exports = Backbone.View.extend({
        tagName: "div",
        className: "dept-user-search",
        id: "deptUserSearch",
        departmentBinder: void 0,
        userBinder: void 0,
        departmentList: void 0,
        userSearchList: void 0,
        deptSearchList: void 0,
        initialize: function() {
            this._initData(),
            this._addListeners(),
            this.render()
        },
        _initData: function() {
            this.departmentList = this.options.departmentList,
            this.deptSearchList = new i,
            this.userSearchList = new s;
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.departmentCreator);
            this.departmentBinder = new Backbone.CollectionBinder(e);
            var t = new Backbone.CollectionBinder.ViewManagerFactory(this.userCreator);
            this.userBinder = new Backbone.CollectionBinder(t)
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, s, i, n) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                n = n || {},
                '<div class="dept-search" style="margin-bottom:10px;"><div style="padding-left:10px;"><b><%= msgSearchDeptResult %>:</b></div><ul class="dept-search-list"></ul></div><div class="user-search"><div style="padding-left:10px;"><b><%= msgSearchMemResult %>:</b></div><ul class="user-search-list"></ul></div>'
            }
            ))),
            this.departmentBinder.bind(this.deptSearchList, this.$(".dept-search-list")),
            this.userBinder.bind(this.userSearchList, this.$(".user-search-list")),
            this
        },
        _addListeners: function() {
            this.listenTo(this.deptSearchList, EventType.selectDept, this._onSelectDept),
            this.listenTo(this.userSearchList, EventType.selectUser, this._onSelectUser),
            this.listenTo(this.deptSearchList, "add remove", this._onSearchResultsChange),
            this.listenTo(this.userSearchList, "add remove", this._onSearchResultsChange)
        },
        doSearch: function(e) {
            var t = this
              , s = new RegExp(e,"gi");
            this.userSearchList.searchUsers(e, function(e) {
                t.userSearchList.reset(e),
                t.userSearchList.each(function(e) {
                    var s = [""];
                    t.departmentList.getParentPath(e.get("deptId"), s),
                    e.set("deptPath", s.join("/"))
                }
                )
            }
            ),
            this.deptSearchList.reset(this.departmentList.filter(function(e) {
                return e.get("name").match(s)
            }
            )),
            this.deptSearchList.each(function(e) {
                var s = [""];
                t.departmentList.getParentPath(e.get("departmentId"), s),
                e.set("deptPath", s.join("/"))
            }
            )
        },
        departmentCreator: function(e, t) {
            return new r({
                model: e,
                collection: t
            })
        },
        userCreator: function(e, t) {
            return new n({
                model: e,
                collection: t
            })
        },
        _onSelectDept: function(e) {
            this.trigger(EventType.selectDept, e)
        },
        _onSelectUser: function(e) {
            this.trigger(EventType.selectUser, e)
        },
        _onSearchResultsChange: function() {
            this.$(".dept-search").toggleClass("hide", 0 === this.deptSearchList.length),
            this.$(".user-search").toggleClass("hide", 0 === this.userSearchList.length)
        },
        close: function() {
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    });
    var r = Backbone.View.extend({
        tagName: "li",
        className: "search-item",
        template: '<div class="name"><%= name %></div><div class="department"><%= department %></div>',
        events: {
            dblclick: "_onSelect"
        },
        initialize: function() {
            this.addListeners(),
            this.render()
        },
        render: function() {
            return this.$el.html(_.template(this.template, {
                name: this.model.get("name"),
                department: this.model.get("deptPath") || this.model.get("name")
            })),
            this
        },
        addListeners: function() {
            this.listenTo(this.model, "change", this.render)
        },
        _onSelect: function() {
            this.collection.trigger(EventType.selectDept, this.model)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/DeptUserView", function(require, e, t) {
    var s = require("app/website/file/views/DeptUserTree")
      , i = require("app/commons/models/user/UserListDTO")
      , r = require("app/commons/models/user/DepartmentListDTO")
      , n = require("app/website/file/views/DeptUserSearchView");
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "deptUserView",
        className: "dept-users-view",
        deptUserTree: void 0,
        deptUserSearch: void 0,
        settingObj: void 0,
        collectionBinder: void 0,
        events: {
            "click .btn-search": "_onSearch"
        },
        initialize: function() {
            this.settingObj = this.options.settingObj,
            this.settingObj = this.initSettingObj(this.options.settingObj),
            this.departmentList = new r,
            this.departmentList.fetchDepts(!1),
            this.userList = new i,
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, s, i, r) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                r = r || {},
                '<div class="search-container"><div class="input-append"><input type="text" placeholder="<%=msg540%>" name="keyword" class="input-medium keyword"><a class="btn btn-search custom-btn"><i class="icon-custom-search"></i></a></div></div><div class="search-results hide"></div><div class="tree-container"></div>'
            }
            ))),
            this._createDeptUserTree(),
            this._createDeptUserSearch(),
            this._bindEnter(),
            this
        },
        _createDeptUserTree: function() {
            this.deptUserTree = new s({
                departmentList: this.departmentList,
                userList: this.userList,
                settingObj: this.settingObj
            }),
            this.deptUserTree.on(EventType.selectUser, this.onSelectUser, this),
            this.deptUserTree.on(EventType.selectDept, this.onSelectDept, this),
            this.$(".tree-container").html(this.deptUserTree.el)
        },
        _createDeptUserSearch: function() {
            this.deptUserSearch = new n({
                departmentList: this.departmentList
            }),
            this.deptUserSearch.on(EventType.selectUser, this.onSelectUser, this),
            this.deptUserSearch.on(EventType.selectDept, this.onSelectDept, this),
            this.$(".search-results").html(this.deptUserSearch.el)
        },
        initSettingObj: function(e) {
            return _.defaults(e || {}, {
                showDeptDiyBtn: !0,
                isShowSelf: !1,
                hideAdmins: !1,
                hideAdmin: !0,
                showPath: !0
            })
        },
        _bindEnter: function() {
            var e = this;
            this.$(".input-append input.keyword").bind("keydown", "return", function(t) {
                return t.stopPropagation(),
                t.preventDefault(),
                e.$(".btn-search").click(),
                !1
            }
            )
        },
        _onSearch: function() {
            var e = $.trim(this.$(".keyword").val());
            return e ? (this.deptUserSearch.doSearch(e),
            this.$(".search-results").removeClass("hide"),
            void this.$(".tree-container").addClass("hide")) : void this.cancelSearchUser()
        },
        cancelSearchUser: function() {
            this.$(".search-results").addClass("hide"),
            this.$(".tree-container").removeClass("hide"),
            this.$(".keyword").val("")
        },
        onSelectUser: function(e) {
            this.trigger(EventType.selectUser, e)
        },
        onSelectDept: function(e) {
            e && -1 != e.get("departmentId") && this.trigger(EventType.selectDept, e)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/PermissionMemberModal", function(require, e, t) {
    var s = require("app/website/file/views/RoleUserView")
      , i = require("app/commons/models/permission/FolderPermissionList")
      , l = require("app/commons/models/user/UserListDTO")
      , n = require("app/commons/models/user/DepartmentListDTO")
      , a = require("app/website/file/views/DeptUserView");
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "permissionMemberModal",
        className: "permission-member-modal",
        collectionBinder: void 0,
        userTree: void 0,
        searchUsersView: void 0,
        deptUserView: void 0,
        roleTabView: void 0,
        departmentList: void 0,
        userList: void 0,
        selectedUserRoleList: void 0,
        settingObj: void 0,
        events: {
            "click .ok-btn": "_onSubmit",
            "click .cancel-btn": "_onCancel",
            "click .empty": "clearSelectedUsers",
            "click .role-nav": "_onShowRoleTab",
            "click .user-nav": "_onShowDeptUserTab"
        },
        initialize: function() {
            this._initData(),
            this._addListeners(),
            this.render()
        },
        _initData: function() {
            this.departmentList = new n,
            this.userList = new l,
            this.departmentList.userList = this.userList,
            this.userList.departmentList = this.departmentList,
            this.selectedUserRoleList = new i,
            this.settingObj = this.initSettingObj(this.options.settingObj);
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e)
        },
        _addListeners: function() {
            this.listenTo(this.selectedUserRoleList, "reset add remove", this._onChangeSelect)
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, s, i, l) {
                this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                l = l || {};
                var n, a, r = "", o = "function", c = this.escapeExpression;
                return r += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 class="modal-header-title"><i class="icon-custom-member-list"></i><%= msgMemberList %></h3></div><div class="modal-body"><div class="select-area half-col fl"><div class="tabbable"><ul class="nav nav-tabs"><li class="user-nav active"><a href="#userTab" data-toggle="tab" style="margin-left:0;"><%= msgMemberList %></a></li><li class="role-nav"><a href="#roleTab" data-toggle="tab"><%= msgRoleList %></a></li></ul><div class="tab-content"><div class="tab-pane active user-tab" id="userTab"><div class="dept-users"></div></div><div class="tab-pane role-tab" id="roleTab"><div class="role-list"></div></div></div></div></div><div class="result-area half-col fl"><div class="col-header"><div class="select-count fl"><%=msgSelectAlready %>(<span class="green">0</span>)</div><a class="empty fr"><%= msg876 %></a><div class="clr"></div></div><ul class="select-list hide"></ul><div class="tips"><div class="tips-title"><b><%= msg175 %></b></div><ul><li><%= msgDblClickToAdd %></li><li><%= msgNextPermission %></li></ul></div></div><div class="clr"></div></div><div class="modal-footer"><span class="btn ok-btn btn-blue">',
                (a = s.okBtnText) ? n = a.call(t, {
                    hash: {},
                    data: l
                }) : (a = t && t.okBtnText,
                n = typeof a === o ? a.call(t, {
                    hash: {},
                    data: l
                }) : a),
                r += c(n) + '</span><span class="btn cancel-btn btn-white-blue">',
                (a = s.cancelBtnText) ? n = a.call(t, {
                    hash: {},
                    data: l
                }) : (a = t && t.cancelBtnText,
                n = typeof a === o ? a.call(t, {
                    hash: {},
                    data: l
                }) : a),
                r += c(n) + "</span></div>"
            }
            ), this.settingObj)),
            this._onShowDeptUserTab(),
            this.collectionBinder.bind(this.selectedUserRoleList, this.$(".select-list")),
            this
        },
        _onShowDeptUserTab: function() {
            this.deptUserView && this.deptUserView.close(),
            this.deptUserView = new a({
                settingObj: this.settingObj,
                userList: this.userList,
                departmentList: this.departmentList
            }),
            this.deptUserView.on(EventType.selectUser, this.onSelectUser, this),
            this.deptUserView.on(EventType.selectDept, this.onSelectDept, this),
            this.$("#userTab").html(this.deptUserView.el)
        },
        _onShowRoleTab: function() {
            this.roleUserView && this.roleUserView.close(),
            this.roleUserView = new s({
                departmentList: this.departmentList,
                userList: this.userList
            }),
            this.$(".role-list").html(this.roleUserView.el),
            this.roleUserView.on(EventType.selectRole, this.onSelectRole, this),
            this.roleUserView.on(EventType.selectUser, this.onSelectUser, this)
        },
        _onChangeSelect: function() {
            this.$(".select-count .green").html(this.selectedUserRoleList.length),
            this.$(".tips").toggleClass("hide", 0 !== this.selectedUserRoleList.length),
            this.$(".select-list").toggleClass("hide", 0 === this.selectedUserRoleList.length)
        },
        initSettingObj: function(e) {
            return _.defaults(e || {}, {
                headerText: msgs.msg239,
                okBtnText: msgs.msgNextStep,
                cancelBtnText: msgs.msg87
            })
        },
        viewCreator: function(e, t) {
            return new r({
                model: e,
                collection: t
            })
        },
        clearSelectedUsers: function() {
            this.selectedUserRoleList.reset()
        },
        onSelectUser: function(e) {
            var t = this.selectedUserRoleList.findWhere({
                permissionType: constants.permissionType.user,
                targetId: e.get("userId")
            });
            t && this.selectedUserRoleList.remove(t),
            this.selectedUserRoleList.add({
                permissionType: constants.permissionType.user,
                targetId: e.get("userId"),
                targetName: e.get("realName") || e.get("userName"),
                targetPath: e.get("deptPath")
            })
        },
        onSelectDept: function(e) {
            var t = this
              , s = t.selectedUserRoleList.findWhere({
                permissionType: constants.permissionType.department,
                targetId: e.get("departmentId")
            });
            s && t.selectedUserRoleList.remove(s),
            t.selectedUserRoleList.add({
                permissionType: constants.permissionType.department,
                targetId: e.get("departmentId"),
                targetName: e.get("name"),
                targetPath: e.get("deptPath")
            })
        },
        onSelectRole: function(e) {
            var t = this.selectedUserRoleList.findWhere({
                permissionType: constants.permissionType.group,
                targetId: e.get("roleId")
            });
            t && this.selectedUserRoleList.remove(t),
            this.selectedUserRoleList.add({
                permissionType: constants.permissionType.group,
                targetId: e.get("roleId"),
                targetName: e.get("name")
            })
        },
        _onSubmit: function() {
            this.trigger(EventType.submit, this.selectedUserRoleList)
        },
        _onCancel: function() {
            this.trigger(EventType.cancel)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    });
    var r = Backbone.View.extend({
        tagName: "li",
        template: '<div class="user-role inline-block"><b class="name"><%=name%></b>&nbsp;(<%=permissionType%>)</div><div class="operation inline-block"><a class="delete"><i class="icon-custom-remove"></i></a></div>',
        selectedUserList: void 0,
        newSelectedUserList: void 0,
        events: {
            "click .delete": "_onDelete"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            var e = this;
            return this.$el.html(_.template(this.template, {
                name: e.model.get("targetName"),
                permissionType: e.model.convertPermissionType()
            })),
            this
        },
        _onDelete: function() {
            this.collection.remove(this.model)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/FolderPermissionItem", function(require, e, s) {
    s.exports = Backbone.View.extend({
        tagName: "li",
        className: "folder-permission-item",
        events: {
            "click .delete": "_onDelete",
            "click .edit": "_onEdit"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, s, t, i, l) {
                this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                l = l || {};
                var a, o, n = "", r = "function", d = this.escapeExpression;
                return n += '<ul class="list-item"><li class="type">',
                (o = t.permissionType) ? a = o.call(s, {
                    hash: {},
                    data: l
                }) : (o = s && s.permissionType,
                a = typeof o === r ? o.call(s, {
                    hash: {},
                    data: l
                }) : o),
                n += d(a) + '</li><li class="border no-see"></li><li class="name">',
                (o = t.targetName) ? a = o.call(s, {
                    hash: {},
                    data: l
                }) : (o = s && s.targetName,
                a = typeof o === r ? o.call(s, {
                    hash: {},
                    data: l
                }) : o),
                n += d(a) + '</li><li class="border no-see"></li><li class="department">',
                (o = t.targetPath) ? a = o.call(s, {
                    hash: {},
                    data: l
                }) : (o = s && s.targetPath,
                a = typeof o === r ? o.call(s, {
                    hash: {},
                    data: l
                }) : o),
                n += d(a) + '</li><li class="border no-see"></li><li class="permission">',
                (o = t.permission) ? a = o.call(s, {
                    hash: {},
                    data: l
                }) : (o = s && s.permission,
                a = typeof o === r ? o.call(s, {
                    hash: {},
                    data: l
                }) : o),
                n += d(a) + '</li><li class="border no-see"></li><li class="operation"><a class="edit"><%= msg264 %></a><span class="pipe">|</span><a class="delete"><%= msg156 %></a></li></ul>'
            }
            ), _.extend(this.model.toJSON(), {
                folderName: this.model.get("folderName") && constants.dealEntSpecialFolder(this.model.get("folderName")),
                folderPath: this.model.get("folderPath") && constants.dealEntSpecialPath(this.model.get("folderPath")),
                permission: this.model.getPermissionStr(),
                permissionType: this.model.convertPermissionType(),
                isUserPermission: this.model.isUserPermission()
            }))),
            this
        },
        _onEdit: function() {
            this.collection.trigger(EventType.edit, this.model)
        },
        _onDelete: function() {
            this.model.set("permission", {
                read: !1,
                write: !1,
                "delete": !1,
                upload: !1,
                download: !1,
                share: !1,
                local: !1,
                manage: !1
            }),
            this.close()
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/FolderPermissionWindow", function(require, e, s) {
    var i = require("app/commons/models/permission/PermissionDTO")
      , o = require("app/website/file/views/PermissionMemberModal")
      , t = require("app/commons/uikit/permission/PermissionSelectModal")
      , l = require("app/commons/models/permission/FolderPermissionList")
      , n = require("app/website/file/views/FolderPermissionItem");
    s.exports = Backbone.View.extend({
        tagName: "div",
        className: "modal fade hide modal-window folder-permission-window",
        collectionBinder: void 0,
        permissionMemberModal: void 0,
        permissionSelectModal: void 0,
        $folderPermission: void 0,
        $permissionMemberModal: void 0,
        $permissionSelectModal: void 0,
        folderId: void 0,
        settingObj: void 0,
        selected: void 0,
        selectedUserRoleList: void 0,
        events: {
            "click .close": "close",
            "click .selectUsersBtn": "showMembersSelect",
            "click .modal-footer .btn-ok": "submitFolderPermission",
            "click .modal-footer .btn-clear": "clearFolderPermission",
            "click .close-window": "close"
        },
        initialize: function() {
            this.addListeners(),
            this.folderId = this.options.folderId,
            this.selectedUserRoleList = new l;
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, s, i, o, t) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                t = t || {},
                '<div id="folderPermission"><div class="modal-header"><button type="button" class="close close-window" data-dismiss="modal" aria-hidden="true" id="closeModal">&times;</button><h3 class="modal-header-title"><i class="icon-custom-modal-folder"></i><%=msg743%><span name="file-name"></span></h3></div><div class="modal-body"><div><div class="permission-tips"><%= msgSelectToAuthorize %>:&nbsp;&nbsp;<span class="btn btn-orange selectUsersBtn"><%= msgAddFilePermission %></span></div><div class="list-table list"><ul class="list-header list-item"><li class="type"><%= msgType %></li><li class="border"></li><li class="name"><%= msg681 %></li><li class="border"></li><li class="department"><%= msg343 %></li><li class="border"></li><li class="permission"><%= msgPermission %></li><li class="border"></li><li class="operation"><%= msg61 %></li></ul><ul class="list-body folder-permission-list"></ul></div></div></div><div class="modal-footer" style="border:0;"><div class="fl" style="width:50%"><span class="btn btn-white-blue btn-clear fl" style="margin-top: 12px;"><%=msg750%></span></div><div class="fr" style="width:50%;"><span class="btn btn-blue btn-ok"><%=msg86%></span><span class="btn  btn-white-blue btn-cancel close-window"><%=msg87%></span></div></div></div>'
            }
            ))),
            this.$folderPermission = this.$("#folderPermission"),
            this.collectionBinder.bind(this.collection, this.$(".folder-permission-list")),
            this.$el.modal({
                keyboard: !0,
                backdrop: "static"
            }),
            this
        },
        onChangeHeight: function() {},
        viewCreator: function(e, s) {
            return new n({
                model: e,
                collection: s
            })
        },
        addListeners: function() {
            this.listenTo(this.collection, EventType.edit, this.editFolderPermission)
        },
        showMembersSelect: function() {
            this.permissionMemberModal && this.permissionMemberModal.close(),
            this.settingObj = {
                showDeptDiyBtn: !0,
                showPath: !0
            },
            this.permissionMemberModal = new o({
                settingObj: this.settingObj
            }),
            this.$el.append(this.permissionMemberModal.el),
            this.$permissionMemberModal = this.$("#permissionMemberModal"),
            this.permissionMemberModal.on(EventType.submit, this.showPermission, this),
            this.permissionMemberModal.on(EventType.cancel, this.showFolderPermission, this),
            this.$folderPermission.addClass("hide"),
            this.$permissionMemberModal.removeClass("hide")
        },
        showFolderPermission: function() {
            this.$permissionMemberModal.addClass("hide"),
            this.$folderPermission.removeClass("hide")
        },
        showPermission: function(e) {
            if (!e.length)
                return void noty.error(msgs.msgNoUser);
            this.selectedUserRoleList.reset(e.toJSON()),
            this.permissionSelectModal && this.permissionSelectModal.close();
            var s = new i;
            this.permissionSelectModal = new t({
                model: s
            }),
            this.$el.append(this.permissionSelectModal.el),
            this.$permissionSelectModal = this.$("#permissionSelectModal"),
            this.permissionSelectModal.on(EventType.selectPermissionOk, this.preSubmitPermission, this),
            this.permissionSelectModal.on(EventType.selectPermissionCancel, this.cancelFolderPermission, this),
            this.$folderPermission.addClass("hide"),
            this.$permissionMemberModal && this.$permissionMemberModal.addClass("hide"),
            this.$permissionSelectModal.removeClass("hide")
        },
        cancelFolderPermission: function() {
            this.selectedUserRoleList.reset(),
            this.$permissionSelectModal.addClass("hide"),
            this.$folderPermission.removeClass("hide")
        },
        preSubmitPermission: function(e) {
            var s = this;
            noty.confirm(msgs.msgEditPermConfirm, function(i) {
                if (!i)
                    return !1;
                var o = e.permission
                  , t = e.editPermission;
                if (t) {
                    t.set({
                        permission: o.toJSON()
                    });
                    var l = s.collection.findWhere({
                        targetId: t.get("targetId"),
                        permissionType: t.get("permissionType")
                    });
                    return l && s.collection.remove(l),
                    s.collection.add(t),
                    void s.cancelFolderPermission()
                }
                s.selectedUserRoleList.each(function(e) {
                    e.set({
                        permission: o.toJSON()
                    });
                    var i = s.collection.findWhere({
                        permissionType: e.get("permissionType"),
                        targetId: e.get("targetId")
                    });
                    i && s.collection.remove(i),
                    s.collection.add(e),
                    s.cancelFolderPermission()
                }
                )
            }
            )
        },
        submitFolderPermission: function() {
            var e = this;
            this.collection.updateFolderPermissions(this.folderId, function(s) {
                constants.isResponseOK(s) ? (noty.success(msgs.msgPermissionSuccess),
                e.close()) : noty.error(msgs.msgPermissionFail)
            }
            )
        },
        clearFolderPermission: function() {
            this.collection.each(function(e) {
                e.set("permission", {
                    read: !1,
                    write: !1,
                    "delete": !1,
                    upload: !1,
                    download: !1,
                    share: !1,
                    local: !1,
                    manage: !1
                })
            }
            ),
            this.$(".folder-permission-list").html("")
        },
        editFolderPermission: function(e) {
            this.permissionSelectModal && this.permissionSelectModal.close();
            var s = new i(e.get("permission"));
            this.permissionSelectModal = new t({
                model: s,
                passInfo: {
                    editPermission: e
                }
            }),
            this.$el.append(this.permissionSelectModal.el),
            this.permissionSelectModal.on(EventType.selectPermissionOk, this.preSubmitPermission, this),
            this.permissionSelectModal.on(EventType.selectPermissionCancel, this.cancelFolderPermission, this),
            this.$permissionSelectModal = this.$("#permissionSelectModal"),
            this.$folderPermission.addClass("hide"),
            this.$permissionMemberModal && this.$permissionMemberModal.addClass("hide"),
            this.$permissionSelectModal.removeClass("hide")
        },
        close: function() {
            this.$el.modal("hide"),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/EntDiskRouter", function(require, e, o) {
    var i = require("app/commons/models/file/EntFileDTO")
      , t = require("app/website/file/views/EntFileTable")
      , n = require("app/commons/models/file/ShareLinkDTO")
      , s = require("app/commons/models/file/MultiFileDownloadDTO")
      , r = require("app/commons/uikit/file/SetSyncWindow")
      , l = require("app/commons/models/file/SyncFolderDTO")
      , d = require("app/commons/uikit/sharelink/ShareLinkView")
      , a = require("app/commons/uikit/file/FolderTreeWindow")
      , c = require("app/commons/uikit/file/MultiFileDownloadView")
      , f = require("app/website/file/views/FolderPermissionWindow");
    o.exports = Backbone.Router.extend({
        routes: {
            "sharedisk/openfolder/:folderId": "onOpenEntFolder",
            "sharedisk/openfile/:fileId": "onOpenEntFile",
            "sharedisk/lock/:fileId": "lockFile",
            "sharedisk/unlock/:fileId": "unlockFile",
            "sharedisk/download/:fileId": "downloadFile",
            "sharedisk/share/:fileId": "shareFile",
            "sharedisk/editshare/:fileId": "shareFile",
            "sharedisk/delshare/:fileId": "onDelShareFile",
            "sharedisk/attention/:fileId": "onAttentionFile",
            "sharedisk/delattention/:fileId": "onDelAttentionFile",
            "sharedisk/permission/:fileId": "onSetPermission",
            "sharedisk/move/:fileId": "moveFile",
            "sharedisk/copy/:fileId": "onEntDiskCopy",
            "sharedisk/delete/:fileId": "deleteFile",
            "sharedisk/sync/:folderId": "_onSyncSetting",
            "sharedisk/forwardfile/:fileId": "onFileForward",
            "sharedisk/forwardfolder/:folderId": "onFolderForward",
            "recycle/sharedisk/restore/:fileId": "_onRestoreFile",
            "recycle/sharedisk/delete/:fileId": "_onDeleteFileFromRecycle",
            "sharedisk/not/read": "_onNotHaveReadTip"
        },
        _onNotHaveReadTip: function() {
            noty.error(msgs.msgErrorNotHaveRead),
            this._navClose()
        },
        onOpenEntFolder: function(e) {
            var o, i = this;
            return this._ensureEntFileTable(),
            (o = constants.isRootFolder(e) ? model.rootEntFolder : collection.entFileList.get(e)) ? (o.set("checked", !1),
            view.fileTable.changeFolder(o),
            void this._navClose()) : void collection.entFileList.fetchAncestor(e, function(t) {
                return t === ErrorType.errorNoPermission ? void noty.error(msgs.msgNoPermission) : constants.isResponseError(t) ? void noty.alert(msgs.msgFileDeleted) : (o = collection.entFileList.get(e),
                o.set("checked", !1),
                view.fileTable.changeFolder(o),
                void i._navClose())
            }
            )
        },
        onForwardEntFolder: function(e) {
            this._ensureEntFileTable(),
            view.fileTable.openRecordFolder(e)
        },
        _ensureEntFileTable: function() {
            view.fileLeftView.activeLink(".left-nav-ent"),
            view.mainbox.isContentViewShow(view.fileTable) || (view.fileTable && view.fileTable.close(),
            collection.currentFileList = new EntFileListDTO,
            view.fileTable = new t({
                collection: collection.currentFileList,
                entFileList: collection.entFileList
            }),
            view.mainbox.updateContentRight(view.fileTable))
        },
        onOpenEntFile: function(e) {
            var o = collection.entFileList.get(e);
            o && this.doShowFile(o),
            this._navClose()
        },
        doShowFile: function(e) {
            return constants.isPreviewSupport(e.get("type")) ? void e.convertToViewFile(function(e, o) {
                e ? noty.error(msgs.msgFileTransterFail) : noty.success(constants.isResOK(o.msg) ? msgs.msgFileDealComplete : msgs.msgFileDealing)
            }
            ) : (noty.alert(msgs.msgReadUnsupport),
            !1)
        },
        onIpadViewPdf: function(e) {
            return constants.isPreviewSupport(e.get("type")) ? void e.viewFileAsPdf(function(e, o) {
                e ? noty.error(msgs.msgFileTransterFail) : noty.success(constants.isResOK(o.msg) ? msgs.msgFileDealComplete : msgs.msgFileDealing)
            }
            ) : (noty.alert(msgs.msgReadUnsupport),
            !1)
        },
        lockFile: function(e) {
            this.doLockFile(this.getFileById(e)),
            this._navClose()
        },
        unlockFile: function(e) {
            this.doUnLockFile(this.getFileById(e))
        },
        doUnLockFile: function(e) {
            e.unlockEntFile(function(o) {
                if (constants.isResponseOK(o))
                    model.messageEvent.trigger(EventType.updateFile, e);
                else
                    switch (o) {
                    case "errorFileLocked":
                        noty.alert(msgs.msgUnlockFail);
                        break;
                    default:
                        noty.alert(msgs.msgUnlockFail)
                    }
            }
            )
        },
        doLockFile: function(e) {
            e.lockEntFile(function(o) {
                constants.isResponseOK(o) ? model.messageEvent.trigger(EventType.updateFile, e) : o == ErrorType.errorNoPermission ? noty.error(msgs.msgNoPermission) : noty.alert(msgs.msgLockFail)
            }
            )
        },
        downloadFile: function(e) {
            var o = this.getFileById(e);
            o.isFolder() ? this.downloadMultiFilesOrFolder("sharedisk", [o]) : this.downloadSingleFile(o),
            this._navClose()
        },
        downloadMultiFilesOrFolder: function(e, o) {
            if (e == constants.fileType.onlineDisk && !model.currentUser.get("diskEnabled"))
                return void model.messageEvent.trigger(EventType.personDiskDisabled);
            var i = new s;
            i.initFromFiles(o, view.fileTable.currentFolder),
            view.mutiFileDownloadView && view.mutiFileDownloadView.close(),
            view.mutiFileDownloadView = new c({
                model: i
            })
        },
        downloadSingleFile: function(e) {
            return constants.isInvalidFile(e.get("name")) ? (noty.error(msgs.msgDownloadFileError),
            !1) : void constants.executeFileDownload(e)
        },
        onAttentionFile: function(e) {
            this.doAttentionFile(this.getFileById(e))
        },
        doAttentionFile: function(e) {
            var o = _.isArray(e) ? e : [e];
            if (1 === o.length)
                return o[0].remindShareFile(this._remindFileCallback(o)),
                !1;
            var i = _.groupBy(o, function(e) {
                return e.isFolder() ? "folders" : "files"
            }
            )
              , t = i.folders && _.map(i.folders, function(e) {
                return e.id
            }
            )
              , n = i.files && _.map(i.files, function(e) {
                return e.id
            }
            )
              , s = {
                entId: cache.entId,
                userId: cache.userId
            };
            t && _.extend(s, {
                folderIdList: t
            }),
            n && _.extend(s, {
                fileIdList: n
            }),
            resturl.remindEntFolderAndFile(s, this._remindFileCallback(o))
        },
        _remindFileCallback: function(e) {
            return function(o) {
                switch (o) {
                case ErrorType.OK_MARK:
                    _.each(e, function(e) {
                        e.set("remind", !0)
                    }
                    ),
                    model.messageEvent.trigger(EventType.updateFile, e);
                    break;
                case ErrorType.errorFolderDeleted:
                    noty.alert(msgs.msgFolderDeleted);
                    break;
                case ErrorType.errorFileDeleted:
                    noty.alert(msgs.msgFileDeleted);
                    break;
                case ErrorType.errorNoPermission:
                    noty.error(msgs.msgNoPermission);
                    break;
                default:
                    noty.alert(msgs.msgAttentionFail)
                }
            }
        },
        onDelAttentionFile: function(e) {
            this.doDelAttentionFile([this.getFileById(e)])
        },
        doDelAttentionFile: function(e) {
            var o = _.isArray(e) ? e : [e];
            if (1 === o.length)
                return o[0].deleteRemindShareFile(this._deleteRemindFileCallback(o)),
                !1;
            var i, t, n;
            i = _.groupBy(o, function(e) {
                return e.isFolder() ? "folders" : "files"
            }
            ),
            t = i.folders && _.map(i.folders, function(e) {
                return e.id
            }
            ),
            n = i.files && _.map(i.files, function(e) {
                return e.id
            }
            );
            var s = {
                entId: cache.entId,
                userId: cache.userId
            };
            t && _.extend(s, {
                folderIdList: t
            }),
            n && _.extend(s, {
                fileIdList: n
            }),
            resturl.deleteRemindEntFolderAndFile(s, this._deleteRemindFileCallback(o))
        },
        _deleteRemindFileCallback: function(e) {
            return function(o) {
                constants.isResponseOK(o) ? (_.each(e, function(e) {
                    e.set("remind", !1)
                }
                ),
                model.messageEvent.trigger(EventType.updateFile, e)) : noty.alert(msgs.msgUnAttentionFail)
            }
        },
        shareFile: function(e) {
            var o = this.getFileById(e);
            if (o.get("shareLinkId")) {
                var i = new n({
                    linkId: o.get("shareLinkId"),
                    file: o.toJSON()
                });
                i.fetch(function() {
                    view.shareLinkView && view.shareLinkView.close(),
                    view.shareLinkView = new d({
                        model: i
                    })
                }
                )
            } else {
                var i = new n({
                    fileId: o.get("fileId"),
                    file: o.toJSON(),
                    type: o.hasPermission("download") ? constants.shareType.download : constants.shareType.preview
                });
                i.createLink(function(e) {
                    e ? noty.error(e) : (o.set("shareLinkId", i.id),
                    view.shareLinkView && view.shareLinkView.close(),
                    view.shareLinkView = new d({
                        model: i
                    }))
                }
                )
            }
            this.navigate("nav/close", !0)
        },
        onSetPermission: function(e) {
            var o = this.getFileById(e);
            o.fetchUserAndRolePermission(this.fetchPermissionCallback(e)),
            this._navClose()
        },
        fetchPermissionCallback: function(e) {
            return function(o, i) {
                o ? noty.error(msgs.msgServerError) : view.folderPermissionView = new f({
                    folderId: e,
                    collection: i
                })
            }
        },
        moveFile: function(e) {
            var o = this.getFileById(e);
            return constants.isSpecialFolder(o) ? void noty.alert(o.get("name") + msgs.msgSysMoveForbidden) : (this.doMoveFile([o]),
            void this._navClose())
        },
        doMoveFile: function(e) {
            view.folderTreeWindow && view.folderTreeWindow.close(),
            view.folderTreeWindow = new a({
                settingObj: {
                    isEntDisk: !0,
                    showCheckBox: !1
                },
                passInfo: e
            }),
            view.folderTreeWindow.folderTreeModal.on(EventType.selectFolders, this.doAfterSelectDestFolder, this),
            view.folderTreeWindow.folderTreeModal.on(EventType.cancelSelectFolders, this.closeFolderTreeModal, this)
        },
        closeFolderTreeModal: function() {
            view.folderTreeWindow.$el.modal("hide")
        },
        doAfterSelectDestFolder: function(e) {
            var o = e.passInfo
              , i = e.destFolder;
            if (!i)
                return noty.alert(msgs.msgMoveNoDest),
                !1;
            if (i.isRootFolder())
                return noty.alert(msgs.msgMoveToRootFolder),
                !1;
            var t = _.some(o, function(e) {
                return !e.isFolder()
            }
            );
            if (t && constants.isRootFolder(i.id))
                return noty.alert(msgs.msgFileRoot),
                !1;
            this.closeFolderTreeModal();
            var n = 1 === o.length ? o[0].get("parentId") : model.currentFolder.id;
            if (i.id === n)
                return noty.alert(msgs.msgMoveSameDirError),
                !1;
            if (1 === o.length) {
                var s = o[0];
                if (s.isFolder() && s.id === i.id)
                    return noty.alert(msgs.msgMoveToSub),
                    !1;
                s.move(i, this._moveCallback(i, o))
            } else
                this._moveMultiFiles(i, o)
        },
        _moveMultiFiles: function(e, o) {
            var i = _.groupBy(o, function(e) {
                return e.isFolder() ? "folders" : "files"
            }
            )
              , t = _.map(i.files, function(e) {
                return e.asFileAndFolderListParam()
            }
            )
              , n = _.map(i.folders, function(e) {
                return e.asFileAndFolderListParam()
            }
            )
              , s = {
                entId: cache.entId,
                userId: cache.userId,
                toFolderId: e.isRootFolder() ? null  : e.get("fileId"),
                fileList: t,
                folderList: n
            };
            resturl.moveEntFolderAndFile(s, this._moveCallback(e, o))
        },
        _moveCallback: function(e, o) {
            return function(e) {
                return constants.isResponseOK(e) ? (collection.entFileList.remove(o),
                collection.currentFileList.remove(o),
                collection.currentFileList.trigger(EventType.checkChange),
                void noty.success(msgs.msgMoveSuccess)) : void noty.error(ErrorType.moveFileError(e))
            }
        },
        onEntDiskCopy: function(e) {
            var o = this.getFileById(e);
            this.doCopyFiles([o]),
            this._navClose()
        },
        doCopyFiles: function(e) {
            view.folderTreeWindow && view.folderTreeWindow.close(),
            view.folderTreeWindow = new a({
                settingObj: {
                    isEntDisk: !0,
                    showCheckBox: !1
                },
                passInfo: e
            }),
            view.folderTreeWindow.folderTreeModal.on(EventType.selectFolders, this.doAfterSelectCopyToFolder(), this),
            view.folderTreeWindow.folderTreeModal.on(EventType.cancelSelectFolders, this.closeFolderTreeModal, this)
        },
        doAfterSelectCopyToFolder: function() {
            var e = this;
            return function(o) {
                var i = o.passInfo
                  , t = o.destFolder;
                return t ? t.hasPermission("write") ? t.id == i[0].get("parentId") ? (noty.alert(msgs.msgCopyToParent),
                !1) : constants.isRootFolder(t.id) ? (noty.alert(msgs.msgFileRoot),
                !1) : (e._doDiskCopy(i, t),
                void e.closeFolderTreeModal()) : (noty.error(msgs.msgNoPermission),
                !1) : (noty.alert(msgs.msgNoFolder),
                !1)
            }
        },
        _doDiskCopy: function(e, o) {
            var i = _.extend(constants.getFileFolderIds(e), {
                type: constants.fileType.shareDisk
            });
            resturl.entDiskCopy(_.extend(i, {
                entId: cache.entId,
                userId: cache.userId,
                folderId: o.get("fileId")
            }), {
                timeout: 6e4
            }, function(e) {
                constants.isResponseOK(e) ? noty.success(msgs.msgFileCopySuccess) : noty.alert(ErrorType.entDiskCopyError(e))
            }
            )
        },
        _onFileCollect: function(e) {
            var o = this.getFileById(e);
            this.collectFiles([o]),
            this._navClose()
        },
        collectFiles: function(e) {
            view.folderTreeWindow && view.folderTreeWindow.close(),
            view.folderTreeWindow = new a({
                settingObj: {
                    isEntDisk: !1,
                    showCheckBox: !1
                },
                passInfo: e
            }),
            view.folderTreeWindow.folderTreeModal.on(EventType.selectFolders, this.doCollectAfterSelect(), this),
            view.folderTreeWindow.folderTreeModal.on(EventType.cancelSelectFolders, this.closeFolderTreeModal, this)
        },
        doCollectAfterSelect: function() {
            var e = this;
            return function(o) {
                var i = o.passInfo
                  , t = o.destFolder;
                return t ? constants.isRootFolder(t.id) ? (noty.alert(msgs.msgFileRoot),
                !1) : (e._doCollectFiles(i, t),
                void e.closeFolderTreeModal()) : (noty.alert(msgs.msgNoFolder),
                !1)
            }
        },
        _doCollectFiles: function(e, o) {
            var i = {
                folderId: o.get("fileId"),
                srcType: constants.fileType.shareDisk,
                destType: constants.fileType.onlineDisk
            };
            AdminRest.copyFiles.post(_.extend(i, constants.getFileFolderIds(e))).then(function() {
                noty.success(msgs.msgCollectSuccess)
            }
            , function(e) {
                noty.alert(ErrorType.entDiskCopyError(e))
            }
            )
        },
        createFolder: function(e, o) {
            if (e.get("parentId") === constants.rootFolderId.entDisk && webhelper.without(constants.personSystemFolderNames, [e.get("name")]))
                return noty.alert(msgs.msgFolderNameError),
                !1;
            var t = new i(e._asCreateFolderParam());
            t.createFolder(function(e) {
                constants.isResError(e) ? noty.error(ErrorType.createFolderError(e)) : collection.currentFileList.unshift(new i(e)),
                o && o(e)
            }
            )
        },
        deleteFile: function(e) {
            var o = this;
            noty.confirm("文件将被删除到回收站中, 确定删除吗?", function(i) {
                if (!i)
                    return !1;
                var t = o.getFileById(e);
                return constants.isSpecialFolder(t) ? void noty.alert(t.get("name") + msgs.msgSysDelForbidden) : void o.doDeleteFile([t])
            }
            ),
            this._navClose()
        },
        doDeleteFile: function(e) {
            var o = this
              , i = _.filter(e, function(e) {
                return constants.isSpecialFolder(e)
            }
            );
            return i.length ? (noty.alert(i[0].get("name") + msgs.msgSysDelForbidden),
            !1) : (1 === e.length ? e[0].deleteToRecycle(o.deleteCallback(e)) : o.deleteMutilFiles(e),
            void this._navClose())
        },
        deleteCallback: function(e) {
            return function(o) {
                return o == ErrorType.errorPersonalDiskDisabled ? void model.messageEvent.trigger(EventType.personDiskDisabled) : constants.isResponseError(o) ? void noty.error(ErrorType.showDeleteFileError(o)) : void _.each(e, function(e) {
                    e.set("checked", !1),
                    collection.currentFileList.remove(e)
                }
                )
            }
        },
        deleteMutilFiles: function(e) {
            var o = _.groupBy(e, function(e) {
                return e.isFolder() ? "folders" : "files"
            }
            )
              , i = _.map(o.files, function(e) {
                return e.asFileAndFolderListParam()
            }
            )
              , t = _.map(o.folders, function(e) {
                return e.asFileAndFolderListParam()
            }
            )
              , n = {
                entId: cache.entId,
                userId: cache.userId,
                folderList: t,
                fileList: i
            };
            resturl.deleteEntFolderAndFileToRecycle(n, {
                timeout: 6e4
            }, this.deleteCallback(e))
        },
        getFileById: function(e) {
            return _.isObject(e) ? e : collection.currentFileList.get(e)
        },
        onFileForward: function(e) {
            this._ensureEntFileTable(),
            view.fileTable.showForwardFile(e, !1)
        },
        onFolderForward: function(e) {
            this._ensureEntFileTable(),
            view.fileTable.showForwardFile(e, !0)
        },
        _onRestoreFile: function(e) {
            view.recycleView.restoreFile(!0, e),
            this.navigate("nav/close", !0)
        },
        _onDeleteFileFromRecycle: function(e) {
            view.recycleView.deleteFile(!0, e),
            this.navigate("nav/close", !0)
        },
        _onSyncSetting: function(e) {
            this.doSyncSetting(this.getFileById(e)),
            this.navigate("nav/close", !0)
        },
        doSyncSetting: function(e) {
            view.setSyncWindow && view.setSyncWindow.close();
            var o = new l({
                folderId: e.get("fileId"),
                folderName: e.get("name"),
                folderPath: e.get("path")
            });
            o.getSyncFolderInfo(function(e) {
                return constants.isResponseError(e) ? void noty.error(msgs.msgServerError) : void (view.setSyncWindow = new r({
                    syncFolder: o,
                    settingObj: {
                        isView: !0
                    }
                }))
            }
            )
        },
        _navClose: function() {
            router.approuter.navigate("nav/close", !0)
        }
    })
}
);
;define("app/website/file/views/PersonFileItem", function(require, e, a) {
    var l = require("app/website/file/views/FileLabelItem")
      , t = require("app/website/file/models/LabelList");
    a.exports = Backbone.View.extend({
        tagName: "li",
        className: "entFileItem markable",
        labelsBinder: void 0,
        events: {
            "click .del-attention-btn": "_onDelRemind",
            "click .checkbox-sprite": "_multiSelectFile",
            "click ": "_toggleSelectFile",
            "blur .cs-rename-file  input": "_onExitRename"
        },
        initialize: function() {
            this.labelList = new t(this.model.get("labels"));
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.labelCreator);
            this.labelsBinder = new Backbone.CollectionBinder(e),
            this._addListeners()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, a, l, t, i) {
                function s() {
                    return "show-path"
                }
                function n() {
                    return " hide "
                }
                function o() {
                    return "hide-important"
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                l = this.merge(l, e.helpers),
                i = i || {};
                var c, h, d = "", r = this, m = "function", f = this.escapeExpression;
                return d += "<ul class='each-file-item ",
                c = l["if"].call(a, a && a.searchMode, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(1, s, i),
                    data: i
                }),
                (c || 0 === c) && (d += c),
                d += '\'><li class="file-check"><span class=\'checkbox-sprite\'></span></li><li class="pipe"></li><li class="file-name"><div class="inline-block icon"><a href="',
                (h = l.viewUrl) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.viewUrl,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" class="file-name" name="file-name" title="',
                (h = l.name) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.name,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + "\"><i name='file-icon' class=\"file-icon-medium ",
                (h = l.icon) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.icon,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" href="',
                (h = l.viewUrl) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.viewUrl,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '"></i></a></div><div class="inline-block info"><div style="line-height: 20px;" class="name"><a href="',
                (h = l.viewUrl) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.viewUrl,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" class="file-name" name="file-name" title="',
                (h = l.name) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.name,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '">',
                (h = l.name) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.name,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '</a><div class="cs-rename-file hide-force"><input type="text" value="',
                (h = l.name) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.name,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" style="margin-bottom: 1px" maxlength="60"/></span></div></div><div style="line-height: 20px;" class="marks"><a class="set-mark" href="#file/mark/',
                (h = l.fileId) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '"><i class="icon-custom-mark"></i></a><div class="label-list inline-block"></div></div></div></li><li class="pipe"></li><li class="file-status"><a class="btn btn-link file-icon-comment hide-force" href="#file/comment/',
                (h = l.fileId) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '"><i class="icon-custom-comment"></i></a><a class="btn btn-link file-icon-delshare ',
                c = l.unless.call(a, a && a.isLink, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(3, n, i),
                    data: i
                }),
                (c || 0 === c) && (d += c),
                d += '" href="#sharedisk/share/',
                (h = l.fileId) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" title="<%= msg262 %>"><i class="icon-custom-share"></i></a><a class="btn btn-link file-icon-convert ',
                c = l.unless.call(a, a && a.isConverting, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(3, n, i),
                    data: i
                }),
                (c || 0 === c) && (d += c),
                d += '" href="###"title="<%=msg598%>"><i class="fa fa-spinner fa-spin" name="icon-spin"></i></a></li><li class="pipe"></li><li class="file-size"><span name="size">',
                (h = l.size) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.size,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '</span></li><li class="pipe"></li><li class="file-time"><span name="updateTime" class=\'update\'>',
                (h = l.updateTime) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.updateTime,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '</span></li><li class="file-path ',
                c = l.unless.call(a, a && a.searchMode, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(5, o, i),
                    data: i
                }),
                (c || 0 === c) && (d += c),
                d += '"><a href="#',
                (h = l.openFolderUrl) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.openFolderUrl,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" title="<%=msg562%>">',
                (h = l.path) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.path,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '</a></li></ul><div id="context-menu-',
                (h = l.fileId) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" class="file-context-menu"><ul class="dropdown-menu" role="menu"><li class="download-btn"><a href="',
                (h = l.downloadUrl) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.downloadUrl,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-download"></i> <%= msg259 %></a></li><li class="edit-btn"><a href="#/file/edit/',
                (h = l.fileId) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" target="',
                (h = l.editTarget) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.editTarget,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-edit"></i> <%= msg264 %></a></li><li class="share-btn hide-public"><a href="#file/share/',
                (h = l.fileId) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-share"></i> <%=msg262%></a></li><li class="move-btn"><a href="#onlinedisk/move/',
                (h = l.fileId) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-move"></i> <%=msg265 %></a></li><li class="copyto-btn"><a href="#onlinedisk/copyto/',
                (h = l.fileId) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-copy"></i> <%= msg613 %></a></li><li class="rename-btn"><a href="#file/rename/',
                (h = l.fileId) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-rename"></i> <%=msg266 %></a></li><li class="label-btn"><a href="#file/mark/',
                (h = l.fileId) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-label"></i> <%=msgLabel %></a></li><li class="collect-btn"><a href="#sharedisk/collect/',
                (h = l.fileId) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="fa fa-star"></i> <%= msg609%></a></li><li class="delete-btn"><a href="#onlinedisk/delete/',
                (h = l.fileId) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-recycle"></i> <%=msg156 %></a></li><li class="property-btn"><a href="#file/property/',
                (h = l.fileId) ? c = h.call(a, {
                    hash: {},
                    data: i
                }) : (h = a && a.fileId,
                c = typeof h === m ? h.call(a, {
                    hash: {},
                    data: i
                }) : h),
                d += f(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-property"></i> <%=msgProperty %></a></li></ul></div>'
            }
            ), {
                searchMode: this.model.get("searchMode"),
                fileId: this.model.get("fileId"),
                downloadUrl: constants.getFileDownloadUrl(this.model),
                name: this.model.displayName(),
                icon: constants.typeConverter(this.model.get("type")),
                path: constants.dealPersonSpecialPath(this.model.get("path")) || "-",
                viewUrl: this.model.getPreviewUrl(),
                openFolderUrl: this.model.getOpenFolderUrl(),
                updateTime: this.model.get("updateTime"),
                size: constants.sizeConverter(this.model.get("size")),
                isConverting: this.model.isFileConverting(),
                isLink: this.model.get("shareLinkId")
            })),
            this._ctrlView(),
            this.ctrlBtnHide(),
            this._onChecked(),
            this._bindContextmenu(),
            this.labelsBinder.bind(this.labelList, this.$(".label-list")),
            this
        },
        labelCreator: function(e, a) {
            return new l({
                model: e,
                collection: a
            })
        },
        _addListeners: function() {
            this.listenTo(this.model, "change:fileStatus change:name change:searchMode", this._onChange),
            this.listenTo(this.model, "change:checked", this._onChange),
            this.listenTo(this.model, EventType.rename, this._onChangeEditAttr),
            this.listenTo(this.labelList, "remove", this._onDeleteLabel),
            this.listenTo(this.model, "change:labels", this._onChangeLabels)
        },
        _onDeleteLabel: function() {
            this.model.set("labels", this.labelList.toJSON()),
            this.model.updateFileLabel(function(e) {
                if (!constants.isResponseOK(e))
                    switch (e) {
                    case ErrorType.errorNoPermission:
                        noty.alert(msgs.msgNoPermission);
                        break;
                    default:
                        noty.error(msgs.msgServerError)
                    }
            }
            )
        },
        _onChange: function(e) {
            void 0 !== e.changed.checked ? this._onChecked() : void 0 !== e.changed.labels || this.render()
        },
        _onChangeLabels: function() {
            this.labelList.reset(this.model.get("labels"))
        },
        ctrlBtnHide: function() {
            var e;
            this._hideAllBtns();
            var a = this.model.getOperations();
            _.each(a, function(a) {
                e = constants.OperateBtnMap[a],
                this.$("ul.dropdown-menu > li." + e).removeClass("hide-important")
            }
            , this)
        },
        _onChangeEditAttr: function() {
            var e = this
              , a = this.$(".cs-rename-file input");
            this._oldName = this.model.get("name"),
            a.val(this.model.get("name")),
            this.$(".cs-rename-file").removeClass("hide-force"),
            this.$(".cs-rename-file").siblings("a.file-name").addClass("hide-force"),
            this.$("li.file-name .marks").addClass("hide-force"),
            this.$el.addClass("on-edit"),
            a.focus(),
            a.bind("keydown", "return", function() {
                e._oldName === $.trim(a.val()) ? e._onCancelRename() : e._onConfirmRename()
            }
            ).bind("keydown", "esc", function() {}
            )
        },
        _onConfirmRename: function() {
            this._oldName = null ;
            var e = this.$(".cs-rename-file  input");
            return e.attr("disabled", "disabled"),
            router.fileRouter.renameFile(this.model, $.trim(e.val())),
            e.removeAttr("disabled"),
            this._onCancelRename(),
            !1
        },
        _onCancelRename: function() {
            this._oldName = null ;
            var e = this.$(".cs-rename-file  input");
            return e.unbind("blur"),
            this.$("a.file-name").removeClass("hide-force"),
            this.$(".cs-rename-file").addClass("hide-force"),
            this.$el.removeClass("on-edit"),
            !1
        },
        _onExitRename: function() {
            var e = $.trim(this.$(".cs-rename-file  input").val());
            return this._oldName ? (e !== this._oldName ? this._onConfirmRename() : this._onCancelRename(),
            !1) : !1
        },
        _hideAllBtns: function() {
            this.$("ul.dropdown-menu > li").addClass("hide-important")
        },
        _bindContextmenu: function() {
            var e = this;
            this.$("ul.each-file-item").contextmenu({
                target: "#context-menu-" + this.model.get("fileId"),
                before: function() {
                    return e.collection.toggleSelectFile(e.model, !0),
                    model.messageEvent.trigger(EventType.clearContextmenus),
                    !0
                }
            })
        },
        _onDelRemind: function() {
            var e = this;
            this.model.deleteRemindShareFile(function() {
                e.model.set("remind", !1)
            }
            )
        },
        _onChecked: function() {
            this.$(".checkbox-sprite, .each-file-item").toggleClass("true", this.model.get("checked"))
        },
        _ctrlView: function() {
            var e = this
              , a = e.$("a[name=file-name],a[name=file-icon]");
            if (!this.model.isFolder() && !constants.isTxtType(this.model.get("type"))) {
                var l = this.model.getViewType();
                switch (l) {
                case "pic":
                case "aud":
                case "vid":
                case "html":
                    a.unbind("click").attr("target", "_blank");
                    break;
                case "excel":
                    this.model.isConvertDone() ? a.unbind("click").attr("target", "_blank") : a.click(function() {
                        router.onlineDiskRouter.doShowFile(e.model)
                    }
                    );
                    break;
                case "pdf":
                    webhelper.isIE8() ? (a.unbind("click").attr("href", "#"),
                    a.click(function() {
                        return e.showPdfNotSupport(),
                        !1
                    }
                    ),
                    log.debug("bind pdfNotSupport to IE8")) : constants.isPdfType(this.model.get("type")) || this.model.isConvertDone() ? a.unbind("click").attr("target", "_blank") : a.click(function() {
                        router.onlineDiskRouter.doShowFile(e.model)
                    }
                    );
                    break;
                case "unknow":
                default:
                    a.unbind("click").css({
                        cursor: "default",
                        "text-decoration": "none"
                    })
                }
            }
        },
        _multiSelectFile: function(e) {
            this.model.set("checked", !this.model.get("checked")),
            model.messageEvent.trigger(EventType.clearContextmenus),
            e.stopPropagation()
        },
        _toggleSelectFile: function(e) {
            var a = $(e.target);
            return a.is("input") || a.hasClass("custom-btn") ? !0 : void this.collection.toggleSelectFile(this.model)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/PersonFileTable", function(require, e, i) {
    var t = require("app/website/file/views/PersonFileItem")
      , s = require("app/commons/models/file/PersonFileDTO")
      , l = (require("app/commons/models/file/PersonFileList"),
    require("app/website/file/views/CreateFolderView"))
      , o = require("app/commons/uikit/support/LoadingView")
      , r = require("app/commons/uikit/support/EmptyView")
      , n = require("app/website/file/views/FileThumbItem")
      , h = require("app/website/file/views/DiskFileSearchView")
      , a = require("app/website/file/views/FileBreadView")
      , c = require("app/website/file/views/FileOperateView")
      , d = require("app/website/file/views/FileInfoView")
      , f = require("app/website/file/views/SwitchView")
      , p = require("app/website/file/views/HighSearchView");
    i.exports = Backbone.View.extend({
        tagName: "div",
        id: "personFileTable",
        className: "file-main",
        $fileTable: void 0,
        $listView: void 0,
        $allBtns: void 0,
        $operateBtns: void 0,
        fileBreadView: void 0,
        fileSearchView: void 0,
        fileOperateView: void 0,
        fileInfoView: void 0,
        switchView: void 0,
        createFolderView: void 0,
        emptyView: void 0,
        collectionBinder: void 0,
        currentFolder: void 0,
        isShowSearchResult: !1,
        events: {
            "click .file-table-header .checkbox-sprite": "_onCheckAll",
            "click #emptyFolderUpload": "_onUploadFileModal",
            "click .highSearch": "_showHighSearch",
            "click .file-table-header .file-name": "sortByName",
            "click .file-table-header .file-size": "sortBySize",
            "click .file-table-header .file-time": "sortByTime"
        },
        initialize: function() {
            this.personFileList = this.options.personFileList,
            this.currentFolder = model.currentFolder;
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator,this.collection);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this._addListeners(),
            this.render()
        },
        render: function() {
            return this._addChildViews(),
            this._onResize(),
            this.hideAllBtns(),
            this.collectionBinder.unbind(),
            this.collectionBinder.bind(this.collection, this.$listView),
            this
        },
        $checkAll: function() {
            return this.$(".file-table-header .checkbox-sprite")
        },
        viewCreator: function(e, i) {
            return "list" === cache.showType ? new t({
                model: e,
                collection: i
            }) : new n({
                model: e,
                collection: i
            })
        },
        _addChildViews: function() {
            this.$el.html(__html(Handlebars.template(function(e, i, t, s, l) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                l = l || {},
                '<div class="file-view-top"><div class="no-search"><div class="bread-container inline-block left"></div><div class="search-container inline-block right"></div></div><div class="high-search-container hide"></div></div><div class="file-view-operate"><div class="operates-container inline-block left"></div><div class="switch-container inline-block right"></div></div><div class="file-table"><ul class="file-table-header"><li class="file-check" name="file-check"><span class=\'checkbox-sprite check-all\'></span></li><li class="pipe"></li><li class="file-name cursor-pointer"><%= msg590 %> <i class="fa fa-sort-asc"></i></li><li class="pipe"></li><li class="file-status"><%= msg345 %></li><li class="pipe"></li><li class="file-size cursor-pointer"><%= msgSize %> <i class="fa fa-sort-asc hide-force"></i></li><li class="pipe"></li><li class="file-time cursor-pointer"><%= msg597 %> <i class="fa fa-sort-asc hide-force"></i></li><li class="file-path hide-force"><span class="pipe"></span><%= msgTheDirectory %></li></ul><div class="file-list-wrapper" style="overflow-y: auto;"><ul id="personFileList" class="overflow-auto"><li class="empty-table-tip hide-force" style="margin-top: 20% !important;"><%=msgTableEmpty%></li></ul><div class="file-tips"></div></div></div>'
            }
            ))),
            this.$fileTable = this.$(".file-table"),
            this.$listView = this.$("#personFileList"),
            this.$operateBtns = this.$(".operate-btn"),
            this.$fileTips = this.$(".file-tips"),
            this.fileBreadView = new a({
                el: this.$(".bread-container"),
                collection: this.personFileList,
                currentFolder: this.currentFolder
            }),
            this.fileBreadView.on(EventType.onSearch, this._toggleSearchResult, this),
            this.fileSearchView = new h({
                el: this.$(".search-container"),
                model: this.currentFolder,
                collection: this.collection,
                fileList: this.personFileList
            }),
            this.fileSearchView.on(EventType.onSearch, this._toggleSearchResult, this),
            this.fileOperateView = new c({
                model: this.currentFolder,
                collection: this.collection,
                fileList: this.personFileList,
                currentFolder: this.currentFolder
            }),
            this.$(".operates-container").html(this.fileOperateView.el),
            this.switchView = new f,
            this.$(".switch-container").html(this.switchView.el),
            this._switchShow(),
            this.loadingView = new o({
                el: this.$el,
                parent: this.$fileTable
            }),
            this.emptyView = new r({
                el: this.$listView,
                type: "empty-folder"
            })
        },
        _switchShow: function() {
            var e = this;
            this._dealHeaderShow(this.isShowSearchResult, "thumb" === cache.showType),
            this.switchView.on("changeShowType", function() {
                e.collection.reset(e.collection.models),
                e._dealHeaderShow(e.isShowSearchResult, "thumb" === cache.showType)
            }
            ),
            this.switchView.on("toggleCollapse", function(e) {
                view.mainbox.collapseContentLeft(e)
            }
            )
        },
        _dealHeaderShow: function(e, i) {
            this.$(".file-table-header >li").toggleClass("hide-force", i),
            this.$(".file-table-header >li.file-check").removeClass("hide-force"),
            this.$(".file-table-header .file-path").toggleClass("hide-force", !e || i)
        },
        hideAllBtns: function() {
            this.fileOperateView.render()
        },
        _addListeners: function() {
            this.listenTo(this.collection, "add remove reset", this._onAddOrRemoveFile),
            this.listenTo(this.collection, "change:checked", this.onFileSelect),
            this.listenTo(this.collection, EventType.checkChange, this.onFileSelect),
            this.listenTo(model.messageEvent, EventType.changeSlide, this._onResize),
            this.listenTo(model.setting, "change:width change:height", this._onResize),
            this.listenTo(model.messageEvent, EventType.clearContextmenus, this.hideContextMenu),
            this.listenTo(this.collection, EventType.startLoad, this._onStartLoad),
            this.listenTo(this.collection, EventType.stopLoad, this._onStopLoad)
        },
        _toggleSearchResult: function(e) {
            return e ? (this.isShowSearchResult = !0,
            this._dealHeaderShow(!0, "thumb" === cache.showType),
            this.$(".breadcrumb-div .breadcrumb-move").addClass("hide-force"),
            this.$("li.search-result").removeClass("hide-force"),
            this.$("li.search-result .count").html(e.resultCount),
            this.$("ul.breadcrumb>li").not(".search-result").hide(),
            this.$(".file-table-header").addClass("show-path"),
            this.fileOperateView.$(".upload-btn,.create-btn").addClass("hide-important"),
            this.collection.each(function(e) {
                e.set("searchMode", !0)
            }
            ),
            void this._onAddOrRemoveFile()) : (this.isShowSearchResult = !1,
            this._dealHeaderShow(!1, "thumb" === cache.showType),
            this.$(".file-table-header").removeClass("show-path"),
            this.$(".breadcrumb-div .breadcrumb-move").removeClass("hide-force"),
            this.$("li.search-result").addClass("hide-force"),
            this.$("ul.breadcrumb>li").show(),
            this.fileOperateView.$(".upload-btn,.create-btn").removeClass("hide-important"),
            this.collection.each(function(e) {
                e.set("searchMode", !1)
            }
            ),
            this._onAddOrRemoveFile(),
            void 0)
        },
        _onAddOrRemoveFile: function() {
            return this.isShowSearchResult ? (this.$(".empty-table-tip").toggleClass("hide-force", this.collection.length > 0),
            void this.emptyView.hide()) : (this.$(".empty-table-tip").addClass("hide-force"),
            0 === this.collection.length ? this.emptyView.show() : this.emptyView.hide(),
            void this.onFileSelect())
        },
        changeFolder: function(e) {
            this.isShowSearchResult && this.fileSearchView.searchViewBack(),
            this._onChangeFolder(e),
            this.fileBreadView.setFolderRecord(e.id),
            this.exitHighSearch()
        },
        _onChangeFolder: function(e) {
            var i = this;
            this.currentFolder.set(e.toJSON()),
            this.showCheckAllBtn(!1),
            this.hideAllBtns(),
            this.fileBreadView.changeBread(this.personFileList.getFolderNav(this.currentFolder.id)),
            this._onStartLoad(),
            this.collection.reset(),
            this.personFileList.getFiles(this.currentFolder.id, function() {
                i.collection.add(i.personFileList.children(i.currentFolder.id)),
                i.onFileSelect(),
                i._onStopLoad(),
                0 === i.collection.length ? i.emptyView.show() : i.emptyView.hide()
            }
            )
        },
        _onStartLoad: function() {
            this.loadingView.show()
        },
        _onStopLoad: function() {
            this.loadingView.hide()
        },
        openRecordFolder: function(e) {
            var i;
            if (i = constants.isRootFolder(e) ? model.rootPersonFolder : collection.personFileList.get(e))
                return i.set("checked", !1),
                void this._onChangeFolder(i);
            var t = this;
            i = new s({
                fileId: e
            }),
            i.set("diskType", constants.fileType.onlineDisk),
            i.getParentFoldersAndSelfByFolder(function(e) {
                if (e == ErrorType.errorNoPermission)
                    return void noty.error(msgs.msgNoPermission);
                if (constants.isResponseError(e))
                    return void noty.alert(msgs.msgFileDeleted);
                var l = _.map(e, function(e) {
                    var t = (new s).initFromPersonFolder(e);
                    return t.set("diskType", i.get("diskType")),
                    t.set("collectionType", constants.FileCollectionType.personDisk),
                    t
                }
                );
                this.collection.reset(),
                this.collection.add(l),
                t._onChangeFolder(i)
            }
            )
        },
        showForwardFile: function(e, i) {
            var t, l;
            if (t = this.personFileList.get(e),
            t && (l = this.personFileList.get(t.get("parentId"))),
            l)
                return l.set("checked", !1),
                void this._showForwardFile(l, t);
            var o = this;
            t = new s({
                fileId: e
            }),
            i && t.set("type", "folder"),
            t.getParentPersonFolders(function(e) {
                if (e == ErrorType.errorNoPermission)
                    return void noty.error(msgs.msgNoPermission);
                if (constants.isResponseError(e))
                    return void noty.alert(msgs.msgFileDeleted);
                var i = _.map(e, function(e) {
                    return new s(e)
                }
                );
                o.personFileList.reset(i),
                o.personFileList.add(model.rootPersonFolder),
                l = e.length ? o.personFileList.getFoldersSon() : model.rootPersonFolder,
                o._showForwardFile(l, t),
                o._toggleSearchResult(!1)
            }
            )
        },
        _showForwardFile: function(e, i) {
            var t = this;
            this.hideAllBtns(),
            this.$checkAll().removeClass("true"),
            this.currentFolder.set(e.toJSON()),
            this.fileBreadView.changeBread(this.personFileList.getFolderNav(this.currentFolder.id)),
            this.collection.reset(),
            i.getFile(function(e) {
                return constants.isResponseError(e) ? void 0 : (i.set(i._parse(e)),
                t.collection.add(i),
                t.personFileList.add(i),
                i.set("checked", !0),
                void t.onFileSelect())
            }
            ),
            this.fileBreadView.setFolderRecord(e.id)
        },
        showCheckAllBtn: function(e) {
            this.$checkAll().toggleClass("true", e)
        },
        _toggleCheckAllBtn: function(e) {
            var i = !!e.length && e.length === this.collection.length;
            this.$checkAll().toggleClass("true", i)
        },
        onFileSelect: function() {
            var e = this.collection.getCheckedFiles();
            this._ctrlBtnShow(e),
            1 == e.length ? this._showFileInfo(e[0]) : this._hideFileInfo(),
            this._onResize()
        },
        _showFileInfo: function(e) {
            this.fileInfoView && this.fileInfoView.close(),
            this.fileInfoView = new d({
                model: e
            }),
            this.$fileTips.html(this.fileInfoView.el)
        },
        _hideFileInfo: function() {
            this.fileInfoView && this.fileInfoView.close(),
            this.fileInfoView = null 
        },
        _ctrlBtnShow: function(e) {
            var i = [];
            if (e) {
                {
                    e.length
                }
                if (1 === e.length) {
                    var t = e[0];
                    i = t.getOperations()
                } else if (e.length > 1) {
                    i = ["download"];
                    var s = _.some(e, function(e) {
                        return e.isSysFolder()
                    }
                    );
                    !s && i.push("delete", "move", "copyto")
                }
                this._toggleCheckAllBtn(e)
            }
            this.fileOperateView.ctrlBtnShow(i, this.isShowSearchResult)
        },
        scrollToFile: function(e) {
            var i = this.collection.indexOf(e);
            -1 != i && (i = i - 2 > 0 ? i - 2 : 1,
            this.$grid.scrollTop(35 * i))
        },
        onEditFileName: function(e) {
            this.createFolderView && this.createFolderView.close(),
            this.createFolderView = new l({
                model: e ? e : new s({
                    parentId: this.currentFolder.id
                })
            })
        },
        _onCheckAll: function() {
            var e = this.$checkAll().hasClass("true");
            this.$checkAll().toggleClass("true"),
            this.collection.each(function(i) {
                i.set({
                    checked: !e,
                    silent: !0
                })
            }
            ),
            this.$listView.find(".entFileItem .checkbox-sprite").toggleClass("true", !e),
            this.onFileSelect()
        },
        _onResize: function() {
            var e = this.$(".no-search").hasClass("hide") ? model.setting.getFileTableHeight() - 190 : model.setting.getFileTableHeight();
            this.fileInfoView && (e -= 35),
            this.$(".file-list-wrapper").height(e),
            this.emptyView && this.emptyView.changeHeight(e - 50),
            this.$(".file-table-header").width(view.mainbox.$contentRight.width() - 20),
            this.$(".file-list-wrapper>ul").height(e - 1)
        },
        onClickCopyTo: function() {
            var e = this.collection.where({
                checked: !0
            });
            if (0 === e.length)
                return noty.alert(msgs.msgNoFile),
                !1;
            var i = _.some(e, function(e) {
                return e.isFolder()
            }
            );
            return i ? (noty.alert(msgs.msgCopyFolderError),
            !1) : !1
        },
        _onUploadFileModal: function() {
            this.fileOperateView.uploadFileModal()
        },
        hideContextMenu: function() {
            this.$(".file-context-menu").removeClass("open")
        },
        _showHighSearch: function() {
            this.isShowSearchResult = !0,
            this._hideFileInfo(),
            this.highSearchView && this.highSearchView.close(),
            this.highSearchView = new p({
                currentFolder: this.currentFolder,
                collection: this.collection
            }),
            this.$(".high-search-container").html(this.highSearchView.el),
            this.highSearchView.on("onExitSearch", this._onExitHighSearch, this),
            this.$(".high-search-container").removeClass("hide"),
            this.$(".no-search").addClass("hide"),
            this.fileOperateView.$(".upload-btn,.create-btn").addClass("hide-important")
        },
        _onExitHighSearch: function() {
            this.isShowSearchResult = !1,
            this.exitHighSearch(),
            this.changeFolder(this.currentFolder)
        },
        exitHighSearch: function() {
            this.$(".high-search-container").addClass("hide"),
            this.$(".no-search").removeClass("hide"),
            this.fileOperateView.$(".upload-btn,.create-btn").addClass("hide-important"),
            this._onResize()
        },
        sortByName: function() {
            this._sortByAttr("name", this.$(".file-table-header .file-name i"))
        },
        sortBySize: function() {
            this._sortByAttr("size", this.$(".file-table-header .file-size i"))
        },
        sortByTime: function() {
            this._sortByAttr("updateTime", this.$(".file-table-header .file-time i"))
        },
        _sortByAttr: function(e, i) {
            var t = this.changeOrderByIcon(e)
              , s = i.hasClass("fa-sort-asc");
            t || (i.toggleClass("fa-sort-asc", !s).toggleClass("fa-sort-desc", s),
            this.personFileList.order = {
                orderBy: e,
                descending: s
            }),
            this.isShowSearchResult || this._onChangeFolder(this.currentFolder)
        },
        changeOrderByIcon: function(e) {
            this._changeOrderByIcon(this.$(".file-table-header"), this.personFileList, e)
        },
        _changeOrderByIcon: function(e, i, t) {
            var s = e.find(".file-name i")
              , l = e.find(".file-size i")
              , o = e.find(".file-time i");
            if (i.order.orderBy === t)
                return !1;
            switch (i.order.descending = !1,
            i.order.orderBy = t,
            t) {
            case "name":
                l.addClass("hide-force"),
                o.addClass("hide-force"),
                s.removeClass("hide-force");
                break;
            case "size":
                o.addClass("hide-force"),
                s.addClass("hide-force"),
                l.removeClass("hide-force");
                break;
            case "updateTime":
                s.addClass("hide-force"),
                l.addClass("hide-force"),
                o.removeClass("hide-force")
            }
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/PersonDiskRouter", function(require, e, o) {
    var i = require("app/commons/models/file/PersonFileDTO")
      , n = require("app/commons/models/file/PersonFileList")
      , r = require("app/website/file/views/PersonFileTable")
      , s = require("app/commons/uikit/file/FolderTreeWindow")
      , t = require("app/commons/uikit/file/MultiFileDownloadView")
      , l = require("app/commons/models/file/MultiFileDownloadDTO");
    o.exports = Backbone.Router.extend({
        routes: {
            "onlinedisk/openfolder/:folderId": "onOpenPersonFolder",
            "onlinedisk/openfile/:fileId": "onOpenPersonFile",
            "onlinedisk/download/:fileId": "downloadFile",
            "onlinedisk/move/:fileId": "moveFile",
            "onlinedisk/copyto/:fileId": "copyToEntDisk",
            "onlinedisk/delete/:fileId": "deleteFile",
            "onlinedisk/forwardfile/:fileId": "onFileForward",
            "onlinedisk/forwardfolder/:folderId": "onFolderForward",
            "recycle/onlinedisk/restore/:fileId": "_onRestoreFile",
            "recycle/onlinedisk/delete/:fileId": "_onDeleteFileFromRecycle"
        },
        onOpenPersonFolder: function(e) {
            var o, i = this;
            return this._ensurePersonTable(),
            (o = constants.isRootFolder(e) ? model.rootPersonFolder : collection.personFileList.get(e)) ? (o.set("checked", !1),
            view.personFileTable.changeFolder(o),
            void this._navClose()) : void collection.personFileList.fetchAncestor(e, function(n) {
                return n === ErrorType.errorNoPermission ? void noty.error(msgs.msgNoPermission) : constants.isResponseError(n) ? void noty.alert(msgs.msgFileDeleted) : (o = collection.personFileList.get(e),
                o.set("person checked", !1),
                view.personFileTable.changeFolder(o),
                void i._navClose())
            }
            )
        },
        onForwardPersonFolder: function(e) {
            this._ensurePersonTable(),
            view.personFileTable.openRecordFolder(e)
        },
        _ensurePersonTable: function() {
            view.fileLeftView.activeLink(".left-nav-person"),
            view.mainbox.isContentViewShow(view.personFileTable) || (view.personFileTable && view.personFileTable.close(),
            collection.currentFileList = new n,
            view.personFileTable = new r({
                collection: collection.currentFileList,
                personFileList: collection.personFileList
            }),
            view.mainbox.updateContentRight(view.personFileTable))
        },
        downloadFile: function(e) {
            var o = this.getFileById(e);
            o.isFolder() ? this.downloadMultiFilesOrFolder("sharedisk", [o]) : this.downloadSingleFile(o),
            this._navClose()
        },
        downloadMultiFilesOrFolder: function(e, o) {
            if (e == constants.fileType.onlineDisk && !model.currentUser.get("diskEnabled"))
                return void model.messageEvent.trigger(EventType.personDiskDisabled);
            var i = new l;
            i.initFromFiles(o, view.personFileTable.currentFolder),
            view.mutiFileDownloadView && view.mutiFileDownloadView.close(),
            view.mutiFileDownloadView = new t({
                model: i
            })
        },
        downloadSingleFile: function(e) {
            return constants.isInvalidFile(e.get("name")) ? (noty.error(msgs.msgDownloadFileError),
            !1) : void constants.executeFileDownload(e)
        },
        moveFile: function(e) {
            var o = this.getFileById(e);
            return constants.isSpecialFolder(o) ? void noty.alert(o.get("name") + msgs.msgSysMoveForbidden) : (this.doMoveFile([o]),
            void this._navClose())
        },
        doMoveFile: function(e) {
            return model.currentUser.get("diskEnabled") ? (view.folderTreeWindow && view.folderTreeWindow.close(),
            view.folderTreeWindow = new s({
                settingObj: {
                    isEntDisk: !1,
                    showCheckBox: !1
                },
                passInfo: e
            }),
            view.folderTreeWindow.folderTreeModal.on(EventType.selectFolders, this.doAfterSelectDestFolder, this),
            void view.folderTreeWindow.folderTreeModal.on(EventType.cancelSelectFolders, this.closeFolderTreeModal, this)) : void model.messageEvent.trigger(EventType.personDiskDisabled)
        },
        closeFolderTreeModal: function() {
            view.folderTreeWindow.$el.modal("hide")
        },
        doAfterSelectDestFolder: function(e) {
            var o = e.passInfo
              , i = e.destFolder;
            if (!i)
                return noty.alert(msgs.msgMoveNoDest),
                !1;
            var n = _.some(o, function(e) {
                return !e.isFolder()
            }
            );
            if (n && constants.isRootFolder(i.id))
                return noty.alert(msgs.msgFileRoot),
                !1;
            this.closeFolderTreeModal();
            var r = 1 === o.length ? o[0].get("parentId") : model.currentFolder.id;
            if (i.id === r)
                return noty.alert(msgs.msgMoveToSub),
                !1;
            if (1 === o.length) {
                var s = o[0];
                if (s.isFolder() && s.id === i.id)
                    return noty.alert(msgs.msgMoveSameDirError),
                    !1;
                s.move(i, this._moveCallback(i, o))
            } else
                this._moveMultiFiles(i, o)
        },
        _moveMultiFiles: function(e, o) {
            var i = _.groupBy(o, function(e) {
                return e.isFolder() ? "folders" : "files"
            }
            )
              , n = _.map(i.files, function(e) {
                return e.id
            }
            )
              , r = _.map(i.folders, function(e) {
                return e.id
            }
            )
              , s = {
                entId: cache.entId,
                userId: cache.userId,
                toFolderId: e.isRootFolder() ? null  : e.get("fileId"),
                fileList: n,
                folderList: r
            };
            resturl.movePersonalFolderAndFile(s, this._moveCallback(e, o))
        },
        _moveCallback: function(e, o) {
            return function(e) {
                return constants.isResponseOK(e) ? (collection.personFileList.remove(o),
                collection.currentFileList.remove(o),
                collection.currentFileList.trigger(EventType.checkChange),
                void noty.success(msgs.msgMoveSuccess)) : void noty.alert(ErrorType.moveFileError(e))
            }
        },
        copyToEntDisk: function(e) {
            this.doCopyFiles([this.getFileById(e)]),
            this._navClose()
        },
        doCopyFiles: function(e) {
            view.folderTreeWindow && view.folderTreeWindow.close(),
            view.folderTreeWindow = new s({
                settingObj: {
                    isEntDisk: !0,
                    showCheckBox: !1
                },
                passInfo: e
            }),
            view.folderTreeWindow.folderTreeModal.on(EventType.selectFolders, this.doAfterSelectCopyToFolder(), this),
            view.folderTreeWindow.folderTreeModal.on(EventType.cancelSelectFolders, this.closeFolderTreeModal, this)
        },
        doAfterSelectCopyToFolder: function() {
            var e = this;
            return function(o) {
                var i = o.passInfo
                  , n = o.destFolder;
                return n ? constants.isRootFolder(n.id) ? (noty.alert(msgs.msgFileRoot),
                !1) : n.hasPermission("write") ? n.id == i[0].get("parentId") ? (noty.alert(msgs.msgCopyToParent),
                !1) : (e._doDiskCopy(i, n),
                void e.closeFolderTreeModal()) : (noty.error(msgs.msgNoPermission),
                !1) : (noty.alert(msgs.msgNoFolder),
                !1)
            }
        },
        _doDiskCopy: function(e, o) {
            var i = _.extend(constants.getFileFolderIds(e), {
                srcType: constants.fileType.onlineDisk,
                destType: constants.fileType.shareDisk
            });
            resturl.entDiskCopy(_.extend(i, {
                entId: cache.entId,
                userId: cache.userId,
                folderId: o.get("fileId")
            }), {
                timeout: 6e4
            }, function(e) {
                constants.isResponseOK(e) ? noty.success(msgs.msgFileCopySuccess) : noty.alert(ErrorType.entDiskCopyError(e))
            }
            )
        },
        deleteFile: function(e) {
            var o = this;
            noty.confirm("文件将被删除到回收站中, 确定删除吗?", function(i) {
                if (!i)
                    return !1;
                var n = o.getFileById(e);
                return constants.isSpecialFolder(n) ? void noty.alert(n.get("name") + msgs.msgSysDelForbidden) : void o.doDeleteFile([n])
            }
            ),
            this._navClose()
        },
        doDeleteFile: function(e) {
            var o = this
              , i = _.filter(e, function(e) {
                return constants.isSpecialFolder(e)
            }
            );
            return i.length ? (noty.alert(i[0].get("name") + msgs.msgSysDelForbidden),
            !1) : (1 === e.length ? e[0].deleteToRecycle(o.deleteCallback(e)) : o.deleteMutilFiles(e),
            void this._navClose())
        },
        deleteCallback: function(e) {
            return function(o) {
                return o == ErrorType.errorPersonalDiskDisabled ? void model.messageEvent.trigger(EventType.personDiskDisabled) : constants.isResponseError(o) ? void noty.error(ErrorType.showDeleteFileError(o)) : void _.each(e, function(e) {
                    e.set("checked", !1),
                    collection.currentFileList.remove(e)
                }
                )
            }
        },
        deleteMutilFiles: function(e) {
            var o = _.groupBy(e, function(e) {
                return e.isFolder() ? "folders" : "files"
            }
            )
              , i = _.map(o.files, function(e) {
                return e.id
            }
            )
              , n = _.map(o.folders, function(e) {
                return e.id
            }
            )
              , r = {
                entId: cache.entId,
                userId: cache.userId,
                folderList: n,
                fileList: i
            };
            resturl.deletePersonalFolderAndFileToRecycle(r, this.deleteCallback(e))
        },
        onOpenPersonFile: function(e) {
            var o = collection.personFileList.get(e);
            o && router.fileRouter.doShowFile(o),
            this._navClose()
        },
        doShowFile: function(e) {
            return constants.isPreviewSupport(e.get("type")) ? void e.convertToViewFile(function(e, o) {
                e ? noty.error(msgs.msgFileTransterFail) : noty.success(constants.isResOK(o.msg) ? msgs.msgFileDealComplete : msgs.msgFileDealing)
            }
            ) : (noty.alert(msgs.msgReadUnsupport),
            !1)
        },
        onIpadViewPdf: function(e) {
            return constants.isPreviewSupport(e.get("type")) ? void e.viewFileAsPdf(function(e, o) {
                e ? noty.error(msgs.msgFileTransterFail) : noty.success(constants.isResOK(o.msg) ? msgs.msgFileDealComplete : msgs.msgFileDealing)
            }
            ) : (noty.alert(msgs.msgReadUnsupport),
            !1)
        },
        getFileById: function(e) {
            return collection.currentFileList.get(e)
        },
        _onRestoreFile: function(e) {
            view.recycleView.restoreFile(!1, e),
            this.navigate("nav/close", !0)
        },
        _onDeleteFileFromRecycle: function(e) {
            view.recycleView.deleteFile(!1, e),
            this.navigate("nav/close", !0)
        },
        onFileForward: function(e) {
            this._ensurePersonTable(),
            view.personFileTable.showForwardFile(e, !1)
        },
        onFolderForward: function(e) {
            this._ensurePersonTable(),
            view.personFileTable.showForwardFile(e, !0)
        },
        createFolder: function(e, o) {
            if (e.get("parentId") === constants.rootFolderId.personDisk && webhelper.without(constants.personSystemFolderNames, [e.get("name")]))
                return noty.alert(msgs.msgFolderNameError),
                !1;
            var n = new i(e._asCreateFolderParam());
            n.createFolder(function(e) {
                constants.isResError(e) ? noty.error(ErrorType.createFolderError(e)) : collection.currentFileList.unshift(new i(e)),
                o && o(e)
            }
            )
        },
        _navClose: function() {
            router.approuter.navigate("nav/close", !0)
        }
    })
}
);
;define("app/website/file/models/RemindFileList", function(require, e, t) {
    var n = require("app/commons/models/file/EntFileDTO")
      , i = require("app/commons/utils/FileRest");
    t.exports = Backbone.Collection.extend({
        model: n,
        order: {
            orderBy: "name",
            descending: !1
        },
        isEntDisk: function() {
            return !0
        },
        initialize: function() {
            this.addListeners()
        },
        addListeners: function() {
            this.listenTo(model.messageEvent, MessageType.FileConvertDone, this.onFileConvertDone)
        },
        fetch: function(e, t) {
            var s = this;
            return this.reset(),
            i.remindFiles.post(_.extend(cache.baseParam, {
                order: this.order
            })).then(function(i) {
                var c = i.files;
                _.each(c, function(t) {
                    if (!e || t.name.toLowerCase().match(e)) {
                        var i = new n(t);
                        s.add(i)
                    }
                }
                ),
                t && t(),
                s.trigger(EventType.fetched, {
                    keyword: e
                })
            }
            ),
            this
        },
        search: function() {
            this.reset()
        },
        onFileConvertDone: function(e) {
            var t = JSON.parse(e.get("msgBody"))
              , n = this.get(t.fileId);
            n && n.set("fileStatus", t.status)
        },
        getCheckedFiles: function() {
            return this.where({
                checked: !0
            })
        },
        uncheckAll: function() {
            this.each(function(e) {
                e.get("checked") && e.set("checked", !1)
            }
            )
        },
        toggleSelectFile: function(e, t) {
            this.each(function(t) {
                t.id !== e.id && t.get("checked") && t.set("checked", !1)
            }
            , this),
            e.set("checked", t || !e.get("checked"))
        }
    })
}
);
;define("app/website/file/views/RemindFileItem", function(require, e, i) {
    i.exports = Backbone.View.extend({
        tagName: "li",
        className: "entFileItem",
        remindFile: void 0,
        events: {
            "click .del-attention-btn": "_onDelRemind",
            "click .checkbox-sprite": "_multiSelectFile",
            "click ": "_toggleSelectFile"
        },
        initialize: function() {
            this.remindFile = this.model,
            this._addListeners()
        },
        _addListeners: function() {
            this.listenTo(this.remindFile, "change:fileStatus", this.render),
            this.listenTo(this.remindFile, "change:checked", this._onChecked)
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, t, l, a) {
                function n() {
                    return "true"
                }
                function s() {
                    return " hide "
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                a = a || {};
                var c, o, h = "", r = this, d = "function", m = this.escapeExpression;
                return h += "<ul class='each-file-item'><li class=\"file-check\"><span class='checkbox-sprite ",
                c = t["if"].call(i, i && i.checked, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(1, n, a),
                    data: a
                }),
                (c || 0 === c) && (h += c),
                h += '\'><input type="checkbox" style=\'visibility:hidden\' checked=false></span></li><li class="pipe"></li><li class="file-name"><a href="#',
                (o = t.openFolderUrl) ? c = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.openFolderUrl,
                c = typeof o === d ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                h += m(c) + '" class="file-name" target="" name="file-name" title="',
                (o = t.name) ? c = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.name,
                c = typeof o === d ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                h += m(c) + '"><i class="file-icon-medium ',
                (o = t.icon) ? c = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.icon,
                c = typeof o === d ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                h += m(c) + '" href="#',
                (o = t.openFolderUrl) ? c = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.openFolderUrl,
                c = typeof o === d ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                h += m(c) + '"></i>',
                (o = t.name) ? c = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.name,
                c = typeof o === d ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                h += m(c) + '</a></li><li class="pipe"></li><li class="file-status"><a class="btn btn-link file-icon-unlock ',
                c = t.unless.call(i, i && i.isLock, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(3, s, a),
                    data: a
                }),
                (c || 0 === c) && (h += c),
                h += '" href="###"><i class="icon-custom-lock"></i></a><a class="btn btn-link file-icon-delattention ',
                c = t.unless.call(i, i && i.isRemind, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(3, s, a),
                    data: a
                }),
                (c || 0 === c) && (h += c),
                h += '" href="###"><i class="icon-custom-attention"></i></a><a class="btn btn-link file-icon-delshare ',
                c = t.unless.call(i, i && i.isLink, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(3, s, a),
                    data: a
                }),
                (c || 0 === c) && (h += c),
                h += '" href="###"><i class="icon-custom-share"></i></a><a class="btn btn-link file-icon-convert ',
                c = t.unless.call(i, i && i.isConverting, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(3, s, a),
                    data: a
                }),
                (c || 0 === c) && (h += c),
                h += '" href="###" title="<%=msg598%>"><i class="icon-spinner icon-spin"></i></a></li><li class="pipe"></li><li class="file-size">',
                (o = t.size) ? c = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.size,
                c = typeof o === d ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                h += m(c) + '</li><li class="pipe"></li><li class="file-time"> ',
                (o = t.updateTime) ? c = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.updateTime,
                c = typeof o === d ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                h += m(c) + '</li><li class="pipe"></li><li class="file-path"><a href="#',
                (o = t.openFolderUrl) ? c = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.openFolderUrl,
                c = typeof o === d ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                h += m(c) + '" title="<%=msg562%>">',
                (o = t.path) ? c = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.path,
                c = typeof o === d ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                h += m(c) + '</a></li></ul><div id="context-menu-',
                (o = t.fileId) ? c = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.fileId,
                c = typeof o === d ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                h += m(c) + '" class="file-context-menu"><ul class="dropdown-menu" role="menu"><li class="del-attention-btn"><a href="###" class="btn btn-link custom-btn"><i class="icon-custom-attention-alt"></i> <%=msg604%></a></li><li class="show-attention-btn"><a href="#',
                (o = t.openFolderUrl) ? c = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.openFolderUrl,
                c = typeof o === d ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                h += m(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-place-alt"></i><%=msg562%></a></li></ul></div>'
            }
            ), {
                fileId: this.remindFile.get("fileId"),
                name: constants.dealEntSpecialFolder(this.remindFile.get("name")),
                icon: constants.typeConverter(this.remindFile.get("type")),
                path: this.remindFile.get("path") || "-",
                viewUrl: this.remindFile.getPreviewUrl(),
                openFolderUrl: this.remindFile.getOpenFolderUrl(),
                updateTime: this.remindFile.get("updateTime"),
                size: constants.sizeConverter(this.remindFile.get("size")),
                isLock: this.remindFile.isLock(),
                isRemind: this.remindFile.hasRemind(),
                isLink: this.remindFile.hasShareLink(),
                isConverting: this.remindFile.isFileConverting(),
                checked: this.remindFile.get("checked")
            })),
            this._ctrlView(),
            this._bindContextmenu(),
            this
        },
        _onDelRemind: function() {
            var e = this;
            this.remindFile.deleteRemindShareFile(function() {
                e.remindFile.set("remind", !1)
            }
            )
        },
        _onChecked: function() {
            this.$(".checkbox-sprite, .each-file-item").toggleClass("true", this.remindFile.get("checked"))
        },
        _ctrlView: function() {
            this.remindFile.isFolder() || this.$(".btn-group a:contains('下载')").attr("target", "_blank")
        },
        _bindContextmenu: function() {
            var e = this;
            this.$("ul.each-file-item").contextmenu({
                target: "#context-menu-" + this.model.get("fileId"),
                before: function() {
                    return e.collection.toggleSelectFile(e.model, !0),
                    model.messageEvent.trigger(EventType.clearContextmenus),
                    !0
                }
            })
        },
        _multiSelectFile: function(e) {
            this.model.set("checked", !this.model.get("checked")),
            model.messageEvent.trigger(EventType.clearContextmenus),
            e.stopPropagation()
        },
        _toggleSelectFile: function(e) {
            if ("new" === this.model.get("fileId") && this.model.isFolder())
                return !0;
            var i = $(e.target);
            return i.is("a") || i.is("i") || i.is("button") ? !0 : void this.collection.toggleSelectFile(this.model)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/FileSearchView", function(require, e, s) {
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
            this.$el.append(__html(Handlebars.template(function(e, s, t, i, a) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                a = a || {},
                '<div class="form-search-custom pull-right fileSelectSearch"><div class="searchBox"><div class="btn hide search-goback-btn"><i class="icon-chevron-left"></i> <span><%=msg630%></span> <span class="separate-border"></span></div></div></div>'
            }
            ))),
            this.$searchBox = this.$(".form-search-custom .searchBox"),
            this.$searchGobackBtn = this.$(".form-search-custom .search-goback-btn"),
            this.searchBox = new t({
                settingObj: this.settingObj
            }),
            this.searchBox.on(EventType.onSearch, this._fileQuery, this),
            this.$(".searchBox").append(this.searchBox.el)
        },
        _fileQuery: function(e) {
            e = $.trim(e),
            e && (this.collection.fetch(e.toLowerCase()),
            this.$searchBox.addClass("input-prepend input-append search-box"),
            this.$searchGobackBtn.removeClass("hide"))
        },
        _searchGoBack: function() {
            this.searchBox.$(".keyword").val(""),
            this.collection.fetch(),
            this.$searchBox.removeClass("input-prepend input-append search-box"),
            this.$searchGobackBtn.addClass("hide")
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/FileThumbItem2", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "li",
        className: "file-thumb-item default",
        source: void 0,
        events: {
            "click .checkbox-sprite": "multiSelectFile",
            "click ": "toggleSelectFile",
            "click .del-share-btn": "_onDelLink",
            "click .edit-share-btn": "_onEditLink",
            "click .del-attention-btn": "_onDelRemind"
        },
        initialize: function() {
            this.source = this.options.source,
            this._addListeners()
        },
        render: function() {
            var e = {
                searchMode: this.model.get("searchMode"),
                fileId: this.model.get("fileId"),
                downloadUrl: constants.getFileDownloadUrl(this.model),
                name: constants.dealSpecialFolder(this.model.get("name"), this.model.get("fileType")),
                icon: constants.typeConverter(this.model.get("type")),
                viewUrl: this.model.hasPreviewPermission() ? this.model.getPreviewUrl() : "#sharedisk/not/read",
                updateTime: this.model.get("updateTime"),
                size: constants.sizeConverter(this.model.get("size")),
                path: constants.dealSpecialPath(this.model.get("path"), this.model.get("fileType")) || "-",
                openFolderUrl: this.model.getOpenFolderUrl(),
                diskType: this.model.get("diskType")
            };
            switch (this.$el.html(__html(Handlebars.template(function(e, t, l, i, a) {
                this.compilerInfo = [4, ">= 1.0.0"],
                l = this.merge(l, e.helpers),
                a = a || {};
                var s, n, o = "", c = "function", h = this.escapeExpression;
                return o += '<ul class="file-thumb-wrap" title="',
                (n = l.name) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.name,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + '"><li class="file-check"><span class=\'checkbox-sprite\'></span></li><li class="file-type"><a name=\'file-icon\' class="file-icon-large ',
                (n = l.icon) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.icon,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + '" href="#',
                (n = l.openFolderUrl) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.openFolderUrl,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + '"></a></li><li class="file-name"><a href="#',
                (n = l.openFolderUrl) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.openFolderUrl,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + '" class="file-name" name="file-name" title="',
                (n = l.name) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.name,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + '">',
                (n = l.name) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.name,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + '</a></li></ul><div name="context-menu-',
                (n = l.fileId) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.fileId,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + '" class="file-context-menu show-link-file"><ul class="dropdown-menu" role="menu"><li class="edit-share-btn"><a href="###" class="btn btn-link custom-btn"><i class="icon-custom-share-edit"></i> <%=msg606%></a></li><li class="del-share-btn"><a href="###" class="btn btn-link custom-btn"><i class="icon-custom-share-cancel"></i> <%=msg507%></a></li></ul></div><div name="context-menu-',
                (n = l.fileId) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.fileId,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + '" class="file-context-menu show-remind-file"><ul class="dropdown-menu" role="menu"><li class="del-attention-btn"><a href="###" class="btn btn-link custom-btn"><i class="icon-custom-attention-alt"></i> <%=msg604%></a></li><li class="show-attention-btn"><a href="#',
                (n = l.openFolderUrl) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.openFolderUrl,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + '" class="btn btn-link custom-btn"><i class="icon-custom-place-alt"></i><%=msg562%></a></li></ul></div><div name="context-menu-',
                (n = l.fileId) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.fileId,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + '" class="file-context-menu show-recycle-file"><ul class="dropdown-menu" role="menu"><li><a href="#recycle/',
                (n = l.diskType) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.diskType,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + "/restore/",
                (n = l.fileId) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.fileId,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + '" class="btn btn-link custom-btn"><i class="icon-custom-restore"></i><%=msg655%></a></li><li><a href="#recycle/',
                (n = l.diskType) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.diskType,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + "/delete/",
                (n = l.fileId) ? s = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.fileId,
                s = typeof n === c ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                o += h(s) + '" class="btn btn-link custom-btn"><i class="icon-custom-delete"></i><%=msg870%></a></li></ul></div>'
            }
            ), e)),
            this.model.get("thumb") && this.$(".file-icon-large").css({
                "background-image": 'url("' + this.model.get("thumb") + '")'
            }).addClass("image-center"),
            this.source) {
            case "LinkFileView":
                this.$(".show-remind-file").remove(),
                this.$(".show-recycle-file").remove();
                break;
            case "RemindFileView":
                this.$(".show-link-file").remove(),
                this.$(".show-recycle-file").remove();
                break;
            case "RecycleTableView":
                this.$(".file-type a, .file-name a").attr("href", "###"),
                this.$(".show-link-file").remove(),
                this.$(".show-remind-file").remove()
            }
            return this._ctrlView(),
            this._onChecked(),
            this._bindContextmenu(),
            this
        },
        _addListeners: function() {
            this.listenTo(this.model, "change:checked", function() {
                this._onChecked()
            }
            )
        },
        _ctrlView: function() {
            {
                var e = this;
                e.$("a[name=file-name],a[name=file-icon]")
            }
            this.model.isFolder() || this.$("a.file-icon, a.file-name").css({
                cursor: "default",
                "text-decoration": "none"
            })
        },
        _onChecked: function() {
            this.$(".checkbox-sprite").toggleClass("true", this.model.get("checked")),
            this.$el.toggleClass("selected", this.model.get("checked"))
        },
        _bindContextmenu: function() {
            var e = this;
            this.$("ul.file-thumb-wrap").contextmenu({
                target: "[name=context-menu-" + this.model.get("fileId") + "]",
                before: function() {
                    return e.collection.toggleSelectFile(e.model, !0),
                    e._onChecked(),
                    model.messageEvent.trigger(EventType.clearContextmenus),
                    !0
                }
            })
        },
        multiSelectFile: function(e) {
            this.model.set("checked", !this.model.get("checked")),
            model.messageEvent.trigger(EventType.clearContextmenus),
            e.stopPropagation()
        },
        toggleSelectFile: function(e) {
            if ("new" === this.model.get("fileId") && this.model.isFolder())
                return !0;
            var t = $(e.target);
            return t.is("a") || t.is("i") || t.is("button") ? !0 : void this.collection.toggleSelectFile(this.model)
        },
        _onDelLink: function() {
            this.model.deleteLink()
        },
        _onEditLink: function() {
            router.fileRouter.shareFile(this.model)
        },
        _onDelRemind: function() {
            var e = this;
            this.model.deleteRemindShareFile(function() {
                e.model.set("remind", !1)
            }
            )
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/RemindFileView", function(require, e, i) {
    var t = require("app/website/file/models/RemindFileList")
      , s = require("app/website/file/views/RemindFileItem")
      , l = require("app/website/file/views/FileSearchView")
      , n = require("app/commons/uikit/support/LoadingView")
      , o = require("app/commons/uikit/support/EmptyView")
      , h = require("app/website/file/views/FileThumbItem2")
      , c = require("app/website/file/views/SwitchView");
    i.exports = Backbone.View.extend({
        tagName: "div",
        id: "fileInterestView",
        className: "file-main remind-file-view",
        remindFileList: void 0,
        collectionBinder: void 0,
        $listView: void 0,
        $checkAll: void 0,
        $operateBtns: void 0,
        $delAttentionBtn: void 0,
        events: {
            "click .file-table-header .check-all": "_onCheckAll",
            "click ul.operate-btn .del-attention-btn": "_onClickDelAttention",
            "click .file-table-header .file-name": "sortByName",
            "click .file-table-header .file-size": "sortBySize",
            "click .file-table-header .file-time": "sortByTime"
        },
        initialize: function() {
            this.collection = this.remindFileList = new t,
            this._addListeners();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this._viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e,this.collection),
            this.render()
        },
        render: function() {
            var e = this;
            return this.$el.html(__html(Handlebars.template(function(e, i, t, s, l) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                l = l || {},
                '<div class="file-view-top"><div class="title inline-block left"><i class="icon-custom-focus-nav2"></i> <%=msgMyFocus%></div><div class="inline-block right"><div class="search-container inline-block right"></div></div></div><div class="file-view-operate"><div class="operates-container inline-block left"><ul class="operate-btn inline-block"><li class="btns del-attention-btn"><a href="###" class="btn  btn-white-blue"><i class="icon-custom-attention-alt"></i> <%=msg604%></a></li></ul></div><div class="switch-container inline-block right"></div></div><div class="file-table"><ul class="file-table-header show-path"><li class="file-check" name="file-check"><span class=\'checkbox-sprite check-all\'></span></li><li class="pipe"></li><li class="file-name cursor-pointer"><%= msg590 %> <i class="fa fa-sort-asc"></i></li><li class="pipe"></li><li class="file-status"><%= msg345 %></li><li class="pipe"></li><li class="file-size cursor-pointer"><%= msgSize %> <i class="fa fa-sort-asc hide-force"></i></li><li class="pipe"></li><li class="file-time cursor-pointer"><%= msg597 %> <i class="fa fa-sort-asc hide-force"></i></li><li class="pipe"></li><li class="file-path"><%= msgTheDirectory %></li></ul><ul id="remindFileTable" style="overflow: auto"></ul></div>'
            }
            ))),
            this.$fileTable = this.$(".file-table"),
            this.$listView = this.$("#remindFileTable"),
            this.$checkAll = this.$(".file-table-header .check-all"),
            this.$operateBtns = this.$(".operate-btn .btns"),
            this.$delAttentionBtn = this.$(".operate-btn .btns"),
            this.searchView && this.searchView.close(),
            this.searchView = new l({
                el: this.$(".search-container"),
                settingObj: {
                    title: msgs.msg540 + msgs.msg656
                },
                collection: this.remindFileList
            }),
            this.searchView.on(EventType.onSearch, this._onSearch, this),
            this._hideAllBtns(!0),
            this.switchView = new c,
            this.$(".switch-container").html(this.switchView.el),
            this._switchShow(),
            this.collectionBinder.bind(this.collection, this.$listView),
            this.loadingView = new n({
                el: this.$el,
                parent: this.$fileTable
            }),
            this.emptyView = new o({
                el: this.$fileTable,
                type: "empty-list",
                tips: msgs.msgAttentionEmpty
            }),
            this.$("#file-keyword-search").bind("keydown", "return", function(i) {
                e.fileQuery(i)
            }
            ),
            this.onResize(),
            this
        },
        _addListeners: function() {
            this.listenTo(this.collection, "change:remind", this._onModifyRemind),
            this.listenTo(this.collection, "change:checked", this._onFileSelect),
            this.listenTo(this.collection, EventType.fetched, this._onHideLoading),
            this.listenTo(this.collection, "remove", this._onShowEmpty),
            this.listenTo(model.setting, "change:height change:width", this.onResize),
            this.listenTo(model.messageEvent, EventType.clearContextmenus, this.hideContextMenu)
        },
        _viewCreator: function(e, i) {
            return "list" === cache.showType ? new s({
                model: e,
                collection: i
            }) : new h({
                model: e,
                collection: i,
                source: "RemindFileView"
            })
        },
        _switchShow: function() {
            var e = this;
            this._dealHeaderShow("thumb" === cache.showType),
            this.switchView.on("changeShowType", function() {
                e.collection.reset(e.collection.models),
                e._dealHeaderShow("thumb" === cache.showType)
            }
            ),
            this.switchView.on("toggleCollapse", function(e) {
                view.mainbox.collapseContentLeft(e)
            }
            )
        },
        _dealHeaderShow: function(e) {
            this.$(".file-table-header >li").toggleClass("hide-force", e),
            this.$(".file-table-header >li.file-check").removeClass("hide-force")
        },
        _onFileSelect: function() {
            var e = this.remindFileList.getCheckedFiles();
            1 === e.length ? this._hideAllBtns(!1) : e.length > 1 ? (this._hideAllBtns(!0),
            this.$(".del-attention-btn").removeClass("hide-force")) : this._hideAllBtns(!0),
            this._ctrlCheckAllBtn(e)
        },
        _onModifyRemind: function(e) {
            this.collection.remove(e)
        },
        _hideAllBtns: function(e) {
            this.$operateBtns.toggleClass("hide-force", e)
        },
        onResize: function() {
            this.$el.height(model.setting.getMainboxHeight()),
            this.$listView.height(model.setting.getMainboxHeight() - 61 - 85),
            this.emptyView && this.emptyView.changeHeight(model.setting.getFileTableHeight() - 60),
            this.$(".file-table-header").width(view.mainbox.$contentRight.width() - 22)
        },
        _onClickDelAttention: function() {
            var e = this.collection.getCheckedFiles();
            return 0 === e.length ? (noty.alert(msgs.msgNoFileFolder),
            !1) : void router.shareDiskRouter.doDelAttentionFile(e)
        },
        _onCheckAll: function() {
            var e = this.$checkAll.hasClass("true");
            this.$checkAll.toggleClass("true"),
            this.collection.each(function(i) {
                i.set({
                    checked: !e,
                    silent: !0
                })
            }
            ),
            this.$listView.find(".entFileItem .checkbox-sprite").toggleClass("true", !e),
            this._onFileSelect()
        },
        _ctrlCheckAllBtn: function(e) {
            var i = !!e.length && e.length === this.collection.length;
            this.$checkAll.toggleClass("true", i)
        },
        showLoading: function() {
            this.loadingView.show(),
            this.remindFileList.fetch("", constants.shareDisk)
        },
        _onSearch: function(e) {
            this.remindFileList.fetch(e, constants.shareDisk)
        },
        _onHideLoading: function(e) {
            this.loadingView.hide(),
            this._onShowEmpty(e)
        },
        _onShowEmpty: function(e) {
            var i = msgs.msgAttentionEmpty;
            e.keyword && (i = msgs.msgSearchEmpty),
            0 !== this.collection.length || this.$listView.hasClass("hide") || (this.$listView.addClass("hide"),
            this.emptyView.show(i)),
            this.collection.length > 0 && this.$listView.hasClass("hide") && (this.$listView.removeClass("hide"),
            this.emptyView.hide()),
            this._onFileSelect()
        },
        hideContextMenu: function() {
            this.$(".file-context-menu").removeClass("open")
        },
        sortByName: function() {
            this._sortByAttr("name", this.$(".file-table-header .file-name i"))
        },
        sortBySize: function() {
            this._sortByAttr("size", this.$(".file-table-header .file-size i"))
        },
        sortByTime: function() {
            this._sortByAttr("updateTime", this.$(".file-table-header .file-time i"))
        },
        _sortByAttr: function(e, i) {
            var t = this.changeOrderByIcon(e)
              , s = i.hasClass("fa-sort-asc");
            t || (i.toggleClass("fa-sort-asc", !s).toggleClass("fa-sort-desc", s),
            this.remindFileList.order = {
                orderBy: e,
                descending: s
            }),
            this.remindFileList.fetch("", constants.shareDisk)
        },
        changeOrderByIcon: function(e) {
            this._changeOrderByIcon(this.$(".file-table-header"), this.remindFileList, e)
        },
        _changeOrderByIcon: function(e, i, t) {
            var s = e.find(".file-name i")
              , l = e.find(".file-size i")
              , n = e.find(".file-time i");
            if (i.order.orderBy === t)
                return !1;
            switch (i.order.descending = !1,
            i.order.orderBy = t,
            t) {
            case "name":
                l.addClass("hide-force"),
                n.addClass("hide-force"),
                s.removeClass("hide-force");
                break;
            case "size":
                n.addClass("hide-force"),
                s.addClass("hide-force"),
                l.removeClass("hide-force");
                break;
            case "updateTime":
                s.addClass("hide-force"),
                l.addClass("hide-force"),
                n.removeClass("hide-force")
            }
        },
        close: function() {
            this.remindFileList && this.remindFileList.reset(),
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/LinkFileItem", function(require, e, i) {
    i.exports = Backbone.View.extend({
        tagName: "li",
        className: "entFileItem",
        linkFile: void 0,
        events: {
            "click .del-share-btn": "_onDelLink",
            "click .edit-share-btn": "_onEditLink",
            "click .checkbox-sprite": "_multiSelectFile",
            "click ": "_toggleSelectFile"
        },
        initialize: function() {
            this.linkFile = this.model,
            this._addListeners()
        },
        _addListeners: function() {
            this.listenTo(this.linkFile, "change:checked", this._onChecked)
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, l, t, a) {
                function s() {
                    return "true"
                }
                function n() {
                    return " hide-force "
                }
                function c() {
                    return " hide "
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                l = this.merge(l, e.helpers),
                a = a || {};
                var h, o, r = "", d = this, p = "function", m = this.escapeExpression;
                return r += "<ul class='each-file-item'><li class=\"file-check\"><span class='checkbox-sprite ",
                h = l["if"].call(i, i && i.checked, {
                    hash: {},
                    inverse: d.noop,
                    fn: d.program(1, s, a),
                    data: a
                }),
                (h || 0 === h) && (r += h),
                r += '\'><input type="checkbox" style=\'visibility:hidden\' checked=false></span></li><li class="pipe"></li><li class="file-name"><a href="#',
                (o = l.openFolderUrl) ? h = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.openFolderUrl,
                h = typeof o === p ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                r += m(h) + '" class="file-name" target="" name="file-name" title="',
                (o = l.name) ? h = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.name,
                h = typeof o === p ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                r += m(h) + '"><i class="file-icon-medium ',
                (o = l.icon) ? h = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.icon,
                h = typeof o === p ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                r += m(h) + '" href="#',
                (o = l.openFolderUrl) ? h = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.openFolderUrl,
                h = typeof o === p ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                r += m(h) + '"></i><em class="',
                h = l.unless.call(i, i && i.isExpired, {
                    hash: {},
                    inverse: d.noop,
                    fn: d.program(3, n, a),
                    data: a
                }),
                (h || 0 === h) && (r += h),
                r += ' font-red"> (已失效) </em>',
                (o = l.name) ? h = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.name,
                h = typeof o === p ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                r += m(h) + '</a></li><li class="pipe"></li><li class="file-status"><a class="btn btn-link file-icon-unlock ',
                h = l.unless.call(i, i && i.isLock, {
                    hash: {},
                    inverse: d.noop,
                    fn: d.program(5, c, a),
                    data: a
                }),
                (h || 0 === h) && (r += h),
                r += '" href="###"><i class="icon-custom-lock"></i></a><a class="btn btn-link file-icon-delattention ',
                h = l.unless.call(i, i && i.isRemind, {
                    hash: {},
                    inverse: d.noop,
                    fn: d.program(5, c, a),
                    data: a
                }),
                (h || 0 === h) && (r += h),
                r += '" href="###"><i class="icon-custom-attention"></i></a><a class="btn btn-link file-icon-delshare ',
                h = l.unless.call(i, i && i.isLink, {
                    hash: {},
                    inverse: d.noop,
                    fn: d.program(5, c, a),
                    data: a
                }),
                (h || 0 === h) && (r += h),
                r += '" href="###"><i class="icon-custom-share"></i></a><a class="btn btn-link file-icon-convert ',
                h = l.unless.call(i, i && i.isConverting, {
                    hash: {},
                    inverse: d.noop,
                    fn: d.program(5, c, a),
                    data: a
                }),
                (h || 0 === h) && (r += h),
                r += '" href="###" title="<%=msg598%>"><i class="icon-spinner icon-spin"></i></a></li><li class="pipe"></li><li class="file-size"><span name="size">',
                (o = l.size) ? h = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.size,
                h = typeof o === p ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                r += m(h) + '</span></li><li class="pipe"></li><li class="file-time"><span name="updateTime" class=\'update\'>',
                (o = l.updateTime) ? h = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.updateTime,
                h = typeof o === p ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                r += m(h) + '</span></li><li class="pipe"></li><li class="file-path"><a href="#',
                (o = l.openFolderUrl) ? h = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.openFolderUrl,
                h = typeof o === p ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                r += m(h) + '" title="<%=msg562%>">',
                (o = l.path) ? h = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.path,
                h = typeof o === p ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                r += m(h) + '</a></li></ul><div id="context-menu-',
                (o = l.shareLinkId) ? h = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.shareLinkId,
                h = typeof o === p ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                r += m(h) + '" class="file-context-menu"><ul class="dropdown-menu" role="menu"><li class="edit-share-btn"><a class="btn btn-link custom-btn" data="',
                (o = l.shareLinkId) ? h = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.shareLinkId,
                h = typeof o === p ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                r += m(h) + '"><i class="icon-custom-share-edit"></i> <%=msg606%></a></li><li class="del-share-btn"><a class="btn btn-link custom-btn" data=',
                (o = l.shareLinkId) ? h = o.call(i, {
                    hash: {},
                    data: a
                }) : (o = i && i.shareLinkId,
                h = typeof o === p ? o.call(i, {
                    hash: {},
                    data: a
                }) : o),
                r += m(h) + '><i class="icon-custom-share-cancel"></i> <%=msg507%></a></li></ul></div>'
            }
            ), {
                fileId: this.linkFile.get("fileId"),
                shareLinkId: this.linkFile.get("shareLinkId"),
                name: constants.dealSpecialFolder(this.linkFile.get("name"), this.linkFile.get("fileType")),
                icon: constants.typeConverter(this.linkFile.get("type")),
                viewUrl: this.linkFile.getPreviewUrl(),
                openFolderUrl: this.linkFile.getOpenFolderUrl(),
                path: constants.dealSpecialPath(this.linkFile.get("path"), this.linkFile.get("fileType")) || "-",
                updateTime: this.linkFile.get("updateTime"),
                size: constants.sizeConverter(this.linkFile.get("size")),
                isLock: this.linkFile.isLock(),
                isRemind: this.linkFile.hasRemind(),
                isLink: this.linkFile.hasShareLink(),
                isConverting: this.linkFile.isFileConverting(),
                checked: this.linkFile.get("checked"),
                isExpired: this.linkFile.isExpired()
            })),
            this._bindContextmenu(),
            this
        },
        _onDelLink: function() {
            this.linkFile.deleteLink()
        },
        _onEditLink: function() {
            router.fileRouter.shareFile(this.linkFile)
        },
        _onChecked: function() {
            this.$(".checkbox-sprite, .each-file-item").toggleClass("true", this.linkFile.get("checked"))
        },
        _bindContextmenu: function() {
            var e = this;
            this.$("ul.each-file-item").contextmenu({
                target: "#context-menu-" + this.model.get("shareLinkId"),
                before: function() {
                    return e.collection.toggleSelectFile(e.model, !0),
                    model.messageEvent.trigger(EventType.clearContextmenus),
                    !0
                }
            })
        },
        _multiSelectFile: function(e) {
            this.model.set("checked", !this.model.get("checked")),
            model.messageEvent.trigger(EventType.clearContextmenus),
            e.stopPropagation()
        },
        _toggleSelectFile: function(e) {
            if ("new" === this.model.get("fileId") && this.model.isFolder())
                return !0;
            var i = $(e.target);
            return i.is("a") || i.is("i") || i.is("button") ? !0 : void this.collection.toggleSelectFile(this.model)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/models/LinkFileDTO", function(require, e, i) {
    var t = require("app/commons/models/file/EntFileDTO");
    i.exports = t.extend({
        idAttribute: "shareLinkId",
        getOpenFolderUrl: function() {
            return constants.getOpenFolderUrl(this.isEntDisk(), this.isFolder(), this.get("fileId") || this.get("folderId"))
        },
        isExpired: function() {
            var e = this.get("linkDTO").expirationTime;
            return e ? e < (new Date).valueOf() : !1
        }
    })
}
);
;define("app/website/file/models/LinkFileList", function(require, e, t) {
    var i = require("app/website/file/models/LinkFileDTO");
    t.exports = Backbone.Collection.extend({
        model: i,
        order: {
            orderBy: "name",
            descending: !1
        },
        initialize: function() {
            this.listenTo(model.messageEvent, MessageType.FileConvertDone, this.onFileConvertDone)
        },
        isEntDisk: function() {
            return !0
        },
        fetch: function(e, t, n) {
            var s = this;
            this.reset(),
            resturl.getLinkFiles(_.extend({
                searchKey: e,
                fileType: t
            }, {
                order: this.order
            }), function(o) {
                _.each(o.files, function(e) {
                    var n = new i(e);
                    n.set({
                        unopen: !0,
                        fileType: t
                    }),
                    s.add(n)
                }
                ),
                n && n(),
                s.trigger(EventType.fetched, {
                    keyword: e
                })
            }
            )
        },
        onFileConvertDone: function(e) {
            var t = JSON.parse(e.get("msgBody"))
              , i = this.get(t.fileId);
            i && i.set("fileStatus", t.status)
        },
        toggleSelectFile: function(e, t) {
            this.each(function(t) {
                t.id !== e.id && t.get("checked") && t.set("checked", !1)
            }
            , this),
            e.set("checked", t || !e.get("checked"))
        },
        getCheckedFiles: function() {
            return this.where({
                checked: !0
            })
        },
        getOnlyCheckedFile: function() {
            var e = this.getCheckedFiles();
            return e[0]
        }
    })
}
);
;define("app/website/file/views/LinkFileView", function(require, e, i) {
    var t = require("app/website/file/views/LinkFileItem")
      , s = require("app/website/file/models/LinkFileList")
      , l = require("app/website/file/views/FileSearchView")
      , n = require("app/commons/uikit/support/LoadingView")
      , o = require("app/commons/uikit/support/EmptyView")
      , h = require("app/website/file/views/FileThumbItem2")
      , a = require("app/website/file/views/SwitchView");
    i.exports = Backbone.View.extend({
        tagName: "div",
        id: "fileShareView",
        className: "file-main link-file-view",
        linkFileList: void 0,
        collectionBinder: void 0,
        $listView: void 0,
        $fileTable: void 0,
        $checkAll: void 0,
        $delShareBtn: void 0,
        fileType: constants.fileType.shareDisk,
        events: {
            "click .file-table-header .check-all": "_onCheckAll",
            "click ul.operate-btn .btn-modify-link ": "_onClickEditShare",
            "click ul.operate-btn .btn-cancel-link": "_onClickDelShare",
            "click #entShare": "_onShowEnt",
            "click #personShare": "_onShowPerson",
            "click .file-table-header .file-name": "sortByName",
            "click .file-table-header .file-size": "sortBySize",
            "click .file-table-header .file-time": "sortByTime"
        },
        initialize: function() {
            this.linkFileList = this.collection = new s,
            this._addListeners();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, t, s, l) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                l = l || {},
                '<div class="file-view-top"><div class="title inline-block left"><i class="icon-custom-share-nav2"></i> <%=msgMyShare%></div><div class="inline-block right"><div class="search-container inline-block right"></div></div></div><div class="tabbable"><ul class="nav nav-tabs hide-public" style="margin-bottom:0;"><li id="entShare" class="active"><a href="#tab1" data-toggle="tab"><%=msgEntFile%></a></li><li id=\'personShare\'><a href="#tab2" data-toggle="tab"><%=msgPersonFile%></a></li></ul></div><div class="file-view-operate"><div class="operates-container inline-block left"><ul class="operate-btn inline-block"><li class=" btns edit-share-btn"><a class="btn  btn-white-blue btn-modify-link"><i class="icon-custom-share-edit"></i> <%=msg606%></a></li><li class="btns del-share-btn"><a href="###" class="btn  btn-white-blue btn-cancel-link"><i class="icon-custom-share-cancel"></i><%=msg507%></a></li></ul></div><div class="switch-container inline-block right"></div></div><div class="file-table"><ul class="file-table-header show-path"><li class="file-check" name="file-check"><span class=\'checkbox-sprite check-all\'></span></li><li class="pipe"></li><li class="file-name cursor-pointer"><%= msg590 %> <i class="fa fa-sort-asc"></i></li><li class="pipe"></li><li class="file-status"><%= msg345 %></li><li class="pipe"></li><li class="file-size cursor-pointer"><%= msgSize %> <i class="fa fa-sort-asc hide-force"></i></li><li class="pipe"></li><li class="file-time cursor-pointer"><%= msg597 %> <i class="fa fa-sort-asc hide-force"></i></li><li class="pipe"></li><li class="file-path"><%= msgTheDirectory %></li></ul><ul id="shareFileList" style="overflow: auto"></ul></div>'
            }
            ))),
            this.$listView = this.$("#shareFileList"),
            this.$fileTable = this.$("div.file-table"),
            this.$checkAll = this.$(".file-table-header .check-all"),
            this.$delShareBtn = this.$(".del-share-btn"),
            this.searchView && this.searchView.close(),
            this.searchView = new l({
                el: this.$(".search-container"),
                settingObj: {
                    title: msgs.msg540 + msgs.msg661
                },
                collection: this.collection
            }),
            this.searchView.on(EventType.onSearch, this._onSearch, this),
            this.switchView = new a,
            this.$(".switch-container").html(this.switchView.el),
            this._switchShow(),
            this.collectionBinder.bind(this.collection, this.$listView),
            this._hideAllBtns(!0),
            this.loadingView = new n({
                el: this.$el,
                parent: this.$fileTable
            }),
            this.emptyView = new o({
                el: this.$fileTable,
                type: "empty-list",
                tips: msgs.msgLinkEmpty
            }),
            this.onResize(),
            this
        },
        _addListeners: function() {
            this.listenTo(this.collection, "change:checked", this._onFileSelect),
            this.listenTo(this.collection, "change:shareLinkId", this._onDelLink),
            this.listenTo(this.collection, EventType.fetched, this._onHideLoading),
            this.listenTo(this.collection, "remove", this._onShowEmpty),
            this.listenTo(model.messageEvent, EventType.clearContextmenus, this.hideContextMenu),
            this.listenTo(model.messageEvent, EventType.onCancelShare, this._onCancelShare)
        },
        _onCancelShare: function(e) {
            var i = this.collection.findWhere({
                fileId: e
            });
            i.set("shareLinkId", null )
        },
        viewCreator: function(e, i) {
            return "list" === cache.showType ? new t({
                model: e,
                collection: i
            }) : new h({
                model: e,
                collection: i,
                source: "LinkFileView"
            })
        },
        _switchShow: function() {
            var e = this;
            this._dealHeaderShow("thumb" === cache.showType),
            this.switchView.on("changeShowType", function() {
                e.collection.reset(e.collection.models),
                e._dealHeaderShow("thumb" === cache.showType)
            }
            ),
            this.switchView.on("toggleCollapse", function(e) {
                view.mainbox.collapseContentLeft(e)
            }
            )
        },
        _dealHeaderShow: function(e) {
            this.$(".file-table-header >li").toggleClass("hide-force", e),
            this.$(".file-table-header >li.file-check").removeClass("hide-force")
        },
        _onDelLink: function(e) {
            this.linkFileList.remove(e)
        },
        onResize: function() {
            this.$el.height(model.setting.getMainboxHeight()),
            this.$listView.height(model.setting.getMainboxHeight() - 72),
            this.emptyView && this.emptyView.changeHeight(model.setting.getFileTableHeight() - 60),
            this.$(".file-table-header").width(view.mainbox.$contentRight.width() - 22)
        },
        _onFileSelect: function() {
            var e = this.linkFileList.getCheckedFiles();
            this._hideAllBtns(1 !== e.length),
            e.length && this.$delShareBtn.removeClass("hide-force"),
            this._ctrlCheckAllBtn(e)
        },
        _hideAllBtns: function(e) {
            this.$(".operate-btn .btns").toggleClass("hide-force", e)
        },
        addCopeFlash: function() {
            var e = {};
            e.id = "linkViewCopy";
            var i = {};
            i.wmode = "transparent";
            var t = {};
            swfobject.embedSWF("/os/swf/clipboard.swf", "linkViewCopy", "200", "35", "11.1.0", "clipboard.swf", e, i, t)
        },
        _onCheckAll: function() {
            var e = this.$checkAll.hasClass("true");
            this.$checkAll.toggleClass("true"),
            this.collection.each(function(i) {
                i.set({
                    checked: !e,
                    silent: !0
                })
            }
            ),
            this.$listView.find(".entFileItem .checkbox-sprite").toggleClass("true", !e),
            this._onFileSelect()
        },
        _ctrlCheckAllBtn: function(e) {
            var i = !!e.length && e.length === this.collection.length;
            this.$checkAll.toggleClass("true", i)
        },
        _onClickEditShare: function() {
            return router.fileRouter.shareFile(this.collection.getOnlyCheckedFile()),
            !1
        },
        _onClickDelShare: function() {
            var e = this.collection.getCheckedFiles();
            if (e.length < 1)
                return !1;
            if (1 == e.length) {
                var i = e[0];
                router.fileRouter.doDelShare(i, this.fileType)
            } else
                router.fileRouter.doDelShares(e, this.fileType)
        },
        showLoading: function() {
            this._onSearch("")
        },
        _onSearch: function(e) {
            this.loadingView.show(),
            this.linkFileList.fetch(e, this.fileType)
        },
        _onShowEnt: function() {
            this.fileType = constants.fileType.shareDisk,
            this._onSearch("")
        },
        _onShowPerson: function() {
            this.fileType = constants.fileType.onlineDisk,
            this._onSearch("")
        },
        _onHideLoading: function(e) {
            this.loadingView.hide(),
            this._onShowEmpty(e)
        },
        _onShowEmpty: function(e) {
            var i = msgs.msgLinkEmpty;
            e.keyword && (i = msgs.msgSearchEmpty),
            0 !== this.collection.length || this.$listView.hasClass("hide") || (this.$listView.addClass("hide"),
            this.emptyView.show(i)),
            this.collection.length > 0 && this.$listView.hasClass("hide") && (this.$listView.removeClass("hide"),
            this.emptyView.hide()),
            this._onFileSelect()
        },
        hideContextMenu: function() {
            this.$(".file-context-menu").removeClass("open")
        },
        sortByName: function() {
            this._sortByAttr("name", this.$(".file-table-header .file-name i"))
        },
        sortBySize: function() {
            this._sortByAttr("size", this.$(".file-table-header .file-size i"))
        },
        sortByTime: function() {
            this._sortByAttr("updateTime", this.$(".file-table-header .file-time i"))
        },
        _sortByAttr: function(e, i) {
            var t = this.changeOrderByIcon(e)
              , s = i.hasClass("fa-sort-asc");
            t || (i.toggleClass("fa-sort-asc", !s).toggleClass("fa-sort-desc", s),
            this.linkFileList.order = {
                orderBy: e,
                descending: s
            }),
            this._onSearch("")
        },
        changeOrderByIcon: function(e) {
            this._changeOrderByIcon(this.$(".file-table-header"), this.linkFileList, e)
        },
        _changeOrderByIcon: function(e, i, t) {
            var s = e.find(".file-name i")
              , l = e.find(".file-size i")
              , n = e.find(".file-time i");
            if (i.order.orderBy === t)
                return !1;
            switch (i.order.descending = !1,
            i.order.orderBy = t,
            t) {
            case "name":
                l.addClass("hide-force"),
                n.addClass("hide-force"),
                s.removeClass("hide-force");
                break;
            case "size":
                n.addClass("hide-force"),
                s.addClass("hide-force"),
                l.removeClass("hide-force");
                break;
            case "updateTime":
                s.addClass("hide-force"),
                l.addClass("hide-force"),
                n.removeClass("hide-force")
            }
        },
        close: function() {
            this.linkFileList && this.linkFileList.reset(),
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/FullTxtIndexView", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "div",
        className: "fulltxt-index",
        _modelBinder: void 0,
        events: {
            "click .btn-txt-search": "_onSearch"
        },
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder,
            this.render()
        },
        render: function() {
            var e = this
              , t = "/os/assets/img/website/fulltxt-enter-logo.png";
            return "en_US" == webhelper.getLang() && (t = "/os/assets/img/website/fulltxt-enter-logo_en.png"),
            this.$el.html(__html(Handlebars.template(function(e, t, s, l, a) {
                this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                a = a || {};
                var i, n, c = "", o = "function", p = this.escapeExpression;
                return c += '<div class="index-main"><div class="ac title"><img src="',
                (n = s.fulltextlogo) ? i = n.call(t, {
                    hash: {},
                    data: a
                }) : (n = t && t.fulltextlogo,
                i = typeof n === o ? n.call(t, {
                    hash: {},
                    data: a
                }) : n),
                c += p(i) + '"/></div><div class="search"><div class="input-append"><input type="text" name="searchKey" class="search-text" placeholder="<%= msgInputSearch %>" maxlength="30" size="30"/><span class="btn btn-blue btn-txt-search"><%= msg540 %></span></div><ul class="type-list"><li id="checkall" class="btnall"><input type="radio" name="docType" value="all"/><span class="check-txt"><%= msg426 %></span></li><li class="btnall"><input type="radio" name="docType" value="doc"/><span class="check-txt">DOC</span></li><li class="btnall"><input type="radio" name="docType" value="ppt"/><span class="check-txt">PPT</span></li><li class="btnall"><input type="radio" name="docType" value="pdf"/><span class="check-txt">PDF</span></li><li class="btnall"><input type="radio" name="docType" value="xls"/><span class="check-txt">XLS</span></li><li class="btnall"><input type="radio" name="docType" value="txt"/><span class="check-txt">TXT</span></li><li class="btnall"><input type="radio" name="docType" value="other"/><span class="check-txt"><%= msg810%></span></li></ul></div><ul class="tips"><li><%=msgSearchForFullTxt%></li><li><%=msgSearchInfoQuickly%></li><li><%=msgSearchTip3%></li></ul></div>'
            }
            ), {
                fulltextlogo: t
            })),
            this._modelBinder.bind(this.model, this.el),
            this.$(".search-text").bind("keydown", "return", function() {
                return e.$(".btn-txt-search").click(),
                !1
            }
            ),
            this
        },
        _onSearch: function() {
            var e = $.trim(this.$(".search-text").val());
            e && (this.model.set("searchKey", e),
            this.trigger("onSearch", {
                searchKey: e.substr(0, 30),
                docType: this.model.get("docType")
            }))
        },
        close: function() {
            this._modelBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/FullTxtInviteView", function(require, e, i) {
    i.exports = Backbone.View.extend({
        tagName: "div",
        className: "full-text-invite full-text-trial",
        _modelBinder: void 0,
        events: {
            "click .submit": "_onSubmit"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            var e = this;
            return this.$el.html(__html(Handlebars.template(function(e, i, s, t, l) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                l = l || {},
                '<h2 class="ac"><span class="blue-font"><%= msgFullTxtFunc %> </span>&nbsp;&nbsp;<span class="orange-font"><%= msgFreeTry %></span></h2><ul style="margin-top:50px;"><li class="fl" style="width:240px;padding-right:70px;"><div class="lab"><strong><%= msgInviteCode %></strong></div><div class="inputs"><input type=\'text\' name=\'inviteCode\' class="invite-code"/><span class="btn btn-orange submit"><%= msgInviteCode %></span></div><div class="tips"><div class="title"><b><%= msgSimpleTip %></b></div><ul class="tip-list"><li><%= msgEaseUse %></li><li><%= msgFullTxt500 %></li><li><%= msgGetYanmaiWechat %></li></ul></div></li><li class="pipe fl"></li><li class="fl" style="width:240px;padding-left:70px;"><div class="lab"><strong><%= msgMethodGetInvieteCode %></strong></div><ul class="tip-list"><li><%= msgRemindYanmai %></li><li><%= msgEnterYanmai %></li></ul><div class="ac code"><span class="inline-block code3d"></span></div></li><li style="clear:both;"></li></ul>'
            }
            ))),
            this.$(".invite-code").bind("keydown", "return", function(i) {
                var s = $.trim($(i.target).val());
                s && e._checkCode(s)
            }
            ),
            this
        },
        _onSubmit: function() {
            var e = this.$(".invite-code").val();
            this._checkCode(e)
        },
        _checkCode: function(e) {
            var i = this;
            resturl.applyFreeService({
                freeCode: e,
                serviceType: constants.serviceType.search
            }, function(s) {
                if (constants.isResponseOK(s))
                    return void i.trigger("submit", e);
                switch (s) {
                case ErrorType.errorFreeCode:
                    noty.alert(msgs.msgFreeCodeError);
                    break;
                case ErrorType.errorTodayApplyOver:
                    i.trigger("quota");
                    break;
                default:
                    noty.error(msgs.msgServerError)
                }
            }
            )
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/FullTxtQuotaView", function(require, e, s) {
    s.exports = Backbone.View.extend({
        tagName: "div",
        className: "full-text-invite full-text-trial",
        _modelBinder: void 0,
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, s, i, t, n) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                n = n || {},
                '<h2 class="ac"><span class="blue-font"><%= msgFullTxtFunc %></span>&nbsp;&nbsp;<span class="orange-font"><%= msgFreeTry %></span></h2><div class="ac" style="margin-top:50px;"><div class="full-tip"><%= msgSorryTrialQuota %></div><div class="focus-tip"><%= msgFocusYanmai %></div></div><div class="ac code"><span class="inline-block code3d"></span></div>'
            }
            ))),
            this
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/models/FullTextDTO", function(require, t, e) {
    var i = require("app/commons/models/file/BaseFileDTO");
    e.exports = i.extend({
        idAttribute: "fileId",
        defaults: {
            diskType: void 0,
            viewUrl: void 0,
            searchModel: !1,
            fileId: void 0,
            icon: void 0,
            fileName: void 0,
            score: void 0,
            fileSize: void 0,
            updateTime: void 0,
            path: void 0,
            openFilesUrl: void 0
        },
        initialize: function() {
            if (this.get("updateTime") && this.set("updateTime", constants.date_format(this.get("updateTime"))),
            this.get("score") && this.set("score", Math.round(100 * this.get("score")) / 100),
            this.get("fileSize") && this.set("fileSize", constants.convertSize(this.get("fileSize"))),
            this.get("path")) {
                var t = constants.getFileSuffix(this.get("path"));
                this.set("type", t),
                this.set("icon", constants.typeConverter(t))
            }
            this.get("convStatus") && this.set("fileStatus", this.get("convStatus"))
        },
        isEntDisk: function() {
            return this.get("fileType") === constants.fileType.shareDisk
        },
        hasPermission: function(t) {
            return this.get("permissionDTO") && !!this.get("permissionDTO")[t]
        },
        getRootIcon: function() {
            return this.isEntDisk() ? "icon-custom-ent-root" : "icon-custom-person-root"
        },
        parsePath: function() {
            return this.isEntDisk() ? constants.dealEntSpecialPath(this.get("path")) : constants.dealPersonSpecialPath(this.get("path"))
        },
        getPreviewUrl: function() {
            return constants.getPreviewUrl({
                fileId: this.id,
                guid: this.get("fileGuid"),
                type: this.get("type"),
                diskType: this.get("fileType"),
                searchKey: this.get("searchKey")
            })
        },
        getMarkedFileName: function(t) {
            var e = this.get("fileName");
            if (!t)
                return e;
            var i = _.filter(t.split(" "), function(t) {
                return !!t
            }
            );
            return _.each(i, function(t) {
                -1 != t.indexOf("*") && (t = t.replace(/\*/g, ".*"));
                var i = new RegExp(t,"gi")
                  , s = e.match(i);
                s = _.uniq(s),
                _.each(s, function(t) {
                    e = e.replace(t, "<span class='keyword'>" + t + "</span>")
                }
                )
            }
            ),
            e
        }
    })
}
);
;define("app/website/file/models/FullTextCountDTO", function(require, o, d) {
    d.exports = Backbone.Model.extend({
        defaults: {
            count: void 0,
            doc: void 0,
            ppt: void 0,
            pdf: void 0,
            xls: void 0,
            txt: void 0,
            other: void 0
        }
    })
}
);
;define("app/website/file/models/FullTxtPageList", function(require, e, r) {
    var t = require("app/website/file/models/FullTextDTO")
      , s = require("app/website/file/models/FullTextCountDTO");
    r.exports = Backbone.Paginator.requestPager.extend({
        model: t,
        countDTO: new s,
        paginator_core: {
            url: resturl.flexService + "/sc/file/fullTextSearch",
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
            var r = this;
            if (!constants.isResponseError(e))
                return this.reset(),
                this.count = e.resultCount,
                this.totalRecords = e.resultCount,
                this.trigger(EventType.getRecord, this.count),
                this._updateCountInfo(e.resultCount, e.resultMap),
                _.each(e.files, function(e) {
                    e.searchKey = r.server_api.searchKey
                }
                ),
                e.files;
            var t = msgs.msgServerError;
            switch (e) {
            case ErrorType.errorNoPermission:
                t = msgs.msgNoPermission2;
                break;
            case ErrorType.error500:
            default:
                t = msgs.msgServerError
            }
            noty.error(t)
        },
        refreshCurrentPage: function(e) {
            var r = this.info();
            this.goTo(e ? r.currentPage > 1 ? r.currentPage - 1 : 1 : r.currentPage)
        },
        pageQuery: function(e, r, t) {
            this.server_api = _.pick(this.server_api, "userId", "entId", "skipResults", "maxResults"),
            r && _.extend(this.server_api, r),
            this.goTo(e, t)
        },
        _updateCountInfo: function(e, r) {
            this.countDTO.set(_.extend({
                count: e
            }, r))
        }
    })
}
);
;define("app/website/file/views/FullTextCountView", function(require, t, a) {
    a.exports = Backbone.View.extend({
        tagName: "div",
        className: "full-text-count-view",
        _modelBinder: void 0,
        initialize: function() {
            this.listenTo(this.model, "change", this.render),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(t, a, e, l, s) {
                function i(t, a) {
                    var l, s, i = "";
                    return i += '<li class="">( DOC <b name="doc">',
                    (s = e.doc) ? l = s.call(t, {
                        hash: {},
                        data: a
                    }) : (s = t && t.doc,
                    l = typeof s === c ? s.call(t, {
                        hash: {},
                        data: a
                    }) : s),
                    i += d(l) + '</b><%= msgA %>;</li><li>PPT <b name="ppt">',
                    (s = e.ppt) ? l = s.call(t, {
                        hash: {},
                        data: a
                    }) : (s = t && t.ppt,
                    l = typeof s === c ? s.call(t, {
                        hash: {},
                        data: a
                    }) : s),
                    i += d(l) + '</b><%= msgA %>;</li><li>PDF <b name="pdf">',
                    (s = e.pdf) ? l = s.call(t, {
                        hash: {},
                        data: a
                    }) : (s = t && t.pdf,
                    l = typeof s === c ? s.call(t, {
                        hash: {},
                        data: a
                    }) : s),
                    i += d(l) + '</b><%= msgA %>;</li><li>XLS <b name="xls">',
                    (s = e.xls) ? l = s.call(t, {
                        hash: {},
                        data: a
                    }) : (s = t && t.xls,
                    l = typeof s === c ? s.call(t, {
                        hash: {},
                        data: a
                    }) : s),
                    i += d(l) + '</b><%= msgA %>;</li><li>TXT <b name="txt">',
                    (s = e.txt) ? l = s.call(t, {
                        hash: {},
                        data: a
                    }) : (s = t && t.txt,
                    l = typeof s === c ? s.call(t, {
                        hash: {},
                        data: a
                    }) : s),
                    i += d(l) + '</b><%= msgA %>;</li><li><%= msg810 %> <b name="other">',
                    (s = e.other) ? l = s.call(t, {
                        hash: {},
                        data: a
                    }) : (s = t && t.other,
                    l = typeof s === c ? s.call(t, {
                        hash: {},
                        data: a
                    }) : s),
                    i += d(l) + "</b>个 )</li>"
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                e = this.merge(e, t.helpers),
                s = s || {};
                var n, h, o = "", c = "function", d = this.escapeExpression, r = this;
                return o += '<ul><li><%= msgAllFind %>"<b name="count">',
                (h = e.count) ? n = h.call(a, {
                    hash: {},
                    data: s
                }) : (h = a && a.count,
                n = typeof h === c ? h.call(a, {
                    hash: {},
                    data: s
                }) : h),
                o += d(n) + '</b>"<%= msgRelateResults %></li>',
                n = e["if"].call(a, a && a.isAll, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(1, i, s),
                    data: s
                }),
                (n || 0 === n) && (o += n),
                o += '</ul><button type="button" class="close" id="close-btn" aria-hidden="true">×</button>'
            }
            ), _.extend(this.model.toJSON(), {
                isAll: "all" === this.options.searchModel.get("docType")
            }))),
            this
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/FilePageView", function(require, e, t) {
    t.exports = Backbone.View.extend({
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
                var s, r, l = "", o = "function", c = this.escapeExpression;
                return l += '<span class="inline-block page-operate"><a href="###" class="first"><i class="icon-fast-backward"></i></a>&nbsp;&nbsp;<a href="###" class="prev"><i class="icon-step-backward"></i></a>&nbsp;&nbsp;<a href="###">',
                (r = i.currentPage) ? s = r.call(t, {
                    hash: {},
                    data: n
                }) : (r = t && t.currentPage,
                s = typeof r === o ? r.call(t, {
                    hash: {},
                    data: n
                }) : r),
                l += c(s) + '<a>/<a href="###">',
                (r = i.totalPages) ? s = r.call(t, {
                    hash: {},
                    data: n
                }) : (r = t && t.totalPages,
                s = typeof r === o ? r.call(t, {
                    hash: {},
                    data: n
                }) : r),
                l += c(s) + '</a>&nbsp;&nbsp;<a href="###" class="next"><i class="icon-step-forward"></i></a>&nbsp;&nbsp;<a href="###" class="last"><i class="icon-fast-forward"></i></a></span><span class="howmany per-page"><select id="changePageSize" style="width: 45px; height:20px; padding:0;"><option value="30">30</option><option value="50">50</option><option value="100">100</option></select></span>'
            }
            ), e)),
            this.$el.find("select > option").removeAttr("selected"),
            this.$el.find(_.sprintf("select > option[value=%s]", e.perPage)).attr("selected", "selected");
            var t = e.totalPages
              , i = e.currentPage;
            return this.$("a.first, a.prev").toggleClass("disabled", 1 === i),
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
            var t = this.getFilterField()
              , i = this.getFilterValue();
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
}
);
;define("app/website/file/views/FullTxtSearchView", function(require, e, i) {
    var t = require("app/website/file/models/FullTxtPageList")
      , s = require("app/website/file/views/FullTextCountView")
      , l = require("app/website/file/views/FilePageView")
      , a = require("app/commons/uikit/support/PdfNotSupportView")
      , o = require("app/commons/uikit/support/LoadingView");
    i.exports = Backbone.View.extend({
        tagName: "div",
        className: "fulltxt-search",
        id: "fullTxtSearch",
        filecurrent: void 0,
        _collectionBinder: void 0,
        _countView: void 0,
        $hiddenInfo: void 0,
        settingObj: void 0,
        $hiddenTip: void 0,
        $radioBtn: void 0,
        $searchNoWord: void 0,
        events: {
            "click #close-btn": "_infoHidden",
            "click .btn-search-button": "_onSearch"
        },
        initialize: function() {
            this._initSettingObj(),
            this._modelBinder = new Backbone.ModelBinder,
            this.collection = new t;
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator(),this.collection);
            this._collectionBinder = new Backbone.CollectionBinder(e),
            this._addListeners(),
            this.render()
        },
        render: function() {
            var e = this;
            return this.$el.html(__html(Handlebars.template(function(e, i, t, s, l) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                l = l || {},
                '<div class="loading-container" style="width:100%;position:relative;"></div><div class="search-container"><div class="search-top"><input type="text" name="searchKey" class="search-text" placeholder="<%= msgInputSearchContent %>" maxlength="30" size="30"/><a class="btn-search-button"><i class="icon-custom-search"></i></a></div><div class="radio-btn"><ul class="radio-group-ul"><li id="checkall" class="btnall"><input type="radio" name="docType" value="all"/><span class="check-txt"><%= msg426 %></span></li><li class="btnall"><input type="radio" name="docType" value="doc"/><span class="check-txt">DOC</span></li><li class="btnall"><input type="radio" name="docType" value="ppt"/><span class="check-txt">PPT</span></li><li class="btnall"><input type="radio" name="docType" value="pdf"/><span class="check-txt">PDF</span></li><li class="btnall"><input type="radio" name="docType" value="xls"/><span class="check-txt">XLS</span></li><li class="btnall"><input type="radio" name="docType" value="txt"/><span class="check-txt">TXT</span></li><li class="btnall"><input type="radio" name="docType" value="other"/><span class="check-txt"><%= msg810 %></span></li></ul></div></div><div class="full-txt-content"><ul class="search-no-word hide-force"><li class="list-body-img"></li><li class="list-body-info1"><%= msgInputSearch %></li><li class="list-body-info2"><%= msgLocateFileContent %></li></ul><div class="search-show"><div class="search-tab"><ul class="list-header"><li class="file-no"><%= msg590 %></li><li class="pipe"></li><li class="score"><%= msgRelevance %></li><li class="pipe"></li><li class="size"><%= msgSize %></li><li class="pipe"></li><li class="update"><%= msg597 %></li><li class="pipe"></li><li class="address"><%= msgTheDirectory %></li></ul><div class="text-font hide-force"></div><ul class="list-body"><li class="hide-info">(<%= msgSearchNoMatches %>)</li></ul></div><div class="pageBox ar"></div></div></div>'
            }
            ))),
            this.$(".search-text").bind("keydown", "return", function() {
                return e.$(".btn-search-button").click(),
                !1
            }
            ),
            this._modelBinder.bind(this.model, this.el),
            this.$hiddenInfo = this.$(".text-font"),
            this.$hiddenTip = this.$(".hide-info"),
            this.$hiddenTip.hide(),
            this.$searchNoWord = this.$(".search-no-word"),
            this.$pageBox = this.$(".pageBox"),
            this._collectionBinder.bind(this.collection, this.$(".list-body")),
            this._showCountView(),
            this._infoHidden(),
            this.pageView = new l({
                collection: this.collection
            }),
            this.$pageBox.html(this.pageView.el),
            this._onResize(),
            this.loadingView = new o({
                el: this.$(".loading-container"),
                parent: $("#content-right")
            }),
            this
        },
        _initSettingObj: function() {
            this.settingObj = this.options.settingObj,
            this.settingObj || (this.settingObj = {}),
            _.defaults(this.settingObj, {
                searchMode: !1
            })
        },
        _addListeners: function() {
            this.listenTo(model.setting, "change:width change:height", this._onResize),
            this.listenTo(this.collection, EventType.getRecord, this._onGetFiles),
            this.listenTo(this.model, "change:docType", this._onChangeDocType)
        },
        _onResize: function() {
            var e = this.$(".text-font").hasClass("hide-force") ? 0 : 32;
            this.$(".list-body").height(model.setting.getMainboxHeight() - 159 - e)
        },
        _onGetFiles: function(e) {
            0 === e ? this.$hiddenTip.show() : (this.$hiddenInfo.removeClass("hide-force"),
            this._onResize(),
            this.$hiddenTip.hide())
        },
        _infoHidden: function() {
            this.$hiddenInfo.addClass("hide-force"),
            this._onResize()
        },
        viewCreator: function() {
            var e = this;
            return function(i, t) {
                return new n({
                    model: i,
                    collection: t,
                    searchModel: e.model
                })
            }
        },
        _showCountView: function() {
            this.$(".text-font").removeClass("hide-force"),
            this._countView && this._countView.close(),
            this._countView = new s({
                el: this.$(".text-font"),
                model: this.collection.countDTO,
                searchModel: this.model
            })
        },
        _onSearch: function() {
            var e = $.trim(this.$(".search-text").val());
            this.doSearch(e, this.model.get("docType"))
        },
        _onChangeDocType: function() {
            var e = $.trim(this.$(".search-text").val());
            e && this.doSearch(e, this.model.get("docType"))
        },
        doSearch: function(e, i) {
            var e = e.substr(0, 30)
              , t = this;
            return this.$(".search-no-word").toggleClass("hide-force", !!e),
            this.$(".search-show").toggleClass("hide-force", !e),
            e ? (this.model.set("searchKey", e),
            this.startLoading(),
            void this.collection.pageQuery(1, {
                searchKey: e,
                docType: i
            }, {
                success: function() {
                    t.stopLoading()
                }
            })) : void this.trigger("onSearchBack")
        },
        startLoading: function() {
            this.loadingView.show(),
            this.loadingView.$(".loading-view").css({
                width: "100%",
                position: "relative",
                left: "0px",
                top: "0px"
            })
        },
        stopLoading: function() {
            this.loadingView.hide()
        },
        close: function() {
            this._collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    });
    var n = Backbone.View.extend({
        tagName: "li",
        className: "list-item-body",
        searchModel: void 0,
        initialize: function() {
            this.searchModel = this.options.searchModel,
            this.listenTo(this.model, "change", this.render),
            this.render()
        },
        render: function() {
            var e = this.model.get("score").toString();
            return this.$el.html(__html(Handlebars.template(function(e, i, t, s, l) {
                function a(e, i) {
                    var s, l, a = "";
                    return a += ' href="',
                    (l = t.viewUrl) ? s = l.call(e, {
                        hash: {},
                        data: i
                    }) : (l = e && e.viewUrl,
                    s = typeof l === h ? l.call(e, {
                        hash: {},
                        data: i
                    }) : l),
                    a += d(s) + '" class="file-target" target="_blank" '
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                l = l || {};
                var o, n, c = "", h = "function", d = this.escapeExpression, r = this;
                return c += '<ul class="list-item"><li class="file-no"><a ',
                o = t["if"].call(i, i && i.canRead, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(1, a, l),
                    data: l
                }),
                (o || 0 === o) && (c += o),
                c += ' title="',
                (n = t.fileName) ? o = n.call(i, {
                    hash: {},
                    data: l
                }) : (n = i && i.fileName,
                o = typeof n === h ? n.call(i, {
                    hash: {},
                    data: l
                }) : n),
                c += d(o) + '"><span class="file-icon-medium ',
                (n = t.icon) ? o = n.call(i, {
                    hash: {},
                    data: l
                }) : (n = i && i.icon,
                o = typeof n === h ? n.call(i, {
                    hash: {},
                    data: l
                }) : n),
                c += d(o) + '"></span><span class="file-name"></span></a></li><li class="pipe"></li><li class="score" style="color:#f57b00;">',
                (n = t.score) ? o = n.call(i, {
                    hash: {},
                    data: l
                }) : (n = i && i.score,
                o = typeof n === h ? n.call(i, {
                    hash: {},
                    data: l
                }) : n),
                c += d(o) + '</li><li class="pipe"></li><li class="size">',
                (n = t.fileSize) ? o = n.call(i, {
                    hash: {},
                    data: l
                }) : (n = i && i.fileSize,
                o = typeof n === h ? n.call(i, {
                    hash: {},
                    data: l
                }) : n),
                c += d(o) + '</li><li class="pipe"></li><li class="update">',
                (n = t.updateTime) ? o = n.call(i, {
                    hash: {},
                    data: l
                }) : (n = i && i.updateTime,
                o = typeof n === h ? n.call(i, {
                    hash: {},
                    data: l
                }) : n),
                c += d(o) + '</li><li class="pipe"></li><li class="address" title=',
                (n = t.path) ? o = n.call(i, {
                    hash: {},
                    data: l
                }) : (n = i && i.path,
                o = typeof n === h ? n.call(i, {
                    hash: {},
                    data: l
                }) : n),
                c += d(o) + '><a href="#',
                (n = t.openFilesUrl) ? o = n.call(i, {
                    hash: {},
                    data: l
                }) : (n = i && i.openFilesUrl,
                o = typeof n === h ? n.call(i, {
                    hash: {},
                    data: l
                }) : n),
                c += d(o) + '" title="<%= msg562 %>"><i class="',
                (n = t.rootIcon) ? o = n.call(i, {
                    hash: {},
                    data: l
                }) : (n = i && i.rootIcon,
                o = typeof n === h ? n.call(i, {
                    hash: {},
                    data: l
                }) : n),
                c += d(o) + '"></i> &nbsp;',
                (n = t.path) ? o = n.call(i, {
                    hash: {},
                    data: l
                }) : (n = i && i.path,
                o = typeof n === h ? n.call(i, {
                    hash: {},
                    data: l
                }) : n),
                c += d(o) + "</a></li></ul>"
            }
            ), _.extend(this.model.toJSON(), {
                viewUrl: this.model.getPreviewUrl(),
                openFilesUrl: this.model.getOpenFolderUrl(),
                path: this.model.parsePath(),
                rootIcon: this.model.getRootIcon(),
                score: e.indexOf(".") > -1 ? e : e + ".0",
                canRead: !this.model.isEntDisk() || this.model.hasPermission("read")
            }))),
            this.$(".file-name").html(this.model.getMarkedFileName(this.searchModel.get("searchKey"))),
            this._ctrlView(),
            this
        },
        _ctrlView: function() {
            var e = this
              , i = e.$("a.file-target");
            if (!constants.isTxtType(this.model.get("type"))) {
                var t = this.model.getViewType();
                switch (t) {
                case "pic":
                case "aud":
                case "vid":
                case "html":
                    i.unbind("click").attr("target", "_blank");
                    break;
                case "excel":
                    this.model.isConvertDone() ? i.unbind("click").attr("target", "_blank") : i.click(function() {
                        e.model.isEntDisk() ? router.shareDiskRouter.doShowFile(this.model) : router.onlineDiskRouter.doShowFile(this.model)
                    }
                    );
                    break;
                case "pdf":
                    webhelper.isIE8() ? (i.unbind("click").attr("href", "#"),
                    i.click(function() {
                        return e.showPdfNotSupport(),
                        !1
                    }
                    ),
                    log.debug("bind pdfNotSupport to IE8")) : constants.isPdfType(this.model.get("type")) || this.model.isConvertDone() ? i.unbind("click").attr("target", "_blank") : i.click(function(i) {
                        return i.stopPropagation(),
                        i.preventDefault(),
                        e.model.isEntDisk() ? router.shareDiskRouter.doShowFile(e.model) : router.onlineDiskRouter.doShowFile(e.model),
                        !1
                    }
                    );
                    break;
                case "unknow":
                default:
                    i.unbind("click").css({
                        cursor: "default",
                        "text-decoration": "none"
                    })
                }
            }
        },
        showPdfNotSupport: function() {
            log.debug("showPdfNotSupport"),
            new a({
                pdfUrl: this.model.getPdfUrl(),
                fileName: this.model.getPdfName()
            })
        },
        close: function() {
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/models/FullTxtSearchDTO", function(require, e, l) {
    l.exports = Backbone.Model.extend({
        defaults: {
            searchKey: void 0,
            docType: "all"
        }
    })
}
);
;define("app/website/file/views/FullTxtView", function(require, e, t) {
    var i = require("app/website/file/views/FullTxtIndexView")
      , l = require("app/website/file/views/FullTxtInviteView")
      , s = require("app/website/file/views/FullTxtQuotaView")
      , h = require("app/website/file/views/FullTxtSearchView")
      , n = require("app/website/file/models/FullTxtSearchDTO");
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "fullTxt",
        className: "full-txt",
        fullTxtIndexView: void 0,
        fullTxtInviteView: void 0,
        fullTxtQuotaView: void 0,
        fullTxtSearchView: void 0,
        loadingView: void 0,
        initialize: function() {
            this.searchModel = new n,
            this.render()
        },
        render: function() {
            var e = this;
            return resturl.getServiceStatus({
                entId: cache.entId,
                userId: cache.userId
            }, function(t) {
                if (constants.isResponseError(t))
                    return void noty.error(msgs.msgServerError);
                switch (t.search) {
                case 0:
                    e._showInvite();
                    break;
                case 1:
                    cache.fullTxt && cache.fullTxt.searchKey ? (e.searchModel.set(cache.fullTxt),
                    e._onSearch(cache.fullTxt)) : e._showIndex();
                    break;
                case 2:
                    e._showQuota()
                }
            }
            ),
            this
        },
        _showInvite: function() {
            this.fullTxtInviteView && this.fullTxtInviteView.close(),
            this.fullTxtInviteView = new l,
            this.fullTxtInviteView.on("submit", this._showIndex, this),
            this.fullTxtInviteView.on("quota", this._showQuota, this),
            this.$el.html(this.fullTxtInviteView.el)
        },
        _showQuota: function() {
            this.fullTxtQuotaView && this.fullTxtQuotaView.close(),
            this.fullTxtQuotaView = new s,
            this.$el.html(this.fullTxtQuotaView.el)
        },
        _showIndex: function() {
            this.fullTxtIndexView && this.fullTxtIndexView.close(),
            this.fullTxtIndexView = new i({
                model: this.searchModel
            }),
            this.$el.html(this.fullTxtIndexView.el),
            this.fullTxtIndexView.on("onSearch", this._onSearch, this)
        },
        _onSearch: function(e) {
            this.fullTxtSearchView && this.fullTxtSearchView.close(),
            this.fullTxtSearchView = new h({
                model: this.searchModel
            }),
            this.fullTxtSearchView.on("onSearchBack", this._showIndex, this),
            this.fullTxtSearchView.doSearch(e.searchKey, e.docType),
            this.$el.html(this.fullTxtSearchView.el)
        },
        close: function() {
            cache.fullTxt = this.searchModel.toJSON(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/RecycleTableView", function(require, e, t) {
    var i = require("app/commons/uikit/support/LoadingView")
      , l = require("app/commons/uikit/support/EmptyView")
      , s = require("app/website/file/views/SwitchView")
      , a = Backbone.View.extend({
        tagName: "li",
        className: "file-thumb-item default",
        source: void 0,
        events: {
            "click .checkbox-sprite": "multiSelectFile",
            "click ": "toggleSelectFile"
        },
        initialize: function() {
            this.source = this.options.source,
            this._addListeners()
        },
        render: function() {
            var e = {
                searchMode: this.model.get("searchMode"),
                fileId: this.model.get("fileId"),
                downloadUrl: constants.getFileDownloadUrl(this.model),
                name: constants.dealEntSpecialFolder(this.model.get("name")),
                icon: constants.typeConverter(this.model.get("type")),
                viewUrl: this.model.hasPreviewPermission() ? this.model.getPreviewUrl() : "#sharedisk/not/read",
                updateTime: this.model.get("updateTime"),
                size: constants.sizeConverter(this.model.get("size")),
                path: this.model.get("path") || "-",
                openFolderUrl: this.model.getOpenFolderUrl(),
                diskType: this.model.get("diskType")
            };
            switch (this.$el.html(__html(Handlebars.template(function(e, t, i, l, s) {
                this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                s = s || {};
                var a, c, n = "", o = "function", h = this.escapeExpression;
                return n += '<ul class="file-thumb-wrap" title="',
                (c = i.name) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.name,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + '"><li class="file-check"><span class=\'checkbox-sprite\'></span></li><li class="file-type"><a name=\'file-icon\' class="file-icon-large ',
                (c = i.icon) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.icon,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + '" href="#',
                (c = i.openFolderUrl) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.openFolderUrl,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + '"></a></li><li class="file-name"><a href="#',
                (c = i.openFolderUrl) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.openFolderUrl,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + '" class="file-name" name="file-name" title="',
                (c = i.name) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.name,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + '">',
                (c = i.name) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.name,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + '</a></li></ul><div name="context-menu-',
                (c = i.fileId) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.fileId,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + '" class="file-context-menu show-link-file"><ul class="dropdown-menu" role="menu"><li class="edit-share-btn"><a href="###" class="btn btn-link custom-btn"><i class="icon-custom-share-edit"></i> <%=msg606%></a></li><li class="del-share-btn"><a href="###" class="btn btn-link custom-btn"><i class="icon-custom-share-cancel"></i> <%=msg507%></a></li></ul></div><div name="context-menu-',
                (c = i.fileId) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.fileId,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + '" class="file-context-menu show-remind-file"><ul class="dropdown-menu" role="menu"><li class="del-attention-btn"><a href="###" class="btn btn-link custom-btn"><i class="icon-custom-attention-alt"></i> <%=msg604%></a></li><li class="show-attention-btn"><a href="#',
                (c = i.openFolderUrl) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.openFolderUrl,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + '" class="btn btn-link custom-btn"><i class="icon-custom-place-alt"></i><%=msg562%></a></li></ul></div><div name="context-menu-',
                (c = i.fileId) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.fileId,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + '" class="file-context-menu show-recycle-file"><ul class="dropdown-menu" role="menu"><li><a href="#recycle/',
                (c = i.diskType) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.diskType,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + "/restore/",
                (c = i.fileId) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.fileId,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + '" class="btn btn-link custom-btn"><i class="icon-custom-restore"></i><%=msg655%></a></li><li><a href="#recycle/',
                (c = i.diskType) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.diskType,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + "/delete/",
                (c = i.fileId) ? a = c.call(t, {
                    hash: {},
                    data: s
                }) : (c = t && t.fileId,
                a = typeof c === o ? c.call(t, {
                    hash: {},
                    data: s
                }) : c),
                n += h(a) + '" class="btn btn-link custom-btn"><i class="icon-custom-delete"></i><%=msg870%></a></li></ul></div>'
            }
            ), e)),
            this.model.get("thumb") && this.$(".file-icon-large").css({
                "background-image": 'url("' + this.model.get("thumb") + '")'
            }).addClass("image-center"),
            this.source) {
            case "LinkFileView":
                this.$(".show-remind-file").remove(),
                this.$(".show-recycle-file").remove();
                break;
            case "RemindFileView":
                this.$(".show-link-file").remove(),
                this.$(".show-recycle-file").remove();
                break;
            case "RecycleTableView":
                this.$(".file-type a, .file-name a").attr("href", "###"),
                this.$(".show-link-file").remove(),
                this.$(".show-remind-file").remove()
            }
            return this._ctrlView(),
            this._onChecked(),
            this._bindContextmenu(),
            this
        },
        _addListeners: function() {
            this.listenTo(this.model, "change:checked", function() {
                this._onChecked()
            }
            )
        },
        _ctrlView: function() {
            {
                var e = this;
                e.$("a[name=file-name],a[name=file-icon]")
            }
            this.model.isFolder() || this.$("a.file-icon, a.file-name").css({
                cursor: "default",
                "text-decoration": "none"
            })
        },
        _onChecked: function() {
            this.$(".checkbox-sprite").toggleClass("true", this.model.get("checked")),
            this.$el.toggleClass("selected", this.model.get("checked"))
        },
        _bindContextmenu: function() {
            var e = this;
            this.$("ul.file-thumb-wrap").contextmenu({
                target: "[name=context-menu-" + this.model.get("fileId") + "]",
                before: function() {
                    return e.collection.toggleSelectFile(e.model, !0),
                    e._onChecked(),
                    model.messageEvent.trigger(EventType.clearContextmenus),
                    !0
                }
            })
        },
        multiSelectFile: function(e) {
            this.model.set("checked", !this.model.get("checked")),
            model.messageEvent.trigger(EventType.clearContextmenus),
            e.stopPropagation()
        },
        toggleSelectFile: function(e) {
            $(e.target);
            this.collection.toggleSelectFile(this.model)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
      , c = Backbone.View.extend({
        tagName: "li",
        className: "entFileItem",
        id: "recycle-item",
        events: {
            "click .checkbox-sprite": "multiSelectFile",
            click: "toggleSelectFile"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, i, l, s) {
                function a() {
                    return "true"
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                s = s || {};
                var c, n, o = "", h = this, d = "function", r = this.escapeExpression;
                return o += '<ul class="recycle-ul each-file-item"><li class="file-check"><span class="checkbox-sprite ',
                c = i["if"].call(t, t && t.checked, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(1, a, s),
                    data: s
                }),
                (c || 0 === c) && (o += c),
                o += '"></span></li><li class="pipe"></li><li class="file-name"><i class="file-icon-medium ',
                (n = i.iconType) ? c = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.iconType,
                c = typeof n === d ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += r(c) + '"></i><span class="file-name">',
                (n = i.name) ? c = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.name,
                c = typeof n === d ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += r(c) + '</span></li><li class="pipe"></li><li class="file-size"><span>',
                (n = i.size) ? c = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.size,
                c = typeof n === d ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += r(c) + '</span></li><li class="pipe"></li><li class="file-time"><span class="fd">',
                (n = i.updateTime) ? c = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.updateTime,
                c = typeof n === d ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += r(c) + '</span></li><li class="pipe"></li><li class="file-path">',
                (n = i.path) ? c = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.path,
                c = typeof n === d ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += r(c) + '</li></ul><div id="context-menu-',
                (n = i.fileId) ? c = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                c = typeof n === d ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += r(c) + '" class="file-context-menu"><ul class="dropdown-menu" role="menu"><li><a href="#recycle/',
                (n = i.diskType) ? c = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.diskType,
                c = typeof n === d ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += r(c) + "/restore/",
                (n = i.fileId) ? c = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                c = typeof n === d ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += r(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-restore"></i><%=msg655%></a></li><li><a href="#recycle/',
                (n = i.diskType) ? c = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.diskType,
                c = typeof n === d ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += r(c) + "/delete/",
                (n = i.fileId) ? c = n.call(t, {
                    hash: {},
                    data: s
                }) : (n = t && t.fileId,
                c = typeof n === d ? n.call(t, {
                    hash: {},
                    data: s
                }) : n),
                o += r(c) + '" class="btn btn-link custom-btn"><i class="icon-custom-delete"></i><%=msg870%></a></li></ul></div>'
            }
            ), {
                iconType: constants.typeConverter(this.model.get("type")),
                size: constants.sizeConverter(this.model.get("size")),
                updateTime: this.model.get("updateTime"),
                name: this.model.get("name"),
                fileId: this.model.get("fileId"),
                diskType: this.model.get("diskType"),
                path: constants.dealSpecialPath(this.model.get("path") || "", this.model.get("fileType")),
                checked: this.model.get("checked")
            })),
            this.listenTo(this.model, "change:checked", this._onChecked),
            this._bindContextmenu(),
            this
        },
        _onChecked: function() {
            this.$(".checkbox-sprite, .recycle-ul").toggleClass("true", this.model.get("checked"))
        },
        _bindContextmenu: function() {
            var e = this;
            this.$("ul.recycle-ul").contextmenu({
                target: "#context-menu-" + this.model.get("fileId"),
                before: function() {
                    return e.collection.toggleSelectFile(e.model, !0),
                    model.messageEvent.trigger(EventType.clearContextmenus),
                    !0
                }
            })
        },
        toggleSelectFile: function(e) {
            var t = $(e.target);
            return t.is("a") ? !0 : void this.collection.toggleSelectFile(this.model)
        },
        multiSelectFile: function(e) {
            this.model.set("checked", !this.model.get("checked")),
            model.messageEvent.trigger(EventType.clearContextmenus),
            e.stopPropagation()
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    });
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "entView-recycle",
        collectionBinder: void 0,
        $fileTable: void 0,
        $recycleTable: void 0,
        loadingView: void 0,
        emptyTableView: void 0,
        isEnt: void 0,
        events: {
            "click .file-table-header .check-all": "_onCheckAll",
            "click .btns .btn-restore": "_onRestoreFiles",
            "click .btns .btn-delete": "_onDeleteFiles",
            "click .btns .btn-empty": "_onEmptyRecycle",
            "click .file-table-header .file-name": "sortByName",
            "click .file-table-header .file-size": "sortBySize",
            "click .file-table-header .file-time": "sortByTime"
        },
        initialize: function() {
            this.addListeners(),
            this.isEnt = this.options.isEnt;
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator,this.collection);
            this.collectionBinder = new Backbone.CollectionBinder(e)
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, i, l, s) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                s = s || {},
                '<div id="fileTable" class="file-table"><div class="file-view-operate"><div class="operates-container inline-block left"><ul class="operate-btn"><li class="btns"><a class="btn btn-white-blue btn-empty" href="###"><i class="icon-custom-empty"></i><%=msg876%></a>&nbsp;<a class="btn btn-white-blue btn-restore" href="###"><i class="icon-custom-restore"></i><%=msg655%></a>&nbsp;<a class="btn btn-white-blue btn-delete" href="###"><i class="icon-custom-delete"></i><%=msg870%></a></li></ul></div><div class="switch-container inline-block right"></div></div><ul class="file-table-header show-path"><li class="file-check" name="file-check"><span class=\'checkbox-sprite check-all\'></span></li><li class="pipe"></li><li class="file-name cursor-pointer"><%= msg590 %> <i class="fa fa-sort-asc"></i></li><li class="pipe"></li><li class="file-size cursor-pointer"><%= msgSize %> <i class="fa fa-sort-asc hide-force"></i></li><li class="pipe"></li><li class="file-time cursor-pointer"><%= msg597 %> <i class="fa fa-sort-asc hide-force"></i></li><li class="pipe"></li><li class="file-path"><%= msgTheDirectory %></li></ul><ul id="recycleTable" class="file-table" style="overflow: auto"></ul></div>'
            }
            ))),
            this.$(".btns > .btn").not(".btn-empty").hide(),
            this.$(".btn-empty").toggleClass("hide-important", !model.currentUser.isAdmin() && this.isEnt),
            this.$fileTable = this.$("#fileTable"),
            this.$recycleTable = this.$("#recycleTable"),
            this.$checkAll = this.$(".file-table-header .check-all"),
            this.loadingView = new i({
                el: this.$el,
                parent: this.$fileTable
            }),
            this.emptyView = new l({
                el: this.$fileTable,
                type: "empty-list",
                tips: msgs.msgRecycleEmpty
            }),
            this.switchView = new s,
            this.$(".switch-container").html(this.switchView.el),
            this._switchShow(),
            this._onResize(),
            this.collectionBinder.bind(this.collection, this.$recycleTable),
            this
        },
        addListeners: function() {
            this.listenTo(this.collection, "change:checked", this.onFileSelect),
            this.listenTo(this.collection, "remove reset add", this._onShowEmpty),
            this.listenTo(this.collection, EventType.fetched, this._onHideLoading)
        },
        viewCreator: function(e, t) {
            return "list" === cache.showType ? new c({
                model: e,
                collection: t
            }) : new a({
                model: e,
                collection: t,
                source: "RecycleTableView"
            })
        },
        _onResize: function() {
            this.$recycleTable.height(model.setting.getMainboxHeight() - 61 - 37 - 75),
            this.emptyView && this.emptyView.changeHeight(model.setting.getFileTableHeight() - 60),
            this.$(".file-table-header").width(view.mainbox.$contentRight.width() - 22)
        },
        _onRestoreFiles: function() {
            this.collection.restoreFiles(this.collection.getCheckedFiles())
        },
        _switchShow: function() {
            var e = this;
            this._dealHeaderShow("thumb" === cache.showType),
            this.switchView.on("changeShowType", function() {
                e.collection.reset(e.collection.models),
                e._dealHeaderShow("thumb" === cache.showType)
            }
            ),
            this.switchView.on("toggleCollapse", function(e) {
                view.mainbox.collapseContentLeft(e)
            }
            )
        },
        _dealHeaderShow: function(e) {
            this.$(".file-table-header >li").toggleClass("hide-force", e),
            this.$(".file-table-header >li.file-check").removeClass("hide-force")
        },
        _onDeleteFiles: function() {
            this.collection.deleteFiles(this.collection.getCheckedFiles())
        },
        _onEmptyRecycle: function() {
            this.collection.empty()
        },
        _onCheckAll: function() {
            var e = this.$checkAll.hasClass("true");
            this.$checkAll.toggleClass("true"),
            this.collection.each(function(t) {
                t.set({
                    checked: !e,
                    silent: !0
                })
            }
            ),
            this.$recycleTable.find(".checkbox-sprite").toggleClass("true", !e),
            this.onFileSelect()
        },
        _ctrlCheckAllBtn: function(e) {
            var t = !!e.length && e.length === this.collection.length;
            this.$checkAll.toggleClass("true", t)
        },
        onFileSelect: function() {
            var e = this.collection.getCheckedFiles()
              , t = e.length > 0;
            this.$(".btns > .btn").not(".btn-empty").toggle(t),
            this._ctrlCheckAllBtn(e)
        },
        showLoading: function() {
            this.loadingView.show(),
            this.collection.fetch()
        },
        _onHideLoading: function() {
            this.loadingView.hide(),
            this._onShowEmpty()
        },
        _onShowEmpty: function() {
            0 !== this.collection.length || this.$recycleTable.hasClass("hide") || (this.$recycleTable.addClass("hide"),
            this.emptyView.show()),
            this.collection.length > 0 && this.$recycleTable.hasClass("hide") && (this.$recycleTable.removeClass("hide"),
            this.emptyView.hide()),
            this.onFileSelect()
        },
        switchShowType: function() {
            this.collection.reset(this.collection.models)
        },
        sortByName: function() {
            this._sortByAttr("name", this.$(".file-table-header .file-name i"))
        },
        sortBySize: function() {
            this._sortByAttr("size", this.$(".file-table-header .file-size i"))
        },
        sortByTime: function() {
            this._sortByAttr("updateTime", this.$(".file-table-header .file-time i"))
        },
        _sortByAttr: function(e, t) {
            var i = this.changeOrderByIcon(e)
              , l = t.hasClass("fa-sort-asc");
            i || (t.toggleClass("fa-sort-asc", !l).toggleClass("fa-sort-desc", l),
            this.collection.order = {
                orderBy: e,
                descending: l
            }),
            this.collection.fetch()
        },
        changeOrderByIcon: function(e) {
            this._changeOrderByIcon(this.$(".file-table-header"), this.collection, e)
        },
        _changeOrderByIcon: function(e, t, i) {
            var l = e.find(".file-name i")
              , s = e.find(".file-size i")
              , a = e.find(".file-time i");
            if (t.order.orderBy === i)
                return !1;
            switch (t.order.descending = !1,
            t.order.orderBy = i,
            i) {
            case "name":
                s.addClass("hide-force"),
                a.addClass("hide-force"),
                l.removeClass("hide-force");
                break;
            case "size":
                a.addClass("hide-force"),
                l.addClass("hide-force"),
                s.removeClass("hide-force");
                break;
            case "updateTime":
                l.addClass("hide-force"),
                s.addClass("hide-force"),
                a.removeClass("hide-force")
            }
        },
        close: function() {
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents()
        }
    })
}
);
;define("app/website/file/models/RecycleModels", function(require, e) {
    function r(e) {
        var r = null ;
        switch (e) {
        case ErrorType.errorNoPermission:
            r = msgs.msgNoPermission2;
            break;
        case ErrorType.errorVersionConflict:
            r = msgs.msgFileVerConflict;
            break;
        case ErrorType.errorSameFile:
            r = msgs.msgRecycleFileConflict;
            break;
        case ErrorType.errorSameFolder:
            r = msgs.msgRecycleFolderConflict;
            break;
        case ErrorType.errorNoSpace:
            r = msgs.msgDiskSizeLack;
            break;
        case ErrorType.errorFolderSpaceOver:
            r = msgs.msgFolderSpaceOver;
            break;
        default:
            r = msgs.msgServerError
        }
        return r
    }
    function t(e) {
        var r = null ;
        switch (e) {
        case ErrorType.errorNoPermission:
            r = msgs.msgNoPermission;
            break;
        default:
            r = msgs.msgServerError
        }
        return r
    }
    var s = require("app/commons/models/file/BaseFileList")
      , i = require("app/commons/models/file/EntFileDTO")
      , n = require("app/commons/models/file/PersonFileDTO")
      , o = require("app/commons/utils/FileRest")
      , l = s.extend({
        model: i,
        fetch: function() {
            var e = this;
            o.recycleFiles.post(_.extend({
                fileType: "sharedisk"
            }, {
                order: this.order
            })).then(function(r) {
                var t = _.map(r.files, function(e) {
                    return new i(e)
                }
                );
                e.reset(t).trigger(EventType.fetched)
            }
            )
        },
        empty: function() {
            var e = this;
            noty.confirm(msgs.msgIsEmptyRecycle, function(r) {
                return r ? void resturl.emptyEntRecycle({
                    entId: cache.entId,
                    userId: cache.userId
                }, e._emptyCallback()) : !1
            }
            )
        },
        _emptyCallback: function() {
            var e = this;
            return function(r) {
                return constants.isResponseOK(r) ? (e.reset(),
                !0) : void noty.error(t(r))
            }
        },
        deleteFiles: function(e) {
            var r = this;
            noty.confirm(msgs.deleteFileTip, function(t) {
                return t ? void (1 === e.length ? e[0].deleteFromRecycle(r._deleteCallback(e)) : r._deleteMultiFiles(e)) : !1
            }
            )
        },
        _deleteMultiFiles: function(e) {
            var r = this.getGrpFileParam(e)
              , t = {
                entId: cache.entId,
                userId: cache.userId,
                folderList: r.folderList,
                fileList: r.fileList
            };
            resturl.deleteRecycleEntFolderAndFile(t, this._deleteCallback(e))
        },
        _deleteCallback: function(e) {
            var r = this;
            return function(t) {
                return constants.isResOK(t) ? (_.each(e, function(e) {
                    r.remove(e)
                }
                ),
                !0) : void noty.error(ErrorType.adminDeleteFilesError(t))
            }
        },
        restoreFiles: function(e) {
            var r = this;
            noty.confirm(msgs.restoreFileTip, function(t) {
                return t ? 1 === e.length ? void e[0].restore(r._restoreCallback(e)) : void r._restoreMultiFiles(e) : !1
            }
            )
        },
        _restoreMultiFiles: function(e) {
            var r = this.getGrpFileParam(e)
              , t = {
                entId: cache.entId,
                userId: cache.userId,
                folderList: r.folderList,
                fileList: r.fileList
            };
            resturl.restoreEntFolderAndFile(t, this._restoreCallback(e))
        },
        _restoreCallback: function(e) {
            var t = this;
            return function(s) {
                return constants.isResOK(s) ? (_.each(e, function(e) {
                    t.remove(e)
                }
                ),
                !0) : void noty.error(r(s))
            }
        }
    })
      , c = s.extend({
        model: n,
        fetch: function() {
            var e = this;
            o.recycleFiles.post(_.extend({
                fileType: "onlinedisk"
            }, {
                order: this.order
            })).then(function(r) {
                var t = _.map(r.files, function(e) {
                    return new n(e)
                }
                );
                e.reset(t).trigger(EventType.fetched)
            }
            )
        },
        empty: function() {
            var e = this;
            noty.confirm(msgs.msgIsEmptyRecycle, function(r) {
                return r ? void resturl.emptyPersonalRecycle({
                    entId: cache.entId,
                    userId: cache.userId
                }, e._emptyCallback()) : !1
            }
            )
        },
        _emptyCallback: function() {
            var e = this;
            return function(r) {
                return constants.isResponseOK(r) ? (e.reset(),
                !0) : void noty.error(t(r))
            }
        },
        deleteFiles: function(e) {
            var r = this;
            noty.confirm(msgs.deleteFileTip, function(t) {
                return t ? void (1 === e.length ? e[0].deleteFromRecycle(r._deleteCallback(e)) : r._deleteMultiFiles(e)) : !1
            }
            )
        },
        _deleteMultiFiles: function(e) {
            var r = this.getPersonGrpFileParam(e)
              , t = {
                entId: cache.entId,
                userId: cache.userId,
                folderList: r.folderList,
                fileList: r.fileList
            };
            resturl.deleteRecyclePersonalFolderAndFile(t, {
                timeout: 6e4
            }, this._deleteCallback(e))
        },
        _deleteCallback: function(e) {
            var r = this;
            return function(t) {
                return constants.isResOK(t) ? (_.each(e, function(e) {
                    r.remove(e)
                }
                ),
                !0) : void noty.error(ErrorType.adminDeleteFilesError(t))
            }
        },
        restoreFiles: function(e) {
            var r = this;
            noty.confirm(msgs.restoreFileTip, function(t) {
                return t ? 1 === e.length ? void e[0].restore(r._restoreCallback(e)) : void r._restoreMultiFiles(e) : !1
            }
            )
        },
        _restoreMultiFiles: function(e) {
            var r = this.getPersonGrpFileParam(e)
              , t = {
                entId: cache.entId,
                userId: cache.userId,
                folderList: r.folderList,
                fileList: r.fileList
            };
            resturl.restorePersonalFolderAndFile(t, this._restoreCallback(e))
        },
        _restoreCallback: function(e) {
            var t = this;
            return function(s) {
                return constants.isResOK(s) ? (_.each(e, function(e) {
                    t.remove(e)
                }
                ),
                !0) : void noty.error(r(s))
            }
        }
    });
    e.EntRecycleList = l,
    e.PersonRecycleList = c
}
);
;define("app/website/file/views/RecycleView", function(require, e, i) {
    var t = require("app/website/file/views/RecycleTableView")
      , l = require("app/website/file/models/RecycleModels").EntRecycleList
      , c = require("app/website/file/models/RecycleModels").PersonRecycleList;
    i.exports = Backbone.View.extend({
        tagName: "div",
        id: "recycle-main",
        className: "file-main recycle-view",
        tabContent: void 0,
        isEntRecycle: !0,
        entRecycleView: void 0,
        personalRecycleView: void 0,
        events: {
            "click #personRecycleTab": "onPersonalRecycleShow",
            "click #entRecycleTab": "onEntRecycleShow"
        },
        initialize: function() {
            this.listenTo(model.messageEvent, EventType.clearContextmenus, this.hideContextMenu),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, t, l, c) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                c = c || {},
                '<div class="file-view-top"><div class="title inline-block left"><i class="icon-custom-recycle-nav2"></i> <%=msg877%></div><div class="inline-block right"><div class="search-container inline-block right"></div></div></div><div class="tabbable"> <!-- Only required for left/right tabs --><ul class="nav nav-tabs"><li id="entRecycleTab" class="active"><a href="#tab1" data-toggle="tab"><%=msgEntFile%></a></li><li id=\'personRecycleTab\'><a href="#tab2" data-toggle="tab"><%=msgPersonFile%></a></li></ul><div class="tab-content"><div class="tab-pane active" id="tab1"><div id="ent-recycle"></div></div><div class="tab-pane" id="tab2"><div id="personal-recycle"></div></div></div></div>'
            }
            ))),
            this.entRecycleView = new t({
                el: this.$("#ent-recycle"),
                collection: new l,
                isEnt: !0
            }),
            this.personalRecycleView = new t({
                el: this.$("#personal-recycle"),
                collection: new c,
                isEnt: !1
            }),
            model.currentUser.get("diskEnabled") || this.$("#personRecycleTab").hide(),
            this.tabContent = this.$(".tab-content"),
            this
        },
        restoreFile: function(e, i) {
            if (e) {
                var t = this.entRecycleView.collection.get(i);
                this.entRecycleView.collection.restoreFiles([t])
            } else {
                var t = this.personalRecycleView.collection.get(i);
                this.personalRecycleView.collection.restoreFiles([t])
            }
        },
        deleteFile: function(e, i) {
            if (e) {
                var t = this.entRecycleView.collection.get(i);
                this.entRecycleView.collection.deleteFiles([t])
            } else {
                var t = this.personalRecycleView.collection.get(i);
                this.personalRecycleView.collection.deleteFiles([t])
            }
        },
        onPersonalRecycleShow: function() {
            this.personalRecycleView.render(),
            this.personalRecycleView.showLoading()
        },
        onEntRecycleShow: function() {
            this.entRecycleView.render(),
            this.entRecycleView.showLoading()
        },
        _isShowEntRecycle: function() {
            var e = this.$(".nav-tabs li.active");
            return "entRecycleTab" === e.attr("id")
        },
        hideContextMenu: function() {
            this.$(".file-context-menu").removeClass("open")
        },
        close: function() {
            this.entRecycleView && this.entRecycleView.close(),
            this.personalRecycleView && this.personalRecycleView.close(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/UploadItemView", function(require, s, e) {
    var t = (_tag = "[UploadItemView]-",
    require("app/website/file/views/CreateFolderView"))
      , i = require("app/website/file/models/EditFileNameParam");
    e.exports = Backbone.View.extend({
        tagName: "li",
        waitFileList: void 0,
        completeFileList: void 0,
        $uploadStatus: void 0,
        $statusDeal: void 0,
        $uploadingShow: void 0,
        $statusShow: void 0,
        $dealFile: void 0,
        $pauseBtn: void 0,
        $beginBtn: void 0,
        $prograssBar: void 0,
        $csPercent: void 0,
        $uploadedSize: void 0,
        events: {
            "click .cs-upload-item .btn.begin-btn": "_onBeginUpload",
            "click .cs-upload-item .btn.pause-btn": "_onPauseUpload",
            "click .cs-upload-item .btn.cancel-btn": "_onCancelUpload",
            "click .rename-file": "_onRenameFile",
            "click .cover-file": "_onCoverFile",
            "click .del-file": "_onDelUploadFile"
        },
        initialize: function() {
            this.waitFileList = this.options.waitFileList,
            this.completeFileList = this.options.completeFileList,
            this.listenTo(this.model, "change:status", this._onStatusChange),
            this.listenTo(this.model, "change:uploadedSize", this._onChangePrograss),
            this.render()
        },
        render: function() {
            var s = {
                name: this.model.get("name"),
                fileType: this._typeConverter("ModelToView", this.model.get("name")),
                uploadedSize: constants.sizeConverter(this.model.get("uploadedSize") || 0),
                size: constants.sizeConverter(this.model.get("size"))
            };
            return this.$el.html(__html(Handlebars.template(function(s, e, t, i, a) {
                this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, s.helpers),
                a = a || {};
                var l, o, n = "", d = "function", h = this.escapeExpression;
                return n += '<ul class="cs-upload-item ul-inline"><li><i name=\'file-icon\' class="file-icon ',
                (o = t.fileType) ? l = o.call(e, {
                    hash: {},
                    data: a
                }) : (o = e && e.fileType,
                l = typeof o === d ? o.call(e, {
                    hash: {},
                    data: a
                }) : o),
                n += h(l) + '"></i></li><li class="cs-upload-item-name"><div><div name="name" class="cs-file-name help-inline" title="',
                (o = t.name) ? l = o.call(e, {
                    hash: {},
                    data: a
                }) : (o = e && e.name,
                l = typeof o === d ? o.call(e, {
                    hash: {},
                    data: a
                }) : o),
                n += h(l) + '">',
                (o = t.name) ? l = o.call(e, {
                    hash: {},
                    data: a
                }) : (o = e && e.name,
                l = typeof o === d ? o.call(e, {
                    hash: {},
                    data: a
                }) : o),
                n += h(l) + '</div></div><div class="progress progress-striped uploading-show"><div style="width: 0%" class="bar prograss-bar"></div></div><div class="uploading-size inline-block uploading-show"><span class="uploadedSize">',
                (o = t.uploadedSize) ? l = o.call(e, {
                    hash: {},
                    data: a
                }) : (o = e && e.uploadedSize,
                l = typeof o === d ? o.call(e, {
                    hash: {},
                    data: a
                }) : o),
                n += h(l) + '</span>/<span name="fileSize">',
                (o = t.size) ? l = o.call(e, {
                    hash: {},
                    data: a
                }) : (o = e && e.size,
                l = typeof o === d ? o.call(e, {
                    hash: {},
                    data: a
                }) : o),
                n += h(l) + "</span></div></li><li class=\"status-deal status-show\"><span class=\"label label-info uploadStatus\" name=\"status\"></span><span class=\"del-file wait-show css-hide\" style=\"cursor: pointer\"><i class='icon-remove'></i></span><div class=\"css-hide deal-file\" name=\"dealSaveFile\"><span class=\"rename-file\"><%=msg266%></span><span class=\"cover-file hide\"><%=msg784%></span><span class=\"del-file\"><%=msg156%></span></div></li><li class=\"status-deal uploading-show\"><div class='btn-group'><span class='btn btn-link begin-btn' title='<%=msg258%>'><i class='icon-play'></i></span><span class='btn btn-link pause-btn' title='<%=msg781%>'><i class='icon-pause'></i></span><span class='btn btn-link cancel-btn' title='<%=msg782%>'><i class='icon-remove'></i></span></div></li></ul>"
            }
            ), s)),
            this.$uploadStatus = this.$("li.status-deal span.uploadStatus"),
            this.$statusDeal = this.$("li.status-deal"),
            this.$uploadingShow = this.$(".uploading-show"),
            this.$statusShow = this.$("li.status-show"),
            this.$dealFile = this.$("li.status-show .deal-file"),
            this.$waitShow = this.$(".wait-show"),
            this.$pauseBtn = this.$(".pause-btn"),
            this.$beginBtn = this.$(".begin-btn"),
            this.$prograssBar = this.$(".prograss-bar"),
            this.$uploadedSize = this.$(".uploadedSize"),
            this._onChangeShow(),
            this
        },
        _typeConverter: function(s, e) {
            var t = constants.getFileSuffix(e);
            return constants.typeConverter(s, t.toLowerCase())
        },
        _onChangePrograss: function() {
            var s = constants.uploadedSizePercent(this.model.get("uploadedSize"), this.model.get("size"));
            this.$prograssBar.attr("style", "width:" + s),
            this.$uploadedSize.html(constants.sizeConverter(this.model.get("uploadedSize")))
        },
        _onChangeShow: function() {
            var s = this.model.get("status");
            switch (this.$uploadStatus.html(this._statusConverter(s)),
            s) {
            case "wait":
                this.$statusShow.removeClass("css-hide"),
                this.$waitShow.removeClass("css-hide"),
                this.$dealFile.addClass("css-hide"),
                this.$uploadingShow.addClass("css-hide");
                break;
            case "uploading":
                this.$uploadingShow.removeClass("css-hide"),
                this.$pauseBtn.removeClass("css-hide"),
                this.$beginBtn.addClass("css-hide"),
                this.$waitShow.addClass("css-hide");
                break;
            case "pause":
                this.$uploadingShow.removeClass("css-hide"),
                this.$pauseBtn.addClass("css-hide"),
                this.$waitShow.addClass("css-hide"),
                this.$statusShow.removeClass("css-hide"),
                this.$beginBtn.removeClass("css-hide");
                break;
            case "cancel":
                this.$uploadingShow.addClass("css-hide"),
                this.$pauseBtn.addClass("css-hide"),
                this.$waitShow.addClass("css-hide"),
                this.$statusShow.removeClass("css-hide"),
                this.$beginBtn.removeClass("css-hide");
                break;
            case "success":
                break;
            case "sameName":
                this.$statusShow.removeClass("css-hide"),
                this.$dealFile.removeClass("css-hide"),
                this.$uploadingShow.addClass("css-hide"),
                this.$waitShow.addClass("css-hide");
                break;
            default:
                this.$statusShow.removeClass("css-hide"),
                this.$uploadingShow.addClass("css-hide"),
                this.$dealFile.addClass("css-hide"),
                this.$waitShow.addClass("css-hide")
            }
        },
        _onStatusChange: function() {
            var s = this.waitFileList.findWhere({
                status: "uploading"
            })
              , e = this.waitFileList.findWhere({
                status: "waiting"
            });
            model.messageEvent.trigger(s || e ? EventType.uploadStart : EventType.uploadCancelAll),
            this._onChangeShow(),
            this._changeModel()
        },
        _changeModel: function() {
            "success" === this.model.get("status") && (this.completeFileList.unshift(this.model),
            this.waitFileList.remove(this.model))
        },
        _statusConverter: function(s) {
            switch (s) {
            case "wait":
                return msgs.msg1204;
            case "uploading":
                return msgs.msg787;
            case "pause":
                return msgs.msg781;
            case "cancel":
                return msgs.msg87;
            case "success":
                return msgs.msg779;
            case "error":
                return msgs.msg1205;
            case "errorNetwork":
                return msgs.msgNetError;
            case "errorNoSpace":
                return msgs.msgDiskSizeFull;
            case "errorFolderSpaceOver":
                return msgs.msgFolderOverflow;
            case "errorFolderDeleted":
                return msgs.msgFolderDeleted;
            case "sameName":
                return msgs.msgUploadSameName;
            default:
                return msgs.msg1205
            }
        },
        _onBeginUpload: function() {
            this.waitFileList.findWhere({
                status: "uploading"
            }) ? this.model.set("status", "wait") : this.model.set("status", "uploading"),
            model.messageEvent.trigger(EventType.uploadStart)
        },
        _onPauseUpload: function() {
            this.model.set("status", "pause")
        },
        _onCancelUpload: function() {
            this.model.set("status", "cancel"),
            this.waitFileList.remove(this.model)
        },
        _onRenameFile: function() {
            var s = this
              , e = new t({
                model: new i({
                    name: this.model.get("name"),
                    operate: "renameFile"
                })
            });
            e.on(EventType.submit, function(t) {
                s.model.set({
                    name: t.get("name"),
                    status: "wait"
                }),
                s.$(".cs-file-name").text(t.get("name")),
                collection.uploadFileList.trigger(EventType.uploadStart),
                e.close()
            }
            )
        },
        _onCoverFile: function() {},
        _onDelUploadFile: function() {
            this.waitFileList.remove(this.model)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/UploadWaitView", function(require, t, e) {
    var i = require("app/website/file/views/UploadItemView");
    e.exports = Backbone.View.extend({
        className: "uploadWait upload-wait",
        collectionBinder: void 0,
        $listView: void 0,
        $startAll: void 0,
        $pauseAll: void 0,
        waitFileList: void 0,
        completeFileList: void 0,
        events: {
            "click .login-switch-btn": "stopOrStartAll",
            "click .logic-delete-all": "deleteAll",
            "click .expandToggle": "expandToggle"
        },
        initialize: function() {
            this.collection = this.waitFileList = this.options.waitFileList,
            this.completeFileList = this.options.completeFileList;
            var t = new Backbone.CollectionBinder.ViewManagerFactory(this._viewCreator());
            this.collectionBinder = new Backbone.CollectionBinder(t),
            this.addListeners(),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(t, e, i, s, l) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, t.helpers),
                l = l || {},
                '<div class="slide-header upload-header"><h3 class="help-inline"><span class="expandToggle"><i class="icon-custom-expand collapse"></i>&nbsp;<i class="icon-custom-upload-mini"></i>&nbsp;<%=msg787%></span>(<span class="files-length"></span>)</h3><div class="btn-group help-inline right"><button class="btn btn-link btn-pause-all login-switch-btn logic-starting"><%=msg788%></button><button class="btn btn-link logic-delete-all"><%=msg789%></button></div></div><ul class="cs-upload-items overflow-auto-y"></ul>'
            }
            ))),
            this.$startAll = this.$(".logic-start-all"),
            this.$pauseAll = this.$(".logic-pause-all"),
            this.$listView = this.$(".cs-upload-items"),
            this.collectionBinder.bind(this.waitFileList, this.$listView),
            this.showFileLength(),
            this
        },
        _viewCreator: function() {
            var t = this;
            return function(e) {
                return new i({
                    model: e,
                    waitFileList: t.waitFileList,
                    completeFileList: t.completeFileList
                })
            }
        },
        addListeners: function() {
            this.listenTo(this.waitFileList, "remove add", this.showFileLength)
        },
        stopOrStartAll: function(t) {
            var e = $(t.target);
            if (0 == this.collection.length)
                return !1;
            if (e.hasClass("logic-starting"))
                e.removeClass("logic-starting").text(msgs.msgStartAll),
                this.collection.each(function(t) {
                    _.contains(["wait", "uploading"], t.get("status")) && t.set("status", "pause")
                }
                ),
                model.messageEvent.trigger(EventType.uploadCancelAll);
            else {
                e.addClass("logic-starting").text(msgs.msg788),
                this.collection.each(function(t) {
                    _.contains(["pause"], t.get("status")) && t.set("status", "wait")
                }
                );
                var i = this.collection.findWhere({
                    status: "wait"
                });
                i && i.set("status", "uploading"),
                model.messageEvent.trigger(EventType.uploadStart)
            }
        },
        deleteAll: function() {
            this.collection.reset(),
            this.showFileLength()
        },
        showFileLength: function() {
            if (this.$(".files-length").html(this.waitFileList.length),
            this.waitFileList.length < 1) {
                {
                    this.waitFileList.length
                }
                return void model.messageEvent.trigger(EventType.uploadCancelAll)
            }
        },
        expandToggle: function() {
            this.$(".icon-custom-expand").toggleClass("collapse"),
            this.$(".cs-upload-items").toggleClass("hide")
        },
        onChangeHeight: function() {
            this.$(".cs-upload-items").css("max-height", (model.setting.getMainboxHeight() - 28) / 2 - 60)
        },
        close: function() {
            view.header.$("ul.nav > li.header-nav-cloud").removeClass("active"),
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/UploadCompleteItemView", function(require, e, a) {
    a.exports = Backbone.View.extend({
        tagName: "li",
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, a, t, i, l) {
                this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                l = l || {};
                var s, n, o = "", c = "function", h = this.escapeExpression;
                return o += '<ul class="cs-upload-item ul-inline"><li><i name=\'file-icon\' class="file-icon ',
                (n = t.fileType) ? s = n.call(a, {
                    hash: {},
                    data: l
                }) : (n = a && a.fileType,
                s = typeof n === c ? n.call(a, {
                    hash: {},
                    data: l
                }) : n),
                o += h(s) + '"></i></li><li class="cs-upload-item-name"><div><div name="name" class="cs-file-name help-inline" title="',
                (n = t.name) ? s = n.call(a, {
                    hash: {},
                    data: l
                }) : (n = a && a.name,
                s = typeof n === c ? n.call(a, {
                    hash: {},
                    data: l
                }) : n),
                o += h(s) + '">',
                (n = t.name) ? s = n.call(a, {
                    hash: {},
                    data: l
                }) : (n = a && a.name,
                s = typeof n === c ? n.call(a, {
                    hash: {},
                    data: l
                }) : n),
                o += h(s) + '</div></div></li><li class="status-deal"><span class="file-size" name="size">',
                (n = t.size) ? s = n.call(a, {
                    hash: {},
                    data: l
                }) : (n = a && a.size,
                s = typeof n === c ? n.call(a, {
                    hash: {},
                    data: l
                }) : n),
                o += h(s) + "</span></li></ul>"
            }
            ), {
                name: this.model.get("name"),
                fileType: this._typeConverter("ModelToView", this.model.get("name")),
                size: constants.sizeConverter(this.model.get("size"))
            })),
            this
        },
        _typeConverter: function(e, a) {
            var t = constants.getFileSuffix(a);
            return constants.typeConverter(e, t.toLowerCase())
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/UploadCompleteView", function(require, e, i) {
    var t = require("app/website/file/views/UploadCompleteItemView");
    i.exports = Backbone.View.extend({
        className: "uploadComplete upload-complete",
        collectionBinder: void 0,
        $listView: void 0,
        events: {
            "click .slide-header #upload_btn-link_empty": "emptyAll",
            "click .expandToggle": "expandToggle"
        },
        initialize: function() {
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.addListeners(),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, t, l, s) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                s = s || {},
                '<div class="slide-header upload-header"><h3 class="help-inline"><span class="expandToggle"><i class="icon-custom-expand"></i>&nbsp;<i class="icon-custom-upload-mini"></i>&nbsp;<%=msg779%></span>(<span class="files-length">0</span>)</h3><div class="btn-group help-inline right"><button id=\'upload_btn-link_empty\' class="btn btn-link emptyList"><%=msg750%></button></div></div><ul class="cs-upload-items overflow-auto-y"></ul>'
            }
            ))),
            this.$listView = this.$(".cs-upload-items"),
            this.collectionBinder.bind(this.collection, this.$listView),
            this.showFileLength(),
            this
        },
        addListeners: function() {
            this.listenTo(this.collection, "add", this.showFileLength)
        },
        viewCreator: function(e) {
            return new t({
                model: e
            })
        },
        showFileLength: function() {
            this.$(".files-length").html(this.collection.length),
            this.$("i.icon-custom-expand").toggleClass("collapse", this.collection.length > 0),
            this.$(".cs-upload-items").toggleClass("hide", 0 === this.collection.length)
        },
        rebind: function() {
            this.collectionBinder.bind(this.collection, this.$listView),
            this.delegateEvents()
        },
        emptyAll: function() {
            this.collection.reset(),
            this.showFileLength()
        },
        expandToggle: function() {
            this.$(".icon-custom-expand").toggleClass("collapse"),
            this.$(".cs-upload-items").toggleClass("hide")
        },
        onChangeHeight: function() {
            this.$(".cs-upload-items").css("max-height", (model.setting.getMainboxHeight() - 28) / 2 - 40)
        },
        close: function() {
            view.header.$("ul.nav > li.header-nav-cloud").removeClass("active"),
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/UploadManagerView", function(require, i, e) {
    var t = (require("app/commons/models/file/UploadFileListDTO"),
    require("app/website/file/views/UploadWaitView"))
      , l = require("app/website/file/views/UploadCompleteView");
    e.exports = Backbone.View.extend({
        tagName: "div",
        id: "uploadDownloadView",
        className: "upload-manage",
        waitFileList: void 0,
        completeFileList: void 0,
        initialize: function() {
            this.waitFileList = this.options.waitFileList,
            this.completeFileList = this.options.completeFileList,
            this.waitFileList.on(EventType.uploadStart, this._onUploadStart, this),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(i, e, t, l, s) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, i.helpers),
                s = s || {},
                '<div class="accordion-heading custom-project-title"><span class="left"> <%=msg786%></span><a class="right" href="#slide/close" class="btn btn-link"><i class="icon-remove" style="font-size:16px;"></i></a></div><div class="clear"></div><div class="uploadWait upload-wait"></div><div class="uploadComplete upload-complete"></div>'
            }
            ))),
            this.uploadWaitView = new t({
                el: this.$(".uploadWait"),
                waitFileList: this.waitFileList,
                completeFileList: this.completeFileList
            }),
            this.uploadCompleteView = new l({
                el: this.$(".uploadComplete"),
                collection: this.completeFileList
            }),
            this.onChangeHeight(),
            this
        },
        _onUploadStart: function() {
            !this.waitFileList.hasUploadingFile() && this.waitFileList.checkFileUpload()
        },
        addListeners: function() {
            this.listenTo(model.setting, "change:innerHeight", this.onChangeHeight)
        },
        onChangeHeight: function() {
            this.$el.height(model.setting.getMainboxHeight()),
            this.uploadWaitView.onChangeHeight(),
            this.uploadCompleteView.onChangeHeight()
        },
        close: function() {
            view.header.$("ul.nav > li.header-nav-cloud").removeClass("active"),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/PropertyDetailView", function(require, e, a) {
    a.exports = Backbone.View.extend({
        tagName: "div",
        id: "fileDetail",
        className: "file-detail",
        currentFile: void 0,
        events: {
            "click .btn-disRemind": "_onCancelRemind",
            "click .btn-remind": "_onRemind",
            "click .btn-share": "_onShare"
        },
        initialize: function() {
            this.currentFile = this.options.currentFile,
            this.addListeners(),
            this.render()
        },
        render: function() {
            var e = _.extend(this.model.toJSON(), {
                icon: constants.typeConverter(this.model.get("type")),
                fileSize: constants.sizeConverter(this.model.get("fileSize")),
                isRemind: this.model.get("remind") ? msgs.msgReminded : msgs.msgDisReminded,
                linkUrl: this.model.get("linkDTO") ? constants.getShareUrl(this.model.get("linkDTO"), this.model.get("fileType")) : void 0,
                usedSize: constants.convertSize(this.model.get("usedSize")),
                availableSize: constants.convertSize(this.model.get("availableSize")),
                maxSize: constants.byteConvertGb(this.model.get("maxSize")),
                isEntFile: this.model.isEntFile(),
                canShare: this.currentFile.hasOperatePermission("share"),
                canRename: this.currentFile.hasOperatePermission("rename") && !this.currentFile.get("sysFolder") && !this.currentFile.isLock(),
                hasManage: this.currentFile.hasPermission("manage"),
                createrName: this.model.get("createrName") || cache.username,
                upadteUserName: this.model.get("upadteUserName") || cache.username
            });
            return this.$el.html(__html(Handlebars.template(function(e, a, i, n, l) {
                function s(e, a) {
                    var n, l, s = "";
                    return s += '<li><span class="file-icon ',
                    (l = i.icon) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.icon,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + ' check-txt" name="file-icon" style="margin-right:70px;"></span><input type="text" name="name" class="file-name" value="',
                    (l = i.fileName) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.fileName,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + '" maxlength="60"></li>'
                }
                function t(e, a) {
                    var n, l, s = "";
                    return s += '<li><span class="file-icon ',
                    (l = i.icon) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.icon,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + ' check-txt left" name="file-icon" style="margin-right:74px;"></span><spanclass="inline-block left file-name" name="name">',
                    (l = i.fileName) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.fileName,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + "</span></li>"
                }
                function r(e, a) {
                    var n, l, s = "";
                    return s += '<li><span class="inline-block item-name left"><%=msgInclude%>:</span><span class="inline-block left">',
                    (l = i.fileCount) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.fileCount,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + "<%=msgFilesNum%>,",
                    (l = i.folderCount) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.folderCount,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + "<%=msg692%></span></li>"
                }
                function h(e, a) {
                    var n;
                    return n = i["if"].call(e, e && e.isEntFile, {
                        hash: {},
                        inverse: F.noop,
                        fn: F.program(8, c, a),
                        data: a
                    }),
                    n || 0 === n ? n : ""
                }
                function c(e, a) {
                    var n, l, s = "";
                    return s += '<li><span class="inline-block item-name left"><%=msgUsedSize%>:</span><span class="inline-block left">',
                    (l = i.usedSize) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.usedSize,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + '</span></li><li><span class="inline-block item-name left"><%=msgMaxSize%>:</span><span class="inline-block left cs-max-size">',
                    n = i["if"].call(e, e && e.hasManage, {
                        hash: {},
                        inverse: F.program(11, m, a),
                        fn: F.program(9, o, a),
                        data: a
                    }),
                    (n || 0 === n) && (s += n),
                    s += '<span class="light" title="',
                    (l = i.availableSize) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.availableSize,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + '">(<%=msgAvailSize%>:',
                    (l = i.availableSize) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.availableSize,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + ')</span></span><a class="btn btn-blue expand-btn right logic-buy-btn" href="#" target="_blank"><%=msgExpandSpace%></a></li>'
                }
                function o(e, a) {
                    var n, l, s = "";
                    return s += '<input placeholder="<%=msgNoLimit%>" class="input-size" value="',
                    (l = i.maxSize) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.maxSize,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + '"/><b>GB</b>'
                }
                function m(e, a) {
                    var n, l = "";
                    return l += "<span> ",
                    n = i["if"].call(e, e && e.maxSize, {
                        hash: {},
                        inverse: F.program(14, p, a),
                        fn: F.program(12, d, a),
                        data: a
                    }),
                    (n || 0 === n) && (l += n),
                    l += "</span>"
                }
                function d(e, a) {
                    var n, l, s = "";
                    return (l = i.maxSize) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.maxSize,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + " G "
                }
                function p() {
                    return "<%=msgNoLimit%>"
                }
                function f(e, a) {
                    var n, l, s = "";
                    return s += '<li><span class="inline-block item-name left"><%=msgSize%>:</span><span class="inline-block left">',
                    (l = i.fileSize) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.fileSize,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + "</span></li>"
                }
                function u(e, a) {
                    var n, l, s = "";
                    return s += '<li class="hr"></li><li><span class="inline-block item-name left"><%=msgShareLink%>:</span><span class="inline-block link-url left"><a href="',
                    (l = i.linkUrl) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.linkUrl,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + '" target="_blank">',
                    (l = i.linkUrl) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.linkUrl,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + "</a></span>",
                    n = i["if"].call(e, e && e.canShare, {
                        hash: {},
                        inverse: F.noop,
                        fn: F.program(19, g, a),
                        data: a
                    }),
                    (n || 0 === n) && (s += n),
                    s += '</li><li><span class="inline-block item-name left"><%=msgRemindStatus%>:</span><span class="inline-block left is-remind">',
                    (l = i.isRemind) ? n = l.call(e, {
                        hash: {},
                        data: a
                    }) : (l = e && e.isRemind,
                    n = typeof l === y ? l.call(e, {
                        hash: {},
                        data: a
                    }) : l),
                    s += z(n) + '</span><span class="btn btn-blue btn-remind right ',
                    n = i["if"].call(e, e && e.remind, {
                        hash: {},
                        inverse: F.noop,
                        fn: F.program(21, b, a),
                        data: a
                    }),
                    (n || 0 === n) && (s += n),
                    s += '"><%=msg603%></span><span class="btn btn-blue btn-disRemind right ',
                    n = i.unless.call(e, e && e.remind, {
                        hash: {},
                        inverse: F.noop,
                        fn: F.program(21, b, a),
                        data: a
                    }),
                    (n || 0 === n) && (s += n),
                    s += '"><%=msg604%></span></li>'
                }
                function g() {
                    return ' <span class="btn btn-blue btn-share right"><%=msg262%></span> '
                }
                function b() {
                    return "hide"
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                l = l || {};
                var v, k, S = "", y = "function", z = this.escapeExpression, F = this;
                return S += '<ul class="detail-list">',
                v = i["if"].call(a, a && a.canRename, {
                    hash: {},
                    inverse: F.program(3, t, l),
                    fn: F.program(1, s, l),
                    data: l
                }),
                (v || 0 === v) && (S += v),
                v = i["if"].call(a, a && a.folder, {
                    hash: {},
                    inverse: F.noop,
                    fn: F.program(5, r, l),
                    data: l
                }),
                (v || 0 === v) && (S += v),
                S += '<li class="hr"></li><li><span class="inline-block item-name left"><%=magPath%>:</span><span class="inline-block item-info left">',
                (k = i.path) ? v = k.call(a, {
                    hash: {},
                    data: l
                }) : (k = a && a.path,
                v = typeof k === y ? k.call(a, {
                    hash: {},
                    data: l
                }) : k),
                S += z(v) + "</span></li>",
                v = i["if"].call(a, a && a.folder, {
                    hash: {},
                    inverse: F.program(16, f, l),
                    fn: F.program(7, h, l),
                    data: l
                }),
                (v || 0 === v) && (S += v),
                S += '<li class="hr"></li><li><span class="inline-block item-name left"><%=msg594%>:</span><spanclass="inline-block left">',
                (k = i.createTime) ? v = k.call(a, {
                    hash: {},
                    data: l
                }) : (k = a && a.createTime,
                v = typeof k === y ? k.call(a, {
                    hash: {},
                    data: l
                }) : k),
                S += z(v) + '</span></li><li><span class="inline-block item-name left"><%=msg593%>:</span><span class="inline-block item-info left">',
                (k = i.createrName) ? v = k.call(a, {
                    hash: {},
                    data: l
                }) : (k = a && a.createrName,
                v = typeof k === y ? k.call(a, {
                    hash: {},
                    data: l
                }) : k),
                S += z(v) + '</span></li><li><span class="inline-block item-name left"><%=msg597%>:</span><spanclass="inline-block left">',
                (k = i.updateTime) ? v = k.call(a, {
                    hash: {},
                    data: l
                }) : (k = a && a.updateTime,
                v = typeof k === y ? k.call(a, {
                    hash: {},
                    data: l
                }) : k),
                S += z(v) + '</span></li><li><span class="inline-block item-name left"><%=msg595%>:</span><span class="inline-block item-info left">',
                (k = i.upadteUserName) ? v = k.call(a, {
                    hash: {},
                    data: l
                }) : (k = a && a.upadteUserName,
                v = typeof k === y ? k.call(a, {
                    hash: {},
                    data: l
                }) : k),
                S += z(v) + "</span></li>",
                v = i["if"].call(a, a && a.isEntFile, {
                    hash: {},
                    inverse: F.noop,
                    fn: F.program(18, u, l),
                    data: l
                }),
                (v || 0 === v) && (S += v),
                S += "</ul>"
            }
            ), e)),
            seajs.isPrivate ? this.$(".logic-buy-btn").remove() : this.$(".logic-buy-btn").attr("href", constants.getBuyUrl()),
            this
        },
        addListeners: function() {
            this.listenTo(this.model, EventType.loadFile, this.render),
            this.listenTo(this.model, "change:remind", this._onChangeRemind)
        },
        _onRemind: function() {
            this.currentFile && (router.shareDiskRouter.doAttentionFile(this.currentFile),
            this.model.set("remind", !0))
        },
        _onCancelRemind: function() {
            this.currentFile && (router.shareDiskRouter.doDelAttentionFile(this.currentFile),
            this.model.set("remind", !1))
        },
        _onShare: function() {
            router.shareDiskRouter.shareFile(this.model.get("fileId")),
            this.trigger(EventType.shiftView)
        },
        _onChangeRemind: function() {
            this.$(".btn-remind").toggleClass("hide", this.model.get("remind")),
            this.$(".btn-disRemind").toggleClass("hide", !this.model.get("remind")),
            this.$(".is-remind").html(this.model.get("remind") ? msgs.msgReminded : msgs.msgDisReminded)
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/models/FileHistoryDTO", function(require, e, t) {
    t.exports = Backbone.Model.extend({
        urlRoot: "",
        idAttribute: "version",
        defaults: {
            type: void 0,
            fileId: void 0,
            parentId: void 0,
            name: void 0,
            version: void 0,
            userId: void 0,
            userName: void 0,
            updateTime: void 0,
            operation: void 0,
            versionDetails: void 0
        },
        isFolder: function() {
            return "folder" === this.get("type")
        },
        fetchVersionDetail: function(e) {
            var t = this
              , i = {
                entId: cache.entId,
                userId: cache.userId,
                version: this.get("version")
            };
            this.get("folder") ? (i.folderId = this.get("fileId"),
            resturl.getEntFolderVersionDetail(i, function(i) {
                if (constants.isResponseError(i))
                    return !1;
                var r = i[0];
                r.fileName = i[0].name,
                t.set(r),
                e && e(i)
            }
            )) : (i.fileId = this.get("fileId"),
            resturl.getEntFileVersionDetail(i, function(i) {
                if (constants.isResponseError(i))
                    return !1;
                var r = i[0];
                r.fileName = i[0].name,
                r.path = constants.dealEntSpecialPath(i[0].path),
                t.set(r),
                e && e(i)
            }
            ))
        },
        initFromFile: function(e) {
            return e.path && (0 === e.path.indexOf("/Share") && (e.path = e.path.replace("Share", constants.entSpecialFolderNames.Share)),
            0 === e.path.indexOf("/share") && (e.path = e.path.replace("share", constants.entSpecialFolderNames.share))),
            this.set({
                fileId: e.fileId,
                enterpriseId: e.enterpriseId,
                userId: e.userId,
                parentId: e.folderId,
                name: e.name || e.fileName,
                guid: e.guid,
                type: e.type,
                size: e.size,
                updateTime: e.updateTime,
                deleted: e.deleted,
                version: e.version,
                operation: e.operation,
                userName: e.userName,
                path: e.path
            }),
            this
        },
        initFromFolder: function(e) {
            return e.path && (0 === e.path.indexOf("/Share") && (e.path = e.path.replace("Share", constants.entSpecialFolderNames.Share)),
            0 === e.path.indexOf("/share") && (e.path = e.path.replace("share", constants.entSpecialFolderNames.share))),
            this.set({
                type: "folder",
                fileId: e.folderId,
                parentId: e.parentId,
                name: e.name || e.fileName,
                version: e.version,
                operation: e.operation,
                userId: e.userId,
                userName: e.userName,
                updateTime: constants.dateStrFromMisc(e.updateTime),
                path: e.path
            }),
            this
        },
        saveFileToPersonDisk: function(e, t) {
            var i = {
                entId: cache.entId,
                userId: cache.userId,
                fileId: this.get("fileId"),
                version: this.get("version"),
                folderId: e
            };
            resturl.saveEntFileToPersonDisk(i, t)
        }
    })
}
);
;define("app/website/file/models/FileHistoryListDTO", function(require, e, t) {
    var n = require("app/website/file/models/FileHistoryDTO");
    t.exports = Backbone.Collection.extend({
        model: n,
        fetch: function(e) {
            var t = this;
            return e.isFolder() ? resturl.getEntFolderHistory(e.asFileIdParam(), function(n) {
                t._fetchCallback(e, n)
            }
            ) : resturl.getEntFileHistory(e.asFileIdParam(), function(n) {
                t._fetchCallback(e, n)
            }
            ),
            this
        },
        _fetchCallback: function(e, t) {
            return constants.isResponseError(t) ? !1 : void this.parseFetchResult(e, t)
        },
        parseFetchResult: function(e, t) {
            var i = [];
            return i = i.concat(e.isFolder() ? _.map(t, function(t) {
                return _.extend(t, {
                    folderId: e.get("fileId"),
                    type: e.get("type")
                }),
                (new n).initFromFolder(t)
            }
            ) : _.map(t, function(t) {
                return _.extend(t, {
                    fileId: e.get("fileId"),
                    type: e.get("type")
                }),
                (new n).initFromFile(t)
            }
            )),
            i = _.sortBy(i, function(e) {
                return e.get("version")
            }
            ),
            i.reverse(),
            _.each(i, function(t, n) {
                t.set("index", i.length - n),
                t.get("version") === e.get("version") && t.set("currentVersion", !0)
            }
            ),
            this.reset(i),
            this
        }
    })
}
);
;define("app/website/file/views/PropertyVersionView", function(require, e, i) {
    var t = require("app/website/file/models/FileHistoryListDTO");
    i.exports = Backbone.View.extend({
        tagName: "div",
        id: "fileVersion",
        className: "file-version",
        currentFile: void 0,
        events: {
            "click .recovery": "_onRecovery",
            "click .cs-save-btn": "_saveAs"
        },
        initialize: function() {
            this.currentFile = this.options.currentFile,
            this.fileHistoryList = this.collection = new t;
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this._viewCreator());
            this._collectionBinder = new Backbone.CollectionBinder(e),
            this.addListeners(),
            this.render()
        },
        render: function() {
            var e = this;
            return this.fileHistoryList.set(this.model.get("histories")),
            this.$el.html(__html(Handlebars.template(function(e, i, t, s, n) {
                function o(e, i) {
                    var s, n = "";
                    return s = t["if"].call(e, e && e.canRecovery, {
                        hash: {},
                        inverse: h.noop,
                        fn: h.program(2, l, i),
                        data: i
                    }),
                    (s || 0 === s) && (n += s),
                    s = t.unless.call(e, e && e.folder, {
                        hash: {},
                        inverse: h.noop,
                        fn: h.program(4, r, i),
                        data: i
                    }),
                    (s || 0 === s) && (n += s),
                    n
                }
                function l() {
                    return '<span class="btn btn-white-blue recovery right"><%=msg655%></span>'
                }
                function r() {
                    return '<span class="btn btn-white-blue cs-save-btn"><%=msg778%></span>'
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                n = n || {};
                var a, c = "", h = this;
                return c += '<b class="current-version"><%=msgCurrentVersion%>:<span class="current-version-no"></span></b><div class="version-table"><ul class="list-header list-item"><li class="version-no"><%=msg706%></li><li class="update-time"><%=msg597%></li><li class="operation"><%=msg255%></li><li class="user-name"><%=msg595%></li></ul><ul class="list-body"></ul><div class="file-info"><ul class="file-info-item header-item"><li class="file-name"><%=msg1209%></li><li class="file-path"><%=msg654%></li></ul><ul class="file-info-item body-item"><li class="file-name"></li><li class="file-path"></li></ul></div></div><div class="btns">',
                a = t["if"].call(i, i && i.canDownload, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(1, o, n),
                    data: n
                }),
                (a || 0 === a) && (c += a),
                c += "</div>"
            }
            ), {
                canDownload: this.currentFile.hasPermission("download"),
                folder: this.currentFile.isFolder(),
                canRecovery: !this.currentFile.isLock() && this.currentFile.hasPermission("write")
            })),
            this._showVersion(),
            this.showSelectVersion(this.model.get("version")),
            this._collectionBinder.on("elCreated", function(i) {
                i.get("version") === e.model.get("version") && i.set("checked", !0)
            }
            ),
            this._collectionBinder.bind(this.collection, this.$(".list-body")),
            this
        },
        _viewCreator: function() {
            var e = this;
            return function(i) {
                return new s({
                    model: i,
                    collection: e.collection
                })
            }
        },
        addListeners: function() {
            this.listenTo(this.model, EventType.loadFile, this._showVersion),
            this.listenTo(this.fileHistoryList, "change:checked", this._onShowSelectVersion),
            this.listenTo(this.model, "change:version", this._showVersion)
        },
        _showVersion: function() {
            this.$(".current-version-no").html(this.model.get("version")),
            this.showSelectVersion(this.model.get("version"))
        },
        _onShowSelectVersion: function(e) {
            e.get("checked") && this.showSelectVersion(e.get("version"))
        },
        showSelectVersion: function(e) {
            var i = this
              , t = this.fileHistoryList.get(e);
            return t ? void t.fetchVersionDetail(function(e) {
                return constants.isResponseError(e) ? void noty.error(msgs.msgServerError) : (i.$(".body-item .file-name").html(constants.dealEntSpecialFolder(t.get("fileName"))),
                void i.$(".body-item .file-path").html(t.get("path")))
            }
            ) : (this.$(".body-item .file-name").html(this.model.get("fileName")),
            void this.$(".body-item .file-path").html(this.model.get("path")))
        },
        _onRecovery: function() {
            var e = this
              , i = this.collection.findWhere({
                checked: !0
            });
            if (!i || !i.get("version"))
                return !1;
            var t = this.currentFile.get("parentId");
            this.model.restoreFileVersion(i.get("version"), function(s) {
                constants.isResponseOK(s) ? (e.model.set(i.toJSON()),
                e.currentFile.reload(function() {
                    return 1 == e.currentFile.get("deleted") ? void collection.currentFileList.remove(e.currentFile) : void (t != e.currentFile.get("parentId") ? collection.currentFileList.remove(e.currentFile) : collection.currentFileList.get(e.currentFile.id) || collection.currentFileList.add(e.currentFile))
                }
                ),
                noty.success(msgs.msgRecoverSuccess),
                e.model.getFileProperties()) : noty.alert(ErrorType.restoreFileVersionError(s))
            }
            )
        },
        _saveAs: function() {
            if (model.currentUser.get("diskEnabled")) {
                var e = this.collection.findWhere({
                    checked: !0
                });
                return e ? void this.trigger("saveAs", e) : (noty.alert(msgs.msgRecoverNoVersion),
                !1)
            }
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    });
    var s = Backbone.View.extend({
        tagName: "li",
        className: "list-item-li",
        events: {
            click: "_setChecked"
        },
        initialize: function() {
            this.listenTo(this.model, "change:checked", this.onChangeSelect),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, t, s, n) {
                this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                n = n || {};
                var o, l, r = "", a = "function", c = this.escapeExpression;
                return r += '<ul class="list-item"><li class="version-no">',
                (l = t.version) ? o = l.call(i, {
                    hash: {},
                    data: n
                }) : (l = i && i.version,
                o = typeof l === a ? l.call(i, {
                    hash: {},
                    data: n
                }) : l),
                r += c(o) + '</li><li class="update-time">',
                (l = t.updateTime) ? o = l.call(i, {
                    hash: {},
                    data: n
                }) : (l = i && i.updateTime,
                o = typeof l === a ? l.call(i, {
                    hash: {},
                    data: n
                }) : l),
                r += c(o) + '</li><li class="operation">',
                (l = t.operation) ? o = l.call(i, {
                    hash: {},
                    data: n
                }) : (l = i && i.operation,
                o = typeof l === a ? l.call(i, {
                    hash: {},
                    data: n
                }) : l),
                r += c(o) + '</li><li class="user-name">',
                (l = t.upadteUserName) ? o = l.call(i, {
                    hash: {},
                    data: n
                }) : (l = i && i.upadteUserName,
                o = typeof l === a ? l.call(i, {
                    hash: {},
                    data: n
                }) : l),
                r += c(o) + "</li></ul>"
            }
            ), _.extend(this.model.toJSON(), {
                operation: constants.getFileOperationAllTip(this.model.get("operation")),
                updateTime: constants.dateStrFromMisc(this.model.get("updateTime"))
            }))),
            this
        },
        _setChecked: function() {
            var e = this.collection.findWhere({
                checked: !0
            });
            !!e && e.set("checked", !1),
            this.model.set("checked", !0)
        },
        onChangeSelect: function() {
            this.$(".list-item").toggleClass("active", this.model.get("checked"))
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/PropertyRemarkView", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "fileRemark",
        className: "file-remark",
        currentFile: void 0,
        events: {
            "blur .remark-content": "changeRemark",
            "change .remark-content": "changeRemark"
        },
        initialize: function() {
            this.currentFile = this.options.currentFile,
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, r, a, n) {
                function i() {
                    return 'readonly="readonly"'
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                r = this.merge(r, e.helpers),
                n = n || {};
                var s, o, l = "", m = this, h = "function", c = this.escapeExpression;
                return l += '<div><textarea class="remark-content" name="remarkContent" ',
                s = r.unless.call(t, t && t.canEdit, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(1, i, n),
                    data: n
                }),
                (s || 0 === s) && (l += s),
                l += ' placeholder="<%=msgTempNoTip%>">',
                (o = r.remark) ? s = o.call(t, {
                    hash: {},
                    data: n
                }) : (o = t && t.remark,
                s = typeof o === h ? o.call(t, {
                    hash: {},
                    data: n
                }) : o),
                l += c(s) + "</textarea></div>"
            }
            ), {
                remark: this.model.get("newRemark") || this.model.get("remark"),
                canEdit: this.currentFile.hasOperatePermission("rename") && !this.currentFile.isLock()
            })),
            this
        },
        changeRemark: function() {
            var e = $.trim(this.$(".remark-content").val() || "");
            this.model.set("newRemark", e)
        },
        close: function() {
            this.$el.modal("hide"),
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/models/FilePropertyDTO", function(require, e, t) {
    var i = require("app/commons/models/file/BaseFileDTO");
    t.exports = i.extend({
        idAttribute: "fileId",
        defaults: {
            fileName: void 0,
            permissionDTO: void 0,
            remind: !1,
            checked: !1
        },
        initialize: function() {
            !this.get("updateTime") && this.set("updateTime", this.get("createTime")),
            !this.get("upadteUserName") && this.set("upadteUserName", this.get("createrName")),
            this.get("createTime") && this.set("createTime", constants.dateStrFromMisc(this.get("createTime"))),
            this.get("updateTime") && this.set("updateTime", constants.dateStrFromMisc(this.get("updateTime"))),
            this.get("path") && this.set("path", this.isEntFile() ? constants.dealEntSpecialPath(this.get("path")) : constants.dealPersonSpecialPath(this.get("path"))),
            this.get("fileName") && this.set("fileName", this.isEntFile() ? constants.dealEntSpecialFolder(this.get("fileName")) : constants.dealPersonSpecialFolder(this.get("fileName"))),
            this.set("type", this.get("folder") ? "folder" : constants.getFileSuffix(this.get("fileName"))),
            this.set("icon", constants.typeConverter(this.get("type"))),
            this.setOldProperties()
        },
        setOldProperties: function() {
            this.get("maxSize") && this.set("oldMaxSize", this.get("maxSize")),
            this.get("fileName") && this.set("oldFileName", this.get("fileName")),
            this.get("remark") && this.set("oldRemark", this.get("remark"))
        },
        isEntFile: function() {
            return this.get("fileType") == constants.fileType.shareDisk
        },
        asFileBaseParam: function() {
            return {
                userId: cache.userId,
                entId: cache.entId,
                fileType: this.get("fileType"),
                fileId: this.get("fileId")
            }
        },
        getFileProperties: function(e) {
            var t = this;
            resturl.getFileProperties({
                fileId: this.get("fileId"),
                fileType: this.get("fileType"),
                entId: cache.entId,
                userId: cache.userId
            }, function(i) {
                constants.isResponseError(i) ? noty.error(msgs.msgServerError) : (t.set(i),
                t.initialize(),
                t.trigger(EventType.loadFile)),
                e && e(i)
            }
            )
        },
        restoreFileVersion: function(e, t) {
            var i = _.extend({
                entId: cache.entId,
                userId: cache.userId,
                version: e
            }, this.isFolder() ? {
                folderId: this.get("fileId")
            } : {
                fileId: this.get("fileId")
            });
            this.isFolder() ? resturl.restoreEntFolderVersion(i, t) : resturl.restoreEntFileVersion(i, t)
        },
        updateFileInfo: function(e) {
            var t = this.asFileBaseParam();
            _.extend(t, {
                version: this.get("version"),
                maxSize: this.get("maxSize"),
                name: this.get("fileName"),
                remark: this.get("remark")
            }),
            this.get("sysFolder") && (t.name = void 0),
            resturl.updateFileInfo(t, function(t) {
                constants.isResError(t) ? e && e(t, null ) : e && e(null , t)
            }
            )
        }
    })
}
);
;define("app/website/file/views/PropertyView", function(require, e, i) {
    var t = require("app/website/file/views/PropertyDetailView")
      , s = require("app/website/file/views/PropertyVersionView")
      , r = require("app/website/file/views/PropertyRemarkView")
      , o = require("app/commons/uikit/file/FolderTreeModal")
      , a = require("app/website/file/models/FilePropertyDTO");
    i.exports = Backbone.View.extend({
        tagName: "div",
        id: "fileProperty",
        className: "modal modal-window fade hide file-property-window",
        currentFile: void 0,
        _detailView: void 0,
        _versionView: void 0,
        _remarkView: void 0,
        $detailTab: void 0,
        $versionTab: void 0,
        $remarkTab: void 0,
        $propertyLayout: void 0,
        $folderLayout: void 0,
        events: {
            "click #detailTab": "_showDetail",
            "click #versionTab": "_showVersion",
            "click #remarkTab": "_showRemark",
            "click .ok-btn": "_onUpdate",
            "click .close-modal": "close"
        },
        initialize: function() {
            this.currentFile = this.options.currentFile,
            this.model = new a({
                fileId: this.currentFile.get("fileId"),
                fileName: this.currentFile.get("name"),
                fileType: this.currentFile.get("diskType")
            }),
            this.model.getFileProperties(),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, t, s, r) {
                function o() {
                    return '<li id=\'versionTab\'><a href="#tab2" data-toggle="tab"><%=msg596%></a></li>'
                }
                function a() {
                    return '<li id=\'remarkTab\'><a href="#tab3" data-toggle="tab"><%=msgRemark%></a></li>'
                }
                function l() {
                    return '<div class="tab-pane version-tab" id="tab2"></div>'
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                r = r || {};
                var n, d = "", h = this;
                return d += '<div class="property-layout"><div class="modal-header"><button type="button" class="close close-modal" data-dismiss="modal" aria-hidden="true">&times;</button><h3><%=msgProperty%></h3></div><div class="modal-body"><div class="tabbable"><ul class="nav nav-tabs"><li id="detailTab" class="active"><a href="#tab1" data-toggle="tab" style="margin-left:0;"><%=msg638%></a></li>',
                n = t["if"].call(i, i && i.isEntFile, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(1, o, r),
                    data: r
                }),
                (n || 0 === n) && (d += n),
                n = t.unless.call(i, i && i.isSysFolder, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(3, a, r),
                    data: r
                }),
                (n || 0 === n) && (d += n),
                d += '</ul><div class="tab-content"><div class="tab-pane active detail-tab" id="tab1"></div>',
                n = t["if"].call(i, i && i.isEntFile, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(5, l, r),
                    data: r
                }),
                (n || 0 === n) && (d += n),
                d += '<div class="tab-pane remark-tab" id="tab3"></div></div></div></div><div class="modal-footer" style="border:0;"><div class="btns ar"><span class="btn btn-clear ok-btn btn-blue"><%=msg86%></span><span class="btn btn-clear cancel-btn close-modal btn-white-blue"><%=msg87%></span></div></div></div><div class="folder-layout"></div>'
            }
            ), {
                isEntFile: this.model.isEntFile(),
                isSysFolder: this.currentFile.get("sysFolder")
            })),
            this.$propertyLayout = this.$(".property-layout"),
            this.$folderLayout = this.$(".folder-layout"),
            this.$detailTab = this.$(".detail-tab"),
            this.$versionTab = this.$(".version-tab"),
            this.$remarkTab = this.$(".remark-tab"),
            this._showDetail(),
            this.$el.modal({
                keyboard: !0,
                backdrop: "static"
            }),
            this
        },
        _showDetail: function() {
            this._detailView && this._detailView.close(),
            this._detailView = new t({
                model: this.model,
                currentFile: this.currentFile
            }),
            this._detailView.on(EventType.shiftView, this.close, this),
            this.$detailTab.html(this._detailView.el)
        },
        _showVersion: function() {
            this._versionView && this._versionView.close(),
            this._versionView = new s({
                model: this.model,
                currentFile: this.currentFile
            }),
            this._versionView.on("saveAs", this._saveToPersonDisk, this),
            this._versionView.on("closeView", this.close, this),
            this.$versionTab.html(this._versionView.el)
        },
        _showRemark: function() {
            this._remarkView && this._remarkView.close(),
            this._remarkView = new r({
                model: this.model,
                currentFile: this.currentFile
            }),
            this.$remarkTab.html(this._remarkView.el)
        },
        _onUpdate: function() {
            if (!this.currentFile.hasPermission("write") || this.currentFile.isLock())
                return void this.close();
            var e = this
              , i = $.trim(this.$(".file-name").val())
              , t = $.trim(this.$(".input-size").val())
              , s = this._remarkView && $(".remark-content").val() ? $(".remark-content").val() : this.model.get("remark");
            if (this.model.get("sysFolder"))
                ;
            else {
                if (!i) {
                    var r = this.model.get("folder") ? msgs.msg586 : msgs.msgFileNameNull;
                    return noty.alert(r),
                    !1
                }
                if (constants.pattern.fileName.test(i))
                    return noty.alert(msgs.msgNameFileError),
                    !1;
                if (s && s.length > 100)
                    return noty.alert(msgs.msgRemarkError),
                    !1
            }
            return t && !t.match(constants.pattern.integer) ? void noty.alert(msgs.msgSpaceFomat) : t > 999999 ? void noty.alert(msgs.msgDiskSizeLack) : (t = constants.gbConvertByte(t),
            this.model.set({
                fileName: i,
                maxSize: t,
                remark: s
            }),
            void this.model.updateFileInfo(function(i) {
                i ? noty.error(ErrorType.updateFileInfoError(i)) : (e.currentFile.reload(),
                noty.success(msgs.msgSysSettingSuccess),
                e.close())
            }
            ))
        },
        _saveToPersonDisk: function(e) {
            this.folderTreeModal && this.folderTreeModal.close(),
            this.folderTreeModal = new o({
                settingObj: {
                    isEntDisk: !1,
                    showCheckBox: !1
                },
                passInfo: e
            }),
            this.folderTreeModal.on(EventType.selectFolders, this._doAfterSelectDestFolder, this),
            this.folderTreeModal.on(EventType.cancelSelectFolders, this._closeFolderTreeModal, this),
            this.$el.removeClass("file-property-window"),
            this.$folderLayout.removeClass("hide"),
            this.$propertyLayout.addClass("hide"),
            this.$folderLayout.html(this.folderTreeModal.el)
        },
        _closeFolderTreeModal: function() {
            this.$el.addClass("file-property-window"),
            this.$folderLayout.addClass("hide"),
            this.$propertyLayout.removeClass("hide"),
            this.folderTreeModal.close()
        },
        _doAfterSelectDestFolder: function(e) {
            var i = this
              , t = e.passInfo
              , s = e.destFolder;
            return s ? void t.saveFileToPersonDisk(s.get("fileId"), function(e) {
                constants.isResponseError(e) ? (noty.error(ErrorType.saveToPersonDiskError(e)),
                i._closeFolderTreeModal()) : (noty.success(msgs.msgSaveSuccess),
                i._closeFolderTreeModal())
            }
            ) : (noty.alert(msgs.msgMoveNoDest),
            !1)
        },
        close: function() {
            this.$el.modal("hide"),
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/FileCommentWindow", function(require, e, t) {
    var n = require("app/commons/models/file/CommentList")
      , o = Backbone.View.extend({
        tagName: "li",
        className: "comment-item",
        events: {
            "click .edit": "_onEdit",
            "click .delete": "_onDelete",
            "click .cancel": "_onCancel",
            "click .confirm": "_onConfirm"
        },
        initialize: function() {
            this.addListeners(),
            this.render()
        },
        render: function() {
            var e = this
              , t = "/os/assets/img/defaultAvatar64man.png";
            if (this.model.get("createrId") && collection.userList) {
                var n = collection.userList.findWhere({
                    userId: this.model.get("createrId")
                });
                n && (t = n.get("icon"))
            }
            return this.$el.html(__html(Handlebars.template(function(e, t, n, o, i) {
                function s() {
                    return '<a class="edit"><%= msg264 %></a>&nbsp;&nbsp;<a class="delete"><%= msg156 %></a>'
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                n = this.merge(n, e.helpers),
                i = i || {};
                var a, r, m = "", l = "function", c = this.escapeExpression, d = this;
                return m += '<ul class="list-item"><li class=\'avatar\'><img src="',
                (r = n.icon) ? a = r.call(t, {
                    hash: {},
                    data: i
                }) : (r = t && t.icon,
                a = typeof r === l ? r.call(t, {
                    hash: {},
                    data: i
                }) : r),
                m += c(a) + '" alt="avatar"/></li><li class="comment-right"><div class="comment-header"><div class="user-operate"><div class="fl user"><b>',
                (r = n.createrName) ? a = r.call(t, {
                    hash: {},
                    data: i
                }) : (r = t && t.createrName,
                a = typeof r === l ? r.call(t, {
                    hash: {},
                    data: i
                }) : r),
                m += c(a) + '</b>&nbsp;<span class="time">',
                (r = n.createTime) ? a = r.call(t, {
                    hash: {},
                    data: i
                }) : (r = t && t.createTime,
                a = typeof r === l ? r.call(t, {
                    hash: {},
                    data: i
                }) : r),
                m += c(a) + '</span></div><div class="fr operate">',
                a = n["if"].call(t, t && t.canEdit, {
                    hash: {},
                    inverse: d.noop,
                    fn: d.program(1, s, i),
                    data: i
                }),
                (a || 0 === a) && (m += a),
                m += '</div><div style="clear:both;"></div></div></div><div class="comment-content">',
                (r = n.commentBody) ? a = r.call(t, {
                    hash: {},
                    data: i
                }) : (r = t && t.commentBody,
                a = typeof r === l ? r.call(t, {
                    hash: {},
                    data: i
                }) : r),
                m += c(a) + '</div><div class="edit-comment"><textarea class="edit-area" maxlength="200">',
                (r = n.commentBody) ? a = r.call(t, {
                    hash: {},
                    data: i
                }) : (r = t && t.commentBody,
                a = typeof r === l ? r.call(t, {
                    hash: {},
                    data: i
                }) : r),
                m += c(a) + '</textarea><div class="operate ar"><a class="confirm"><%= msg168 %></a><span class="pipe">|</span><a class="cancel"><%=msg87 %></a></div></div></li></ul>'
            }
            ), {
                commentBody: this.model.get("commentBody"),
                createrName: this.model.get("createrName"),
                createTime: constants.dateStrFromMisc(parseInt(this.model.get("createTime"))),
                icon: t,
                canEdit: model.currentUser.isAdmin() || model.currentUser.get("userId") == this.model.get("createrId")
            })),
            this.$(".edit-area").bind("keydown", "return", function(t) {
                return t.stopPropagation(),
                t.preventDefault(),
                e.$(".confirm").click(),
                !1
            }
            ),
            this
        },
        addListeners: function() {
            var e = this;
            this.listenTo(this.model, "change:commentBody", function() {
                e.$(".comment-content").html(e.model.get("commentBody"))
            }
            )
        },
        _onEdit: function() {
            this.$(".comment-right").addClass("on-edit")
        },
        _onCancel: function() {
            this.$(".comment-right").removeClass("on-edit")
        },
        _onDelete: function() {
            this.collection.trigger(EventType.deletion, this.model)
        },
        _onConfirm: function() {
            var e = this.$(".edit-area").val() || "";
            return e.length > 100 || 0 === e.length ? (noty.alert("请输入100字以内的评论信息！"),
            !1) : (this.model.set("commentBody", e),
            this.collection.trigger(EventType.edit, this.model),
            void this.$(".comment-right").removeClass("on-edit"))
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    });
    t.exports = Backbone.View.extend({
        tagName: "div",
        className: "modal modal-window fade hide file-comment-window",
        collectionBinder: void 0,
        events: {
            "click .comment-btn": "onComment"
        },
        initialize: function() {
            var e = this;
            this.commentList = new n,
            this.model.getFileComments(function(t) {
                e.commentList.add(t.comments)
            }
            );
            var t = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(t),
            this._addListeners(),
            this.render()
        },
        render: function() {
            var e = this;
            return this.$el.html(__html(Handlebars.template(function(e, t, n, o, i) {
                this.compilerInfo = [4, ">= 1.0.0"],
                n = this.merge(n, e.helpers),
                i = i || {};
                var s, a, r = "", m = "function", l = this.escapeExpression;
                return r += '<div class="modal-header"><button type="button" class="close close-modal" data-dismiss="modal" aria-hidden="true">&times;</button><h3><%= msgComment %></h3></div><div class="modal-body"><div class="file-header"><div class="file-name fl"><i name=\'file-icon\' class="file-icon-medium ',
                (a = n.icon) ? s = a.call(t, {
                    hash: {},
                    data: i
                }) : (a = t && t.icon,
                s = typeof a === m ? a.call(t, {
                    hash: {},
                    data: i
                }) : a),
                r += l(s) + '"></i>&nbsp;<b>',
                (a = n.name) ? s = a.call(t, {
                    hash: {},
                    data: i
                }) : (a = t && t.name,
                s = typeof a === m ? a.call(t, {
                    hash: {},
                    data: i
                }) : a),
                r += l(s) + '</b></div><div class="comment-count fr"><%= msgCurrentCommentCount %>&nbsp;&nbsp;<b class="blue count">0</b></div><div style="clear:both;"></div></div><ul class="comment-list"></ul><div class="comments-footer"><textarea placeholder="<%= msgCommentPlaceholder %>" class="comment-area" maxlength="200"></textarea><a class="btn btn-blue comment-btn"><%= msgPost %></a></div></div>'
            }
            ), {
                icon: constants.typeConverter(this.model.get("type")),
                name: this.model.displayName()
            })),
            this.collectionBinder.bind(this.commentList, this.$(".comment-list")),
            this.$el.modal({
                keyboard: !0,
                backdrop: "static"
            }),
            this.$(".comment-area").bind("keydown", "return", function(t) {
                return t.stopPropagation(),
                t.preventDefault(),
                e.$(".comment-btn").click(),
                !1
            }
            ),
            this
        },
        _addListeners: function() {
            this.listenTo(this.commentList, "add remove", this._onAddRemoveComment),
            this.listenTo(this.commentList, EventType.deletion, this._deleteComment),
            this.listenTo(this.commentList, EventType.edit, this._onUpdateComment)
        },
        viewCreator: function(e, t) {
            return new o({
                model: e,
                collection: t
            })
        },
        onComment: function() {
            var e = this
              , t = $.trim(this.$(".comment-area").val());
            return t ? t.length > 100 ? void noty.alert("请输入100字以内的评论信息！") : void this.model.updateFileComment({
                commentBody: this.$(".comment-area").val(),
                userName: model.currentUser.get("realName") || model.currentUser.get("userName")
            }, function(t) {
                if (!constants.isResponseError(t))
                    return e.$(".comment-area").val(""),
                    e.commentList.add(t),
                    void e.$(".comment-list").scrollTop(e.$(".comment-list")[0].scrollHeight);
                switch (t) {
                case ErrorType.errorNoPermission:
                    noty.alert(msgs.msgNoPermission2);
                    break;
                default:
                    noty.error(msgs.msgServerError)
                }
            }
            ) : void 0
        },
        _deleteComment: function(e) {
            var t = this;
            this.model.deleteFileComment(e.toJSON(), function(n) {
                if (constants.isResponseOK(n))
                    return void t.commentList.remove(e);
                switch (n) {
                case ErrorType.errorNoPermission:
                    noty.alert(msgs.msgNoPermission2);
                    break;
                default:
                    noty.error(msgs.msgServerError)
                }
            }
            )
        },
        _onUpdateComment: function(e) {
            return e.get("commentBody").length > 100 ? void noty.alert("请输入100字以内的评论信息！") : void this.model.updateFileComment(e.toJSON(), function(e) {
                if (constants.isResponseError(e))
                    switch (e) {
                    case ErrorType.errorNoPermission:
                        noty.alert(msgs.msgNoPermission2);
                        break;
                    default:
                        noty.error(msgs.msgServerError)
                    }
            }
            )
        },
        _onAddRemoveComment: function() {
            this.$(".comment-count .count").html(this.commentList.length)
        },
        close: function() {
            this.$el.modal("hide"),
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/LabelWindow", function(require, e, l) {
    var s = require("app/website/file/models/LabelList")
      , t = Backbone.View.extend({
        tagName: "li",
        className: "label-item",
        tpl: '<span class="cs-label label-blue"><%= labelName %>&nbsp<a class="delMark">&times;</a></span>&nbsp;',
        events: {
            "click .delMark": "_onDelete",
            "click ": "_onSelect"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(_.template(this.tpl, {
                labelName: this.model.get("labelName")
            })),
            this
        },
        _onDelete: function(e) {
            var l = this;
            e.stopPropagation(),
            this.model.get("labelId") || (this.collection.remove(this.model),
            model.messageEvent.trigger(EventType.deleteFileLabInLib, this.model)),
            this.model.get("labelId") && this.collection.deleteLabel(this.model, function() {
                model.messageEvent.trigger(EventType.deleteFileLabInLib, l.model)
            }
            )
        },
        _onSelect: function() {
            this.collection.trigger(EventType.select, this.model)
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
      , a = Backbone.View.extend({
        tagName: "li",
        className: "label-item",
        tpl: '<span class="cs-label label-blue"><%= labelName %>&nbsp<a class="delMark">&times;</a></span>&nbsp;',
        events: {
            "click .delMark": "_onDelete"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(_.template(this.tpl, {
                labelName: this.model.get("labelName")
            })),
            this
        },
        _onDelete: function() {
            this.collection.remove(this.model)
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    });
    l.exports = Backbone.View.extend({
        tagName: "div",
        className: "modal modal-window fade hide label-window",
        labelsBinder: void 0,
        fileLabelsBinder: void 0,
        events: {
            "click .updateLabel": "_updateLabel",
            "click .expand-btn": "_onExpand",
            "click .creteLab": "_onAddLab",
            "click .cancelAdd": "_onCancelAdd",
            "click .confirmAdd": "_onConfirmAdd",
            "click .closeModal": "close"
        },
        initialize: function() {
            this.labelList = new s,
            this.labelList.getLabels(),
            this.fileLabelList = new s(this.model.get("labels"));
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.labelCreator);
            this.labelsBinder = new Backbone.CollectionBinder(e);
            var l = new Backbone.CollectionBinder.ViewManagerFactory(this.fileLabelCreator);
            this.fileLabelsBinder = new Backbone.CollectionBinder(l),
            this.addListeners(),
            this.render()
        },
        render: function() {
            var e = this;
            return this.$el.html(__html(Handlebars.template(function(e, l, s, t, a) {
                this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                a = a || {};
                var i, n, o = "", d = "function", c = this.escapeExpression;
                return o += '<div class="modal-header"><button type="button" class="close close-modal" data-dismiss="modal" aria-hidden="true">&times;</button><h3><%= msgFileLabel %></h3></div><div class="modal-body"><div class="file-header"><%= msgOperateObj%>&nbsp;<i name=\'file-icon\' class="file-icon-medium ',
                (n = s.icon) ? i = n.call(l, {
                    hash: {},
                    data: a
                }) : (n = l && l.icon,
                i = typeof n === d ? n.call(l, {
                    hash: {},
                    data: a
                }) : n),
                o += c(i) + '"></i>&nbsp;',
                (n = s.name) ? i = n.call(l, {
                    hash: {},
                    data: a
                }) : (n = l && l.name,
                i = typeof n === d ? n.call(l, {
                    hash: {},
                    data: a
                }) : n),
                o += c(i) + '</div><div class="marks"><div class="create-mark"><div class="title"><%= msgLabelName %>&nbsp;&nbsp;<a class="btn-create creteLab"><i class="icon-custom-create"></i><%= msgCreateLab %></a></div><div class="labels-input"><ul class="file-label-list labels-list-ul"></ul><div class="label-input hide"><input type="text" class="marks-input" placeholder="<%= msgInputLabel %>" maxlength="30"/>&nbsp;<span class="btn btn-blue confirmAdd"><%= msg86 %></span>&nbsp;<span class="btn btn-white-blue cancelAdd"><%= msg87 %></span></div></div></div><div class="mark-list"><div class=\'title\'><%= msgLabelLib %>&nbsp;<span class="light">(<%= msgDeleteLibLab %>)</span></div><div class="row-fluid"><div class="span11"><ul class="marks-list-ul labels-list-ul"></ul></div><div class="span1 expand-bar"><a class="expand-btn"><span class="txt"><%= msgUnfold %></span>&nbsp;<i class="fa fa-angle-down"></i></a></div></div></div></div></div><div class="modal-footer"><span class="btn updateLabel btn-blue"><%= msg86 %></span><span class="btn close-modal btn-white-blue closeModal"><%= msg87 %></span></div>'
            }
            ), {
                icon: constants.typeConverter(this.model.get("type")),
                name: this.model.displayName()
            })),
            this.labelsBinder.bind(this.labelList, this.$(".marks-list-ul")),
            this.fileLabelsBinder.bind(this.fileLabelList, this.$(".file-label-list")),
            this.$(".marks-input").bind("keydown", "return", function(l) {
                return l.stopPropagation(),
                l.preventDefault(),
                e.$(".confirmAdd").click(),
                !1
            }
            ),
            this.$el.modal({
                keyboard: !0,
                backdrop: "static"
            }),
            this
        },
        labelCreator: function(e, l) {
            return new t({
                model: e,
                collection: l
            })
        },
        fileLabelCreator: function(e, l) {
            return new a({
                model: e,
                collection: l
            })
        },
        addListeners: function() {
            this.listenTo(this.labelList, EventType.select, this._onSelectLabel),
            this.listenTo(model.messageEvent, EventType.deleteFileLabInLib, this._onDeleteLibLab)
        },
        _onDeleteLibLab: function(e) {
            var l = this.fileLabelList.findWhere({
                labelName: e.get("labelName")
            });
            this.fileLabelList.remove(l)
        },
        _onAddLab: function() {
            this.$(".label-input").removeClass("hide"),
            this.$(".marks-input").focus()
        },
        _onCancelAdd: function() {
            this.$(".marks-input").val(""),
            this.$(".label-input").addClass("hide")
        },
        _onConfirmAdd: function() {
            var e = this.$(".marks-input")
              , l = $.trim(e.val());
            if (l) {
                if (!constants.isValidLabel(l))
                    return noty.fail("标签只能为8为中文或者16为英文字母!"),
                    !1;
                e.val("");
                var s = this.fileLabelList.findWhere({
                    labelName: l
                });
                if (s)
                    return noty.fail("该标签已经存在! 不能重复创建!"),
                    !1;
                if (this.fileLabelList.length > 2)
                    return void noty.alert(msgs.msgMax3Labels);
                var t = this.labelList.findWhere({
                    labelName: l
                });
                t ? this.fileLabelList.add(t) : (this.fileLabelList.add({
                    labelName: l
                }),
                this.labelList.add({
                    labelName: l
                })),
                this._onCancelAdd()
            }
        },
        _onSelectLabel: function(e) {
            var l = this.fileLabelList.findWhere({
                labelName: e.get("labelName")
            });
            if (!l)
                return this.fileLabelList.length > 2 ? void noty.alert(msgs.msgMax3Labels) : void this.fileLabelList.add(e)
        },
        _updateLabel: function() {
            var e = this;
            this.model.set("labels", this.fileLabelList.toJSON()),
            this.model.updateFileLabel(function(l) {
                if (constants.isResponseOK(l))
                    return noty.success(msgs.msgLabelModifySuccess),
                    void e.close();
                switch (l) {
                case ErrorType.errorNoPermission:
                    noty.alert(msgs.msgNoPermission);
                    break;
                case "errorEntLabelOver":
                    noty.alert("您企业的标签数目超过了最大限制99个! 不能再添加!");
                    break;
                default:
                    noty.error(msgs.msgServerError)
                }
            }
            )
        },
        _onExpand: function() {
            var e = this.$(".expand-btn .fa").hasClass("fa-angle-up");
            this.$(".marks-list-ul").scrollTop(0),
            this.$(".marks-list-ul").css({
                "max-height": e ? 56 : 116,
                "overflow-y": e ? "hidden" : "auto"
            }),
            this.$(".expand-btn .txt").html(e ? msgs.msgUnfold : msgs.msgFold),
            this.$(".expand-btn i").toggleClass("fa-angle-up", !e).toggleClass("fa-angle-down", e)
        },
        close: function() {
            this.$el.modal("hide"),
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/filerouter", function(require, e, i) {
    var n = require("app/website/file/views/RemindFileView")
      , t = require("app/website/file/views/LinkFileView")
      , l = require("app/website/file/views/FullTxtView")
      , o = require("app/website/file/views/RecycleView")
      , s = (require("app/website/file/views/UploadManagerView"),
    require("app/website/file/views/PropertyView"))
      , r = require("app/website/file/views/NewFileModal")
      , a = require("app/website/file/models/NewFileDTO")
      , w = require("app/commons/models/file/ShareLinkDTO")
      , c = require("app/commons/uikit/sharelink/ShareLinkView")
      , d = require("app/website/file/views/FileCommentWindow")
      , v = require("app/website/file/views/LabelWindow");
    i.exports = window.FileRouter = Backbone.Router.extend({
        routes: {
            "disk/folder/create": "createDiskFolder",
            "disk/file/create": "createDiskFile",
            "file/rename/:fileId": "onRenameFile",
            "disk/file/interest": "_showRemindFileView",
            "disk/file/search": "_onFullTxt",
            "disk/file/share": "_showLinkFileView",
            "disk/show/recycle": "_showRecycleView",
            "file/view/:fileId": "onViewFile",
            "file/nopermission": "noPermission",
            "file/property/:fileId": "onShowProperty",
            ":type/forward/:fileId": "onFileForward",
            "file/edit/:fileId": "onEditFile",
            "file/preview/:fileId": "onPreviewFile",
            "file/mark/:fileId": "onFileMark",
            "file/comment/:fileId": "onFileComment",
            "file/share/:fileId": "shareFile"
        },
        onRenameFile: function(e) {
            var i = this.getFileById(e);
            i.trigger(EventType.rename),
            this.navigate("nav/close", !0)
        },
        onFileForward: function(e, i) {
            "folder" === e ? collection.entFileList.ensureEntFolders(i, this._fileForwardCallback(i)) : collection.entFileList.eunsureEntFile(i, this._fileForwardCallback(i))
        },
        _fileForwardCallback: function(e) {
            return function() {
                var i = collection.entFileList.get(e) ? collection.entFileList.get(e).get("parentId") : null ;
                return i ? (router.fileRouter.navigate("sharedisk/open/" + i, !0),
                void setTimeout(function() {
                    var i = collection.currentFileList.get(e);
                    i && (i.set("checked", !0),
                    view.fileTable.scrollToFile(i))
                }
                , 500)) : (router.approuter.navigate("nav/close", !0),
                void noty.alert(msgs.msgFileInvisible))
            }
        },
        emptyRecycle: function(e) {
            view.recycleView.emptyRecycle(e)
        },
        restoreFile: function(e, i) {
            var n = constants.isEntDisk(e) ? collection.entRecycleFiles.get(i) : collection.personalRecycleFiles.get(i);
            view.recycleView.restoreFile(e, [n])
        },
        deleteFileFromRecycle: function(e, i) {
            var n = constants.isEntDisk(e) ? collection.entRecycleFiles.get(i) : collection.personalRecycleFiles.get(i);
            view.recycleView.deleteFile(e, [n])
        },
        onViewFile: function(e) {
            var i = this.getFileById(e);
            return i.isNeedConvert() ? (this.doShowFile(i),
            !1) : (window.open(i.getPreviewUrl()),
            void this.navigate("nav/close", !0))
        },
        isDiskView: function() {
            return "entFileTable" === view.contentRight.id
        },
        _isEntDisk: function() {
            return "entFileTable" === view.contentRight.id ? model.currentFolder.isEntDisk() : !0
        },
        createDiskFolder: function() {
            view.fileTable.onCreateFolder()
        },
        createDiskFile: function() {
            view.fileTable.onCreateFile()
        },
        _showRemindFileView: function() {
            view.mainbox.hideSlideRight(),
            view.remindFileView && view.remindFileView.close(),
            view.remindFileView = new n,
            view.mainbox.updateContentRight(view.remindFileView),
            view.remindFileView.showLoading(),
            this._navClose()
        },
        _onFullTxt: function() {
            view.mainbox.hideSlideRight(),
            view.fullTxtView && view.fullTxtView.close(),
            view.fullTxtView = new l,
            view.mainbox.updateContentRight(view.fullTxtView),
            this._navClose()
        },
        _showLinkFileView: function() {
            view.mainbox.hideSlideRight(),
            view.linkFileView && view.linkFileView.close(),
            view.linkFileView = new t,
            view.mainbox.updateContentRight(view.linkFileView),
            view.linkFileView.showLoading(),
            this._navClose()
        },
        _showRecycleView: function() {
            view.mainbox.hideSlideRight(),
            view.recycleView && view.recycleView.close(),
            view.recycleView = new o,
            view.mainbox.updateContentRight(view.recycleView),
            view.recycleView.onEntRecycleShow(),
            this._navClose()
        },
        onShowProperty: function(e) {
            var i = this.getFileById(e);
            view.filePropertyView && view.filePropertyView.close(),
            view.filePropertyView = new s({
                currentFile: i
            }),
            this._navClose()
        },
        noPermission: function() {
            noty.error(msgs.msgNoPermission),
            router.approuter.navigate("nav/close", !0)
        },
        getFileById: function(e) {
            return _.isObject(e) ? e : collection.currentFileList.get(e)
        },
        renameFile: function(e, i) {
            if (!i)
                return !1;
            if (constants.pattern.fileName.test(i))
                return noty.alert(msgs.msgNameFileError),
                !1;
            if (i.length > 100)
                return noty.alert(msgs.msgFileLengthError),
                !1;
            var n = e.get("name");
            e.set("name", i),
            e.rename(function(i) {
                if (constants.isResOK(i))
                    return e.reload(),
                    !0;
                switch (e.set({
                    name: n
                }),
                i) {
                case ErrorType.errorSameFolder:
                    noty.error(msgs.msgFolderNameConfict);
                    break;
                case ErrorType.errorSameFile:
                    noty.error(msgs.msgFileConflict);
                    break;
                case ErrorType.errorVersionConflict:
                    noty.error(msgs.msgFileVerConflict);
                    break;
                default:
                    noty.error(msgs.msgSaveFail)
                }
                return !1
            }
            )
        },
        onEditFile: function(e) {
            view.newFileModal && view.newFileModal.close();
            var i = e.fileId ? e : this.getFileById(e);
            i && (view.newFileModal = new r({
                model: (new a).createFrom(i),
                settingObj: {
                    title: msgs.msgEditDocument
                }
            })),
            this.navigate("nav/close", !0)
        },
        onPreviewFile: function(e) {
            view.newFileModal && view.newFileModal.close();
            var i = e.fileId ? e : this.getFileById(e);
            i && (view.newFileModal = new r({
                model: (new a).createFrom(i),
                settingObj: {
                    title: i.displayName(),
                    view: !0
                }
            })),
            this.navigate("nav/close", !0)
        },
        shareFile: function(e) {
            var i = this.getFileById(e);
            if (i.get("shareLinkId")) {
                var n = new w({
                    linkId: i.get("shareLinkId"),
                    file: i.toJSON(),
                    fileType: i.get("fileType")
                });
                n.fetch(function() {
                    view.shareLinkView && view.shareLinkView.close(),
                    view.shareLinkView = new c({
                        model: n
                    })
                }
                )
            } else {
                var n = new w({
                    fileId: i.get("fileId"),
                    file: i.toJSON(),
                    type: i.hasPermission("download") ? constants.shareType.download : constants.shareType.preview,
                    fileType: i.get("fileType")
                });
                n.createLink(function(e) {
                    e ? noty.error(e) : (i.set("shareLinkId", n.id),
                    view.shareLinkView && view.shareLinkView.close(),
                    view.shareLinkView = new c({
                        model: n
                    }))
                }
                )
            }
            this.navigate("nav/close", !0)
        },
        onDelShareFile: function(e) {
            this.doDelShare(this.getFileById(e))
        },
        doDelShare: function(e, i) {
            resturl.deleteLink({
                entId: cache.entId,
                userId: cache.userId,
                linkId: e.get("shareLinkId"),
                fileType: i || constants.fileType.shareDisk
            }, function(i) {
                constants.isResponseOK(i) ? (e.set("shareLinkId", null ),
                noty.success(msgs.msgUnLinkSuccess)) : noty.error(i == ErrorType.errorNoPermission ? msgs.msgNoPermission : msgs.msgServerError)
            }
            )
        },
        doDelShares: function(e, i) {
            resturl.deleteLinks({
                entId: cache.entId,
                userId: cache.userId,
                linkIds: _.map(e, function(e) {
                    return e.get("shareLinkId")
                }
                ),
                fileType: i || constants.fileType.shareDisk
            }, function(i) {
                constants.isResponseOK(i) ? (_.each(e, function(e) {
                    e.set("shareLinkId")
                }
                ),
                noty.success(msgs.msgUnLinkSuccess)) : noty.error(i == ErrorType.errorNoPermission ? msgs.msgNoPermission : msgs.msgServerError)
            }
            )
        },
        onFileMark: function(e) {
            var i = this.getFileById(e);
            i && (view.labelWindow && view.labelWindow.close(),
            view.labelWindow = new v({
                model: i
            })),
            this.navigate("nav/close", !0)
        },
        onFileComment: function(e) {
            var i = this.getFileById(e);
            i && (view.fileCommentWindow && view.fileCommentWindow.close(),
            view.fileCommentWindow = new d({
                model: i
            })),
            this.navigate("nav/close", !0)
        },
        _navClose: function() {
            this.navigate("nav/close", !0)
        }
    })
}
);
;define("app/website/file/models/FileBreadListDTO", function(require, e, l) {
    var o = require("app/commons/models/file/EntFileDTO");
    l.exports = Backbone.Collection.extend({
        model: o,
        url: ""
    })
}
);
;define("app/website/file/models/FullTextList", function(require, t, e) {
    var s = require("app/website/file/models/FullTextDTO")
      , n = require("app/website/file/models/FullTextCountDTO");
    e.exports = Backbone.Collection.extend({
        model: s,
        countDTO: new n,
        fetch: function(t, e, n) {
            var o = this;
            resturl.fullTextSearch({
                searchKey: t,
                docType: e,
                skipResults: 0,
                maxResults: 3e3
            }, function(t) {
                if (constants.isResError(t))
                    return void noty.error(msgs.msgServerError);
                var e = t.files;
                e && o.reset(_.map(e, function(t) {
                    var e = new s(t);
                    return e
                }
                )),
                o._updateCountInfo(t.resultCount),
                n && n(o)
            }
            )
        },
        _updateCountInfo: function(t) {
            var e = 0
              , s = 0
              , n = 0
              , o = 0
              , i = 0
              , r = 0;
            this.each(function(t) {
                var c = constants.getFileSuffix(t.get("path"));
                constants.isTxtType(c) ? e++ : constants.isPdfType(c) ? s++ : constants.isDocType(c) ? n++ : constants.isExcelType(c) ? o++ : constants.isPptType(c) ? i++ : r++
            }
            ),
            this.countDTO.set({
                count: t,
                txt: e,
                pdf: s,
                doc: n,
                xls: o,
                ppt: i,
                other: r
            })
        }
    })
}
);
;define("app/website/user/views/UserAvatarView", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "div",
        className: "user-avatar-view",
        _modelBinder: void 0,
        editValue: !1,
        events: {
            "click ": "onShowUserSetting"
        },
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder,
            this.render()
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, t, s, n, i) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                i = i || {},
                '<div class="user-avatar"><img src="" alt="avatar" name="avatar"/></div><div class="inline-block user-info collapse-hide"><span class="user-name"></span><br/><span class="job-title"></span></div><i class="icon-custom-right-menu"></i>'
            }
            )));
            var e = {
                realName: {
                    selector: "[class=user-name]",
                    converter: this.getUserName()
                },
                icon: {
                    selector: "[name=avatar]",
                    elAttribute: "src",
                    converter: this.getAvatar
                },
                onlineStatus: {
                    selector: "[class=user-avatar]",
                    elAttribute: "class",
                    converter: this.getOnline
                },
                jobTitle: {
                    selector: "[class=job-title]"
                }
            };
            return this._modelBinder.bind(this.model, this.el, e),
            this
        },
        onShowUserSetting: function() {
            router.setting.navigate("user/setting", !0)
        },
        getUserName: function() {
            return function(e, t, s, n) {
                return "ModelToView" === e ? n.getDisplayName() : void 0
            }
        },
        getAvatar: function(e, t) {
            return log.debug("avatar value:", t),
            t || constants.defaultIcon
        },
        getOnline: function(e, t) {
            return t + ""
        },
        convertUserType: function(e, t) {
            var s = "";
            switch (t) {
            case constants.UserType.Administrator:
                s = msgs.msgAdmin;
                break;
            case constants.UserType.SecondAdministrator:
                s = msgs.msgSecAdmin
            }
            return s
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/upload/UploadItem", function(require, e, s) {
    var t = require("app/website/file/views/CreateFolderView")
      , a = require("app/website/file/models/EditFileNameParam");
    s.exports = Backbone.View.extend({
        tagName: "li",
        className: "position-relative upload-item progress",
        $size: void 0,
        $progress: void 0,
        $status: void 0,
        $result: void 0,
        $success: void 0,
        events: {
            "click .cs-remove-item": "onRemoveItem",
            "click .cs-rename-file": "onRenameFile"
        },
        initialize: function() {
            this.listenTo(this.model, "change:percent", this.onprogress),
            this.listenTo(this.model, "change:status", this.onstatus),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, s, t, a, i) {
                this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                i = i || {};
                var o, l, r = "", c = "function", n = this.escapeExpression;
                return r += '<div class="bar upload-progress" style="width: 0%;"></div><ul class="row-fluid upload-item-body"><li class="span1 upload-result"></li><li class="span9 upload-info"><strong class="text-overflow">',
                (l = t.name) ? o = l.call(s, {
                    hash: {},
                    data: i
                }) : (l = s && s.name,
                o = typeof l === c ? l.call(s, {
                    hash: {},
                    data: i
                }) : l),
                r += n(o) + '</strong><div class="upload-status"><span class=\'label\'>等待上传</span></div><div class="file-size label label-success hide-force">- / ',
                (l = t.size) ? o = l.call(s, {
                    hash: {},
                    data: i
                }) : (l = s && s.size,
                o = typeof l === c ? l.call(s, {
                    hash: {},
                    data: i
                }) : l),
                r += n(o) + '</div><div class="upload-success text-overflow hide-force">已上传到: ',
                (l = t.path) ? o = l.call(s, {
                    hash: {},
                    data: i
                }) : (l = s && s.path,
                o = typeof l === c ? l.call(s, {
                    hash: {},
                    data: i
                }) : l),
                r += n(o) + '</div></li><li class="span2 file-operations"><div class="row-fluid"><div class="span4"><i class="icon-custom-remove cs-remove-item cursor-pointer"></i></div><div class="span8"><button class="btn btn-link cs-rename-file hide-force">重命名</button></div></div></li></ul>'
            }
            ), {
                name: this.model.get("name"),
                path: this.model.get("path"),
                size: constants.convertSize(this.model.get("size"))
            })),
            this.$size = this.$(".file-size"),
            this.$progress = this.$(".upload-progress.bar"),
            this.$status = this.$(".upload-status"),
            this.$result = this.$(".upload-result"),
            this.$success = this.$(".upload-success"),
            this
        },
        showUploadSize: function() {
            this.$size.text(constants.convertSize(this.model.get("completed")) + "/" + constants.convertSize(this.model.get("size")))
        },
        onprogress: function() {
            log.debug("onprogress: ", this.model.get("percent")),
            this.$progress.css("width", this.model.get("percent")),
            this.showUploadSize()
        },
        onstatus: function() {
            switch (log.debug("onstatus: file: ", this.model.get("name"), ", status: ", this.model.get("status")),
            this.model.get("status") && this.$(".cs-rename-file").toggleClass("hide-force", "errorSameFile" !== this.model.get("status")),
            this.model.get("status")) {
            case "init":
                this.$status.removeClass("hide-force").html("<span class='label'>等待上传</span>");
                break;
            case "checking":
                this.$status.removeClass("hide-force").html("<span class='label label-success'>检查中</span>");
                break;
            case "wait":
                this.$status.removeClass("hide-force").html("<span class='label label-success'>等待上传</span>");
                break;
            case "upload":
                this.$progress.removeClass("hide-force"),
                this.$status.addClass("hide-force"),
                this.$size.removeClass("hide-force");
                break;
            case "success":
                this.$progress.addClass("hide-force"),
                this.$status.addClass("hide-force"),
                this.$size.addClass("hide-force"),
                this.$result.html('<i class="fa fa-check-circle fa-2x color-green"></i>'),
                this.model.get("onesecond") && this.$success.text("秒传到: " + this.model.get("path")),
                this.$success.removeClass("hide-force"),
                this.$el.removeClass("progress");
                break;
            default:
                this.$progress.addClass("hide-force"),
                this.$size.addClass("hide-force"),
                this.$status.removeClass("hide-force").html("<span class='label label-important'>" + this.getStatusText() + "</span>"),
                this.$result.html('<i class="fa fa-times-circle fa-2x color-red"></i>'),
                this.$el.removeClass("progress")
            }
        },
        onRemoveItem: function() {
            this.collection.remove(this.model)
        },
        getStatusText: function() {
            switch (this.model.get("status")) {
            case ErrorType.errorSameFile:
                return "文件名重复";
            case ErrorType.errorNoSpace:
                return "云盘空间不足";
            case ErrorType.errorFolderSpaceOver:
                return "文件夹空间不足";
            case ErrorType.errorFolderDeleted:
                return "文件夹已被删除";
            case ErrorType.errorCheckToken:
            case ErrorType.error500:
            default:
                return "网络错误"
            }
        },
        onRenameFile: function() {
            var e = this
              , s = new t({
                model: new a({
                    name: this.model.get("name"),
                    operate: "renameFile"
                })
            });
            s.on(EventType.submit, function(t) {
                e.model.set({
                    name: t.get("name"),
                    status: "init"
                }),
                e.$(".file-name").text(t.get("name")),
                s.close(),
                view.uploadView.trigger("renameFile", e.model)
            }
            )
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/upload/UploadView", function(require, e, t) {
    var o = "[UploadView]-"
      , s = require("app/commons/models/file/EntFileDTO")
      , i = require("app/commons/models/file/PersonFileDTO")
      , n = require("app/website/upload/UploadFileList")
      , l = require("app/website/upload/UploadFile")
      , r = require("app/website/upload/UploadItem")
      , a = require("app/commons/uikit/user/UsersSelectWindow");
    t.exports = Backbone.View.extend({
        tagName: "div",
        className: "modal fade  modal-window upload-window file-upload-modal baidu-upload",
        collectionBinder: void 0,
        currentFolder: void 0,
        selectedUsers: void 0,
        checkingNum: 0,
        $statInfo: void 0,
        $dndArea: void 0,
        $path: void 0,
        $minus: void 0,
        events: {
            "click .modal-header .close": "onCloseModal",
            "click .modal-header .cs-modal-minus": "onMinusModal",
            "click .btn.clear-uploaded": "onClearUploaded",
            "click .select-users i": "onSelectUser"
        },
        initialize: function() {
            this.$minus = this.options.$minus,
            this.currentFolder = model.currentFolder,
            this.collection = new n,
            this.selectedUsers = new UserListDTO,
            this._addListeners();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator,this.collection);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.render()
        },
        render: function() {
            return this.collectionBinder.bind(this.collection, this.$(".upload-items")),
            this.$statInfo = this.$(".upload-stat-info"),
            this.$dndArea = this.$("#dndArea"),
            this.$path = this.$(".file-path"),
            this._onChangeCurrentFolder(),
            this._listenMinusArea(),
            this
        },
        show: function() {
            this.$minus.removeClass("in"),
            this.$el.modal({
                keyboard: !0,
                backdrop: "static"
            })
        },
        initUpload: function() {
            var e = this;
            this._addUploadHook(),
            this.uploader = WebUploader.create({
                auto: !0,
                swf: "/os/sea-modules/jquery/plugins/webuploader/Uploader.swf",
                pick: {
                    id: "#filePicker",
                    label: "上传"
                },
                dnd: "#dndArea",
                disableGlobalDnd: !0,
                prepareNextFile: !0,
                fileNumLimit: 200,
                threads: 2,
                compress: !1,
                fileSingleSizeLimit: 1073741824,
                server: "/upload/single"
            });
            var t = {
                beforeFileQueued: function(t) {
                    var o = new l(t)
                      , s = constants.isRootFolder(e.currentFolder.id) ? collection.entFileList.getDefaultUploadFolderId() : e.currentFolder.id;
                    if (e.currentFolder.isRootFolder())
                        return noty.fail("根文件夹下不能上传文件!"),
                        !1;
                    var i = e.collection.length;
                    if (i >= 200)
                        return !1;
                    var n = e.collection.find(function(e) {
                        return e.get("name") === o.get("name")
                    }
                    );
                    return n ? !1 : (o.set({
                        status: "init",
                        parentId: s,
                        fileType: e.currentFolder.get("fileType") || "sharedisk",
                        queueFile: t,
                        path: e.currentFolder.get("path") + "/" + o.get("name")
                    }),
                    e.collection.add(o),
                    !0)
                },
                uploadBeforeSend: function(t, o) {
                    var s = e.collection.get(o.id)
                      , i = {
                        folderId: s.get("parentId"),
                        fileType: s.get("fileType"),
                        fileName: s.get("name"),
                        token: cache.token
                    };
                    log.info("upload param: ", JSON.stringify(i)),
                    o.param = JSON.stringify(i),
                    s.set("status", "upload")
                },
                uploadProgress: function(t, s) {
                    log.info(o, " uploadProgress: file: ", t.name, ", percent: ", s);
                    var i = e.collection.get(t.id);
                    i.set("percent", _.numberFormat(100 * s, 2) + "%"),
                    i.set("completed", i.get("size") * s),
                    log.info(o, "size: ", i.get("size"), ", completed: ", i.get("completed"))
                },
                uploadError: function(t, s) {
                    log.warn(o, "uploadError: file: ", t.name, ", reason: ", s);
                    var i = e.collection.get(t.id);
                    i.set("status", "error")
                },
                uploadSuccess: function(t, n) {
                    if (!n)
                        return !1;
                    log.info(o, "uploadSuccess: ", t, ", response: ", n);
                    var l = e.collection.get(t.id);
                    if (_.startsWith(n.statusCode, "error"))
                        return l.set("status", n.statusCode),
                        !1;
                    l.set({
                        status: "success",
                        completed: l.get("size"),
                        fileId: n.fileId
                    });
                    var r = null ;
                    "sharedisk" === n.fileType ? (r = new s(n),
                    r.set("permissionDTO", model.currentFolder.get("permissionDTO"))) : r = new i(n),
                    model.currentFolder.id === r.get("parentId") && collection.currentFileList.unshift(r)
                },
                uploadFinished: function() {
                    log.debug("upload finined, whether need notify: ", !!e.selectedUsers.length),
                    e.selectedUsers.length && e.collection.sendNotify(e.selectedUsers.models)
                },
                error: function(e) {
                    switch (log.warn(o, "error: ", e),
                    e) {
                    case "Q_EXCEED_NUM_LIMIT":
                        noty.error("一次不能选择超过200个文件!");
                        break;
                    case "Q_EXCEED_SIZE_LIMIT":
                        noty.error("不能选择超过1G的文件!");
                        break;
                    case "Q_TYPE_DENIED":
                        noty.error("不允许选择该文件类型!");
                        break;
                    case "F_DUPLICATE":
                        noty.error("不能重复选择文件!")
                    }
                }
            };
            _.each(t, function(t, o) {
                e.uploader.on(o, t)
            }
            ),
            this._ctrlDnd(this.$dndArea)
        },
        _ctrlDnd: function(e) {
            webhelper.isIE8() ? (e.removeClass("placeholder").addClass("no-placeholder"),
            this.$(".dnd-tip").html('当前文件不支持拖拽上传, 请点击"上传"按钮上传. <br/>(单个文件最大1GB, 暂不支持拖拽文件夹)')) : e.on("dragenter dragover", function() {
                e.addClass("placeholder-hover")
            }
            ).on("dragleave drop", function() {
                e.removeClass("placeholder-hover")
            }
            )
        },
        _addUploadHook: function() {
            var e = this;
            WebUploader.Uploader.register({
                "before-send-file": "preupload"
            }, {
                preupload: function(t) {
                    var s = this.owner
                      , i = e.collection.get(t.id)
                      , n = WebUploader.Deferred();
                    return i ? (i.set("status", "checking"),
                    s.md5File(t.source).fail(function() {
                        n.reject()
                    }
                    ).then(function(l) {
                        log.info(o, "hook, file: ", t.name, ", md5: ", l, ", uploadFile: ", i),
                        i.set("fileMd5", l),
                        i.checkUpload(function(l, r) {
                            l ? (log.error("fail to check upload: ", i.get("name"), ", err: ", l),
                            log.warn(o, " skip file: ", i.get("name")),
                            i.set("status", l),
                            s.skipFile(t),
                            n.resolve()) : r.fileId ? (i.set("onesecond", "true"),
                            i.set("status", "success"),
                            s.skipFile(t),
                            e.uploader.trigger("uploadSuccess", t, r),
                            n.resolve()) : (i.set("status", "wait"),
                            n.resolve())
                        }
                        )
                    }
                    ),
                    n.promise()) : !0
                }
            })
        },
        _addListeners: function() {
            this.on("renameFile", this._onRenameFile),
            this.listenTo(this.collection, "remove", this._onRemoveItem),
            this.listenTo(this.collection, "add remove reset", this._changeDndArea),
            this.listenTo(this.collection, "change:status", this._onstatus),
            this.listenTo(this.collection, "change:completed", this._onspeed),
            this.listenTo(this.selectedUsers, "add remove reset", this._onToggleUsers),
            this.listenTo(this.currentFolder, "change", this._onChangeCurrentFolder)
        },
        _onChangeCurrentFolder: function() {
            var e = constants.dealSpecialPath(model.currentFolder.get("path"), model.currentFolder.get("fileType"));
            this.$path.text("到: " + e).attr("title", e),
            this.$(".select-users").toggleClass("hide-force", !model.currentFolder.isEntDisk())
        },
        _listenMinusArea: function() {
            var e = this;
            this.$minus.click(function(t) {
                var o = $(t.target);
                o.hasClass("close") ? e.onCloseModal() : (e.$minus.removeClass("in"),
                e.show())
            }
            )
        },
        viewCreator: function(e, t) {
            return new r({
                model: e,
                collection: t
            })
        },
        _onstatus: function() {
            var e = this.collection.getStatInfo();
            log.info(o, "onstatus: ", e);
            var t = "";
            t = 0 === e.total ? "当前没有上传任务" : e.upload > 0 ? _.sprintf("共%d个任务, 剩余%d个任务", e.total, e.upload) : e.total === e.success ? _.sprintf("上传完成, 成功%d项", e.success) : _.sprintf("上传完成, 成功%d项, 失败%d项", e.success, e.error),
            this.$statInfo.html(t),
            this.$minus.find("h3").html(t)
        },
        _onspeed: function() {},
        cancelUpload: function() {
            this.collection.reset()
        },
        onClearUploaded: function() {
            var e = this.collection.filter(function(e) {
                return "success" === e.get("status")
            }
            );
            this.collection.remove(e)
        },
        _onRemoveItem: function(e) {
            log.info(o, "on remove file: ", e.get("name"), ", status: ", e.get("status")),
            "upload" === e.get("status") && this.uploader.cancelFile(e.get("queueFile")),
            e.isComplete() || this.uploader.removeFile(e.get("queueFile"), !0),
            this.uploader.upload(),
            this._onstatus(),
            this._changeDndArea()
        },
        _changeDndArea: function() {
            this.collection.length > 0 ? this.$dndArea.removeClass("placeholder no-placeholder") : this.$dndArea.addClass(webhelper.isIE8() ? "no-placeholder" : "placeholder")
        },
        onCloseModal: function() {
            var e = this;
            this.collection.hasUploadFile() ? noty.confirm("您还有未上传完成的文件，确定要停止所有未上传文件, 并关闭上传窗口?", function(t) {
                t && e.justClose()
            }
            ) : e.justClose()
        },
        justClose: function() {
            this.uploader.stop(!0),
            this.uploader.reset(),
            this.collection.reset(),
            this.selectedUsers.reset(),
            this.close()
        },
        onMinusModal: function() {
            this.close(),
            this.$minus.addClass("in")
        },
        onSelectUser: function() {
            this.userWin && this.userWin.close(),
            this.userWin = new a({
                selectedUserList: this.selectedUsers,
                settingObj: {
                    sendMail: !0,
                    isShowSelf: !1,
                    canSelectSelf: !1,
                    okBtnText: "发送通知"
                }
            }),
            this.userWin.usersSelectModal.on(EventType.selectUsers, this.afterSelectUser, this),
            this.userWin.usersSelectModal.on(EventType.cancelSelectUsers, this.closeUserWin, this)
        },
        closeUserWin: function() {
            this.userWin.close()
        },
        afterSelectUser: function(e) {
            return e.length ? (log.info(o, "selectUsers: ", e),
            this.selectedUsers.reset(e.models),
            this.userWin.close(),
            void 0) : (noty.warn(msgs.msgSelectUserError),
            !1)
        },
        _onRenameFile: function(e) {
            this.uploader.retry(e.get("queueFile"))
        },
        close: function() {
            this._onstatus(),
            this.$el.modal("hide"),
            this.$minus.removeClass("in")
        }
    })
}
);
;define("app/website/file/views/FileLeftView", function(require, e, s) {
    var i = require("app/website/user/views/UserAvatarView")
      , a = require("app/website/upload/UploadView");
    s.exports = Backbone.View.extend({
        tagName: "div",
        id: "file-left-view",
        _userAvatarView: void 0,
        $fileNav: void 0,
        $userNav: void 0,
        events: {
            "click .navLink1": "_onActiveLink"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, s, i, a, t) {
                function l() {
                    return '<li class="left-nav-person navLink1" name="onlinedisk/openfolder/personRoot"><i class="icon-custom-person-nav"></i><span class="collapse-hide"><%=msgPersonFile%></span></li>'
                }
                function n() {
                    return " hide-force "
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                t = t || {};
                var o, d, r = "", c = this, v = "function", u = this.escapeExpression;
                return r += '<div class="user-nav"></div><ul class="nav nav-list custom-nav-list file-left-nav"><li class="left-nav-ent navLink1 active" name="sharedisk/openfolder/entRoot"><i class="icon-custom-ent-nav"></i><span class="collapse-hide"><%=msgEntFile%></span></li>',
                o = i["if"].call(s, s && s.personDisk, {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(1, l, t),
                    data: t
                }),
                (o || 0 === o) && (r += o),
                r += '<li class="left-nav-share navLink1 fileshare" name="disk/file/share"><i class="icon-custom-share-nav"></i><span class="collapse-hide"><%=msgMyShare%></span></li><li class="left-nav-interest navLink1" name="disk/file/interest"><i class="icon-custom-focus-nav"></i><span class="collapse-hide"><%=msgMyFocus%></span></li><li class="left-nav-search navLink1 hide-private" name="disk/file/search"><i class="icon-custom-search-nav"></i><span class="collapse-hide"><%= msgFullTextSearch %></span></li><li class="left-nav-recycle navLink1" name="disk/show/recycle"><i class="icon-custom-recycle-nav"></i><span class="collapse-hide"><%=msg663%></span></li></ul><!--<div class="row-fluid persondisk-stat hide-important"><div class="row-fluid"><strong> 个人空间</strong></div><div class="row-fluid ',
                o = i.unless.call(s, s && s.personDisk, {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(3, n, t),
                    data: t
                }),
                (o || 0 === o) && (r += o),
                r += '"><div class="progress"><div class="bar" style="width: ',
                (d = i.percent) ? o = d.call(s, {
                    hash: {},
                    data: t
                }) : (d = s && s.percent,
                o = typeof d === v ? d.call(s, {
                    hash: {},
                    data: t
                }) : d),
                r += u(o) + '"></div><div> ',
                (d = i.diskUsed) ? o = d.call(s, {
                    hash: {},
                    data: t
                }) : (d = s && s.diskUsed,
                o = typeof d === v ? d.call(s, {
                    hash: {},
                    data: t
                }) : d),
                r += u(o) + "/",
                (d = i.diskSize) ? o = d.call(s, {
                    hash: {},
                    data: t
                }) : (d = s && s.diskSize,
                o = typeof d === v ? d.call(s, {
                    hash: {},
                    data: t
                }) : d),
                r += u(o) + '</div></div></div></div>--><div class="modal fade modal-window baidu-upload"><div class="modal-header"><button class="btn btn-link cs-modal-minus"><i class="fa fa-minus"></i></button><button class="btn btn-link close" data-dismiss="close">×</button><h3><%=msg408%></h3></div><div class="modal-body container-fluid"><div class="row-fluid uploader"><div class="row-fluid webuploader-container" id="uploader"><div class="span2"><div id="filePicker">上传</div></div><div class="span6 file-path text-overflow"></div><div class="span4 upload-stat-info text-overflow text-right">当前没有上传任务</div></div><div class="row-fluid upload-content"><ul class="upload-items position-relative placeholder" id="dndArea"><p class="dnd-tip">将文件拖到这里，单次最多可选200张 <br/>(单个文件最大1GB, 暂不支持拖拽文件夹)</p></ul></div></div></div><div class="modal-footer"><div class="row-fluid select-users"><div class="row-fluid"><label>选择需要通知的同事 </label><i class="fa fa-plus-square fa-2x cursor-pointer"></i></div></div></div></div><div class="modal-minus modal-window fade"><div class="modal-header"><button type="button" class="btn btn-link cs-modal-max"><i class="fa fa-square-o"></i></button><button type="button" class="close">×</button><h3>当前没有上传任务</h3></div></div>'
            }
            ), {
                personDisk: !!model.currentUser.get("diskEnabled"),
                diskHeight: model.currentUser.get("diskEnabled") ? 0 : 26,
                diskSize: constants.convertSize(model.currentUser.get("diskSize")),
                diskUsed: constants.convertSize(model.currentUser.get("diskUsed")),
                percent: model.currentUser.getPersonDiskPercent()
            })),
            this.$userNav = this.$(".user-nav"),
            this.$fileNav = this.$(".file-left-nav"),
            this._userAvatarView = new i({
                model: model.currentUser
            }),
            this.$userNav.html(this._userAvatarView.el),
            this.onChangeHeight(),
            view.uploadView = new a({
                el: this.$(".modal.baidu-upload"),
                $minus: this.$(".modal-minus")
            }),
            this
        },
        onChangeHeight: function() {
            this.$el.height(model.setting.getMainboxHeight())
        },
        onSelectFolder: function(e) {
            router.fileRouter.navigate(e.get("diskType") + "/openfolder/" + e.id, !0)
        },
        _removeActive: function() {
            this.$(".nav-list .navLink1").removeClass("active")
        },
        _onActiveLink: function(e) {
            this._removeActive(),
            this.$(e.currentTarget).addClass("active"),
            router.approuter.navigate($(e.currentTarget).attr("name"), !0)
        },
        activeLink: function(e) {
            this._removeActive(),
            this.$(".nav-list " + e).addClass("active")
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        }
    })
}
);
;define("app/website/file/views/LinkFileTable", function(require, e, i) {
    var t = require("app/website/file/views/LinkFileItem")
      , l = require("app/website/file/models/LinkFileList")
      , s = require("app/website/file/views/FileSearchView")
      , n = require("app/commons/uikit/support/LoadingView")
      , h = require("app/commons/uikit/support/EmptyView")
      , o = require("app/website/file/views/FileThumbItem2")
      , a = require("app/website/file/views/SwitchView");
    i.exports = Backbone.View.extend({
        tagName: "div",
        id: "fileShareView",
        className: "file-main link-file-view",
        linkFileList: void 0,
        collectionBinder: void 0,
        $listView: void 0,
        $fileTable: void 0,
        $checkAll: void 0,
        $delShareBtn: void 0,
        events: {
            "click .file-table-header .check-all": "_onCheckAll",
            "click ul.operate-btn .btn-modify-link ": "_onClickEditShare",
            "click ul.operate-btn .btn-cancel-link": "_onClickDelShare"
        },
        initialize: function() {
            this.linkFileList = this.collection = new l,
            this._addListeners();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, t, l, s) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                s = s || {},
                '<div class="file-view-top"><div class="title inline-block left"><i class="icon-custom-share-nav2"></i> <%=msgMyShare%></div><div class="inline-block right"><div class="search-container inline-block right"></div></div></div><div class="tabbable"><ul class="nav nav-tabs hide-public" style="margin-bottom:0;"><li id="entShare" class="active"><a href="#tab1" data-toggle="tab"><%=msgEntFile%></a></li><li id=\'personShare\'><a href="#tab2" data-toggle="tab"><%=msgPersonFile%></a></li></ul></div><div class="file-view-operate"><div class="operates-container inline-block left"><ul class="operate-btn inline-block"><li class=" btns edit-share-btn"><a class="btn  btn-white-blue btn-modify-link"><i class="icon-custom-share-edit"></i> <%=msg606%></a></li><li class="btns del-share-btn"><a href="###" class="btn  btn-white-blue btn-cancel-link"><i class="icon-custom-share-cancel"></i><%=msg507%></a></li></ul></div><div class="switch-container inline-block right"></div></div><div class="file-table"><ul class="file-table-header show-path"><li class="file-check" name="file-check"><span class=\'checkbox-sprite check-all\'></span></li><li class="pipe"></li><li class="file-name cursor-pointer"><%= msg590 %> <i class="fa fa-sort-asc"></i></li><li class="pipe"></li><li class="file-status"><%= msg345 %></li><li class="pipe"></li><li class="file-size cursor-pointer"><%= msgSize %> <i class="fa fa-sort-asc hide-force"></i></li><li class="pipe"></li><li class="file-time cursor-pointer"><%= msg597 %> <i class="fa fa-sort-asc hide-force"></i></li><li class="pipe"></li><li class="file-path"><%= msgTheDirectory %></li></ul><ul id="shareFileList" style="overflow: auto"></ul></div>'
            }
            ))),
            this.$listView = this.$("#shareFileList"),
            this.$fileTable = this.$("div.file-table"),
            this.$checkAll = this.$(".file-table-header .check-all"),
            this.$delShareBtn = this.$(".del-share-btn"),
            this.searchView && this.searchView.close(),
            this.searchView = new s({
                el: this.$(".search-container"),
                settingObj: {
                    title: msgs.msg540 + msgs.msg661
                },
                collection: this.collection
            }),
            this.switchView = new a,
            this.$(".switch-container").html(this.switchView.el),
            this._switchShow(),
            this.collectionBinder.bind(this.collection, this.$listView),
            this._hideAllBtns(!0),
            this.loadingView = new n({
                el: this.$el,
                parent: this.$fileTable
            }),
            this.emptyView = new h({
                el: this.$fileTable,
                type: "empty-list",
                tips: msgs.msgLinkEmpty
            }),
            this.onResize(),
            this
        },
        _addListeners: function() {
            this.listenTo(this.collection, "change:checked", this._onFileSelect),
            this.listenTo(this.collection, "change:shareLinkId", this._onDelLink),
            this.listenTo(this.collection, EventType.fetched, this._onHideLoading),
            this.listenTo(this.collection, "remove", this._onShowEmpty),
            this.listenTo(model.messageEvent, EventType.clearContextmenus, this.hideContextMenu),
            this.listenTo(model.messageEvent, EventType.onCancelShare, this._onCancelShare)
        },
        _onCancelShare: function(e) {
            var i = this.collection.findWhere({
                fileId: e
            });
            i.set("shareLinkId", null )
        },
        viewCreator: function(e, i) {
            return "list" === cache.showType ? new t({
                model: e,
                collection: i
            }) : new o({
                model: e,
                collection: i,
                source: "LinkFileView"
            })
        },
        _switchShow: function() {
            var e = this;
            this._dealHeaderShow("thumb" === cache.showType),
            this.switchView.on("changeShowType", function() {
                e.collection.reset(e.collection.models),
                e._dealHeaderShow("thumb" === cache.showType)
            }
            ),
            this.switchView.on("toggleCollapse", function(e) {
                view.mainbox.collapseContentLeft(e)
            }
            )
        },
        _dealHeaderShow: function(e) {
            this.$(".file-table-header >li").toggleClass("hide-force", e),
            this.$(".file-table-header >li.file-check").removeClass("hide-force")
        },
        _onDelLink: function(e) {
            this.linkFileList.remove(e)
        },
        onResize: function() {
            this.$el.height(model.setting.getMainboxHeight()),
            this.$listView.height(model.setting.getMainboxHeight() - 72),
            this.emptyView && this.emptyView.changeHeight(model.setting.getFileTableHeight() - 60),
            this.$(".file-table-header").width(view.mainbox.$contentRight.width() - 22)
        },
        _onFileSelect: function() {
            var e = this
              , i = this.linkFileList.getCheckedFiles();
            1 === i.length && i[0].getShareLinkByLinkId(function() {
                var t = constants.getShareUrl(i[0].get("shareLink"), i[0].get("fileType"));
                e.$(".link-url").html(t),
                e.addCopeFlash()
            }
            ),
            this._hideAllBtns(1 !== i.length),
            i.length && this.$delShareBtn.removeClass("hide-force"),
            this._ctrlCheckAllBtn(i)
        },
        _hideAllBtns: function(e) {
            this.$(".operate-btn .btns").toggleClass("hide-force", e)
        },
        addCopeFlash: function() {
            var e = {};
            e.id = "linkViewCopy";
            var i = {};
            i.wmode = "transparent";
            var t = {};
            swfobject.embedSWF("/os/swf/clipboard.swf", "linkViewCopy", "200", "35", "11.1.0", "clipboard.swf", e, i, t)
        },
        _onCheckAll: function() {
            var e = this.$checkAll.hasClass("true");
            this.$checkAll.toggleClass("true"),
            this.collection.each(function(i) {
                i.set({
                    checked: !e,
                    silent: !0
                })
            }
            ),
            this.$listView.find(".entFileItem .checkbox-sprite").toggleClass("true", !e),
            this._onFileSelect()
        },
        _ctrlCheckAllBtn: function(e) {
            var i = !!e.length && e.length === this.collection.length;
            this.$checkAll.toggleClass("true", i)
        },
        _onClickEditShare: function() {
            return router.fileRouter.shareFile(this.collection.getOnlyCheckedFile()),
            !1
        },
        _onClickDelShare: function() {
            var e = this.collection.getCheckedFiles();
            if (e.length < 1)
                return !1;
            if (1 == e.length) {
                var i = e[0];
                router.fileRouter.doDelShare(i)
            } else
                router.fileRouter.doDelShares(e)
        },
        showLoading: function() {
            this.loadingView.show(),
            this.linkFileList.fetch()
        },
        _onHideLoading: function(e) {
            this.loadingView.hide(),
            this._onShowEmpty(e)
        },
        _onShowEmpty: function(e) {
            var i = msgs.msgLinkEmpty;
            e.keyword && (i = msgs.msgSearchEmpty),
            0 !== this.collection.length || this.$listView.hasClass("hide") || (this.$listView.addClass("hide"),
            this.emptyView.show(i)),
            this.collection.length > 0 && this.$listView.hasClass("hide") && (this.$listView.removeClass("hide"),
            this.emptyView.hide()),
            this._onFileSelect()
        },
        hideContextMenu: function() {
            this.$(".file-context-menu").removeClass("open")
        },
        close: function() {
            this.linkFileList && this.linkFileList.reset(),
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/headerview", function(require, e, i) {
    var s = require("app/website/MorePopView");
    i.exports = Backbone.View.extend({
        _modelBinder: void 0,
        morePopView: void 0,
        $msgTipIcon: void 0,
        $morePop: void 0,
        events: {
            "click ul.nav > li.header-nav-message": "hideTipIcon",
            "click ul.nav > li.header-nav-more": "toggleMorePop"
        },
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder,
            this.currentEnt = this.options.currentEnt,
            this.listenTo(model.messageEvent, EventType.fileMsgArrive, this.onFileMsgArrive),
            this.listenTo(model.messageEvent, EventType.fileMsgShow, this.hideTipIcon),
            this.listenTo(model.messageEvent, EventType.uploadCancelAll, this._onUploadCancelAll),
            this.listenTo(model.messageEvent, EventType.uploadStart, this._onUploadStart),
            this.listenTo(model.setting, "change:width", this._onChangeWidth),
            this.render()
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, i, s, t, o) {
                this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                o = o || {};
                var n, a, l = "", d = "function", r = this.escapeExpression;
                return l += '<div class="navbar-inner custom-header"><div class="container-fluid custom-fluid"><a class="brand custom-brand" href="#nav/close"><a href="#index"><img src="/os/assets/img/common/logo.png" class="logo-img"/></a><a class="logo-txt hide-important" href="#index"> ',
                (a = s.entName) ? n = a.call(i, {
                    hash: {},
                    data: o
                }) : (a = i && i.entName,
                n = typeof a === d ? a.call(i, {
                    hash: {},
                    data: o
                }) : a),
                l += r(n) + '</a></a><ul class="nav navbar-text pull-right pull-down custom-pulldown right-deal-nav"><li class="header-nav-contact" id="web-chat-nav"><a href="#user/show" id="usershow-nav" title=\'<%=msg564%>\'><div class="head-icon"><i class="icon-contact"></i></div><div class="head-txt"><%=msg564%></div></a></li><li class="header-nav-message" id="web-message-nav"><a href="#message" id="message-nav" title=\'<%=msgMessageList%>\'><div class="head-icon"><i class="icon-message"></i><i class="icon-custom-red-circle" style="display: none"></i></div><div class="head-txt"><%=msgMessageList%></div></a></li><li class="header-nav-conference hide-private" id="web-conference-nav"><a href="/meeting/index.html" id="conference-nav" title="<%=msg576%>" target="_blank"><div class="head-icon"><i class="icon-conference"></i></div><div class="head-txt"><%=msg576%></div></a></li><li class="header-nav-more" style="position:relative"><a id="more-nav"><div class="head-icon"><i class="icon-custom-more-function"></i></div><div class="head-txt"><%=msgMore%></div></a><div class="more"></div></li><li class="hide admin-mgr header-nav-admin-mgr" name="admin-mgr"><span class="inline-block fl" style="width:1px; height:60px; background-color: #fff;margin: 12px 15px 12px 0;"></span><a href="admin.html?dev" title="<%=msg402%>" target="_blank" id="adminMgr"><div class="head-icon"><i class="icon-backend"></i></div><div class="head-txt"><%=msg402%></div></a></li></ul></div></div>'
            }
            ), {
                entName: model.currentEnterprise.get("entName")
            })),
            this.$logo = this.$(".logo-img"),
            this.$logoTxt = this.$(".logo-txt"),
            this._onGetLogo(),
            this.$msgTipIcon = this.$("#message-nav .icon-custom-red-circle"),
            this.$morePop = this.$(".header-nav-more .more"),
            this.$msgTipIcon.hide();
            var e = {
                userType: [{
                    selector: "[name=admin-mgr]",
                    elAttribute: "class",
                    converter: this.showAdmin
                }, {
                    selector: "#adminMgr",
                    elAttribute: "href",
                    converter: this.addHref
                }]
            };
            return this._modelBinder.bind(this.model, this.el, e),
            this._onChangeWidth(),
            this
        },
        _onChangeWidth: function() {
            var e = model.setting.getMainboxWidth() - 260;
            e = e > 737 ? e : 737,
            e = e > 837 ? 837 : e,
            e -= this.$(".right-deal-nav").width(),
            this.$(".system-message-box .system-message-text").width(e),
            this.$(".system-message").css("max-width", e + 16 + "px")
        },
        _onUploadStart: function() {
            this.$("#upload-nav > i").removeClass("icon-cloud-updown"),
            this.$("#upload-nav > i").hasClass("icon-cloud-updowning") || this.$("#upload-nav > i").addClass("icon-cloud-updowning")
        },
        _onUploadSuccess: function() {
            this.$("#upload-nav > i").removeClass("icon-cloud-updowning").addClass("icon-cloud-updown"),
            this.$("#upload-nav > i").hasClass("icon-cloud-updown") || this.$("#upload-nav > i").addClass("icon-cloud-updown")
        },
        toggleMorePop: function() {
            var e = this;
            this.$morePop.toggleClass("active", !this.$morePop.hasClass("active")),
            this.morePopView || (this.morePopView = new s,
            this.$morePop.html(this.morePopView.el),
            $("#mainbox").click(function() {
                e.$morePop.removeClass("active")
            }
            ),
            this.$morePop.parent().siblings().click(function() {
                e.$morePop.removeClass("active")
            }
            ),
            $(".more-pop .popover-content").click(function(i) {
                i.stopPropagation(),
                e.$morePop.removeClass("active")
            }
            ))
        },
        _onUploadCancelAll: function() {
            cache.entFileUploading = !1,
            cache.persionFileUploading = !1,
            this.$("#upload-nav > i").removeClass("icon-cloud-updowning").addClass("icon-cloud-updown")
        },
        getUserName: function() {
            return function(e, i, s, t) {
                return "ModelToView" === e ? t.getDisplayName() : void 0
            }
        },
        _onGetLogo: function() {
            return model.currentEnterprise.get("txtLogo") ? (this.$logoTxt.removeClass("hide-important"),
            void this.$logo.addClass("hide-important")) : (model.currentEnterprise.get("logo") && this.$logo.attr("src", "res/" + model.currentEnterprise.get("logo")),
            this.$logoTxt.addClass("hide-important"),
            void this.$logo.removeClass("hide-important"))
        },
        onFileMsgArrive: function() {
            this.$msgTipIcon.show()
        },
        hideTipIcon: function() {
            this.$msgTipIcon.hide()
        },
        switchNav: function() {
            this.$("#usershow-nav").attr("href", view.slideRight && "userLayout" === view.slideRight.id ? "#slide/close" : "#user/show"),
            this.$("#message-nav").attr("href", view.slideRight && "messageView" === view.slideRight.id ? "#slide/close" : "#message"),
            this.$("#upload-nav").attr("href", view.slideRight && "uploadDownloadView" === view.slideRight.id ? "#slide/close" : "#disk/show/upload"),
            this.$("#telephone-nav").attr("href", view.slideRight && "telephoneView" === view.slideRight.id ? "#slide/close" : "#phone")
        },
        showAdmin: function(e, i, s, t) {
            return t.isAdmin() || t.isSecAdmin() ? "show-important" : ""
        },
        addHref: function(e, i, s, t) {
            return t.isAdmin() || t.isSecAdmin() ? constants.getAdminUrl() : "###"
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/message/handler/ChatMsgHandler", function(require, e, a) {
    a.exports = {
        id: "ChatMsgHandler",
        canHandle: function(e) {
            return MessageType.isChatMsgType(e.get("msgType")) || MessageType.isChatFileMsgType(e.get("msgType"))
        },
        handle: function(e) {
            var a = cache.chatMsgListMap[e.getChatKey()];
            a || (a = new MessageListDTO,
            cache.chatMsgListMap[e.getChatKey()] = a),
            a.add(e),
            model.messageEvent.trigger(EventType.receiveChatMsg, e)
        }
    }
}
);
;define("app/website/message/handler/FileMsgHandler", function(require, e, n) {
    function s(e) {
        var n = e.get("fileMessage");
        if (constants.operation.NewFile === n.operation) {
            var s = n.msgList[0];
            view.mainbox && (view.mainbox.isShowEntDisk() && view.fileTable.currentFolder.id === s.parentId && router.shareDiskRouter.onOpenEntFolder(s.parentId),
            view.mainbox.isShowPersonDisk() && view.personFileTable.currentFolder.id === s.parentId && router.onlineDiskRouter.onOpenPersonFolder(s.parentId))
        } else
            constants.operation.Delete === n.operation && model.messageEvent.trigger(EventType.removeFile, new EntFileDTO({
                fileId: n.fileId
            }))
    }
    function i(e) {
        var n = e.get("fileMessage");
        return n.operation === constants.operation.Lock ? (collection.entFileList.trigger(EventType.lockShareFile, n),
        !0) : void model.messageEvent.trigger(EventType.fileMsgArrive, e)
    }
    n.exports = {
        id: "FileMsgHandler",
        canHandle: function(e) {
            return MessageType.isFileMsgType(e.get("msgType"))
        },
        handle: function(e) {
            switch (e.get("msgType")) {
            case MessageType.ShareFileNew:
                e.get("senderId") === cache.userId ? s(e) : i(e);
            case MessageType.FileConvertDone:
            case MessageType.FileUploadDone:
            case MessageType.FileDown:
            case MessageType.FileAccessRecord:
                model.messageEvent.trigger(e.get("msgType"), e)
            }
        }
    }
}
);
;define("app/website/message/models/SysMsgModels", function(require, e) {
    e.SysMsgDTO = Backbone.Model.extend({
        urlRoot: "",
        defaults: {
            msgId: void 0,
            msgType: void 0,
            msgTitle: void 0,
            sendTime: void 0,
            msgStatus: void 0,
            msgLink: void 0
        },
        initialize: function() {
            this.get("sendTime") && this.set("sendTime", constants.dateStrFromMisc(this.get("sendTime")))
        },
        hasRead: function() {
            return "Read" === this.get("msgStatus")
        },
        confirm: function(e) {
            var s = this;
            "New" === this.get("msgStatus") && resturl.confirmMsg({
                msgType: MessageType.SysMsg,
                msgId: this.get("msgId")
            }, function(t) {
                constants.isResOK(t) && (s.set("msgStatus", "Read"),
                e && e())
            }
            )
        }
    }),
    e.SysMsgPageList = Backbone.Paginator.requestPager.extend({
        model: e.SysMsgDTO,
        paginator_core: {
            url: resturl.flexService + "/sc/msg/getSysMsgHistory",
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
            entId: void 0,
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
            this.trigger(EventType.pagerEnd),
            e.msgs
        }
    }),
    e.SysMsgList = Backbone.Collection.extend({
        model: e.SysMsgDTO,
        comparator: function(e, s) {
            var t = e.get("sendTime")
              , i = s.get("sendTime");
            return t > i ? -1 : i > t ? 1 : 0
        }
    })
}
);
;define("app/website/message/handler/NoticeMsgHandler", function(require, e, s) {
    function a(e) {
        log.info(t, "[_handleSyncLoginMsg] receive: ");
        var s = e.get("msgBody");
        if (/src="(\S+)"/.test(s)) {
            var a = RegExp.$1;
            a && webhelper.loadJs("bbsscript", a)
        }
    }
    var t = "[NoticeMsgHandler]-"
      , r = require("app/website/message/models/SysMsgModels").SysMsgDTO;
    s.exports = {
        id: "NoticeMsgHandler",
        canHandle: function(e) {
            return MessageType.isNoticeMsgType(e.get("msgType"))
        },
        handle: function(e) {
            switch (e.get("msgType")) {
            case MessageType.UserJoin:
            case MessageType.UserStatusChange:
                var s = collection.userList.get(e.get("senderId"));
                if (s && s.get("onlineStatus") == e.get("msgBody"))
                    break;
            case MessageType.UserLeave:
            case MessageType.UserInfoUpdate:
            case MessageType.ColleagueNew:
            case MessageType.ForceOffline:
                model.messageEvent.trigger(e.get("msgType"), e);
                break;
            case MessageType.PersonalDiskDisabled:
                model.currentUser && model.currentUser.set("diskEnabled", !1);
                break;
            case MessageType.SysMsg:
                var t = JSON.parse(e.get("msgBody"))
                  , o = new r(t);
                collection.sysMsgList.add(o),
                model.messageEvent.trigger(EventType.receiveSysNotice, o);
                break;
            case MessageType.SynLogin:
                a(e);
                break;
            case MessageType.NewSyncFolder:
                e.confirmSelf();
                var g = JSON.parse(e.get("msgBody"))
                  , n = seajs.isPrivate ? "http://" + location.host + "/client/oatos_client_private.exe" : "http://dl.oatos.com/client/oatos_client.zip";
                noty.alert(_.template("<%=createrName%>邀请您同步'<%=folderName%>'文件夹，请下载windows客户端(<%=desktopDownloadUrl%>)与同事一起协作吧!", {
                    createrName: g.createrName,
                    folderName: g.folderName,
                    desktopDownloadUrl: n
                }))
            }
        }
    }
}
);
;define("app/website/message/handler/PhoneMsgHandler", function(require, e, n) {
    n.exports = {
        id: "PhoneMsgHandler",
        canHandle: function(e) {
            return e.get("msgType") === MessageType.phone || e.get("msgType") === MessageType.PhoneMeeting
        },
        handle: function(e) {
            switch (e.get("msgType")) {
            case MessageType.phone:
                model.messageEvent.trigger(EventType.phoneMsg, e);
                break;
            case MessageType.PhoneMeeting:
                model.messageEvent.trigger(EventType.PhoneMeeting, e)
            }
        }
    }
}
);
;define("app/website/message/handler/MsgListener", function(require) {
    var e = "[MsgListener]-"
      , t = require("socket-io-client")
      , n = require("app/commons/models/message/MessageDTO")
      , s = require("app/website/message/handler/ChatMsgHandler")
      , o = require("app/website/message/handler/FileMsgHandler")
      , i = require("app/website/message/handler/NoticeMsgHandler")
      , c = require("app/website/message/handler/PhoneMsgHandler")
      , r = require("app/website/message/models/SysMsgModels").SysMsgList
      , a = [s, o, i, c];
    return {
        lostConnectCount: 0,
        forceClose: !1,
        socket: void 0,
        reconnTimer: void 0,
        socketioUrl: location.protocol + "//" + location.host,
        init: function() {
            log.info(e, " invoke init()... "),
            collection.sysMsgList = new r;
            var t = this.createSocket();
            this.socket = t,
            this.socket.on("connect", function() {
                log.info(_.sprintf("[amq] socket connect ok! -> entId: %s, UT: %s, clientId:%s ", cache.entId, cache.token, cache.clientId)),
                model.messageEvent.trigger(EventType.AmqConnect)
            }
            ),
            this.socket.on("message", this.handleMessage),
            this.socket.on("disconnect", function() {
                log.warn(e, "socket close ok!")
            }
            ),
            this.socket.on("error", function(t, n) {
                log.error(e, "error: ", t, ", result: ", n)
            }
            )
        },
        reconnect: function() {
            var e = this;
            this.reconnTimer && clearInterval(this.reconnTimer) && delete this.reconnTimer,
            this.reconnTimer = setInterval(function() {
                e.createSocket()
            }
            , 6e4)
        },
        close: function() {
            log.info(e, "try to close socket!"),
            this.forceClose = !0;
            try {
                this.socket && this.socket.disconnect(),
                delete this.socket
            } catch (t) {
                log.info(e, " close socket error: ", t)
            }
        },
        sendMessage: function(e) {
            return this.socket && this.socket.socket.connected ? (!e.sendTime && (e.sendTime = (new Date).valueOf()),
            this.socket.emit("message", JSON.stringify({
                type: "message",
                content: JSON.stringify(e)
            })),
            !0) : !1
        },
        sendMessages: function(e) {
            return this.socket && this.socket.socket.connected ? (_.each(e, function(e) {
                !e.sendTime && (e.sendTime = (new Date).valueOf())
            }
            ),
            this.socket.emit("message", JSON.stringify({
                type: "messages",
                content: JSON.stringify(e)
            })),
            !0) : void 0
        },
        showDisconnTip: function() {
            noty.alert("服务器连接断开! 请重新登陆!", function() {
                router.approuter.navigate("loginout", !0)
            }
            )
        },
        createSocket: function() {
            return t.connect(this.socketioUrl + "?" + $.param({
                ei: cache.entId,
                UT: cache.token,
                ui: cache.userId,
                ci: cache.clientId
            }), {
                reconnect: !0,
                "force new connection": !0,
                "reconnection delay": 3e4,
                "reconnection limit": 20
            })
        },
        addListener: function(e, t) {
            this.socket.emit("listen", {
                topic: t,
                type: "listen"
            })
        },
        removeDefaultListeners: function() {
            this.socket.send(JSON.stringify({
                type: "unlisten"
            }))
        },
        handleMessage: function(t, s) {
            log.info(e, s ? s : "socket.io", " receive [message] ", t);
            var o = new n(t);
            o.set("msgStatus", "New");
            var i = !1;
            _.each(a, function(n) {
                n.canHandle(o) && (log.info(e, n.id, " handle [message]: ", t),
                i = !0,
                n.handle(o))
            }
            ),
            !i && log.warn(e, "MSG NOT Handle! [message] ", t)
        }
    }
}
);
;define("app/website/user/models/UsualContactListDTO", function(require, e, t) {
    require("app/commons/models/user/UserDTO"),
    t.exports = window.UsualContactListDTO = Backbone.Collection.extend({
        model: UserDTO,
        localStorage: new Backbone.LocalStorage("usualContactListStorage"),
        url: "",
        comparator: function(e) {
            return e.get("onlineStatus") == constants.UserStatus.Online ? 0 : e.get("onlineStatus") == constants.UserStatus.Busy ? 1 : 2
        },
        initialize: function() {
            this.listenTo(model.messageEvent, MessageType.UserJoin, this.onUserJoin),
            this.listenTo(model.messageEvent, MessageType.UserLeave, this.onUserLeave),
            this.listenTo(model.messageEvent, MessageType.UserStatusChange, this.onUserStatusChange),
            this.listenTo(model.messageEvent, MessageType.UserInfoUpdate, this.onUserInfoUpdate)
        },
        fetch: function() {
            var e = this;
            return resturl.getContactGroupAndUser({
                entId: cache.entId,
                userId: cache.userId
            }, function(t) {
                e.add(_.map(t.contactList, function(e) {
                    return new UserDTO(e.userDTO)
                }
                )),
                log.info("[ajax] usualContact load -> OK")
            }
            )
        },
        deleteUsualContacts: function(e, t) {
            resturl.deleteUsualContacts({
                entId: cache.entId,
                userId: cache.userId,
                contactUserIds: e
            }, t)
        },
        onUserJoin: function(e) {
            var t = this.get(e.get("senderId"));
            t && t.set({
                onlineStatus: constants.UserStatus.Online,
                agent: e.get("msgBody")
            }) && this.reset(this.sort().models)
        },
        onUserLeave: function(e) {
            var t = this.get(e.get("senderId"));
            t && t.set({
                onlineStatus: constants.UserStatus.Leave
            }) && this.reset(this.sort().models)
        },
        onUserStatusChange: function(e) {
            var t = this.get(e.get("senderId"));
            t && t.set({
                onlineStatus: e.get("msgBody")
            }) && this.reset(this.sort().models)
        },
        onUserInfoUpdate: function(e) {
            var t = this.get(e.get("senderId"));
            if (t) {
                var s = JSON.parse(e.get("msgBody"));
                t.set(s)
            }
        },
        addUsualContacts: function(e, t) {
            resturl.addUsualContacts({
                entId: cache.entId,
                userId: cache.userId,
                contactUserIds: e
            }, t)
        }
    })
}
);
;define("app/website/user/views/UserInfoCardView", function(require, e, s) {
    s.exports = Backbone.View.extend({
        tagName: "div",
        className: "name-card",
        _modelBinder: void 0,
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder,
            this.render()
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, s, n, a, t) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                n = this.merge(n, e.helpers),
                t = t || {},
                '<div class="row-fluid show-grid"><div class="span5"><img class="avatar" src=""/></div><div class="span7"><div class="card-user-name"></div><p name="onlineStatus"></p><p><%=msg1123%>:&nbsp;<span name="deptName"></span></p><p><%=msg1124%>:&nbsp;<span class="jobTitle"></span></p><p><%=msg1129%>:&nbsp;<span class="phone"></span></p></div></div><p><%=msg1046%>:&nbsp;<span class="mobile"></span></p><p><%=msg383%>:&nbsp;<span class="mail"></span></p><div class="row-fluid show-grid"><span><%=msg1022%>: </span><span name="signature" class="signature"></span></div>'
            }
            )));
            var e = {
                nameAccount: {
                    selector: "[class=card-user-name]"
                },
                icon: {
                    selector: "[class=avatar]",
                    elAttribute: "src",
                    converter: this.getAvatar
                },
                deptName: "[name=deptName]",
                jobTitle: "[class=jobTitle]",
                phone: "[class=phone]",
                mobile: "[class=mobile]",
                mail: "[class=mail]",
                signature: "[name=signature]",
                onlineStatus: [{
                    selector: "[name=onlineStatus]",
                    elAttribute: "class",
                    converter: this.getOnline
                }, {
                    selector: "[name=onlineStatus]",
                    converter: this.getOnlineValue
                }]
            };
            return this._modelBinder.bind(this.model, this.el, e),
            this
        },
        getAvatar: function(e, s) {
            return s || constants.defaultIcon
        },
        getOnline: function(e, s) {
            return s + ""
        },
        getUserName: function() {
            return function(e, s, n, a) {
                return "ModelToView" === e ? a.getDisplayName() : void 0
            }
        },
        getOnlineValue: function(e, s) {
            var n;
            switch (s) {
            case "online":
                n = msgs.msg1019;
                break;
            case "busy":
                n = msgs.msg1020;
                break;
            case "leave":
            case "corbet":
            default:
                n = msgs.msgOffline
            }
            return n
        },
        close: function() {
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/user/views/SearchDepartmentUsersItem", function(require, e, t) {
    var s = require("app/website/user/views/UserInfoCardView");
    t.exports = Backbone.View.extend({
        tagName: "li",
        _modelBinder: void 0,
        userInfoCardView: void 0,
        events: {
            "click .opt i.icon-custom-contact-remove": "removeContact",
            "click .opt i.icon-custom-contact-add": "addContact",
            "click .show-grid .span2,.show-grid .span8": "chatWithUser"
        },
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, t, s, n, a) {
                this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                a = a || {};
                var o, r, i = "", c = "function", l = this.escapeExpression;
                return i += '<div class="row-fluid show-grid"><div class="contact-del hide"><input type="checkbox" name="usual_contact_id" value="',
                (r = s.userId) ? o = r.call(t, {
                    hash: {},
                    data: a
                }) : (r = t && t.userId,
                o = typeof r === c ? r.call(t, {
                    hash: {},
                    data: a
                }) : r),
                i += l(o) + '"/></div><div class="span2 chat-span"><div name="onlineStatus"><img class="avatar" src="" alt="avatar"></div></div><div class="span8 chat-span"><div class="userName"></div></div><div class="span1"><div class="opt"><span class="usual-contact-btn"><i class="icon-custom-contact" name="usualBtn" title=""></i></span></div></div></div><hr>'
            }
            ), this.model.toJSON()));
            var e = {
                userId: {
                    selector: "[class=span1]",
                    elAttribute: "class",
                    converter: this.convertHideClass
                },
                nameAccount: {
                    selector: "[class=userName]"
                },
                icon: {
                    selector: "[class=avatar]",
                    elAttribute: "src",
                    converter: this.getAvatar
                },
                onlineStatus: {
                    selector: "[name=onlineStatus]",
                    elAttribute: "class",
                    converter: this.getOnline
                },
                usualContact: [{
                    selector: "[name=usualBtn]",
                    elAttribute: "class",
                    converter: this.getUsualClass
                }, {
                    selector: "[name=usualBtn]",
                    elAttribute: "title",
                    converter: this.getUsualTitle
                }]
            };
            return this._modelBinder.bind(this.model, this.el, e),
            this.bindUserInfoCard(),
            this
        },
        getUserId: function(e, t) {
            return t + ""
        },
        getAvatar: function(e, t) {
            return t || constants.defaultIcon
        },
        getOnline: function(e, t) {
            return "ModelToView" === e ? t : void 0
        },
        getUsualClass: function(e, t) {
            return t ? "icon-custom-contact-remove" : "icon-custom-contact-add"
        },
        getUsualTitle: function(e, t) {
            var s = "常用联系人";
            return s = t ? "删除" + s : "添加" + s
        },
        bindUserInfoCard: function() {
            this.userInfoCardView = new s({
                model: this.model
            }),
            this.$el.popover({
                trigger: "hover",
                placement: "left",
                html: !0,
                content: this.userInfoCardView.el
            })
        },
        rebind: function() {},
        removeContact: function() {
            var e = this;
            return model.currentUser.deleteUsualContact(e.model.get("userId"), function(t) {
                constants.isResponseOK(t) ? (collection.usualContactList.remove(e.model),
                e.model.set("usualContact", !1),
                noty.success((e.model.get("realName") || e.model.get("userName")) + msgs.msgDelUsualSucess)) : noty.error(msgs.msgServerError)
            }
            ),
            !1
        },
        addContact: function() {
            var e = this;
            return model.currentUser.setUsualContact(e.model.get("userId"), function(t) {
                constants.isResponseOK(t) ? (e.model.set("usualContact", !0),
                collection.usualContactList.add(e.model),
                noty.success((e.model.get("realName") || e.model.get("userName")) + msgs.msgAddUsualSucess)) : noty.error(msgs.msgServerError)
            }
            ),
            !1
        },
        chatWithUser: function() {
            return this.model.get("userId") == cache.userId ? !1 : void router.approuter.navigate("chat/" + this.model.get("userId"), !0)
        },
        convertHideClass: function(e, t) {
            return t == cache.userId ? "hide" : ""
        },
        close: function() {
            this._modelBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/user/views/SearchDepartmentUsers", function(require, e, t) {
    var i = require("app/website/user/views/SearchDepartmentUsersItem");
    t.exports = Backbone.View.extend({
        tagName: "ul",
        id: "search-department-users",
        className: "overflow-auto-y",
        collectionBinder: void 0,
        events: {
            "mouseover .department-user-list > li": "hoverBgChange",
            "mouseout .department-user-list > li": "hoverBgRemove"
        },
        initialize: function() {
            this._addListeners();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, i, n, r) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                r = r || {},
                "<ul class='department-user-list'><li class=\"empty-table-tip hide-force\"><%=msgTableEmpty%></li></ul>"
            }
            ))),
            this.$emptyTip = this.$(".empty-table-tip"),
            this.collectionBinder.bind(this.collection, this.$(".department-user-list")),
            this.onChangeHeight(),
            this._onLengthChange(),
            this
        },
        _addListeners: function() {
            this.listenTo(this.collection, "reset add remove", this._onLengthChange)
        },
        _onLengthChange: function() {
            this.$emptyTip.toggleClass("hide-force", this.collection.length > 0)
        },
        onChangeHeight: function() {
            this.$el.height(model.setting.geDepartmentTreeHeight())
        },
        viewCreator: function(e) {
            return new i({
                model: e
            })
        },
        rebind: function() {
            this.delegateEvents(),
            this.collectionBinder.unbind(),
            this.collectionBinder.bind(collection.resultUserList, this.$(".department-user-list"))
        },
        doSearch: function(e) {
            var t = this;
            this.collection.reset(collection.userList.filter(function(i) {
                return t.compareData(i, e)
            }
            ))
        },
        compareData: function(e, t) {
            return !t || e.get("nameAccount").match(t) && e.get("userId") != cache.userId ? !0 : !1
        },
        hoverBgChange: function(e) {
            e.stopPropagation(),
            $(e.currentTarget).addClass("user-hover")
        },
        hoverBgRemove: function(e) {
            e.stopPropagation(),
            $(e.currentTarget).removeClass("user-hover")
        },
        close: function() {
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/user/views/UsualContactTreeView", function(require, e, t) {
    var s = require("app/website/user/views/UserInfoCardView");
    t.exports = Backbone.View.extend({
        tagName: "ul",
        id: "usualContactTree",
        className: "overflow-auto-y",
        collectionBinder: void 0,
        initialize: function() {
            this._addListeners();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, s, i, n) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                n = n || {},
                '<div class="usual-contact-list"><ul class=\'userList\'><li class="empty-table-tip hide-force"><%=msgTableEmpty%></li></ul></div>'
            }
            ))),
            this.$emptyTip = this.$(".empty-table-tip"),
            this.onChangeHeight(),
            this.setUsualContactDept(),
            this.collectionBinder.bind(this.collection, this.$(".userList")),
            this._onLengthChange(),
            this
        },
        setUsualContactDept: function() {
            this.collection.each(function(e) {
                var t = collection.userList.get(e.id);
                t && e.set("deptName", t.get("deptName"))
            }
            )
        },
        _onLengthChange: function() {
            this.$emptyTip.toggleClass("hide-force", this.collection.length > 0)
        },
        onChangeHeight: function() {
            this.$el.height(model.setting.getUsualContactTreeHeight())
        },
        viewCreator: function(e) {
            return new i({
                model: e
            })
        },
        close: function() {
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        },
        rebind: function() {
            this._addListeners(),
            this.delegateEvents(),
            this.rebindDataSource("normal")
        },
        getCheckUserIds: function() {
            var e = [];
            return this.$("[name='usual_contact_id']:checked").each(function() {
                e.push(parseInt($(this).val()))
            }
            ),
            e
        },
        removeUsualContacts: function(e) {
            var t = this.getCheckUserIds();
            return 0 === t.length ? (noty.alert(msgs.msgDelUsualNoUser),
            !1) : void collection.usualContactList.deleteUsualContacts(t, function(s) {
                if (constants.isResponseOK(s)) {
                    noty.success(msgs.msgDelUsualSucess);
                    var i = collection.usualContactList.filter(function(e) {
                        return _.contains(t, e.get("userId"))
                    }
                    );
                    collection.usualContactList.remove(i),
                    collection.userList.trigger(EventType.removeUsualContact, t),
                    e && e()
                } else
                    noty.alert(msgs.msgDelUsualFail)
            }
            )
        },
        _addListeners: function() {
            this.listenTo(this.collection, "reset add remove", this._onLengthChange)
        },
        doSearch: function(e) {
            var t = this;
            collection.resultUsualContactList = new UsualContactListDTO,
            collection.resultUsualContactList.reset(collection.usualContactList.filter(function(s) {
                return t.compareData(s, e)
            }
            )),
            this.rebindDataSource("search")
        },
        compareData: function(e, t) {
            return !t || e.get("nameAccount").match(t) && e.get("userId") != cache.userId ? !0 : !1
        },
        rebindDataSource: function(e) {
            "search" == e ? (this.viewMode = "search",
            this.collectionBinder.unbind(),
            this.collectionBinder.bind(collection.resultUsualContactList, this.$(".userList")),
            this.$emptyTip.toggleClass("hide-force", collection.resultUsualContactList.length > 0)) : (this.viewMode = "normal",
            this.collectionBinder.unbind(),
            this.collectionBinder.bind(collection.usualContactList, this.$(".userList")),
            view.userLayout.$(".user-search .input-medium").val(""),
            this.$emptyTip.toggleClass("hide-force", collection.usualContactList.length > 0))
        }
    });
    var i = Backbone.View.extend({
        tagName: "li",
        _modelBinder: void 0,
        userInfoCardView: void 0,
        chatWindowView: void 0,
        chatWindowsView: void 0,
        events: {
            "click div.chat-span": "showChat",
            "mouseenter div.row-fluid": "showDel",
            "mouseleave div.row-fluid": "removeDel",
            "mouseover ": "showUserInfo",
            "click .btn-link:first": "removeUsualContact",
            "click #phoneCall": "onPhoneCall"
        },
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, t, s, i, n) {
                this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                n = n || {};
                var o, a, l = "", c = "function", r = this.escapeExpression;
                return l += '<div class="row-fluid show-grid" style="position:relative"><div class="contact-del hide"><input type="checkbox" name="usual_contact_id" value="',
                (a = s.userId) ? o = a.call(t, {
                    hash: {},
                    data: n
                }) : (a = t && t.userId,
                o = typeof a === c ? a.call(t, {
                    hash: {},
                    data: n
                }) : a),
                l += r(o) + '"/></div><div class="span2 chat-span"><div name="onlineStatus"><img class="avatar" src="" alt="avatar"></div></div><div class="span8 chat-span"><div><label class="userName"></label></div><div class="depart-info"><label><%=msg1123%>: <span class="departmentName"></span></label><label><%=msg1124%>: <span class="jobTitle"></span></label></div></div><div class="span1 hide"><a class="btn-link" href="###" title=\'<%=msg782%>\'><i class="icon-custom-contact" name="usualBtn" title="<%=msg1168%>"></i></a></div></div><hr>'
            }
            ), this.model.toJSON()));
            var e = {
                nameAccount: {
                    selector: "[class=userName]"
                },
                userId: {
                    selector: "[name=usual_contact_id]",
                    elAttribute: "value",
                    converter: this.getUserId
                },
                icon: {
                    selector: "[class=avatar]",
                    elAttribute: "src",
                    converter: this.getAvatar
                },
                jobTitle: "[class=jobTitle]",
                deptName: "[class=departmentName]",
                onlineStatus: {
                    selector: "[name=onlineStatus]",
                    elAttribute: "class",
                    converter: this.getOnline
                }
            };
            this._modelBinder.bind(this.model, this.el, e);
            var t = this;
            return this.$(".show-grid").popover({
                placement: "left",
                html: !0,
                delay: {
                    show: 2e3,
                    hide: 0
                },
                content: function() {
                    return t.userInfoCardView = t.userInfoCardView || new s({
                        model: t.model
                    }),
                    t.userInfoCardView.el
                }
            }),
            this
        },
        showUserInfo: function() {
            this.$(".popover").length || this.$(".show-grid").popover("show"),
            this.$(".popover").hide()
        },
        showChat: function() {
            router.approuter.chatToUser(this.model.id)
        },
        close: function() {
            this._modelBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        },
        rebind: function() {
            this._modelBinder.bind(this.model, this.el, bindings),
            this.delegateEvents()
        },
        onPhoneCall: function() {
            var e = "http://open.fjii.com:8088/httpIntf/dealIntf?postData=<Request><Head><MethodName>Talks</MethodName><Spid>sipipc</Spid><Appid>33</Appid><Passwd>ed0822972d4099f6936d2a84b79d11d75b375ed9</Passwd><Timestamp>20120309145001</Timestamp><Authenticator>xxxxxx</Authenticator></Head><Body><DisplayNbr>8659522943331</DisplayNbr><KEY>13024151</KEY><CalledNbr>@num1,@num2</CalledNbr></Body></Request>"
              , t = model.currentUser.get("mobile")
              , s = this.model.get("mobile");
            e = e.replace("@num1", t),
            e = e.replace("@num2", s),
            $.get(e, function() {}
            )
        },
        removeUsualContact: function() {
            var e = this;
            model.currentUser.deleteUsualContact(this.model.get("userId"), function(t) {
                constants.isResponseOK(t) ? (e.$el.popover("hide"),
                noty.success(e.model.getDisplayName() + msgs.msgDelUsualSucess),
                collection.resultUsualContactList && collection.resultUsualContactList.remove(e.model),
                collection.usualContactList.remove(e.model),
                collection.userList.trigger(EventType.removeUsualContact, e.model.get("userId"))) : noty.error(msgs.msgServerError)
            }
            )
        },
        getUserId: function(e, t) {
            return t + ""
        },
        getAvatar: function(e, t) {
            return t || constants.defaultIcon
        },
        getOnline: function(e, t) {
            return "ModelToView" === e ? "corbet" === t ? "offline" : t : void 0
        },
        showDel: function() {
            this.$(".contact-del").hasClass("hide") && (this.$(".span1").removeClass("hide"),
            this.$(".row-fluid").addClass("back-color"))
        },
        removeDel: function() {
            this.$(".contact-del").hasClass("hide") && (this.$(".span1").addClass("hide"),
            this.$(".row-fluid").removeClass("back-color"))
        }
    })
}
);
;define("app/website/user/views/UsualContactBtnView", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "span",
        className: "usual-contact-btn",
        _modelBinder: void 0,
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder,
            this.render()
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, t, n, s, i) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                n = this.merge(n, e.helpers),
                i = i || {},
                "<!--<a href='###' name=\"usualBtn\" class='btn btn-link' title=''></a>--><i name=\"usualBtn\" class=\"icon-custom-contact\"></i>"
            }
            )));
            var e = {
                usualContact: [{
                    selector: "[name=usualBtn]",
                    elAttribute: "class",
                    converter: constants.setUsualContactClass
                }, {
                    selector: "[name=usualBtn]",
                    elAttribute: "title",
                    converter: constants.setUsualContactTitle
                }]
            };
            return this._modelBinder.bind(this.model, this.el, e),
            this
        },
        close: function() {
            this._modelBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/user/views/DepartmentTreeView", function(require, e, t) {
    var n = require("app/website/user/views/UsualContactBtnView")
      , a = require("app/website/user/views/UserInfoCardView");
    t.exports = Backbone.View.extend({
        tagName: "ul",
        id: "departmentTreeView",
        className: "departmentTreeView ztree user-tree overflow-auto",
        zTree: void 0,
        departmentList: void 0,
        userList: void 0,
        addUsualCallback: void 0,
        delUsualCallback: void 0,
        events: {
            "mouseover a.user": "hoverBgChange",
            "mouseout a.user": "hoverBgRemove"
        },
        initialize: function() {
            this.departmentList = this.options.departmentList,
            this.userList = this.options.userList,
            this.listenTo(this.departmentList, EventType.loadDepartment, this.addDepartmentNodes),
            this.listenTo(this.userList, "change:onlineStatus", this.changeUserOnlineStatus),
            this.listenTo(this.userList, EventType.addUsualContact, this.onAddContact),
            this.listenTo(this.userList, EventType.removeUsualContact, this.onRemoveContact),
            this.render()
        },
        render: function() {
            this.$el.html(""),
            this.onChangeHeight();
            var e = this;
            this.zTree = $.fn.zTree.init(this.$el, {
                view: {
                    dblClickExpand: !1,
                    showLine: !1,
                    selectedMulti: !1,
                    addDiyDom: function(t, n) {
                        e.showAddContact(n, e),
                        e.showAvatar(n, e),
                        e.showUserInfo(n, e),
                        e.showOnlineNum(n, e)
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
                    beforeExpand: function(t, n) {
                        n && "department" === n.type && e._expandDept(n.id)
                    },
                    beforeClick: function(t, n) {
                        return e.zTree.expandNode(n, !0, !1, !0, !0),
                        !0
                    },
                    onNodeCreated: function(t, n, a) {
                        var s = "#" + a.tId + "_a";
                        e.$(s).addClass(a.type)
                    }
                }
            }, []),
            setTimeout(function() {
                e.start = (new Date).valueOf(),
                e.departmentList.length && e.addDepartmentNodes(e.departmentList)
            }
            , 500)
        },
        rebind: function() {
            this.initialize(),
            this.delegateEvents()
        },
        showAddContact: function(e, t) {
            if ("user" === e.type && e.id !== model.currentUser.get("userId")) {
                var a = this.userList.get(e.id)
                  , s = t.$("#" + e.tId + "_a")
                  , i = new n({
                    model: a
                });
                s.append(i.el),
                s.find("i.icon-custom-contact").bind("click", function(e) {
                    $(e.currentTarget).hasClass("icon-custom-contact-add") ? t.addUsualCallback && t.addUsualCallback(a) : t.delUsualCallback && t.delUsualCallback(a)
                }
                ),
                s.find("span:eq(0), span:eq(1)").bind("click", function() {
                    router.approuter.chatToUser(e.id)
                }
                )
            }
        },
        addAddUsualCallback: function(e) {
            this.addUsualCallback = e
        },
        addDelUsualCallback: function(e) {
            this.delUsualCallback = e
        },
        showAvatar: function(e, t) {
            if ("user" === e.type) {
                var n = t.userList.get(e.id)
                  , a = t.$("#" + e.tId + "_a .button")
                  , s = n.get("icon") || constants.defaultIcon
                  , i = "<img alt='avatar' src='" + s + "' >";
                a.append(i)
            }
        },
        showUserInfo: function(e, t) {
            if ("user" === e.type) {
                var n = t.userList.get(e.id)
                  , s = new a({
                    model: n
                });
                t.$("#" + e.tId + "_a").popover({
                    placement: "left",
                    html: !0,
                    content: s.el
                }),
                t.$("#" + e.tId + "_a").bind("mouseover", function() {
                    t.$("#" + e.tId + "_a + .popover").length || t.$("#" + e.tId + "_a").popover("show"),
                    t.$(".popover").hide()
                }
                )
            }
        },
        showOnlineNum: function(e, t) {
            if ("department" === e.type) {
                var n = t.$("#" + e.tId + "_a")
                  , a = '<span>(</span><span name="onlineNum" class="online-num" id="' + e.tId + '_online" ></span><span>/</span><span name="userNum" class="user-num" id="' + e.tId + '_user_num"></span><span>)</span>';
                n.append(a),
                t._showOnlineNum(e, t)
            }
        },
        _showOnlineNum: function(e, t) {
            var n = t.departmentList.getAllChildrenIds(e.id).concat(e.id)
              , a = t.userList.getAllDeptUsers(n)
              , s = _.filter(a, function(e) {
                return e.get("onlineStatus") === constants.UserStatus.Online || e.get("onlineStatus") === constants.UserStatus.Busy
            }
            );
            t.$("#" + e.tId + "_online").html(s.length),
            t.$("#" + e.tId + "_user_num").html(a.length)
        },
        onRemoveContact: function(e) {
            var t = _.isArray(e) ? e : [e];
            _.each(t, function(e) {
                var t = this.userList.get(e);
                t.set("usualContact", !1)
            }
            , this)
        },
        onAddContact: function(e) {
            var t = _.isArray(e) ? e : [e];
            _.each(t, function(e) {
                var t = this.userList.get(e);
                t.set("usualContact", !0)
            }
            , this)
        },
        changeUserOnlineStatus: function(e) {
            var t = this.zTree.getNodeByParam("id", e.get("userId"));
            this.$("#" + t.tId + "_ico").attr("class", "button " + e.get("onlineStatus") + "_ico_docu"),
            this._showOnlineNum(this.zTree.getNodeByParam("id", e.get("deptId")), this)
        },
        onChangeHeight: function() {
            this.$el.height(model.setting.geDepartmentTreeHeight())
        },
        addDepartmentNodes: function(e) {
            e.each(function(t) {
                this._addDepartmentNode(e, t)
            }
            , this)
        },
        _addDepartmentNode: function(e, t) {
            var n = this.zTree.getNodeByParam("id", t.id);
            if (n)
                return n;
            var a = null ;
            t.get("parentId") && (a = this.zTree.getNodeByParam("id", t.get("parentId")),
            a || (a = this._addDepartmentNode(e, e.get(t.get("parentId")))));
            var s = this.zTree.addNodes(a, {
                id: t.get("departmentId"),
                parentId: t.get("parentId") || 0,
                name: t.get("name"),
                open: !1,
                type: "department",
                isParent: !0
            }, !0);
            return s[0]
        },
        addChildNodes: function(e, t) {
            var n = _.map(e, function(e) {
                return {
                    id: e.get("userId"),
                    parentId: e.get("deptId"),
                    name: e.get("nameAccount") || e.get("userName"),
                    open: !1,
                    type: "user",
                    isParent: !1,
                    iconSkin: "corbet" === e.get("onlineStatus") ? "offline" : e.get("onlineStatus")
                }
            }
            );
            this.zTree.addNodes(t, n, !0)
        },
        addUserNodes: function(e) {
            _.each(e, function(e) {
                var t = e.get("deptId") ? this.zTree.getNodeByParam("id", e.get("deptId")) : null ;
                this.zTree.addNodes(t, {
                    id: e.get("userId"),
                    parentId: e.get("deptId"),
                    name: e.get("nameAccount") || e.get("userName"),
                    open: !1,
                    type: "user",
                    isParent: !1,
                    iconSkin: "corbet" === e.get("onlineStatus") ? "offline" : e.get("onlineStatus")
                }, !0)
            }
            , this)
        },
        hoverBgChange: function(e) {
            e.stopPropagation(),
            $(e.currentTarget).addClass("user-hover")
        },
        hoverBgRemove: function(e) {
            e.stopPropagation(),
            $(e.currentTarget).removeClass("user-hover")
        },
        _expandDept: function(e) {
            var t = this.userList.findWhere({
                deptId: e
            });
            if (t) {
                var n = this.zTree.getNodeByParam("id", t.id);
                if (!n) {
                    var a = _.filter(this.userList.models, function(t) {
                        return t.get("deptId") === e
                    }
                    );
                    this.addChildNodes(a, this.zTree.getNodeByParam("id", e))
                }
            }
        },
        close: function() {
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/user/views/UserLayout", function(require, e, t) {
    var a = require("app/commons/uikit/user/ContactSelectTree2")
      , s = require("app/website/user/views/SearchDepartmentUsers")
      , i = require("app/website/user/views/UsualContactTreeView")
      , n = require("app/website/user/views/DepartmentTreeView");
    t.exports = Backbone.View.extend({
        tagName: "div",
        className: "user-layout",
        id: "userLayout",
        $usualContactTreeWrap: void 0,
        $departmentTreeWrap: void 0,
        departmentTreeView: void 0,
        usualContactTreeView: void 0,
        contactSelectTree: void 0,
        searchDepartmentUsersView: void 0,
        events: {
            "show a[data-toggle=tab]:last ": "showDepartmentTree",
            "click .dealContact .icon-remove": "showDel",
            "click .del-bar i.icon-signout": "closeDelBtn",
            "click .contact-del .btn:first": "removeUsualContact",
            "click .contact-del .btn:last": "closeDelBtn",
            "click .contact-add .btn:last": "closeContactSelectTree",
            "click .add-bar i.icon-signout": "closeContactSelectTree",
            "click .contact-add .btn:first": "addUsualContact",
            "show a[data-toggle=tab]:first ": "showUsualContact",
            "click #colleague_list_view .depart-searchbox .icon": "returnDepartmentTreeView"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            var e = this;
            return this.$el.html(__html(Handlebars.template(function(e, t, a, s, i) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                a = this.merge(a, e.helpers),
                i = i || {},
                '<div class="accordion" id="colleague_view"><div class="accordion-heading custom-project-title"><span class="left"> <%=msg564%></span><a class="right" href="#slide/close" class="btn btn-link custom-btn"><i class="icon-remove" style="font-size:16px;"></i></a></div><div class="clear"></div><div class="tabbable"><ul class="contact-bar add-bar hide"><li><span></span><div><%=msg1135%></div></li><li><i class="icon-signout" title="<%=msg630%>"></i></li></ul><ul class="contact-bar del-bar hide"><li><span></span><div><%=msg1137%></div></li><li><i class="icon-signout" title="<%=msg630%>"></i></li></ul><ul class="nav nav-tabs contact-tabs"><li class="active"><a data-toggle="tab" href="#usual_colleague_view" title="<%=msg1139%>"><i class="icon-custom-usual-contact"></i><span><%=msg1139%></span></a></li><li class=""><a data-toggle="tab" href="#colleague_list_view" title="<%=msg239%>"><i class="icon-custom-colleague"></i><span><%=msg239%></span></a></li></ul><div class="tab-content overflow-hidden "><div id="usual_colleague_view" class="tab-pane active overflow-hidden "><div class="operate-panel"><div class="user-search css-inline-block"></div><div class="dealContact"><i class="icon-remove" title="<%=msg1137%>"></i></div></div><div id="usualContactTreeWrap"></div><div class="contact-del hide"><button class="btn btn-clear" type="button"><i class="icon-custom-ok"></i> <%=msg86%></button><button class="btn btn-clear" type="button"><i class="icon-custom-cancel"></i> <%=msg87%></button></div><div class="contact-add hide"><button class="btn btn-clear" type="button"><i class="icon-custom-ok"></i> <%=msg86%></button><button class="btn btn-clear" type="button"><i class="icon-custom-cancel"></i> <%=msg87%></button></div></div><div id="colleague_list_view" class="tab-pane overflow-hidden "><div class="input-append depart-searchbox"><div class="icon hide" title="<%=msg630%>"><i class="icon-chevron-left"></i></div></div><div id="departmentTreeWrap"></div></div></div></div></div>'
            }
            ))),
            this.onChangeHeight(),
            this.$usualContactTreeWrap = this.$("#usualContactTreeWrap"),
            this.$departmentTreeWrap = this.$("#departmentTreeWrap"),
            this.searchUsualBox = new SearchBox,
            this.searchUsualBox.on(EventType.onSearch, this.searchUsualContact, this),
            this.$(".user-search").html(this.searchUsualBox.el),
            this.searchDeptUserBox = new SearchBox,
            this.searchDeptUserBox.on(EventType.onSearch, this.searchDepartmentUser, this),
            this.$(".depart-searchbox").append(this.searchDeptUserBox.el),
            this.usualContactTreeView = new i({
                collection: collection.usualContactList
            }),
            this.$usualContactTreeWrap.append(this.usualContactTreeView.el),
            setTimeout(function() {
                e.showDepartmentTree()
            }
            , 1e3),
            this.showCard(),
            this._bindEnter(),
            this
        },
        _bindEnter: function() {
            var e = this;
            this.$("#usual_colleague_view input.keyword").bind("keydown", "return", function(t) {
                var a = $(t.target).val();
                e.searchUsualContact(a)
            }
            ),
            this.$("#colleague_list_view input.keyword").bind("keydown", "return", function(t) {
                var a = $(t.target).val();
                e.searchDepartmentUser(a)
            }
            )
        },
        onChangeHeight: function() {
            this.$el.height(model.setting.getMainboxHeight()),
            this.usualContactTreeView && this.usualContactTreeView.onChangeHeight(),
            this.departmentTreeView && this.departmentTreeView.onChangeHeight(),
            this.contactSelectTree && this.contactSelectTree.onChangeHeight(),
            this.searchDepartmentUsersView && this.searchDepartmentUsersView.onChangeHeight()
        },
        showDepartmentTree: function() {
            this.departmentTreeView || (this.departmentTreeView = new n({
                departmentList: collection.departmentList,
                userList: collection.userList
            }),
            this.departmentTreeView.addAddUsualCallback(this.createAddUsualCallback()),
            this.departmentTreeView.addDelUsualCallback(this.createDelUsualCallback()),
            this.$departmentTreeWrap.append(this.departmentTreeView.el)),
            this.hideSearchDepartmentUsersView()
        },
        createDelUsualCallback: function() {
            return function(e) {
                router.approuter.navigate("usual/del/" + e.id, !0)
            }
        },
        createAddUsualCallback: function() {
            return function(e) {
                router.approuter.navigate("usual/add/" + e.id, !0)
            }
        },
        hideSearchDepartmentUsersView: function() {
            this.$departmentTreeWrap.find("#search-department-users").size() && (this.$departmentTreeWrap.find("#departmentTreeView").show(),
            this.$(".depart-searchbox .icon").addClass("hide"),
            this.$departmentTreeWrap.find("#search-department-users").remove(),
            this.$(".depart-searchbox .input-medium").val(""))
        },
        showUsualContact: function() {
            this.usualContactTreeView && (this.usualContactTreeView.rebind(),
            this.closeDelBtn())
        },
        showDel: function() {
            this.$("#usual_colleague_view .contact-del").removeClass("hide"),
            this.$("#usual_colleague_view .operate-panel").addClass("hide"),
            this.$("#colleague_view .del-bar").removeClass("hide"),
            this.$("#colleague_view .contact-tabs").addClass("hide"),
            this.usualContactTreeView.$el.height(this.usualContactTreeView.$el.height() - 30)
        },
        closeDelBtn: function() {
            this.$("#usual_colleague_view .contact-del").addClass("hide"),
            this.$("#usual_colleague_view .operate-panel").removeClass("hide"),
            this.$("#colleague_view .del-bar").addClass("hide"),
            this.$("#colleague_view .contact-tabs").removeClass("hide"),
            this.usualContactTreeView.$el.height(model.setting.getUsualContactTreeHeight())
        },
        removeUsualContact: function() {
            var e = this;
            this.usualContactTreeView.removeUsualContacts(function() {
                e.closeDelBtn(),
                e.usualContactTreeView && e.usualContactTreeView.rebind()
            }
            )
        },
        _onShowAddContactView: function() {
            this.usualContactTreeView && this.usualContactTreeView.close(),
            this.contactSelectTree && this.contactSelectTree.close(),
            this.contactSelectTree = new a({
                departmentList: collection.departmentList,
                userList: collection.userList,
                settingObj: {
                    hideUserIds: collection.usualContactList.pluck("userId")
                }
            }),
            this.$usualContactTreeWrap.append(this.contactSelectTree.el),
            this.contactSelectTree.showCheckbox(!0),
            this.$(".contact-add, .add-bar").removeClass("hide"),
            this.$(".operate-panel, .contact-tabs").addClass("hide")
        },
        closeContactSelectTree: function() {
            this.closeAddBtn(),
            this.contactSelectTree.close(),
            this.usualContactTreeView.rebind(),
            this.$usualContactTreeWrap.append(this.usualContactTreeView.el)
        },
        closeAddBtn: function() {
            this.$("#usual_colleague_view .contact-add").addClass("hide"),
            this.$("#usual_colleague_view .operate-panel").removeClass("hide"),
            this.$("#colleague_view .add-bar").addClass("hide"),
            this.$("#colleague_view .contact-tabs").removeClass("hide")
        },
        addUsualContact: function() {
            var e = this
              , t = this.contactSelectTree.getCheckUserIds()
              , a = this.contactSelectTree.getCheckedDepartIds();
            return 0 === t.length ? (noty.alert(0 === a.length ? msgs.msgAddUsualNoUser : msgs.msgAddContactErr),
            !1) : void collection.usualContactList.addUsualContacts(t, function(a) {
                return constants.isResponseError(a) ? (noty.alert(msgs.msgAddUsualFail),
                !1) : (noty.success(msgs.msgAddUsualSucess),
                _.each(t, function(e) {
                    var t = collection.userList.get(e);
                    t.set("usualContact", !0),
                    collection.usualContactList.add(t)
                }
                ),
                collection.userList.trigger(EventType.addUsualContact, t),
                void e.closeContactSelectTree())
            }
            )
        },
        showCard: function() {
            $(".userList li").popover({
                html: !0,
                placement: "left",
                content: "nameCard",
                trigger: "hover"
            })
        },
        searchUsualContact: function(e) {
            this.usualContactTreeView.doSearch(e)
        },
        searchDepartmentUser: function(e) {
            $.trim(e) && (this.searchDepartmentUsersView ? this.searchDepartmentUsersView.rebind() : (collection.resultUserList = new UserListDTO,
            this.searchDepartmentUsersView = new s({
                collection: collection.resultUserList
            })),
            this.$departmentTreeWrap.find("#departmentTreeView").hide(),
            this.$(".depart-searchbox .icon").removeClass("hide"),
            this.$departmentTreeWrap.find("#search-department-users").size() || this.$departmentTreeWrap.append(this.searchDepartmentUsersView.el),
            this.searchDepartmentUsersView.doSearch(e))
        },
        returnDepartmentTreeView: function() {
            this.hideSearchDepartmentUsersView()
        },
        rebind: function() {
            this.$el.removeClass("hide-force")
        },
        close: function() {
            view.header.$("ul.nav > li.header-nav-contact").removeClass("active"),
            this.$el.addClass("hide-force")
        }
    })
}
);
;define("app/website/message/models/FileOperateDTO", function() {
    window.FileOperateDTO = Backbone.Model.extend({
        urlRoot: "",
        defaults: {
            entId: void 0,
            userId: void 0,
            userName: void 0,
            fileId: void 0,
            folderId: void 0,
            name: void 0,
            operation: void 0,
            updateTime: void 0,
            version: void 0
        },
        initialize: function() {
            this.get("updateTime") && this.set("updateTime", constants.dateStrFromMisc(this.get("updateTime"))),
            this.set("operateName", constants.getFileOperationTip(this.get("operation"))),
            this.set("type", this.get("fileId") ? constants.getFileSuffix(this.get("name")) : "folder")
        }
    })
}
);
;define("app/website/message/models/FileMsgPageDTO", function(require, e, t) {
    require("app/website/message/models/FileOperateDTO"),
    t.exports = window.FileMsgPageDTO = Backbone.Paginator.requestPager.extend({
        model: FileOperateDTO,
        paginator_core: {
            url: resturl.flexService + "/sc/entDisk/getEntDiskHistory",
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
            entId: void 0,
            skipResults: function() {
                return (this.currentPage - 1) * this.perPage
            },
            maxResults: function() {
                return this.perPage
            }
        },
        parse: function(e) {
            return this.count = e.count,
            this.totalRecords = e.count,
            this.trigger(EventType.pagerEnd),
            e.histories
        }
    })
}
);
;define("app/website/message/views/FileMessageView", function(require, e, i) {
    var t = require("app/commons/uikit/support/LoadingView")
      , n = require("app/website/message/models/FileMsgPageDTO")
      , s = require("app/commons/uikit/support/PageView");
    i.exports = Backbone.View.extend({
        tagName: "div",
        className: "file-message-view",
        id: "file-message-view",
        collectionBinder: void 0,
        $msgContent: void 0,
        pageView: void 0,
        searchView: void 0,
        viewMode: "normal",
        loadingView: void 0,
        events: {
            "click #fileMessageContent li": "handleFileMsg"
        },
        initialize: function() {
            this.collection = this.fileMsgPageList = new n,
            this.addListeners();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, t, n, s) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                s = s || {},
                '<div class="nodata"><%=msg796%></div><ul id="fileMessageContent" class="message-content"></ul><div class="pageBox"></div>'
            }
            ))),
            this.$msgContent = this.$("#fileMessageContent"),
            this.$(".nodata").hide(),
            this.loadingView = new t({
                el: this.$el,
                parent: this.$msgContent
            }),
            this.collectionBinder.bind(this.collection, this.$msgContent),
            this.pageView = new s({
                collection: this.collection
            }),
            this.pageView.on(EventType.pagerStart, this.startLoading, this),
            this.pageView.on(EventType.pagerEnd, this.stopLoading, this),
            this.$(".pageBox").html(this.pageView.el),
            this.onChangeHeight(),
            this.initPage(),
            this
        },
        initPage: function() {
            this.startLoading(),
            this.collection.server_api.entId = cache.entId,
            this.collection.goTo(1)
        },
        addListeners: function() {
            this.listenTo(this.collection, EventType.pagerEnd, this.stopLoading)
        },
        onChangeHeight: function() {
            this.$msgContent.height(model.setting.getSlideContentHeight() - 40)
        },
        viewCreator: function(e) {
            return new FileMessageItemView({
                model: e
            })
        },
        handleFileMsg: function() {},
        onHandleMessage: function(e) {
            "search" == this.viewMode && this.searchView.compareData(e) && (collection.resultMessageList.add(e),
            collection.resultMessageList.pager())
        },
        startLoading: function() {
            this.loadingView.show(),
            this.loadingView.resetCss({
                width: "258px",
                height: this.$msgContent.height(),
                left: 0,
                top: 0
            })
        },
        stopLoading: function() {
            this.loadingView.hide()
        },
        close: function() {
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    }),
    window.FileMessageItemView = Backbone.View.extend({
        tagName: "li",
        className: "fileMessageItem",
        $forwardLink: void 0,
        _modelBinder: void 0,
        initialize: function() {
            this.model.bind("change", this.render, this),
            this._modelBinder = new Backbone.ModelBinder
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, i, t, n, s) {
                this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                s = s || {};
                var a, o, l = "", d = "function", h = this.escapeExpression;
                return l += '<i class="file-icon" name="file-icon"></i><span name="realName" class="msg-fromuser"></span><span name="operation"></span><span class="file-name text-overflow" val="" data-type=""><a href="#sharedisk/',
                (o = t.type) ? a = o.call(i, {
                    hash: {},
                    data: s
                }) : (o = i && i.type,
                a = typeof o === d ? o.call(i, {
                    hash: {},
                    data: s
                }) : o),
                l += h(a) + "/",
                (o = t.fileId) ? a = o.call(i, {
                    hash: {},
                    data: s
                }) : (o = i && i.fileId,
                a = typeof o === d ? o.call(i, {
                    hash: {},
                    data: s
                }) : o),
                l += h(a) + '" name="file-name"></a></span><span name="updateTime"></span><span class="hour hide" val="" name="hour"></span>'
            }
            ), {
                fileId: this.model.get("fileId") || this.model.get("folderId"),
                type: this.model.get("fileId") ? "forwardfile" : "forwardfolder"
            })),
            this.$forwardLink = this.$("a[name=file-name]");
            var e = {
                type: {
                    selector: "[name=file-icon]",
                    elAttribute: "class",
                    converter: constants.typeConverter
                },
                userName: "[name=realName]",
                operateName: "[name=operation]",
                name: "[name=file-name]",
                updateTime: "[name=updateTime]"
            };
            return this._modelBinder.bind(this.model, this.el, e),
            this.$el.attr("title", _.sprintf("%s %s %s %s", this.model.get("userName"), this.model.get("operateName"), this.model.get("name"), this.model.get("updateTime"))),
            _.contains([constants.operation.Delete, constants.operation.DeletePermanently, constants.operation.EmptyRecycle], this.model.get("operation")) && (this.$forwardLink.attr("href", "###"),
            this.$forwardLink.addClass("unlink")),
            this
        },
        close: function() {
            this._modelBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/message/views/ChatMsgView", function(require, e, t) {
    var i = require("app/commons/models/message/ChatMsgPageDTO")
      , s = require("app/commons/uikit/support/LoadingView")
      , n = require("app/commons/uikit/support/PageView");
    t.exports = Backbone.View.extend({
        tagName: "div",
        className: "instance-message-view",
        id: "instance-message-view",
        $msgContent: void 0,
        $noData: void 0,
        $pageView: void 0,
        collectionBinder: void 0,
        pageView: void 0,
        viewMode: void 0,
        initialize: function() {
            this.collection = this.chatMsgPageList = new i,
            this.addListeners();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.viewMode = "normal",
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, i, s, n) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                n = n || {},
                '<ul id="instanceMessageContent" class="overflow-auto-y"><li class="nodata"><%=msg246%></li></ul><div class="pageBox"></div>'
            }
            ))),
            this.$msgContent = this.$("#instanceMessageContent"),
            this.$noData = this.$(".nodata"),
            this.$pageView = this.$(".pageBox"),
            this.loadingView = new s({
                el: this.$el,
                parent: this.$msgContent
            }),
            this.onChangeHeight(),
            this.pageView = new n({
                collection: this.collection
            }),
            this.$pageView.html(this.pageView.el),
            this.pageView.on(EventType.pagerStart, this.startLoading, this),
            this.pageView.on(EventType.pagerEnd, this.stopLoading, this),
            this.collectionBinder.bind(this.collection, this.$msgContent),
            this.collection.length > 0 && this.hideNoDataTip(),
            this.initPage(),
            this
        },
        initPage: function() {
            this.startLoading(),
            this.chatMsgPageList.origModels = void 0,
            this.chatMsgPageList.server_api.entId = cache.entId,
            this.chatMsgPageList.once("sync", this.setChatUserOrigModels, this),
            this.chatMsgPageList.fetch()
        },
        onChangeHeight: function() {
            this.$msgContent.height(model.setting.getSlideContentHeight() - 50)
        },
        viewCreator: function(e) {
            return new ChatMsgItemView({
                model: e
            })
        },
        handleChatMsg: function(e) {
            var t = parseInt($(e.currentTarget).find("span[name='message_content']").attr("val"))
              , i = $(e.currentTarget).find("span[name='message_content']").attr("data-type");
            i == MessageType.ChatMessage && router.approuter.navigate("chat/" + t, !0)
        },
        resetSearchBox: function() {
            this.$(".searchBox input[name='keyword']").val(""),
            this.$(".searchBox input:checked").each(function() {
                $(this).removeAttr("checked")
            }
            ),
            this.$(".searchBox input[name='messageTimeStart']").val(""),
            this.$(".searchBox input[name='messageTimeEnd']").val("")
        },
        addListeners: function() {
            this.listenTo(this.collection, "add", this.hideNoDataTip),
            this.listenTo(this.collection, EventType.pagerEnd, this.stopLoading)
        },
        hideNoDataTip: function() {
            this.$noData.hide()
        },
        startLoading: function() {
            this.loadingView.show(),
            this.loadingView.resetCss({
                width: "258px",
                height: this.$msgContent.height(),
                left: 0,
                top: 0,
                position: "absolute"
            })
        },
        stopLoading: function() {
            this.loadingView.hide()
        },
        close: function() {
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    }),
    window.ChatMsgItemView = Backbone.View.extend({
        tagName: "li",
        className: "messageItem",
        _modelBinder: void 0,
        events: {
            "click  span[name=history_list] a": "onShowChatHistory",
            dblclick: "_onShowChatView"
        },
        initialize: function() {
            this.model.bind("change", this.render, this),
            this.model.bind("destroy", this.remove, this),
            this._modelBinder = new Backbone.ModelBinder
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, t, i, s, n) {
                this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                n = n || {};
                var a, o, h = "", r = "function", l = this.escapeExpression;
                return h += '<img alt="" src="" class="avatar"><span name="user_info"></span><span val="" data-type="" class="text-overflow mesageContent">',
                (o = i.msgBody) ? a = o.call(t, {
                    hash: {},
                    data: n
                }) : (o = t && t.msgBody,
                a = typeof o === r ? o.call(t, {
                    hash: {},
                    data: n
                }) : o),
                h += l(a) + '</span><span name="history_list" val=""><a href="###" style="color: #fff"><%=msg794%></a></span>'
            }
            ), this.model.toJSON())),
            this.$el.attr("title", msgs.msgOpenChatView);
            var e = {
                icon: {
                    selector: "[class=avatar]",
                    elAttribute: "src"
                },
                senderId: {
                    selector: "[name=user_info], [name=msg_opt]",
                    elAttribute: "class",
                    converter: constants.convertColor
                },
                senderName: "[name=user_info]"
            };
            return this._modelBinder.bind(this.model, this.el, e),
            this
        },
        _onShowChatView: function() {
            var e = this.model.get("senderId");
            e === cache.userId && (e = this.model.get("receiverId"));
            var t = collection.userList.get(e);
            return t ? void router.approuter.navigate("#chat/" + e, !0) : void noty.alert("用户不存在或已被删除")
        },
        onShowChatHistory: function() {
            view.messageView.trigger(EventType.showChatHistoryView, this.model)
        },
        close: function() {
            this._modelBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/message/views/ChatHistoryView", function(require, e, t) {
    var i = require("app/commons/models/message/ChatHistoryPageDTO")
      , s = require("app/commons/uikit/support/LoadingView")
      , n = require("app/commons/uikit/support/PageView");
    t.exports = Backbone.View.extend({
        tagName: "div",
        className: "chat-history-view",
        id: "chat-history-view",
        collectionBinder: void 0,
        pageView: void 0,
        viewMode: void 0,
        msgGrp: void 0,
        events: {
            "click .headBar .back": "returnChatList",
            "click .headBar .reply": "_onReply"
        },
        initialize: function() {
            this.msgGrp = this.options.msgGrp,
            this.collection = new i,
            this._addListeners();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, i, s, n) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                n = n || {},
                '<div class="headBar"><span class="reply"><a href="###"><i class="icon-custom-reply"></i> <%=msg792%></a></span><span class="back"><a href="###"><%=msg630%><i class="icon-custom-back"></i></a></span></div><div class="searchBox"></div><ul id="chatHistoryContent" style="overflow: auto"></ul><div class="pageBox"></div>'
            }
            ), {
                senderId: this.msgGrp.get("senderId")
            })),
            this.$content = this.$("#chatHistoryContent"),
            this.$pageView = this.$(".pageBox"),
            this.onChangeHeight(),
            this.loadingView = new s({
                el: this.$el,
                parent: this.$content
            }),
            this.pageView = new n({
                collection: this.collection
            }),
            this.pageView.on(EventType.pagerStart, this.startLoading, this),
            this.pageView.on(EventType.pagerEnd, this.stopLoading, this),
            this.$pageView.html(this.pageView.el),
            this.initPage(),
            this.collectionBinder.bind(this.collection, this.$content),
            this
        },
        _onPageError: function() {
            this.stopLoading(),
            noty.error(msgs.msgDataLoadFail)
        },
        initPage: function() {
            this.startLoading(),
            _.extend(this.collection.server_api, {
                entId: cache.entId,
                senderId: this.msgGrp.get("senderId"),
                receiverId: this.msgGrp.get("receiverId")
            }),
            this.collection.goTo(1)
        },
        _addListeners: function() {
            this.listenTo(this.collection, EventType.pagerEnd, this.stopLoading),
            this.listenTo(this.collection, "error", this._onPageError)
        },
        viewCreator: function(e) {
            return new ChatHistoryItemView({
                model: e
            })
        },
        onChangeHeight: function() {
            var e = model.setting.getSlideContentHeight() - 71;
            this.$("#chatHistoryContent").height("en_US" === lang ? e - 20 : e)
        },
        onHandleMessage: function() {},
        returnChatList: function() {
            view.messageView.trigger(EventType.showChatMsgView)
        },
        _onReply: function() {
            var e = collection.userList.get(this.msgGrp.get("senderId"));
            return e ? void router.approuter.navigate("#chat/" + this.msgGrp.get("senderId"), !0) : void noty.alert("用户不存在或已被删除")
        },
        startLoading: function() {
            this.loadingView.show(),
            this.loadingView.resetCss({
                width: "258px",
                height: this.$content.height(),
                left: 0,
                top: 0,
                position: "absolute"
            })
        },
        stopLoading: function() {
            this.loadingView.hide()
        },
        close: function() {
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    }),
    window.ChatHistoryItemView = Backbone.View.extend({
        tagName: "li",
        className: "chat-item",
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.model.parseToView(),
            this.$el.html(__html(Handlebars.template(function(e, t, i, s, n) {
                this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                n = n || {};
                var a, o, r = "", h = "function", d = this.escapeExpression;
                return r += '<div class="message-intro-header" name="senderId"><span name="user_info">',
                (o = i.senderName) ? a = o.call(t, {
                    hash: {},
                    data: n
                }) : (o = t && t.senderName,
                a = typeof o === h ? o.call(t, {
                    hash: {},
                    data: n
                }) : o),
                r += d(a) + '</span><span class="pull-right">',
                (o = i.sendHour) ? a = o.call(t, {
                    hash: {},
                    data: n
                }) : (o = t && t.sendHour,
                a = typeof o === h ? o.call(t, {
                    hash: {},
                    data: n
                }) : o),
                r += d(a) + '</span></div><div class="message-detail-content"><span name="message_content" val="" data-type="" class="message_content">',
                (o = i.msgBody) ? a = o.call(t, {
                    hash: {},
                    data: n
                }) : (o = t && t.msgBody,
                a = typeof o === h ? o.call(t, {
                    hash: {},
                    data: n
                }) : o),
                (a || 0 === a) && (r += a),
                r += "</span></div>"
            }
            ), this.model.toJSON())),
            this.$("[name=senderId]").addClass(this.model.get("senderId") == cache.userId ? "my-title" : "other-title"),
            this.model.get("anotherDay") && this.$el.prepend('<div class="send-date"> ' + this.model.get("sendDate") + " </div>"),
            this
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/message/views/SystemMsgView", function(require, e, t) {
    var i = require("app/commons/uikit/support/PageView")
      , s = require("app/website/message/models/SysMsgModels").SysMsgPageList
      , n = require("app/commons/uikit/support/LoadingView");
    t.exports = Backbone.View.extend({
        tagName: "ul",
        className: "system-msg-view",
        id: "systemMsgView",
        pageView: void 0,
        systemMsgPageList: void 0,
        $msgContent: void 0,
        initialize: function() {
            this.collection = this.systemMsgPageList = new s,
            this._addListeners();
            var e = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator,this.collection);
            this.collectionBinder = new Backbone.CollectionBinder(e),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, i, s, n) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                n = n || {},
                '<div class="nodata"></div><ul id="systemMsgContent" class="overflow-auto-y"></ul><div class="pageBox"></div>'
            }
            ))),
            this.$msgContent = this.$("#systemMsgContent"),
            this.loadingView = new n({
                el: this.$el,
                parent: this.$msgContent
            }),
            this.pageView = new i({
                collection: this.collection
            }),
            this.pageView.on(EventType.pagerStart, this.startLoading, this),
            this.pageView.on(EventType.pagerEnd, this.stopLoading, this),
            this.$(".pageBox").html(this.pageView.el),
            this.collectionBinder.bind(this.collection, this.$msgContent),
            this.onChangeHeight(),
            this.initPage(),
            this
        },
        initPage: function() {
            this.startLoading(),
            _.extend(this.collection.server_api, {
                entId: cache.entId,
                userId: cache.userId
            }),
            this.collection.goTo(1)
        },
        _addListeners: function() {
            this.listenTo(this.collection, EventType.pagerEnd, this.stopLoading)
        },
        viewCreator: function(e, t) {
            return new a({
                model: e,
                collection: t
            })
        },
        startLoading: function() {
            this.loadingView.show(),
            this.loadingView.resetCss({
                width: "258px",
                height: this.$msgContent.height(),
                left: 0,
                top: 0,
                position: "absolute"
            })
        },
        stopLoading: function() {
            this.loadingView.hide()
        },
        onChangeHeight: function() {
            this.$msgContent.height(model.setting.getSlideContentHeight() - 50)
        },
        close: function() {
            this.collectionBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    });
    var a = Backbone.View.extend({
        tagName: "li",
        className: "system-msg-item",
        id: "systemMsgItem",
        systemMsgPageList: void 0,
        events: {
            "click .message": "_onReadMsg"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, i, s, n) {
                function a() {
                    return ' <span class="label"><%=msgHasRead%></span> '
                }
                function o() {
                    return " msg-read "
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                n = n || {};
                var l, h, g = "", d = "function", c = this.escapeExpression, r = this;
                return g += '<ul><li><span class="time">',
                (h = i.sendTime) ? l = h.call(t, {
                    hash: {},
                    data: n
                }) : (h = t && t.sendTime,
                l = typeof h === d ? h.call(t, {
                    hash: {},
                    data: n
                }) : h),
                g += c(l) + "</span>",
                l = i["if"].call(t, t && t.hasRead, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(1, a, n),
                    data: n
                }),
                (l || 0 === l) && (g += l),
                g += '</li><li><a class="message ',
                l = i["if"].call(t, t && t.hasRead, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(3, o, n),
                    data: n
                }),
                (l || 0 === l) && (g += l),
                g += '"href="',
                (h = i.msgLink) ? l = h.call(t, {
                    hash: {},
                    data: n
                }) : (h = t && t.msgLink,
                l = typeof h === d ? h.call(t, {
                    hash: {},
                    data: n
                }) : h),
                g += c(l) + '" target="_blank">',
                (h = i.msgTitle) ? l = h.call(t, {
                    hash: {},
                    data: n
                }) : (h = t && t.msgTitle,
                l = typeof h === d ? h.call(t, {
                    hash: {},
                    data: n
                }) : h),
                g += c(l) + "</a></li></ul>"
            }
            ), {
                sendTime: this.model.get("sendTime"),
                msgTitle: this.model.get("msgTitle"),
                msgLink: this.model.get("msgLink"),
                hasRead: "Read" === this.model.get("msgStatus")
            })),
            this
        },
        _onReadMsg: function() {
            var e = this;
            this.model.confirm(function() {
                e.render()
            }
            )
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/message/views/MessageView", function(require, s, e) {
    var i = require("app/website/message/views/FileMessageView")
      , t = require("app/website/message/views/ChatMsgView")
      , a = require("app/website/message/views/ChatHistoryView")
      , h = require("app/website/message/views/SystemMsgView");
    e.exports = Backbone.View.extend({
        tagName: "div",
        className: "message-view",
        id: "messageView",
        $fileMessageBox: void 0,
        $chatMsgView: void 0,
        $msgTipIcon: void 0,
        $systemMsgView: void 0,
        fileMessageView: void 0,
        chatMsgView: void 0,
        chatHistoryView: void 0,
        systemMsgView: void 0,
        fileMsgPageList: void 0,
        chatMsgPageList: void 0,
        isFileMsgChange: void 0,
        events: {
            "click #file_manage_opt": "_showFileMsg",
            "click #system_message_opt": "_showSystemMsg",
            "click #instance_message_opt": "_showChatMsg"
        },
        initialize: function() {
            this.addListeners(),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(s, e, i, t, a) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, s.helpers),
                a = a || {},
                '<div class="accordion" id="message_content_view"><div class="accordion-heading custom-project-title"><span class="left"> <%=msg798%></span><a class="right" href="#slide/close" class="btn btn-link"><i class="icon-remove"></i></a></div><div class="tabbable"><ul class="nav nav-tabs"><li class="active system-msg" val="system"><a data-toggle="tab" href="#systemMessageBox" id="system_message_opt"title="<%=msgSystemMessage%>"><i class="icon-custom-system" style="vertical-align: middle;"></i><span><%=msgSystemMessage%></span></a></li><li val="file"><a data-toggle="tab" href="#fileMessageBox" id="file_manage_opt" title="<%=msg799%>"><i class="icon-custom-folder"></i><span> <%=msg799%></span><span class="new-tips">new</span></a></li><li class="" val="instance"><a data-toggle="tab" href="#instanceMessageBox" style="display: inline-block;" id="instance_message_opt"title="<%=msg248%>"><i class="icon-custom-message"></i><span> <%=msg248%></span><b class="badge badge-important hide" id="new_instance_msg_num">0</b></a></li></ul><div class="tab-content overflow-hidden"><div class="tab-pane active" id="fileMessageBox"></div><div class="tab-pane" id="systemMessageBox"></div><div class="tab-pane" id="instanceMessageBox"></div></div></div></div>'
            }
            ))),
            this.isFileMsgChange = !1,
            this.$fileMessageBox = this.$("#fileMessageBox"),
            this.$chatMsgView = this.$("#instanceMessageBox"),
            this.$systemMsgView = this.$("#systemMessageBox"),
            this.$msgTipIcon = this.$("#message_content_view .new-tips"),
            this.$msgTipIcon.hide(),
            this._showFileMsg(),
            this.onChangeHeight(),
            this
        },
        addListeners: function() {
            this.on(EventType.showChatMsgView, this._showChatMsg, this),
            this.on(EventType.showChatHistoryView, this._showChatHistory, this),
            this.listenTo(model.messageEvent, EventType.fileMsgArrive, this.onFileMsgArrive)
        },
        _showFileMsg: function() {
            this.fileMessageView && this.fileMessageView.close(),
            this.fileMessageView = new i({
                collection: this.fileMsgPageList
            }),
            this.$fileMessageBox.html(this.fileMessageView.el)
        },
        _showChatMsg: function() {
            this.closeChildView(),
            this.chatMsgView = new t({
                collection: this.chatMsgPageList
            }),
            this.$chatMsgView.html(this.chatMsgView.el),
            this.chatMsgView.onChangeHeight(model.setting.getSlideContentHeight() - 40)
        },
        _showChatHistory: function(s) {
            this.closeChildView();
            s.getOtherUserId();
            this.chatHistoryView = new a({
                msgGrp: s
            }),
            this.chatHistoryView.onChangeHeight(),
            this.$chatMsgView.html(this.chatHistoryView.el)
        },
        _showSystemMsg: function() {
            this.closeChildView(),
            this.systemMsgView = new h,
            this.$systemMsgView.html(this.systemMsgView.el)
        },
        setChatUserOrigModels: function() {
            this.chatMsgPageList.pager()
        },
        onFileMsgArrive: function() {
            this.$msgTipIcon.css("display", "inline-block"),
            this.isFileMsgChange = !0
        },
        onChangeHeight: function() {
            this.$el.height(model.setting.getMainboxHeight());
            var s = model.setting.getSlideContentHeight();
            this.$(".tab-content").height("en_US" === lang ? s - 20 : s)
        },
        closeChildView: function() {
            this.chatMsgView && this.chatMsgView.close(),
            this.chatHistoryView && this.chatHistoryView.close(),
            this.fileMessageView && this.fileMessageView.close(),
            this.systemMsgView && this.systemMsgView.close()
        },
        close: function() {
            view.header.$("ul.nav > li.header-nav-message").removeClass("active"),
            this.fileMessageView && this.fileMessageView.close(),
            this.chatMsgView && this.chatMsgView.close(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/user/views/SelectValidateView", function(require, e, i) {
    i.exports = Backbone.View.extend({
        className: "select-validate-view",
        $message: void 0,
        events: {
            "click .mail-vali": "checkMail",
            "click .phone-vali": "checkPhone"
        },
        initialize: function() {
            this.hideMobile = this.options.hideMobile,
            this.hideMail = this.options.hideMail,
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, s, t, a) {
                function l(e, i) {
                    var t, a, l = "";
                    return l += '<div class="control-group"><input type="text" placeholder="<%=msgUsualMailValidate%>" id="mail" name="mail" value="',
                    (a = s.mail) ? t = a.call(e, {
                        hash: {},
                        data: i
                    }) : (a = e && e.mail,
                    t = typeof a === r ? a.call(e, {
                        hash: {},
                        data: i
                    }) : a),
                    l += c(t) + '"><a class="mail-vali"><%=msgValidate%></a></div>'
                }
                function o(e, i) {
                    var t, a, l = "";
                    return l += '<div class="control-group"><input type="text" placeholder="<%=msgPhoneValidate%>" id="phone" name="phone" value="',
                    (a = s.mobile) ? t = a.call(e, {
                        hash: {},
                        data: i
                    }) : (a = e && e.mobile,
                    t = typeof a === r ? a.call(e, {
                        hash: {},
                        data: i
                    }) : a),
                    l += c(t) + '"><a class="phone-vali"><%=msgValidate%></a></div>'
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                a = a || {};
                var n, h = "", r = "function", c = this.escapeExpression, d = this;
                return h += '<div class="control-group control-title"><div class="title ac"><%=msgChooseValidate%></div></div><div class="ac validate-message"><span class="help-inline message red"></span></div>',
                n = s.unless.call(i, i && i.hideMail, {
                    hash: {},
                    inverse: d.noop,
                    fn: d.program(1, l, a),
                    data: a
                }),
                (n || 0 === n) && (h += n),
                n = s.unless.call(i, i && i.hideMobile, {
                    hash: {},
                    inverse: d.noop,
                    fn: d.program(3, o, a),
                    data: a
                }),
                (n || 0 === n) && (h += n),
                h
            }
            ), {
                hideMobile: this.hideMobile,
                hideMail: this.hideMail,
                mobile: this.options.mobile || model.currentUser.get("mobile"),
                mail: this.options.mail || model.currentUser.get("mail")
            })),
            this.$message = this.$(".message"),
            this.hideMobile ? this.$(".title").html(msgs.msgChooseMailValidate) : this.hideMail && this.$(".title").html(msgs.msgChoosePhoneValidate),
            this
        },
        checkMail: function() {
            var e = this
              , i = this.$("#mail").val();
            return i.match(constants.pattern.email) ? (this.$message.html(""),
            void this._checkAccount(i, function(s) {
                if (constants.isResponseOK(s))
                    return void e.trigger("showMailSend", i);
                switch (s) {
                case ErrorType.errorAccountUsed:
                    noty.alert(msgs.msgMailBinded);
                    break;
                default:
                    noty.error(msgs.msgServerError)
                }
            }
            )) : void this.$message.html(msgs.msgEmailFormatError)
        },
        checkPhone: function() {
            var e = this
              , i = this.$("#phone").val();
            return i.match(constants.pattern.Mobile) ? (this.$message.html(""),
            void this._checkAccount(i, function(s) {
                return constants.isResponseOK(s) ? void e.trigger("showPhoneSend", i) : void e.$message.html(msgs.msgMobileBinded)
            }
            )) : void this.$message.html(msgs.msgMobileFormatError)
        },
        _checkAccount: function(e, i) {
            resturl.sendValidationMsg({
                account: e,
                type: "VerifyAccount",
                entId: cache.entId || 0,
                userId: cache.userId
            }, i)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/user/views/ValidateWindow", function(require, i, e) {
    var s = require("app/website/user/views/SelectValidateView")
      , t = require("app/commons/uikit/reglogin/MailSendView")
      , l = require("app/commons/uikit/reglogin/PhoneSendView");
    e.exports = Backbone.View.extend({
        tagName: "div",
        id: "validateWindow",
        className: "validate-window modal fade hide modal-window",
        _main: void 0,
        $main: void 0,
        _selectValidateView: void 0,
        _mailSendView: void 0,
        _phoneSendView: void 0,
        events: {
            "click #closeImport": "close"
        },
        initialize: function() {
            this.hideMobile = this.options.hideMobile,
            this.hideMail = this.options.hideMail,
            this.mail = this.options.mail,
            this.mobile = this.options.mobile,
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(i, e, s, t, l) {
                function o() {
                    return '<div class="tips"><div class="tip-title"><%=msgValidateBenifit%></div><p><%=msgValidateDescription%></p><ol class="tip-list"><li><%=msgUseForLogin%></li><li><%=msgUseForGetPwd%></li><li><%=msgMoreSecurity%></li></ol></div>'
                }
                function a() {
                    return '<div class="tips"><div class="tip-title"><%=msgValidateMail%></div><p><%=msgValidateMailDescription%></p><ol class="tip-list"><li><%=msgUseForLogin%></li><li><%=msgUseForGetPwd%></li><li><%=msgMailMoreSecurity%></li></ol></div>'
                }
                function n() {
                    return '<div class="tips"><div class="tip-title"><%=msgValidatePhone%></div><p><%=msgValidatePhoneDescription%></p><ol class="tip-list"><li><%=msgUseForLogin%></li><li><%=msgUseForGetPwd%></li><li><%=msgPhoneMoreSecurity%></li></ol></div>'
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, i.helpers),
                l = l || {};
                var d, h = "", r = this;
                return h += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true" id="closeImport">×</button><h3 id="myModalLabel" class="modal-header-title"><%=msgLoginValidate%></h3></div><div class="modal-body old-modal"><div class="modal-main" id="modalMain"></div>',
                d = s["if"].call(e, e && e.showTotal, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(1, o, l),
                    data: l
                }),
                (d || 0 === d) && (h += d),
                d = s["if"].call(e, e && e.showMail, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(3, a, l),
                    data: l
                }),
                (d || 0 === d) && (h += d),
                d = s["if"].call(e, e && e.showMobile, {
                    hash: {},
                    inverse: r.noop,
                    fn: r.program(5, n, l),
                    data: l
                }),
                (d || 0 === d) && (h += d),
                h += "</div>"
            }
            ), {
                showTotal: !this.hideMobile && !this.hideMail,
                showMobile: this.hideMail,
                showMail: this.hideMobile
            })),
            this.$main = this.$("#modalMain"),
            this.$el.modal({
                keyboard: !0,
                backdrop: "static"
            }),
            this._showSelectValidate(),
            this
        },
        _showSelectValidate: function() {
            this._closeChildView(),
            this._selectValidateView = new s({
                hideMobile: this.hideMobile,
                hideMail: this.hideMail,
                mail: this.mail,
                mobile: this.mobile
            }),
            this.$main.html(this._selectValidateView.el),
            this._selectValidateView.on("showMailSend", this._showMailSend, this),
            this._selectValidateView.on("showPhoneSend", this._showPhoneView, this)
        },
        _showMailSend: function(i) {
            this._closeChildView(),
            this._mailSendView = new t({
                type: "VerifyAccount",
                mail: i
            }),
            this.$main.html(this._mailSendView.el)
        },
        _showPhoneView: function(i) {
            this._closeChildView(),
            this._phoneSendView = new l({
                type: "VerifyAccount",
                phone: i
            }),
            this.$main.html(this._phoneSendView.el),
            this._phoneSendView.on("success", this._onValidateOk, this)
        },
        _onValidateOk: function(i, e) {
            var s = this;
            resturl.bindAccount({
                code: e,
                account: i,
                entId: cache.entId,
                userId: cache.userId
            }, function(e) {
                if (constants.isResponseOK(e))
                    return s.trigger("success", i),
                    void s.close();
                switch (e) {
                case ErrorType.errorAccountUsed:
                    noty.alert(i.match(constants.pattern.email) ? msgs.msgMailBinded : msgs.msgMobileBinded);
                    break;
                case ErrorType.errorValidationCode:
                    noty.alert(msgs.msgErrorValidationCode);
                    break;
                default:
                    noty.error(msgs.msgServerError)
                }
            }
            )
        },
        _closeChildView: function() {
            this._selectValidateView && this._selectValidateView.close(),
            this._mailSendView && this._mailSendView.close(),
            this._phoneSendView && this._phoneSendView.close()
        },
        close: function() {
            this.$el.modal("hide"),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/setting/views/SettingLeftView", function(require, e, i) {
    i.exports = Backbone.View.extend({
        tagName: "div",
        id: "setting-left",
        initialize: function() {
            this.addListeners(),
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, t, s, n) {
                function a() {
                    return " hide-force "
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                t = this.merge(t, e.helpers),
                n = n || {};
                var l, h = "", o = this;
                return h += '<ul class="nav text-center nav-user-setting" style="margin-bottom:0"><li class="left-user-info"><a href="#user/setting"><i class="fa fa-user"></i> <%=msg999%></a></li><li class="left-user-pwd ',
                l = t.unless.call(i, i && i.canChangePwd, {
                    hash: {},
                    inverse: o.noop,
                    fn: o.program(1, a, n),
                    data: n
                }),
                (l || 0 === l) && (h += l),
                h += '"><a href="#user/resetpwd"><i class="fa fa-lock"></i> <%=msg63%></a></li><li class="left-user-set hide-private"><a href="#user/setsystem"><i class="fa fa-cog"></i> <%=msg1001%></a></li><li class="left-user-down"><a href="#user/downloadapp"><i class="fa fa-download"></i> <%=msg6%></a></li><li class="left-user-vers"><a href="#user/version"><i class="fa fa-info-circle"></i> <%=msg1004%></a></li></ul><div class="ac" style="font-size:14px;line-height:40px;"><a href="#index">< 返回云盘</a></div>'
            }
            ), {
                canChangePwd: model.currentUser.canChangePwd()
            })),
            this.onChangeHeight(),
            this
        },
        events: {
            "click ul li": "activeItem"
        },
        close: function() {
            this.undelegateEvents(),
            this.off(),
            this.remove()
        },
        rebind: function() {
            this.delegateEvents()
        },
        addListeners: function() {
            this.listenTo(model.setting, "change:width", this.onChangeWidth),
            this.listenTo(model.setting, "change:height", this.onChangeHeight)
        },
        onChangeWidth: function() {},
        onChangeHeight: function() {
            this.$el.height(model.setting.getMainboxHeight()),
            view.userInfoView && view.userInfoView.$el.height(model.setting.getMainboxHeight()),
            view.resetPwdView && view.resetPwdView.$el.height(model.setting.getMainboxHeight()),
            view.systemSettingView && view.systemSettingView.$el.height(model.setting.getMainboxHeight()),
            view.addValueServiceView && view.addValueServiceView.$el.height(model.setting.getMainboxHeight()),
            view.downloadAppView && view.downloadAppView.$el.height(model.setting.getMainboxHeight()),
            view.versionView && view.versionView.$el.height(model.setting.getMainboxHeight())
        },
        activeItem: function(e) {
            this.$("ul li.active").removeClass("active"),
            $(e.target).parent("li").addClass("active")
        },
        changeActive: function(e) {
            this.$("ul li.active").removeClass("active"),
            this.$(e).addClass("active")
        }
    })
}
);
;define("app/website/user/views/TakePhotoWindow", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "takePhotoWindow",
        className: "modal fade hide  modal-window take-photo-window",
        events: {
            "click #closeModal": "close"
        },
        initialize: function() {
            window.takePhotoCallback = function(e) {
                var t = "/res/" + _.strRight(e, "$");
                view.userInfoView.model.set("icon", t),
                model.currentUser.set("icon", t),
                view.takePhotoView.close()
            }
            ,
            this.render()
        },
        render: function() {
            var e = this;
            return this.$el.html(__html(Handlebars.template(function(e, t, o, a, s) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                o = this.merge(o, e.helpers),
                s = s || {},
                '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true" id="closeModal">&times;</button><h3><%=msg1126%></h3></div><div class="modal-body"><div id="takePhotoFlash"></div></div>'
            }
            ))),
            this.$el.on("shown", function() {
                e.show()
            }
            ),
            this.$el.modal({
                keyboard: !0,
                backdrop: "static"
            }),
            this
        },
        show: function() {
            swfobject.embedSWF("/os/swf/capturephotos/capturePhotos.swf", "takePhotoFlash", "480", "480", "9.0.0", "expressInstall.swf", {
                locale: webhelper.getLang(),
                UT: cache.token,
                uploadServletPath: function() {
                    var e = resturl.takePhotoUrl + "?" + $.param({
                        ei: cache.entId,
                        ui: cache.userId
                    });
                    return encodeURIComponent(e)
                }
                (),
                callback: "takePhotoCallback"
            }, {
                wmode: "transparent",
                allowFullScreen: "true"
            })
        },
        close: function() {
            this.$el.modal("hide"),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/setting/views/UserInfoView", function(require, e, t) {
    var i = require("app/website/user/views/TakePhotoWindow")
      , a = require("app/commons/utils/PrivateModifier")
      , l = require("app/website/user/views/ValidateWindow");
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "userInfoView",
        className: "overflow-auto-y user-info-setting",
        _modelBinder: void 0,
        _validateWindow: void 0,
        $birthday: void 0,
        events: {
            "click .status ul li ul li": "changeUserStatus",
            "click fieldset input[name=gender]": "setGender",
            "click #setting-userinfo": "updateUserinfo",
            "click .take-photo": "onTakePhoto",
            "click #bindMail": "_showValidateMail",
            "click #bindMobile": "_showValidateMobile",
            "click .exit-setting": "_beforeExit"
        },
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder,
            this.render()
        },
        render: function() {
            this.$el.html(__html(Handlebars.template(function(e, t, i, a, l) {
                function s() {
                    return 'readonly="readonly"'
                }
                function n() {
                    return '<span class="red-font"><%=msgValidated%></span>'
                }
                function o() {
                    return '<span class="btn btn-blue bind-btn" id="bindMail"><%=msgValidate%></span>'
                }
                function r() {
                    return '<span class="btn btn-blue bind-btn" id="bindMobile"><%=msgValidate%></span>'
                }
                this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                l = l || {};
                var d, c = "", m = this;
                return c += '<ul class="breadcrumb"><li class="active"><%=msg999%></li></ul><div class=\'user-info-set\'><div class="row"><div class="span2"><img class="img-avatar" id="user-icon"></div><div class="span7"><ul><li><label class="title"><%=msg1017%>:</label><span name="userName"></span></li><li><label class="title"><%=msg1018%>:</label><div class="status"><ul class="nav"><li class="dropdown"><div name="status-box"></div><label class="dropdown-toggle" data-toggle="dropdown"><span name="onlineStatus" class="online-status"></span><b class="caret"></b></label><ul class="dropdown-menu"><li value="online"><a href="#"><%=msg1019%></a></li><li value="busy"><a href="#"><%=msg1020%></a></li><li value="corbet"><a href="#"><%=msg1021%></a></li><li value="offline"><a href="###"><%=msgLeave%></a></li></ul></li></ul></div></li><li><label class="title"><%=msg1022%>:</label><input type="text" name="signature" id="signature" data-error-style="inline"placeholder="<%=msg1022%>"/></li><li><label class="title"><%=msg1024%>:</label><input type="button" class="btn btn-primary take-photo" value="<%=msg1024%>"/></li></ul></div></div><div class="clearfix"></div><div><fieldset><legend><%=msg1026%></legend><ul><li><label class="title"><%= msg41%>:</label><input type="text" id="realName" data-error-style="inline" name="realName"placeholder="<%=msg41%>"/></li><li><label class="title gender-title"><%=msg1029%>:</label> <input type="hidden" name="userGender"><div class="user-gender"><label class="radio inline bold-four"><input type="radio" name="gender" id="mgender" value="m"/><%=msg93%></label><label class="radio inline bold-four"><input type="radio" name="gender" id="fgender" value="f"/><%=msg94%></label></div></li><li><label class="title"><%=msg1032%>:</label><div id="birthday" class="input-append date"><input name="userBirthday" size="16" type="text" value="" readonly/><span class="add-on"><i class="icon-calendar"></i></span><input id="user-birthday" type="hidden" value=""></div></li><li><label class="title"><%=msg1033%>:</label> <span class="bold-four" name="age"></span></li><li><label class="title"><%=msg1034%>:</label><input type="text" id="hobby" name="hobby" placeholder="<%=msg1035%>"/></li></ul></fieldset></div><div><fieldset><legend><%=msg1036%></legend><ul><li><label class="title"><%=msg1037%>:</label> <span id="jobTitle" name="jobTitle"></span></li><li><label class="title"><%=msg1038%>:</label><input type="text" id="city" name="city" placeholder="<%=msg1038%>"/></li><li><label class="title"><%=msg1041 %>:</label><input type="text" id="major" name="major" placeholder="<%=msg1041%>"/></li><li><label class="title"><%=msg383%>:</label><input type="text" id="mail" name="mail" placeholder="<%=msg1043%>" ',
                d = i["if"].call(t, t && t.mailAuthed, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(1, s, l),
                    data: l
                }),
                (d || 0 === d) && (c += d),
                c += "/>",
                d = i["if"].call(t, t && t.mailAuthed, {
                    hash: {},
                    inverse: m.program(5, o, l),
                    fn: m.program(3, n, l),
                    data: l
                }),
                (d || 0 === d) && (c += d),
                c += '</li><li><label class="title"><%=msg1044%>:</label><input type="text" name="phone" placeholder="<%=msg1045%>"/></li><li><label class="title"><%=msg1046%>:</label><input type="text" id="mobile" name="mobile" placeholder="<%=msg1046%>" ',
                d = i["if"].call(t, t && t.mobileAuthed, {
                    hash: {},
                    inverse: m.noop,
                    fn: m.program(1, s, l),
                    data: l
                }),
                (d || 0 === d) && (c += d),
                c += "/>",
                d = i["if"].call(t, t && t.mobileAuthed, {
                    hash: {},
                    inverse: m.program(7, r, l),
                    fn: m.program(3, n, l),
                    data: l
                }),
                (d || 0 === d) && (c += d),
                c += '</li></ul></fieldset></div><button type="button" id="setting-userinfo" class="btn"><%=msg365%></button></div>'
            }
            ), this.model.toJSON()));
            var e = Backbone.ModelBinder.createDefaultBindings(this.el, "name");
            return e.icon = {
                selector: "#user-icon",
                elAttribute: "src",
                converter: this.getAvatar
            },
            e.onlineStatus = [{
                selector: "[name=status-box]",
                elAttribute: "class",
                converter: this.getOnline
            }, {
                selector: "[name=onlineStatus]",
                converter: constants.getUserStatusTip
            }],
            e.birthday = [{
                selector: "#user-birthday",
                elAttribute: "value",
                converter: this.getBirthday
            }, {
                selector: "[name=userBirthday]",
                converter: this.getBirthday
            }],
            e.age = {
                selector: "[name=age]",
                converter: this.getAge
            },
            this.$birthday = this.$("#birthday"),
            this._modelBinder.bind(this.model, this.el, e),
            this.$(".user-gender").find("input[value=" + this.model.get("gender") + "]").attr("checked", "checked"),
            this.addDatapicker(),
            seajs.isPrivate && a.modify(this),
            this
        },
        addDatapicker: function() {
            var e = this;
            this.$birthday.datetimepicker({
                pickerPosition: "bottom-left"
            }).on("hide", function() {
                var t = e.$("#user-birthday").attr("value");
                log.info("birthday:", t),
                t && (e.setBirthday(t),
                e.setAge())
            }
            )
        },
        rebind: function() {
            this.render(),
            this.delegateEvents()
        },
        _beforeExit: function() {
            view.mainbox.collapseContentLeft(cache.isCollapse)
        },
        getOnline: function(e, t) {
            return t + ""
        },
        getAvatar: function(e, t) {
            return t || constants.defaultIcon
        },
        getBirthday: function(e, t) {
            var i = "";
            if (t)
                if ("ModelToView" === e) {
                    var a = "en_US" === webhelper.getLang() ? "MM-DD-YYYY" : "YYYY-MM-DD";
                    i = constants.dateStrFromMisc(parseInt(t), a)
                } else
                    i = constants.getMillSec(t + " 00:00:00");
            return i
        },
        setBirthday: function(e) {
            e += " 00:00:00",
            this.model.set("birthday", constants.getMillSec(e))
        },
        getAge: function(e, t) {
            var i = 0;
            return t && -1 != t && (i = t),
            i
        },
        setAge: function() {
            var e = parseInt(constants.dateStrFromMisc(parseInt(this.model.get("birthday")), "YYYYMMDD"))
              , t = parseInt(moment().format("YYYYMMDD"));
            this.model.set("age", parseInt((t - e) / 1e4))
        },
        changeUserStatus: function(e) {
            var t = $(e.currentTarget).attr("value");
            return router.approuter.navigate("user/status/" + t, !0),
            this.model.set("onlineStatus", t),
            this.$(".status .nav li .caret").click(),
            !1
        },
        setGender: function(e) {
            this.model.set("gender", $(e.currentTarget).attr("value"))
        },
        onTakePhoto: function() {
            view.takePhotoView = new i,
            document.body.clientHeight < 610 && view.takePhotoView.$el.css("top", "1%")
        },
        updateUserinfo: function(e) {
            e.stopPropagation(),
            e.preventDefault();
            var t = (new Date).getTime();
            return this.model.get("birthday") > t ? void noty.alert(msgs.msgBirthdayError) : void this.model.updateUserInfo(function(e) {
                constants.isResponseOK(e) ? noty.success(msgs.msgSysSettingSuccess) : noty.error(msgs.msgServerError)
            }
            )
        },
        _showValidateMail: function() {
            return this.model.get("mail") ? this.model.get("mail").match(constants.pattern.email) ? (this._validateWindow && this._validateWindow.close(),
            void (this._validateWindow = new l({
                hideMobile: !0,
                mail: this.model.get("mail")
            }))) : void noty.alert(msgs.msgMailFormatError) : void noty.alert(msgs.msgEmailEmpty)
        },
        _showValidateMobile: function() {
            return this.model.get("mobile") ? this.model.get("mobile").match(constants.pattern.Mobile) ? (this._validateWindow && this._validateWindow.close(),
            this._validateWindow = new l({
                hideMail: !0,
                mobile: this.model.get("mobile")
            }),
            void this._validateWindow.on("success", this._onMobileAuth, this)) : void noty.alert(msgs.msgMobileFormatError) : void noty.alert(msgs.msg169)
        },
        _onMobileAuth: function(e) {
            this.model.set({
                mobile: e,
                mobileAuthed: !0
            }),
            this.render()
        },
        close: function() {
            this.$birthday.datetimepicker("remove"),
            this._modelBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/setting/views/ResetPwdView", function(require, s, e) {
    var r = require("security");
    e.exports = Backbone.View.extend({
        tagName: "div",
        id: "resetPwdView",
        className: "user-info-setting",
        _modelBinder: void 0,
        events: {
            "blur #oldPassword": "checkOldPassWord",
            "click #setting-pwd": "resetpwdSubmit"
        },
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder,
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(s, e, r, i, o) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                r = this.merge(r, s.helpers),
                o = o || {},
                '<ul class="breadcrumb"><li class="active"><%=msg63%></li></ul><form class="form-horizontal"><div class="control-group"><label class="control-label"><%=msg992%>: </label><div class="controls"><input type="password" id="oldPassword" data-error-style="inline" placeholder="<%=msg993%>"><span class="help-inline"></span></div></div><div class="control-group"><label class="control-label"><%=msg148%>: </label><div class="controls"><input type="password" id="newPassword" data-error-style="inline" placeholder="<%=msg995%>"><span class="help-inline"></span></div></div><div class="control-group"><label class="control-label"><%=msg149%>: </label><div class="controls"><input type="password" id="renewPassword" data-error-style="inline" placeholder="<%=msg997%>"><span class="help-inline"></span></div></div><div class="control-group"><div class="controls"><span id="setting-pwd" class="btn"><%=msg365%></span></div></div></form>'
            }
            ))),
            this._modelBinder.bind(this.model, this.$el),
            this
        },
        checkOldPassWord: function() {
            var s = model.currentUser.get("userId")
              , e = this.$("#oldPassword").val()
              , r = this.encodePassword(s, e, null )
              , i = this;
            resturl.checkUserPwd(r, function(s) {
                "OK" == s ? i.addTips("success", i.$("#oldPassword"), msgs.msgOldPwdCorrect) : i.addTips("error", i.$("#oldPassword"), msgs.msgOriginPassError)
            }
            )
        },
        resetpwdSubmit: function() {
            var s = model.currentUser.get("userId")
              , e = (model.currentUser.get("enterpriseId"),
            model.currentUser.get("userType"),
            this.$("#oldPassword").val())
              , r = this.$("#newPassword").val()
              , i = this.$("#renewPassword").val()
              , o = this;
            if (1 == this.checkPWD(e, r, i)) {
                var n = this.encodePassword(s, e, r);
                resturl.changePwd(n, function(s) {
                    o.dealResetpwd(s)
                }
                )
            }
        },
        dealResetpwd: function(s) {
            return constants.isResponseOK(s) ? (noty.success(msgs.msgEditPassSuccess),
            this.clearTips(this.$("#oldPassword")),
            this.clearTips(this.$("#newPassword")),
            void this.clearTips(this.$("#renewPassword"))) : s == ErrorType.errorWrongPWD ? void noty.error(msgs.msgOriginPassError) : void noty.error(msgs.msgEditPassFail)
        },
        encodePassword: function(s, e, i) {
            var o = {};
            if (i) {
                var n = r.getNonceDTO(s, i);
                o = {
                    entId: cache.entId,
                    userId: s,
                    agent: "web",
                    oldPasswrod: Crypto.SHA256(e),
                    nonce: n.nonce,
                    hashKey: n.hashKey,
                    newPassword: n.password
                }
            } else
                o = _.extend({
                    entId: cache.entId,
                    userId: s,
                    agent: "web"
                }, r.getNonceDTO(s, e));
            return o
        },
        addTips: function(s, e, r) {
            var i = e.parents(".control-group");
            "error" == s ? (i.addClass("error"),
            i.removeClass("success")) : (i.removeClass("error"),
            i.addClass("success")),
            i.find(".help-inline").html(r)
        },
        clearTips: function(s) {
            var e = s.parents(".control-group");
            e.removeClass("error"),
            e.removeClass("success"),
            e.find(".help-inline").html(""),
            e.find("input").val("")
        },
        checkPWD: function(s, e, r) {
            var i = this.$("#oldPassword")
              , o = this.$("#newPassword")
              , n = this.$("#renewPassword");
            return s.length < 6 || s.length > 30 ? (this.addTips("error", i, msgs.msgNewPassLength),
            !1) : e.length < 6 || e.length > 30 ? (this.addTips("error", o, msgs.msgNewPassLength),
            !1) : (this.addTips("success", o, "ok!"),
            e != r ? void this.addTips("error", n, msgs.msgRepasswordError) : (this.addTips("success", o, "ok!"),
            this.addTips("success", n, "ok!"),
            !0))
        },
        close: function() {
            this._modelBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/setting/views/SystemSettingView", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "systemSettingView",
        className: "user-info-setting",
        events: {
            "click input[name=sound]": "setSound",
            "click button#langSubmit": "langSubmit"
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, t, i, n, s) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                s = s || {},
                '<ul class="breadcrumb"><li class="active"><%=msg1001%></li></ul><div class="user-system-setting"><fieldset><legend><%=msgLangSetting%></legend><div><div class="controls"><label class="checkbox inline"><input type="radio" name="lang" value="zh_CN"/>中文简体</label></div><div class="controls"><label class="checkbox inline"><input type="radio" name="lang" value="zh_TW"/>中文繁體</label></div><div class="controls"><label class="checkbox inline"><input type="radio" name="lang" value="en_US"/>English</label></div></div><button id="langSubmit" type="submit" class="btn"><%=msg365%></button></fieldset></div>'
            }
            ))),
            this.$("input[name=lang]").each(function() {
                $(this).prop("value") == webhelper.getLang() && $(this).prop("checked", !0)
            }
            ),
            this
        },
        langSubmit: function() {
            var e = this.$('input:radio[name="lang"]:checked').val();
            constants.setCookie("lang", e),
            location.assign(constants.getWebsiteUrl(e))
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/setting/views/DownloadAppView", function(require, t, s) {
    s.exports = Backbone.View.extend({
        tagName: "div",
        id: "downloadAppView",
        className: "download-center",
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(t, s, d, i, a) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                d = this.merge(d, t.helpers),
                a = a || {},
                '<ul class="breadcrumb"><li class="active"><%=msg6%></li></ul><div class="page col-full"><div class="col-left" id="main"><p class="post-5487 page type-page status-publish hentry"><div class="entry"><div class="content-title"><%=msg894%></div><div class="client-center"><div class="twocol-one dimension"><table style="height:200px;"><tbody><tr><td class="width40"><img title="<%=msg895%>" alt="<%=msg895%>" src="/os/assets/img/download/dimension-code.png"></td><td><div class="down-title"><%=msg897%></div><div class="detail st"><%=msg898%></div></td></tr></tbody></table></div><div class="twocol-one last oatos-plus"><table><tbody><tr><td class="width40"><img title="OATOS<%=msg899%>" alt="Android <%=msg900%>" src="/os/assets/img/download/android-down.png"></td><td><div class="down-title">Android <%=msg901%></div><div class="detail st"><%=msg928%>: 3.6.0, <%=msg920%>: 16.95M<br/><%=msg904%>: <br>1. <%=msg905%><br>2. <%=msg906%></div><div><a target="_blank" id="androiddownload" class="button download" href="https://app.oatos.com/mobile/oatos_android.apk"></a></div></td></tr></tbody></table></div><div class="twocol-one"><table><tbody><tr class="alt-table-row"><td class="width40"><img style="position:relative;left:-10px;" alt="OATOS<%=msg907%>" src="/os/assets/img/download/iphone-down.png"title="OATOS<%=msg908%>"></td><td><div class="down-title">iPhone <%=msg901%></div><div class="detail st"><%=msg928%>: 3.6.0, <%=msg920%>: 6.3M<br/><%=msg904%>: <br/>1. iPhone<%=msg913%>"OATOS"<%=msg914%><br/>2. <%=msg915%></div><div><br/><a target="_blank" href="https://itunes.apple.com/cn/app/id673863619" class="button win-down st"><i class="iconDownload"></i>iPhone <%=msg900%></a><br/></div></td></tr></tbody></table></div><div class="twocol-one last oatos-plus"><table><tbody><tr class="alt-table-row"><td class="width40"><img alt="OATOS iPad<%=msg900%>" src="/os/assets/img/download/ipad-down.png"title="OATOS iPad<%=msg900%>"></td><td><div class="down-title">iPad <%=msg901%></div><div class="detail st"><%=msg919%>,iOS 6.1 <br><%=msg928%>: 3.6.0, <%=msg920%>: 8M<br/>1. <%=msg922%><br/></div><div><br/><a target="_blank" href="https://itunes.apple.com/cn/app/id777401801" class="button win-down st"><i class="iconDownload"></i>iPad <%=msg900%></a><br/></div></td></tr></tbody></table></div></div><div class="content-title"><%=msg923%></div><div class="doc-center"><div class="twocol-one"><table><tbody><tr><td class="width40"><img title="Windows <%=msg900%>" alt="Windows <%=msg900%>" src="/os/assets/img/download/windows-down.png"></td><td><div class="down-title">Windows <%=msg901%></div><div class="detail st"><%=msg928%>: 3.6.0<br/><div><br><a id="clientDown32" target="_blank" href="http://app.oatos.com/client/oatos_client.zip" class="button win-down st"><i class="iconDownload"></i>Win7/Win8 <%=msg929%></a><br/><a id="clientDown64" target="_blank" href="http://app.oatos.com/client/oatos_xp.zip" class="button win-down st"><i class="iconDownload"></i>WinXP <%=msg929%></a><br/><a id="clientNetFramework" target="_blank" href="http://app.oatos.com/client/oatos_xp_dotnetfw3.5.zip" class="button win-down st"><i class="iconDownload"></i>WinXP + .netframework3.5 客户端下载</a></div></div></td></tr></tbody></table></div><div class="twocol-one last oatos-plus"><table><tbody><tr class="alt-table-row"><td class="width40"><img alt="OATOS Mac<%=msg900%>" src="/os/assets/img/download/mac-down.png"title="OATOS Mac<%=msg900%>"></td><td><div class="down-title">Mac <%=msg900%></div><div class="detail st"><%=msg935%><br><%=msg928%></div><div><span class="button download wait"></span></div></td></tr></tbody></table></div></div><div class="content-title"><%=msg937%></div><div class="doc-center"><div class="twocol-one help-doc"><table><tbody><tr><td class="width40"><img alt="<%=msg938%>" src="/os/assets/img/download/help-doc.png" title="<%=msg938%>"></td><td><div class="down-title"><%=msg938%></div><div class="detail st"><%=msg941%><br><%=msg942%></div><div><a id="oatosGuide" class="button download" target="_blank" href="http://app.oatos.com/os/share.html?lc=7ed8ec1a89e44ab592ed5c465482c38b"></a></div></td></tr></tbody></table></div><div class="twocol-one last help-introduce"><table><tbody><tr class="alt-table-row"><td class="width40"><img alt="OATOS<%=msg938%>" src="/os/assets/img/download/intro-doc.png" title="<%=msg938%>"></td><td><div class="down-title"><%=msg945%></div><div class="detail st"><%=msg946%><br><%=msg947%></div><div><a id="oatosHelp" class="button download" target="_blank" href="http://app.oatos.com/os/share.html?lc=c093356678c34536a9367bac19597cd8"></a></div></td></tr></tbody></table></div></div></div></p></div></div>'
            }
            ))),
            this
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/setting/views/VersionView", function(require, i, l) {
    l.exports = Backbone.View.extend({
        tagName: "div",
        id: "versionView",
        className: "overflow-auto-y user-info-setting",
        _modelBinder: void 0,
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder,
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(i, l, s, t, n) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, i.helpers),
                n = n || {},
                '<ul class="breadcrumb"><li class="active"><%=msg1004%></li></ul><div class="version-show"><p class="version-title"><strong><%=msg1051%>:3.6.0</strong> <strong>2015/3/27</strong></p><ul><li>后台账号管理功能增强, 管理员可以修改用户姓名, 性别</li><li>企业管理员可以修改企业名称</li><li>部门管理员可以跨部门授权</li><li>下线春节活动功能</li><li>Bug修复和系统稳定性提升</li></ul><p class="version-title"><strong><%=msg1051%>:3.5.3</strong> <strong>2015/2/9</strong></p><ul><li>新版后台管理角色管理功能上线</li><li>2015年春节活动功能上线</li><li>新增文件秒传功能</li><li>Bug修复和系统稳定性提升</li></ul><p class="version-title"><strong><%=msg1051%>:3.5.0</strong> <strong>2014/12/26</strong></p><ul><li>新版后台管理功能上线, 界面更加明亮, 功能更完善</li><li>购买中心优惠码功能上线</li><li>2015元元旦优惠活动功能上线</li><li>全新的上传功能上线, 支持html5, 文件拖拽等功能</li><li>新版的文件预览功能上线, 用户体验大大提升</li><li>新版的文件分享浏览界面, 使用新的界面UI, 优化了加载速度</li><li>新版文件评论和标签功能, 文件分类和搜索功能更加强大</li><li>Bug修复和系统稳定性提升</li></ul><p class="version-title"><strong><%=msg1064%>:3.3.0</strong> <strong>2014/10/13</strong></p><ul><li>新版前后台权限设置功能, 界面更加明亮, 功能更完善</li><li>全文搜索功能增强, 支持拼音搜索</li><li>后台管理中操作按钮的优化, 风格统一</li><li>优化即时通讯功能, 提高消息的发送接收稳定性和速度</li><li>上传功能优化, 提升了文件上传的速度</li><li>Bug修复和系统稳定性提升</li></ul><p class="version-title"><strong><%=msg1064%>:3.2.0</strong> <strong>2014/09/11</strong></p><ul><li>新版文件列表界面和操作按钮, 界面风格更加明快和简洁</li><li>新增全文搜索功能, 可对用户的文档进行更精确的搜索</li><li>新增设置同步功能, 自动同步用户的文件到云盘中</li><li>上传功能优化, 提升了文件上传的速度</li><li>新版云视频会议功能上线</li><li>优化移动端分享文件调用app打开功能</li><li>优化即时通讯功能, 提高消息的发送接收稳定性和速度</li></ul><p class="history-version-title"><strong><%=msg1064%>:3.1.0</strong><strong>2014/08/14</strong></p><ul><li>优化购买中心, 增强用户购买的安全性;</li><li>Excel文件预览功能优化, 浏览体验更加友好;</li><li>TXT文件预览的修改和优化;</li><li>后台管理中新增\'重新发送短信或邮件\'功能;</li><li>主页头部操作按钮的调整;</li><li>移动端分享文件调用app打开功能;</li></ul><p class="history-version-title"><strong><%= msg1064 %>:3.0.0</strong> <strong>2014/07/21</strong></p><ul><li>新版购买中心功能, 购买空间和用户更加便捷;</li><li>优化图片预览功能, 加载速度大大提升;</li><li>界面调优，主导航和操作按钮样式调整，界面更清晰;</li><li>个人信息显示移动到了左边, 并更新了显示内容;</li><li>云盘文件新增缩略图浏览模式;</li><li>分享的文件中支持缩略图浏览模式;</li><li>文件/文件夹重命名可以直接在列表中完成, 不用弹窗显示;</li><li>新增文件/文件夹属性功能, 管理文件/文件夹更加方便;</li></ul><p class="history-version-title"><strong><%= msg1064 %>:2.9.0</strong> <strong>2014/06/12</strong></p><ul><li>分享功能优化，支持将文件外链用短信直接发送到对方手机;</li><li>文件分享页面优化，适配移动设备，直接打开可以预览的文件;</li><li>界面调优，主导航和操作按钮样式调整，界面更清晰;</li><li>系统性能优化并修改了一些BUG</li></ul></div>'
            }
            ))),
            this._modelBinder.bind(this.model, this.$el),
            this
        },
        close: function() {
            this._modelBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/setting/settingrouter", function(require, e, i) {
    var t = require("app/website/setting/views/SettingLeftView")
      , w = require("app/website/setting/views/UserInfoView")
      , n = require("app/website/setting/views/ResetPwdView")
      , s = require("app/website/setting/views/SystemSettingView")
      , o = require("app/website/setting/views/DownloadAppView")
      , v = require("app/website/setting/views/VersionView");
    i.exports = Backbone.Router.extend({
        routes: {
            "user/setting": "showUserSettingView",
            "user/userinfo": "setUserinfoView",
            "user/resetpwd": "resetPwdView",
            "user/setsystem": "setSystemView",
            "user/downloadapp": "downloadAppView",
            "user/version": "versionView"
        },
        initialize: function() {},
        after: function() {
            view.settingLeftView && view.settingLeftView.onChangeHeight()
        },
        showUserSettingView: function() {
            view.mainbox.collapseContentLeft(!1),
            view.settingLeftView = view.settingLeftView || new t,
            view.mainbox.updateContentLeft(view.settingLeftView),
            view.settingLeftView.changeActive(".left-user-info"),
            view.mainbox.hideSlideRight(),
            view.userInfoView ? (view.userInfoView.model = new UserDTO(model.currentUser.toJSON()),
            view.userInfoView.rebind()) : view.userInfoView = new w({
                model: new UserDTO(model.currentUser.toJSON())
            }),
            view.mainbox.updateContentRight(view.userInfoView)
        },
        resetPwdView: function() {
            view.resetPwdView ? view.resetPwdView.delegateEvents() : view.resetPwdView = new n({
                model: new Backbone.Model
            }),
            view.mainbox.updateContentRight(view.resetPwdView),
            view.settingLeftView.changeActive(".left-user-pwd")
        },
        setSystemView: function() {
            view.systemSettingView ? view.systemSettingView.delegateEvents() : view.systemSettingView = new s({
                model: model.currentUser
            }),
            view.mainbox.updateContentRight(view.systemSettingView),
            view.settingLeftView.changeActive(".left-user-set")
        },
        downloadAppView: function() {
            view.downloadAppView = view.downloadAppView ? view.downloadAppView : new o,
            view.mainbox.updateContentRight(view.downloadAppView),
            view.settingLeftView.$("ul li").each(function() {
                $(this).removeClass("active")
            }
            ),
            view.settingLeftView.$("li.left-user-down").addClass("active")
        },
        versionView: function() {
            view.versionView || (view.versionView = new v({
                model: model.currentUser
            })),
            view.mainbox.updateContentRight(view.versionView),
            view.settingLeftView.changeActive(".left-user-vers")
        }
    })
}
);
;define("app/website/webrouter", function(require, e) {
    document.title = msgs.msgWebsiteTitle,
    require.async("jquery-ztree");
    var t = "[webrouter]-"
      , i = require("app/commons/uikit/index/indexview")
      , s = require("app/website/headerview")
      , n = require("app/commons/uikit/index/mainboxview")
      , o = require("app/website/file/views/FileLeftView")
      , a = require("app/website/file/views/EntFileTable")
      , r = require("app/website/user/views/UserLayout")
      , l = (require("app/commons/uikit/file/EntFolderSelectTree"),
    require("app/commons/models/message/MessageListDTO"))
      , c = (require("app/commons/models/user/UserDTO"),
    require("app/website/message/views/MessageView"))
      , w = require("app/website/user/views/ValidateWindow")
      , g = require("app/website/chat/views/ChatTipView")
      , u = require("app/website/chat/views/ChatView")
      , m = require("app/website/file/filerouter")
      , d = require("app/website/setting/settingrouter")
      , h = require("app/website/file/EntDiskRouter")
      , v = require("app/website/file/PersonDiskRouter");
    window.privateModifier = require("app/commons/utils/PrivateModifier");
    var f = Backbone.Router.extend({
        resetRouters: ["user/show", "message", "phone", "file/show/:fildId"],
        fileLeftNavs: ["entFileTable", "personFileTable", "fileInterestView", "linkFileView", "fileCollectView", "recycle-main", "fullTxt"],
        windowActive: !0,
        msgTitleTimer: void 0,
        routes: {
            "": "homepage",
            index: "homepage",
            "user/show": "showUser",
            "user/login": "loginUser",
            "user/reg": "regUser",
            loginout: "loginOut",
            message: "showMessage",
            "slide/close": "closeSlideRight",
            "chat/:userId": "chatWithUser",
            "nav/close": "navClose",
            "chat/history/:userId": "chatHistoryList",
            "user/status/:status": "changeUserStatus",
            "usual/add/:userId": "addUsualContact",
            "usual/del/:userId": "delUsualContact"
        },
        initialize: function() {
            var e = this;
            this.listenTo(model.messageEvent, MessageType.ForceOffline, this.onForceOffline),
            this.listenTo(model.messageEvent, EventType.AmqConnect, this.onAmqConnect),
            this.listenTo(model.messageEvent, EventType.receiveChatMsg, this.onReceiveChatMsg),
            this.listenTo(model.messageEvent, EventType.receiveSysNotice, this.onReceiveSysNotice),
            this.listenTo(model.messageEvent, EventType.personDiskDisabled, this.onPerDiskDisabled),
            Amq.init(),
            $(".welcomePage").hide(),
            view.indexpage = new i({
                el: $("div.body")
            }),
            view.header = new s({
                model: model.currentUser,
                el: view.indexpage.$("#headerbox")
            }),
            $(window).blur(function() {
                e.windowActive = !1
            }
            ).focus(function() {
                e.windowActive = !0,
                e.clearMsgTitleTimer()
            }
            ),
            $(document).bind("contextmenu", function() {
                return !1
            }
            ),
            constants.addClipboardCallback()
        },
        before: function(e) {
            return e && (view.mainbox || "index" === e) ? this._isNeedReset(e) ? (this.cleanView(),
            !0) : !0 : (this.navigate("index", !0),
            !1)
        },
        _isNeedReset: function(e) {
            return _.contains(this.resetRouters, e) && !_.contains(this.fileLeftNavs, view.contentRight.id)
        },
        cleanView: function() {
            view.fileLeftView.render(),
            view.fileLeftView.delegateEvents(),
            view.mainbox.updateContentLeft(view.fileLeftView),
            view.mainbox.isContentViewShow(view.fileTable) || this.navigate("sharedisk/openfolder/entRoot", !0)
        },
        clearMsgTitleTimer: function() {
            $(document).attr("title", msgs.msgWebsiteTitle),
            this.msgTitleTimer && clearInterval(this.msgTitleTimer) && delete this.msgTitleTimer
        },
        _makeFileLeftView: function() {
            view.fileLeftView ? (view.fileLeftView.isHide() && (view.fileLeftView.render(),
            view.fileLeftView.delegateEvents(),
            view.mainbox.updateContentLeft(view.fileLeftView)),
            view.uploadView.initUpload()) : (view.fileLeftView = new o,
            view.mainbox.updateContentLeft(view.fileLeftView),
            view.uploadView.initUpload())
        },
        _makeEntFileTable: function() {
            view.fileTable = new a({
                collection: collection.currentFileList,
                entFileList: collection.entFileList
            }),
            view.mainbox.updateContentRight(view.fileTable),
            view.fileTable.changeFolder(model.rootEntFolder)
        },
        homepage: function() {
            if (log.debug("start homepage"),
            collection.currentFileList = new EntFileListDTO,
            view.mainbox = view.mainbox || new n({
                model: model.setting,
                el: view.indexpage.$("#mainbox")
            }),
            this._makeFileLeftView(),
            this._makeEntFileTable(),
            view.fileLeftView.activeLink(".left-nav-ent"),
            view.chatTipView = new g,
            view.chatTipView.initDialog(),
            view.chatView = new u({
                collection: collection.chatUserList,
                sysMsgList: collection.sysMsgList
            }),
            view.chatView.initDialog(),
            !seajs.isPrivate && !cache.showValidate) {
                var e = model.currentUser.get("mailAuthed") || model.currentUser.get("mobileAuthed");
                e || (cache.showValidate = !0,
                view.validateWindow = new w)
            }
            model.currentEnterprise.showDiskSpaceTip()
        },
        onReceiveChatMsg: function(e) {
            view.chatView && view.chatView.isVisibleDialog() ? this.chatWithUser(e.get("senderId")) : view.chatTipView.showDialog(e, msgs.msgNewMessage),
            this.windowActive || this.scrollTitle(e)
        },
        onReceiveSysNotice: function(e) {
            view.chatView && view.chatView.isVisibleDialog() ? this.readSysMsg() : view.chatTipView.showDialog(e, msgs.msgNewSystemMessage),
            this.windowActive || (this.msgTitleTimer && clearInterval(this.msgTitleTimer) && delete this.msgTitleTimer,
            this.msgTitleTimer = setInterval(function() {
                var e = document.title;
                $(document).attr("title", "OATOS" === e ? msgs.msgNewSystemMessage : "OATOS")
            }
            , 1e3))
        },
        chatWithUser: function(e) {
            e = parseInt(e);
            var t = cache.userId + "_" + e
              , i = collection.userList.get(e);
            if (!i)
                return !1;
            var s = cache.chatMsgListMap[t];
            if (s || (s = new l,
            cache.chatMsgListMap[t] = s),
            !i)
                return noty.alert(msgs.msgCanNotContactUser),
                !1;
            var n = collection.chatUserList.findWhere({
                userId: i.id
            });
            return n || collection.chatUserList.add(i),
            view.chatView.chatUser = i,
            view.chatView.showChatMsgDialog(),
            this.navigate("nav/close", !0),
            i
        },
        chatToUser: function(e) {
            var t = this.chatWithUser(e);
            t && view.chatView.switchChatUser(t)
        },
        readSysMsg: function() {
            0 !== collection.sysMsgList.length && (view.chatView.showSysMsgDialog(),
            this.navigate("nav/close", !0))
        },
        scrollTitle: function(e) {
            this.msgTitleTimer && clearInterval(this.msgTitleTimer) && delete this.msgTitleTimer,
            this.msgTitleTimer = setInterval(function() {
                var t = (e.get("senderName") || msgs.msgWebsiteTitle) + msgs.msgComming
                  , i = document.title;
                $(document).attr("title", i === msgs.msgWebsiteTitle ? t : msgs.msgWebsiteTitle)
            }
            , 500)
        },
        addUsualContact: function(e) {
            e = parseInt(e);
            var t = collection.userList.get(e);
            model.currentUser.setUsualContact(e, function(i) {
                constants.isResponseOK(i) ? (t.set("usualContact", !0),
                collection.usualContactList.add(t),
                noty.success((t.get("realName") || t.get("userName")) + msgs.msgAddSucc),
                model.messageEvent.trigger("add-contact", e)) : noty.alert(msgs.msgAddFail)
            }
            ),
            this.navigate("nav/close", !0)
        },
        delUsualContact: function(e) {
            e = parseInt(e);
            var t = collection.userList.get(e);
            model.currentUser.deleteUsualContact(e, function(i) {
                constants.isResponseOK(i) ? (collection.usualContactList.remove(t),
                t.set("usualContact", !1),
                noty.success((t.get("realName") || t.get("userName")) + msgs.msgDelSucc),
                model.messageEvent.trigger("remove-contact", e)) : noty.alert(msgs.msgDelFail)
            }
            ),
            this.navigate("nav/close", !0)
        },
        navClose: function() {
            document.title = msgs.msgWebsiteTitle
        },
        closeSlideRight: function() {
            view.mainbox.hideSlideRight(),
            this.navigate("nav/close")
        },
        showMessage: function() {
            view.mainbox.showSlideRight(),
            view.messageView && view.messageView.close(),
            view.messageView = new c,
            view.mainbox.updateSlideRight(view.messageView),
            this.navigate("nav/close", !0)
        },
        showUser: function() {
            view.userLayout ? (view.mainbox.updateSlideRight(view.userLayout),
            setTimeout(function() {
                view.userLayout.rebind()
            }
            , 10)) : (view.userLayout = new r({
                model: collection.departmentList
            }),
            view.mainbox.updateSlideRight(view.userLayout)),
            this.navigate("nav/close", !0)
        },
        loginOut: function() {
            model.currentUser.logout(),
            this.stopListening(),
            Amq && Amq.close(),
            constants.redirectToLogin(),
            window.setTimeout(function() {
                constants.redirectToLogin()
            }
            , 2e3)
        },
        chatHistoryList: function(e) {
            e = parseInt(e),
            collection.chatHistoryList = new MessageChatPageListDTO,
            collection.chatHistoryList.setBuddyUserId(e),
            view.chatHistoryView = new ChatHistoryView({
                collection: collection.chatHistoryList,
                cUserId: e
            }),
            view.chatHistoryView.setSender(e),
            view.chatHistoryView.setContentHeight(model.setting.getSlideContentHeight() - 70),
            view.messageView.$("#instanceMessageBox").html(view.chatHistoryView.el),
            view.chatHistoryPageView = new ChatHistoryPageView({
                collection: collection.chatHistoryList
            }),
            view.chatHistoryView.$(".pageBox").html(view.chatHistoryPageView.el),
            this.navigate("nav/close")
        },
        changeUserStatus: function(e) {
            log.info(t, "[changeUserStatus] prevOnlineStatus: ", model.currentUser.get("prevOnlineStatus"), ",  changeStatus: ", e),
            "offline" != model.currentUser.get("prevOnlineStatus") && "offline" === e && Amq.close(),
            "offline" == model.currentUser.get("prevOnlineStatus") && "offline" != e && (Amq.close(),
            Amq.init()),
            model.currentUser.changeUserStatus(e)
        },
        onForceOffline: function(e) {
            var i = JSON.parse(e.get("msgBody"));
            if (!i.agent)
                return log.warn(t, "miss agent in message body! message: ", e),
                !1;
            switch (i.agent) {
            case "web":
                if (!i.clientId)
                    return log.warn(t, "miss clientId in message body! message: ", e),
                    !1;
                if (i.clientId === constants.getCookie("ci"))
                    return log.info(t, "login message send from yourself! just pass it!"),
                    !1;
                noty.alert("您的账号在其他的Web浏览器上登录，请确认此账号的安全.");
                break;
            case "desktop":
                noty.alert("您的账号在电脑的Windows客户端上登录，请确认此账号的安全.");
                break;
            case "android":
                noty.alert("您的账号在Android上登录，请确认此账号的安全.");
                break;
            case "iPhone":
            case "appstore-iPhone":
                noty.alert("您的账号在iPhone上登录，请确认此账号的安全.");
                break;
            case "iPad":
            case "appstore-iPad":
                noty.alert("您的账号在iPad上登录，请确认此账号的安全.")
            }
        },
        onPerDiskDisabled: function() {
            noty.alert(msgs.msgPersonDiskClose, function() {
                window.location.reload()
            }
            )
        },
        onAmqConnect: function() {
            log.info(" Amq connect [OK]!"),
            resturl.getUnreadMsg(cache.baseParam, function(e) {
                return constants.isResError(e) ? !1 : (_.each(e, function(e) {
                    Amq.handleMessage(e, "[getUnreadMsg]-")
                }
                ),
                void log.info(t, "[REST]-[getUnreadMsg] messageList: ", e))
            }
            )
        }
    });
    e.initialize = function() {
        var e = "[initialize]-";
        router.approuter = new f,
        router.fileRouter = new m,
        router.shareDiskRouter = new h,
        router.onlineDiskRouter = new v,
        router.setting = new d,
        router.fileRouter.before = router.shareDiskRouter.before = router.onlineDiskRouter.before = router.setting.before = function(i) {
            return view.mainbox || "index" === i ? !0 : (log.warn(t, e, "change route from: ", i, ", to: index"),
            this.navigate("index", !0),
            !1)
        }
        ,
        router.fileRouter.after = router.shareDiskRouter.after = router.onlineDiskRouter.after = router.setting.after = function() {
            document.title = msgs.msgWebsiteTitle
        }
        ,
        Backbone.history.start(),
        -1 === location.href.indexOf("#index") && router.approuter.navigate("index", !0)
    }
}
);
;define("app/website/main", function(require) {
    function e() {
        model.setting = new c,
        model.currentUser = new r,
        model.currentEnterprise = new l,
        model.messageEvent = new f,
        model.rootEntFolder = (new s).initRootFolder(),
        model.rootPersonFolder = (new u).initRootFolder(),
        collection.entFileList = new m,
        collection.entFileList.add(model.rootEntFolder),
        collection.personFileList = new p,
        collection.personFileList.add(model.rootPersonFolder),
        collection.currentFileList = new m,
        collection.uploadFileList = new w,
        collection.completeFileList = new w,
        collection.departmentList = new a,
        collection.userList = new d,
        collection.chatUserList = new L,
        collection.usualContactList = new g,
        collection.fileBreadList = new F([model.rootEntFolder]),
        collection.currentFileList = new m,
        model.currentFolder = new s(model.rootEntFolder.toJSON()),
        collection.sendFileList = new UploadFileListDTO,
        model.currentUser.getLoginUserProfile(function() {
            model.currentUser.isAdmin() && model.rootEntFolder.set("permissionDTO", {
                upload: !0,
                write: !0
            }),
            model.currentEnterprise.fetch(function() {
                i.setCookie("en", model.currentEnterprise.get("entName")),
                i.setCookie("un", model.currentUser.get("userName"));
                var e = require("app/website/webrouter");
                e.initialize(),
                o()
            }
            )
        }
        )
    }
    function o() {
        collection.departmentList.fetch(function(e) {
            webhelper.isIE8() && e.length > 1e3 ? t(e) : n(e),
            collection.departmentList.trigger("department: init", collection.departmentList),
            log.info("[ajax] department load -> OK"),
            collection.usualContactList.fetch();
            var o = collection.userList.get(model.currentUser.id);
            o && model.currentUser.set({
                deptId: o.get("deptId"),
                deptName: o.get("deptName")
            })
        }
        )
    }
    function t(e) {
        for (var o = []; e.length; )
            o.push(e.splice(0, 1e3));
        _.each(o, function(e, o) {
            setTimeout(function() {
                (new Date).valueOf();
                collection.userList.add(_.map(e, function(e) {
                    return new r(e)
                }
                ))
            }
            , 2e3 * o)
        }
        )
    }
    function n(e) {
        collection.userList.reset(_.map(e, function(e) {
            return new r(e)
        }
        ))
    }
    webhelper.initBackboneWeb(),
    window.onerror = function(e) {
        return log.error("error happen! err: ", e),
        !1
    }
    ;
    var i = require("app/commons/utils/constants");
    window.constants = i,
    window.cache = {
        token: void 0,
        userId: void 0,
        showType: i.getCookie("stp") || "list",
        clientId: i.getCookie("ci") || webhelper.guid(),
        baseParam: void 0,
        chatMsgListMap: {},
        cachePath: void 0,
        jsonPath: void 0,
        folderPath: [],
        folderNonius: void 0,
        pathType: void 0
    },
    window.Amq = require("app/website/message/handler/MsgListener"),
    function() {
        return i.getCookie("ut") ? void (cache.token = i.getCookie("ut")) : void location.assign(i.getLoginUrl())
    }
    ();
    var l = require("app/commons/models/ent/EnterpriseDTO")
      , s = require("app/commons/models/file/EntFileDTO")
      , r = require("app/commons/models/user/UserDTO")
      , c = require("app/commons/models/user/SettingDTO")
      , d = (require("app/commons/models/user/DepartmentDTO"),
    require("app/commons/models/user/UserListDTO"))
      , a = require("app/commons/models/user/DepartmentListDTO")
      , m = require("app/commons/models/file/EntFileListDTO")
      , p = require("app/commons/models/file/PersonFileList")
      , u = require("app/commons/models/file/PersonFileDTO")
      , w = require("app/commons/models/file/UploadFileListDTO")
      , f = require("app/commons/models/message/MessageEventDTO")
      , L = require("app/website/chat/models/ChatUserListDTO")
      , g = require("app/website/user/models/UsualContactListDTO")
      , F = require("app/website/file/models/FileBreadListDTO");
    $(function() {
        $.fn.editable.defaults.mode = "inline",
        $.fn.datetimepicker.defaults = i.getDatetimepickerSet(),
        e()
    }
    )
}
);
;define("app/website/upload/UserItem", function(require, e, i) {
    i.exports = Backbone.View.extend({
        tagName: "ul",
        className: "user-item inline-block label label-info",
        events: {
            "click .cs-remove-user": "removeUser"
        },
        initialize: function() {
            this.collection = this.options.collection,
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, i, s, t, l) {
                this.compilerInfo = [4, ">= 1.0.0"],
                s = this.merge(s, e.helpers),
                l = l || {};
                var o, n, a = "", r = "function", c = this.escapeExpression;
                return a += "<li>",
                (n = s.displayName) ? o = n.call(i, {
                    hash: {},
                    data: l
                }) : (n = i && i.displayName,
                o = typeof n === r ? n.call(i, {
                    hash: {},
                    data: l
                }) : n),
                a += c(o) + '</li><li class="cs-remove-user cursor-pointer"><i class="icon-custom-remove"></i></li>'
            }
            ), {
                displayName: this.model.get("userName")
            })),
            this
        },
        removeUser: function() {
            this.collection.remove(this.model)
        },
        close: function() {
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
;define("app/website/user/views/DepartmentUserTree", function(require, e, t) {
    t.exports = Backbone.View.extend({
        tagName: "div",
        id: "departmentUserTreeWrapper",
        className: "user-layout ",
        zTree: void 0,
        initialize: function() {
            this.listenTo(collection.departmentList, EventType.loadDepartment, this.addDepartmentNodes),
            this.render()
        },
        render: function() {
            this.$el.html("<ul id='departmentUserTree' class='departmentUserTree user-tree ztree'></ul> ");
            var e = this;
            this.zTree = $.fn.zTree.init(this.$("ul"), {
                view: {
                    dblClickExpand: !1,
                    showLine: !1,
                    selectedMulti: !1,
                    addDiyDom: function(t, n) {
                        e.showAvatar(n, e)
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
                        return e.zTree.expandNode(n),
                        !0
                    }
                }
            }, []),
            this.collection.length > 0 && this.addDepartmentNodes(this.collection)
        },
        showDialog: function(e) {
            var t = this;
            $.dialog({
                title: "添加参会人员",
                content: this.el,
                max: !1,
                min: !1,
                width: 200,
                height: 320,
                button: [{
                    name: "添加",
                    callback: function() {
                        var n = t.getCheckUsers();
                        e(n)
                    }
                }, {
                    name: msgs.msg87,
                    callback: function() {
                        t.reset()
                    }
                }]
            })
        },
        showAvatar: function(e, t) {
            if ("user" === e.type) {
                var n = collection.userList.get(e.id)
                  , a = t.$("#" + e.tId + "_a .button")
                  , r = n.get("icon") || constants.defaultIcon
                  , i = "<img alt='avatar' src='" + r + "' >";
                a.append(i)
            }
        },
        reset: function() {
            this.zTree.checkAllNodes(!1)
        },
        getCheckUsers: function() {
            var e = this.zTree.getCheckedNodes(!0);
            return _.map(_.where(e, {
                type: "user"
            }), function(e) {
                return collection.userList.where({
                    userId: e.id
                })[0]
            }
            )
        },
        showCheckbox: function(e) {
            this.zTree.setting.check.enable = e
        },
        addDepartmentNodes: function(e) {
            e.each(function(t) {
                this._addDepartmentNode(e, t)
            }
            , this)
        },
        _addDepartmentNode: function(e, t) {
            var n = this.zTree.getNodeByParam("id", t.id);
            if (n)
                return n;
            var a = null ;
            t.get("parentId") && (a = this.zTree.getNodeByParam("id", t.get("parentId")),
            a || (a = this._addDepartmentNode(e, e.get(t.get("parentId")))));
            var r = this.zTree.addNodes(a, {
                id: t.get("departmentId"),
                parentId: t.get("parentId") || 0,
                name: t.get("name"),
                open: !1,
                type: "department",
                isParent: !0
            }, !0);
            return this.addUserNodes(collection.userList.where({
                departmentId: t.get("departmentId")
            })),
            r[0]
        },
        addUserNodes: function(e) {
            _.each(e, function(e) {
                var t = e.get("deptId") ? this.zTree.getNodeByParam("id", e.get("deptId")) : null ;
                this.zTree.addNodes(t, {
                    id: e.get("userId"),
                    parentId: e.get("deptId") || 0,
                    name: e.getDisplayName(),
                    open: !1,
                    type: "user",
                    isParent: !1,
                    iconSkin: "user_avatar"
                }, !0)
            }
            , this)
        }
    })
}
);
;define("app/website/user/views/ServiceView", function(require, e, a) {
    a.exports = Backbone.View.extend({
        tagName: "div",
        id: "service-price-box",
        className: "modal fade",
        _modelBinder: void 0,
        _bindings: void 0,
        initialize: function() {
            this._modelBinder = new Backbone.ModelBinder,
            this.render()
        },
        render: function() {
            return this.$el.html(__html(Handlebars.template(function(e, a, i, t, s) {
                return this.compilerInfo = [4, ">= 1.0.0"],
                i = this.merge(i, e.helpers),
                s = s || {},
                '<div class="service-modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button></div><div class="contentBox"><img src="/os/assets/img/common/service.png" style="width: 560px; height: 304px;overflow-y:scroll" class="service-image" name="image_path" usemap="#paymap" alt="OATOS"/><map name="paymap" id="paymap"><area shape="rect" coords="141,245,422,290" href="" target="_blank" alt="oatos payService" title=\'<%=msg291%>\' name="pay_area"/></map></div>'
            }
            ))),
            this.$("#paymap area").attr("href", constants.getBuyUrl()),
            this.$el.modal({
                keyboard: !0,
                backdrop: "static"
            }),
            this
        },
        close: function() {
            this._modelBinder.unbind(),
            this.off(),
            this.undelegateEvents(),
            this.remove()
        }
    })
}
);
