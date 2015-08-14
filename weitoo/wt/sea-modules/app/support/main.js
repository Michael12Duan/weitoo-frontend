define("app/support/services/message", function(require, e, s) {
    s.exports = function(e) {
        var s = {
            msg1: ["登录", "登錄", "Login"],
            msg2: ["注册", "註冊", "Register"],
            msg3: ["产品介绍", "產品介紹", "Features"],
            msg4: ["私有云", "私有云", "Private Cloud"],
            msg5: ["客户案例", "客戶案例", "Use Case"],
            msg6: ["下载中心", "下載中心", "Download"],
            msg7: ["帮助中心", "幫助中心", "Help"],
            msg8: ["关于我们", "關於我們", "About"],
            msg9: ["燕麦企业云盘", "燕麥企業雲盤", "OATOS"],
            msg11: ["互动社区", "互動社區", "Forums"],
            msg12: ["关注燕麦企业云盘", "關注燕麥", "Follow OATOS"],
            msg13: ["服务条款", "服務條款", "Terms of Service"],
            msg14: ["粤ICP证010221号", "粵ICP證010221號", "Guang Dong ICP Record No.010221"],
            msg16: ["版权所有", "版權所有", "Rights Reserved"],
            msg18: ["企业", "企業", "Company"],
            msg19: ["企业名称", "企業名稱", "Enterprise Name"],
            msg20: ["账号", "賬號", "Account"],
            msg22: ["密码", "密碼", "Password"],
            msg24: ["使用HTTPS", "使用HTTPS", "Use HTTPS"],
            msg25: ["域账号", "域用戶", "Domain account"],
            msg27: ["立即注册", "立即註冊", "Register now"],
            msg28: ["获取燕麦企业云盘永久免费服务", "獲取燕麥永久免費服務", "Get Free service from OATOS"],
            msg29: ["创建免费的燕麦企业云盘", "創建一個免費的燕麥企業雲盤", "Create free OATOS accounts"],
            msg30: ["企业登录信息", "企業登錄信息", "Enterprise login info"],
            msg32: ["企业或项目名称", "公司或項目名稱", "The name of project, team or company"],
            msg34: ["管理员账号", "管理員賬號", "Administrator account"],
            msg36: ["位数字、字母混合", "位數字、字母混合", "digits and letters mixed"],
            msg37: ["确认密码", "確認密碼", "Confirm password"],
            msg38: ["再次输入密码", "再次輸入密碼", "Re-enter password"],
            msg40: ["姓名", "姓名", "Name"],
            msg41: ["真实姓名", "真實姓名", "Real name"],
            msg43: ["常用的邮箱", "常用的郵箱", "Email address"],
            msg45: ["手机或座机号码", "手機或座機號碼", "Phone No."],
            msg46: ["验证码", "驗證碼", "Verification code"],
            msg48: ["换一张", "換一張", "Next"],
            msg49: ["已经阅读并同意", "我已經閱讀並同意", "Have read and agreed with"],
            msg50: ["《燕麦企业云盘服务条款》", "《燕麥服務條款》", "《OATOS Terms of Service》"],
            msg52: ["已有燕麦账号", "已有燕麥賬號", "Have OATOS account"],
            msg53: ["立即登录", "立即登錄", "Login Now"],
            msg54: ["技术支持：", "技術提供：", "Support:"],
            msg55: ["深圳市企业云科技有限公司", "深圳市企業雲科技有限公司", "Shen Zhen Qycloud Technology Co., Ltd."],
            msg59: ["已锁定", "已鎖定", "Locked"],
            msg60: ["已关闭", "已關閉", "Closed"],
            msg61: ["操作", "操作", "Operation"],
            msg62: ["修改权限", "修改權限", "Change the permission"],
            msg63: ["修改密码", "修改密碼", "Change the passwrod"],
            msg64: ["修改资料", "修改資料", "Change the information"],
            msg65: ["更换部门", "更換部門", "Change the department"],
            msg66: ["删除账号", "刪除賬號", "Delete the account"],
            msg67: ["个人文件夹设置", "個人文件設置", "Personal files settings"],
            msg68: ["账号设置", "賬號設置", "Account settings"],
            msg69: ["新建账号", "新建賬號", "Create account"],
            msg70: ["批量导入账号", "批量導入賬號", "Batch import accounts"],
            msg73: ["性别", "性別", "Gender"],
            msg74: ["部门", "部門", "Department"],
            msg75: ["最近登录", "最近登錄", "Latest login"],
            msg76: ["创建者", "創建者", "Creator"],
            msg77: ["个人文件夹", "個人文件夾", "Personal folders"],
            msg79: ["设置文件夹权限", "設置文件夾權限", "Set the folder permission"],
            msg80: ["请选择该账号管理的文件夹!", "請選擇文件夾設置文件權限！ ", "Please choose the folders that the selected account can manage"],
            msg81: ["选择文件夹", "選擇文件夾", "Choose folders"],
            msg82: ["文件夹", "文件夾", "Folders"],
            msg83: ["权限", "權限", "Permission"],
            msgSetPermission: ["设置权限", "設置權限", "Set permission"],
            msg85: ["继续选择", "繼續選擇", "Go on choosing"],
            msg86: ["确定", "確定", "Confirm"],
            msg87: ["取消", "取消", "Cancel"],
            msg88: ["登录账号", "登陸賬號", "Login Account"],
            msg89: ["必填", "必填", "Required"],
            msg93: ["男", "男", "Male"],
            msg94: ["女", "女", "Female"],
            msg95: ["企业邮箱", "企業郵箱", "Enterprise Email"],
            msg97: ["登录密码", "登陸密碼", "Login Password"],
            msg101: ["工号", "工號", "ID No."],
            msg102: ["职位", "職位", "Position"],
            msg103: ["所有部门", "所有部門", "All departments"],
            msg108: ["账号", "賬號", "Account:"],
            msg113: ["处理中", "處理中", "Processing"],
            msg127: ["批量导入账号结果", "批量導入賬號結果", "The results of batch importing accounts"],
            msg136: ["校验", "校驗", "Verification"],
            msg137: ["重新导入", "重新導入", "Import again"],
            msg138: ["的个人文件设置", "的個人文件設置", "\\'s personal files setting"],
            msg139: ["个人文件", "個人文件", "Personal files:"],
            msg140: ["开启", "開啟", "On"],
            msg141: ["关闭", "關閉", "Off"],
            msg142: ["关闭个人文件将删除个人文件的所有文件，请谨慎操作!", "關閉個人文件將刪除個人文件的所有文件，請謹慎操作!", "Warning ! If you disable the personal files, all the files that it contained will be deleted."],
            msg143: ["个人文件夹容量", "個人文件容量：", "The storage of personal files:"],
            msg146: ["密码重置", "密碼重置", "Reset password"],
            msg147: ["新密码", "新密碼", "New password: "],
            msg148: ["新密码", "新密碼", "New password"],
            msg149: ["确认密码", "確認密碼", "Confirm password"],
            msg154: ["导入模板文件", "導入模板文件", "Import template files"],
            msg155: ["选择文件", "選擇文件", "Choose files"],
            msg156: ["删除", "刪除", "Delete"],
            msg157: ["确定导入", "確定導入", "Confirm to import"],
            msg158: ["批量导入说明", "批量導入說明", "Batch import introduction:"],
            msg159: ["请先", "請先", "Please"],
            msg160: ["下载导入模板", "下載導入模板", "download the template at first"],
            msg161: ["填写模板内容后导入模板。", "填寫模板內容後再導入模板。 ", "then fill in the template and import again"],
            msg162: ["下载模板", "下載模板", "&nbsp;Download template&nbsp;"],
            msg163: ["导入账号及部门信息成功后，请设置账号所要管理文件夹的权限，否则账号将无法访问云盘文件。", "僅導入賬號及部門信息，導入成功後請設置賬號文件權限，否則賬號將無法訪問雲盤文件。 ", "Please set the folder permissions right after successfully importing account and department, otherwise the imported accounts will not be able to see the enterprise files in OATOS."],
            msg164: ["请按规范正确填写模板内容；内容不符合规范，将无法导入系统。", "請按要求正確填寫模板；如果內容不符合規範，將校驗失敗，不能導入。 ", "Please fill in the template according to the requirements; if not, it can\\'t be imported."],
            msg165: ["可以在账号设置中查看账号相关信息，并设置相应文件的权限；也可在高级设置中使用角色权限批量设置文件权限。", "可以在賬號設置查看賬號並設置文件​​權限；也可在高級設置使用角色權限管理批量設置文件權限。 ", "You can view the account information and set accordingly permissions in the account settings; and also can batch set the file permissions in the advanced settings"],
            msg167: ["导入校验", "導入校驗", "Verification"],
            msg168: ["确定", "確認", "Confirm"],
            msg169: ["请输入您常用的手机号", "請輸入您常用的手機號", "Enter your phone number used: "],
            msg170: ["发送验证码", "發送驗證碼", "Send verification code"],
            msg171: ["请输入短息验证码：", "請輸入短息驗證碼：", "Please enter the verification code short interest: "],
            msg174: ["开通云电话会议服务", "開通雲電話會議服務", "Open cloud conference call services"],
            msg175: ["温馨提示", "溫馨提示：", "温馨提示："],
            msg176: ["燕麦云电话会议无需任何硬件投入，直接通过客户端开会，高品质通话效果，语音清晰流畅，带给您面对面交谈的体验效果；", "燕麥雲電話會議無需任何硬件投入，直接通過客戶端開會，高品質通話效果，語音清晰流暢，帶給您面對面交談的體驗效果；", "OATOS云电话会议无需任何硬件投入，直接通过客户端开会，高品质通话效果，语音清晰流畅，带给您面对面交谈的体验效果；"],
            msg177: ["支持一对一通话及20人以内（包含20人）的云电话会议，无需再疲于奔波于总部与工作岗位之间，让管理者真正实现了运筹帷幄之中，决胜千里之外。", "支持一對一通話及20人以內（包含20人）的雲電話會議，無需再疲於奔波於總部與工作崗位之間，讓管理者真正實現了運籌帷幄之中，決胜千里之外。 ", "支持一对一通话及20人以内（包含20人）的云电话会议，无需再疲于奔波于总部与工作岗位之间，让管理者真正实现了运筹帷幄之中，决胜千里之外。"],
            msg178: ["恭喜您开通成功！", "恭喜您開通成功！ ", "恭喜你开通成功！"],
            msgCompere: ["主持人", "主持人", "主持人"],
            msg179: ["主叫号码", "主叫號碼", "主叫号码"],
            msg180: ["被叫号码", "被叫號碼", "被叫号码"],
            msg181: ["开始时间", "開始時間", "开始时间"],
            msgCallTime: ["呼出时间", "呼出時間", "呼出时间"],
            msgMeetingCallTime: ["发起时间", "發起時間", "发起时间"],
            msgConnectedTime: ["接通时间", "接通時間", "接通时间"],
            msg182: ["结束时间", "結束時間", "结束时间"],
            msgCallStatus: ["通话状态", "通話狀態", "通话状态"],
            msgMeetingMembers: ["会议人次(人)", "會議人次(人)", "会议人次(人)"],
            msgCallLength: ["通话时长(分钟)", "通話時長(分鐘)", "通话时长(分钟)"],
            msgCallTotalLength: ["会议时长(分钟)", "會議時長(分鐘)", "会议时长(分钟)"],
            msgMeetingMemberPhone: ["参会人员号码", "參會人員號碼", "参会人员号码"],
            msg183: ["时长（分钟）", "時長（分鐘）", "时长（分）"],
            msg184: ["费用（元）", "費用（元）", "费用（元）"],
            msg185: ["套餐名称", "套餐名稱", "套餐名称"],
            msg186: ["购买时间", "購買時間", "购买时间"],
            msg187: ["套餐分钟数(分钟)", "套餐分鐘數(分鐘)", "套餐分鐘數(分)"],
            msg188: ["单价（元）", "單價（元）", "单价（元）"],
            msg189: ["金额（元）", "金額（元）", "金额（元）"],
            msg190: ["套餐管理", "套餐管理", "套餐管理"],
            msg191: ["总时长（分钟）", "總時長（分鐘）", "Totaltime:（minutes）"],
            msg192: ["剩余时长(分钟)", "剩餘時長(分鐘)", "Availabletime: (minutes)"],
            msg193: ["续费", "續費", "续费"],
            msg194: ["购买记录", "購買記錄", "购买记录"],
            msg195: ["账单记录", "賬單記錄", "账单记录"],
            msg196: ["支付结果", "支付結果", "支付结果"],
            msg197: ["支付失败", "支付失敗", "支付失败"],
            msg198: ["抱歉，您未能完成付款，请重新付款", "抱歉，您未能完成付款，請重新付款", "抱歉，您未能完成付款，请重新付款"],
            msg199: ["重试", "重試", "重试"],
            msg200: ["支付成功", "支付成功", "支付成功"],
            msg201: ["您已成功付款，对方将立即收到您的付款，为您开通优惠套餐", "您已成功付款，對方將立即收到您的付款，為您開通優惠套餐", "您已成功付款，对方将立即收到您的付款，为您开通优惠套餐"],
            msg203: ["开通服务", "開通服務", "开通服务"],
            msg204: ["开通您需要的云电话会议服务", "開通您需要的雲電話會議服務", "开通您需要的云电话会议服务"],
            msg205: ["选择号码", "選擇號碼", "选择号码"],
            msg206: ["选择您需要的号码", "選擇您需要的號碼", "选择您需要的号码"],
            msg207: ["选择套餐", "選擇套餐", "选择套餐"],
            msg208: ["选择您需要的套餐", "選擇您需要的套餐", "选择您需要的套餐"],
            msg209: ["开通成功", "開通成功", "开通成功"],
            msg210: ["开通云电话成功，去体验吧", "開通雲電話成功，去體驗吧", "开通云电话成功，去体验吧"],
            msg215: ["使用现有号码", "使用現有號碼", "使用现有号码"],
            msg216: ["新办电信号码", "新辦電信號碼", "新办电信号码"],
            msg218: ["呼叫显示号码是指与电话会议连接的号码。会议主持人在燕麦企业云盘上发起会议，呼叫显示号码将依次呼叫连接主持人、参会人A、参会人B等；", "呼叫顯示號碼是指與電話會議連接的號碼。會議主持人在燕麥企業雲盤上發起會議，呼叫顯示號碼將依次呼叫連接主持人、參會人A、參會人B等；", "呼叫显示号码是指与电话会议连接的号码。会议主持人在OATOS企业云盘上发起会议，呼叫显示号码将依次呼叫连接主持人、参会人A、参会人B等；"],
            msg219: ["呼叫显示号码，仅支持电信手机号码或者企业座机（总机号码）；", "呼叫顯示號碼，僅支持電信手機號碼或者企業座機（總機號碼）；", "呼叫显示号码，仅支持电信手机号码或者企业座机（总机号码）；"],
            msg220: ["填写电信手机号码，点击发送验证码，系统将自动发送验证码到该手机；", "填寫電信手機號碼，點擊發送驗證碼，系統將自動發送驗證碼到該手機；", "填写电信手机号码，点击发送验证码，系统将自动发送验证码到该手机；"],
            msg221: ["企业座机请填写区号+企业总机号码，例如0755xxxxxxx，点击发送验证码，系统将自动呼叫您所填写的号码，进行语音验证码提示，敬请留意。", "企業座機請填寫區號+企業總機號碼，例如0755xxxxxxx，點擊發送驗證碼，系統將自動呼叫您所填寫的號碼，進行語音驗證碼提示，敬請留意。 ", "企业座机请填写区号+企业总机号码，例如0755xxxxxxx，点击发送验证码，系统将自动呼叫您所填写的号码，进行语音验证码提示，敬请留意。"],
            msg222: ["100分钟送10分钟", "100分鐘送10分鐘", "100分钟送10分钟"],
            msg223: ["资费：0.15元/分钟", "資費：0.15元/分鐘", "资费：0.15元/分钟"],
            msg224: ["立即办理", "立即辦理", "立即办理"],
            msg225: ["300分钟送30分钟", "300分鐘送30分鐘", "300分钟送30分钟"],
            msg228: ["1000分钟送100分钟", "1000分鐘送100分鐘", "1000分钟送100分钟"],
            msg232: ["个性化的包月套餐任您选择，充值可享有更多优惠，管理员账号支付费用，其他参会人同时享有云电话会议功能；", "個性化的包月套餐任您選擇，充值可享有更多優惠，管理員賬號支付費用，其他參會人同時享有云電話會議功能；", "个性化的包月套餐任您选择，充值可享有更多优惠，管理员账号支付费用，其他参会人同时享有云电话会议功能；"],
            msg233: ["套餐可叠加购买，通话分钟将以套餐累积数为准，当月订购的套餐通话时间仅限当月有效，当月未使用部分不可结转至下月；", "套餐可疊加購買，通話分鐘將以套餐累積數為準，當月訂購的套餐通話時間僅限當月有效，當月未使用部分不可結轉至下月；", "套餐可叠加购买，通话分钟将以套餐累积数为准，当月订购的套餐通话时间仅限当月有效，当月未使用部分不可结转至下月；"],
            msg234: ["更多包月优惠套餐，请咨询400-030-1108。", "更多包月優惠套餐，請諮詢400-030-1108。 ", "更多包月优惠套餐，请咨询400-030-1108。"],
            msg235: ["呼叫显示号码：", "呼叫顯示號碼", "呼叫显示号码："],
            msg237: ["验证码：", "驗證 碼：", "Verification code:"],
            msg238: ["提交", "提交", "Submit"],
            msg239: ["同事列表", "同事列表", "Colleagues"],
            msg240: ["您需要查找的人", "查找您需要的人", "the person you\\'re looking for"],
            msg241: ["查找", "查找", "Search"],
            msg242: ["取消搜索", "取消搜索", "Search cancel"],
            msg243: ["聊天对象", "聊天對象", "Messengers"],
            msg246: ["无即时通讯消息", "暫時還沒有即時通訊消息", "No instant messaging"],
            msg248: ["聊天记录", "聊天記錄", "Chat history"],
            msg249: ["起始时间", "起始時間", "Beginning"],
            msg250: ["截止时间", "截止時間", "Deadline"],
            msg252: ["聊天日志", "聊天日誌", "Chat log"],
            msg253: ["云盘日志", "雲盤日誌", "OATOS log"],
            msg254: ["筛选日志", "篩選日誌", "Filter log"],
            msg255: ["操作类型", "操作類型", "Operation Types"],
            msg256: ["全部日志", "全部日誌", "All"],
            msg257: ["登录", "登陸", "Login"],
            msg258: ["上传", "上傳", "Upload"],
            msg259: ["下载", "下載", "Download"],
            msg260: ["预览", "預覽", "Preview"],
            msg262: ["分享", "分享", "Share link"],
            msg263: ["新建", "新建", "New"],
            msg264: ["编辑", "編輯", "Edit"],
            msg265: ["移动", "移動", "Move"],
            msg266: ["重命名", "重命名", "Rename"],
            msg267: ["精准查找", "精準查找", "Exact search"],
            msg268: ["查找账号", "查找賬號", "Search account"],
            msg269: ["只能查找一个账号", "只能查找一個賬號", "Can search one everytime"],
            msg270: ["选择", "選擇", "Select"],
            msg271: ["查找文件", "查找文件", "Search files"],
            msg272: ["请输入查找的文件名", "請輸入查找的文件名", "Enter the file name"],
            msg276: ["时间", "時間", "Date"],
            msg279: ["文件名/文件夹名", "文件名/文件夾名", "File name or folder name"],
            msg280: ["所属文件夹", "所屬文件夾", "The folder"],
            msg281: ["请在左侧选择您要查找日志的范围", "請在左側選擇您要查找日誌的範圍", "Select the range of log"],
            msg282: ["注：日志中（前、后）代表文件移动前（后）、重命名前（后）相对应的文件信息", "注：日誌中（前、後）代表文件移動前（後）、重命名前（後）相對應的文件信息", "Note: The (front, back) of log stands for the accordingly file information, in the condition of file moving forward (or backward), rename before (or after)"],
            msgSelectQueryType: ["请选择筛选项!", "請選擇篩選項!", "请选择筛选项!"],
            msg285: ["当前服务", "當前服務", "Current service"],
            msg286: ["服务项目", "服務項目", "Services"],
            msg287: ["基础服务", "基礎服務", "Basic service"],
            msg288: ["增值服务", "增值服務", "Value-added service"],
            msg289: ["总计", "總計", "Total"],
            msg290: ["使用情况", "使用情況", "Usage"],
            msg291: ["联系客服购买", "聯繫客服購買", "Contact us to purchase"],
            msgBuyService: ["购买服务", "购买服务", "Buy service"],
            msg293: ["服务价格", "服務價格", "Pricing"],
            msg296: ["新建管理员", "新建管理員", "New Administrator"],
            msg297: ["授权账号", "授權賬號", "Account authroization"],
            msg298: ["（只能选择一个账号为管理员）", "（只能選擇一個賬號為管理員）", "(you can only select one as the administrator)"],
            msg299: ["选择账号", "選擇賬號", "Select account"],
            msg300: ["授权该管理员需要管理的企业文件夹", "授權該二級管理員的企業文件夾", "Authroize the enterprise folders for the administrator management"],
            msg307: ["管理员权限", "管理員權限", "Administrator permission"],
            msg308: ["账号设置", "賬號設置", "Account settings"],
            msg309: ["在部门中创建管理员账号，管理该部门中其他账号", "新建賬號到所屬部門，管理部門賬號", "Create administrator for the deparment, and then they can manage the others in there"],
            msg310: ["角色权限设置", "角色權限設置", "Role permission settings:"],
            msg311: ["为所属部门成员设置角色权限", "為所屬部門成員設置角色權限", "Set role permissions for the members in this department"],
            msg312: ["隐藏账号或部门", "隱藏賬號或部門", "Hide account or department:"],
            msg313: ["隐藏所属部门账号或子部门", "隱藏所屬部門賬號或子部門", "Hide department or sub-sectors account"],
            msg314: ["管理员设置", "管理員管理", "Administrator settings:"],
            msg315: ["设置所属部门成员为管理员", "設置所屬部門成員為管理員", "Set the members of the deparment as administrator"],
            msg316: ["日志管理", "日誌管理", "Log management:"],
            msg317: ["所属部门账号日志管理", "所屬部門賬號日誌管理", "The log management of the department account"],
            msg318: ["角色名称", "角色名稱", "Role name"],
            msg319: ["20个字符,支持中英文", "20個字符，支持中文或者英文", "20 characters, support Chinese or English"],
            msg321: ["文件夹权限设置", "文件夾權限設置", "Folder permission settings"],
            msg323: ["必选", "必選", "Required"],
            msg328: ["为角色添加账号", "為角色添加賬號", "Add account for the role"],
            msg331: ["继续添加", "繼續添加", "Continue adding"],
            msg332: ["处理中...", "處理中...", "Processing..."],
            msg335: ["修改", "修改", "Modify"],
            msg336: ["更换管理员", "更換管理員", "Change the administrator"],
            msg337: ["锁定", "鎖定", "Lock"],
            msg338: ["解锁", "解鎖", "Unlock"],
            msg340: ["管理员设置", "管理員設置", "Administrator settings"],
            msg342: ["管理员账号", "管理員賬號", "Administrator account"],
            msg343: ["所属部门", "所屬部門", "Department"],
            msg345: ["状态", "狀態", "Status"],
            msg346: ["企业信息管理", "企業信息管理", "Enterprise information"],
            msg347: ["角色权限管理", "角色權限管理", "Role permissions"],
            msg348: ["隐藏账号或部门", "隱藏賬號或部門", "Hide account or department"],
            msg350: ["云电话设置", "雲電話設置", "Cloud phone settings"],
            msg351: ["域设置", "域設置", "Domain settings"],
            msg353: ["是否开启域集成", "是否開啟域集成", "Whether to open the domain integration"],
            msg356: ["域类型", "域類型", "Domain type"],
            msg357: ["域服务器地址", "域服務器地址", "Domain server address"],
            msg358: ["域名", "域名", "Domain"],
            msg359: ["域管理员账号", "域管理員賬號", "The domain administrator account"],
            msg360: ["域管理员密码", "域管理員密碼", "The domain administrator password"],
            msg361: ["域账号自动同步", "域賬號自動同步", "Auto-sync domain account"],
            msg364: ["测试域链接", "測試域鏈接", "Test domain link"],
            msg365: ["保存", "保存", "Save"],
            msg366: ["管理文件夹", "管理文件夾", "Manage the folders"],
            msg367: ["授权该管理员管理的企业文件夹", "授權該二級管理員管理的企業文件夾", "The enterprise folders that this administrator can manage"],
            msg373: ["企业信息", "企業信息", "Enterprise info"],
            msg374: ["企业名称", "企業名稱", "Enterprise name"],
            msg375: ["企业LOGO", "企業LOGO", "Enterprise logo"],
            msg376: ["更换", "更換LOGO", "Change"],
            msg378: ["支持JPG、PNG、GIF格式图片大小：200x55 PX", "支持JPG、PNG、GIF格式圖片大小：200x55 PX", "Support the JPG, PNG, GIF format of picture size: 200x55 PX"],
            msg379: ["联系人姓名", "聯繫人姓名", "Contact name"],
            msg380: ["企业联系人真实姓名", "企業聯繫人真實姓名", "Name of enteprise contacts"],
            msg381: ["企业电话", "企業電話", "Telphone:"],
            msg382: ["企业联系人电话号码", "企業聯繫人常用電話號碼", "Enteprise contacts phone No."],
            msg383: ["企业邮箱", "企業郵箱", "Email"],
            msg384: ["企业联系人常用邮箱", "企業聯繫人常用郵箱", "Enteprise contacts Email"],
            msg385: ["企业地址", "企業地址", "Address"],
            msg386: ["企业地址", "企業地址", "Enterprise addr."],
            msg387: ["注册时间", "註冊時間", "Registration time"],
            msg393: ["制作", "製作", "Make"],
            msg394: ["查看或修改", "查看或修改", "View or modify"],
            msg397: ["角色权限设置", "角色權限設置", "Role permissions setting"],
            msg398: ["新建角色权限", "新建角色權限", "New role permissions"],
            msg399: ["角色", "角色", "Role"],
            msg400: ["角色权限", "角色 權 限", "Role permissions"],
            msg401: ["创建者", "創建 者", "Creator"],
            msg402: ["后台管理", "後臺管理", "Admin management"],
            msg403: ["服务中心", "服務中心", "Service center"],
            msg405: ["高级", "高級", "Advanced settings"],
            msg406: ["日志管理", "日誌管理", "Log management"],
            msg407: ["退出", "退出", "Exit"],
            msg408: ["上传文件", "上傳文件", "Upload files"],
            msg409: ["选择的文件", "選擇的文件", "Choose files"],
            msg410: ["请选择需要上传的文件", "請選擇需要上傳的文件", "Please select the file to upload"],
            msg412: ["选择需要通知的同事", "選擇需要通知的同事", "Select the colleagues that need to be notified "],
            msg413: ["同时发送邮件给同事", "同時發送郵件給同事", "at the same time, send messages to the colleagues"],
            msg415: ["确定上传", "確定上傳", "Confirm"],
            msg419: ["请选择权限类型", "請選擇權限類型", "Please select the type of permission"],
            msg420: ["权限类型", "權限類型", "Permission Types"],
            msg421: ["仅预览", "僅預覽", "Preview only"],
            msg422: ["仅上传", "僅上傳", "Upload only"],
            msg423: ["仅下载", "僅下載", "Download only"],
            msg424: ["预览和上传", "預覽和上傳", "Preview & upload"],
            msg425: ["预览和下载", "預覽和下載", "Preview & download"],
            msg426: ["全部", "全部", "All"],
            msg427: ["自定义", "自定義", "Custom"],
            msg428: ["文件权限", "文件權限", "File permissions"],
            msg435: ["本地交互", "本地交互", "Local seamless interaction"],
            msg436: ["权限项", "權限項", "Types"],
            msg437: ["被授权账号可以在授权文件夹内的操作", "被授權賬號可在文件夾內的操作", "Authorized accounts can operate within the authorized folders"],
            msg439: ["在线预览office、图片、音频、视频等类型文件", "在線預覽office、圖片、音頻、視頻等類型文件", "Online preview office, images, audio, video and the other types of documents"],
            msg441: ["上传文件, 有分享权限时生成上传分享", "上傳文件，有分享權限時生成上傳分享", "Upload files, generate the upload share links if you\\'ve the link permission"],
            msg443: ["下载文件、下载文件夹，有分享权限时生成下载分享", "下載文件、下載文件夾，有分享權限時生成下載分享", "Download files or folders, generate the download share links if you\\'ve the link permission"],
            msg445: ["生成预览分享，有上传", "生成預覽分享，有上傳", "Can generate the preview share link,if you\\'ve the upload or download permission, then it can be generated as upload or download share links."],
            msg446: ["下载权限可生成上传", "下載權限可生成上傳", "Can generate the upload share link with the download permission"],
            msg447: ["下载外链", "下載分享", "The Download share link"],
            msg449: ["新建、移动、重命名文件或文件夹", "新建、移動、重命名文件或文件夾", "New, move, rename files or folders"],
            msg451: ["删除文件或文件夹", "刪除文件或文件夾", "Delete files or folders"],
            msg453: ["客户端可调用本地软件编辑文件，保存更新到云盘", "客戶端可調用本地軟件編輯文件，保存更新到雲盤", "OATOS desktop clients can call the local software to edit the online files, and sync to OATOS seamlessly."],
            msg454: ["权限设置", "權限設置", "Permission settings"],
            msg468: ["分享", "分享", "Share"],
            msg472: ["取 消", "取 消", "Cancel"],
            msg473: ["保存中...", "正在保存...", "Saving..."],
            msg474: ["确 定", "確 定", "Confirm"],
            msg486: ["2015深圳企业云科技有限公司", "2015深圳企業雲科技有限公司", "Shenzhen Qycloud Technology Co.,Ltd."],
            msg488: ["当前版本信息：", "當前版本信息：", " version:"],
            msg491: ["添加至选择的同事", "添加至選擇的同事", "Add to selected colleagues"],
            msg492: ["选择的同事", "選擇的同事", "Selected colleagues"],
            msg493: ["正在取消...", "正在取消...", "Canceling ..."],
            msg494: ["取消发送", "取消發送", "Cancel Send"],
            msg495: ["添加", "添加", "Add"],
            msg496: ["分享设置-", "分享設置-", "Share link settings"],
            msg497: ["为“", "為“", 'Create a share link for "'],
            msg498: ["”创建一个分享，将分享通过邮件或QQ发送给相关工作伙伴，一起来访问这个文件夹协同工作", "”創建一個分享，將分享通過郵件或QQ發送給相關工作夥伴，一起來訪問這個文件夾協同工作", ' ", then you can send the url to your relevant working partners via Email or QQ to work together'],
            msg499: ["访问权限", "訪問權限", "Access permission"],
            msg501: ["预览与下载", "預覽與下載", "Preview and Download"],
            msg503: ["分享期限", "分享期限", "Expiration date"],
            msg504: ["访问密码", "訪問密碼", "Access Password"],
            msg505: ["（访问密码不能小于4位）", "（訪問密碼不能小於4位）", "(Access password cannot be less than 4 characters)"],
            msg507: ["取消分享", "取消分享", "Disable link"],
            msg509: ["生成分享", "生成分享", "Generate link"],
            msg511: ["通过燕麦企业云盘给您分享了外链", "通過燕麥企業雲盤給您分享了", "Shared the links to you by OATOS"],
            msg512: ["请点击下面链接查看文件", "請點擊下面鏈接查看文件", "Please click on the link below to view the files"],
            msg513: ["分享有效期到", "分享有效期到", "Expiration date:"],
            msg514: ["分享访问密码", "分享訪問密碼", "Access password:"],
            msg515: ["分享设置-邮件通知", "分享設置-郵件通知", "Share link setting - mail notification"],
            msg516: ["请输入需要分享此外链人员的邮箱地址", "請輸入需要分享此外鏈的工作人員的電子郵箱", "Please enter the members email addresses need to be shared"],
            msg517: ["输入多个邮件地址时请用", "輸入多個郵件地址時請用", "More than one email addresses, please use &nbsp;"],
            msg518: ["进行区分", "進行區分", "&nbsp;to make a distinction"],
            msg519: ["邮件内容", "郵件內容", "Contents of Email"],
            msg522: ["发送", "發送", "Send"],
            msg526: ["邮件发送分享", "郵件發送分享", "Send the share link via Email"],
            msg527: ["访问", "訪問分享", "Visit the share link"],
            msg528: ["复制", "複製分享", "Copy the share link"],
            msg533: ["请完善表格内容", "表格中沒有數據", "Please perfect the table of contents"],
            msg534: ["消息提示", "消息提示", "Messages"],
            msg535: ["文件压缩中", "文件正在壓縮中", "File compressing"],
            msg536: ["请稍候", "請稍候", "Please wait"],
            msg538: ["正在压缩", "正在壓縮", "Compression"],
            msg539: ["关 闭", "關 閉", "Close"],
            msg540: ["搜索", "搜索", "Search"],
            msg541: ["该权限将应用于当前文件夹及其所有子文件夹!", "該權限將應用在當前​​文件夾及其所有子文件夾！ ", "This permission settings will be applied to the current folder and all its subfolders"],
            msg542: ["选择同事", "員工選擇窗", "Select colleagues"],
            msg545: ["同级部门列表", "同級部門列表", "The list of departments at the same level"],
            msg546: ["部门列表", "部門列表", "The list of departments"],
            msg556: ["全部清空", "全部清空", "Empty all"],
            msg557: ["接受", "接受", "Accept"],
            msg558: ["拒绝", "拒絕", "Refuse"],
            msg562: ["打开所在文件夹", "打開所在文件夾", "Go to the folder"],
            msg563: ["已拒收", "已拒收", "Declined"],
            msg564: ["即时通讯", "即時通訊", "Instant messaging"],
            msg565: ["视频聊天", "視頻聊天", "Video chat"],
            msg566: ["发送文件", "發送文件", "Send file"],
            msg567: ["添加至常用联系人", "添加至常用聯繫人", "Add to favorite contacts"],
            msg568: ["有新的消息", "來消息了", "There\\'re new messages"],
            msg569: ["未知账号", "未知用戶", "Unknown account"],
            msg572: ["会议室名称", "會議室名稱", "Meeting room"],
            msg573: ["参会人员", "參會人員", "Attendees"],
            msg574: ["参加会议", "參加會議", "Attend the meeting"],
            msg576: ["视频会议", "視頻會議", "Cloud conference"],
            msg578: ["会议主题", "會議主題", "Meeting topic"],
            msg580: ["新建会议室", "新建會議室", "New meeting room"],
            msg581: ["会议室名称：", "會議室名稱：", "Meeting room:"],
            msg582: ["会议主题或编号", "會議主題或會議編號", "Meeting topic or number"],
            msg583: ["创建会议室", "創建會議室", "Create a new meeting room"],
            msg585: ["新建文件夹", "新建文件夾", "New folder"],
            renameFolder: ["重命名文件夹", "重命名文件夾", "Rename folder"],
            renameFile: ["重命名文件", "重命名文件", "Rename file"],
            msg586: ["请输入文件夹名称", "請輸入文件夾名稱", "Please enter a folder name"],
            msg590: ["文件名", "文件名", "File name"],
            msg591: ["文件类型", "文件類型", "File Type"],
            msg592: ["文件大小", "文件大小", "File Size"],
            msg593: ["创建人", "創建人", "Creator"],
            msg594: ["创建时间", "創建時間", "Creation time"],
            msg595: ["修改人", "修改人", "Modified by"],
            msg596: ["版本管理", "版本管理", "Version Management"],
            msg597: ["修改时间", "修改時間", "Modification time"],
            msg598: ["文档处理中...", "文檔處理中...", "Document Processing ..."],
            msg603: ["关注", "關注", "Follow"],
            msg604: ["取消关注", "取消關注", "Unfollow"],
            msg606: ["编辑分享", "編輯分享", "Edit share link"],
            msg609: ["收藏", "收藏", "Star"],
            msg610: ["取消收藏", "取消收藏", "Remove star"],
            msg613: ["复制到", "複製到", "Copy to"],
            msg614: ["复制", "複製", "Copy"],
            msg617: ["在线预览", "在線預覽", "Online preview"],
            msg618: ["查看全部", "查看全部", "View all"],
            msg621: ["更新时间", "更新時間", "Updated time"],
            msg625: ["收藏夹", "收藏夾", "Starred"],
            msgFavFile: ["收藏的文件", "收藏的文件", "Starred"],
            msg626: ["排序", "排序", "Sort"],
            msg627: ["升序", "升序", "Ascending"],
            msg628: ["降序", "降序", "Descending"],
            msg630: ["后退", "返回", "Back"],
            msg631: ["前进", "前進", "Forward"],
            msg638: ["详细信息", "詳細信息", "Detailed info"],
            msg644: ["分享地址", "分享地址", "Share link addr."],
            msg645: ["权限管理", "權限管理", "Permission management"],
            msg647: ["查看更多", "查看更多", "More"],
            msg648: ["备注说明", "備註說明", "Remarks"],
            msg649: ["没有备注", "沒有備註", "No remarks"],
            msg654: ["文件所在位置", "文件所在位置", "File location"],
            msg655: ["恢复", "恢復", "Restore"],
            msg656: ["关注的文件", "關注的文件", "Followed files"],
            msg661: ["分享的文件", "分享的文件", "Shared files"],
            msg662: ["收 藏 夹", "收藏夾", "Starred"],
            msg663: ["回收站", "回收站", "Recycle bin"],
            msg681: ["被授权者", "被授權者", "Authroized account"],
            msg686: ["当前", "當前", "Current"],
            msg687: ["当前文件", "當前文件夾", "Current files"],
            msg688: ["所有文件", "所有文件夾", "All files"],
            msg690: ["已选中", "已選中", "You have selected"],
            msg691: ["项", "項", " items"],
            msg692: [" 个文件夹", "個文件夾", " folders"],
            msg693: [" 个文件", "個文件", " files"],
            msg694: ["请选择要预览的文件", "請選擇要預覽的文件。 ", "Please select the file you want to preview"],
            msg695: ["未设置分享", "未設置分享", "No share link settings"],
            msg696: ["设置", "設置", "Set"],
            msg704: ["新建文件", "新建文件", "New file"],
            msg706: ["版本号", "版本號", "Version No."],
            msg709: ["使用说明", "使用說明", "Instructions"],
            msgNoPermissonTip: ["无操作权限", "無操作權限", "No permission to operate"],
            msg710: ["企业办公文件存储在这里，即时共享给同事协同办公", "企業辦公文件存儲在這裡，即時共享給同事協同辦公。 ", "Enterprise files stored here, then you can share with the other colleagues for collaboration in real-time"],
            msg711: ["管理员可为企业文件中的文件夹设置权限，设置了权限的文件夹可被关联的账号访问", "管理員可為企業文件下的文件夾設置權限，設置了權限的文件夾可被關聯的賬號訪問", "Administrator can set permissions for the folders in enterprise files, then the authroized accounts can visit the relevant folders"],
            msg712: ["账号可依据授权对文件进行操作，如操作文件时系统提示没有权限，请联系管理员申请权限", "用戶可依據授權對文件進行操作，如操作文件時系統提示沒有權限，請與管理員聯繫申請權限", "The authroized accounts can operate the files, if the system remind you\\'ve no permissions, please contact the administrator"],
            msg713: ["您的个人文件可以存储在这里，其他同事看不到您的个人文件", "您的個人文件可以存儲在這裡，其他同事看不到您的個人文件。 ", "You can store your personal files here, the others can\\'t see except you "],
            msg714: ["个人文件占用企业云盘空间", "個人文件佔用企業雲盤空間", "Personal files takes up the enterpise storage space"],
            msg715: ["企业文件不能复制到个人文件，个人文件可以复制到企业文件", "企業文件不能轉移到個人文件裡，個人文件可以復製到企業文件", "Enterpise files cannot copy to personal files, on the contrary, it can"],
            msg743: ["权限设置", "權限設置", "Permission settings"],
            msg744: ["请选择需要授权的账号，并设置权限", "請選擇需要授權的賬號，並設置權限", "Please select the account that you want to authorize and set the file/folder permissions"],
            msg750: ["清空列表", "清空列表", "Empty the list"],
            msg777: ["恢  复", "恢 复", "Restore"],
            msg778: ["另存为", "另存為", "Save as"],
            msg779: ["上传完成", "上傳完成", "Upload completed"],
            msgNetError: ["网络错误", "網絡錯誤", "Something wrong with the network"],
            msgUploadSameName: ["存在重名文件", "存在重名文件", "There\\'re duplicate files"],
            msg781: ["停止", "停止", "Pause"],
            msg782: ["移除", "移除", "Remove"],
            msg784: ["覆盖", "覆蓋", "Overwrite"],
            msg786: ["上传下载", "上傳下載", "Upload & download"],
            msg787: ["上传中", "上傳中", "Uploading"],
            msg788: ["全部停止", "全部停止", "Pause all"],
            msg789: ["全部删除", "全部刪除", "Delete all"],
            msg792: ["快速回复", "快速回复​​", "Quick reply"],
            msg794: ["查看历史", "查看歷史", "View History"],
            msg796: ["暂时还没有文件消息", "暫時還沒有文件消息", "There\\'s no message yet"],
            msg797: ["信息管理 --", "信息管理 --", "Info management --"],
            msg798: ["消息中心", "消息中心", "Info management"],
            msg799: ["关注更新", "關注更新", "Follow updates"],
            msg803: ["联系人 --", "聯繫人 --", "Contact --"],
            msg805: ["至", "至", "to"],
            msg806: ["文件", "文件", "File"],
            msg807: ["图片", "圖片", "Picture"],
            msg808: ["视频", "視頻", "Video"],
            msg809: ["音频", "音頻", "Audio"],
            msg810: ["其他", "其他", "Others"],
            msg811: ["高级搜索", "高級搜索", "Advanced settings"],
            msg814: ["添加到通讯录", "添加到通訊錄", "Add to contacts"],
            msg815: ["关闭键盘", "關閉鍵盤", "Close keyboard"],
            msg818: ["我的号码", "我的號碼：", "My phone No."],
            msg819: ["剩余时间", "剩餘時間：", "Time left:"],
            msg820: ["分钟", "分鐘", "min"],
            msg821: ["其他参会人员的号码：", "其他參會人員的號碼：", "No. of attendees:"],
            msg822: ["开始云电话会议", "開始雲電話會議", "Start a teleconference"],
            msg826: ["对方的号码：", "對方的號碼：", "Call No.:"],
            msg827: ["请输入对方的手机号码", "輸入手機號", "Enter the mobile number"],
            msg829: ["从通讯录中选择", "從通訊錄中選擇", "Select from the address book"],
            msg830: ["呼叫", "呼叫", "Call"],
            msg831: ["删除联系人", "刪除聯繫人", "Delete the contacts"],
            msg835: ["添加联系人", "添加聯繫人", "Add the contacts"],
            msg838: ["联系人姓名", "聯繫人姓名", "Contacts name"],
            msg839: ["手机", "手機", "Phone"],
            msg840: ["联系人手机号码", "聯繫人手機號碼", "Contacts Telephone"],
            msg841: ["企业", "公司", "Enterprise"],
            msg842: ["联系人所在企业", "聯繫人所在公司", "In which company does he/she work"],
            msg843: ["部门", "部門", "Department"],
            msg844: ["联系人所在部门", "聯繫人所在部門", "In which departement does he/she work"],
            msg845: ["职务", "職務", "Job title"],
            msg846: ["联系人当前职务", "聯繫人當前職務", "What is his/her job title?"],
            msg850: ["联通中...", "正在聯通各方...", "Connecting..."],
            msg851: ["添加人员", "增加人員", "Add attendees"],
            msg852: ["结束会议", "結束會議", "End the conference"],
            msg855: ["重拨", "重撥", "recalling"],
            msg856: ["继续拨号", "繼續撥號", "Continue dialing"],
            msg857: ["结束通话", "結束通話", "End the call"],
            msg858: ["云电话", "雲電話", "Cloud phone"],
            msg861: ["云电话会议", "雲電話會議", "Cloud phone conference"],
            msg863: ["通讯录", "通訊錄", "Address book"],
            msg870: ["彻底删除", "徹底刪除", "Delete all"],
            msg876: ["清空", "清空", "Empty"],
            msg877: ["回收站", "回收站", "Recycle bin"],
            msg878: ["企业文件", "企業文件"],
            msg879: ["个人文件"],
            msg882: ["续 费：", "續 費", "Renew:"],
            msg883: ["一年", "一年", "1 year"],
            msg884: ["三年", "三年", "3 years"],
            msg885: ["五年", "五年", "5 years"],
            msg886: ["支付", "支付", "Pay"],
            msg887: ["购买空间：", "購買空間：", "Purchase the space:"],
            msg893: ["退出个人设置", "退出个人设置", "Exit personal settings"],
            msg894: ["移动端下载", "移動端下載", "Mobile app download"],
            msg895: ["燕麦企业云盘二维码", "燕麥企業雲盤二維碼", "OATOS QR Code"],
            msg897: ["扫描二维码下载APP", "掃描二維碼下載APP", "Scan QR Code to download"],
            msg898: ["支持iOS和Android系统", "同時支持iOS和Android系統", "Support iOS & Andorid"],
            msg899: ["企业云盘安卓版", "企業雲盤安卓版", "OATOS Android clients"],
            conferencePlugDown: ["视频会议插件下载", "視頻會議插件下載", "Download the video conference plug-ins"],
            installOnline: ["在线安装", "在線安裝", "Online installation"],
            msg900: ["燕麦客户端下载", "燕麥客戶端下載", "Client download"],
            msg901: ["客户端", "客戶端", "Destop client"],
            msg902: ["适合：Android 2.3及 以上", "適合：Android 2.3及 以上", "Suitable for: Android 2.3 and above"],
            msg903: ["最新版本：2.6.0 软件大小：16.95M", "最新版本：2.6.0 軟件大小：16.95M", "New version: 2.6.0  Size：16.95M"],
            msg904: ["安装方式", "安裝方式", "Installation:"],
            msg905: ["手机扫描左方二维码直接下载安装", "手機掃描左方二維碼直接下載安裝", "Scan QR Code on the left to download and install"],
            msg906: ["安装包下载到电脑中,通过豌豆荚/91等手机助手软件进行安装", "下載安裝包到電腦通過豌豆莢/91手機助手等軟件安裝", "Download package to your computer, and install it in your phone"],
            msg907: ["企业云盘客户端下载", "企業雲盤客戶端下載", "OATOS PC desktop clients download"],
            msg908: ["企业云盘iPhone版", "企業雲盤iPhone版", "OATOS iPhone clients"],
            msg910: ["适合：iOS 5.0 以上", "適合：iOS 5.0 以上", "Surport：iOS 5.0 above"],
            msg911: ["最新版本：2.6.0 软件大小：6.4M", "最新版本：2.6.0 軟件大小：6.4M", "Latest version：2.6.0 Size：6.4M"],
            msg913: ["进入App Store搜索", "進入App Store搜索", "Go to App-store"],
            msg914: ["安装", "安裝", "Install"],
            msg915: ["手机扫描左上方二维码直接下载安装", "手機掃描左上方二維碼直接下載安裝", " Scan QR Code on the upside to download and install"],
            msg919: ["适合：iOS 5.0", "適合：iOS 5.0", "Surport：iOS 5.0"],
            msg920: ["软件大小", "最新版本：1.4 軟件大小：7.9M", "Size: "],
            msg922: ["下载安装包并使用iTunes同步到iPad", "下載安裝包並使用iTunes同步到iPad", "Download the installation package and use iTunes to sync to iPad"],
            msg923: ["桌面客户端下载", "桌面客戶端下載", "PC clients download"],
            msg927: ["适合：WinXP/Vista/Win7/Win8", "適合：WinXP/Vista/Win7/Win8", "Surport：WinXP/Vista/Win7/Win8"],
            msg928: ["最新版本", "最新版本", "Latest version:"],
            msg929: ["客户端下载", "客戶端下載", "client download"],
            msg930: ["64位客户端下载", "64位客戶端下載", "64-bit client download"],
            msg931: ["升级指南", "升級指南", "Upgrade Guide"],
            msg935: ["适合：OS X 10.7.4 以上", "適合：OS X 10.7.4 以上", "Surport：OS X 10.7.4 above"],
            msg937: ["文档下载", "文檔下載", "Document download"],
            msg938: ["帮助文档", "幫助文檔", " Help"],
            msg941: ["企业云盘用户指南v3.0", "企業雲盤用戶指南v3.0", "OATOS User guide v3.0"],
            msg942: ["企业云盘管理员指南v3.0", "企業雲盤管理員指南v3.0", "OATOS Administrator guide v3.0"],
            msg945: ["介绍文档", "介紹文檔", "OATOS Introduction"],
            msg946: ["产品手册", "產品手冊", "OATOS manuals"],
            msg947: ["宣传手册", "宣傳手冊", "OATOS brochures"],
            msg955: ["最新版本：2.1.2 软件大小：6.09M", "最新版本:2.1.2 軟件大小:6.09M", "Latest version：2.1.2 Size：6.09M"],
            msg957: ["将安装包复制到手机内存卡直接安装", "將安裝包複製到手機內存卡直接安裝", "Copy the package to the phone memory card to install directly"],
            msg962: ["最新版本：2.1.0 软件大小：2.5M", "最新版本: 2.1.0 軟件大小: 2.5M", "Latest version：2.1.0 Size：2.5M"],
            msg964: ["下载安装包并使用iTunes同步到iPhone", "下載安裝包並使用iTunes同步到iPhone", "Download the installation package and use iTunes to sync to iPhone"],
            msg969: ["最新版本：2.1.6", "最新版本: 2.1.6", "Latest version：2.1.6"],
            msg976: ["最新版本：1.0.0 软件大小：4.2M", "最新版本: 1.0.0 軟件大小: 4.2M", "Latest version：1.0.0 Size：4.2M"],
            msg992: ["旧密码", "舊密碼", "Old password"],
            msg993: ["当前使用的密码", "當前使用的密碼", "Password"],
            msg995: ["新的密码", "新的密碼", "New password"],
            msg997: ["重新输入新密码", "重新輸入新密碼", "Re-enter new password"],
            msg999: ["个人资料", "個人資料", "Personal info"],
            msg1001: ["系统设置", "系統設置", "System setting"],
            msg1004: ["版本信息", "版本信息", "Version info"],
            msg1007: ["声音设置", "聲音設置", "Sound setting"],
            msg1008: ["发送消息提示音", "發送消息提示音", "Send message"],
            msg1009: ["接收消息提示音", "接收消息提示音", "Contact message"],
            msg1010: ["视频通话提示音", "視頻通話提示音", "Video call"],
            msg1011: ["语音通话提示音", "語音通話提示音", "Audio call"],
            msg1012: ["同事登录提示音", "好友登入提示音", "Contact sign-in"],
            msg1013: ["同事退出提示音", "好友登出提示音", "Contact sign-out"],
            msg1017: ["登录账号", "登陸賬號", "Login account"],
            msg1018: ["在线状态", "在線狀態", "Online status"],
            msg1019: ["在线", "在線", "Online"],
            msg1020: ["忙碌", "忙碌", "Busy"],
            msg1021: ["隐身", "隱身", "Invisible"],
            msg1022: ["个性签名", "個性簽名", "Signature"],
            msg1024: ["更换头像", "更換頭像", "Change Avatar"],
            msg1026: ["个人信息", "個人信息", "User info"],
            msg1029: ["性 别", "性 別", "Gender"],
            msg1032: ["出生日期", "出生日期", "Birthday"],
            msg1033: ["真实年龄", "真實年齡", "Age"],
            msg1034: ["个人兴趣", "個人興趣", "Hobby"],
            msg1035: ["个人兴趣、爱好、特长等", "個人興趣、愛好、特長等", "Interests, hobbies, strengths, etc."],
            msg1036: ["工作信息", "工作信息", "Work info"],
            msg1037: ["当前职位", "當前職位", "Job title"],
            msg1038: ["所在城市", "所在城市", "City"],
            msg1040: ["专业类型", "專業類型", "Major"],
            msg1041: ["专业类型", "專業類型", "Major"],
            msg1043: ["企业内部邮箱或常用邮箱", "企業內部郵箱或常用郵箱", "Enterprise or common email"],
            msg1044: ["座机号码", "座機號碼", "Telephone"],
            msg1045: ["企业内部分机号码", "企業內部座機號碼", "Inline No."],
            msg1046: ["手机号码", "手機號碼", "Cellphone"],
            msg1047: ["手机号码", "手機號碼", "Cellphone"],
            msg1051: ["当前版本", "當前版本", "Current version"],
            msg1052: ["新版功能", "新版功能", "新版功能"],
            msg1053: ["新版的视频会议功能", "新版的視頻會議功能", "新版的视频会议功能"],
            msg1054: ["开会沟通更加高效方便", "開會溝通更加高效方便", "开会沟通更加高效方便"],
            msg1055: ["后台管理中新增了用户批量导入功能", "後臺管理中新增了用戶批量導入功能", "后台管理中新增了用户批量导入功能"],
            msg1056: ["添加用户更加快捷方便", "添加用戶更加快捷方便", "添加用户更加快捷方便"],
            msg1057: ["聊天框中可以直接发送本地文件或者云盘中的文件", "聊天框中可以直接發送本地文件或者雲盤中的文件", "聊天框中可以直接发送本地文件或者云盘中的文件"],
            msg1058: ["文档协同更加简单", "文檔協同更加簡單", "文档协同更加简单"],
            msg1059: ["新版的文件夹和多文件下载功能", "新版的文件夾和多文件下載功能", "新版的文件夹和多文件下载功能"],
            msg1060: ["不用等待即可下载文件夹和大文件", "不用等待即可下載文件夾和大文件", "不用等待即可下载文件夹和大文件"],
            msg1061: ["添加分享权限限制", "添加分享權限限制", "添加外链权限限制"],
            msg1062: ["关联要分享的云盘文件权限", "關聯要分享的雲盤文件權限", "关联要分享的云盘文件权限"],
            msg1063: ["文件共享更加安全", "文件共享更加安全", "文件共享更加安全"],
            msg1064: ["版本", "版本", "版本"],
            msg1065: ["全新的管理员后台设计", "全新的管理員後臺設計", "全新的管理员后台设计"],
            msg1066: ["全面提升管理员的管理能力和操作体验", "全面提升管理員的管理能力和操作體驗", "全面提升管理员的管理能力和操作体验"],
            msg1067: ["新增管理员前端文件夹权限设置功能", "新增管理員前端文件夾權限設置功能", "新增管理员前端文件夹权限设置功能"],
            msg1068: ["文件夹权限收放更自如", "文件夾權限收放更自如", "文件夹权限收放更自如"],
            msg1069: ["优化角色权限和二级管理员配置", "優化角色權限和二級管理員配置", "优化角色权限和二级管理员配置"],
            msg1070: ["权限分配更合理", "權限分配更合理", "权限分配更合理"],
            msg1071: ["新增个人文件空间开关功能", "新增個人文件空間開關功能", "新增个人文件空间开关功能"],
            msg1072: ["个人文件空间管理更便捷", "個人文件空間管理更便捷", "个人文件空间管理更便捷"],
            msg1073: ["优化视频会议", "優化視頻會議", "优化视频会议"],
            msg1074: ["会议界面更美观", "會議界面更美觀", "会议界面更美观"],
            msg1075: ["新增分享上传功能", "新增分享上傳功能", "新增外链上传功能"],
            msg1076: ["文件共享随心所欲", "文件共享隨心所欲", "文件共享随心所欲"],
            msg1078: ["上传文件到企业文件目录时新增了通知同事的功能", "上傳文件到企業文件目錄時新增了通知同事的功能", "上传文件到企业文件目录时新增了通知同事的功能"],
            msg1079: ["上传的文件可以以消息或邮件方式通知指定的人员", "上傳的文件可以以消息或郵件方式通知指定的人員", "上传的文件可以以消息或邮件方式通知指定的人员"],
            msg1080: ["新增分享邮件通知功能", "新增分享郵件通知功能", "新增外链邮件通知功能"],
            msg1081: ["用户可以将分享外链直接以邮件方式发送到指定邮箱", "用戶可以將分享外鏈直接以郵件方式發送到指定郵箱", "用户可以将分享外链直接以邮件方式发送到指定邮箱"],
            msg1082: ["新增分享编辑功能", "新增分享編輯功能", "新增外链编辑功能"],
            msg1083: ["便于用户对已分享的外链设置进行修改", "便於用戶對已分享的外鏈設置進行修改", "便于用户对已分享的外链设置进行修改"],
            msg1084: ["新增文件模块使用说明", "新增文件模塊使用說明", "新增文件模块使用说明"],
            msg1085: ["便于用户了解各产品各模块的具体功能", "便於用戶了解各產品各模塊的具體功能", "便于用户了解各产品各模块的具体功能"],
            msg1086: ["文件增加备注功能", "文件增加備註功能", "文件增加备注功能"],
            msg1087: ["用户可以为选定的文件编辑备注说明", "用戶可以為選定的文件編輯備註說明", "用户可以为选定的文件编辑备注说明"],
            msg1088: ["方便多人协作办公", "方便多人協作辦公", "方便多人协作办公"],
            msg1089: ["上传同名文件时", "上傳同名文件時", "上传同名文件时"],
            msg1090: ["新增", "新增", "新增"],
            msg1091: ["重命名、覆盖、删除", "重命名、覆蓋、刪除", "重命名、覆盖、删除"],
            msg1092: ["选项", "選項", "选项"],
            msg1093: ["方便用户对同名文件做适当处理", "方便用戶對同名文件做適當處理", "方便用户对同名文件做适当处理"],
            msg1095: ["用户界面和产品功能全面升级", "用戶界面和產品功能全面升級", "用户界面和产品功能全面升级"],
            msg1096: ["将带给您全新的用户体验", "將帶給您全新的用戶體驗", "将带给您全新的用户体验"],
            msg1097: ["云盘文件新增详细信息展示界面", "雲盤文件新增詳細信息展示界面", "云盘文件新增详细信息展示界面"],
            msg1098: ["信息获取更轻松", "信息獲取更輕鬆", "信息获取更轻松"],
            msg1099: ["云盘文件新增快捷操作入口", "雲盤文件新增快捷操作入口", "云盘文件新增快捷操作入口"],
            msg1100: ["办公操作更便捷", "辦公操作更便捷", "办公操作更便捷"],
            msg1101: ["优化文件搜索功能", "優化文件搜索功能", "优化文件搜索功能"],
            msg1102: ["文件定位更快捷", "文件定位更快捷", "文件定位更快捷"],
            msg1103: ["优化文件版本管理", "優化文件版本管理", "优化文件版本管理"],
            msg1104: ["历史记录、版本恢复", "歷史記錄、版本恢復", "历史记录、版本恢复"],
            msg1105: ["功能", "功能", "功能"],
            msg1106: ["文件维护更给力", "文件維護更給力", "文件维护更给力"],
            msg1107: ["即时通讯聊天框自动叠加", "即時通訊聊天框自動疊加", "即时通讯聊天框自动叠加"],
            msg1108: ["多人聊天更简便", "多人聊天更簡便", "多人聊天更简便"],
            msg1109: ["新增用户信息名片", "新增用戶信息名片", "新增用户信息名片"],
            msg1110: ["用户信息更醒目", "用戶信息更醒目", "用户信息更醒目"],
            msg1111: ["优化消息管理模块", "優化消息管理模塊", "优化消息管理模块"],
            msg1112: ["消息管理更直观", "消息管理更直觀", "消息管理更直观"],
            msg1113: ["企业文件新增文件关注功能", "企業文件新增文件關注功能", "企业文件新增文件关注功能"],
            msg1114: ["让用户实时掌控文档的状态变更", "讓用戶實時掌控文檔的狀態變更", "让用户实时掌控文档的状态变更"],
            msg1115: ["企业文件新增文件收藏功能", "企業文件新增文件收藏功能", "企业文件新增文件收藏功能"],
            msg1116: ["提升用户的文档管理体验", "提升用戶的文檔管理體驗", "提升用户的文档管理体验"],
            msg1117: ["个人文件新增文件复制功能", "個人文件新增文件複製功能", "个人文件新增文件复制功能"],
            msg1118: ["个人文件可以轻松复制到企业云盘", "個人文件可以輕鬆複製到企業雲盤", "个人文件可以轻松复制到企业云盘"],
            msg1119: ["新增上传下载模块", "新增上傳下載模塊", "新增上传下载模块"],
            msg1120: ["实时显示文件上传/下载状态", "實時顯示文件上傳/下載狀態", "实时显示文件上传/下载状态"],
            msg1121: ["并记录上传/下载信息", "並記錄上傳/下載信息", "并记录上传/下载信息"],
            msg1122: ["新版不支持增强版登录.", "新版不支持增強版登陸.", "新版不支持增强版登录."],
            msg1123: ["部门", "部門", "Department"],
            msg1124: ["职位", "職位", "Job title"],
            msg1126: ["拍照", "拍照", "Take a photo"],
            msg1129: ["内线", "內線", "Ext"],
            msg1135: ["添加常用联系人", "添加常用聯繫人", "Add frequent contacts"],
            msg1137: ["删除常用联系人", "刪除常用聯繫人", "Delete frequent contacts"],
            msg1139: ["常用联系人", "常用聯繫人", "Frequent contacts"],
            msg1154: ["部门:", "部門:", "Department: "],
            msg1155: ["职位:", "職位:", "Post: "],
            msg1156: ["内线:", "內線:", "Inline No."],
            msg1160: ["当前空间剩余", "當前空間剩餘", "Space left"],
            msg1161: ["购买增值服务", "購買增值服務", "Purchase the value-added service"],
            msg1162: ["账 号 管 理", "賬 戶 管 理", "Account management"],
            msg1163: ["安全退出", "安 全 退 出", "Sign out"],
            msg1168: ["移除常用联系人", "移除常用聯繫人", "Remove frequent contacts"],
            msg1176: ["请描述您将要上传的文件", "請描述您將要上傳的文件", "Please give a description about the files you want to upload"],
            msg1177: ["20字以内", "20字以內", "within 20 characters"],
            msg1180: ["查看", "查看", "Preview"],
            msg1188: ["服务热线", "服務熱線", "Hotline"],
            msg1189: ["分享中心", "分享中心", "Share links center"],
            msg1190: ["文件信息", "文件信息", "File info"],
            msg1193: ["到期时间", "到期時間", "Expiration date"],
            msg1194: ["意见反馈", "意見反饋", "Suggestions"],
            msg1195: ["在 线 客 服", "在 線 客 服", "Online service"],
            msg1196: ["问 题 反 馈", "問 題 反 饋", "Question feedback"],
            msg1197: ["请输入查看密码", "請輸入查看密碼", "Please enter the password to preview"],
            msg1199: ["对不起", "對不起", "Sorry"],
            msg1200: ["文件不存在.", "文件不存在.", "The file doesn\\'t exist"],
            msg1202: ["服务异常", "服務異常", "System error"],
            msg1203: ["请稍后再试.", "請稍後再試.", "please try again later"],
            msg1204: ["等待中", "等待中", "Waiting"],
            msg1205: ["上传失败", "上傳失敗", "Upload failed"],
            msg1208: ["请上传文件", "請上傳文件", "Please upload the files"],
            msg1209: ["文件名称", "文件名稱", "File name"],
            msg1226: ["恭喜", "恭喜", "Congratulations!"],
            msg1227: ["抱歉", "抱歉", "Sorry"],
            msg1232: ["图片加载中...", "圖片加載中...", "Image loading... "],
            msg1233: ["缩小", "縮小", "Turn down"],
            msg1234: ["放大", "放大", "Turn up"],
            msg1235: ["还原", "還原", "Restore"],
            msgToSmall: ["最小化", "最小化", "最小化"],
            msg1236: ["上一张", "上一張", "Previous"],
            msg1237: ["下一张", "下一張", "Next"],
            msg1238: ["左旋转", "左旋轉", "Left rotation"],
            msg1239: ["右旋转", "右旋轉", "Right rotation"],
            msg1240: ["打印", "打印", "Print"],
            msg1241: ["全屏", "全屏", "Full screen"],
            msg1242: ["新增关注、分享、收藏文件夹中文件路径显示，文件预览功能，屏蔽属性栏显示;", "新增關注、分享、收藏文件夾中文件路徑顯示，文件預覽功能，屏蔽屬性欄顯示;", "新增关注、外链、收藏文件夹中文件路径显示，文件预览功能，屏蔽属性栏显示;"],
            msg1243: ["屏蔽企业文件属性栏操作功能;", "屏蔽企業文件屬性欄操作功能;", "屏蔽企业文件属性栏操作功能;"],
            msg1244: ["刷新功能优化为刷新当前目录;", "刷新功能優化為刷新當前目錄;", "刷新功能优化为刷新当前目录;"],
            msg1245: ["新增企业文件复制功能;", "新增企業文件複製功能;", "新增企业文件复制功能;"],
            msg1246: ["优化上传列表显示方式;", "優化上傳列表顯示方式;", "优化上传列表显示方式;"],
            msg1247: ["管理员后台增加日志管理功能;", "管理員後臺增加日誌管理功能;", "管理员后台增加日志管理功能;"],
            msg1248: ["修改部分BUG;", "修改部分BUG;", "修改部分BUG;"],
            msgGoBack: ["返回", "返回", "goback"],
            msgCanNotContactUser: ["无法联系到该用户！", "無法聯繫到該用戶！", "无法联系到该用户！"],
            msgEnterAccountOrName: ["请输入账号或者真实姓名", "請輸入賬號或者真實姓名", "请输入账号或者真实姓名"],
            msgUserNumber: ["企业用户总数", "企業用戶總數", "企业用户总数"],
            deleteFileTip: ["该操作不可恢复, 确定要删除?", "該操作不可恢復, 確定要刪除?", "The operation cannot be restored, are you sure to delete?"],
            emptyFileTip: ["确定要清空回收站? 文件被清空后将无法还原!", "確定要清空回收站? 清空回收站後回將無法還原被清除的文件", "Are you sure to empty the Recycle Bin? Back It won't restore files after emptying the Recycle Bin!"],
            restoreFileTip: ["您确定要恢复吗?", "您確定要恢復嗎?", "Are you sure to restore it ?"],
            msgDeleteFail: ["删除失败!", "刪除失敗!", "Failed to delete"],
            msgRepasswordError: ["两次密码输入不一致!", "兩次密碼不一致!", "The passwords don\\'t match!"],
            msgPasswordError: ["密码有误!", "密碼錯誤", "Wrong password!"],
            msgSaveFail: ["保存失败!", "保存失敗!", "Failed to save!"],
            msgSaveSuccess: ["保存成功!", "保存成功!", "Saved successfully"],
            msgCreateFail: ["创建失败!请稍后重试。", "創建失敗!請稍後重試!", "Failed to create! Please try again later"],
            msgEditPermConfirm: ["该权限将应用在当前文件夹及其所有子文件夹!", "該權限將應用在當前​​文件夾及其所有子文件夾!", "This permission will be apply to the current parent folders and its all subfolders"],
            msgCopySuccess: ["复制成功!", "複製成功!", "Copied successfully"],
            msgPageLoadError: ["内容加载失败!请刷新页面后重试。", "頁面加載失敗提示：內容加載失敗!請刷新頁面後重試!", "Load the content failed! Please refresh and retry"],
            msgRequestExpire: ["网络不稳定!请稍后重试。", "請求操作超時提示：網絡不穩定!請稍後重試!", "The network isn\\'t stable! Please try again later"],
            msgSysAbnormal: ["系统异常，稍后再试!", "系統異常，稍後再試!", "Something goes wrong, please try again later."],
            msgServerError: ["系统有误! 请稍后重试!", "系統錯誤!", "System error"],
            msgComming: ["来消息了", "來消息了", "There\\'re new messages"],
            msgAddSucc: ["添加成功!", " 添加成功!", "Added successfully"],
            msgAddFail: ["添加失败!", "添加失敗!", "Failed to add "],
            msgDelSucc: ["删除成功!", "刪除成功!", "Deleted successfully"],
            msgDelFail: ["删除失败!", "刪除失敗!", "Failed to delete "],
            msgPersonDiskClose: ["您的个人文件目录已被管理员关闭!", "您的個人雲盤被關閉!", "Your personal file has been disabled by the administrator"],
            msgAccountLoginOther: ["您的账号在别处登录!", "您的賬號在別處登錄!", "Your account has been signed in somewhere else"],
            msgFileHaveExist: ["已经存在!", "已經存在!", "Already existed"],
            msgEntFile: ["企业文件", "企業文件", "Enterprise files"],
            msgPersonFile: ["个人文件", "個人文件", "Personal files"],
            msgStatusOnline: ["在线", "在線", "Online"],
            msgStatusBusy: ["忙碌", "忙碌", "Busy"],
            msgStatusLeave: ["离线", "離線", "Offline"],
            msgStatusCorbet: ["隐身", "隱身", "Invisible"],
            msgEntEmpty: ["企业名不能为空", "企業名不能為空!", "Enterprise name is required"],
            msgEntLengthError: ["企业名由2-50个中英文或数字组成", "企業名由2-50個中英文或數字字符組成!", "Enterprise name must be consist of 2~50 characters or numbers"],
            msgEntRegisted: ["该企业已存在", "該企業已存在", "This enterprise is already existed"],
            msgEntFormatError: ["企业名不能使用特殊字符", "企業名不能使用特殊字符!", "Cannot use the special characters for the enterprise name"],
            msgEntSpacesError: ["企业名开头和结尾不能使用空格", "企業名開頭和結尾不能有空格", "There should be no space between the beginning and ending of the enterprise name"],
            msgAccountEmpty: ["账号不能为空", "賬號不能為空!", "The account is required"],
            msgAccountLocked: ["账号被锁定", "賬號已被鎖定!", "The account is locked"],
            msgAccountLengthError: ["账号由2-20个中英文或数字组成", "賬號由2-20個中英文或數字字符組成!", "The account must be consist of 2~50 characters or numbers"],
            msgAccountSpacesError: ["账号开头和结尾不能使用空格", "賬號開頭和結尾不能有空格!", "There should be no space between the beginning and ending of the account"],
            msgPasswordEmpty: ["密码不能为空", "密碼不能為空!", "The password is required"],
            msgPasswordLength: ["密码由6-30个英文字母、数字或字符组成", "密碼由6-30中英文字母或數字字符組成!", "The password must be consist of 6~30 characters or numbers"],
            msgRepasswordEmpty: ["请再次输入您的密码", "請再次輸入您的密碼!", "Please re-enter your password"],
            msgLoginInfoError: ["登录信息有误", "登錄信息錯誤!", "The username or password you entered is incorrect"],
            msgServiceExpire: ["企业服务已到期", "企業服務已到期!", "Your service has expired"],
            msgRealnameEmpty: ["真实姓名", "輸入真實姓名!", "Name"],
            msgRealnameLength: ["真实姓名由2-60个字符组成", "真實姓名由2-60個中文/英文/字符組成", "real names of 2-60 Chinese / English / characters"],
            msgRealnameLengthLongError: ["真实姓名过长!", "真實姓名過長!", "Real name is too long!"],
            msgEmailEmpty: ["请填入您常用的邮箱!", "輸入您常用的郵箱!", "Email"],
            msgEmailRegisted: ["该邮箱已经被注册过!", "該郵箱已經被註冊過!", "The Email already exists"],
            msgEmailFormatError: ["邮箱地址格式错误!", "郵箱地址格式錯誤!", "Invalid email"],
            msgPhoneEmpty: ["号码不能为空!", "號碼不能為空!", "The phone is required"],
            msgPhoneLengthError: ["'号码长度为6-20位'", "'號碼長度為6-20位'", "The length should be 6~20 characters"],
            msgValidateError: ["验证码错误!", "驗證碼錯誤!", "Wrong verfication code"],
            msgAgreeTerms: ["同意条款才能注册!", "同意條款才能註冊!", "Agreed with the Terms of Service and then register"],
            msgNoUser: ["请选择用户!", "請選擇用戶!", "Please select the account"],
            msgSameFile: ["失败!存在同名文件!", "失敗!存在同名文件!", "Failed to operate! The name of the document cannot be the same"],
            msgUploadNumLimit: ["一次上传文件不能超过200个", "一次上傳文件不能超過200個", "Upload file cannot be more than 200!"],
            msgNoFile: ["请选择要操作的文件!", "請選擇要操作的文件!", "Please select the operation file"],
            msgNoFileFolder: ["请选择文件或文件夹!", "請選擇文件或文件夾!", "Please select the file or folder"],
            msgNoFolder: ["请选择文件夹!", "請選擇文件夾!", "Please select the folder"],
            msgNoPermission2: ["无此权限!", "無此權限!", "You have no permission!"],
            msgPersonFolderExceed: ["文件夹已满!请到购买中心扩展空间!", "文件夾已滿!請聯繫管理員擴展空間!", "Run out of space! Please contact the administrator to expand your space"],
            msgNameInjectError: ["名称不能包含代码!", "名稱不能包含代碼!", "Invalid name"],
            msgCreateDestFolderDeleted: ["您创建的文件所在文件夹已经被删除，请备份内容!", "您創建的文件所在文件夾已經被刪除，請備份內容!", "Please back up the files! The folder you created has already been deleted"],
            msgNameConflict: ["命名冲突!当前目录下有相同命名!", "命名衝突!當前目錄下有相同命名!", "Name conflict!The name is already taken under the current folder"],
            msgNameNull: ["名称不能为空!", "名稱不能為空!", "The name is required"],
            msgDiskSizeFull: ["云盘空间已满!", "雲盤空間已滿!", "The space is full"],
            msgDiskSizeLack: ["云盘空间不足!", "雲盤空間不足!", "Enterprise files is running out of space!"],
            msgNoFlashPlugin: ["使用上传功能，需要安装Flash插件，点击这里快速安装!", "使用上傳功能，需要安裝Flash插件，點擊這裡快速安裝!", "Please download and install adobe flash player before uploading, click here to install"],
            msgDiskLessAssign: ["企业云盘剩余空间不足分配", "企業雲盤剩餘空間不足分配", "The left space is not enough to be allocated"],
            msgDiskUsedOverAssign: ["云盘已使用空间超过分配空间", "雲盤已使用空間超過分配空間", "The used space has over the allocated space"],
            msgFolderNameConfict: ["当前文件夹下存在相同文件夹!", "當前文件夾下存在相同文件夾!", "There\\'re same folders in the current folder"],
            msgFolderCreateConflict: ["命名冲突!当前目录下有相同命名!", "命名衝突!當前目錄下有相同命名!", "Rename conflict! Current folder have the same name folder!"],
            msgFolderNameNull: ["文件夹名称不能为空!", "文件夾名稱不能為空!", "The folder name is required"],
            msgFolderNameInjectError: ["文件夹名称不能包含特殊符号!", "文件夾名稱不能包含特殊符號!", "Cannot use the special characters for the folder name"],
            msgFolderSaveConflict: ["操作失败! 存在同名文件夹!", "保存失敗!存在同名文件夾!", "Failed to save! The same folder exists"],
            msgFolderNoExist: ["文件夹不存在!", "文件夾不存在!", "The folder isn\\'t exist"],
            msgFolderMoveNameConflict: ["移动失败! 目标文件夹下有同名文件夹!", "移動失敗! 目標文件夾下有同名文件夾!", "Failed to save! There\\'re same folders in the target folder"],
            msgFolderDeleted: ["文件夹已被删除!", "文件夾已被刪除!", "The folder has already been deleted"],
            msgParentFolderDeleted: ["父文件夹已经被删除", "父文件夾已經被刪除", "Parent folder has been deleted!"],
            msgUploadCoverFail: ["覆盖失败! 请稍后重试!", "覆蓋失敗!請稍後重試!", "Fail to overwirte ! Please try again later"],
            msgUploadRootFolder: ["根目录下不能上传文件!", "根目錄下不能上傳文件!", "Cannot upload the files to the root directory"],
            msgUploadConflict: ["当前目录下有相同命名!是否重命名?", "當前目錄下有相同命名!是否重命名?", "The name is already taken under the current folder! Rename or not?"],
            msgFileContentInjectError: ["文档中存在非法的内容!请修改后再保存!", "文檔中存在非法的內容!請修改後再保存!", "There are inappropriate contents in this file ! Please modify and save"],
            msgFileLocked: ["文件已被锁定!", "文件已被鎖定!", "The file has been locked"],
            msgFileEditLocked: ["文件被加锁，无法编辑!", "文件被加鎖，無法編輯!", "The file has been locked and cannot edit"],
            msgFileNoExist: ["文件不存在!", "文件不存在!", "The file doesn\\'t exist"],
            msgFileDelLocked: ["文件被锁定!请先解锁!", "文件被鎖定!請先解鎖!", "The file has been locked ! Please unlock to continue the operation"],
            msgFileMoveNameConflict: ["移动失败! 目标文件夹下有同名文件!", "移動失敗! 目標文件夾下有同名文件!", "Failed to move! There\\'re same files in the target folder"],
            msgFileMoveSuccess: ["文件移动成功!", "文件移動成功!", "Moved successfully"],
            msgFileRoot: ["根目录下不能存放文件!", "根目錄下不能存放文件!", "Cannot store the files in the root directory"],
            msgEntDefaultFolder: ["根目录下不能存放文件,文件将存放在‘共享文件夹’下！", "根目錄下不能存放文件,文件將存放在'共享文件夾'下！", "Can\\'t store the files in the root directory! The file will be stored in the‘Shared folder’！"],
            msgPersonDefaultFolder: ["根目录下不能存放文件,文件将存放在‘我的文档’下！", "根目錄下不能存放文件,文件將存放在'我的文檔'下！", "Can\\'t store the files in the root directory! The file will be stored in‘My document’！"],
            msgFileDealing: ["文档处理中, 请稍候!", "文檔處理中, 請稍候!", "Processing, please hold on"],
            msgFileTransterFail: ["文档转换失败!请稍后重试!", "文檔轉換失敗!請稍後重試!", "Failed to convert! Please try again later"],
            msgFileDealComplete: ["文档处理完成, 请点击打开!", "文檔處理完成, 請點擊打開!", "Processing completed, please click to open"],
            msgFileConflict: ["文件夹下存在同名文件", "文件夾下存在同名文件", "There\\'re files with the same name in the folder"],
            msgFileDeleted: ["文件无法找到，可能被删除，请刷新后重试!", "文件無法找到，可能被刪除，請刷新後重試!", "The file cannot be found or deleted, please refresh and retry"],
            msgFileVerConflict: ["文件版本冲突", "文件版本衝突", "Version conflict"],
            msgNameFileError: ['文件名不能为空! 且不能包含任何以下符号：  / : * ? \\" < > |', '文件命名中不能包含任何以下符號：  / : * ? \\" < > |', 'Filename cannot contain any of the following characters:  / : * ? " < > |'],
            msgNameFolderError: ['文件夹命名中不能包含任何以下符号：  / : * ? \\" < > |', '文件夹命名中不能包含任何以下符号：  / : * ? \\" < > |', 'Foldername cannot contain any of the following characters:  / : * ? " < > |'],
            msgIsSureDel: ["确定删除?", "確定刪除?", "Are you sure to delete?"],
            msgIsSureLock: ["确定锁定?", "確定鎖定?", "Are you sure to lock?"],
            msgFileIsLockedByYou: ["该文件被您锁定!请解锁后操作。", "該文件被您鎖定!點擊解鎖按鈕進行解鎖", "The file has been locked! Please unlock first"],
            msgOtherUser: ["其他账号", "其他用戶", "Other accounts"],
            msgFileIsLock: ["该文件被锁定", "該文件被鎖定", "The file has been locked"],
            msgPlsContact: ["请联系", "請聯繫", "Please contact"],
            msgContactAdminUnlock: ["或 管理员 进行解锁!", "或管理員進行解鎖!", " or  administrator to unlock"],
            msgFolder: ["文件夹", "文件夾 ", "folder"],
            msgFile: ["文件", "文件", "file"],
            msgIsSureUnlock: ["确定解锁?", "確定解鎖?", "Are you sure to unlock?"],
            msgUngrpContact: ["未分组联系人", "未分組聯繫人", "Ungrouped contacts"],
            msgFileInvisible: ["无权限查看文件，或者文件被修改、删除!", "無權限查看文件，或者文件被修改、刪除，無法找到!", "No permission to preview the file, or the file has already been modified or deleted"],
            msgRenameNull: ["名称不能为空", "名稱不能為空", "The name is required"],
            msgRenameForbidden: ["不能重命名", "不能重命名", "Cannot rename"],
            msgRenameOne: ["一次只能重命名一个文件或文件夹!", "一次只能重命名一個文件或文件夾!", "Only one file or folder can be renamed one time"],
            msgRenameFail: ["重命名失败", "重命名失敗", "Rename failed"],
            msgCopyToParent: ["该文件夹下已有此文件，请重新选择文件夹!", "該文件夾下已有此文件，請重新選擇文件夾!", "The folder has this file, please re-select the folder!"],
            msgVersionEditConflict: ["修改失败!该文件已被他人修改。", ",修改失敗，版本衝突!文件已被他人修改!", "Failed to modify! The file has been modified by the others"],
            msgVersionDelConflict: ["删除失败!该文件已被他人修改。", "刪除失敗!版本衝突，該文件已被修改!", "Failed to delete failed ! The file has been modified by the others"],
            msgLockFail: ["锁定失败!", "鎖定失敗!", "Failed to lock "],
            msgLockNoFile: ["请选择要锁定的文件!", "請選擇要鎖定的文件!", "Please select the file you want to lock"],
            msgLockOne: ["一次只能锁定一个文件!", "一次只能鎖定一個文件!", "Only one file can be locked one time"],
            msgUnlockFail: ["解锁失败!", "解鎖失敗!", "Failed to unlock"],
            msgUnLockOne: ["一次只能解锁一个文件!", "一次只能解鎖一個文件!", "Only one file can be unlocked one time"],
            msgUnLockNoFile: ["请选择要解锁的文件!", "請選擇要解鎖的文件!", "Please select the file you want to unlock"],
            msgAttentionFail: ["关注失败!", "關注失敗!", "Failed to follow"],
            msgUnAttentionFail: ["取消关注失败!", "取消關注失敗!", "Failed to unfollow"],
            msgUnCollectSuccess: ["取消收藏成功!", "取消收藏成功!", "Failed to remove star"],
            msgCollectFail: ["收藏失败!", "收藏失敗!", "Failed to star"],
            msgCollectSuccess: ["收藏成功!", "收藏成功!", "Starred successfully"],
            msgCollectFolderError: ["不能收藏文件夹!", "不能收藏文件夾!", "Cannot star the folder"],
            msgUnCollectFail: ["收藏文件失败!", "收藏文件失敗!", "Failed to star the file!"],
            msgUnCollectError: ["您选中的文件中存在没有被收藏的!", "您選中的文件中存在沒有被收藏的!", "You selected has no starred files!"],
            msgLinkEndtimeError: ["分享到期时间不能早于今天!", "分享到期時間不能早於今天!", "The expiration date of share link cannot be earlier than today"],
            msgLinkPasswordLength: ["密码长度4-6位!", "密碼長度4-6位!", "The length of the password should be 4~6 characters"],
            msgLinkAddressEmpty: ["请输入收件人的邮箱!", "請輸入收件人的郵箱!", "Please enter the receivers\\' Email addresses"],
            msgLinkContactEmpty: ["请选择收件人!", "請選擇接收郵件的聯繫人!", "Please select the receiver (s)"],
            msgUnLinkSuccess: ["取消分享成功!", "取消分享成功!", "Disable link successfully"],
            msgMoveSuccess: ["移动成功!", "移動成功!", "Moved successfully"],
            msgMoveNoDest: ["请选择移动到的文件夹!", "請選擇移動到的文件夾!", "Please select the folder for moving to !"],
            msgMoveToRootFolder: ["不能移动到根目录!", "不能移動到根目錄!", "Can not be moved to the root!"],
            msgMoveToSub: ["移动失败!父文件夹无法移动到其子文件夹中。", "操作有誤!父文件夾無法移動到其子文件夾​​中!", "Failed to move! Parent folders can not be moved to its subfolders"],
            msgMoveSameDirError: ["移动失败!文件移动前后位置相同", "操作有誤!文件移動前後位置相同!", "Failed to move! You cannot move the file to the same directory"],
            msgMoveOnFolderConflict: ["移动失败! 目标文件夹下有同名文件夹!", "移動失敗! 目標文件夾下有同名文件夾!", "Failed to move! There\\'re same folders in the target folder!"],
            msgMoveOnFileConflict: ["移动失败! 目标文件下有同名文件!", "移動失敗! 目標文件下有同名文件!", "Failed to move! There\\'re same folders in the target file!"],
            msgMoveOnVersionConflict: ["移动失败!当前文件已被他人修改。", "移動失敗!當前文件已被修改!", "Failed to move! The current file has already been modified by the others"],
            msgMoveForbidden: ["不能移动!", "不能移動!", "Can\\'t move!"],
            msgCopyNoFile: ["请选择要操作的文件!", "請選擇要操作的文件!", "Please select the files you want to operate"],
            msgCopyFolderError: ["不支持文件夹复制!", "不支持文件夾複製!", "Cannot copy the folder"],
            msgFileCopySuccess: ["文件复制成功!", "文件複製成功!", "Copied file successfully"],
            msgCompressComplete: ["压缩完成!请点击下载按钮下载。", "壓縮完成!請點擊下載按鈕下載!", "Compressed completed! Please click the button to download"],
            msgZipComplete: ["文件夹的文件压缩完成!请点击确认按钮下载!", "文件夾的文件壓縮完成!請點擊確認按鈕下載!", "Compressed completed! Please click the button to download!"],
            msgDownloadOnCompressing: ["已有文件正在压缩中，请稍后重试!", "其他文件正在壓縮中, 請稍後!", "The files are compressing, please try again later"],
            msgDownloadOnLargeCompressing: ["文件压缩中!压缩完成后，您将收到系统消息提醒您进行下载。", "文件壓縮中!壓縮完成後您將收到系統消息提示您進行下載!", "The files are compressing! After completed, you will get the system messages to remind you to download"],
            msgCompressFail: ["压缩失败!请重新下载。", "壓縮失敗!請重新下載!", "Failed to compress! Please retry"],
            msgSaveToFolderDeleted: ["当前文件保存路径已被管理员修改!请备份文件。", "當前文件保存路徑已被管理員修改!請備份文件內容!", "The saving routine of the current file has already been modified by the administrator! Please restore the files"],
            msgMailSendFail: ["邮件发送失败!请稍后重试。", "郵件發送失敗!請稍後重試!", "Failed to send email! Please try again later"],
            msgMailSendSuccess: ["邮件发送成功!", "發送郵件成功!", "Sent successfully"],
            msgPersonFolderClosed: ["您的个人文件夹已被关闭!", "您的個人文件夾被關閉!", "Your personal files has been closed"],
            msgGetPermissionFail: ["权限获取失败! 请稍后重试。", "獲取權限失敗!請稍後重試!", "Failed to load the file permission configuration, please try again later"],
            msgPermissionNoUser: ["请选择账号!", "請選擇用戶!", "Please select the account"],
            msgPermissionFail: ["权限设置失败!请重新设置。", "權限設置異常!請重新設置!", "Failed to set the permission, please reset again."],
            msgPermissionSuccess: ["权限设置成功!", "權限設置成功!", "Set the permission successfully"],
            msgReadUnsupport: ["该文件暂不支持预览!", "該文件暫不支持預覽!", "The document doesn\\'t support preview for the moment"],
            msgReadDelFile: ["您查看的图片已经被删除,我们将展示图片列表中的第一张图片!", "您查看的圖片已經被刪除,我們將展示圖片列表中的第一張圖片!", "The picture you saw has been deleted, we\\'ll show the first picture in the picture list!"],
            msgFirstPic: ["当前图片是第一张!", "當前圖片是第一張!", "The current picture is the first one!"],
            msgLastPic: ["当前图片是最后一张!", "當前圖片是最後一張!", "The current picture is the last one!"],
            msgFirstPagePic: ["当前已是第一组图片!", "當前已是第一組圖片!", "This\\'s the first set of pictures!"],
            msgLastPagePic: ["当前已是最后一组图片!", "當前已是最後一組圖片!", "This\\'s the last set of pictures!"],
            msgBigestPic: ["不能再放大了!", "不能再放大了!", "Can not be magnified!"],
            msgLeastPic: ["不能再缩小了!", "不能再縮小了!", "Can not be demagnified!"],
            msgEditUnsupport: ["该文件暂不支持在线编辑!", "該文件暫不支持在線編輯!", "The document doesn\\'t support online editing"],
            msgRecoverFail: ["恢复失败!请稍后重试。", "恢復失敗!請稍後重試!", "Failed to restore! Please try again later"],
            msgRecoverSuccess: ["恢复成功!", "恢復成功!", "Restored successfully"],
            msgRecoverNoVersion: ["请选择要保存的文件版本!", "請選擇要保存的文件版本!", "Please select the file version for saving"],
            msgRecoverySaveasFail: ["保存失败!请稍后重试。", "保存失敗!請稍後重試!", "Failed to save! Please try again later"],
            msgRecoverySaveasSuccess: ["保存成功!", "保存成功!", "Saved successfully"],
            msgMarkFail: ["备注修改失败! 请稍后重试。", "修改備註失敗!請稍後重試!", "Failed to modify the remarks, please try again later."],
            msgMarkSuccess: ["备注修改成功!", "修改備註成功!", "You have successfully modified the remarks ! "],
            msgRecycleVerConflict: ["版本冲突! 请刷新后重试。", "版本衝突!請刷新後重試!", "Version conflict, please refresh and try again !"],
            msgRecycleFileConflict: ["目标文件夹下有同名文件!", "目標文件夾下有同名文件!", "There\\'re files with the same name in the target folder !"],
            msgRecycleFolderConflict: ["目标文件夹下有同名文件夹!", "目標文件夾下有同名文件夾!", "There\\'re folders with the same name in the target directory !"],
            msgConfirmEmptyRecycle: ["确定要清空回收站内所有的文件吗?", "您確定要清空回收站內所有的文件嗎?", "Are you sure to empty all?"],
            msgShareOne: ["一次只能分享一个文件或文件夹!", "一次只能分享一個文件或文件夾!", "Only one file or folder can be shared one time"],
            msgUnShareOne: ["一次只能取消分享一个文件或文件夹!", "一次只能取消分享一個文件或文件夾!", "Only one file or folder can be cancelled sharing one time"],
            msgDeleteOnVerConflict: ["删除失败！文件版本冲突。", "刪除失敗，文件版本衝突!", "Failed to delete! File version conflict"],
            msgSysFileForbidden: ["您无权修改系统文件。", "您無權修改系統文件!", "Sorry, you have no permission to modify the system files"],
            msgSysFolderForbidden: ["您无权修改系统文件!", "您無權修改系統文件!", "Sorry, you\\'ve no permission to modify the system files!"],
            msgSysRenameForbidden: ["系统文件不支持重命名!", "系統文件不支持重命名!", "Not support to rename the system files"],
            msgSysDelForbidden: ["系统文件不支持删除!", "系統文件不能刪除!", "Not support to delete the system files"],
            msgSysMoveForbidden: ["文件不支持移动!", "系統文件不支持移動!", "Not support to move the system files"],
            msgAddUsualNoUser: ["请选择要添加的常用联系人!", "請選擇要添加的常用聯繫人!", "Please select the frequent contacts you want to add"],
            msgAddUsualSucess: ["添加成功!", "添加成功!", "Added successfully"],
            msgAddUsualFail: ["添加失败!请稍后尝试。", "添加失敗!請稍後嘗試!", "Failed to add! Please try again later"],
            msgDelUsualNoUser: ["请选中要删除的常用联系人!", "請選擇要刪除的常用聯繫人!", "Please select the frequent contacts you want to delete"],
            msg1191: ["删除成功!", "删除成功!", "Delete success!"],
            msgDelUsualFail: ["删除失败!请稍后尝试。", "刪除失敗!請稍後嘗試!", "Failed to delete! Please try again later"],
            msgChatInjectError: ["发送失败!您输入的信息包含不安全信息。", "發送失敗!您輸入的信息包含不安全信息!", "Failed to send! The contents you enetered contains invalid information."],
            msgChatOnline: ["只能与在线用户进行视频。", "只能與在線用戶進行視頻!", "You can only start video chat with online colleagues."],
            msgSendFileError: ["系统有误! 我们将尽快解决问题，是否发送有误报告?", "系統錯誤!我們將盡快解決問題，是否發送錯誤報告?", "System error ! Help us to solve this problem by sending the error report."],
            msgReceiveFileError: ["接收失败!", "接收失敗!", "Failed to receive!"],
            msgFileMissed: ["文件无法找到或被删除，请刷新后重试!", "文件無法找到，可能被刪除，請刷新後重試!", "The file cannot be found or deleted, please refresh and retry"],
            msgMeetingNoName: ["会议室名称不能为空!", "請為會議室命名!", "The name of the conference room is required"],
            msgMeetingNameConflict: ["该会议室已存在!", "會議室命名衝突!", "This conference room already exists"],
            msgCreateMeetingFail: ["会议创建失败!", "會議創建失敗!", "Failed to create the conference."],
            msgDelMeetingFail: ["会议删除失败!", "會議刪除失敗!", "Failed to deleted the conference."],
            msgOpenAttNoPermission: ["无此权限!请联系管理员授权。", "無此權限!請聯繫管理員授權!", "No permission! Plesase contact the administrator for authorization"],
            msgAttFileNoExist: ["文件不存在!文件被修改或删除!", "文件不存在!文件被修改或刪除!", "The file doesn\\'t exist! It's been modified or deleted"],
            msgEditAccountFail: ["修改个人资料失败!", "修改個人資料失敗!", "Failed to modify personal data."],
            msgOriginPassError: ["旧密码不正确!", "原始密碼不正確!", "Invalid old password"],
            msgNewPassLength: ["密码由6-30个字符组成!", "密碼由6-30個字符組成!", "The password should be consist of 6-30 characters"],
            msgEditPassFail: ["系统有误!请稍后重试。", "系統錯誤!請稍後重試!", "System error!Please try again later"],
            msgEditPassSuccess: ["密码修改成功!", "密碼修改成功!", "You have successfully modified the password."],
            msgSysSettingSuccess: ["修改成功!", "修改成功!", "Modified successfully"],
            msgLinkNoExist: ["分享不存在!", "分享不存在!", "The share link doesn\\'t exist"],
            msgLinkExpire: ["分享已过期!", "分享已過期!", "The share link has expired"],
            msgLinkPasswordError: ["密码有误", "密碼錯誤", "Wrong password"],
            msgLinkFolderConflict: ["保存失败!存在同名文件夹。", "保存失敗!存在同名文件夾!", "Failed to save! There\\'re folders with the same name in the current directory."],
            msgLinkSaveFail: ["保存失败!", "保存失敗!", "Failed to save"],
            msgLinkDownloadDisable: ["该文件分享不支持下载!", "該分享文件不能下載!", "The share links cannot be downloaded"],
            msgLinkDownloadNoFile: ["请选择要下载的文件!", "請選擇要下載的文件!", "Please select the files to download"],
            msgDeptNameError: ["只能用中英文,不能使用特殊符号（英文中间可以使用空格）", "只能用英文、中文不能使用特殊符號（英文單次中間可以使用空格）", "You can only use special characters."],
            msgDeptExisted: ["该部门已存在!", "該部門已存在!", "This department already exists"],
            msgCreateDeptFail: ["新建部门失败", "新建部門失敗", "Failed to create the department!"],
            msgDelDeptConfirm: ["该部门及其所有子部门也将同时被删除，其下所有成员将成为未分组成员!您确定删除该部门吗？", "該部門及其所有子部門也同時被刪除，部門及其所有子部門下的所有成員成為未分組成員!您確定刪除該部門嗎", "The department and all its sub-sectors have also been removed, all the members of the departments and sub-departments will become the ungrouped members! Are you sure to delete the department?"],
            msgDelDeptFail: ["删除部门失败", "刪除部門失敗", "Failed to delete the department!"],
            msgAddAccountSuccess: ["成员添加成功!", "成員添加成功!", "You have successfully added the members !"],
            msgCreateAccNoFolder: ["请选择文件夹!", "請選擇文件夾!", "Please select the folder"],
            msgAccSafeAuthFail: ["账号信息不规范或不完整!请修改后再次提交。", "用戶信息不規範或不完整!請修改後再次提交!", "The account information is not standardized or incomplete! Please modify and submit again"],
            msgAccMunbersLimit: ["企业账号数不足，请联系管理员购买!", "企業可用用戶數不足!請聯繫管理員購買!", "You cannot create more accounts for your colleagues, please contact the administrator to purchase extra plans"],
            msgAccExisted: ["该账号已经存在!", "該賬號已經存在!", "The account already exists"],
            msgMailPhone: ["请输入正确的邮箱地址或者正确的手机号码!", "請輸入正確的郵箱地址或者正確的手機號碼!", "Please enter a valid email address or phone number!"],
            msgAccGetPermFail: ["网络不稳定!请稍后重试。", "網絡不穩定!請稍後重試!", "The network is unstable! Please try again later"],
            msgAccEditPermNoPerm: ["请设置文件相应权限!", "請對文件設置相應權限!", "Please set the appropriate file permissions"],
            msgAccEditPermSuccess: ["权限修改成功!", "權限修改成功!", "Modify the permission successfully"],
            msgAccEditSuccess: ["账号修改成功!", "賬號修改成功!", "You have successfully modified the account."],
            msgAccLocked: ["该账号已被锁定!", "該賬號已被鎖定!", "The account has been locked"],
            msgAccLockSucess: ["账号锁定成功!", "賬號鎖定成功!", "You have successfully locked the account."],
            msgAccUnlockSuccess: ["账号解锁成功!", "賬號解鎖成功!", "You have successfully unlocked the account."],
            msgDelAccConfirm: ["确定要删除该账号?", "您確定要刪除該賬號嗎?", "Are you sure to delete this account"],
            msgDelAccSuccess: ["账号删除成功!", "賬號刪除成功!", "Account deleted successfully"],
            msgFolder0Size: ["文件夹容量不能小于1个单位!", "文件容量不能為0!", "The storage of the folder cannot less than one unit"],
            msgPersonFolderLess: ["个人文件夹容量不能小于已使用容量!", "個人文件容量不能小於已使用容量!", "The space of personal files cannot be smaller than the space used now"],
            msgEntServiceExpire: ["企业服务已到期，请联系管理员续费!", "企業服務已到期!請聯繫管理員續費!", "Your service has expired, please contacts the administrator to purchase extra plans"],
            msgEntNotExist: ["企业不存在!", "企業不存在!", "The enterprise does not exist"],
            msgEditPasswordSuccess: ["密码修改成功!", "密碼修改成功!", "You have successfully modified the password!"],
            msgImportFormatError: ["文件格式不正确!请下载标准模板，正确填写后导入。", "文件格式不正確!請下載標準模板，正確填寫後導入!", "File format is incorrect! Please download the standard template, filled correctly and then import"],
            msgImportInfoError: ["导入的账号信息不规范或不完整!请修改后再次导入。", "導入的用戶信息不規範或不完整!請修改後再次導入!", "The imported account information is non-standard or incomplete! Please modify and import again"],
            msgImportAccLenSpace: ["账号由2~50个字符组成,并且开头、结尾不能使用空格!", "賬號由2~50個字符組成, 且開頭結尾不能為空!", "The account shoud be consist of 2~50 characters, the beginning and the end can not use the space"],
            msgImportAccountOK: ["账号导入成功!", "賬號導入成功!", "You have successfully imported the accounts !"],
            msgImportGenderEmpty: ["请选择性别", "性別不能為空", "Please select the gender"],
            msgImportEmailEmptyFormat: ["邮箱不能为空,并且格式要规范!", "郵箱不能為空, 且格式要正確!", "Invalid email address"],
            msgLockAdmin: ["无此权限!该账号为超级管理员。", "無此權限!該賬號為企业管理员!", "No permission! This account is the super administrator"],
            msgUnlockAdmin: ["无此权限!该账号为超级管理员!", "無此權限!該賬號為企业管理员!", "No permission ! This account is the super administrator!"],
            msgOperateAdmin: ["无此权限!该账号为超级管理员!", "無此權限!該賬號為企业管理员!", "No permission ! This account is the super administrator!"],
            msgGetInfoFail: ["网络不稳定!请稍后重试!", "網絡不穩定!請稍後重試!", "The network is not stable ! Please try again later!"],
            msgAdminNameEmpty: ["请输入真实姓名!", "請輸入用戶真實姓名!", "Please enter your name"],
            msgAdminPhoneEmpty: ["电话不能为空", "電話不能為空!", "Phone is required"],
            msgAdminPhoneLength: ["手机号码（11位）或座机号码（区号-电话号码）", "手機號碼（11位）或座機號碼（區號-電話號碼）!", "Phone number (11 characters) or landline numbers (area code - phone number)"],
            msgAdminEmailFormatError: ["邮箱格式不规范", "郵箱格式不正確!", "Email format is unnormal"],
            msgAccIsAdmin: ["该账号已经是管理员!", "該賬號已經是管理員!", "This account has already been authorized as the administrator."],
            msgAdminCreateOk: ["管理员创建成功!", "管理員創建成功!", "You have successfully created the administrator !"],
            msgAdminSettingGetInfoFail: ["网络不稳定!请稍后重试!", "網絡不穩定!請稍後重試!", "The network is not stable ! Please try again later!"],
            msgAdminSettingNoFolder: ["请为管理员设置需要管理的文件夹!", "請設置該管理員需要管理的文件夾!", "Please set the folders need to be managed by the administrator"],
            msgAdminEditOk: ["管理员修改成功!", "管理員修改成功!", "You have successfully modified the administrator!"],
            msgAdminChangeOk: ["管理员更换成功!", "管理員更換成功!", "You have successfully changed the administrator!"],
            msgAdminLockOk: ["锁定成功!", "鎖定成功!", "Locked successfully"],
            msgAdminUnlockOk: ["解锁成功!", "解鎖成功!", "Unlocked successfully"],
            msgAdminDelOk: ["管理员删除成功!", "管理員刪除成功!", "Administrator deleted successfully"],
            msgDomainTestFail: ["域链接不可用!", "域鏈接不可用!", "Domain link is unavailable"],
            msgDomainTestOk: ["域链接可用!", "域鏈接可用!", "Domain link is available"],
            msgDomainFail: ["域设置失败!请检测域设置信息。", "域設置失敗!請檢測域設置信息!", "Failed to set the domain! Please check the domain setup information"],
            msgDomainOK: ["域设置成功!", "域設置成功!", "Domain setting successfully"],
            msgEntEditSuccess: ["企业信息修改成功!", "企業信息修改成功!", "You have successfully modified the enterprise information !"],
            msgRoleNameEmpty: ["请为角色命名!", "請為角色命名!", "Please name for the role"],
            msgRoleNoPerm: ["请为角色设置相应权限!", "請為角色設置相應權限!", "Please set the appropriate permissions for the role"],
            msgRoleNoAcc: ["请为角色添加账号!", "請為角色添加賬號!", "Please add the accounts for the role"],
            msgRoleExisted: ["该角色已经存在!", "該角色已經存在!", "The role already exists"],
            msgRoleCreateOk: ["角色创建成功!                                      `", "角色創建成功!", "You have successfully created the role!"],
            msgRoleEditGetInfoError: ["网络不稳定!请稍后重试!", "網絡不穩定!請稍後重試!", "The network is not stable ! Please try again later!"],
            msgRoleEditFail: ["系统有误!角色修改失败。", "系統錯誤!角色修改失敗!", "System error! Failed to modify"],
            msgRoleEditOk: ["角色修改成功!", "角色修改成功!", "You have successfully modified the role!"],
            msgRoleNameFormatError: ["中文不能使用空格，英文中间可以使用空格；但不能使用特殊字符", "中文賬號不能使用空格，英文單次中間可以使用空格，不能使用特殊字符", "You can not use spaces when using Chinese, however, the space between English is allowed; but without the special characters"],
            msgDelRoleConFirm: ["确定要删除该角色?", "您確定要刪除該角色嗎?", "Are you sure to delete this role"],
            msgDelRoleFail: ["系统有误!删除角色失败。", "系統錯誤!刪除角色失敗!", "System error! Failed to delete the role"],
            msgDelRoleOk: ["角色已被删除!", "角色已被刪除!", "The role has been deleted"],
            msgReset: ["重置", "重置", "Reset"],
            msgConfirmResetLogo: ["确定还原默认Logo?", "確定還原默認Logo?", "Are you sure restore default Logo?"],
            msgChangeLogoFail: ["企业LOGO更换失败!", "企業LOGO更換失敗!", "Failed to replace the LOGO"],
            msgPhoneNotEnable: ["您企业尚未开通云电话功能，请联系管理员开通。", "您公司尚未開通雲電話功能, 請聯繫管理員開通!", "Your enterprise has not activated the cloud phone yet, please contact the administrator to open"],
            msgPhoneNotSetting: ["请先添加您的手机号码：请点击头像->账户管理->工作信息->手机号码 中添加。", "請點擊頭像-->賬號管理-->手機號碼中添加手機號碼，然後才能成功撥號!", "Please add your phone number first: click on the profile picture -> Account Management -> Job Information -> phone numbers, to add"],
            msgPhoneTimeLess: ["贵企业剩余云电话分钟数不足，请联系管理员续费!", "貴公司雲電話的分鐘數已經不夠使用! 請聯繫管理員續費!", "The minutes of the cloud phone for your enterprise has been used up, please contact the administrator for extra plans"],
            msgQueryPhoneRecord: ["通话查询", "通話查詢", "Call Query"],
            msgUnConnect: ["未接通", "未接通", "Not turned"],
            msgConnectSuccess: ["通话成功", "通話成功", "Call success"],
            msgInfoDealing: ["数据处理中", "数据处理中", "Data Processing"],
            msgPhoneRecord: ["通话记录", "通話記錄", "Call records"],
            msgLook: ["查 看", "查 看", "Viewing"],
            msgCloseUp: ["收 起", "收 起", "Colspase"],
            msgDetails: ["详情", "詳情", "Detail"],
            msgNextStep: ["下一步", "下一步", "Next"],
            msgSubmitEdit: ["提交修改", "提交修改", "Submit"],
            msgResend: ["再次发送", "再次發送", "Resend"],
            msgClickResend: ["秒后再次点击发送", "秒後再次點擊發送", " seconds,click resend again"],
            msgMailExisted: ["邮箱地址已存在！", "郵箱地址已存在！ ", "Email address already exists！"],
            msgPhoneExisted: ["手机号码已存在！", "手機號碼已存在！ ", "Cellphone already exists！"],
            msgMailOrPhoneCorrect: ["请输入正确的邮箱或手机号码！", "請輸入正確的郵箱或手機號碼！ ", "Please enter a valid email address or phone number！"],
            msgSetPwd: ["设置密码", "设置密码", "Set password"],
            msgCompleteEntInfo: ["完善您企业的基本信息", "完善您所在企業的基本信息", "Please perfect the basic information of your enterprise"],
            msgInputNewPwd: ["设置燕麦企业云盘登录密码", "設置燕麥企業雲盤登錄密碼", "Please enter a login password"],
            msgValitdateTimeOut: ["验证超时!请重新发送验证码，再次验证!", "驗證超時!請重新發送驗證碼，再次驗證!", "Authentication timeout!Please resend the verification code and verify again!"],
            msgFolderSpaceOver: ["目标文件夹空间不足!", "目標文件夾空間不足!", "The target folder is out of space!"],
            msgGetPwdTitle: ["找回密码-燕麦企业云盘", "找回密碼-燕麥企業雲盤", "Forgot your password - OATOS enterprise cloud disk"],
            msgGetPwd: ["找回密码", "找回密碼", "Forget your password?"],
            msgLoginMailOrPhone: ["您的登录账号：邮箱地址或者手机号", "您的登錄賬號：郵箱地址或者手機號", "Your login account: E-mail address or phone number"],
            msgAskQuestion: ["如有任何问题，请联系客服人员：", "如有任何問題，請聯繫客服人員：", "If you have any questions, please contact customer service: "],
            msgInviteColleague: ["邀请同事加入", "邀請同事加入", "Invite colleagues to join"],
            msgColleagueInfo: ["同事信息", "同事信息", "Colleague Info"],
            msgColleagueMailOrPhone: ["同事的邮箱地址\\手机号码", "同事的郵箱地址\\手機號碼", "Colleague\\'s e-mail address/phone number"],
            msgUsualMailOrPhone: ["常用的邮箱地址或手机号码", "常用的郵箱地址或手機號碼", "Your email address or cellphone"],
            msgMailOrPhone: ["邮箱地址/手机号", "郵箱地址/手機號", "Email address / cellphone"],
            msgSendValiInfo: ["发送验证信息", "發送驗證信息", "Send the authentication info"],
            msgBackLogin: ["返回登录界面", "返回登錄界面", "Return to the login page"],
            msgChangePwdOk: ["密码修改成功!", "密碼修改成功!", "Password changed successfully!"],
            msgTips: ["温馨提示", "溫馨提示", "Warm tips"],
            msgLoginNow: ["马上登录", "馬上登錄", "Login now"],
            msgRegisterS: ["注&nbsp;&nbsp;册", "注&nbsp;&nbsp;冊", "Register&nbsp;&nbsp;"],
            msgAccountLogin: ["已有账号登录", "已有賬號登錄", "The login already has an account"],
            msgAccountReg: ["账号注册", "賬號註冊", "Register"],
            msgForgetPwd: ["忘记密码", "忘記密碼", "Forgot password"],
            msgLoginS: ["登&nbsp;&nbsp;录", "登&nbsp;&nbsp;錄", "Login&nbsp;&nbsp;"],
            msgShiftLogin: ["切换登录界面", "切換登陸界面", "Switch to login page"],
            msgOldLogin: ["旧登录界面", "舊登錄界面", "Old version"],
            msgLoginPwd: ["登录密码", "登錄密碼", "Login password"],
            msgEntName: ["企业名称", "企業名稱", "Enterprise name"],
            msgMailOrPhoneOrAccount: ["账号/邮箱地址/手机号", "賬號/郵箱地址/手機號", "Account/Email address/Cellphone"],
            msgNewLogin: ["新登录界面", "新登錄界面", "New version"],
            msgEntNameComplete: ["建议输入完整企业名称", "建議輸入完整企業名稱", "Suggest to enter the full name of the enterprise "],
            msgContact: ["联系人", "聯繫人", "Contacts"],
            msgContactNotEmpty: ["联系人不能为空", "聯繫人不能為空", "Contact can't be empty"],
            msgContactWay: ["联系方式", "聯繫方式", "Contact"],
            msgContactWayNotEmpty: ["联系方式不能为空", "聯繫方式不能為空", "Contact can not be empty "],
            msgMailMobilePhone: ["邮箱地址\\手机号码\\座机号码", "郵箱地址手機號碼座機號碼", "Email addressCellphoneTelephone"],
            msgPrevStep: ["上一步", "上一步", "Back"],
            msgLoginDiskPwd: ["请输入登录密码", "請輸入登錄密碼", "Enter login password"],
            msgInputPwdAgain: ["再次输入密码", "再次輸入密碼", "Re-enter password"],
            msgFinish: ["完成", "完成", "Finished"],
            msgEntRegSuccess: ["企业注册成功!", "企業註冊成功!", "Enterprise registered successfully!"],
            msgLoginAccount: ["登录账号", "登錄賬號", "Login Account"],
            msgMailMessageSent: ["系统给您的注册邮箱{{account}}发送了一封验证邮件, 请登录邮箱查看", "系統給您的註冊郵箱{{account}}發送了一封驗證郵件, 請登錄郵箱查看", "the system has sent a verification email to you {{account}}, please login your email to see!"],
            msgPhoneMsgSend: ["系统给您的注册手机{{account}}发送了一封短信, 请查看您的手机", "系统给您的注册手机{{account}}发送了一封短信, 请查看您的手机", "the system has sent a sms to your phone {{account}}, please see your phone!"],
            msgSenconds: ["秒", "秒", "seconds"],
            msgInputPhoneValidate: ["请输入手机验证码", "請輸入手機驗證碼", "Please enter the phone verification code"],
            msgResendValidate: ["重新发送验证码", "重新發送驗證碼", "Resend verification code"],
            msgSubmitValiCode: ["提交验证码", "提交驗證碼", "Submit verification code"],
            msgAboutUs: ["关于我们", "關於我們", "About us"],
            msgLogin: ["登录", "登錄", "Login"],
            msgRegister: ["注册", "註冊", "Register"],
            msgMailPhoneToLogin: ["建议使用企业邮箱注册", "建議使用企業郵箱註冊", "E-mail registration is recommended to use"],
            msgDoubtConsult: ["如有任何问题，请联系客服人员：", "如有疑問請諮詢", "Any questions,please feel free to contact us"],
            msgCSOnline: ["在线客服", "在線客服", "Online Service："],
            msgOrCallPhone: ["客服热线：", "客服熱線：", "Call："],
            msgContactCS: ["以上方式无法找回密码的用户，请联系客服处理", "以上方式無法找回密碼的用戶，請聯繫客服處理", "The above methods cannot retrieve password,please contact the custumer service"],
            msgPhone: ["电话", "電話", "Telephone"],
            msgMail: ["邮箱", "郵箱", "Email"],
            msgReadClause: ["请阅读服务条款, 并选择同意", "請先閱讀服務條款", "Please read the Terms of Service"],
            msgClickToMessage: ["点击这里给我发消息", "點擊這裡給我發消息", "Click here to send a message"],
            msgDownloadFile: ["下载文件", "下載文件", "Download files"],
            msgDownloadRoute: ["下载路径", "下載路徑", "Download path"],
            msgChooseRoute: ["请选择路径", "請選擇路徑", "Please choose the path"],
            msgBrowser: ["浏 览", "瀏 覽", "Browse"],
            msgDownload: ["下 载", "下 載", "Download"],
            msgCancel: ["取 消", "取 消", "Cancel"],
            msgLocalPhoto: ["本地相片", "本地相片", "Local photos"],
            msgSaveImg: ["保存头像", "保存頭像", "Save picture"],
            msgChooseValidate: ["验证邮箱地址或手机号", "验证邮箱地址或手机号", "Validate email or phone"],
            msgChooseMailValidate: ["验证邮箱地址", "验证邮箱地址", "validate email"],
            msgChoosePhoneValidate: ["验证手机号", "验证手机号", "validate phone"],
            msgUsualMailValidate: ["常用邮箱地址验证", "常用郵箱地址驗證", "Email address verification"],
            msgPhoneValidate: ["有效手机号码验证", "有效手機號碼驗證", "Valid phone number verification"],
            msgValidate: ["验证", "驗證", "Verification&nbsp;"],
            msgValidated: ["已验证", "已驗證", "Authenticated"],
            msgLoginValidate: ["登录账号验证", "登錄賬號驗證", "Login verification"],
            msgValidateBenifit: ["为什么要验证邮箱或手机号？", "為什麼要驗證郵箱或手機號？", "why need to validate email and phone?"],
            msgValidateDescription: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕麦企业云盘账号系统已升级，您验证邮箱地址或手机号后，可以享受更好的安全保障和功能体验。通过验证的邮箱地址和手机号，您可以：", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕麥企业雲盤账号系统已升级，您验证邮箱地址或手机号后，可以享受更好的安全保障和功能体验。通过验证的邮箱地址和手机号，您可以：", "&nbsp;&nbsp;OATOS account system has upgraded，after you validate email and phone，enjoy better security and functional experience. Validated email address and phone number, you can: "],
            msgUseForLogin: ["作为登录账号直接登录企业云盘;", "作為登錄賬號直接登錄企業雲盤;", "Can be as the login account to log in OATOS directly"],
            msgUseForGetPwd: ["在线找回企业云盘登录密码;", "在線找回企業雲盤登錄密碼;", "Can easily find OATOS login password"],
            msgMoreSecurity: ["验证手机号优先体验云电话功能。", "驗證手機號優先體驗雲電話功能。", "Can provide more security"],
            msgValidateMail: ["为什么要验证邮箱地址？", "為什麼要驗證郵箱地址？", "why need to validate email?"],
            msgValidateMailDescription: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕麦企业云盘账号系统已升级，您验证邮箱地址后，可以享受更好的安全保障和功能体验。通过验证的邮箱地址，您可以：", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕麥企业雲盤账号系统已升级，您验证邮箱地址后，可以享受更好的安全保障和功能体验。通过验证的邮箱地址，您可以：", "&nbsp;&nbsp;OATOS account system has upgraded，after you validate email ，enjoy better security and functional experience. Validated email address, you can: "],
            msgMailMoreSecurity: ["优先获得新功能体验或活动优惠。", "優先獲得新功能體驗或活動優惠。", "优先获得新功能体验或活动优惠."],
            msgValidatePhone: ["为什么要验证手机号？", "為什麼要驗證手機號？", "为什么要验证手机号？"],
            msgValidatePhoneDescription: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕麦企业云盘账号系统已升级，您验证手机号可以享受更好的安全保障和功能体验。通过验证的手机号，您可以：", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕麥企业雲盤账号系统已升级，您验证手机号可以享受更好的安全保障和功能体验。通过验证的手机号，您可以：", "&nbsp;&nbsp;OATOS account system has upgraded，after you validate email and phone，enjoy better security and functional experience. Validated email address and phone number, you can: "],
            msgPhoneMoreSecurity: ["优先体验云电话功能。", "優先體驗雲電話功能。", "优先体验云电话功能。"],
            msgRegAgain: ["验证信息丢失,请重新", "驗證信息丟失,請重新", "The authentication infomation is lost, please re-"],
            msgAccountUsed: ["账号已被使用", "賬號已被使用", "Account has been used"],
            msgEntNameUsed: ["该企业已被注册", "該企業已被註冊", "The Enterprise has been registered"],
            msgNoPermission: ["您还没有此权限", "您還沒有此權限", "You have no permission"],
            msgMeetingRoom: ["会议室", "會議室", "Meeting room"],
            msgEditFail: ["修改失败", "修改失敗", "Failed to modify"],
            msgEditOK: ["修改成功", "修改成功", "Modified successfully"],
            msgInputDeptName: ["请输入合法的部门名称!", "請輸入合法的部門名稱!", "Please enter a valid department name!"],
            msgRecycleEmpty: ["回收站中没有文件", "回收站中沒有文件", "No files in the Recycle Bin"],
            msgAttentionEmpty: ["没有关注的文件", "沒有關注的文件", "No followed files"],
            msgLinkEmpty: ["没有分享的文件", "没有分享的文件", "No share link files"],
            msgFavoriteEmpty: ["没有收藏的文件", "沒有分享的文件", "No starred files"],
            msgSearchEmpty: ["没有与搜索条件匹配的项", "沒有與搜索條件匹配的項", "No items match the current search"],
            msgMyDoc: ["我的文档", "我的文檔", "My document"],
            msgMyPic: ["我的图片", "我的圖片", "My pictures"],
            msgReceiveFiles: ["接收的文件", "接收的文件", "Received files"],
            msgSendFiles: ["发送的文件", "發送的文件", "Sent files"],
            msgShareFolder: ["共享文件夹", "共享文件夾", "Shared folders"],
            msgSimMyDoc: ["我的文档", "我的文档", "我的文档"],
            msgSimMyPic: ["我的图片", "我的图片", "我的图片"],
            msgSimReceiveFiles: ["接收的文件", "接收的文件", "接收的文件"],
            msgSimSendFiles: ["发送的文件", "发送的文件", "发送的文件"],
            msgSimShareFolder: ["共享文件夹", "共享文件夹", "共享文件夹"],
            msgTraMyDoc: ["我的文檔", "我的文檔", "我的文檔"],
            msgTraMyPic: ["我的圖片", "我的圖片", "我的圖片"],
            msgTraReceiveFiles: ["接收的文件", "接收的文件", "接收的文件"],
            msgTraSendFiles: ["發送的文件", "發送的文件", "發送的文件"],
            msgTraShareFolder: ["共享文件夾", "共享文件夾", "共享文件夾"],
            msgEngMyDoc: ["My document", "My document", "My document"],
            msgEngMyPic: ["My pictures", "My pictures", "My pictures"],
            msgEngReceiveFiles: ["Received files", "Received files", "Received files"],
            msgEngSendFiles: ["Sent files", "Sent files", "Sent files"],
            msgEngShareFolder: ["Shared folders", "Shared folders", "Shared folders"],
            msgFolderNameError: ["根目录文件夹不能命名为系统保留文件夹名!", "根目錄文件夾不能命名為系統保留文件夾名!", "The root folder can not be named folder name reserved for the system!"],
            msgLeave: ["离开", "離開", "leave"],
            msgOffline: ["离线", "離線", "offline"],
            msgAll: ["所有", "所有", "All"],
            msgCurrent: ["当前", "當前", "Current"],
            msgLangSetting: ["语言", "語言設置", "Language"],
            msgLanguage: ["中文简体", "中文繁體", "English"],
            msgChineseCn: ["中文简体", "中文简体", "中文简体"],
            msgChineseTw: ["中文繁體", "中文繁體", "中文繁體"],
            msgEnglish: ["English", "English", "English"],
            msgEntFileSize: ["企业文件容量", "企業文件容量", "Enterprise files storage"],
            msgPersonalFileSize: ["个人文件容量", "個人文件容量", "Personal files storage"],
            msgCurrentUsersNumber: ["当前用户数量", "當前用戶數量", "The current number of users"],
            msgLinkFlow: ["分享流量", "分享流量", "Share link flow"],
            msgShareFiles: ["分享文件", "分享文件", "Share Files"],
            msgEntFolder: ["企业文件夹目录", "企業文件夾目錄", "Enterprise Folder"],
            msgPersonFolder: ["个人文件夹目录", "個人文件夾目錄", "Personal Folder"],
            msgAddDelUser: ["添加/删除成员", "添加/刪除成員", "Add/Delete User"],
            msgSearchResults: ["搜索结果", "搜索結果", "Search Results"],
            msgEntFileDirectory: ["企业文件目录", "企業文件目錄", "Enterprise Folder"],
            msgInfoTip: ["信息提示", "信息提示", "Information Tips"],
            msgCreate: ["创建", "創建", "Create"],
            msgRecycle: ["删除回收站", "刪除回收站", "Remove to Recycle"],
            msgRestoreVersion: ["恢复版本", "恢復版本", "Restored version"],
            msgCreateLink: ["新建分享", "新建分享", "Create a new Link"],
            msgCreateTxt: ["新建文本", "新建文本", "New Text"],
            msgOldPwdCorrect: ["原始密码正确!", "原始密碼正確!", "Old password is Correct!"],
            msgNewSubDept: ["新建子部门", "新建子部門", "New sub-sectors"],
            msgSortDept: ["部门排序", "部門排序", "Sort department"],
            msgDelDept: ["删除", "刪除", "Delete"],
            msgSuperAdmin: ["企业管理员", "企业管理员", "Super Administrator"],
            msgSuperAdminIs: ["该用户为超级管理员", "該用户为企业管理员", "The user is super administrator!"],
            msgAdminIs: ["该用户为管理员", "該用戶為管理員", "The user is administrator"],
            msgUnlockAccount: ["解锁账号", "解鎖賬號", "Unlock Account"],
            msgLockAccount: ["锁定账号", "鎖定賬號", "Lock Account"],
            msgNormal: ["正常", "正常", "Normal"],
            msgUngroupContact: ["未分组联系人", "未分組聯繫人", "Ungrouped Contacts"],
            msgAdmin: ["管理员", "管理員", "Administrator"],
            msgSecAdmin: ["二级管理员", "二級管理員", "Second Administrator"],
            msgAuth: ["认证服务", "認證服務", "Authentication Service"],
            msgSecurityUpload: ["加密上传", "加密上傳", "Encryption Upload"],
            msgSecPwdTip: ["密码长度4~6位", "密碼長度4~6位", "password length of 4 to 6"],
            msgPwdInputTip: ["请输入加密密码!", "請輸入加密密碼!", "Please enter the encryption password!"],
            msgInputLoginPwd: ["请输入新的登录密码", "請輸入新的登陸密碼", "Please enter a new login password"],
            msgInputLoginPwdAgain: ["请再次输入新的登录密码", "請再次輸入新的登陸密碼", "Please enter a new login password again"],
            msgErrorValidationCode: ["验证码错误", "驗證碼錯誤", "Verification code error"],
            msgBBS: ["问题反馈", "問題反饋", "Feedback"],
            msgErrorWaiting: ["一分钟内不能重复发送验证信息", "一分鐘內不能重複發送驗證信息", "send authentication information can not be duplicated in a minute."],
            msgMailBinded: ["该邮箱已存在!<br/>请更换邮箱地址验证。", "該郵箱已存在！<br/>請更換郵箱地址驗證。", "The Email already exists ! <br/>Please change another one to verify again."],
            msgMailFormatError: ["请输入正确的邮箱地址", "請輸入正確的郵箱地址", "Please enter a valid email address"],
            msgMobileFormatError: ["请输入正确的手机号码", "請輸入正確的手機號碼", "Please enter the correct phone number"],
            msgMobileBinded: ["该手机号已存在!<br/>请更换手机号码验证。", "該手機號已存在！<br/>請更換手機號碼驗證。", "The cellphone already exists ! <br/> Please change another one to verify again."],
            msgNewMessage: ["您有新消息", "您有新消息", "You have new messages"],
            msgEmailBindSucc: ["邮箱验证成功!", "郵箱驗證成功!", "Mailbox Authentication is successful!"],
            msgEmailBindFail: ["邮箱验证失败!", "郵箱驗證失敗!", "Email Authentication failed!"],
            msgPhoneBindSucc: ["手机号绑定成功!", "手機號綁定成功!", "phone number to bind success!"],
            msgMinute: ["分钟", "分鐘", "minutes"],
            msgPerson: ["人", "人", "people"],
            msgStartAll: ["全部开始", "全部開始", "Start All"],
            msgChooseDelContacts: ["请选中要删除的联系人", "請選中要刪除的聯繫人", "Please select the contacts you want to delete"],
            msgFileNoSave: ["文档尚未保存, 确认要关闭吗? ", "文檔尚未保存, 确认要关闭吗?", "The document has not been saved, are you sure to close ?"],
            msgWebsiteTitle: ["燕麦企业云盘", "燕麥企业云盘", "OATOS"],
            msgCreateFileTitle: ["新建文档-燕麦企业云盘", "新建文檔-燕麥企业云盘", "New Document - OATOS enterprise cloud disk"],
            msgViewerTitle: ["文件浏览-燕麦企业云盘", "文件瀏覽-燕麥企业云盘", "File viewer - OATOS enterprise cloud disk"],
            msgShareTitle: ["文档共享-燕麦企业云盘", "文檔共享-燕麥企业云盘", "Shared Document - OATOS enterprise cloud disk"],
            msgLoginTitle: ["用户登录-燕麦企业云盘", "用戶登錄-燕麥企業雲盤", "User login - OATOS enterprise cloud disk"],
            msgRegisterTitle: ["用户注册-燕麦企业云盘", "用戶註冊-燕麥企業雲盤", "User Registration - OATOS enterprise cloud disk"],
            msgAdminTitle: ["后台管理-燕麦企业云盘", "後台管理-燕麥企業雲盤", "Manage - OATOS enterprise cloud disk"],
            msgZipNotFiles: ["该文件夹中没有文件!", "該文件夾中沒有文件!", "there is no file in this folder!"],
            msgEntAuthFirst: ["未认证的企业不能绑定显示号码! 请先到 服务中心 -> 认证服务 中认证企业信息!", "未認證的企業不能綁定顯示號碼! 請先到服務中心-> 認證服務中認證企業信息!", "uncertified companies can not bind to display numbers !"],
            msgWaitAuthPass: ["您的企业认证尚未通过审核, 请耐心等待或联系客服!", "您的企業認證尚未通過審核, 請耐心等待或聯繫客服!", "your enterprise certification has not been approved, please wait patiently or contact customer service!"],
            msgNewbieHelp: ["新手帮助", "新手幫助", "Help"],
            msgFreeReg: ["免费注册", "免費註冊", "Register for Free"],
            msgInputContactTip: ["请输入真实的企业联系人", "請輸入真實的企業聯繫人", "Please enter a real business contacts."],
            msgAccountNotExist: ["账号不存在!", "賬號不存在!", "Account does not exist!"],
            msgAccountNotActive: ["账号未激活", "賬號未激活", "Account not active"],
            msgAccountDeleted: ["账号已被删除", "賬號已被刪除", "account has been deleted."],
            msgAdminName: ["管理员姓名", "管理員姓名", "Admin realname"],
            msgAdminNameTip: ["请填入您的真实姓名", "請填入您的真實姓名", "Please enter your real name"],
            msgInputContactTel: ["联系电话", "聯繫電話", "Telephone"],
            msgInputContactTelTip: ["请填入您的手机或座机号码，座机请按“区号-号码”格式填写，如 0755-12345678", "請填入您的手機或座機號碼，座機請按“區號-號碼”格式填寫，如 0755-12345678", "Please enter your phone or landline number, landline please press the format such as 0755-12345678"],
            msgInputEmail: ["邮箱地址", "郵箱地址", "Email Address"],
            msgPwdResetFail: ["该账号未激活, 密码重置失败!", "该账号未激活, 密码重置失败!", "I am sorry that the account is not activated, the password reset failed!"],
            msgOperateFail: ["操作失败!", "操作失敗!", "Operation failed!"],
            msgDelUsualSucess: ["删除成功!", "刪除成功!", "Deleted successfully"],
            msgZipMaxSize: [" 您要压缩的文件超过了100MB, 请单个文件下载!", "您要壓縮的文件超過了100MB, 請單個文件下載!", "you want to compress files over 100MB, please download a single file!"],
            msgShareCenter: ["分享中心", "分享中心", "Share Center"],
            msgRecycleFile: ["回收站文件", "回收站文件", "Recycle bin"],
            msgFileOrFolder: ["文件或文件夹名", "文件或文件夹名", "File or folder"],
            msgOperator: ["操作人", "操作人", "Operator"],
            msgOperateTime: ["操作时间", "操作时间", "Operate Time"],
            msgStartSearch: ["开始搜索", "开始搜索", "Start Search"],
            msgFileSearchTitle: ["请输入您要搜索的文件名", "請輸入您要搜索的文件名", "Please input the file name"],
            msgRestoreAllFiles: ["恢复所有文件", "恢復所有文件", "Restore all files"],
            msgEmptyAllFiles: ["清空所有文件", "清空所有文件", "Delete all files"],
            msgDateRangeErr: [" 开始时间不能大于结束时间!", "開始時間不能大於結束時間!", "Sorry ! start time can not be greater than the end time!"],
            msgEntAddrErr: ["企业地址格式不正确", "企業地址格式不正確", "enterprise address format is incorrect!"],
            msgLinkPwdErr: ["外链密码格式不正确, 必须是4-6位字符/数字/下划线", "分享密碼格式不正確, 必須是4-6位字符/數字/下劃線", "share link password format is incorrect! must be word/number/underscore!"],
            msgFormatErr: ["格式不正确!", "格式不正確!", " format is incorrect!"],
            msgRealNameErr: ["真实姓名格式不正确!", "真實姓名格式不正確", "real name format is incorrect!"],
            msgUnAuthErr: ["未验证的手机号或邮箱, 登录失败", "未驗證的手機號或郵箱, 登錄失敗", "unauthorize email or phone number, login fail!"],
            msgActiveUser: ["激活账号", "激活賬號", "Active account"],
            msgUploadMaxErr: ["燕麦网页版文件最大只能上传500M, 更大的文件请用Window客户端上传!", "OATOS網頁版文件最大隻能上傳500M, 更大的文件請用Window客戶端上傳!", "I\\'m sorry OATOS largest web version of the file can upload 500M, larger files please use the Window client upload!"],
            msgDialStopErr: ["您正在进行拨号或者电话会议, 暂不能关闭云电话!", "您正在進行撥號或者電話會議, 暫不能關閉雲電話!", "You have an ongoing conference call dial or temporarily not turn off cloud phone!"],
            msgSortOK: ["排序成功!", "排序成功!", "Sort success!"],
            msgSortFail: ["排序失败!", "排序失敗!", "Sort failed!"],
            msgSelectQueryItem: ["请选择筛选项", "請選擇篩選項", "Please select Filters"],
            msgRenameOK: ["重命名成功!", "重命名成功!", "Rename success!"],
            msgSelectDepartErr: ["请选择部门后新建子部门", "請選擇部門後新建子部門", "Please select the department after the new sub-sector"],
            msgNewDepart: ["新部门", "新部門", "new department"],
            msgNameDuplicate: ["名称重复!", "名稱重複!", "duplicate name!"],
            msgInputInvalid: ["您输入了不合法的内容", "您輸入了不合法的內容", "You have entered an invalid content"],
            msgImgPreviewErr: ["图片过大，请下载后预览，显示的为缩略图!", "圖片過大，請下載後預覽，顯示的為縮略圖!", "image is too large, please download the preview displayed as thumbnails!"],
            msgAddUserSuccess: ["账号添加成功!", "賬號添加成功!", "Add account success!"],
            msgSelectDept: ["请选择部门", "請選擇部門", "Please select a department!"],
            msgActiveUserErr: ["验证码错误! 请联系管理员重新发送激活邮件!", "驗證碼錯誤! 請聯繫管理員重新發送激活郵件!", "Verification code error! please contact the administrator to resend the activation email!"],
            msgAccountErr: ["账号未注册", "账号未注册", "Account is not registered"],
            msgSystemMessage: ["系统消息", "系統消息", "System message"],
            msgNewSystemMessage: ["您有新的系统消息!", "您有新的系統消息!", "New system message!"],
            msgBirthdayError: ["出生日期错误!", "出生日期錯誤!", "Date of birth is wrong!"],
            msgErrorMailOver: [" 你今天发送的邮件数已经超出了限制, 邮件不能发送!", "你今天發送的郵件數已經超出了限制, 郵件不能發送!", "the number of mail you send today has exceeded the limit, the mail can not be sent!"],
            msgShareLinkMailSubject: ["分享文件通知", "分享文件通知", "share files notify"],
            msgErrorNotHaveRead: [" 您没有预览权限!", "您沒有預覽權限!", "you do not have permission to preview!"],
            msgIsEmptyRecycle: ["确定要清空回收站", "確定要清空回收站", "Are you sure to empty the Recycle Bin"],
            msgChatFail: [" 您当前是离线状态, 不能聊天或发送文件!", "您當前是離線狀態, 不能聊天或發送文件!", "you are currently offline, can not chat or send file!"],
            msgNoUserOrDeleted: ["该用户已被删除", "The user was deleted!"],
            msgActiveUserTitle: ["燕麦-激活用户", "燕麥-激活用戶", "OATOS-Active user"],
            msgResetPwdTitle: ["燕麦-重置密码", "燕麥-重置密碼", "OATOS-Reset password"],
            msgSetEntInfo: ["设置企业信息", "設置企業信息", "set enterprise info"],
            msgLoginMaibox: ["登录邮箱", "登錄郵箱", "Login Email"],
            msgRestoreFolderDel: ["恢复失败! 你要恢复的文件所在的文件夹已被删除!", "恢复失败! 你要恢复的文件所在的文件夹已被删除!", "Restore failed! Files you want to restore the folder has been deleted!"],
            msgUserDeleted: ["该用户已被删除", "該用戶已被刪除", "The user was deleted!"],
            msgSyncManage: ["同步管理", "同步管理", "Sync Management"],
            msgViewSync: ["查看同步详情", "查看同步详情", "View sync details"],
            msgCancelSync: ["取消同步", "取消同步", "Cancel sync"],
            msgAddSync: ["添加同步", "添加同步", "Add sync"],
            msgCancelSyncConfirm: ["取消同步后,系统将删除相关同事的本地文件夹!您确定继续取消操作?", "取消同步後,系統將刪除相關同事的本地文件夾!您確定繼續取消操作?", "After cancelling sync, the system will delete the local folders of the associated colleagues! Are you sure to continue?"],
            msgSyncSetting: ["设置同步", "設置同步", "Set up sync"],
            msgRefresh: ["刷新", "刷新", "Refresh"],
            msgMore: ["更多", "更多", "More"],
            msgMyShare: ["我的分享", "我的分享", "Shared files"],
            msgMyFocus: ["我的关注", "我的關注", "Followed files"],
            msgCancelPwd: ["取消密码", "取消密码", "Remove password"],
            msgPwd: ["密码", "密码", "password"],
            msgExpireDate: ["到期时间", "到期時間", "Expired date"],
            msgSetExpireDate: ["设置到期时间", "设置到期時間", "Setting expire date"],
            msgCancelExpireDate: ["取消到期时间", "取消到期時間", "Remove expire date"],
            msgCopyLink: ["复制链接", "复制链接", "Copy link"],
            msgSelectSyncFolder: ["选择需要同步的文件夹", "選擇需要同步的文件夾", "Select the folder to be synchronized"],
            msgSelectSyncColleague: ["选择需要同步的同事", "選擇需要同步的同事", "Choose to be synchronized colleagues"],
            msgSyncConfirm: ["在此显示同步确认", "在此顯示同步確認", "In this display synchronization confirmation"],
            msgSyncSuccTip: ["<li>以上人员将获得同步权限,并受到同步通知消息;</li><li>当前文件夹及其子文件夹中所含文件将被同步到本地;</li><li>并不会删除云端文件;</li>", "<li>以上人員將獲得同步權限,並受到同步通知消息;</li><li>當前文件夾及其子文件夾​​中所含文件將被同步到本地;</li><li >並不會刪除雲端文件;</li>", "<li> those users will get synchronization permission, and receive  the synchronization notification message; </li> <li> current folder and its subfolders contained in the files will be synchronized to the local; </li> <li > does not remove the cloud file; </li> "],
            msgSyncUserInfo: ["将被以下人员同步", "將被以下人員同步", "will be synchronized by following persons: "],
            msgDiskSizeMustInt: ["云盘大小只能设置整数", "網盤大小只能設置整數", "disk size can be set only integer"],
            msgAddUserErrTip: ["请输入正确的邮箱或者手机号!", "請輸入正確的郵箱或者手機號!", "please input valid email or phone number!"],
            msgAddAccountSucc: ["添加账号成功", "添加賬號成功", "Add Account success"],
            msgAddAccountEmailTip: ["系统已经发送了通知邮件到此邮箱, 请通知同事登录邮箱并按照邮件里的提示激活账号!", "系統已經發送了通知郵件到此郵箱, 請通知同事登錄郵箱並按照郵件裡的提示激活賬號!", "the system has sent a notification e-mail to this mailbox, please inform colleagues Login E-mail and follow the prompts to activate the mail account!"],
            msgAddAccountSmsTip: ["系统已发送了登录密码到此手机号, 请通知同事使用此手机号和登录密码访问www.oatos.com登录燕麦企业云盘", "系統已發送了登錄密碼到此手機號, 請通知同事使用此手機號和登錄密碼訪問www.oatos.com登錄燕麥企業雲盤", "the system login password has been sent to this phone number, please notify colleagues using this phone number and password to access www.oatos.com Login OATOS enterprise cloud plate"],
            msgAddAcountNoTip: ["我已知道如何激活子账号, 以后不用再提示", "我已知道如何激活子賬號, 以後不用再提示", "Already know how to activate the sub-account, after no longer prompt"],
            msgShareSuccess: ["分享成功!", "分享成功!", "Shared successfully!"],
            msgViewSharePage: ["查看分享页面", "查看分享頁面", "View share page"],
            msgShareLink: ["分享外链", "分享外鏈", "Share link"],
            msgSendMailMobile: ["发送到邮件、手机", "發送到郵件、手機", "Sent to the email, mobile phone"],
            msgUploadOnly: ["仅允许用户上传文档至该文件夹", "僅允許用戶上傳文檔至該文件夾", "Only allow the user to upload documents to the folder"],
            msgCopyLinkTip: ["复制以下分享外链,发送给相关同事、客户、合作伙伴！", "複製以下分享外鏈,發送給相關同事、客戶、合作夥伴！ ", "Copied the following share link and sent to relevant colleagues, customers and partners! "],
            msgInputSpace: ["请输入有效的邮箱或手机号,用空格分隔", "請輸入有效郵箱或手機號,用空格分隔", "Please enter a valid email or phone number, separated by the space"],
            msgSendContent: ["发送内容", "發送內容", "Send content"],
            msgShareFileTip: ["用【燕麦企业云盘】给您分享了文件", "用【燕麥企業雲盤】給您分享了文件", "use [OATOS] to share the files for you"],
            msgSendLink: ["发送链接", "發送鏈接", "Send share link"],
            msgSendLinkFree: ["将已生成的分享链接<b>免费</b>发送到:", "將已生成的分享鏈接<b>免費</b>發送到:", "The generated share links <b> freely </b> send to:"],
            msgSendMailMobileNoty: ["请输入要发送的邮箱地址和手机号码!", "請輸入要發送的郵箱地址和手機號碼!", "Please enter the email address and phone number you want to send!"],
            msgSendSuccess: ["发送成功!", "發送成功!", "Sent successfully!"],
            msgSendFail: ["未发送成功!", "未發送成功!", "Not successfully sent!"],
            msgSendWait: ["您刚刚发送了消息, 请等待2分钟后再次发送!", "您剛剛發送了消息, 請等待2分鐘後再次發送！", "You have just sent a message, wait two minutes to send again!"],
            msgFolderNameLength20Error: ["文件夹名称不能超过20个字符!", "文件夾名稱不能超過20個字符!", "Folder name can not be more than 20 characters!"],
            msgRemarkError: ["备注格式不正确! 请输入1-100位的字符!", "备注格式不正確! 請輸入1-100位的字符!", "Please enter an incorrect format 1-100 characters!"],
            msgDeptLongError: ["部门名称限制为1-60位字符!", "部門名稱限制为1-60位字符!", "Department name is too long!"],
            msgEntAddressEmpty: ["请输入企业地址", "请输入企业地址", "Please input a enterprise address"],
            msgUploadFileError: [" 您不能上传exe/bat/cmd文件!", "您不能上傳exe/bat/cmd文件!", "you can not upload exe/cmd/bat files!"],
            msgDownloadFileError: [" 您不能下载exe/bat/cmd文件!", "您不能下載exe/bat/cmd文件!", "you can not download exe/bat/cmd files!"],
            msgChatSendError: [" 聊天框中最大只能发送500MB文件!", "聊天框中最大隻能發送500MB文件!", "I am sorry chat box can send 500MB maximum file!"],
            msgImportWait: ["用户正在导入中...", "用戶正在導入中...", "Users are importing , please wait ..."],
            msgAccDuplite: ["账号重复!", "賬號重複!", "Account repeat!"],
            msgFileDuplicate: ["文件名重复", "文件名重複", "File name duplicate"],
            msgMessageList: ["消息中心", "消息中心", "Messages"],
            msgSyncFile: ["同步文件", "同步文件", "Sync File"],
            msgUnknowOper: ["未知操作", "未知操作", "Unknow"],
            msgNoUploadPermission: ["您没有当前文件夹的上传权限!", "您沒有當前文件夾的上傳權限!", "You have no upload permission in current folder!"],
            msgFolderSyncSetSucc: ["文件夹设置同步成功!", "文件夾設置同步成功!", "Setting folder synchronized successfully !"],
            msgFolderSyncSetFail: ["文件夹设置同步失败!", "文件夾設置同步失敗!", "Setting folder synchronized failure!"],
            msgDomainLoginError: ["域用户登录信息有误", "域用戶登錄信息有誤", "domain user login info error"],
            msgNewDept: ["新建部门", "新建部門", "New department"],
            msgNewDeptTip: ["请输入你要创建的部门名称", "請輸入你要創建的部門名稱", "please input new department name"],
            msgCancelShareConfirm: ["取消分享将会使该文件的分享链接失效，不能访问。您确定要取消分享吗?", "取消分享將會使該文件的所有頁面分享鏈接失效，不能訪問。您確定要取消分享嗎?", "Cancel Share will make all the pages of the file sharing link failure can not be accessed. Are you sure you want to cancel Share?"],
            msgChangeSpace: ["修改空间", "修改空間", "Modify space"],
            msgCompany: ["公司", "公司", "Company"],
            msgPersonSetting: ["个人设置", "個人設置", "Personal setting"],
            msgErrorCheckHashkey: ["数据未通过安全验证", "數據未通過安全驗證", "Data not verified by security"],
            msgChangeDeptSizeOk: ["修改部门空间成功", "修改部門空間成功", "Change department\\'s space success"],
            msgSelectAll: ["全选", "全選", "Select"],
            msgDeptFolderSize: ["部门文件夹大小", "部門文件夾大小", "Department Folder Size"],
            msgAllocateSpace: ["分配空间", "分配空間", "Allocation of space"],
            msgNoLimit: ["无限制", "無限制", "Unlimited"],
            msgExpandSpace: ["扩容", "擴容", "Expansion"],
            msgAvailSize: ["可分配空间", "可分配空間", "Allocatable space"],
            msgDeptPermission: ["部门文件夹权限", "部門文件夾權限", "Department folder permissions"],
            msgDefaultSetting: ["默认设置", "默認設置", "Default settings"],
            msgCustomSetting: ["自定义设置", "自定義設置", "Custom settings"],
            msgSettingFolderSize: ["设置文件夹大小", "設置文件夾大小", "Set folder size"],
            msgSpaceFomat: ["空间大小为整数且大于零", "空間大小為整數且大於零", "the space must be an integer greater than zero"],
            msgProperty: ["属性", "屬性", "Properties"],
            msgRemark: ["备注", "備註", "Remarks"],
            msgTempNoTip: ["暂时没有内容, 请输入不超过100个字符!", "暫時沒有內容, 請輸入不超過100個字符!", "Temporarily no content"],
            msgFileNameNull: ["请输入文件名称", "請輸入文件名稱", "Please enter a file name"],
            msgReminded: ["已关注", "已關注", "concerned"],
            msgDisReminded: ["未关注", "未關注", "Not concerned"],
            msgCurrentVersion: ["当前版本号", "當前版本號", "current version"],
            msgSize: ["大小", "大小", "size"],
            msgInclude: ["包含", "包含", "contain"],
            magPath: ["位置", "位置", "position"],
            msgUsedSize: ["已用空间", "已用空間", "used space"],
            msgMaxSize: ["最大空间", "最大空間", "max space"],
            msgRemindStatus: ["关注状态", "关注状态", "concerned status"],
            msgFilesNum: ["个文件", "個文件", "files"],
            msgTableEmpty: ["列表中没有数据", "列表中沒有數據", "No data in list"],
            msgDataLoadFail: ["数据加载失败!", "數據加載失敗", "load data failure!"],
            msgUserNotExist: ["用户不存在或已被删除", "用戶不存在或已被刪除", "The user does not exist or has been deleted"],
            msgOpenChatView: ["双击打开聊天窗口", "雙擊打開聊天窗口", "Double-click to open the chat window"],
            msgClear: ["清空", "清空", "clear"],
            msgShowListInfo: ["列表视图", "列表視圖", "List view"],
            msgShowThumbInfo: ["缩略图视图", "縮略圖視圖", "Thumbnail view"],
            msgSysBusy: ["系统繁忙，请稍后重试", "系统繁忙，请稍后重试", "System is busy, please try again later"],
            msgAddContactErr: ["您选中部门的所有用户已经是您的常用联系人了!", "您选中部门的所有用户已经是您的常用联系人了!", "All users you select your department has a common contact!"],
            msgObjectName: ["对象名称", "对象名称", "Object name"],
            msgMyDevice: ["我的设备", "我的設備", "My device"],
            msgAllSingleSync: ["全部设为单向同步", "全部設為單向同步", "All single synchronization"],
            msgSingleSync: ["单向同步", "單向同步", "single synchronization"],
            msgShowLogo: ["LOGO显示", "LOGO顯示", "LOGO Show"],
            msgShowLogoPic: ["企业LOGO(图片)", "企業LOGO(圖片)", "Corporate LOGO (picture)"],
            msgShowLogoText: ["企业名称(文字)", "企業名稱(文字)", "Company Name (text)"],
            msgSelectUserError: ["请选择要通知的同事!", "请选择要通知的同事!", "Please select colleagues to be notified!"],
            msgUserActiveSucc: ["用户账号激活成功!", "用户账号激活成功!", "User account verify success!"],
            msgDiskSpaceTip: ["云盘空间已使用<%=percent%>%, 请到购买中心进行扩容!", "云盘空间已使用<%=percent%>%, 请到购买中心进行扩容!", "OATOS disk space has been used by <%=percent%>%, go buy center for expansion!"],
            msgFolderOverflow: ["文件夹空间不足", "文件夹空间不足", "Insufficient space!"],
            msgRoleError: ["角色名称长度限制为1-60为字符!", "角色名称长度限制为1-60为字符!", "Role name is limited to 1-60 for the character!"],
            msgAdminLockError: ["超级管理员不能被锁定!", "超级管理员不能被锁定!", "Super administrator can not be locked!"],
            msgAdminPwdError: ["您不能修改超级管理员的密码!", "您不能修改超级管理员的密码!", "You can not modify the super administrator password!"],
            msgAdminDelError: ["超级管理员不能被删除!", "超级管理员不能被删除!", "Super administrator can not be deleted!"],
            msgAdminChangeDeptError: ["您不能更换超级管理员的部门!", "您不能更換企业管理员的部門!", "You can not replace the super administrator department!"],
            msgAdminChangePermissionError: ["您不能更换超级管理员的权限!", "您不能更换超级管理员的权限!", "You can not replace the super administrator privileges!"],
            msgAdminFolderSetError: ["您不能修改超级管理员的个人文件夹大小!", "您不能修改超级管理员的个人文件夹大小!", "You can not modify the super administrator's personal folder size!"],
            msgClearSyncUserSucc: ["清空文件夹同步用户成功!", "清空文件夹同步用户成功!", "Clear sync between this folder and users successfully!"],
            msgResendEmail: ["重新发送激活邮件", "重新发送激活邮件", "Resend activation email"],
            msgResendSms: ["重新发送激活短信", "重新发送激活短信", "Re-send the activation SMS"],
            msgUserActiveError: ["该用户已经激活了!", "该用户已经激活了!", "The user has activated!"],
            msgActEmailSendSucc: ["激活邮件发送成功!", "激活邮件发送成功!", "Activation email sent successfully!"],
            msgActSmsSendSucc: ["激活短信发送成功!", "激活短信发送成功!", "Activate SMS sent successfully!"],
            msgSecAdminLockError: ["二级管理员不能锁定自己!", "二级管理员不能锁定自己!", "Administrators can not lock yourself!"],
            msgSecAdminDelError: ["二级管理员不能删除自己!", "二级管理员不能删除自己!", "Administrators can not delete your own!"],
            msgSecAdminChangeDeptError: ["二级管理员不能修改自己的部门!", "二级管理员不能修改自己的部门!", "Administrators can not modify their own department!"],
            msgSecAdminSetDiskError: ["二级管理员不能设置自己的个人文件夹大小!", "二级管理员不能设置自己的个人文件夹大小!", "Administrators can not modify your own personal folder size!"],
            msgMailSendTip: ["系统给您的注册邮箱{{mail}}发送了一封验证邮件, 请登录邮箱完成找回密码", "系统给您的注册邮箱{{mail}}发送了一封验证邮件, 请登录邮箱完成找回密码", "The system will send a verification email to your registered email {{mail}}, please complete the mailbox to retrieve login password"],
            msgTxtInputTip: ["请输入文档内容", "请输入文档内容", "Please enter the document content"],
            msgTxtContentFail: ["获取文档内容失败!", "获取文档内容失败!", "Get the document content failed!"],
            msgPurchaseCenter: ["购买中心", "購買中心", "Purchase center"],
            msgContactCs: ["联系客服", "聯繫客服", "Contact Customer Service"],
            msgHasRead: ["已读", "已讀", "Read"],
            msgSearchAllFile: ["搜索全部文件", "搜索全部文件", "Search all files"],
            msgFullTextSearch: ["全文搜索", "全文搜索", "Text search"],
            msgSingleSyncTips: ["<b>单向同步:</b>从云端同步到本地,本地更新不影响云端", "<b>單向同步：</b>從雲端同步到本地，本地更新不影響雲端", "<b>Unidirectional sync:</b>Synchronized from the cloud to the local, local update does not affect the cloud"],
            msgNewDocument: ["新建文档", "新建文檔", "New Document"],
            msgEditDocument: ["编辑文档", "編輯文檔", "Edit Document"],
            msgSelectPermission: ["请选择权限!", "请选择权限!", "Please select privileges!"],
            msgFileLengthError: ["文件名，文件夾名長度不能超過100個字符！", "文件名，文件夾名長度不能超過100個字符！", "File names, folder names can not be longer than 100 characters! "],
            msgRequestDataError: ["请求数据有误！", "請求數據有誤！", "Request data is incorrect! "],
            msgSelectShareType: ["选择分享类型", "選擇分享類型", "Choose select type"],
            msgUserUpload: ["仅允许用户上传文档至该文件夹", "僅允許用戶上傳文檔至該文件夾", "By allowing users to upload documents to the folder"],
            msgFreeTry: ["免费试用", "免費試用", "Free Trial"],
            msgFullTxtFunc: ["全文搜索功能", "全文搜索功能", "full text search function"],
            msgInviteCode: ["提交邀请码", "提交邀請碼", "Submit invitation code"],
            msgSimpleTip: ["简单的说明", "簡單的說明", "simple explanation"],
            msgEaseUse: ["功能体验不会影响您的数据安全，请放心试用。", "功能體驗不會影響您的數據安全，請放心試用。", "functional experience does not affect your data security, please rest assured that trial. "],
            msgFullTxt500: ["每天开放500家企业用户体验，体验名额已满时不能提交申请。", "每天開放500家企業用戶體驗，體驗名額已滿時不能提交申請。", "Open daily 500 business user experience, experience is full quota can not submit an application. "],
            msgGetYanmaiWechat: ["可通过燕麦企业云盘公众号获取实时客服支持和最新优惠信息。", "可通過燕麥企業雲盤公眾號獲取實時客服支持和最新優惠信息。", "can get real-time customer support and latest offers enterprise cloud disk by oats public number. "],
            msgMethodGetInvieteCode: ["获取邀请码方法", "獲取邀請碼方法", "Get an invitation code method"],
            msgRemindYanmai: ["微信 扫一扫 关注“燕麦企业云盘”", "微信掃一掃關注“燕麥企業雲盤”", 'micro-channel sweep the concerns "oat enterprise cloud disk"'],
            msgEnterYanmai: ["进入燕麦企业云盘公众号，发送“体验全文搜索”，获取邀请码。", "進入燕麥企業雲盤公眾號，發送“體驗全文搜索”，獲取邀請碼。", 'enter oats public enterprise cloud plate number, send "to experience the full text search" to get an invitation code. '],
            msgSorryTrialQuota: ["抱歉，今天的体验名额已满，请明天再申请体验。", "抱歉，今天的體驗名額已滿，請明天再申請體驗。", "Sorry, trial quota of today is full, please apply again tomorrow. "],
            msgFocusYanmai: ["您仍然可关注燕麦企业云盘公众号获取实时客服支持或最新优惠信息。", "您仍然可關注燕麥企業雲盤公眾號獲取實時客服支持或最新優惠信息。", "You can still focus on enterprise cloud disk oats public support or customer service number to obtain real-time information on the latest offers. "],
            msgInputSearch: ["输入搜索的内容", "輸入搜索的內容", "Inter the keyword you want to search"],
            msgSearchForFullTxt: ["● 对云盘中的所有文档进行搜索，并显示用户有可见权限的全部文档", "● 對雲盤中的所有文檔進行搜索，並顯示用戶有可見權限的全部文檔", "● Cloud disk for all documents to search and display all user-visible document permissions"],
            msgSearchInfoQuickly: ["● 在海量文件中快速找到相关信息，支持使用“*”进行模糊搜索", "● 在海量文件中快速找到相關信息，支持使用“*”進行模糊搜索", '● Quickly find relevant information in the massive document, support the use of "*" fuzzy search'],
            msgSearchTip3: ["● 新上传的文档请等待五分钟后再搜索，文档会根据相关度由高到低排序显示", "● 新上傳的文檔請等待五分鐘後再搜索，文檔會根據相關度由高到低排序顯示", "● Newly uploaded document, please wait five minutes after the search, the document will be sorted according to relevance descending Show"],
            msgSearchFileOrContent: ["搜索文档名称与内容中包含的信息", "搜索文檔名稱與內容中包含的信息", "Search for a document name and content of the information contained"],
            msgRelevance: ["相关度", "相關度", "Relevance"],
            msgTheDirectory: ["所在目录", "所在目錄", "Directory"],
            msgLocateFileContent: ['"全文检索"帮您快速定位文档内容中包含的信息', '"全文檢索"幫您快速定位文檔內容中包含的信息', '"Full text search" to help you quickly locate the information contained in the document content'],
            msgSearchNoMatches: ["没有与搜索条件匹配的项", "沒有與搜索條件匹配的項", "No search terms that match the criteria"],
            msgFreeCodeError: ["邀请码错误", "邀請碼錯誤", "Invitation code error"],
            msgAllFind: ["共搜索到", "共搜索到", "Search results"],
            msgRelateResults: ["个相关结果", "個相關結果", "Relevant results"],
            msgA: ["个", "個"],
            msgExpandSidebar: ["展开侧边栏", "展開側邊欄", "Expand sidebar"],
            msgCloseSidebar: ["收起侧边栏", "收起側邊欄", "Hide sidebar"],
            msgSyncFolderSearchTip: ["请输入您要搜索的同步文件夹", "请输入您要搜索的同步文件夹", "Please enter the synchronized file folder you want to search"],
            msgSelectUploadFiles: ["请选择要上传的文件!", "请选择要上传的文件!", "Please select a file to upload!"],
            msgDaysKeepsInput: ["请输入您要保留的天数!", "請輸入您要保留的天數!", "Please enter the number of days you want to keep!"],
            msgSaveVersionConfigOk: ["保存历史版本配置成功!", "保存歷史版本配置成功!", "The save of historical versions of the configuration is successful!"],
            msgVersionsKeepsInput: ["请输入您要保留的版本数!", "請輸入您要保留的版本數!", "Please enter the number of the version you want to keep!"],
            msgSaveVersionConfigFail: ["保存历史版本配置失败!", "保存歷史版本配置失敗!", "The save of historical versions of configuration failed!"],
            msgErrorFolderMaxSize: ["设置的文件夹空间小于使用空间", "設置的文件夾空間小於使用空間", "Settings space of the folder is less than the used space"],
            msgShareOnlyRead: ["仅允许用户预览文件", "僅允許用戶預覽文件", "Only allow users to preview files"],
            msgShareReadDownload: ["允许用户预览和下载文件", "允許用戶預覽和下載文件", "Allows the user to preview and download files"],
            msgInputMobilePhone: ["请输入您常用的手机号码或电话号码", "請輸入您常用的手機號碼或電話號碼", "Please enter your frequently used phone numbers or phone numbers"],
            msgCodeExpired: ["验证码已过期", "驗證碼已過期", "Verification code has expired"],
            msgInputSearchContent: ["请输入您要搜索的内容", "請輸入您要搜索的內容", "Please enter the content you want to search"],
            msgNameDeptError: ['部门名不能为空! 且不能包含任何以下符号：  / : * ? \\" < > |', '部門名不能為空! 且不能包含任何以下符號：  / : * ? \\" < > |', 'Department name can not be empty and can not contain any of the following symbols:  /: * \\ "<> |?'],
            msgErrorNoParentMaxSize: ["您还没有为父文件夹分配空间，请先为父文件夹分配空间！", "您還沒有為父文件夾分配空間，請先為父文件夾分配空間！", "You have not allocate space for the parent folder, please parent folder allocate space! "],
            msgErrorNoParentDeptMaxSize: ["您还没有为上级部门分配空间，请先为上级部门分配空间！", "您還沒有為上級部門分配空間，請先為上級部門分配空間！", "You have not allocate space for the higher authorities, first allocate space for the parent department! "],
            msgSelectEntSubFolder: ["请选择企业文件下的文件夹！", "請選擇企業文件下的文件夾！", "Please select a folder under the enterprise disk! "],
            msgPermissionDetail: ["权限详情", "權限詳情", "Permissions details"],
            msgUser: ["用户", "用戶", "User"],
            msgLoginTokenMiss: ["对不起!您的登录凭证不存在, 请重新登录!", "对不起!您的登录凭证不存在, 请重新登录!", "Sorry! Your login credentials does not exist, please re-login!"],
            msgFetchEntInfoErr: ["获取企业信息失败, 请重新登录!", "获取企业信息失败, 请重新登录!", "Failed to obtain corporate information, please log on again!"],
            msgFetchUserInfoErr: ["获取用户信息失败, 请重新登录!", "获取用户信息失败, 请重新登录!", "Failed to obtain user information, please log on again!"],
            msgAccessAdminPageError: ["对不起! 您不是管理员, 不能访问管理员页面!", "对不起! 您不是管理员, 不能访问管理员页面!", "Sorry! You are not an administrator, the administrator can not access the page!"],
            msgSelectAlready: ["已选择", "已選擇", "Chosen"],
            msgSelectFolder: ["请选择您要添加的文件夹", "請選擇您要添加的文件夾", "Please select the folder you want to add"],
            msgInputSearchFolder: ["请输入你要搜索的文件夹", "請輸入你要搜索的文件夾", "Please enter the folder you want to search"],
            msgFileConverting: ["文档正在转换中, 请稍候!", "文档正在转换中, 请稍候!", "The document being converted, please wait!"],
            msgConvertDone: ["文档转换完成!", "文档转换完成!", "Document conversion is complete!"],
            msgFileSendFail: ["文件发送失败", "文件发送失败", "Sending file failed"],
            msgPermissionList: ["权限列表", "權限列表", "Permission list"],
            msgCurrentAccount: ["当前账号", "當前賬號", "Current account"],
            msgAddFilePermission: ["添加文件权限", "添加文件權限", "Adding file permissions"],
            msgFolderName: ["文件夹名", "文件夾名", "Folder name"],
            msgPermissionContent: ["权限内容", "權限內容", "Permission content"],
            msgCurrentFolder: ["当前文件夹", "當前文件夾", "Current folder"],
            msgSelectToAuthorize: ["请选择需要授权的成员", "請選擇需要授權的成員", "Please select members you want to authorize"],
            msgType: ["类型", "類型", "Type"],
            msgPermission: ["权限", "權限", "Permission"],
            msgMemberList: ["成员列表", "成員列表", "Member list"],
            msgRoleList: ["角色列表", "角色列表", "Role list"],
            msgDblClickToAdd: ["双击左侧需要添加的同事、部门、角色添加到右侧。", "雙擊左側需要添加的同事、部門、角色添加到右側。 ", "Double-click the colleagues, department, role on left to add. "],
            msgNextPermission: ["点击“下一步”，设置权限。", "點擊“下一步”，設置權限。 ", 'Click "Next", set permissions. '],
            msgViewOriginImg: ["查看原图", "查看原图", "查看原图"],
            msgClickOpen: ["点击打开", "点击打开", "点击打开"],
            msgDeptRolesPermissionTips: ["<b>部门</b>与<b>角色</b>权限类型修改，请在对应的<b>部门权限修改</b>或<b>角色权限修改</b>中进行修改。", "<b>部門</b>與<b>角色</b>權限類型修改，請在對應的<b>部門權限修改</b>或<b>角色權限修改</b>中進行修改。", "<b>Department</b> and <b>Role</b> permission type modified, the corresponding <b>department permission to modify</b> or <b>role permissions to modify</b> in the be modified. "],
            msgDeleteLockFileErr: ["有文件已被锁定, 不能删除!", "有文件已被锁定, 不能删除!", "有文件已被锁定, 不能删除!"],
            msgMoveLockFileErr: ["有文件已被锁定, 不能移动!", "有文件已被锁定, 不能移动!", "有文件已被锁定, 不能移动!"],
            msgCurrentPicListDetelted: ["当前文件夹中的图片已全部被删除", "當前文件夾中的圖片已全部被刪除", "Pictures in current folder have all been deleted"],
            msgSearchDeptResult: ["搜索到的部门", "搜索到的部門", "Search result of department"],
            msgSearchMemResult: ["搜索到的成员", "搜索到的成員", "Search result of members"],
            msgSearchRoleResult: ["搜索到的角色", "搜索到的角色", "Search result of roles"],
            msgShareInfo: ["分享信息", "分享信息", "分享信息"],
            msgPersonDiskNoSpace: ["个人文件夹空间不足!", "个人文件夹空间不足!", "个人文件夹空间不足!"],
            msgDeptEdit: ["编辑"],
            msgCreateUserTip: ["请输入您要创建的成员邮箱或者手机号"],
            msgInputValidUser: ["请输入合法的邮箱或手机号"],
            msgWaitCompress: ["请稍候，正在压缩！", "請稍候，正在壓縮！", "Please wait compression！"],
            msgProductFeatures: ["产品功能", "產品功能", "Product Features"],
            msgSafety: ["安全体系", "安全體系", "Security System"],
            msgWelcomeToWeitooDisk: ["欢迎注册微兔账号!", "歡迎注册微兔账号!", "Welcome to Weitoo"],
            msgCreateWeitooFree: ["创建免费的微兔账号", "創建免費的微兔账号", "Create a free weitoo disk"],
            magHomePage: ["首页", "首頁", "Home"],
            msgOatosCommit: ["注册所用的邮箱或手机号码将会是您的云盘登录账号"]
        }
          , t = {}
          , o = {}
          , n = {};
        _.each(s, function(e, s) {
            t[s] = e[0],
            o[s] = e[1] ? e[1] : e[0],
            n[s] = e[2] ? e[2] : e[0]
        }
        ),
        e.translations("zh_CN", t),
        e.translations("zh_TW", o),
        e.translations("en_US", n)
    }
}
);
;define("app/support/services/noty", function() {
    angular.module("commons.services").service("noty", ["$translate", function(t) {
        return noty.success = function(t) {
            return noty({
                text: t,
                template: '<div class="noty_message"><i class="icon-custom-noty-success"></i><span class="noty_text"></span></div>',
                type: "success",
                timeout: 3e3,
                maxVisiable: 3
            })
        }
        ,
        noty.info = function(t) {
            return noty({
                text: t,
                type: "infomation",
                timeout: 3e3
            })
        }
        ,
        noty.error = function(n, s) {
            return noty({
                text: n,
                type: "alert",
                modal: !0,
                template: '<div class="noty_header">' + t("msgInfoTip") + '<span class="qyc-close-btn">X</span></div><div class="noty_message"><i class="icon-custom-noty-error"></i><span class="noty_text"></span></div>',
                callback: {
                    onClose: function() {
                        s && s()
                    }
                },
                buttons: [{
                    addClass: "btn noty-btn-error",
                    text: t("msg141"),
                    onClick: function(t) {
                        t.close()
                    }
                }]
            })
        }
        ,
        noty.warn = function(n, s) {
            return noty({
                text: n,
                type: "warning",
                modal: !0,
                template: '<div class="noty_header">' + t("msgInfoTip") + '<span class="qyc-close-btn">X</span></div><div class="noty_message"><i class="icon-custom-noty-warn"></i><span class="noty_text"></span></div>',
                buttons: [{
                    addClass: "btn noty-btn-retry",
                    text: t("msg199"),
                    onClick: function(t) {
                        t.close(),
                        s && s(!0)
                    }
                }, {
                    addClass: "btn noty-btn-cancel",
                    text: t("msg87"),
                    onClick: function(t) {
                        t.close(),
                        s && s(!1)
                    }
                }]
            })
        }
        ,
        noty.confirm = function(n, s) {
            noty({
                text: n,
                type: "confirm",
                modal: !0,
                template: '<div class="noty_header">' + t("msgInfoTip") + '<span class="qyc-close-btn">X</span></div><div class="noty_message"><i class="icon-custom-noty-confirm"></i><span class="noty_text"></span></div>',
                buttons: [{
                    addClass: "btn noty-btn-confirm",
                    text: t("msg168"),
                    onClick: function(t) {
                        t.close(),
                        s && s(!0)
                    }
                }, {
                    addClass: "btn noty-btn-cancel",
                    text: t("msg87"),
                    onClick: function(t) {
                        t.close(),
                        s && s(!1)
                    }
                }]
            }),
            $()
        }
        ,
        noty.alert = function(n, s) {
            return noty({
                text: n,
                type: "alert",
                template: '<div class="noty_header">' + t("msgInfoTip") + '<span class="qyc-close-btn">X</span></div><div class="noty_message"><i class="icon-custom-noty-alert"></i><span class="noty_text"></span></div>',
                modal: !0,
                callback: {
                    onClose: function() {
                        s && s()
                    }
                },
                buttons: [{
                    addClass: "btn noty-btn-alert",
                    text: t("msg141"),
                    onClick: function(t) {
                        t.close()
                    }
                }]
            })
        }
        ,
        noty.fail = noty.error,
        noty
    }
    ])
}
);
;define("app/support/services/cache", function() {
    angular.module("commons.services").factory("cache", [function() {
        return {
            token: $.cookie("ut") || webhelper.getUrlEncodedKey("UT"),
            userName: $.cookie("un"),
            entId: void 0,
            userId: void 0,
            fileType: void 0,
            folderId: void 0,
            fileId: void 0,
            linkId: void 0,
            searchKey: void 0,
            viewType: void 0,
            showType: $.cookie("stp") || "list",
            parseQueryString: function() {
                this.entId = webhelper.getUrlEncodedKey("ei"),
                this.userId = webhelper.getUrlEncodedKey("ui"),
                this.folderId = webhelper.getUrlEncodedKey("fi"),
                this.fileId = webhelper.getUrlEncodedKey("fid"),
                this.fileId && (this.fileId = parseInt(this.fileId)),
                this.linkId = webhelper.getUrlEncodedKey("li"),
                this.shared = !!this.linkId,
                this.fileType = webhelper.getUrlEncodedKey("dp"),
                this.searchKey = webhelper.getUrlEncodedKey("sk"),
                this.viewType = webhelper.getUrlEncodedKey("fp")
            },
            ensureCookieToken: function() {
                var e = $.cookie("ut");
                !e && this.token && $.cookie("ut", this.token)
            }
        }
    }
    ])
}
);
;define("app/support/services/UrlEncode", function(require, e, c) {
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
        "/pub/user/login": "/01f6a903037c6e1fada2d40ebc911108",
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
}
);
;define("app/support/services/ServiceUrl", function(require, e) {
    e.AdminUrl = {
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
        getUsersByRoleId: "/sc/entDisk/getUsersByRoleId",
        resendUserActiveMsg: "/sc/admin/user/resendUserActiveMsg"
    },
    e.EnterpriseUrl = {
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
    },
    e.FileMgrUrl = {
        zipFiles: "/sc/zip/files",
        saveFile: "/sc/file/saveHtml",
        viewAsTxt: "/sc/file/viewAsTxt",
        editFileAsHtml: "/sc/file/editFileAsHtml",
        saveEntFileToPersonDisk: "/sc/file/saveFileToDisk",
        copyPersonFileToPerson: "/sc/file/copyPersonFile",
        entDiskCopy: "/entdisk/copy",
        getDownloadUrl: "/sc/file/getFileDownloadInfo",
        viewFileAsImg: "/sc/file/viewAsImg",
        viewFileAsPdf: "/sc/file/viewAsPdf",
        viewFileAsHtml: "/sc/file/viewAsHtml",
        viewAsMedia: "/sc/file/viewAsMedia"
    },
    e.FileUrl = {
        createFolder: "/sc/file/createFolder",
        fullTextSearch: "/sc/file/fullTextSearch",
        searchFiles: "/sc/file/searchFile",
        getServiceStatus: "/sc/ent/getServiceStatus",
        applyFreeService: "/sc/buy/applyFreeService"
    },
    e.LoginUrl = {
        logon: "/pub/user/logon",
        signin: "/pub/user/login",
        loginByLdap: "/pub/user/loginByLdap",
        adminLogin: "/pub/ent/admin/login",
        logoff: "/sc/user/logoff",
        changePwd: "/sc/user/changePwd",
        checkUserPwd: "/sc/user/checkUserPwd",
        sendValidationMsg: "/pub/code/sendValidationMsg",
        checkValidationMsg: "/pub/code/checkValidationMsg",
        resetPwd: "/pub/user/resetPwd",
        getUserDevices: "/sc/user/getUserDevices"
    },
    e.MessageUrl = {
        getUnreadMsg: "/sc/msg/getUnreadMsg",
        confirmMsg: "/sc/msg/confirmMsg",
        getMessageRecord: "/sc/message/getMessageRecord",
        getChatRecord: "/sc/msg/getChatRecord",
        getPagedChatHistory: "/sc/msg/getPagedChatHistory",
        getFileAccessRecords: "/sc/message/getEntRecord",
        sendMail: "/sc/mail/sendMail",
        getSysMsgHistory: "/sc/msg/getSysMsgHistory"
    },
    e.OrderUrl = {
        getCurrServiceList: "/sc/service/getCurrServiceList",
        saveSingleOrder: "/pub/order/saveSingleOrder",
        payOrder: "/pub/order/payOrder",
        getBuyRecords: "/sc/order/getBuyRecords",
        updatePayStatus: "/pub/buy/updatePayStatus"
    },
    e.PermissionUrl = {
        getUserPermissionsByFolderId: "/sc/entDisk/getUserPermissionsByFolderId",
        updateFolderPermission: "/sc/entDisk/updateFolderPermission",
        updateSingleUserFolderPermission: "/sc/entDisk/updateSingleUserFolderPermission",
        getFolderPermissionsByUserId: "/sc/entDisk/getFolderPermissionsByUserId",
        updateUserPermissions: "/sc/admin/permission/updateUserPermissions",
        getFolderPermissions: "/sc/admin/permission/getFolderPermissions",
        getUserPermissions: "/sc/admin/permission/getUserPermissions",
        updateFolderPermissions: "/sc/admin/permission/updateFolderPermissions"
    },
    e.PhoneUrl = {
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
    },
    e.RoleUrl = {
        getRoleList: "/sc/entDisk/getRoleList",
        createRole: "/sc/entDisk/createRole",
        renameRole: "/sc/entDisk/renameRole",
        deleteRoleById: "/sc/entDisk/deleteRoleById",
        getPermissionsByRoleId: "/sc/entDisk/getPermissionsByRoleId",
        getFolderPermissionsAndUserByRoleId: "/sc/entDisk/getFolderPermissionsAndUserByRoleId",
        updateRolePermission: "/sc/entDisk/updateRolePermission"
    },
    e.ShareLinkUrl = {
        createLink: "/sc/link/createLink",
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
    },
    e.TelUrl = {
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
    },
    e.UserUrl = {
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
        getDeptAndUserByDeptId: "/sc/user/getDeptAndUserByDeptId"
    },
    e.WebUrl = {
        sendMsg: "/sendmsg",
        sendMsgs: "/sendmsgs",
        checkWordVerify: "/servlet/wordVerify"
    },
    e.PersonDiskUrl = {
        getRecyclePersonalFolderAndFile: "/sc/disk/getRecyclePersonalFolderAndFile",
        deleteRecyclePersonalFile: "/sc/disk/deleteRecyclePersonalFile",
        deleteRecyclePersonalFolder: "/sc/disk/deleteRecyclePersonalFolder",
        deleteRecyclePersonalFolderAndFile: "/sc/disk/deleteRecyclePersonalFolderAndFile",
        restorePersonalFile: "/sc/disk/restorePersonalFile",
        restorePersonalFolder: "/sc/disk/restorePersonalFolder",
        restorePersonalFolderAndFile: "/sc/disk/restorePersonalFolderAndFile",
        emptyPersonalRecycle: "/sc/disk/emptyPersonalRecycle",
        checkPersonalFileUpload: "/sc/disk/checkPersonalFileUpload",
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
    },
    e.OpearteLogUrl = {
        searchLog: "/sc/log/searchLog"
    },
    e.EntDiskUrl = {
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
    e.RecycleFileUrl = {
        getRecycleFiles: "/sc/recycle/getRecycleFiles",
        deleteRecycleFiles: "/sc/recycle/deleteRecycleFiles",
        emptyRecycleFiles: "/sc/recycle/emptyRecycle",
        restoreRecycleFiles: "/sc/recycle/restoreFilesFromRecycle",
        getRecycleEntFolderAndFile: "/sc/entDisk/getRecycleEntFolderAndFile",
        emptyEntRecycle: "/sc/entDisk/emptyEntRecycle",
        restoreEntFile: "/sc/entDisk/restoreEntFile",
        restoreEntFolder: "/sc/entDisk/restoreEntFolder",
        restoreEntFolderAndFile: "/sc/entDisk/restoreEntFolderAndFile",
        deleteRecycleEntFile: "/sc/entDisk/deleteRecycleEntFile",
        deleteRecycleEntFolder: "/sc/entDisk/deleteRecycleEntFolder",
        deleteRecycleEntFolderAndFile: "/sc/entDisk/deleteRecycleEntFolderAndFile",
        getPagedEntRecycle: "/sc/entDisk/getPagedRecycleEntFolderAndFile",
        getPagedPersonalRecycle: "/sc/disk/getPagedRecyclePersonalFolderAndFile",
        getAdminRecycleFiles: "/sc/admin/recycle/getAdminRecycleFiles"
    },
    e.EntDiskHistoryUrl = {
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
    e.RemindFileUrl = {
        getRemindEntFolderAndFile: "/sc/entDisk/getRemindEntFolderAndFile",
        getPagedRemindEntFiles: "/sc/entDisk/getPagedRemindEntFiles",
        remindEntFile: "/sc/entDisk/remindEntFile",
        remindEntFolder: "/sc/entDisk/remindEntFolder",
        remindEntFolderAndFile: "/sc/entDisk/remindEntFolderAndFile",
        deleteRemindEntFile: "/sc/entDisk/deleteRemindEntFile",
        deleteRemindEntFolder: "/sc/entDisk/deleteRemindEntFolder",
        deleteRemindEntFolderAndFile: "/sc/entDisk/deleteRemindEntFolderAndFile"
    },
    e.FavoriteFileUrl = {
        addFavoriteFile: "/sc/entDisk/addFavFile",
        addFavFiles: "/sc/entDisk/addFavFiles",
        deleteFavFile: "/sc/entDisk/deleteFavFile",
        deleteFavFiles: "/sc/entDisk/deleteFavFiles",
        getFavFileList: "/sc/entDisk/getFavFileList",
        getPagedFavFileList: "/sc/entDisk/getPagedFavFileList"
    },
    e.SyncUrl = {
        deleteSyncFolder: "/sc/admin/sync/deleteSyncFolder",
        deleteSyncFolders: "/sc/admin/sync/deleteSyncFolders",
        getSyncUsersBySyncId: "/sc/admin/sync/getSyncUsersBySyncId",
        updateSyncFolder: "/sc/admin/sync/updateSyncFolder",
        getSyncFolderInfo: "/sc/admin/sync/getSyncFolderInfoByFolderId",
        getCreatedSyncFolders: "/sc/admin/sync/getSyncFoldersByCreaterId",
        getAdminSyncFolders: "/sc/admin/sync/getAdminSyncFolders",
        createFolder: "/sc/file/createFolder",
        getFile: "/sc/file/getFile",
        getFileProperties: "/sc/file/getFileInfo",
        updateFileInfo: "/sc/file/updateFileInfo"
    }
}
);
;define("app/support/services/resturl", function(require) {
    function o(o, r, n, a) {
        function l(e, t, n, a) {
            n && _.isFunction(n) && (n = {}),
            a && _.isFunction(a) && (a = null );
            var l = c(e, t, n, a && !_.isFunction(a) ? a : {})
              , p = r.defer();
            return o(l).success(s(t, n, p)).error(i(t, n, p)),
            p.promise
        }
        function i(o, e, t) {
            return function(r) {
                n.warn("[REST]-[", o, "]-[resp]: ", r, ", [data] ", e),
                t.reject("error500")
            }
        }
        function s(o, e, t) {
            return function(r) {
                var a = r;
                if (_.startsWith(r, "error"))
                    n.warn("[REST]-[" + o + "]-[resp]: " + r + ", Error happen!"),
                    t.reject(r);
                else if ("OK" === r)
                    n.info("[REST]-[" + o + "]-[resp]: ", r, ", [param] ", e),
                    t.resolve(r);
                else if (_.isString(r)) {
                    n.info("[REST]-[" + o + "]-[resp]: ", r, ", [param] ", e);
                    try {
                        a = JSON.parse(r),
                        t.resolve(a)
                    } catch (l) {
                        a = r,
                        t.resolve(a),
                        n.warn("[ERR]-[REST]-[" + o + "] JSON parse error!")
                    }
                }
                t.resolve(a)
            }
        }
        function c(o, t, r, n) {
            return seajs.restsecret && _.include(o, "java") && e[t] && (o = d,
            t = e[t]),
            _.extend({
                url: o + t,
                method: "POST",
                headers: {
                    UT: a.token || void 0,
                    "Content-Type": _.include(o, "/wt/node") ? "application/json; charset=UTF-8" : "application/json; charset=UTF-8",//need to modify here to application/json,415 disappeared
                    Accept: "text/plain;charset=UTF-8"
                },
                timeout: 6e4,
                data: r
            }, n || {})
        }
        function p() {
            return _.contains(["127.0.0.1", "localhost", "192.168.2.24"], location.host) ? "http://192.168.1.55/upload/single" : h + "/upload/single"
        }
        var u = 'http://KD90ZC-PC:1337' + "/" + 'api.weitoo.com' + "/server"
          , d = location.protocol + "//" + location.host + "/wt/flex2"
          , f = location.protocol + "//" + location.host + "/wt/node"
          , h = "http://" + location.host
          , v = location.protocol + "//" + location.host + "/wt/fm"
          , U = "http://" + location.host + "/wt/fm"
          , m = {};
        return _.each(t, function(o, e) {
            _.each(o, function(o, t) {
                var r = u;
                "WebUrl" === e || "PhoneUrl" === e ? r = f : "FileMgrUrl" === e && (r = v),
                this[t] = _.partial(l, r, o)
            }
            , this)
        }
        , m),
        angular.extend({
            baseurl: "/wt",
            baseurl2: "/wt/",
            fmservice: v,
            previewUrl: location.protocol + "//" + location.host + "/onlinedisk/",
            fdfsBaseUrl: location.protocol + "//" + location.host,
            flexService: u,
            createValidationCode: u + "/pub/createValidationCode",
            nodeFileDownload: f + "/v27/download/file",
            takePhotoUrl: h + "/upload/usericon",
            uploadLogoUrl: h + "/upload/entlogo",
            uploadUrl: p(),
            uploadSendFile: h + "/upload/send/file",
            zipDownload: U + "/sc/download/zipfile",
            getMediaStreamUrl: U + "/file/getMediaStream",
            excelParse: u + "/pub/user/parseImportUsers",
            excelDownloadUrl: f + "/file/download/excel",
            submitEntAuth: U + "/sc/tel/updateTelAuthInfo",
            execDownloadFile: f + "/v27/download/file"
        }, m)
    }
    var e = require("app/support/services/UrlEncode")
      , t = require("app/support/services/ServiceUrl");
    angular.module("commons.services").factory("resturl", ["$http", "$q", "$log", "cache", o])
}
);
;define("app/support/services/ErrorType", function() {
    function r(r) {
        return {
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
            viewFileAsImgError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorFileNotFound:
                    o = r("msg1200");
                    break;
                case this.errorNoPermission:
                    o = r("msgNoPermission2");
                    break;
                case this.errorFileDeleted:
                    o = r("msgAttFileNoExist");
                    break;
                default:
                    o = r("msgServerError")
                }
                return o
            },
            updateFileInfoError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgNoPermission");
                    break;
                case this.errorFileLocked:
                    o = r("msgFileIsLock");
                    break;
                case this.errorVersionConflict:
                    o = r("msgFileVerConflict");
                    break;
                case this.errorDiskUsedOver:
                    o = r("msgServerError");
                    break;
                case this.errorNoSpace:
                    o = r("msgDiskSizeLack");
                    break;
                case this.errorSameFolder:
                    o = r("msgFolderSaveConflict");
                    break;
                case this.errorSameFile:
                    o = r("msgFileConflict");
                    break;
                case this.errorRequestData:
                    o = r("msgRequestDataError");
                    break;
                case this.errorFolderMaxSize:
                    o = r("msgErrorFolderMaxSize");
                    break;
                case this.errorNoParentMaxSize:
                    o = r("msgErrorNoParentMaxSize");
                    break;
                default:
                    o = r("msgServerError")
                }
                return o
            },
            viewAsTxtError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorNotSupported:
                    o = r("msgReadUnsupport");
                    break;
                case this.errorFileNotFound:
                    o = r("msgFileNoExist");
                    break;
                case this.errorNoPermission:
                    o = r("msgNoPermission");
                    break;
                default:
                    o = r("msgServerError")
                }
                return o
            },
            registerDoneError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorAccountUsed:
                    o = r("msgAccountUsed");
                    break;
                case this.errorEnterpriseAlreadyExist:
                    o = r("msgEntNameUsed");
                    break;
                default:
                    o = r("msgServerError")
                }
                return o
            },
            restoreFileVersionError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorFolderDeleted:
                    o = r("msgFolderDeleted");
                    break;
                case this.errorSameFile:
                    o = r("msgFileConflict");
                    break;
                case this.error500:
                default:
                    o = r("msgServerError")
                }
                return o
            },
            restoreAdminFilesError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgNoPermission2");
                    break;
                case this.errorVersionConflict:
                    o = r("msgFileVerConflict");
                    break;
                case this.errorSameFile:
                    o = r("msgRecycleFileConflict");
                    break;
                case this.errorSameFolder:
                    o = r("msgRecycleFolderConflict");
                    break;
                case this.errorNoSpace:
                    o = r("msgDiskSizeLack");
                    break;
                case this.errorFolderSpaceOver:
                    o = r("msgFolderSpaceOver");
                    break;
                case "errorFolderDeleted":
                    o = r("msgRestoreFolderDel");
                    break;
                default:
                    o = r("msgServerError")
                }
                return o
            },
            deleteAdminRecycleFilesError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgNoPermission");
                    break;
                case this.errorVersionConflict:
                    o = r("msgDeleteOnVerConflict");
                    break;
                default:
                    o = r("msgDeleteFail")
                }
                return o
            },
            entDiskCopyError: function(e) {
                var o = "";
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgNoPermission");
                    break;
                case this.errorSameFile:
                    o = r("msgSameFile");
                    break;
                case this.errorSameFolder:
                    o = r("msgFolderSaveConflict");
                    break;
                case this.errorNoSpace:
                    o = r("msgDiskSizeLack");
                    break;
                case this.errorFolderSpaceOver:
                    o = r("msgFolderSpaceOver");
                    break;
                case "errorMoveToOwn":
                    o = r("msgErrorCopyToOwn");
                    break;
                default:
                    o = r("msgServerError")
                }
                return o
            },
            createDeptError: function(e) {
                var o;
                switch (e) {
                case this.errorSameName:
                    o = r("msgDeptExisted");
                    break;
                case this.errorNoSpace:
                    o = r("msgDiskLessAssign");
                    break;
                case this.errorNoParentMaxSize:
                    o = r("msgErrorNoParentDeptMaxSize");
                    break;
                default:
                    o = r("msgCreateFail")
                }
                return o
            },
            updateDeptMaxSizeError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgNoPermission");
                    break;
                case this.errorNoSpace:
                    o = r("msgDiskLessAssign");
                    break;
                case this.errorFolderMaxSize:
                    o = r("msgErrorFolderMaxSize");
                    break;
                case this.errorNoParentMaxSize:
                    o = r("msgErrorNoParentDeptMaxSize")
                }
                return o
            },
            lockUserError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgNoPermission");
                    break;
                case this.error500:
                }
                return o
            },
            updateSyncFolderError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgNoPermissonTip");
                    break;
                case this.errorFolderDeleted:
                default:
                    o = r("msgServerError")
                }
                return o
            },
            resendUserActiveMsgError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case "errorAlreadyActived":
                    o = r("msgUserActiveError");
                    break;
                case this.errorWaiting:
                    o = r("msgErrorWaiting");
                    break;
                case this.error500:
                }
                return o
            },
            createFolderError: function(e) {
                var o = r("msgSaveFail");
                switch (e) {
                case this.errorSameFolder:
                    o = r("msgFolderSaveConflict");
                    break;
                case this.errorNoPermission:
                    o = r("msgNoPermission");
                    break;
                case this.errorFolderDeleted:
                    o = r("msgParentFolderDeleted");
                    break;
                case this.errorNoSpace:
                    o = r("msgDiskLessAssign");
                    break;
                case this.errorPersonalDiskDisabled:
                    o = r("msgPersonFolderClosed");
                    break;
                case this.errorNoParentMaxSize:
                    o = r("msgErrorNoParentMaxSize")
                }
                return o
            },
            saveOrUpdateFileError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorSameFile:
                    o = r("msgFileConflict");
                    break;
                case this.errorFolderDeleted:
                    o = r("msgCreateDestFolderDeleted");
                    break;
                case this.errorVersionConflict:
                    o = r("msgVersionEditConflict");
                    break;
                case this.errorNoPermission:
                    o = r("msgNoPermissonTip");
                    break;
                default:
                    o = r("msgSysBusy")
                }
                return o
            },
            adminDeleteFilesError: function(e) {
                var o = r("msgDeleteFail");
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgNoPermission");
                    break;
                case this.errorVersionConflict:
                    o = r("msgDeleteOnVerConflict");
                    break;
                case this.error500:
                default:
                    o = r("msgDeleteFail")
                }
                return o
            },
            loginError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorWrongPWD:
                    o = r("msgPasswordError");
                    break;
                case this.errorWrongAccount:
                    o = r("msgAccountErr");
                    break;
                case this.errorUserLocked:
                    o = r("msgAccountLocked");
                    break;
                case this.errorAuditFail:
                    o = r("msgServiceExpire");
                    break;
                case this.errorUserNotActive:
                    o = r("msgAccountNotActive");
                    break;
                case this.errorUserDeleted:
                    o = r("msgAccountDeleted");
                    break;
                case this.errorNotAuthed:
                    o = r("msgUnAuthErr");
                    break;
                case this.errorExpirationTimeOver:
                    o = r("msgActiveUserErr")
                }
                return o
            },
            moveFileError: function(e) {
                var o = null ;
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgNoPermission");
                    break;
                case this.errorSameFolder:
                    o = r("msgMoveOnFolderConflict");
                    break;
                case this.errorSameFile:
                    o = r("msgMoveOnFileConflict");
                    break;
                case this.errorMoveToSubFolder:
                    o = r("msgMoveToSub");
                    break;
                case this.errorFileLocked:
                    o = r("msgMoveLockFileErr");
                    break;
                case this.errorVersionConflict:
                    o = r("msgMoveOnVersionConflict");
                    break;
                case this.errorFolderSpaceOver:
                    o = r("msgFolderSpaceOver");
                    break;
                case this.error500:
                default:
                    o = r("msgServerError")
                }
                return o
            },
            getLinkByCodeError: function(e) {
                var o = null ;
                switch (e) {
                case this.errorExpirationTimeOver:
                    o = r("msgLinkExpire");
                    break;
                case this.errorFileNotFound:
                    o = r("msg1200");
                    break;
                case this.error500:
                default:
                    o = r("msgLinkNoExist")
                }
                return o
            },
            createLinkError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgNoPermission");
                    break;
                case this.errorFileDeleted:
                    o = r("msgFileDeleted");
                    break;
                default:
                    o = r("msgServerError")
                }
                return o
            },
            showDeleteFileError: function(e) {
                var o = "";
                switch (e) {
                case this.OK_MARK:
                    break;
                case this.errorNoPermission:
                    o = r("msgNoPermission");
                    break;
                case this.errorFileLocked:
                    o = r("msgDeleteLockFileErr");
                    break;
                case this.errorVersionConflict:
                    o = r("msgFileVerConflict");
                    break;
                case this.error500:
                default:
                    o = r("msgServerError")
                }
                return o
            },
            followFileError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgNoPermission");
                    break;
                case this.errorFileDeleted:
                    o = r("msgFileDeleted");
                    break;
                default:
                    o = r("msgServerError")
                }
                return o
            },
            lockFileError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgNoPermission");
                    break;
                case this.errorFileLocked:
                    o = r("msgFileIsLock");
                    break;
                default:
                    o = r("msgServerError")
                }
                return o
            },
            saveToPersonDiskError: function(e) {
                var o = "";
                switch (e) {
                case this.errorSameFile:
                    o = r("msgSameFile");
                    break;
                case this.errorNoSpace:
                    o = r("msgPersonDiskNoSpace");
                    break;
                default:
                    o = r("msgSaveFail")
                }
                return o
            },
            setPersonDiskSizeError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorNoSpace:
                    o = r("msgDiskLessAssign");
                    break;
                case this.errorDiskUsedOver:
                    o = "个人网盘使用空间超出了当前已经使用的!";
                    break;
                default:
                    o = r("msgServerError")
                }
                return o
            },
            addAccountError: function(e) {
                var o = r("msgSysAbnormal");
                switch (e) {
                case this.errorAccountUsed:
                    o = r("msgAccDuplite");
                    break;
                case this.errorEnterpriseNotExist:
                    o = r("msgAccExisted");
                    break;
                case this.errorUserNoOver:
                    o = r("msgAccMunbersLimit");
                    break;
                case this.errorPayExpired:
                    o = r("msgEntServiceExpire");
                    break;
                case this.errorEmployeeAlreadyExist:
                    o = r("msgAccDuplite");
                    break;
                default:
                    o = r("msgServerError")
                }
                return o
            },
            zipFilesError: function(e) {
                var o = r("msgServerError");
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgOpenAttNoPermission");
                    break;
                case this.errorZipTaskRunning:
                    o = r("msgDownloadOnCompressing");
                    break;
                case this.errorFileIsZipping:
                    o = r("msgDownloadOnLargeCompressing");
                    break;
                case this.errorZipNoFiles:
                    o = r("msgZipNotFiles");
                    break;
                case this.errorZipMaxSize:
                    o = r("msgZipMaxSize");
                    break;
                default:
                    o = r("msgCompressFail")
                }
                return o
            },
            copyFileError: function(e) {
                var o = "";
                switch (e) {
                case this.errorNoPermission:
                    o = r("msgNoPermission2");
                    break;
                case this.errorFileLocked:
                    o = r("msgFileIsLock");
                    break;
                case this.errorSameFile:
                    o = r("msgSameFile");
                    break;
                case this.errorSameFolder:
                    o = r("msgMoveOnFolderConflict");
                    break;
                case this.errorVersionConflict:
                    o = r("msgFileVerConflict");
                    break;
                case this.errorMoveToOwn:
                    o = r("msgErrorCopyToOwn");
                    break;
                case this.errorMoveToSubFolder:
                    o = r("msgMoveToSub");
                    break;
                case this.errorFolderSpaceOver:
                    o = r("msgFolderSpaceOver");
                    break;
                case this.errorPersonalDiskDisabled:
                    o = r("msgPersonFolderClosed");
                    break;
                case this.errorNoSpace:
                    o = r("msgDiskLessAssign");
                    break;
                default:
                    o = r("msgServerError")
                }
                return o
            },
            importUserError: function(r) {
                var e = "账号导入失败! 系统错误, 请重新尝试!";
                switch (r) {
                case "errorAccountUsed":
                    e = "账号导入失败! 您要导入的账号已经存在! ";
                    break;
                case "errorTaskRunning":
                    e = "账号导入失败! 已经存在一个导入任务正在执行, 请等待执行完成后再次导入!";
                    break;
                case "errorUserNoOver":
                    e = "账号导入失败! 要导入的用户数已经超出最大限制!";
                    break;
                case "errorNoPermission":
                    e = "账号导入失败! 没有导入的权限!";
                    break;
                case "errorDepartmentNotExist":
                    e = "账号导入失败! 要导入的部门不存在! "
                }
                return e
            }
        }
    }
    angular.module("commons.services").factory("ErrorType", ["$translate", r])
}
);
;define("app/support/services/MessageType", function() {
    angular.module("commons.services").factory("MessageType", function() {
        return {
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
    }
    )
}
);
;define("app/support/services/constants", function() {
    function e(e, t, i, r, n) {
        return {
            ERROR_MARK: "error",
            OK_MARK: "OK",
            lang: webhelper.getLang(),
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
            url: {
                exportOperateLog: "/wt/java/sc/admin/operationlog"
            },
            pattern: {
                digits: /^\d+$/,
                integer: /^[1-9]+\d*$/,
                number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
                email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
                url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                Phone: /^0\d{2,3}(\-)?\d{7,8}$/,
                Mobile: /^1\d{10}$/,
                entName: /^[\u0391-\uFFE5a-zA-Z0-9][\u0391-\uFFE5a-zA-Z0-9\s\.\-]{0,48}[\u0391-\uFFE5a-zA-Z0-9\.\-]$/,
                userName: /^[\u0391-\uFFE5a-zA-Z0-9\s]{2,20}$/,
                fileName: /[\/\\:\*\?"<>\|]/,
                emailOrMobile: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))|(1(([35][\d])|(47)|[8][\d]|(70)))\d{8}$/i,
                password: /^\S{6,30}$/,
                phoneOrMobile: /(^0\d{2,3}(\-)?\d{7,8}$)|(^(1(([35][\d])|(47)|[8][\d]|(70)))\d{8}$)/
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
                label: "label-btn"
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
            DATE_TIME_FORMAT: "YYYY-MM-DD HH:mm",
            TIME_FORMAT: "HH:mm:ss",
            specialFolderMap: {
                Share: t("msgShareFolder"),
                share: t("msgShareFolder"),
                "My documents": t("msgMyDoc"),
                "My pictures": t("msgMyPic"),
                "Received files": t("msgReceiveFiles"),
                "Send files": t("msgSendFiles")
            },
            entSpecialFolderNames: {
                Share: t("msgShareFolder"),
                share: t("msgShareFolder")
            },
            personSpecialFolderNames: {
                "My documents": t("msgMyDoc"),
                "My pictures": t("msgMyPic"),
                "Received files": t("msgReceiveFiles"),
                "Send files": t("msgSendFiles"),
                "My device": t("msgMyDevice")
            },
            entSystemFolderNames: [t("msgSimShareFolder"), t("msgTraShareFolder"), t("msgEngShareFolder")],
            personSystemFolderNames: [t("msgSimMyDoc"), t("msgSimMyPic"), t("msgSimReceiveFiles"), t("msgSimSendFiles"), t("msgTraMyDoc"), t("msgTraMyPic"), t("msgTraReceiveFiles"), t("msgTraSendFiles"), t("msgEngMyDoc"), t("msgEngMyPic"), t("msgEngReceiveFiles"), t("msgEngSendFiles")],
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
                return !e || e.length <= 0 || "--" === e ? "0" : _.numberFormat(e, 0) + " " + t("msgPerson")
            },
            timeConvertMinutes: function(e) {
                return e ? e + " " + t("msgMinute") : "0 " + t("msgMinute")
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
                var e;
                switch (this.lang) {
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
            isFileConvertSupport: function(e) {
                return this._convertTypes || (this._convertTypes = [],
                _.each([this.docType, this.pptType], function(e) {
                    this._convertTypes = this._convertTypes.concat(e)
                }
                , this)),
                -1 !== _.indexOf(this._convertTypes, e)
            },
            isPreviewSupport: function(e) {
                if (!this._previewTypes) {
                    var t = this;
                    this._previewTypes = [],
                    _.each([this.docType, this.excelType, this.imgType, this.pptType, this.pdfType, this.txtType, this.htmlType, this.mp3Type, this.mp4Type], function(e) {
                        t._previewTypes = t._previewTypes.concat(e)
                    }
                    )
                }
                return -1 !== _.indexOf(this._previewTypes, e)
            },
            canDirectOpenFile: function(e) {
                if (!this._directViewTypes) {
                    var t = this;
                    this._directViewTypes = [],
                    _.each([this.imgType, this.htmlType, this.mp3Type, this.mp4Type], function(e) {
                        t._directViewTypes = t._directViewTypes.concat(e)
                    }
                    )
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
                }
                )
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
                    }
                    )
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
                }
                )
            },
            isSpecialPersonFolder: function(e) {
                return _.some(_.keys(this.personSpecialFolderNames), function(t) {
                    return t === e
                }
                )
            },
            getUserStatusTip: function(e) {
                var t = "未知";
                switch (e) {
                case this.UserStatus.Online:
                    t = "在线";
                    break;
                case this.UserStatus.Busy:
                    t = "忙碌";
                    break;
                case this.UserStatus.Offline:
                    t = "离开";
                    break;
                case this.UserStatus.Corbet:
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
                var r = {
                    fileId: e,
                    fileType: t
                };
                return i.nodeFileDownload + "?" + $.param(r)
            },
            date_format: function(e, t) {
                return moment(e).format(t || this.DATE_TIME_FORMAT)
            },
            getMillSec: function(e, t) {
                var t = t || this.DATE_TIME_FORMAT;
                return moment(e, t).toDate().getTime()
            },
            dateFromMisc: function(e, t) {
                var t = t || this.DATE_TIME_FORMAT
                  , i = moment(parseInt(e)).toDate();
                return t && (i = moment(i).format(t)),
                i
            },
            dateStrFromMisc: function(e, t) {
                var t = t || this.DATE_TIME_FORMAT;
                return moment(parseInt(e)).format(t)
            },
            dateAfterYear: function(e, t) {
                return moment(e).add(t, "y").toDate().getTime()
            },
            timeFromMillSec: function(e, t) {
                var t = t || this.TIME_FORMAT;
                return moment(parseInt(e)).format(t)
            },
            timeCount: function(e, t) {
                var i = this;
                return i._timer = e,
                t && t(e),
                --e > 0 ? void setTimeout(function() {
                    i.timeCount(e, t)
                }
                , 1e3) : void (t && t(e))
            },
            getRenameFileMsg: function(e) {
                var t = null ;
                switch (e) {
                case r.OK_MARK:
                    t = "重命名成功!";
                    break;
                case r.errorNoPermission:
                    t = "无此权限!";
                    break;
                case r.errorSameFile:
                    t = "文件夹下存在同名文件!";
                    break;
                case r.errorSameFolder:
                    t = "文件夹下存在同名文件夹!";
                    break;
                case r.errorFileLocked:
                    t = "文件被锁定!";
                    break;
                case r.errorVersionConflict:
                    t = "版本冲突!";
                    break;
                case r.error500:
                    t = "系统错误!"
                }
                return t
            },
            clearLoginCookies: function() {
                this.setCookie("ut", null ),
                this.setCookie("ci", null )
            },
            setUserLoginCookies: function(e, t, i, r, n) {
                this.clearLoginCookies(),
                this.setCookie("ci", r),
                this.setCookie("ut", n),
                e ? (this.setCookie("en", t),
                this.setCookie("ua", i)) : this.setCookie("un", i)
            },
            setCookie: function(e, t) {
                $.cookie(e, t, {
                    path: "/"
                })
            },
            getCookie: function(e) {
                return $.cookie(e)
            },
            getFileSuffix: function(e) {
                return _.include(e, ".") ? _.strRightBack(e, ".") : ""
            },
            getFileType: function(e) {
                return this.getFileSuffix(e)
            },
            getFolderName: function(e) {
                return e ? -1 === e.indexOf("/") ? e : e.substr(_.lastIndexOf(e, "/") + 1) : ""
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
                return e && e === n.userId
            },
            isRootFolder: function(e) {
                return "entRoot" === e || "personRoot" === e
            },
            asBaseParam: function() {
                var e = {
                    entId: n.entId,
                    userId: n.userId
                };
                return e
            },
            createGuid: function(e) {
                return webhelper.guid() + "." + this.getFileSuffix(e)
            },
            getClock: function(e) {
                var t = 0
                  , i = 0
                  , r = 0;
                e >= 3600 && (t = Math.floor(e / 3600),
                e %= 3600),
                e >= 60 && (i = Math.floor(e / 60),
                e %= 60),
                r = e;
                var n = "";
                return n = n + (t >= 10 ? t : "0" + t) + ":",
                n = n + (i >= 10 ? i : "0" + i) + ":",
                n += r >= 10 ? r : "0" + r
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
            addParamToUrl: function(e, t, r) {
                return -1 === e.indexOf("?") ? e : r && -1 !== e.indexOf("?dev") ? i.baseurl2 + _.strLeft(e, "?dev") + "?dev&" + $.param(t) + _.strRight(e, "?dev") : i.baseurl2 + _.strLeft(e, "?") + "?" + $.param(t) + "&" + _.strRight(e, "?")
            },
            isTeleNum: function(e) {
                return this.pattern.Phone.test(e) || this.pattern.Mobile.test(e)
            },
            isMobileNum: function(e) {
                return this.pattern.Mobile.test(e)
            },
            _getUrl: function(e, t, i) {
                var r, n = location.pathname, t = t || this.lang, o = (_.include(e, "login.html") || _.include(e, "register.html")) && "app.oatos.com" === location.host && !seajs.isPrivate;
                return r = (o ? "https:" : "http:") + "//" + location.host + n.substring(0, n.lastIndexOf("/")),
                r = r + "/" + e + (seajs.devMode ? "?dev" : ""),
                "zh_CN" !== t && (r += _.include(r, "?") ? "&locale=" + t : "?locale=" + t),
                i && (r += "#" + i),
                r
            },
            _getUri: function(e, t, i) {
                var r = location.pathname;
                return uri = r.substring(0, r.lastIndexOf("/")),
                uri = uri + "/" + e + (seajs.devMode ? "?dev" : ""),
                t && "zh_CN" !== t && (uri += _.include(uri, "?") ? "&locale=" + t : "?locale=" + t),
                i && (uri += "#" + i),
                uri
            },
            getWebsiteUrl: function(e) {
                return this._getUrl("home.html", e)
            },
            getLoginUrl: function(e, t) {
                var i = this._getUrl("login.html", e);
                return t && (i += -1 == i.indexOf("?") ? "?" : "&",
                i += t),
                i
            },
            getRegisterUrl: function(e, t) {
                return this._getUrl("register.html", e, t)
            },
            getAdminUrl: function(e) {
                return this._getUrl("admin.html", null , e)
            },
            getShareUrl: function(e, t) {
                var i = "http://";
                if (t && (i = "https://"),
                /(?:app|vip)\.oatos\.com/.test(location.host))
                    return i + (t ? "app.oatos.com/wt/share.html?lc=" : "s.oatos.com/") + e;
                var r = i + location.host + this._getUri("share.html");
                return e ? r = r + (_.include(r, "?") ? "&" : "?") + "lc=" + e : r
            },
            getViewUrl: function() {
                return this._getUrl("fileviewer.html")
            },
            getBuyUrl: function() {
                return this._getUrl("buy.html")
            },
            getMeetingUrl: function() {
                return "http://" + location.host + "/meeting/index.html"
            },
            getPromoteUrl: function() {
                return this._getUrl("2015.html")
            },
            getNewFileUrl: function() {
                return this._getUrl("newfile.html")
            },
            getOpenFolderUrl: function(e, t, i) {
                var r = e ? "sharedisk/forward" : "onlinedisk/forward";
                return r + (t ? "folder" : "file") + "/" + i
            },
            getSharePreviewUrl: function(e, t) {
                return e.isFolder() ? "#" + e.get("diskType") + "/openfolder/" + e.id : this.getPreviewUrl({
                    fileId: e.id,
                    folderId: e.get("parentId"),
                    type: e.get("type"),
                    diskType: e.get("diskType"),
                    linkId: t
                })
            },
            getViewType: function(e) {
                return this.isImgType(e) ? "pic" : this.isExcelType(e) ? "excel" : this.isPdfType(e) || this.isDocSupport(e) ? "pdf" : this.isTxtType(e) || this.isHtmlType(e) ? "html" : this.isMp4Type(e) ? "vid" : this.isMp3Type(e) ? "aud" : "unknow"
            },
            getPreviewUrl: function(e) {
                var t = this.getViewType(e.type)
                  , i = this.getViewUrl()
                  , r = {
                    ei: n.entId,
                    ui: n.userId,
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
                    if (i = this.getPdfViewerUrl(),
                    webhelper.isIE8())
                        return "#pdf/not/support";
                    r.file = encodeURIComponent(this.isPdfType(e.type) ? "res/" + e.guid : "/wt/node/" + e.diskType + "/" + e.fileId + "/as-pdf-stream" + (e.linkId ? "?linkId=" + e.linkId : "")),
                    e.linkId && (i = i + (-1 !== i.indexOf("?") ? "&" : "?") + "li=" + e.linkId)
                }
                return e.linkId && (r.li = e.linkId),
                i = _.include(i, "?") ? i + "&" : i + "?",
                i + $.param(r)
            },
            getPdfViewerUrl: function() {
                return this._getUrl("pdfviewer.html")
            },
            getItemPreviewUrl: function(e) {
                return this.isPreviewSupport(e.type) ? this.isTxtType(e.type) ? "#/file/preview/" + e.fileId : this.getPreviewUrl({
                    fileId: e.fileId,
                    folderId: e.parentId,
                    type: e.type,
                    diskType: e.fileType
                }) : "#!"
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
                return 1 === arguments.length || "ModelToView" === e ? !t || t.length <= 0 || "--" === t ? "-" : this.convertSize(t) : void 0
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
                var i = Math.round(100 * e / t);
                return (i >= 100 ? 100 : i) + "%"
            },
            sendDateConverter: function(e, t) {
                return this.sendDateFromMs(t)
            },
            sendDateFromMs: function(e) {
                var t = new Date(parseInt(e))
                  , i = moment().format("YYYY-MM-DD")
                  , r = moment(t).format("YYYY-MM-DD");
                return r = moment(t).format(i == r ? "HH:mm:ss" : "YYYY-MM-DD HH:mm:ss")
            },
            permissionConverter: function(e, i) {
                var r = _.keys(_.pick(i, function(e) {
                    return !!e
                }
                ));
                if (0 === r.length)
                    return "";
                if (1 === r.length) {
                    var n = r[0];
                    switch (n) {
                    case "read":
                        return t("msg421");
                    case "download":
                        return t("msg423");
                    case "upload":
                        return t("msg422");
                    default:
                        return t("msg427")
                    }
                }
                return t(2 === r.length ? 0 === _.difference(r, ["read", "upload"]).length ? "msg424" : 0 === _.difference(r, ["read", "download"]).length ? "msg425" : "msg427" : r.length >= 7 ? "msg426" : "msg427")
            },
            typeConverter: function(e, t) {
                var t = 1 === arguments.length ? arguments[0] : t;
                if (1 === arguments.length || "ModelToView" === e) {
                    if (!t)
                        return "file-unknow";
                    var i = t.toLocaleLowerCase();
                    return "folder" === t ? "file-folder" : this.isTxtType(i) || this.isHtmlType(i) ? "file-txt" : -1 !== _.indexOf(this.pdfType, i) ? "file-pdf" : -1 !== _.indexOf(this.imgType, i) ? "file-img" : -1 !== _.indexOf(this.mp3Type, i) ? "file-mp3" : -1 !== _.indexOf(this.docType, i) ? "file-doc" : -1 !== _.indexOf(this.excelType, i) ? "file-excel" : -1 !== _.indexOf(this.mp4Type, i) ? "file-mp4" : -1 !== _.indexOf(this.pptType, i) ? "file-ppt" : -1 !== _.indexOf(this.zipType, i) ? "file-zip" : "file-unknow"
                }
            },
            dateConverter: function(e, t) {
                return t ? this.dateStrFromMisc(parseInt(t)) : " - "
            },
            checkConverter: function(e, t) {
                return "ModelToView" === e ? t + " " + (t && "entFileItemSelect") : void 0
            },
            getAdminStatus: function(e, i) {
                return t(i == this.adminStatus.active ? "msgNormal" : "msg337")
            },
            convertColor: function(e, t) {
                return t == n.userId ? "my-title" : "other-title"
            },
            getUserStatusTip: function(e, i) {
                var r;
                switch (i) {
                case this.UserStatus.Online:
                    r = t("msgStatusOnline");
                    break;
                case this.UserStatus.Busy:
                    r = t("msgStatusBusy");
                    break;
                case this.UserStatus.Leave:
                    r = t("msgStatusLeave");
                    break;
                case this.UserStatus.Corbet:
                    r = t("msgStatusCorbet");
                    break;
                default:
                    r = t("msgStatusLeave")
                }
                return r
            },
            getFileName: function(e) {
                return e && -1 !== e.indexOf(".") ? e.substring(0, e.lastIndexOf(".")).toLowerCase() : e
            },
            setUsualContactTitle: function(e, i) {
                var r = t("msg1135");
                return i && (r = t("msg1137")),
                r
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
                }
                )
                  , i = _.map(t.files, function(e) {
                    return e.id
                }
                )
                  , r = _.map(t.folders, function(e) {
                    return e.id
                }
                );
                return {
                    fileIds: i,
                    folderIds: r
                }
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
                    fileId: e.fileId,
                    fileType: e.fileType,
                    port: location.port
                };
                e.linkId && _.extend(t, {
                    linkId: e.linkId
                });
                var r = i.execDownloadFile + "?" + $.param(t);
                $("body").append("<iframe id='downloadFrame' style='width:1px;height:1px;' src='" + r + "'></iframe>")
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
                        var i = "拷贝错误";
                        switch (e) {
                        case "createCopyFlash":
                            i = $("#linkHref").attr("href");
                            break;
                        case "linkViewCopy":
                            i = $(".link-url").html();
                            break;
                        default:
                            i = $("#file-detail #fileDetailShareLink").text()
                        }
                        return log.debug(tag, "addClipboardCallback: id::", e, ", val: ", i),
                        noty.success(t("msgCopySuccess")),
                        i
                    } catch (r) {
                        log.error("[getClipboardContent]  err:", r.stack)
                    }
                }
            },
            dealEntSpecialPath: function(e) {
                return _.find(this.entSpecialFolderNames, function(t, i) {
                    return 0 === e.indexOf("/" + i) ? (e = e.replace(i, this.entSpecialFolderNames[i]),
                    !0) : void 0
                }
                ),
                e
            },
            dealEntSpecialFolder: function(e) {
                return _.find(this.entSpecialFolderNames, function(t, i) {
                    return e === i ? (e = this.entSpecialFolderNames[i],
                    !0) : void 0
                }
                ),
                e
            },
            dealPersonSpecialPath: function(e) {
                return _.find(this.personSpecialFolderNames, function(t, i) {
                    return 0 === e.indexOf("/" + i) ? (e = e.replace(i, this.personSpecialFolderNames[i]),
                    !0) : void 0
                }
                , this),
                e
            },
            dealPersonSpecialFolder: function(e) {
                var t = this;
                return _.find(this.personSpecialFolderNames, function(i, r) {
                    return e === r ? (e = t.personSpecialFolderNames[r],
                    !0) : void 0
                }
                ),
                e
            },
            showRestoreErrMsg: function(e) {
                var i = t("msgServerError");
                switch (e) {
                case r.errorNoPermission:
                    i = t("msgNoPermission2");
                    break;
                case r.errorVersionConflict:
                    i = t("msgFileVerConflict");
                    break;
                case r.errorSameFile:
                    i = t("msgRecycleFileConflict");
                    break;
                case r.errorSameFolder:
                    i = t("msgRecycleFolderConflict");
                    break;
                case r.errorNoSpace:
                    i = t("msgDiskSizeLack");
                    break;
                case r.errorFolderSpaceOver:
                    i = t("msgFolderSpaceOver");
                    break;
                case "errorFolderDeleted":
                    i = t("msgRestoreFolderDel");
                    break;
                default:
                    i = t("msgServerError")
                }
                noty.alert(i)
            },
            generateTradeNo: function() {
                var e = "QY" + this.date_format(new Date, "YYYYMMDD");
                return e + _.random(1e5, 999999)
            },
            generateLinkPwd: function() {
                var e = this.LINK_PWD_STR;
                return e.charAt(_.random(0, 46)) + e.charAt(_.random(0, 46)) + _.random(10, 99)
            },
            getRandomStr: function(e) {
                for (var t = this.LINK_PWD_STR, e = e || 4, i = "", r = 0; e > r; r++)
                    i += t.charAt(_.random(0, 46));
                return i
            },
            selectTextRange: function(e, t) {
                var i = e.get(0)
                  , r = this.getFileSuffix(t)
                  , n = t.length;
                if (r && (n = t.length - r.length - 1),
                i.setSelectionRange)
                    i.setSelectionRange(0, n);
                else if (i.createTextRange) {
                    var o = i.createTextRange();
                    o.collapse(!0),
                    o.moveStart("character", 0),
                    o.moveEnd("character", n),
                    o.select()
                }
                e.focus()
            },
            getMailUrl: function(e) {
                var t = _.strRightBack(e, "@");
                switch (t) {
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
                    return "#/redirect/" + e
                }
            },
            redirectToLogin: function() {
                this.clearLoginCookies(),
                location.assign(this.getLoginUrl())
            },
            startTimer: function(t, i) {
                t.time = i,
                e(function() {
                    t.time--
                }
                , 1e3, i)
            },
            isValidName: function(e, t) {
                if (t || (t = 20),
                !e)
                    return !1;
                var i = e.match(/[\u0391-\uFFE5]/g)
                  , r = i ? i.length : 0
                  , n = e.length - r;
                return t >= 2 * r + n
            }
        }
    }
    angular.module("commons.services").factory("constants", ["$interval", "$translate", "resturl", "ErrorType", "cache", "$log", e])
}
);
;define("app/support/services/NodeRest", function() {
    function e(e) {
        return e.publish({
            baseurl: e.nodeUrl,
            messages: {
                post: function(s, n) {
                    return e.post("/sendmsgs", s, n)
                }
            },
            message: {
                post: function(s, n) {
                    return e.post("/sendmsg", s, n)
                }
            },
            packages: {
                uri: "/buy/packages",
                get: !0
            },
            unitPrice: {
                uri: "/buy/unitPrice",
                get: !0
            },
            filelogs: {
                uri: "/filelogs",
                post: !0
            },
            file: {
                getPreviewUrl: function(s, n) {
                    return e.post("/wt/node/v28/file/preview/url", s, n)
                },
                viewFile: function(s, n, o, t) {
                    var r = _.sprintf("/wt/node/%s/%s/view-as-%s", s, n, o);
                    return e.get(r, t)
                },
                checkUpload: function(s, n) {
                    return e.post("/wt/node/upload/single/check", s, n)
                }
            }
        })
    }
    angular.module("commons.services").factory("NodeRest", ["RestHelper", e])
}
);
;define("app/support/services/toggleCheck", function() {
    function e() {
        return {
            toggleCheckAll: function(e, c) {
                var n = c.length === e.length;
                return log.debug("toggleCheckAll: items length: ", e.length, ", checkeds length: ", c.length),
                _.forEach(e, function(e) {
                    e.checked = !n
                }
                ),
                n ? [] : e
            },
            toggleCheck: function(e, c) {
                return e.checked = !e.checked,
                _.forEach(c, function(c) {
                    c.checked && c != e && (c.checked = !1)
                }
                ),
                e.checked ? [e] : []
            },
            checkItem: function(e, c) {
                return e.checked = !0,
                _.forEach(c, function(c) {
                    c.checked && c != e && (c.checked = !1)
                }
                ),
                e.checked ? [e] : []
            },
            multiCheck: function(e, c) {
                return e.checked = !e.checked,
                _.filter(c, function(e) {
                    return e.checked
                }
                )
            }
        }
    }
    angular.module("commons.services").factory("toggleCheck", [e])
}
);
;define("app/support/services/RestHelper", function() {
    function t(t, e, r, n) {
        function s(e, n, s, u) {
            var c = r.defer();
            return t(o(e, n, s, u)).success(i(n, e, s, c)).error(a(n, e, s, c)),
            c.promise
        }
        function o(t, e, r, s) {
            var o = _.include(e, "/wt/node")
              , a = e;
            return a = _.startsWith(e, v) ? e : o ? v + e : T + e,
            ("GET" === t || "DELETE" === t) && (a += r ? "?" + $.param(r) : ""),
            s && s.query && (a += "?" + $.param(s.query)),
            angular.extend({
                url: a,
                method: t,
                headers: {
                    UT: n.token,
                    "Content-Type": o ? h : m,
                    Accept: o ? h : m
                },
                timeout: 6e4,
                data: r && {
                    data: r
                }
            }, s || {})
        }
        function a(t, e, r, n) {
            return function(s) {
                u(e, t, s, r),
                n.reject("error500")
            }
        }
        function i(t, e, r, n) {
            return function(s) {
                _.startsWith(s, "error") ? (u(e, t, s, r),
                n.reject(s)) : _.startsWith(s.statusCode, "error") ? (u(e, t, s, r),
                n.reject(s.statusCode)) : "OK" === s.statusCode ? (c(e, t, s, r),
                n.resolve(s.data || s.statusCode)) : _.isString(s) ? (c(e, t, s, r),
                n.resolve(s.data || s.statusCode)) : (c(e, t, s, r),
                n.resolve(s))
            }
        }
        function u(t, r, n, s) {
            e.warn(_.sprintf("[ERR]-[REST]-[%s: %s]-[resp]-[%s], [param]: %s", t, r, JSON.stringify(n), JSON.stringify(s)))
        }
        function c(t, r, n, s) {
            e.info(_.sprintf("[OK]-[REST]-[%s: %s]-[resp]: %s, [param]: %s ", t, r, "...", JSON.stringify(s)))
        }
        function p(t, e, r) {
            return s("GET", t, e, r)
        }
        function f(t, e, r) {
            return s("POST", t, e, r)
        }
        function l(t, e, r) {
            return s("PUT", t, e, r)
        }
        function d(t, e, r) {
            return s("DELETE", t, e, r)
        }
        var h = "application/json;charset=utf-8"
          , m = "text/plain; charset=UTF-8"
          , v = location.protocol + "//" + location.host
          , E = v + "/wt/node"
          , T = v + "/wt/java";
        return {
            nodeUrl: E,
            get: p,
            post: f,
            put: l,
            remove: d,
            publish: function(t) {
                var e = {}
                  , r = t.baseurl || ""
                  , n = null ;
                return _.each(t, function(t, s) {
                    e[s] = {},
                    _.each(t, function(o, a) {
                        switch (n = r + t.uri,
                        a) {
                        case "get":
                            e[s].get = _.isFunction(o) ? o : _.partial(p, n);
                            break;
                        case "post":
                            e[s].post = _.isFunction(o) ? o : _.partial(f, n);
                            break;
                        case "put":
                            e[s].put = _.isFunction(o) ? o : _.partial(l, n);
                            break;
                        case "remove":
                            e[s].remove = _.isFunction(o) ? o : _.partial(d, n);
                            break;
                        default:
                            _.isFunction(t[a]) && (e[s][a] = t[a])
                        }
                    }
                    )
                }
                ),
                e
            }
        }
    }
    angular.module("commons.services").factory("RestHelper", ["$http", "$log", "$q", "cache", t])
}
);
;define("app/support/services/AdminRest", function() {
    function e(e) {
        return e.publish({
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
                lock: function(t, n) {
                    return e.post("/sc/admin/users/lock", t, n)
                },
                unlock: function(t, n) {
                    return e.post("/sc/admin/users/unlock", t, n)
                },
                move: function(t, n) {
                    return e.post("/sc/admin/users/move", t, n)
                },
                setDiskSize: function(t, n) {
                    return e.put("/sc/admin/users/disk", t, n)
                },
                importUser: function(t, n) {
                    return e.post("/pub/admin/users/import", t, n)
                },
                getImportStatus: function() {
                    return e.get("/pub/admin/users/import")
                }
            },
            userPermission: {
                uri: "/sc/admin/user/permission",
                get: !0,
                put: !0
            },
            user: {
                uri: "/sc/admin/user",
                put: !0,
                remove: !0,
                lock: function(t, n) {
                    return e.put("/sc/admin/user/lock", t, n)
                },
                unlock: function() {
                    return e.remove("/sc/admin/user/lock", data, option)
                },
                move: function(t, n) {
                    return e.put("/sc/admin/user/move", t, n)
                },
                setDiskSize: function(t, n) {
                    return e.put("/sc/admin/user/disk", t, n)
                },
                updatePermission: function(t, n) {
                    return e.put("/sc/admin/user/permission", t, n)
                },
                resendActiveMsg: function(t, n) {
                    return e.post("/sc/admin/user/resendUserActiveMsg", t, n)
                },
                resetPwd: function(t, n) {
                    return e.post("/sc/admin/user/resetUsersPwd", t, n)
                }
            },
            admins: {
                uri: "/sc/admin/admins",
                post: !0,
                remove: function(t, n) {
                    return e.post("/sc/admin/admins/delete", t, n)
                }
            },
            roles: {
                uri: "/sc/admin/roles",
                get: !0,
                post: !0,
                remove: function(t, n) {
                    return e.post("/sc/admin/roles/delete", t, n)
                }
            },
            groups: {
                uri: "/sc/admin/groups",
                get: !0
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
                remove: function(t, n) {
                    return e.post("/sc/admin/syncfolders/delete", t, n)
                }
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
                post: !0,
                put: !0,
                remove: !0,
                deleteFiles: function(t, n) {
                    return e.post("/sc/admin/recyclefiles/delete", t, n)
                },
                restoreAll: function(t, n) {
                    return e.put("/sc/admin/recyclefiles/all", t, n)
                },
                deleteAll: function(t, n) {
                    return e.remove("/sc/admin/recyclefiles/all", t, n)
                }
            },
            recycleFile: {
                uri: "/sc/admin/recyclefile",
                put: !0,
                remove: !0
            },
            operateLogs: {
                uri: "/sc/admin/operationlog",
                get: function(t, n) {
                    return e.post("/sc/admin/operationlog", t, n)
                },
                exportLog: function(t, n) {
                    return e.post("/sc/admin/operationlog/export", t, n)
                },
                getExportStatus: function(t, n) {
                    return e.get("/sc/admin/operationlog/export", t, n)
                },
                download: function(t, n) {
                    return e.get("/sc/admin/operationlog", t, n)
                }
            },
            chatLogs: {
                uri: "/sc/admin/chatlog",
                post: !0,
                get: !0,
                getChatUsers: function(t, n) {
                    return e.get("/sc/admin/chatlog/users", t, n)
                },
                exportLog: function(t, n) {
                    return e.post("/sc/admin/chatlog/export", t, n)
                },
                getExportStatus: function(t, n) {
                    return e.get("/sc/admin/chatlog/export", t, n)
                }
            },
            ldapConfig: {
                uri: "/sc/admin/ldapconfig",
                get: !0,
                put: !0,
                test: function(t, n) {
                    return e.post("/sc/admin/ldapconfig/test", t, n)
                }
            },
            mailConfig: {
                uri: "/sc/admin/mailconfig",
                get: !0,
                put: !0
            },
            folders: {
                uri: "/sc/admin/folders",
                get: !0
            }
        })
    }
    angular.module("commons.services").factory("AdminRest", ["RestHelper", e])
}
);
;define("app/support/services/FileRest", function() {
    function e(e) {
        return e.publish({
            files: {
                uri: "/sc/files",
                post: !0,
                remove: !0,
                move: function(s, r) {
                    return e.post("/sc/files/move", s, r)
                },
                copy: function(s, r) {
                    return e.post("/sc/files/copy", s, r)
                }
            },
            file: {
                uri: "/sc/file",
                get: !0,
                remove: !0,
                lock: function(s, r) {
                    return e.put("/sc/file/lock", s, r)
                },
                unlock: function(s, r) {
                    return e.remove("/sc/file/lock", s, r)
                },
                rename: function(s, r) {
                    return e.post("/sc/file/rename", s, r)
                },
                download: function(s, r) {
                    return e.get("/sc/file/download", s, r)
                },
                label: function(s, r) {
                    return e.post("/sc/file/label", s, r)
                }
            },
            folders: {
                uri: "/sc/folders",
                post: !0
            },
            comments: {
                uri: "/sc/file/comments",
                get: !0,
                post: !0
            },
            comment: {
                uri: "/sc/file/comment",
                put: !0,
                remove: !0
            },
            links: {
                uri: "/sc/links",
                post: !0,
                remove: function(s, r) {
                    return e.post("/sc/links/delete", s, r)
                }
            },
            link: {
                uri: "/sc/link",
                get: !0,
                post: !0,
                put: !0,
                remove: !0,
                send: function(s, r) {
                    return e.post("/sc/link/send", s, r)
                },
                getLinkInfo: function(s) {
                    return e.get("/pub/link/info", s)
                }
            },
            remindFiles: {
                uri: "/sc/reminds",
                get: !0,
                post: !0,
                put: !0,
                remove: function(s, r) {
                    return e.post("/sc/reminds/delete", s, r)
                }
            },
            remind: {
                uri: "/sc/remind",
                put: !0,
                remove: !0
            },
            pictures: {
                uri: "/sc/pictures",
                post: !0
            },
            labels: {
                uri: "/sc/labels",
                get: !0
            },
            label: {
                uri: "/sc/label",
                remove: !0,
                post: !0
            },
            recycleFiles: {
                uri: "/sc/recyclefiles",
                post: !0,
                put: !0,
                remove: function(s, r) {
                    return e.post("/sc/recyclefiles/delete", s, r)
                },
                removeAll: function(s, r) {
                    return e.remove("/sc/recyclefiles/all", s, r)
                }
            }
        })
    }
    angular.module("commons.services").factory("FileRest", ["RestHelper", e])
}
);
;define("app/support/services/BuyRest", function() {
    function e(e) {
        return e.publish({
            surprises: {
                uri: "/sc/buy/surprises",
                get: !0,
                post: !0
            },
            surprise: {
                uri: "/sc/buy/surprise",
                get: !0
            },
            luck: {
                uri: "/sc/buy/luck",
                get: !0,
                post: !0
            },
            redenvelopes: {
                uri: "/sc/redenvelopes/2015",
                get: !0,
                post: !0
            }
        })
    }
    angular.module("commons.services").factory("BuyRest", ["RestHelper", e])
}
);
;define("app/support/services/UserRest", function() {
    function e(e) {
        return e.publish({
            currentUser: {
                uri: "/sc/user/current",
                get: !0,
                post: !0
            },
            user: {
                uri: "/sc/user"
            },
            validation: {
                sendValidationMsg: function(s, r) {
                    return e.post("/pub/code/sendValidationMsg", s, r)
                },
                checkValidationMsg: function(s, r) {
                    return e.post("/pub/code/checkValidationMsg", s, r)
                }
            }
        })
    }
    angular.module("commons.services").factory("UserRest", ["RestHelper", e])
}
);
;define("app/support/services/modal", function() {
    angular.module("commons.services").service("modal", [function() {
        return {
            compress: !1,
            createFile: !1,
            createFolder: !1,
            fileproerty: !1,
            shareLink: !1,
            fileLabel: !1,
            fileComment: !1,
            zipDownload: !1,
            personFolderSelector: !1,
            loginBox: !1,
            setPermission: !1
        }
    }
    ])
}
);
;define("app/support/services/DeptTreeUtils", function() {
    function e() {
        function e(d, t, n) {
            if (n) {
                var r = d.getNodeByParam("id", n.deptId);
                if (r)
                    return r;
                var a = null ;
                n.parentId && (a = d.getNodeByParam("id", n.parentId),
                a || (a = e(d, t, _.find(t, {
                    deptId: n.parentId
                }))));
                var p = d.addNodes(a, {
                    id: n.deptId,
                    parentId: n.parentId || 0,
                    name: n.name,
                    open: !1,
                    type: "dept",
                    isParent: !0
                }, !0);
                return p[0]
            }
        }
        function d(d, t) {
            _.each(t, function(n) {
                e(d, t, n)
            }
            )
        }
        return {
            addDeptNode: e,
            addDeptNodes: d
        }
    }
    angular.module("commons.services").factory("DeptTreeUtils", ["$log", e])
}
);
;define("app/support/services/safeApply", function() {
    angular.module("commons.services").factory("safeApply", ["$rootScope", function() {
        return function(p, e) {
            var o = p.$root.$$phase;
            "$apply" == o || "$digest" == o ? e && p.$eval(e) : e ? p.$apply(e) : p.$apply()
        }
    }
    ])
}
);
;define("app/support/services/index", function(require) {
    require("app/support/services/noty"),
    require("app/support/services/cache"),
    require("app/support/services/resturl"),
    require("app/support/services/ErrorType"),
    require("app/support/services/MessageType"),
    require("app/support/services/constants"),
    require("app/support/services/NodeRest"),
    require("app/support/services/toggleCheck"),
    require("app/support/services/RestHelper"),
    require("app/support/services/AdminRest"),
    require("app/support/services/FileRest"),
    require("app/support/services/BuyRest"),
    require("app/support/services/UserRest"),
    require("app/support/services/modal"),
    require("app/support/services/DeptTreeUtils"),
    require("app/support/services/safeApply")
}
);
;define("app/support/filters/type2icon", function() {
    angular.module("commons.filters").filter("type2icon", ["constants", function(e) {
        return function(i) {
            if (!i)
                return "file-unknow";
            var f = i.toLocaleLowerCase();
            return "folder" === i ? "file-folder" : e.isTxtType(f) || e.isHtmlType(f) ? "file-txt" : -1 !== _.indexOf(e.pdfType, f) ? "file-pdf" : -1 !== _.indexOf(e.imgType, f) ? "file-img" : -1 !== _.indexOf(e.mp3Type, f) ? "file-mp3" : -1 !== _.indexOf(e.docType, f) ? "file-doc" : -1 !== _.indexOf(e.excelType, f) ? "file-excel" : -1 !== _.indexOf(e.mp4Type, f) ? "file-mp4" : -1 !== _.indexOf(e.pptType, f) ? "file-ppt" : -1 !== _.indexOf(e.zipType, f) ? "file-zip" : "file-unknow"
        }
    }
    ])
}
);
;define("app/support/filters/name2icon", function() {
    function n(n, e) {
        return function(t) {
            var i = n.getFileSuffix(t);
            return e("type2icon")(i)
        }
    }
    angular.module("commons.filters").filter("name2icon", ["constants", "$filter", n])
}
);
;define("app/support/filters/langFilter", function() {
    angular.module("commons.filters").filter("langFilter", function() {
        return function(e) {
            switch (e = e || "zh_CN") {
            case "zh_TW":
                return "中文繁体";
            case "en_US":
                return "English";
            case "zh_CN":
            default:
                return "中文简体"
            }
        }
    }
    )
}
);
;define("app/support/filters/dateTime", function() {
    function t(t) {
        return function(e, n) {
            return t.dateStrFromMisc(e, n || "YYYY-MM-DD HH:mm")
        }
    }
    angular.module("commons.filters").filter("dateTime", ["constants", t])
}
);
;define("app/support/filters/usericon", function() {
    function n(n) {
        return function(e, t) {
            return e ? _.include(e, "defaultAvatar64woman") || _.include(e, "man.png") ? n.defaultIcon : _.include(e, "defaultAvatar64woman") || _.include(e, "woman.png") ? n.defaultWomenIcon : e == n.defaultIcon && "f" === t ? n.defaultWomenIcon : _.startsWith(e, "res/") ? e : "res/" + e : t && "f" === t ? n.defaultWomenIcon : n.defaultIcon
        }
    }
    angular.module("commons.filters").filter("usericon", ["constants", n])
}
);
;define("app/support/filters/displayName", function() {
    angular.module("commons.filters").filter("displayName", function() {
        return function(e) {
            return e ? e.realName || e.userName : ""
        }
    }
    )
}
);
;define("app/support/filters/displayName2", function() {
    angular.module("commons.filters").filter("displayName2", function() {
        return function(e) {
            return e ? e.realName ? e.userName ? e.realName + "(" + e.userName + ")" : e.realName : e.userName || "" : ""
        }
    }
    )
}
);
;define("app/support/filters/hasoper", function() {
    angular.module("commons.filters").filter("hasoper", function() {
        return function(n, e) {
            return -1 !== _.indexOf(n, e)
        }
    }
    )
}
);
;define("app/support/filters/sizeFilter", function() {
    angular.module("commons.filters").filter("sizeFilter", [function() {
        return function(r) {
            if (!r || "--" === r)
                return "-";
            var e = "B";
            return 0 === r ? 0 : (r >= 1024 && (r /= 1024,
            e = "K"),
            r >= 1024 && (r /= 1024,
            e = "M"),
            r >= 1024 && (r /= 1024,
            e = "G"),
            r >= 1024 && (r /= 1024,
            e = "T"),
            _.numberFormat(r, 1) + e)
        }
    }
    ])
}
);
;define("app/support/filters/uploadStatus", function() {
    angular.module("commons.filters").filter("uploadStatus", ["$translate", function(e) {
        return function(r) {
            switch (r) {
            case "wait":
                return e("msg1204");
            case "uploading":
                return e("msg787");
            case "pause":
                return e("msg781");
            case "success":
                return e("msg779");
            case "error":
                return e("msg1205");
            case "errorNetwork":
                return e("msgNetError");
            case "errorNoSpace":
                return e("msgDiskSizeFull");
            case "errorFolderSpaceOver":
                return e("msgFolderOverflow");
            case "errorFolderDeleted":
                return e("msgFolderDeleted");
            case "sameName":
                return e("msgUploadSameName");
            default:
                return e("msg1205")
            }
        }
    }
    ])
}
);
;define("app/support/filters/percent", function() {
    angular.module("commons.filters").filter("percent", function() {
        return function(n, r) {
            if (!n)
                return 0;
            var e = Math.round(100 * n / r);
            return e >= 100 ? "100%" : 1 > e ? "2%" : e + "%"
        }
    }
    )
}
);
;define("app/support/filters/href", function() {
    angular.module("commons.filters").filter("href", function() {
        return function(n) {
            return n ? "#!/" + n : "#!"
        }
    }
    )
}
);
;define("app/support/filters/gender", function() {
    angular.module("commons.filters").filter("gender", ["$translate", function(n) {
        return function(e) {
            return e = e || "m",
            n("f" === e ? "msg94" : "msg93")
        }
    }
    ])
}
);
;define("app/support/filters/jobTitle", function() {
    angular.module("commons.filters").filter("jobTitle", ["$translate", function(i) {
        return function(n) {
            var e = "";
            return e = n.isAdmin() ? i("msgSuperAdmin") : n.isSecAdmin() ? i("msgAdmin") : "",
            n.jobTitle ? n.jobTitle + (e ? "(" + e + ")" : "") : e
        }
    }
    ])
}
);
;define("app/support/filters/gbSizeFilter", function() {
    angular.module("commons.filters").filter("gbSizeFilter", [function() {
        return function(r) {
            if (!r || "--" === r)
                return "-";
            var e = "B";
            return 0 === r ? 0 : (r >= 1024 && (r /= 1024,
            e = "K"),
            r >= 1024 && (r /= 1024,
            e = "M"),
            r >= 1024 && (r /= 1024,
            e = "G"),
            "G" !== e ? 0 : _.numberFormat(r, 1))
        }
    }
    ])
}
);
;define("app/support/filters/permissionLabel", function() {
    angular.module("commons.filters").filter("permissionLabel", ["$translate", function(e) {
        return function(r) {
            if (!r)
                return "";
            if (r.hasNone())
                return "";
            var s = r.checkAttrs();
            switch (s.length) {
            case 1:
                var n = s[0];
                switch (n) {
                case "read":
                    return e("msg421");
                case "download":
                    return e("msg423");
                case "upload":
                    return e("msg422");
                default:
                    return e("msg427")
                }
            case 2:
                return e(0 === _.difference(s, ["read", "upload"]).length ? "msg424" : 0 === _.difference(s, ["read", "download"]).length ? "msg425" : "msg427");
            case 3:
            case 4:
            case 5:
            case 6:
                return e("msg427");
            case 7:
            default:
                return e("msg426")
            }
        }
    }
    ])
}
);
;define("app/support/filters/operationTag", function() {
    function e() {
        return function(e, r) {
            function t(e) {
                switch (e) {
                case "Upload":
                    return "上传文件";
                case "Download":
                    return "下载";
                case "DeleteToRecycle":
                    return "删除到回收站";
                case "Move":
                    return "移动";
                case "Create":
                    return "新建";
                case "Preview":
                    return "预览";
                case "Rename":
                    return "重命名";
                case "EditFile":
                    return "在线编辑文件";
                case "SetRemark":
                    return "设置备注";
                case "DeleteFromRecycle":
                    return "从回收站删除";
                case "RestoreFromRecycle":
                    return "从回收站恢复";
                case "RestoreVersion":
                    return "恢复版本";
                case "LockFile":
                    return "锁定文件";
                case "UnlockFile":
                    return "解锁文件";
                case "UpdateFileInfo":
                    return "修改";
                case "UpdateFolderPermission":
                    return "修改文件夹权限";
                case "Backup":
                    return "备份";
                case "RenameFolder":
                    return "重命名";
                case "UploadFile":
                    return "上传";
                case "Delete":
                    return "删除"
                }
                return ""
            }
            function n(e) {
                switch (e) {
                case "CreateLink":
                    return "创建外链";
                case "UpdateLink":
                    return "修改外链";
                case "DeleteLink":
                    return "删除外链";
                case "Download":
                    return "下载";
                case "Preview":
                    return "预览";
                case "Visit":
                    return "访问"
                }
                return ""
            }
            function a(e) {
                switch (e) {
                case "Logon":
                    return "登录";
                case "CreateUser":
                    return "新建账号";
                case "UpdateUserPermission":
                    return "修改用户权限";
                case "ChangeUserPwd":
                    return "修改用户登录密码";
                case "UpdateUserInfo":
                    return "修改用户信息";
                case "MoveUser":
                    return "更换部门";
                case "LockUser":
                    return "锁定用户";
                case "UnlockUser":
                    return "解锁用户";
                case "DeleteUser":
                    return "删除用户";
                case "UpdateUserDisk":
                    return "修改个人文件夹设置";
                case "CreateDept":
                    return "新建部门";
                case "RenameDept":
                    return "重命名部门";
                case "DeleteDept":
                    return "删除部门";
                case "UpdateDeptOrder":
                    return "修改部门排序";
                case "UpdateDeptUser":
                    return "设置部门成员"
                }
                return null 
            }
            function s(e) {
                switch (e) {
                case "UpdateEntInfo":
                    return "修改企业信息";
                case "UpdateEntLogo":
                    return "修改企业logo"
                }
                return ""
            }
            function c(e) {
                switch (e) {
                case "CreateRole":
                    return "创建角色";
                case "UpdateRole":
                    return "修改角色";
                case "RenameRole":
                    return "重命名角色";
                case "DeleteRole":
                    return "删除角色";
                case "UpdateRolePermission":
                    return "修改角色权限";
                default:
                    return ""
                }
            }
            function u(e) {
                switch (e) {
                case "CreateAdmin":
                    return "新建管理员";
                case "UpdateAdmin":
                    return "修改管理员";
                case "ChangeAdmin":
                    return "更换管理员";
                case "LockAdmin":
                    return "锁定管理员";
                case "UnlockAdmin":
                    return "解锁管理员";
                case "DeleteAdmin":
                    return "删除管理员";
                default:
                    return ""
                }
            }
            function o(e) {
                switch (e) {
                case "UpdateLdap":
                    return "修改域设置";
                default:
                    return ""
                }
            }
            switch (r) {
            case "EntDisk":
                return t(e);
            case "Link":
                return n(e);
            case "User":
                return a(e);
            case "Enterprise":
                return s(e);
            case "Role":
                return c(e);
            case "Admin":
                return u(e);
            case "Ldap":
                return o(e);
            case "silde":
                return silde(e);
            case "FileVersion":
                return FileVersion(e);
            case "PayStatus":
                return PayStatus(e)
            }
            return log.debug("unknow operation: ", e, ", module: ", r),
            "未知操作"
        }
    }
    angular.module("commons.filters").filter("operationTag", ["$translate", e])
}
);
;define("app/support/filters/specialPath", function() {
    angular.module("commons.filters").filter("specialPath", ["$translate", function(e) {
        return function(r, s) {
            s = s || "sharedisk";
            var i = {
                Share: e("msgShareFolder"),
                share: e("msgShareFolder")
            }
              , t = {
                "My documents": e("msgMyDoc"),
                "My pictures": e("msgMyPic"),
                "Received files": e("msgReceiveFiles"),
                "Send files": e("msgSendFiles"),
                "My device": e("msgMyDevice")
            };
            if (!r || !r.length)
                return "-";
            switch (s) {
            case "sharedisk":
                var n, a;
                return a = _.find(i, function(e, s) {
                    return n = s,
                    r === "/" + s || _.startsWith(r, "/" + s + "/")
                }
                ),
                a && n ? r.replace("/" + n, "/" + a) : r;
            case "onlinedisk":
                var n, a;
                return a = _.find(t, function(e, s) {
                    return n = s,
                    r === "/" + s || _.startsWith(r, "/" + s + "/")
                }
                ),
                a && n ? r.replace("/" + n, "/" + a) : r
            }
        }
    }
    ])
}
);
;define("app/support/filters/specialName", function() {
    angular.module("commons.filters").filter("specialName", ["$translate", function(e) {
        return function(r, i) {
            i = i || "sharedisk";
            var s = {
                Share: e("msgShareFolder"),
                share: e("msgShareFolder")
            }
              , n = {
                "My documents": e("msgMyDoc"),
                "My pictures": e("msgMyPic"),
                "Received files": e("msgReceiveFiles"),
                "Send files": e("msgSendFiles"),
                "My device": e("msgMyDevice")
            };
            if (!r || !r.length)
                return "-";
            switch (i) {
            case "sharedisk":
                var a, c;
                return c = _.find(s, function(e, i) {
                    return a = i,
                    r === i
                }
                ),
                c && a ? r.replace(a, c) : r;
            case "onlinedisk":
                var a, c;
                return c = _.find(n, function(e, i) {
                    return a = i,
                    r === i
                }
                ),
                c && a ? r.replace(a, c) : r
            }
        }
    }
    ])
}
);
;define("app/support/filters/adminName", function() {
    function n(n) {
        return function(e) {
            return e && "Admin" === e ? n("msgSuperAdmin") : e
        }
    }
    angular.module("commons.filters").filter("adminName", ["$translate", n])
}
);
;define("app/support/filters/mailUrl", function() {
    angular.module("commons.filters").filter("mailUrl", [function() {
        return function(t) {
            var c = _.strRightBack(t, "@");
            switch (c) {
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
        }
    }
    ])
}
);
;define("app/support/filters/paystatusTag", function() {
    function r() {
        return function(r) {
            switch (r) {
            case "UNPAY":
                return "未支付";
            case "PAY_OK":
                return "已支付";
            case "PAY_FAIL":
                return "支付失败";
            case "ON_PAY":
                return "验证中";
            case "FREE":
                return "免费"
            }
            return ""
        }
    }
    angular.module("commons.filters").filter("PayStatusTag", [r])
}
);
;define("app/support/filters/permissionType", function() {
    angular.module("commons.filters").filter("permissionType", [function() {
        return function(e) {
            if (!e)
                return "";
            switch (e) {
            case "user":
                return "用户";
            case "department":
                return "部门";
            case "group":
                return "角色";
            case "admin":
                return "管理员"
            }
        }
    }
    ])
}
);
;define("app/support/filters/logoFilter", function() {
    function o() {
        return function(o) {
            return o ? _.startsWith(o, "res/") ? o : "res/" + o : "/wt/assets/img/common/logo.png"
        }
    }
    angular.module("commons.filters").filter("logoFilter", ["constants", o])
}
);
;define("app/support/filters/ratioFilter", function() {
    angular.module("commons.filters").filter("ratioFilter", function() {
        return function(r) {
            return 1 === r ? "无折扣" : 10 * r + "折"
        }
    }
    )
}
);
;define("app/support/filters/uploadErrorText", function() {
    angular.module("commons.filters").filter("uploadErrorText", ["ErrorType", function(r) {
        return function(e) {
            switch (e) {
            case r.errorSameFile:
                return "文件名重复";
            case r.errorNoSpace:
                return "云盘空间不足";
            case r.errorFolderSpaceOver:
                return "文件夹空间不足";
            case r.errorFolderDeleted:
                return "文件夹已被删除";
            case r.errorCheckToken:
            case r.error500:
            default:
                return "网络错误"
            }
        }
    }
    ])
}
);
;define("app/support/filters/byte2mb", function() {
    angular.module("commons.filters").filter("byte2mb", function() {
        return function(n) {
            return 0 === n ? 0 : (n >= 1024 && (n /= 1024),
            n >= 1024 && (n /= 1024),
            n)
        }
    }
    )
}
);
;define("app/support/filters/chatMsgBody", function() {
    function e() {
        return function(e) {
            try {
                switch (e.msgType) {
                case "SFUpload":
                    var r = JSON.parse(e.msgBody);
                    return _.reduce(r.msgList, function(e, r) {
                        return e + "上传文件通知: " + r.name + ". "
                    }
                    , "");
                case "DSFile":
                    var r = JSON.parse(e.msgBody);
                    return _.reduce(r.msgList, function(e, r) {
                        return e + "发送文件: " + r.name + ". "
                    }
                    , "");
                case "Chat":
                    return e.msgBody;
                default:
                    return e.msgBody
                }
            } catch (t) {
                return e.msgBody
            }
        }
    }
    angular.module("commons.filters").filter("chatMsgBody", [e])
}
);
;define("app/support/filters/index", function(require) {
    require("app/support/filters/type2icon"),
    require("app/support/filters/name2icon"),
    require("app/support/filters/langFilter"),
    require("app/support/filters/dateTime"),
    require("app/support/filters/usericon"),
    require("app/support/filters/displayName"),
    require("app/support/filters/displayName2"),
    require("app/support/filters/hasoper"),
    require("app/support/filters/sizeFilter"),
    require("app/support/filters/uploadStatus"),
    require("app/support/filters/percent"),
    require("app/support/filters/href"),
    require("app/support/filters/gender"),
    require("app/support/filters/jobTitle"),
    require("app/support/filters/gbSizeFilter"),
    require("app/support/filters/permissionLabel"),
    require("app/support/filters/operationTag"),
    require("app/support/filters/specialPath"),
    require("app/support/filters/specialName"),
    require("app/support/filters/adminName"),
    require("app/support/filters/mailUrl"),
    require("app/support/filters/paystatusTag"),
    require("app/support/filters/permissionType"),
    require("app/support/filters/logoFilter"),
    require("app/support/filters/ratioFilter"),
    require("app/support/filters/uploadErrorText"),
    require("app/support/filters/byte2mb"),
    require("app/support/filters/chatMsgBody")
}
);
;define("app/support/directives/commons/enterListener", function() {
    angular.module("commons.directives").directive("enterListener", ["$parse", function(e) {
        return function(n, t, r) {
            t.bind("keydown", "return", function(t) {
                n.$apply(function() {
                    e(r.enterListener)(n)
                }
                ),
                t.preventDefault(),
                t.stopPropagation()
            }
            )
        }
    }
    ])
}
);
;define("app/support/directives/commons/jqPlaceHolder", function(require) {
    function e() {
        "use strict";
        return function(e, r, c) {
            r.attr("placeholder", c.jqPlaceholder),
            r.placeholder()
        }
    }
    require("jquery-placeholder"),
    angular.module("commons.directives").directive("jqPlaceholder", ["$parse", e])
}
);
;define("app/support/directives/commons/modalShow", function() {
    function o(o, n) {
        return {
            restrict: "A",
            link: function(o, i, t) {
                function a(o) {
                    i.modal(o ? {
                        keyboard: !0,
                        backdrop: "static"
                    } : "hide")
                }
                var c = n(t.modalShow);
                o.$watch(c, function(o) {
                    a(o)
                }
                ),
                i.bind("hide.bs.modal", function() {
                    c(o) && o.$apply(function() {
                        c.assign(o, !1)
                    }
                    )
                }
                )
            }
        }
    }
    angular.module("commons.directives").directive("modalShow", ["$log", "$parse", o])
}
);
;define("app/support/directives/commons/qyTableWidth", function() {
    function t() {
        "use strict";
        return {
            restrict: "EA",
            replace: !1,
            transclude: !1,
            link: function(t, i) {
                function n() {
                    return c - 207 - (t.slideType ? 271 : 0) - 4
                }
                function e() {
                    return n() - 37 - 80 - 60 - 100 - 150
                }
                {
                    var c = $(window).width();
                    $(window).height()
                }
                i.css({
                    width: e()
                }),
                t.$watch("slideType", function() {
                    i.css({
                        width: e()
                    })
                }
                )
            }
        }
    }
    angular.module("commons.directives").directive("qyTableWidth", ["constants", t])
}
);
;define("app/support/directives/commons/showTab", function() {
    angular.module("commons.directives").directive("showTab", function() {
        return {
            link: function(n, e) {
                e.click(function(n) {
                    n.preventDefault(),
                    $(e).tab("show")
                }
                )
            }
        }
    }
    )
}
);
;define("app/support/directives/commons/qyResize", function() {
    function i(i, e) {
        "use strict";
        return {
            restrict: "EA",
            replace: !1,
            transclude: !1,
            link: function(i, n, o) {
                var t = o.qyResize
                  , r = $(window).width()
                  , c = $(window).height()
                  , w = null ;
                log.debug("resizeType: ", t),
                $(window).resize(function() {
                    var i = function() {
                        var i = $("*[" + t + "]");
                        i.each(function() {
                            e.$emit(t, $(this))
                        }
                        )
                    }
                      , n = $(window).width()
                      , o = $(window).height();
                    (r != n || c != o) && (window.clearTimeout(w),
                    w = window.setTimeout(i, 10)),
                    r = n,
                    c = o
                }
                )
            }
        }
    }
    angular.module("commons.directives").directive("qyResize", ["$window", "$rootScope", i])
}
);
;define("app/support/directives/commons/qyPopover", function() {
    function o(o, n, e) {
        return {
            restrict: "A",
            link: function(t, r) {
                var i = n(r.data("content"))
                  , c = i(t);
                r.data("content", c),
                r.popover().on("shown", function() {
                    var n = r.siblings(".popover");
                    o.debug("$popover: ", n),
                    e(n.contents())(t)
                }
                )
            }
        }
    }
    angular.module("commons.directives").directive("qyPopover", ["$log", "$parse", "$compile", o])
}
);
;define("app/support/directives/commons/datetimepicker", function() {
    angular.module("commons.directives").directive("datetimepicker", [function() {
        return function(e, t) {
            t.datetimepicker({
                autoclose: !0,
                pickerPosition: "bottom-left"
            }).on("hide", function(e) {
                return e.preventDefault(),
                e.stopPropagation(),
                !1
            }
            )
        }
    }
    ])
}
);
;define("app/support/directives/commons/qyFocus", function() {
    function c() {
        return {
            restrict: "A",
            link: function(c, i) {
                i.focus()
            }
        }
    }
    angular.module("commons.directives").directive("qyFocus", [c])
}
);
;define("app/support/directives/commons/searchBox", function() {
    function e() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !1,
            template: '<div class="input-append input-prepend search-box">\r\n    <span class="add-on" ng-click="cancelSearch()" ng-show="searchKey">\r\n        <i class="fa fa-chevron-left"></i>\r\n    </span>\r\n    <input class="keyword"\r\n           type="text"\r\n           jq-placeholder="{{placeholder}}"\r\n           ng-model="searchKey"\r\n           enter-listener="onSearch()">\r\n    <span class="add-on" ng-click="onSearch()">\r\n        <i class="icon-custom-search-blue"></i>\r\n    </span>\r\n</div>',
            scope: {
                placeholder: "@",
                search: "&",
                cancel: "&"
            },
            controller: ["$scope", function(e) {
                e.searchKey = "",
                e.onSearch = function() {
                    e.searchKey ? e.search && e.search({
                        searchKey: e.searchKey
                    }) : e.cancel && e.cancel()
                }
                ,
                e.cancelSearch = function() {
                    e.searchKey = "",
                    e.cancel && e.cancel()
                }
            }
            ],
            link: function() {}
        }
    }
    angular.module("commons.directives").directive("searchBox", [e])
}
);
;define("app/support/directives/commons/qyPager", function() {
    angular.module("commons.directives").directive("qyPager", ["$parse", "$attrs", function() {
        return {
            restrict: "A",
            replace: !1,
            transclude: !1,
            link: function() {
                var e = attrs.qyPager;
                log.debug("pager: ", e)
            }
        }
    }
    ])
}
);
;define("app/support/directives/file/EntFolderTree", function(require) {
    function e(e, t, r, i) {
        function l(e, l) {
            function o() {
                var n = h.getCheckedNodes(!0) || [];
                return _.map(n, function(n) {
                    return _.find(e.entFolders, {
                        fileId: n.id
                    })
                }
                )
            }
            function d(e, n) {
                var r = _.map(e, function(e) {
                    return {
                        id: e.fileId,
                        fileId: e.fileId,
                        parentId: e.parentId || 0,
                        name: t("specialName")(e.name, e.fileType),
                        open: !1,
                        isParent: !0,
                        iconSkin: "folder"
                    }
                }
                );
                h.addNodes(n, r)
            }
            function c(n) {
                l.find("ul.ztree").attr("id", r.getRandomStr());
                return $.fn.zTree.init(l.find("ul.ztree"), {
                    view: {
                        dblClickExpand: !0,
                        showLine: !1,
                        selectedMulti: !1
                    },
                    check: {
                        enable: !!n.showCheckBox,
                        chkboxType: n.chkboxType
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
                        beforeClick: function(n, t) {
                            if (t && !e.settings.showCheckBox) {
                                var r = _.find(e.entFolders, function(e) {
                                    return e.fileId == t.id
                                }
                                );
                                s(r)
                            }
                            return t ? t.open ? (h.expandNode(t, !1),
                            !1) : (h.expandNode(t, !0, !1, !0, !0),
                            !0) : !1
                        },
                        beforeExpand: function(e, n) {
                            f(n.id)
                        },
                        onCheck: function() {
                            a()
                        }
                    }
                }, [])
            }
            function a() {
                e.onselect && e.$apply(function() {
                    var n = o();
                    e.onselect({
                        selectFolders: n
                    })
                }
                )
            }
            function s(n) {
                e.onselect && e.$apply(function() {
                    e.onselect({
                        selectFolder: n
                    })
                }
                )
            }
            function f(n) {
                if (n) {
                    var t = _.find(e.entFolders, {
                        parentId: n
                    });
                    if (t)
                        return
                }
                var r = function(t) {
                    e.entFolders = e.entFolders.concat(t || []),
                    d(t, n ? h.getNodeByParam("id", n) : null )
                }
                ;
                p.showManageFolder ? i.fetchAdminFolders(n).then(r) : i.fetchFolder(n).then(r)
            }
            function u() {
                return _.defaults(e.settings || {}, {
                    showManageFolder: !0,
                    showCheckBox: !0,
                    showPath: !0,
                    chkboxType: {
                        Y: "",
                        N: ""
                    }
                })
            }
            e.directiveName = n,
            e.entFolders = [];
            var p = u()
              , h = c(p);
            f(null ),
            e.$parent.$on("uncheckAll", function() {
                h.checkAllNodes(!1)
            }
            )
        }
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            require: ["^?onselect"],
            template: '<div class="ent-folder-selector">\r\n    <div class="row-fluid first hide-force">\r\n        <div class="input-append" style="margin: 10px ">\r\n            <input class="input-xlarge bold" type="text"\r\n                   jq-placeholder="{{\'msgSearchAllFile\'|translate}}"\r\n                   ng-model="searchKey"\r\n                   enter-listener="search()">\r\n            <span class="add-on" ng-click="search()"><i class="icon-custom-search-blue"></i></span>\r\n        </div>\r\n    </div>\r\n    <div class="row-fluid">\r\n        <ul id="ent-folder-selector" class="ztree qyc-tree folder-tree" ng-transclude></ul>\r\n    </div>\r\n</div>',
            scope: {
                settings: "=",
                onselect: "&"
            },
            link: l
        }
    }
    var n = "EntFolderTree::";
    require("jquery-ztree"),
    angular.module("commons.directives").directive("entFolderTree", ["$log", "$filter", "constants", "EntFileLoader", e])
}
);
;define("app/support/directives/file/PersonFolderTree", function(require) {
    function e(e, r, t, o) {
        function i(e, i) {
            function l() {
                var n = h.getCheckedNodes(!0);
                return n && n.length ? _.map(n, function(n) {
                    return _.find(e.personFolders, {
                        fileId: n.id
                    })
                }
                ) : []
            }
            function d(e, n) {
                var t = _.map(e, function(e) {
                    return {
                        id: e.fileId,
                        fileId: e.fileId,
                        parentId: e.parentId || 0,
                        name: r("specialName")(e.name, e.fileType),
                        open: !1,
                        isParent: !0,
                        iconSkin: "folder"
                    }
                }
                );
                h.addNodes(n, t)
            }
            function c(n) {
                i.find("ul.ztree").attr("id", t.getRandomStr());
                return $.fn.zTree.init(i.find("ul.ztree"), {
                    view: {
                        dblClickExpand: !0,
                        showLine: !1,
                        selectedMulti: !1
                    },
                    check: {
                        enable: !!n.showCheckBox,
                        chkboxType: n.chkboxType
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
                        beforeClick: function(n, r) {
                            if (r && !e.settings.showCheckBox) {
                                var t = _.find(e.personFolders, function(e) {
                                    return e.fileId == r.id
                                }
                                );
                                a(t)
                            }
                            return r ? r.open ? (h.expandNode(r, !1),
                            !1) : (h.expandNode(r, !0, !1, !0, !0),
                            !0) : !1
                        },
                        beforeExpand: function(e, n) {
                            u(n.id)
                        },
                        onCheck: function() {
                            s()
                        }
                    }
                }, [])
            }
            function s() {
                e.onselect && e.$apply(function() {
                    e.onselect({
                        selectFolders: l()
                    })
                }
                )
            }
            function a(n) {
                e.onselect && e.$apply(function() {
                    e.onselect({
                        selectFolder: n
                    })
                }
                )
            }
            function u(n) {
                if (n) {
                    var r = _.find(e.personFolders, {
                        parentId: n
                    });
                    if (r)
                        return
                }
                var t = function(r) {
                    e.personFolders = e.personFolders.concat(r || []),
                    d(r, n ? h.getNodeByParam("id", n) : null )
                }
                ;
                o.fetchFolder(n).then(t)
            }
            function f() {
                return _.defaults(e.settings || {}, {
                    showManageFolder: !0,
                    showCheckBox: !0,
                    showPath: !0,
                    chkboxType: {
                        Y: "",
                        N: ""
                    }
                })
            }
            e.directiveName = n,
            e.personFolders = [];
            var p = f()
              , h = c(p);
            u(null ),
            e.$parent.$on("uncheckAll", function() {
                h.checkAllNodes(!1)
            }
            )
        }
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            require: ["^?onselect"],
            template: '<div class="ent-folder-selector">\r\n    <div class="row-fluid first hide-force">\r\n        <div class="input-append" style="margin: 10px ">\r\n            <input class="input-xlarge bold" type="text"\r\n                   jq-placeholder="{{\'msgSearchAllFile\'|translate}}"\r\n                   ng-model="searchKey"\r\n                   enter-listener="search()">\r\n            <span class="add-on" ng-click="search()"><i class="icon-custom-search-blue"></i></span>\r\n        </div>\r\n    </div>\r\n    <div class="row-fluid">\r\n        <ul id="ent-folder-selector" class="ztree qyc-tree folder-tree" ng-transclude></ul>\r\n    </div>\r\n</div>',
            scope: {
                settings: "=",
                onselect: "&"
            },
            link: i
        }
    }
    var n = "PersonFolderTree: ";
    require("jquery-ztree"),
    angular.module("commons.directives").directive("personFolderTree", ["$log", "$filter", "constants", "PersonFileLoader", e])
}
);
;define("app/support/directives/file/fileOperation", function() {
    function e(e, n) {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !1,
            link: function(t, i) {
                function r() {
                    e.debug("_getViewOperations:");
                    var n = [];
                    if (t.checkedFiles) {
                        var i = t.checkedFiles.length;
                        1 === i ? n = t.checkedFiles[0].getOperations() : i > 1 && ("sharedisk" === t.currentFolder.fileType ? n = c() : "onlinedisk" === t.currentFolder.fileType && (n = a()))
                    }
                    t.operations = n;
                    var r = _.without(n, "upload", "create", "permission", "sync");
                    return o(r),
                    n
                }
                function o(e) {
                    if (!(e.length <= 4)) {
                        var t = _.intersection(e, ["download", "share", "unshare", "attention", "unattention"])
                          , r = _.difference(e, t);
                        t.length < 3 && r.splice(0, 3 - t.length);
                        var o = ""
                          , a = _.reduce(r, function(e, t) {
                            return o = n.OperateBtnMap[t],
                            e.length ? e + ", ." + o : "." + o
                        }
                        , "");
                        i.find(a).appendTo(i.find(".more-dropdown-menu")).removeClass("btn-clear").addClass("btn-link")
                    }
                }
                function a() {
                    var e = ["download"]
                      , n = _.some(t.checkedFiles, function(e) {
                        return e.sysFolder
                    }
                    );
                    return !n && e.push("delete", "move", "copyto"),
                    e
                }
                function c() {
                    var e = 0
                      , n = ["download", "copy", "delete", "move", "attention", "unattention"];
                    return _.each(t.checkedFiles, function(t) {
                        t.remind && e++,
                        n = _.intersection(t.getMultiFilesOperations(), n)
                    }
                    ),
                    _.indexOf(n, "attention") > -1 && webhelper.without(n, e === length ? ["unattention"] : ["attention"]),
                    n
                }
                t.directiveName = "fileOperation",
                t.$watch("checkedFiles", r, !0)
            }
        }
    }
    angular.module("commons.directives").directive("fileOperation", ["$log", "constants", e])
}
);
;define("app/support/directives/file/PermissionSelector", function(require) {
    function s() {
        function s(s) {
            s.directiveName = r
        }
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            require: ["^?onselect"],
            template: "<div class=\"permission-selector\">\r\n    <div class=\"shortcuts fl\">\r\n        <div class=\"permission-types ac\"><strong>{{'msg420'|translate}}</strong></div>\r\n        <ul class=\"shortcut-items\">\r\n            <li ng-class=\"permission.mode == 'read' && 'active'\" ng-click=\"permission.changeMode('read')\">\r\n                <a>{{'msg421'|translate}}</a><span class=\"blue-right-arrow-8\"></span></li>\r\n            <li ng-class=\"permission.mode == 'upload' && 'active'\" ng-click=\"permission.changeMode('upload')\">\r\n                <a>{{'msg422'|translate}}</a><span class=\"blue-right-arrow-8\"></span></li>\r\n            <li ng-class=\"permission.mode == 'download' && 'active'\" ng-click=\"permission.changeMode('download')\">\r\n                <a>{{'msg423'|translate}}</a><span class=\"blue-right-arrow-8\"></span></li>\r\n            <li ng-class=\"permission.mode == 'read,upload' && 'active'\" ng-click=\"permission.changeMode('read,upload')\">\r\n                <a>{{'msg424'|translate}}</a><span class=\"blue-right-arrow-8\"></span></li>\r\n            <li ng-class=\"permission.mode == 'read,download' && 'active'\" ng-click=\"permission.changeMode('read,download')\">\r\n                <a>{{'msg425'|translate}}</a><span class=\"blue-right-arrow-8\"></span></li>\r\n            <li ng-class=\"permission.mode == 'all' && 'active'\" ng-click=\"permission.changeMode('all')\">\r\n                <a>{{'msg426'|translate}}</a><span class=\"blue-right-arrow-8\"></span></li>\r\n            <li ng-class=\"permission.mode == 'user' && 'active'\" ng-click=\"permission.changeMode('user')\">\r\n                <a>{{'msg427'|translate}}</a><span class=\"blue-right-arrow-8\"></span></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"permission-list\">\r\n        <div class=\"title-list ac\"><strong>{{'msg428'|translate}}</strong></div>\r\n        <div class=\"permission-checks\">\r\n            <ul>\r\n                <li class=\"createFolder-check\" ng-click=\" permission.toggle('createFolder')\">\r\n                    <span class='checkbox-sprite' name=\"createFolder\"\r\n                          ng-class=\"{'true':permission.createFolder,'cursor-default':permission.mode != 'user'}\"></span>{{'msg585'|translate}}\r\n                </li>\r\n                <li class=\"read-check\" ng-click=\" permission.toggle('read')\">\r\n                    <span class='checkbox-sprite'\r\n                          ng-class=\"{'true': permission.read, 'cursor-default': permission.mode != 'user'}\"></span>\r\n                    {{'msg260'|translate}}\r\n                </li>\r\n                <li class=\"upload-check\" ng-click=\" permission.toggle('upload')\">\r\n                    <span class='checkbox-sprite'\r\n                          ng-class=\"{'true': permission.upload, 'cursor-default': permission.mode != 'user' }\"></span>\r\n                    {{'msg258'|translate}}\r\n                </li>\r\n                <li class=\"download-check\" ng-click=\" permission.toggle('download')\">\r\n                    <span class='checkbox-sprite'\r\n                          ng-class=\"{'true': permission.download, 'cursor-default': permission.mode != 'user' }\"></span>\r\n                    {{'msg259'|translate}}\r\n                </li>\r\n                <li class=\"share-check\" ng-click=\" permission.toggle('share')\">\r\n                    <span class='checkbox-sprite'\r\n                          ng-class=\"{'true': permission.share, 'cursor-default': permission.mode != 'user' }\"></span>\r\n                    {{'msg262'|translate}}\r\n                </li>\r\n                <br/>\r\n\r\n                <li class=\"write-check\" ng-click=\" permission.toggle('write')\" style=\"min-width:88px\">\r\n                    <span class='checkbox-sprite'\r\n                          ng-class=\"{'true': permission.write, 'cursor-default': permission.mode != 'user' }\"></span>\r\n                    {{'msg264'|translate}}\r\n                </li>\r\n                <li class=\"delete-check\" ng-click=\" permission.toggle('delete')\">\r\n                    <span class='checkbox-sprite'\r\n                          ng-class=\"{'true': permission['delete'], 'cursor-default': permission.mode != 'user' }\"></span>\r\n                    {{'msg156'|translate}}\r\n                </li>\r\n                <li class=\"local-check\" ng-click=\" permission.toggle('local')\">\r\n                    <span class='checkbox-sprite'\r\n                          ng-class=\"{'true': permission.local, 'cursor-default': permission.mode != 'user' }\"></span>\r\n                    {{'msg435'|translate}}\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"permission-intros\">\r\n            <ul class=\"permission-item\" ng-show=\"permission.createFolder\">\r\n                <li class=\"title\">新建文件夹</li>\r\n                <li class=\"intro\">可以新建文件夹</li>\r\n            </ul>\r\n            <ul class=\"permission-item\" ng-show=\"permission.read\">\r\n                <li class=\"title\">{{'msg260'|translate}}</li>\r\n                <li class=\"intro\">{{'msg439'|translate}}</li>\r\n            </ul>\r\n            <ul class=\"permission-item\" ng-show=\"permission.upload\">\r\n                <li class=\"title\">{{'msg258'|translate}}</li>\r\n                <li class=\"intro\">{{'msg441'|translate}}</li>\r\n            </ul>\r\n            <ul class=\"permission-item\" ng-show=\"permission.download\">\r\n                <li class=\"title\">{{'msg259'|translate}}</li>\r\n                <li class=\"intro\">{{'msg443'|translate}}</li>\r\n            </ul>\r\n            <ul class=\"permission-item\" ng-show=\"permission.share\">\r\n                <li class=\"title\">{{'msg262'|translate}}</li>\r\n                <li class=\"intro\">{{'msg445'|translate}}\\{{'msg446'|translate}}\\{{'msg447'|translate}}</li>\r\n            </ul>\r\n            <ul class=\"permission-item\" ng-show=\"permission.write\">\r\n                <li class=\"title\">{{'msg264'|translate}}</li>\r\n                <li class=\"intro\">{{'msg449'|translate}}</li>\r\n            </ul>\r\n            <ul class=\"permission-item\" ng-show=\"permission['delete']\">\r\n                <li class=\"title\">{{'msg156'|translate}}</li>\r\n                <li class=\"intro\">{{'msg451'|translate}}</li>\r\n            </ul>\r\n            <ul class=\"permission-item\" ng-show=\"permission.local\">\r\n                <li class=\"title\">{{'msg435'|translate}}</li>\r\n                <li class=\"intro\">PC{{'msg453'|translate}}</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>",
            scope: {
                permission: "=permission"
            },
            link: s
        }
    }
    var r = "PermissionSelector: ";
    require("jquery-ztree"),
    angular.module("commons.directives").directive("permissionSelector", ["$log", "constants", s])
}
);
;define("app/support/directives/file/qyUploader", function() {
    function e(e) {
        return {
            restrict: "EA",
            replace: !1,
            transclude: !1,
            scope: {
                settings: "=",
                uploadloaded: "&",
                dialogstart: "&",
                queued: "&",
                queueerror: "&",
                dialogcomplete: "&",
                start: "&",
                uploadprogress: "&",
                complete: "&",
                success: "&",
                error: "&"
            },
            link: function(o, n) {
                function l(l) {
                    var u = {
                        swfuploadLoaded: function(e) {
                            o.uploadloaded && o.$apply(function() {
                                o.uploadloaded({
                                    event: e,
                                    swfupload: l
                                })
                            }
                            )
                        },
                        fileDialogStart: function(e) {
                            o.dialogstart && o.$apply(function() {
                                o.dialogstart({
                                    event: e
                                })
                            }
                            )
                        },
                        fileQueued: function(e, t) {
                            o.queued && o.$apply(function() {
                                o.queued({
                                    event: e,
                                    file: t,
                                    swfupload: l
                                })
                            }
                            )
                        },
                        fileQueueError: function(t, n, l, u) {
                            e.error("File queue error", u, ", errorCode: ", l),
                            o.queueerror && o.$apply(function() {
                                o.queueerror({
                                    event: t,
                                    file: n,
                                    code: l
                                })
                            }
                            )
                        },
                        fileDialogComplete: function(e, t, n) {
                            o.dialogcomplete && o.$apply(function() {
                                o.dialogcomplete({
                                    event: e,
                                    selectedNum: t,
                                    queuedNum: n
                                })
                            }
                            )
                        },
                        uploadStart: function(e, t) {
                            o.start && o.$apply(function() {
                                o.start({
                                    event: e,
                                    file: t,
                                    swfupload: l
                                })
                            }
                            )
                        },
                        uploadProgress: function(e, t, n) {
                            o.uploadprogress && o.$apply(function() {
                                o.uploadprogress({
                                    event: e,
                                    file: t,
                                    complete: n
                                })
                            }
                            )
                        },
                        uploadSuccess: function(e, t, n) {
                            o.success && o.$apply(function() {
                                o.success({
                                    event: e,
                                    file: t,
                                    result: n
                                })
                            }
                            )
                        },
                        uploadComplete: function(e, t) {
                            o.complete && o.$apply(function() {
                                o.complete({
                                    event: e,
                                    file: t
                                })
                            }
                            )
                        },
                        uploadError: function(n, l, u, r) {
                            e.warn(t, "uploadError> file: ", l, ", errorCode: ", u, ",message: ", r),
                            o.error && o.$apply(function() {
                                o.error({
                                    event: n,
                                    file: l,
                                    code: u
                                })
                            }
                            )
                        }
                    };
                    $.each(u, function(e, t) {
                        n.bind(e, t)
                    }
                    )
                }
                function u(e) {
                    return n.swfupload({
                        upload_url: e.uploadUrl,
                        use_query_string: !1,
                        file_post_name: "file",
                        file_types: e.fileTypes,
                        file_types_description: "All Files",
                        file_size_limit: "500 MB",
                        flash_url: "/wt/sea-modules/swf/swfupload/swfupload.swf",
                        button_image_url: e.btnImg,
                        button_width: e.btnWith,
                        button_height: e.btnHeight,
                        button_placeholder: n.find(e.placeholder)[0],
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
                    n.data("__swfu")
                }
                function r(e) {
                    return _.defaults(e, {
                        placeholder: null ,
                        btnImg: "",
                        btnWith: 65,
                        btnHeight: 27,
                        btnText: "",
                        btnTextStyle: "",
                        fileTypes: "*.*"
                    })
                }
                var i = r(o.settings);
                e.debug("settings: ", i);
                var a = u(i);
                l(a)
            }
        }
    }
    var t = "directives/uploader => ";
    angular.module("commons.directives").directive("qyUploader", ["$log", "$rootScope", "constants", e])
}
);
;define("app/support/directives/file/qyViewfile", function() {
    function e(e, i, t) {
        "use strict";
        return {
            restrict: "EA",
            replace: !1,
            transclude: !1,
            link: function(n, r, c) {
                function l() {
                    c.$set("ngClick", void 0),
                    r.unbind("click"),
                    r.attr("target", "_blank"),
                    r.attr("href", t.getItemPreviewUrl(s))
                }
                var s = e(c.qyViewfile)(n);
                if ("folder" !== s.type) {
                    if (webhelper.isIE8()) {
                        if ("pdf" === s.getViewType())
                            return !1
                    } else if (s.isNeedConvert() && !s.hasConvDone())
                        return r.click(function() {
                            s.viewFile().then(function() {
                                noty.success(i("msgFileDealComplete"))
                            }
                            ).fail(function() {
                                noty.success(i("msgFileDealing"))
                            }
                            )
                        }
                        ),
                        !1;
                    l()
                }
            }
        }
    }
    angular.module("commons.directives").directive("qyViewfile", ["$parse", "$translate", "constants", e])
}
);
;define("app/support/directives/file/webUploader", function() {
    function e(e, r, n) {
        return {
            restrict: "EA",
            replace: !1,
            transclude: !1,
            scope: {
                settings: "=",
                uploadhook: "&",
                queued: "&",
                beforesend: "&",
                start: "&",
                uploadprogress: "&",
                complete: "&",
                success: "&",
                uploaderror: "&",
                error: "&"
            },
            link: function(r) {
                function l() {
                    webhelper.isIE8() ? s.removeClass("placeholder") : s.on("dragenter dragover", function() {
                        s.addClass("placeholder-hover")
                    }
                    ).on("dragleave drop", function() {
                        s.removeClass("placeholder-hover")
                    }
                    )
                }
                function a(e) {
                    return _.defaults(e, {
                        auto: !0,
                        swf: "/wt/sea-modules/jquery/plugins/webuploader/Uploader.swf",
                        pick: {
                            id: "#filePicker",
                            label: "添加文件"
                        },
                        fileNumLimit: 200,
                        fileSingleSizeLimit: 1073741824,
                        server: "/upload/single"
                    })
                }
                var u = a(r.settings)
                  , s = u.dnd && $(u.dnd);
                r.uploadhook && WebUploader.Uploader.register({
                    "before-send-file": "preupload"
                }, {
                    preupload: r.uploadhook()
                });
                var d = WebUploader.create(u);
                r.$parent.uploader = d;
                var p = {
                    beforeFileQueued: function(n) {
                        return e.info(o, "beforeFileQueued: ", n),
                        r.queued && r.$apply(function() {
                            r.queued({
                                file: n
                            })
                        }
                        ),
                        !0
                    },
                    uploadBeforeSend: function(n, l, a) {
                        e.info(o, "uploadBeforeSend: object: ", n, ", body: ", l, ", headers: ", a),
                        r.beforesend && r.$apply(function() {
                            r.beforesend({
                                object: n,
                                body: l,
                                headers: a
                            })
                        }
                        )
                    },
                    uploadProgress: function(n, l) {
                        e.info(o, " uploadProgress: file: ", n.name, ", percent: ", l),
                        r.uploadprogress && r.$apply(function() {
                            r.uploadprogress({
                                file: n,
                                percent: l
                            })
                        }
                        )
                    },
                    uploadError: function(n, l) {
                        e.warn(o, "uploadError: file: ", n.name, ", reason: ", l),
                        r.uploaderror && r.$apply(function() {
                            r.uploaderror({
                                file: n,
                                reason: l
                            })
                        }
                        )
                    },
                    uploadSuccess: function(e, l) {
                        log.info(o, "uploadSuccess: ", e, ", response: ", l),
                        d.removeFile(e),
                        r.success && n(r, function() {
                            r.success({
                                file: e,
                                jsonres: l
                            })
                        }
                        )
                    },
                    error: function(e) {
                        log.warn(o, "error: ", e),
                        r.error && r.$apply(function() {
                            r.error({
                                type: e
                            })
                        }
                        )
                    }
                };
                _.each(p, function(e, o) {
                    d.on(o, e)
                }
                ),
                s && l()
            }
        }
    }
    var o = "webUploader::";
    angular.module("commons.directives").directive("webUploader", ["$log", "constants", "safeApply", e])
}
);
;define("app/support/directives/file/downloadFile", function() {
    function n(n, e, o, s, d) {
        "use strict";
        return {
            restrict: "EA",
            replace: !1,
            transclude: !1,
            link: function(e, o) {
                function r() {
                    log.debug(a, "downloadZip"),
                    d.zipDownload = !0,
                    o.append(n('<div class="modal fade zip-download"\r\n     modal-show="modal.zipDownload">\r\n    <div class="modal-header">\r\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n        <h3>{{\'msg534\'| translate}}</h3>\r\n    </div>\r\n    <div class="modal-body">\r\n        <div class="download-tips">\r\n            <img class="loading-img"\r\n                 ng-show="downloadBean.status === \'zipping\'"\r\n                 src="/wt/assets/img/common/loading.gif" width="31" height="31"/>\r\n            <strong ng-show="downloadBean.status === \'zipping\'">\r\n                {{\'msg535\'| translate}}, {{\'msg536\'|translate}}!\r\n            </strong>\r\n            <strong ng-show="downloadBean.status === \'success\'">\r\n                {{\'msgCompressComplete\'|translate}}\r\n            </strong>\r\n            <strong ng-show="downloadBean.status === \'error\'" class="font-red">\r\n                {{downloadBean.error}}\r\n            </strong>\r\n        </div>\r\n    </div>\r\n    <div class="modal-footer">\r\n        <a class="btn btn-blue"\r\n           target="_blank"\r\n           ng-show="downloadBean.status === \'success\'"\r\n           ng-href="{{downloadBean.downloadUrl || \'#!\'}}">\r\n            {{\'msg259\'| translate}}</a>\r\n        <a href="#" class="btn btn-white-blue" data-dismiss="modal">{{\'msg539\'| translate}}</a>\r\n    </div>\r\n</div>')(e))
                }
                function l() {
                    $("#downloadFrame").remove();
                    var n = {
                        fileId: e.file.fileId,
                        fileType: e.file.fileType
                    };
                    e.file.linkId && (n.linkId = e.file.linkId);
                    var o = s.execDownloadFile + "?" + $.param(n);
                    log.debug(a, "downloadSingle: ", o),
                    $("body").append("<iframe id='downloadFrame' style='width:1px;height:1px;' src='" + o + "'></iframe>")
                }
                o.click(function() {
                    log.debug("scope: ", e);
                    var n = e.checkedFiles;
                    switch (log.debug("checkFiles: ", n),
                    n.length) {
                    case 0:
                        throw new Error("You must select files to download!");
                    case 1:
                        var a = n[0];
                        a.isFolder ? r() : l();
                        break;
                    case 2:
                        r()
                    }
                }
                )
            }
        }
    }
    var a = "downloadFile::";
    angular.module("commons.directives").directive("downloadFile", ["$compile", "$parse", "constants", "resturl", "modal", n])
}
);
;define("app/support/directives/file/personFolderSelector", function(require) {
    function e() {
        function e() {}
        return {
            restrict: "EA",
            replace: !0,
            transclude: !1,
            template: '<div class="modal fade person-folder-selector"\r\n     modal-show="toggleby">\r\n    <div class="modal-header">\r\n        <button class="close" data-dismiss="modal">&times;</button>\r\n        <h3>{{modalTitle}}</h3>\r\n    </div>\r\n    <div class="modal-body">\r\n        <div class="row-fluid"\r\n             ng-if="toggleby"\r\n             person-folder-tree\r\n             settings="{\'showManageFolder\': false,\'showCheckBox\':false}"\r\n             onselect="onSelectFolder(selectFolder)">\r\n        </div>\r\n    </div>\r\n    <div class="modal-footer">\r\n        <button class="btn btn-blue" ng-click="confirmSelect()">确定</button>\r\n        <button class="btn btn-white-blue" data-dismiss="modal">取消</button>\r\n    </div>\r\n</div>',
            scope: {
                modalTitle: "@",
                toggleby: "=",
                onselect: "&"
            },
            controller: ["$scope", function(e) {
                e.ctrlName = o,
                e.onSelectFolder = function(o) {
                    e.selectFolder = o
                }
                ,
                e.confirmSelect = function() {
                    e.selectFolder && e.onselect && e.onselect({
                        selectFolder: e.selectFolder
                    }),
                    e.toggleby = !1
                }
            }
            ],
            link: e
        }
    }
    var o = "PersonFolderSelector: ";
    require("jquery-ztree"),
    angular.module("commons.directives").directive("personFolderSelector", ["$log", "constants", e])
}
);
;define("app/support/directives/user/DeptTree", function(require) {
    function e(e, n, r, s, i) {
        function c(e, c) {
            function d() {
                s.fetchManageDepts().then(function(t) {
                    e.deptList = t,
                    i.addDeptNodes(p, e.deptList)
                }
                )
            }
            function a() {
                c.find("ul.ztree").attr("id", r.getRandomStr());
                var t = $.fn.zTree.init(c.find("ul.ztree"), {
                    view: {
                        dblClickExpand: !1,
                        showLine: !1,
                        selectedMulti: !1
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
                            return e.doSelectDept(n.id),
                            !0
                        },
                        onClick: function(e, n, r) {
                            return $(e.target).attr("id") && $(e.target).attr("id").indexOf("_span") > 0 && t.expandNode(r),
                            !1
                        }
                    }
                }, []);
                return t
            }
            function l() {
                return _.defaults(e.settings || {}, {
                    showDeptSettingBtn: !1,
                    hideUngroup: !1
                })
            }
            e.directiveName = t,
            e.mode = "normal",
            e.deptList = [],
            e.searchList = [],
            e.searchKey = "",
            e.selectDept = void 0;
            var o = l()
              , p = a(o);
            d(),
            n.$on("create-dept", function() {
                p = a(o),
                d()
            }
            ),
            e.search = function() {
                e.searchKey.length > 0 ? (e.mode = "search",
                e.searchList = _.filter(e.deptList, function(t) {
                    return t.name.toLowerCase().indexOf(e.searchKey.toLowerCase()) > -1
                }
                )) : (e.mode = "normal",
                e.searchList = [])
            }
            ,
            e.doSelectDept = function(t) {
                e.select && (e.selectDept = _.find(e.deptList, {
                    deptId: t
                }),
                e.select({
                    dept: e.selectDept
                }))
            }
        }
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            require: ["?^select"],
            template: '<div class="dept-selector">\r\n    <div class="row-fluid first" ng-show="setting.showSearch">\r\n        <div class="input-append">\r\n            <input class="input-xlarge bold" type="text"\r\n                   jq-placeholder="{{\'msgSearchAllFile\'|translate}}"\r\n                   ng-model="searchKey"\r\n                   enter-listener="search()">\r\n            <span class="add-on" ng-click="search()"><i class="icon-custom-search-blue"></i></span>\r\n        </div>\r\n    </div>\r\n    <div class="row-fluid" ng-show="mode === \'normal\'">\r\n        <ul class="ztree qyc-tree dept-tree" ng-transclude></ul>\r\n    </div>\r\n    <ul ng-show="mode === \'search\'" class="search-list">\r\n        <li ng-show="searchList.length === 0">\r\n            没有搜索到匹配的部门\r\n        </li>\r\n        <li ng-repeat="dept in searchList" ng-click="doSelectDept(dept.deptId)"\r\n            ng-class="!!selectDept && dept.deptId === selectDept.deptId && \'active\'">\r\n            {{dept.name}}\r\n        </li>\r\n    </ul>\r\n</div>',
            scope: {
                settings: "=",
                select: "&"
            },
            link: c
        }
    }
    var t = "DeptTree: ";
    require("jquery-ztree"),
    angular.module("commons.directives").directive("deptTree", ["$log", "$rootScope", "constants", "DeptLoader", "DeptTreeUtils", e])
}
);
;define("app/support/directives/user/DeptUserTree", function(require) {
    function e(e, n, r, s, i, d) {
        function c(e, c) {
            function a() {
                s.fetchManageDepts().then(function(t) {
                    e.deptList = t,
                    d.addDeptNodes(m, e.deptList)
                }
                )
            }
            function o(e, t) {
                var r = _.map(e, function(e) {
                    return {
                        id: e.userId,
                        parentId: e.deptId || 0,
                        name: n("displayName")(e),
                        open: !1,
                        type: "user",
                        isParent: !1,
                        iconSkin: "user_avatar"
                    }
                }
                );
                m.addNodes(t, r, !0)
            }
            function u(e) {
                c.find("ul.ztree").attr("id", r.getRandomStr());
                var t = $.fn.zTree.init(c.find("ul.ztree"), {
                    view: {
                        dblClickExpand: !1,
                        showLine: !1,
                        selectedMulti: !1,
                        addDiyDom: function(e, t) {
                            v(t)
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
                        onClick: function(n, r, s) {
                            return s ? (s.isParent ? t.expandNode(s, !0, !1, !0, !0) : "user" === s.type && !e.dblclick && p(s.id),
                            !1) : !1
                        },
                        onDblClick: function(t, n, r) {
                            return r ? void ("user" === r.type ? e.dblclick && p(r.id) : "dept" === r.type && f(r.id)) : !1
                        },
                        onExpand: function(e, t, n) {
                            return n ? void (n.isParent && l(n.id)) : !1
                        }
                    }
                }, []);
                return t
            }
            function l(r) {
                log.debug(t, "selectDept: deptId: ", r);
                var s = _.find(e.userList, {
                    deptId: r
                });
                return s ? !1 : void i.fetchDeptUsers(r).then(function(t) {
                    var s = t[0]
                      , i = s && !!_.findWhere(e.userList, {
                        userId: s.userId
                    });
                    if (s && !i) {
                        var d = _.filter(t, {
                            deptId: r
                        });
                        _.each(d, function(t) {
                            g.showDeptPath && (t.deptPath = n("deptPath")(t.deptId, e.deptList))
                        }
                        ),
                        e.userList = e.userList.concat(d);
                        var c = m.getNodeByParam("id", r);
                        d.length && o(d, c)
                    }
                }
                )
            }
            function p(t) {
                var n = _.find(e.userList, {
                    userId: t
                });
                e.onselectuser && e.$apply(function() {
                    e.onselectuser({
                        user: n
                    })
                }
                )
            }
            function f(t) {
                var n = _.find(e.deptList, {
                    deptId: t
                });
                e.onselectdept && e.$apply(function() {
                    e.onselectdept({
                        dept: n
                    })
                }
                )
            }
            function h() {
                return _.defaults(e.settings || {}, {
                    showDeptSettingBtn: !1,
                    hideUngroup: !1,
                    dblclick: !0
                })
            }
            function v(t) {
                if ("user" === t.type) {
                    var r = _.find(e.userList, {
                        userId: t.id
                    })
                      , s = c.find("#" + t.tId + "_a .button");
                    s.append("<img alt='avatar' src='" + n("usericon")(r.icon, r.gender) + "'>")
                }
            }
            e.directiveName = t,
            e.mode = "normal",
            e.deptList = [],
            e.userList = [],
            e.searchList = [],
            e.searchKey = "",
            e.selectDept = void 0,
            e.search = function() {
                e.searchKey.length > 0 ? (e.mode = "search",
                i.searchUsers({
                    key: e.searchKey
                }).then(function(t) {
                    e.searchList = t
                }
                )) : (e.mode = "normal",
                e.searchList = [])
            }
            ,
            e.doSelectDept = function(t) {
                e.onselectdept && (e.selectDept = _.find(e.deptList, {
                    deptId: t
                }),
                e.onselectdept({
                    dept: e.selectDept
                }))
            }
            ,
            e.doSelectUser = function(t) {
                e.onselectuser && e.onselectuser({
                    user: t
                })
            }
            ;
            var g = h()
              , m = u(g);
            a(),
            e.$parent.$on("uncheckAll", function() {
                m.checkAllNodes(!1)
            }
            )
        }
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            template: '<div class="dept-user-tree">\r\n    <div class="row-fluid first" ng-hide="settings.hideSearch">\r\n        <div class="input-append">\r\n            <input class="input-large bold" type="text"\r\n                   jq-placeholder="请输入账号名"\r\n                   ng-model="searchKey"\r\n                   enter-listener="search()">\r\n            <span class="add-on" ng-click="search()">\r\n                <i class="icon-custom-searchs"></i>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div class="row-fluid" ng-show="mode === \'normal\'">\r\n        <ul class="ztree qyc-tree dept-tree"\r\n            ng-transclude></ul>\r\n    </div>\r\n    <div ng-show="mode === \'search\'" class="search-list">\r\n        <div class="row-fluid" ng-show="searchList.length === 0">\r\n            没有搜索到匹配的用户\r\n        </div>\r\n        <div class="row-fluid search-item" ng-repeat="user in searchList"\r\n             ng-click="doSelectUser(user)">\r\n            <div user-item user="user"></div>\r\n        </div>\r\n    </div>\r\n</div>',
            scope: {
                settings: "=",
                onselectdept: "&",
                onselectuser: "&"
            },
            link: c
        }
    }
    var t = "deptUserTree: ";
    require("jquery-ztree"),
    angular.module("commons.directives").directive("deptUserTree", ["$log", "$filter", "constants", "DeptLoader", "UserLoader", "DeptTreeUtils", e])
}
);
;define("app/support/directives/user/DeptUserSelector", function() {
    function e(e) {
        function t(t) {
            t.directiveName = s,
            t.selectDepts = [],
            t.$parent.$on("uncheckAll", function() {
                t.selectDepts = [],
                t.selectUsers = []
            }
            ),
            t.onSelectDept = function(r) {
                return e.debug(s, "select dept: ", r),
                _.find(t.selectDepts, {
                    deptId: r.deptId
                }) ? !1 : (t.selectDepts.push(r),
                void (t.onselectdepts && t.onselectdepts({
                    depts: t.selectDepts
                })))
            }
            ,
            t.onSelectUser = function(r) {
                return e.debug(s, "select user: ", r),
                _.find(t.selectUsers, {
                    userId: r.userId
                }) ? !1 : (t.selectUsers.push(r),
                void (t.onselectusers && t.onselectusers({
                    users: t.selectUsers
                })))
            }
        }
        return {
            restrict: "EA",
            replace: !0,
            transclude: !1,
            template: '<div class="dept-user-selector row-fluid">\r\n    <div class="span6 user-list"\r\n         dept-user-tree\r\n         settings="{\'showDeptPath\': true}"\r\n         onselectdept="onSelectDept(dept)"\r\n         onselectuser="onSelectUser(user)">\r\n    </div>\r\n    <div class="span6 selected-list">\r\n        <div class="row-fluid select-count">\r\n            <div class="span8 offset1">已选择账号(&nbsp;<strong style="color: #15c63a;">\r\n                {{selectUsers.length}}</strong>&nbsp;)\r\n            </div>\r\n            <div class="span3">\r\n                <button class="btn btn-link" ng-click="selectUsers = []">清空</button>\r\n            </div>\r\n        </div>\r\n\r\n        <ul class="row-fluid select-users">\r\n            <li ng-repeat="user in selectUsers">\r\n                <div class="row-fluid">\r\n                    <div class="span9 offset1 text-overflow" title="{{user|displayName2}}">\r\n                        {{user|displayName2}}\r\n                    </div>\r\n                    <div class="span2 remove-user">\r\n                        <i class="fa fa-times color-white" ng-click="selectUsers.splice($index, 1)"></i>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>',
            scope: {
                settings: "=",
                selectUsers: "=",
                onselectdepts: "&",
                onselectusers: "&"
            },
            link: t
        }
    }
    var s = "deptUserSelector::";
    angular.module("commons.directives").directive("deptUserSelector", ["$log", "$parse", e])
}
);
;define("app/support/directives/user/userItem", function() {
    function r() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !1,
            template: '<ul class="row-fluid user-item">\r\n    <li class="span1"></li>\r\n    <li class="span2" style="margin: 6px 0;">\r\n        <img class="img-circle"\r\n             src="/wt/assets/img/defaultAvatar64man.png"\r\n             ng-src="{{user.icon|usericon:user.gender}}" alt="Icon"/>\r\n    </li>\r\n    <li class="span9">\r\n        <strong class="text-overflow">{{user|displayName}}</strong>\r\n        <div style="color: #DDD">{{user.deptName || \'-\'}}</div>\r\n    </li>\r\n</ul>',
            scope: {
                user: "="
            },
            link: function() {}
        }
    }
    angular.module("commons.directives").directive("userItem", [r])
}
);
;define("app/support/directives/user/loginBox", function() {
    function r() {
        function r(r, o, e, i, t) {
            function s(r, n) {
                (r || n) && a()
            }
            function a() {
                "Quick" !== r.loginBean.mode && r.loginForm.entName.$error.required ? l("entNameRequire") : !r.loginBean.account && r.loginForm.account.$error.required ? l("accountRequire") : r.loginForm.password.$error.required ? l("passwordRequire") : r.formError = ""
            }
            function c(n) {
                i.setUserLoginCookies("Quick" === r.loginBean.mode, r.loginBean.entName, r.loginBean.account, r.loginBean.clientId, n)
            }
            function l(n) {
                var o = r.errorMap[n];
                o && (r.formError = o)
            }
            r.loginBean = new t,
            r.login = !1,
            r.formError = "",
            r.lang = webhelper.getLang(),
            r.switchLoginTxt = "msgOldLogin",
            r.loginBtnText = e("msg1"),
            r.onUserLogin = function() {
                return r.formError && !_.startsWith(r.formError, "error") ? !1 : (r.commit = !0,
                r.loginBtnText = "登录中...",
                r.loginBean.signin().then(function(n) {
                    c(n.token || n),
                    r.loginsucc && r.loginsucc({
                        token: n.token || n
                    }),
                    r.toggleby = !1
                }
                )["catch"](function(i) {
                    o.error(n, "login result: ", i),
                    l(i),
                    r.commit = !1,
                    r.loginBtnText = e("msg1")
                }
                ),
                !1)
            }
            ,
            r.errorMap = {
                errorWrongPWD: "密码错误",
                errorWrongAccount: "账号不存在",
                errorUserLocked: "用户被锁定，禁止登陆",
                error500: "登录失败! 请稍后重试",
                entNameRequire: "企业名称不能为空",
                accountRequire: "账号不能为空",
                passwordRequire: "密码不能为空",
                errorAuditFail: e("msgServiceExpire"),
                errorUserNotActive: e("msgAccountNotActive"),
                errorUserDeleted: e("msgAccountDeleted"),
                errorNotAuthed: e("msgUnAuthErr"),
                errorExpirationTimeOver: e("msgActiveUserErr")
            },
            r.$watch("loginBean.entName", s),
            r.$watch("loginBean.account", s),
            r.$watch("loginBean.password", s)
        }
        return {
            restrict: "EA",
            replace: !0,
            transclude: !1,
            template: '<div class="modal fade login-box"\r\n     modal-show="toggleby">\r\n    <div class="modal-header">\r\n        <button class="close" data-dismiss="modal">&times;</button>\r\n        <h3>用户登录</h3>\r\n    </div>\r\n    <div class="modal-body">\r\n        <form class="login-form" name="loginForm">\r\n            <div class="row-fluid title">\r\n                登 录\r\n            </div>\r\n            <div class="ac login-message" style="height: 30px;">\r\n                <div class="help-inline message red" id="errorTip" ng-show="formError">\r\n                    {{formError}}\r\n                </div>\r\n            </div>\r\n\r\n            <div class="control-group">\r\n                <div class="input-icon ac">\r\n                    <i class="icon-input-account reglogin"></i>\r\n                </div>\r\n                <input type="text"\r\n                       jq-placeholder="{{\'msgMailOrPhone\'|translate}}"\r\n                       ng-model="loginBean.account"\r\n                       name="account"\r\n                       autofocus="autofocus"\r\n                       ng-required="true"\r\n                       enter-listener="onUserLogin()">\r\n            </div>\r\n\r\n            <div class="control-group">\r\n                <div class="input-icon ac">\r\n                    <i class="icon-input-password reglogin"></i>\r\n                </div>\r\n                <input type="password"\r\n                       jq-placeholder="{{\'msgLoginPwd\'|translate}}"\r\n                       ng-model="loginBean.password"\r\n                       name="password"\r\n                       ng-required="true"\r\n                       enter-listener="onUserLogin()">\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="modal-footer">\r\n        <button class="btn btn-blue"\r\n                ng-class="commit && \'disabled\'"\r\n                ng-click="!commit && onUserLogin()">\r\n            登录\r\n        </button>\r\n        <button class="btn btn-white-blue" data-dismiss="modal">取消</button>\r\n    </div>\r\n</div>',
            scope: {
                loginsucc: "&",
                toggleby: "="
            },
            controller: ["$scope", "$log", "$translate", "constants", "LoginBean", r],
            link: function() {}
        }
    }
    var n = "loginBox::";
    angular.module("commons.directives").directive("loginBox", [r])
}
);
;define("app/support/directives/index", function(require) {
    require("app/support/directives/commons/enterListener"),
    require("app/support/directives/commons/jqPlaceHolder"),
    require("app/support/directives/commons/modalShow"),
    require("app/support/directives/commons/qyTableWidth"),
    require("app/support/directives/commons/showTab"),
    require("app/support/directives/commons/qyResize"),
    require("app/support/directives/commons/qyPopover"),
    require("app/support/directives/commons/datetimepicker"),
    require("app/support/directives/commons/qyFocus"),
    require("app/support/directives/commons/searchBox"),
    require("app/support/directives/commons/qyPager"),
    require("app/support/directives/file/EntFolderTree"),
    require("app/support/directives/file/PersonFolderTree"),
    require("app/support/directives/file/fileOperation"),
    require("app/support/directives/file/PermissionSelector"),
    require("app/support/directives/file/qyUploader"),
    require("app/support/directives/file/qyViewfile"),
    require("app/support/directives/file/webUploader"),
    require("app/support/directives/file/downloadFile"),
    require("app/support/directives/file/personFolderSelector"),
    require("app/support/directives/user/DeptTree"),
    require("app/support/directives/user/DeptUserTree"),
    require("app/support/directives/user/DeptUserSelector"),
    require("app/support/directives/user/userItem"),
    require("app/support/directives/user/loginBox")
}
);
;define("app/support/models/commons/BasePager", function() {
    function e() {
        function e() {
            this.total = 0,
            this.perPage = 30,
            this.maxSize = 5,
            this.current = 1,
            this.numPages = 0,
            this.itemsName = void 0
        }
        return e.prototype = {
            fetchPage: function() {
                throw new Error("pls override fetchPage()")
            },
            setItemsName: function(e) {
                this.itemsName = e
            }
        },
        e
    }
    angular.module("commons.models").service("BasePager", [e])
}
);
;define("app/support/models/commons/EntService", function() {
    function e() {
        function e(e) {
            this.serviceType = void 0,
            this.total = void 0,
            this.available = void 0,
            this.used = void 0,
            this.endDate = void 0,
            this.totalEntFileSize = void 0,
            this.totalPersonalFileSize = void 0,
            this.totalRecycleFileSize = void 0,
            e && angular.extend(this, e)
        }
        return e.prototype = {},
        e
    }
    function t(e, t, i) {
        return {
            getCurrentService: function() {
                var o = e.defer();
                return t.serviceInfo.get().then(function(e) {
                    o.resolve(_.map(e, function(e) {
                        return new i(e)
                    }
                    ))
                }
                ),
                o.promise
            }
        }
    }
    angular.module("commons.models").service("EntService", [e]),
    angular.module("commons.models").factory("EntServiceLoader", ["$q", "AdminRest", "EntService", t])
}
);
;define("app/support/models/user/Enterprise", function() {
    function e(e, n, r) {
        function o(e) {
            e && angular.extend(this, e)
        }
        return o.getEnterpriseInfo = function() {
            var r = e.defer();
            return n.getEnterpriseInfo().then(function(e) {
                r.resolve(new o(e))
            }
            )["catch"](function(e) {
                log.debug(t, "getEnterpriseInfo: ", e),
                r.reject(e)
            }
            ),
            r.promise
        }
        ,
        o.prototype = {
            constructor: o,
            getAllocatableDiskSize: function() {
                var t = e.defer();
                return n.getDeptAvailableMaxSiz("").then(function(e) {
                    t.resolve(e.availableMaxSize)
                }
                ),
                t.promise
            },
            save: function() {
                var t = e.defer()
                  , o = _.pick(this, "entId", "entName", "contact", "phone", "fax", "mobile", "address", "mail", "postcode", "website", "logo", "txtLogo");
                return o.userId = r.userId,
                n.updateEntInfo(o).then(function(e) {
                    t.resolve(e)
                }
                )["catch"](function(e) {
                    t.reject(e)
                }
                ),
                t.promise
            }
        },
        o
    }
    var t = "Enterprise: ";
    angular.module("commons.models").service("Enterprise", ["$q", "resturl", "cache", e])
}
);
;define("app/support/models/user/User", function(require) {
    function e(e, s, n, r, h, o) {
        function d(e) {
            this.deptId = void 0,
            this.deptName = void 0,
            this.userId = void 0,
            this.signature = void 0,
            this.icon = void 0,
            this.realName = void 0,
            this.gender = void 0,
            this.birthday = void 0,
            this.age = void 0,
            this.hobby = void 0,
            this.jobTitle = void 0,
            this.city = void 0,
            this.major = void 0,
            this.mail = void 0,
            this.phone = void 0,
            this.mobile = void 0,
            this.agent = void 0,
            this.devices = void 0,
            e && angular.extend(this, e),
            this.birthday && (this.birthday = s("dateTime")(this.birthday, "YYYY-MM-DD")),
            this.deptId || (this.deptId = -1,
            this.deptName = "未分组联系人"),
            this.gender == n("msg94") && (this.gender = "f"),
            "f" !== this.gender && (this.gender = "m")
        }
        return d.getLoginUser = function() {
            var t = e.defer();
            return r.getUserInfo().then(function(e) {
                t.resolve(new d(e))
            }
            )["catch"](function(e) {
                log.debug(i, "getUserInfo: ", e),
                t.reject(e)
            }
            ),
            t.promise
        }
        ,
        d.prototype = {
            constructor: d,
            isAdmin: function() {
                return this.userType === h.UserType.Administrator
            },
            isSecAdmin: function() {
                return this.userType === h.UserType.SecondAdministrator
            },
            isCommonUser: function() {
                return !this.isAdmin() && !this.isSecAdmin()
            },
            displayName: function() {
                return this.realName || this.userName
            },
            updateByAdmin: function() {
                var e = {};
                return this.pwd && (e = t.getNonceDTO(this.userId, this.pwd)),
                angular.extend(e, {
                    userId: this.userId,
                    account: this.account,
                    empNum: this.empNum,
                    jobTitle: this.jobTitle,
                    phone: this.phone,
                    realName: this.realName,
                    gender: this.gender
                }),
                o.user.put(e)
            },
            updateUserInfo: function() {
                var e = {
                    signature: this.signature,
                    realName: this.realName,
                    gender: this.gender,
                    phone: this.phone,
                    mobile: this.mobile
                };
                return this.birthday && (e.birthday = h.getMillSec(this.birthday, "YYYY-MM-DD")),
                this.mail && this.userName !== this.mail && (e.mail = this.mail),
                this.mobile && this.userName !== this.mobile && (e.mobile = this.mobile),
                r.updateUserInfo(e)
            },
            getUserDevices: function() {
                var e = this;
                this.devices = [],
                r.getUserDevices().then(function(i) {
                    var t = i.devices;
                    _.each(t, function(i) {
                        "online" === i.onlineStatus && e.devices.push(i.agent)
                    }
                    )
                }
                )
            },
            contains: function(e) {
                return -1 !== this.userName.indexOf(e) ? !0 : this.realName && -1 !== this.realName.indexOf(e) ? !0 : !1
            }
        },
        d
    }
    var i = "User::"
      , t = require("security");
    angular.module("commons.models").service("User", ["$q", "$filter", "$translate", "resturl", "constants", "AdminRest", e])
}
);
;define("app/support/models/user/UserLoader", function() {
    function e(e, r, t, s) {
        return {
            getContacts: function() {
                var s = e.defer();
                return r.getContactGroupAndUser().then(function(e) {
                    var r = _.map(e.contactList, function(e) {
                        return new t(e.userDTO)
                    }
                    );
                    s.resolve(r)
                }
                ),
                s.promise
            },
            fetchDeptUsers: function(r) {
                var n = e.defer();
                return s.users.get({
                    deptid: r
                }).then(function(e) {
                    n.resolve(e.userList ? _.map(e.userList, function(e) {
                        return new t(e)
                    }
                    ) : [])
                }
                ),
                n.promise
            },
            searchUsers: function(r) {
                var n = e.defer();
                return s.users.get({
                    deptid: r.deptId,
                    key: r.key || r.searchKey,
                    skip: r.skipResults || 0,
                    max: r.maxResults || 30
                }).then(function(e) {
                    n.resolve(e.userList ? _.map(e.userList, function(e) {
                        return new t(e)
                    }
                    ) : [])
                }
                ),
                n.promise
            }
        }
    }
    angular.module("commons.models").factory("UserLoader", ["$q", "resturl", "User", "AdminRest", e])
}
);
;define("app/support/models/user/LoginDataLoader", function() {
    function r(r, e, n, t, o) {
        return function() {
            if (r.currentUser)
                return e.when({
                    currentUser: r.currentUser,
                    currentEnt: r.currentEnt
                });
            var u = e.defer();
            return e.all([t.getLoginUser(), o.getEnterpriseInfo()]).then(function(e) {
                log.debug("LoginDataLoader OK!"),
                r.currentUser = e[0],
                r.currentEnt = e[1],
                n.entId = r.currentEnt.entId,
                n.userId = r.currentUser.userId,
                u.resolve({
                    currentUser: e[0],
                    currentEnt: e[1]
                })
            }
            )["catch"](function() {
                log.debug("LoginDataLoader: error!"),
                u.reject("Fetch user or ent info fail!")
            }
            ),
            u.promise
        }
    }
    angular.module("commons.models").factory("LoginDataLoader", ["$rootScope", "$q", "cache", "User", "Enterprise", r])
}
);
;define("app/support/models/user/UserPager", function() {
    function e(e, s, t, r) {
        function n() {
            this.searchKey = null ,
            this.deptId = null ,
            this.users = []
        }
        return n.prototype = new t,
        n.prototype.fetchPage = function(t) {
            var n = this
              , u = e.defer();
            return s.users.get({
                deptid: this.deptId,
                key: this.searchKey,
                skip: (this.current - 1) * this.perPage,
                max: this.perPage
            }).then(function(e) {
                n.users = e.userList ? _.map(e.userList, function(e) {
                    return new r(e)
                }
                ) : [],
                n.total = e.resultCount,
                u.resolve(n.users)
            }
            ),
            u.promise
        }
        ,
        n
    }
    angular.module("commons.models").service("UserPager", ["$q", "AdminRest", "BasePager", "User", e])
}
);
;define("app/support/models/user/Dept", function() {
    function e(e, t, n, r, o) {
        function d(e) {
            this.deptId = void 0,
            this.name = void 0,
            this.parentId = void 0,
            this.maxSize = void 0,
            this.permission = void 0,
            this.appalyToSubFolder = void 0,
            this.folderId = void 0,
            e && angular.extend(this, e)
        }
        return d.prototype = {
            getDept: function() {
                var e = this;
                t.getDeptById({
                    deptId: this.deptId
                }).then(function(t) {
                    t && angular.extend(e, t)
                }
                )
            },
            createDept: function(t) {
                var n = this
                  , o = e.defer();
                return r.depts.post({
                    parentId: this.parentId,
                    deptName: this.name,
                    createFolder: t
                }).then(function(e) {
                    n.deptId = e.deptId,
                    o.resolve(n)
                }
                )["catch"](o.reject),
                o.promise
            },
            deleteDept: function() {
                return r.dept.remove({
                    deptid: this.deptId
                })
            },
            getDetail: function() {
                var t = this
                  , n = e.defer();
                return this.permission = new o,
                r.dept.get({
                    deptid: this.deptId
                }).then(function(e) {
                    t.permission = new o(e.permission),
                    n.resolve(t)
                }
                ),
                n.promise
            },
            update: function(t) {
                var n = this
                  , o = t || this
                  , d = e.defer();
                return r.dept.put({
                    deptId: o.deptId,
                    deptName: o.name,
                    parentId: o.parentId,
                    appalyToSubFolder: o.appalyToSubFolder,
                    permission: o.permission.toJSON()
                }).then(function() {
                    angular.extend(n, {
                        name: o.name,
                        permission: o.permission
                    }),
                    d.resolve(n)
                }
                )["catch"](function() {
                    d.reject("error500")
                }
                ),
                d.promise
            }
        },
        d
    }
    function t(e, t, n, r, o, d) {
        return {
            fetchManageDepts: function(n) {
                var r = e.defer();
                return d.depts.get().then(function(e) {
                    if (e) {
                        var d = _.map(e, function(e) {
                            return new o(e)
                        }
                        );
                        d.sort(function(e, t) {
                            var n = e.orderValue || 0
                              , r = t.orderValue || 0;
                            return e.parentId ? t.parentId ? n - r : 1 : t.parentId ? -1 : n - r
                        }
                        ),
                        n || d.push(new o({
                            deptId: -1,
                            parentId: null ,
                            name: t("msgUngroupContact"),
                            orderValue: "100000000"
                        })),
                        r.resolve(d)
                    } else
                        r.resolve([])
                }
                ),
                r.promise
            }
        }
    }
    angular.module("commons.models").service("Dept", ["$q", "resturl", "constants", "AdminRest", "Permission", e]),
    angular.module("commons.models").factory("DeptLoader", ["$q", "$translate", "resturl", "constants", "Dept", "AdminRest", t])
}
);
//定义weitoo登录的信息的存储
;define("app/support/models/user/LoginBean", function(require) {
    function t(t) {
        function n() {
            this.entName = void 0,
            this.account = $.cookie("ua"),
            this.pwd = void 0,
            this.agent = webhelper.getAgent(),
            this.clientId = webhelper.guid(),
            this.domainUser = !1,
            this.mode = "Quick"
        }
        return n.prototype = {
            signin: function() {
                return seajs.isPrivate ? this.prilogin() : this.publogin()
            },
            prilogin: function() {
                var n = e.getNonceDTO(this.account, this.password);
                return angular.extend(n, {
                    agent: this.agent,
                    entName: this.entName,
                    userName: this.account,
                    clientId: this.clientId,
                    mode: "Account"
                }),
                "admin" !== this.account && this.domainUser ? (n.realPwd = this.password,
                t.loginByLdap(n)) : t.logon(n)
            },
            publogin: function() {
                var n = e.getNonceDTO(this.account, this.password);
                return angular.extend(n, {
                    agent: this.agent,
                    entName: this.entName,
                    userName: this.account,
                    clientId: this.clientId,
                    mode: this.entName ? "Account" : "Quick"
                }),
                t.signin(n)
            }
        },
        n
    }
    var e = require("security");
    angular.module("commons.models").service("LoginBean", ["resturl", t])
}
);
;define("app/support/models/file/EntLink", function() {
    function e(e, i, t) {
        function n(e) {
            this.linkId = void 0,
            this.linkCode = void 0,
            this.fileId = void 0,
            this.password = void 0,
            this.expirationTime = void 0,
            this.https = void 0,
            this.createrName = void 0,
            this.createTime = void 0,
            this.type = void 0,
            this.href = void 0,
            this.linkUrl = void 0,
            this.receivers = void 0,
            e && angular.extend(this, e)
        }
        return n.prototype = {
            save: function() {
                var n = this
                  , r = e.defer();
                return i.link.post({
                    fileId: this.fileId
                }).then(function(e) {
                    angular.extend(n, e),
                    n.href = t.getShareUrl(n.linkCode),
                    r.resolve(n)
                }
                ),
                r.promise
            },
            updateLink: function() {
                var t = e.defer()
                  , n = this;
                return i.link.put({
                    linkId: this.linkId,
                    password: this.password,
                    expirationTime: this.expirationTime,
                    type: this.type,
                    https: this.https
                }).then(function(e) {
                    angular.extend(n, e),
                    t.resolve(e)
                }
                ),
                t.promise
            },
            deleteLink: function() {
                var t = e.defer();
                return i.link.remove(null , {
                    query: {
                        linkid: this.linkId,
                        type: "sharedisk"
                    }
                }).then(function(e) {
                    t.resolve(e)
                }
                ),
                t.promise
            },
            sendLink: function() {
                var n = e.defer()
                  , r = this;
                return i.send.post({
                    linkId: this.linkId,
                    linkUrl: t.getShareUrl(r.linkCode),
                    receivers: this.receivers
                }).then(function(e) {
                    angular.extend(r, e),
                    r.href = t.getShareUrl(r.linkCode),
                    n.resolve(e)
                }
                ),
                n.promise
            }
        },
        n
    }
    angular.module("commons.models").service("EntLink", ["$q", "FileRest", "constants", e])
}
);
;define("app/support/models/file/BaseFile", function() {
    function e(e, t, n, r, o, l, s) {
        function f() {
            this.fileId = void 0,
            this.name = void 0,
            this.fileInfo = void 0,
            this.labels = void 0,
            this.convStatus = void 0
        }
        return f.prototype = {
            isEntFile: function() {
                return this.fileType == l.fileType.shareDisk
            },
            reload: function() {
                return this.getFile()
            },
            getFile: function() {
                var i = this
                  , t = e.defer();
                return o.file.get({
                    fileid: this.fileId,
                    type: this.fileType
                }).then(function(e) {
                    var n = "sharedisk" === i.fileType ? f.parseEntFile(e) : f.parsePersonFile(e);
                    angular.extend(i, n),
                    t.resolve(i)
                }
                )["catch"](function(e) {
                    t.reject(e)
                }
                ),
                t.promise
            },
            getFileProperties: function() {
                var i = this
                  , t = e.defer();
                return r.getFileProperties({
                    fileId: this.fileId,
                    fileType: this.fileType
                }).then(function(e) {
                    i.fileInfo = e,
                    t.resolve(i)
                }
                ),
                t.promise
            },
            rename: function(i) {
                var t = this
                  , n = e.defer();
                return o.file.rename({
                    name: i,
                    fileId: this.fileId,
                    version: this.version,
                    fileType: this.fileType
                }).then(function() {
                    t.reload().then(function() {
                        n.resolve(t)
                    }
                    )
                }
                )["catch"](function(e) {
                    n.reject(e)
                }
                ),
                n.promise
            },
            updateInfo: function() {
                var i = this
                  , t = e.defer();
                return r.updateFileInfo({
                    fileId: this.fileId,
                    fileType: this.fileType,
                    version: this.version,
                    name: this.newName,
                    maxSize: l.gbConvertByte(this.fileInfo.newMaxSize)
                }).then(function() {
                    i.reload().then(function() {
                        t.resolve(i)
                    }
                    )
                }
                )["catch"](function(e) {
                    t.reject(e)
                }
                ),
                t.promise
            },
            getLabels: function() {
                var i = e.defer();
                return o.labels.get().then(function(e) {
                    i.resolve(e)
                }
                ),
                i.promise
            },
            updateLabels: function(i) {
                var t = e.defer();
                return o.file.label({
                    fileId: this.fileId,
                    fileType: this.fileType,
                    labels: i,
                    version: this.version
                }).then(function(e) {
                    t.resolve(e)
                }
                ),
                t.promise
            },
            deleteLabels: function(i) {
                var t = e.defer();
                return o.label.remove(null , {
                    query: {
                        labelid: i
                    }
                }).then(function(e) {
                    t.resolve(e)
                }
                ),
                t.promise
            },
            getComments: function(i, t) {
                var n = e.defer();
                return o.comments.get({
                    fileid: i,
                    type: t
                }).then(function(e) {
                    n.resolve(e)
                }
                ),
                n.promise
            },
            addComment: function(i, t) {
                var n = e.defer();
                return o.comments.post({
                    fileId: this.fileId,
                    fileType: this.fileType,
                    commentBody: i,
                    userName: t,
                    version: this.version
                }).then(function(e) {
                    n.resolve(e)
                }
                ),
                n.promise
            },
            deleteComment: function(i) {
                var t = e.defer();
                return o.comment.remove(null , {
                    query: {
                        commentid: i
                    }
                }).then(function(e) {
                    t.resolve(e)
                }
                ),
                t.promise
            },
            updateFileComment: function(i) {
                var t = e.defer();
                return o.comment.put({
                    fileId: this.fileId,
                    fileType: this.fileType,
                    commentBody: _.pluck([i], "commentBody")[0],
                    commentId: _.pluck([i], "commentId")[0],
                    version: this.version
                }).then(function(e) {
                    t.resolve(e)
                }
                ),
                t.promise
            },
            isNeedConvert: function() {
                return l.isFileConvertSupport(this.type)
            },
            hasConvDone: function() {
                return this.isNeedConvert() ? "3" === this.convStatus : !0
            },
            createFolder: function(i) {
                var t = this
                  , n = e.defer();
                return o.folders.post({
                    fileType: this.fileType,
                    parentId: this.parentId,
                    name: this.name,
                    linkId: i
                }).then(function(e) {
                    angular.extend(t, f.parseFile(this.fileType, e)),
                    n.resolve(t)
                }
                )["catch"](function(e) {
                    n.reject(e)
                }
                ),
                n.promise
            },
            viewFile: function(t) {
                var n = this
                  , r = e.defer()
                  , o = l.isExcelType(this.type) ? "html" : "pdf";
                return s.file.viewFile(this.fileType, this.fileId, o, {
                    linkId: t
                }).then(function(e) {
                    log.debug(i, "viewFile: result:", e),
                    "OK" === e.msg ? (n.convStatus = 3,
                    r.resolve(e)) : r.reject()
                }
                )["catch"](function() {
                    r.reject()
                }
                ),
                r.promise
            }
        },
        f.parseFile = function(e, i) {
            return "sharedik" === e ? f.parseEntFile(i) : f.parsePersonFile(i)
        }
        ,
        f.parsePersonFile = function(e) {
            return e = e || {},
            e.name = e.name || e.fileName,
            {
                entId: e.entId,
                userId: e.userId,
                fileType: "onlinedisk",
                fileId: e.fileId,
                parentId: e.parentId,
                name: e.name,
                isFolder: e.folder,
                type: e.folder ? "folder" : l.getFileSuffix(e.name),
                createTime: e.createTime,
                guid: e.fileGuid,
                md5: e.md5,
                path: e.path,
                size: e.fileSize,
                sysFolder: e.sysFolder,
                updateUserName: e.upadteUserName,
                updateTime: e.updateTime,
                folder: e.folder,
                labels: e.labels,
                convStatus: e.convStatus
            }
        }
        ,
        f.parseEntFile = function(e) {
            return e = e || {},
            e.name = e.name || e.fileName,
            {
                fileType: "sharedisk",
                entId: e.entId,
                userId: e.userId,
                parentId: e.parentId,
                fileId: e.fileId,
                name: e.name,
                type: e.folder ? "folder" : l.getFileSuffix(e.name),
                size: e.fileSize,
                guid: e.fileGuid,
                version: e.version,
                createTime: e.createTime,
                updateTime: e.updateTime,
                thumb: e.thumb,
                shareLinkId: e.linkDTO && e.linkDTO.linkId,
                lockByUserId: e.lockByDTO && e.lockByDTO.lockByUserId,
                lockByUser: e.lockByDTO && e.lockByDTO.lockByUser,
                remark: e.remark,
                favorite: e.favorite,
                convStatus: e.convStatus,
                remind: e.remind,
                convertSupport: l.isFileConvertSupport(l.getFileSuffix(e.name)),
                linkDTO: e.linkDTO,
                permissionDTO: e.permissionDTO,
                path: e.path,
                isFolder: e.folder,
                folder: e.folder,
                updateUserName: e.upadteUserName,
                labels: e.labels
            }
        }
        ,
        f
    }
    var i = "BaseFile::";
    angular.module("commons.models").service("BaseFile", ["$q", "$log", "cache", "resturl", "FileRest", "constants", "NodeRest", e])
}
);
;define("app/support/models/file/PersonFile", function() {
    function e(e, t, i, r, o) {
        function n(e) {
            this.fileType = r.fileType.onlineDisk,
            e && angular.extend(this, o.parsePersonFile(e))
        }
        return n.prototype = new o,
        n.rootFolder = new n({
            fileType: "onlinedisk",
            fileId: -1,
            folder: !0,
            name: t("msg879")
        }),
        n.createFolder = function(e, t) {
            return new n({
                parentId: e,
                fileName: t,
                folder: !0
            })
        }
        ,
        angular.extend(n.prototype, {
            getOperations: function() {
                var e = ["move", "copyto", "rename", "delete", "download", "upload", "create", "edit", "property"];
                return this.sysFolder && webhelper.without(e, ["rename", "move", "delete"]),
                (this.isFolder || !r.isEditType(this.type)) && webhelper.without(e, ["edit"]),
                e
            }
        }),
        n
    }
    function t(e, t, i, r, o) {
        function n() {
            this.searchKey = void 0,
            this.folderId = void 0,
            this.total = void 0,
            this.files = [],
            this.fileType = "onlinedisk",
            this.linkId = void 0
        }
        return n.prototype = new t,
        angular.extend(n.prototype, {
            fetchPage: function() {
                var t = this
                  , o = e.defer();
                return i.files.post({
                    fileType: "onlinedisk",
                    folderId: this.folderId,
                    order: {
                        orderBy: "name"
                    },
                    skipResults: (this.current - 1) * this.perPage,
                    maxResults: this.perPage,
                    linkId: this.linkId
                }).then(function(e) {
                    var i = _.map(e.files, function(e) {
                        return new r(e)
                    }
                    );
                    i.unshift(0, t.files.length),
                    Array.prototype.splice.apply(t.files, i),
                    t.total = e.resultCount,
                    o.resolve(t)
                }
                ),
                o.promise
            },
            remove: function(e) {
                var t = this
                  , r = _.map(e, function(e) {
                    return _.pick(e, "fileId", "version", "fileType")
                }
                );
                i.files.remove({
                    fileType: this.fileType,
                    files: r
                }).then(function() {
                    t.fetchPage()
                }
                )["catch"](function(e) {
                    noty.alert(ErrorType.showDeleteFileError(e))
                }
                )
            },
            download: function(e) {
                return e.length > 1 || e[0].folder ? void 0 : 1 != e.length || e[0].folder ? void 0 : void o.executeFileDownload(e[0])
            },
            reset: function(e) {
                var t = [];
                t = _.isArray(arguments[0]) ? e : Array.prototype.slice.call(arguments, 0),
                this.current = 1,
                Array.prototype.splice.apply(this.files, [0, this.files.length].concat(t)),
                this.total = this.files.length
            }
        }),
        n
    }
    angular.module("commons.models").service("PersonFile", ["$q", "$translate", "resturl", "constants", "BaseFile", e]),
    angular.module("commons.models").factory("PersonFilePager", ["$q", "BasePager", "FileRest", "PersonFile", "constants", t])
}
);
;define("app/support/models/file/Permission", function() {
    function t() {
        function t(t) {
            this.read = !0,
            this.write = !1,
            this["delete"] = !1,
            this.upload = !1,
            this.download = !1,
            this.share = !1,
            this.local = !1,
            this.manage = !1,
            this.createFolder = !1,
            this.mode = "read",
            t && this.reset(t)
        }
        return t.attrs = ["read", "write", "delete", "upload", "download", "share", "local", "createFolder"],
        t.prototype = {
            getChecked: function() {
                return _.filter(t.attrs, function(t) {
                    return this[t]
                }
                , this)
            },
            uncheckAll: function() {
                _.each(t.attrs, function(t) {
                    this[t] = !1
                }
                , this),
                this.mode = this.getMode()
            },
            checkAll: function() {
                _.each(t.attrs, function(t) {
                    this[t] = !0
                }
                , this),
                this.mode = this.getMode()
            },
            toggleAll: function() {
                this.hasAll() ? this.uncheckAll() : this.checkAll(),
                this.mode = this.getMode()
            },
            checkAttrs: function() {
                return _.filter(t.attrs, function(t) {
                    return !!this[t]
                }
                , this)
            },
            has: function() {
                return _.all(_.toArray(arguments), function(t) {
                    return this[t]
                }
                , this)
            },
            hasAll: function() {
                return _.all(t.attrs, function(t) {
                    return !!this[t]
                }
                , this)
            },
            hasNone: function() {
                return _.all(t.attrs, function(t) {
                    return !this[t]
                }
                , this)
            },
            check: function() {
                this.uncheckAll(),
                _.each(_.toArray(arguments), function(t) {
                    this[t] = !0
                }
                , this),
                this.mode = this.getMode()
            },
            reset: function(t) {
                angular.extend(this, t),
                this.mode = this.getMode()
            },
            toggle: function() {
                return "user" !== this.mode ? !1 : void _.each(_.toArray(arguments), function(t) {
                    this[t] = !this[t]
                }
                , this)
            },
            getMode: function() {
                var t = this.getChecked();
                switch (t.length) {
                case 0:
                    return "user";
                case 1:
                    return t[0];
                case 2:
                    return _.contains(t, "upload") ? "read,upload" : _.contains(t, "download") ? "read,download" : "user";
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    return "user";
                case 8:
                    return "all"
                }
            },
            changeMode: function(t) {
                switch (t) {
                case "read":
                    this.check("read");
                    break;
                case "upload":
                    this.check("upload");
                    break;
                case "download":
                    this.check("download");
                    break;
                case "read,upload":
                    this.check("read", "upload");
                    break;
                case "read,download":
                    this.check("read", "download");
                    break;
                case "all":
                    this.checkAll();
                    break;
                case "user":
                    this.uncheckAll()
                }
            },
            toJSON: function() {
                return _.pick(this, t.attrs)
            }
        },
        t
    }
    angular.module("commons.models").service("Permission", ["$q", "constants", "resturl", t])
}
);
;define("app/support/models/file/EntFile", function() {
    function e(e, i, t, r, o, n, s) {
        function l(e) {
            this.fileType = "sharedisk",
            this.entId = void 0,
            this.enterpriseId = void 0,
            this.userId = void 0,
            this.parentId = void 0,
            this.fileId = void 0,
            this.name = void 0,
            this.type = void 0,
            this.size = void 0,
            this.guid = void 0,
            this.version = void 0,
            this.createTime = void 0,
            this.updateTime = void 0,
            this.thumb = void 0,
            this.shareLinkId = void 0,
            this.lockByUserId = void 0,
            this.lockByUser = void 0,
            this.remark = void 0,
            this.favorite = void 0,
            this.remind = void 0,
            this.linkDTO = void 0,
            this.permissionDTO = void 0,
            this.path = void 0,
            this.isFolder = void 0,
            this.folder = void 0,
            this.updateUserName = void 0,
            this.fileInfo = void 0;
            var i = n.parseEntFile(e);
            angular.extend(this, i)
        }
        return l.prototype = new n,
        l.rootFolder = new l({
            fileId: -1,
            folder: !0,
            name: i("msg878"),
            fileType: "sharedisk"
        }),
        l.createFolder = function(e, i) {
            return new l({
                fileType: "sharedisk",
                parentId: e,
                fileName: i,
                folder: !0
            })
        }
        ,
        angular.extend(l.prototype, {
            constructor: l,
            remindFile: function() {
                return o.remind.put(null , {
                    query: {
                        fileid: this.fileId
                    }
                })
            },
            cancalRemind: function() {
                return o.remind.remove(null , {
                    query: {
                        fileid: this.fileId
                    }
                })
            },
            getVersion: function(e) {
                return t.getEntFileVersionDetail({
                    fileType: "sharedisk",
                    fileId: this.fileId,
                    version: e
                })
            },
            restoreVersion: function(e) {
                return t.restoreEntFolderVersion({
                    folderId: this.fileId,
                    version: e
                })
            },
            getAvailableMaxSize: function() {
                var i = e.defer();
                return t.getAvailableMaxSize({
                    fileId: this.fileId
                }).then(function(e) {
                    i.resolve(e.availableMaxSize)
                }
                ),
                i.promise
            },
            lock: function() {
                var i = e.defer();
                return o.file.lock(null , {
                    query: {
                        fileid: this.fileId
                    }
                }).then(function(e) {
                    i.resolve(e)
                }
                )["catch"](function(e) {
                    i.reject(e)
                }
                ),
                i.promise
            },
            unlock: function() {
                var i = e.defer();
                return o.file.unlock({
                    fileid: this.fileId
                }).then(function(e) {
                    i.resolve(e)
                }
                )["catch"](function(e) {
                    i.reject(e)
                }
                ),
                i.promise
            },
            follow: function() {
                var i = e.defer();
                return o.remind.put(null , {
                    query: {
                        fileid: this.fileId
                    }
                }).then(function(e) {
                    i.resolve(e)
                }
                )["catch"](function(e) {
                    i.reject(e)
                }
                ),
                i.promise
            },
            unFollow: function() {
                var i = e.defer();
                return o.remind.remove({
                    fileid: this.fileId
                }).then(function(e) {
                    i.resolve(e)
                }
                )["catch"](function(e) {
                    i.reject(e)
                }
                ),
                i.promise
            },
            getPermissionOperations: function() {
                var e = []
                  , i = this.permissionDTO;
                return i ? (i.read && e.push(r.PermissionOperateMap.read),
                i.upload && e.push(r.PermissionOperateMap.upload),
                i.download && e.push(r.PermissionOperateMap.download),
                i.write && e.push(r.PermissionOperateMap.write),
                i.share && e.push(r.PermissionOperateMap.share),
                i["delete"] && e.push(r.PermissionOperateMap["delete"]),
                i.local && e.push(r.PermissionOperateMap.local),
                i.manage && e.push(r.PermissionOperateMap.manage),
                _.uniq(_.flatten(e))) : e
            },
            getOperations: function() {
                var e = this.getPermissionOperations();
                return webhelper.without(e, this.remind ? ["attention"] : ["unattention"]),
                this.lockByUserId ? (webhelper.without(e, ["lock"]),
                this.hasLockByMe() || webhelper.without(e, ["rename", "move", "delete", "edit"])) : webhelper.without(e, ["unlock"]),
                webhelper.without(e, this.isFolder ? ["lock", "unlock"] : ["permission", "sync"]),
                this.sysFolder && webhelper.without(e, ["rename", "move", "delete"]),
                webhelper.without(e, !this.isFolder && r.isEditType(this.type) ? [] : ["edit"]),
                e
            },
            getMultiFilesOperations: function() {
                var e = this.getPermissionOperations();
                return webhelper.without(e, ["share", "rename", "lock", "unlock", "edit", "permission", "property"]),
                webhelper.without(e, this.sysFolder ? ["move", "copy", "delete"] : []),
                e
            },
            canUpload: {},
            hasLockByMe: function() {
                return this.lockByUserId && this.lockByUserId === s.userId
            }
        }),
        l
    }
    angular.module("commons.models").service("EntFile", ["$q", "$translate", "resturl", "constants", "FileRest", "BaseFile", "cache", e])
}
);
;define("app/support/models/file/EntFileLoader", function() {
    function e(e, t, r, n, i, o, l, s) {
        function f() {
            this.searchKey = void 0,
            this.folderId = void 0,
            this.total = void 0,
            this.files = [],
            this.fileType = "sharedisk",
            this.linkId = void 0
        }
        return f.prototype = new l,
        f.prototype.fetchPage = function() {
            var t = e.defer()
              , r = this;
            return i.files.post({
                fileType: "sharedisk",
                folderId: this.folderId,
                order: {
                    orderBy: "name"
                },
                skipResults: (this.current - 1) * this.perPage,
                maxResults: this.perPage,
                linkId: this.linkId
            }).then(function(e) {
                r.files = _.map(e.files, function(e) {
                    return new o(e)
                }
                ),
                r.total = e.resultCount,
                t.resolve(r)
            }
            ),
            t.promise
        }
        ,
        f.prototype.remove = function(e) {
            var t = this
              , o = _.map(e, function(e) {
                return _.pick(e, "fileId", "version", "fileType")
            }
            );
            i.files.remove({
                fileType: this.fileType,
                files: o
            }).then(function() {
                var r = _.pluck(e, "fileId");
                t.files = _.reject(t.files, function(e) {
                    return _.contains(r, e.fileId)
                }
                )
            }
            )["catch"](function(e) {
                r.alert(n.showDeleteFileError(e))
            }
            )
        }
        ,
        f.prototype.followFiles = function(e, t) {
            var o = this
              , l = t ? "put" : "remove"
              , s = _.pluck(e, "fileId");
            i.reminds[l]({
                fileIds: s,
                fileType: this.fileType
            }).then(function() {
                _.each(o.files, function(e) {
                    _.contains(s, e.fileId) && (e.remind = t)
                }
                )
            }
            )["catch"](function(e) {
                r.alert(n.followFileError(e))
            }
            )
        }
        ,
        f.prototype.download = function(e) {
            return e.length > 1 || e[0].folder ? void 0 : 1 != e.length || e[0].folder ? void 0 : void s.executeFileDownload(e[0])
        }
        ,
        f
    }
    function t(e, t, r, n, i, o, l) {
        return {
            fetchAdminFolders: function(t) {
                var r = e.defer();
                return o.folders.get({
                    type: "sharedisk",
                    fileid: t
                }).then(function(e) {
                    r.resolve(_.map(e.files, function(e) {
                        return new i(e)
                    }
                    ))
                }
                ),
                r.promise
            },
            search: function(t) {
                var n = e.defer();
                return r.getPagedEntFilesByFolder({
                    userId: cache.userId,
                    fileName: t,
                    global: !0,
                    order: {
                        orderBy: "name"
                    }
                }).then(function(e) {
                    var t = _.map(e.forderList.concat(e.fileList), function(e) {
                        return new i(e)
                    }
                    );
                    n.resolve(t)
                }
                ),
                n.promise
            },
            fetchRootFolder: function() {
                var t = e.defer();
                return l.folder.get({
                    type: "sharedisk"
                }).then(function(e) {
                    t.resolve(_.map(e.files, function(e) {
                        return new i(e)
                    }
                    ))
                }
                ),
                t.promise
            },
            fetchFolder: function(t) {
                var r = e.defer();
                return l.folder.get({
                    type: "sharedisk",
                    fileid: t
                }).then(function(e) {
                    r.resolve(_.map(e.files, function(e) {
                        return new i(e)
                    }
                    ))
                }
                ),
                r.promise
            }
        }
    }
    angular.module("commons.models").service("EntFilePager", ["$q", "$log", "noty", "ErrorType", "FileRest", "EntFile", "BasePager", "constants", e]),
    angular.module("commons.models").factory("EntFileLoader", ["$q", "$translate", "resturl", "constants", "EntFile", "AdminRest", "FileRest", t])
}
);
;define("app/support/models/file/EntFilePager", function() {
    function e(e, t, i, r, n, o, l, s) {
        function f() {
            this.searchKey = void 0,
            this.folderId = void 0,
            this.total = void 0,
            this.files = [],
            this.fileType = "sharedisk",
            this.linkId = void 0
        }
        return f.prototype = new l,
        angular.extend(f.prototype, {
            fetchPage: function() {
                var t = e.defer()
                  , i = this;
                return n.files.post({
                    fileType: "sharedisk",
                    folderId: this.folderId,
                    linkId: this.linkId,
                    order: {
                        orderBy: "name"
                    },
                    skipResults: (this.current - 1) * this.perPage,
                    maxResults: this.perPage
                }).then(function(e) {
                    var r = _.map(e.files, function(e) {
                        return new o(e)
                    }
                    );
                    Array.prototype.splice.apply(i.files, [0, i.files.length].concat(r)),
                    i.total = e.resultCount,
                    t.resolve(i)
                }
                ),
                t.promise
            },
            remove: function(e) {
                var t = this
                  , o = _.map(e, function(e) {
                    return _.pick(e, "fileId", "version", "fileType")
                }
                );
                n.files.remove({
                    fileType: this.fileType,
                    files: o
                }).then(function() {
                    t.fetchPage()
                }
                )["catch"](function(e) {
                    r.alert(i.showDeleteFileError(e))
                }
                )
            },
            followFiles: function(e, t) {
                var o = this
                  , l = t ? "put" : "remove"
                  , s = _.pluck(e, "fileId");
                n.reminds[l]({
                    fileIds: s,
                    fileType: this.fileType
                }).then(function() {
                    _.each(o.files, function(e) {
                        _.contains(s, e.fileId) && (e.remind = t)
                    }
                    )
                }
                )["catch"](function(e) {
                    r.alert(i.followFileError(e))
                }
                )
            },
            download: function(e) {
                return e.length > 1 || e[0].folder ? void 0 : 1 != e.length || e[0].folder ? void 0 : void s.executeFileDownload(e[0])
            },
            reset: function(e) {
                var t = [];
                t = _.isArray(arguments[0]) ? e : Array.prototype.slice.call(arguments, 0),
                this.current = 1,
                Array.prototype.splice.apply(this.files, [0, this.files.length].concat(t)),
                this.total = this.files.length
            }
        }),
        f
    }
    angular.module("commons.models").service("EntFilePager", ["$q", "$log", "noty", "ErrorType", "FileRest", "EntFile", "BasePager", "constants", e])
}
);
;define("app/support/models/file/PersonFileLoader", function() {
    function e(e, n, r, o, t) {
        return {
            fetchFolder: function(n) {
                var o = e.defer();
                return r.files.post({
                    fileType: "onlinedisk",
                    folderId: n,
                    order: {
                        orderBy: "name"
                    }
                }).then(function(e) {
                    var n = _.map(_.filter(e.files, function(e) {
                        return e.folder
                    }
                    ), function(e) {
                        return new t(e)
                    }
                    );
                    o.resolve(n)
                }
                ),
                o.promise
            }
        }
    }
    angular.module("commons.models").factory("PersonFileLoader", ["$q", "$translate", "FileRest", "constants", "PersonFile", e])
}
);
;define("app/support/models/file/Comment", function() {
    function e(e, t) {
        function n(e) {
            this.commentId = void 0,
            this.commentBody = void 0,
            this.createrId = void 0,
            this.createrName = void 0,
            this.createTime = void 0,
            e && angular.extend(this, e)
        }
        return n.prototype = {
            save: function(n, o) {
                var i = e.defer()
                  , m = this;
                return t.comments.post({
                    fileType: n,
                    fileId: o,
                    commentBody: this.commentBody,
                    userName: this.createrName
                }).then(function(e) {
                    angular.extend(m, e),
                    i.resolve(m)
                }
                ),
                i.promise
            }
        },
        n.list = function(o, i) {
            var m = e.defer();
            return t.comments.get({
                type: o,
                fileid: i
            }).then(function(e) {
                m.resolve(_.map(e.comments, function(e) {
                    return new n(e)
                }
                ))
            }
            ),
            m.promise
        }
        ,
        n
    }
    angular.module("commons.models").service("Comment", ["$q", "FileRest", e])
}
);
;define("app/support/models/file/DownloadBean", function() {
    function e(e, l, r, d) {
        function t(e, l, r) {
            if (this.currentFolder = e,
            this.files = l,
            this.linkId = r,
            log.debug(i, "currentFolder: ", e, ", files: ", l, ", linkId: ", r),
            this.status = "zipping",
            this.error = void 0,
            this.downloadUrl = void 0,
            this.fileType = void 0,
            this.currentFolder)
                this.userId = this.currentFolder.userId,
                this.entId = this.currentFolder.entId;
            else {
                var d = this.files[0];
                this.userId = d.userId,
                this.entId = d.entId
            }
        }
        return t.prototype = {
            constructor: t,
            zipFiles: function() {
                var t = this
                  , s = l.defer()
                  , o = {
                    type: this.fileType
                };
                if (1 === this.files.length) {
                    var n = this.files[0];
                    o.folderId = n.fileId,
                    o.folderName = r("specialName")(n.name, n.fileType),
                    o.folderIds = [o.folderId]
                } else {
                    o.folderId = this.currentFolder.fileId,
                    o.folderName = r("specialName")(this.currentFolder.name, this.currentFolder.fileType);
                    var f = _.groupBy(this.files, function(e) {
                        return e.isFolder ? "folder" : "file"
                    }
                    );
                    o.folderIds = _.pluck(f.folder, "fileId"),
                    o.fileIds = _.pluck(f.file, "fileId")
                }
                return this.linkId && (o.linkId = this.linkId),
                e.debug("download param: ", o),
                d.zipFiles(o, {
                    timeout: 6e4
                }).then(function(l) {
                    e.debug(i, "zip files result: ", l);
                    var r = {
                        ei: t.entId,
                        ui: t.userId,
                        path: l
                    };
                    t.linkId && (r.li = t.linkId),
                    t.downloadUrl = d.zipDownload + "?" + $.param(r),
                    s.resolve(t)
                }
                )["catch"](s.reject),
                s.promise
            }
        },
        t
    }
    var i = "DownloadBean::";
    angular.module("commons.models").service("DownloadBean", ["$log", "$q", "$filter", "resturl", e])
}
);
;define("app/support/models/file/UploadFile", function() {
    function e(e, t, s) {
        function r(e) {
            this.id = void 0,
            this.name = void 0,
            this.size = void 0,
            this.ext = void 0,
            this.status = void 0,
            this.statusText = void 0,
            this.fileType = void 0,
            this.queueFile = void 0,
            e && angular.extend(this, r.parse(e))
        }
        return r.parse = function(e) {
            return {
                id: e.id,
                name: e.name,
                size: e.size,
                statusText: e.statusText,
                ext: e.ext
            }
        }
        ,
        r.prototype = {
            constructor: r,
            checkUpload: function() {
                return t.file.checkUpload({
                    fileType: this.fileType,
                    folderId: this.parentId,
                    name: this.name,
                    size: this.size,
                    fileMd5: this.fileMd5
                })
            },
            isComplete: function() {
                return "success" === this.status || _.startsWith(this.status, "error")
            },
            isEntDisk: function() {
                return "sharedisk" === this.fileType
            },
            getStatusText: function() {
                switch (this.status) {
                case s.errorSameFile:
                    return "文件名重复";
                case s.errorNoSpace:
                    return "云盘空间不足";
                case s.errorFolderSpaceOver:
                    return "文件夹空间不足";
                case s.errorFolderDeleted:
                    return "文件夹已被删除";
                case s.errorNoPermission:
                    return "无权上传文件";
                case s.errorCheckToken:
                case s.error500:
                default:
                    return "网络错误"
                }
            }
        },
        r
    }
    angular.module("commons.models").service("UploadFile", ["$q", "NodeRest", "ErrorType", e])
}
);
;define("app/support/models/index", function(require) {
    require("app/support/models/commons/BasePager"),
    require("app/support/models/commons/EntService"),
    require("app/support/models/user/Enterprise"),
    require("app/support/models/user/User"),
    require("app/support/models/user/UserLoader"),
    require("app/support/models/user/LoginDataLoader"),
    require("app/support/models/user/UserPager"),
    require("app/support/models/user/Dept"),
    require("app/support/models/user/LoginBean"),
    require("app/support/models/file/EntLink"),
    require("app/support/models/file/BaseFile"),
    require("app/support/models/file/PersonFile"),
    require("app/support/models/file/Permission"),
    require("app/support/models/file/EntFile"),
    require("app/support/models/file/EntFileLoader"),
    require("app/support/models/file/EntFilePager"),
    require("app/support/models/file/PersonFileLoader"),
    require("app/support/models/file/Comment"),
    require("app/support/models/file/DownloadBean"),
    require("app/support/models/file/UploadFile")
}
);
;define("app/support/main", function(require) {
    seajs.devMode = -1 !== location.href.indexOf("?dev") ? !0 : !1,
    seajs.isPrivate = seajs.data.isPrivate,
    angular.module("commons.services", []),
    angular.module("commons.filters", []),
    angular.module("commons.directives", []),
    angular.module("commons.models", []),
    require("app/support/services/index"),
    require("app/support/filters/index"),
    require("app/support/directives/index"),
    require("app/support/models/index");
    var e = require("app/support/services/message");
    angular.module("commons.services").config(["$httpProvider", function(e) {
        e.defaults.headers.get || (e.defaults.headers.get = {}),
        e.defaults.headers.get["If-Modified-Since"] = "0"
    }
    ]),
    angular.module("commons.services").config(["$translateProvider", function(s) {
        e(s),
        s.uses("zh_CN")
    }
    ])
}
);
;define("app/support/filters/previewUrl", function() {
    angular.module("commons.filters").filter("previewUrl", ["constants", function(e) {
        return function(r) {
            return log.debug("filter: previewUrl: ", r),
            "folder" === r.type ? "#!" : e.getItemPreviewUrl(r)
        }
    }
    ])
}
);
;define("app/support/services/REST", function(require) {
    function o(o, r, n) {
        function a(e, t, n, a) {
            n && _.isFunction(n) && (n = {}),
            a && _.isFunction(a) && (a = null );
            var s = c(e, t, n, a && !_.isFunction(a) ? a : {})
              , p = r.defer();
            return o(s).success(i(t, n, p)).error(l(t, n, p)),
            p.promise
        }
        function l(o, e, t) {
            return function(r) {
                n.warn("[REST]-[", o, "]-[resp]: ", r, ", [data] ", e),
                t.reject("error500")
            }
        }
        function i(o, e, t) {
            return function(r) {
                var a = r;
                if (_.startsWith(r, "error"))
                    n.warn("[REST]-[" + o + "]-[resp]: " + r + ", Error happen!"),
                    t.reject(r);
                else if ("OK" === r)
                    n.info("[REST]-[" + o + "]-[resp]: ", r, ", [param] ", e),
                    t.resolve(r);
                else if (_.isString(r)) {
                    n.info("[REST]-[" + o + "]-[resp]: ", r, ", [param] ", e);
                    try {
                        a = JSON.parse(r),
                        t.resolve(a)
                    } catch (l) {
                        a = r,
                        t.reject(a),
                        n.warn("[ERR]-[REST]-[" + o + "] JSON parse error!")
                    }
                }
                t.resolve(a)
            }
        }
        function c(o, t, r, n) {
            return seajs.restsecret && _.include(o, "java") && e[t] && (o = d,
            t = e[t]),
            _.extend({
                url: o + t,
                method: "POST",
                headers: {
                    UT: window.cache ? cache.token : void 0,
                    "Content-Type": _.include(o, "/wt/node") ? "application/json; charset=UTF-8" : "text/plain; charset=UTF-8",
                    Accept: "text/plain;charset=UTF-8"
                },
                timeout: 6e4,
                data: r
            }, n || {})
        }
        function s() {
            return _.contains(["127.0.0.1", "localhost", "192.168.2.24"], location.host) ? "http://192.168.1.55/upload/single" : f + "/upload/single"
        }
        var p = location.protocol + "//" + location.host + "/wt/java"
          , d = location.protocol + "//" + location.host + "/wt/flex2"
          , u = location.protocol + "//" + location.host + "/wt/node"
          , f = "http://" + location.host
          , h = location.protocol + "//" + location.host + "/wt/fm"
          , v = "http://" + location.host + "/wt/fm"
          , U = {};
        return _.each(t, function(o, e) {
            _.each(o, function(o, t) {
                var r = p;
                "webUrl" === e || "phoneUrl" === e ? r = u : "fileMgrUrl" === e && (r = h),
                this[t] = _.partial(a, r, o)
            }
            , this)
        }
        , U),
        angular.extend({
            previewUrl: location.protocol + "//" + location.host + "/onlinedisk/",
            fdfsBaseUrl: location.protocol + "//" + location.host,
            flexService: p,
            createValidationCode: p + "/pub/createValidationCode",
            nodeFileDownload: u + "/v27/download/file",
            takePhotoUrl: f + "/upload/usericon",
            uploadLogoUrl: f + "/upload/entlogo",
            uploadUrl: s(),
            uploadSendFile: f + "/upload/send/file",
            zipDownload: v + "/sc/download/zipfile",
            getMediaStreamUrl: v + "/file/getMediaStream",
            excelParse: p + "/pub/user/parseImportUsers",
            excelDownloadUrl: u + "/file/download/excel",
            submitEntAuth: v + "/sc/tel/updateTelAuthInfo",
            execDownloadFile: u + "/v27/download/file"
        }, U)
    }
    var e = require("app/support/services/UrlEncode")
      , t = require("app/support/services/ServiceUrl");
    angular.module("commons.services").factory("REST", ["$http", "$q", "$log", o])
}
);
