import{r as m,o as h,w as g,a as k,c as B}from"./index.PXxL51Wy.js";import{u as w}from"./index.Cm2xnGYQ.js";import{s as r,a as y}from"./store.D9UzEAUg.js";import{_ as T}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{u as _}from"./index.D_RYY94p.js";const q={__name:"Init",setup(E,{expose:d}){d();const{width:i}=w(),a=m(!1);h(()=>{const l=document.documentElement,b=document.getElementsByTagName("html")[0],S=new Date().getTime();window.onload=function(){const e=new Date().getTime()-S;document.documentElement.setAttribute("data-speed",Math.round(e/1e3))};const v=navigator.userAgent;/iPad|iPhone|iPod/.test(v)&&document.documentElement.setAttribute("data-ios",1),setTimeout(()=>{b.style["scroll-behavior"]="smooth"},500);let p=0,f=!1;function u(t,e){l.setAttribute(t,String(e))}const x=_(()=>{const t=window.scrollY,e=t-p,o=Math.sign(e)===-1,s=t+window.innerHeight>document.body.offsetHeight-100,n=t<100;(e<-15||e>15)&&(f=o),u("data-is-scrolling-up",f),u("data-is-bottom",s),u("data-is-top",n),p=t},20);window.addEventListener("scroll",()=>x(),{passive:!0});const A=document.querySelectorAll(".parallax-wrap");document.documentElement.dataset.ios||A.forEach(t=>{t.querySelectorAll(".parallax").forEach(o=>o.animate({transform:["none","translateY(50%)"]},{fill:"both",timeline:new ViewTimeline({subject:t}),rangeStart:{rangeName:"exit",offset:CSS.percent(5)},rangeEnd:{rangeName:"exit",offset:CSS.percent(100)}}))}),document.querySelectorAll("[href='#sign-in']").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),r.set({show:!0,type:"auth",link:"auth",auth:"sign_in"})})}),document.querySelectorAll("[href='#sign-up']").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),r.set({show:!0,type:"auth",link:"auth",auth:"sign_up"})})}),document.querySelectorAll("[data-dialog]").forEach(t=>{const e=t.dataset.dialog,o=t.dataset.type;document.querySelectorAll(`[href='#${e}']`).forEach(n=>{n.addEventListener("click",D=>{D.preventDefault(),r.set({show:!0,link:e,type:o})})})}),document.querySelectorAll("[data-popup]").forEach(t=>{const e=t.dataset.popup;document.querySelectorAll(`[href='#${e}']`).forEach(s=>{s.addEventListener("click",n=>{n.preventDefault(),y.set({show:!0,type:e})})})})}),g(i,l=>{a.value||(console.log(`%c ♻️🔋+ 🧠👷🏽+ 🗜 = 🚀🍃🌐
%cThis site has a low carbon footprint 
%c🪙CREDITS:
%cTheme based on Musk'uy-Winayta 🌌
%cby: https://muskuy-winayta.netlify.app/`,"font-family:Verdana; font-size: 20px; color: #2A4D47; font-weight:bold; padding: 5px 0; opacity: 0.5; ","font-family:Verdana; font-size: 25px; color: #2A4D47; font-weight:bold; padding: 5px 0; ","font-family:Verdana; font-size:16px; color: #2A4D47; font-weight:bold;  padding: 5px 0; ","font-family:Verdana; font-size:12px; color: #2A4D47; padding: 2px 0; ","font-family:Verdana; font-size:12px; color: #2A4D47; padding: 2px 0; "),a.value=!0)});const c={width:i,shown:a,watch:g,ref:m,onMounted:h,get useWindowSize(){return w},get useDebounceFn(){return _},get showPopup(){return y},get showDialog(){return r}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},z={class:"hide hidden"};function P(E,d,i,a,c,l){return k(),B("div",z)}const j=T(q,[["render",P]]);export{j as default};
