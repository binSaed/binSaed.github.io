const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutSection-BtD7PO9U.js","assets/ui-vendor-5oxkQ2Jf.js","assets/react-vendor-GBp8saLZ.js","assets/map-pin-BHHs8EYP.js","assets/radix-DOafHixa.js","assets/ExperienceSection-twqWSSwu.js","assets/ProjectsSection-BLroxRB7.js","assets/ArticlesSection-G2F0EC3l.js","assets/clock-kVeHJnob.js","assets/SkillsSection-DIAEuNjp.js","assets/ContactSection-C3X5lxDV.js","assets/mail-DDIUtxeY.js","assets/Footer-DgpWbL3t.js","assets/ArticlePage-CA10mx8J.js"])))=>i.map(i=>d[i]);
var Wd=Object.defineProperty;var Mo=t=>{throw TypeError(t)};var Vd=(t,e,n)=>e in t?Wd(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var At=(t,e,n)=>Vd(t,typeof e!="symbol"?e+"":e,n),pi=(t,e,n)=>e.has(t)||Mo("Cannot "+n);var b=(t,e,n)=>(pi(t,e,"read from private field"),n?n.call(t):e.get(t)),Z=(t,e,n)=>e.has(t)?Mo("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),W=(t,e,n,r)=>(pi(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),de=(t,e,n)=>(pi(t,e,"access private method"),n);var gs=(t,e,n,r)=>({set _(s){W(t,e,s,n)},get _(){return b(t,e,r)}});import{c as bc,j as g,m as Kd}from"./ui-vendor-5oxkQ2Jf.js";import{a as Yd,r as E,R as I,v as Qd,g as no,u as yc,c as _c,L as Xd,B as Zd,d as eh,e as fi,N as th}from"./react-vendor-GBp8saLZ.js";import{V as wc,R as xc,A as kc,C as Ec,T as Sc,D as Tc,P as nh,a as Rc,b as rh,S as sh,O as Pc,c as $c,d as ih,e as Oc,f as Ac,g as ah,h as oh,i as Cc,j as lh,k as ch,l as Ic,m as uh}from"./radix-DOafHixa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Mc,No=Yd;Mc=No.createRoot,No.hydrateRoot;const dh="modulepreload",hh=function(t){return"/"+t},Do={},hn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=hh(l),l in Do)return;Do[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":dh,c||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((p,d)=>{h.addEventListener("load",p),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&i(o.reason);return e().catch(i)})},ph=1,fh=1e6;let gi=0;function gh(){return gi=(gi+1)%Number.MAX_SAFE_INTEGER,gi.toString()}const mi=new Map,Lo=t=>{if(mi.has(t))return;const e=setTimeout(()=>{mi.delete(t),Gr({type:"REMOVE_TOAST",toastId:t})},fh);mi.set(t,e)},mh=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,ph)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?Lo(n):t.toasts.forEach(r=>{Lo(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},Os=[];let As={toasts:[]};function Gr(t){As=mh(As,t),Os.forEach(e=>{e(As)})}function vh({...t}){const e=gh(),n=s=>Gr({type:"UPDATE_TOAST",toast:{...s,id:e}}),r=()=>Gr({type:"DISMISS_TOAST",toastId:e});return Gr({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:s=>{s||r()}}}),{id:e,dismiss:r,update:n}}function bh(){const[t,e]=E.useState(As);return E.useEffect(()=>(Os.push(e),()=>{const n=Os.indexOf(e);n>-1&&Os.splice(n,1)}),[t]),{...t,toast:vh,dismiss:n=>Gr({type:"DISMISS_TOAST",toastId:n})}}const jo=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Fo=bc,Nc=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return Fo(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:s,defaultVariants:i}=e,a=Object.keys(s).map(c=>{const u=n==null?void 0:n[c],h=i==null?void 0:i[c];if(u===null)return null;const p=jo(u)||jo(h);return s[c][p]}),o=n&&Object.entries(n).reduce((c,u)=>{let[h,p]=u;return p===void 0||(c[h]=p),c},{}),l=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:h,className:p,...d}=u;return Object.entries(d).every(v=>{let[f,_]=v;return Array.isArray(_)?_.includes({...i,...o}[f]):{...i,...o}[f]===_})?[...c,h,p]:c},[]);return Fo(t,a,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Dc=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=E.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:a,...o},l)=>E.createElement("svg",{ref:l,..._h,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Dc("lucide",s),...o},[...a.map(([c,u])=>E.createElement(c,u)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=(t,e)=>{const n=E.forwardRef(({className:r,...s},i)=>E.createElement(wh,{ref:i,iconNode:e,className:Dc(`lucide-${yh(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=ft("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=ft("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=ft("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=ft("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=ft("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=ft("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=ft("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=ft("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=ft("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=ft("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=ft("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=ft("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),so="-",$h=t=>{const e=Ah(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:a=>{const o=a.split(so);return o[0]===""&&o.length!==1&&o.shift(),qc(o,e)||Oh(a)},getConflictingClassGroupIds:(a,o)=>{const l=n[a]||[];return o&&r[a]?[...l,...r[a]]:l}}},qc=(t,e)=>{var a;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),s=r?qc(t.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(so);return(a=e.validators.find(({validator:o})=>o(i)))==null?void 0:a.classGroupId},Uo=/^\[(.+)\]$/,Oh=t=>{if(Uo.test(t)){const e=Uo.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},Ah=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return Ih(Object.entries(t.classGroups),n).forEach(([i,a])=>{Wi(a,r,i,e)}),r},Wi=(t,e,n,r)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:qo(e,s);i.classGroupId=n;return}if(typeof s=="function"){if(Ch(s)){Wi(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,a])=>{Wi(a,qo(e,i),n,r)})})},qo=(t,e)=>{let n=t;return e.split(so).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Ch=t=>t.isThemeGetter,Ih=(t,e)=>e?t.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([a,o])=>[e+a,o])):i);return[n,s]}):t,Mh=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const s=(i,a)=>{n.set(i,a),e++,e>t&&(e=0,r=n,n=new Map)};return{get(i){let a=n.get(i);if(a!==void 0)return a;if((a=r.get(i))!==void 0)return s(i,a),a},set(i,a){n.has(i)?n.set(i,a):s(i,a)}}},Hc="!",Nh=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,s=e[0],i=e.length,a=o=>{const l=[];let c=0,u=0,h;for(let _=0;_<o.length;_++){let k=o[_];if(c===0){if(k===s&&(r||o.slice(_,_+i)===e)){l.push(o.slice(u,_)),u=_+i;continue}if(k==="/"){h=_;continue}}k==="["?c++:k==="]"&&c--}const p=l.length===0?o:o.substring(u),d=p.startsWith(Hc),v=d?p.substring(1):p,f=h&&h>u?h-u:void 0;return{modifiers:l,hasImportantModifier:d,baseClassName:v,maybePostfixModifierPosition:f}};return n?o=>n({className:o,parseClassName:a}):a},Dh=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},Lh=t=>({cache:Mh(t.cacheSize),parseClassName:Nh(t),...$h(t)}),jh=/\s+/,Fh=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=[],a=t.trim().split(jh);let o="";for(let l=a.length-1;l>=0;l-=1){const c=a[l],{modifiers:u,hasImportantModifier:h,baseClassName:p,maybePostfixModifierPosition:d}=n(c);let v=!!d,f=r(v?p.substring(0,d):p);if(!f){if(!v){o=c+(o.length>0?" "+o:o);continue}if(f=r(p),!f){o=c+(o.length>0?" "+o:o);continue}v=!1}const _=Dh(u).join(":"),k=h?_+Hc:_,C=k+f;if(i.includes(C))continue;i.push(C);const P=s(f,v);for(let L=0;L<P.length;++L){const $=P[L];i.push(k+$)}o=c+(o.length>0?" "+o:o)}return o};function Uh(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=Bc(e))&&(r&&(r+=" "),r+=n);return r}const Bc=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=Bc(t[r]))&&(n&&(n+=" "),n+=e);return n};function qh(t,...e){let n,r,s,i=a;function a(l){const c=e.reduce((u,h)=>h(u),t());return n=Lh(c),r=n.cache.get,s=n.cache.set,i=o,o(l)}function o(l){const c=r(l);if(c)return c;const u=Fh(l,n);return s(l,u),u}return function(){return i(Uh.apply(null,arguments))}}const _e=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},zc=/^\[(?:([a-z-]+):)?(.+)\]$/i,Hh=/^\d+\/\d+$/,Bh=new Set(["px","full","screen"]),zh=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Gh=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Jh=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Wh=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Vh=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ct=t=>Xn(t)||Bh.has(t)||Hh.test(t),Wt=t=>_r(t,"length",np),Xn=t=>!!t&&!Number.isNaN(Number(t)),vi=t=>_r(t,"number",Xn),kr=t=>!!t&&Number.isInteger(Number(t)),Kh=t=>t.endsWith("%")&&Xn(t.slice(0,-1)),se=t=>zc.test(t),Vt=t=>zh.test(t),Yh=new Set(["length","size","percentage"]),Qh=t=>_r(t,Yh,Gc),Xh=t=>_r(t,"position",Gc),Zh=new Set(["image","url"]),ep=t=>_r(t,Zh,sp),tp=t=>_r(t,"",rp),Er=()=>!0,_r=(t,e,n)=>{const r=zc.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},np=t=>Gh.test(t)&&!Jh.test(t),Gc=()=>!1,rp=t=>Wh.test(t),sp=t=>Vh.test(t),ip=()=>{const t=_e("colors"),e=_e("spacing"),n=_e("blur"),r=_e("brightness"),s=_e("borderColor"),i=_e("borderRadius"),a=_e("borderSpacing"),o=_e("borderWidth"),l=_e("contrast"),c=_e("grayscale"),u=_e("hueRotate"),h=_e("invert"),p=_e("gap"),d=_e("gradientColorStops"),v=_e("gradientColorStopPositions"),f=_e("inset"),_=_e("margin"),k=_e("opacity"),C=_e("padding"),P=_e("saturate"),L=_e("scale"),$=_e("sepia"),O=_e("skew"),N=_e("space"),T=_e("translate"),x=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto",se,e],D=()=>[se,e],V=()=>["",Ct,Wt],X=()=>["auto",Xn,se],G=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],te=()=>["solid","dashed","dotted","double","none"],le=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],fe=()=>["start","end","center","between","around","evenly","stretch"],J=()=>["","0",se],y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],m=()=>[Xn,se];return{cacheSize:500,separator:":",theme:{colors:[Er],spacing:[Ct,Wt],blur:["none","",Vt,se],brightness:m(),borderColor:[t],borderRadius:["none","","full",Vt,se],borderSpacing:D(),borderWidth:V(),contrast:m(),grayscale:J(),hueRotate:m(),invert:J(),gap:D(),gradientColorStops:[t],gradientColorStopPositions:[Kh,Wt],inset:z(),margin:z(),opacity:m(),padding:D(),saturate:m(),scale:m(),sepia:J(),skew:m(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",se]}],container:["container"],columns:[{columns:[Vt]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...G(),se]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:x()}],"overscroll-x":[{"overscroll-x":x()}],"overscroll-y":[{"overscroll-y":x()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[f]}],"inset-x":[{"inset-x":[f]}],"inset-y":[{"inset-y":[f]}],start:[{start:[f]}],end:[{end:[f]}],top:[{top:[f]}],right:[{right:[f]}],bottom:[{bottom:[f]}],left:[{left:[f]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",kr,se]}],basis:[{basis:z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",se]}],grow:[{grow:J()}],shrink:[{shrink:J()}],order:[{order:["first","last","none",kr,se]}],"grid-cols":[{"grid-cols":[Er]}],"col-start-end":[{col:["auto",{span:["full",kr,se]},se]}],"col-start":[{"col-start":X()}],"col-end":[{"col-end":X()}],"grid-rows":[{"grid-rows":[Er]}],"row-start-end":[{row:["auto",{span:[kr,se]},se]}],"row-start":[{"row-start":X()}],"row-end":[{"row-end":X()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",se]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",se]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...fe()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...fe(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...fe(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[C]}],px:[{px:[C]}],py:[{py:[C]}],ps:[{ps:[C]}],pe:[{pe:[C]}],pt:[{pt:[C]}],pr:[{pr:[C]}],pb:[{pb:[C]}],pl:[{pl:[C]}],m:[{m:[_]}],mx:[{mx:[_]}],my:[{my:[_]}],ms:[{ms:[_]}],me:[{me:[_]}],mt:[{mt:[_]}],mr:[{mr:[_]}],mb:[{mb:[_]}],ml:[{ml:[_]}],"space-x":[{"space-x":[N]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[N]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",se,e]}],"min-w":[{"min-w":[se,e,"min","max","fit"]}],"max-w":[{"max-w":[se,e,"none","full","min","max","fit","prose",{screen:[Vt]},Vt]}],h:[{h:[se,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[se,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[se,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[se,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Vt,Wt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",vi]}],"font-family":[{font:[Er]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",se]}],"line-clamp":[{"line-clamp":["none",Xn,vi]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ct,se]}],"list-image":[{"list-image":["none",se]}],"list-style-type":[{list:["none","disc","decimal",se]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...te(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ct,Wt]}],"underline-offset":[{"underline-offset":["auto",Ct,se]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",se]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",se]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...G(),Xh]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Qh]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ep]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[d]}],"gradient-via":[{via:[d]}],"gradient-to":[{to:[d]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[o]}],"border-w-x":[{"border-x":[o]}],"border-w-y":[{"border-y":[o]}],"border-w-s":[{"border-s":[o]}],"border-w-e":[{"border-e":[o]}],"border-w-t":[{"border-t":[o]}],"border-w-r":[{"border-r":[o]}],"border-w-b":[{"border-b":[o]}],"border-w-l":[{"border-l":[o]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[...te(),"hidden"]}],"divide-x":[{"divide-x":[o]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[o]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:te()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...te()]}],"outline-offset":[{"outline-offset":[Ct,se]}],"outline-w":[{outline:[Ct,Wt]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:V()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[Ct,Wt]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Vt,tp]}],"shadow-color":[{shadow:[Er]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":[...le(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":le()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Vt,se]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[P]}],sepia:[{sepia:[$]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[$]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",se]}],duration:[{duration:m()}],ease:[{ease:["linear","in","out","in-out",se]}],delay:[{delay:m()}],animate:[{animate:["none","spin","ping","pulse","bounce",se]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[kr,se]}],"translate-x":[{"translate-x":[T]}],"translate-y":[{"translate-y":[T]}],"skew-x":[{"skew-x":[O]}],"skew-y":[{"skew-y":[O]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",se]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",se]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",se]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Ct,Wt,vi]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ap=qh(ip);function De(...t){return ap(bc(t))}const op=nh,Jc=E.forwardRef(({className:t,...e},n)=>g.jsx(wc,{ref:n,className:De("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));Jc.displayName=wc.displayName;const lp=Nc("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Wc=E.forwardRef(({className:t,variant:e,...n},r)=>g.jsx(xc,{ref:r,className:De(lp({variant:e}),t),...n}));Wc.displayName=xc.displayName;const cp=E.forwardRef(({className:t,...e},n)=>g.jsx(kc,{ref:n,className:De("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",t),...e}));cp.displayName=kc.displayName;const Vc=E.forwardRef(({className:t,...e},n)=>g.jsx(Ec,{ref:n,className:De("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:g.jsx(Uc,{className:"h-4 w-4"})}));Vc.displayName=Ec.displayName;const Kc=E.forwardRef(({className:t,...e},n)=>g.jsx(Sc,{ref:n,className:De("text-sm font-semibold",t),...e}));Kc.displayName=Sc.displayName;const Yc=E.forwardRef(({className:t,...e},n)=>g.jsx(Tc,{ref:n,className:De("text-sm opacity-90",t),...e}));Yc.displayName=Tc.displayName;function up(){const{toasts:t}=bh();return g.jsxs(op,{children:[t.map(function({id:e,title:n,description:r,action:s,...i}){return g.jsxs(Wc,{...i,children:[g.jsxs("div",{className:"grid gap-1",children:[n&&g.jsx(Kc,{children:n}),r&&g.jsx(Yc,{children:r})]}),s,g.jsx(Vc,{})]},e)}),g.jsx(Jc,{})]})}var Ho=["light","dark"],dp="(prefers-color-scheme: dark)",hp=E.createContext(void 0),pp={setTheme:t=>{},themes:[]},fp=()=>{var t;return(t=E.useContext(hp))!=null?t:pp};E.memo(({forcedTheme:t,storageKey:e,attribute:n,enableSystem:r,enableColorScheme:s,defaultTheme:i,value:a,attrs:o,nonce:l})=>{let c=i==="system",u=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${o.map(v=>`'${v}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=s?Ho.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(v,f=!1,_=!0)=>{let k=a?a[v]:v,C=f?v+"|| ''":`'${k}'`,P="";return s&&_&&!f&&Ho.includes(v)&&(P+=`d.style.colorScheme = '${v}';`),n==="class"?f||k?P+=`c.add(${C})`:P+="null":k&&(P+=`d[s](n,${C})`),P},d=t?`!function(){${u}${p(t)}}()`:r?`!function(){try{${u}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${c})){var t='${dp}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${a?`var x=${JSON.stringify(a)};`:""}${p(a?"x[e]":"e",!0)}}${c?"":"else{"+p(i,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${e}');if(e){${a?`var x=${JSON.stringify(a)};`:""}${p(a?"x[e]":"e",!0)}}else{${p(i,!1,!1)};}${h}}catch(t){}}();`;return E.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:d}})});var gp=t=>{switch(t){case"success":return bp;case"info":return _p;case"warning":return yp;case"error":return wp;default:return null}},mp=Array(12).fill(0),vp=({visible:t,className:e})=>I.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":t},I.createElement("div",{className:"sonner-spinner"},mp.map((n,r)=>I.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),bp=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},I.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),yp=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},I.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),_p=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},I.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),wp=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},I.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),xp=I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},I.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),kp=()=>{let[t,e]=I.useState(document.hidden);return I.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},Vi=1,Ep=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let n=this.subscribers.indexOf(e);this.subscribers.splice(n,1)}),this.publish=e=>{this.subscribers.forEach(n=>n(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var n;let{message:r,...s}=e,i=typeof(e==null?void 0:e.id)=="number"||((n=e.id)==null?void 0:n.length)>0?e.id:Vi++,a=this.toasts.find(l=>l.id===i),o=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),a?this.toasts=this.toasts.map(l=>l.id===i?(this.publish({...l,...e,id:i,title:r}),{...l,...e,id:i,dismissible:o,title:r}):l):this.addToast({title:r,...s,dismissible:o,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(n=>{this.subscribers.forEach(r=>r({id:n.id,dismiss:!0}))}),this.subscribers.forEach(n=>n({id:e,dismiss:!0})),e),this.message=(e,n)=>this.create({...n,message:e}),this.error=(e,n)=>this.create({...n,message:e,type:"error"}),this.success=(e,n)=>this.create({...n,type:"success",message:e}),this.info=(e,n)=>this.create({...n,type:"info",message:e}),this.warning=(e,n)=>this.create({...n,type:"warning",message:e}),this.loading=(e,n)=>this.create({...n,type:"loading",message:e}),this.promise=(e,n)=>{if(!n)return;let r;n.loading!==void 0&&(r=this.create({...n,promise:e,type:"loading",message:n.loading,description:typeof n.description!="function"?n.description:void 0}));let s=e instanceof Promise?e:e(),i=r!==void 0,a,o=s.then(async c=>{if(a=["resolve",c],I.isValidElement(c))i=!1,this.create({id:r,type:"default",message:c});else if(Tp(c)&&!c.ok){i=!1;let u=typeof n.error=="function"?await n.error(`HTTP error! status: ${c.status}`):n.error,h=typeof n.description=="function"?await n.description(`HTTP error! status: ${c.status}`):n.description;this.create({id:r,type:"error",message:u,description:h})}else if(n.success!==void 0){i=!1;let u=typeof n.success=="function"?await n.success(c):n.success,h=typeof n.description=="function"?await n.description(c):n.description;this.create({id:r,type:"success",message:u,description:h})}}).catch(async c=>{if(a=["reject",c],n.error!==void 0){i=!1;let u=typeof n.error=="function"?await n.error(c):n.error,h=typeof n.description=="function"?await n.description(c):n.description;this.create({id:r,type:"error",message:u,description:h})}}).finally(()=>{var c;i&&(this.dismiss(r),r=void 0),(c=n.finally)==null||c.call(n)}),l=()=>new Promise((c,u)=>o.then(()=>a[0]==="reject"?u(a[1]):c(a[1])).catch(u));return typeof r!="string"&&typeof r!="number"?{unwrap:l}:Object.assign(r,{unwrap:l})},this.custom=(e,n)=>{let r=(n==null?void 0:n.id)||Vi++;return this.create({jsx:e(r),id:r,...n}),r},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Xe=new Ep,Sp=(t,e)=>{let n=(e==null?void 0:e.id)||Vi++;return Xe.addToast({title:t,...e,id:n}),n},Tp=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",Rp=Sp,Pp=()=>Xe.toasts,$p=()=>Xe.getActiveToasts(),rb=Object.assign(Rp,{success:Xe.success,info:Xe.info,warning:Xe.warning,error:Xe.error,custom:Xe.custom,message:Xe.message,promise:Xe.promise,dismiss:Xe.dismiss,loading:Xe.loading},{getHistory:Pp,getToasts:$p});function Op(t,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}Op(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function ms(t){return t.label!==void 0}var Ap=3,Cp="32px",Ip="16px",Bo=4e3,Mp=356,Np=14,Dp=20,Lp=200;function bt(...t){return t.filter(Boolean).join(" ")}function jp(t){let[e,n]=t.split("-"),r=[];return e&&r.push(e),n&&r.push(n),r}var Fp=t=>{var e,n,r,s,i,a,o,l,c,u,h;let{invert:p,toast:d,unstyled:v,interacting:f,setHeights:_,visibleToasts:k,heights:C,index:P,toasts:L,expanded:$,removeToast:O,defaultRichColors:N,closeButton:T,style:x,cancelButtonStyle:S,actionButtonStyle:z,className:D="",descriptionClassName:V="",duration:X,position:G,gap:te,loadingIcon:le,expandByDefault:fe,classNames:J,icons:y,closeButtonAriaLabel:m="Close toast",pauseWhenPageIsHidden:R}=t,[A,j]=I.useState(null),[B,Y]=I.useState(null),[q,Q]=I.useState(!1),[ne,ce]=I.useState(!1),[pe,ue]=I.useState(!1),[$e,ie]=I.useState(!1),[Me,Te]=I.useState(!1),[Ge,qe]=I.useState(0),[tt,He]=I.useState(0),kt=I.useRef(d.duration||X||Bo),pn=I.useRef(null),nt=I.useRef(null),hs=P===0,ui=P+1<=k,Je=d.type,Bt=d.dismissible!==!1,di=d.className||"",ps=d.descriptionClassName||"",fn=I.useMemo(()=>C.findIndex(re=>re.toastId===d.id)||0,[C,d.id]),wr=I.useMemo(()=>{var re;return(re=d.closeButton)!=null?re:T},[d.closeButton,T]),fs=I.useMemo(()=>d.duration||X||Bo,[d.duration,X]),xr=I.useRef(0),Ln=I.useRef(0),Ao=I.useRef(0),jn=I.useRef(null),[Bd,zd]=G.split("-"),Co=I.useMemo(()=>C.reduce((re,me,ke)=>ke>=fn?re:re+me.height,0),[C,fn]),Io=kp(),Gd=d.invert||p,hi=Je==="loading";Ln.current=I.useMemo(()=>fn*te+Co,[fn,Co]),I.useEffect(()=>{kt.current=fs},[fs]),I.useEffect(()=>{Q(!0)},[]),I.useEffect(()=>{let re=nt.current;if(re){let me=re.getBoundingClientRect().height;return He(me),_(ke=>[{toastId:d.id,height:me,position:d.position},...ke]),()=>_(ke=>ke.filter(gt=>gt.toastId!==d.id))}},[_,d.id]),I.useLayoutEffect(()=>{if(!q)return;let re=nt.current,me=re.style.height;re.style.height="auto";let ke=re.getBoundingClientRect().height;re.style.height=me,He(ke),_(gt=>gt.find(mt=>mt.toastId===d.id)?gt.map(mt=>mt.toastId===d.id?{...mt,height:ke}:mt):[{toastId:d.id,height:ke,position:d.position},...gt])},[q,d.title,d.description,_,d.id]);let zt=I.useCallback(()=>{ce(!0),qe(Ln.current),_(re=>re.filter(me=>me.toastId!==d.id)),setTimeout(()=>{O(d)},Lp)},[d,O,_,Ln]);I.useEffect(()=>{if(d.promise&&Je==="loading"||d.duration===1/0||d.type==="loading")return;let re;return $||f||R&&Io?(()=>{if(Ao.current<xr.current){let me=new Date().getTime()-xr.current;kt.current=kt.current-me}Ao.current=new Date().getTime()})():kt.current!==1/0&&(xr.current=new Date().getTime(),re=setTimeout(()=>{var me;(me=d.onAutoClose)==null||me.call(d,d),zt()},kt.current)),()=>clearTimeout(re)},[$,f,d,Je,R,Io,zt]),I.useEffect(()=>{d.delete&&zt()},[zt,d.delete]);function Jd(){var re,me,ke;return y!=null&&y.loading?I.createElement("div",{className:bt(J==null?void 0:J.loader,(re=d==null?void 0:d.classNames)==null?void 0:re.loader,"sonner-loader"),"data-visible":Je==="loading"},y.loading):le?I.createElement("div",{className:bt(J==null?void 0:J.loader,(me=d==null?void 0:d.classNames)==null?void 0:me.loader,"sonner-loader"),"data-visible":Je==="loading"},le):I.createElement(vp,{className:bt(J==null?void 0:J.loader,(ke=d==null?void 0:d.classNames)==null?void 0:ke.loader),visible:Je==="loading"})}return I.createElement("li",{tabIndex:0,ref:nt,className:bt(D,di,J==null?void 0:J.toast,(e=d==null?void 0:d.classNames)==null?void 0:e.toast,J==null?void 0:J.default,J==null?void 0:J[Je],(n=d==null?void 0:d.classNames)==null?void 0:n[Je]),"data-sonner-toast":"","data-rich-colors":(r=d.richColors)!=null?r:N,"data-styled":!(d.jsx||d.unstyled||v),"data-mounted":q,"data-promise":!!d.promise,"data-swiped":Me,"data-removed":ne,"data-visible":ui,"data-y-position":Bd,"data-x-position":zd,"data-index":P,"data-front":hs,"data-swiping":pe,"data-dismissible":Bt,"data-type":Je,"data-invert":Gd,"data-swipe-out":$e,"data-swipe-direction":B,"data-expanded":!!($||fe&&q),style:{"--index":P,"--toasts-before":P,"--z-index":L.length-P,"--offset":`${ne?Ge:Ln.current}px`,"--initial-height":fe?"auto":`${tt}px`,...x,...d.style},onDragEnd:()=>{ue(!1),j(null),jn.current=null},onPointerDown:re=>{hi||!Bt||(pn.current=new Date,qe(Ln.current),re.target.setPointerCapture(re.pointerId),re.target.tagName!=="BUTTON"&&(ue(!0),jn.current={x:re.clientX,y:re.clientY}))},onPointerUp:()=>{var re,me,ke,gt;if($e||!Bt)return;jn.current=null;let mt=Number(((re=nt.current)==null?void 0:re.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Gt=Number(((me=nt.current)==null?void 0:me.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),gn=new Date().getTime()-((ke=pn.current)==null?void 0:ke.getTime()),vt=A==="x"?mt:Gt,Jt=Math.abs(vt)/gn;if(Math.abs(vt)>=Dp||Jt>.11){qe(Ln.current),(gt=d.onDismiss)==null||gt.call(d,d),Y(A==="x"?mt>0?"right":"left":Gt>0?"down":"up"),zt(),ie(!0),Te(!1);return}ue(!1),j(null)},onPointerMove:re=>{var me,ke,gt,mt;if(!jn.current||!Bt||((me=window.getSelection())==null?void 0:me.toString().length)>0)return;let Gt=re.clientY-jn.current.y,gn=re.clientX-jn.current.x,vt=(ke=t.swipeDirections)!=null?ke:jp(G);!A&&(Math.abs(gn)>1||Math.abs(Gt)>1)&&j(Math.abs(gn)>Math.abs(Gt)?"x":"y");let Jt={x:0,y:0};A==="y"?(vt.includes("top")||vt.includes("bottom"))&&(vt.includes("top")&&Gt<0||vt.includes("bottom")&&Gt>0)&&(Jt.y=Gt):A==="x"&&(vt.includes("left")||vt.includes("right"))&&(vt.includes("left")&&gn<0||vt.includes("right")&&gn>0)&&(Jt.x=gn),(Math.abs(Jt.x)>0||Math.abs(Jt.y)>0)&&Te(!0),(gt=nt.current)==null||gt.style.setProperty("--swipe-amount-x",`${Jt.x}px`),(mt=nt.current)==null||mt.style.setProperty("--swipe-amount-y",`${Jt.y}px`)}},wr&&!d.jsx?I.createElement("button",{"aria-label":m,"data-disabled":hi,"data-close-button":!0,onClick:hi||!Bt?()=>{}:()=>{var re;zt(),(re=d.onDismiss)==null||re.call(d,d)},className:bt(J==null?void 0:J.closeButton,(s=d==null?void 0:d.classNames)==null?void 0:s.closeButton)},(i=y==null?void 0:y.close)!=null?i:xp):null,d.jsx||E.isValidElement(d.title)?d.jsx?d.jsx:typeof d.title=="function"?d.title():d.title:I.createElement(I.Fragment,null,Je||d.icon||d.promise?I.createElement("div",{"data-icon":"",className:bt(J==null?void 0:J.icon,(a=d==null?void 0:d.classNames)==null?void 0:a.icon)},d.promise||d.type==="loading"&&!d.icon?d.icon||Jd():null,d.type!=="loading"?d.icon||(y==null?void 0:y[Je])||gp(Je):null):null,I.createElement("div",{"data-content":"",className:bt(J==null?void 0:J.content,(o=d==null?void 0:d.classNames)==null?void 0:o.content)},I.createElement("div",{"data-title":"",className:bt(J==null?void 0:J.title,(l=d==null?void 0:d.classNames)==null?void 0:l.title)},typeof d.title=="function"?d.title():d.title),d.description?I.createElement("div",{"data-description":"",className:bt(V,ps,J==null?void 0:J.description,(c=d==null?void 0:d.classNames)==null?void 0:c.description)},typeof d.description=="function"?d.description():d.description):null),E.isValidElement(d.cancel)?d.cancel:d.cancel&&ms(d.cancel)?I.createElement("button",{"data-button":!0,"data-cancel":!0,style:d.cancelButtonStyle||S,onClick:re=>{var me,ke;ms(d.cancel)&&Bt&&((ke=(me=d.cancel).onClick)==null||ke.call(me,re),zt())},className:bt(J==null?void 0:J.cancelButton,(u=d==null?void 0:d.classNames)==null?void 0:u.cancelButton)},d.cancel.label):null,E.isValidElement(d.action)?d.action:d.action&&ms(d.action)?I.createElement("button",{"data-button":!0,"data-action":!0,style:d.actionButtonStyle||z,onClick:re=>{var me,ke;ms(d.action)&&((ke=(me=d.action).onClick)==null||ke.call(me,re),!re.defaultPrevented&&zt())},className:bt(J==null?void 0:J.actionButton,(h=d==null?void 0:d.classNames)==null?void 0:h.actionButton)},d.action.label):null))};function zo(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}function Up(t,e){let n={};return[t,e].forEach((r,s)=>{let i=s===1,a=i?"--mobile-offset":"--offset",o=i?Ip:Cp;function l(c){["top","right","bottom","left"].forEach(u=>{n[`${a}-${u}`]=typeof c=="number"?`${c}px`:c})}typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(c=>{r[c]===void 0?n[`${a}-${c}`]=o:n[`${a}-${c}`]=typeof r[c]=="number"?`${r[c]}px`:r[c]}):l(o)}),n}var qp=E.forwardRef(function(t,e){let{invert:n,position:r="bottom-right",hotkey:s=["altKey","KeyT"],expand:i,closeButton:a,className:o,offset:l,mobileOffset:c,theme:u="light",richColors:h,duration:p,style:d,visibleToasts:v=Ap,toastOptions:f,dir:_=zo(),gap:k=Np,loadingIcon:C,icons:P,containerAriaLabel:L="Notifications",pauseWhenPageIsHidden:$}=t,[O,N]=I.useState([]),T=I.useMemo(()=>Array.from(new Set([r].concat(O.filter(R=>R.position).map(R=>R.position)))),[O,r]),[x,S]=I.useState([]),[z,D]=I.useState(!1),[V,X]=I.useState(!1),[G,te]=I.useState(u!=="system"?u:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),le=I.useRef(null),fe=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),J=I.useRef(null),y=I.useRef(!1),m=I.useCallback(R=>{N(A=>{var j;return(j=A.find(B=>B.id===R.id))!=null&&j.delete||Xe.dismiss(R.id),A.filter(({id:B})=>B!==R.id)})},[]);return I.useEffect(()=>Xe.subscribe(R=>{if(R.dismiss){N(A=>A.map(j=>j.id===R.id?{...j,delete:!0}:j));return}setTimeout(()=>{Qd.flushSync(()=>{N(A=>{let j=A.findIndex(B=>B.id===R.id);return j!==-1?[...A.slice(0,j),{...A[j],...R},...A.slice(j+1)]:[R,...A]})})})}),[]),I.useEffect(()=>{if(u!=="system"){te(u);return}if(u==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?te("dark"):te("light")),typeof window>"u")return;let R=window.matchMedia("(prefers-color-scheme: dark)");try{R.addEventListener("change",({matches:A})=>{te(A?"dark":"light")})}catch{R.addListener(({matches:j})=>{try{te(j?"dark":"light")}catch(B){console.error(B)}})}},[u]),I.useEffect(()=>{O.length<=1&&D(!1)},[O]),I.useEffect(()=>{let R=A=>{var j,B;s.every(Y=>A[Y]||A.code===Y)&&(D(!0),(j=le.current)==null||j.focus()),A.code==="Escape"&&(document.activeElement===le.current||(B=le.current)!=null&&B.contains(document.activeElement))&&D(!1)};return document.addEventListener("keydown",R),()=>document.removeEventListener("keydown",R)},[s]),I.useEffect(()=>{if(le.current)return()=>{J.current&&(J.current.focus({preventScroll:!0}),J.current=null,y.current=!1)}},[le.current]),I.createElement("section",{ref:e,"aria-label":`${L} ${fe}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},T.map((R,A)=>{var j;let[B,Y]=R.split("-");return O.length?I.createElement("ol",{key:R,dir:_==="auto"?zo():_,tabIndex:-1,ref:le,className:o,"data-sonner-toaster":!0,"data-theme":G,"data-y-position":B,"data-lifted":z&&O.length>1&&!i,"data-x-position":Y,style:{"--front-toast-height":`${((j=x[0])==null?void 0:j.height)||0}px`,"--width":`${Mp}px`,"--gap":`${k}px`,...d,...Up(l,c)},onBlur:q=>{y.current&&!q.currentTarget.contains(q.relatedTarget)&&(y.current=!1,J.current&&(J.current.focus({preventScroll:!0}),J.current=null))},onFocus:q=>{q.target instanceof HTMLElement&&q.target.dataset.dismissible==="false"||y.current||(y.current=!0,J.current=q.relatedTarget)},onMouseEnter:()=>D(!0),onMouseMove:()=>D(!0),onMouseLeave:()=>{V||D(!1)},onDragEnd:()=>D(!1),onPointerDown:q=>{q.target instanceof HTMLElement&&q.target.dataset.dismissible==="false"||X(!0)},onPointerUp:()=>X(!1)},O.filter(q=>!q.position&&A===0||q.position===R).map((q,Q)=>{var ne,ce;return I.createElement(Fp,{key:q.id,icons:P,index:Q,toast:q,defaultRichColors:h,duration:(ne=f==null?void 0:f.duration)!=null?ne:p,className:f==null?void 0:f.className,descriptionClassName:f==null?void 0:f.descriptionClassName,invert:n,visibleToasts:v,closeButton:(ce=f==null?void 0:f.closeButton)!=null?ce:a,interacting:V,position:R,style:f==null?void 0:f.style,unstyled:f==null?void 0:f.unstyled,classNames:f==null?void 0:f.classNames,cancelButtonStyle:f==null?void 0:f.cancelButtonStyle,actionButtonStyle:f==null?void 0:f.actionButtonStyle,removeToast:m,toasts:O.filter(pe=>pe.position==q.position),heights:x.filter(pe=>pe.position==q.position),setHeights:S,expandByDefault:i,gap:k,loadingIcon:C,expanded:z,pauseWhenPageIsHidden:$,swipeDirections:t.swipeDirections})})):null}))});const Hp=({...t})=>{const{theme:e="system"}=fp();return g.jsx(qp,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},Bp=rh,zp=E.forwardRef(({className:t,sideOffset:e=4,...n},r)=>g.jsx(Rc,{ref:r,sideOffset:e,className:De("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));zp.displayName=Rc.displayName;var ds=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Nn=typeof window>"u"||"Deno"in globalThis;function Ze(){}function Gp(t,e){return typeof t=="function"?t(e):t}function Ki(t){return typeof t=="number"&&t>=0&&t!==1/0}function Qc(t,e){return Math.max(t+(e||0)-Date.now(),0)}function cn(t,e){return typeof t=="function"?t(e):t}function dt(t,e){return typeof t=="function"?t(e):t}function Go(t,e){const{type:n="all",exact:r,fetchStatus:s,predicate:i,queryKey:a,stale:o}=t;if(a){if(r){if(e.queryHash!==io(a,e.options))return!1}else if(!Zr(e.queryKey,a))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof o=="boolean"&&e.isStale()!==o||s&&s!==e.state.fetchStatus||i&&!i(e))}function Jo(t,e){const{exact:n,status:r,predicate:s,mutationKey:i}=t;if(i){if(!e.options.mutationKey)return!1;if(n){if(Xr(e.options.mutationKey)!==Xr(i))return!1}else if(!Zr(e.options.mutationKey,i))return!1}return!(r&&e.state.status!==r||s&&!s(e))}function io(t,e){return((e==null?void 0:e.queryKeyHashFn)||Xr)(t)}function Xr(t){return JSON.stringify(t,(e,n)=>Qi(n)?Object.keys(n).sort().reduce((r,s)=>(r[s]=n[s],r),{}):n)}function Zr(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>Zr(t[n],e[n])):!1}function Xc(t,e){if(t===e)return t;const n=Wo(t)&&Wo(e);if(n||Qi(t)&&Qi(e)){const r=n?t:Object.keys(t),s=r.length,i=n?e:Object.keys(e),a=i.length,o=n?[]:{},l=new Set(r);let c=0;for(let u=0;u<a;u++){const h=n?u:i[u];(!n&&l.has(h)||n)&&t[h]===void 0&&e[h]===void 0?(o[h]=void 0,c++):(o[h]=Xc(t[h],e[h]),o[h]===t[h]&&t[h]!==void 0&&c++)}return s===a&&c===s?t:o}return e}function Yi(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function Wo(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Qi(t){if(!Vo(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!Vo(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Vo(t){return Object.prototype.toString.call(t)==="[object Object]"}function Jp(t){return new Promise(e=>{setTimeout(e,t)})}function Xi(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Xc(t,e):e}function Wp(t,e,n=0){const r=[...t,e];return n&&r.length>n?r.slice(1):r}function Vp(t,e,n=0){const r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}var ao=Symbol();function Zc(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===ao?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}function Kp(t,e){return typeof t=="function"?t(...e):!!t}var En,Zt,rr,cc,Yp=(cc=class extends ds{constructor(){super();Z(this,En);Z(this,Zt);Z(this,rr);W(this,rr,e=>{if(!Nn&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){b(this,Zt)||this.setEventListener(b(this,rr))}onUnsubscribe(){var e;this.hasListeners()||((e=b(this,Zt))==null||e.call(this),W(this,Zt,void 0))}setEventListener(e){var n;W(this,rr,e),(n=b(this,Zt))==null||n.call(this),W(this,Zt,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){b(this,En)!==e&&(W(this,En,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof b(this,En)=="boolean"?b(this,En):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},En=new WeakMap,Zt=new WeakMap,rr=new WeakMap,cc),oo=new Yp,sr,en,ir,uc,Qp=(uc=class extends ds{constructor(){super();Z(this,sr,!0);Z(this,en);Z(this,ir);W(this,ir,e=>{if(!Nn&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){b(this,en)||this.setEventListener(b(this,ir))}onUnsubscribe(){var e;this.hasListeners()||((e=b(this,en))==null||e.call(this),W(this,en,void 0))}setEventListener(e){var n;W(this,ir,e),(n=b(this,en))==null||n.call(this),W(this,en,e(this.setOnline.bind(this)))}setOnline(e){b(this,sr)!==e&&(W(this,sr,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return b(this,sr)}},sr=new WeakMap,en=new WeakMap,ir=new WeakMap,uc),Fs=new Qp;function Zi(){let t,e;const n=new Promise((s,i)=>{t=s,e=i});n.status="pending",n.catch(()=>{});function r(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{r({status:"fulfilled",value:s}),t(s)},n.reject=s=>{r({status:"rejected",reason:s}),e(s)},n}function Xp(t){return Math.min(1e3*2**t,3e4)}function eu(t){return(t??"online")==="online"?Fs.isOnline():!0}var tu=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function bi(t){return t instanceof tu}function nu(t){let e=!1,n=0,r=!1,s;const i=Zi(),a=f=>{var _;r||(p(new tu(f)),(_=t.abort)==null||_.call(t))},o=()=>{e=!0},l=()=>{e=!1},c=()=>oo.isFocused()&&(t.networkMode==="always"||Fs.isOnline())&&t.canRun(),u=()=>eu(t.networkMode)&&t.canRun(),h=f=>{var _;r||(r=!0,(_=t.onSuccess)==null||_.call(t,f),s==null||s(),i.resolve(f))},p=f=>{var _;r||(r=!0,(_=t.onError)==null||_.call(t,f),s==null||s(),i.reject(f))},d=()=>new Promise(f=>{var _;s=k=>{(r||c())&&f(k)},(_=t.onPause)==null||_.call(t)}).then(()=>{var f;s=void 0,r||(f=t.onContinue)==null||f.call(t)}),v=()=>{if(r)return;let f;const _=n===0?t.initialPromise:void 0;try{f=_??t.fn()}catch(k){f=Promise.reject(k)}Promise.resolve(f).then(h).catch(k=>{var O;if(r)return;const C=t.retry??(Nn?0:3),P=t.retryDelay??Xp,L=typeof P=="function"?P(n,k):P,$=C===!0||typeof C=="number"&&n<C||typeof C=="function"&&C(n,k);if(e||!$){p(k);return}n++,(O=t.onFail)==null||O.call(t,n,k),Jp(L).then(()=>c()?void 0:d()).then(()=>{e?p(k):v()})})};return{promise:i,cancel:a,continue:()=>(s==null||s(),i),cancelRetry:o,continueRetry:l,canStart:u,start:()=>(u()?v():d().then(v),i)}}var Zp=t=>setTimeout(t,0);function ef(){let t=[],e=0,n=o=>{o()},r=o=>{o()},s=Zp;const i=o=>{e?t.push(o):s(()=>{n(o)})},a=()=>{const o=t;t=[],o.length&&s(()=>{r(()=>{o.forEach(l=>{n(l)})})})};return{batch:o=>{let l;e++;try{l=o()}finally{e--,e||a()}return l},batchCalls:o=>(...l)=>{i(()=>{o(...l)})},schedule:i,setNotifyFunction:o=>{n=o},setBatchNotifyFunction:o=>{r=o},setScheduler:o=>{s=o}}}var Ue=ef(),Sn,dc,ru=(dc=class{constructor(){Z(this,Sn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Ki(this.gcTime)&&W(this,Sn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Nn?1/0:5*60*1e3))}clearGcTimeout(){b(this,Sn)&&(clearTimeout(b(this,Sn)),W(this,Sn,void 0))}},Sn=new WeakMap,dc),ar,Tn,ut,Rn,ze,os,Pn,_t,Dt,hc,tf=(hc=class extends ru{constructor(e){super();Z(this,_t);Z(this,ar);Z(this,Tn);Z(this,ut);Z(this,Rn);Z(this,ze);Z(this,os);Z(this,Pn);W(this,Pn,!1),W(this,os,e.defaultOptions),this.setOptions(e.options),this.observers=[],W(this,Rn,e.client),W(this,ut,b(this,Rn).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,W(this,ar,nf(this.options)),this.state=e.state??b(this,ar),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=b(this,ze))==null?void 0:e.promise}setOptions(e){this.options={...b(this,os),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&b(this,ut).remove(this)}setData(e,n){const r=Xi(this.state.data,e,this.options);return de(this,_t,Dt).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){de(this,_t,Dt).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var r,s;const n=(r=b(this,ze))==null?void 0:r.promise;return(s=b(this,ze))==null||s.cancel(e),n?n.then(Ze).catch(Ze):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(b(this,ar))}isActive(){return this.observers.some(e=>dt(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===ao||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>cn(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!Qc(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(r=>r.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=b(this,ze))==null||n.continue()}onOnline(){var n;const e=this.observers.find(r=>r.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=b(this,ze))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),b(this,ut).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(b(this,ze)&&(b(this,Pn)?b(this,ze).cancel({revert:!0}):b(this,ze).cancelRetry()),this.scheduleGc()),b(this,ut).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||de(this,_t,Dt).call(this,{type:"invalidate"})}fetch(e,n){var c,u,h;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(b(this,ze))return b(this,ze).continueRetry(),b(this,ze).promise}if(e&&this.setOptions(e),!this.options.queryFn){const p=this.observers.find(d=>d.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,s=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(W(this,Pn,!0),r.signal)})},i=()=>{const p=Zc(this.options,n),v=(()=>{const f={client:b(this,Rn),queryKey:this.queryKey,meta:this.meta};return s(f),f})();return W(this,Pn,!1),this.options.persister?this.options.persister(p,v,this):p(v)},o=(()=>{const p={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:b(this,Rn),state:this.state,fetchFn:i};return s(p),p})();(c=this.options.behavior)==null||c.onFetch(o,this),W(this,Tn,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=o.fetchOptions)==null?void 0:u.meta))&&de(this,_t,Dt).call(this,{type:"fetch",meta:(h=o.fetchOptions)==null?void 0:h.meta});const l=p=>{var d,v,f,_;bi(p)&&p.silent||de(this,_t,Dt).call(this,{type:"error",error:p}),bi(p)||((v=(d=b(this,ut).config).onError)==null||v.call(d,p,this),(_=(f=b(this,ut).config).onSettled)==null||_.call(f,this.state.data,p,this)),this.scheduleGc()};return W(this,ze,nu({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var d,v,f,_;if(p===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(k){l(k);return}(v=(d=b(this,ut).config).onSuccess)==null||v.call(d,p,this),(_=(f=b(this,ut).config).onSettled)==null||_.call(f,p,this.state.error,this),this.scheduleGc()},onError:l,onFail:(p,d)=>{de(this,_t,Dt).call(this,{type:"failed",failureCount:p,error:d})},onPause:()=>{de(this,_t,Dt).call(this,{type:"pause"})},onContinue:()=>{de(this,_t,Dt).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),b(this,ze).start()}},ar=new WeakMap,Tn=new WeakMap,ut=new WeakMap,Rn=new WeakMap,ze=new WeakMap,os=new WeakMap,Pn=new WeakMap,_t=new WeakSet,Dt=function(e){const n=r=>{switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...su(r.data,this.options),fetchMeta:e.meta??null};case"success":return W(this,Tn,void 0),{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return bi(s)&&s.revert&&b(this,Tn)?{...b(this,Tn),fetchStatus:"idle"}:{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),Ue.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),b(this,ut).notify({query:this,type:"updated",action:e})})},hc);function su(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:eu(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function nf(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Et,pc,rf=(pc=class extends ds{constructor(e={}){super();Z(this,Et);this.config=e,W(this,Et,new Map)}build(e,n,r){const s=n.queryKey,i=n.queryHash??io(s,n);let a=this.get(i);return a||(a=new tf({client:e,queryKey:s,queryHash:i,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(a)),a}add(e){b(this,Et).has(e.queryHash)||(b(this,Et).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=b(this,Et).get(e.queryHash);n&&(e.destroy(),n===e&&b(this,Et).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Ue.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return b(this,Et).get(e)}getAll(){return[...b(this,Et).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Go(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>Go(e,r)):n}notify(e){Ue.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){Ue.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Ue.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Et=new WeakMap,pc),St,We,$n,Tt,Yt,fc,sf=(fc=class extends ru{constructor(e){super();Z(this,Tt);Z(this,St);Z(this,We);Z(this,$n);this.mutationId=e.mutationId,W(this,We,e.mutationCache),W(this,St,[]),this.state=e.state||af(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){b(this,St).includes(e)||(b(this,St).push(e),this.clearGcTimeout(),b(this,We).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){W(this,St,b(this,St).filter(n=>n!==e)),this.scheduleGc(),b(this,We).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){b(this,St).length||(this.state.status==="pending"?this.scheduleGc():b(this,We).remove(this))}continue(){var e;return((e=b(this,$n))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var i,a,o,l,c,u,h,p,d,v,f,_,k,C,P,L,$,O,N,T;const n=()=>{de(this,Tt,Yt).call(this,{type:"continue"})};W(this,$n,nu({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(x,S)=>{de(this,Tt,Yt).call(this,{type:"failed",failureCount:x,error:S})},onPause:()=>{de(this,Tt,Yt).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>b(this,We).canRun(this)}));const r=this.state.status==="pending",s=!b(this,$n).canStart();try{if(r)n();else{de(this,Tt,Yt).call(this,{type:"pending",variables:e,isPaused:s}),await((a=(i=b(this,We).config).onMutate)==null?void 0:a.call(i,e,this));const S=await((l=(o=this.options).onMutate)==null?void 0:l.call(o,e));S!==this.state.context&&de(this,Tt,Yt).call(this,{type:"pending",context:S,variables:e,isPaused:s})}const x=await b(this,$n).start();return await((u=(c=b(this,We).config).onSuccess)==null?void 0:u.call(c,x,e,this.state.context,this)),await((p=(h=this.options).onSuccess)==null?void 0:p.call(h,x,e,this.state.context)),await((v=(d=b(this,We).config).onSettled)==null?void 0:v.call(d,x,null,this.state.variables,this.state.context,this)),await((_=(f=this.options).onSettled)==null?void 0:_.call(f,x,null,e,this.state.context)),de(this,Tt,Yt).call(this,{type:"success",data:x}),x}catch(x){try{throw await((C=(k=b(this,We).config).onError)==null?void 0:C.call(k,x,e,this.state.context,this)),await((L=(P=this.options).onError)==null?void 0:L.call(P,x,e,this.state.context)),await((O=($=b(this,We).config).onSettled)==null?void 0:O.call($,void 0,x,this.state.variables,this.state.context,this)),await((T=(N=this.options).onSettled)==null?void 0:T.call(N,void 0,x,e,this.state.context)),x}finally{de(this,Tt,Yt).call(this,{type:"error",error:x})}}finally{b(this,We).runNext(this)}}},St=new WeakMap,We=new WeakMap,$n=new WeakMap,Tt=new WeakSet,Yt=function(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Ue.batch(()=>{b(this,St).forEach(r=>{r.onMutationUpdate(e)}),b(this,We).notify({mutation:this,type:"updated",action:e})})},fc);function af(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ut,wt,ls,gc,of=(gc=class extends ds{constructor(e={}){super();Z(this,Ut);Z(this,wt);Z(this,ls);this.config=e,W(this,Ut,new Set),W(this,wt,new Map),W(this,ls,0)}build(e,n,r){const s=new sf({mutationCache:this,mutationId:++gs(this,ls)._,options:e.defaultMutationOptions(n),state:r});return this.add(s),s}add(e){b(this,Ut).add(e);const n=vs(e);if(typeof n=="string"){const r=b(this,wt).get(n);r?r.push(e):b(this,wt).set(n,[e])}this.notify({type:"added",mutation:e})}remove(e){if(b(this,Ut).delete(e)){const n=vs(e);if(typeof n=="string"){const r=b(this,wt).get(n);if(r)if(r.length>1){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}else r[0]===e&&b(this,wt).delete(n)}}this.notify({type:"removed",mutation:e})}canRun(e){const n=vs(e);if(typeof n=="string"){const r=b(this,wt).get(n),s=r==null?void 0:r.find(i=>i.state.status==="pending");return!s||s===e}else return!0}runNext(e){var r;const n=vs(e);if(typeof n=="string"){const s=(r=b(this,wt).get(n))==null?void 0:r.find(i=>i!==e&&i.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Ue.batch(()=>{b(this,Ut).forEach(e=>{this.notify({type:"removed",mutation:e})}),b(this,Ut).clear(),b(this,wt).clear()})}getAll(){return Array.from(b(this,Ut))}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Jo(n,r))}findAll(e={}){return this.getAll().filter(n=>Jo(e,n))}notify(e){Ue.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return Ue.batch(()=>Promise.all(e.map(n=>n.continue().catch(Ze))))}},Ut=new WeakMap,wt=new WeakMap,ls=new WeakMap,gc);function vs(t){var e;return(e=t.options.scope)==null?void 0:e.id}function Ko(t){return{onFetch:(e,n)=>{var u,h,p,d,v;const r=e.options,s=(p=(h=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:h.fetchMore)==null?void 0:p.direction,i=((d=e.state.data)==null?void 0:d.pages)||[],a=((v=e.state.data)==null?void 0:v.pageParams)||[];let o={pages:[],pageParams:[]},l=0;const c=async()=>{let f=!1;const _=P=>{Object.defineProperty(P,"signal",{enumerable:!0,get:()=>(e.signal.aborted?f=!0:e.signal.addEventListener("abort",()=>{f=!0}),e.signal)})},k=Zc(e.options,e.fetchOptions),C=async(P,L,$)=>{if(f)return Promise.reject();if(L==null&&P.pages.length)return Promise.resolve(P);const N=(()=>{const z={client:e.client,queryKey:e.queryKey,pageParam:L,direction:$?"backward":"forward",meta:e.options.meta};return _(z),z})(),T=await k(N),{maxPages:x}=e.options,S=$?Vp:Wp;return{pages:S(P.pages,T,x),pageParams:S(P.pageParams,L,x)}};if(s&&i.length){const P=s==="backward",L=P?lf:Yo,$={pages:i,pageParams:a},O=L(r,$);o=await C($,O,P)}else{const P=t??i.length;do{const L=l===0?a[0]??r.initialPageParam:Yo(r,o);if(l>0&&L==null)break;o=await C(o,L),l++}while(l<P)}return o};e.options.persister?e.fetchFn=()=>{var f,_;return(_=(f=e.options).persister)==null?void 0:_.call(f,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function Yo(t,{pages:e,pageParams:n}){const r=e.length-1;return e.length>0?t.getNextPageParam(e[r],e,n[r],n):void 0}function lf(t,{pages:e,pageParams:n}){var r;return e.length>0?(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,n[0],n):void 0}var Oe,tn,nn,or,lr,rn,cr,ur,mc,cf=(mc=class{constructor(t={}){Z(this,Oe);Z(this,tn);Z(this,nn);Z(this,or);Z(this,lr);Z(this,rn);Z(this,cr);Z(this,ur);W(this,Oe,t.queryCache||new rf),W(this,tn,t.mutationCache||new of),W(this,nn,t.defaultOptions||{}),W(this,or,new Map),W(this,lr,new Map),W(this,rn,0)}mount(){gs(this,rn)._++,b(this,rn)===1&&(W(this,cr,oo.subscribe(async t=>{t&&(await this.resumePausedMutations(),b(this,Oe).onFocus())})),W(this,ur,Fs.subscribe(async t=>{t&&(await this.resumePausedMutations(),b(this,Oe).onOnline())})))}unmount(){var t,e;gs(this,rn)._--,b(this,rn)===0&&((t=b(this,cr))==null||t.call(this),W(this,cr,void 0),(e=b(this,ur))==null||e.call(this),W(this,ur,void 0))}isFetching(t){return b(this,Oe).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return b(this,tn).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=b(this,Oe).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),n=b(this,Oe).build(this,e),r=n.state.data;return r===void 0?this.fetchQuery(t):(t.revalidateIfStale&&n.isStaleByTime(cn(e.staleTime,n))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(t){return b(this,Oe).findAll(t).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(t,e,n){const r=this.defaultQueryOptions({queryKey:t}),s=b(this,Oe).get(r.queryHash),i=s==null?void 0:s.state.data,a=Gp(e,i);if(a!==void 0)return b(this,Oe).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(t,e,n){return Ue.batch(()=>b(this,Oe).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=b(this,Oe).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=b(this,Oe);Ue.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=b(this,Oe);return Ue.batch(()=>(n.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const n={revert:!0,...e},r=Ue.batch(()=>b(this,Oe).findAll(t).map(s=>s.cancel(n)));return Promise.all(r).then(Ze).catch(Ze)}invalidateQueries(t,e={}){return Ue.batch(()=>(b(this,Oe).findAll(t).forEach(n=>{n.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const n={...e,cancelRefetch:e.cancelRefetch??!0},r=Ue.batch(()=>b(this,Oe).findAll(t).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let i=s.fetch(void 0,n);return n.throwOnError||(i=i.catch(Ze)),s.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(Ze)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=b(this,Oe).build(this,e);return n.isStaleByTime(cn(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(Ze).catch(Ze)}fetchInfiniteQuery(t){return t.behavior=Ko(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(Ze).catch(Ze)}ensureInfiniteQueryData(t){return t.behavior=Ko(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Fs.isOnline()?b(this,tn).resumePausedMutations():Promise.resolve()}getQueryCache(){return b(this,Oe)}getMutationCache(){return b(this,tn)}getDefaultOptions(){return b(this,nn)}setDefaultOptions(t){W(this,nn,t)}setQueryDefaults(t,e){b(this,or).set(Xr(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...b(this,or).values()],n={};return e.forEach(r=>{Zr(t,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(t,e){b(this,lr).set(Xr(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...b(this,lr).values()],n={};return e.forEach(r=>{Zr(t,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...b(this,nn).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=io(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===ao&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...b(this,nn).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){b(this,Oe).clear(),b(this,tn).clear()}},Oe=new WeakMap,tn=new WeakMap,nn=new WeakMap,or=new WeakMap,lr=new WeakMap,rn=new WeakMap,cr=new WeakMap,ur=new WeakMap,mc),Ye,he,cs,Ve,On,dr,sn,an,us,hr,pr,An,Cn,on,fr,ge,jr,ea,ta,na,ra,sa,ia,aa,iu,vc,uf=(vc=class extends ds{constructor(e,n){super();Z(this,ge);Z(this,Ye);Z(this,he);Z(this,cs);Z(this,Ve);Z(this,On);Z(this,dr);Z(this,sn);Z(this,an);Z(this,us);Z(this,hr);Z(this,pr);Z(this,An);Z(this,Cn);Z(this,on);Z(this,fr,new Set);this.options=n,W(this,Ye,e),W(this,an,null),W(this,sn,Zi()),this.options.experimental_prefetchInRender||b(this,sn).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(b(this,he).addObserver(this),Qo(b(this,he),this.options)?de(this,ge,jr).call(this):this.updateResult(),de(this,ge,ra).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return oa(b(this,he),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return oa(b(this,he),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,de(this,ge,sa).call(this),de(this,ge,ia).call(this),b(this,he).removeObserver(this)}setOptions(e){const n=this.options,r=b(this,he);if(this.options=b(this,Ye).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof dt(this.options.enabled,b(this,he))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");de(this,ge,aa).call(this),b(this,he).setOptions(this.options),n._defaulted&&!Yi(this.options,n)&&b(this,Ye).getQueryCache().notify({type:"observerOptionsUpdated",query:b(this,he),observer:this});const s=this.hasListeners();s&&Xo(b(this,he),r,this.options,n)&&de(this,ge,jr).call(this),this.updateResult(),s&&(b(this,he)!==r||dt(this.options.enabled,b(this,he))!==dt(n.enabled,b(this,he))||cn(this.options.staleTime,b(this,he))!==cn(n.staleTime,b(this,he)))&&de(this,ge,ea).call(this);const i=de(this,ge,ta).call(this);s&&(b(this,he)!==r||dt(this.options.enabled,b(this,he))!==dt(n.enabled,b(this,he))||i!==b(this,on))&&de(this,ge,na).call(this,i)}getOptimisticResult(e){const n=b(this,Ye).getQueryCache().build(b(this,Ye),e),r=this.createResult(n,e);return hf(this,r)&&(W(this,Ve,r),W(this,dr,this.options),W(this,On,b(this,he).state)),r}getCurrentResult(){return b(this,Ve)}trackResult(e,n){return new Proxy(e,{get:(r,s)=>(this.trackProp(s),n==null||n(s),Reflect.get(r,s))})}trackProp(e){b(this,fr).add(e)}getCurrentQuery(){return b(this,he)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const n=b(this,Ye).defaultQueryOptions(e),r=b(this,Ye).getQueryCache().build(b(this,Ye),n);return r.fetch().then(()=>this.createResult(r,n))}fetch(e){return de(this,ge,jr).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),b(this,Ve)))}createResult(e,n){var x;const r=b(this,he),s=this.options,i=b(this,Ve),a=b(this,On),o=b(this,dr),c=e!==r?e.state:b(this,cs),{state:u}=e;let h={...u},p=!1,d;if(n._optimisticResults){const S=this.hasListeners(),z=!S&&Qo(e,n),D=S&&Xo(e,r,n,s);(z||D)&&(h={...h,...su(u.data,e.options)}),n._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:v,errorUpdatedAt:f,status:_}=h;d=h.data;let k=!1;if(n.placeholderData!==void 0&&d===void 0&&_==="pending"){let S;i!=null&&i.isPlaceholderData&&n.placeholderData===(o==null?void 0:o.placeholderData)?(S=i.data,k=!0):S=typeof n.placeholderData=="function"?n.placeholderData((x=b(this,pr))==null?void 0:x.state.data,b(this,pr)):n.placeholderData,S!==void 0&&(_="success",d=Xi(i==null?void 0:i.data,S,n),p=!0)}if(n.select&&d!==void 0&&!k)if(i&&d===(a==null?void 0:a.data)&&n.select===b(this,us))d=b(this,hr);else try{W(this,us,n.select),d=n.select(d),d=Xi(i==null?void 0:i.data,d,n),W(this,hr,d),W(this,an,null)}catch(S){W(this,an,S)}b(this,an)&&(v=b(this,an),d=b(this,hr),f=Date.now(),_="error");const C=h.fetchStatus==="fetching",P=_==="pending",L=_==="error",$=P&&C,O=d!==void 0,T={status:_,fetchStatus:h.fetchStatus,isPending:P,isSuccess:_==="success",isError:L,isInitialLoading:$,isLoading:$,data:d,dataUpdatedAt:h.dataUpdatedAt,error:v,errorUpdatedAt:f,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>c.dataUpdateCount||h.errorUpdateCount>c.errorUpdateCount,isFetching:C,isRefetching:C&&!P,isLoadingError:L&&!O,isPaused:h.fetchStatus==="paused",isPlaceholderData:p,isRefetchError:L&&O,isStale:lo(e,n),refetch:this.refetch,promise:b(this,sn),isEnabled:dt(n.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const S=V=>{T.status==="error"?V.reject(T.error):T.data!==void 0&&V.resolve(T.data)},z=()=>{const V=W(this,sn,T.promise=Zi());S(V)},D=b(this,sn);switch(D.status){case"pending":e.queryHash===r.queryHash&&S(D);break;case"fulfilled":(T.status==="error"||T.data!==D.value)&&z();break;case"rejected":(T.status!=="error"||T.error!==D.reason)&&z();break}}return T}updateResult(){const e=b(this,Ve),n=this.createResult(b(this,he),this.options);if(W(this,On,b(this,he).state),W(this,dr,this.options),b(this,On).data!==void 0&&W(this,pr,b(this,he)),Yi(n,e))return;W(this,Ve,n);const r=()=>{if(!e)return!0;const{notifyOnChangeProps:s}=this.options,i=typeof s=="function"?s():s;if(i==="all"||!i&&!b(this,fr).size)return!0;const a=new Set(i??b(this,fr));return this.options.throwOnError&&a.add("error"),Object.keys(b(this,Ve)).some(o=>{const l=o;return b(this,Ve)[l]!==e[l]&&a.has(l)})};de(this,ge,iu).call(this,{listeners:r()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&de(this,ge,ra).call(this)}},Ye=new WeakMap,he=new WeakMap,cs=new WeakMap,Ve=new WeakMap,On=new WeakMap,dr=new WeakMap,sn=new WeakMap,an=new WeakMap,us=new WeakMap,hr=new WeakMap,pr=new WeakMap,An=new WeakMap,Cn=new WeakMap,on=new WeakMap,fr=new WeakMap,ge=new WeakSet,jr=function(e){de(this,ge,aa).call(this);let n=b(this,he).fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(Ze)),n},ea=function(){de(this,ge,sa).call(this);const e=cn(this.options.staleTime,b(this,he));if(Nn||b(this,Ve).isStale||!Ki(e))return;const r=Qc(b(this,Ve).dataUpdatedAt,e)+1;W(this,An,setTimeout(()=>{b(this,Ve).isStale||this.updateResult()},r))},ta=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(b(this,he)):this.options.refetchInterval)??!1},na=function(e){de(this,ge,ia).call(this),W(this,on,e),!(Nn||dt(this.options.enabled,b(this,he))===!1||!Ki(b(this,on))||b(this,on)===0)&&W(this,Cn,setInterval(()=>{(this.options.refetchIntervalInBackground||oo.isFocused())&&de(this,ge,jr).call(this)},b(this,on)))},ra=function(){de(this,ge,ea).call(this),de(this,ge,na).call(this,de(this,ge,ta).call(this))},sa=function(){b(this,An)&&(clearTimeout(b(this,An)),W(this,An,void 0))},ia=function(){b(this,Cn)&&(clearInterval(b(this,Cn)),W(this,Cn,void 0))},aa=function(){const e=b(this,Ye).getQueryCache().build(b(this,Ye),this.options);if(e===b(this,he))return;const n=b(this,he);W(this,he,e),W(this,cs,e.state),this.hasListeners()&&(n==null||n.removeObserver(this),e.addObserver(this))},iu=function(e){Ue.batch(()=>{e.listeners&&this.listeners.forEach(n=>{n(b(this,Ve))}),b(this,Ye).getQueryCache().notify({query:b(this,he),type:"observerResultsUpdated"})})},vc);function df(t,e){return dt(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Qo(t,e){return df(t,e)||t.state.data!==void 0&&oa(t,e,e.refetchOnMount)}function oa(t,e,n){if(dt(e.enabled,t)!==!1&&cn(e.staleTime,t)!=="static"){const r=typeof n=="function"?n(t):n;return r==="always"||r!==!1&&lo(t,e)}return!1}function Xo(t,e,n,r){return(t!==e||dt(r.enabled,t)===!1)&&(!n.suspense||t.state.status!=="error")&&lo(t,n)}function lo(t,e){return dt(e.enabled,t)!==!1&&t.isStaleByTime(cn(e.staleTime,t))}function hf(t,e){return!Yi(t.getCurrentResult(),e)}var au=E.createContext(void 0),pf=t=>{const e=E.useContext(au);if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},ff=({client:t,children:e})=>(E.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),g.jsx(au.Provider,{value:t,children:e})),ou=E.createContext(!1),gf=()=>E.useContext(ou);ou.Provider;function mf(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var vf=E.createContext(mf()),bf=()=>E.useContext(vf),yf=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&(e.isReset()||(t.retryOnMount=!1))},_f=t=>{E.useEffect(()=>{t.clearReset()},[t])},wf=({result:t,errorResetBoundary:e,throwOnError:n,query:r,suspense:s})=>t.isError&&!e.isReset()&&!t.isFetching&&r&&(s&&t.data===void 0||Kp(n,[t.error,r])),xf=t=>{if(t.suspense){const e=r=>r==="static"?r:Math.max(r??1e3,1e3),n=t.staleTime;t.staleTime=typeof n=="function"?(...r)=>e(n(...r)):e(n),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3))}},kf=(t,e)=>t.isLoading&&t.isFetching&&!e,Ef=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,Zo=(t,e,n)=>e.fetchOptimistic(t).catch(()=>{n.clearReset()});function Sf(t,e,n){var h,p,d,v,f;const r=gf(),s=bf(),i=pf(),a=i.defaultQueryOptions(t);(p=(h=i.getDefaultOptions().queries)==null?void 0:h._experimental_beforeQuery)==null||p.call(h,a),a._optimisticResults=r?"isRestoring":"optimistic",xf(a),yf(a,s),_f(s);const o=!i.getQueryCache().get(a.queryHash),[l]=E.useState(()=>new e(i,a)),c=l.getOptimisticResult(a),u=!r&&t.subscribed!==!1;if(E.useSyncExternalStore(E.useCallback(_=>{const k=u?l.subscribe(Ue.batchCalls(_)):Ze;return l.updateResult(),k},[l,u]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),E.useEffect(()=>{l.setOptions(a)},[a,l]),Ef(a,c))throw Zo(a,l,s);if(wf({result:c,errorResetBoundary:s,throwOnError:a.throwOnError,query:i.getQueryCache().get(a.queryHash),suspense:a.suspense}))throw c.error;if((v=(d=i.getDefaultOptions().queries)==null?void 0:d._experimental_afterQuery)==null||v.call(d,a,c),a.experimental_prefetchInRender&&!Nn&&kf(c,r)){const _=o?Zo(a,l,s):(f=i.getQueryCache().get(a.queryHash))==null?void 0:f.promise;_==null||_.catch(Ze).finally(()=>{l.updateResult()})}return a.notifyOnChangeProps?c:l.trackResult(c)}function lu(t,e){return Sf(t,uf)}var Tf=typeof Element<"u",Rf=typeof Map=="function",Pf=typeof Set=="function",$f=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Cs(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,s;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Cs(t[r],e[r]))return!1;return!0}var i;if(Rf&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!Cs(r.value[1],e.get(r.value[0])))return!1;return!0}if(Pf&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if($f&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(s=Object.keys(t),n=s.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;if(Tf&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((s[r]==="_owner"||s[r]==="__v"||s[r]==="__o")&&t.$$typeof)&&!Cs(t[s[r]],e[s[r]]))return!1;return!0}return t!==t&&e!==e}var Of=function(e,n){try{return Cs(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Af=no(Of);var Cf=function(t,e,n,r,s,i,a,o){if(!t){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,s,i,a,o],u=0;l=new Error(e.replace(/%s/g,function(){return c[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},If=Cf;const el=no(If);var Mf=function(e,n,r,s){var i=r?r.call(s,e,n):void 0;if(i!==void 0)return!!i;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<a.length;c++){var u=a[c];if(!l(u))return!1;var h=e[u],p=n[u];if(i=r?r.call(s,h,p,u):void 0,i===!1||i===void 0&&h!==p)return!1}return!0};const Nf=no(Mf);var cu=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(cu||{}),yi={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},tl=Object.values(cu),co={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Df=Object.entries(co).reduce((t,[e,n])=>(t[n]=e,t),{}),xt="data-rh",Zn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},er=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},Lf=t=>{let e=er(t,"title");const n=er(t,Zn.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=er(t,Zn.DEFAULT_TITLE);return e||r||void 0},jf=t=>er(t,Zn.ON_CHANGE_CLIENT_STATE)||(()=>{}),_i=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),Ff=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const s=Object.keys(r);for(let i=0;i<s.length;i+=1){const o=s[i].toLowerCase();if(t.indexOf(o)!==-1&&r[o])return n.concat(r)}}return n},[]),Uf=t=>console&&typeof console.warn=="function"&&console.warn(t),Sr=(t,e,n)=>{const r={};return n.filter(s=>Array.isArray(s[t])?!0:(typeof s[t]<"u"&&Uf(`Helmet: ${t} should be of type "Array". Instead found type "${typeof s[t]}"`),!1)).map(s=>s[t]).reverse().reduce((s,i)=>{const a={};i.filter(l=>{let c;const u=Object.keys(l);for(let p=0;p<u.length;p+=1){const d=u[p],v=d.toLowerCase();e.indexOf(v)!==-1&&!(c==="rel"&&l[c].toLowerCase()==="canonical")&&!(v==="rel"&&l[v].toLowerCase()==="stylesheet")&&(c=v),e.indexOf(d)!==-1&&(d==="innerHTML"||d==="cssText"||d==="itemprop")&&(c=d)}if(!c||!l[c])return!1;const h=l[c].toLowerCase();return r[c]||(r[c]={}),a[c]||(a[c]={}),r[c][h]?!1:(a[c][h]=!0,!0)}).reverse().forEach(l=>s.push(l));const o=Object.keys(a);for(let l=0;l<o.length;l+=1){const c=o[l],u={...r[c],...a[c]};r[c]=u}return s},[]).reverse()},qf=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},Hf=t=>({baseTag:Ff(["href"],t),bodyAttributes:_i("bodyAttributes",t),defer:er(t,Zn.DEFER),encode:er(t,Zn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:_i("htmlAttributes",t),linkTags:Sr("link",["rel","href"],t),metaTags:Sr("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Sr("noscript",["innerHTML"],t),onChangeClientState:jf(t),scriptTags:Sr("script",["src","innerHTML"],t),styleTags:Sr("style",["cssText"],t),title:Lf(t),titleAttributes:_i("titleAttributes",t),prioritizeSeoTags:qf(t,Zn.PRIORITIZE_SEO_TAGS)}),uu=t=>Array.isArray(t)?t.join(""):t,Bf=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},wi=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(Bf(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},nl=(t,e)=>({...t,[e]:void 0}),zf=["noscript","script","style"],la=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),du=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),Gf=(t,e,n,r)=>{const s=du(n),i=uu(e);return s?`<${t} ${xt}="true" ${s}>${la(i,r)}</${t}>`:`<${t} ${xt}="true">${la(i,r)}</${t}>`},Jf=(t,e,n=!0)=>e.reduce((r,s)=>{const i=s,a=Object.keys(i).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,u)=>{const h=typeof i[u]>"u"?u:`${u}="${la(i[u],n)}"`;return c?`${c} ${h}`:h},""),o=i.innerHTML||i.cssText||"",l=zf.indexOf(t)===-1;return`${r}<${t} ${xt}="true" ${a}${l?"/>":`>${o}</${t}>`}`},""),hu=(t,e={})=>Object.keys(t).reduce((n,r)=>{const s=co[r];return n[s||r]=t[r],n},e),Wf=(t,e,n)=>{const r={key:e,[xt]:!0},s=hu(n,r);return[I.createElement("title",s,e)]},Is=(t,e)=>e.map((n,r)=>{const s={key:r,[xt]:!0};return Object.keys(n).forEach(i=>{const o=co[i]||i;if(o==="innerHTML"||o==="cssText"){const l=n.innerHTML||n.cssText;s.dangerouslySetInnerHTML={__html:l}}else s[o]=n[i]}),I.createElement(t,s)}),ct=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>Wf(t,e.title,e.titleAttributes),toString:()=>Gf(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>hu(e),toString:()=>du(e)};default:return{toComponent:()=>Is(t,e),toString:()=>Jf(t,e,n)}}},Vf=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const s=wi(t,yi.meta),i=wi(e,yi.link),a=wi(n,yi.script);return{priorityMethods:{toComponent:()=>[...Is("meta",s.priority),...Is("link",i.priority),...Is("script",a.priority)],toString:()=>`${ct("meta",s.priority,r)} ${ct("link",i.priority,r)} ${ct("script",a.priority,r)}`},metaTags:s.default,linkTags:i.default,scriptTags:a.default}},Kf=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:s,noscriptTags:i,styleTags:a,title:o="",titleAttributes:l,prioritizeSeoTags:c}=t;let{linkTags:u,metaTags:h,scriptTags:p}=t,d={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:d,linkTags:u,metaTags:h,scriptTags:p}=Vf(t)),{priority:d,base:ct("base",e,r),bodyAttributes:ct("bodyAttributes",n,r),htmlAttributes:ct("htmlAttributes",s,r),link:ct("link",u,r),meta:ct("meta",h,r),noscript:ct("noscript",i,r),script:ct("script",p,r),style:ct("style",a,r),title:ct("title",{title:o,titleAttributes:l},r)}},ca=Kf,bs=[],pu=!!(typeof window<"u"&&window.document&&window.document.createElement),ua=class{constructor(t,e){At(this,"instances",[]);At(this,"canUseDOM",pu);At(this,"context");At(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?bs:this.instances,add:t=>{(this.canUseDOM?bs:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?bs:this.instances).indexOf(t);(this.canUseDOM?bs:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=ca({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Yf={},fu=I.createContext(Yf),In,gu=(In=class extends E.Component{constructor(n){super(n);At(this,"helmetData");this.helmetData=new ua(this.props.context||{},In.canUseDOM)}render(){return I.createElement(fu.Provider,{value:this.helmetData.value},this.props.children)}},At(In,"canUseDOM",pu),In),Fn=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${xt}]`),s=[].slice.call(r),i=[];let a;return e&&e.length&&e.forEach(o=>{const l=document.createElement(t);for(const c in o)if(Object.prototype.hasOwnProperty.call(o,c))if(c==="innerHTML")l.innerHTML=o.innerHTML;else if(c==="cssText")l.styleSheet?l.styleSheet.cssText=o.cssText:l.appendChild(document.createTextNode(o.cssText));else{const u=c,h=typeof o[u]>"u"?"":o[u];l.setAttribute(c,h)}l.setAttribute(xt,"true"),s.some((c,u)=>(a=u,l.isEqualNode(c)))?s.splice(a,1):i.push(l)}),s.forEach(o=>{var l;return(l=o.parentNode)==null?void 0:l.removeChild(o)}),i.forEach(o=>n.appendChild(o)),{oldTags:s,newTags:i}},da=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(xt),s=r?r.split(","):[],i=[...s],a=Object.keys(e);for(const o of a){const l=e[o]||"";n.getAttribute(o)!==l&&n.setAttribute(o,l),s.indexOf(o)===-1&&s.push(o);const c=i.indexOf(o);c!==-1&&i.splice(c,1)}for(let o=i.length-1;o>=0;o-=1)n.removeAttribute(i[o]);s.length===i.length?n.removeAttribute(xt):n.getAttribute(xt)!==a.join(",")&&n.setAttribute(xt,a.join(","))},Qf=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=uu(t)),da("title",e)},rl=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:s,linkTags:i,metaTags:a,noscriptTags:o,onChangeClientState:l,scriptTags:c,styleTags:u,title:h,titleAttributes:p}=t;da("body",r),da("html",s),Qf(h,p);const d={baseTag:Fn("base",n),linkTags:Fn("link",i),metaTags:Fn("meta",a),noscriptTags:Fn("noscript",o),scriptTags:Fn("script",c),styleTags:Fn("style",u)},v={},f={};Object.keys(d).forEach(_=>{const{newTags:k,oldTags:C}=d[_];k.length&&(v[_]=k),C.length&&(f[_]=d[_].oldTags)}),e&&e(),l(t,v,f)},Tr=null,Xf=t=>{Tr&&cancelAnimationFrame(Tr),t.defer?Tr=requestAnimationFrame(()=>{rl(t,()=>{Tr=null})}):(rl(t),Tr=null)},Zf=Xf,sl=class extends E.Component{constructor(){super(...arguments);At(this,"rendered",!1)}shouldComponentUpdate(e){return!Nf(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const s=Hf(e.get().map(i=>{const a={...i.props};return delete a.context,a}));gu.canUseDOM?Zf(s):ca&&(r=ca(s)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Ji,sb=(Ji=class extends E.Component{shouldComponentUpdate(t){return!Af(nl(this.props,"helmetData"),nl(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return el(tl.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${tl.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),el(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return I.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:s,...i}=r.props,a=Object.keys(i).reduce((l,c)=>(l[Df[c]||c]=i[c],l),{});let{type:o}=r;switch(typeof o=="symbol"?o=o.toString():this.warnOnInvalidChildren(r,s),o){case"Symbol(react.fragment)":e=this.mapChildrenToProps(s,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,a,s);break;default:e=this.mapObjectTypeChildren(r,e,a,s);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof ua)){const s=r;r=new ua(s.context,!0),delete n.helmetData}return r?I.createElement(sl,{...n,context:r.value}):I.createElement(fu.Consumer,null,s=>I.createElement(sl,{...n,context:s}))}},At(Ji,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Ji);const eg=Nc("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",hero:"bg-primary text-primary-foreground font-semibold hover:shadow-lg glow-effect hover:scale-105",heroOutline:"border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground font-semibold",glass:"backdrop-blur-xl bg-background/80 border border-border/50 text-foreground hover:bg-background/90"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-12 rounded-lg px-8 text-base",xl:"h-14 rounded-xl px-10 text-lg",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),un=E.forwardRef(({className:t,variant:e,size:n,asChild:r=!1,...s},i)=>{const a=r?sh:"button";return g.jsx(a,{className:De(eg({variant:e,size:n,className:t})),ref:i,...s})});un.displayName="Button";var w=typeof window<"u"?window:void 0,Ie=typeof globalThis<"u"?globalThis:w;typeof self>"u"&&(Ie.self=Ie),typeof File>"u"&&(Ie.File=function(){});var st=Ie==null?void 0:Ie.navigator,H=Ie==null?void 0:Ie.document,je=Ie==null?void 0:Ie.location,ha=Ie==null?void 0:Ie.fetch,pa=Ie!=null&&Ie.XMLHttpRequest&&"withCredentials"in new Ie.XMLHttpRequest?Ie.XMLHttpRequest:void 0,il=Ie==null?void 0:Ie.AbortController,tg=Ie==null?void 0:Ie.CompressionStream,Qe=st==null?void 0:st.userAgent,K=w??{},al="1.383.2",Ne={DEBUG:!1,LIB_VERSION:al,LIB_NAME:"web",JS_SDK_VERSION:al};function ol(t,e,n,r,s,i,a){try{var o=t[i](a),l=o.value}catch(c){return void n(c)}o.done?e(l):Promise.resolve(l).then(r,s)}function rt(t){return function(){var e=this,n=arguments;return new Promise(function(r,s){var i=t.apply(e,n);function a(l){ol(i,r,s,a,o,"next",l)}function o(l){ol(i,r,s,a,o,"throw",l)}a(void 0)})}}function M(){return M=Object.assign?Object.assign.bind():function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},M.apply(null,arguments)}function mu(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}var Rr,ll=function(t){return t.GZipJS="gzip-js",t.Base64="base64",t}({}),ng=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"],vu="NativeGzipValidationError",fa=t=>t.length>=2&&t[0]===31&&t[1]===139,cl=t=>!(!t||typeof t!="object")&&("name"in t?String(t.name):"")==="NotReadableError",ys=t=>{var e=new Error("Native gzip produced invalid output: "+t);throw e.name=vu,e},rg=function(){var t=rt(function*(e,n){18>e.size&&ys("too-short");var r=new Uint8Array(yield e.slice(0,10).arrayBuffer());fa(r)&&r[2]===8||ys("invalid-header");var s=new DataView(yield e.slice(e.size-8).arrayBuffer());s.getUint32(0,!0)!==(a=>{for(var o=(()=>{if(Rr)return Rr;Rr=[];for(var u=0;256>u;u++){for(var h=u,p=0;8>p;p++)h=1&h?3988292384^h>>>1:h>>>1;Rr[u]=h>>>0}return Rr})(),l=4294967295,c=0;a.length>c;c++)l=o[255&(l^a[c])]^l>>>8;return(4294967295^l)>>>0})(n)&&ys("invalid-crc");var i=n.length>>>0;s.getUint32(4,!0)!==i&&ys("invalid-size")});return function(e,n){return t.apply(this,arguments)}}();function ga(){return ga=rt(function*(t,e,n){e===void 0&&(e=!0);try{var r=new TextEncoder().encode(t),s=new CompressionStream("gzip"),i=s.writable.getWriter(),a=i.write(r).then(()=>i.close()).catch(function(){var c=rt(function*(u){try{yield i.abort(u)}catch{}throw u});return function(u){return c.apply(this,arguments)}}()),o=new Response(s.readable).blob(),[l]=yield Promise.all([o,a]);return yield rg(l,r),l}catch(c){if(n!=null&&n.rethrow)throw c;return e&&console.error("Failed to gzip compress data",c),null}}),ga.apply(this,arguments)}var sg=["amazonbot","amazonproductbot","app.hypefactors.com","applebot","archive.org_bot","awariobot","backlinksextendedbot","baiduspider","bingbot","bingpreview","chrome-lighthouse","dataforseobot","deepscan","duckduckbot","facebookexternal","facebookcatalog","http://yandex.com/bots","hubspot","ia_archiver","leikibot","linkedinbot","meta-externalagent","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","sebot-wa","sitebulb","slackbot","slurp","trendictionbot","turnitin","twitterbot","vercel-screenshot","vercelbot","yahoo! slurp","yandexbot","zoombot","bot.htm","bot.php","(bot;","bot/","crawler","ahrefsbot","ahrefssiteaudit","semrushbot","siteauditbot","splitsignalbot","gptbot","oai-searchbot","chatgpt-user","perplexitybot","better uptime bot","sentryuptimebot","uptimerobot","headlesschrome","cypress","google-hoteladsverifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleother","google-cloudvertexbot","googleweblight","mediapartners-google","storebot-google","google-inspectiontool","bytespider"],ul=function(t,e){if(e===void 0&&(e=[]),!t)return!1;var n=t.toLowerCase();return sg.concat(e).some(r=>{var s=r.toLowerCase();return n.indexOf(s)!==-1})};function ee(t,e){return t.indexOf(e)!==-1}var ai=function(t){return t.trim()},ma=function(t){return t.replace(/^\$/,"")},bu=Object.prototype,yu=bu.hasOwnProperty,oi=bu.toString,ae=Array.isArray||function(t){return oi.call(t)==="[object Array]"},Ft=t=>typeof t=="function",Pe=t=>t===Object(t)&&!ae(t),ln=t=>{if(Pe(t)){for(var e in t)if(yu.call(t,e))return!1;return!0}return!1},F=t=>t===void 0,Ee=t=>oi.call(t)=="[object String]",va=t=>Ee(t)&&t.trim().length===0,at=t=>t===null,oe=t=>F(t)||at(t),Ke=t=>oi.call(t)=="[object Number]"&&t==t,Lt=t=>Ke(t)&&t>0,Ot=t=>oi.call(t)==="[object Boolean]",ig=t=>t instanceof FormData,ag=t=>ee(ng,t);function _u(t){return t===null||typeof t!="object"}function Us(t,e){return{}.toString.call(t)==="[object "+e+"]"}function uo(t){return typeof Event<"u"&&function(e,n){try{return e instanceof n}catch{return!1}}(t,Event)}var og=[!0,"true",1,"1","yes"],xi=t=>ee(og,t),lg=[!1,"false",0,"0","no"];function $t(t,e,n,r,s){return e>n&&(r.warn("min cannot be greater than max."),e=n),Ke(t)?t>n?(r.warn(" cannot be  greater than max: "+n+". Using max value instead."),n):e>t?(r.warn(" cannot be less than min: "+e+". Using min value instead."),e):t:(r.warn(" must be a number. using max or fallback. max: "+n+", fallback: "+s),$t(s||n,e,n,r))}class cg{constructor(e){this.$t={},this.zt=e.zt,this.Zt=$t(e.bucketSize,0,100,e.Gt),this.Qt=$t(e.refillRate,0,this.Zt,e.Gt),this.Jt=$t(e.refillInterval,0,864e5,e.Gt)}Kt(e,n){var r=Math.floor((n-e.lastAccess)/this.Jt);r>0&&(e.tokens=Math.min(e.tokens+r*this.Qt,this.Zt),e.lastAccess=e.lastAccess+r*this.Jt)}consumeRateLimit(e){var n,r=Date.now(),s=String(e),i=this.$t[s];return i?this.Kt(i,r):this.$t[s]=i={tokens:this.Zt,lastAccess:r},i.tokens===0||(i.tokens--,i.tokens===0&&((n=this.zt)==null||n.call(this,e)),i.tokens===0)}stop(){this.$t={}}}var _s,dl,ki,ot="Mobile",qs="iOS",Ht="Android",gr="Tablet",wu=Ht+" "+gr,xu="iPad",ku="Apple",Eu=ku+" Watch",Jr="Safari",mr="BlackBerry",Su="Samsung",Tu=Su+"Browser",Ru=Su+" Internet",Mn="Chrome",ug=Mn+" OS",Pu=Mn+" "+qs,ho="Internet Explorer",$u=ho+" "+ot,po="Opera",dg=po+" Mini",fo="Edge",Ou="Microsoft "+fo,tr="Firefox",Au=tr+" "+qs,es="Nintendo",ts="PlayStation",nr="Xbox",Cu=Ht+" "+ot,Iu=ot+" "+Jr,Fr="Windows",ba=Fr+" Phone",hl="Nokia",ya="Ouya",Mu="Generic",hg=Mu+" "+ot.toLowerCase(),Nu=Mu+" "+gr.toLowerCase(),_a="Konqueror",Du="Oculus Browser",Hs="Vivaldi",Lu="Yandex",Bs="Whale",wa="DuckDuckGo",ju="Pale Moon",zs="Waterfox",Wr="Brave",Re="(\\d+(\\.\\d+)?)",Ei=new RegExp("Version/"+Re),pg=new RegExp(nr,"i"),fg=new RegExp(ts+" \\w+","i"),gg=new RegExp(es+" \\w+","i"),go=new RegExp(mr+"|PlayBook|BB10","i"),mg={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},Fu=function(t,e,n){e=e||"";var r=function(s){return s!=null&&s.brave?Wr:null}(n);return r||(ee(t," OPR/")&&ee(t,"Mini")?dg:ee(t," OPR/")?po:go.test(t)?mr:ee(t,"IE"+ot)||ee(t,"WPDesktop")?$u:ee(t,"OculusBrowser")?Du:ee(t,Tu)?Ru:ee(t,fo)||ee(t,"Edg/")?Ou:ee(t,Hs+"/")?Hs:ee(t,"YaBrowser/")?Lu:ee(t,Bs+"/")?Bs:ee(t,wa+"/")||ee(t,"Ddg/")?wa:ee(t,"FBIOS")?"Facebook "+ot:ee(t,"UCWEB")||ee(t,"UCBrowser")?"UC Browser":ee(t,"CriOS")?Pu:ee(t,"CrMo")||ee(t,Mn)?Mn:ee(t,Ht)&&ee(t,Jr)?Cu:ee(t,"FxiOS")?Au:ee(t.toLowerCase(),_a.toLowerCase())?_a:ee(t,Wr+"/")?Wr:((s,i)=>i&&ee(i,ku)||function(a){return ee(a,Jr)&&!ee(a,Mn)&&!ee(a,Ht)}(s))(t,e)?ee(t,ot)?Iu:Jr:ee(t,"PaleMoon/")?ju:ee(t,zs+"/")?zs:ee(t,tr)?tr:ee(t,"MSIE")||ee(t,"Trident/")?ho:ee(t,"Gecko")?tr:"")},vg={[$u]:[new RegExp("rv:"+Re)],[Ou]:[new RegExp(fo+"?\\/"+Re)],[Mn]:[new RegExp("("+Mn+"|CrMo)\\/"+Re)],[Pu]:[new RegExp("CriOS\\/"+Re)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+Re)],[Jr]:[Ei],[Iu]:[Ei],[po]:[new RegExp("(Opera|OPR)\\/"+Re)],[tr]:[new RegExp(tr+"\\/"+Re)],[Au]:[new RegExp("FxiOS\\/"+Re)],[_a]:[new RegExp("Konqueror[:/]?"+Re,"i")],[mr]:[new RegExp(mr+" "+Re),Ei],[Cu]:[new RegExp("android\\s"+Re,"i")],[Ru]:[new RegExp(Tu+"\\/"+Re)],[Du]:[new RegExp("OculusBrowser\\/"+Re)],[Hs]:[new RegExp(Hs+"\\/"+Re)],[Lu]:[new RegExp("YaBrowser\\/"+Re)],[Bs]:[new RegExp(Bs+"\\/"+Re)],[Wr]:[new RegExp(Wr+"\\/"+Re)],[wa]:[new RegExp("(DuckDuckGo|Ddg)\\/"+Re)],[ju]:[new RegExp("PaleMoon\\/"+Re)],[zs]:[new RegExp(zs+"\\/"+Re)],[ho]:[new RegExp("(rv:|MSIE )"+Re)],Mozilla:[new RegExp("rv:"+Re)]},bg=function(t,e,n){var r=Fu(t,e,n),s=vg[r];if(F(s))return null;for(var i=0;s.length>i;i++){var a=t.match(s[i]);if(a)return parseFloat(a[a.length-2])}return null},pl=[[new RegExp(nr+"; "+nr+" (.*?)[);]","i"),t=>[nr,t&&t[1]||""]],[new RegExp(es,"i"),[es,""]],[new RegExp(ts,"i"),[ts,""]],[go,[mr,""]],[new RegExp(Fr,"i"),(t,e)=>{if(/Phone/.test(e)||/WPDesktop/.test(e))return[ba,""];if(new RegExp(ot).test(e)&&!/IEMobile\b/.test(e))return[Fr+" "+ot,""];var n=/Windows NT ([0-9.]+)/i.exec(e);if(n&&n[1]){var r=mg[n[1]]||"";return/arm/i.test(e)&&(r="RT"),[Fr,r]}return[Fr,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,t=>t&&t[3]?[qs,[t[3],t[4],t[5]||"0"].join(".")]:[qs,""]],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,t=>{var e="";return t&&t.length>=3&&(e=F(t[2])?t[3]:t[2]),["watchOS",e]}],[new RegExp("("+Ht+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+Ht+")","i"),t=>t&&t[2]?[Ht,[t[2],t[3],t[4]||"0"].join(".")]:[Ht,""]],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,t=>{var e=["Mac OS X",""];return t&&t[1]&&(e[1]=[t[1],t[2],t[3]||"0"].join(".")),e}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[ug,""]],[/Linux|debian/i,["Linux",""]]],fl=function(t){return gg.test(t)?es:fg.test(t)?ts:pg.test(t)?nr:new RegExp(ya,"i").test(t)?ya:new RegExp("("+ba+"|WPDesktop)","i").test(t)?ba:/iPad/.test(t)?xu:/iPod/.test(t)?"iPod Touch":/iPhone/.test(t)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(t)?Eu:go.test(t)?mr:/(kobo)\s(ereader|touch)/i.test(t)?"Kobo":new RegExp(hl,"i").test(t)?hl:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(t)||/(kf[a-z]+)( bui|\)).+silk\//i.test(t)?"Kindle Fire":/(Android|ZTE)/i.test(t)?new RegExp(ot).test(t)&&!/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(t)||/pixel[\daxl ]{1,6}/i.test(t)&&!/pixel c/i.test(t)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(t)||/lmy47v/i.test(t)&&!/QTAQZ3/i.test(t)?Ht:wu:new RegExp("(pda|"+ot+")","i").test(t)?hg:new RegExp(gr,"i").test(t)&&!new RegExp(gr+" pc","i").test(t)?Nu:""},yg=t=>t instanceof Error,Uu={trace:{text:"TRACE",number:1},debug:{text:"DEBUG",number:5},info:{text:"INFO",number:9},warn:{text:"WARN",number:13},error:{text:"ERROR",number:17},fatal:{text:"FATAL",number:21}},_g=Uu.info;function qu(t){if(Ot(t))return{boolValue:t};if(typeof t=="number")return Number.isFinite(t)?Number.isInteger(t)?{intValue:t}:{doubleValue:t}:{stringValue:String(t)};if(typeof t=="string")return{stringValue:t};if(ae(t))return{arrayValue:{values:t.map(e=>qu(e))}};try{return{stringValue:JSON.stringify(t)}}catch{return{stringValue:String(t)}}}function gl(t){var e=[];for(var n in t){var r=t[n];at(r)||F(r)||e.push({key:n,value:qu(r)})}return e}function wg(t){var e=globalThis._posthogChunkIds;if(e){var n=Object.keys(e);return ki&&n.length===dl||(dl=n.length,ki=n.reduce((r,s)=>{_s||(_s={});var i=_s[s];if(i)r[i[0]]=i[1];else for(var a=t(s),o=a.length-1;o>=0;o--){var l=a[o],c=l==null?void 0:l.filename,u=e[s];if(c&&u){r[c]=u,_s[s]=[c,u];break}}return r},{})),ki}}class xg{constructor(e,n,r){r===void 0&&(r=[]),this.coercers=e,this.stackParser=n,this.modifiers=r}buildFromUnknown(e,n){n===void 0&&(n={});var r=n&&n.mechanism||{handled:!0,type:"generic"},s=this.buildCoercingContext(r,n,0).apply(e),i=this.buildParsingContext(n),a=this.parseStacktrace(s,i);return{$exception_list:this.convertToExceptionList(a,r),$exception_level:"error"}}modifyFrames(e){var n=this;return rt(function*(){for(var r of e)r.stacktrace&&r.stacktrace.frames&&ae(r.stacktrace.frames)&&(r.stacktrace.frames=yield n.applyModifiers(r.stacktrace.frames));return e})()}coerceFallback(e){var n;return{type:"Error",value:"Unknown error",stack:(n=e.syntheticException)==null?void 0:n.stack,synthetic:!0}}parseStacktrace(e,n){var r,s;return e.cause!=null&&(r=this.parseStacktrace(e.cause,n)),e.stack!=""&&e.stack!=null&&(s=this.applyChunkIds(this.stackParser(e.stack,e.synthetic?n.skipFirstLines:0),n.chunkIdMap)),M({},e,{cause:r,stack:s})}applyChunkIds(e,n){return e.map(r=>(r.filename&&n&&(r.chunk_id=n[r.filename]),r))}applyCoercers(e,n){for(var r of this.coercers)if(r.match(e))return r.coerce(e,n);return this.coerceFallback(n)}applyModifiers(e){var n=this;return rt(function*(){var r=e;for(var s of n.modifiers)r=yield s(r);return r})()}convertToExceptionList(e,n){var r,s,i,a={type:e.type,value:e.value,mechanism:{type:(r=n.type)!==null&&r!==void 0?r:"generic",handled:(s=n.handled)===null||s===void 0||s,synthetic:(i=e.synthetic)!==null&&i!==void 0&&i}};e.stack&&(a.stacktrace={type:"raw",frames:e.stack});var o=[a];return e.cause!=null&&o.push(...this.convertToExceptionList(e.cause,M({},n,{handled:!0}))),o}buildParsingContext(e){var n;return{chunkIdMap:wg(this.stackParser),skipFirstLines:(n=e.skipFirstLines)!==null&&n!==void 0?n:1}}buildCoercingContext(e,n,r){r===void 0&&(r=0);var s=(i,a)=>{if(4>=a){var o=this.buildCoercingContext(e,n,a);return this.applyCoercers(i,o)}};return M({},n,{syntheticException:r==0?n.syntheticException:void 0,mechanism:e,apply:i=>s(i,r),next:i=>s(i,r+1)})}}var vr="?";function xa(t,e,n,r,s){var i={platform:t,filename:e,function:n==="<anonymous>"?vr:n,in_app:!0};return F(r)||(i.lineno=r),F(s)||(i.colno=s),i}var Hu=(t,e)=>{var n=t.indexOf("safari-extension")!==-1,r=t.indexOf("safari-web-extension")!==-1;return n||r?[t.indexOf("@")!==-1?t.split("@")[0]:vr,n?"safari-extension:"+e:"safari-web-extension:"+e]:[t,e]},kg=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,Eg=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Sg=/\((\S*)(?::(\d+))(?::(\d+))\)/,Tg=(t,e)=>{var n=kg.exec(t);if(n){var[,r,s,i]=n;return xa(e,r,vr,+s,+i)}var a=Eg.exec(t);if(a){if(a[2]&&a[2].indexOf("eval")===0){var o=Sg.exec(a[2]);o&&(a[2]=o[1],a[3]=o[2],a[4]=o[3])}var[l,c]=Hu(a[1]||vr,a[2]);return xa(e,c,l,a[3]?+a[3]:void 0,a[4]?+a[4]:void 0)}},Rg=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,Pg=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,$g=(t,e)=>{var n=Rg.exec(t);if(n){if(n[3]&&n[3].indexOf(" > eval")>-1){var r=Pg.exec(n[3]);r&&(n[1]=n[1]||"eval",n[3]=r[1],n[4]=r[2],n[5]="")}var s=n[3],i=n[1]||vr;return[i,s]=Hu(i,s),xa(e,s,i,n[4]?+n[4]:void 0,n[5]?+n[5]:void 0)}},ml=/\(error: (.*)\)/;class Og{match(e){return this.isDOMException(e)||this.isDOMError(e)}coerce(e,n){var r=Ee(e.stack);return{type:this.getType(e),value:this.getValue(e),stack:r?e.stack:void 0,cause:e.cause?n.next(e.cause):void 0,synthetic:!1}}getType(e){return this.isDOMError(e)?"DOMError":"DOMException"}getValue(e){var n=e.name||(this.isDOMError(e)?"DOMError":"DOMException");return e.message?n+": "+e.message:n}isDOMException(e){return Us(e,"DOMException")}isDOMError(e){return Us(e,"DOMError")}}class Ag{match(e){return(n=>n instanceof Error)(e)}coerce(e,n){return{type:this.getType(e),value:this.getMessage(e,n),stack:this.getStack(e),cause:e.cause?n.next(e.cause):void 0,synthetic:!1}}getType(e){return e.name||e.constructor.name}getMessage(e,n){var r=e.message;return String(r.error&&typeof r.error.message=="string"?r.error.message:r)}getStack(e){return e.stacktrace||e.stack||void 0}}class Cg{constructor(){}match(e){return Us(e,"ErrorEvent")&&e.error!=null}coerce(e,n){var r;return n.apply(e.error)||{type:"ErrorEvent",value:e.message,stack:(r=n.syntheticException)==null?void 0:r.stack,synthetic:!0}}}var Ig=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;class Mg{match(e){return typeof e=="string"}coerce(e,n){var r,[s,i]=this.getInfos(e);return{type:s??"Error",value:i??e,stack:(r=n.syntheticException)==null?void 0:r.stack,synthetic:!0}}getInfos(e){var n="Error",r=e,s=e.match(Ig);return s&&(n=s[1],r=s[2]),[n,r]}}var Ng=["fatal","error","warning","log","info","debug"];function Bu(t,e){e===void 0&&(e=40);var n=Object.keys(t);if(n.sort(),!n.length)return"[object has no keys]";for(var r=n.length;r>0;r--){var s=n.slice(0,r).join(", ");if(e>=s.length)return r===n.length?s:s.length>e?s.slice(0,e)+"...":s}return""}class Dg{match(e){return typeof e=="object"&&e!==null}coerce(e,n){var r,s=this.getErrorPropertyFromObject(e);return s?n.apply(s):{type:this.getType(e),value:this.getValue(e),stack:(r=n.syntheticException)==null?void 0:r.stack,level:this.isSeverityLevel(e.level)?e.level:"error",synthetic:!0}}getType(e){return uo(e)?e.constructor.name:"Error"}getValue(e){if("name"in e&&typeof e.name=="string"){var n="'"+e.name+"' captured as exception";return"message"in e&&typeof e.message=="string"&&(n+=" with message: '"+e.message+"'"),n}if("message"in e&&typeof e.message=="string")return e.message;var r=this.getObjectClassName(e);return(r&&r!=="Object"?"'"+r+"'":"Object")+" captured as exception with keys: "+Bu(e)}isSeverityLevel(e){return Ee(e)&&!va(e)&&Ng.indexOf(e)>=0}getErrorPropertyFromObject(e){for(var n in e)if({}.hasOwnProperty.call(e,n)){var r=e[n];if(yg(r))return r}}getObjectClassName(e){try{var n=Object.getPrototypeOf(e);return n?n.constructor.name:void 0}catch{return}}}class Lg{match(e){return uo(e)}coerce(e,n){var r,s=e.constructor.name;return{type:s,value:s+" captured as exception with keys: "+Bu(e),stack:(r=n.syntheticException)==null?void 0:r.stack,synthetic:!0}}}class jg{match(e){return _u(e)}coerce(e,n){var r;return{type:"Error",value:"Primitive value captured as exception: "+String(e),stack:(r=n.syntheticException)==null?void 0:r.stack,synthetic:!0}}}class Fg{match(e){return Us(e,"PromiseRejectionEvent")||this.isCustomEventWrappingRejection(e)}isCustomEventWrappingRejection(e){if(!uo(e))return!1;try{var n=e.detail;return n!=null&&typeof n=="object"&&"reason"in n}catch{return!1}}coerce(e,n){var r,s=this.getUnhandledRejectionReason(e);return _u(s)?{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+String(s),stack:(r=n.syntheticException)==null?void 0:r.stack,synthetic:!0}:n.apply(s)}getUnhandledRejectionReason(e){try{if("reason"in e)return e.reason;if("detail"in e&&e.detail!=null&&typeof e.detail=="object"&&"reason"in e.detail)return e.detail.reason}catch{}return e}}var Gs="$message",Js="$timestamp",Ug=new Set([Gs,Js]),Si={enabled:!0,max_bytes:32768};function Ws(t){var e;return t?{enabled:(e=t.enabled)!==null&&e!==void 0?e:Si.enabled,max_bytes:Hg(t.max_bytes,Si.max_bytes)}:M({},Si)}class qg{constructor(e){this.Yt=[],this.Xt=0,this.qt=Ws(e)}setConfig(e){this.qt=Ws(e),this.er()}add(e){var n=function(s){var i=function(u){var h=new WeakSet;try{return JSON.stringify(u,(p,d)=>{if(typeof d=="bigint")return d.toString();if(typeof d!="function"&&typeof d!="symbol"){if(d instanceof Date)return d.toISOString();if(d instanceof Error)return{name:d.name,message:d.message,stack:d.stack};if(d&&typeof d=="object"){if(h.has(d))return"[Circular]";h.add(d)}return d}})}catch{return}}(s);if(i)try{var a=JSON.parse(i);if(!Pe(a))return;var o=a,l=o[Gs],c=o[Js];return!Ee(l)||l.trim().length===0||!Ee(c)&&!Ke(c)?void 0:{step:o,json:i}}catch{return}}(e);if(n){var r=function(s){if(typeof TextEncoder<"u")return new TextEncoder().encode(s).length;for(var i=encodeURIComponent(s),a=0,o=0;i.length>o;o++)i[o]==="%"?(a+=1,o+=2):a+=1;return a}(n.json);r>this.qt.max_bytes||(this.Yt.push({step:n.step,bytes:r}),this.Xt+=r,this.er())}}getAttachable(){return this.Yt.map(e=>e.step)}clear(){this.Yt=[],this.Xt=0}size(){return this.Yt.length}er(){for(;this.Xt>this.qt.max_bytes&&this.Yt.length>0;){var e=this.Yt.shift();e&&(this.Xt-=e.bytes)}}}function Hg(t,e){if(!Ke(t)||t===1/0||t===-1/0)return e;var n=Math.floor(t);return 0>n?e:n}var zu=function(t,e){var{debugEnabled:n}=e===void 0?{}:e,r={k(s){if(w&&(Ne.DEBUG||K.POSTHOG_DEBUG||n)&&!F(w.console)&&w.console){for(var i=("__rrweb_original__"in w.console[s])?w.console[s].__rrweb_original__:w.console[s],a=arguments.length,o=new Array(a>1?a-1:0),l=1;a>l;l++)o[l-1]=arguments[l];i(t,...o)}},debug(){for(var s=arguments.length,i=new Array(s),a=0;s>a;a++)i[a]=arguments[a];r.k("debug",...i)},info(){for(var s=arguments.length,i=new Array(s),a=0;s>a;a++)i[a]=arguments[a];r.k("log",...i)},warn(){for(var s=arguments.length,i=new Array(s),a=0;s>a;a++)i[a]=arguments[a];r.k("warn",...i)},error(){for(var s=arguments.length,i=new Array(s),a=0;s>a;a++)i[a]=arguments[a];r.k("error",...i)},critical(){for(var s=arguments.length,i=new Array(s),a=0;s>a;a++)i[a]=arguments[a];console.error(t,...i)},uninitializedWarning(s){r.error("You must initialize PostHog before calling "+s)},createLogger:(s,i)=>zu(t+" "+s,i)};return r},U=zu("[PostHog.js]"),Se=U.createLogger,Bg=Se("[ExternalScriptsLoader]"),Ti=(t,e,n)=>{if(t.config.disable_external_dependency_loading)return Bg.warn(e+" was requested but loading of external scripts is disabled."),n("Loading of external scripts is disabled");var r=H==null?void 0:H.querySelectorAll("script");if(r){for(var s,i=function(){if(r[a].src===e){var l=r[a];return l.__posthog_loading_callback_fired?{v:n()}:(l.addEventListener("load",c=>{l.__posthog_loading_callback_fired=!0,n(void 0,c)}),l.onerror=c=>n(c),{v:void 0})}},a=0;r.length>a;a++)if(s=i())return s.v}var o=()=>{if(!H)return n("document not found");var l=H.createElement("script");if(l.type="text/javascript",l.crossOrigin="anonymous",l.src=e,l.onload=h=>{l.__posthog_loading_callback_fired=!0,n(void 0,h)},l.onerror=h=>n(h),t.config.prepare_external_dependency_script&&(l=t.config.prepare_external_dependency_script(l)),!l)return n("prepare_external_dependency_script returned null");if(t.config.external_scripts_inject_target==="head")H.head.appendChild(l);else{var c,u=H.querySelectorAll("body > script");u.length>0?(c=u[0].parentNode)==null||c.insertBefore(l,u[0]):H.body.appendChild(l)}};H!=null&&H.body?o():H==null||H.addEventListener("DOMContentLoaded",o)};K.__PosthogExtensions__=K.__PosthogExtensions__||{},K.__PosthogExtensions__.loadExternalDependency=(t,e,n)=>{if(e!=="remote-config"){var r;if(t.config.__preview_external_dependency_versioned_paths)r=t.requestRouter.endpointFor("assets","/static/"+t.version+"/"+e+".js");else{var s="/static/"+e+".js?v="+t.version;if(e==="toolbar"){var i=3e5;s=s+"&t="+Math.floor(Date.now()/i)*i}r=t.requestRouter.endpointFor("assets",s)}Ti(t,r,n)}else{var a=t.requestRouter.endpointFor("assets","/array/"+t.config.token+"/config.js");Ti(t,a,n)}},K.__PosthogExtensions__.loadSiteApp=(t,e,n)=>{var r=t.requestRouter.endpointFor("api",e);Ti(t,r,n)};var Gu="$people_distinct_id",Vs="$device_id",Ur="__alias",qr="__timers",ka="$autocapture_disabled_server_side",Ea="$heatmaps_enabled_server_side",Sa="$exception_capture_enabled_server_side",Ta="$error_tracking_suppression_rules",Ra="$error_tracking_capture_extension_exceptions",Pa="$web_vitals_enabled_server_side",mo="$dead_clicks_enabled_server_side",$a="$product_tours_enabled_server_side",Oa="$web_vitals_allowed_metrics",kn="$session_recording_remote_config",Ju="$replay_override_sampling",Wu="$replay_override_linked_flag",Vu="$replay_override_url_trigger",Ku="$replay_override_event_trigger",Kn="$sesid",vo="$session_is_sampled",Yn="$enabled_feature_flags",Ms="$active_feature_flags",Hr="$early_access_features",Aa="$feature_flag_details",Ca="$feature_flag_payloads",Ia="$feature_flag_request_id",jt="$override_feature_flags",Jn="$override_feature_flag_payloads",Br="$stored_person_properties",wn="$stored_group_properties",Ma="$surveys",bo="$surveys_loaded_at",Na="$surveys_activated",Ns="ph_product_tours",Vr="$flag_call_reported",Da="$flag_call_reported_session_id",La="$feature_flag_errors",ns="$feature_flag_evaluated_at",yt="$user_state",ja="$client_session_props",Fa="$capture_rate_limit",Ua="$initial_campaign_params",qa="$initial_referrer_info",Ks="$initial_person_info",Ys="$epp",Yu="__POSTHOG_TOOLBAR__",ws="$posthog_cookieless",Qu="$sdk_debug_extensions_init_method",Xu="$sdk_debug_extensions_init_time_ms",Zu="$sdk_debug_recording_script_not_loaded",yo="PostHog loadExternalDependency extension not found.",xn="on_reject",qt="always",Un="anonymous",qn="identified",Ha="identified_only",Qs="visibilitychange",Xs="beforeunload",Wn="$pageview",Ri="$pageleave",Pi="$identify",vl="$groupidentify";function xs(t,e){ae(t)&&t.forEach(e)}function ye(t,e){if(!oe(t))if(ae(t))t.forEach(e);else if(ig(t))t.forEach((r,s)=>e(r,s));else for(var n in t)yu.call(t,n)&&e(t[n],n)}var we=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;e>r;r++)n[r-1]=arguments[r];for(var s of n)for(var i in s)s[i]!==void 0&&(t[i]=s[i]);return t};function Ds(t){for(var e=Object.keys(t),n=e.length,r=new Array(n);n--;)r[n]=[e[n],t[e[n]]];return r}var bl=function(t){try{return t()}catch{return}},zg=function(t){return function(){try{for(var e=arguments.length,n=new Array(e),r=0;e>r;r++)n[r]=arguments[r];return t.apply(this,n)}catch(s){U.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),U.critical(s)}}},_o=function(t){var e={};return ye(t,function(n,r){(Ee(n)&&n.length>0||Ke(n))&&(e[r]=n)}),e},Gg=["herokuapp.com","vercel.app","netlify.app"];function Jg(t){var e=t==null?void 0:t.hostname;if(!Ee(e))return!1;var n=e.split(".").slice(-2).join(".");for(var r of Gg)if(n===r)return!1;return!0}function Ae(t,e,n,r){var{capture:s=!1,passive:i=!0}=r??{};t==null||t.addEventListener(e,n,{capture:s,passive:i})}function ed(t){return t.name==="ph_toolbar_internal"}Math.trunc||(Math.trunc=function(t){return 0>t?Math.ceil(t):Math.floor(t)}),Number.isInteger||(Number.isInteger=function(t){return Ke(t)&&isFinite(t)&&Math.floor(t)===t});class Zs{constructor(e){if(this.bytes=e,e.length!==16)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,n,r,s){if(!Number.isInteger(e)||!Number.isInteger(n)||!Number.isInteger(r)||!Number.isInteger(s)||0>e||0>n||0>r||0>s||e>0xffffffffffff||n>4095||r>1073741823||s>4294967295)throw new RangeError("invalid field value");var i=new Uint8Array(16);return i[0]=e/Math.pow(2,40),i[1]=e/Math.pow(2,32),i[2]=e/Math.pow(2,24),i[3]=e/Math.pow(2,16),i[4]=e/Math.pow(2,8),i[5]=e,i[6]=112|n>>>8,i[7]=n,i[8]=128|r>>>24,i[9]=r>>>16,i[10]=r>>>8,i[11]=r,i[12]=s>>>24,i[13]=s>>>16,i[14]=s>>>8,i[15]=s,new Zs(i)}toString(){for(var e="",n=0;this.bytes.length>n;n++)e=e+(this.bytes[n]>>>4).toString(16)+(15&this.bytes[n]).toString(16),n!==3&&n!==5&&n!==7&&n!==9||(e+="-");if(e.length!==36)throw new Error("Invalid UUIDv7 was generated");return e}clone(){return new Zs(this.bytes.slice(0))}equals(e){return this.compareTo(e)===0}compareTo(e){for(var n=0;16>n;n++){var r=this.bytes[n]-e.bytes[n];if(r!==0)return Math.sign(r)}return 0}}class Wg{constructor(){this.S=0,this.C=0,this.I=new Vg}generate(){var e=this.generateOrAbort();if(F(e)){this.S=0;var n=this.generateOrAbort();if(F(n))throw new Error("Could not generate UUID after timestamp reset");return n}return e}generateOrAbort(){var e=Date.now();if(e>this.S)this.S=e,this.T();else{if(this.S>=e+1e4)return;this.C++,this.C>4398046511103&&(this.S++,this.T())}return Zs.fromFieldsV7(this.S,Math.trunc(this.C/Math.pow(2,30)),this.C&Math.pow(2,30)-1,this.I.nextUint32())}T(){this.C=1024*this.I.nextUint32()+(1023&this.I.nextUint32())}}var yl,td=t=>{if(typeof UUIDV7_DENY_WEAK_RNG<"u"&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available");for(var e=0;t.length>e;e++)t[e]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random());return t};w&&!F(w.crypto)&&crypto.getRandomValues&&(td=t=>crypto.getRandomValues(t));class Vg{constructor(){this.M=new Uint32Array(8),this.R=1/0}nextUint32(){return this.M.length>this.R||(td(this.M),this.R=0),this.M[this.R++]}}var Xt=()=>Kg().toString(),Kg=()=>(yl||(yl=new Wg)).generate(),Pr="",Yg=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i,Pt={O:()=>!!H,D(t){U.error("cookieStore error: "+t)},A(t){if(H){try{for(var e=t+"=",n=H.cookie.split(";").filter(i=>i.length),r=0;n.length>r;r++){for(var s=n[r];s.charAt(0)==" ";)s=s.substring(1,s.length);if(s.indexOf(e)===0)return decodeURIComponent(s.substring(e.length,s.length))}}catch{}return null}},F(t){var e;try{e=JSON.parse(Pt.A(t))||{}}catch{}return e},N(t,e,n,r,s){if(!H)return!1;try{var i="",a="",o=function(u,h){if(h){var p=function(v,f){if(f===void 0&&(f=H),Pr)return Pr;if(!f||["localhost","127.0.0.1"].includes(v))return"";for(var _=v.split("."),k=Math.min(_.length,8),C="dmn_chk_"+Xt();!Pr&&k--;){var P=_.slice(k).join("."),L=C+"=1;domain=."+P+";path=/";f.cookie=L+";max-age=3",f.cookie.includes(C)&&(f.cookie=L+";max-age=0",Pr=P)}return Pr}(u);if(!p){var d=(v=>{var f=v.match(Yg);return f?f[0]:""})(u);d!==p&&U.info("Warning: cookie subdomain discovery mismatch",d,p),p=d}return p?"; domain=."+p:""}return""}(H.location.hostname,r);if(n){var l=new Date;l.setTime(l.getTime()+864e5*n),i="; expires="+l.toUTCString()}s&&(a="; secure");var c=t+"="+encodeURIComponent(JSON.stringify(e))+i+"; SameSite=Lax; path=/"+o+a;return c.length>3686.4&&U.warn("cookieStore warning: large cookie, len="+c.length),H.cookie=c,!0}catch{return!1}},q(t,e){if(H!=null&&H.cookie)try{Pt.N(t,"",-1,e)}catch{return}}},$i=null,be={O(){if(!at($i))return $i;var t=!0;if(F(w))t=!1;else try{var e="__mplssupport__";be.N(e,"xyz"),be.A(e)!=='"xyz"'&&(t=!1),be.q(e)}catch{t=!1}return t||U.error("localStorage unsupported; falling back to cookie store"),$i=t,t},D(t){U.error("localStorage error: "+t)},A(t){try{return w==null?void 0:w.localStorage.getItem(t)}catch(e){be.D(e)}return null},F(t){try{return JSON.parse(be.A(t))||{}}catch{}return null},N(t,e){try{return w==null||w.localStorage.setItem(t,JSON.stringify(e)),!0}catch(n){be.D(n)}return!1},q(t){try{w==null||w.localStorage.removeItem(t)}catch(e){be.D(e)}}},Qg=[Vs,"distinct_id",Kn,vo,Ys,Ks,yt],ks={},Xg={O:()=>!0,D(t){U.error("memoryStorage error: "+t)},A:t=>ks[t]||null,F:t=>ks[t]||null,N:(t,e)=>(ks[t]=e,!0),q(t){delete ks[t]}},mn=null,Fe={O(){if(!at(mn))return mn;if(mn=!0,F(w))mn=!1;else try{var t="__support__";Fe.N(t,"xyz"),Fe.A(t)!=='"xyz"'&&(mn=!1),Fe.q(t)}catch{mn=!1}return mn},D(t){U.error("sessionStorage error: ",t)},A(t){try{return w==null?void 0:w.sessionStorage.getItem(t)}catch(e){Fe.D(e)}return null},F(t){try{return JSON.parse(Fe.A(t))||null}catch{}return null},N(t,e){try{return w==null||w.sessionStorage.setItem(t,JSON.stringify(e)),!0}catch(n){Fe.D(n)}return!1},q(t){try{w==null||w.sessionStorage.removeItem(t)}catch(e){Fe.D(e)}}};class Zg{constructor(e){this._instance=e}get qt(){return this._instance.config}get consent(){return this.rr()?0:this.ir}isOptedOut(){return this.qt.cookieless_mode===qt||this.isRejected()||this.consent===-1&&this.qt.cookieless_mode===xn}isOptedIn(){return!this.isOptedOut()}isExplicitlyOptedOut(){return this.consent===0}isRejected(){return this.consent===0||this.consent===-1&&this.qt.opt_out_capturing_by_default}optInOut(e){this.nr.N(this.sr,e?1:0,this.qt.cookie_expiration,this.qt.cross_subdomain_cookie,this.qt.secure_cookie)}reset(){this.nr.q(this.sr,this.qt.cross_subdomain_cookie)}get sr(){var{token:e,opt_out_capturing_cookie_prefix:n,consent_persistence_name:r}=this._instance.config;return r||(n?n+e:"__ph_opt_in_out_"+e)}get ir(){var e=this.nr.A(this.sr);return xi(e)?1:ee(lg,e)?0:-1}get nr(){var e=this.qt.opt_out_capturing_persistence_type,n=e==="localStorage"?be:Pt;if(!this.ar||this.ar!==n){this.ar=n;var r=e==="localStorage"?Pt:be;r.A(this.sr)&&(this.ar.A(this.sr)||this.optInOut(xi(r.A(this.sr))),r.q(this.sr,this.qt.cross_subdomain_cookie))}return this.ar}rr(){return!!this.qt.respect_dnt&&[st==null?void 0:st.doNotTrack,st==null?void 0:st.msDoNotTrack,K.doNotTrack].some(e=>xi(e))}}var em=1,tm=3,nm=11;function _l(t){return t instanceof Element&&(t.id===Yu||!(t.closest==null||!t.closest(".toolbar-global-fade-container")))}function dn(t){return!!t&&t.nodeType===em}function it(t,e){return!!t&&!!t.tagName&&t.tagName.toLowerCase()===e.toLowerCase()}function nd(t){return!!t&&t.nodeType===tm}function rd(t){return!!t&&t.nodeType===nm&&dn(t.host)}function wo(t){return t?ai(t).split(/\s+/):[]}function wl(t){var e=w==null?void 0:w.location.href;return!!(e&&t&&t.some(n=>e.match(n)))}function ei(t){var e="";switch(typeof t.className){case"string":e=t.className;break;case"object":e=(t.className&&"baseVal"in t.className?t.className.baseVal:null)||t.getAttribute("class")||"";break;default:e=""}return wo(e)}function sd(t){return oe(t)?null:ai(t).split(/(\s+)/).filter(e=>Kr(e)).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function rs(t){var e="";return Ba(t)&&!cd(t)&&t.childNodes&&t.childNodes.length&&ye(t.childNodes,function(n){var r;nd(n)&&n.textContent&&(e+=(r=sd(n.textContent))!==null&&r!==void 0?r:"")}),ai(e)}function Oi(t){return F(t.target)?t.srcElement||null:(e=t.target)!=null&&e.shadowRoot?t.composedPath()[0]||null:t.target||null;var e}var xo=["a","button","form","input","select","textarea","label"];function id(t,e){if(F(e))return!0;var n,r=function(i){if(e.some(a=>i.matches(a)))return{v:!0}};for(var s of t)if(n=r(s))return n.v;return!1}function ad(t){var e=t.parentNode;return!(!e||!dn(e))&&e}var od=["next","previous","prev",">","<"],rm=[...od,"+","-","−","–"],xl=(t,e)=>/[a-z0-9]/i.test(e)?t.includes(e):t===e,kl=[".ph-no-rageclick",".ph-no-capture"],sm=["","text","search","email","password","url","tel","number"];function El(t,e){if(!w||ko(t))return!1;var n,r,s,i,a;if(Ot(e)?(n=!!e&&kl,r=void 0,s=!1):(n=(i=e==null?void 0:e.css_selector_ignorelist)!==null&&i!==void 0?i:kl,r=e==null?void 0:e.content_ignorelist,s=(a=e==null?void 0:e.ignore_text_selection)!==null&&a!==void 0&&a),n===!1||s&&function(l){return!(!l||!dn(l))&&(!!it(l,"textarea")||(it(l,"input")?ee(sm,(l.getAttribute("type")||"").toLowerCase()):function(c){if(c.isContentEditable)return!0;var u=c.getAttribute==null?void 0:c.getAttribute("contenteditable");return u==="true"||u===""}(l)))}(t))return!1;var{targetElementList:o}=ld(t,!1);return!function(l,c){if(l===!1||F(l))return!1;var u;if(l===!0)u=od;else{if(!ae(l))return!1;if(l.length>10)return U.error("[PostHog] content_ignorelist array cannot exceed 10 items. Use css_selector_ignorelist for more complex matching."),!1;u=l.map(h=>h.toLowerCase())}return c.some(h=>{var{safeText:p,ariaLabel:d}=h;return u.some(v=>xl(p,v)||xl(d,v))})}(r,o.map(l=>{var c;return{safeText:rs(l).toLowerCase(),ariaLabel:((c=l.getAttribute("aria-label"))==null?void 0:c.toLowerCase().trim())||""}}))&&!id(o,n)}var ko=t=>!t||it(t,"html")||!dn(t),ld=(t,e)=>{if(!w||ko(t))return{parentIsUsefulElement:!1,targetElementList:[]};for(var n=!1,r=[t],s=t;s.parentNode&&!it(s,"body");)if(rd(s.parentNode))r.push(s.parentNode.host),s=s.parentNode.host;else{var i=ad(s);if(!i)break;if(e||xo.indexOf(i.tagName.toLowerCase())>-1)n=!0;else{var a=w.getComputedStyle(i);a&&a.getPropertyValue("cursor")==="pointer"&&(n=!0)}r.push(i),s=i}return{parentIsUsefulElement:n,targetElementList:r}};function Ba(t){for(var e=t;e.parentNode&&!it(e,"body");e=e.parentNode){var n=ei(e);if(ee(n,"ph-sensitive")||ee(n,"ph-no-capture"))return!1}if(ee(ei(t),"ph-include"))return!0;var r=t.type||"";if(Ee(r))switch(r.toLowerCase()){case"hidden":case"password":return!1}var s=t.name||t.id||"";return!Ee(s)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(s.replace(/[^a-zA-Z0-9]/g,""))}function cd(t){return!!(it(t,"input")&&!["button","checkbox","submit","reset"].includes(t.type)||it(t,"select")||it(t,"textarea")||t.getAttribute("contenteditable")==="true")}var ud="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",im=new RegExp("^(?:"+ud+")$"),am=new RegExp(ud),dd="\\d{3}-?\\d{2}-?\\d{4}",om=new RegExp("^("+dd+")$"),lm=new RegExp("("+dd+")");function Kr(t,e){return e===void 0&&(e=!0),!(oe(t)||Ee(t)&&(t=ai(t),(e?im:am).test((t||"").replace(/[- ]/g,""))||(e?om:lm).test(t)))}function Sl(t){var e=rs(t);return Kr(e=(e+" "+hd(t)).trim())?e:""}function hd(t){var e="";return t&&t.childNodes&&t.childNodes.length&&ye(t.childNodes,function(n){var r;if(n&&((r=n.tagName)==null?void 0:r.toLowerCase())==="span")try{var s=rs(n);e=(e+" "+s).trim(),n.childNodes&&n.childNodes.length&&(e=(e+" "+hd(n)).trim())}catch(i){U.error("[AutoCapture]",i)}}),e}function Tl(t){return t.replace(/"|\\"/g,'\\"')}function cm(t){var e=t.attr__class;return e?ae(e)?e:wo(e):void 0}var Es=Se("[Dead Clicks]"),um=()=>!0,dm=t=>{var e,n=!((e=t.instance.persistence)==null||!e.get_property(mo)),r=t.instance.config.capture_dead_clicks;return Ot(r)?r:!!Pe(r)||n};class Rl{get lazyLoadedDeadClicksAutocapture(){return this.ur}constructor(e,n,r){this.instance=e,this.isEnabled=n,this.onCapture=r,this.startIfEnabledOrStop()}onRemoteConfig(e){"captureDeadClicks"in e&&(this.instance.persistence&&this.instance.persistence.register({[mo]:e.captureDeadClicks}),this.startIfEnabledOrStop())}startIfEnabledOrStop(){this.isEnabled(this)?this.lr(()=>{this.hr()}):this.stop()}lr(e){var n,r;(n=K.__PosthogExtensions__)!=null&&n.initDeadClicksAutocapture&&e(),(r=K.__PosthogExtensions__)==null||r.loadExternalDependency==null||r.loadExternalDependency(this.instance,"dead-clicks-autocapture",s=>{s?Es.error("failed to load script",s):e()})}hr(){var e;if(H){if(!this.ur&&(e=K.__PosthogExtensions__)!=null&&e.initDeadClicksAutocapture){var n=Pe(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{};n.__onCapture=this.onCapture,this.ur=K.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,n),this.ur.start(H),Es.info("starting...")}}else Es.error("`document` not found. Cannot start.")}stop(){this.ur&&(this.ur.stop(),this.ur=void 0,Es.info("stopping..."))}}var Ai=Se("[SegmentIntegration]"),pd="posthog-js";function fd(t,e){var{organization:n,projectId:r,prefix:s,severityAllowList:i=["error"],sendExceptionsToPostHog:a=!0}=e===void 0?{}:e;return o=>{var l,c,u,h,p;if(i!=="*"&&!i.includes(o.level)||!t.__loaded)return o;o.tags||(o.tags={});var d=t.requestRouter.endpointFor("ui","/project/"+t.config.token+"/person/"+t.get_distinct_id());o.tags["PostHog Person URL"]=d,t.sessionRecordingStarted()&&(o.tags["PostHog Recording URL"]=t.get_session_replay_url({withTimestamp:!0}));var v,f=((l=o.exception)==null?void 0:l.values)||[],_=f.map(C=>M({},C,{stacktrace:C.stacktrace?M({},C.stacktrace,{type:"raw",frames:(C.stacktrace.frames||[]).map(P=>M({},P,{platform:"web:javascript"}))}):void 0})),k={$exception_message:((c=f[0])==null?void 0:c.value)||o.message,$exception_type:(u=f[0])==null?void 0:u.type,$exception_level:o.level,$exception_list:_,$sentry_event_id:o.event_id,$sentry_exception:o.exception,$sentry_exception_message:((h=f[0])==null?void 0:h.value)||o.message,$sentry_exception_type:(p=f[0])==null?void 0:p.type,$sentry_tags:o.tags};return n&&r&&(k.$sentry_url=(s||"https://sentry.io/organizations/")+n+"/issues/?project="+r+"&query="+o.event_id),a&&((v=t.exceptions)==null||v.sendExceptionEvent(k)),o}}class hm{constructor(e,n,r,s,i,a){this.name=pd,this.setupOnce=function(o){o(fd(e,{organization:n,projectId:r,prefix:s,severityAllowList:i,sendExceptionsToPostHog:a==null||a}))}}}class Pl{constructor(e){this.cr=(n,r,s)=>{s&&(s.noSessionId||s.activityTimeout||s.sessionPastMaximumLength)&&(U.info("[PageViewManager] Session rotated, clearing pageview state",{sessionId:n,changeReason:s}),this.dr=void 0,this._instance.scrollManager.resetContext())},this._instance=e,this.vr()}vr(){var e;this.pr=(e=this._instance.sessionManager)==null?void 0:e.onSessionId(this.cr)}destroy(){var e;(e=this.pr)==null||e.call(this),this.pr=void 0}doPageView(e,n){var r,s=this.gr(e,n);return this.dr={pathname:(r=w==null?void 0:w.location.pathname)!==null&&r!==void 0?r:"",pageViewId:n,timestamp:e},this._instance.scrollManager.resetContext(),s}doPageLeave(e){var n;return this.gr(e,(n=this.dr)==null?void 0:n.pageViewId)}doEvent(){var e;return{$pageview_id:(e=this.dr)==null?void 0:e.pageViewId}}gr(e,n){var r=this.dr;if(!r)return{$pageview_id:n};var s={$pageview_id:n,$prev_pageview_id:r.pageViewId},i=this._instance.scrollManager.getContext();if(i&&!this._instance.config.disable_scroll_properties){var{maxScrollHeight:a,lastScrollY:o,maxScrollY:l,maxContentHeight:c,lastContentY:u,maxContentY:h}=i;if(!(F(a)||F(o)||F(l)||F(c)||F(u)||F(h))){a=Math.ceil(a),o=Math.ceil(o),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u),h=Math.ceil(h);var p=a>1?$t(o/a,0,1,U):1,d=a>1?$t(l/a,0,1,U):1,v=c>1?$t(u/c,0,1,U):1,f=c>1?$t(h/c,0,1,U):1;s=we(s,{$prev_pageview_last_scroll:o,$prev_pageview_last_scroll_percentage:p,$prev_pageview_max_scroll:l,$prev_pageview_max_scroll_percentage:d,$prev_pageview_last_content:u,$prev_pageview_last_content_percentage:v,$prev_pageview_max_content:h,$prev_pageview_max_content_percentage:f})}}return r.pathname&&(s.$prev_pageview_pathname=r.pathname),r.timestamp&&(s.$prev_pageview_duration=(e.getTime()-r.timestamp.getTime())/1e3),s}}var Ss=["flags","surveys"],pm={[Gu]:{exposure:"hidden"},[Ur]:{exposure:"hidden"},__cmpns:{exposure:"hidden"},[qr]:{exposure:"hidden"},[ka]:{exposure:"event"},[Ea]:{exposure:"hidden"},[Sa]:{exposure:"event"},[Ta]:{exposure:"hidden"},[Ra]:{exposure:"event"},[Pa]:{exposure:"event"},[mo]:{exposure:"event"},[$a]:{exposure:"hidden"},[Oa]:{exposure:"event"},[kn]:{exposure:"hidden"},$session_recording_enabled_server_side:{exposure:"hidden"},[Kn]:{exposure:"hidden"},[vo]:{exposure:"event"},$session_past_minimum_duration:{exposure:"event"},$session_recording_url_trigger_activated_session:{exposure:"event"},$session_recording_event_trigger_activated_session:{exposure:"event"},$debug_first_full_snapshot_timestamp:{exposure:"event"},[Yn]:{exposure:"derived",storageGroup:"flags",shouldSkipFromEventProperties:(t,e)=>e(),transformToEventProperties(t){if(!Pe(t))return{};for(var e={},n=Object.keys(t),r=0;n.length>r;r++)e["$feature/"+n[r]]=t[n[r]];return e}},[Ms]:{exposure:"event",storageGroup:"flags"},[Hr]:{exposure:"hidden"},[Aa]:{exposure:"hidden",storageGroup:"flags"},[Ca]:{exposure:"event",storageGroup:"flags"},[Ia]:{exposure:"event",storageGroup:"flags"},[jt]:{exposure:"event"},[Jn]:{exposure:"hidden"},[Br]:{exposure:"hidden"},[wn]:{exposure:"hidden"},[Ma]:{exposure:"hidden",storageGroup:"surveys"},[bo]:{exposure:"hidden",storageGroup:"surveys"},[Na]:{exposure:"event"},[Ns]:{exposure:"hidden"},$product_tours_activated:{exposure:"hidden"},$conversations_widget_session_id:{exposure:"event"},$conversations_ticket_id:{exposure:"event"},$conversations_widget_state:{exposure:"event"},$conversations_user_traits:{exposure:"event"},[Vr]:{exposure:"hidden"},[Da]:{exposure:"hidden"},[La]:{exposure:"hidden"},[ns]:{exposure:"hidden",storageGroup:"flags"},[yt]:{exposure:"hidden"},[ja]:{exposure:"hidden"},[Fa]:{exposure:"hidden"},[Ua]:{exposure:"hidden"},[qa]:{exposure:"hidden"},[Ks]:{exposure:"hidden"},[Ys]:{exposure:"hidden"},[Ju]:{exposure:"event"},[Wu]:{exposure:"event"},[Vu]:{exposure:"event"},[Ku]:{exposure:"event"},[Qu]:{exposure:"event"},[Xu]:{exposure:"event"},[Zu]:{exposure:"event"},$sdk_debug_replay_event_trigger_status:{exposure:"event"},$sdk_debug_replay_linked_flag_trigger_status:{exposure:"event"},$sdk_debug_replay_matched_recording_trigger_groups:{exposure:"event"},$sdk_debug_replay_remote_trigger_matching_config:{exposure:"event"},$sdk_debug_replay_trigger_groups_count:{exposure:"event"},$sdk_debug_replay_url_trigger_status:{exposure:"event"},$session_recording_start_reason:{exposure:"event"}},fm=[["$posthog_sr_group_event_trigger_",{exposure:"hidden"}],["$posthog_sr_group_url_trigger_",{exposure:"hidden"}],["$posthog_sr_group_sampling_",{exposure:"hidden"}]],$r=t=>{var e=pm[t];if(e)return e;for(var[n,r]of fm)if(t.indexOf(n)===0)return r},ti=t=>{var e=H==null?void 0:H.createElement("a");return F(e)?null:(e.href=t,e)},ss=function(t,e){for(var n,r=((t.split("#")[0]||"").split(/\?(.*)/)[1]||"").replace(/^\?+/g,"").split("&"),s=0;r.length>s;s++){var i=r[s].split("=");if(i[0]===e){n=i;break}}if(!ae(n)||2>n.length)return"";var a=n[1];try{a=decodeURIComponent(a)}catch{U.error("Skipping decoding for malformed query param: "+a)}return a.replace(/\+/g," ")},is=function(t,e,n){if(!t||!e||!e.length)return t;for(var r=t.split("#"),s=r[1],i=(r[0]||"").split("?"),a=i[1],o=i[0],l=(a||"").split("&"),c=[],u=0;l.length>u;u++){var h=l[u].split("=");ae(h)&&(e.includes(h[0])?c.push(h[0]+"="+n):c.push(l[u]))}var p=o;return a!=null&&(p+="?"+c.join("&")),s!=null&&(p+="#"+s),p},ni=function(t,e){var n=t.match(new RegExp(e+"=([^&]*)"));return n?n[1]:null},Ts="https?://(.*)",br=["gclid","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","igshid","ttclid","rdt_cid","epik","qclid","sccid","irclid","_kx"],gm=["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gad_source","mc_cid",...br],as="<masked>",mm=["li_fat_id"];function gd(t,e,n){if(!H)return{};var r,s=e?[...br,...n||[]]:[],i=md(is(H.URL,s,as),t),a=(r={},ye(mm,function(o){var l=Pt.A(o);r[o]=l||null}),r);return we(a,i)}function md(t,e){var n=gm.concat(e||[]),r={};return ye(n,function(s){var i=ss(t,s);r[s]=i||null}),r}function vd(t){var e=function(i){return i?i.search(Ts+"google.([^/?]*)")===0?"google":i.search(Ts+"bing.com")===0?"bing":i.search(Ts+"yahoo.com")===0?"yahoo":i.search(Ts+"duckduckgo.com")===0?"duckduckgo":null:null}(t),n=e!="yahoo"?"q":"p",r={};if(!at(e)){r.$search_engine=e;var s=H?ss(H.referrer,n):"";s.length&&(r.ph_keyword=s)}return r}function $l(){return navigator.language||navigator.userLanguage}var ri="$direct";function bd(){return(H==null?void 0:H.referrer)||ri}function yd(t,e){var n=t?[...br,...e||[]]:[],r=je==null?void 0:je.href.substring(0,1e3);return{r:bd().substring(0,1e3),u:r?is(r,n,as):void 0}}function _d(t){var e,{r:n,u:r}=t,s={$referrer:n,$referring_domain:n==null?void 0:n==ri?ri:(e=ti(n))==null?void 0:e.host};if(r){s.$current_url=r;var i=ti(r);s.$host=i==null?void 0:i.host,s.$pathname=i==null?void 0:i.pathname;var a=md(r);we(s,a)}if(n){var o=vd(n);we(s,o)}return s}function wd(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{return}}function vm(){try{return new Date().getTimezoneOffset()}catch{return}}var bm={flags:ns,surveys:bo},ym=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"],Hn="main";class Ci{constructor(e,n,r){if(r===void 0&&(r=!0),this.mr={},this.yr=!1,this.br=!1,this.qt=e,this._r=r,this.props={},this.wr=!1,this.Sr=(i=>{var a="";return i.token&&(a=i.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),i.persistence_name?"ph_"+i.persistence_name:"ph_"+a+"_posthog"})(e),this.nr=this.kr(e),this.br=this.Cr(e),this.load(),e.debug&&U.info("Persistence loaded",e.persistence,M({},this.props)),this.update_config(e,e,n),this.save(),w){var s=()=>this.flush();Ae(w,"beforeunload",s,{capture:!1}),Ae(w,"pagehide",s,{capture:!1})}}Ir(){var e,n=(e=this.qt)==null?void 0:e.persistence_save_debounce_ms;return Ke(n)&&n>0?n:0}isDisabled(){return!!this.Tr}kr(e){ym.indexOf(e.persistence.toLowerCase())===-1&&(U.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie");var n,r=function(a,o){a===void 0&&(a=[]),o===void 0&&(o=!1);var l=[...Qg,...a];return M({},be,{F(c){try{var u={};try{u=Pt.F(c)||{}}catch{}var h,p=JSON.parse(be.A(c)||"{}");if(o){var d={};for(var v in u){var f=u[v];at(f)||f===""||(d[v]=f)}h=we(p,d)}else h=we(u,p);return be.N(c,h),h}catch{}return null},N(c,u,h,p,d,v){var f=be.N(c,u,void 0,void 0,v);try{var _={};l.forEach(k=>{u[k]&&(_[k]=u[k])}),Object.keys(_).length&&Pt.N(c,_,h,p,d,v)}catch(k){be.D(k)}return f},q(c,u){try{w==null||w.localStorage.removeItem(c),Pt.q(c,u)}catch(h){be.D(h)}}})}(e.cookie_persisted_properties||[],e.__preview_cookie_wins_on_conflict||!1),s=!1,i=e.persistence.toLowerCase();return i==="localstorage"&&be.O()?(n=be,s=!0):i==="localstorage+cookie"&&r.O()?(n=r,s=!0):i==="sessionstorage"&&Fe.O()?n=Fe:i==="memory"?n=Xg:i==="cookie"?n=Pt:r.O()?(n=r,s=!0):n=Pt,this.yr=s,n}Er(e){return this.Sr+"__"+e}Cr(e){return this.yr&&!!e.split_storage}Mr(e){var n=e??this.qt.feature_flag_cache_ttl_ms;if(!n||0>=n)return!1;var r=this.props[ns];return!r||typeof r!="number"||Date.now()-r>n}properties(){var e={};return ye(this.props,(n,r)=>{var s=$r(r);if((s==null?void 0:s.exposure)==="derived"){if(s.shouldSkipFromEventProperties!=null&&s.shouldSkipFromEventProperties(n,r===Yn?()=>this.Mr():()=>!1))return;s.transformToEventProperties&&we(e,s.transformToEventProperties(n))}else s&&s.exposure!=="event"||(e[r]=n)}),e}load(){if(!this.Tr){var e=this.nr.F(this.Sr);e&&(this.props=we({},e)),this.br&&this.Rr()}}Rr(){for(var e of Ss){var n=be.F(this.Er(e));if(n&&!ln(n)){var r=this.Pr(e);r.persisted=!0,this.Or(e)||(r.fingerprint=this.Lr(n,e)),this.Fr(e,n)||we(this.props,n)}}}Or(e){return Object.keys(this.props).some(n=>{var r;return((r=$r(n))==null?void 0:r.storageGroup)===e})}Fr(e,n){var r=bm[e];if(!r)return!1;var s=n[r],i=this.props[r];return Ke(s)&&Ke(i)&&i>s}refreshKey(e){var n;if(!this.Tr){var r=this.br?(n=$r(e))==null?void 0:n.storageGroup:void 0,s=r?be.F(this.Er(r)):this.nr.F(this.Sr);if(s&&e in s)this.Ar(e,s[e]);else{if(r){var i=this.nr.F(this.Sr);if(i&&e in i)return void this.Ar(e,i[e])}this.Nr(e)}}}save(){if(!this.Tr){var e=this.Ir();e>0?F(this.Dr)&&(this.Dr=setTimeout(()=>{this.Dr=void 0,this.$r()},e)):this.$r()}}flush(){F(this.Dr)||(clearTimeout(this.Dr),this.Dr=void 0,this.$r())}$r(){this.Tr||(this.br?this.qr():this.jr(this.nr,this.Sr,this.props,Hn))}qr(){var{main:e,groups:n}=this.Hr();for(var r of(this.jr(this.nr,this.Sr,e,Hn),Ss)){var s,i=n[r];(!ln(i)||(s=this.mr[r])!=null&&s.persisted)&&this.jr(be,this.Er(r),i,r)}}Hr(){var e={},n={};for(var r of Ss)n[r]={};return ye(this.props,(s,i)=>{var a,o=(a=$r(i))==null?void 0:a.storageGroup;o?n[o][i]=s:e[i]=s}),{main:e,groups:n}}Lr(e,n){var r=JSON.stringify(e);return n===Hn?r+"|"+this.Ur+"|"+this.Br+"|"+this.zr:r}jr(e,n,r,s){var i=this.Pr(s);if(s===Hn||i.dirty||F(i.fingerprint)){var a;try{if((a=this.Lr(r,s))===i.fingerprint)return void(i.dirty=!1)}catch{a=void 0}e.N(n,r,this.Ur,this.Br,this.zr,this.qt.debug)?(i.dirty=!1,s!==Hn&&(i.persisted=!0),F(a)||(i.fingerprint=a)):this.qt.debug&&U.warn('failed to persist storage entry "'+n+'"; will retry on next save')}}remove(e){var{keepGroupEntries:n=!1}=e===void 0?{}:e;if(F(this.Dr)||(clearTimeout(this.Dr),this.Dr=void 0),this.nr.q(this.Sr,!1),this.nr.q(this.Sr,!0),!n&&this._r)for(var r of Ss)be.q(this.Er(r));n?delete this.mr[Hn]:this.mr={}}clear(){this.remove(),this.props={}}register_once(e,n,r){if(Pe(e)){F(n)&&(n="None"),this.Ur=F(r)?this.Vr:r;var s=!1;if(ye(e,(i,a)=>{this.props.hasOwnProperty(a)&&this.props[a]!==n||(this.Ar(a,i),s=!0)}),s)return this.save(),!0}return!1}register(e,n){if(Pe(e)){this.Ur=F(n)?this.Vr:n;var r=!1;if(ye(e,(s,i)=>{e.hasOwnProperty(i)&&this.props[i]!==s&&(this.Ar(i,s),r=!0)}),r)return this.save(),!0}return!1}unregister(e){e in this.props&&(this.Nr(e),this.save())}update_campaign_params(){if(!this.wr){var e=gd(this.qt.custom_campaign_params,this.qt.mask_personal_data_properties,this.qt.custom_personal_data_properties);ln(_o(e))||this.register(e),this.wr=!0}}update_search_keyword(){var e;this.register((e=H==null?void 0:H.referrer)?vd(e):{})}update_referrer_info(){var e;this.register_once({$referrer:bd(),$referring_domain:H!=null&&H.referrer&&((e=ti(H.referrer))==null?void 0:e.host)||ri},void 0)}set_initial_person_info(){this.props[Ua]||this.props[qa]||this.register_once({[Ks]:yd(this.qt.mask_personal_data_properties,this.qt.custom_personal_data_properties)},void 0)}get_initial_props(){var e={};ye([qa,Ua],a=>{var o=this.props[a];o&&ye(o,function(l,c){e["$initial_"+ma(c)]=l})});var n,r,s=this.props[Ks];if(s){var i=(n=_d(s),r={},ye(n,function(a,o){r["$initial_"+ma(o)]=a}),r);we(e,i)}return e}safe_merge(e){return ye(this.props,function(n,r){r in e||(e[r]=n)}),e}update_config(e,n,r){this.Vr=this.Ur=e.cookie_expiration,this.set_disabled(e.disable_persistence||!!r),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie);var s=e.persistence!==n.persistence||!((l,c)=>{if(l.length!==c.length)return!1;var u=[...l].sort(),h=[...c].sort();return u.every((p,d)=>p===h[d])})(e.cookie_persisted_properties||[],n.cookie_persisted_properties||[]),i=s?this.kr(e):this.nr,a=this.Cr(e);if(s||a!==this.br){var o=this.props;this.clear(),this.nr=i,this.br=a,this.props=o,this.save()}}set_disabled(e){this.Tr=e,this.Tr?this.remove():this.save()}set_cross_subdomain(e){e!==this.Br&&(this.Br=e,this.remove({keepGroupEntries:!0}),this.save())}set_secure(e){e!==this.zr&&(this.zr=e,this.remove({keepGroupEntries:!0}),this.save())}set_event_timer(e,n){var r=this.props[qr]||{};r[e]=n,this.Ar(qr,r),this.save()}remove_event_timer(e){var n=this.props[qr]||{},r=n[e];return F(r)||(delete n[e],this.Ar(qr,n),this.save()),r}get_property(e){return this.props[e]}set_property(e,n){this.Ar(e,n),this.save()}Ar(e,n){this.props[e]=n,this.Wr(e)}Nr(e){delete this.props[e],this.Wr(e)}Wr(e){var n,r=(n=$r(e))==null?void 0:n.storageGroup;r&&(this.Pr(r).dirty=!0)}Pr(e){return this.mr[e]||(this.mr[e]={})}}var Or={Activation:"events",Cancellation:"cancelEvents"},Ii={Popover:"popover",API:"api",Widget:"widget",ExternalSurvey:"external_survey"},zr={SHOWN:"survey shown",DISMISSED:"survey dismissed",SENT:"survey sent",ABANDONED:"survey abandoned"},Mi={SURVEY_ID:"$survey_id",SURVEY_NAME:"$survey_name",SURVEY_RESPONSE:"$survey_response",SURVEY_ITERATION:"$survey_iteration",SURVEY_ITERATION_START_DATE:"$survey_iteration_start_date",SURVEY_PARTIALLY_COMPLETED:"$survey_partially_completed",SURVEY_SUBMISSION_ID:"$survey_submission_id",SURVEY_QUESTIONS:"$survey_questions",SURVEY_COMPLETED:"$survey_completed",PRODUCT_TOUR_ID:"$product_tour_id",SURVEY_LAST_SEEN_DATE:"$survey_last_seen_date",SURVEY_LANGUAGE:"$survey_language"},za={Popover:"popover",Inline:"inline"},_m={SHOWN:"product tour shown",DISMISSED:"product tour dismissed",COMPLETED:"product tour completed",STEP_SHOWN:"product tour step shown",STEP_COMPLETED:"product tour step completed",BUTTON_CLICKED:"product tour button clicked",STEP_SELECTOR_FAILED:"product tour step selector failed",BANNER_CONTAINER_SELECTOR_FAILED:"product tour banner container selector failed",BANNER_ACTION_CLICKED:"product tour banner action clicked"},Ol={TOUR_ID:"$product_tour_id",TOUR_NAME:"$product_tour_name",TOUR_ITERATION:"$product_tour_iteration",TOUR_RENDER_REASON:"$product_tour_render_reason",TOUR_STEP_ID:"$product_tour_step_id",TOUR_STEP_ORDER:"$product_tour_step_order",TOUR_STEP_TYPE:"$product_tour_step_type",TOUR_DISMISS_REASON:"$product_tour_dismiss_reason",TOUR_BUTTON_TEXT:"$product_tour_button_text",TOUR_BUTTON_ACTION:"$product_tour_button_action",TOUR_BUTTON_LINK:"$product_tour_button_link",TOUR_BUTTON_TOUR_ID:"$product_tour_button_tour_id",TOUR_STEPS_COUNT:"$product_tour_steps_count",TOUR_STEP_SELECTOR:"$product_tour_step_selector",TOUR_STEP_SELECTOR_FOUND:"$product_tour_step_selector_found",TOUR_STEP_ELEMENT_TAG:"$product_tour_step_element_tag",TOUR_STEP_ELEMENT_ID:"$product_tour_step_element_id",TOUR_STEP_ELEMENT_CLASSES:"$product_tour_step_element_classes",TOUR_STEP_ELEMENT_TEXT:"$product_tour_step_element_text",TOUR_ERROR:"$product_tour_error",TOUR_MATCHES_COUNT:"$product_tour_matches_count",TOUR_FAILURE_PHASE:"$product_tour_failure_phase",TOUR_WAITED_FOR_ELEMENT:"$product_tour_waited_for_element",TOUR_WAIT_DURATION_MS:"$product_tour_wait_duration_ms",TOUR_BANNER_SELECTOR:"$product_tour_banner_selector",TOUR_LINKED_SURVEY_ID:"$product_tour_linked_survey_id",USE_MANUAL_SELECTOR:"$use_manual_selector",INFERENCE_DATA_PRESENT:"$inference_data_present",TOUR_LAST_SEEN_DATE:"$product_tour_last_seen_date",TOUR_TYPE:"$product_tour_type"},Al=Se("[RateLimiter]");class wm{constructor(e){this.serverLimits={},this.lastEventRateLimited=!1,this.checkForLimiting=n=>{var r=n.text;if(r&&r.length)try{(JSON.parse(r).quota_limited||[]).forEach(s=>{Al.info((s||"events")+" is quota limited."),this.serverLimits[s]=new Date().getTime()+6e4})}catch(s){return void Al.warn('could not rate limit - continuing. Error: "'+(s==null?void 0:s.message)+'"',{text:r})}},this.instance=e,this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}get captureEventsPerSecond(){var e;return((e=this.instance.config.rate_limiting)==null?void 0:e.events_per_second)||10}get captureEventsBurstLimit(){var e;return Math.max(((e=this.instance.config.rate_limiting)==null?void 0:e.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond)}clientRateLimitContext(e){var n,r,s;e===void 0&&(e=!1);var{captureEventsBurstLimit:i,captureEventsPerSecond:a}=this,o=new Date().getTime(),l=(n=(r=this.instance.persistence)==null?void 0:r.get_property(Fa))!==null&&n!==void 0?n:{tokens:i,last:o};l.tokens+=(o-l.last)/1e3*a,l.last=o,l.tokens>i&&(l.tokens=i);var c=1>l.tokens;return c||e||(l.tokens=Math.max(0,l.tokens-1)),!c||this.lastEventRateLimited||e||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to "+a+" events per second and "+i+" events burst limit."},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=c,(s=this.instance.persistence)==null||s.set_property(Fa,l),{isRateLimited:c,remainingTokens:l.tokens}}isServerRateLimited(e){var n=this.serverLimits[e||"events"]||!1;return n!==!1&&new Date().getTime()<n}}var Ar=Se("[RemoteConfig]");class xd{constructor(e){this._instance=e}get remoteConfig(){var e;return(e=K._POSTHOG_REMOTE_CONFIG)==null||(e=e[this._instance.config.token])==null?void 0:e.config}Zr(e){var n,r;(n=K.__PosthogExtensions__)!=null&&n.loadExternalDependency?(r=K.__PosthogExtensions__)==null||r.loadExternalDependency==null||r.loadExternalDependency(this._instance,"remote-config",()=>e(this.remoteConfig)):e()}Gr(e){this._instance._send_request({method:"GET",url:this._instance.requestRouter.endpointFor("assets","/array/"+this._instance.config.token+"/config"),callback(n){e(n.json)}})}load(){try{if(this.remoteConfig)return Ar.info("Using preloaded remote config",this.remoteConfig),this.Qr(this.remoteConfig),void this.Jr();if(this._instance.Kr())return void Ar.warn("Remote config is disabled. Falling back to local config.");this.Zr(e=>{if(!e)return Ar.info("No config found after loading remote JS config. Falling back to JSON."),void this.Gr(n=>{this.Qr(n),this.Jr()});this.Qr(e),this.Jr()})}catch(e){Ar.error("Error loading remote config",e)}}stop(){this.Yr&&(clearInterval(this.Yr),this.Yr=void 0)}refresh(){!this._instance.Kr()&&H&&H.visibilityState!=="hidden"&&this._instance.reloadFeatureFlags()}Jr(){var e;if(!this.Yr){var n=(e=this._instance.config.remote_config_refresh_interval_ms)!==null&&e!==void 0?e:3e5;n!==0&&(this.Yr=setInterval(()=>{this.refresh()},n))}}Qr(e){var n;e||Ar.error("Failed to fetch remote config from PostHog."),this._instance.Qr(e??{}),(e==null?void 0:e.hasFeatureFlags)!==!1&&(this._instance.config.advanced_disable_feature_flags_on_first_load||(n=this._instance.featureFlags)==null||n.ensureFlagsLoaded())}}var Rt={GZipJS:"gzip-js",Base64:"base64"},pt=Uint8Array,et=Uint16Array,yr=Uint32Array,Eo=new pt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),So=new pt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Cl=new pt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),kd=function(t,e){for(var n=new et(31),r=0;31>r;++r)n[r]=e+=1<<t[r-1];var s=new yr(n[30]);for(r=1;30>r;++r)for(var i=n[r];n[r+1]>i;++i)s[i]=i-n[r]<<5|r;return[n,s]},Ed=kd(Eo,2),Ga=Ed[1];Ed[0][28]=258,Ga[258]=28;for(var Il=kd(So,0)[1],Sd=new et(32768),xe=0;32768>xe;++xe){var Bn=(43690&xe)>>>1|(21845&xe)<<1;Sd[xe]=((65280&(Bn=(61680&(Bn=(52428&Bn)>>>2|(13107&Bn)<<2))>>>4|(3855&Bn)<<4))>>>8|(255&Bn)<<8)>>>1}var Yr=function(t,e,n){for(var r=t.length,s=0,i=new et(e);r>s;++s)++i[t[s]-1];var a,o=new et(e);for(s=0;e>s;++s)o[s]=o[s-1]+i[s-1]<<1;for(a=new et(r),s=0;r>s;++s)a[s]=Sd[o[t[s]-1]++]>>>15-t[s];return a},Dn=new pt(288);for(xe=0;144>xe;++xe)Dn[xe]=8;for(xe=144;256>xe;++xe)Dn[xe]=9;for(xe=256;280>xe;++xe)Dn[xe]=7;for(xe=280;288>xe;++xe)Dn[xe]=8;var si=new pt(32);for(xe=0;32>xe;++xe)si[xe]=5;var xm=Yr(Dn,9),km=Yr(si,5),Td=function(t){return(t/8>>0)+(7&t&&1)},Rd=function(t,e,n){(n==null||n>t.length)&&(n=t.length);var r=new(t instanceof et?et:t instanceof yr?yr:pt)(n-e);return r.set(t.subarray(e,n)),r},It=function(t,e,n){var r=e/8>>0;t[r]|=n<<=7&e,t[r+1]|=n>>>8},Cr=function(t,e,n){var r=e/8>>0;t[r]|=n<<=7&e,t[r+1]|=n>>>8,t[r+2]|=n>>>16},Ni=function(t,e){for(var n=[],r=0;t.length>r;++r)t[r]&&n.push({s:r,f:t[r]});var s=n.length,i=n.slice();if(!s)return[new pt(0),0];if(s==1){var a=new pt(n[0].s+1);return a[n[0].s]=1,[a,1]}n.sort(function($,O){return $.f-O.f}),n.push({s:-1,f:25001});var o=n[0],l=n[1],c=0,u=1,h=2;for(n[0]={s:-1,f:o.f+l.f,l:o,r:l};u!=s-1;)o=n[n[h].f>n[c].f?c++:h++],l=n[c!=u&&n[h].f>n[c].f?c++:h++],n[u++]={s:-1,f:o.f+l.f,l:o,r:l};var p=i[0].s;for(r=1;s>r;++r)i[r].s>p&&(p=i[r].s);var d=new et(p+1),v=Ja(n[u-1],d,0);if(v>e){r=0;var f=0,_=v-e,k=1<<_;for(i.sort(function($,O){return d[O.s]-d[$.s]||$.f-O.f});s>r;++r){var C=i[r].s;if(e>=d[C])break;f+=k-(1<<v-d[C]),d[C]=e}for(f>>>=_;f>0;){var P=i[r].s;e>d[P]?f-=1<<e-d[P]++-1:++r}for(;r>=0&&f;--r){var L=i[r].s;d[L]==e&&(--d[L],++f)}v=e}return[new pt(d),v]},Ja=function(t,e,n){return t.s==-1?Math.max(Ja(t.l,e,n+1),Ja(t.r,e,n+1)):e[t.s]=n},Ml=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new et(++e),r=0,s=t[0],i=1,a=function(l){n[r++]=l},o=1;e>=o;++o)if(t[o]==s&&o!=e)++i;else{if(!s&&i>2){for(;i>138;i-=138)a(32754);i>2&&(a(i>10?i-11<<5|28690:i-3<<5|12305),i=0)}else if(i>3){for(a(s),--i;i>6;i-=6)a(8304);i>2&&(a(i-3<<5|8208),i=0)}for(;i--;)a(s);i=1,s=t[o]}return[n.subarray(0,r),e]},Ir=function(t,e){for(var n=0,r=0;e.length>r;++r)n+=t[r]*e[r];return n},Wa=function(t,e,n){var r=n.length,s=Td(e+2);t[s]=255&r,t[s+1]=r>>>8,t[s+2]=255^t[s],t[s+3]=255^t[s+1];for(var i=0;r>i;++i)t[s+i+4]=n[i];return 8*(s+4+r)},Nl=function(t,e,n,r,s,i,a,o,l,c,u){It(e,u++,n),++s[256];for(var h=Ni(s,15),p=h[0],d=h[1],v=Ni(i,15),f=v[0],_=v[1],k=Ml(p),C=k[0],P=k[1],L=Ml(f),$=L[0],O=L[1],N=new et(19),T=0;C.length>T;++T)N[31&C[T]]++;for(T=0;$.length>T;++T)N[31&$[T]]++;for(var x=Ni(N,7),S=x[0],z=x[1],D=19;D>4&&!S[Cl[D-1]];--D);var V,X,G,te,le=c+5<<3,fe=Ir(s,Dn)+Ir(i,si)+a,J=Ir(s,p)+Ir(i,f)+a+14+3*D+Ir(N,S)+(2*N[16]+3*N[17]+7*N[18]);if(fe>=le&&J>=le)return Wa(e,u,t.subarray(l,l+c));if(It(e,u,1+(fe>J)),u+=2,fe>J){V=Yr(p,d),X=p,G=Yr(f,_),te=f;var y=Yr(S,z);for(It(e,u,P-257),It(e,u+5,O-1),It(e,u+10,D-4),u+=14,T=0;D>T;++T)It(e,u+3*T,S[Cl[T]]);u+=3*D;for(var m=[C,$],R=0;2>R;++R){var A=m[R];for(T=0;A.length>T;++T)It(e,u,y[j=31&A[T]]),u+=S[j],j>15&&(It(e,u,A[T]>>>5&127),u+=A[T]>>>12)}}else V=xm,X=Dn,G=km,te=si;for(T=0;o>T;++T)if(r[T]>255){var j;Cr(e,u,V[257+(j=r[T]>>>18&31)]),u+=X[j+257],j>7&&(It(e,u,r[T]>>>23&31),u+=Eo[j]);var B=31&r[T];Cr(e,u,G[B]),u+=te[B],B>3&&(Cr(e,u,r[T]>>>5&8191),u+=So[B])}else Cr(e,u,V[r[T]]),u+=X[r[T]];return Cr(e,u,V[256]),u+X[256]},Em=new yr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Sm=function(){for(var t=new yr(256),e=0;256>e;++e){for(var n=e,r=9;--r;)n=(1&n&&3988292384)^n>>>1;t[e]=n}return t}(),Di=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8};function Tm(t,e){e===void 0&&(e={});var n=function(){var h=4294967295;return{p(p){for(var d=h,v=0;p.length>v;++v)d=Sm[255&d^p[v]]^d>>>8;h=d},d(){return 4294967295^h}}}(),r=t.length;n.p(t);var s,i,a,o,l,c=(o=10+((s=e).filename&&s.filename.length+1||0),l=8,function(h,p,d,v,f,_){var k=h.length,C=new pt(v+k+5*(1+Math.floor(k/7e3))+f),P=C.subarray(v,C.length-f),L=0;if(!p||8>k)for(var $=0;k>=$;$+=65535){var O=$+65535;k>O?L=Wa(P,L,h.subarray($,O)):(P[$]=!0,L=Wa(P,L,h.subarray($,k)))}else{for(var N=Em[p-1],T=N>>>13,x=8191&N,S=(1<<d)-1,z=new et(32768),D=new et(S+1),V=Math.ceil(d/3),X=2*V,G=function(nt){return(h[nt]^h[nt+1]<<V^h[nt+2]<<X)&S},te=new yr(25e3),le=new et(288),fe=new et(32),J=0,y=0,m=($=0,0),R=0,A=0;k>$;++$){var j=G($),B=32767&$,Y=D[j];if(z[B]=Y,D[j]=B,$>=R){var q=k-$;if((J>7e3||m>24576)&&q>423){L=Nl(h,P,0,te,le,fe,y,m,A,$-A,L),m=J=y=0,A=$;for(var Q=0;286>Q;++Q)le[Q]=0;for(Q=0;30>Q;++Q)fe[Q]=0}var ne=2,ce=0,pe=x,ue=B-Y&32767;if(q>2&&j==G($-ue))for(var $e=Math.min(T,q)-1,ie=Math.min(32767,$),Me=Math.min(258,q);ie>=ue&&--pe&&B!=Y;){if(h[$+ne]==h[$+ne-ue]){for(var Te=0;Me>Te&&h[$+Te]==h[$+Te-ue];++Te);if(Te>ne){if(ne=Te,ce=ue,Te>$e)break;var Ge=Math.min(ue,Te-2),qe=0;for(Q=0;Ge>Q;++Q){var tt=$-ue+Q+32768&32767,He=tt-z[tt]+32768&32767;He>qe&&(qe=He,Y=tt)}}}ue+=(B=Y)-(Y=z[B])+32768&32767}if(ce){te[m++]=268435456|Ga[ne]<<18|Il[ce];var kt=31&Ga[ne],pn=31&Il[ce];y+=Eo[kt]+So[pn],++le[257+kt],++fe[pn],R=$+ne,++J}else te[m++]=h[$],++le[h[$]]}}L=Nl(h,P,!0,te,le,fe,y,m,A,$-A,L)}return Rd(C,0,v+Td(L)+f)}(i=t,(a=e).level==null?6:a.level,a.mem==null?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(i.length)))):12+a.mem,o,l)),u=c.length;return function(h,p){var d=p.filename;if(h[0]=31,h[1]=139,h[2]=8,h[8]=2>p.level?4:p.level==9?2:0,h[9]=3,p.mtime!=0&&Di(h,4,Math.floor(new Date(p.mtime||Date.now())/1e3)),d){h[3]=8;for(var v=0;d.length>=v;++v)h[v+10]=d.charCodeAt(v)}}(c,e),Di(c,u-8,n.d()),Di(c,u-4,r),c}var Rm=!!pa||!!ha,Pd="text/plain",Ls=!1,Pm=(t,e)=>{var[n,r]=t.split("#"),[s,i]=n.split("?");if(!i)return t;var a=i.split("&").filter(o=>o.split("=")[0]!==e).join("&");return s+(a?"?"+a:"")+(r?"#"+r:"")},li=function(t,e,n){var r;n===void 0&&(n=!0);var[s,i]=t.split("?"),a=M({},e),o=(r=i==null?void 0:i.split("&").map(c=>{var u,[h,p]=c.split("="),d=n&&(u=a[h])!==null&&u!==void 0?u:p;return delete a[h],h+"="+d}))!==null&&r!==void 0?r:[],l=function(c,u){var h,p;u===void 0&&(u="&");var d=[];return ye(c,function(v,f){F(v)||F(f)||f==="undefined"||(h=encodeURIComponent((_=>_ instanceof File)(v)?v.name:v.toString()),p=encodeURIComponent(f),d[d.length]=p+"="+h)}),d.join(u)}(a);return l&&o.push(l),s+"?"+o.join("&")},Qn=(t,e)=>JSON.stringify(t,(n,r)=>typeof r=="bigint"?r.toString():r,e),Dl=t=>{if(t.tr)return t.tr;var{data:e,compression:n}=t;if(e){if(n===Rt.GZipJS){var r=Tm(function(o,l){var c=o.length;if(typeof TextEncoder<"u")return new TextEncoder().encode(o);for(var u=new pt(o.length+(o.length>>>1)),h=0,p=function(_){u[h++]=_},d=0;c>d;++d){if(h+5>u.length){var v=new pt(h+8+(c-d<<1));v.set(u),u=v}var f=o.charCodeAt(d);128>f?p(f):2048>f?(p(192|f>>>6),p(128|63&f)):f>55295&&57344>f?(p(240|(f=65536+(1047552&f)|1023&o.charCodeAt(++d))>>>18),p(128|f>>>12&63),p(128|f>>>6&63),p(128|63&f)):(p(224|f>>>12),p(128|f>>>6&63),p(128|63&f))}return Rd(u,0,h)}(Qn(e)),{mtime:0});return{contentType:Pd,body:r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength),estimatedSize:r.byteLength}}if(n===Rt.Base64){var s=function(o){return o&&btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(l,c)=>String.fromCharCode(parseInt(c,16))))}(Qn(e)),i=(o=>"data="+encodeURIComponent(typeof o=="string"?o:Qn(o)))(s);return{contentType:"application/x-www-form-urlencoded",body:i,estimatedSize:new Blob([i]).size}}var a=Qn(e);return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},Li=t=>{var e,n,r,s=Dl(t);return!s||(n=t.compression,r=ss(t.url,"compression"),n!==ll.GZipJS&&r!==ll.GZipJS&&r!=="gzip")||((e=s.body)instanceof ArrayBuffer?fa(new Uint8Array(e)):ArrayBuffer.isView(e)&&fa(new Uint8Array(e.buffer,e.byteOffset,e.byteLength)))?{url:t.url,encodedBody:s}:(Ls=!0,{url:Pm(t.url,"compression"),encodedBody:Dl(M({},t,{compression:void 0,tr:void 0}))})},$m=function(){var t=rt(function*(e){var n=Qn(e.data),r=yield function(i,a,o){return ga.apply(this,arguments)}(n,Ne.DEBUG,{rethrow:!0});if(!r)return e;var s=yield r.arrayBuffer();return M({},e,{tr:{contentType:Pd,body:s,estimatedSize:s.byteLength}})});return function(e){return t.apply(this,arguments)}}(),Ll=(t,e)=>li(t,{_:new Date().getTime().toString(),ver:Ne.JS_SDK_VERSION,compression:e}),js=[];ha&&js.push({transport:"fetch",method(t){var e,{url:n,encodedBody:r}=Li(t),{contentType:s,body:i,estimatedSize:a}=r??{},o=new Headers;ye(t.headers,function(u,h){o.append(h,u)}),s&&o.append("Content-Type",s);var l=null;if(il){var c=new il;l={signal:c.signal,timeout:setTimeout(()=>c.abort(),t.timeout)}}ha(n,M({method:(t==null?void 0:t.method)||"GET",headers:o,keepalive:t.method==="POST"&&52428.8>(a||0),body:i,signal:(e=l)==null?void 0:e.signal},t.fetchOptions)).then(u=>u.text().then(h=>{var p={statusCode:u.status,text:h};if(u.status===200)try{p.json=JSON.parse(h)}catch(d){U.error(d)}t.callback==null||t.callback(p)})).catch(u=>{U.error(u),t.callback==null||t.callback({statusCode:0,error:u})}).finally(()=>l?clearTimeout(l.timeout):null)}}),pa&&js.push({transport:"XHR",method(t){var e=new pa,{url:n,encodedBody:r}=Li(t);e.open(t.method||"GET",n,!0);var{contentType:s,body:i}=r??{};ye(t.headers,function(a,o){e.setRequestHeader(o,a)}),s&&e.setRequestHeader("Content-Type",s),t.timeout&&(e.timeout=t.timeout),t.disableXHRCredentials||(e.withCredentials=!0),e.onreadystatechange=()=>{if(e.readyState===4){var a={statusCode:e.status,text:e.responseText};if(e.status===200)try{a.json=JSON.parse(e.responseText)}catch{}t.callback==null||t.callback(a)}},e.send(i)}}),st!=null&&st.sendBeacon&&js.push({transport:"sendBeacon",method(t){try{var{url:e,encodedBody:n}=Li(t),r=li(e,{beacon:"1"}),{contentType:s,body:i}=n??{};if(!i)return;var a=i instanceof Blob?i:new Blob([i],{type:s});st.sendBeacon(r,a)}catch{}}});var Va=3e3;class Om{constructor(e,n){this.Xr=!0,this.ei=[],this.ti=$t((n==null?void 0:n.flush_interval_ms)||Va,250,5e3,U.createLogger("flush interval"),Va),this.ri=e}enqueue(e){this.ei.push(e),this.ii||this.ni()}unload(){this.si();var e=this.ei.length>0?this.oi():{},n=Object.values(e);[...n.filter(r=>r.url.indexOf("/e")===0),...n.filter(r=>r.url.indexOf("/e")!==0)].map(r=>{this.ri(M({},r,{transport:"sendBeacon"}))})}enable(){this.Xr=!1,this.ni()}ni(){var e=this;this.Xr||(this.ii=setTimeout(()=>{if(this.si(),this.ei.length>0){var n=this.oi(),r=function(){var i=n[s],a=new Date().getTime();i.data&&ae(i.data)&&ye(i.data,o=>{o.offset=Math.abs(o.timestamp-a),delete o.timestamp}),e.ri(i)};for(var s in n)r()}},this.ti))}si(){clearTimeout(this.ii),this.ii=void 0}oi(){var e={};return ye(this.ei,n=>{var r,s=n,i=(s?s.batchKey:null)||s.url;F(e[i])&&(e[i]=M({},s,{data:[]})),(r=e[i].data)==null||r.push(s.data)}),this.ei=[],e}}var Am=["retriesPerformedSoFar"];class Cm{constructor(e){this.ai=!1,this.ui=3e3,this.ei=[],this._instance=e,this.ei=[],this.li=!0,!F(w)&&"onLine"in w.navigator&&(this.li=w.navigator.onLine,this.hi=()=>{this.li=!0,this.ci()},this.di=()=>{this.li=!1},Ae(w,"online",this.hi),Ae(w,"offline",this.di))}get length(){return this.ei.length}retriableRequest(e){var{retriesPerformedSoFar:n}=e,r=mu(e,Am);Lt(n)&&(r.url=li(r.url,{retry_count:n})),this._instance._send_request(M({},r,{callback:s=>{s.statusCode===200||s.statusCode>=400&&500>s.statusCode||(n??0)>=10?r.callback==null||r.callback(s):this.vi(M({retriesPerformedSoFar:n},r))}}))}vi(e){var n=e.retriesPerformedSoFar||0;e.retriesPerformedSoFar=n+1;var r=function(a){var o=3e3*Math.pow(2,a),l=o/2,c=Math.min(18e5,o),u=Math.random()-.5;return Math.ceil(c+u*(c-l))}(n),s=Date.now()+r;this.ei.push({retryAt:s,requestOptions:e});var i="Enqueued failed request for retry in "+r;navigator.onLine||(i+=" (Browser is offline)"),U.warn(i),this.ai||(this.ai=!0,this.fi())}fi(){if(this.pi&&clearTimeout(this.pi),this.ei.length===0)return this.ai=!1,void(this.pi=void 0);this.pi=setTimeout(()=>{this.li&&this.ei.length>0&&this.ci(),this.fi()},this.ui)}ci(){var e=Date.now(),n=[],r=this.ei.filter(i=>e>i.retryAt||(n.push(i),!1));if(this.ei=n,r.length>0)for(var{requestOptions:s}of r)this.retriableRequest(s)}unload(){for(var{requestOptions:e}of(this.pi&&(clearTimeout(this.pi),this.pi=void 0),this.ai=!1,F(w)||(this.hi&&(w.removeEventListener("online",this.hi),this.hi=void 0),this.di&&(w.removeEventListener("offline",this.di),this.di=void 0)),this.ei))try{this._instance._send_request(M({},e,{transport:"sendBeacon"}))}catch(n){U.error(n)}this.ei=[]}}class Im{constructor(e){this.gi=()=>{var n,r,s,i;this.mi||(this.mi={});var a=this.scrollElement(),o=this.scrollY(),l=a?Math.max(0,a.scrollHeight-a.clientHeight):0,c=o+((a==null?void 0:a.clientHeight)||0),u=(a==null?void 0:a.scrollHeight)||0;this.mi.lastScrollY=Math.ceil(o),this.mi.maxScrollY=Math.max(o,(n=this.mi.maxScrollY)!==null&&n!==void 0?n:0),this.mi.maxScrollHeight=Math.max(l,(r=this.mi.maxScrollHeight)!==null&&r!==void 0?r:0),this.mi.lastContentY=c,this.mi.maxContentY=Math.max(c,(s=this.mi.maxContentY)!==null&&s!==void 0?s:0),this.mi.maxContentHeight=Math.max(u,(i=this.mi.maxContentHeight)!==null&&i!==void 0?i:0)},this._instance=e}get yi(){return this._instance.config.scroll_root_selector}getContext(){return this.mi}resetContext(){var e=this.mi;return setTimeout(this.gi,0),e}startMeasuringScrollPosition(){Ae(w,"scroll",this.gi,{capture:!0}),Ae(w,"scrollend",this.gi,{capture:!0}),Ae(w,"resize",this.gi)}scrollElement(){if(!this.yi)return w==null?void 0:w.document.documentElement;var e=ae(this.yi)?this.yi:[this.yi];for(var n of e){var r=w==null?void 0:w.document.querySelector(n);if(r)return r}}bi(e){var n=e==="y"?"scrollTop":"scrollLeft";if(this.yi){var r=this.scrollElement();return r&&r[n]||0}return w?e==="y"?w.scrollY||w.pageYOffset||w.document.documentElement.scrollTop||0:w.scrollX||w.pageXOffset||w.document.documentElement.scrollLeft||0:0}scrollY(){return this.bi("y")}scrollX(){return this.bi("x")}}var Mm=t=>yd(t==null?void 0:t.config.mask_personal_data_properties,t==null?void 0:t.config.custom_personal_data_properties);class jl{constructor(e,n,r,s){this.wi=i=>{var a=this.xi();if(!a||a.sessionId!==i){var o={sessionId:i,props:this.Si(this._instance)};this.ki.register({[ja]:o})}},this._instance=e,this.Ci=n,this.ki=r,this.Si=s||Mm,this.Ci.onSessionId(this.wi)}xi(){return this.ki.props[ja]}getSetOnceProps(){var e,n=(e=this.xi())==null?void 0:e.props;return n?"r"in n?_d(n):{$referring_domain:n.referringDomain,$pathname:n.initialPathName,utm_source:n.utm_source,utm_campaign:n.utm_campaign,utm_medium:n.utm_medium,utm_content:n.utm_content,utm_term:n.utm_term}:{}}getSessionProps(){var e={};return ye(_o(this.getSetOnceProps()),(n,r)=>{r==="$current_url"&&(r="url"),e["$session_entry_"+ma(r)]=n}),e}}class To{constructor(){this.Ii={}}on(e,n){return this.Ii[e]||(this.Ii[e]=[]),this.Ii[e].push(n),()=>{this.Ii[e]=this.Ii[e].filter(r=>r!==n)}}emit(e,n){for(var r of this.Ii[e]||[])r(n);for(var s of this.Ii["*"]||[])s(e,n)}}var ji=Se("[SessionId]");class Fl{on(e,n){return this.Ti.on(e,n)}constructor(e,n,r){var s;if(this.Ei=null,this.Mi=[],this.Ri=void 0,this.Ti=new To,this.Pi=(c,u)=>!(!Lt(c)||!Lt(u))&&Math.abs(c-u)>this.sessionTimeoutMs,!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance");if(e.config.cookieless_mode===qt)throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');this.qt=e.config,this.ki=e.persistence,this.Oi=void 0,this.Li=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this.Fi=n||Xt,this.Ai=r||Xt;var i=this.qt.persistence_name||this.qt.token;if(this._sessionTimeoutMs=1e3*$t(this.qt.session_idle_timeout_seconds||1800,60,36e3,ji.createLogger("session_idle_timeout_seconds"),1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this.Ni(),this.Di="ph_"+i+"_window_id",this.$i="ph_"+i+"_primary_window_exists",this.qi()){var a=Fe.F(this.Di),o=Fe.F(this.$i);a&&!o?this.Oi=a:Fe.q(this.Di),Fe.N(this.$i,!0)}if((s=this.qt.bootstrap)!=null&&s.sessionID)try{var l=(c=>{var u=this.qt.bootstrap.sessionID.replace(/-/g,"");if(u.length!==32)throw new Error("Not a valid UUID");if(u[12]!=="7")throw new Error("Not a UUIDv7");return parseInt(u.substring(0,12),16)})();this.ji(this.qt.bootstrap.sessionID,new Date().getTime(),l)}catch(c){ji.error("Invalid sessionID in bootstrap",c)}this.Hi()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return F(this.Mi)&&(this.Mi=[]),this.Mi.push(e),this.Li&&e(this.Li,this.Oi),()=>{this.Mi=this.Mi.filter(n=>n!==e)}}qi(){return this.qt.persistence!=="memory"&&!this.ki.Tr&&Fe.O()}Ui(e){e!==this.Oi&&(this.Oi=e,this.qi()&&Fe.N(this.Di,e))}Bi(){return this.Oi?this.Oi:this.qi()?Fe.F(this.Di):null}zi(e){var n=this.Ei;return!at(n)&&!at(e)&&5e3>Math.abs(e-n)}ji(e,n,r){var s=n!==this._sessionActivityTimestamp,i=!(e!==this.Li||r!==this._sessionStartTimestamp);this._sessionStartTimestamp=r,this._sessionActivityTimestamp=n,this.Li=e,i&&!s||i&&this.zi(n)||(this.Ei=n,this.ki.register({[Kn]:[n,e,r]}))}Vi(){var e,n=(e=this.qt)==null?void 0:e.persistence_save_debounce_ms;return Lt(n)&&n>0}Wi(){var e;if(!at(this._sessionActivityTimestamp)&&this._sessionActivityTimestamp!==this.Ei){this.Vi()?this.ki.refreshKey(Kn):(this.ki.flush(),this.ki.load());var[,n,r]=this.Zi();n===this.Li&&r===this._sessionStartTimestamp&&(this.Ei=this._sessionActivityTimestamp,this.ki.register({[Kn]:[this._sessionActivityTimestamp,(e=this.Li)!==null&&e!==void 0?e:null,this._sessionStartTimestamp]}),this.ki.flush())}}Gi(){var[e]=this.Zi(),n=Lt(e)?e:0,r=Lt(this._sessionActivityTimestamp)?this._sessionActivityTimestamp:0;return Math.max(n,r)}Zi(){var e=this.ki.props[Kn];return ae(e)&&e.length===2&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this.Ei=null,clearTimeout(this.Qi),this.Qi=void 0,this.ji(null,null,null)}destroy(){this.Wi(),clearTimeout(this.Qi),this.Qi=void 0,this.Ri&&w&&(w.removeEventListener(Xs,this.Ri,{capture:!1}),this.Ri=void 0),this.Mi=[]}Hi(){this.Ri=()=>{this.Wi(),this.qi()&&Fe.q(this.$i)},Ae(w,Xs,this.Ri,{capture:!1})}checkAndGetSessionAndWindowId(e,n){if(e===void 0&&(e=!1),n===void 0&&(n=null),this.qt.cookieless_mode===qt)throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');var r=n||new Date().getTime(),[,s,i]=this.Zi(),a=this.Gi(),o=this.Bi(),l=Lt(i)&&Math.abs(r-i)>864e5,c=!1,u=!s,h=!u&&!e&&this.Pi(r,a);u||h||l?(s=this.Fi(),o=this.Ai(),ji.info("new session ID generated",{sessionId:s,windowId:o,changeReason:{noSessionId:u,activityTimeout:h,sessionPastMaximumLength:l}}),i=r,c=!0):o||(o=this.Ai(),c=!0);var p=Lt(a)&&e&&!l?a:r,d=Lt(i)?i:new Date().getTime();return this.Ui(o),this.ji(s,p,d),e||this.Ni(),c&&this.Mi.forEach(v=>v(s,o,c?{noSessionId:u,activityTimeout:h,sessionPastMaximumLength:l}:void 0)),{sessionId:s,windowId:o,sessionStartTimestamp:d,changeReason:c?{noSessionId:u,activityTimeout:h,sessionPastMaximumLength:l}:void 0,lastActivityTimestamp:a}}Ni(){clearTimeout(this.Qi),this.Qi=setTimeout(()=>{var e=this.Gi();if(this.Pi(new Date().getTime(),e)){var n=this.Li;this.resetSessionId(),this.Ti.emit("forcedIdleReset",{idleSessionId:n})}},1.1*this.sessionTimeoutMs)}}var $d=function(t,e){if(!t)return!1;var n=t.userAgent;if(n&&ul(n,e))return!0;try{var r=t==null?void 0:t.userAgentData;if(r!=null&&r.brands&&r.brands.some(s=>ul(s==null?void 0:s.brand,e)))return!0}catch{}return!!t.webdriver},ii=function(t,e){if(!function(n){try{new RegExp(n)}catch{return!1}return!0}(e))return!1;try{return new RegExp(e).test(t)}catch{return!1}};function Ul(t,e,n){return Qn({distinct_id:t,userPropertiesToSet:e,userPropertiesToSetOnce:n})}var Od={exact:(t,e)=>e.some(n=>t.some(r=>n===r)),is_not:(t,e)=>e.every(n=>t.every(r=>n!==r)),regex:(t,e)=>e.some(n=>t.some(r=>ii(n,r))),not_regex:(t,e)=>e.every(n=>t.every(r=>!ii(n,r))),icontains:(t,e)=>e.map(Rs).some(n=>t.map(Rs).some(r=>n.includes(r))),not_icontains:(t,e)=>e.map(Rs).every(n=>t.map(Rs).every(r=>!n.includes(r))),gt:(t,e)=>e.some(n=>{var r=parseFloat(n);return!isNaN(r)&&t.some(s=>r>parseFloat(s))}),lt:(t,e)=>e.some(n=>{var r=parseFloat(n);return!isNaN(r)&&t.some(s=>r<parseFloat(s))})},Rs=t=>t.toLowerCase();function Ad(t,e){return!t||Object.entries(t).every(n=>{var[r,s]=n,i=e==null?void 0:e[r];if(F(i)||at(i))return!1;var a=[String(i)],o=Od[s.operator];return!!o&&o(s.values,a)})}var Ka="custom",ql="i.posthog.com",Nm=/^\/static\//;class Dm{constructor(e){this.Ji={},this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"");return e==="https://app.posthog.com"?"https://us.i.posthog.com":e}get flagsApiHost(){var e=this.instance.config.flags_api_host;return e?e.trim().replace(/\/$/,""):this.apiHost}get uiHost(){var e,n=(e=this.instance.config.ui_host)==null?void 0:e.replace(/\/$/,"");return n||(n=this.apiHost.replace("."+ql,".posthog.com")),n==="https://app.posthog.com"?"https://us.posthog.com":n}get region(){return this.Ji[this.apiHost]||(this.Ji[this.apiHost]=/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?"us":/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?"eu":Ka),this.Ji[this.apiHost]}Ki(e){var n=this.instance.config.__preview_external_dependency_versioned_paths;if(typeof n=="string"&&Nm.test(e))return n.trim().replace(/\/$/,"")||void 0}endpointFor(e,n){if(n===void 0&&(n=""),n&&(n=n[0]==="/"?n:"/"+n),e==="ui")return this.uiHost+n;if(e==="flags")return this.flagsApiHost+n;if(e==="assets"){var r=this.Ki(n);if(r)return""+r+n}if(this.region===Ka)return this.apiHost+n;var s=ql+n;switch(e){case"assets":return"https://"+this.region+"-assets."+s;case"api":return"https://"+this.region+"."+s}}}var ve=Se("[Surveys]"),Ya="seenSurvey_",Lm=[Ii.Popover,Ii.Widget,Ii.API],jm={ignoreConditions:!1,ignoreDelay:!1,displayType:za.Popover},Fm=Se("[PostHog ExternalIntegrations]"),Um={intercom:"intercom-integration",crispChat:"crisp-chat-integration"};class qm{constructor(e){this._instance=e}lr(e,n){var r;(r=K.__PosthogExtensions__)==null||r.loadExternalDependency==null||r.loadExternalDependency(this._instance,e,s=>{if(s)return Fm.error("failed to load script",s);n()})}startIfEnabledOrStop(){var e=this,n=function(a){var o,l,c;!s||(o=K.__PosthogExtensions__)!=null&&(o=o.integrations)!=null&&o[a]||e.lr(Um[a],()=>{var u;(u=K.__PosthogExtensions__)==null||(u=u.integrations)==null||(u=u[a])==null||u.start(e._instance)}),!s&&(l=K.__PosthogExtensions__)!=null&&(l=l.integrations)!=null&&l[a]&&((c=K.__PosthogExtensions__)==null||(c=c.integrations)==null||(c=c[a])==null||c.stop())};for(var[r,s]of Object.entries((i=this._instance.config.integrations)!==null&&i!==void 0?i:{})){var i;n(r)}}}var zn,Qr={},Fi=0,Qa=()=>{},Hl='Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',Mr="Surveys module not available",Bl="sanitize_properties is deprecated. Use before_send instead",Cd="Invalid value for property_denylist config: ",Vn="posthog",Id=!Rm&&(Qe==null?void 0:Qe.indexOf("MSIE"))===-1&&(Qe==null?void 0:Qe.indexOf("Mozilla"))===-1,zl=t=>{var e;return M({api_host:"https://us.i.posthog.com",flags_api_host:null,ui_host:null,token:"",autocapture:!0,cross_subdomain_cookie:Jg(H==null?void 0:H.location),persistence:"localStorage+cookie",persistence_name:"",cookie_persisted_properties:[],loaded:Qa,save_campaign_params:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageleave:"if_capture_pageview",defaults:t??"unset",__preview_deferred_init_extensions:!1,__preview_external_dependency_versioned_paths:!1,__preview_cookie_wins_on_conflict:!1,debug:je&&Ee(je==null?void 0:je.search)&&je.search.indexOf("__posthog_debug=true")!==-1||!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,disable_surveys_automatic_display:!1,disable_conversations:!1,disable_product_tours:!1,disable_external_dependency_loading:!1,enable_recording_console_log:void 0,secure_cookie:(w==null||(e=w.location)==null?void 0:e.protocol)==="https:",ip:!1,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",consent_persistence_name:null,opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},request_batching:!0,properties_string_max_length:65535,mask_all_element_attributes:!1,mask_all_text:!1,mask_personal_data_properties:!1,custom_personal_data_properties:[],advanced_disable_flags:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_only_evaluate_survey_feature_flags:!1,advanced_feature_flags_dedup_per_session:!1,advanced_enable_surveys:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,surveys_request_timeout_ms:1e4,on_request_error(n){U.error("Bad HTTP status: "+n.statusCode+" "+n.text)},get_device_id:n=>n,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:Ha,before_send:void 0,request_queue_config:{flush_interval_ms:Va},error_tracking:{},_onCapture:Qa,__preview_eager_load_replay:!1},(n=>({rageclick:n&&n>="2026-05-30"?{content_ignorelist:rm,ignore_text_selection:!0}:!n||"2025-11-30">n||{content_ignorelist:!0},capture_pageview:!n||"2025-05-24">n||"history_change",session_recording:n&&n>="2025-11-30"?{strictMinimumDuration:!0}:{},external_scripts_inject_target:n&&n>="2026-01-30"?"head":"body",internal_or_test_user_hostname:n&&n>="2026-01-30"?/^(localhost|127\.0\.0\.1)$/:void 0,persistence_save_debounce_ms:n&&n>="2026-05-30"?250:0,split_storage:!(!n||"2026-05-30">n)}))(t))},Hm=[["process_person","person_profiles"],["xhr_headers","request_headers"],["cookie_name","persistence_name"],["disable_cookie","disable_persistence"],["store_google","save_campaign_params"],["verbose","debug"]],Gl=t=>{var e={};for(var[n,r]of Hm)F(t[n])||(e[r]=t[n]);var s=we({},e,t);return ae(t.property_blacklist)&&(F(t.property_denylist)?s.property_denylist=t.property_blacklist:ae(t.property_denylist)?s.property_denylist=[...t.property_blacklist,...t.property_denylist]:U.error(Cd+t.property_denylist)),s};class Bm{constructor(){this.__forceAllowLocalhost=!1}get Yi(){return this.__forceAllowLocalhost}set Yi(e){U.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class ht{Xi(e,n){if(e){var r=this.en.indexOf(e);r!==-1&&this.en.splice(r,1)}return this.en.push(n),n.initialize==null||n.initialize(),n}tn(){return this.config.cookieless_mode===qt||this.config.cookieless_mode===xn&&this.consent.isRejected()}get decideEndpointWasHit(){var e,n;return(e=(n=this.featureFlags)==null?void 0:n.hasLoadedFlags)!==null&&e!==void 0&&e}get flagsEndpointWasHit(){var e,n;return(e=(n=this.featureFlags)==null?void 0:n.hasLoadedFlags)!==null&&e!==void 0&&e}constructor(){var e;this.webPerformance=new Bm,this.rn=!1,this.version=Ne.LIB_VERSION,this.nn=new To,this.en=[],this._calculate_event_properties=this.calculateEventProperties.bind(this),this.config=zl(),this.SentryIntegration=hm,this.sentryIntegration=r=>function(s,i){var a=fd(s,i);return{name:pd,processEvent:o=>a(o)}}(this,r),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this.sn=!1,this.an=null,this.un=null,this.ln=null,this.scrollManager=new Im(this),this.pageViewManager=new Pl(this),this.rateLimiter=new wm(this),this.requestRouter=new Dm(this),this.consent=new Zg(this),this.externalIntegrations=new qm(this);var n=(e=ht.__defaultExtensionClasses)!==null&&e!==void 0?e:{};this.featureFlags=n.featureFlags&&new n.featureFlags(this),this.toolbar=n.toolbar&&new n.toolbar(this),this.surveys=n.surveys&&new n.surveys(this),this.conversations=n.conversations&&new n.conversations(this),this.logs=n.logs&&new n.logs(this),this.experiments=n.experiments&&new n.experiments(this),this.exceptions=n.exceptions&&new n.exceptions(this),this.people={set:(r,s,i)=>{var a=Ee(r)?{[r]:s}:r;this.setPersonProperties(a),i==null||i({})},set_once:(r,s,i)=>{var a=Ee(r)?{[r]:s}:r;this.setPersonProperties(void 0,a),i==null||i({})}},this.on("eventCaptured",r=>U.info('send "'+(r==null?void 0:r.event)+'"',r))}init(e,n,r){if(r&&r!==Vn){var s,i=(s=Qr[r])!==null&&s!==void 0?s:new ht;return i._init(e,n,r),Qr[r]=i,Qr[Vn][r]=i,i}return this._init(e,n,r)}_init(e,n,r){var s,i;n===void 0&&(n={});var a=Ee(e)?e.trim():"";if(!a)return U.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this;if(this.__loaded)return console.warn("[PostHog.js]","You have already initialized PostHog! Re-initializing is a no-op"),this;this.__loaded=!0,this.config={},n.debug=this.hn(n.debug),this.cn=n,this.dn=[],n.person_profiles?this.un=n.person_profiles:n.process_person&&(this.un=n.process_person);var o=zl(n.defaults),l=Gl(n),c=we({},o,l,{name:r,token:a});Pe(o.rageclick)&&Pe(l.rageclick)&&(c.rageclick=we({},o.rageclick,l.rageclick)),this.set_config(c),this.config.on_xhr_error&&U.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=n.disable_compression?void 0:Rt.GZipJS;var u=this.vn();this.persistence=new Ci(this.config,u),this.sessionPersistence=this.config.persistence==="sessionStorage"||this.config.persistence==="memory"?this.persistence:new Ci(M({},this.config,{persistence:"sessionStorage"}),u,!1);var h=M({},this.persistence.props),p=M({},this.sessionPersistence.props);this.register({$initialization_time:new Date().toISOString()}),this.fn=new Om(L=>this.pn(L),this.config.request_queue_config),this.gn=new Cm(this),this.__request_queue=[];var d=this.tn();if(d||(this.sessionManager=new Fl(this),this.sessionPropsManager=new jl(this,this.sessionManager,this.persistence)),this.config.__preview_deferred_init_extensions?(U.info("Deferring extension initialization to improve startup performance"),setTimeout(()=>{this.mn(d)},0)):(U.info("Initializing extensions synchronously"),this.mn(d)),Ne.DEBUG=Ne.DEBUG||this.config.debug,Ne.DEBUG&&U.info("Starting in debug mode",{this:this,config:n,thisC:M({},this.config),p:h,s:p}),!this.config.identity_distinct_id||(s=n.bootstrap)!=null&&s.distinctID||(n.bootstrap=M({},n.bootstrap,{distinctID:this.config.identity_distinct_id,isIdentifiedID:!0})),((i=n.bootstrap)==null?void 0:i.distinctID)!==void 0){var v=n.bootstrap.distinctID,f=this.get_distinct_id(),_=this.persistence.get_property(yt);if(n.bootstrap.isIdentifiedID&&f!=null&&f!==v&&_===Un)this.identify(v);else if(n.bootstrap.isIdentifiedID&&f!=null&&f!==v&&_===qn)U.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");else{var k=this.config.get_device_id(Xt()),C=n.bootstrap.isIdentifiedID?k:v;this.persistence.set_property(yt,n.bootstrap.isIdentifiedID?qn:Un),this.register({distinct_id:v,$device_id:C})}}if(d)this.register_once({distinct_id:ws,$device_id:null},"");else if(!this.get_distinct_id()){var P=this.config.get_device_id(Xt());this.register_once({distinct_id:P,$device_id:P},""),this.persistence.set_property(yt,Un)}return Ae(w,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this),{passive:!1}),n.segment?function(L,$){var O=L.config.segment;if(!O)return $();(function(N,T){var x=N.config.segment;if(!x)return T();var S=D=>{var V=()=>D.anonymousId()||Xt();N.config.get_device_id=V,D.id()&&(N.register({distinct_id:D.id(),$device_id:V()}),N.persistence.set_property(yt,qn)),T()},z=x.user();"then"in z&&Ft(z.then)?z.then(S):S(z)})(L,()=>{O.register((N=>{Promise&&Promise.resolve||Ai.warn("This browser does not have Promise support, and can not use the segment integration");var T=(x,S)=>{if(!S)return x;x.event.userId||x.event.anonymousId===N.get_distinct_id()||(Ai.info("No userId set, resetting PostHog"),N.reset()),x.event.userId&&x.event.userId!==N.get_distinct_id()&&(Ai.info("UserId set, identifying with PostHog"),N.identify(x.event.userId));var z=N.calculateEventProperties(S,x.event.properties);return x.event.properties=Object.assign({},z,x.event.properties),x};return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:x=>T(x,x.event.event),page:x=>T(x,Wn),identify:x=>T(x,Pi),screen:x=>T(x,"$screen")}})(L)).then(()=>{$()})})}(this,()=>this.yn()):this.yn(),Ft(this.config._onCapture)&&this.config._onCapture!==Qa&&(U.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",L=>this.config._onCapture(L.event,L))),this.config.ip&&U.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'),this}mn(e){var n,r,s,i,a,o,l,c=performance.now(),u=M({},ht.__defaultExtensionClasses,this.config.__extensionClasses),h=[];u.featureFlags&&this.en.push(this.featureFlags=(n=this.featureFlags)!==null&&n!==void 0?n:new u.featureFlags(this)),u.exceptions&&this.en.push(this.exceptions=(r=this.exceptions)!==null&&r!==void 0?r:new u.exceptions(this)),u.historyAutocapture&&this.en.push(this.historyAutocapture=new u.historyAutocapture(this)),u.tracingHeaders&&this.en.push(this.tracingHeaders=new u.tracingHeaders(this)),u.siteApps&&this.en.push(this.siteApps=new u.siteApps(this)),u.sessionRecording&&!e&&this.en.push(this.sessionRecording=new u.sessionRecording(this)),this.config.disable_scroll_properties||h.push(()=>{this.scrollManager.startMeasuringScrollPosition()}),u.autocapture&&this.en.push(this.autocapture=new u.autocapture(this)),u.surveys&&this.en.push(this.surveys=(s=this.surveys)!==null&&s!==void 0?s:new u.surveys(this)),u.logs&&this.en.push(this.logs=(i=this.logs)!==null&&i!==void 0?i:new u.logs(this)),u.conversations&&this.en.push(this.conversations=(a=this.conversations)!==null&&a!==void 0?a:new u.conversations(this)),u.productTours&&this.en.push(this.productTours=new u.productTours(this)),u.heatmaps&&this.en.push(this.heatmaps=new u.heatmaps(this)),u.webVitalsAutocapture&&this.en.push(this.webVitalsAutocapture=new u.webVitalsAutocapture(this)),u.exceptionObserver&&this.en.push(this.exceptionObserver=new u.exceptionObserver(this)),u.deadClicksAutocapture&&this.en.push(this.deadClicksAutocapture=new u.deadClicksAutocapture(this,dm)),u.toolbar&&this.en.push(this.toolbar=(o=this.toolbar)!==null&&o!==void 0?o:new u.toolbar(this)),u.experiments&&this.en.push(this.experiments=(l=this.experiments)!==null&&l!==void 0?l:new u.experiments(this)),this.en.forEach(p=>{p.initialize&&h.push(()=>{p.initialize==null||p.initialize()})}),h.push(()=>{if(this.bn){var p=this.bn;this.bn=void 0,this.Qr(p)}}),this._n(h,c)}_n(e,n){for(;e.length>0;){if(this.config.__preview_deferred_init_extensions&&performance.now()-n>=30&&e.length>0)return void setTimeout(()=>{this._n(e,n)},0);var r=e.shift();if(r)try{r()}catch(i){U.error("Error initializing extension:",i)}}var s=Math.round(performance.now()-n);this.register_for_session({[Qu]:this.config.__preview_deferred_init_extensions?"deferred":"synchronous",[Xu]:s}),this.config.__preview_deferred_init_extensions&&U.info("PostHog extensions initialized ("+s+"ms)")}Qr(e){var n;if(!H||!H.body)return U.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout(()=>{this.Qr(e)},500);this.config.__preview_deferred_init_extensions&&(this.bn=e),this.wn=e,this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=ee(e.supportedCompression,Rt.GZipJS)?Rt.GZipJS:ee(e.supportedCompression,Rt.Base64)?Rt.Base64:void 0),(n=e.analytics)!=null&&n.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this.un?this.un:Ha}),this.en.forEach(r=>r.onRemoteConfig==null?void 0:r.onRemoteConfig(e))}yn(){try{this.config.loaded(this)}catch(r){U.critical("`loaded` function failed",r)}if(this.xn(),this.config.internal_or_test_user_hostname&&je!=null&&je.hostname){var e=je.hostname,n=this.config.internal_or_test_user_hostname;(typeof n=="string"?e===n:n.test(e))&&this.setInternalOrTestUser()}this.config.capture_pageview&&setTimeout(()=>{(this.consent.isOptedIn()||this.tn())&&this.Sn()},1),this.kn=new xd(this),this.kn.load()}xn(){var e;this.is_capturing()&&this.config.request_batching&&((e=this.fn)==null||e.enable())}_dom_loaded(){this.is_capturing()&&xs(this.__request_queue,e=>this.pn(e)),this.__request_queue=[],this.xn()}_handle_unload(){var e,n,r,s;(e=this.surveys)==null||e.handlePageUnload(),this.config.request_batching?(this.Cn()&&this.capture(Ri),(n=this.logs)==null||n.flushLogs("sendBeacon"),(r=this.fn)==null||r.unload(),(s=this.gn)==null||s.unload()):this.Cn()&&this.capture(Ri,null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(Id?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=li(e.url,{ip:this.config.ip?1:0}),e.headers=M({},this.config.request_headers,e.headers),e.compression=e.compression==="best-available"?this.compression:e.compression,e.disableXHRCredentials=this.config.__preview_disable_xhr_credentials,this.config.__preview_disable_beacon&&(e.disableTransport=["sendBeacon"]),e.fetchOptions=e.fetchOptions||this.config.fetch_options,(n=>{var r,s,i,a=M({},n);a.timeout=a.timeout||6e4,a.url=Ll(a.url,a.compression);var o=(r=a.transport)!==null&&r!==void 0?r:"fetch",l=js.filter(u=>!a.disableTransport||!u.transport||!a.disableTransport.includes(u.transport)),c=(s=(i=function(u,h){for(var p=0;u.length>p;p++)if(u[p].transport===o)return u[p]}(l))==null?void 0:i.method)!==null&&s!==void 0?s:l[0].method;if(!c)throw new Error("No available transport method");o!=="sendBeacon"&&a.data&&a.compression===Rt.GZipJS&&tg&&!Ls?$m(a).then(u=>{c(u)}).catch(u=>{if(cl(u))return Ls=!0,void c(M({},a,{compression:void 0,url:Ll(n.url,void 0)}));(h=>{if(!h||typeof h!="object")return!1;var p="name"in h?String(h.name):"";return cl(h)||p===vu})(u)&&(Ls=!0),c(a)}):c(a)})(M({},e,{callback:n=>{var r,s;this.rateLimiter.checkForLimiting(n),400>n.statusCode||(r=(s=this.config).on_request_error)==null||r.call(s,n),e.callback==null||e.callback(n)}}))))}pn(e){this.gn?this.gn.retriableRequest(e):this._send_request(e)}_execute_array(e){Fi++;try{var n,r=[],s=[],i=[];xs(e,o=>{if(o)if(ae(n=o[0]))i.push(o);else if(Ft(o))try{o.call(this)}catch(l){U.error("Error executing queued PostHog call",o,l)}else ae(o)&&n==="alias"?r.push(o):ae(o)&&n.indexOf("capture")!==-1&&Ft(this[n])?i.push(o):s.push(o)});var a=function(o,l){xs(o,function(c){try{if(ae(c[0])){var u=l;ye(c,function(h){u=u[h[0]].apply(u,h.slice(1))})}else l[c[0]].apply(l,c.slice(1))}catch(h){U.error("Error executing queued PostHog call",c,h)}})};a(r,this),a(s,this),a(i,this)}finally{Fi--}}push(e){if(Fi>0&&ae(e)&&Ee(e[0])){var n=ht.prototype[e[0]];Ft(n)&&n.apply(this,e.slice(1))}else this._execute_array([e])}capture(e,n,r){var s,i,a,o,l;if(this.__loaded&&this.persistence&&this.sessionPersistence&&this.fn){if(this.is_capturing())if(!F(e)&&Ee(e)){var c=!this.config.opt_out_useragent_filter&&this._is_bot();if(!c||this.config.__preview_capture_bot_pageviews){var u=r!=null&&r.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext();if(u==null||!u.isRateLimited){n!=null&&n.$current_url&&!Ee(n==null?void 0:n.$current_url)&&(U.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."),n==null||delete n.$current_url),e!=="$exception"||r!=null&&r.In||U.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."),this.sessionPersistence.update_search_keyword(),this.config.save_campaign_params&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.save_campaign_params||this.config.save_referrer)&&this.persistence.set_initial_person_info();var h=new Date,p=(r==null?void 0:r.timestamp)||h,d=(r==null?void 0:r.uuid)||Xt(),v={uuid:d,event:e,properties:this.calculateEventProperties(e,n||{},p,d)};e===Wn&&this.config.__preview_capture_bot_pageviews&&c&&(v.event="$bot_pageview",v.properties.$browser_type="bot"),u&&(v.properties.$lib_rate_limit_remaining_tokens=u.remainingTokens),r!=null&&r.$set&&(v.$set=r==null?void 0:r.$set);var f,_,k,C=this.Tn(r==null?void 0:r.$set_once,e!==vl,e===Pi);if(C&&(v.$set_once=C),r!=null&&r._noTruncate||(i=this.config.properties_string_max_length,a=v,o=x=>Ee(x)?x.slice(0,i):x,l=new Set,v=function x(S,z){return S!==Object(S)?o?o(S):S:l.has(S)?void 0:(l.add(S),ae(S)?(D=[],xs(S,V=>{D.push(x(V))})):(D={},ye(S,(V,X)=>{l.has(V)||(D[X]=x(V))})),D);var D}(a)),v.timestamp=p,F(r==null?void 0:r.timestamp)||(v.properties.$event_time_override_provided=!0,v.properties.$event_time_override_system_time=h),e===zr.DISMISSED||e===zr.SENT){var P=n==null?void 0:n[Mi.SURVEY_ID],L=n==null?void 0:n[Mi.SURVEY_ITERATION];(x=>{try{var S=(z=>((D,V)=>{var X=""+Ya+V.id;return V.current_iteration&&V.current_iteration>0&&(X=""+Ya+V.id+"_"+V.current_iteration),X})(0,z))(x);if(localStorage.getItem(S))return;localStorage.setItem(S,"true")}catch(z){ve.error("Failed to persist survey seen state",z)}})({id:P,current_iteration:L}),v.$set=M({},v.$set,{[(f={id:P,current_iteration:L},_=e===zr.SENT?"responded":"dismissed",k="$survey_"+_+"/"+f.id,f.current_iteration&&f.current_iteration>0&&(k="$survey_"+_+"/"+f.id+"/"+f.current_iteration),k)]:!0})}else e===zr.SHOWN&&(v.$set=M({},v.$set,{[Mi.SURVEY_LAST_SEEN_DATE]:new Date().toISOString()}));if(e===_m.SHOWN){var $=n==null?void 0:n[Ol.TOUR_TYPE];$&&(v.$set=M({},v.$set,{[Ol.TOUR_LAST_SEEN_DATE+"/"+$]:new Date().toISOString()}))}var O=M({},v.properties.$set,v.$set);if(ln(O)||this.setPersonPropertiesForFlags(O),!oe(this.config.before_send)){var N=this.En(v);if(!N)return;v=N}this.nn.emit("eventCaptured",v);var T={method:"POST",url:(s=r==null?void 0:r._url)!==null&&s!==void 0?s:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:v,compression:"best-available",batchKey:r==null?void 0:r._batchKey,transport:r==null?void 0:r.transport};return!this.config.request_batching||r&&(r==null||!r._batchKey)||r!=null&&r.send_instantly?this.pn(T):this.fn.enqueue(T),v}U.critical("This capture call is ignored due to client rate limiting.")}}else U.error("No event name provided to posthog.capture")}else U.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",n=>e(n.event,n))}calculateEventProperties(e,n,r,s,i){if(r=r||new Date,!this.persistence||!this.sessionPersistence)return n;var a=i?void 0:this.persistence.remove_event_timer(e),o=M({},n);if(o.token=this.config.token,o.$config_defaults=this.config.defaults,this.tn()&&(o.$cookieless_mode=!0),e==="$snapshot"){var l=M({},this.persistence.properties(),this.sessionPersistence.properties());return o.distinct_id=l.distinct_id,(!Ee(o.distinct_id)&&!Ke(o.distinct_id)||va(o.distinct_id))&&U.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),o}var c,u=function(k,C){var P,L,$,O;if(!Qe)return{};var N,T,x,S,z,D,V,X,G,te=k?[...br,...C||[]]:[],[le,fe]=function(m){for(var R=0;pl.length>R;R++){var[A,j]=pl[R],B=A.exec(m),Y=B&&(Ft(j)?j(B,m):j);if(Y)return Y}return["",""]}(Qe),J=(N=typeof navigator<"u"?navigator:void 0)!=null&&N.brave?{brave:!0}:{},y=we(_o({$os:le,$os_version:fe,$browser:Fu(Qe,navigator.vendor,J),$device:fl(Qe),$device_type:(x=Qe,S={userAgentDataPlatform:(P=navigator)==null||(P=P.userAgentData)==null?void 0:P.platform,maxTouchPoints:(L=navigator)==null?void 0:L.maxTouchPoints,screenWidth:w==null||($=w.screen)==null?void 0:$.width,screenHeight:w==null||(O=w.screen)==null?void 0:O.height,devicePixelRatio:w==null?void 0:w.devicePixelRatio},G=fl(x),G===xu||G===wu||G==="Kobo"||G==="Kindle Fire"||G===Nu?gr:G===es||G===nr||G===ts||G===ya?"Console":G===Eu?"Wearable":G?ot:(S==null?void 0:S.userAgentDataPlatform)==="Android"&&((z=S==null?void 0:S.maxTouchPoints)!==null&&z!==void 0?z:0)>0?600>Math.min((D=S==null?void 0:S.screenWidth)!==null&&D!==void 0?D:0,(V=S==null?void 0:S.screenHeight)!==null&&V!==void 0?V:0)/((X=S==null?void 0:S.devicePixelRatio)!==null&&X!==void 0?X:1)?ot:gr:"Desktop"),$timezone:wd(),$timezone_offset:vm()}),{$current_url:is(je==null?void 0:je.href,te,as),$host:je==null?void 0:je.host,$pathname:je==null?void 0:je.pathname,$raw_user_agent:Qe.length>1e3?Qe.substring(0,997)+"...":Qe,$browser_version:bg(Qe,navigator.vendor,J),$browser_language:$l(),$browser_language_prefix:(T=$l(),typeof T=="string"?T.split("-")[0]:void 0),$screen_height:w==null?void 0:w.screen.height,$screen_width:w==null?void 0:w.screen.width,$viewport_height:w==null?void 0:w.innerHeight,$viewport_width:w==null?void 0:w.innerWidth,$lib:Ne.LIB_NAME,$lib_version:Ne.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3});return Ne.SDK_DIST_CHANNEL&&(y.$sdk_dist_channel=Ne.SDK_DIST_CHANNEL),y}(this.config.mask_personal_data_properties,this.config.custom_personal_data_properties);if(this.sessionManager){var{sessionId:h,windowId:p}=this.sessionManager.checkAndGetSessionAndWindowId(i,r.getTime());o.$session_id=h,o.$window_id=p}this.sessionPropsManager&&we(o,this.sessionPropsManager.getSessionProps());try{var d;this.sessionRecording&&we(o,this.sessionRecording.sdkDebugProperties),o.$sdk_debug_retry_queue_size=(d=this.gn)==null?void 0:d.length}catch(k){o.$sdk_debug_error_capturing_properties=String(k)}if(this.requestRouter.region===Ka&&(o.$lib_custom_api_host=this.config.api_host),c=e!==Wn||i?e!==Ri||i?this.pageViewManager.doEvent():this.pageViewManager.doPageLeave(r):this.pageViewManager.doPageView(r,s),o=we(o,c),e===Wn&&H&&(o.title=H.title),!F(a)){var v=r.getTime()-a;o.$duration=parseFloat((v/1e3).toFixed(3))}Qe&&this.config.opt_out_useragent_filter&&(o.$browser_type=this._is_bot()?"bot":"browser"),(o=we({},u,this.persistence.properties(),this.sessionPersistence.properties(),o)).$is_identified=this._isIdentified(),ae(this.config.property_denylist)?ye(this.config.property_denylist,function(k){delete o[k]}):U.error(Cd+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist);var f=this.config.sanitize_properties;f&&(U.error(Bl),o=f(o,e));var _=this.Mn();return o.$process_person_profile=_,_&&!i&&this.Rn("_calculate_event_properties"),o}Tn(e,n,r){var s;if(n===void 0&&(n=!0),r===void 0&&(r=!1),!this.persistence||!this.Mn()||this.rn&&!r)return e;var i=this.persistence.get_initial_props(),a=(s=this.sessionPropsManager)==null?void 0:s.getSetOnceProps(),o=we({},i,a||{},e||{}),l=this.config.sanitize_properties;return l&&(U.error(Bl),o=l(o,"$set_once")),n&&(this.rn=!0),ln(o)?void 0:o}register(e,n){var r;(r=this.persistence)==null||r.register(e,n)}register_once(e,n,r){var s;(s=this.persistence)==null||s.register_once(e,n,r)}register_for_session(e){var n;(n=this.sessionPersistence)==null||n.register(e)}unregister(e){var n;(n=this.persistence)==null||n.unregister(e)}unregister_for_session(e){var n;(n=this.sessionPersistence)==null||n.unregister(e)}Pn(e,n){this.register({[e]:n})}getFeatureFlag(e,n){var r;return(r=this.featureFlags)==null?void 0:r.getFeatureFlag(e,n)}getFeatureFlagPayload(e){var n;return(n=this.featureFlags)==null?void 0:n.getFeatureFlagPayload(e)}getFeatureFlagResult(e,n){var r;return(r=this.featureFlags)==null?void 0:r.getFeatureFlagResult(e,n)}isFeatureEnabled(e,n){var r;return(r=this.featureFlags)==null?void 0:r.isFeatureEnabled(e,n)}reloadFeatureFlags(){var e;(e=this.featureFlags)==null||e.reloadFeatureFlags()}updateFlags(e,n,r){var s;(s=this.featureFlags)==null||s.updateFlags(e,n,r)}updateEarlyAccessFeatureEnrollment(e,n,r){var s;(s=this.featureFlags)==null||s.updateEarlyAccessFeatureEnrollment(e,n,r)}getEarlyAccessFeatures(e,n,r){var s;return n===void 0&&(n=!1),(s=this.featureFlags)==null?void 0:s.getEarlyAccessFeatures(e,n,r)}on(e,n){return this.nn.on(e,n)}onFeatureFlags(e){return this.featureFlags?this.featureFlags.onFeatureFlags(e):(e([],{},{errorsLoading:!0}),()=>{})}onSurveysLoaded(e){return this.surveys?this.surveys.onSurveysLoaded(e):(e([],{isLoaded:!1,error:Mr}),()=>{})}onSessionId(e){var n,r;return(n=(r=this.sessionManager)==null?void 0:r.onSessionId(e))!==null&&n!==void 0?n:()=>{}}getSurveys(e,n){n===void 0&&(n=!1),this.surveys?this.surveys.getSurveys(e,n):e([],{isLoaded:!1,error:Mr})}getActiveMatchingSurveys(e,n){n===void 0&&(n=!1),this.surveys?this.surveys.getActiveMatchingSurveys(e,n):e([],{isLoaded:!1,error:Mr})}renderSurvey(e,n){var r;(r=this.surveys)==null||r.renderSurvey(e,n)}displaySurvey(e,n){var r;n===void 0&&(n=jm),(r=this.surveys)==null||r.displaySurvey(e,n)}cancelPendingSurvey(e){var n;(n=this.surveys)==null||n.cancelPendingSurvey(e)}canRenderSurvey(e){var n,r;return(n=(r=this.surveys)==null?void 0:r.canRenderSurvey(e))!==null&&n!==void 0?n:{visible:!1,disabledReason:Mr}}canRenderSurveyAsync(e,n){var r,s;return n===void 0&&(n=!1),(r=(s=this.surveys)==null?void 0:s.canRenderSurveyAsync(e,n))!==null&&r!==void 0?r:Promise.resolve({visible:!1,disabledReason:Mr})}On(e){return!e||va(e)?(U.critical("Unique user id has not been set in posthog.identify"),!1):e===ws?(U.critical('The string "'+e+'" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.'),!1):!["distinct_id","distinctid"].includes(e.toLowerCase())&&!["undefined","null"].includes(e.toLowerCase())||(U.critical('The string "'+e+'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'),!1)}identify(e,n,r){if(!this.__loaded||!this.persistence)return U.uninitializedWarning("posthog.identify");if(Ke(e)&&(e=e.toString(),U.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),this.On(e)&&this.Rn("posthog.identify")){var s=this.get_distinct_id();this.register({$user_id:e}),this.get_property(Vs)||this.register_once({$had_persisted_distinct_id:!0,$device_id:s},""),e!==s&&e!==this.get_property(Ur)&&(this.unregister(Ur),this.register({distinct_id:e}));var i,a=(this.persistence.get_property(yt)||Un)===Un;e!==s&&a?(this.persistence.set_property(yt,qn),this.setPersonPropertiesForFlags({$set:n||{},$set_once:r||{}},!1),this.capture(Pi,{distinct_id:e,$anon_distinct_id:s},{$set:n||{},$set_once:r||{}}),this.ln=Ul(e,n,r),(i=this.featureFlags)==null||i.setAnonymousDistinctId(s)):(n||r)&&this.setPersonProperties(n,r),e!==s&&(this.reloadFeatureFlags(),this.unregister(Vr))}}setPersonProperties(e,n){if((e||n)&&this.Rn("posthog.setPersonProperties")){var r=Ul(this.get_distinct_id(),e,n);this.ln!==r?(this.setPersonPropertiesForFlags({$set:e||{},$set_once:n||{}},!0),this.capture("$set",{$set:e||{},$set_once:n||{}}),this.ln=r):U.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")}}group(e,n,r){if(e&&n){var s=this.getGroups(),i=s[e]!==n;if(i&&this.resetGroupPropertiesForFlags(e),this.register({$groups:M({},s,{[e]:n})}),i||r){var a={$group_type:e,$group_key:n};r&&(a.$group_set=r),this.capture(vl,a)}r&&this.setGroupPropertiesForFlags({[e]:r}),i&&!r&&this.reloadFeatureFlags()}else U.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e,n){var r;n===void 0&&(n=!0),(r=this.featureFlags)==null||r.setPersonPropertiesForFlags(e,n)}resetPersonPropertiesForFlags(){var e;(e=this.featureFlags)==null||e.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e,n){var r;n===void 0&&(n=!0),this.Rn("posthog.setGroupPropertiesForFlags")&&((r=this.featureFlags)==null||r.setGroupPropertiesForFlags(e,n))}resetGroupPropertiesForFlags(e){var n;(n=this.featureFlags)==null||n.resetGroupPropertiesForFlags(e)}reset(e){var n,r,s,i,a,o,l,c;if(U.info("reset"),!this.__loaded)return U.uninitializedWarning("posthog.reset");var u,h=this.get_property(Vs),p=this.get_property(kn);if(this.consent.reset(),(n=this.persistence)==null||n.clear(),(r=this.sessionPersistence)==null||r.clear(),F(p)||(u=this.persistence)==null||u.register({[kn]:p}),(s=this.surveys)==null||s.reset(),(i=this.kn)==null||i.stop(),(a=this.featureFlags)==null||a.reset(),(o=this.conversations)==null||o.reset(),(l=this.persistence)==null||l.set_property(yt,Un),(c=this.sessionManager)==null||c.resetSessionId(),this.ln=null,this.config.cookieless_mode===qt)this.register_once({distinct_id:ws,$device_id:null},"");else{var d=this.config.get_device_id(Xt());this.register_once({distinct_id:d,$device_id:e?d:h},"")}this.register({$last_posthog_reset:new Date().toISOString()},1),delete this.config.identity_distinct_id,delete this.config.identity_hash,this.reloadFeatureFlags()}setIdentity(e,n){var r;this.config.identity_distinct_id=e,this.config.identity_hash=n,this.alias(e),(r=this.conversations)==null||r.Ln()}clearIdentity(){var e;delete this.config.identity_distinct_id,delete this.config.identity_hash,(e=this.conversations)==null||e.Fn()}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,n;return(e=(n=this.sessionManager)==null?void 0:n.checkAndGetSessionAndWindowId(!0).sessionId)!==null&&e!==void 0?e:""}get_session_replay_url(e){if(!this.sessionManager)return"";var{sessionId:n,sessionStartTimestamp:r}=this.sessionManager.checkAndGetSessionAndWindowId(!0),s=this.requestRouter.endpointFor("ui","/project/"+this.config.token+"/replay/"+n);if(e!=null&&e.withTimestamp&&r){var i,a=(i=e.timestampLookBack)!==null&&i!==void 0?i:10;if(!r)return s;s+="?t="+Math.max(Math.floor((new Date().getTime()-r)/1e3)-a,0)}return s}alias(e,n){return e===this.get_property(Gu)?(U.critical("Attempting to create alias for existing People user - aborting."),-2):this.Rn("posthog.alias")?(F(n)&&(n=this.get_distinct_id()),e!==n?(this.Pn(Ur,e),this.capture("$create_alias",{alias:e,distinct_id:n})):(U.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var n=M({},this.config);if(Pe(e)){var r,s,i,a,o,l,c,u,h,p,d;we(this.config,Gl(e));var v=this.vn();(r=this.persistence)==null||r.update_config(this.config,n,v),this.sessionPersistence=this.config.persistence==="sessionStorage"||this.config.persistence==="memory"?this.persistence:new Ci(M({},this.config,{persistence:"sessionStorage"}),v,!1);var f=this.hn(this.config.debug);Ot(f)&&(this.config.debug=f),Ot(this.config.debug)&&(this.config.debug?(Ne.DEBUG=!0,be.O()&&be.N("ph_debug",!0),U.info("set_config",{config:e,oldConfig:n,newConfig:M({},this.config)})):(Ne.DEBUG=!1,be.O()&&be.q("ph_debug"))),(s=this.exceptionObserver)==null||s.onConfigChange(),(i=this.exceptions)==null||i.onConfigChange(),(a=this.sessionRecording)==null||a.startIfEnabledOrStop(),(o=this.tracingHeaders)==null||o.startIfEnabledOrStop(),(l=this.autocapture)==null||l.startIfEnabled(),(c=this.heatmaps)==null||c.startIfEnabled(),(u=this.exceptionObserver)==null||u.startIfEnabledOrStop(),(h=this.deadClicksAutocapture)==null||h.startIfEnabledOrStop(),(p=this.surveys)==null||p.loadIfEnabled(),this.An(),(d=this.externalIntegrations)==null||d.startIfEnabledOrStop()}}_overrideSDKInfo(e,n){Ne.LIB_NAME=e,Ne.LIB_VERSION=n}startSessionRecording(e){var n,r,s,i,a,o=e===!0,l={sampling:o||!(e==null||!e.sampling),linked_flag:o||!(e==null||!e.linked_flag),url_trigger:o||!(e==null||!e.url_trigger),event_trigger:o||!(e==null||!e.event_trigger)};Object.values(l).some(Boolean)&&((n=this.sessionManager)==null||n.checkAndGetSessionAndWindowId(),l.sampling&&((r=this.sessionRecording)==null||r.overrideSampling()),l.linked_flag&&((s=this.sessionRecording)==null||s.overrideLinkedFlag()),l.url_trigger&&((i=this.sessionRecording)==null||i.overrideTrigger("url")),l.event_trigger&&((a=this.sessionRecording)==null||a.overrideTrigger("event"))),this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e;return!((e=this.sessionRecording)==null||!e.started)}captureException(e,n){if(this.exceptions){var r=new Error("PostHog syntheticException"),s=this.exceptions.buildProperties(e,{handled:!0,syntheticException:r});return this.exceptions.sendExceptionEvent(M({},s,n))}}addExceptionStep(e,n){var r;(r=this.exceptions)==null||r.addExceptionStep(e,n)}captureLog(e){var n;(n=this.logs)==null||n.captureLog(e)}get logger(){var e,n;return(e=(n=this.logs)==null?void 0:n.logger)!==null&&e!==void 0?e:ht.Nn}startExceptionAutocapture(e){this.set_config({capture_exceptions:e==null||e})}stopExceptionAutocapture(){this.set_config({capture_exceptions:!1})}loadToolbar(e){var n,r;return(n=(r=this.toolbar)==null?void 0:r.loadToolbar(e))!==null&&n!==void 0&&n}get_property(e){var n;return(n=this.persistence)==null?void 0:n.props[e]}getSessionProperty(e){var n;return(n=this.sessionPersistence)==null?void 0:n.props[e]}toString(){var e,n=(e=this.config.name)!==null&&e!==void 0?e:Vn;return n!==Vn&&(n=Vn+"."+n),n}_isIdentified(){var e,n;return((e=this.persistence)==null?void 0:e.get_property(yt))===qn||((n=this.sessionPersistence)==null?void 0:n.get_property(yt))===qn}Mn(){var e,n;return!(this.config.person_profiles==="never"||this.config.person_profiles===Ha&&!this._isIdentified()&&ln(this.getGroups())&&((e=this.persistence)==null||(e=e.props)==null||!e[Ur])&&((n=this.persistence)==null||(n=n.props)==null||!n[Ys]))}Cn(){return this.config.capture_pageleave===!0||this.config.capture_pageleave==="if_capture_pageview"&&(this.config.capture_pageview===!0||this.config.capture_pageview==="history_change")}createPersonProfile(){this.Mn()||this.Rn("posthog.createPersonProfile")&&this.setPersonProperties({},{})}setInternalOrTestUser(){this.Rn("posthog.setInternalOrTestUser")&&this.setPersonProperties({$internal_or_test_user:!0})}Rn(e){return this.config.person_profiles==="never"?(U.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this.Pn(Ys,!0),!0)}vn(){if(this.config.cookieless_mode==="always")return!0;var e=this.consent.isOptedOut();return this.config.disable_persistence||e&&!(!this.config.opt_out_persistence_by_default&&this.config.cookieless_mode!==xn)}An(){var e,n,r,s,i=this.vn();return((e=this.persistence)==null?void 0:e.Tr)!==i&&((r=this.persistence)==null||r.set_disabled(i)),((n=this.sessionPersistence)==null?void 0:n.Tr)!==i&&((s=this.sessionPersistence)==null||s.set_disabled(i)),i}opt_in_capturing(e){var n;if(this.config.cookieless_mode!==qt){if(this.tn()){var r,s,i,a,o;this.reset(!0),(r=this.sessionManager)==null||r.destroy(),(s=this.pageViewManager)==null||s.destroy(),this.sessionManager=new Fl(this),this.pageViewManager=new Pl(this),this.persistence&&(this.sessionPropsManager=new jl(this,this.sessionManager,this.persistence));var l,c=(i=(a=this.config.__extensionClasses)==null?void 0:a.sessionRecording)!==null&&i!==void 0?i:(o=ht.__defaultExtensionClasses)==null?void 0:o.sessionRecording;c&&(this.sessionRecording=this.Xi(this.sessionRecording,new c(this)),this.wn&&((l=this.sessionRecording)==null||l.onRemoteConfig==null||l.onRemoteConfig(this.wn)))}var u,h;this.consent.optInOut(!0),this.An(),this.xn(),(n=this.sessionRecording)==null||n.startIfEnabledOrStop(),this.config.cookieless_mode==xn&&((u=this.surveys)==null||u.loadIfEnabled()),(F(e==null?void 0:e.captureEventName)||e!=null&&e.captureEventName)&&this.capture((h=e==null?void 0:e.captureEventName)!==null&&h!==void 0?h:"$opt_in",e==null?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this.Sn()}else U.warn(Hl)}opt_out_capturing(){var e,n,r;this.config.cookieless_mode!==qt?(this.config.cookieless_mode===xn&&this.consent.isOptedIn()&&this.reset(!0),this.consent.optInOut(!1),this.An(),this.config.cookieless_mode===xn&&(this.register({distinct_id:ws,$device_id:null}),(e=this.sessionRecording)==null||e.stopRecording(),this.sessionRecording=void 0,(n=this.sessionManager)==null||n.destroy(),(r=this.pageViewManager)==null||r.destroy(),this.sessionManager=void 0,this.sessionPropsManager=void 0,this.config.capture_pageview&&this.Sn(),this.xn())):U.warn(Hl)}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}get_explicit_consent_status(){var e=this.consent.consent;return e===1?"granted":e===0?"denied":"pending"}is_capturing(){return this.config.cookieless_mode===qt||(this.config.cookieless_mode===xn?this.consent.isRejected()||this.consent.isOptedIn():!this.has_opted_out_capturing())}clear_opt_in_out_capturing(){this.consent.reset(),this.An()}_is_bot(){return st?$d(st,this.config.custom_blocked_useragents):void 0}Sn(){H&&(H.visibilityState==="visible"?this.sn||(this.sn=!0,this.capture(Wn,{title:H.title},{send_instantly:!0}),this.an&&(H.removeEventListener(Qs,this.an),this.an=null)):this.an||(this.an=this.Sn.bind(this),Ae(H,Qs,this.an)))}debug(e){e===!1?(w==null||w.console.log("You've disabled debug mode."),this.set_config({debug:!1})):(w==null||w.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),this.set_config({debug:!0}))}Kr(){var e,n,r,s,i,a,o=this.cn||{};return"advanced_disable_flags"in o?!!o.advanced_disable_flags:this.config.advanced_disable_flags!==!1?!!this.config.advanced_disable_flags:this.config.advanced_disable_decide===!0?(U.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."),!0):(r="advanced_disable_decide",s=U,i=(n="advanced_disable_flags")in(e=o)&&!oe(e[n]),a=r in e&&!oe(e[r]),i?e[n]:!!a&&(s&&s.warn("Config field '"+r+"' is deprecated. Please use '"+n+"' instead. The old field will be removed in a future major version."),e[r]))}En(e){if(oe(this.config.before_send))return e;var n=ae(this.config.before_send)?this.config.before_send:[this.config.before_send],r=e;for(var s of n){if(r=s(r),oe(r)){var i="Event '"+e.event+"' was rejected in beforeSend function";return ag(e.event)?U.warn(i+". This can cause unexpected behavior."):U.info(i),null}r.properties&&!ln(r.properties)||U.warn("Event '"+e.event+"' has no properties after beforeSend function, this is likely an error.")}return r}getPageViewId(){var e;return(e=this.pageViewManager.dr)==null?void 0:e.pageViewId}captureTraceFeedback(e,n){this.capture("$ai_feedback",{$ai_trace_id:String(e),$ai_feedback_text:n})}captureTraceMetric(e,n,r){this.capture("$ai_metric",{$ai_trace_id:String(e),$ai_metric_name:n,$ai_metric_value:String(r)})}hn(e){var n=Ot(e)&&!e,r=be.O()&&be.A("ph_debug")==="true";return!n&&(!!r||e)}}ht.__defaultExtensionClasses={},ht.Nn={trace:zn=()=>{},debug:zn,info:zn,warn:zn,error:zn,fatal:zn},function(t,e){for(var n=0;e.length>n;n++)t.prototype[e[n]]=zg(t.prototype[e[n]])}(ht,["identify"]);class Jl{constructor(e){this.disabled=e===!1;var n=Pe(e)?e:{};this.thresholdPx=n.threshold_px||30,this.timeoutMs=n.timeout_ms||1e3,this.clickCount=n.click_count||3,this.clicks=[]}isRageClick(e,n,r){if(this.disabled)return!1;var s=this.clicks[this.clicks.length-1];if(s&&Math.abs(e-s.x)+Math.abs(n-s.y)<this.thresholdPx&&this.timeoutMs>r-s.timestamp){if(this.clicks.push({x:e,y:n,timestamp:r}),this.clicks.length===this.clickCount)return!0}else this.clicks=[{x:e,y:n,timestamp:r}];return!1}}var Ui="$copy_autocapture",qi=Se("[AutoCapture]");function Hi(t,e){return e.length>t?e.slice(0,t)+"...":e}function zm(t){if(t.previousElementSibling)return t.previousElementSibling;var e=t;do e=e.previousSibling;while(e&&!dn(e));return e}function Gm(t,e){var n,r,{e:s,maskAllElementAttributes:i,maskAllText:a,elementAttributeIgnoreList:o,elementsChainAsString:l}=e;if(!dn(t))return{props:{}};for(var c=[t],u=t;u.parentNode&&!it(u,"body");)if(rd(u.parentNode))c.push(u.parentNode.host),u=u.parentNode.host;else{if(!dn(u.parentNode))break;c.push(u.parentNode),u=u.parentNode}var h,p,d=[],v={},f=!1,_=!1;if(ye(c,$=>{var O=Ba($);if(it($,"a")){var N=$.getAttribute("href");f=O&&!!N&&Kr(N)&&N}ee(ei($),"ph-no-capture")&&(_=!0),d.push(function(x,S,z,D){var V=x.tagName.toLowerCase(),X={tag_name:V};xo.indexOf(V)>-1&&!z&&(X.$el_text=V.toLowerCase()==="a"||V.toLowerCase()==="button"?Hi(1024,Sl(x)):Hi(1024,rs(x)));var G=ei(x);G.length>0&&(X.classes=G.filter(function(J){return J!==""})),ye(x.attributes,function(J){var y;if((!cd(x)||["name","id","class","aria-label"].indexOf(J.name)!==-1)&&(D==null||!D.includes(J.name))&&!S&&Kr(J.value)&&(!Ee(y=J.name)||y.substring(0,10)!=="_ngcontent"&&y.substring(0,7)!=="_nghost")){var m=J.value;J.name==="class"&&(m=wo(m).join(" ")),X["attr__"+J.name]=Hi(1024,m)}});for(var te=1,le=1,fe=x;fe=zm(fe);)te++,fe.tagName===x.tagName&&le++;return X.nth_child=te,X.nth_of_type=le,X}($,i,a,o));var T=function(x){if(!Ba(x))return{};var S={};return ye(x.attributes,function(z){if(z.name&&z.name.indexOf("data-ph-capture-attribute")===0){var D=z.name.replace("data-ph-capture-attribute-",""),V=z.value;D&&V&&Kr(V)&&(S[D]=V)}}),S}($);we(v,T)}),_)return{props:{},explicitNoCapture:_};if(a||(d[0].$el_text=it(t,"a")||it(t,"button")?Sl(t):rs(t)),f){var k,C;d[0].attr__href=f;var P=(k=ti(f))==null?void 0:k.host,L=w==null||(C=w.location)==null?void 0:C.host;P&&L&&P!==L&&(h=f)}return{props:we({$event_type:s.type,$ce_version:1},l?{}:{$elements:d},{$elements_chain:(p=d,function($){return $.map(O=>{var N,T,x="";if(O.tag_name&&(x+=O.tag_name),O.attr_class)for(var S of(O.attr_class.sort(),O.attr_class))x+="."+S.replace(/"/g,"");var z=M({},O.text?{text:O.text}:{},{"nth-child":(N=O.nth_child)!==null&&N!==void 0?N:0,"nth-of-type":(T=O.nth_of_type)!==null&&T!==void 0?T:0},O.href?{href:O.href}:{},O.attr_id?{attr_id:O.attr_id}:{},O.attributes),D={};return Ds(z).sort((V,X)=>{var[G]=V,[te]=X;return G.localeCompare(te)}).forEach(V=>{var[X,G]=V;return D[Tl(X.toString())]=Tl(G.toString())}),(x+=":")+Ds(D).map(V=>{var[X,G]=V;return X+'="'+G+'"'}).join("")}).join(";")}(function($){return $.map(O=>{var N,T,x={text:(N=O.$el_text)==null?void 0:N.slice(0,400),tag_name:O.tag_name,href:(T=O.attr__href)==null?void 0:T.slice(0,2048),attr_class:cm(O),attr_id:O.attr__id,nth_child:O.nth_child,nth_of_type:O.nth_of_type,attributes:{}};return Ds(O).filter(S=>{var[z]=S;return z.indexOf("attr__")===0}).forEach(S=>{var[z,D]=S;return x.attributes[z]=D}),x})}(p)))},(n=d[0])!=null&&n.$el_text?{$el_text:(r=d[0])==null?void 0:r.$el_text}:{},h&&s.type==="click"?{$external_click_url:h}:{},v)}}var Nr=Se("[ExceptionAutocapture]"),Jm=Se("[TracingHeaders]"),vn=Se("[Web Vitals]"),Wl=9e5,Vl="disabled",Kl="lazy_loading",Dr="awaiting_config",Ps="missing_config";Se("[SessionRecording]"),Se("[SessionRecording]");var Xa="[SessionRecording]",Mt=Se(Xa),Wm=Se("[Heatmaps]");function Yl(t){return Pe(t)&&"clientX"in t&&"clientY"in t&&Ke(t.clientX)&&Ke(t.clientY)}var Ql=Se("[Product Tours]"),Vm=["$set_once","$set"],Kt=Se("[SiteApps]"),Xl="Error while initializing PostHog app with config id ";function Gn(t,e,n){if(oe(t))return!1;switch(n){case"exact":return t===e;case"contains":var r=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/_/g,".").replace(/%/g,".*");return new RegExp(r,"i").test(t);case"regex":try{return new RegExp(e).test(t)}catch{return!1}default:return!1}}class Km{constructor(e){this.Dn=new To,this.$n=(n,r)=>this.qn(n,r)&&this.jn(n,r)&&this.Hn(n,r)&&this.Un(n,r),this.qn=(n,r)=>r==null||!r.event||(n==null?void 0:n.event)===(r==null?void 0:r.event),this._instance=e,this.Bn=new Set,this.zn=new Set}init(){var e,n;F((e=this._instance)==null?void 0:e._addCaptureHook)||(n=this._instance)==null||n._addCaptureHook((r,s)=>{this.on(r,s)})}register(e){var n,r;if(!F((n=this._instance)==null?void 0:n._addCaptureHook)&&(e.forEach(a=>{var o,l;(o=this.zn)==null||o.add(a),(l=a.steps)==null||l.forEach(c=>{var u;(u=this.Bn)==null||u.add((c==null?void 0:c.event)||"")})}),(r=this._instance)!=null&&r.autocapture)){var s,i=new Set;e.forEach(a=>{var o;(o=a.steps)==null||o.forEach(l=>{l!=null&&l.selector&&i.add(l==null?void 0:l.selector)})}),(s=this._instance)==null||s.autocapture.setElementSelectors(i)}}on(e,n){var r;n!=null&&e.length!=0&&(this.Bn.has(e)||this.Bn.has(n==null?void 0:n.event))&&this.zn&&((r=this.zn)==null?void 0:r.size)>0&&this.zn.forEach(s=>{this.Vn(n,s)&&this.Dn.emit("actionCaptured",s.name)})}Wn(e){this.onAction("actionCaptured",n=>e(n))}Vn(e,n){if((n==null?void 0:n.steps)==null)return!1;for(var r of n.steps)if(this.$n(e,r))return!0;return!1}onAction(e,n){return this.Dn.on(e,n)}jn(e,n){if(n!=null&&n.url){var r,s=e==null||(r=e.properties)==null?void 0:r.$current_url;if(!s||typeof s!="string"||!Gn(s,n.url,n.url_matching||"contains"))return!1}return!0}Hn(e,n){return!!this.Zn(e,n)&&!!this.Gn(e,n)&&!!this.Qn(e,n)}Zn(e,n){var r;if(n==null||!n.href)return!0;var s=this.Jn(e);if(s.length>0)return s.some(o=>Gn(o.href,n.href,n.href_matching||"exact"));var i,a=(e==null||(r=e.properties)==null?void 0:r.$elements_chain)||"";return!!a&&Gn((i=a.match(/(?::|")href="(.*?)"/))?i[1]:"",n.href,n.href_matching||"exact")}Gn(e,n){var r;if(n==null||!n.text)return!0;var s=this.Jn(e);if(s.length>0)return s.some(c=>Gn(c.text,n.text,n.text_matching||"exact")||Gn(c.$el_text,n.text,n.text_matching||"exact"));var i,a,o,l=(e==null||(r=e.properties)==null?void 0:r.$elements_chain)||"";return!!l&&(i=function(c){for(var u,h=[],p=/(?::|")text="(.*?)"/g;!oe(u=p.exec(c));)h.includes(u[1])||h.push(u[1]);return h}(l),a=n.text,o=n.text_matching||"exact",i.some(c=>Gn(c,a,o)))}Qn(e,n){var r,s;if(n==null||!n.selector)return!0;var i=e==null||(r=e.properties)==null?void 0:r.$element_selectors;if(i!=null&&i.includes(n.selector))return!0;var a=(e==null||(s=e.properties)==null?void 0:s.$elements_chain)||"";if(n.selector_regex&&a)try{return new RegExp(n.selector_regex).test(a)}catch{return!1}return!1}Jn(e){var n;return(e==null||(n=e.properties)==null?void 0:n.$elements)==null?[]:e==null?void 0:e.properties.$elements}Un(e,n){return n==null||!n.properties||n.properties.length===0||Ad(n.properties.reduce((r,s)=>{var i=ae(s.value)?s.value.map(String):s.value!=null?[String(s.value)]:[];return r[s.key]={values:i,operator:s.operator||"exact"},r},{}),e==null?void 0:e.properties)}}class Ym{constructor(e){this._instance=e,this.Kn=new Map,this.Yn=new Map,this.Xn=new Map}es(e,n){return!!e&&Ad(e.propertyFilters,n==null?void 0:n.properties)}ts(e,n){var r=new Map;return e.forEach(s=>{var i;(i=s.conditions)==null||(i=i[n])==null||(i=i.values)==null||i.forEach(a=>{if(a!=null&&a.name){var o=r.get(a.name)||[];o.push(s.id),r.set(a.name,o)}})}),r}rs(e,n,r){var s=(r===Or.Activation?this.Kn:this.Yn).get(e),i=[];return this.ns(a=>{i=a.filter(o=>s==null?void 0:s.includes(o.id))}),i.filter(a=>{var o,l=(o=a.conditions)==null||(o=o[r])==null||(o=o.values)==null?void 0:o.find(c=>c.name===e);return this.es(l,n)})}register(e){var n;F((n=this._instance)==null?void 0:n._addCaptureHook)||(this.ss(e),this.os(e))}os(e){var n=e.filter(r=>{var s,i;return((s=r.conditions)==null?void 0:s.actions)&&((i=r.conditions)==null||(i=i.actions)==null||(i=i.values)==null?void 0:i.length)>0});n.length!==0&&(this.us==null&&(this.us=new Km(this._instance),this.us.init(),this.us.Wn(r=>{this.onAction(r)})),n.forEach(r=>{var s,i,a,o,l;r.conditions&&(s=r.conditions)!=null&&s.actions&&(i=r.conditions)!=null&&(i=i.actions)!=null&&i.values&&((a=r.conditions)==null||(a=a.actions)==null||(a=a.values)==null?void 0:a.length)>0&&((o=this.us)==null||o.register(r.conditions.actions.values),(l=r.conditions)==null||(l=l.actions)==null||(l=l.values)==null||l.forEach(c=>{if(c&&c.name){var u=this.Xn.get(c.name);u&&u.push(r.id),this.Xn.set(c.name,u||[r.id])}}))}))}ss(e){var n,r=e.filter(i=>{var a,o;return((a=i.conditions)==null?void 0:a.events)&&((o=i.conditions)==null||(o=o.events)==null||(o=o.values)==null?void 0:o.length)>0}),s=e.filter(i=>{var a,o;return((a=i.conditions)==null?void 0:a.cancelEvents)&&((o=i.conditions)==null||(o=o.cancelEvents)==null||(o=o.values)==null?void 0:o.length)>0});r.length===0&&s.length===0||((n=this._instance)==null||n._addCaptureHook((i,a)=>{this.onEvent(i,a)}),this.Kn=this.ts(e,Or.Activation),this.Yn=this.ts(e,Or.Cancellation))}onEvent(e,n){var r,s=this.le(),i=this.ls(),a=this.hs(),o=((r=this._instance)==null||(r=r.persistence)==null?void 0:r.props[i])||[];if(a===e&&n&&o.length>0){var l,c;s.info("event matched, removing item from activated items",{event:e,eventPayload:n,existingActivatedItems:o});var u=(n==null||(l=n.properties)==null?void 0:l.$survey_id)||(n==null||(c=n.properties)==null?void 0:c.$product_tour_id);if(u){var h=o.indexOf(u);0>h||(o.splice(h,1),this.cs(o))}}else{if(this.Yn.has(e)){var p=this.rs(e,n,Or.Cancellation);p.length>0&&(s.info("cancel event matched, cancelling items",{event:e,itemsToCancel:p.map(v=>v.id)}),p.forEach(v=>{var f=o.indexOf(v.id);0>f||o.splice(f,1),this.ds(v.id)}),this.cs(o))}if(this.Kn.has(e)){s.info("event name matched",{event:e,eventPayload:n,items:this.Kn.get(e)});var d=this.rs(e,n,Or.Activation);this.cs(o.concat(d.map(v=>v.id)||[]))}}}onAction(e){var n,r=this.ls(),s=((n=this._instance)==null||(n=n.persistence)==null?void 0:n.props[r])||[];this.Xn.has(e)&&this.cs(s.concat(this.Xn.get(e)||[]))}cs(e){var n=this.le(),r=[...new Set(e)].filter(s=>!this.vs(s));n.info("updating activated items",{activatedItems:r}),this.fs(r)}getActivatedIds(){var e,n=this.ls();return((e=this._instance)==null||(e=e.persistence)==null?void 0:e.props[n])||[]}getEventToItemsMap(){return this.Kn}ps(){return this.us}}class Qm extends Ym{constructor(e){super(e)}ls(){return Na}hs(){return zr.SHOWN}ns(e){var n;(n=this._instance)==null||n.getSurveys(e)}ds(e){var n;(n=this._instance)==null||n.cancelPendingSurvey(e)}le(){return ve}fs(e){var n;(n=this._instance)==null||(n=n.persistence)==null||n.register({[Na]:e})}vs(){return!1}getSurveys(){return this.getActivatedIds()}getEventToSurveys(){return this.getEventToItemsMap()}}var Bi="SDK is not enabled or survey functionality is not yet loaded",Zl="Disabled. Not loading surveys.",Xm=w!=null&&w.location?ni(w.location.hash,"__posthog")||ni(location.hash,"state"):null,ec="_postHogToolbarParams",tc=Se("[Toolbar]"),Le=Se("[FeatureFlags]"),bn=Se("[FeatureFlags]",{debugEnabled:!0}),zi=`" failed. Feature flags didn't load in time.`,nc=t=>{for(var e={},n=0;t.length>n;n++)e[t[n]]=!0;return e},rc=t=>{var e={};for(var[n,r]of Ds(t||{}))r&&(e[n]=r);return e},Nt=Se("[Error tracking]"),sc="Refusing to render web experiment since the viewer is a likely bot",Zm={icontains:(t,e)=>!!w&&e.href.toLowerCase().indexOf(t.toLowerCase())>-1,not_icontains:(t,e)=>!!w&&e.href.toLowerCase().indexOf(t.toLowerCase())===-1,regex:(t,e)=>!!w&&ii(e.href,t),not_regex:(t,e)=>!!w&&!ii(e.href,t),exact:(t,e)=>e.href===t,is_not:(t,e)=>e.href!==t};class Be{get qt(){return this._instance.config}constructor(e){var n=this;this.getWebExperimentsAndEvaluateDisplayLogic=function(r){r===void 0&&(r=!1),n.getWebExperiments(s=>{Be.gs("retrieved web experiments from the server"),n.ys=new Map,s.forEach(i=>{if(i.feature_flag_key){var a;n.ys&&(Be.gs("setting flag key ",i.feature_flag_key," to web experiment ",i),(a=n.ys)==null||a.set(i.feature_flag_key,i));var o=n._instance.getFeatureFlag(i.feature_flag_key);Ee(o)&&i.variants[o]&&n.bs(i.name,o,i.variants[o].transforms)}else if(i.variants)for(var l in i.variants){var c=i.variants[l];Be._s(c)&&n.bs(i.name,l,c.transforms)}})},r)},this._instance=e,this._instance.onFeatureFlags(r=>{this.onFeatureFlags(r)})}initialize(){}onFeatureFlags(e){if(this._is_bot())Be.gs(sc);else if(!this.qt.disable_web_experiments){if(oe(this.ys))return this.ys=new Map,this.loadIfEnabled(),void this.previewWebExperiment();Be.gs("applying feature flags",e),e.forEach(n=>{var r;if(this.ys&&(r=this.ys)!=null&&r.has(n)){var s,i=this._instance.getFeatureFlag(n),a=(s=this.ys)==null?void 0:s.get(n);i&&a!=null&&a.variants[i]&&this.bs(a.name,i,a.variants[i].transforms)}})}}previewWebExperiment(){var e=Be.getWindowLocation();if(e!=null&&e.search){var n=ss(e==null?void 0:e.search,"__experiment_id"),r=ss(e==null?void 0:e.search,"__experiment_variant");n&&r&&(Be.gs("previewing web experiments "+n+" && "+r),this.getWebExperiments(s=>{this.ws(parseInt(n),r,s)},!1,!0))}}loadIfEnabled(){this.qt.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,n,r){if(this.qt.disable_web_experiments&&!r)return e([]);var s=this._instance.get_property("$web_experiments");if(s&&!n)return e(s);this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/web_experiments/?token="+this.qt.token),method:"GET",callback:i=>e(i.statusCode===200&&i.json&&i.json.experiments||[])})}ws(e,n,r){var s=r.filter(i=>i.id===e);s&&s.length>0&&(Be.gs("Previewing web experiment ["+s[0].name+"] with variant ["+n+"]"),this.bs(s[0].name,n,s[0].variants[n].transforms))}static _s(e){return!oe(e.conditions)&&Be.xs(e)&&Be.Ss(e)}static xs(e){var n;if(oe(e.conditions)||oe((n=e.conditions)==null?void 0:n.url))return!0;var r,s,i,a=Be.getWindowLocation();return!!a&&((r=e.conditions)==null||!r.url||Zm[(s=(i=e.conditions)==null?void 0:i.urlMatchType)!==null&&s!==void 0?s:"icontains"](e.conditions.url,a))}static getWindowLocation(){return w==null?void 0:w.location}static Ss(e){var n;if(oe(e.conditions)||oe((n=e.conditions)==null?void 0:n.utm))return!0;var r=gd();if(r.utm_source){var s,i,a,o,l,c,u,h,p=(s=e.conditions)==null||(s=s.utm)==null||!s.utm_campaign||((i=e.conditions)==null||(i=i.utm)==null?void 0:i.utm_campaign)==r.utm_campaign,d=(a=e.conditions)==null||(a=a.utm)==null||!a.utm_source||((o=e.conditions)==null||(o=o.utm)==null?void 0:o.utm_source)==r.utm_source,v=(l=e.conditions)==null||(l=l.utm)==null||!l.utm_medium||((c=e.conditions)==null||(c=c.utm)==null?void 0:c.utm_medium)==r.utm_medium,f=(u=e.conditions)==null||(u=u.utm)==null||!u.utm_term||((h=e.conditions)==null||(h=h.utm)==null?void 0:h.utm_term)==r.utm_term;return p&&v&&f&&d}return!1}static gs(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;n>s;s++)r[s-1]=arguments[s];U.info("[WebExperiments] "+e,r)}bs(e,n,r){this._is_bot()?Be.gs(sc):n!=="control"?r.forEach(s=>{if(s.selector){var i;Be.gs("applying transform of variant "+n+" for experiment "+e+" ",s);var a=(i=document)==null?void 0:i.querySelectorAll(s.selector);a==null||a.forEach(o=>{var l=o;s.html&&(l.innerHTML=s.html),s.css&&l.setAttribute("style",s.css)})}}):Be.gs("Control variants leave the page unmodified.")}_is_bot(){return st&&this._instance?$d(st,this.qt.custom_blocked_useragents):void 0}}var lt=Se("[Conversations]"),yn="Conversations not available yet.",ci={featureFlags:class{constructor(t){this.ks=!1,this.Cs=!1,this.Is=!1,this.Ts=!1,this.Es=!1,this.Ms=!1,this.Rs=!1,this.Ps=!1,this._instance=t,this.featureFlagEventHandlers=[]}get qt(){return this._instance.config}get ki(){return this._instance.persistence}Os(t){return this._instance.get_property(t)}Ls(){var t,e;return(t=(e=this.ki)==null?void 0:e.Mr(this.qt.feature_flag_cache_ttl_ms))!==null&&t!==void 0&&t}Fs(){return!!this.Ls()&&(this.Ps||this.Is||(this.Ps=!0,Le.warn("Feature flag cache is stale, triggering refresh..."),this.reloadFeatureFlags()),!0)}As(){var t,e=(t=this.qt.evaluation_contexts)!==null&&t!==void 0?t:this.qt.evaluation_environments;return!this.qt.evaluation_environments||this.qt.evaluation_contexts||this.Rs||(Le.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."),this.Rs=!0),e!=null&&e.length?e.filter(n=>{var r=n&&typeof n=="string"&&n.trim().length>0;return r||Le.error("Invalid evaluation context found:",n,"Expected non-empty string"),r}):[]}Ns(){return this.As().length>0}Ds(){var t=this.qt.flag_keys;if(!F(t)){if(ae(t))return t.filter(e=>{var n=e&&typeof e=="string"&&e.trim().length>0;return n||Le.error("Invalid flag key found:",e,"Expected non-empty string"),n});Le.error("Invalid flag_keys found:",t,"Expected array of non-empty strings")}}initialize(){var t,e,{config:n}=this._instance,r=(t=(e=n.bootstrap)==null?void 0:e.featureFlags)!==null&&t!==void 0?t:{};if(Object.keys(r).length){var s,i,a=(s=(i=n.bootstrap)==null?void 0:i.featureFlagPayloads)!==null&&s!==void 0?s:{},o=Object.keys(r).filter(c=>!!r[c]).reduce((c,u)=>(c[u]=r[u]||!1,c),{}),l=Object.keys(a).filter(c=>o[c]).reduce((c,u)=>(a[u]&&(c[u]=a[u]),c),{});this.receivedFeatureFlags({featureFlags:o,featureFlagPayloads:l})}}updateFlags(t,e,n){var r=n!=null&&n.merge?this.getFlagVariants():{},s=n!=null&&n.merge?this.getFlagPayloads():{},i=M({},r,t),a=M({},s,e),o={};for(var[l,c]of Object.entries(i)){var u=typeof c=="string";o[l]={key:l,enabled:!!u||!!c,variant:u?c:void 0,reason:void 0,metadata:F(a==null?void 0:a[l])?void 0:{id:0,version:void 0,description:void 0,payload:a[l]}}}this.receivedFeatureFlags({flags:o})}get hasLoadedFlags(){return this.Cs}getFlags(){return Object.keys(this.getFlagVariants())}getFlagsWithDetails(){var t=this.Os(Aa),e=this.Os(jt),n=this.Os(Jn);if(!n&&!e)return t||{};var r=we({},t||{}),s=[...new Set([...Object.keys(n||{}),...Object.keys(e||{})])];for(var i of s){var a,o,l=r[i],c=e==null?void 0:e[i],u=F(c)?(a=l==null?void 0:l.enabled)!==null&&a!==void 0&&a:!!c,h=F(c)?l.variant:typeof c=="string"?c:void 0,p=n==null?void 0:n[i],d=M({},l,{enabled:u,variant:u?h??(l==null?void 0:l.variant):void 0});u!==(l==null?void 0:l.enabled)&&(d.original_enabled=l==null?void 0:l.enabled),h!==(l==null?void 0:l.variant)&&(d.original_variant=l==null?void 0:l.variant),p&&(d.metadata=M({},l==null?void 0:l.metadata,{payload:p,original_payload:l==null||(o=l.metadata)==null?void 0:o.payload})),r[i]=d}return this.ks||(Le.warn(" Overriding feature flag details!",{flagDetails:t,overriddenPayloads:n,finalDetails:r}),this.ks=!0),r}getFlagVariants(){var t=this.Os(Yn),e=this.Os(jt);if(!e)return t||{};for(var n=we({},t),r=Object.keys(e),s=0;r.length>s;s++)n[r[s]]=e[r[s]];return this.ks||(Le.warn(" Overriding feature flags!",{enabledFlags:t,overriddenFlags:e,finalFlags:n}),this.ks=!0),n}getFlagPayloads(){var t=this.Os(Ca),e=this.Os(Jn);if(!e)return t||{};for(var n=we({},t||{}),r=Object.keys(e),s=0;r.length>s;s++)n[r[s]]=e[r[s]];return this.ks||(Le.warn(" Overriding feature flag payloads!",{flagPayloads:t,overriddenPayloads:e,finalPayloads:n}),this.ks=!0),n}reloadFeatureFlags(){this.Ts||this.qt.advanced_disable_feature_flags||this.$s||(this._instance.nn.emit("featureFlagsReloading",!0),this.$s=setTimeout(()=>{this.qs()},5))}js(){clearTimeout(this.$s),this.$s=void 0}ensureFlagsLoaded(){this.Cs||this.Is||this.$s||this.reloadFeatureFlags()}setAnonymousDistinctId(t){this.$anon_distinct_id=t}setReloadingPaused(t){this.Ts=t}qs(t){var e;if(this.js(),!this._instance.Kr())if(this.Is)this.Es=!0;else{var n=this.qt.token,r=this.Os(Vs),s={token:n,distinct_id:this._instance.get_distinct_id(),groups:this._instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:M({},((e=this.ki)==null?void 0:e.get_initial_props())||{},this.Os(Br)||{}),group_properties:this.Os(wn),timezone:wd()};at(r)||F(r)||(s.$device_id=r),(t!=null&&t.disableFlags||this.qt.advanced_disable_feature_flags)&&(s.disable_flags=!0),this.Ns()&&(s.evaluation_contexts=this.As());var i=this.Ds();F(i)||(s.flag_keys=i);var a=!!this.qt.advanced_only_evaluate_survey_feature_flags,o=this._instance.requestRouter.endpointFor("flags","/flags/?v=2"+(this.qt.advanced_only_evaluate_survey_feature_flags?"&only_evaluate_survey_feature_flags=true":""));this.Is=!0,this._instance._send_request({method:"POST",url:o,data:s,compression:this.qt.disable_compression?void 0:Rt.Base64,timeout:this.qt.feature_flag_request_timeout_ms,callback:l=>{var c,u,h,p=!0;if(l.statusCode===200&&(this.Es||(this.$anon_distinct_id=void 0),p=!1),this.Is=!1,!s.disable_flags||this.Es){this.Ms=!p;var d=[];l.error?l.error instanceof Error?d.push(l.error.name==="AbortError"?"timeout":"connection_error"):d.push("unknown_error"):l.statusCode!==200&&d.push("api_error_"+l.statusCode),(c=l.json)!=null&&c.errorsWhileComputingFlags&&d.push("errors_while_computing_flags");var v,f=!((u=l.json)==null||(u=u.quotaLimited)==null||!u.includes("feature_flags"));f&&d.push("quota_limited"),(h=this.ki)==null||h.register({[La]:d}),f?Le.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more."):(s.disable_flags||this.receivedFeatureFlags((v=l.json)!==null&&v!==void 0?v:{},p,{partialResponse:a}),this.Es&&(this.Es=!1,this.qs()))}}})}}getFeatureFlag(t,e){var n;if(e===void 0&&(e={}),!e.fresh||this.Ms)if(this.Cs||this.getFlags()&&this.getFlags().length>0){if(!this.Fs()){var r=this.getFeatureFlagResult(t,e);return(n=r==null?void 0:r.variant)!==null&&n!==void 0?n:r==null?void 0:r.enabled}}else Le.warn('getFeatureFlag for key "'+t+zi)}getFeatureFlagDetails(t){return this.getFlagsWithDetails()[t]}getFeatureFlagPayload(t){var e=this.getFeatureFlagResult(t,{send_event:!1});return e==null?void 0:e.payload}getFeatureFlagResult(t,e){if(e===void 0&&(e={}),!e.fresh||this.Ms)if(this.Cs||this.getFlags()&&this.getFlags().length>0){if(!this.Fs()){var n=this.getFlagVariants(),r=t in n,s=n[t],i=this.getFlagPayloads()[t],a=String(s),o=this.Os(Ia)||void 0,l=this.Os(ns)||void 0,c=this.Os(Vr)||{};if(this.qt.advanced_feature_flags_dedup_per_session){var u,h=this._instance.get_session_id(),p=this.Os(Da);h&&h!==p&&(c={},(u=this.ki)==null||u.register({[Vr]:c,[Da]:h}))}if((e.send_event||!("send_event"in e))&&(!(t in c)||!c[t].includes(a))){var d,v,f,_,k,C,P,L,$,O;ae(c[t])?c[t].push(a):c[t]=[a],(d=this.ki)==null||d.register({[Vr]:c});var N=this.getFeatureFlagDetails(t),T=[...(v=this.Os(La))!==null&&v!==void 0?v:[]];F(s)&&T.push("flag_missing");var x={$feature_flag:t,$feature_flag_response:s,$feature_flag_payload:i||null,$feature_flag_request_id:o,$feature_flag_evaluated_at:l,$feature_flag_bootstrapped_response:((f=this.qt.bootstrap)==null||(f=f.featureFlags)==null?void 0:f[t])||null,$feature_flag_bootstrapped_payload:((_=this.qt.bootstrap)==null||(_=_.featureFlagPayloads)==null?void 0:_[t])||null,$used_bootstrap_value:!this.Ms};F(N==null||(k=N.metadata)==null?void 0:k.version)||(x.$feature_flag_version=N.metadata.version);var S,z=(C=N==null||(P=N.reason)==null?void 0:P.description)!==null&&C!==void 0?C:N==null||(L=N.reason)==null?void 0:L.code;z&&(x.$feature_flag_reason=z),N!=null&&($=N.metadata)!=null&&$.id&&(x.$feature_flag_id=N.metadata.id),F(N==null?void 0:N.original_variant)&&F(N==null?void 0:N.original_enabled)||(x.$feature_flag_original_response=F(N.original_variant)?N.original_enabled:N.original_variant),N!=null&&(O=N.metadata)!=null&&O.original_payload&&(x.$feature_flag_original_payload=N==null||(S=N.metadata)==null?void 0:S.original_payload),T.length&&(x.$feature_flag_error=T.join(",")),this._instance.capture("$feature_flag_called",x)}if(r){var D=i;if(!F(i))try{D=JSON.parse(i)}catch{}return{key:t,enabled:!!s,variant:typeof s=="string"?s:void 0,payload:D}}}}else Le.warn('getFeatureFlagResult for key "'+t+zi)}getRemoteConfigPayload(t,e){var n=this.qt.token,r={distinct_id:this._instance.get_distinct_id(),token:n};this.Ns()&&(r.evaluation_contexts=this.As());var s=this.Ds();F(s)||(r.flag_keys=s),this._instance._send_request({method:"POST",url:this._instance.requestRouter.endpointFor("flags","/flags/?v=2"),data:r,compression:this.qt.disable_compression?void 0:Rt.Base64,timeout:this.qt.feature_flag_request_timeout_ms,callback(i){var a,o=(a=i.json)==null?void 0:a.featureFlagPayloads;e((o==null?void 0:o[t])||void 0)}})}isFeatureEnabled(t,e){if(e===void 0&&(e={}),!e.fresh||this.Ms){if(this.Cs||this.getFlags()&&this.getFlags().length>0){var n=this.getFeatureFlag(t,e);return F(n)?void 0:!!n}Le.warn('isFeatureEnabled for key "'+t+zi)}}addFeatureFlagsHandler(t){this.featureFlagEventHandlers.push(t)}removeFeatureFlagsHandler(t){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter(e=>e!==t)}receivedFeatureFlags(t,e,n){if(this.ki){this.Cs=!0;var r=this.getFlagVariants(),s=this.getFlagPayloads(),i=this.getFlagsWithDetails();(function(a,o,l,c,u,h){l===void 0&&(l={}),c===void 0&&(c={}),u===void 0&&(u={});var p=(T=>{var x=T.flags;return x?(T.featureFlags=Object.fromEntries(Object.keys(x).map(S=>{var z;return[S,(z=x[S].variant)!==null&&z!==void 0?z:x[S].enabled]})),T.featureFlagPayloads=Object.fromEntries(Object.keys(x).filter(S=>x[S].enabled).filter(S=>{var z;return(z=x[S].metadata)==null?void 0:z.payload}).map(S=>{var z;return[S,(z=x[S].metadata)==null?void 0:z.payload]}))):Le.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"),T})(a),d=p.flags,v=p.featureFlags,f=p.featureFlagPayloads;if(v){var _=a.requestId,k=a.evaluatedAt;if(ae(v)){Le.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");var C={};if(v)for(var P=0;v.length>P;P++)C[v[P]]=!0;o&&o.register({[Ms]:v,[Yn]:C})}else{var L=v,$=f,O=d;if(h!=null&&h.partialResponse)L=M({},l,L),$=M({},c,$),O=M({},u,O);else if(a.errorsWhileComputingFlags)if(d){var N=new Set(Object.keys(d).filter(T=>{var x;return!((x=d[T])!=null&&x.failed)}));L=M({},l,Object.fromEntries(Object.entries(L).filter(T=>{var[x]=T;return N.has(x)}))),$=M({},c,Object.fromEntries(Object.entries($||{}).filter(T=>{var[x]=T;return N.has(x)}))),O=M({},u,Object.fromEntries(Object.entries(O||{}).filter(T=>{var[x]=T;return N.has(x)})))}else L=M({},l,L),$=M({},c,$),O=M({},u,O);o&&o.register(M({[Ms]:Object.keys(rc(L)),[Yn]:L||{},[Ca]:$||{},[Aa]:O||{}},_?{[Ia]:_}:{},k?{[ns]:k}:{}))}}})(t,this.ki,r,s,i,n),e||(this.Ps=!1),this.Hs(e)}}override(t,e){e===void 0&&(e=!1),Le.warn("override is deprecated. Please use overrideFeatureFlags instead."),this.overrideFeatureFlags({flags:t,suppressWarning:e})}overrideFeatureFlags(t){if(!this._instance.__loaded||!this.ki)return Le.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags");if(t===!1)return this.ki.unregister(jt),this.ki.unregister(Jn),this.Hs(),bn.info("All overrides cleared");if(ae(t)){var e=nc(t);return this.ki.register({[jt]:e}),this.Hs(),bn.info("Flag overrides set",{flags:t})}if(t&&typeof t=="object"&&("flags"in t||"payloads"in t)){var n,r=t;if(this.ks=!!((n=r.suppressWarning)!==null&&n!==void 0&&n),"flags"in r){if(r.flags===!1)this.ki.unregister(jt),bn.info("Flag overrides cleared");else if(r.flags){if(ae(r.flags)){var s=nc(r.flags);this.ki.register({[jt]:s})}else this.ki.register({[jt]:r.flags});bn.info("Flag overrides set",{flags:r.flags})}}return"payloads"in r&&(r.payloads===!1?(this.ki.unregister(Jn),bn.info("Payload overrides cleared")):r.payloads&&(this.ki.register({[Jn]:r.payloads}),bn.info("Payload overrides set",{payloads:r.payloads}))),void this.Hs()}if(t&&typeof t=="object")return this.ki.register({[jt]:t}),this.Hs(),bn.info("Flag overrides set",{flags:t});Le.warn("Invalid overrideOptions provided to overrideFeatureFlags",{overrideOptions:t})}onFeatureFlags(t){if(this.addFeatureFlagsHandler(t),this.Cs){var{flags:e,flagVariants:n}=this.Us();t(e,n)}return()=>this.removeFeatureFlagsHandler(t)}updateEarlyAccessFeatureEnrollment(t,e,n){var r,s=(this.Os(Hr)||[]).find(l=>l.flagKey===t),i={["$feature_enrollment/"+t]:e},a={$feature_flag:t,$feature_enrollment:e,$set:i};s&&(a.$early_access_feature_name=s.name),n&&(a.$feature_enrollment_stage=n),this._instance.capture("$feature_enrollment_update",a),this.setPersonPropertiesForFlags(i,!1);var o=M({},this.getFlagVariants(),{[t]:e});(r=this.ki)==null||r.register({[Ms]:Object.keys(rc(o)),[Yn]:o}),this.Hs()}getEarlyAccessFeatures(t,e,n){e===void 0&&(e=!1);var r=this.Os(Hr),s=n?"&"+n.map(i=>"stage="+i).join("&"):"";if(r&&!e)return t(r);this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/early_access_features/?token="+this.qt.token+s),method:"GET",callback:i=>{var a,o;if(i.json){var l=i.json.earlyAccessFeatures;return(a=this.ki)==null||a.unregister(Hr),(o=this.ki)==null||o.register({[Hr]:l}),t(l)}}})}Us(){var t=this.getFlags(),e=this.getFlagVariants();return{flags:t.filter(n=>e[n]),flagVariants:Object.keys(e).filter(n=>e[n]).reduce((n,r)=>(n[r]=e[r],n),{})}}Hs(t){var{flags:e,flagVariants:n}=this.Us();this.featureFlagEventHandlers.forEach(r=>r(e,n,{errorsLoading:t}))}setPersonPropertiesForFlags(t,e){e===void 0&&(e=!0);var n=this.Os(Br)||{},r=(t==null?void 0:t.$set)||(t!=null&&t.$set_once?{}:t),s=t==null?void 0:t.$set_once,i={};if(s)for(var a in s)({}).hasOwnProperty.call(s,a)&&(a in n||(i[a]=s[a]));this._instance.register({[Br]:M({},n,i,r)}),e&&this._instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this._instance.unregister(Br)}setGroupPropertiesForFlags(t,e){e===void 0&&(e=!0);var n=this.Os(wn)||{};Object.keys(n).length!==0&&Object.keys(n).forEach(r=>{n[r]=M({},n[r],t[r]),delete t[r]}),this._instance.register({[wn]:M({},n,t)}),e&&this._instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(t){if(t){var e=this.Os(wn)||{};this._instance.register({[wn]:M({},e,{[t]:{}})})}else this._instance.unregister(wn)}reset(){this.Cs=!1,this.Is=!1,this.Ts=!1,this.Es=!1,this.Ms=!1,this.$anon_distinct_id=void 0,this.js(),this.ks=!1}}},ev={sessionRecording:class{get qt(){return this._instance.config}get ki(){return this._instance.persistence}get started(){var t;return!((t=this.Bs)==null||!t.isStarted)}get status(){var t,e;return this.zs===Dr||this.zs===Ps?this.zs:(t=(e=this.Bs)==null?void 0:e.status)!==null&&t!==void 0?t:this.zs}constructor(t){if(this._forceAllowLocalhostNetworkCapture=!1,this.zs=Vl,this.Vs=void 0,this._instance=t,!this._instance.sessionManager)throw Mt.error("started without valid sessionManager"),new Error(Xa+" started without valid sessionManager. This is a bug.");if(this.qt.cookieless_mode===qt)throw new Error(Xa+' cannot be used with cookieless_mode="always"')}initialize(){this.startIfEnabledOrStop()}get Ws(){var t,e=!((t=this._instance.get_property(kn))==null||!t.enabled),n=!this.qt.disable_session_recording,r=this.qt.disable_session_recording||this._instance.consent.isOptedOut();return w&&e&&n&&!r}startIfEnabledOrStop(t){var e;if(!this.Ws||(e=this.Bs)==null||!e.isStarted){var n=!F(Object.assign)&&!F(Array.from);this.Ws&&n?(this.Zs(t),Mt.info("starting")):(this.zs=Vl,this.stopRecording())}}Zs(t){var e,n,r;this.Ws&&(this.zs!==Dr&&this.zs!==Ps&&(this.zs=Kl),K!=null&&(e=K.__PosthogExtensions__)!=null&&(e=e.rrweb)!=null&&e.record&&(n=K.__PosthogExtensions__)!=null&&n.initSessionRecording?this.Gs(t):(r=K.__PosthogExtensions__)==null||r.loadExternalDependency==null||r.loadExternalDependency(this._instance,this.Qs,s=>{if(s)return Mt.error("could not load recorder",s);this.Gs(t)}))}stopRecording(){var t,e;(t=this.Vs)==null||t.call(this),this.Vs=void 0,(e=this.Bs)==null||e.stop()}Js(){var t,e;(t=this.Vs)==null||t.call(this),this.Vs=void 0,(e=this.Bs)==null||e.discard()}Ks(){var t;(t=this.ki)==null||t.unregister(vo)}Ys(t,e){if(oe(t))return null;var n,r=Ke(t)?t:parseFloat(t);return typeof(n=r)!="number"||!Number.isFinite(n)||0>n||n>1?(Mt.warn(e+" must be between 0 and 1. Ignoring invalid value:",t),null):r}Xs(t){if(this.ki){var e,n,r=this.ki,s=()=>{var i,a=t.sessionRecording===!1?void 0:t.sessionRecording,o=this.Ys((i=this.qt.session_recording)==null?void 0:i.sampleRate,"session_recording.sampleRate"),l=this.Ys(a==null?void 0:a.sampleRate,"remote config sampleRate"),c=o??l;oe(c)&&this.Ks();var u=a==null?void 0:a.minimumDurationMilliseconds;r.register({[kn]:M({cache_timestamp:Date.now(),enabled:!!a},a,{networkPayloadCapture:M({capturePerformance:t.capturePerformance},a==null?void 0:a.networkPayloadCapture),canvasRecording:{enabled:a==null?void 0:a.recordCanvas,fps:a==null?void 0:a.canvasFps,quality:a==null?void 0:a.canvasQuality},sampleRate:c,minimumDurationMilliseconds:F(u)?null:u,endpoint:a==null?void 0:a.endpoint,triggerMatchType:a==null?void 0:a.triggerMatchType,masking:a==null?void 0:a.masking,urlTriggers:a==null?void 0:a.urlTriggers,version:a==null?void 0:a.version,triggerGroups:a==null?void 0:a.triggerGroups})})};s(),(e=this.Vs)==null||e.call(this),this.Vs=(n=this._instance.sessionManager)==null?void 0:n.onSessionId(s)}}onRemoteConfig(t){return"sessionRecording"in t?t.sessionRecording===!1?(this.Xs(t),void this.Js()):(this.Xs(t),void this.startIfEnabledOrStop()):(this.zs===Dr&&(this.zs=Ps,Mt.warn("config refresh failed, recording will not start until page reload")),void this.startIfEnabledOrStop())}log(t,e){var n;e===void 0&&(e="log"),(n=this.Bs)!=null&&n.log?this.Bs.log(t,e):Mt.warn("log called before recorder was ready")}get Qs(){var t,e,n=(t=this._instance)==null||(t=t.persistence)==null?void 0:t.get_property(kn);return(n==null||(e=n.scriptConfig)==null?void 0:e.script)||"lazy-recorder"}eo(){var t,e,n=this._instance.get_property(kn);if(!n)return!1;try{e=typeof n=="object"?n:JSON.parse(n)}catch(s){return Mt.warn("persisted remote config for session recording is invalid and will be ignored",s),!1}var r=(t=e.cache_timestamp)!==null&&t!==void 0?t:Date.now();return 36e5>=Date.now()-r}Gs(t){var e,n;if((e=K.__PosthogExtensions__)==null||!e.initSessionRecording)return Mt.warn("Called on script loaded before session recording is available. This can be caused by adblockers."),void this._instance.register_for_session({[Zu]:!0});if(this.Bs||(this.Bs=(n=K.__PosthogExtensions__)==null?void 0:n.initSessionRecording(this._instance),this.Bs._forceAllowLocalhostNetworkCapture=this._forceAllowLocalhostNetworkCapture),!this.eo())return this.zs===Ps||this.zs===Dr?void 0:(this.zs=Dr,Mt.info("persisted remote config is stale, requesting fresh config before starting"),void new xd(this._instance).load());this.zs=Kl,this.Bs.start(t)}onRRwebEmit(t){var e;(e=this.Bs)==null||e.onRRwebEmit==null||e.onRRwebEmit(t)}overrideLinkedFlag(){var t,e;this.Bs||(e=this.ki)==null||e.register({[Wu]:!0}),(t=this.Bs)==null||t.overrideLinkedFlag()}overrideSampling(){var t,e;this.Bs||(e=this.ki)==null||e.register({[Ju]:!0}),(t=this.Bs)==null||t.overrideSampling()}overrideTrigger(t){var e,n;this.Bs||(n=this.ki)==null||n.register({[t==="url"?Vu:Ku]:!0}),(e=this.Bs)==null||e.overrideTrigger(t)}get sdkDebugProperties(){var t;return((t=this.Bs)==null?void 0:t.sdkDebugProperties)||{$recording_status:this.status}}tryAddCustomEvent(t,e){var n;return!((n=this.Bs)==null||!n.tryAddCustomEvent(t,e))}}},tv={autocapture:class{constructor(t){this.ro=!1,this.io=null,this.no=!1,this.instance=t,this.rageclicks=new Jl(t.config.rageclick),this.so=null}initialize(){this.startIfEnabled()}get qt(){var t,e,n=Pe(this.instance.config.autocapture)?this.instance.config.autocapture:{};return n.url_allowlist=(t=n.url_allowlist)==null?void 0:t.map(r=>new RegExp(r)),n.url_ignorelist=(e=n.url_ignorelist)==null?void 0:e.map(r=>new RegExp(r)),n}oo(){if(this.isBrowserSupported()){if(w&&H){var t=n=>{n=n||(w==null?void 0:w.event);try{this.ao(n)}catch(r){qi.error("Failed to capture event",r)}};if(Ae(H,"submit",t,{capture:!0}),Ae(H,"change",t,{capture:!0}),Ae(H,"click",t,{capture:!0}),this.qt.capture_copied_text){var e=n=>{n=n||(w==null?void 0:w.event);try{this.ao(n,Ui)}catch(r){qi.error("Failed to capture copy/cut event",r)}};Ae(H,"copy",e,{capture:!0}),Ae(H,"cut",e,{capture:!0})}}}else qi.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this.ro&&(this.oo(),this.ro=!0)}onRemoteConfig(t){t.elementsChainAsString&&(this.no=t.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[ka]:!!t.autocapture_opt_out}),this.io=!!t.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(t){this.so=t}getElementSelectors(t){var e,n=[];return(e=this.so)==null||e.forEach(r=>{var s=H==null?void 0:H.querySelectorAll(r);s==null||s.forEach(i=>{t===i&&n.push(r)})}),n}get isEnabled(){var t,e,n=(t=this.instance.persistence)==null?void 0:t.props[ka];if(at(this.io)&&!Ot(n)&&!this.instance.Kr())return!1;var r=(e=this.io)!==null&&e!==void 0?e:!!n;return!!this.instance.config.autocapture&&!r}ao(t,e){if(e===void 0&&(e="$autocapture"),this.isEnabled){var n,r=Oi(t);nd(r)&&(r=r.parentNode||null),e==="$autocapture"&&t.type==="click"&&t instanceof MouseEvent&&this.instance.config.rageclick&&(n=this.rageclicks)!=null&&n.isRageClick(t.clientX,t.clientY,t.timeStamp||new Date().getTime())&&El(r,this.instance.config.rageclick)&&this.ao(t,"$rageclick");var s=e===Ui;if(r&&function(h,p,d,v,f){var _,k,C,P;if(d===void 0&&(d=void 0),!w||ko(h)||(_=d)!=null&&_.url_allowlist&&!wl(d.url_allowlist)||(k=d)!=null&&k.url_ignorelist&&wl(d.url_ignorelist))return!1;if((C=d)!=null&&C.dom_event_allowlist){var L=d.dom_event_allowlist;if(L&&!L.some(x=>p.type===x))return!1}var{parentIsUsefulElement:$,targetElementList:O}=ld(h,v);if(!function(x,S){var z=S==null?void 0:S.element_allowlist;if(F(z))return!0;var D,V=function(G){if(z.some(te=>G.tagName.toLowerCase()===te))return{v:!0}};for(var X of x)if(D=V(X))return D.v;return!1}(O,d)||!id(O,(P=d)==null?void 0:P.css_selector_allowlist))return!1;var N=w.getComputedStyle(h);if(N&&N.getPropertyValue("cursor")==="pointer"&&p.type==="click")return!0;var T=h.tagName.toLowerCase();switch(T){case"html":return!1;case"form":return(f||["submit"]).indexOf(p.type)>=0;case"input":case"select":case"textarea":return(f||["change","click"]).indexOf(p.type)>=0;default:return $?(f||["click"]).indexOf(p.type)>=0:(f||["click"]).indexOf(p.type)>=0&&(xo.indexOf(T)>-1||h.getAttribute("contenteditable")==="true")}}(r,t,this.qt,s,s?["copy","cut"]:void 0)){var{props:i,explicitNoCapture:a}=Gm(r,{e:t,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this.qt.element_attribute_ignorelist,elementsChainAsString:this.no});if(a)return!1;var o=this.getElementSelectors(r);if(o&&o.length>0&&(i.$element_selectors=o),e===Ui){var l,c=sd(w==null||(l=w.getSelection())==null?void 0:l.toString()),u=t.type||"clipboard";if(!c)return!1;i.$selected_content=c,i.$copy_type=u}return this.instance.capture(e,i),!0}}}isBrowserSupported(){return Ft(H==null?void 0:H.querySelectorAll)}},historyAutocapture:class{constructor(t){var e;this._instance=t,this.uo=(w==null||(e=w.location)==null?void 0:e.pathname)||""}initialize(){this.startIfEnabled()}get isEnabled(){return this._instance.config.capture_pageview==="history_change"}startIfEnabled(){this.isEnabled&&(U.info("History API monitoring enabled, starting..."),this.monitorHistoryChanges())}stop(){this.lo&&this.lo(),this.lo=void 0,U.info("History API monitoring stopped")}monitorHistoryChanges(){w&&w.history&&(this.ho("pushState"),this.ho("replaceState"),this.co())}ho(t){var e;if(w&&((e=w.history[t])==null||!e.__posthog_wrapped__)){var n=this;(function(r,s,i){try{if(!(s in r))return()=>{};var a=r[s],o=i(a);return Ft(o)&&(o.prototype=o.prototype||{},Object.defineProperties(o,{__posthog_wrapped__:{enumerable:!1,value:!0}})),r[s]=o,()=>{r[s]===o&&(r[s]=a)}}catch{return()=>{}}})(w.history,t,r=>function(s,i,a){r.call(this,s,i,a),n.do(t)})}}do(t){try{var e,n=w==null||(e=w.location)==null?void 0:e.pathname;if(!n)return;n!==this.uo&&this.isEnabled&&this._instance.capture(Wn,{navigation_type:t}),this.uo=n}catch(r){U.error("Error capturing "+t+" pageview",r)}}co(){if(!this.lo){var t=()=>{this.do("popstate")};Ae(w,"popstate",t),this.lo=()=>{w&&w.removeEventListener("popstate",t)}}}},heatmaps:class{get qt(){return this.instance.config}constructor(t){var e;this.vo=!1,this.ro=!1,this.fo=null,this.instance=t,this.vo=!((e=this.instance.persistence)==null||!e.props[Ea]),this.rageclicks=new Jl(t.config.rageclick)}initialize(){this.startIfEnabled()}get flushIntervalMilliseconds(){var t=5e3;return Pe(this.qt.capture_heatmaps)&&this.qt.capture_heatmaps.flush_interval_milliseconds&&(t=this.qt.capture_heatmaps.flush_interval_milliseconds),t}get isEnabled(){return oe(this.qt.capture_heatmaps)?oe(this.qt.enable_heatmaps)?this.vo:this.qt.enable_heatmaps:this.qt.capture_heatmaps!==!1}startIfEnabled(){if(this.isEnabled){if(this.ro)return;Wm.info("starting..."),this.po(),this.At()}else{var t;clearInterval((t=this.fo)!==null&&t!==void 0?t:void 0),this.mo(),this.getAndClearBuffer()}}onRemoteConfig(t){if("heatmaps"in t){var e=!!t.heatmaps;this.instance.persistence&&this.instance.persistence.register({[Ea]:e}),this.vo=e,this.startIfEnabled()}}getAndClearBuffer(){var t=this.M;return this.M=void 0,t}yo(t){this.Mt(t.originalEvent,"deadclick")}At(){this.fo&&clearInterval(this.fo),this.fo=(H==null?void 0:H.visibilityState)==="visible"?setInterval(this.ci.bind(this),this.flushIntervalMilliseconds):null}po(){w&&H&&(this.bo=this.ci.bind(this),Ae(w,Xs,this.bo),this._o=t=>this.Mt(t||(w==null?void 0:w.event)),Ae(H,"click",this._o,{capture:!0}),this.wo=t=>this.xo(t||(w==null?void 0:w.event)),Ae(H,"mousemove",this.wo,{capture:!0}),this.So=new Rl(this.instance,um,this.yo.bind(this)),this.So.startIfEnabledOrStop(),this.ko=this.At.bind(this),Ae(H,Qs,this.ko),this.ro=!0)}mo(){var t;w&&H&&(this.bo&&w.removeEventListener(Xs,this.bo),this._o&&H.removeEventListener("click",this._o,{capture:!0}),this.wo&&H.removeEventListener("mousemove",this.wo,{capture:!0}),this.ko&&H.removeEventListener(Qs,this.ko),clearTimeout(this.Co),(t=this.So)==null||t.stop(),this.ro=!1)}Io(t,e){var n=this.instance.scrollManager.scrollY(),r=this.instance.scrollManager.scrollX(),s=this.instance.scrollManager.scrollElement(),i=function(a,o,l){for(var c=a;c&&dn(c)&&!it(c,"body");){if(c===l)return!1;if(ee(o,w==null?void 0:w.getComputedStyle(c).position))return!0;c=ad(c)}return!1}(Oi(t),["fixed","sticky"],s);return{x:t.clientX+(i?0:r),y:t.clientY+(i?0:n),target_fixed:i,type:e}}Mt(t,e){var n;if(e===void 0&&(e="click"),!_l(t.target)&&Yl(t)){var r=this.Io(t,e);(n=this.rageclicks)!=null&&n.isRageClick(t.clientX,t.clientY,new Date().getTime())&&El(Oi(t),this.instance.config.rageclick)&&this.To(M({},r,{type:"rageclick"})),this.To(r)}}xo(t){!_l(t.target)&&Yl(t)&&(clearTimeout(this.Co),this.Co=setTimeout(()=>{this.To(this.Io(t,"mousemove"))},500))}To(t){if(w){var e=w.location.href,n=this.qt.custom_personal_data_properties,r=this.qt.mask_personal_data_properties?[...br,...n||[]]:[],s=is(e,r,as);this.M=this.M||{},this.M[s]||(this.M[s]=[]),this.M[s].push(t)}}ci(){this.M&&!ln(this.M)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}},deadClicksAutocapture:Rl,webVitalsAutocapture:class{constructor(t){var e;this.vo=!1,this.ro=!1,this.M={url:void 0,metrics:[],firstMetricTimestamp:void 0},this.Eo=()=>{clearTimeout(this.Mo),this.M.metrics.length!==0&&(this._instance.capture("$web_vitals",this.M.metrics.reduce((n,r)=>M({},n,{["$web_vitals_"+r.name+"_event"]:M({},r),["$web_vitals_"+r.name+"_value"]:r.value}),{})),this.M={url:void 0,metrics:[],firstMetricTimestamp:void 0})},this.dt=n=>{var r;this.M=this.M||{url:void 0,metrics:[],firstMetricTimestamp:void 0};var s=this.Ro();if(!F(s))if(oe(n==null?void 0:n.name)||oe(n==null?void 0:n.value))vn.error("Invalid metric received",n);else if(!this.Po||this.Po>n.value){this.M.url!==s&&(this.Eo(),this.Mo=setTimeout(this.Eo,this.flushToCaptureTimeoutMs)),F(this.M.url)&&(this.M.url=s),this.M.firstMetricTimestamp=F(this.M.firstMetricTimestamp)?Date.now():this.M.firstMetricTimestamp,n.attribution&&n.attribution.interactionTargetElement&&(n.attribution.interactionTargetElement=void 0);var i=(r=this._instance.sessionManager)==null?void 0:r.checkAndGetSessionAndWindowId(!0),a=M({},n,{$current_url:s,timestamp:Date.now()});F(i)||(a.$session_id=i.sessionId,a.$window_id=i.windowId),this.M.metrics.push(a),this.M.metrics.length===this.allowedMetrics.length&&this.Eo()}else vn.error("Ignoring metric with value >= "+this.Po,n)},this.Oo=()=>{if(!this.ro){var n,r,s,i,a=K.__PosthogExtensions__;F(a)||F(a.postHogWebVitalsCallbacks)||({onLCP:n,onCLS:r,onFCP:s,onINP:i}=a.postHogWebVitalsCallbacks),n&&r&&s&&i?(this.allowedMetrics.indexOf("LCP")>-1&&n(this.dt.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&r(this.dt.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&s(this.dt.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&i(this.dt.bind(this)),this.ro=!0):vn.error("web vitals callbacks not loaded - not starting")}},this._instance=t,this.vo=!((e=this._instance.persistence)==null||!e.props[Pa]),this.startIfEnabled()}get Lo(){return this._instance.config.capture_performance}get allowedMetrics(){var t,e,n=Pe(this.Lo)?(t=this.Lo)==null?void 0:t.web_vitals_allowed_metrics:void 0;return oe(n)?((e=this._instance.persistence)==null?void 0:e.props[Oa])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(Pe(this.Lo)?this.Lo.web_vitals_delayed_flush_ms:void 0)||5e3}get useAttribution(){var t=Pe(this.Lo)?this.Lo.web_vitals_attribution:void 0;return t!=null&&t}get Po(){var t=Pe(this.Lo)&&Ke(this.Lo.__web_vitals_max_value)?this.Lo.__web_vitals_max_value:Wl;return t>0&&6e4>=t?Wl:t}get isEnabled(){var t=je==null?void 0:je.protocol;if(t!=="http:"&&t!=="https:")return vn.info("Web Vitals are disabled on non-http/https protocols"),!1;var e=Pe(this.Lo)?this.Lo.web_vitals:Ot(this.Lo)?this.Lo:void 0;return Ot(e)?e:this.vo}startIfEnabled(){this.isEnabled&&!this.ro&&(vn.info("enabled, starting..."),this.lr(this.Oo))}onRemoteConfig(t){if("capturePerformance"in t){var e=Pe(t.capturePerformance)&&!!t.capturePerformance.web_vitals,n=Pe(t.capturePerformance)?t.capturePerformance.web_vitals_allowed_metrics:void 0;this._instance.persistence&&(this._instance.persistence.register({[Pa]:e}),this._instance.persistence.register({[Oa]:n})),this.vo=e,this.startIfEnabled()}}lr(t){var e,n;(e=K.__PosthogExtensions__)!=null&&e.postHogWebVitalsCallbacks?t():(n=K.__PosthogExtensions__)==null||n.loadExternalDependency==null||n.loadExternalDependency(this._instance,this.useAttribution?"web-vitals-with-attribution":"web-vitals",r=>{r?vn.error("failed to load script",r):t()})}Ro(){var t=w?w.location.href:void 0;if(t){var e=this._instance.config.custom_personal_data_properties,n=this._instance.config.mask_personal_data_properties?[...br,...e||[]]:[];return is(t,n,as)}vn.error("Could not determine current URL")}}},nv={exceptionObserver:class{constructor(t){var e,n,r;this.Oo=()=>{var s;if(w&&this.isEnabled&&(s=K.__PosthogExtensions__)!=null&&s.errorWrappingFunctions){var i=K.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,a=K.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,o=K.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;try{!this.Fo&&this.qt.capture_unhandled_errors&&(this.Fo=i(this.captureException.bind(this))),!this.Ao&&this.qt.capture_unhandled_rejections&&(this.Ao=a(this.captureException.bind(this))),!this.No&&this.qt.capture_console_errors&&(this.No=o(this.captureException.bind(this)))}catch(l){Nr.error("failed to start",l),this.Do()}}},this._instance=t,this.$o=!((e=this._instance.persistence)==null||!e.props[Sa]),this.qo=new cg({refillRate:(n=this._instance.config.error_tracking.__exceptionRateLimiterRefillRate)!==null&&n!==void 0?n:1,bucketSize:(r=this._instance.config.error_tracking.__exceptionRateLimiterBucketSize)!==null&&r!==void 0?r:10,refillInterval:1e4,Gt:Nr}),this.qt=this.jo(),this.startIfEnabledOrStop()}jo(){var t=this._instance.config.capture_exceptions,e={capture_unhandled_errors:!1,capture_unhandled_rejections:!1,capture_console_errors:!1};return Pe(t)?e=M({},e,t):(F(t)?this.$o:t)&&(e=M({},e,{capture_unhandled_errors:!0,capture_unhandled_rejections:!0})),e}get isEnabled(){return this.qt.capture_console_errors||this.qt.capture_unhandled_errors||this.qt.capture_unhandled_rejections}startIfEnabledOrStop(){this.isEnabled?(Nr.info("enabled"),this.Do(),this.lr(this.Oo)):this.Do()}lr(t){var e,n;(e=K.__PosthogExtensions__)!=null&&e.errorWrappingFunctions&&t(),(n=K.__PosthogExtensions__)==null||n.loadExternalDependency==null||n.loadExternalDependency(this._instance,"exception-autocapture",r=>{if(r)return Nr.error("failed to load script",r);t()})}Do(){var t,e,n;(t=this.Fo)==null||t.call(this),this.Fo=void 0,(e=this.Ao)==null||e.call(this),this.Ao=void 0,(n=this.No)==null||n.call(this),this.No=void 0}onRemoteConfig(t){"autocaptureExceptions"in t&&(this.$o=!!t.autocaptureExceptions||!1,this._instance.persistence&&this._instance.persistence.register({[Sa]:this.$o}),this.qt=this.jo(),this.startIfEnabledOrStop())}onConfigChange(){this.qt=this.jo()}captureException(t){var e,n,r,s=(e=t==null||(n=t.$exception_list)==null||(n=n[0])==null?void 0:n.type)!==null&&e!==void 0?e:"Exception";this.qo.consumeRateLimit(s)?Nr.info("Skipping exception capture because of client rate limiting.",{exception:s}):(r=this._instance.exceptions)==null||r.sendExceptionEvent(t)}},exceptions:class{constructor(t){var e,n;this.Ho=[],this.Uo=new xg([new Og,new Fg,new Cg,new Ag,new Lg,new Dg,new Mg,new jg],function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),a=1;s>a;a++)i[a-1]=arguments[a];return function(o,l){l===void 0&&(l=0);for(var c=[],u=o.split(`
`),h=l;u.length>h;h++){var p=u[h];if(1024>=p.length){var d=ml.test(p)?p.replace(ml,"$1"):p;if(!d.match(/\S*Error: /)){for(var v of i){var f=v(d,r);if(f){c.push(f);break}}if(c.length>=50)break}}}return function(_){if(!_.length)return[];var k=Array.from(_);return k.reverse(),k.slice(0,50).map(C=>{return M({},C,{filename:C.filename||(P=k,P[P.length-1]||{}).filename,function:C.function||vr});var P})}(c)}}("web:javascript",Tg,$g)),this._instance=t,this.Ho=(e=(n=this._instance.persistence)==null?void 0:n.get_property(Ta))!==null&&e!==void 0?e:[],this.Bo=Ws(this.zo()),this.Vo=new qg(this.Bo)}onConfigChange(){this.Bo=Ws(this.zo()),this.Vo.setConfig(this.Bo)}onRemoteConfig(t){var e,n,r;if("errorTracking"in t){var s=(e=(n=t.errorTracking)==null?void 0:n.suppressionRules)!==null&&e!==void 0?e:[],i=(r=t.errorTracking)==null?void 0:r.captureExtensionExceptions;this.Ho=s,this._instance.persistence&&this._instance.persistence.register({[Ta]:this.Ho,[Ra]:i})}}get Wo(){var t,e=!!this._instance.get_property(Ra),n=this._instance.config.error_tracking.captureExtensionExceptions;return(t=n??e)!==null&&t!==void 0&&t}buildProperties(t,e){return this.Uo.buildFromUnknown(t,{syntheticException:e==null?void 0:e.syntheticException,mechanism:{handled:e==null?void 0:e.handled}})}addExceptionStep(t,e){if(this.Bo.enabled)try{if(!Ee(t)||t.trim().length===0)return void Nt.warn("Ignoring exception step because message must be a non-empty string");var n=this.Zo(e),{sanitizedProperties:r,droppedKeys:s}=function(i){if(!i)return{sanitizedProperties:{},droppedKeys:[]};var a=[];return{sanitizedProperties:Object.keys(i).reduce((o,l)=>Ug.has(l)?(a.push(l),o):(o[l]=i[l],o),{}),droppedKeys:a}}(n);s.length>0&&Nt.warn("Ignoring reserved exception step fields",{droppedKeys:s}),this.Vo.add(M({[Gs]:t,[Js]:new Date().toISOString()},r))}catch(i){Nt.error("Failed to add exception step. Ignoring breadcrumb.",i)}}sendExceptionEvent(t){try{var e=t.$exception_list;if(this.Go(e)){if(this.Qo(e))return this.Jo("Exception dropped: matched a suppression rule"),void Nt.info("Skipping exception capture because a suppression rule matched");if(!this.Wo&&this.Ko(e))return this.Jo("Exception dropped: thrown by a browser extension"),void Nt.info("Skipping exception capture because it was thrown by an extension");if(!this._instance.config.error_tracking.__capturePostHogExceptions&&this.Yo(e))return this.Jo("Exception dropped: thrown by the PostHog SDK"),void Nt.info("Skipping exception capture because it was thrown by the PostHog SDK")}var n=this.Bo.enabled&&oe(t.$exception_steps)?this.Xo(t):t;try{var r=this._instance.capture("$exception",n,{_noTruncate:!0,_batchKey:"exceptionEvent",In:!0});return r&&this.Vo.clear(),r}catch(s){return Nt.error("Failed to capture exception event. Dropping this exception.",s),void this.Vo.clear()}}catch(s){return void Nt.error("Failed to process exception event. Ignoring this exception.",s)}}Xo(t){try{var e=this.Vo.getAttachable();return e.length===0?t:M({},t,{$exception_steps:e})}catch(n){return Nt.error("Failed to read buffered exception steps. Capturing exception without steps.",n),t}}Jo(t){this.Bo.enabled&&this.Vo.add({[Gs]:t,[Js]:new Date().toISOString()})}Zo(t){return Pe(t)?M({},t):{}}zo(){var t,e;return(t=(e=this._instance.config.error_tracking)==null?void 0:e.exception_steps)!==null&&t!==void 0?t:{}}Qo(t){if(t.length===0)return!1;var e=t.reduce((n,r)=>{var{type:s,value:i}=r;return Ee(s)&&s.length>0&&n.$exception_types.push(s),Ee(i)&&i.length>0&&n.$exception_values.push(i),n},{$exception_types:[],$exception_values:[]});return this.Ho.some(n=>{var r=n.values.map(s=>{var i,a=Od[s.operator],o=ae(s.value)?s.value:[s.value],l=(i=e[s.key])!==null&&i!==void 0?i:[];return o.length>0&&a(o,l)});return n.type==="OR"?r.some(Boolean):r.every(Boolean)})}Ko(t){return t.flatMap(e=>{var n,r;return(n=(r=e.stacktrace)==null?void 0:r.frames)!==null&&n!==void 0?n:[]}).some(e=>e.filename&&e.filename.startsWith("chrome-extension://"))}Yo(t){if(t.length>0){var e,n,r,s,i=(e=(n=t[0].stacktrace)==null?void 0:n.frames)!==null&&e!==void 0?e:[],a=i[i.length-1];return(r=a==null||(s=a.filename)==null?void 0:s.includes("posthog.com/static"))!==null&&r!==void 0&&r}return!1}Go(t){return!oe(t)&&ae(t)}}},rv=M({productTours:class{get ki(){return this._instance.persistence}constructor(t){this.ea=null,this.ta=null,this._instance=t}initialize(){this.loadIfEnabled()}onRemoteConfig(t){"productTours"in t&&(this.ki&&this.ki.register({[$a]:!!t.productTours}),this.loadIfEnabled())}loadIfEnabled(){var t,e;this.ea||(t=this._instance).config.disable_product_tours||(e=t.persistence)==null||!e.get_property($a)||this.lr(()=>this.ra())}lr(t){var e,n;(e=K.__PosthogExtensions__)!=null&&e.generateProductTours?t():(n=K.__PosthogExtensions__)==null||n.loadExternalDependency==null||n.loadExternalDependency(this._instance,"product-tours",r=>{r?Ql.error("Could not load product tours script",r):t()})}ra(){var t;!this.ea&&(t=K.__PosthogExtensions__)!=null&&t.generateProductTours&&(this.ea=K.__PosthogExtensions__.generateProductTours(this._instance,!0))}getProductTours(t,e){if(e===void 0&&(e=!1),!ae(this.ta)||e){var n=this.ki;if(n){var r=n.props[Ns];if(ae(r)&&!e)return this.ta=r,void t(r,{isLoaded:!0})}this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/product_tours/?token="+this._instance.config.token),method:"GET",callback:s=>{var i=s.statusCode;if(i!==200||!s.json){var a="Product Tours API could not be loaded, status: "+i;return Ql.error(a),void t([],{isLoaded:!1,error:a})}var o=ae(s.json.product_tours)?s.json.product_tours:[];this.ta=o,n&&n.register({[Ns]:o}),t(o,{isLoaded:!0})}})}else t(this.ta,{isLoaded:!0})}getActiveProductTours(t){oe(this.ea)?t([],{isLoaded:!1,error:"Product tours not loaded"}):this.ea.getActiveProductTours(t)}showProductTour(t){var e;(e=this.ea)==null||e.showTourById(t)}previewTour(t){this.ea?this.ea.previewTour(t):this.lr(()=>{var e;this.ra(),(e=this.ea)==null||e.previewTour(t)})}dismissProductTour(){var t;(t=this.ea)==null||t.dismissTour("user_clicked_skip")}nextStep(){var t;(t=this.ea)==null||t.nextStep()}previousStep(){var t;(t=this.ea)==null||t.previousStep()}clearCache(){var t;this.ta=null,(t=this.ki)==null||t.unregister(Ns)}resetTour(t){var e;(e=this.ea)==null||e.resetTour(t)}resetAllTours(){var t;(t=this.ea)==null||t.resetAllTours()}cancelPendingTour(t){var e;(e=this.ea)==null||e.cancelPendingTour(t)}}},ci),sv={siteApps:class{constructor(t){this._instance=t,this.ia=[],this.apps={}}get isEnabled(){return!!this._instance.config.opt_in_site_apps}na(t,e){if(e){var n=this.globalsForEvent(e);this.ia.push(n),this.ia.length>1e3&&(this.ia=this.ia.slice(10))}}get siteAppLoaders(){var t;return(t=K._POSTHOG_REMOTE_CONFIG)==null||(t=t[this._instance.config.token])==null?void 0:t.siteApps}initialize(){if(this.isEnabled){var t=this._instance._addCaptureHook(this.na.bind(this));this.sa=()=>{t(),this.ia=[],this.sa=void 0}}}globalsForEvent(t){var e,n,r,s,i,a,o;if(!t)throw new Error("Event payload is required");var l={},c=this._instance.get_property("$groups")||[],u=this._instance.get_property("$stored_group_properties")||{};for(var[h,p]of Object.entries(u))l[h]={id:c[h],type:h,properties:p};var{$set_once:d,$set:v}=t;return{event:M({},mu(t,Vm),{properties:M({},t.properties,v?{$set:M({},(e=(n=t.properties)==null?void 0:n.$set)!==null&&e!==void 0?e:{},v)}:{},d?{$set_once:M({},(r=(s=t.properties)==null?void 0:s.$set_once)!==null&&r!==void 0?r:{},d)}:{}),elements_chain:(i=(a=t.properties)==null?void 0:a.$elements_chain)!==null&&i!==void 0?i:"",distinct_id:(o=t.properties)==null?void 0:o.distinct_id}),person:{properties:this._instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(t){var e=this.apps[t.id],n=()=>{var a;!e.errored&&this.ia.length&&(Kt.info("Processing "+this.ia.length+" events for site app with id "+t.id),this.ia.forEach(o=>e.processEvent==null?void 0:e.processEvent(o)),e.processedBuffer=!0),Object.values(this.apps).every(o=>o.processedBuffer||o.errored)&&((a=this.sa)==null||a.call(this))},r=!1,s=a=>{e.errored=!a,e.loaded=!0,Kt.info("Site app with id "+t.id+" "+(a?"loaded":"errored")),r&&n()};try{var{processEvent:i}=t.init({posthog:this._instance,callback(a){s(a)}});i&&(e.processEvent=i),r=!0}catch(a){Kt.error(Xl+t.id,a),s(!1)}if(r&&e.loaded)try{n()}catch(a){Kt.error("Error while processing buffered events PostHog app with config id "+t.id,a),e.errored=!0}}oa(){var t=this.siteAppLoaders||[];for(var e of t)this.apps[e.id]={id:e.id,loaded:!1,errored:!1,processedBuffer:!1};for(var n of t)this.setupSiteApp(n)}aa(t){if(Object.keys(this.apps).length!==0){var e=this.globalsForEvent(t);for(var n of Object.values(this.apps))try{n.processEvent==null||n.processEvent(e)}catch(r){Kt.error("Error while processing event "+t.event+" for site app "+n.id,r)}}}onRemoteConfig(t){var e,n,r,s=this;if((e=this.siteAppLoaders)!=null&&e.length)return this.isEnabled?(this.oa(),void this._instance.on("eventCaptured",l=>this.aa(l))):void Kt.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');if((n=this.sa)==null||n.call(this),(r=t.siteApps)!=null&&r.length)if(this.isEnabled){var i=function(l){var c;K["__$$ph_site_app_"+l]=s._instance,(c=K.__PosthogExtensions__)==null||c.loadSiteApp==null||c.loadSiteApp(s._instance,o,u=>{if(u)return Kt.error(Xl+l,u)})};for(var{id:a,url:o}of t.siteApps)i(a)}else Kt.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}},iv={tracingHeaders:class{constructor(t){this.ua=void 0,this.la=void 0,this.ha=void 0,this.Oo=()=>{var e,n,r=this.ca();r?(F(this.ua)&&(this.ua=(e=K.__PosthogExtensions__)==null||(e=e.tracingHeadersPatchFns)==null?void 0:e._patchXHR(r,()=>this._instance.get_distinct_id(),this._instance.sessionManager)),F(this.la)&&(this.la=(n=K.__PosthogExtensions__)==null||(n=n.tracingHeadersPatchFns)==null?void 0:n._patchFetch(r,()=>this._instance.get_distinct_id(),this._instance.sessionManager))):this.Do()},this._instance=t}initialize(){this.startIfEnabledOrStop()}lr(t){var e,n;(e=K.__PosthogExtensions__)!=null&&e.tracingHeadersPatchFns?t():(n=K.__PosthogExtensions__)==null||n.loadExternalDependency==null||n.loadExternalDependency(this._instance,"tracing-headers",r=>{if(r)return Jm.error("failed to load script",r);t()})}da(){var t,e;return(t=(e=this._instance.config.tracing_headers)!==null&&e!==void 0?e:this._instance.config.addTracingHeaders)!==null&&t!==void 0?t:this._instance.config.__add_tracing_headers}ca(){var t=this.da();return ae(t)?(ae(this.ha)?this.ha.splice(0,this.ha.length,...t):this.ha=[...t],t.length>0?this.ha:void 0):(ae(this.ha)&&this.ha.splice(0),this.ha=t||void 0,this.ha)}Do(){var t,e;(t=this.ua)==null||t.call(this),(e=this.la)==null||e.call(this),this.ua=void 0,this.la=void 0}startIfEnabledOrStop(){this.ca()?this.lr(this.Oo):this.Do()}}},av=M({surveys:class{get qt(){return this._instance.config}constructor(t){this.va=void 0,this._surveyManager=null,this.fa=!1,this.pa=[],this.ga=null,this._instance=t,this._surveyEventReceiver=null}initialize(){this.loadIfEnabled()}onRemoteConfig(t){if(!this.qt.disable_surveys){var e=t.surveys;if(oe(e))return ve.warn("Flags not loaded yet. Not loading surveys.");var n=ae(e);this.va=n?e.length>0:e,ve.info("flags response received, isSurveysEnabled: "+this.va),this.loadIfEnabled()}}reset(){localStorage.removeItem("lastSeenSurveyDate");for(var t=[],e=0;e<localStorage.length;e++){var n=localStorage.key(e);(n!=null&&n.startsWith(Ya)||n!=null&&n.startsWith("inProgressSurvey_"))&&t.push(n)}t.forEach(r=>localStorage.removeItem(r))}loadIfEnabled(){if(!this._surveyManager)if(this.fa)ve.info("Already initializing surveys, skipping...");else if(this.qt.disable_surveys)ve.info(Zl);else if(this.qt.cookieless_mode&&this._instance.consent.isOptedOut())ve.info("Not loading surveys in cookieless mode without consent.");else{var t=K==null?void 0:K.__PosthogExtensions__;if(t){if(!F(this.va)||this.qt.advanced_enable_surveys){var e=this.va||this.qt.advanced_enable_surveys;this.fa=!0;try{var n=t.generateSurveys;if(n)return void this.ma(n,e);var r=t.loadExternalDependency;if(!r)return void this.ya(yo);r(this._instance,"surveys",s=>{s||!t.generateSurveys?this.ya("Could not load surveys script",s):this.ma(t.generateSurveys,e)})}catch(s){throw this.ya("Error initializing surveys",s),s}finally{this.fa=!1}}}else ve.error("PostHog Extensions not found.")}}ma(t,e){this._surveyManager=t(this._instance,e),this._surveyEventReceiver=new Qm(this._instance),ve.info("Surveys loaded successfully"),this.ba({isLoaded:!0})}ya(t,e){ve.error(t,e),this.ba({isLoaded:!1,error:t})}onSurveysLoaded(t){return this.pa.push(t),this._surveyManager&&this.ba({isLoaded:!0}),()=>{this.pa=this.pa.filter(e=>e!==t)}}getSurveys(t,e){if(e===void 0&&(e=!1),this.qt.disable_surveys)return ve.info(Zl),t([]);var n,r=this._instance.get_property(Ma);if(r&&!e)return t(r,{isLoaded:!0});typeof Promise<"u"&&this.ga?this.ga.then(s=>{var{surveys:i,context:a}=s;return t(i,a)}):(typeof Promise<"u"&&(this.ga=new Promise(s=>{n=s})),this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/surveys/?token="+this.qt.token),method:"GET",timeout:this.qt.surveys_request_timeout_ms,callback:s=>{var i;this.ga=null;var a=s.statusCode;if(a!==200||!s.json){var o="Surveys API could not be loaded, status: "+a;ve.error(o);var l={isLoaded:!1,error:o};return t([],l),void(n==null||n({surveys:[],context:l}))}var c,u=s.json.surveys||[],h=u.filter(d=>function(v){return!(!v.start_date||v.end_date)}(d)&&(function(v){var f;return!((f=v.conditions)==null||(f=f.events)==null||(f=f.values)==null||!f.length)}(d)||function(v){var f;return!((f=v.conditions)==null||(f=f.actions)==null||(f=f.values)==null||!f.length)}(d)));h.length>0&&((c=this._surveyEventReceiver)==null||c.register(h)),(i=this._instance.persistence)==null||i.register({[Ma]:u,[bo]:Date.now()});var p={isLoaded:!0};t(u,p),n==null||n({surveys:u,context:p})}}))}ba(t){for(var e of this.pa)try{if(!t.isLoaded)return e([],t);this.getSurveys(e)}catch(n){ve.error("Error in survey callback",n)}}getActiveMatchingSurveys(t,e){if(e===void 0&&(e=!1),!oe(this._surveyManager))return this._surveyManager.getActiveMatchingSurveys(t,e);ve.warn("init was not called")}_a(t){var e=null;return this.getSurveys(n=>{var r;e=(r=n.find(s=>s.id===t))!==null&&r!==void 0?r:null}),e}wa(t){if(oe(this._surveyManager))return{eligible:!1,reason:Bi};var e=typeof t=="string"?this._a(t):t;return e?this._surveyManager.checkSurveyEligibility(e):{eligible:!1,reason:"Survey not found"}}canRenderSurvey(t){if(oe(this._surveyManager))return ve.warn("init was not called"),{visible:!1,disabledReason:Bi};var e=this.wa(t);return{visible:e.eligible,disabledReason:e.reason}}canRenderSurveyAsync(t,e){return oe(this._surveyManager)?(ve.warn("init was not called"),Promise.resolve({visible:!1,disabledReason:Bi})):new Promise(n=>{this.getSurveys(r=>{var s,i=(s=r.find(o=>o.id===t))!==null&&s!==void 0?s:null;if(i){var a=this.wa(i);n({visible:a.eligible,disabledReason:a.reason})}else n({visible:!1,disabledReason:"Survey not found"})},e)})}renderSurvey(t,e,n){var r;if(oe(this._surveyManager))ve.warn("init was not called");else{var s=typeof t=="string"?this._a(t):t;if(s!=null&&s.id)if(Lm.includes(s.type)){var i=H==null?void 0:H.querySelector(e);if(i)return(r=s.appearance)!=null&&r.surveyPopupDelaySeconds?(ve.info("Rendering survey "+s.id+" with delay of "+s.appearance.surveyPopupDelaySeconds+" seconds"),void setTimeout(()=>{var a,o;ve.info("Rendering survey "+s.id+" with delay of "+((a=s.appearance)==null?void 0:a.surveyPopupDelaySeconds)+" seconds"),(o=this._surveyManager)==null||o.renderSurvey(s,i,n),ve.info("Survey "+s.id+" rendered")},1e3*s.appearance.surveyPopupDelaySeconds)):void this._surveyManager.renderSurvey(s,i,n);ve.warn("Survey element not found")}else ve.warn("Surveys of type "+s.type+" cannot be rendered in the app");else ve.warn("Survey not found")}}displaySurvey(t,e){var n;if(oe(this._surveyManager))ve.warn("init was not called");else{var r=this._a(t);if(r){var s=r;if((n=r.appearance)!=null&&n.surveyPopupDelaySeconds&&e.ignoreDelay&&(s=M({},r,{appearance:M({},r.appearance,{surveyPopupDelaySeconds:0})})),e.displayType!==za.Popover&&e.initialResponses&&ve.warn("initialResponses is only supported for popover surveys. prefill will not be applied."),e.ignoreConditions===!1){var i=this.canRenderSurvey(r);if(!i.visible)return void ve.warn("Survey is not eligible to be displayed: ",i.disabledReason)}e.displayType!==za.Inline?this._surveyManager.handlePopoverSurvey(s,e):this.renderSurvey(s,e.selector,e.properties)}else ve.warn("Survey not found")}}cancelPendingSurvey(t){oe(this._surveyManager)?ve.warn("init was not called"):this._surveyManager.cancelSurvey(t)}handlePageUnload(){var t;(t=this._surveyManager)==null||t.handlePageUnload()}}},ci),ov={toolbar:class{constructor(t){this.instance=t}xa(t){K.ph_toolbar_state=t}Sa(){var t;return(t=K.ph_toolbar_state)!==null&&t!==void 0?t:0}initialize(){return this.maybeLoadToolbar()}maybeLoadToolbar(t,e,n){if(t===void 0&&(t=void 0),e===void 0&&(e=void 0),n===void 0&&(n=void 0),ed(this.instance.config)||!w||!H)return!1;t=t??w.location,n=n??w.history;try{if(!e){try{w.localStorage.setItem("test","test"),w.localStorage.removeItem("test")}catch{return!1}e=w==null?void 0:w.localStorage}var r,s=Xm||ni(t.hash,"__posthog")||ni(t.hash,"state"),i=s?bl(()=>JSON.parse(atob(decodeURIComponent(s))))||bl(()=>JSON.parse(decodeURIComponent(s))):null;return i&&i.action==="ph_authorize"?((r=i).source="url",r&&Object.keys(r).length>0&&(i.desiredHash?t.hash=i.desiredHash:n?n.replaceState(n.state,"",t.pathname+t.search):t.hash="")):((r=JSON.parse(e.getItem(ec)||"{}")).source="localstorage",delete r.userIntent),!(!r.token||this.instance.config.token!==r.token||(this.loadToolbar(r),0))}catch{return!1}}ka(t){var e=K.ph_load_toolbar||K.ph_load_editor;!oe(e)&&Ft(e)?e(t,this.instance):tc.warn("No toolbar load function found")}loadToolbar(t){var e=!(H==null||!H.getElementById(Yu));if(!w||e)return!1;var n=this.instance.requestRouter.region==="custom"&&this.instance.config.advanced_disable_toolbar_metrics,r=M({token:this.instance.config.token},t,{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{});if(w.localStorage.setItem(ec,JSON.stringify(M({},r,{source:void 0}))),this.Sa()===2)this.ka(r);else if(this.Sa()===0){var s;this.xa(1),(s=K.__PosthogExtensions__)==null||s.loadExternalDependency==null||s.loadExternalDependency(this.instance,"toolbar",i=>{if(i)return tc.error("[Toolbar] Failed to load",i),void this.xa(0);this.xa(2),this.ka(r)}),Ae(w,"turbolinks:load",()=>{this.xa(0),this.loadToolbar(r)})}return!0}Ca(t){return this.loadToolbar(t)}maybeLoadEditor(t,e,n){return t===void 0&&(t=void 0),e===void 0&&(e=void 0),n===void 0&&(n=void 0),this.maybeLoadToolbar(t,e,n)}}},lv=M({experiments:Be},ci),cv={conversations:class{constructor(t){this.Ia=void 0,this._conversationsManager=null,this.Ta=!1,this.Ea=null,this._instance=t}initialize(){this.loadIfEnabled()}onRemoteConfig(t){if(!this._instance.config.disable_conversations){var e=t.conversations;oe(e)||(Ot(e)?this.Ia=e:(this.Ia=e.enabled,this.Ea=e),this.loadIfEnabled())}}reset(){var t;(t=this._conversationsManager)==null||t.reset(),this._conversationsManager=null,this.Ia=void 0,this.Ea=null}loadIfEnabled(){if(!(this._conversationsManager||this.Ta||this._instance.config.disable_conversations||ed(this._instance.config)||this._instance.config.cookieless_mode&&this._instance.consent.isOptedOut())){var t=K==null?void 0:K.__PosthogExtensions__;if(t&&!F(this.Ia)&&this.Ia)if(this.Ea&&this.Ea.token){this.Ta=!0;try{var e=t.initConversations;if(e)return this.Ma(e),void(this.Ta=!1);var n=t.loadExternalDependency;if(!n)return void this.Ra(yo);n(this._instance,"conversations",r=>{r||!t.initConversations?this.Ra("Could not load conversations script",r):this.Ma(t.initConversations),this.Ta=!1})}catch(r){this.Ra("Error initializing conversations",r),this.Ta=!1}}else lt.error("Conversations enabled but missing token in remote config.")}}Ma(t){if(this.Ea)try{this._conversationsManager=t(this.Ea,this._instance),lt.info("Conversations loaded successfully")}catch(e){this.Ra("Error completing conversations initialization",e)}else lt.error("Cannot complete initialization: remote config is null")}Ra(t,e){lt.error(t,e),this._conversationsManager=null,this.Ta=!1}show(){this._conversationsManager?this._conversationsManager.show():lt.warn("Conversations not loaded yet.")}hide(){this._conversationsManager&&this._conversationsManager.hide()}isAvailable(){return this.Ia===!0&&!at(this._conversationsManager)}isVisible(){var t,e;return(t=(e=this._conversationsManager)==null?void 0:e.isVisible())!==null&&t!==void 0&&t}sendMessage(t,e,n){var r=this;return rt(function*(){return r._conversationsManager?r._conversationsManager.sendMessage(t,e,n):(lt.warn(yn),null)})()}getMessages(t,e){var n=this;return rt(function*(){return n._conversationsManager?n._conversationsManager.getMessages(t,e):(lt.warn(yn),null)})()}markAsRead(t){var e=this;return rt(function*(){return e._conversationsManager?e._conversationsManager.markAsRead(t):(lt.warn(yn),null)})()}getTickets(t){var e=this;return rt(function*(){return e._conversationsManager?e._conversationsManager.getTickets(t):(lt.warn(yn),null)})()}requestRestoreLink(t){var e=this;return rt(function*(){return e._conversationsManager?e._conversationsManager.requestRestoreLink(t):(lt.warn(yn),null)})()}restoreFromToken(t){var e=this;return rt(function*(){return e._conversationsManager?e._conversationsManager.restoreFromToken(t):(lt.warn(yn),null)})()}restoreFromUrlToken(){var t=this;return rt(function*(){return t._conversationsManager?t._conversationsManager.restoreFromUrlToken():(lt.warn(yn),null)})()}getCurrentTicketId(){var t,e;return(t=(e=this._conversationsManager)==null?void 0:e.getCurrentTicketId())!==null&&t!==void 0?t:null}getWidgetSessionId(){var t,e;return(t=(e=this._conversationsManager)==null?void 0:e.getWidgetSessionId())!==null&&t!==void 0?t:null}Ln(){var t;(t=this._conversationsManager)==null||t.setIdentity()}Fn(){var t;(t=this._conversationsManager)==null||t.clearIdentity()}}},uv={logs:class{constructor(t){var e;this.Pa=!1,this.Oa=!1,this.Gt=Se("[logs]"),this.La=[],this.Fa=0,this.Aa=0,this.Na=!1,this._instance=t,this._instance&&(e=this._instance.config.logs)!=null&&e.captureConsoleLogs&&(this.Pa=!0)}initialize(){this.loadIfEnabled()}onRemoteConfig(t){var e,n=(e=t.logs)==null?void 0:e.captureConsoleLogs;!oe(n)&&n&&(this.Pa=!0,this.loadIfEnabled())}reset(){this.La=[],this.ii&&(clearTimeout(this.ii),this.ii=void 0),this.Fa=0,this.Aa=0,this.Na=!1}loadIfEnabled(){if(this.Pa&&!this.Oa){var t=K==null?void 0:K.__PosthogExtensions__;if(t){var e=t.loadExternalDependency;e?e(this._instance,"logs",n=>{var r;n||(r=t.logs)==null||!r.initializeLogs?this.Gt.error("Could not load logs script",n):(t.logs.initializeLogs(this._instance),this.Oa=!0)}):this.Gt.error(yo)}else this.Gt.error("PostHog Extensions not found.")}}captureLog(t){var e,n,r,s,i,a;if(this._instance.is_capturing())if(t&&t.body){var o=(e=(n=this._instance.config.logs)==null?void 0:n.flushIntervalMs)!==null&&e!==void 0?e:3e3,l=(r=(s=this._instance.config.logs)==null?void 0:s.maxLogsPerInterval)!==null&&r!==void 0?r:1e3,c=Date.now();if(o>c-this.Aa||(this.Aa=c,this.Fa=0,this.Na=!1),l>this.Fa){this.Fa++;var u=function(h,p){var d=h.level||"info",{text:v,number:f}=Uu[d]||_g,_=String(Date.now())+"000000",k={};p.distinctId&&(k.posthogDistinctId=p.distinctId),p.sessionId&&(k.sessionId=p.sessionId),p.currentUrl&&(k["url.full"]=p.currentUrl),p.screenName&&(k["screen.name"]=p.screenName),p.appState&&(k["app.state"]=p.appState),p.activeFeatureFlags&&p.activeFeatureFlags.length>0&&(k.feature_flags=p.activeFeatureFlags);var C=M({},k,h.attributes||{}),P={timeUnixNano:_,observedTimeUnixNano:_,severityNumber:f,severityText:v,body:{stringValue:h.body},attributes:gl(C)};return h.trace_id&&(P.traceId=h.trace_id),h.span_id&&(P.spanId=h.span_id),F(h.trace_flags)||(P.flags=h.trace_flags),P}(t,this.Da());this.La.push({record:u}),((i=(a=this._instance.config.logs)==null?void 0:a.maxBufferSize)!==null&&i!==void 0?i:100)>this.La.length?this.$a():this.flushLogs()}else this.Na||(this.Gt.warn("captureLog dropping logs: exceeded "+l+" logs per "+o+"ms"),this.Na=!0)}else this.Gt.warn("captureLog requires a body")}get logger(){return this.qa||(this.qa={trace:(t,e)=>this.captureLog({body:t,level:"trace",attributes:e}),debug:(t,e)=>this.captureLog({body:t,level:"debug",attributes:e}),info:(t,e)=>this.captureLog({body:t,level:"info",attributes:e}),warn:(t,e)=>this.captureLog({body:t,level:"warn",attributes:e}),error:(t,e)=>this.captureLog({body:t,level:"error",attributes:e}),fatal:(t,e)=>this.captureLog({body:t,level:"fatal",attributes:e})}),this.qa}flushLogs(t){if(this.ii&&(clearTimeout(this.ii),this.ii=void 0),this.La.length!==0){var e=this.La;this.La=[];var n=this._instance.config.logs,r=M({"service.name":(n==null?void 0:n.serviceName)||"unknown_service"},(n==null?void 0:n.environment)&&{"deployment.environment":n.environment},(n==null?void 0:n.serviceVersion)&&{"service.version":n.serviceVersion},n==null?void 0:n.resourceAttributes),s=function(a,o,l,c){return{resourceLogs:[{resource:{attributes:gl(o)},scopeLogs:[{scope:{name:l,version:c},logRecords:a}]}]}}(e.map(a=>a.record),r,Ne.LIB_NAME,Ne.LIB_VERSION),i=this._instance.requestRouter.endpointFor("api","/i/v1/logs")+"?token="+encodeURIComponent(this._instance.config.token);this._instance.pn({method:"POST",url:i,data:s,compression:"best-available",batchKey:"logs",transport:t})}}$a(){var t,e;this.ii||(this.ii=setTimeout(()=>{this.ii=void 0,this.flushLogs()},(t=(e=this._instance.config.logs)==null?void 0:e.flushIntervalMs)!==null&&t!==void 0?t:3e3))}Da(){var t,e={};if(e.distinctId=this._instance.get_distinct_id(),this._instance.sessionManager){var{sessionId:n}=this._instance.sessionManager.checkAndGetSessionAndWindowId(!0);e.sessionId=n}if(K!=null&&(t=K.location)!=null&&t.href&&(e.currentUrl=K.location.href),this._instance.featureFlags){var r=this._instance.featureFlags.getFlags();r&&r.length>0&&(e.activeFeatureFlags=r)}return e}}},dv=M({},ci,ev,tv,nv,rv,sv,av,iv,ov,lv,cv,uv);ht.__defaultExtensionClasses=M({},dv);var Ro=function(){Ne.SDK_DIST_CHANNEL="npm";var t=Qr[Vn]=new ht;return function(){function e(){e.done||(e.done=!0,Id=!1,ye(Qr,function(n){n._dom_loaded()}))}H!=null&&H.addEventListener?H.readyState==="complete"?e():Ae(H,"DOMContentLoaded",e,{capture:!1}):w&&U.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")}(),t}(),Md;function hv(t){Md=t}function Za(){return Md}var Po=E.createContext({get client(){return Za()},bootstrap:void 0});function Nd(t,e,n){if(n===void 0&&(n=new WeakMap),t===e)return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(n.has(t)&&n.get(t)===e)return!0;n.set(t,e);var r=Object.keys(t),s=Object.keys(e);if(r.length!==s.length)return!1;for(var i=0,a=r;i<a.length;i++){var o=a[i];if(!s.includes(o)||!Nd(t[o],e[o],n))return!1}return!0}function pv(t){var e,n,r=t.children,s=t.client,i=t.apiKey,a=t.options,o=E.useRef(null),l=E.useMemo(function(){if(s)return i&&console.warn("[PostHog.js] You have provided both `client` and `apiKey` to `PostHogProvider`. `apiKey` will be ignored in favour of `client`."),a&&console.warn("[PostHog.js] You have provided both `client` and `options` to `PostHogProvider`. `options` will be ignored in favour of `client`."),s;var c=Za();return i||console.warn("[PostHog.js] No `apiKey` or `client` were provided to `PostHogProvider`. Using default global `window.posthog` instance. You must initialize it manually. This is not recommended behavior."),c},[s,i,JSON.stringify(a)]);return E.useEffect(function(){if(!(s||!i)){var c=Za(),u=o.current;u?(i!==u.apiKey&&console.warn("[PostHog.js] You have provided a different `apiKey` to `PostHogProvider` than the one that was already initialized. This is not supported by our provider and we'll keep using the previous key. If you need to toggle between API Keys you need to control the `client` yourself and pass it in as a prop rather than an `apiKey` prop."),a&&!Nd(a,u.options)&&c.set_config(a),o.current={apiKey:i,options:a??{}}):(c.__loaded&&console.warn("[PostHog.js] `posthog` was already loaded elsewhere. This may cause issues."),c.init(i,a),o.current={apiKey:i,options:a??{}})}},[s,i,JSON.stringify(a)]),I.createElement(Po.Provider,{value:{client:l,bootstrap:(e=a==null?void 0:a.bootstrap)!==null&&e!==void 0?e:(n=s==null?void 0:s.config)===null||n===void 0?void 0:n.bootstrap}},r)}var Gi=function(t){return typeof t=="function"},$o=function(){var t=E.useContext(Po).client;return t},eo=function(t,e){return eo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])},eo(t,e)};function fv(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");eo(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var gv={componentStack:null,exceptionEvent:null,error:null},mv={INVALID_FALLBACK:"[PostHog.js][PostHogErrorBoundary] Invalid fallback prop, provide a valid React element or a function that returns a valid React element."};(function(t){fv(e,t);function e(n){var r=t.call(this,n)||this;return r.state=gv,r}return e.prototype.componentDidCatch=function(n,r){var s=this.props.additionalProperties,i;Gi(s)?i=s(n):typeof s=="object"&&(i=s);var a=this.context.client,o=a.captureException(n,i),l=r.componentStack;this.setState({error:n,componentStack:l??null,exceptionEvent:o})},e.prototype.render=function(){var n=this.props,r=n.children,s=n.fallback,i=this.state;if(i.componentStack==null)return Gi(r)?r():r;var a=Gi(s)?I.createElement(s,{error:i.error,componentStack:i.componentStack,exceptionEvent:i.exceptionEvent}):s;return I.isValidElement(a)?a:(console.warn(mv.INVALID_FALLBACK),I.createElement(I.Fragment,null))},e.contextType=Po,e})(I.Component);hv(Ro);function vv({theme:t,toggleTheme:e}){const n=$o(),r=()=>{e(),n==null||n.capture("theme_toggled",{theme:t==="dark"?"light":"dark"})};return g.jsx(un,{variant:"glass",size:"icon",onClick:r,className:"relative overflow-hidden",children:g.jsx(Kd.div,{initial:!1,animate:{rotate:t==="dark"?0:180,scale:1},transition:{duration:.3,ease:"easeInOut"},children:t==="dark"?g.jsx(Th,{className:"h-5 w-5"}):g.jsx(Ph,{className:"h-5 w-5"})})})}function bv(t){const[e,n]=E.useState("");return E.useEffect(()=>{const r=()=>{const s=window.scrollY+200;for(const i of t){const a=document.getElementById(i);if(a){const{offsetTop:o,offsetHeight:l}=a;if(s>=o&&s<o+l){n(i);return}}}window.scrollY<100&&n("")};return r(),window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[t]),e}const yv=[{href:"about",label:"About"},{href:"experience",label:"Experience"},{href:"projects",label:"Projects"},{href:"articles",label:"Articles"},{href:"skills",label:"Skills"},{href:"contact",label:"Contact"}];function _v({theme:t,toggleTheme:e}){const n=bv(["about","experience","projects","articles","skills","contact"]),r=yc(),s=_c(),i=r.pathname==="/",a=o=>{o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),s("/")};return g.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 glass-effect animate-slide-down",children:g.jsxs("div",{className:"container mx-auto px-6 py-4 flex items-center justify-between",children:[g.jsx("a",{href:"/",onClick:a,className:"flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer",children:g.jsx("span",{className:"text-xl font-bold gradient-text",children:"<bnSaed />"})}),g.jsx("nav",{className:"hidden md:flex items-center gap-8",children:yv.map(o=>{const l=i&&n===o.href;return g.jsxs(Xd,{to:`/#${o.href}`,className:De("relative py-1 transition-colors",l?"text-primary font-medium":"text-muted-foreground hover:text-foreground"),children:[o.label,l&&g.jsx("span",{className:"absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-scale-in"})]},o.href)})}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx(un,{variant:"ghost",size:"icon",asChild:!0,children:g.jsx("a",{href:"https://github.com/binSaed",target:"_blank",rel:"noopener noreferrer",children:g.jsx(jc,{className:"h-5 w-5"})})}),g.jsx(un,{variant:"ghost",size:"icon",asChild:!0,children:g.jsx("a",{href:"https://www.linkedin.com/in/binsaed/",target:"_blank",rel:"noopener noreferrer",children:g.jsx(Fc,{className:"h-5 w-5"})})}),g.jsx(un,{variant:"ghost",size:"icon",asChild:!0,children:g.jsx("a",{href:"https://bnsaed.com/CV/cv.pdf",target:"_blank",rel:"noopener noreferrer",children:g.jsx(Lc,{className:"h-5 w-5"})})}),g.jsx(vv,{theme:t,toggleTheme:e})]})]})})}async function wv(){const t=await fetch("https://api.github.com/users/binSaed");if(!t.ok)throw new Error("Failed to fetch GitHub profile");return t.json()}function xv(){return lu({queryKey:["github-profile"],queryFn:wv,staleTime:0,gcTime:1e3*60*60*24})}function Qt({className:t,...e}){return g.jsx("div",{className:De("animate-pulse rounded-md bg-muted",t),...e})}function kv(){const t=["<>","/>","{","}","()","[]","&&","||","=>","::"],e=Array.from({length:20},(s,i)=>({id:i,symbol:t[i%t.length],left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,delay:`${Math.random()*5}s`,duration:`${15+Math.random()*10}s`,size:`${.8+Math.random()*.6}rem`})),n=Array.from({length:30},(s,i)=>({id:i,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,delay:`${Math.random()*3}s`,duration:`${3+Math.random()*4}s`,size:`${2+Math.random()*4}px`})),r=Array.from({length:5},(s,i)=>({id:i,left:`${10+i*20}%`,delay:`${i*.5}s`}));return g.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[g.jsx("div",{className:"absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow"}),g.jsx("div",{className:"absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow-reverse"}),g.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow"}),g.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.04]"}),g.jsxs("svg",{className:"absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06]",xmlns:"http://www.w3.org/2000/svg",children:[g.jsx("defs",{children:g.jsxs("pattern",{id:"circuit",width:"100",height:"100",patternUnits:"userSpaceOnUse",children:[g.jsx("path",{d:"M0 50 H30 M50 0 V30 M50 70 V100 M70 50 H100",stroke:"currentColor",strokeWidth:"0.5",fill:"none",className:"text-primary"}),g.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"currentColor",className:"text-primary"}),g.jsx("circle",{cx:"30",cy:"50",r:"2",fill:"currentColor",className:"text-primary"}),g.jsx("circle",{cx:"70",cy:"50",r:"2",fill:"currentColor",className:"text-primary"}),g.jsx("circle",{cx:"50",cy:"30",r:"2",fill:"currentColor",className:"text-primary"}),g.jsx("circle",{cx:"50",cy:"70",r:"2",fill:"currentColor",className:"text-primary"})]})}),g.jsx("rect",{width:"100%",height:"100%",fill:"url(#circuit)"})]}),e.map(s=>g.jsx("span",{className:"absolute font-mono text-primary/20 dark:text-primary/15 animate-float-random select-none",style:{left:s.left,top:s.top,animationDelay:s.delay,animationDuration:s.duration,fontSize:s.size},children:s.symbol},s.id)),n.map(s=>g.jsx("div",{className:"absolute rounded-full bg-primary/30 dark:bg-primary/20 animate-twinkle",style:{left:s.left,top:s.top,width:s.size,height:s.size,animationDelay:s.delay,animationDuration:s.duration}},s.id)),r.map(s=>g.jsx("div",{className:"absolute top-0 font-mono text-[10px] text-primary/10 dark:text-primary/8 leading-tight animate-binary-fall whitespace-nowrap",style:{left:s.left,animationDelay:s.delay},children:Array.from({length:20},()=>Math.round(Math.random())).join("")},s.id)),g.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[g.jsx("defs",{children:g.jsxs("linearGradient",{id:"lineGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[g.jsx("stop",{offset:"0%",stopColor:"hsl(var(--primary))",stopOpacity:"0"}),g.jsx("stop",{offset:"50%",stopColor:"hsl(var(--primary))",stopOpacity:"0.1"}),g.jsx("stop",{offset:"100%",stopColor:"hsl(var(--primary))",stopOpacity:"0"})]})}),g.jsx("line",{x1:"10%",y1:"20%",x2:"40%",y2:"45%",stroke:"url(#lineGradient)",strokeWidth:"1",className:"animate-line-draw"}),g.jsx("line",{x1:"60%",y1:"15%",x2:"85%",y2:"40%",stroke:"url(#lineGradient)",strokeWidth:"1",className:"animate-line-draw",style:{animationDelay:"1s"}}),g.jsx("line",{x1:"20%",y1:"70%",x2:"50%",y2:"55%",stroke:"url(#lineGradient)",strokeWidth:"1",className:"animate-line-draw",style:{animationDelay:"2s"}}),g.jsx("line",{x1:"70%",y1:"75%",x2:"90%",y2:"50%",stroke:"url(#lineGradient)",strokeWidth:"1",className:"animate-line-draw",style:{animationDelay:"0.5s"}})]}),g.jsx("div",{className:"absolute inset-0 bg-hexagon-pattern opacity-[0.015] dark:opacity-[0.03]"})]})}function Ev(t,e,n,r={}){const{stiffness:s=180,damping:i=20,mass:a=1}=r,o=E.useRef({x:0,y:0,vx:0,vy:0}),l=E.useRef({x:t,y:e}),c=E.useRef(null),u=E.useRef(null);E.useEffect(()=>{l.current={x:t,y:e}},[t,e]);const h=E.useCallback(d=>{u.current===null&&(u.current=d);const v=Math.min((d-u.current)/1e3,.064);u.current=d;const f=o.current,_=l.current,k=-s*(f.x-_.x),C=-s*(f.y-_.y),P=-i*f.vx,L=-i*f.vy,$=(k+P)/a,O=(C+L)/a;if(f.vx+=$*v,f.vy+=O*v,f.x+=f.vx*v,f.y+=f.vy*v,Math.abs(f.x-_.x)<.01&&Math.abs(f.y-_.y)<.01&&Math.abs(f.vx)<.01&&Math.abs(f.vy)<.01){f.x=_.x,f.y=_.y,f.vx=0,f.vy=0,n(f.x,f.y),c.current=null,u.current=null;return}n(f.x,f.y),c.current=requestAnimationFrame(h)},[s,i,a,n]),p=E.useCallback(()=>{c.current===null&&(u.current=null,c.current=requestAnimationFrame(h))},[h]);return E.useEffect(()=>{c.current===null&&(u.current=null,c.current=requestAnimationFrame(h))},[t,e,h]),E.useEffect(()=>()=>{c.current!==null&&cancelAnimationFrame(c.current)},[]),{start:p,setPosition:(d,v)=>{o.current.x=d,o.current.y=v}}}var Oo={};(function t(e,n,r,s){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var y=new OffscreenCanvas(1,1),m=y.getContext("2d");m.fillRect(0,0,1,1);var R=y.transferToImageBitmap();m.createPattern(R,"no-repeat")}catch{return!1}return!0}();function l(){}function c(y){var m=n.exports.Promise,R=m!==void 0?m:e.Promise;return typeof R=="function"?new R(y):(y(l,l),null)}var u=function(y,m){return{transform:function(R){if(y)return R;if(m.has(R))return m.get(R);var A=new OffscreenCanvas(R.width,R.height),j=A.getContext("2d");return j.drawImage(R,0,0),m.set(R,A),A},clear:function(){m.clear()}}}(o,new Map),h=function(){var y=Math.floor(16.666666666666668),m,R,A={},j=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(m=function(B){var Y=Math.random();return A[Y]=requestAnimationFrame(function q(Q){j===Q||j+y-1<Q?(j=Q,delete A[Y],B()):A[Y]=requestAnimationFrame(q)}),Y},R=function(B){A[B]&&cancelAnimationFrame(A[B])}):(m=function(B){return setTimeout(B,y)},R=function(B){return clearTimeout(B)}),{frame:m,cancel:R}}(),p=function(){var y,m,R={};function A(j){function B(Y,q){j.postMessage({options:Y||{},callback:q})}j.init=function(q){var Q=q.transferControlToOffscreen();j.postMessage({canvas:Q},[Q])},j.fire=function(q,Q,ne){if(m)return B(q,null),m;var ce=Math.random().toString(36).slice(2);return m=c(function(pe){function ue($e){$e.data.callback===ce&&(delete R[ce],j.removeEventListener("message",ue),m=null,u.clear(),ne(),pe())}j.addEventListener("message",ue),B(q,ce),R[ce]=ue.bind(null,{data:{callback:ce}})}),m},j.reset=function(){j.postMessage({reset:!0});for(var q in R)R[q](),delete R[q]}}return function(){if(y)return y;if(!r&&i){var j=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{y=new Worker(URL.createObjectURL(new Blob([j])))}catch(B){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",B),null}A(y)}return y}}(),d={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(y,m){return m?m(y):y}function f(y){return y!=null}function _(y,m,R){return v(y&&f(y[m])?y[m]:d[m],R)}function k(y){return y<0?0:Math.floor(y)}function C(y,m){return Math.floor(Math.random()*(m-y))+y}function P(y){return parseInt(y,16)}function L(y){return y.map($)}function $(y){var m=String(y).replace(/[^0-9a-f]/gi,"");return m.length<6&&(m=m[0]+m[0]+m[1]+m[1]+m[2]+m[2]),{r:P(m.substring(0,2)),g:P(m.substring(2,4)),b:P(m.substring(4,6))}}function O(y){var m=_(y,"origin",Object);return m.x=_(m,"x",Number),m.y=_(m,"y",Number),m}function N(y){y.width=document.documentElement.clientWidth,y.height=document.documentElement.clientHeight}function T(y){var m=y.getBoundingClientRect();y.width=m.width,y.height=m.height}function x(y){var m=document.createElement("canvas");return m.style.position="fixed",m.style.top="0px",m.style.left="0px",m.style.pointerEvents="none",m.style.zIndex=y,m}function S(y,m,R,A,j,B,Y,q,Q){y.save(),y.translate(m,R),y.rotate(B),y.scale(A,j),y.arc(0,0,1,Y,q,Q),y.restore()}function z(y){var m=y.angle*(Math.PI/180),R=y.spread*(Math.PI/180);return{x:y.x,y:y.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:y.startVelocity*.5+Math.random()*y.startVelocity,angle2D:-m+(.5*R-Math.random()*R),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:y.color,shape:y.shape,tick:0,totalTicks:y.ticks,decay:y.decay,drift:y.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:y.gravity*3,ovalScalar:.6,scalar:y.scalar,flat:y.flat}}function D(y,m){m.x+=Math.cos(m.angle2D)*m.velocity+m.drift,m.y+=Math.sin(m.angle2D)*m.velocity+m.gravity,m.velocity*=m.decay,m.flat?(m.wobble=0,m.wobbleX=m.x+10*m.scalar,m.wobbleY=m.y+10*m.scalar,m.tiltSin=0,m.tiltCos=0,m.random=1):(m.wobble+=m.wobbleSpeed,m.wobbleX=m.x+10*m.scalar*Math.cos(m.wobble),m.wobbleY=m.y+10*m.scalar*Math.sin(m.wobble),m.tiltAngle+=.1,m.tiltSin=Math.sin(m.tiltAngle),m.tiltCos=Math.cos(m.tiltAngle),m.random=Math.random()+2);var R=m.tick++/m.totalTicks,A=m.x+m.random*m.tiltCos,j=m.y+m.random*m.tiltSin,B=m.wobbleX+m.random*m.tiltCos,Y=m.wobbleY+m.random*m.tiltSin;if(y.fillStyle="rgba("+m.color.r+", "+m.color.g+", "+m.color.b+", "+(1-R)+")",y.beginPath(),a&&m.shape.type==="path"&&typeof m.shape.path=="string"&&Array.isArray(m.shape.matrix))y.fill(le(m.shape.path,m.shape.matrix,m.x,m.y,Math.abs(B-A)*.1,Math.abs(Y-j)*.1,Math.PI/10*m.wobble));else if(m.shape.type==="bitmap"){var q=Math.PI/10*m.wobble,Q=Math.abs(B-A)*.1,ne=Math.abs(Y-j)*.1,ce=m.shape.bitmap.width*m.scalar,pe=m.shape.bitmap.height*m.scalar,ue=new DOMMatrix([Math.cos(q)*Q,Math.sin(q)*Q,-Math.sin(q)*ne,Math.cos(q)*ne,m.x,m.y]);ue.multiplySelf(new DOMMatrix(m.shape.matrix));var $e=y.createPattern(u.transform(m.shape.bitmap),"no-repeat");$e.setTransform(ue),y.globalAlpha=1-R,y.fillStyle=$e,y.fillRect(m.x-ce/2,m.y-pe/2,ce,pe),y.globalAlpha=1}else if(m.shape==="circle")y.ellipse?y.ellipse(m.x,m.y,Math.abs(B-A)*m.ovalScalar,Math.abs(Y-j)*m.ovalScalar,Math.PI/10*m.wobble,0,2*Math.PI):S(y,m.x,m.y,Math.abs(B-A)*m.ovalScalar,Math.abs(Y-j)*m.ovalScalar,Math.PI/10*m.wobble,0,2*Math.PI);else if(m.shape==="star")for(var ie=Math.PI/2*3,Me=4*m.scalar,Te=8*m.scalar,Ge=m.x,qe=m.y,tt=5,He=Math.PI/tt;tt--;)Ge=m.x+Math.cos(ie)*Te,qe=m.y+Math.sin(ie)*Te,y.lineTo(Ge,qe),ie+=He,Ge=m.x+Math.cos(ie)*Me,qe=m.y+Math.sin(ie)*Me,y.lineTo(Ge,qe),ie+=He;else y.moveTo(Math.floor(m.x),Math.floor(m.y)),y.lineTo(Math.floor(m.wobbleX),Math.floor(j)),y.lineTo(Math.floor(B),Math.floor(Y)),y.lineTo(Math.floor(A),Math.floor(m.wobbleY));return y.closePath(),y.fill(),m.tick<m.totalTicks}function V(y,m,R,A,j){var B=m.slice(),Y=y.getContext("2d"),q,Q,ne=c(function(ce){function pe(){q=Q=null,Y.clearRect(0,0,A.width,A.height),u.clear(),j(),ce()}function ue(){r&&!(A.width===s.width&&A.height===s.height)&&(A.width=y.width=s.width,A.height=y.height=s.height),!A.width&&!A.height&&(R(y),A.width=y.width,A.height=y.height),Y.clearRect(0,0,A.width,A.height),B=B.filter(function($e){return D(Y,$e)}),B.length?q=h.frame(ue):pe()}q=h.frame(ue),Q=pe});return{addFettis:function(ce){return B=B.concat(ce),ne},canvas:y,promise:ne,reset:function(){q&&h.cancel(q),Q&&Q()}}}function X(y,m){var R=!y,A=!!_(m||{},"resize"),j=!1,B=_(m,"disableForReducedMotion",Boolean),Y=i&&!!_(m||{},"useWorker"),q=Y?p():null,Q=R?N:T,ne=y&&q?!!y.__confetti_initialized:!1,ce=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,pe;function ue(ie,Me,Te){for(var Ge=_(ie,"particleCount",k),qe=_(ie,"angle",Number),tt=_(ie,"spread",Number),He=_(ie,"startVelocity",Number),kt=_(ie,"decay",Number),pn=_(ie,"gravity",Number),nt=_(ie,"drift",Number),hs=_(ie,"colors",L),ui=_(ie,"ticks",Number),Je=_(ie,"shapes"),Bt=_(ie,"scalar"),di=!!_(ie,"flat"),ps=O(ie),fn=Ge,wr=[],fs=y.width*ps.x,xr=y.height*ps.y;fn--;)wr.push(z({x:fs,y:xr,angle:qe,spread:tt,startVelocity:He,color:hs[fn%hs.length],shape:Je[C(0,Je.length)],ticks:ui,decay:kt,gravity:pn,drift:nt,scalar:Bt,flat:di}));return pe?pe.addFettis(wr):(pe=V(y,wr,Q,Me,Te),pe.promise)}function $e(ie){var Me=B||_(ie,"disableForReducedMotion",Boolean),Te=_(ie,"zIndex",Number);if(Me&&ce)return c(function(He){He()});R&&pe?y=pe.canvas:R&&!y&&(y=x(Te),document.body.appendChild(y)),A&&!ne&&Q(y);var Ge={width:y.width,height:y.height};q&&!ne&&q.init(y),ne=!0,q&&(y.__confetti_initialized=!0);function qe(){if(q){var He={getBoundingClientRect:function(){if(!R)return y.getBoundingClientRect()}};Q(He),q.postMessage({resize:{width:He.width,height:He.height}});return}Ge.width=Ge.height=null}function tt(){pe=null,A&&(j=!1,e.removeEventListener("resize",qe)),R&&y&&(document.body.contains(y)&&document.body.removeChild(y),y=null,ne=!1)}return A&&!j&&(j=!0,e.addEventListener("resize",qe,!1)),q?q.fire(ie,Ge,tt):ue(ie,Ge,tt)}return $e.reset=function(){q&&q.reset(),pe&&pe.reset()},$e}var G;function te(){return G||(G=X(null,{useWorker:!0,resize:!0})),G}function le(y,m,R,A,j,B,Y){var q=new Path2D(y),Q=new Path2D;Q.addPath(q,new DOMMatrix(m));var ne=new Path2D;return ne.addPath(Q,new DOMMatrix([Math.cos(Y)*j,Math.sin(Y)*j,-Math.sin(Y)*B,Math.cos(Y)*B,R,A])),ne}function fe(y){if(!a)throw new Error("path confetti are not supported in this browser");var m,R;typeof y=="string"?m=y:(m=y.path,R=y.matrix);var A=new Path2D(m),j=document.createElement("canvas"),B=j.getContext("2d");if(!R){for(var Y=1e3,q=Y,Q=Y,ne=0,ce=0,pe,ue,$e=0;$e<Y;$e+=2)for(var ie=0;ie<Y;ie+=2)B.isPointInPath(A,$e,ie,"nonzero")&&(q=Math.min(q,$e),Q=Math.min(Q,ie),ne=Math.max(ne,$e),ce=Math.max(ce,ie));pe=ne-q,ue=ce-Q;var Me=10,Te=Math.min(Me/pe,Me/ue);R=[Te,0,0,Te,-Math.round(pe/2+q)*Te,-Math.round(ue/2+Q)*Te]}return{type:"path",path:m,matrix:R}}function J(y){var m,R=1,A="#000000",j='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof y=="string"?m=y:(m=y.text,R="scalar"in y?y.scalar:R,j="fontFamily"in y?y.fontFamily:j,A="color"in y?y.color:A);var B=10*R,Y=""+B+"px "+j,q=new OffscreenCanvas(B,B),Q=q.getContext("2d");Q.font=Y;var ne=Q.measureText(m),ce=Math.ceil(ne.actualBoundingBoxRight+ne.actualBoundingBoxLeft),pe=Math.ceil(ne.actualBoundingBoxAscent+ne.actualBoundingBoxDescent),ue=2,$e=ne.actualBoundingBoxLeft+ue,ie=ne.actualBoundingBoxAscent+ue;ce+=ue+ue,pe+=ue+ue,q=new OffscreenCanvas(ce,pe),Q=q.getContext("2d"),Q.font=Y,Q.fillStyle=A,Q.fillText(m,$e,ie);var Me=1/R;return{type:"bitmap",bitmap:q.transferToImageBitmap(),matrix:[Me,0,0,Me,-ce*Me/2,-pe*Me/2]}}n.exports=function(){return te().apply(this,arguments)},n.exports.reset=function(){te().reset()},n.exports.create=X,n.exports.shapeFromPath=fe,n.exports.shapeFromText=J})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Oo,!1);const ic=Oo.exports;Oo.exports.create;const Sv=oh,Tv=ah,Dd=E.forwardRef(({className:t,...e},n)=>g.jsx(Pc,{ref:n,className:De("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...e}));Dd.displayName=Pc.displayName;const Ld=E.forwardRef(({className:t,children:e,...n},r)=>g.jsxs(Tv,{children:[g.jsx(Dd,{}),g.jsxs($c,{ref:r,className:De("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...n,children:[e,g.jsxs(ih,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[g.jsx(Uc,{className:"h-4 w-4"}),g.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Ld.displayName=$c.displayName;const jd=({className:t,...e})=>g.jsx("div",{className:De("flex flex-col space-y-1.5 text-center sm:text-left",t),...e});jd.displayName="DialogHeader";const Fd=E.forwardRef(({className:t,...e},n)=>g.jsx(Oc,{ref:n,className:De("text-lg font-semibold leading-none tracking-tight",t),...e}));Fd.displayName=Oc.displayName;const Ud=E.forwardRef(({className:t,...e},n)=>g.jsx(Ac,{ref:n,className:De("text-sm text-muted-foreground",t),...e}));Ud.displayName=Ac.displayName;async function Rv(){const t=await fetch("https://api.github.com/users/binSaed/repos?per_page=100&type=public");if(!t.ok)throw new Error("Failed to fetch GitHub repos");return(await t.json()).sort((n,r)=>r.stargazers_count-n.stargazers_count)}function Pv(t=!0){return lu({queryKey:["github-repos"],queryFn:Rv,staleTime:0,gcTime:1e3*60*60*24,enabled:t})}const qd=E.forwardRef(({className:t,children:e,...n},r)=>g.jsxs(Cc,{ref:r,className:De("relative overflow-hidden",t),...n,children:[g.jsx(lh,{className:"h-full w-full rounded-[inherit]",children:e}),g.jsx(Hd,{}),g.jsx(ch,{})]}));qd.displayName=Cc.displayName;const Hd=E.forwardRef(({className:t,orientation:e="vertical",...n},r)=>g.jsx(Ic,{ref:r,orientation:e,className:De("flex touch-none select-none transition-colors",e==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",e==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...n,children:g.jsx(uh,{className:"relative flex-1 rounded-full bg-border"})}));Hd.displayName=Ic.displayName;const $v={TypeScript:"bg-blue-500",JavaScript:"bg-yellow-400",Python:"bg-green-500",Dart:"bg-cyan-500",Java:"bg-orange-500",Kotlin:"bg-purple-500",Swift:"bg-orange-400",Go:"bg-cyan-400",Rust:"bg-orange-600",Ruby:"bg-red-500",PHP:"bg-indigo-400","C++":"bg-pink-500",C:"bg-gray-500",HTML:"bg-red-400",CSS:"bg-blue-400",Shell:"bg-green-400"};function Ov({repo:t}){const e=t.language?$v[t.language]||"bg-muted-foreground":null,n=$o();return g.jsxs("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer",className:"block p-4 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-200 group",onClick:()=>n==null?void 0:n.capture("repo_clicked",{repo_name:t.name,repo_language:t.language,repo_stars:t.stargazers_count}),children:[g.jsxs("div",{className:"flex items-start justify-between gap-2",children:[g.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors truncate",children:t.name}),g.jsx(Eh,{className:"h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"})]}),t.description&&g.jsx("p",{className:"text-sm text-muted-foreground mt-2 line-clamp-2",children:t.description}),g.jsxs("div",{className:"flex items-center gap-4 mt-3 text-sm text-muted-foreground",children:[e&&g.jsxs("span",{className:"flex items-center gap-1.5",children:[g.jsx("span",{className:`w-3 h-3 rounded-full ${e}`}),t.language]}),g.jsxs("span",{className:"flex items-center gap-1",children:[g.jsx(ro,{className:"h-4 w-4"}),t.stargazers_count]}),g.jsxs("span",{className:"flex items-center gap-1",children:[g.jsx(Sh,{className:"h-4 w-4"}),t.forks_count]})]}),t.topics&&t.topics.length>0&&g.jsxs("div",{className:"flex flex-wrap gap-1.5 mt-3",children:[t.topics.slice(0,4).map(r=>g.jsx("span",{className:"px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary",children:r},r)),t.topics.length>4&&g.jsxs("span",{className:"px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground",children:["+",t.topics.length-4]})]})]})}function $s(){return g.jsxs("div",{className:"p-4 rounded-lg border border-border bg-card/50",children:[g.jsx(Qt,{className:"h-5 w-32 mb-2"}),g.jsx(Qt,{className:"h-4 w-full mb-1"}),g.jsx(Qt,{className:"h-4 w-3/4 mb-3"}),g.jsxs("div",{className:"flex gap-4",children:[g.jsx(Qt,{className:"h-4 w-20"}),g.jsx(Qt,{className:"h-4 w-12"}),g.jsx(Qt,{className:"h-4 w-12"})]})]})}function Av({open:t,onOpenChange:e}){const{data:n,isLoading:r}=Pv(t);return g.jsx(Sv,{open:t,onOpenChange:e,children:g.jsxs(Ld,{className:"max-w-2xl max-h-[85vh] p-0",children:[g.jsxs(jd,{className:"p-6 pb-0",children:[g.jsxs(Fd,{className:"flex items-center gap-2 text-xl",children:[g.jsx(ro,{className:"h-5 w-5 text-primary"}),"Public Repositories",n&&g.jsxs("span",{className:"text-sm font-normal text-muted-foreground",children:["(",n.length," repos)"]})]}),g.jsx(Ud,{className:"sr-only",children:"Browse my public GitHub repositories"})]}),g.jsx(qd,{className:"h-[60vh] px-6 pb-6",children:g.jsx("div",{className:"space-y-3 pt-4",children:r?g.jsxs(g.Fragment,{children:[g.jsx($s,{}),g.jsx($s,{}),g.jsx($s,{}),g.jsx($s,{})]}):n&&n.length>0?n.map(s=>g.jsx(Ov,{repo:s},s.id)):g.jsx("p",{className:"text-center text-muted-foreground py-8",children:"No repositories found"})})})]})})}function Cv({className:t}){return g.jsx("svg",{viewBox:"0 0 24 24",className:t,fill:"currentColor","aria-hidden":"true",children:g.jsx("path",{d:"M17.36 20.2v-5.38h1.79V22H3v-7.18h1.79v5.38h12.57zM6.77 14.32l.37-1.76 8.79 1.85-.37 1.76-8.79-1.85zm1.16-4.21l.76-1.61 8.14 3.78-.76 1.62-8.14-3.79zm2.26-3.99l1.15-1.38 6.9 5.76-1.15 1.37-6.9-5.75zM14.64 2l5.51 7.41-1.45 1.07L13.19 3 14.64 2zM6.59 18.41v-1.8h8.98v1.8H6.59z"})})}const _n={name:"Abdelrahman Saed",role:"Senior / Lead Mobile Engineer",subtitle:"Flutter / Mobile Architect",company:"iStoria",companyUrl:"https://istoria.app/en",location:"Cairo, Egypt / Remote",email:"me@bnsaed.com",tagline:"I ship production iOS & Android apps to 5M+ users — 7 years of Flutter, Dart, BLoC/Cubit, and Clean Architecture. I lead a mobile squad at iStoria, owning architecture, release governance, and delivery across a 50+ module codebase."},Lr={github:"https://github.com/binSaed",linkedin:"https://www.linkedin.com/in/binsaed/",stackoverflow:"https://stackoverflow.com/users/11001850/abdelrahman-saed",pubdev:"https://pub.dev/publishers/bnsaed.com/packages",cv:"https://bnsaed.com/CV/cv.pdf",email:"mailto:me@bnsaed.com"},ib=["I'm a Senior / Lead Mobile Engineer with 7 years building production iOS and Android apps that have reached over 5 million users. I work in Flutter and Dart with BLoC/Cubit and Clean Architecture, and I care as much about release engineering and stability as I do about the features users see.","Today I lead a 4-engineer mobile squad at iStoria, owning architecture direction, release governance, and delivery for a 50+ module codebase. I've shipped 250+ production releases, reviewed 600+ PRs, sustained a 99.9% crash-free rate, and cut our release cycle from four weeks to one."],Iv=[{value:"7+",label:"Years shipping mobile"},{value:"5M+",label:"Users reached"},{value:"99.9%",label:"Crash-free rate"},{value:"250+",label:"Production releases"},{value:"600+",label:"PRs reviewed"},{value:"30K+",label:"Abuse accounts blocked"}],ab=[{role:"Lead Mobile Engineer",company:"iStoria",companyUrl:"https://istoria.app/en/",context:"EdTech · English Language Learning",location:"Riyadh, Saudi Arabia (Hybrid)",period:"Jun 2025 – Present",stack:["Flutter","Dart","BLoC","Cubit","PowerSync","Drift","Firebase","Sentry","GitHub Actions","GraphQL"],highlights:["Lead a 4-engineer iOS/Android squad — architecture direction, hiring bar, release governance, and quarterly roadmaps for a 5M+ user base.","Cut the release cycle 75% (4 weeks → 1) via trunk-based development, feature flags, and end-to-end CI/CD ownership.","Architected a modular Flutter codebase with 50+ feature modules and 140+ routes, enforced through CI quality gates and code review.","Hardened production security end-to-end: PII masked in logs and Sentry, cleartext traffic disabled, and TLS certificate validation enforced."]},{role:"Founding Mobile Engineer",company:"iStoria",companyUrl:"https://istoria.app/en/",context:"EdTech · English Language Learning",location:"Riyadh, Saudi Arabia (Hybrid)",period:"Jan 2022 – Jun 2025 · 3 yrs 6 mos",stack:["Flutter","Dart","BLoC","Cubit","PowerSync","Drift","Codemagic","Firebase","RevenueCat","Adjust"],highlights:["Shipped flagship growth & AI features end-to-end: Leaderboard with social sharing, AI Read-with (speech recognition), and the iStro AI chat companion.","Designed offline-first infrastructure (PowerSync + Drift) — selective per-key sync, conflict resolution, and schema migration for millions of accounts.","Architected a cross-platform anti-piracy system (jailbreak/root/tamper detection + backend behavioral analysis) that auto-blocked 30,000+ abusive accounts.","Drove a sustained performance program: ~35% cold-start reduction, ~60% rendering gains, and ~20% memory reduction."]},{role:"Mobile Engineer",company:"Happy Trip",companyUrl:"https://www.linkedin.com/company/happytrip-ar",context:"Travel / Tourism Tech",location:"Cairo, Egypt",period:"Oct 2020 – Jan 2022 · 1 yr 4 mos",stack:["Flutter","Dart","REST","Firebase"],highlights:["Owned mobile delivery end-to-end across the Flutter team — task planning, code-review gates, and the release cadence for every ship.","Architected a networking SDK with multi-layer caching, request queueing, auto-retry, token refresh, and background parsing — cutting networking code 60%.","Delivered the company's first mobile platform (consumer booking, internal HR, POS) in 14 months, enabling a full business pivot."]},{role:"Mobile Engineer (Part-time)",company:"Tech Bay Portal",companyUrl:"",context:"Ride-hailing",location:"UAE (Remote)",period:"Feb 2021 – Oct 2021 · 9 mos",stack:["Flutter","Dart","Socket.io","Google Maps"],highlights:["Delivered real-time GPS tracking and live trip updates (Socket.io, Google Maps) across driver and rider apps.","Hardened the live-tracking pipeline against intermittent connectivity — buffering location updates locally and replaying on reconnect."]},{role:"Mobile Engineer",company:"FekraSoft Co",companyUrl:"https://www.linkedin.com/company/fekrasoft",context:"Software House",location:"Cairo, Egypt",period:"Aug 2019 – Sep 2020 · 1 yr 2 mos",stack:["Flutter","Dart","RxDart","Firebase"],highlights:["Led company-wide Flutter adoption as the first Flutter engineer, mentoring the Android team and authoring the shared coding standards still in use.","Shipped production e-commerce and document-management apps with barcode scanning and file-level encryption."]}],ob=[{category:"Mobile",icon:"Smartphone",items:["Flutter","Dart","iOS","Android","Adaptive UI","Animations","WidgetKit","Deep Linking","Push (FCM)","i18n / RTL"]},{category:"Architecture & Data",icon:"Database",items:["Clean Architecture","MVVM","BLoC","Cubit","SOLID","Dependency Injection","PowerSync","Drift","Offline-first"]},{category:"DevOps & Quality",icon:"GitBranch",items:["CI/CD","GitHub Actions","Codemagic","Fastlane","Trunk-based","Feature Flags","Sentry","Maestro / Patrol","Unit / Widget Tests"]},{category:"Monetization",icon:"CreditCard",items:["RevenueCat","Stripe","Paddle","AdMob","In-App Purchases"]},{category:"Analytics & Engagement",icon:"LineChart",items:["Adjust","CleverTap","PostHog","Segment","WebEngage","MoEngage","A/B Testing","GrowthBook"]},{category:"Leadership",icon:"Users",items:["Architecture Ownership","Technical RFCs","Release Governance","Code Review","Mentoring"]}],lb=[{title:"flutter_cached_pdfview",description:"Native PDF viewer for iOS & Android with URL/asset/local caching, password-protected files, and gesture-based zoom.",image:"https://github.com/user-attachments/assets/77ccded4-5c51-4583-9830-0f1c66e627c4",tags:["Flutter","Dart","PDF","iOS","Android"],github:"https://github.com/binSaed/flutter_cached_pdfview",demo:"https://pub.dev/packages/flutter_cached_pdfview",stars:134,likes:501,downloads:43300},{title:"iStoria",description:"Story-based English learning used by millions. A core mobile engineer since the founding — owning architecture, offline-first sync, and growth features.",image:"https://play-lh.googleusercontent.com/nO5vER33waTf8T7vKPo-HYHflKVldZna_yQnqeB3Hqv9smjPiP-xGBTCGXWLFNIPn00",tags:["Flutter","Dart","Firebase","EdTech"],demo:"https://istoria.app/en/",downloads:5e6},{title:"Stickerawy",description:"WhatsApp stickers app for Android, with 500K+ installs on Google Play.",tags:["Flutter","Android","WhatsApp"],demo:"https://play.google.com/store/apps/details?id=com.stickerawy.stickers",downloads:5e5},{title:"clipboard_plus",description:"Flutter clipboard plugin with silent content-type detection on iOS — detects URLs, text, and images without triggering the paste permission dialog.",tags:["Flutter","iOS","Android","Plugin"],github:"https://github.com/binSaed/clipboard_plus",demo:"https://pub.dev/packages/clipboard_plus"},{title:"flutter_zoom_checker",description:"iOS/Android display-zoom (UI scaling) detection plugin, working around a Flutter framework limitation (issue #95421).",tags:["Flutter","iOS","Android","Plugin"],github:"https://github.com/binSaed/flutter_zoom_checker",demo:"https://pub.dev/packages/flutter_zoom_checker"},{title:"dio_firebase_performance_plus",description:"Dio interceptor that streams HTTP request metrics to Firebase Performance Monitoring.",tags:["Dart","Dio","Firebase"],github:"https://github.com/binSaed/dio_firebase_performance_plus"}],cb=[{name:"youtube_explode_dart",url:"https://github.com/Hexer10/youtube_explode_dart/pull/371"},{name:"dio_smart_retry",url:"https://github.com/rodion-m/dio_smart_retry/pull/36"},{name:"growthbook-flutter",url:"https://github.com/growthbook/growthbook-flutter/pulls?q=author:binSaed"}],ac=["You can't catch me! 😆","Nice try! 👍","Too slow! 🏃‍♂️","Almost got me! 😏","Keep trying! 🎯","Haha, missed! 😂"],oc=["Hi! 👋","Hello! 😊","Hey there! 🙌","Welcome! ✨"];function Mv(){const{data:t,isLoading:e}=xv(),n=$o(),[r,s]=E.useState({x:0,y:0}),[i,a]=E.useState({x:0,y:0}),[o,l]=E.useState(!1),[c,u]=E.useState(""),h=E.useRef(null),p=E.useRef(0),d=E.useRef(0),[v,f]=E.useState(!1),_=E.useRef(null),k=E.useRef(null),C=E.useCallback((G,te)=>{s({x:G,y:te})},[]);Ev(i.x,i.y,C,{stiffness:120,damping:14,mass:1}),E.useEffect(()=>{if(_.current)return k.current=ic.create(_.current,{resize:!0,useWorker:!0}),()=>{var G;(G=k.current)==null||G.reset(),k.current=null}},[]),E.useEffect(()=>{if(o){const G=setTimeout(()=>l(!1),2e3);return()=>clearTimeout(G)}},[o]);const P=E.useCallback(()=>{const G=Date.now();if(G-d.current<2500)return;d.current=G;const te=ac[Math.floor(Math.random()*ac.length)];u(te),l(!0)},[]),[L,$]=E.useState(!0);E.useEffect(()=>{if(typeof window<"u"&&typeof window.matchMedia=="function"){const G=window.matchMedia("(hover: hover) and (pointer: fine)");$(G.matches);const te=le=>$(le.matches);return G.addEventListener("change",te),()=>G.removeEventListener("change",te)}},[]);const O=!L,N=E.useCallback(()=>{const te=Date.now()+1e3,fe={startVelocity:30,spread:360,ticks:60,colors:["#00d4ff","#0099cc","#4d94ff","#1a75ff","#00bcd4","#0077b3"]},J=k.current??ic,y=(R,A)=>Math.random()*(A-R)+R,m=setInterval(()=>{const R=te-Date.now();if(R<=0)return clearInterval(m);const A=600*(R/1e3);J({...fe,particleCount:A,origin:{x:y(.1,.3),y:Math.random()-.2}}),J({...fe,particleCount:A,origin:{x:y(.7,.9),y:Math.random()-.2}})},150)},[]),T=E.useCallback(()=>{if(N(),l(!1),a({x:0,y:0}),O){const G=Date.now();if(G-d.current<2e3)return;d.current=G;const te=oc[Math.floor(Math.random()*oc.length)];u(te),l(!0)}},[O,N]),x=E.useCallback((G,te)=>{if(!h.current)return;const le=h.current.getBoundingClientRect(),fe=le.left+le.width/2,J=le.top+le.height/2,y=G-fe,m=te-J,R=Math.sqrt(y*y+m*m),A=200,j=350;if(R<A&&R>0){p.current+=1,p.current>=3&&(P(),p.current=0);const B=Math.atan2(m,y),Y=Math.pow((A-R)/A,.6),q=-Math.cos(B)*Y*160,Q=-Math.sin(B)*Y*160,ne=280;a(ce=>({x:Math.max(-ne,Math.min(ne,ce.x+q*.25)),y:Math.max(-ne,Math.min(ne,ce.y+Q*.25))}))}else R>j&&a(B=>Math.abs(B.x)<1&&Math.abs(B.y)<1?{x:0,y:0}:{x:B.x*.85,y:B.y*.85})},[P]),S=E.useCallback(()=>{a({x:0,y:0})},[]),z=E.useCallback(G=>{G.pointerType!=="touch"&&x(G.clientX,G.clientY)},[x]),D=E.useCallback(G=>{G.pointerType!=="touch"&&S()},[S]),V=E.useCallback(G=>{x(G.clientX,G.clientY)},[x]),X=E.useCallback(()=>{S()},[S]);return g.jsxs(g.Fragment,{children:[g.jsx("canvas",{ref:_,className:"fixed inset-0 pointer-events-none z-[9999]",style:{width:"100vw",height:"100vh"}}),g.jsxs("section",{className:"min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden pt-20",onPointerMove:z,onPointerLeave:D,onMouseMove:V,onMouseLeave:X,children:[g.jsx(kv,{}),g.jsx("div",{className:"container mx-auto px-6 relative z-10",children:g.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-12 lg:gap-20",children:[g.jsxs("div",{ref:h,className:"relative cursor-pointer",onPointerEnter:z,onPointerMove:z,onMouseEnter:V,onMouseMove:V,onClick:T,style:{transform:`translate3d(${r.x}px, ${r.y}px, 0)`,willChange:"transform"},children:[g.jsx("div",{className:`absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-300 -top-16 md:-top-16 ${O?"top-full mt-4":"-top-16"} ${o?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-2 scale-95 pointer-events-none"}`,children:g.jsxs("div",{className:"relative",children:[g.jsx("div",{className:"bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap shadow-lg",children:c}),g.jsx("div",{className:`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-l-transparent border-r-transparent ${O?"-top-2 border-b-8 border-b-primary":"-bottom-2 border-t-8 border-t-primary"}`})]})}),g.jsx("div",{className:"relative animate-scale-in",children:g.jsxs("div",{className:"relative select-none",children:[g.jsx("div",{className:"absolute inset-0 rounded-[50%] bg-gradient-to-r from-primary to-primary/50 blur-2xl opacity-50 animate-pulse-glow"}),e?g.jsx(Qt,{className:"w-48 h-60 md:w-64 md:h-80 rounded-[45%]"}):g.jsx("img",{src:`${t==null?void 0:t.avatar_url}&s=256`,srcSet:`${t==null?void 0:t.avatar_url}&s=192 192w, ${t==null?void 0:t.avatar_url}&s=256 256w`,sizes:"(max-width: 768px) 192px, 256px",alt:_n.name,width:256,height:256,loading:"eager",decoding:"async",draggable:!1,className:"relative w-48 h-60 md:w-64 md:h-80 rounded-[45%] object-cover border-4 border-card shadow-2xl"})]})})]}),g.jsxs("div",{className:"text-center lg:text-left max-w-2xl",children:[g.jsx("p",{className:"text-primary font-mono text-sm md:text-base mb-4 opacity-0 animate-fade-in",style:{animationDelay:"0.2s"},children:"Hello, I'm"}),g.jsx("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold mb-6",children:g.jsx("span",{className:"shimmer-text",children:_n.name})}),g.jsx("h2",{className:"text-xl md:text-2xl text-muted-foreground mb-2 opacity-0 animate-fade-in",style:{animationDelay:"0.4s"},children:_n.role}),g.jsxs("p",{className:"text-base md:text-lg font-medium text-primary/90 mb-6 opacity-0 animate-fade-in",style:{animationDelay:"0.45s"},children:[_n.subtitle," ·"," ",g.jsxs("a",{href:_n.companyUrl,target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline",children:["@",_n.company]})]}),g.jsx("p",{className:"text-muted-foreground text-lg mb-8 leading-relaxed opacity-0 animate-fade-in",style:{animationDelay:"0.5s"},children:_n.tagline}),g.jsxs("div",{className:"flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-in",style:{animationDelay:"0.6s"},children:[g.jsx(un,{variant:"hero",size:"lg",asChild:!0,children:g.jsx("a",{href:"#contact",children:"Get In Touch"})}),g.jsx(un,{variant:"heroOutline",size:"lg",asChild:!0,children:g.jsxs("a",{href:Lr.cv,target:"_blank",rel:"noopener noreferrer",onClick:()=>n==null?void 0:n.capture("cv_downloaded"),children:[g.jsx(Lc,{className:"mr-2 h-5 w-5"}),"Download CV"]})})]}),g.jsxs("div",{className:"flex items-center gap-6 mt-8 justify-center lg:justify-start opacity-0 animate-fade-in",style:{animationDelay:"0.7s"},children:[g.jsx("a",{href:Lr.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",title:"GitHub",className:"text-muted-foreground hover:text-primary transition-colors",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"github"}),children:g.jsx(jc,{className:"h-6 w-6"})}),g.jsx("a",{href:Lr.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",title:"LinkedIn",className:"text-muted-foreground hover:text-primary transition-colors",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"linkedin"}),children:g.jsx(Fc,{className:"h-6 w-6"})}),g.jsx("a",{href:Lr.pubdev,target:"_blank",rel:"noopener noreferrer","aria-label":"pub.dev packages",title:"pub.dev packages",className:"text-muted-foreground hover:text-primary transition-colors",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"pubdev"}),children:g.jsx(Rh,{className:"h-6 w-6"})}),g.jsx("a",{href:Lr.stackoverflow,target:"_blank",rel:"noopener noreferrer","aria-label":"Stack Overflow",title:"Stack Overflow",className:"text-muted-foreground hover:text-primary transition-colors",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"stackoverflow"}),children:g.jsx(Cv,{className:"h-6 w-6"})}),e?g.jsx(Qt,{className:"h-8 w-36 rounded-full"}):(t==null?void 0:t.public_repos)!==void 0&&g.jsxs("button",{onClick:()=>{f(!0),n==null||n.capture("repos_modal_opened",{public_repos:t.public_repos})},className:"flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-medium",children:[g.jsx(ro,{className:"h-4 w-4"}),t.public_repos," Public Repos"]})]})]})]})}),g.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",children:g.jsx("a",{href:"#about",className:"text-muted-foreground hover:text-primary transition-colors",children:g.jsx(xh,{className:"h-6 w-6"})})})]}),g.jsx(Av,{open:v,onOpenChange:f})]})}function Nv(t={}){const{once:e=!0,margin:n="-100px",threshold:r=0}=t,[s,i]=E.useState(!1),[a,o]=E.useState(null),l=c=>{o(c)};return E.useEffect(()=>{if(!a)return;const c=new IntersectionObserver(([u])=>{u.isIntersecting?(i(!0),e&&c.unobserve(a)):e||i(!1)},{rootMargin:n,threshold:r});return c.observe(a),()=>{c.unobserve(a)}},[a,e,n,r]),{ref:l,isInView:s}}function Dv(){const{ref:t,isInView:e}=Nv({margin:"-80px"});return g.jsx("section",{ref:t,className:"py-16 border-y border-border/60 bg-card/30",children:g.jsx("div",{className:"container mx-auto px-6",children:g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6",children:Iv.map((n,r)=>g.jsxs("div",{className:`text-center opacity-0 ${e?"animate-fade-in-up":""}`,style:{animationDelay:`${r*.08}s`},children:[g.jsx("div",{className:"text-3xl md:text-4xl font-bold gradient-text",children:n.value}),g.jsx("div",{className:"mt-1 text-xs md:text-sm text-muted-foreground leading-snug",children:n.label})]},n.label))})})})}function Lv(){const[t,e]=E.useState(!1);E.useEffect(()=>{const r=()=>{e(window.scrollY>400)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return g.jsx(un,{onClick:n,size:"icon",className:De("fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300","bg-primary hover:bg-primary/90 text-primary-foreground","hover:scale-110",t?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"),"aria-label":"Back to top",children:g.jsx(kh,{className:"h-5 w-5"})})}function jv(){const[t,e]=E.useState(()=>{if(typeof window<"u"){const r=localStorage.getItem("theme");return r||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}return"dark"});return E.useEffect(()=>{const r=document.documentElement;t==="dark"?r.classList.add("dark"):r.classList.remove("dark"),localStorage.setItem("theme",t)},[t]),{theme:t,toggleTheme:()=>{e(r=>r==="dark"?"light":"dark")},setTheme:e}}const Fv=E.lazy(()=>hn(()=>import("./AboutSection-BtD7PO9U.js"),__vite__mapDeps([0,1,2,3,4])).then(t=>({default:t.AboutSection}))),Uv=E.lazy(()=>hn(()=>import("./ExperienceSection-twqWSSwu.js"),__vite__mapDeps([5,1,2,3,4])).then(t=>({default:t.ExperienceSection}))),qv=E.lazy(()=>hn(()=>import("./ProjectsSection-BLroxRB7.js"),__vite__mapDeps([6,1,2,4])).then(t=>({default:t.ProjectsSection}))),Hv=E.lazy(()=>hn(()=>import("./ArticlesSection-G2F0EC3l.js"),__vite__mapDeps([7,1,2,8,4])).then(t=>({default:t.ArticlesSection}))),Bv=E.lazy(()=>hn(()=>import("./SkillsSection-DIAEuNjp.js"),__vite__mapDeps([9,1,2,4])).then(t=>({default:t.SkillsSection}))),zv=E.lazy(()=>hn(()=>import("./ContactSection-C3X5lxDV.js"),__vite__mapDeps([10,1,2,11,4])).then(t=>({default:t.ContactSection}))),Gv=E.lazy(()=>hn(()=>import("./Footer-DgpWbL3t.js"),__vite__mapDeps([12,1,2,11,4])).then(t=>({default:t.Footer}))),Jv=()=>{const{theme:t,toggleTheme:e}=jv(),n=yc();return E.useEffect(()=>{const s=setTimeout(()=>{if(n.hash){const i=document.querySelector(n.hash);i&&i.scrollIntoView({behavior:"smooth"})}},300);return()=>clearTimeout(s)},[n.hash,n.key]),g.jsxs("div",{className:"min-h-screen bg-background",children:[g.jsx(_v,{theme:t,toggleTheme:e}),g.jsxs("main",{children:[g.jsx(Mv,{}),g.jsx(Dv,{}),g.jsxs(E.Suspense,{fallback:g.jsx("div",{className:"min-h-[200px]"}),children:[g.jsx(Fv,{}),g.jsx(Uv,{}),g.jsx(qv,{}),g.jsx(Hv,{}),g.jsx(Bv,{}),g.jsx(zv,{})]})]}),g.jsx(E.Suspense,{fallback:null,children:g.jsx(Gv,{})}),g.jsx(Lv,{})]})},to=[{slug:"flutter-cached-pdfview-guide",title:"Building a Cached PDF Viewer in Flutter",description:"Learn how to implement an efficient PDF viewer with caching support for iOS and Android using flutter_cached_pdfview.",date:"2024-01-15",readTime:"5 min read",tags:["Flutter","Dart","PDF","Mobile"],content:`
# Building a Cached PDF Viewer in Flutter

![flutter_cached_pdfview — native cached PDF viewing on iOS and Android](/article-images/flutter-cached-pdfview-guide-hero.png)

PDF viewing is a common requirement in mobile applications. Whether you're building a document reader, an e-book app, or just need to display PDFs from URLs, having an efficient solution is crucial.

## Why Caching Matters

When loading PDFs from remote URLs, you don't want to re-download the file every time the user opens it. This is where caching becomes essential:

- **Faster load times** - Cached files load instantly
- **Reduced bandwidth** - Save data for your users
- **Offline support** - Previously viewed PDFs work offline

## Getting Started

First, add the package to your \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  flutter_cached_pdfview: ^0.4.3
\`\`\`

## Basic Usage

Here's a simple implementation:

\`\`\`dart
import 'package:flutter_cached_pdfview/flutter_cached_pdfview.dart';

class PDFViewerPage extends StatelessWidget {
  final String pdfUrl;

  const PDFViewerPage({Key? key, required this.pdfUrl}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('PDF Viewer')),
      body: const PDF().cachedFromUrl(
        pdfUrl,
        placeholder: (progress) => Center(
          child: CircularProgressIndicator(value: progress / 100),
        ),
        errorWidget: (error) => Center(
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

- **URL** - Remote PDF files with automatic caching
- **Asset** - PDFs bundled with your app
- **File Path** - Local PDF files

### 2. Customizable Loading States

Show progress while loading:

\`\`\`dart
placeholder: (progress) => Center(
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      CircularProgressIndicator(value: progress / 100),
      SizedBox(height: 16),
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
      Icon(Icons.error, size: 64, color: Colors.red),
      SizedBox(height: 16),
      Text('Failed to load PDF'),
      TextButton(
        onPressed: () => // retry logic,
        child: Text('Retry'),
      ),
    ],
  ),
),
\`\`\`

## Conclusion

The \`flutter_cached_pdfview\` package provides a simple yet powerful way to display PDFs in your Flutter apps. With built-in caching, you get better performance and a smoother user experience.

Check out the [package on pub.dev](https://pub.dev/packages/flutter_cached_pdfview) for more details!
    `},{slug:"github-actions-branch-protection-guardrails",title:"The repo that rejects my own pushes to master",description:"Two small GitHub Actions that stop accidental direct pushes to master and auto-restore build-breaking files — reversible by design, with an explicit escape hatch.",date:"2026-04-14",readTime:"6 min read",tags:["GitHub Actions","DevOps","CI/CD","Flutter"],content:`
# The repo that rejects my own pushes to master

*Subtitle: Branch protection rules are step one. Two small GitHub Actions turned "please don't do that" into "the repo won't let you."*

*The Self-Driving Repo · Part 1 — Governance*

![Guardrails — a neon shield protecting the master branch](/article-images/github-actions-branch-protection-guardrails-hero.png)

---

Every team has the unwritten rule: **don't push straight to \`master\`.** And every team has the Tuesday afternoon where someone does it anyway — a fast hotfix, a muscle-memory \`git push\`, a rebase gone sideways — and now production history has a commit that never saw review.

You can write that rule in the README. You can put it in the onboarding doc. People will still break it, including the person who wrote it. (Hi.)

So I stopped relying on discipline and made the repo enforce itself. Two small workflows, under 200 lines combined. One guards the branch. One guards the files that quietly break everyone's build.

## The problem

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

![Flow: a push to master checked against allowed-merge rules, then reverted if unauthorized](/article-images/github-actions-branch-protection-guardrails-diagram.png)

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

## What it bought us

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

![A pull request auto-filling its own context beside a quality gate](/article-images/automate-pull-request-hygiene-hero.png)

---

Open a pull request on most teams and you're greeted by a checklist: link the Jira ticket, assign yourself, confirm the analyzer passes, tick the boxes. None of it is hard. All of it is friction. And friction at the *start* of review is the worst kind, because it delays the part that actually matters — a human reading your code.

So I split PR review into two buckets. **Chores** (mechanical, rule-based, boring) get automated. **Judgment** (is this the right change?) stays with people. Two workflows handle the chores: one enriches every new PR with context, the other runs a real quality gate and manages its own labels and comments.

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

## How it works

![Flow: a PR passing a JSON check and the analyzer, then merge-allowed or blocked with a self-deleting comment](/article-images/automate-pull-request-hygiene-diagram.png)

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

## What it bought us

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

![A glowing bridge syncing an issue board and a pull request](/article-images/sync-jira-with-github-prs-hero.png)

---

Every team that uses Jira and GitHub pays the same small, constant tax: **keeping the two of them telling the same story.** The ticket is "In Review" but the PR is merged. The PR is open but the ticket is "Done." Which one do you believe? Usually neither, so you go ask the person — and now three people are doing status archaeology instead of building.

I didn't want a heavyweight integration or a paid app. I wanted the PR to *know things about its ticket* automatically: what release it's targeting, what labels it carries, whether it's been marked Done — and, the part that turned out most useful, whether it's been Done for *too long* without merging.

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

## How it works

![Flow: a branch name feeding a regex and a Jira API call, fanning out into fix, jira and Slow-PR labels](/article-images/sync-jira-with-github-prs-diagram.png)

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

## What it bought us

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

![A radar sweep over branch lines with conflicts pulsing red](/article-images/auto-rebase-and-detect-merge-conflicts-hero.png)

---

Here's a failure mode so normal you've stopped noticing it: you merge a PR to \`master\`, and in that instant some number of *other* open PRs become un-mergeable. They were fine a second ago. Now they conflict. But nobody knows yet — the authors are working on something else, and they'll find out hours or days later when they try to merge and GitHub says no.

Multiply that by a busy \`master\` and a dozen open PRs and you get a slow, invisible tax: branches drifting out of sync, conflicts discovered at the worst possible moment (merge time), and a steady drip of "can you rebase?" comments.

I wanted the opposite: the *moment* \`master\` moves, every open PR gets refreshed against it, and anything that conflicts gets flagged and announced — immediately, while the change is still fresh in everyone's head.

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

## How it works

![Flow: a push to master looping over PRs, polling mergeable state, labeling conflicts, then a grouped chat digest](/article-images/auto-rebase-and-detect-merge-conflicts-diagram.png)

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

## What it bought us

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

![A robot arm carefully braiding two translation streams back into one](/article-images/bot-that-resolves-merge-conflicts-hero.png)

---

Let me start with the version of this idea that should scare you:

> "What if a GitHub Action automatically resolved merge conflicts and force-pushed the result to people's PR branches?"

If your stomach dropped, good — mine did too. A bot that runs \`git merge\` and \`git push\` against branches it doesn't own is exactly how you corrupt someone's work, lose a commit, or merge two versions of a file into nonsense. This is the most dangerous automation in the entire series.

And yet it runs on every push to \`master\`, it resolves real conflicts, and I trust it. The trick wasn't writing a smarter merge algorithm. It was making the bot **profoundly cowardly** — it only acts in one narrow situation where the "right answer" is mechanical and provable, and it runs away from everything else.

This post is about how to take a scary capability and make it safe by aggressively shrinking its blast radius.

## The problem: translation conflicts are constant and brain-dead

We ship in multiple languages. Translations live in per-locale JSON files — \`assets/translations/en.json\`, \`ar.json\`, and so on. Add a feature and you add keys to all of them. Which means **every feature branch touches the same translation files**, and they conflict constantly.

But here's the thing: these conflicts are almost never *real*. Two developers add different keys to \`en.json\`. Git sees edits to the same region and throws up its hands. A human opens the file, looks at the two sides, and realizes there's nothing to decide — you want *both* keys. It's the dumbest possible conflict, and resolving it by hand is pure tax: it blocks the PR, interrupts the author, and contributes exactly zero thought.

Code conflicts deserve a human. Two people adding \`"save_button": "Save"\` and \`"share_button": "Share"\` to the same JSON do not.

## The idea: automate the mechanical case, refuse everything else

The workflow runs on every push to \`master\`. For each open PR, it tries to merge \`master\` in. If the *only* things that conflict are translation JSON files, it resolves them by merging the key sets, pushes the resolution, and comments to explain itself. If *anything else* conflicts — a single \`.dart\` file, a \`pubspec.yaml\`, anything — it aborts, touches nothing, and leaves the PR for a human.

The safety isn't in the merge logic. It's in the **refusal logic**. Let me walk the guards in the order they execute, because the order *is* the design.

## How it works (a fortress of guard clauses)

![Decision flow: if every conflicting file matches the translations path, merge and push; otherwise abort and hand to a human](/article-images/bot-that-resolves-merge-conflicts-diagram.png)

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

![A robot broom sweeping dead branches from a healthy git tree](/article-images/automated-stale-branch-cleanup-hero.png)

---

Old branches are the junk drawer of a repo. Every merged feature, every abandoned experiment, every "let me just try something" leaves one behind. They pile up silently — clones get slower, branch pickers get unusable, and \`git branch -r\` scrolls for a screen and a half. On a long-lived repo with a busy team, you wake up one day with hundreds of dead branches.

The naive fix — a script that deletes anything old — is how you delete a release branch someone needed, or a long-running integration branch that just hadn't been touched in a while. With deletion, "oops" is expensive. You don't get to be cavalier.

So I built branch cleanup as a **classification problem first and a deletion problem second.** The deleting is three lines. The safety is everything before it.

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

## How it works

![Classification funnel: branches sorted into sacred, protected, open-PR, merged, stale and active, with a capped delete tray](/article-images/automated-stale-branch-cleanup-diagram.png)

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

## What it bought us

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

![Private, per-engineer weekly summary cards routed individually](/article-images/ai-weekly-engineering-reviews-hero.png)

---

This is the workflow I hesitated to write about, because it's the one most likely to be misunderstood — and the one where the engineering was genuinely the easy part.

Every Sunday, a job aggregates the week's git activity and issue-tracker tickets for each engineer, compares it to the previous week, and uses an LLM to write a short, personalized summary that gets delivered privately to each person — in their own language. It also updates a stats table in the repo's README.

Read that back and you can hear two very different reactions. One: "great, automated visibility into team contributions." The other: "that's surveillance with a friendly font." Both are correct, and which one it actually becomes depends entirely on choices that have nothing to do with code. So this post is half engineering, half the harder thing: how to build something this powerful *responsibly* — or whether to point it at people at all.

## The problem

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

![Flow: git and issue-tracker data merged into per-person two-week stats, summarized by a constrained LLM, routed privately](/article-images/ai-weekly-engineering-reviews-diagram.png)

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

## Doing this responsibly (the actual hard part)

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
`}];function ub(t){return to.find(e=>e.slug===t)}const lc=["home","about","projects","articles","skills","contact"],Ce={owner:"Abdelrahman Saed",alias:"binSaed",email:"me@bnsaed.com",url:"https://bnsaed.com",github:"https://github.com/binSaed",linkedin:"https://www.linkedin.com/in/binsaed/",cv:"https://bnsaed.com/CV/cv.pdf"};function Wv(){const t=_c();E.useEffect(()=>{if(typeof navigator>"u"||!navigator.modelContext)return;const e=navigator.modelContext,n=[],r=[{name:"navigate_to_section",title:"Scroll to a section",description:"Navigate the homepage to one of its anchor sections: home, about, projects, articles, skills, or contact.",inputSchema:{type:"object",properties:{section:{type:"string",enum:lc,description:"The section anchor to scroll to."}},required:["section"]},execute:async s=>{const i=String(s.section??"");return lc.includes(i)?(t(i==="home"?"/":`/#${i}`),{ok:!0,section:i}):{ok:!1,error:`Unknown section: ${i}`}}},{name:"list_articles",title:"List published articles",description:"Return the slug, title, description, date, and tags for every article published on bnsaed.com.",inputSchema:{type:"object",properties:{}},execute:async()=>to.map(s=>({slug:s.slug,title:s.title,description:s.description,date:s.date,readTime:s.readTime,tags:s.tags,url:`${Ce.url}/articles/${s.slug}/`}))},{name:"open_article",title:"Open an article",description:"Navigate to a specific article by slug. Use list_articles first to discover valid slugs.",inputSchema:{type:"object",properties:{slug:{type:"string",description:"Article slug, e.g. 'flutter-cached-pdfview-guide'."}},required:["slug"]},execute:async s=>{const i=String(s.slug??""),a=to.find(o=>o.slug===i);return a?(t(`/articles/${i}/`),{ok:!0,url:`${Ce.url}/articles/${i}/`,title:a.title}):{ok:!1,error:`No article with slug '${i}'`}}},{name:"get_contact_info",title:"Get contact details",description:"Return the preferred ways to contact Abdelrahman Saed (email, GitHub, LinkedIn, contact form URL).",inputSchema:{type:"object",properties:{}},execute:async()=>({name:Ce.owner,alias:Ce.alias,email:Ce.email,mailto:`mailto:${Ce.email}`,contactForm:`${Ce.url}/#contact`,github:Ce.github,linkedin:Ce.linkedin,preferredChannel:"email"})},{name:"compose_email",title:"Open a pre-filled email",description:"Open the user's mail client with a pre-filled email to Abdelrahman Saed. Use this instead of submitting the contact form programmatically.",inputSchema:{type:"object",properties:{subject:{type:"string",description:"Email subject line."},body:{type:"string",description:"Email body, plain text."}},required:["subject"]},execute:async s=>{const i=encodeURIComponent(String(s.subject??"")),a=encodeURIComponent(String(s.body??"")),o=`mailto:${Ce.email}?subject=${i}&body=${a}`;return window.location.href=o,{ok:!0,mailto:o}}},{name:"download_cv",title:"Download the CV",description:"Open the PDF CV of Abdelrahman Saed in a new tab.",inputSchema:{type:"object",properties:{}},execute:async()=>(window.open(Ce.cv,"_blank","noopener,noreferrer"),{ok:!0,url:Ce.cv})},{name:"get_site_metadata",title:"Get site metadata",description:"Return identity and discovery metadata for bnsaed.com: owner, URL, well-known endpoints, and current page.",inputSchema:{type:"object",properties:{}},execute:async()=>({owner:Ce.owner,alias:Ce.alias,url:Ce.url,currentPath:window.location.pathname+window.location.hash,wellKnown:{apiCatalog:`${Ce.url}/.well-known/api-catalog`,agentSkills:`${Ce.url}/.well-known/agent-skills/index.json`,mcpServerCard:`${Ce.url}/.well-known/mcp/server-card.json`,robots:`${Ce.url}/robots.txt`,sitemap:`${Ce.url}/sitemap.xml`},contentSignal:{search:"yes","ai-input":"yes","ai-train":"no"}})}];try{for(const s of r){const i=e.registerTool(s);i&&typeof i.unregister=="function"&&n.push(i)}}catch{}return()=>{for(const s of n)try{s.unregister()}catch{}}},[t])}const Vv=E.lazy(()=>hn(()=>import("./ArticlePage-CA10mx8J.js"),__vite__mapDeps([13,1,2,12,11,4,8]))),Kv=new cf,Yv=()=>(Wv(),null),Qv=()=>g.jsx(gu,{children:g.jsx(ff,{client:Kv,children:g.jsxs(Bp,{children:[g.jsx(up,{}),g.jsx(Hp,{}),g.jsxs(Zd,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:[g.jsx(Yv,{}),g.jsx(E.Suspense,{fallback:g.jsx("div",{className:"min-h-screen bg-background"}),children:g.jsxs(eh,{children:[g.jsx(fi,{path:"/",element:g.jsx(Jv,{})}),g.jsx(fi,{path:"/articles/:slug",element:g.jsx(Vv,{})}),g.jsx(fi,{path:"*",element:g.jsx(th,{to:"/",replace:!0})})]})})]})]})})});Ro.init("phc_tLT5g9tearUJgGqbyVABjDtBFcFswbb9Brps3U2B8mVc",{api_host:"https://custom.bnsaed.com",ui_host:"https://eu.posthog.com",defaults:"2026-05-30",disable_surveys:!0});Mc(document.getElementById("root")).render(g.jsx(pv,{client:Ro,children:g.jsx(Qv,{})}));export{un as B,Eh as E,jc as G,_v as H,Fc as L,Rh as P,ro as S,Uc as X,$o as a,sb as b,ft as c,Nv as d,ib as e,ab as f,ub as g,to as h,_n as i,De as j,rb as k,Lr as l,Cv as m,cb as o,lb as p,ob as s,jv as u};
