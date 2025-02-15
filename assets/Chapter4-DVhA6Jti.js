import{_,r as o,o as p,m as d,b as n,w as s,p as h,i as f,a as e,e as i}from"./index-DBKJjhjt.js";const j={},u=t=>(h("data-v-527cbafc"),t=t(),f(),t),x={class:"container"},m=u(()=>e("div",{class:"content"},[e("h1",{id:"section4"},"第四章 串"),e("h2",{id:"section4.1"},"4.1 串的模式匹配"),e("p",null," 字符串简称串，即一段有序的字符序列。 "),e("h3",{id:"section4.1.1"},"4.1.1简单的模式匹配算法"),e("p",null,[i("即进行简单的暴力匹配。 "),e("pre",null,[i("                    "),e("code",null,`
    int Index(string s,string t){
        int i = 0,j = 0;
        while(i < s.size() && j < t.size()){
            if(s[i]==t[j]){
                ++i;
                ++j;
            }
            else{
                i = i-j+1;
                j = 0;
            }
        }
        if(j>=t.size())return i-j;
        else return -1;
    }
                    `),i(`
                `)])]),e("h3",{id:"section4.1.2"},"4.1.2 串的模式匹配算法-KMP"),e("p",null," 利用目标串的部分匹配特性。计算目标串的最长相等前后缀长度，即可得到next数组，利用next数组即可进行快速的匹配。 当模式串的第i个位置和目标串的第j个位置发生失配时，跳到字串的第next[j]位置重新比较。 "),e("h3",{id:"section4.1.3"},"4.1.3 KMP算法的优化"),e("p",null," 当P(j)(即目标串P的第j个位置)等于P(next[j])时，下次的匹配必然失配，所以若出现P(j)=P(next(j))， 我们可以递归的将next[j]修改为next[next[j]],知道二者不等，更新后的数组命名为nextval。 "),e("br"),e("br"),e("br"),e("br"),e("br")],-1));function b(t,P){const l=o("el-col"),c=o("el-anchor-link"),a=o("el-anchor"),r=o("el-row");return p(),d("div",x,[n(r,{style:{height:"100%"}},{default:s(()=>[n(l,{span:18},{default:s(()=>[m]),_:1}),n(l,{span:6,style:{}},{default:s(()=>[n(a,null,{default:s(()=>[n(c,{href:"#section1",title:"part1"}),n(c,{href:"#section1.1",title:"part2"}),n(c,{href:"#section1.1.1",title:"part3"})]),_:1})]),_:1})]),_:1})])}const w=_(j,[["render",b],["__scopeId","data-v-527cbafc"]]);export{w as default};
