(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{268:function(e,a,t){"use strict";t.r(a);var v=t(38),_=Object(v.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"第-22-周"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第-22-周","aria-hidden":"true"}},[e._v("#")]),e._v(" 第 22 周")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Wow, I'm sick of doubt.\nLive in the light of certain.\nSouth.\nCruel bindings.\nThe servants have the power.\nDog men and their mean women pulling poor blankets over our sailors.\nI'm sick of dour faces staring at me from the T.V. tower.\nI want roses in my garden bower, dig?\nRoyal babies, rubies must now replace aborted strangers in the mud.\nThese mutants, blood-meal for the plant that's plowed.\nThey are waiting,\nto take us into the severed garden.\n")])])]),t("h3",{attrs:{id:"反思"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反思","aria-hidden":"true"}},[e._v("#")]),e._v(" 反思")]),e._v(" "),t("p",[e._v("似乎过度沉迷在了，架空的去思考一些事情，比如什么是对的，什么是错的，我该怎么做，不该怎么做，但是绝大数事情的 “对” 与 “错” 似乎确实没有那么泾渭分明？")]),e._v(" "),t("p",[e._v("不过若是你不区别对错，全凭状态与心情行事，那么会如何？不会如何？")]),e._v(" "),t("p",[e._v("或许该去思考那些超越 “平面”的，”立体” 并带上 “时间” 的？")]),e._v(" "),t("p",[e._v("总要有一些标准，即使它们衡量的界限非常地小，但它们一定不是局限的，而是趋近无限的。")]),e._v(" "),t("p",[e._v("_")]),e._v(" "),t("p",[e._v("时常断片式地感到生活遥无尽头，就像全身的你化作一团蒸汽，从机器里喷涌地抽离出来，你清清楚楚地看到了那片模糊的齿轮森林 —— 它们陌生而又熟悉。而这时吹来的一阵风，一片叶，一团氤氲的烟雾，都将整个的时间静止式地封嵌在了琥珀里，如同那古老呆滞而又端详不透东西的动物残骸。")]),e._v(" "),t("h3",{attrs:{id:"第-22-周-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第-22-周-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 第 22 周")]),e._v(" "),t("p",[e._v("开始有了些收入，还掉了之前累积的车票机票，倒有了些零花钱，我也觉得我还需要一架私人飞机，还有太空旅行的船票。")]),e._v(" "),t("p",[e._v("我还卖掉了  Big Muff，不舍得，阴差阳错地认识了一个玩摇滚乐的哥们儿，年龄相仿的，我寻思着他们有一天专辑大卖，我跟着去打打杂，顺势开启摇滚巨星之路的那样，emmmm，总要有个开始的地方，一个什么理由，一个什么，不那么理由的理由。")]),e._v(" "),t("p",[e._v("我厌恶 Javascript，更多的是厌恶那个只会写 Javascript、用 Javascript 做任何事情，而被身边人用有色眼睛看待的那个自己，其次则是，它的用途过于广泛，反倒会消磨起人们探索未知的欲望 —— 该走地狱模式才行、那种观念。")]),e._v(" "),t("p",[e._v("不过我短暂地缓解了这个心理，我又开始尽可能地使用 Javascript 进行开发，久违地思考速度跟不上写代码的速度。Javascript 的生态极其好，至于你不会被绊在一些 “细碎而又不常见“ 的问题上，比如一些加密库，包括与 Ethereum 交互的 web3，没有什么语言的相关库的稳定性与开发更新频率能够跟得上 Javascript，使用 Javascript 去解决这些问题，是最迅速地、应用最广泛地、最多人参与地，最负责任地办法。")]),e._v(" "),t("p",[e._v("无所谓门派。")]),e._v(" "),t("p",[e._v("_")]),e._v(" "),t("p",[e._v("这周完成了基础的验证系统。")]),e._v(" "),t("p",[e._v("我时常因为要输入账号密码，而没有耐心去尝试一些应用，世界如此之大，我是有时间去多花上那机械重复地一分钟去探索一个没有创新性概率极大的东西，我早就发现了更多的东西。")]),e._v(" "),t("p",[e._v("为了规避掉，用户登录的繁琐问题，输入账号密码这一行为，我用密钥对儿解决了这个问题，正如前几个星期念叨到的。")]),e._v(" "),t("p",[e._v("流程是这样的")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("【客户端】：在请求头中放入 ed25519 生成的公钥  \n【服务端】：返回一个串 64 位的随机数(Token)\n【客户端】：使用 私钥 对 Token 进行签名，将 Token 与签名后的 Token 加入请求头。\n【服务端】：记录下用户的公钥与签名后的 Token。\n【客户端】：再次请求即可正常访问\n")])])]),t("p",[e._v("就是一套仿 GPG 验证的办法，简单的握手，签名与密码的作用相仿，甚至在绝大多数情况下比密码的安全性要好得多。")]),e._v(" "),t("p",[e._v("问题在于恶意攻击，比如生成大批量的僵尸账号，不过，若是一个家伙就像想要攻击你的服务，生成一大批僵尸账号，不管是用我的办法，还是更为广泛的手机验证、多一层密码.etc，都无法阻止他们，他们总能做到。")]),e._v(" "),t("p",[e._v("也总有办法去化解这些问题，拉锯的那种意味。")]),e._v(" "),t("p",[e._v("可以请求时多进行一些修补检查，或是周期性清理账号，强制回收账号在某种程度上是违背伦理与道义，不负责任的做法，在中心化系统上是如此，而我认为在去中心化系统中则更像是新陈代谢这样，是合乎情理的，你可以用某些指数形态的曲线去判断哪些账号是永远不会被回收的，比如他累积有了多少内容，他便永远存在在系统中，直到系统消失殆尽。")]),e._v(" "),t("p",[e._v("_")]),e._v(" "),t("p",[e._v("这周看到了两个非常牛逼的项目。")]),e._v(" "),t("p",[e._v("比如 Scuttlebutt 这个项目，点对点的 Facebook？完全点对点的传输信息，存储内容，你的数据只会存在你自己的设备上，当别人与你产生沟通时，他们会从你的设备上获取他们需要看到的数据，服务端算是某种路由节点的角色。")]),e._v(" "),t("p",[e._v("这其实就是我思考的后期形态的选择之一，完全存储在用户的设备上适合即时通讯或隐私式的沟通，而搭建相对应地公共节点进行存储，适合公开式的内容存储及分发，或许我可以混合这两种办法，实在是很酷，比那些中心化管理的系统要有趣的多，有生命力的多。")]),e._v(" "),t("p",[e._v("其次则是 Consensys 的 codefund，强调 Consensys 是因为，它是世界顶级的 ‘公司’，Ethereum 的 ‘母公司’，它有恐怖到极点的生态与资源，在我现在的观念里，只能用恐怖来形容，它同时是 ‘中心化’ 的，又是 ‘去中心化’ 的，这就是为什么，神秘无法看清，这就是为什么它比 Alphabet 给我的感觉更有压力，但是，这样的一个世界，上个世纪的 IBM 如何？’自由的界限’ 到底如何判断，谁说的准呢？")]),e._v(" "),t("p",[e._v("那个我觉得很有趣的广告系统的设计，codefund 已经做到了，这样的结果是，我可以暂时搁置那个想法，转而去参考 codefund，如果它做的足够好，那么我就不需要在这个问题上继续耗费精力，我可以去解决其他问题，总有一些问题等着我来解决，注定只有我才能解决，我是这个时空里仅有的能够 ‘相对最好’ 地解决那个问题的人，这个样子。")]),e._v(" "),t("p",[e._v("正如人们常谈论到的，加密货币只是区块链的一个应用。")]),e._v(" "),t("p",[e._v("区块链给了我非常多的启发，我这两天还具化了一个合约式静态脚本叠加系统，Very Cool! 只是这些东西我还没有时间与精力去做。")]),e._v(" "),t("p",[e._v("有了好的产品与 '目的地'，技术才能成为艺术，才能有用武之地，才有 ‘存在’ 的价值。")]),e._v(" "),t("p",[e._v("_")]),e._v(" "),t("p",[e._v("继续忙罢。")]),e._v(" "),t("p",[e._v("目前的最大问题没有指向我自身，我却可以通过对我自身做功解决，颇有些本体虚无，借口逃避，没有自我意识的感觉，倒也不能全说是这么回事，因为我不是盲目地如此思考，我有了能够站得住脚，经得起推敲的 ‘认知’，我尽我所能地剥离开了那些 ’冗余虚伪’ 的解释。")]),e._v(" "),t("p",[e._v("我必须要解决，能够让父母安心，能够让他们感到 happy 的问题，因为父母对我付出的责任，让我有了相对等的责任，即使这个 ‘对等问题’ 是难以衡量的，这个逻辑说起来很拗口，很一把抓，但就是这么回事，我必须找出那个最优解，所有时间的最优解，我重新活一千次一万次，其中解决的最好的一次那样。这种感觉，举个形象且不大恰当的例子，就像事情重新来过 14000000 次，只有一次，Thanos 会被打败，以 Iron Man 牺牲为代价，就像 C-137 最 Rick 的那个 Rick，即使有无数个平行时空，无数个一模一样的 ‘我’，也要做那个最特别的’我’，最能够成为自己的 ’我’ —— 这种 ‘特别’ 与 ‘最自己’ 不是可以随意解释的，不是说 ‘每个平行时空中的自己，对于他们自己来说，都是所有平行时空中的自己中，最特别的那个’ 这种概念，我要超越这个概念，’所有平行时空中的自己，公认默许的、无需证明的最自己’ 的那种。")]),e._v(" "),t("p",[e._v("“古之欲明明德于天下者，先治其国；欲治其国者，先齐其家；欲齐其家者，先修其身；欲修其身者，先正其心；欲正其心者，先诚其意；欲诚其意者，先致其知，致知在格物。物格而后知至，知至而后意诚，意诚而后心正，心正而后身修，身修而后家齐，家齐而后国治，国治而后天下平。”")]),e._v(" "),t("p",[e._v("大学之道，在明明德？")])])},[],!1,null,null,null);a.default=_.exports}}]);