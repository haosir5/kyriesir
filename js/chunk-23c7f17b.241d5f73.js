(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23c7f17b"],{"06e1":function(t,s,i){},"1a9f":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"navbar"},[i("van-nav-bar",{attrs:{title:t.text,"left-text":"返回","right-text":"分享","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),i("van-share-sheet",{attrs:{title:"立即分享给好友",options:t.options},on:{select:t.onSelect},model:{value:t.showShare,callback:function(s){t.showShare=s},expression:"showShare"}}),i("van-overlay",{attrs:{show:t.show},on:{click:function(s){t.show=!1}}},[i("div",{staticClass:"overlay_box"},[i("div",{staticClass:"overlay_con"},[i("div",[i("div",{staticClass:"overlay_wz"},[t._v("扫描二维码进入微信客服")]),i("div",{staticClass:"overlay_wz"},[t._v("进行预约和咨询")])]),i("div",[i("img",{staticStyle:{width:"10rem",height:"10rem"},attrs:{src:t.imgUrlarr.src,alt:""}})])])])])],1)},c=[],e=(i("b0c0"),i("d399")),l={name:"navbar",data:function(){return{text:"",imgUrlarr:{src:"https://tvax2.sinaimg.cn/large/006D2oSpgy1h5d8zxpkm0j30ap0apwgp.jpg"},showShare:!1,show:!1,options:[{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"},{name:"复制链接",icon:"link"},{name:"客服二维码",icon:"qrcode"}]}},methods:{get_text:function(){this.text=this.$route.query.text},onClickLeft:function(){var t=this.$route.path;window.location.href;1==t.indexOf("information")&&this.$router.push("/index"),1==t.indexOf("story")&&this.$router.push("/index"),1==t.indexOf("addus")&&this.$router.push("/index"),1==t.indexOf("dy")&&this.$router.push("/index"),1==t.indexOf("wz_")&&this.$router.push("/information"),1==t.indexOf("sp")&&this.$router.push("/index")},onClickRight:function(){this.showShare=!0},copy:function(t){var s=document.createElement("input");s.value=t,document.body.appendChild(s),s.select(),document.execCommand("Copy"),this.$message.success("复制成功"),s.remove()},onSelect:function(t){if(this.showShare=!1,"客服二维码"==t.name&&(Object(e["a"])("已经生成"+t.name),this.show=!0),"复制链接"==t.name){Object(e["a"])("快去微信分享给好友吧~"),this.show2=!0;var s=window.location.href;console.log(window.location.href),this.copy(s)}"QQ"==t.name&&(Object(e["a"])("正在前往QQ空间分享"),window.location.href="http://connect.qq.com/widget/shareqq/index.html?url="+this.Url+"&sharesource=qzone&title=装修找我们&pics=你的分享图片地址&summary=你的分享描述&desc=你的分享简述"),"微博"==t.name&&(Object(e["a"])("正在前往微博分享"),window.location.href="http://service.weibo.com/share/share.php?url="+this.Url+"&sharesource=weibo&title=装修找我们&pic=你的分享图片&appkey=你的key，需要在新浪微博开放平台中申请")}},created:function(){this.get_text()}},n=l,o=(i("ea22"),i("2877")),r=Object(o["a"])(n,a,c,!1,null,"20e6cc7e",null);s["a"]=r.exports},"437b":function(t,s,i){"use strict";i("06e1")},"95bf":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wz_4"},[i("navbar"),t._l(t.wz,(function(s){return i("div",{key:s.id,staticClass:"all_box"},[i("div",{staticClass:"title_top"},[t._v(" "+t._s(s.title_top)+" ")]),i("div",{staticClass:"l_title"},[i("div",{staticClass:"time"},[t._v("发表时间:"+t._s(s.time_top))]),i("div",{staticClass:"man"},[t._v("作者:"+t._s(s.man))])]),i("div",{staticClass:"con"},[i("div",{staticClass:"wz"},[t._v(" 随着气温的升高，又到一年一季的春茶开采的季节。从3月末开始，云南春茶市场就一直“热闹”不断，来自四面八方的茶商、茶企纷纷赶来云南的茶园和茶山。 ")]),i("div",{staticClass:"wz"},[t._v(" 从32万元天价茶的辟谣，到各州市茶山头的春茶活动，云南普洱春茶再一次吸引了全国茶界的目光。 ")]),i("div",{staticClass:"wz"},[t._v("今年云南春茶品质怎么样，价格是涨是跌")]),i("div",{staticClass:"img"},[i("img",{staticClass:"img2",attrs:{src:t.img1,alt:""}})]),i("div",{staticClass:"wz"},[t._v(" 历史上普洱茶的产区主要在澜沧江中、下游的西双版纳、普洱市、临沧市一带。目前这三个州市仍然是普洱茶的主要生产区。 ")]),i("div",{staticClass:"wz"},[t._v("首先来看看云南普洱茶各大产区的情况如何——")]),i("div",{staticClass:"img"},[i("img",{staticClass:"img2",attrs:{src:t.img2,alt:""}})]),i("div",{staticClass:"wz"},[t._v(" 西双版纳境内拥有众多的古茶山、古茶树。其中，景洪市、勐腊县、勐海县的茶叶资源丰富多采。 ")]),i("div",{staticClass:"wz"},[t._v(" 2017年，西双版纳茶区的春茶采摘时间较去年晚于二十多天。新闻君从南糯当地茶农处获悉，与往年相比同期减产已达40%，而攸乐、老曼峨等地均出现不同程度的减产，与价格飙升的情况。 ")]),i("div",{staticClass:"wz"},[t._v(" 老班章地区，单是干茶与往年价格相比，几乎上涨了4成以上。新闻君获悉，今年的头春成品茶价格或会翻涨60%—70%。往年同期，可以手握50公斤左右头春大树茶的茶客，今年到手的茶叶可能10公斤都不到。 ")]),i("div",{staticClass:"img"},[i("img",{staticClass:"img2",attrs:{src:t.img3,alt:""}})]),i("div",{staticClass:"wz"},[t._v(" 因为减产，今年茶农报价颇高，鲜叶价格翻倍上涨。易武近年来火极一时的某超微产区，大树茶同期产量也从往年的100多200公斤，缩减至100公斤不到，鲜叶价格（以公斤为单位）已超四位数，成品茶价格也将过数万。 ")]),i("div",{staticClass:"wz",staticStyle:{color:"red"}},[t._v(" 版纳茶区2017年的春茶价格，普遍上涨了30—50%。其中，勐腊象明茶区部分山头茶的价格已涨至150%。 ")]),i("div",{staticClass:"img"},[i("img",{staticClass:"img2",attrs:{src:t.img4,alt:""}})]),i("div",{staticClass:"wz"},[t._v(" 临沧产茶区域主要集中在沧源、双江、凤庆、云县等地，其中享誉世界的万亩古茶树群落位于双江勐库大雪山，大名鼎鼎的冰岛就位于大雪山东半山。 ")]),i("div",{staticClass:"wz"},[t._v(" 临沧茶区现正值春茶采制高峰期，有茶客认为今年产量，估计不到往年的三分之一。 ")]),i("div",{staticClass:"wz"},[t._v(" 临沧茶区一带春茶采摘时间整体要晚于版纳茶区一带，近期正值临沧茶的采制高峰期。昔归作为临沧地区重点“大户”，目前也被减产问题所困扰。 ")]),i("div",{staticClass:"img"},[i("img",{staticClass:"img2",attrs:{src:t.img5,alt:""}})]),i("div",{staticClass:"wz"},[t._v(" 近几年，冰岛茶价格不断上涨，冰岛村村民张世光说，“2006年、2007年，那时候的春茶40-50元一公斤都没人要啊。今年天气不好导致产量减少，采摘时间推迟，冰岛古树鲜叶每公斤涨到8000元以上了。” ")]),i("div",{staticClass:"wz"},[t._v(" 按照制作普洱茶的工艺，4.5公斤左右的鲜叶制作一公斤毛料，照此推算，冰岛古树上市价格至少在4万元以上。 ")]),i("div",{staticClass:"img"},[i("img",{staticClass:"img2",attrs:{src:t.img6,alt:""}})]),i("div",{staticClass:"wz"},[t._v(" 说到普洱产区，不得不提到名气大大的景迈茶山。据考证，这里可是有着1300多年的种茶历史。景迈茶山有目前世界上所发现保存最完好、面积最大的人工栽培型古茶林，有着“茶树自然博物馆”的美誉。 ")]),i("div",{staticClass:"wz"},[t._v(" 普洱新华国茶有限公司营销总监罕云波介绍，今年景迈山毛茶价格在每公斤1000元-1200元，和去年每公斤700元相比，涨价幅度较大。 此外，有以经营景谷茶为主的茶客介绍道，景谷茶的鲜叶价格也在大幅上涨，基本都翻了一倍。 今年在景谷茶区一带前来收购原料的外省茶商比较多，茶价也因此被抬高了很多。 ")]),i("div",{staticClass:"img"},[i("img",{staticClass:"img2",attrs:{src:t.img7,alt:""}})]),i("div",{staticClass:"wz"},[t._v(" 小编给茶友们整理了一份云南50个知名山头春茶价格指数，一起来看看↓↓↓ ")]),i("div",{staticClass:"img"},[i("img",{staticClass:"img2",attrs:{src:t.img13,alt:""}})]),i("div",{staticClass:"wz"},[t._v("2017普洱茶涨价的原因")]),i("div",{staticClass:"wz"},[t._v("天气干燥")]),i("div",{staticClass:"wz"},[t._v(" 今年天气干燥，雨水少，导致茶叶发得少。物以稀为贵，减产了，价格也就涨了！ ")]),i("div",{staticClass:"img"},[i("img",{staticClass:"img2",attrs:{src:t.img8,alt:""}})]),i("div",{staticClass:"wz"},[t._v(" 推迟上市 今年春茶不仅发得少而且发得晚，特别是古树比往年都要推迟半个月左右。春茶采摘推迟了，这价格也就自然上去了。 ")]),i("div",{staticClass:"wz"},[t._v(" “茶山热” 近年来，每年春茶都会有很多茶叶旅行者拥入，打飞的到山寨旅游购茶。这种三、五成群的旅游购茶者，近来不断增加，他们购买量虽小，但足以将茶价拉高。 ")]),i("div",{staticClass:"wz"},[t._v(" 恶劣天气 三月以来茶山各地冰雹天气频发，布朗山、南糯山、老班章、易武、景迈等地都遭受冰雹袭击，有的甚至是在采茶的时候，冰雹突袭，损失惨重。这样以来茶叶更少，而需求没有减少的意思，价格自然上去了。 ")]),i("div",{staticClass:"img"},[i("img",{staticClass:"img2",attrs:{src:t.img9,alt:""}})]),i("div",{staticClass:"wz"},[t._v(" 雨水少 品质好 很多人只关注春茶价格，却没有注意古树茶本身的品质。今年雨水少，产量少，但是茶品质很好，相比去年有所提升。 ")]),i("div",{staticClass:"img"},[i("img",{staticClass:"img2",attrs:{src:t.img10,alt:""}})]),i("div",{staticClass:"wz"},[t._v(" 炒作 今年炒作的痕迹尤为明显，早在春茶采摘前几个月就开始放出话价格要上涨。而一些山头更是像抢茶一样，鲜叶刚摘下来就被抢走了；老班章的32万一公斤的“茶王树”炒作被点名批评了；邦崴茶王树170万起拍......冰岛更不用说了，又是今年的涨价王...... ")]),i("div",{staticClass:"img"},[i("img",{staticClass:"img2",attrs:{src:t.img11,alt:""}})]),i("div",{staticClass:"wz"},[t._v("春茶涨价后，是否会出现“过山车”风波问题？")]),i("div",{staticClass:"wz"},[t._v(" 昆明茶行业协会会长刘益成称，普洱茶经历2007年的风波后，已经更成熟，茶场从粗放到精加工发展，普洱茶迷也在增加，大家也不会再盲目跟风，所以发生风波的可能性很小。 ")]),i("div",{staticClass:"wz"},[t._v(" 虽然发生风波的可能性很小，但新闻君认为，每样事物都有其自身的价值，认清普洱茶大众消费饮料的本质，回归普洱茶的实际价值，行业才能健康发展，各个环节链才能相互支撑。 ")]),i("div",{staticClass:"img"},[i("img",{staticClass:"img2",attrs:{src:t.img12,alt:""}})]),i("div",{staticClass:"wz"},[t._v("专家呼吁普洱茶价格理性回归")]),i("div",{staticClass:"wz"},[t._v(" 双江勐库冰岛茶茶友协会会长、双龙古茶园商贸有限公司董事长杨加龙表示，古树茶涨价的背后是商家过度炒作。他说，“这已经不是大众消费了，脱离了市场规律和经济规律，很难走得长远。” ")]),i("div",{staticClass:"wz"},[t._v(" 中国茶叶流通协会常务副会长王庆表示，茶叶的本质就是饮品，茶叶可再生，严格意义上不是稀缺品。应该回归大众消费，价位不应该太高，提升人均饮茶率是目前最重要的事。 ")]),i("div",{staticClass:"wz"},[t._v(" 面对人为炒作，业内有识之士担心长此以往，整个产业将受到致命性的打击。新闻君也呼吁政府相关部门正确引导消费，尽快建立普洱茶实物标准，规范市场。 ")]),i("div",{staticClass:"wz"},[t._v(" 【免责声明】]本文为转载内容。本文追溯到原作者。同记茶业致力于好文精选，版权归原作者所有，部分文章推送因种种原因未能与原作者联系上，如有版权争议，请及时联系我们更正或删除！ ")])])])}))],2)},c=[],e=i("1a9f"),l={name:"wz_4",components:{Navbar:e["a"]},data:function(){return{id:"",img1:"https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/006D2oSpgy1h180s9ygf2j30go0agwfm.jpg",img2:"https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/006D2oSpgy1h180sa32jaj30es07imy0.jpg",img3:"https://image.baidu.com/search/down?url=https://tva4.sinaimg.cn/large/006D2oSpgy1h180sa7bixj30fc0a6my8.jpg",img4:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/006D2oSpgy1h180sadmz8j30gk0axt9q.jpg",img5:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/006D2oSpgy1h180sahl17j30f00a0q3m.jpg",img6:"https://image.baidu.com/search/down?url=https://tva2.sinaimg.cn/large/006D2oSpgy1h180samnsbj30hs0a175n.jpg",img7:"https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/006D2oSpgy1h180saqdvrj30go09jdgd.jpg",img8:"https://image.baidu.com/search/down?url=https://tva4.sinaimg.cn/large/006D2oSpgy1h180sawem1j30n01wuwtj.jpg",img9:"https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/006D2oSpgy1h180sb22ngj30go0ci0t9.jpg",img10:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/006D2oSpgy1h180sb951gj30hs0npjvd.jpg",img11:"https://image.baidu.com/search/down?url=https://tva3.sinaimg.cn/large/006D2oSpgy1h180sbe8p3j30gg0ag0td.jpg",img12:"https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/006D2oSpgy1h180sbkkq6j30go09ddgd.jpg",img13:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/006D2oSpgy1h180sbpcrej30fc0a70tg.jpg",wz:[{id:1,title_top:"又到了云南春茶上市季节，冰岛40000、老班章12000......今年的茶叶市场要火？",title_bottom:"",time_top:"2018-02-26 13:36",time_bottom:"",man:""}]}},methods:{get_title:function(){document.title=this.wz[0].title_top}},created:function(){this.get_title()}},n=l,o=(i("437b"),i("2877")),r=Object(o["a"])(n,a,c,!1,null,null,null);s["default"]=r.exports},d3ac:function(t,s,i){},ea22:function(t,s,i){"use strict";i("d3ac")}}]);
//# sourceMappingURL=chunk-23c7f17b.241d5f73.js.map