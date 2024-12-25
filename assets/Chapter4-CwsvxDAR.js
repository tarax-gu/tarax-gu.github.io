import{_ as d,r as t,o as h,m as r,b as n,w as i,p as _,i as p,a as l,e as s}from"./index-ip4ZG4ws.js";const f={},m=e=>(_("data-v-9d655aa4"),e=e(),p(),e),B={class:"container"},C=m(()=>l("div",{class:"content"},[l("h1",{id:"section4"},"第四章 文件管理"),l("h2",{id:"section4.1"},"4.1 文件系统基础"),l("h3",{id:"section4.1.1"},"4.1.1 文件的基本概念"),l("p",null," 文件是以硬盘为载体的存储在计算机上的信息集合。用户的输入输出是以文件为基本单位的。 "),l("h3",{id:"section4.1.2"},"4.1.2 文件控制块"),l("p",null," 为了便于文件管理，引入了文件控制块的数据结构(FCB)。FCB主要包含基本信息、存取控制信息、使用信息。 "),l("h3",{id:"section4.1.3"},"4.1.3 文件的操作"),l("p",null," 文件属于抽象数据类型。操作系统提供一系列的系统调用，实现对文件的创建、删除、读、写、打开和关闭等操作。 当文件被打开后，所有的文件操作通过文件描述符来进行。 "),l("h3",{id:"section4.1.4"},"4.1.4 文件保护"),l("p",null," 解决访问控制最常用的方法是根据用户身份进行控制，为每个文件和目录增加一个访问控制表。 利用口令和密码也可以进行访问控制。 "),l("h3",{id:"section4.1.5"},"4.1.5 文件的逻辑结构"),l("ul",null,[l("li",null,"无结构文件。由字符流组成的流式文件。"),l("li",null,"有结构文件。由多个记录构成的文件可分为变长记录和定长记录。根据记录组织形式可分为顺序文件、索引文件、顺序索引文件。")]),l("h3",{id:"section4.1.6"},"4.1.6 文件的物理结构"),l("ul",null,[s("文件的物理结构就是文件数据在物理存储设备上如何分布和组织的。 "),l("li",null,"连续分配。"),l("li",null,"链接分配。隐式链接、显式链接(FAT(文件分配表))。"),l("li",null,"索引分配。单级索引、多级索引、混合索引。")]),l("h2",{id:"section4.2"},"4.2 目录"),l("h3",{id:"section4.2.1"},"4.2.1 目录的基本概念"),l("p",null," FCB的有序集合被称为文件目录，一个FCB就是一个文件目录项。 "),l("h3",{id:"section4.2.2"},"4.2.2 目录结构"),l("ul",null,[l("li",null,"单级目录结构。"),l("li",null,"两级目录结构。"),l("li",null,"树形目录结构。"),l("li",null,"无环图目录结构。")]),l("h3",{id:"section4.2.3"},"4.2.3 文件的操作"),l("p",null," 目录基本操作包含：搜索、创建文件、删除文件、创建目录、删除目录、显示目录、移动目录、修改目录。 "),l("h3",{id:"section4.2.4"},"4.2.4 文件共享"),l("ul",null,[l("li",null,"基于索引结点的共享方式(硬链接)。"),l("li",null,"利用符号实现文件共享(软链接)。")]),l("h2",{id:"section4.3"},"4.3 文件系统"),l("h3",{id:"section4.3.1"},"4.3.1 文件系统结构"),l("p",null," 文件系统提供高效和便捷的磁盘访问，以便允许存储、定位、提取数据。一个合理的文件系统层次结构如下：IO控制层、基本文件系统、文件组织模块、逻辑文件系统。 "),l("h3",{id:"section4.3.2"},"4.3.2 文件系统布局"),l("ul",null,[l("li",null,"文件系统在磁盘中的结构。主引导记录、引导块、超级块、空闲块信息。"),l("li",null,"文件系统在内存中的结构。安装表、目录结构、系统打开文件表、进程打开文件表。")]),l("h3",{id:"section4.3.3"},"4.3.3 外存空闲空间管理"),l("ul",null,[s(" 一个磁盘可以划分多个分区，每个分区都可以有单独的文件系统，包含文件系统的分区通常成为卷。 每个卷中，文件区和目录区是分离的。文件存储设备分成许多大小相同的物理块，并以块为单位交换信息。 "),l("li",null,"空闲表法。"),l("li",null,"空闲链表法。空闲盘块链、空闲盘区链。"),l("li",null,"位示图法。"),l("li",null,"成组链接法。")]),l("h3",{id:"section4.3.4"},"4.3.4 虚拟文件系统"),l("p",null," 虚拟文件系统屏蔽了不同文件系统的差异和操作细节，向上为用户提供了文件操作的统一调用接口。 "),l("h3",{id:"section4.3.5"},"4.3.5 文件系统挂载"),l("p",null," 文件系统在使用前需要先安装，也就是挂载。 "),l("br"),l("br"),l("br"),l("br"),l("br")],-1));function b(e,v){const c=t("el-col"),o=t("el-anchor-link"),u=t("el-anchor"),a=t("el-row");return h(),r("div",B,[n(a,{style:{height:"100%"}},{default:i(()=>[n(c,{span:18},{default:i(()=>[C]),_:1}),n(c,{span:6,style:{}},{default:i(()=>[n(u,null,{default:i(()=>[n(o,{href:"#section1",title:"part1"}),n(o,{href:"#section1.1",title:"part2"}),n(o,{href:"#section1.1.1",title:"part3"})]),_:1})]),_:1})]),_:1})])}const x=d(f,[["render",b],["__scopeId","data-v-9d655aa4"]]);export{x as default};