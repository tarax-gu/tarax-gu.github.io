import{d as $,u as T,r as a,o as l,c as f,w as e,a as m,b as n,e as V,h as q,f as E,g as z,p as B,i as D,_ as S,j as H,k as R,l as w,m as A,n as k,q as x,s as I,t as M,F as y}from"./index-D-NTUnPH.js";const N=t=>(B("data-v-e390c71f"),t=t(),D(),t),L={class:"l-content"},G=N(()=>m("span",null,[m("h3",null,"主页")],-1)),J=N(()=>m("span",null,[m("h3",null,"返回")],-1)),K={class:"r-content"},Q={class:"el-dropdown-link"},W=$({__name:"CommonHeader",setup(t){const _=T();function s(){_.push("/")}function o(){_.push("/msys")}return(r,d)=>{const v=a("el-icon"),c=a("el-button"),i=a("el-avatar"),u=a("el-dropdown-item"),h=a("el-dropdown-menu"),g=a("el-dropdown"),b=a("el-header");return l(),f(b,null,{default:e(()=>[m("div",L,[n(c,{size:"small",plain:"",onClick:s},{default:e(()=>[n(v,{size:20},{default:e(()=>[n(V(q))]),_:1})]),_:1}),G,n(c,{size:"small",plain:"",onClick:o,style:{"margin-left":"20px"}},{default:e(()=>[n(v,{size:20},{default:e(()=>[n(V(E))]),_:1})]),_:1}),J]),m("div",K,[n(g,null,{dropdown:e(()=>[n(h,null,{default:e(()=>[n(u,null,{default:e(()=>[z("个人中心")]),_:1}),n(u,null,{default:e(()=>[z("退出")]),_:1})]),_:1})]),default:e(()=>[m("span",Q,[n(i,{size:32,class:"mr-3",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})])]),_:1})])]),_:1})}}}),X=S(W,[["__scopeId","data-v-e390c71f"]]);function Y(){return{tags:[{path:"/msys",name:"mhome",label:"首页",icon:"home"}],currentMenu:null}}const O=H("allDAta",()=>{const t=R(Y());function _(o){o.name==="mhome"?t.value.currentMenu=null:t.value.tags.findIndex(d=>d.name===o.name)===-1&&t.value.tags.push(o)}function s(o){let r=t.value.tags.findIndex(d=>d.name===o.name);t.value.tags.splice(r,1)}return{state:t,selectMenu:_,updateTags:s}}),Z=t=>(B("data-v-a689f6e8"),t=t(),D(),t),ee=Z(()=>m("h3",null,"后台管理",-1)),ne=$({__name:"CommonAside",setup(t){const _=R([{path:"/muser",name:"muser",label:"用户管理",icon:"user",url:"UserManage/UserMange"},{label:"其他",icon:"location",path:"",children:[{path:"/mpage1",name:"mpage1",label:"页面1",icon:"setting",url:"Other/PageOne"},{path:"/mpage2",name:"mpage2",label:"页面2",icon:"setting",url:"Other/PageTwo"}]}]),s=w(()=>_.value.filter(u=>!u.children)),o=w(()=>_.value.filter(u=>u.children)),r=T(),d=A(),v=O(),c=w(()=>d.path);function i(u){r.push({name:u.name}),v.selectMenu(u)}return(u,h)=>{const g=a("el-menu-item"),b=a("el-menu-item-group"),F=a("el-sub-menu"),P=a("el-menu"),U=a("el-aside");return l(),f(U,{width:"180px"},{default:e(()=>[n(P,{class:"el-menu-vertical-demo","background-color":"#545c64","text-color":"#fff",collapse:!1,"default-active":c.value},{default:e(()=>[ee,(l(!0),k(y,null,x(s.value,p=>(l(),f(g,{index:p.path,key:p.path,onClick:C=>i(p)},{default:e(()=>[(l(),f(I(p.icon),{class:"icons"})),m("span",null,M(p.label),1)]),_:2},1032,["index","onClick"]))),128)),(l(!0),k(y,null,x(o.value,p=>(l(),f(F,{index:p.path,key:p.path},{title:e(()=>[(l(),f(I(p.icon),{class:"icons"})),m("span",null,M(p.label),1)]),default:e(()=>[n(b,null,{default:e(()=>[(l(!0),k(y,null,x(p.children,(C,j)=>(l(),f(g,{index:C.path,key:j,onClick:ue=>i(C)},{default:e(()=>[(l(),f(I(C.icon),{class:"icons"})),m("span",null,M(C.label),1)]),_:2},1032,["index","onClick"]))),128))]),_:2},1024)]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"])]),_:1})}}}),te=S(ne,[["__scopeId","data-v-a689f6e8"]]),oe={class:"tags"},ae=$({__name:"CommonTag",setup(t){const _=A(),s=O(),o=w(()=>s.state.tags),r=T(),d=c=>{console.log(c),r.push(c.path),s.selectMenu(c)},v=(c,i)=>{s.updateTags(c),c.name===_.name&&(i===s.state.tags.length?(s.selectMenu(o.value[i-1]),r.push(o.value[i-1].path)):(s.selectMenu(o.value[i]),r.push(o.value[i].path)))};return(c,i)=>{const u=a("el-tag");return l(),k("div",oe,[(l(!0),k(y,null,x(o.value,(h,g)=>(l(),f(u,{key:h.name,closable:h.name!=="mhome",effect:V(_).name===h.name?"dark":"plain",onClick:b=>d(h),onClose:b=>v(h,g)},{default:e(()=>[z(M(h.label),1)]),_:2},1032,["closable","effect","onClick","onClose"]))),128))])}}}),le=S(ae,[["__scopeId","data-v-f7ae6674"]]),se={class:"common-layout"},ce=$({__name:"ManagesystemView",setup(t){return(_,s)=>{const o=a("RouterView"),r=a("el-main"),d=a("el-container");return l(),k("div",se,[n(d,{height:"100%"},{default:e(()=>[n(te),n(d,null,{default:e(()=>[n(X),n(le),n(r,null,{default:e(()=>[n(o)]),_:1})]),_:1})]),_:1})])}}}),re=S(ce,[["__scopeId","data-v-c0c69b7c"]]);export{re as default};
