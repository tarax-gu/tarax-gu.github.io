import{d as v,c as k,a as e,w as n,r as t,o as y,b as o,f as s}from"./index-BuEscAmn.js";const V={class:"common-layout"},B=o("div",{class:"flex items-center"},[o("span",{class:"text-large font-600 mr-3"}," 小游戏")],-1),b=o("h3",{style:{display:"inline-block","margin-left":"10px"}},"游戏列表",-1),C=o("span",null,"2048",-1),N=o("span",null,"test",-1),G=v({__name:"GameView",setup(R){function i(l){l==1?(console.log(1),s.replace("/game/2048")):l==2&&s.replace("/game/test")}return(l,_)=>{const m=t("el-page-header"),u=t("el-header"),d=t("icon-menu"),r=t("el-icon"),a=t("el-menu-item"),p=t("el-menu"),f=t("el-col"),h=t("el-row"),g=t("el-aside"),w=t("RouterView"),x=t("el-main"),c=t("el-container");return y(),k("div",V,[e(c,null,{default:n(()=>[e(u,null,{default:n(()=>[e(m,{title:"返回",onBack:_[0]||(_[0]=$=>l.$router.push("/"))},{content:n(()=>[B]),_:1})]),_:1}),e(c,null,{default:n(()=>[e(g,null,{default:n(()=>[e(h,null,{default:n(()=>[e(f,null,{default:n(()=>[e(r,{style:{display:"inline-block"}},{default:n(()=>[e(d)]),_:1}),b,e(p,{"default-active":"1",class:"el-menu-vertical-demo",onSelect:i},{default:n(()=>[e(a,{index:"1"},{default:n(()=>[C]),_:1}),e(a,{index:"2"},{default:n(()=>[N]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(x,null,{default:n(()=>[e(w)]),_:1})]),_:1})]),_:1})])}}});export{G as default};