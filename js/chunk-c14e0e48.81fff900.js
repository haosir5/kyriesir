(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c14e0e48"],{"1a9f":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"navbar"},[s("van-nav-bar",{attrs:{title:t.text,"left-text":"返回","right-text":"分享","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),s("van-share-sheet",{attrs:{title:"立即分享给好友",options:t.options},on:{select:t.onSelect},model:{value:t.showShare,callback:function(i){t.showShare=i},expression:"showShare"}}),s("van-overlay",{attrs:{show:t.show},on:{click:function(i){t.show=!1}}},[s("div",{staticClass:"overlay_box"},[s("div",{staticClass:"overlay_con"},[s("div",[s("div",{staticClass:"overlay_wz"},[t._v("扫描二维码进入微信客服")]),s("div",{staticClass:"overlay_wz"},[t._v("进行预约和咨询")])]),s("div",[s("img",{staticStyle:{width:"10rem",height:"10rem"},attrs:{src:t.imgUrlarr.src,alt:""}})])])])])],1)},e=[],n=(s("b0c0"),s("d399")),c={name:"navbar",data:function(){return{text:"",imgUrlarr:{src:"https://tvax2.sinaimg.cn/large/006D2oSpgy1h5d8zxpkm0j30ap0apwgp.jpg"},showShare:!1,show:!1,options:[{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"},{name:"复制链接",icon:"link"},{name:"客服二维码",icon:"qrcode"}]}},methods:{get_text:function(){this.text=this.$route.query.text},onClickLeft:function(){var t=this.$route.path;window.location.href;1==t.indexOf("information")&&this.$router.push("/index"),1==t.indexOf("story")&&this.$router.push("/index"),1==t.indexOf("addus")&&this.$router.push("/index"),1==t.indexOf("dy")&&this.$router.push("/index"),1==t.indexOf("wz_")&&this.$router.push("/information"),1==t.indexOf("sp")&&this.$router.push("/index")},onClickRight:function(){this.showShare=!0},copy:function(t){var i=document.createElement("input");i.value=t,document.body.appendChild(i),i.select(),document.execCommand("Copy"),this.$message.success("复制成功"),i.remove()},onSelect:function(t){if(this.showShare=!1,"客服二维码"==t.name&&(Object(n["a"])("已经生成"+t.name),this.show=!0),"复制链接"==t.name){Object(n["a"])("快去微信分享给好友吧~"),this.show2=!0;var i=window.location.href;console.log(window.location.href),this.copy(i)}"QQ"==t.name&&(Object(n["a"])("正在前往QQ空间分享"),window.location.href="http://connect.qq.com/widget/shareqq/index.html?url="+this.Url+"&sharesource=qzone&title=装修找我们&pics=你的分享图片地址&summary=你的分享描述&desc=你的分享简述"),"微博"==t.name&&(Object(n["a"])("正在前往微博分享"),window.location.href="http://service.weibo.com/share/share.php?url="+this.Url+"&sharesource=weibo&title=装修找我们&pic=你的分享图片&appkey=你的key，需要在新浪微博开放平台中申请")}},created:function(){this.get_text()}},o=c,r=(s("ea22"),s("2877")),l=Object(r["a"])(o,a,e,!1,null,"20e6cc7e",null);i["a"]=l.exports},"2b31":function(t,i,s){"use strict";s("ed7c")},aeaa:function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"wz_3"},[s("navbar"),t._l(t.wz,(function(i){return s("div",{key:i.id,staticClass:"all_box"},[s("div",{staticClass:"title_top"},[t._v(" "+t._s(i.title_top)+" ")]),s("div",{staticClass:"l_title"},[s("div",{staticClass:"time"},[t._v("发表时间:"+t._s(i.time_top))]),s("div",{staticClass:"man"},[t._v("作者:"+t._s(i.man))])]),s("div",{staticClass:"con"},[s("div",{staticClass:"wz"},[t._v(" 普洱茶是我国十大名茶之一，从三国时的“武侯遗种”到《红楼梦》中的“女儿茶”，几经沧桑轮回，若一个目睹人间百态的老者，经历风风雨雨，建立了深厚的历史文化，那一句“越陈越好”，也是人们对普洱文化的美誉。 ")]),s("div",{staticClass:"wz"},[t._v("同记茶业继同记易武之后，又一新茶之冰岛正式上市了。")]),s("div",{staticClass:"img"},[s("img",{staticClass:"img2",attrs:{src:t.img1,alt:""}})]),s("div",{staticClass:"wz"},[t._v(" 冰岛茶指云南省临沧境内勐库冰岛村所产的冰岛大叶种茶，是普洱茶的一种。 ")]),s("div",{staticClass:"wz"},[t._v(" 特点是回甘效果持久、甜味较其他茶种浓厚、细腻。不使用化肥、农药等无机物，是纯天然、无污染、原生态的茶叶。 ")]),s("div",{staticClass:"img"},[s("img",{staticClass:"img2",attrs:{src:t.img2,alt:""}})]),s("div",{staticClass:"wz"},[t._v(" 冰岛茶回甘效果持久、汤色鲜亮、叶底柔软、匀称，相比茶霸“老班章”甜味更加浓厚，细腻，较多女士更为偏爱冰岛。观其汤，色匀鲜亮、浓厚如油；品其味， ")]),s("div",{staticClass:"wz"},[t._v(" 变化多端、唇齿留香；饮毕，茶杯内蜜香浓厚，久久不能散去。 ")]),s("div",{staticClass:"img"},[s("img",{staticClass:"img2",attrs:{src:t.img3,alt:""}})]),s("div",{staticClass:"wz"},[t._v(" 面朝大海春暖花开，风情茶礼，搭配同记冰岛新茶饮，是您春夏饮茶的不二之选。 ")]),s("div",{staticClass:"wz"},[t._v(" 想留住真实自然的香气，因此愿意等待，直到花开时节。亲力亲为参与采摘鲜花、运送鲜花，并邀请了有长久窨花经验的师傅进行制作，只为捕捉容易错过的香 ")]),s("div",{staticClass:"wz"},[t._v(" 气。而承载这香气的，是生长在远离污染的山间茶园，以有机方式栽培的茶叶。这一切，只为你能毫不费力地享受一杯好茶。 ")]),s("div",{staticClass:"img"},[s("img",{staticClass:"img2",attrs:{src:t.img4,alt:""}})]),s("div",{staticClass:"wz"},[t._v("中文名 ： 冰岛茶叶")]),s("div",{staticClass:"wz"},[t._v("外文名： Iceland tea")]),s("div",{staticClass:"wz"},[t._v("产地 ： 云南省临沧市")]),s("div",{staticClass:"wz"},[t._v("主要功效： 醒脑提神，利尿解乏，缓解疲劳")])])])}))],2)},e=[],n=s("1a9f"),c={name:"wz_3",components:{Navbar:n["a"]},data:function(){return{id:"",img1:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/006D2oSpgy1h180rh8jgvj308c05074a.jpg",img2:"https://image.baidu.com/search/down?url=https://tva2.sinaimg.cn/large/006D2oSpgy1h180rhgx8xj30ey0gogmb.jpg",img3:"https://image.baidu.com/search/down?url=https://tva4.sinaimg.cn/large/006D2oSpgy1h180rgzem9j30fw0jg3z6.jpg",img4:"https://image.baidu.com/search/down?url=https://tva3.sinaimg.cn/large/006D2oSpgy1h180rh3h8xj30e20jgdgb.jpg",wz:[{id:1,title_top:"期待已久的冰岛终于上市了",title_bottom:"",time_top:"2018-03-19 14:03",time_bottom:"",man:""}]}},methods:{get_title:function(){document.title=this.wz[0].title_top}},created:function(){this.get_title()}},o=c,r=(s("2b31"),s("2877")),l=Object(r["a"])(o,a,e,!1,null,null,null);i["default"]=l.exports},d3ac:function(t,i,s){},ea22:function(t,i,s){"use strict";s("d3ac")},ed7c:function(t,i,s){}}]);
//# sourceMappingURL=chunk-c14e0e48.81fff900.js.map