const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutSection-dGneOSDz.js","assets/ui-vendor-5oxkQ2Jf.js","assets/react-vendor-GBp8saLZ.js","assets/useInView-CAErqg1K.js","assets/radix-DOafHixa.js","assets/ProjectsSection-BByxCiw_.js","assets/ArticlesSection-DK9yUPf3.js","assets/clock-CvHA4bqB.js","assets/SkillsSection-BpL9YdTx.js","assets/ContactSection-BhU17UQf.js","assets/mail-BJoswsJX.js","assets/Footer-CcTzyMAZ.js","assets/ArticlePage-BGkYgJdO.js"])))=>i.map(i=>d[i]);
var ia=Object.defineProperty;var ps=t=>{throw TypeError(t)};var la=(t,e,n)=>e in t?ia(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ge=(t,e,n)=>la(t,typeof e!="symbol"?e+"":e,n),Rn=(t,e,n)=>e.has(t)||ps("Cannot "+n);var u=(t,e,n)=>(Rn(t,e,"read from private field"),n?n.call(t):e.get(t)),O=(t,e,n)=>e.has(t)?ps("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),_=(t,e,n,s)=>(Rn(t,e,"write to private field"),s?s.call(t,n):e.set(t,n),n),q=(t,e,n)=>(Rn(t,e,"access private method"),n);var dn=(t,e,n,s)=>({set _(r){_(t,e,r,n)},get _(){return u(t,e,s)}});import{c as Xs,j as l,m as ca}from"./ui-vendor-5oxkQ2Jf.js";import{a as ua,r as w,R as k,v as da,g as ts,u as Zs,c as er,L as ha,B as pa,d as ma,e as En,N as fa}from"./react-vendor-GBp8saLZ.js";import{V as tr,R as nr,A as sr,C as rr,T as ar,D as or,P as ga,a as ir,b as ba,S as ya,O as lr,c as cr,d as wa,e as ur,f as dr,g as va,h as xa,i as hr,j as ka,k as Ta,l as pr,m as Ra}from"./radix-DOafHixa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var mr,ms=ua;mr=ms.createRoot,ms.hydrateRoot;const Ea="modulepreload",Sa=function(t){return"/"+t},fs={},Et=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),o=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=Promise.allSettled(n.map(h=>{if(h=Sa(h),h in fs)return;fs[h]=!0;const m=h.endsWith(".css"),b=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${b}`))return;const y=document.createElement("link");if(y.rel=m?"stylesheet":Ea,m||(y.as="script"),y.crossOrigin="",y.href=h,o&&y.setAttribute("nonce",o),document.head.appendChild(y),m)return new Promise((v,d)=>{y.addEventListener("load",v),y.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(c){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=c,window.dispatchEvent(o),!o.defaultPrevented)throw c}return r.then(c=>{for(const o of c||[])o.status==="rejected"&&a(o.reason);return e().catch(a)})},_a=1,$a=1e6;let Sn=0;function Pa(){return Sn=(Sn+1)%Number.MAX_SAFE_INTEGER,Sn.toString()}const _n=new Map,gs=t=>{if(_n.has(t))return;const e=setTimeout(()=>{_n.delete(t),Xt({type:"REMOVE_TOAST",toastId:t})},$a);_n.set(t,e)},Aa=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,_a)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?gs(n):t.toasts.forEach(s=>{gs(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===n||n===void 0?{...s,open:!1}:s)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},gn=[];let bn={toasts:[]};function Xt(t){bn=Aa(bn,t),gn.forEach(e=>{e(bn)})}function Ca({...t}){const e=Pa(),n=r=>Xt({type:"UPDATE_TOAST",toast:{...r,id:e}}),s=()=>Xt({type:"DISMISS_TOAST",toastId:e});return Xt({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||s()}}}),{id:e,dismiss:s,update:n}}function Oa(){const[t,e]=w.useState(bn);return w.useEffect(()=>(gn.push(e),()=>{const n=gn.indexOf(e);n>-1&&gn.splice(n,1)}),[t]),{...t,toast:Ca,dismiss:n=>Xt({type:"DISMISS_TOAST",toastId:n})}}const bs=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,ys=Xs,fr=(t,e)=>n=>{var s;if((e==null?void 0:e.variants)==null)return ys(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:a}=e,c=Object.keys(r).map(m=>{const b=n==null?void 0:n[m],y=a==null?void 0:a[m];if(b===null)return null;const v=bs(b)||bs(y);return r[m][v]}),o=n&&Object.entries(n).reduce((m,b)=>{let[y,v]=b;return v===void 0||(m[y]=v),m},{}),h=e==null||(s=e.compoundVariants)===null||s===void 0?void 0:s.reduce((m,b)=>{let{class:y,className:v,...d}=b;return Object.entries(d).every(S=>{let[f,g]=S;return Array.isArray(g)?g.includes({...a,...o}[f]):{...a,...o}[f]===g})?[...m,y,v]:m},[]);return ys(t,c,h,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gr=(...t)=>t.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ia={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=w.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:r="",children:a,iconNode:c,...o},h)=>w.createElement("svg",{ref:h,...Ia,width:e,height:e,stroke:t,strokeWidth:s?Number(n)*24/Number(e):n,className:gr("lucide",r),...o},[...c.map(([m,b])=>w.createElement(m,b)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=(t,e)=>{const n=w.forwardRef(({className:s,...r},a)=>w.createElement(ja,{ref:a,iconNode:e,className:gr(`lucide-${Na(t)}`,s),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=De("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=De("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=De("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=De("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=De("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=De("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=De("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=De("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=De("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=De("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=De("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ss="-",Ba=t=>{const e=qa(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=t;return{getClassGroupId:c=>{const o=c.split(ss);return o[0]===""&&o.length!==1&&o.shift(),xr(o,e)||Ga(c)},getConflictingClassGroupIds:(c,o)=>{const h=n[c]||[];return o&&s[c]?[...h,...s[c]]:h}}},xr=(t,e)=>{var c;if(t.length===0)return e.classGroupId;const n=t[0],s=e.nextPart.get(n),r=s?xr(t.slice(1),s):void 0;if(r)return r;if(e.validators.length===0)return;const a=t.join(ss);return(c=e.validators.find(({validator:o})=>o(a)))==null?void 0:c.classGroupId},ws=/^\[(.+)\]$/,Ga=t=>{if(ws.test(t)){const e=ws.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},qa=t=>{const{theme:e,prefix:n}=t,s={nextPart:new Map,validators:[]};return Ja(Object.entries(t.classGroups),n).forEach(([a,c])=>{jn(c,s,a,e)}),s},jn=(t,e,n,s)=>{t.forEach(r=>{if(typeof r=="string"){const a=r===""?e:vs(e,r);a.classGroupId=n;return}if(typeof r=="function"){if(za(r)){jn(r(s),e,n,s);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([a,c])=>{jn(c,vs(e,a),n,s)})})},vs=(t,e)=>{let n=t;return e.split(ss).forEach(s=>{n.nextPart.has(s)||n.nextPart.set(s,{nextPart:new Map,validators:[]}),n=n.nextPart.get(s)}),n},za=t=>t.isThemeGetter,Ja=(t,e)=>e?t.map(([n,s])=>{const r=s.map(a=>typeof a=="string"?e+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([c,o])=>[e+c,o])):a);return[n,r]}):t,Wa=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,s=new Map;const r=(a,c)=>{n.set(a,c),e++,e>t&&(e=0,s=n,n=new Map)};return{get(a){let c=n.get(a);if(c!==void 0)return c;if((c=s.get(a))!==void 0)return r(a,c),c},set(a,c){n.has(a)?n.set(a,c):r(a,c)}}},kr="!",Ka=t=>{const{separator:e,experimentalParseClassName:n}=t,s=e.length===1,r=e[0],a=e.length,c=o=>{const h=[];let m=0,b=0,y;for(let g=0;g<o.length;g++){let $=o[g];if(m===0){if($===r&&(s||o.slice(g,g+a)===e)){h.push(o.slice(b,g)),b=g+a;continue}if($==="/"){y=g;continue}}$==="["?m++:$==="]"&&m--}const v=h.length===0?o:o.substring(b),d=v.startsWith(kr),S=d?v.substring(1):v,f=y&&y>b?y-b:void 0;return{modifiers:h,hasImportantModifier:d,baseClassName:S,maybePostfixModifierPosition:f}};return n?o=>n({className:o,parseClassName:c}):c},Va=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(s=>{s[0]==="["?(e.push(...n.sort(),s),n=[]):n.push(s)}),e.push(...n.sort()),e},Ya=t=>({cache:Wa(t.cacheSize),parseClassName:Ka(t),...Ba(t)}),Qa=/\s+/,Xa=(t,e)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:r}=e,a=[],c=t.trim().split(Qa);let o="";for(let h=c.length-1;h>=0;h-=1){const m=c[h],{modifiers:b,hasImportantModifier:y,baseClassName:v,maybePostfixModifierPosition:d}=n(m);let S=!!d,f=s(S?v.substring(0,d):v);if(!f){if(!S){o=m+(o.length>0?" "+o:o);continue}if(f=s(v),!f){o=m+(o.length>0?" "+o:o);continue}S=!1}const g=Va(b).join(":"),$=y?g+kr:g,N=$+f;if(a.includes(N))continue;a.push(N);const A=r(f,S);for(let H=0;H<A.length;++H){const W=A[H];a.push($+W)}o=m+(o.length>0?" "+o:o)}return o};function Za(){let t=0,e,n,s="";for(;t<arguments.length;)(e=arguments[t++])&&(n=Tr(e))&&(s&&(s+=" "),s+=n);return s}const Tr=t=>{if(typeof t=="string")return t;let e,n="";for(let s=0;s<t.length;s++)t[s]&&(e=Tr(t[s]))&&(n&&(n+=" "),n+=e);return n};function eo(t,...e){let n,s,r,a=c;function c(h){const m=e.reduce((b,y)=>y(b),t());return n=Ya(m),s=n.cache.get,r=n.cache.set,a=o,o(h)}function o(h){const m=s(h);if(m)return m;const b=Xa(h,n);return r(h,b),b}return function(){return a(Za.apply(null,arguments))}}const te=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},Rr=/^\[(?:([a-z-]+):)?(.+)\]$/i,to=/^\d+\/\d+$/,no=new Set(["px","full","screen"]),so=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ro=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ao=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,oo=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,io=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,qe=t=>Pt(t)||no.has(t)||to.test(t),Xe=t=>qt(t,"length",go),Pt=t=>!!t&&!Number.isNaN(Number(t)),$n=t=>qt(t,"number",Pt),Wt=t=>!!t&&Number.isInteger(Number(t)),lo=t=>t.endsWith("%")&&Pt(t.slice(0,-1)),U=t=>Rr.test(t),Ze=t=>so.test(t),co=new Set(["length","size","percentage"]),uo=t=>qt(t,co,Er),ho=t=>qt(t,"position",Er),po=new Set(["image","url"]),mo=t=>qt(t,po,yo),fo=t=>qt(t,"",bo),Kt=()=>!0,qt=(t,e,n)=>{const s=Rr.exec(t);return s?s[1]?typeof e=="string"?s[1]===e:e.has(s[1]):n(s[2]):!1},go=t=>ro.test(t)&&!ao.test(t),Er=()=>!1,bo=t=>oo.test(t),yo=t=>io.test(t),wo=()=>{const t=te("colors"),e=te("spacing"),n=te("blur"),s=te("brightness"),r=te("borderColor"),a=te("borderRadius"),c=te("borderSpacing"),o=te("borderWidth"),h=te("contrast"),m=te("grayscale"),b=te("hueRotate"),y=te("invert"),v=te("gap"),d=te("gradientColorStops"),S=te("gradientColorStopPositions"),f=te("inset"),g=te("margin"),$=te("opacity"),N=te("padding"),A=te("saturate"),H=te("scale"),W=te("sepia"),K=te("skew"),ce=te("space"),Y=te("translate"),F=()=>["auto","contain","none"],J=()=>["auto","hidden","clip","visible","scroll"],oe=()=>["auto",U,e],I=()=>[U,e],pe=()=>["",qe,Xe],D=()=>["auto",Pt,U],ne=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],re=()=>["solid","dashed","dotted","double","none"],ue=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ge=()=>["start","end","center","between","around","evenly","stretch"],C=()=>["","0",U],p=()=>["auto","avoid","all","avoid-page","page","left","right","column"],i=()=>[Pt,U];return{cacheSize:500,separator:":",theme:{colors:[Kt],spacing:[qe,Xe],blur:["none","",Ze,U],brightness:i(),borderColor:[t],borderRadius:["none","","full",Ze,U],borderSpacing:I(),borderWidth:pe(),contrast:i(),grayscale:C(),hueRotate:i(),invert:C(),gap:I(),gradientColorStops:[t],gradientColorStopPositions:[lo,Xe],inset:oe(),margin:oe(),opacity:i(),padding:I(),saturate:i(),scale:i(),sepia:C(),skew:i(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",U]}],container:["container"],columns:[{columns:[Ze]}],"break-after":[{"break-after":p()}],"break-before":[{"break-before":p()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ne(),U]}],overflow:[{overflow:J()}],"overflow-x":[{"overflow-x":J()}],"overflow-y":[{"overflow-y":J()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[f]}],"inset-x":[{"inset-x":[f]}],"inset-y":[{"inset-y":[f]}],start:[{start:[f]}],end:[{end:[f]}],top:[{top:[f]}],right:[{right:[f]}],bottom:[{bottom:[f]}],left:[{left:[f]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Wt,U]}],basis:[{basis:oe()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",U]}],grow:[{grow:C()}],shrink:[{shrink:C()}],order:[{order:["first","last","none",Wt,U]}],"grid-cols":[{"grid-cols":[Kt]}],"col-start-end":[{col:["auto",{span:["full",Wt,U]},U]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[Kt]}],"row-start-end":[{row:["auto",{span:[Wt,U]},U]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",U]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",U]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal",...ge()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...ge(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...ge(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[N]}],px:[{px:[N]}],py:[{py:[N]}],ps:[{ps:[N]}],pe:[{pe:[N]}],pt:[{pt:[N]}],pr:[{pr:[N]}],pb:[{pb:[N]}],pl:[{pl:[N]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[ce]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ce]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",U,e]}],"min-w":[{"min-w":[U,e,"min","max","fit"]}],"max-w":[{"max-w":[U,e,"none","full","min","max","fit","prose",{screen:[Ze]},Ze]}],h:[{h:[U,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[U,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[U,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[U,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Ze,Xe]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",$n]}],"font-family":[{font:[Kt]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",U]}],"line-clamp":[{"line-clamp":["none",Pt,$n]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",qe,U]}],"list-image":[{"list-image":["none",U]}],"list-style-type":[{list:["none","disc","decimal",U]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[$]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[$]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...re(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",qe,Xe]}],"underline-offset":[{"underline-offset":["auto",qe,U]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",U]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",U]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[$]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ne(),ho]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",uo]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},mo]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[d]}],"gradient-via":[{via:[d]}],"gradient-to":[{to:[d]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[o]}],"border-w-x":[{"border-x":[o]}],"border-w-y":[{"border-y":[o]}],"border-w-s":[{"border-s":[o]}],"border-w-e":[{"border-e":[o]}],"border-w-t":[{"border-t":[o]}],"border-w-r":[{"border-r":[o]}],"border-w-b":[{"border-b":[o]}],"border-w-l":[{"border-l":[o]}],"border-opacity":[{"border-opacity":[$]}],"border-style":[{border:[...re(),"hidden"]}],"divide-x":[{"divide-x":[o]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[o]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[$]}],"divide-style":[{divide:re()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...re()]}],"outline-offset":[{"outline-offset":[qe,U]}],"outline-w":[{outline:[qe,Xe]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:pe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[$]}],"ring-offset-w":[{"ring-offset":[qe,Xe]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Ze,fo]}],"shadow-color":[{shadow:[Kt]}],opacity:[{opacity:[$]}],"mix-blend":[{"mix-blend":[...ue(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ue()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[s]}],contrast:[{contrast:[h]}],"drop-shadow":[{"drop-shadow":["","none",Ze,U]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[y]}],saturate:[{saturate:[A]}],sepia:[{sepia:[W]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[h]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[$]}],"backdrop-saturate":[{"backdrop-saturate":[A]}],"backdrop-sepia":[{"backdrop-sepia":[W]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[c]}],"border-spacing-x":[{"border-spacing-x":[c]}],"border-spacing-y":[{"border-spacing-y":[c]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",U]}],duration:[{duration:i()}],ease:[{ease:["linear","in","out","in-out",U]}],delay:[{delay:i()}],animate:[{animate:["none","spin","ping","pulse","bounce",U]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[H]}],"scale-x":[{"scale-x":[H]}],"scale-y":[{"scale-y":[H]}],rotate:[{rotate:[Wt,U]}],"translate-x":[{"translate-x":[Y]}],"translate-y":[{"translate-y":[Y]}],"skew-x":[{"skew-x":[K]}],"skew-y":[{"skew-y":[K]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",U]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",U]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",U]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[qe,Xe,$n]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},vo=eo(wo);function de(...t){return vo(Xs(t))}const xo=ga,Sr=w.forwardRef(({className:t,...e},n)=>l.jsx(tr,{ref:n,className:de("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));Sr.displayName=tr.displayName;const ko=fr("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),_r=w.forwardRef(({className:t,variant:e,...n},s)=>l.jsx(nr,{ref:s,className:de(ko({variant:e}),t),...n}));_r.displayName=nr.displayName;const To=w.forwardRef(({className:t,...e},n)=>l.jsx(sr,{ref:n,className:de("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",t),...e}));To.displayName=sr.displayName;const $r=w.forwardRef(({className:t,...e},n)=>l.jsx(rr,{ref:n,className:de("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:l.jsx(vr,{className:"h-4 w-4"})}));$r.displayName=rr.displayName;const Pr=w.forwardRef(({className:t,...e},n)=>l.jsx(ar,{ref:n,className:de("text-sm font-semibold",t),...e}));Pr.displayName=ar.displayName;const Ar=w.forwardRef(({className:t,...e},n)=>l.jsx(or,{ref:n,className:de("text-sm opacity-90",t),...e}));Ar.displayName=or.displayName;function Ro(){const{toasts:t}=Oa();return l.jsxs(xo,{children:[t.map(function({id:e,title:n,description:s,action:r,...a}){return l.jsxs(_r,{...a,children:[l.jsxs("div",{className:"grid gap-1",children:[n&&l.jsx(Pr,{children:n}),s&&l.jsx(Ar,{children:s})]}),r,l.jsx($r,{})]},e)}),l.jsx(Sr,{})]})}var xs=["light","dark"],Eo="(prefers-color-scheme: dark)",So=w.createContext(void 0),_o={setTheme:t=>{},themes:[]},$o=()=>{var t;return(t=w.useContext(So))!=null?t:_o};w.memo(({forcedTheme:t,storageKey:e,attribute:n,enableSystem:s,enableColorScheme:r,defaultTheme:a,value:c,attrs:o,nonce:h})=>{let m=a==="system",b=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${o.map(S=>`'${S}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,y=r?xs.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(S,f=!1,g=!0)=>{let $=c?c[S]:S,N=f?S+"|| ''":`'${$}'`,A="";return r&&g&&!f&&xs.includes(S)&&(A+=`d.style.colorScheme = '${S}';`),n==="class"?f||$?A+=`c.add(${N})`:A+="null":$&&(A+=`d[s](n,${N})`),A},d=t?`!function(){${b}${v(t)}}()`:s?`!function(){try{${b}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${m})){var t='${Eo}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}${m?"":"else{"+v(a,!1,!1)+"}"}${y}}catch(e){}}()`:`!function(){try{${b}var e=localStorage.getItem('${e}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}else{${v(a,!1,!1)};}${y}}catch(t){}}();`;return w.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:d}})});var Po=t=>{switch(t){case"success":return Oo;case"info":return Io;case"warning":return No;case"error":return jo;default:return null}},Ao=Array(12).fill(0),Co=({visible:t,className:e})=>k.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":t},k.createElement("div",{className:"sonner-spinner"},Ao.map((n,s)=>k.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${s}`})))),Oo=k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},k.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),No=k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},k.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Io=k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},k.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),jo=k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},k.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Mo=k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},k.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),k.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Do=()=>{let[t,e]=k.useState(document.hidden);return k.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},Mn=1,Lo=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:n,...s}=t,r=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:Mn++,a=this.toasts.find(o=>o.id===r),c=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(r)&&this.dismissedToasts.delete(r),a?this.toasts=this.toasts.map(o=>o.id===r?(this.publish({...o,...t,id:r,title:n}),{...o,...t,id:r,dismissible:c,title:n}):o):this.addToast({title:n,...s,dismissible:c,id:r}),r},this.dismiss=t=>(this.dismissedToasts.add(t),t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let s=t instanceof Promise?t:t(),r=n!==void 0,a,c=s.then(async h=>{if(a=["resolve",h],k.isValidElement(h))r=!1,this.create({id:n,type:"default",message:h});else if(Fo(h)&&!h.ok){r=!1;let m=typeof e.error=="function"?await e.error(`HTTP error! status: ${h.status}`):e.error,b=typeof e.description=="function"?await e.description(`HTTP error! status: ${h.status}`):e.description;this.create({id:n,type:"error",message:m,description:b})}else if(e.success!==void 0){r=!1;let m=typeof e.success=="function"?await e.success(h):e.success,b=typeof e.description=="function"?await e.description(h):e.description;this.create({id:n,type:"success",message:m,description:b})}}).catch(async h=>{if(a=["reject",h],e.error!==void 0){r=!1;let m=typeof e.error=="function"?await e.error(h):e.error,b=typeof e.description=="function"?await e.description(h):e.description;this.create({id:n,type:"error",message:m,description:b})}}).finally(()=>{var h;r&&(this.dismiss(n),n=void 0),(h=e.finally)==null||h.call(e)}),o=()=>new Promise((h,m)=>c.then(()=>a[0]==="reject"?m(a[1]):h(a[1])).catch(m));return typeof n!="string"&&typeof n!="number"?{unwrap:o}:Object.assign(n,{unwrap:o})},this.custom=(t,e)=>{let n=(e==null?void 0:e.id)||Mn++;return this.create({jsx:t(n),id:n,...e}),n},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},ke=new Lo,Uo=(t,e)=>{let n=(e==null?void 0:e.id)||Mn++;return ke.addToast({title:t,...e,id:n}),n},Fo=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",Ho=Uo,Bo=()=>ke.toasts,Go=()=>ke.getActiveToasts(),Xl=Object.assign(Ho,{success:ke.success,info:ke.info,warning:ke.warning,error:ke.error,custom:ke.custom,message:ke.message,promise:ke.promise,dismiss:ke.dismiss,loading:ke.loading},{getHistory:Bo,getToasts:Go});function qo(t,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",e==="top"&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}qo(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function hn(t){return t.label!==void 0}var zo=3,Jo="32px",Wo="16px",ks=4e3,Ko=356,Vo=14,Yo=20,Qo=200;function Ne(...t){return t.filter(Boolean).join(" ")}function Xo(t){let[e,n]=t.split("-"),s=[];return e&&s.push(e),n&&s.push(n),s}var Zo=t=>{var e,n,s,r,a,c,o,h,m,b,y;let{invert:v,toast:d,unstyled:S,interacting:f,setHeights:g,visibleToasts:$,heights:N,index:A,toasts:H,expanded:W,removeToast:K,defaultRichColors:ce,closeButton:Y,style:F,cancelButtonStyle:J,actionButtonStyle:oe,className:I="",descriptionClassName:pe="",duration:D,position:ne,gap:re,loadingIcon:ue,expandByDefault:ge,classNames:C,icons:p,closeButtonAriaLabel:i="Close toast",pauseWhenPageIsHidden:x}=t,[T,E]=k.useState(null),[P,j]=k.useState(null),[R,M]=k.useState(!1),[B,Z]=k.useState(!1),[V,ee]=k.useState(!1),[ie,G]=k.useState(!1),[me,ve]=k.useState(!1),[Re,Ee]=k.useState(0),[He,Se]=k.useState(0),dt=k.useRef(d.duration||D||ks),on=k.useRef(null),Be=k.useRef(null),ln=A===0,xn=A+1<=$,be=d.type,Ke=d.dismissible!==!1,kn=d.className||"",cn=d.descriptionClassName||"",ht=k.useMemo(()=>N.findIndex(L=>L.toastId===d.id)||0,[N,d.id]),zt=k.useMemo(()=>{var L;return(L=d.closeButton)!=null?L:Y},[d.closeButton,Y]),un=k.useMemo(()=>d.duration||D||ks,[d.duration,D]),Jt=k.useRef(0),St=k.useRef(0),us=k.useRef(0),_t=k.useRef(null),[sa,ra]=ne.split("-"),ds=k.useMemo(()=>N.reduce((L,X,se)=>se>=ht?L:L+X.height,0),[N,ht]),hs=Do(),aa=d.invert||v,Tn=be==="loading";St.current=k.useMemo(()=>ht*re+ds,[ht,ds]),k.useEffect(()=>{dt.current=un},[un]),k.useEffect(()=>{M(!0)},[]),k.useEffect(()=>{let L=Be.current;if(L){let X=L.getBoundingClientRect().height;return Se(X),g(se=>[{toastId:d.id,height:X,position:d.position},...se]),()=>g(se=>se.filter(Ae=>Ae.toastId!==d.id))}},[g,d.id]),k.useLayoutEffect(()=>{if(!R)return;let L=Be.current,X=L.style.height;L.style.height="auto";let se=L.getBoundingClientRect().height;L.style.height=X,Se(se),g(Ae=>Ae.find(Ce=>Ce.toastId===d.id)?Ae.map(Ce=>Ce.toastId===d.id?{...Ce,height:se}:Ce):[{toastId:d.id,height:se,position:d.position},...Ae])},[R,d.title,d.description,g,d.id]);let Ve=k.useCallback(()=>{Z(!0),Ee(St.current),g(L=>L.filter(X=>X.toastId!==d.id)),setTimeout(()=>{K(d)},Qo)},[d,K,g,St]);k.useEffect(()=>{if(d.promise&&be==="loading"||d.duration===1/0||d.type==="loading")return;let L;return W||f||x&&hs?(()=>{if(us.current<Jt.current){let X=new Date().getTime()-Jt.current;dt.current=dt.current-X}us.current=new Date().getTime()})():dt.current!==1/0&&(Jt.current=new Date().getTime(),L=setTimeout(()=>{var X;(X=d.onAutoClose)==null||X.call(d,d),Ve()},dt.current)),()=>clearTimeout(L)},[W,f,d,be,x,hs,Ve]),k.useEffect(()=>{d.delete&&Ve()},[Ve,d.delete]);function oa(){var L,X,se;return p!=null&&p.loading?k.createElement("div",{className:Ne(C==null?void 0:C.loader,(L=d==null?void 0:d.classNames)==null?void 0:L.loader,"sonner-loader"),"data-visible":be==="loading"},p.loading):ue?k.createElement("div",{className:Ne(C==null?void 0:C.loader,(X=d==null?void 0:d.classNames)==null?void 0:X.loader,"sonner-loader"),"data-visible":be==="loading"},ue):k.createElement(Co,{className:Ne(C==null?void 0:C.loader,(se=d==null?void 0:d.classNames)==null?void 0:se.loader),visible:be==="loading"})}return k.createElement("li",{tabIndex:0,ref:Be,className:Ne(I,kn,C==null?void 0:C.toast,(e=d==null?void 0:d.classNames)==null?void 0:e.toast,C==null?void 0:C.default,C==null?void 0:C[be],(n=d==null?void 0:d.classNames)==null?void 0:n[be]),"data-sonner-toast":"","data-rich-colors":(s=d.richColors)!=null?s:ce,"data-styled":!(d.jsx||d.unstyled||S),"data-mounted":R,"data-promise":!!d.promise,"data-swiped":me,"data-removed":B,"data-visible":xn,"data-y-position":sa,"data-x-position":ra,"data-index":A,"data-front":ln,"data-swiping":V,"data-dismissible":Ke,"data-type":be,"data-invert":aa,"data-swipe-out":ie,"data-swipe-direction":P,"data-expanded":!!(W||ge&&R),style:{"--index":A,"--toasts-before":A,"--z-index":H.length-A,"--offset":`${B?Re:St.current}px`,"--initial-height":ge?"auto":`${He}px`,...F,...d.style},onDragEnd:()=>{ee(!1),E(null),_t.current=null},onPointerDown:L=>{Tn||!Ke||(on.current=new Date,Ee(St.current),L.target.setPointerCapture(L.pointerId),L.target.tagName!=="BUTTON"&&(ee(!0),_t.current={x:L.clientX,y:L.clientY}))},onPointerUp:()=>{var L,X,se,Ae;if(ie||!Ke)return;_t.current=null;let Ce=Number(((L=Be.current)==null?void 0:L.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Ye=Number(((X=Be.current)==null?void 0:X.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),pt=new Date().getTime()-((se=on.current)==null?void 0:se.getTime()),Oe=T==="x"?Ce:Ye,Qe=Math.abs(Oe)/pt;if(Math.abs(Oe)>=Yo||Qe>.11){Ee(St.current),(Ae=d.onDismiss)==null||Ae.call(d,d),j(T==="x"?Ce>0?"right":"left":Ye>0?"down":"up"),Ve(),G(!0),ve(!1);return}ee(!1),E(null)},onPointerMove:L=>{var X,se,Ae,Ce;if(!_t.current||!Ke||((X=window.getSelection())==null?void 0:X.toString().length)>0)return;let Ye=L.clientY-_t.current.y,pt=L.clientX-_t.current.x,Oe=(se=t.swipeDirections)!=null?se:Xo(ne);!T&&(Math.abs(pt)>1||Math.abs(Ye)>1)&&E(Math.abs(pt)>Math.abs(Ye)?"x":"y");let Qe={x:0,y:0};T==="y"?(Oe.includes("top")||Oe.includes("bottom"))&&(Oe.includes("top")&&Ye<0||Oe.includes("bottom")&&Ye>0)&&(Qe.y=Ye):T==="x"&&(Oe.includes("left")||Oe.includes("right"))&&(Oe.includes("left")&&pt<0||Oe.includes("right")&&pt>0)&&(Qe.x=pt),(Math.abs(Qe.x)>0||Math.abs(Qe.y)>0)&&ve(!0),(Ae=Be.current)==null||Ae.style.setProperty("--swipe-amount-x",`${Qe.x}px`),(Ce=Be.current)==null||Ce.style.setProperty("--swipe-amount-y",`${Qe.y}px`)}},zt&&!d.jsx?k.createElement("button",{"aria-label":i,"data-disabled":Tn,"data-close-button":!0,onClick:Tn||!Ke?()=>{}:()=>{var L;Ve(),(L=d.onDismiss)==null||L.call(d,d)},className:Ne(C==null?void 0:C.closeButton,(r=d==null?void 0:d.classNames)==null?void 0:r.closeButton)},(a=p==null?void 0:p.close)!=null?a:Mo):null,d.jsx||w.isValidElement(d.title)?d.jsx?d.jsx:typeof d.title=="function"?d.title():d.title:k.createElement(k.Fragment,null,be||d.icon||d.promise?k.createElement("div",{"data-icon":"",className:Ne(C==null?void 0:C.icon,(c=d==null?void 0:d.classNames)==null?void 0:c.icon)},d.promise||d.type==="loading"&&!d.icon?d.icon||oa():null,d.type!=="loading"?d.icon||(p==null?void 0:p[be])||Po(be):null):null,k.createElement("div",{"data-content":"",className:Ne(C==null?void 0:C.content,(o=d==null?void 0:d.classNames)==null?void 0:o.content)},k.createElement("div",{"data-title":"",className:Ne(C==null?void 0:C.title,(h=d==null?void 0:d.classNames)==null?void 0:h.title)},typeof d.title=="function"?d.title():d.title),d.description?k.createElement("div",{"data-description":"",className:Ne(pe,cn,C==null?void 0:C.description,(m=d==null?void 0:d.classNames)==null?void 0:m.description)},typeof d.description=="function"?d.description():d.description):null),w.isValidElement(d.cancel)?d.cancel:d.cancel&&hn(d.cancel)?k.createElement("button",{"data-button":!0,"data-cancel":!0,style:d.cancelButtonStyle||J,onClick:L=>{var X,se;hn(d.cancel)&&Ke&&((se=(X=d.cancel).onClick)==null||se.call(X,L),Ve())},className:Ne(C==null?void 0:C.cancelButton,(b=d==null?void 0:d.classNames)==null?void 0:b.cancelButton)},d.cancel.label):null,w.isValidElement(d.action)?d.action:d.action&&hn(d.action)?k.createElement("button",{"data-button":!0,"data-action":!0,style:d.actionButtonStyle||oe,onClick:L=>{var X,se;hn(d.action)&&((se=(X=d.action).onClick)==null||se.call(X,L),!L.defaultPrevented&&Ve())},className:Ne(C==null?void 0:C.actionButton,(y=d==null?void 0:d.classNames)==null?void 0:y.actionButton)},d.action.label):null))};function Ts(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}function ei(t,e){let n={};return[t,e].forEach((s,r)=>{let a=r===1,c=a?"--mobile-offset":"--offset",o=a?Wo:Jo;function h(m){["top","right","bottom","left"].forEach(b=>{n[`${c}-${b}`]=typeof m=="number"?`${m}px`:m})}typeof s=="number"||typeof s=="string"?h(s):typeof s=="object"?["top","right","bottom","left"].forEach(m=>{s[m]===void 0?n[`${c}-${m}`]=o:n[`${c}-${m}`]=typeof s[m]=="number"?`${s[m]}px`:s[m]}):h(o)}),n}var ti=w.forwardRef(function(t,e){let{invert:n,position:s="bottom-right",hotkey:r=["altKey","KeyT"],expand:a,closeButton:c,className:o,offset:h,mobileOffset:m,theme:b="light",richColors:y,duration:v,style:d,visibleToasts:S=zo,toastOptions:f,dir:g=Ts(),gap:$=Vo,loadingIcon:N,icons:A,containerAriaLabel:H="Notifications",pauseWhenPageIsHidden:W}=t,[K,ce]=k.useState([]),Y=k.useMemo(()=>Array.from(new Set([s].concat(K.filter(x=>x.position).map(x=>x.position)))),[K,s]),[F,J]=k.useState([]),[oe,I]=k.useState(!1),[pe,D]=k.useState(!1),[ne,re]=k.useState(b!=="system"?b:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),ue=k.useRef(null),ge=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),C=k.useRef(null),p=k.useRef(!1),i=k.useCallback(x=>{ce(T=>{var E;return(E=T.find(P=>P.id===x.id))!=null&&E.delete||ke.dismiss(x.id),T.filter(({id:P})=>P!==x.id)})},[]);return k.useEffect(()=>ke.subscribe(x=>{if(x.dismiss){ce(T=>T.map(E=>E.id===x.id?{...E,delete:!0}:E));return}setTimeout(()=>{da.flushSync(()=>{ce(T=>{let E=T.findIndex(P=>P.id===x.id);return E!==-1?[...T.slice(0,E),{...T[E],...x},...T.slice(E+1)]:[x,...T]})})})}),[]),k.useEffect(()=>{if(b!=="system"){re(b);return}if(b==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?re("dark"):re("light")),typeof window>"u")return;let x=window.matchMedia("(prefers-color-scheme: dark)");try{x.addEventListener("change",({matches:T})=>{re(T?"dark":"light")})}catch{x.addListener(({matches:E})=>{try{re(E?"dark":"light")}catch(P){console.error(P)}})}},[b]),k.useEffect(()=>{K.length<=1&&I(!1)},[K]),k.useEffect(()=>{let x=T=>{var E,P;r.every(j=>T[j]||T.code===j)&&(I(!0),(E=ue.current)==null||E.focus()),T.code==="Escape"&&(document.activeElement===ue.current||(P=ue.current)!=null&&P.contains(document.activeElement))&&I(!1)};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[r]),k.useEffect(()=>{if(ue.current)return()=>{C.current&&(C.current.focus({preventScroll:!0}),C.current=null,p.current=!1)}},[ue.current]),k.createElement("section",{ref:e,"aria-label":`${H} ${ge}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},Y.map((x,T)=>{var E;let[P,j]=x.split("-");return K.length?k.createElement("ol",{key:x,dir:g==="auto"?Ts():g,tabIndex:-1,ref:ue,className:o,"data-sonner-toaster":!0,"data-theme":ne,"data-y-position":P,"data-lifted":oe&&K.length>1&&!a,"data-x-position":j,style:{"--front-toast-height":`${((E=F[0])==null?void 0:E.height)||0}px`,"--width":`${Ko}px`,"--gap":`${$}px`,...d,...ei(h,m)},onBlur:R=>{p.current&&!R.currentTarget.contains(R.relatedTarget)&&(p.current=!1,C.current&&(C.current.focus({preventScroll:!0}),C.current=null))},onFocus:R=>{R.target instanceof HTMLElement&&R.target.dataset.dismissible==="false"||p.current||(p.current=!0,C.current=R.relatedTarget)},onMouseEnter:()=>I(!0),onMouseMove:()=>I(!0),onMouseLeave:()=>{pe||I(!1)},onDragEnd:()=>I(!1),onPointerDown:R=>{R.target instanceof HTMLElement&&R.target.dataset.dismissible==="false"||D(!0)},onPointerUp:()=>D(!1)},K.filter(R=>!R.position&&T===0||R.position===x).map((R,M)=>{var B,Z;return k.createElement(Zo,{key:R.id,icons:A,index:M,toast:R,defaultRichColors:y,duration:(B=f==null?void 0:f.duration)!=null?B:v,className:f==null?void 0:f.className,descriptionClassName:f==null?void 0:f.descriptionClassName,invert:n,visibleToasts:S,closeButton:(Z=f==null?void 0:f.closeButton)!=null?Z:c,interacting:pe,position:x,style:f==null?void 0:f.style,unstyled:f==null?void 0:f.unstyled,classNames:f==null?void 0:f.classNames,cancelButtonStyle:f==null?void 0:f.cancelButtonStyle,actionButtonStyle:f==null?void 0:f.actionButtonStyle,removeToast:i,toasts:K.filter(V=>V.position==R.position),heights:F.filter(V=>V.position==R.position),setHeights:J,expandByDefault:a,gap:$,loadingIcon:N,expanded:oe,pauseWhenPageIsHidden:W,swipeDirections:t.swipeDirections})})):null}))});const ni=({...t})=>{const{theme:e="system"}=$o();return l.jsx(ti,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},si=ba,ri=w.forwardRef(({className:t,sideOffset:e=4,...n},s)=>l.jsx(ir,{ref:s,sideOffset:e,className:de("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));ri.displayName=ir.displayName;var an=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Rt=typeof window>"u"||"Deno"in globalThis;function Te(){}function ai(t,e){return typeof t=="function"?t(e):t}function Dn(t){return typeof t=="number"&&t>=0&&t!==1/0}function Cr(t,e){return Math.max(t+(e||0)-Date.now(),0)}function ct(t,e){return typeof t=="function"?t(e):t}function Pe(t,e){return typeof t=="function"?t(e):t}function Rs(t,e){const{type:n="all",exact:s,fetchStatus:r,predicate:a,queryKey:c,stale:o}=t;if(c){if(s){if(e.queryHash!==rs(c,e.options))return!1}else if(!en(e.queryKey,c))return!1}if(n!=="all"){const h=e.isActive();if(n==="active"&&!h||n==="inactive"&&h)return!1}return!(typeof o=="boolean"&&e.isStale()!==o||r&&r!==e.state.fetchStatus||a&&!a(e))}function Es(t,e){const{exact:n,status:s,predicate:r,mutationKey:a}=t;if(a){if(!e.options.mutationKey)return!1;if(n){if(Zt(e.options.mutationKey)!==Zt(a))return!1}else if(!en(e.options.mutationKey,a))return!1}return!(s&&e.state.status!==s||r&&!r(e))}function rs(t,e){return((e==null?void 0:e.queryKeyHashFn)||Zt)(t)}function Zt(t){return JSON.stringify(t,(e,n)=>Un(n)?Object.keys(n).sort().reduce((s,r)=>(s[r]=n[r],s),{}):n)}function en(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>en(t[n],e[n])):!1}function Or(t,e){if(t===e)return t;const n=Ss(t)&&Ss(e);if(n||Un(t)&&Un(e)){const s=n?t:Object.keys(t),r=s.length,a=n?e:Object.keys(e),c=a.length,o=n?[]:{},h=new Set(s);let m=0;for(let b=0;b<c;b++){const y=n?b:a[b];(!n&&h.has(y)||n)&&t[y]===void 0&&e[y]===void 0?(o[y]=void 0,m++):(o[y]=Or(t[y],e[y]),o[y]===t[y]&&t[y]!==void 0&&m++)}return r===c&&m===r?t:o}return e}function Ln(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function Ss(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Un(t){if(!_s(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!_s(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function _s(t){return Object.prototype.toString.call(t)==="[object Object]"}function oi(t){return new Promise(e=>{setTimeout(e,t)})}function Fn(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Or(t,e):e}function ii(t,e,n=0){const s=[...t,e];return n&&s.length>n?s.slice(1):s}function li(t,e,n=0){const s=[e,...t];return n&&s.length>n?s.slice(0,-1):s}var as=Symbol();function Nr(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===as?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}function ci(t,e){return typeof t=="function"?t(...e):!!t}var mt,tt,Ot,Gs,ui=(Gs=class extends an{constructor(){super();O(this,mt);O(this,tt);O(this,Ot);_(this,Ot,e=>{if(!Rt&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){u(this,tt)||this.setEventListener(u(this,Ot))}onUnsubscribe(){var e;this.hasListeners()||((e=u(this,tt))==null||e.call(this),_(this,tt,void 0))}setEventListener(e){var n;_(this,Ot,e),(n=u(this,tt))==null||n.call(this),_(this,tt,e(s=>{typeof s=="boolean"?this.setFocused(s):this.onFocus()}))}setFocused(e){u(this,mt)!==e&&(_(this,mt,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof u(this,mt)=="boolean"?u(this,mt):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},mt=new WeakMap,tt=new WeakMap,Ot=new WeakMap,Gs),os=new ui,Nt,nt,It,qs,di=(qs=class extends an{constructor(){super();O(this,Nt,!0);O(this,nt);O(this,It);_(this,It,e=>{if(!Rt&&window.addEventListener){const n=()=>e(!0),s=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",s)}}})}onSubscribe(){u(this,nt)||this.setEventListener(u(this,It))}onUnsubscribe(){var e;this.hasListeners()||((e=u(this,nt))==null||e.call(this),_(this,nt,void 0))}setEventListener(e){var n;_(this,It,e),(n=u(this,nt))==null||n.call(this),_(this,nt,e(this.setOnline.bind(this)))}setOnline(e){u(this,Nt)!==e&&(_(this,Nt,e),this.listeners.forEach(s=>{s(e)}))}isOnline(){return u(this,Nt)}},Nt=new WeakMap,nt=new WeakMap,It=new WeakMap,qs),vn=new di;function Hn(){let t,e;const n=new Promise((r,a)=>{t=r,e=a});n.status="pending",n.catch(()=>{});function s(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{s({status:"fulfilled",value:r}),t(r)},n.reject=r=>{s({status:"rejected",reason:r}),e(r)},n}function hi(t){return Math.min(1e3*2**t,3e4)}function Ir(t){return(t??"online")==="online"?vn.isOnline():!0}var jr=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Pn(t){return t instanceof jr}function Mr(t){let e=!1,n=0,s=!1,r;const a=Hn(),c=f=>{var g;s||(v(new jr(f)),(g=t.abort)==null||g.call(t))},o=()=>{e=!0},h=()=>{e=!1},m=()=>os.isFocused()&&(t.networkMode==="always"||vn.isOnline())&&t.canRun(),b=()=>Ir(t.networkMode)&&t.canRun(),y=f=>{var g;s||(s=!0,(g=t.onSuccess)==null||g.call(t,f),r==null||r(),a.resolve(f))},v=f=>{var g;s||(s=!0,(g=t.onError)==null||g.call(t,f),r==null||r(),a.reject(f))},d=()=>new Promise(f=>{var g;r=$=>{(s||m())&&f($)},(g=t.onPause)==null||g.call(t)}).then(()=>{var f;r=void 0,s||(f=t.onContinue)==null||f.call(t)}),S=()=>{if(s)return;let f;const g=n===0?t.initialPromise:void 0;try{f=g??t.fn()}catch($){f=Promise.reject($)}Promise.resolve(f).then(y).catch($=>{var K;if(s)return;const N=t.retry??(Rt?0:3),A=t.retryDelay??hi,H=typeof A=="function"?A(n,$):A,W=N===!0||typeof N=="number"&&n<N||typeof N=="function"&&N(n,$);if(e||!W){v($);return}n++,(K=t.onFail)==null||K.call(t,n,$),oi(H).then(()=>m()?void 0:d()).then(()=>{e?v($):S()})})};return{promise:a,cancel:c,continue:()=>(r==null||r(),a),cancelRetry:o,continueRetry:h,canStart:b,start:()=>(b()?S():d().then(S),a)}}var pi=t=>setTimeout(t,0);function mi(){let t=[],e=0,n=o=>{o()},s=o=>{o()},r=pi;const a=o=>{e?t.push(o):r(()=>{n(o)})},c=()=>{const o=t;t=[],o.length&&r(()=>{s(()=>{o.forEach(h=>{n(h)})})})};return{batch:o=>{let h;e++;try{h=o()}finally{e--,e||c()}return h},batchCalls:o=>(...h)=>{a(()=>{o(...h)})},schedule:a,setNotifyFunction:o=>{n=o},setBatchNotifyFunction:o=>{s=o},setScheduler:o=>{r=o}}}var he=mi(),ft,zs,Dr=(zs=class{constructor(){O(this,ft)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Dn(this.gcTime)&&_(this,ft,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Rt?1/0:5*60*1e3))}clearGcTimeout(){u(this,ft)&&(clearTimeout(u(this,ft)),_(this,ft,void 0))}},ft=new WeakMap,zs),jt,gt,$e,bt,fe,tn,yt,Ie,ze,Js,fi=(Js=class extends Dr{constructor(e){super();O(this,Ie);O(this,jt);O(this,gt);O(this,$e);O(this,bt);O(this,fe);O(this,tn);O(this,yt);_(this,yt,!1),_(this,tn,e.defaultOptions),this.setOptions(e.options),this.observers=[],_(this,bt,e.client),_(this,$e,u(this,bt).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,_(this,jt,gi(this.options)),this.state=e.state??u(this,jt),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=u(this,fe))==null?void 0:e.promise}setOptions(e){this.options={...u(this,tn),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&u(this,$e).remove(this)}setData(e,n){const s=Fn(this.state.data,e,this.options);return q(this,Ie,ze).call(this,{data:s,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),s}setState(e,n){q(this,Ie,ze).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var s,r;const n=(s=u(this,fe))==null?void 0:s.promise;return(r=u(this,fe))==null||r.cancel(e),n?n.then(Te).catch(Te):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(u(this,jt))}isActive(){return this.observers.some(e=>Pe(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===as||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>ct(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!Cr(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(s=>s.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=u(this,fe))==null||n.continue()}onOnline(){var n;const e=this.observers.find(s=>s.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=u(this,fe))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),u(this,$e).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(u(this,fe)&&(u(this,yt)?u(this,fe).cancel({revert:!0}):u(this,fe).cancelRetry()),this.scheduleGc()),u(this,$e).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||q(this,Ie,ze).call(this,{type:"invalidate"})}fetch(e,n){var m,b,y;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(u(this,fe))return u(this,fe).continueRetry(),u(this,fe).promise}if(e&&this.setOptions(e),!this.options.queryFn){const v=this.observers.find(d=>d.options.queryFn);v&&this.setOptions(v.options)}const s=new AbortController,r=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(_(this,yt,!0),s.signal)})},a=()=>{const v=Nr(this.options,n),S=(()=>{const f={client:u(this,bt),queryKey:this.queryKey,meta:this.meta};return r(f),f})();return _(this,yt,!1),this.options.persister?this.options.persister(v,S,this):v(S)},o=(()=>{const v={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:u(this,bt),state:this.state,fetchFn:a};return r(v),v})();(m=this.options.behavior)==null||m.onFetch(o,this),_(this,gt,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((b=o.fetchOptions)==null?void 0:b.meta))&&q(this,Ie,ze).call(this,{type:"fetch",meta:(y=o.fetchOptions)==null?void 0:y.meta});const h=v=>{var d,S,f,g;Pn(v)&&v.silent||q(this,Ie,ze).call(this,{type:"error",error:v}),Pn(v)||((S=(d=u(this,$e).config).onError)==null||S.call(d,v,this),(g=(f=u(this,$e).config).onSettled)==null||g.call(f,this.state.data,v,this)),this.scheduleGc()};return _(this,fe,Mr({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:s.abort.bind(s),onSuccess:v=>{var d,S,f,g;if(v===void 0){h(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(v)}catch($){h($);return}(S=(d=u(this,$e).config).onSuccess)==null||S.call(d,v,this),(g=(f=u(this,$e).config).onSettled)==null||g.call(f,v,this.state.error,this),this.scheduleGc()},onError:h,onFail:(v,d)=>{q(this,Ie,ze).call(this,{type:"failed",failureCount:v,error:d})},onPause:()=>{q(this,Ie,ze).call(this,{type:"pause"})},onContinue:()=>{q(this,Ie,ze).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),u(this,fe).start()}},jt=new WeakMap,gt=new WeakMap,$e=new WeakMap,bt=new WeakMap,fe=new WeakMap,tn=new WeakMap,yt=new WeakMap,Ie=new WeakSet,ze=function(e){const n=s=>{switch(e.type){case"failed":return{...s,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...Lr(s.data,this.options),fetchMeta:e.meta??null};case"success":return _(this,gt,void 0),{...s,data:e.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return Pn(r)&&r.revert&&u(this,gt)?{...u(this,gt),fetchStatus:"idle"}:{...s,error:r,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...e.state}}};this.state=n(this.state),he.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),u(this,$e).notify({query:this,type:"updated",action:e})})},Js);function Lr(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Ir(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function gi(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,s=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Le,Ws,bi=(Ws=class extends an{constructor(e={}){super();O(this,Le);this.config=e,_(this,Le,new Map)}build(e,n,s){const r=n.queryKey,a=n.queryHash??rs(r,n);let c=this.get(a);return c||(c=new fi({client:e,queryKey:r,queryHash:a,options:e.defaultQueryOptions(n),state:s,defaultOptions:e.getQueryDefaults(r)}),this.add(c)),c}add(e){u(this,Le).has(e.queryHash)||(u(this,Le).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=u(this,Le).get(e.queryHash);n&&(e.destroy(),n===e&&u(this,Le).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){he.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return u(this,Le).get(e)}getAll(){return[...u(this,Le).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(s=>Rs(n,s))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(s=>Rs(e,s)):n}notify(e){he.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){he.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){he.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Le=new WeakMap,Ws),Ue,ye,wt,Fe,et,Ks,yi=(Ks=class extends Dr{constructor(e){super();O(this,Fe);O(this,Ue);O(this,ye);O(this,wt);this.mutationId=e.mutationId,_(this,ye,e.mutationCache),_(this,Ue,[]),this.state=e.state||wi(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){u(this,Ue).includes(e)||(u(this,Ue).push(e),this.clearGcTimeout(),u(this,ye).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){_(this,Ue,u(this,Ue).filter(n=>n!==e)),this.scheduleGc(),u(this,ye).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){u(this,Ue).length||(this.state.status==="pending"?this.scheduleGc():u(this,ye).remove(this))}continue(){var e;return((e=u(this,wt))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var a,c,o,h,m,b,y,v,d,S,f,g,$,N,A,H,W,K,ce,Y;const n=()=>{q(this,Fe,et).call(this,{type:"continue"})};_(this,wt,Mr({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(F,J)=>{q(this,Fe,et).call(this,{type:"failed",failureCount:F,error:J})},onPause:()=>{q(this,Fe,et).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>u(this,ye).canRun(this)}));const s=this.state.status==="pending",r=!u(this,wt).canStart();try{if(s)n();else{q(this,Fe,et).call(this,{type:"pending",variables:e,isPaused:r}),await((c=(a=u(this,ye).config).onMutate)==null?void 0:c.call(a,e,this));const J=await((h=(o=this.options).onMutate)==null?void 0:h.call(o,e));J!==this.state.context&&q(this,Fe,et).call(this,{type:"pending",context:J,variables:e,isPaused:r})}const F=await u(this,wt).start();return await((b=(m=u(this,ye).config).onSuccess)==null?void 0:b.call(m,F,e,this.state.context,this)),await((v=(y=this.options).onSuccess)==null?void 0:v.call(y,F,e,this.state.context)),await((S=(d=u(this,ye).config).onSettled)==null?void 0:S.call(d,F,null,this.state.variables,this.state.context,this)),await((g=(f=this.options).onSettled)==null?void 0:g.call(f,F,null,e,this.state.context)),q(this,Fe,et).call(this,{type:"success",data:F}),F}catch(F){try{throw await((N=($=u(this,ye).config).onError)==null?void 0:N.call($,F,e,this.state.context,this)),await((H=(A=this.options).onError)==null?void 0:H.call(A,F,e,this.state.context)),await((K=(W=u(this,ye).config).onSettled)==null?void 0:K.call(W,void 0,F,this.state.variables,this.state.context,this)),await((Y=(ce=this.options).onSettled)==null?void 0:Y.call(ce,void 0,F,e,this.state.context)),F}finally{q(this,Fe,et).call(this,{type:"error",error:F})}}finally{u(this,ye).runNext(this)}}},Ue=new WeakMap,ye=new WeakMap,wt=new WeakMap,Fe=new WeakSet,et=function(e){const n=s=>{switch(e.type){case"failed":return{...s,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...s,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:e.error,failureCount:s.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),he.batch(()=>{u(this,Ue).forEach(s=>{s.onMutationUpdate(e)}),u(this,ye).notify({mutation:this,type:"updated",action:e})})},Ks);function wi(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var We,je,nn,Vs,vi=(Vs=class extends an{constructor(e={}){super();O(this,We);O(this,je);O(this,nn);this.config=e,_(this,We,new Set),_(this,je,new Map),_(this,nn,0)}build(e,n,s){const r=new yi({mutationCache:this,mutationId:++dn(this,nn)._,options:e.defaultMutationOptions(n),state:s});return this.add(r),r}add(e){u(this,We).add(e);const n=pn(e);if(typeof n=="string"){const s=u(this,je).get(n);s?s.push(e):u(this,je).set(n,[e])}this.notify({type:"added",mutation:e})}remove(e){if(u(this,We).delete(e)){const n=pn(e);if(typeof n=="string"){const s=u(this,je).get(n);if(s)if(s.length>1){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}else s[0]===e&&u(this,je).delete(n)}}this.notify({type:"removed",mutation:e})}canRun(e){const n=pn(e);if(typeof n=="string"){const s=u(this,je).get(n),r=s==null?void 0:s.find(a=>a.state.status==="pending");return!r||r===e}else return!0}runNext(e){var s;const n=pn(e);if(typeof n=="string"){const r=(s=u(this,je).get(n))==null?void 0:s.find(a=>a!==e&&a.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){he.batch(()=>{u(this,We).forEach(e=>{this.notify({type:"removed",mutation:e})}),u(this,We).clear(),u(this,je).clear()})}getAll(){return Array.from(u(this,We))}find(e){const n={exact:!0,...e};return this.getAll().find(s=>Es(n,s))}findAll(e={}){return this.getAll().filter(n=>Es(e,n))}notify(e){he.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return he.batch(()=>Promise.all(e.map(n=>n.continue().catch(Te))))}},We=new WeakMap,je=new WeakMap,nn=new WeakMap,Vs);function pn(t){var e;return(e=t.options.scope)==null?void 0:e.id}function $s(t){return{onFetch:(e,n)=>{var b,y,v,d,S;const s=e.options,r=(v=(y=(b=e.fetchOptions)==null?void 0:b.meta)==null?void 0:y.fetchMore)==null?void 0:v.direction,a=((d=e.state.data)==null?void 0:d.pages)||[],c=((S=e.state.data)==null?void 0:S.pageParams)||[];let o={pages:[],pageParams:[]},h=0;const m=async()=>{let f=!1;const g=A=>{Object.defineProperty(A,"signal",{enumerable:!0,get:()=>(e.signal.aborted?f=!0:e.signal.addEventListener("abort",()=>{f=!0}),e.signal)})},$=Nr(e.options,e.fetchOptions),N=async(A,H,W)=>{if(f)return Promise.reject();if(H==null&&A.pages.length)return Promise.resolve(A);const ce=(()=>{const oe={client:e.client,queryKey:e.queryKey,pageParam:H,direction:W?"backward":"forward",meta:e.options.meta};return g(oe),oe})(),Y=await $(ce),{maxPages:F}=e.options,J=W?li:ii;return{pages:J(A.pages,Y,F),pageParams:J(A.pageParams,H,F)}};if(r&&a.length){const A=r==="backward",H=A?xi:Ps,W={pages:a,pageParams:c},K=H(s,W);o=await N(W,K,A)}else{const A=t??a.length;do{const H=h===0?c[0]??s.initialPageParam:Ps(s,o);if(h>0&&H==null)break;o=await N(o,H),h++}while(h<A)}return o};e.options.persister?e.fetchFn=()=>{var f,g;return(g=(f=e.options).persister)==null?void 0:g.call(f,m,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=m}}}function Ps(t,{pages:e,pageParams:n}){const s=e.length-1;return e.length>0?t.getNextPageParam(e[s],e,n[s],n):void 0}function xi(t,{pages:e,pageParams:n}){var s;return e.length>0?(s=t.getPreviousPageParam)==null?void 0:s.call(t,e[0],e,n[0],n):void 0}var ae,st,rt,Mt,Dt,at,Lt,Ut,Ys,ki=(Ys=class{constructor(t={}){O(this,ae);O(this,st);O(this,rt);O(this,Mt);O(this,Dt);O(this,at);O(this,Lt);O(this,Ut);_(this,ae,t.queryCache||new bi),_(this,st,t.mutationCache||new vi),_(this,rt,t.defaultOptions||{}),_(this,Mt,new Map),_(this,Dt,new Map),_(this,at,0)}mount(){dn(this,at)._++,u(this,at)===1&&(_(this,Lt,os.subscribe(async t=>{t&&(await this.resumePausedMutations(),u(this,ae).onFocus())})),_(this,Ut,vn.subscribe(async t=>{t&&(await this.resumePausedMutations(),u(this,ae).onOnline())})))}unmount(){var t,e;dn(this,at)._--,u(this,at)===0&&((t=u(this,Lt))==null||t.call(this),_(this,Lt,void 0),(e=u(this,Ut))==null||e.call(this),_(this,Ut,void 0))}isFetching(t){return u(this,ae).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return u(this,st).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=u(this,ae).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),n=u(this,ae).build(this,e),s=n.state.data;return s===void 0?this.fetchQuery(t):(t.revalidateIfStale&&n.isStaleByTime(ct(e.staleTime,n))&&this.prefetchQuery(e),Promise.resolve(s))}getQueriesData(t){return u(this,ae).findAll(t).map(({queryKey:e,state:n})=>{const s=n.data;return[e,s]})}setQueryData(t,e,n){const s=this.defaultQueryOptions({queryKey:t}),r=u(this,ae).get(s.queryHash),a=r==null?void 0:r.state.data,c=ai(e,a);if(c!==void 0)return u(this,ae).build(this,s).setData(c,{...n,manual:!0})}setQueriesData(t,e,n){return he.batch(()=>u(this,ae).findAll(t).map(({queryKey:s})=>[s,this.setQueryData(s,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=u(this,ae).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=u(this,ae);he.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=u(this,ae);return he.batch(()=>(n.findAll(t).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const n={revert:!0,...e},s=he.batch(()=>u(this,ae).findAll(t).map(r=>r.cancel(n)));return Promise.all(s).then(Te).catch(Te)}invalidateQueries(t,e={}){return he.batch(()=>(u(this,ae).findAll(t).forEach(n=>{n.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const n={...e,cancelRefetch:e.cancelRefetch??!0},s=he.batch(()=>u(this,ae).findAll(t).filter(r=>!r.isDisabled()&&!r.isStatic()).map(r=>{let a=r.fetch(void 0,n);return n.throwOnError||(a=a.catch(Te)),r.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(s).then(Te)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=u(this,ae).build(this,e);return n.isStaleByTime(ct(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(Te).catch(Te)}fetchInfiniteQuery(t){return t.behavior=$s(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(Te).catch(Te)}ensureInfiniteQueryData(t){return t.behavior=$s(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return vn.isOnline()?u(this,st).resumePausedMutations():Promise.resolve()}getQueryCache(){return u(this,ae)}getMutationCache(){return u(this,st)}getDefaultOptions(){return u(this,rt)}setDefaultOptions(t){_(this,rt,t)}setQueryDefaults(t,e){u(this,Mt).set(Zt(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...u(this,Mt).values()],n={};return e.forEach(s=>{en(t,s.queryKey)&&Object.assign(n,s.defaultOptions)}),n}setMutationDefaults(t,e){u(this,Dt).set(Zt(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...u(this,Dt).values()],n={};return e.forEach(s=>{en(t,s.mutationKey)&&Object.assign(n,s.defaultOptions)}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...u(this,rt).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=rs(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===as&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...u(this,rt).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){u(this,ae).clear(),u(this,st).clear()}},ae=new WeakMap,st=new WeakMap,rt=new WeakMap,Mt=new WeakMap,Dt=new WeakMap,at=new WeakMap,Lt=new WeakMap,Ut=new WeakMap,Ys),xe,z,sn,we,vt,Ft,ot,it,rn,Ht,Bt,xt,kt,lt,Gt,Q,Qt,Bn,Gn,qn,zn,Jn,Wn,Kn,Ur,Qs,Ti=(Qs=class extends an{constructor(e,n){super();O(this,Q);O(this,xe);O(this,z);O(this,sn);O(this,we);O(this,vt);O(this,Ft);O(this,ot);O(this,it);O(this,rn);O(this,Ht);O(this,Bt);O(this,xt);O(this,kt);O(this,lt);O(this,Gt,new Set);this.options=n,_(this,xe,e),_(this,it,null),_(this,ot,Hn()),this.options.experimental_prefetchInRender||u(this,ot).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(u(this,z).addObserver(this),As(u(this,z),this.options)?q(this,Q,Qt).call(this):this.updateResult(),q(this,Q,zn).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Vn(u(this,z),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Vn(u(this,z),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,q(this,Q,Jn).call(this),q(this,Q,Wn).call(this),u(this,z).removeObserver(this)}setOptions(e){const n=this.options,s=u(this,z);if(this.options=u(this,xe).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Pe(this.options.enabled,u(this,z))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");q(this,Q,Kn).call(this),u(this,z).setOptions(this.options),n._defaulted&&!Ln(this.options,n)&&u(this,xe).getQueryCache().notify({type:"observerOptionsUpdated",query:u(this,z),observer:this});const r=this.hasListeners();r&&Cs(u(this,z),s,this.options,n)&&q(this,Q,Qt).call(this),this.updateResult(),r&&(u(this,z)!==s||Pe(this.options.enabled,u(this,z))!==Pe(n.enabled,u(this,z))||ct(this.options.staleTime,u(this,z))!==ct(n.staleTime,u(this,z)))&&q(this,Q,Bn).call(this);const a=q(this,Q,Gn).call(this);r&&(u(this,z)!==s||Pe(this.options.enabled,u(this,z))!==Pe(n.enabled,u(this,z))||a!==u(this,lt))&&q(this,Q,qn).call(this,a)}getOptimisticResult(e){const n=u(this,xe).getQueryCache().build(u(this,xe),e),s=this.createResult(n,e);return Ei(this,s)&&(_(this,we,s),_(this,Ft,this.options),_(this,vt,u(this,z).state)),s}getCurrentResult(){return u(this,we)}trackResult(e,n){return new Proxy(e,{get:(s,r)=>(this.trackProp(r),n==null||n(r),Reflect.get(s,r))})}trackProp(e){u(this,Gt).add(e)}getCurrentQuery(){return u(this,z)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const n=u(this,xe).defaultQueryOptions(e),s=u(this,xe).getQueryCache().build(u(this,xe),n);return s.fetch().then(()=>this.createResult(s,n))}fetch(e){return q(this,Q,Qt).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),u(this,we)))}createResult(e,n){var F;const s=u(this,z),r=this.options,a=u(this,we),c=u(this,vt),o=u(this,Ft),m=e!==s?e.state:u(this,sn),{state:b}=e;let y={...b},v=!1,d;if(n._optimisticResults){const J=this.hasListeners(),oe=!J&&As(e,n),I=J&&Cs(e,s,n,r);(oe||I)&&(y={...y,...Lr(b.data,e.options)}),n._optimisticResults==="isRestoring"&&(y.fetchStatus="idle")}let{error:S,errorUpdatedAt:f,status:g}=y;d=y.data;let $=!1;if(n.placeholderData!==void 0&&d===void 0&&g==="pending"){let J;a!=null&&a.isPlaceholderData&&n.placeholderData===(o==null?void 0:o.placeholderData)?(J=a.data,$=!0):J=typeof n.placeholderData=="function"?n.placeholderData((F=u(this,Bt))==null?void 0:F.state.data,u(this,Bt)):n.placeholderData,J!==void 0&&(g="success",d=Fn(a==null?void 0:a.data,J,n),v=!0)}if(n.select&&d!==void 0&&!$)if(a&&d===(c==null?void 0:c.data)&&n.select===u(this,rn))d=u(this,Ht);else try{_(this,rn,n.select),d=n.select(d),d=Fn(a==null?void 0:a.data,d,n),_(this,Ht,d),_(this,it,null)}catch(J){_(this,it,J)}u(this,it)&&(S=u(this,it),d=u(this,Ht),f=Date.now(),g="error");const N=y.fetchStatus==="fetching",A=g==="pending",H=g==="error",W=A&&N,K=d!==void 0,Y={status:g,fetchStatus:y.fetchStatus,isPending:A,isSuccess:g==="success",isError:H,isInitialLoading:W,isLoading:W,data:d,dataUpdatedAt:y.dataUpdatedAt,error:S,errorUpdatedAt:f,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>m.dataUpdateCount||y.errorUpdateCount>m.errorUpdateCount,isFetching:N,isRefetching:N&&!A,isLoadingError:H&&!K,isPaused:y.fetchStatus==="paused",isPlaceholderData:v,isRefetchError:H&&K,isStale:is(e,n),refetch:this.refetch,promise:u(this,ot),isEnabled:Pe(n.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const J=pe=>{Y.status==="error"?pe.reject(Y.error):Y.data!==void 0&&pe.resolve(Y.data)},oe=()=>{const pe=_(this,ot,Y.promise=Hn());J(pe)},I=u(this,ot);switch(I.status){case"pending":e.queryHash===s.queryHash&&J(I);break;case"fulfilled":(Y.status==="error"||Y.data!==I.value)&&oe();break;case"rejected":(Y.status!=="error"||Y.error!==I.reason)&&oe();break}}return Y}updateResult(){const e=u(this,we),n=this.createResult(u(this,z),this.options);if(_(this,vt,u(this,z).state),_(this,Ft,this.options),u(this,vt).data!==void 0&&_(this,Bt,u(this,z)),Ln(n,e))return;_(this,we,n);const s=()=>{if(!e)return!0;const{notifyOnChangeProps:r}=this.options,a=typeof r=="function"?r():r;if(a==="all"||!a&&!u(this,Gt).size)return!0;const c=new Set(a??u(this,Gt));return this.options.throwOnError&&c.add("error"),Object.keys(u(this,we)).some(o=>{const h=o;return u(this,we)[h]!==e[h]&&c.has(h)})};q(this,Q,Ur).call(this,{listeners:s()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&q(this,Q,zn).call(this)}},xe=new WeakMap,z=new WeakMap,sn=new WeakMap,we=new WeakMap,vt=new WeakMap,Ft=new WeakMap,ot=new WeakMap,it=new WeakMap,rn=new WeakMap,Ht=new WeakMap,Bt=new WeakMap,xt=new WeakMap,kt=new WeakMap,lt=new WeakMap,Gt=new WeakMap,Q=new WeakSet,Qt=function(e){q(this,Q,Kn).call(this);let n=u(this,z).fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(Te)),n},Bn=function(){q(this,Q,Jn).call(this);const e=ct(this.options.staleTime,u(this,z));if(Rt||u(this,we).isStale||!Dn(e))return;const s=Cr(u(this,we).dataUpdatedAt,e)+1;_(this,xt,setTimeout(()=>{u(this,we).isStale||this.updateResult()},s))},Gn=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(u(this,z)):this.options.refetchInterval)??!1},qn=function(e){q(this,Q,Wn).call(this),_(this,lt,e),!(Rt||Pe(this.options.enabled,u(this,z))===!1||!Dn(u(this,lt))||u(this,lt)===0)&&_(this,kt,setInterval(()=>{(this.options.refetchIntervalInBackground||os.isFocused())&&q(this,Q,Qt).call(this)},u(this,lt)))},zn=function(){q(this,Q,Bn).call(this),q(this,Q,qn).call(this,q(this,Q,Gn).call(this))},Jn=function(){u(this,xt)&&(clearTimeout(u(this,xt)),_(this,xt,void 0))},Wn=function(){u(this,kt)&&(clearInterval(u(this,kt)),_(this,kt,void 0))},Kn=function(){const e=u(this,xe).getQueryCache().build(u(this,xe),this.options);if(e===u(this,z))return;const n=u(this,z);_(this,z,e),_(this,sn,e.state),this.hasListeners()&&(n==null||n.removeObserver(this),e.addObserver(this))},Ur=function(e){he.batch(()=>{e.listeners&&this.listeners.forEach(n=>{n(u(this,we))}),u(this,xe).getQueryCache().notify({query:u(this,z),type:"observerResultsUpdated"})})},Qs);function Ri(t,e){return Pe(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function As(t,e){return Ri(t,e)||t.state.data!==void 0&&Vn(t,e,e.refetchOnMount)}function Vn(t,e,n){if(Pe(e.enabled,t)!==!1&&ct(e.staleTime,t)!=="static"){const s=typeof n=="function"?n(t):n;return s==="always"||s!==!1&&is(t,e)}return!1}function Cs(t,e,n,s){return(t!==e||Pe(s.enabled,t)===!1)&&(!n.suspense||t.state.status!=="error")&&is(t,n)}function is(t,e){return Pe(e.enabled,t)!==!1&&t.isStaleByTime(ct(e.staleTime,t))}function Ei(t,e){return!Ln(t.getCurrentResult(),e)}var Fr=w.createContext(void 0),Si=t=>{const e=w.useContext(Fr);if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},_i=({client:t,children:e})=>(w.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),l.jsx(Fr.Provider,{value:t,children:e})),Hr=w.createContext(!1),$i=()=>w.useContext(Hr);Hr.Provider;function Pi(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var Ai=w.createContext(Pi()),Ci=()=>w.useContext(Ai),Oi=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&(e.isReset()||(t.retryOnMount=!1))},Ni=t=>{w.useEffect(()=>{t.clearReset()},[t])},Ii=({result:t,errorResetBoundary:e,throwOnError:n,query:s,suspense:r})=>t.isError&&!e.isReset()&&!t.isFetching&&s&&(r&&t.data===void 0||ci(n,[t.error,s])),ji=t=>{if(t.suspense){const e=s=>s==="static"?s:Math.max(s??1e3,1e3),n=t.staleTime;t.staleTime=typeof n=="function"?(...s)=>e(n(...s)):e(n),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3))}},Mi=(t,e)=>t.isLoading&&t.isFetching&&!e,Di=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,Os=(t,e,n)=>e.fetchOptimistic(t).catch(()=>{n.clearReset()});function Li(t,e,n){var y,v,d,S,f;const s=$i(),r=Ci(),a=Si(),c=a.defaultQueryOptions(t);(v=(y=a.getDefaultOptions().queries)==null?void 0:y._experimental_beforeQuery)==null||v.call(y,c),c._optimisticResults=s?"isRestoring":"optimistic",ji(c),Oi(c,r),Ni(r);const o=!a.getQueryCache().get(c.queryHash),[h]=w.useState(()=>new e(a,c)),m=h.getOptimisticResult(c),b=!s&&t.subscribed!==!1;if(w.useSyncExternalStore(w.useCallback(g=>{const $=b?h.subscribe(he.batchCalls(g)):Te;return h.updateResult(),$},[h,b]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),w.useEffect(()=>{h.setOptions(c)},[c,h]),Di(c,m))throw Os(c,h,r);if(Ii({result:m,errorResetBoundary:r,throwOnError:c.throwOnError,query:a.getQueryCache().get(c.queryHash),suspense:c.suspense}))throw m.error;if((S=(d=a.getDefaultOptions().queries)==null?void 0:d._experimental_afterQuery)==null||S.call(d,c,m),c.experimental_prefetchInRender&&!Rt&&Mi(m,s)){const g=o?Os(c,h,r):(f=a.getQueryCache().get(c.queryHash))==null?void 0:f.promise;g==null||g.catch(Te).finally(()=>{h.updateResult()})}return c.notifyOnChangeProps?m:h.trackResult(m)}function Br(t,e){return Li(t,Ti)}var Ui=typeof Element<"u",Fi=typeof Map=="function",Hi=typeof Set=="function",Bi=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function yn(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,s,r;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(s=n;s--!==0;)if(!yn(t[s],e[s]))return!1;return!0}var a;if(Fi&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(s=a.next()).done;)if(!e.has(s.value[0]))return!1;for(a=t.entries();!(s=a.next()).done;)if(!yn(s.value[1],e.get(s.value[0])))return!1;return!0}if(Hi&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(s=a.next()).done;)if(!e.has(s.value[0]))return!1;return!0}if(Bi&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(s=n;s--!==0;)if(t[s]!==e[s])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(s=n;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,r[s]))return!1;if(Ui&&t instanceof Element)return!1;for(s=n;s--!==0;)if(!((r[s]==="_owner"||r[s]==="__v"||r[s]==="__o")&&t.$$typeof)&&!yn(t[r[s]],e[r[s]]))return!1;return!0}return t!==t&&e!==e}var Gi=function(e,n){try{return yn(e,n)}catch(s){if((s.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw s}};const qi=ts(Gi);var zi=function(t,e,n,s,r,a,c,o){if(!t){var h;if(e===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var m=[n,s,r,a,c,o],b=0;h=new Error(e.replace(/%s/g,function(){return m[b++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}},Ji=zi;const Ns=ts(Ji);var Wi=function(e,n,s,r){var a=s?s.call(r,e,n):void 0;if(a!==void 0)return!!a;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var c=Object.keys(e),o=Object.keys(n);if(c.length!==o.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(n),m=0;m<c.length;m++){var b=c[m];if(!h(b))return!1;var y=e[b],v=n[b];if(a=s?s.call(r,y,v,b):void 0,a===!1||a===void 0&&y!==v)return!1}return!0};const Ki=ts(Wi);var Gr=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(Gr||{}),An={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Is=Object.values(Gr),ls={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Vi=Object.entries(ls).reduce((t,[e,n])=>(t[n]=e,t),{}),Me="data-rh",At={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Ct=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const s=t[n];if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}return null},Yi=t=>{let e=Ct(t,"title");const n=Ct(t,At.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const s=Ct(t,At.DEFAULT_TITLE);return e||s||void 0},Qi=t=>Ct(t,At.ON_CHANGE_CLIENT_STATE)||(()=>{}),Cn=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,s)=>({...n,...s}),{}),Xi=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,s)=>{if(!n.length){const r=Object.keys(s);for(let a=0;a<r.length;a+=1){const o=r[a].toLowerCase();if(t.indexOf(o)!==-1&&s[o])return n.concat(s)}}return n},[]),Zi=t=>console&&typeof console.warn=="function"&&console.warn(t),Vt=(t,e,n)=>{const s={};return n.filter(r=>Array.isArray(r[t])?!0:(typeof r[t]<"u"&&Zi(`Helmet: ${t} should be of type "Array". Instead found type "${typeof r[t]}"`),!1)).map(r=>r[t]).reverse().reduce((r,a)=>{const c={};a.filter(h=>{let m;const b=Object.keys(h);for(let v=0;v<b.length;v+=1){const d=b[v],S=d.toLowerCase();e.indexOf(S)!==-1&&!(m==="rel"&&h[m].toLowerCase()==="canonical")&&!(S==="rel"&&h[S].toLowerCase()==="stylesheet")&&(m=S),e.indexOf(d)!==-1&&(d==="innerHTML"||d==="cssText"||d==="itemprop")&&(m=d)}if(!m||!h[m])return!1;const y=h[m].toLowerCase();return s[m]||(s[m]={}),c[m]||(c[m]={}),s[m][y]?!1:(c[m][y]=!0,!0)}).reverse().forEach(h=>r.push(h));const o=Object.keys(c);for(let h=0;h<o.length;h+=1){const m=o[h],b={...s[m],...c[m]};s[m]=b}return r},[]).reverse()},el=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},tl=t=>({baseTag:Xi(["href"],t),bodyAttributes:Cn("bodyAttributes",t),defer:Ct(t,At.DEFER),encode:Ct(t,At.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Cn("htmlAttributes",t),linkTags:Vt("link",["rel","href"],t),metaTags:Vt("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Vt("noscript",["innerHTML"],t),onChangeClientState:Qi(t),scriptTags:Vt("script",["src","innerHTML"],t),styleTags:Vt("style",["cssText"],t),title:Yi(t),titleAttributes:Cn("titleAttributes",t),prioritizeSeoTags:el(t,At.PRIORITIZE_SEO_TAGS)}),qr=t=>Array.isArray(t)?t.join(""):t,nl=(t,e)=>{const n=Object.keys(t);for(let s=0;s<n.length;s+=1)if(e[n[s]]&&e[n[s]].includes(t[n[s]]))return!0;return!1},On=(t,e)=>Array.isArray(t)?t.reduce((n,s)=>(nl(s,e)?n.priority.push(s):n.default.push(s),n),{priority:[],default:[]}):{default:t,priority:[]},js=(t,e)=>({...t,[e]:void 0}),sl=["noscript","script","style"],Yn=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),zr=t=>Object.keys(t).reduce((e,n)=>{const s=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${s}`:s},""),rl=(t,e,n,s)=>{const r=zr(n),a=qr(e);return r?`<${t} ${Me}="true" ${r}>${Yn(a,s)}</${t}>`:`<${t} ${Me}="true">${Yn(a,s)}</${t}>`},al=(t,e,n=!0)=>e.reduce((s,r)=>{const a=r,c=Object.keys(a).filter(m=>!(m==="innerHTML"||m==="cssText")).reduce((m,b)=>{const y=typeof a[b]>"u"?b:`${b}="${Yn(a[b],n)}"`;return m?`${m} ${y}`:y},""),o=a.innerHTML||a.cssText||"",h=sl.indexOf(t)===-1;return`${s}<${t} ${Me}="true" ${c}${h?"/>":`>${o}</${t}>`}`},""),Jr=(t,e={})=>Object.keys(t).reduce((n,s)=>{const r=ls[s];return n[r||s]=t[s],n},e),ol=(t,e,n)=>{const s={key:e,[Me]:!0},r=Jr(n,s);return[k.createElement("title",r,e)]},wn=(t,e)=>e.map((n,s)=>{const r={key:s,[Me]:!0};return Object.keys(n).forEach(a=>{const o=ls[a]||a;if(o==="innerHTML"||o==="cssText"){const h=n.innerHTML||n.cssText;r.dangerouslySetInnerHTML={__html:h}}else r[o]=n[a]}),k.createElement(t,r)}),_e=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>ol(t,e.title,e.titleAttributes),toString:()=>rl(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Jr(e),toString:()=>zr(e)};default:return{toComponent:()=>wn(t,e),toString:()=>al(t,e,n)}}},il=({metaTags:t,linkTags:e,scriptTags:n,encode:s})=>{const r=On(t,An.meta),a=On(e,An.link),c=On(n,An.script);return{priorityMethods:{toComponent:()=>[...wn("meta",r.priority),...wn("link",a.priority),...wn("script",c.priority)],toString:()=>`${_e("meta",r.priority,s)} ${_e("link",a.priority,s)} ${_e("script",c.priority,s)}`},metaTags:r.default,linkTags:a.default,scriptTags:c.default}},ll=t=>{const{baseTag:e,bodyAttributes:n,encode:s=!0,htmlAttributes:r,noscriptTags:a,styleTags:c,title:o="",titleAttributes:h,prioritizeSeoTags:m}=t;let{linkTags:b,metaTags:y,scriptTags:v}=t,d={toComponent:()=>{},toString:()=>""};return m&&({priorityMethods:d,linkTags:b,metaTags:y,scriptTags:v}=il(t)),{priority:d,base:_e("base",e,s),bodyAttributes:_e("bodyAttributes",n,s),htmlAttributes:_e("htmlAttributes",r,s),link:_e("link",b,s),meta:_e("meta",y,s),noscript:_e("noscript",a,s),script:_e("script",v,s),style:_e("style",c,s),title:_e("title",{title:o,titleAttributes:h},s)}},Qn=ll,mn=[],Wr=!!(typeof window<"u"&&window.document&&window.document.createElement),Xn=class{constructor(t,e){Ge(this,"instances",[]);Ge(this,"canUseDOM",Wr);Ge(this,"context");Ge(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?mn:this.instances,add:t=>{(this.canUseDOM?mn:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?mn:this.instances).indexOf(t);(this.canUseDOM?mn:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Qn({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},cl={},Kr=k.createContext(cl),Tt,Vr=(Tt=class extends w.Component{constructor(n){super(n);Ge(this,"helmetData");this.helmetData=new Xn(this.props.context||{},Tt.canUseDOM)}render(){return k.createElement(Kr.Provider,{value:this.helmetData.value},this.props.children)}},Ge(Tt,"canUseDOM",Wr),Tt),$t=(t,e)=>{const n=document.head||document.querySelector("head"),s=n.querySelectorAll(`${t}[${Me}]`),r=[].slice.call(s),a=[];let c;return e&&e.length&&e.forEach(o=>{const h=document.createElement(t);for(const m in o)if(Object.prototype.hasOwnProperty.call(o,m))if(m==="innerHTML")h.innerHTML=o.innerHTML;else if(m==="cssText")h.styleSheet?h.styleSheet.cssText=o.cssText:h.appendChild(document.createTextNode(o.cssText));else{const b=m,y=typeof o[b]>"u"?"":o[b];h.setAttribute(m,y)}h.setAttribute(Me,"true"),r.some((m,b)=>(c=b,h.isEqualNode(m)))?r.splice(c,1):a.push(h)}),r.forEach(o=>{var h;return(h=o.parentNode)==null?void 0:h.removeChild(o)}),a.forEach(o=>n.appendChild(o)),{oldTags:r,newTags:a}},Zn=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const s=n.getAttribute(Me),r=s?s.split(","):[],a=[...r],c=Object.keys(e);for(const o of c){const h=e[o]||"";n.getAttribute(o)!==h&&n.setAttribute(o,h),r.indexOf(o)===-1&&r.push(o);const m=a.indexOf(o);m!==-1&&a.splice(m,1)}for(let o=a.length-1;o>=0;o-=1)n.removeAttribute(a[o]);r.length===a.length?n.removeAttribute(Me):n.getAttribute(Me)!==c.join(",")&&n.setAttribute(Me,c.join(","))},ul=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=qr(t)),Zn("title",e)},Ms=(t,e)=>{const{baseTag:n,bodyAttributes:s,htmlAttributes:r,linkTags:a,metaTags:c,noscriptTags:o,onChangeClientState:h,scriptTags:m,styleTags:b,title:y,titleAttributes:v}=t;Zn("body",s),Zn("html",r),ul(y,v);const d={baseTag:$t("base",n),linkTags:$t("link",a),metaTags:$t("meta",c),noscriptTags:$t("noscript",o),scriptTags:$t("script",m),styleTags:$t("style",b)},S={},f={};Object.keys(d).forEach(g=>{const{newTags:$,oldTags:N}=d[g];$.length&&(S[g]=$),N.length&&(f[g]=d[g].oldTags)}),e&&e(),h(t,S,f)},Yt=null,dl=t=>{Yt&&cancelAnimationFrame(Yt),t.defer?Yt=requestAnimationFrame(()=>{Ms(t,()=>{Yt=null})}):(Ms(t),Yt=null)},hl=dl,Ds=class extends w.Component{constructor(){super(...arguments);Ge(this,"rendered",!1)}shouldComponentUpdate(e){return!Ki(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let s=null;const r=tl(e.get().map(a=>{const c={...a.props};return delete c.context,c}));Vr.canUseDOM?hl(r):Qn&&(s=Qn(r)),n(s)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},In,Zl=(In=class extends w.Component{shouldComponentUpdate(t){return!qi(js(this.props,"helmetData"),js(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,s){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,s)}]}}mapObjectTypeChildren(t,e,n,s){switch(t.type){case"title":return{...e,[t.type]:s,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(s=>{n={...n,[s]:t[s]}}),n}warnOnInvalidChildren(t,e){return Ns(Is.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Is.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Ns(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return k.Children.forEach(t,s=>{if(!s||!s.props)return;const{children:r,...a}=s.props,c=Object.keys(a).reduce((h,m)=>(h[Vi[m]||m]=a[m],h),{});let{type:o}=s;switch(typeof o=="symbol"?o=o.toString():this.warnOnInvalidChildren(s,r),o){case"Symbol(react.fragment)":e=this.mapChildrenToProps(r,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(s,n,c,r);break;default:e=this.mapObjectTypeChildren(s,e,c,r);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:s}=e;if(t&&(n=this.mapChildrenToProps(t,n)),s&&!(s instanceof Xn)){const r=s;s=new Xn(r.context,!0),delete n.helmetData}return s?k.createElement(Ds,{...n,context:s.value}):k.createElement(Kr.Consumer,null,r=>k.createElement(Ds,{...n,context:r}))}},Ge(In,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),In);const pl=fr("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",hero:"bg-primary text-primary-foreground font-semibold hover:shadow-lg glow-effect hover:scale-105",heroOutline:"border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground font-semibold",glass:"backdrop-blur-xl bg-background/80 border border-border/50 text-foreground hover:bg-background/90"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-12 rounded-lg px-8 text-base",xl:"h-14 rounded-xl px-10 text-lg",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ut=w.forwardRef(({className:t,variant:e,size:n,asChild:s=!1,...r},a)=>{const c=s?ya:"button";return l.jsx(c,{className:de(pl({variant:e,size:n,className:t})),ref:a,...r})});ut.displayName="Button";function ml({theme:t,toggleTheme:e}){return l.jsx(ut,{variant:"glass",size:"icon",onClick:e,className:"relative overflow-hidden",children:l.jsx(ca.div,{initial:!1,animate:{rotate:t==="dark"?0:180,scale:1},transition:{duration:.3,ease:"easeInOut"},children:t==="dark"?l.jsx(Fa,{className:"h-5 w-5"}):l.jsx(Ha,{className:"h-5 w-5"})})})}function fl(t){const[e,n]=w.useState("");return w.useEffect(()=>{const s=()=>{const r=window.scrollY+200;for(const a of t){const c=document.getElementById(a);if(c){const{offsetTop:o,offsetHeight:h}=c;if(r>=o&&r<o+h){n(a);return}}}window.scrollY<100&&n("")};return s(),window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[t]),e}const gl=[{href:"about",label:"About"},{href:"projects",label:"Projects"},{href:"articles",label:"Articles"},{href:"skills",label:"Skills"},{href:"contact",label:"Contact"}];function bl({theme:t,toggleTheme:e}){const n=fl(["about","projects","articles","skills","contact"]),s=Zs(),r=er(),a=s.pathname==="/",c=o=>{o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),r("/")};return l.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 glass-effect animate-slide-down",children:l.jsxs("div",{className:"container mx-auto px-6 py-4 flex items-center justify-between",children:[l.jsx("a",{href:"/",onClick:c,className:"flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer",children:l.jsx("span",{className:"text-xl font-bold gradient-text",children:"<bnSaed />"})}),l.jsx("nav",{className:"hidden md:flex items-center gap-8",children:gl.map(o=>{const h=a&&n===o.href;return l.jsxs(ha,{to:`/#${o.href}`,className:de("relative py-1 transition-colors",h?"text-primary font-medium":"text-muted-foreground hover:text-foreground"),children:[o.label,h&&l.jsx("span",{className:"absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-scale-in"})]},o.href)})}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(ut,{variant:"ghost",size:"icon",asChild:!0,children:l.jsx("a",{href:"https://github.com/binSaed",target:"_blank",rel:"noopener noreferrer",children:l.jsx(yr,{className:"h-5 w-5"})})}),l.jsx(ut,{variant:"ghost",size:"icon",asChild:!0,children:l.jsx("a",{href:"https://www.linkedin.com/in/binsaed/",target:"_blank",rel:"noopener noreferrer",children:l.jsx(wr,{className:"h-5 w-5"})})}),l.jsx(ut,{variant:"ghost",size:"icon",asChild:!0,children:l.jsx("a",{href:"https://bnsaed.com/CV/cv.pdf",target:"_blank",rel:"noopener noreferrer",children:l.jsx(br,{className:"h-5 w-5"})})}),l.jsx(ml,{theme:t,toggleTheme:e})]})]})})}async function yl(){const t=await fetch("https://api.github.com/users/binSaed");if(!t.ok)throw new Error("Failed to fetch GitHub profile");return t.json()}function wl(){return Br({queryKey:["github-profile"],queryFn:yl,staleTime:0,gcTime:1e3*60*60*24})}function Je({className:t,...e}){return l.jsx("div",{className:de("animate-pulse rounded-md bg-muted",t),...e})}function vl(){const t=["<>","/>","{","}","()","[]","&&","||","=>","::"],e=Array.from({length:20},(r,a)=>({id:a,symbol:t[a%t.length],left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,delay:`${Math.random()*5}s`,duration:`${15+Math.random()*10}s`,size:`${.8+Math.random()*.6}rem`})),n=Array.from({length:30},(r,a)=>({id:a,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,delay:`${Math.random()*3}s`,duration:`${3+Math.random()*4}s`,size:`${2+Math.random()*4}px`})),s=Array.from({length:5},(r,a)=>({id:a,left:`${10+a*20}%`,delay:`${a*.5}s`}));return l.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[l.jsx("div",{className:"absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow"}),l.jsx("div",{className:"absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow-reverse"}),l.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow"}),l.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.04]"}),l.jsxs("svg",{className:"absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06]",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("defs",{children:l.jsxs("pattern",{id:"circuit",width:"100",height:"100",patternUnits:"userSpaceOnUse",children:[l.jsx("path",{d:"M0 50 H30 M50 0 V30 M50 70 V100 M70 50 H100",stroke:"currentColor",strokeWidth:"0.5",fill:"none",className:"text-primary"}),l.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"currentColor",className:"text-primary"}),l.jsx("circle",{cx:"30",cy:"50",r:"2",fill:"currentColor",className:"text-primary"}),l.jsx("circle",{cx:"70",cy:"50",r:"2",fill:"currentColor",className:"text-primary"}),l.jsx("circle",{cx:"50",cy:"30",r:"2",fill:"currentColor",className:"text-primary"}),l.jsx("circle",{cx:"50",cy:"70",r:"2",fill:"currentColor",className:"text-primary"})]})}),l.jsx("rect",{width:"100%",height:"100%",fill:"url(#circuit)"})]}),e.map(r=>l.jsx("span",{className:"absolute font-mono text-primary/20 dark:text-primary/15 animate-float-random select-none",style:{left:r.left,top:r.top,animationDelay:r.delay,animationDuration:r.duration,fontSize:r.size},children:r.symbol},r.id)),n.map(r=>l.jsx("div",{className:"absolute rounded-full bg-primary/30 dark:bg-primary/20 animate-twinkle",style:{left:r.left,top:r.top,width:r.size,height:r.size,animationDelay:r.delay,animationDuration:r.duration}},r.id)),s.map(r=>l.jsx("div",{className:"absolute top-0 font-mono text-[10px] text-primary/10 dark:text-primary/8 leading-tight animate-binary-fall whitespace-nowrap",style:{left:r.left,animationDelay:r.delay},children:Array.from({length:20},()=>Math.round(Math.random())).join("")},r.id)),l.jsxs("svg",{className:"absolute inset-0 w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:"lineGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"hsl(var(--primary))",stopOpacity:"0"}),l.jsx("stop",{offset:"50%",stopColor:"hsl(var(--primary))",stopOpacity:"0.1"}),l.jsx("stop",{offset:"100%",stopColor:"hsl(var(--primary))",stopOpacity:"0"})]})}),l.jsx("line",{x1:"10%",y1:"20%",x2:"40%",y2:"45%",stroke:"url(#lineGradient)",strokeWidth:"1",className:"animate-line-draw"}),l.jsx("line",{x1:"60%",y1:"15%",x2:"85%",y2:"40%",stroke:"url(#lineGradient)",strokeWidth:"1",className:"animate-line-draw",style:{animationDelay:"1s"}}),l.jsx("line",{x1:"20%",y1:"70%",x2:"50%",y2:"55%",stroke:"url(#lineGradient)",strokeWidth:"1",className:"animate-line-draw",style:{animationDelay:"2s"}}),l.jsx("line",{x1:"70%",y1:"75%",x2:"90%",y2:"50%",stroke:"url(#lineGradient)",strokeWidth:"1",className:"animate-line-draw",style:{animationDelay:"0.5s"}})]}),l.jsx("div",{className:"absolute inset-0 bg-hexagon-pattern opacity-[0.015] dark:opacity-[0.03]"})]})}function xl(t,e,n,s={}){const{stiffness:r=180,damping:a=20,mass:c=1}=s,o=w.useRef({x:0,y:0,vx:0,vy:0}),h=w.useRef({x:t,y:e}),m=w.useRef(null),b=w.useRef(null);w.useEffect(()=>{h.current={x:t,y:e}},[t,e]);const y=w.useCallback(d=>{b.current===null&&(b.current=d);const S=Math.min((d-b.current)/1e3,.064);b.current=d;const f=o.current,g=h.current,$=-r*(f.x-g.x),N=-r*(f.y-g.y),A=-a*f.vx,H=-a*f.vy,W=($+A)/c,K=(N+H)/c;if(f.vx+=W*S,f.vy+=K*S,f.x+=f.vx*S,f.y+=f.vy*S,Math.abs(f.x-g.x)<.01&&Math.abs(f.y-g.y)<.01&&Math.abs(f.vx)<.01&&Math.abs(f.vy)<.01){f.x=g.x,f.y=g.y,f.vx=0,f.vy=0,n(f.x,f.y),m.current=null,b.current=null;return}n(f.x,f.y),m.current=requestAnimationFrame(y)},[r,a,c,n]),v=w.useCallback(()=>{m.current===null&&(b.current=null,m.current=requestAnimationFrame(y))},[y]);return w.useEffect(()=>{m.current===null&&(b.current=null,m.current=requestAnimationFrame(y))},[t,e,y]),w.useEffect(()=>()=>{m.current!==null&&cancelAnimationFrame(m.current)},[]),{start:v,setPosition:(d,S)=>{o.current.x=d,o.current.y=S}}}var cs={};(function t(e,n,s,r){var a=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),c=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var p=new OffscreenCanvas(1,1),i=p.getContext("2d");i.fillRect(0,0,1,1);var x=p.transferToImageBitmap();i.createPattern(x,"no-repeat")}catch{return!1}return!0}();function h(){}function m(p){var i=n.exports.Promise,x=i!==void 0?i:e.Promise;return typeof x=="function"?new x(p):(p(h,h),null)}var b=function(p,i){return{transform:function(x){if(p)return x;if(i.has(x))return i.get(x);var T=new OffscreenCanvas(x.width,x.height),E=T.getContext("2d");return E.drawImage(x,0,0),i.set(x,T),T},clear:function(){i.clear()}}}(o,new Map),y=function(){var p=Math.floor(16.666666666666668),i,x,T={},E=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(i=function(P){var j=Math.random();return T[j]=requestAnimationFrame(function R(M){E===M||E+p-1<M?(E=M,delete T[j],P()):T[j]=requestAnimationFrame(R)}),j},x=function(P){T[P]&&cancelAnimationFrame(T[P])}):(i=function(P){return setTimeout(P,p)},x=function(P){return clearTimeout(P)}),{frame:i,cancel:x}}(),v=function(){var p,i,x={};function T(E){function P(j,R){E.postMessage({options:j||{},callback:R})}E.init=function(R){var M=R.transferControlToOffscreen();E.postMessage({canvas:M},[M])},E.fire=function(R,M,B){if(i)return P(R,null),i;var Z=Math.random().toString(36).slice(2);return i=m(function(V){function ee(ie){ie.data.callback===Z&&(delete x[Z],E.removeEventListener("message",ee),i=null,b.clear(),B(),V())}E.addEventListener("message",ee),P(R,Z),x[Z]=ee.bind(null,{data:{callback:Z}})}),i},E.reset=function(){E.postMessage({reset:!0});for(var R in x)x[R](),delete x[R]}}return function(){if(p)return p;if(!s&&a){var E=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{p=new Worker(URL.createObjectURL(new Blob([E])))}catch(P){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",P),null}T(p)}return p}}(),d={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function S(p,i){return i?i(p):p}function f(p){return p!=null}function g(p,i,x){return S(p&&f(p[i])?p[i]:d[i],x)}function $(p){return p<0?0:Math.floor(p)}function N(p,i){return Math.floor(Math.random()*(i-p))+p}function A(p){return parseInt(p,16)}function H(p){return p.map(W)}function W(p){var i=String(p).replace(/[^0-9a-f]/gi,"");return i.length<6&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]),{r:A(i.substring(0,2)),g:A(i.substring(2,4)),b:A(i.substring(4,6))}}function K(p){var i=g(p,"origin",Object);return i.x=g(i,"x",Number),i.y=g(i,"y",Number),i}function ce(p){p.width=document.documentElement.clientWidth,p.height=document.documentElement.clientHeight}function Y(p){var i=p.getBoundingClientRect();p.width=i.width,p.height=i.height}function F(p){var i=document.createElement("canvas");return i.style.position="fixed",i.style.top="0px",i.style.left="0px",i.style.pointerEvents="none",i.style.zIndex=p,i}function J(p,i,x,T,E,P,j,R,M){p.save(),p.translate(i,x),p.rotate(P),p.scale(T,E),p.arc(0,0,1,j,R,M),p.restore()}function oe(p){var i=p.angle*(Math.PI/180),x=p.spread*(Math.PI/180);return{x:p.x,y:p.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:p.startVelocity*.5+Math.random()*p.startVelocity,angle2D:-i+(.5*x-Math.random()*x),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:p.color,shape:p.shape,tick:0,totalTicks:p.ticks,decay:p.decay,drift:p.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:p.gravity*3,ovalScalar:.6,scalar:p.scalar,flat:p.flat}}function I(p,i){i.x+=Math.cos(i.angle2D)*i.velocity+i.drift,i.y+=Math.sin(i.angle2D)*i.velocity+i.gravity,i.velocity*=i.decay,i.flat?(i.wobble=0,i.wobbleX=i.x+10*i.scalar,i.wobbleY=i.y+10*i.scalar,i.tiltSin=0,i.tiltCos=0,i.random=1):(i.wobble+=i.wobbleSpeed,i.wobbleX=i.x+10*i.scalar*Math.cos(i.wobble),i.wobbleY=i.y+10*i.scalar*Math.sin(i.wobble),i.tiltAngle+=.1,i.tiltSin=Math.sin(i.tiltAngle),i.tiltCos=Math.cos(i.tiltAngle),i.random=Math.random()+2);var x=i.tick++/i.totalTicks,T=i.x+i.random*i.tiltCos,E=i.y+i.random*i.tiltSin,P=i.wobbleX+i.random*i.tiltCos,j=i.wobbleY+i.random*i.tiltSin;if(p.fillStyle="rgba("+i.color.r+", "+i.color.g+", "+i.color.b+", "+(1-x)+")",p.beginPath(),c&&i.shape.type==="path"&&typeof i.shape.path=="string"&&Array.isArray(i.shape.matrix))p.fill(ue(i.shape.path,i.shape.matrix,i.x,i.y,Math.abs(P-T)*.1,Math.abs(j-E)*.1,Math.PI/10*i.wobble));else if(i.shape.type==="bitmap"){var R=Math.PI/10*i.wobble,M=Math.abs(P-T)*.1,B=Math.abs(j-E)*.1,Z=i.shape.bitmap.width*i.scalar,V=i.shape.bitmap.height*i.scalar,ee=new DOMMatrix([Math.cos(R)*M,Math.sin(R)*M,-Math.sin(R)*B,Math.cos(R)*B,i.x,i.y]);ee.multiplySelf(new DOMMatrix(i.shape.matrix));var ie=p.createPattern(b.transform(i.shape.bitmap),"no-repeat");ie.setTransform(ee),p.globalAlpha=1-x,p.fillStyle=ie,p.fillRect(i.x-Z/2,i.y-V/2,Z,V),p.globalAlpha=1}else if(i.shape==="circle")p.ellipse?p.ellipse(i.x,i.y,Math.abs(P-T)*i.ovalScalar,Math.abs(j-E)*i.ovalScalar,Math.PI/10*i.wobble,0,2*Math.PI):J(p,i.x,i.y,Math.abs(P-T)*i.ovalScalar,Math.abs(j-E)*i.ovalScalar,Math.PI/10*i.wobble,0,2*Math.PI);else if(i.shape==="star")for(var G=Math.PI/2*3,me=4*i.scalar,ve=8*i.scalar,Re=i.x,Ee=i.y,He=5,Se=Math.PI/He;He--;)Re=i.x+Math.cos(G)*ve,Ee=i.y+Math.sin(G)*ve,p.lineTo(Re,Ee),G+=Se,Re=i.x+Math.cos(G)*me,Ee=i.y+Math.sin(G)*me,p.lineTo(Re,Ee),G+=Se;else p.moveTo(Math.floor(i.x),Math.floor(i.y)),p.lineTo(Math.floor(i.wobbleX),Math.floor(E)),p.lineTo(Math.floor(P),Math.floor(j)),p.lineTo(Math.floor(T),Math.floor(i.wobbleY));return p.closePath(),p.fill(),i.tick<i.totalTicks}function pe(p,i,x,T,E){var P=i.slice(),j=p.getContext("2d"),R,M,B=m(function(Z){function V(){R=M=null,j.clearRect(0,0,T.width,T.height),b.clear(),E(),Z()}function ee(){s&&!(T.width===r.width&&T.height===r.height)&&(T.width=p.width=r.width,T.height=p.height=r.height),!T.width&&!T.height&&(x(p),T.width=p.width,T.height=p.height),j.clearRect(0,0,T.width,T.height),P=P.filter(function(ie){return I(j,ie)}),P.length?R=y.frame(ee):V()}R=y.frame(ee),M=V});return{addFettis:function(Z){return P=P.concat(Z),B},canvas:p,promise:B,reset:function(){R&&y.cancel(R),M&&M()}}}function D(p,i){var x=!p,T=!!g(i||{},"resize"),E=!1,P=g(i,"disableForReducedMotion",Boolean),j=a&&!!g(i||{},"useWorker"),R=j?v():null,M=x?ce:Y,B=p&&R?!!p.__confetti_initialized:!1,Z=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,V;function ee(G,me,ve){for(var Re=g(G,"particleCount",$),Ee=g(G,"angle",Number),He=g(G,"spread",Number),Se=g(G,"startVelocity",Number),dt=g(G,"decay",Number),on=g(G,"gravity",Number),Be=g(G,"drift",Number),ln=g(G,"colors",H),xn=g(G,"ticks",Number),be=g(G,"shapes"),Ke=g(G,"scalar"),kn=!!g(G,"flat"),cn=K(G),ht=Re,zt=[],un=p.width*cn.x,Jt=p.height*cn.y;ht--;)zt.push(oe({x:un,y:Jt,angle:Ee,spread:He,startVelocity:Se,color:ln[ht%ln.length],shape:be[N(0,be.length)],ticks:xn,decay:dt,gravity:on,drift:Be,scalar:Ke,flat:kn}));return V?V.addFettis(zt):(V=pe(p,zt,M,me,ve),V.promise)}function ie(G){var me=P||g(G,"disableForReducedMotion",Boolean),ve=g(G,"zIndex",Number);if(me&&Z)return m(function(Se){Se()});x&&V?p=V.canvas:x&&!p&&(p=F(ve),document.body.appendChild(p)),T&&!B&&M(p);var Re={width:p.width,height:p.height};R&&!B&&R.init(p),B=!0,R&&(p.__confetti_initialized=!0);function Ee(){if(R){var Se={getBoundingClientRect:function(){if(!x)return p.getBoundingClientRect()}};M(Se),R.postMessage({resize:{width:Se.width,height:Se.height}});return}Re.width=Re.height=null}function He(){V=null,T&&(E=!1,e.removeEventListener("resize",Ee)),x&&p&&(document.body.contains(p)&&document.body.removeChild(p),p=null,B=!1)}return T&&!E&&(E=!0,e.addEventListener("resize",Ee,!1)),R?R.fire(G,Re,He):ee(G,Re,He)}return ie.reset=function(){R&&R.reset(),V&&V.reset()},ie}var ne;function re(){return ne||(ne=D(null,{useWorker:!0,resize:!0})),ne}function ue(p,i,x,T,E,P,j){var R=new Path2D(p),M=new Path2D;M.addPath(R,new DOMMatrix(i));var B=new Path2D;return B.addPath(M,new DOMMatrix([Math.cos(j)*E,Math.sin(j)*E,-Math.sin(j)*P,Math.cos(j)*P,x,T])),B}function ge(p){if(!c)throw new Error("path confetti are not supported in this browser");var i,x;typeof p=="string"?i=p:(i=p.path,x=p.matrix);var T=new Path2D(i),E=document.createElement("canvas"),P=E.getContext("2d");if(!x){for(var j=1e3,R=j,M=j,B=0,Z=0,V,ee,ie=0;ie<j;ie+=2)for(var G=0;G<j;G+=2)P.isPointInPath(T,ie,G,"nonzero")&&(R=Math.min(R,ie),M=Math.min(M,G),B=Math.max(B,ie),Z=Math.max(Z,G));V=B-R,ee=Z-M;var me=10,ve=Math.min(me/V,me/ee);x=[ve,0,0,ve,-Math.round(V/2+R)*ve,-Math.round(ee/2+M)*ve]}return{type:"path",path:i,matrix:x}}function C(p){var i,x=1,T="#000000",E='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof p=="string"?i=p:(i=p.text,x="scalar"in p?p.scalar:x,E="fontFamily"in p?p.fontFamily:E,T="color"in p?p.color:T);var P=10*x,j=""+P+"px "+E,R=new OffscreenCanvas(P,P),M=R.getContext("2d");M.font=j;var B=M.measureText(i),Z=Math.ceil(B.actualBoundingBoxRight+B.actualBoundingBoxLeft),V=Math.ceil(B.actualBoundingBoxAscent+B.actualBoundingBoxDescent),ee=2,ie=B.actualBoundingBoxLeft+ee,G=B.actualBoundingBoxAscent+ee;Z+=ee+ee,V+=ee+ee,R=new OffscreenCanvas(Z,V),M=R.getContext("2d"),M.font=j,M.fillStyle=T,M.fillText(i,ie,G);var me=1/x;return{type:"bitmap",bitmap:R.transferToImageBitmap(),matrix:[me,0,0,me,-Z*me/2,-V*me/2]}}n.exports=function(){return re().apply(this,arguments)},n.exports.reset=function(){re().reset()},n.exports.create=D,n.exports.shapeFromPath=ge,n.exports.shapeFromText=C})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),cs,!1);const Ls=cs.exports;cs.exports.create;const kl=xa,Tl=va,Yr=w.forwardRef(({className:t,...e},n)=>l.jsx(lr,{ref:n,className:de("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...e}));Yr.displayName=lr.displayName;const Qr=w.forwardRef(({className:t,children:e,...n},s)=>l.jsxs(Tl,{children:[l.jsx(Yr,{}),l.jsxs(cr,{ref:s,className:de("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...n,children:[e,l.jsxs(wa,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[l.jsx(vr,{className:"h-4 w-4"}),l.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Qr.displayName=cr.displayName;const Xr=({className:t,...e})=>l.jsx("div",{className:de("flex flex-col space-y-1.5 text-center sm:text-left",t),...e});Xr.displayName="DialogHeader";const Zr=w.forwardRef(({className:t,...e},n)=>l.jsx(ur,{ref:n,className:de("text-lg font-semibold leading-none tracking-tight",t),...e}));Zr.displayName=ur.displayName;const ea=w.forwardRef(({className:t,...e},n)=>l.jsx(dr,{ref:n,className:de("text-sm text-muted-foreground",t),...e}));ea.displayName=dr.displayName;async function Rl(){const t=await fetch("https://api.github.com/users/binSaed/repos?per_page=100&type=public");if(!t.ok)throw new Error("Failed to fetch GitHub repos");return(await t.json()).sort((n,s)=>s.stargazers_count-n.stargazers_count)}function El(t=!0){return Br({queryKey:["github-repos"],queryFn:Rl,staleTime:0,gcTime:1e3*60*60*24,enabled:t})}const ta=w.forwardRef(({className:t,children:e,...n},s)=>l.jsxs(hr,{ref:s,className:de("relative overflow-hidden",t),...n,children:[l.jsx(ka,{className:"h-full w-full rounded-[inherit]",children:e}),l.jsx(na,{}),l.jsx(Ta,{})]}));ta.displayName=hr.displayName;const na=w.forwardRef(({className:t,orientation:e="vertical",...n},s)=>l.jsx(pr,{ref:s,orientation:e,className:de("flex touch-none select-none transition-colors",e==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",e==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...n,children:l.jsx(Ra,{className:"relative flex-1 rounded-full bg-border"})}));na.displayName=pr.displayName;const Sl={TypeScript:"bg-blue-500",JavaScript:"bg-yellow-400",Python:"bg-green-500",Dart:"bg-cyan-500",Java:"bg-orange-500",Kotlin:"bg-purple-500",Swift:"bg-orange-400",Go:"bg-cyan-400",Rust:"bg-orange-600",Ruby:"bg-red-500",PHP:"bg-indigo-400","C++":"bg-pink-500",C:"bg-gray-500",HTML:"bg-red-400",CSS:"bg-blue-400",Shell:"bg-green-400"};function _l({repo:t}){const e=t.language?Sl[t.language]||"bg-muted-foreground":null;return l.jsxs("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer",className:"block p-4 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-200 group",children:[l.jsxs("div",{className:"flex items-start justify-between gap-2",children:[l.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors truncate",children:t.name}),l.jsx(La,{className:"h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"})]}),t.description&&l.jsx("p",{className:"text-sm text-muted-foreground mt-2 line-clamp-2",children:t.description}),l.jsxs("div",{className:"flex items-center gap-4 mt-3 text-sm text-muted-foreground",children:[e&&l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:`w-3 h-3 rounded-full ${e}`}),t.language]}),l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(ns,{className:"h-4 w-4"}),t.stargazers_count]}),l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(Ua,{className:"h-4 w-4"}),t.forks_count]})]}),t.topics&&t.topics.length>0&&l.jsxs("div",{className:"flex flex-wrap gap-1.5 mt-3",children:[t.topics.slice(0,4).map(n=>l.jsx("span",{className:"px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary",children:n},n)),t.topics.length>4&&l.jsxs("span",{className:"px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground",children:["+",t.topics.length-4]})]})]})}function fn(){return l.jsxs("div",{className:"p-4 rounded-lg border border-border bg-card/50",children:[l.jsx(Je,{className:"h-5 w-32 mb-2"}),l.jsx(Je,{className:"h-4 w-full mb-1"}),l.jsx(Je,{className:"h-4 w-3/4 mb-3"}),l.jsxs("div",{className:"flex gap-4",children:[l.jsx(Je,{className:"h-4 w-20"}),l.jsx(Je,{className:"h-4 w-12"}),l.jsx(Je,{className:"h-4 w-12"})]})]})}function $l({open:t,onOpenChange:e}){const{data:n,isLoading:s}=El(t);return l.jsx(kl,{open:t,onOpenChange:e,children:l.jsxs(Qr,{className:"max-w-2xl max-h-[85vh] p-0",children:[l.jsxs(Xr,{className:"p-6 pb-0",children:[l.jsxs(Zr,{className:"flex items-center gap-2 text-xl",children:[l.jsx(ns,{className:"h-5 w-5 text-primary"}),"Public Repositories",n&&l.jsxs("span",{className:"text-sm font-normal text-muted-foreground",children:["(",n.length," repos)"]})]}),l.jsx(ea,{className:"sr-only",children:"Browse my public GitHub repositories"})]}),l.jsx(ta,{className:"h-[60vh] px-6 pb-6",children:l.jsx("div",{className:"space-y-3 pt-4",children:s?l.jsxs(l.Fragment,{children:[l.jsx(fn,{}),l.jsx(fn,{}),l.jsx(fn,{}),l.jsx(fn,{})]}):n&&n.length>0?n.map(r=>l.jsx(_l,{repo:r},r.id)):l.jsx("p",{className:"text-center text-muted-foreground py-8",children:"No repositories found"})})})]})})}const Us=["You can't catch me! 😆","Nice try! 👍","Too slow! 🏃‍♂️","Almost got me! 😏","Keep trying! 🎯","Haha, missed! 😂"],Fs=["Hi! 👋","Hello! 😊","Hey there! 🙌","Welcome! ✨"];function Pl(){const{data:t,isLoading:e}=wl(),[n,s]=w.useState({x:0,y:0}),[r,a]=w.useState({x:0,y:0}),[c,o]=w.useState(!1),[h,m]=w.useState(""),b=w.useRef(null),y=w.useRef(0),v=w.useRef(0),[d,S]=w.useState(!1),f=w.useRef(null),g=w.useRef(null),$=w.useCallback((D,ne)=>{s({x:D,y:ne})},[]);xl(r.x,r.y,$,{stiffness:120,damping:14,mass:1}),w.useEffect(()=>{if(f.current)return g.current=Ls.create(f.current,{resize:!0,useWorker:!0}),()=>{var D;(D=g.current)==null||D.reset(),g.current=null}},[]),w.useEffect(()=>{if(c){const D=setTimeout(()=>o(!1),2e3);return()=>clearTimeout(D)}},[c]);const N=w.useCallback(()=>{const D=Date.now();if(D-v.current<2500)return;v.current=D;const ne=Us[Math.floor(Math.random()*Us.length)];m(ne),o(!0)},[]),[A,H]=w.useState(!0);w.useEffect(()=>{if(typeof window<"u"&&typeof window.matchMedia=="function"){const D=window.matchMedia("(hover: hover) and (pointer: fine)");H(D.matches);const ne=re=>H(re.matches);return D.addEventListener("change",ne),()=>D.removeEventListener("change",ne)}},[]);const W=!A,K=w.useCallback(()=>{const ne=Date.now()+1e3,ue={startVelocity:30,spread:360,ticks:60,colors:["#00d4ff","#0099cc","#4d94ff","#1a75ff","#00bcd4","#0077b3"]},ge=g.current??Ls,C=(i,x)=>Math.random()*(x-i)+i,p=setInterval(()=>{const i=ne-Date.now();if(i<=0)return clearInterval(p);const x=600*(i/1e3);ge({...ue,particleCount:x,origin:{x:C(.1,.3),y:Math.random()-.2}}),ge({...ue,particleCount:x,origin:{x:C(.7,.9),y:Math.random()-.2}})},150)},[]),ce=w.useCallback(()=>{if(K(),o(!1),a({x:0,y:0}),W){const D=Date.now();if(D-v.current<2e3)return;v.current=D;const ne=Fs[Math.floor(Math.random()*Fs.length)];m(ne),o(!0)}},[W,K]),Y=w.useCallback((D,ne)=>{if(!b.current)return;const re=b.current.getBoundingClientRect(),ue=re.left+re.width/2,ge=re.top+re.height/2,C=D-ue,p=ne-ge,i=Math.sqrt(C*C+p*p),x=200,T=350;if(i<x&&i>0){y.current+=1,y.current>=3&&(N(),y.current=0);const E=Math.atan2(p,C),P=Math.pow((x-i)/x,.6),j=-Math.cos(E)*P*160,R=-Math.sin(E)*P*160,M=280;a(B=>({x:Math.max(-M,Math.min(M,B.x+j*.25)),y:Math.max(-M,Math.min(M,B.y+R*.25))}))}else i>T&&a(E=>Math.abs(E.x)<1&&Math.abs(E.y)<1?{x:0,y:0}:{x:E.x*.85,y:E.y*.85})},[N]),F=w.useCallback(()=>{a({x:0,y:0})},[]),J=w.useCallback(D=>{D.pointerType!=="touch"&&Y(D.clientX,D.clientY)},[Y]),oe=w.useCallback(D=>{D.pointerType!=="touch"&&F()},[F]),I=w.useCallback(D=>{Y(D.clientX,D.clientY)},[Y]),pe=w.useCallback(()=>{F()},[F]);return l.jsxs(l.Fragment,{children:[l.jsx("canvas",{ref:f,className:"fixed inset-0 pointer-events-none z-[9999]",style:{width:"100vw",height:"100vh"}}),l.jsxs("section",{className:"min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden pt-20",onPointerMove:J,onPointerLeave:oe,onMouseMove:I,onMouseLeave:pe,children:[l.jsx(vl,{}),l.jsx("div",{className:"container mx-auto px-6 relative z-10",children:l.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-12 lg:gap-20",children:[l.jsxs("div",{ref:b,className:"relative cursor-pointer",onPointerEnter:J,onPointerMove:J,onMouseEnter:I,onMouseMove:I,onClick:ce,style:{transform:`translate3d(${n.x}px, ${n.y}px, 0)`,willChange:"transform"},children:[l.jsx("div",{className:`absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-300 -top-16 md:-top-16 ${W?"top-full mt-4":"-top-16"} ${c?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-2 scale-95 pointer-events-none"}`,children:l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap shadow-lg",children:h}),l.jsx("div",{className:`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-l-transparent border-r-transparent ${W?"-top-2 border-b-8 border-b-primary":"-bottom-2 border-t-8 border-t-primary"}`})]})}),l.jsx("div",{className:"relative animate-scale-in",children:l.jsxs("div",{className:"relative select-none",children:[l.jsx("div",{className:"absolute inset-0 rounded-[50%] bg-gradient-to-r from-primary to-primary/50 blur-2xl opacity-50 animate-pulse-glow"}),e?l.jsx(Je,{className:"w-48 h-60 md:w-64 md:h-80 rounded-[45%]"}):l.jsx("img",{src:`${t==null?void 0:t.avatar_url}&s=256`,srcSet:`${t==null?void 0:t.avatar_url}&s=192 192w, ${t==null?void 0:t.avatar_url}&s=256 256w`,sizes:"(max-width: 768px) 192px, 256px",alt:(t==null?void 0:t.name)||"Profile",width:256,height:256,loading:"eager",decoding:"async",draggable:!1,className:"relative w-48 h-60 md:w-64 md:h-80 rounded-[45%] object-cover border-4 border-card shadow-2xl"})]})})]}),l.jsxs("div",{className:"text-center lg:text-left max-w-2xl",children:[l.jsx("p",{className:"text-primary font-mono text-sm md:text-base mb-4 opacity-0 animate-fade-in",style:{animationDelay:"0.2s"},children:"Hello, I'm"}),e?l.jsx(Je,{className:"h-16 w-64 mb-6"}):l.jsx("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold mb-6",children:l.jsx("span",{className:"shimmer-text",children:(t==null?void 0:t.name)||"Abdelrahman Saed"})}),l.jsxs("h2",{className:"text-xl md:text-2xl text-muted-foreground mb-6 opacity-0 animate-fade-in",style:{animationDelay:"0.4s"},children:["Lead Software Engineer ",l.jsx("a",{href:"https://istoria.app/en",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline",children:"@iStoria"})]}),e?l.jsx(Je,{className:"h-20 w-full mb-8"}):l.jsx("p",{className:"text-muted-foreground text-lg mb-8 leading-relaxed opacity-0 animate-fade-in",style:{animationDelay:"0.5s"},children:(t==null?void 0:t.bio)||"Passionate about building elegant solutions to complex problems. Crafting code that makes a difference."}),l.jsxs("div",{className:"flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-in",style:{animationDelay:"0.6s"},children:[l.jsx(ut,{variant:"hero",size:"lg",asChild:!0,children:l.jsx("a",{href:"#contact",children:"Get In Touch"})}),l.jsx(ut,{variant:"heroOutline",size:"lg",asChild:!0,children:l.jsxs("a",{href:"https://bnsaed.com/CV/cv.pdf",target:"_blank",rel:"noopener noreferrer",children:[l.jsx(br,{className:"mr-2 h-5 w-5"}),"Download CV"]})})]}),l.jsxs("div",{className:"flex items-center gap-6 mt-8 justify-center lg:justify-start opacity-0 animate-fade-in",style:{animationDelay:"0.7s"},children:[l.jsx("a",{href:"https://github.com/binSaed",target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-primary transition-colors",children:l.jsx(yr,{className:"h-6 w-6"})}),l.jsx("a",{href:"https://www.linkedin.com/in/binsaed/",target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-primary transition-colors",children:l.jsx(wr,{className:"h-6 w-6"})}),(t==null?void 0:t.public_repos)!==void 0&&l.jsxs("button",{onClick:()=>S(!0),className:"flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-medium",children:[l.jsx(ns,{className:"h-4 w-4"}),t.public_repos," Public Repos"]})]})]})]})}),l.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",children:l.jsx("a",{href:"#about",className:"text-muted-foreground hover:text-primary transition-colors",children:l.jsx(Ma,{className:"h-6 w-6"})})})]}),l.jsx($l,{open:d,onOpenChange:S})]})}function Al(){const[t,e]=w.useState(!1);w.useEffect(()=>{const s=()=>{e(window.scrollY>400)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.jsx(ut,{onClick:n,size:"icon",className:de("fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300","bg-primary hover:bg-primary/90 text-primary-foreground","hover:scale-110",t?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"),"aria-label":"Back to top",children:l.jsx(Da,{className:"h-5 w-5"})})}function Cl(){const[t,e]=w.useState(()=>{if(typeof window<"u"){const s=localStorage.getItem("theme");return s||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}return"dark"});return w.useEffect(()=>{const s=document.documentElement;t==="dark"?s.classList.add("dark"):s.classList.remove("dark"),localStorage.setItem("theme",t)},[t]),{theme:t,toggleTheme:()=>{e(s=>s==="dark"?"light":"dark")},setTheme:e}}const Ol=w.lazy(()=>Et(()=>import("./AboutSection-dGneOSDz.js"),__vite__mapDeps([0,1,2,3,4])).then(t=>({default:t.AboutSection}))),Nl=w.lazy(()=>Et(()=>import("./ProjectsSection-BByxCiw_.js"),__vite__mapDeps([5,1,2,3,4])).then(t=>({default:t.ProjectsSection}))),Il=w.lazy(()=>Et(()=>import("./ArticlesSection-DK9yUPf3.js"),__vite__mapDeps([6,1,2,3,7,4])).then(t=>({default:t.ArticlesSection}))),jl=w.lazy(()=>Et(()=>import("./SkillsSection-BpL9YdTx.js"),__vite__mapDeps([8,1,2,3,4])).then(t=>({default:t.SkillsSection}))),Ml=w.lazy(()=>Et(()=>import("./ContactSection-BhU17UQf.js"),__vite__mapDeps([9,1,2,3,10,4])).then(t=>({default:t.ContactSection}))),Dl=w.lazy(()=>Et(()=>import("./Footer-CcTzyMAZ.js"),__vite__mapDeps([11,1,2,10,4])).then(t=>({default:t.Footer}))),Ll=()=>{const{theme:t,toggleTheme:e}=Cl(),n=Zs();return w.useEffect(()=>{const r=setTimeout(()=>{if(n.hash){const a=document.querySelector(n.hash);a&&a.scrollIntoView({behavior:"smooth"})}},300);return()=>clearTimeout(r)},[n.hash,n.key]),l.jsxs("div",{className:"min-h-screen bg-background",children:[l.jsx(bl,{theme:t,toggleTheme:e}),l.jsxs("main",{children:[l.jsx(Pl,{}),l.jsxs(w.Suspense,{fallback:l.jsx("div",{className:"min-h-[200px]"}),children:[l.jsx(Ol,{}),l.jsx(Nl,{}),l.jsx(Il,{}),l.jsx(jl,{}),l.jsx(Ml,{})]})]}),l.jsx(w.Suspense,{fallback:null,children:l.jsx(Dl,{})}),l.jsx(Al,{})]})},Hs="cached_ip",Ul=24*60*60*1e3,Fl=async()=>{const t=localStorage.getItem(Hs);if(t){const{ip:e,timestamp:n}=JSON.parse(t);if(Date.now()-n<Ul)return e}try{const n=await(await fetch("https://api.ipify.org?format=json")).json();return localStorage.setItem(Hs,JSON.stringify({ip:n.ip,timestamp:Date.now()})),n.ip}catch{return"unknown"}},Nn="visitor_tracked",Hl="https://script.google.com/macros/s/AKfycbw6H3kR0vXekN0JWI0SAKMD20E3CgODWHCsEXOxs0P5QCtIVcK4/exec",Bl=()=>{w.useEffect(()=>{(async()=>{if(!localStorage.getItem(Nn))try{const e=await Fl(),n=JSON.stringify({ip:e,userAgent:navigator.userAgent,language:navigator.language,platform:navigator.platform,screenSize:`${window.screen.width}x${window.screen.height}`,referrer:document.referrer||"direct",page:window.location.pathname}),s=new URLSearchParams;s.append("message",Nn),s.append("sendAt",new Date().toISOString()),s.append("userInfo",n),await fetch(Hl,{method:"POST",mode:"no-cors",body:s}),localStorage.setItem(Nn,new Date().toISOString())}catch{}})()},[])},es=[{slug:"flutter-cached-pdfview-guide",title:"Building a Cached PDF Viewer in Flutter",description:"Learn how to implement an efficient PDF viewer with caching support for iOS and Android using flutter_cached_pdfview.",date:"2024-01-15",readTime:"5 min read",tags:["Flutter","Dart","PDF","Mobile"],content:`
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
`}];function ec(t){return es.find(e=>e.slug===t)}const Bs=["home","about","projects","articles","skills","contact"],le={owner:"Abdelrahman Saed",alias:"binSaed",email:"me@bnsaed.com",url:"https://bnsaed.com",github:"https://github.com/binSaed",linkedin:"https://www.linkedin.com/in/binsaed/",cv:"https://bnsaed.com/CV/cv.pdf"};function Gl(){const t=er();w.useEffect(()=>{if(typeof navigator>"u"||!navigator.modelContext)return;const e=navigator.modelContext,n=[],s=[{name:"navigate_to_section",title:"Scroll to a section",description:"Navigate the homepage to one of its anchor sections: home, about, projects, articles, skills, or contact.",inputSchema:{type:"object",properties:{section:{type:"string",enum:Bs,description:"The section anchor to scroll to."}},required:["section"]},execute:async r=>{const a=String(r.section??"");return Bs.includes(a)?(t(a==="home"?"/":`/#${a}`),{ok:!0,section:a}):{ok:!1,error:`Unknown section: ${a}`}}},{name:"list_articles",title:"List published articles",description:"Return the slug, title, description, date, and tags for every article published on bnsaed.com.",inputSchema:{type:"object",properties:{}},execute:async()=>es.map(r=>({slug:r.slug,title:r.title,description:r.description,date:r.date,readTime:r.readTime,tags:r.tags,url:`${le.url}/articles/${r.slug}`}))},{name:"open_article",title:"Open an article",description:"Navigate to a specific article by slug. Use list_articles first to discover valid slugs.",inputSchema:{type:"object",properties:{slug:{type:"string",description:"Article slug, e.g. 'flutter-cached-pdfview-guide'."}},required:["slug"]},execute:async r=>{const a=String(r.slug??""),c=es.find(o=>o.slug===a);return c?(t(`/articles/${a}`),{ok:!0,url:`${le.url}/articles/${a}`,title:c.title}):{ok:!1,error:`No article with slug '${a}'`}}},{name:"get_contact_info",title:"Get contact details",description:"Return the preferred ways to contact Abdelrahman Saed (email, GitHub, LinkedIn, contact form URL).",inputSchema:{type:"object",properties:{}},execute:async()=>({name:le.owner,alias:le.alias,email:le.email,mailto:`mailto:${le.email}`,contactForm:`${le.url}/#contact`,github:le.github,linkedin:le.linkedin,preferredChannel:"email"})},{name:"compose_email",title:"Open a pre-filled email",description:"Open the user's mail client with a pre-filled email to Abdelrahman Saed. Use this instead of submitting the contact form programmatically.",inputSchema:{type:"object",properties:{subject:{type:"string",description:"Email subject line."},body:{type:"string",description:"Email body, plain text."}},required:["subject"]},execute:async r=>{const a=encodeURIComponent(String(r.subject??"")),c=encodeURIComponent(String(r.body??"")),o=`mailto:${le.email}?subject=${a}&body=${c}`;return window.location.href=o,{ok:!0,mailto:o}}},{name:"download_cv",title:"Download the CV",description:"Open the PDF CV of Abdelrahman Saed in a new tab.",inputSchema:{type:"object",properties:{}},execute:async()=>(window.open(le.cv,"_blank","noopener,noreferrer"),{ok:!0,url:le.cv})},{name:"get_site_metadata",title:"Get site metadata",description:"Return identity and discovery metadata for bnsaed.com: owner, URL, well-known endpoints, and current page.",inputSchema:{type:"object",properties:{}},execute:async()=>({owner:le.owner,alias:le.alias,url:le.url,currentPath:window.location.pathname+window.location.hash,wellKnown:{apiCatalog:`${le.url}/.well-known/api-catalog`,agentSkills:`${le.url}/.well-known/agent-skills/index.json`,mcpServerCard:`${le.url}/.well-known/mcp/server-card.json`,robots:`${le.url}/robots.txt`,sitemap:`${le.url}/sitemap.xml`},contentSignal:{search:"yes","ai-input":"yes","ai-train":"no"}})}];try{for(const r of s){const a=e.registerTool(r);a&&typeof a.unregister=="function"&&n.push(a)}}catch{}return()=>{for(const r of n)try{r.unregister()}catch{}}},[t])}const ql=w.lazy(()=>Et(()=>import("./ArticlePage-BGkYgJdO.js"),__vite__mapDeps([12,1,2,11,10,4,7]))),zl=new ki,Jl=()=>(Gl(),null),Wl=()=>(Bl(),l.jsx(Vr,{children:l.jsx(_i,{client:zl,children:l.jsxs(si,{children:[l.jsx(Ro,{}),l.jsx(ni,{}),l.jsxs(pa,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:[l.jsx(Jl,{}),l.jsx(w.Suspense,{fallback:l.jsx("div",{className:"min-h-screen bg-background"}),children:l.jsxs(ma,{children:[l.jsx(En,{path:"/",element:l.jsx(Ll,{})}),l.jsx(En,{path:"/articles/:slug",element:l.jsx(ql,{})}),l.jsx(En,{path:"*",element:l.jsx(fa,{to:"/",replace:!0})})]})})]})]})})}));mr(document.getElementById("root")).render(l.jsx(Wl,{}));export{ut as B,La as E,yr as G,bl as H,wr as L,ns as S,vr as X,Zl as a,wl as b,De as c,es as d,de as e,Fl as f,ec as g,Xl as h,Cl as u};
