import{_ as a,r as e,o as d,m as r,b as n,w as o,p as h,i as _,a as l}from"./index-DBKJjhjt.js";const p={},I=i=>(h("data-v-ac5716bc"),i=i(),_(),i),O={class:"container"},f=I(()=>l("div",{class:"content"},[l("h1",{id:"section5"},"第五章 输入输出管理"),l("h2",{id:"section5.1"},"5.1 I/O管理概述"),l("h3",{id:"section5.1.1"},"5.1.1 I/O设备"),l("ul",null,[l("li",null,"设备的分类。"),l("li",null,"IO接口(设备控制器)。接收识别命令、数据交换、标识和报告设备的状态、地址识别、数据缓冲、差错控制。"),l("li",null,"IO端口。数据寄存器、状态寄存器、控制寄存器；独立编址、统一编址。"),l("li",null,"树的所有结点可有零个或者多个后后继")]),l("h3",{id:"section5.1.2"},"5.1.2 IO控制方式"),l("ul",null,[l("li",null,"程序控制方式。"),l("li",null,"中断驱动方式。"),l("li",null,"DMA驱动方式。")]),l("h3",{id:"section5.1.3"},"5.1.3 IO软件层次结构"),l("ul",null,[l("li",null,"用户层软件"),l("li",null,"设备独立性软件"),l("li",null,"设备驱动程序"),l("li",null,"中断处理程序")]),l("h3",{id:"section5.1.4"},"5.1.4 应用程序IO接口"),l("ul",null,[l("li",null,"IO接口的分类。字符设备接口、块设备接口、网络设备接口。"),l("li",null,"阻塞IO和非阻塞IO。")]),l("h2",{id:"section5.2"},"5.2 设备独立性软件"),l("h3",{id:"section5.2.1"},"5.2.1 设备独立性软件"),l("p",null," 也称设备无关软件，包括执行所有设备共有操作的软件。 "),l("h3",{id:"section5.2.2"},"5.2.2 高速缓存与缓冲区"),l("ul",null,[l("li",null,"磁盘高速缓存。逻辑上属于磁盘，物理上式内存中的盘块，用于提高io速度。"),l("li",null,"缓冲区。单缓冲、双缓冲、循环缓冲、缓冲池。")]),l("h3",{id:"section5.2.3"},"5.2.3 设备分配和回收"),l("ul",null,[l("li",null,"设备分配概述。更可能让设备忙碌、由避免死锁。"),l("li",null,"设备分配的数据结构。设备控制表、控制器控制表、通道控制表、系统设备表。"),l("li",null,"设备分配时应考虑的因素。固有属性、分配算法、分配的安全性。"),l("li",null,"设备分配的步骤。分配设备、分配控制器、分配通道。"),l("li",null,"逻辑设备名到物理设备名的映射。逻辑设备表。")]),l("h3",{id:"section5.2.4"},"5.2.4 SPOOLing技术(假脱机技术)"),l("p",null," 它是操作系统中采用的一项将独占设备改造成共享设备的技术。 该技术利用外围控制机，将低速IO设备的数据传送到高速磁盘上，或者相反。 系统由输入井/输出井、输入缓冲区/输出缓冲区、输入进程/输出进程、井管理程序组成。 "),l("h3",{id:"section5.2.5"},"5.2.5 设备驱动程序接口"),l("p",null," 设备驱动程序是IO系统的上层与设备控制器之间的通信程序，主要任务位接受请求或者指令，进行转化后发给设备控制器或者上层应用。 "),l("h2",{id:"section5.3"},"5.3 磁盘和固态硬盘"),l("h3",{id:"section5.3.1"},"5.3.1 磁盘"),l("p",null," 磁盘是表面涂有磁性物质的物理盘片，每组同心圆叫做磁道，磁道又划分为扇区。 磁盘地址由“柱面号.盘面号.扇区号”组成 "),l("h3",{id:"section5.3.2"},"5.3.2 磁盘的管理"),l("ul",null,[l("li",null,"磁盘初始化。"),l("li",null,"分区。"),l("li",null,"引导块。"),l("li",null,"坏块。")]),l("h3",{id:"section5.3.3"},"5.3.3 磁盘调度算法"),l("ul",null,[l("li",null,"磁盘存取时间。寻道时间+旋转延迟时间+传输时间。"),l("li",null,"磁盘调度算法。先来先服务、最短寻道时间优先、扫描(scan、look(改进))、循环扫描(c-scan、c-look(改进))、"),l("li",null,"减少延迟时间的方法。磁盘是连续自转设备，在读入一个扇区后，需要短暂的处理时间才能开始读下一个扇区，可以通过交替编号减少延迟，不同盘面的块也可以交替编号。"),l("li",null,"提高磁盘IO速度的方法。磁盘高速缓存、调整请求顺序、提前读、延迟写、优化物理块分布、虚拟盘、磁盘阵列RAID。")]),l("h3",{id:"section5.3.4"},"5.3.4 固态硬盘"),l("ul",null,[l("li",null,"固态硬盘的特性。是基于闪存技术的存储器，由一个或多个闪存芯片和闪存翻译层组成，闪存芯片替代传统磁盘中的机械控制器。"),l("li",null,"磨损均衡。闪存擦写寿命有限，采用磨损均衡技术使闪存块寿命相近，动态磨损均衡和静态磨损均衡。")]),l("br"),l("br"),l("br"),l("br"),l("br")],-1));function m(i,b){const c=e("el-col"),t=e("el-anchor-link"),u=e("el-anchor"),s=e("el-row");return d(),r("div",O,[n(s,{style:{height:"100%"}},{default:o(()=>[n(c,{span:18},{default:o(()=>[f]),_:1}),n(c,{span:6,style:{}},{default:o(()=>[n(u,null,{default:o(()=>[n(t,{href:"#section1",title:"part1"}),n(t,{href:"#section1.1",title:"part2"}),n(t,{href:"#section1.1.1",title:"part3"})]),_:1})]),_:1})]),_:1})])}const v=a(p,[["render",m],["__scopeId","data-v-ac5716bc"]]);export{v as default};
