(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-930e6538"],{"097c":function(t,i,s){},"3f59":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"sp"},[s("tabbar"),t._l(t.sp,(function(i){return s("div",{key:i.id},[s("div",{staticClass:"box"},[s("div",{staticClass:"big_img"},[s("div",{staticClass:"big_img2"},[s("div",[s("img",{staticStyle:{width:"350px",height:"350px"},attrs:{src:t.src2}})]),s("div",{staticClass:"box_bottom"},t._l(t.sp[0].imgarr,(function(i){return s("div",{key:i.id,staticClass:"x_tp"},[s("img",{staticStyle:{cursor:"pointer"},attrs:{src:i.src,alt:""},on:{click:function(s){return t.chang_img(i.id)}}})])})),0)]),s("div",[s("div",{staticClass:"wz_title"},[t._v(t._s(i.title))]),s("div",{staticStyle:{border:"1px solid black"}}),s("div",{staticClass:"wz"},[s("span",{staticStyle:{color:"#828282"}},[t._v("价格：")]),s("span",{staticStyle:{"font-szie":"30px",color:"#2b2b2b","font-weight":"900"}},[t._v(" ￥"+t._s(i.price))])]),s("div",{staticClass:"wz"},[s("span",{staticStyle:{color:"#828282"}},[t._v("编号：")]),t._v(t._s(i.number)+" ")]),s("div",{staticClass:"wz"},[s("span",{staticStyle:{color:"#828282"}},[t._v("类型：")]),t._v(t._s(i.type)+" ")]),s("div",{staticClass:"wz"},[s("span",{staticStyle:{color:"#828282"}},[t._v("规格：")]),t._v(t._s(i.norm)+" ")]),s("div",{staticClass:"wz"},[s("span",{staticStyle:{color:"#828282"}},[t._v("品牌：")]),t._v(t._s(i.pp)+" ")]),s("div",{staticClass:"wz",staticStyle:{color:"black","margin-top":"20px"}},[t._v(" 想要预约或者购买茶业可以点击上方导航栏的微信客服，扫描二维码添加微信客服 ")])])])]),t._l(t.sp,(function(i){return s("div",{key:i.id+"a",staticClass:"btn"},[s("div",[s("el-button",{on:{click:function(i){return t.last(6)}}},[t._v("上一页")])],1),s("div",[s("el-button",{on:{click:function(i){return t.next(8)}}},[t._v("下一页")])],1)])})),s("div",{staticClass:"fgx"},[s("el-divider",[s("span",{staticStyle:{"font-size":"30px"}},[t._v("商品详情")])])],1),s("div",{staticClass:"b"},[s("el-image",{staticStyle:{width:"600px"},attrs:{src:i.b_img,"preview-src-list":i.srcList}})],1)],2)}))],2)},c=[],g=s("d6fb"),a={components:{Tabbar:g["a"]},name:"Sp",data:function(){return{id:"",src2:"",sp:[{id:1,title:"龙蟠",price:"368.00",number:"A011",type:"普洱茶",norm:"357g",pp:"同记茶业",b_img:"https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/006D2oSpgy1h1808beekzj30ai6bkgur.jpg",srcList:["https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/006D2oSpgy1h1808beekzj30ai6bkgur.jpg"],imgarr:[{id:1,src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/006D2oSpgy1h1808jsxqgj301o01owe9.jpg",src2:"https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/006D2oSpgy1h1808yqhusj30b40b4aay.jpg"},{id:2,src:"https://image.baidu.com/search/down?url=https://tva4.sinaimg.cn/large/006D2oSpgy1h1808k8g8ij301o01oq2p.jpg",src2:"https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/006D2oSpgy1h1808yuw65j30m80m8gop.jpg"},{id:3,src:"https://image.baidu.com/search/down?url=https://tva4.sinaimg.cn/large/006D2oSpgy1h1808jmm9aj301o01ogle.jpg",src2:"https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/006D2oSpgy1h1808yl8mgj30m80m877m.jpg"}]}]}},methods:{get_id:function(t){this.id=this.$route.query.id,document.title=this.sp[0].title,this.src2=this.sp[0].imgarr[0].src2},chang_img:function(t){this.src2=this.sp[0].imgarr[t-1].src2},last:function(t){this.$router.push("/sp_"+t+"_p?id="+t),this.get_id()},next:function(t){this.$router.push("/sp_"+t+"_p?id="+t),this.get_id()}},created:function(){this.get_id()},mounted:function(){}},n=a,A=(s("5557"),s("2877")),o=Object(A["a"])(n,e,c,!1,null,null,null);i["default"]=o.exports},4226:function(t,i,s){"use strict";s("097c")},5557:function(t,i,s){"use strict";s("b61d")},b61d:function(t,i,s){},d6fb:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"tabbar"},[s("div",{staticClass:"top_nav"},[s("div",{staticClass:"top_box"},[s("div",{staticClass:"logo"},[s("van-image",{staticStyle:{cursor:"pointer"},attrs:{round:"",width:"0.8rem",height:"0.8rem",src:t.logo_img},on:{click:function(i){return t.logo()}}})],1),s("div",{staticClass:"nav"},[s("el-menu",{staticClass:"el-menu-demo",staticStyle:{"font-family":"'微软雅黑'"},attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#fff","text-color":"#000","active-text-color":"#FF7F24"},on:{select:t.handleSelect}},[s("el-menu-item",{attrs:{index:"1"}},[s("span",{staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v("首页")])]),s("el-menu-item",{attrs:{index:"2"}},[s("span",{staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v("产品")])]),s("el-menu-item",{attrs:{index:"3"}},[s("span",{staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v("行业资讯")])]),s("el-menu-item",{attrs:{index:"4"}},[s("span",{staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v("品牌故事")])]),s("el-menu-item",{attrs:{index:"5"}},[s("span",{staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v("加人我们")])]),s("el-menu-item",{on:{click:t.ewm1}},[s("span",{staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v("手机端")])]),s("el-menu-item",{on:{click:t.ewm2}},[s("span",{staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v("微信客服")])])],1)],1)])]),s("van-overlay",{attrs:{show:t.show},on:{click:function(i){t.show=!1}}},[s("div",{staticClass:"wrapper",on:{click:[function(i){t.show=!1},function(t){t.stopPropagation()}]}},[s("div",{staticClass:"ewm"},[s("div",{staticStyle:{"font-size":"20px",color:"white"}},[t._v("手机端网址浏览二维码")]),s("div",[s("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:t.h5_ewm,alt:""}})])])])]),s("van-overlay",{attrs:{show:t.show2},on:{click:function(i){t.show2=!1}}},[s("div",{staticClass:"wrapper",on:{click:[function(i){t.show2=!1},function(t){t.stopPropagation()}]}},[s("div",{staticClass:"ewm"},[s("div",{staticStyle:{"font-size":"20px",color:"white"}},[t._v("微信客服二维码")]),s("div",[s("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:t.wx_ewm,alt:""}})])])])])],1)},c=[],g={name:"Tabbar",data:function(){return{show:!1,show2:!1,activeIndex:"",logo_img:"https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/006D2oSpgy1h5d8trektlj30hs0hs0tl.jpg",h5_ewm:"data:image/png;base64,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",wx_ewm:"https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/006D2oSpgy1h5d8zxpkm0j30ap0apwgp.jpg"}},created:function(){this.active()},methods:{logo:function(){this.$router.push("/")},active:function(){this.activeIndex=this.$route.meta.active},handleSelect:function(t,i){"1"==t&&this.$router.push("/"),"2"==t&&this.$router.push("/commodity_p"),"3"==t&&this.$router.push("/information_p"),"4"==t&&this.$router.push("/story_p"),"5"==t&&this.$router.push("/addus_p")},ewm1:function(){this.show=!this.show},ewm2:function(){this.show2=!this.show2}}},a=g,n=(s("4226"),s("2877")),A=Object(n["a"])(a,e,c,!1,null,null,null);i["a"]=A.exports}}]);
//# sourceMappingURL=chunk-930e6538.45275700.js.map