webpackJsonp([1],{"6WZF":function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n=e("NYxO");a.a.use(n.a);var i=new n.a.Store({state:{userInfo:{}},getters:{getUserInfo:function(t){return t.userInfo}},mutations:{setUserInfo:function(t,s){t.userInfo=s}},actions:{setUserInfo:function(t,s){(0,t.commit)("setUserInfo",s)}}}),o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")({name:"App"},o,!1,function(t){e("f1L8")},null,null).exports,c=e("/ocq"),l=e("Gu7T"),u=e.n(l),v=e("mvHQ"),d=e.n(v),p=e("Dd8w"),_={data:function(){return{isLogin:!1}},computed:e.n(p)()({},Object(n.b)({userInfo:"getUserInfo"}))},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-info"},[t.userInfo.userId?t._e():e("router-link",{attrs:{to:{name:"Login",query:{redirect:encodeURIComponent(t.$route.path)}}}},[e("div",{staticClass:"login-no"},[e("i"),t._v(" "),e("span",[t._v("登录")])])]),t._v(" "),t.userInfo.userId?e("router-link",{attrs:{to:{name:"User",params:{loginname:t.userInfo.loginname}}}},[e("div",{staticClass:"login-yes"},[e("img",{staticClass:"avatar",attrs:{src:t.userInfo.avatar_url,alt:"avatar"}}),t._v(" "),e("span",{staticClass:"username"},[t._v(t._s(t.userInfo.loginname))]),t._v(" "),e("i")])]):t._e()],1)},staticRenderFns:[]},h={components:{userinfo:e("VU/8")(_,m,!1,null,null,null).exports}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"side-bar"}},[e("userinfo"),t._v(" "),e("div",{staticClass:"menu"},[e("router-link",{staticClass:"menu__item",attrs:{to:{name:"Topics",query:{tab:"all"}}}},[e("i",{staticClass:"iconfont icon-quanbu"}),t._v(" "),e("span",[t._v("全部")])]),t._v(" "),e("router-link",{staticClass:"menu__item",attrs:{to:{name:"Topics",query:{tab:"good"}}}},[e("i",{staticClass:"iconfont icon-hao"}),t._v(" "),e("span",[t._v("精华")])]),t._v(" "),e("router-link",{staticClass:"menu__item",attrs:{to:{name:"Topics",query:{tab:"share"}}}},[e("i",{staticClass:"iconfont icon-fenxiang"}),t._v(" "),e("span",[t._v("分享")])]),t._v(" "),e("router-link",{staticClass:"menu__item",attrs:{to:{name:"Topics",query:{tab:"ask"}}}},[e("i",{staticClass:"iconfont icon-wenda"}),t._v(" "),e("span",[t._v("问答")])]),t._v(" "),e("router-link",{staticClass:"menu__item",attrs:{to:{name:"Topics",query:{tab:"job"}}}},[e("i",{staticClass:"iconfont icon-zhaopin"}),t._v(" "),e("span",[t._v("招聘")])])],1),t._v(" "),e("div",{staticClass:"msg-about-box"},[e("router-link",{staticClass:"message",attrs:{to:{name:"Message"}}},[e("i",{staticClass:"iconfont icon-xiaoxi"}),t._v(" "),e("span",[t._v("消息")])]),t._v(" "),e("router-link",{staticClass:"about",attrs:{to:{name:"About"}}},[e("i",{staticClass:"iconfont icon-about"}),t._v(" "),e("span",[t._v("关于")])])],1)],1)},staticRenderFns:[]},g={components:{nvMenu:e("VU/8")(h,f,!1,null,null,null).exports},props:{headTxt:String},data:function(){return{isOpen:!1}},methods:{openMenu:function(){this.isOpen=!0},closeMenu:function(){this.isOpen=!1}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{class:{open:t.isOpen},attrs:{id:"hd"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"page-cover",on:{click:t.closeMenu}}),t._v(" "),e("div",{staticClass:"nv-bar"},[e("div",{staticClass:"nv-bar__menu-btn",on:{click:t.openMenu}}),t._v(" "),e("span",{staticClass:"nv-bar__txt"},[t._v(t._s(t.headTxt))]),t._v(" "),e("div",{staticClass:"nv-bar__add"},[e("router-link",{attrs:{to:"/add"}},[e("i",{staticClass:"iconfont add-icon"},[t._v("")])])],1)]),t._v(" "),e("nvMenu")],1)},staticRenderFns:[]},b=e("VU/8")(g,C,!1,null,null,null).exports,w={data:function(){return{show:!1}},mounted:function(){var t=this;window.addEventListener("scroll",function(){var s=document.body.scrollTop||document.documentElement.scrollTop;t.show=s>270})},methods:{toTop:function(){document.body.scrollTop?document.body.scrollTop=0:document.documentElement.scrollTop=0}}},y={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"iconfont icon-top",on:{click:this.toTop}},[this._v("\n  \n")])},staticRenderFns:[]};var T={components:{nvHead:b,backtotop:e("VU/8")(w,y,!1,function(t){e("6WZF")},null,null).exports},beforeRouteUpdate:function(t,s,e){this.$refs.head.isOpen=!1,this.serchKey.tab=t.query.tab,this.post=[],this.fetchData({tab:t.query.tab,page:1,limit:20,mdrender:!0}),e()},beforeRouteLeave:function(t,s,e){"Content"===t.name&&(window.sessionStorage.scrollTop=document.documentElement.scrollTop||document.body.scrollTop,window.sessionStorage.post=d()(this.post),window.sessionStorage.serchKey=d()(this.serchKey),window.sessionStorage.tab=s.query.tab||"all"),e()},beforeRouteEnter:function(t,s,e){"Content"!==s.name&&window.sessionStorage.tab&&(window.sessionStorage.removeItem("post"),window.sessionStorage.removeItem("searchKey"),window.sessionStorage.removeItem("tab")),e()},data:function(){return{loading:!1,post:[],error:null,serchKey:{tab:"all",page:1,limit:20,mdrender:!0}}},created:function(){this.$route.query&&this.$route.query.tab&&(this.serchKey.tab=this.$route.query.tab),window.sessionStorage.serchKey&&window.sessionStorage.tab===this.serchKey.tab?(this.post=JSON.parse(window.sessionStorage.post),this.serchKey=JSON.parse(window.sessionStorage.serchKey),this.$nextTick(function(){window.scrollTop=window.sessionStorage.scrollTop})):this.fetchData(this.serchKey)},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("scroll",t.$utils.throttle(t.getScrollData,300,1e3))})},methods:{fetchData:function(t){var s=this,e=t.tab,a=t.page,n=t.limit,i=t.mdrender;this.error=null,this.loading=!0,this.$api.get("topics",{tab:e,page:a,limit:n,mdrender:i},function(t){var e;s.loading=!1,s.scroll=!0,(e=s.post).push.apply(e,u()(t.data))},function(t){s.loading=!1,s.error=t})},getScrollData:function(){parseInt(document.documentElement.scrollHeight)-parseInt(document.documentElement.clientHeight||window.innerHeith||document.body.clientHeight,15)-parseInt(document.documentElement.scrollTop||document.body.scrollTop,15)<=200&&(this.serchKey.page++,this.fetchData(this.serchKey))}}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("nv-head",{ref:"head",attrs:{"head-txt":t.$utils.getTabInfo(t.serchKey.tab)}}),t._v(" "),e("div",{attrs:{id:"topics"}},[t.loading?e("div",{staticClass:"loading"}):t._e(),t._v(" "),t.error?e("div",{staticClass:"error"},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e(),t._v(" "),t.post?e("ul",{staticClass:"post"},t._l(t.post,function(s){return e("router-link",{key:s.id,attrs:{to:{name:"Content",params:{id:s.id}}}},[e("li",{staticClass:"post__item"},[e("div",{staticClass:"post__head"},[e("h3",{staticClass:"post__title"},[e("span",{staticClass:"post__tag",class:[s.tab,{top:s.top,good:s.good}]},[t._v("\n                "+t._s(t.$utils.getTagTxt(s.tab,s.top,s.good))+"\n              ")]),t._v(t._s(s.title)+"\n            ")])]),t._v(" "),e("div",{staticClass:"post__info"},[e("div",{staticClass:"author"},[e("img",{staticClass:"avatar",attrs:{src:s.author.avatar_url}}),t._v(" "),e("div",{staticClass:"logname-pubtime"},[e("p",{staticClass:"logname"},[t._v(t._s(s.author.loginname))]),t._v(" "),e("p",{staticClass:"pubtime"},[t._v(t._s(t.$utils.goodTime(s.create_at)))])])]),t._v(" "),e("div",{staticClass:"post__other"},[e("p",[e("span",{staticClass:"reply-count"},[t._v(t._s(s.reply_count))]),t._v("\n                /\n                "),e("span",{staticClass:"visit-count"},[t._v(t._s(s.visit_count))])]),t._v(" "),e("p",{staticClass:"last-replay-time"},[t._v(t._s(t.$utils.goodTime(s.last_reply_at)))])])])])])})):t._e()]),t._v(" "),e("backtotop")],1)},staticRenderFns:[]},x=e("VU/8")(T,k,!1,null,null,null).exports,$={components:{nvHead:b}},A={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"about"}},[s("nv-head",{ref:"head",attrs:{"head-txt":"关于"}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"about-info"},[e("div",{staticClass:"desc"},[e("h3",[t._v("关于项目")]),t._v(" "),e("p",[t._v("该项目是以cnode官方提供的api为基础，用vue2写的webapp")])]),t._v(" "),e("div",{staticClass:"address"},[e("h3",[t._v("源码地址")]),t._v(" "),e("a",{attrs:{href:"https://github.com/HunterFront/vue-mycnode"}},[t._v("https://github.com/HunterFront/vue-mycnode")])]),t._v(" "),e("div",{staticClass:"version"},[e("h3",[t._v("Vue版本")]),t._v(" "),e("p",[t._v("vue 2.9.3")])])])}]},E=e("VU/8")($,A,!1,null,null,null).exports,U={components:{nvHead:b},props:["id"],data:function(){return{topic:null,loading:!1,error:null}},created:function(){this.fetchData(this.id)},methods:{fetchData:function(t){var s=this;this.error=this.topic=null,this.loading=!0,this.$api.get("topic/"+t,null,function(t){s.loading=!1,s.topic=t.data},function(t){s.loading=!1,s.error=t})}}},I={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"content"}},[t.loading?e("div",{staticClass:"loading"}):t._e(),t._v(" "),t.error?e("div",{staticClass:"error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),e("nv-head",{attrs:{"head-txt":"文章"}}),t._v(" "),t.topic?e("div",{staticClass:"article"},[e("h2",{staticClass:"article__title"},[t._v("\n      "+t._s(t.topic.title)+"\n    ")]),t._v(" "),e("div",{staticClass:"article__info"},[e("div",{staticClass:"author"},[e("img",{staticClass:"avatar",attrs:{src:t.topic.author.avatar_url}}),t._v(" "),e("div",{staticClass:"logname-pubtime"},[e("p",{staticClass:"logname"},[t._v(t._s(t.topic.author.loginname))]),t._v(" "),e("p",{staticClass:"pubtime"},[t._v("发布于:"+t._s(t.$utils.goodTime(t.topic.create_at)))])])]),t._v(" "),e("div",{staticClass:"other"},[e("p",{staticClass:"tag",class:[t.topic.tab,{top:t.topic.top,good:t.topic.good}]},[t._v(t._s(t.$utils.getTagTxt(t.topic.tab,t.topic.top,t.topic.good)))]),t._v(" "),e("p",{staticClass:"visit-count"},[t._v(t._s(t.topic.visit_count)+"次浏览")])])]),t._v(" "),e("div",{staticClass:"article__content markdown-body",domProps:{innerHTML:t._s(t.topic.content)}}),t._v(" "),e("div",{staticClass:"reply-box"},[e("div",{staticClass:"reply-box__count"},[e("span",{staticClass:"count"},[t._v(t._s(t.topic.reply_count))]),t._v(" "),e("span",{staticClass:"txt"},[t._v("回复")])]),t._v(" "),e("ul",{staticClass:"reply-list"},t._l(t.topic.replies,function(s){return e("li",{key:s.id,staticClass:"reply-item"},[e("div",{staticClass:"reply-info"},[e("div",{staticClass:"author"},[e("router-link",{attrs:{to:{name:"User",params:{loginname:s.author.loginname}}}},[e("img",{staticClass:"avatar avatar--m",attrs:{src:s.author.avatar_url}})]),t._v(" "),e("div",{staticClass:"logname-pubtime"},[e("p",{staticClass:"logname"},[t._v(t._s(s.author.loginname))]),t._v(" "),e("p",{staticClass:"pubtime"},[t._v("发布于:"+t._s(t.$utils.goodTime(s.create_at)))])])],1),t._v(" "),e("div",{staticClass:"like-replyto"},[e("span",{staticClass:"like"},[e("i",{staticClass:"icon iconfont"},[t._v("")]),t._v(" "),e("span",{staticClass:"like-count"},[t._v(t._s(s.ups.length))])]),t._v(" "),e("span",{staticClass:"replyto icon iconfont"},[t._v("")])])]),t._v(" "),e("div",{staticClass:"reply-content markdown-body",domProps:{innerHTML:t._s(s.content)}})])}))])]):t._e()],1)},staticRenderFns:[]},S=e("VU/8")(U,I,!1,null,null,null).exports,D={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"alert",class:{on:this.isOn}},[s("span",{staticClass:"txt"},[this._v(this._s(this.alertTxt))])])},staticRenderFns:[]},H={components:{nvHeader:b,alert:e("VU/8")({props:["alertTxt","isOn"]},D,!1,null,null,null).exports},data:function(){return{accesstoken:"",isOn:!1,alertTxt:""}},methods:{login:function(t){var s=this;if(""===t)return!1;this.$api.post("accesstoken",{accesstoken:t},function(e){var a={loginname:e.loginname,avatar_url:e.avatar_url,userId:e.id,accesstoken:t};window.sessionStorage.user=d()(a),s.$store.dispatch("setUserInfo",a);var n=decodeURIComponent(s.$route.query.redirect||"/");s.$router.push({path:n})})}}},O={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"login"}},[e("nv-header",{attrs:{"head-txt":"登录"}}),t._v(" "),e("alert",{attrs:{"alert-txt":t.alertTxt,"is-on":t.isOn}}),t._v(" "),e("div",{staticClass:"loginbar"},[e("div",{staticClass:"loginbar__input"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.accesstoken,expression:"accesstoken",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"access token"},domProps:{value:t.accesstoken},on:{input:function(s){s.target.composing||(t.accesstoken=s.target.value.trim())},blur:function(s){t.$forceUpdate()}}}),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("button",{staticClass:"loginbar__button",on:{click:function(s){t.login(t.accesstoken)}}},[t._v("登录")])])],1)},staticRenderFns:[]},R=e("VU/8")(H,O,!1,null,null,null).exports,q={components:{nvHeader:b},data:function(){return{user:null,tabA:!0,tabB:!1}},computed:{isActiveA:function(){return this.tabA&&!this.tabB},isActiveB:function(){return this.tabB&&!this.tabA}},methods:{getUserDetail:function(){var t=this,s=this.$route.params.loginname;this.$api.get("user/"+s,null,function(s){t.user=s.data})}},created:function(){this.getUserDetail()}},B={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"pageuser"}},[e("nv-header",{attrs:{"head-txt":"用户信息"}}),t._v(" "),t.user?e("div",{staticClass:"user"},[e("div",{staticClass:"wraper"},[e("img",{staticClass:"avatar",attrs:{src:t.user.avatar_url}}),t._v(" "),e("div",{staticClass:"loginname"},[t._v(t._s(t.user.loginname))]),t._v(" "),e("div",{staticClass:"score"},[t._v("积分:"+t._s(t.user.score))])]),t._v(" "),e("div",{staticClass:"tabbox"},[e("div",{staticClass:"tab"},[e("a",{class:{active:t.isActiveA},on:{click:function(s){s.preventDefault(),t.tabA=!0,t.tabB=!1}}},[t._v("最新发布")]),t._v(" "),e("a",{class:{active:t.isActiveB},on:{click:function(s){s.preventDefault(),t.tabB=!0,t.tabA=!1}}},[t._v("最近回复")])]),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.isActiveA,expression:"isActiveA"}],staticClass:"recent-topics"},t._l(t.user.recent_topics,function(s){return e("router-link",{key:s.id,attrs:{to:{name:"Content",params:{id:s.id}}}},[e("li",{staticClass:"recent-topics__item"},[e("img",{staticClass:"avatar",attrs:{src:s.author.avatar_url,alt:""}}),t._v(" "),e("div",{staticClass:"bar"},[e("h3",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"logname-pubtime"},[e("span",{staticClass:"logname"},[t._v(t._s(s.author.loginname))]),t._v(" "),e("span",{staticClass:"pubtime"},[t._v(t._s(t.$utils.goodTime(s.last_reply_at)))])])])])])})),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.isActiveB,expression:"isActiveB"}],staticClass:"recent-replies"},t._l(t.user.recent_replies,function(s){return e("router-link",{key:s.id,attrs:{to:{name:"Content",params:{id:s.id}}}},[e("li",{staticClass:"recent-replies__item"},[e("img",{staticClass:"avatar",attrs:{src:s.author.avatar_url,alt:""}}),t._v(" "),e("div",{staticClass:"bar"},[e("h3",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"logname-pubtime"},[e("span",{staticClass:"logname"},[t._v(t._s(s.author.loginname))]),t._v(" "),e("span",{staticClass:"pubtime"},[t._v(t._s(t.$utils.goodTime(s.last_reply_at)))])])])])])}))])]):t._e()],1)},staticRenderFns:[]},F=e("VU/8")(q,B,!1,null,null,null).exports,L={mounted:function(){var t=this;setTimeout(function(){t.$router.push({name:"Topics"})},2e3)}},M={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("img",{staticClass:"index",attrs:{src:"static/image/index.png",alt:""}})])}]};var V=e("VU/8")(L,M,!1,function(t){e("ttpm")},null,null).exports,K={components:{nvHead:b},data:function(){return{tabA:!0,tabB:!1,messages:null}},computed:{isActiveA:function(){return this.tabA&&!this.tabB},isActiveB:function(){return this.tabB&&!this.tabA}},mounted:function(){this.getMessages()},methods:{getMessages:function(){var t=this,s=this.$store.getters.getUserInfo.accesstoken;this.$api.get("messages",{accesstoken:s},function(s){t.messages=s.data})}}},N={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"msg-box"}},[e("nv-head",{attrs:{"head-txt":"消息"}}),t._v(" "),e("div",{staticClass:"msg"},[e("div",{staticClass:"tabbox"},[e("div",{staticClass:"tab"},[e("a",{class:{active:t.isActiveA},on:{click:function(s){s.preventDefault(),t.tabA=!0,t.tabB=!1}}},[t._v("已读消息")]),t._v(" "),e("a",{class:{active:t.isActiveB},on:{click:function(s){s.preventDefault(),t.tabB=!0,t.tabA=!1}}},[t._v("未读消息")])]),t._v(" "),t.messages?e("ul",{directives:[{name:"show",rawName:"v-show",value:t.isActiveA,expression:"isActiveA"}],staticClass:"has-read"},t._l(t.messages.has_read_messages,function(s){return e("li",{key:s.id},[e("div",{staticClass:"reply-user-box"},[e("div",{staticClass:"reply-user"},[e("img",{staticClass:"avatar",attrs:{src:s.author.avatar_url,alt:""}}),t._v(" "),e("span",{staticClass:"logname"},[t._v(t._s(s.author.loginname))]),t._v("\n              在恢复中@了您\n            ")]),t._v(" "),e("div",{staticClass:"reply-time"},[t._v(t._s(t.$utils.goodTime(s.create_at)))])]),t._v(" "),e("div",{staticClass:"reply-content",domProps:{innerHTML:t._s(s.reply.content)}}),t._v(" "),e("router-link",{attrs:{to:{name:"Content",params:{id:s.topic.id}}}},[e("h3",{staticClass:"reply-topic"},[t._v(t._s(s.topic.title))])])],1)})):t._e(),t._v(" "),t.messages?e("ul",{directives:[{name:"show",rawName:"v-show",value:t.isActiveB,expression:"isActiveB"}],staticClass:"hasnot-read"},t._l(t.messages.hasnot_read_messages,function(s){return e("li",{key:s.id},[e("div",{staticClass:"reply-user-box"},[e("div",{staticClass:"reply-user"},[e("img",{staticClass:"avatar",attrs:{src:s.author.avatar_url,alt:""}}),t._v(" "),e("span",{staticClass:"logname"},[t._v(t._s(s.author.loginname))]),t._v("\n              在恢复中@了您\n            ")]),t._v(" "),e("div",{staticClass:"reply-time"},[t._v(t._s(t.$utils.goodTime(s.create_at)))])]),t._v(" "),e("div",{staticClass:"reply-content",domProps:{innerHTML:t._s(s.reply.content)}}),t._v(" "),e("router-link",{attrs:{to:{name:"Content",params:{id:s.topic.id}}}},[e("h3",{staticClass:"reply-topic"},[t._v(t._s(s.topic.title))])])],1)})):t._e()])])],1)},staticRenderFns:[]},P=e("VU/8")(K,N,!1,null,null,null).exports,j={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"add"}},[this._v("\n  add page\n")])},staticRenderFns:[]},J=e("VU/8")(null,j,!1,null,null,null).exports;a.a.use(c.a);var W=new c.a({routes:[{path:"/",name:"Index",component:V},{path:"/topics",name:"Topics",component:x},{path:"/about",name:"About",component:E},{path:"/topic/:id",name:"Content",component:S,props:!0},{path:"/login",name:"Login",component:R},{path:"/user/:loginname",name:"User",component:F},{path:"/message",name:"Message",component:P,meta:{requiresAuth:!0}},{path:"/add",name:"Add",component:J,meta:{requiresAuth:!0}}]}),G={goodTime:function(t){var s=(new Date).getTime()-new Date(t).getTime(),e=s/31104e6,a=s/2592e6,n=s/6048e5,i=s/864e5,o=s/36e5,r=s/6e4;return e>=1?~~e+" 年前":a>=1?~~a+" 个月前":n>=1?~~n+" 周前":i>=1?~~i+" 天前":o>=1?~~o+" 个小时前":r>=1?~~r+" 分钟前":"刚刚"},getTagTxt:function(t,s,e){var a="";if(s)a="置顶";else if(e)a="精华";else switch(t){case"share":a="分享";break;case"ask":a="问答";break;case"job":a="招聘"}return a},getTabInfo:function(t){var s="";switch(t){case"all":s="全部";break;case"good":s="精华";break;case"ask":s="问答";break;case"job":s="招聘";break;case"share":s="分享"}return s},throttle:function(t,s,e){var a=void 0,n=new Date;return function(){var i=arguments,o=new Date;clearTimeout(a),o-n>=e?(t.apply(this,i),n=o):a=setTimeout(t,s)}}},Z="https://cnodejs.org/api/v1",z=e("mtWM");function Q(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function Y(t,s,e,a,n){e&&(e=function t(s){for(var e in s)null===s[e]&&delete s[e],"string"===Q(s[e])?s[e]=s[e].trim():"object"===Q(s[e])?s[e]=t(s[e]):"array"===Q(s[e])&&(s[e]=t(s[e]));return s}(e)),z({method:t,url:s,data:"POST"===t||"PUT"===t?e:null,params:"GET"===t||"DELETE"===t?e:null,baseURL:Z,withCredentials:!1}).then(function(t){!0===t.data.success?a&&a(t.data):n?n(t.data):window.alert("error: "+d()(t.data))}).catch(function(t){var s=t.response;t&&window.alert("api error, HTTP CODE: "+s.status)})}var X={get:function(t,s,e,a){return Y("GET",t,s,e,a)},post:function(t,s,e,a){return Y("POST",t,s,e,a)},put:function(t,s,e,a){return Y("PUT",t,s,e,a)},delete:function(t,s,e,a){return Y("DELETE",t,s,e,a)}};a.a.prototype.$utils=G,a.a.prototype.$api=X,a.a.config.productionTip=!1,window.sessionStorage.user&&i.dispatch("setUserInfo",JSON.parse(window.sessionStorage.user)),W.beforeEach(function(t,s,e){t.matched.some(function(t){return t.meta.requiresAuth})?i.state.userInfo.userId?e():e({path:"/login",query:{redirect:t.fullPath}}):e()}),new a.a({el:"#app",store:i,router:W,components:{App:r},template:"<App/>"})},f1L8:function(t,s){},ttpm:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.dbdd6a99adbbadbff494.js.map