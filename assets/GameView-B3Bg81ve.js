import{d as w,r as t,o as v,m as y,b as e,w as n,a as o,D as _}from"./index-ip4ZG4ws.js";const V={class:"common-layout"},B=o("div",{class:"flex items-center"},[o("span",{class:"text-large font-600 mr-3"}," 小游戏")],-1),b=o("h3",{style:{display:"inline-block","margin-left":"10px"}},"游戏列表",-1),C=o("span",null,"2048",-1),N=o("span",null,"snake",-1),R=o("span",null,"test",-1),G=w({__name:"GameView",setup($){function u(l){l==1?(console.log(1),_.push("/game/2048")):l==2?_.push("/game/snake"):_.push("/game/test")}return(l,a)=>{const i=t("el-page-header"),m=t("el-header"),d=t("icon-menu"),p=t("el-icon"),s=t("el-menu-item"),r=t("el-menu"),f=t("el-col"),h=t("el-row"),g=t("el-aside"),x=t("RouterView"),k=t("el-main"),c=t("el-container");return v(),y("div",V,[e(c,null,{default:n(()=>[e(m,null,{default:n(()=>[e(i,{title:"返回",onBack:a[0]||(a[0]=D=>l.$router.push("/"))},{content:n(()=>[B]),_:1})]),_:1}),e(c,null,{default:n(()=>[e(g,null,{default:n(()=>[e(h,null,{default:n(()=>[e(f,null,{default:n(()=>[e(p,{style:{display:"inline-block"}},{default:n(()=>[e(d)]),_:1}),b,e(r,{"default-active":"1",class:"el-menu-vertical-demo",onSelect:u},{default:n(()=>[e(s,{index:"1"},{default:n(()=>[C]),_:1}),e(s,{index:"2"},{default:n(()=>[N]),_:1}),e(s,{index:"3"},{default:n(()=>[R]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(k,null,{default:n(()=>[e(x)]),_:1})]),_:1})]),_:1})])}}});export{G as default};
