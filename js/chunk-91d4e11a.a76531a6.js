(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91d4e11a"],{"1a9f":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"navbar"},[e("van-nav-bar",{attrs:{title:t.text,"left-text":"返回","right-text":"分享","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),e("van-share-sheet",{attrs:{title:"立即分享给好友",options:t.options},on:{select:t.onSelect},model:{value:t.showShare,callback:function(i){t.showShare=i},expression:"showShare"}}),e("van-overlay",{attrs:{show:t.show},on:{click:function(i){t.show=!1}}},[e("div",{staticClass:"overlay_box"},[e("div",{staticClass:"overlay_con"},[e("div",[e("div",{staticClass:"overlay_wz"},[t._v("扫描二维码进入微信客服")]),e("div",{staticClass:"overlay_wz"},[t._v("进行预约和咨询")])]),e("div",[e("img",{staticStyle:{width:"10rem",height:"10rem"},attrs:{src:t.imgUrlarr.src,alt:""}})])])])])],1)},a=[],n=(e("b0c0"),e("d399")),o={name:"navbar",data:function(){return{text:"",imgUrlarr:{src:"https://tvax2.sinaimg.cn/large/006D2oSpgy1h5d8zxpkm0j30ap0apwgp.jpg"},showShare:!1,show:!1,options:[{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"},{name:"复制链接",icon:"link"},{name:"客服二维码",icon:"qrcode"}]}},methods:{get_text:function(){this.text=this.$route.query.text},onClickLeft:function(){var t=this.$route.path;window.location.href;1==t.indexOf("information")&&this.$router.push("/index"),1==t.indexOf("story")&&this.$router.push("/index"),1==t.indexOf("addus")&&this.$router.push("/index"),1==t.indexOf("dy")&&this.$router.push("/index"),1==t.indexOf("wz_")&&this.$router.push("/information"),1==t.indexOf("sp")&&this.$router.push("/index")},onClickRight:function(){this.showShare=!0},copy:function(t){var i=document.createElement("input");i.value=t,document.body.appendChild(i),i.select(),document.execCommand("Copy"),this.$message.success("复制成功"),i.remove()},onSelect:function(t){if(this.showShare=!1,"客服二维码"==t.name&&(Object(n["a"])("已经生成"+t.name),this.show=!0),"复制链接"==t.name){Object(n["a"])("快去微信分享给好友吧~"),this.show2=!0;var i=window.location.href;console.log(window.location.href),this.copy(i)}"QQ"==t.name&&(Object(n["a"])("正在前往QQ空间分享"),window.location.href="http://connect.qq.com/widget/shareqq/index.html?url="+this.Url+"&sharesource=qzone&title=装修找我们&pics=你的分享图片地址&summary=你的分享描述&desc=你的分享简述"),"微博"==t.name&&(Object(n["a"])("正在前往微博分享"),window.location.href="http://service.weibo.com/share/share.php?url="+this.Url+"&sharesource=weibo&title=装修找我们&pic=你的分享图片&appkey=你的key，需要在新浪微博开放平台中申请")}},created:function(){this.get_text()}},c=o,r=(e("ea22"),e("2877")),l=Object(r["a"])(c,s,a,!1,null,"20e6cc7e",null);i["a"]=l.exports},"3d4d":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"wz_7"},[e("navbar"),t._l(t.wz,(function(i){return e("div",{key:i.id,staticClass:"all_box"},[e("div",{staticClass:"title_top"},[t._v(" "+t._s(i.title_top)+" ")]),e("div",{staticClass:"l_title"},[e("div",{staticClass:"time"},[t._v("发表时间:"+t._s(i.time_top))]),e("div",{staticClass:"man"},[t._v("作者:"+t._s(i.man))])]),e("div",{staticClass:"con"},[e("div",{staticClass:"wz"},[t._v(" 冬至（Winter Solstice）又名‘一阳生’，是中国农历中一个重要的节气，也是中华民族的一个传统节日，冬至俗称“数九、冬节”、“长至节”、“亚岁”等，早在二千五百多年前的春秋时代，中国就已经用土圭观测太阳，测定出了冬至，它是二十四节气中最早制订出的一个，时间在每年的公历12月21~23日。 ")]),e("div",{staticClass:"wz"},[t._v(" 值得注意的是，由于冬至前后，地球位于近日点附近，运行的速度稍快，这造成了在一年中太阳直射南半球的时间比直射北半球的时间约短8天，因此北半球的冬季比夏季要略微短一些。 ")]),e("div",{staticClass:"img"},[e("img",{staticClass:"img2",attrs:{src:t.img1,alt:""}})]),e("div",{staticClass:"wz"},[t._v(" 冬至这天，太阳运行至黄经270°（冬至点），太阳直射地面的位置到达一年的最南端，太阳几乎直射南回归线（又称为冬至线），阳光对北半球最为倾斜。因此，冬至日是北半球各地一年中白昼最短的一天，并且越往北白昼越短。在北极圈以北，这一天太阳整日都在地平线之下，成为北半球一年中极夜范围最广的一天。对北半球各地而言，冬至也是全年正午太阳高度最低的一天。就北京市区来说，冬至这天白昼仅有9小时20分，而正午太阳高度也仅有26°42'。冬至这天，北半球得到的太阳辐射最少，比南半球少了约50%。冬至节届即一阳生，新岁实始。《载敬堂集》载“夏尽秋分日，春生冬至时”，冬至节，春之先声也。冬至过后，夜空星象则完全换成冬季星空，并且从今天起开始“进九”。而此时的南半球正值酷热的盛夏。 ")]),e("div",{staticClass:"wz"},[t._v(" 冬至是24节气中最早被制订的一个，然而多数人并不知道，冬至的起源居然是来自于一次国家层面的都城规划。早在3000多年前，周公始用土圭法测影，在洛邑测得天下之中的位置，定此为土中，这在当时有着政治意义的举动，却成了影响后世几千年的节日之一。 ")]),e("div",{staticClass:"wz"},[t._v(" 周公到洛阳，用土圭法测得洛阳所处的地方即为“天下之中”，然后开始占卜国家社稷的吉地。《尚书·洛诰》记载：周公“朝至于洛师”，对洛阳周边的几个地方做了考察，最后确定涧水东、瀍水西、瀍水东皆“惟洛食”（都是兴建宗庙社稷的好地方） 。周公通过“土圭测景”选定洛邑基址的史实，被载入了古代典籍，也被后人奉为封邦建国的成法。 ")]),e("div",{staticClass:"wz"},[t._v(" “土圭测景”的目的是找出“土中”（中国的中心）。这种方法的要义是“树八尺之表，夏至日，景长尺有五寸；冬至日，景长一丈三尺五寸”（即竖起高为8尺的标杆，在夏至日观测，中午的日影是1.5尺，冬至日中午的日影是13.5尺）， “测土深，正日影，求地中，验四时”。 用这种方法测到的就是“土中”洛阳、“洛邑”的理论位置。 ")]),e("div",{staticClass:"wz"},[t._v(" 依周公测影所定的天下之中，周人详细规划了灭商后的第一座国家都城，《逸周书·作雒》载：“乃作大邑成周于土中，……南系于洛水，北因于邙山，以为天下之大凑。”[4] 。“定天保，依天室”，国家社稷（都城、宗庙）完成之后，周公在成周明堂制礼作乐，详细制订了国家礼仪制度， 据记载，周代以冬十一月为正月，以冬至为岁首过新年，也就是说，周公选取的是经土圭法测得的一年中“日影”最长的一天，为新的一年开始的日子。 ")]),e("div",{staticClass:"wz"},[t._v(" 由周到秦，以冬至日当作岁首一直不变。至汉代依然如此，《汉书》有云：“冬至阳气起，君道长，故贺……”也就是说，人们最初过冬至节是为了庆祝新的一年的到来。古人认为自冬至起，天地阳气开始兴作渐强，代表下一个循环开始，是大吉之日。因此，后来一般春节期间的祭祖、家庭聚餐等习俗，也往往出现在冬至。冬至又被称为“小年”，一是说明年关将近，余日不多；二是表示冬至的重要性。把冬至作为节日来过源于周代，盛于唐宋，并相沿至今。周历的正月为夏历的十一月，因此，周代的正月等于如今的十一月，所以拜岁和贺冬并没有分别。直到汉武帝采用夏历后，才把正月和冬至分开。因此，也可以说专门过“冬至节”是自汉代以后才有，盛于唐宋，相沿至今。 ")])])])}))],2)},a=[],n=e("1a9f"),o={name:"wz_7",components:{Navbar:n["a"]},data:function(){return{id:"",img1:"https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/006D2oSpgy1h180yxzd46j30ho0dijri.jpg",wz:[{id:1,title_top:"冬至，饺子应该这样吃",title_bottom:"",time_top:"2017-12-22 09:05",time_bottom:"",man:""}]}},methods:{get_title:function(){document.title=this.wz[0].title_top}},created:function(){this.get_title()}},c=o,r=(e("d773"),e("2877")),l=Object(r["a"])(c,s,a,!1,null,null,null);i["default"]=l.exports},d3ac:function(t,i,e){},d773:function(t,i,e){"use strict";e("e081")},e081:function(t,i,e){},ea22:function(t,i,e){"use strict";e("d3ac")}}]);
//# sourceMappingURL=chunk-91d4e11a.a76531a6.js.map