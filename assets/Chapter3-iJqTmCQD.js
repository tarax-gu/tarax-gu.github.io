import{_ as p,r as t,o as h,m as a,b as n,w as o,p as r,i as _,a as l,e as i}from"./index-ip4ZG4ws.js";const C={},A=e=>(r("data-v-bec2ebe4"),e=e(),_(),e),P={class:"container"},E=A(()=>l("div",{class:"content"},[l("h1",{id:"section3"},"第三章 数据链路层"),l("h2",{id:"section3.1"},"3.1数据链路层的功能"),l("p",null," 数据链路层的主要任务是实现帧在一段链路或者一个网络中进行传输。 数据链路层协议有很多种，但都遵循三个基本问题：封装成帧、透明传输、差错检测。 数据链路层使用的信道主要有两种： (1)点对点信道，使用一对一的通信方式。ppp协议是目前使用最广泛的点对点协议。 (2)广播信道，使用一对多的广播通信方式。 采用共享广播信道的有线局域网普遍使用CSMA/CD协议, 无线局域网则使用CSMA/CD协议。 "),l("h3",{id:"section3.1.1"},"3.1.1数据链路层所处的地位"),l("ul",null,[l("li",null,"链路。从一个结点到相邻结点的一段物理线路（物理链路）"),l("li",null,"数据链路。链路加上协议（逻辑链路）"),l("li",null,"帧。进行逻辑通信的协议数据单元，把网络层下交的数据成帧发送到链路层，把接收到的帧的数据去除并上交给网络层")]),l("h3",{id:"section3.1.2"},"3.1.2为网络层提供服务"),l("ul",null,[l("li",null,"无确认的无连接服务。"),l("li",null,"有确认的无连接服务。"),l("li",null,"有确认的面向连接的服务。")]),l("h3",{id:"section3.1.3"},"3.1.3链路管理"),l("p",null," 数据链路层连接的建立、维持和释放过程称为链路管理，主要用于面向连接的服务。 "),l("h3",{id:"section3.1.4"},"3.1.4封装成帧与透明传输"),l("p",null," 封装成帧指在一段数据的前后部分分别添加首部和尾部（帧定界，帧同步）。 "),l("p",null," 透明传输指不论所传的数据是什么样的比特组合，都能无差错地传输。 "),l("h3",{id:"section3.1.5"},"3.1.5流量控制"),l("p",null," 限制发送方的发送速率，使之不超过接收方的就接收能力（需要反馈机制）。 "),l("h3",{id:"section3.1.6"},"3.1.6差错检测"),l("p",null," 因信道噪声等原因，帧在传输过程中可能出现位错（CRC校验）和帧错（丢失、重复、失序）。 "),l("h2",{id:"section3.2"},"3.2组帧"),l("p",null,"组帧主要解决帧定界、帧同步、透明传输等问题，实现组帧的方法通常有4种"),l("h3",{id:"section3.2.1"},"3.2.1字符计数法"),l("p",null," 在帧的首部使用计数字段。 "),l("h3",{id:"section3.2.2"},"3.2.2字节填充法"),l("p",null," 使用特定字节来定界一帧的开始与结束，帧中出现特定字节使用转义字符。 "),l("h3",{id:"section3.2.3"},"3.2.3零比特填充法"),l("p",null," 允许数据帧包含任意个数的比特，使用特定的比特串01111110来标志一帧的开始与结束， 数据字段中如果出现5个连续的1，在后边插入一个0.（早期的HDLC协议） "),l("h3",{id:"section3.2.4"},"3.2.4违规编码法"),l("p",null," 利用违规的编码序列（如曼彻斯特编码中高高电平和低低电平）来进行帧定界。 "),l("h2",{id:"section3.3"},"3.3差错控制"),l("p",null,"本章主要讨论比特差错。通常利用编码技术进行差错控制， 主要有两类：自动重传请求(ARQ,检错编码)，前向纠错(FEC，纠错编码)"),l("h3",{id:"section3.3.1"},"3.3.1检错编码"),l("ul",null,[i("检错编码采用冗余编码技术，即在有效数据被发送前按照某种关系加一定的冗余位。 "),l("li",null,"奇偶校验码。附加一个检验位后，码长为n的码字中“1”的个数为奇数（奇校验）或偶数（偶校验）"),l("li",null,"循环冗余码。CRC校验技术，双方通过约定的生成多项式进行计算。")]),l("h3",{id:"section3.3.2"},"3.3.2纠错编码"),l("p",null," 最常见的纠错编码为海明码。 设n为有效信息的位数，k为检验位的位数，则信息位n和检验位k应满足：n+k<=2^k-1; 再根据位号进行奇偶校验。 "),l("h2",{id:"section3.4"},"3.4流量控制与可靠传输机制"),l("p",null,"在数据链路层中，流量控制和可靠传输机制是交织在一起的。"),l("h3",{id:"section3.4.1"},"3.4.1流量控制和滑动窗口机制"),l("ul",null,[l("li",null,"停等流量控制"),l("li",null,"滑动窗口流量控制（停等协议，后退N协议，选择重传协议）")]),l("h3",{id:"section3.4.2"},"3.4.2可靠传输机制"),l("p",null," 可靠传输通常采用确认和超时重传两种机制来实现。 使用这两种机制的可靠传输协议称为自动重传请求（ARQ）。 在ARQ协议中，数据帧和确认帧都必须编号。 分三种协议：停等协议、后退N帧协议、选择重传协议。 "),l("h2",{id:"section3.5"},"3.5介质访问控制"),l("p",null," 为使用介质的每个结点隔离来自同一信道上其他节点所传送的信号，以协调活动节点的传输。被称为介质访问控制(MAC)子层。 "),l("h3",{id:"section3.5.1"},"3.5.1信道划分介质访问控制"),l("ul",null,[i(" 信道划分介质访问将使用同一传输介质的多个设备的通信隔离开来， 把时域和频域资源合理的分配格设备，通过复用技术来实现。 "),l("li",null,"频分复用(FDM)"),l("li",null,"时分复用(TDM)"),l("li",null,"波分复用(WDM)"),l("li",null,"码分复用(CDM)")]),l("h3",{id:"section3.5.2"},"3.5.2随机访问介质访问控制"),l("ul",null,[i(" 随机访问协议不采用集中控制方式解决发送信息的次序问题，所有用户可以自由发送信息。 当多个用户同时发送信息是，可能会产生帧冲突（碰撞）。 就需要采用一些规则反复重传帧，这就是随机访问介质访问控制协议。 "),l("li",null,"ALOHA协议（时隙ALOHA协议）"),l("li",null,"CSMA协议（1-坚持、非坚持、p坚持）"),l("li",null,"CSMA/CD协议（最短帧长、退避算法）"),l("li",null,"CSMA/CA协议（帧间间隔IFS）")]),l("h3",{id:"section3.5.3"},"3.5.3轮询访问：令牌传递协议"),l("p",null," 一个令牌(Token)沿着环形总线在各站之间依次传递，控制信道的使用。 "),l("h2",{id:"section3.6"},"3.6局域网"),l("h3",{id:"section3.6.1"},"3.6.1局域网的基本概念和体系结构"),l("p",null," 局域网(LAN)指在一个较小的地理范围（如一所学校）内，将各种计算机、外设、及数据库系统连接起来的网络。 三种特殊的局域网拓扑实现如下：以太网、令牌环、FDDI。 "),l("h3",{id:"section3.6.2"},"3.6.2以太网与IEEE802.3"),l("p",null," 第一个IEEE的以太网标准IEEE802.3。 以太网采用无连接的工作方式，使用曼彻斯特编码。 为局域网规定了一种48位的全球地址（MAC地址）。 "),l("h3",{id:"section3.6.3"},"3.6.3IEEE802.11无线局域网"),l("p",null," 无线局域网分为两大类：有固定设施和无固定设施（基站）。 对于有固定设施的无线局域网，采用星形拓扑，中心成为接入点(AP)，在MAC层使用CSMA/CA协议，使用802.11系列的局域网又称为WiFi。 无固定设施的无线局域网采用自组网络。 "),l("h3",{id:"section3.6.4"},"3.6.4VLAN基本概念与基本原理"),l("p",null," 一个以太网是一个广播域。通过虚拟局域网（VLAN）可以将一个较大的局域网分割成一些较小的虚拟局域网。 有三种方式划分VLAN：基于接口、基于MAC地址、基于IP地址。 "),l("h2",{id:"section3.7"},"3.7广域网"),l("h3",{id:"section3.7.1"},"3.7.1广域网的基本概念"),l("p",null," 广域网（WAN）通常是覆盖范围很广的长距离网络。 对于现在误码率很低的点对点有线网络，PPP协议式目前使用最广泛的数据链路层协议。 "),l("h3",{id:"section3.7.2"},"3.7.2PPP协议"),l("p",null,[i(" 点对点协议（PPP）是现在最流行的点对点链路控制协议。 PPP协议有三个组成部分： 一个链路控制协议(LCP)、一套网络控制协议(NCP)、一种将IP数据报封装到串行链路的方法。 "),l("ul",null,[i(" PPP协议的特点如下： "),l("li",null," 不使用序号和确认机制，只保证无差错接受（ CRC校验），因此是不可靠服务。"),l("li",null," 只支持全双工的点对点链路"),l("li",null," 两端可运行不同的网络层协议"),l("li",null," 面向字节的")])]),l("h2",{id:"section3.8"},"3.8数据链路层设备"),l("p",null," 以太网交换机可以划分冲突域。 自学习过程。 "),l("br"),l("br"),l("br"),l("br"),l("br")],-1));function M(e,f){const s=t("el-col"),c=t("el-anchor-link"),u=t("el-anchor"),d=t("el-row");return h(),a("div",P,[n(d,{style:{height:"100%"}},{default:o(()=>[n(s,{span:18},{default:o(()=>[E]),_:1}),n(s,{span:6,style:{}},{default:o(()=>[n(u,null,{default:o(()=>[n(c,{href:"#section1",title:"part1"}),n(c,{href:"#section1.1",title:"part2"}),n(c,{href:"#section1.1.1",title:"part3"})]),_:1})]),_:1})]),_:1})])}const N=p(C,[["render",M],["__scopeId","data-v-bec2ebe4"]]);export{N as default};