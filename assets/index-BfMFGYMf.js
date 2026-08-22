const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutSection-CA9W80xO.js","assets/SectionHeader-CuGH7QrT.js","assets/react-vendor-B2qPguBR.js","assets/arrow-up-right-BGa-lGOI.js","assets/shield-check--KWGeeaR.js","assets/ExperienceSection-CsuiXDF-.js","assets/ProjectsSection-pzuihSvq.js","assets/download-B3tylWio.js","assets/CaseStudiesSection-D4hRk1Gu.js","assets/caseStudies-CRx27G1B.js","assets/layers-Cd4pJzmL.js","assets/ArticlesSection-9yebJF6O.js","assets/flame-7PogoypH.js","assets/SpeakingSection-jJWYdzXZ.js","assets/SkillsSection-Dw_WjXG4.js","assets/smartphone-D0VtIpyO.js","assets/RecommendationsSection-5bbikBBQ.js","assets/FAQSection-B10v-Ykl.js","assets/AvailabilitySection-BN13WgLA.js","assets/EngagementCards-DnSRlhGl.js","assets/clock-q515nerB.js","assets/compass-DJ3TFnIj.js","assets/ContactSection-tFHuz0C8.js","assets/Footer-BTDYjV2B.js","assets/ArticlePage-n4ky97Jn.js","assets/MarkdownContent-CxOU6tQ7.js","assets/RouteSuggestion-qFcpzf2O.js","assets/useAdSense-CHmBNgNJ.js","assets/arrow-left-B5nhYjWs.js","assets/ArticlesPage-Uht6SCSu.js","assets/CVPage-C4Y58pLJ.js","assets/RecommendationsPage-Bycr1p41.js","assets/SpeakingPage-BuXfdhkH.js","assets/ProjectsPage-CSdAiDh_.js","assets/CaseStudiesPage-WIzuhkWi.js","assets/CaseStudyPage-DIjdPDib.js","assets/HirePage-BpXtdkT-.js","assets/FlutterHubPage-BPFNVC8c.js","assets/glossary-j2-dpKGE.js","assets/comparisons-ZGSeG4YX.js","assets/packageDirectory-BLzjV1Wz.js","assets/architectureGuides-CZN8rBFm.js","assets/GlossaryTermPage-MpuVcxjp.js","assets/AuthorByline-BrAdc1RJ.js","assets/ComparisonPage-BhlUiDSn.js","assets/PackageDirectoryPage-4LetqWIS.js","assets/ArchitectureGuidePage-DUvX_I24.js","assets/NotFound-BweznmqN.js"])))=>i.map(i=>d[i]);
var hu=Object.defineProperty;var xs=e=>{throw TypeError(e)};var fu=(e,t,n)=>t in e?hu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var it=(e,t,n)=>fu(e,typeof t!="symbol"?t+"":t,n),ya=(e,t,n)=>t.has(e)||xs("Cannot "+n);var w=(e,t,n)=>(ya(e,t,"read from private field"),n?n.call(e):t.get(e)),z=(e,t,n)=>t.has(e)?xs("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),M=(e,t,n,r)=>(ya(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),X=(e,t,n)=>(ya(e,t,"access private method"),n);var gr=(e,t,n,r)=>({set _(a){M(e,t,a,n)},get _(){return w(e,t,r)}});import{r as c,a as Jr,R as C,v as Wi,b as Vi,g as Ao,u as _o,c as Ji,L as ut,B as pu,d as mu,e as be}from"./react-vendor-B2qPguBR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const gu="modulepreload",bu=function(e){return"/"+e},ks={},oe=function(t,n,r){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(n.map(u=>{if(u=bu(u),u in ks)return;ks[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":gu,d||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((g,f)=>{p.addEventListener("load",g),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return a.then(s=>{for(const l of s||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};var Ki={exports:{}},Kr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yu=c,wu=Symbol.for("react.element"),vu=Symbol.for("react.fragment"),xu=Object.prototype.hasOwnProperty,ku=yu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Su={key:!0,ref:!0,__self:!0,__source:!0};function Yi(e,t,n){var r,a={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)xu.call(t,r)&&!Su.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:wu,type:e,key:o,ref:s,props:a,_owner:ku.current}}Kr.Fragment=vu;Kr.jsx=Yi;Kr.jsxs=Yi;Ki.exports=Kr;var i=Ki.exports,Qi,Ss=Jr;Qi=Ss.createRoot,Ss.hydrateRoot;const Eu=1,Tu=1e6;let wa=0;function Ru(){return wa=(wa+1)%Number.MAX_SAFE_INTEGER,wa.toString()}const va=new Map,Es=e=>{if(va.has(e))return;const t=setTimeout(()=>{va.delete(e),Kn({type:"REMOVE_TOAST",toastId:e})},Tu);va.set(e,t)},Au=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,Eu)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?Es(n):e.toasts.forEach(r=>{Es(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},Pr=[];let Nr={toasts:[]};function Kn(e){Nr=Au(Nr,e),Pr.forEach(t=>{t(Nr)})}function _u({...e}){const t=Ru(),n=a=>Kn({type:"UPDATE_TOAST",toast:{...a,id:t}}),r=()=>Kn({type:"DISMISS_TOAST",toastId:t});return Kn({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:a=>{a||r()}}}),{id:t,dismiss:r,update:n}}function Cu(){const[e,t]=c.useState(Nr);return c.useEffect(()=>(Pr.push(t),()=>{const n=Pr.indexOf(t);n>-1&&Pr.splice(n,1)}),[e]),{...e,toast:_u,dismiss:n=>Kn({type:"DISMISS_TOAST",toastId:n})}}function re(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function Ts(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Kt(...e){return t=>{let n=!1;const r=e.map(a=>{const o=Ts(a,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let a=0;a<r.length;a++){const o=r[a];typeof o=="function"?o():Ts(e[a],null)}}}}function pe(...e){return c.useCallback(Kt(...e),e)}function Pu(e,t){const n=c.createContext(t),r=o=>{const{children:s,...l}=o,u=c.useMemo(()=>l,Object.values(l));return i.jsx(n.Provider,{value:u,children:s})};r.displayName=e+"Provider";function a(o){const s=c.useContext(n);if(s)return s;if(t!==void 0)return t;throw new Error(`\`${o}\` must be used within \`${e}\``)}return[r,a]}function Dn(e,t=[]){let n=[];function r(o,s){const l=c.createContext(s),u=n.length;n=[...n,s];const d=p=>{var v;const{scope:g,children:f,...y}=p,m=((v=g==null?void 0:g[e])==null?void 0:v[u])||l,b=c.useMemo(()=>y,Object.values(y));return i.jsx(m.Provider,{value:b,children:f})};d.displayName=o+"Provider";function h(p,g){var m;const f=((m=g==null?void 0:g[e])==null?void 0:m[u])||l,y=c.useContext(f);if(y)return y;if(s!==void 0)return s;throw new Error(`\`${p}\` must be used within \`${o}\``)}return[d,h]}const a=()=>{const o=n.map(s=>c.createContext(s));return function(l){const u=(l==null?void 0:l[e])||o;return c.useMemo(()=>({[`__scope${e}`]:{...l,[e]:u}}),[l,u])}};return a.scopeName=e,[r,Nu(a,...t)]}function Nu(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(o){const s=r.reduce((l,{useScope:u,scopeName:d})=>{const p=u(o)[`__scope${d}`];return{...l,...p}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function Qn(e){const t=ju(e),n=c.forwardRef((r,a)=>{const{children:o,...s}=r,l=c.Children.toArray(o),u=l.find(Du);if(u){const d=u.props.children,h=l.map(p=>p===u?c.Children.count(d)>1?c.Children.only(null):c.isValidElement(d)?d.props.children:null:p);return i.jsx(t,{...s,ref:a,children:c.isValidElement(d)?c.cloneElement(d,void 0,h):null})}return i.jsx(t,{...s,ref:a,children:o})});return n.displayName=`${e}.Slot`,n}var Ou=Qn("Slot");function ju(e){const t=c.forwardRef((n,r)=>{const{children:a,...o}=n;if(c.isValidElement(a)){const s=Lu(a),l=$u(o,a.props);return a.type!==c.Fragment&&(l.ref=r?Kt(r,s):s),c.cloneElement(a,l)}return c.Children.count(a)>1?c.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Xi=Symbol("radix.slottable");function Iu(e){const t=({children:n})=>i.jsx(i.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Xi,t}function Du(e){return c.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Xi}function $u(e,t){const n={...t};for(const r in t){const a=e[r],o=t[r];/^on[A-Z]/.test(r)?a&&o?n[r]=(...l)=>{const u=o(...l);return a(...l),u}:a&&(n[r]=a):r==="style"?n[r]={...a,...o}:r==="className"&&(n[r]=[a,o].filter(Boolean).join(" "))}return{...e,...n}}function Lu(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Mu(e){const t=e+"CollectionProvider",[n,r]=Dn(t),[a,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=m=>{const{scope:b,children:v}=m,x=C.useRef(null),k=C.useRef(new Map).current;return i.jsx(a,{scope:b,itemMap:k,collectionRef:x,children:v})};s.displayName=t;const l=e+"CollectionSlot",u=Qn(l),d=C.forwardRef((m,b)=>{const{scope:v,children:x}=m,k=o(l,v),S=pe(b,k.collectionRef);return i.jsx(u,{ref:S,children:x})});d.displayName=l;const h=e+"CollectionItemSlot",p="data-radix-collection-item",g=Qn(h),f=C.forwardRef((m,b)=>{const{scope:v,children:x,...k}=m,S=C.useRef(null),E=pe(b,S),R=o(h,v);return C.useEffect(()=>(R.itemMap.set(S,{ref:S,...k}),()=>void R.itemMap.delete(S))),i.jsx(g,{[p]:"",ref:E,children:x})});f.displayName=h;function y(m){const b=o(e+"CollectionConsumer",m);return C.useCallback(()=>{const x=b.collectionRef.current;if(!x)return[];const k=Array.from(x.querySelectorAll(`[${p}]`));return Array.from(b.itemMap.values()).sort((R,A)=>k.indexOf(R.ref.current)-k.indexOf(A.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:s,Slot:d,ItemSlot:f},y,r]}var Fu=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],te=Fu.reduce((e,t)=>{const n=Qn(`Primitive.${t}`),r=c.forwardRef((a,o)=>{const{asChild:s,...l}=a,u=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),i.jsx(u,{...l,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Zi(e,t){e&&Jr.flushSync(()=>e.dispatchEvent(t))}function ge(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Hu(e,t=globalThis==null?void 0:globalThis.document){const n=ge(e);c.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Uu="DismissableLayer",Wa="dismissableLayer.update",Bu="dismissableLayer.pointerDownOutside",zu="dismissableLayer.focusOutside",Rs,el=c.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Yr=c.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:o,onInteractOutside:s,onDismiss:l,...u}=e,d=c.useContext(el),[h,p]=c.useState(null),g=(h==null?void 0:h.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,f]=c.useState({}),y=pe(t,A=>p(A)),m=Array.from(d.layers),[b]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),v=m.indexOf(b),x=h?m.indexOf(h):-1,k=d.layersWithOutsidePointerEventsDisabled.size>0,S=x>=v,E=Gu(A=>{const $=A.target,P=[...d.branches].some(j=>j.contains($));!S||P||(a==null||a(A),s==null||s(A),A.defaultPrevented||l==null||l())},g),R=Wu(A=>{const $=A.target;[...d.branches].some(j=>j.contains($))||(o==null||o(A),s==null||s(A),A.defaultPrevented||l==null||l())},g);return Hu(A=>{x===d.layers.size-1&&(r==null||r(A),!A.defaultPrevented&&l&&(A.preventDefault(),l()))},g),c.useEffect(()=>{if(h)return n&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Rs=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(h)),d.layers.add(h),As(),()=>{n&&d.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=Rs)}},[h,g,n,d]),c.useEffect(()=>()=>{h&&(d.layers.delete(h),d.layersWithOutsidePointerEventsDisabled.delete(h),As())},[h,d]),c.useEffect(()=>{const A=()=>f({});return document.addEventListener(Wa,A),()=>document.removeEventListener(Wa,A)},[]),i.jsx(te.div,{...u,ref:y,style:{pointerEvents:k?S?"auto":"none":void 0,...e.style},onFocusCapture:re(e.onFocusCapture,R.onFocusCapture),onBlurCapture:re(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:re(e.onPointerDownCapture,E.onPointerDownCapture)})});Yr.displayName=Uu;var qu="DismissableLayerBranch",tl=c.forwardRef((e,t)=>{const n=c.useContext(el),r=c.useRef(null),a=pe(t,r);return c.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),i.jsx(te.div,{...e,ref:a})});tl.displayName=qu;function Gu(e,t=globalThis==null?void 0:globalThis.document){const n=ge(e),r=c.useRef(!1),a=c.useRef(()=>{});return c.useEffect(()=>{const o=l=>{if(l.target&&!r.current){let u=function(){nl(Bu,n,d,{discrete:!0})};const d={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=u,t.addEventListener("click",a.current,{once:!0})):u()}else t.removeEventListener("click",a.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",o),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Wu(e,t=globalThis==null?void 0:globalThis.document){const n=ge(e),r=c.useRef(!1);return c.useEffect(()=>{const a=o=>{o.target&&!r.current&&nl(zu,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function As(){const e=new CustomEvent(Wa);document.dispatchEvent(e)}function nl(e,t,n,{discrete:r}){const a=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?Zi(a,o):a.dispatchEvent(o)}var Vu=Yr,Ju=tl,tt=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{},Ku="Portal",Co=c.forwardRef((e,t)=>{var l;const{container:n,...r}=e,[a,o]=c.useState(!1);tt(()=>o(!0),[]);const s=n||a&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return s?Wi.createPortal(i.jsx(te.div,{...r,ref:t}),s):null});Co.displayName=Ku;function Yu(e,t){return c.useReducer((n,r)=>t[n][r]??n,e)}var rt=e=>{const{present:t,children:n}=e,r=Qu(t),a=typeof n=="function"?n({present:r.isPresent}):c.Children.only(n),o=pe(r.ref,Xu(a));return typeof n=="function"||r.isPresent?c.cloneElement(a,{ref:o}):null};rt.displayName="Presence";function Qu(e){const[t,n]=c.useState(),r=c.useRef(null),a=c.useRef(e),o=c.useRef("none"),s=e?"mounted":"unmounted",[l,u]=Yu(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const d=br(r.current);o.current=l==="mounted"?d:"none"},[l]),tt(()=>{const d=r.current,h=a.current;if(h!==e){const g=o.current,f=br(d);e?u("MOUNT"):f==="none"||(d==null?void 0:d.display)==="none"?u("UNMOUNT"):u(h&&g!==f?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,u]),tt(()=>{if(t){let d;const h=t.ownerDocument.defaultView??window,p=f=>{const m=br(r.current).includes(f.animationName);if(f.target===t&&m&&(u("ANIMATION_END"),!a.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",d=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},g=f=>{f.target===t&&(o.current=br(r.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{h.clearTimeout(d),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:c.useCallback(d=>{r.current=d?getComputedStyle(d):null,n(d)},[])}}function br(e){return(e==null?void 0:e.animationName)||"none"}function Xu(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Zu=Vi[" useInsertionEffect ".trim().toString()]||tt;function rl({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[a,o,s]=eh({defaultProp:t,onChange:n}),l=e!==void 0,u=l?e:a;{const h=c.useRef(e!==void 0);c.useEffect(()=>{const p=h.current;p!==l&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),h.current=l},[l,r])}const d=c.useCallback(h=>{var p;if(l){const g=th(h)?h(e):h;g!==e&&((p=s.current)==null||p.call(s,g))}else o(h)},[l,e,o,s]);return[u,d]}function eh({defaultProp:e,onChange:t}){const[n,r]=c.useState(e),a=c.useRef(n),o=c.useRef(t);return Zu(()=>{o.current=t},[t]),c.useEffect(()=>{var s;a.current!==n&&((s=o.current)==null||s.call(o,n),a.current=n)},[n,a]),[n,r,o]}function th(e){return typeof e=="function"}var nh=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),rh="VisuallyHidden",Qr=c.forwardRef((e,t)=>i.jsx(te.span,{...e,ref:t,style:{...nh,...e.style}}));Qr.displayName=rh;var ah=Qr,Po="ToastProvider",[No,oh,sh]=Mu("Toast"),[al,Mv]=Dn("Toast",[sh]),[ih,Xr]=al(Po),ol=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:a="right",swipeThreshold:o=50,children:s}=e,[l,u]=c.useState(null),[d,h]=c.useState(0),p=c.useRef(!1),g=c.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Po}\`. Expected non-empty \`string\`.`),i.jsx(No.Provider,{scope:t,children:i.jsx(ih,{scope:t,label:n,duration:r,swipeDirection:a,swipeThreshold:o,toastCount:d,viewport:l,onViewportChange:u,onToastAdd:c.useCallback(()=>h(f=>f+1),[]),onToastRemove:c.useCallback(()=>h(f=>f-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:g,children:s})})};ol.displayName=Po;var sl="ToastViewport",lh=["F8"],Va="toast.viewportPause",Ja="toast.viewportResume",il=c.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=lh,label:a="Notifications ({hotkey})",...o}=e,s=Xr(sl,n),l=oh(n),u=c.useRef(null),d=c.useRef(null),h=c.useRef(null),p=c.useRef(null),g=pe(t,p,s.onViewportChange),f=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),y=s.toastCount>0;c.useEffect(()=>{const b=v=>{var k;r.length!==0&&r.every(S=>v[S]||v.code===S)&&((k=p.current)==null||k.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[r]),c.useEffect(()=>{const b=u.current,v=p.current;if(y&&b&&v){const x=()=>{if(!s.isClosePausedRef.current){const R=new CustomEvent(Va);v.dispatchEvent(R),s.isClosePausedRef.current=!0}},k=()=>{if(s.isClosePausedRef.current){const R=new CustomEvent(Ja);v.dispatchEvent(R),s.isClosePausedRef.current=!1}},S=R=>{!b.contains(R.relatedTarget)&&k()},E=()=>{b.contains(document.activeElement)||k()};return b.addEventListener("focusin",x),b.addEventListener("focusout",S),b.addEventListener("pointermove",x),b.addEventListener("pointerleave",E),window.addEventListener("blur",x),window.addEventListener("focus",k),()=>{b.removeEventListener("focusin",x),b.removeEventListener("focusout",S),b.removeEventListener("pointermove",x),b.removeEventListener("pointerleave",E),window.removeEventListener("blur",x),window.removeEventListener("focus",k)}}},[y,s.isClosePausedRef]);const m=c.useCallback(({tabbingDirection:b})=>{const x=l().map(k=>{const S=k.ref.current,E=[S,...xh(S)];return b==="forwards"?E:E.reverse()});return(b==="forwards"?x.reverse():x).flat()},[l]);return c.useEffect(()=>{const b=p.current;if(b){const v=x=>{var E,R,A;const k=x.altKey||x.ctrlKey||x.metaKey;if(x.key==="Tab"&&!k){const $=document.activeElement,P=x.shiftKey;if(x.target===b&&P){(E=d.current)==null||E.focus();return}const D=m({tabbingDirection:P?"backwards":"forwards"}),W=D.findIndex(N=>N===$);xa(D.slice(W+1))?x.preventDefault():P?(R=d.current)==null||R.focus():(A=h.current)==null||A.focus()}};return b.addEventListener("keydown",v),()=>b.removeEventListener("keydown",v)}},[l,m]),i.jsxs(Ju,{ref:u,role:"region","aria-label":a.replace("{hotkey}",f),tabIndex:-1,style:{pointerEvents:y?void 0:"none"},children:[y&&i.jsx(Ka,{ref:d,onFocusFromOutsideViewport:()=>{const b=m({tabbingDirection:"forwards"});xa(b)}}),i.jsx(No.Slot,{scope:n,children:i.jsx(te.ol,{tabIndex:-1,...o,ref:g})}),y&&i.jsx(Ka,{ref:h,onFocusFromOutsideViewport:()=>{const b=m({tabbingDirection:"backwards"});xa(b)}})]})});il.displayName=sl;var ll="ToastFocusProxy",Ka=c.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...a}=e,o=Xr(ll,n);return i.jsx(Qr,{"aria-hidden":!0,tabIndex:0,...a,ref:t,style:{position:"fixed"},onFocus:s=>{var d;const l=s.relatedTarget;!((d=o.viewport)!=null&&d.contains(l))&&r()}})});Ka.displayName=ll;var lr="Toast",ch="toast.swipeStart",dh="toast.swipeMove",uh="toast.swipeCancel",hh="toast.swipeEnd",cl=c.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:a,onOpenChange:o,...s}=e,[l,u]=rl({prop:r,defaultProp:a??!0,onChange:o,caller:lr});return i.jsx(rt,{present:n||l,children:i.jsx(mh,{open:l,...s,ref:t,onClose:()=>u(!1),onPause:ge(e.onPause),onResume:ge(e.onResume),onSwipeStart:re(e.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:re(e.onSwipeMove,d=>{const{x:h,y:p}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${h}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${p}px`)}),onSwipeCancel:re(e.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:re(e.onSwipeEnd,d=>{const{x:h,y:p}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${h}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${p}px`),u(!1)})})})});cl.displayName=lr;var[fh,ph]=al(lr,{onClose(){}}),mh=c.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:a,open:o,onClose:s,onEscapeKeyDown:l,onPause:u,onResume:d,onSwipeStart:h,onSwipeMove:p,onSwipeCancel:g,onSwipeEnd:f,...y}=e,m=Xr(lr,n),[b,v]=c.useState(null),x=pe(t,N=>v(N)),k=c.useRef(null),S=c.useRef(null),E=a||m.duration,R=c.useRef(0),A=c.useRef(E),$=c.useRef(0),{onToastAdd:P,onToastRemove:j}=m,U=ge(()=>{var V;(b==null?void 0:b.contains(document.activeElement))&&((V=m.viewport)==null||V.focus()),s()}),D=c.useCallback(N=>{!N||N===1/0||(window.clearTimeout($.current),R.current=new Date().getTime(),$.current=window.setTimeout(U,N))},[U]);c.useEffect(()=>{const N=m.viewport;if(N){const V=()=>{D(A.current),d==null||d()},q=()=>{const G=new Date().getTime()-R.current;A.current=A.current-G,window.clearTimeout($.current),u==null||u()};return N.addEventListener(Va,q),N.addEventListener(Ja,V),()=>{N.removeEventListener(Va,q),N.removeEventListener(Ja,V)}}},[m.viewport,E,u,d,D]),c.useEffect(()=>{o&&!m.isClosePausedRef.current&&D(E)},[o,E,m.isClosePausedRef,D]),c.useEffect(()=>(P(),()=>j()),[P,j]);const W=c.useMemo(()=>b?gl(b):null,[b]);return m.viewport?i.jsxs(i.Fragment,{children:[W&&i.jsx(gh,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:W}),i.jsx(fh,{scope:n,onClose:U,children:Jr.createPortal(i.jsx(No.ItemSlot,{scope:n,children:i.jsx(Vu,{asChild:!0,onEscapeKeyDown:re(l,()=>{m.isFocusedToastEscapeKeyDownRef.current||U(),m.isFocusedToastEscapeKeyDownRef.current=!1}),children:i.jsx(te.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":m.swipeDirection,...y,ref:x,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:re(e.onKeyDown,N=>{N.key==="Escape"&&(l==null||l(N.nativeEvent),N.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,U()))}),onPointerDown:re(e.onPointerDown,N=>{N.button===0&&(k.current={x:N.clientX,y:N.clientY})}),onPointerMove:re(e.onPointerMove,N=>{if(!k.current)return;const V=N.clientX-k.current.x,q=N.clientY-k.current.y,G=!!S.current,H=["left","right"].includes(m.swipeDirection),_=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,B=H?_(0,V):0,ee=H?0:_(0,q),T=N.pointerType==="touch"?10:2,O={x:B,y:ee},L={originalEvent:N,delta:O};G?(S.current=O,yr(dh,p,L,{discrete:!1})):_s(O,m.swipeDirection,T)?(S.current=O,yr(ch,h,L,{discrete:!1}),N.target.setPointerCapture(N.pointerId)):(Math.abs(V)>T||Math.abs(q)>T)&&(k.current=null)}),onPointerUp:re(e.onPointerUp,N=>{const V=S.current,q=N.target;if(q.hasPointerCapture(N.pointerId)&&q.releasePointerCapture(N.pointerId),S.current=null,k.current=null,V){const G=N.currentTarget,H={originalEvent:N,delta:V};_s(V,m.swipeDirection,m.swipeThreshold)?yr(hh,f,H,{discrete:!0}):yr(uh,g,H,{discrete:!0}),G.addEventListener("click",_=>_.preventDefault(),{once:!0})}})})})}),m.viewport)})]}):null}),gh=e=>{const{__scopeToast:t,children:n,...r}=e,a=Xr(lr,t),[o,s]=c.useState(!1),[l,u]=c.useState(!1);return wh(()=>s(!0)),c.useEffect(()=>{const d=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(d)},[]),l?null:i.jsx(Co,{asChild:!0,children:i.jsx(Qr,{...r,children:o&&i.jsxs(i.Fragment,{children:[a.label," ",n]})})})},bh="ToastTitle",dl=c.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return i.jsx(te.div,{...r,ref:t})});dl.displayName=bh;var yh="ToastDescription",ul=c.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return i.jsx(te.div,{...r,ref:t})});ul.displayName=yh;var hl="ToastAction",fl=c.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?i.jsx(ml,{altText:n,asChild:!0,children:i.jsx(Oo,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${hl}\`. Expected non-empty \`string\`.`),null)});fl.displayName=hl;var pl="ToastClose",Oo=c.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,a=ph(pl,n);return i.jsx(ml,{asChild:!0,children:i.jsx(te.button,{type:"button",...r,ref:t,onClick:re(e.onClick,a.onClose)})})});Oo.displayName=pl;var ml=c.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...a}=e;return i.jsx(te.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...a,ref:t})});function gl(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),vh(r)){const a=r.ariaHidden||r.hidden||r.style.display==="none",o=r.dataset.radixToastAnnounceExclude==="";if(!a)if(o){const s=r.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...gl(r))}}),t}function yr(e,t,n,{discrete:r}){const a=n.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?Zi(a,o):a.dispatchEvent(o)}var _s=(e,t,n=0)=>{const r=Math.abs(e.x),a=Math.abs(e.y),o=r>a;return t==="left"||t==="right"?o&&r>n:!o&&a>n};function wh(e=()=>{}){const t=ge(e);tt(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function vh(e){return e.nodeType===e.ELEMENT_NODE}function xh(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function xa(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var kh=ol,bl=il,yl=cl,wl=dl,vl=ul,xl=fl,kl=Oo;function Sl(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Sl(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function El(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Sl(e))&&(r&&(r+=" "),r+=t);return r}const Cs=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Ps=El,jo=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Ps(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:o}=t,s=Object.keys(a).map(d=>{const h=n==null?void 0:n[d],p=o==null?void 0:o[d];if(h===null)return null;const g=Cs(h)||Cs(p);return a[d][g]}),l=n&&Object.entries(n).reduce((d,h)=>{let[p,g]=h;return g===void 0||(d[p]=g),d},{}),u=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((d,h)=>{let{class:p,className:g,...f}=h;return Object.entries(f).every(y=>{let[m,b]=y;return Array.isArray(b)?b.includes({...o,...l}[m]):{...o,...l}[m]===b})?[...d,p,g]:d},[]);return Ps(e,s,u,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Tl=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Eh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:o,iconNode:s,...l},u)=>c.createElement("svg",{ref:u,...Eh,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Tl("lucide",a),...l},[...s.map(([d,h])=>c.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=(e,t)=>{const n=c.forwardRef(({className:r,...a},o)=>c.createElement(Th,{ref:o,iconNode:t,className:Tl(`lucide-${Sh(e)}`,r),...a}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=se("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=se("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=se("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=se("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=se("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=se("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=se("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=se("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=se("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=se("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=se("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=se("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=se("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=se("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=se("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=se("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=se("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=se("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=se("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=se("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=se("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=se("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=se("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=se("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=se("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=se("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=se("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=se("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=se("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=se("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Mo="-",Uh=e=>{const t=zh(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const l=s.split(Mo);return l[0]===""&&l.length!==1&&l.shift(),Pl(l,t)||Bh(s)},getConflictingClassGroupIds:(s,l)=>{const u=n[s]||[];return l&&r[s]?[...u,...r[s]]:u}}},Pl=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),a=r?Pl(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const o=e.join(Mo);return(s=t.validators.find(({validator:l})=>l(o)))==null?void 0:s.classGroupId},Ns=/^\[(.+)\]$/,Bh=e=>{if(Ns.test(e)){const t=Ns.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},zh=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Gh(Object.entries(e.classGroups),n).forEach(([o,s])=>{Qa(s,r,o,t)}),r},Qa=(e,t,n,r)=>{e.forEach(a=>{if(typeof a=="string"){const o=a===""?t:Os(t,a);o.classGroupId=n;return}if(typeof a=="function"){if(qh(a)){Qa(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([o,s])=>{Qa(s,Os(t,o),n,r)})})},Os=(e,t)=>{let n=e;return t.split(Mo).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},qh=e=>e.isThemeGetter,Gh=(e,t)=>t?e.map(([n,r])=>{const a=r.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,l])=>[t+s,l])):o);return[n,a]}):e,Wh=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const a=(o,s)=>{n.set(o,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return a(o,s),s},set(o,s){n.has(o)?n.set(o,s):a(o,s)}}},Nl="!",Vh=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,a=t[0],o=t.length,s=l=>{const u=[];let d=0,h=0,p;for(let b=0;b<l.length;b++){let v=l[b];if(d===0){if(v===a&&(r||l.slice(b,b+o)===t)){u.push(l.slice(h,b)),h=b+o;continue}if(v==="/"){p=b;continue}}v==="["?d++:v==="]"&&d--}const g=u.length===0?l:l.substring(h),f=g.startsWith(Nl),y=f?g.substring(1):g,m=p&&p>h?p-h:void 0;return{modifiers:u,hasImportantModifier:f,baseClassName:y,maybePostfixModifierPosition:m}};return n?l=>n({className:l,parseClassName:s}):s},Jh=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},Kh=e=>({cache:Wh(e.cacheSize),parseClassName:Vh(e),...Uh(e)}),Yh=/\s+/,Qh=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a}=t,o=[],s=e.trim().split(Yh);let l="";for(let u=s.length-1;u>=0;u-=1){const d=s[u],{modifiers:h,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:f}=n(d);let y=!!f,m=r(y?g.substring(0,f):g);if(!m){if(!y){l=d+(l.length>0?" "+l:l);continue}if(m=r(g),!m){l=d+(l.length>0?" "+l:l);continue}y=!1}const b=Jh(h).join(":"),v=p?b+Nl:b,x=v+m;if(o.includes(x))continue;o.push(x);const k=a(m,y);for(let S=0;S<k.length;++S){const E=k[S];o.push(v+E)}l=d+(l.length>0?" "+l:l)}return l};function Xh(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Ol(t))&&(r&&(r+=" "),r+=n);return r}const Ol=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Ol(e[r]))&&(n&&(n+=" "),n+=t);return n};function Zh(e,...t){let n,r,a,o=s;function s(u){const d=t.reduce((h,p)=>p(h),e());return n=Kh(d),r=n.cache.get,a=n.cache.set,o=l,l(u)}function l(u){const d=r(u);if(d)return d;const h=Qh(u,n);return a(u,h),h}return function(){return o(Xh.apply(null,arguments))}}const de=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},jl=/^\[(?:([a-z-]+):)?(.+)\]$/i,ef=/^\d+\/\d+$/,tf=new Set(["px","full","screen"]),nf=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,rf=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,af=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,of=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,sf=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,lt=e=>hn(e)||tf.has(e)||ef.test(e),wt=e=>$n(e,"length",mf),hn=e=>!!e&&!Number.isNaN(Number(e)),Ea=e=>$n(e,"number",hn),Bn=e=>!!e&&Number.isInteger(Number(e)),lf=e=>e.endsWith("%")&&hn(e.slice(0,-1)),Y=e=>jl.test(e),vt=e=>nf.test(e),cf=new Set(["length","size","percentage"]),df=e=>$n(e,cf,Il),uf=e=>$n(e,"position",Il),hf=new Set(["image","url"]),ff=e=>$n(e,hf,bf),pf=e=>$n(e,"",gf),zn=()=>!0,$n=(e,t,n)=>{const r=jl.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},mf=e=>rf.test(e)&&!af.test(e),Il=()=>!1,gf=e=>of.test(e),bf=e=>sf.test(e),yf=()=>{const e=de("colors"),t=de("spacing"),n=de("blur"),r=de("brightness"),a=de("borderColor"),o=de("borderRadius"),s=de("borderSpacing"),l=de("borderWidth"),u=de("contrast"),d=de("grayscale"),h=de("hueRotate"),p=de("invert"),g=de("gap"),f=de("gradientColorStops"),y=de("gradientColorStopPositions"),m=de("inset"),b=de("margin"),v=de("opacity"),x=de("padding"),k=de("saturate"),S=de("scale"),E=de("sepia"),R=de("skew"),A=de("space"),$=de("translate"),P=()=>["auto","contain","none"],j=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto",Y,t],D=()=>[Y,t],W=()=>["",lt,wt],N=()=>["auto",hn,Y],V=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],q=()=>["solid","dashed","dotted","double","none"],G=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],_=()=>["","0",Y],B=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ee=()=>[hn,Y];return{cacheSize:500,separator:":",theme:{colors:[zn],spacing:[lt,wt],blur:["none","",vt,Y],brightness:ee(),borderColor:[e],borderRadius:["none","","full",vt,Y],borderSpacing:D(),borderWidth:W(),contrast:ee(),grayscale:_(),hueRotate:ee(),invert:_(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[lf,wt],inset:U(),margin:U(),opacity:ee(),padding:D(),saturate:ee(),scale:ee(),sepia:_(),skew:ee(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",Y]}],container:["container"],columns:[{columns:[vt]}],"break-after":[{"break-after":B()}],"break-before":[{"break-before":B()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...V(),Y]}],overflow:[{overflow:j()}],"overflow-x":[{"overflow-x":j()}],"overflow-y":[{"overflow-y":j()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Bn,Y]}],basis:[{basis:U()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Y]}],grow:[{grow:_()}],shrink:[{shrink:_()}],order:[{order:["first","last","none",Bn,Y]}],"grid-cols":[{"grid-cols":[zn]}],"col-start-end":[{col:["auto",{span:["full",Bn,Y]},Y]}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":[zn]}],"row-start-end":[{row:["auto",{span:[Bn,Y]},Y]}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Y]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Y]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Y,t]}],"min-w":[{"min-w":[Y,t,"min","max","fit"]}],"max-w":[{"max-w":[Y,t,"none","full","min","max","fit","prose",{screen:[vt]},vt]}],h:[{h:[Y,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Y,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Y,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Y,t,"auto","min","max","fit"]}],"font-size":[{text:["base",vt,wt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ea]}],"font-family":[{font:[zn]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Y]}],"line-clamp":[{"line-clamp":["none",hn,Ea]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",lt,Y]}],"list-image":[{"list-image":["none",Y]}],"list-style-type":[{list:["none","disc","decimal",Y]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",lt,wt]}],"underline-offset":[{"underline-offset":["auto",lt,Y]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Y]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Y]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...V(),uf]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",df]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ff]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...q(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:q()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...q()]}],"outline-offset":[{"outline-offset":[lt,Y]}],"outline-w":[{outline:[lt,wt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[lt,wt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",vt,pf]}],"shadow-color":[{shadow:[zn]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...G(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":G()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",vt,Y]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[p]}],saturate:[{saturate:[k]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[k]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Y]}],duration:[{duration:ee()}],ease:[{ease:["linear","in","out","in-out",Y]}],delay:[{delay:ee()}],animate:[{animate:["none","spin","ping","pulse","bounce",Y]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[Bn,Y]}],"translate-x":[{"translate-x":[$]}],"translate-y":[{"translate-y":[$]}],"skew-x":[{"skew-x":[R]}],"skew-y":[{"skew-y":[R]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Y]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Y]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Y]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[lt,wt,Ea]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},wf=Zh(yf);function Q(...e){return wf(El(e))}function Fv(e){return e.toLowerCase().replace(/[`*_~]/g,"").replace(/[^\w\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}const vf=kh,Dl=c.forwardRef(({className:e,...t},n)=>i.jsx(bl,{ref:n,className:Q("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Dl.displayName=bl.displayName;const xf=jo("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),$l=c.forwardRef(({className:e,variant:t,...n},r)=>i.jsx(yl,{ref:r,className:Q(xf({variant:t}),e),...n}));$l.displayName=yl.displayName;const kf=c.forwardRef(({className:e,...t},n)=>i.jsx(xl,{ref:n,className:Q("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));kf.displayName=xl.displayName;const Ll=c.forwardRef(({className:e,...t},n)=>i.jsx(kl,{ref:n,className:Q("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:i.jsx(ea,{className:"h-4 w-4"})}));Ll.displayName=kl.displayName;const Ml=c.forwardRef(({className:e,...t},n)=>i.jsx(wl,{ref:n,className:Q("text-sm font-semibold",e),...t}));Ml.displayName=wl.displayName;const Fl=c.forwardRef(({className:e,...t},n)=>i.jsx(vl,{ref:n,className:Q("text-sm opacity-90",e),...t}));Fl.displayName=vl.displayName;function Sf(){const{toasts:e}=Cu();return i.jsxs(vf,{children:[e.map(function({id:t,title:n,description:r,action:a,...o}){return i.jsxs($l,{...o,children:[i.jsxs("div",{className:"grid gap-1",children:[n&&i.jsx(Ml,{children:n}),r&&i.jsx(Fl,{children:r})]}),a,i.jsx(Ll,{})]},t)}),i.jsx(Dl,{})]})}var js=["light","dark"],Ef="(prefers-color-scheme: dark)",Tf=c.createContext(void 0),Rf={setTheme:e=>{},themes:[]},Af=()=>{var e;return(e=c.useContext(Tf))!=null?e:Rf};c.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:a,defaultTheme:o,value:s,attrs:l,nonce:u})=>{let d=o==="system",h=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${l.map(y=>`'${y}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=a?js.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(y,m=!1,b=!0)=>{let v=s?s[y]:y,x=m?y+"|| ''":`'${v}'`,k="";return a&&b&&!m&&js.includes(y)&&(k+=`d.style.colorScheme = '${y}';`),n==="class"?m||v?k+=`c.add(${x})`:k+="null":v&&(k+=`d[s](n,${x})`),k},f=e?`!function(){${h}${g(e)}}()`:r?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${Ef}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${g(s?"x[e]":"e",!0)}}${d?"":"else{"+g(o,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${g(s?"x[e]":"e",!0)}}else{${g(o,!1,!1)};}${p}}catch(t){}}();`;return c.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:f}})});var _f=e=>{switch(e){case"success":return Nf;case"info":return jf;case"warning":return Of;case"error":return If;default:return null}},Cf=Array(12).fill(0),Pf=({visible:e,className:t})=>C.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},C.createElement("div",{className:"sonner-spinner"},Cf.map((n,r)=>C.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),Nf=C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},C.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Of=C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},C.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),jf=C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},C.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),If=C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},C.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Df=C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},C.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),C.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),$f=()=>{let[e,t]=C.useState(document.hidden);return C.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Xa=1,Lf=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,a=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Xa++,o=this.toasts.find(l=>l.id===a),s=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(a)&&this.dismissedToasts.delete(a),o?this.toasts=this.toasts.map(l=>l.id===a?(this.publish({...l,...e,id:a,title:n}),{...l,...e,id:a,dismissible:s,title:n}):l):this.addToast({title:n,...r,dismissible:s,id:a}),a},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),a=n!==void 0,o,s=r.then(async u=>{if(o=["resolve",u],C.isValidElement(u))a=!1,this.create({id:n,type:"default",message:u});else if(Ff(u)&&!u.ok){a=!1;let d=typeof t.error=="function"?await t.error(`HTTP error! status: ${u.status}`):t.error,h=typeof t.description=="function"?await t.description(`HTTP error! status: ${u.status}`):t.description;this.create({id:n,type:"error",message:d,description:h})}else if(t.success!==void 0){a=!1;let d=typeof t.success=="function"?await t.success(u):t.success,h=typeof t.description=="function"?await t.description(u):t.description;this.create({id:n,type:"success",message:d,description:h})}}).catch(async u=>{if(o=["reject",u],t.error!==void 0){a=!1;let d=typeof t.error=="function"?await t.error(u):t.error,h=typeof t.description=="function"?await t.description(u):t.description;this.create({id:n,type:"error",message:d,description:h})}}).finally(()=>{var u;a&&(this.dismiss(n),n=void 0),(u=t.finally)==null||u.call(t)}),l=()=>new Promise((u,d)=>s.then(()=>o[0]==="reject"?d(o[1]):u(o[1])).catch(d));return typeof n!="string"&&typeof n!="number"?{unwrap:l}:Object.assign(n,{unwrap:l})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Xa++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Te=new Lf,Mf=(e,t)=>{let n=(t==null?void 0:t.id)||Xa++;return Te.addToast({title:e,...t,id:n}),n},Ff=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",Hf=Mf,Uf=()=>Te.toasts,Bf=()=>Te.getActiveToasts(),Or=Object.assign(Hf,{success:Te.success,info:Te.info,warning:Te.warning,error:Te.error,custom:Te.custom,message:Te.message,promise:Te.promise,dismiss:Te.dismiss,loading:Te.loading},{getHistory:Uf,getToasts:Bf});function zf(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}zf(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function wr(e){return e.label!==void 0}var qf=3,Gf="32px",Wf="16px",Is=4e3,Vf=356,Jf=14,Kf=20,Yf=200;function Fe(...e){return e.filter(Boolean).join(" ")}function Qf(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var Xf=e=>{var t,n,r,a,o,s,l,u,d,h,p;let{invert:g,toast:f,unstyled:y,interacting:m,setHeights:b,visibleToasts:v,heights:x,index:k,toasts:S,expanded:E,removeToast:R,defaultRichColors:A,closeButton:$,style:P,cancelButtonStyle:j,actionButtonStyle:U,className:D="",descriptionClassName:W="",duration:N,position:V,gap:q,loadingIcon:G,expandByDefault:H,classNames:_,icons:B,closeButtonAriaLabel:ee="Close toast",pauseWhenPageIsHidden:T}=e,[O,L]=C.useState(null),[I,J]=C.useState(null),[F,ce]=C.useState(!1),[ne,ve]=C.useState(!1),[Ve,mt]=C.useState(!1),[_e,Dt]=C.useState(!1),[pa,pr]=C.useState(!1),[ma,Hn]=C.useState(0),[tn,ms]=C.useState(0),Un=C.useRef(f.duration||N||Is),gs=C.useRef(null),$t=C.useRef(null),ru=k===0,au=k+1<=v,Ne=f.type,nn=f.dismissible!==!1,ou=f.className||"",su=f.descriptionClassName||"",mr=C.useMemo(()=>x.findIndex(K=>K.toastId===f.id)||0,[x,f.id]),iu=C.useMemo(()=>{var K;return(K=f.closeButton)!=null?K:$},[f.closeButton,$]),bs=C.useMemo(()=>f.duration||N||Is,[f.duration,N]),ga=C.useRef(0),rn=C.useRef(0),ys=C.useRef(0),an=C.useRef(null),[lu,cu]=V.split("-"),ws=C.useMemo(()=>x.reduce((K,le,ue)=>ue>=mr?K:K+le.height,0),[x,mr]),vs=$f(),du=f.invert||g,ba=Ne==="loading";rn.current=C.useMemo(()=>mr*q+ws,[mr,ws]),C.useEffect(()=>{Un.current=bs},[bs]),C.useEffect(()=>{ce(!0)},[]),C.useEffect(()=>{let K=$t.current;if(K){let le=K.getBoundingClientRect().height;return ms(le),b(ue=>[{toastId:f.id,height:le,position:f.position},...ue]),()=>b(ue=>ue.filter($e=>$e.toastId!==f.id))}},[b,f.id]),C.useLayoutEffect(()=>{if(!F)return;let K=$t.current,le=K.style.height;K.style.height="auto";let ue=K.getBoundingClientRect().height;K.style.height=le,ms(ue),b($e=>$e.find(Le=>Le.toastId===f.id)?$e.map(Le=>Le.toastId===f.id?{...Le,height:ue}:Le):[{toastId:f.id,height:ue,position:f.position},...$e])},[F,f.title,f.description,b,f.id]);let gt=C.useCallback(()=>{ve(!0),Hn(rn.current),b(K=>K.filter(le=>le.toastId!==f.id)),setTimeout(()=>{R(f)},Yf)},[f,R,b,rn]);C.useEffect(()=>{if(f.promise&&Ne==="loading"||f.duration===1/0||f.type==="loading")return;let K;return E||m||T&&vs?(()=>{if(ys.current<ga.current){let le=new Date().getTime()-ga.current;Un.current=Un.current-le}ys.current=new Date().getTime()})():Un.current!==1/0&&(ga.current=new Date().getTime(),K=setTimeout(()=>{var le;(le=f.onAutoClose)==null||le.call(f,f),gt()},Un.current)),()=>clearTimeout(K)},[E,m,f,Ne,T,vs,gt]),C.useEffect(()=>{f.delete&&gt()},[gt,f.delete]);function uu(){var K,le,ue;return B!=null&&B.loading?C.createElement("div",{className:Fe(_==null?void 0:_.loader,(K=f==null?void 0:f.classNames)==null?void 0:K.loader,"sonner-loader"),"data-visible":Ne==="loading"},B.loading):G?C.createElement("div",{className:Fe(_==null?void 0:_.loader,(le=f==null?void 0:f.classNames)==null?void 0:le.loader,"sonner-loader"),"data-visible":Ne==="loading"},G):C.createElement(Pf,{className:Fe(_==null?void 0:_.loader,(ue=f==null?void 0:f.classNames)==null?void 0:ue.loader),visible:Ne==="loading"})}return C.createElement("li",{tabIndex:0,ref:$t,className:Fe(D,ou,_==null?void 0:_.toast,(t=f==null?void 0:f.classNames)==null?void 0:t.toast,_==null?void 0:_.default,_==null?void 0:_[Ne],(n=f==null?void 0:f.classNames)==null?void 0:n[Ne]),"data-sonner-toast":"","data-rich-colors":(r=f.richColors)!=null?r:A,"data-styled":!(f.jsx||f.unstyled||y),"data-mounted":F,"data-promise":!!f.promise,"data-swiped":pa,"data-removed":ne,"data-visible":au,"data-y-position":lu,"data-x-position":cu,"data-index":k,"data-front":ru,"data-swiping":Ve,"data-dismissible":nn,"data-type":Ne,"data-invert":du,"data-swipe-out":_e,"data-swipe-direction":I,"data-expanded":!!(E||H&&F),style:{"--index":k,"--toasts-before":k,"--z-index":S.length-k,"--offset":`${ne?ma:rn.current}px`,"--initial-height":H?"auto":`${tn}px`,...P,...f.style},onDragEnd:()=>{mt(!1),L(null),an.current=null},onPointerDown:K=>{ba||!nn||(gs.current=new Date,Hn(rn.current),K.target.setPointerCapture(K.pointerId),K.target.tagName!=="BUTTON"&&(mt(!0),an.current={x:K.clientX,y:K.clientY}))},onPointerUp:()=>{var K,le,ue,$e;if(_e||!nn)return;an.current=null;let Le=Number(((K=$t.current)==null?void 0:K.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),bt=Number(((le=$t.current)==null?void 0:le.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Lt=new Date().getTime()-((ue=gs.current)==null?void 0:ue.getTime()),Me=O==="x"?Le:bt,yt=Math.abs(Me)/Lt;if(Math.abs(Me)>=Kf||yt>.11){Hn(rn.current),($e=f.onDismiss)==null||$e.call(f,f),J(O==="x"?Le>0?"right":"left":bt>0?"down":"up"),gt(),Dt(!0),pr(!1);return}mt(!1),L(null)},onPointerMove:K=>{var le,ue,$e,Le;if(!an.current||!nn||((le=window.getSelection())==null?void 0:le.toString().length)>0)return;let bt=K.clientY-an.current.y,Lt=K.clientX-an.current.x,Me=(ue=e.swipeDirections)!=null?ue:Qf(V);!O&&(Math.abs(Lt)>1||Math.abs(bt)>1)&&L(Math.abs(Lt)>Math.abs(bt)?"x":"y");let yt={x:0,y:0};O==="y"?(Me.includes("top")||Me.includes("bottom"))&&(Me.includes("top")&&bt<0||Me.includes("bottom")&&bt>0)&&(yt.y=bt):O==="x"&&(Me.includes("left")||Me.includes("right"))&&(Me.includes("left")&&Lt<0||Me.includes("right")&&Lt>0)&&(yt.x=Lt),(Math.abs(yt.x)>0||Math.abs(yt.y)>0)&&pr(!0),($e=$t.current)==null||$e.style.setProperty("--swipe-amount-x",`${yt.x}px`),(Le=$t.current)==null||Le.style.setProperty("--swipe-amount-y",`${yt.y}px`)}},iu&&!f.jsx?C.createElement("button",{"aria-label":ee,"data-disabled":ba,"data-close-button":!0,onClick:ba||!nn?()=>{}:()=>{var K;gt(),(K=f.onDismiss)==null||K.call(f,f)},className:Fe(_==null?void 0:_.closeButton,(a=f==null?void 0:f.classNames)==null?void 0:a.closeButton)},(o=B==null?void 0:B.close)!=null?o:Df):null,f.jsx||c.isValidElement(f.title)?f.jsx?f.jsx:typeof f.title=="function"?f.title():f.title:C.createElement(C.Fragment,null,Ne||f.icon||f.promise?C.createElement("div",{"data-icon":"",className:Fe(_==null?void 0:_.icon,(s=f==null?void 0:f.classNames)==null?void 0:s.icon)},f.promise||f.type==="loading"&&!f.icon?f.icon||uu():null,f.type!=="loading"?f.icon||(B==null?void 0:B[Ne])||_f(Ne):null):null,C.createElement("div",{"data-content":"",className:Fe(_==null?void 0:_.content,(l=f==null?void 0:f.classNames)==null?void 0:l.content)},C.createElement("div",{"data-title":"",className:Fe(_==null?void 0:_.title,(u=f==null?void 0:f.classNames)==null?void 0:u.title)},typeof f.title=="function"?f.title():f.title),f.description?C.createElement("div",{"data-description":"",className:Fe(W,su,_==null?void 0:_.description,(d=f==null?void 0:f.classNames)==null?void 0:d.description)},typeof f.description=="function"?f.description():f.description):null),c.isValidElement(f.cancel)?f.cancel:f.cancel&&wr(f.cancel)?C.createElement("button",{"data-button":!0,"data-cancel":!0,style:f.cancelButtonStyle||j,onClick:K=>{var le,ue;wr(f.cancel)&&nn&&((ue=(le=f.cancel).onClick)==null||ue.call(le,K),gt())},className:Fe(_==null?void 0:_.cancelButton,(h=f==null?void 0:f.classNames)==null?void 0:h.cancelButton)},f.cancel.label):null,c.isValidElement(f.action)?f.action:f.action&&wr(f.action)?C.createElement("button",{"data-button":!0,"data-action":!0,style:f.actionButtonStyle||U,onClick:K=>{var le,ue;wr(f.action)&&((ue=(le=f.action).onClick)==null||ue.call(le,K),!K.defaultPrevented&&gt())},className:Fe(_==null?void 0:_.actionButton,(p=f==null?void 0:f.classNames)==null?void 0:p.actionButton)},f.action.label):null))};function Ds(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Zf(e,t){let n={};return[e,t].forEach((r,a)=>{let o=a===1,s=o?"--mobile-offset":"--offset",l=o?Wf:Gf;function u(d){["top","right","bottom","left"].forEach(h=>{n[`${s}-${h}`]=typeof d=="number"?`${d}px`:d})}typeof r=="number"||typeof r=="string"?u(r):typeof r=="object"?["top","right","bottom","left"].forEach(d=>{r[d]===void 0?n[`${s}-${d}`]=l:n[`${s}-${d}`]=typeof r[d]=="number"?`${r[d]}px`:r[d]}):u(l)}),n}var ep=c.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:a=["altKey","KeyT"],expand:o,closeButton:s,className:l,offset:u,mobileOffset:d,theme:h="light",richColors:p,duration:g,style:f,visibleToasts:y=qf,toastOptions:m,dir:b=Ds(),gap:v=Jf,loadingIcon:x,icons:k,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:E}=e,[R,A]=C.useState([]),$=C.useMemo(()=>Array.from(new Set([r].concat(R.filter(T=>T.position).map(T=>T.position)))),[R,r]),[P,j]=C.useState([]),[U,D]=C.useState(!1),[W,N]=C.useState(!1),[V,q]=C.useState(h!=="system"?h:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),G=C.useRef(null),H=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),_=C.useRef(null),B=C.useRef(!1),ee=C.useCallback(T=>{A(O=>{var L;return(L=O.find(I=>I.id===T.id))!=null&&L.delete||Te.dismiss(T.id),O.filter(({id:I})=>I!==T.id)})},[]);return C.useEffect(()=>Te.subscribe(T=>{if(T.dismiss){A(O=>O.map(L=>L.id===T.id?{...L,delete:!0}:L));return}setTimeout(()=>{Wi.flushSync(()=>{A(O=>{let L=O.findIndex(I=>I.id===T.id);return L!==-1?[...O.slice(0,L),{...O[L],...T},...O.slice(L+1)]:[T,...O]})})})}),[]),C.useEffect(()=>{if(h!=="system"){q(h);return}if(h==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?q("dark"):q("light")),typeof window>"u")return;let T=window.matchMedia("(prefers-color-scheme: dark)");try{T.addEventListener("change",({matches:O})=>{q(O?"dark":"light")})}catch{T.addListener(({matches:L})=>{try{q(L?"dark":"light")}catch(I){console.error(I)}})}},[h]),C.useEffect(()=>{R.length<=1&&D(!1)},[R]),C.useEffect(()=>{let T=O=>{var L,I;a.every(J=>O[J]||O.code===J)&&(D(!0),(L=G.current)==null||L.focus()),O.code==="Escape"&&(document.activeElement===G.current||(I=G.current)!=null&&I.contains(document.activeElement))&&D(!1)};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[a]),C.useEffect(()=>{if(G.current)return()=>{_.current&&(_.current.focus({preventScroll:!0}),_.current=null,B.current=!1)}},[G.current]),C.createElement("section",{ref:t,"aria-label":`${S} ${H}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},$.map((T,O)=>{var L;let[I,J]=T.split("-");return R.length?C.createElement("ol",{key:T,dir:b==="auto"?Ds():b,tabIndex:-1,ref:G,className:l,"data-sonner-toaster":!0,"data-theme":V,"data-y-position":I,"data-lifted":U&&R.length>1&&!o,"data-x-position":J,style:{"--front-toast-height":`${((L=P[0])==null?void 0:L.height)||0}px`,"--width":`${Vf}px`,"--gap":`${v}px`,...f,...Zf(u,d)},onBlur:F=>{B.current&&!F.currentTarget.contains(F.relatedTarget)&&(B.current=!1,_.current&&(_.current.focus({preventScroll:!0}),_.current=null))},onFocus:F=>{F.target instanceof HTMLElement&&F.target.dataset.dismissible==="false"||B.current||(B.current=!0,_.current=F.relatedTarget)},onMouseEnter:()=>D(!0),onMouseMove:()=>D(!0),onMouseLeave:()=>{W||D(!1)},onDragEnd:()=>D(!1),onPointerDown:F=>{F.target instanceof HTMLElement&&F.target.dataset.dismissible==="false"||N(!0)},onPointerUp:()=>N(!1)},R.filter(F=>!F.position&&O===0||F.position===T).map((F,ce)=>{var ne,ve;return C.createElement(Xf,{key:F.id,icons:k,index:ce,toast:F,defaultRichColors:p,duration:(ne=m==null?void 0:m.duration)!=null?ne:g,className:m==null?void 0:m.className,descriptionClassName:m==null?void 0:m.descriptionClassName,invert:n,visibleToasts:y,closeButton:(ve=m==null?void 0:m.closeButton)!=null?ve:s,interacting:W,position:T,style:m==null?void 0:m.style,unstyled:m==null?void 0:m.unstyled,classNames:m==null?void 0:m.classNames,cancelButtonStyle:m==null?void 0:m.cancelButtonStyle,actionButtonStyle:m==null?void 0:m.actionButtonStyle,removeToast:ee,toasts:R.filter(Ve=>Ve.position==F.position),heights:P.filter(Ve=>Ve.position==F.position),setHeights:j,expandByDefault:o,gap:v,loadingIcon:x,expanded:U,pauseWhenPageIsHidden:E,swipeDirections:e.swipeDirections})})):null}))});const tp=({...e})=>{const{theme:t="system"}=Af();return i.jsx(ep,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var np=Vi[" useId ".trim().toString()]||(()=>{}),rp=0;function ht(e){const[t,n]=c.useState(np());return tt(()=>{n(r=>r??String(rp++))},[e]),t?`radix-${t}`:""}const ap=["top","right","bottom","left"],Ot=Math.min,Ce=Math.max,Fr=Math.round,vr=Math.floor,et=e=>({x:e,y:e}),op={left:"right",right:"left",bottom:"top",top:"bottom"},sp={start:"end",end:"start"};function Za(e,t,n){return Ce(e,Ot(t,n))}function ft(e,t){return typeof e=="function"?e(t):e}function pt(e){return e.split("-")[0]}function Ln(e){return e.split("-")[1]}function Fo(e){return e==="x"?"y":"x"}function Ho(e){return e==="y"?"height":"width"}const ip=new Set(["top","bottom"]);function Xe(e){return ip.has(pt(e))?"y":"x"}function Uo(e){return Fo(Xe(e))}function lp(e,t,n){n===void 0&&(n=!1);const r=Ln(e),a=Uo(e),o=Ho(a);let s=a==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Hr(s)),[s,Hr(s)]}function cp(e){const t=Hr(e);return[eo(e),t,eo(t)]}function eo(e){return e.replace(/start|end/g,t=>sp[t])}const $s=["left","right"],Ls=["right","left"],dp=["top","bottom"],up=["bottom","top"];function hp(e,t,n){switch(e){case"top":case"bottom":return n?t?Ls:$s:t?$s:Ls;case"left":case"right":return t?dp:up;default:return[]}}function fp(e,t,n,r){const a=Ln(e);let o=hp(pt(e),n==="start",r);return a&&(o=o.map(s=>s+"-"+a),t&&(o=o.concat(o.map(eo)))),o}function Hr(e){return e.replace(/left|right|bottom|top/g,t=>op[t])}function pp(e){return{top:0,right:0,bottom:0,left:0,...e}}function Hl(e){return typeof e!="number"?pp(e):{top:e,right:e,bottom:e,left:e}}function Ur(e){const{x:t,y:n,width:r,height:a}=e;return{width:r,height:a,top:n,left:t,right:t+r,bottom:n+a,x:t,y:n}}function Ms(e,t,n){let{reference:r,floating:a}=e;const o=Xe(t),s=Uo(t),l=Ho(s),u=pt(t),d=o==="y",h=r.x+r.width/2-a.width/2,p=r.y+r.height/2-a.height/2,g=r[l]/2-a[l]/2;let f;switch(u){case"top":f={x:h,y:r.y-a.height};break;case"bottom":f={x:h,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:p};break;case"left":f={x:r.x-a.width,y:p};break;default:f={x:r.x,y:r.y}}switch(Ln(t)){case"start":f[s]-=g*(n&&d?-1:1);break;case"end":f[s]+=g*(n&&d?-1:1);break}return f}const mp=async(e,t,n)=>{const{placement:r="bottom",strategy:a="absolute",middleware:o=[],platform:s}=n,l=o.filter(Boolean),u=await(s.isRTL==null?void 0:s.isRTL(t));let d=await s.getElementRects({reference:e,floating:t,strategy:a}),{x:h,y:p}=Ms(d,r,u),g=r,f={},y=0;for(let m=0;m<l.length;m++){const{name:b,fn:v}=l[m],{x,y:k,data:S,reset:E}=await v({x:h,y:p,initialPlacement:r,placement:g,strategy:a,middlewareData:f,rects:d,platform:s,elements:{reference:e,floating:t}});h=x??h,p=k??p,f={...f,[b]:{...f[b],...S}},E&&y<=50&&(y++,typeof E=="object"&&(E.placement&&(g=E.placement),E.rects&&(d=E.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:a}):E.rects),{x:h,y:p}=Ms(d,g,u)),m=-1)}return{x:h,y:p,placement:g,strategy:a,middlewareData:f}};async function Zn(e,t){var n;t===void 0&&(t={});const{x:r,y:a,platform:o,rects:s,elements:l,strategy:u}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:g=!1,padding:f=0}=ft(t,e),y=Hl(f),b=l[g?p==="floating"?"reference":"floating":p],v=Ur(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(b)))==null||n?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:u})),x=p==="floating"?{x:r,y:a,width:s.floating.width,height:s.floating.height}:s.reference,k=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),S=await(o.isElement==null?void 0:o.isElement(k))?await(o.getScale==null?void 0:o.getScale(k))||{x:1,y:1}:{x:1,y:1},E=Ur(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:k,strategy:u}):x);return{top:(v.top-E.top+y.top)/S.y,bottom:(E.bottom-v.bottom+y.bottom)/S.y,left:(v.left-E.left+y.left)/S.x,right:(E.right-v.right+y.right)/S.x}}const gp=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:a,rects:o,platform:s,elements:l,middlewareData:u}=t,{element:d,padding:h=0}=ft(e,t)||{};if(d==null)return{};const p=Hl(h),g={x:n,y:r},f=Uo(a),y=Ho(f),m=await s.getDimensions(d),b=f==="y",v=b?"top":"left",x=b?"bottom":"right",k=b?"clientHeight":"clientWidth",S=o.reference[y]+o.reference[f]-g[f]-o.floating[y],E=g[f]-o.reference[f],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(d));let A=R?R[k]:0;(!A||!await(s.isElement==null?void 0:s.isElement(R)))&&(A=l.floating[k]||o.floating[y]);const $=S/2-E/2,P=A/2-m[y]/2-1,j=Ot(p[v],P),U=Ot(p[x],P),D=j,W=A-m[y]-U,N=A/2-m[y]/2+$,V=Za(D,N,W),q=!u.arrow&&Ln(a)!=null&&N!==V&&o.reference[y]/2-(N<D?j:U)-m[y]/2<0,G=q?N<D?N-D:N-W:0;return{[f]:g[f]+G,data:{[f]:V,centerOffset:N-V-G,...q&&{alignmentOffset:G}},reset:q}}}),bp=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:a,middlewareData:o,rects:s,initialPlacement:l,platform:u,elements:d}=t,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:m=!0,...b}=ft(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const v=pt(a),x=Xe(l),k=pt(l)===l,S=await(u.isRTL==null?void 0:u.isRTL(d.floating)),E=g||(k||!m?[Hr(l)]:cp(l)),R=y!=="none";!g&&R&&E.push(...fp(l,m,y,S));const A=[l,...E],$=await Zn(t,b),P=[];let j=((r=o.flip)==null?void 0:r.overflows)||[];if(h&&P.push($[v]),p){const N=lp(a,s,S);P.push($[N[0]],$[N[1]])}if(j=[...j,{placement:a,overflows:P}],!P.every(N=>N<=0)){var U,D;const N=(((U=o.flip)==null?void 0:U.index)||0)+1,V=A[N];if(V&&(!(p==="alignment"?x!==Xe(V):!1)||j.every(H=>H.overflows[0]>0&&Xe(H.placement)===x)))return{data:{index:N,overflows:j},reset:{placement:V}};let q=(D=j.filter(G=>G.overflows[0]<=0).sort((G,H)=>G.overflows[1]-H.overflows[1])[0])==null?void 0:D.placement;if(!q)switch(f){case"bestFit":{var W;const G=(W=j.filter(H=>{if(R){const _=Xe(H.placement);return _===x||_==="y"}return!0}).map(H=>[H.placement,H.overflows.filter(_=>_>0).reduce((_,B)=>_+B,0)]).sort((H,_)=>H[1]-_[1])[0])==null?void 0:W[0];G&&(q=G);break}case"initialPlacement":q=l;break}if(a!==q)return{reset:{placement:q}}}return{}}}};function Fs(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Hs(e){return ap.some(t=>e[t]>=0)}const yp=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...a}=ft(e,t);switch(r){case"referenceHidden":{const o=await Zn(t,{...a,elementContext:"reference"}),s=Fs(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Hs(s)}}}case"escaped":{const o=await Zn(t,{...a,altBoundary:!0}),s=Fs(o,n.floating);return{data:{escapedOffsets:s,escaped:Hs(s)}}}default:return{}}}}},Ul=new Set(["left","top"]);async function wp(e,t){const{placement:n,platform:r,elements:a}=e,o=await(r.isRTL==null?void 0:r.isRTL(a.floating)),s=pt(n),l=Ln(n),u=Xe(n)==="y",d=Ul.has(s)?-1:1,h=o&&u?-1:1,p=ft(t,e);let{mainAxis:g,crossAxis:f,alignmentAxis:y}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&typeof y=="number"&&(f=l==="end"?y*-1:y),u?{x:f*h,y:g*d}:{x:g*d,y:f*h}}const vp=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:a,y:o,placement:s,middlewareData:l}=t,u=await wp(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:a+u.x,y:o+u.y,data:{...u,placement:s}}}}},xp=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:l={fn:b=>{let{x:v,y:x}=b;return{x:v,y:x}}},...u}=ft(e,t),d={x:n,y:r},h=await Zn(t,u),p=Xe(pt(a)),g=Fo(p);let f=d[g],y=d[p];if(o){const b=g==="y"?"top":"left",v=g==="y"?"bottom":"right",x=f+h[b],k=f-h[v];f=Za(x,f,k)}if(s){const b=p==="y"?"top":"left",v=p==="y"?"bottom":"right",x=y+h[b],k=y-h[v];y=Za(x,y,k)}const m=l.fn({...t,[g]:f,[p]:y});return{...m,data:{x:m.x-n,y:m.y-r,enabled:{[g]:o,[p]:s}}}}}},kp=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:a,rects:o,middlewareData:s}=t,{offset:l=0,mainAxis:u=!0,crossAxis:d=!0}=ft(e,t),h={x:n,y:r},p=Xe(a),g=Fo(p);let f=h[g],y=h[p];const m=ft(l,t),b=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(u){const k=g==="y"?"height":"width",S=o.reference[g]-o.floating[k]+b.mainAxis,E=o.reference[g]+o.reference[k]-b.mainAxis;f<S?f=S:f>E&&(f=E)}if(d){var v,x;const k=g==="y"?"width":"height",S=Ul.has(pt(a)),E=o.reference[p]-o.floating[k]+(S&&((v=s.offset)==null?void 0:v[p])||0)+(S?0:b.crossAxis),R=o.reference[p]+o.reference[k]+(S?0:((x=s.offset)==null?void 0:x[p])||0)-(S?b.crossAxis:0);y<E?y=E:y>R&&(y=R)}return{[g]:f,[p]:y}}}},Sp=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:a,rects:o,platform:s,elements:l}=t,{apply:u=()=>{},...d}=ft(e,t),h=await Zn(t,d),p=pt(a),g=Ln(a),f=Xe(a)==="y",{width:y,height:m}=o.floating;let b,v;p==="top"||p==="bottom"?(b=p,v=g===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(v=p,b=g==="end"?"top":"bottom");const x=m-h.top-h.bottom,k=y-h.left-h.right,S=Ot(m-h[b],x),E=Ot(y-h[v],k),R=!t.middlewareData.shift;let A=S,$=E;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&($=k),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(A=x),R&&!g){const j=Ce(h.left,0),U=Ce(h.right,0),D=Ce(h.top,0),W=Ce(h.bottom,0);f?$=y-2*(j!==0||U!==0?j+U:Ce(h.left,h.right)):A=m-2*(D!==0||W!==0?D+W:Ce(h.top,h.bottom))}await u({...t,availableWidth:$,availableHeight:A});const P=await s.getDimensions(l.floating);return y!==P.width||m!==P.height?{reset:{rects:!0}}:{}}}};function ta(){return typeof window<"u"}function Mn(e){return Bl(e)?(e.nodeName||"").toLowerCase():"#document"}function Pe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function at(e){var t;return(t=(Bl(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Bl(e){return ta()?e instanceof Node||e instanceof Pe(e).Node:!1}function qe(e){return ta()?e instanceof Element||e instanceof Pe(e).Element:!1}function nt(e){return ta()?e instanceof HTMLElement||e instanceof Pe(e).HTMLElement:!1}function Us(e){return!ta()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Pe(e).ShadowRoot}const Ep=new Set(["inline","contents"]);function cr(e){const{overflow:t,overflowX:n,overflowY:r,display:a}=Ge(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Ep.has(a)}const Tp=new Set(["table","td","th"]);function Rp(e){return Tp.has(Mn(e))}const Ap=[":popover-open",":modal"];function na(e){return Ap.some(t=>{try{return e.matches(t)}catch{return!1}})}const _p=["transform","translate","scale","rotate","perspective"],Cp=["transform","translate","scale","rotate","perspective","filter"],Pp=["paint","layout","strict","content"];function Bo(e){const t=zo(),n=qe(e)?Ge(e):e;return _p.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||Cp.some(r=>(n.willChange||"").includes(r))||Pp.some(r=>(n.contain||"").includes(r))}function Np(e){let t=jt(e);for(;nt(t)&&!Cn(t);){if(Bo(t))return t;if(na(t))return null;t=jt(t)}return null}function zo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Op=new Set(["html","body","#document"]);function Cn(e){return Op.has(Mn(e))}function Ge(e){return Pe(e).getComputedStyle(e)}function ra(e){return qe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function jt(e){if(Mn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Us(e)&&e.host||at(e);return Us(t)?t.host:t}function zl(e){const t=jt(e);return Cn(t)?e.ownerDocument?e.ownerDocument.body:e.body:nt(t)&&cr(t)?t:zl(t)}function er(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const a=zl(e),o=a===((r=e.ownerDocument)==null?void 0:r.body),s=Pe(a);if(o){const l=to(s);return t.concat(s,s.visualViewport||[],cr(a)?a:[],l&&n?er(l):[])}return t.concat(a,er(a,[],n))}function to(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ql(e){const t=Ge(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const a=nt(e),o=a?e.offsetWidth:n,s=a?e.offsetHeight:r,l=Fr(n)!==o||Fr(r)!==s;return l&&(n=o,r=s),{width:n,height:r,$:l}}function qo(e){return qe(e)?e:e.contextElement}function fn(e){const t=qo(e);if(!nt(t))return et(1);const n=t.getBoundingClientRect(),{width:r,height:a,$:o}=ql(t);let s=(o?Fr(n.width):n.width)/r,l=(o?Fr(n.height):n.height)/a;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const jp=et(0);function Gl(e){const t=Pe(e);return!zo()||!t.visualViewport?jp:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ip(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Pe(e)?!1:t}function Yt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const a=e.getBoundingClientRect(),o=qo(e);let s=et(1);t&&(r?qe(r)&&(s=fn(r)):s=fn(e));const l=Ip(o,n,r)?Gl(o):et(0);let u=(a.left+l.x)/s.x,d=(a.top+l.y)/s.y,h=a.width/s.x,p=a.height/s.y;if(o){const g=Pe(o),f=r&&qe(r)?Pe(r):r;let y=g,m=to(y);for(;m&&r&&f!==y;){const b=fn(m),v=m.getBoundingClientRect(),x=Ge(m),k=v.left+(m.clientLeft+parseFloat(x.paddingLeft))*b.x,S=v.top+(m.clientTop+parseFloat(x.paddingTop))*b.y;u*=b.x,d*=b.y,h*=b.x,p*=b.y,u+=k,d+=S,y=Pe(m),m=to(y)}}return Ur({width:h,height:p,x:u,y:d})}function Go(e,t){const n=ra(e).scrollLeft;return t?t.left+n:Yt(at(e)).left+n}function Wl(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),a=r.left+t.scrollLeft-(n?0:Go(e,r)),o=r.top+t.scrollTop;return{x:a,y:o}}function Dp(e){let{elements:t,rect:n,offsetParent:r,strategy:a}=e;const o=a==="fixed",s=at(r),l=t?na(t.floating):!1;if(r===s||l&&o)return n;let u={scrollLeft:0,scrollTop:0},d=et(1);const h=et(0),p=nt(r);if((p||!p&&!o)&&((Mn(r)!=="body"||cr(s))&&(u=ra(r)),nt(r))){const f=Yt(r);d=fn(r),h.x=f.x+r.clientLeft,h.y=f.y+r.clientTop}const g=s&&!p&&!o?Wl(s,u,!0):et(0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-u.scrollLeft*d.x+h.x+g.x,y:n.y*d.y-u.scrollTop*d.y+h.y+g.y}}function $p(e){return Array.from(e.getClientRects())}function Lp(e){const t=at(e),n=ra(e),r=e.ownerDocument.body,a=Ce(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Ce(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+Go(e);const l=-n.scrollTop;return Ge(r).direction==="rtl"&&(s+=Ce(t.clientWidth,r.clientWidth)-a),{width:a,height:o,x:s,y:l}}function Mp(e,t){const n=Pe(e),r=at(e),a=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,l=0,u=0;if(a){o=a.width,s=a.height;const d=zo();(!d||d&&t==="fixed")&&(l=a.offsetLeft,u=a.offsetTop)}return{width:o,height:s,x:l,y:u}}const Fp=new Set(["absolute","fixed"]);function Hp(e,t){const n=Yt(e,!0,t==="fixed"),r=n.top+e.clientTop,a=n.left+e.clientLeft,o=nt(e)?fn(e):et(1),s=e.clientWidth*o.x,l=e.clientHeight*o.y,u=a*o.x,d=r*o.y;return{width:s,height:l,x:u,y:d}}function Bs(e,t,n){let r;if(t==="viewport")r=Mp(e,n);else if(t==="document")r=Lp(at(e));else if(qe(t))r=Hp(t,n);else{const a=Gl(e);r={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return Ur(r)}function Vl(e,t){const n=jt(e);return n===t||!qe(n)||Cn(n)?!1:Ge(n).position==="fixed"||Vl(n,t)}function Up(e,t){const n=t.get(e);if(n)return n;let r=er(e,[],!1).filter(l=>qe(l)&&Mn(l)!=="body"),a=null;const o=Ge(e).position==="fixed";let s=o?jt(e):e;for(;qe(s)&&!Cn(s);){const l=Ge(s),u=Bo(s);!u&&l.position==="fixed"&&(a=null),(o?!u&&!a:!u&&l.position==="static"&&!!a&&Fp.has(a.position)||cr(s)&&!u&&Vl(e,s))?r=r.filter(h=>h!==s):a=l,s=jt(s)}return t.set(e,r),r}function Bp(e){let{element:t,boundary:n,rootBoundary:r,strategy:a}=e;const s=[...n==="clippingAncestors"?na(t)?[]:Up(t,this._c):[].concat(n),r],l=s[0],u=s.reduce((d,h)=>{const p=Bs(t,h,a);return d.top=Ce(p.top,d.top),d.right=Ot(p.right,d.right),d.bottom=Ot(p.bottom,d.bottom),d.left=Ce(p.left,d.left),d},Bs(t,l,a));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function zp(e){const{width:t,height:n}=ql(e);return{width:t,height:n}}function qp(e,t,n){const r=nt(t),a=at(t),o=n==="fixed",s=Yt(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const u=et(0);function d(){u.x=Go(a)}if(r||!r&&!o)if((Mn(t)!=="body"||cr(a))&&(l=ra(t)),r){const f=Yt(t,!0,o,t);u.x=f.x+t.clientLeft,u.y=f.y+t.clientTop}else a&&d();o&&!r&&a&&d();const h=a&&!r&&!o?Wl(a,l):et(0),p=s.left+l.scrollLeft-u.x-h.x,g=s.top+l.scrollTop-u.y-h.y;return{x:p,y:g,width:s.width,height:s.height}}function Ta(e){return Ge(e).position==="static"}function zs(e,t){if(!nt(e)||Ge(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return at(e)===n&&(n=n.ownerDocument.body),n}function Jl(e,t){const n=Pe(e);if(na(e))return n;if(!nt(e)){let a=jt(e);for(;a&&!Cn(a);){if(qe(a)&&!Ta(a))return a;a=jt(a)}return n}let r=zs(e,t);for(;r&&Rp(r)&&Ta(r);)r=zs(r,t);return r&&Cn(r)&&Ta(r)&&!Bo(r)?n:r||Np(e)||n}const Gp=async function(e){const t=this.getOffsetParent||Jl,n=this.getDimensions,r=await n(e.floating);return{reference:qp(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Wp(e){return Ge(e).direction==="rtl"}const Vp={convertOffsetParentRelativeRectToViewportRelativeRect:Dp,getDocumentElement:at,getClippingRect:Bp,getOffsetParent:Jl,getElementRects:Gp,getClientRects:$p,getDimensions:zp,getScale:fn,isElement:qe,isRTL:Wp};function Kl(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Jp(e,t){let n=null,r;const a=at(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function s(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const d=e.getBoundingClientRect(),{left:h,top:p,width:g,height:f}=d;if(l||t(),!g||!f)return;const y=vr(p),m=vr(a.clientWidth-(h+g)),b=vr(a.clientHeight-(p+f)),v=vr(h),k={rootMargin:-y+"px "+-m+"px "+-b+"px "+-v+"px",threshold:Ce(0,Ot(1,u))||1};let S=!0;function E(R){const A=R[0].intersectionRatio;if(A!==u){if(!S)return s();A?s(!1,A):r=setTimeout(()=>{s(!1,1e-7)},1e3)}A===1&&!Kl(d,e.getBoundingClientRect())&&s(),S=!1}try{n=new IntersectionObserver(E,{...k,root:a.ownerDocument})}catch{n=new IntersectionObserver(E,k)}n.observe(e)}return s(!0),o}function Kp(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:a=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,d=qo(e),h=a||o?[...d?er(d):[],...er(t)]:[];h.forEach(v=>{a&&v.addEventListener("scroll",n,{passive:!0}),o&&v.addEventListener("resize",n)});const p=d&&l?Jp(d,n):null;let g=-1,f=null;s&&(f=new ResizeObserver(v=>{let[x]=v;x&&x.target===d&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var k;(k=f)==null||k.observe(t)})),n()}),d&&!u&&f.observe(d),f.observe(t));let y,m=u?Yt(e):null;u&&b();function b(){const v=Yt(e);m&&!Kl(m,v)&&n(),m=v,y=requestAnimationFrame(b)}return n(),()=>{var v;h.forEach(x=>{a&&x.removeEventListener("scroll",n),o&&x.removeEventListener("resize",n)}),p==null||p(),(v=f)==null||v.disconnect(),f=null,u&&cancelAnimationFrame(y)}}const Yp=vp,Qp=xp,Xp=bp,Zp=Sp,em=yp,qs=gp,tm=kp,nm=(e,t,n)=>{const r=new Map,a={platform:Vp,...n},o={...a.platform,_c:r};return mp(e,t,{...a,platform:o})};var rm=typeof document<"u",am=function(){},jr=rm?c.useLayoutEffect:am;function Br(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,a;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Br(e[r],t[r]))return!1;return!0}if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,a[r]))return!1;for(r=n;r--!==0;){const o=a[r];if(!(o==="_owner"&&e.$$typeof)&&!Br(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function Yl(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Gs(e,t){const n=Yl(e);return Math.round(t*n)/n}function Ra(e){const t=c.useRef(e);return jr(()=>{t.current=e}),t}function om(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:a,elements:{reference:o,floating:s}={},transform:l=!0,whileElementsMounted:u,open:d}=e,[h,p]=c.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[g,f]=c.useState(r);Br(g,r)||f(r);const[y,m]=c.useState(null),[b,v]=c.useState(null),x=c.useCallback(H=>{H!==R.current&&(R.current=H,m(H))},[]),k=c.useCallback(H=>{H!==A.current&&(A.current=H,v(H))},[]),S=o||y,E=s||b,R=c.useRef(null),A=c.useRef(null),$=c.useRef(h),P=u!=null,j=Ra(u),U=Ra(a),D=Ra(d),W=c.useCallback(()=>{if(!R.current||!A.current)return;const H={placement:t,strategy:n,middleware:g};U.current&&(H.platform=U.current),nm(R.current,A.current,H).then(_=>{const B={..._,isPositioned:D.current!==!1};N.current&&!Br($.current,B)&&($.current=B,Jr.flushSync(()=>{p(B)}))})},[g,t,n,U,D]);jr(()=>{d===!1&&$.current.isPositioned&&($.current.isPositioned=!1,p(H=>({...H,isPositioned:!1})))},[d]);const N=c.useRef(!1);jr(()=>(N.current=!0,()=>{N.current=!1}),[]),jr(()=>{if(S&&(R.current=S),E&&(A.current=E),S&&E){if(j.current)return j.current(S,E,W);W()}},[S,E,W,j,P]);const V=c.useMemo(()=>({reference:R,floating:A,setReference:x,setFloating:k}),[x,k]),q=c.useMemo(()=>({reference:S,floating:E}),[S,E]),G=c.useMemo(()=>{const H={position:n,left:0,top:0};if(!q.floating)return H;const _=Gs(q.floating,h.x),B=Gs(q.floating,h.y);return l?{...H,transform:"translate("+_+"px, "+B+"px)",...Yl(q.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:_,top:B}},[n,l,q.floating,h.x,h.y]);return c.useMemo(()=>({...h,update:W,refs:V,elements:q,floatingStyles:G}),[h,W,V,q,G])}const sm=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:a}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?qs({element:r.current,padding:a}).fn(n):{}:r?qs({element:r,padding:a}).fn(n):{}}}},im=(e,t)=>({...Yp(e),options:[e,t]}),lm=(e,t)=>({...Qp(e),options:[e,t]}),cm=(e,t)=>({...tm(e),options:[e,t]}),dm=(e,t)=>({...Xp(e),options:[e,t]}),um=(e,t)=>({...Zp(e),options:[e,t]}),hm=(e,t)=>({...em(e),options:[e,t]}),fm=(e,t)=>({...sm(e),options:[e,t]});var pm="Arrow",Ql=c.forwardRef((e,t)=>{const{children:n,width:r=10,height:a=5,...o}=e;return i.jsx(te.svg,{...o,ref:t,width:r,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:i.jsx("polygon",{points:"0,0 30,0 15,10"})})});Ql.displayName=pm;var mm=Ql;function gm(e){const[t,n]=c.useState(void 0);return tt(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const o=a[0];let s,l;if("borderBoxSize"in o){const u=o.borderBoxSize,d=Array.isArray(u)?u[0]:u;s=d.inlineSize,l=d.blockSize}else s=e.offsetWidth,l=e.offsetHeight;n({width:s,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var Xl="Popper",[Zl,ec]=Dn(Xl),[Hv,tc]=Zl(Xl),nc="PopperAnchor",rc=c.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...a}=e,o=tc(nc,n),s=c.useRef(null),l=pe(t,s);return c.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:i.jsx(te.div,{...a,ref:l})});rc.displayName=nc;var Wo="PopperContent",[bm,ym]=Zl(Wo),ac=c.forwardRef((e,t)=>{var F,ce,ne,ve,Ve,mt;const{__scopePopper:n,side:r="bottom",sideOffset:a=0,align:o="center",alignOffset:s=0,arrowPadding:l=0,avoidCollisions:u=!0,collisionBoundary:d=[],collisionPadding:h=0,sticky:p="partial",hideWhenDetached:g=!1,updatePositionStrategy:f="optimized",onPlaced:y,...m}=e,b=tc(Wo,n),[v,x]=c.useState(null),k=pe(t,_e=>x(_e)),[S,E]=c.useState(null),R=gm(S),A=(R==null?void 0:R.width)??0,$=(R==null?void 0:R.height)??0,P=r+(o!=="center"?"-"+o:""),j=typeof h=="number"?h:{top:0,right:0,bottom:0,left:0,...h},U=Array.isArray(d)?d:[d],D=U.length>0,W={padding:j,boundary:U.filter(vm),altBoundary:D},{refs:N,floatingStyles:V,placement:q,isPositioned:G,middlewareData:H}=om({strategy:"fixed",placement:P,whileElementsMounted:(..._e)=>Kp(..._e,{animationFrame:f==="always"}),elements:{reference:b.anchor},middleware:[im({mainAxis:a+$,alignmentAxis:s}),u&&lm({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?cm():void 0,...W}),u&&dm({...W}),um({...W,apply:({elements:_e,rects:Dt,availableWidth:pa,availableHeight:pr})=>{const{width:ma,height:Hn}=Dt.reference,tn=_e.floating.style;tn.setProperty("--radix-popper-available-width",`${pa}px`),tn.setProperty("--radix-popper-available-height",`${pr}px`),tn.setProperty("--radix-popper-anchor-width",`${ma}px`),tn.setProperty("--radix-popper-anchor-height",`${Hn}px`)}}),S&&fm({element:S,padding:l}),xm({arrowWidth:A,arrowHeight:$}),g&&hm({strategy:"referenceHidden",...W})]}),[_,B]=ic(q),ee=ge(y);tt(()=>{G&&(ee==null||ee())},[G,ee]);const T=(F=H.arrow)==null?void 0:F.x,O=(ce=H.arrow)==null?void 0:ce.y,L=((ne=H.arrow)==null?void 0:ne.centerOffset)!==0,[I,J]=c.useState();return tt(()=>{v&&J(window.getComputedStyle(v).zIndex)},[v]),i.jsx("div",{ref:N.setFloating,"data-radix-popper-content-wrapper":"",style:{...V,transform:G?V.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:I,"--radix-popper-transform-origin":[(ve=H.transformOrigin)==null?void 0:ve.x,(Ve=H.transformOrigin)==null?void 0:Ve.y].join(" "),...((mt=H.hide)==null?void 0:mt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:i.jsx(bm,{scope:n,placedSide:_,onArrowChange:E,arrowX:T,arrowY:O,shouldHideArrow:L,children:i.jsx(te.div,{"data-side":_,"data-align":B,...m,ref:k,style:{...m.style,animation:G?void 0:"none"}})})})});ac.displayName=Wo;var oc="PopperArrow",wm={top:"bottom",right:"left",bottom:"top",left:"right"},sc=c.forwardRef(function(t,n){const{__scopePopper:r,...a}=t,o=ym(oc,r),s=wm[o.placedSide];return i.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:i.jsx(mm,{...a,ref:n,style:{...a.style,display:"block"}})})});sc.displayName=oc;function vm(e){return e!==null}var xm=e=>({name:"transformOrigin",options:e,fn(t){var b,v,x;const{placement:n,rects:r,middlewareData:a}=t,s=((b=a.arrow)==null?void 0:b.centerOffset)!==0,l=s?0:e.arrowWidth,u=s?0:e.arrowHeight,[d,h]=ic(n),p={start:"0%",center:"50%",end:"100%"}[h],g=(((v=a.arrow)==null?void 0:v.x)??0)+l/2,f=(((x=a.arrow)==null?void 0:x.y)??0)+u/2;let y="",m="";return d==="bottom"?(y=s?p:`${g}px`,m=`${-u}px`):d==="top"?(y=s?p:`${g}px`,m=`${r.floating.height+u}px`):d==="right"?(y=`${-u}px`,m=s?p:`${f}px`):d==="left"&&(y=`${r.floating.width+u}px`,m=s?p:`${f}px`),{data:{x:y,y:m}}}});function ic(e){const[t,n="center"]=e.split("-");return[t,n]}var km=rc,Sm=ac,Em=sc,[aa,Uv]=Dn("Tooltip",[ec]),Vo=ec(),lc="TooltipProvider",Tm=700,Ws="tooltip.open",[Rm,cc]=aa(lc),dc=e=>{const{__scopeTooltip:t,delayDuration:n=Tm,skipDelayDuration:r=300,disableHoverableContent:a=!1,children:o}=e,s=c.useRef(!0),l=c.useRef(!1),u=c.useRef(0);return c.useEffect(()=>{const d=u.current;return()=>window.clearTimeout(d)},[]),i.jsx(Rm,{scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:c.useCallback(()=>{window.clearTimeout(u.current),s.current=!1},[]),onClose:c.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:c.useCallback(d=>{l.current=d},[]),disableHoverableContent:a,children:o})};dc.displayName=lc;var uc="Tooltip",[Bv,oa]=aa(uc),no="TooltipTrigger",Am=c.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,a=oa(no,n),o=cc(no,n),s=Vo(n),l=c.useRef(null),u=pe(t,l,a.onTriggerChange),d=c.useRef(!1),h=c.useRef(!1),p=c.useCallback(()=>d.current=!1,[]);return c.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),i.jsx(km,{asChild:!0,...s,children:i.jsx(te.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...r,ref:u,onPointerMove:re(e.onPointerMove,g=>{g.pointerType!=="touch"&&!h.current&&!o.isPointerInTransitRef.current&&(a.onTriggerEnter(),h.current=!0)}),onPointerLeave:re(e.onPointerLeave,()=>{a.onTriggerLeave(),h.current=!1}),onPointerDown:re(e.onPointerDown,()=>{a.open&&a.onClose(),d.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:re(e.onFocus,()=>{d.current||a.onOpen()}),onBlur:re(e.onBlur,a.onClose),onClick:re(e.onClick,a.onClose)})})});Am.displayName=no;var _m="TooltipPortal",[zv,Cm]=aa(_m,{forceMount:void 0}),Pn="TooltipContent",hc=c.forwardRef((e,t)=>{const n=Cm(Pn,e.__scopeTooltip),{forceMount:r=n.forceMount,side:a="top",...o}=e,s=oa(Pn,e.__scopeTooltip);return i.jsx(rt,{present:r||s.open,children:s.disableHoverableContent?i.jsx(fc,{side:a,...o,ref:t}):i.jsx(Pm,{side:a,...o,ref:t})})}),Pm=c.forwardRef((e,t)=>{const n=oa(Pn,e.__scopeTooltip),r=cc(Pn,e.__scopeTooltip),a=c.useRef(null),o=pe(t,a),[s,l]=c.useState(null),{trigger:u,onClose:d}=n,h=a.current,{onPointerInTransitChange:p}=r,g=c.useCallback(()=>{l(null),p(!1)},[p]),f=c.useCallback((y,m)=>{const b=y.currentTarget,v={x:y.clientX,y:y.clientY},x=Dm(v,b.getBoundingClientRect()),k=$m(v,x),S=Lm(m.getBoundingClientRect()),E=Fm([...k,...S]);l(E),p(!0)},[p]);return c.useEffect(()=>()=>g(),[g]),c.useEffect(()=>{if(u&&h){const y=b=>f(b,h),m=b=>f(b,u);return u.addEventListener("pointerleave",y),h.addEventListener("pointerleave",m),()=>{u.removeEventListener("pointerleave",y),h.removeEventListener("pointerleave",m)}}},[u,h,f,g]),c.useEffect(()=>{if(s){const y=m=>{const b=m.target,v={x:m.clientX,y:m.clientY},x=(u==null?void 0:u.contains(b))||(h==null?void 0:h.contains(b)),k=!Mm(v,s);x?g():k&&(g(),d())};return document.addEventListener("pointermove",y),()=>document.removeEventListener("pointermove",y)}},[u,h,s,d,g]),i.jsx(fc,{...e,ref:o})}),[Nm,Om]=aa(uc,{isInside:!1}),jm=Iu("TooltipContent"),fc=c.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":a,onEscapeKeyDown:o,onPointerDownOutside:s,...l}=e,u=oa(Pn,n),d=Vo(n),{onClose:h}=u;return c.useEffect(()=>(document.addEventListener(Ws,h),()=>document.removeEventListener(Ws,h)),[h]),c.useEffect(()=>{if(u.trigger){const p=g=>{const f=g.target;f!=null&&f.contains(u.trigger)&&h()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[u.trigger,h]),i.jsx(Yr,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:p=>p.preventDefault(),onDismiss:h,children:i.jsxs(Sm,{"data-state":u.stateAttribute,...d,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[i.jsx(jm,{children:r}),i.jsx(Nm,{scope:n,isInside:!0,children:i.jsx(ah,{id:u.contentId,role:"tooltip",children:a||r})})]})})});hc.displayName=Pn;var pc="TooltipArrow",Im=c.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,a=Vo(n);return Om(pc,n).isInside?null:i.jsx(Em,{...a,...r,ref:t})});Im.displayName=pc;function Dm(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),a=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x);switch(Math.min(n,r,a,o)){case o:return"left";case a:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function $m(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function Lm(e){const{top:t,right:n,bottom:r,left:a}=e;return[{x:a,y:t},{x:n,y:t},{x:n,y:r},{x:a,y:r}]}function Mm(e,t){const{x:n,y:r}=e;let a=!1;for(let o=0,s=t.length-1;o<t.length;s=o++){const l=t[o],u=t[s],d=l.x,h=l.y,p=u.x,g=u.y;h>r!=g>r&&n<(p-d)*(r-h)/(g-h)+d&&(a=!a)}return a}function Fm(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),Hm(t)}function Hm(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const a=e[r];for(;t.length>=2;){const o=t[t.length-1],s=t[t.length-2];if((o.x-s.x)*(a.y-s.y)>=(o.y-s.y)*(a.x-s.x))t.pop();else break}t.push(a)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const a=e[r];for(;n.length>=2;){const o=n[n.length-1],s=n[n.length-2];if((o.x-s.x)*(a.y-s.y)>=(o.y-s.y)*(a.x-s.x))n.pop();else break}n.push(a)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var Um=dc,mc=hc;const Bm=Um,zm=c.forwardRef(({className:e,sideOffset:t=4,...n},r)=>i.jsx(mc,{ref:r,sideOffset:t,className:Q("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));zm.displayName=mc.displayName;var dr=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Qt=typeof window>"u"||"Deno"in globalThis;function Re(){}function qm(e,t){return typeof e=="function"?e(t):e}function ro(e){return typeof e=="number"&&e>=0&&e!==1/0}function gc(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Nt(e,t){return typeof e=="function"?e(t):e}function Ie(e,t){return typeof e=="function"?e(t):e}function Vs(e,t){const{type:n="all",exact:r,fetchStatus:a,predicate:o,queryKey:s,stale:l}=e;if(s){if(r){if(t.queryHash!==Jo(s,t.options))return!1}else if(!nr(t.queryKey,s))return!1}if(n!=="all"){const u=t.isActive();if(n==="active"&&!u||n==="inactive"&&u)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||a&&a!==t.state.fetchStatus||o&&!o(t))}function Js(e,t){const{exact:n,status:r,predicate:a,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(tr(t.options.mutationKey)!==tr(o))return!1}else if(!nr(t.options.mutationKey,o))return!1}return!(r&&t.state.status!==r||a&&!a(t))}function Jo(e,t){return((t==null?void 0:t.queryKeyHashFn)||tr)(e)}function tr(e){return JSON.stringify(e,(t,n)=>oo(n)?Object.keys(n).sort().reduce((r,a)=>(r[a]=n[a],r),{}):n)}function nr(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>nr(e[n],t[n])):!1}function bc(e,t){if(e===t)return e;const n=Ks(e)&&Ks(t);if(n||oo(e)&&oo(t)){const r=n?e:Object.keys(e),a=r.length,o=n?t:Object.keys(t),s=o.length,l=n?[]:{},u=new Set(r);let d=0;for(let h=0;h<s;h++){const p=n?h:o[h];(!n&&u.has(p)||n)&&e[p]===void 0&&t[p]===void 0?(l[p]=void 0,d++):(l[p]=bc(e[p],t[p]),l[p]===e[p]&&e[p]!==void 0&&d++)}return a===s&&d===a?e:l}return t}function ao(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Ks(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function oo(e){if(!Ys(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Ys(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Ys(e){return Object.prototype.toString.call(e)==="[object Object]"}function Gm(e){return new Promise(t=>{setTimeout(t,e)})}function so(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?bc(e,t):t}function Wm(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function Vm(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Ko=Symbol();function yc(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Ko?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function Jm(e,t){return typeof e=="function"?e(...t):!!e}var Ft,St,bn,Li,Km=(Li=class extends dr{constructor(){super();z(this,Ft);z(this,St);z(this,bn);M(this,bn,t=>{if(!Qt&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){w(this,St)||this.setEventListener(w(this,bn))}onUnsubscribe(){var t;this.hasListeners()||((t=w(this,St))==null||t.call(this),M(this,St,void 0))}setEventListener(t){var n;M(this,bn,t),(n=w(this,St))==null||n.call(this),M(this,St,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){w(this,Ft)!==t&&(M(this,Ft,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof w(this,Ft)=="boolean"?w(this,Ft):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Ft=new WeakMap,St=new WeakMap,bn=new WeakMap,Li),Yo=new Km,yn,Et,wn,Mi,Ym=(Mi=class extends dr{constructor(){super();z(this,yn,!0);z(this,Et);z(this,wn);M(this,wn,t=>{if(!Qt&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){w(this,Et)||this.setEventListener(w(this,wn))}onUnsubscribe(){var t;this.hasListeners()||((t=w(this,Et))==null||t.call(this),M(this,Et,void 0))}setEventListener(t){var n;M(this,wn,t),(n=w(this,Et))==null||n.call(this),M(this,Et,t(this.setOnline.bind(this)))}setOnline(t){w(this,yn)!==t&&(M(this,yn,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return w(this,yn)}},yn=new WeakMap,Et=new WeakMap,wn=new WeakMap,Mi),zr=new Ym;function io(){let e,t;const n=new Promise((a,o)=>{e=a,t=o});n.status="pending",n.catch(()=>{});function r(a){Object.assign(n,a),delete n.resolve,delete n.reject}return n.resolve=a=>{r({status:"fulfilled",value:a}),e(a)},n.reject=a=>{r({status:"rejected",reason:a}),t(a)},n}function Qm(e){return Math.min(1e3*2**e,3e4)}function wc(e){return(e??"online")==="online"?zr.isOnline():!0}var vc=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Aa(e){return e instanceof vc}function xc(e){let t=!1,n=0,r=!1,a;const o=io(),s=m=>{var b;r||(g(new vc(m)),(b=e.abort)==null||b.call(e))},l=()=>{t=!0},u=()=>{t=!1},d=()=>Yo.isFocused()&&(e.networkMode==="always"||zr.isOnline())&&e.canRun(),h=()=>wc(e.networkMode)&&e.canRun(),p=m=>{var b;r||(r=!0,(b=e.onSuccess)==null||b.call(e,m),a==null||a(),o.resolve(m))},g=m=>{var b;r||(r=!0,(b=e.onError)==null||b.call(e,m),a==null||a(),o.reject(m))},f=()=>new Promise(m=>{var b;a=v=>{(r||d())&&m(v)},(b=e.onPause)==null||b.call(e)}).then(()=>{var m;a=void 0,r||(m=e.onContinue)==null||m.call(e)}),y=()=>{if(r)return;let m;const b=n===0?e.initialPromise:void 0;try{m=b??e.fn()}catch(v){m=Promise.reject(v)}Promise.resolve(m).then(p).catch(v=>{var R;if(r)return;const x=e.retry??(Qt?0:3),k=e.retryDelay??Qm,S=typeof k=="function"?k(n,v):k,E=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,v);if(t||!E){g(v);return}n++,(R=e.onFail)==null||R.call(e,n,v),Gm(S).then(()=>d()?void 0:f()).then(()=>{t?g(v):y()})})};return{promise:o,cancel:s,continue:()=>(a==null||a(),o),cancelRetry:l,continueRetry:u,canStart:h,start:()=>(h()?y():f().then(y),o)}}var Xm=e=>setTimeout(e,0);function Zm(){let e=[],t=0,n=l=>{l()},r=l=>{l()},a=Xm;const o=l=>{t?e.push(l):a(()=>{n(l)})},s=()=>{const l=e;e=[],l.length&&a(()=>{r(()=>{l.forEach(u=>{n(u)})})})};return{batch:l=>{let u;t++;try{u=l()}finally{t--,t||s()}return u},batchCalls:l=>(...u)=>{o(()=>{l(...u)})},schedule:o,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{a=l}}}var me=Zm(),Ht,Fi,kc=(Fi=class{constructor(){z(this,Ht)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),ro(this.gcTime)&&M(this,Ht,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Qt?1/0:5*60*1e3))}clearGcTimeout(){w(this,Ht)&&(clearTimeout(w(this,Ht)),M(this,Ht,void 0))}},Ht=new WeakMap,Fi),vn,Ut,je,Bt,ye,ar,zt,Ue,ct,Hi,eg=(Hi=class extends kc{constructor(t){super();z(this,Ue);z(this,vn);z(this,Ut);z(this,je);z(this,Bt);z(this,ye);z(this,ar);z(this,zt);M(this,zt,!1),M(this,ar,t.defaultOptions),this.setOptions(t.options),this.observers=[],M(this,Bt,t.client),M(this,je,w(this,Bt).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,M(this,vn,tg(this.options)),this.state=t.state??w(this,vn),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=w(this,ye))==null?void 0:t.promise}setOptions(t){this.options={...w(this,ar),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&w(this,je).remove(this)}setData(t,n){const r=so(this.state.data,t,this.options);return X(this,Ue,ct).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){X(this,Ue,ct).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,a;const n=(r=w(this,ye))==null?void 0:r.promise;return(a=w(this,ye))==null||a.cancel(t),n?n.then(Re).catch(Re):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(w(this,vn))}isActive(){return this.observers.some(t=>Ie(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Ko||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Nt(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!gc(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=w(this,ye))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=w(this,ye))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),w(this,je).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(w(this,ye)&&(w(this,zt)?w(this,ye).cancel({revert:!0}):w(this,ye).cancelRetry()),this.scheduleGc()),w(this,je).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||X(this,Ue,ct).call(this,{type:"invalidate"})}fetch(t,n){var d,h,p;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(w(this,ye))return w(this,ye).continueRetry(),w(this,ye).promise}if(t&&this.setOptions(t),!this.options.queryFn){const g=this.observers.find(f=>f.options.queryFn);g&&this.setOptions(g.options)}const r=new AbortController,a=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(M(this,zt,!0),r.signal)})},o=()=>{const g=yc(this.options,n),y=(()=>{const m={client:w(this,Bt),queryKey:this.queryKey,meta:this.meta};return a(m),m})();return M(this,zt,!1),this.options.persister?this.options.persister(g,y,this):g(y)},l=(()=>{const g={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:w(this,Bt),state:this.state,fetchFn:o};return a(g),g})();(d=this.options.behavior)==null||d.onFetch(l,this),M(this,Ut,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((h=l.fetchOptions)==null?void 0:h.meta))&&X(this,Ue,ct).call(this,{type:"fetch",meta:(p=l.fetchOptions)==null?void 0:p.meta});const u=g=>{var f,y,m,b;Aa(g)&&g.silent||X(this,Ue,ct).call(this,{type:"error",error:g}),Aa(g)||((y=(f=w(this,je).config).onError)==null||y.call(f,g,this),(b=(m=w(this,je).config).onSettled)==null||b.call(m,this.state.data,g,this)),this.scheduleGc()};return M(this,ye,xc({initialPromise:n==null?void 0:n.initialPromise,fn:l.fetchFn,abort:r.abort.bind(r),onSuccess:g=>{var f,y,m,b;if(g===void 0){u(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(g)}catch(v){u(v);return}(y=(f=w(this,je).config).onSuccess)==null||y.call(f,g,this),(b=(m=w(this,je).config).onSettled)==null||b.call(m,g,this.state.error,this),this.scheduleGc()},onError:u,onFail:(g,f)=>{X(this,Ue,ct).call(this,{type:"failed",failureCount:g,error:f})},onPause:()=>{X(this,Ue,ct).call(this,{type:"pause"})},onContinue:()=>{X(this,Ue,ct).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),w(this,ye).start()}},vn=new WeakMap,Ut=new WeakMap,je=new WeakMap,Bt=new WeakMap,ye=new WeakMap,ar=new WeakMap,zt=new WeakMap,Ue=new WeakSet,ct=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...Sc(r.data,this.options),fetchMeta:t.meta??null};case"success":return M(this,Ut,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const a=t.error;return Aa(a)&&a.revert&&w(this,Ut)?{...w(this,Ut),fetchStatus:"idle"}:{...r,error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),me.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),w(this,je).notify({query:this,type:"updated",action:t})})},Hi);function Sc(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:wc(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function tg(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Je,Ui,ng=(Ui=class extends dr{constructor(t={}){super();z(this,Je);this.config=t,M(this,Je,new Map)}build(t,n,r){const a=n.queryKey,o=n.queryHash??Jo(a,n);let s=this.get(o);return s||(s=new eg({client:t,queryKey:a,queryHash:o,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(a)}),this.add(s)),s}add(t){w(this,Je).has(t.queryHash)||(w(this,Je).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=w(this,Je).get(t.queryHash);n&&(t.destroy(),n===t&&w(this,Je).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){me.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return w(this,Je).get(t)}getAll(){return[...w(this,Je).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Vs(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Vs(t,r)):n}notify(t){me.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){me.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){me.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Je=new WeakMap,Ui),Ke,xe,qt,Ye,xt,Bi,rg=(Bi=class extends kc{constructor(t){super();z(this,Ye);z(this,Ke);z(this,xe);z(this,qt);this.mutationId=t.mutationId,M(this,xe,t.mutationCache),M(this,Ke,[]),this.state=t.state||ag(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){w(this,Ke).includes(t)||(w(this,Ke).push(t),this.clearGcTimeout(),w(this,xe).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){M(this,Ke,w(this,Ke).filter(n=>n!==t)),this.scheduleGc(),w(this,xe).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){w(this,Ke).length||(this.state.status==="pending"?this.scheduleGc():w(this,xe).remove(this))}continue(){var t;return((t=w(this,qt))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,s,l,u,d,h,p,g,f,y,m,b,v,x,k,S,E,R,A,$;const n=()=>{X(this,Ye,xt).call(this,{type:"continue"})};M(this,qt,xc({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(P,j)=>{X(this,Ye,xt).call(this,{type:"failed",failureCount:P,error:j})},onPause:()=>{X(this,Ye,xt).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>w(this,xe).canRun(this)}));const r=this.state.status==="pending",a=!w(this,qt).canStart();try{if(r)n();else{X(this,Ye,xt).call(this,{type:"pending",variables:t,isPaused:a}),await((s=(o=w(this,xe).config).onMutate)==null?void 0:s.call(o,t,this));const j=await((u=(l=this.options).onMutate)==null?void 0:u.call(l,t));j!==this.state.context&&X(this,Ye,xt).call(this,{type:"pending",context:j,variables:t,isPaused:a})}const P=await w(this,qt).start();return await((h=(d=w(this,xe).config).onSuccess)==null?void 0:h.call(d,P,t,this.state.context,this)),await((g=(p=this.options).onSuccess)==null?void 0:g.call(p,P,t,this.state.context)),await((y=(f=w(this,xe).config).onSettled)==null?void 0:y.call(f,P,null,this.state.variables,this.state.context,this)),await((b=(m=this.options).onSettled)==null?void 0:b.call(m,P,null,t,this.state.context)),X(this,Ye,xt).call(this,{type:"success",data:P}),P}catch(P){try{throw await((x=(v=w(this,xe).config).onError)==null?void 0:x.call(v,P,t,this.state.context,this)),await((S=(k=this.options).onError)==null?void 0:S.call(k,P,t,this.state.context)),await((R=(E=w(this,xe).config).onSettled)==null?void 0:R.call(E,void 0,P,this.state.variables,this.state.context,this)),await(($=(A=this.options).onSettled)==null?void 0:$.call(A,void 0,P,t,this.state.context)),P}finally{X(this,Ye,xt).call(this,{type:"error",error:P})}}finally{w(this,xe).runNext(this)}}},Ke=new WeakMap,xe=new WeakMap,qt=new WeakMap,Ye=new WeakSet,xt=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),me.batch(()=>{w(this,Ke).forEach(r=>{r.onMutationUpdate(t)}),w(this,xe).notify({mutation:this,type:"updated",action:t})})},Bi);function ag(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var dt,Be,or,zi,og=(zi=class extends dr{constructor(t={}){super();z(this,dt);z(this,Be);z(this,or);this.config=t,M(this,dt,new Set),M(this,Be,new Map),M(this,or,0)}build(t,n,r){const a=new rg({mutationCache:this,mutationId:++gr(this,or)._,options:t.defaultMutationOptions(n),state:r});return this.add(a),a}add(t){w(this,dt).add(t);const n=xr(t);if(typeof n=="string"){const r=w(this,Be).get(n);r?r.push(t):w(this,Be).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(w(this,dt).delete(t)){const n=xr(t);if(typeof n=="string"){const r=w(this,Be).get(n);if(r)if(r.length>1){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}else r[0]===t&&w(this,Be).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=xr(t);if(typeof n=="string"){const r=w(this,Be).get(n),a=r==null?void 0:r.find(o=>o.state.status==="pending");return!a||a===t}else return!0}runNext(t){var r;const n=xr(t);if(typeof n=="string"){const a=(r=w(this,Be).get(n))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(a==null?void 0:a.continue())??Promise.resolve()}else return Promise.resolve()}clear(){me.batch(()=>{w(this,dt).forEach(t=>{this.notify({type:"removed",mutation:t})}),w(this,dt).clear(),w(this,Be).clear()})}getAll(){return Array.from(w(this,dt))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Js(n,r))}findAll(t={}){return this.getAll().filter(n=>Js(t,n))}notify(t){me.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return me.batch(()=>Promise.all(t.map(n=>n.continue().catch(Re))))}},dt=new WeakMap,Be=new WeakMap,or=new WeakMap,zi);function xr(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Qs(e){return{onFetch:(t,n)=>{var h,p,g,f,y;const r=t.options,a=(g=(p=(h=t.fetchOptions)==null?void 0:h.meta)==null?void 0:p.fetchMore)==null?void 0:g.direction,o=((f=t.state.data)==null?void 0:f.pages)||[],s=((y=t.state.data)==null?void 0:y.pageParams)||[];let l={pages:[],pageParams:[]},u=0;const d=async()=>{let m=!1;const b=k=>{Object.defineProperty(k,"signal",{enumerable:!0,get:()=>(t.signal.aborted?m=!0:t.signal.addEventListener("abort",()=>{m=!0}),t.signal)})},v=yc(t.options,t.fetchOptions),x=async(k,S,E)=>{if(m)return Promise.reject();if(S==null&&k.pages.length)return Promise.resolve(k);const A=(()=>{const U={client:t.client,queryKey:t.queryKey,pageParam:S,direction:E?"backward":"forward",meta:t.options.meta};return b(U),U})(),$=await v(A),{maxPages:P}=t.options,j=E?Vm:Wm;return{pages:j(k.pages,$,P),pageParams:j(k.pageParams,S,P)}};if(a&&o.length){const k=a==="backward",S=k?sg:Xs,E={pages:o,pageParams:s},R=S(r,E);l=await x(E,R,k)}else{const k=e??o.length;do{const S=u===0?s[0]??r.initialPageParam:Xs(r,l);if(u>0&&S==null)break;l=await x(l,S),u++}while(u<k)}return l};t.options.persister?t.fetchFn=()=>{var m,b;return(b=(m=t.options).persister)==null?void 0:b.call(m,d,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=d}}}function Xs(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function sg(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var he,Tt,Rt,xn,kn,At,Sn,En,qi,ig=(qi=class{constructor(e={}){z(this,he);z(this,Tt);z(this,Rt);z(this,xn);z(this,kn);z(this,At);z(this,Sn);z(this,En);M(this,he,e.queryCache||new ng),M(this,Tt,e.mutationCache||new og),M(this,Rt,e.defaultOptions||{}),M(this,xn,new Map),M(this,kn,new Map),M(this,At,0)}mount(){gr(this,At)._++,w(this,At)===1&&(M(this,Sn,Yo.subscribe(async e=>{e&&(await this.resumePausedMutations(),w(this,he).onFocus())})),M(this,En,zr.subscribe(async e=>{e&&(await this.resumePausedMutations(),w(this,he).onOnline())})))}unmount(){var e,t;gr(this,At)._--,w(this,At)===0&&((e=w(this,Sn))==null||e.call(this),M(this,Sn,void 0),(t=w(this,En))==null||t.call(this),M(this,En,void 0))}isFetching(e){return w(this,he).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return w(this,Tt).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=w(this,he).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=w(this,he).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Nt(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return w(this,he).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),a=w(this,he).get(r.queryHash),o=a==null?void 0:a.state.data,s=qm(t,o);if(s!==void 0)return w(this,he).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return me.batch(()=>w(this,he).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=w(this,he).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=w(this,he);me.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=w(this,he);return me.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=me.batch(()=>w(this,he).findAll(e).map(a=>a.cancel(n)));return Promise.all(r).then(Re).catch(Re)}invalidateQueries(e,t={}){return me.batch(()=>(w(this,he).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=me.batch(()=>w(this,he).findAll(e).filter(a=>!a.isDisabled()&&!a.isStatic()).map(a=>{let o=a.fetch(void 0,n);return n.throwOnError||(o=o.catch(Re)),a.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(Re)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=w(this,he).build(this,t);return n.isStaleByTime(Nt(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Re).catch(Re)}fetchInfiniteQuery(e){return e.behavior=Qs(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Re).catch(Re)}ensureInfiniteQueryData(e){return e.behavior=Qs(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return zr.isOnline()?w(this,Tt).resumePausedMutations():Promise.resolve()}getQueryCache(){return w(this,he)}getMutationCache(){return w(this,Tt)}getDefaultOptions(){return w(this,Rt)}setDefaultOptions(e){M(this,Rt,e)}setQueryDefaults(e,t){w(this,xn).set(tr(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...w(this,xn).values()],n={};return t.forEach(r=>{nr(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){w(this,kn).set(tr(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...w(this,kn).values()],n={};return t.forEach(r=>{nr(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...w(this,Rt).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Jo(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Ko&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...w(this,Rt).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){w(this,he).clear(),w(this,Tt).clear()}},he=new WeakMap,Tt=new WeakMap,Rt=new WeakMap,xn=new WeakMap,kn=new WeakMap,At=new WeakMap,Sn=new WeakMap,En=new WeakMap,qi),Ee,Z,sr,ke,Gt,Tn,_t,Ct,ir,Rn,An,Wt,Vt,Pt,_n,ae,Jn,lo,co,uo,ho,fo,po,mo,Ec,Gi,lg=(Gi=class extends dr{constructor(t,n){super();z(this,ae);z(this,Ee);z(this,Z);z(this,sr);z(this,ke);z(this,Gt);z(this,Tn);z(this,_t);z(this,Ct);z(this,ir);z(this,Rn);z(this,An);z(this,Wt);z(this,Vt);z(this,Pt);z(this,_n,new Set);this.options=n,M(this,Ee,t),M(this,Ct,null),M(this,_t,io()),this.options.experimental_prefetchInRender||w(this,_t).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(w(this,Z).addObserver(this),Zs(w(this,Z),this.options)?X(this,ae,Jn).call(this):this.updateResult(),X(this,ae,ho).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return go(w(this,Z),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return go(w(this,Z),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,X(this,ae,fo).call(this),X(this,ae,po).call(this),w(this,Z).removeObserver(this)}setOptions(t){const n=this.options,r=w(this,Z);if(this.options=w(this,Ee).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Ie(this.options.enabled,w(this,Z))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");X(this,ae,mo).call(this),w(this,Z).setOptions(this.options),n._defaulted&&!ao(this.options,n)&&w(this,Ee).getQueryCache().notify({type:"observerOptionsUpdated",query:w(this,Z),observer:this});const a=this.hasListeners();a&&ei(w(this,Z),r,this.options,n)&&X(this,ae,Jn).call(this),this.updateResult(),a&&(w(this,Z)!==r||Ie(this.options.enabled,w(this,Z))!==Ie(n.enabled,w(this,Z))||Nt(this.options.staleTime,w(this,Z))!==Nt(n.staleTime,w(this,Z)))&&X(this,ae,lo).call(this);const o=X(this,ae,co).call(this);a&&(w(this,Z)!==r||Ie(this.options.enabled,w(this,Z))!==Ie(n.enabled,w(this,Z))||o!==w(this,Pt))&&X(this,ae,uo).call(this,o)}getOptimisticResult(t){const n=w(this,Ee).getQueryCache().build(w(this,Ee),t),r=this.createResult(n,t);return dg(this,r)&&(M(this,ke,r),M(this,Tn,this.options),M(this,Gt,w(this,Z).state)),r}getCurrentResult(){return w(this,ke)}trackResult(t,n){return new Proxy(t,{get:(r,a)=>(this.trackProp(a),n==null||n(a),Reflect.get(r,a))})}trackProp(t){w(this,_n).add(t)}getCurrentQuery(){return w(this,Z)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const n=w(this,Ee).defaultQueryOptions(t),r=w(this,Ee).getQueryCache().build(w(this,Ee),n);return r.fetch().then(()=>this.createResult(r,n))}fetch(t){return X(this,ae,Jn).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),w(this,ke)))}createResult(t,n){var P;const r=w(this,Z),a=this.options,o=w(this,ke),s=w(this,Gt),l=w(this,Tn),d=t!==r?t.state:w(this,sr),{state:h}=t;let p={...h},g=!1,f;if(n._optimisticResults){const j=this.hasListeners(),U=!j&&Zs(t,n),D=j&&ei(t,r,n,a);(U||D)&&(p={...p,...Sc(h.data,t.options)}),n._optimisticResults==="isRestoring"&&(p.fetchStatus="idle")}let{error:y,errorUpdatedAt:m,status:b}=p;f=p.data;let v=!1;if(n.placeholderData!==void 0&&f===void 0&&b==="pending"){let j;o!=null&&o.isPlaceholderData&&n.placeholderData===(l==null?void 0:l.placeholderData)?(j=o.data,v=!0):j=typeof n.placeholderData=="function"?n.placeholderData((P=w(this,An))==null?void 0:P.state.data,w(this,An)):n.placeholderData,j!==void 0&&(b="success",f=so(o==null?void 0:o.data,j,n),g=!0)}if(n.select&&f!==void 0&&!v)if(o&&f===(s==null?void 0:s.data)&&n.select===w(this,ir))f=w(this,Rn);else try{M(this,ir,n.select),f=n.select(f),f=so(o==null?void 0:o.data,f,n),M(this,Rn,f),M(this,Ct,null)}catch(j){M(this,Ct,j)}w(this,Ct)&&(y=w(this,Ct),f=w(this,Rn),m=Date.now(),b="error");const x=p.fetchStatus==="fetching",k=b==="pending",S=b==="error",E=k&&x,R=f!==void 0,$={status:b,fetchStatus:p.fetchStatus,isPending:k,isSuccess:b==="success",isError:S,isInitialLoading:E,isLoading:E,data:f,dataUpdatedAt:p.dataUpdatedAt,error:y,errorUpdatedAt:m,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>d.dataUpdateCount||p.errorUpdateCount>d.errorUpdateCount,isFetching:x,isRefetching:x&&!k,isLoadingError:S&&!R,isPaused:p.fetchStatus==="paused",isPlaceholderData:g,isRefetchError:S&&R,isStale:Qo(t,n),refetch:this.refetch,promise:w(this,_t),isEnabled:Ie(n.enabled,t)!==!1};if(this.options.experimental_prefetchInRender){const j=W=>{$.status==="error"?W.reject($.error):$.data!==void 0&&W.resolve($.data)},U=()=>{const W=M(this,_t,$.promise=io());j(W)},D=w(this,_t);switch(D.status){case"pending":t.queryHash===r.queryHash&&j(D);break;case"fulfilled":($.status==="error"||$.data!==D.value)&&U();break;case"rejected":($.status!=="error"||$.error!==D.reason)&&U();break}}return $}updateResult(){const t=w(this,ke),n=this.createResult(w(this,Z),this.options);if(M(this,Gt,w(this,Z).state),M(this,Tn,this.options),w(this,Gt).data!==void 0&&M(this,An,w(this,Z)),ao(n,t))return;M(this,ke,n);const r=()=>{if(!t)return!0;const{notifyOnChangeProps:a}=this.options,o=typeof a=="function"?a():a;if(o==="all"||!o&&!w(this,_n).size)return!0;const s=new Set(o??w(this,_n));return this.options.throwOnError&&s.add("error"),Object.keys(w(this,ke)).some(l=>{const u=l;return w(this,ke)[u]!==t[u]&&s.has(u)})};X(this,ae,Ec).call(this,{listeners:r()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&X(this,ae,ho).call(this)}},Ee=new WeakMap,Z=new WeakMap,sr=new WeakMap,ke=new WeakMap,Gt=new WeakMap,Tn=new WeakMap,_t=new WeakMap,Ct=new WeakMap,ir=new WeakMap,Rn=new WeakMap,An=new WeakMap,Wt=new WeakMap,Vt=new WeakMap,Pt=new WeakMap,_n=new WeakMap,ae=new WeakSet,Jn=function(t){X(this,ae,mo).call(this);let n=w(this,Z).fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(Re)),n},lo=function(){X(this,ae,fo).call(this);const t=Nt(this.options.staleTime,w(this,Z));if(Qt||w(this,ke).isStale||!ro(t))return;const r=gc(w(this,ke).dataUpdatedAt,t)+1;M(this,Wt,setTimeout(()=>{w(this,ke).isStale||this.updateResult()},r))},co=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(w(this,Z)):this.options.refetchInterval)??!1},uo=function(t){X(this,ae,po).call(this),M(this,Pt,t),!(Qt||Ie(this.options.enabled,w(this,Z))===!1||!ro(w(this,Pt))||w(this,Pt)===0)&&M(this,Vt,setInterval(()=>{(this.options.refetchIntervalInBackground||Yo.isFocused())&&X(this,ae,Jn).call(this)},w(this,Pt)))},ho=function(){X(this,ae,lo).call(this),X(this,ae,uo).call(this,X(this,ae,co).call(this))},fo=function(){w(this,Wt)&&(clearTimeout(w(this,Wt)),M(this,Wt,void 0))},po=function(){w(this,Vt)&&(clearInterval(w(this,Vt)),M(this,Vt,void 0))},mo=function(){const t=w(this,Ee).getQueryCache().build(w(this,Ee),this.options);if(t===w(this,Z))return;const n=w(this,Z);M(this,Z,t),M(this,sr,t.state),this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))},Ec=function(t){me.batch(()=>{t.listeners&&this.listeners.forEach(n=>{n(w(this,ke))}),w(this,Ee).getQueryCache().notify({query:w(this,Z),type:"observerResultsUpdated"})})},Gi);function cg(e,t){return Ie(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Zs(e,t){return cg(e,t)||e.state.data!==void 0&&go(e,t,t.refetchOnMount)}function go(e,t,n){if(Ie(t.enabled,e)!==!1&&Nt(t.staleTime,e)!=="static"){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Qo(e,t)}return!1}function ei(e,t,n,r){return(e!==t||Ie(r.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&Qo(e,n)}function Qo(e,t){return Ie(t.enabled,e)!==!1&&e.isStaleByTime(Nt(t.staleTime,e))}function dg(e,t){return!ao(e.getCurrentResult(),t)}var Tc=c.createContext(void 0),ug=e=>{const t=c.useContext(Tc);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},hg=({client:e,children:t})=>(c.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),i.jsx(Tc.Provider,{value:e,children:t})),Rc=c.createContext(!1),fg=()=>c.useContext(Rc);Rc.Provider;function pg(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var mg=c.createContext(pg()),gg=()=>c.useContext(mg),bg=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},yg=e=>{c.useEffect(()=>{e.clearReset()},[e])},wg=({result:e,errorResetBoundary:t,throwOnError:n,query:r,suspense:a})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(a&&e.data===void 0||Jm(n,[e.error,r])),vg=e=>{if(e.suspense){const t=r=>r==="static"?r:Math.max(r??1e3,1e3),n=e.staleTime;e.staleTime=typeof n=="function"?(...r)=>t(n(...r)):t(n),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},xg=(e,t)=>e.isLoading&&e.isFetching&&!t,kg=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,ti=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function Sg(e,t,n){var p,g,f,y,m;const r=fg(),a=gg(),o=ug(),s=o.defaultQueryOptions(e);(g=(p=o.getDefaultOptions().queries)==null?void 0:p._experimental_beforeQuery)==null||g.call(p,s),s._optimisticResults=r?"isRestoring":"optimistic",vg(s),bg(s,a),yg(a);const l=!o.getQueryCache().get(s.queryHash),[u]=c.useState(()=>new t(o,s)),d=u.getOptimisticResult(s),h=!r&&e.subscribed!==!1;if(c.useSyncExternalStore(c.useCallback(b=>{const v=h?u.subscribe(me.batchCalls(b)):Re;return u.updateResult(),v},[u,h]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),c.useEffect(()=>{u.setOptions(s)},[s,u]),kg(s,d))throw ti(s,u,a);if(wg({result:d,errorResetBoundary:a,throwOnError:s.throwOnError,query:o.getQueryCache().get(s.queryHash),suspense:s.suspense}))throw d.error;if((y=(f=o.getDefaultOptions().queries)==null?void 0:f._experimental_afterQuery)==null||y.call(f,s,d),s.experimental_prefetchInRender&&!Qt&&xg(d,r)){const b=l?ti(s,u,a):(m=o.getQueryCache().get(s.queryHash))==null?void 0:m.promise;b==null||b.catch(Re).finally(()=>{u.updateResult()})}return s.notifyOnChangeProps?d:u.trackResult(d)}function Ac(e,t){return Sg(e,lg)}var Eg=typeof Element<"u",Tg=typeof Map=="function",Rg=typeof Set=="function",Ag=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ir(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,a;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Ir(e[r],t[r]))return!1;return!0}var o;if(Tg&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!Ir(r.value[1],t.get(r.value[0])))return!1;return!0}if(Rg&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Ag&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;if(Eg&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((a[r]==="_owner"||a[r]==="__v"||a[r]==="__o")&&e.$$typeof)&&!Ir(e[a[r]],t[a[r]]))return!1;return!0}return e!==e&&t!==t}var _g=function(t,n){try{return Ir(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Cg=Ao(_g);var Pg=function(e,t,n,r,a,o,s,l){if(!e){var u;if(t===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,r,a,o,s,l],h=0;u=new Error(t.replace(/%s/g,function(){return d[h++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},Ng=Pg;const ni=Ao(Ng);var Og=function(t,n,r,a){var o=r?r.call(a,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),d=0;d<s.length;d++){var h=s[d];if(!u(h))return!1;var p=t[h],g=n[h];if(o=r?r.call(a,p,g,h):void 0,o===!1||o===void 0&&p!==g)return!1}return!0};const jg=Ao(Og);var _c=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(_c||{}),_a={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},ri=Object.values(_c),Xo={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Ig=Object.entries(Xo).reduce((e,[t,n])=>(e[n]=t,e),{}),ze="data-rh",pn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},mn=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},Dg=e=>{let t=mn(e,"title");const n=mn(e,pn.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=mn(e,pn.DEFAULT_TITLE);return t||r||void 0},$g=e=>mn(e,pn.ON_CHANGE_CLIENT_STATE)||(()=>{}),Ca=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),Lg=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const a=Object.keys(r);for(let o=0;o<a.length;o+=1){const l=a[o].toLowerCase();if(e.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),Mg=e=>console&&typeof console.warn=="function"&&console.warn(e),qn=(e,t,n)=>{const r={};return n.filter(a=>Array.isArray(a[e])?!0:(typeof a[e]<"u"&&Mg(`Helmet: ${e} should be of type "Array". Instead found type "${typeof a[e]}"`),!1)).map(a=>a[e]).reverse().reduce((a,o)=>{const s={};o.filter(u=>{let d;const h=Object.keys(u);for(let g=0;g<h.length;g+=1){const f=h[g],y=f.toLowerCase();t.indexOf(y)!==-1&&!(d==="rel"&&u[d].toLowerCase()==="canonical")&&!(y==="rel"&&u[y].toLowerCase()==="stylesheet")&&(d=y),t.indexOf(f)!==-1&&(f==="innerHTML"||f==="cssText"||f==="itemprop")&&(d=f)}if(!d||!u[d])return!1;const p=u[d].toLowerCase();return r[d]||(r[d]={}),s[d]||(s[d]={}),r[d][p]?!1:(s[d][p]=!0,!0)}).reverse().forEach(u=>a.push(u));const l=Object.keys(s);for(let u=0;u<l.length;u+=1){const d=l[u],h={...r[d],...s[d]};r[d]=h}return a},[]).reverse()},Fg=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},Hg=e=>({baseTag:Lg(["href"],e),bodyAttributes:Ca("bodyAttributes",e),defer:mn(e,pn.DEFER),encode:mn(e,pn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ca("htmlAttributes",e),linkTags:qn("link",["rel","href"],e),metaTags:qn("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:qn("noscript",["innerHTML"],e),onChangeClientState:$g(e),scriptTags:qn("script",["src","innerHTML"],e),styleTags:qn("style",["cssText"],e),title:Dg(e),titleAttributes:Ca("titleAttributes",e),prioritizeSeoTags:Fg(e,pn.PRIORITIZE_SEO_TAGS)}),Cc=e=>Array.isArray(e)?e.join(""):e,Ug=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Pa=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(Ug(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},ai=(e,t)=>({...e,[t]:void 0}),Bg=["noscript","script","style"],bo=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Pc=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),zg=(e,t,n,r)=>{const a=Pc(n),o=Cc(t);return a?`<${e} ${ze}="true" ${a}>${bo(o,r)}</${e}>`:`<${e} ${ze}="true">${bo(o,r)}</${e}>`},qg=(e,t,n=!0)=>t.reduce((r,a)=>{const o=a,s=Object.keys(o).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,h)=>{const p=typeof o[h]>"u"?h:`${h}="${bo(o[h],n)}"`;return d?`${d} ${p}`:p},""),l=o.innerHTML||o.cssText||"",u=Bg.indexOf(e)===-1;return`${r}<${e} ${ze}="true" ${s}${u?"/>":`>${l}</${e}>`}`},""),Nc=(e,t={})=>Object.keys(e).reduce((n,r)=>{const a=Xo[r];return n[a||r]=e[r],n},t),Gg=(e,t,n)=>{const r={key:t,[ze]:!0},a=Nc(n,r);return[C.createElement("title",a,t)]},Dr=(e,t)=>t.map((n,r)=>{const a={key:r,[ze]:!0};return Object.keys(n).forEach(o=>{const l=Xo[o]||o;if(l==="innerHTML"||l==="cssText"){const u=n.innerHTML||n.cssText;a.dangerouslySetInnerHTML={__html:u}}else a[l]=n[o]}),C.createElement(e,a)}),Oe=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>Gg(e,t.title,t.titleAttributes),toString:()=>zg(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Nc(t),toString:()=>Pc(t)};default:return{toComponent:()=>Dr(e,t),toString:()=>qg(e,t,n)}}},Wg=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const a=Pa(e,_a.meta),o=Pa(t,_a.link),s=Pa(n,_a.script);return{priorityMethods:{toComponent:()=>[...Dr("meta",a.priority),...Dr("link",o.priority),...Dr("script",s.priority)],toString:()=>`${Oe("meta",a.priority,r)} ${Oe("link",o.priority,r)} ${Oe("script",s.priority,r)}`},metaTags:a.default,linkTags:o.default,scriptTags:s.default}},Vg=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:a,noscriptTags:o,styleTags:s,title:l="",titleAttributes:u,prioritizeSeoTags:d}=e;let{linkTags:h,metaTags:p,scriptTags:g}=e,f={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:f,linkTags:h,metaTags:p,scriptTags:g}=Wg(e)),{priority:f,base:Oe("base",t,r),bodyAttributes:Oe("bodyAttributes",n,r),htmlAttributes:Oe("htmlAttributes",a,r),link:Oe("link",h,r),meta:Oe("meta",p,r),noscript:Oe("noscript",o,r),script:Oe("script",g,r),style:Oe("style",s,r),title:Oe("title",{title:l,titleAttributes:u},r)}},yo=Vg,kr=[],Oc=!!(typeof window<"u"&&window.document&&window.document.createElement),wo=class{constructor(e,t){it(this,"instances",[]);it(this,"canUseDOM",Oc);it(this,"context");it(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?kr:this.instances,add:e=>{(this.canUseDOM?kr:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?kr:this.instances).indexOf(e);(this.canUseDOM?kr:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=yo({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Jg={},jc=C.createContext(Jg),Jt,Ic=(Jt=class extends c.Component{constructor(n){super(n);it(this,"helmetData");this.helmetData=new wo(this.props.context||{},Jt.canUseDOM)}render(){return C.createElement(jc.Provider,{value:this.helmetData.value},this.props.children)}},it(Jt,"canUseDOM",Oc),Jt),on=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${ze}]`),a=[].slice.call(r),o=[];let s;return t&&t.length&&t.forEach(l=>{const u=document.createElement(e);for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d))if(d==="innerHTML")u.innerHTML=l.innerHTML;else if(d==="cssText")u.styleSheet?u.styleSheet.cssText=l.cssText:u.appendChild(document.createTextNode(l.cssText));else{const h=d,p=typeof l[h]>"u"?"":l[h];u.setAttribute(d,p)}u.setAttribute(ze,"true"),a.some((d,h)=>(s=h,u.isEqualNode(d)))?a.splice(s,1):o.push(u)}),a.forEach(l=>{var u;return(u=l.parentNode)==null?void 0:u.removeChild(l)}),o.forEach(l=>n.appendChild(l)),{oldTags:a,newTags:o}},vo=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(ze),a=r?r.split(","):[],o=[...a],s=Object.keys(t);for(const l of s){const u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),a.indexOf(l)===-1&&a.push(l);const d=o.indexOf(l);d!==-1&&o.splice(d,1)}for(let l=o.length-1;l>=0;l-=1)n.removeAttribute(o[l]);a.length===o.length?n.removeAttribute(ze):n.getAttribute(ze)!==s.join(",")&&n.setAttribute(ze,s.join(","))},Kg=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Cc(e)),vo("title",t)},oi=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:a,linkTags:o,metaTags:s,noscriptTags:l,onChangeClientState:u,scriptTags:d,styleTags:h,title:p,titleAttributes:g}=e;vo("body",r),vo("html",a),Kg(p,g);const f={baseTag:on("base",n),linkTags:on("link",o),metaTags:on("meta",s),noscriptTags:on("noscript",l),scriptTags:on("script",d),styleTags:on("style",h)},y={},m={};Object.keys(f).forEach(b=>{const{newTags:v,oldTags:x}=f[b];v.length&&(y[b]=v),x.length&&(m[b]=f[b].oldTags)}),t&&t(),u(e,y,m)},Gn=null,Yg=e=>{Gn&&cancelAnimationFrame(Gn),e.defer?Gn=requestAnimationFrame(()=>{oi(e,()=>{Gn=null})}):(oi(e),Gn=null)},Qg=Yg,si=class extends c.Component{constructor(){super(...arguments);it(this,"rendered",!1)}shouldComponentUpdate(t){return!jg(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const a=Hg(t.get().map(o=>{const s={...o.props};return delete s.context,s}));Ic.canUseDOM?Qg(a):yo&&(r=yo(a)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Ga,Xg=(Ga=class extends c.Component{shouldComponentUpdate(e){return!Cg(ai(this.props,"helmetData"),ai(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return ni(ri.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${ri.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),ni(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return C.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:a,...o}=r.props,s=Object.keys(o).reduce((u,d)=>(u[Ig[d]||d]=o[d],u),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,a),l){case"Symbol(react.fragment)":t=this.mapChildrenToProps(a,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,a);break;default:t=this.mapObjectTypeChildren(r,t,s,a);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof wo)){const a=r;r=new wo(a.context,!0),delete n.helmetData}return r?C.createElement(si,{...n,context:r.value}):C.createElement(jc.Consumer,null,a=>C.createElement(si,{...n,context:a}))}},it(Ga,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Ga);const Zg=jo("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",hero:"bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.5)]",heroOutline:"border border-primary/40 text-foreground bg-transparent font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary",glass:"border border-border bg-background/70 backdrop-blur-md text-foreground hover:border-primary/50 hover:text-primary"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-sm px-3",lg:"h-12 rounded-sm px-7 text-sm",xl:"h-14 rounded-sm px-10 text-base",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ze=c.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...a},o)=>{const s=r?Ou:"button";return i.jsx(s,{className:Q(Zg({variant:t,size:n,className:e})),ref:o,...a})});Ze.displayName="Button";let xo;const ko=[];function eb(e){xo=e;for(const t of ko)e.capture(...t);ko.length=0}const tb={capture:(...e)=>{if(xo)return xo.capture(...e);ko.push(e)}};function Fn(){return tb}function nb({theme:e,toggleTheme:t}){const n=Fn(),r=()=>{t(),n==null||n.capture("theme_toggled",{theme:e==="dark"?"light":"dark"})};return i.jsx(Ze,{variant:"glass",size:"icon",onClick:r,"aria-label":`Switch to ${e==="dark"?"light":"dark"} mode`,title:`Switch to ${e==="dark"?"light":"dark"} mode`,className:"relative overflow-hidden",children:i.jsx("div",{className:"transition-transform duration-300 ease-in-out",style:{transform:`rotate(${e==="dark"?0:180}deg)`},children:e==="dark"?i.jsx(_l,{className:"h-5 w-5"}):i.jsx(Lh,{className:"h-5 w-5"})})})}var Na="focusScope.autoFocusOnMount",Oa="focusScope.autoFocusOnUnmount",ii={bubbles:!1,cancelable:!0},rb="FocusScope",Dc=c.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:o,...s}=e,[l,u]=c.useState(null),d=ge(a),h=ge(o),p=c.useRef(null),g=pe(t,m=>u(m)),f=c.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.useEffect(()=>{if(r){let m=function(k){if(f.paused||!l)return;const S=k.target;l.contains(S)?p.current=S:kt(p.current,{select:!0})},b=function(k){if(f.paused||!l)return;const S=k.relatedTarget;S!==null&&(l.contains(S)||kt(p.current,{select:!0}))},v=function(k){if(document.activeElement===document.body)for(const E of k)E.removedNodes.length>0&&kt(l)};document.addEventListener("focusin",m),document.addEventListener("focusout",b);const x=new MutationObserver(v);return l&&x.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",m),document.removeEventListener("focusout",b),x.disconnect()}}},[r,l,f.paused]),c.useEffect(()=>{if(l){ci.add(f);const m=document.activeElement;if(!l.contains(m)){const v=new CustomEvent(Na,ii);l.addEventListener(Na,d),l.dispatchEvent(v),v.defaultPrevented||(ab(cb($c(l)),{select:!0}),document.activeElement===m&&kt(l))}return()=>{l.removeEventListener(Na,d),setTimeout(()=>{const v=new CustomEvent(Oa,ii);l.addEventListener(Oa,h),l.dispatchEvent(v),v.defaultPrevented||kt(m??document.body,{select:!0}),l.removeEventListener(Oa,h),ci.remove(f)},0)}}},[l,d,h,f]);const y=c.useCallback(m=>{if(!n&&!r||f.paused)return;const b=m.key==="Tab"&&!m.altKey&&!m.ctrlKey&&!m.metaKey,v=document.activeElement;if(b&&v){const x=m.currentTarget,[k,S]=ob(x);k&&S?!m.shiftKey&&v===S?(m.preventDefault(),n&&kt(k,{select:!0})):m.shiftKey&&v===k&&(m.preventDefault(),n&&kt(S,{select:!0})):v===x&&m.preventDefault()}},[n,r,f.paused]);return i.jsx(te.div,{tabIndex:-1,...s,ref:g,onKeyDown:y})});Dc.displayName=rb;function ab(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(kt(r,{select:t}),document.activeElement!==n)return}function ob(e){const t=$c(e),n=li(t,e),r=li(t.reverse(),e);return[n,r]}function $c(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function li(e,t){for(const n of e)if(!sb(n,{upTo:t}))return n}function sb(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function ib(e){return e instanceof HTMLInputElement&&"select"in e}function kt(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&ib(e)&&t&&e.select()}}var ci=lb();function lb(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=di(e,t),e.unshift(t)},remove(t){var n;e=di(e,t),(n=e[0])==null||n.resume()}}}function di(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function cb(e){return e.filter(t=>t.tagName!=="A")}var ja=0;function db(){c.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??ui()),document.body.insertAdjacentElement("beforeend",e[1]??ui()),ja++,()=>{ja===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),ja--}},[])}function ui(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Qe=function(){return Qe=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Qe.apply(this,arguments)};function Lc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function ub(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,o;r<a;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var $r="right-scroll-bar-position",Lr="width-before-scroll-bar",hb="with-scroll-bars-hidden",fb="--removed-body-scroll-bar-size";function Ia(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function pb(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var mb=typeof window<"u"?c.useLayoutEffect:c.useEffect,hi=new WeakMap;function gb(e,t){var n=pb(null,function(r){return e.forEach(function(a){return Ia(a,r)})});return mb(function(){var r=hi.get(n);if(r){var a=new Set(r),o=new Set(e),s=n.current;a.forEach(function(l){o.has(l)||Ia(l,null)}),o.forEach(function(l){a.has(l)||Ia(l,s)})}hi.set(n,e)},[e]),n}function bb(e){return e}function yb(e,t){t===void 0&&(t=bb);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(o){var s=t(o,r);return n.push(s),function(){n=n.filter(function(l){return l!==s})}},assignSyncMedium:function(o){for(r=!0;n.length;){var s=n;n=[],s.forEach(o)}n={push:function(l){return o(l)},filter:function(){return n}}},assignMedium:function(o){r=!0;var s=[];if(n.length){var l=n;n=[],l.forEach(o),s=n}var u=function(){var h=s;s=[],h.forEach(o)},d=function(){return Promise.resolve().then(u)};d(),n={push:function(h){s.push(h),d()},filter:function(h){return s=s.filter(h),n}}}};return a}function wb(e){e===void 0&&(e={});var t=yb(null);return t.options=Qe({async:!0,ssr:!1},e),t}var Mc=function(e){var t=e.sideCar,n=Lc(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return c.createElement(r,Qe({},n))};Mc.isSideCarExport=!0;function vb(e,t){return e.useMedium(t),Mc}var Fc=wb(),Da=function(){},sa=c.forwardRef(function(e,t){var n=c.useRef(null),r=c.useState({onScrollCapture:Da,onWheelCapture:Da,onTouchMoveCapture:Da}),a=r[0],o=r[1],s=e.forwardProps,l=e.children,u=e.className,d=e.removeScrollBar,h=e.enabled,p=e.shards,g=e.sideCar,f=e.noRelative,y=e.noIsolation,m=e.inert,b=e.allowPinchZoom,v=e.as,x=v===void 0?"div":v,k=e.gapMode,S=Lc(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=g,R=gb([n,t]),A=Qe(Qe({},S),a);return c.createElement(c.Fragment,null,h&&c.createElement(E,{sideCar:Fc,removeScrollBar:d,shards:p,noRelative:f,noIsolation:y,inert:m,setCallbacks:o,allowPinchZoom:!!b,lockRef:n,gapMode:k}),s?c.cloneElement(c.Children.only(l),Qe(Qe({},A),{ref:R})):c.createElement(x,Qe({},A,{className:u,ref:R}),l))});sa.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};sa.classNames={fullWidth:Lr,zeroRight:$r};var xb=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function kb(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=xb();return t&&e.setAttribute("nonce",t),e}function Sb(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Eb(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Tb=function(){var e=0,t=null;return{add:function(n){e==0&&(t=kb())&&(Sb(t,n),Eb(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Rb=function(){var e=Tb();return function(t,n){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Hc=function(){var e=Rb(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},Ab={left:0,top:0,right:0,gap:0},$a=function(e){return parseInt(e||"",10)||0},_b=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[$a(n),$a(r),$a(a)]},Cb=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Ab;var t=_b(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Pb=Hc(),gn="data-scroll-locked",Nb=function(e,t,n,r){var a=e.left,o=e.top,s=e.right,l=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(hb,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(l,"px ").concat(r,`;
  }
  body[`).concat(gn,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat($r,` {
    right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(Lr,` {
    margin-right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat($r," .").concat($r,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Lr," .").concat(Lr,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(gn,`] {
    `).concat(fb,": ").concat(l,`px;
  }
`)},fi=function(){var e=parseInt(document.body.getAttribute(gn)||"0",10);return isFinite(e)?e:0},Ob=function(){c.useEffect(function(){return document.body.setAttribute(gn,(fi()+1).toString()),function(){var e=fi()-1;e<=0?document.body.removeAttribute(gn):document.body.setAttribute(gn,e.toString())}},[])},jb=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;Ob();var o=c.useMemo(function(){return Cb(a)},[a]);return c.createElement(Pb,{styles:Nb(o,!t,a,n?"":"!important")})},So=!1;if(typeof window<"u")try{var Sr=Object.defineProperty({},"passive",{get:function(){return So=!0,!0}});window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{So=!1}var sn=So?{passive:!1}:!1,Ib=function(e){return e.tagName==="TEXTAREA"},Uc=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Ib(e)&&n[t]==="visible")},Db=function(e){return Uc(e,"overflowY")},$b=function(e){return Uc(e,"overflowX")},pi=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=Bc(e,r);if(a){var o=zc(e,r),s=o[1],l=o[2];if(s>l)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Lb=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Mb=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Bc=function(e,t){return e==="v"?Db(t):$b(t)},zc=function(e,t){return e==="v"?Lb(t):Mb(t)},Fb=function(e,t){return e==="h"&&t==="rtl"?-1:1},Hb=function(e,t,n,r,a){var o=Fb(e,window.getComputedStyle(t).direction),s=o*r,l=n.target,u=t.contains(l),d=!1,h=s>0,p=0,g=0;do{if(!l)break;var f=zc(e,l),y=f[0],m=f[1],b=f[2],v=m-b-o*y;(y||v)&&Bc(e,l)&&(p+=v,g+=y);var x=l.parentNode;l=x&&x.nodeType===Node.DOCUMENT_FRAGMENT_NODE?x.host:x}while(!u&&l!==document.body||u&&(t.contains(l)||t===l));return(h&&(Math.abs(p)<1||!a)||!h&&(Math.abs(g)<1||!a))&&(d=!0),d},Er=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},mi=function(e){return[e.deltaX,e.deltaY]},gi=function(e){return e&&"current"in e?e.current:e},Ub=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Bb=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},zb=0,ln=[];function qb(e){var t=c.useRef([]),n=c.useRef([0,0]),r=c.useRef(),a=c.useState(zb++)[0],o=c.useState(Hc)[0],s=c.useRef(e);c.useEffect(function(){s.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var m=ub([e.lockRef.current],(e.shards||[]).map(gi),!0).filter(Boolean);return m.forEach(function(b){return b.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),m.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var l=c.useCallback(function(m,b){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!s.current.allowPinchZoom;var v=Er(m),x=n.current,k="deltaX"in m?m.deltaX:x[0]-v[0],S="deltaY"in m?m.deltaY:x[1]-v[1],E,R=m.target,A=Math.abs(k)>Math.abs(S)?"h":"v";if("touches"in m&&A==="h"&&R.type==="range")return!1;var $=pi(A,R);if(!$)return!0;if($?E=A:(E=A==="v"?"h":"v",$=pi(A,R)),!$)return!1;if(!r.current&&"changedTouches"in m&&(k||S)&&(r.current=E),!E)return!0;var P=r.current||E;return Hb(P,b,m,P==="h"?k:S,!0)},[]),u=c.useCallback(function(m){var b=m;if(!(!ln.length||ln[ln.length-1]!==o)){var v="deltaY"in b?mi(b):Er(b),x=t.current.filter(function(E){return E.name===b.type&&(E.target===b.target||b.target===E.shadowParent)&&Ub(E.delta,v)})[0];if(x&&x.should){b.cancelable&&b.preventDefault();return}if(!x){var k=(s.current.shards||[]).map(gi).filter(Boolean).filter(function(E){return E.contains(b.target)}),S=k.length>0?l(b,k[0]):!s.current.noIsolation;S&&b.cancelable&&b.preventDefault()}}},[]),d=c.useCallback(function(m,b,v,x){var k={name:m,delta:b,target:v,should:x,shadowParent:Gb(v)};t.current.push(k),setTimeout(function(){t.current=t.current.filter(function(S){return S!==k})},1)},[]),h=c.useCallback(function(m){n.current=Er(m),r.current=void 0},[]),p=c.useCallback(function(m){d(m.type,mi(m),m.target,l(m,e.lockRef.current))},[]),g=c.useCallback(function(m){d(m.type,Er(m),m.target,l(m,e.lockRef.current))},[]);c.useEffect(function(){return ln.push(o),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:g}),document.addEventListener("wheel",u,sn),document.addEventListener("touchmove",u,sn),document.addEventListener("touchstart",h,sn),function(){ln=ln.filter(function(m){return m!==o}),document.removeEventListener("wheel",u,sn),document.removeEventListener("touchmove",u,sn),document.removeEventListener("touchstart",h,sn)}},[]);var f=e.removeScrollBar,y=e.inert;return c.createElement(c.Fragment,null,y?c.createElement(o,{styles:Bb(a)}):null,f?c.createElement(jb,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Gb(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Wb=vb(Fc,qb);var qc=c.forwardRef(function(e,t){return c.createElement(sa,Qe({},e,{ref:t,sideCar:Wb}))});qc.classNames=sa.classNames;var Vb=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},cn=new WeakMap,Tr=new WeakMap,Rr={},La=0,Gc=function(e){return e&&(e.host||Gc(e.parentNode))},Jb=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Gc(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Kb=function(e,t,n,r){var a=Jb(t,Array.isArray(e)?e:[e]);Rr[n]||(Rr[n]=new WeakMap);var o=Rr[n],s=[],l=new Set,u=new Set(a),d=function(p){!p||l.has(p)||(l.add(p),d(p.parentNode))};a.forEach(d);var h=function(p){!p||u.has(p)||Array.prototype.forEach.call(p.children,function(g){if(l.has(g))h(g);else try{var f=g.getAttribute(r),y=f!==null&&f!=="false",m=(cn.get(g)||0)+1,b=(o.get(g)||0)+1;cn.set(g,m),o.set(g,b),s.push(g),m===1&&y&&Tr.set(g,!0),b===1&&g.setAttribute(n,"true"),y||g.setAttribute(r,"true")}catch(v){console.error("aria-hidden: cannot operate on ",g,v)}})};return h(t),l.clear(),La++,function(){s.forEach(function(p){var g=cn.get(p)-1,f=o.get(p)-1;cn.set(p,g),o.set(p,f),g||(Tr.has(p)||p.removeAttribute(r),Tr.delete(p)),f||p.removeAttribute(n)}),La--,La||(cn=new WeakMap,cn=new WeakMap,Tr=new WeakMap,Rr={})}},Yb=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=Vb(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),Kb(r,a,n,"aria-hidden")):function(){return null}},ia="Dialog",[Wc,qv]=Dn(ia),[Qb,We]=Wc(ia),Vc=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:o,modal:s=!0}=e,l=c.useRef(null),u=c.useRef(null),[d,h]=rl({prop:r,defaultProp:a??!1,onChange:o,caller:ia});return i.jsx(Qb,{scope:t,triggerRef:l,contentRef:u,contentId:ht(),titleId:ht(),descriptionId:ht(),open:d,onOpenChange:h,onOpenToggle:c.useCallback(()=>h(p=>!p),[h]),modal:s,children:n})};Vc.displayName=ia;var Jc="DialogTrigger",Kc=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=We(Jc,n),o=pe(t,a.triggerRef);return i.jsx(te.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":ts(a.open),...r,ref:o,onClick:re(e.onClick,a.onOpenToggle)})});Kc.displayName=Jc;var Zo="DialogPortal",[Xb,Yc]=Wc(Zo,{forceMount:void 0}),Qc=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:a}=e,o=We(Zo,t);return i.jsx(Xb,{scope:t,forceMount:n,children:c.Children.map(r,s=>i.jsx(rt,{present:n||o.open,children:i.jsx(Co,{asChild:!0,container:a,children:s})}))})};Qc.displayName=Zo;var qr="DialogOverlay",Xc=c.forwardRef((e,t)=>{const n=Yc(qr,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,o=We(qr,e.__scopeDialog);return o.modal?i.jsx(rt,{present:r||o.open,children:i.jsx(ey,{...a,ref:t})}):null});Xc.displayName=qr;var Zb=Qn("DialogOverlay.RemoveScroll"),ey=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=We(qr,n);return i.jsx(qc,{as:Zb,allowPinchZoom:!0,shards:[a.contentRef],children:i.jsx(te.div,{"data-state":ts(a.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),Xt="DialogContent",Zc=c.forwardRef((e,t)=>{const n=Yc(Xt,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,o=We(Xt,e.__scopeDialog);return i.jsx(rt,{present:r||o.open,children:o.modal?i.jsx(ty,{...a,ref:t}):i.jsx(ny,{...a,ref:t})})});Zc.displayName=Xt;var ty=c.forwardRef((e,t)=>{const n=We(Xt,e.__scopeDialog),r=c.useRef(null),a=pe(t,n.contentRef,r);return c.useEffect(()=>{const o=r.current;if(o)return Yb(o)},[]),i.jsx(ed,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:re(e.onCloseAutoFocus,o=>{var s;o.preventDefault(),(s=n.triggerRef.current)==null||s.focus()}),onPointerDownOutside:re(e.onPointerDownOutside,o=>{const s=o.detail.originalEvent,l=s.button===0&&s.ctrlKey===!0;(s.button===2||l)&&o.preventDefault()}),onFocusOutside:re(e.onFocusOutside,o=>o.preventDefault())})}),ny=c.forwardRef((e,t)=>{const n=We(Xt,e.__scopeDialog),r=c.useRef(!1),a=c.useRef(!1);return i.jsx(ed,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s,l;(s=e.onCloseAutoFocus)==null||s.call(e,o),o.defaultPrevented||(r.current||(l=n.triggerRef.current)==null||l.focus(),o.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:o=>{var u,d;(u=e.onInteractOutside)==null||u.call(e,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const s=o.target;((d=n.triggerRef.current)==null?void 0:d.contains(s))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&a.current&&o.preventDefault()}})}),ed=c.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:o,...s}=e,l=We(Xt,n),u=c.useRef(null),d=pe(t,u);return db(),i.jsxs(i.Fragment,{children:[i.jsx(Dc,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:o,children:i.jsx(Yr,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":ts(l.open),...s,ref:d,onDismiss:()=>l.onOpenChange(!1)})}),i.jsxs(i.Fragment,{children:[i.jsx(ry,{titleId:l.titleId}),i.jsx(oy,{contentRef:u,descriptionId:l.descriptionId})]})]})}),es="DialogTitle",td=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=We(es,n);return i.jsx(te.h2,{id:a.titleId,...r,ref:t})});td.displayName=es;var nd="DialogDescription",rd=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=We(nd,n);return i.jsx(te.p,{id:a.descriptionId,...r,ref:t})});rd.displayName=nd;var ad="DialogClose",od=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=We(ad,n);return i.jsx(te.button,{type:"button",...r,ref:t,onClick:re(e.onClick,()=>a.onOpenChange(!1))})});od.displayName=ad;function ts(e){return e?"open":"closed"}var sd="DialogTitleWarning",[Gv,id]=Pu(sd,{contentName:Xt,titleName:es,docsSlug:"dialog"}),ry=({titleId:e})=>{const t=id(sd),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return c.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},ay="DialogDescriptionWarning",oy=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${id(ay).contentName}}.`;return c.useEffect(()=>{var o;const a=(o=e.current)==null?void 0:o.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},ns=Vc,sy=Kc,rs=Qc,ur=Xc,hr=Zc,la=td,ca=rd,as=od;const iy=ns,ly=sy,Ar=as,cy=rs,ld=c.forwardRef(({className:e,...t},n)=>i.jsx(ur,{className:Q("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:n}));ld.displayName=ur.displayName;const dy=jo("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),cd=c.forwardRef(({side:e="right",className:t,children:n,...r},a)=>i.jsxs(cy,{children:[i.jsx(ld,{}),i.jsxs(hr,{ref:a,className:Q(dy({side:e}),t),...r,children:[n,i.jsxs(as,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[i.jsx(ea,{className:"h-4 w-4"}),i.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));cd.displayName=hr.displayName;const dd=({className:e,...t})=>i.jsx("div",{className:Q("flex flex-col space-y-2 text-center sm:text-left",e),...t});dd.displayName="SheetHeader";const ud=c.forwardRef(({className:e,...t},n)=>i.jsx(la,{ref:n,className:Q("text-lg font-semibold text-foreground",e),...t}));ud.displayName=la.displayName;const hd=c.forwardRef(({className:e,...t},n)=>i.jsx(ca,{ref:n,className:Q("text-sm text-muted-foreground",e),...t}));hd.displayName=ca.displayName;function uy(e){const[t,n]=c.useState("");return c.useEffect(()=>{const r=()=>{const a=window.scrollY+200;for(const o of e){const s=document.getElementById(o);if(s){const{offsetTop:l,offsetHeight:u}=s;if(a>=l&&a<l+u){n(o);return}}}window.scrollY<100&&n("")};return r(),window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[e]),t}const bi="https://assets.calendly.com/assets/external/widget.css",hy="https://assets.calendly.com/assets/external/widget.js";let Wn=null;function fd(){if(document.querySelector(`link[href="${bi}"]`))return;const e=document.createElement("link");e.rel="stylesheet",e.href=bi,document.head.appendChild(e)}function pd(){return window.Calendly?Promise.resolve():Wn||(Wn=new Promise((e,t)=>{const n=document.createElement("script");n.src=hy,n.async=!0,n.onload=()=>e(),n.onerror=()=>{Wn=null,t(new Error("Failed to load Calendly widget"))},document.body.appendChild(n)}),Wn)}function Ma(){typeof document>"u"||(fd(),pd().catch(()=>{}))}async function Nn(e){var t;typeof document>"u"||(fd(),await pd(),(t=window.Calendly)==null||t.initPopupWidget({url:e}))}const we={name:"Abdelrahman Saed",role:"Senior Mobile Engineer",currentTitle:"Lead Mobile Engineer",subtitle:"Mobile Architecture · Platform · Scale",company:"iStoria",companyUrl:"https://istoria.app/en",location:"Cairo, Egypt / Remote",email:"me@bnsaed.com",avatarUrl:"https://avatars.githubusercontent.com/u/33700292?v=4",tagline:"I own mobile architecture, release governance, and delivery for a 5M-user app — leading a squad across a 50+ module Flutter codebase. 7 years building production iOS & Android, from offline-first data to release engineering."},fy={status:"open",label:"Available for hire",summary:"Open to Senior Mobile Engineering roles — full-time, fractional leadership, contract, or technical advisory. Remote worldwide, or hybrid / on-site across the Gulf & Egypt.",engagements:[{type:"Full-time",icon:"Briefcase",summary:"Senior / Lead Mobile Engineer",forWho:"For teams scaling a mobile app past its first million users.",outcome:"A mobile architecture and release process that ships weekly at 99.9% crash-free — owned end to end.",description:"Own mobile architecture, release governance, and a squad end to end — the way I do today at iStoria for a 5M+ user app."},{type:"Fractional Leadership",icon:"Clock",summary:"Part-time mobile lead",forWho:"For founders and teams without a senior mobile lead in the building.",outcome:"Architecture direction, a CI/CD pipeline, and a hiring bar — set in a few days a week, without a full-time hire.",description:"A few days a week: architecture reviews, CI/CD and release-engineering setup, and mentoring a growing Flutter team."},{type:"Contract",icon:"FileSignature",summary:"Fixed-scope delivery",forWho:"For a defined build, launch, or rescue with a real deadline.",outcome:"A shipped Flutter app, an untangled release pipeline, or hardened performance and crash-free stability — on a written scope.",description:"Ship a Flutter app, untangle a release pipeline, or harden performance, security, and crash-free stability for a fixed scope."},{type:"Technical Advisory",icon:"Compass",summary:"Architecture & release direction",forWho:"For teams that need senior direction, not another pair of hands.",outcome:"Confident architecture, release, and platform decisions — through reviews, RFC feedback, and a direct line to a mobile lead.",description:"Ongoing architecture reviews, release-strategy guidance, and RFC feedback on a light retainer — direction, not day-to-day implementation."}],workModes:["Remote (worldwide)","Hybrid / on-site (Gulf & Egypt)","Contract / freelance"],responseTime:"Replies within 24 hours",startDate:"Available on 2 weeks' notice",rate:"Discussed on call — scoped to engagement type"},py=7,ie={github:"https://github.com/binSaed",linkedin:"https://www.linkedin.com/in/binsaed/",linkedinRecommendations:"https://www.linkedin.com/in/binsaed/details/recommendations/",youtube:"https://www.youtube.com/@binSaed",stackoverflow:"https://stackoverflow.com/users/11001850/abdelrahman-saed",pubdev:"https://pub.dev/publishers/bnsaed.com/packages",cv:"https://bnsaed.com/CV/cv.pdf",email:"mailto:me@bnsaed.com",calendly:"https://calendly.com/bnsaed/meet"},Wv=["I build mobile systems that hold at scale. 7 years shipping production iOS and Android to 5M+ users — and the throughline is always the same: architecture that doesn't rot under growth, releases that ship on schedule, and teams that get sharper every sprint.","Today I lead a 4-engineer mobile squad at iStoria. I own the architecture, the release pipeline, and the engineering culture. We cut our release cycle from four weeks to one, held a 99.9% crash-free rate across 350+ releases, and built a platform where four engineers out-ship teams twice their size.","What I care about: making the right thing the default. Offline-first reads so no learner stares at a spinner. Failures as values so the app never crashes on an error path. Feature flags so deploy and release are separate decisions. The technology is the easy part — the hard part is building systems and teams where good decisions compound instead of decay."],Fa=[{value:"5M+",label:"Users reached"},{value:"350+",label:"Production releases"},{value:"99.9%",label:"Crash-free rate"},{value:"7+",label:"Years shipping mobile"},{value:"7+",label:"Open-source packages"},{value:"900+",label:"PRs reviewed"}],Vv=[{role:"Lead Mobile Engineer",company:"iStoria",companyUrl:"https://istoria.app/en/",context:"EdTech · English Language Learning",location:"Riyadh, Saudi Arabia (Hybrid)",period:"Jun 2025 – Present",stack:["Flutter","Dart","BLoC","Cubit","PowerSync","Drift","Firebase","Sentry","GitHub Actions","GraphQL"],highlights:["Lead a 4-engineer iOS/Android squad — architecture direction, hiring bar, release governance, and quarterly roadmaps for a 5M+ user base.","Cut the release cycle 75% (4 weeks → 1) via trunk-based development, feature flags, and end-to-end CI/CD ownership.","Architected a modular Flutter codebase with 50+ feature modules and 140+ routes, enforced through CI quality gates and code review.","Hardened production security end-to-end: PII masked in logs and Sentry, cleartext traffic disabled, and TLS certificate validation enforced."]},{role:"Founding Mobile Engineer",company:"iStoria",companyUrl:"https://istoria.app/en/",context:"EdTech · English Language Learning",location:"Riyadh, Saudi Arabia (Hybrid)",period:"Jan 2022 – Jun 2025 · 3 yrs 6 mos",stack:["Flutter","Dart","BLoC","Cubit","PowerSync","Drift","Codemagic","Firebase","RevenueCat","Adjust"],highlights:["Shipped flagship growth & AI features end-to-end: Leaderboard with social sharing, AI Read-with (speech recognition), and the iStro AI chat companion.","Designed offline-first infrastructure (PowerSync + Drift) — selective per-key sync, conflict resolution, and schema migration for millions of accounts.","Architected a cross-platform anti-piracy system (jailbreak/root/tamper detection + backend behavioral analysis) that auto-blocked 40,000+ abusive accounts.","Drove a sustained performance program: ~35% cold-start reduction, ~60% rendering gains, and ~20% memory reduction."]},{role:"Mobile Engineer",company:"Happy Trip",companyUrl:"https://www.linkedin.com/company/happytrip-ar",context:"Travel / Tourism Tech",location:"Cairo, Egypt",period:"Oct 2020 – Jan 2022 · 1 yr 4 mos",stack:["Flutter","Dart","REST","Firebase"],highlights:["Owned mobile delivery end-to-end across the Flutter team — task planning, code-review gates, and the release cadence for every ship.","Architected a networking SDK with multi-layer caching, request queueing, auto-retry, token refresh, and background parsing — cutting networking code 60%.","Delivered the company's first mobile platform (consumer booking, internal HR, POS) in 14 months, enabling a full business pivot."]},{role:"Mobile Engineer (Part-time)",company:"Tech Bay Portal",companyUrl:"",context:"Ride-hailing",location:"UAE (Remote)",period:"Feb 2021 – Oct 2021 · 9 mos",stack:["Flutter","Dart","Socket.io","Google Maps"],highlights:["Delivered real-time GPS tracking and live trip updates (Socket.io, Google Maps) across driver and rider apps.","Hardened the live-tracking pipeline against intermittent connectivity — buffering location updates locally and replaying on reconnect."]},{role:"Mobile Engineer",company:"FekraSoft Co",companyUrl:"https://www.linkedin.com/company/fekrasoft",context:"Software House",location:"Cairo, Egypt",period:"Aug 2019 – Sep 2020 · 1 yr 2 mos",stack:["Flutter","Dart","RxDart","Firebase"],highlights:["Led company-wide Flutter adoption as the first Flutter engineer, mentoring the Android team and authoring the shared coding standards still in use.","Shipped production e-commerce and document-management apps with barcode scanning and file-level encryption."]}],Jv=[{category:"Architecture",icon:"Layers",items:["Clean Architecture","MVVM","SOLID","Modular Design","50+ Feature Modules","Dependency Injection","Design Systems"]},{category:"State Management",icon:"Smartphone",items:["BLoC","Cubit","RxDart","Reactive Programming","Either<Failure, T>"]},{category:"Data & Backend",icon:"Database",items:["PowerSync","Drift","SQLite","Offline-first","GraphQL","REST","Firebase"]},{category:"CI/CD & Release",icon:"GitBranch",items:["GitHub Actions","Codemagic","Fastlane","Trunk-based","Feature Flags","GrowthBook"]},{category:"Testing & Quality",icon:"ShieldCheck",items:["Unit Tests","Widget Tests","Maestro","Patrol","Code Review","Static Analysis"]},{category:"Performance",icon:"Gauge",items:["Cold Start Optimization","Memory Tuning","Rendering","Crash-free Stability","Sentry"]},{category:"Leadership",icon:"Users",items:["Architecture Ownership","Technical Strategy","RFCs","Hiring & Bar-raising","Mentoring","Release Governance"]},{category:"Monetization & Analytics",icon:"LineChart",items:["RevenueCat","Stripe","AdMob","PostHog","Adjust","A/B Testing"]}],my=[{title:"iStoria",category:"commercial",description:"Story-based English learning used by millions. A core mobile engineer since the founding — owning architecture, offline-first sync, and growth features.",image:"/project-images/istoria.webp",tags:["Flutter","Dart","Firebase","EdTech"],demo:"https://istoria.app/en/",users:5e6,caseStudySlug:"istoria"},{title:"Stickerawy",category:"commercial",description:"WhatsApp stickers app for Android, with 500K+ installs on Google Play.",tags:["Flutter","Android","WhatsApp"],demo:"https://play.google.com/store/apps/details?id=com.stickerawy.stickers",downloads:5e5},{title:"flutter_cached_pdfview",category:"open-source",description:"Native PDF viewer for iOS & Android with URL/asset/local caching, password-protected files, and gesture-based zoom.",image:"/project-images/flutter-cached-pdfview.webp",tags:["Flutter","Dart","PDF","iOS","Android"],github:"https://github.com/binSaed/flutter_cached_pdfview",demo:"https://pub.dev/packages/flutter_cached_pdfview",stars:134,likes:501,downloads:57e3,caseStudySlug:"flutter-cached-pdfview"},{title:"clipboard_plus",category:"open-source",description:"Flutter clipboard plugin with silent content-type detection on iOS — detects URLs, text, and images without triggering the paste permission dialog.",tags:["Flutter","iOS","Android","Plugin"],github:"https://github.com/binSaed/clipboard_plus",demo:"https://pub.dev/packages/clipboard_plus"},{title:"flutter_zoom_checker",category:"open-source",description:"iOS/Android display-zoom (UI scaling) detection plugin, working around a Flutter framework limitation (issue #95421).",tags:["Flutter","iOS","Android","Plugin"],github:"https://github.com/binSaed/flutter_zoom_checker",demo:"https://pub.dev/packages/flutter_zoom_checker"},{title:"dio_firebase_performance_plus",category:"open-source",description:"Dio interceptor that streams HTTP request metrics to Firebase Performance Monitoring.",tags:["Dart","Dio","Firebase"],github:"https://github.com/binSaed/dio_firebase_performance_plus"}],Kv=[{name:"flutter/website",url:"https://github.com/flutter/website/pull/13639"},{name:"flutter/flutter",url:"https://github.com/flutter/flutter/pull/190166"},{name:"flutter/flutter",url:"https://github.com/flutter/flutter/pull/190163"},{name:"flutter/devtools",url:"https://github.com/flutter/devtools/pull/9925"},{name:"growthbook-flutter",url:"https://github.com/growthbook/growthbook-flutter/pull/143"},{name:"growthbook-flutter",url:"https://github.com/growthbook/growthbook-flutter/pull/139"},{name:"youtube_explode_dart",url:"https://github.com/Hexer10/youtube_explode_dart/pull/371"},{name:"dio_smart_retry",url:"https://github.com/rodion-m/dio_smart_retry/pull/36"}],gy=[{name:"iStoria",url:"https://istoria.app/en/",users:"5M+ learners"},{name:"Happy Trip",url:"https://www.linkedin.com/company/happytrip-ar",users:"Travel platform"},{name:"FekraSoft",url:"https://www.linkedin.com/company/fekrasoft",users:"Software house"}],yi=[{name:"Saber Son",title:"Flutter Developer · YouTuber",relationship:"Reported directly to Abdelrahman",date:"2026-06-03",initials:"SS",image:"/recommendations/saber-son.jpg",linkedin:"https://www.linkedin.com/in/saber-son-b100b4177/",company:"iStoria",quote:"One of the things I admire most about Abdelrahman is how supportive he is. Whenever I face a challenge, he never hesitates to put aside what he's doing and help me figure it out. What sets him apart is that he doesn't just solve the problem and move on — he takes the time to explain the solution, the reasoning behind it, and how to approach similar situations in the future. Thanks to his guidance, I've become much more confident and independent when tackling technical challenges."},{name:"AlHassan Balousha",title:"Senior Software Engineer · 9+ yrs scaling apps",relationship:"Worked with Abdelrahman on the same team",date:"2026-02-16",initials:"AB",image:"/recommendations/alhassan-balousha.jpg",linkedin:"https://www.linkedin.com/in/alhassan-balousha-9b7bb8114/",company:"iStoria",quote:`Abdelrahman is a highly accomplished Software Engineer and Tech Lead with strong executive-level technical leadership.

He brings a strategic vision to building large-scale mobile applications, with deep expertise in designing scalable architectures capable of serving millions of users with stability and high performance. He combines strong engineering depth with disciplined execution, ensuring long-term product sustainability and technical excellence.

What sets him apart: influential technical leadership and sound architectural decision-making; proven ability to build scalable, high-performance systems; effective team leadership and strong engineering culture; high productivity without compromising code quality or performance; and exceptional ability to solve complex problems under pressure.

Abdelrahman is a strategic technical asset to any organization seeking strong leadership and long-term product impact.`},{name:"Fady Mondy",title:"Engineering Manager at ID8 Media · Creator of TomatoPHP",relationship:"Worked with Abdelrahman on the same team",date:"2026-01-24",initials:"FM",image:"/recommendations/fady-mondy.jpg",linkedin:"https://www.linkedin.com/in/fadymondy/",company:"iStoria",quote:"Abdelrahman played a pivotal role in the success of the iStoria mobile platform. His leadership of the mobile team was defined by technical excellence and a relentless focus on user experience. He successfully navigated complex integrations and maintained a high velocity of feature releases without compromising on code quality. He is a proactive leader who anticipates challenges before they arise, making him an invaluable asset to any engineering department."},{name:"Mohammed Helaiwa",title:"Full Stack Engineer at iStoria",relationship:"Worked with Abdelrahman on the same team",date:"2026-01-17",initials:"MH",image:"/recommendations/mohammed-helaiwa.jpg",linkedin:"https://www.linkedin.com/in/me-helaiwa/",company:"iStoria",quote:`I've had the pleasure of working with Abdelrahman Saed, and I can confidently say he is one of the most reliable and skilled software engineers I've collaborated with. Abdelrahman combines deep technical expertise in Flutter with a strong understanding of building scalable, high-quality applications, especially in the EdTech domain.

What truly sets Abdelrahman apart is his ability to think beyond just code. He approaches problems with a product mindset, balances performance with maintainability, and consistently delivers clean, well-architected solutions. As a Lead Software Engineer, he demonstrates excellent leadership, mentoring teammates, setting high engineering standards, and driving projects forward with clarity and ownership.

Abdelrahman is proactive, detail-oriented, and always eager to improve both the product and the team around him. Any organization would be fortunate to have him on board, and I highly recommend him for any role requiring strong technical leadership, Flutter expertise, and a passion for building impactful software.`},{name:"Maher Al-Ghannam",title:"Senior QA Engineer · ISTQB-CTFL",relationship:"Worked with Abdelrahman on different teams",date:"2026-01-17",initials:"MA",image:"/recommendations/maher-al-ghannam.jpg",linkedin:"https://www.linkedin.com/in/maher-alghannam/",company:"iStoria",quote:"I highly recommend Abdelrahman as a Flutter Developer Team Lead. He has strong expertise in Flutter development and consistently delivers high-quality, well-structured mobile applications. Beyond his technical skills, he is a supportive and effective leader who encourages collaboration, guides the team through challenges, and ensures projects are delivered on time with excellent quality. Working with him has been a great experience."},{name:"Omar Sulieman",title:"Growth & Performance Marketer",relationship:"Worked with Abdelrahman on different teams",date:"2026-01-15",initials:"OS",image:"/recommendations/omar-sulieman.jpg",linkedin:"https://www.linkedin.com/in/omar-sulieman-3b7861217/",company:"iStoria",quote:`I've had the pleasure of working with Abdelrahman, and he is genuinely one of the strongest software engineers I've collaborated with.

He has deep hands-on expertise in Flutter, with a solid understanding of building scalable, high-performance mobile applications. What really sets him apart is his ability to think beyond implementation — he understands architecture, performance trade-offs, and long-term maintainability, which is critical for growing products.

In the EdTech space, Abdelrahman shows strong product awareness and a clear understanding of how technology should support learning outcomes, not just features. He's reliable, detail-oriented, and consistently delivers clean, well-structured code.

On top of his technical skills, he's professional, easy to work with, and communicates clearly across technical and non-technical teams. Any team looking for a senior Flutter engineer or a strong technical lead would be lucky to have him.

Highly recommended.`},{name:"Abdelrahman Shehata",title:"Lead Software Engineer · Mobile & AI",relationship:"Worked with Abdelrahman on the same team",date:"2025-11-16",initials:"AS",image:"/recommendations/abdelrahman-shehata.jpg",linkedin:"https://www.linkedin.com/in/abdelrahman-shehata-9a20b41b1/",company:"iStoria",quote:"As a Lead Software Engineer, one of his main strengths is problem solving in daily bugs. Highly recommended for lead tech companies, and you can rely on him for the highly advanced technologies."},{name:"Haitham Essam",title:"Senior Flutter Developer",relationship:"Reported directly to Abdelrahman",date:"2025-10-06",initials:"HE",image:"/recommendations/haitham-essam.jpg",linkedin:"https://www.linkedin.com/in/haitham-essam-b69b15332/",company:"iStoria",quote:`I had the pleasure of working with Abdelrahman Saed at iStoria. From day one, Abdelrahman impressed everyone with his professionalism, creativity, and problem-solving mindset. He was always the one who could turn a complex challenge into a smooth, well-structured solution — and did it all with a positive attitude that made working together genuinely enjoyable.

Beyond his technical skills, Abdelrahman is also a great teammate who supports others and spreads positive energy in the workplace. I'm truly glad to have had the chance to work with him, and I highly recommend him for any future opportunity.`},{name:"Islam Khalil",title:"Software Engineer · Flutter Developer",relationship:"Abdelrahman was senior but didn't manage directly",date:"2024-03-27",initials:"IK",image:"/recommendations/islam-khalil.jpg",linkedin:"https://www.linkedin.com/in/islam-khalil-919278b2/",company:"iStoria",quote:"I highly recommend Abdelrahman for his exceptional creativity, passion for assisting others, and remarkable proficiency in providing quick programming solutions, specifically in Dart and both Android and iOS app development. His expertise has been invaluable, and I have greatly benefited from his guidance."},{name:"Abdullah Ehab",title:"Senior Flutter Developer at Sigma EMEA",relationship:"Worked with Abdelrahman on the same team",date:"2022-05-30",initials:"AE",image:"/recommendations/abdullah-ehab.jpg",linkedin:"https://www.linkedin.com/in/abdullah-ehab/",company:"Happy Trip",quote:"Abdelrahman is an added value to any development team. He is a good team player, very dedicated, high ownership, motivated and focused on the target. Also a quick learner and fast troubleshooter."},{name:"Mohamed Reda",title:"AI Engineer in Healthcare",relationship:"Worked with Abdelrahman on the same team",date:"2020-11-05",initials:"MR",image:"/recommendations/mohamed-reda.jpg",linkedin:"https://www.linkedin.com/in/mohamed-r-870271bb/",company:"FekraSoft Co",quote:"Abdelrahman is one of the fastest learners I've worked with, and I'm absolutely confident that he would be a great fit for any company."}],Yv=[{title:"Building Unstoppable Offline-First Apps",event:"Flutter Night @ Swypex",eventUrl:"https://luma.com/kka8yaw7",role:"Speaker",venue:"Swypex · Smart Village",location:"Giza, Egypt",date:"2025-12-27",audience:"~50 mobile engineers",organizer:"Swypex",organizerUrl:"https://swypex.com",free:!0,summary:"How to design Flutter apps that keep working with no network — local-first data, sync strategies, conflict resolution, and event sourcing to rebuild state on reconnect.",topics:["Local-first apps","Offline-first","Synchronization","Event Sourcing","Conflict resolution"],image:"/speaking/flutter-night-swypex.webp",imageAlt:"Abdelrahman Saed presenting 'Building Unstoppable Offline-First Apps' to a full room at Flutter Night @ Swypex, Smart Village."}],wi=[{q:"Who is Abdelrahman Saed?",a:"Abdelrahman Saed (also known as binSaed) is a Senior Mobile Engineer with 7 years building production Flutter apps for iOS and Android that have reached 5M+ users. He currently leads the mobile squad at iStoria."},{q:"Is Abdelrahman Saed available for hire?",a:"Yes — he's open to Senior Mobile Engineer roles on a full-time, fractional, contract, or technical-advisory basis, working remotely worldwide or hybrid / on-site across the Gulf and Egypt. He can start on two weeks' notice. The fastest way to start a conversation is email (me@bnsaed.com) or booking a 20-minute call at calendly.com/bnsaed/meet. He typically replies within 24 hours."},{q:"What is Abdelrahman Saed's current role?",a:"He is the Lead Mobile Engineer at iStoria, an English-language learning app, where he owns mobile architecture, release governance, and delivery for a 50+ module Flutter codebase serving 5M+ users."},{q:"What technologies and skills does Abdelrahman Saed work with?",a:"Flutter and Dart with BLoC/Cubit and Clean Architecture; offline-first data (PowerSync, Drift); CI/CD and release engineering (GitHub Actions, Codemagic, Fastlane, feature flags); monetization (RevenueCat, Stripe, AdMob); analytics and engagement (Adjust, CleverTap, PostHog, GrowthBook); plus native iOS/Android integration (WidgetKit, deep linking, i18n/RTL)."},{q:"What are Abdelrahman Saed's notable projects?",a:"flutter_cached_pdfview, a popular open-source Flutter package for native PDF viewing with caching (134+ GitHub stars, 501+ pub.dev likes, 57k+ downloads); iStoria, a story-based English-learning app used by 5M+ learners; and Stickerawy, a WhatsApp stickers app with 500K+ installs. He publishes packages on pub.dev under bnsaed.com."},{q:"How can I contact Abdelrahman Saed?",a:"Email is the preferred channel: me@bnsaed.com. To schedule a call directly, book a meeting at calendly.com/bnsaed/meet. He is also reachable on GitHub (github.com/binSaed), LinkedIn (linkedin.com/in/binsaed), YouTube (youtube.com/@binSaed), and Stack Overflow."},{q:"Can AI agents and answer engines use content from this site?",a:"Yes for user-facing answers (ai-input=yes), but not for training AI models (ai-train=no), per the Content-Signal directives in robots.txt. Please attribute the author when quoting."}],Qv=[wi[1],{q:"Why is he open to new roles?",a:"He's spent over four years building one product — iStoria, from founding mobile engineer to leading the mobile squad behind 5M+ learners. He's proud of that run, and after four years on the same product and business he's looking for a fresh set of engineering challenges to sink into. Nothing more complicated than that."},{q:"What does an engagement look like?",a:"It starts with a 20-minute intro call to scope the work. Full-time and part-time roles follow your interview process; contract work gets a written scope, timeline, and deliverables before any commitment. Start dates are two weeks from acceptance — the notice period at his current role. Rate is discussed on the call and scoped to the engagement type."},{q:"Which time zones do you work with?",a:"Based in Cairo (UTC+2/+3) with comfortable overlap across European and Gulf hours, and used to async collaboration with distributed teams — remote worldwide is the default."},wi[5]],vi=[{id:"palette",label:"Command line accessed",hint:"Open the palette (⌘K)",done:"root shell is yours"},{id:"scan",label:"Full system scan",hint:"Explore every section",done:"every section swept"},{id:"catch",label:"Chased the operative",hint:"Try to catch the avatar",done:"fast, but you tried"},{id:"repos",label:"Repo vault cracked",hint:"Open the repositories",done:"the vault is open"},{id:"theme",label:"Lights flipped",hint:"Switch the theme",done:"ambience rewired"},{id:"konami",label:"Cheat code accepted",hint:"↑↑↓↓←→←→ B A",done:"you know the code"},{id:"secret",label:"Secret command run",hint:"Try an unlisted command",done:"off the menu"},{id:"contact",label:"Contact initiated",hint:"Book a call",done:"channel open — let's talk"}],xi="recon:achievements",md=["projects","case-studies","about","experience","articles","skills","recommendations","contact"];function gd(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}async function On(e){if(!(typeof window>"u"||gd()))try{const{default:t}=await oe(async()=>{const{default:n}=await import("./confetti.module-BVAT6wYb.js");return{default:n}},[]);t({particleCount:90,spread:75,startVelocity:38,ticks:160,origin:{y:.72},colors:["#06b6d4","#22d3ee","#67e8f9","#a5f3fc","#ffffff"],disableForReducedMotion:!0,...e})}catch{}}const bd=c.createContext(null);function by({children:e}){const[t,n]=c.useState(()=>new Set),[r,a]=c.useState([]),[o,s]=c.useState(()=>new Set),[l,u]=c.useState(!1),[d,h]=c.useState(!1),[p,g]=c.useState(!1);c.useEffect(()=>{try{const k=localStorage.getItem(xi);k&&n(new Set(JSON.parse(k)))}catch{}},[]);const f=c.useCallback(k=>{const S=vi.find(E=>E.id===k);S&&n(E=>{if(E.has(k))return E;const R=new Set(E);R.add(k);try{localStorage.setItem(xi,JSON.stringify([...R]))}catch{}return a(A=>[...A,S]),R})},[]),y=c.useCallback(k=>{a(S=>S.filter(E=>E.id!==k))},[]),m=c.useCallback(k=>{s(S=>{if(S.has(k))return S;const E=new Set(S);return E.add(k),E})},[]),b=Math.round(o.size/md.length*100),v=c.useRef(!1);c.useEffect(()=>{b>=100&&!v.current&&(v.current=!0,f("scan"),On({particleCount:140,spread:100,origin:{y:.6}}))},[b,f]),c.useEffect(()=>{if(typeof MutationObserver>"u")return;const k=document.documentElement,S=new MutationObserver(()=>f("theme"));return S.observe(k,{attributes:!0,attributeFilter:["class"]}),()=>S.disconnect()},[f]);const x=c.useMemo(()=>({achievements:vi,unlocked:t,unlock:f,toasts:r,dismissToast:y,scanned:o,markScanned:m,scanPct:b,paletteOpen:l,setPaletteOpen:u,panelOpen:d,setPanelOpen:h,matrixOn:p,setMatrixOn:g}),[t,f,r,y,o,m,b,l,d,p]);return i.jsx(bd.Provider,{value:x,children:e})}function ot(){const e=c.useContext(bd);if(!e)throw new Error("useRecon must be used within <ReconProvider>");return e}function yy(){const{markScanned:e}=ot();c.useEffect(()=>{if(typeof IntersectionObserver>"u")return;const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&s.target.id&&e(s.target.id)},{threshold:.25}),n=()=>{for(const o of md){const s=document.getElementById(o);s&&t.observe(s)}};n();const r=window.setTimeout(n,600),a=window.setTimeout(n,1800);return()=>{t.disconnect(),window.clearTimeout(r),window.clearTimeout(a)}},[e])}const _r=[{href:"experience",label:"Experience"},{href:"projects",label:"Projects"},{href:"case-studies",label:"Case Studies"},{href:"articles",label:"Articles"},{href:"recommendations",label:"Praise"},{href:"work-with-me",label:"Hire Me"},{href:"contact",label:"Contact"}];function wy({onClick:e}){return i.jsxs("a",{href:"/",onClick:e,className:"group flex items-center gap-2.5 cursor-pointer","aria-label":"Abdelrahman Saed — home",children:[i.jsx("span",{className:"grid h-8 w-8 place-items-center bg-primary text-primary-foreground font-heading text-base font-medium rounded-lg transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_4px_16px_-2px_hsl(var(--primary)/0.5)]",children:"A"}),i.jsx("span",{className:"font-heading font-medium text-lg leading-none tracking-tight",children:"saed"})]})}function vy({theme:e,toggleTheme:t}){const n=uy(["experience","projects","case-studies","articles","recommendations","work-with-me","contact"]),r=_o(),a=Ji(),o=Fn(),{unlock:s}=ot(),l=r.pathname==="/",u=h=>{h.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),a("/")},d=h=>{o==null||o.capture("calendly_popup_opened",{source:h}),s("contact"),On(),Nn(ie.calendly)};return i.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 glass-effect animate-slide-down",children:i.jsxs("div",{className:"container mx-auto px-6 h-16 flex items-center gap-4",children:[i.jsx(wy,{onClick:u}),i.jsx("span",{className:"hidden lg:block h-5 w-px bg-border","aria-hidden":"true"}),i.jsx("nav",{className:"hidden lg:flex flex-1 items-center gap-x-6",children:_r.map((h,p)=>{const g=l&&n===h.href;return i.jsxs(ut,{to:`/#${h.href}`,className:Q("group relative kicker whitespace-nowrap transition-colors py-1",g?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[i.jsx("span",{"aria-hidden":"true",className:Q("mr-1.5 text-[0.65rem] transition-colors",g?"text-primary":"text-muted-foreground/40 group-hover:text-primary"),children:String(p+1).padStart(2,"0")}),h.label,i.jsx("span",{className:Q("absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300",g?"w-full":"w-0 group-hover:w-full")})]},h.href)})}),i.jsxs("div",{className:"flex items-center gap-1.5 ml-auto lg:ml-0",children:[i.jsxs("button",{type:"button",onClick:()=>d("header_desktop"),className:"hidden lg:flex items-center gap-1.5 whitespace-nowrap rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_4px_16px_-4px_hsl(var(--primary)/0.5)]",children:[i.jsx(Xn,{className:"h-3.5 w-3.5"}),"Book a call"]}),i.jsx("span",{className:"hidden xl:block h-5 w-px bg-border mx-1","aria-hidden":"true"}),i.jsx(Ze,{variant:"ghost",size:"icon",asChild:!0,className:"hidden xl:inline-flex",children:i.jsx("a",{href:"https://github.com/binSaed",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub profile",title:"GitHub",children:i.jsx(Do,{className:"h-5 w-5"})})}),i.jsx(Ze,{variant:"ghost",size:"icon",asChild:!0,className:"hidden xl:inline-flex",children:i.jsx("a",{href:"https://www.linkedin.com/in/binsaed/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn profile",title:"LinkedIn",children:i.jsx($o,{className:"h-5 w-5"})})}),i.jsx(Ze,{variant:"ghost",size:"icon",asChild:!0,className:"hidden sm:inline-flex",children:i.jsx(ut,{to:"/CV","aria-label":"View my CV and resume",title:"CV",children:i.jsx(Io,{className:"h-5 w-5"})})}),i.jsx(nb,{theme:e,toggleTheme:t}),i.jsxs(iy,{children:[i.jsx(ly,{asChild:!0,children:i.jsx(Ze,{variant:"ghost",size:"icon",className:"lg:hidden","aria-label":"Open navigation menu",children:i.jsx(jh,{className:"h-5 w-5"})})}),i.jsxs(cd,{side:"right",className:"w-72 border-l border-border",children:[i.jsxs(dd,{children:[i.jsx(ud,{className:"text-left font-heading font-medium text-2xl tracking-tight",children:"Navigation"}),i.jsx(hd,{className:"sr-only",children:"Site navigation links"})]}),i.jsx("div",{className:"mt-2 mb-4 h-px w-full bg-border"}),i.jsxs("nav",{className:"flex flex-col",children:[_r.map((h,p)=>{const g=l&&n===h.href;return i.jsx(Ar,{asChild:!0,children:i.jsxs(ut,{to:`/#${h.href}`,className:Q("group flex items-baseline gap-3 border-b border-border/60 py-3 transition-colors",g?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[i.jsx("span",{"aria-hidden":"true",className:Q("text-xs",g?"text-primary":"text-muted-foreground/50 group-hover:text-primary"),children:String(p+1).padStart(2,"0")}),i.jsx("span",{className:"font-heading text-xl",children:h.label})]})},h.href)}),i.jsx(Ar,{asChild:!0,children:i.jsxs(ut,{to:"/flutter",className:"group flex items-baseline gap-3 border-b border-border/60 py-3 transition-colors text-muted-foreground hover:text-foreground",children:[i.jsx("span",{"aria-hidden":"true",className:"text-xs text-muted-foreground/50 group-hover:text-primary",children:String(_r.length+1).padStart(2,"0")}),i.jsx("span",{className:"font-heading text-xl",children:"Flutter Reference"})]})}),i.jsx(Ar,{asChild:!0,children:i.jsxs(ut,{to:"/CV",className:"group flex items-baseline gap-3 border-b border-border/60 py-3 transition-colors text-muted-foreground hover:text-foreground",children:[i.jsx("span",{"aria-hidden":"true",className:"text-xs text-muted-foreground/50 group-hover:text-primary",children:String(_r.length+2).padStart(2,"0")}),i.jsx("span",{className:"font-heading text-xl",children:"CV"})]})}),i.jsx(Ar,{asChild:!0,children:i.jsxs("button",{type:"button",onClick:()=>d("header_mobile"),className:"group mt-4 flex items-center justify-center gap-2 rounded-full border border-primary/40 py-3 text-primary transition-colors hover:border-primary hover:bg-primary/10",children:[i.jsx(Xn,{className:"h-4 w-4"}),i.jsx("span",{className:"font-heading text-xl",children:"Book a call"})]})})]})]})]})]})]})})}function yd(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function xy(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function wd(e){var t;return(t=yd(e))==null?void 0:t.data}async function vd(e,t){const n=yd(t),r={Accept:"application/vnd.github+json"};n!=null&&n.etag&&(r["If-None-Match"]=n.etag);const a=await fetch(e,{headers:r,cache:"no-store"});if(a.status===304&&n)return n.data;if(!a.ok){if(n)return n.data;throw new Error(`GitHub request failed: ${a.status}`)}const o=await a.json(),s=a.headers.get("ETag");return s&&xy(t,{etag:s,data:o}),o}const ky="https://api.github.com/users/binSaed",xd="gh:profile:binSaed";function Sy(){return vd(ky,xd)}function kd(){return Ac({queryKey:["github-profile"],queryFn:Sy,initialData:()=>wd(xd),staleTime:1e3*60*5,gcTime:1e3*60*60*24})}function Mt({className:e,...t}){return i.jsx("div",{className:Q("animate-pulse rounded-md bg-muted",e),...t})}function Ey(){return i.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none","aria-hidden":"true",children:[i.jsx("div",{className:"absolute -top-1/4 right-0 h-[70vh] w-[70vh] rounded-full animate-glow-breathe",style:{background:"radial-gradient(circle, hsl(var(--primary) / 0.08), transparent 62%)"}}),i.jsx("div",{className:"absolute inset-0 bg-dotgrid opacity-40 [mask-image:linear-gradient(180deg,transparent,black_18%,black_70%,transparent)]"}),i.jsx("span",{className:"section-numeral absolute -top-10 right-4 text-[26vw] md:text-[15rem] leading-none tracking-tighter",children:"01"}),i.jsx("div",{className:"absolute top-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-primary/40 animate-float-slow"}),i.jsx("div",{className:"absolute top-[22%] left-1/3 h-1 w-1 rounded-full bg-primary/30 animate-float-drift-b",style:{animationDelay:"2.5s"}}),i.jsx("div",{className:"absolute bottom-[30%] right-1/3 h-1 w-1 rounded-full bg-primary/25 animate-float-slow",style:{animationDelay:"6s"}}),i.jsx("div",{className:"absolute top-[62%] right-[16%] h-1.5 w-1.5 rounded-full bg-primary/35 animate-float-drift-b hidden md:block",style:{animationDelay:"9s"}}),i.jsx("div",{className:"absolute inset-0 opacity-[0.4] [mask-image:linear-gradient(180deg,black,transparent_85%)]",style:{backgroundImage:"repeating-linear-gradient(to bottom, hsl(var(--foreground) / 0.02) 0px, hsl(var(--foreground) / 0.02) 1px, transparent 1px, transparent 4px)"}}),i.jsx("div",{className:"absolute inset-x-0 top-0 h-28 animate-scan-beam",style:{background:"linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.05) 50%, transparent 100%)"}})]})}function Ty(e,t,n,r={}){const{stiffness:a=180,damping:o=20,mass:s=1}=r,l=c.useRef({x:0,y:0,vx:0,vy:0}),u=c.useRef({x:e,y:t}),d=c.useRef(null),h=c.useRef(null);c.useEffect(()=>{u.current={x:e,y:t}},[e,t]);const p=c.useCallback(f=>{h.current===null&&(h.current=f);const y=Math.min((f-h.current)/1e3,.064);h.current=f;const m=l.current,b=u.current,v=-a*(m.x-b.x),x=-a*(m.y-b.y),k=-o*m.vx,S=-o*m.vy,E=(v+k)/s,R=(x+S)/s;if(m.vx+=E*y,m.vy+=R*y,m.x+=m.vx*y,m.y+=m.vy*y,Math.abs(m.x-b.x)<.01&&Math.abs(m.y-b.y)<.01&&Math.abs(m.vx)<.01&&Math.abs(m.vy)<.01){m.x=b.x,m.y=b.y,m.vx=0,m.vy=0,n(m.x,m.y),d.current=null,h.current=null;return}n(m.x,m.y),d.current=requestAnimationFrame(p)},[a,o,s,n]),g=c.useCallback(()=>{d.current===null&&(h.current=null,d.current=requestAnimationFrame(p))},[p]);return c.useEffect(()=>{d.current===null&&(h.current=null,d.current=requestAnimationFrame(p))},[e,t,p]),c.useEffect(()=>()=>{d.current!==null&&cancelAnimationFrame(d.current)},[]),{start:g,setPosition:(f,y)=>{l.current.x=f,l.current.y=y}}}const os=ns,Ry=rs,Sd=c.forwardRef(({className:e,...t},n)=>i.jsx(ur,{ref:n,className:Q("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));Sd.displayName=ur.displayName;const da=c.forwardRef(({className:e,children:t,...n},r)=>i.jsxs(Ry,{children:[i.jsx(Sd,{}),i.jsxs(hr,{ref:r,className:Q("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,i.jsxs(as,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[i.jsx(ea,{className:"h-4 w-4"}),i.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));da.displayName=hr.displayName;const ss=({className:e,...t})=>i.jsx("div",{className:Q("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});ss.displayName="DialogHeader";const is=c.forwardRef(({className:e,...t},n)=>i.jsx(la,{ref:n,className:Q("text-lg font-semibold leading-none tracking-tight",e),...t}));is.displayName=la.displayName;const ls=c.forwardRef(({className:e,...t},n)=>i.jsx(ca,{ref:n,className:Q("text-sm text-muted-foreground",e),...t}));ls.displayName=ca.displayName;const Ay="https://api.github.com/users/binSaed/repos?per_page=100&type=public",Ed="gh:repos:binSaed",Td=e=>[...e].sort((t,n)=>n.stargazers_count-t.stargazers_count);async function _y(){const e=await vd(Ay,Ed);return Td(e)}function Cy(e=!0){return Ac({queryKey:["github-repos"],queryFn:_y,initialData:()=>{const t=wd(Ed);return t?Td(t):void 0},staleTime:1e3*60*5,gcTime:1e3*60*60*24,enabled:e})}var Py=c.createContext(void 0);function Ny(e){const t=c.useContext(Py);return e||t||"ltr"}function Oy(e,[t,n]){return Math.min(n,Math.max(t,e))}function jy(e,t){return c.useReducer((n,r)=>t[n][r]??n,e)}var cs="ScrollArea",[Rd,Xv]=Dn(cs),[Iy,De]=Rd(cs),Ad=c.forwardRef((e,t)=>{const{__scopeScrollArea:n,type:r="hover",dir:a,scrollHideDelay:o=600,...s}=e,[l,u]=c.useState(null),[d,h]=c.useState(null),[p,g]=c.useState(null),[f,y]=c.useState(null),[m,b]=c.useState(null),[v,x]=c.useState(0),[k,S]=c.useState(0),[E,R]=c.useState(!1),[A,$]=c.useState(!1),P=pe(t,U=>u(U)),j=Ny(a);return i.jsx(Iy,{scope:n,type:r,dir:j,scrollHideDelay:o,scrollArea:l,viewport:d,onViewportChange:h,content:p,onContentChange:g,scrollbarX:f,onScrollbarXChange:y,scrollbarXEnabled:E,onScrollbarXEnabledChange:R,scrollbarY:m,onScrollbarYChange:b,scrollbarYEnabled:A,onScrollbarYEnabledChange:$,onCornerWidthChange:x,onCornerHeightChange:S,children:i.jsx(te.div,{dir:j,...s,ref:P,style:{position:"relative","--radix-scroll-area-corner-width":v+"px","--radix-scroll-area-corner-height":k+"px",...e.style}})})});Ad.displayName=cs;var _d="ScrollAreaViewport",Cd=c.forwardRef((e,t)=>{const{__scopeScrollArea:n,children:r,nonce:a,...o}=e,s=De(_d,n),l=c.useRef(null),u=pe(t,l,s.onViewportChange);return i.jsxs(i.Fragment,{children:[i.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),i.jsx(te.div,{"data-radix-scroll-area-viewport":"",...o,ref:u,style:{overflowX:s.scrollbarXEnabled?"scroll":"hidden",overflowY:s.scrollbarYEnabled?"scroll":"hidden",...e.style},children:i.jsx("div",{ref:s.onContentChange,style:{minWidth:"100%",display:"table"},children:r})})]})});Cd.displayName=_d;var st="ScrollAreaScrollbar",ds=c.forwardRef((e,t)=>{const{forceMount:n,...r}=e,a=De(st,e.__scopeScrollArea),{onScrollbarXEnabledChange:o,onScrollbarYEnabledChange:s}=a,l=e.orientation==="horizontal";return c.useEffect(()=>(l?o(!0):s(!0),()=>{l?o(!1):s(!1)}),[l,o,s]),a.type==="hover"?i.jsx(Dy,{...r,ref:t,forceMount:n}):a.type==="scroll"?i.jsx($y,{...r,ref:t,forceMount:n}):a.type==="auto"?i.jsx(Pd,{...r,ref:t,forceMount:n}):a.type==="always"?i.jsx(us,{...r,ref:t}):null});ds.displayName=st;var Dy=c.forwardRef((e,t)=>{const{forceMount:n,...r}=e,a=De(st,e.__scopeScrollArea),[o,s]=c.useState(!1);return c.useEffect(()=>{const l=a.scrollArea;let u=0;if(l){const d=()=>{window.clearTimeout(u),s(!0)},h=()=>{u=window.setTimeout(()=>s(!1),a.scrollHideDelay)};return l.addEventListener("pointerenter",d),l.addEventListener("pointerleave",h),()=>{window.clearTimeout(u),l.removeEventListener("pointerenter",d),l.removeEventListener("pointerleave",h)}}},[a.scrollArea,a.scrollHideDelay]),i.jsx(rt,{present:n||o,children:i.jsx(Pd,{"data-state":o?"visible":"hidden",...r,ref:t})})}),$y=c.forwardRef((e,t)=>{const{forceMount:n,...r}=e,a=De(st,e.__scopeScrollArea),o=e.orientation==="horizontal",s=ha(()=>u("SCROLL_END"),100),[l,u]=jy("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return c.useEffect(()=>{if(l==="idle"){const d=window.setTimeout(()=>u("HIDE"),a.scrollHideDelay);return()=>window.clearTimeout(d)}},[l,a.scrollHideDelay,u]),c.useEffect(()=>{const d=a.viewport,h=o?"scrollLeft":"scrollTop";if(d){let p=d[h];const g=()=>{const f=d[h];p!==f&&(u("SCROLL"),s()),p=f};return d.addEventListener("scroll",g),()=>d.removeEventListener("scroll",g)}},[a.viewport,o,u,s]),i.jsx(rt,{present:n||l!=="hidden",children:i.jsx(us,{"data-state":l==="hidden"?"hidden":"visible",...r,ref:t,onPointerEnter:re(e.onPointerEnter,()=>u("POINTER_ENTER")),onPointerLeave:re(e.onPointerLeave,()=>u("POINTER_LEAVE"))})})}),Pd=c.forwardRef((e,t)=>{const n=De(st,e.__scopeScrollArea),{forceMount:r,...a}=e,[o,s]=c.useState(!1),l=e.orientation==="horizontal",u=ha(()=>{if(n.viewport){const d=n.viewport.offsetWidth<n.viewport.scrollWidth,h=n.viewport.offsetHeight<n.viewport.scrollHeight;s(l?d:h)}},10);return jn(n.viewport,u),jn(n.content,u),i.jsx(rt,{present:r||o,children:i.jsx(us,{"data-state":o?"visible":"hidden",...a,ref:t})})}),us=c.forwardRef((e,t)=>{const{orientation:n="vertical",...r}=e,a=De(st,e.__scopeScrollArea),o=c.useRef(null),s=c.useRef(0),[l,u]=c.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=Dd(l.viewport,l.content),h={...r,sizes:l,onSizesChange:u,hasThumb:d>0&&d<1,onThumbChange:g=>o.current=g,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:g=>s.current=g};function p(g,f){return By(g,s.current,l,f)}return n==="horizontal"?i.jsx(Ly,{...h,ref:t,onThumbPositionChange:()=>{if(a.viewport&&o.current){const g=a.viewport.scrollLeft,f=ki(g,l,a.dir);o.current.style.transform=`translate3d(${f}px, 0, 0)`}},onWheelScroll:g=>{a.viewport&&(a.viewport.scrollLeft=g)},onDragScroll:g=>{a.viewport&&(a.viewport.scrollLeft=p(g,a.dir))}}):n==="vertical"?i.jsx(My,{...h,ref:t,onThumbPositionChange:()=>{if(a.viewport&&o.current){const g=a.viewport.scrollTop,f=ki(g,l);o.current.style.transform=`translate3d(0, ${f}px, 0)`}},onWheelScroll:g=>{a.viewport&&(a.viewport.scrollTop=g)},onDragScroll:g=>{a.viewport&&(a.viewport.scrollTop=p(g))}}):null}),Ly=c.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...a}=e,o=De(st,e.__scopeScrollArea),[s,l]=c.useState(),u=c.useRef(null),d=pe(t,u,o.onScrollbarXChange);return c.useEffect(()=>{u.current&&l(getComputedStyle(u.current))},[u]),i.jsx(Od,{"data-orientation":"horizontal",...a,ref:d,sizes:n,style:{bottom:0,left:o.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:o.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":ua(n)+"px",...e.style},onThumbPointerDown:h=>e.onThumbPointerDown(h.x),onDragScroll:h=>e.onDragScroll(h.x),onWheelScroll:(h,p)=>{if(o.viewport){const g=o.viewport.scrollLeft+h.deltaX;e.onWheelScroll(g),Ld(g,p)&&h.preventDefault()}},onResize:()=>{u.current&&o.viewport&&s&&r({content:o.viewport.scrollWidth,viewport:o.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:Wr(s.paddingLeft),paddingEnd:Wr(s.paddingRight)}})}})}),My=c.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...a}=e,o=De(st,e.__scopeScrollArea),[s,l]=c.useState(),u=c.useRef(null),d=pe(t,u,o.onScrollbarYChange);return c.useEffect(()=>{u.current&&l(getComputedStyle(u.current))},[u]),i.jsx(Od,{"data-orientation":"vertical",...a,ref:d,sizes:n,style:{top:0,right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":ua(n)+"px",...e.style},onThumbPointerDown:h=>e.onThumbPointerDown(h.y),onDragScroll:h=>e.onDragScroll(h.y),onWheelScroll:(h,p)=>{if(o.viewport){const g=o.viewport.scrollTop+h.deltaY;e.onWheelScroll(g),Ld(g,p)&&h.preventDefault()}},onResize:()=>{u.current&&o.viewport&&s&&r({content:o.viewport.scrollHeight,viewport:o.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:Wr(s.paddingTop),paddingEnd:Wr(s.paddingBottom)}})}})}),[Fy,Nd]=Rd(st),Od=c.forwardRef((e,t)=>{const{__scopeScrollArea:n,sizes:r,hasThumb:a,onThumbChange:o,onThumbPointerUp:s,onThumbPointerDown:l,onThumbPositionChange:u,onDragScroll:d,onWheelScroll:h,onResize:p,...g}=e,f=De(st,n),[y,m]=c.useState(null),b=pe(t,P=>m(P)),v=c.useRef(null),x=c.useRef(""),k=f.viewport,S=r.content-r.viewport,E=ge(h),R=ge(u),A=ha(p,10);function $(P){if(v.current){const j=P.clientX-v.current.left,U=P.clientY-v.current.top;d({x:j,y:U})}}return c.useEffect(()=>{const P=j=>{const U=j.target;(y==null?void 0:y.contains(U))&&E(j,S)};return document.addEventListener("wheel",P,{passive:!1}),()=>document.removeEventListener("wheel",P,{passive:!1})},[k,y,S,E]),c.useEffect(R,[r,R]),jn(y,A),jn(f.content,A),i.jsx(Fy,{scope:n,scrollbar:y,hasThumb:a,onThumbChange:ge(o),onThumbPointerUp:ge(s),onThumbPositionChange:R,onThumbPointerDown:ge(l),children:i.jsx(te.div,{...g,ref:b,style:{position:"absolute",...g.style},onPointerDown:re(e.onPointerDown,P=>{P.button===0&&(P.target.setPointerCapture(P.pointerId),v.current=y.getBoundingClientRect(),x.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",f.viewport&&(f.viewport.style.scrollBehavior="auto"),$(P))}),onPointerMove:re(e.onPointerMove,$),onPointerUp:re(e.onPointerUp,P=>{const j=P.target;j.hasPointerCapture(P.pointerId)&&j.releasePointerCapture(P.pointerId),document.body.style.webkitUserSelect=x.current,f.viewport&&(f.viewport.style.scrollBehavior=""),v.current=null})})})}),Gr="ScrollAreaThumb",jd=c.forwardRef((e,t)=>{const{forceMount:n,...r}=e,a=Nd(Gr,e.__scopeScrollArea);return i.jsx(rt,{present:n||a.hasThumb,children:i.jsx(Hy,{ref:t,...r})})}),Hy=c.forwardRef((e,t)=>{const{__scopeScrollArea:n,style:r,...a}=e,o=De(Gr,n),s=Nd(Gr,n),{onThumbPositionChange:l}=s,u=pe(t,p=>s.onThumbChange(p)),d=c.useRef(void 0),h=ha(()=>{d.current&&(d.current(),d.current=void 0)},100);return c.useEffect(()=>{const p=o.viewport;if(p){const g=()=>{if(h(),!d.current){const f=zy(p,l);d.current=f,l()}};return l(),p.addEventListener("scroll",g),()=>p.removeEventListener("scroll",g)}},[o.viewport,h,l]),i.jsx(te.div,{"data-state":s.hasThumb?"visible":"hidden",...a,ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...r},onPointerDownCapture:re(e.onPointerDownCapture,p=>{const f=p.target.getBoundingClientRect(),y=p.clientX-f.left,m=p.clientY-f.top;s.onThumbPointerDown({x:y,y:m})}),onPointerUp:re(e.onPointerUp,s.onThumbPointerUp)})});jd.displayName=Gr;var hs="ScrollAreaCorner",Id=c.forwardRef((e,t)=>{const n=De(hs,e.__scopeScrollArea),r=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&r?i.jsx(Uy,{...e,ref:t}):null});Id.displayName=hs;var Uy=c.forwardRef((e,t)=>{const{__scopeScrollArea:n,...r}=e,a=De(hs,n),[o,s]=c.useState(0),[l,u]=c.useState(0),d=!!(o&&l);return jn(a.scrollbarX,()=>{var p;const h=((p=a.scrollbarX)==null?void 0:p.offsetHeight)||0;a.onCornerHeightChange(h),u(h)}),jn(a.scrollbarY,()=>{var p;const h=((p=a.scrollbarY)==null?void 0:p.offsetWidth)||0;a.onCornerWidthChange(h),s(h)}),d?i.jsx(te.div,{...r,ref:t,style:{width:o,height:l,position:"absolute",right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function Wr(e){return e?parseInt(e,10):0}function Dd(e,t){const n=e/t;return isNaN(n)?0:n}function ua(e){const t=Dd(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*t;return Math.max(r,18)}function By(e,t,n,r="ltr"){const a=ua(n),o=a/2,s=t||o,l=a-s,u=n.scrollbar.paddingStart+s,d=n.scrollbar.size-n.scrollbar.paddingEnd-l,h=n.content-n.viewport,p=r==="ltr"?[0,h]:[h*-1,0];return $d([u,d],p)(e)}function ki(e,t,n="ltr"){const r=ua(t),a=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,o=t.scrollbar.size-a,s=t.content-t.viewport,l=o-r,u=n==="ltr"?[0,s]:[s*-1,0],d=Oy(e,u);return $d([0,s],[0,l])(d)}function $d(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function Ld(e,t){return e>0&&e<t}var zy=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},r=0;return function a(){const o={left:e.scrollLeft,top:e.scrollTop},s=n.left!==o.left,l=n.top!==o.top;(s||l)&&t(),n=o,r=window.requestAnimationFrame(a)}(),()=>window.cancelAnimationFrame(r)};function ha(e,t){const n=ge(e),r=c.useRef(0);return c.useEffect(()=>()=>window.clearTimeout(r.current),[]),c.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,t)},[n,t])}function jn(e,t){const n=ge(t);tt(()=>{let r=0;if(e){const a=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return a.observe(e),()=>{window.cancelAnimationFrame(r),a.unobserve(e)}}},[e,n])}var Md=Ad,qy=Cd,Gy=Id;const Fd=c.forwardRef(({className:e,children:t,...n},r)=>i.jsxs(Md,{ref:r,className:Q("relative overflow-hidden",e),...n,children:[i.jsx(qy,{className:"h-full w-full rounded-[inherit]",children:t}),i.jsx(Hd,{}),i.jsx(Gy,{})]}));Fd.displayName=Md.displayName;const Hd=c.forwardRef(({className:e,orientation:t="vertical",...n},r)=>i.jsx(ds,{ref:r,orientation:t,className:Q("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...n,children:i.jsx(jd,{className:"relative flex-1 rounded-full bg-border"})}));Hd.displayName=ds.displayName;const Wy={TypeScript:"bg-blue-500",JavaScript:"bg-yellow-400",Python:"bg-green-500",Dart:"bg-cyan-500",Java:"bg-orange-500",Kotlin:"bg-purple-500",Swift:"bg-orange-400",Go:"bg-cyan-400",Rust:"bg-orange-600",Ruby:"bg-red-500",PHP:"bg-indigo-400","C++":"bg-pink-500",C:"bg-gray-500",HTML:"bg-red-400",CSS:"bg-blue-400",Shell:"bg-green-400"};function Vy({repo:e}){const t=e.language?Wy[e.language]||"bg-muted-foreground":null,n=Fn();return i.jsxs("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"block p-4 rounded-sm border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-200 group",onClick:()=>n==null?void 0:n.capture("repo_clicked",{repo_name:e.name,repo_language:e.language,repo_stars:e.stargazers_count}),children:[i.jsxs("div",{className:"flex items-start justify-between gap-2",children:[i.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors truncate",children:e.name}),i.jsx(_h,{className:"h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"})]}),e.description&&i.jsx("p",{className:"text-sm text-muted-foreground mt-2 line-clamp-2",children:e.description}),i.jsxs("div",{className:"flex items-center gap-4 mt-3 text-sm text-muted-foreground",children:[t&&i.jsxs("span",{className:"flex items-center gap-1.5",children:[i.jsx("span",{className:`w-3 h-3 rounded-full ${t}`}),e.language]}),i.jsxs("span",{className:"flex items-center gap-1",children:[i.jsx(Zr,{className:"h-4 w-4"}),e.stargazers_count]}),i.jsxs("span",{className:"flex items-center gap-1",children:[i.jsx(Nh,{className:"h-4 w-4"}),e.forks_count]})]}),e.topics&&e.topics.length>0&&i.jsxs("div",{className:"flex flex-wrap gap-1.5 mt-3",children:[e.topics.slice(0,4).map(r=>i.jsx("span",{className:"spec-tag",children:r},r)),e.topics.length>4&&i.jsxs("span",{className:"spec-tag",children:["+",e.topics.length-4]})]})]})}function Cr(){return i.jsxs("div",{className:"p-4 rounded-lg border border-border bg-card/50",children:[i.jsx(Mt,{className:"h-5 w-32 mb-2"}),i.jsx(Mt,{className:"h-4 w-full mb-1"}),i.jsx(Mt,{className:"h-4 w-3/4 mb-3"}),i.jsxs("div",{className:"flex gap-4",children:[i.jsx(Mt,{className:"h-4 w-20"}),i.jsx(Mt,{className:"h-4 w-12"}),i.jsx(Mt,{className:"h-4 w-12"})]})]})}function Jy({open:e,onOpenChange:t}){const{data:n,isLoading:r}=Cy(e);return i.jsx(os,{open:e,onOpenChange:t,children:i.jsxs(da,{className:"max-w-2xl max-h-[85vh] p-0",children:[i.jsxs(ss,{className:"p-6 pb-0",children:[i.jsxs(is,{className:"flex items-center gap-2 font-heading text-2xl font-medium tracking-tight",children:[i.jsx(Zr,{className:"h-5 w-5 text-primary"}),"Public Repositories",n&&i.jsxs("span",{className:"text-sm font-normal text-muted-foreground",children:["(",n.length," repos)"]})]}),i.jsx(ls,{className:"sr-only",children:"Browse my public GitHub repositories"})]}),i.jsx(Fd,{className:"h-[60vh] px-6 pb-6",children:i.jsx("div",{className:"space-y-3 pt-4",children:r?i.jsxs(i.Fragment,{children:[i.jsx(Cr,{}),i.jsx(Cr,{}),i.jsx(Cr,{}),i.jsx(Cr,{})]}):n&&n.length>0?n.map(a=>i.jsx(Vy,{repo:a},a.id)):i.jsx("p",{className:"text-center text-muted-foreground py-8",children:"No repositories found"})})})]})})}function Ky({className:e}){return i.jsx("svg",{viewBox:"0 0 24 24",className:e,fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M17.36 20.2v-5.38h1.79V22H3v-7.18h1.79v5.38h12.57zM6.77 14.32l.37-1.76 8.79 1.85-.37 1.76-8.79-1.85zm1.16-4.21l.76-1.61 8.14 3.78-.76 1.62-8.14-3.79zm2.26-3.99l1.15-1.38 6.9 5.76-1.15 1.37-6.9-5.75zM14.64 2l5.51 7.41-1.45 1.07L13.19 3 14.64 2zM6.59 18.41v-1.8h8.98v1.8H6.59z"})})}const Si=["You can't catch me! 😆","Nice try! 👍","Too slow! 🏃‍♂️","Almost got me! 😏","Keep trying! 🎯","Haha, missed! 😂"],Ei=["Hi! 👋","Hello! 😊","Hey there! 🙌","Welcome! ✨"],Yy=[Fa[0],Fa[2],Fa[1]];function Qy(){const{data:e,isLoading:t}=kd(),n=Fn(),{unlock:r}=ot(),[a,o]=c.useState({x:0,y:0}),[s,l]=c.useState({x:0,y:0}),[u,d]=c.useState(!1),[h,p]=c.useState(""),g=c.useRef(null),f=c.useRef(0),y=c.useRef(0),[m,b]=c.useState(!1),v=()=>{n==null||n.capture("calendly_popup_opened",{source:"hero"}),Nn(ie.calendly)},x=c.useRef(null),k=c.useRef(null),S=c.useRef(0),E=c.useCallback(async()=>{if(k.current)return k.current;if(!x.current)return null;const{default:_}=await oe(async()=>{const{default:B}=await import("./confetti.module-BVAT6wYb.js");return{default:B}},[]);return k.current=_.create(x.current,{resize:!0,useWorker:!0}),k.current},[]),R=c.useCallback((_,B)=>{o({x:_,y:B})},[]);Ty(s.x,s.y,R,{stiffness:120,damping:14,mass:1}),c.useEffect(()=>()=>{var _;(_=k.current)==null||_.reset(),k.current=null},[]),c.useEffect(()=>{if(u){const _=setTimeout(()=>d(!1),2e3);return()=>clearTimeout(_)}},[u]);const A=c.useCallback(()=>{const _=Date.now();if(_-y.current<2500)return;y.current=_;const B=Si[Math.floor(Math.random()*Si.length)];p(B),d(!0),r("catch")},[r]),[$,P]=c.useState(!0);c.useEffect(()=>{if(typeof window<"u"&&typeof window.matchMedia=="function"){const _=window.matchMedia("(hover: hover) and (pointer: fine)");P(_.matches);const B=ee=>P(ee.matches);return _.addEventListener("change",B),()=>_.removeEventListener("change",B)}},[]);const j=!$,U=c.useCallback(async()=>{const _=Date.now();if(_-S.current<1e3)return;S.current=_;const B=await E();if(!B)return;const ee=1e3,T=Date.now()+ee,L={startVelocity:30,spread:360,ticks:60,colors:["#22d3ee","#00bcd4","#06b6d4","#67e8f9","#0e7490","#0b0e13"]},I=(F,ce)=>Math.random()*(ce-F)+F,J=setInterval(()=>{const F=T-Date.now();if(F<=0)return clearInterval(J);const ce=600*(F/ee);B({...L,particleCount:ce,origin:{x:I(.1,.3),y:Math.random()-.2}}),B({...L,particleCount:ce,origin:{x:I(.7,.9),y:Math.random()-.2}})},150)},[E]),D=c.useCallback(()=>{if(U(),d(!1),l({x:0,y:0}),j){const _=Date.now();if(_-y.current<2e3)return;y.current=_;const B=Ei[Math.floor(Math.random()*Ei.length)];p(B),d(!0)}},[j,U]),W=c.useCallback((_,B)=>{if(!g.current)return;const ee=g.current.getBoundingClientRect(),T=ee.left+ee.width/2,O=ee.top+ee.height/2,L=_-T,I=B-O,J=Math.sqrt(L*L+I*I),F=200,ce=350;if(J<F&&J>0){f.current+=1,f.current>=3&&(A(),f.current=0);const ne=Math.atan2(I,L),ve=Math.pow((F-J)/F,.6),Ve=-Math.cos(ne)*ve*160,mt=-Math.sin(ne)*ve*160,_e=280;l(Dt=>({x:Math.max(-_e,Math.min(_e,Dt.x+Ve*.25)),y:Math.max(-_e,Math.min(_e,Dt.y+mt*.25))}))}else J>ce&&l(ne=>Math.abs(ne.x)<1&&Math.abs(ne.y)<1?{x:0,y:0}:{x:ne.x*.85,y:ne.y*.85})},[A]),N=c.useCallback(()=>{l({x:0,y:0})},[]),V=c.useCallback(_=>{_.pointerType!=="touch"&&W(_.clientX,_.clientY)},[W]),q=c.useCallback(_=>{_.pointerType!=="touch"&&N()},[N]),G=c.useCallback(_=>{W(_.clientX,_.clientY)},[W]),H=c.useCallback(()=>{N()},[N]);return i.jsxs(i.Fragment,{children:[i.jsx("canvas",{ref:x,className:"fixed inset-0 pointer-events-none z-[9999]",style:{width:"100vw",height:"100vh"}}),i.jsxs("section",{className:"relative min-h-screen overflow-hidden hero-gradient flex items-center pt-28 pb-20",onPointerMove:V,onPointerLeave:q,onMouseMove:G,onMouseLeave:H,children:[i.jsx(Ey,{}),i.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[i.jsxs("div",{className:"opacity-0 animate-fade-in",style:{animationDelay:"0.1s"},children:[i.jsxs("div",{className:"flex items-center justify-between gap-4",children:[i.jsx("span",{className:"kicker text-muted-foreground",children:"Abdelrahman Saed"}),i.jsxs("span",{className:"kicker text-primary inline-flex items-center gap-2",children:[i.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary"}),"Portfolio"]})]}),i.jsx("div",{className:"mt-3 h-px w-full bg-border origin-left animate-draw-rule"})]}),i.jsxs("div",{className:"mt-12 md:mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center",children:[i.jsxs("div",{className:"lg:col-span-7 order-1 lg:order-1",children:[i.jsxs("a",{href:"#work-with-me",className:"group mb-6 inline-flex items-center gap-2.5 border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 rounded-full text-emerald-600 dark:text-emerald-400 transition-colors hover:border-emerald-500/70 hover:bg-emerald-500/15 opacity-0 animate-fade-in",style:{animationDelay:"0.15s"},children:[i.jsxs("span",{className:"relative flex h-2 w-2",children:[i.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),i.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]}),i.jsx("span",{className:"text-sm font-medium",children:fy.label}),i.jsx("span",{className:"text-xs text-emerald-700/70 dark:text-emerald-300/60 hidden sm:inline",children:"Full-time · Fractional · Contract"})]}),i.jsx("p",{className:"kicker text-primary mb-5 opacity-0 animate-fade-in",style:{animationDelay:"0.2s"},children:we.subtitle}),i.jsxs("h1",{className:"font-heading font-extrabold uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(2.5rem,8vw,5.5rem)] opacity-0 animate-reveal-clip text-balance",style:{animationDelay:"0.25s"},children:["Senior"," ",i.jsx("span",{className:"text-primary",children:"Mobile Engineer"})]}),i.jsx("p",{className:"mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty opacity-0 animate-fade-in",style:{animationDelay:"0.4s"},children:we.tagline}),i.jsxs("div",{className:"mt-9 opacity-0 animate-fade-in",style:{animationDelay:"0.5s"},children:[i.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[i.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary"}),i.jsx("span",{className:"kicker text-muted-foreground",children:"By the numbers"})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:Yy.map(_=>i.jsxs("div",{className:"border-l-2 border-primary/20 pl-4",children:[i.jsx("div",{className:"font-heading text-3xl md:text-4xl leading-none",children:_.value}),i.jsx("div",{className:"text-sm text-muted-foreground mt-2",children:_.label})]},_.label))})]}),i.jsxs("div",{className:"mt-9 opacity-0 animate-fade-in",style:{animationDelay:"0.6s"},children:[i.jsxs("div",{className:"flex flex-wrap gap-3",children:[i.jsxs(Ze,{variant:"hero",size:"lg",onClick:v,className:"group",children:["Book a 20-min call",i.jsx(Yn,{className:"ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"})]}),i.jsx(Ze,{variant:"heroOutline",size:"lg",asChild:!0,className:"group",children:i.jsxs(ut,{to:"/case-studies/",onClick:()=>n==null?void 0:n.capture("case_studies_cta_clicked",{source:"hero"}),children:["View Case Studies",i.jsx(Yn,{className:"ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"})]})}),i.jsx(Ze,{variant:"ghost",size:"lg",asChild:!0,className:"group border border-border",children:i.jsxs(ut,{to:"/CV",onClick:()=>n==null?void 0:n.capture("cv_clicked",{source:"hero"}),children:[i.jsx(Io,{className:"h-4 w-4"}),"CV / Resume"]})})]}),i.jsxs(ut,{to:"/hire",onClick:()=>n==null?void 0:n.capture("hire_cta_clicked",{source:"hero"}),className:"group mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary",children:["How we can work together",i.jsx(Yn,{className:"h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"})]})]}),i.jsxs("div",{className:"mt-9 opacity-0 animate-fade-in",style:{animationDelay:"0.7s"},children:[i.jsx("span",{className:"kicker text-muted-foreground/70 block mb-3",children:"Connect"}),i.jsxs("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-3",children:[i.jsxs("a",{href:ie.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",title:"GitHub",className:"text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"github"}),children:[i.jsx(Do,{className:"h-4 w-4"})," GitHub"]}),i.jsxs("a",{href:ie.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",title:"LinkedIn",className:"text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"linkedin"}),children:[i.jsx($o,{className:"h-4 w-4"})," LinkedIn"]}),i.jsxs("a",{href:ie.youtube,target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",title:"YouTube",className:"text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"youtube"}),children:[i.jsx(Cl,{className:"h-4 w-4"})," YouTube"]}),i.jsxs("a",{href:ie.email,"aria-label":"Email",title:"Email",className:"text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"email"}),children:[i.jsx(Lo,{className:"h-4 w-4"})," Email"]}),i.jsxs("a",{href:ie.pubdev,target:"_blank",rel:"noopener noreferrer","aria-label":"pub.dev packages",title:"pub.dev packages",className:"text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"pubdev"}),children:[i.jsx(Ya,{className:"h-4 w-4"})," pub.dev"]}),i.jsxs("a",{href:ie.stackoverflow,target:"_blank",rel:"noopener noreferrer","aria-label":"Stack Overflow",title:"Stack Overflow",className:"text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"stackoverflow"}),children:[i.jsx(Ky,{className:"h-4 w-4"})," Stack Overflow"]}),t?i.jsx(Mt,{className:"h-8 w-36 rounded-full"}):(e==null?void 0:e.public_repos)!==void 0&&i.jsxs("button",{onClick:()=>{b(!0),r("repos"),n==null||n.capture("repos_modal_opened",{public_repos:e.public_repos})},className:"flex items-center gap-2 border border-border rounded-full px-3 py-1.5 text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors",children:[i.jsx(Zr,{className:"h-3.5 w-3.5"}),e.public_repos," Public Repos"]})]})]})]}),i.jsx("div",{className:"lg:col-span-5 order-2 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-scale-in",style:{animationDelay:"0.3s"},children:i.jsxs("div",{ref:g,className:"relative cursor-pointer",onPointerEnter:V,onPointerMove:V,onMouseEnter:G,onMouseMove:G,onClick:D,style:{transform:`translate3d(${a.x}px, ${a.y}px, 0)`,willChange:"transform"},children:[i.jsx("div",{className:`absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${j?"top-full mt-4":"-top-12"} ${u?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-2 scale-95 pointer-events-none"}`,children:i.jsx("div",{className:"bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm whitespace-nowrap shadow-lg",children:h})}),i.jsxs("div",{className:"relative w-[14rem] md:w-[18rem] bg-card border border-border rounded-[1.5rem] shadow-[var(--shadow-card)] overflow-hidden select-none",children:[i.jsxs("div",{className:"relative",children:[i.jsx("img",{src:"/avatar-256.webp",alt:we.name,width:256,height:256,loading:"eager",fetchpriority:"high",decoding:"async",draggable:!1,className:"relative w-full aspect-[4/5] object-cover bg-muted"}),i.jsx("div",{className:"absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card via-card/60 to-transparent"}),i.jsxs("div",{className:"absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur-sm px-2.5 py-1",children:[i.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary animate-pulse"}),i.jsx("span",{className:"kicker text-primary text-[0.6rem]",children:"LIVE"})]})]}),i.jsxs("div",{className:"px-5 py-4",children:[i.jsxs("div",{className:"flex items-center justify-between gap-2",children:[i.jsx("span",{className:"font-heading text-lg leading-tight",children:we.name}),i.jsx("span",{className:"text-xs text-muted-foreground whitespace-nowrap",children:we.location.split(" / ")[0]})]}),i.jsxs("div",{className:"flex items-center gap-2 mt-1.5",children:[i.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"}),i.jsxs("span",{className:"text-sm text-muted-foreground truncate",children:[we.currentTitle,i.jsx("span",{className:"text-muted-foreground/50",children:" @ "}),i.jsx("a",{href:we.companyUrl,target:"_blank",rel:"noopener noreferrer",className:"text-foreground hover:text-primary transition-colors",children:we.company})]})]})]})]})]})})]})]})]}),i.jsx(Jy,{open:m,onOpenChange:b})]})}function Ud(e={}){const{once:t=!0,margin:n="-100px",threshold:r=0}=e,[a,o]=c.useState(!1),[s,l]=c.useState(null),u=d=>{l(d)};return c.useEffect(()=>{if(!s)return;if(typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){o(!0);return}if(typeof window<"u"){const h=s.getBoundingClientRect(),p=window.innerHeight||document.documentElement.clientHeight;if(h.top<p&&h.bottom>0&&(o(!0),t))return}const d=new IntersectionObserver(([h])=>{h.isIntersecting?(o(!0),t&&d.unobserve(s)):t||o(!1)},{rootMargin:n,threshold:r});return d.observe(s),()=>{d.unobserve(s)}},[s,t,n,r]),{ref:u,isInView:a}}function Xy(e){return e>=1e6?`${(e/1e6).toFixed(0)}M+`:e>=1e3?`${(e/1e3).toFixed(0)}K+`:`${e}+`}const Bd=my.filter(e=>e.category==="open-source"),Ti=Bd.reduce((e,t)=>e+(t.downloads??0),0),Ri=Bd.reduce((e,t)=>e+(t.likes??0),0);function Zy(){var l;const{ref:e,isInView:t}=Ud({margin:"-50px"}),{data:n}=kd(),r=yi[0],o=((l=r.quote.split(/\n\s*\n/)[0])==null?void 0:l.replace(/\s*\n\s*/g," ").trim())??"",s=[(n==null?void 0:n.public_repos)!==void 0&&{icon:Zr,value:`${n.public_repos}`,label:"Public repos"},{icon:Ya,value:`${py}`,label:"pub.dev packages"},Ti>0&&{icon:Ya,value:Xy(Ti),label:"Package downloads"},Ri>0&&{icon:Fh,value:`${Ri}+`,label:"pub.dev likes"}].filter(Boolean);return i.jsx("section",{ref:e,className:"py-12 md:py-16 border-b border-border",children:i.jsxs("div",{className:"container mx-auto px-6",children:[i.jsxs("div",{className:`flex flex-col md:flex-row items-center gap-6 md:gap-10 reveal-hidden ${t?"animate-fade-in":""}`,children:[i.jsx("span",{className:"kicker text-muted-foreground/70 shrink-0",children:"Shipped production apps for"}),i.jsx("div",{className:"flex flex-wrap items-center gap-6 md:gap-10",children:gy.map(u=>i.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"group flex flex-col items-center",children:[i.jsx("span",{className:"font-heading text-lg md:text-xl font-bold tracking-tight text-muted-foreground transition-colors hover:text-foreground",children:u.name}),i.jsx("span",{className:"kicker text-[0.6rem] text-muted-foreground/60 normal-case tracking-normal mt-0.5",children:u.users})]},u.name))})]}),i.jsxs("div",{className:"mt-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center",children:[i.jsxs("blockquote",{className:`lg:col-span-8 reveal-hidden ${t?"animate-fade-in-up":""}`,style:{animationDelay:"0.1s"},children:[i.jsxs("p",{className:"text-lg md:text-xl leading-relaxed text-foreground/90 text-pretty font-light",children:["“",o,"”"]}),i.jsxs("footer",{className:"mt-4 flex items-center gap-3",children:[i.jsxs("span",{className:"font-mono text-sm text-primary",children:["— ",r.name]}),i.jsx("span",{className:"text-sm text-muted-foreground",children:r.title}),i.jsxs("a",{href:ie.linkedinRecommendations,target:"_blank",rel:"noopener noreferrer",className:"kicker text-[0.65rem] text-primary hover:underline ml-auto shrink-0",children:["+ ",yi.length-1," more →"]})]})]}),i.jsx("div",{className:`lg:col-span-4 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border reveal-hidden ${t?"animate-fade-in-up":""}`,style:{animationDelay:"0.2s"},children:s.map(u=>i.jsxs("div",{className:"bg-background p-4 flex flex-col items-center text-center",children:[i.jsx(u.icon,{className:"h-4 w-4 text-primary mb-1.5"}),i.jsx("span",{className:"font-heading text-xl md:text-2xl leading-none tracking-tight tabular-nums",children:u.value}),i.jsx("span",{className:"kicker text-[0.6rem] text-muted-foreground mt-1.5 normal-case tracking-normal",children:u.label})]},u.label))})]})]})})}function ew({title:e,subtitle:t,variant:n="hire",primaryLabel:r,primaryTo:a,source:o="section_cta",compact:s=!1,className:l}){const{ref:u,isInView:d}=Ud({margin:"-50px"}),h=Fn(),g={hire:{label:r??"Hire me",to:a??"/hire"},call:{label:r??"Book a 20-min call",action:()=>{h==null||h.capture("calendly_popup_opened",{source:o}),Nn(ie.calendly)}},contact:{label:r??"Start a conversation",to:a??"#contact"}}[n];return i.jsxs("div",{ref:u,className:Q("cta-panel text-center reveal-hidden",d&&"animate-fade-in-up",s?"px-6 py-8 md:py-10":"px-8 py-12 md:py-14",l),children:[i.jsx("h3",{className:"font-heading text-xl md:text-2xl tracking-tight text-balance",children:e}),t&&i.jsx("p",{className:"mt-3 max-w-lg mx-auto text-sm md:text-base leading-relaxed text-muted-foreground text-pretty",children:t}),i.jsxs("div",{className:"mt-6 flex flex-col sm:flex-row items-center justify-center gap-3",children:[n==="call"?i.jsxs("button",{type:"button",onClick:g.action,className:"inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-sm uppercase tracking-widest font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_26px_-6px_hsl(var(--primary)/0.6)]",children:[i.jsx(Xn,{className:"h-4 w-4"}),g.label]}):i.jsxs(ut,{to:g.to,onClick:()=>h==null?void 0:h.capture("section_cta_clicked",{source:o,variant:n}),className:"group inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-sm uppercase tracking-widest font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_26px_-6px_hsl(var(--primary)/0.6)]",children:[g.label,i.jsx(Yn,{className:"h-4 w-4 transition-transform group-hover:translate-x-0.5"})]}),i.jsxs("a",{href:ie.email,onClick:()=>h==null?void 0:h.capture("section_cta_clicked",{source:`${o}_email`,variant:"email"}),className:"inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-sm uppercase tracking-widest font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary",children:[i.jsx(Lo,{className:"h-4 w-4"}),"Email"]})]})]})}function fs(){const[e,t]=c.useState(!1);return c.useEffect(()=>{const n=()=>{const r=window.scrollY,a=window.innerHeight,o=r>a*.9,s=document.getElementById("contact"),l=!!s&&s.getBoundingClientRect().top<a*.85;t(o&&!l)};return n(),window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}},[]),e}function tw(){const[e,t]=c.useState(!1),n=fs();c.useEffect(()=>{const a=()=>{t(window.scrollY>400)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return i.jsx(Ze,{onClick:r,size:"icon",className:Q("fixed right-6 z-50 rounded-sm shadow-[var(--shadow-card)] transition-all duration-300","bg-primary hover:bg-primary/90 text-primary-foreground","hover:-translate-y-0.5",n?"bottom-24":"bottom-6",e?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"),"aria-label":"Back to top",children:i.jsx(Rh,{className:"h-5 w-5"})})}function nw(){const e=Fn(),{unlock:t}=ot(),n=fs(),r=c.useRef(!1);c.useEffect(()=>{if(!n||r.current)return;if(r.current=!0,typeof window.requestIdleCallback=="function"){const l=window.requestIdleCallback(()=>Ma());return()=>{var u;return(u=window.cancelIdleCallback)==null?void 0:u.call(window,l)}}const s=window.setTimeout(()=>Ma(),0);return()=>window.clearTimeout(s)},[n]);const a=()=>Ma(),o=()=>{e==null||e.capture("calendly_popup_opened",{source:"sticky_bar"}),t("contact"),On(),Nn(ie.calendly)};return i.jsx("div",{className:Q("fixed inset-x-0 bottom-0 z-40 transition-all duration-500 ease-out","pb-[env(safe-area-inset-bottom)]",n?"translate-y-0 opacity-100":"translate-y-full opacity-0 pointer-events-none"),"aria-hidden":!n,children:i.jsx("div",{className:"glass-effect border-t border-border",children:i.jsxs("div",{className:"container mx-auto flex items-center justify-between gap-4 px-6 py-3",children:[i.jsxs("div",{className:"hidden min-w-0 sm:flex sm:flex-col",children:[i.jsx("span",{className:"kicker text-primary",children:"~/let's talk"}),i.jsx("span",{className:"truncate text-sm text-muted-foreground",children:"Got a project or role in mind?"})]}),i.jsxs("button",{type:"button",onClick:o,onPointerEnter:a,onFocus:a,tabIndex:n?0:-1,"aria-label":"Book a 20-minute call",className:Q("group inline-flex min-h-[44px] w-full shrink-0 cursor-pointer items-center justify-center gap-2 sm:w-auto","bg-primary px-5 py-2.5 font-medium text-primary-foreground","transition-transform duration-200 hover:-translate-y-0.5","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",n&&"animate-pulse-glow [animation-duration:2s]"),children:[i.jsx(Xn,{className:"h-4 w-4"}),"Book a call"]})]})})})}function rw(){const[e,t]=c.useState(0);return c.useEffect(()=>{const n=()=>{const r=document.documentElement.scrollHeight-window.innerHeight;t(r>0?Math.min(100,Math.max(0,window.scrollY/r*100)):0)};return window.addEventListener("scroll",n,{passive:!0}),n(),()=>window.removeEventListener("scroll",n)},[]),i.jsx("div",{className:"fixed top-0 left-0 right-0 z-[60] h-0.5","aria-hidden":"true",children:i.jsx("div",{className:"h-full bg-primary transition-[width] duration-150 ease-out",style:{width:`${e}%`}})})}const Ha=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];function aw(e){const t=c.useRef(0);c.useEffect(()=>{const n=r=>{const a=r.target;if(a&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))return;const o=r.key.length===1?r.key.toLowerCase():r.key;o===Ha[t.current]?(t.current+=1,t.current===Ha.length&&(t.current=0,e())):t.current=o===Ha[0]?1:0};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e])}var Ai=1,ow=.9,sw=.8,iw=.17,Ua=.1,Ba=.999,lw=.9999,cw=.99,dw=/[\\\/_+.#"@\[\(\{&]/,uw=/[\\\/_+.#"@\[\(\{&]/g,hw=/[\s-]/,zd=/[\s-]/g;function Eo(e,t,n,r,a,o,s){if(o===t.length)return a===e.length?Ai:cw;var l=`${a},${o}`;if(s[l]!==void 0)return s[l];for(var u=r.charAt(o),d=n.indexOf(u,a),h=0,p,g,f,y;d>=0;)p=Eo(e,t,n,r,d+1,o+1,s),p>h&&(d===a?p*=Ai:dw.test(e.charAt(d-1))?(p*=sw,f=e.slice(a,d-1).match(uw),f&&a>0&&(p*=Math.pow(Ba,f.length))):hw.test(e.charAt(d-1))?(p*=ow,y=e.slice(a,d-1).match(zd),y&&a>0&&(p*=Math.pow(Ba,y.length))):(p*=iw,a>0&&(p*=Math.pow(Ba,d-a))),e.charAt(d)!==t.charAt(o)&&(p*=lw)),(p<Ua&&n.charAt(d-1)===r.charAt(o+1)||r.charAt(o+1)===r.charAt(o)&&n.charAt(d-1)!==r.charAt(o))&&(g=Eo(e,t,n,r,d+1,o+2,s),g*Ua>p&&(p=g*Ua)),p>h&&(h=p),d=n.indexOf(u,d+1);return s[l]=h,h}function _i(e){return e.toLowerCase().replace(zd," ")}function fw(e,t,n){return e=n&&n.length>0?`${e+" "+n.join(" ")}`:e,Eo(e,t,_i(e),_i(t),0,0,{})}var Vn='[cmdk-group=""]',za='[cmdk-group-items=""]',pw='[cmdk-group-heading=""]',qd='[cmdk-item=""]',Ci=`${qd}:not([aria-disabled="true"])`,To="cmdk-item-select",dn="data-value",mw=(e,t,n)=>fw(e,t,n),Gd=c.createContext(void 0),fr=()=>c.useContext(Gd),Wd=c.createContext(void 0),ps=()=>c.useContext(Wd),Vd=c.createContext(void 0),Jd=c.forwardRef((e,t)=>{let n=un(()=>{var T,O;return{search:"",value:(O=(T=e.value)!=null?T:e.defaultValue)!=null?O:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),r=un(()=>new Set),a=un(()=>new Map),o=un(()=>new Map),s=un(()=>new Set),l=Kd(e),{label:u,children:d,value:h,onValueChange:p,filter:g,shouldFilter:f,loop:y,disablePointerSelection:m=!1,vimBindings:b=!0,...v}=e,x=ht(),k=ht(),S=ht(),E=c.useRef(null),R=Rw();Zt(()=>{if(h!==void 0){let T=h.trim();n.current.value=T,A.emit()}},[h]),Zt(()=>{R(6,W)},[]);let A=c.useMemo(()=>({subscribe:T=>(s.current.add(T),()=>s.current.delete(T)),snapshot:()=>n.current,setState:(T,O,L)=>{var I,J,F,ce;if(!Object.is(n.current[T],O)){if(n.current[T]=O,T==="search")D(),j(),R(1,U);else if(T==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let ne=document.getElementById(S);ne?ne.focus():(I=document.getElementById(x))==null||I.focus()}if(R(7,()=>{var ne;n.current.selectedItemId=(ne=N())==null?void 0:ne.id,A.emit()}),L||R(5,W),((J=l.current)==null?void 0:J.value)!==void 0){let ne=O??"";(ce=(F=l.current).onValueChange)==null||ce.call(F,ne);return}}A.emit()}},emit:()=>{s.current.forEach(T=>T())}}),[]),$=c.useMemo(()=>({value:(T,O,L)=>{var I;O!==((I=o.current.get(T))==null?void 0:I.value)&&(o.current.set(T,{value:O,keywords:L}),n.current.filtered.items.set(T,P(O,L)),R(2,()=>{j(),A.emit()}))},item:(T,O)=>(r.current.add(T),O&&(a.current.has(O)?a.current.get(O).add(T):a.current.set(O,new Set([T]))),R(3,()=>{D(),j(),n.current.value||U(),A.emit()}),()=>{o.current.delete(T),r.current.delete(T),n.current.filtered.items.delete(T);let L=N();R(4,()=>{D(),(L==null?void 0:L.getAttribute("id"))===T&&U(),A.emit()})}),group:T=>(a.current.has(T)||a.current.set(T,new Set),()=>{o.current.delete(T),a.current.delete(T)}),filter:()=>l.current.shouldFilter,label:u||e["aria-label"],getDisablePointerSelection:()=>l.current.disablePointerSelection,listId:x,inputId:S,labelId:k,listInnerRef:E}),[]);function P(T,O){var L,I;let J=(I=(L=l.current)==null?void 0:L.filter)!=null?I:mw;return T?J(T,n.current.search,O):0}function j(){if(!n.current.search||l.current.shouldFilter===!1)return;let T=n.current.filtered.items,O=[];n.current.filtered.groups.forEach(I=>{let J=a.current.get(I),F=0;J.forEach(ce=>{let ne=T.get(ce);F=Math.max(ne,F)}),O.push([I,F])});let L=E.current;V().sort((I,J)=>{var F,ce;let ne=I.getAttribute("id"),ve=J.getAttribute("id");return((F=T.get(ve))!=null?F:0)-((ce=T.get(ne))!=null?ce:0)}).forEach(I=>{let J=I.closest(za);J?J.appendChild(I.parentElement===J?I:I.closest(`${za} > *`)):L.appendChild(I.parentElement===L?I:I.closest(`${za} > *`))}),O.sort((I,J)=>J[1]-I[1]).forEach(I=>{var J;let F=(J=E.current)==null?void 0:J.querySelector(`${Vn}[${dn}="${encodeURIComponent(I[0])}"]`);F==null||F.parentElement.appendChild(F)})}function U(){let T=V().find(L=>L.getAttribute("aria-disabled")!=="true"),O=T==null?void 0:T.getAttribute(dn);A.setState("value",O||void 0)}function D(){var T,O,L,I;if(!n.current.search||l.current.shouldFilter===!1){n.current.filtered.count=r.current.size;return}n.current.filtered.groups=new Set;let J=0;for(let F of r.current){let ce=(O=(T=o.current.get(F))==null?void 0:T.value)!=null?O:"",ne=(I=(L=o.current.get(F))==null?void 0:L.keywords)!=null?I:[],ve=P(ce,ne);n.current.filtered.items.set(F,ve),ve>0&&J++}for(let[F,ce]of a.current)for(let ne of ce)if(n.current.filtered.items.get(ne)>0){n.current.filtered.groups.add(F);break}n.current.filtered.count=J}function W(){var T,O,L;let I=N();I&&(((T=I.parentElement)==null?void 0:T.firstChild)===I&&((L=(O=I.closest(Vn))==null?void 0:O.querySelector(pw))==null||L.scrollIntoView({block:"nearest"})),I.scrollIntoView({block:"nearest"}))}function N(){var T;return(T=E.current)==null?void 0:T.querySelector(`${qd}[aria-selected="true"]`)}function V(){var T;return Array.from(((T=E.current)==null?void 0:T.querySelectorAll(Ci))||[])}function q(T){let O=V()[T];O&&A.setState("value",O.getAttribute(dn))}function G(T){var O;let L=N(),I=V(),J=I.findIndex(ce=>ce===L),F=I[J+T];(O=l.current)!=null&&O.loop&&(F=J+T<0?I[I.length-1]:J+T===I.length?I[0]:I[J+T]),F&&A.setState("value",F.getAttribute(dn))}function H(T){let O=N(),L=O==null?void 0:O.closest(Vn),I;for(;L&&!I;)L=T>0?Ew(L,Vn):Tw(L,Vn),I=L==null?void 0:L.querySelector(Ci);I?A.setState("value",I.getAttribute(dn)):G(T)}let _=()=>q(V().length-1),B=T=>{T.preventDefault(),T.metaKey?_():T.altKey?H(1):G(1)},ee=T=>{T.preventDefault(),T.metaKey?q(0):T.altKey?H(-1):G(-1)};return c.createElement(te.div,{ref:t,tabIndex:-1,...v,"cmdk-root":"",onKeyDown:T=>{var O;(O=v.onKeyDown)==null||O.call(v,T);let L=T.nativeEvent.isComposing||T.keyCode===229;if(!(T.defaultPrevented||L))switch(T.key){case"n":case"j":{b&&T.ctrlKey&&B(T);break}case"ArrowDown":{B(T);break}case"p":case"k":{b&&T.ctrlKey&&ee(T);break}case"ArrowUp":{ee(T);break}case"Home":{T.preventDefault(),q(0);break}case"End":{T.preventDefault(),_();break}case"Enter":{T.preventDefault();let I=N();if(I){let J=new Event(To);I.dispatchEvent(J)}}}}},c.createElement("label",{"cmdk-label":"",htmlFor:$.inputId,id:$.labelId,style:_w},u),fa(e,T=>c.createElement(Wd.Provider,{value:A},c.createElement(Gd.Provider,{value:$},T))))}),gw=c.forwardRef((e,t)=>{var n,r;let a=ht(),o=c.useRef(null),s=c.useContext(Vd),l=fr(),u=Kd(e),d=(r=(n=u.current)==null?void 0:n.forceMount)!=null?r:s==null?void 0:s.forceMount;Zt(()=>{if(!d)return l.item(a,s==null?void 0:s.id)},[d]);let h=Yd(a,o,[e.value,e.children,o],e.keywords),p=ps(),g=It(R=>R.value&&R.value===h.current),f=It(R=>d||l.filter()===!1?!0:R.search?R.filtered.items.get(a)>0:!0);c.useEffect(()=>{let R=o.current;if(!(!R||e.disabled))return R.addEventListener(To,y),()=>R.removeEventListener(To,y)},[f,e.onSelect,e.disabled]);function y(){var R,A;m(),(A=(R=u.current).onSelect)==null||A.call(R,h.current)}function m(){p.setState("value",h.current,!0)}if(!f)return null;let{disabled:b,value:v,onSelect:x,forceMount:k,keywords:S,...E}=e;return c.createElement(te.div,{ref:Kt(o,t),...E,id:a,"cmdk-item":"",role:"option","aria-disabled":!!b,"aria-selected":!!g,"data-disabled":!!b,"data-selected":!!g,onPointerMove:b||l.getDisablePointerSelection()?void 0:m,onClick:b?void 0:y},e.children)}),bw=c.forwardRef((e,t)=>{let{heading:n,children:r,forceMount:a,...o}=e,s=ht(),l=c.useRef(null),u=c.useRef(null),d=ht(),h=fr(),p=It(f=>a||h.filter()===!1?!0:f.search?f.filtered.groups.has(s):!0);Zt(()=>h.group(s),[]),Yd(s,l,[e.value,e.heading,u]);let g=c.useMemo(()=>({id:s,forceMount:a}),[a]);return c.createElement(te.div,{ref:Kt(l,t),...o,"cmdk-group":"",role:"presentation",hidden:p?void 0:!0},n&&c.createElement("div",{ref:u,"cmdk-group-heading":"","aria-hidden":!0,id:d},n),fa(e,f=>c.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?d:void 0},c.createElement(Vd.Provider,{value:g},f))))}),yw=c.forwardRef((e,t)=>{let{alwaysRender:n,...r}=e,a=c.useRef(null),o=It(s=>!s.search);return!n&&!o?null:c.createElement(te.div,{ref:Kt(a,t),...r,"cmdk-separator":"",role:"separator"})}),ww=c.forwardRef((e,t)=>{let{onValueChange:n,...r}=e,a=e.value!=null,o=ps(),s=It(d=>d.search),l=It(d=>d.selectedItemId),u=fr();return c.useEffect(()=>{e.value!=null&&o.setState("search",e.value)},[e.value]),c.createElement(te.input,{ref:t,...r,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":u.listId,"aria-labelledby":u.labelId,"aria-activedescendant":l,id:u.inputId,type:"text",value:a?e.value:s,onChange:d=>{a||o.setState("search",d.target.value),n==null||n(d.target.value)}})}),vw=c.forwardRef((e,t)=>{let{children:n,label:r="Suggestions",...a}=e,o=c.useRef(null),s=c.useRef(null),l=It(d=>d.selectedItemId),u=fr();return c.useEffect(()=>{if(s.current&&o.current){let d=s.current,h=o.current,p,g=new ResizeObserver(()=>{p=requestAnimationFrame(()=>{let f=d.offsetHeight;h.style.setProperty("--cmdk-list-height",f.toFixed(1)+"px")})});return g.observe(d),()=>{cancelAnimationFrame(p),g.unobserve(d)}}},[]),c.createElement(te.div,{ref:Kt(o,t),...a,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":l,"aria-label":r,id:u.listId},fa(e,d=>c.createElement("div",{ref:Kt(s,u.listInnerRef),"cmdk-list-sizer":""},d)))}),xw=c.forwardRef((e,t)=>{let{open:n,onOpenChange:r,overlayClassName:a,contentClassName:o,container:s,...l}=e;return c.createElement(ns,{open:n,onOpenChange:r},c.createElement(rs,{container:s},c.createElement(ur,{"cmdk-overlay":"",className:a}),c.createElement(hr,{"aria-label":e.label,"cmdk-dialog":"",className:o},c.createElement(Jd,{ref:t,...l}))))}),kw=c.forwardRef((e,t)=>It(n=>n.filtered.count===0)?c.createElement(te.div,{ref:t,...e,"cmdk-empty":"",role:"presentation"}):null),Sw=c.forwardRef((e,t)=>{let{progress:n,children:r,label:a="Loading...",...o}=e;return c.createElement(te.div,{ref:t,...o,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":a},fa(e,s=>c.createElement("div",{"aria-hidden":!0},s)))}),Ae=Object.assign(Jd,{List:vw,Item:gw,Input:ww,Group:bw,Separator:yw,Dialog:xw,Empty:kw,Loading:Sw});function Ew(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}function Tw(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}function Kd(e){let t=c.useRef(e);return Zt(()=>{t.current=e}),t}var Zt=typeof window>"u"?c.useEffect:c.useLayoutEffect;function un(e){let t=c.useRef();return t.current===void 0&&(t.current=e()),t}function It(e){let t=ps(),n=()=>e(t.snapshot());return c.useSyncExternalStore(t.subscribe,n,n)}function Yd(e,t,n,r=[]){let a=c.useRef(),o=fr();return Zt(()=>{var s;let l=(()=>{var d;for(let h of n){if(typeof h=="string")return h.trim();if(typeof h=="object"&&"current"in h)return h.current?(d=h.current.textContent)==null?void 0:d.trim():a.current}})(),u=r.map(d=>d.trim());o.value(e,l,u),(s=t.current)==null||s.setAttribute(dn,l),a.current=l}),a}var Rw=()=>{let[e,t]=c.useState(),n=un(()=>new Map);return Zt(()=>{n.current.forEach(r=>r()),n.current=new Map},[e]),(r,a)=>{n.current.set(r,a),t({})}};function Aw(e){let t=e.type;return typeof t=="function"?t(e.props):"render"in t?t.render(e.props):e}function fa({asChild:e,children:t},n){return e&&c.isValidElement(t)?c.cloneElement(Aw(t),{ref:t.ref},n(t.props.children)):n(t)}var _w={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const Qd=c.forwardRef(({className:e,...t},n)=>i.jsx(Ae,{ref:n,className:Q("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",e),...t}));Qd.displayName=Ae.displayName;const Cw=({children:e,...t})=>i.jsx(os,{...t,children:i.jsx(da,{className:"overflow-hidden p-0 shadow-lg",children:i.jsx(Qd,{className:"[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",children:e})})}),Xd=c.forwardRef(({className:e,...t},n)=>i.jsxs("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[i.jsx($h,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),i.jsx(Ae.Input,{ref:n,className:Q("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",e),...t})]}));Xd.displayName=Ae.Input.displayName;const Zd=c.forwardRef(({className:e,...t},n)=>i.jsx(Ae.List,{ref:n,className:Q("max-h-[300px] overflow-y-auto overflow-x-hidden",e),...t}));Zd.displayName=Ae.List.displayName;const eu=c.forwardRef((e,t)=>i.jsx(Ae.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));eu.displayName=Ae.Empty.displayName;const Mr=c.forwardRef(({className:e,...t},n)=>i.jsx(Ae.Group,{ref:n,className:Q("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",e),...t}));Mr.displayName=Ae.Group.displayName;const Pw=c.forwardRef(({className:e,...t},n)=>i.jsx(Ae.Separator,{ref:n,className:Q("-mx-1 h-px bg-border",e),...t}));Pw.displayName=Ae.Separator.displayName;const Se=c.forwardRef(({className:e,...t},n)=>i.jsx(Ae.Item,{ref:n,className:Q("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",e),...t}));Se.displayName=Ae.Item.displayName;const Nw=[{id:"projects",label:"Projects",icon:Ph},{id:"case-studies",label:"Case Studies",icon:Ch},{id:"about",label:"About",icon:Mh},{id:"experience",label:"Experience",icon:Ah},{id:"articles",label:"Articles",icon:Ih},{id:"skills",label:"Skills",icon:Hh},{id:"recommendations",label:"Praise",icon:Dh},{id:"contact",label:"Contact",icon:Lo}];function Ow({onToggleTheme:e}){const{paletteOpen:t,setPaletteOpen:n,setPanelOpen:r,unlock:a,setMatrixOn:o}=ot(),[s,l]=c.useState("");c.useEffect(()=>{const f=y=>{(y.metaKey||y.ctrlKey)&&y.key.toLowerCase()==="k"&&(y.preventDefault(),n(!t))};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[t,n]),c.useEffect(()=>{t&&a("palette")},[t,a]);const u=f=>{n(!1),l(""),window.setTimeout(f,0)},d=f=>u(()=>{var y;return(y=document.getElementById(f))==null?void 0:y.scrollIntoView({behavior:"smooth",block:"start"})}),h=f=>u(()=>window.open(f,"_blank","noopener,noreferrer")),p=f=>u(()=>{a("secret"),f()}),g=s.trim().length>0;return i.jsxs(Cw,{open:t,onOpenChange:n,children:[i.jsx(Xd,{placeholder:"Type a command or search…  (try: matrix, whoami)",value:s,onValueChange:l}),i.jsxs(Zd,{children:[i.jsx(eu,{children:"No matching command. Try “help”."}),i.jsx(Mr,{heading:"Navigate",children:Nw.map(f=>i.jsxs(Se,{value:`goto ${f.label}`,onSelect:()=>d(f.id),children:[i.jsx(f.icon,{className:"mr-2 text-muted-foreground"}),i.jsx("span",{children:f.label})]},f.id))}),i.jsxs(Mr,{heading:"Actions",children:[i.jsxs(Se,{value:"book a call hire contact",onSelect:()=>u(()=>{a("contact"),On(),Nn(ie.calendly)}),children:[i.jsx(Xn,{className:"mr-2 text-primary"}),i.jsx("span",{children:"Book a call"}),i.jsx(Yn,{className:"ml-auto h-3.5 w-3.5 opacity-50"})]}),i.jsxs(Se,{value:"download cv resume",onSelect:()=>h(ie.cv),children:[i.jsx(Io,{className:"mr-2 text-muted-foreground"}),i.jsx("span",{children:"Download CV"})]}),i.jsxs(Se,{value:"github code",onSelect:()=>h("https://github.com/binSaed"),children:[i.jsx(Do,{className:"mr-2 text-muted-foreground"}),i.jsx("span",{children:"GitHub"})]}),i.jsxs(Se,{value:"linkedin",onSelect:()=>h("https://www.linkedin.com/in/binsaed/"),children:[i.jsx($o,{className:"mr-2 text-muted-foreground"}),i.jsx("span",{children:"LinkedIn"})]}),i.jsxs(Se,{value:"youtube channel videos",onSelect:()=>h("https://www.youtube.com/@binSaed"),children:[i.jsx(Cl,{className:"mr-2 text-muted-foreground"}),i.jsx("span",{children:"YouTube"})]}),i.jsxs(Se,{value:"toggle theme dark light mode",onSelect:()=>u(e),children:[i.jsx(_l,{className:"mr-2 text-muted-foreground"}),i.jsx("span",{children:"Toggle theme"})]}),i.jsxs(Se,{value:"secrets missions achievements mission log",onSelect:()=>u(()=>r(!0)),children:[i.jsx(ka,{className:"mr-2 text-muted-foreground"}),i.jsx("span",{children:"Secrets / mission log"})]})]}),g&&i.jsxs(Mr,{heading:"Secrets",children:[i.jsxs(Se,{value:"matrix",onSelect:()=>p(()=>o(!0)),children:[i.jsx(ka,{className:"mr-2 text-primary"}),i.jsx("span",{children:"matrix"}),i.jsx("span",{className:"ml-auto kicker text-muted-foreground/60",children:"enter the rain"})]}),i.jsxs(Se,{value:"whoami",onSelect:()=>p(()=>Or("operative",{description:"Abdelrahman Saed — full-stack engineer. You're already in the system."})),children:[i.jsx(Sa,{className:"mr-2 text-primary"}),i.jsx("span",{children:"whoami"})]}),i.jsxs(Se,{value:"sudo hire",onSelect:()=>p(()=>{a("contact"),On({particleCount:160,spread:110}),Or("permission granted ✅",{description:"Smart move. Let's talk — opening the calendar."}),window.setTimeout(()=>Nn(ie.calendly),600)}),children:[i.jsx(ka,{className:"mr-2 text-primary"}),i.jsx("span",{children:"sudo hire"})]}),i.jsxs(Se,{value:"coffee",onSelect:()=>p(()=>Or("☕ brewing…",{description:"Best ideas start over coffee. Book a call?"})),children:[i.jsx(Sa,{className:"mr-2 text-primary"}),i.jsx("span",{children:"coffee"})]}),i.jsxs(Se,{value:"help",onSelect:()=>u(()=>r(!0)),children:[i.jsx(Sa,{className:"mr-2 text-muted-foreground"}),i.jsx("span",{children:"help"})]})]})]})]})}function jw(){const{toasts:e,dismissToast:t}=ot();return i.jsx("div",{className:"pointer-events-none fixed right-4 top-20 z-[120] flex w-[min(20rem,calc(100vw-2rem))] flex-col gap-2","aria-live":"polite","aria-atomic":"false",children:e.map(n=>i.jsx(Iw,{achievement:n,onDone:()=>t(n.id)},n.id))})}function Iw({achievement:e,onDone:t}){return c.useEffect(()=>{const n=window.setTimeout(t,4200);return()=>window.clearTimeout(n)},[t]),i.jsxs("div",{role:"status",className:"pointer-events-auto group flex items-start gap-3 border border-primary/50 bg-card/95 p-3 shadow-[0_0_24px_-6px_hsl(var(--primary)/0.5)] backdrop-blur-md animate-slide-down",onClick:t,children:[i.jsx("span",{className:"mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-primary/15 text-primary",children:i.jsx(Rl,{className:"h-3.5 w-3.5",strokeWidth:3})}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("div",{className:"kicker text-primary",children:"[ unlocked ]"}),i.jsx("div",{className:"mt-1 font-heading text-sm leading-tight text-foreground",children:e.label})]})]})}function Dw(){const{scanPct:e,unlocked:t,achievements:n,setPanelOpen:r}=ot(),a=fs(),[o,s]=c.useState(!1);return c.useEffect(()=>{const l=()=>{window.scrollY>window.innerHeight*.35&&s(!0)};return l(),window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),i.jsxs("button",{type:"button",onClick:()=>r(!0),"aria-label":`Open mission log. System scan ${e}%, ${t.size} of ${n.length} secrets found.`,className:Q("group fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-3","border border-border bg-card/85 px-3 py-2 backdrop-blur-md transition-all duration-500 ease-out","hover:border-primary/60 hover:shadow-[0_0_20px_-6px_hsl(var(--primary)/0.5)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",!o&&"pointer-events-none translate-y-4 opacity-0",a&&"-translate-y-[4.25rem]"),"aria-hidden":!o,tabIndex:o?0:-1,children:[i.jsxs("div",{className:"flex flex-col items-start gap-1",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"kicker text-muted-foreground/70",children:"scan"}),i.jsxs("span",{className:"kicker tabular-nums text-primary",children:[e,"%"]}),i.jsx("span",{className:"kicker text-muted-foreground/40",children:"·"}),i.jsxs("span",{className:"kicker tabular-nums text-muted-foreground",children:["◈ ",t.size,"/",n.length]})]}),i.jsx("div",{className:"h-1 w-32 overflow-hidden bg-border",children:i.jsx("div",{className:"h-full bg-primary transition-[width] duration-500 ease-out",style:{width:`${e}%`}})})]}),i.jsxs("kbd",{className:"hidden items-center gap-1 border border-border px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground group-hover:border-primary/40 md:inline-flex",children:[i.jsx(Al,{className:"h-3 w-3"}),"K"]})]})}function $w(){const{matrixOn:e,setMatrixOn:t}=ot(),n=c.useRef(null);return c.useEffect(()=>{if(!e)return;const r=()=>t(!1),a=x=>{x.key==="Escape"&&r()};window.addEventListener("keydown",a);const o=n.current,s=o==null?void 0:o.getContext("2d");if(!o||!s)return()=>window.removeEventListener("keydown",a);const l="アイウエオカキクケコサシスセソ0123456789ABCDEF<>/[]{}=$#".split(""),u=16;let d=0,h=[];const p=()=>{o.width=window.innerWidth,o.height=window.innerHeight,d=Math.floor(o.width/u),h=Array.from({length:d},()=>Math.floor(Math.random()*o.height/u))};p(),window.addEventListener("resize",p);const g="hsl(186 100% 75%)",f="hsl(186 100% 45%)",y=()=>{s.fillStyle="rgba(2, 6, 12, 0.12)",s.fillRect(0,0,o.width,o.height),s.font=`${u}px 'JetBrains Mono', monospace`;for(let x=0;x<h.length;x++){const k=l[Math.floor(Math.random()*l.length)],S=x*u,E=h[x]*u;s.fillStyle=Math.random()>.975?g:f,s.fillText(k,S,E),E>o.height&&Math.random()>.975&&(h[x]=0),h[x]++}},m=gd();let b=0,v=0;if(m)s.fillStyle="rgba(2, 6, 12, 0.92)",s.fillRect(0,0,o.width,o.height),y();else{const x=()=>{y(),b=window.requestAnimationFrame(()=>{v=window.setTimeout(x,45)})};x()}return()=>{window.removeEventListener("keydown",a),window.removeEventListener("resize",p),window.cancelAnimationFrame(b),window.clearTimeout(v)}},[e,t]),e?i.jsxs("div",{className:"fixed inset-0 z-[200] cursor-pointer bg-black/80 animate-fade-in",onClick:()=>t(!1),role:"dialog","aria-label":"Matrix mode easter egg",children:[i.jsx("canvas",{ref:n,className:"h-full w-full"}),i.jsxs("button",{type:"button",onClick:()=>t(!1),"aria-label":"Exit matrix mode",className:"absolute right-4 top-4 flex items-center gap-2 border border-primary/50 bg-card/80 px-3 py-2 text-primary backdrop-blur-md kicker",children:[i.jsx(ea,{className:"h-4 w-4"})," exit"]}),i.jsx("p",{className:"pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 kicker text-primary/80",children:"wake up, neo… (click anywhere to exit)"})]}):null}function Lw(){const{panelOpen:e,setPanelOpen:t,achievements:n,unlocked:r,setPaletteOpen:a}=ot(),o=r.size,s=n.length,l=Math.round(o/s*100);return i.jsx(os,{open:e,onOpenChange:t,children:i.jsxs(da,{className:"max-w-md gap-0 border-border p-0",children:[i.jsxs(ss,{className:"space-y-3 border-b border-border p-5 text-left",children:[i.jsxs(is,{className:"flex items-baseline gap-2 font-heading text-xl tracking-tight",children:[i.jsx("span",{className:"text-muted-foreground/60",children:"$"}),"cat ./secrets"]}),i.jsx(ls,{className:"sr-only",children:"A log of hidden interactions on the site. Found secrets show their name; locked ones show a hint."}),i.jsxs("div",{className:"space-y-1.5",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"kicker text-muted-foreground",children:"missions found"}),i.jsxs("span",{className:"kicker tabular-nums text-primary",children:[o," / ",s]})]}),i.jsx("div",{className:"h-1 w-full overflow-hidden bg-border",children:i.jsx("div",{className:"h-full bg-primary transition-[width] duration-500 ease-out",style:{width:`${l}%`}})})]})]}),i.jsx("ul",{className:"max-h-[55vh] divide-y divide-border/60 overflow-y-auto",children:n.map(u=>i.jsx(Fw,{achievement:u,found:r.has(u.id)},u.id))}),i.jsxs("div",{className:"flex items-center justify-between gap-2 border-t border-border p-4",children:[i.jsx("span",{className:"kicker text-muted-foreground/70",children:o===s?"all systems breached ✦":"keep digging…"}),i.jsxs("button",{type:"button",onClick:()=>{t(!1),window.setTimeout(()=>a(!0),0)},className:"inline-flex items-center gap-1.5 border border-border px-2.5 py-1.5 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground",children:[i.jsx(Al,{className:"h-3.5 w-3.5"}),i.jsx("span",{className:"kicker",children:"command line"})]})]})]})})}function Mw(e){return e.split(" ").map(t=>"█".repeat(t.length)).join(" ")}function Fw({achievement:e,found:t}){return i.jsxs("li",{className:"flex items-start gap-3 px-5 py-3",children:[i.jsx("span",{className:Q("mt-0.5 grid h-6 w-6 shrink-0 place-items-center border",t?"border-primary/50 bg-primary/15 text-primary":"border-border bg-muted/30 text-muted-foreground/50"),children:t?i.jsx(Rl,{className:"h-3.5 w-3.5",strokeWidth:3}):i.jsx(Oh,{className:"h-3 w-3"})}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsx("div",{className:Q("font-heading text-sm leading-tight",t?"text-foreground":"select-none tracking-wider text-muted-foreground/40"),"aria-label":t?e.label:"Locked secret",children:t?e.label:Mw(e.label)}),i.jsx("div",{className:Q("mt-1 font-mono text-xs",t?"text-primary/70":"text-muted-foreground/70"),children:t?e.done:e.hint})]})]})}function Hw({onToggleTheme:e}){const{unlock:t,setMatrixOn:n}=ot();yy();const r=c.useCallback(()=>{t("konami"),On({particleCount:180,spread:120,origin:{y:.5}}),Or("cheat code accepted",{description:"Entering the matrix…"}),n(!0)},[t,n]);return aw(r),i.jsxs(i.Fragment,{children:[i.jsx(Ow,{onToggleTheme:e}),i.jsx(jw,{}),i.jsx(Dw,{}),i.jsx(Lw,{}),i.jsx($w,{})]})}function Uw(){if(typeof window>"u")return"dark";const e=localStorage.getItem("theme");return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}let rr=Uw();const Ro=new Set;function Pi(e){rr=e,document.documentElement.classList.toggle("dark",e==="dark"),localStorage.setItem("theme",e),Ro.forEach(t=>t())}typeof document<"u"&&(document.documentElement.classList.toggle("dark",rr==="dark"),localStorage.setItem("theme",rr));function Bw(e){return Ro.add(e),()=>Ro.delete(e)}function zw(){return{theme:c.useSyncExternalStore(Bw,()=>rr,()=>"dark"),toggleTheme:()=>Pi(rr==="dark"?"light":"dark"),setTheme:Pi}}const qw=c.lazy(()=>oe(()=>import("./AboutSection-CA9W80xO.js"),__vite__mapDeps([0,1,2,3,4])).then(e=>({default:e.AboutSection}))),Gw=c.lazy(()=>oe(()=>import("./ExperienceSection-CsuiXDF-.js"),__vite__mapDeps([5,2,1])).then(e=>({default:e.ExperienceSection}))),Ww=c.lazy(()=>oe(()=>import("./ProjectsSection-pzuihSvq.js").then(e=>e.P),__vite__mapDeps([6,2,1,3,7])).then(e=>({default:e.ProjectsSection}))),Vw=c.lazy(()=>oe(()=>import("./CaseStudiesSection-D4hRk1Gu.js"),__vite__mapDeps([8,2,9,1,10,3])).then(e=>({default:e.CaseStudiesSection}))),Jw=c.lazy(()=>oe(()=>import("./ArticlesSection-9yebJF6O.js"),__vite__mapDeps([11,2,1,12])).then(e=>({default:e.ArticlesSection}))),Kw=c.lazy(()=>oe(()=>import("./SpeakingSection-jJWYdzXZ.js"),__vite__mapDeps([13,2,1,3])).then(e=>({default:e.SpeakingSection}))),Yw=c.lazy(()=>oe(()=>import("./SkillsSection-Dw_WjXG4.js"),__vite__mapDeps([14,1,10,15,4,2])).then(e=>({default:e.SkillsSection}))),Qw=c.lazy(()=>oe(()=>import("./RecommendationsSection-5bbikBBQ.js"),__vite__mapDeps([16,2,1,3])).then(e=>({default:e.RecommendationsSection}))),Xw=c.lazy(()=>oe(()=>import("./FAQSection-B10v-Ykl.js"),__vite__mapDeps([17,1,2])).then(e=>({default:e.FAQSection}))),Zw=c.lazy(()=>oe(()=>import("./AvailabilitySection-BN13WgLA.js"),__vite__mapDeps([18,2,1,19,20,21])).then(e=>({default:e.AvailabilitySection}))),ev=c.lazy(()=>oe(()=>import("./ContactSection-tFHuz0C8.js"),__vite__mapDeps([22,2,1,3,4])).then(e=>({default:e.ContactSection}))),tv=c.lazy(()=>oe(()=>import("./Footer-BTDYjV2B.js"),__vite__mapDeps([23,2])).then(e=>({default:e.Footer}))),nv=()=>{const{theme:e,toggleTheme:t}=zw(),n=_o();return c.useEffect(()=>{const a=setTimeout(()=>{if(n.hash){const o=document.querySelector(n.hash);o&&o.scrollIntoView({behavior:"smooth"})}},300);return()=>clearTimeout(a)},[n.hash,n.key]),i.jsxs("div",{className:"min-h-screen bg-background",children:[i.jsxs(Xg,{children:[i.jsx("title",{children:"Abdelrahman Saed | Senior Mobile Engineer (Flutter)"}),i.jsx("meta",{name:"description",content:"Senior Mobile Engineer (Flutter) — 7 years shipping iOS & Android apps to 5M+ users. Owns mobile architecture, offline-first systems, and release engineering."}),i.jsx("link",{rel:"canonical",href:"https://bnsaed.com/"}),i.jsx("meta",{property:"og:type",content:"website"}),i.jsx("meta",{property:"og:url",content:"https://bnsaed.com/"}),i.jsx("meta",{property:"og:title",content:"Abdelrahman Saed | Senior Mobile Engineer (Flutter)"}),i.jsx("meta",{property:"og:description",content:"Senior Mobile Engineer (Flutter) — 7 years shipping iOS & Android apps to 5M+ users. Owns mobile architecture, offline-first systems, and release engineering."}),i.jsx("meta",{property:"og:image",content:"https://bnsaed.com/og.png"}),i.jsx("meta",{property:"og:image:width",content:"1200"}),i.jsx("meta",{property:"og:image:height",content:"630"}),i.jsx("meta",{property:"og:image:alt",content:"Abdelrahman Saed — Senior Mobile Engineer & Architect (Flutter). 5M+ users, 99.9% crash-free, 350+ releases."}),i.jsx("meta",{property:"og:site_name",content:"Abdelrahman Saed Portfolio"}),i.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),i.jsx("meta",{name:"twitter:url",content:"https://bnsaed.com/"}),i.jsx("meta",{name:"twitter:title",content:"Abdelrahman Saed | Senior Mobile Engineer (Flutter)"}),i.jsx("meta",{name:"twitter:description",content:"Senior Mobile Engineer & Flutter architect — 7 years shipping production iOS & Android apps to 5M+ users. Available for hire — full-time, fractional, contract, or advisory."}),i.jsx("meta",{name:"twitter:image",content:"https://bnsaed.com/og.png"}),i.jsx("meta",{name:"twitter:image:alt",content:"Abdelrahman Saed — Senior Mobile Engineer & Architect (Flutter). 5M+ users, 99.9% crash-free, 350+ releases."})]}),i.jsx(rw,{}),i.jsx(vy,{theme:e,toggleTheme:t}),i.jsxs("main",{id:"main",tabIndex:-1,children:[i.jsx(Qy,{}),i.jsx(Zy,{}),i.jsxs(c.Suspense,{fallback:i.jsx("div",{className:"min-h-[200px]"}),children:[i.jsx(Gw,{}),i.jsx(Ww,{}),i.jsx(ew,{title:"Need this kind of engineering on your mobile app?",subtitle:"5M+ users shipped, 99.9% crash-free, weekly releases. Let's talk about your platform.",source:"after_projects",className:"mt-12"}),i.jsx(Vw,{}),i.jsx(qw,{}),i.jsx(Jw,{}),i.jsx(Kw,{}),i.jsx(Yw,{}),i.jsx(Qw,{}),i.jsx(Xw,{}),i.jsx(Zw,{}),i.jsx(ev,{})]})]}),i.jsx(c.Suspense,{fallback:null,children:i.jsx(tv,{})}),i.jsx(tw,{}),i.jsx(nw,{}),i.jsx(Hw,{onToggleTheme:t})]})},qa="a, button, input, textarea, select, label, [role='button'], .dossier-card";function rv(){const[e,t]=c.useState(!1),n=c.useRef(null);return c.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const r=window.matchMedia("(hover: hover) and (pointer: fine)"),a=window.matchMedia("(prefers-reduced-motion: reduce)"),o=()=>t(r.matches&&!a.matches);return o(),r.addEventListener("change",o),a.addEventListener("change",o),()=>{r.removeEventListener("change",o),a.removeEventListener("change",o)}},[]),c.useEffect(()=>{const r=n.current;if(!e||!r)return;let a=window.innerWidth/2,o=window.innerHeight/2,s=a,l=o,u=0,d=!1;const h=v=>{a=v.clientX,o=v.clientY,d||(d=!0,r.style.opacity="1")},p=()=>{d=!1,r.style.opacity="0"},g=()=>r.classList.add("is-down"),f=()=>r.classList.remove("is-down"),y=v=>{var x,k;(k=(x=v.target)==null?void 0:x.closest)!=null&&k.call(x,qa)&&r.classList.add("is-active")},m=v=>{var S,E;const x=v.target;if(!((S=x==null?void 0:x.closest)!=null&&S.call(x,qa)))return;const k=v.relatedTarget;(E=k==null?void 0:k.closest)!=null&&E.call(k,qa)||r.classList.remove("is-active")},b=()=>{s+=(a-s)*.18,l+=(o-l)*.18,r.style.transform=`translate3d(${s}px, ${l}px, 0) translate(-50%, -50%)`,u=requestAnimationFrame(b)};return u=requestAnimationFrame(b),window.addEventListener("pointermove",h,{passive:!0}),document.addEventListener("pointerdown",g),document.addEventListener("pointerup",f),document.addEventListener("mouseover",y),document.addEventListener("mouseout",m),document.addEventListener("mouseleave",p),window.addEventListener("blur",p),()=>{cancelAnimationFrame(u),window.removeEventListener("pointermove",h),document.removeEventListener("pointerdown",g),document.removeEventListener("pointerup",f),document.removeEventListener("mouseover",y),document.removeEventListener("mouseout",m),document.removeEventListener("mouseleave",p),window.removeEventListener("blur",p)}},[e]),e?i.jsx("div",{ref:n,className:"dossier-cursor",style:{opacity:0},"aria-hidden":"true"}):null}const av=[{slug:"flutter-cached-pdfview-guide",title:"Building a Cached PDF Viewer in Flutter",seoTitle:"Fast Flutter PDF Viewer from URL: Cached & Offline Guide",description:"How to load a PDF from a URL in Flutter with fast native rendering, on-device caching, and offline support — a flutter_cached_pdfview guide from its author.",date:"2024-01-15",dateModified:"2026-07-30",readTime:"7 min read",tags:["Flutter","Dart","PDF","Mobile"],caseStudySlug:"flutter-cached-pdfview",difficulty:"Intermediate",featured:!0,popular:!0},{slug:"github-actions-branch-protection-guardrails",title:"The repo that rejects my own pushes to master",description:"Two small GitHub Actions that stop accidental direct pushes to master and auto-restore build-breaking files — reversible by design, with an explicit escape hatch.",date:"2026-04-14",readTime:"6 min read",tags:["GitHub Actions","DevOps","CI/CD","Flutter"],difficulty:"Intermediate",popular:!0},{slug:"automate-pull-request-hygiene",title:"PRs that fill in their own paperwork (and a gate that won't let bad code merge)",seoTitle:"Automating PR Hygiene with GitHub Actions",description:"Separating the chores of code review from the judgment: auto-context on every PR, plus a quality gate that validates translations, runs the analyzer, and cleans up after itself.",date:"2026-04-21",dateModified:"2026-07-25",readTime:"6 min read",tags:["GitHub Actions","Developer Experience","CI/CD","Code Review"]},{slug:"sync-jira-with-github-prs",title:"Making Jira and GitHub agree without anyone updating both",description:"A branch-name regex and one REST call mirror Jira status, fix versions, and labels onto every PR — plus a Slow PR flag that surfaces finished work that is not shipping.",date:"2026-04-28",readTime:"7 min read",tags:["GitHub Actions","Jira","CI/CD","Developer Experience"]},{slug:"auto-rebase-and-detect-merge-conflicts",title:"Every merge to master quietly breaks other PRs. So I built a radar for it.",seoTitle:"Auto-Rebase Open PRs and Detect Merge Conflicts",description:"Two GitHub Actions workflows that rebase every open PR on each merge to master and route conflict alerts to the right author — so merge conflicts never sit unnoticed.",date:"2026-05-05",dateModified:"2026-07-25",readTime:"6 min read",tags:["GitHub Actions","Git","CI/CD","DevOps"]},{slug:"bot-that-resolves-merge-conflicts",title:"I let a bot resolve merge conflicts and push the fix. Here's how I made that safe.",seoTitle:"Letting a Bot Resolve Merge Conflicts Safely",description:"How to ship a genuinely dangerous automation safely — by shrinking its blast radius to one provably-safe case, working only in throwaway space, and failing closed on anything unexpected.",date:"2026-05-12",dateModified:"2026-07-25",readTime:"8 min read",tags:["GitHub Actions","Git","Automation","CI/CD"]},{slug:"automated-stale-branch-cleanup",title:"A repo that cleans up after itself — without deleting the wrong branch",seoTitle:"Automated Stale Branch Cleanup with GitHub Actions",description:"A GitHub Actions workflow that classifies and deletes stale branches safely — per-run cap, deferral window, and a full audit trail. No accidental deletes.",date:"2026-06-02",dateModified:"2026-07-25",readTime:"6 min read",tags:["GitHub Actions","Git","DevOps","Automation"]},{slug:"ai-weekly-engineering-reviews",title:"I built an AI that writes weekly engineering summaries. Then I had to decide whether I should.",seoTitle:"Should an AI Write Your Team's Weekly Summaries?",description:"Aggregating git and Jira into per-person weekly summaries with an LLM is a weekend project. Doing it responsibly — private, descriptive, transparent — is the actual work.",date:"2026-06-09",readTime:"8 min read",tags:["AI in Development","Engineering Leadership","Team Management","Automation"]},{slug:"managing-large-flutter-codebases",title:"Best Practices for Managing Large Flutter Codebases",description:"Hard-won lessons from scaling iStoria — a 220K+ line, 60+ module Flutter app serving 5M+ learners — into a codebase a small team can still ship weekly.",date:"2026-07-06",readTime:"9 min read",tags:["Flutter","Dart","Architecture","Scale"],caseStudySlug:"istoria",difficulty:"Advanced",featured:!0},{slug:"flutter-build-flavors-guide",title:"App Flavors in Flutter: One Codebase, Every Environment",description:"How to run local, staging, and production from a single Flutter codebase with build flavors — Dart entry points, typed per-flavor config, and the Android and iOS native wiring that makes it real.",date:"2026-07-06",readTime:"9 min read",tags:["Flutter","Dart","Build & Release","DevOps"],caseStudySlug:"istoria",difficulty:"Intermediate"},{slug:"offline-first-vs-local-first",title:"Offline-First vs Local-First: What's the Difference?",description:"Offline-first vs local-first: one is about working with no network, the other about who owns the canonical data — with examples from a 5M-user Flutter app.",date:"2026-07-07",readTime:"7 min read",tags:["Offline-first","Architecture","Flutter","PowerSync"],caseStudySlug:"offline-first-sync",difficulty:"Advanced"}],ov=[{id:"self-driving-repo",name:"The Self-Driving Repo",description:"A CI/CD automation series: small GitHub Actions that run the boring, error-prone parts of engineering — guardrails, PR hygiene, a merge-conflict radar, safe cleanup — so releases stay calm.",slugs:["github-actions-branch-protection-guardrails","automate-pull-request-hygiene","sync-jira-with-github-prs","auto-rebase-and-detect-merge-conflicts","bot-that-resolves-merge-conflicts","automated-stale-branch-cleanup","ai-weekly-engineering-reviews"]}],In="https://bnsaed.com",sv=`${In}/#person`,iv=`${In}/#brand`,lv=`${In}/#istoria`,cv="https://avatars.githubusercontent.com/u/33700292?v=4&s=512",dv=Object.freeze({"@type":"Person","@id":sv,name:we.name,alternateName:["binSaed","Abdelrahman Saeed","Abdulrahman Saed","Abdulrahman bin Saed","Abdulrahman bin Said","عبدالرحمن سعيد","عبد الرحمن سعيد","بن سعيد"],url:`${In}/`,image:cv,jobTitle:we.currentTitle,description:"Senior Mobile Engineer with 7 years shipping production Flutter apps for iOS and Android to 5M+ users — Flutter, Dart, BLoC/Cubit, Clean Architecture, and release engineering.",disambiguatingDescription:"مهندس تطبيقات موبايل أول متخصص في تطوير تطبيقات Flutter لنظامي iOS و Android.",email:we.email,worksFor:{"@type":"Organization","@id":lv,name:we.company,url:we.companyUrl},address:{"@type":"PostalAddress",addressLocality:"Cairo",addressCountry:"EG"},knowsLanguage:["English","Arabic"],sameAs:[ie.github,ie.linkedin,ie.youtube,ie.stackoverflow,ie.pubdev]}),uv=Object.freeze({"@type":"Organization","@id":iv,name:we.name,url:`${In}/`,logo:{"@type":"ImageObject",url:`${In}/icon-512.png`,width:512,height:512},sameAs:[ie.github,ie.linkedin,ie.youtube,ie.stackoverflow,ie.pubdev]});function He(e){const t=av.find(n=>n.slug===e);if(!t)throw new Error(`articleMeta.js has no entry for slug "${e}"`);return t}const en=[{...He("flutter-cached-pdfview-guide"),content:`
# Building a Cached PDF Viewer in Flutter

![flutter_cached_pdfview — native cached PDF viewing on iOS and Android](/article-images/flutter-cached-pdfview-guide-hero.webp)

> **Updated July 2026** — refreshed for \`flutter_cached_pdfview\` ^0.4.4 and modern Flutter 3.x idioms (\`super.key\`, \`const\` constructors, current null-safety).

A cached PDF viewer in Flutter displays remote PDFs while caching each downloaded file on-device, so it opens instantly and works offline on every load after the first. The \`flutter_cached_pdfview\` package builds this for you: it wraps the native \`flutter_pdfview\` renderer with \`flutter_cache_manager\`, exposing URL, asset, and file-path sources plus progress placeholders and error widgets out of the box. To use it, add \`flutter_cached_pdfview: ^0.4.4\` to your \`pubspec.yaml\`, then render \`const PDF().cachedFromUrl(url, ...)\`. The first load downloads and caches the document; every later load is served straight from disk, cutting both wait time and bandwidth. The package targets Android API 20 and above and iOS 11 and above, and is maintained on pub.dev by its original author. The guide below walks through installation, basic usage with modern Flutter 3.x syntax, multiple sources, loading states, and error handling.

I wrote \`flutter_cached_pdfview\`, and I've maintained it since 2020. It grew out of the same problem showing up in project after project — remote PDFs that re-downloaded on every open, broke the moment the network dropped, and needed the same loading and error boilerplate rebuilt each time. So I built the cached, offline-capable, native-rendering path once, made it the default, and open-sourced it. It's since grown to **134+ GitHub stars, 501+ pub.dev likes, 57,000+ downloads, and 100+ forks**, shipped under the MIT license and used in production document readers, e-book apps, and EdTech products — including the PDF experiences I shipped at iStoria. If you want the design story behind it — the constraints, the two-native-renderers-one-API problem, and what six years of maintenance taught me — read the [flutter_cached_pdfview case study](/case-studies/flutter-cached-pdfview/). This article is the hands-on guide to using it.

## Why does PDF caching matter in a mobile app?

Loading a PDF from a URL is deceptively easy to get wrong. The naive approach — hand the URL to a renderer and let it fetch — re-downloads the whole file on every open. That's slow for the user, wasteful of bandwidth, and it falls apart entirely offline. Caching turns each document into a one-time download:

- **Faster load times** — after the first open, cached files resolve straight from disk with no network round-trip.
- **Reduced bandwidth** — a document is fetched once, not once per view. That's meaningful on metered or slow connections.
- **Offline support** — because reads resolve to the on-device cache, previously viewed PDFs keep working with no connection at all.

The goal of the package is to make that behavior the *default*, in a few lines, on both platforms — rather than something you assemble from a renderer, a cache manager, and a pile of state handling.

## Fast, offline, native — why it's one of the most popular Flutter PDF viewers

If you search for a Flutter PDF viewer, you'll find a long list of packages. What makes \`flutter_cached_pdfview\` one of the most popular — **134+ GitHub stars, 501+ pub.dev likes, 57,000+ downloads, and 100+ forks** across thousands of shipped apps — is that it combines three things most alternatives make you build yourself:

- **Fast loading from the second open onward.** The first load downloads the document once via \`flutter_cache_manager\`; every subsequent open of the same URL resolves straight from disk with no network round-trip. For users re-opening a manual, statement, or textbook, that's the difference between a fast loading PDF viewer and one that makes them wait on the network every time.
- **High-performance native rendering.** The package wraps \`flutter_pdfview\`, which delegates to the platform's own PDF renderer (Android's \`PdfRenderer\` / iOS's \`PDFKit\`) rather than shipping a JavaScript or Dart-based renderer. That's the high-performance Flutter PDF viewer path — documents look and scroll the way the OS itself renders them, with gesture zoom and pan that behave natively on each platform.
- **Offline by default, feature-rich surface.** Once a document is cached it keeps working with no connection at all, and the same widget exposes swipe direction, night mode, password-protected documents, auto-spacing, and page-fling — the feature-rich configuration surface most teams end up needing, without leaving the widget.

Put together, that's the goal many teams are chasing when they go looking for the fastest PDF viewer in Flutter, or a blazing fast PDF viewer that doesn't re-download on every open: native rendering for performance, on-device caching for speed and offline, and a configuration surface that covers the common cases. The rest of this guide is the hands-on version.

## Getting started

Add the package to your \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  flutter_cached_pdfview: ^0.4.4
\`\`\`

Then run \`flutter pub get\`. There's no platform-channel setup or manual permission wiring for the common case — the package leans on the native renderers the platforms already provide.

## Basic usage

Here's a minimal viewer, written with modern Flutter 3.x syntax (\`super.key\` instead of the old \`Key? key\` / \`super(key: key)\` boilerplate):

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

The first time this page opens \`pdfUrl\`, the file downloads and is stored in a managed on-device cache; every subsequent open of the same URL is served from disk.

## Loading a PDF from a URL, asset, or file path

The same widget renders three sources behind one API, so you can swap where a document comes from without touching your UI:

\`\`\`dart
// Remote URL — downloaded once, then cached and offline-safe.
const PDF().cachedFromUrl('https://example.com/doc.pdf');

// Bundled asset — shipped inside your app.
const PDF().fromAsset('assets/manual.pdf');

// Local file path — e.g. a document the user already downloaded.
const PDF().fromPath('/storage/emulated/0/Download/report.pdf');
\`\`\`

This matters more than it looks: a lot of apps start with bundled assets, move to remote documents, then add a "downloaded files" section. With one API across all three, that evolution doesn't ripple through your widget tree.

## Customizable loading states

Because downloads take real time on real networks, \`placeholder\` is part of the public API and receives download progress, so you can show something better than a bare spinner:

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

## Error handling

Networks fail and files get corrupted, so \`errorWidget\` is first-class too. Give the user a clear message and a way to recover:

\`\`\`dart
errorWidget: (error) => Center(
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      const Icon(Icons.error, size: 64, color: Colors.red),
      const SizedBox(height: 16),
      const Text('Failed to load PDF'),
      TextButton(
        onPressed: () { /* retry logic — e.g. setState to rebuild the viewer */ },
        child: const Text('Retry'),
      ),
    ],
  ),
),
\`\`\`

## Configuring the viewer

The \`PDF()\` constructor forwards the underlying \`flutter_pdfview\` options, giving you the feature-rich configuration surface the native renderers expose — scroll direction, password-protected documents, night mode, and page behavior — without leaving the widget:

\`\`\`dart
const PDF(
  swipeHorizontal: true, // page through side to side instead of vertical scroll
  nightMode: false,      // invert colors for dark reading
  password: 'secret',    // open password-protected PDFs
  autoSpacing: true,
  pageFling: true,
).cachedFromUrl(pdfUrl);
\`\`\`

Gesture zoom and pan come from the native renderers, so pinch-to-zoom behaves the way users expect on each platform — you don't wire it up yourself.

## How it works under the hood

The package is a deliberately thin composition rather than a reinvention, and that's the reason it stays small and fast:

- **Native rendering, not a Dart PDF engine.** Pixel-level rendering is delegated to the platform components through \`flutter_pdfview\`, so documents look and scroll natively on each OS — and the package doesn't ship a heavyweight engine inside every app that depends on it.
- **Caching via \`flutter_cache_manager\`.** Remote files are downloaded once into a managed cache; later reads resolve to a local file. That's what makes repeat opens instant and offline-safe.
- **A source abstraction.** \`cachedFromUrl\`, \`fromAsset\`, and \`fromPath\` unify remote, bundled, and local documents behind one widget.
- **Lifecycle hooks as API.** \`placeholder\` and \`errorWidget\` make loading and failure states something you design for, not bolt on afterward.

It supports **Android API 20+** and **iOS 11+**, and ships under the **MIT** license.

## Keeping it current

A package thousands of apps embed can't break them on the next Flutter release. Over six years \`flutter_cached_pdfview\` has moved through null-safety, \`super.key\`, and evolving \`flutter_cache_manager\` APIs while keeping downstream apps working. If you're pinning a version, \`^0.4.4\` tracks the current line; the [GitHub repo](https://github.com/binSaed/flutter_cached_pdfview) has the changelog and migration notes.

## Wrap-up

For remote PDFs in Flutter, caching isn't a nice-to-have — it's the difference between an app that feels instant and works offline and one that re-fetches megabytes on every tap. \`flutter_cached_pdfview\` makes the cached, native, offline-capable path the default in a few lines across iOS and Android.

- **Package:** [pub.dev/packages/flutter_cached_pdfview](https://pub.dev/packages/flutter_cached_pdfview)
- **Source:** [github.com/binSaed/flutter_cached_pdfview](https://github.com/binSaed/flutter_cached_pdfview)
- **The design story:** [flutter_cached_pdfview case study](/case-studies/flutter-cached-pdfview/)
    `},{...He("github-actions-branch-protection-guardrails"),content:`
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
`},{...He("automate-pull-request-hygiene"),content:`
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

## Related reading

This article is part of [The Self-Driving Repo](/articles/) series. Once PRs fill in their own paperwork, the next problems are mergeability and conflict:

- [How the merge-conflict radar works](/articles/auto-rebase-and-detect-merge-conflicts/) — a two-workflow system that refreshes every open PR on each merge to \`master\` and routes conflict alerts to the right author.
- [Letting a bot resolve merge conflicts safely](/articles/bot-that-resolves-merge-conflicts/) — the provably-safe, single-regex case where auto-committing a conflict fix is genuinely fine.

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
`},{...He("sync-jira-with-github-prs"),content:`
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
`},{...He("auto-rebase-and-detect-merge-conflicts"),content:`
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

## Related reading

This article is part of [The Self-Driving Repo](/articles/) series. The radar tells you *that* a PR conflicts — the rest of the cluster decides what to do about it:

- [Letting a bot resolve merge conflicts safely](/articles/bot-that-resolves-merge-conflicts/) — the one provably-safe case where a GitHub Action can auto-commit a conflict fix to a contributor's branch.
- [Automated stale branch cleanup](/articles/automated-stale-branch-cleanup/) — deleting dead branches in bulk without deleting the wrong one: classify, cap, defer, audit.

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
`},{...He("bot-that-resolves-merge-conflicts"),content:`
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

## Related reading

This article is part of [The Self-Driving Repo](/articles/) series. The bot only resolves the one safe case — the rest of the cluster detects conflicts and keeps the repo tidy:

- [The merge-conflict radar](/articles/auto-rebase-and-detect-merge-conflicts/) — the two-workflow system that notices every PR broken by a merge and tells the right author.
- [Automating PR hygiene with GitHub Actions](/articles/automate-pull-request-hygiene/) — auto-context on every PR plus a quality gate that runs the analyzer and cleans up after itself.

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
`},{...He("automated-stale-branch-cleanup"),content:`
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

## Related reading

This article is part of [The Self-Driving Repo](/articles/) series. Cleanup is the last step — the rest of the cluster keeps branches and PRs mergeable in the first place:

- [The merge-conflict radar](/articles/auto-rebase-and-detect-merge-conflicts/) — refresh every open PR on each merge to \`master\` and route conflict alerts to the right author.
- [Letting a bot resolve merge conflicts safely](/articles/bot-that-resolves-merge-conflicts/) — the single provably-safe case where auto-committing a conflict fix is fine.

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
`},{...He("ai-weekly-engineering-reviews"),content:`
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
`},{...He("managing-large-flutter-codebases"),content:`
# Best Practices for Managing Large Flutter Codebases

*Subtitle: A small Flutter app is held together by memory. A large one has to be held together by structure — because nobody can keep 220,000 lines in their head.*

![A large, orderly Flutter codebase — modules arranged like a city grid](/article-images/managing-large-flutter-codebases-hero.webp)

---

Most Flutter advice is written for the app you start with: one \`lib/\` folder, a handful of screens, a \`main.dart\` you can read top to bottom. That advice quietly stops working somewhere around the point where no single person has read the whole codebase anymore.

I lead mobile on **[iStoria](/case-studies/istoria)**, a story-based English-learning app on iOS and Android. Over a few years it has grown into roughly **220,000 lines of Dart across ~1,300 files**, **60+ feature modules**, and nearly **30,000 commits** — built and maintained by a small team, shipping weekly, at a 99.9% crash-free rate to **5M+ learners**. At that size, the enemy isn't any single hard problem. It's *entropy*: the slow drift where every change gets a little riskier, every merge a little scarier, and onboarding a new engineer takes a little longer than it did last quarter.

Managing a large Flutter codebase is mostly about fighting that entropy with structure. The practices below are the ones that actually held up under load: **feature-first modularization with a hard \`core\`/\`features\` boundary; one predictable data-flow layering in every module; disciplined dependency injection; code generation to delete boilerplate; conventions enforced by tooling instead of reviewers; owning the dependencies you can't afford to have break; treating offline-first as an architecture rather than a feature; and automating the repository itself so the boring, error-prone chores stop landing on people.** None of them are exotic. The discipline is in applying them *consistently* across 60 modules, not just the three you touched this week.

## What "large" actually changes

Small-app instincts are dangerous at scale precisely because they worked so well when the app was small. When everything fits in your head, a shared \`utils.dart\`, a global singleton, and a bit of copy-paste are all fine. The bill comes later:

- **No one holds the whole map.** Decisions get made locally, and local decisions that don't share a shape produce 60 slightly different architectures in one repo.
- **Blast radius grows silently.** A tweak to a "shared" helper now touches a dozen features you've never opened. Without boundaries, everything is coupled to everything.
- **The build gets slow and the reviews get shallow.** Boilerplate multiplies, diffs balloon, and reviewers start rubber-stamping because reading it all is impossible.

So the goal isn't elegance for its own sake. The goal is to keep the app **shippable as it grows** — to make the codebase navigable by people who didn't write it, and to shrink the blast radius of any single change. Every practice below is in service of that.

## 1. Modularize by feature, and defend the boundary

The single most important decision is the top-level shape. Organizing by *layer* (\`screens/\`, \`models/\`, \`services/\`) collapses the moment you have 60 features: every folder becomes a junk drawer of unrelated things, and no one can find "everything for streaks" without grepping the whole tree.

Organize by **feature** instead. Each feature is a self-contained module that owns its data and its UI, and the only shared space is a deliberately small \`core\`:

\`\`\`text
lib/
├── core/            # shared and ONLY shared: api, services, widgets, errors
│   ├── api/
│   ├── services/
│   └── widgets/
├── features/
│   ├── streak/
│   ├── leaderboard/
│   ├── payment/
│   └── … 60+ more, each self-contained
└── main_*.dart      # one entry point per flavor
\`\`\`

The rule that makes this work is a boundary you actually enforce: **features never import from other features.** If two features need the same thing, it moves down into \`core\`. If it's used by exactly one feature, it stays inside that feature — no speculative "someone might need this later" promotions. This one rule is what keeps blast radius small: opening \`features/streak/\` tells you *everything* streak-related, and changing it can't silently break \`leaderboard\`.

The counterintuitive part is that a little duplication across features is often *cheaper* than a shared abstraction. A helper shared by three features is a helper three features are now coupled to. Promote to \`core\` when the sharing is real and stable — not on the first coincidence.

## 2. One predictable layering, in every single module

Consistency beats cleverness. If every feature invents its own way to fetch and hold data, "large" just means "many different apps in a trench coat." Pick one layering and apply it everywhere so that opening any module — even one you've never seen — feels familiar within seconds.

The layering that held up for us is the classic Clean-Architecture flow: **data source → repository → controller**, with the UI reading from the controller. The detail that matters most at scale isn't the layer names, though — it's turning **failures into values instead of exceptions**. A thrown exception is an invisible control-flow edge that a reviewer can miss and a crash reporter finds for you in production. A returned failure is right there in the type signature:

\`\`\`dart
// Failures are values, not surprises. The signature forces every caller
// to handle both outcomes — the compiler becomes your reviewer.
abstract class StoriesRepository {
  Future<Either<Failure, List<Story>>> fetchStories();
}

class StoriesRepositoryImpl implements StoriesRepository {
  StoriesRepositoryImpl(this._remote, this._local);

  final StoriesRemoteSource _remote;
  final StoriesLocalSource _local;

  @override
  Future<Either<Failure, List<Story>>> fetchStories() async {
    try {
      final cached = await _local.cachedStories(); // read locally first
      unawaited(_remote.refreshInBackground());     // sync, never blocks UI
      return Right(cached);
    } on CacheException catch (e) {
      return Left(CacheFailure(e.message));
    }
  }
}
\`\`\`

When *every* repository returns an \`Either<Failure, T>\` (I use \`dartz\` for it), the UI stops being a minefield of \`try/catch\` and becomes a simple fork: render the data, or render the error. Multiply that discipline across 60 modules and an enormous class of "we forgot to handle the failure path" bugs simply can't compile.

Keep one reactive controller (or cubit — pick a state solution and standardize on it) per feature as the single place UI state lives. Which state-management library you choose matters far less than choosing *one* and using it the same way everywhere.

## 3. Make dependency injection boring on purpose

Sixty modules that all \`new\` up their own dependencies is sixty modules welded to concrete implementations — impossible to test, impossible to swap. But an over-clever DI setup is its own tax. The goal is *boring*: one obvious place things get registered, and one obvious way to fetch them.

Register truly global services (auth, networking, the local database) once at startup in a single central binding. Then give each feature its **own** binding that registers only what that feature needs, wired up lazily when you navigate into it and torn down when you leave. A feature depends on abstractions (\`StoriesRepository\`), never on the concrete class, so it can be tested against a fake and refactored without a chain reaction. The win at scale is that DI becomes a lookup you never have to think about — which is exactly what you want from plumbing.

## 4. Delete boilerplate with code generation

A large app generates staggering amounts of mechanical code: JSON serialization for every model, database table classes, route tables. Hand-writing and hand-maintaining that is both a waste of humans and a rich source of subtle bugs (the \`fromJson\` that forgot a field, the copy-paste that mismatched a type).

Push all of it to code generation. \`build_runner\` with \`json_serializable\` for models, a typed database layer for local storage, and generated route definitions mean the boilerplate is *derived* from a single declaration rather than maintained by hand:

\`\`\`dart
@JsonSerializable()
class Story {
  Story({required this.id, required this.title, required this.wordCount});

  final String id;
  final String title;
  final int wordCount;

  // The generator writes fromJson/toJson. You never touch — or misspell — them.
  factory Story.fromJson(Map<String, dynamic> json) => _$StoryFromJson(json);
  Map<String, dynamic> toJson() => _$StoryToJson(this);
}
\`\`\`

Generated code doesn't drift, doesn't get a typo in review, and doesn't show up as noise in your diffs. On a codebase this size, that's thousands of lines nobody has to read or trust by eye.

## 5. Enforce conventions with tooling, not code review

Every large team writes a style guide. Nobody reads it, and reviewers can't hold 40 rules in their head while also checking whether the logic is correct. So the rules quietly decay — unless a machine enforces them.

Lean on the analyzer hard. Beyond the standard \`flutter_lints\`, add a metrics plugin that fails the build on the things humans stop noticing: functions that grew too complex, nesting that got too deep, arguments lists that ballooned.

\`\`\`yaml
# analysis_options.yaml — the parts that scale
analyzer:
  plugins:
    - dart_code_metrics

dart_code_metrics:
  metrics:
    cyclomatic-complexity: 50
    maximum-nesting-level: 6
    number-of-arguments: 4
  rules:
    - newline-before-return
    - prefer-first
    - prefer-last
    - no-equal-then-else
\`\`\`

Then codify the softer conventions and let the pipeline block violations: **self-documenting code over comments** (a comment explaining *what* code does is a smell — rename until it doesn't need one), **no stray \`print\`/\`debugPrint\`** in committed code, and — the one I'd fight for hardest — **structured, diagnostic error reports**. Every recorded error carries a \`[Source]\` tag and pipe-delimited context, so a crash in your reporter is actionable on its own:

\`\`\`text
[GrowthBook] getValue conversion failure | key=offer_settings | expectedType=Map | actualType=int | rawValue=304
\`\`\`

The difference between that and \`"something went wrong"\` is the difference between a five-minute fix and an afternoon spelunking through source. When the machine enforces the rules, review gets to spend its scarce attention on what actually needs a human: *is this logic correct?*

## 6. Own the dependencies you can't afford to lose

A large app leans on a lot of packages, and the pub ecosystem is uneven — some critical dependencies are lightly maintained, or stall on exactly the platform bug that's blocking your release. When a dependency you rely on goes quiet, you have three options: wait, rip it out, or take control.

For the ones that matter, take control: **fork the package, fix or patch it, and point your \`pubspec\` at your fork.** I maintain several forks of packages iStoria depends on for exactly this reason — a shimmer effect, a showcase overlay, a layout helper — where upstream couldn't move as fast as our release cycle needed. You give up "just run \`pub upgrade\`," but you gain the ability to ship on your own schedule instead of waiting on a maintainer who has a day job. At scale, not being blocked is worth a lot.

## 7. Treat offline-first as an architecture, not a feature

If your app has real users on real networks — commutes, spotty Wi-Fi, metered data — "works offline" can't be bolted on at the end. It's a decision that shapes your whole data layer. Learners shouldn't wait on a round-trip to see their own progress.

The pattern that scales is **local-first reads with background sync**: the app reads from a local database immediately and treats the network as something that reconciles state in the background, not something the UI blocks on. That's why the repository in practice #2 returns cached data *first* and kicks off a refresh without awaiting it. Getting this right early means every feature you build afterward inherits offline support for free, instead of each one reinventing its own fragile caching.

## 8. Automate the repository itself

The last multiplier isn't in the app code at all — it's in the repo around it. A codebase with tens of thousands of commits and a busy team drowns in mechanical chores: enforcing branch hygiene, keeping PRs current, chasing stale branches, surfacing merge conflicts before they rot. Left to humans, these are the tasks that get skipped under pressure and bite you at the worst time.

So automate them. Small, sharp CI jobs that guard \`master\`, keep pull requests in sync, and clean up after themselves take that entire category of work off people's plates — and, done right, do it more reliably than a human ever would. I wrote about this at length in **[The Self-Driving Repo](/articles/github-actions-branch-protection-guardrails)** series, so I'll leave the details there; the point is that at scale, the repository's own hygiene is part of the architecture.

## The payoff

None of this is about being fancy. Every practice here trades a little up-front discipline for a codebase that stays *shippable* as it grows. On iStoria, that discipline is what let a small team take the release cycle from four weeks down to one, hold a 99.9% crash-free rate, and keep shipping new features into a 60-module app without the whole thing turning into a house of cards.

Large Flutter codebases don't fail because Flutter can't scale. They fail because structure decays faster than features get added. Pick a shape, enforce it with machines instead of willpower, and keep the blast radius of any single change small. Do that consistently, and 220,000 lines can still feel like a codebase you understand.

*Want the longer version of how these decisions played out in production? Read the [iStoria case study](/case-studies/istoria).*
`},{...He("flutter-build-flavors-guide"),content:`
# App Flavors in Flutter: One Codebase, Every Environment

*Subtitle: The same binary has to talk to a local mock, a staging server, and production — each with a different name, icon, and set of keys. Flavors turn that into a build-time choice instead of a comment you forgot to uncomment.*

![Flutter build flavors — one codebase producing local, staging, and production apps](/article-images/flutter-build-flavors-guide-hero.webp)

---

Every real app lives in more than one world. On my machine it should hit a local backend I can break freely. In QA it should point at a staging server with test data. In the store it must talk to production — and nothing else, ever. Along the way the app name changes (\`MyApp\` vs \`MyApp Staging\`), the icon changes so you can tell three installs apart on one phone, the bundle ID changes so they don't overwrite each other, and every analytics and crash-reporting key swaps to its matching project.

The naive way to handle this is a constant at the top of a file:

\`\`\`dart
// Don't do this.
const apiBaseUrl = "https://api.example.com/"; // TODO: switch back to staging
\`\`\`

That one commented-out line is how a debug build with a staging URL ends up in the App Store. The whole point of **flavors** is to delete that class of mistake: you pick an environment when you *build*, the tooling bakes the right configuration in, and there is no runtime toggle a human can leave in the wrong position.

I lead mobile on **[iStoria](/case-studies/istoria)**, a story-based English-learning app shipping to 5M+ learners on iOS and Android. We run three flavors — local, staging, and production — across a 60-module codebase, and the setup has caught more "wrong environment" mistakes than I can count. This guide is the generic version of what we do: the patterns, with invented examples, so you can lift them into any Flutter app.

## What a flavor actually is

A "flavor" (Android calls it a *product flavor*; iOS reaches the same result with *schemes* and *build configurations*) is a named build variant of one codebase. Same source, different identity and configuration baked in at build time.

The trap is that a flavor is not one thing you configure in one place — it's a decision that has to line up across **three layers**:

1. **Dart** — which entry point runs, and which configuration it loads.
2. **Android** — the application ID, app name, and any native build fields.
3. **iOS** — the scheme and \`.xcconfig\` that select signing, bundle ID, and display name.

Get the Dart layer right but forget Android, and your "staging" build installs on top of production and reports to the production analytics project. The work is in keeping all three in sync — so the goal is to make each layer boringly declarative.

## The Dart layer: an enum and thin entry points

Start with a single source of truth for "which flavor am I?" — an enum plus a tiny accessor class. No logic, just the flavor and the things that are derived from it:

\`\`\`dart
enum Flavor { local, staging, production }

class AppConfig {
  static Flavor? current;

  // Different display name per flavor, so three installs are distinguishable.
  static String get appTitle => 'MyApp \${current?.name}';

  // Each flavor loads its own bundled config file (see next section).
  static String get configFile => '\${current?.name}.config.json';
}
\`\`\`

Then give each flavor its own \`main_*.dart\`. These entry points stay deliberately trivial — set the flavor, then defer *everything* to one shared bootstrap so startup logic never forks per environment:

\`\`\`dart
// lib/main_staging.dart
import 'bootstrap.dart';
import 'app_config.dart';

Future<void> main() async {
  AppConfig.current = Flavor.staging;
  await bootstrap();
}
\`\`\`

\`\`\`dart
// lib/main_production.dart
Future<void> main() async {
  AppConfig.current = Flavor.production;
  await bootstrap();
}
\`\`\`

The rule that keeps this maintainable: **an entry point is allowed to do exactly one thing — name its flavor.** The moment \`main_staging.dart\` and \`main_production.dart\` start to drift (an extra initializer here, a different plugin there), you've lost the guarantee that all flavors run the same code. Push all real setup into \`bootstrap()\`.

## Config as data, not code

The flavor picks *which* configuration, but the configuration itself shouldn't be a \`switch\` statement buried in Dart. Keep it as **data** — one file per flavor, bundled as an asset:

\`\`\`json
// staging.config.json
{
  "apiBaseUrl": "https://staging.example.com/",
  "analyticsKey": "staging-a1b2c3",
  "enableDebugBanner": true,
  "featureNewOnboarding": true
}
\`\`\`

Load it at boot and decode it into a **typed** model — not a raw \`Map\`. The type is what turns "someone added a key to staging but forgot production" from a null-pointer crash in the field into a build-time or first-launch error you catch immediately:

\`\`\`dart
@JsonSerializable()
class Environment {
  Environment({
    required this.apiBaseUrl,
    required this.analyticsKey,
    required this.enableDebugBanner,
    required this.featureNewOnboarding,
  });

  final String apiBaseUrl;
  final String analyticsKey;
  final bool enableDebugBanner;
  final bool featureNewOnboarding;

  // Generated by build_runner — you never hand-write or mistype this.
  factory Environment.fromJson(Map<String, dynamic> json) =>
      _$EnvironmentFromJson(json);
}
\`\`\`

\`\`\`dart
// In bootstrap(), before you build the app:
final raw = await rootBundle.loadString(AppConfig.configFile);
final env = Environment.fromJson(jsonDecode(raw));
// \`env.apiBaseUrl\` is now a strongly-typed value the whole app reads from.
\`\`\`

Two things make this scale. First, **code generation** (\`json_serializable\`) writes the \`fromJson\` for you, so adding a field is a one-line change with no boilerplate to keep in sync. Second, because every config file is decoded into the *same* model, a missing or mistyped key can't hide — the deserialization fails loudly instead of silently handing you a \`null\` three screens later.

## Android: product flavors

On Android, flavors live in \`android/app/build.gradle.kts\`. Each one sets the pieces that make builds coexist and identify themselves. The key move is \`applicationIdSuffix\`, which gives non-production builds a distinct package name so they install **side by side** with the store version:

\`\`\`kotlin
android {
    flavorDimensions += "app"

    productFlavors {
        create("staging") {
            dimension = "app"
            applicationIdSuffix = ".staging"          // com.example.myapp.staging
            resValue("string", "app_name", "MyApp Staging")
        }
        create("production") {
            dimension = "app"
            resValue("string", "app_name", "MyApp")
        }
    }
}
\`\`\`

\`resValue\` injects a per-flavor string resource (here the display name) without maintaining separate \`strings.xml\` files. If you need a native build-time constant your Kotlin code reads, a \`buildConfigField(...)\` entry does the same job on the native side. Keep this list aligned with the Dart flavors: same names, same count.

## iOS: schemes and xcconfig

iOS has no direct equivalent of product flavors, so you assemble the same outcome from two Xcode primitives:

- **Schemes** — one per flavor (\`staging\`, \`production\`). The scheme selects which build configuration runs and which entry point/target is used.
- **\`.xcconfig\` files** — plain-text build settings per flavor that drive the bundle identifier, display name, and signing.

It's more manual than Android — you're clicking through Xcode's target settings and duplicating build configurations rather than writing a tidy DSL block — but the result is identical: a \`staging\` scheme produces an app with its own bundle ID (so it installs alongside production) and its own display name. Once the schemes exist, day-to-day work is just picking the scheme, and CI selects it with \`--flavor\`.

## Running and building

With the three layers in place, you never edit a file to change environments — you pass a flag. The \`--flavor\` selects the native variant and \`-t\` (target) selects the Dart entry point; they must agree:

\`\`\`bash
# Run staging locally
flutter run --flavor staging -t lib/main_staging.dart

# Build a production release
flutter build ipa --flavor production -t lib/main_production.dart
flutter build appbundle --flavor production -t lib/main_production.dart
\`\`\`

The one risk here is a human pairing the wrong \`--flavor\` with the wrong \`-t\` (staging flavor, production target). Don't rely on discipline — encode each combination once, in a build script or CI job, and let people invoke *that*:

\`\`\`bash
# scripts/run_staging.sh — the only blessed way to run staging
flutter run --flavor staging -t lib/main_staging.dart
\`\`\`

In CI, the same pairing lives in the pipeline definition, so a release build physically cannot be produced with a mismatched target.

## Pitfalls worth pre-empting

A few failure modes show up on every large flavored app. Each has a cheap mitigation:

- **Config drift between flavors.** A key exists in \`production.config.json\` but not \`staging.config.json\`, and staging crashes on launch weeks later. *Mitigation:* the typed model above — plus a tiny test that decodes every config file, so a missing key fails in CI, not in the field.
- **Secrets in the repo.** Real API keys and tokens don't belong in committed config files. *Mitigation:* keep only non-sensitive values in versioned config; inject secrets at build time (CI environment variables, \`--dart-define\`, or an untracked config that's generated during the build).
- **Forgetting a layer.** The Dart side is perfect but the Android \`applicationId\` is identical across flavors, so staging overwrites production on the device. *Mitigation:* treat "add a flavor" as a checklist that touches Dart, Android, and iOS together — never just one.
- **Debug affordances leaking to production.** A debug banner or a "switch environment" menu that ships to the store. *Mitigation:* gate them on the flavor (\`if (AppConfig.current != Flavor.production)\`), not on \`kDebugMode\` alone.

## The payoff

Once flavors are wired properly, a whole category of incident simply stops happening. Three installs sit on my phone at once — local, staging, production — each with its own icon, none able to clobber the others. QA tests staging with total confidence it can't touch live data. Adding a fourth environment (a load-test backend, a demo build for a conference) is a diff: one config file, one entry point, one flavor block per platform.

That's the real value of build flavors. They cost a day to set up and they buy you a permanent guarantee that "which environment is this?" is answered by the build system, not by whoever last edited a constant. On a codebase shipping weekly to millions of users, that guarantee is worth far more than the day.

*For the bigger picture on how iStoria stays shippable at scale, see the [iStoria case study](/case-studies/istoria) and the companion article on [managing large Flutter codebases](/articles/managing-large-flutter-codebases).*
`},{...He("offline-first-vs-local-first"),content:`
# Offline-First vs Local-First: What's the Difference?

*Subtitle: The two terms get used interchangeably, but they answer different questions. One is about whether the app works with no network; the other is about who owns the canonical copy of the data.*

"Offline-first" and "local-first" sound like synonyms, and plenty of posts treat them as one. They're not. **Offline-first** asks a question about *availability* — does the app keep working when the network drops? **Local-first** asks a question about *authority* — is the copy of the data on your device the real one, or just a cache of the server's? Every local-first app is offline-first, but the large majority of offline-first apps are not local-first. This piece draws the line, and shows where a real 5M-user Flutter app actually sits.

## The one-sentence difference

Offline-first is about **availability**: the app functions without a connection. Local-first is about **authority**: the copy of the data on the device is the source of truth, and the cloud is a sync peer — not the owner.

That sounds academic until you notice it changes your architecture, your conflict strategy, and what happens to a user's data the day your backend goes away.

## Offline-first: the app keeps working

Offline-first is a resilience principle that grew out of the mobile and progressive-web-app world. The idea is simple: treat the network as an *enhancement*, not a prerequisite. The app reads from a local cache so it never blocks on a round-trip, queues writes made offline and replays them on reconnect, and behaves as if the connection might vanish at any second — because on a phone, it might.

Crucially, in a classic offline-first app the **server is still the source of truth**. The local store is a cache: fast and useful, but disposable. If it's wiped, the app rebuilds it from the backend. Conflict resolution tends to be simple — last-write-wins, or "the server decides" — because there's an authority to defer to.

You know you're looking at offline-first when:

- The app opens and shows your data instantly, even in airplane mode.
- Actions you take offline don't fail — they're captured and synced later.
- But sign in on a fresh device with no network, and there's nothing there. The data lives on the server; the device only ever had a copy.

## Local-first: the device owns the data

**Local-first** is a stronger claim, and it has a specific origin: a 2019 essay from the research lab Ink & Switch, *"Local-first software: you own your data, in spite of the cloud."* It flips the authority relationship. The canonical copy of the data lives **on your device**. The cloud still exists — to sync between your devices, to back up, to enable collaboration — but it's a peer, not the owner. Delete the cloud account and you still have your data, in full, on your machine.

The essay lays out seven ideals a local-first app aims for: it's **fast** (no spinners waiting on a server), works across **multiple devices**, works **offline**, supports **real-time collaboration**, lasts for the **long term** (still opens in ten years), is **private and secure** by default, and leaves the user in **ultimate control** of their data.

The hard part of local-first is the flip side of its power. If the device is authoritative and two devices both edit while offline, there's no server to referee the merge. That's why local-first is tightly associated with **CRDTs** — conflict-free replicated data types — data structures that merge automatically and deterministically no matter what order the edits arrive in. CRDTs are what make "everyone's copy is canonical" actually work.

## Side by side

| | Offline-first | Local-first |
| --- | --- | --- |
| **Source of truth** | The server (local is a cache) | The device (cloud is a sync peer) |
| **Core motivation** | Resilience and UX | Data ownership, longevity, collaboration |
| **Conflict strategy** | Last-write-wins / server-authoritative | Automatic merge, often via CRDTs |
| **Lose the cloud and…** | The app degrades; data may be at risk | You still have all your data |
| **Where it came from** | Mobile / PWA engineering | Ink & Switch essay (2019) |
| **Typical products** | Most consumer apps | Notes, docs, design and collaboration tools |

## They're a spectrum, not opposites

The cleanest way to hold this: **local-first is a superset of offline-first.** A local-first app is, by definition, also offline-first — if the device owns the data, of course it works offline. But an offline-first app is usually *not* local-first, because the server is still where the truth lives.

Most real apps sit somewhere on the spectrum, and — this is the part people miss — **often at different points for different data.** A single app can be server-authoritative for one kind of data and device-authoritative for another.

## In practice: building each in Flutter

**To build offline-first**, you need three things: a local database as a cache (Drift or Hive), a read path that serves from that cache first, and a way to get writes out when you're back online. A repository that returns cached data immediately and refreshes in the background is the whole pattern:

\`\`\`dart
Future<Either<Failure, List<Story>>> fetchStories() async {
  final cached = await _local.cachedStories(); // instant, offline-safe
  unawaited(_remote.refreshInBackground());     // sync, never blocks the UI
  return Right(cached);
}
\`\`\`

Pair that with an offline write queue — persist the request locally, return an optimistic result, replay on reconnect — and you have a genuinely offline-first app while the server stays the source of truth.

**To move toward local-first**, you change *what's authoritative*. Instead of treating the local database as a disposable cache, you make it the primary store and use a sync engine that treats the device as a peer. Tools like **PowerSync** and ElectricSQL do exactly this: the SQLite database on the device is the thing your code reads and writes, and changes stream bidirectionally to the backend. For true multi-writer collaboration, you reach for CRDT libraries (Automerge, Yjs) so edits merge without a referee.

At [iStoria](/case-studies/offline-first-sync) the app is squarely **offline-first** for the catalog — the story content is server-authoritative, and the device holds a cache — while the learner's *own* progress leans local-first: your streaks, completed chapters, and stage progress live on the device in a local database, and PowerSync reconciles them in the background. That split is deliberate, and it's also the norm: pick the model per data type, not for the whole app.

## Which one do you actually need?

- **Reach for offline-first** if your users are sometimes offline and you simply don't want the app to break. That's almost every mobile app, and it's the right default.
- **Reach for local-first** when data *ownership* is part of the product promise — privacy, longevity, no lock-in — or when you need real-time collaboration on user-created content. Notes apps, document editors, and design tools are the classic cases.
- **Don't pay the CRDT tax you don't need.** If your data has a natural authority — a backend that already arbitrates — full local-first with automatic merge is complexity you can skip.

## The takeaway

Offline-first is a **UX guarantee**: the app works without a network. Local-first is a **data-ownership stance**: the device holds the real copy, and the cloud serves it. They overlap, but they're not the same decision — and the most useful move is to stop choosing one for the whole app and start choosing per data type.

If you want the production version of how this plays out — the read path, the offline write queue, and where the authority line actually falls — I wrote it up in the [offline-first case study](/case-studies/offline-first-sync), and I gave a [talk on building unstoppable offline-first apps](/speaking).
`}];function Vr(e){return en.find(t=>t.slug===e)}const Ni={Flutter:"https://www.wikidata.org/wiki/Q39072787",Dart:"https://www.wikidata.org/wiki/Q406009",PDF:"https://www.wikidata.org/wiki/Q42332","GitHub Actions":"https://www.wikidata.org/wiki/Q97185096",DevOps:"https://www.wikidata.org/wiki/Q3025536","CI/CD":"https://www.wikidata.org/wiki/Q28136854",Jira:"https://www.wikidata.org/wiki/Q1359246",Git:"https://www.wikidata.org/wiki/Q186055","Code Review":"https://www.wikidata.org/wiki/Q1342704",Automation:"https://www.wikidata.org/wiki/Q184199","AI in Development":"https://www.wikidata.org/wiki/Q11660"};function hv(e){const t=e.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/```[\s\S]*?```/g,"").split(`
`);for(let n of t){if(n=n.trim(),!n||/^#{1,6}\s/.test(n)||/^>/.test(n)||/^!\[/.test(n)||/^-{3,}$/.test(n)||/^[-*]\s/.test(n)||/^\*[^*].*\*$/.test(n)||(n=n.replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g,"$1").trim(),!n))continue;const r=n.match(/^.*?[.!?](?=\s|$)/);return(r?r[0]:n).trim()}return""}function fv(e){return e.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/```[\s\S]*?```/g," ").replace(/!\[[^\]]*\]\([^)]*\)/g," ").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*]\s+/gm,"").replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g,"$1").replace(/\s+/g," ").trim()}const Oi=e=>`${e}T00:00:00+00:00`;function Zv(e,t,n){const r=e.tags.filter(d=>Ni[d]).map(d=>({"@type":"Thing",name:d,sameAs:Ni[d]})),a=fv(e.content),o=`${e.title} ${e.description} ${a}`.toLowerCase(),s=r.filter(d=>o.includes(d.name.toLowerCase())),l=a?a.split(/\s+/).filter(Boolean).length:0,u=hv(e.content);return{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,image:n,inLanguage:"en",datePublished:Oi(e.date),dateModified:Oi(e.dateModified??e.date),author:dv,publisher:uv,...r.length?{about:r}:{},...s.length?{mentions:s}:{},...l?{wordCount:l}:{},...u?{articleBody:u}:{},mainEntityOfPage:{"@type":"WebPage","@id":t},url:t,keywords:e.tags.join(", ")}}const tu=ov;function pv(e){return tu.find(t=>t.slugs.includes(e))}function ex(e){const t=pv(e);if(!t)return;const n=t.slugs.indexOf(e),r=n>0?t.slugs[n-1]:void 0,a=n<t.slugs.length-1?t.slugs[n+1]:void 0;return{series:t,index:n,total:t.slugs.length,prev:r?Vr(r):void 0,next:a?Vr(a):void 0}}function tx(){const e=new Set(tu.flatMap(t=>t.slugs));return en.filter(t=>!e.has(t.slug)).sort((t,n)=>n.date.localeCompare(t.date))}function nx(e,t=2){const n=Vr(e);if(!n)return[];const r=new Set(n.tags);return en.filter(a=>a.slug!==e).map(a=>({a,shared:a.tags.filter(o=>r.has(o)).length})).filter(a=>a.shared>0).sort((a,o)=>o.shared-a.shared||o.a.date.localeCompare(a.a.date)).slice(0,t).map(a=>a.a)}function rx(e){const t=[...en].sort((r,a)=>a.date.localeCompare(r.date)),n=t.findIndex(r=>r.slug===e);return n===-1?{}:{next:n>0?t[n-1]:void 0,prev:n<t.length-1?t[n+1]:void 0}}const mv=["flutter-cached-pdfview-guide","bot-that-resolves-merge-conflicts","ai-weekly-engineering-reviews","automate-pull-request-hygiene"];function ax(e=4){const t=mv.map(a=>Vr(a)).filter(a=>!!a);if(t.length>=e)return t.slice(0,e);const n=new Set(t.map(a=>a.slug)),r=[...en].sort((a,o)=>o.date.localeCompare(a.date)).filter(a=>!n.has(a.slug));return[...t,...r].slice(0,e)}const ji=["home","about","projects","articles","skills","contact"],fe={owner:we.name,alias:"binSaed",email:we.email,url:"https://bnsaed.com",github:ie.github,linkedin:ie.linkedin,youtube:ie.youtube,cv:ie.cv};function gv(){const e=Ji();c.useEffect(()=>{if(typeof navigator>"u"||!navigator.modelContext)return;const t=navigator.modelContext,n=[],r=[{name:"navigate_to_section",title:"Scroll to a section",description:"Navigate the homepage to one of its anchor sections: home, about, projects, articles, skills, or contact.",inputSchema:{type:"object",properties:{section:{type:"string",enum:ji,description:"The section anchor to scroll to."}},required:["section"]},execute:async a=>{const o=String(a.section??"");return ji.includes(o)?(e(o==="home"?"/":`/#${o}`),{ok:!0,section:o}):{ok:!1,error:`Unknown section: ${o}`}}},{name:"list_articles",title:"List published articles",description:"Return the slug, title, description, date, and tags for every article published on bnsaed.com.",inputSchema:{type:"object",properties:{}},execute:async()=>en.map(a=>({slug:a.slug,title:a.title,description:a.description,date:a.date,readTime:a.readTime,tags:a.tags,url:`${fe.url}/articles/${a.slug}/`}))},{name:"open_article",title:"Open an article",description:"Navigate to a specific article by slug. Use list_articles first to discover valid slugs.",inputSchema:{type:"object",properties:{slug:{type:"string",description:"Article slug, e.g. 'flutter-cached-pdfview-guide'."}},required:["slug"]},execute:async a=>{const o=String(a.slug??""),s=en.find(l=>l.slug===o);return s?(e(`/articles/${o}/`),{ok:!0,url:`${fe.url}/articles/${o}/`,title:s.title}):{ok:!1,error:`No article with slug '${o}'`}}},{name:"get_contact_info",title:"Get contact details",description:"Return the preferred ways to contact Abdelrahman Saed (email, GitHub, LinkedIn, contact form URL).",inputSchema:{type:"object",properties:{}},execute:async()=>({name:fe.owner,alias:fe.alias,email:fe.email,mailto:`mailto:${fe.email}`,contactForm:`${fe.url}/#contact`,github:fe.github,linkedin:fe.linkedin,youtube:fe.youtube,preferredChannel:"email"})},{name:"compose_email",title:"Open a pre-filled email",description:"Open the user's mail client with a pre-filled email to Abdelrahman Saed. Use this instead of submitting the contact form programmatically.",inputSchema:{type:"object",properties:{subject:{type:"string",description:"Email subject line."},body:{type:"string",description:"Email body, plain text."}},required:["subject"]},execute:async a=>{const o=encodeURIComponent(String(a.subject??"")),s=encodeURIComponent(String(a.body??"")),l=`mailto:${fe.email}?subject=${o}&body=${s}`;return window.location.href=l,{ok:!0,mailto:l}}},{name:"download_cv",title:"Download the CV",description:"Open the PDF CV of Abdelrahman Saed in a new tab.",inputSchema:{type:"object",properties:{}},execute:async()=>(window.open(fe.cv,"_blank","noopener,noreferrer"),{ok:!0,url:fe.cv})},{name:"get_site_metadata",title:"Get site metadata",description:"Return identity and discovery metadata for bnsaed.com: owner, URL, well-known endpoints, and current page.",inputSchema:{type:"object",properties:{}},execute:async()=>({owner:fe.owner,alias:fe.alias,url:fe.url,currentPath:window.location.pathname+window.location.hash,wellKnown:{apiCatalog:`${fe.url}/.well-known/api-catalog`,agentSkills:`${fe.url}/.well-known/agent-skills/index.json`,mcpServerCard:`${fe.url}/.well-known/mcp/server-card.json`,robots:`${fe.url}/robots.txt`,sitemap:`${fe.url}/sitemap.xml`},contentSignal:{search:"yes","ai-input":"yes","ai-train":"no"}})}];try{for(const a of r){const o=t.registerTool(a);o&&typeof o.unregister=="function"&&n.push(o)}}catch{}return()=>{for(const a of n)try{a.unregister()}catch{}}},[e])}const bv=c.lazy(()=>oe(()=>import("./ArticlePage-n4ky97Jn.js"),__vite__mapDeps([24,2,9,25,26,23,27,28,12,20]))),yv=c.lazy(()=>oe(()=>import("./ArticlesPage-Uht6SCSu.js"),__vite__mapDeps([29,2,23,28,20,12]))),wv=c.lazy(()=>oe(()=>import("./CVPage-C4Y58pLJ.js"),__vite__mapDeps([30,23,2,7]))),vv=c.lazy(()=>oe(()=>import("./RecommendationsPage-Bycr1p41.js"),__vite__mapDeps([31,2,23,16,1,3,28]))),xv=c.lazy(()=>oe(()=>import("./SpeakingPage-BuXfdhkH.js"),__vite__mapDeps([32,2,23,13,1,3,28]))),kv=c.lazy(()=>oe(()=>import("./ProjectsPage-CSdAiDh_.js"),__vite__mapDeps([33,2,23,6,1,3,7,28]))),Sv=c.lazy(()=>oe(()=>import("./CaseStudiesPage-WIzuhkWi.js"),__vite__mapDeps([34,2,23,8,9,1,10,3,28]))),Ev=c.lazy(()=>oe(()=>import("./CaseStudyPage-DIjdPDib.js"),__vite__mapDeps([35,2,9,23,25,26,27,28,15,20]))),Tv=c.lazy(()=>oe(()=>import("./HirePage-BpXtdkT-.js"),__vite__mapDeps([36,2,23,19,20,21,16,1,3,28]))),Rv=c.lazy(()=>oe(()=>import("./FlutterHubPage-BPFNVC8c.js"),__vite__mapDeps([37,2,23,38,39,40,41,28,21]))),Av=c.lazy(()=>oe(()=>import("./GlossaryTermPage-MpuVcxjp.js"),__vite__mapDeps([42,2,23,38,39,9,25,43,28]))),_v=c.lazy(()=>oe(()=>import("./ComparisonPage-BhlUiDSn.js"),__vite__mapDeps([44,2,23,39,38,25,43,28]))),Cv=c.lazy(()=>oe(()=>import("./PackageDirectoryPage-4LetqWIS.js"),__vite__mapDeps([45,2,23,40,25,43,28]))),Pv=c.lazy(()=>oe(()=>import("./ArchitectureGuidePage-DUvX_I24.js"),__vite__mapDeps([46,2,23,41,38,9,25,43,28]))),Nv=c.lazy(()=>oe(()=>import("./NotFound-BweznmqN.js"),__vite__mapDeps([47,2,26,28]))),Ov=new ig,jv=()=>(gv(),null),Iv=()=>{const{pathname:e,hash:t}=_o();return c.useLayoutEffect(()=>{t||window.scrollTo(0,0)},[e,t]),null},Dv=()=>i.jsx(Ic,{children:i.jsx(hg,{client:Ov,children:i.jsxs(Bm,{children:[i.jsx("a",{href:"#main",className:"sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:border focus:border-primary focus:bg-background focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-primary focus:outline-none",children:"Skip to content"}),i.jsx("div",{className:"grain-overlay","aria-hidden":"true"}),i.jsx(rv,{}),i.jsx(Sf,{}),i.jsx(tp,{}),i.jsx(pu,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:i.jsxs(by,{children:[i.jsx(jv,{}),i.jsx(Iv,{}),i.jsx(c.Suspense,{fallback:i.jsx("div",{className:"min-h-screen bg-background"}),children:i.jsxs(mu,{children:[i.jsx(be,{path:"/",element:i.jsx(nv,{})}),i.jsx(be,{path:"/articles",element:i.jsx(yv,{})}),i.jsx(be,{path:"/articles/:slug",element:i.jsx(bv,{})}),i.jsx(be,{path:"/CV",element:i.jsx(wv,{})}),i.jsx(be,{path:"/recommendations",element:i.jsx(vv,{})}),i.jsx(be,{path:"/speaking",element:i.jsx(xv,{})}),i.jsx(be,{path:"/projects",element:i.jsx(kv,{})}),i.jsx(be,{path:"/case-studies",element:i.jsx(Sv,{})}),i.jsx(be,{path:"/case-studies/:slug",element:i.jsx(Ev,{})}),i.jsx(be,{path:"/hire",element:i.jsx(Tv,{})}),i.jsx(be,{path:"/flutter",element:i.jsx(Rv,{})}),i.jsx(be,{path:"/flutter/glossary/:slug",element:i.jsx(Av,{})}),i.jsx(be,{path:"/flutter/compare/:slug",element:i.jsx(_v,{})}),i.jsx(be,{path:"/flutter/best/:slug",element:i.jsx(Cv,{})}),i.jsx(be,{path:"/flutter/guides/:slug",element:i.jsx(Pv,{})}),i.jsx(be,{path:"*",element:i.jsx(Nv,{})})]})})]})})]})})}),nu=document.getElementById("root"),Ii=()=>Qi(nu).render(i.jsx(Dv,{}));if(nu.hasChildNodes()){performance.now()>1500&&document.documentElement.classList.add("skip-entrance");let e=!1;const t=()=>{e||(e=!0,Ii())},n=window.setTimeout(t,300);try{const r=new PerformanceObserver(()=>{r.disconnect(),window.clearTimeout(n),requestAnimationFrame(()=>requestAnimationFrame(t))});r.observe({type:"largest-contentful-paint",buffered:!0})}catch{window.clearTimeout(n),requestAnimationFrame(()=>requestAnimationFrame(t))}}else Ii();function Di(){oe(async()=>{const{default:e}=await import("./module-ChzsIv-w.js");return{default:e}},[]).then(({default:e})=>{e.init("phc_tLT5g9tearUJgGqbyVABjDtBFcFswbb9Brps3U2B8mVc",{api_host:"https://custom.bnsaed.com",ui_host:"https://eu.posthog.com",defaults:"2026-05-30",disable_surveys:!0}),eb(e)})}const $i=window;typeof $i.requestIdleCallback=="function"?$i.requestIdleCallback(Di,{timeout:4e3}):window.setTimeout(Di,2e3);export{Yn as A,Ze as B,Xn as C,Ud as D,Ah as E,_h as F,Do as G,Xg as H,Qv as I,wi as J,Wv as K,$o as L,Lo as M,Vv as N,dv as O,Ya as P,uv as Q,ax as R,Zr as S,Jv as T,Fh as U,Dh as V,Or as W,ea as X,Cl as Y,Ky as Z,uy as a,vy as b,se as c,ex as d,nx as e,rx as f,Vr as g,Zv as h,we as i,i as j,Rl as k,fy as l,ie as m,Q as n,Fn as o,tx as p,en as q,tu as r,Fv as s,Fa as t,zw as u,yi as v,Yv as w,Nn as x,my as y,Kv as z};
