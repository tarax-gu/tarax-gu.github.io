import{d as D,k as C,l as N,E as $,x as V,G as F,r as b,o as s,m as h,a as f,b as v,w as c,t as y,F as p,n as E,u as n,e as x,c as B,C as K,H as S,I as i,J as U,K as G,L as H,M as I}from"./index-ip4ZG4ws.js";const J={class:"bordered-main"},R={style:{width:"100px",height:"100px"}},T={style:{"margin-top":"10px"}},O=D({__name:"2048game",setup(q){var l=C([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);const w=N(()=>{let u=0;for(let e=0;e<l.value.length;e++)for(let a=0;a<l.value[e].length;a++)u+=l.value[e][a];return u});var d=C(!1);$(d,(u,e)=>{u==!1&&e==!0&&(console.log("over"),alert("游戏结束，您的得分为"+w.value))}),V(()=>{document.addEventListener("keydown",k)}),F(()=>{document.removeEventListener("keydown",k)});function k(u){if(d.value==!0)switch(u.key){case"ArrowUp":r("up");break;case"ArrowDown":r("down");break;case"ArrowLeft":r("left");break;case"ArrowRight":r("right");break}}function j(){l.value.forEach((u,e)=>{u.forEach((a,t)=>{l.value[e][t]=0}),d.value=!0})}function m(){for(let u=0;u<l.value.length;u++)for(let e=0;e<l.value[u].length;e++)if(l.value[u][e]==0)return!0;for(let u=0;u<l.value.length-1;u++)for(let e=0;e<l.value[u].length-1;e++)if(l.value[u][e]==l.value[u+1][e]||l.value[u][e]==l.value[u][e+1])return!0;return!1}function L(){const u=Math.random();return u<.8?2:u<.9?4:u<.95?8:u<.99?16:32}function g(){let u=[];if(l.value.forEach((e,a)=>{e.forEach((t,o)=>{t==0&&u.push([a,o])})}),u.length!=0){let e=Math.floor(Math.random()*u.length),a=L();l.value[u[e][0]][u[e][1]]=a}}function r(u){if(u=="up"){for(let e=0;e<4;e++)for(let a=1;a<4;a++)if(l.value[a][e]!=0){let t=a-1;for(;t>=0&&l.value[t][e]==0;)t--;if(t<0)l.value[0][e]=l.value[a][e],l.value[a][e]=0;else if(l.value[t][e]==l.value[a][e])l.value[t][e]=2*l.value[t][e],l.value[a][e]=0;else{let o=l.value[a][e];l.value[a][e]=0,l.value[t+1][e]=o}}}if(u=="down"){for(let e=0;e<4;e++)for(let a=2;a>=0;a--)if(l.value[a][e]!=0){let t=a+1;for(;t<4&&l.value[t][e]==0;)t++;if(t>=4)l.value[3][e]=l.value[a][e],l.value[a][e]=0;else if(l.value[t][e]==l.value[a][e])l.value[t][e]=2*l.value[t][e],l.value[a][e]=0;else{let o=l.value[a][e];l.value[a][e]=0,l.value[t-1][e]=o}}}if(u=="left"){for(let e=0;e<4;e++)for(let a=1;a<4;a++)if(l.value[e][a]!=0){let t=a-1;for(;t>=0&&l.value[e][t]==0;)t--;if(t<0)l.value[e][0]=l.value[e][a],l.value[e][a]=0;else if(l.value[e][t]==l.value[e][a])l.value[e][t]=2*l.value[e][t],l.value[e][a]=0;else{let o=l.value[e][a];l.value[e][a]=0,l.value[e][t+1]=o}}}if(u=="right"){for(let e=0;e<4;e++)for(let a=2;a>=0;a--)if(l.value[e][a]!=0){let t=a+1;for(;t<4&&l.value[e][t]==0;)t++;if(t>=4)l.value[e][3]=l.value[e][a],l.value[e][a]=0;else if(l.value[e][t]==l.value[e][a])l.value[e][t]=2*l.value[e][t],l.value[e][a]=0;else{let o=l.value[e][a];l.value[e][a]=0,l.value[e][t-1]=o}}}g(),d.value=m(),console.log(m())}return(u,e)=>{const a=b("el-row"),t=b("el-col");return s(),h(p,null,[f("div",J,[v(a,null,{default:c(()=>[f("div",null,"分数："+y(w.value),1)]),_:1}),(s(!0),h(p,null,E(n(l),(o,M)=>(s(),B(a,{key:M,gutter:10},{default:c(()=>[(s(!0),h(p,null,E(o,(_,A)=>(s(),B(t,{key:A,span:6},{default:c(()=>[f("div",R,[K(f("div",{class:"grid-content"},y(_),513),[[S,_]])])]),_:2},1024))),128))]),_:2},1024))),128)),v(n(i),{onClick:g},{default:c(()=>[x("开始游戏")]),_:1}),v(n(i),{onClick:j},{default:c(()=>[x("重新开始")]),_:1})]),f("div",T,[v(n(i),{icon:n(U),onClick:e[0]||(e[0]=o=>r("up"))},null,8,["icon"]),v(n(i),{icon:n(G),onClick:e[1]||(e[1]=o=>r("down"))},null,8,["icon"]),v(n(i),{icon:n(H),onClick:e[2]||(e[2]=o=>r("left"))},null,8,["icon"]),v(n(i),{icon:n(I),onClick:e[3]||(e[3]=o=>r("right"))},null,8,["icon"])])],64)}}});export{O as default};
