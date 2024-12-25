import{_ as d,r as e,o as r,m as _,b as n,w as t,p as h,i as p,a as l,e as o}from"./index-ip4ZG4ws.js";const f={},m=i=>(h("data-v-bba5965f"),i=i(),p(),i),b={class:"container"},v=m(()=>l("div",{class:"content"},[l("h1",{id:"section5"},"第五章 树与二叉树"),l("h2",{id:"section5.1"},"5.1 树的基本概念"),l("h3",{id:"section5.1.1"},"5.1.1 树的定义"),l("ul",null,[o("树是n个结点的有限集。任何一个非空树应满足： "),l("li",null,"有且只有一个特定的根节点"),l("li",null,"其余结点集合为子树"),l("li",null,"根结点没有前驱，其余结点只有一个前驱"),l("li",null,"树的所有结点可有零个或者多个后后继")]),l("h3",{id:"section5.1.2"},"5.1.2 基本术语"),l("ul",null,[l("li",null,"祖先、子孙、双亲、孩子、兄弟、堂兄弟"),l("li",null,"结点的度和树的度"),l("li",null,"分支结点和叶节点"),l("li",null,"结点的深度、高度和层次"),l("li",null,"有序树和无序树"),l("li",null,"路径和路径长度"),l("li",null,"森林")]),l("h3",{id:"section5.1.3"},"5.1.3 树的性质"),l("ul",null,[l("li",null,"树的结点数n等于所有结点的度数之和加1"),l("li",null,"度为m的树中第i层至多有m的i-1次方个结点")]),l("h2",{id:"section5.2"},"5.2 二叉树"),l("h3",{id:"section5.2.1"},"5.2.1 二叉树的定义及其主要特性"),l("ul",null,[o("二叉树是一种特殊的树形结构，每个结点至多有两棵子树，并且子树有序。 以下为几种特殊的二叉树： "),l("li",null,"满二叉树。"),l("li",null,"完全二叉树。"),l("li",null,"二叉排序树。"),l("li",null,"平衡二叉树。"),l("li",null,"正则二叉树。即只存在度为0或者2的结点"),o(" 二叉树的性质如下： "),l("li",null,"非空二叉树叶节点的个数等于度为2的结点数加1")]),l("h3",{id:"section5.2.2"},"5.2.2 二叉树的存储结构"),l("ul",null,[l("li",null,"顺序存储。（空间利用率较低）"),l("li",null,"链式存储。在n个结点的二叉链表中，含有n+1个空链域。")]),l("h2",{id:"section5.3"},"5.3 二叉树的遍历和线索二叉树"),l("h3",{id:"section5.3.1"},"5.3.1 二叉树的遍历"),l("ul",null,[l("li",null,"先序遍历"),l("li",null,"中序遍历"),l("li",null,"后序遍历"),l("li",null,"层序遍历"),l("li",null,"根据遍历确定二叉树。中序加任意一种遍历可以确定二叉树，其他二者组合不能确定。")]),l("h3",{id:"section5.3.2"},"5.3.2 线索二叉树"),l("p",null," 遍历二叉树得到一个结点的线性序列，每个结点都有一个前驱和后继。 将前驱或者后继存入空的指针域，即形成线索二叉树。遍历时可以使用其线索进行快速遍历。 "),l("h2",{id:"section5.4"},"5.4 树、森林"),l("h3",{id:"section5.4.1"},"5.4.1 树的存储结构"),l("ul",null,[l("li",null,"双亲表示法。顺序存储，结点设置一个伪指针指向双亲"),l("li",null,"孩子表示法。将每个节点的孩子使用单链表存储。"),l("li",null,"孩子双亲表示法。即二叉树表示法，二叉链表存储。")]),l("h3",{id:"section5.4.2"},"5.4.2 树、森林与二叉树的转换"),l("ul",null,[o("二叉树和树可以用二叉链表作为存储结构，因此可以将一颗树转换为二叉树。 "),l("li",null,"树变换为二叉树。左孩子右兄弟。"),l("li",null,"森林转换为二叉树。先将树转化成二叉树，再将树作为前一树根的右兄弟。"),l("li",null,"二叉树转换成森林。将根的右链断开，再分别转换成树。")]),l("h3",{id:"section5.4.3"},"5.4.3 树和森林的遍历"),l("p",null," 树的遍历主要有两种形式：先根遍历，后根遍历。 森林的遍历主要有：先序遍历，后序遍历。 其中，先序遍历和二叉树的先序遍历相对应，后序遍历和二叉树的中序遍历相对应。 "),l("h3",{id:"section5.4.4"},"5.4.4 树和二叉树的应用"),l("ul",null,[l("li",null,"哈夫曼树和哈夫曼编码。"),l("li",null,"并查集。")]),l("br"),l("br"),l("br"),l("br"),l("br")],-1));function w(i,x){const c=e("el-col"),u=e("el-anchor-link"),s=e("el-anchor"),a=e("el-row");return r(),_("div",b,[n(a,{style:{height:"100%"}},{default:t(()=>[n(c,{span:18},{default:t(()=>[v]),_:1}),n(c,{span:6,style:{}},{default:t(()=>[n(s,null,{default:t(()=>[n(u,{href:"#section1",title:"part1"}),n(u,{href:"#section1.1",title:"part2"}),n(u,{href:"#section1.1.1",title:"part3"})]),_:1})]),_:1})]),_:1})])}const I=d(f,[["render",w],["__scopeId","data-v-bba5965f"]]);export{I as default};