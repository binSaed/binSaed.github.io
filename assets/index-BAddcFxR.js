const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutSection-aWYYveMN.js","assets/radix-TSIrOO7o.js","assets/react-vendor-B2qPguBR.js","assets/SectionHeader-CNblP6nz.js","assets/ExperienceSection-BfoPt_5H.js","assets/ProjectsSection-DipORIPG.js","assets/arrow-up-right-B0aFxB7-.js","assets/CaseStudiesSection-BvtHtpgm.js","assets/caseStudies-BVc6BLoM.js","assets/ArticlesSection-DUkspj1r.js","assets/SkillsSection-CPTIM4VM.js","assets/smartphone-CCjekQUv.js","assets/RecommendationsSection-CgQMBTZJ.js","assets/FAQSection-H2Ulo_UW.js","assets/AvailabilitySection-Bll1WLQo.js","assets/clock-BQ4218F2.js","assets/ContactSection-B9nqupXU.js","assets/Footer-DAuEP6o0.js","assets/ArticlePage-QZnOBAWr.js","assets/MarkdownContent-2oHZf23c.js","assets/arrow-left-Cndaw-dH.js","assets/ArticlesPage-DouMTKhA.js","assets/RecommendationsPage-DnV_hh26.js","assets/ProjectsPage-DpkybmUX.js","assets/CaseStudiesPage-Ca8oPoi8.js","assets/CaseStudyPage-THEFzTQS.js"])))=>i.map(i=>d[i]);
var qo=Object.defineProperty;var rr=e=>{throw TypeError(e)};var Bo=(e,t,n)=>t in e?qo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var De=(e,t,n)=>Bo(e,typeof t!="symbol"?t+"":t,n),Hn=(e,t,n)=>t.has(e)||rr("Cannot "+n);var m=(e,t,n)=>(Hn(e,t,"read from private field"),n?n.call(e):t.get(e)),D=(e,t,n)=>t.has(e)?rr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),R=(e,t,n,a)=>(Hn(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),B=(e,t,n)=>(Hn(e,t,"access private method"),n);var yn=(e,t,n,a)=>({set _(r){R(e,t,r,n)},get _(){return m(e,t,a)}});import{j as s,V as ns,R as as,A as rs,C as ss,T as os,D as is,P as Go,a as ls,b as zo,S as Jo,O as hn,c as mn,d as ja,e as $n,f as In,g as Ca,h as Pa,i as Wo,k as cs,l as Vo,m as Ko,n as ds,o as Qo,u as jt,p as ot,q as an}from"./radix-TSIrOO7o.js";import{a as Yo,r as h,R as x,v as Xo,g as Na,u as $a,c as us,L as sr,B as Zo,d as ei,e as Je,N as ti}from"./react-vendor-B2qPguBR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const ni="modulepreload",ai=function(e){return"/"+e},or={},le=function(t,n,a){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(n.map(u=>{if(u=ai(u),u in or)return;or[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":ni,d||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),d)return new Promise((b,c)=>{f.addEventListener("load",b),f.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return r.then(i=>{for(const l of i||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};var hs,ir=Yo;hs=ir.createRoot,ir.hydrateRoot;const ri=1,si=1e6;let qn=0;function oi(){return qn=(qn+1)%Number.MAX_SAFE_INTEGER,qn.toString()}const Bn=new Map,lr=e=>{if(Bn.has(e))return;const t=setTimeout(()=>{Bn.delete(e),nn({type:"REMOVE_TOAST",toastId:e})},si);Bn.set(e,t)},ii=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,ri)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?lr(n):e.toasts.forEach(a=>{lr(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===n||n===void 0?{...a,open:!1}:a)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},En=[];let Tn={toasts:[]};function nn(e){Tn=ii(Tn,e),En.forEach(t=>{t(Tn)})}function li({...e}){const t=oi(),n=r=>nn({type:"UPDATE_TOAST",toast:{...r,id:t}}),a=()=>nn({type:"DISMISS_TOAST",toastId:t});return nn({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:r=>{r||a()}}}),{id:t,dismiss:a,update:n}}function ci(){const[e,t]=h.useState(Tn);return h.useEffect(()=>(En.push(t),()=>{const n=En.indexOf(t);n>-1&&En.splice(n,1)}),[e]),{...e,toast:li,dismiss:n=>nn({type:"DISMISS_TOAST",toastId:n})}}function ms(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=ms(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function ps(){for(var e,t,n=0,a="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=ms(e))&&(a&&(a+=" "),a+=t);return a}const cr=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,dr=ps,Ia=(e,t)=>n=>{var a;if((t==null?void 0:t.variants)==null)return dr(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:o}=t,i=Object.keys(r).map(d=>{const p=n==null?void 0:n[d],f=o==null?void 0:o[d];if(p===null)return null;const b=cr(p)||cr(f);return r[d][b]}),l=n&&Object.entries(n).reduce((d,p)=>{let[f,b]=p;return b===void 0||(d[f]=b),d},{}),u=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((d,p)=>{let{class:f,className:b,...c}=p;return Object.entries(c).every(v=>{let[g,w]=v;return Array.isArray(w)?w.includes({...o,...l}[g]):{...o,...l}[g]===w})?[...d,f,b]:d},[]);return dr(e,i,u,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fs=(...e)=>e.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ui={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=h.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:r="",children:o,iconNode:i,...l},u)=>h.createElement("svg",{ref:u,...ui,width:t,height:t,stroke:e,strokeWidth:a?Number(n)*24/Number(t):n,className:fs("lucide",r),...l},[...i.map(([d,p])=>h.createElement(d,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=(e,t)=>{const n=h.forwardRef(({className:a,...r},o)=>h.createElement(hi,{ref:o,iconNode:t,className:fs(`lucide-${di(e)}`,a),...r}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=Q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=Q("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=Q("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=Q("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=Q("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=Q("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=Q("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=Q("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=Q("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=Q("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=Q("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=Q("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=Q("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=Q("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=Q("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=Q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=Q("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=Q("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=Q("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=Q("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=Q("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=Q("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=Q("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=Q("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=Q("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=Q("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=Q("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Fa="-",ji=e=>{const t=Pi(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:i=>{const l=i.split(Fa);return l[0]===""&&l.length!==1&&l.shift(),vs(l,t)||Ci(i)},getConflictingClassGroupIds:(i,l)=>{const u=n[i]||[];return l&&a[i]?[...u,...a[i]]:u}}},vs=(e,t)=>{var i;if(e.length===0)return t.classGroupId;const n=e[0],a=t.nextPart.get(n),r=a?vs(e.slice(1),a):void 0;if(r)return r;if(t.validators.length===0)return;const o=e.join(Fa);return(i=t.validators.find(({validator:l})=>l(o)))==null?void 0:i.classGroupId},ur=/^\[(.+)\]$/,Ci=e=>{if(ur.test(e)){const t=ur.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Pi=e=>{const{theme:t,prefix:n}=e,a={nextPart:new Map,validators:[]};return $i(Object.entries(e.classGroups),n).forEach(([o,i])=>{sa(i,a,o,t)}),a},sa=(e,t,n,a)=>{e.forEach(r=>{if(typeof r=="string"){const o=r===""?t:hr(t,r);o.classGroupId=n;return}if(typeof r=="function"){if(Ni(r)){sa(r(a),t,n,a);return}t.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([o,i])=>{sa(i,hr(t,o),n,a)})})},hr=(e,t)=>{let n=e;return t.split(Fa).forEach(a=>{n.nextPart.has(a)||n.nextPart.set(a,{nextPart:new Map,validators:[]}),n=n.nextPart.get(a)}),n},Ni=e=>e.isThemeGetter,$i=(e,t)=>t?e.map(([n,a])=>{const r=a.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([i,l])=>[t+i,l])):o);return[n,r]}):e,Ii=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,a=new Map;const r=(o,i)=>{n.set(o,i),t++,t>e&&(t=0,a=n,n=new Map)};return{get(o){let i=n.get(o);if(i!==void 0)return i;if((i=a.get(o))!==void 0)return r(o,i),i},set(o,i){n.has(o)?n.set(o,i):r(o,i)}}},xs="!",Oi=e=>{const{separator:t,experimentalParseClassName:n}=e,a=t.length===1,r=t[0],o=t.length,i=l=>{const u=[];let d=0,p=0,f;for(let w=0;w<l.length;w++){let E=l[w];if(d===0){if(E===r&&(a||l.slice(w,w+o)===t)){u.push(l.slice(p,w)),p=w+o;continue}if(E==="/"){f=w;continue}}E==="["?d++:E==="]"&&d--}const b=u.length===0?l:l.substring(p),c=b.startsWith(xs),v=c?b.substring(1):b,g=f&&f>p?f-p:void 0;return{modifiers:u,hasImportantModifier:c,baseClassName:v,maybePostfixModifierPosition:g}};return n?l=>n({className:l,parseClassName:i}):i},Di=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(a=>{a[0]==="["?(t.push(...n.sort(),a),n=[]):n.push(a)}),t.push(...n.sort()),t},Li=e=>({cache:Ii(e.cacheSize),parseClassName:Oi(e),...ji(e)}),Mi=/\s+/,Fi=(e,t)=>{const{parseClassName:n,getClassGroupId:a,getConflictingClassGroupIds:r}=t,o=[],i=e.trim().split(Mi);let l="";for(let u=i.length-1;u>=0;u-=1){const d=i[u],{modifiers:p,hasImportantModifier:f,baseClassName:b,maybePostfixModifierPosition:c}=n(d);let v=!!c,g=a(v?b.substring(0,c):b);if(!g){if(!v){l=d+(l.length>0?" "+l:l);continue}if(g=a(b),!g){l=d+(l.length>0?" "+l:l);continue}v=!1}const w=Di(p).join(":"),E=f?w+xs:w,k=E+g;if(o.includes(k))continue;o.push(k);const S=r(g,v);for(let P=0;P<S.length;++P){const N=S[P];o.push(E+N)}l=d+(l.length>0?" "+l:l)}return l};function Ui(){let e=0,t,n,a="";for(;e<arguments.length;)(t=arguments[e++])&&(n=ks(t))&&(a&&(a+=" "),a+=n);return a}const ks=e=>{if(typeof e=="string")return e;let t,n="";for(let a=0;a<e.length;a++)e[a]&&(t=ks(e[a]))&&(n&&(n+=" "),n+=t);return n};function Hi(e,...t){let n,a,r,o=i;function i(u){const d=t.reduce((p,f)=>f(p),e());return n=Li(d),a=n.cache.get,r=n.cache.set,o=l,l(u)}function l(u){const d=a(u);if(d)return d;const p=Fi(u,n);return r(u,p),p}return function(){return o(Ui.apply(null,arguments))}}const X=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Ss=/^\[(?:([a-z-]+):)?(.+)\]$/i,qi=/^\d+\/\d+$/,Bi=new Set(["px","full","screen"]),Gi=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,zi=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ji=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Wi=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Vi=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Le=e=>Ct(e)||Bi.has(e)||qi.test(e),We=e=>Jt(e,"length",nl),Ct=e=>!!e&&!Number.isNaN(Number(e)),Jn=e=>Jt(e,"number",Ct),Kt=e=>!!e&&Number.isInteger(Number(e)),Ki=e=>e.endsWith("%")&&Ct(e.slice(0,-1)),F=e=>Ss.test(e),Ve=e=>Gi.test(e),Qi=new Set(["length","size","percentage"]),Yi=e=>Jt(e,Qi,Es),Xi=e=>Jt(e,"position",Es),Zi=new Set(["image","url"]),el=e=>Jt(e,Zi,rl),tl=e=>Jt(e,"",al),Qt=()=>!0,Jt=(e,t,n)=>{const a=Ss.exec(e);return a?a[1]?typeof t=="string"?a[1]===t:t.has(a[1]):n(a[2]):!1},nl=e=>zi.test(e)&&!Ji.test(e),Es=()=>!1,al=e=>Wi.test(e),rl=e=>Vi.test(e),sl=()=>{const e=X("colors"),t=X("spacing"),n=X("blur"),a=X("brightness"),r=X("borderColor"),o=X("borderRadius"),i=X("borderSpacing"),l=X("borderWidth"),u=X("contrast"),d=X("grayscale"),p=X("hueRotate"),f=X("invert"),b=X("gap"),c=X("gradientColorStops"),v=X("gradientColorStopPositions"),g=X("inset"),w=X("margin"),E=X("opacity"),k=X("padding"),S=X("saturate"),P=X("scale"),N=X("sepia"),C=X("skew"),z=X("space"),J=X("translate"),H=()=>["auto","contain","none"],q=()=>["auto","hidden","clip","visible","scroll"],te=()=>["auto",F,t],I=()=>[F,t],re=()=>["",Le,We],ne=()=>["auto",Ct,F],he=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],se=()=>["solid","dashed","dotted","double","none"],ce=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],O=()=>["start","end","center","between","around","evenly","stretch"],j=()=>["","0",F],V=()=>["auto","avoid","all","avoid-page","page","left","right","column"],oe=()=>[Ct,F];return{cacheSize:500,separator:":",theme:{colors:[Qt],spacing:[Le,We],blur:["none","",Ve,F],brightness:oe(),borderColor:[e],borderRadius:["none","","full",Ve,F],borderSpacing:I(),borderWidth:re(),contrast:oe(),grayscale:j(),hueRotate:oe(),invert:j(),gap:I(),gradientColorStops:[e],gradientColorStopPositions:[Ki,We],inset:te(),margin:te(),opacity:oe(),padding:I(),saturate:oe(),scale:oe(),sepia:j(),skew:oe(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",F]}],container:["container"],columns:[{columns:[Ve]}],"break-after":[{"break-after":V()}],"break-before":[{"break-before":V()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...he(),F]}],overflow:[{overflow:q()}],"overflow-x":[{"overflow-x":q()}],"overflow-y":[{"overflow-y":q()}],overscroll:[{overscroll:H()}],"overscroll-x":[{"overscroll-x":H()}],"overscroll-y":[{"overscroll-y":H()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Kt,F]}],basis:[{basis:te()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",F]}],grow:[{grow:j()}],shrink:[{shrink:j()}],order:[{order:["first","last","none",Kt,F]}],"grid-cols":[{"grid-cols":[Qt]}],"col-start-end":[{col:["auto",{span:["full",Kt,F]},F]}],"col-start":[{"col-start":ne()}],"col-end":[{"col-end":ne()}],"grid-rows":[{"grid-rows":[Qt]}],"row-start-end":[{row:["auto",{span:[Kt,F]},F]}],"row-start":[{"row-start":ne()}],"row-end":[{"row-end":ne()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",F]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",F]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:["normal",...O()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...O(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...O(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",F,t]}],"min-w":[{"min-w":[F,t,"min","max","fit"]}],"max-w":[{"max-w":[F,t,"none","full","min","max","fit","prose",{screen:[Ve]},Ve]}],h:[{h:[F,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[F,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[F,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[F,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Ve,We]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Jn]}],"font-family":[{font:[Qt]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",F]}],"line-clamp":[{"line-clamp":["none",Ct,Jn]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Le,F]}],"list-image":[{"list-image":["none",F]}],"list-style-type":[{list:["none","disc","decimal",F]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[E]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[E]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...se(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Le,We]}],"underline-offset":[{"underline-offset":["auto",Le,F]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[E]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...he(),Xi]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Yi]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},el]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[c]}],"gradient-via":[{via:[c]}],"gradient-to":[{to:[c]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[E]}],"border-style":[{border:[...se(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[E]}],"divide-style":[{divide:se()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...se()]}],"outline-offset":[{"outline-offset":[Le,F]}],"outline-w":[{outline:[Le,We]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[E]}],"ring-offset-w":[{"ring-offset":[Le,We]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Ve,tl]}],"shadow-color":[{shadow:[Qt]}],opacity:[{opacity:[E]}],"mix-blend":[{"mix-blend":[...ce(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ce()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[a]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",Ve,F]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[f]}],saturate:[{saturate:[S]}],sepia:[{sepia:[N]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[E]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[N]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",F]}],duration:[{duration:oe()}],ease:[{ease:["linear","in","out","in-out",F]}],delay:[{delay:oe()}],animate:[{animate:["none","spin","ping","pulse","bounce",F]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[P]}],"scale-x":[{"scale-x":[P]}],"scale-y":[{"scale-y":[P]}],rotate:[{rotate:[Kt,F]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",F]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",F]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",F]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Le,We,Jn]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ol=Hi(sl);function U(...e){return ol(ps(e))}const il=Go,Ts=h.forwardRef(({className:e,...t},n)=>s.jsx(ns,{ref:n,className:U("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Ts.displayName=ns.displayName;const ll=Ia("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),_s=h.forwardRef(({className:e,variant:t,...n},a)=>s.jsx(as,{ref:a,className:U(ll({variant:t}),e),...n}));_s.displayName=as.displayName;const cl=h.forwardRef(({className:e,...t},n)=>s.jsx(rs,{ref:n,className:U("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));cl.displayName=rs.displayName;const Rs=h.forwardRef(({className:e,...t},n)=>s.jsx(ss,{ref:n,className:U("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:s.jsx(On,{className:"h-4 w-4"})}));Rs.displayName=ss.displayName;const As=h.forwardRef(({className:e,...t},n)=>s.jsx(os,{ref:n,className:U("text-sm font-semibold",e),...t}));As.displayName=os.displayName;const js=h.forwardRef(({className:e,...t},n)=>s.jsx(is,{ref:n,className:U("text-sm opacity-90",e),...t}));js.displayName=is.displayName;function dl(){const{toasts:e}=ci();return s.jsxs(il,{children:[e.map(function({id:t,title:n,description:a,action:r,...o}){return s.jsxs(_s,{...o,children:[s.jsxs("div",{className:"grid gap-1",children:[n&&s.jsx(As,{children:n}),a&&s.jsx(js,{children:a})]}),r,s.jsx(Rs,{})]},t)}),s.jsx(Ts,{})]})}var mr=["light","dark"],ul="(prefers-color-scheme: dark)",hl=h.createContext(void 0),ml={setTheme:e=>{},themes:[]},pl=()=>{var e;return(e=h.useContext(hl))!=null?e:ml};h.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:r,defaultTheme:o,value:i,attrs:l,nonce:u})=>{let d=o==="system",p=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${l.map(v=>`'${v}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=r?mr.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",b=(v,g=!1,w=!0)=>{let E=i?i[v]:v,k=g?v+"|| ''":`'${E}'`,S="";return r&&w&&!g&&mr.includes(v)&&(S+=`d.style.colorScheme = '${v}';`),n==="class"?g||E?S+=`c.add(${k})`:S+="null":E&&(S+=`d[s](n,${k})`),S},c=e?`!function(){${p}${b(e)}}()`:a?`!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${ul}',m=window.matchMedia(t);if(m.media!==t||m.matches){${b("dark")}}else{${b("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${b(i?"x[e]":"e",!0)}}${d?"":"else{"+b(o,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${b(i?"x[e]":"e",!0)}}else{${b(o,!1,!1)};}${f}}catch(t){}}();`;return h.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:c}})});var fl=e=>{switch(e){case"success":return yl;case"info":return vl;case"warning":return wl;case"error":return xl;default:return null}},gl=Array(12).fill(0),bl=({visible:e,className:t})=>x.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},x.createElement("div",{className:"sonner-spinner"},gl.map((n,a)=>x.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${a}`})))),yl=x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},x.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),wl=x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},x.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),vl=x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},x.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),xl=x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},x.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),kl=x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},x.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),x.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Sl=()=>{let[e,t]=x.useState(document.hidden);return x.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},oa=1,El=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...a}=e,r=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:oa++,o=this.toasts.find(l=>l.id===r),i=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(r)&&this.dismissedToasts.delete(r),o?this.toasts=this.toasts.map(l=>l.id===r?(this.publish({...l,...e,id:r,title:n}),{...l,...e,id:r,dismissible:i,title:n}):l):this.addToast({title:n,...a,dismissible:i,id:r}),r},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let a=e instanceof Promise?e:e(),r=n!==void 0,o,i=a.then(async u=>{if(o=["resolve",u],x.isValidElement(u))r=!1,this.create({id:n,type:"default",message:u});else if(_l(u)&&!u.ok){r=!1;let d=typeof t.error=="function"?await t.error(`HTTP error! status: ${u.status}`):t.error,p=typeof t.description=="function"?await t.description(`HTTP error! status: ${u.status}`):t.description;this.create({id:n,type:"error",message:d,description:p})}else if(t.success!==void 0){r=!1;let d=typeof t.success=="function"?await t.success(u):t.success,p=typeof t.description=="function"?await t.description(u):t.description;this.create({id:n,type:"success",message:d,description:p})}}).catch(async u=>{if(o=["reject",u],t.error!==void 0){r=!1;let d=typeof t.error=="function"?await t.error(u):t.error,p=typeof t.description=="function"?await t.description(u):t.description;this.create({id:n,type:"error",message:d,description:p})}}).finally(()=>{var u;r&&(this.dismiss(n),n=void 0),(u=t.finally)==null||u.call(t)}),l=()=>new Promise((u,d)=>i.then(()=>o[0]==="reject"?d(o[1]):u(o[1])).catch(d));return typeof n!="string"&&typeof n!="number"?{unwrap:l}:Object.assign(n,{unwrap:l})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||oa++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},ge=new El,Tl=(e,t)=>{let n=(t==null?void 0:t.id)||oa++;return ge.addToast({title:e,...t,id:n}),n},_l=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",Rl=Tl,Al=()=>ge.toasts,jl=()=>ge.getActiveToasts(),_n=Object.assign(Rl,{success:ge.success,info:ge.info,warning:ge.warning,error:ge.error,custom:ge.custom,message:ge.message,promise:ge.promise,dismiss:ge.dismiss,loading:ge.loading},{getHistory:Al,getToasts:jl});function Cl(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",t==="top"&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}Cl(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function wn(e){return e.label!==void 0}var Pl=3,Nl="32px",$l="16px",pr=4e3,Il=356,Ol=14,Dl=20,Ll=200;function Ae(...e){return e.filter(Boolean).join(" ")}function Ml(e){let[t,n]=e.split("-"),a=[];return t&&a.push(t),n&&a.push(n),a}var Fl=e=>{var t,n,a,r,o,i,l,u,d,p,f;let{invert:b,toast:c,unstyled:v,interacting:g,setHeights:w,visibleToasts:E,heights:k,index:S,toasts:P,expanded:N,removeToast:C,defaultRichColors:z,closeButton:J,style:H,cancelButtonStyle:q,actionButtonStyle:te,className:I="",descriptionClassName:re="",duration:ne,position:he,gap:se,loadingIcon:ce,expandByDefault:O,classNames:j,icons:V,closeButtonAriaLabel:oe="Close toast",pauseWhenPageIsHidden:y}=e,[T,A]=x.useState(null),[_,L]=x.useState(null),[$,Y]=x.useState(!1),[Z,Ee]=x.useState(!1),[it,qe]=x.useState(!1),[Wt,jo]=x.useState(!1),[Co,Ya]=x.useState(!1),[Po,Mn]=x.useState(0),[No,Xa]=x.useState(0),Vt=x.useRef(c.duration||ne||pr),Za=x.useRef(null),lt=x.useRef(null),$o=S===0,Io=S+1<=E,ve=c.type,St=c.dismissible!==!1,Oo=c.className||"",Do=c.descriptionClassName||"",bn=x.useMemo(()=>k.findIndex(M=>M.toastId===c.id)||0,[k,c.id]),Lo=x.useMemo(()=>{var M;return(M=c.closeButton)!=null?M:J},[c.closeButton,J]),er=x.useMemo(()=>c.duration||ne||pr,[c.duration,ne]),Fn=x.useRef(0),Et=x.useRef(0),tr=x.useRef(0),Tt=x.useRef(null),[Mo,Fo]=he.split("-"),nr=x.useMemo(()=>k.reduce((M,K,ee)=>ee>=bn?M:M+K.height,0),[k,bn]),ar=Sl(),Uo=c.invert||b,Un=ve==="loading";Et.current=x.useMemo(()=>bn*se+nr,[bn,nr]),x.useEffect(()=>{Vt.current=er},[er]),x.useEffect(()=>{Y(!0)},[]),x.useEffect(()=>{let M=lt.current;if(M){let K=M.getBoundingClientRect().height;return Xa(K),w(ee=>[{toastId:c.id,height:K,position:c.position},...ee]),()=>w(ee=>ee.filter(Te=>Te.toastId!==c.id))}},[w,c.id]),x.useLayoutEffect(()=>{if(!$)return;let M=lt.current,K=M.style.height;M.style.height="auto";let ee=M.getBoundingClientRect().height;M.style.height=K,Xa(ee),w(Te=>Te.find(_e=>_e.toastId===c.id)?Te.map(_e=>_e.toastId===c.id?{..._e,height:ee}:_e):[{toastId:c.id,height:ee,position:c.position},...Te])},[$,c.title,c.description,w,c.id]);let Be=x.useCallback(()=>{Ee(!0),Mn(Et.current),w(M=>M.filter(K=>K.toastId!==c.id)),setTimeout(()=>{C(c)},Ll)},[c,C,w,Et]);x.useEffect(()=>{if(c.promise&&ve==="loading"||c.duration===1/0||c.type==="loading")return;let M;return N||g||y&&ar?(()=>{if(tr.current<Fn.current){let K=new Date().getTime()-Fn.current;Vt.current=Vt.current-K}tr.current=new Date().getTime()})():Vt.current!==1/0&&(Fn.current=new Date().getTime(),M=setTimeout(()=>{var K;(K=c.onAutoClose)==null||K.call(c,c),Be()},Vt.current)),()=>clearTimeout(M)},[N,g,c,ve,y,ar,Be]),x.useEffect(()=>{c.delete&&Be()},[Be,c.delete]);function Ho(){var M,K,ee;return V!=null&&V.loading?x.createElement("div",{className:Ae(j==null?void 0:j.loader,(M=c==null?void 0:c.classNames)==null?void 0:M.loader,"sonner-loader"),"data-visible":ve==="loading"},V.loading):ce?x.createElement("div",{className:Ae(j==null?void 0:j.loader,(K=c==null?void 0:c.classNames)==null?void 0:K.loader,"sonner-loader"),"data-visible":ve==="loading"},ce):x.createElement(bl,{className:Ae(j==null?void 0:j.loader,(ee=c==null?void 0:c.classNames)==null?void 0:ee.loader),visible:ve==="loading"})}return x.createElement("li",{tabIndex:0,ref:lt,className:Ae(I,Oo,j==null?void 0:j.toast,(t=c==null?void 0:c.classNames)==null?void 0:t.toast,j==null?void 0:j.default,j==null?void 0:j[ve],(n=c==null?void 0:c.classNames)==null?void 0:n[ve]),"data-sonner-toast":"","data-rich-colors":(a=c.richColors)!=null?a:z,"data-styled":!(c.jsx||c.unstyled||v),"data-mounted":$,"data-promise":!!c.promise,"data-swiped":Co,"data-removed":Z,"data-visible":Io,"data-y-position":Mo,"data-x-position":Fo,"data-index":S,"data-front":$o,"data-swiping":it,"data-dismissible":St,"data-type":ve,"data-invert":Uo,"data-swipe-out":Wt,"data-swipe-direction":_,"data-expanded":!!(N||O&&$),style:{"--index":S,"--toasts-before":S,"--z-index":P.length-S,"--offset":`${Z?Po:Et.current}px`,"--initial-height":O?"auto":`${No}px`,...H,...c.style},onDragEnd:()=>{qe(!1),A(null),Tt.current=null},onPointerDown:M=>{Un||!St||(Za.current=new Date,Mn(Et.current),M.target.setPointerCapture(M.pointerId),M.target.tagName!=="BUTTON"&&(qe(!0),Tt.current={x:M.clientX,y:M.clientY}))},onPointerUp:()=>{var M,K,ee,Te;if(Wt||!St)return;Tt.current=null;let _e=Number(((M=lt.current)==null?void 0:M.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Ge=Number(((K=lt.current)==null?void 0:K.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),ct=new Date().getTime()-((ee=Za.current)==null?void 0:ee.getTime()),Re=T==="x"?_e:Ge,ze=Math.abs(Re)/ct;if(Math.abs(Re)>=Dl||ze>.11){Mn(Et.current),(Te=c.onDismiss)==null||Te.call(c,c),L(T==="x"?_e>0?"right":"left":Ge>0?"down":"up"),Be(),jo(!0),Ya(!1);return}qe(!1),A(null)},onPointerMove:M=>{var K,ee,Te,_e;if(!Tt.current||!St||((K=window.getSelection())==null?void 0:K.toString().length)>0)return;let Ge=M.clientY-Tt.current.y,ct=M.clientX-Tt.current.x,Re=(ee=e.swipeDirections)!=null?ee:Ml(he);!T&&(Math.abs(ct)>1||Math.abs(Ge)>1)&&A(Math.abs(ct)>Math.abs(Ge)?"x":"y");let ze={x:0,y:0};T==="y"?(Re.includes("top")||Re.includes("bottom"))&&(Re.includes("top")&&Ge<0||Re.includes("bottom")&&Ge>0)&&(ze.y=Ge):T==="x"&&(Re.includes("left")||Re.includes("right"))&&(Re.includes("left")&&ct<0||Re.includes("right")&&ct>0)&&(ze.x=ct),(Math.abs(ze.x)>0||Math.abs(ze.y)>0)&&Ya(!0),(Te=lt.current)==null||Te.style.setProperty("--swipe-amount-x",`${ze.x}px`),(_e=lt.current)==null||_e.style.setProperty("--swipe-amount-y",`${ze.y}px`)}},Lo&&!c.jsx?x.createElement("button",{"aria-label":oe,"data-disabled":Un,"data-close-button":!0,onClick:Un||!St?()=>{}:()=>{var M;Be(),(M=c.onDismiss)==null||M.call(c,c)},className:Ae(j==null?void 0:j.closeButton,(r=c==null?void 0:c.classNames)==null?void 0:r.closeButton)},(o=V==null?void 0:V.close)!=null?o:kl):null,c.jsx||h.isValidElement(c.title)?c.jsx?c.jsx:typeof c.title=="function"?c.title():c.title:x.createElement(x.Fragment,null,ve||c.icon||c.promise?x.createElement("div",{"data-icon":"",className:Ae(j==null?void 0:j.icon,(i=c==null?void 0:c.classNames)==null?void 0:i.icon)},c.promise||c.type==="loading"&&!c.icon?c.icon||Ho():null,c.type!=="loading"?c.icon||(V==null?void 0:V[ve])||fl(ve):null):null,x.createElement("div",{"data-content":"",className:Ae(j==null?void 0:j.content,(l=c==null?void 0:c.classNames)==null?void 0:l.content)},x.createElement("div",{"data-title":"",className:Ae(j==null?void 0:j.title,(u=c==null?void 0:c.classNames)==null?void 0:u.title)},typeof c.title=="function"?c.title():c.title),c.description?x.createElement("div",{"data-description":"",className:Ae(re,Do,j==null?void 0:j.description,(d=c==null?void 0:c.classNames)==null?void 0:d.description)},typeof c.description=="function"?c.description():c.description):null),h.isValidElement(c.cancel)?c.cancel:c.cancel&&wn(c.cancel)?x.createElement("button",{"data-button":!0,"data-cancel":!0,style:c.cancelButtonStyle||q,onClick:M=>{var K,ee;wn(c.cancel)&&St&&((ee=(K=c.cancel).onClick)==null||ee.call(K,M),Be())},className:Ae(j==null?void 0:j.cancelButton,(p=c==null?void 0:c.classNames)==null?void 0:p.cancelButton)},c.cancel.label):null,h.isValidElement(c.action)?c.action:c.action&&wn(c.action)?x.createElement("button",{"data-button":!0,"data-action":!0,style:c.actionButtonStyle||te,onClick:M=>{var K,ee;wn(c.action)&&((ee=(K=c.action).onClick)==null||ee.call(K,M),!M.defaultPrevented&&Be())},className:Ae(j==null?void 0:j.actionButton,(f=c==null?void 0:c.classNames)==null?void 0:f.actionButton)},c.action.label):null))};function fr(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Ul(e,t){let n={};return[e,t].forEach((a,r)=>{let o=r===1,i=o?"--mobile-offset":"--offset",l=o?$l:Nl;function u(d){["top","right","bottom","left"].forEach(p=>{n[`${i}-${p}`]=typeof d=="number"?`${d}px`:d})}typeof a=="number"||typeof a=="string"?u(a):typeof a=="object"?["top","right","bottom","left"].forEach(d=>{a[d]===void 0?n[`${i}-${d}`]=l:n[`${i}-${d}`]=typeof a[d]=="number"?`${a[d]}px`:a[d]}):u(l)}),n}var Hl=h.forwardRef(function(e,t){let{invert:n,position:a="bottom-right",hotkey:r=["altKey","KeyT"],expand:o,closeButton:i,className:l,offset:u,mobileOffset:d,theme:p="light",richColors:f,duration:b,style:c,visibleToasts:v=Pl,toastOptions:g,dir:w=fr(),gap:E=Ol,loadingIcon:k,icons:S,containerAriaLabel:P="Notifications",pauseWhenPageIsHidden:N}=e,[C,z]=x.useState([]),J=x.useMemo(()=>Array.from(new Set([a].concat(C.filter(y=>y.position).map(y=>y.position)))),[C,a]),[H,q]=x.useState([]),[te,I]=x.useState(!1),[re,ne]=x.useState(!1),[he,se]=x.useState(p!=="system"?p:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),ce=x.useRef(null),O=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),j=x.useRef(null),V=x.useRef(!1),oe=x.useCallback(y=>{z(T=>{var A;return(A=T.find(_=>_.id===y.id))!=null&&A.delete||ge.dismiss(y.id),T.filter(({id:_})=>_!==y.id)})},[]);return x.useEffect(()=>ge.subscribe(y=>{if(y.dismiss){z(T=>T.map(A=>A.id===y.id?{...A,delete:!0}:A));return}setTimeout(()=>{Xo.flushSync(()=>{z(T=>{let A=T.findIndex(_=>_.id===y.id);return A!==-1?[...T.slice(0,A),{...T[A],...y},...T.slice(A+1)]:[y,...T]})})})}),[]),x.useEffect(()=>{if(p!=="system"){se(p);return}if(p==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?se("dark"):se("light")),typeof window>"u")return;let y=window.matchMedia("(prefers-color-scheme: dark)");try{y.addEventListener("change",({matches:T})=>{se(T?"dark":"light")})}catch{y.addListener(({matches:A})=>{try{se(A?"dark":"light")}catch(_){console.error(_)}})}},[p]),x.useEffect(()=>{C.length<=1&&I(!1)},[C]),x.useEffect(()=>{let y=T=>{var A,_;r.every(L=>T[L]||T.code===L)&&(I(!0),(A=ce.current)==null||A.focus()),T.code==="Escape"&&(document.activeElement===ce.current||(_=ce.current)!=null&&_.contains(document.activeElement))&&I(!1)};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[r]),x.useEffect(()=>{if(ce.current)return()=>{j.current&&(j.current.focus({preventScroll:!0}),j.current=null,V.current=!1)}},[ce.current]),x.createElement("section",{ref:t,"aria-label":`${P} ${O}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},J.map((y,T)=>{var A;let[_,L]=y.split("-");return C.length?x.createElement("ol",{key:y,dir:w==="auto"?fr():w,tabIndex:-1,ref:ce,className:l,"data-sonner-toaster":!0,"data-theme":he,"data-y-position":_,"data-lifted":te&&C.length>1&&!o,"data-x-position":L,style:{"--front-toast-height":`${((A=H[0])==null?void 0:A.height)||0}px`,"--width":`${Il}px`,"--gap":`${E}px`,...c,...Ul(u,d)},onBlur:$=>{V.current&&!$.currentTarget.contains($.relatedTarget)&&(V.current=!1,j.current&&(j.current.focus({preventScroll:!0}),j.current=null))},onFocus:$=>{$.target instanceof HTMLElement&&$.target.dataset.dismissible==="false"||V.current||(V.current=!0,j.current=$.relatedTarget)},onMouseEnter:()=>I(!0),onMouseMove:()=>I(!0),onMouseLeave:()=>{re||I(!1)},onDragEnd:()=>I(!1),onPointerDown:$=>{$.target instanceof HTMLElement&&$.target.dataset.dismissible==="false"||ne(!0)},onPointerUp:()=>ne(!1)},C.filter($=>!$.position&&T===0||$.position===y).map(($,Y)=>{var Z,Ee;return x.createElement(Fl,{key:$.id,icons:S,index:Y,toast:$,defaultRichColors:f,duration:(Z=g==null?void 0:g.duration)!=null?Z:b,className:g==null?void 0:g.className,descriptionClassName:g==null?void 0:g.descriptionClassName,invert:n,visibleToasts:v,closeButton:(Ee=g==null?void 0:g.closeButton)!=null?Ee:i,interacting:re,position:y,style:g==null?void 0:g.style,unstyled:g==null?void 0:g.unstyled,classNames:g==null?void 0:g.classNames,cancelButtonStyle:g==null?void 0:g.cancelButtonStyle,actionButtonStyle:g==null?void 0:g.actionButtonStyle,removeToast:oe,toasts:C.filter(it=>it.position==$.position),heights:H.filter(it=>it.position==$.position),setHeights:q,expandByDefault:o,gap:E,loadingIcon:k,expanded:te,pauseWhenPageIsHidden:N,swipeDirections:e.swipeDirections})})):null}))});const ql=({...e})=>{const{theme:t="system"}=pl();return s.jsx(Hl,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},Bl=zo,Gl=h.forwardRef(({className:e,sideOffset:t=4,...n},a)=>s.jsx(ls,{ref:a,sideOffset:t,className:U("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));Gl.displayName=ls.displayName;var pn=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},xt=typeof window>"u"||"Deno"in globalThis;function be(){}function zl(e,t){return typeof e=="function"?e(t):e}function ia(e){return typeof e=="number"&&e>=0&&e!==1/0}function Cs(e,t){return Math.max(e+(t||0)-Date.now(),0)}function rt(e,t){return typeof e=="function"?e(t):e}function Se(e,t){return typeof e=="function"?e(t):e}function gr(e,t){const{type:n="all",exact:a,fetchStatus:r,predicate:o,queryKey:i,stale:l}=e;if(i){if(a){if(t.queryHash!==Ua(i,t.options))return!1}else if(!sn(t.queryKey,i))return!1}if(n!=="all"){const u=t.isActive();if(n==="active"&&!u||n==="inactive"&&u)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||r&&r!==t.state.fetchStatus||o&&!o(t))}function br(e,t){const{exact:n,status:a,predicate:r,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(rn(t.options.mutationKey)!==rn(o))return!1}else if(!sn(t.options.mutationKey,o))return!1}return!(a&&t.state.status!==a||r&&!r(t))}function Ua(e,t){return((t==null?void 0:t.queryKeyHashFn)||rn)(e)}function rn(e){return JSON.stringify(e,(t,n)=>ca(n)?Object.keys(n).sort().reduce((a,r)=>(a[r]=n[r],a),{}):n)}function sn(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>sn(e[n],t[n])):!1}function Ps(e,t){if(e===t)return e;const n=yr(e)&&yr(t);if(n||ca(e)&&ca(t)){const a=n?e:Object.keys(e),r=a.length,o=n?t:Object.keys(t),i=o.length,l=n?[]:{},u=new Set(a);let d=0;for(let p=0;p<i;p++){const f=n?p:o[p];(!n&&u.has(f)||n)&&e[f]===void 0&&t[f]===void 0?(l[f]=void 0,d++):(l[f]=Ps(e[f],t[f]),l[f]===e[f]&&e[f]!==void 0&&d++)}return r===i&&d===r?e:l}return t}function la(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function yr(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function ca(e){if(!wr(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!wr(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function wr(e){return Object.prototype.toString.call(e)==="[object Object]"}function Jl(e){return new Promise(t=>{setTimeout(t,e)})}function da(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Ps(e,t):t}function Wl(e,t,n=0){const a=[...e,t];return n&&a.length>n?a.slice(1):a}function Vl(e,t,n=0){const a=[t,...e];return n&&a.length>n?a.slice(0,-1):a}var Ha=Symbol();function Ns(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Ha?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function Kl(e,t){return typeof e=="function"?e(...t):!!e}var ut,Qe,$t,Wr,Ql=(Wr=class extends pn{constructor(){super();D(this,ut);D(this,Qe);D(this,$t);R(this,$t,t=>{if(!xt&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){m(this,Qe)||this.setEventListener(m(this,$t))}onUnsubscribe(){var t;this.hasListeners()||((t=m(this,Qe))==null||t.call(this),R(this,Qe,void 0))}setEventListener(t){var n;R(this,$t,t),(n=m(this,Qe))==null||n.call(this),R(this,Qe,t(a=>{typeof a=="boolean"?this.setFocused(a):this.onFocus()}))}setFocused(t){m(this,ut)!==t&&(R(this,ut,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof m(this,ut)=="boolean"?m(this,ut):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},ut=new WeakMap,Qe=new WeakMap,$t=new WeakMap,Wr),qa=new Ql,It,Ye,Ot,Vr,Yl=(Vr=class extends pn{constructor(){super();D(this,It,!0);D(this,Ye);D(this,Ot);R(this,Ot,t=>{if(!xt&&window.addEventListener){const n=()=>t(!0),a=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",a,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",a)}}})}onSubscribe(){m(this,Ye)||this.setEventListener(m(this,Ot))}onUnsubscribe(){var t;this.hasListeners()||((t=m(this,Ye))==null||t.call(this),R(this,Ye,void 0))}setEventListener(t){var n;R(this,Ot,t),(n=m(this,Ye))==null||n.call(this),R(this,Ye,t(this.setOnline.bind(this)))}setOnline(t){m(this,It)!==t&&(R(this,It,t),this.listeners.forEach(a=>{a(t)}))}isOnline(){return m(this,It)}},It=new WeakMap,Ye=new WeakMap,Ot=new WeakMap,Vr),Pn=new Yl;function ua(){let e,t;const n=new Promise((r,o)=>{e=r,t=o});n.status="pending",n.catch(()=>{});function a(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{a({status:"fulfilled",value:r}),e(r)},n.reject=r=>{a({status:"rejected",reason:r}),t(r)},n}function Xl(e){return Math.min(1e3*2**e,3e4)}function $s(e){return(e??"online")==="online"?Pn.isOnline():!0}var Is=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Wn(e){return e instanceof Is}function Os(e){let t=!1,n=0,a=!1,r;const o=ua(),i=g=>{var w;a||(b(new Is(g)),(w=e.abort)==null||w.call(e))},l=()=>{t=!0},u=()=>{t=!1},d=()=>qa.isFocused()&&(e.networkMode==="always"||Pn.isOnline())&&e.canRun(),p=()=>$s(e.networkMode)&&e.canRun(),f=g=>{var w;a||(a=!0,(w=e.onSuccess)==null||w.call(e,g),r==null||r(),o.resolve(g))},b=g=>{var w;a||(a=!0,(w=e.onError)==null||w.call(e,g),r==null||r(),o.reject(g))},c=()=>new Promise(g=>{var w;r=E=>{(a||d())&&g(E)},(w=e.onPause)==null||w.call(e)}).then(()=>{var g;r=void 0,a||(g=e.onContinue)==null||g.call(e)}),v=()=>{if(a)return;let g;const w=n===0?e.initialPromise:void 0;try{g=w??e.fn()}catch(E){g=Promise.reject(E)}Promise.resolve(g).then(f).catch(E=>{var C;if(a)return;const k=e.retry??(xt?0:3),S=e.retryDelay??Xl,P=typeof S=="function"?S(n,E):S,N=k===!0||typeof k=="number"&&n<k||typeof k=="function"&&k(n,E);if(t||!N){b(E);return}n++,(C=e.onFail)==null||C.call(e,n,E),Jl(P).then(()=>d()?void 0:c()).then(()=>{t?b(E):v()})})};return{promise:o,cancel:i,continue:()=>(r==null||r(),o),cancelRetry:l,continueRetry:u,canStart:p,start:()=>(p()?v():c().then(v),o)}}var Zl=e=>setTimeout(e,0);function ec(){let e=[],t=0,n=l=>{l()},a=l=>{l()},r=Zl;const o=l=>{t?e.push(l):r(()=>{n(l)})},i=()=>{const l=e;e=[],l.length&&r(()=>{a(()=>{l.forEach(u=>{n(u)})})})};return{batch:l=>{let u;t++;try{u=l()}finally{t--,t||i()}return u},batchCalls:l=>(...u)=>{o(()=>{l(...u)})},schedule:o,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{a=l},setScheduler:l=>{r=l}}}var de=ec(),ht,Kr,Ds=(Kr=class{constructor(){D(this,ht)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),ia(this.gcTime)&&R(this,ht,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(xt?1/0:5*60*1e3))}clearGcTimeout(){m(this,ht)&&(clearTimeout(m(this,ht)),R(this,ht,void 0))}},ht=new WeakMap,Kr),Dt,mt,ke,pt,ue,ln,ft,je,Me,Qr,tc=(Qr=class extends Ds{constructor(t){super();D(this,je);D(this,Dt);D(this,mt);D(this,ke);D(this,pt);D(this,ue);D(this,ln);D(this,ft);R(this,ft,!1),R(this,ln,t.defaultOptions),this.setOptions(t.options),this.observers=[],R(this,pt,t.client),R(this,ke,m(this,pt).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,R(this,Dt,nc(this.options)),this.state=t.state??m(this,Dt),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=m(this,ue))==null?void 0:t.promise}setOptions(t){this.options={...m(this,ln),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&m(this,ke).remove(this)}setData(t,n){const a=da(this.state.data,t,this.options);return B(this,je,Me).call(this,{data:a,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),a}setState(t,n){B(this,je,Me).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var a,r;const n=(a=m(this,ue))==null?void 0:a.promise;return(r=m(this,ue))==null||r.cancel(t),n?n.then(be).catch(be):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(m(this,Dt))}isActive(){return this.observers.some(t=>Se(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Ha||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>rt(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!Cs(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(a=>a.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=m(this,ue))==null||n.continue()}onOnline(){var n;const t=this.observers.find(a=>a.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=m(this,ue))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),m(this,ke).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(m(this,ue)&&(m(this,ft)?m(this,ue).cancel({revert:!0}):m(this,ue).cancelRetry()),this.scheduleGc()),m(this,ke).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||B(this,je,Me).call(this,{type:"invalidate"})}fetch(t,n){var d,p,f;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(m(this,ue))return m(this,ue).continueRetry(),m(this,ue).promise}if(t&&this.setOptions(t),!this.options.queryFn){const b=this.observers.find(c=>c.options.queryFn);b&&this.setOptions(b.options)}const a=new AbortController,r=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>(R(this,ft,!0),a.signal)})},o=()=>{const b=Ns(this.options,n),v=(()=>{const g={client:m(this,pt),queryKey:this.queryKey,meta:this.meta};return r(g),g})();return R(this,ft,!1),this.options.persister?this.options.persister(b,v,this):b(v)},l=(()=>{const b={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:m(this,pt),state:this.state,fetchFn:o};return r(b),b})();(d=this.options.behavior)==null||d.onFetch(l,this),R(this,mt,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((p=l.fetchOptions)==null?void 0:p.meta))&&B(this,je,Me).call(this,{type:"fetch",meta:(f=l.fetchOptions)==null?void 0:f.meta});const u=b=>{var c,v,g,w;Wn(b)&&b.silent||B(this,je,Me).call(this,{type:"error",error:b}),Wn(b)||((v=(c=m(this,ke).config).onError)==null||v.call(c,b,this),(w=(g=m(this,ke).config).onSettled)==null||w.call(g,this.state.data,b,this)),this.scheduleGc()};return R(this,ue,Os({initialPromise:n==null?void 0:n.initialPromise,fn:l.fetchFn,abort:a.abort.bind(a),onSuccess:b=>{var c,v,g,w;if(b===void 0){u(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(b)}catch(E){u(E);return}(v=(c=m(this,ke).config).onSuccess)==null||v.call(c,b,this),(w=(g=m(this,ke).config).onSettled)==null||w.call(g,b,this.state.error,this),this.scheduleGc()},onError:u,onFail:(b,c)=>{B(this,je,Me).call(this,{type:"failed",failureCount:b,error:c})},onPause:()=>{B(this,je,Me).call(this,{type:"pause"})},onContinue:()=>{B(this,je,Me).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),m(this,ue).start()}},Dt=new WeakMap,mt=new WeakMap,ke=new WeakMap,pt=new WeakMap,ue=new WeakMap,ln=new WeakMap,ft=new WeakMap,je=new WeakSet,Me=function(t){const n=a=>{switch(t.type){case"failed":return{...a,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...a,fetchStatus:"paused"};case"continue":return{...a,fetchStatus:"fetching"};case"fetch":return{...a,...Ls(a.data,this.options),fetchMeta:t.meta??null};case"success":return R(this,mt,void 0),{...a,data:t.data,dataUpdateCount:a.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=t.error;return Wn(r)&&r.revert&&m(this,mt)?{...m(this,mt),fetchStatus:"idle"}:{...a,error:r,errorUpdateCount:a.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:a.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...a,isInvalidated:!0};case"setState":return{...a,...t.state}}};this.state=n(this.state),de.batch(()=>{this.observers.forEach(a=>{a.onQueryUpdate()}),m(this,ke).notify({query:this,type:"updated",action:t})})},Qr);function Ls(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:$s(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function nc(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,a=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?a??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Ne,Yr,ac=(Yr=class extends pn{constructor(t={}){super();D(this,Ne);this.config=t,R(this,Ne,new Map)}build(t,n,a){const r=n.queryKey,o=n.queryHash??Ua(r,n);let i=this.get(o);return i||(i=new tc({client:t,queryKey:r,queryHash:o,options:t.defaultQueryOptions(n),state:a,defaultOptions:t.getQueryDefaults(r)}),this.add(i)),i}add(t){m(this,Ne).has(t.queryHash)||(m(this,Ne).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=m(this,Ne).get(t.queryHash);n&&(t.destroy(),n===t&&m(this,Ne).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){de.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return m(this,Ne).get(t)}getAll(){return[...m(this,Ne).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(a=>gr(n,a))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(a=>gr(t,a)):n}notify(t){de.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){de.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){de.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Ne=new WeakMap,Yr),$e,me,gt,Ie,Ke,Xr,rc=(Xr=class extends Ds{constructor(t){super();D(this,Ie);D(this,$e);D(this,me);D(this,gt);this.mutationId=t.mutationId,R(this,me,t.mutationCache),R(this,$e,[]),this.state=t.state||sc(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){m(this,$e).includes(t)||(m(this,$e).push(t),this.clearGcTimeout(),m(this,me).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){R(this,$e,m(this,$e).filter(n=>n!==t)),this.scheduleGc(),m(this,me).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){m(this,$e).length||(this.state.status==="pending"?this.scheduleGc():m(this,me).remove(this))}continue(){var t;return((t=m(this,gt))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,i,l,u,d,p,f,b,c,v,g,w,E,k,S,P,N,C,z,J;const n=()=>{B(this,Ie,Ke).call(this,{type:"continue"})};R(this,gt,Os({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(H,q)=>{B(this,Ie,Ke).call(this,{type:"failed",failureCount:H,error:q})},onPause:()=>{B(this,Ie,Ke).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>m(this,me).canRun(this)}));const a=this.state.status==="pending",r=!m(this,gt).canStart();try{if(a)n();else{B(this,Ie,Ke).call(this,{type:"pending",variables:t,isPaused:r}),await((i=(o=m(this,me).config).onMutate)==null?void 0:i.call(o,t,this));const q=await((u=(l=this.options).onMutate)==null?void 0:u.call(l,t));q!==this.state.context&&B(this,Ie,Ke).call(this,{type:"pending",context:q,variables:t,isPaused:r})}const H=await m(this,gt).start();return await((p=(d=m(this,me).config).onSuccess)==null?void 0:p.call(d,H,t,this.state.context,this)),await((b=(f=this.options).onSuccess)==null?void 0:b.call(f,H,t,this.state.context)),await((v=(c=m(this,me).config).onSettled)==null?void 0:v.call(c,H,null,this.state.variables,this.state.context,this)),await((w=(g=this.options).onSettled)==null?void 0:w.call(g,H,null,t,this.state.context)),B(this,Ie,Ke).call(this,{type:"success",data:H}),H}catch(H){try{throw await((k=(E=m(this,me).config).onError)==null?void 0:k.call(E,H,t,this.state.context,this)),await((P=(S=this.options).onError)==null?void 0:P.call(S,H,t,this.state.context)),await((C=(N=m(this,me).config).onSettled)==null?void 0:C.call(N,void 0,H,this.state.variables,this.state.context,this)),await((J=(z=this.options).onSettled)==null?void 0:J.call(z,void 0,H,t,this.state.context)),H}finally{B(this,Ie,Ke).call(this,{type:"error",error:H})}}finally{m(this,me).runNext(this)}}},$e=new WeakMap,me=new WeakMap,gt=new WeakMap,Ie=new WeakSet,Ke=function(t){const n=a=>{switch(t.type){case"failed":return{...a,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...a,isPaused:!0};case"continue":return{...a,isPaused:!1};case"pending":return{...a,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...a,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...a,data:void 0,error:t.error,failureCount:a.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),de.batch(()=>{m(this,$e).forEach(a=>{a.onMutationUpdate(t)}),m(this,me).notify({mutation:this,type:"updated",action:t})})},Xr);function sc(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Fe,Ce,cn,Zr,oc=(Zr=class extends pn{constructor(t={}){super();D(this,Fe);D(this,Ce);D(this,cn);this.config=t,R(this,Fe,new Set),R(this,Ce,new Map),R(this,cn,0)}build(t,n,a){const r=new rc({mutationCache:this,mutationId:++yn(this,cn)._,options:t.defaultMutationOptions(n),state:a});return this.add(r),r}add(t){m(this,Fe).add(t);const n=vn(t);if(typeof n=="string"){const a=m(this,Ce).get(n);a?a.push(t):m(this,Ce).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(m(this,Fe).delete(t)){const n=vn(t);if(typeof n=="string"){const a=m(this,Ce).get(n);if(a)if(a.length>1){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}else a[0]===t&&m(this,Ce).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=vn(t);if(typeof n=="string"){const a=m(this,Ce).get(n),r=a==null?void 0:a.find(o=>o.state.status==="pending");return!r||r===t}else return!0}runNext(t){var a;const n=vn(t);if(typeof n=="string"){const r=(a=m(this,Ce).get(n))==null?void 0:a.find(o=>o!==t&&o.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){de.batch(()=>{m(this,Fe).forEach(t=>{this.notify({type:"removed",mutation:t})}),m(this,Fe).clear(),m(this,Ce).clear()})}getAll(){return Array.from(m(this,Fe))}find(t){const n={exact:!0,...t};return this.getAll().find(a=>br(n,a))}findAll(t={}){return this.getAll().filter(n=>br(t,n))}notify(t){de.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return de.batch(()=>Promise.all(t.map(n=>n.continue().catch(be))))}},Fe=new WeakMap,Ce=new WeakMap,cn=new WeakMap,Zr);function vn(e){var t;return(t=e.options.scope)==null?void 0:t.id}function vr(e){return{onFetch:(t,n)=>{var p,f,b,c,v;const a=t.options,r=(b=(f=(p=t.fetchOptions)==null?void 0:p.meta)==null?void 0:f.fetchMore)==null?void 0:b.direction,o=((c=t.state.data)==null?void 0:c.pages)||[],i=((v=t.state.data)==null?void 0:v.pageParams)||[];let l={pages:[],pageParams:[]},u=0;const d=async()=>{let g=!1;const w=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>(t.signal.aborted?g=!0:t.signal.addEventListener("abort",()=>{g=!0}),t.signal)})},E=Ns(t.options,t.fetchOptions),k=async(S,P,N)=>{if(g)return Promise.reject();if(P==null&&S.pages.length)return Promise.resolve(S);const z=(()=>{const te={client:t.client,queryKey:t.queryKey,pageParam:P,direction:N?"backward":"forward",meta:t.options.meta};return w(te),te})(),J=await E(z),{maxPages:H}=t.options,q=N?Vl:Wl;return{pages:q(S.pages,J,H),pageParams:q(S.pageParams,P,H)}};if(r&&o.length){const S=r==="backward",P=S?ic:xr,N={pages:o,pageParams:i},C=P(a,N);l=await k(N,C,S)}else{const S=e??o.length;do{const P=u===0?i[0]??a.initialPageParam:xr(a,l);if(u>0&&P==null)break;l=await k(l,P),u++}while(u<S)}return l};t.options.persister?t.fetchFn=()=>{var g,w;return(w=(g=t.options).persister)==null?void 0:w.call(g,d,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=d}}}function xr(e,{pages:t,pageParams:n}){const a=t.length-1;return t.length>0?e.getNextPageParam(t[a],t,n[a],n):void 0}function ic(e,{pages:t,pageParams:n}){var a;return t.length>0?(a=e.getPreviousPageParam)==null?void 0:a.call(e,t[0],t,n[0],n):void 0}var ae,Xe,Ze,Lt,Mt,et,Ft,Ut,es,lc=(es=class{constructor(e={}){D(this,ae);D(this,Xe);D(this,Ze);D(this,Lt);D(this,Mt);D(this,et);D(this,Ft);D(this,Ut);R(this,ae,e.queryCache||new ac),R(this,Xe,e.mutationCache||new oc),R(this,Ze,e.defaultOptions||{}),R(this,Lt,new Map),R(this,Mt,new Map),R(this,et,0)}mount(){yn(this,et)._++,m(this,et)===1&&(R(this,Ft,qa.subscribe(async e=>{e&&(await this.resumePausedMutations(),m(this,ae).onFocus())})),R(this,Ut,Pn.subscribe(async e=>{e&&(await this.resumePausedMutations(),m(this,ae).onOnline())})))}unmount(){var e,t;yn(this,et)._--,m(this,et)===0&&((e=m(this,Ft))==null||e.call(this),R(this,Ft,void 0),(t=m(this,Ut))==null||t.call(this),R(this,Ut,void 0))}isFetching(e){return m(this,ae).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return m(this,Xe).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=m(this,ae).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=m(this,ae).build(this,t),a=n.state.data;return a===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(rt(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(a))}getQueriesData(e){return m(this,ae).findAll(e).map(({queryKey:t,state:n})=>{const a=n.data;return[t,a]})}setQueryData(e,t,n){const a=this.defaultQueryOptions({queryKey:e}),r=m(this,ae).get(a.queryHash),o=r==null?void 0:r.state.data,i=zl(t,o);if(i!==void 0)return m(this,ae).build(this,a).setData(i,{...n,manual:!0})}setQueriesData(e,t,n){return de.batch(()=>m(this,ae).findAll(e).map(({queryKey:a})=>[a,this.setQueryData(a,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=m(this,ae).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=m(this,ae);de.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=m(this,ae);return de.batch(()=>(n.findAll(e).forEach(a=>{a.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},a=de.batch(()=>m(this,ae).findAll(e).map(r=>r.cancel(n)));return Promise.all(a).then(be).catch(be)}invalidateQueries(e,t={}){return de.batch(()=>(m(this,ae).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},a=de.batch(()=>m(this,ae).findAll(e).filter(r=>!r.isDisabled()&&!r.isStatic()).map(r=>{let o=r.fetch(void 0,n);return n.throwOnError||(o=o.catch(be)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(a).then(be)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=m(this,ae).build(this,t);return n.isStaleByTime(rt(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(be).catch(be)}fetchInfiniteQuery(e){return e.behavior=vr(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(be).catch(be)}ensureInfiniteQueryData(e){return e.behavior=vr(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Pn.isOnline()?m(this,Xe).resumePausedMutations():Promise.resolve()}getQueryCache(){return m(this,ae)}getMutationCache(){return m(this,Xe)}getDefaultOptions(){return m(this,Ze)}setDefaultOptions(e){R(this,Ze,e)}setQueryDefaults(e,t){m(this,Lt).set(rn(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...m(this,Lt).values()],n={};return t.forEach(a=>{sn(e,a.queryKey)&&Object.assign(n,a.defaultOptions)}),n}setMutationDefaults(e,t){m(this,Mt).set(rn(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...m(this,Mt).values()],n={};return t.forEach(a=>{sn(e,a.mutationKey)&&Object.assign(n,a.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...m(this,Ze).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Ua(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Ha&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...m(this,Ze).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){m(this,ae).clear(),m(this,Xe).clear()}},ae=new WeakMap,Xe=new WeakMap,Ze=new WeakMap,Lt=new WeakMap,Mt=new WeakMap,et=new WeakMap,Ft=new WeakMap,Ut=new WeakMap,es),fe,G,dn,pe,bt,Ht,tt,nt,un,qt,Bt,yt,wt,at,Gt,W,tn,ha,ma,pa,fa,ga,ba,ya,Ms,ts,cc=(ts=class extends pn{constructor(t,n){super();D(this,W);D(this,fe);D(this,G);D(this,dn);D(this,pe);D(this,bt);D(this,Ht);D(this,tt);D(this,nt);D(this,un);D(this,qt);D(this,Bt);D(this,yt);D(this,wt);D(this,at);D(this,Gt,new Set);this.options=n,R(this,fe,t),R(this,nt,null),R(this,tt,ua()),this.options.experimental_prefetchInRender||m(this,tt).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(m(this,G).addObserver(this),kr(m(this,G),this.options)?B(this,W,tn).call(this):this.updateResult(),B(this,W,fa).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return wa(m(this,G),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return wa(m(this,G),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,B(this,W,ga).call(this),B(this,W,ba).call(this),m(this,G).removeObserver(this)}setOptions(t){const n=this.options,a=m(this,G);if(this.options=m(this,fe).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Se(this.options.enabled,m(this,G))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");B(this,W,ya).call(this),m(this,G).setOptions(this.options),n._defaulted&&!la(this.options,n)&&m(this,fe).getQueryCache().notify({type:"observerOptionsUpdated",query:m(this,G),observer:this});const r=this.hasListeners();r&&Sr(m(this,G),a,this.options,n)&&B(this,W,tn).call(this),this.updateResult(),r&&(m(this,G)!==a||Se(this.options.enabled,m(this,G))!==Se(n.enabled,m(this,G))||rt(this.options.staleTime,m(this,G))!==rt(n.staleTime,m(this,G)))&&B(this,W,ha).call(this);const o=B(this,W,ma).call(this);r&&(m(this,G)!==a||Se(this.options.enabled,m(this,G))!==Se(n.enabled,m(this,G))||o!==m(this,at))&&B(this,W,pa).call(this,o)}getOptimisticResult(t){const n=m(this,fe).getQueryCache().build(m(this,fe),t),a=this.createResult(n,t);return uc(this,a)&&(R(this,pe,a),R(this,Ht,this.options),R(this,bt,m(this,G).state)),a}getCurrentResult(){return m(this,pe)}trackResult(t,n){return new Proxy(t,{get:(a,r)=>(this.trackProp(r),n==null||n(r),Reflect.get(a,r))})}trackProp(t){m(this,Gt).add(t)}getCurrentQuery(){return m(this,G)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const n=m(this,fe).defaultQueryOptions(t),a=m(this,fe).getQueryCache().build(m(this,fe),n);return a.fetch().then(()=>this.createResult(a,n))}fetch(t){return B(this,W,tn).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),m(this,pe)))}createResult(t,n){var H;const a=m(this,G),r=this.options,o=m(this,pe),i=m(this,bt),l=m(this,Ht),d=t!==a?t.state:m(this,dn),{state:p}=t;let f={...p},b=!1,c;if(n._optimisticResults){const q=this.hasListeners(),te=!q&&kr(t,n),I=q&&Sr(t,a,n,r);(te||I)&&(f={...f,...Ls(p.data,t.options)}),n._optimisticResults==="isRestoring"&&(f.fetchStatus="idle")}let{error:v,errorUpdatedAt:g,status:w}=f;c=f.data;let E=!1;if(n.placeholderData!==void 0&&c===void 0&&w==="pending"){let q;o!=null&&o.isPlaceholderData&&n.placeholderData===(l==null?void 0:l.placeholderData)?(q=o.data,E=!0):q=typeof n.placeholderData=="function"?n.placeholderData((H=m(this,Bt))==null?void 0:H.state.data,m(this,Bt)):n.placeholderData,q!==void 0&&(w="success",c=da(o==null?void 0:o.data,q,n),b=!0)}if(n.select&&c!==void 0&&!E)if(o&&c===(i==null?void 0:i.data)&&n.select===m(this,un))c=m(this,qt);else try{R(this,un,n.select),c=n.select(c),c=da(o==null?void 0:o.data,c,n),R(this,qt,c),R(this,nt,null)}catch(q){R(this,nt,q)}m(this,nt)&&(v=m(this,nt),c=m(this,qt),g=Date.now(),w="error");const k=f.fetchStatus==="fetching",S=w==="pending",P=w==="error",N=S&&k,C=c!==void 0,J={status:w,fetchStatus:f.fetchStatus,isPending:S,isSuccess:w==="success",isError:P,isInitialLoading:N,isLoading:N,data:c,dataUpdatedAt:f.dataUpdatedAt,error:v,errorUpdatedAt:g,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>d.dataUpdateCount||f.errorUpdateCount>d.errorUpdateCount,isFetching:k,isRefetching:k&&!S,isLoadingError:P&&!C,isPaused:f.fetchStatus==="paused",isPlaceholderData:b,isRefetchError:P&&C,isStale:Ba(t,n),refetch:this.refetch,promise:m(this,tt),isEnabled:Se(n.enabled,t)!==!1};if(this.options.experimental_prefetchInRender){const q=re=>{J.status==="error"?re.reject(J.error):J.data!==void 0&&re.resolve(J.data)},te=()=>{const re=R(this,tt,J.promise=ua());q(re)},I=m(this,tt);switch(I.status){case"pending":t.queryHash===a.queryHash&&q(I);break;case"fulfilled":(J.status==="error"||J.data!==I.value)&&te();break;case"rejected":(J.status!=="error"||J.error!==I.reason)&&te();break}}return J}updateResult(){const t=m(this,pe),n=this.createResult(m(this,G),this.options);if(R(this,bt,m(this,G).state),R(this,Ht,this.options),m(this,bt).data!==void 0&&R(this,Bt,m(this,G)),la(n,t))return;R(this,pe,n);const a=()=>{if(!t)return!0;const{notifyOnChangeProps:r}=this.options,o=typeof r=="function"?r():r;if(o==="all"||!o&&!m(this,Gt).size)return!0;const i=new Set(o??m(this,Gt));return this.options.throwOnError&&i.add("error"),Object.keys(m(this,pe)).some(l=>{const u=l;return m(this,pe)[u]!==t[u]&&i.has(u)})};B(this,W,Ms).call(this,{listeners:a()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&B(this,W,fa).call(this)}},fe=new WeakMap,G=new WeakMap,dn=new WeakMap,pe=new WeakMap,bt=new WeakMap,Ht=new WeakMap,tt=new WeakMap,nt=new WeakMap,un=new WeakMap,qt=new WeakMap,Bt=new WeakMap,yt=new WeakMap,wt=new WeakMap,at=new WeakMap,Gt=new WeakMap,W=new WeakSet,tn=function(t){B(this,W,ya).call(this);let n=m(this,G).fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(be)),n},ha=function(){B(this,W,ga).call(this);const t=rt(this.options.staleTime,m(this,G));if(xt||m(this,pe).isStale||!ia(t))return;const a=Cs(m(this,pe).dataUpdatedAt,t)+1;R(this,yt,setTimeout(()=>{m(this,pe).isStale||this.updateResult()},a))},ma=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(m(this,G)):this.options.refetchInterval)??!1},pa=function(t){B(this,W,ba).call(this),R(this,at,t),!(xt||Se(this.options.enabled,m(this,G))===!1||!ia(m(this,at))||m(this,at)===0)&&R(this,wt,setInterval(()=>{(this.options.refetchIntervalInBackground||qa.isFocused())&&B(this,W,tn).call(this)},m(this,at)))},fa=function(){B(this,W,ha).call(this),B(this,W,pa).call(this,B(this,W,ma).call(this))},ga=function(){m(this,yt)&&(clearTimeout(m(this,yt)),R(this,yt,void 0))},ba=function(){m(this,wt)&&(clearInterval(m(this,wt)),R(this,wt,void 0))},ya=function(){const t=m(this,fe).getQueryCache().build(m(this,fe),this.options);if(t===m(this,G))return;const n=m(this,G);R(this,G,t),R(this,dn,t.state),this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))},Ms=function(t){de.batch(()=>{t.listeners&&this.listeners.forEach(n=>{n(m(this,pe))}),m(this,fe).getQueryCache().notify({query:m(this,G),type:"observerResultsUpdated"})})},ts);function dc(e,t){return Se(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function kr(e,t){return dc(e,t)||e.state.data!==void 0&&wa(e,t,t.refetchOnMount)}function wa(e,t,n){if(Se(t.enabled,e)!==!1&&rt(t.staleTime,e)!=="static"){const a=typeof n=="function"?n(e):n;return a==="always"||a!==!1&&Ba(e,t)}return!1}function Sr(e,t,n,a){return(e!==t||Se(a.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&Ba(e,n)}function Ba(e,t){return Se(t.enabled,e)!==!1&&e.isStaleByTime(rt(t.staleTime,e))}function uc(e,t){return!la(e.getCurrentResult(),t)}var Fs=h.createContext(void 0),hc=e=>{const t=h.useContext(Fs);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},mc=({client:e,children:t})=>(h.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),s.jsx(Fs.Provider,{value:e,children:t})),Us=h.createContext(!1),pc=()=>h.useContext(Us);Us.Provider;function fc(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var gc=h.createContext(fc()),bc=()=>h.useContext(gc),yc=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},wc=e=>{h.useEffect(()=>{e.clearReset()},[e])},vc=({result:e,errorResetBoundary:t,throwOnError:n,query:a,suspense:r})=>e.isError&&!t.isReset()&&!e.isFetching&&a&&(r&&e.data===void 0||Kl(n,[e.error,a])),xc=e=>{if(e.suspense){const t=a=>a==="static"?a:Math.max(a??1e3,1e3),n=e.staleTime;e.staleTime=typeof n=="function"?(...a)=>t(n(...a)):t(n),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},kc=(e,t)=>e.isLoading&&e.isFetching&&!t,Sc=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,Er=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function Ec(e,t,n){var f,b,c,v,g;const a=pc(),r=bc(),o=hc(),i=o.defaultQueryOptions(e);(b=(f=o.getDefaultOptions().queries)==null?void 0:f._experimental_beforeQuery)==null||b.call(f,i),i._optimisticResults=a?"isRestoring":"optimistic",xc(i),yc(i,r),wc(r);const l=!o.getQueryCache().get(i.queryHash),[u]=h.useState(()=>new t(o,i)),d=u.getOptimisticResult(i),p=!a&&e.subscribed!==!1;if(h.useSyncExternalStore(h.useCallback(w=>{const E=p?u.subscribe(de.batchCalls(w)):be;return u.updateResult(),E},[u,p]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),h.useEffect(()=>{u.setOptions(i)},[i,u]),Sc(i,d))throw Er(i,u,r);if(vc({result:d,errorResetBoundary:r,throwOnError:i.throwOnError,query:o.getQueryCache().get(i.queryHash),suspense:i.suspense}))throw d.error;if((v=(c=o.getDefaultOptions().queries)==null?void 0:c._experimental_afterQuery)==null||v.call(c,i,d),i.experimental_prefetchInRender&&!xt&&kc(d,a)){const w=l?Er(i,u,r):(g=o.getQueryCache().get(i.queryHash))==null?void 0:g.promise;w==null||w.catch(be).finally(()=>{u.updateResult()})}return i.notifyOnChangeProps?d:u.trackResult(d)}function Hs(e,t){return Ec(e,cc)}var Tc=typeof Element<"u",_c=typeof Map=="function",Rc=typeof Set=="function",Ac=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Rn(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,a,r;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(!Rn(e[a],t[a]))return!1;return!0}var o;if(_c&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;for(o=e.entries();!(a=o.next()).done;)if(!Rn(a.value[1],t.get(a.value[0])))return!1;return!0}if(Rc&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(Ac&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,r[a]))return!1;if(Tc&&e instanceof Element)return!1;for(a=n;a--!==0;)if(!((r[a]==="_owner"||r[a]==="__v"||r[a]==="__o")&&e.$$typeof)&&!Rn(e[r[a]],t[r[a]]))return!1;return!0}return e!==e&&t!==t}var jc=function(t,n){try{return Rn(t,n)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}};const Cc=Na(jc);var Pc=function(e,t,n,a,r,o,i,l){if(!e){var u;if(t===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,a,r,o,i,l],p=0;u=new Error(t.replace(/%s/g,function(){return d[p++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},Nc=Pc;const Tr=Na(Nc);var $c=function(t,n,a,r){var o=a?a.call(r,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var i=Object.keys(t),l=Object.keys(n);if(i.length!==l.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),d=0;d<i.length;d++){var p=i[d];if(!u(p))return!1;var f=t[p],b=n[p];if(o=a?a.call(r,f,b,p):void 0,o===!1||o===void 0&&f!==b)return!1}return!0};const Ic=Na($c);var qs=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(qs||{}),Vn={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},_r=Object.values(qs),Ga={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Oc=Object.entries(Ga).reduce((e,[t,n])=>(e[n]=t,e),{}),Pe="data-rh",Pt={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Nt=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const a=e[n];if(Object.prototype.hasOwnProperty.call(a,t))return a[t]}return null},Dc=e=>{let t=Nt(e,"title");const n=Nt(e,Pt.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const a=Nt(e,Pt.DEFAULT_TITLE);return t||a||void 0},Lc=e=>Nt(e,Pt.ON_CHANGE_CLIENT_STATE)||(()=>{}),Kn=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,a)=>({...n,...a}),{}),Mc=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,a)=>{if(!n.length){const r=Object.keys(a);for(let o=0;o<r.length;o+=1){const l=r[o].toLowerCase();if(e.indexOf(l)!==-1&&a[l])return n.concat(a)}}return n},[]),Fc=e=>console&&typeof console.warn=="function"&&console.warn(e),Yt=(e,t,n)=>{const a={};return n.filter(r=>Array.isArray(r[e])?!0:(typeof r[e]<"u"&&Fc(`Helmet: ${e} should be of type "Array". Instead found type "${typeof r[e]}"`),!1)).map(r=>r[e]).reverse().reduce((r,o)=>{const i={};o.filter(u=>{let d;const p=Object.keys(u);for(let b=0;b<p.length;b+=1){const c=p[b],v=c.toLowerCase();t.indexOf(v)!==-1&&!(d==="rel"&&u[d].toLowerCase()==="canonical")&&!(v==="rel"&&u[v].toLowerCase()==="stylesheet")&&(d=v),t.indexOf(c)!==-1&&(c==="innerHTML"||c==="cssText"||c==="itemprop")&&(d=c)}if(!d||!u[d])return!1;const f=u[d].toLowerCase();return a[d]||(a[d]={}),i[d]||(i[d]={}),a[d][f]?!1:(i[d][f]=!0,!0)}).reverse().forEach(u=>r.push(u));const l=Object.keys(i);for(let u=0;u<l.length;u+=1){const d=l[u],p={...a[d],...i[d]};a[d]=p}return r},[]).reverse()},Uc=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},Hc=e=>({baseTag:Mc(["href"],e),bodyAttributes:Kn("bodyAttributes",e),defer:Nt(e,Pt.DEFER),encode:Nt(e,Pt.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Kn("htmlAttributes",e),linkTags:Yt("link",["rel","href"],e),metaTags:Yt("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:Yt("noscript",["innerHTML"],e),onChangeClientState:Lc(e),scriptTags:Yt("script",["src","innerHTML"],e),styleTags:Yt("style",["cssText"],e),title:Dc(e),titleAttributes:Kn("titleAttributes",e),prioritizeSeoTags:Uc(e,Pt.PRIORITIZE_SEO_TAGS)}),Bs=e=>Array.isArray(e)?e.join(""):e,qc=(e,t)=>{const n=Object.keys(e);for(let a=0;a<n.length;a+=1)if(t[n[a]]&&t[n[a]].includes(e[n[a]]))return!0;return!1},Qn=(e,t)=>Array.isArray(e)?e.reduce((n,a)=>(qc(a,t)?n.priority.push(a):n.default.push(a),n),{priority:[],default:[]}):{default:e,priority:[]},Rr=(e,t)=>({...e,[t]:void 0}),Bc=["noscript","script","style"],va=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Gs=e=>Object.keys(e).reduce((t,n)=>{const a=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${a}`:a},""),Gc=(e,t,n,a)=>{const r=Gs(n),o=Bs(t);return r?`<${e} ${Pe}="true" ${r}>${va(o,a)}</${e}>`:`<${e} ${Pe}="true">${va(o,a)}</${e}>`},zc=(e,t,n=!0)=>t.reduce((a,r)=>{const o=r,i=Object.keys(o).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,p)=>{const f=typeof o[p]>"u"?p:`${p}="${va(o[p],n)}"`;return d?`${d} ${f}`:f},""),l=o.innerHTML||o.cssText||"",u=Bc.indexOf(e)===-1;return`${a}<${e} ${Pe}="true" ${i}${u?"/>":`>${l}</${e}>`}`},""),zs=(e,t={})=>Object.keys(e).reduce((n,a)=>{const r=Ga[a];return n[r||a]=e[a],n},t),Jc=(e,t,n)=>{const a={key:t,[Pe]:!0},r=zs(n,a);return[x.createElement("title",r,t)]},An=(e,t)=>t.map((n,a)=>{const r={key:a,[Pe]:!0};return Object.keys(n).forEach(o=>{const l=Ga[o]||o;if(l==="innerHTML"||l==="cssText"){const u=n.innerHTML||n.cssText;r.dangerouslySetInnerHTML={__html:u}}else r[l]=n[o]}),x.createElement(e,r)}),xe=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>Jc(e,t.title,t.titleAttributes),toString:()=>Gc(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>zs(t),toString:()=>Gs(t)};default:return{toComponent:()=>An(e,t),toString:()=>zc(e,t,n)}}},Wc=({metaTags:e,linkTags:t,scriptTags:n,encode:a})=>{const r=Qn(e,Vn.meta),o=Qn(t,Vn.link),i=Qn(n,Vn.script);return{priorityMethods:{toComponent:()=>[...An("meta",r.priority),...An("link",o.priority),...An("script",i.priority)],toString:()=>`${xe("meta",r.priority,a)} ${xe("link",o.priority,a)} ${xe("script",i.priority,a)}`},metaTags:r.default,linkTags:o.default,scriptTags:i.default}},Vc=e=>{const{baseTag:t,bodyAttributes:n,encode:a=!0,htmlAttributes:r,noscriptTags:o,styleTags:i,title:l="",titleAttributes:u,prioritizeSeoTags:d}=e;let{linkTags:p,metaTags:f,scriptTags:b}=e,c={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:c,linkTags:p,metaTags:f,scriptTags:b}=Wc(e)),{priority:c,base:xe("base",t,a),bodyAttributes:xe("bodyAttributes",n,a),htmlAttributes:xe("htmlAttributes",r,a),link:xe("link",p,a),meta:xe("meta",f,a),noscript:xe("noscript",o,a),script:xe("script",b,a),style:xe("style",i,a),title:xe("title",{title:l,titleAttributes:u},a)}},xa=Vc,xn=[],Js=!!(typeof window<"u"&&window.document&&window.document.createElement),ka=class{constructor(e,t){De(this,"instances",[]);De(this,"canUseDOM",Js);De(this,"context");De(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?xn:this.instances,add:e=>{(this.canUseDOM?xn:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?xn:this.instances).indexOf(e);(this.canUseDOM?xn:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=xa({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Kc={},Ws=x.createContext(Kc),vt,Vs=(vt=class extends h.Component{constructor(n){super(n);De(this,"helmetData");this.helmetData=new ka(this.props.context||{},vt.canUseDOM)}render(){return x.createElement(Ws.Provider,{value:this.helmetData.value},this.props.children)}},De(vt,"canUseDOM",Js),vt),_t=(e,t)=>{const n=document.head||document.querySelector("head"),a=n.querySelectorAll(`${e}[${Pe}]`),r=[].slice.call(a),o=[];let i;return t&&t.length&&t.forEach(l=>{const u=document.createElement(e);for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d))if(d==="innerHTML")u.innerHTML=l.innerHTML;else if(d==="cssText")u.styleSheet?u.styleSheet.cssText=l.cssText:u.appendChild(document.createTextNode(l.cssText));else{const p=d,f=typeof l[p]>"u"?"":l[p];u.setAttribute(d,f)}u.setAttribute(Pe,"true"),r.some((d,p)=>(i=p,u.isEqualNode(d)))?r.splice(i,1):o.push(u)}),r.forEach(l=>{var u;return(u=l.parentNode)==null?void 0:u.removeChild(l)}),o.forEach(l=>n.appendChild(l)),{oldTags:r,newTags:o}},Sa=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const a=n.getAttribute(Pe),r=a?a.split(","):[],o=[...r],i=Object.keys(t);for(const l of i){const u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),r.indexOf(l)===-1&&r.push(l);const d=o.indexOf(l);d!==-1&&o.splice(d,1)}for(let l=o.length-1;l>=0;l-=1)n.removeAttribute(o[l]);r.length===o.length?n.removeAttribute(Pe):n.getAttribute(Pe)!==i.join(",")&&n.setAttribute(Pe,i.join(","))},Qc=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Bs(e)),Sa("title",t)},Ar=(e,t)=>{const{baseTag:n,bodyAttributes:a,htmlAttributes:r,linkTags:o,metaTags:i,noscriptTags:l,onChangeClientState:u,scriptTags:d,styleTags:p,title:f,titleAttributes:b}=e;Sa("body",a),Sa("html",r),Qc(f,b);const c={baseTag:_t("base",n),linkTags:_t("link",o),metaTags:_t("meta",i),noscriptTags:_t("noscript",l),scriptTags:_t("script",d),styleTags:_t("style",p)},v={},g={};Object.keys(c).forEach(w=>{const{newTags:E,oldTags:k}=c[w];E.length&&(v[w]=E),k.length&&(g[w]=c[w].oldTags)}),t&&t(),u(e,v,g)},Xt=null,Yc=e=>{Xt&&cancelAnimationFrame(Xt),e.defer?Xt=requestAnimationFrame(()=>{Ar(e,()=>{Xt=null})}):(Ar(e),Xt=null)},Xc=Yc,jr=class extends h.Component{constructor(){super(...arguments);De(this,"rendered",!1)}shouldComponentUpdate(t){return!Ic(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let a=null;const r=Hc(t.get().map(o=>{const i={...o.props};return delete i.context,i}));Vs.canUseDOM?Xc(r):xa&&(a=xa(r)),n(a)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},ra,th=(ra=class extends h.Component{shouldComponentUpdate(e){return!Cc(Rr(this.props,"helmetData"),Rr(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,a){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,a)}]}}mapObjectTypeChildren(e,t,n,a){switch(e.type){case"title":return{...t,[e.type]:a,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(a=>{n={...n,[a]:e[a]}}),n}warnOnInvalidChildren(e,t){return Tr(_r.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${_r.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),Tr(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return x.Children.forEach(e,a=>{if(!a||!a.props)return;const{children:r,...o}=a.props,i=Object.keys(o).reduce((u,d)=>(u[Oc[d]||d]=o[d],u),{});let{type:l}=a;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(a,r),l){case"Symbol(react.fragment)":t=this.mapChildrenToProps(r,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(a,n,i,r);break;default:t=this.mapObjectTypeChildren(a,t,i,r);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:a}=t;if(e&&(n=this.mapChildrenToProps(e,n)),a&&!(a instanceof ka)){const r=a;a=new ka(r.context,!0),delete n.helmetData}return a?x.createElement(jr,{...n,context:a.value}):x.createElement(Ws.Consumer,null,r=>x.createElement(jr,{...n,context:r}))}},De(ra,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),ra);const Zc=Ia("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",hero:"bg-primary text-primary-foreground font-mono uppercase tracking-widest font-semibold hover:bg-primary/90 hover:shadow-[0_0_26px_-6px_hsl(var(--primary)/0.6)]",heroOutline:"border border-primary/60 text-foreground bg-transparent font-mono uppercase tracking-widest font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary",glass:"border border-border bg-background/70 backdrop-blur-md text-foreground hover:border-primary/50 hover:text-primary"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-sm px-3",lg:"h-12 rounded-sm px-7 text-sm",xl:"h-14 rounded-sm px-10 text-base",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),He=h.forwardRef(({className:e,variant:t,size:n,asChild:a=!1,...r},o)=>{const i=a?Jo:"button";return s.jsx(i,{className:U(Zc({variant:t,size:n,className:e})),ref:o,...r})});He.displayName="Button";let Ea;const Ta=[];function ed(e){Ea=e;for(const t of Ta)e.capture(...t);Ta.length=0}const td={capture:(...e)=>{if(Ea)return Ea.capture(...e);Ta.push(e)}};function fn(){return td}function nd({theme:e,toggleTheme:t}){const n=fn(),a=()=>{t(),n==null||n.capture("theme_toggled",{theme:e==="dark"?"light":"dark"})};return s.jsx(He,{variant:"glass",size:"icon",onClick:a,"aria-label":`Switch to ${e==="dark"?"light":"dark"} mode`,title:`Switch to ${e==="dark"?"light":"dark"} mode`,className:"relative overflow-hidden",children:s.jsx("div",{className:"transition-transform duration-300 ease-in-out",style:{transform:`rotate(${e==="dark"?0:180}deg)`},children:e==="dark"?s.jsx(ws,{className:"h-5 w-5"}):s.jsx(_i,{className:"h-5 w-5"})})})}const ad=Pa,rd=Wo,Cr=ja,sd=Ca,Ks=h.forwardRef(({className:e,...t},n)=>s.jsx(hn,{className:U("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:n}));Ks.displayName=hn.displayName;const od=Ia("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),Qs=h.forwardRef(({side:e="right",className:t,children:n,...a},r)=>s.jsxs(sd,{children:[s.jsx(Ks,{}),s.jsxs(mn,{ref:r,className:U(od({side:e}),t),...a,children:[n,s.jsxs(ja,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[s.jsx(On,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Qs.displayName=mn.displayName;const Ys=({className:e,...t})=>s.jsx("div",{className:U("flex flex-col space-y-2 text-center sm:text-left",e),...t});Ys.displayName="SheetHeader";const Xs=h.forwardRef(({className:e,...t},n)=>s.jsx($n,{ref:n,className:U("text-lg font-semibold text-foreground",e),...t}));Xs.displayName=$n.displayName;const Zs=h.forwardRef(({className:e,...t},n)=>s.jsx(In,{ref:n,className:U("text-sm text-muted-foreground",e),...t}));Zs.displayName=In.displayName;function id(e){const[t,n]=h.useState("");return h.useEffect(()=>{const a=()=>{const r=window.scrollY+200;for(const o of e){const i=document.getElementById(o);if(i){const{offsetTop:l,offsetHeight:u}=i;if(r>=l&&r<l+u){n(o);return}}}window.scrollY<100&&n("")};return a(),window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[e]),t}const Pr="https://assets.calendly.com/assets/external/widget.css",ld="https://assets.calendly.com/assets/external/widget.js";let Zt=null;function eo(){if(document.querySelector(`link[href="${Pr}"]`))return;const e=document.createElement("link");e.rel="stylesheet",e.href=Pr,document.head.appendChild(e)}function to(){return window.Calendly?Promise.resolve():Zt||(Zt=new Promise((e,t)=>{const n=document.createElement("script");n.src=ld,n.async=!0,n.onload=()=>e(),n.onerror=()=>{Zt=null,t(new Error("Failed to load Calendly widget"))},document.body.appendChild(n)}),Zt)}function Yn(){typeof document>"u"||(eo(),to().catch(()=>{}))}async function Nn(e){var t;typeof document>"u"||(eo(),await to(),(t=window.Calendly)==null||t.initPopupWidget({url:e}))}const kn={name:"Abdelrahman Saed",role:"Senior / Lead Mobile Engineer",subtitle:"Flutter / Mobile Architect",company:"iStoria",companyUrl:"https://istoria.app/en",location:"Cairo, Egypt / Remote",email:"me@bnsaed.com",avatarUrl:"https://avatars.githubusercontent.com/u/33700292?v=4",tagline:"I ship production iOS & Android apps to 5M+ users — 7 years of Flutter, Dart, BLoC/Cubit, and Clean Architecture. I lead a mobile squad at iStoria, owning architecture, release governance, and delivery across a 50+ module codebase."},cd={status:"open",label:"Available for hire",summary:"Open to Senior / Lead Mobile Engineering roles — full-time, part-time, or contract. Remote worldwide, or hybrid / on-site across the Gulf & Egypt.",engagements:[{type:"Full-time",icon:"Briefcase",summary:"Senior / Lead Mobile Engineer",description:"Own mobile architecture, release governance, and a squad end-to-end — the way I do today at iStoria for a 5M+ user app."},{type:"Part-time",icon:"Clock",summary:"Fractional mobile lead",description:"A few days a week: architecture reviews, CI/CD and release-engineering setup, and mentoring a growing Flutter team."},{type:"Contract",icon:"FileSignature",summary:"Project-based delivery",description:"Ship a Flutter app, untangle a release pipeline, or harden performance, security, and crash-free stability for a fixed scope."}],workModes:["Remote (worldwide)","Hybrid / on-site (Gulf & Egypt)","Contract / freelance"],responseTime:"Replies within 24 hours",startDate:"Flexible start date"},Ue={github:"https://github.com/binSaed",linkedin:"https://www.linkedin.com/in/binsaed/",linkedinRecommendations:"https://www.linkedin.com/in/binsaed/details/recommendations/",stackoverflow:"https://stackoverflow.com/users/11001850/abdelrahman-saed",pubdev:"https://pub.dev/publishers/bnsaed.com/packages",cv:"https://bnsaed.com/CV/cv.pdf",email:"mailto:me@bnsaed.com",calendly:"https://calendly.com/bnsaed/meet"},nh=["I'm a Senior / Lead Mobile Engineer with 7 years building production iOS and Android apps that have reached over 5 million users. I work in Flutter and Dart with BLoC/Cubit and Clean Architecture, and I care as much about release engineering and stability as I do about the features users see.","Today I lead a 4-engineer mobile squad at iStoria, owning architecture direction, release governance, and delivery for a 50+ module codebase. I've shipped 350+ production releases, reviewed 900+ PRs, sustained a 99.9% crash-free rate, and cut our release cycle from four weeks to one."],no=[{value:"7+",label:"Years shipping mobile"},{value:"5M+",label:"Users reached"},{value:"99.9%",label:"Crash-free rate"},{value:"350+",label:"Production releases"},{value:"900+",label:"PRs reviewed"},{value:"40K+",label:"Abuse accounts blocked"}],ah=[{role:"Lead Mobile Engineer",company:"iStoria",companyUrl:"https://istoria.app/en/",context:"EdTech · English Language Learning",location:"Riyadh, Saudi Arabia (Hybrid)",period:"Jun 2025 – Present",stack:["Flutter","Dart","BLoC","Cubit","PowerSync","Drift","Firebase","Sentry","GitHub Actions","GraphQL"],highlights:["Lead a 4-engineer iOS/Android squad — architecture direction, hiring bar, release governance, and quarterly roadmaps for a 5M+ user base.","Cut the release cycle 75% (4 weeks → 1) via trunk-based development, feature flags, and end-to-end CI/CD ownership.","Architected a modular Flutter codebase with 50+ feature modules and 140+ routes, enforced through CI quality gates and code review.","Hardened production security end-to-end: PII masked in logs and Sentry, cleartext traffic disabled, and TLS certificate validation enforced."]},{role:"Founding Mobile Engineer",company:"iStoria",companyUrl:"https://istoria.app/en/",context:"EdTech · English Language Learning",location:"Riyadh, Saudi Arabia (Hybrid)",period:"Jan 2022 – Jun 2025 · 3 yrs 6 mos",stack:["Flutter","Dart","BLoC","Cubit","PowerSync","Drift","Codemagic","Firebase","RevenueCat","Adjust"],highlights:["Shipped flagship growth & AI features end-to-end: Leaderboard with social sharing, AI Read-with (speech recognition), and the iStro AI chat companion.","Designed offline-first infrastructure (PowerSync + Drift) — selective per-key sync, conflict resolution, and schema migration for millions of accounts.","Architected a cross-platform anti-piracy system (jailbreak/root/tamper detection + backend behavioral analysis) that auto-blocked 30,000+ abusive accounts.","Drove a sustained performance program: ~35% cold-start reduction, ~60% rendering gains, and ~20% memory reduction."]},{role:"Mobile Engineer",company:"Happy Trip",companyUrl:"https://www.linkedin.com/company/happytrip-ar",context:"Travel / Tourism Tech",location:"Cairo, Egypt",period:"Oct 2020 – Jan 2022 · 1 yr 4 mos",stack:["Flutter","Dart","REST","Firebase"],highlights:["Owned mobile delivery end-to-end across the Flutter team — task planning, code-review gates, and the release cadence for every ship.","Architected a networking SDK with multi-layer caching, request queueing, auto-retry, token refresh, and background parsing — cutting networking code 60%.","Delivered the company's first mobile platform (consumer booking, internal HR, POS) in 14 months, enabling a full business pivot."]},{role:"Mobile Engineer (Part-time)",company:"Tech Bay Portal",companyUrl:"",context:"Ride-hailing",location:"UAE (Remote)",period:"Feb 2021 – Oct 2021 · 9 mos",stack:["Flutter","Dart","Socket.io","Google Maps"],highlights:["Delivered real-time GPS tracking and live trip updates (Socket.io, Google Maps) across driver and rider apps.","Hardened the live-tracking pipeline against intermittent connectivity — buffering location updates locally and replaying on reconnect."]},{role:"Mobile Engineer",company:"FekraSoft Co",companyUrl:"https://www.linkedin.com/company/fekrasoft",context:"Software House",location:"Cairo, Egypt",period:"Aug 2019 – Sep 2020 · 1 yr 2 mos",stack:["Flutter","Dart","RxDart","Firebase"],highlights:["Led company-wide Flutter adoption as the first Flutter engineer, mentoring the Android team and authoring the shared coding standards still in use.","Shipped production e-commerce and document-management apps with barcode scanning and file-level encryption."]}],rh=[{category:"Mobile",icon:"Smartphone",items:["Flutter","Dart","iOS","Android","Adaptive UI","Animations","WidgetKit","Deep Linking","Push (FCM)","i18n / RTL"]},{category:"Architecture & Data",icon:"Database",items:["Clean Architecture","MVVM","BLoC","Cubit","SOLID","Dependency Injection","PowerSync","Drift","Offline-first"]},{category:"DevOps & Quality",icon:"GitBranch",items:["CI/CD","GitHub Actions","Codemagic","Fastlane","Trunk-based","Feature Flags","Sentry","Maestro / Patrol","Unit / Widget Tests"]},{category:"Monetization",icon:"CreditCard",items:["RevenueCat","Stripe","Paddle","AdMob","In-App Purchases"]},{category:"Analytics & Engagement",icon:"LineChart",items:["Adjust","CleverTap","PostHog","Segment","WebEngage","MoEngage","A/B Testing","GrowthBook"]},{category:"Leadership",icon:"Users",items:["Architecture Ownership","Technical RFCs","Release Governance","Code Review","Mentoring"]}],sh=[{title:"flutter_cached_pdfview",description:"Native PDF viewer for iOS & Android with URL/asset/local caching, password-protected files, and gesture-based zoom.",image:"https://github.com/user-attachments/assets/77ccded4-5c51-4583-9830-0f1c66e627c4",tags:["Flutter","Dart","PDF","iOS","Android"],github:"https://github.com/binSaed/flutter_cached_pdfview",demo:"https://pub.dev/packages/flutter_cached_pdfview",stars:134,likes:501,downloads:43300,caseStudySlug:"flutter-cached-pdfview"},{title:"iStoria",description:"Story-based English learning used by millions. A core mobile engineer since the founding — owning architecture, offline-first sync, and growth features.",image:"https://play-lh.googleusercontent.com/nO5vER33waTf8T7vKPo-HYHflKVldZna_yQnqeB3Hqv9smjPiP-xGBTCGXWLFNIPn00",tags:["Flutter","Dart","Firebase","EdTech"],demo:"https://istoria.app/en/",downloads:5e6,caseStudySlug:"istoria"},{title:"Stickerawy",description:"WhatsApp stickers app for Android, with 500K+ installs on Google Play.",tags:["Flutter","Android","WhatsApp"],demo:"https://play.google.com/store/apps/details?id=com.stickerawy.stickers",downloads:5e5},{title:"clipboard_plus",description:"Flutter clipboard plugin with silent content-type detection on iOS — detects URLs, text, and images without triggering the paste permission dialog.",tags:["Flutter","iOS","Android","Plugin"],github:"https://github.com/binSaed/clipboard_plus",demo:"https://pub.dev/packages/clipboard_plus"},{title:"flutter_zoom_checker",description:"iOS/Android display-zoom (UI scaling) detection plugin, working around a Flutter framework limitation (issue #95421).",tags:["Flutter","iOS","Android","Plugin"],github:"https://github.com/binSaed/flutter_zoom_checker",demo:"https://pub.dev/packages/flutter_zoom_checker"},{title:"dio_firebase_performance_plus",description:"Dio interceptor that streams HTTP request metrics to Firebase Performance Monitoring.",tags:["Dart","Dio","Firebase"],github:"https://github.com/binSaed/dio_firebase_performance_plus"}],oh=[{name:"youtube_explode_dart",url:"https://github.com/Hexer10/youtube_explode_dart/pull/371"},{name:"dio_smart_retry",url:"https://github.com/rodion-m/dio_smart_retry/pull/36"},{name:"growthbook-flutter",url:"https://github.com/growthbook/growthbook-flutter/pulls?q=author:binSaed"}],ih=[{name:"Saber Son",title:"Flutter Developer · YouTuber",relationship:"Reported directly to Abdelrahman",date:"2026-06-03",initials:"SS",image:"/recommendations/saber-son.jpg",linkedin:"https://www.linkedin.com/in/saber-son-b100b4177/",quote:"One of the things I admire most about Abdelrahman is how supportive he is. Whenever I face a challenge, he never hesitates to put aside what he's doing and help me figure it out. What sets him apart is that he doesn't just solve the problem and move on — he takes the time to explain the solution, the reasoning behind it, and how to approach similar situations in the future. Thanks to his guidance, I've become much more confident and independent when tackling technical challenges."},{name:"AlHassan Balousha",title:"Senior Software Engineer · 9+ yrs scaling apps",relationship:"Worked with Abdelrahman on the same team",date:"2026-02-16",initials:"AB",image:"/recommendations/alhassan-balousha.jpg",linkedin:"https://www.linkedin.com/in/alhassan-balousha-9b7bb8114/",quote:`Abdelrahman is a highly accomplished Software Engineer and Tech Lead with strong executive-level technical leadership.

He brings a strategic vision to building large-scale mobile applications, with deep expertise in designing scalable architectures capable of serving millions of users with stability and high performance. He combines strong engineering depth with disciplined execution, ensuring long-term product sustainability and technical excellence.

What sets him apart: influential technical leadership and sound architectural decision-making; proven ability to build scalable, high-performance systems; effective team leadership and strong engineering culture; high productivity without compromising code quality or performance; and exceptional ability to solve complex problems under pressure.

Abdelrahman is a strategic technical asset to any organization seeking strong leadership and long-term product impact.`},{name:"Fady Mondy",title:"Engineering Manager at ID8 Media · Creator of TomatoPHP",relationship:"Worked with Abdelrahman on the same team",date:"2026-01-24",initials:"FM",image:"/recommendations/fady-mondy.jpg",linkedin:"https://www.linkedin.com/in/fadymondy/",quote:"Abdelrahman played a pivotal role in the success of the iStoria mobile platform. His leadership of the mobile team was defined by technical excellence and a relentless focus on user experience. He successfully navigated complex integrations and maintained a high velocity of feature releases without compromising on code quality. He is a proactive leader who anticipates challenges before they arise, making him an invaluable asset to any engineering department."},{name:"Mohammed Helaiwa",title:"Full Stack Engineer at iStoria",relationship:"Worked with Abdelrahman on the same team",date:"2026-01-17",initials:"MH",image:"/recommendations/mohammed-helaiwa.jpg",linkedin:"https://www.linkedin.com/in/me-helaiwa/",quote:`I've had the pleasure of working with Abdelrahman Saed, and I can confidently say he is one of the most reliable and skilled software engineers I've collaborated with. Abdelrahman combines deep technical expertise in Flutter with a strong understanding of building scalable, high-quality applications, especially in the EdTech domain.

What truly sets Abdelrahman apart is his ability to think beyond just code. He approaches problems with a product mindset, balances performance with maintainability, and consistently delivers clean, well-architected solutions. As a Lead Software Engineer, he demonstrates excellent leadership, mentoring teammates, setting high engineering standards, and driving projects forward with clarity and ownership.

Abdelrahman is proactive, detail-oriented, and always eager to improve both the product and the team around him. Any organization would be fortunate to have him on board, and I highly recommend him for any role requiring strong technical leadership, Flutter expertise, and a passion for building impactful software.`},{name:"Maher Al-Ghannam",title:"Senior QA Engineer · ISTQB-CTFL",relationship:"Worked with Abdelrahman on different teams",date:"2026-01-17",initials:"MA",image:"/recommendations/maher-al-ghannam.jpg",linkedin:"https://www.linkedin.com/in/maher-alghannam/",quote:"I highly recommend Abdelrahman as a Flutter Developer Team Lead. He has strong expertise in Flutter development and consistently delivers high-quality, well-structured mobile applications. Beyond his technical skills, he is a supportive and effective leader who encourages collaboration, guides the team through challenges, and ensures projects are delivered on time with excellent quality. Working with him has been a great experience."},{name:"Omar Sulieman",title:"Growth & Performance Marketer",relationship:"Worked with Abdelrahman on different teams",date:"2026-01-15",initials:"OS",image:"/recommendations/omar-sulieman.jpg",linkedin:"https://www.linkedin.com/in/omar-sulieman-3b7861217/",quote:`I've had the pleasure of working with Abdelrahman, and he is genuinely one of the strongest software engineers I've collaborated with.

He has deep hands-on expertise in Flutter, with a solid understanding of building scalable, high-performance mobile applications. What really sets him apart is his ability to think beyond implementation — he understands architecture, performance trade-offs, and long-term maintainability, which is critical for growing products.

In the EdTech space, Abdelrahman shows strong product awareness and a clear understanding of how technology should support learning outcomes, not just features. He's reliable, detail-oriented, and consistently delivers clean, well-structured code.

On top of his technical skills, he's professional, easy to work with, and communicates clearly across technical and non-technical teams. Any team looking for a senior Flutter engineer or a strong technical lead would be lucky to have him.

Highly recommended.`},{name:"Abdelrahman Shehata",title:"Lead Software Engineer · Mobile & AI",relationship:"Worked with Abdelrahman on the same team",date:"2025-11-16",initials:"AS",image:"/recommendations/abdelrahman-shehata.jpg",linkedin:"https://www.linkedin.com/in/abdelrahman-shehata-9a20b41b1/",quote:"As a Lead Software Engineer, one of his main strengths is problem solving in daily bugs. Highly recommended for lead tech companies, and you can rely on him for the highly advanced technologies."},{name:"Haitham Essam",title:"Senior Flutter Developer",relationship:"Reported directly to Abdelrahman",date:"2025-10-06",initials:"HE",image:"/recommendations/haitham-essam.jpg",linkedin:"https://www.linkedin.com/in/haitham-essam-b69b15332/",quote:`I had the pleasure of working with Abdelrahman Saed at iStoria. From day one, Abdelrahman impressed everyone with his professionalism, creativity, and problem-solving mindset. He was always the one who could turn a complex challenge into a smooth, well-structured solution — and did it all with a positive attitude that made working together genuinely enjoyable.

Beyond his technical skills, Abdelrahman is also a great teammate who supports others and spreads positive energy in the workplace. I'm truly glad to have had the chance to work with him, and I highly recommend him for any future opportunity.`},{name:"Islam Khalil",title:"Software Engineer · Flutter Developer",relationship:"Abdelrahman was senior but didn't manage directly",date:"2024-03-27",initials:"IK",image:"/recommendations/islam-khalil.jpg",linkedin:"https://www.linkedin.com/in/islam-khalil-919278b2/",quote:"I highly recommend Abdelrahman for his exceptional creativity, passion for assisting others, and remarkable proficiency in providing quick programming solutions, specifically in Dart and both Android and iOS app development. His expertise has been invaluable, and I have greatly benefited from his guidance."},{name:"Abdullah Ehab",title:"Senior Flutter Developer at Sigma EMEA",relationship:"Worked with Abdelrahman on the same team",date:"2022-05-30",initials:"AE",image:"/recommendations/abdullah-ehab.jpg",linkedin:"https://www.linkedin.com/in/abdullah-ehab/",quote:"Abdelrahman is an added value to any development team. He is a good team player, very dedicated, high ownership, motivated and focused on the target. Also a quick learner and fast troubleshooter."},{name:"Mohamed Reda",title:"AI Engineer in Healthcare",relationship:"Worked with Abdelrahman on the same team",date:"2020-11-05",initials:"MR",image:"/recommendations/mohamed-reda.jpg",linkedin:"https://www.linkedin.com/in/mohamed-r-870271bb/",quote:"Abdelrahman is one of the fastest learners I've worked with, and I'm absolutely confident that he would be a great fit for any company."}],lh=[{q:"Who is Abdelrahman Saed?",a:"Abdelrahman Saed (also known as binSaed) is a Senior / Lead Mobile Engineer with 7 years building production Flutter apps for iOS and Android that have reached 5M+ users. He currently leads the mobile squad at iStoria."},{q:"Is Abdelrahman Saed available for hire?",a:"Yes — he's open to Senior / Lead Mobile Engineer roles on a full-time, part-time, or contract basis, working remotely worldwide or hybrid / on-site across the Gulf and Egypt. The fastest way to start a conversation is email (me@bnsaed.com) or booking a 20-minute call at calendly.com/bnsaed/meet. He typically replies within 24 hours."},{q:"What is Abdelrahman Saed's current role?",a:"He is the Lead Mobile Engineer at iStoria, an English-language learning app, where he owns mobile architecture, release governance, and delivery for a 50+ module Flutter codebase serving 5M+ users."},{q:"What technologies and skills does Abdelrahman Saed work with?",a:"Flutter and Dart with BLoC/Cubit and Clean Architecture; offline-first data (PowerSync, Drift); CI/CD and release engineering (GitHub Actions, Codemagic, Fastlane, feature flags); monetization (RevenueCat, Stripe, AdMob); analytics and engagement (Adjust, CleverTap, PostHog, GrowthBook); plus native iOS/Android integration (WidgetKit, deep linking, i18n/RTL)."},{q:"What are Abdelrahman Saed's notable projects?",a:"flutter_cached_pdfview, a popular open-source Flutter package for native PDF viewing with caching (134+ GitHub stars, 501+ pub.dev likes, 43k+ downloads); iStoria, a story-based English-learning app with 5M+ downloads; and Stickerawy, a WhatsApp stickers app with 500K+ installs. He publishes packages on pub.dev under bnsaed.com."},{q:"How can I contact Abdelrahman Saed?",a:"Email is the preferred channel: me@bnsaed.com. To schedule a call directly, book a meeting at calendly.com/bnsaed/meet. He is also reachable on GitHub (github.com/binSaed), LinkedIn (linkedin.com/in/binsaed), and Stack Overflow."},{q:"Can AI agents and answer engines use content from this site?",a:"Yes for user-facing answers (ai-input=yes), but not for training AI models (ai-train=no), per the Content-Signal directives in robots.txt. Please attribute the author when quoting."}],Nr=[{id:"palette",label:"Command line accessed",hint:"Open the palette (⌘K)",done:"root shell is yours"},{id:"scan",label:"Full system scan",hint:"Explore every section",done:"every section swept"},{id:"catch",label:"Chased the operative",hint:"Try to catch the avatar",done:"fast, but you tried"},{id:"repos",label:"Repo vault cracked",hint:"Open the repositories",done:"the vault is open"},{id:"theme",label:"Lights flipped",hint:"Switch the theme",done:"ambience rewired"},{id:"konami",label:"Cheat code accepted",hint:"↑↑↓↓←→←→ B A",done:"you know the code"},{id:"secret",label:"Secret command run",hint:"Try an unlisted command",done:"off the menu"},{id:"contact",label:"Contact initiated",hint:"Book a call",done:"channel open — let's talk"}],$r="recon:achievements",ao=["projects","case-studies","about","experience","articles","skills","recommendations","contact"];function ro(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}async function zt(e){if(!(typeof window>"u"||ro()))try{const{default:t}=await le(async()=>{const{default:n}=await import("./confetti.module-BVAT6wYb.js");return{default:n}},[]);t({particleCount:90,spread:75,startVelocity:38,ticks:160,origin:{y:.72},colors:["#06b6d4","#22d3ee","#67e8f9","#a5f3fc","#ffffff"],disableForReducedMotion:!0,...e})}catch{}}const so=h.createContext(null);function dd({children:e}){const[t,n]=h.useState(()=>new Set),[a,r]=h.useState([]),[o,i]=h.useState(()=>new Set),[l,u]=h.useState(!1),[d,p]=h.useState(!1),[f,b]=h.useState(!1);h.useEffect(()=>{try{const S=localStorage.getItem($r);S&&n(new Set(JSON.parse(S)))}catch{}},[]);const c=h.useCallback(S=>{const P=Nr.find(N=>N.id===S);P&&n(N=>{if(N.has(S))return N;const C=new Set(N);C.add(S);try{localStorage.setItem($r,JSON.stringify([...C]))}catch{}return r(z=>[...z,P]),C})},[]),v=h.useCallback(S=>{r(P=>P.filter(N=>N.id!==S))},[]),g=h.useCallback(S=>{i(P=>{if(P.has(S))return P;const N=new Set(P);return N.add(S),N})},[]),w=Math.round(o.size/ao.length*100),E=h.useRef(!1);h.useEffect(()=>{w>=100&&!E.current&&(E.current=!0,c("scan"),zt({particleCount:140,spread:100,origin:{y:.6}}))},[w,c]),h.useEffect(()=>{if(typeof MutationObserver>"u")return;const S=document.documentElement,P=new MutationObserver(()=>c("theme"));return P.observe(S,{attributes:!0,attributeFilter:["class"]}),()=>P.disconnect()},[c]);const k=h.useMemo(()=>({achievements:Nr,unlocked:t,unlock:c,toasts:a,dismissToast:v,scanned:o,markScanned:g,scanPct:w,paletteOpen:l,setPaletteOpen:u,panelOpen:d,setPanelOpen:p,matrixOn:f,setMatrixOn:b}),[t,c,a,v,o,g,w,l,d,f]);return s.jsx(so.Provider,{value:k,children:e})}function Oe(){const e=h.useContext(so);if(!e)throw new Error("useRecon must be used within <ReconProvider>");return e}function ud(){const{markScanned:e}=Oe();h.useEffect(()=>{if(typeof IntersectionObserver>"u")return;const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&i.target.id&&e(i.target.id)},{threshold:.25}),n=()=>{for(const o of ao){const i=document.getElementById(o);i&&t.observe(i)}};n();const a=window.setTimeout(n,600),r=window.setTimeout(n,1800);return()=>{t.disconnect(),window.clearTimeout(a),window.clearTimeout(r)}},[e])}const Ir=[{href:"projects",label:"Projects"},{href:"case-studies",label:"Case Studies"},{href:"about",label:"About"},{href:"experience",label:"Experience"},{href:"articles",label:"Articles"},{href:"skills",label:"Skills"},{href:"recommendations",label:"Praise"},{href:"work-with-me",label:"Hiring"},{href:"contact",label:"Contact"}];function hd({onClick:e}){return s.jsxs("a",{href:"/",onClick:e,className:"group flex items-center gap-2.5 cursor-pointer","aria-label":"Abdelrahman Saed — home",children:[s.jsx("span",{className:"grid h-7 w-7 place-items-center bg-primary text-primary-foreground font-mono text-sm font-bold transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_16px_-2px_hsl(var(--primary)/0.7)]",children:"A"}),s.jsx("span",{className:"font-heading font-bold text-lg leading-none tracking-tight",children:"saed"}),s.jsx("span",{className:"kicker text-muted-foreground/70 hidden sm:inline normal-case tracking-normal",children:"~/portfolio"})]})}function md({theme:e,toggleTheme:t}){const n=id(["projects","case-studies","about","experience","articles","skills","recommendations","work-with-me","contact"]),a=$a(),r=us(),o=fn(),{unlock:i}=Oe(),l=a.pathname==="/",u=p=>{p.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),r("/")},d=p=>{o==null||o.capture("calendly_popup_opened",{source:p}),i("contact"),zt(),Nn(Ue.calendly)};return s.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 glass-effect animate-slide-down",children:s.jsxs("div",{className:"container mx-auto px-6 h-16 flex items-center gap-4",children:[s.jsx(hd,{onClick:u}),s.jsx("span",{className:"hidden xl:block h-5 w-px bg-border","aria-hidden":"true"}),s.jsx("nav",{className:"hidden xl:flex flex-1 items-center gap-x-6",children:Ir.map((p,f)=>{const b=l&&n===p.href;return s.jsxs(sr,{to:`/#${p.href}`,className:U("group relative kicker whitespace-nowrap tracking-[0.12em] transition-colors py-1",b?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[s.jsx("span",{className:U("mr-1.5 text-[0.65rem] transition-colors",b?"text-primary":"text-muted-foreground/40 group-hover:text-primary"),children:String(f+2).padStart(2,"0")}),p.label,s.jsx("span",{className:U("absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300",b?"w-full":"w-0 group-hover:w-full")})]},p.href)})}),s.jsxs("div",{className:"flex items-center gap-1.5 ml-auto xl:ml-0",children:[s.jsxs("button",{type:"button",onClick:()=>d("header_desktop"),className:"hidden xl:flex kicker items-center gap-1.5 border border-primary/50 bg-primary/5 px-3 py-1.5 text-primary transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_16px_-4px_hsl(var(--primary)/0.6)]",children:[s.jsx(Cn,{className:"h-3.5 w-3.5"}),"Book a call"]}),s.jsx("span",{className:"hidden xl:block h-5 w-px bg-border mx-1","aria-hidden":"true"}),s.jsx(He,{variant:"ghost",size:"icon",asChild:!0,children:s.jsx("a",{href:"https://github.com/binSaed",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub profile",title:"GitHub",children:s.jsx(Da,{className:"h-5 w-5"})})}),s.jsx(He,{variant:"ghost",size:"icon",asChild:!0,className:"hidden sm:inline-flex",children:s.jsx("a",{href:"https://www.linkedin.com/in/binsaed/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn profile",title:"LinkedIn",children:s.jsx(La,{className:"h-5 w-5"})})}),s.jsx(He,{variant:"ghost",size:"icon",asChild:!0,className:"hidden sm:inline-flex",children:s.jsx("a",{href:"https://bnsaed.com/CV/cv.pdf",target:"_blank",rel:"noopener noreferrer","aria-label":"Download CV (PDF)",title:"Download CV",children:s.jsx(Oa,{className:"h-5 w-5"})})}),s.jsx(nd,{theme:e,toggleTheme:t}),s.jsxs(ad,{children:[s.jsx(rd,{asChild:!0,children:s.jsx(He,{variant:"ghost",size:"icon",className:"xl:hidden","aria-label":"Open navigation menu",children:s.jsx(xi,{className:"h-5 w-5"})})}),s.jsxs(Qs,{side:"right",className:"w-72 border-l border-border",children:[s.jsxs(Ys,{children:[s.jsx(Xs,{className:"text-left font-heading font-bold text-2xl tracking-tight",children:"~/nav"}),s.jsx(Zs,{className:"sr-only",children:"Site navigation links"})]}),s.jsx("div",{className:"mt-2 mb-4 h-px w-full bg-border"}),s.jsxs("nav",{className:"flex flex-col",children:[Ir.map((p,f)=>{const b=l&&n===p.href;return s.jsx(Cr,{asChild:!0,children:s.jsxs(sr,{to:`/#${p.href}`,className:U("group flex items-baseline gap-3 border-b border-border/60 py-3 transition-colors",b?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[s.jsx("span",{className:U("font-mono text-xs",b?"text-primary":"text-muted-foreground/50 group-hover:text-primary"),children:String(f+2).padStart(2,"0")}),s.jsx("span",{className:"font-heading text-xl",children:p.label})]})},p.href)}),s.jsx(Cr,{asChild:!0,children:s.jsxs("button",{type:"button",onClick:()=>d("header_mobile"),className:"group mt-4 flex items-center justify-center gap-2 border border-primary/40 py-3 text-primary transition-colors hover:border-primary hover:bg-primary/10",children:[s.jsx(Cn,{className:"h-4 w-4"}),s.jsx("span",{className:"font-heading text-xl",children:"Book a call"})]})})]})]})]})]})]})})}function oo(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function pd(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function io(e){var t;return(t=oo(e))==null?void 0:t.data}async function lo(e,t){const n=oo(t),a={Accept:"application/vnd.github+json"};n!=null&&n.etag&&(a["If-None-Match"]=n.etag);const r=await fetch(e,{headers:a,cache:"no-store"});if(r.status===304&&n)return n.data;if(!r.ok){if(n)return n.data;throw new Error(`GitHub request failed: ${r.status}`)}const o=await r.json(),i=r.headers.get("ETag");return i&&pd(t,{etag:i,data:o}),o}const fd="https://api.github.com/users/binSaed",co="gh:profile:binSaed";function gd(){return lo(fd,co)}function bd(){return Hs({queryKey:["github-profile"],queryFn:gd,initialData:()=>io(co),staleTime:1e3*60*5,gcTime:1e3*60*60*24})}function dt({className:e,...t}){return s.jsx("div",{className:U("animate-pulse rounded-md bg-muted",e),...t})}function Or({className:e}){return s.jsxs("svg",{viewBox:"0 0 24 24",className:e,fill:"none",stroke:"currentColor",strokeWidth:"1","aria-hidden":"true",children:[s.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"21"}),s.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),s.jsx("circle",{cx:"12",cy:"12",r:"5"})]})}function yd(){return s.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none","aria-hidden":"true",children:[s.jsx("div",{className:"absolute -top-1/3 left-1/2 -translate-x-1/2 h-[70vh] w-[70vh] rounded-full animate-glow-breathe",style:{background:"radial-gradient(circle, hsl(var(--primary) / 0.1), transparent 62%)"}}),s.jsx("div",{className:"absolute inset-0 bg-ledger opacity-50 animate-grid-drift [mask-image:linear-gradient(180deg,transparent,black_18%,black_70%,transparent)]"}),s.jsx(Or,{className:"absolute top-24 right-8 h-5 w-5 text-primary/30"}),s.jsx(Or,{className:"absolute bottom-10 left-10 h-5 w-5 text-foreground/15 hidden md:block"}),s.jsx("span",{className:"section-numeral absolute -top-10 right-4 text-[26vw] md:text-[15rem] leading-none tracking-tighter",children:"01"}),s.jsx("div",{className:"absolute top-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-primary/50 shadow-[0_0_12px_2px_hsl(var(--primary)/0.4)] animate-float-slow"}),s.jsx("div",{className:"absolute top-[22%] left-1/3 h-1 w-1 rounded-full bg-primary/35 shadow-[0_0_10px_1px_hsl(var(--primary)/0.35)] animate-float-drift-b",style:{animationDelay:"2.5s"}}),s.jsx("div",{className:"absolute bottom-[30%] right-1/3 h-1 w-1 rounded-full bg-primary/30 shadow-[0_0_8px_1px_hsl(var(--primary)/0.3)] animate-float-slow",style:{animationDelay:"6s"}}),s.jsx("div",{className:"absolute top-[62%] right-[16%] h-1.5 w-1.5 rounded-full bg-primary/40 shadow-[0_0_12px_2px_hsl(var(--primary)/0.35)] animate-float-drift-b hidden md:block",style:{animationDelay:"9s"}}),s.jsx("div",{className:"absolute inset-0 opacity-[0.6] [mask-image:linear-gradient(180deg,black,transparent_85%)]",style:{backgroundImage:"repeating-linear-gradient(to bottom, hsl(var(--foreground) / 0.03) 0px, hsl(var(--foreground) / 0.03) 1px, transparent 1px, transparent 4px)"}}),s.jsx("div",{className:"absolute inset-x-0 top-0 h-28 animate-scan-beam",style:{background:"linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.07) 50%, transparent 100%)"}})]})}function wd(e,t,n,a={}){const{stiffness:r=180,damping:o=20,mass:i=1}=a,l=h.useRef({x:0,y:0,vx:0,vy:0}),u=h.useRef({x:e,y:t}),d=h.useRef(null),p=h.useRef(null);h.useEffect(()=>{u.current={x:e,y:t}},[e,t]);const f=h.useCallback(c=>{p.current===null&&(p.current=c);const v=Math.min((c-p.current)/1e3,.064);p.current=c;const g=l.current,w=u.current,E=-r*(g.x-w.x),k=-r*(g.y-w.y),S=-o*g.vx,P=-o*g.vy,N=(E+S)/i,C=(k+P)/i;if(g.vx+=N*v,g.vy+=C*v,g.x+=g.vx*v,g.y+=g.vy*v,Math.abs(g.x-w.x)<.01&&Math.abs(g.y-w.y)<.01&&Math.abs(g.vx)<.01&&Math.abs(g.vy)<.01){g.x=w.x,g.y=w.y,g.vx=0,g.vy=0,n(g.x,g.y),d.current=null,p.current=null;return}n(g.x,g.y),d.current=requestAnimationFrame(f)},[r,o,i,n]),b=h.useCallback(()=>{d.current===null&&(p.current=null,d.current=requestAnimationFrame(f))},[f]);return h.useEffect(()=>{d.current===null&&(p.current=null,d.current=requestAnimationFrame(f))},[e,t,f]),h.useEffect(()=>()=>{d.current!==null&&cancelAnimationFrame(d.current)},[]),{start:b,setPosition:(c,v)=>{l.current.x=c,l.current.y=v}}}const za=Pa,vd=Ca,uo=h.forwardRef(({className:e,...t},n)=>s.jsx(hn,{ref:n,className:U("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));uo.displayName=hn.displayName;const Dn=h.forwardRef(({className:e,children:t,...n},a)=>s.jsxs(vd,{children:[s.jsx(uo,{}),s.jsxs(mn,{ref:a,className:U("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,s.jsxs(ja,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[s.jsx(On,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Dn.displayName=mn.displayName;const Ja=({className:e,...t})=>s.jsx("div",{className:U("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});Ja.displayName="DialogHeader";const Wa=h.forwardRef(({className:e,...t},n)=>s.jsx($n,{ref:n,className:U("text-lg font-semibold leading-none tracking-tight",e),...t}));Wa.displayName=$n.displayName;const Va=h.forwardRef(({className:e,...t},n)=>s.jsx(In,{ref:n,className:U("text-sm text-muted-foreground",e),...t}));Va.displayName=In.displayName;const xd="https://api.github.com/users/binSaed/repos?per_page=100&type=public",ho="gh:repos:binSaed",mo=e=>[...e].sort((t,n)=>n.stargazers_count-t.stargazers_count);async function kd(){const e=await lo(xd,ho);return mo(e)}function Sd(e=!0){return Hs({queryKey:["github-repos"],queryFn:kd,initialData:()=>{const t=io(ho);return t?mo(t):void 0},staleTime:1e3*60*5,gcTime:1e3*60*60*24,enabled:e})}const po=h.forwardRef(({className:e,children:t,...n},a)=>s.jsxs(cs,{ref:a,className:U("relative overflow-hidden",e),...n,children:[s.jsx(Vo,{className:"h-full w-full rounded-[inherit]",children:t}),s.jsx(fo,{}),s.jsx(Ko,{})]}));po.displayName=cs.displayName;const fo=h.forwardRef(({className:e,orientation:t="vertical",...n},a)=>s.jsx(ds,{ref:a,orientation:t,className:U("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...n,children:s.jsx(Qo,{className:"relative flex-1 rounded-full bg-border"})}));fo.displayName=ds.displayName;const Ed={TypeScript:"bg-blue-500",JavaScript:"bg-yellow-400",Python:"bg-green-500",Dart:"bg-cyan-500",Java:"bg-orange-500",Kotlin:"bg-purple-500",Swift:"bg-orange-400",Go:"bg-cyan-400",Rust:"bg-orange-600",Ruby:"bg-red-500",PHP:"bg-indigo-400","C++":"bg-pink-500",C:"bg-gray-500",HTML:"bg-red-400",CSS:"bg-blue-400",Shell:"bg-green-400"};function Td({repo:e}){const t=e.language?Ed[e.language]||"bg-muted-foreground":null,n=fn();return s.jsxs("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"block p-4 rounded-sm border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-200 group",onClick:()=>n==null?void 0:n.capture("repo_clicked",{repo_name:e.name,repo_language:e.language,repo_stars:e.stargazers_count}),children:[s.jsxs("div",{className:"flex items-start justify-between gap-2",children:[s.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors truncate",children:e.name}),s.jsx(fi,{className:"h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"})]}),e.description&&s.jsx("p",{className:"text-sm text-muted-foreground mt-2 line-clamp-2",children:e.description}),s.jsxs("div",{className:"flex items-center gap-4 mt-3 text-sm text-muted-foreground",children:[t&&s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:`w-3 h-3 rounded-full ${t}`}),e.language]}),s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx(Ma,{className:"h-4 w-4"}),e.stargazers_count]}),s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx(yi,{className:"h-4 w-4"}),e.forks_count]})]}),e.topics&&e.topics.length>0&&s.jsxs("div",{className:"flex flex-wrap gap-1.5 mt-3",children:[e.topics.slice(0,4).map(a=>s.jsx("span",{className:"spec-tag",children:a},a)),e.topics.length>4&&s.jsxs("span",{className:"spec-tag",children:["+",e.topics.length-4]})]})]})}function Sn(){return s.jsxs("div",{className:"p-4 rounded-lg border border-border bg-card/50",children:[s.jsx(dt,{className:"h-5 w-32 mb-2"}),s.jsx(dt,{className:"h-4 w-full mb-1"}),s.jsx(dt,{className:"h-4 w-3/4 mb-3"}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(dt,{className:"h-4 w-20"}),s.jsx(dt,{className:"h-4 w-12"}),s.jsx(dt,{className:"h-4 w-12"})]})]})}function _d({open:e,onOpenChange:t}){const{data:n,isLoading:a}=Sd(e);return s.jsx(za,{open:e,onOpenChange:t,children:s.jsxs(Dn,{className:"max-w-2xl max-h-[85vh] p-0",children:[s.jsxs(Ja,{className:"p-6 pb-0",children:[s.jsxs(Wa,{className:"flex items-center gap-2 font-heading text-2xl font-medium tracking-tight",children:[s.jsx(Ma,{className:"h-5 w-5 text-primary"}),"Public Repositories",n&&s.jsxs("span",{className:"text-sm font-normal text-muted-foreground",children:["(",n.length," repos)"]})]}),s.jsx(Va,{className:"sr-only",children:"Browse my public GitHub repositories"})]}),s.jsx(po,{className:"h-[60vh] px-6 pb-6",children:s.jsx("div",{className:"space-y-3 pt-4",children:a?s.jsxs(s.Fragment,{children:[s.jsx(Sn,{}),s.jsx(Sn,{}),s.jsx(Sn,{}),s.jsx(Sn,{})]}):n&&n.length>0?n.map(r=>s.jsx(Td,{repo:r},r.id)):s.jsx("p",{className:"text-center text-muted-foreground py-8",children:"No repositories found"})})})]})})}function Rd({className:e}){return s.jsx("svg",{viewBox:"0 0 24 24",className:e,fill:"currentColor","aria-hidden":"true",children:s.jsx("path",{d:"M17.36 20.2v-5.38h1.79V22H3v-7.18h1.79v5.38h12.57zM6.77 14.32l.37-1.76 8.79 1.85-.37 1.76-8.79-1.85zm1.16-4.21l.76-1.61 8.14 3.78-.76 1.62-8.14-3.79zm2.26-3.99l1.15-1.38 6.9 5.76-1.15 1.37-6.9-5.75zM14.64 2l5.51 7.41-1.45 1.07L13.19 3 14.64 2zM6.59 18.41v-1.8h8.98v1.8H6.59z"})})}const Dr=["You can't catch me! 😆","Nice try! 👍","Too slow! 🏃‍♂️","Almost got me! 😏","Keep trying! 🎯","Haha, missed! 😂"],Lr=["Hi! 👋","Hello! 😊","Hey there! 🙌","Welcome! ✨"],Ad=no.slice(0,3);function jd(){const{data:e,isLoading:t}=bd(),n=fn(),{unlock:a}=Oe(),[r,o]=h.useState({x:0,y:0}),[i,l]=h.useState({x:0,y:0}),[u,d]=h.useState(!1),[p,f]=h.useState(""),b=h.useRef(null),c=h.useRef(0),v=h.useRef(0),[g,w]=h.useState(!1),E=h.useRef(null),k=h.useRef(null),S=h.useRef(0),P=h.useCallback(async()=>{if(k.current)return k.current;if(!E.current)return null;const{default:O}=await le(async()=>{const{default:j}=await import("./confetti.module-BVAT6wYb.js");return{default:j}},[]);return k.current=O.create(E.current,{resize:!0,useWorker:!0}),k.current},[]),N=h.useCallback((O,j)=>{o({x:O,y:j})},[]);wd(i.x,i.y,N,{stiffness:120,damping:14,mass:1}),h.useEffect(()=>()=>{var O;(O=k.current)==null||O.reset(),k.current=null},[]),h.useEffect(()=>{if(u){const O=setTimeout(()=>d(!1),2e3);return()=>clearTimeout(O)}},[u]);const C=h.useCallback(()=>{const O=Date.now();if(O-v.current<2500)return;v.current=O;const j=Dr[Math.floor(Math.random()*Dr.length)];f(j),d(!0),a("catch")},[a]),[z,J]=h.useState(!0);h.useEffect(()=>{if(typeof window<"u"&&typeof window.matchMedia=="function"){const O=window.matchMedia("(hover: hover) and (pointer: fine)");J(O.matches);const j=V=>J(V.matches);return O.addEventListener("change",j),()=>O.removeEventListener("change",j)}},[]);const H=!z,q=h.useCallback(async()=>{const O=Date.now();if(O-S.current<1e3)return;S.current=O;const j=await P();if(!j)return;const V=1e3,oe=Date.now()+V,T={startVelocity:30,spread:360,ticks:60,colors:["#22d3ee","#00bcd4","#06b6d4","#67e8f9","#0e7490","#0b0e13"]},A=(L,$)=>Math.random()*($-L)+L,_=setInterval(()=>{const L=oe-Date.now();if(L<=0)return clearInterval(_);const $=600*(L/V);j({...T,particleCount:$,origin:{x:A(.1,.3),y:Math.random()-.2}}),j({...T,particleCount:$,origin:{x:A(.7,.9),y:Math.random()-.2}})},150)},[P]),te=h.useCallback(()=>{if(q(),d(!1),l({x:0,y:0}),H){const O=Date.now();if(O-v.current<2e3)return;v.current=O;const j=Lr[Math.floor(Math.random()*Lr.length)];f(j),d(!0)}},[H,q]),I=h.useCallback((O,j)=>{if(!b.current)return;const V=b.current.getBoundingClientRect(),oe=V.left+V.width/2,y=V.top+V.height/2,T=O-oe,A=j-y,_=Math.sqrt(T*T+A*A),L=200,$=350;if(_<L&&_>0){c.current+=1,c.current>=3&&(C(),c.current=0);const Y=Math.atan2(A,T),Z=Math.pow((L-_)/L,.6),Ee=-Math.cos(Y)*Z*160,it=-Math.sin(Y)*Z*160,qe=280;l(Wt=>({x:Math.max(-qe,Math.min(qe,Wt.x+Ee*.25)),y:Math.max(-qe,Math.min(qe,Wt.y+it*.25))}))}else _>$&&l(Y=>Math.abs(Y.x)<1&&Math.abs(Y.y)<1?{x:0,y:0}:{x:Y.x*.85,y:Y.y*.85})},[C]),re=h.useCallback(()=>{l({x:0,y:0})},[]),ne=h.useCallback(O=>{O.pointerType!=="touch"&&I(O.clientX,O.clientY)},[I]),he=h.useCallback(O=>{O.pointerType!=="touch"&&re()},[re]),se=h.useCallback(O=>{I(O.clientX,O.clientY)},[I]),ce=h.useCallback(()=>{re()},[re]);return s.jsxs(s.Fragment,{children:[s.jsx("canvas",{ref:E,className:"fixed inset-0 pointer-events-none z-[9999]",style:{width:"100vw",height:"100vh"}}),s.jsxs("section",{className:"relative min-h-screen overflow-hidden hero-gradient flex items-center pt-24 pb-16",onPointerMove:ne,onPointerLeave:he,onMouseMove:se,onMouseLeave:ce,children:[s.jsx(yd,{}),s.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[s.jsxs("div",{className:"opacity-0 animate-fade-in",style:{animationDelay:"0.1s"},children:[s.jsxs("div",{className:"flex items-center justify-between gap-4",children:[s.jsxs("span",{className:"kicker text-muted-foreground normal-case tracking-normal",children:[s.jsx("span",{className:"text-primary",children:"saed@bnsaed"}),s.jsx("span",{className:"text-muted-foreground/70",children:":~$"})," whoami"]}),s.jsxs("span",{className:"kicker text-primary inline-flex items-center gap-2",children:[s.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow"}),"SYS://01"]})]}),s.jsx("div",{className:"mt-3 h-px w-full bg-border origin-left animate-draw-rule"})]}),s.jsxs("div",{className:"mt-10 md:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center",children:[s.jsxs("div",{className:"lg:col-span-7 order-2 lg:order-1",children:[s.jsxs("a",{href:"#work-with-me",className:"group mb-5 inline-flex items-center gap-2.5 border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-emerald-600 dark:text-emerald-400 transition-colors hover:border-emerald-500/70 hover:bg-emerald-500/15 opacity-0 animate-fade-in",style:{animationDelay:"0.15s"},children:[s.jsxs("span",{className:"relative flex h-2 w-2",children:[s.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),s.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]}),s.jsx("span",{className:"kicker normal-case tracking-normal font-medium",children:cd.label}),s.jsx("span",{className:"kicker hidden sm:inline text-emerald-700/60 dark:text-emerald-300/50 normal-case tracking-normal",children:"Full-time · Part-time · Contract"})]}),s.jsxs("p",{className:"kicker text-primary mb-5 opacity-0 animate-fade-in normal-case tracking-normal",style:{animationDelay:"0.2s"},children:[s.jsx("span",{className:"text-muted-foreground/70",children:"$"})," status —"," ",s.jsx("span",{className:"text-foreground/90",children:kn.subtitle})]}),s.jsxs("h1",{className:"font-heading font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.5rem,8vw,5.5rem)] opacity-0 animate-reveal-clip text-balance",style:{animationDelay:"0.25s"},children:["Senior / Lead"," ",s.jsx("span",{className:"text-primary",children:"Mobile Engineer"}),s.jsx("span",{"aria-hidden":"true",className:"ml-2 inline-block h-[0.78em] w-[0.46em] translate-y-[0.04em] bg-primary align-baseline animate-caret-blink"})]}),s.jsx("p",{className:"mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty opacity-0 animate-fade-in",style:{animationDelay:"0.4s"},children:kn.tagline}),s.jsx("div",{className:"mt-8 flex flex-col sm:flex-row sm:items-stretch border-y border-border divide-y sm:divide-y-0 sm:divide-x divide-border opacity-0 animate-fade-in",style:{animationDelay:"0.5s"},children:Ad.map(O=>s.jsxs("div",{className:"py-4 sm:pr-6 sm:pl-6 sm:first:pl-0",children:[s.jsx("div",{className:"font-heading text-2xl md:text-3xl leading-none",children:O.value}),s.jsx("div",{className:"kicker text-muted-foreground mt-2",children:O.label})]},O.label))}),s.jsxs("div",{className:"flex flex-wrap gap-3 mt-9 opacity-0 animate-fade-in",style:{animationDelay:"0.6s"},children:[s.jsx(He,{variant:"hero",size:"lg",asChild:!0,className:"group",children:s.jsxs("a",{href:"#contact",children:["Get in touch",s.jsx(gs,{className:"ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"})]})}),s.jsx(He,{variant:"heroOutline",size:"lg",asChild:!0,className:"group",children:s.jsxs("a",{href:Ue.cv,target:"_blank",rel:"noopener noreferrer",onClick:()=>n==null?void 0:n.capture("cv_downloaded"),children:["Download CV",s.jsx(Oa,{className:"ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"})]})})]}),s.jsxs("div",{className:"flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 opacity-0 animate-fade-in",style:{animationDelay:"0.7s"},children:[s.jsxs("a",{href:Ue.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",title:"GitHub",className:"kicker text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"github"}),children:[s.jsx(Da,{className:"h-4 w-4"})," GitHub"]}),s.jsxs("a",{href:Ue.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",title:"LinkedIn",className:"kicker text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"linkedin"}),children:[s.jsx(La,{className:"h-4 w-4"})," LinkedIn"]}),s.jsxs("a",{href:Ue.pubdev,target:"_blank",rel:"noopener noreferrer","aria-label":"pub.dev packages",title:"pub.dev packages",className:"kicker text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"pubdev"}),children:[s.jsx(Si,{className:"h-4 w-4"})," pub.dev"]}),s.jsxs("a",{href:Ue.stackoverflow,target:"_blank",rel:"noopener noreferrer","aria-label":"Stack Overflow",title:"Stack Overflow",className:"kicker text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"stackoverflow"}),children:[s.jsx(Rd,{className:"h-4 w-4"})," Stack Overflow"]}),t?s.jsx(dt,{className:"h-6 w-36 rounded-sm"}):(e==null?void 0:e.public_repos)!==void 0&&s.jsxs("button",{onClick:()=>{w(!0),a("repos"),n==null||n.capture("repos_modal_opened",{public_repos:e.public_repos})},className:"kicker flex items-center gap-2 border border-border px-2.5 py-1 text-foreground hover:border-primary/50 hover:text-primary transition-colors",children:[s.jsx(Ma,{className:"h-3.5 w-3.5"}),e.public_repos," Public Repos"]})]})]}),s.jsx("div",{className:"lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-scale-in",style:{animationDelay:"0.3s"},children:s.jsxs("div",{ref:b,className:"relative cursor-pointer",onPointerEnter:ne,onPointerMove:ne,onMouseEnter:se,onMouseMove:se,onClick:te,style:{transform:`translate3d(${r.x}px, ${r.y}px, 0)`,willChange:"transform"},children:[s.jsx("div",{className:`absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${H?"top-full mt-4":"-top-12"} ${u?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-2 scale-95 pointer-events-none"}`,children:s.jsx("div",{className:"bg-primary text-primary-foreground px-3 py-1.5 font-mono text-xs whitespace-nowrap shadow-md",children:p})}),s.jsxs("figure",{className:"relative bg-card border border-border p-3 shadow-[var(--shadow-card)] select-none",children:[s.jsx("span",{className:"absolute -top-1.5 -left-1.5 h-3.5 w-3.5 border-t border-l border-primary"}),s.jsx("span",{className:"absolute -top-1.5 -right-1.5 h-3.5 w-3.5 border-t border-r border-primary"}),s.jsx("span",{className:"absolute -bottom-1.5 -left-1.5 h-3.5 w-3.5 border-b border-l border-primary"}),s.jsx("span",{className:"absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 border-b border-r border-primary"}),s.jsx("img",{src:"/avatar-256.webp",alt:kn.name,width:256,height:256,loading:"eager",fetchpriority:"high",decoding:"async",draggable:!1,className:"relative w-56 h-64 md:w-64 md:h-72 object-cover bg-muted"}),s.jsxs("figcaption",{className:"mt-3 flex items-center justify-between",children:[s.jsx("span",{className:"kicker text-muted-foreground normal-case tracking-normal",children:"~/a.saed.png"}),s.jsxs("span",{className:"kicker text-primary inline-flex items-center gap-1.5",children:[s.jsx("span",{className:"h-1 w-1 rounded-full bg-primary"}),kn.location.split(" / ")[0]]})]})]})]})})]})]})]}),s.jsx(_d,{open:g,onOpenChange:w})]})}function Cd(e={}){const{once:t=!0,margin:n="-100px",threshold:a=0}=e,[r,o]=h.useState(!1),[i,l]=h.useState(null),u=d=>{l(d)};return h.useEffect(()=>{if(!i)return;if(typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){o(!0);return}if(typeof window<"u"){const p=i.getBoundingClientRect(),f=window.innerHeight||document.documentElement.clientHeight;if(p.top<f&&p.bottom>0&&(o(!0),t))return}const d=new IntersectionObserver(([p])=>{p.isIntersecting?(o(!0),t&&d.unobserve(i)):t||o(!1)},{rootMargin:n,threshold:a});return d.observe(i),()=>{d.unobserve(i)}},[i,t,n,a]),{ref:u,isInView:r}}function Pd(e){const t=e.match(/^([\d.]+)(.*)$/);if(!t)return{target:null,suffix:e,decimals:0};const n=t[1],a=n.includes(".")?n.split(".")[1].length:0;return{target:parseFloat(n),suffix:t[2],decimals:a}}function Mr(e,t){return e.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}function Nd(){return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function $d({value:e,run:t,durationMs:n=1300,delayMs:a=0}){const{target:r,suffix:o,decimals:i}=Pd(e),[l,u]=h.useState(()=>r===null?e:Mr(0,i)+o),d=h.useRef(!1);return h.useEffect(()=>{if(r===null||!t||d.current)return;if(d.current=!0,Nd()){u(e);return}let p=0,f=0;const b=setTimeout(()=>{const c=v=>{f||(f=v);const g=Math.min(1,(v-f)/n),w=1-Math.pow(1-g,3);u(Mr(r*w,i)+o),g<1?p=requestAnimationFrame(c):u(e)};p=requestAnimationFrame(c)},a);return()=>{clearTimeout(b),cancelAnimationFrame(p)}},[t,r,o,i,e,n,a]),s.jsx(s.Fragment,{children:l})}function Id(){const{ref:e,isInView:t}=Cd({margin:"-80px"});return s.jsx("section",{ref:e,className:"py-14 border-y border-border bg-card/40",children:s.jsxs("div",{className:"container mx-auto px-6",children:[s.jsxs("div",{className:`flex items-center gap-3 mb-8 opacity-0 ${t?"animate-fade-in":""}`,children:[s.jsxs("span",{className:"kicker text-primary normal-case tracking-normal",children:[s.jsx("span",{className:"text-muted-foreground/70",children:"$"})," cat ./metrics.log"]}),s.jsx("span",{className:"h-px flex-1 bg-border"}),s.jsx("span",{className:"kicker text-muted-foreground",children:"2019 — 2026"})]}),s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-l border-border",children:no.map((n,a)=>s.jsxs("div",{className:`group border-r border-b border-border p-5 md:p-6 transition-colors hover:bg-background opacity-0 ${t?"animate-fade-in-up":""}`,style:{animationDelay:`${a*.07}s`},children:[s.jsx("div",{className:"font-heading text-4xl md:text-5xl leading-none tracking-tight tabular-nums transition-colors group-hover:text-primary",children:s.jsx($d,{value:n.value,run:t,delayMs:a*70})}),s.jsx("div",{className:"kicker text-muted-foreground mt-3 leading-snug",children:n.label})]},n.label))})]})})}function Ka(){const[e,t]=h.useState(!1);return h.useEffect(()=>{const n=()=>{const a=window.scrollY,r=window.innerHeight,o=a>r*.9,i=document.getElementById("contact"),l=!!i&&i.getBoundingClientRect().top<r*.85;t(o&&!l)};return n(),window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}},[]),e}function Od(){const[e,t]=h.useState(!1),n=Ka();h.useEffect(()=>{const r=()=>{t(window.scrollY>400)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const a=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.jsx(He,{onClick:a,size:"icon",className:U("fixed right-6 z-50 rounded-sm shadow-[var(--shadow-card)] transition-all duration-300","bg-primary hover:bg-primary/90 text-primary-foreground","hover:-translate-y-0.5",n?"bottom-24":"bottom-6",e?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"),"aria-label":"Back to top",children:s.jsx(mi,{className:"h-5 w-5"})})}function Dd(){const e=fn(),{unlock:t}=Oe(),n=Ka(),a=h.useRef(!1);h.useEffect(()=>{if(!n||a.current)return;if(a.current=!0,typeof window.requestIdleCallback=="function"){const l=window.requestIdleCallback(()=>Yn());return()=>{var u;return(u=window.cancelIdleCallback)==null?void 0:u.call(window,l)}}const i=window.setTimeout(()=>Yn(),0);return()=>window.clearTimeout(i)},[n]);const r=()=>Yn(),o=()=>{e==null||e.capture("calendly_popup_opened",{source:"sticky_bar"}),t("contact"),zt(),Nn(Ue.calendly)};return s.jsx("div",{className:U("fixed inset-x-0 bottom-0 z-40 transition-all duration-500 ease-out","pb-[env(safe-area-inset-bottom)]",n?"translate-y-0 opacity-100":"translate-y-full opacity-0 pointer-events-none"),"aria-hidden":!n,children:s.jsx("div",{className:"glass-effect border-t border-border",children:s.jsxs("div",{className:"container mx-auto flex items-center justify-between gap-4 px-6 py-3",children:[s.jsxs("div",{className:"hidden min-w-0 sm:flex sm:flex-col",children:[s.jsx("span",{className:"kicker text-primary",children:"~/let's talk"}),s.jsx("span",{className:"truncate text-sm text-muted-foreground",children:"Got a project or role in mind?"})]}),s.jsxs("button",{type:"button",onClick:o,onPointerEnter:r,onFocus:r,tabIndex:n?0:-1,"aria-label":"Book a 20-minute call",className:U("group inline-flex min-h-[44px] w-full shrink-0 cursor-pointer items-center justify-center gap-2 sm:w-auto","bg-primary px-5 py-2.5 font-medium text-primary-foreground","transition-transform duration-200 hover:-translate-y-0.5","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",n&&"animate-pulse-glow [animation-duration:2s]"),children:[s.jsx(Cn,{className:"h-4 w-4"}),"Book a call"]})]})})})}function Ld(){const[e,t]=h.useState(0);return h.useEffect(()=>{const n=()=>{const a=document.documentElement.scrollHeight-window.innerHeight;t(a>0?Math.min(100,Math.max(0,window.scrollY/a*100)):0)};return window.addEventListener("scroll",n,{passive:!0}),n(),()=>window.removeEventListener("scroll",n)},[]),s.jsx("div",{className:"fixed top-0 left-0 right-0 z-[60] h-0.5","aria-hidden":"true",children:s.jsx("div",{className:"h-full bg-primary transition-[width] duration-150 ease-out",style:{width:`${e}%`}})})}const Xn=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];function Md(e){const t=h.useRef(0);h.useEffect(()=>{const n=a=>{const r=a.target;if(r&&/^(INPUT|TEXTAREA|SELECT)$/.test(r.tagName))return;const o=a.key.length===1?a.key.toLowerCase():a.key;o===Xn[t.current]?(t.current+=1,t.current===Xn.length&&(t.current=0,e())):t.current=o===Xn[0]?1:0};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e])}var Fr=1,Fd=.9,Ud=.8,Hd=.17,Zn=.1,ea=.999,qd=.9999,Bd=.99,Gd=/[\\\/_+.#"@\[\(\{&]/,zd=/[\\\/_+.#"@\[\(\{&]/g,Jd=/[\s-]/,go=/[\s-]/g;function _a(e,t,n,a,r,o,i){if(o===t.length)return r===e.length?Fr:Bd;var l=`${r},${o}`;if(i[l]!==void 0)return i[l];for(var u=a.charAt(o),d=n.indexOf(u,r),p=0,f,b,c,v;d>=0;)f=_a(e,t,n,a,d+1,o+1,i),f>p&&(d===r?f*=Fr:Gd.test(e.charAt(d-1))?(f*=Ud,c=e.slice(r,d-1).match(zd),c&&r>0&&(f*=Math.pow(ea,c.length))):Jd.test(e.charAt(d-1))?(f*=Fd,v=e.slice(r,d-1).match(go),v&&r>0&&(f*=Math.pow(ea,v.length))):(f*=Hd,r>0&&(f*=Math.pow(ea,d-r))),e.charAt(d)!==t.charAt(o)&&(f*=qd)),(f<Zn&&n.charAt(d-1)===a.charAt(o+1)||a.charAt(o+1)===a.charAt(o)&&n.charAt(d-1)!==a.charAt(o))&&(b=_a(e,t,n,a,d+1,o+2,i),b*Zn>f&&(f=b*Zn)),f>p&&(p=f),d=n.indexOf(u,d+1);return i[l]=p,p}function Ur(e){return e.toLowerCase().replace(go," ")}function Wd(e,t,n){return e=n&&n.length>0?`${e+" "+n.join(" ")}`:e,_a(e,t,Ur(e),Ur(t),0,0,{})}var en='[cmdk-group=""]',ta='[cmdk-group-items=""]',Vd='[cmdk-group-heading=""]',bo='[cmdk-item=""]',Hr=`${bo}:not([aria-disabled="true"])`,Ra="cmdk-item-select",Rt="data-value",Kd=(e,t,n)=>Wd(e,t,n),yo=h.createContext(void 0),gn=()=>h.useContext(yo),wo=h.createContext(void 0),Qa=()=>h.useContext(wo),vo=h.createContext(void 0),xo=h.forwardRef((e,t)=>{let n=At(()=>{var y,T;return{search:"",value:(T=(y=e.value)!=null?y:e.defaultValue)!=null?T:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),a=At(()=>new Set),r=At(()=>new Map),o=At(()=>new Map),i=At(()=>new Set),l=ko(e),{label:u,children:d,value:p,onValueChange:f,filter:b,shouldFilter:c,loop:v,disablePointerSelection:g=!1,vimBindings:w=!0,...E}=e,k=jt(),S=jt(),P=jt(),N=h.useRef(null),C=ou();kt(()=>{if(p!==void 0){let y=p.trim();n.current.value=y,z.emit()}},[p]),kt(()=>{C(6,re)},[]);let z=h.useMemo(()=>({subscribe:y=>(i.current.add(y),()=>i.current.delete(y)),snapshot:()=>n.current,setState:(y,T,A)=>{var _,L,$,Y;if(!Object.is(n.current[y],T)){if(n.current[y]=T,y==="search")I(),q(),C(1,te);else if(y==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let Z=document.getElementById(P);Z?Z.focus():(_=document.getElementById(k))==null||_.focus()}if(C(7,()=>{var Z;n.current.selectedItemId=(Z=ne())==null?void 0:Z.id,z.emit()}),A||C(5,re),((L=l.current)==null?void 0:L.value)!==void 0){let Z=T??"";(Y=($=l.current).onValueChange)==null||Y.call($,Z);return}}z.emit()}},emit:()=>{i.current.forEach(y=>y())}}),[]),J=h.useMemo(()=>({value:(y,T,A)=>{var _;T!==((_=o.current.get(y))==null?void 0:_.value)&&(o.current.set(y,{value:T,keywords:A}),n.current.filtered.items.set(y,H(T,A)),C(2,()=>{q(),z.emit()}))},item:(y,T)=>(a.current.add(y),T&&(r.current.has(T)?r.current.get(T).add(y):r.current.set(T,new Set([y]))),C(3,()=>{I(),q(),n.current.value||te(),z.emit()}),()=>{o.current.delete(y),a.current.delete(y),n.current.filtered.items.delete(y);let A=ne();C(4,()=>{I(),(A==null?void 0:A.getAttribute("id"))===y&&te(),z.emit()})}),group:y=>(r.current.has(y)||r.current.set(y,new Set),()=>{o.current.delete(y),r.current.delete(y)}),filter:()=>l.current.shouldFilter,label:u||e["aria-label"],getDisablePointerSelection:()=>l.current.disablePointerSelection,listId:k,inputId:P,labelId:S,listInnerRef:N}),[]);function H(y,T){var A,_;let L=(_=(A=l.current)==null?void 0:A.filter)!=null?_:Kd;return y?L(y,n.current.search,T):0}function q(){if(!n.current.search||l.current.shouldFilter===!1)return;let y=n.current.filtered.items,T=[];n.current.filtered.groups.forEach(_=>{let L=r.current.get(_),$=0;L.forEach(Y=>{let Z=y.get(Y);$=Math.max(Z,$)}),T.push([_,$])});let A=N.current;he().sort((_,L)=>{var $,Y;let Z=_.getAttribute("id"),Ee=L.getAttribute("id");return(($=y.get(Ee))!=null?$:0)-((Y=y.get(Z))!=null?Y:0)}).forEach(_=>{let L=_.closest(ta);L?L.appendChild(_.parentElement===L?_:_.closest(`${ta} > *`)):A.appendChild(_.parentElement===A?_:_.closest(`${ta} > *`))}),T.sort((_,L)=>L[1]-_[1]).forEach(_=>{var L;let $=(L=N.current)==null?void 0:L.querySelector(`${en}[${Rt}="${encodeURIComponent(_[0])}"]`);$==null||$.parentElement.appendChild($)})}function te(){let y=he().find(A=>A.getAttribute("aria-disabled")!=="true"),T=y==null?void 0:y.getAttribute(Rt);z.setState("value",T||void 0)}function I(){var y,T,A,_;if(!n.current.search||l.current.shouldFilter===!1){n.current.filtered.count=a.current.size;return}n.current.filtered.groups=new Set;let L=0;for(let $ of a.current){let Y=(T=(y=o.current.get($))==null?void 0:y.value)!=null?T:"",Z=(_=(A=o.current.get($))==null?void 0:A.keywords)!=null?_:[],Ee=H(Y,Z);n.current.filtered.items.set($,Ee),Ee>0&&L++}for(let[$,Y]of r.current)for(let Z of Y)if(n.current.filtered.items.get(Z)>0){n.current.filtered.groups.add($);break}n.current.filtered.count=L}function re(){var y,T,A;let _=ne();_&&(((y=_.parentElement)==null?void 0:y.firstChild)===_&&((A=(T=_.closest(en))==null?void 0:T.querySelector(Vd))==null||A.scrollIntoView({block:"nearest"})),_.scrollIntoView({block:"nearest"}))}function ne(){var y;return(y=N.current)==null?void 0:y.querySelector(`${bo}[aria-selected="true"]`)}function he(){var y;return Array.from(((y=N.current)==null?void 0:y.querySelectorAll(Hr))||[])}function se(y){let T=he()[y];T&&z.setState("value",T.getAttribute(Rt))}function ce(y){var T;let A=ne(),_=he(),L=_.findIndex(Y=>Y===A),$=_[L+y];(T=l.current)!=null&&T.loop&&($=L+y<0?_[_.length-1]:L+y===_.length?_[0]:_[L+y]),$&&z.setState("value",$.getAttribute(Rt))}function O(y){let T=ne(),A=T==null?void 0:T.closest(en),_;for(;A&&!_;)A=y>0?ru(A,en):su(A,en),_=A==null?void 0:A.querySelector(Hr);_?z.setState("value",_.getAttribute(Rt)):ce(y)}let j=()=>se(he().length-1),V=y=>{y.preventDefault(),y.metaKey?j():y.altKey?O(1):ce(1)},oe=y=>{y.preventDefault(),y.metaKey?se(0):y.altKey?O(-1):ce(-1)};return h.createElement(ot.div,{ref:t,tabIndex:-1,...E,"cmdk-root":"",onKeyDown:y=>{var T;(T=E.onKeyDown)==null||T.call(E,y);let A=y.nativeEvent.isComposing||y.keyCode===229;if(!(y.defaultPrevented||A))switch(y.key){case"n":case"j":{w&&y.ctrlKey&&V(y);break}case"ArrowDown":{V(y);break}case"p":case"k":{w&&y.ctrlKey&&oe(y);break}case"ArrowUp":{oe(y);break}case"Home":{y.preventDefault(),se(0);break}case"End":{y.preventDefault(),j();break}case"Enter":{y.preventDefault();let _=ne();if(_){let L=new Event(Ra);_.dispatchEvent(L)}}}}},h.createElement("label",{"cmdk-label":"",htmlFor:J.inputId,id:J.labelId,style:lu},u),Ln(e,y=>h.createElement(wo.Provider,{value:z},h.createElement(yo.Provider,{value:J},y))))}),Qd=h.forwardRef((e,t)=>{var n,a;let r=jt(),o=h.useRef(null),i=h.useContext(vo),l=gn(),u=ko(e),d=(a=(n=u.current)==null?void 0:n.forceMount)!=null?a:i==null?void 0:i.forceMount;kt(()=>{if(!d)return l.item(r,i==null?void 0:i.id)},[d]);let p=So(r,o,[e.value,e.children,o],e.keywords),f=Qa(),b=st(C=>C.value&&C.value===p.current),c=st(C=>d||l.filter()===!1?!0:C.search?C.filtered.items.get(r)>0:!0);h.useEffect(()=>{let C=o.current;if(!(!C||e.disabled))return C.addEventListener(Ra,v),()=>C.removeEventListener(Ra,v)},[c,e.onSelect,e.disabled]);function v(){var C,z;g(),(z=(C=u.current).onSelect)==null||z.call(C,p.current)}function g(){f.setState("value",p.current,!0)}if(!c)return null;let{disabled:w,value:E,onSelect:k,forceMount:S,keywords:P,...N}=e;return h.createElement(ot.div,{ref:an(o,t),...N,id:r,"cmdk-item":"",role:"option","aria-disabled":!!w,"aria-selected":!!b,"data-disabled":!!w,"data-selected":!!b,onPointerMove:w||l.getDisablePointerSelection()?void 0:g,onClick:w?void 0:v},e.children)}),Yd=h.forwardRef((e,t)=>{let{heading:n,children:a,forceMount:r,...o}=e,i=jt(),l=h.useRef(null),u=h.useRef(null),d=jt(),p=gn(),f=st(c=>r||p.filter()===!1?!0:c.search?c.filtered.groups.has(i):!0);kt(()=>p.group(i),[]),So(i,l,[e.value,e.heading,u]);let b=h.useMemo(()=>({id:i,forceMount:r}),[r]);return h.createElement(ot.div,{ref:an(l,t),...o,"cmdk-group":"",role:"presentation",hidden:f?void 0:!0},n&&h.createElement("div",{ref:u,"cmdk-group-heading":"","aria-hidden":!0,id:d},n),Ln(e,c=>h.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?d:void 0},h.createElement(vo.Provider,{value:b},c))))}),Xd=h.forwardRef((e,t)=>{let{alwaysRender:n,...a}=e,r=h.useRef(null),o=st(i=>!i.search);return!n&&!o?null:h.createElement(ot.div,{ref:an(r,t),...a,"cmdk-separator":"",role:"separator"})}),Zd=h.forwardRef((e,t)=>{let{onValueChange:n,...a}=e,r=e.value!=null,o=Qa(),i=st(d=>d.search),l=st(d=>d.selectedItemId),u=gn();return h.useEffect(()=>{e.value!=null&&o.setState("search",e.value)},[e.value]),h.createElement(ot.input,{ref:t,...a,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":u.listId,"aria-labelledby":u.labelId,"aria-activedescendant":l,id:u.inputId,type:"text",value:r?e.value:i,onChange:d=>{r||o.setState("search",d.target.value),n==null||n(d.target.value)}})}),eu=h.forwardRef((e,t)=>{let{children:n,label:a="Suggestions",...r}=e,o=h.useRef(null),i=h.useRef(null),l=st(d=>d.selectedItemId),u=gn();return h.useEffect(()=>{if(i.current&&o.current){let d=i.current,p=o.current,f,b=new ResizeObserver(()=>{f=requestAnimationFrame(()=>{let c=d.offsetHeight;p.style.setProperty("--cmdk-list-height",c.toFixed(1)+"px")})});return b.observe(d),()=>{cancelAnimationFrame(f),b.unobserve(d)}}},[]),h.createElement(ot.div,{ref:an(o,t),...r,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":l,"aria-label":a,id:u.listId},Ln(e,d=>h.createElement("div",{ref:an(i,u.listInnerRef),"cmdk-list-sizer":""},d)))}),tu=h.forwardRef((e,t)=>{let{open:n,onOpenChange:a,overlayClassName:r,contentClassName:o,container:i,...l}=e;return h.createElement(Pa,{open:n,onOpenChange:a},h.createElement(Ca,{container:i},h.createElement(hn,{"cmdk-overlay":"",className:r}),h.createElement(mn,{"aria-label":e.label,"cmdk-dialog":"",className:o},h.createElement(xo,{ref:t,...l}))))}),nu=h.forwardRef((e,t)=>st(n=>n.filtered.count===0)?h.createElement(ot.div,{ref:t,...e,"cmdk-empty":"",role:"presentation"}):null),au=h.forwardRef((e,t)=>{let{progress:n,children:a,label:r="Loading...",...o}=e;return h.createElement(ot.div,{ref:t,...o,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":r},Ln(e,i=>h.createElement("div",{"aria-hidden":!0},i)))}),ye=Object.assign(xo,{List:eu,Item:Qd,Input:Zd,Group:Yd,Separator:Xd,Dialog:tu,Empty:nu,Loading:au});function ru(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}function su(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}function ko(e){let t=h.useRef(e);return kt(()=>{t.current=e}),t}var kt=typeof window>"u"?h.useEffect:h.useLayoutEffect;function At(e){let t=h.useRef();return t.current===void 0&&(t.current=e()),t}function st(e){let t=Qa(),n=()=>e(t.snapshot());return h.useSyncExternalStore(t.subscribe,n,n)}function So(e,t,n,a=[]){let r=h.useRef(),o=gn();return kt(()=>{var i;let l=(()=>{var d;for(let p of n){if(typeof p=="string")return p.trim();if(typeof p=="object"&&"current"in p)return p.current?(d=p.current.textContent)==null?void 0:d.trim():r.current}})(),u=a.map(d=>d.trim());o.value(e,l,u),(i=t.current)==null||i.setAttribute(Rt,l),r.current=l}),r}var ou=()=>{let[e,t]=h.useState(),n=At(()=>new Map);return kt(()=>{n.current.forEach(a=>a()),n.current=new Map},[e]),(a,r)=>{n.current.set(a,r),t({})}};function iu(e){let t=e.type;return typeof t=="function"?t(e.props):"render"in t?t.render(e.props):e}function Ln({asChild:e,children:t},n){return e&&h.isValidElement(t)?h.cloneElement(iu(t),{ref:t.ref},n(t.props.children)):n(t)}var lu={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const Eo=h.forwardRef(({className:e,...t},n)=>s.jsx(ye,{ref:n,className:U("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",e),...t}));Eo.displayName=ye.displayName;const cu=({children:e,...t})=>s.jsx(za,{...t,children:s.jsx(Dn,{className:"overflow-hidden p-0 shadow-lg",children:s.jsx(Eo,{className:"[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",children:e})})}),To=h.forwardRef(({className:e,...t},n)=>s.jsxs("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[s.jsx(Ti,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),s.jsx(ye.Input,{ref:n,className:U("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",e),...t})]}));To.displayName=ye.Input.displayName;const _o=h.forwardRef(({className:e,...t},n)=>s.jsx(ye.List,{ref:n,className:U("max-h-[300px] overflow-y-auto overflow-x-hidden",e),...t}));_o.displayName=ye.List.displayName;const Ro=h.forwardRef((e,t)=>s.jsx(ye.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));Ro.displayName=ye.Empty.displayName;const jn=h.forwardRef(({className:e,...t},n)=>s.jsx(ye.Group,{ref:n,className:U("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",e),...t}));jn.displayName=ye.Group.displayName;const du=h.forwardRef(({className:e,...t},n)=>s.jsx(ye.Separator,{ref:n,className:U("-mx-1 h-px bg-border",e),...t}));du.displayName=ye.Separator.displayName;const we=h.forwardRef(({className:e,...t},n)=>s.jsx(ye.Item,{ref:n,className:U("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",e),...t}));we.displayName=ye.Item.displayName;const uu=[{id:"projects",label:"Projects",icon:bi},{id:"case-studies",label:"Case Studies",icon:gi},{id:"about",label:"About",icon:Ri},{id:"experience",label:"Experience",icon:pi},{id:"articles",label:"Articles",icon:ki},{id:"skills",label:"Skills",icon:Ai},{id:"recommendations",label:"Praise",icon:Ei},{id:"contact",label:"Contact",icon:vi}];function hu({onToggleTheme:e}){const{paletteOpen:t,setPaletteOpen:n,setPanelOpen:a,unlock:r,setMatrixOn:o}=Oe(),[i,l]=h.useState("");h.useEffect(()=>{const c=v=>{(v.metaKey||v.ctrlKey)&&v.key.toLowerCase()==="k"&&(v.preventDefault(),n(!t))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[t,n]),h.useEffect(()=>{t&&r("palette")},[t,r]);const u=c=>{n(!1),l(""),window.setTimeout(c,0)},d=c=>u(()=>{var v;return(v=document.getElementById(c))==null?void 0:v.scrollIntoView({behavior:"smooth",block:"start"})}),p=c=>u(()=>window.open(c,"_blank","noopener,noreferrer")),f=c=>u(()=>{r("secret"),c()}),b=i.trim().length>0;return s.jsxs(cu,{open:t,onOpenChange:n,children:[s.jsx(To,{placeholder:"Type a command or search…  (try: matrix, whoami)",value:i,onValueChange:l}),s.jsxs(_o,{children:[s.jsx(Ro,{children:"No matching command. Try “help”."}),s.jsx(jn,{heading:"Navigate",children:uu.map(c=>s.jsxs(we,{value:`goto ${c.label}`,onSelect:()=>d(c.id),children:[s.jsx(c.icon,{className:"mr-2 text-muted-foreground"}),s.jsx("span",{children:c.label})]},c.id))}),s.jsxs(jn,{heading:"Actions",children:[s.jsxs(we,{value:"book a call hire contact",onSelect:()=>u(()=>{r("contact"),zt(),Nn(Ue.calendly)}),children:[s.jsx(Cn,{className:"mr-2 text-primary"}),s.jsx("span",{children:"Book a call"}),s.jsx(gs,{className:"ml-auto h-3.5 w-3.5 opacity-50"})]}),s.jsxs(we,{value:"download cv resume",onSelect:()=>p("https://bnsaed.com/CV/cv.pdf"),children:[s.jsx(Oa,{className:"mr-2 text-muted-foreground"}),s.jsx("span",{children:"Download CV"})]}),s.jsxs(we,{value:"github code",onSelect:()=>p("https://github.com/binSaed"),children:[s.jsx(Da,{className:"mr-2 text-muted-foreground"}),s.jsx("span",{children:"GitHub"})]}),s.jsxs(we,{value:"linkedin",onSelect:()=>p("https://www.linkedin.com/in/binsaed/"),children:[s.jsx(La,{className:"mr-2 text-muted-foreground"}),s.jsx("span",{children:"LinkedIn"})]}),s.jsxs(we,{value:"toggle theme dark light mode",onSelect:()=>u(e),children:[s.jsx(ws,{className:"mr-2 text-muted-foreground"}),s.jsx("span",{children:"Toggle theme"})]}),s.jsxs(we,{value:"secrets missions achievements mission log",onSelect:()=>u(()=>a(!0)),children:[s.jsx(Gn,{className:"mr-2 text-muted-foreground"}),s.jsx("span",{children:"Secrets / mission log"})]})]}),b&&s.jsxs(jn,{heading:"Secrets",children:[s.jsxs(we,{value:"matrix",onSelect:()=>f(()=>o(!0)),children:[s.jsx(Gn,{className:"mr-2 text-primary"}),s.jsx("span",{children:"matrix"}),s.jsx("span",{className:"ml-auto kicker text-muted-foreground/60",children:"enter the rain"})]}),s.jsxs(we,{value:"whoami",onSelect:()=>f(()=>_n("operative",{description:"Abdelrahman Saed — full-stack engineer. You're already in the system."})),children:[s.jsx(zn,{className:"mr-2 text-primary"}),s.jsx("span",{children:"whoami"})]}),s.jsxs(we,{value:"sudo hire",onSelect:()=>f(()=>{r("contact"),zt({particleCount:160,spread:110}),_n("permission granted ✅",{description:"Smart move. Let's talk — opening the calendar."}),window.setTimeout(()=>Nn(Ue.calendly),600)}),children:[s.jsx(Gn,{className:"mr-2 text-primary"}),s.jsx("span",{children:"sudo hire"})]}),s.jsxs(we,{value:"coffee",onSelect:()=>f(()=>_n("☕ brewing…",{description:"Best ideas start over coffee. Book a call?"})),children:[s.jsx(zn,{className:"mr-2 text-primary"}),s.jsx("span",{children:"coffee"})]}),s.jsxs(we,{value:"help",onSelect:()=>u(()=>a(!0)),children:[s.jsx(zn,{className:"mr-2 text-muted-foreground"}),s.jsx("span",{children:"help"})]})]})]})]})}function mu(){const{toasts:e,dismissToast:t}=Oe();return s.jsx("div",{className:"pointer-events-none fixed right-4 top-20 z-[120] flex w-[min(20rem,calc(100vw-2rem))] flex-col gap-2","aria-live":"polite","aria-atomic":"false",children:e.map(n=>s.jsx(pu,{achievement:n,onDone:()=>t(n.id)},n.id))})}function pu({achievement:e,onDone:t}){return h.useEffect(()=>{const n=window.setTimeout(t,4200);return()=>window.clearTimeout(n)},[t]),s.jsxs("div",{role:"status",className:"pointer-events-auto group flex items-start gap-3 border border-primary/50 bg-card/95 p-3 shadow-[0_0_24px_-6px_hsl(var(--primary)/0.5)] backdrop-blur-md animate-slide-down",onClick:t,children:[s.jsx("span",{className:"mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-primary/15 text-primary",children:s.jsx(bs,{className:"h-3.5 w-3.5",strokeWidth:3})}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("div",{className:"kicker text-primary",children:"[ unlocked ]"}),s.jsx("div",{className:"mt-1 font-heading text-sm leading-tight text-foreground",children:e.label})]})]})}function fu(){const{scanPct:e,unlocked:t,achievements:n,setPanelOpen:a}=Oe(),r=Ka();return s.jsxs("button",{type:"button",onClick:()=>a(!0),"aria-label":`Open mission log. System scan ${e}%, ${t.size} of ${n.length} secrets found.`,className:U("group fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-3","border border-border bg-card/85 px-3 py-2 backdrop-blur-md transition-all duration-500 ease-out","hover:border-primary/60 hover:shadow-[0_0_20px_-6px_hsl(var(--primary)/0.5)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",r&&"-translate-y-[4.25rem]"),children:[s.jsxs("div",{className:"flex flex-col items-start gap-1",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"kicker text-muted-foreground/70",children:"scan"}),s.jsxs("span",{className:"kicker tabular-nums text-primary",children:[e,"%"]}),s.jsx("span",{className:"kicker text-muted-foreground/40",children:"·"}),s.jsxs("span",{className:"kicker tabular-nums text-muted-foreground",children:["◈ ",t.size,"/",n.length]})]}),s.jsx("div",{className:"h-1 w-32 overflow-hidden bg-border",children:s.jsx("div",{className:"h-full bg-primary transition-[width] duration-500 ease-out",style:{width:`${e}%`}})})]}),s.jsxs("kbd",{className:"hidden items-center gap-1 border border-border px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground group-hover:border-primary/40 md:inline-flex",children:[s.jsx(ys,{className:"h-3 w-3"}),"K"]})]})}function gu(){const{matrixOn:e,setMatrixOn:t}=Oe(),n=h.useRef(null);return h.useEffect(()=>{if(!e)return;const a=()=>t(!1),r=k=>{k.key==="Escape"&&a()};window.addEventListener("keydown",r);const o=n.current,i=o==null?void 0:o.getContext("2d");if(!o||!i)return()=>window.removeEventListener("keydown",r);const l="アイウエオカキクケコサシスセソ0123456789ABCDEF<>/[]{}=$#".split(""),u=16;let d=0,p=[];const f=()=>{o.width=window.innerWidth,o.height=window.innerHeight,d=Math.floor(o.width/u),p=Array.from({length:d},()=>Math.floor(Math.random()*o.height/u))};f(),window.addEventListener("resize",f);const b="hsl(186 100% 75%)",c="hsl(186 100% 45%)",v=()=>{i.fillStyle="rgba(2, 6, 12, 0.12)",i.fillRect(0,0,o.width,o.height),i.font=`${u}px 'JetBrains Mono', monospace`;for(let k=0;k<p.length;k++){const S=l[Math.floor(Math.random()*l.length)],P=k*u,N=p[k]*u;i.fillStyle=Math.random()>.975?b:c,i.fillText(S,P,N),N>o.height&&Math.random()>.975&&(p[k]=0),p[k]++}},g=ro();let w=0,E=0;if(g)i.fillStyle="rgba(2, 6, 12, 0.92)",i.fillRect(0,0,o.width,o.height),v();else{const k=()=>{v(),w=window.requestAnimationFrame(()=>{E=window.setTimeout(k,45)})};k()}return()=>{window.removeEventListener("keydown",r),window.removeEventListener("resize",f),window.cancelAnimationFrame(w),window.clearTimeout(E)}},[e,t]),e?s.jsxs("div",{className:"fixed inset-0 z-[200] cursor-pointer bg-black/80 animate-fade-in",onClick:()=>t(!1),role:"dialog","aria-label":"Matrix mode easter egg",children:[s.jsx("canvas",{ref:n,className:"h-full w-full"}),s.jsxs("button",{type:"button",onClick:()=>t(!1),"aria-label":"Exit matrix mode",className:"absolute right-4 top-4 flex items-center gap-2 border border-primary/50 bg-card/80 px-3 py-2 text-primary backdrop-blur-md kicker",children:[s.jsx(On,{className:"h-4 w-4"})," exit"]}),s.jsx("p",{className:"pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 kicker text-primary/80",children:"wake up, neo… (click anywhere to exit)"})]}):null}function bu(){const{panelOpen:e,setPanelOpen:t,achievements:n,unlocked:a,setPaletteOpen:r}=Oe(),o=a.size,i=n.length,l=Math.round(o/i*100);return s.jsx(za,{open:e,onOpenChange:t,children:s.jsxs(Dn,{className:"max-w-md gap-0 border-border p-0",children:[s.jsxs(Ja,{className:"space-y-3 border-b border-border p-5 text-left",children:[s.jsxs(Wa,{className:"flex items-baseline gap-2 font-heading text-xl tracking-tight",children:[s.jsx("span",{className:"text-muted-foreground/60",children:"$"}),"cat ./secrets"]}),s.jsx(Va,{className:"sr-only",children:"A log of hidden interactions on the site. Found secrets show their name; locked ones show a hint."}),s.jsxs("div",{className:"space-y-1.5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"kicker text-muted-foreground",children:"missions found"}),s.jsxs("span",{className:"kicker tabular-nums text-primary",children:[o," / ",i]})]}),s.jsx("div",{className:"h-1 w-full overflow-hidden bg-border",children:s.jsx("div",{className:"h-full bg-primary transition-[width] duration-500 ease-out",style:{width:`${l}%`}})})]})]}),s.jsx("ul",{className:"max-h-[55vh] divide-y divide-border/60 overflow-y-auto",children:n.map(u=>s.jsx(wu,{achievement:u,found:a.has(u.id)},u.id))}),s.jsxs("div",{className:"flex items-center justify-between gap-2 border-t border-border p-4",children:[s.jsx("span",{className:"kicker text-muted-foreground/70",children:o===i?"all systems breached ✦":"keep digging…"}),s.jsxs("button",{type:"button",onClick:()=>{t(!1),window.setTimeout(()=>r(!0),0)},className:"inline-flex items-center gap-1.5 border border-border px-2.5 py-1.5 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground",children:[s.jsx(ys,{className:"h-3.5 w-3.5"}),s.jsx("span",{className:"kicker",children:"command line"})]})]})]})})}function yu(e){return e.split(" ").map(t=>"█".repeat(t.length)).join(" ")}function wu({achievement:e,found:t}){return s.jsxs("li",{className:"flex items-start gap-3 px-5 py-3",children:[s.jsx("span",{className:U("mt-0.5 grid h-6 w-6 shrink-0 place-items-center border",t?"border-primary/50 bg-primary/15 text-primary":"border-border bg-muted/30 text-muted-foreground/50"),children:t?s.jsx(bs,{className:"h-3.5 w-3.5",strokeWidth:3}):s.jsx(wi,{className:"h-3 w-3"})}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsx("div",{className:U("font-heading text-sm leading-tight",t?"text-foreground":"select-none tracking-wider text-muted-foreground/40"),"aria-label":t?e.label:"Locked secret",children:t?e.label:yu(e.label)}),s.jsx("div",{className:U("mt-1 font-mono text-xs",t?"text-primary/70":"text-muted-foreground/70"),children:t?e.done:e.hint})]})]})}function vu({onToggleTheme:e}){const{unlock:t,setMatrixOn:n}=Oe();ud();const a=h.useCallback(()=>{t("konami"),zt({particleCount:180,spread:120,origin:{y:.5}}),_n("cheat code accepted",{description:"Entering the matrix…"}),n(!0)},[t,n]);return Md(a),s.jsxs(s.Fragment,{children:[s.jsx(hu,{onToggleTheme:e}),s.jsx(mu,{}),s.jsx(fu,{}),s.jsx(bu,{}),s.jsx(gu,{})]})}function xu(){const[e,t]=h.useState(()=>{if(typeof window<"u"){const a=localStorage.getItem("theme");return a||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}return"dark"});return h.useEffect(()=>{const a=document.documentElement;e==="dark"?a.classList.add("dark"):a.classList.remove("dark"),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{t(a=>a==="dark"?"light":"dark")},setTheme:t}}const ku=h.lazy(()=>le(()=>import("./AboutSection-aWYYveMN.js"),__vite__mapDeps([0,1,2,3])).then(e=>({default:e.AboutSection}))),Su=h.lazy(()=>le(()=>import("./ExperienceSection-BfoPt_5H.js"),__vite__mapDeps([4,1,2,3])).then(e=>({default:e.ExperienceSection}))),Eu=h.lazy(()=>le(()=>import("./ProjectsSection-DipORIPG.js"),__vite__mapDeps([5,1,2,3,6])).then(e=>({default:e.ProjectsSection}))),Tu=h.lazy(()=>le(()=>import("./CaseStudiesSection-BvtHtpgm.js"),__vite__mapDeps([7,1,2,8,3,6])).then(e=>({default:e.CaseStudiesSection}))),_u=h.lazy(()=>le(()=>import("./ArticlesSection-DUkspj1r.js"),__vite__mapDeps([9,1,2,3])).then(e=>({default:e.ArticlesSection}))),Ru=h.lazy(()=>le(()=>import("./SkillsSection-CPTIM4VM.js"),__vite__mapDeps([10,1,2,3,11])).then(e=>({default:e.SkillsSection}))),Au=h.lazy(()=>le(()=>import("./RecommendationsSection-CgQMBTZJ.js"),__vite__mapDeps([12,1,2,3,6])).then(e=>({default:e.RecommendationsSection}))),ju=h.lazy(()=>le(()=>import("./FAQSection-H2Ulo_UW.js"),__vite__mapDeps([13,1,2,3])).then(e=>({default:e.FAQSection}))),Cu=h.lazy(()=>le(()=>import("./AvailabilitySection-Bll1WLQo.js"),__vite__mapDeps([14,1,2,3,15])).then(e=>({default:e.AvailabilitySection}))),Pu=h.lazy(()=>le(()=>import("./ContactSection-B9nqupXU.js"),__vite__mapDeps([16,1,2,3,6])).then(e=>({default:e.ContactSection}))),Nu=h.lazy(()=>le(()=>import("./Footer-DAuEP6o0.js"),__vite__mapDeps([17,1,2])).then(e=>({default:e.Footer}))),$u=()=>{const{theme:e,toggleTheme:t}=xu(),n=$a();return h.useEffect(()=>{const r=setTimeout(()=>{if(n.hash){const o=document.querySelector(n.hash);o&&o.scrollIntoView({behavior:"smooth"})}},300);return()=>clearTimeout(r)},[n.hash,n.key]),s.jsxs("div",{className:"min-h-screen bg-background",children:[s.jsx(Ld,{}),s.jsx(md,{theme:e,toggleTheme:t}),s.jsxs("main",{children:[s.jsx(jd,{}),s.jsx(Id,{}),s.jsxs(h.Suspense,{fallback:s.jsx("div",{className:"min-h-[200px]"}),children:[s.jsx(Eu,{}),s.jsx(Tu,{}),s.jsx(ku,{}),s.jsx(Su,{}),s.jsx(_u,{}),s.jsx(Ru,{}),s.jsx(Au,{}),s.jsx(ju,{}),s.jsx(Cu,{}),s.jsx(Pu,{})]})]}),s.jsx(h.Suspense,{fallback:null,children:s.jsx(Nu,{})}),s.jsx(Od,{}),s.jsx(Dd,{}),s.jsx(vu,{onToggleTheme:t})]})},na="a, button, input, textarea, select, label, [role='button'], .dossier-card";function Iu(){const[e,t]=h.useState(!1),n=h.useRef(null);return h.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const a=window.matchMedia("(hover: hover) and (pointer: fine)"),r=window.matchMedia("(prefers-reduced-motion: reduce)"),o=()=>t(a.matches&&!r.matches);return o(),a.addEventListener("change",o),r.addEventListener("change",o),()=>{a.removeEventListener("change",o),r.removeEventListener("change",o)}},[]),h.useEffect(()=>{const a=n.current;if(!e||!a)return;let r=window.innerWidth/2,o=window.innerHeight/2,i=r,l=o,u=0,d=!1;const p=E=>{r=E.clientX,o=E.clientY,d||(d=!0,a.style.opacity="1")},f=()=>{d=!1,a.style.opacity="0"},b=()=>a.classList.add("is-down"),c=()=>a.classList.remove("is-down"),v=E=>{var k,S;(S=(k=E.target)==null?void 0:k.closest)!=null&&S.call(k,na)&&a.classList.add("is-active")},g=E=>{var P,N;const k=E.target;if(!((P=k==null?void 0:k.closest)!=null&&P.call(k,na)))return;const S=E.relatedTarget;(N=S==null?void 0:S.closest)!=null&&N.call(S,na)||a.classList.remove("is-active")},w=()=>{i+=(r-i)*.18,l+=(o-l)*.18,a.style.transform=`translate3d(${i}px, ${l}px, 0) translate(-50%, -50%)`,u=requestAnimationFrame(w)};return u=requestAnimationFrame(w),window.addEventListener("pointermove",p,{passive:!0}),document.addEventListener("pointerdown",b),document.addEventListener("pointerup",c),document.addEventListener("mouseover",v),document.addEventListener("mouseout",g),document.addEventListener("mouseleave",f),window.addEventListener("blur",f),()=>{cancelAnimationFrame(u),window.removeEventListener("pointermove",p),document.removeEventListener("pointerdown",b),document.removeEventListener("pointerup",c),document.removeEventListener("mouseover",v),document.removeEventListener("mouseout",g),document.removeEventListener("mouseleave",f),window.removeEventListener("blur",f)}},[e]),e?s.jsx("div",{ref:n,className:"dossier-cursor",style:{opacity:0},"aria-hidden":"true"}):null}const on=[{slug:"flutter-cached-pdfview-guide",title:"Building a Cached PDF Viewer in Flutter",description:"Learn how to implement an efficient PDF viewer with caching support for iOS and Android using flutter_cached_pdfview.",date:"2024-01-15",dateModified:"2026-06-27",readTime:"5 min read",tags:["Flutter","Dart","PDF","Mobile"],caseStudySlug:"flutter-cached-pdfview",content:`
# Building a Cached PDF Viewer in Flutter

![flutter_cached_pdfview — native cached PDF viewing on iOS and Android](/article-images/flutter-cached-pdfview-guide-hero.webp)

> **Updated June 2026** — refreshed for \`flutter_cached_pdfview\` ^0.4.4 and modern Flutter 3.x idioms (\`super.key\`, \`const\` constructors, current null-safety).

A cached PDF viewer in Flutter displays remote PDFs while caching each downloaded file on-device, so it opens instantly and works offline on every load after the first. The \`flutter_cached_pdfview\` package builds this for you: it wraps the native \`flutter_pdfview\` renderer with \`flutter_cache_manager\`, exposing URL, asset, and file-path sources plus progress placeholders and error widgets out of the box. To use it, add \`flutter_cached_pdfview: ^0.4.4\` to your \`pubspec.yaml\`, then render \`const PDF().cachedFromUrl(url, ...)\`. The first load downloads and caches the document; every later load is served straight from disk, cutting both wait time and bandwidth. The package targets Android API 20 and above and iOS 11 and above, and is maintained on pub.dev by its original author. The guide below walks through installation, basic usage with modern Flutter 3.x syntax, multiple sources, loading states, and error handling.

PDF viewing is a common requirement in mobile applications. Whether you're building a document reader, an e-book app, or just need to display PDFs from URLs, having an efficient solution is crucial.

## Why does PDF caching matter in a mobile app?

When loading PDFs from remote URLs, you don't want to re-download the file every time the user opens it. This is where caching becomes essential:

- **Faster load times** — cached files load instantly
- **Reduced bandwidth** — save data for your users
- **Offline support** — previously viewed PDFs work offline

## Getting Started

First, add the package to your \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  flutter_cached_pdfview: ^0.4.4
\`\`\`

## Basic Usage

Here's a simple implementation, written with modern Flutter 3.x syntax (\`super.key\` instead of the old \`Key? key\` / \`super(key: key)\` boilerplate):

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:flutter_cached_pdfview/flutter_cached_pdfview.dart';

class PDFViewerPage extends StatelessWidget {
  final String pdfUrl;

  const PDFViewerPage({super.key, required this.pdfUrl});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('PDF Viewer')),
      body: const PDF().cachedFromUrl(
        pdfUrl,
        placeholder: (progress) => Center(
          child: CircularProgressIndicator(value: progress / 100),
        ),
        errorWidget: (error) => const Center(
          child: Text('Error loading PDF'),
        ),
      ),
    );
  }
}
\`\`\`

## Key Features

### 1. Multiple Source Support

Load PDFs from different sources:

- **URL** — remote PDF files with automatic caching
- **Asset** — PDFs bundled with your app
- **File Path** — local PDF files

### 2. Customizable Loading States

Show progress while loading:

\`\`\`dart
placeholder: (progress) => Center(
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      CircularProgressIndicator(value: progress / 100),
      const SizedBox(height: 16),
      Text('\${progress.toStringAsFixed(0)}%'),
    ],
  ),
),
\`\`\`

### 3. Error Handling

Gracefully handle errors:

\`\`\`dart
errorWidget: (error) => Center(
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      const Icon(Icons.error, size: 64, color: Colors.red),
      const SizedBox(height: 16),
      const Text('Failed to load PDF'),
      TextButton(
        onPressed: () { /* retry logic */ },
        child: const Text('Retry'),
      ),
    ],
  ),
),
\`\`\`

## Conclusion

The \`flutter_cached_pdfview\` package provides a simple yet powerful way to display PDFs in your Flutter apps. With built-in caching, you get better performance and a smoother user experience.

Check out the [package on pub.dev](https://pub.dev/packages/flutter_cached_pdfview) for more details.
    `},{slug:"github-actions-branch-protection-guardrails",title:"The repo that rejects my own pushes to master",description:"Two small GitHub Actions that stop accidental direct pushes to master and auto-restore build-breaking files — reversible by design, with an explicit escape hatch.",date:"2026-04-14",readTime:"6 min read",tags:["GitHub Actions","DevOps","CI/CD","Flutter"],content:`
# The repo that rejects my own pushes to master

*Subtitle: Branch protection rules are step one. Two small GitHub Actions turned "please don't do that" into "the repo won't let you."*

*The Self-Driving Repo · Part 1 — Governance*

![Guardrails — a neon shield protecting the master branch](/article-images/github-actions-branch-protection-guardrails-hero.webp)

---

Every team has the unwritten rule: **don't push straight to \`master\`.** And every team has the Tuesday afternoon where someone does it anyway — a fast hotfix, a muscle-memory \`git push\`, a rebase gone sideways — and now production history has a commit that never saw review.

You can write that rule in the README. You can put it in the onboarding doc. People will still break it, including the person who wrote it. (Hi.)

So I stopped relying on discipline and made the repo enforce itself. Two small workflows, under 200 lines combined. One guards the branch. One guards the files that quietly break everyone's build.

Two small GitHub Actions can enforce branch hygiene that documentation alone never will: a \`protect-master\` workflow that auto-reverts any unauthorized direct push to \`master\`, and a \`protect-files\` workflow that restores protected paths — lockfiles, generated native folders, CI config — when a pull request changes them. Both follow one principle, reversible enforcement: instead of blocking a change behind an admin-only red X, they undo the mistake in the open with a readable commit, and both honor an explicit \`--skip-protection\` escape hatch for the times you genuinely mean it. The branch guard recognizes legitimate merges with a regex over commit subjects and prefers \`git revert\` over \`git reset\` so public history is never rewritten. Together, under 200 lines of YAML, they make \`master\` trustworthy for releases and rollbacks, eliminate a whole class of 'why is CI red?' mysteries, and remove the need to nag teammates about process.

## Why do accidental pushes to \`master\` happen — and how do you prevent them?

Two recurring failures, both cheap individually and expensive in aggregate:

1. **Direct pushes to \`master\`.** Not malicious — just human. The cost isn't the one commit; it's the eroded guarantee. Once "\`master\` is always reviewed" stops being true, you can't trust it for releases, bisects, or rollbacks.

2. **The "innocent" file change that detonates a build.** Lockfiles (\`pubspec.lock\`, \`Podfile.lock\`), generated iOS symlinks, IDE settings, CI config. Someone commits their local \`pubspec.lock\` from a different Flutter version, and now CI fails for everyone until somebody figures out *why*. These files shouldn't change in a feature PR, but nothing stops them from doing so.

GitHub's built-in branch protection helps with (1), but it's coarse, it's UI-configured (not in the repo), and it doesn't address (2) at all. I wanted **guardrails as code** — versioned, reviewable, with an explicit escape hatch.

## The idea

Two push/PR-triggered workflows that don't *ask*, they *correct*:

- **\`protect-master\`** runs on every push to \`master\`. If the push isn't an allowed merge, it reverts it automatically.
- **\`protect-files\`** runs on PRs. If a protected path was touched, it restores that file from \`master\` and commits the restoration back to the PR branch.

Both share one principle: **reversible enforcement.** Nothing is blocked with a scary red X you have to beg an admin to override. The bad change is *undone*, in the open, with a commit you can read — and there's a documented way to say "yes, I really mean it."

## How it works

![Flow: a push to master checked against allowed-merge rules, then reverted if unauthorized](/article-images/github-actions-branch-protection-guardrails-diagram.webp)

### Guarding the branch

\`protect-master\` triggers on push and asks one question: *was this an allowed way to land on \`master\`?*

\`\`\`yaml
on:
  push:
    branches: [master]
\`\`\`

Allowed means one of three things: it's a PR merge, the actor is an allow-listed maintainer, or the commit explicitly opts out. The merge check is the interesting part — GitHub writes recognizable commit subjects for merges, squashes, and rebases, so a regex covers all three:

\`\`\`bash
# A normal merge: "Merge pull request #123 from ..."
# A squash/rebase: subject ends with "(#123)"
if echo "$COMMIT_MSG" | grep -qE '^Merge pull request #|\\(#[0-9]+\\)$'; then
  echo "PR merge — allowed."
  exit 0
fi
\`\`\`

If none of the allowances match, the workflow reverts the offending commit and pushes the revert:

\`\`\`bash
git revert HEAD --no-edit
git push
\`\`\`

I chose \`git revert\` over \`git reset --hard\` deliberately. A reset rewrites public history — the exact crime I'm trying to prevent. A revert is additive: the bad commit stays in the log, followed by a commit that undoes it. The audit trail is intact, nobody's local clone gets into a fight with the remote, and the message to the author is clear: *this landed the wrong way; here's the receipt.*

One subtlety worth knowing: \`github.event.head_commit.message\` only exists on push events. The whole workflow leans on that, which is fine — it's push-triggered by design — but it's the kind of thing that bites you if you copy the snippet into a PR-triggered job.

### Guarding the files

\`protect-files\` runs on PRs and watches a specific list of paths — lockfiles, generated native folders, IDE and CI config:

\`\`\`yaml
on:
  pull_request:
    paths:
      - 'pubspec.lock'
      - 'ios/Podfile.lock'
      - 'ios/.symlinks/**'
      - '.vscode/settings.json'
      - '.github/workflows/protect-*.yml'
\`\`\`

When one of those changes in a PR, the job restores the file from \`master\` and commits it back to the PR branch:

\`\`\`bash
git fetch origin master
git checkout origin/master -- "$FILE" || true   # tolerate files absent on master
if ! git diff --cached --quiet; then
  git commit -m "chore: restore protected files from master"
  git push
fi
\`\`\`

Two details make this safe to run on every PR. The \`|| true\` means a path that doesn't exist on \`master\` (a brand-new generated file) doesn't crash the job. And the \`git diff --cached --quiet\` guard means it only commits when something actually changed — no empty commits, no noise on the 95% of PRs that touch nothing protected.

### The escape hatch (this is the important part)

Automated enforcement without an override is a trap. Sometimes you *do* need to bump the lockfile. Sometimes the maintainer really is doing an intentional direct commit. So both workflows honor an opt-out token in the commit message:

\`\`\`bash
if echo "$COMMIT_MSG" | grep -q -- '--skip-protection'; then
  echo "Opt-out flag present — skipping enforcement."
  exit 0
fi
\`\`\`

Want to push a deliberate lockfile change? \`git commit -m "chore: bump pods --skip-protection"\`. The intent is explicit, it's in the history, and it's greppable later when you're auditing who bypassed what. The guardrail has a gate, and the gate has a name.

## What do these GitHub Actions guardrails prevent?

- **\`master\` is trustworthy again.** Every commit on it is either a reviewed merge or an explicitly-flagged exception. Releases and rollbacks rest on that.
- **A class of "why is CI red?" mysteries disappeared.** Protected files can't drift in through a feature PR by accident.
- **Zero meetings about process.** The rule enforces itself, so I stopped being the person who pings people about their pushes. Around 5 fewer "hey can you revert that" messages a month.

## Gotchas & trade-offs

- **An auto-revert can surprise an author.** Mitigation: the revert commit message should say *why* and point to the PR flow. Surprise is a docs problem, not a reason to skip enforcement.
- **The allow-list is a single point of trust.** Keep it tiny and in code review. A long allow-list is just the original problem with extra steps.
- **\`paths:\` filters are easy to under-scope.** New generated artifacts appear over time; the protected list is a living thing, not set-and-forget.
- **This is not a security boundary.** A determined committer with push rights and the \`--skip-protection\` flag can still do anything. It's a guardrail against *accidents and drift*, not an access-control system. Branch protection rules and \`CODEOWNERS\` are the real perimeter; this is the seatbelt.

## Takeaway

The cheapest way to enforce a team norm isn't a doc or a nag — it's a small workflow that *reverses* the mistake and leaves a readable trail, with a named escape hatch for the times you mean it. Reversible beats blocking. Visible beats silent.

Next in the series: PRs that fill in their own context and refuse to merge when the analyzer is unhappy.

## The complete workflow

Here is the full, genericized workflow — drop it into \`.github/workflows/\` and replace the placeholders (\`your-org\`, the \`PROJ\` project key, \`<@DISCORD_USER_ID>\`, the example team, and the secret names) with your own.

### \`.github/workflows/protect-master.yml\`

\`\`\`\`yaml
name: Protect Master Branch

on:
  push:
    branches:
      - master

jobs:
  check-push-permission:
    runs-on: ubuntu-slim
    permissions:
      contents: write
    steps:
      - name: Check pusher authorization
        id: check-auth
        env:
          PUSHER: \${{ github.actor }}
          COMMIT_MSG: \${{ github.event.head_commit.message }}
        run: |
          ALLOWED_USERS=("your-maintainer")

          # Check if it's a PR merge (allow anyone to merge approved PRs)
          # Matches: "Merge pull request #..." (merge commit), "...(#123)" (squash/rebase merge)
          if echo "$COMMIT_MSG" | grep -qE "^Merge pull request #|\\\\(#[0-9]+\\\\)"; then
            echo "✅ PR merge allowed: $PUSHER"
            echo "authorized=true" >> $GITHUB_OUTPUT
            exit 0
          fi

          # Check if pusher is allowed for direct pushes
          for user in "\${ALLOWED_USERS[@]}"; do
            if [ "$PUSHER" = "$user" ]; then
              echo "✅ Direct push by authorized user: $PUSHER"
              echo "authorized=true" >> $GITHUB_OUTPUT
              exit 0
            fi
          done

          # Check for skip flag in commit message
          if echo "$COMMIT_MSG" | grep -q -- "--skip-protection"; then
            echo "✅ Skipping protection: --skip-protection flag found"
            echo "authorized=true" >> $GITHUB_OUTPUT
            exit 0
          fi

          echo "❌ Unauthorized direct push to master by: $PUSHER"
          echo "Only the following users can push directly to master: \${ALLOWED_USERS[*]}"
          echo "Or merge via pull request"
          echo "authorized=false" >> $GITHUB_OUTPUT

      - name: Checkout repository
        if: steps.check-auth.outputs.authorized == 'false'
        uses: actions/checkout@v4
        with:
          fetch-depth: 2
          token: \${{ secrets.GITHUB_TOKEN }}

      - name: Revert unauthorized push
        if: steps.check-auth.outputs.authorized == 'false'
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git revert HEAD --no-edit
          git push origin master

      - name: Fail workflow for unauthorized push
        if: steps.check-auth.outputs.authorized == 'false'
        run: |
          echo "🔄 Unauthorized commit has been reverted"
          echo "Options:"
          echo "  - Only @your-maintainer can push directly to master"
          echo "  - Use --skip-protection flag in commit message"
          echo "  - Merge via pull request (requires approval)"
          exit 1
\`\`\`\`

### \`.github/workflows/protect-files.yml\`

\`\`\`\`yaml
name: Protect Files

on:
  pull_request:
    types: [opened, synchronize]
    paths:
      - '.github/workflows/protect-files.yml'
      - '.github/workflows/protect-master.yml'
      - '.vscode/settings.json'
      - '.vscode/launch.json'
      - '.claude/settings.local.json'
      - 'pubspec.lock'
      - 'ios/Podfile.lock'
      - 'ios/.symlinks/**'
      - 'ios/Flutter/**'
      - 'macos/**'

jobs:
  restore-protected-files:
    if: github.event.pull_request.user.login != 'your-maintainer' && github.actor != 'your-maintainer'
    runs-on: ubuntu-slim
    permissions:
      contents: write
    steps:
      - name: Checkout PR branch
        uses: actions/checkout@v4
        with:
          ref: \${{ github.head_ref }}
          fetch-depth: 0
          token: \${{ secrets.GITHUB_TOKEN }}

      - name: Configure Git
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"

      - name: Check for skip flag in commit message
        id: check-skip
        run: |
          COMMIT_MSG=$(git log -1 --pretty=%B)
          if echo "$COMMIT_MSG" | grep -q -- "--skip-protection"; then
            echo "skip=true" >> $GITHUB_OUTPUT
            echo "Skipping protection: --skip-protection flag found in commit message"
          else
            echo "skip=false" >> $GITHUB_OUTPUT
          fi

      - name: Restore protected files from master
        if: steps.check-skip.outputs.skip != 'true'
        run: |
          git fetch origin master

          # List of protected files/folders
          PROTECTED_FILES=(
            ".github/workflows/protect-files.yml"
            ".github/workflows/protect-master.yml"
            ".vscode/settings.json"
            ".vscode/launch.json"
            ".claude/settings.local.json"
            "pubspec.lock"
            "ios/Podfile.lock"
          )

          PROTECTED_FOLDERS=(
            "ios/.symlinks"
            "ios/Flutter"
            "macos"
          )

          CHANGED=false

          # Restore individual files
          for file in "\${PROTECTED_FILES[@]}"; do
            if git diff --name-only origin/master HEAD | grep -q "^\${file}$"; then
              echo "Restoring $file from master"
              git checkout origin/master -- "$file" 2>/dev/null || true
              CHANGED=true
            fi
          done

          # Restore folders
          for folder in "\${PROTECTED_FOLDERS[@]}"; do
            if git diff --name-only origin/master HEAD | grep -q "^\${folder}/"; then
              echo "Restoring $folder from master"
              git checkout origin/master -- "$folder" 2>/dev/null || true
              CHANGED=true
            fi
          done

          if [ "$CHANGED" = true ]; then
            git add -A
            if ! git diff --cached --quiet; then
              git commit -m "chore: restore protected files from master

              Protected files can only be modified by @your-maintainer or with --skip-protection flag"
              git push
            else
              echo "No changes to commit"
            fi
          else
            echo "No protected files were modified"
          fi
\`\`\`\`
`},{slug:"automate-pull-request-hygiene",title:"PRs that fill in their own paperwork (and a gate that won't let bad code merge)",description:"Separating the chores of code review from the judgment: auto-context on every PR, plus a quality gate that validates translations, runs the analyzer, and cleans up after itself.",date:"2026-04-21",readTime:"6 min read",tags:["GitHub Actions","Developer Experience","CI/CD","Code Review"],content:`
# PRs that fill in their own paperwork (and a gate that won't let bad code merge)

*Subtitle: Half of code review is chores — linking the ticket, assigning yourself, checking the analyzer. So I automated the chores and kept humans for the judgment.*

*The Self-Driving Repo · Part 2 — Developer Experience*

![A pull request auto-filling its own context beside a quality gate](/article-images/automate-pull-request-hygiene-hero.webp)

---

Open a pull request on most teams and you're greeted by a checklist: link the Jira ticket, assign yourself, confirm the analyzer passes, tick the boxes. None of it is hard. All of it is friction. And friction at the *start* of review is the worst kind, because it delays the part that actually matters — a human reading your code.

So I split PR review into two buckets. **Chores** (mechanical, rule-based, boring) get automated. **Judgment** (is this the right change?) stays with people. Two workflows handle the chores: one enriches every new PR with context, the other runs a real quality gate and manages its own labels and comments.

Automating pull request hygiene means splitting code review into two buckets: **chores** (mechanical, rule-based motions) get automated, while **judgment** (is this the right change?) stays with humans. Here's how, using two GitHub Actions workflows built with \`actions/github-script\`. The first, \`pr-automation.yml\`, fires on PR \`opened\`: a regex lifts the ticket ID from the branch name (\`feature/PROJ-123-...\`), writes the Jira link into the PR body, ticks template checkboxes, auto-assigns the author, and adds a \`wip\` label. The second, \`pr-analysis-label.yml\`, runs on \`opened\` and \`synchronize\`: it validates translation JSON with \`python3\`, runs \`flutter analyze\`, then labels, comments, and blocks (exits non-zero) on failure. The guiding principle is **idempotency and self-cleanup**: a \`try/get-create-on-404\` pattern ensures labels exist, a \`concurrency\` group cancels stale runs, and a \`c.user.type === 'Bot'\` filter lets the gate delete its own comment once analysis passes.

## The problem

The opening minutes of every PR were spent on the same low-value motions:

- Copy the ticket ID from the branch name, build the Jira URL, paste it in.
- Assign yourself (or get pinged because you forgot).
- Tick the template checkboxes.
- And on the reviewer's side: pull the branch, run the analyzer, discover the translation file has a trailing-comma syntax error that breaks the build, leave a comment, wait.

Every one of those is deterministic. A human doing them is a human not reading code.

## The idea

Two PR-triggered workflows:

1. **PR automation** — on \`opened\`, derive context from the branch and write it into the PR: the ticket link, the assignee, a \`wip\` label.
2. **The analysis gate** — on \`opened\` and every push, validate translation JSON, run the analyzer, then **label, comment, and block** on failure — and *remove* the label and comment when the next push fixes it.

The theme that makes them feel good to use: **idempotency and self-cleanup.** They never double-post, never leave stale state, and converge to "correct" no matter how many times you push.

## How does a GitHub Actions PR automation and analysis gate work?

![Flow: a PR passing a JSON check and the analyzer, then merge-allowed or blocked with a self-deleting comment](/article-images/automate-pull-request-hygiene-diagram.webp)

### Auto-context on open

The ticket ID already lives in the branch name — \`feature/PROJ-123-add-audio-seek\`. A regex lifts it out, no external lookup needed:

\`\`\`js
const match = branch.match(/([A-Z]+-\\d+)/);
if (match) {
  const jiraId = match[1];                 // PROJ-123
  const url = \`https://your-tracker/browse/\${jiraId}\`;
  // write the link into the PR body, replacing the template placeholder
}
\`\`\`

The same step ticks the "I added the Jira link" checkbox in the template, assigns the author if the PR has no assignee yet, and adds a \`wip\` label. Each action guards itself first — *does it already have an assignee? does the label exist?* — so re-runs are no-ops:

\`\`\`js
// Create the label only if it's missing (404 = doesn't exist yet)
try {
  await github.rest.issues.getLabel({ owner, repo, name: 'wip' });
} catch (e) {
  if (e.status === 404) {
    await github.rest.issues.createLabel({ owner, repo, name: 'wip', color: 'fbca04' });
  }
}
\`\`\`

That try/get-create-on-404 pattern shows up in every one of these workflows. GitHub has no "ensure label exists" call, so you build it yourself — and once you have it, label management stops being something humans think about.

### A gate that validates more than Dart

The analysis workflow runs on open and on every push, scoped to the files that matter:

\`\`\`yaml
on:
  pull_request:
    types: [opened, synchronize]
    paths: ['**.dart', 'pubspec.yaml', 'assets/translations/**.json']

concurrency:
  group: dart-analysis-\${{ github.event.pull_request.number }}
  cancel-in-progress: true
\`\`\`

That \`concurrency\` block matters more than it looks. Push three times in a minute and you don't want three analyzer runs racing to comment on the same PR — you want the latest one to win and the rest to cancel. \`cancel-in-progress: true\` gives you exactly that.

First it validates translation files, because a malformed localization JSON breaks the build in a way the Dart analyzer won't catch:

\`\`\`bash
for f in assets/translations/*.json; do
  python3 -c "import json; json.load(open('$f'))" || { echo "Invalid JSON: $f"; exit 1; }
done
\`\`\`

Then the analyzer, captured rather than fail-fast so we can format the result ourselves:

\`\`\`bash
flutter analyze > analysis-output.txt 2>&1 || true
grep "error •" analysis-output.txt && echo "has_errors=true" >> "$GITHUB_OUTPUT"
\`\`\`

### The part I'm proud of: bidirectional state

Most "lint bot" workflows only know how to complain. This one also knows how to *take it back*. On failure, it adds an \`analysis-failed\` label and posts one comment with the errors tucked inside a collapsible \`<details>\` block (so the PR stays skimmable). On the next push, if analysis passes, it removes the label and **deletes its own comment**:

\`\`\`js
// On pass: find the bot's previous failure comment and remove it
const comments = await github.rest.issues.listComments({ owner, repo, issue_number });
const stale = comments.data.find(c =>
  c.user.type === 'Bot' && c.body.includes('Dart Analysis Failed'));
if (stale) await github.rest.issues.deleteComment({ owner, repo, comment_id: stale.id });
\`\`\`

The \`c.user.type === 'Bot'\` filter is the safety latch: the workflow only ever deletes comments *it* wrote, never a human's. The result is a PR timeline that reflects the *current* state, not a graveyard of "❌ failed / ✅ fixed / ❌ failed again" noise. When the gate is green, it's silent.

And when it's red, it actually blocks — the job exits non-zero so the merge is gated, not just decorated:

\`\`\`bash
[ "$has_errors" = "true" ] && exit 1
\`\`\`

## What does automating PR hygiene actually save you?

- **Reviewers start on the code, not the chores.** Context is already there when they open the PR.
- **A whole category of broken builds never reaches \`master\`** — malformed translations and analyzer errors are caught at the door.
- **The PR timeline stays clean.** Self-deleting comments mean no stale failure noise to scroll past.
- **Around 5 fewer "please link the ticket / please rebase / CI is red because of a comma" round-trips per week.**

## Gotchas & trade-offs

- **Editing the PR body is brittle.** Auto-ticking checkboxes is naive string replacement — if someone reworded the template, the match silently fails. Keep the template text stable, or match loosely.
- **\`paths:\` is a double-edged filter.** Scope it too tightly and a relevant change skips the gate; too loosely and you run the analyzer on doc-only PRs. Revisit it as the repo grows.
- **Bot-comment deletion depends on the bot identity.** If you switch the token the comments are posted under, the \`user.type === 'Bot'\` filter can stop matching your own history. Test after any auth change.
- **Automating chores can hide them.** New teammates never learn *why* the ticket link matters because they never do it manually. Worth a sentence in onboarding so the automation is understood, not just trusted.

## Takeaway

Separate the **chores** of review from the **judgment** of review, and automate only the chores — idempotently, with self-cleanup, so the bot's output always reflects current reality. The win isn't "look, a bot." It's that every human minute on a PR now goes to the one thing humans are uniquely good at: deciding whether the change is right.

Next: making two sources of truth — Jira and GitHub — actually agree with each other.

## The complete workflow

Here is the full, genericized workflow — drop it into \`.github/workflows/\` and replace the placeholders (\`your-org\`, the \`PROJ\` project key, \`<@DISCORD_USER_ID>\`, the example team, and the secret names) with your own.

### \`.github/workflows/pr-automation.yml\`

\`\`\`\`yaml
name: PR Automation

on:
  pull_request:
    types: [opened]

permissions:
  pull-requests: write
  issues: write

jobs:
  automate-pr:
    runs-on: ubuntu-slim
    steps:
      - name: Add Jira Link
        uses: actions/github-script@v7
        with:
          script: |
            const branchName = context.payload.pull_request.head.ref;
            const jiraIdMatch = branchName.match(/([A-Z]+-\\d+)/);

            if (!jiraIdMatch) {
              console.log('No Jira ID found in branch name');
              return;
            }

            const jiraId = jiraIdMatch[1];
            const jiraUrl = \`https://your-org.atlassian.net/browse/\${jiraId}\`;
            let prBody = context.payload.pull_request.body || '';

            console.log(\`Found Jira ID: \${jiraId}\`);

            if (prBody.includes(jiraUrl)) {
              console.log('Jira URL already exists in PR description');
              return;
            }

            const placeholder = '<!---add your Jira link-->';
            const jiraLink = \`**Jira Ticket:** \${jiraUrl}\`;

            if (prBody.includes(placeholder)) {
              prBody = prBody.replace(placeholder, jiraLink);
              console.log('Replaced placeholder with Jira link');
            } else {
              prBody = \`\${jiraLink}\\n\\n\${prBody}\`;
              console.log('Prepended Jira link to PR body');
            }

            // Check the Jira link checkbox
            prBody = prBody.replace(
              '- [ ] I added the Jira link',
              '- [x] I added the Jira link'
            );

            await github.rest.pulls.update({
              owner: context.repo.owner,
              repo: context.repo.repo,
              pull_number: context.payload.pull_request.number,
              body: prBody
            });
            console.log('✅ Added Jira link to PR');

      - name: Auto-assign PR creator
        uses: actions/github-script@v7
        with:
          script: |
            const assignees = context.payload.pull_request.assignees || [];

            if (assignees.length > 0) {
              console.log(\`PR already has assignees: \${assignees.map(a => a.login).join(', ')}\`);
              return;
            }

            const creator = context.payload.pull_request.user.login;
            const prNumber = context.payload.pull_request.number;

            await github.rest.issues.addAssignees({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: prNumber,
              assignees: [creator]
            });
            console.log(\`✅ Assigned \${creator} to PR #\${prNumber}\`);

            // Check the assignee checkbox in PR body
            const { data: pr } = await github.rest.pulls.get({
              owner: context.repo.owner,
              repo: context.repo.repo,
              pull_number: prNumber
            });

            let prBody = pr.body || '';
            const unchecked = '- [ ] The pull request has an assignee (assign yourself)';
            
            if (prBody.includes(unchecked)) {
              prBody = prBody.replace(unchecked, '- [x] The pull request has an assignee (assign yourself)');
              await github.rest.pulls.update({
                owner: context.repo.owner,
                repo: context.repo.repo,
                pull_number: prNumber,
                body: prBody
              });
              console.log('Checked the assignee checkbox');
            }

      - name: Add WIP label
        uses: actions/github-script@v7
        with:
          script: |
            const labels = context.payload.pull_request.labels || [];

            if (labels.length > 0) {
              console.log(\`PR already has labels: \${labels.map(l => l.name).join(', ')}\`);
              return;
            }

            const owner = context.repo.owner;
            const repo = context.repo.repo;
            const labelName = 'wip';

            // Ensure wip label exists
            try {
              await github.rest.issues.getLabel({ owner, repo, name: labelName });
            } catch (e) {
              if (e.status === 404) {
                await github.rest.issues.createLabel({
                  owner,
                  repo,
                  name: labelName,
                  color: 'fbca04',
                  description: 'Work in progress'
                });
                console.log(\`Created '\${labelName}' label\`);
              } else {
                throw e;
              }
            }

            await github.rest.issues.addLabels({
              owner,
              repo,
              issue_number: context.payload.pull_request.number,
              labels: [labelName]
            });
            console.log(\`✅ Added '\${labelName}' label\`);
\`\`\`\`

### \`.github/workflows/pr-analysis-label.yml\`

\`\`\`\`yaml
name: Dart Analysis

on:
  pull_request:
    types: [opened, synchronize]
    paths:
      - '**.dart'
      - 'pubspec.yaml'
      - 'pubspec.lock'
      - 'analysis_options.yaml'
      - 'assets/translations/**.json'
  workflow_dispatch:

concurrency:
  group: dart-analysis-\${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true

permissions:
  pull-requests: write
  issues: write
  contents: read

jobs:
  dart-analysis:
    runs-on: ubuntu-slim
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Validate translation JSON files
        id: validate_json
        run: |
          echo "Validating translation files..."
          FAILED=false

          for file in assets/translations/*.json; do
            if [ -f "$file" ]; then
              echo -n "Checking $file... "
              if python3 -c "import json; json.load(open('$file'))" 2>/dev/null; then
                echo "✓ Valid"
              else
                echo "✗ Invalid JSON"
                python3 -c "import json; json.load(open('$file'))" 2>&1 || true
                FAILED=true
              fi
            fi
          done

          if [ "$FAILED" = true ]; then
            echo ""
            echo "has_errors=true" >> $GITHUB_OUTPUT
            echo "::error::One or more translation files contain invalid JSON"
            exit 1
          fi

          echo "has_errors=false" >> $GITHUB_OUTPUT
          echo ""
          echo "All translation files are valid JSON"

      - name: Set up Flutter
        uses: subosito/flutter-action@v2
        with:
          channel: 'stable'
          flutter-version: '3.44.0'
          cache: true
          cache-key: "flutter-:os:-:channel:-:version:-:arch:"
          cache-path: "\${{ runner.tool_cache }}/flutter/:channel:-:version:-:arch:"

      - name: Get dependencies
        run: flutter pub get

      - name: Run Dart analyze
        id: analyze
        run: |
          flutter analyze > analysis-output.txt 2>&1 || true
          if grep -q "error •" analysis-output.txt; then
            echo "has_errors=true" >> $GITHUB_OUTPUT
            echo "error_details<<EOF" >> $GITHUB_OUTPUT
            grep "error •" analysis-output.txt >> $GITHUB_OUTPUT
            echo "EOF" >> $GITHUB_OUTPUT
          else
            echo "has_errors=false" >> $GITHUB_OUTPUT
          fi

      - name: Add failure label if analysis has errors
        if: steps.analyze.outputs.has_errors == 'true'
        uses: actions/github-script@v7
        env:
          ERROR_DETAILS: \${{ steps.analyze.outputs.error_details }}
        with:
          script: |
            const owner = context.repo.owner;
            const repo = context.repo.repo;
            const labelName = 'analysis-failed';
            const prNumber = context.payload.pull_request.number;

            // Ensure label exists
            async function ensureLabel(name, color, description) {
              try {
                await github.rest.issues.getLabel({ owner, repo, name });
              } catch (e) {
                if (e.status === 404) {
                  await github.rest.issues.createLabel({ owner, repo, name, color, description });
                  console.log(\`Created label: \${name}\`);
                } else {
                  throw e;
                }
              }
            }

            await ensureLabel(labelName, 'd93f0b', 'Dart analysis found issues');

            // Add label
            await github.rest.issues.addLabels({
              owner,
              repo,
              issue_number: prNumber,
              labels: [labelName]
            });
            console.log(\`✅ Added '\${labelName}' label to PR #\${prNumber}\`);

            // Post comment
            const errors = process.env.ERROR_DETAILS;
            const body = \`## ❌ Dart Analysis Failed\\n\\nPlease fix the analysis issues before merging.\\n\\n<details>\\n<summary>Errors found</summary>\\n\\n\\\`\\\`\\\`\\n\${errors}\\n\\\`\\\`\\\`\\n\\n</details>\\n\\n@\${context.payload.pull_request.user.login} \\n <img src="https://your-cdn.example.com/dart-analysis-failed.png" width="66px"/>\`;

            await github.rest.issues.createComment({
              owner,
              repo,
              issue_number: prNumber,
              body: body
            });
            console.log('✅ Added comment to PR');

      - name: Remove failure label if analysis passed
        if: steps.analyze.outputs.has_errors == 'false'
        uses: actions/github-script@v7
        with:
          script: |
            const owner = context.repo.owner;
            const repo = context.repo.repo;
            const labelName = 'analysis-failed';
            const prNumber = context.payload.pull_request.number;

            // Remove label if it exists
            try {
              await github.rest.issues.removeLabel({
                owner,
                repo,
                issue_number: prNumber,
                name: labelName
              });
              console.log(\`✅ Removed '\${labelName}' label from PR #\${prNumber}\`);
            } catch (e) {
              if (e.status === 404) {
                console.log(\`Label '\${labelName}' not found on PR, skipping removal\`);
              } else {
                throw e;
              }
            }

            // Find and remove analysis-failed comment
            const comments = await github.rest.issues.listComments({
              owner,
              repo,
              issue_number: prNumber
            });

            for (const comment of comments.data) {
              if (comment.body.includes('## ❌ Dart Analysis Failed') && comment.user.type === 'Bot') {
                await github.rest.issues.deleteComment({
                  owner,
                  repo,
                  comment_id: comment.id
                });
                console.log(\`✅ Removed analysis-failed comment from PR #\${prNumber}\`);
              }
            }

      - name: Fail job if analysis has errors
        if: steps.analyze.outputs.has_errors == 'true'
        run: exit 1
\`\`\`\`
`},{slug:"sync-jira-with-github-prs",title:"Making Jira and GitHub agree without anyone updating both",description:"A branch-name regex and one REST call mirror Jira status, fix versions, and labels onto every PR — plus a Slow PR flag that surfaces finished work that is not shipping.",date:"2026-04-28",readTime:"7 min read",tags:["GitHub Actions","Jira","CI/CD","Developer Experience"],content:`
# Making Jira and GitHub agree without anyone updating both

*Subtitle: Two tools, two sources of truth, one tax: keeping them in sync by hand. So I built a bridge that mirrors Jira onto every PR — and quietly flags the work that's stuck.*

*The Self-Driving Repo · Part 3 — Integration*

![A glowing bridge syncing an issue board and a pull request](/article-images/sync-jira-with-github-prs-hero.webp)

---

Every team that uses Jira and GitHub pays the same small, constant tax: **keeping the two of them telling the same story.** The ticket is "In Review" but the PR is merged. The PR is open but the ticket is "Done." Which one do you believe? Usually neither, so you go ask the person — and now three people are doing status archaeology instead of building.

I didn't want a heavyweight integration or a paid app. I wanted the PR to *know things about its ticket* automatically: what release it's targeting, what labels it carries, whether it's been marked Done — and, the part that turned out most useful, whether it's been Done for *too long* without merging.

Syncing Jira and GitHub doesn't need a paid app or marketplace integration. Abdelrahman Saed built a single **GitHub Actions** workflow (using \`actions/github-script@v7\`) that mirrors Jira metadata onto every pull request. Here's how it works: a branch-name regex \`/([A-Z]+-\\d+)/\` extracts the ticket ID, then one authenticated **Jira REST API** call (\`/rest/api/3/issue/{id}?fields=status,resolutiondate,labels,fixVersions\`, using Basic auth with an email and API token) fetches the issue. The workflow mirrors fix versions as \`fix:\` labels and Jira labels as \`jira:\` labels, reconciling on every run — adding and removing so stale labels never linger. It also adds a \`tiny PR\` (≤2 files) or \`small PR\` (<10 files) size label from the changed-file count. The sleeper feature is a \`Slow PR\` flag: when a ticket is Done but its resolution date is over three days old and the PR is still open, it surfaces finished work that isn't shipping. A twice-daily weekday cron catches async Jira status changes.

## The problem

The mismatch between issue tracker and code host shows up as three distinct annoyances:

1. **No release visibility on the PR.** Which version is this fix shipping in? That lives in Jira's "Fix Version" field, invisible from GitHub. Reviewers and release managers had to cross-reference.
2. **No size signal.** Is this a two-line fix or a 40-file refactor? You can't triage review effort from the PR list.
3. **The "Done but not merged" black hole.** A ticket gets marked Done in Jira, but the PR sits unmerged for days — blocked on QA, on a dependency, on someone's attention. Nobody notices until the release manager goes looking.

## The idea

One workflow, triggered both on PR events *and* on a schedule, that for each open PR:

- pulls the ticket ID from the branch name,
- calls the Jira REST API for that issue's status, fix versions, labels, and resolution date,
- **mirrors** that metadata onto the PR as prefixed labels,
- adds an automatic **size** label from the file count,
- and raises a **"Slow PR"** flag when a ticket has been Done for more than three days but the PR is still open.

The scheduled trigger is the unlock. PR events only fire when *code* changes — but Jira status changes on its own timeline (someone moves a card hours later). Running twice a day on weekdays catches those async changes without anyone touching the PR.

\`\`\`yaml
on:
  pull_request:
    types: [opened, synchronize, reopened]
  schedule:
    - cron: '0 9 * * 0-4'    # 9:00 — weekdays
    - cron: '0 13 * * 0-4'   # 13:00 — weekdays
\`\`\`

## How does syncing Jira status onto GitHub PRs work?

![Flow: a branch name feeding a regex and a Jira API call, fanning out into fix, jira and Slow-PR labels](/article-images/sync-jira-with-github-prs-diagram.webp)

### Branch name → Jira issue

Same trick as the rest of the system: the ticket ID is encoded in the branch, so a regex is all the "integration" you need to start.

\`\`\`js
const jiraId = branch.match(/([A-Z]+-\\d+)/)?.[1];   // e.g. PROJ-123
\`\`\`

Then a plain authenticated REST call — no SDK, no app install. Jira uses Basic auth with an API token, base64-encoded client-side:

\`\`\`js
const auth = Buffer.from(\`\${email}:\${apiToken}\`).toString('base64');
const res = await fetch(
  \`\${JIRA_BASE}/rest/api/3/issue/\${jiraId}?fields=status,resolutiondate,labels,fixVersions\`,
  { headers: { Authorization: \`Basic \${auth}\`, Accept: 'application/json' } }
);
const issue = await res.json();
\`\`\`

### Mirroring with prefixes

The fix versions and Jira labels become GitHub labels, but namespaced so they're visually distinct and easy to clean up — \`fix:\` for release versions, \`jira:\` for tags:

\`\`\`js
for (const v of issue.fields.fixVersions) {
  await ensureLabel(\`fix:\${v.name}\`);          // fix:1.42.0
  await addLabel(\`fix:\${v.name}\`);
}
\`\`\`

The non-obvious half is **removal**. A bridge that only adds labels rots fast — drop a fix version in Jira and the stale \`fix:\` label lingers on the PR forever. So the sync is reconciling, not append-only: it computes the set of \`fix:\`/\`jira:\` labels the PR *should* have from Jira, and removes any prefixed label that's no longer backed by Jira. Add *and* subtract, every run.

### Size labels from the file count

Cheap, and genuinely useful for triage. Pull the file list, bucket it:

\`\`\`js
const files = await github.paginate(github.rest.pulls.listFiles, { owner, repo, pull_number });
const n = files.length;
if (n <= 2)      setExclusive('tiny PR');     // a glance
else if (n < 10) setExclusive('small PR');    // a coffee
else             clearSizeLabels();            // block out real time
\`\`\`

\`setExclusive\` adds the right bucket and removes the other, so a PR is never both "tiny" and "small" at once — the labels stay mutually exclusive as the PR grows.

### The "Slow PR" flag (the sleeper feature)

This is the one people actually thanked me for. When Jira says the ticket is Done, the workflow checks *how long* it's been done. If the resolution date is more than three days old and the PR is still open, it flags it:

\`\`\`js
const DONE_GRACE_MS = 3 * 24 * 60 * 60 * 1000;
if (status === 'done') {
  addLabel('Done');
  removeLabel('wip');
  const age = Date.now() - new Date(resolutionDate).getTime();
  if (age > DONE_GRACE_MS) addLabel('Slow PR');   // done, but stuck
}
\`\`\`

A "Slow PR" label is a tiny thing that surfaces a real, expensive problem: **work that's finished but not shipping.** That's value sitting on the shelf — the most wasteful state in the whole pipeline, and the easiest to miss because everyone *thinks* it's done. Now it's visible on the board without anyone running a report.

When the ticket flips back from Done (reopened, more work), the same logic removes the \`Done\` and \`Slow PR\` labels. Reconcile, don't accumulate.

## What do you gain from syncing Jira with GitHub PRs?

- **Release scope is visible on every PR.** \`fix:1.42.0\` right on the card — no Jira spelunking to answer "what's in the next build?"
- **Reviewers triage by size at a glance.** "tiny PR" gets a quick pass; a 40-file change gets scheduled.
- **Stuck-but-done work stops hiding.** The "Slow PR" flag turned an invisible cost into a visible one we could actually clear.
- **Nobody updates two tools by hand.** The PR reflects Jira within hours, automatically — roughly 5 fewer "is this merged yet?" pings a week.

## Gotchas & trade-offs

- **It's eventually consistent, not real-time.** A status change shows up at the next scheduled run, not instantly. For this use case that's fine; if you need instant, you need Jira webhooks, which is a bigger build.
- **Naive PR-body edits are fragile.** Auto-ticking a "quality approved" checkbox by string replacement breaks silently if the template wording changes. Keep templates stable.
- **No pagination cap on the PR loop.** Iterate every open PR each run and a repo with hundreds of open PRs will eventually brush the job timeout. Batch or shard before you get there.
- **Two-way "sync" is really one-way mirroring.** This reflects Jira onto GitHub, not the reverse. True bidirectional sync invites loops and conflicts — I deliberately didn't build it. Decide your source of truth and mirror *from* it.
- **Token scope is a real risk.** A Jira API token in CI reads your tracker. Scope it minimally and store it as a secret, never in the workflow.

## Takeaway

You don't need a marketplace integration to make two tools agree — a branch-name regex, one REST call, and a reconciling label sync get you most of the value. And while you're bridging, look for the *flag* that exposes a hidden cost. The labels were nice. "Slow PR" — surfacing finished work that wasn't shipping — was the actual win.

Next: what happens to all those open PRs the moment something lands on \`master\`.

## The complete workflow

Here is the full, genericized workflow — drop it into \`.github/workflows/\` and replace the placeholders (\`your-org\`, the \`PROJ\` project key, \`<@DISCORD_USER_ID>\`, the example team, and the secret names) with your own.

### \`.github/workflows/jira-status-labels.yml\`

\`\`\`\`yaml
name: PR Labels

on:
  pull_request:
    types: [opened, synchronize, reopened]
  schedule:
    - cron: '0 13 * * 0-4' # At 1 PM UTC, Sunday-Thursday
    - cron: '0 9 * * 0-4' # At 9 AM UTC, Sunday-Thursday
  workflow_dispatch:

permissions:
  pull-requests: write
  issues: write

jobs:
  manage-pr-labels:
    runs-on: ubuntu-slim
    steps:
      - name: Get PRs to process
        id: get_prs
        uses: actions/github-script@v7
        with:
          script: |
            const owner = context.repo.owner;
            const repo = context.repo.repo;

            let prs = [];

            if (context.eventName === 'pull_request') {
              // Single PR from event
              prs = [context.payload.pull_request];
            } else {
              // Scheduled run or manual dispatch - get all open PRs
              prs = await github.paginate(github.rest.pulls.list, {
                owner,
                repo,
                state: 'open',
                per_page: 100
              });
            }

            core.setOutput('prs', JSON.stringify(prs.map(pr => ({
              number: pr.number,
              branch: pr.head.ref,
              labels: pr.labels.map(l => l.name)
            }))));

      - name: Apply PR labels
        uses: actions/github-script@v7
        env:
          JIRA_BASE_URL: https://your-org.atlassian.net
          JIRA_EMAIL: \${{ secrets.JIRA_EMAIL }}
          JIRA_API_TOKEN: \${{ secrets.JIRA_API_TOKEN }}
        with:
          script: |
            const prs = JSON.parse('\${{ steps.get_prs.outputs.prs }}');
            const owner = context.repo.owner;
            const repo = context.repo.repo;

            const DONE_LABEL = 'Done';
            const SLOW_PR_LABEL = 'Slow PR';
            const TINY_PR_LABEL = 'tiny PR';
            const SMALL_PR_LABEL = 'small PR';
            const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;
            const TINY_FILE_THRESHOLD = 2;
            const FILE_THRESHOLD = 10;

            // Ensure labels exist
            async function ensureLabel(name, color, description) {
              try {
                await github.rest.issues.getLabel({ owner, repo, name });
              } catch (e) {
                if (e.status === 404) {
                  await github.rest.issues.createLabel({ owner, repo, name, color, description });
                  console.log(\`Created label: \${name}\`);
                } else {
                  throw e;
                }
              }
            }

            const WIP_LABEL = 'wip';

            await ensureLabel(DONE_LABEL, '0e8a16', 'Jira task is marked as Done');
            await ensureLabel(SLOW_PR_LABEL, 'fbca04', 'Jira task was Done more than 3 days ago');
            await ensureLabel(TINY_PR_LABEL, '00d4aa', 'PR has 1-2 changed files');
            await ensureLabel(SMALL_PR_LABEL, '0e8a16', 'PR has fewer than 10 changed files');

            for (const pr of prs) {
              const branchName = pr.branch;
              const prNumber = pr.number;
              const currentLabels = pr.labels;

              // --- Small PR Label Logic ---
              // Get the list of files changed in this PR
              const { data: files } = await github.rest.pulls.listFiles({
                owner,
                repo,
                pull_number: prNumber,
                per_page: 100
              });

              const fileCount = files.length;
              console.log(\`PR #\${prNumber}: \${fileCount} file(s) changed\`);

              const hasTinyPRLabel = currentLabels.includes(TINY_PR_LABEL);
              const hasSmallPRLabel = currentLabels.includes(SMALL_PR_LABEL);

              const isTiny = fileCount <= TINY_FILE_THRESHOLD;
              const isSmall = !isTiny && fileCount < FILE_THRESHOLD;

              async function removeLabelSafe(label) {
                try {
                  await github.rest.issues.removeLabel({ owner, repo, issue_number: prNumber, name: label });
                  console.log(\`PR #\${prNumber}: Removed "\${label}" label\`);
                } catch (e) {
                  if (e.status !== 404) throw e;
                }
              }

              if (isTiny) {
                if (!hasTinyPRLabel) {
                  await github.rest.issues.addLabels({ owner, repo, issue_number: prNumber, labels: [TINY_PR_LABEL] });
                  console.log(\`PR #\${prNumber}: Added "\${TINY_PR_LABEL}" label (\${fileCount} file(s))\`);
                }
                if (hasSmallPRLabel) await removeLabelSafe(SMALL_PR_LABEL);
              } else if (isSmall) {
                if (!hasSmallPRLabel) {
                  await github.rest.issues.addLabels({ owner, repo, issue_number: prNumber, labels: [SMALL_PR_LABEL] });
                  console.log(\`PR #\${prNumber}: Added "\${SMALL_PR_LABEL}" label (\${fileCount} files)\`);
                }
                if (hasTinyPRLabel) await removeLabelSafe(TINY_PR_LABEL);
              } else {
                if (hasTinyPRLabel) await removeLabelSafe(TINY_PR_LABEL);
                if (hasSmallPRLabel) await removeLabelSafe(SMALL_PR_LABEL);
              }

              // --- Jira Status Label Logic ---
              // Extract Jira ID from branch name (e.g., PROJ-13451)
              const jiraIdMatch = branchName.match(/([A-Z]+-\\d+)/);
              if (!jiraIdMatch) {
                console.log(\`PR #\${prNumber}: No Jira ID found in branch "\${branchName}"\`);
                continue;
              }

              const jiraId = jiraIdMatch[1];
              console.log(\`PR #\${prNumber}: Found Jira ID \${jiraId}\`);

              // Call Jira API to get issue details
              const jiraUrl = \`\${process.env.JIRA_BASE_URL}/rest/api/3/issue/\${jiraId}?fields=status,resolutiondate,labels,fixVersions\`;
              const auth = Buffer.from(\`\${process.env.JIRA_EMAIL}:\${process.env.JIRA_API_TOKEN}\`).toString('base64');

              let jiraData;
              try {
                const response = await fetch(jiraUrl, {
                  headers: {
                    'Authorization': \`Basic \${auth}\`,
                    'Accept': 'application/json'
                  }
                });

                if (!response.ok) {
                  console.log(\`PR #\${prNumber}: Failed to fetch Jira issue \${jiraId} (status \${response.status})\`);
                  continue;
                }

                jiraData = await response.json();
              } catch (e) {
                console.log(\`PR #\${prNumber}: Error fetching Jira issue \${jiraId}: \${e.message}\`);
                continue;
              }

              const status = jiraData.fields?.status?.name;
              const resolutionDate = jiraData.fields?.resolutiondate;
              const jiraLabels = jiraData.fields?.labels || [];
              const fixVersions = (jiraData.fields?.fixVersions || []).map(v => v.name);

              console.log(\`PR #\${prNumber}: Jira status = "\${status}", resolutionDate = "\${resolutionDate}", labels = \${JSON.stringify(jiraLabels)}, fixVersions = \${JSON.stringify(fixVersions)}\`);

              // Sync Jira Fix Versions to PR (prefixed with "fix:" to distinguish from other labels)
              const FIX_VERSION_PREFIX = 'fix:';
              for (const version of fixVersions) {
                const ghLabelName = \`\${FIX_VERSION_PREFIX}\${version}\`;
                
                // Ensure the label exists in GitHub
                await ensureLabel(ghLabelName, 'e6e6fa', \`Jira Fix Version: \${version}\`);
                
                // Add label to PR if not already present
                if (!currentLabels.includes(ghLabelName)) {
                  await github.rest.issues.addLabels({
                    owner,
                    repo,
                    issue_number: prNumber,
                    labels: [ghLabelName]
                  });
                  console.log(\`PR #\${prNumber}: Added "\${ghLabelName}" label from Jira Fix Version\`);
                }
              }

              // Remove fix: labels that are no longer on the Jira issue
              const currentFixLabels = currentLabels.filter(l => l.startsWith(FIX_VERSION_PREFIX));
              const expectedFixLabels = fixVersions.map(v => \`\${FIX_VERSION_PREFIX}\${v}\`);
              for (const currentFixLabel of currentFixLabels) {
                if (!expectedFixLabels.includes(currentFixLabel)) {
                  try {
                    await github.rest.issues.removeLabel({
                      owner,
                      repo,
                      issue_number: prNumber,
                      name: currentFixLabel
                    });
                    console.log(\`PR #\${prNumber}: Removed "\${currentFixLabel}" label (no longer in Jira Fix Versions)\`);
                  } catch (e) {
                    if (e.status !== 404) throw e;
                  }
                }
              }

              // Sync Jira labels to PR (prefixed with "jira:" to distinguish from other labels)
              const JIRA_LABEL_PREFIX = 'jira:';
              for (const jiraLabel of jiraLabels) {
                const ghLabelName = \`\${JIRA_LABEL_PREFIX}\${jiraLabel}\`;
                
                // Ensure the label exists in GitHub
                await ensureLabel(ghLabelName, 'c5def5', \`Jira label: \${jiraLabel}\`);
                
                // Add label to PR if not already present
                if (!currentLabels.includes(ghLabelName)) {
                  await github.rest.issues.addLabels({
                    owner,
                    repo,
                    issue_number: prNumber,
                    labels: [ghLabelName]
                  });
                  console.log(\`PR #\${prNumber}: Added "\${ghLabelName}" label from Jira\`);
                }
              }

              // Remove jira: labels that are no longer on the Jira issue
              const currentJiraLabels = currentLabels.filter(l => l.startsWith(JIRA_LABEL_PREFIX));
              const expectedJiraLabels = jiraLabels.map(l => \`\${JIRA_LABEL_PREFIX}\${l}\`);
              for (const currentJiraLabel of currentJiraLabels) {
                if (!expectedJiraLabels.includes(currentJiraLabel)) {
                  try {
                    await github.rest.issues.removeLabel({
                      owner,
                      repo,
                      issue_number: prNumber,
                      name: currentJiraLabel
                    });
                    console.log(\`PR #\${prNumber}: Removed "\${currentJiraLabel}" label (no longer in Jira)\`);
                  } catch (e) {
                    if (e.status !== 404) throw e;
                  }
                }
              }

              const isDone = status?.toLowerCase() === 'done';
              const hasDoneLabel = currentLabels.includes(DONE_LABEL);
              const hasSlowPRLabel = currentLabels.includes(SLOW_PR_LABEL);
              const hasWipLabel = currentLabels.includes(WIP_LABEL);

              if (isDone) {
                // Add "Done" label if not present
                if (!hasDoneLabel) {
                  await github.rest.issues.addLabels({
                    owner,
                    repo,
                    issue_number: prNumber,
                    labels: [DONE_LABEL]
                  });
                  console.log(\`PR #\${prNumber}: Added "\${DONE_LABEL}" label\`);
                }

                // Update PR body to check the quality team checkbox
                const { data: fullPr } = await github.rest.pulls.get({
                  owner,
                  repo,
                  pull_number: prNumber
                });

                let prBody = fullPr.body || '';
                const qualityCheckboxUnchecked = '- [ ] The \`quality\` team approved at least 1 platform *\`(Android, IOS)\`*.';
                const qualityCheckboxChecked = '- [x] The \`quality\` team approved at least 1 platform *\`(Android, IOS)\`*.';

                if (prBody.includes(qualityCheckboxUnchecked)) {
                  prBody = prBody.replace(qualityCheckboxUnchecked, qualityCheckboxChecked);
                  await github.rest.pulls.update({
                    owner,
                    repo,
                    pull_number: prNumber,
                    body: prBody
                  });
                  console.log(\`PR #\${prNumber}: Checked quality team approval checkbox\`);
                }

                // Remove "wip" label if present
                if (hasWipLabel) {
                  try {
                    await github.rest.issues.removeLabel({
                      owner,
                      repo,
                      issue_number: prNumber,
                      name: WIP_LABEL
                    });
                    console.log(\`PR #\${prNumber}: Removed "\${WIP_LABEL}" label (task is Done)\`);
                  } catch (e) {
                    if (e.status !== 404) throw e;
                  }
                }

                // Check if done for more than 3 days
                if (resolutionDate) {
                  const resolvedAt = new Date(resolutionDate);
                  const now = new Date();
                  const msSinceDone = now - resolvedAt;
                  const daysSinceDone = msSinceDone / (24 * 60 * 60 * 1000);

                  if (msSinceDone > THREE_DAYS_MS) {
                    if (!hasSlowPRLabel) {
                      await github.rest.issues.addLabels({
                        owner,
                        repo,
                        issue_number: prNumber,
                        labels: [SLOW_PR_LABEL]
                      });
                      console.log(\`PR #\${prNumber}: Added "\${SLOW_PR_LABEL}" label (resolved \${Math.floor(daysSinceDone)} days ago)\`);
                    }
                  }
                }
              } else {
                // Remove labels if task is no longer Done
                if (hasDoneLabel) {
                  try {
                    await github.rest.issues.removeLabel({
                      owner,
                      repo,
                      issue_number: prNumber,
                      name: DONE_LABEL
                    });
                    console.log(\`PR #\${prNumber}: Removed "\${DONE_LABEL}" label (status changed)\`);
                  } catch (e) {
                    if (e.status !== 404) throw e;
                  }
                }

                if (hasSlowPRLabel) {
                  try {
                    await github.rest.issues.removeLabel({
                      owner,
                      repo,
                      issue_number: prNumber,
                      name: SLOW_PR_LABEL
                    });
                    console.log(\`PR #\${prNumber}: Removed "\${SLOW_PR_LABEL}" label (status changed)\`);
                  } catch (e) {
                    if (e.status !== 404) throw e;
                  }
                }
              }
            }

            console.log('✅ PR labels check completed');
\`\`\`\`
`},{slug:"auto-rebase-and-detect-merge-conflicts",title:"Every merge to master quietly breaks other PRs. So I built a radar for it.",description:"A two-workflow radar that refreshes every open PR on each merge to master, treats mergeability as eventually consistent, and routes conflict alerts to the right person.",date:"2026-05-05",readTime:"6 min read",tags:["GitHub Actions","Git","CI/CD","DevOps"],content:`
# Every merge to master quietly breaks other PRs. So I built a radar for it.

*Subtitle: A merge to master is a tiny earthquake that nobody feels until later. Two workflows detect the damage immediately — and tell the right people.*

*The Self-Driving Repo · Part 4 — Conflict Management*

![A radar sweep over branch lines with conflicts pulsing red](/article-images/auto-rebase-and-detect-merge-conflicts-hero.webp)

---

Here's a failure mode so normal you've stopped noticing it: you merge a PR to \`master\`, and in that instant some number of *other* open PRs become un-mergeable. They were fine a second ago. Now they conflict. But nobody knows yet — the authors are working on something else, and they'll find out hours or days later when they try to merge and GitHub says no.

Multiply that by a busy \`master\` and a dozen open PRs and you get a slow, invisible tax: branches drifting out of sync, conflicts discovered at the worst possible moment (merge time), and a steady drip of "can you rebase?" comments.

I wanted the opposite: the *moment* \`master\` moves, every open PR gets refreshed against it, and anything that conflicts gets flagged and announced — immediately, while the change is still fresh in everyone's head.

Auto-detecting merge conflicts across open PRs is a two-workflow GitHub Actions system: a **sweep** and a **broadcast**. The sweep triggers on every push to \`master\`, paginates through all open PRs with \`github.rest.pulls.list\`, and calls \`github.rest.pulls.updateBranch\` on each (the API equivalent of GitHub's "Update branch" button), skipping forks and treating a \`422\` as "nothing to do" rather than a failure. Because GitHub computes mergeability asynchronously, you must treat \`mergeable\` as **eventually consistent**: poll \`pulls.get\` with backoff (up to 5 retries, 2s apart) until it stops returning \`null\`, then reconcile a \`conflict\` label based on \`mergeable === false\` or \`mergeable_state === 'dirty'\`. The broadcast workflow reads \`conflict\`-labeled PRs, builds an author→PRs map, translates each GitHub login to a chat handle, and posts one grouped Discord digest—push-based, grouped, and routed—so each conflict reaches the right author within seconds, not days after it has already broken their branch.

## The problem

Three things were going wrong, all downstream of the same root cause (master moves, PRs don't):

1. **Stale branches.** PRs fall behind \`master\` and their CI results stop meaning anything — they passed against an old base.
2. **Late conflict discovery.** Authors learn about conflicts when they try to merge, which is the most disruptive possible time.
3. **Notification fatigue.** GitHub *can* tell you a PR is conflicted, but it's buried in a UI nobody watches. The signal never reaches the person who needs it.

## The idea

Two workflows working as a pair:

- **The sweep** — triggered on every push to \`master\`. Walk every open PR, update its branch against the new \`master\`, then check whether it now conflicts and label it accordingly.
- **The broadcast** — takes the conflicted PRs and posts a digest to team chat, grouped by author, so each person sees exactly their PRs that need attention.

Detection and notification are deliberately separate. The sweep maintains accurate *state* (labels on PRs). The broadcast turns that state into a *message*. Splitting them means I can re-run or reschedule the announcement without re-running the (heavier) sweep.

## How do you auto-detect merge conflicts on every push to master?

![Flow: a push to master looping over PRs, polling mergeable state, labeling conflicts, then a grouped chat digest](/article-images/auto-rebase-and-detect-merge-conflicts-diagram.webp)

### Refresh everything on every merge

The sweep triggers on push to \`master\` and pages through all open PRs against it:

\`\`\`yaml
on:
  push:
    branches: [master]
\`\`\`

\`\`\`js
const prs = await github.paginate(github.rest.pulls.list, {
  owner, repo, state: 'open', base: 'master', per_page: 100,
});
\`\`\`

For each one, it asks GitHub to update the branch (the same "Update branch" button you click by hand, as an API call), skipping forks where you don't have permission:

\`\`\`js
if (!(pr.head?.repo?.fork && !pr.maintainer_can_modify)) {
  try {
    await github.rest.pulls.updateBranch({ owner, repo, pull_number: pr.number });
  } catch (e) {
    if (e.status === 422) { /* conflict or already up to date — skip */ }
    else if (e.status === 403) { /* no permission — skip */ }
  }
}
\`\`\`

The \`422\` handling is the bit you only learn by getting burned: \`updateBranch\` throws 422 both when the branch can't be fast-forwarded (a real conflict) *and* in benign "nothing to do" cases. You don't treat it as failure — you treat it as "move on and let the mergeability check below tell the truth."

### Wait for GitHub to make up its mind

Here's the trap that makes naive versions of this flaky. When you ask GitHub whether a PR is mergeable, the answer is often \`null\` — "I haven't computed that yet, check back." Read it too early and you'll mislabel a perfectly clean PR as conflicted.

So you poll, with backoff, until the state settles:

\`\`\`js
let pr = await github.rest.pulls.get({ owner, repo, pull_number });
for (let i = 0; i < 5 && pr.data.mergeable === null; i++) {
  await new Promise(r => setTimeout(r, 2000));   // let GitHub compute
  pr = await github.rest.pulls.get({ owner, repo, pull_number });
}
const hasConflicts =
  pr.data.mergeable === false || pr.data.mergeable_state === 'dirty';
\`\`\`

Treating \`mergeable\` as **eventually consistent** rather than a synchronous value is the single most important thing in this workflow. Everything else is bookkeeping.

Then the label is reconciled — added if conflicting, removed if not — so the \`conflict\` label always reflects the live state:

\`\`\`js
if (hasConflicts && !hasLabel)      await addLabel('conflict');
else if (!hasConflicts && hasLabel) await removeLabel('conflict');
\`\`\`

### Turn state into a message people see

The broadcast workflow reads the \`conflict\`-labeled PRs and builds an author → PRs map, then posts one grouped digest to team chat:

\`\`\`js
const map = {};                       // author -> [pr urls]
for (const pr of conflictedPRs) {
  (map[pr.user.login] ??= []).push(pr.html_url);
}
\`\`\`

Each GitHub author is translated to their chat handle so the message actually pings the right human, and a clean run gets a cheerful "no conflicts 🎉" instead of awkward silence. It also runs on a daily schedule, not just on demand — so even conflicts that appear through other paths get a regular nudge.

The reason this lands where GitHub's own notifications don't: it's **push-based, grouped, and routed.** It arrives in the tool the team already lives in, addressed to the person who can fix it, listing exactly their PRs. No dashboard to remember to check.

## What does automatic conflict detection actually improve?

- **Conflicts surface in seconds, not days** — right after the merge that caused them, while context is fresh.
- **PR branches stay current**, so green CI actually means "green against today's \`master\`."
- **The right person gets pinged**, in chat, with their specific PRs — around 10 fewer manual "please rebase" comments a week.
- **Less merge-time drama.** By the time you go to merge, you already knew (and probably already fixed) the conflict.

## Gotchas & trade-offs

- **Auto-updating branches re-triggers CI.** Refresh 20 PRs and you just queued 20 CI runs. Usually worth it (fresh results), but mind your runner minutes — you may want to scope which PRs get swept.
- **Forks need permission.** \`updateBranch\` only works where "maintainers can edit" is on; the workflow skips the rest rather than erroring. Know that some PRs won't be auto-refreshed.
- **\`422\` is overloaded.** It means both "real conflict" and "nothing to update." Don't treat it as a failure signal — let the mergeability poll be your source of truth.
- **Chat handle mapping is manual.** A GitHub-login → chat-ID table has to be maintained as people join and leave. It's the kind of small debt that silently breaks pings.
- **Don't over-notify.** A conflict digest every hour becomes wallpaper. Daily + on-merge was the right dose; tune it to your team's tolerance.

## Takeaway

A merge to \`master\` has a blast radius, and the cheapest time to deal with that radius is *immediately*. Refresh every PR on every merge, treat mergeability as eventually consistent (poll it, don't trust the first read), and route the result to a human in the tool they already watch. Detect fast; notify where people actually look.

Next: the flagship. What if, for one common class of conflict, the repo didn't just *detect* it — it *fixed* it and pushed the resolution for you?

## The complete workflow

Here is the full, genericized workflow — drop it into \`.github/workflows/\` and replace the placeholders (\`your-org\`, the \`PROJ\` project key, \`<@DISCORD_USER_ID>\`, the example team, and the secret names) with your own.

### \`.github/workflows/update_all_prs_and_sweep.yml\`

\`\`\`\`yaml
name: Update PR branches and sweep conflict on master push
on:
  push:
    branches: [master]

permissions:
  contents: write
  pull-requests: write
  issues: write

jobs:
  update-all-prs-and-sweep:
    runs-on: ubuntu-slim
    steps:
      - uses: actions/github-script@v7
        with:
          script: |
            const owner = context.repo.owner;
            const repo = context.repo.repo;
            const base = context.ref.replace('refs/heads/', '');
            const labelName = 'conflict';

            // Ensure conflict label exists
            try { await github.rest.issues.getLabel({ owner, repo, name: labelName }); }
            catch (e) { if (e.status === 404) await github.rest.issues.createLabel({ owner, repo, name: labelName, color: 'd73a4a' }); else throw e; }

            const prs = await github.paginate(github.rest.pulls.list, { owner, repo, state: 'open', base, per_page: 100 });

            for (const p of prs) {
              // Step 1: Try to update PR branch with latest master
              if (!(p.head?.repo?.fork && !p.maintainer_can_modify)) {
                try {
                  await github.rest.pulls.updateBranch({ owner, repo, pull_number: p.number });
                  console.log(\`Updated PR #\${p.number}\`);
                } catch (e) {
                  const status = e.status || e.response?.status;
                  if (status === 422) {
                    console.log(\`Skipped updating PR #\${p.number} due to conflicts or not behind\`);
                  } else if (status === 403) {
                    console.log(\`Skipped updating PR #\${p.number} due to permissions\`);
                  } else {
                    console.log(\`Error updating PR #\${p.number}: \${e.message}\`);
                  }
                }
              } else {
                console.log(\`Skipped PR #\${p.number} from fork because maintainer edits are not allowed\`);
              }

              // Step 2: Check for conflicts and manage label
              let pr = await github.rest.pulls.get({ owner, repo, pull_number: p.number });
              // If mergeable is null/unknown, wait briefly and retry
              for (let i = 0; i < 5 && (pr.data.mergeable === null || (pr.data.mergeable_state||'').toLowerCase() === 'unknown'); i++) {
                await new Promise(r => setTimeout(r, 2000));
                pr = await github.rest.pulls.get({ owner, repo, pull_number: p.number });
              }
              const hasConflicts = (pr.data.mergeable === false) || ((pr.data.mergeable_state||'').toLowerCase() === 'dirty');

              const { data: labels } = await github.rest.issues.listLabelsOnIssue({ owner, repo, issue_number: p.number, per_page: 100 });
              const hasLabel = labels.some(l => l.name.toLowerCase() === labelName);

              if (hasConflicts && !hasLabel) {
                await github.rest.issues.addLabels({ owner, repo, issue_number: p.number, labels: [labelName] });
                console.log(\`Added conflict label to PR #\${p.number}\`);
              } else if (!hasConflicts && hasLabel) {
                await github.rest.issues.removeLabel({ owner, repo, issue_number: p.number, name: labelName });
                console.log(\`Removed conflict label from PR #\${p.number}\`);
              }
            }
\`\`\`\`

### \`.github/workflows/conflict-notify.yml\`

\`\`\`\`yaml
name: List open PR authors (conflict label → map, URLs only)
on:
  workflow_dispatch:
    inputs:
      label:
        description: 'Label to filter PRs by'
        required: false
        default: 'conflict'
  schedule:
    - cron: '0 0 * * *' # daily at midnight UTC (optional)

permissions:
  contents: read
  pull-requests: read

jobs:
  list-authors:
    runs-on: ubuntu-slim
    steps:
      - name: List open PRs with label and build author→PR-URL map
        id: list_prs
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');

            const owner = context.repo.owner;
            const repo = context.repo.repo;
            const targetLabel = core.getInput('label') || 'conflict';
            core.info(\`Listing open PRs for \${owner}/\${repo} and filtering by label "\${targetLabel}"\`);

            // Fetch all open PRs (handles pagination)
            const pulls = await github.paginate(github.rest.pulls.list, {
              owner,
              repo,
              state: 'open',
              per_page: 100,
            });

            core.info(\`Found \${pulls.length} open PR(s)\`);

            // Filter PRs that contain the target label (case-insensitive)
            const filtered = pulls.filter(p => {
              const labels = p.labels || [];
              return labels.some(l => String(l.name).toLowerCase() === String(targetLabel).toLowerCase());
            });

            core.info(\`Found \${filtered.length} open PR(s) with label "\${targetLabel}"\`);

            // Build mapping: author -> [ "https://github.com/owner/repo/pull/NNN", ... ]
            const map = {};
            for (const p of filtered) {
              const author = p.user?.login || 'unknown';
              if (!map[author]) map[author] = [];

              const httpsUrl = p.html_url;
              // Add only the full https URL, avoid alternate @owner/repo style
              if (!map[author].includes(httpsUrl)) map[author].push(httpsUrl);
            }

            core.setOutput('mapping', JSON.stringify(map));
            core.setOutput('filtered_pr_count', String(filtered.length));
            core.setOutput('authors', JSON.stringify(Object.keys(map)));

      - name: Print mapping to job log
        run: |
          echo "Mapping (author -> [PR URLs]):"
          echo '\${{ steps.list_prs.outputs.mapping }}'

      - name: Format Discord message
        id: format_message
        uses: actions/github-script@v6
        with:
          script: |
            const mapping = JSON.parse('\${{ steps.list_prs.outputs.mapping }}');
            const prCount = parseInt('\${{ steps.list_prs.outputs.filtered_pr_count }}');
            
            // GitHub username to Discord user ID mapping
            const discordMapping = {
              'jpark': '<@DISCORD_USER_ID>',
              'ckim': '<@DISCORD_USER_ID>',
              'your-maintainer': '<@DISCORD_USER_ID>',
              'rdiaz': '<@DISCORD_USER_ID>',
              'schen': '<@DISCORD_USER_ID>'
            };
            
            if (prCount === 0) {
              core.setOutput('message', 'No open PRs with conflicts found! 🎉');
              return;
            }
            
            let message = '⚠️ **Please solve conflicts**\\n\\n';
            
            for (const [author, urls] of Object.entries(mapping)) {
              const discordMention = discordMapping[author] || author;
              message += \`**\${discordMention}**\\n\`;
              for (const url of urls) {
                message += \`\${url}\\n\`;
              }
              message += '\\n';
            }
            
            message += '----------------------------------';
            
            core.setOutput('message', message.trim());

      - name: Discord Webhook Action
        uses: tsickert/discord-webhook@v6.0.0
        with:
          webhook-url: \${{ secrets.DISCORD_WEBHOOK_URL }}
          content: \${{ steps.format_message.outputs.message }}
\`\`\`\`
`},{slug:"bot-that-resolves-merge-conflicts",title:"I let a bot resolve merge conflicts and push the fix. Here's how I made that safe.",description:"How to ship a genuinely dangerous automation safely — by shrinking its blast radius to one provably-safe case, working only in throwaway space, and failing closed on anything unexpected.",date:"2026-05-12",readTime:"8 min read",tags:["GitHub Actions","Git","Automation","CI/CD"],content:`
# I let a bot resolve merge conflicts and push the fix. Here's how I made that safe.

*Subtitle: Auto-committing to other people's branches is terrifying — until you shrink the blast radius to one provably-safe case. This is that story.*

*The Self-Driving Repo · Part 5 — Conflict Management (flagship)*

![A robot arm carefully braiding two translation streams back into one](/article-images/bot-that-resolves-merge-conflicts-hero.webp)

---

Let me start with the version of this idea that should scare you:

> "What if a GitHub Action automatically resolved merge conflicts and force-pushed the result to people's PR branches?"

If your stomach dropped, good — mine did too. A bot that runs \`git merge\` and \`git push\` against branches it doesn't own is exactly how you corrupt someone's work, lose a commit, or merge two versions of a file into nonsense. This is the most dangerous automation in the entire series.

And yet it runs on every push to \`master\`, it resolves real conflicts, and I trust it. The trick wasn't writing a smarter merge algorithm. It was making the bot **profoundly cowardly** — it only acts in one narrow situation where the "right answer" is mechanical and provable, and it runs away from everything else.

This post is about how to take a scary capability and make it safe by aggressively shrinking its blast radius.

A **GitHub Action that auto-resolves merge conflicts** is made safe by shrinking its blast radius to one provably-safe case. This bot runs \`actions/github-script\` on every push to \`master\`, and only resolves conflicts when *every* unmerged file matches the regex \`/^assets\\/translations\\/.*\\.json$/\`. If even one \`.dart\` or \`pubspec.yaml\` file conflicts, it calls \`git merge --abort\` and hands the PR to a human. It also skips drafts and forks, and waits out GitHub's eventually-consistent \`mergeable\` field before touching anything. Here's how it works: it merges in a throwaway \`_auto_resolve\` branch, parses each translation file's clean versions from both sides with \`git show\`, and unions the JSON key sets (\`{ ...masterJSON, ...branchJSON }\`)—branch wins on true collisions. It then pushes the fix, comments listing the files touched, and says "please review." Any unexpected error fails closed via \`git merge --abort\`. The safety lives in the refusal logic, not the merge algorithm: dumb-and-provable beats smart-and-probabilistic.

## Why do translation JSON files conflict on every PR?

We ship in multiple languages. Translations live in per-locale JSON files — \`assets/translations/en.json\`, \`ar.json\`, and so on. Add a feature and you add keys to all of them. Which means **every feature branch touches the same translation files**, and they conflict constantly.

But here's the thing: these conflicts are almost never *real*. Two developers add different keys to \`en.json\`. Git sees edits to the same region and throws up its hands. A human opens the file, looks at the two sides, and realizes there's nothing to decide — you want *both* keys. It's the dumbest possible conflict, and resolving it by hand is pure tax: it blocks the PR, interrupts the author, and contributes exactly zero thought.

Code conflicts deserve a human. Two people adding \`"save_button": "Save"\` and \`"share_button": "Share"\` to the same JSON do not.

## The idea: automate the mechanical case, refuse everything else

The workflow runs on every push to \`master\`. For each open PR, it tries to merge \`master\` in. If the *only* things that conflict are translation JSON files, it resolves them by merging the key sets, pushes the resolution, and comments to explain itself. If *anything else* conflicts — a single \`.dart\` file, a \`pubspec.yaml\`, anything — it aborts, touches nothing, and leaves the PR for a human.

The safety isn't in the merge logic. It's in the **refusal logic**. Let me walk the guards in the order they execute, because the order *is* the design.

## How does the bot safely auto-resolve translation conflicts?

![Decision flow: if every conflicting file matches the translations path, merge and push; otherwise abort and hand to a human](/article-images/bot-that-resolves-merge-conflicts-diagram.webp)

### Guard 0: only conflicted, real, ready PRs

Before any git happens, filter hard. Skip drafts. Skip forks (you can't safely push to them, and you shouldn't). And critically, only consider PRs that are *actually* conflicting — which means waiting out GitHub's eventually-consistent \`mergeable\` field, exactly like the conflict radar in Part 4:

\`\`\`js
let freshPR;
for (let attempt = 0; attempt < 5; attempt++) {
  const { data } = await github.rest.pulls.get({ owner, repo, pull_number });
  if (data.mergeable !== null) { freshPR = data; break; }  // null = not computed yet
  await new Promise(r => setTimeout(r, 3000));
}
if (!freshPR || freshPR.mergeable !== false) continue;     // only proceed on real conflicts
\`\`\`

### Guard 1: do the merge in throwaway space

Never operate on \`master\` or the original branch directly. Check out the PR branch into a disposable local branch, then attempt the merge there. If it merges clean, there was nothing to do — move on:

\`\`\`js
execSync('git checkout master && git reset --hard origin/master');
execSync(\`git fetch origin "\${branch}"\`);
execSync(\`git checkout -B _auto_resolve "origin/\${branch}"\`);

let hasConflicts = false;
try { execSync('git merge origin/master --no-edit'); }
catch { hasConflicts = true; }
if (!hasConflicts) continue;
\`\`\`

### Guard 2: THE important one — is *every* conflict a translation file?

This is the load-bearing guard, the reason the whole thing is safe. List the unmerged files. If even one of them is outside the translations path, abort the entire merge and skip the PR. No partial resolutions. No "fix the easy files and leave the hard ones." All-or-nothing:

\`\`\`js
const conflictFiles = execSync('git diff --name-only --diff-filter=U')
  .toString().trim().split('\\n');

const TRANSLATION_PATH = /^assets\\/translations\\/.*\\.json$/;
const allTranslation = conflictFiles.every(f => TRANSLATION_PATH.test(f));

if (!allTranslation) {
  execSync('git merge --abort');   // touch nothing, hand it to a human
  skipped++;
  continue;
}
\`\`\`

That \`every()\` is the line that lets me sleep. The bot's authority is scoped to a regex. A conflict in \`lib/\` the bot never even *attempts* to resolve — it aborts and walks away. The dangerous version of this feature is the one that tries to be helpful with code. This one is constitutionally incapable of it.

### Guard 3: resolve by merging key sets, with a defined winner

Only now, with every conflict proven to be a translation file, does it resolve. And the resolution is deliberately boring — parse both sides as JSON, spread them together so you keep *all* keys from both branches:

\`\`\`js
for (const file of conflictFiles) {
  const masterJSON = JSON.parse(execSync(\`git show origin/master:"\${file}"\`).toString());
  const branchJSON = JSON.parse(execSync(\`git show "origin/\${branch}":"\${file}"\`).toString());

  const merged = { ...masterJSON, ...branchJSON };   // union; branch wins on true key collisions

  fs.writeFileSync(file, JSON.stringify(merged, null, 2) + '\\n');
  execSync(\`git add "\${file}"\`);
}
\`\`\`

Two things make this trustworthy. First, it operates on the **clean versions** of each file from each branch (\`git show origin/master:file\` and \`git show origin/branch:file\`) — not on the conflict-marker-polluted working copy. There's no risk of a stray \`<<<<<<<\` ending up in the output. Second, the merge rule is *defined and documented*: it's a union, and on the rare true collision (both branches changed the same key), the **branch value wins**. That's a real decision with a real rationale (the PR author's intent is newer), not an accident of ordering.

### Guard 4: tell the humans exactly what you did

Automation that mutates someone's branch silently is a betrayal. So the bot pushes the resolution and immediately comments — listing the files it touched and stating the merge rule in plain language:

\`\`\`js
execSync('git commit --no-edit');
execSync(\`git push origin "_auto_resolve:\${branch}"\`);

await github.rest.issues.createComment({
  owner, repo, issue_number: pr.number,
  body: [
    '🤖 **Auto-resolved translation conflicts**',
    '',
    'Merged \`master\` and resolved conflicts in:',
    ...conflictFiles.map(f => \`- \\\`\${f}\\\`\`),
    '',
    'PR branch values were preserved where both branches changed the same key.',
    'Please review the merged translations.',
  ].join('\\n'),
});
\`\`\`

"Please review" is not a throwaway line. The bot resolves and *unblocks*; the human still gets the final look. It removes the toil, not the oversight.

### Guard 5: fail closed

Every PR is wrapped so that any unexpected error aborts the merge and moves on — one failure can't poison the rest of the run, and a half-merge never survives:

\`\`\`js
} catch (error) {
  core.warning(\`Failed to resolve PR #\${pr.number}: \${error.message}\`);
  try { execSync('git merge --abort'); } catch {}
}
\`\`\`

When in doubt, the bot does *nothing*. That's the entire philosophy in one catch block.

## What it bought us

- **A whole category of busywork evaporated.** Translation-only conflicts — frequent, mindless, blocking — resolve themselves within a run of hitting \`master\`.
- **PRs stay unblocked.** Authors stop losing momentum to a conflict that required no thought.
- **Trust, because it's transparent.** Every action is announced on the PR with the rule it followed. Nobody finds a mystery commit.
- **Reviewers still review.** The human look survives; only the mechanical merge is gone. Roughly 10 translation conflicts auto-cleared per week.

## Gotchas & trade-offs

- **A JSON union is not a real semantic merge.** If both branches set the same key to *different* values, "branch wins" might be wrong. It's a defensible default, not a guarantee — which is exactly why the bot says "please review."
- **It assumes flat, valid JSON.** Nested objects or a malformed file would break naive spreading; \`JSON.parse\` failing lands you in the fail-closed catch, which is the safe outcome but means that PR isn't auto-resolved.
- **Pushing to a contributor's branch needs the right permissions** and is why forks are excluded outright. Know your token's scope.
- **Scope creep is the real danger.** The instant someone asks "can it also resolve \`pubspec.yaml\`?" you're negotiating away the one guard that makes it safe. The narrowness *is* the feature. Defend it.
- **It is not a merge-conflict AI.** No model, no guessing. For this class, dumb-and-provable beats smart-and-probabilistic every time.

## Takeaway

The way to ship a dangerous automation safely isn't to make it clever — it's to make it *cowardly and loud*. Shrink its authority to a single case where the correct answer is mechanical and provable (\`every() conflict matches one regex\`), operate only in throwaway space, define your tie-breaker explicitly, announce every action, and fail closed on anything unexpected. The capability sounds reckless. The blast radius makes it boring. Boring is the goal.

Next: stepping out of git plumbing and into shipping — one button that builds and distributes for Android, iOS, and the Play Store.

## The complete workflow

Here is the full, genericized workflow — drop it into \`.github/workflows/\` and replace the placeholders (\`your-org\`, the \`PROJ\` project key, \`<@DISCORD_USER_ID>\`, the example team, and the secret names) with your own.

### \`.github/workflows/auto-resolve-translation-conflicts.yml\`

\`\`\`\`yaml
name: Auto-resolve translation conflicts

on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: write
  pull-requests: write
  issues: write

jobs:
  auto-resolve-translations:
    runs-on: ubuntu-slim
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Configure git
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"

      - name: Auto-resolve translation-only conflicts
        uses: actions/github-script@v7
        with:
          script: |
            const { execSync } = require('child_process');
            const fs = require('fs');

            const owner = context.repo.owner;
            const repo = context.repo.repo;
            const TRANSLATION_PATH = /^assets\\/translations\\/.*\\.json$/;

            const prs = await github.paginate(github.rest.pulls.list, {
              owner, repo, state: 'open', per_page: 100,
            });

            core.info(\`Found \${prs.length} open PRs\`);

            let resolved = 0;
            let skipped = 0;

            for (const pr of prs) {
              if (pr.draft) continue;

              if (pr.head.repo?.fork || pr.head.repo?.full_name !== \`\${owner}/\${repo}\`) {
                core.info(\`Skipping PR #\${pr.number} (fork)\`);
                continue;
              }

              let freshPR;
              for (let attempt = 0; attempt < 5; attempt++) {
                const { data } = await github.rest.pulls.get({
                  owner, repo, pull_number: pr.number,
                });
                if (data.mergeable !== null) {
                  freshPR = data;
                  break;
                }
                await new Promise(r => setTimeout(r, 3000));
              }

              if (!freshPR || freshPR.mergeable !== false) continue;

              core.info(\`\\nPR #\${pr.number} "\${pr.title}" has conflicts\`);

              const branch = pr.head.ref;

              try {
                execSync('git checkout master && git reset --hard origin/master', {
                  stdio: 'pipe',
                });
                execSync(\`git fetch origin "\${branch}"\`, { stdio: 'pipe' });
                execSync(\`git checkout -B _auto_resolve "origin/\${branch}"\`, {
                  stdio: 'pipe',
                });

                let hasConflicts = false;
                try {
                  execSync('git merge origin/master --no-edit', { stdio: 'pipe' });
                } catch {
                  hasConflicts = true;
                }

                if (!hasConflicts) {
                  core.info(\`  PR #\${pr.number} merged cleanly, no action needed\`);
                  continue;
                }

                const conflictOutput = execSync('git diff --name-only --diff-filter=U')
                  .toString()
                  .trim();
                if (!conflictOutput) {
                  execSync('git merge --abort', { stdio: 'pipe' });
                  continue;
                }

                const conflictFiles = conflictOutput.split('\\n');
                const allTranslation = conflictFiles.every(f => TRANSLATION_PATH.test(f));

                if (!allTranslation) {
                  const nonTranslation = conflictFiles
                    .filter(f => !TRANSLATION_PATH.test(f))
                    .join(', ');
                  core.info(
                    \`  Skipping PR #\${pr.number} — non-translation conflicts: \${nonTranslation}\`,
                  );
                  execSync('git merge --abort', { stdio: 'pipe' });
                  skipped++;
                  continue;
                }

                core.info(\`  Resolving: \${conflictFiles.join(', ')}\`);

                for (const file of conflictFiles) {
                  const masterContent = execSync(\`git show origin/master:"\${file}"\`).toString();
                  const branchContent = execSync(
                    \`git show "origin/\${branch}":"\${file}"\`,
                  ).toString();

                  const masterJSON = JSON.parse(masterContent);
                  const branchJSON = JSON.parse(branchContent);

                  const merged = { ...masterJSON, ...branchJSON };

                  fs.writeFileSync(file, JSON.stringify(merged, null, 2) + '\\n');
                  execSync(\`git add "\${file}"\`, { stdio: 'pipe' });
                }

                execSync('git commit --no-edit', { stdio: 'pipe' });
                execSync(\`git push origin "_auto_resolve:\${branch}"\`, { stdio: 'pipe' });

                resolved++;
                core.info(\`  Resolved PR #\${pr.number}\`);

                await github.rest.issues.createComment({
                  owner,
                  repo,
                  issue_number: pr.number,
                  body: [
                    '🤖 **Auto-resolved translation conflicts**',
                    '',
                    'Merged \`master\` and resolved conflicts in:',
                    ...conflictFiles.map(f => \`- \\\`\${f}\\\`\`),
                    '',
                    'PR branch values were preserved where both branches modified the same key.',
                    'Please review the merged translations.',
                  ].join('\\n'),
                });

                try {
                  await github.rest.issues.removeLabel({
                    owner,
                    repo,
                    issue_number: pr.number,
                    name: 'conflict',
                  });
                } catch {}
              } catch (error) {
                core.warning(\`Failed to resolve PR #\${pr.number}: \${error.message}\`);
                try {
                  execSync('git merge --abort', { stdio: 'pipe' });
                } catch {}
              }
            }

            core.info(\`\\nSummary: \${resolved} resolved, \${skipped} skipped\`);
\`\`\`\`
`},{slug:"automated-stale-branch-cleanup",title:"A repo that cleans up after itself — without deleting the wrong branch",description:"Bulk branch deletion done safely, as a careful classification with a per-run cap, deferral, and a full audit trail — never a blunt age filter.",date:"2026-06-02",readTime:"6 min read",tags:["GitHub Actions","Git","DevOps","Automation"],content:`
# A repo that cleans up after itself — without deleting the wrong branch

*Subtitle: Deleting branches in bulk is a one-keystroke disaster waiting to happen. The fix is to make deletion the last step of a careful classification — and to cap, defer, and audit everything.*

*The Self-Driving Repo · Part 8 — Housekeeping*

![A robot broom sweeping dead branches from a healthy git tree](/article-images/automated-stale-branch-cleanup-hero.webp)

---

Old branches are the junk drawer of a repo. Every merged feature, every abandoned experiment, every "let me just try something" leaves one behind. They pile up silently — clones get slower, branch pickers get unusable, and \`git branch -r\` scrolls for a screen and a half. On a long-lived repo with a busy team, you wake up one day with hundreds of dead branches.

The naive fix — a script that deletes anything old — is how you delete a release branch someone needed, or a long-running integration branch that just hadn't been touched in a while. With deletion, "oops" is expensive. You don't get to be cavalier.

So I built branch cleanup as a **classification problem first and a deletion problem second.** The deleting is three lines. The safety is everything before it.

Automated stale-branch cleanup treats branch deletion as a **classification problem first and a deletion problem second**. A scheduled GitHub Actions workflow (\`cleanup-stale-branches.yml\`) runs Sunday at 04:00 UTC, fetches every branch plus the full open and merged PR history, then sorts each branch through a strict safety precedence: **sacred** (\`master\`, \`develop\`, the default branch) beats **protected** beats **open-PR** beats **merged** beats **stale** beats **active**. Only *merged* and *stale* branches are deleted, and safety always wins ties. Three guards make bulk deletion routine: a per-run cap (\`max_deletions\`, default 50) that defers overflow to next week, branch-name URL-encoding before each \`gh api -X DELETE\` call, and a full audit trail — merged branches get a comment linking back to their PR, plus a Discord digest and a job-summary table of what was deleted, deferred, and kept. Staleness is epoch math: a tip commit older than \`age_days\` (default 730, ~2 years).

## The problem

Unmanaged branches cause slow, compounding pain:

1. **Clutter that slows people down.** Hundreds of stale refs make branch lists and tooling sluggish and confusing.
2. **No signal about what's safe to remove.** Is this branch merged? Abandoned? An active long-runner that's just quiet this week? You can't tell at a glance, so nobody cleans up at all.
3. **Cleanup is scary, so it never happens.** The risk of nuking something important means the junk drawer just grows forever.

## The idea

A scheduled workflow — Sunday at 4am, when nobody's pushing — that fetches *every* branch and the full PR history, then sorts each branch into a category before a single deletion happens:

- **Sacred** — \`master\`, \`develop\`, the default branch. Never touched.
- **Protected** — anything with branch protection on. Never touched.
- **Open-PR** — the head or base of an open PR. Active; leave it.
- **Merged** — already merged via a PR. Safe to delete.
- **Stale** — last commit older than a threshold (default ~2 years). Safe to delete.
- **Active** — recent commits, no reason to remove. Keep.

Only the *Merged* and *Stale* buckets get deleted, and even then, carefully.

\`\`\`yaml
on:
  schedule:
    - cron: '0 4 * * 0'      # Sunday 04:00 UTC
  workflow_dispatch:
    inputs:
      age_days:      { default: '730' }   # ~2 years
      max_deletions: { default: '50' }    # hard cap per run
\`\`\`

## How does the stale-branch cleanup workflow classify branches?

![Classification funnel: branches sorted into sacred, protected, open-PR, merged, stale and active, with a capped delete tray](/article-images/automated-stale-branch-cleanup-diagram.webp)

### Build the world before you judge it

You can't classify a branch in isolation — you need to know whether it backs an open PR, whether it was merged, and how old its tip is. So the first step assembles the full picture: all open PRs (to collect their head/base refs), all merged PRs (to know what's been merged and by whom), and every branch with its last-commit timestamp and protection flag.

\`\`\`bash
# Every branch with sha + protected flag, as TSV
gh api repos/$REPO/branches --paginate \\
  | jq -r '.[] | [.name, .commit.sha, (.protected|tostring)] | @tsv'
\`\`\`

### Classify with a strict precedence

Each branch runs through the categories in priority order — and **safety always wins ties.** Sacred beats protected beats open-PR beats merged beats stale. A branch that is both "merged" and "backs an open PR" is kept, because the open-PR check comes first. The ordering is the safety policy:

\`\`\`bash
if   in_list "$NAME" "$SACRED";    then echo "SKIP:sacred"
elif [ "$PROTECTED" = "true" ];    then echo "SKIP:protected"
elif in_list "$NAME" "$OPEN_REFS"; then echo "SKIP:open-pr"
elif is_merged "$NAME";            then echo "DELETE:merged"
elif older_than "$CUTOFF" "$NAME"; then echo "DELETE:stale"
else                                    echo "KEEP:active"
fi
\`\`\`

Stale detection is just epoch math — compare the tip commit's timestamp to a cutoff:

\`\`\`bash
CUTOFF=$(( $(date -u +%s) - AGE_DAYS * 86400 ))
\`\`\`

### Cap and defer — never delete unboundedly

Here's the rule that turns a bulk operation from terrifying into routine: **never delete more than N in one run.** If 400 branches qualify, delete the first 50, and *defer the rest to next week*. A capped, repeated cleanup converges safely; an uncapped one is a single command that can wreck a repo. The cap is a circuit breaker against a bad classification — if something's wrong, you've harmed 50 branches, not 800, and you'll see it before the next run.

The deferred branches are logged, not lost — the run reports exactly what it skipped for capacity so there are no surprises.

### Delete carefully, link back, and audit

Even the deletion step is defensive. Branch names contain slashes and the occasional oddity, so they're URL-encoded before the API call. And when a *merged* branch is deleted, the workflow comments on its original PR — closing the loop so there's a trail from "this branch is gone" back to "here's why":

\`\`\`bash
ENC=$(jq -rn --arg x "$NAME" '$x|@uri')          # handle slashes/special chars
gh api -X DELETE "repos/$REPO/git/refs/heads/$ENC"
# then, for merged branches, comment on the source PR: "branch auto-deleted by cleanup"
\`\`\`

Every action lands in two places: a digest posted to team chat (counts, grouped by reason, with author attribution) and a full job summary with tables of what was deleted, what was deferred, and what was kept. Bulk deletion without an audit trail is how you lose the ability to answer "what happened to my branch?" — so the trail is non-negotiable.

## What does safe automated branch cleanup get you?

- **The junk drawer stays empty** without anyone doing scary manual cleanup.
- **Zero accidents**, because deletion is the last step of a conservative classification, not a blunt age filter.
- **A clear record.** Every deletion is attributable and explained, with merged branches linked back to their PRs.
- **It self-throttles.** A big backlog clears over several capped runs instead of one heart-stopping purge — around 100 dead branches reclaimed.

## Gotchas & trade-offs

- **"Merged" is subtler than it looks.** Squash-merges don't leave the branch as an ancestor of \`master\`, so ancestry checks lie — rely on the *PR* merge record, not \`git branch --merged\`.
- **Protection flags are only as good as your config.** The workflow honors branch protection, but if an important long-runner isn't protected and goes quiet past the threshold, it qualifies as stale. Protect what matters, or widen "sacred."
- **API pagination has real limits.** Listing thousands of PRs/branches can truncate; the job logs when a list may be incomplete rather than pretending it saw everything. Trust-but-verify your counts on large repos.
- **The cap is a feature, resist removing it.** "Just clean it all up at once" is the request that precedes the incident. Defer-and-repeat is slower and far safer.
- **Schedule it for quiet hours.** Deleting branches while people push invites races. Off-peak isn't just politeness; it reduces edge cases.

## Takeaway

Any automation that deletes should be a classifier with a delete step bolted on the end — never a delete step with a filter. Order your categories so safety wins every tie, cap the blast radius per run, defer the overflow, and audit every action with a trail back to *why*. Make the destructive thing boring and reversible-in-spirit, and bulk cleanup stops being a thing you're afraid to run.

Next, the finale: aggregating git and Jira into per-person weekly summaries with an LLM — and the hard conversation about doing that responsibly.

## The complete workflow

Here is the full, genericized workflow — drop it into \`.github/workflows/\` and replace the placeholders (\`your-org\`, the \`PROJ\` project key, \`<@DISCORD_USER_ID>\`, the example team, and the secret names) with your own.

### \`.github/workflows/cleanup-stale-branches.yml\`

\`\`\`\`yaml
name: Cleanup Stale Branches

on:
  schedule:
    - cron: '0 4 * * 0'  # Every Sunday at 04:00 UTC
  workflow_dispatch:
    inputs:
      age_days:
        description: 'Delete branches with no commits in N days'
        required: false
        default: '730'
      max_deletions:
        description: 'Hard cap on branches deleted per run'
        required: false
        default: '50'

concurrency:
  group: cleanup-stale-branches
  cancel-in-progress: false

permissions:
  contents: write
  pull-requests: write

jobs:
  cleanup:
    runs-on: ubuntu-slim
    timeout-minutes: 30
    steps:
      - name: Classify branches
        id: classify
        env:
          GH_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          REPO: \${{ github.repository }}
          DEFAULT_BRANCH: \${{ github.event.repository.default_branch }}
          AGE_DAYS: \${{ inputs.age_days || '730' }}
          MAX_DELETE: \${{ inputs.max_deletions || '50' }}
        run: |
          set -euo pipefail

          CUTOFF_EPOCH=$(( $(date -u +%s) - AGE_DAYS * 86400 ))
          echo "Cutoff: $(date -u -d "@$CUTOFF_EPOCH" +%Y-%m-%d) (age_days=$AGE_DAYS)"

          SKIP_ALWAYS=$(printf '%s\\n' master develop "$DEFAULT_BRANCH" | sort -u)

          OPEN_PR_LIMIT=1000
          gh pr list --repo "$REPO" --state open --limit "$OPEN_PR_LIMIT" \\
            --json headRefName,baseRefName > /tmp/open_prs.json
          OPEN_PR_COUNT=$(jq 'length' /tmp/open_prs.json)
          if [ "$OPEN_PR_COUNT" -ge "$OPEN_PR_LIMIT" ]; then
            echo "::error::Open PR count ($OPEN_PR_COUNT) reached limit ($OPEN_PR_LIMIT); list may be truncated and untracked open-PR refs could be deleted. Raise OPEN_PR_LIMIT and re-run."
            exit 1
          fi
          jq -r '.[].headRefName, .[].baseRefName' /tmp/open_prs.json | sort -u > /tmp/open_refs.txt
          echo "Open PRs: $OPEN_PR_COUNT | unique refs: $(wc -l < /tmp/open_refs.txt | tr -d ' ')"

          MERGED_PR_LIMIT=5000
          gh pr list --repo "$REPO" --state merged --limit "$MERGED_PR_LIMIT" \\
            --json headRefName,number,mergedAt,author \\
            --jq '.[] | "\\(.headRefName)\\t\\(.number)\\t\\(.mergedAt)\\t\\(.author.login // "unknown")"' \\
            | sort -u > /tmp/merged_prs.tsv
          MERGED_PR_COUNT=$(wc -l < /tmp/merged_prs.tsv | tr -d ' ')
          if [ "$MERGED_PR_COUNT" -ge "$MERGED_PR_LIMIT" ]; then
            echo "::warning::Merged PR list at limit ($MERGED_PR_LIMIT); some merged-via-pr deletions may be missed. Raise MERGED_PR_LIMIT if needed."
          fi
          echo "Merged PR head refs: $MERGED_PR_COUNT"

          gh api "repos/$REPO/branches" --paginate \\
            --jq '.[] | [.name, .commit.sha, (.protected|tostring)] | @tsv' > /tmp/branches.tsv
          echo "Remote branches: $(wc -l < /tmp/branches.tsv | tr -d ' ')"

          : > /tmp/delete.tsv
          : > /tmp/keep.tsv

          while IFS=$'\\t' read -r NAME SHA PROTECTED; do
            if grep -Fxq "$NAME" <<<"$SKIP_ALWAYS"; then
              printf '%s\\tSKIP\\tsacred\\t-\\t-\\t-\\n' "$NAME" >> /tmp/keep.tsv
              continue
            fi
            if [ "$PROTECTED" = "true" ]; then
              printf '%s\\tSKIP\\tprotected\\t-\\t-\\t-\\n' "$NAME" >> /tmp/keep.tsv
              continue
            fi
            if grep -Fxq "$NAME" /tmp/open_refs.txt; then
              printf '%s\\tSKIP\\topen-pr-ref\\t-\\t-\\t-\\n' "$NAME" >> /tmp/keep.tsv
              continue
            fi

            MERGED_LINE=$(awk -F'\\t' -v b="$NAME" '$1==b{print; exit}' /tmp/merged_prs.tsv)
            if [ -n "$MERGED_LINE" ]; then
              PR_NUM=$(cut -f2 <<<"$MERGED_LINE")
              MERGED_AT=$(cut -f3 <<<"$MERGED_LINE")
              PR_AUTHOR=$(cut -f4 <<<"$MERGED_LINE")
              printf '%s\\tDELETE\\tmerged-via-pr\\t%s\\t%s\\t%s\\n' "$NAME" "$PR_NUM" "$MERGED_AT" "$PR_AUTHOR" >> /tmp/delete.tsv
              continue
            fi

            COMMIT_JSON=$(gh api "repos/$REPO/commits/$SHA" 2>/tmp/commit_err || echo "")
            if [ -z "$COMMIT_JSON" ]; then
              if [ -s /tmp/commit_err ] && ! grep -qiE "404|not found" /tmp/commit_err; then
                echo "::warning::commit lookup failed for $NAME ($SHA): $(tr '\\n' ' ' < /tmp/commit_err)"
              fi
              printf '%s\\tSKIP\\tno-commit-data\\t-\\t-\\t-\\n' "$NAME" >> /tmp/keep.tsv
              continue
            fi
            COMMIT_DATE=$(jq -r '.commit.committer.date // ""' <<<"$COMMIT_JSON")
            COMMIT_AUTHOR=$(jq -r '.author.login // .commit.author.name // "unknown"' <<<"$COMMIT_JSON")
            if [ -z "$COMMIT_DATE" ]; then
              printf '%s\\tSKIP\\tno-commit-data\\t-\\t-\\t%s\\n' "$NAME" "$COMMIT_AUTHOR" >> /tmp/keep.tsv
              continue
            fi
            COMMIT_EPOCH=$(date -u -d "$COMMIT_DATE" +%s)
            if [ "$COMMIT_EPOCH" -lt "$CUTOFF_EPOCH" ]; then
              AGE_D=$(( ( $(date -u +%s) - COMMIT_EPOCH ) / 86400 ))
              printf '%s\\tDELETE\\tstale\\t%sd\\t%s\\t%s\\n' "$NAME" "$AGE_D" "$COMMIT_DATE" "$COMMIT_AUTHOR" >> /tmp/delete.tsv
            else
              printf '%s\\tKEEP\\tactive\\t-\\t%s\\t%s\\n' "$NAME" "$COMMIT_DATE" "$COMMIT_AUTHOR" >> /tmp/keep.tsv
            fi
          done < /tmp/branches.tsv

          DELETE_COUNT=$(wc -l < /tmp/delete.tsv | tr -d ' ')
          KEEP_COUNT=$(wc -l < /tmp/keep.tsv | tr -d ' ')
          echo "Classified: $DELETE_COUNT candidates, $KEEP_COUNT kept"

          sort -t $'\\t' -k3,3 -k5,5 /tmp/delete.tsv -o /tmp/delete.tsv
          head -n "$MAX_DELETE" /tmp/delete.tsv > /tmp/delete_batch.tsv
          BATCH_COUNT=$(wc -l < /tmp/delete_batch.tsv | tr -d ' ')
          REMAINING=$((DELETE_COUNT - BATCH_COUNT))

          if [ "$REMAINING" -gt 0 ]; then
            echo "::warning::Batch limit: processing $BATCH_COUNT of $DELETE_COUNT candidates this run. $REMAINING will be deferred to future runs. Raise max_deletions to process more at once."
          fi

          echo "delete_count=$DELETE_COUNT" >> "$GITHUB_OUTPUT"
          echo "batch_count=$BATCH_COUNT" >> "$GITHUB_OUTPUT"
          echo "remaining_count=$REMAINING" >> "$GITHUB_OUTPUT"
          echo "keep_count=$KEEP_COUNT" >> "$GITHUB_OUTPUT"
          echo "has_candidates=$([ "$BATCH_COUNT" -gt 0 ] && echo true || echo false)" >> "$GITHUB_OUTPUT"
          echo "max_delete=$MAX_DELETE" >> "$GITHUB_OUTPUT"

      - name: Apply deletions
        if: steps.classify.outputs.has_candidates == 'true'
        env:
          GH_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          REPO: \${{ github.repository }}
        run: |
          set -euo pipefail

          : > /tmp/result.tsv

          while IFS=$'\\t' read -r NAME _ REASON DETAIL DATE AUTHOR; do
            ENC=$(jq -rn --arg x "$NAME" '$x|@uri')
            if gh api -X DELETE "repos/$REPO/git/refs/heads/$ENC" 2>/tmp/err; then
              printf '%s\\tDELETED\\t%s\\t%s\\t%s\\t%s\\n' "$NAME" "$REASON" "$DETAIL" "$DATE" "$AUTHOR" >> /tmp/result.tsv
              echo "deleted: $NAME ($REASON) by $AUTHOR"
              if [ "$REASON" = "merged-via-pr" ]; then
                PR_NUM="$DETAIL"
                gh api -X POST "repos/$REPO/issues/$PR_NUM/comments" \\
                  -f body="Branch \\\`$NAME\\\` auto-deleted by cleanup-stale-branches workflow (merged branch cleanup)." \\
                  >/dev/null 2>&1 || echo "::warning::Failed to post cleanup comment on PR #$PR_NUM"
              fi
            else
              ERR_MSG=$(tr '\\n' ' ' < /tmp/err)
              if grep -qi "protected" /tmp/err; then
                printf '%s\\tSKIPPED-PROTECTED\\t%s\\t%s\\t%s\\t%s\\n' "$NAME" "$REASON" "$DETAIL" "$DATE" "$AUTHOR" >> /tmp/result.tsv
                echo "skipped (protected): $NAME"
              else
                printf '%s\\tERROR\\t%s\\t%s\\t%s\\t%s\\n' "$NAME" "$REASON" "$DETAIL" "$ERR_MSG" "$AUTHOR" >> /tmp/result.tsv
                echo "::warning::error deleting $NAME: $ERR_MSG"
              fi
            fi
          done < /tmp/delete_batch.tsv

      - name: Format Discord message
        id: format_message
        if: steps.classify.outputs.has_candidates == 'true'
        env:
          REPO_URL: https://github.com/\${{ github.repository }}
        run: |
          set -euo pipefail

          if [ ! -s /tmp/result.tsv ]; then
            echo "has_message=false" >> "$GITHUB_OUTPUT"
            exit 0
          fi

          DELETED_COUNT=$(awk -F'\\t' '$2=="DELETED"' /tmp/result.tsv | wc -l | tr -d ' ')
          if [ "$DELETED_COUNT" = "0" ]; then
            echo "has_message=false" >> "$GITHUB_OUTPUT"
            exit 0
          fi

          MAX_LIST=20
          MERGED_COUNT=$(awk -F'\\t' '$2=="DELETED" && $3=="merged-via-pr"' /tmp/result.tsv | wc -l | tr -d ' ')
          STALE_COUNT=$(awk -F'\\t' '$2=="DELETED" && $3=="stale"' /tmp/result.tsv | wc -l | tr -d ' ')
          ERRORS_COUNT=$(awk -F'\\t' '$2=="ERROR"' /tmp/result.tsv | wc -l | tr -d ' ')

          MERGED_LIST=$(awk -F'\\t' -v n="$MAX_LIST" -v repo="$REPO_URL" '$2=="DELETED" && $3=="merged-via-pr" { c++; if (c<=n) printf "• \`%s\` [PR #%s](%s/pull/%s) by @%s\\\\n", $1, $4, repo, $4, $6 }' /tmp/result.tsv)
          if [ "$MERGED_COUNT" -gt "$MAX_LIST" ]; then
            MERGED_LIST="\${MERGED_LIST}… and $((MERGED_COUNT - MAX_LIST)) more\\\\n"
          fi

          STALE_LIST=$(awk -F'\\t' -v n="$MAX_LIST" '$2=="DELETED" && $3=="stale" { c++; if (c<=n) { d=$4; sub(/d$/, "", d); printf "• \`%s\` (%s days ago) by @%s\\\\n", $1, d, $6 } }' /tmp/result.tsv)
          if [ "$STALE_COUNT" -gt "$MAX_LIST" ]; then
            STALE_LIST="\${STALE_LIST}… and $((STALE_COUNT - MAX_LIST)) more\\\\n"
          fi

          MESSAGE="🧹 **Branch Cleanup Report**\\n\\n"
          if [ "$MERGED_COUNT" -gt 0 ]; then
            MESSAGE="\${MESSAGE}**Merged PR branches deleted (\${MERGED_COUNT}):**\\n\${MERGED_LIST}\\n"
          fi
          if [ "$STALE_COUNT" -gt 0 ]; then
            MESSAGE="\${MESSAGE}**Stale branches deleted (\${STALE_COUNT}):**\\n\${STALE_LIST}\\n"
          fi
          if [ "$ERRORS_COUNT" -gt 0 ]; then
            MESSAGE="\${MESSAGE}⚠️ **Errors: \${ERRORS_COUNT}**\\n"
          fi
          MESSAGE="\${MESSAGE}**Total deleted: \${DELETED_COUNT}**"

          MESSAGE=$(printf '%s' "$MESSAGE" | sed \\
            -e 's/@your-maintainer/<@DISCORD_USER_ID>/g' \\
            -e 's/@schen/<@DISCORD_USER_ID>/g' \\
            -e 's/@jpark/<@DISCORD_USER_ID>/g' \\
            -e 's/@jpark/<@DISCORD_USER_ID>/g' \\
            -e 's/@ckim/<@DISCORD_USER_ID>/g' \\
            -e 's/@rdiaz/<@DISCORD_USER_ID>/g' \\
            -e 's/@myu/<@DISCORD_USER_ID>/g' \\
            -e 's/@mghannam93/<@DISCORD_USER_ID>/g' \\
            -e 's/@ahmedmohamedeid98/<@DISCORD_USER_ID>/g')

          {
            echo "message<<EOF"
            printf '%b\\n' "$MESSAGE"
            echo "EOF"
          } >> "$GITHUB_OUTPUT"
          echo "has_message=true" >> "$GITHUB_OUTPUT"

      - name: Discord Webhook Notification
        if: steps.format_message.outputs.has_message == 'true'
        uses: tsickert/discord-webhook@v6.0.0
        with:
          webhook-url: \${{ secrets.DISCORD_WEBHOOK_URL }}
          content: \${{ steps.format_message.outputs.message }}

      - name: Write summary
        if: always()
        env:
          DELETE_COUNT: \${{ steps.classify.outputs.delete_count || '0' }}
          BATCH_COUNT: \${{ steps.classify.outputs.batch_count || '0' }}
          REMAINING_COUNT: \${{ steps.classify.outputs.remaining_count || '0' }}
          KEEP_COUNT: \${{ steps.classify.outputs.keep_count || '0' }}
          MAX_DELETE: \${{ steps.classify.outputs.max_delete || '50' }}
        run: |
          {
            echo "## Cleanup Summary"
            echo ""
            if [ "$REMAINING_COUNT" -gt 0 ]; then
              echo "> ℹ️ **Batch mode:** processed $BATCH_COUNT of $DELETE_COUNT candidates (max_deletions=$MAX_DELETE). **$REMAINING_COUNT deferred** to future runs. Raise \\\`max_deletions\\\` to process more at once."
              echo ""
            fi
            echo "- Total candidates: $DELETE_COUNT"
            echo "- Processed this run: $BATCH_COUNT"
            echo "- Deferred: $REMAINING_COUNT"
            echo "- Kept: $KEEP_COUNT"
            if [ -f /tmp/result.tsv ]; then
              DELETED=$(awk -F'\\t' '$2=="DELETED"' /tmp/result.tsv | wc -l | tr -d ' ')
              PROT=$(awk -F'\\t' '$2=="SKIPPED-PROTECTED"' /tmp/result.tsv | wc -l | tr -d ' ')
              ERRS=$(awk -F'\\t' '$2=="ERROR"' /tmp/result.tsv | wc -l | tr -d ' ')
              echo "- Deleted: $DELETED"
              echo "- Skipped (protected): $PROT"
              echo "- Errors: $ERRS"
            fi
            echo ""
            if [ -s /tmp/result.tsv ]; then
              echo "### Deletion Results (this run)"
              echo ""
              echo "| Branch | Action | Reason | Detail | Date | Author |"
              echo "|---|---|---|---|---|---|"
              awk -F'\\t' '{printf "| \`%s\` | %s | %s | %s | %s | %s |\\n",$1,$2,$3,$4,$5,$6}' /tmp/result.tsv
              echo ""
              if [ "$REMAINING_COUNT" -gt 0 ] && [ -s /tmp/delete.tsv ]; then
                echo "<details><summary>Deferred candidates ($REMAINING_COUNT) — will be processed in future runs</summary>"
                echo ""
                echo "| Branch | Reason | Detail | Date | Author |"
                echo "|---|---|---|---|---|"
                tail -n +$((BATCH_COUNT + 1)) /tmp/delete.tsv | awk -F'\\t' '{printf "| \`%s\` | %s | %s | %s | %s |\\n",$1,$3,$4,$5,$6}'
                echo ""
                echo "</details>"
                echo ""
              fi
            elif [ -s /tmp/delete.tsv ]; then
              echo "### Deletion Candidates"
              echo ""
              echo "| Branch | Reason | Detail | Date | Author |"
              echo "|---|---|---|---|---|"
              awk -F'\\t' '{printf "| \`%s\` | %s | %s | %s | %s |\\n",$1,$3,$4,$5,$6}' /tmp/delete.tsv
              echo ""
            fi
            if [ -s /tmp/keep.tsv ]; then
              echo "<details><summary>Kept branches ($KEEP_COUNT)</summary>"
              echo ""
              echo "| Branch | Reason | Date | Author |"
              echo "|---|---|---|---|"
              awk -F'\\t' '{printf "| \`%s\` | %s | %s | %s |\\n",$1,$3,$5,$6}' /tmp/keep.tsv
              echo ""
              echo "</details>"
            fi
          } >> "$GITHUB_STEP_SUMMARY"
\`\`\`\`
`},{slug:"ai-weekly-engineering-reviews",title:"I built an AI that writes weekly engineering summaries. Then I had to decide whether I should.",description:"Aggregating git and Jira into per-person weekly summaries with an LLM is a weekend project. Doing it responsibly — private, descriptive, transparent — is the actual work.",date:"2026-06-09",readTime:"8 min read",tags:["AI in Development","Engineering Leadership","Team Management","Automation"],content:`
# I built an AI that writes weekly engineering summaries. Then I had to decide whether I should.

*Subtitle: Aggregating git and Jira into per-person weekly summaries with an LLM is a weekend project. Deciding how to use it without it becoming surveillance is the actual work.*

*The Self-Driving Repo · Part 9 — AI & People (flagship)*

![Private, per-engineer weekly summary cards routed individually](/article-images/ai-weekly-engineering-reviews-hero.webp)

---

This is the workflow I hesitated to write about, because it's the one most likely to be misunderstood — and the one where the engineering was genuinely the easy part.

Every Sunday, a job aggregates the week's git activity and issue-tracker tickets for each engineer, compares it to the previous week, and uses an LLM to write a short, personalized summary that gets delivered privately to each person — in their own language. It also updates a stats table in the repo's README.

Read that back and you can hear two very different reactions. One: "great, automated visibility into team contributions." The other: "that's surveillance with a friendly font." Both are correct, and which one it actually becomes depends entirely on choices that have nothing to do with code. So this post is half engineering, half the harder thing: how to build something this powerful *responsibly* — or whether to point it at people at all.

An AI weekly engineering review is a scheduled job that every Sunday aggregates each engineer's git activity (commits, files, insertions/deletions, change types, deduped by commit hash across name aliases) and issue-tracker tickets pulled via REST API, computes a **week-over-week comparison** into a structured JSON blob, then has an LLM translate those numbers into a short, warm, localized paragraph routed *privately* to that person. Here's how to do it responsibly: the prompt enforces strict guardrails — **no raw identifiers** (ticket IDs, commit hashes, PR numbers), a few singular sentences instead of a bulleted scorecard, strengths plus one supportive growth point, and the team's own language. Each summary goes individually, never to a public channel that becomes a leaderboard; a non-ranking contributions table updates the \`README\`. The principle: metrics describe, they never rank; private by default; transparent, not surveillance; and the tool stays subordinate to a human lead who already pays attention.

## What problem do AI weekly engineering summaries solve?

On a busy team, two real needs go chronically unmet:

1. **Contribution is invisible.** Quiet, high-impact work goes unseen; loud, low-impact work gets noticed. A lead working from vibes will misjudge both.
2. **Feedback is sporadic.** Most engineers get meaningful individual feedback a couple of times a year, in review season, about a period nobody remembers clearly.

The honest goal was a gentle, regular signal — a "here's what your week looked like, nice work on X, maybe watch Y" — at a cadence no human lead can sustain across a whole team by hand.

And right next to that honest goal sits the trap: the same machinery, pointed slightly differently, becomes a ranking engine that reduces people to commit counts. Holding both of those in view at once is the entire job.

## The idea

A scheduled workflow that, per engineer:

- aggregates **two data sources** — git (commits, files, insertions/deletions, change types) and the issue tracker (tickets resolved, in progress, updated),
- computes a **week-over-week comparison**,
- has an **LLM turn the numbers into a short, human, localized paragraph**,
- and **routes each summary privately** to that person.

\`\`\`yaml
on:
  schedule:
    - cron: '0 6 * * 0'    # Sunday 06:00 UTC
\`\`\`

## How it works (the easy part)

![Flow: git and issue-tracker data merged into per-person two-week stats, summarized by a constrained LLM, routed privately](/article-images/ai-weekly-engineering-reviews-diagram.webp)

### Aggregate two noisy sources into clean per-person stats

Git is the messier source. People commit under multiple names and emails, so each person maps to a set of aliases, and the script dedupes commits by hash across them. It buckets commit subjects into types (fix / feat / chore / refactor) and sums the diffstat — for the current week *and* the previous one, so every number has a comparison:

\`\`\`bash
git log --all --no-merges --author="$alias" \\
  --since="$WEEK_AGO" --until="$TODAY" --format="%H|%s"
# dedupe by hash, classify subject, sum files/insertions/deletions
\`\`\`

The issue tracker fills in the other half — what shipped, what's in flight — pulled per person via its REST API and reduced to per-assignee counts with \`jq\`. The output of this stage is a compact, structured JSON blob per engineer: this week vs last week, across both sources. Boring, deterministic, debuggable. This is 90% of the workflow and 100% of the part I'd call "solved."

### Let the LLM do the one thing it's uniquely good at

Numbers don't motivate anyone. "12 commits, +1,400/−300" is a fact, not feedback. The LLM's only job is translation — turning the structured stats into a few warm, specific sentences, in the team's own language, with the week-over-week trend made human ("busier week than last, mostly bug-fixing — nice").

The model gets the stats and a strict set of rules about tone, length, and what *not* to do. The guardrails I put in the prompt are the interesting part, and every one of them is an ethical choice wearing an engineering hat:

- **No raw identifiers.** It must not quote ticket IDs, commit hashes, or PR numbers. The summary is about the shape of the week, not a paper trail.
- **Short and singular.** A few sentences, one voice, no bulleted scorecard. The format resists "ranking" by construction.
- **Strengths *and* a growth point**, phrased supportively. Never a verdict.
- **Localized.** Delivered in the language the team actually speaks, because feedback should feel personal, not like a system log.

Then each summary is routed **privately to the individual** — not dumped in a public channel where it implicitly becomes a leaderboard. Delivery is per-person, with the numbers and the paragraph kept as separate fields so presentation stays clean.

### Update the shared stats table

Separately, an aggregate (non-ranking) contributions table in the README is regenerated and committed. Note one self-referential detail: this commit has to pass the very guardrails from Part 1 of this series, so it carries the explicit opt-out flag — the automation plays by the same rules it enforces on everyone else.

## What it bought us — and the part that isn't about code

The engineering delivered exactly what I described: regular, specific, localized summaries at a cadence no human could match. 8 summaries a week, zero manual effort.

But "what it bought us" is the wrong frame for this one, so let me switch to the frame that matters.

## How do you build AI engineering reviews responsibly?

If you build this, you are now holding a tool that can quietly corrode trust. Here's the discipline I hold myself to. Take it as the real content of this post.

**1. Metrics describe; they never rank.** The moment per-person commit counts become a scoreboard, you've taught your team that the goal is commits — and you'll get more, smaller, emptier commits. That's Goodhart's Law, not a hypothesis. These numbers are a conversation starter for a human lead, never an input to compensation, stack-ranking, or who's "underperforming." If you can't commit to that, don't build it.

**2. Private by default.** A summary delivered to *you* about *your* week is supportive. The same summary in a public channel is a comparison nobody consented to. Route individually. Never broadcast individual stats.

**3. The numbers lie about the work that matters most.** Mentoring, design review, unblocking three teammates, the careful 5-line fix that prevented an outage — git can't see any of it. A reviewer who leaves brilliant comments shows up as "low activity." If you ever let this tool's view of a person override your own, you will reward the wrong things and punish your best people. The diffstat is the least important part of engineering; the tool only sees the diffstat.

**4. Transparency, not surveillance.** Everyone knows it exists, knows exactly what it measures, and knows it isn't feeding their performance review. A measurement people don't know about is monitoring. A measurement people understand and can see is a shared dashboard. Be the second thing, loudly.

**5. The lead stays in the loop.** This *augments* a lead who already pays attention; it doesn't replace one. If you're using it to *avoid* knowing your team, the tool has become a liability and so have you.

I'll be honest that reasonable people land in different places on whether to point any automated measurement at individuals at all. I built it as private, supportive, non-ranking, and transparent, and under those constraints I think it earns its keep. Loosen any one of those constraints and I'd tear it out. That line — not the \`jq\` — is the engineering judgment this workflow is really about.

## Gotchas & trade-offs

- **Goodhart's Law is the default outcome, not a risk.** Optimize for any visible metric and you'll get the metric and lose the intent. Guard against it actively or don't measure.
- **Alias mapping is fragile and consequential.** Miss one of someone's commit emails and you under-count *that specific person* — a quietly unfair bug. Audit the mapping.
- **LLM tone needs a tight leash.** Without firm rules an automated reviewer drifts into either hollow praise or unearned criticism. Constrain hard; spot-check output.
- **Localization adds review burden.** Generating feedback in another language means you must actually verify the tone lands right there — don't ship feedback you can't read.
- **This can erode trust faster than any other automation in the series.** Every other workflow touches code. This one touches people. That asymmetry deserves more caution than the code does, and it's why this is the last episode, not the first.

## Takeaway

The engineering here — aggregate two sources, diff two weeks, have an LLM phrase it, route it privately — is a weekend. The judgment is the job: keep it descriptive not ranked, private not public, transparent not covert, and subordinate to a human who actually pays attention. Point AI at people and the question stops being "can I build this?" and becomes "*should* I, and under what constraints?" If you can't answer the second question crisply, the right move is to not build it. That restraint is the most senior thing in this entire series.

---

*That's the series — nine workflows that turned a production mobile repo into something that mostly runs itself. If there's a theme across all of it, it's this: good automation is cowardly, transparent, and reversible, and the best engineering judgment is often knowing where to stop. Thanks for reading along.*

## The complete workflow

Here is the full, genericized workflow — drop it into \`.github/workflows/\` and replace the placeholders (\`your-org\`, the \`PROJ\` project key, \`<@DISCORD_USER_ID>\`, the example team, and the secret names) with your own.

### \`.github/workflows/update-team-stats.yml\`

\`\`\`\`yaml
name: Update Team Stats

on:
  schedule:
    - cron: '0 6 * * 0'
  workflow_dispatch:
    inputs:
      days:
        description: 'Number of days for README stats'
        required: false
        default: '7'

concurrency:
  group: update-team-stats
  cancel-in-progress: true

permissions:
  contents: write
  pull-requests: read
  id-token: write

jobs:
  update-readme:
    runs-on: ubuntu-slim
    timeout-minutes: 25
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Collect team stats for README
        run: chmod +x tools/update_readme_team.sh && ./tools/update_readme_team.sh \${{ inputs.days || '7' }}
        env:
          GH_TOKEN: \${{ secrets.GITHUB_TOKEN }}

      - name: Collect Jira stats
        continue-on-error: true
        run: |
          JIRA_BASE="https://your-org.atlassian.net"
          AUTH=$(printf '%s:%s' "$JIRA_EMAIL" "$JIRA_API_TOKEN" | base64 -w 0)

          jira_search() {
            local jql="$1"
            local encoded
            encoded=$(jq -rn --arg q "$jql" '$q|@uri')
            local result
            result=$(curl -sf \\
              -H "Authorization: Basic \${AUTH}" \\
              -H "Accept: application/json" \\
              "\${JIRA_BASE}/rest/api/3/search/jql?jql=\${encoded}&fields=assignee,summary,issuetype,status,resolutiondate,priority,updated&maxResults=100" 2>/dev/null) || result='{"issues":[]}'
            echo "$result"
          }

          jira_search "project = PROJ AND resolutiondate >= -7d ORDER BY resolutiondate DESC" > .tmp_jira_r.json
          jira_search "project = PROJ AND statusCategory = 'In Progress' ORDER BY assignee" > .tmp_jira_p.json
          jira_search "project = PROJ AND updated >= -7d ORDER BY updated DESC" > .tmp_jira_u.json

          jq -s '{
            resolved: {
              total: ((.[0].issues // []) | length),
              by_person: [(.[0].issues // []) | group_by(.fields.assignee.displayName // "Unassigned")[] | {
                assignee: (.[0].fields.assignee.displayName // "Unassigned"),
                count: length,
                tickets: [.[] | {key: .key, summary: .fields.summary, type: .fields.issuetype.name, priority: (.fields.priority.name // "None")}]
              }] | sort_by(-.count)
            },
            in_progress: {
              total: ((.[1].issues // []) | length),
              by_person: [(.[1].issues // []) | group_by(.fields.assignee.displayName // "Unassigned")[] | {
                assignee: (.[0].fields.assignee.displayName // "Unassigned"),
                count: length,
                tickets: [.[] | {key: .key, summary: .fields.summary, type: .fields.issuetype.name}]
              }] | sort_by(-.count)
            },
            updated: {
              total: ((.[2].issues // []) | length),
              by_person: [(.[2].issues // []) | group_by(.fields.assignee.displayName // "Unassigned")[] | {
                assignee: (.[0].fields.assignee.displayName // "Unassigned"),
                count: length,
                tickets: [.[] | {key: .key, summary: .fields.summary, type: .fields.issuetype.name, status: .fields.status.name}]
              }] | sort_by(-.count)
            }
          }' .tmp_jira_r.json .tmp_jira_p.json .tmp_jira_u.json > .tmp_jira_stats.json

          rm -f .tmp_jira_r.json .tmp_jira_p.json .tmp_jira_u.json
          echo "Jira: $(jq '.resolved.total' .tmp_jira_stats.json) resolved, $(jq '.in_progress.total' .tmp_jira_stats.json) in progress, $(jq '.updated.total' .tmp_jira_stats.json) updated"
        env:
          JIRA_EMAIL: \${{ secrets.JIRA_EMAIL }}
          JIRA_API_TOKEN: \${{ secrets.JIRA_API_TOKEN }}

      - name: Collect git comparison stats
        run: |
          set -euo pipefail

          TODAY=$(date -u +%Y-%m-%d)
          WEEK_AGO=$(date -u -d '-7 days' +%Y-%m-%d 2>/dev/null || date -u -v-7d +%Y-%m-%d)
          TWO_WEEKS_AGO=$(date -u -d '-14 days' +%Y-%m-%d 2>/dev/null || date -u -v-14d +%Y-%m-%d)

          declare -a MEMBERS=(
            "Alex Rivera|your-maintainer,Alex Rivera,your-maintainer"
            "Sam Chen|schen,Sam Chen,schen"
            "Jordan Park|jpark,Jordan Park,Jordan"
            "Casey Kim|ckim,Casey Kim"
            "Riley Diaz|rdiaz,Riley Diaz,Riley Diaz"
          )

          collect_week() {
            local since="$1" until="$2" aliases="$3"
            local commits=0 files=0 adds=0 dels=0 merges=0
            local fix=0 feat=0 chore=0 refactor=0 other_cat=0
            local seen_file=$(mktemp)
            local subjects_file=$(mktemp)
            local raw_file=$(mktemp)

            IFS=',' read -ra alias_arr <<< "$aliases"
            for alias in "\${alias_arr[@]}"; do
              git log --exclude='refs/heads/entire/*' --exclude='refs/remotes/*/entire/*' \\
                --all --no-merges --author="$alias" --since="$since" --until="$until" \\
                --format="%H|%s" 2>/dev/null | grep -vi "checkpoint" | grep -vi "update team stats" >> "$raw_file" || true
            done

            while IFS='|' read -r hash subject; do
              [[ -z "$hash" ]] && continue
              if ! grep -qx "$hash" "$seen_file" 2>/dev/null; then
                echo "$hash" >> "$seen_file"
                commits=$((commits + 1))
                echo "$subject" >> "$subjects_file"
              fi
            done < "$raw_file"

            if [ "$commits" -gt 0 ]; then
              local hashes
              hashes=$(cat "$seen_file")
              while IFS= read -r h; do
                local stat
                stat=$(git show --shortstat --format="" "$h" 2>/dev/null || true)
                if [ -n "$stat" ]; then
                  local f=$(echo "$stat" | sed -n 's/^ *\\([0-9]*\\) file.*/\\1/p')
                  local a=$(echo "$stat" | sed -n 's/.* \\([0-9]*\\) insertion.*/\\1/p')
                  local d=$(echo "$stat" | sed -n 's/.* \\([0-9]*\\) deletion.*/\\1/p')
                  files=$((files + \${f:-0}))
                  adds=$((adds + \${a:-0}))
                  dels=$((dels + \${d:-0}))
                fi
              done <<< "$hashes"
            fi

            for alias in "\${alias_arr[@]}"; do
              local m
              m=$(git log --exclude='refs/heads/entire/*' --exclude='refs/remotes/*/entire/*' \\
                --all --author="$alias" --since="$since" --until="$until" \\
                --merges --pretty=format:"%H" 2>/dev/null | wc -l | tr -d ' ')
              merges=$((merges + \${m:-0}))
            done

            if [ -s "$subjects_file" ]; then
              fix=$(grep -ci "^fix" "$subjects_file" 2>/dev/null) || true
              fix=\${fix:-0}
              feat=$(grep -ci "^feat" "$subjects_file" 2>/dev/null) || true
              feat=\${feat:-0}
              chore=$(grep -ci "^chore" "$subjects_file" 2>/dev/null) || true
              chore=\${chore:-0}
              refactor=$(grep -ci "^refactor" "$subjects_file" 2>/dev/null) || true
              refactor=\${refactor:-0}
              other_cat=$((commits - fix - feat - chore - refactor))
              [ "$other_cat" -lt 0 ] && other_cat=0
            fi

            rm -f "$seen_file" "$subjects_file" "$raw_file"
            printf '{"commits":%d,"files":%d,"insertions":%d,"deletions":%d,"merges":%d,"categories":{"fix":%d,"feat":%d,"chore":%d,"refactor":%d,"other":%d}}' \\
              "$commits" "$files" "$adds" "$dels" "$merges" "$fix" "$feat" "$chore" "$refactor" "$other_cat"
          }

          AUTHORS_JSON="[]"
          for member in "\${MEMBERS[@]}"; do
            IFS='|' read -r name aliases <<< "$member"

            cw=$(collect_week "$WEEK_AGO" "$TODAY" "$aliases")
            pw=$(collect_week "$TWO_WEEKS_AGO" "$WEEK_AGO" "$aliases")

            cw_commits=$(echo "$cw" | jq '.commits')
            pw_commits=$(echo "$pw" | jq '.commits')
            if [ "$cw_commits" -eq 0 ] && [ "$pw_commits" -eq 0 ]; then
              continue
            fi

            AUTHORS_JSON=$(echo "$AUTHORS_JSON" | jq \\
              --arg name "$name" --argjson cw "$cw" --argjson pw "$pw" \\
              '. + [{name: $name, current_week: $cw, previous_week: $pw}]')
          done

          AUTHORS_JSON=$(echo "$AUTHORS_JSON" | jq 'sort_by(-.current_week.commits)')

          jq -n \\
            --arg cw_from "$WEEK_AGO" --arg cw_to "$TODAY" \\
            --arg pw_from "$TWO_WEEKS_AGO" --arg pw_to "$WEEK_AGO" \\
            --argjson authors "$AUTHORS_JSON" \\
            '{
              date_ranges: {
                current_week: {from: $cw_from, to: $cw_to},
                previous_week: {from: $pw_from, to: $pw_to}
              },
              authors: $authors
            }' > .tmp_git_stats.json

          echo "Git stats collected for $(echo "$AUTHORS_JSON" | jq 'length') authors"
          cat .tmp_git_stats.json

      - name: Configure Claude Code permissions
        shell: bash
        run: |
          mkdir -p .claude
          cat > .claude/settings.local.json <<'SETTINGS_EOF'
          {
            "permissions": {
              "allow": [
                "Read(*)", "Write(*)", "Bash(*)", "Glob(*)", "Grep(*)"
              ]
            },
            "hooks": {}
          }
          SETTINGS_EOF
          if [ -f .claude/settings.json ]; then
            cp .claude/settings.json .claude/settings.json.bak
            jq '.hooks = {}' .claude/settings.json > .claude/settings.json.tmp && mv .claude/settings.json.tmp .claude/settings.json
          fi

      - name: Generate personalized team messages
        id: claude
        continue-on-error: true
        uses: anthropics/claude-code-action@v1
        env:
          ANTHROPIC_BASE_URL: https://api.your-llm-provider.com
        with:
          anthropic_api_key: \${{ secrets.LLM_API_KEY }}
          claude_args: '--model your-model-id --max-turns 10'
          show_full_output: true
          prompt: |
            You are a tech lead generating personalized weekly review messages for each team member.

            ## Input Data

            Read these two files:
            1. \`.tmp_git_stats.json\` — Pre-collected git stats for current and previous week per author, including:
               - \`date_ranges\`: current_week and previous_week date ranges
               - \`authors[]\`: each with \`name\`, \`current_week\` and \`previous_week\` stats:
                 - \`commits\`, \`files\`, \`insertions\`, \`deletions\`, \`merges\`
                 - \`categories\`: \`fix\`, \`feat\`, \`chore\`, \`refactor\`, \`other\` (commit type breakdown)
            2. \`.tmp_jira_stats.json\` — Jira ticket data (may be missing/empty — skip Jira if so):
               - \`resolved\`: tickets resolved in the last week, grouped by assignee
               - \`in_progress\`: tickets currently in progress, grouped by assignee
               - \`updated\`: tickets updated in the last week, grouped by assignee

            ## Team Mapping (Name → Role + Discord)
            CRITICAL: Each person has a unique Discord ID. Do NOT mix them up.

            | Name                | Role                        | Discord mention        |
            |---------------------|-----------------------------|------------------------|
            | Alex Rivera    | Mobile TL / Release Captain | <@DISCORD_USER_ID> |
            | Sam Chen       | CTO                         | <@DISCORD_USER_ID> |
            | Jordan Park   | Sr. Flutter Dev             | <@DISCORD_USER_ID> |
            | Casey Kim | Mid Flutter Dev             | <@DISCORD_USER_ID>  |
            | Riley Diaz       | Mid Flutter Dev             | <@DISCORD_USER_ID>  |
            | Morgan Yu      | Sr. QA Engineer             | <@DISCORD_USER_ID> |
            | Taylor Cruz     | QA Engineer                 | <@DISCORD_USER_ID> |
            | Jamie Okafor           | Sr. Backend Dev             | <@DISCORD_USER_ID> |

            Match Jira \`assignee\` display names to the Name column above. Never use the same Discord mention for two people.

            ## Message Rules

            ### Language:
            1. Language: English — warm, natural, and conversational.
            2. Use plain technical terms as-is (commit, bug, crash, feature, merge, ticket, repository).
            3. Keep proper nouns as-is.

            ### ⚠️ DO NOT mention:
            - Jira ticket IDs (e.g. PROJ-XXXXX)
            - Commit hashes or PR numbers
            - Exact commit messages
            - Do NOT list examples of commits or tickets
            - Do NOT go into low-level technical details

            ### What to include in each message:
            - High-level summary of this week's contribution using the \`categories\` breakdown (bugs, features, chores, refactoring)
            - Week-over-week comparison with concrete numbers (e.g. "you made X commits this week vs Y last week" or a percentage change)
            - General impact (performance, stability, user experience)
            - Work quality assessment
            - One or two key strengths
            - One clear improvement point

            ### Writing Style:
            - One single natural paragraph (NO sections, NO bullet points)
            - SHORT: 4–6 lines max per person
            - No repetition, no over-explaining

            ### Evaluation — must include the assessment INSIDE the sentence:
            - "Honestly, my read on where you're at is... because..."
            - "I think you're in great shape because..."
            - "The closest call is you need to push a bit more because..."

            ### Week-over-Week Comparison:
            - Compare: commit count, files changed, lines added/deleted
            - Use natural phrasing:
              - "This week was better than last — your commits went up from X to Y"
              - "A slight dip this week compared to last"
              - "Steady and consistent — about the same level"
            - 0 commits last week → active this week: highlight return
            - Active last week → 0 this week: note the drop

            ### Special Rules:
            - Alex Rivera → strong praise + still add one improvement point

            ## Output

            Write \`.tmp_discord_messages.json\` as a JSON array. Each element:
            \`\`\`json
            {
              "mention": "<@discord_id>",
              "name": "Person Name",
              "stats": "X commits | Y files changed | +Z / -W lines | vs last week: ↑/↓/→",
              "body": "message paragraph here without wrapping quotes"
            }
            \`\`\`

            IMPORTANT format notes:
            - Do NOT include the person's name in stats or body (the Discord mention already shows it)
            - \`stats\` is just the numbers line — no bold, no parentheses, no name
            - \`body\` is the evaluation paragraph — no quotes wrapping it
            - stats and body are SEPARATE fields, not combined

            Order by current week commit volume (highest first).
            Only include team members who had activity in at least one of the two weeks (git OR Jira).
            Write ONLY \`.tmp_discord_messages.json\`. No other output files.

      - name: Send individual messages to Discord
        shell: bash
        run: |
          if [ -z "$DISCORD_WEBHOOK_URL" ]; then
            echo "::warning::DISCORD_WEBHOOK_URL not configured, skipping"
            exit 0
          fi

          if [ ! -f .tmp_discord_messages.json ] || [ ! -s .tmp_discord_messages.json ]; then
            echo "::warning::No messages generated, sending fallback"
            MSG=$(printf '📊 **Team Stats Updated**\\nCheck the latest stats: https://github.com/%s#team-members' "\${{ github.repository }}")
            PAYLOAD=$(jq -n --arg content "$MSG" '{content: $content}')
            curl -f -X POST -H "Content-Type: application/json" -d "$PAYLOAD" "$DISCORD_WEBHOOK_URL" || echo "::warning::Discord notification failed"
            exit 0
          fi

          COUNT=$(jq 'length' .tmp_discord_messages.json)
          echo "Sending $COUNT individual messages to Discord..."

          for i in $(seq 0 $((COUNT - 1))); do
            MENTION=$(jq -r ".[$i].mention" .tmp_discord_messages.json)
            NAME=$(jq -r ".[$i].name" .tmp_discord_messages.json)
            STATS=$(jq -r ".[$i].stats" .tmp_discord_messages.json)
            BODY=$(jq -r ".[$i].body" .tmp_discord_messages.json)

            FULL_MSG=$(printf '%s\\n%s\\n\\n%s' "$MENTION" "$STATS" "$BODY")

            PAYLOAD=$(jq -n --arg content "$FULL_MSG" '{content: $content}')
            if curl -f -X POST -H "Content-Type: application/json" -d "$PAYLOAD" "$DISCORD_WEBHOOK_URL"; then
              echo "Sent message for $NAME"
            else
              echo "::warning::Failed to send message for $NAME"
            fi

            if [ $i -lt $((COUNT - 1)) ]; then
              sleep 2
            fi
          done
        env:
          DISCORD_WEBHOOK_URL: \${{ secrets.DISCORD_WEBHOOK_URL }}

      - name: Cleanup temp files
        run: git checkout -- .claude/ 2>/dev/null || true && rm -f .tmp_jira_stats.json .tmp_discord_messages.json .tmp_git_stats.json

      - name: Commit README changes
        env:
          GH_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        run: |
          git config user.name "Alex Rivera"
          git config user.email "bot@users.noreply.github.com"
          git remote set-url origin "https://x-access-token:\${GH_TOKEN}@github.com/\${{ github.repository }}.git"
          git add README.md
          git diff --staged --quiet && echo "No changes" && exit 0
          git commit -m "chore: update team stats --skip-protection"
          git pull --rebase origin master
          git push
\`\`\`\`
`}];function Aa(e){return on.find(t=>t.slug===e)}const Ou="Abdelrahman Saed",aa="https://bnsaed.com",Du="https://avatars.githubusercontent.com/u/33700292?v=4&s=512",qr={"@type":"Person","@id":`${aa}/#person`,name:Ou,alternateName:["binSaed","Abdelrahman Saeed","عبدالرحمن سعيد"],url:aa,image:Du,jobTitle:"Senior / Lead Mobile Engineer",description:"Senior / Lead Mobile Engineer with 7 years shipping production Flutter apps for iOS and Android to 5M+ users — Flutter, Dart, BLoC/Cubit, Clean Architecture, and release engineering.",email:"me@bnsaed.com",worksFor:{"@type":"Organization","@id":`${aa}/#istoria`,name:"iStoria",url:"https://istoria.app/en"},address:{"@type":"PostalAddress",addressLocality:"Cairo",addressCountry:"EG"},knowsLanguage:["English","Arabic"],sameAs:["https://github.com/binSaed","https://www.linkedin.com/in/binsaed/","https://stackoverflow.com/users/11001850/abdelrahman-saed","https://pub.dev/publishers/bnsaed.com/packages"]},Br={Flutter:"https://www.wikidata.org/wiki/Q39072787",Dart:"https://www.wikidata.org/wiki/Q406009",PDF:"https://www.wikidata.org/wiki/Q42332","GitHub Actions":"https://www.wikidata.org/wiki/Q97185096",DevOps:"https://www.wikidata.org/wiki/Q3025536","CI/CD":"https://www.wikidata.org/wiki/Q28136854",Jira:"https://www.wikidata.org/wiki/Q1359246",Git:"https://www.wikidata.org/wiki/Q186055","Code Review":"https://www.wikidata.org/wiki/Q1342704",Automation:"https://www.wikidata.org/wiki/Q184199","AI in Development":"https://www.wikidata.org/wiki/Q11660"};function Lu(e){const t=e.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/```[\s\S]*?```/g,"").split(`
`);for(let n of t){if(n=n.trim(),!n||/^#{1,6}\s/.test(n)||/^>/.test(n)||/^!\[/.test(n)||/^-{3,}$/.test(n)||/^[-*]\s/.test(n)||/^\*[^*].*\*$/.test(n)||(n=n.replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g,"$1").trim(),!n))continue;const a=n.match(/^.*?[.!?](?=\s|$)/);return(a?a[0]:n).trim()}return""}function Mu(e){return e.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/```[\s\S]*?```/g," ").replace(/!\[[^\]]*\]\([^)]*\)/g," ").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*]\s+/gm,"").replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g,"$1").replace(/\s+/g," ").trim()}function ch(e,t,n){const a=e.tags.filter(d=>Br[d]).map(d=>({"@type":"Thing",name:d,sameAs:Br[d]})),r=Mu(e.content),o=`${e.title} ${e.description} ${r}`.toLowerCase(),i=a.filter(d=>o.includes(d.name.toLowerCase())),l=r?r.split(/\s+/).filter(Boolean).length:0,u=Lu(e.content);return{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,image:n,inLanguage:"en",datePublished:e.date,dateModified:e.dateModified??e.date,author:qr,publisher:qr,...a.length?{about:a}:{},...i.length?{mentions:i}:{},...l?{wordCount:l}:{},...u?{articleBody:u}:{},mainEntityOfPage:{"@type":"WebPage","@id":t},url:t,keywords:e.tags.join(", ")}}const Ao=[{id:"self-driving-repo",name:"The Self-Driving Repo",description:"A CI/CD automation series: small GitHub Actions that run the boring, error-prone parts of engineering — guardrails, PR hygiene, a merge-conflict radar, safe cleanup — so releases stay calm.",slugs:["github-actions-branch-protection-guardrails","automate-pull-request-hygiene","sync-jira-with-github-prs","auto-rebase-and-detect-merge-conflicts","bot-that-resolves-merge-conflicts","automated-stale-branch-cleanup","ai-weekly-engineering-reviews"]}];function Fu(e){return Ao.find(t=>t.slugs.includes(e))}function dh(e){const t=Fu(e);if(!t)return;const n=t.slugs.indexOf(e),a=n>0?t.slugs[n-1]:void 0,r=n<t.slugs.length-1?t.slugs[n+1]:void 0;return{series:t,index:n,total:t.slugs.length,prev:a?Aa(a):void 0,next:r?Aa(r):void 0}}function uh(){const e=new Set(Ao.flatMap(t=>t.slugs));return on.filter(t=>!e.has(t.slug)).sort((t,n)=>n.date.localeCompare(t.date))}const Uu=["flutter-cached-pdfview-guide","bot-that-resolves-merge-conflicts","ai-weekly-engineering-reviews","automate-pull-request-hygiene"];function hh(e=4){const t=Uu.map(r=>Aa(r)).filter(r=>!!r);if(t.length>=e)return t.slice(0,e);const n=new Set(t.map(r=>r.slug)),a=[...on].sort((r,o)=>o.date.localeCompare(r.date)).filter(r=>!n.has(r.slug));return[...t,...a].slice(0,e)}const Gr=["home","about","projects","articles","skills","contact"],ie={owner:"Abdelrahman Saed",alias:"binSaed",email:"me@bnsaed.com",url:"https://bnsaed.com",github:"https://github.com/binSaed",linkedin:"https://www.linkedin.com/in/binsaed/",cv:"https://bnsaed.com/CV/cv.pdf"};function Hu(){const e=us();h.useEffect(()=>{if(typeof navigator>"u"||!navigator.modelContext)return;const t=navigator.modelContext,n=[],a=[{name:"navigate_to_section",title:"Scroll to a section",description:"Navigate the homepage to one of its anchor sections: home, about, projects, articles, skills, or contact.",inputSchema:{type:"object",properties:{section:{type:"string",enum:Gr,description:"The section anchor to scroll to."}},required:["section"]},execute:async r=>{const o=String(r.section??"");return Gr.includes(o)?(e(o==="home"?"/":`/#${o}`),{ok:!0,section:o}):{ok:!1,error:`Unknown section: ${o}`}}},{name:"list_articles",title:"List published articles",description:"Return the slug, title, description, date, and tags for every article published on bnsaed.com.",inputSchema:{type:"object",properties:{}},execute:async()=>on.map(r=>({slug:r.slug,title:r.title,description:r.description,date:r.date,readTime:r.readTime,tags:r.tags,url:`${ie.url}/articles/${r.slug}/`}))},{name:"open_article",title:"Open an article",description:"Navigate to a specific article by slug. Use list_articles first to discover valid slugs.",inputSchema:{type:"object",properties:{slug:{type:"string",description:"Article slug, e.g. 'flutter-cached-pdfview-guide'."}},required:["slug"]},execute:async r=>{const o=String(r.slug??""),i=on.find(l=>l.slug===o);return i?(e(`/articles/${o}/`),{ok:!0,url:`${ie.url}/articles/${o}/`,title:i.title}):{ok:!1,error:`No article with slug '${o}'`}}},{name:"get_contact_info",title:"Get contact details",description:"Return the preferred ways to contact Abdelrahman Saed (email, GitHub, LinkedIn, contact form URL).",inputSchema:{type:"object",properties:{}},execute:async()=>({name:ie.owner,alias:ie.alias,email:ie.email,mailto:`mailto:${ie.email}`,contactForm:`${ie.url}/#contact`,github:ie.github,linkedin:ie.linkedin,preferredChannel:"email"})},{name:"compose_email",title:"Open a pre-filled email",description:"Open the user's mail client with a pre-filled email to Abdelrahman Saed. Use this instead of submitting the contact form programmatically.",inputSchema:{type:"object",properties:{subject:{type:"string",description:"Email subject line."},body:{type:"string",description:"Email body, plain text."}},required:["subject"]},execute:async r=>{const o=encodeURIComponent(String(r.subject??"")),i=encodeURIComponent(String(r.body??"")),l=`mailto:${ie.email}?subject=${o}&body=${i}`;return window.location.href=l,{ok:!0,mailto:l}}},{name:"download_cv",title:"Download the CV",description:"Open the PDF CV of Abdelrahman Saed in a new tab.",inputSchema:{type:"object",properties:{}},execute:async()=>(window.open(ie.cv,"_blank","noopener,noreferrer"),{ok:!0,url:ie.cv})},{name:"get_site_metadata",title:"Get site metadata",description:"Return identity and discovery metadata for bnsaed.com: owner, URL, well-known endpoints, and current page.",inputSchema:{type:"object",properties:{}},execute:async()=>({owner:ie.owner,alias:ie.alias,url:ie.url,currentPath:window.location.pathname+window.location.hash,wellKnown:{apiCatalog:`${ie.url}/.well-known/api-catalog`,agentSkills:`${ie.url}/.well-known/agent-skills/index.json`,mcpServerCard:`${ie.url}/.well-known/mcp/server-card.json`,robots:`${ie.url}/robots.txt`,sitemap:`${ie.url}/sitemap.xml`},contentSignal:{search:"yes","ai-input":"yes","ai-train":"no"}})}];try{for(const r of a){const o=t.registerTool(r);o&&typeof o.unregister=="function"&&n.push(o)}}catch{}return()=>{for(const r of n)try{r.unregister()}catch{}}},[e])}const qu=h.lazy(()=>le(()=>import("./ArticlePage-QZnOBAWr.js"),__vite__mapDeps([18,1,2,8,19,17,20,15]))),Bu=h.lazy(()=>le(()=>import("./ArticlesPage-DouMTKhA.js"),__vite__mapDeps([21,1,2,17,20]))),Gu=h.lazy(()=>le(()=>import("./RecommendationsPage-DnV_hh26.js"),__vite__mapDeps([22,1,2,17,12,3,6,20]))),zu=h.lazy(()=>le(()=>import("./ProjectsPage-DpkybmUX.js"),__vite__mapDeps([23,1,2,17,5,3,6,20]))),Ju=h.lazy(()=>le(()=>import("./CaseStudiesPage-Ca8oPoi8.js"),__vite__mapDeps([24,1,2,17,7,8,3,6,20]))),Wu=h.lazy(()=>le(()=>import("./CaseStudyPage-THEFzTQS.js"),__vite__mapDeps([25,1,2,8,17,19,20,11,15]))),Vu=new lc,Ku=()=>(Hu(),null),Qu=()=>{const{pathname:e,hash:t}=$a();return h.useLayoutEffect(()=>{t||window.scrollTo(0,0)},[e,t]),null},Yu=()=>s.jsx(Vs,{children:s.jsx(mc,{client:Vu,children:s.jsxs(Bl,{children:[s.jsx("div",{className:"grain-overlay","aria-hidden":"true"}),s.jsx(Iu,{}),s.jsx(dl,{}),s.jsx(ql,{}),s.jsx(Zo,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:s.jsxs(dd,{children:[s.jsx(Ku,{}),s.jsx(Qu,{}),s.jsx(h.Suspense,{fallback:s.jsx("div",{className:"min-h-screen bg-background"}),children:s.jsxs(ei,{children:[s.jsx(Je,{path:"/",element:s.jsx($u,{})}),s.jsx(Je,{path:"/articles",element:s.jsx(Bu,{})}),s.jsx(Je,{path:"/articles/:slug",element:s.jsx(qu,{})}),s.jsx(Je,{path:"/recommendations",element:s.jsx(Gu,{})}),s.jsx(Je,{path:"/projects",element:s.jsx(zu,{})}),s.jsx(Je,{path:"/case-studies",element:s.jsx(Ju,{})}),s.jsx(Je,{path:"/case-studies/:slug",element:s.jsx(Wu,{})}),s.jsx(Je,{path:"*",element:s.jsx(ti,{to:"/",replace:!0})})]})})]})})]})})});hs(document.getElementById("root")).render(s.jsx(Yu,{}));function zr(){le(async()=>{const{default:e}=await import("./module-ChzsIv-w.js");return{default:e}},[]).then(({default:e})=>{e.init("phc_tLT5g9tearUJgGqbyVABjDtBFcFswbb9Brps3U2B8mVc",{api_host:"https://custom.bnsaed.com",ui_host:"https://eu.posthog.com",defaults:"2026-05-30",disable_surveys:!0}),ed(e)})}const Jr=window;typeof Jr.requestIdleCallback=="function"?Jr.requestIdleCallback(zr,{timeout:4e3}):window.setTimeout(zr,2e3);export{gs as A,He as B,Cn as C,cd as D,fi as E,Nn as F,Da as G,md as H,_n as I,Rd as J,La as L,vi as M,Si as P,Ma as S,On as X,dh as a,th as b,Q as c,ch as d,bs as e,fn as f,Aa as g,uh as h,on as i,U as j,Cd as k,Ue as l,id as m,pi as n,oh as o,sh as p,$d as q,ih as r,Ao as s,nh as t,xu as u,kn as v,ah as w,hh as x,rh as y,lh as z};
