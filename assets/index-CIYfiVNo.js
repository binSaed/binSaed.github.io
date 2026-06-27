const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutSection-DLxjty2Z.js","assets/radix-C0ZQseSV.js","assets/react-vendor-GBp8saLZ.js","assets/SectionHeader-DCgZ7DYO.js","assets/ExperienceSection-tBsD2_up.js","assets/ProjectsSection-C17DZcFK.js","assets/arrow-up-right-CajFowxE.js","assets/ArticlesSection-CZy1IKbF.js","assets/SkillsSection-B9mg3tuq.js","assets/RecommendationsSection-DHPxtGKn.js","assets/FAQSection-CmF5t7iL.js","assets/ContactSection-DJWbntQe.js","assets/mail-DGEyCohM.js","assets/Footer-CRP00Oq2.js","assets/ArticlePage-YubK5FW8.js","assets/arrow-left-bRhM87W4.js","assets/ArticlesPage-CfB0R3ZA.js","assets/RecommendationsPage-B_VNLPPP.js","assets/ProjectsPage-BJuutmba.js"])))=>i.map(i=>d[i]);
var Br=Object.defineProperty;var va=e=>{throw TypeError(e)};var zr=(e,t,n)=>t in e?Br(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ce=(e,t,n)=>zr(e,typeof t!="symbol"?t+"":t,n),vn=(e,t,n)=>t.has(e)||va("Cannot "+n);var d=(e,t,n)=>(vn(e,t,"read from private field"),n?n.call(e):t.get(e)),_=(e,t,n)=>t.has(e)?va("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),k=(e,t,n,a)=>(vn(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),O=(e,t,n)=>(vn(e,t,"access private method"),n);var tn=(e,t,n,a)=>({set _(s){k(e,t,s,n)},get _(){return d(e,t,a)}});import{j as o,V as ps,R as ms,A as fs,C as gs,T as bs,D as ys,P as Jr,a as ws,b as Wr,S as Kr,O as hn,c as pn,d as ea,e as mn,f as fn,g as vs,h as xs,i as Vr,k as ks,l as Qr,m as Yr,n as Ts,o as Xr}from"./radix-C0ZQseSV.js";import{a as Zr,r as f,R as w,v as eo,g as ta,u as na,c as Ss,L as xa,B as to,d as no,e as bt,N as ao}from"./react-vendor-GBp8saLZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const so="modulepreload",ro=function(e){return"/"+e},ka={},le=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),i=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(n.map(h=>{if(h=ro(h),h in ka)return;ka[h]=!0;const u=h.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":so,u||(g.as="script"),g.crossOrigin="",g.href=h,i&&g.setAttribute("nonce",i),document.head.appendChild(g),u)return new Promise((y,c)=>{g.addEventListener("load",y),g.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(l){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l}return s.then(l=>{for(const i of l||[])i.status==="rejected"&&r(i.reason);return t().catch(r)})};var Es,Ta=Zr;Es=Ta.createRoot,Ta.hydrateRoot;const oo=1,io=1e6;let xn=0;function lo(){return xn=(xn+1)%Number.MAX_SAFE_INTEGER,xn.toString()}const kn=new Map,Sa=e=>{if(kn.has(e))return;const t=setTimeout(()=>{kn.delete(e),Bt({type:"REMOVE_TOAST",toastId:e})},io);kn.set(e,t)},co=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,oo)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?Sa(n):e.toasts.forEach(a=>{Sa(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===n||n===void 0?{...a,open:!1}:a)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},on=[];let ln={toasts:[]};function Bt(e){ln=co(ln,e),on.forEach(t=>{t(ln)})}function uo({...e}){const t=lo(),n=s=>Bt({type:"UPDATE_TOAST",toast:{...s,id:t}}),a=()=>Bt({type:"DISMISS_TOAST",toastId:t});return Bt({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:s=>{s||a()}}}),{id:t,dismiss:a,update:n}}function ho(){const[e,t]=f.useState(ln);return f.useEffect(()=>(on.push(t),()=>{const n=on.indexOf(t);n>-1&&on.splice(n,1)}),[e]),{...e,toast:uo,dismiss:n=>Bt({type:"DISMISS_TOAST",toastId:n})}}function _s(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=_s(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function Rs(){for(var e,t,n=0,a="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=_s(e))&&(a&&(a+=" "),a+=t);return a}const Ea=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,_a=Rs,aa=(e,t)=>n=>{var a;if((t==null?void 0:t.variants)==null)return _a(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:s,defaultVariants:r}=t,l=Object.keys(s).map(u=>{const p=n==null?void 0:n[u],g=r==null?void 0:r[u];if(p===null)return null;const y=Ea(p)||Ea(g);return s[u][y]}),i=n&&Object.entries(n).reduce((u,p)=>{let[g,y]=p;return y===void 0||(u[g]=y),u},{}),h=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((u,p)=>{let{class:g,className:y,...c}=p;return Object.entries(c).every(v=>{let[m,b]=v;return Array.isArray(b)?b.includes({...r,...i}[m]):{...r,...i}[m]===b})?[...u,g,y]:u},[]);return _a(e,l,h,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),As=(...e)=>e.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=f.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:s="",children:r,iconNode:l,...i},h)=>f.createElement("svg",{ref:h,...mo,width:t,height:t,stroke:e,strokeWidth:a?Number(n)*24/Number(t):n,className:As("lucide",s),...i},[...l.map(([u,p])=>f.createElement(u,p)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=(e,t)=>{const n=f.forwardRef(({className:a,...s},r)=>f.createElement(fo,{ref:r,iconNode:t,className:As(`lucide-${po(e)}`,a),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=me("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=me("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=me("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=me("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=me("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=me("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=me("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=me("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=me("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=me("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=me("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=me("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=me("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=me("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),oa="-",So=e=>{const t=_o(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:l=>{const i=l.split(oa);return i[0]===""&&i.length!==1&&i.shift(),Ns(i,t)||Eo(l)},getConflictingClassGroupIds:(l,i)=>{const h=n[l]||[];return i&&a[l]?[...h,...a[l]]:h}}},Ns=(e,t)=>{var l;if(e.length===0)return t.classGroupId;const n=e[0],a=t.nextPart.get(n),s=a?Ns(e.slice(1),a):void 0;if(s)return s;if(t.validators.length===0)return;const r=e.join(oa);return(l=t.validators.find(({validator:i})=>i(r)))==null?void 0:l.classGroupId},Ra=/^\[(.+)\]$/,Eo=e=>{if(Ra.test(e)){const t=Ra.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},_o=e=>{const{theme:t,prefix:n}=e,a={nextPart:new Map,validators:[]};return Ao(Object.entries(e.classGroups),n).forEach(([r,l])=>{Nn(l,a,r,t)}),a},Nn=(e,t,n,a)=>{e.forEach(s=>{if(typeof s=="string"){const r=s===""?t:Aa(t,s);r.classGroupId=n;return}if(typeof s=="function"){if(Ro(s)){Nn(s(a),t,n,a);return}t.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([r,l])=>{Nn(l,Aa(t,r),n,a)})})},Aa=(e,t)=>{let n=e;return t.split(oa).forEach(a=>{n.nextPart.has(a)||n.nextPart.set(a,{nextPart:new Map,validators:[]}),n=n.nextPart.get(a)}),n},Ro=e=>e.isThemeGetter,Ao=(e,t)=>t?e.map(([n,a])=>{const s=a.map(r=>typeof r=="string"?t+r:typeof r=="object"?Object.fromEntries(Object.entries(r).map(([l,i])=>[t+l,i])):r);return[n,s]}):e,Po=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,a=new Map;const s=(r,l)=>{n.set(r,l),t++,t>e&&(t=0,a=n,n=new Map)};return{get(r){let l=n.get(r);if(l!==void 0)return l;if((l=a.get(r))!==void 0)return s(r,l),l},set(r,l){n.has(r)?n.set(r,l):s(r,l)}}},Os="!",$o=e=>{const{separator:t,experimentalParseClassName:n}=e,a=t.length===1,s=t[0],r=t.length,l=i=>{const h=[];let u=0,p=0,g;for(let b=0;b<i.length;b++){let x=i[b];if(u===0){if(x===s&&(a||i.slice(b,b+r)===t)){h.push(i.slice(p,b)),p=b+r;continue}if(x==="/"){g=b;continue}}x==="["?u++:x==="]"&&u--}const y=h.length===0?i:i.substring(p),c=y.startsWith(Os),v=c?y.substring(1):y,m=g&&g>p?g-p:void 0;return{modifiers:h,hasImportantModifier:c,baseClassName:v,maybePostfixModifierPosition:m}};return n?i=>n({className:i,parseClassName:l}):l},Co=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(a=>{a[0]==="["?(t.push(...n.sort(),a),n=[]):n.push(a)}),t.push(...n.sort()),t},No=e=>({cache:Po(e.cacheSize),parseClassName:$o(e),...So(e)}),Oo=/\s+/,jo=(e,t)=>{const{parseClassName:n,getClassGroupId:a,getConflictingClassGroupIds:s}=t,r=[],l=e.trim().split(Oo);let i="";for(let h=l.length-1;h>=0;h-=1){const u=l[h],{modifiers:p,hasImportantModifier:g,baseClassName:y,maybePostfixModifierPosition:c}=n(u);let v=!!c,m=a(v?y.substring(0,c):y);if(!m){if(!v){i=u+(i.length>0?" "+i:i);continue}if(m=a(y),!m){i=u+(i.length>0?" "+i:i);continue}v=!1}const b=Co(p).join(":"),x=g?b+Os:b,T=x+m;if(r.includes(T))continue;r.push(T);const S=s(m,v);for(let C=0;C<S.length;++C){const F=S[C];r.push(x+F)}i=u+(i.length>0?" "+i:i)}return i};function Io(){let e=0,t,n,a="";for(;e<arguments.length;)(t=arguments[e++])&&(n=js(t))&&(a&&(a+=" "),a+=n);return a}const js=e=>{if(typeof e=="string")return e;let t,n="";for(let a=0;a<e.length;a++)e[a]&&(t=js(e[a]))&&(n&&(n+=" "),n+=t);return n};function Do(e,...t){let n,a,s,r=l;function l(h){const u=t.reduce((p,g)=>g(p),e());return n=No(u),a=n.cache.get,s=n.cache.set,r=i,i(h)}function i(h){const u=a(h);if(u)return u;const p=jo(h,n);return s(h,p),p}return function(){return r(Io.apply(null,arguments))}}const W=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Is=/^\[(?:([a-z-]+):)?(.+)\]$/i,Lo=/^\d+\/\d+$/,Mo=new Set(["px","full","screen"]),Fo=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Uo=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ho=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,qo=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Go=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ne=e=>wt(e)||Mo.has(e)||Lo.test(e),Ue=e=>jt(e,"length",Yo),wt=e=>!!e&&!Number.isNaN(Number(e)),Tn=e=>jt(e,"number",wt),Lt=e=>!!e&&Number.isInteger(Number(e)),Bo=e=>e.endsWith("%")&&wt(e.slice(0,-1)),$=e=>Is.test(e),He=e=>Fo.test(e),zo=new Set(["length","size","percentage"]),Jo=e=>jt(e,zo,Ds),Wo=e=>jt(e,"position",Ds),Ko=new Set(["image","url"]),Vo=e=>jt(e,Ko,Zo),Qo=e=>jt(e,"",Xo),Mt=()=>!0,jt=(e,t,n)=>{const a=Is.exec(e);return a?a[1]?typeof t=="string"?a[1]===t:t.has(a[1]):n(a[2]):!1},Yo=e=>Uo.test(e)&&!Ho.test(e),Ds=()=>!1,Xo=e=>qo.test(e),Zo=e=>Go.test(e),ei=()=>{const e=W("colors"),t=W("spacing"),n=W("blur"),a=W("brightness"),s=W("borderColor"),r=W("borderRadius"),l=W("borderSpacing"),i=W("borderWidth"),h=W("contrast"),u=W("grayscale"),p=W("hueRotate"),g=W("invert"),y=W("gap"),c=W("gradientColorStops"),v=W("gradientColorStopPositions"),m=W("inset"),b=W("margin"),x=W("opacity"),T=W("padding"),S=W("saturate"),C=W("scale"),F=W("sepia"),U=W("skew"),ee=W("space"),z=W("translate"),L=()=>["auto","contain","none"],I=()=>["auto","hidden","clip","visible","scroll"],Q=()=>["auto",$,t],R=()=>[$,t],ce=()=>["",Ne,Ue],re=()=>["auto",wt,$],Pe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],E=()=>["solid","dashed","dotted","double","none"],G=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],te=()=>["start","end","center","between","around","evenly","stretch"],A=()=>["","0",$],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[wt,$];return{cacheSize:500,separator:":",theme:{colors:[Mt],spacing:[Ne,Ue],blur:["none","",He,$],brightness:X(),borderColor:[e],borderRadius:["none","","full",He,$],borderSpacing:R(),borderWidth:ce(),contrast:X(),grayscale:A(),hueRotate:X(),invert:A(),gap:R(),gradientColorStops:[e],gradientColorStopPositions:[Bo,Ue],inset:Q(),margin:Q(),opacity:X(),padding:R(),saturate:X(),scale:X(),sepia:A(),skew:X(),space:R(),translate:R()},classGroups:{aspect:[{aspect:["auto","square","video",$]}],container:["container"],columns:[{columns:[He]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Pe(),$]}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Lt,$]}],basis:[{basis:Q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",$]}],grow:[{grow:A()}],shrink:[{shrink:A()}],order:[{order:["first","last","none",Lt,$]}],"grid-cols":[{"grid-cols":[Mt]}],"col-start-end":[{col:["auto",{span:["full",Lt,$]},$]}],"col-start":[{"col-start":re()}],"col-end":[{"col-end":re()}],"grid-rows":[{"grid-rows":[Mt]}],"row-start-end":[{row:["auto",{span:[Lt,$]},$]}],"row-start":[{"row-start":re()}],"row-end":[{"row-end":re()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",$]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",$]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:["normal",...te()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...te(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...te(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[T]}],px:[{px:[T]}],py:[{py:[T]}],ps:[{ps:[T]}],pe:[{pe:[T]}],pt:[{pt:[T]}],pr:[{pr:[T]}],pb:[{pb:[T]}],pl:[{pl:[T]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[ee]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ee]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",$,t]}],"min-w":[{"min-w":[$,t,"min","max","fit"]}],"max-w":[{"max-w":[$,t,"none","full","min","max","fit","prose",{screen:[He]},He]}],h:[{h:[$,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[$,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[$,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[$,t,"auto","min","max","fit"]}],"font-size":[{text:["base",He,Ue]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Tn]}],"font-family":[{font:[Mt]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",$]}],"line-clamp":[{"line-clamp":["none",wt,Tn]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ne,$]}],"list-image":[{"list-image":["none",$]}],"list-style-type":[{list:["none","disc","decimal",$]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...E(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ne,Ue]}],"underline-offset":[{"underline-offset":["auto",Ne,$]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",$]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",$]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Pe(),Wo]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Jo]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Vo]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[c]}],"gradient-via":[{via:[c]}],"gradient-to":[{to:[c]}],rounded:[{rounded:[r]}],"rounded-s":[{"rounded-s":[r]}],"rounded-e":[{"rounded-e":[r]}],"rounded-t":[{"rounded-t":[r]}],"rounded-r":[{"rounded-r":[r]}],"rounded-b":[{"rounded-b":[r]}],"rounded-l":[{"rounded-l":[r]}],"rounded-ss":[{"rounded-ss":[r]}],"rounded-se":[{"rounded-se":[r]}],"rounded-ee":[{"rounded-ee":[r]}],"rounded-es":[{"rounded-es":[r]}],"rounded-tl":[{"rounded-tl":[r]}],"rounded-tr":[{"rounded-tr":[r]}],"rounded-br":[{"rounded-br":[r]}],"rounded-bl":[{"rounded-bl":[r]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...E(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:E()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...E()]}],"outline-offset":[{"outline-offset":[Ne,$]}],"outline-w":[{outline:[Ne,Ue]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ce()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[Ne,Ue]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",He,Qo]}],"shadow-color":[{shadow:[Mt]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...G(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":G()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[a]}],contrast:[{contrast:[h]}],"drop-shadow":[{"drop-shadow":["","none",He,$]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[g]}],saturate:[{saturate:[S]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[h]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",$]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",$]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",$]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[C]}],"scale-x":[{"scale-x":[C]}],"scale-y":[{"scale-y":[C]}],rotate:[{rotate:[Lt,$]}],"translate-x":[{"translate-x":[z]}],"translate-y":[{"translate-y":[z]}],"skew-x":[{"skew-x":[U]}],"skew-y":[{"skew-y":[U]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",$]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",$]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",$]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Ne,Ue,Tn]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ti=Do(ei);function q(...e){return ti(Rs(e))}const ni=Jr,Ls=f.forwardRef(({className:e,...t},n)=>o.jsx(ps,{ref:n,className:q("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Ls.displayName=ps.displayName;const ai=aa("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Ms=f.forwardRef(({className:e,variant:t,...n},a)=>o.jsx(ms,{ref:a,className:q(ai({variant:t}),e),...n}));Ms.displayName=ms.displayName;const si=f.forwardRef(({className:e,...t},n)=>o.jsx(fs,{ref:n,className:q("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));si.displayName=fs.displayName;const Fs=f.forwardRef(({className:e,...t},n)=>o.jsx(gs,{ref:n,className:q("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:o.jsx(ra,{className:"h-4 w-4"})}));Fs.displayName=gs.displayName;const Us=f.forwardRef(({className:e,...t},n)=>o.jsx(bs,{ref:n,className:q("text-sm font-semibold",e),...t}));Us.displayName=bs.displayName;const Hs=f.forwardRef(({className:e,...t},n)=>o.jsx(ys,{ref:n,className:q("text-sm opacity-90",e),...t}));Hs.displayName=ys.displayName;function ri(){const{toasts:e}=ho();return o.jsxs(ni,{children:[e.map(function({id:t,title:n,description:a,action:s,...r}){return o.jsxs(Ms,{...r,children:[o.jsxs("div",{className:"grid gap-1",children:[n&&o.jsx(Us,{children:n}),a&&o.jsx(Hs,{children:a})]}),s,o.jsx(Fs,{})]},t)}),o.jsx(Ls,{})]})}var Pa=["light","dark"],oi="(prefers-color-scheme: dark)",ii=f.createContext(void 0),li={setTheme:e=>{},themes:[]},ci=()=>{var e;return(e=f.useContext(ii))!=null?e:li};f.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:s,defaultTheme:r,value:l,attrs:i,nonce:h})=>{let u=r==="system",p=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${i.map(v=>`'${v}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,g=s?Pa.includes(r)&&r?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${r}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(v,m=!1,b=!0)=>{let x=l?l[v]:v,T=m?v+"|| ''":`'${x}'`,S="";return s&&b&&!m&&Pa.includes(v)&&(S+=`d.style.colorScheme = '${v}';`),n==="class"?m||x?S+=`c.add(${T})`:S+="null":x&&(S+=`d[s](n,${T})`),S},c=e?`!function(){${p}${y(e)}}()`:a?`!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${oi}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${y(l?"x[e]":"e",!0)}}${u?"":"else{"+y(r,!1,!1)+"}"}${g}}catch(e){}}()`:`!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${y(l?"x[e]":"e",!0)}}else{${y(r,!1,!1)};}${g}}catch(t){}}();`;return f.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:c}})});var di=e=>{switch(e){case"success":return pi;case"info":return fi;case"warning":return mi;case"error":return gi;default:return null}},ui=Array(12).fill(0),hi=({visible:e,className:t})=>w.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},w.createElement("div",{className:"sonner-spinner"},ui.map((n,a)=>w.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${a}`})))),pi=w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},w.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),mi=w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},w.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),fi=w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},w.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),gi=w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},w.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),bi=w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},w.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),w.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),yi=()=>{let[e,t]=w.useState(document.hidden);return w.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},On=1,wi=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...a}=e,s=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:On++,r=this.toasts.find(i=>i.id===s),l=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(s)&&this.dismissedToasts.delete(s),r?this.toasts=this.toasts.map(i=>i.id===s?(this.publish({...i,...e,id:s,title:n}),{...i,...e,id:s,dismissible:l,title:n}):i):this.addToast({title:n,...a,dismissible:l,id:s}),s},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let a=e instanceof Promise?e:e(),s=n!==void 0,r,l=a.then(async h=>{if(r=["resolve",h],w.isValidElement(h))s=!1,this.create({id:n,type:"default",message:h});else if(xi(h)&&!h.ok){s=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${h.status}`):t.error,p=typeof t.description=="function"?await t.description(`HTTP error! status: ${h.status}`):t.description;this.create({id:n,type:"error",message:u,description:p})}else if(t.success!==void 0){s=!1;let u=typeof t.success=="function"?await t.success(h):t.success,p=typeof t.description=="function"?await t.description(h):t.description;this.create({id:n,type:"success",message:u,description:p})}}).catch(async h=>{if(r=["reject",h],t.error!==void 0){s=!1;let u=typeof t.error=="function"?await t.error(h):t.error,p=typeof t.description=="function"?await t.description(h):t.description;this.create({id:n,type:"error",message:u,description:p})}}).finally(()=>{var h;s&&(this.dismiss(n),n=void 0),(h=t.finally)==null||h.call(t)}),i=()=>new Promise((h,u)=>l.then(()=>r[0]==="reject"?u(r[1]):h(r[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:i}:Object.assign(n,{unwrap:i})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||On++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},he=new wi,vi=(e,t)=>{let n=(t==null?void 0:t.id)||On++;return he.addToast({title:e,...t,id:n}),n},xi=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",ki=vi,Ti=()=>he.toasts,Si=()=>he.getActiveToasts(),ld=Object.assign(ki,{success:he.success,info:he.info,warning:he.warning,error:he.error,custom:he.custom,message:he.message,promise:he.promise,dismiss:he.dismiss,loading:he.loading},{getHistory:Ti,getToasts:Si});function Ei(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",t==="top"&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}Ei(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function nn(e){return e.label!==void 0}var _i=3,Ri="32px",Ai="16px",$a=4e3,Pi=356,$i=14,Ci=20,Ni=200;function ke(...e){return e.filter(Boolean).join(" ")}function Oi(e){let[t,n]=e.split("-"),a=[];return t&&a.push(t),n&&a.push(n),a}var ji=e=>{var t,n,a,s,r,l,i,h,u,p,g;let{invert:y,toast:c,unstyled:v,interacting:m,setHeights:b,visibleToasts:x,heights:T,index:S,toasts:C,expanded:F,removeToast:U,defaultRichColors:ee,closeButton:z,style:L,cancelButtonStyle:I,actionButtonStyle:Q,className:R="",descriptionClassName:ce="",duration:re,position:Pe,gap:E,loadingIcon:G,expandByDefault:te,classNames:A,icons:Y,closeButtonAriaLabel:X="Close toast",pauseWhenPageIsHidden:D}=e,[N,M]=w.useState(null),[ae,de]=w.useState(null),[J,It]=w.useState(!1),[Xe,$e]=w.useState(!1),[De,gn]=w.useState(!1),[ha,Cr]=w.useState(!1),[Nr,pa]=w.useState(!1),[Or,bn]=w.useState(0),[jr,ma]=w.useState(0),Dt=w.useRef(c.duration||re||$a),fa=w.useRef(null),Ze=w.useRef(null),Ir=S===0,Dr=S+1<=x,fe=c.type,mt=c.dismissible!==!1,Lr=c.className||"",Mr=c.descriptionClassName||"",en=w.useMemo(()=>T.findIndex(P=>P.toastId===c.id)||0,[T,c.id]),Fr=w.useMemo(()=>{var P;return(P=c.closeButton)!=null?P:z},[c.closeButton,z]),ga=w.useMemo(()=>c.duration||re||$a,[c.duration,re]),yn=w.useRef(0),ft=w.useRef(0),ba=w.useRef(0),gt=w.useRef(null),[Ur,Hr]=Pe.split("-"),ya=w.useMemo(()=>T.reduce((P,B,K)=>K>=en?P:P+B.height,0),[T,en]),wa=yi(),qr=c.invert||y,wn=fe==="loading";ft.current=w.useMemo(()=>en*E+ya,[en,ya]),w.useEffect(()=>{Dt.current=ga},[ga]),w.useEffect(()=>{It(!0)},[]),w.useEffect(()=>{let P=Ze.current;if(P){let B=P.getBoundingClientRect().height;return ma(B),b(K=>[{toastId:c.id,height:B,position:c.position},...K]),()=>b(K=>K.filter(we=>we.toastId!==c.id))}},[b,c.id]),w.useLayoutEffect(()=>{if(!J)return;let P=Ze.current,B=P.style.height;P.style.height="auto";let K=P.getBoundingClientRect().height;P.style.height=B,ma(K),b(we=>we.find(ve=>ve.toastId===c.id)?we.map(ve=>ve.toastId===c.id?{...ve,height:K}:ve):[{toastId:c.id,height:K,position:c.position},...we])},[J,c.title,c.description,b,c.id]);let Le=w.useCallback(()=>{$e(!0),bn(ft.current),b(P=>P.filter(B=>B.toastId!==c.id)),setTimeout(()=>{U(c)},Ni)},[c,U,b,ft]);w.useEffect(()=>{if(c.promise&&fe==="loading"||c.duration===1/0||c.type==="loading")return;let P;return F||m||D&&wa?(()=>{if(ba.current<yn.current){let B=new Date().getTime()-yn.current;Dt.current=Dt.current-B}ba.current=new Date().getTime()})():Dt.current!==1/0&&(yn.current=new Date().getTime(),P=setTimeout(()=>{var B;(B=c.onAutoClose)==null||B.call(c,c),Le()},Dt.current)),()=>clearTimeout(P)},[F,m,c,fe,D,wa,Le]),w.useEffect(()=>{c.delete&&Le()},[Le,c.delete]);function Gr(){var P,B,K;return Y!=null&&Y.loading?w.createElement("div",{className:ke(A==null?void 0:A.loader,(P=c==null?void 0:c.classNames)==null?void 0:P.loader,"sonner-loader"),"data-visible":fe==="loading"},Y.loading):G?w.createElement("div",{className:ke(A==null?void 0:A.loader,(B=c==null?void 0:c.classNames)==null?void 0:B.loader,"sonner-loader"),"data-visible":fe==="loading"},G):w.createElement(hi,{className:ke(A==null?void 0:A.loader,(K=c==null?void 0:c.classNames)==null?void 0:K.loader),visible:fe==="loading"})}return w.createElement("li",{tabIndex:0,ref:Ze,className:ke(R,Lr,A==null?void 0:A.toast,(t=c==null?void 0:c.classNames)==null?void 0:t.toast,A==null?void 0:A.default,A==null?void 0:A[fe],(n=c==null?void 0:c.classNames)==null?void 0:n[fe]),"data-sonner-toast":"","data-rich-colors":(a=c.richColors)!=null?a:ee,"data-styled":!(c.jsx||c.unstyled||v),"data-mounted":J,"data-promise":!!c.promise,"data-swiped":Nr,"data-removed":Xe,"data-visible":Dr,"data-y-position":Ur,"data-x-position":Hr,"data-index":S,"data-front":Ir,"data-swiping":De,"data-dismissible":mt,"data-type":fe,"data-invert":qr,"data-swipe-out":ha,"data-swipe-direction":ae,"data-expanded":!!(F||te&&J),style:{"--index":S,"--toasts-before":S,"--z-index":C.length-S,"--offset":`${Xe?Or:ft.current}px`,"--initial-height":te?"auto":`${jr}px`,...L,...c.style},onDragEnd:()=>{gn(!1),M(null),gt.current=null},onPointerDown:P=>{wn||!mt||(fa.current=new Date,bn(ft.current),P.target.setPointerCapture(P.pointerId),P.target.tagName!=="BUTTON"&&(gn(!0),gt.current={x:P.clientX,y:P.clientY}))},onPointerUp:()=>{var P,B,K,we;if(ha||!mt)return;gt.current=null;let ve=Number(((P=Ze.current)==null?void 0:P.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Me=Number(((B=Ze.current)==null?void 0:B.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),et=new Date().getTime()-((K=fa.current)==null?void 0:K.getTime()),xe=N==="x"?ve:Me,Fe=Math.abs(xe)/et;if(Math.abs(xe)>=Ci||Fe>.11){bn(ft.current),(we=c.onDismiss)==null||we.call(c,c),de(N==="x"?ve>0?"right":"left":Me>0?"down":"up"),Le(),Cr(!0),pa(!1);return}gn(!1),M(null)},onPointerMove:P=>{var B,K,we,ve;if(!gt.current||!mt||((B=window.getSelection())==null?void 0:B.toString().length)>0)return;let Me=P.clientY-gt.current.y,et=P.clientX-gt.current.x,xe=(K=e.swipeDirections)!=null?K:Oi(Pe);!N&&(Math.abs(et)>1||Math.abs(Me)>1)&&M(Math.abs(et)>Math.abs(Me)?"x":"y");let Fe={x:0,y:0};N==="y"?(xe.includes("top")||xe.includes("bottom"))&&(xe.includes("top")&&Me<0||xe.includes("bottom")&&Me>0)&&(Fe.y=Me):N==="x"&&(xe.includes("left")||xe.includes("right"))&&(xe.includes("left")&&et<0||xe.includes("right")&&et>0)&&(Fe.x=et),(Math.abs(Fe.x)>0||Math.abs(Fe.y)>0)&&pa(!0),(we=Ze.current)==null||we.style.setProperty("--swipe-amount-x",`${Fe.x}px`),(ve=Ze.current)==null||ve.style.setProperty("--swipe-amount-y",`${Fe.y}px`)}},Fr&&!c.jsx?w.createElement("button",{"aria-label":X,"data-disabled":wn,"data-close-button":!0,onClick:wn||!mt?()=>{}:()=>{var P;Le(),(P=c.onDismiss)==null||P.call(c,c)},className:ke(A==null?void 0:A.closeButton,(s=c==null?void 0:c.classNames)==null?void 0:s.closeButton)},(r=Y==null?void 0:Y.close)!=null?r:bi):null,c.jsx||f.isValidElement(c.title)?c.jsx?c.jsx:typeof c.title=="function"?c.title():c.title:w.createElement(w.Fragment,null,fe||c.icon||c.promise?w.createElement("div",{"data-icon":"",className:ke(A==null?void 0:A.icon,(l=c==null?void 0:c.classNames)==null?void 0:l.icon)},c.promise||c.type==="loading"&&!c.icon?c.icon||Gr():null,c.type!=="loading"?c.icon||(Y==null?void 0:Y[fe])||di(fe):null):null,w.createElement("div",{"data-content":"",className:ke(A==null?void 0:A.content,(i=c==null?void 0:c.classNames)==null?void 0:i.content)},w.createElement("div",{"data-title":"",className:ke(A==null?void 0:A.title,(h=c==null?void 0:c.classNames)==null?void 0:h.title)},typeof c.title=="function"?c.title():c.title),c.description?w.createElement("div",{"data-description":"",className:ke(ce,Mr,A==null?void 0:A.description,(u=c==null?void 0:c.classNames)==null?void 0:u.description)},typeof c.description=="function"?c.description():c.description):null),f.isValidElement(c.cancel)?c.cancel:c.cancel&&nn(c.cancel)?w.createElement("button",{"data-button":!0,"data-cancel":!0,style:c.cancelButtonStyle||I,onClick:P=>{var B,K;nn(c.cancel)&&mt&&((K=(B=c.cancel).onClick)==null||K.call(B,P),Le())},className:ke(A==null?void 0:A.cancelButton,(p=c==null?void 0:c.classNames)==null?void 0:p.cancelButton)},c.cancel.label):null,f.isValidElement(c.action)?c.action:c.action&&nn(c.action)?w.createElement("button",{"data-button":!0,"data-action":!0,style:c.actionButtonStyle||Q,onClick:P=>{var B,K;nn(c.action)&&((K=(B=c.action).onClick)==null||K.call(B,P),!P.defaultPrevented&&Le())},className:ke(A==null?void 0:A.actionButton,(g=c==null?void 0:c.classNames)==null?void 0:g.actionButton)},c.action.label):null))};function Ca(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Ii(e,t){let n={};return[e,t].forEach((a,s)=>{let r=s===1,l=r?"--mobile-offset":"--offset",i=r?Ai:Ri;function h(u){["top","right","bottom","left"].forEach(p=>{n[`${l}-${p}`]=typeof u=="number"?`${u}px`:u})}typeof a=="number"||typeof a=="string"?h(a):typeof a=="object"?["top","right","bottom","left"].forEach(u=>{a[u]===void 0?n[`${l}-${u}`]=i:n[`${l}-${u}`]=typeof a[u]=="number"?`${a[u]}px`:a[u]}):h(i)}),n}var Di=f.forwardRef(function(e,t){let{invert:n,position:a="bottom-right",hotkey:s=["altKey","KeyT"],expand:r,closeButton:l,className:i,offset:h,mobileOffset:u,theme:p="light",richColors:g,duration:y,style:c,visibleToasts:v=_i,toastOptions:m,dir:b=Ca(),gap:x=$i,loadingIcon:T,icons:S,containerAriaLabel:C="Notifications",pauseWhenPageIsHidden:F}=e,[U,ee]=w.useState([]),z=w.useMemo(()=>Array.from(new Set([a].concat(U.filter(D=>D.position).map(D=>D.position)))),[U,a]),[L,I]=w.useState([]),[Q,R]=w.useState(!1),[ce,re]=w.useState(!1),[Pe,E]=w.useState(p!=="system"?p:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),G=w.useRef(null),te=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),A=w.useRef(null),Y=w.useRef(!1),X=w.useCallback(D=>{ee(N=>{var M;return(M=N.find(ae=>ae.id===D.id))!=null&&M.delete||he.dismiss(D.id),N.filter(({id:ae})=>ae!==D.id)})},[]);return w.useEffect(()=>he.subscribe(D=>{if(D.dismiss){ee(N=>N.map(M=>M.id===D.id?{...M,delete:!0}:M));return}setTimeout(()=>{eo.flushSync(()=>{ee(N=>{let M=N.findIndex(ae=>ae.id===D.id);return M!==-1?[...N.slice(0,M),{...N[M],...D},...N.slice(M+1)]:[D,...N]})})})}),[]),w.useEffect(()=>{if(p!=="system"){E(p);return}if(p==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?E("dark"):E("light")),typeof window>"u")return;let D=window.matchMedia("(prefers-color-scheme: dark)");try{D.addEventListener("change",({matches:N})=>{E(N?"dark":"light")})}catch{D.addListener(({matches:M})=>{try{E(M?"dark":"light")}catch(ae){console.error(ae)}})}},[p]),w.useEffect(()=>{U.length<=1&&R(!1)},[U]),w.useEffect(()=>{let D=N=>{var M,ae;s.every(de=>N[de]||N.code===de)&&(R(!0),(M=G.current)==null||M.focus()),N.code==="Escape"&&(document.activeElement===G.current||(ae=G.current)!=null&&ae.contains(document.activeElement))&&R(!1)};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[s]),w.useEffect(()=>{if(G.current)return()=>{A.current&&(A.current.focus({preventScroll:!0}),A.current=null,Y.current=!1)}},[G.current]),w.createElement("section",{ref:t,"aria-label":`${C} ${te}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},z.map((D,N)=>{var M;let[ae,de]=D.split("-");return U.length?w.createElement("ol",{key:D,dir:b==="auto"?Ca():b,tabIndex:-1,ref:G,className:i,"data-sonner-toaster":!0,"data-theme":Pe,"data-y-position":ae,"data-lifted":Q&&U.length>1&&!r,"data-x-position":de,style:{"--front-toast-height":`${((M=L[0])==null?void 0:M.height)||0}px`,"--width":`${Pi}px`,"--gap":`${x}px`,...c,...Ii(h,u)},onBlur:J=>{Y.current&&!J.currentTarget.contains(J.relatedTarget)&&(Y.current=!1,A.current&&(A.current.focus({preventScroll:!0}),A.current=null))},onFocus:J=>{J.target instanceof HTMLElement&&J.target.dataset.dismissible==="false"||Y.current||(Y.current=!0,A.current=J.relatedTarget)},onMouseEnter:()=>R(!0),onMouseMove:()=>R(!0),onMouseLeave:()=>{ce||R(!1)},onDragEnd:()=>R(!1),onPointerDown:J=>{J.target instanceof HTMLElement&&J.target.dataset.dismissible==="false"||re(!0)},onPointerUp:()=>re(!1)},U.filter(J=>!J.position&&N===0||J.position===D).map((J,It)=>{var Xe,$e;return w.createElement(ji,{key:J.id,icons:S,index:It,toast:J,defaultRichColors:g,duration:(Xe=m==null?void 0:m.duration)!=null?Xe:y,className:m==null?void 0:m.className,descriptionClassName:m==null?void 0:m.descriptionClassName,invert:n,visibleToasts:v,closeButton:($e=m==null?void 0:m.closeButton)!=null?$e:l,interacting:ce,position:D,style:m==null?void 0:m.style,unstyled:m==null?void 0:m.unstyled,classNames:m==null?void 0:m.classNames,cancelButtonStyle:m==null?void 0:m.cancelButtonStyle,actionButtonStyle:m==null?void 0:m.actionButtonStyle,removeToast:X,toasts:U.filter(De=>De.position==J.position),heights:L.filter(De=>De.position==J.position),setHeights:I,expandByDefault:r,gap:x,loadingIcon:T,expanded:Q,pauseWhenPageIsHidden:F,swipeDirections:e.swipeDirections})})):null}))});const Li=({...e})=>{const{theme:t="system"}=ci();return o.jsx(Di,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},Mi=Wr,Fi=f.forwardRef(({className:e,sideOffset:t=4,...n},a)=>o.jsx(ws,{ref:a,sideOffset:t,className:q("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));Fi.displayName=ws.displayName;var Xt=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},pt=typeof window>"u"||"Deno"in globalThis;function pe(){}function Ui(e,t){return typeof e=="function"?e(t):e}function jn(e){return typeof e=="number"&&e>=0&&e!==1/0}function qs(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Ye(e,t){return typeof e=="function"?e(t):e}function ye(e,t){return typeof e=="function"?e(t):e}function Na(e,t){const{type:n="all",exact:a,fetchStatus:s,predicate:r,queryKey:l,stale:i}=e;if(l){if(a){if(t.queryHash!==ia(l,t.options))return!1}else if(!Jt(t.queryKey,l))return!1}if(n!=="all"){const h=t.isActive();if(n==="active"&&!h||n==="inactive"&&h)return!1}return!(typeof i=="boolean"&&t.isStale()!==i||s&&s!==t.state.fetchStatus||r&&!r(t))}function Oa(e,t){const{exact:n,status:a,predicate:s,mutationKey:r}=e;if(r){if(!t.options.mutationKey)return!1;if(n){if(zt(t.options.mutationKey)!==zt(r))return!1}else if(!Jt(t.options.mutationKey,r))return!1}return!(a&&t.state.status!==a||s&&!s(t))}function ia(e,t){return((t==null?void 0:t.queryKeyHashFn)||zt)(e)}function zt(e){return JSON.stringify(e,(t,n)=>Dn(n)?Object.keys(n).sort().reduce((a,s)=>(a[s]=n[s],a),{}):n)}function Jt(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Jt(e[n],t[n])):!1}function Gs(e,t){if(e===t)return e;const n=ja(e)&&ja(t);if(n||Dn(e)&&Dn(t)){const a=n?e:Object.keys(e),s=a.length,r=n?t:Object.keys(t),l=r.length,i=n?[]:{},h=new Set(a);let u=0;for(let p=0;p<l;p++){const g=n?p:r[p];(!n&&h.has(g)||n)&&e[g]===void 0&&t[g]===void 0?(i[g]=void 0,u++):(i[g]=Gs(e[g],t[g]),i[g]===e[g]&&e[g]!==void 0&&u++)}return s===l&&u===s?e:i}return t}function In(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function ja(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Dn(e){if(!Ia(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Ia(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Ia(e){return Object.prototype.toString.call(e)==="[object Object]"}function Hi(e){return new Promise(t=>{setTimeout(t,e)})}function Ln(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Gs(e,t):t}function qi(e,t,n=0){const a=[...e,t];return n&&a.length>n?a.slice(1):a}function Gi(e,t,n=0){const a=[t,...e];return n&&a.length>n?a.slice(0,-1):a}var la=Symbol();function Bs(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===la?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function Bi(e,t){return typeof e=="function"?e(...t):!!e}var at,Ge,kt,ss,zi=(ss=class extends Xt{constructor(){super();_(this,at);_(this,Ge);_(this,kt);k(this,kt,t=>{if(!pt&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){d(this,Ge)||this.setEventListener(d(this,kt))}onUnsubscribe(){var t;this.hasListeners()||((t=d(this,Ge))==null||t.call(this),k(this,Ge,void 0))}setEventListener(t){var n;k(this,kt,t),(n=d(this,Ge))==null||n.call(this),k(this,Ge,t(a=>{typeof a=="boolean"?this.setFocused(a):this.onFocus()}))}setFocused(t){d(this,at)!==t&&(k(this,at,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof d(this,at)=="boolean"?d(this,at):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},at=new WeakMap,Ge=new WeakMap,kt=new WeakMap,ss),ca=new zi,Tt,Be,St,rs,Ji=(rs=class extends Xt{constructor(){super();_(this,Tt,!0);_(this,Be);_(this,St);k(this,St,t=>{if(!pt&&window.addEventListener){const n=()=>t(!0),a=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",a,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",a)}}})}onSubscribe(){d(this,Be)||this.setEventListener(d(this,St))}onUnsubscribe(){var t;this.hasListeners()||((t=d(this,Be))==null||t.call(this),k(this,Be,void 0))}setEventListener(t){var n;k(this,St,t),(n=d(this,Be))==null||n.call(this),k(this,Be,t(this.setOnline.bind(this)))}setOnline(t){d(this,Tt)!==t&&(k(this,Tt,t),this.listeners.forEach(a=>{a(t)}))}isOnline(){return d(this,Tt)}},Tt=new WeakMap,Be=new WeakMap,St=new WeakMap,rs),un=new Ji;function Mn(){let e,t;const n=new Promise((s,r)=>{e=s,t=r});n.status="pending",n.catch(()=>{});function a(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{a({status:"fulfilled",value:s}),e(s)},n.reject=s=>{a({status:"rejected",reason:s}),t(s)},n}function Wi(e){return Math.min(1e3*2**e,3e4)}function zs(e){return(e??"online")==="online"?un.isOnline():!0}var Js=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Sn(e){return e instanceof Js}function Ws(e){let t=!1,n=0,a=!1,s;const r=Mn(),l=m=>{var b;a||(y(new Js(m)),(b=e.abort)==null||b.call(e))},i=()=>{t=!0},h=()=>{t=!1},u=()=>ca.isFocused()&&(e.networkMode==="always"||un.isOnline())&&e.canRun(),p=()=>zs(e.networkMode)&&e.canRun(),g=m=>{var b;a||(a=!0,(b=e.onSuccess)==null||b.call(e,m),s==null||s(),r.resolve(m))},y=m=>{var b;a||(a=!0,(b=e.onError)==null||b.call(e,m),s==null||s(),r.reject(m))},c=()=>new Promise(m=>{var b;s=x=>{(a||u())&&m(x)},(b=e.onPause)==null||b.call(e)}).then(()=>{var m;s=void 0,a||(m=e.onContinue)==null||m.call(e)}),v=()=>{if(a)return;let m;const b=n===0?e.initialPromise:void 0;try{m=b??e.fn()}catch(x){m=Promise.reject(x)}Promise.resolve(m).then(g).catch(x=>{var U;if(a)return;const T=e.retry??(pt?0:3),S=e.retryDelay??Wi,C=typeof S=="function"?S(n,x):S,F=T===!0||typeof T=="number"&&n<T||typeof T=="function"&&T(n,x);if(t||!F){y(x);return}n++,(U=e.onFail)==null||U.call(e,n,x),Hi(C).then(()=>u()?void 0:c()).then(()=>{t?y(x):v()})})};return{promise:r,cancel:l,continue:()=>(s==null||s(),r),cancelRetry:i,continueRetry:h,canStart:p,start:()=>(p()?v():c().then(v),r)}}var Ki=e=>setTimeout(e,0);function Vi(){let e=[],t=0,n=i=>{i()},a=i=>{i()},s=Ki;const r=i=>{t?e.push(i):s(()=>{n(i)})},l=()=>{const i=e;e=[],i.length&&s(()=>{a(()=>{i.forEach(h=>{n(h)})})})};return{batch:i=>{let h;t++;try{h=i()}finally{t--,t||l()}return h},batchCalls:i=>(...h)=>{r(()=>{i(...h)})},schedule:r,setNotifyFunction:i=>{n=i},setBatchNotifyFunction:i=>{a=i},setScheduler:i=>{s=i}}}var ne=Vi(),st,os,Ks=(os=class{constructor(){_(this,st)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),jn(this.gcTime)&&k(this,st,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(pt?1/0:5*60*1e3))}clearGcTimeout(){d(this,st)&&(clearTimeout(d(this,st)),k(this,st,void 0))}},st=new WeakMap,os),Et,rt,be,ot,se,Kt,it,Te,Oe,is,Qi=(is=class extends Ks{constructor(t){super();_(this,Te);_(this,Et);_(this,rt);_(this,be);_(this,ot);_(this,se);_(this,Kt);_(this,it);k(this,it,!1),k(this,Kt,t.defaultOptions),this.setOptions(t.options),this.observers=[],k(this,ot,t.client),k(this,be,d(this,ot).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,k(this,Et,Yi(this.options)),this.state=t.state??d(this,Et),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=d(this,se))==null?void 0:t.promise}setOptions(t){this.options={...d(this,Kt),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&d(this,be).remove(this)}setData(t,n){const a=Ln(this.state.data,t,this.options);return O(this,Te,Oe).call(this,{data:a,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),a}setState(t,n){O(this,Te,Oe).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var a,s;const n=(a=d(this,se))==null?void 0:a.promise;return(s=d(this,se))==null||s.cancel(t),n?n.then(pe).catch(pe):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(d(this,Et))}isActive(){return this.observers.some(t=>ye(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===la||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Ye(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!qs(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(a=>a.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=d(this,se))==null||n.continue()}onOnline(){var n;const t=this.observers.find(a=>a.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=d(this,se))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),d(this,be).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(d(this,se)&&(d(this,it)?d(this,se).cancel({revert:!0}):d(this,se).cancelRetry()),this.scheduleGc()),d(this,be).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||O(this,Te,Oe).call(this,{type:"invalidate"})}fetch(t,n){var u,p,g;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(d(this,se))return d(this,se).continueRetry(),d(this,se).promise}if(t&&this.setOptions(t),!this.options.queryFn){const y=this.observers.find(c=>c.options.queryFn);y&&this.setOptions(y.options)}const a=new AbortController,s=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>(k(this,it,!0),a.signal)})},r=()=>{const y=Bs(this.options,n),v=(()=>{const m={client:d(this,ot),queryKey:this.queryKey,meta:this.meta};return s(m),m})();return k(this,it,!1),this.options.persister?this.options.persister(y,v,this):y(v)},i=(()=>{const y={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:d(this,ot),state:this.state,fetchFn:r};return s(y),y})();(u=this.options.behavior)==null||u.onFetch(i,this),k(this,rt,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((p=i.fetchOptions)==null?void 0:p.meta))&&O(this,Te,Oe).call(this,{type:"fetch",meta:(g=i.fetchOptions)==null?void 0:g.meta});const h=y=>{var c,v,m,b;Sn(y)&&y.silent||O(this,Te,Oe).call(this,{type:"error",error:y}),Sn(y)||((v=(c=d(this,be).config).onError)==null||v.call(c,y,this),(b=(m=d(this,be).config).onSettled)==null||b.call(m,this.state.data,y,this)),this.scheduleGc()};return k(this,se,Ws({initialPromise:n==null?void 0:n.initialPromise,fn:i.fetchFn,abort:a.abort.bind(a),onSuccess:y=>{var c,v,m,b;if(y===void 0){h(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(y)}catch(x){h(x);return}(v=(c=d(this,be).config).onSuccess)==null||v.call(c,y,this),(b=(m=d(this,be).config).onSettled)==null||b.call(m,y,this.state.error,this),this.scheduleGc()},onError:h,onFail:(y,c)=>{O(this,Te,Oe).call(this,{type:"failed",failureCount:y,error:c})},onPause:()=>{O(this,Te,Oe).call(this,{type:"pause"})},onContinue:()=>{O(this,Te,Oe).call(this,{type:"continue"})},retry:i.options.retry,retryDelay:i.options.retryDelay,networkMode:i.options.networkMode,canRun:()=>!0})),d(this,se).start()}},Et=new WeakMap,rt=new WeakMap,be=new WeakMap,ot=new WeakMap,se=new WeakMap,Kt=new WeakMap,it=new WeakMap,Te=new WeakSet,Oe=function(t){const n=a=>{switch(t.type){case"failed":return{...a,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...a,fetchStatus:"paused"};case"continue":return{...a,fetchStatus:"fetching"};case"fetch":return{...a,...Vs(a.data,this.options),fetchMeta:t.meta??null};case"success":return k(this,rt,void 0),{...a,data:t.data,dataUpdateCount:a.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=t.error;return Sn(s)&&s.revert&&d(this,rt)?{...d(this,rt),fetchStatus:"idle"}:{...a,error:s,errorUpdateCount:a.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:a.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...a,isInvalidated:!0};case"setState":return{...a,...t.state}}};this.state=n(this.state),ne.batch(()=>{this.observers.forEach(a=>{a.onQueryUpdate()}),d(this,be).notify({query:this,type:"updated",action:t})})},is);function Vs(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:zs(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Yi(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,a=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?a??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var _e,ls,Xi=(ls=class extends Xt{constructor(t={}){super();_(this,_e);this.config=t,k(this,_e,new Map)}build(t,n,a){const s=n.queryKey,r=n.queryHash??ia(s,n);let l=this.get(r);return l||(l=new Qi({client:t,queryKey:s,queryHash:r,options:t.defaultQueryOptions(n),state:a,defaultOptions:t.getQueryDefaults(s)}),this.add(l)),l}add(t){d(this,_e).has(t.queryHash)||(d(this,_e).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=d(this,_e).get(t.queryHash);n&&(t.destroy(),n===t&&d(this,_e).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){ne.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return d(this,_e).get(t)}getAll(){return[...d(this,_e).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(a=>Na(n,a))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(a=>Na(t,a)):n}notify(t){ne.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){ne.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){ne.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},_e=new WeakMap,ls),Re,oe,lt,Ae,qe,cs,Zi=(cs=class extends Ks{constructor(t){super();_(this,Ae);_(this,Re);_(this,oe);_(this,lt);this.mutationId=t.mutationId,k(this,oe,t.mutationCache),k(this,Re,[]),this.state=t.state||el(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){d(this,Re).includes(t)||(d(this,Re).push(t),this.clearGcTimeout(),d(this,oe).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){k(this,Re,d(this,Re).filter(n=>n!==t)),this.scheduleGc(),d(this,oe).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){d(this,Re).length||(this.state.status==="pending"?this.scheduleGc():d(this,oe).remove(this))}continue(){var t;return((t=d(this,lt))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var r,l,i,h,u,p,g,y,c,v,m,b,x,T,S,C,F,U,ee,z;const n=()=>{O(this,Ae,qe).call(this,{type:"continue"})};k(this,lt,Ws({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(L,I)=>{O(this,Ae,qe).call(this,{type:"failed",failureCount:L,error:I})},onPause:()=>{O(this,Ae,qe).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>d(this,oe).canRun(this)}));const a=this.state.status==="pending",s=!d(this,lt).canStart();try{if(a)n();else{O(this,Ae,qe).call(this,{type:"pending",variables:t,isPaused:s}),await((l=(r=d(this,oe).config).onMutate)==null?void 0:l.call(r,t,this));const I=await((h=(i=this.options).onMutate)==null?void 0:h.call(i,t));I!==this.state.context&&O(this,Ae,qe).call(this,{type:"pending",context:I,variables:t,isPaused:s})}const L=await d(this,lt).start();return await((p=(u=d(this,oe).config).onSuccess)==null?void 0:p.call(u,L,t,this.state.context,this)),await((y=(g=this.options).onSuccess)==null?void 0:y.call(g,L,t,this.state.context)),await((v=(c=d(this,oe).config).onSettled)==null?void 0:v.call(c,L,null,this.state.variables,this.state.context,this)),await((b=(m=this.options).onSettled)==null?void 0:b.call(m,L,null,t,this.state.context)),O(this,Ae,qe).call(this,{type:"success",data:L}),L}catch(L){try{throw await((T=(x=d(this,oe).config).onError)==null?void 0:T.call(x,L,t,this.state.context,this)),await((C=(S=this.options).onError)==null?void 0:C.call(S,L,t,this.state.context)),await((U=(F=d(this,oe).config).onSettled)==null?void 0:U.call(F,void 0,L,this.state.variables,this.state.context,this)),await((z=(ee=this.options).onSettled)==null?void 0:z.call(ee,void 0,L,t,this.state.context)),L}finally{O(this,Ae,qe).call(this,{type:"error",error:L})}}finally{d(this,oe).runNext(this)}}},Re=new WeakMap,oe=new WeakMap,lt=new WeakMap,Ae=new WeakSet,qe=function(t){const n=a=>{switch(t.type){case"failed":return{...a,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...a,isPaused:!0};case"continue":return{...a,isPaused:!1};case"pending":return{...a,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...a,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...a,data:void 0,error:t.error,failureCount:a.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),ne.batch(()=>{d(this,Re).forEach(a=>{a.onMutationUpdate(t)}),d(this,oe).notify({mutation:this,type:"updated",action:t})})},cs);function el(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var je,Se,Vt,ds,tl=(ds=class extends Xt{constructor(t={}){super();_(this,je);_(this,Se);_(this,Vt);this.config=t,k(this,je,new Set),k(this,Se,new Map),k(this,Vt,0)}build(t,n,a){const s=new Zi({mutationCache:this,mutationId:++tn(this,Vt)._,options:t.defaultMutationOptions(n),state:a});return this.add(s),s}add(t){d(this,je).add(t);const n=an(t);if(typeof n=="string"){const a=d(this,Se).get(n);a?a.push(t):d(this,Se).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(d(this,je).delete(t)){const n=an(t);if(typeof n=="string"){const a=d(this,Se).get(n);if(a)if(a.length>1){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}else a[0]===t&&d(this,Se).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=an(t);if(typeof n=="string"){const a=d(this,Se).get(n),s=a==null?void 0:a.find(r=>r.state.status==="pending");return!s||s===t}else return!0}runNext(t){var a;const n=an(t);if(typeof n=="string"){const s=(a=d(this,Se).get(n))==null?void 0:a.find(r=>r!==t&&r.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){ne.batch(()=>{d(this,je).forEach(t=>{this.notify({type:"removed",mutation:t})}),d(this,je).clear(),d(this,Se).clear()})}getAll(){return Array.from(d(this,je))}find(t){const n={exact:!0,...t};return this.getAll().find(a=>Oa(n,a))}findAll(t={}){return this.getAll().filter(n=>Oa(t,n))}notify(t){ne.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return ne.batch(()=>Promise.all(t.map(n=>n.continue().catch(pe))))}},je=new WeakMap,Se=new WeakMap,Vt=new WeakMap,ds);function an(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Da(e){return{onFetch:(t,n)=>{var p,g,y,c,v;const a=t.options,s=(y=(g=(p=t.fetchOptions)==null?void 0:p.meta)==null?void 0:g.fetchMore)==null?void 0:y.direction,r=((c=t.state.data)==null?void 0:c.pages)||[],l=((v=t.state.data)==null?void 0:v.pageParams)||[];let i={pages:[],pageParams:[]},h=0;const u=async()=>{let m=!1;const b=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>(t.signal.aborted?m=!0:t.signal.addEventListener("abort",()=>{m=!0}),t.signal)})},x=Bs(t.options,t.fetchOptions),T=async(S,C,F)=>{if(m)return Promise.reject();if(C==null&&S.pages.length)return Promise.resolve(S);const ee=(()=>{const Q={client:t.client,queryKey:t.queryKey,pageParam:C,direction:F?"backward":"forward",meta:t.options.meta};return b(Q),Q})(),z=await x(ee),{maxPages:L}=t.options,I=F?Gi:qi;return{pages:I(S.pages,z,L),pageParams:I(S.pageParams,C,L)}};if(s&&r.length){const S=s==="backward",C=S?nl:La,F={pages:r,pageParams:l},U=C(a,F);i=await T(F,U,S)}else{const S=e??r.length;do{const C=h===0?l[0]??a.initialPageParam:La(a,i);if(h>0&&C==null)break;i=await T(i,C),h++}while(h<S)}return i};t.options.persister?t.fetchFn=()=>{var m,b;return(b=(m=t.options).persister)==null?void 0:b.call(m,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function La(e,{pages:t,pageParams:n}){const a=t.length-1;return t.length>0?e.getNextPageParam(t[a],t,n[a],n):void 0}function nl(e,{pages:t,pageParams:n}){var a;return t.length>0?(a=e.getPreviousPageParam)==null?void 0:a.call(e,t[0],t,n[0],n):void 0}var V,ze,Je,_t,Rt,We,At,Pt,us,al=(us=class{constructor(e={}){_(this,V);_(this,ze);_(this,Je);_(this,_t);_(this,Rt);_(this,We);_(this,At);_(this,Pt);k(this,V,e.queryCache||new Xi),k(this,ze,e.mutationCache||new tl),k(this,Je,e.defaultOptions||{}),k(this,_t,new Map),k(this,Rt,new Map),k(this,We,0)}mount(){tn(this,We)._++,d(this,We)===1&&(k(this,At,ca.subscribe(async e=>{e&&(await this.resumePausedMutations(),d(this,V).onFocus())})),k(this,Pt,un.subscribe(async e=>{e&&(await this.resumePausedMutations(),d(this,V).onOnline())})))}unmount(){var e,t;tn(this,We)._--,d(this,We)===0&&((e=d(this,At))==null||e.call(this),k(this,At,void 0),(t=d(this,Pt))==null||t.call(this),k(this,Pt,void 0))}isFetching(e){return d(this,V).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return d(this,ze).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=d(this,V).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=d(this,V).build(this,t),a=n.state.data;return a===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Ye(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(a))}getQueriesData(e){return d(this,V).findAll(e).map(({queryKey:t,state:n})=>{const a=n.data;return[t,a]})}setQueryData(e,t,n){const a=this.defaultQueryOptions({queryKey:e}),s=d(this,V).get(a.queryHash),r=s==null?void 0:s.state.data,l=Ui(t,r);if(l!==void 0)return d(this,V).build(this,a).setData(l,{...n,manual:!0})}setQueriesData(e,t,n){return ne.batch(()=>d(this,V).findAll(e).map(({queryKey:a})=>[a,this.setQueryData(a,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=d(this,V).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=d(this,V);ne.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=d(this,V);return ne.batch(()=>(n.findAll(e).forEach(a=>{a.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},a=ne.batch(()=>d(this,V).findAll(e).map(s=>s.cancel(n)));return Promise.all(a).then(pe).catch(pe)}invalidateQueries(e,t={}){return ne.batch(()=>(d(this,V).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},a=ne.batch(()=>d(this,V).findAll(e).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let r=s.fetch(void 0,n);return n.throwOnError||(r=r.catch(pe)),s.state.fetchStatus==="paused"?Promise.resolve():r}));return Promise.all(a).then(pe)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=d(this,V).build(this,t);return n.isStaleByTime(Ye(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(pe).catch(pe)}fetchInfiniteQuery(e){return e.behavior=Da(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(pe).catch(pe)}ensureInfiniteQueryData(e){return e.behavior=Da(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return un.isOnline()?d(this,ze).resumePausedMutations():Promise.resolve()}getQueryCache(){return d(this,V)}getMutationCache(){return d(this,ze)}getDefaultOptions(){return d(this,Je)}setDefaultOptions(e){k(this,Je,e)}setQueryDefaults(e,t){d(this,_t).set(zt(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...d(this,_t).values()],n={};return t.forEach(a=>{Jt(e,a.queryKey)&&Object.assign(n,a.defaultOptions)}),n}setMutationDefaults(e,t){d(this,Rt).set(zt(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...d(this,Rt).values()],n={};return t.forEach(a=>{Jt(e,a.mutationKey)&&Object.assign(n,a.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...d(this,Je).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=ia(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===la&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...d(this,Je).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){d(this,V).clear(),d(this,ze).clear()}},V=new WeakMap,ze=new WeakMap,Je=new WeakMap,_t=new WeakMap,Rt=new WeakMap,We=new WeakMap,At=new WeakMap,Pt=new WeakMap,us),ue,j,Qt,ie,ct,$t,Ke,Ve,Yt,Ct,Nt,dt,ut,Qe,Ot,H,Gt,Fn,Un,Hn,qn,Gn,Bn,zn,Qs,hs,sl=(hs=class extends Xt{constructor(t,n){super();_(this,H);_(this,ue);_(this,j);_(this,Qt);_(this,ie);_(this,ct);_(this,$t);_(this,Ke);_(this,Ve);_(this,Yt);_(this,Ct);_(this,Nt);_(this,dt);_(this,ut);_(this,Qe);_(this,Ot,new Set);this.options=n,k(this,ue,t),k(this,Ve,null),k(this,Ke,Mn()),this.options.experimental_prefetchInRender||d(this,Ke).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(d(this,j).addObserver(this),Ma(d(this,j),this.options)?O(this,H,Gt).call(this):this.updateResult(),O(this,H,qn).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Jn(d(this,j),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Jn(d(this,j),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,O(this,H,Gn).call(this),O(this,H,Bn).call(this),d(this,j).removeObserver(this)}setOptions(t){const n=this.options,a=d(this,j);if(this.options=d(this,ue).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof ye(this.options.enabled,d(this,j))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");O(this,H,zn).call(this),d(this,j).setOptions(this.options),n._defaulted&&!In(this.options,n)&&d(this,ue).getQueryCache().notify({type:"observerOptionsUpdated",query:d(this,j),observer:this});const s=this.hasListeners();s&&Fa(d(this,j),a,this.options,n)&&O(this,H,Gt).call(this),this.updateResult(),s&&(d(this,j)!==a||ye(this.options.enabled,d(this,j))!==ye(n.enabled,d(this,j))||Ye(this.options.staleTime,d(this,j))!==Ye(n.staleTime,d(this,j)))&&O(this,H,Fn).call(this);const r=O(this,H,Un).call(this);s&&(d(this,j)!==a||ye(this.options.enabled,d(this,j))!==ye(n.enabled,d(this,j))||r!==d(this,Qe))&&O(this,H,Hn).call(this,r)}getOptimisticResult(t){const n=d(this,ue).getQueryCache().build(d(this,ue),t),a=this.createResult(n,t);return ol(this,a)&&(k(this,ie,a),k(this,$t,this.options),k(this,ct,d(this,j).state)),a}getCurrentResult(){return d(this,ie)}trackResult(t,n){return new Proxy(t,{get:(a,s)=>(this.trackProp(s),n==null||n(s),Reflect.get(a,s))})}trackProp(t){d(this,Ot).add(t)}getCurrentQuery(){return d(this,j)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const n=d(this,ue).defaultQueryOptions(t),a=d(this,ue).getQueryCache().build(d(this,ue),n);return a.fetch().then(()=>this.createResult(a,n))}fetch(t){return O(this,H,Gt).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),d(this,ie)))}createResult(t,n){var L;const a=d(this,j),s=this.options,r=d(this,ie),l=d(this,ct),i=d(this,$t),u=t!==a?t.state:d(this,Qt),{state:p}=t;let g={...p},y=!1,c;if(n._optimisticResults){const I=this.hasListeners(),Q=!I&&Ma(t,n),R=I&&Fa(t,a,n,s);(Q||R)&&(g={...g,...Vs(p.data,t.options)}),n._optimisticResults==="isRestoring"&&(g.fetchStatus="idle")}let{error:v,errorUpdatedAt:m,status:b}=g;c=g.data;let x=!1;if(n.placeholderData!==void 0&&c===void 0&&b==="pending"){let I;r!=null&&r.isPlaceholderData&&n.placeholderData===(i==null?void 0:i.placeholderData)?(I=r.data,x=!0):I=typeof n.placeholderData=="function"?n.placeholderData((L=d(this,Nt))==null?void 0:L.state.data,d(this,Nt)):n.placeholderData,I!==void 0&&(b="success",c=Ln(r==null?void 0:r.data,I,n),y=!0)}if(n.select&&c!==void 0&&!x)if(r&&c===(l==null?void 0:l.data)&&n.select===d(this,Yt))c=d(this,Ct);else try{k(this,Yt,n.select),c=n.select(c),c=Ln(r==null?void 0:r.data,c,n),k(this,Ct,c),k(this,Ve,null)}catch(I){k(this,Ve,I)}d(this,Ve)&&(v=d(this,Ve),c=d(this,Ct),m=Date.now(),b="error");const T=g.fetchStatus==="fetching",S=b==="pending",C=b==="error",F=S&&T,U=c!==void 0,z={status:b,fetchStatus:g.fetchStatus,isPending:S,isSuccess:b==="success",isError:C,isInitialLoading:F,isLoading:F,data:c,dataUpdatedAt:g.dataUpdatedAt,error:v,errorUpdatedAt:m,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>u.dataUpdateCount||g.errorUpdateCount>u.errorUpdateCount,isFetching:T,isRefetching:T&&!S,isLoadingError:C&&!U,isPaused:g.fetchStatus==="paused",isPlaceholderData:y,isRefetchError:C&&U,isStale:da(t,n),refetch:this.refetch,promise:d(this,Ke),isEnabled:ye(n.enabled,t)!==!1};if(this.options.experimental_prefetchInRender){const I=ce=>{z.status==="error"?ce.reject(z.error):z.data!==void 0&&ce.resolve(z.data)},Q=()=>{const ce=k(this,Ke,z.promise=Mn());I(ce)},R=d(this,Ke);switch(R.status){case"pending":t.queryHash===a.queryHash&&I(R);break;case"fulfilled":(z.status==="error"||z.data!==R.value)&&Q();break;case"rejected":(z.status!=="error"||z.error!==R.reason)&&Q();break}}return z}updateResult(){const t=d(this,ie),n=this.createResult(d(this,j),this.options);if(k(this,ct,d(this,j).state),k(this,$t,this.options),d(this,ct).data!==void 0&&k(this,Nt,d(this,j)),In(n,t))return;k(this,ie,n);const a=()=>{if(!t)return!0;const{notifyOnChangeProps:s}=this.options,r=typeof s=="function"?s():s;if(r==="all"||!r&&!d(this,Ot).size)return!0;const l=new Set(r??d(this,Ot));return this.options.throwOnError&&l.add("error"),Object.keys(d(this,ie)).some(i=>{const h=i;return d(this,ie)[h]!==t[h]&&l.has(h)})};O(this,H,Qs).call(this,{listeners:a()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&O(this,H,qn).call(this)}},ue=new WeakMap,j=new WeakMap,Qt=new WeakMap,ie=new WeakMap,ct=new WeakMap,$t=new WeakMap,Ke=new WeakMap,Ve=new WeakMap,Yt=new WeakMap,Ct=new WeakMap,Nt=new WeakMap,dt=new WeakMap,ut=new WeakMap,Qe=new WeakMap,Ot=new WeakMap,H=new WeakSet,Gt=function(t){O(this,H,zn).call(this);let n=d(this,j).fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(pe)),n},Fn=function(){O(this,H,Gn).call(this);const t=Ye(this.options.staleTime,d(this,j));if(pt||d(this,ie).isStale||!jn(t))return;const a=qs(d(this,ie).dataUpdatedAt,t)+1;k(this,dt,setTimeout(()=>{d(this,ie).isStale||this.updateResult()},a))},Un=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(d(this,j)):this.options.refetchInterval)??!1},Hn=function(t){O(this,H,Bn).call(this),k(this,Qe,t),!(pt||ye(this.options.enabled,d(this,j))===!1||!jn(d(this,Qe))||d(this,Qe)===0)&&k(this,ut,setInterval(()=>{(this.options.refetchIntervalInBackground||ca.isFocused())&&O(this,H,Gt).call(this)},d(this,Qe)))},qn=function(){O(this,H,Fn).call(this),O(this,H,Hn).call(this,O(this,H,Un).call(this))},Gn=function(){d(this,dt)&&(clearTimeout(d(this,dt)),k(this,dt,void 0))},Bn=function(){d(this,ut)&&(clearInterval(d(this,ut)),k(this,ut,void 0))},zn=function(){const t=d(this,ue).getQueryCache().build(d(this,ue),this.options);if(t===d(this,j))return;const n=d(this,j);k(this,j,t),k(this,Qt,t.state),this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))},Qs=function(t){ne.batch(()=>{t.listeners&&this.listeners.forEach(n=>{n(d(this,ie))}),d(this,ue).getQueryCache().notify({query:d(this,j),type:"observerResultsUpdated"})})},hs);function rl(e,t){return ye(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Ma(e,t){return rl(e,t)||e.state.data!==void 0&&Jn(e,t,t.refetchOnMount)}function Jn(e,t,n){if(ye(t.enabled,e)!==!1&&Ye(t.staleTime,e)!=="static"){const a=typeof n=="function"?n(e):n;return a==="always"||a!==!1&&da(e,t)}return!1}function Fa(e,t,n,a){return(e!==t||ye(a.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&da(e,n)}function da(e,t){return ye(t.enabled,e)!==!1&&e.isStaleByTime(Ye(t.staleTime,e))}function ol(e,t){return!In(e.getCurrentResult(),t)}var Ys=f.createContext(void 0),il=e=>{const t=f.useContext(Ys);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},ll=({client:e,children:t})=>(f.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),o.jsx(Ys.Provider,{value:e,children:t})),Xs=f.createContext(!1),cl=()=>f.useContext(Xs);Xs.Provider;function dl(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var ul=f.createContext(dl()),hl=()=>f.useContext(ul),pl=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},ml=e=>{f.useEffect(()=>{e.clearReset()},[e])},fl=({result:e,errorResetBoundary:t,throwOnError:n,query:a,suspense:s})=>e.isError&&!t.isReset()&&!e.isFetching&&a&&(s&&e.data===void 0||Bi(n,[e.error,a])),gl=e=>{if(e.suspense){const t=a=>a==="static"?a:Math.max(a??1e3,1e3),n=e.staleTime;e.staleTime=typeof n=="function"?(...a)=>t(n(...a)):t(n),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},bl=(e,t)=>e.isLoading&&e.isFetching&&!t,yl=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,Ua=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function wl(e,t,n){var g,y,c,v,m;const a=cl(),s=hl(),r=il(),l=r.defaultQueryOptions(e);(y=(g=r.getDefaultOptions().queries)==null?void 0:g._experimental_beforeQuery)==null||y.call(g,l),l._optimisticResults=a?"isRestoring":"optimistic",gl(l),pl(l,s),ml(s);const i=!r.getQueryCache().get(l.queryHash),[h]=f.useState(()=>new t(r,l)),u=h.getOptimisticResult(l),p=!a&&e.subscribed!==!1;if(f.useSyncExternalStore(f.useCallback(b=>{const x=p?h.subscribe(ne.batchCalls(b)):pe;return h.updateResult(),x},[h,p]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),f.useEffect(()=>{h.setOptions(l)},[l,h]),yl(l,u))throw Ua(l,h,s);if(fl({result:u,errorResetBoundary:s,throwOnError:l.throwOnError,query:r.getQueryCache().get(l.queryHash),suspense:l.suspense}))throw u.error;if((v=(c=r.getDefaultOptions().queries)==null?void 0:c._experimental_afterQuery)==null||v.call(c,l,u),l.experimental_prefetchInRender&&!pt&&bl(u,a)){const b=i?Ua(l,h,s):(m=r.getQueryCache().get(l.queryHash))==null?void 0:m.promise;b==null||b.catch(pe).finally(()=>{h.updateResult()})}return l.notifyOnChangeProps?u:h.trackResult(u)}function Zs(e,t){return wl(e,sl)}var vl=typeof Element<"u",xl=typeof Map=="function",kl=typeof Set=="function",Tl=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function cn(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,a,s;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(!cn(e[a],t[a]))return!1;return!0}var r;if(xl&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(r=e.entries();!(a=r.next()).done;)if(!t.has(a.value[0]))return!1;for(r=e.entries();!(a=r.next()).done;)if(!cn(a.value[1],t.get(a.value[0])))return!1;return!0}if(kl&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(r=e.entries();!(a=r.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(Tl&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(s=Object.keys(e),n=s.length,n!==Object.keys(t).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[a]))return!1;if(vl&&e instanceof Element)return!1;for(a=n;a--!==0;)if(!((s[a]==="_owner"||s[a]==="__v"||s[a]==="__o")&&e.$$typeof)&&!cn(e[s[a]],t[s[a]]))return!1;return!0}return e!==e&&t!==t}var Sl=function(t,n){try{return cn(t,n)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}};const El=ta(Sl);var _l=function(e,t,n,a,s,r,l,i){if(!e){var h;if(t===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,a,s,r,l,i],p=0;h=new Error(t.replace(/%s/g,function(){return u[p++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}},Rl=_l;const Ha=ta(Rl);var Al=function(t,n,a,s){var r=a?a.call(s,t,n):void 0;if(r!==void 0)return!!r;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var l=Object.keys(t),i=Object.keys(n);if(l.length!==i.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(n),u=0;u<l.length;u++){var p=l[u];if(!h(p))return!1;var g=t[p],y=n[p];if(r=a?a.call(s,g,y,p):void 0,r===!1||r===void 0&&g!==y)return!1}return!0};const Pl=ta(Al);var er=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(er||{}),En={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},qa=Object.values(er),ua={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},$l=Object.entries(ua).reduce((e,[t,n])=>(e[n]=t,e),{}),Ee="data-rh",vt={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},xt=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const a=e[n];if(Object.prototype.hasOwnProperty.call(a,t))return a[t]}return null},Cl=e=>{let t=xt(e,"title");const n=xt(e,vt.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const a=xt(e,vt.DEFAULT_TITLE);return t||a||void 0},Nl=e=>xt(e,vt.ON_CHANGE_CLIENT_STATE)||(()=>{}),_n=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,a)=>({...n,...a}),{}),Ol=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,a)=>{if(!n.length){const s=Object.keys(a);for(let r=0;r<s.length;r+=1){const i=s[r].toLowerCase();if(e.indexOf(i)!==-1&&a[i])return n.concat(a)}}return n},[]),jl=e=>console&&typeof console.warn=="function"&&console.warn(e),Ft=(e,t,n)=>{const a={};return n.filter(s=>Array.isArray(s[e])?!0:(typeof s[e]<"u"&&jl(`Helmet: ${e} should be of type "Array". Instead found type "${typeof s[e]}"`),!1)).map(s=>s[e]).reverse().reduce((s,r)=>{const l={};r.filter(h=>{let u;const p=Object.keys(h);for(let y=0;y<p.length;y+=1){const c=p[y],v=c.toLowerCase();t.indexOf(v)!==-1&&!(u==="rel"&&h[u].toLowerCase()==="canonical")&&!(v==="rel"&&h[v].toLowerCase()==="stylesheet")&&(u=v),t.indexOf(c)!==-1&&(c==="innerHTML"||c==="cssText"||c==="itemprop")&&(u=c)}if(!u||!h[u])return!1;const g=h[u].toLowerCase();return a[u]||(a[u]={}),l[u]||(l[u]={}),a[u][g]?!1:(l[u][g]=!0,!0)}).reverse().forEach(h=>s.push(h));const i=Object.keys(l);for(let h=0;h<i.length;h+=1){const u=i[h],p={...a[u],...l[u]};a[u]=p}return s},[]).reverse()},Il=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},Dl=e=>({baseTag:Ol(["href"],e),bodyAttributes:_n("bodyAttributes",e),defer:xt(e,vt.DEFER),encode:xt(e,vt.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:_n("htmlAttributes",e),linkTags:Ft("link",["rel","href"],e),metaTags:Ft("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:Ft("noscript",["innerHTML"],e),onChangeClientState:Nl(e),scriptTags:Ft("script",["src","innerHTML"],e),styleTags:Ft("style",["cssText"],e),title:Cl(e),titleAttributes:_n("titleAttributes",e),prioritizeSeoTags:Il(e,vt.PRIORITIZE_SEO_TAGS)}),tr=e=>Array.isArray(e)?e.join(""):e,Ll=(e,t)=>{const n=Object.keys(e);for(let a=0;a<n.length;a+=1)if(t[n[a]]&&t[n[a]].includes(e[n[a]]))return!0;return!1},Rn=(e,t)=>Array.isArray(e)?e.reduce((n,a)=>(Ll(a,t)?n.priority.push(a):n.default.push(a),n),{priority:[],default:[]}):{default:e,priority:[]},Ga=(e,t)=>({...e,[t]:void 0}),Ml=["noscript","script","style"],Wn=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),nr=e=>Object.keys(e).reduce((t,n)=>{const a=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${a}`:a},""),Fl=(e,t,n,a)=>{const s=nr(n),r=tr(t);return s?`<${e} ${Ee}="true" ${s}>${Wn(r,a)}</${e}>`:`<${e} ${Ee}="true">${Wn(r,a)}</${e}>`},Ul=(e,t,n=!0)=>t.reduce((a,s)=>{const r=s,l=Object.keys(r).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,p)=>{const g=typeof r[p]>"u"?p:`${p}="${Wn(r[p],n)}"`;return u?`${u} ${g}`:g},""),i=r.innerHTML||r.cssText||"",h=Ml.indexOf(e)===-1;return`${a}<${e} ${Ee}="true" ${l}${h?"/>":`>${i}</${e}>`}`},""),ar=(e,t={})=>Object.keys(e).reduce((n,a)=>{const s=ua[a];return n[s||a]=e[a],n},t),Hl=(e,t,n)=>{const a={key:t,[Ee]:!0},s=ar(n,a);return[w.createElement("title",s,t)]},dn=(e,t)=>t.map((n,a)=>{const s={key:a,[Ee]:!0};return Object.keys(n).forEach(r=>{const i=ua[r]||r;if(i==="innerHTML"||i==="cssText"){const h=n.innerHTML||n.cssText;s.dangerouslySetInnerHTML={__html:h}}else s[i]=n[r]}),w.createElement(e,s)}),ge=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>Hl(e,t.title,t.titleAttributes),toString:()=>Fl(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>ar(t),toString:()=>nr(t)};default:return{toComponent:()=>dn(e,t),toString:()=>Ul(e,t,n)}}},ql=({metaTags:e,linkTags:t,scriptTags:n,encode:a})=>{const s=Rn(e,En.meta),r=Rn(t,En.link),l=Rn(n,En.script);return{priorityMethods:{toComponent:()=>[...dn("meta",s.priority),...dn("link",r.priority),...dn("script",l.priority)],toString:()=>`${ge("meta",s.priority,a)} ${ge("link",r.priority,a)} ${ge("script",l.priority,a)}`},metaTags:s.default,linkTags:r.default,scriptTags:l.default}},Gl=e=>{const{baseTag:t,bodyAttributes:n,encode:a=!0,htmlAttributes:s,noscriptTags:r,styleTags:l,title:i="",titleAttributes:h,prioritizeSeoTags:u}=e;let{linkTags:p,metaTags:g,scriptTags:y}=e,c={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:c,linkTags:p,metaTags:g,scriptTags:y}=ql(e)),{priority:c,base:ge("base",t,a),bodyAttributes:ge("bodyAttributes",n,a),htmlAttributes:ge("htmlAttributes",s,a),link:ge("link",p,a),meta:ge("meta",g,a),noscript:ge("noscript",r,a),script:ge("script",y,a),style:ge("style",l,a),title:ge("title",{title:i,titleAttributes:h},a)}},Kn=Gl,sn=[],sr=!!(typeof window<"u"&&window.document&&window.document.createElement),Vn=class{constructor(e,t){Ce(this,"instances",[]);Ce(this,"canUseDOM",sr);Ce(this,"context");Ce(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?sn:this.instances,add:e=>{(this.canUseDOM?sn:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?sn:this.instances).indexOf(e);(this.canUseDOM?sn:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Kn({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Bl={},rr=w.createContext(Bl),ht,or=(ht=class extends f.Component{constructor(n){super(n);Ce(this,"helmetData");this.helmetData=new Vn(this.props.context||{},ht.canUseDOM)}render(){return w.createElement(rr.Provider,{value:this.helmetData.value},this.props.children)}},Ce(ht,"canUseDOM",sr),ht),yt=(e,t)=>{const n=document.head||document.querySelector("head"),a=n.querySelectorAll(`${e}[${Ee}]`),s=[].slice.call(a),r=[];let l;return t&&t.length&&t.forEach(i=>{const h=document.createElement(e);for(const u in i)if(Object.prototype.hasOwnProperty.call(i,u))if(u==="innerHTML")h.innerHTML=i.innerHTML;else if(u==="cssText")h.styleSheet?h.styleSheet.cssText=i.cssText:h.appendChild(document.createTextNode(i.cssText));else{const p=u,g=typeof i[p]>"u"?"":i[p];h.setAttribute(u,g)}h.setAttribute(Ee,"true"),s.some((u,p)=>(l=p,h.isEqualNode(u)))?s.splice(l,1):r.push(h)}),s.forEach(i=>{var h;return(h=i.parentNode)==null?void 0:h.removeChild(i)}),r.forEach(i=>n.appendChild(i)),{oldTags:s,newTags:r}},Qn=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const a=n.getAttribute(Ee),s=a?a.split(","):[],r=[...s],l=Object.keys(t);for(const i of l){const h=t[i]||"";n.getAttribute(i)!==h&&n.setAttribute(i,h),s.indexOf(i)===-1&&s.push(i);const u=r.indexOf(i);u!==-1&&r.splice(u,1)}for(let i=r.length-1;i>=0;i-=1)n.removeAttribute(r[i]);s.length===r.length?n.removeAttribute(Ee):n.getAttribute(Ee)!==l.join(",")&&n.setAttribute(Ee,l.join(","))},zl=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=tr(e)),Qn("title",t)},Ba=(e,t)=>{const{baseTag:n,bodyAttributes:a,htmlAttributes:s,linkTags:r,metaTags:l,noscriptTags:i,onChangeClientState:h,scriptTags:u,styleTags:p,title:g,titleAttributes:y}=e;Qn("body",a),Qn("html",s),zl(g,y);const c={baseTag:yt("base",n),linkTags:yt("link",r),metaTags:yt("meta",l),noscriptTags:yt("noscript",i),scriptTags:yt("script",u),styleTags:yt("style",p)},v={},m={};Object.keys(c).forEach(b=>{const{newTags:x,oldTags:T}=c[b];x.length&&(v[b]=x),T.length&&(m[b]=c[b].oldTags)}),t&&t(),h(e,v,m)},Ut=null,Jl=e=>{Ut&&cancelAnimationFrame(Ut),e.defer?Ut=requestAnimationFrame(()=>{Ba(e,()=>{Ut=null})}):(Ba(e),Ut=null)},Wl=Jl,za=class extends f.Component{constructor(){super(...arguments);Ce(this,"rendered",!1)}shouldComponentUpdate(t){return!Pl(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let a=null;const s=Dl(t.get().map(r=>{const l={...r.props};return delete l.context,l}));or.canUseDOM?Wl(s):Kn&&(a=Kn(s)),n(a)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},$n,cd=($n=class extends f.Component{shouldComponentUpdate(e){return!El(Ga(this.props,"helmetData"),Ga(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,a){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,a)}]}}mapObjectTypeChildren(e,t,n,a){switch(e.type){case"title":return{...t,[e.type]:a,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(a=>{n={...n,[a]:e[a]}}),n}warnOnInvalidChildren(e,t){return Ha(qa.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${qa.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),Ha(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return w.Children.forEach(e,a=>{if(!a||!a.props)return;const{children:s,...r}=a.props,l=Object.keys(r).reduce((h,u)=>(h[$l[u]||u]=r[u],h),{});let{type:i}=a;switch(typeof i=="symbol"?i=i.toString():this.warnOnInvalidChildren(a,s),i){case"Symbol(react.fragment)":t=this.mapChildrenToProps(s,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(a,n,l,s);break;default:t=this.mapObjectTypeChildren(a,t,l,s);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:a}=t;if(e&&(n=this.mapChildrenToProps(e,n)),a&&!(a instanceof Vn)){const s=a;a=new Vn(s.context,!0),delete n.helmetData}return a?w.createElement(za,{...n,context:a.value}):w.createElement(rr.Consumer,null,s=>w.createElement(za,{...n,context:s}))}},Ce($n,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),$n);const Kl=aa("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",hero:"bg-primary text-primary-foreground font-mono uppercase tracking-widest font-semibold hover:bg-primary/90 hover:shadow-[0_0_26px_-6px_hsl(var(--primary)/0.6)]",heroOutline:"border border-primary/60 text-foreground bg-transparent font-mono uppercase tracking-widest font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary",glass:"border border-border bg-background/70 backdrop-blur-md text-foreground hover:border-primary/50 hover:text-primary"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-sm px-3",lg:"h-12 rounded-sm px-7 text-sm",xl:"h-14 rounded-sm px-10 text-base",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ie=f.forwardRef(({className:e,variant:t,size:n,asChild:a=!1,...s},r)=>{const l=a?Kr:"button";return o.jsx(l,{className:q(Kl({variant:t,size:n,className:e})),ref:r,...s})});Ie.displayName="Button";let Yn;const Xn=[];function Vl(e){Yn=e;for(const t of Xn)e.capture(...t);Xn.length=0}const Ql={capture:(...e)=>{if(Yn)return Yn.capture(...e);Xn.push(e)}};function Zt(){return Ql}function Yl({theme:e,toggleTheme:t}){const n=Zt(),a=()=>{t(),n==null||n.capture("theme_toggled",{theme:e==="dark"?"light":"dark"})};return o.jsx(Ie,{variant:"glass",size:"icon",onClick:a,"aria-label":`Switch to ${e==="dark"?"light":"dark"} mode`,title:`Switch to ${e==="dark"?"light":"dark"} mode`,className:"relative overflow-hidden",children:o.jsx("div",{className:"transition-transform duration-300 ease-in-out",style:{transform:`rotate(${e==="dark"?0:180}deg)`},children:e==="dark"?o.jsx(xo,{className:"h-5 w-5"}):o.jsx(To,{className:"h-5 w-5"})})})}const Xl=xs,Zl=Vr,Ja=ea,ec=vs,ir=f.forwardRef(({className:e,...t},n)=>o.jsx(hn,{className:q("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:n}));ir.displayName=hn.displayName;const tc=aa("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),lr=f.forwardRef(({side:e="right",className:t,children:n,...a},s)=>o.jsxs(ec,{children:[o.jsx(ir,{}),o.jsxs(pn,{ref:s,className:q(tc({side:e}),t),...a,children:[n,o.jsxs(ea,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[o.jsx(ra,{className:"h-4 w-4"}),o.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));lr.displayName=pn.displayName;const cr=({className:e,...t})=>o.jsx("div",{className:q("flex flex-col space-y-2 text-center sm:text-left",e),...t});cr.displayName="SheetHeader";const dr=f.forwardRef(({className:e,...t},n)=>o.jsx(mn,{ref:n,className:q("text-lg font-semibold text-foreground",e),...t}));dr.displayName=mn.displayName;const ur=f.forwardRef(({className:e,...t},n)=>o.jsx(fn,{ref:n,className:q("text-sm text-muted-foreground",e),...t}));ur.displayName=fn.displayName;function nc(e){const[t,n]=f.useState("");return f.useEffect(()=>{const a=()=>{const s=window.scrollY+200;for(const r of e){const l=document.getElementById(r);if(l){const{offsetTop:i,offsetHeight:h}=l;if(s>=i&&s<i+h){n(r);return}}}window.scrollY<100&&n("")};return a(),window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[e]),t}const Wa="https://assets.calendly.com/assets/external/widget.css",ac="https://assets.calendly.com/assets/external/widget.js";let Ht=null;function hr(){if(document.querySelector(`link[href="${Wa}"]`))return;const e=document.createElement("link");e.rel="stylesheet",e.href=Wa,document.head.appendChild(e)}function pr(){return window.Calendly?Promise.resolve():Ht||(Ht=new Promise((e,t)=>{const n=document.createElement("script");n.src=ac,n.async=!0,n.onload=()=>e(),n.onerror=()=>{Ht=null,t(new Error("Failed to load Calendly widget"))},document.body.appendChild(n)}),Ht)}function An(){typeof document>"u"||(hr(),pr().catch(()=>{}))}async function mr(e){var t;typeof document>"u"||(hr(),await pr(),(t=window.Calendly)==null||t.initPopupWidget({url:e}))}const qt={name:"Abdelrahman Saed",role:"Senior / Lead Mobile Engineer",subtitle:"Flutter / Mobile Architect",company:"iStoria",companyUrl:"https://istoria.app/en",location:"Cairo, Egypt / Remote",email:"me@bnsaed.com",avatarUrl:"https://avatars.githubusercontent.com/u/33700292?v=4",tagline:"I ship production iOS & Android apps to 5M+ users — 7 years of Flutter, Dart, BLoC/Cubit, and Clean Architecture. I lead a mobile squad at iStoria, owning architecture, release governance, and delivery across a 50+ module codebase."},nt={github:"https://github.com/binSaed",linkedin:"https://www.linkedin.com/in/binsaed/",linkedinRecommendations:"https://www.linkedin.com/in/binsaed/details/recommendations/",stackoverflow:"https://stackoverflow.com/users/11001850/abdelrahman-saed",pubdev:"https://pub.dev/publishers/bnsaed.com/packages",cv:"https://bnsaed.com/CV/cv.pdf",email:"mailto:me@bnsaed.com",calendly:"https://calendly.com/bnsaed/meet"},dd=["I'm a Senior / Lead Mobile Engineer with 7 years building production iOS and Android apps that have reached over 5 million users. I work in Flutter and Dart with BLoC/Cubit and Clean Architecture, and I care as much about release engineering and stability as I do about the features users see.","Today I lead a 4-engineer mobile squad at iStoria, owning architecture direction, release governance, and delivery for a 50+ module codebase. I've shipped 250+ production releases, reviewed 600+ PRs, sustained a 99.9% crash-free rate, and cut our release cycle from four weeks to one."],fr=[{value:"7+",label:"Years shipping mobile"},{value:"5M+",label:"Users reached"},{value:"99.9%",label:"Crash-free rate"},{value:"250+",label:"Production releases"},{value:"600+",label:"PRs reviewed"},{value:"30K+",label:"Abuse accounts blocked"}],ud=[{role:"Lead Mobile Engineer",company:"iStoria",companyUrl:"https://istoria.app/en/",context:"EdTech · English Language Learning",location:"Riyadh, Saudi Arabia (Hybrid)",period:"Jun 2025 – Present",stack:["Flutter","Dart","BLoC","Cubit","PowerSync","Drift","Firebase","Sentry","GitHub Actions","GraphQL"],highlights:["Lead a 4-engineer iOS/Android squad — architecture direction, hiring bar, release governance, and quarterly roadmaps for a 5M+ user base.","Cut the release cycle 75% (4 weeks → 1) via trunk-based development, feature flags, and end-to-end CI/CD ownership.","Architected a modular Flutter codebase with 50+ feature modules and 140+ routes, enforced through CI quality gates and code review.","Hardened production security end-to-end: PII masked in logs and Sentry, cleartext traffic disabled, and TLS certificate validation enforced."]},{role:"Founding Mobile Engineer",company:"iStoria",companyUrl:"https://istoria.app/en/",context:"EdTech · English Language Learning",location:"Riyadh, Saudi Arabia (Hybrid)",period:"Jan 2022 – Jun 2025 · 3 yrs 6 mos",stack:["Flutter","Dart","BLoC","Cubit","PowerSync","Drift","Codemagic","Firebase","RevenueCat","Adjust"],highlights:["Shipped flagship growth & AI features end-to-end: Leaderboard with social sharing, AI Read-with (speech recognition), and the iStro AI chat companion.","Designed offline-first infrastructure (PowerSync + Drift) — selective per-key sync, conflict resolution, and schema migration for millions of accounts.","Architected a cross-platform anti-piracy system (jailbreak/root/tamper detection + backend behavioral analysis) that auto-blocked 30,000+ abusive accounts.","Drove a sustained performance program: ~35% cold-start reduction, ~60% rendering gains, and ~20% memory reduction."]},{role:"Mobile Engineer",company:"Happy Trip",companyUrl:"https://www.linkedin.com/company/happytrip-ar",context:"Travel / Tourism Tech",location:"Cairo, Egypt",period:"Oct 2020 – Jan 2022 · 1 yr 4 mos",stack:["Flutter","Dart","REST","Firebase"],highlights:["Owned mobile delivery end-to-end across the Flutter team — task planning, code-review gates, and the release cadence for every ship.","Architected a networking SDK with multi-layer caching, request queueing, auto-retry, token refresh, and background parsing — cutting networking code 60%.","Delivered the company's first mobile platform (consumer booking, internal HR, POS) in 14 months, enabling a full business pivot."]},{role:"Mobile Engineer (Part-time)",company:"Tech Bay Portal",companyUrl:"",context:"Ride-hailing",location:"UAE (Remote)",period:"Feb 2021 – Oct 2021 · 9 mos",stack:["Flutter","Dart","Socket.io","Google Maps"],highlights:["Delivered real-time GPS tracking and live trip updates (Socket.io, Google Maps) across driver and rider apps.","Hardened the live-tracking pipeline against intermittent connectivity — buffering location updates locally and replaying on reconnect."]},{role:"Mobile Engineer",company:"FekraSoft Co",companyUrl:"https://www.linkedin.com/company/fekrasoft",context:"Software House",location:"Cairo, Egypt",period:"Aug 2019 – Sep 2020 · 1 yr 2 mos",stack:["Flutter","Dart","RxDart","Firebase"],highlights:["Led company-wide Flutter adoption as the first Flutter engineer, mentoring the Android team and authoring the shared coding standards still in use.","Shipped production e-commerce and document-management apps with barcode scanning and file-level encryption."]}],hd=[{category:"Mobile",icon:"Smartphone",items:["Flutter","Dart","iOS","Android","Adaptive UI","Animations","WidgetKit","Deep Linking","Push (FCM)","i18n / RTL"]},{category:"Architecture & Data",icon:"Database",items:["Clean Architecture","MVVM","BLoC","Cubit","SOLID","Dependency Injection","PowerSync","Drift","Offline-first"]},{category:"DevOps & Quality",icon:"GitBranch",items:["CI/CD","GitHub Actions","Codemagic","Fastlane","Trunk-based","Feature Flags","Sentry","Maestro / Patrol","Unit / Widget Tests"]},{category:"Monetization",icon:"CreditCard",items:["RevenueCat","Stripe","Paddle","AdMob","In-App Purchases"]},{category:"Analytics & Engagement",icon:"LineChart",items:["Adjust","CleverTap","PostHog","Segment","WebEngage","MoEngage","A/B Testing","GrowthBook"]},{category:"Leadership",icon:"Users",items:["Architecture Ownership","Technical RFCs","Release Governance","Code Review","Mentoring"]}],pd=[{title:"flutter_cached_pdfview",description:"Native PDF viewer for iOS & Android with URL/asset/local caching, password-protected files, and gesture-based zoom.",image:"https://github.com/user-attachments/assets/77ccded4-5c51-4583-9830-0f1c66e627c4",tags:["Flutter","Dart","PDF","iOS","Android"],github:"https://github.com/binSaed/flutter_cached_pdfview",demo:"https://pub.dev/packages/flutter_cached_pdfview",stars:134,likes:501,downloads:43300},{title:"iStoria",description:"Story-based English learning used by millions. A core mobile engineer since the founding — owning architecture, offline-first sync, and growth features.",image:"https://play-lh.googleusercontent.com/nO5vER33waTf8T7vKPo-HYHflKVldZna_yQnqeB3Hqv9smjPiP-xGBTCGXWLFNIPn00",tags:["Flutter","Dart","Firebase","EdTech"],demo:"https://istoria.app/en/",downloads:5e6},{title:"Stickerawy",description:"WhatsApp stickers app for Android, with 500K+ installs on Google Play.",tags:["Flutter","Android","WhatsApp"],demo:"https://play.google.com/store/apps/details?id=com.stickerawy.stickers",downloads:5e5},{title:"clipboard_plus",description:"Flutter clipboard plugin with silent content-type detection on iOS — detects URLs, text, and images without triggering the paste permission dialog.",tags:["Flutter","iOS","Android","Plugin"],github:"https://github.com/binSaed/clipboard_plus",demo:"https://pub.dev/packages/clipboard_plus"},{title:"flutter_zoom_checker",description:"iOS/Android display-zoom (UI scaling) detection plugin, working around a Flutter framework limitation (issue #95421).",tags:["Flutter","iOS","Android","Plugin"],github:"https://github.com/binSaed/flutter_zoom_checker",demo:"https://pub.dev/packages/flutter_zoom_checker"},{title:"dio_firebase_performance_plus",description:"Dio interceptor that streams HTTP request metrics to Firebase Performance Monitoring.",tags:["Dart","Dio","Firebase"],github:"https://github.com/binSaed/dio_firebase_performance_plus"}],md=[{name:"youtube_explode_dart",url:"https://github.com/Hexer10/youtube_explode_dart/pull/371"},{name:"dio_smart_retry",url:"https://github.com/rodion-m/dio_smart_retry/pull/36"},{name:"growthbook-flutter",url:"https://github.com/growthbook/growthbook-flutter/pulls?q=author:binSaed"}],fd=[{name:"Saber Son",title:"Flutter Developer · YouTuber",relationship:"Reported directly to Abdelrahman",date:"2026-06-03",initials:"SS",image:"/recommendations/saber-son.jpg",linkedin:"https://www.linkedin.com/in/saber-son-b100b4177/",quote:"One of the things I admire most about Abdelrahman is how supportive he is. Whenever I face a challenge, he never hesitates to put aside what he's doing and help me figure it out. What sets him apart is that he doesn't just solve the problem and move on — he takes the time to explain the solution, the reasoning behind it, and how to approach similar situations in the future. Thanks to his guidance, I've become much more confident and independent when tackling technical challenges."},{name:"AlHassan Balousha",title:"Senior Software Engineer · 9+ yrs scaling apps",relationship:"Worked with Abdelrahman on the same team",date:"2026-02-16",initials:"AB",image:"/recommendations/alhassan-balousha.jpg",linkedin:"https://www.linkedin.com/in/alhassan-balousha-9b7bb8114/",quote:`Abdelrahman is a highly accomplished Software Engineer and Tech Lead with strong executive-level technical leadership.

He brings a strategic vision to building large-scale mobile applications, with deep expertise in designing scalable architectures capable of serving millions of users with stability and high performance. He combines strong engineering depth with disciplined execution, ensuring long-term product sustainability and technical excellence.

What sets him apart: influential technical leadership and sound architectural decision-making; proven ability to build scalable, high-performance systems; effective team leadership and strong engineering culture; high productivity without compromising code quality or performance; and exceptional ability to solve complex problems under pressure.

Abdelrahman is a strategic technical asset to any organization seeking strong leadership and long-term product impact.`},{name:"Fady Mondy",title:"Engineering Manager at ID8 Media · Creator of TomatoPHP",relationship:"Worked with Abdelrahman on the same team",date:"2026-01-24",initials:"FM",image:"/recommendations/fady-mondy.jpg",linkedin:"https://www.linkedin.com/in/fadymondy/",quote:"Abdelrahman played a pivotal role in the success of the iStoria mobile platform. His leadership of the mobile team was defined by technical excellence and a relentless focus on user experience. He successfully navigated complex integrations and maintained a high velocity of feature releases without compromising on code quality. He is a proactive leader who anticipates challenges before they arise, making him an invaluable asset to any engineering department."},{name:"Mohammed Helaiwa",title:"Full Stack Engineer at iStoria",relationship:"Worked with Abdelrahman on the same team",date:"2026-01-17",initials:"MH",image:"/recommendations/mohammed-helaiwa.jpg",linkedin:"https://www.linkedin.com/in/me-helaiwa/",quote:`I've had the pleasure of working with Abdelrahman Saed, and I can confidently say he is one of the most reliable and skilled software engineers I've collaborated with. Abdelrahman combines deep technical expertise in Flutter with a strong understanding of building scalable, high-quality applications, especially in the EdTech domain.

What truly sets Abdelrahman apart is his ability to think beyond just code. He approaches problems with a product mindset, balances performance with maintainability, and consistently delivers clean, well-architected solutions. As a Lead Software Engineer, he demonstrates excellent leadership, mentoring teammates, setting high engineering standards, and driving projects forward with clarity and ownership.

Abdelrahman is proactive, detail-oriented, and always eager to improve both the product and the team around him. Any organization would be fortunate to have him on board, and I highly recommend him for any role requiring strong technical leadership, Flutter expertise, and a passion for building impactful software.`},{name:"Maher Al-Ghannam",title:"Senior QA Engineer · ISTQB-CTFL",relationship:"Worked with Abdelrahman on different teams",date:"2026-01-17",initials:"MA",image:"/recommendations/maher-al-ghannam.jpg",linkedin:"https://www.linkedin.com/in/maher-alghannam/",quote:"I highly recommend Abdelrahman as a Flutter Developer Team Lead. He has strong expertise in Flutter development and consistently delivers high-quality, well-structured mobile applications. Beyond his technical skills, he is a supportive and effective leader who encourages collaboration, guides the team through challenges, and ensures projects are delivered on time with excellent quality. Working with him has been a great experience."},{name:"Omar Sulieman",title:"Growth & Performance Marketer",relationship:"Worked with Abdelrahman on different teams",date:"2026-01-15",initials:"OS",image:"/recommendations/omar-sulieman.jpg",linkedin:"https://www.linkedin.com/in/omar-sulieman-3b7861217/",quote:`I've had the pleasure of working with Abdelrahman, and he is genuinely one of the strongest software engineers I've collaborated with.

He has deep hands-on expertise in Flutter, with a solid understanding of building scalable, high-performance mobile applications. What really sets him apart is his ability to think beyond implementation — he understands architecture, performance trade-offs, and long-term maintainability, which is critical for growing products.

In the EdTech space, Abdelrahman shows strong product awareness and a clear understanding of how technology should support learning outcomes, not just features. He's reliable, detail-oriented, and consistently delivers clean, well-structured code.

On top of his technical skills, he's professional, easy to work with, and communicates clearly across technical and non-technical teams. Any team looking for a senior Flutter engineer or a strong technical lead would be lucky to have him.

Highly recommended.`},{name:"Abdelrahman Shehata",title:"Lead Software Engineer · Mobile & AI",relationship:"Worked with Abdelrahman on the same team",date:"2025-11-16",initials:"AS",image:"/recommendations/abdelrahman-shehata.jpg",linkedin:"https://www.linkedin.com/in/abdelrahman-shehata-9a20b41b1/",quote:"As a Lead Software Engineer, one of his main strengths is problem solving in daily bugs. Highly recommended for lead tech companies, and you can rely on him for the highly advanced technologies."},{name:"Haitham Essam",title:"Senior Flutter Developer",relationship:"Reported directly to Abdelrahman",date:"2025-10-06",initials:"HE",image:"/recommendations/haitham-essam.jpg",linkedin:"https://www.linkedin.com/in/haitham-essam-b69b15332/",quote:`I had the pleasure of working with Abdelrahman Saed at iStoria. From day one, Abdelrahman impressed everyone with his professionalism, creativity, and problem-solving mindset. He was always the one who could turn a complex challenge into a smooth, well-structured solution — and did it all with a positive attitude that made working together genuinely enjoyable.

Beyond his technical skills, Abdelrahman is also a great teammate who supports others and spreads positive energy in the workplace. I'm truly glad to have had the chance to work with him, and I highly recommend him for any future opportunity.`},{name:"Islam Khalil",title:"Software Engineer · Flutter Developer",relationship:"Abdelrahman was senior but didn't manage directly",date:"2024-03-27",initials:"IK",image:"/recommendations/islam-khalil.jpg",linkedin:"https://www.linkedin.com/in/islam-khalil-919278b2/",quote:"I highly recommend Abdelrahman for his exceptional creativity, passion for assisting others, and remarkable proficiency in providing quick programming solutions, specifically in Dart and both Android and iOS app development. His expertise has been invaluable, and I have greatly benefited from his guidance."},{name:"Abdullah Ehab",title:"Senior Flutter Developer at Sigma EMEA",relationship:"Worked with Abdelrahman on the same team",date:"2022-05-30",initials:"AE",image:"/recommendations/abdullah-ehab.jpg",linkedin:"https://www.linkedin.com/in/abdullah-ehab/",quote:"Abdelrahman is an added value to any development team. He is a good team player, very dedicated, high ownership, motivated and focused on the target. Also a quick learner and fast troubleshooter."},{name:"Mohamed Reda",title:"AI Engineer in Healthcare",relationship:"Worked with Abdelrahman on the same team",date:"2020-11-05",initials:"MR",image:"/recommendations/mohamed-reda.jpg",linkedin:"https://www.linkedin.com/in/mohamed-r-870271bb/",quote:"Abdelrahman is one of the fastest learners I've worked with, and I'm absolutely confident that he would be a great fit for any company."}],gd=[{q:"Who is Abdelrahman Saed?",a:"Abdelrahman Saed (also known as binSaed) is a Senior / Lead Mobile Engineer with 7 years building production Flutter apps for iOS and Android that have reached 5M+ users. He currently leads the mobile squad at iStoria."},{q:"What is Abdelrahman Saed's current role?",a:"He is the Lead Mobile Engineer at iStoria, an English-language learning app, where he owns mobile architecture, release governance, and delivery for a 50+ module Flutter codebase serving 5M+ users."},{q:"What technologies and skills does Abdelrahman Saed work with?",a:"Flutter and Dart with BLoC/Cubit and Clean Architecture; offline-first data (PowerSync, Drift); CI/CD and release engineering (GitHub Actions, Codemagic, Fastlane, feature flags); monetization (RevenueCat, Stripe, AdMob); analytics and engagement (Adjust, CleverTap, PostHog, GrowthBook); plus native iOS/Android integration (WidgetKit, deep linking, i18n/RTL)."},{q:"What are Abdelrahman Saed's notable projects?",a:"flutter_cached_pdfview, a popular open-source Flutter package for native PDF viewing with caching (134+ GitHub stars, 501+ pub.dev likes, 43k+ downloads); iStoria, a story-based English-learning app with 5M+ downloads; and Stickerawy, a WhatsApp stickers app with 500K+ installs. He publishes packages on pub.dev under bnsaed.com."},{q:"How can I contact Abdelrahman Saed?",a:"Email is the preferred channel: me@bnsaed.com. To schedule a call directly, book a meeting at calendly.com/bnsaed/meet. He is also reachable on GitHub (github.com/binSaed), LinkedIn (linkedin.com/in/binsaed), and Stack Overflow."},{q:"Can AI agents and answer engines use content from this site?",a:"Yes for user-facing answers (ai-input=yes), but not for training AI models (ai-train=no), per the Content-Signal directives in robots.txt. Please attribute the author when quoting."}],Ka=[{href:"about",label:"About"},{href:"experience",label:"Experience"},{href:"projects",label:"Projects"},{href:"articles",label:"Articles"},{href:"skills",label:"Skills"},{href:"recommendations",label:"Praise"},{href:"contact",label:"Contact"}];function sc({onClick:e}){return o.jsxs("a",{href:"/",onClick:e,className:"group flex items-center gap-2.5 cursor-pointer","aria-label":"Abdelrahman Saed — home",children:[o.jsx("span",{className:"grid h-7 w-7 place-items-center bg-primary text-primary-foreground font-mono text-sm font-bold transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_16px_-2px_hsl(var(--primary)/0.7)]",children:"A"}),o.jsx("span",{className:"font-heading font-bold text-lg leading-none tracking-tight",children:"saed"}),o.jsx("span",{className:"kicker text-muted-foreground/70 hidden sm:inline normal-case tracking-normal",children:"~/portfolio"})]})}function rc({theme:e,toggleTheme:t}){const n=nc(["about","experience","projects","articles","skills","recommendations","contact"]),a=na(),s=Ss(),r=Zt(),l=a.pathname==="/",i=u=>{u.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),s("/")},h=u=>{r==null||r.capture("calendly_popup_opened",{source:u}),mr(nt.calendly)};return o.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 glass-effect animate-slide-down",children:o.jsxs("div",{className:"container mx-auto px-6 h-16 flex items-center justify-between",children:[o.jsx(sc,{onClick:i}),o.jsxs("nav",{className:"hidden lg:flex items-center gap-7",children:[Ka.map((u,p)=>{const g=l&&n===u.href;return o.jsxs(xa,{to:`/#${u.href}`,className:q("group relative kicker transition-colors py-1",g?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[o.jsx("span",{className:q("mr-1.5 transition-colors",g?"text-primary":"text-muted-foreground/50 group-hover:text-primary"),children:String(p+2).padStart(2,"0")}),u.label,o.jsx("span",{className:q("absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300",g?"w-full":"w-0 group-hover:w-full")})]},u.href)}),o.jsxs("button",{type:"button",onClick:()=>h("header_desktop"),className:"kicker flex items-center gap-1.5 border border-primary/40 px-3 py-1.5 text-primary transition-colors hover:border-primary hover:bg-primary/10",children:[o.jsx(Cn,{className:"h-3.5 w-3.5"}),"Book a call"]})]}),o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx(Ie,{variant:"ghost",size:"icon",asChild:!0,children:o.jsx("a",{href:"https://github.com/binSaed",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub profile",title:"GitHub",children:o.jsx($s,{className:"h-5 w-5"})})}),o.jsx(Ie,{variant:"ghost",size:"icon",asChild:!0,className:"hidden sm:inline-flex",children:o.jsx("a",{href:"https://www.linkedin.com/in/binsaed/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn profile",title:"LinkedIn",children:o.jsx(Cs,{className:"h-5 w-5"})})}),o.jsx(Ie,{variant:"ghost",size:"icon",asChild:!0,className:"hidden sm:inline-flex",children:o.jsx("a",{href:"https://bnsaed.com/CV/cv.pdf",target:"_blank",rel:"noopener noreferrer","aria-label":"Download CV (PDF)",title:"Download CV",children:o.jsx(Ps,{className:"h-5 w-5"})})}),o.jsx(Yl,{theme:e,toggleTheme:t}),o.jsxs(Xl,{children:[o.jsx(Zl,{asChild:!0,children:o.jsx(Ie,{variant:"ghost",size:"icon",className:"lg:hidden","aria-label":"Open navigation menu",children:o.jsx(vo,{className:"h-5 w-5"})})}),o.jsxs(lr,{side:"right",className:"w-72 border-l border-border",children:[o.jsxs(cr,{children:[o.jsx(dr,{className:"text-left font-heading font-bold text-2xl tracking-tight",children:"~/nav"}),o.jsx(ur,{className:"sr-only",children:"Site navigation links"})]}),o.jsx("div",{className:"mt-2 mb-4 h-px w-full bg-border"}),o.jsxs("nav",{className:"flex flex-col",children:[Ka.map((u,p)=>{const g=l&&n===u.href;return o.jsx(Ja,{asChild:!0,children:o.jsxs(xa,{to:`/#${u.href}`,className:q("group flex items-baseline gap-3 border-b border-border/60 py-3 transition-colors",g?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[o.jsx("span",{className:q("font-mono text-xs",g?"text-primary":"text-muted-foreground/50 group-hover:text-primary"),children:String(p+2).padStart(2,"0")}),o.jsx("span",{className:"font-heading text-xl",children:u.label})]})},u.href)}),o.jsx(Ja,{asChild:!0,children:o.jsxs("button",{type:"button",onClick:()=>h("header_mobile"),className:"group mt-4 flex items-center justify-center gap-2 border border-primary/40 py-3 text-primary transition-colors hover:border-primary hover:bg-primary/10",children:[o.jsx(Cn,{className:"h-4 w-4"}),o.jsx("span",{className:"font-heading text-xl",children:"Book a call"})]})})]})]})]})]})]})})}function gr(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function oc(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function br(e){var t;return(t=gr(e))==null?void 0:t.data}async function yr(e,t){const n=gr(t),a={Accept:"application/vnd.github+json"};n!=null&&n.etag&&(a["If-None-Match"]=n.etag);const s=await fetch(e,{headers:a,cache:"no-store"});if(s.status===304&&n)return n.data;if(!s.ok){if(n)return n.data;throw new Error(`GitHub request failed: ${s.status}`)}const r=await s.json(),l=s.headers.get("ETag");return l&&oc(t,{etag:l,data:r}),r}const ic="https://api.github.com/users/binSaed",wr="gh:profile:binSaed";function lc(){return yr(ic,wr)}function cc(){return Zs({queryKey:["github-profile"],queryFn:lc,initialData:()=>br(wr),staleTime:1e3*60*5,gcTime:1e3*60*60*24})}function tt({className:e,...t}){return o.jsx("div",{className:q("animate-pulse rounded-md bg-muted",e),...t})}function Va({className:e}){return o.jsxs("svg",{viewBox:"0 0 24 24",className:e,fill:"none",stroke:"currentColor",strokeWidth:"1","aria-hidden":"true",children:[o.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"21"}),o.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o.jsx("circle",{cx:"12",cy:"12",r:"5"})]})}function dc(){return o.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none","aria-hidden":"true",children:[o.jsx("div",{className:"absolute -top-1/3 left-1/2 -translate-x-1/2 h-[70vh] w-[70vh] rounded-full animate-glow-breathe",style:{background:"radial-gradient(circle, hsl(var(--primary) / 0.1), transparent 62%)"}}),o.jsx("div",{className:"absolute inset-0 bg-ledger opacity-50 animate-grid-drift [mask-image:linear-gradient(180deg,transparent,black_18%,black_70%,transparent)]"}),o.jsx(Va,{className:"absolute top-24 right-8 h-5 w-5 text-primary/30"}),o.jsx(Va,{className:"absolute bottom-10 left-10 h-5 w-5 text-foreground/15 hidden md:block"}),o.jsx("span",{className:"section-numeral absolute -top-10 right-4 text-[26vw] md:text-[15rem] leading-none tracking-tighter",children:"01"}),o.jsx("div",{className:"absolute top-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-primary/50 shadow-[0_0_12px_2px_hsl(var(--primary)/0.4)] animate-float-slow"}),o.jsx("div",{className:"absolute top-[22%] left-1/3 h-1 w-1 rounded-full bg-primary/35 shadow-[0_0_10px_1px_hsl(var(--primary)/0.35)] animate-float-drift-b",style:{animationDelay:"2.5s"}}),o.jsx("div",{className:"absolute bottom-[30%] right-1/3 h-1 w-1 rounded-full bg-primary/30 shadow-[0_0_8px_1px_hsl(var(--primary)/0.3)] animate-float-slow",style:{animationDelay:"6s"}}),o.jsx("div",{className:"absolute top-[62%] right-[16%] h-1.5 w-1.5 rounded-full bg-primary/40 shadow-[0_0_12px_2px_hsl(var(--primary)/0.35)] animate-float-drift-b hidden md:block",style:{animationDelay:"9s"}}),o.jsx("div",{className:"absolute inset-0 opacity-[0.6] [mask-image:linear-gradient(180deg,black,transparent_85%)]",style:{backgroundImage:"repeating-linear-gradient(to bottom, hsl(var(--foreground) / 0.03) 0px, hsl(var(--foreground) / 0.03) 1px, transparent 1px, transparent 4px)"}}),o.jsx("div",{className:"absolute inset-x-0 top-0 h-28 animate-scan-beam",style:{background:"linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.07) 50%, transparent 100%)"}})]})}function uc(e,t,n,a={}){const{stiffness:s=180,damping:r=20,mass:l=1}=a,i=f.useRef({x:0,y:0,vx:0,vy:0}),h=f.useRef({x:e,y:t}),u=f.useRef(null),p=f.useRef(null);f.useEffect(()=>{h.current={x:e,y:t}},[e,t]);const g=f.useCallback(c=>{p.current===null&&(p.current=c);const v=Math.min((c-p.current)/1e3,.064);p.current=c;const m=i.current,b=h.current,x=-s*(m.x-b.x),T=-s*(m.y-b.y),S=-r*m.vx,C=-r*m.vy,F=(x+S)/l,U=(T+C)/l;if(m.vx+=F*v,m.vy+=U*v,m.x+=m.vx*v,m.y+=m.vy*v,Math.abs(m.x-b.x)<.01&&Math.abs(m.y-b.y)<.01&&Math.abs(m.vx)<.01&&Math.abs(m.vy)<.01){m.x=b.x,m.y=b.y,m.vx=0,m.vy=0,n(m.x,m.y),u.current=null,p.current=null;return}n(m.x,m.y),u.current=requestAnimationFrame(g)},[s,r,l,n]),y=f.useCallback(()=>{u.current===null&&(p.current=null,u.current=requestAnimationFrame(g))},[g]);return f.useEffect(()=>{u.current===null&&(p.current=null,u.current=requestAnimationFrame(g))},[e,t,g]),f.useEffect(()=>()=>{u.current!==null&&cancelAnimationFrame(u.current)},[]),{start:y,setPosition:(c,v)=>{i.current.x=c,i.current.y=v}}}const hc=xs,pc=vs,vr=f.forwardRef(({className:e,...t},n)=>o.jsx(hn,{ref:n,className:q("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));vr.displayName=hn.displayName;const xr=f.forwardRef(({className:e,children:t,...n},a)=>o.jsxs(pc,{children:[o.jsx(vr,{}),o.jsxs(pn,{ref:a,className:q("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,o.jsxs(ea,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[o.jsx(ra,{className:"h-4 w-4"}),o.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));xr.displayName=pn.displayName;const kr=({className:e,...t})=>o.jsx("div",{className:q("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});kr.displayName="DialogHeader";const Tr=f.forwardRef(({className:e,...t},n)=>o.jsx(mn,{ref:n,className:q("text-lg font-semibold leading-none tracking-tight",e),...t}));Tr.displayName=mn.displayName;const Sr=f.forwardRef(({className:e,...t},n)=>o.jsx(fn,{ref:n,className:q("text-sm text-muted-foreground",e),...t}));Sr.displayName=fn.displayName;const mc="https://api.github.com/users/binSaed/repos?per_page=100&type=public",Er="gh:repos:binSaed",_r=e=>[...e].sort((t,n)=>n.stargazers_count-t.stargazers_count);async function fc(){const e=await yr(mc,Er);return _r(e)}function gc(e=!0){return Zs({queryKey:["github-repos"],queryFn:fc,initialData:()=>{const t=br(Er);return t?_r(t):void 0},staleTime:1e3*60*5,gcTime:1e3*60*60*24,enabled:e})}const Rr=f.forwardRef(({className:e,children:t,...n},a)=>o.jsxs(ks,{ref:a,className:q("relative overflow-hidden",e),...n,children:[o.jsx(Qr,{className:"h-full w-full rounded-[inherit]",children:t}),o.jsx(Ar,{}),o.jsx(Yr,{})]}));Rr.displayName=ks.displayName;const Ar=f.forwardRef(({className:e,orientation:t="vertical",...n},a)=>o.jsx(Ts,{ref:a,orientation:t,className:q("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...n,children:o.jsx(Xr,{className:"relative flex-1 rounded-full bg-border"})}));Ar.displayName=Ts.displayName;const bc={TypeScript:"bg-blue-500",JavaScript:"bg-yellow-400",Python:"bg-green-500",Dart:"bg-cyan-500",Java:"bg-orange-500",Kotlin:"bg-purple-500",Swift:"bg-orange-400",Go:"bg-cyan-400",Rust:"bg-orange-600",Ruby:"bg-red-500",PHP:"bg-indigo-400","C++":"bg-pink-500",C:"bg-gray-500",HTML:"bg-red-400",CSS:"bg-blue-400",Shell:"bg-green-400"};function yc({repo:e}){const t=e.language?bc[e.language]||"bg-muted-foreground":null,n=Zt();return o.jsxs("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"block p-4 rounded-sm border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-200 group",onClick:()=>n==null?void 0:n.capture("repo_clicked",{repo_name:e.name,repo_language:e.language,repo_stars:e.stargazers_count}),children:[o.jsxs("div",{className:"flex items-start justify-between gap-2",children:[o.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors truncate",children:e.name}),o.jsx(yo,{className:"h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"})]}),e.description&&o.jsx("p",{className:"text-sm text-muted-foreground mt-2 line-clamp-2",children:e.description}),o.jsxs("div",{className:"flex items-center gap-4 mt-3 text-sm text-muted-foreground",children:[t&&o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx("span",{className:`w-3 h-3 rounded-full ${t}`}),e.language]}),o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(sa,{className:"h-4 w-4"}),e.stargazers_count]}),o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(wo,{className:"h-4 w-4"}),e.forks_count]})]}),e.topics&&e.topics.length>0&&o.jsxs("div",{className:"flex flex-wrap gap-1.5 mt-3",children:[e.topics.slice(0,4).map(a=>o.jsx("span",{className:"spec-tag",children:a},a)),e.topics.length>4&&o.jsxs("span",{className:"spec-tag",children:["+",e.topics.length-4]})]})]})}function rn(){return o.jsxs("div",{className:"p-4 rounded-lg border border-border bg-card/50",children:[o.jsx(tt,{className:"h-5 w-32 mb-2"}),o.jsx(tt,{className:"h-4 w-full mb-1"}),o.jsx(tt,{className:"h-4 w-3/4 mb-3"}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(tt,{className:"h-4 w-20"}),o.jsx(tt,{className:"h-4 w-12"}),o.jsx(tt,{className:"h-4 w-12"})]})]})}function wc({open:e,onOpenChange:t}){const{data:n,isLoading:a}=gc(e);return o.jsx(hc,{open:e,onOpenChange:t,children:o.jsxs(xr,{className:"max-w-2xl max-h-[85vh] p-0",children:[o.jsxs(kr,{className:"p-6 pb-0",children:[o.jsxs(Tr,{className:"flex items-center gap-2 font-heading text-2xl font-medium tracking-tight",children:[o.jsx(sa,{className:"h-5 w-5 text-primary"}),"Public Repositories",n&&o.jsxs("span",{className:"text-sm font-normal text-muted-foreground",children:["(",n.length," repos)"]})]}),o.jsx(Sr,{className:"sr-only",children:"Browse my public GitHub repositories"})]}),o.jsx(Rr,{className:"h-[60vh] px-6 pb-6",children:o.jsx("div",{className:"space-y-3 pt-4",children:a?o.jsxs(o.Fragment,{children:[o.jsx(rn,{}),o.jsx(rn,{}),o.jsx(rn,{}),o.jsx(rn,{})]}):n&&n.length>0?n.map(s=>o.jsx(yc,{repo:s},s.id)):o.jsx("p",{className:"text-center text-muted-foreground py-8",children:"No repositories found"})})})]})})}function vc({className:e}){return o.jsx("svg",{viewBox:"0 0 24 24",className:e,fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M17.36 20.2v-5.38h1.79V22H3v-7.18h1.79v5.38h12.57zM6.77 14.32l.37-1.76 8.79 1.85-.37 1.76-8.79-1.85zm1.16-4.21l.76-1.61 8.14 3.78-.76 1.62-8.14-3.79zm2.26-3.99l1.15-1.38 6.9 5.76-1.15 1.37-6.9-5.75zM14.64 2l5.51 7.41-1.45 1.07L13.19 3 14.64 2zM6.59 18.41v-1.8h8.98v1.8H6.59z"})})}const Qa=["You can't catch me! 😆","Nice try! 👍","Too slow! 🏃‍♂️","Almost got me! 😏","Keep trying! 🎯","Haha, missed! 😂"],Ya=["Hi! 👋","Hello! 😊","Hey there! 🙌","Welcome! ✨"],xc=fr.slice(0,3);function kc(){const{data:e,isLoading:t}=cc(),n=Zt(),[a,s]=f.useState({x:0,y:0}),[r,l]=f.useState({x:0,y:0}),[i,h]=f.useState(!1),[u,p]=f.useState(""),g=f.useRef(null),y=f.useRef(0),c=f.useRef(0),[v,m]=f.useState(!1),b=f.useRef(null),x=f.useRef(null),T=f.useCallback(async()=>{if(x.current)return x.current;if(!b.current)return null;const{default:E}=await le(async()=>{const{default:G}=await import("./confetti.module-BVAT6wYb.js");return{default:G}},[]);return x.current=E.create(b.current,{resize:!0,useWorker:!0}),x.current},[]),S=f.useCallback((E,G)=>{s({x:E,y:G})},[]);uc(r.x,r.y,S,{stiffness:120,damping:14,mass:1}),f.useEffect(()=>()=>{var E;(E=x.current)==null||E.reset(),x.current=null},[]),f.useEffect(()=>{if(i){const E=setTimeout(()=>h(!1),2e3);return()=>clearTimeout(E)}},[i]);const C=f.useCallback(()=>{const E=Date.now();if(E-c.current<2500)return;c.current=E;const G=Qa[Math.floor(Math.random()*Qa.length)];p(G),h(!0)},[]),[F,U]=f.useState(!0);f.useEffect(()=>{if(typeof window<"u"&&typeof window.matchMedia=="function"){const E=window.matchMedia("(hover: hover) and (pointer: fine)");U(E.matches);const G=te=>U(te.matches);return E.addEventListener("change",G),()=>E.removeEventListener("change",G)}},[]);const ee=!F,z=f.useCallback(async()=>{const E=await T();if(!E)return;const G=1e3,te=Date.now()+G,Y={startVelocity:30,spread:360,ticks:60,colors:["#22d3ee","#00bcd4","#06b6d4","#67e8f9","#0e7490","#0b0e13"]},X=(N,M)=>Math.random()*(M-N)+N,D=setInterval(()=>{const N=te-Date.now();if(N<=0)return clearInterval(D);const M=600*(N/G);E({...Y,particleCount:M,origin:{x:X(.1,.3),y:Math.random()-.2}}),E({...Y,particleCount:M,origin:{x:X(.7,.9),y:Math.random()-.2}})},150)},[T]),L=f.useCallback(()=>{if(z(),h(!1),l({x:0,y:0}),ee){const E=Date.now();if(E-c.current<2e3)return;c.current=E;const G=Ya[Math.floor(Math.random()*Ya.length)];p(G),h(!0)}},[ee,z]),I=f.useCallback((E,G)=>{if(!g.current)return;const te=g.current.getBoundingClientRect(),A=te.left+te.width/2,Y=te.top+te.height/2,X=E-A,D=G-Y,N=Math.sqrt(X*X+D*D),M=200,ae=350;if(N<M&&N>0){y.current+=1,y.current>=3&&(C(),y.current=0);const de=Math.atan2(D,X),J=Math.pow((M-N)/M,.6),It=-Math.cos(de)*J*160,Xe=-Math.sin(de)*J*160,$e=280;l(De=>({x:Math.max(-$e,Math.min($e,De.x+It*.25)),y:Math.max(-$e,Math.min($e,De.y+Xe*.25))}))}else N>ae&&l(de=>Math.abs(de.x)<1&&Math.abs(de.y)<1?{x:0,y:0}:{x:de.x*.85,y:de.y*.85})},[C]),Q=f.useCallback(()=>{l({x:0,y:0})},[]),R=f.useCallback(E=>{E.pointerType!=="touch"&&I(E.clientX,E.clientY)},[I]),ce=f.useCallback(E=>{E.pointerType!=="touch"&&Q()},[Q]),re=f.useCallback(E=>{I(E.clientX,E.clientY)},[I]),Pe=f.useCallback(()=>{Q()},[Q]);return o.jsxs(o.Fragment,{children:[o.jsx("canvas",{ref:b,className:"fixed inset-0 pointer-events-none z-[9999]",style:{width:"100vw",height:"100vh"}}),o.jsxs("section",{className:"relative min-h-screen overflow-hidden hero-gradient flex items-center pt-24 pb-16",onPointerMove:R,onPointerLeave:ce,onMouseMove:re,onMouseLeave:Pe,children:[o.jsx(dc,{}),o.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[o.jsxs("div",{className:"opacity-0 animate-fade-in",style:{animationDelay:"0.1s"},children:[o.jsxs("div",{className:"flex items-center justify-between gap-4",children:[o.jsxs("span",{className:"kicker text-muted-foreground normal-case tracking-normal",children:[o.jsx("span",{className:"text-primary",children:"saed@bnsaed"}),o.jsx("span",{className:"text-muted-foreground/70",children:":~$"})," whoami"]}),o.jsxs("span",{className:"kicker text-primary inline-flex items-center gap-2",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow"}),"SYS://01"]})]}),o.jsx("div",{className:"mt-3 h-px w-full bg-border origin-left animate-draw-rule"})]}),o.jsxs("div",{className:"mt-10 md:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center",children:[o.jsxs("div",{className:"lg:col-span-7 order-2 lg:order-1",children:[o.jsxs("p",{className:"kicker text-primary mb-5 opacity-0 animate-fade-in normal-case tracking-normal",style:{animationDelay:"0.2s"},children:[o.jsx("span",{className:"text-muted-foreground/70",children:"$"})," status —"," ",o.jsx("span",{className:"text-foreground/90",children:qt.subtitle})]}),o.jsxs("h1",{className:"font-heading font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.5rem,8vw,5.5rem)] opacity-0 animate-reveal-clip text-balance",style:{animationDelay:"0.25s"},children:["Senior / Lead"," ",o.jsx("span",{className:"text-primary",children:"Mobile Engineer"}),o.jsx("span",{"aria-hidden":"true",className:"ml-2 inline-block h-[0.78em] w-[0.46em] translate-y-[0.04em] bg-primary align-baseline animate-caret-blink"})]}),o.jsx("p",{className:"mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty opacity-0 animate-fade-in",style:{animationDelay:"0.4s"},children:qt.tagline}),o.jsx("div",{className:"mt-8 flex flex-col sm:flex-row sm:items-stretch border-y border-border divide-y sm:divide-y-0 sm:divide-x divide-border opacity-0 animate-fade-in",style:{animationDelay:"0.5s"},children:xc.map(E=>o.jsxs("div",{className:"py-4 sm:pr-6 sm:pl-6 sm:first:pl-0",children:[o.jsx("div",{className:"font-heading text-2xl md:text-3xl leading-none",children:E.value}),o.jsx("div",{className:"kicker text-muted-foreground mt-2",children:E.label})]},E.label))}),o.jsxs("div",{className:"flex flex-wrap gap-3 mt-9 opacity-0 animate-fade-in",style:{animationDelay:"0.6s"},children:[o.jsx(Ie,{variant:"hero",size:"lg",asChild:!0,className:"group",children:o.jsxs("a",{href:"#contact",children:["Get in touch",o.jsx(go,{className:"ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"})]})}),o.jsx(Ie,{variant:"heroOutline",size:"lg",asChild:!0,className:"group",children:o.jsxs("a",{href:nt.cv,target:"_blank",rel:"noopener noreferrer",onClick:()=>n==null?void 0:n.capture("cv_downloaded"),children:["Download CV",o.jsx(Ps,{className:"ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"})]})})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 opacity-0 animate-fade-in",style:{animationDelay:"0.7s"},children:[o.jsxs("a",{href:nt.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",title:"GitHub",className:"kicker text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"github"}),children:[o.jsx($s,{className:"h-4 w-4"})," GitHub"]}),o.jsxs("a",{href:nt.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",title:"LinkedIn",className:"kicker text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"linkedin"}),children:[o.jsx(Cs,{className:"h-4 w-4"})," LinkedIn"]}),o.jsxs("a",{href:nt.pubdev,target:"_blank",rel:"noopener noreferrer","aria-label":"pub.dev packages",title:"pub.dev packages",className:"kicker text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"pubdev"}),children:[o.jsx(ko,{className:"h-4 w-4"})," pub.dev"]}),o.jsxs("a",{href:nt.stackoverflow,target:"_blank",rel:"noopener noreferrer","aria-label":"Stack Overflow",title:"Stack Overflow",className:"kicker text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"stackoverflow"}),children:[o.jsx(vc,{className:"h-4 w-4"})," Stack Overflow"]}),t?o.jsx(tt,{className:"h-6 w-36 rounded-sm"}):(e==null?void 0:e.public_repos)!==void 0&&o.jsxs("button",{onClick:()=>{m(!0),n==null||n.capture("repos_modal_opened",{public_repos:e.public_repos})},className:"kicker flex items-center gap-2 border border-border px-2.5 py-1 text-foreground hover:border-primary/50 hover:text-primary transition-colors",children:[o.jsx(sa,{className:"h-3.5 w-3.5"}),e.public_repos," Public Repos"]})]})]}),o.jsx("div",{className:"lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-scale-in",style:{animationDelay:"0.3s"},children:o.jsxs("div",{ref:g,className:"relative cursor-pointer",onPointerEnter:R,onPointerMove:R,onMouseEnter:re,onMouseMove:re,onClick:L,style:{transform:`translate3d(${a.x}px, ${a.y}px, 0)`,willChange:"transform"},children:[o.jsx("div",{className:`absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${ee?"top-full mt-4":"-top-12"} ${i?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-2 scale-95 pointer-events-none"}`,children:o.jsx("div",{className:"bg-primary text-primary-foreground px-3 py-1.5 font-mono text-xs whitespace-nowrap shadow-md",children:u})}),o.jsxs("figure",{className:"relative bg-card border border-border p-3 shadow-[var(--shadow-card)] select-none",children:[o.jsx("span",{className:"absolute -top-1.5 -left-1.5 h-3.5 w-3.5 border-t border-l border-primary"}),o.jsx("span",{className:"absolute -top-1.5 -right-1.5 h-3.5 w-3.5 border-t border-r border-primary"}),o.jsx("span",{className:"absolute -bottom-1.5 -left-1.5 h-3.5 w-3.5 border-b border-l border-primary"}),o.jsx("span",{className:"absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 border-b border-r border-primary"}),o.jsx("img",{src:`${qt.avatarUrl}&s=256`,alt:qt.name,width:256,height:256,loading:"eager",fetchpriority:"high",decoding:"async",draggable:!1,className:"relative w-56 h-64 md:w-64 md:h-72 object-cover bg-muted"}),o.jsxs("figcaption",{className:"mt-3 flex items-center justify-between",children:[o.jsx("span",{className:"kicker text-muted-foreground normal-case tracking-normal",children:"~/a.saed.png"}),o.jsxs("span",{className:"kicker text-primary inline-flex items-center gap-1.5",children:[o.jsx("span",{className:"h-1 w-1 rounded-full bg-primary"}),qt.location.split(" / ")[0]]})]})]})]})})]})]})]}),o.jsx(wc,{open:v,onOpenChange:m})]})}function Tc(e={}){const{once:t=!0,margin:n="-100px",threshold:a=0}=e,[s,r]=f.useState(!1),[l,i]=f.useState(null),h=u=>{i(u)};return f.useEffect(()=>{if(!l)return;if(typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){r(!0);return}if(typeof window<"u"){const p=l.getBoundingClientRect(),g=window.innerHeight||document.documentElement.clientHeight;if(p.top<g&&p.bottom>0&&(r(!0),t))return}const u=new IntersectionObserver(([p])=>{p.isIntersecting?(r(!0),t&&u.unobserve(l)):t||r(!1)},{rootMargin:n,threshold:a});return u.observe(l),()=>{u.unobserve(l)}},[l,t,n,a]),{ref:h,isInView:s}}function Sc(e){const t=e.match(/^([\d.]+)(.*)$/);if(!t)return{target:null,suffix:e,decimals:0};const n=t[1],a=n.includes(".")?n.split(".")[1].length:0;return{target:parseFloat(n),suffix:t[2],decimals:a}}function Xa(e,t){return e.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}function Ec(){return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function _c({value:e,run:t,durationMs:n=1300,delayMs:a=0}){const{target:s,suffix:r,decimals:l}=Sc(e),[i,h]=f.useState(()=>s===null?e:Xa(0,l)+r),u=f.useRef(!1);return f.useEffect(()=>{if(s===null||!t||u.current)return;if(u.current=!0,Ec()){h(e);return}let p=0,g=0;const y=setTimeout(()=>{const c=v=>{g||(g=v);const m=Math.min(1,(v-g)/n),b=1-Math.pow(1-m,3);h(Xa(s*b,l)+r),m<1?p=requestAnimationFrame(c):h(e)};p=requestAnimationFrame(c)},a);return()=>{clearTimeout(y),cancelAnimationFrame(p)}},[t,s,r,l,e,n,a]),o.jsx(o.Fragment,{children:i})}function Rc(){const{ref:e,isInView:t}=Tc({margin:"-80px"});return o.jsx("section",{ref:e,className:"py-14 border-y border-border bg-card/40",children:o.jsxs("div",{className:"container mx-auto px-6",children:[o.jsxs("div",{className:`flex items-center gap-3 mb-8 opacity-0 ${t?"animate-fade-in":""}`,children:[o.jsxs("span",{className:"kicker text-primary normal-case tracking-normal",children:[o.jsx("span",{className:"text-muted-foreground/70",children:"$"})," cat ./metrics.log"]}),o.jsx("span",{className:"h-px flex-1 bg-border"}),o.jsx("span",{className:"kicker text-muted-foreground",children:"2019 — 2026"})]}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-l border-border",children:fr.map((n,a)=>o.jsxs("div",{className:`group border-r border-b border-border p-5 md:p-6 transition-colors hover:bg-background opacity-0 ${t?"animate-fade-in-up":""}`,style:{animationDelay:`${a*.07}s`},children:[o.jsx("div",{className:"font-heading text-4xl md:text-5xl leading-none tracking-tight tabular-nums transition-colors group-hover:text-primary",children:o.jsx(_c,{value:n.value,run:t,delayMs:a*70})}),o.jsx("div",{className:"kicker text-muted-foreground mt-3 leading-snug",children:n.label})]},n.label))})]})})}function Pr(){const[e,t]=f.useState(!1);return f.useEffect(()=>{const n=()=>{const a=window.scrollY,s=window.innerHeight,r=a>s*.9,l=document.getElementById("contact"),i=!!l&&l.getBoundingClientRect().top<s*.85;t(r&&!i)};return n(),window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}},[]),e}function Ac(){const[e,t]=f.useState(!1),n=Pr();f.useEffect(()=>{const s=()=>{t(window.scrollY>400)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const a=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsx(Ie,{onClick:a,size:"icon",className:q("fixed right-6 z-50 rounded-sm shadow-[var(--shadow-card)] transition-all duration-300","bg-primary hover:bg-primary/90 text-primary-foreground","hover:-translate-y-0.5",n?"bottom-24":"bottom-6",e?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"),"aria-label":"Back to top",children:o.jsx(bo,{className:"h-5 w-5"})})}function Pc(){const e=Zt(),t=Pr(),n=f.useRef(!1);f.useEffect(()=>{if(!t||n.current)return;if(n.current=!0,typeof window.requestIdleCallback=="function"){const l=window.requestIdleCallback(()=>An());return()=>{var i;return(i=window.cancelIdleCallback)==null?void 0:i.call(window,l)}}const r=window.setTimeout(()=>An(),0);return()=>window.clearTimeout(r)},[t]);const a=()=>An(),s=()=>{e==null||e.capture("calendly_popup_opened",{source:"sticky_bar"}),mr(nt.calendly)};return o.jsx("div",{className:q("fixed inset-x-0 bottom-0 z-40 transition-all duration-500 ease-out","pb-[env(safe-area-inset-bottom)]",t?"translate-y-0 opacity-100":"translate-y-full opacity-0 pointer-events-none"),"aria-hidden":!t,children:o.jsx("div",{className:"glass-effect border-t border-border",children:o.jsxs("div",{className:"container mx-auto flex items-center justify-between gap-4 px-6 py-3",children:[o.jsxs("div",{className:"hidden min-w-0 sm:flex sm:flex-col",children:[o.jsx("span",{className:"kicker text-primary",children:"~/let's talk"}),o.jsx("span",{className:"truncate text-sm text-muted-foreground",children:"Got a project or role in mind?"})]}),o.jsxs("button",{type:"button",onClick:s,onPointerEnter:a,onFocus:a,tabIndex:t?0:-1,"aria-label":"Book a 20-minute call",className:q("group inline-flex min-h-[44px] w-full shrink-0 cursor-pointer items-center justify-center gap-2 sm:w-auto","bg-primary px-5 py-2.5 font-medium text-primary-foreground","transition-transform duration-200 hover:-translate-y-0.5","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",t&&"animate-pulse-glow [animation-duration:2s]"),children:[o.jsx(Cn,{className:"h-4 w-4"}),"Book a call"]})]})})})}function $c(){const[e,t]=f.useState(0);return f.useEffect(()=>{const n=()=>{const a=document.documentElement.scrollHeight-window.innerHeight;t(a>0?Math.min(100,Math.max(0,window.scrollY/a*100)):0)};return window.addEventListener("scroll",n,{passive:!0}),n(),()=>window.removeEventListener("scroll",n)},[]),o.jsx("div",{className:"fixed top-0 left-0 right-0 z-[60] h-0.5","aria-hidden":"true",children:o.jsx("div",{className:"h-full bg-primary transition-[width] duration-150 ease-out",style:{width:`${e}%`}})})}function Cc(){const[e,t]=f.useState(()=>{if(typeof window<"u"){const a=localStorage.getItem("theme");return a||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}return"dark"});return f.useEffect(()=>{const a=document.documentElement;e==="dark"?a.classList.add("dark"):a.classList.remove("dark"),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{t(a=>a==="dark"?"light":"dark")},setTheme:t}}const Nc=f.lazy(()=>le(()=>import("./AboutSection-DLxjty2Z.js"),__vite__mapDeps([0,1,2,3])).then(e=>({default:e.AboutSection}))),Oc=f.lazy(()=>le(()=>import("./ExperienceSection-tBsD2_up.js"),__vite__mapDeps([4,1,2,3])).then(e=>({default:e.ExperienceSection}))),jc=f.lazy(()=>le(()=>import("./ProjectsSection-C17DZcFK.js"),__vite__mapDeps([5,1,2,3,6])).then(e=>({default:e.ProjectsSection}))),Ic=f.lazy(()=>le(()=>import("./ArticlesSection-CZy1IKbF.js"),__vite__mapDeps([7,1,2,3])).then(e=>({default:e.ArticlesSection}))),Dc=f.lazy(()=>le(()=>import("./SkillsSection-B9mg3tuq.js"),__vite__mapDeps([8,1,2,3])).then(e=>({default:e.SkillsSection}))),Lc=f.lazy(()=>le(()=>import("./RecommendationsSection-DHPxtGKn.js"),__vite__mapDeps([9,1,2,3,6])).then(e=>({default:e.RecommendationsSection}))),Mc=f.lazy(()=>le(()=>import("./FAQSection-CmF5t7iL.js"),__vite__mapDeps([10,1,2,3])).then(e=>({default:e.FAQSection}))),Fc=f.lazy(()=>le(()=>import("./ContactSection-DJWbntQe.js"),__vite__mapDeps([11,1,2,3,12,6])).then(e=>({default:e.ContactSection}))),Uc=f.lazy(()=>le(()=>import("./Footer-CRP00Oq2.js"),__vite__mapDeps([13,1,2,12])).then(e=>({default:e.Footer}))),Hc=()=>{const{theme:e,toggleTheme:t}=Cc(),n=na();return f.useEffect(()=>{const s=setTimeout(()=>{if(n.hash){const r=document.querySelector(n.hash);r&&r.scrollIntoView({behavior:"smooth"})}},300);return()=>clearTimeout(s)},[n.hash,n.key]),o.jsxs("div",{className:"min-h-screen bg-background",children:[o.jsx($c,{}),o.jsx(rc,{theme:e,toggleTheme:t}),o.jsxs("main",{children:[o.jsx(kc,{}),o.jsx(Rc,{}),o.jsxs(f.Suspense,{fallback:o.jsx("div",{className:"min-h-[200px]"}),children:[o.jsx(Nc,{}),o.jsx(Oc,{}),o.jsx(jc,{}),o.jsx(Ic,{}),o.jsx(Dc,{}),o.jsx(Lc,{}),o.jsx(Mc,{}),o.jsx(Fc,{})]})]}),o.jsx(f.Suspense,{fallback:null,children:o.jsx(Uc,{})}),o.jsx(Ac,{}),o.jsx(Pc,{})]})},Pn="a, button, input, textarea, select, label, [role='button'], .dossier-card";function qc(){const[e,t]=f.useState(!1),n=f.useRef(null);return f.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const a=window.matchMedia("(hover: hover) and (pointer: fine)"),s=window.matchMedia("(prefers-reduced-motion: reduce)"),r=()=>t(a.matches&&!s.matches);return r(),a.addEventListener("change",r),s.addEventListener("change",r),()=>{a.removeEventListener("change",r),s.removeEventListener("change",r)}},[]),f.useEffect(()=>{const a=n.current;if(!e||!a)return;let s=window.innerWidth/2,r=window.innerHeight/2,l=s,i=r,h=0,u=!1;const p=x=>{s=x.clientX,r=x.clientY,u||(u=!0,a.style.opacity="1")},g=()=>{u=!1,a.style.opacity="0"},y=()=>a.classList.add("is-down"),c=()=>a.classList.remove("is-down"),v=x=>{var T,S;(S=(T=x.target)==null?void 0:T.closest)!=null&&S.call(T,Pn)&&a.classList.add("is-active")},m=x=>{var C,F;const T=x.target;if(!((C=T==null?void 0:T.closest)!=null&&C.call(T,Pn)))return;const S=x.relatedTarget;(F=S==null?void 0:S.closest)!=null&&F.call(S,Pn)||a.classList.remove("is-active")},b=()=>{l+=(s-l)*.18,i+=(r-i)*.18,a.style.transform=`translate3d(${l}px, ${i}px, 0) translate(-50%, -50%)`,h=requestAnimationFrame(b)};return h=requestAnimationFrame(b),window.addEventListener("pointermove",p,{passive:!0}),document.addEventListener("pointerdown",y),document.addEventListener("pointerup",c),document.addEventListener("mouseover",v),document.addEventListener("mouseout",m),document.addEventListener("mouseleave",g),window.addEventListener("blur",g),()=>{cancelAnimationFrame(h),window.removeEventListener("pointermove",p),document.removeEventListener("pointerdown",y),document.removeEventListener("pointerup",c),document.removeEventListener("mouseover",v),document.removeEventListener("mouseout",m),document.removeEventListener("mouseleave",g),window.removeEventListener("blur",g)}},[e]),e?o.jsx("div",{ref:n,className:"dossier-cursor",style:{opacity:0},"aria-hidden":"true"}):null}const Wt=[{slug:"flutter-cached-pdfview-guide",title:"Building a Cached PDF Viewer in Flutter",description:"Learn how to implement an efficient PDF viewer with caching support for iOS and Android using flutter_cached_pdfview.",date:"2024-01-15",dateModified:"2026-06-27",readTime:"5 min read",tags:["Flutter","Dart","PDF","Mobile"],content:`
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
`}];function Zn(e){return Wt.find(t=>t.slug===e)}const Gc="Abdelrahman Saed",Bc="https://bnsaed.com",zc="https://avatars.githubusercontent.com/u/33700292?v=4&s=512",Za={"@type":"Person",name:Gc,url:Bc,image:zc,jobTitle:"Senior / Lead Mobile Engineer",worksFor:{"@type":"Organization",name:"iStoria",url:"https://istoria.app/en"},sameAs:["https://github.com/binSaed","https://www.linkedin.com/in/binsaed/","https://stackoverflow.com/users/11001850/abdelrahman-saed","https://pub.dev/publishers/bnsaed.com/packages"]},es={Flutter:"https://www.wikidata.org/wiki/Q39072787",Dart:"https://www.wikidata.org/wiki/Q406009",PDF:"https://www.wikidata.org/wiki/Q42332","GitHub Actions":"https://www.wikidata.org/wiki/Q97185096",DevOps:"https://www.wikidata.org/wiki/Q3025536","CI/CD":"https://www.wikidata.org/wiki/Q28136854",Jira:"https://www.wikidata.org/wiki/Q1359246",Git:"https://www.wikidata.org/wiki/Q186055","Code Review":"https://www.wikidata.org/wiki/Q1342704",Automation:"https://www.wikidata.org/wiki/Q184199","AI in Development":"https://www.wikidata.org/wiki/Q11660"};function Jc(e){const t=e.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/```[\s\S]*?```/g,"").split(`
`);for(let n of t){if(n=n.trim(),!n||/^#{1,6}\s/.test(n)||/^>/.test(n)||/^!\[/.test(n)||/^-{3,}$/.test(n)||/^[-*]\s/.test(n)||/^\*[^*].*\*$/.test(n)||(n=n.replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g,"$1").trim(),!n))continue;const a=n.match(/^.*?[.!?](?=\s|$)/);return(a?a[0]:n).trim()}return""}function Wc(e){return e.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/```[\s\S]*?```/g," ").replace(/!\[[^\]]*\]\([^)]*\)/g," ").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*]\s+/gm,"").replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g,"$1").replace(/\s+/g," ").trim()}function bd(e,t,n){const a=e.tags.filter(u=>es[u]).map(u=>({"@type":"Thing",name:u,sameAs:es[u]})),s=Wc(e.content),r=`${e.title} ${e.description} ${s}`.toLowerCase(),l=a.filter(u=>r.includes(u.name.toLowerCase())),i=s?s.split(/\s+/).filter(Boolean).length:0,h=Jc(e.content);return{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,image:n,datePublished:e.date,dateModified:e.dateModified??e.date,author:Za,publisher:Za,...a.length?{about:a}:{},...l.length?{mentions:l}:{},...i?{wordCount:i}:{},...h?{articleBody:h}:{},mainEntityOfPage:{"@type":"WebPage","@id":t},url:t,keywords:e.tags.join(", ")}}const $r=[{id:"self-driving-repo",name:"The Self-Driving Repo",description:"A CI/CD automation series: small GitHub Actions that run the boring, error-prone parts of engineering — guardrails, PR hygiene, a merge-conflict radar, safe cleanup — so releases stay calm.",slugs:["github-actions-branch-protection-guardrails","automate-pull-request-hygiene","sync-jira-with-github-prs","auto-rebase-and-detect-merge-conflicts","bot-that-resolves-merge-conflicts","automated-stale-branch-cleanup","ai-weekly-engineering-reviews"]}];function Kc(e){return $r.find(t=>t.slugs.includes(e))}function yd(e){const t=Kc(e);if(!t)return;const n=t.slugs.indexOf(e),a=n>0?t.slugs[n-1]:void 0,s=n<t.slugs.length-1?t.slugs[n+1]:void 0;return{series:t,index:n,total:t.slugs.length,prev:a?Zn(a):void 0,next:s?Zn(s):void 0}}function wd(){const e=new Set($r.flatMap(t=>t.slugs));return Wt.filter(t=>!e.has(t.slug)).sort((t,n)=>n.date.localeCompare(t.date))}const Vc=["flutter-cached-pdfview-guide","bot-that-resolves-merge-conflicts","ai-weekly-engineering-reviews","automate-pull-request-hygiene"];function vd(e=4){const t=Vc.map(s=>Zn(s)).filter(s=>!!s);if(t.length>=e)return t.slice(0,e);const n=new Set(t.map(s=>s.slug)),a=[...Wt].sort((s,r)=>r.date.localeCompare(s.date)).filter(s=>!n.has(s.slug));return[...t,...a].slice(0,e)}const ts=["home","about","projects","articles","skills","contact"],Z={owner:"Abdelrahman Saed",alias:"binSaed",email:"me@bnsaed.com",url:"https://bnsaed.com",github:"https://github.com/binSaed",linkedin:"https://www.linkedin.com/in/binsaed/",cv:"https://bnsaed.com/CV/cv.pdf"};function Qc(){const e=Ss();f.useEffect(()=>{if(typeof navigator>"u"||!navigator.modelContext)return;const t=navigator.modelContext,n=[],a=[{name:"navigate_to_section",title:"Scroll to a section",description:"Navigate the homepage to one of its anchor sections: home, about, projects, articles, skills, or contact.",inputSchema:{type:"object",properties:{section:{type:"string",enum:ts,description:"The section anchor to scroll to."}},required:["section"]},execute:async s=>{const r=String(s.section??"");return ts.includes(r)?(e(r==="home"?"/":`/#${r}`),{ok:!0,section:r}):{ok:!1,error:`Unknown section: ${r}`}}},{name:"list_articles",title:"List published articles",description:"Return the slug, title, description, date, and tags for every article published on bnsaed.com.",inputSchema:{type:"object",properties:{}},execute:async()=>Wt.map(s=>({slug:s.slug,title:s.title,description:s.description,date:s.date,readTime:s.readTime,tags:s.tags,url:`${Z.url}/articles/${s.slug}/`}))},{name:"open_article",title:"Open an article",description:"Navigate to a specific article by slug. Use list_articles first to discover valid slugs.",inputSchema:{type:"object",properties:{slug:{type:"string",description:"Article slug, e.g. 'flutter-cached-pdfview-guide'."}},required:["slug"]},execute:async s=>{const r=String(s.slug??""),l=Wt.find(i=>i.slug===r);return l?(e(`/articles/${r}/`),{ok:!0,url:`${Z.url}/articles/${r}/`,title:l.title}):{ok:!1,error:`No article with slug '${r}'`}}},{name:"get_contact_info",title:"Get contact details",description:"Return the preferred ways to contact Abdelrahman Saed (email, GitHub, LinkedIn, contact form URL).",inputSchema:{type:"object",properties:{}},execute:async()=>({name:Z.owner,alias:Z.alias,email:Z.email,mailto:`mailto:${Z.email}`,contactForm:`${Z.url}/#contact`,github:Z.github,linkedin:Z.linkedin,preferredChannel:"email"})},{name:"compose_email",title:"Open a pre-filled email",description:"Open the user's mail client with a pre-filled email to Abdelrahman Saed. Use this instead of submitting the contact form programmatically.",inputSchema:{type:"object",properties:{subject:{type:"string",description:"Email subject line."},body:{type:"string",description:"Email body, plain text."}},required:["subject"]},execute:async s=>{const r=encodeURIComponent(String(s.subject??"")),l=encodeURIComponent(String(s.body??"")),i=`mailto:${Z.email}?subject=${r}&body=${l}`;return window.location.href=i,{ok:!0,mailto:i}}},{name:"download_cv",title:"Download the CV",description:"Open the PDF CV of Abdelrahman Saed in a new tab.",inputSchema:{type:"object",properties:{}},execute:async()=>(window.open(Z.cv,"_blank","noopener,noreferrer"),{ok:!0,url:Z.cv})},{name:"get_site_metadata",title:"Get site metadata",description:"Return identity and discovery metadata for bnsaed.com: owner, URL, well-known endpoints, and current page.",inputSchema:{type:"object",properties:{}},execute:async()=>({owner:Z.owner,alias:Z.alias,url:Z.url,currentPath:window.location.pathname+window.location.hash,wellKnown:{apiCatalog:`${Z.url}/.well-known/api-catalog`,agentSkills:`${Z.url}/.well-known/agent-skills/index.json`,mcpServerCard:`${Z.url}/.well-known/mcp/server-card.json`,robots:`${Z.url}/robots.txt`,sitemap:`${Z.url}/sitemap.xml`},contentSignal:{search:"yes","ai-input":"yes","ai-train":"no"}})}];try{for(const s of a){const r=t.registerTool(s);r&&typeof r.unregister=="function"&&n.push(r)}}catch{}return()=>{for(const s of n)try{s.unregister()}catch{}}},[e])}const Yc=f.lazy(()=>le(()=>import("./ArticlePage-YubK5FW8.js"),__vite__mapDeps([14,1,2,13,12,15]))),Xc=f.lazy(()=>le(()=>import("./ArticlesPage-CfB0R3ZA.js"),__vite__mapDeps([16,1,2,13,12,15]))),Zc=f.lazy(()=>le(()=>import("./RecommendationsPage-B_VNLPPP.js"),__vite__mapDeps([17,1,2,13,12,9,3,6,15]))),ed=f.lazy(()=>le(()=>import("./ProjectsPage-BJuutmba.js"),__vite__mapDeps([18,1,2,13,12,5,3,6,15]))),td=new al,nd=()=>(Qc(),null),ad=()=>{const{pathname:e,hash:t}=na();return f.useLayoutEffect(()=>{t||window.scrollTo(0,0)},[e,t]),null},sd=()=>o.jsx(or,{children:o.jsx(ll,{client:td,children:o.jsxs(Mi,{children:[o.jsx("div",{className:"grain-overlay","aria-hidden":"true"}),o.jsx(qc,{}),o.jsx(ri,{}),o.jsx(Li,{}),o.jsxs(to,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:[o.jsx(nd,{}),o.jsx(ad,{}),o.jsx(f.Suspense,{fallback:o.jsx("div",{className:"min-h-screen bg-background"}),children:o.jsxs(no,{children:[o.jsx(bt,{path:"/",element:o.jsx(Hc,{})}),o.jsx(bt,{path:"/articles",element:o.jsx(Xc,{})}),o.jsx(bt,{path:"/articles/:slug",element:o.jsx(Yc,{})}),o.jsx(bt,{path:"/recommendations",element:o.jsx(Zc,{})}),o.jsx(bt,{path:"/projects",element:o.jsx(ed,{})}),o.jsx(bt,{path:"*",element:o.jsx(ao,{to:"/",replace:!0})})]})})]})]})})});Es(document.getElementById("root")).render(o.jsx(sd,{}));function ns(){le(async()=>{const{default:e}=await import("./module-ChzsIv-w.js");return{default:e}},[]).then(({default:e})=>{e.init("phc_tLT5g9tearUJgGqbyVABjDtBFcFswbb9Brps3U2B8mVc",{api_host:"https://custom.bnsaed.com",ui_host:"https://eu.posthog.com",defaults:"2026-05-30",disable_surveys:!0}),Vl(e)})}const as=window;typeof as.requestIdleCallback=="function"?as.requestIdleCallback(ns,{timeout:4e3}):window.setTimeout(ns,2e3);export{go as A,Ie as B,Cn as C,yo as E,$s as G,rc as H,Cs as L,ko as P,sa as S,ra as X,yd as a,cd as b,me as c,bd as d,Zt as e,wd as f,Zn as g,Wt as h,q as i,Tc as j,dd as k,nt as l,qt as m,ud as n,md as o,pd as p,vd as q,fd as r,$r as s,hd as t,Cc as u,gd as v,mr as w,ld as x,vc as y};
