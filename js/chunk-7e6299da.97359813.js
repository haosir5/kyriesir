(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e6299da"],{"1a9f":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"navbar"},[s("van-nav-bar",{attrs:{title:t.text,"left-text":"返回","right-text":"分享","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),s("van-share-sheet",{attrs:{title:"立即分享给好友",options:t.options},on:{select:t.onSelect},model:{value:t.showShare,callback:function(i){t.showShare=i},expression:"showShare"}}),s("van-overlay",{attrs:{show:t.show},on:{click:function(i){t.show=!1}}},[s("div",{staticClass:"overlay_box"},[s("div",{staticClass:"overlay_con"},[s("div",[s("div",{staticClass:"overlay_wz"},[t._v("扫描二维码进入微信客服")]),s("div",{staticClass:"overlay_wz"},[t._v("进行预约和咨询")])]),s("div",[s("img",{staticStyle:{width:"10rem",height:"10rem"},attrs:{src:t.imgUrlarr.src,alt:""}})])])])])],1)},e=[],c=(s("b0c0"),s("d399")),n={name:"navbar",data:function(){return{text:"",imgUrlarr:{src:"https://tvax2.sinaimg.cn/large/006D2oSpgy1h5d8zxpkm0j30ap0apwgp.jpg"},showShare:!1,show:!1,options:[{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"},{name:"复制链接",icon:"link"},{name:"客服二维码",icon:"qrcode"}]}},methods:{get_text:function(){this.text=this.$route.query.text},onClickLeft:function(){var t=this.$route.path;window.location.href;1==t.indexOf("information")&&this.$router.push("/index"),1==t.indexOf("story")&&this.$router.push("/index"),1==t.indexOf("addus")&&this.$router.push("/index"),1==t.indexOf("dy")&&this.$router.push("/index"),1==t.indexOf("wz_")&&this.$router.push("/information"),1==t.indexOf("sp")&&this.$router.push("/index")},onClickRight:function(){this.showShare=!0},copy:function(t){var i=document.createElement("input");i.value=t,document.body.appendChild(i),i.select(),document.execCommand("Copy"),this.$message.success("复制成功"),i.remove()},onSelect:function(t){if(this.showShare=!1,"客服二维码"==t.name&&(Object(c["a"])("已经生成"+t.name),this.show=!0),"复制链接"==t.name){Object(c["a"])("快去微信分享给好友吧~"),this.show2=!0;var i=window.location.href;console.log(window.location.href),this.copy(i)}"QQ"==t.name&&(Object(c["a"])("正在前往QQ空间分享"),window.location.href="http://connect.qq.com/widget/shareqq/index.html?url="+this.Url+"&sharesource=qzone&title=装修找我们&pics=你的分享图片地址&summary=你的分享描述&desc=你的分享简述"),"微博"==t.name&&(Object(c["a"])("正在前往微博分享"),window.location.href="http://service.weibo.com/share/share.php?url="+this.Url+"&sharesource=weibo&title=装修找我们&pic=你的分享图片&appkey=你的key，需要在新浪微博开放平台中申请")}},created:function(){this.get_text()}},o=n,r=(s("ea22"),s("2877")),l=Object(r["a"])(o,a,e,!1,null,"20e6cc7e",null);i["a"]=l.exports},"3f0d":function(t,i,s){"use strict";s("ac89")},"5c84":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"sp"},[s("navbar"),t._l(t.sp,(function(i){return s("div",{key:i.id},[s("div",{staticClass:"box"},[s("div",{staticClass:"wz_title"},[t._v(t._s(i.title))]),s("div",{staticClass:"big_img"},[s("div",{staticClass:"big_img2"},[s("div",[s("img",{staticStyle:{width:"350px",height:"350px"},attrs:{src:t.src2}})]),s("div",{staticClass:"box_bottom"},t._l(t.sp[0].imgarr,(function(i){return s("div",{key:i.id,staticClass:"x_tp"},[s("img",{staticStyle:{cursor:"pointer"},attrs:{src:i.src,alt:""},on:{click:function(s){return t.chang_img(i.id)}}})])})),0)])])]),s("div",{staticClass:"wz_top"},[s("div",{staticStyle:{border:"1px solid black"}}),s("div",{staticClass:"wz"},[s("span",{staticStyle:{color:"#828282"}},[t._v("价格：")]),s("span",{staticStyle:{"font-szie":"30px",color:"#2b2b2b","font-weight":"900"}},[t._v(" ￥"+t._s(i.price))])]),s("div",{staticClass:"wz"},[s("span",{staticStyle:{color:"#828282"}},[t._v("编号：")]),t._v(t._s(i.number)+" ")]),s("div",{staticClass:"wz"},[s("span",{staticStyle:{color:"#828282"}},[t._v("类型：")]),t._v(t._s(i.type)+" ")]),s("div",{staticClass:"wz"},[s("span",{staticStyle:{color:"#828282"}},[t._v("规格：")]),t._v(t._s(i.norm)+" ")]),s("div",{staticClass:"wz"},[s("span",{staticStyle:{color:"#828282"}},[t._v("品牌：")]),t._v(t._s(i.pp)+" ")]),s("div",{staticClass:"wz",staticStyle:{color:"black","margin-top":"20px"}},[t._v(" 想要预约或者购买茶叶可以点击右上角的分享，点击客服二维码，扫描二维码添加微信客服 ")])]),t._l(t.sp,(function(i){return s("div",{key:i.id+"a",staticClass:"btn"},[s("div",[s("el-button",{on:{click:function(i){return t.last(11)}}},[t._v("上一页")])],1)])})),s("div",{staticClass:"fgx"},[s("el-divider",[s("span",{staticStyle:{"font-size":"15px"}},[t._v("商品详情")])])],1),s("div",{staticClass:"b"},[s("el-image",{staticStyle:{width:"600px"},attrs:{src:i.b_img}})],1)],2)}))],2)},e=[],c=s("1a9f"),n={components:{Navbar:c["a"]},name:"Sp",data:function(){return{id:"",src2:"",sp:[{id:1,title:"浓情邦崴",price:"1739.00",number:"L6",type:"普洱茶",norm:"357g",pp:"同记茶业",b_img:"https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/006D2oSpgy1h180hqxz2aj30996bkakn.jpg",srcList:["https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/006D2oSpgy1h180hqxz2aj30996bkakn.jpg"],imgarr:[{id:1,src:"https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/006D2oSpgy1h180hwfrddj301o01omwx.jpg",src2:"https://image.baidu.com/search/down?url=https://tva3.sinaimg.cn/large/006D2oSpgy1h180icvx24j30b40b474x.jpg"},{id:2,src:"https://image.baidu.com/search/down?url=https://tva4.sinaimg.cn/large/006D2oSpgy1h180hwl9j5j301o01oq2p.jpg",src2:"https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/006D2oSpgy1h180iceaisj30m80m8q58.jpg"},{id:3,src:"https://image.baidu.com/search/down?url=https://tva4.sinaimg.cn/large/006D2oSpgy1h180hwr1u1j301o01o741.jpg",src2:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/006D2oSpgy1h180icj7xaj30m80m8abi.jpg"},{id:4,src:"https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/006D2oSpgy1h180hwzdsdj301o01odfl.jpg",src2:"https://image.baidu.com/search/down?url=https://tva4.sinaimg.cn/large/006D2oSpgy1h180icp7m7j30m80m8q4g.jpg"}]}]}},methods:{get_id:function(t){this.id=this.$route.query.id,document.title=this.sp[0].title,this.src2=this.sp[0].imgarr[0].src2},chang_img:function(t){this.src2=this.sp[0].imgarr[t-1].src2},last:function(t){this.$router.push("/sp_"+t+"?id="+t),this.get_id()}},created:function(){this.get_id()},mounted:function(){}},o=n,r=(s("3f0d"),s("2877")),l=Object(r["a"])(o,a,e,!1,null,null,null);i["default"]=l.exports},ac89:function(t,i,s){},d3ac:function(t,i,s){},ea22:function(t,i,s){"use strict";s("d3ac")}}]);
//# sourceMappingURL=chunk-7e6299da.97359813.js.map