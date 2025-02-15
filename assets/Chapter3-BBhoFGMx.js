import{_ as d,r as t,o as u,m as r,b as e,w as o,p as h,i as _,a as l,e as p}from"./index-DBKJjhjt.js";const f={},m=n=>(h("data-v-7f496ef3"),n=n(),_(),n),b={class:"container"},v=m(()=>l("div",{class:"content"},[l("h1",{id:"section3"},"第三章 栈、队列、数组"),l("h2",{id:"section3.1"},"3.1 栈"),l("h3",{id:"section3.1.1"},"3.1.1 栈的基本概念"),l("p",null," 栈是只允许在一端（栈顶）进行插入和删除操作的线性表。栈的操作特性可以明显地概括为后进先出。 "),l("h3",{id:"section3.1.2"},"3.1.2 栈的顺序存储结构"),l("ul",null,[l("li",null,"顺序栈。一组地址连续的存储单元，并有一个指针指向栈顶。"),l("li",null,"共享栈。两个栈共享一段存储空间")]),l("h3",{id:"section3.1.3"},"3.1.3 栈的链式存储结构"),l("p",null," 通常采用单链表实现，只在表头进行操作。 "),l("h2",{id:"section3.2"},"3.2 队列"),l("h3",{id:"section3.2.1"},"3.2.1 队列的基本概念"),l("p",null," 队列只允许在表的一端进行插入，而在表的另一端进行删除。队列的操作特性是先进先出。 "),l("h3",{id:"section3.2.2"},"3.2.2 队列的顺序存储结构"),l("p",null," 一组地址连续的存储单元，并有一个指针指向队头，一个指针指向队尾。 为了解决假溢出问题，使用循环队列。 "),l("h3",{id:"section3.2.3"},"3.2.3 队列的链式存储结构"),l("p",null," 同时有队头指针和队尾指针的单链表。在队尾进行入队，在队头进行出队。 "),l("h2",{id:"section3.3"},"3.3 栈和队列的应用"),l("h3",{id:"section3.3.1"},"3.3.1 栈的应用"),l("ul",null,[l("li",null,"括号匹配"),l("li",null,"表达式求值"),l("li",null,"递归转换非递归")]),l("h3",{id:"section3.3.2"},"3.3.2 队列的应用"),l("ul",null,[l("li",null,"层次遍历"),l("li",null,"缓冲区"),l("li",null,"CPU调度")]),l("h2",{id:"section3.4"},"3.4 数组和特殊矩阵"),l("h3",{id:"section3.4.1"},"3.4.1 数组的定义"),l("p",null," 数组即n个相同数据元素构成的有限序列。 "),l("h3",{id:"section3.4.2"},"3.4.2 数组的存储结构"),l("p",null," 一个数组占用计算机一段连续的空间。对于多维数组，可以按照行优先或列优先进行映射。 "),l("h3",{id:"section3.4.3"},"3.4.3 特殊矩阵的压缩存储"),l("ul",null,[p(" 指多个相同的值只分配一个地址空间，0元素不占空间。 "),l("li",null,"对称矩阵"),l("li",null,"三角矩阵"),l("li",null,"三对角矩阵")]),l("h3",{id:"section3.4.4"},"3.4.4 稀疏矩阵"),l("p",null," 可用三元组对于元素进行存储。 "),l("br"),l("br"),l("br"),l("br"),l("br")],-1));function w(n,x){const c=t("el-col"),i=t("el-anchor-link"),s=t("el-anchor"),a=t("el-row");return u(),r("div",b,[e(a,{style:{height:"100%"}},{default:o(()=>[e(c,{span:18},{default:o(()=>[v]),_:1}),e(c,{span:6,style:{}},{default:o(()=>[e(s,null,{default:o(()=>[e(i,{href:"#section1",title:"part1"}),e(i,{href:"#section1.1",title:"part2"}),e(i,{href:"#section1.1.1",title:"part3"})]),_:1})]),_:1})]),_:1})])}const C=d(f,[["render",w],["__scopeId","data-v-7f496ef3"]]);export{C as default};
