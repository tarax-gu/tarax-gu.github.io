import{_ as w,k as s,x as g,N as I,o as R,m as b,a as c,p as G,i as T}from"./index-ip4ZG4ws.js";const E=r=>(G("data-v-0105c290"),r=r(),T(),r),H={id:"snake-game"},L=E(()=>c("h2",null,"贪吃蛇",-1)),S={class:"game-area"},C={ref:"gameCanvas",width:"400px",height:"400px"},D={__name:"snake",setup(r){const t=s(null),l=s([{x:10,y:10},{x:9,y:10},{x:8,y:10}]),o=s({x:15,y:15}),a=s("RIGHT"),v=s(null),f=s(!1),u=s(null),k=()=>{f.value=!0,h(),v.value=setInterval(_,100),window.addEventListener("keydown",y)},x=()=>{clearInterval(v.value),f.value=!1,l.value=[{x:10,y:10},{x:9,y:10},{x:8,y:10}],o.value=i(),a.value="RIGHT",d()},h=()=>{t.value=u.value.getContext("2d"),o.value=i(),d()},i=()=>{const e=Math.floor(Math.random()*40),n=Math.floor(Math.random()*40);return{x:e,y:n}},d=()=>{t.value.clearRect(0,0,u.value.width,u.value.height),l.value.forEach((e,n)=>{t.value.fillStyle=n===0?"green":"lightgreen",t.value.fillRect(e.x*10,e.y*10,10,10),t.value.strokeRect(e.x*10,e.y*10,10,10)}),t.value.fillStyle="red",t.value.fillRect(o.value.x*10,o.value.y*10,10,10)},_=()=>{const e={...l.value[0]};switch(a.value){case"UP":e.y-=1;break;case"DOWN":e.y+=1;break;case"LEFT":e.x-=1;break;case"RIGHT":e.x+=1;break}if(m(e)){alert("游戏结束！"),x();return}e.x===o.value.x&&e.y===o.value.y?(l.value.unshift(e),o.value=i()):(l.value.unshift(e),l.value.pop()),d()},m=e=>e.x<0||e.x>=40||e.y<0||e.y>=40?!0:l.value.some((n,p)=>p!==0&&n.x===e.x&&n.y===e.y),y=e=>{switch(e.key){case"ArrowUp":a.value!=="DOWN"&&(a.value="UP");break;case"ArrowDown":a.value!=="UP"&&(a.value="DOWN");break;case"ArrowLeft":a.value!=="RIGHT"&&(a.value="LEFT");break;case"ArrowRight":a.value!=="LEFT"&&(a.value="RIGHT");break}};return g(()=>{u.value=document.querySelector("canvas")}),I(()=>{clearInterval(v.value),window.removeEventListener("keydown",y)}),(e,n)=>(R(),b("div",H,[L,c("div",S,[c("canvas",C,null,512)]),c("div",{class:"controls"},[c("button",{onClick:k},"开始游戏"),c("button",{onClick:x},"重置游戏")])]))}},N=w(D,[["__scopeId","data-v-0105c290"]]);export{N as default};