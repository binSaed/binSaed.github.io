const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutSection-riv_L70Y.js","assets/SectionHeader-CTCdkXRB.js","assets/react-vendor-iqlcZCOr.js","assets/ExperienceSection-CfAi5m89.js","assets/ProjectsSection-DycVkwwC.js","assets/arrow-up-right-QgtQ2Zgb.js","assets/CaseStudiesSection-CUwrTGLJ.js","assets/caseStudies-TM_wzDLU.js","assets/ArticlesSection-UWfgldaI.js","assets/SkillsSection-BgEQERyC.js","assets/smartphone-DePDoaw9.js","assets/RecommendationsSection-DImY58Jt.js","assets/FAQSection-upw3cCEj.js","assets/AvailabilitySection-ePcpIwaf.js","assets/EngagementCards-C-oF703s.js","assets/clock-B_Cfa4cX.js","assets/ContactSection-DBCL4kcs.js","assets/Footer-BIFD_1QD.js","assets/ArticlePage-BykbW9-j.js","assets/MarkdownContent-Be3rMuvy.js","assets/RouteSuggestion-DRQOWeVD.js","assets/arrow-left-MSBX5YHC.js","assets/ArticlesPage-Jlm2m_wc.js","assets/RecommendationsPage-CZL41_5z.js","assets/ProjectsPage-ApcDKD7g.js","assets/CaseStudiesPage-CoLyAvBz.js","assets/CaseStudyPage-EFKS_nkJ.js","assets/HirePage-DzGasKSf.js","assets/NotFound-B6HZ74FK.js"])))=>i.map(i=>d[i]);
var ru=Object.defineProperty;var ha=e=>{throw TypeError(e)};var ou=(e,t,n)=>t in e?ru(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ot=(e,t,n)=>ou(e,typeof t!="symbol"?t+"":t,n),uo=(e,t,n)=>t.has(e)||ha("Cannot "+n);var w=(e,t,n)=>(uo(e,t,"read from private field"),n?n.call(e):t.get(e)),q=(e,t,n)=>t.has(e)?ha("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),F=(e,t,n,r)=>(uo(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),X=(e,t,n)=>(uo(e,t,"access private method"),n);var dr=(e,t,n,r)=>({set _(o){F(e,t,o,n)},get _(){return w(e,t,r)}});import{r as c,a as Ur,R as C,v as Fi,b as Hi,g as ys,u as ws,c as Ui,L as fa,B as su,d as au,e as st}from"./react-vendor-iqlcZCOr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const iu="modulepreload",lu=function(e){return"/"+e},pa={},ue=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=lu(u),u in pa)return;pa[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":iu,d||(p.as="script"),p.crossOrigin="",p.href=u,i&&p.setAttribute("nonce",i),document.head.appendChild(p),d)return new Promise((g,h)=>{p.addEventListener("load",g),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return o.then(a=>{for(const i of a||[])i.status==="rejected"&&s(i.reason);return t().catch(s)})};var Bi={exports:{}},Br={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cu=c,du=Symbol.for("react.element"),uu=Symbol.for("react.fragment"),hu=Object.prototype.hasOwnProperty,fu=cu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pu={key:!0,ref:!0,__self:!0,__source:!0};function qi(e,t,n){var r,o={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)hu.call(t,r)&&!pu.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:du,type:e,key:s,ref:a,props:o,_owner:fu.current}}Br.Fragment=uu;Br.jsx=qi;Br.jsxs=qi;Bi.exports=Br;var l=Bi.exports,zi,ma=Ur;zi=ma.createRoot,ma.hydrateRoot;const mu=1,gu=1e6;let ho=0;function bu(){return ho=(ho+1)%Number.MAX_SAFE_INTEGER,ho.toString()}const fo=new Map,ga=e=>{if(fo.has(e))return;const t=setTimeout(()=>{fo.delete(e),qn({type:"REMOVE_TOAST",toastId:e})},gu);fo.set(e,t)},yu=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,mu)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?ga(n):e.toasts.forEach(r=>{ga(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},kr=[];let Er={toasts:[]};function qn(e){Er=yu(Er,e),kr.forEach(t=>{t(Er)})}function wu({...e}){const t=bu(),n=o=>qn({type:"UPDATE_TOAST",toast:{...o,id:t}}),r=()=>qn({type:"DISMISS_TOAST",toastId:t});return qn({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:o=>{o||r()}}}),{id:t,dismiss:r,update:n}}function vu(){const[e,t]=c.useState(Er);return c.useEffect(()=>(kr.push(t),()=>{const n=kr.indexOf(t);n>-1&&kr.splice(n,1)}),[e]),{...e,toast:wu,dismiss:n=>qn({type:"DISMISS_TOAST",toastId:n})}}function te(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function ba(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Wt(...e){return t=>{let n=!1;const r=e.map(o=>{const s=ba(o,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let o=0;o<r.length;o++){const s=r[o];typeof s=="function"?s():ba(e[o],null)}}}}function he(...e){return c.useCallback(Wt(...e),e)}function xu(e,t){const n=c.createContext(t),r=s=>{const{children:a,...i}=s,u=c.useMemo(()=>i,Object.values(i));return l.jsx(n.Provider,{value:u,children:a})};r.displayName=e+"Provider";function o(s){const a=c.useContext(n);if(a)return a;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return[r,o]}function Pn(e,t=[]){let n=[];function r(s,a){const i=c.createContext(a),u=n.length;n=[...n,a];const d=p=>{var v;const{scope:g,children:h,...y}=p,m=((v=g==null?void 0:g[e])==null?void 0:v[u])||i,b=c.useMemo(()=>y,Object.values(y));return l.jsx(m.Provider,{value:b,children:h})};d.displayName=s+"Provider";function f(p,g){var m;const h=((m=g==null?void 0:g[e])==null?void 0:m[u])||i,y=c.useContext(h);if(y)return y;if(a!==void 0)return a;throw new Error(`\`${p}\` must be used within \`${s}\``)}return[d,f]}const o=()=>{const s=n.map(a=>c.createContext(a));return function(i){const u=(i==null?void 0:i[e])||s;return c.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])}};return o.scopeName=e,[r,ku(o,...t)]}function ku(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const a=r.reduce((i,{useScope:u,scopeName:d})=>{const p=u(s)[`__scope${d}`];return{...i,...p}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function zn(e){const t=Su(e),n=c.forwardRef((r,o)=>{const{children:s,...a}=r,i=c.Children.toArray(s),u=i.find(Ru);if(u){const d=u.props.children,f=i.map(p=>p===u?c.Children.count(d)>1?c.Children.only(null):c.isValidElement(d)?d.props.children:null:p);return l.jsx(t,{...a,ref:o,children:c.isValidElement(d)?c.cloneElement(d,void 0,f):null})}return l.jsx(t,{...a,ref:o,children:s})});return n.displayName=`${e}.Slot`,n}var Eu=zn("Slot");function Su(e){const t=c.forwardRef((n,r)=>{const{children:o,...s}=n;if(c.isValidElement(o)){const a=Cu(o),i=Au(s,o.props);return o.type!==c.Fragment&&(i.ref=r?Wt(r,a):a),c.cloneElement(o,i)}return c.Children.count(o)>1?c.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Gi=Symbol("radix.slottable");function Tu(e){const t=({children:n})=>l.jsx(l.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Gi,t}function Ru(e){return c.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Gi}function Au(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...i)=>{const u=s(...i);return o(...i),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function Cu(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function _u(e){const t=e+"CollectionProvider",[n,r]=Pn(t),[o,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=m=>{const{scope:b,children:v}=m,x=C.useRef(null),k=C.useRef(new Map).current;return l.jsx(o,{scope:b,itemMap:k,collectionRef:x,children:v})};a.displayName=t;const i=e+"CollectionSlot",u=zn(i),d=C.forwardRef((m,b)=>{const{scope:v,children:x}=m,k=s(i,v),E=he(b,k.collectionRef);return l.jsx(u,{ref:E,children:x})});d.displayName=i;const f=e+"CollectionItemSlot",p="data-radix-collection-item",g=zn(f),h=C.forwardRef((m,b)=>{const{scope:v,children:x,...k}=m,E=C.useRef(null),S=he(b,E),R=s(f,v);return C.useEffect(()=>(R.itemMap.set(E,{ref:E,...k}),()=>void R.itemMap.delete(E))),l.jsx(g,{[p]:"",ref:S,children:x})});h.displayName=f;function y(m){const b=s(e+"CollectionConsumer",m);return C.useCallback(()=>{const x=b.collectionRef.current;if(!x)return[];const k=Array.from(x.querySelectorAll(`[${p}]`));return Array.from(b.itemMap.values()).sort((R,A)=>k.indexOf(R.ref.current)-k.indexOf(A.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:a,Slot:d,ItemSlot:h},y,r]}var Pu=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ee=Pu.reduce((e,t)=>{const n=zn(`Primitive.${t}`),r=c.forwardRef((o,s)=>{const{asChild:a,...i}=o,u=a?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(u,{...i,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Wi(e,t){e&&Ur.flushSync(()=>e.dispatchEvent(t))}function me(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Nu(e,t=globalThis==null?void 0:globalThis.document){const n=me(e);c.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Ou="DismissableLayer",Fo="dismissableLayer.update",ju="dismissableLayer.pointerDownOutside",Iu="dismissableLayer.focusOutside",ya,Vi=c.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),qr=c.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:s,onInteractOutside:a,onDismiss:i,...u}=e,d=c.useContext(Vi),[f,p]=c.useState(null),g=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,h]=c.useState({}),y=he(t,A=>p(A)),m=Array.from(d.layers),[b]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),v=m.indexOf(b),x=f?m.indexOf(f):-1,k=d.layersWithOutsidePointerEventsDisabled.size>0,E=x>=v,S=Du(A=>{const L=A.target,P=[...d.branches].some($=>$.contains(L));!E||P||(o==null||o(A),a==null||a(A),A.defaultPrevented||i==null||i())},g),R=Lu(A=>{const L=A.target;[...d.branches].some($=>$.contains(L))||(s==null||s(A),a==null||a(A),A.defaultPrevented||i==null||i())},g);return Nu(A=>{x===d.layers.size-1&&(r==null||r(A),!A.defaultPrevented&&i&&(A.preventDefault(),i()))},g),c.useEffect(()=>{if(f)return n&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(ya=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),wa(),()=>{n&&d.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=ya)}},[f,g,n,d]),c.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),wa())},[f,d]),c.useEffect(()=>{const A=()=>h({});return document.addEventListener(Fo,A),()=>document.removeEventListener(Fo,A)},[]),l.jsx(ee.div,{...u,ref:y,style:{pointerEvents:k?E?"auto":"none":void 0,...e.style},onFocusCapture:te(e.onFocusCapture,R.onFocusCapture),onBlurCapture:te(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:te(e.onPointerDownCapture,S.onPointerDownCapture)})});qr.displayName=Ou;var $u="DismissableLayerBranch",Ji=c.forwardRef((e,t)=>{const n=c.useContext(Vi),r=c.useRef(null),o=he(t,r);return c.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),l.jsx(ee.div,{...e,ref:o})});Ji.displayName=$u;function Du(e,t=globalThis==null?void 0:globalThis.document){const n=me(e),r=c.useRef(!1),o=c.useRef(()=>{});return c.useEffect(()=>{const s=i=>{if(i.target&&!r.current){let u=function(){Ki(ju,n,d,{discrete:!0})};const d={originalEvent:i};i.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=u,t.addEventListener("click",o.current,{once:!0})):u()}else t.removeEventListener("click",o.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",s),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Lu(e,t=globalThis==null?void 0:globalThis.document){const n=me(e),r=c.useRef(!1);return c.useEffect(()=>{const o=s=>{s.target&&!r.current&&Ki(Iu,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function wa(){const e=new CustomEvent(Fo);document.dispatchEvent(e)}function Ki(e,t,n,{discrete:r}){const o=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Wi(o,s):o.dispatchEvent(s)}var Mu=qr,Fu=Ji,Xe=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{},Hu="Portal",vs=c.forwardRef((e,t)=>{var i;const{container:n,...r}=e,[o,s]=c.useState(!1);Xe(()=>s(!0),[]);const a=n||o&&((i=globalThis==null?void 0:globalThis.document)==null?void 0:i.body);return a?Fi.createPortal(l.jsx(ee.div,{...r,ref:t}),a):null});vs.displayName=Hu;function Uu(e,t){return c.useReducer((n,r)=>t[n][r]??n,e)}var et=e=>{const{present:t,children:n}=e,r=Bu(t),o=typeof n=="function"?n({present:r.isPresent}):c.Children.only(n),s=he(r.ref,qu(o));return typeof n=="function"||r.isPresent?c.cloneElement(o,{ref:s}):null};et.displayName="Presence";function Bu(e){const[t,n]=c.useState(),r=c.useRef(null),o=c.useRef(e),s=c.useRef("none"),a=e?"mounted":"unmounted",[i,u]=Uu(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const d=ur(r.current);s.current=i==="mounted"?d:"none"},[i]),Xe(()=>{const d=r.current,f=o.current;if(f!==e){const g=s.current,h=ur(d);e?u("MOUNT"):h==="none"||(d==null?void 0:d.display)==="none"?u("UNMOUNT"):u(f&&g!==h?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,u]),Xe(()=>{if(t){let d;const f=t.ownerDocument.defaultView??window,p=h=>{const m=ur(r.current).includes(h.animationName);if(h.target===t&&m&&(u("ANIMATION_END"),!o.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",d=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},g=h=>{h.target===t&&(s.current=ur(r.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{f.clearTimeout(d),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:c.useCallback(d=>{r.current=d?getComputedStyle(d):null,n(d)},[])}}function ur(e){return(e==null?void 0:e.animationName)||"none"}function qu(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var zu=Hi[" useInsertionEffect ".trim().toString()]||Xe;function Yi({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,s,a]=Gu({defaultProp:t,onChange:n}),i=e!==void 0,u=i?e:o;{const f=c.useRef(e!==void 0);c.useEffect(()=>{const p=f.current;p!==i&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=i},[i,r])}const d=c.useCallback(f=>{var p;if(i){const g=Wu(f)?f(e):f;g!==e&&((p=a.current)==null||p.call(a,g))}else s(f)},[i,e,s,a]);return[u,d]}function Gu({defaultProp:e,onChange:t}){const[n,r]=c.useState(e),o=c.useRef(n),s=c.useRef(t);return zu(()=>{s.current=t},[t]),c.useEffect(()=>{var a;o.current!==n&&((a=s.current)==null||a.call(s,n),o.current=n)},[n,o]),[n,r,s]}function Wu(e){return typeof e=="function"}var Vu=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Ju="VisuallyHidden",zr=c.forwardRef((e,t)=>l.jsx(ee.span,{...e,ref:t,style:{...Vu,...e.style}}));zr.displayName=Ju;var Ku=zr,xs="ToastProvider",[ks,Yu,Qu]=_u("Toast"),[Qi,gv]=Pn("Toast",[Qu]),[Xu,Gr]=Qi(xs),Xi=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:s=50,children:a}=e,[i,u]=c.useState(null),[d,f]=c.useState(0),p=c.useRef(!1),g=c.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${xs}\`. Expected non-empty \`string\`.`),l.jsx(ks.Provider,{scope:t,children:l.jsx(Xu,{scope:t,label:n,duration:r,swipeDirection:o,swipeThreshold:s,toastCount:d,viewport:i,onViewportChange:u,onToastAdd:c.useCallback(()=>f(h=>h+1),[]),onToastRemove:c.useCallback(()=>f(h=>h-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:g,children:a})})};Xi.displayName=xs;var Zi="ToastViewport",Zu=["F8"],Ho="toast.viewportPause",Uo="toast.viewportResume",el=c.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=Zu,label:o="Notifications ({hotkey})",...s}=e,a=Gr(Zi,n),i=Yu(n),u=c.useRef(null),d=c.useRef(null),f=c.useRef(null),p=c.useRef(null),g=he(t,p,a.onViewportChange),h=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),y=a.toastCount>0;c.useEffect(()=>{const b=v=>{var k;r.length!==0&&r.every(E=>v[E]||v.code===E)&&((k=p.current)==null||k.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[r]),c.useEffect(()=>{const b=u.current,v=p.current;if(y&&b&&v){const x=()=>{if(!a.isClosePausedRef.current){const R=new CustomEvent(Ho);v.dispatchEvent(R),a.isClosePausedRef.current=!0}},k=()=>{if(a.isClosePausedRef.current){const R=new CustomEvent(Uo);v.dispatchEvent(R),a.isClosePausedRef.current=!1}},E=R=>{!b.contains(R.relatedTarget)&&k()},S=()=>{b.contains(document.activeElement)||k()};return b.addEventListener("focusin",x),b.addEventListener("focusout",E),b.addEventListener("pointermove",x),b.addEventListener("pointerleave",S),window.addEventListener("blur",x),window.addEventListener("focus",k),()=>{b.removeEventListener("focusin",x),b.removeEventListener("focusout",E),b.removeEventListener("pointermove",x),b.removeEventListener("pointerleave",S),window.removeEventListener("blur",x),window.removeEventListener("focus",k)}}},[y,a.isClosePausedRef]);const m=c.useCallback(({tabbingDirection:b})=>{const x=i().map(k=>{const E=k.ref.current,S=[E,...hh(E)];return b==="forwards"?S:S.reverse()});return(b==="forwards"?x.reverse():x).flat()},[i]);return c.useEffect(()=>{const b=p.current;if(b){const v=x=>{var S,R,A;const k=x.altKey||x.ctrlKey||x.metaKey;if(x.key==="Tab"&&!k){const L=document.activeElement,P=x.shiftKey;if(x.target===b&&P){(S=d.current)==null||S.focus();return}const I=m({tabbingDirection:P?"backwards":"forwards"}),G=I.findIndex(j=>j===L);po(I.slice(G+1))?x.preventDefault():P?(R=d.current)==null||R.focus():(A=f.current)==null||A.focus()}};return b.addEventListener("keydown",v),()=>b.removeEventListener("keydown",v)}},[i,m]),l.jsxs(Fu,{ref:u,role:"region","aria-label":o.replace("{hotkey}",h),tabIndex:-1,style:{pointerEvents:y?void 0:"none"},children:[y&&l.jsx(Bo,{ref:d,onFocusFromOutsideViewport:()=>{const b=m({tabbingDirection:"forwards"});po(b)}}),l.jsx(ks.Slot,{scope:n,children:l.jsx(ee.ol,{tabIndex:-1,...s,ref:g})}),y&&l.jsx(Bo,{ref:f,onFocusFromOutsideViewport:()=>{const b=m({tabbingDirection:"backwards"});po(b)}})]})});el.displayName=Zi;var tl="ToastFocusProxy",Bo=c.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,s=Gr(tl,n);return l.jsx(zr,{"aria-hidden":!0,tabIndex:0,...o,ref:t,style:{position:"fixed"},onFocus:a=>{var d;const i=a.relatedTarget;!((d=s.viewport)!=null&&d.contains(i))&&r()}})});Bo.displayName=tl;var er="Toast",eh="toast.swipeStart",th="toast.swipeMove",nh="toast.swipeCancel",rh="toast.swipeEnd",nl=c.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:o,onOpenChange:s,...a}=e,[i,u]=Yi({prop:r,defaultProp:o??!0,onChange:s,caller:er});return l.jsx(et,{present:n||i,children:l.jsx(ah,{open:i,...a,ref:t,onClose:()=>u(!1),onPause:me(e.onPause),onResume:me(e.onResume),onSwipeStart:te(e.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:te(e.onSwipeMove,d=>{const{x:f,y:p}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${f}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${p}px`)}),onSwipeCancel:te(e.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:te(e.onSwipeEnd,d=>{const{x:f,y:p}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${f}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${p}px`),u(!1)})})})});nl.displayName=er;var[oh,sh]=Qi(er,{onClose(){}}),ah=c.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:o,open:s,onClose:a,onEscapeKeyDown:i,onPause:u,onResume:d,onSwipeStart:f,onSwipeMove:p,onSwipeCancel:g,onSwipeEnd:h,...y}=e,m=Gr(er,n),[b,v]=c.useState(null),x=he(t,j=>v(j)),k=c.useRef(null),E=c.useRef(null),S=o||m.duration,R=c.useRef(0),A=c.useRef(S),L=c.useRef(0),{onToastAdd:P,onToastRemove:$}=m,U=me(()=>{var J;(b==null?void 0:b.contains(document.activeElement))&&((J=m.viewport)==null||J.focus()),a()}),I=c.useCallback(j=>{!j||j===1/0||(window.clearTimeout(L.current),R.current=new Date().getTime(),L.current=window.setTimeout(U,j))},[U]);c.useEffect(()=>{const j=m.viewport;if(j){const J=()=>{I(A.current),d==null||d()},B=()=>{const W=new Date().getTime()-R.current;A.current=A.current-W,window.clearTimeout(L.current),u==null||u()};return j.addEventListener(Ho,B),j.addEventListener(Uo,J),()=>{j.removeEventListener(Ho,B),j.removeEventListener(Uo,J)}}},[m.viewport,S,u,d,I]),c.useEffect(()=>{s&&!m.isClosePausedRef.current&&I(S)},[s,S,m.isClosePausedRef,I]),c.useEffect(()=>(P(),()=>$()),[P,$]);const G=c.useMemo(()=>b?cl(b):null,[b]);return m.viewport?l.jsxs(l.Fragment,{children:[G&&l.jsx(ih,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:G}),l.jsx(oh,{scope:n,onClose:U,children:Ur.createPortal(l.jsx(ks.ItemSlot,{scope:n,children:l.jsx(Mu,{asChild:!0,onEscapeKeyDown:te(i,()=>{m.isFocusedToastEscapeKeyDownRef.current||U(),m.isFocusedToastEscapeKeyDownRef.current=!1}),children:l.jsx(ee.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":m.swipeDirection,...y,ref:x,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:te(e.onKeyDown,j=>{j.key==="Escape"&&(i==null||i(j.nativeEvent),j.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,U()))}),onPointerDown:te(e.onPointerDown,j=>{j.button===0&&(k.current={x:j.clientX,y:j.clientY})}),onPointerMove:te(e.onPointerMove,j=>{if(!k.current)return;const J=j.clientX-k.current.x,B=j.clientY-k.current.y,W=!!E.current,_=["left","right"].includes(m.swipeDirection),N=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,K=_?N(0,J):0,ae=_?0:N(0,B),T=j.pointerType==="touch"?10:2,O={x:K,y:ae},M={originalEvent:j,delta:O};W?(E.current=O,hr(th,p,M,{discrete:!1})):va(O,m.swipeDirection,T)?(E.current=O,hr(eh,f,M,{discrete:!1}),j.target.setPointerCapture(j.pointerId)):(Math.abs(J)>T||Math.abs(B)>T)&&(k.current=null)}),onPointerUp:te(e.onPointerUp,j=>{const J=E.current,B=j.target;if(B.hasPointerCapture(j.pointerId)&&B.releasePointerCapture(j.pointerId),E.current=null,k.current=null,J){const W=j.currentTarget,_={originalEvent:j,delta:J};va(J,m.swipeDirection,m.swipeThreshold)?hr(rh,h,_,{discrete:!0}):hr(nh,g,_,{discrete:!0}),W.addEventListener("click",N=>N.preventDefault(),{once:!0})}})})})}),m.viewport)})]}):null}),ih=e=>{const{__scopeToast:t,children:n,...r}=e,o=Gr(er,t),[s,a]=c.useState(!1),[i,u]=c.useState(!1);return dh(()=>a(!0)),c.useEffect(()=>{const d=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(d)},[]),i?null:l.jsx(vs,{asChild:!0,children:l.jsx(zr,{...r,children:s&&l.jsxs(l.Fragment,{children:[o.label," ",n]})})})},lh="ToastTitle",rl=c.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return l.jsx(ee.div,{...r,ref:t})});rl.displayName=lh;var ch="ToastDescription",ol=c.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return l.jsx(ee.div,{...r,ref:t})});ol.displayName=ch;var sl="ToastAction",al=c.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?l.jsx(ll,{altText:n,asChild:!0,children:l.jsx(Es,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${sl}\`. Expected non-empty \`string\`.`),null)});al.displayName=sl;var il="ToastClose",Es=c.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,o=sh(il,n);return l.jsx(ll,{asChild:!0,children:l.jsx(ee.button,{type:"button",...r,ref:t,onClick:te(e.onClick,o.onClose)})})});Es.displayName=il;var ll=c.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...o}=e;return l.jsx(ee.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:t})});function cl(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),uh(r)){const o=r.ariaHidden||r.hidden||r.style.display==="none",s=r.dataset.radixToastAnnounceExclude==="";if(!o)if(s){const a=r.dataset.radixToastAnnounceAlt;a&&t.push(a)}else t.push(...cl(r))}}),t}function hr(e,t,n,{discrete:r}){const o=n.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Wi(o,s):o.dispatchEvent(s)}var va=(e,t,n=0)=>{const r=Math.abs(e.x),o=Math.abs(e.y),s=r>o;return t==="left"||t==="right"?s&&r>n:!s&&o>n};function dh(e=()=>{}){const t=me(e);Xe(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function uh(e){return e.nodeType===e.ELEMENT_NODE}function hh(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function po(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var fh=Xi,dl=el,ul=nl,hl=rl,fl=ol,pl=al,ml=Es;function gl(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=gl(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function bl(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=gl(e))&&(r&&(r+=" "),r+=t);return r}const xa=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,ka=bl,Ss=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return ka(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:s}=t,a=Object.keys(o).map(d=>{const f=n==null?void 0:n[d],p=s==null?void 0:s[d];if(f===null)return null;const g=xa(f)||xa(p);return o[d][g]}),i=n&&Object.entries(n).reduce((d,f)=>{let[p,g]=f;return g===void 0||(d[p]=g),d},{}),u=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((d,f)=>{let{class:p,className:g,...h}=f;return Object.entries(h).every(y=>{let[m,b]=y;return Array.isArray(b)?b.includes({...s,...i}[m]):{...s,...i}[m]===b})?[...d,p,g]:d},[]);return ka(e,a,u,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yl=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:s,iconNode:a,...i},u)=>c.createElement("svg",{ref:u,...mh,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:yl("lucide",o),...i},[...a.map(([d,f])=>c.createElement(d,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=(e,t)=>{const n=c.forwardRef(({className:r,...o},s)=>c.createElement(gh,{ref:s,iconNode:t,className:yl(`lucide-${ph(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=se("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=se("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=se("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=se("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=se("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=se("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=se("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=se("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=se("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=se("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=se("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=se("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=se("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=se("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=se("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=se("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=se("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=se("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=se("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=se("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=se("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=se("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=se("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=se("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=se("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=se("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=se("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=se("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),_s="-",jh=e=>{const t=$h(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:a=>{const i=a.split(_s);return i[0]===""&&i.length!==1&&i.shift(),El(i,t)||Ih(a)},getConflictingClassGroupIds:(a,i)=>{const u=n[a]||[];return i&&r[a]?[...u,...r[a]]:u}}},El=(e,t)=>{var a;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?El(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const s=e.join(_s);return(a=t.validators.find(({validator:i})=>i(s)))==null?void 0:a.classGroupId},Ea=/^\[(.+)\]$/,Ih=e=>{if(Ea.test(e)){const t=Ea.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},$h=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Lh(Object.entries(e.classGroups),n).forEach(([s,a])=>{qo(a,r,s,t)}),r},qo=(e,t,n,r)=>{e.forEach(o=>{if(typeof o=="string"){const s=o===""?t:Sa(t,o);s.classGroupId=n;return}if(typeof o=="function"){if(Dh(o)){qo(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([s,a])=>{qo(a,Sa(t,s),n,r)})})},Sa=(e,t)=>{let n=e;return t.split(_s).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Dh=e=>e.isThemeGetter,Lh=(e,t)=>t?e.map(([n,r])=>{const o=r.map(s=>typeof s=="string"?t+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([a,i])=>[t+a,i])):s);return[n,o]}):e,Mh=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const o=(s,a)=>{n.set(s,a),t++,t>e&&(t=0,r=n,n=new Map)};return{get(s){let a=n.get(s);if(a!==void 0)return a;if((a=r.get(s))!==void 0)return o(s,a),a},set(s,a){n.has(s)?n.set(s,a):o(s,a)}}},Sl="!",Fh=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,o=t[0],s=t.length,a=i=>{const u=[];let d=0,f=0,p;for(let b=0;b<i.length;b++){let v=i[b];if(d===0){if(v===o&&(r||i.slice(b,b+s)===t)){u.push(i.slice(f,b)),f=b+s;continue}if(v==="/"){p=b;continue}}v==="["?d++:v==="]"&&d--}const g=u.length===0?i:i.substring(f),h=g.startsWith(Sl),y=h?g.substring(1):g,m=p&&p>f?p-f:void 0;return{modifiers:u,hasImportantModifier:h,baseClassName:y,maybePostfixModifierPosition:m}};return n?i=>n({className:i,parseClassName:a}):a},Hh=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},Uh=e=>({cache:Mh(e.cacheSize),parseClassName:Fh(e),...jh(e)}),Bh=/\s+/,qh=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,s=[],a=e.trim().split(Bh);let i="";for(let u=a.length-1;u>=0;u-=1){const d=a[u],{modifiers:f,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:h}=n(d);let y=!!h,m=r(y?g.substring(0,h):g);if(!m){if(!y){i=d+(i.length>0?" "+i:i);continue}if(m=r(g),!m){i=d+(i.length>0?" "+i:i);continue}y=!1}const b=Hh(f).join(":"),v=p?b+Sl:b,x=v+m;if(s.includes(x))continue;s.push(x);const k=o(m,y);for(let E=0;E<k.length;++E){const S=k[E];s.push(v+S)}i=d+(i.length>0?" "+i:i)}return i};function zh(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Tl(t))&&(r&&(r+=" "),r+=n);return r}const Tl=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Tl(e[r]))&&(n&&(n+=" "),n+=t);return n};function Gh(e,...t){let n,r,o,s=a;function a(u){const d=t.reduce((f,p)=>p(f),e());return n=Uh(d),r=n.cache.get,o=n.cache.set,s=i,i(u)}function i(u){const d=r(u);if(d)return d;const f=qh(u,n);return o(u,f),f}return function(){return s(zh.apply(null,arguments))}}const le=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Rl=/^\[(?:([a-z-]+):)?(.+)\]$/i,Wh=/^\d+\/\d+$/,Vh=new Set(["px","full","screen"]),Jh=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Kh=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Yh=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Qh=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Xh=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,at=e=>cn(e)||Vh.has(e)||Wh.test(e),gt=e=>Nn(e,"length",af),cn=e=>!!e&&!Number.isNaN(Number(e)),bo=e=>Nn(e,"number",cn),Dn=e=>!!e&&Number.isInteger(Number(e)),Zh=e=>e.endsWith("%")&&cn(e.slice(0,-1)),Y=e=>Rl.test(e),bt=e=>Jh.test(e),ef=new Set(["length","size","percentage"]),tf=e=>Nn(e,ef,Al),nf=e=>Nn(e,"position",Al),rf=new Set(["image","url"]),of=e=>Nn(e,rf,cf),sf=e=>Nn(e,"",lf),Ln=()=>!0,Nn=(e,t,n)=>{const r=Rl.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},af=e=>Kh.test(e)&&!Yh.test(e),Al=()=>!1,lf=e=>Qh.test(e),cf=e=>Xh.test(e),df=()=>{const e=le("colors"),t=le("spacing"),n=le("blur"),r=le("brightness"),o=le("borderColor"),s=le("borderRadius"),a=le("borderSpacing"),i=le("borderWidth"),u=le("contrast"),d=le("grayscale"),f=le("hueRotate"),p=le("invert"),g=le("gap"),h=le("gradientColorStops"),y=le("gradientColorStopPositions"),m=le("inset"),b=le("margin"),v=le("opacity"),x=le("padding"),k=le("saturate"),E=le("scale"),S=le("sepia"),R=le("skew"),A=le("space"),L=le("translate"),P=()=>["auto","contain","none"],$=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto",Y,t],I=()=>[Y,t],G=()=>["",at,gt],j=()=>["auto",cn,Y],J=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],B=()=>["solid","dashed","dotted","double","none"],W=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],_=()=>["start","end","center","between","around","evenly","stretch"],N=()=>["","0",Y],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ae=()=>[cn,Y];return{cacheSize:500,separator:":",theme:{colors:[Ln],spacing:[at,gt],blur:["none","",bt,Y],brightness:ae(),borderColor:[e],borderRadius:["none","","full",bt,Y],borderSpacing:I(),borderWidth:G(),contrast:ae(),grayscale:N(),hueRotate:ae(),invert:N(),gap:I(),gradientColorStops:[e],gradientColorStopPositions:[Zh,gt],inset:U(),margin:U(),opacity:ae(),padding:I(),saturate:ae(),scale:ae(),sepia:N(),skew:ae(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",Y]}],container:["container"],columns:[{columns:[bt]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...J(),Y]}],overflow:[{overflow:$()}],"overflow-x":[{"overflow-x":$()}],"overflow-y":[{"overflow-y":$()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Dn,Y]}],basis:[{basis:U()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Y]}],grow:[{grow:N()}],shrink:[{shrink:N()}],order:[{order:["first","last","none",Dn,Y]}],"grid-cols":[{"grid-cols":[Ln]}],"col-start-end":[{col:["auto",{span:["full",Dn,Y]},Y]}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":[Ln]}],"row-start-end":[{row:["auto",{span:[Dn,Y]},Y]}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Y]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Y]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",..._()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",..._(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[..._(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Y,t]}],"min-w":[{"min-w":[Y,t,"min","max","fit"]}],"max-w":[{"max-w":[Y,t,"none","full","min","max","fit","prose",{screen:[bt]},bt]}],h:[{h:[Y,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Y,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Y,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Y,t,"auto","min","max","fit"]}],"font-size":[{text:["base",bt,gt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",bo]}],"font-family":[{font:[Ln]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Y]}],"line-clamp":[{"line-clamp":["none",cn,bo]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",at,Y]}],"list-image":[{"list-image":["none",Y]}],"list-style-type":[{list:["none","disc","decimal",Y]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",at,gt]}],"underline-offset":[{"underline-offset":["auto",at,Y]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Y]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Y]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...J(),nf]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",tf]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},of]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...B(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:B()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...B()]}],"outline-offset":[{"outline-offset":[at,Y]}],"outline-w":[{outline:[at,gt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[at,gt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",bt,sf]}],"shadow-color":[{shadow:[Ln]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...W(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":W()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",bt,Y]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[p]}],saturate:[{saturate:[k]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[k]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Y]}],duration:[{duration:ae()}],ease:[{ease:["linear","in","out","in-out",Y]}],delay:[{delay:ae()}],animate:[{animate:["none","spin","ping","pulse","bounce",Y]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[E]}],"scale-x":[{"scale-x":[E]}],"scale-y":[{"scale-y":[E]}],rotate:[{rotate:[Dn,Y]}],"translate-x":[{"translate-x":[L]}],"translate-y":[{"translate-y":[L]}],"skew-x":[{"skew-x":[R]}],"skew-y":[{"skew-y":[R]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Y]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Y]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Y]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[at,gt,bo]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},uf=Gh(df);function Q(...e){return uf(bl(e))}const hf=fh,Cl=c.forwardRef(({className:e,...t},n)=>l.jsx(dl,{ref:n,className:Q("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Cl.displayName=dl.displayName;const ff=Ss("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),_l=c.forwardRef(({className:e,variant:t,...n},r)=>l.jsx(ul,{ref:r,className:Q(ff({variant:t}),e),...n}));_l.displayName=ul.displayName;const pf=c.forwardRef(({className:e,...t},n)=>l.jsx(pl,{ref:n,className:Q("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));pf.displayName=pl.displayName;const Pl=c.forwardRef(({className:e,...t},n)=>l.jsx(ml,{ref:n,className:Q("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:l.jsx(Wr,{className:"h-4 w-4"})}));Pl.displayName=ml.displayName;const Nl=c.forwardRef(({className:e,...t},n)=>l.jsx(hl,{ref:n,className:Q("text-sm font-semibold",e),...t}));Nl.displayName=hl.displayName;const Ol=c.forwardRef(({className:e,...t},n)=>l.jsx(fl,{ref:n,className:Q("text-sm opacity-90",e),...t}));Ol.displayName=fl.displayName;function mf(){const{toasts:e}=vu();return l.jsxs(hf,{children:[e.map(function({id:t,title:n,description:r,action:o,...s}){return l.jsxs(_l,{...s,children:[l.jsxs("div",{className:"grid gap-1",children:[n&&l.jsx(Nl,{children:n}),r&&l.jsx(Ol,{children:r})]}),o,l.jsx(Pl,{})]},t)}),l.jsx(Cl,{})]})}var Ta=["light","dark"],gf="(prefers-color-scheme: dark)",bf=c.createContext(void 0),yf={setTheme:e=>{},themes:[]},wf=()=>{var e;return(e=c.useContext(bf))!=null?e:yf};c.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:o,defaultTheme:s,value:a,attrs:i,nonce:u})=>{let d=s==="system",f=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${i.map(y=>`'${y}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=o?Ta.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(y,m=!1,b=!0)=>{let v=a?a[y]:y,x=m?y+"|| ''":`'${v}'`,k="";return o&&b&&!m&&Ta.includes(y)&&(k+=`d.style.colorScheme = '${y}';`),n==="class"?m||v?k+=`c.add(${x})`:k+="null":v&&(k+=`d[s](n,${x})`),k},h=e?`!function(){${f}${g(e)}}()`:r?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${gf}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${a?`var x=${JSON.stringify(a)};`:""}${g(a?"x[e]":"e",!0)}}${d?"":"else{"+g(s,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${a?`var x=${JSON.stringify(a)};`:""}${g(a?"x[e]":"e",!0)}}else{${g(s,!1,!1)};}${p}}catch(t){}}();`;return c.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:h}})});var vf=e=>{switch(e){case"success":return Ef;case"info":return Tf;case"warning":return Sf;case"error":return Rf;default:return null}},xf=Array(12).fill(0),kf=({visible:e,className:t})=>C.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},C.createElement("div",{className:"sonner-spinner"},xf.map((n,r)=>C.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),Ef=C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},C.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Sf=C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},C.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Tf=C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},C.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Rf=C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},C.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Af=C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},C.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),C.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Cf=()=>{let[e,t]=C.useState(document.hidden);return C.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},zo=1,_f=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,o=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:zo++,s=this.toasts.find(i=>i.id===o),a=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(o)&&this.dismissedToasts.delete(o),s?this.toasts=this.toasts.map(i=>i.id===o?(this.publish({...i,...e,id:o,title:n}),{...i,...e,id:o,dismissible:a,title:n}):i):this.addToast({title:n,...r,dismissible:a,id:o}),o},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),o=n!==void 0,s,a=r.then(async u=>{if(s=["resolve",u],C.isValidElement(u))o=!1,this.create({id:n,type:"default",message:u});else if(Nf(u)&&!u.ok){o=!1;let d=typeof t.error=="function"?await t.error(`HTTP error! status: ${u.status}`):t.error,f=typeof t.description=="function"?await t.description(`HTTP error! status: ${u.status}`):t.description;this.create({id:n,type:"error",message:d,description:f})}else if(t.success!==void 0){o=!1;let d=typeof t.success=="function"?await t.success(u):t.success,f=typeof t.description=="function"?await t.description(u):t.description;this.create({id:n,type:"success",message:d,description:f})}}).catch(async u=>{if(s=["reject",u],t.error!==void 0){o=!1;let d=typeof t.error=="function"?await t.error(u):t.error,f=typeof t.description=="function"?await t.description(u):t.description;this.create({id:n,type:"error",message:d,description:f})}}).finally(()=>{var u;o&&(this.dismiss(n),n=void 0),(u=t.finally)==null||u.call(t)}),i=()=>new Promise((u,d)=>a.then(()=>s[0]==="reject"?d(s[1]):u(s[1])).catch(d));return typeof n!="string"&&typeof n!="number"?{unwrap:i}:Object.assign(n,{unwrap:i})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||zo++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},xe=new _f,Pf=(e,t)=>{let n=(t==null?void 0:t.id)||zo++;return xe.addToast({title:e,...t,id:n}),n},Nf=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",Of=Pf,jf=()=>xe.toasts,If=()=>xe.getActiveToasts(),Sr=Object.assign(Of,{success:xe.success,info:xe.info,warning:xe.warning,error:xe.error,custom:xe.custom,message:xe.message,promise:xe.promise,dismiss:xe.dismiss,loading:xe.loading},{getHistory:jf,getToasts:If});function $f(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}$f(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function fr(e){return e.label!==void 0}var Df=3,Lf="32px",Mf="16px",Ra=4e3,Ff=356,Hf=14,Uf=20,Bf=200;function Me(...e){return e.filter(Boolean).join(" ")}function qf(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var zf=e=>{var t,n,r,o,s,a,i,u,d,f,p;let{invert:g,toast:h,unstyled:y,interacting:m,setHeights:b,visibleToasts:v,heights:x,index:k,toasts:E,expanded:S,removeToast:R,defaultRichColors:A,closeButton:L,style:P,cancelButtonStyle:$,actionButtonStyle:U,className:I="",descriptionClassName:G="",duration:j,position:J,gap:B,loadingIcon:W,expandByDefault:_,classNames:N,icons:K,closeButtonAriaLabel:ae="Close toast",pauseWhenPageIsHidden:T}=e,[O,M]=C.useState(null),[D,z]=C.useState(null),[H,re]=C.useState(!1),[ie,we]=C.useState(!1),[Ge,je]=C.useState(!1),[Ie,ir]=C.useState(!1),[ao,lr]=C.useState(!1),[io,In]=C.useState(0),[Qt,aa]=C.useState(0),$n=C.useRef(h.duration||j||Ra),ia=C.useRef(null),jt=C.useRef(null),Jd=k===0,Kd=k+1<=v,Ce=h.type,Xt=h.dismissible!==!1,Yd=h.className||"",Qd=h.descriptionClassName||"",cr=C.useMemo(()=>x.findIndex(V=>V.toastId===h.id)||0,[x,h.id]),Xd=C.useMemo(()=>{var V;return(V=h.closeButton)!=null?V:L},[h.closeButton,L]),la=C.useMemo(()=>h.duration||j||Ra,[h.duration,j]),lo=C.useRef(0),Zt=C.useRef(0),ca=C.useRef(0),en=C.useRef(null),[Zd,eu]=J.split("-"),da=C.useMemo(()=>x.reduce((V,oe,ce)=>ce>=cr?V:V+oe.height,0),[x,cr]),ua=Cf(),tu=h.invert||g,co=Ce==="loading";Zt.current=C.useMemo(()=>cr*B+da,[cr,da]),C.useEffect(()=>{$n.current=la},[la]),C.useEffect(()=>{re(!0)},[]),C.useEffect(()=>{let V=jt.current;if(V){let oe=V.getBoundingClientRect().height;return aa(oe),b(ce=>[{toastId:h.id,height:oe,position:h.position},...ce]),()=>b(ce=>ce.filter($e=>$e.toastId!==h.id))}},[b,h.id]),C.useLayoutEffect(()=>{if(!H)return;let V=jt.current,oe=V.style.height;V.style.height="auto";let ce=V.getBoundingClientRect().height;V.style.height=oe,aa(ce),b($e=>$e.find(De=>De.toastId===h.id)?$e.map(De=>De.toastId===h.id?{...De,height:ce}:De):[{toastId:h.id,height:ce,position:h.position},...$e])},[H,h.title,h.description,b,h.id]);let ft=C.useCallback(()=>{we(!0),In(Zt.current),b(V=>V.filter(oe=>oe.toastId!==h.id)),setTimeout(()=>{R(h)},Bf)},[h,R,b,Zt]);C.useEffect(()=>{if(h.promise&&Ce==="loading"||h.duration===1/0||h.type==="loading")return;let V;return S||m||T&&ua?(()=>{if(ca.current<lo.current){let oe=new Date().getTime()-lo.current;$n.current=$n.current-oe}ca.current=new Date().getTime()})():$n.current!==1/0&&(lo.current=new Date().getTime(),V=setTimeout(()=>{var oe;(oe=h.onAutoClose)==null||oe.call(h,h),ft()},$n.current)),()=>clearTimeout(V)},[S,m,h,Ce,T,ua,ft]),C.useEffect(()=>{h.delete&&ft()},[ft,h.delete]);function nu(){var V,oe,ce;return K!=null&&K.loading?C.createElement("div",{className:Me(N==null?void 0:N.loader,(V=h==null?void 0:h.classNames)==null?void 0:V.loader,"sonner-loader"),"data-visible":Ce==="loading"},K.loading):W?C.createElement("div",{className:Me(N==null?void 0:N.loader,(oe=h==null?void 0:h.classNames)==null?void 0:oe.loader,"sonner-loader"),"data-visible":Ce==="loading"},W):C.createElement(kf,{className:Me(N==null?void 0:N.loader,(ce=h==null?void 0:h.classNames)==null?void 0:ce.loader),visible:Ce==="loading"})}return C.createElement("li",{tabIndex:0,ref:jt,className:Me(I,Yd,N==null?void 0:N.toast,(t=h==null?void 0:h.classNames)==null?void 0:t.toast,N==null?void 0:N.default,N==null?void 0:N[Ce],(n=h==null?void 0:h.classNames)==null?void 0:n[Ce]),"data-sonner-toast":"","data-rich-colors":(r=h.richColors)!=null?r:A,"data-styled":!(h.jsx||h.unstyled||y),"data-mounted":H,"data-promise":!!h.promise,"data-swiped":ao,"data-removed":ie,"data-visible":Kd,"data-y-position":Zd,"data-x-position":eu,"data-index":k,"data-front":Jd,"data-swiping":Ge,"data-dismissible":Xt,"data-type":Ce,"data-invert":tu,"data-swipe-out":Ie,"data-swipe-direction":D,"data-expanded":!!(S||_&&H),style:{"--index":k,"--toasts-before":k,"--z-index":E.length-k,"--offset":`${ie?io:Zt.current}px`,"--initial-height":_?"auto":`${Qt}px`,...P,...h.style},onDragEnd:()=>{je(!1),M(null),en.current=null},onPointerDown:V=>{co||!Xt||(ia.current=new Date,In(Zt.current),V.target.setPointerCapture(V.pointerId),V.target.tagName!=="BUTTON"&&(je(!0),en.current={x:V.clientX,y:V.clientY}))},onPointerUp:()=>{var V,oe,ce,$e;if(Ie||!Xt)return;en.current=null;let De=Number(((V=jt.current)==null?void 0:V.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),pt=Number(((oe=jt.current)==null?void 0:oe.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),It=new Date().getTime()-((ce=ia.current)==null?void 0:ce.getTime()),Le=O==="x"?De:pt,mt=Math.abs(Le)/It;if(Math.abs(Le)>=Uf||mt>.11){In(Zt.current),($e=h.onDismiss)==null||$e.call(h,h),z(O==="x"?De>0?"right":"left":pt>0?"down":"up"),ft(),ir(!0),lr(!1);return}je(!1),M(null)},onPointerMove:V=>{var oe,ce,$e,De;if(!en.current||!Xt||((oe=window.getSelection())==null?void 0:oe.toString().length)>0)return;let pt=V.clientY-en.current.y,It=V.clientX-en.current.x,Le=(ce=e.swipeDirections)!=null?ce:qf(J);!O&&(Math.abs(It)>1||Math.abs(pt)>1)&&M(Math.abs(It)>Math.abs(pt)?"x":"y");let mt={x:0,y:0};O==="y"?(Le.includes("top")||Le.includes("bottom"))&&(Le.includes("top")&&pt<0||Le.includes("bottom")&&pt>0)&&(mt.y=pt):O==="x"&&(Le.includes("left")||Le.includes("right"))&&(Le.includes("left")&&It<0||Le.includes("right")&&It>0)&&(mt.x=It),(Math.abs(mt.x)>0||Math.abs(mt.y)>0)&&lr(!0),($e=jt.current)==null||$e.style.setProperty("--swipe-amount-x",`${mt.x}px`),(De=jt.current)==null||De.style.setProperty("--swipe-amount-y",`${mt.y}px`)}},Xd&&!h.jsx?C.createElement("button",{"aria-label":ae,"data-disabled":co,"data-close-button":!0,onClick:co||!Xt?()=>{}:()=>{var V;ft(),(V=h.onDismiss)==null||V.call(h,h)},className:Me(N==null?void 0:N.closeButton,(o=h==null?void 0:h.classNames)==null?void 0:o.closeButton)},(s=K==null?void 0:K.close)!=null?s:Af):null,h.jsx||c.isValidElement(h.title)?h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title:C.createElement(C.Fragment,null,Ce||h.icon||h.promise?C.createElement("div",{"data-icon":"",className:Me(N==null?void 0:N.icon,(a=h==null?void 0:h.classNames)==null?void 0:a.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||nu():null,h.type!=="loading"?h.icon||(K==null?void 0:K[Ce])||vf(Ce):null):null,C.createElement("div",{"data-content":"",className:Me(N==null?void 0:N.content,(i=h==null?void 0:h.classNames)==null?void 0:i.content)},C.createElement("div",{"data-title":"",className:Me(N==null?void 0:N.title,(u=h==null?void 0:h.classNames)==null?void 0:u.title)},typeof h.title=="function"?h.title():h.title),h.description?C.createElement("div",{"data-description":"",className:Me(G,Qd,N==null?void 0:N.description,(d=h==null?void 0:h.classNames)==null?void 0:d.description)},typeof h.description=="function"?h.description():h.description):null),c.isValidElement(h.cancel)?h.cancel:h.cancel&&fr(h.cancel)?C.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||$,onClick:V=>{var oe,ce;fr(h.cancel)&&Xt&&((ce=(oe=h.cancel).onClick)==null||ce.call(oe,V),ft())},className:Me(N==null?void 0:N.cancelButton,(f=h==null?void 0:h.classNames)==null?void 0:f.cancelButton)},h.cancel.label):null,c.isValidElement(h.action)?h.action:h.action&&fr(h.action)?C.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||U,onClick:V=>{var oe,ce;fr(h.action)&&((ce=(oe=h.action).onClick)==null||ce.call(oe,V),!V.defaultPrevented&&ft())},className:Me(N==null?void 0:N.actionButton,(p=h==null?void 0:h.classNames)==null?void 0:p.actionButton)},h.action.label):null))};function Aa(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Gf(e,t){let n={};return[e,t].forEach((r,o)=>{let s=o===1,a=s?"--mobile-offset":"--offset",i=s?Mf:Lf;function u(d){["top","right","bottom","left"].forEach(f=>{n[`${a}-${f}`]=typeof d=="number"?`${d}px`:d})}typeof r=="number"||typeof r=="string"?u(r):typeof r=="object"?["top","right","bottom","left"].forEach(d=>{r[d]===void 0?n[`${a}-${d}`]=i:n[`${a}-${d}`]=typeof r[d]=="number"?`${r[d]}px`:r[d]}):u(i)}),n}var Wf=c.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:o=["altKey","KeyT"],expand:s,closeButton:a,className:i,offset:u,mobileOffset:d,theme:f="light",richColors:p,duration:g,style:h,visibleToasts:y=Df,toastOptions:m,dir:b=Aa(),gap:v=Hf,loadingIcon:x,icons:k,containerAriaLabel:E="Notifications",pauseWhenPageIsHidden:S}=e,[R,A]=C.useState([]),L=C.useMemo(()=>Array.from(new Set([r].concat(R.filter(T=>T.position).map(T=>T.position)))),[R,r]),[P,$]=C.useState([]),[U,I]=C.useState(!1),[G,j]=C.useState(!1),[J,B]=C.useState(f!=="system"?f:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),W=C.useRef(null),_=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),N=C.useRef(null),K=C.useRef(!1),ae=C.useCallback(T=>{A(O=>{var M;return(M=O.find(D=>D.id===T.id))!=null&&M.delete||xe.dismiss(T.id),O.filter(({id:D})=>D!==T.id)})},[]);return C.useEffect(()=>xe.subscribe(T=>{if(T.dismiss){A(O=>O.map(M=>M.id===T.id?{...M,delete:!0}:M));return}setTimeout(()=>{Fi.flushSync(()=>{A(O=>{let M=O.findIndex(D=>D.id===T.id);return M!==-1?[...O.slice(0,M),{...O[M],...T},...O.slice(M+1)]:[T,...O]})})})}),[]),C.useEffect(()=>{if(f!=="system"){B(f);return}if(f==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?B("dark"):B("light")),typeof window>"u")return;let T=window.matchMedia("(prefers-color-scheme: dark)");try{T.addEventListener("change",({matches:O})=>{B(O?"dark":"light")})}catch{T.addListener(({matches:M})=>{try{B(M?"dark":"light")}catch(D){console.error(D)}})}},[f]),C.useEffect(()=>{R.length<=1&&I(!1)},[R]),C.useEffect(()=>{let T=O=>{var M,D;o.every(z=>O[z]||O.code===z)&&(I(!0),(M=W.current)==null||M.focus()),O.code==="Escape"&&(document.activeElement===W.current||(D=W.current)!=null&&D.contains(document.activeElement))&&I(!1)};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[o]),C.useEffect(()=>{if(W.current)return()=>{N.current&&(N.current.focus({preventScroll:!0}),N.current=null,K.current=!1)}},[W.current]),C.createElement("section",{ref:t,"aria-label":`${E} ${_}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},L.map((T,O)=>{var M;let[D,z]=T.split("-");return R.length?C.createElement("ol",{key:T,dir:b==="auto"?Aa():b,tabIndex:-1,ref:W,className:i,"data-sonner-toaster":!0,"data-theme":J,"data-y-position":D,"data-lifted":U&&R.length>1&&!s,"data-x-position":z,style:{"--front-toast-height":`${((M=P[0])==null?void 0:M.height)||0}px`,"--width":`${Ff}px`,"--gap":`${v}px`,...h,...Gf(u,d)},onBlur:H=>{K.current&&!H.currentTarget.contains(H.relatedTarget)&&(K.current=!1,N.current&&(N.current.focus({preventScroll:!0}),N.current=null))},onFocus:H=>{H.target instanceof HTMLElement&&H.target.dataset.dismissible==="false"||K.current||(K.current=!0,N.current=H.relatedTarget)},onMouseEnter:()=>I(!0),onMouseMove:()=>I(!0),onMouseLeave:()=>{G||I(!1)},onDragEnd:()=>I(!1),onPointerDown:H=>{H.target instanceof HTMLElement&&H.target.dataset.dismissible==="false"||j(!0)},onPointerUp:()=>j(!1)},R.filter(H=>!H.position&&O===0||H.position===T).map((H,re)=>{var ie,we;return C.createElement(zf,{key:H.id,icons:k,index:re,toast:H,defaultRichColors:p,duration:(ie=m==null?void 0:m.duration)!=null?ie:g,className:m==null?void 0:m.className,descriptionClassName:m==null?void 0:m.descriptionClassName,invert:n,visibleToasts:y,closeButton:(we=m==null?void 0:m.closeButton)!=null?we:a,interacting:G,position:T,style:m==null?void 0:m.style,unstyled:m==null?void 0:m.unstyled,classNames:m==null?void 0:m.classNames,cancelButtonStyle:m==null?void 0:m.cancelButtonStyle,actionButtonStyle:m==null?void 0:m.actionButtonStyle,removeToast:ae,toasts:R.filter(Ge=>Ge.position==H.position),heights:P.filter(Ge=>Ge.position==H.position),setHeights:$,expandByDefault:s,gap:v,loadingIcon:x,expanded:U,pauseWhenPageIsHidden:S,swipeDirections:e.swipeDirections})})):null}))});const Vf=({...e})=>{const{theme:t="system"}=wf();return l.jsx(Wf,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var Jf=Hi[" useId ".trim().toString()]||(()=>{}),Kf=0;function dt(e){const[t,n]=c.useState(Jf());return Xe(()=>{n(r=>r??String(Kf++))},[e]),t?`radix-${t}`:""}const Yf=["top","right","bottom","left"],Pt=Math.min,Re=Math.max,Or=Math.round,pr=Math.floor,Qe=e=>({x:e,y:e}),Qf={left:"right",right:"left",bottom:"top",top:"bottom"},Xf={start:"end",end:"start"};function Go(e,t,n){return Re(e,Pt(t,n))}function ut(e,t){return typeof e=="function"?e(t):e}function ht(e){return e.split("-")[0]}function On(e){return e.split("-")[1]}function Ps(e){return e==="x"?"y":"x"}function Ns(e){return e==="y"?"height":"width"}const Zf=new Set(["top","bottom"]);function Ye(e){return Zf.has(ht(e))?"y":"x"}function Os(e){return Ps(Ye(e))}function ep(e,t,n){n===void 0&&(n=!1);const r=On(e),o=Os(e),s=Ns(o);let a=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=jr(a)),[a,jr(a)]}function tp(e){const t=jr(e);return[Wo(e),t,Wo(t)]}function Wo(e){return e.replace(/start|end/g,t=>Xf[t])}const Ca=["left","right"],_a=["right","left"],np=["top","bottom"],rp=["bottom","top"];function op(e,t,n){switch(e){case"top":case"bottom":return n?t?_a:Ca:t?Ca:_a;case"left":case"right":return t?np:rp;default:return[]}}function sp(e,t,n,r){const o=On(e);let s=op(ht(e),n==="start",r);return o&&(s=s.map(a=>a+"-"+o),t&&(s=s.concat(s.map(Wo)))),s}function jr(e){return e.replace(/left|right|bottom|top/g,t=>Qf[t])}function ap(e){return{top:0,right:0,bottom:0,left:0,...e}}function jl(e){return typeof e!="number"?ap(e):{top:e,right:e,bottom:e,left:e}}function Ir(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function Pa(e,t,n){let{reference:r,floating:o}=e;const s=Ye(t),a=Os(t),i=Ns(a),u=ht(t),d=s==="y",f=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,g=r[i]/2-o[i]/2;let h;switch(u){case"top":h={x:f,y:r.y-o.height};break;case"bottom":h={x:f,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:p};break;case"left":h={x:r.x-o.width,y:p};break;default:h={x:r.x,y:r.y}}switch(On(t)){case"start":h[a]-=g*(n&&d?-1:1);break;case"end":h[a]+=g*(n&&d?-1:1);break}return h}const ip=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:a}=n,i=s.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:p}=Pa(d,r,u),g=r,h={},y=0;for(let m=0;m<i.length;m++){const{name:b,fn:v}=i[m],{x,y:k,data:E,reset:S}=await v({x:f,y:p,initialPlacement:r,placement:g,strategy:o,middlewareData:h,rects:d,platform:a,elements:{reference:e,floating:t}});f=x??f,p=k??p,h={...h,[b]:{...h[b],...E}},S&&y<=50&&(y++,typeof S=="object"&&(S.placement&&(g=S.placement),S.rects&&(d=S.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):S.rects),{x:f,y:p}=Pa(d,g,u)),m=-1)}return{x:f,y:p,placement:g,strategy:o,middlewareData:h}};async function Gn(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:s,rects:a,elements:i,strategy:u}=e,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:g=!1,padding:h=0}=ut(t,e),y=jl(h),b=i[g?p==="floating"?"reference":"floating":p],v=Ir(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(b)))==null||n?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(i.floating)),boundary:d,rootBoundary:f,strategy:u})),x=p==="floating"?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(i.floating)),E=await(s.isElement==null?void 0:s.isElement(k))?await(s.getScale==null?void 0:s.getScale(k))||{x:1,y:1}:{x:1,y:1},S=Ir(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:x,offsetParent:k,strategy:u}):x);return{top:(v.top-S.top+y.top)/E.y,bottom:(S.bottom-v.bottom+y.bottom)/E.y,left:(v.left-S.left+y.left)/E.x,right:(S.right-v.right+y.right)/E.x}}const lp=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:s,platform:a,elements:i,middlewareData:u}=t,{element:d,padding:f=0}=ut(e,t)||{};if(d==null)return{};const p=jl(f),g={x:n,y:r},h=Os(o),y=Ns(h),m=await a.getDimensions(d),b=h==="y",v=b?"top":"left",x=b?"bottom":"right",k=b?"clientHeight":"clientWidth",E=s.reference[y]+s.reference[h]-g[h]-s.floating[y],S=g[h]-s.reference[h],R=await(a.getOffsetParent==null?void 0:a.getOffsetParent(d));let A=R?R[k]:0;(!A||!await(a.isElement==null?void 0:a.isElement(R)))&&(A=i.floating[k]||s.floating[y]);const L=E/2-S/2,P=A/2-m[y]/2-1,$=Pt(p[v],P),U=Pt(p[x],P),I=$,G=A-m[y]-U,j=A/2-m[y]/2+L,J=Go(I,j,G),B=!u.arrow&&On(o)!=null&&j!==J&&s.reference[y]/2-(j<I?$:U)-m[y]/2<0,W=B?j<I?j-I:j-G:0;return{[h]:g[h]+W,data:{[h]:J,centerOffset:j-J-W,...B&&{alignmentOffset:W}},reset:B}}}),cp=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:s,rects:a,initialPlacement:i,platform:u,elements:d}=t,{mainAxis:f=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:m=!0,...b}=ut(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const v=ht(o),x=Ye(i),k=ht(i)===i,E=await(u.isRTL==null?void 0:u.isRTL(d.floating)),S=g||(k||!m?[jr(i)]:tp(i)),R=y!=="none";!g&&R&&S.push(...sp(i,m,y,E));const A=[i,...S],L=await Gn(t,b),P=[];let $=((r=s.flip)==null?void 0:r.overflows)||[];if(f&&P.push(L[v]),p){const j=ep(o,a,E);P.push(L[j[0]],L[j[1]])}if($=[...$,{placement:o,overflows:P}],!P.every(j=>j<=0)){var U,I;const j=(((U=s.flip)==null?void 0:U.index)||0)+1,J=A[j];if(J&&(!(p==="alignment"?x!==Ye(J):!1)||$.every(_=>_.overflows[0]>0&&Ye(_.placement)===x)))return{data:{index:j,overflows:$},reset:{placement:J}};let B=(I=$.filter(W=>W.overflows[0]<=0).sort((W,_)=>W.overflows[1]-_.overflows[1])[0])==null?void 0:I.placement;if(!B)switch(h){case"bestFit":{var G;const W=(G=$.filter(_=>{if(R){const N=Ye(_.placement);return N===x||N==="y"}return!0}).map(_=>[_.placement,_.overflows.filter(N=>N>0).reduce((N,K)=>N+K,0)]).sort((_,N)=>_[1]-N[1])[0])==null?void 0:G[0];W&&(B=W);break}case"initialPlacement":B=i;break}if(o!==B)return{reset:{placement:B}}}return{}}}};function Na(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Oa(e){return Yf.some(t=>e[t]>=0)}const dp=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=ut(e,t);switch(r){case"referenceHidden":{const s=await Gn(t,{...o,elementContext:"reference"}),a=Na(s,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:Oa(a)}}}case"escaped":{const s=await Gn(t,{...o,altBoundary:!0}),a=Na(s,n.floating);return{data:{escapedOffsets:a,escaped:Oa(a)}}}default:return{}}}}},Il=new Set(["left","top"]);async function up(e,t){const{placement:n,platform:r,elements:o}=e,s=await(r.isRTL==null?void 0:r.isRTL(o.floating)),a=ht(n),i=On(n),u=Ye(n)==="y",d=Il.has(a)?-1:1,f=s&&u?-1:1,p=ut(t,e);let{mainAxis:g,crossAxis:h,alignmentAxis:y}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return i&&typeof y=="number"&&(h=i==="end"?y*-1:y),u?{x:h*f,y:g*d}:{x:g*d,y:h*f}}const hp=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:s,placement:a,middlewareData:i}=t,u=await up(t,e);return a===((n=i.offset)==null?void 0:n.placement)&&(r=i.arrow)!=null&&r.alignmentOffset?{}:{x:o+u.x,y:s+u.y,data:{...u,placement:a}}}}},fp=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:i={fn:b=>{let{x:v,y:x}=b;return{x:v,y:x}}},...u}=ut(e,t),d={x:n,y:r},f=await Gn(t,u),p=Ye(ht(o)),g=Ps(p);let h=d[g],y=d[p];if(s){const b=g==="y"?"top":"left",v=g==="y"?"bottom":"right",x=h+f[b],k=h-f[v];h=Go(x,h,k)}if(a){const b=p==="y"?"top":"left",v=p==="y"?"bottom":"right",x=y+f[b],k=y-f[v];y=Go(x,y,k)}const m=i.fn({...t,[g]:h,[p]:y});return{...m,data:{x:m.x-n,y:m.y-r,enabled:{[g]:s,[p]:a}}}}}},pp=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:s,middlewareData:a}=t,{offset:i=0,mainAxis:u=!0,crossAxis:d=!0}=ut(e,t),f={x:n,y:r},p=Ye(o),g=Ps(p);let h=f[g],y=f[p];const m=ut(i,t),b=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(u){const k=g==="y"?"height":"width",E=s.reference[g]-s.floating[k]+b.mainAxis,S=s.reference[g]+s.reference[k]-b.mainAxis;h<E?h=E:h>S&&(h=S)}if(d){var v,x;const k=g==="y"?"width":"height",E=Il.has(ht(o)),S=s.reference[p]-s.floating[k]+(E&&((v=a.offset)==null?void 0:v[p])||0)+(E?0:b.crossAxis),R=s.reference[p]+s.reference[k]+(E?0:((x=a.offset)==null?void 0:x[p])||0)-(E?b.crossAxis:0);y<S?y=S:y>R&&(y=R)}return{[g]:h,[p]:y}}}},mp=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:o,rects:s,platform:a,elements:i}=t,{apply:u=()=>{},...d}=ut(e,t),f=await Gn(t,d),p=ht(o),g=On(o),h=Ye(o)==="y",{width:y,height:m}=s.floating;let b,v;p==="top"||p==="bottom"?(b=p,v=g===(await(a.isRTL==null?void 0:a.isRTL(i.floating))?"start":"end")?"left":"right"):(v=p,b=g==="end"?"top":"bottom");const x=m-f.top-f.bottom,k=y-f.left-f.right,E=Pt(m-f[b],x),S=Pt(y-f[v],k),R=!t.middlewareData.shift;let A=E,L=S;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(L=k),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(A=x),R&&!g){const $=Re(f.left,0),U=Re(f.right,0),I=Re(f.top,0),G=Re(f.bottom,0);h?L=y-2*($!==0||U!==0?$+U:Re(f.left,f.right)):A=m-2*(I!==0||G!==0?I+G:Re(f.top,f.bottom))}await u({...t,availableWidth:L,availableHeight:A});const P=await a.getDimensions(i.floating);return y!==P.width||m!==P.height?{reset:{rects:!0}}:{}}}};function Vr(){return typeof window<"u"}function jn(e){return $l(e)?(e.nodeName||"").toLowerCase():"#document"}function Ae(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function tt(e){var t;return(t=($l(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function $l(e){return Vr()?e instanceof Node||e instanceof Ae(e).Node:!1}function Be(e){return Vr()?e instanceof Element||e instanceof Ae(e).Element:!1}function Ze(e){return Vr()?e instanceof HTMLElement||e instanceof Ae(e).HTMLElement:!1}function ja(e){return!Vr()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ae(e).ShadowRoot}const gp=new Set(["inline","contents"]);function tr(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=qe(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!gp.has(o)}const bp=new Set(["table","td","th"]);function yp(e){return bp.has(jn(e))}const wp=[":popover-open",":modal"];function Jr(e){return wp.some(t=>{try{return e.matches(t)}catch{return!1}})}const vp=["transform","translate","scale","rotate","perspective"],xp=["transform","translate","scale","rotate","perspective","filter"],kp=["paint","layout","strict","content"];function js(e){const t=Is(),n=Be(e)?qe(e):e;return vp.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||xp.some(r=>(n.willChange||"").includes(r))||kp.some(r=>(n.contain||"").includes(r))}function Ep(e){let t=Nt(e);for(;Ze(t)&&!Rn(t);){if(js(t))return t;if(Jr(t))return null;t=Nt(t)}return null}function Is(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Sp=new Set(["html","body","#document"]);function Rn(e){return Sp.has(jn(e))}function qe(e){return Ae(e).getComputedStyle(e)}function Kr(e){return Be(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Nt(e){if(jn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ja(e)&&e.host||tt(e);return ja(t)?t.host:t}function Dl(e){const t=Nt(e);return Rn(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ze(t)&&tr(t)?t:Dl(t)}function Wn(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Dl(e),s=o===((r=e.ownerDocument)==null?void 0:r.body),a=Ae(o);if(s){const i=Vo(a);return t.concat(a,a.visualViewport||[],tr(o)?o:[],i&&n?Wn(i):[])}return t.concat(o,Wn(o,[],n))}function Vo(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ll(e){const t=qe(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Ze(e),s=o?e.offsetWidth:n,a=o?e.offsetHeight:r,i=Or(n)!==s||Or(r)!==a;return i&&(n=s,r=a),{width:n,height:r,$:i}}function $s(e){return Be(e)?e:e.contextElement}function dn(e){const t=$s(e);if(!Ze(t))return Qe(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:s}=Ll(t);let a=(s?Or(n.width):n.width)/r,i=(s?Or(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!i||!Number.isFinite(i))&&(i=1),{x:a,y:i}}const Tp=Qe(0);function Ml(e){const t=Ae(e);return!Is()||!t.visualViewport?Tp:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Rp(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Ae(e)?!1:t}function Vt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),s=$s(e);let a=Qe(1);t&&(r?Be(r)&&(a=dn(r)):a=dn(e));const i=Rp(s,n,r)?Ml(s):Qe(0);let u=(o.left+i.x)/a.x,d=(o.top+i.y)/a.y,f=o.width/a.x,p=o.height/a.y;if(s){const g=Ae(s),h=r&&Be(r)?Ae(r):r;let y=g,m=Vo(y);for(;m&&r&&h!==y;){const b=dn(m),v=m.getBoundingClientRect(),x=qe(m),k=v.left+(m.clientLeft+parseFloat(x.paddingLeft))*b.x,E=v.top+(m.clientTop+parseFloat(x.paddingTop))*b.y;u*=b.x,d*=b.y,f*=b.x,p*=b.y,u+=k,d+=E,y=Ae(m),m=Vo(y)}}return Ir({width:f,height:p,x:u,y:d})}function Ds(e,t){const n=Kr(e).scrollLeft;return t?t.left+n:Vt(tt(e)).left+n}function Fl(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=r.left+t.scrollLeft-(n?0:Ds(e,r)),s=r.top+t.scrollTop;return{x:o,y:s}}function Ap(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const s=o==="fixed",a=tt(r),i=t?Jr(t.floating):!1;if(r===a||i&&s)return n;let u={scrollLeft:0,scrollTop:0},d=Qe(1);const f=Qe(0),p=Ze(r);if((p||!p&&!s)&&((jn(r)!=="body"||tr(a))&&(u=Kr(r)),Ze(r))){const h=Vt(r);d=dn(r),f.x=h.x+r.clientLeft,f.y=h.y+r.clientTop}const g=a&&!p&&!s?Fl(a,u,!0):Qe(0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-u.scrollLeft*d.x+f.x+g.x,y:n.y*d.y-u.scrollTop*d.y+f.y+g.y}}function Cp(e){return Array.from(e.getClientRects())}function _p(e){const t=tt(e),n=Kr(e),r=e.ownerDocument.body,o=Re(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Re(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Ds(e);const i=-n.scrollTop;return qe(r).direction==="rtl"&&(a+=Re(t.clientWidth,r.clientWidth)-o),{width:o,height:s,x:a,y:i}}function Pp(e,t){const n=Ae(e),r=tt(e),o=n.visualViewport;let s=r.clientWidth,a=r.clientHeight,i=0,u=0;if(o){s=o.width,a=o.height;const d=Is();(!d||d&&t==="fixed")&&(i=o.offsetLeft,u=o.offsetTop)}return{width:s,height:a,x:i,y:u}}const Np=new Set(["absolute","fixed"]);function Op(e,t){const n=Vt(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,s=Ze(e)?dn(e):Qe(1),a=e.clientWidth*s.x,i=e.clientHeight*s.y,u=o*s.x,d=r*s.y;return{width:a,height:i,x:u,y:d}}function Ia(e,t,n){let r;if(t==="viewport")r=Pp(e,n);else if(t==="document")r=_p(tt(e));else if(Be(t))r=Op(t,n);else{const o=Ml(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return Ir(r)}function Hl(e,t){const n=Nt(e);return n===t||!Be(n)||Rn(n)?!1:qe(n).position==="fixed"||Hl(n,t)}function jp(e,t){const n=t.get(e);if(n)return n;let r=Wn(e,[],!1).filter(i=>Be(i)&&jn(i)!=="body"),o=null;const s=qe(e).position==="fixed";let a=s?Nt(e):e;for(;Be(a)&&!Rn(a);){const i=qe(a),u=js(a);!u&&i.position==="fixed"&&(o=null),(s?!u&&!o:!u&&i.position==="static"&&!!o&&Np.has(o.position)||tr(a)&&!u&&Hl(e,a))?r=r.filter(f=>f!==a):o=i,a=Nt(a)}return t.set(e,r),r}function Ip(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?Jr(t)?[]:jp(t,this._c):[].concat(n),r],i=a[0],u=a.reduce((d,f)=>{const p=Ia(t,f,o);return d.top=Re(p.top,d.top),d.right=Pt(p.right,d.right),d.bottom=Pt(p.bottom,d.bottom),d.left=Re(p.left,d.left),d},Ia(t,i,o));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function $p(e){const{width:t,height:n}=Ll(e);return{width:t,height:n}}function Dp(e,t,n){const r=Ze(t),o=tt(t),s=n==="fixed",a=Vt(e,!0,s,t);let i={scrollLeft:0,scrollTop:0};const u=Qe(0);function d(){u.x=Ds(o)}if(r||!r&&!s)if((jn(t)!=="body"||tr(o))&&(i=Kr(t)),r){const h=Vt(t,!0,s,t);u.x=h.x+t.clientLeft,u.y=h.y+t.clientTop}else o&&d();s&&!r&&o&&d();const f=o&&!r&&!s?Fl(o,i):Qe(0),p=a.left+i.scrollLeft-u.x-f.x,g=a.top+i.scrollTop-u.y-f.y;return{x:p,y:g,width:a.width,height:a.height}}function yo(e){return qe(e).position==="static"}function $a(e,t){if(!Ze(e)||qe(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return tt(e)===n&&(n=n.ownerDocument.body),n}function Ul(e,t){const n=Ae(e);if(Jr(e))return n;if(!Ze(e)){let o=Nt(e);for(;o&&!Rn(o);){if(Be(o)&&!yo(o))return o;o=Nt(o)}return n}let r=$a(e,t);for(;r&&yp(r)&&yo(r);)r=$a(r,t);return r&&Rn(r)&&yo(r)&&!js(r)?n:r||Ep(e)||n}const Lp=async function(e){const t=this.getOffsetParent||Ul,n=this.getDimensions,r=await n(e.floating);return{reference:Dp(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Mp(e){return qe(e).direction==="rtl"}const Fp={convertOffsetParentRelativeRectToViewportRelativeRect:Ap,getDocumentElement:tt,getClippingRect:Ip,getOffsetParent:Ul,getElementRects:Lp,getClientRects:Cp,getDimensions:$p,getScale:dn,isElement:Be,isRTL:Mp};function Bl(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Hp(e,t){let n=null,r;const o=tt(e);function s(){var i;clearTimeout(r),(i=n)==null||i.disconnect(),n=null}function a(i,u){i===void 0&&(i=!1),u===void 0&&(u=1),s();const d=e.getBoundingClientRect(),{left:f,top:p,width:g,height:h}=d;if(i||t(),!g||!h)return;const y=pr(p),m=pr(o.clientWidth-(f+g)),b=pr(o.clientHeight-(p+h)),v=pr(f),k={rootMargin:-y+"px "+-m+"px "+-b+"px "+-v+"px",threshold:Re(0,Pt(1,u))||1};let E=!0;function S(R){const A=R[0].intersectionRatio;if(A!==u){if(!E)return a();A?a(!1,A):r=setTimeout(()=>{a(!1,1e-7)},1e3)}A===1&&!Bl(d,e.getBoundingClientRect())&&a(),E=!1}try{n=new IntersectionObserver(S,{...k,root:o.ownerDocument})}catch{n=new IntersectionObserver(S,k)}n.observe(e)}return a(!0),s}function Up(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,d=$s(e),f=o||s?[...d?Wn(d):[],...Wn(t)]:[];f.forEach(v=>{o&&v.addEventListener("scroll",n,{passive:!0}),s&&v.addEventListener("resize",n)});const p=d&&i?Hp(d,n):null;let g=-1,h=null;a&&(h=new ResizeObserver(v=>{let[x]=v;x&&x.target===d&&h&&(h.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var k;(k=h)==null||k.observe(t)})),n()}),d&&!u&&h.observe(d),h.observe(t));let y,m=u?Vt(e):null;u&&b();function b(){const v=Vt(e);m&&!Bl(m,v)&&n(),m=v,y=requestAnimationFrame(b)}return n(),()=>{var v;f.forEach(x=>{o&&x.removeEventListener("scroll",n),s&&x.removeEventListener("resize",n)}),p==null||p(),(v=h)==null||v.disconnect(),h=null,u&&cancelAnimationFrame(y)}}const Bp=hp,qp=fp,zp=cp,Gp=mp,Wp=dp,Da=lp,Vp=pp,Jp=(e,t,n)=>{const r=new Map,o={platform:Fp,...n},s={...o.platform,_c:r};return ip(e,t,{...o,platform:s})};var Kp=typeof document<"u",Yp=function(){},Tr=Kp?c.useLayoutEffect:Yp;function $r(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!$r(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const s=o[r];if(!(s==="_owner"&&e.$$typeof)&&!$r(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function ql(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function La(e,t){const n=ql(e);return Math.round(t*n)/n}function wo(e){const t=c.useRef(e);return Tr(()=>{t.current=e}),t}function Qp(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:s,floating:a}={},transform:i=!0,whileElementsMounted:u,open:d}=e,[f,p]=c.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[g,h]=c.useState(r);$r(g,r)||h(r);const[y,m]=c.useState(null),[b,v]=c.useState(null),x=c.useCallback(_=>{_!==R.current&&(R.current=_,m(_))},[]),k=c.useCallback(_=>{_!==A.current&&(A.current=_,v(_))},[]),E=s||y,S=a||b,R=c.useRef(null),A=c.useRef(null),L=c.useRef(f),P=u!=null,$=wo(u),U=wo(o),I=wo(d),G=c.useCallback(()=>{if(!R.current||!A.current)return;const _={placement:t,strategy:n,middleware:g};U.current&&(_.platform=U.current),Jp(R.current,A.current,_).then(N=>{const K={...N,isPositioned:I.current!==!1};j.current&&!$r(L.current,K)&&(L.current=K,Ur.flushSync(()=>{p(K)}))})},[g,t,n,U,I]);Tr(()=>{d===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,p(_=>({..._,isPositioned:!1})))},[d]);const j=c.useRef(!1);Tr(()=>(j.current=!0,()=>{j.current=!1}),[]),Tr(()=>{if(E&&(R.current=E),S&&(A.current=S),E&&S){if($.current)return $.current(E,S,G);G()}},[E,S,G,$,P]);const J=c.useMemo(()=>({reference:R,floating:A,setReference:x,setFloating:k}),[x,k]),B=c.useMemo(()=>({reference:E,floating:S}),[E,S]),W=c.useMemo(()=>{const _={position:n,left:0,top:0};if(!B.floating)return _;const N=La(B.floating,f.x),K=La(B.floating,f.y);return i?{..._,transform:"translate("+N+"px, "+K+"px)",...ql(B.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:N,top:K}},[n,i,B.floating,f.x,f.y]);return c.useMemo(()=>({...f,update:G,refs:J,elements:B,floatingStyles:W}),[f,G,J,B,W])}const Xp=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Da({element:r.current,padding:o}).fn(n):{}:r?Da({element:r,padding:o}).fn(n):{}}}},Zp=(e,t)=>({...Bp(e),options:[e,t]}),em=(e,t)=>({...qp(e),options:[e,t]}),tm=(e,t)=>({...Vp(e),options:[e,t]}),nm=(e,t)=>({...zp(e),options:[e,t]}),rm=(e,t)=>({...Gp(e),options:[e,t]}),om=(e,t)=>({...Wp(e),options:[e,t]}),sm=(e,t)=>({...Xp(e),options:[e,t]});var am="Arrow",zl=c.forwardRef((e,t)=>{const{children:n,width:r=10,height:o=5,...s}=e;return l.jsx(ee.svg,{...s,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:l.jsx("polygon",{points:"0,0 30,0 15,10"})})});zl.displayName=am;var im=zl;function lm(e){const[t,n]=c.useState(void 0);return Xe(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const s=o[0];let a,i;if("borderBoxSize"in s){const u=s.borderBoxSize,d=Array.isArray(u)?u[0]:u;a=d.inlineSize,i=d.blockSize}else a=e.offsetWidth,i=e.offsetHeight;n({width:a,height:i})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var Gl="Popper",[Wl,Vl]=Pn(Gl),[bv,Jl]=Wl(Gl),Kl="PopperAnchor",Yl=c.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,s=Jl(Kl,n),a=c.useRef(null),i=he(t,a);return c.useEffect(()=>{s.onAnchorChange((r==null?void 0:r.current)||a.current)}),r?null:l.jsx(ee.div,{...o,ref:i})});Yl.displayName=Kl;var Ls="PopperContent",[cm,dm]=Wl(Ls),Ql=c.forwardRef((e,t)=>{var H,re,ie,we,Ge,je;const{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:s="center",alignOffset:a=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:d=[],collisionPadding:f=0,sticky:p="partial",hideWhenDetached:g=!1,updatePositionStrategy:h="optimized",onPlaced:y,...m}=e,b=Jl(Ls,n),[v,x]=c.useState(null),k=he(t,Ie=>x(Ie)),[E,S]=c.useState(null),R=lm(E),A=(R==null?void 0:R.width)??0,L=(R==null?void 0:R.height)??0,P=r+(s!=="center"?"-"+s:""),$=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},U=Array.isArray(d)?d:[d],I=U.length>0,G={padding:$,boundary:U.filter(hm),altBoundary:I},{refs:j,floatingStyles:J,placement:B,isPositioned:W,middlewareData:_}=Qp({strategy:"fixed",placement:P,whileElementsMounted:(...Ie)=>Up(...Ie,{animationFrame:h==="always"}),elements:{reference:b.anchor},middleware:[Zp({mainAxis:o+L,alignmentAxis:a}),u&&em({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?tm():void 0,...G}),u&&nm({...G}),rm({...G,apply:({elements:Ie,rects:ir,availableWidth:ao,availableHeight:lr})=>{const{width:io,height:In}=ir.reference,Qt=Ie.floating.style;Qt.setProperty("--radix-popper-available-width",`${ao}px`),Qt.setProperty("--radix-popper-available-height",`${lr}px`),Qt.setProperty("--radix-popper-anchor-width",`${io}px`),Qt.setProperty("--radix-popper-anchor-height",`${In}px`)}}),E&&sm({element:E,padding:i}),fm({arrowWidth:A,arrowHeight:L}),g&&om({strategy:"referenceHidden",...G})]}),[N,K]=ec(B),ae=me(y);Xe(()=>{W&&(ae==null||ae())},[W,ae]);const T=(H=_.arrow)==null?void 0:H.x,O=(re=_.arrow)==null?void 0:re.y,M=((ie=_.arrow)==null?void 0:ie.centerOffset)!==0,[D,z]=c.useState();return Xe(()=>{v&&z(window.getComputedStyle(v).zIndex)},[v]),l.jsx("div",{ref:j.setFloating,"data-radix-popper-content-wrapper":"",style:{...J,transform:W?J.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:D,"--radix-popper-transform-origin":[(we=_.transformOrigin)==null?void 0:we.x,(Ge=_.transformOrigin)==null?void 0:Ge.y].join(" "),...((je=_.hide)==null?void 0:je.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:l.jsx(cm,{scope:n,placedSide:N,onArrowChange:S,arrowX:T,arrowY:O,shouldHideArrow:M,children:l.jsx(ee.div,{"data-side":N,"data-align":K,...m,ref:k,style:{...m.style,animation:W?void 0:"none"}})})})});Ql.displayName=Ls;var Xl="PopperArrow",um={top:"bottom",right:"left",bottom:"top",left:"right"},Zl=c.forwardRef(function(t,n){const{__scopePopper:r,...o}=t,s=dm(Xl,r),a=um[s.placedSide];return l.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:l.jsx(im,{...o,ref:n,style:{...o.style,display:"block"}})})});Zl.displayName=Xl;function hm(e){return e!==null}var fm=e=>({name:"transformOrigin",options:e,fn(t){var b,v,x;const{placement:n,rects:r,middlewareData:o}=t,a=((b=o.arrow)==null?void 0:b.centerOffset)!==0,i=a?0:e.arrowWidth,u=a?0:e.arrowHeight,[d,f]=ec(n),p={start:"0%",center:"50%",end:"100%"}[f],g=(((v=o.arrow)==null?void 0:v.x)??0)+i/2,h=(((x=o.arrow)==null?void 0:x.y)??0)+u/2;let y="",m="";return d==="bottom"?(y=a?p:`${g}px`,m=`${-u}px`):d==="top"?(y=a?p:`${g}px`,m=`${r.floating.height+u}px`):d==="right"?(y=`${-u}px`,m=a?p:`${h}px`):d==="left"&&(y=`${r.floating.width+u}px`,m=a?p:`${h}px`),{data:{x:y,y:m}}}});function ec(e){const[t,n="center"]=e.split("-");return[t,n]}var pm=Yl,mm=Ql,gm=Zl,[Yr,yv]=Pn("Tooltip",[Vl]),Ms=Vl(),tc="TooltipProvider",bm=700,Ma="tooltip.open",[ym,nc]=Yr(tc),rc=e=>{const{__scopeTooltip:t,delayDuration:n=bm,skipDelayDuration:r=300,disableHoverableContent:o=!1,children:s}=e,a=c.useRef(!0),i=c.useRef(!1),u=c.useRef(0);return c.useEffect(()=>{const d=u.current;return()=>window.clearTimeout(d)},[]),l.jsx(ym,{scope:t,isOpenDelayedRef:a,delayDuration:n,onOpen:c.useCallback(()=>{window.clearTimeout(u.current),a.current=!1},[]),onClose:c.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>a.current=!0,r)},[r]),isPointerInTransitRef:i,onPointerInTransitChange:c.useCallback(d=>{i.current=d},[]),disableHoverableContent:o,children:s})};rc.displayName=tc;var oc="Tooltip",[wv,Qr]=Yr(oc),Jo="TooltipTrigger",wm=c.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Qr(Jo,n),s=nc(Jo,n),a=Ms(n),i=c.useRef(null),u=he(t,i,o.onTriggerChange),d=c.useRef(!1),f=c.useRef(!1),p=c.useCallback(()=>d.current=!1,[]);return c.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),l.jsx(pm,{asChild:!0,...a,children:l.jsx(ee.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...r,ref:u,onPointerMove:te(e.onPointerMove,g=>{g.pointerType!=="touch"&&!f.current&&!s.isPointerInTransitRef.current&&(o.onTriggerEnter(),f.current=!0)}),onPointerLeave:te(e.onPointerLeave,()=>{o.onTriggerLeave(),f.current=!1}),onPointerDown:te(e.onPointerDown,()=>{o.open&&o.onClose(),d.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:te(e.onFocus,()=>{d.current||o.onOpen()}),onBlur:te(e.onBlur,o.onClose),onClick:te(e.onClick,o.onClose)})})});wm.displayName=Jo;var vm="TooltipPortal",[vv,xm]=Yr(vm,{forceMount:void 0}),An="TooltipContent",sc=c.forwardRef((e,t)=>{const n=xm(An,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...s}=e,a=Qr(An,e.__scopeTooltip);return l.jsx(et,{present:r||a.open,children:a.disableHoverableContent?l.jsx(ac,{side:o,...s,ref:t}):l.jsx(km,{side:o,...s,ref:t})})}),km=c.forwardRef((e,t)=>{const n=Qr(An,e.__scopeTooltip),r=nc(An,e.__scopeTooltip),o=c.useRef(null),s=he(t,o),[a,i]=c.useState(null),{trigger:u,onClose:d}=n,f=o.current,{onPointerInTransitChange:p}=r,g=c.useCallback(()=>{i(null),p(!1)},[p]),h=c.useCallback((y,m)=>{const b=y.currentTarget,v={x:y.clientX,y:y.clientY},x=Am(v,b.getBoundingClientRect()),k=Cm(v,x),E=_m(m.getBoundingClientRect()),S=Nm([...k,...E]);i(S),p(!0)},[p]);return c.useEffect(()=>()=>g(),[g]),c.useEffect(()=>{if(u&&f){const y=b=>h(b,f),m=b=>h(b,u);return u.addEventListener("pointerleave",y),f.addEventListener("pointerleave",m),()=>{u.removeEventListener("pointerleave",y),f.removeEventListener("pointerleave",m)}}},[u,f,h,g]),c.useEffect(()=>{if(a){const y=m=>{const b=m.target,v={x:m.clientX,y:m.clientY},x=(u==null?void 0:u.contains(b))||(f==null?void 0:f.contains(b)),k=!Pm(v,a);x?g():k&&(g(),d())};return document.addEventListener("pointermove",y),()=>document.removeEventListener("pointermove",y)}},[u,f,a,d,g]),l.jsx(ac,{...e,ref:s})}),[Em,Sm]=Yr(oc,{isInside:!1}),Tm=Tu("TooltipContent"),ac=c.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":o,onEscapeKeyDown:s,onPointerDownOutside:a,...i}=e,u=Qr(An,n),d=Ms(n),{onClose:f}=u;return c.useEffect(()=>(document.addEventListener(Ma,f),()=>document.removeEventListener(Ma,f)),[f]),c.useEffect(()=>{if(u.trigger){const p=g=>{const h=g.target;h!=null&&h.contains(u.trigger)&&f()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[u.trigger,f]),l.jsx(qr,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:a,onFocusOutside:p=>p.preventDefault(),onDismiss:f,children:l.jsxs(mm,{"data-state":u.stateAttribute,...d,...i,ref:t,style:{...i.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[l.jsx(Tm,{children:r}),l.jsx(Em,{scope:n,isInside:!0,children:l.jsx(Ku,{id:u.contentId,role:"tooltip",children:o||r})})]})})});sc.displayName=An;var ic="TooltipArrow",Rm=c.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Ms(n);return Sm(ic,n).isInside?null:l.jsx(gm,{...o,...r,ref:t})});Rm.displayName=ic;function Am(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),s=Math.abs(t.left-e.x);switch(Math.min(n,r,o,s)){case s:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function Cm(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function _m(e){const{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}function Pm(e,t){const{x:n,y:r}=e;let o=!1;for(let s=0,a=t.length-1;s<t.length;a=s++){const i=t[s],u=t[a],d=i.x,f=i.y,p=u.x,g=u.y;f>r!=g>r&&n<(p-d)*(r-f)/(g-f)+d&&(o=!o)}return o}function Nm(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),Om(t)}function Om(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const o=e[r];for(;t.length>=2;){const s=t[t.length-1],a=t[t.length-2];if((s.x-a.x)*(o.y-a.y)>=(s.y-a.y)*(o.x-a.x))t.pop();else break}t.push(o)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r];for(;n.length>=2;){const s=n[n.length-1],a=n[n.length-2];if((s.x-a.x)*(o.y-a.y)>=(s.y-a.y)*(o.x-a.x))n.pop();else break}n.push(o)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var jm=rc,lc=sc;const Im=jm,$m=c.forwardRef(({className:e,sideOffset:t=4,...n},r)=>l.jsx(lc,{ref:r,sideOffset:t,className:Q("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));$m.displayName=lc.displayName;var nr=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Jt=typeof window>"u"||"Deno"in globalThis;function ke(){}function Dm(e,t){return typeof e=="function"?e(t):e}function Ko(e){return typeof e=="number"&&e>=0&&e!==1/0}function cc(e,t){return Math.max(e+(t||0)-Date.now(),0)}function _t(e,t){return typeof e=="function"?e(t):e}function Ne(e,t){return typeof e=="function"?e(t):e}function Fa(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:s,queryKey:a,stale:i}=e;if(a){if(r){if(t.queryHash!==Fs(a,t.options))return!1}else if(!Jn(t.queryKey,a))return!1}if(n!=="all"){const u=t.isActive();if(n==="active"&&!u||n==="inactive"&&u)return!1}return!(typeof i=="boolean"&&t.isStale()!==i||o&&o!==t.state.fetchStatus||s&&!s(t))}function Ha(e,t){const{exact:n,status:r,predicate:o,mutationKey:s}=e;if(s){if(!t.options.mutationKey)return!1;if(n){if(Vn(t.options.mutationKey)!==Vn(s))return!1}else if(!Jn(t.options.mutationKey,s))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function Fs(e,t){return((t==null?void 0:t.queryKeyHashFn)||Vn)(e)}function Vn(e){return JSON.stringify(e,(t,n)=>Qo(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function Jn(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Jn(e[n],t[n])):!1}function dc(e,t){if(e===t)return e;const n=Ua(e)&&Ua(t);if(n||Qo(e)&&Qo(t)){const r=n?e:Object.keys(e),o=r.length,s=n?t:Object.keys(t),a=s.length,i=n?[]:{},u=new Set(r);let d=0;for(let f=0;f<a;f++){const p=n?f:s[f];(!n&&u.has(p)||n)&&e[p]===void 0&&t[p]===void 0?(i[p]=void 0,d++):(i[p]=dc(e[p],t[p]),i[p]===e[p]&&e[p]!==void 0&&d++)}return o===a&&d===o?e:i}return t}function Yo(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Ua(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Qo(e){if(!Ba(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Ba(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Ba(e){return Object.prototype.toString.call(e)==="[object Object]"}function Lm(e){return new Promise(t=>{setTimeout(t,e)})}function Xo(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?dc(e,t):t}function Mm(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function Fm(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Hs=Symbol();function uc(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Hs?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function Hm(e,t){return typeof e=="function"?e(...t):!!e}var Dt,xt,pn,Pi,Um=(Pi=class extends nr{constructor(){super();q(this,Dt);q(this,xt);q(this,pn);F(this,pn,t=>{if(!Jt&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){w(this,xt)||this.setEventListener(w(this,pn))}onUnsubscribe(){var t;this.hasListeners()||((t=w(this,xt))==null||t.call(this),F(this,xt,void 0))}setEventListener(t){var n;F(this,pn,t),(n=w(this,xt))==null||n.call(this),F(this,xt,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){w(this,Dt)!==t&&(F(this,Dt,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof w(this,Dt)=="boolean"?w(this,Dt):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Dt=new WeakMap,xt=new WeakMap,pn=new WeakMap,Pi),Us=new Um,mn,kt,gn,Ni,Bm=(Ni=class extends nr{constructor(){super();q(this,mn,!0);q(this,kt);q(this,gn);F(this,gn,t=>{if(!Jt&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){w(this,kt)||this.setEventListener(w(this,gn))}onUnsubscribe(){var t;this.hasListeners()||((t=w(this,kt))==null||t.call(this),F(this,kt,void 0))}setEventListener(t){var n;F(this,gn,t),(n=w(this,kt))==null||n.call(this),F(this,kt,t(this.setOnline.bind(this)))}setOnline(t){w(this,mn)!==t&&(F(this,mn,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return w(this,mn)}},mn=new WeakMap,kt=new WeakMap,gn=new WeakMap,Ni),Dr=new Bm;function Zo(){let e,t;const n=new Promise((o,s)=>{e=o,t=s});n.status="pending",n.catch(()=>{});function r(o){Object.assign(n,o),delete n.resolve,delete n.reject}return n.resolve=o=>{r({status:"fulfilled",value:o}),e(o)},n.reject=o=>{r({status:"rejected",reason:o}),t(o)},n}function qm(e){return Math.min(1e3*2**e,3e4)}function hc(e){return(e??"online")==="online"?Dr.isOnline():!0}var fc=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function vo(e){return e instanceof fc}function pc(e){let t=!1,n=0,r=!1,o;const s=Zo(),a=m=>{var b;r||(g(new fc(m)),(b=e.abort)==null||b.call(e))},i=()=>{t=!0},u=()=>{t=!1},d=()=>Us.isFocused()&&(e.networkMode==="always"||Dr.isOnline())&&e.canRun(),f=()=>hc(e.networkMode)&&e.canRun(),p=m=>{var b;r||(r=!0,(b=e.onSuccess)==null||b.call(e,m),o==null||o(),s.resolve(m))},g=m=>{var b;r||(r=!0,(b=e.onError)==null||b.call(e,m),o==null||o(),s.reject(m))},h=()=>new Promise(m=>{var b;o=v=>{(r||d())&&m(v)},(b=e.onPause)==null||b.call(e)}).then(()=>{var m;o=void 0,r||(m=e.onContinue)==null||m.call(e)}),y=()=>{if(r)return;let m;const b=n===0?e.initialPromise:void 0;try{m=b??e.fn()}catch(v){m=Promise.reject(v)}Promise.resolve(m).then(p).catch(v=>{var R;if(r)return;const x=e.retry??(Jt?0:3),k=e.retryDelay??qm,E=typeof k=="function"?k(n,v):k,S=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,v);if(t||!S){g(v);return}n++,(R=e.onFail)==null||R.call(e,n,v),Lm(E).then(()=>d()?void 0:h()).then(()=>{t?g(v):y()})})};return{promise:s,cancel:a,continue:()=>(o==null||o(),s),cancelRetry:i,continueRetry:u,canStart:f,start:()=>(f()?y():h().then(y),s)}}var zm=e=>setTimeout(e,0);function Gm(){let e=[],t=0,n=i=>{i()},r=i=>{i()},o=zm;const s=i=>{t?e.push(i):o(()=>{n(i)})},a=()=>{const i=e;e=[],i.length&&o(()=>{r(()=>{i.forEach(u=>{n(u)})})})};return{batch:i=>{let u;t++;try{u=i()}finally{t--,t||a()}return u},batchCalls:i=>(...u)=>{s(()=>{i(...u)})},schedule:s,setNotifyFunction:i=>{n=i},setBatchNotifyFunction:i=>{r=i},setScheduler:i=>{o=i}}}var pe=Gm(),Lt,Oi,mc=(Oi=class{constructor(){q(this,Lt)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Ko(this.gcTime)&&F(this,Lt,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Jt?1/0:5*60*1e3))}clearGcTimeout(){w(this,Lt)&&(clearTimeout(w(this,Lt)),F(this,Lt,void 0))}},Lt=new WeakMap,Oi),bn,Mt,Pe,Ft,ge,Yn,Ht,Fe,it,ji,Wm=(ji=class extends mc{constructor(t){super();q(this,Fe);q(this,bn);q(this,Mt);q(this,Pe);q(this,Ft);q(this,ge);q(this,Yn);q(this,Ht);F(this,Ht,!1),F(this,Yn,t.defaultOptions),this.setOptions(t.options),this.observers=[],F(this,Ft,t.client),F(this,Pe,w(this,Ft).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,F(this,bn,Vm(this.options)),this.state=t.state??w(this,bn),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=w(this,ge))==null?void 0:t.promise}setOptions(t){this.options={...w(this,Yn),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&w(this,Pe).remove(this)}setData(t,n){const r=Xo(this.state.data,t,this.options);return X(this,Fe,it).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){X(this,Fe,it).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,o;const n=(r=w(this,ge))==null?void 0:r.promise;return(o=w(this,ge))==null||o.cancel(t),n?n.then(ke).catch(ke):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(w(this,bn))}isActive(){return this.observers.some(t=>Ne(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Hs||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>_t(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!cc(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=w(this,ge))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=w(this,ge))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),w(this,Pe).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(w(this,ge)&&(w(this,Ht)?w(this,ge).cancel({revert:!0}):w(this,ge).cancelRetry()),this.scheduleGc()),w(this,Pe).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||X(this,Fe,it).call(this,{type:"invalidate"})}fetch(t,n){var d,f,p;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(w(this,ge))return w(this,ge).continueRetry(),w(this,ge).promise}if(t&&this.setOptions(t),!this.options.queryFn){const g=this.observers.find(h=>h.options.queryFn);g&&this.setOptions(g.options)}const r=new AbortController,o=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(F(this,Ht,!0),r.signal)})},s=()=>{const g=uc(this.options,n),y=(()=>{const m={client:w(this,Ft),queryKey:this.queryKey,meta:this.meta};return o(m),m})();return F(this,Ht,!1),this.options.persister?this.options.persister(g,y,this):g(y)},i=(()=>{const g={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:w(this,Ft),state:this.state,fetchFn:s};return o(g),g})();(d=this.options.behavior)==null||d.onFetch(i,this),F(this,Mt,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((f=i.fetchOptions)==null?void 0:f.meta))&&X(this,Fe,it).call(this,{type:"fetch",meta:(p=i.fetchOptions)==null?void 0:p.meta});const u=g=>{var h,y,m,b;vo(g)&&g.silent||X(this,Fe,it).call(this,{type:"error",error:g}),vo(g)||((y=(h=w(this,Pe).config).onError)==null||y.call(h,g,this),(b=(m=w(this,Pe).config).onSettled)==null||b.call(m,this.state.data,g,this)),this.scheduleGc()};return F(this,ge,pc({initialPromise:n==null?void 0:n.initialPromise,fn:i.fetchFn,abort:r.abort.bind(r),onSuccess:g=>{var h,y,m,b;if(g===void 0){u(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(g)}catch(v){u(v);return}(y=(h=w(this,Pe).config).onSuccess)==null||y.call(h,g,this),(b=(m=w(this,Pe).config).onSettled)==null||b.call(m,g,this.state.error,this),this.scheduleGc()},onError:u,onFail:(g,h)=>{X(this,Fe,it).call(this,{type:"failed",failureCount:g,error:h})},onPause:()=>{X(this,Fe,it).call(this,{type:"pause"})},onContinue:()=>{X(this,Fe,it).call(this,{type:"continue"})},retry:i.options.retry,retryDelay:i.options.retryDelay,networkMode:i.options.networkMode,canRun:()=>!0})),w(this,ge).start()}},bn=new WeakMap,Mt=new WeakMap,Pe=new WeakMap,Ft=new WeakMap,ge=new WeakMap,Yn=new WeakMap,Ht=new WeakMap,Fe=new WeakSet,it=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...gc(r.data,this.options),fetchMeta:t.meta??null};case"success":return F(this,Mt,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return vo(o)&&o.revert&&w(this,Mt)?{...w(this,Mt),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),pe.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),w(this,Pe).notify({query:this,type:"updated",action:t})})},ji);function gc(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:hc(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Vm(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var We,Ii,Jm=(Ii=class extends nr{constructor(t={}){super();q(this,We);this.config=t,F(this,We,new Map)}build(t,n,r){const o=n.queryKey,s=n.queryHash??Fs(o,n);let a=this.get(s);return a||(a=new Wm({client:t,queryKey:o,queryHash:s,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(a)),a}add(t){w(this,We).has(t.queryHash)||(w(this,We).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=w(this,We).get(t.queryHash);n&&(t.destroy(),n===t&&w(this,We).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){pe.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return w(this,We).get(t)}getAll(){return[...w(this,We).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Fa(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Fa(t,r)):n}notify(t){pe.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){pe.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){pe.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},We=new WeakMap,Ii),Ve,be,Ut,Je,wt,$i,Km=($i=class extends mc{constructor(t){super();q(this,Je);q(this,Ve);q(this,be);q(this,Ut);this.mutationId=t.mutationId,F(this,be,t.mutationCache),F(this,Ve,[]),this.state=t.state||Ym(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){w(this,Ve).includes(t)||(w(this,Ve).push(t),this.clearGcTimeout(),w(this,be).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){F(this,Ve,w(this,Ve).filter(n=>n!==t)),this.scheduleGc(),w(this,be).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){w(this,Ve).length||(this.state.status==="pending"?this.scheduleGc():w(this,be).remove(this))}continue(){var t;return((t=w(this,Ut))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var s,a,i,u,d,f,p,g,h,y,m,b,v,x,k,E,S,R,A,L;const n=()=>{X(this,Je,wt).call(this,{type:"continue"})};F(this,Ut,pc({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(P,$)=>{X(this,Je,wt).call(this,{type:"failed",failureCount:P,error:$})},onPause:()=>{X(this,Je,wt).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>w(this,be).canRun(this)}));const r=this.state.status==="pending",o=!w(this,Ut).canStart();try{if(r)n();else{X(this,Je,wt).call(this,{type:"pending",variables:t,isPaused:o}),await((a=(s=w(this,be).config).onMutate)==null?void 0:a.call(s,t,this));const $=await((u=(i=this.options).onMutate)==null?void 0:u.call(i,t));$!==this.state.context&&X(this,Je,wt).call(this,{type:"pending",context:$,variables:t,isPaused:o})}const P=await w(this,Ut).start();return await((f=(d=w(this,be).config).onSuccess)==null?void 0:f.call(d,P,t,this.state.context,this)),await((g=(p=this.options).onSuccess)==null?void 0:g.call(p,P,t,this.state.context)),await((y=(h=w(this,be).config).onSettled)==null?void 0:y.call(h,P,null,this.state.variables,this.state.context,this)),await((b=(m=this.options).onSettled)==null?void 0:b.call(m,P,null,t,this.state.context)),X(this,Je,wt).call(this,{type:"success",data:P}),P}catch(P){try{throw await((x=(v=w(this,be).config).onError)==null?void 0:x.call(v,P,t,this.state.context,this)),await((E=(k=this.options).onError)==null?void 0:E.call(k,P,t,this.state.context)),await((R=(S=w(this,be).config).onSettled)==null?void 0:R.call(S,void 0,P,this.state.variables,this.state.context,this)),await((L=(A=this.options).onSettled)==null?void 0:L.call(A,void 0,P,t,this.state.context)),P}finally{X(this,Je,wt).call(this,{type:"error",error:P})}}finally{w(this,be).runNext(this)}}},Ve=new WeakMap,be=new WeakMap,Ut=new WeakMap,Je=new WeakSet,wt=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),pe.batch(()=>{w(this,Ve).forEach(r=>{r.onMutationUpdate(t)}),w(this,be).notify({mutation:this,type:"updated",action:t})})},$i);function Ym(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var lt,He,Qn,Di,Qm=(Di=class extends nr{constructor(t={}){super();q(this,lt);q(this,He);q(this,Qn);this.config=t,F(this,lt,new Set),F(this,He,new Map),F(this,Qn,0)}build(t,n,r){const o=new Km({mutationCache:this,mutationId:++dr(this,Qn)._,options:t.defaultMutationOptions(n),state:r});return this.add(o),o}add(t){w(this,lt).add(t);const n=mr(t);if(typeof n=="string"){const r=w(this,He).get(n);r?r.push(t):w(this,He).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(w(this,lt).delete(t)){const n=mr(t);if(typeof n=="string"){const r=w(this,He).get(n);if(r)if(r.length>1){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}else r[0]===t&&w(this,He).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=mr(t);if(typeof n=="string"){const r=w(this,He).get(n),o=r==null?void 0:r.find(s=>s.state.status==="pending");return!o||o===t}else return!0}runNext(t){var r;const n=mr(t);if(typeof n=="string"){const o=(r=w(this,He).get(n))==null?void 0:r.find(s=>s!==t&&s.state.isPaused);return(o==null?void 0:o.continue())??Promise.resolve()}else return Promise.resolve()}clear(){pe.batch(()=>{w(this,lt).forEach(t=>{this.notify({type:"removed",mutation:t})}),w(this,lt).clear(),w(this,He).clear()})}getAll(){return Array.from(w(this,lt))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Ha(n,r))}findAll(t={}){return this.getAll().filter(n=>Ha(t,n))}notify(t){pe.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return pe.batch(()=>Promise.all(t.map(n=>n.continue().catch(ke))))}},lt=new WeakMap,He=new WeakMap,Qn=new WeakMap,Di);function mr(e){var t;return(t=e.options.scope)==null?void 0:t.id}function qa(e){return{onFetch:(t,n)=>{var f,p,g,h,y;const r=t.options,o=(g=(p=(f=t.fetchOptions)==null?void 0:f.meta)==null?void 0:p.fetchMore)==null?void 0:g.direction,s=((h=t.state.data)==null?void 0:h.pages)||[],a=((y=t.state.data)==null?void 0:y.pageParams)||[];let i={pages:[],pageParams:[]},u=0;const d=async()=>{let m=!1;const b=k=>{Object.defineProperty(k,"signal",{enumerable:!0,get:()=>(t.signal.aborted?m=!0:t.signal.addEventListener("abort",()=>{m=!0}),t.signal)})},v=uc(t.options,t.fetchOptions),x=async(k,E,S)=>{if(m)return Promise.reject();if(E==null&&k.pages.length)return Promise.resolve(k);const A=(()=>{const U={client:t.client,queryKey:t.queryKey,pageParam:E,direction:S?"backward":"forward",meta:t.options.meta};return b(U),U})(),L=await v(A),{maxPages:P}=t.options,$=S?Fm:Mm;return{pages:$(k.pages,L,P),pageParams:$(k.pageParams,E,P)}};if(o&&s.length){const k=o==="backward",E=k?Xm:za,S={pages:s,pageParams:a},R=E(r,S);i=await x(S,R,k)}else{const k=e??s.length;do{const E=u===0?a[0]??r.initialPageParam:za(r,i);if(u>0&&E==null)break;i=await x(i,E),u++}while(u<k)}return i};t.options.persister?t.fetchFn=()=>{var m,b;return(b=(m=t.options).persister)==null?void 0:b.call(m,d,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=d}}}function za(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function Xm(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var de,Et,St,yn,wn,Tt,vn,xn,Li,Zm=(Li=class{constructor(e={}){q(this,de);q(this,Et);q(this,St);q(this,yn);q(this,wn);q(this,Tt);q(this,vn);q(this,xn);F(this,de,e.queryCache||new Jm),F(this,Et,e.mutationCache||new Qm),F(this,St,e.defaultOptions||{}),F(this,yn,new Map),F(this,wn,new Map),F(this,Tt,0)}mount(){dr(this,Tt)._++,w(this,Tt)===1&&(F(this,vn,Us.subscribe(async e=>{e&&(await this.resumePausedMutations(),w(this,de).onFocus())})),F(this,xn,Dr.subscribe(async e=>{e&&(await this.resumePausedMutations(),w(this,de).onOnline())})))}unmount(){var e,t;dr(this,Tt)._--,w(this,Tt)===0&&((e=w(this,vn))==null||e.call(this),F(this,vn,void 0),(t=w(this,xn))==null||t.call(this),F(this,xn,void 0))}isFetching(e){return w(this,de).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return w(this,Et).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=w(this,de).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=w(this,de).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(_t(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return w(this,de).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=w(this,de).get(r.queryHash),s=o==null?void 0:o.state.data,a=Dm(t,s);if(a!==void 0)return w(this,de).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return pe.batch(()=>w(this,de).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=w(this,de).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=w(this,de);pe.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=w(this,de);return pe.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=pe.batch(()=>w(this,de).findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(ke).catch(ke)}invalidateQueries(e,t={}){return pe.batch(()=>(w(this,de).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=pe.batch(()=>w(this,de).findAll(e).filter(o=>!o.isDisabled()&&!o.isStatic()).map(o=>{let s=o.fetch(void 0,n);return n.throwOnError||(s=s.catch(ke)),o.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(ke)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=w(this,de).build(this,t);return n.isStaleByTime(_t(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(ke).catch(ke)}fetchInfiniteQuery(e){return e.behavior=qa(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(ke).catch(ke)}ensureInfiniteQueryData(e){return e.behavior=qa(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Dr.isOnline()?w(this,Et).resumePausedMutations():Promise.resolve()}getQueryCache(){return w(this,de)}getMutationCache(){return w(this,Et)}getDefaultOptions(){return w(this,St)}setDefaultOptions(e){F(this,St,e)}setQueryDefaults(e,t){w(this,yn).set(Vn(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...w(this,yn).values()],n={};return t.forEach(r=>{Jn(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){w(this,wn).set(Vn(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...w(this,wn).values()],n={};return t.forEach(r=>{Jn(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...w(this,St).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Fs(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Hs&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...w(this,St).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){w(this,de).clear(),w(this,Et).clear()}},de=new WeakMap,Et=new WeakMap,St=new WeakMap,yn=new WeakMap,wn=new WeakMap,Tt=new WeakMap,vn=new WeakMap,xn=new WeakMap,Li),ve,Z,Xn,ye,Bt,kn,Rt,At,Zn,En,Sn,qt,zt,Ct,Tn,ne,Bn,es,ts,ns,rs,os,ss,as,bc,Mi,eg=(Mi=class extends nr{constructor(t,n){super();q(this,ne);q(this,ve);q(this,Z);q(this,Xn);q(this,ye);q(this,Bt);q(this,kn);q(this,Rt);q(this,At);q(this,Zn);q(this,En);q(this,Sn);q(this,qt);q(this,zt);q(this,Ct);q(this,Tn,new Set);this.options=n,F(this,ve,t),F(this,At,null),F(this,Rt,Zo()),this.options.experimental_prefetchInRender||w(this,Rt).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(w(this,Z).addObserver(this),Ga(w(this,Z),this.options)?X(this,ne,Bn).call(this):this.updateResult(),X(this,ne,rs).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return is(w(this,Z),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return is(w(this,Z),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,X(this,ne,os).call(this),X(this,ne,ss).call(this),w(this,Z).removeObserver(this)}setOptions(t){const n=this.options,r=w(this,Z);if(this.options=w(this,ve).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Ne(this.options.enabled,w(this,Z))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");X(this,ne,as).call(this),w(this,Z).setOptions(this.options),n._defaulted&&!Yo(this.options,n)&&w(this,ve).getQueryCache().notify({type:"observerOptionsUpdated",query:w(this,Z),observer:this});const o=this.hasListeners();o&&Wa(w(this,Z),r,this.options,n)&&X(this,ne,Bn).call(this),this.updateResult(),o&&(w(this,Z)!==r||Ne(this.options.enabled,w(this,Z))!==Ne(n.enabled,w(this,Z))||_t(this.options.staleTime,w(this,Z))!==_t(n.staleTime,w(this,Z)))&&X(this,ne,es).call(this);const s=X(this,ne,ts).call(this);o&&(w(this,Z)!==r||Ne(this.options.enabled,w(this,Z))!==Ne(n.enabled,w(this,Z))||s!==w(this,Ct))&&X(this,ne,ns).call(this,s)}getOptimisticResult(t){const n=w(this,ve).getQueryCache().build(w(this,ve),t),r=this.createResult(n,t);return ng(this,r)&&(F(this,ye,r),F(this,kn,this.options),F(this,Bt,w(this,Z).state)),r}getCurrentResult(){return w(this,ye)}trackResult(t,n){return new Proxy(t,{get:(r,o)=>(this.trackProp(o),n==null||n(o),Reflect.get(r,o))})}trackProp(t){w(this,Tn).add(t)}getCurrentQuery(){return w(this,Z)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const n=w(this,ve).defaultQueryOptions(t),r=w(this,ve).getQueryCache().build(w(this,ve),n);return r.fetch().then(()=>this.createResult(r,n))}fetch(t){return X(this,ne,Bn).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),w(this,ye)))}createResult(t,n){var P;const r=w(this,Z),o=this.options,s=w(this,ye),a=w(this,Bt),i=w(this,kn),d=t!==r?t.state:w(this,Xn),{state:f}=t;let p={...f},g=!1,h;if(n._optimisticResults){const $=this.hasListeners(),U=!$&&Ga(t,n),I=$&&Wa(t,r,n,o);(U||I)&&(p={...p,...gc(f.data,t.options)}),n._optimisticResults==="isRestoring"&&(p.fetchStatus="idle")}let{error:y,errorUpdatedAt:m,status:b}=p;h=p.data;let v=!1;if(n.placeholderData!==void 0&&h===void 0&&b==="pending"){let $;s!=null&&s.isPlaceholderData&&n.placeholderData===(i==null?void 0:i.placeholderData)?($=s.data,v=!0):$=typeof n.placeholderData=="function"?n.placeholderData((P=w(this,Sn))==null?void 0:P.state.data,w(this,Sn)):n.placeholderData,$!==void 0&&(b="success",h=Xo(s==null?void 0:s.data,$,n),g=!0)}if(n.select&&h!==void 0&&!v)if(s&&h===(a==null?void 0:a.data)&&n.select===w(this,Zn))h=w(this,En);else try{F(this,Zn,n.select),h=n.select(h),h=Xo(s==null?void 0:s.data,h,n),F(this,En,h),F(this,At,null)}catch($){F(this,At,$)}w(this,At)&&(y=w(this,At),h=w(this,En),m=Date.now(),b="error");const x=p.fetchStatus==="fetching",k=b==="pending",E=b==="error",S=k&&x,R=h!==void 0,L={status:b,fetchStatus:p.fetchStatus,isPending:k,isSuccess:b==="success",isError:E,isInitialLoading:S,isLoading:S,data:h,dataUpdatedAt:p.dataUpdatedAt,error:y,errorUpdatedAt:m,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>d.dataUpdateCount||p.errorUpdateCount>d.errorUpdateCount,isFetching:x,isRefetching:x&&!k,isLoadingError:E&&!R,isPaused:p.fetchStatus==="paused",isPlaceholderData:g,isRefetchError:E&&R,isStale:Bs(t,n),refetch:this.refetch,promise:w(this,Rt),isEnabled:Ne(n.enabled,t)!==!1};if(this.options.experimental_prefetchInRender){const $=G=>{L.status==="error"?G.reject(L.error):L.data!==void 0&&G.resolve(L.data)},U=()=>{const G=F(this,Rt,L.promise=Zo());$(G)},I=w(this,Rt);switch(I.status){case"pending":t.queryHash===r.queryHash&&$(I);break;case"fulfilled":(L.status==="error"||L.data!==I.value)&&U();break;case"rejected":(L.status!=="error"||L.error!==I.reason)&&U();break}}return L}updateResult(){const t=w(this,ye),n=this.createResult(w(this,Z),this.options);if(F(this,Bt,w(this,Z).state),F(this,kn,this.options),w(this,Bt).data!==void 0&&F(this,Sn,w(this,Z)),Yo(n,t))return;F(this,ye,n);const r=()=>{if(!t)return!0;const{notifyOnChangeProps:o}=this.options,s=typeof o=="function"?o():o;if(s==="all"||!s&&!w(this,Tn).size)return!0;const a=new Set(s??w(this,Tn));return this.options.throwOnError&&a.add("error"),Object.keys(w(this,ye)).some(i=>{const u=i;return w(this,ye)[u]!==t[u]&&a.has(u)})};X(this,ne,bc).call(this,{listeners:r()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&X(this,ne,rs).call(this)}},ve=new WeakMap,Z=new WeakMap,Xn=new WeakMap,ye=new WeakMap,Bt=new WeakMap,kn=new WeakMap,Rt=new WeakMap,At=new WeakMap,Zn=new WeakMap,En=new WeakMap,Sn=new WeakMap,qt=new WeakMap,zt=new WeakMap,Ct=new WeakMap,Tn=new WeakMap,ne=new WeakSet,Bn=function(t){X(this,ne,as).call(this);let n=w(this,Z).fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(ke)),n},es=function(){X(this,ne,os).call(this);const t=_t(this.options.staleTime,w(this,Z));if(Jt||w(this,ye).isStale||!Ko(t))return;const r=cc(w(this,ye).dataUpdatedAt,t)+1;F(this,qt,setTimeout(()=>{w(this,ye).isStale||this.updateResult()},r))},ts=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(w(this,Z)):this.options.refetchInterval)??!1},ns=function(t){X(this,ne,ss).call(this),F(this,Ct,t),!(Jt||Ne(this.options.enabled,w(this,Z))===!1||!Ko(w(this,Ct))||w(this,Ct)===0)&&F(this,zt,setInterval(()=>{(this.options.refetchIntervalInBackground||Us.isFocused())&&X(this,ne,Bn).call(this)},w(this,Ct)))},rs=function(){X(this,ne,es).call(this),X(this,ne,ns).call(this,X(this,ne,ts).call(this))},os=function(){w(this,qt)&&(clearTimeout(w(this,qt)),F(this,qt,void 0))},ss=function(){w(this,zt)&&(clearInterval(w(this,zt)),F(this,zt,void 0))},as=function(){const t=w(this,ve).getQueryCache().build(w(this,ve),this.options);if(t===w(this,Z))return;const n=w(this,Z);F(this,Z,t),F(this,Xn,t.state),this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))},bc=function(t){pe.batch(()=>{t.listeners&&this.listeners.forEach(n=>{n(w(this,ye))}),w(this,ve).getQueryCache().notify({query:w(this,Z),type:"observerResultsUpdated"})})},Mi);function tg(e,t){return Ne(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Ga(e,t){return tg(e,t)||e.state.data!==void 0&&is(e,t,t.refetchOnMount)}function is(e,t,n){if(Ne(t.enabled,e)!==!1&&_t(t.staleTime,e)!=="static"){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Bs(e,t)}return!1}function Wa(e,t,n,r){return(e!==t||Ne(r.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&Bs(e,n)}function Bs(e,t){return Ne(t.enabled,e)!==!1&&e.isStaleByTime(_t(t.staleTime,e))}function ng(e,t){return!Yo(e.getCurrentResult(),t)}var yc=c.createContext(void 0),rg=e=>{const t=c.useContext(yc);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},og=({client:e,children:t})=>(c.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),l.jsx(yc.Provider,{value:e,children:t})),wc=c.createContext(!1),sg=()=>c.useContext(wc);wc.Provider;function ag(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var ig=c.createContext(ag()),lg=()=>c.useContext(ig),cg=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},dg=e=>{c.useEffect(()=>{e.clearReset()},[e])},ug=({result:e,errorResetBoundary:t,throwOnError:n,query:r,suspense:o})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(o&&e.data===void 0||Hm(n,[e.error,r])),hg=e=>{if(e.suspense){const t=r=>r==="static"?r:Math.max(r??1e3,1e3),n=e.staleTime;e.staleTime=typeof n=="function"?(...r)=>t(n(...r)):t(n),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},fg=(e,t)=>e.isLoading&&e.isFetching&&!t,pg=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,Va=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function mg(e,t,n){var p,g,h,y,m;const r=sg(),o=lg(),s=rg(),a=s.defaultQueryOptions(e);(g=(p=s.getDefaultOptions().queries)==null?void 0:p._experimental_beforeQuery)==null||g.call(p,a),a._optimisticResults=r?"isRestoring":"optimistic",hg(a),cg(a,o),dg(o);const i=!s.getQueryCache().get(a.queryHash),[u]=c.useState(()=>new t(s,a)),d=u.getOptimisticResult(a),f=!r&&e.subscribed!==!1;if(c.useSyncExternalStore(c.useCallback(b=>{const v=f?u.subscribe(pe.batchCalls(b)):ke;return u.updateResult(),v},[u,f]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),c.useEffect(()=>{u.setOptions(a)},[a,u]),pg(a,d))throw Va(a,u,o);if(ug({result:d,errorResetBoundary:o,throwOnError:a.throwOnError,query:s.getQueryCache().get(a.queryHash),suspense:a.suspense}))throw d.error;if((y=(h=s.getDefaultOptions().queries)==null?void 0:h._experimental_afterQuery)==null||y.call(h,a,d),a.experimental_prefetchInRender&&!Jt&&fg(d,r)){const b=i?Va(a,u,o):(m=s.getQueryCache().get(a.queryHash))==null?void 0:m.promise;b==null||b.catch(ke).finally(()=>{u.updateResult()})}return a.notifyOnChangeProps?d:u.trackResult(d)}function vc(e,t){return mg(e,eg)}var gg=typeof Element<"u",bg=typeof Map=="function",yg=typeof Set=="function",wg=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Rr(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Rr(e[r],t[r]))return!1;return!0}var s;if(bg&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(s=e.entries();!(r=s.next()).done;)if(!t.has(r.value[0]))return!1;for(s=e.entries();!(r=s.next()).done;)if(!Rr(r.value[1],t.get(r.value[0])))return!1;return!0}if(yg&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(s=e.entries();!(r=s.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(wg&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(gg&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!Rr(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var vg=function(t,n){try{return Rr(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const xg=ys(vg);var kg=function(e,t,n,r,o,s,a,i){if(!e){var u;if(t===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,r,o,s,a,i],f=0;u=new Error(t.replace(/%s/g,function(){return d[f++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},Eg=kg;const Ja=ys(Eg);var Sg=function(t,n,r,o){var s=r?r.call(o,t,n):void 0;if(s!==void 0)return!!s;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var a=Object.keys(t),i=Object.keys(n);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),d=0;d<a.length;d++){var f=a[d];if(!u(f))return!1;var p=t[f],g=n[f];if(s=r?r.call(o,p,g,f):void 0,s===!1||s===void 0&&p!==g)return!1}return!0};const Tg=ys(Sg);var xc=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(xc||{}),xo={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Ka=Object.values(xc),qs={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Rg=Object.entries(qs).reduce((e,[t,n])=>(e[n]=t,e),{}),Ue="data-rh",un={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},hn=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},Ag=e=>{let t=hn(e,"title");const n=hn(e,un.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=hn(e,un.DEFAULT_TITLE);return t||r||void 0},Cg=e=>hn(e,un.ON_CHANGE_CLIENT_STATE)||(()=>{}),ko=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),_g=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const o=Object.keys(r);for(let s=0;s<o.length;s+=1){const i=o[s].toLowerCase();if(e.indexOf(i)!==-1&&r[i])return n.concat(r)}}return n},[]),Pg=e=>console&&typeof console.warn=="function"&&console.warn(e),Mn=(e,t,n)=>{const r={};return n.filter(o=>Array.isArray(o[e])?!0:(typeof o[e]<"u"&&Pg(`Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`),!1)).map(o=>o[e]).reverse().reduce((o,s)=>{const a={};s.filter(u=>{let d;const f=Object.keys(u);for(let g=0;g<f.length;g+=1){const h=f[g],y=h.toLowerCase();t.indexOf(y)!==-1&&!(d==="rel"&&u[d].toLowerCase()==="canonical")&&!(y==="rel"&&u[y].toLowerCase()==="stylesheet")&&(d=y),t.indexOf(h)!==-1&&(h==="innerHTML"||h==="cssText"||h==="itemprop")&&(d=h)}if(!d||!u[d])return!1;const p=u[d].toLowerCase();return r[d]||(r[d]={}),a[d]||(a[d]={}),r[d][p]?!1:(a[d][p]=!0,!0)}).reverse().forEach(u=>o.push(u));const i=Object.keys(a);for(let u=0;u<i.length;u+=1){const d=i[u],f={...r[d],...a[d]};r[d]=f}return o},[]).reverse()},Ng=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},Og=e=>({baseTag:_g(["href"],e),bodyAttributes:ko("bodyAttributes",e),defer:hn(e,un.DEFER),encode:hn(e,un.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ko("htmlAttributes",e),linkTags:Mn("link",["rel","href"],e),metaTags:Mn("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:Mn("noscript",["innerHTML"],e),onChangeClientState:Cg(e),scriptTags:Mn("script",["src","innerHTML"],e),styleTags:Mn("style",["cssText"],e),title:Ag(e),titleAttributes:ko("titleAttributes",e),prioritizeSeoTags:Ng(e,un.PRIORITIZE_SEO_TAGS)}),kc=e=>Array.isArray(e)?e.join(""):e,jg=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Eo=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(jg(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},Ya=(e,t)=>({...e,[t]:void 0}),Ig=["noscript","script","style"],ls=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Ec=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),$g=(e,t,n,r)=>{const o=Ec(n),s=kc(t);return o?`<${e} ${Ue}="true" ${o}>${ls(s,r)}</${e}>`:`<${e} ${Ue}="true">${ls(s,r)}</${e}>`},Dg=(e,t,n=!0)=>t.reduce((r,o)=>{const s=o,a=Object.keys(s).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,f)=>{const p=typeof s[f]>"u"?f:`${f}="${ls(s[f],n)}"`;return d?`${d} ${p}`:p},""),i=s.innerHTML||s.cssText||"",u=Ig.indexOf(e)===-1;return`${r}<${e} ${Ue}="true" ${a}${u?"/>":`>${i}</${e}>`}`},""),Sc=(e,t={})=>Object.keys(e).reduce((n,r)=>{const o=qs[r];return n[o||r]=e[r],n},t),Lg=(e,t,n)=>{const r={key:t,[Ue]:!0},o=Sc(n,r);return[C.createElement("title",o,t)]},Ar=(e,t)=>t.map((n,r)=>{const o={key:r,[Ue]:!0};return Object.keys(n).forEach(s=>{const i=qs[s]||s;if(i==="innerHTML"||i==="cssText"){const u=n.innerHTML||n.cssText;o.dangerouslySetInnerHTML={__html:u}}else o[i]=n[s]}),C.createElement(e,o)}),_e=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>Lg(e,t.title,t.titleAttributes),toString:()=>$g(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Sc(t),toString:()=>Ec(t)};default:return{toComponent:()=>Ar(e,t),toString:()=>Dg(e,t,n)}}},Mg=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const o=Eo(e,xo.meta),s=Eo(t,xo.link),a=Eo(n,xo.script);return{priorityMethods:{toComponent:()=>[...Ar("meta",o.priority),...Ar("link",s.priority),...Ar("script",a.priority)],toString:()=>`${_e("meta",o.priority,r)} ${_e("link",s.priority,r)} ${_e("script",a.priority,r)}`},metaTags:o.default,linkTags:s.default,scriptTags:a.default}},Fg=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:o,noscriptTags:s,styleTags:a,title:i="",titleAttributes:u,prioritizeSeoTags:d}=e;let{linkTags:f,metaTags:p,scriptTags:g}=e,h={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:h,linkTags:f,metaTags:p,scriptTags:g}=Mg(e)),{priority:h,base:_e("base",t,r),bodyAttributes:_e("bodyAttributes",n,r),htmlAttributes:_e("htmlAttributes",o,r),link:_e("link",f,r),meta:_e("meta",p,r),noscript:_e("noscript",s,r),script:_e("script",g,r),style:_e("style",a,r),title:_e("title",{title:i,titleAttributes:u},r)}},cs=Fg,gr=[],Tc=!!(typeof window<"u"&&window.document&&window.document.createElement),ds=class{constructor(e,t){ot(this,"instances",[]);ot(this,"canUseDOM",Tc);ot(this,"context");ot(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?gr:this.instances,add:e=>{(this.canUseDOM?gr:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?gr:this.instances).indexOf(e);(this.canUseDOM?gr:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=cs({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Hg={},Rc=C.createContext(Hg),Gt,Ac=(Gt=class extends c.Component{constructor(n){super(n);ot(this,"helmetData");this.helmetData=new ds(this.props.context||{},Gt.canUseDOM)}render(){return C.createElement(Rc.Provider,{value:this.helmetData.value},this.props.children)}},ot(Gt,"canUseDOM",Tc),Gt),tn=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${Ue}]`),o=[].slice.call(r),s=[];let a;return t&&t.length&&t.forEach(i=>{const u=document.createElement(e);for(const d in i)if(Object.prototype.hasOwnProperty.call(i,d))if(d==="innerHTML")u.innerHTML=i.innerHTML;else if(d==="cssText")u.styleSheet?u.styleSheet.cssText=i.cssText:u.appendChild(document.createTextNode(i.cssText));else{const f=d,p=typeof i[f]>"u"?"":i[f];u.setAttribute(d,p)}u.setAttribute(Ue,"true"),o.some((d,f)=>(a=f,u.isEqualNode(d)))?o.splice(a,1):s.push(u)}),o.forEach(i=>{var u;return(u=i.parentNode)==null?void 0:u.removeChild(i)}),s.forEach(i=>n.appendChild(i)),{oldTags:o,newTags:s}},us=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(Ue),o=r?r.split(","):[],s=[...o],a=Object.keys(t);for(const i of a){const u=t[i]||"";n.getAttribute(i)!==u&&n.setAttribute(i,u),o.indexOf(i)===-1&&o.push(i);const d=s.indexOf(i);d!==-1&&s.splice(d,1)}for(let i=s.length-1;i>=0;i-=1)n.removeAttribute(s[i]);o.length===s.length?n.removeAttribute(Ue):n.getAttribute(Ue)!==a.join(",")&&n.setAttribute(Ue,a.join(","))},Ug=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=kc(e)),us("title",t)},Qa=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:o,linkTags:s,metaTags:a,noscriptTags:i,onChangeClientState:u,scriptTags:d,styleTags:f,title:p,titleAttributes:g}=e;us("body",r),us("html",o),Ug(p,g);const h={baseTag:tn("base",n),linkTags:tn("link",s),metaTags:tn("meta",a),noscriptTags:tn("noscript",i),scriptTags:tn("script",d),styleTags:tn("style",f)},y={},m={};Object.keys(h).forEach(b=>{const{newTags:v,oldTags:x}=h[b];v.length&&(y[b]=v),x.length&&(m[b]=h[b].oldTags)}),t&&t(),u(e,y,m)},Fn=null,Bg=e=>{Fn&&cancelAnimationFrame(Fn),e.defer?Fn=requestAnimationFrame(()=>{Qa(e,()=>{Fn=null})}):(Qa(e),Fn=null)},qg=Bg,Xa=class extends c.Component{constructor(){super(...arguments);ot(this,"rendered",!1)}shouldComponentUpdate(t){return!Tg(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const o=Og(t.get().map(s=>{const a={...s.props};return delete a.context,a}));Ac.canUseDOM?qg(o):cs&&(r=cs(o)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Mo,zg=(Mo=class extends c.Component{shouldComponentUpdate(e){return!xg(Ya(this.props,"helmetData"),Ya(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return Ja(Ka.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Ka.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),Ja(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return C.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:o,...s}=r.props,a=Object.keys(s).reduce((u,d)=>(u[Rg[d]||d]=s[d],u),{});let{type:i}=r;switch(typeof i=="symbol"?i=i.toString():this.warnOnInvalidChildren(r,o),i){case"Symbol(react.fragment)":t=this.mapChildrenToProps(o,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,a,o);break;default:t=this.mapObjectTypeChildren(r,t,a,o);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof ds)){const o=r;r=new ds(o.context,!0),delete n.helmetData}return r?C.createElement(Xa,{...n,context:r.value}):C.createElement(Rc.Consumer,null,o=>C.createElement(Xa,{...n,context:o}))}},ot(Mo,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Mo);const Gg=Ss("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",hero:"bg-primary text-primary-foreground font-mono uppercase tracking-widest font-semibold hover:bg-primary/90 hover:shadow-[0_0_26px_-6px_hsl(var(--primary)/0.6)]",heroOutline:"border border-primary/60 text-foreground bg-transparent font-mono uppercase tracking-widest font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary",glass:"border border-border bg-background/70 backdrop-blur-md text-foreground hover:border-primary/50 hover:text-primary"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-sm px-3",lg:"h-12 rounded-sm px-7 text-sm",xl:"h-14 rounded-sm px-10 text-base",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ct=c.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},s)=>{const a=r?Eu:"button";return l.jsx(a,{className:Q(Gg({variant:t,size:n,className:e})),ref:s,...o})});ct.displayName="Button";let hs;const fs=[];function Wg(e){hs=e;for(const t of fs)e.capture(...t);fs.length=0}const Vg={capture:(...e)=>{if(hs)return hs.capture(...e);fs.push(e)}};function rr(){return Vg}function Jg({theme:e,toggleTheme:t}){const n=rr(),r=()=>{t(),n==null||n.capture("theme_toggled",{theme:e==="dark"?"light":"dark"})};return l.jsx(ct,{variant:"glass",size:"icon",onClick:r,"aria-label":`Switch to ${e==="dark"?"light":"dark"} mode`,title:`Switch to ${e==="dark"?"light":"dark"} mode`,className:"relative overflow-hidden",children:l.jsx("div",{className:"transition-transform duration-300 ease-in-out",style:{transform:`rotate(${e==="dark"?0:180}deg)`},children:e==="dark"?l.jsx(kl,{className:"h-5 w-5"}):l.jsx(Ph,{className:"h-5 w-5"})})})}var So="focusScope.autoFocusOnMount",To="focusScope.autoFocusOnUnmount",Za={bubbles:!1,cancelable:!0},Kg="FocusScope",Cc=c.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:s,...a}=e,[i,u]=c.useState(null),d=me(o),f=me(s),p=c.useRef(null),g=he(t,m=>u(m)),h=c.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.useEffect(()=>{if(r){let m=function(k){if(h.paused||!i)return;const E=k.target;i.contains(E)?p.current=E:vt(p.current,{select:!0})},b=function(k){if(h.paused||!i)return;const E=k.relatedTarget;E!==null&&(i.contains(E)||vt(p.current,{select:!0}))},v=function(k){if(document.activeElement===document.body)for(const S of k)S.removedNodes.length>0&&vt(i)};document.addEventListener("focusin",m),document.addEventListener("focusout",b);const x=new MutationObserver(v);return i&&x.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",m),document.removeEventListener("focusout",b),x.disconnect()}}},[r,i,h.paused]),c.useEffect(()=>{if(i){ti.add(h);const m=document.activeElement;if(!i.contains(m)){const v=new CustomEvent(So,Za);i.addEventListener(So,d),i.dispatchEvent(v),v.defaultPrevented||(Yg(tb(_c(i)),{select:!0}),document.activeElement===m&&vt(i))}return()=>{i.removeEventListener(So,d),setTimeout(()=>{const v=new CustomEvent(To,Za);i.addEventListener(To,f),i.dispatchEvent(v),v.defaultPrevented||vt(m??document.body,{select:!0}),i.removeEventListener(To,f),ti.remove(h)},0)}}},[i,d,f,h]);const y=c.useCallback(m=>{if(!n&&!r||h.paused)return;const b=m.key==="Tab"&&!m.altKey&&!m.ctrlKey&&!m.metaKey,v=document.activeElement;if(b&&v){const x=m.currentTarget,[k,E]=Qg(x);k&&E?!m.shiftKey&&v===E?(m.preventDefault(),n&&vt(k,{select:!0})):m.shiftKey&&v===k&&(m.preventDefault(),n&&vt(E,{select:!0})):v===x&&m.preventDefault()}},[n,r,h.paused]);return l.jsx(ee.div,{tabIndex:-1,...a,ref:g,onKeyDown:y})});Cc.displayName=Kg;function Yg(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(vt(r,{select:t}),document.activeElement!==n)return}function Qg(e){const t=_c(e),n=ei(t,e),r=ei(t.reverse(),e);return[n,r]}function _c(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ei(e,t){for(const n of e)if(!Xg(n,{upTo:t}))return n}function Xg(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Zg(e){return e instanceof HTMLInputElement&&"select"in e}function vt(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Zg(e)&&t&&e.select()}}var ti=eb();function eb(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ni(e,t),e.unshift(t)},remove(t){var n;e=ni(e,t),(n=e[0])==null||n.resume()}}}function ni(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function tb(e){return e.filter(t=>t.tagName!=="A")}var Ro=0;function nb(){c.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??ri()),document.body.insertAdjacentElement("beforeend",e[1]??ri()),Ro++,()=>{Ro===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Ro--}},[])}function ri(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Ke=function(){return Ke=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Ke.apply(this,arguments)};function Pc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function rb(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,s;r<o;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Cr="right-scroll-bar-position",_r="width-before-scroll-bar",ob="with-scroll-bars-hidden",sb="--removed-body-scroll-bar-size";function Ao(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function ab(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var ib=typeof window<"u"?c.useLayoutEffect:c.useEffect,oi=new WeakMap;function lb(e,t){var n=ab(null,function(r){return e.forEach(function(o){return Ao(o,r)})});return ib(function(){var r=oi.get(n);if(r){var o=new Set(r),s=new Set(e),a=n.current;o.forEach(function(i){s.has(i)||Ao(i,null)}),s.forEach(function(i){o.has(i)||Ao(i,a)})}oi.set(n,e)},[e]),n}function cb(e){return e}function db(e,t){t===void 0&&(t=cb);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(s){var a=t(s,r);return n.push(a),function(){n=n.filter(function(i){return i!==a})}},assignSyncMedium:function(s){for(r=!0;n.length;){var a=n;n=[],a.forEach(s)}n={push:function(i){return s(i)},filter:function(){return n}}},assignMedium:function(s){r=!0;var a=[];if(n.length){var i=n;n=[],i.forEach(s),a=n}var u=function(){var f=a;a=[],f.forEach(s)},d=function(){return Promise.resolve().then(u)};d(),n={push:function(f){a.push(f),d()},filter:function(f){return a=a.filter(f),n}}}};return o}function ub(e){e===void 0&&(e={});var t=db(null);return t.options=Ke({async:!0,ssr:!1},e),t}var Nc=function(e){var t=e.sideCar,n=Pc(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return c.createElement(r,Ke({},n))};Nc.isSideCarExport=!0;function hb(e,t){return e.useMedium(t),Nc}var Oc=ub(),Co=function(){},Xr=c.forwardRef(function(e,t){var n=c.useRef(null),r=c.useState({onScrollCapture:Co,onWheelCapture:Co,onTouchMoveCapture:Co}),o=r[0],s=r[1],a=e.forwardProps,i=e.children,u=e.className,d=e.removeScrollBar,f=e.enabled,p=e.shards,g=e.sideCar,h=e.noRelative,y=e.noIsolation,m=e.inert,b=e.allowPinchZoom,v=e.as,x=v===void 0?"div":v,k=e.gapMode,E=Pc(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=g,R=lb([n,t]),A=Ke(Ke({},E),o);return c.createElement(c.Fragment,null,f&&c.createElement(S,{sideCar:Oc,removeScrollBar:d,shards:p,noRelative:h,noIsolation:y,inert:m,setCallbacks:s,allowPinchZoom:!!b,lockRef:n,gapMode:k}),a?c.cloneElement(c.Children.only(i),Ke(Ke({},A),{ref:R})):c.createElement(x,Ke({},A,{className:u,ref:R}),i))});Xr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Xr.classNames={fullWidth:_r,zeroRight:Cr};var fb=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function pb(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=fb();return t&&e.setAttribute("nonce",t),e}function mb(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function gb(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var bb=function(){var e=0,t=null;return{add:function(n){e==0&&(t=pb())&&(mb(t,n),gb(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},yb=function(){var e=bb();return function(t,n){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},jc=function(){var e=yb(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},wb={left:0,top:0,right:0,gap:0},_o=function(e){return parseInt(e||"",10)||0},vb=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[_o(n),_o(r),_o(o)]},xb=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return wb;var t=vb(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},kb=jc(),fn="data-scroll-locked",Eb=function(e,t,n,r){var o=e.left,s=e.top,a=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(ob,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(fn,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Cr,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(_r,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(Cr," .").concat(Cr,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(_r," .").concat(_r,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(fn,`] {
    `).concat(sb,": ").concat(i,`px;
  }
`)},si=function(){var e=parseInt(document.body.getAttribute(fn)||"0",10);return isFinite(e)?e:0},Sb=function(){c.useEffect(function(){return document.body.setAttribute(fn,(si()+1).toString()),function(){var e=si()-1;e<=0?document.body.removeAttribute(fn):document.body.setAttribute(fn,e.toString())}},[])},Tb=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Sb();var s=c.useMemo(function(){return xb(o)},[o]);return c.createElement(kb,{styles:Eb(s,!t,o,n?"":"!important")})},ps=!1;if(typeof window<"u")try{var br=Object.defineProperty({},"passive",{get:function(){return ps=!0,!0}});window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{ps=!1}var nn=ps?{passive:!1}:!1,Rb=function(e){return e.tagName==="TEXTAREA"},Ic=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Rb(e)&&n[t]==="visible")},Ab=function(e){return Ic(e,"overflowY")},Cb=function(e){return Ic(e,"overflowX")},ai=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=$c(e,r);if(o){var s=Dc(e,r),a=s[1],i=s[2];if(a>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},_b=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Pb=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},$c=function(e,t){return e==="v"?Ab(t):Cb(t)},Dc=function(e,t){return e==="v"?_b(t):Pb(t)},Nb=function(e,t){return e==="h"&&t==="rtl"?-1:1},Ob=function(e,t,n,r,o){var s=Nb(e,window.getComputedStyle(t).direction),a=s*r,i=n.target,u=t.contains(i),d=!1,f=a>0,p=0,g=0;do{if(!i)break;var h=Dc(e,i),y=h[0],m=h[1],b=h[2],v=m-b-s*y;(y||v)&&$c(e,i)&&(p+=v,g+=y);var x=i.parentNode;i=x&&x.nodeType===Node.DOCUMENT_FRAGMENT_NODE?x.host:x}while(!u&&i!==document.body||u&&(t.contains(i)||t===i));return(f&&(Math.abs(p)<1||!o)||!f&&(Math.abs(g)<1||!o))&&(d=!0),d},yr=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ii=function(e){return[e.deltaX,e.deltaY]},li=function(e){return e&&"current"in e?e.current:e},jb=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ib=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},$b=0,rn=[];function Db(e){var t=c.useRef([]),n=c.useRef([0,0]),r=c.useRef(),o=c.useState($b++)[0],s=c.useState(jc)[0],a=c.useRef(e);c.useEffect(function(){a.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var m=rb([e.lockRef.current],(e.shards||[]).map(li),!0).filter(Boolean);return m.forEach(function(b){return b.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),m.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=c.useCallback(function(m,b){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!a.current.allowPinchZoom;var v=yr(m),x=n.current,k="deltaX"in m?m.deltaX:x[0]-v[0],E="deltaY"in m?m.deltaY:x[1]-v[1],S,R=m.target,A=Math.abs(k)>Math.abs(E)?"h":"v";if("touches"in m&&A==="h"&&R.type==="range")return!1;var L=ai(A,R);if(!L)return!0;if(L?S=A:(S=A==="v"?"h":"v",L=ai(A,R)),!L)return!1;if(!r.current&&"changedTouches"in m&&(k||E)&&(r.current=S),!S)return!0;var P=r.current||S;return Ob(P,b,m,P==="h"?k:E,!0)},[]),u=c.useCallback(function(m){var b=m;if(!(!rn.length||rn[rn.length-1]!==s)){var v="deltaY"in b?ii(b):yr(b),x=t.current.filter(function(S){return S.name===b.type&&(S.target===b.target||b.target===S.shadowParent)&&jb(S.delta,v)})[0];if(x&&x.should){b.cancelable&&b.preventDefault();return}if(!x){var k=(a.current.shards||[]).map(li).filter(Boolean).filter(function(S){return S.contains(b.target)}),E=k.length>0?i(b,k[0]):!a.current.noIsolation;E&&b.cancelable&&b.preventDefault()}}},[]),d=c.useCallback(function(m,b,v,x){var k={name:m,delta:b,target:v,should:x,shadowParent:Lb(v)};t.current.push(k),setTimeout(function(){t.current=t.current.filter(function(E){return E!==k})},1)},[]),f=c.useCallback(function(m){n.current=yr(m),r.current=void 0},[]),p=c.useCallback(function(m){d(m.type,ii(m),m.target,i(m,e.lockRef.current))},[]),g=c.useCallback(function(m){d(m.type,yr(m),m.target,i(m,e.lockRef.current))},[]);c.useEffect(function(){return rn.push(s),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:g}),document.addEventListener("wheel",u,nn),document.addEventListener("touchmove",u,nn),document.addEventListener("touchstart",f,nn),function(){rn=rn.filter(function(m){return m!==s}),document.removeEventListener("wheel",u,nn),document.removeEventListener("touchmove",u,nn),document.removeEventListener("touchstart",f,nn)}},[]);var h=e.removeScrollBar,y=e.inert;return c.createElement(c.Fragment,null,y?c.createElement(s,{styles:Ib(o)}):null,h?c.createElement(Tb,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Lb(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Mb=hb(Oc,Db);var Lc=c.forwardRef(function(e,t){return c.createElement(Xr,Ke({},e,{ref:t,sideCar:Mb}))});Lc.classNames=Xr.classNames;var Fb=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},on=new WeakMap,wr=new WeakMap,vr={},Po=0,Mc=function(e){return e&&(e.host||Mc(e.parentNode))},Hb=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Mc(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Ub=function(e,t,n,r){var o=Hb(t,Array.isArray(e)?e:[e]);vr[n]||(vr[n]=new WeakMap);var s=vr[n],a=[],i=new Set,u=new Set(o),d=function(p){!p||i.has(p)||(i.add(p),d(p.parentNode))};o.forEach(d);var f=function(p){!p||u.has(p)||Array.prototype.forEach.call(p.children,function(g){if(i.has(g))f(g);else try{var h=g.getAttribute(r),y=h!==null&&h!=="false",m=(on.get(g)||0)+1,b=(s.get(g)||0)+1;on.set(g,m),s.set(g,b),a.push(g),m===1&&y&&wr.set(g,!0),b===1&&g.setAttribute(n,"true"),y||g.setAttribute(r,"true")}catch(v){console.error("aria-hidden: cannot operate on ",g,v)}})};return f(t),i.clear(),Po++,function(){a.forEach(function(p){var g=on.get(p)-1,h=s.get(p)-1;on.set(p,g),s.set(p,h),g||(wr.has(p)||p.removeAttribute(r),wr.delete(p)),h||p.removeAttribute(n)}),Po--,Po||(on=new WeakMap,on=new WeakMap,wr=new WeakMap,vr={})}},Bb=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Fb(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Ub(r,o,n,"aria-hidden")):function(){return null}},Zr="Dialog",[Fc,xv]=Pn(Zr),[qb,ze]=Fc(Zr),Hc=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:s,modal:a=!0}=e,i=c.useRef(null),u=c.useRef(null),[d,f]=Yi({prop:r,defaultProp:o??!1,onChange:s,caller:Zr});return l.jsx(qb,{scope:t,triggerRef:i,contentRef:u,contentId:dt(),titleId:dt(),descriptionId:dt(),open:d,onOpenChange:f,onOpenToggle:c.useCallback(()=>f(p=>!p),[f]),modal:a,children:n})};Hc.displayName=Zr;var Uc="DialogTrigger",Bc=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=ze(Uc,n),s=he(t,o.triggerRef);return l.jsx(ee.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Ws(o.open),...r,ref:s,onClick:te(e.onClick,o.onOpenToggle)})});Bc.displayName=Uc;var zs="DialogPortal",[zb,qc]=Fc(zs,{forceMount:void 0}),zc=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,s=ze(zs,t);return l.jsx(zb,{scope:t,forceMount:n,children:c.Children.map(r,a=>l.jsx(et,{present:n||s.open,children:l.jsx(vs,{asChild:!0,container:o,children:a})}))})};zc.displayName=zs;var Lr="DialogOverlay",Gc=c.forwardRef((e,t)=>{const n=qc(Lr,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,s=ze(Lr,e.__scopeDialog);return s.modal?l.jsx(et,{present:r||s.open,children:l.jsx(Wb,{...o,ref:t})}):null});Gc.displayName=Lr;var Gb=zn("DialogOverlay.RemoveScroll"),Wb=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=ze(Lr,n);return l.jsx(Lc,{as:Gb,allowPinchZoom:!0,shards:[o.contentRef],children:l.jsx(ee.div,{"data-state":Ws(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),Kt="DialogContent",Wc=c.forwardRef((e,t)=>{const n=qc(Kt,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,s=ze(Kt,e.__scopeDialog);return l.jsx(et,{present:r||s.open,children:s.modal?l.jsx(Vb,{...o,ref:t}):l.jsx(Jb,{...o,ref:t})})});Wc.displayName=Kt;var Vb=c.forwardRef((e,t)=>{const n=ze(Kt,e.__scopeDialog),r=c.useRef(null),o=he(t,n.contentRef,r);return c.useEffect(()=>{const s=r.current;if(s)return Bb(s)},[]),l.jsx(Vc,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:te(e.onCloseAutoFocus,s=>{var a;s.preventDefault(),(a=n.triggerRef.current)==null||a.focus()}),onPointerDownOutside:te(e.onPointerDownOutside,s=>{const a=s.detail.originalEvent,i=a.button===0&&a.ctrlKey===!0;(a.button===2||i)&&s.preventDefault()}),onFocusOutside:te(e.onFocusOutside,s=>s.preventDefault())})}),Jb=c.forwardRef((e,t)=>{const n=ze(Kt,e.__scopeDialog),r=c.useRef(!1),o=c.useRef(!1);return l.jsx(Vc,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var a,i;(a=e.onCloseAutoFocus)==null||a.call(e,s),s.defaultPrevented||(r.current||(i=n.triggerRef.current)==null||i.focus(),s.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:s=>{var u,d;(u=e.onInteractOutside)==null||u.call(e,s),s.defaultPrevented||(r.current=!0,s.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const a=s.target;((d=n.triggerRef.current)==null?void 0:d.contains(a))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&o.current&&s.preventDefault()}})}),Vc=c.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:s,...a}=e,i=ze(Kt,n),u=c.useRef(null),d=he(t,u);return nb(),l.jsxs(l.Fragment,{children:[l.jsx(Cc,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:s,children:l.jsx(qr,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":Ws(i.open),...a,ref:d,onDismiss:()=>i.onOpenChange(!1)})}),l.jsxs(l.Fragment,{children:[l.jsx(Kb,{titleId:i.titleId}),l.jsx(Qb,{contentRef:u,descriptionId:i.descriptionId})]})]})}),Gs="DialogTitle",Jc=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=ze(Gs,n);return l.jsx(ee.h2,{id:o.titleId,...r,ref:t})});Jc.displayName=Gs;var Kc="DialogDescription",Yc=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=ze(Kc,n);return l.jsx(ee.p,{id:o.descriptionId,...r,ref:t})});Yc.displayName=Kc;var Qc="DialogClose",Xc=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=ze(Qc,n);return l.jsx(ee.button,{type:"button",...r,ref:t,onClick:te(e.onClick,()=>o.onOpenChange(!1))})});Xc.displayName=Qc;function Ws(e){return e?"open":"closed"}var Zc="DialogTitleWarning",[kv,ed]=xu(Zc,{contentName:Kt,titleName:Gs,docsSlug:"dialog"}),Kb=({titleId:e})=>{const t=ed(Zc),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return c.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},Yb="DialogDescriptionWarning",Qb=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ed(Yb).contentName}}.`;return c.useEffect(()=>{var s;const o=(s=e.current)==null?void 0:s.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},Vs=Hc,Xb=Bc,Js=zc,or=Gc,sr=Wc,eo=Jc,to=Yc,Ks=Xc;const Zb=Vs,ey=Xb,ci=Ks,ty=Js,td=c.forwardRef(({className:e,...t},n)=>l.jsx(or,{className:Q("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:n}));td.displayName=or.displayName;const ny=Ss("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),nd=c.forwardRef(({side:e="right",className:t,children:n,...r},o)=>l.jsxs(ty,{children:[l.jsx(td,{}),l.jsxs(sr,{ref:o,className:Q(ny({side:e}),t),...r,children:[n,l.jsxs(Ks,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[l.jsx(Wr,{className:"h-4 w-4"}),l.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));nd.displayName=sr.displayName;const rd=({className:e,...t})=>l.jsx("div",{className:Q("flex flex-col space-y-2 text-center sm:text-left",e),...t});rd.displayName="SheetHeader";const od=c.forwardRef(({className:e,...t},n)=>l.jsx(eo,{ref:n,className:Q("text-lg font-semibold text-foreground",e),...t}));od.displayName=eo.displayName;const sd=c.forwardRef(({className:e,...t},n)=>l.jsx(to,{ref:n,className:Q("text-sm text-muted-foreground",e),...t}));sd.displayName=to.displayName;function ry(e){const[t,n]=c.useState("");return c.useEffect(()=>{const r=()=>{const o=window.scrollY+200;for(const s of e){const a=document.getElementById(s);if(a){const{offsetTop:i,offsetHeight:u}=a;if(o>=i&&o<i+u){n(s);return}}}window.scrollY<100&&n("")};return r(),window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[e]),t}const di="https://assets.calendly.com/assets/external/widget.css",oy="https://assets.calendly.com/assets/external/widget.js";let Hn=null;function ad(){if(document.querySelector(`link[href="${di}"]`))return;const e=document.createElement("link");e.rel="stylesheet",e.href=di,document.head.appendChild(e)}function id(){return window.Calendly?Promise.resolve():Hn||(Hn=new Promise((e,t)=>{const n=document.createElement("script");n.src=oy,n.async=!0,n.onload=()=>e(),n.onerror=()=>{Hn=null,t(new Error("Failed to load Calendly widget"))},document.body.appendChild(n)}),Hn)}function No(){typeof document>"u"||(ad(),id().catch(()=>{}))}async function Mr(e){var t;typeof document>"u"||(ad(),await id(),(t=window.Calendly)==null||t.initPopupWidget({url:e}))}const ln={name:"Abdelrahman Saed",role:"Senior / Lead Mobile Engineer",subtitle:"Flutter / Mobile Architect",company:"iStoria",companyUrl:"https://istoria.app/en",location:"Cairo, Egypt / Remote",email:"me@bnsaed.com",avatarUrl:"https://avatars.githubusercontent.com/u/33700292?v=4",tagline:"I ship production iOS & Android apps to 5M+ users — 7 years of Flutter, Dart, BLoC/Cubit, and Clean Architecture. I lead a mobile squad at iStoria, owning architecture, release governance, and delivery across a 50+ module codebase."},sy={status:"open",label:"Available for hire",summary:"Open to Senior / Lead Mobile Engineering roles — full-time, part-time, or contract. Remote worldwide, or hybrid / on-site across the Gulf & Egypt.",engagements:[{type:"Full-time",icon:"Briefcase",summary:"Senior / Lead Mobile Engineer",description:"Own mobile architecture, release governance, and a squad end-to-end — the way I do today at iStoria for a 5M+ user app."},{type:"Part-time",icon:"Clock",summary:"Fractional mobile lead",description:"A few days a week: architecture reviews, CI/CD and release-engineering setup, and mentoring a growing Flutter team."},{type:"Contract",icon:"FileSignature",summary:"Project-based delivery",description:"Ship a Flutter app, untangle a release pipeline, or harden performance, security, and crash-free stability for a fixed scope."}],workModes:["Remote (worldwide)","Hybrid / on-site (Gulf & Egypt)","Contract / freelance"],responseTime:"Replies within 24 hours",startDate:"Flexible start date",rate:"Discussed on call — scoped to engagement type"},Ee={github:"https://github.com/binSaed",linkedin:"https://www.linkedin.com/in/binsaed/",linkedinRecommendations:"https://www.linkedin.com/in/binsaed/details/recommendations/",stackoverflow:"https://stackoverflow.com/users/11001850/abdelrahman-saed",pubdev:"https://pub.dev/publishers/bnsaed.com/packages",cv:"https://bnsaed.com/CV/cv.pdf",email:"mailto:me@bnsaed.com",calendly:"https://calendly.com/bnsaed/meet"},Ev=["I'm a Senior / Lead Mobile Engineer with 7 years building production iOS and Android apps that have reached over 5 million users. I work in Flutter and Dart with BLoC/Cubit and Clean Architecture, and I care as much about release engineering and stability as I do about the features users see.","Today I lead a 4-engineer mobile squad at iStoria, owning architecture direction, release governance, and delivery for a 50+ module codebase. I've shipped 350+ production releases, reviewed 900+ PRs, sustained a 99.9% crash-free rate, and cut our release cycle from four weeks to one."],ld=[{value:"7+",label:"Years shipping mobile"},{value:"5M+",label:"Users reached"},{value:"99.9%",label:"Crash-free rate"},{value:"350+",label:"Production releases"},{value:"900+",label:"PRs reviewed"},{value:"40K+",label:"Abuse accounts blocked"}],Sv=[{role:"Lead Mobile Engineer",company:"iStoria",companyUrl:"https://istoria.app/en/",context:"EdTech · English Language Learning",location:"Riyadh, Saudi Arabia (Hybrid)",period:"Jun 2025 – Present",stack:["Flutter","Dart","BLoC","Cubit","PowerSync","Drift","Firebase","Sentry","GitHub Actions","GraphQL"],highlights:["Lead a 4-engineer iOS/Android squad — architecture direction, hiring bar, release governance, and quarterly roadmaps for a 5M+ user base.","Cut the release cycle 75% (4 weeks → 1) via trunk-based development, feature flags, and end-to-end CI/CD ownership.","Architected a modular Flutter codebase with 50+ feature modules and 140+ routes, enforced through CI quality gates and code review.","Hardened production security end-to-end: PII masked in logs and Sentry, cleartext traffic disabled, and TLS certificate validation enforced."]},{role:"Founding Mobile Engineer",company:"iStoria",companyUrl:"https://istoria.app/en/",context:"EdTech · English Language Learning",location:"Riyadh, Saudi Arabia (Hybrid)",period:"Jan 2022 – Jun 2025 · 3 yrs 6 mos",stack:["Flutter","Dart","BLoC","Cubit","PowerSync","Drift","Codemagic","Firebase","RevenueCat","Adjust"],highlights:["Shipped flagship growth & AI features end-to-end: Leaderboard with social sharing, AI Read-with (speech recognition), and the iStro AI chat companion.","Designed offline-first infrastructure (PowerSync + Drift) — selective per-key sync, conflict resolution, and schema migration for millions of accounts.","Architected a cross-platform anti-piracy system (jailbreak/root/tamper detection + backend behavioral analysis) that auto-blocked 30,000+ abusive accounts.","Drove a sustained performance program: ~35% cold-start reduction, ~60% rendering gains, and ~20% memory reduction."]},{role:"Mobile Engineer",company:"Happy Trip",companyUrl:"https://www.linkedin.com/company/happytrip-ar",context:"Travel / Tourism Tech",location:"Cairo, Egypt",period:"Oct 2020 – Jan 2022 · 1 yr 4 mos",stack:["Flutter","Dart","REST","Firebase"],highlights:["Owned mobile delivery end-to-end across the Flutter team — task planning, code-review gates, and the release cadence for every ship.","Architected a networking SDK with multi-layer caching, request queueing, auto-retry, token refresh, and background parsing — cutting networking code 60%.","Delivered the company's first mobile platform (consumer booking, internal HR, POS) in 14 months, enabling a full business pivot."]},{role:"Mobile Engineer (Part-time)",company:"Tech Bay Portal",companyUrl:"",context:"Ride-hailing",location:"UAE (Remote)",period:"Feb 2021 – Oct 2021 · 9 mos",stack:["Flutter","Dart","Socket.io","Google Maps"],highlights:["Delivered real-time GPS tracking and live trip updates (Socket.io, Google Maps) across driver and rider apps.","Hardened the live-tracking pipeline against intermittent connectivity — buffering location updates locally and replaying on reconnect."]},{role:"Mobile Engineer",company:"FekraSoft Co",companyUrl:"https://www.linkedin.com/company/fekrasoft",context:"Software House",location:"Cairo, Egypt",period:"Aug 2019 – Sep 2020 · 1 yr 2 mos",stack:["Flutter","Dart","RxDart","Firebase"],highlights:["Led company-wide Flutter adoption as the first Flutter engineer, mentoring the Android team and authoring the shared coding standards still in use.","Shipped production e-commerce and document-management apps with barcode scanning and file-level encryption."]}],Tv=[{category:"Mobile",icon:"Smartphone",items:["Flutter","Dart","iOS","Android","Adaptive UI","Animations","WidgetKit","Deep Linking","Push (FCM)","i18n / RTL"]},{category:"Architecture & Data",icon:"Database",items:["Clean Architecture","MVVM","BLoC","Cubit","SOLID","Dependency Injection","PowerSync","Drift","Offline-first"]},{category:"DevOps & Quality",icon:"GitBranch",items:["CI/CD","GitHub Actions","Codemagic","Fastlane","Trunk-based","Feature Flags","Sentry","Maestro / Patrol","Unit / Widget Tests"]},{category:"Monetization",icon:"CreditCard",items:["RevenueCat","Stripe","Paddle","AdMob","In-App Purchases"]},{category:"Analytics & Engagement",icon:"LineChart",items:["Adjust","CleverTap","PostHog","Segment","WebEngage","MoEngage","A/B Testing","GrowthBook"]},{category:"Leadership",icon:"Users",items:["Architecture Ownership","Technical RFCs","Release Governance","Code Review","Mentoring"]}],Rv=[{title:"flutter_cached_pdfview",description:"Native PDF viewer for iOS & Android with URL/asset/local caching, password-protected files, and gesture-based zoom.",image:"/project-images/flutter-cached-pdfview.webp",tags:["Flutter","Dart","PDF","iOS","Android"],github:"https://github.com/binSaed/flutter_cached_pdfview",demo:"https://pub.dev/packages/flutter_cached_pdfview",stars:134,likes:501,downloads:43300,caseStudySlug:"flutter-cached-pdfview"},{title:"iStoria",description:"Story-based English learning used by millions. A core mobile engineer since the founding — owning architecture, offline-first sync, and growth features.",image:"/project-images/istoria.webp",tags:["Flutter","Dart","Firebase","EdTech"],demo:"https://istoria.app/en/",downloads:5e6,caseStudySlug:"istoria"},{title:"Stickerawy",description:"WhatsApp stickers app for Android, with 500K+ installs on Google Play.",tags:["Flutter","Android","WhatsApp"],demo:"https://play.google.com/store/apps/details?id=com.stickerawy.stickers",downloads:5e5},{title:"clipboard_plus",description:"Flutter clipboard plugin with silent content-type detection on iOS — detects URLs, text, and images without triggering the paste permission dialog.",tags:["Flutter","iOS","Android","Plugin"],github:"https://github.com/binSaed/clipboard_plus",demo:"https://pub.dev/packages/clipboard_plus"},{title:"flutter_zoom_checker",description:"iOS/Android display-zoom (UI scaling) detection plugin, working around a Flutter framework limitation (issue #95421).",tags:["Flutter","iOS","Android","Plugin"],github:"https://github.com/binSaed/flutter_zoom_checker",demo:"https://pub.dev/packages/flutter_zoom_checker"},{title:"dio_firebase_performance_plus",description:"Dio interceptor that streams HTTP request metrics to Firebase Performance Monitoring.",tags:["Dart","Dio","Firebase"],github:"https://github.com/binSaed/dio_firebase_performance_plus"}],Av=[{name:"youtube_explode_dart",url:"https://github.com/Hexer10/youtube_explode_dart/pull/371"},{name:"dio_smart_retry",url:"https://github.com/rodion-m/dio_smart_retry/pull/36"},{name:"growthbook-flutter",url:"https://github.com/growthbook/growthbook-flutter/pulls?q=author:binSaed"}],Cv=[{name:"Saber Son",title:"Flutter Developer · YouTuber",relationship:"Reported directly to Abdelrahman",date:"2026-06-03",initials:"SS",image:"/recommendations/saber-son.jpg",linkedin:"https://www.linkedin.com/in/saber-son-b100b4177/",quote:"One of the things I admire most about Abdelrahman is how supportive he is. Whenever I face a challenge, he never hesitates to put aside what he's doing and help me figure it out. What sets him apart is that he doesn't just solve the problem and move on — he takes the time to explain the solution, the reasoning behind it, and how to approach similar situations in the future. Thanks to his guidance, I've become much more confident and independent when tackling technical challenges."},{name:"AlHassan Balousha",title:"Senior Software Engineer · 9+ yrs scaling apps",relationship:"Worked with Abdelrahman on the same team",date:"2026-02-16",initials:"AB",image:"/recommendations/alhassan-balousha.jpg",linkedin:"https://www.linkedin.com/in/alhassan-balousha-9b7bb8114/",quote:`Abdelrahman is a highly accomplished Software Engineer and Tech Lead with strong executive-level technical leadership.

He brings a strategic vision to building large-scale mobile applications, with deep expertise in designing scalable architectures capable of serving millions of users with stability and high performance. He combines strong engineering depth with disciplined execution, ensuring long-term product sustainability and technical excellence.

What sets him apart: influential technical leadership and sound architectural decision-making; proven ability to build scalable, high-performance systems; effective team leadership and strong engineering culture; high productivity without compromising code quality or performance; and exceptional ability to solve complex problems under pressure.

Abdelrahman is a strategic technical asset to any organization seeking strong leadership and long-term product impact.`},{name:"Fady Mondy",title:"Engineering Manager at ID8 Media · Creator of TomatoPHP",relationship:"Worked with Abdelrahman on the same team",date:"2026-01-24",initials:"FM",image:"/recommendations/fady-mondy.jpg",linkedin:"https://www.linkedin.com/in/fadymondy/",quote:"Abdelrahman played a pivotal role in the success of the iStoria mobile platform. His leadership of the mobile team was defined by technical excellence and a relentless focus on user experience. He successfully navigated complex integrations and maintained a high velocity of feature releases without compromising on code quality. He is a proactive leader who anticipates challenges before they arise, making him an invaluable asset to any engineering department."},{name:"Mohammed Helaiwa",title:"Full Stack Engineer at iStoria",relationship:"Worked with Abdelrahman on the same team",date:"2026-01-17",initials:"MH",image:"/recommendations/mohammed-helaiwa.jpg",linkedin:"https://www.linkedin.com/in/me-helaiwa/",quote:`I've had the pleasure of working with Abdelrahman Saed, and I can confidently say he is one of the most reliable and skilled software engineers I've collaborated with. Abdelrahman combines deep technical expertise in Flutter with a strong understanding of building scalable, high-quality applications, especially in the EdTech domain.

What truly sets Abdelrahman apart is his ability to think beyond just code. He approaches problems with a product mindset, balances performance with maintainability, and consistently delivers clean, well-architected solutions. As a Lead Software Engineer, he demonstrates excellent leadership, mentoring teammates, setting high engineering standards, and driving projects forward with clarity and ownership.

Abdelrahman is proactive, detail-oriented, and always eager to improve both the product and the team around him. Any organization would be fortunate to have him on board, and I highly recommend him for any role requiring strong technical leadership, Flutter expertise, and a passion for building impactful software.`},{name:"Maher Al-Ghannam",title:"Senior QA Engineer · ISTQB-CTFL",relationship:"Worked with Abdelrahman on different teams",date:"2026-01-17",initials:"MA",image:"/recommendations/maher-al-ghannam.jpg",linkedin:"https://www.linkedin.com/in/maher-alghannam/",quote:"I highly recommend Abdelrahman as a Flutter Developer Team Lead. He has strong expertise in Flutter development and consistently delivers high-quality, well-structured mobile applications. Beyond his technical skills, he is a supportive and effective leader who encourages collaboration, guides the team through challenges, and ensures projects are delivered on time with excellent quality. Working with him has been a great experience."},{name:"Omar Sulieman",title:"Growth & Performance Marketer",relationship:"Worked with Abdelrahman on different teams",date:"2026-01-15",initials:"OS",image:"/recommendations/omar-sulieman.jpg",linkedin:"https://www.linkedin.com/in/omar-sulieman-3b7861217/",quote:`I've had the pleasure of working with Abdelrahman, and he is genuinely one of the strongest software engineers I've collaborated with.

He has deep hands-on expertise in Flutter, with a solid understanding of building scalable, high-performance mobile applications. What really sets him apart is his ability to think beyond implementation — he understands architecture, performance trade-offs, and long-term maintainability, which is critical for growing products.

In the EdTech space, Abdelrahman shows strong product awareness and a clear understanding of how technology should support learning outcomes, not just features. He's reliable, detail-oriented, and consistently delivers clean, well-structured code.

On top of his technical skills, he's professional, easy to work with, and communicates clearly across technical and non-technical teams. Any team looking for a senior Flutter engineer or a strong technical lead would be lucky to have him.

Highly recommended.`},{name:"Abdelrahman Shehata",title:"Lead Software Engineer · Mobile & AI",relationship:"Worked with Abdelrahman on the same team",date:"2025-11-16",initials:"AS",image:"/recommendations/abdelrahman-shehata.jpg",linkedin:"https://www.linkedin.com/in/abdelrahman-shehata-9a20b41b1/",quote:"As a Lead Software Engineer, one of his main strengths is problem solving in daily bugs. Highly recommended for lead tech companies, and you can rely on him for the highly advanced technologies."},{name:"Haitham Essam",title:"Senior Flutter Developer",relationship:"Reported directly to Abdelrahman",date:"2025-10-06",initials:"HE",image:"/recommendations/haitham-essam.jpg",linkedin:"https://www.linkedin.com/in/haitham-essam-b69b15332/",quote:`I had the pleasure of working with Abdelrahman Saed at iStoria. From day one, Abdelrahman impressed everyone with his professionalism, creativity, and problem-solving mindset. He was always the one who could turn a complex challenge into a smooth, well-structured solution — and did it all with a positive attitude that made working together genuinely enjoyable.

Beyond his technical skills, Abdelrahman is also a great teammate who supports others and spreads positive energy in the workplace. I'm truly glad to have had the chance to work with him, and I highly recommend him for any future opportunity.`},{name:"Islam Khalil",title:"Software Engineer · Flutter Developer",relationship:"Abdelrahman was senior but didn't manage directly",date:"2024-03-27",initials:"IK",image:"/recommendations/islam-khalil.jpg",linkedin:"https://www.linkedin.com/in/islam-khalil-919278b2/",quote:"I highly recommend Abdelrahman for his exceptional creativity, passion for assisting others, and remarkable proficiency in providing quick programming solutions, specifically in Dart and both Android and iOS app development. His expertise has been invaluable, and I have greatly benefited from his guidance."},{name:"Abdullah Ehab",title:"Senior Flutter Developer at Sigma EMEA",relationship:"Worked with Abdelrahman on the same team",date:"2022-05-30",initials:"AE",image:"/recommendations/abdullah-ehab.jpg",linkedin:"https://www.linkedin.com/in/abdullah-ehab/",quote:"Abdelrahman is an added value to any development team. He is a good team player, very dedicated, high ownership, motivated and focused on the target. Also a quick learner and fast troubleshooter."},{name:"Mohamed Reda",title:"AI Engineer in Healthcare",relationship:"Worked with Abdelrahman on the same team",date:"2020-11-05",initials:"MR",image:"/recommendations/mohamed-reda.jpg",linkedin:"https://www.linkedin.com/in/mohamed-r-870271bb/",quote:"Abdelrahman is one of the fastest learners I've worked with, and I'm absolutely confident that he would be a great fit for any company."}],ui=[{q:"Who is Abdelrahman Saed?",a:"Abdelrahman Saed (also known as binSaed) is a Senior / Lead Mobile Engineer with 7 years building production Flutter apps for iOS and Android that have reached 5M+ users. He currently leads the mobile squad at iStoria."},{q:"Is Abdelrahman Saed available for hire?",a:"Yes — he's open to Senior / Lead Mobile Engineer roles on a full-time, part-time, or contract basis, working remotely worldwide or hybrid / on-site across the Gulf and Egypt. The fastest way to start a conversation is email (me@bnsaed.com) or booking a 20-minute call at calendly.com/bnsaed/meet. He typically replies within 24 hours."},{q:"What is Abdelrahman Saed's current role?",a:"He is the Lead Mobile Engineer at iStoria, an English-language learning app, where he owns mobile architecture, release governance, and delivery for a 50+ module Flutter codebase serving 5M+ users."},{q:"What technologies and skills does Abdelrahman Saed work with?",a:"Flutter and Dart with BLoC/Cubit and Clean Architecture; offline-first data (PowerSync, Drift); CI/CD and release engineering (GitHub Actions, Codemagic, Fastlane, feature flags); monetization (RevenueCat, Stripe, AdMob); analytics and engagement (Adjust, CleverTap, PostHog, GrowthBook); plus native iOS/Android integration (WidgetKit, deep linking, i18n/RTL)."},{q:"What are Abdelrahman Saed's notable projects?",a:"flutter_cached_pdfview, a popular open-source Flutter package for native PDF viewing with caching (134+ GitHub stars, 501+ pub.dev likes, 43k+ downloads); iStoria, a story-based English-learning app with 5M+ downloads; and Stickerawy, a WhatsApp stickers app with 500K+ installs. He publishes packages on pub.dev under bnsaed.com."},{q:"How can I contact Abdelrahman Saed?",a:"Email is the preferred channel: me@bnsaed.com. To schedule a call directly, book a meeting at calendly.com/bnsaed/meet. He is also reachable on GitHub (github.com/binSaed), LinkedIn (linkedin.com/in/binsaed), and Stack Overflow."},{q:"Can AI agents and answer engines use content from this site?",a:"Yes for user-facing answers (ai-input=yes), but not for training AI models (ai-train=no), per the Content-Signal directives in robots.txt. Please attribute the author when quoting."}],_v=[ui[1],{q:"What does an engagement look like?",a:"It starts with a 20-minute intro call to scope the work. Full-time and part-time roles follow your interview process; contract work gets a written scope, timeline, and deliverables before any commitment. Rate is discussed on the call and scoped to the engagement type."},{q:"Which time zones do you work with?",a:"Based in Cairo (UTC+2/+3) with comfortable overlap across European and Gulf hours, and used to async collaboration with distributed teams — remote worldwide is the default."},ui[5]],hi=[{id:"palette",label:"Command line accessed",hint:"Open the palette (⌘K)",done:"root shell is yours"},{id:"scan",label:"Full system scan",hint:"Explore every section",done:"every section swept"},{id:"catch",label:"Chased the operative",hint:"Try to catch the avatar",done:"fast, but you tried"},{id:"repos",label:"Repo vault cracked",hint:"Open the repositories",done:"the vault is open"},{id:"theme",label:"Lights flipped",hint:"Switch the theme",done:"ambience rewired"},{id:"konami",label:"Cheat code accepted",hint:"↑↑↓↓←→←→ B A",done:"you know the code"},{id:"secret",label:"Secret command run",hint:"Try an unlisted command",done:"off the menu"},{id:"contact",label:"Contact initiated",hint:"Book a call",done:"channel open — let's talk"}],fi="recon:achievements",cd=["projects","case-studies","about","experience","articles","skills","recommendations","contact"];function dd(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}async function Cn(e){if(!(typeof window>"u"||dd()))try{const{default:t}=await ue(async()=>{const{default:n}=await import("./confetti.module-BVAT6wYb.js");return{default:n}},[]);t({particleCount:90,spread:75,startVelocity:38,ticks:160,origin:{y:.72},colors:["#06b6d4","#22d3ee","#67e8f9","#a5f3fc","#ffffff"],disableForReducedMotion:!0,...e})}catch{}}const ud=c.createContext(null);function ay({children:e}){const[t,n]=c.useState(()=>new Set),[r,o]=c.useState([]),[s,a]=c.useState(()=>new Set),[i,u]=c.useState(!1),[d,f]=c.useState(!1),[p,g]=c.useState(!1);c.useEffect(()=>{try{const k=localStorage.getItem(fi);k&&n(new Set(JSON.parse(k)))}catch{}},[]);const h=c.useCallback(k=>{const E=hi.find(S=>S.id===k);E&&n(S=>{if(S.has(k))return S;const R=new Set(S);R.add(k);try{localStorage.setItem(fi,JSON.stringify([...R]))}catch{}return o(A=>[...A,E]),R})},[]),y=c.useCallback(k=>{o(E=>E.filter(S=>S.id!==k))},[]),m=c.useCallback(k=>{a(E=>{if(E.has(k))return E;const S=new Set(E);return S.add(k),S})},[]),b=Math.round(s.size/cd.length*100),v=c.useRef(!1);c.useEffect(()=>{b>=100&&!v.current&&(v.current=!0,h("scan"),Cn({particleCount:140,spread:100,origin:{y:.6}}))},[b,h]),c.useEffect(()=>{if(typeof MutationObserver>"u")return;const k=document.documentElement,E=new MutationObserver(()=>h("theme"));return E.observe(k,{attributes:!0,attributeFilter:["class"]}),()=>E.disconnect()},[h]);const x=c.useMemo(()=>({achievements:hi,unlocked:t,unlock:h,toasts:r,dismissToast:y,scanned:s,markScanned:m,scanPct:b,paletteOpen:i,setPaletteOpen:u,panelOpen:d,setPanelOpen:f,matrixOn:p,setMatrixOn:g}),[t,h,r,y,s,m,b,i,d,p]);return l.jsx(ud.Provider,{value:x,children:e})}function nt(){const e=c.useContext(ud);if(!e)throw new Error("useRecon must be used within <ReconProvider>");return e}function iy(){const{markScanned:e}=nt();c.useEffect(()=>{if(typeof IntersectionObserver>"u")return;const t=new IntersectionObserver(s=>{for(const a of s)a.isIntersecting&&a.target.id&&e(a.target.id)},{threshold:.25}),n=()=>{for(const s of cd){const a=document.getElementById(s);a&&t.observe(a)}};n();const r=window.setTimeout(n,600),o=window.setTimeout(n,1800);return()=>{t.disconnect(),window.clearTimeout(r),window.clearTimeout(o)}},[e])}const pi=[{href:"projects",label:"Projects"},{href:"case-studies",label:"Case Studies"},{href:"about",label:"About"},{href:"experience",label:"Experience"},{href:"articles",label:"Articles"},{href:"skills",label:"Skills"},{href:"recommendations",label:"Praise"},{href:"work-with-me",label:"Hiring"},{href:"contact",label:"Contact"}];function ly({onClick:e}){return l.jsxs("a",{href:"/",onClick:e,className:"group flex items-center gap-2.5 cursor-pointer","aria-label":"Abdelrahman Saed — home",children:[l.jsx("span",{className:"grid h-7 w-7 place-items-center bg-primary text-primary-foreground font-mono text-sm font-bold transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_16px_-2px_hsl(var(--primary)/0.7)]",children:"A"}),l.jsx("span",{className:"font-heading font-bold text-lg leading-none tracking-tight",children:"saed"}),l.jsx("span",{className:"kicker text-muted-foreground/70 hidden sm:inline normal-case tracking-normal",children:"~/portfolio"})]})}function cy({theme:e,toggleTheme:t}){const n=ry(["projects","case-studies","about","experience","articles","skills","recommendations","work-with-me","contact"]),r=ws(),o=Ui(),s=rr(),{unlock:a}=nt(),i=r.pathname==="/",u=f=>{f.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),o("/")},d=f=>{s==null||s.capture("calendly_popup_opened",{source:f}),a("contact"),Cn(),Mr(Ee.calendly)};return l.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 glass-effect animate-slide-down",children:l.jsxs("div",{className:"container mx-auto px-6 h-16 flex items-center gap-4",children:[l.jsx(ly,{onClick:u}),l.jsx("span",{className:"hidden xl:block h-5 w-px bg-border","aria-hidden":"true"}),l.jsx("nav",{className:"hidden xl:flex flex-1 items-center gap-x-6",children:pi.map((f,p)=>{const g=i&&n===f.href;return l.jsxs(fa,{to:`/#${f.href}`,className:Q("group relative kicker whitespace-nowrap tracking-[0.12em] transition-colors py-1",g?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[l.jsx("span",{className:Q("mr-1.5 text-[0.65rem] transition-colors",g?"text-primary":"text-muted-foreground/40 group-hover:text-primary"),children:String(p+2).padStart(2,"0")}),f.label,l.jsx("span",{className:Q("absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300",g?"w-full":"w-0 group-hover:w-full")})]},f.href)})}),l.jsxs("div",{className:"flex items-center gap-1.5 ml-auto xl:ml-0",children:[l.jsxs("button",{type:"button",onClick:()=>d("header_desktop"),className:"hidden xl:flex kicker items-center gap-1.5 border border-primary/50 bg-primary/5 px-3 py-1.5 text-primary transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_16px_-4px_hsl(var(--primary)/0.6)]",children:[l.jsx(Nr,{className:"h-3.5 w-3.5"}),"Book a call"]}),l.jsx("span",{className:"hidden xl:block h-5 w-px bg-border mx-1","aria-hidden":"true"}),l.jsx(ct,{variant:"ghost",size:"icon",asChild:!0,children:l.jsx("a",{href:"https://github.com/binSaed",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub profile",title:"GitHub",children:l.jsx(Rs,{className:"h-5 w-5"})})}),l.jsx(ct,{variant:"ghost",size:"icon",asChild:!0,className:"hidden sm:inline-flex",children:l.jsx("a",{href:"https://www.linkedin.com/in/binsaed/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn profile",title:"LinkedIn",children:l.jsx(As,{className:"h-5 w-5"})})}),l.jsx(ct,{variant:"ghost",size:"icon",asChild:!0,className:"hidden sm:inline-flex",children:l.jsx("a",{href:Ee.cv,target:"_blank",rel:"noopener noreferrer","aria-label":"Download CV (PDF)",title:"Download CV",children:l.jsx(Ts,{className:"h-5 w-5"})})}),l.jsx(Jg,{theme:e,toggleTheme:t}),l.jsxs(Zb,{children:[l.jsx(ey,{asChild:!0,children:l.jsx(ct,{variant:"ghost",size:"icon",className:"xl:hidden","aria-label":"Open navigation menu",children:l.jsx(Th,{className:"h-5 w-5"})})}),l.jsxs(nd,{side:"right",className:"w-72 border-l border-border",children:[l.jsxs(rd,{children:[l.jsx(od,{className:"text-left font-heading font-bold text-2xl tracking-tight",children:"~/nav"}),l.jsx(sd,{className:"sr-only",children:"Site navigation links"})]}),l.jsx("div",{className:"mt-2 mb-4 h-px w-full bg-border"}),l.jsxs("nav",{className:"flex flex-col",children:[pi.map((f,p)=>{const g=i&&n===f.href;return l.jsx(ci,{asChild:!0,children:l.jsxs(fa,{to:`/#${f.href}`,className:Q("group flex items-baseline gap-3 border-b border-border/60 py-3 transition-colors",g?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[l.jsx("span",{className:Q("font-mono text-xs",g?"text-primary":"text-muted-foreground/50 group-hover:text-primary"),children:String(p+2).padStart(2,"0")}),l.jsx("span",{className:"font-heading text-xl",children:f.label})]})},f.href)}),l.jsx(ci,{asChild:!0,children:l.jsxs("button",{type:"button",onClick:()=>d("header_mobile"),className:"group mt-4 flex items-center justify-center gap-2 border border-primary/40 py-3 text-primary transition-colors hover:border-primary hover:bg-primary/10",children:[l.jsx(Nr,{className:"h-4 w-4"}),l.jsx("span",{className:"font-heading text-xl",children:"Book a call"})]})})]})]})]})]})]})})}function hd(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function dy(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function fd(e){var t;return(t=hd(e))==null?void 0:t.data}async function pd(e,t){const n=hd(t),r={Accept:"application/vnd.github+json"};n!=null&&n.etag&&(r["If-None-Match"]=n.etag);const o=await fetch(e,{headers:r,cache:"no-store"});if(o.status===304&&n)return n.data;if(!o.ok){if(n)return n.data;throw new Error(`GitHub request failed: ${o.status}`)}const s=await o.json(),a=o.headers.get("ETag");return a&&dy(t,{etag:a,data:s}),s}const uy="https://api.github.com/users/binSaed",md="gh:profile:binSaed";function hy(){return pd(uy,md)}function fy(){return vc({queryKey:["github-profile"],queryFn:hy,initialData:()=>fd(md),staleTime:1e3*60*5,gcTime:1e3*60*60*24})}function $t({className:e,...t}){return l.jsx("div",{className:Q("animate-pulse rounded-md bg-muted",e),...t})}function mi({className:e}){return l.jsxs("svg",{viewBox:"0 0 24 24",className:e,fill:"none",stroke:"currentColor",strokeWidth:"1","aria-hidden":"true",children:[l.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"21"}),l.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),l.jsx("circle",{cx:"12",cy:"12",r:"5"})]})}function py(){return l.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none","aria-hidden":"true",children:[l.jsx("div",{className:"absolute -top-1/3 left-1/2 -translate-x-1/2 h-[70vh] w-[70vh] rounded-full animate-glow-breathe",style:{background:"radial-gradient(circle, hsl(var(--primary) / 0.1), transparent 62%)"}}),l.jsx("div",{className:"absolute inset-0 bg-ledger opacity-50 animate-grid-drift [mask-image:linear-gradient(180deg,transparent,black_18%,black_70%,transparent)]"}),l.jsx(mi,{className:"absolute top-24 right-8 h-5 w-5 text-primary/30"}),l.jsx(mi,{className:"absolute bottom-10 left-10 h-5 w-5 text-foreground/15 hidden md:block"}),l.jsx("span",{className:"section-numeral absolute -top-10 right-4 text-[26vw] md:text-[15rem] leading-none tracking-tighter",children:"01"}),l.jsx("div",{className:"absolute top-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-primary/50 shadow-[0_0_12px_2px_hsl(var(--primary)/0.4)] animate-float-slow"}),l.jsx("div",{className:"absolute top-[22%] left-1/3 h-1 w-1 rounded-full bg-primary/35 shadow-[0_0_10px_1px_hsl(var(--primary)/0.35)] animate-float-drift-b",style:{animationDelay:"2.5s"}}),l.jsx("div",{className:"absolute bottom-[30%] right-1/3 h-1 w-1 rounded-full bg-primary/30 shadow-[0_0_8px_1px_hsl(var(--primary)/0.3)] animate-float-slow",style:{animationDelay:"6s"}}),l.jsx("div",{className:"absolute top-[62%] right-[16%] h-1.5 w-1.5 rounded-full bg-primary/40 shadow-[0_0_12px_2px_hsl(var(--primary)/0.35)] animate-float-drift-b hidden md:block",style:{animationDelay:"9s"}}),l.jsx("div",{className:"absolute inset-0 opacity-[0.6] [mask-image:linear-gradient(180deg,black,transparent_85%)]",style:{backgroundImage:"repeating-linear-gradient(to bottom, hsl(var(--foreground) / 0.03) 0px, hsl(var(--foreground) / 0.03) 1px, transparent 1px, transparent 4px)"}}),l.jsx("div",{className:"absolute inset-x-0 top-0 h-28 animate-scan-beam",style:{background:"linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.07) 50%, transparent 100%)"}})]})}function my(e,t,n,r={}){const{stiffness:o=180,damping:s=20,mass:a=1}=r,i=c.useRef({x:0,y:0,vx:0,vy:0}),u=c.useRef({x:e,y:t}),d=c.useRef(null),f=c.useRef(null);c.useEffect(()=>{u.current={x:e,y:t}},[e,t]);const p=c.useCallback(h=>{f.current===null&&(f.current=h);const y=Math.min((h-f.current)/1e3,.064);f.current=h;const m=i.current,b=u.current,v=-o*(m.x-b.x),x=-o*(m.y-b.y),k=-s*m.vx,E=-s*m.vy,S=(v+k)/a,R=(x+E)/a;if(m.vx+=S*y,m.vy+=R*y,m.x+=m.vx*y,m.y+=m.vy*y,Math.abs(m.x-b.x)<.01&&Math.abs(m.y-b.y)<.01&&Math.abs(m.vx)<.01&&Math.abs(m.vy)<.01){m.x=b.x,m.y=b.y,m.vx=0,m.vy=0,n(m.x,m.y),d.current=null,f.current=null;return}n(m.x,m.y),d.current=requestAnimationFrame(p)},[o,s,a,n]),g=c.useCallback(()=>{d.current===null&&(f.current=null,d.current=requestAnimationFrame(p))},[p]);return c.useEffect(()=>{d.current===null&&(f.current=null,d.current=requestAnimationFrame(p))},[e,t,p]),c.useEffect(()=>()=>{d.current!==null&&cancelAnimationFrame(d.current)},[]),{start:g,setPosition:(h,y)=>{i.current.x=h,i.current.y=y}}}const Ys=Vs,gy=Js,gd=c.forwardRef(({className:e,...t},n)=>l.jsx(or,{ref:n,className:Q("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));gd.displayName=or.displayName;const no=c.forwardRef(({className:e,children:t,...n},r)=>l.jsxs(gy,{children:[l.jsx(gd,{}),l.jsxs(sr,{ref:r,className:Q("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,l.jsxs(Ks,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[l.jsx(Wr,{className:"h-4 w-4"}),l.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));no.displayName=sr.displayName;const Qs=({className:e,...t})=>l.jsx("div",{className:Q("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});Qs.displayName="DialogHeader";const Xs=c.forwardRef(({className:e,...t},n)=>l.jsx(eo,{ref:n,className:Q("text-lg font-semibold leading-none tracking-tight",e),...t}));Xs.displayName=eo.displayName;const Zs=c.forwardRef(({className:e,...t},n)=>l.jsx(to,{ref:n,className:Q("text-sm text-muted-foreground",e),...t}));Zs.displayName=to.displayName;const by="https://api.github.com/users/binSaed/repos?per_page=100&type=public",bd="gh:repos:binSaed",yd=e=>[...e].sort((t,n)=>n.stargazers_count-t.stargazers_count);async function yy(){const e=await pd(by,bd);return yd(e)}function wy(e=!0){return vc({queryKey:["github-repos"],queryFn:yy,initialData:()=>{const t=fd(bd);return t?yd(t):void 0},staleTime:1e3*60*5,gcTime:1e3*60*60*24,enabled:e})}var vy=c.createContext(void 0);function xy(e){const t=c.useContext(vy);return e||t||"ltr"}function ky(e,[t,n]){return Math.min(n,Math.max(t,e))}function Ey(e,t){return c.useReducer((n,r)=>t[n][r]??n,e)}var ea="ScrollArea",[wd,Pv]=Pn(ea),[Sy,Oe]=wd(ea),vd=c.forwardRef((e,t)=>{const{__scopeScrollArea:n,type:r="hover",dir:o,scrollHideDelay:s=600,...a}=e,[i,u]=c.useState(null),[d,f]=c.useState(null),[p,g]=c.useState(null),[h,y]=c.useState(null),[m,b]=c.useState(null),[v,x]=c.useState(0),[k,E]=c.useState(0),[S,R]=c.useState(!1),[A,L]=c.useState(!1),P=he(t,U=>u(U)),$=xy(o);return l.jsx(Sy,{scope:n,type:r,dir:$,scrollHideDelay:s,scrollArea:i,viewport:d,onViewportChange:f,content:p,onContentChange:g,scrollbarX:h,onScrollbarXChange:y,scrollbarXEnabled:S,onScrollbarXEnabledChange:R,scrollbarY:m,onScrollbarYChange:b,scrollbarYEnabled:A,onScrollbarYEnabledChange:L,onCornerWidthChange:x,onCornerHeightChange:E,children:l.jsx(ee.div,{dir:$,...a,ref:P,style:{position:"relative","--radix-scroll-area-corner-width":v+"px","--radix-scroll-area-corner-height":k+"px",...e.style}})})});vd.displayName=ea;var xd="ScrollAreaViewport",kd=c.forwardRef((e,t)=>{const{__scopeScrollArea:n,children:r,nonce:o,...s}=e,a=Oe(xd,n),i=c.useRef(null),u=he(t,i,a.onViewportChange);return l.jsxs(l.Fragment,{children:[l.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),l.jsx(ee.div,{"data-radix-scroll-area-viewport":"",...s,ref:u,style:{overflowX:a.scrollbarXEnabled?"scroll":"hidden",overflowY:a.scrollbarYEnabled?"scroll":"hidden",...e.style},children:l.jsx("div",{ref:a.onContentChange,style:{minWidth:"100%",display:"table"},children:r})})]})});kd.displayName=xd;var rt="ScrollAreaScrollbar",ta=c.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=Oe(rt,e.__scopeScrollArea),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:a}=o,i=e.orientation==="horizontal";return c.useEffect(()=>(i?s(!0):a(!0),()=>{i?s(!1):a(!1)}),[i,s,a]),o.type==="hover"?l.jsx(Ty,{...r,ref:t,forceMount:n}):o.type==="scroll"?l.jsx(Ry,{...r,ref:t,forceMount:n}):o.type==="auto"?l.jsx(Ed,{...r,ref:t,forceMount:n}):o.type==="always"?l.jsx(na,{...r,ref:t}):null});ta.displayName=rt;var Ty=c.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=Oe(rt,e.__scopeScrollArea),[s,a]=c.useState(!1);return c.useEffect(()=>{const i=o.scrollArea;let u=0;if(i){const d=()=>{window.clearTimeout(u),a(!0)},f=()=>{u=window.setTimeout(()=>a(!1),o.scrollHideDelay)};return i.addEventListener("pointerenter",d),i.addEventListener("pointerleave",f),()=>{window.clearTimeout(u),i.removeEventListener("pointerenter",d),i.removeEventListener("pointerleave",f)}}},[o.scrollArea,o.scrollHideDelay]),l.jsx(et,{present:n||s,children:l.jsx(Ed,{"data-state":s?"visible":"hidden",...r,ref:t})})}),Ry=c.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=Oe(rt,e.__scopeScrollArea),s=e.orientation==="horizontal",a=oo(()=>u("SCROLL_END"),100),[i,u]=Ey("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return c.useEffect(()=>{if(i==="idle"){const d=window.setTimeout(()=>u("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(d)}},[i,o.scrollHideDelay,u]),c.useEffect(()=>{const d=o.viewport,f=s?"scrollLeft":"scrollTop";if(d){let p=d[f];const g=()=>{const h=d[f];p!==h&&(u("SCROLL"),a()),p=h};return d.addEventListener("scroll",g),()=>d.removeEventListener("scroll",g)}},[o.viewport,s,u,a]),l.jsx(et,{present:n||i!=="hidden",children:l.jsx(na,{"data-state":i==="hidden"?"hidden":"visible",...r,ref:t,onPointerEnter:te(e.onPointerEnter,()=>u("POINTER_ENTER")),onPointerLeave:te(e.onPointerLeave,()=>u("POINTER_LEAVE"))})})}),Ed=c.forwardRef((e,t)=>{const n=Oe(rt,e.__scopeScrollArea),{forceMount:r,...o}=e,[s,a]=c.useState(!1),i=e.orientation==="horizontal",u=oo(()=>{if(n.viewport){const d=n.viewport.offsetWidth<n.viewport.scrollWidth,f=n.viewport.offsetHeight<n.viewport.scrollHeight;a(i?d:f)}},10);return _n(n.viewport,u),_n(n.content,u),l.jsx(et,{present:r||s,children:l.jsx(na,{"data-state":s?"visible":"hidden",...o,ref:t})})}),na=c.forwardRef((e,t)=>{const{orientation:n="vertical",...r}=e,o=Oe(rt,e.__scopeScrollArea),s=c.useRef(null),a=c.useRef(0),[i,u]=c.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=Cd(i.viewport,i.content),f={...r,sizes:i,onSizesChange:u,hasThumb:d>0&&d<1,onThumbChange:g=>s.current=g,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:g=>a.current=g};function p(g,h){return Oy(g,a.current,i,h)}return n==="horizontal"?l.jsx(Ay,{...f,ref:t,onThumbPositionChange:()=>{if(o.viewport&&s.current){const g=o.viewport.scrollLeft,h=gi(g,i,o.dir);s.current.style.transform=`translate3d(${h}px, 0, 0)`}},onWheelScroll:g=>{o.viewport&&(o.viewport.scrollLeft=g)},onDragScroll:g=>{o.viewport&&(o.viewport.scrollLeft=p(g,o.dir))}}):n==="vertical"?l.jsx(Cy,{...f,ref:t,onThumbPositionChange:()=>{if(o.viewport&&s.current){const g=o.viewport.scrollTop,h=gi(g,i);s.current.style.transform=`translate3d(0, ${h}px, 0)`}},onWheelScroll:g=>{o.viewport&&(o.viewport.scrollTop=g)},onDragScroll:g=>{o.viewport&&(o.viewport.scrollTop=p(g))}}):null}),Ay=c.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...o}=e,s=Oe(rt,e.__scopeScrollArea),[a,i]=c.useState(),u=c.useRef(null),d=he(t,u,s.onScrollbarXChange);return c.useEffect(()=>{u.current&&i(getComputedStyle(u.current))},[u]),l.jsx(Td,{"data-orientation":"horizontal",...o,ref:d,sizes:n,style:{bottom:0,left:s.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:s.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":ro(n)+"px",...e.style},onThumbPointerDown:f=>e.onThumbPointerDown(f.x),onDragScroll:f=>e.onDragScroll(f.x),onWheelScroll:(f,p)=>{if(s.viewport){const g=s.viewport.scrollLeft+f.deltaX;e.onWheelScroll(g),Pd(g,p)&&f.preventDefault()}},onResize:()=>{u.current&&s.viewport&&a&&r({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:Hr(a.paddingLeft),paddingEnd:Hr(a.paddingRight)}})}})}),Cy=c.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...o}=e,s=Oe(rt,e.__scopeScrollArea),[a,i]=c.useState(),u=c.useRef(null),d=he(t,u,s.onScrollbarYChange);return c.useEffect(()=>{u.current&&i(getComputedStyle(u.current))},[u]),l.jsx(Td,{"data-orientation":"vertical",...o,ref:d,sizes:n,style:{top:0,right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":ro(n)+"px",...e.style},onThumbPointerDown:f=>e.onThumbPointerDown(f.y),onDragScroll:f=>e.onDragScroll(f.y),onWheelScroll:(f,p)=>{if(s.viewport){const g=s.viewport.scrollTop+f.deltaY;e.onWheelScroll(g),Pd(g,p)&&f.preventDefault()}},onResize:()=>{u.current&&s.viewport&&a&&r({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:Hr(a.paddingTop),paddingEnd:Hr(a.paddingBottom)}})}})}),[_y,Sd]=wd(rt),Td=c.forwardRef((e,t)=>{const{__scopeScrollArea:n,sizes:r,hasThumb:o,onThumbChange:s,onThumbPointerUp:a,onThumbPointerDown:i,onThumbPositionChange:u,onDragScroll:d,onWheelScroll:f,onResize:p,...g}=e,h=Oe(rt,n),[y,m]=c.useState(null),b=he(t,P=>m(P)),v=c.useRef(null),x=c.useRef(""),k=h.viewport,E=r.content-r.viewport,S=me(f),R=me(u),A=oo(p,10);function L(P){if(v.current){const $=P.clientX-v.current.left,U=P.clientY-v.current.top;d({x:$,y:U})}}return c.useEffect(()=>{const P=$=>{const U=$.target;(y==null?void 0:y.contains(U))&&S($,E)};return document.addEventListener("wheel",P,{passive:!1}),()=>document.removeEventListener("wheel",P,{passive:!1})},[k,y,E,S]),c.useEffect(R,[r,R]),_n(y,A),_n(h.content,A),l.jsx(_y,{scope:n,scrollbar:y,hasThumb:o,onThumbChange:me(s),onThumbPointerUp:me(a),onThumbPositionChange:R,onThumbPointerDown:me(i),children:l.jsx(ee.div,{...g,ref:b,style:{position:"absolute",...g.style},onPointerDown:te(e.onPointerDown,P=>{P.button===0&&(P.target.setPointerCapture(P.pointerId),v.current=y.getBoundingClientRect(),x.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",h.viewport&&(h.viewport.style.scrollBehavior="auto"),L(P))}),onPointerMove:te(e.onPointerMove,L),onPointerUp:te(e.onPointerUp,P=>{const $=P.target;$.hasPointerCapture(P.pointerId)&&$.releasePointerCapture(P.pointerId),document.body.style.webkitUserSelect=x.current,h.viewport&&(h.viewport.style.scrollBehavior=""),v.current=null})})})}),Fr="ScrollAreaThumb",Rd=c.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=Sd(Fr,e.__scopeScrollArea);return l.jsx(et,{present:n||o.hasThumb,children:l.jsx(Py,{ref:t,...r})})}),Py=c.forwardRef((e,t)=>{const{__scopeScrollArea:n,style:r,...o}=e,s=Oe(Fr,n),a=Sd(Fr,n),{onThumbPositionChange:i}=a,u=he(t,p=>a.onThumbChange(p)),d=c.useRef(void 0),f=oo(()=>{d.current&&(d.current(),d.current=void 0)},100);return c.useEffect(()=>{const p=s.viewport;if(p){const g=()=>{if(f(),!d.current){const h=jy(p,i);d.current=h,i()}};return i(),p.addEventListener("scroll",g),()=>p.removeEventListener("scroll",g)}},[s.viewport,f,i]),l.jsx(ee.div,{"data-state":a.hasThumb?"visible":"hidden",...o,ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...r},onPointerDownCapture:te(e.onPointerDownCapture,p=>{const h=p.target.getBoundingClientRect(),y=p.clientX-h.left,m=p.clientY-h.top;a.onThumbPointerDown({x:y,y:m})}),onPointerUp:te(e.onPointerUp,a.onThumbPointerUp)})});Rd.displayName=Fr;var ra="ScrollAreaCorner",Ad=c.forwardRef((e,t)=>{const n=Oe(ra,e.__scopeScrollArea),r=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&r?l.jsx(Ny,{...e,ref:t}):null});Ad.displayName=ra;var Ny=c.forwardRef((e,t)=>{const{__scopeScrollArea:n,...r}=e,o=Oe(ra,n),[s,a]=c.useState(0),[i,u]=c.useState(0),d=!!(s&&i);return _n(o.scrollbarX,()=>{var p;const f=((p=o.scrollbarX)==null?void 0:p.offsetHeight)||0;o.onCornerHeightChange(f),u(f)}),_n(o.scrollbarY,()=>{var p;const f=((p=o.scrollbarY)==null?void 0:p.offsetWidth)||0;o.onCornerWidthChange(f),a(f)}),d?l.jsx(ee.div,{...r,ref:t,style:{width:s,height:i,position:"absolute",right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function Hr(e){return e?parseInt(e,10):0}function Cd(e,t){const n=e/t;return isNaN(n)?0:n}function ro(e){const t=Cd(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*t;return Math.max(r,18)}function Oy(e,t,n,r="ltr"){const o=ro(n),s=o/2,a=t||s,i=o-a,u=n.scrollbar.paddingStart+a,d=n.scrollbar.size-n.scrollbar.paddingEnd-i,f=n.content-n.viewport,p=r==="ltr"?[0,f]:[f*-1,0];return _d([u,d],p)(e)}function gi(e,t,n="ltr"){const r=ro(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,s=t.scrollbar.size-o,a=t.content-t.viewport,i=s-r,u=n==="ltr"?[0,a]:[a*-1,0],d=ky(e,u);return _d([0,a],[0,i])(d)}function _d(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function Pd(e,t){return e>0&&e<t}var jy=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},r=0;return function o(){const s={left:e.scrollLeft,top:e.scrollTop},a=n.left!==s.left,i=n.top!==s.top;(a||i)&&t(),n=s,r=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(r)};function oo(e,t){const n=me(e),r=c.useRef(0);return c.useEffect(()=>()=>window.clearTimeout(r.current),[]),c.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,t)},[n,t])}function _n(e,t){const n=me(t);Xe(()=>{let r=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,n])}var Nd=vd,Iy=kd,$y=Ad;const Od=c.forwardRef(({className:e,children:t,...n},r)=>l.jsxs(Nd,{ref:r,className:Q("relative overflow-hidden",e),...n,children:[l.jsx(Iy,{className:"h-full w-full rounded-[inherit]",children:t}),l.jsx(jd,{}),l.jsx($y,{})]}));Od.displayName=Nd.displayName;const jd=c.forwardRef(({className:e,orientation:t="vertical",...n},r)=>l.jsx(ta,{ref:r,orientation:t,className:Q("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...n,children:l.jsx(Rd,{className:"relative flex-1 rounded-full bg-border"})}));jd.displayName=ta.displayName;const Dy={TypeScript:"bg-blue-500",JavaScript:"bg-yellow-400",Python:"bg-green-500",Dart:"bg-cyan-500",Java:"bg-orange-500",Kotlin:"bg-purple-500",Swift:"bg-orange-400",Go:"bg-cyan-400",Rust:"bg-orange-600",Ruby:"bg-red-500",PHP:"bg-indigo-400","C++":"bg-pink-500",C:"bg-gray-500",HTML:"bg-red-400",CSS:"bg-blue-400",Shell:"bg-green-400"};function Ly({repo:e}){const t=e.language?Dy[e.language]||"bg-muted-foreground":null,n=rr();return l.jsxs("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"block p-4 rounded-sm border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-200 group",onClick:()=>n==null?void 0:n.capture("repo_clicked",{repo_name:e.name,repo_language:e.language,repo_stars:e.stargazers_count}),children:[l.jsxs("div",{className:"flex items-start justify-between gap-2",children:[l.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors truncate",children:e.name}),l.jsx(wh,{className:"h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"})]}),e.description&&l.jsx("p",{className:"text-sm text-muted-foreground mt-2 line-clamp-2",children:e.description}),l.jsxs("div",{className:"flex items-center gap-4 mt-3 text-sm text-muted-foreground",children:[t&&l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:`w-3 h-3 rounded-full ${t}`}),e.language]}),l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(Cs,{className:"h-4 w-4"}),e.stargazers_count]}),l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(kh,{className:"h-4 w-4"}),e.forks_count]})]}),e.topics&&e.topics.length>0&&l.jsxs("div",{className:"flex flex-wrap gap-1.5 mt-3",children:[e.topics.slice(0,4).map(r=>l.jsx("span",{className:"spec-tag",children:r},r)),e.topics.length>4&&l.jsxs("span",{className:"spec-tag",children:["+",e.topics.length-4]})]})]})}function xr(){return l.jsxs("div",{className:"p-4 rounded-lg border border-border bg-card/50",children:[l.jsx($t,{className:"h-5 w-32 mb-2"}),l.jsx($t,{className:"h-4 w-full mb-1"}),l.jsx($t,{className:"h-4 w-3/4 mb-3"}),l.jsxs("div",{className:"flex gap-4",children:[l.jsx($t,{className:"h-4 w-20"}),l.jsx($t,{className:"h-4 w-12"}),l.jsx($t,{className:"h-4 w-12"})]})]})}function My({open:e,onOpenChange:t}){const{data:n,isLoading:r}=wy(e);return l.jsx(Ys,{open:e,onOpenChange:t,children:l.jsxs(no,{className:"max-w-2xl max-h-[85vh] p-0",children:[l.jsxs(Qs,{className:"p-6 pb-0",children:[l.jsxs(Xs,{className:"flex items-center gap-2 font-heading text-2xl font-medium tracking-tight",children:[l.jsx(Cs,{className:"h-5 w-5 text-primary"}),"Public Repositories",n&&l.jsxs("span",{className:"text-sm font-normal text-muted-foreground",children:["(",n.length," repos)"]})]}),l.jsx(Zs,{className:"sr-only",children:"Browse my public GitHub repositories"})]}),l.jsx(Od,{className:"h-[60vh] px-6 pb-6",children:l.jsx("div",{className:"space-y-3 pt-4",children:r?l.jsxs(l.Fragment,{children:[l.jsx(xr,{}),l.jsx(xr,{}),l.jsx(xr,{}),l.jsx(xr,{})]}):n&&n.length>0?n.map(o=>l.jsx(Ly,{repo:o},o.id)):l.jsx("p",{className:"text-center text-muted-foreground py-8",children:"No repositories found"})})})]})})}function Fy({className:e}){return l.jsx("svg",{viewBox:"0 0 24 24",className:e,fill:"currentColor","aria-hidden":"true",children:l.jsx("path",{d:"M17.36 20.2v-5.38h1.79V22H3v-7.18h1.79v5.38h12.57zM6.77 14.32l.37-1.76 8.79 1.85-.37 1.76-8.79-1.85zm1.16-4.21l.76-1.61 8.14 3.78-.76 1.62-8.14-3.79zm2.26-3.99l1.15-1.38 6.9 5.76-1.15 1.37-6.9-5.75zM14.64 2l5.51 7.41-1.45 1.07L13.19 3 14.64 2zM6.59 18.41v-1.8h8.98v1.8H6.59z"})})}const bi=["You can't catch me! 😆","Nice try! 👍","Too slow! 🏃‍♂️","Almost got me! 😏","Keep trying! 🎯","Haha, missed! 😂"],yi=["Hi! 👋","Hello! 😊","Hey there! 🙌","Welcome! ✨"],Hy=ld.slice(0,3);function Uy(){const{data:e,isLoading:t}=fy(),n=rr(),{unlock:r}=nt(),[o,s]=c.useState({x:0,y:0}),[a,i]=c.useState({x:0,y:0}),[u,d]=c.useState(!1),[f,p]=c.useState(""),g=c.useRef(null),h=c.useRef(0),y=c.useRef(0),[m,b]=c.useState(!1),v=c.useRef(null),x=c.useRef(null),k=c.useRef(0),E=c.useCallback(async()=>{if(x.current)return x.current;if(!v.current)return null;const{default:_}=await ue(async()=>{const{default:N}=await import("./confetti.module-BVAT6wYb.js");return{default:N}},[]);return x.current=_.create(v.current,{resize:!0,useWorker:!0}),x.current},[]),S=c.useCallback((_,N)=>{s({x:_,y:N})},[]);my(a.x,a.y,S,{stiffness:120,damping:14,mass:1}),c.useEffect(()=>()=>{var _;(_=x.current)==null||_.reset(),x.current=null},[]),c.useEffect(()=>{if(u){const _=setTimeout(()=>d(!1),2e3);return()=>clearTimeout(_)}},[u]);const R=c.useCallback(()=>{const _=Date.now();if(_-y.current<2500)return;y.current=_;const N=bi[Math.floor(Math.random()*bi.length)];p(N),d(!0),r("catch")},[r]),[A,L]=c.useState(!0);c.useEffect(()=>{if(typeof window<"u"&&typeof window.matchMedia=="function"){const _=window.matchMedia("(hover: hover) and (pointer: fine)");L(_.matches);const N=K=>L(K.matches);return _.addEventListener("change",N),()=>_.removeEventListener("change",N)}},[]);const P=!A,$=c.useCallback(async()=>{const _=Date.now();if(_-k.current<1e3)return;k.current=_;const N=await E();if(!N)return;const K=1e3,ae=Date.now()+K,O={startVelocity:30,spread:360,ticks:60,colors:["#22d3ee","#00bcd4","#06b6d4","#67e8f9","#0e7490","#0b0e13"]},M=(z,H)=>Math.random()*(H-z)+z,D=setInterval(()=>{const z=ae-Date.now();if(z<=0)return clearInterval(D);const H=600*(z/K);N({...O,particleCount:H,origin:{x:M(.1,.3),y:Math.random()-.2}}),N({...O,particleCount:H,origin:{x:M(.7,.9),y:Math.random()-.2}})},150)},[E]),U=c.useCallback(()=>{if($(),d(!1),i({x:0,y:0}),P){const _=Date.now();if(_-y.current<2e3)return;y.current=_;const N=yi[Math.floor(Math.random()*yi.length)];p(N),d(!0)}},[P,$]),I=c.useCallback((_,N)=>{if(!g.current)return;const K=g.current.getBoundingClientRect(),ae=K.left+K.width/2,T=K.top+K.height/2,O=_-ae,M=N-T,D=Math.sqrt(O*O+M*M),z=200,H=350;if(D<z&&D>0){h.current+=1,h.current>=3&&(R(),h.current=0);const re=Math.atan2(M,O),ie=Math.pow((z-D)/z,.6),we=-Math.cos(re)*ie*160,Ge=-Math.sin(re)*ie*160,je=280;i(Ie=>({x:Math.max(-je,Math.min(je,Ie.x+we*.25)),y:Math.max(-je,Math.min(je,Ie.y+Ge*.25))}))}else D>H&&i(re=>Math.abs(re.x)<1&&Math.abs(re.y)<1?{x:0,y:0}:{x:re.x*.85,y:re.y*.85})},[R]),G=c.useCallback(()=>{i({x:0,y:0})},[]),j=c.useCallback(_=>{_.pointerType!=="touch"&&I(_.clientX,_.clientY)},[I]),J=c.useCallback(_=>{_.pointerType!=="touch"&&G()},[G]),B=c.useCallback(_=>{I(_.clientX,_.clientY)},[I]),W=c.useCallback(()=>{G()},[G]);return l.jsxs(l.Fragment,{children:[l.jsx("canvas",{ref:v,className:"fixed inset-0 pointer-events-none z-[9999]",style:{width:"100vw",height:"100vh"}}),l.jsxs("section",{className:"relative min-h-screen overflow-hidden hero-gradient flex items-center pt-24 pb-16",onPointerMove:j,onPointerLeave:J,onMouseMove:B,onMouseLeave:W,children:[l.jsx(py,{}),l.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[l.jsxs("div",{className:"opacity-0 animate-fade-in",style:{animationDelay:"0.1s"},children:[l.jsxs("div",{className:"flex items-center justify-between gap-4",children:[l.jsxs("span",{className:"kicker text-muted-foreground normal-case tracking-normal",children:[l.jsx("span",{className:"text-primary",children:"saed@bnsaed"}),l.jsx("span",{className:"text-muted-foreground/70",children:":~$"})," whoami"]}),l.jsxs("span",{className:"kicker text-primary inline-flex items-center gap-2",children:[l.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow"}),"SYS://01"]})]}),l.jsx("div",{className:"mt-3 h-px w-full bg-border origin-left animate-draw-rule"})]}),l.jsxs("div",{className:"mt-10 md:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center",children:[l.jsxs("div",{className:"lg:col-span-7 order-2 lg:order-1",children:[l.jsxs("a",{href:"#work-with-me",className:"group mb-5 inline-flex items-center gap-2.5 border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-emerald-600 dark:text-emerald-400 transition-colors hover:border-emerald-500/70 hover:bg-emerald-500/15 opacity-0 animate-fade-in",style:{animationDelay:"0.15s"},children:[l.jsxs("span",{className:"relative flex h-2 w-2",children:[l.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),l.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]}),l.jsx("span",{className:"kicker normal-case tracking-normal font-medium",children:sy.label}),l.jsx("span",{className:"kicker hidden sm:inline text-emerald-700/60 dark:text-emerald-300/50 normal-case tracking-normal",children:"Full-time · Part-time · Contract"})]}),l.jsxs("p",{className:"kicker text-primary mb-5 opacity-0 animate-fade-in normal-case tracking-normal",style:{animationDelay:"0.2s"},children:[l.jsx("span",{className:"text-muted-foreground/70",children:"$"})," status —"," ",l.jsx("span",{className:"text-foreground/90",children:ln.subtitle})]}),l.jsxs("h1",{className:"font-heading font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.5rem,8vw,5.5rem)] opacity-0 animate-reveal-clip text-balance",style:{animationDelay:"0.25s"},children:["Senior / Lead"," ",l.jsx("span",{className:"text-primary",children:"Mobile Engineer"}),l.jsx("span",{"aria-hidden":"true",className:"ml-2 inline-block h-[0.78em] w-[0.46em] translate-y-[0.04em] bg-primary align-baseline animate-caret-blink"})]}),l.jsx("p",{className:"mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty opacity-0 animate-fade-in",style:{animationDelay:"0.4s"},children:ln.tagline}),l.jsx("div",{className:"mt-8 flex flex-col sm:flex-row sm:items-stretch border-y border-border divide-y sm:divide-y-0 sm:divide-x divide-border opacity-0 animate-fade-in",style:{animationDelay:"0.5s"},children:Hy.map(_=>l.jsxs("div",{className:"py-4 sm:pr-6 sm:pl-6 sm:first:pl-0",children:[l.jsx("div",{className:"font-heading text-2xl md:text-3xl leading-none",children:_.value}),l.jsx("div",{className:"kicker text-muted-foreground mt-2",children:_.label})]},_.label))}),l.jsxs("div",{className:"flex flex-wrap gap-3 mt-9 opacity-0 animate-fade-in",style:{animationDelay:"0.6s"},children:[l.jsx(ct,{variant:"hero",size:"lg",asChild:!0,className:"group",children:l.jsxs("a",{href:"#contact",children:["Get in touch",l.jsx(wl,{className:"ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"})]})}),l.jsx(ct,{variant:"heroOutline",size:"lg",asChild:!0,className:"group",children:l.jsxs("a",{href:Ee.cv,target:"_blank",rel:"noopener noreferrer",onClick:()=>n==null?void 0:n.capture("cv_downloaded"),children:["Download CV",l.jsx(Ts,{className:"ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"})]})})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 opacity-0 animate-fade-in",style:{animationDelay:"0.7s"},children:[l.jsxs("a",{href:Ee.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",title:"GitHub",className:"kicker text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"github"}),children:[l.jsx(Rs,{className:"h-4 w-4"})," GitHub"]}),l.jsxs("a",{href:Ee.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",title:"LinkedIn",className:"kicker text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"linkedin"}),children:[l.jsx(As,{className:"h-4 w-4"})," LinkedIn"]}),l.jsxs("a",{href:Ee.pubdev,target:"_blank",rel:"noopener noreferrer","aria-label":"pub.dev packages",title:"pub.dev packages",className:"kicker text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"pubdev"}),children:[l.jsx(Ah,{className:"h-4 w-4"})," pub.dev"]}),l.jsxs("a",{href:Ee.stackoverflow,target:"_blank",rel:"noopener noreferrer","aria-label":"Stack Overflow",title:"Stack Overflow",className:"kicker text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"stackoverflow"}),children:[l.jsx(Fy,{className:"h-4 w-4"})," Stack Overflow"]}),t?l.jsx($t,{className:"h-6 w-36 rounded-sm"}):(e==null?void 0:e.public_repos)!==void 0&&l.jsxs("button",{onClick:()=>{b(!0),r("repos"),n==null||n.capture("repos_modal_opened",{public_repos:e.public_repos})},className:"kicker flex items-center gap-2 border border-border px-2.5 py-1 text-foreground hover:border-primary/50 hover:text-primary transition-colors",children:[l.jsx(Cs,{className:"h-3.5 w-3.5"}),e.public_repos," Public Repos"]})]})]}),l.jsx("div",{className:"lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-scale-in",style:{animationDelay:"0.3s"},children:l.jsxs("div",{ref:g,className:"relative cursor-pointer",onPointerEnter:j,onPointerMove:j,onMouseEnter:B,onMouseMove:B,onClick:U,style:{transform:`translate3d(${o.x}px, ${o.y}px, 0)`,willChange:"transform"},children:[l.jsx("div",{className:`absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${P?"top-full mt-4":"-top-12"} ${u?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-2 scale-95 pointer-events-none"}`,children:l.jsx("div",{className:"bg-primary text-primary-foreground px-3 py-1.5 font-mono text-xs whitespace-nowrap shadow-md",children:f})}),l.jsxs("figure",{className:"relative bg-card border border-border p-3 shadow-[var(--shadow-card)] select-none",children:[l.jsx("span",{className:"absolute -top-1.5 -left-1.5 h-3.5 w-3.5 border-t border-l border-primary"}),l.jsx("span",{className:"absolute -top-1.5 -right-1.5 h-3.5 w-3.5 border-t border-r border-primary"}),l.jsx("span",{className:"absolute -bottom-1.5 -left-1.5 h-3.5 w-3.5 border-b border-l border-primary"}),l.jsx("span",{className:"absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 border-b border-r border-primary"}),l.jsx("img",{src:"/avatar-256.webp",alt:ln.name,width:256,height:256,loading:"eager",fetchpriority:"high",decoding:"async",draggable:!1,className:"relative w-56 h-64 md:w-64 md:h-72 object-cover bg-muted"}),l.jsxs("figcaption",{className:"mt-3 flex items-center justify-between",children:[l.jsx("span",{className:"kicker text-muted-foreground normal-case tracking-normal",children:"~/a.saed.png"}),l.jsxs("span",{className:"kicker text-primary inline-flex items-center gap-1.5",children:[l.jsx("span",{className:"h-1 w-1 rounded-full bg-primary"}),ln.location.split(" / ")[0]]})]})]})]})})]})]})]}),l.jsx(My,{open:m,onOpenChange:b})]})}function By(e={}){const{once:t=!0,margin:n="-100px",threshold:r=0}=e,[o,s]=c.useState(!1),[a,i]=c.useState(null),u=d=>{i(d)};return c.useEffect(()=>{if(!a)return;if(typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){s(!0);return}if(typeof window<"u"){const f=a.getBoundingClientRect(),p=window.innerHeight||document.documentElement.clientHeight;if(f.top<p&&f.bottom>0&&(s(!0),t))return}const d=new IntersectionObserver(([f])=>{f.isIntersecting?(s(!0),t&&d.unobserve(a)):t||s(!1)},{rootMargin:n,threshold:r});return d.observe(a),()=>{d.unobserve(a)}},[a,t,n,r]),{ref:u,isInView:o}}function qy(e){const t=e.match(/^([\d.]+)(.*)$/);if(!t)return{target:null,suffix:e,decimals:0};const n=t[1],r=n.includes(".")?n.split(".")[1].length:0;return{target:parseFloat(n),suffix:t[2],decimals:r}}function wi(e,t){return e.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}function zy(){return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Gy({value:e,run:t,durationMs:n=1300,delayMs:r=0}){const{target:o,suffix:s,decimals:a}=qy(e),[i,u]=c.useState(()=>o===null?e:wi(0,a)+s),d=c.useRef(!1);return c.useEffect(()=>{if(o===null||!t||d.current)return;if(d.current=!0,zy()){u(e);return}let f=0,p=0;const g=setTimeout(()=>{const h=y=>{p||(p=y);const m=Math.min(1,(y-p)/n),b=1-Math.pow(1-m,3);u(wi(o*b,a)+s),m<1?f=requestAnimationFrame(h):u(e)};f=requestAnimationFrame(h)},r);return()=>{clearTimeout(g),cancelAnimationFrame(f)}},[t,o,s,a,e,n,r]),l.jsx(l.Fragment,{children:i})}function Wy(){const{ref:e,isInView:t}=By({margin:"-80px"});return l.jsx("section",{ref:e,className:"py-14 border-y border-border bg-card/40",children:l.jsxs("div",{className:"container mx-auto px-6",children:[l.jsxs("div",{className:`flex items-center gap-3 mb-8 opacity-0 ${t?"animate-fade-in":""}`,children:[l.jsxs("span",{className:"kicker text-primary normal-case tracking-normal",children:[l.jsx("span",{className:"text-muted-foreground/70",children:"$"})," cat ./metrics.log"]}),l.jsx("span",{className:"h-px flex-1 bg-border"}),l.jsx("span",{className:"kicker text-muted-foreground",children:"2019 — 2026"})]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-l border-border",children:ld.map((n,r)=>l.jsxs("div",{className:`group border-r border-b border-border p-5 md:p-6 transition-colors hover:bg-background opacity-0 ${t?"animate-fade-in-up":""}`,style:{animationDelay:`${r*.07}s`},children:[l.jsx("div",{className:"font-heading text-4xl md:text-5xl leading-none tracking-tight tabular-nums transition-colors group-hover:text-primary",children:l.jsx(Gy,{value:n.value,run:t,delayMs:r*70})}),l.jsx("div",{className:"kicker text-muted-foreground mt-3 leading-snug",children:n.label})]},n.label))})]})})}function oa(){const[e,t]=c.useState(!1);return c.useEffect(()=>{const n=()=>{const r=window.scrollY,o=window.innerHeight,s=r>o*.9,a=document.getElementById("contact"),i=!!a&&a.getBoundingClientRect().top<o*.85;t(s&&!i)};return n(),window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}},[]),e}function Vy(){const[e,t]=c.useState(!1),n=oa();c.useEffect(()=>{const o=()=>{t(window.scrollY>400)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.jsx(ct,{onClick:r,size:"icon",className:Q("fixed right-6 z-50 rounded-sm shadow-[var(--shadow-card)] transition-all duration-300","bg-primary hover:bg-primary/90 text-primary-foreground","hover:-translate-y-0.5",n?"bottom-24":"bottom-6",e?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"),"aria-label":"Back to top",children:l.jsx(bh,{className:"h-5 w-5"})})}function Jy(){const e=rr(),{unlock:t}=nt(),n=oa(),r=c.useRef(!1);c.useEffect(()=>{if(!n||r.current)return;if(r.current=!0,typeof window.requestIdleCallback=="function"){const i=window.requestIdleCallback(()=>No());return()=>{var u;return(u=window.cancelIdleCallback)==null?void 0:u.call(window,i)}}const a=window.setTimeout(()=>No(),0);return()=>window.clearTimeout(a)},[n]);const o=()=>No(),s=()=>{e==null||e.capture("calendly_popup_opened",{source:"sticky_bar"}),t("contact"),Cn(),Mr(Ee.calendly)};return l.jsx("div",{className:Q("fixed inset-x-0 bottom-0 z-40 transition-all duration-500 ease-out","pb-[env(safe-area-inset-bottom)]",n?"translate-y-0 opacity-100":"translate-y-full opacity-0 pointer-events-none"),"aria-hidden":!n,children:l.jsx("div",{className:"glass-effect border-t border-border",children:l.jsxs("div",{className:"container mx-auto flex items-center justify-between gap-4 px-6 py-3",children:[l.jsxs("div",{className:"hidden min-w-0 sm:flex sm:flex-col",children:[l.jsx("span",{className:"kicker text-primary",children:"~/let's talk"}),l.jsx("span",{className:"truncate text-sm text-muted-foreground",children:"Got a project or role in mind?"})]}),l.jsxs("button",{type:"button",onClick:s,onPointerEnter:o,onFocus:o,tabIndex:n?0:-1,"aria-label":"Book a 20-minute call",className:Q("group inline-flex min-h-[44px] w-full shrink-0 cursor-pointer items-center justify-center gap-2 sm:w-auto","bg-primary px-5 py-2.5 font-medium text-primary-foreground","transition-transform duration-200 hover:-translate-y-0.5","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",n&&"animate-pulse-glow [animation-duration:2s]"),children:[l.jsx(Nr,{className:"h-4 w-4"}),"Book a call"]})]})})})}function Ky(){const[e,t]=c.useState(0);return c.useEffect(()=>{const n=()=>{const r=document.documentElement.scrollHeight-window.innerHeight;t(r>0?Math.min(100,Math.max(0,window.scrollY/r*100)):0)};return window.addEventListener("scroll",n,{passive:!0}),n(),()=>window.removeEventListener("scroll",n)},[]),l.jsx("div",{className:"fixed top-0 left-0 right-0 z-[60] h-0.5","aria-hidden":"true",children:l.jsx("div",{className:"h-full bg-primary transition-[width] duration-150 ease-out",style:{width:`${e}%`}})})}const Oo=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];function Yy(e){const t=c.useRef(0);c.useEffect(()=>{const n=r=>{const o=r.target;if(o&&/^(INPUT|TEXTAREA|SELECT)$/.test(o.tagName))return;const s=r.key.length===1?r.key.toLowerCase():r.key;s===Oo[t.current]?(t.current+=1,t.current===Oo.length&&(t.current=0,e())):t.current=s===Oo[0]?1:0};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e])}var vi=1,Qy=.9,Xy=.8,Zy=.17,jo=.1,Io=.999,ew=.9999,tw=.99,nw=/[\\\/_+.#"@\[\(\{&]/,rw=/[\\\/_+.#"@\[\(\{&]/g,ow=/[\s-]/,Id=/[\s-]/g;function ms(e,t,n,r,o,s,a){if(s===t.length)return o===e.length?vi:tw;var i=`${o},${s}`;if(a[i]!==void 0)return a[i];for(var u=r.charAt(s),d=n.indexOf(u,o),f=0,p,g,h,y;d>=0;)p=ms(e,t,n,r,d+1,s+1,a),p>f&&(d===o?p*=vi:nw.test(e.charAt(d-1))?(p*=Xy,h=e.slice(o,d-1).match(rw),h&&o>0&&(p*=Math.pow(Io,h.length))):ow.test(e.charAt(d-1))?(p*=Qy,y=e.slice(o,d-1).match(Id),y&&o>0&&(p*=Math.pow(Io,y.length))):(p*=Zy,o>0&&(p*=Math.pow(Io,d-o))),e.charAt(d)!==t.charAt(s)&&(p*=ew)),(p<jo&&n.charAt(d-1)===r.charAt(s+1)||r.charAt(s+1)===r.charAt(s)&&n.charAt(d-1)!==r.charAt(s))&&(g=ms(e,t,n,r,d+1,s+2,a),g*jo>p&&(p=g*jo)),p>f&&(f=p),d=n.indexOf(u,d+1);return a[i]=f,f}function xi(e){return e.toLowerCase().replace(Id," ")}function sw(e,t,n){return e=n&&n.length>0?`${e+" "+n.join(" ")}`:e,ms(e,t,xi(e),xi(t),0,0,{})}var Un='[cmdk-group=""]',$o='[cmdk-group-items=""]',aw='[cmdk-group-heading=""]',$d='[cmdk-item=""]',ki=`${$d}:not([aria-disabled="true"])`,gs="cmdk-item-select",sn="data-value",iw=(e,t,n)=>sw(e,t,n),Dd=c.createContext(void 0),ar=()=>c.useContext(Dd),Ld=c.createContext(void 0),sa=()=>c.useContext(Ld),Md=c.createContext(void 0),Fd=c.forwardRef((e,t)=>{let n=an(()=>{var T,O;return{search:"",value:(O=(T=e.value)!=null?T:e.defaultValue)!=null?O:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),r=an(()=>new Set),o=an(()=>new Map),s=an(()=>new Map),a=an(()=>new Set),i=Hd(e),{label:u,children:d,value:f,onValueChange:p,filter:g,shouldFilter:h,loop:y,disablePointerSelection:m=!1,vimBindings:b=!0,...v}=e,x=dt(),k=dt(),E=dt(),S=c.useRef(null),R=yw();Yt(()=>{if(f!==void 0){let T=f.trim();n.current.value=T,A.emit()}},[f]),Yt(()=>{R(6,G)},[]);let A=c.useMemo(()=>({subscribe:T=>(a.current.add(T),()=>a.current.delete(T)),snapshot:()=>n.current,setState:(T,O,M)=>{var D,z,H,re;if(!Object.is(n.current[T],O)){if(n.current[T]=O,T==="search")I(),$(),R(1,U);else if(T==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let ie=document.getElementById(E);ie?ie.focus():(D=document.getElementById(x))==null||D.focus()}if(R(7,()=>{var ie;n.current.selectedItemId=(ie=j())==null?void 0:ie.id,A.emit()}),M||R(5,G),((z=i.current)==null?void 0:z.value)!==void 0){let ie=O??"";(re=(H=i.current).onValueChange)==null||re.call(H,ie);return}}A.emit()}},emit:()=>{a.current.forEach(T=>T())}}),[]),L=c.useMemo(()=>({value:(T,O,M)=>{var D;O!==((D=s.current.get(T))==null?void 0:D.value)&&(s.current.set(T,{value:O,keywords:M}),n.current.filtered.items.set(T,P(O,M)),R(2,()=>{$(),A.emit()}))},item:(T,O)=>(r.current.add(T),O&&(o.current.has(O)?o.current.get(O).add(T):o.current.set(O,new Set([T]))),R(3,()=>{I(),$(),n.current.value||U(),A.emit()}),()=>{s.current.delete(T),r.current.delete(T),n.current.filtered.items.delete(T);let M=j();R(4,()=>{I(),(M==null?void 0:M.getAttribute("id"))===T&&U(),A.emit()})}),group:T=>(o.current.has(T)||o.current.set(T,new Set),()=>{s.current.delete(T),o.current.delete(T)}),filter:()=>i.current.shouldFilter,label:u||e["aria-label"],getDisablePointerSelection:()=>i.current.disablePointerSelection,listId:x,inputId:E,labelId:k,listInnerRef:S}),[]);function P(T,O){var M,D;let z=(D=(M=i.current)==null?void 0:M.filter)!=null?D:iw;return T?z(T,n.current.search,O):0}function $(){if(!n.current.search||i.current.shouldFilter===!1)return;let T=n.current.filtered.items,O=[];n.current.filtered.groups.forEach(D=>{let z=o.current.get(D),H=0;z.forEach(re=>{let ie=T.get(re);H=Math.max(ie,H)}),O.push([D,H])});let M=S.current;J().sort((D,z)=>{var H,re;let ie=D.getAttribute("id"),we=z.getAttribute("id");return((H=T.get(we))!=null?H:0)-((re=T.get(ie))!=null?re:0)}).forEach(D=>{let z=D.closest($o);z?z.appendChild(D.parentElement===z?D:D.closest(`${$o} > *`)):M.appendChild(D.parentElement===M?D:D.closest(`${$o} > *`))}),O.sort((D,z)=>z[1]-D[1]).forEach(D=>{var z;let H=(z=S.current)==null?void 0:z.querySelector(`${Un}[${sn}="${encodeURIComponent(D[0])}"]`);H==null||H.parentElement.appendChild(H)})}function U(){let T=J().find(M=>M.getAttribute("aria-disabled")!=="true"),O=T==null?void 0:T.getAttribute(sn);A.setState("value",O||void 0)}function I(){var T,O,M,D;if(!n.current.search||i.current.shouldFilter===!1){n.current.filtered.count=r.current.size;return}n.current.filtered.groups=new Set;let z=0;for(let H of r.current){let re=(O=(T=s.current.get(H))==null?void 0:T.value)!=null?O:"",ie=(D=(M=s.current.get(H))==null?void 0:M.keywords)!=null?D:[],we=P(re,ie);n.current.filtered.items.set(H,we),we>0&&z++}for(let[H,re]of o.current)for(let ie of re)if(n.current.filtered.items.get(ie)>0){n.current.filtered.groups.add(H);break}n.current.filtered.count=z}function G(){var T,O,M;let D=j();D&&(((T=D.parentElement)==null?void 0:T.firstChild)===D&&((M=(O=D.closest(Un))==null?void 0:O.querySelector(aw))==null||M.scrollIntoView({block:"nearest"})),D.scrollIntoView({block:"nearest"}))}function j(){var T;return(T=S.current)==null?void 0:T.querySelector(`${$d}[aria-selected="true"]`)}function J(){var T;return Array.from(((T=S.current)==null?void 0:T.querySelectorAll(ki))||[])}function B(T){let O=J()[T];O&&A.setState("value",O.getAttribute(sn))}function W(T){var O;let M=j(),D=J(),z=D.findIndex(re=>re===M),H=D[z+T];(O=i.current)!=null&&O.loop&&(H=z+T<0?D[D.length-1]:z+T===D.length?D[0]:D[z+T]),H&&A.setState("value",H.getAttribute(sn))}function _(T){let O=j(),M=O==null?void 0:O.closest(Un),D;for(;M&&!D;)M=T>0?gw(M,Un):bw(M,Un),D=M==null?void 0:M.querySelector(ki);D?A.setState("value",D.getAttribute(sn)):W(T)}let N=()=>B(J().length-1),K=T=>{T.preventDefault(),T.metaKey?N():T.altKey?_(1):W(1)},ae=T=>{T.preventDefault(),T.metaKey?B(0):T.altKey?_(-1):W(-1)};return c.createElement(ee.div,{ref:t,tabIndex:-1,...v,"cmdk-root":"",onKeyDown:T=>{var O;(O=v.onKeyDown)==null||O.call(v,T);let M=T.nativeEvent.isComposing||T.keyCode===229;if(!(T.defaultPrevented||M))switch(T.key){case"n":case"j":{b&&T.ctrlKey&&K(T);break}case"ArrowDown":{K(T);break}case"p":case"k":{b&&T.ctrlKey&&ae(T);break}case"ArrowUp":{ae(T);break}case"Home":{T.preventDefault(),B(0);break}case"End":{T.preventDefault(),N();break}case"Enter":{T.preventDefault();let D=j();if(D){let z=new Event(gs);D.dispatchEvent(z)}}}}},c.createElement("label",{"cmdk-label":"",htmlFor:L.inputId,id:L.labelId,style:vw},u),so(e,T=>c.createElement(Ld.Provider,{value:A},c.createElement(Dd.Provider,{value:L},T))))}),lw=c.forwardRef((e,t)=>{var n,r;let o=dt(),s=c.useRef(null),a=c.useContext(Md),i=ar(),u=Hd(e),d=(r=(n=u.current)==null?void 0:n.forceMount)!=null?r:a==null?void 0:a.forceMount;Yt(()=>{if(!d)return i.item(o,a==null?void 0:a.id)},[d]);let f=Ud(o,s,[e.value,e.children,s],e.keywords),p=sa(),g=Ot(R=>R.value&&R.value===f.current),h=Ot(R=>d||i.filter()===!1?!0:R.search?R.filtered.items.get(o)>0:!0);c.useEffect(()=>{let R=s.current;if(!(!R||e.disabled))return R.addEventListener(gs,y),()=>R.removeEventListener(gs,y)},[h,e.onSelect,e.disabled]);function y(){var R,A;m(),(A=(R=u.current).onSelect)==null||A.call(R,f.current)}function m(){p.setState("value",f.current,!0)}if(!h)return null;let{disabled:b,value:v,onSelect:x,forceMount:k,keywords:E,...S}=e;return c.createElement(ee.div,{ref:Wt(s,t),...S,id:o,"cmdk-item":"",role:"option","aria-disabled":!!b,"aria-selected":!!g,"data-disabled":!!b,"data-selected":!!g,onPointerMove:b||i.getDisablePointerSelection()?void 0:m,onClick:b?void 0:y},e.children)}),cw=c.forwardRef((e,t)=>{let{heading:n,children:r,forceMount:o,...s}=e,a=dt(),i=c.useRef(null),u=c.useRef(null),d=dt(),f=ar(),p=Ot(h=>o||f.filter()===!1?!0:h.search?h.filtered.groups.has(a):!0);Yt(()=>f.group(a),[]),Ud(a,i,[e.value,e.heading,u]);let g=c.useMemo(()=>({id:a,forceMount:o}),[o]);return c.createElement(ee.div,{ref:Wt(i,t),...s,"cmdk-group":"",role:"presentation",hidden:p?void 0:!0},n&&c.createElement("div",{ref:u,"cmdk-group-heading":"","aria-hidden":!0,id:d},n),so(e,h=>c.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?d:void 0},c.createElement(Md.Provider,{value:g},h))))}),dw=c.forwardRef((e,t)=>{let{alwaysRender:n,...r}=e,o=c.useRef(null),s=Ot(a=>!a.search);return!n&&!s?null:c.createElement(ee.div,{ref:Wt(o,t),...r,"cmdk-separator":"",role:"separator"})}),uw=c.forwardRef((e,t)=>{let{onValueChange:n,...r}=e,o=e.value!=null,s=sa(),a=Ot(d=>d.search),i=Ot(d=>d.selectedItemId),u=ar();return c.useEffect(()=>{e.value!=null&&s.setState("search",e.value)},[e.value]),c.createElement(ee.input,{ref:t,...r,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":u.listId,"aria-labelledby":u.labelId,"aria-activedescendant":i,id:u.inputId,type:"text",value:o?e.value:a,onChange:d=>{o||s.setState("search",d.target.value),n==null||n(d.target.value)}})}),hw=c.forwardRef((e,t)=>{let{children:n,label:r="Suggestions",...o}=e,s=c.useRef(null),a=c.useRef(null),i=Ot(d=>d.selectedItemId),u=ar();return c.useEffect(()=>{if(a.current&&s.current){let d=a.current,f=s.current,p,g=new ResizeObserver(()=>{p=requestAnimationFrame(()=>{let h=d.offsetHeight;f.style.setProperty("--cmdk-list-height",h.toFixed(1)+"px")})});return g.observe(d),()=>{cancelAnimationFrame(p),g.unobserve(d)}}},[]),c.createElement(ee.div,{ref:Wt(s,t),...o,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":i,"aria-label":r,id:u.listId},so(e,d=>c.createElement("div",{ref:Wt(a,u.listInnerRef),"cmdk-list-sizer":""},d)))}),fw=c.forwardRef((e,t)=>{let{open:n,onOpenChange:r,overlayClassName:o,contentClassName:s,container:a,...i}=e;return c.createElement(Vs,{open:n,onOpenChange:r},c.createElement(Js,{container:a},c.createElement(or,{"cmdk-overlay":"",className:o}),c.createElement(sr,{"aria-label":e.label,"cmdk-dialog":"",className:s},c.createElement(Fd,{ref:t,...i}))))}),pw=c.forwardRef((e,t)=>Ot(n=>n.filtered.count===0)?c.createElement(ee.div,{ref:t,...e,"cmdk-empty":"",role:"presentation"}):null),mw=c.forwardRef((e,t)=>{let{progress:n,children:r,label:o="Loading...",...s}=e;return c.createElement(ee.div,{ref:t,...s,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":o},so(e,a=>c.createElement("div",{"aria-hidden":!0},a)))}),Se=Object.assign(Fd,{List:hw,Item:lw,Input:uw,Group:cw,Separator:dw,Dialog:fw,Empty:pw,Loading:mw});function gw(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}function bw(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}function Hd(e){let t=c.useRef(e);return Yt(()=>{t.current=e}),t}var Yt=typeof window>"u"?c.useEffect:c.useLayoutEffect;function an(e){let t=c.useRef();return t.current===void 0&&(t.current=e()),t}function Ot(e){let t=sa(),n=()=>e(t.snapshot());return c.useSyncExternalStore(t.subscribe,n,n)}function Ud(e,t,n,r=[]){let o=c.useRef(),s=ar();return Yt(()=>{var a;let i=(()=>{var d;for(let f of n){if(typeof f=="string")return f.trim();if(typeof f=="object"&&"current"in f)return f.current?(d=f.current.textContent)==null?void 0:d.trim():o.current}})(),u=r.map(d=>d.trim());s.value(e,i,u),(a=t.current)==null||a.setAttribute(sn,i),o.current=i}),o}var yw=()=>{let[e,t]=c.useState(),n=an(()=>new Map);return Yt(()=>{n.current.forEach(r=>r()),n.current=new Map},[e]),(r,o)=>{n.current.set(r,o),t({})}};function ww(e){let t=e.type;return typeof t=="function"?t(e.props):"render"in t?t.render(e.props):e}function so({asChild:e,children:t},n){return e&&c.isValidElement(t)?c.cloneElement(ww(t),{ref:t.ref},n(t.props.children)):n(t)}var vw={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const Bd=c.forwardRef(({className:e,...t},n)=>l.jsx(Se,{ref:n,className:Q("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",e),...t}));Bd.displayName=Se.displayName;const xw=({children:e,...t})=>l.jsx(Ys,{...t,children:l.jsx(no,{className:"overflow-hidden p-0 shadow-lg",children:l.jsx(Bd,{className:"[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",children:e})})}),qd=c.forwardRef(({className:e,...t},n)=>l.jsxs("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[l.jsx(_h,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),l.jsx(Se.Input,{ref:n,className:Q("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",e),...t})]}));qd.displayName=Se.Input.displayName;const zd=c.forwardRef(({className:e,...t},n)=>l.jsx(Se.List,{ref:n,className:Q("max-h-[300px] overflow-y-auto overflow-x-hidden",e),...t}));zd.displayName=Se.List.displayName;const Gd=c.forwardRef((e,t)=>l.jsx(Se.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));Gd.displayName=Se.Empty.displayName;const Pr=c.forwardRef(({className:e,...t},n)=>l.jsx(Se.Group,{ref:n,className:Q("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",e),...t}));Pr.displayName=Se.Group.displayName;const kw=c.forwardRef(({className:e,...t},n)=>l.jsx(Se.Separator,{ref:n,className:Q("-mx-1 h-px bg-border",e),...t}));kw.displayName=Se.Separator.displayName;const Te=c.forwardRef(({className:e,...t},n)=>l.jsx(Se.Item,{ref:n,className:Q("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",e),...t}));Te.displayName=Se.Item.displayName;const Ew=[{id:"projects",label:"Projects",icon:xh},{id:"case-studies",label:"Case Studies",icon:vh},{id:"about",label:"About",icon:Nh},{id:"experience",label:"Experience",icon:yh},{id:"articles",label:"Articles",icon:Rh},{id:"skills",label:"Skills",icon:Oh},{id:"recommendations",label:"Praise",icon:Ch},{id:"contact",label:"Contact",icon:Sh}];function Sw({onToggleTheme:e}){const{paletteOpen:t,setPaletteOpen:n,setPanelOpen:r,unlock:o,setMatrixOn:s}=nt(),[a,i]=c.useState("");c.useEffect(()=>{const h=y=>{(y.metaKey||y.ctrlKey)&&y.key.toLowerCase()==="k"&&(y.preventDefault(),n(!t))};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[t,n]),c.useEffect(()=>{t&&o("palette")},[t,o]);const u=h=>{n(!1),i(""),window.setTimeout(h,0)},d=h=>u(()=>{var y;return(y=document.getElementById(h))==null?void 0:y.scrollIntoView({behavior:"smooth",block:"start"})}),f=h=>u(()=>window.open(h,"_blank","noopener,noreferrer")),p=h=>u(()=>{o("secret"),h()}),g=a.trim().length>0;return l.jsxs(xw,{open:t,onOpenChange:n,children:[l.jsx(qd,{placeholder:"Type a command or search…  (try: matrix, whoami)",value:a,onValueChange:i}),l.jsxs(zd,{children:[l.jsx(Gd,{children:"No matching command. Try “help”."}),l.jsx(Pr,{heading:"Navigate",children:Ew.map(h=>l.jsxs(Te,{value:`goto ${h.label}`,onSelect:()=>d(h.id),children:[l.jsx(h.icon,{className:"mr-2 text-muted-foreground"}),l.jsx("span",{children:h.label})]},h.id))}),l.jsxs(Pr,{heading:"Actions",children:[l.jsxs(Te,{value:"book a call hire contact",onSelect:()=>u(()=>{o("contact"),Cn(),Mr(Ee.calendly)}),children:[l.jsx(Nr,{className:"mr-2 text-primary"}),l.jsx("span",{children:"Book a call"}),l.jsx(wl,{className:"ml-auto h-3.5 w-3.5 opacity-50"})]}),l.jsxs(Te,{value:"download cv resume",onSelect:()=>f(Ee.cv),children:[l.jsx(Ts,{className:"mr-2 text-muted-foreground"}),l.jsx("span",{children:"Download CV"})]}),l.jsxs(Te,{value:"github code",onSelect:()=>f("https://github.com/binSaed"),children:[l.jsx(Rs,{className:"mr-2 text-muted-foreground"}),l.jsx("span",{children:"GitHub"})]}),l.jsxs(Te,{value:"linkedin",onSelect:()=>f("https://www.linkedin.com/in/binsaed/"),children:[l.jsx(As,{className:"mr-2 text-muted-foreground"}),l.jsx("span",{children:"LinkedIn"})]}),l.jsxs(Te,{value:"toggle theme dark light mode",onSelect:()=>u(e),children:[l.jsx(kl,{className:"mr-2 text-muted-foreground"}),l.jsx("span",{children:"Toggle theme"})]}),l.jsxs(Te,{value:"secrets missions achievements mission log",onSelect:()=>u(()=>r(!0)),children:[l.jsx(mo,{className:"mr-2 text-muted-foreground"}),l.jsx("span",{children:"Secrets / mission log"})]})]}),g&&l.jsxs(Pr,{heading:"Secrets",children:[l.jsxs(Te,{value:"matrix",onSelect:()=>p(()=>s(!0)),children:[l.jsx(mo,{className:"mr-2 text-primary"}),l.jsx("span",{children:"matrix"}),l.jsx("span",{className:"ml-auto kicker text-muted-foreground/60",children:"enter the rain"})]}),l.jsxs(Te,{value:"whoami",onSelect:()=>p(()=>Sr("operative",{description:"Abdelrahman Saed — full-stack engineer. You're already in the system."})),children:[l.jsx(go,{className:"mr-2 text-primary"}),l.jsx("span",{children:"whoami"})]}),l.jsxs(Te,{value:"sudo hire",onSelect:()=>p(()=>{o("contact"),Cn({particleCount:160,spread:110}),Sr("permission granted ✅",{description:"Smart move. Let's talk — opening the calendar."}),window.setTimeout(()=>Mr(Ee.calendly),600)}),children:[l.jsx(mo,{className:"mr-2 text-primary"}),l.jsx("span",{children:"sudo hire"})]}),l.jsxs(Te,{value:"coffee",onSelect:()=>p(()=>Sr("☕ brewing…",{description:"Best ideas start over coffee. Book a call?"})),children:[l.jsx(go,{className:"mr-2 text-primary"}),l.jsx("span",{children:"coffee"})]}),l.jsxs(Te,{value:"help",onSelect:()=>u(()=>r(!0)),children:[l.jsx(go,{className:"mr-2 text-muted-foreground"}),l.jsx("span",{children:"help"})]})]})]})]})}function Tw(){const{toasts:e,dismissToast:t}=nt();return l.jsx("div",{className:"pointer-events-none fixed right-4 top-20 z-[120] flex w-[min(20rem,calc(100vw-2rem))] flex-col gap-2","aria-live":"polite","aria-atomic":"false",children:e.map(n=>l.jsx(Rw,{achievement:n,onDone:()=>t(n.id)},n.id))})}function Rw({achievement:e,onDone:t}){return c.useEffect(()=>{const n=window.setTimeout(t,4200);return()=>window.clearTimeout(n)},[t]),l.jsxs("div",{role:"status",className:"pointer-events-auto group flex items-start gap-3 border border-primary/50 bg-card/95 p-3 shadow-[0_0_24px_-6px_hsl(var(--primary)/0.5)] backdrop-blur-md animate-slide-down",onClick:t,children:[l.jsx("span",{className:"mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-primary/15 text-primary",children:l.jsx(vl,{className:"h-3.5 w-3.5",strokeWidth:3})}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"kicker text-primary",children:"[ unlocked ]"}),l.jsx("div",{className:"mt-1 font-heading text-sm leading-tight text-foreground",children:e.label})]})]})}function Aw(){const{scanPct:e,unlocked:t,achievements:n,setPanelOpen:r}=nt(),o=oa();return l.jsxs("button",{type:"button",onClick:()=>r(!0),"aria-label":`Open mission log. System scan ${e}%, ${t.size} of ${n.length} secrets found.`,className:Q("group fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-3","border border-border bg-card/85 px-3 py-2 backdrop-blur-md transition-all duration-500 ease-out","hover:border-primary/60 hover:shadow-[0_0_20px_-6px_hsl(var(--primary)/0.5)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",o&&"-translate-y-[4.25rem]"),children:[l.jsxs("div",{className:"flex flex-col items-start gap-1",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"kicker text-muted-foreground/70",children:"scan"}),l.jsxs("span",{className:"kicker tabular-nums text-primary",children:[e,"%"]}),l.jsx("span",{className:"kicker text-muted-foreground/40",children:"·"}),l.jsxs("span",{className:"kicker tabular-nums text-muted-foreground",children:["◈ ",t.size,"/",n.length]})]}),l.jsx("div",{className:"h-1 w-32 overflow-hidden bg-border",children:l.jsx("div",{className:"h-full bg-primary transition-[width] duration-500 ease-out",style:{width:`${e}%`}})})]}),l.jsxs("kbd",{className:"hidden items-center gap-1 border border-border px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground group-hover:border-primary/40 md:inline-flex",children:[l.jsx(xl,{className:"h-3 w-3"}),"K"]})]})}function Cw(){const{matrixOn:e,setMatrixOn:t}=nt(),n=c.useRef(null);return c.useEffect(()=>{if(!e)return;const r=()=>t(!1),o=x=>{x.key==="Escape"&&r()};window.addEventListener("keydown",o);const s=n.current,a=s==null?void 0:s.getContext("2d");if(!s||!a)return()=>window.removeEventListener("keydown",o);const i="アイウエオカキクケコサシスセソ0123456789ABCDEF<>/[]{}=$#".split(""),u=16;let d=0,f=[];const p=()=>{s.width=window.innerWidth,s.height=window.innerHeight,d=Math.floor(s.width/u),f=Array.from({length:d},()=>Math.floor(Math.random()*s.height/u))};p(),window.addEventListener("resize",p);const g="hsl(186 100% 75%)",h="hsl(186 100% 45%)",y=()=>{a.fillStyle="rgba(2, 6, 12, 0.12)",a.fillRect(0,0,s.width,s.height),a.font=`${u}px 'JetBrains Mono', monospace`;for(let x=0;x<f.length;x++){const k=i[Math.floor(Math.random()*i.length)],E=x*u,S=f[x]*u;a.fillStyle=Math.random()>.975?g:h,a.fillText(k,E,S),S>s.height&&Math.random()>.975&&(f[x]=0),f[x]++}},m=dd();let b=0,v=0;if(m)a.fillStyle="rgba(2, 6, 12, 0.92)",a.fillRect(0,0,s.width,s.height),y();else{const x=()=>{y(),b=window.requestAnimationFrame(()=>{v=window.setTimeout(x,45)})};x()}return()=>{window.removeEventListener("keydown",o),window.removeEventListener("resize",p),window.cancelAnimationFrame(b),window.clearTimeout(v)}},[e,t]),e?l.jsxs("div",{className:"fixed inset-0 z-[200] cursor-pointer bg-black/80 animate-fade-in",onClick:()=>t(!1),role:"dialog","aria-label":"Matrix mode easter egg",children:[l.jsx("canvas",{ref:n,className:"h-full w-full"}),l.jsxs("button",{type:"button",onClick:()=>t(!1),"aria-label":"Exit matrix mode",className:"absolute right-4 top-4 flex items-center gap-2 border border-primary/50 bg-card/80 px-3 py-2 text-primary backdrop-blur-md kicker",children:[l.jsx(Wr,{className:"h-4 w-4"})," exit"]}),l.jsx("p",{className:"pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 kicker text-primary/80",children:"wake up, neo… (click anywhere to exit)"})]}):null}function _w(){const{panelOpen:e,setPanelOpen:t,achievements:n,unlocked:r,setPaletteOpen:o}=nt(),s=r.size,a=n.length,i=Math.round(s/a*100);return l.jsx(Ys,{open:e,onOpenChange:t,children:l.jsxs(no,{className:"max-w-md gap-0 border-border p-0",children:[l.jsxs(Qs,{className:"space-y-3 border-b border-border p-5 text-left",children:[l.jsxs(Xs,{className:"flex items-baseline gap-2 font-heading text-xl tracking-tight",children:[l.jsx("span",{className:"text-muted-foreground/60",children:"$"}),"cat ./secrets"]}),l.jsx(Zs,{className:"sr-only",children:"A log of hidden interactions on the site. Found secrets show their name; locked ones show a hint."}),l.jsxs("div",{className:"space-y-1.5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"kicker text-muted-foreground",children:"missions found"}),l.jsxs("span",{className:"kicker tabular-nums text-primary",children:[s," / ",a]})]}),l.jsx("div",{className:"h-1 w-full overflow-hidden bg-border",children:l.jsx("div",{className:"h-full bg-primary transition-[width] duration-500 ease-out",style:{width:`${i}%`}})})]})]}),l.jsx("ul",{className:"max-h-[55vh] divide-y divide-border/60 overflow-y-auto",children:n.map(u=>l.jsx(Nw,{achievement:u,found:r.has(u.id)},u.id))}),l.jsxs("div",{className:"flex items-center justify-between gap-2 border-t border-border p-4",children:[l.jsx("span",{className:"kicker text-muted-foreground/70",children:s===a?"all systems breached ✦":"keep digging…"}),l.jsxs("button",{type:"button",onClick:()=>{t(!1),window.setTimeout(()=>o(!0),0)},className:"inline-flex items-center gap-1.5 border border-border px-2.5 py-1.5 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground",children:[l.jsx(xl,{className:"h-3.5 w-3.5"}),l.jsx("span",{className:"kicker",children:"command line"})]})]})]})})}function Pw(e){return e.split(" ").map(t=>"█".repeat(t.length)).join(" ")}function Nw({achievement:e,found:t}){return l.jsxs("li",{className:"flex items-start gap-3 px-5 py-3",children:[l.jsx("span",{className:Q("mt-0.5 grid h-6 w-6 shrink-0 place-items-center border",t?"border-primary/50 bg-primary/15 text-primary":"border-border bg-muted/30 text-muted-foreground/50"),children:t?l.jsx(vl,{className:"h-3.5 w-3.5",strokeWidth:3}):l.jsx(Eh,{className:"h-3 w-3"})}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsx("div",{className:Q("font-heading text-sm leading-tight",t?"text-foreground":"select-none tracking-wider text-muted-foreground/40"),"aria-label":t?e.label:"Locked secret",children:t?e.label:Pw(e.label)}),l.jsx("div",{className:Q("mt-1 font-mono text-xs",t?"text-primary/70":"text-muted-foreground/70"),children:t?e.done:e.hint})]})]})}function Ow({onToggleTheme:e}){const{unlock:t,setMatrixOn:n}=nt();iy();const r=c.useCallback(()=>{t("konami"),Cn({particleCount:180,spread:120,origin:{y:.5}}),Sr("cheat code accepted",{description:"Entering the matrix…"}),n(!0)},[t,n]);return Yy(r),l.jsxs(l.Fragment,{children:[l.jsx(Sw,{onToggleTheme:e}),l.jsx(Tw,{}),l.jsx(Aw,{}),l.jsx(_w,{}),l.jsx(Cw,{})]})}function jw(){const[e,t]=c.useState(()=>{if(typeof window<"u"){const r=localStorage.getItem("theme");return r||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}return"dark"});return c.useEffect(()=>{const r=document.documentElement;e==="dark"?r.classList.add("dark"):r.classList.remove("dark"),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{t(r=>r==="dark"?"light":"dark")},setTheme:t}}const Iw=c.lazy(()=>ue(()=>import("./AboutSection-riv_L70Y.js"),__vite__mapDeps([0,1,2])).then(e=>({default:e.AboutSection}))),$w=c.lazy(()=>ue(()=>import("./ExperienceSection-CfAi5m89.js"),__vite__mapDeps([3,2,1])).then(e=>({default:e.ExperienceSection}))),Dw=c.lazy(()=>ue(()=>import("./ProjectsSection-DycVkwwC.js"),__vite__mapDeps([4,2,1,5])).then(e=>({default:e.ProjectsSection}))),Lw=c.lazy(()=>ue(()=>import("./CaseStudiesSection-CUwrTGLJ.js"),__vite__mapDeps([6,2,7,1,5])).then(e=>({default:e.CaseStudiesSection}))),Mw=c.lazy(()=>ue(()=>import("./ArticlesSection-UWfgldaI.js"),__vite__mapDeps([8,2,1])).then(e=>({default:e.ArticlesSection}))),Fw=c.lazy(()=>ue(()=>import("./SkillsSection-BgEQERyC.js"),__vite__mapDeps([9,1,10,2])).then(e=>({default:e.SkillsSection}))),Hw=c.lazy(()=>ue(()=>import("./RecommendationsSection-DImY58Jt.js"),__vite__mapDeps([11,2,1,5])).then(e=>({default:e.RecommendationsSection}))),Uw=c.lazy(()=>ue(()=>import("./FAQSection-upw3cCEj.js"),__vite__mapDeps([12,1,2])).then(e=>({default:e.FAQSection}))),Bw=c.lazy(()=>ue(()=>import("./AvailabilitySection-ePcpIwaf.js"),__vite__mapDeps([13,2,1,14,15])).then(e=>({default:e.AvailabilitySection}))),qw=c.lazy(()=>ue(()=>import("./ContactSection-DBCL4kcs.js"),__vite__mapDeps([16,2,1,5])).then(e=>({default:e.ContactSection}))),zw=c.lazy(()=>ue(()=>import("./Footer-BIFD_1QD.js"),__vite__mapDeps([17,2])).then(e=>({default:e.Footer}))),Gw=()=>{const{theme:e,toggleTheme:t}=jw(),n=ws();return c.useEffect(()=>{const o=setTimeout(()=>{if(n.hash){const s=document.querySelector(n.hash);s&&s.scrollIntoView({behavior:"smooth"})}},300);return()=>clearTimeout(o)},[n.hash,n.key]),l.jsxs("div",{className:"min-h-screen bg-background",children:[l.jsxs(zg,{children:[l.jsx("title",{children:"Abdelrahman Saed | Senior / Lead Mobile Engineer (Flutter)"}),l.jsx("meta",{name:"description",content:"Senior / Lead Mobile Engineer with 7 years shipping production Flutter apps for iOS and Android to 5M+ users — Flutter, Dart, BLoC/Cubit, Clean Architecture, and release engineering. Open to full-time, part-time, or contract roles."}),l.jsx("link",{rel:"canonical",href:"https://bnsaed.com/"}),l.jsx("meta",{property:"og:type",content:"website"}),l.jsx("meta",{property:"og:url",content:"https://bnsaed.com/"}),l.jsx("meta",{property:"og:title",content:"Abdelrahman Saed | Senior / Lead Mobile Engineer (Flutter)"}),l.jsx("meta",{property:"og:description",content:"Senior / Lead Mobile Engineer with 7 years shipping production Flutter apps for iOS and Android to 5M+ users — Flutter, Dart, BLoC/Cubit, Clean Architecture, and release engineering. Open to full-time, part-time, or contract roles."}),l.jsx("meta",{property:"og:image",content:"https://bnsaed.com/og.png"}),l.jsx("meta",{property:"og:image:width",content:"1200"}),l.jsx("meta",{property:"og:image:height",content:"630"}),l.jsx("meta",{property:"og:image:alt",content:"Abdelrahman Saed — Senior / Lead Mobile Engineer (Flutter). 7+ years, 5M+ users, 99.9% crash-free."}),l.jsx("meta",{property:"og:site_name",content:"Abdelrahman Saed Portfolio"}),l.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),l.jsx("meta",{name:"twitter:url",content:"https://bnsaed.com/"}),l.jsx("meta",{name:"twitter:title",content:"Abdelrahman Saed | Senior / Lead Mobile Engineer (Flutter)"}),l.jsx("meta",{name:"twitter:description",content:"Senior / Lead Mobile Engineer — 7 years of Flutter shipping production iOS & Android apps to 5M+ users. Available for hire — full-time, part-time, or contract."}),l.jsx("meta",{name:"twitter:image",content:"https://bnsaed.com/og.png"}),l.jsx("meta",{name:"twitter:image:alt",content:"Abdelrahman Saed — Senior / Lead Mobile Engineer (Flutter). 7+ years, 5M+ users, 99.9% crash-free."})]}),l.jsx(Ky,{}),l.jsx(cy,{theme:e,toggleTheme:t}),l.jsxs("main",{children:[l.jsx(Uy,{}),l.jsx(Wy,{}),l.jsxs(c.Suspense,{fallback:l.jsx("div",{className:"min-h-[200px]"}),children:[l.jsx(Dw,{}),l.jsx(Lw,{}),l.jsx(Iw,{}),l.jsx($w,{}),l.jsx(Mw,{}),l.jsx(Fw,{}),l.jsx(Hw,{}),l.jsx(Uw,{}),l.jsx(Bw,{}),l.jsx(qw,{})]})]}),l.jsx(c.Suspense,{fallback:null,children:l.jsx(zw,{})}),l.jsx(Vy,{}),l.jsx(Jy,{}),l.jsx(Ow,{onToggleTheme:t})]})},Do="a, button, input, textarea, select, label, [role='button'], .dossier-card";function Ww(){const[e,t]=c.useState(!1),n=c.useRef(null);return c.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const r=window.matchMedia("(hover: hover) and (pointer: fine)"),o=window.matchMedia("(prefers-reduced-motion: reduce)"),s=()=>t(r.matches&&!o.matches);return s(),r.addEventListener("change",s),o.addEventListener("change",s),()=>{r.removeEventListener("change",s),o.removeEventListener("change",s)}},[]),c.useEffect(()=>{const r=n.current;if(!e||!r)return;let o=window.innerWidth/2,s=window.innerHeight/2,a=o,i=s,u=0,d=!1;const f=v=>{o=v.clientX,s=v.clientY,d||(d=!0,r.style.opacity="1")},p=()=>{d=!1,r.style.opacity="0"},g=()=>r.classList.add("is-down"),h=()=>r.classList.remove("is-down"),y=v=>{var x,k;(k=(x=v.target)==null?void 0:x.closest)!=null&&k.call(x,Do)&&r.classList.add("is-active")},m=v=>{var E,S;const x=v.target;if(!((E=x==null?void 0:x.closest)!=null&&E.call(x,Do)))return;const k=v.relatedTarget;(S=k==null?void 0:k.closest)!=null&&S.call(k,Do)||r.classList.remove("is-active")},b=()=>{a+=(o-a)*.18,i+=(s-i)*.18,r.style.transform=`translate3d(${a}px, ${i}px, 0) translate(-50%, -50%)`,u=requestAnimationFrame(b)};return u=requestAnimationFrame(b),window.addEventListener("pointermove",f,{passive:!0}),document.addEventListener("pointerdown",g),document.addEventListener("pointerup",h),document.addEventListener("mouseover",y),document.addEventListener("mouseout",m),document.addEventListener("mouseleave",p),window.addEventListener("blur",p),()=>{cancelAnimationFrame(u),window.removeEventListener("pointermove",f),document.removeEventListener("pointerdown",g),document.removeEventListener("pointerup",h),document.removeEventListener("mouseover",y),document.removeEventListener("mouseout",m),document.removeEventListener("mouseleave",p),window.removeEventListener("blur",p)}},[e]),e?l.jsx("div",{ref:n,className:"dossier-cursor",style:{opacity:0},"aria-hidden":"true"}):null}const Vw=[{slug:"flutter-cached-pdfview-guide",title:"Building a Cached PDF Viewer in Flutter",description:"Learn how to implement an efficient PDF viewer with caching support for iOS and Android using flutter_cached_pdfview.",date:"2024-01-15",dateModified:"2026-06-27",readTime:"5 min read",tags:["Flutter","Dart","PDF","Mobile"],caseStudySlug:"flutter-cached-pdfview"},{slug:"github-actions-branch-protection-guardrails",title:"The repo that rejects my own pushes to master",description:"Two small GitHub Actions that stop accidental direct pushes to master and auto-restore build-breaking files — reversible by design, with an explicit escape hatch.",date:"2026-04-14",readTime:"6 min read",tags:["GitHub Actions","DevOps","CI/CD","Flutter"]},{slug:"automate-pull-request-hygiene",title:"PRs that fill in their own paperwork (and a gate that won't let bad code merge)",description:"Separating the chores of code review from the judgment: auto-context on every PR, plus a quality gate that validates translations, runs the analyzer, and cleans up after itself.",date:"2026-04-21",readTime:"6 min read",tags:["GitHub Actions","Developer Experience","CI/CD","Code Review"]},{slug:"sync-jira-with-github-prs",title:"Making Jira and GitHub agree without anyone updating both",description:"A branch-name regex and one REST call mirror Jira status, fix versions, and labels onto every PR — plus a Slow PR flag that surfaces finished work that is not shipping.",date:"2026-04-28",readTime:"7 min read",tags:["GitHub Actions","Jira","CI/CD","Developer Experience"]},{slug:"auto-rebase-and-detect-merge-conflicts",title:"Every merge to master quietly breaks other PRs. So I built a radar for it.",description:"A two-workflow radar that refreshes every open PR on each merge to master, treats mergeability as eventually consistent, and routes conflict alerts to the right person.",date:"2026-05-05",readTime:"6 min read",tags:["GitHub Actions","Git","CI/CD","DevOps"]},{slug:"bot-that-resolves-merge-conflicts",title:"I let a bot resolve merge conflicts and push the fix. Here's how I made that safe.",description:"How to ship a genuinely dangerous automation safely — by shrinking its blast radius to one provably-safe case, working only in throwaway space, and failing closed on anything unexpected.",date:"2026-05-12",readTime:"8 min read",tags:["GitHub Actions","Git","Automation","CI/CD"]},{slug:"automated-stale-branch-cleanup",title:"A repo that cleans up after itself — without deleting the wrong branch",description:"Bulk branch deletion done safely, as a careful classification with a per-run cap, deferral, and a full audit trail — never a blunt age filter.",date:"2026-06-02",readTime:"6 min read",tags:["GitHub Actions","Git","DevOps","Automation"]},{slug:"ai-weekly-engineering-reviews",title:"I built an AI that writes weekly engineering summaries. Then I had to decide whether I should.",description:"Aggregating git and Jira into per-person weekly summaries with an LLM is a weekend project. Doing it responsibly — private, descriptive, transparent — is the actual work.",date:"2026-06-09",readTime:"8 min read",tags:["AI in Development","Engineering Leadership","Team Management","Automation"]}],Jw=[{id:"self-driving-repo",name:"The Self-Driving Repo",description:"A CI/CD automation series: small GitHub Actions that run the boring, error-prone parts of engineering — guardrails, PR hygiene, a merge-conflict radar, safe cleanup — so releases stay calm.",slugs:["github-actions-branch-protection-guardrails","automate-pull-request-hygiene","sync-jira-with-github-prs","auto-rebase-and-detect-merge-conflicts","bot-that-resolves-merge-conflicts","automated-stale-branch-cleanup","ai-weekly-engineering-reviews"]}];function yt(e){const t=Vw.find(n=>n.slug===e);if(!t)throw new Error(`articleMeta.js has no entry for slug "${e}"`);return t}const Kn=[{...yt("flutter-cached-pdfview-guide"),content:`
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
    `},{...yt("github-actions-branch-protection-guardrails"),content:`
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
`},{...yt("automate-pull-request-hygiene"),content:`
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
`},{...yt("sync-jira-with-github-prs"),content:`
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
`},{...yt("auto-rebase-and-detect-merge-conflicts"),content:`
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
`},{...yt("bot-that-resolves-merge-conflicts"),content:`
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
`},{...yt("automated-stale-branch-cleanup"),content:`
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
`},{...yt("ai-weekly-engineering-reviews"),content:`
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
`}];function bs(e){return Kn.find(t=>t.slug===e)}const Kw="Abdelrahman Saed",Lo="https://bnsaed.com",Yw="https://avatars.githubusercontent.com/u/33700292?v=4&s=512",Ei={"@type":"Person","@id":`${Lo}/#person`,name:Kw,alternateName:["binSaed","Abdelrahman Saeed","عبدالرحمن سعيد"],url:`${Lo}/`,image:Yw,jobTitle:"Senior / Lead Mobile Engineer",description:"Senior / Lead Mobile Engineer with 7 years shipping production Flutter apps for iOS and Android to 5M+ users — Flutter, Dart, BLoC/Cubit, Clean Architecture, and release engineering.",email:"me@bnsaed.com",worksFor:{"@type":"Organization","@id":`${Lo}/#istoria`,name:"iStoria",url:"https://istoria.app/en"},address:{"@type":"PostalAddress",addressLocality:"Cairo",addressCountry:"EG"},knowsLanguage:["English","Arabic"],sameAs:["https://github.com/binSaed","https://www.linkedin.com/in/binsaed/","https://stackoverflow.com/users/11001850/abdelrahman-saed","https://pub.dev/publishers/bnsaed.com/packages"]},Si={Flutter:"https://www.wikidata.org/wiki/Q39072787",Dart:"https://www.wikidata.org/wiki/Q406009",PDF:"https://www.wikidata.org/wiki/Q42332","GitHub Actions":"https://www.wikidata.org/wiki/Q97185096",DevOps:"https://www.wikidata.org/wiki/Q3025536","CI/CD":"https://www.wikidata.org/wiki/Q28136854",Jira:"https://www.wikidata.org/wiki/Q1359246",Git:"https://www.wikidata.org/wiki/Q186055","Code Review":"https://www.wikidata.org/wiki/Q1342704",Automation:"https://www.wikidata.org/wiki/Q184199","AI in Development":"https://www.wikidata.org/wiki/Q11660"};function Qw(e){const t=e.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/```[\s\S]*?```/g,"").split(`
`);for(let n of t){if(n=n.trim(),!n||/^#{1,6}\s/.test(n)||/^>/.test(n)||/^!\[/.test(n)||/^-{3,}$/.test(n)||/^[-*]\s/.test(n)||/^\*[^*].*\*$/.test(n)||(n=n.replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g,"$1").trim(),!n))continue;const r=n.match(/^.*?[.!?](?=\s|$)/);return(r?r[0]:n).trim()}return""}function Xw(e){return e.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/```[\s\S]*?```/g," ").replace(/!\[[^\]]*\]\([^)]*\)/g," ").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*]\s+/gm,"").replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g,"$1").replace(/\s+/g," ").trim()}const Ti=e=>`${e}T00:00:00+00:00`;function Nv(e,t,n){const r=e.tags.filter(d=>Si[d]).map(d=>({"@type":"Thing",name:d,sameAs:Si[d]})),o=Xw(e.content),s=`${e.title} ${e.description} ${o}`.toLowerCase(),a=r.filter(d=>s.includes(d.name.toLowerCase())),i=o?o.split(/\s+/).filter(Boolean).length:0,u=Qw(e.content);return{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,image:n,inLanguage:"en",datePublished:Ti(e.date),dateModified:Ti(e.dateModified??e.date),author:Ei,publisher:Ei,...r.length?{about:r}:{},...a.length?{mentions:a}:{},...i?{wordCount:i}:{},...u?{articleBody:u}:{},mainEntityOfPage:{"@type":"WebPage","@id":t},url:t,keywords:e.tags.join(", ")}}const Wd=Jw;function Zw(e){return Wd.find(t=>t.slugs.includes(e))}function Ov(e){const t=Zw(e);if(!t)return;const n=t.slugs.indexOf(e),r=n>0?t.slugs[n-1]:void 0,o=n<t.slugs.length-1?t.slugs[n+1]:void 0;return{series:t,index:n,total:t.slugs.length,prev:r?bs(r):void 0,next:o?bs(o):void 0}}function jv(){const e=new Set(Wd.flatMap(t=>t.slugs));return Kn.filter(t=>!e.has(t.slug)).sort((t,n)=>n.date.localeCompare(t.date))}const ev=["flutter-cached-pdfview-guide","bot-that-resolves-merge-conflicts","ai-weekly-engineering-reviews","automate-pull-request-hygiene"];function Iv(e=4){const t=ev.map(o=>bs(o)).filter(o=>!!o);if(t.length>=e)return t.slice(0,e);const n=new Set(t.map(o=>o.slug)),r=[...Kn].sort((o,s)=>s.date.localeCompare(o.date)).filter(o=>!n.has(o.slug));return[...t,...r].slice(0,e)}const Ri=["home","about","projects","articles","skills","contact"],fe={owner:ln.name,alias:"binSaed",email:ln.email,url:"https://bnsaed.com",github:Ee.github,linkedin:Ee.linkedin,cv:Ee.cv};function tv(){const e=Ui();c.useEffect(()=>{if(typeof navigator>"u"||!navigator.modelContext)return;const t=navigator.modelContext,n=[],r=[{name:"navigate_to_section",title:"Scroll to a section",description:"Navigate the homepage to one of its anchor sections: home, about, projects, articles, skills, or contact.",inputSchema:{type:"object",properties:{section:{type:"string",enum:Ri,description:"The section anchor to scroll to."}},required:["section"]},execute:async o=>{const s=String(o.section??"");return Ri.includes(s)?(e(s==="home"?"/":`/#${s}`),{ok:!0,section:s}):{ok:!1,error:`Unknown section: ${s}`}}},{name:"list_articles",title:"List published articles",description:"Return the slug, title, description, date, and tags for every article published on bnsaed.com.",inputSchema:{type:"object",properties:{}},execute:async()=>Kn.map(o=>({slug:o.slug,title:o.title,description:o.description,date:o.date,readTime:o.readTime,tags:o.tags,url:`${fe.url}/articles/${o.slug}/`}))},{name:"open_article",title:"Open an article",description:"Navigate to a specific article by slug. Use list_articles first to discover valid slugs.",inputSchema:{type:"object",properties:{slug:{type:"string",description:"Article slug, e.g. 'flutter-cached-pdfview-guide'."}},required:["slug"]},execute:async o=>{const s=String(o.slug??""),a=Kn.find(i=>i.slug===s);return a?(e(`/articles/${s}/`),{ok:!0,url:`${fe.url}/articles/${s}/`,title:a.title}):{ok:!1,error:`No article with slug '${s}'`}}},{name:"get_contact_info",title:"Get contact details",description:"Return the preferred ways to contact Abdelrahman Saed (email, GitHub, LinkedIn, contact form URL).",inputSchema:{type:"object",properties:{}},execute:async()=>({name:fe.owner,alias:fe.alias,email:fe.email,mailto:`mailto:${fe.email}`,contactForm:`${fe.url}/#contact`,github:fe.github,linkedin:fe.linkedin,preferredChannel:"email"})},{name:"compose_email",title:"Open a pre-filled email",description:"Open the user's mail client with a pre-filled email to Abdelrahman Saed. Use this instead of submitting the contact form programmatically.",inputSchema:{type:"object",properties:{subject:{type:"string",description:"Email subject line."},body:{type:"string",description:"Email body, plain text."}},required:["subject"]},execute:async o=>{const s=encodeURIComponent(String(o.subject??"")),a=encodeURIComponent(String(o.body??"")),i=`mailto:${fe.email}?subject=${s}&body=${a}`;return window.location.href=i,{ok:!0,mailto:i}}},{name:"download_cv",title:"Download the CV",description:"Open the PDF CV of Abdelrahman Saed in a new tab.",inputSchema:{type:"object",properties:{}},execute:async()=>(window.open(fe.cv,"_blank","noopener,noreferrer"),{ok:!0,url:fe.cv})},{name:"get_site_metadata",title:"Get site metadata",description:"Return identity and discovery metadata for bnsaed.com: owner, URL, well-known endpoints, and current page.",inputSchema:{type:"object",properties:{}},execute:async()=>({owner:fe.owner,alias:fe.alias,url:fe.url,currentPath:window.location.pathname+window.location.hash,wellKnown:{apiCatalog:`${fe.url}/.well-known/api-catalog`,agentSkills:`${fe.url}/.well-known/agent-skills/index.json`,mcpServerCard:`${fe.url}/.well-known/mcp/server-card.json`,robots:`${fe.url}/robots.txt`,sitemap:`${fe.url}/sitemap.xml`},contentSignal:{search:"yes","ai-input":"yes","ai-train":"no"}})}];try{for(const o of r){const s=t.registerTool(o);s&&typeof s.unregister=="function"&&n.push(s)}}catch{}return()=>{for(const o of n)try{o.unregister()}catch{}}},[e])}const nv=c.lazy(()=>ue(()=>import("./ArticlePage-BykbW9-j.js"),__vite__mapDeps([18,2,7,19,20,17,21,15]))),rv=c.lazy(()=>ue(()=>import("./ArticlesPage-Jlm2m_wc.js"),__vite__mapDeps([22,2,17,21]))),ov=c.lazy(()=>ue(()=>import("./RecommendationsPage-CZL41_5z.js"),__vite__mapDeps([23,2,17,11,1,5,21]))),sv=c.lazy(()=>ue(()=>import("./ProjectsPage-ApcDKD7g.js"),__vite__mapDeps([24,2,17,4,1,5,21]))),av=c.lazy(()=>ue(()=>import("./CaseStudiesPage-CoLyAvBz.js"),__vite__mapDeps([25,2,17,6,7,1,5,21]))),iv=c.lazy(()=>ue(()=>import("./CaseStudyPage-EFKS_nkJ.js"),__vite__mapDeps([26,2,7,17,19,20,21,10,15]))),lv=c.lazy(()=>ue(()=>import("./HirePage-DzGasKSf.js"),__vite__mapDeps([27,2,17,14,15,21]))),cv=c.lazy(()=>ue(()=>import("./NotFound-B6HZ74FK.js"),__vite__mapDeps([28,2,20,21]))),dv=new Zm,uv=()=>(tv(),null),hv=()=>{const{pathname:e,hash:t}=ws();return c.useLayoutEffect(()=>{t||window.scrollTo(0,0)},[e,t]),null},fv=()=>l.jsx(Ac,{children:l.jsx(og,{client:dv,children:l.jsxs(Im,{children:[l.jsx("div",{className:"grain-overlay","aria-hidden":"true"}),l.jsx(Ww,{}),l.jsx(mf,{}),l.jsx(Vf,{}),l.jsx(su,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:l.jsxs(ay,{children:[l.jsx(uv,{}),l.jsx(hv,{}),l.jsx(c.Suspense,{fallback:l.jsx("div",{className:"min-h-screen bg-background"}),children:l.jsxs(au,{children:[l.jsx(st,{path:"/",element:l.jsx(Gw,{})}),l.jsx(st,{path:"/articles",element:l.jsx(rv,{})}),l.jsx(st,{path:"/articles/:slug",element:l.jsx(nv,{})}),l.jsx(st,{path:"/recommendations",element:l.jsx(ov,{})}),l.jsx(st,{path:"/projects",element:l.jsx(sv,{})}),l.jsx(st,{path:"/case-studies",element:l.jsx(av,{})}),l.jsx(st,{path:"/case-studies/:slug",element:l.jsx(iv,{})}),l.jsx(st,{path:"/hire",element:l.jsx(lv,{})}),l.jsx(st,{path:"*",element:l.jsx(cv,{})})]})})]})})]})})}),Vd=document.getElementById("root"),Ai=()=>zi(Vd).render(l.jsx(fv,{}));if(Vd.hasChildNodes()){performance.now()>1500&&document.documentElement.classList.add("skip-entrance");let e=!1;const t=()=>{e||(e=!0,Ai())},n=window.setTimeout(t,300);try{const r=new PerformanceObserver(()=>{r.disconnect(),window.clearTimeout(n),requestAnimationFrame(()=>requestAnimationFrame(t))});r.observe({type:"largest-contentful-paint",buffered:!0})}catch{window.clearTimeout(n),requestAnimationFrame(()=>requestAnimationFrame(t))}}else Ai();function Ci(){ue(async()=>{const{default:e}=await import("./module-ChzsIv-w.js");return{default:e}},[]).then(({default:e})=>{e.init("phc_tLT5g9tearUJgGqbyVABjDtBFcFswbb9Brps3U2B8mVc",{api_host:"https://custom.bnsaed.com",ui_host:"https://eu.posthog.com",defaults:"2026-05-30",disable_surveys:!0}),Wg(e)})}const _i=window;typeof _i.requestIdleCallback=="function"?_i.requestIdleCallback(Ci,{timeout:4e3}):window.setTimeout(Ci,2e3);export{wl as A,ct as B,Nr as C,ln as D,wh as E,Sv as F,Rs as G,zg as H,Iv as I,Tv as J,ui as K,Sr as L,Sh as M,As as N,Fy as O,Ah as P,Cs as S,Wr as X,cy as a,Ov as b,se as c,Nv as d,vl as e,rr as f,bs as g,jv as h,Kn as i,l as j,Q as k,Ee as l,By as m,ry as n,Av as o,Rv as p,yh as q,Cv as r,Wd as s,Gy as t,jw as u,sy as v,ld as w,_v as x,Mr as y,Ev as z};
