import{_ as d,r as i,o as r,m as _,b as n,w as t,p as h,i as p,a as l,e as c}from"./index-DBKJjhjt.js";const f={},m=e=>(h("data-v-5811c0c9"),e=e(),p(),e),C={class:"container"},E=m(()=>l("div",{class:"content"},[l("h1",{id:"section2"},"第二章 数据的表示和运算"),l("h2",{id:"section2.1"},"2.1 数制和编码"),l("h3",{id:"section2.1.1"},"2.1.1 进位计数制及其相互转换"),l("ul",null,[c(" 在计算机系统内部，信息是用二进制进行编码的。 "),l("li",null,"进位计数法。"),l("li",null,"不同进制的相互转换。")]),l("h3",{id:"section2.1.2"},"2.1.2 定点数的编码表示"),l("ul",null,[l("li",null,"真值和机器数。真值即实际值，机器数即符号化的真值。"),l("li",null,"机器数的定点表示。通常用补码整数表示整数，原码小数表示浮点数的尾数部分、用移码表示浮点数的阶码部分。"),l("li",null,"原码、补码、反码、移码。")]),l("h3",{id:"section2.1.3"},"2.1.3 整数的表示"),l("ul",null,[l("li",null,"无符号整数。无符号位。"),l("li",null,"有符号整数。有符号位。")]),l("h3",{id:"section2.1.4"},"2.1.4 C语言中的整数类型及类型转换"),l("ul",null,[l("li",null,"C语言中的整型数据类型。"),l("li",null,"有符号数和无符号数的转换。强制类型转换的结果是保持数值位不变，仅改变解释这些位的方式。"),l("li",null,"不同字长整数之间的转换。大字长变量向小字长变量转换时截断高位，小字长变量向大字长变量转换时无符号数做零拓展，有符号数做符号拓展。")]),l("h2",{id:"section2.2"},"2.2 运算方法和运算电路"),l("h3",{id:"section2.2.1"},"2.2.1 基本运算部件"),l("ul",null,[c(" 运算器由算术逻辑逻辑单元(ALU)、移位器、状态寄存器、通用寄存器组等组成。基本功能包括四则运算、逻辑运算、移位求补等。ALU核心部件是加法器。 "),l("li",null,"带标志加法器。溢出标志OF、符号标志SF、零标志ZF、进位借位标志CF。"),l("li",null,"算数逻辑单元(ALU)。")]),l("h3",{id:"section2.2.2"},"2.2.2 定点数的移位运算"),l("ul",null,[l("li",null,"逻辑移位。左移时，高位移出，低位补0；右移时，低位移出，高位补0。"),l("li",null,"算术移位。左移时，高位移出，低位补0；右移时，低位移出，高位补符号位。")]),l("h3",{id:"section2.2.3"},"2.2.3 定点数的加减运算"),l("ul",null,[l("li",null,"补码加减法运算。"),l("li",null,"溢出判别方法。一位符号位、双符号位、一位符号位和数值位进位情况。"),l("li",null,"加减运算电路。")]),l("h2",{id:"section2.3"},"2.3 浮点数的表示和运算"),l("h3",{id:"section2.3.1"},"2.3.1 浮点数的表示和运算"),l("ul",null,[l("li",null,"浮点数的表示格式。符号+阶码+尾数。"),l("li",null,"浮点数的表示范围。上溢和下溢，下溢作0处理。"),l("li",null,"浮点数的规格化。左规和右规。"),l("li",null," IEEE754标准。32位：1+8+23，64位：1+11+52。 偏置值为127和1023；IEEE规定隐藏位1在小数点之前。 ")]),l("h3",{id:"section2.3.2"},"2.3.2 浮点数的加减运算"),l("ul",null,[c(" 特点是阶码运算和尾数运算分开进行。 "),l("li",null,"对阶。小阶码向大阶码看齐。"),l("li",null,"尾数加减。"),l("li",null,"尾数规格化。"),l("li",null,"舍入。"),l("li",null,"溢出判断。")]),l("h3",{id:"section2.3.3"},"2.3.3 C语言中的浮点数类型"),l("p",null," 不同类型数的混合运算遵循类型提升准则。 "),l("h3",{id:"section2.3.4"},"2.3.4 数据的大小端和对齐存储"),l("ul",null,[l("li",null,"数据的大端方式和小端方式存储。"),l("li",null,"边界对齐方式存储。")]),l("br"),l("br"),l("br"),l("br"),l("br")],-1));function b(e,I){const u=i("el-col"),o=i("el-anchor-link"),s=i("el-anchor"),a=i("el-row");return r(),_("div",C,[n(a,{style:{height:"100%"}},{default:t(()=>[n(u,{span:18},{default:t(()=>[E]),_:1}),n(u,{span:6,style:{}},{default:t(()=>[n(s,null,{default:t(()=>[n(o,{href:"#section1",title:"part1"}),n(o,{href:"#section1.1",title:"part2"}),n(o,{href:"#section1.1.1",title:"part3"})]),_:1})]),_:1})]),_:1})])}const w=d(f,[["render",b],["__scopeId","data-v-5811c0c9"]]);export{w as default};
