import{a as l,c as a,b as r}from"./index.PXxL51Wy.js";import{_ as n}from"./_plugin-vue_export-helper.DlAUqK2U.js";const _={__name:"ColorSwitch",setup(s,{expose:e}){e();const t={toggleDark:()=>{const o=localStorage.getItem("color-scheme")==="dark"?"light":"dark";localStorage.setItem("color-scheme",o),document.querySelector("html").dataset.theme=o}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},i=r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7",viewBox:"0 0 24 24"},[r("path",{fill:"currentColor",d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Zm0-1.5v-17a8.5 8.5 0 0 1 0 17Z"})],-1),m=[i];function p(s,e,c,t,o,u){return l(),a("button",{onClick:e[0]||(e[0]=d=>t.toggleDark()),"aria-label":"Toggle color scheme",class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"},m)}const f=n(_,[["render",p]]);export{f as default};
