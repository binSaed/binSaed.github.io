const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ReconLayer-CoWv5khj.js","assets/react-vendor-B2qPguBR.js","assets/briefcase-BpH0naBy.js","assets/quote-DnXmQyLo.js","assets/check-BvzbTf1p.js","assets/SelectedWorkSection-BbhjcShj.js","assets/caseStudies-DDdJnVDB.js","assets/SectionHeader-BOVm0nKp.js","assets/CaseStudiesSection-DlcaK28J.js","assets/layers-BQcj_dJX.js","assets/arrow-up-right-Bk_zN_HI.js","assets/HowILeadSection-xtom1rWJ.js","assets/compass-BuSZXX_7.js","assets/git-branch-DwC1CXPM.js","assets/handshake-D8GA7mDw.js","assets/ExperienceSection-C3qdXe-t.js","assets/OpenSourceSection-lCLH5LpS.js","assets/ProjectsSection-BcUrQpnv.js","assets/download-D1vJr2TV.js","assets/ArticlesSection-C_-wDi3p.js","assets/flame-mASKnk16.js","assets/SpeakingSection-DV7Ng3bk.js","assets/RecommendationsSection-Ci4mpwS0.js","assets/AboutSection-GAD68hUI.js","assets/shield-check-sSW7gYAa.js","assets/SkillsSection-Qt8YHlPK.js","assets/smartphone-UpW7yQl9.js","assets/gauge-BJsrrVh9.js","assets/FAQSection-CwMiv6hK.js","assets/AvailabilitySection-B2aq8Y7h.js","assets/EngagementCards-fZImVE1Y.js","assets/clock-iI9NUwfJ.js","assets/ContactSection-CYbd2dvR.js","assets/Footer-DY6p0sCX.js","assets/ArticlePage-BQ8NMGwj.js","assets/MarkdownContent-Dohv4iDo.js","assets/RouteSuggestion-E4yNSNTm.js","assets/useAdSense-CHmBNgNJ.js","assets/arrow-left-r70cDPKx.js","assets/ArticlesPage-DJn5LMNR.js","assets/CVPage-D-1udwKy.js","assets/RecommendationsPage-CaYPJXRr.js","assets/SpeakingPage-CzOiiuBI.js","assets/ProjectsPage-C6yRYLl5.js","assets/CaseStudiesPage-CVvKImTl.js","assets/CaseStudyPage-ereentXJ.js","assets/HirePage-C5GgpdDa.js","assets/AboutPage-DuLg4OnW.js","assets/FlutterHubPage-DDM9B6oC.js","assets/glossary-j2-dpKGE.js","assets/comparisons-DVXS0oC5.js","assets/packageDirectory-DqJ-yngQ.js","assets/architectureGuides-CZN8rBFm.js","assets/GlossaryTermPage-BxYp3gPv.js","assets/AuthorByline-9HMR3SB3.js","assets/ComparisonPage-CH4B8h3N.js","assets/PackageDirectoryPage-CCRJgkfu.js","assets/ArchitectureGuidePage-CCRcMqHg.js","assets/NotFound-C3SGJZ4V.js"])))=>i.map(i=>d[i]);
var wd=Object.defineProperty;var Fo=e=>{throw TypeError(e)};var vd=(e,t,n)=>t in e?wd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ot=(e,t,n)=>vd(e,typeof t!="symbol"?t+"":t,n),Zr=(e,t,n)=>t.has(e)||Fo("Cannot "+n);var w=(e,t,n)=>(Zr(e,t,"read from private field"),n?n.call(e):t.get(e)),$=(e,t,n)=>t.has(e)?Fo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),I=(e,t,n,r)=>(Zr(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),K=(e,t,n)=>(Zr(e,t,"access private method"),n);var Zn=(e,t,n,r)=>({set _(a){I(e,t,a,n)},get _(){return w(e,t,r)}});import{r as d,a as Cr,R as _,v as li,b as ci,g as eo,u as to,c as di,L as Oe,B as xd,d as kd,e as ue}from"./react-vendor-B2qPguBR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const Sd="modulepreload",Ed=function(e){return"/"+e},Ho={},Q=function(t,n,r){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),i=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(n.map(u=>{if(u=Ed(u),u in Ho)return;Ho[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":Sd,c||(p.as="script"),p.crossOrigin="",p.href=u,i&&p.setAttribute("nonce",i),document.head.appendChild(p),c)return new Promise((g,h)=>{p.addEventListener("load",g),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(s){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s}return a.then(s=>{for(const i of s||[])i.status==="rejected"&&o(i.reason);return t().catch(o)})};var ui={exports:{}},Pr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=d,Rd=Symbol.for("react.element"),_d=Symbol.for("react.fragment"),Ad=Object.prototype.hasOwnProperty,Cd=Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pd={key:!0,ref:!0,__self:!0,__source:!0};function hi(e,t,n){var r,a={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ad.call(t,r)&&!Pd.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Rd,type:e,key:o,ref:s,props:a,_owner:Cd.current}}Pr.Fragment=_d;Pr.jsx=hi;Pr.jsxs=hi;ui.exports=Pr;var l=ui.exports,fi,Uo=Cr;fi=Uo.createRoot,Uo.hydrateRoot;const Od=1,Nd=1e6;let ea=0;function Id(){return ea=(ea+1)%Number.MAX_SAFE_INTEGER,ea.toString()}const ta=new Map,Bo=e=>{if(ta.has(e))return;const t=setTimeout(()=>{ta.delete(e),$n({type:"REMOVE_TOAST",toastId:e})},Nd);ta.set(e,t)},Dd=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,Od)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?Bo(n):e.toasts.forEach(r=>{Bo(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},hr=[];let fr={toasts:[]};function $n(e){fr=Dd(fr,e),hr.forEach(t=>{t(fr)})}function jd({...e}){const t=Id(),n=a=>$n({type:"UPDATE_TOAST",toast:{...a,id:t}}),r=()=>$n({type:"DISMISS_TOAST",toastId:t});return $n({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:a=>{a||r()}}}),{id:t,dismiss:r,update:n}}function Ld(){const[e,t]=d.useState(fr);return d.useEffect(()=>(hr.push(t),()=>{const n=hr.indexOf(t);n>-1&&hr.splice(n,1)}),[e]),{...e,toast:jd,dismiss:n=>$n({type:"DISMISS_TOAST",toastId:n})}}function Z(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function zo(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function pi(...e){return t=>{let n=!1;const r=e.map(a=>{const o=zo(a,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let a=0;a<r.length;a++){const o=r[a];typeof o=="function"?o():zo(e[a],null)}}}}function de(...e){return d.useCallback(pi(...e),e)}function $d(e,t){const n=d.createContext(t),r=o=>{const{children:s,...i}=o,u=d.useMemo(()=>i,Object.values(i));return l.jsx(n.Provider,{value:u,children:s})};r.displayName=e+"Provider";function a(o){const s=d.useContext(n);if(s)return s;if(t!==void 0)return t;throw new Error(`\`${o}\` must be used within \`${e}\``)}return[r,a]}function En(e,t=[]){let n=[];function r(o,s){const i=d.createContext(s),u=n.length;n=[...n,s];const c=p=>{var v;const{scope:g,children:h,...y}=p,m=((v=g==null?void 0:g[e])==null?void 0:v[u])||i,b=d.useMemo(()=>y,Object.values(y));return l.jsx(m.Provider,{value:b,children:h})};c.displayName=o+"Provider";function f(p,g){var m;const h=((m=g==null?void 0:g[e])==null?void 0:m[u])||i,y=d.useContext(h);if(y)return y;if(s!==void 0)return s;throw new Error(`\`${p}\` must be used within \`${o}\``)}return[c,f]}const a=()=>{const o=n.map(s=>d.createContext(s));return function(i){const u=(i==null?void 0:i[e])||o;return d.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])}};return a.scopeName=e,[r,Md(a,...t)]}function Md(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(o){const s=r.reduce((i,{useScope:u,scopeName:c})=>{const p=u(o)[`__scope${c}`];return{...i,...p}},{});return d.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function Mn(e){const t=Hd(e),n=d.forwardRef((r,a)=>{const{children:o,...s}=r,i=d.Children.toArray(o),u=i.find(Bd);if(u){const c=u.props.children,f=i.map(p=>p===u?d.Children.count(c)>1?d.Children.only(null):d.isValidElement(c)?c.props.children:null:p);return l.jsx(t,{...s,ref:a,children:d.isValidElement(c)?d.cloneElement(c,void 0,f):null})}return l.jsx(t,{...s,ref:a,children:o})});return n.displayName=`${e}.Slot`,n}var Fd=Mn("Slot");function Hd(e){const t=d.forwardRef((n,r)=>{const{children:a,...o}=n;if(d.isValidElement(a)){const s=qd(a),i=zd(o,a.props);return a.type!==d.Fragment&&(i.ref=r?pi(r,s):s),d.cloneElement(a,i)}return d.Children.count(a)>1?d.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var mi=Symbol("radix.slottable");function Ud(e){const t=({children:n})=>l.jsx(l.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=mi,t}function Bd(e){return d.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===mi}function zd(e,t){const n={...t};for(const r in t){const a=e[r],o=t[r];/^on[A-Z]/.test(r)?a&&o?n[r]=(...i)=>{const u=o(...i);return a(...i),u}:a&&(n[r]=a):r==="style"?n[r]={...a,...o}:r==="className"&&(n[r]=[a,o].filter(Boolean).join(" "))}return{...e,...n}}function qd(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Gd(e){const t=e+"CollectionProvider",[n,r]=En(t),[a,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=m=>{const{scope:b,children:v}=m,k=_.useRef(null),x=_.useRef(new Map).current;return l.jsx(a,{scope:b,itemMap:x,collectionRef:k,children:v})};s.displayName=t;const i=e+"CollectionSlot",u=Mn(i),c=_.forwardRef((m,b)=>{const{scope:v,children:k}=m,x=o(i,v),S=de(b,x.collectionRef);return l.jsx(u,{ref:S,children:k})});c.displayName=i;const f=e+"CollectionItemSlot",p="data-radix-collection-item",g=Mn(f),h=_.forwardRef((m,b)=>{const{scope:v,children:k,...x}=m,S=_.useRef(null),E=de(b,S),R=o(f,v);return _.useEffect(()=>(R.itemMap.set(S,{ref:S,...x}),()=>void R.itemMap.delete(S))),l.jsx(g,{[p]:"",ref:E,children:k})});h.displayName=f;function y(m){const b=o(e+"CollectionConsumer",m);return _.useCallback(()=>{const k=b.collectionRef.current;if(!k)return[];const x=Array.from(k.querySelectorAll(`[${p}]`));return Array.from(b.itemMap.values()).sort((R,A)=>x.indexOf(R.ref.current)-x.indexOf(A.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:s,Slot:c,ItemSlot:h},y,r]}var Wd=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],oe=Wd.reduce((e,t)=>{const n=Mn(`Primitive.${t}`),r=d.forwardRef((a,o)=>{const{asChild:s,...i}=a,u=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(u,{...i,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function gi(e,t){e&&Cr.flushSync(()=>e.dispatchEvent(t))}function pe(e){const t=d.useRef(e);return d.useEffect(()=>{t.current=e}),d.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Vd(e,t=globalThis==null?void 0:globalThis.document){const n=pe(e);d.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Jd="DismissableLayer",ka="dismissableLayer.update",Kd="dismissableLayer.pointerDownOutside",Yd="dismissableLayer.focusOutside",qo,bi=d.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Or=d.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:o,onInteractOutside:s,onDismiss:i,...u}=e,c=d.useContext(bi),[f,p]=d.useState(null),g=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,h]=d.useState({}),y=de(t,A=>p(A)),m=Array.from(c.layers),[b]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),v=m.indexOf(b),k=f?m.indexOf(f):-1,x=c.layersWithOutsidePointerEventsDisabled.size>0,S=k>=v,E=Xd(A=>{const D=A.target,C=[...c.branches].some(O=>O.contains(D));!S||C||(a==null||a(A),s==null||s(A),A.defaultPrevented||i==null||i())},g),R=Zd(A=>{const D=A.target;[...c.branches].some(O=>O.contains(D))||(o==null||o(A),s==null||s(A),A.defaultPrevented||i==null||i())},g);return Vd(A=>{k===c.layers.size-1&&(r==null||r(A),!A.defaultPrevented&&i&&(A.preventDefault(),i()))},g),d.useEffect(()=>{if(f)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(qo=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(f)),c.layers.add(f),Go(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=qo)}},[f,g,n,c]),d.useEffect(()=>()=>{f&&(c.layers.delete(f),c.layersWithOutsidePointerEventsDisabled.delete(f),Go())},[f,c]),d.useEffect(()=>{const A=()=>h({});return document.addEventListener(ka,A),()=>document.removeEventListener(ka,A)},[]),l.jsx(oe.div,{...u,ref:y,style:{pointerEvents:x?S?"auto":"none":void 0,...e.style},onFocusCapture:Z(e.onFocusCapture,R.onFocusCapture),onBlurCapture:Z(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:Z(e.onPointerDownCapture,E.onPointerDownCapture)})});Or.displayName=Jd;var Qd="DismissableLayerBranch",yi=d.forwardRef((e,t)=>{const n=d.useContext(bi),r=d.useRef(null),a=de(t,r);return d.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),l.jsx(oe.div,{...e,ref:a})});yi.displayName=Qd;function Xd(e,t=globalThis==null?void 0:globalThis.document){const n=pe(e),r=d.useRef(!1),a=d.useRef(()=>{});return d.useEffect(()=>{const o=i=>{if(i.target&&!r.current){let u=function(){wi(Kd,n,c,{discrete:!0})};const c={originalEvent:i};i.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=u,t.addEventListener("click",a.current,{once:!0})):u()}else t.removeEventListener("click",a.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",o),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Zd(e,t=globalThis==null?void 0:globalThis.document){const n=pe(e),r=d.useRef(!1);return d.useEffect(()=>{const a=o=>{o.target&&!r.current&&wi(Yd,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Go(){const e=new CustomEvent(ka);document.dispatchEvent(e)}function wi(e,t,n,{discrete:r}){const a=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?gi(a,o):a.dispatchEvent(o)}var eu=Or,tu=yi,et=globalThis!=null&&globalThis.document?d.useLayoutEffect:()=>{},nu="Portal",no=d.forwardRef((e,t)=>{var i;const{container:n,...r}=e,[a,o]=d.useState(!1);et(()=>o(!0),[]);const s=n||a&&((i=globalThis==null?void 0:globalThis.document)==null?void 0:i.body);return s?li.createPortal(l.jsx(oe.div,{...r,ref:t}),s):null});no.displayName=nu;function ru(e,t){return d.useReducer((n,r)=>t[n][r]??n,e)}var nt=e=>{const{present:t,children:n}=e,r=au(t),a=typeof n=="function"?n({present:r.isPresent}):d.Children.only(n),o=de(r.ref,ou(a));return typeof n=="function"||r.isPresent?d.cloneElement(a,{ref:o}):null};nt.displayName="Presence";function au(e){const[t,n]=d.useState(),r=d.useRef(null),a=d.useRef(e),o=d.useRef("none"),s=e?"mounted":"unmounted",[i,u]=ru(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return d.useEffect(()=>{const c=er(r.current);o.current=i==="mounted"?c:"none"},[i]),et(()=>{const c=r.current,f=a.current;if(f!==e){const g=o.current,h=er(c);e?u("MOUNT"):h==="none"||(c==null?void 0:c.display)==="none"?u("UNMOUNT"):u(f&&g!==h?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,u]),et(()=>{if(t){let c;const f=t.ownerDocument.defaultView??window,p=h=>{const m=er(r.current).includes(h.animationName);if(h.target===t&&m&&(u("ANIMATION_END"),!a.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",c=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},g=h=>{h.target===t&&(o.current=er(r.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{f.clearTimeout(c),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:d.useCallback(c=>{r.current=c?getComputedStyle(c):null,n(c)},[])}}function er(e){return(e==null?void 0:e.animationName)||"none"}function ou(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var su=ci[" useInsertionEffect ".trim().toString()]||et;function vi({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[a,o,s]=iu({defaultProp:t,onChange:n}),i=e!==void 0,u=i?e:a;{const f=d.useRef(e!==void 0);d.useEffect(()=>{const p=f.current;p!==i&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=i},[i,r])}const c=d.useCallback(f=>{var p;if(i){const g=lu(f)?f(e):f;g!==e&&((p=s.current)==null||p.call(s,g))}else o(f)},[i,e,o,s]);return[u,c]}function iu({defaultProp:e,onChange:t}){const[n,r]=d.useState(e),a=d.useRef(n),o=d.useRef(t);return su(()=>{o.current=t},[t]),d.useEffect(()=>{var s;a.current!==n&&((s=o.current)==null||s.call(o,n),a.current=n)},[n,a]),[n,r,o]}function lu(e){return typeof e=="function"}var cu=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),du="VisuallyHidden",Nr=d.forwardRef((e,t)=>l.jsx(oe.span,{...e,ref:t,style:{...cu,...e.style}}));Nr.displayName=du;var uu=Nr,ro="ToastProvider",[ao,hu,fu]=Gd("Toast"),[xi,aw]=En("Toast",[fu]),[pu,Ir]=xi(ro),ki=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:a="right",swipeThreshold:o=50,children:s}=e,[i,u]=d.useState(null),[c,f]=d.useState(0),p=d.useRef(!1),g=d.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${ro}\`. Expected non-empty \`string\`.`),l.jsx(ao.Provider,{scope:t,children:l.jsx(pu,{scope:t,label:n,duration:r,swipeDirection:a,swipeThreshold:o,toastCount:c,viewport:i,onViewportChange:u,onToastAdd:d.useCallback(()=>f(h=>h+1),[]),onToastRemove:d.useCallback(()=>f(h=>h-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:g,children:s})})};ki.displayName=ro;var Si="ToastViewport",mu=["F8"],Sa="toast.viewportPause",Ea="toast.viewportResume",Ei=d.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=mu,label:a="Notifications ({hotkey})",...o}=e,s=Ir(Si,n),i=hu(n),u=d.useRef(null),c=d.useRef(null),f=d.useRef(null),p=d.useRef(null),g=de(t,p,s.onViewportChange),h=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),y=s.toastCount>0;d.useEffect(()=>{const b=v=>{var x;r.length!==0&&r.every(S=>v[S]||v.code===S)&&((x=p.current)==null||x.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[r]),d.useEffect(()=>{const b=u.current,v=p.current;if(y&&b&&v){const k=()=>{if(!s.isClosePausedRef.current){const R=new CustomEvent(Sa);v.dispatchEvent(R),s.isClosePausedRef.current=!0}},x=()=>{if(s.isClosePausedRef.current){const R=new CustomEvent(Ea);v.dispatchEvent(R),s.isClosePausedRef.current=!1}},S=R=>{!b.contains(R.relatedTarget)&&x()},E=()=>{b.contains(document.activeElement)||x()};return b.addEventListener("focusin",k),b.addEventListener("focusout",S),b.addEventListener("pointermove",k),b.addEventListener("pointerleave",E),window.addEventListener("blur",k),window.addEventListener("focus",x),()=>{b.removeEventListener("focusin",k),b.removeEventListener("focusout",S),b.removeEventListener("pointermove",k),b.removeEventListener("pointerleave",E),window.removeEventListener("blur",k),window.removeEventListener("focus",x)}}},[y,s.isClosePausedRef]);const m=d.useCallback(({tabbingDirection:b})=>{const k=i().map(x=>{const S=x.ref.current,E=[S,...Au(S)];return b==="forwards"?E:E.reverse()});return(b==="forwards"?k.reverse():k).flat()},[i]);return d.useEffect(()=>{const b=p.current;if(b){const v=k=>{var E,R,A;const x=k.altKey||k.ctrlKey||k.metaKey;if(k.key==="Tab"&&!x){const D=document.activeElement,C=k.shiftKey;if(k.target===b&&C){(E=c.current)==null||E.focus();return}const N=m({tabbingDirection:C?"backwards":"forwards"}),U=N.findIndex(P=>P===D);na(N.slice(U+1))?k.preventDefault():C?(R=c.current)==null||R.focus():(A=f.current)==null||A.focus()}};return b.addEventListener("keydown",v),()=>b.removeEventListener("keydown",v)}},[i,m]),l.jsxs(tu,{ref:u,role:"region","aria-label":a.replace("{hotkey}",h),tabIndex:-1,style:{pointerEvents:y?void 0:"none"},children:[y&&l.jsx(Ta,{ref:c,onFocusFromOutsideViewport:()=>{const b=m({tabbingDirection:"forwards"});na(b)}}),l.jsx(ao.Slot,{scope:n,children:l.jsx(oe.ol,{tabIndex:-1,...o,ref:g})}),y&&l.jsx(Ta,{ref:f,onFocusFromOutsideViewport:()=>{const b=m({tabbingDirection:"backwards"});na(b)}})]})});Ei.displayName=Si;var Ti="ToastFocusProxy",Ta=d.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...a}=e,o=Ir(Ti,n);return l.jsx(Nr,{"aria-hidden":!0,tabIndex:0,...a,ref:t,style:{position:"fixed"},onFocus:s=>{var c;const i=s.relatedTarget;!((c=o.viewport)!=null&&c.contains(i))&&r()}})});Ta.displayName=Ti;var Jn="Toast",gu="toast.swipeStart",bu="toast.swipeMove",yu="toast.swipeCancel",wu="toast.swipeEnd",Ri=d.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:a,onOpenChange:o,...s}=e,[i,u]=vi({prop:r,defaultProp:a??!0,onChange:o,caller:Jn});return l.jsx(nt,{present:n||i,children:l.jsx(ku,{open:i,...s,ref:t,onClose:()=>u(!1),onPause:pe(e.onPause),onResume:pe(e.onResume),onSwipeStart:Z(e.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Z(e.onSwipeMove,c=>{const{x:f,y:p}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${f}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${p}px`)}),onSwipeCancel:Z(e.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Z(e.onSwipeEnd,c=>{const{x:f,y:p}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${f}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${p}px`),u(!1)})})})});Ri.displayName=Jn;var[vu,xu]=xi(Jn,{onClose(){}}),ku=d.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:a,open:o,onClose:s,onEscapeKeyDown:i,onPause:u,onResume:c,onSwipeStart:f,onSwipeMove:p,onSwipeCancel:g,onSwipeEnd:h,...y}=e,m=Ir(Jn,n),[b,v]=d.useState(null),k=de(t,P=>v(P)),x=d.useRef(null),S=d.useRef(null),E=a||m.duration,R=d.useRef(0),A=d.useRef(E),D=d.useRef(0),{onToastAdd:C,onToastRemove:O}=m,L=pe(()=>{var q;(b==null?void 0:b.contains(document.activeElement))&&((q=m.viewport)==null||q.focus()),s()}),N=d.useCallback(P=>{!P||P===1/0||(window.clearTimeout(D.current),R.current=new Date().getTime(),D.current=window.setTimeout(L,P))},[L]);d.useEffect(()=>{const P=m.viewport;if(P){const q=()=>{N(A.current),c==null||c()},F=()=>{const B=new Date().getTime()-R.current;A.current=A.current-B,window.clearTimeout(D.current),u==null||u()};return P.addEventListener(Sa,F),P.addEventListener(Ea,q),()=>{P.removeEventListener(Sa,F),P.removeEventListener(Ea,q)}}},[m.viewport,E,u,c,N]),d.useEffect(()=>{o&&!m.isClosePausedRef.current&&N(E)},[o,E,m.isClosePausedRef,N]),d.useEffect(()=>(C(),()=>O()),[C,O]);const U=d.useMemo(()=>b?Ii(b):null,[b]);return m.viewport?l.jsxs(l.Fragment,{children:[U&&l.jsx(Su,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:U}),l.jsx(vu,{scope:n,onClose:L,children:Cr.createPortal(l.jsx(ao.ItemSlot,{scope:n,children:l.jsx(eu,{asChild:!0,onEscapeKeyDown:Z(i,()=>{m.isFocusedToastEscapeKeyDownRef.current||L(),m.isFocusedToastEscapeKeyDownRef.current=!1}),children:l.jsx(oe.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":m.swipeDirection,...y,ref:k,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:Z(e.onKeyDown,P=>{P.key==="Escape"&&(i==null||i(P.nativeEvent),P.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,L()))}),onPointerDown:Z(e.onPointerDown,P=>{P.button===0&&(x.current={x:P.clientX,y:P.clientY})}),onPointerMove:Z(e.onPointerMove,P=>{if(!x.current)return;const q=P.clientX-x.current.x,F=P.clientY-x.current.y,B=!!S.current,j=["left","right"].includes(m.swipeDirection),T=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,M=j?T(0,q):0,ee=j?0:T(0,F),G=P.pointerType==="touch"?10:2,W={x:M,y:ee},V={originalEvent:P,delta:W};B?(S.current=W,tr(bu,p,V,{discrete:!1})):Wo(W,m.swipeDirection,G)?(S.current=W,tr(gu,f,V,{discrete:!1}),P.target.setPointerCapture(P.pointerId)):(Math.abs(q)>G||Math.abs(F)>G)&&(x.current=null)}),onPointerUp:Z(e.onPointerUp,P=>{const q=S.current,F=P.target;if(F.hasPointerCapture(P.pointerId)&&F.releasePointerCapture(P.pointerId),S.current=null,x.current=null,q){const B=P.currentTarget,j={originalEvent:P,delta:q};Wo(q,m.swipeDirection,m.swipeThreshold)?tr(wu,h,j,{discrete:!0}):tr(yu,g,j,{discrete:!0}),B.addEventListener("click",T=>T.preventDefault(),{once:!0})}})})})}),m.viewport)})]}):null}),Su=e=>{const{__scopeToast:t,children:n,...r}=e,a=Ir(Jn,t),[o,s]=d.useState(!1),[i,u]=d.useState(!1);return Ru(()=>s(!0)),d.useEffect(()=>{const c=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(c)},[]),i?null:l.jsx(no,{asChild:!0,children:l.jsx(Nr,{...r,children:o&&l.jsxs(l.Fragment,{children:[a.label," ",n]})})})},Eu="ToastTitle",_i=d.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return l.jsx(oe.div,{...r,ref:t})});_i.displayName=Eu;var Tu="ToastDescription",Ai=d.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return l.jsx(oe.div,{...r,ref:t})});Ai.displayName=Tu;var Ci="ToastAction",Pi=d.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?l.jsx(Ni,{altText:n,asChild:!0,children:l.jsx(oo,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Ci}\`. Expected non-empty \`string\`.`),null)});Pi.displayName=Ci;var Oi="ToastClose",oo=d.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,a=xu(Oi,n);return l.jsx(Ni,{asChild:!0,children:l.jsx(oe.button,{type:"button",...r,ref:t,onClick:Z(e.onClick,a.onClose)})})});oo.displayName=Oi;var Ni=d.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...a}=e;return l.jsx(oe.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...a,ref:t})});function Ii(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),_u(r)){const a=r.ariaHidden||r.hidden||r.style.display==="none",o=r.dataset.radixToastAnnounceExclude==="";if(!a)if(o){const s=r.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...Ii(r))}}),t}function tr(e,t,n,{discrete:r}){const a=n.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?gi(a,o):a.dispatchEvent(o)}var Wo=(e,t,n=0)=>{const r=Math.abs(e.x),a=Math.abs(e.y),o=r>a;return t==="left"||t==="right"?o&&r>n:!o&&a>n};function Ru(e=()=>{}){const t=pe(e);et(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function _u(e){return e.nodeType===e.ELEMENT_NODE}function Au(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function na(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var Cu=ki,Di=Ei,ji=Ri,Li=_i,$i=Ai,Mi=Pi,Fi=oo;function Hi(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Hi(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ui(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Hi(e))&&(r&&(r+=" "),r+=t);return r}const Vo=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Jo=Ui,so=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Jo(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:o}=t,s=Object.keys(a).map(c=>{const f=n==null?void 0:n[c],p=o==null?void 0:o[c];if(f===null)return null;const g=Vo(f)||Vo(p);return a[c][g]}),i=n&&Object.entries(n).reduce((c,f)=>{let[p,g]=f;return g===void 0||(c[p]=g),c},{}),u=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,f)=>{let{class:p,className:g,...h}=f;return Object.entries(h).every(y=>{let[m,b]=y;return Array.isArray(b)?b.includes({...o,...i}[m]):{...o,...i}[m]===b})?[...c,p,g]:c},[]);return Jo(e,s,u,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bi=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ou={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=d.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:o,iconNode:s,...i},u)=>d.createElement("svg",{ref:u,...Ou,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Bi("lucide",a),...i},[...s.map(([c,f])=>d.createElement(c,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=(e,t)=>{const n=d.forwardRef(({className:r,...a},o)=>d.createElement(Nu,{ref:o,iconNode:t,className:Bi(`lucide-${Pu(e)}`,r),...a}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=me("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=me("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=me("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=me("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=me("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=me("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=me("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=me("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=me("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=me("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=me("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=me("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=me("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=me("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=me("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=me("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=me("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),lo="-",Uu=e=>{const t=zu(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const i=s.split(lo);return i[0]===""&&i.length!==1&&i.shift(),Ji(i,t)||Bu(s)},getConflictingClassGroupIds:(s,i)=>{const u=n[s]||[];return i&&r[s]?[...u,...r[s]]:u}}},Ji=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),a=r?Ji(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const o=e.join(lo);return(s=t.validators.find(({validator:i})=>i(o)))==null?void 0:s.classGroupId},Ko=/^\[(.+)\]$/,Bu=e=>{if(Ko.test(e)){const t=Ko.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},zu=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Gu(Object.entries(e.classGroups),n).forEach(([o,s])=>{_a(s,r,o,t)}),r},_a=(e,t,n,r)=>{e.forEach(a=>{if(typeof a=="string"){const o=a===""?t:Yo(t,a);o.classGroupId=n;return}if(typeof a=="function"){if(qu(a)){_a(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([o,s])=>{_a(s,Yo(t,o),n,r)})})},Yo=(e,t)=>{let n=e;return t.split(lo).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},qu=e=>e.isThemeGetter,Gu=(e,t)=>t?e.map(([n,r])=>{const a=r.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,i])=>[t+s,i])):o);return[n,a]}):e,Wu=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const a=(o,s)=>{n.set(o,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return a(o,s),s},set(o,s){n.has(o)?n.set(o,s):a(o,s)}}},Ki="!",Vu=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,a=t[0],o=t.length,s=i=>{const u=[];let c=0,f=0,p;for(let b=0;b<i.length;b++){let v=i[b];if(c===0){if(v===a&&(r||i.slice(b,b+o)===t)){u.push(i.slice(f,b)),f=b+o;continue}if(v==="/"){p=b;continue}}v==="["?c++:v==="]"&&c--}const g=u.length===0?i:i.substring(f),h=g.startsWith(Ki),y=h?g.substring(1):g,m=p&&p>f?p-f:void 0;return{modifiers:u,hasImportantModifier:h,baseClassName:y,maybePostfixModifierPosition:m}};return n?i=>n({className:i,parseClassName:s}):s},Ju=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},Ku=e=>({cache:Wu(e.cacheSize),parseClassName:Vu(e),...Uu(e)}),Yu=/\s+/,Qu=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a}=t,o=[],s=e.trim().split(Yu);let i="";for(let u=s.length-1;u>=0;u-=1){const c=s[u],{modifiers:f,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:h}=n(c);let y=!!h,m=r(y?g.substring(0,h):g);if(!m){if(!y){i=c+(i.length>0?" "+i:i);continue}if(m=r(g),!m){i=c+(i.length>0?" "+i:i);continue}y=!1}const b=Ju(f).join(":"),v=p?b+Ki:b,k=v+m;if(o.includes(k))continue;o.push(k);const x=a(m,y);for(let S=0;S<x.length;++S){const E=x[S];o.push(v+E)}i=c+(i.length>0?" "+i:i)}return i};function Xu(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Yi(t))&&(r&&(r+=" "),r+=n);return r}const Yi=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Yi(e[r]))&&(n&&(n+=" "),n+=t);return n};function Zu(e,...t){let n,r,a,o=s;function s(u){const c=t.reduce((f,p)=>p(f),e());return n=Ku(c),r=n.cache.get,a=n.cache.set,o=i,i(u)}function i(u){const c=r(u);if(c)return c;const f=Qu(u,n);return a(u,f),f}return function(){return o(Xu.apply(null,arguments))}}const ae=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Qi=/^\[(?:([a-z-]+):)?(.+)\]$/i,eh=/^\d+\/\d+$/,th=new Set(["px","full","screen"]),nh=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,rh=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ah=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,oh=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,sh=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,st=e=>rn(e)||th.has(e)||eh.test(e),mt=e=>Tn(e,"length",ph),rn=e=>!!e&&!Number.isNaN(Number(e)),ra=e=>Tn(e,"number",rn),On=e=>!!e&&Number.isInteger(Number(e)),ih=e=>e.endsWith("%")&&rn(e.slice(0,-1)),z=e=>Qi.test(e),gt=e=>nh.test(e),lh=new Set(["length","size","percentage"]),ch=e=>Tn(e,lh,Xi),dh=e=>Tn(e,"position",Xi),uh=new Set(["image","url"]),hh=e=>Tn(e,uh,gh),fh=e=>Tn(e,"",mh),Nn=()=>!0,Tn=(e,t,n)=>{const r=Qi.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},ph=e=>rh.test(e)&&!ah.test(e),Xi=()=>!1,mh=e=>oh.test(e),gh=e=>sh.test(e),bh=()=>{const e=ae("colors"),t=ae("spacing"),n=ae("blur"),r=ae("brightness"),a=ae("borderColor"),o=ae("borderRadius"),s=ae("borderSpacing"),i=ae("borderWidth"),u=ae("contrast"),c=ae("grayscale"),f=ae("hueRotate"),p=ae("invert"),g=ae("gap"),h=ae("gradientColorStops"),y=ae("gradientColorStopPositions"),m=ae("inset"),b=ae("margin"),v=ae("opacity"),k=ae("padding"),x=ae("saturate"),S=ae("scale"),E=ae("sepia"),R=ae("skew"),A=ae("space"),D=ae("translate"),C=()=>["auto","contain","none"],O=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto",z,t],N=()=>[z,t],U=()=>["",st,mt],P=()=>["auto",rn,z],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],F=()=>["solid","dashed","dotted","double","none"],B=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],j=()=>["start","end","center","between","around","evenly","stretch"],T=()=>["","0",z],M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ee=()=>[rn,z];return{cacheSize:500,separator:":",theme:{colors:[Nn],spacing:[st,mt],blur:["none","",gt,z],brightness:ee(),borderColor:[e],borderRadius:["none","","full",gt,z],borderSpacing:N(),borderWidth:U(),contrast:ee(),grayscale:T(),hueRotate:ee(),invert:T(),gap:N(),gradientColorStops:[e],gradientColorStopPositions:[ih,mt],inset:L(),margin:L(),opacity:ee(),padding:N(),saturate:ee(),scale:ee(),sepia:T(),skew:ee(),space:N(),translate:N()},classGroups:{aspect:[{aspect:["auto","square","video",z]}],container:["container"],columns:[{columns:[gt]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),z]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",On,z]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",z]}],grow:[{grow:T()}],shrink:[{shrink:T()}],order:[{order:["first","last","none",On,z]}],"grid-cols":[{"grid-cols":[Nn]}],"col-start-end":[{col:["auto",{span:["full",On,z]},z]}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":[Nn]}],"row-start-end":[{row:["auto",{span:[On,z]},z]}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",z]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...j()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...j(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...j(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",z,t]}],"min-w":[{"min-w":[z,t,"min","max","fit"]}],"max-w":[{"max-w":[z,t,"none","full","min","max","fit","prose",{screen:[gt]},gt]}],h:[{h:[z,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[z,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[z,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[z,t,"auto","min","max","fit"]}],"font-size":[{text:["base",gt,mt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ra]}],"font-family":[{font:[Nn]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",z]}],"line-clamp":[{"line-clamp":["none",rn,ra]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",st,z]}],"list-image":[{"list-image":["none",z]}],"list-style-type":[{list:["none","disc","decimal",z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...F(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",st,mt]}],"underline-offset":[{"underline-offset":["auto",st,z]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),dh]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",ch]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},hh]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...F(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:F()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...F()]}],"outline-offset":[{"outline-offset":[st,z]}],"outline-w":[{outline:[st,mt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[st,mt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",gt,fh]}],"shadow-color":[{shadow:[Nn]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...B(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":B()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",gt,z]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[p]}],saturate:[{saturate:[x]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",z]}],duration:[{duration:ee()}],ease:[{ease:["linear","in","out","in-out",z]}],delay:[{delay:ee()}],animate:[{animate:["none","spin","ping","pulse","bounce",z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[On,z]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[R]}],"skew-y":[{"skew-y":[R]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",z]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",z]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",z]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[st,mt,ra]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},yh=Zu(bh);function re(...e){return yh(Ui(e))}function ow(e){return e.toLowerCase().replace(/[`*_~]/g,"").replace(/[^\w\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}const wh=Cu,Zi=d.forwardRef(({className:e,...t},n)=>l.jsx(Di,{ref:n,className:re("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Zi.displayName=Di.displayName;const vh=so("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),el=d.forwardRef(({className:e,variant:t,...n},r)=>l.jsx(ji,{ref:r,className:re(vh({variant:t}),e),...n}));el.displayName=ji.displayName;const xh=d.forwardRef(({className:e,...t},n)=>l.jsx(Mi,{ref:n,className:re("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));xh.displayName=Mi.displayName;const tl=d.forwardRef(({className:e,...t},n)=>l.jsx(Fi,{ref:n,className:re("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:l.jsx(io,{className:"h-4 w-4"})}));tl.displayName=Fi.displayName;const nl=d.forwardRef(({className:e,...t},n)=>l.jsx(Li,{ref:n,className:re("text-sm font-semibold",e),...t}));nl.displayName=Li.displayName;const rl=d.forwardRef(({className:e,...t},n)=>l.jsx($i,{ref:n,className:re("text-sm opacity-90",e),...t}));rl.displayName=$i.displayName;function kh(){const{toasts:e}=Ld();return l.jsxs(wh,{children:[e.map(function({id:t,title:n,description:r,action:a,...o}){return l.jsxs(el,{...o,children:[l.jsxs("div",{className:"grid gap-1",children:[n&&l.jsx(nl,{children:n}),r&&l.jsx(rl,{children:r})]}),a,l.jsx(tl,{})]},t)}),l.jsx(Zi,{})]})}var Qo=["light","dark"],Sh="(prefers-color-scheme: dark)",Eh=d.createContext(void 0),Th={setTheme:e=>{},themes:[]},Rh=()=>{var e;return(e=d.useContext(Eh))!=null?e:Th};d.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:a,defaultTheme:o,value:s,attrs:i,nonce:u})=>{let c=o==="system",f=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${i.map(y=>`'${y}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=a?Qo.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(y,m=!1,b=!0)=>{let v=s?s[y]:y,k=m?y+"|| ''":`'${v}'`,x="";return a&&b&&!m&&Qo.includes(y)&&(x+=`d.style.colorScheme = '${y}';`),n==="class"?m||v?x+=`c.add(${k})`:x+="null":v&&(x+=`d[s](n,${k})`),x},h=e?`!function(){${f}${g(e)}}()`:r?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${Sh}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${g(s?"x[e]":"e",!0)}}${c?"":"else{"+g(o,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${g(s?"x[e]":"e",!0)}}else{${g(o,!1,!1)};}${p}}catch(t){}}();`;return d.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:h}})});var _h=e=>{switch(e){case"success":return Ph;case"info":return Nh;case"warning":return Oh;case"error":return Ih;default:return null}},Ah=Array(12).fill(0),Ch=({visible:e,className:t})=>_.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},_.createElement("div",{className:"sonner-spinner"},Ah.map((n,r)=>_.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),Ph=_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},_.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Oh=_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},_.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Nh=_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},_.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Ih=_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},_.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Dh=_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},_.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),_.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),jh=()=>{let[e,t]=_.useState(document.hidden);return _.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Aa=1,Lh=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,a=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Aa++,o=this.toasts.find(i=>i.id===a),s=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(a)&&this.dismissedToasts.delete(a),o?this.toasts=this.toasts.map(i=>i.id===a?(this.publish({...i,...e,id:a,title:n}),{...i,...e,id:a,dismissible:s,title:n}):i):this.addToast({title:n,...r,dismissible:s,id:a}),a},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),a=n!==void 0,o,s=r.then(async u=>{if(o=["resolve",u],_.isValidElement(u))a=!1,this.create({id:n,type:"default",message:u});else if(Mh(u)&&!u.ok){a=!1;let c=typeof t.error=="function"?await t.error(`HTTP error! status: ${u.status}`):t.error,f=typeof t.description=="function"?await t.description(`HTTP error! status: ${u.status}`):t.description;this.create({id:n,type:"error",message:c,description:f})}else if(t.success!==void 0){a=!1;let c=typeof t.success=="function"?await t.success(u):t.success,f=typeof t.description=="function"?await t.description(u):t.description;this.create({id:n,type:"success",message:c,description:f})}}).catch(async u=>{if(o=["reject",u],t.error!==void 0){a=!1;let c=typeof t.error=="function"?await t.error(u):t.error,f=typeof t.description=="function"?await t.description(u):t.description;this.create({id:n,type:"error",message:c,description:f})}}).finally(()=>{var u;a&&(this.dismiss(n),n=void 0),(u=t.finally)==null||u.call(t)}),i=()=>new Promise((u,c)=>s.then(()=>o[0]==="reject"?c(o[1]):u(o[1])).catch(c));return typeof n!="string"&&typeof n!="number"?{unwrap:i}:Object.assign(n,{unwrap:i})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Aa++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},ke=new Lh,$h=(e,t)=>{let n=(t==null?void 0:t.id)||Aa++;return ke.addToast({title:e,...t,id:n}),n},Mh=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",Fh=$h,Hh=()=>ke.toasts,Uh=()=>ke.getActiveToasts(),sw=Object.assign(Fh,{success:ke.success,info:ke.info,warning:ke.warning,error:ke.error,custom:ke.custom,message:ke.message,promise:ke.promise,dismiss:ke.dismiss,loading:ke.loading},{getHistory:Hh,getToasts:Uh});function Bh(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}Bh(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function nr(e){return e.label!==void 0}var zh=3,qh="32px",Gh="16px",Xo=4e3,Wh=356,Vh=14,Jh=20,Kh=200;function Me(...e){return e.filter(Boolean).join(" ")}function Yh(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var Qh=e=>{var t,n,r,a,o,s,i,u,c,f,p;let{invert:g,toast:h,unstyled:y,interacting:m,setHeights:b,visibleToasts:v,heights:k,index:x,toasts:S,expanded:E,removeToast:R,defaultRichColors:A,closeButton:D,style:C,cancelButtonStyle:O,actionButtonStyle:L,className:N="",descriptionClassName:U="",duration:P,position:q,gap:F,loadingIcon:B,expandByDefault:j,classNames:T,icons:M,closeButtonAriaLabel:ee="Close toast",pauseWhenPageIsHidden:G}=e,[W,V]=_.useState(null),[ie,ye]=_.useState(null),[J,Ee]=_.useState(!1),[ge,We]=_.useState(!1),[Ve,ut]=_.useState(!1),[Te,Pt]=_.useState(!1),[Kr,Qn]=_.useState(!1),[Yr,Cn]=_.useState(0),[Kt,Io]=_.useState(0),Pn=_.useRef(h.duration||P||Xo),Do=_.useRef(null),Ot=_.useRef(null),dd=x===0,ud=x+1<=v,Ae=h.type,Yt=h.dismissible!==!1,hd=h.className||"",fd=h.descriptionClassName||"",Xn=_.useMemo(()=>k.findIndex(H=>H.toastId===h.id)||0,[k,h.id]),pd=_.useMemo(()=>{var H;return(H=h.closeButton)!=null?H:D},[h.closeButton,D]),jo=_.useMemo(()=>h.duration||P||Xo,[h.duration,P]),Qr=_.useRef(0),Qt=_.useRef(0),Lo=_.useRef(0),Xt=_.useRef(null),[md,gd]=q.split("-"),$o=_.useMemo(()=>k.reduce((H,ne,se)=>se>=Xn?H:H+ne.height,0),[k,Xn]),Mo=jh(),bd=h.invert||g,Xr=Ae==="loading";Qt.current=_.useMemo(()=>Xn*F+$o,[Xn,$o]),_.useEffect(()=>{Pn.current=jo},[jo]),_.useEffect(()=>{Ee(!0)},[]),_.useEffect(()=>{let H=Ot.current;if(H){let ne=H.getBoundingClientRect().height;return Io(ne),b(se=>[{toastId:h.id,height:ne,position:h.position},...se]),()=>b(se=>se.filter(je=>je.toastId!==h.id))}},[b,h.id]),_.useLayoutEffect(()=>{if(!J)return;let H=Ot.current,ne=H.style.height;H.style.height="auto";let se=H.getBoundingClientRect().height;H.style.height=ne,Io(se),b(je=>je.find(Le=>Le.toastId===h.id)?je.map(Le=>Le.toastId===h.id?{...Le,height:se}:Le):[{toastId:h.id,height:se,position:h.position},...je])},[J,h.title,h.description,b,h.id]);let ht=_.useCallback(()=>{We(!0),Cn(Qt.current),b(H=>H.filter(ne=>ne.toastId!==h.id)),setTimeout(()=>{R(h)},Kh)},[h,R,b,Qt]);_.useEffect(()=>{if(h.promise&&Ae==="loading"||h.duration===1/0||h.type==="loading")return;let H;return E||m||G&&Mo?(()=>{if(Lo.current<Qr.current){let ne=new Date().getTime()-Qr.current;Pn.current=Pn.current-ne}Lo.current=new Date().getTime()})():Pn.current!==1/0&&(Qr.current=new Date().getTime(),H=setTimeout(()=>{var ne;(ne=h.onAutoClose)==null||ne.call(h,h),ht()},Pn.current)),()=>clearTimeout(H)},[E,m,h,Ae,G,Mo,ht]),_.useEffect(()=>{h.delete&&ht()},[ht,h.delete]);function yd(){var H,ne,se;return M!=null&&M.loading?_.createElement("div",{className:Me(T==null?void 0:T.loader,(H=h==null?void 0:h.classNames)==null?void 0:H.loader,"sonner-loader"),"data-visible":Ae==="loading"},M.loading):B?_.createElement("div",{className:Me(T==null?void 0:T.loader,(ne=h==null?void 0:h.classNames)==null?void 0:ne.loader,"sonner-loader"),"data-visible":Ae==="loading"},B):_.createElement(Ch,{className:Me(T==null?void 0:T.loader,(se=h==null?void 0:h.classNames)==null?void 0:se.loader),visible:Ae==="loading"})}return _.createElement("li",{tabIndex:0,ref:Ot,className:Me(N,hd,T==null?void 0:T.toast,(t=h==null?void 0:h.classNames)==null?void 0:t.toast,T==null?void 0:T.default,T==null?void 0:T[Ae],(n=h==null?void 0:h.classNames)==null?void 0:n[Ae]),"data-sonner-toast":"","data-rich-colors":(r=h.richColors)!=null?r:A,"data-styled":!(h.jsx||h.unstyled||y),"data-mounted":J,"data-promise":!!h.promise,"data-swiped":Kr,"data-removed":ge,"data-visible":ud,"data-y-position":md,"data-x-position":gd,"data-index":x,"data-front":dd,"data-swiping":Ve,"data-dismissible":Yt,"data-type":Ae,"data-invert":bd,"data-swipe-out":Te,"data-swipe-direction":ie,"data-expanded":!!(E||j&&J),style:{"--index":x,"--toasts-before":x,"--z-index":S.length-x,"--offset":`${ge?Yr:Qt.current}px`,"--initial-height":j?"auto":`${Kt}px`,...C,...h.style},onDragEnd:()=>{ut(!1),V(null),Xt.current=null},onPointerDown:H=>{Xr||!Yt||(Do.current=new Date,Cn(Qt.current),H.target.setPointerCapture(H.pointerId),H.target.tagName!=="BUTTON"&&(ut(!0),Xt.current={x:H.clientX,y:H.clientY}))},onPointerUp:()=>{var H,ne,se,je;if(Te||!Yt)return;Xt.current=null;let Le=Number(((H=Ot.current)==null?void 0:H.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),ft=Number(((ne=Ot.current)==null?void 0:ne.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Nt=new Date().getTime()-((se=Do.current)==null?void 0:se.getTime()),$e=W==="x"?Le:ft,pt=Math.abs($e)/Nt;if(Math.abs($e)>=Jh||pt>.11){Cn(Qt.current),(je=h.onDismiss)==null||je.call(h,h),ye(W==="x"?Le>0?"right":"left":ft>0?"down":"up"),ht(),Pt(!0),Qn(!1);return}ut(!1),V(null)},onPointerMove:H=>{var ne,se,je,Le;if(!Xt.current||!Yt||((ne=window.getSelection())==null?void 0:ne.toString().length)>0)return;let ft=H.clientY-Xt.current.y,Nt=H.clientX-Xt.current.x,$e=(se=e.swipeDirections)!=null?se:Yh(q);!W&&(Math.abs(Nt)>1||Math.abs(ft)>1)&&V(Math.abs(Nt)>Math.abs(ft)?"x":"y");let pt={x:0,y:0};W==="y"?($e.includes("top")||$e.includes("bottom"))&&($e.includes("top")&&ft<0||$e.includes("bottom")&&ft>0)&&(pt.y=ft):W==="x"&&($e.includes("left")||$e.includes("right"))&&($e.includes("left")&&Nt<0||$e.includes("right")&&Nt>0)&&(pt.x=Nt),(Math.abs(pt.x)>0||Math.abs(pt.y)>0)&&Qn(!0),(je=Ot.current)==null||je.style.setProperty("--swipe-amount-x",`${pt.x}px`),(Le=Ot.current)==null||Le.style.setProperty("--swipe-amount-y",`${pt.y}px`)}},pd&&!h.jsx?_.createElement("button",{"aria-label":ee,"data-disabled":Xr,"data-close-button":!0,onClick:Xr||!Yt?()=>{}:()=>{var H;ht(),(H=h.onDismiss)==null||H.call(h,h)},className:Me(T==null?void 0:T.closeButton,(a=h==null?void 0:h.classNames)==null?void 0:a.closeButton)},(o=M==null?void 0:M.close)!=null?o:Dh):null,h.jsx||d.isValidElement(h.title)?h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title:_.createElement(_.Fragment,null,Ae||h.icon||h.promise?_.createElement("div",{"data-icon":"",className:Me(T==null?void 0:T.icon,(s=h==null?void 0:h.classNames)==null?void 0:s.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||yd():null,h.type!=="loading"?h.icon||(M==null?void 0:M[Ae])||_h(Ae):null):null,_.createElement("div",{"data-content":"",className:Me(T==null?void 0:T.content,(i=h==null?void 0:h.classNames)==null?void 0:i.content)},_.createElement("div",{"data-title":"",className:Me(T==null?void 0:T.title,(u=h==null?void 0:h.classNames)==null?void 0:u.title)},typeof h.title=="function"?h.title():h.title),h.description?_.createElement("div",{"data-description":"",className:Me(U,fd,T==null?void 0:T.description,(c=h==null?void 0:h.classNames)==null?void 0:c.description)},typeof h.description=="function"?h.description():h.description):null),d.isValidElement(h.cancel)?h.cancel:h.cancel&&nr(h.cancel)?_.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||O,onClick:H=>{var ne,se;nr(h.cancel)&&Yt&&((se=(ne=h.cancel).onClick)==null||se.call(ne,H),ht())},className:Me(T==null?void 0:T.cancelButton,(f=h==null?void 0:h.classNames)==null?void 0:f.cancelButton)},h.cancel.label):null,d.isValidElement(h.action)?h.action:h.action&&nr(h.action)?_.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||L,onClick:H=>{var ne,se;nr(h.action)&&((se=(ne=h.action).onClick)==null||se.call(ne,H),!H.defaultPrevented&&ht())},className:Me(T==null?void 0:T.actionButton,(p=h==null?void 0:h.classNames)==null?void 0:p.actionButton)},h.action.label):null))};function Zo(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Xh(e,t){let n={};return[e,t].forEach((r,a)=>{let o=a===1,s=o?"--mobile-offset":"--offset",i=o?Gh:qh;function u(c){["top","right","bottom","left"].forEach(f=>{n[`${s}-${f}`]=typeof c=="number"?`${c}px`:c})}typeof r=="number"||typeof r=="string"?u(r):typeof r=="object"?["top","right","bottom","left"].forEach(c=>{r[c]===void 0?n[`${s}-${c}`]=i:n[`${s}-${c}`]=typeof r[c]=="number"?`${r[c]}px`:r[c]}):u(i)}),n}var Zh=d.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:a=["altKey","KeyT"],expand:o,closeButton:s,className:i,offset:u,mobileOffset:c,theme:f="light",richColors:p,duration:g,style:h,visibleToasts:y=zh,toastOptions:m,dir:b=Zo(),gap:v=Vh,loadingIcon:k,icons:x,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:E}=e,[R,A]=_.useState([]),D=_.useMemo(()=>Array.from(new Set([r].concat(R.filter(G=>G.position).map(G=>G.position)))),[R,r]),[C,O]=_.useState([]),[L,N]=_.useState(!1),[U,P]=_.useState(!1),[q,F]=_.useState(f!=="system"?f:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),B=_.useRef(null),j=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),T=_.useRef(null),M=_.useRef(!1),ee=_.useCallback(G=>{A(W=>{var V;return(V=W.find(ie=>ie.id===G.id))!=null&&V.delete||ke.dismiss(G.id),W.filter(({id:ie})=>ie!==G.id)})},[]);return _.useEffect(()=>ke.subscribe(G=>{if(G.dismiss){A(W=>W.map(V=>V.id===G.id?{...V,delete:!0}:V));return}setTimeout(()=>{li.flushSync(()=>{A(W=>{let V=W.findIndex(ie=>ie.id===G.id);return V!==-1?[...W.slice(0,V),{...W[V],...G},...W.slice(V+1)]:[G,...W]})})})}),[]),_.useEffect(()=>{if(f!=="system"){F(f);return}if(f==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?F("dark"):F("light")),typeof window>"u")return;let G=window.matchMedia("(prefers-color-scheme: dark)");try{G.addEventListener("change",({matches:W})=>{F(W?"dark":"light")})}catch{G.addListener(({matches:V})=>{try{F(V?"dark":"light")}catch(ie){console.error(ie)}})}},[f]),_.useEffect(()=>{R.length<=1&&N(!1)},[R]),_.useEffect(()=>{let G=W=>{var V,ie;a.every(ye=>W[ye]||W.code===ye)&&(N(!0),(V=B.current)==null||V.focus()),W.code==="Escape"&&(document.activeElement===B.current||(ie=B.current)!=null&&ie.contains(document.activeElement))&&N(!1)};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[a]),_.useEffect(()=>{if(B.current)return()=>{T.current&&(T.current.focus({preventScroll:!0}),T.current=null,M.current=!1)}},[B.current]),_.createElement("section",{ref:t,"aria-label":`${S} ${j}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},D.map((G,W)=>{var V;let[ie,ye]=G.split("-");return R.length?_.createElement("ol",{key:G,dir:b==="auto"?Zo():b,tabIndex:-1,ref:B,className:i,"data-sonner-toaster":!0,"data-theme":q,"data-y-position":ie,"data-lifted":L&&R.length>1&&!o,"data-x-position":ye,style:{"--front-toast-height":`${((V=C[0])==null?void 0:V.height)||0}px`,"--width":`${Wh}px`,"--gap":`${v}px`,...h,...Xh(u,c)},onBlur:J=>{M.current&&!J.currentTarget.contains(J.relatedTarget)&&(M.current=!1,T.current&&(T.current.focus({preventScroll:!0}),T.current=null))},onFocus:J=>{J.target instanceof HTMLElement&&J.target.dataset.dismissible==="false"||M.current||(M.current=!0,T.current=J.relatedTarget)},onMouseEnter:()=>N(!0),onMouseMove:()=>N(!0),onMouseLeave:()=>{U||N(!1)},onDragEnd:()=>N(!1),onPointerDown:J=>{J.target instanceof HTMLElement&&J.target.dataset.dismissible==="false"||P(!0)},onPointerUp:()=>P(!1)},R.filter(J=>!J.position&&W===0||J.position===G).map((J,Ee)=>{var ge,We;return _.createElement(Qh,{key:J.id,icons:x,index:Ee,toast:J,defaultRichColors:p,duration:(ge=m==null?void 0:m.duration)!=null?ge:g,className:m==null?void 0:m.className,descriptionClassName:m==null?void 0:m.descriptionClassName,invert:n,visibleToasts:y,closeButton:(We=m==null?void 0:m.closeButton)!=null?We:s,interacting:U,position:G,style:m==null?void 0:m.style,unstyled:m==null?void 0:m.unstyled,classNames:m==null?void 0:m.classNames,cancelButtonStyle:m==null?void 0:m.cancelButtonStyle,actionButtonStyle:m==null?void 0:m.actionButtonStyle,removeToast:ee,toasts:R.filter(Ve=>Ve.position==J.position),heights:C.filter(Ve=>Ve.position==J.position),setHeights:O,expandByDefault:o,gap:v,loadingIcon:k,expanded:L,pauseWhenPageIsHidden:E,swipeDirections:e.swipeDirections})})):null}))});const ef=({...e})=>{const{theme:t="system"}=Rh();return l.jsx(Zh,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var tf=ci[" useId ".trim().toString()]||(()=>{}),nf=0;function aa(e){const[t,n]=d.useState(tf());return et(()=>{n(r=>r??String(nf++))},[e]),t?`radix-${t}`:""}const rf=["top","right","bottom","left"],At=Math.min,Re=Math.max,vr=Math.round,rr=Math.floor,Ze=e=>({x:e,y:e}),af={left:"right",right:"left",bottom:"top",top:"bottom"},of={start:"end",end:"start"};function Ca(e,t,n){return Re(e,At(t,n))}function ct(e,t){return typeof e=="function"?e(t):e}function dt(e){return e.split("-")[0]}function Rn(e){return e.split("-")[1]}function co(e){return e==="x"?"y":"x"}function uo(e){return e==="y"?"height":"width"}const sf=new Set(["top","bottom"]);function Xe(e){return sf.has(dt(e))?"y":"x"}function ho(e){return co(Xe(e))}function lf(e,t,n){n===void 0&&(n=!1);const r=Rn(e),a=ho(e),o=uo(a);let s=a==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=xr(s)),[s,xr(s)]}function cf(e){const t=xr(e);return[Pa(e),t,Pa(t)]}function Pa(e){return e.replace(/start|end/g,t=>of[t])}const es=["left","right"],ts=["right","left"],df=["top","bottom"],uf=["bottom","top"];function hf(e,t,n){switch(e){case"top":case"bottom":return n?t?ts:es:t?es:ts;case"left":case"right":return t?df:uf;default:return[]}}function ff(e,t,n,r){const a=Rn(e);let o=hf(dt(e),n==="start",r);return a&&(o=o.map(s=>s+"-"+a),t&&(o=o.concat(o.map(Pa)))),o}function xr(e){return e.replace(/left|right|bottom|top/g,t=>af[t])}function pf(e){return{top:0,right:0,bottom:0,left:0,...e}}function al(e){return typeof e!="number"?pf(e):{top:e,right:e,bottom:e,left:e}}function kr(e){const{x:t,y:n,width:r,height:a}=e;return{width:r,height:a,top:n,left:t,right:t+r,bottom:n+a,x:t,y:n}}function ns(e,t,n){let{reference:r,floating:a}=e;const o=Xe(t),s=ho(t),i=uo(s),u=dt(t),c=o==="y",f=r.x+r.width/2-a.width/2,p=r.y+r.height/2-a.height/2,g=r[i]/2-a[i]/2;let h;switch(u){case"top":h={x:f,y:r.y-a.height};break;case"bottom":h={x:f,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:p};break;case"left":h={x:r.x-a.width,y:p};break;default:h={x:r.x,y:r.y}}switch(Rn(t)){case"start":h[s]-=g*(n&&c?-1:1);break;case"end":h[s]+=g*(n&&c?-1:1);break}return h}const mf=async(e,t,n)=>{const{placement:r="bottom",strategy:a="absolute",middleware:o=[],platform:s}=n,i=o.filter(Boolean),u=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:a}),{x:f,y:p}=ns(c,r,u),g=r,h={},y=0;for(let m=0;m<i.length;m++){const{name:b,fn:v}=i[m],{x:k,y:x,data:S,reset:E}=await v({x:f,y:p,initialPlacement:r,placement:g,strategy:a,middlewareData:h,rects:c,platform:s,elements:{reference:e,floating:t}});f=k??f,p=x??p,h={...h,[b]:{...h[b],...S}},E&&y<=50&&(y++,typeof E=="object"&&(E.placement&&(g=E.placement),E.rects&&(c=E.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:a}):E.rects),{x:f,y:p}=ns(c,g,u)),m=-1)}return{x:f,y:p,placement:g,strategy:a,middlewareData:h}};async function Fn(e,t){var n;t===void 0&&(t={});const{x:r,y:a,platform:o,rects:s,elements:i,strategy:u}=e,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:g=!1,padding:h=0}=ct(t,e),y=al(h),b=i[g?p==="floating"?"reference":"floating":p],v=kr(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(b)))==null||n?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(i.floating)),boundary:c,rootBoundary:f,strategy:u})),k=p==="floating"?{x:r,y:a,width:s.floating.width,height:s.floating.height}:s.reference,x=await(o.getOffsetParent==null?void 0:o.getOffsetParent(i.floating)),S=await(o.isElement==null?void 0:o.isElement(x))?await(o.getScale==null?void 0:o.getScale(x))||{x:1,y:1}:{x:1,y:1},E=kr(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:k,offsetParent:x,strategy:u}):k);return{top:(v.top-E.top+y.top)/S.y,bottom:(E.bottom-v.bottom+y.bottom)/S.y,left:(v.left-E.left+y.left)/S.x,right:(E.right-v.right+y.right)/S.x}}const gf=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:a,rects:o,platform:s,elements:i,middlewareData:u}=t,{element:c,padding:f=0}=ct(e,t)||{};if(c==null)return{};const p=al(f),g={x:n,y:r},h=ho(a),y=uo(h),m=await s.getDimensions(c),b=h==="y",v=b?"top":"left",k=b?"bottom":"right",x=b?"clientHeight":"clientWidth",S=o.reference[y]+o.reference[h]-g[h]-o.floating[y],E=g[h]-o.reference[h],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let A=R?R[x]:0;(!A||!await(s.isElement==null?void 0:s.isElement(R)))&&(A=i.floating[x]||o.floating[y]);const D=S/2-E/2,C=A/2-m[y]/2-1,O=At(p[v],C),L=At(p[k],C),N=O,U=A-m[y]-L,P=A/2-m[y]/2+D,q=Ca(N,P,U),F=!u.arrow&&Rn(a)!=null&&P!==q&&o.reference[y]/2-(P<N?O:L)-m[y]/2<0,B=F?P<N?P-N:P-U:0;return{[h]:g[h]+B,data:{[h]:q,centerOffset:P-q-B,...F&&{alignmentOffset:B}},reset:F}}}),bf=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:a,middlewareData:o,rects:s,initialPlacement:i,platform:u,elements:c}=t,{mainAxis:f=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:m=!0,...b}=ct(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const v=dt(a),k=Xe(i),x=dt(i)===i,S=await(u.isRTL==null?void 0:u.isRTL(c.floating)),E=g||(x||!m?[xr(i)]:cf(i)),R=y!=="none";!g&&R&&E.push(...ff(i,m,y,S));const A=[i,...E],D=await Fn(t,b),C=[];let O=((r=o.flip)==null?void 0:r.overflows)||[];if(f&&C.push(D[v]),p){const P=lf(a,s,S);C.push(D[P[0]],D[P[1]])}if(O=[...O,{placement:a,overflows:C}],!C.every(P=>P<=0)){var L,N;const P=(((L=o.flip)==null?void 0:L.index)||0)+1,q=A[P];if(q&&(!(p==="alignment"?k!==Xe(q):!1)||O.every(j=>j.overflows[0]>0&&Xe(j.placement)===k)))return{data:{index:P,overflows:O},reset:{placement:q}};let F=(N=O.filter(B=>B.overflows[0]<=0).sort((B,j)=>B.overflows[1]-j.overflows[1])[0])==null?void 0:N.placement;if(!F)switch(h){case"bestFit":{var U;const B=(U=O.filter(j=>{if(R){const T=Xe(j.placement);return T===k||T==="y"}return!0}).map(j=>[j.placement,j.overflows.filter(T=>T>0).reduce((T,M)=>T+M,0)]).sort((j,T)=>j[1]-T[1])[0])==null?void 0:U[0];B&&(F=B);break}case"initialPlacement":F=i;break}if(a!==F)return{reset:{placement:F}}}return{}}}};function rs(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function as(e){return rf.some(t=>e[t]>=0)}const yf=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...a}=ct(e,t);switch(r){case"referenceHidden":{const o=await Fn(t,{...a,elementContext:"reference"}),s=rs(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:as(s)}}}case"escaped":{const o=await Fn(t,{...a,altBoundary:!0}),s=rs(o,n.floating);return{data:{escapedOffsets:s,escaped:as(s)}}}default:return{}}}}},ol=new Set(["left","top"]);async function wf(e,t){const{placement:n,platform:r,elements:a}=e,o=await(r.isRTL==null?void 0:r.isRTL(a.floating)),s=dt(n),i=Rn(n),u=Xe(n)==="y",c=ol.has(s)?-1:1,f=o&&u?-1:1,p=ct(t,e);let{mainAxis:g,crossAxis:h,alignmentAxis:y}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return i&&typeof y=="number"&&(h=i==="end"?y*-1:y),u?{x:h*f,y:g*c}:{x:g*c,y:h*f}}const vf=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:a,y:o,placement:s,middlewareData:i}=t,u=await wf(t,e);return s===((n=i.offset)==null?void 0:n.placement)&&(r=i.arrow)!=null&&r.alignmentOffset?{}:{x:a+u.x,y:o+u.y,data:{...u,placement:s}}}}},xf=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:i={fn:b=>{let{x:v,y:k}=b;return{x:v,y:k}}},...u}=ct(e,t),c={x:n,y:r},f=await Fn(t,u),p=Xe(dt(a)),g=co(p);let h=c[g],y=c[p];if(o){const b=g==="y"?"top":"left",v=g==="y"?"bottom":"right",k=h+f[b],x=h-f[v];h=Ca(k,h,x)}if(s){const b=p==="y"?"top":"left",v=p==="y"?"bottom":"right",k=y+f[b],x=y-f[v];y=Ca(k,y,x)}const m=i.fn({...t,[g]:h,[p]:y});return{...m,data:{x:m.x-n,y:m.y-r,enabled:{[g]:o,[p]:s}}}}}},kf=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:a,rects:o,middlewareData:s}=t,{offset:i=0,mainAxis:u=!0,crossAxis:c=!0}=ct(e,t),f={x:n,y:r},p=Xe(a),g=co(p);let h=f[g],y=f[p];const m=ct(i,t),b=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(u){const x=g==="y"?"height":"width",S=o.reference[g]-o.floating[x]+b.mainAxis,E=o.reference[g]+o.reference[x]-b.mainAxis;h<S?h=S:h>E&&(h=E)}if(c){var v,k;const x=g==="y"?"width":"height",S=ol.has(dt(a)),E=o.reference[p]-o.floating[x]+(S&&((v=s.offset)==null?void 0:v[p])||0)+(S?0:b.crossAxis),R=o.reference[p]+o.reference[x]+(S?0:((k=s.offset)==null?void 0:k[p])||0)-(S?b.crossAxis:0);y<E?y=E:y>R&&(y=R)}return{[g]:h,[p]:y}}}},Sf=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:a,rects:o,platform:s,elements:i}=t,{apply:u=()=>{},...c}=ct(e,t),f=await Fn(t,c),p=dt(a),g=Rn(a),h=Xe(a)==="y",{width:y,height:m}=o.floating;let b,v;p==="top"||p==="bottom"?(b=p,v=g===(await(s.isRTL==null?void 0:s.isRTL(i.floating))?"start":"end")?"left":"right"):(v=p,b=g==="end"?"top":"bottom");const k=m-f.top-f.bottom,x=y-f.left-f.right,S=At(m-f[b],k),E=At(y-f[v],x),R=!t.middlewareData.shift;let A=S,D=E;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(D=x),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(A=k),R&&!g){const O=Re(f.left,0),L=Re(f.right,0),N=Re(f.top,0),U=Re(f.bottom,0);h?D=y-2*(O!==0||L!==0?O+L:Re(f.left,f.right)):A=m-2*(N!==0||U!==0?N+U:Re(f.top,f.bottom))}await u({...t,availableWidth:D,availableHeight:A});const C=await s.getDimensions(i.floating);return y!==C.width||m!==C.height?{reset:{rects:!0}}:{}}}};function jr(){return typeof window<"u"}function _n(e){return sl(e)?(e.nodeName||"").toLowerCase():"#document"}function _e(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function rt(e){var t;return(t=(sl(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function sl(e){return jr()?e instanceof Node||e instanceof _e(e).Node:!1}function ze(e){return jr()?e instanceof Element||e instanceof _e(e).Element:!1}function tt(e){return jr()?e instanceof HTMLElement||e instanceof _e(e).HTMLElement:!1}function os(e){return!jr()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof _e(e).ShadowRoot}const Ef=new Set(["inline","contents"]);function Kn(e){const{overflow:t,overflowX:n,overflowY:r,display:a}=qe(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Ef.has(a)}const Tf=new Set(["table","td","th"]);function Rf(e){return Tf.has(_n(e))}const _f=[":popover-open",":modal"];function Lr(e){return _f.some(t=>{try{return e.matches(t)}catch{return!1}})}const Af=["transform","translate","scale","rotate","perspective"],Cf=["transform","translate","scale","rotate","perspective","filter"],Pf=["paint","layout","strict","content"];function fo(e){const t=po(),n=ze(e)?qe(e):e;return Af.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||Cf.some(r=>(n.willChange||"").includes(r))||Pf.some(r=>(n.contain||"").includes(r))}function Of(e){let t=Ct(e);for(;tt(t)&&!xn(t);){if(fo(t))return t;if(Lr(t))return null;t=Ct(t)}return null}function po(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Nf=new Set(["html","body","#document"]);function xn(e){return Nf.has(_n(e))}function qe(e){return _e(e).getComputedStyle(e)}function $r(e){return ze(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ct(e){if(_n(e)==="html")return e;const t=e.assignedSlot||e.parentNode||os(e)&&e.host||rt(e);return os(t)?t.host:t}function il(e){const t=Ct(e);return xn(t)?e.ownerDocument?e.ownerDocument.body:e.body:tt(t)&&Kn(t)?t:il(t)}function Hn(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const a=il(e),o=a===((r=e.ownerDocument)==null?void 0:r.body),s=_e(a);if(o){const i=Oa(s);return t.concat(s,s.visualViewport||[],Kn(a)?a:[],i&&n?Hn(i):[])}return t.concat(a,Hn(a,[],n))}function Oa(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ll(e){const t=qe(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const a=tt(e),o=a?e.offsetWidth:n,s=a?e.offsetHeight:r,i=vr(n)!==o||vr(r)!==s;return i&&(n=o,r=s),{width:n,height:r,$:i}}function mo(e){return ze(e)?e:e.contextElement}function an(e){const t=mo(e);if(!tt(t))return Ze(1);const n=t.getBoundingClientRect(),{width:r,height:a,$:o}=ll(t);let s=(o?vr(n.width):n.width)/r,i=(o?vr(n.height):n.height)/a;return(!s||!Number.isFinite(s))&&(s=1),(!i||!Number.isFinite(i))&&(i=1),{x:s,y:i}}const If=Ze(0);function cl(e){const t=_e(e);return!po()||!t.visualViewport?If:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Df(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==_e(e)?!1:t}function qt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const a=e.getBoundingClientRect(),o=mo(e);let s=Ze(1);t&&(r?ze(r)&&(s=an(r)):s=an(e));const i=Df(o,n,r)?cl(o):Ze(0);let u=(a.left+i.x)/s.x,c=(a.top+i.y)/s.y,f=a.width/s.x,p=a.height/s.y;if(o){const g=_e(o),h=r&&ze(r)?_e(r):r;let y=g,m=Oa(y);for(;m&&r&&h!==y;){const b=an(m),v=m.getBoundingClientRect(),k=qe(m),x=v.left+(m.clientLeft+parseFloat(k.paddingLeft))*b.x,S=v.top+(m.clientTop+parseFloat(k.paddingTop))*b.y;u*=b.x,c*=b.y,f*=b.x,p*=b.y,u+=x,c+=S,y=_e(m),m=Oa(y)}}return kr({width:f,height:p,x:u,y:c})}function go(e,t){const n=$r(e).scrollLeft;return t?t.left+n:qt(rt(e)).left+n}function dl(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),a=r.left+t.scrollLeft-(n?0:go(e,r)),o=r.top+t.scrollTop;return{x:a,y:o}}function jf(e){let{elements:t,rect:n,offsetParent:r,strategy:a}=e;const o=a==="fixed",s=rt(r),i=t?Lr(t.floating):!1;if(r===s||i&&o)return n;let u={scrollLeft:0,scrollTop:0},c=Ze(1);const f=Ze(0),p=tt(r);if((p||!p&&!o)&&((_n(r)!=="body"||Kn(s))&&(u=$r(r)),tt(r))){const h=qt(r);c=an(r),f.x=h.x+r.clientLeft,f.y=h.y+r.clientTop}const g=s&&!p&&!o?dl(s,u,!0):Ze(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-u.scrollLeft*c.x+f.x+g.x,y:n.y*c.y-u.scrollTop*c.y+f.y+g.y}}function Lf(e){return Array.from(e.getClientRects())}function $f(e){const t=rt(e),n=$r(e),r=e.ownerDocument.body,a=Re(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Re(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+go(e);const i=-n.scrollTop;return qe(r).direction==="rtl"&&(s+=Re(t.clientWidth,r.clientWidth)-a),{width:a,height:o,x:s,y:i}}function Mf(e,t){const n=_e(e),r=rt(e),a=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,i=0,u=0;if(a){o=a.width,s=a.height;const c=po();(!c||c&&t==="fixed")&&(i=a.offsetLeft,u=a.offsetTop)}return{width:o,height:s,x:i,y:u}}const Ff=new Set(["absolute","fixed"]);function Hf(e,t){const n=qt(e,!0,t==="fixed"),r=n.top+e.clientTop,a=n.left+e.clientLeft,o=tt(e)?an(e):Ze(1),s=e.clientWidth*o.x,i=e.clientHeight*o.y,u=a*o.x,c=r*o.y;return{width:s,height:i,x:u,y:c}}function ss(e,t,n){let r;if(t==="viewport")r=Mf(e,n);else if(t==="document")r=$f(rt(e));else if(ze(t))r=Hf(t,n);else{const a=cl(e);r={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return kr(r)}function ul(e,t){const n=Ct(e);return n===t||!ze(n)||xn(n)?!1:qe(n).position==="fixed"||ul(n,t)}function Uf(e,t){const n=t.get(e);if(n)return n;let r=Hn(e,[],!1).filter(i=>ze(i)&&_n(i)!=="body"),a=null;const o=qe(e).position==="fixed";let s=o?Ct(e):e;for(;ze(s)&&!xn(s);){const i=qe(s),u=fo(s);!u&&i.position==="fixed"&&(a=null),(o?!u&&!a:!u&&i.position==="static"&&!!a&&Ff.has(a.position)||Kn(s)&&!u&&ul(e,s))?r=r.filter(f=>f!==s):a=i,s=Ct(s)}return t.set(e,r),r}function Bf(e){let{element:t,boundary:n,rootBoundary:r,strategy:a}=e;const s=[...n==="clippingAncestors"?Lr(t)?[]:Uf(t,this._c):[].concat(n),r],i=s[0],u=s.reduce((c,f)=>{const p=ss(t,f,a);return c.top=Re(p.top,c.top),c.right=At(p.right,c.right),c.bottom=At(p.bottom,c.bottom),c.left=Re(p.left,c.left),c},ss(t,i,a));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function zf(e){const{width:t,height:n}=ll(e);return{width:t,height:n}}function qf(e,t,n){const r=tt(t),a=rt(t),o=n==="fixed",s=qt(e,!0,o,t);let i={scrollLeft:0,scrollTop:0};const u=Ze(0);function c(){u.x=go(a)}if(r||!r&&!o)if((_n(t)!=="body"||Kn(a))&&(i=$r(t)),r){const h=qt(t,!0,o,t);u.x=h.x+t.clientLeft,u.y=h.y+t.clientTop}else a&&c();o&&!r&&a&&c();const f=a&&!r&&!o?dl(a,i):Ze(0),p=s.left+i.scrollLeft-u.x-f.x,g=s.top+i.scrollTop-u.y-f.y;return{x:p,y:g,width:s.width,height:s.height}}function oa(e){return qe(e).position==="static"}function is(e,t){if(!tt(e)||qe(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return rt(e)===n&&(n=n.ownerDocument.body),n}function hl(e,t){const n=_e(e);if(Lr(e))return n;if(!tt(e)){let a=Ct(e);for(;a&&!xn(a);){if(ze(a)&&!oa(a))return a;a=Ct(a)}return n}let r=is(e,t);for(;r&&Rf(r)&&oa(r);)r=is(r,t);return r&&xn(r)&&oa(r)&&!fo(r)?n:r||Of(e)||n}const Gf=async function(e){const t=this.getOffsetParent||hl,n=this.getDimensions,r=await n(e.floating);return{reference:qf(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Wf(e){return qe(e).direction==="rtl"}const Vf={convertOffsetParentRelativeRectToViewportRelativeRect:jf,getDocumentElement:rt,getClippingRect:Bf,getOffsetParent:hl,getElementRects:Gf,getClientRects:Lf,getDimensions:zf,getScale:an,isElement:ze,isRTL:Wf};function fl(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Jf(e,t){let n=null,r;const a=rt(e);function o(){var i;clearTimeout(r),(i=n)==null||i.disconnect(),n=null}function s(i,u){i===void 0&&(i=!1),u===void 0&&(u=1),o();const c=e.getBoundingClientRect(),{left:f,top:p,width:g,height:h}=c;if(i||t(),!g||!h)return;const y=rr(p),m=rr(a.clientWidth-(f+g)),b=rr(a.clientHeight-(p+h)),v=rr(f),x={rootMargin:-y+"px "+-m+"px "+-b+"px "+-v+"px",threshold:Re(0,At(1,u))||1};let S=!0;function E(R){const A=R[0].intersectionRatio;if(A!==u){if(!S)return s();A?s(!1,A):r=setTimeout(()=>{s(!1,1e-7)},1e3)}A===1&&!fl(c,e.getBoundingClientRect())&&s(),S=!1}try{n=new IntersectionObserver(E,{...x,root:a.ownerDocument})}catch{n=new IntersectionObserver(E,x)}n.observe(e)}return s(!0),o}function Kf(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:a=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,c=mo(e),f=a||o?[...c?Hn(c):[],...Hn(t)]:[];f.forEach(v=>{a&&v.addEventListener("scroll",n,{passive:!0}),o&&v.addEventListener("resize",n)});const p=c&&i?Jf(c,n):null;let g=-1,h=null;s&&(h=new ResizeObserver(v=>{let[k]=v;k&&k.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=h)==null||x.observe(t)})),n()}),c&&!u&&h.observe(c),h.observe(t));let y,m=u?qt(e):null;u&&b();function b(){const v=qt(e);m&&!fl(m,v)&&n(),m=v,y=requestAnimationFrame(b)}return n(),()=>{var v;f.forEach(k=>{a&&k.removeEventListener("scroll",n),o&&k.removeEventListener("resize",n)}),p==null||p(),(v=h)==null||v.disconnect(),h=null,u&&cancelAnimationFrame(y)}}const Yf=vf,Qf=xf,Xf=bf,Zf=Sf,ep=yf,ls=gf,tp=kf,np=(e,t,n)=>{const r=new Map,a={platform:Vf,...n},o={...a.platform,_c:r};return mf(e,t,{...a,platform:o})};var rp=typeof document<"u",ap=function(){},mr=rp?d.useLayoutEffect:ap;function Sr(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,a;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Sr(e[r],t[r]))return!1;return!0}if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,a[r]))return!1;for(r=n;r--!==0;){const o=a[r];if(!(o==="_owner"&&e.$$typeof)&&!Sr(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function pl(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function cs(e,t){const n=pl(e);return Math.round(t*n)/n}function sa(e){const t=d.useRef(e);return mr(()=>{t.current=e}),t}function op(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:a,elements:{reference:o,floating:s}={},transform:i=!0,whileElementsMounted:u,open:c}=e,[f,p]=d.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[g,h]=d.useState(r);Sr(g,r)||h(r);const[y,m]=d.useState(null),[b,v]=d.useState(null),k=d.useCallback(j=>{j!==R.current&&(R.current=j,m(j))},[]),x=d.useCallback(j=>{j!==A.current&&(A.current=j,v(j))},[]),S=o||y,E=s||b,R=d.useRef(null),A=d.useRef(null),D=d.useRef(f),C=u!=null,O=sa(u),L=sa(a),N=sa(c),U=d.useCallback(()=>{if(!R.current||!A.current)return;const j={placement:t,strategy:n,middleware:g};L.current&&(j.platform=L.current),np(R.current,A.current,j).then(T=>{const M={...T,isPositioned:N.current!==!1};P.current&&!Sr(D.current,M)&&(D.current=M,Cr.flushSync(()=>{p(M)}))})},[g,t,n,L,N]);mr(()=>{c===!1&&D.current.isPositioned&&(D.current.isPositioned=!1,p(j=>({...j,isPositioned:!1})))},[c]);const P=d.useRef(!1);mr(()=>(P.current=!0,()=>{P.current=!1}),[]),mr(()=>{if(S&&(R.current=S),E&&(A.current=E),S&&E){if(O.current)return O.current(S,E,U);U()}},[S,E,U,O,C]);const q=d.useMemo(()=>({reference:R,floating:A,setReference:k,setFloating:x}),[k,x]),F=d.useMemo(()=>({reference:S,floating:E}),[S,E]),B=d.useMemo(()=>{const j={position:n,left:0,top:0};if(!F.floating)return j;const T=cs(F.floating,f.x),M=cs(F.floating,f.y);return i?{...j,transform:"translate("+T+"px, "+M+"px)",...pl(F.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:T,top:M}},[n,i,F.floating,f.x,f.y]);return d.useMemo(()=>({...f,update:U,refs:q,elements:F,floatingStyles:B}),[f,U,q,F,B])}const sp=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:a}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?ls({element:r.current,padding:a}).fn(n):{}:r?ls({element:r,padding:a}).fn(n):{}}}},ip=(e,t)=>({...Yf(e),options:[e,t]}),lp=(e,t)=>({...Qf(e),options:[e,t]}),cp=(e,t)=>({...tp(e),options:[e,t]}),dp=(e,t)=>({...Xf(e),options:[e,t]}),up=(e,t)=>({...Zf(e),options:[e,t]}),hp=(e,t)=>({...ep(e),options:[e,t]}),fp=(e,t)=>({...sp(e),options:[e,t]});var pp="Arrow",ml=d.forwardRef((e,t)=>{const{children:n,width:r=10,height:a=5,...o}=e;return l.jsx(oe.svg,{...o,ref:t,width:r,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:l.jsx("polygon",{points:"0,0 30,0 15,10"})})});ml.displayName=pp;var mp=ml;function gp(e){const[t,n]=d.useState(void 0);return et(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const o=a[0];let s,i;if("borderBoxSize"in o){const u=o.borderBoxSize,c=Array.isArray(u)?u[0]:u;s=c.inlineSize,i=c.blockSize}else s=e.offsetWidth,i=e.offsetHeight;n({width:s,height:i})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var gl="Popper",[bl,yl]=En(gl),[iw,wl]=bl(gl),vl="PopperAnchor",xl=d.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...a}=e,o=wl(vl,n),s=d.useRef(null),i=de(t,s);return d.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:l.jsx(oe.div,{...a,ref:i})});xl.displayName=vl;var bo="PopperContent",[bp,yp]=bl(bo),kl=d.forwardRef((e,t)=>{var J,Ee,ge,We,Ve,ut;const{__scopePopper:n,side:r="bottom",sideOffset:a=0,align:o="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:f=0,sticky:p="partial",hideWhenDetached:g=!1,updatePositionStrategy:h="optimized",onPlaced:y,...m}=e,b=wl(bo,n),[v,k]=d.useState(null),x=de(t,Te=>k(Te)),[S,E]=d.useState(null),R=gp(S),A=(R==null?void 0:R.width)??0,D=(R==null?void 0:R.height)??0,C=r+(o!=="center"?"-"+o:""),O=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},L=Array.isArray(c)?c:[c],N=L.length>0,U={padding:O,boundary:L.filter(vp),altBoundary:N},{refs:P,floatingStyles:q,placement:F,isPositioned:B,middlewareData:j}=op({strategy:"fixed",placement:C,whileElementsMounted:(...Te)=>Kf(...Te,{animationFrame:h==="always"}),elements:{reference:b.anchor},middleware:[ip({mainAxis:a+D,alignmentAxis:s}),u&&lp({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?cp():void 0,...U}),u&&dp({...U}),up({...U,apply:({elements:Te,rects:Pt,availableWidth:Kr,availableHeight:Qn})=>{const{width:Yr,height:Cn}=Pt.reference,Kt=Te.floating.style;Kt.setProperty("--radix-popper-available-width",`${Kr}px`),Kt.setProperty("--radix-popper-available-height",`${Qn}px`),Kt.setProperty("--radix-popper-anchor-width",`${Yr}px`),Kt.setProperty("--radix-popper-anchor-height",`${Cn}px`)}}),S&&fp({element:S,padding:i}),xp({arrowWidth:A,arrowHeight:D}),g&&hp({strategy:"referenceHidden",...U})]}),[T,M]=Tl(F),ee=pe(y);et(()=>{B&&(ee==null||ee())},[B,ee]);const G=(J=j.arrow)==null?void 0:J.x,W=(Ee=j.arrow)==null?void 0:Ee.y,V=((ge=j.arrow)==null?void 0:ge.centerOffset)!==0,[ie,ye]=d.useState();return et(()=>{v&&ye(window.getComputedStyle(v).zIndex)},[v]),l.jsx("div",{ref:P.setFloating,"data-radix-popper-content-wrapper":"",style:{...q,transform:B?q.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ie,"--radix-popper-transform-origin":[(We=j.transformOrigin)==null?void 0:We.x,(Ve=j.transformOrigin)==null?void 0:Ve.y].join(" "),...((ut=j.hide)==null?void 0:ut.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:l.jsx(bp,{scope:n,placedSide:T,onArrowChange:E,arrowX:G,arrowY:W,shouldHideArrow:V,children:l.jsx(oe.div,{"data-side":T,"data-align":M,...m,ref:x,style:{...m.style,animation:B?void 0:"none"}})})})});kl.displayName=bo;var Sl="PopperArrow",wp={top:"bottom",right:"left",bottom:"top",left:"right"},El=d.forwardRef(function(t,n){const{__scopePopper:r,...a}=t,o=yp(Sl,r),s=wp[o.placedSide];return l.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:l.jsx(mp,{...a,ref:n,style:{...a.style,display:"block"}})})});El.displayName=Sl;function vp(e){return e!==null}var xp=e=>({name:"transformOrigin",options:e,fn(t){var b,v,k;const{placement:n,rects:r,middlewareData:a}=t,s=((b=a.arrow)==null?void 0:b.centerOffset)!==0,i=s?0:e.arrowWidth,u=s?0:e.arrowHeight,[c,f]=Tl(n),p={start:"0%",center:"50%",end:"100%"}[f],g=(((v=a.arrow)==null?void 0:v.x)??0)+i/2,h=(((k=a.arrow)==null?void 0:k.y)??0)+u/2;let y="",m="";return c==="bottom"?(y=s?p:`${g}px`,m=`${-u}px`):c==="top"?(y=s?p:`${g}px`,m=`${r.floating.height+u}px`):c==="right"?(y=`${-u}px`,m=s?p:`${h}px`):c==="left"&&(y=`${r.floating.width+u}px`,m=s?p:`${h}px`),{data:{x:y,y:m}}}});function Tl(e){const[t,n="center"]=e.split("-");return[t,n]}var kp=xl,Sp=kl,Ep=El,[Mr,lw]=En("Tooltip",[yl]),yo=yl(),Rl="TooltipProvider",Tp=700,ds="tooltip.open",[Rp,_l]=Mr(Rl),Al=e=>{const{__scopeTooltip:t,delayDuration:n=Tp,skipDelayDuration:r=300,disableHoverableContent:a=!1,children:o}=e,s=d.useRef(!0),i=d.useRef(!1),u=d.useRef(0);return d.useEffect(()=>{const c=u.current;return()=>window.clearTimeout(c)},[]),l.jsx(Rp,{scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:d.useCallback(()=>{window.clearTimeout(u.current),s.current=!1},[]),onClose:d.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:i,onPointerInTransitChange:d.useCallback(c=>{i.current=c},[]),disableHoverableContent:a,children:o})};Al.displayName=Rl;var Cl="Tooltip",[cw,Fr]=Mr(Cl),Na="TooltipTrigger",_p=d.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,a=Fr(Na,n),o=_l(Na,n),s=yo(n),i=d.useRef(null),u=de(t,i,a.onTriggerChange),c=d.useRef(!1),f=d.useRef(!1),p=d.useCallback(()=>c.current=!1,[]);return d.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),l.jsx(kp,{asChild:!0,...s,children:l.jsx(oe.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...r,ref:u,onPointerMove:Z(e.onPointerMove,g=>{g.pointerType!=="touch"&&!f.current&&!o.isPointerInTransitRef.current&&(a.onTriggerEnter(),f.current=!0)}),onPointerLeave:Z(e.onPointerLeave,()=>{a.onTriggerLeave(),f.current=!1}),onPointerDown:Z(e.onPointerDown,()=>{a.open&&a.onClose(),c.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:Z(e.onFocus,()=>{c.current||a.onOpen()}),onBlur:Z(e.onBlur,a.onClose),onClick:Z(e.onClick,a.onClose)})})});_p.displayName=Na;var Ap="TooltipPortal",[dw,Cp]=Mr(Ap,{forceMount:void 0}),kn="TooltipContent",Pl=d.forwardRef((e,t)=>{const n=Cp(kn,e.__scopeTooltip),{forceMount:r=n.forceMount,side:a="top",...o}=e,s=Fr(kn,e.__scopeTooltip);return l.jsx(nt,{present:r||s.open,children:s.disableHoverableContent?l.jsx(Ol,{side:a,...o,ref:t}):l.jsx(Pp,{side:a,...o,ref:t})})}),Pp=d.forwardRef((e,t)=>{const n=Fr(kn,e.__scopeTooltip),r=_l(kn,e.__scopeTooltip),a=d.useRef(null),o=de(t,a),[s,i]=d.useState(null),{trigger:u,onClose:c}=n,f=a.current,{onPointerInTransitChange:p}=r,g=d.useCallback(()=>{i(null),p(!1)},[p]),h=d.useCallback((y,m)=>{const b=y.currentTarget,v={x:y.clientX,y:y.clientY},k=jp(v,b.getBoundingClientRect()),x=Lp(v,k),S=$p(m.getBoundingClientRect()),E=Fp([...x,...S]);i(E),p(!0)},[p]);return d.useEffect(()=>()=>g(),[g]),d.useEffect(()=>{if(u&&f){const y=b=>h(b,f),m=b=>h(b,u);return u.addEventListener("pointerleave",y),f.addEventListener("pointerleave",m),()=>{u.removeEventListener("pointerleave",y),f.removeEventListener("pointerleave",m)}}},[u,f,h,g]),d.useEffect(()=>{if(s){const y=m=>{const b=m.target,v={x:m.clientX,y:m.clientY},k=(u==null?void 0:u.contains(b))||(f==null?void 0:f.contains(b)),x=!Mp(v,s);k?g():x&&(g(),c())};return document.addEventListener("pointermove",y),()=>document.removeEventListener("pointermove",y)}},[u,f,s,c,g]),l.jsx(Ol,{...e,ref:o})}),[Op,Np]=Mr(Cl,{isInside:!1}),Ip=Ud("TooltipContent"),Ol=d.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":a,onEscapeKeyDown:o,onPointerDownOutside:s,...i}=e,u=Fr(kn,n),c=yo(n),{onClose:f}=u;return d.useEffect(()=>(document.addEventListener(ds,f),()=>document.removeEventListener(ds,f)),[f]),d.useEffect(()=>{if(u.trigger){const p=g=>{const h=g.target;h!=null&&h.contains(u.trigger)&&f()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[u.trigger,f]),l.jsx(Or,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:p=>p.preventDefault(),onDismiss:f,children:l.jsxs(Sp,{"data-state":u.stateAttribute,...c,...i,ref:t,style:{...i.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[l.jsx(Ip,{children:r}),l.jsx(Op,{scope:n,isInside:!0,children:l.jsx(uu,{id:u.contentId,role:"tooltip",children:a||r})})]})})});Pl.displayName=kn;var Nl="TooltipArrow",Dp=d.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,a=yo(n);return Np(Nl,n).isInside?null:l.jsx(Ep,{...a,...r,ref:t})});Dp.displayName=Nl;function jp(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),a=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x);switch(Math.min(n,r,a,o)){case o:return"left";case a:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function Lp(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function $p(e){const{top:t,right:n,bottom:r,left:a}=e;return[{x:a,y:t},{x:n,y:t},{x:n,y:r},{x:a,y:r}]}function Mp(e,t){const{x:n,y:r}=e;let a=!1;for(let o=0,s=t.length-1;o<t.length;s=o++){const i=t[o],u=t[s],c=i.x,f=i.y,p=u.x,g=u.y;f>r!=g>r&&n<(p-c)*(r-f)/(g-f)+c&&(a=!a)}return a}function Fp(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),Hp(t)}function Hp(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const a=e[r];for(;t.length>=2;){const o=t[t.length-1],s=t[t.length-2];if((o.x-s.x)*(a.y-s.y)>=(o.y-s.y)*(a.x-s.x))t.pop();else break}t.push(a)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const a=e[r];for(;n.length>=2;){const o=n[n.length-1],s=n[n.length-2];if((o.x-s.x)*(a.y-s.y)>=(o.y-s.y)*(a.x-s.x))n.pop();else break}n.push(a)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var Up=Al,Il=Pl;const Bp=Up,zp=d.forwardRef(({className:e,sideOffset:t=4,...n},r)=>l.jsx(Il,{ref:r,sideOffset:t,className:re("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));zp.displayName=Il.displayName;var Yn=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Gt=typeof window>"u"||"Deno"in globalThis;function Se(){}function qp(e,t){return typeof e=="function"?e(t):e}function Ia(e){return typeof e=="number"&&e>=0&&e!==1/0}function Dl(e,t){return Math.max(e+(t||0)-Date.now(),0)}function _t(e,t){return typeof e=="function"?e(t):e}function Ne(e,t){return typeof e=="function"?e(t):e}function us(e,t){const{type:n="all",exact:r,fetchStatus:a,predicate:o,queryKey:s,stale:i}=e;if(s){if(r){if(t.queryHash!==wo(s,t.options))return!1}else if(!Bn(t.queryKey,s))return!1}if(n!=="all"){const u=t.isActive();if(n==="active"&&!u||n==="inactive"&&u)return!1}return!(typeof i=="boolean"&&t.isStale()!==i||a&&a!==t.state.fetchStatus||o&&!o(t))}function hs(e,t){const{exact:n,status:r,predicate:a,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(Un(t.options.mutationKey)!==Un(o))return!1}else if(!Bn(t.options.mutationKey,o))return!1}return!(r&&t.state.status!==r||a&&!a(t))}function wo(e,t){return((t==null?void 0:t.queryKeyHashFn)||Un)(e)}function Un(e){return JSON.stringify(e,(t,n)=>ja(n)?Object.keys(n).sort().reduce((r,a)=>(r[a]=n[a],r),{}):n)}function Bn(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Bn(e[n],t[n])):!1}function jl(e,t){if(e===t)return e;const n=fs(e)&&fs(t);if(n||ja(e)&&ja(t)){const r=n?e:Object.keys(e),a=r.length,o=n?t:Object.keys(t),s=o.length,i=n?[]:{},u=new Set(r);let c=0;for(let f=0;f<s;f++){const p=n?f:o[f];(!n&&u.has(p)||n)&&e[p]===void 0&&t[p]===void 0?(i[p]=void 0,c++):(i[p]=jl(e[p],t[p]),i[p]===e[p]&&e[p]!==void 0&&c++)}return a===s&&c===a?e:i}return t}function Da(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function fs(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function ja(e){if(!ps(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!ps(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function ps(e){return Object.prototype.toString.call(e)==="[object Object]"}function Gp(e){return new Promise(t=>{setTimeout(t,e)})}function La(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?jl(e,t):t}function Wp(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function Vp(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var vo=Symbol();function Ll(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===vo?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function Jp(e,t){return typeof e=="function"?e(...t):!!e}var Dt,wt,cn,Zs,Kp=(Zs=class extends Yn{constructor(){super();$(this,Dt);$(this,wt);$(this,cn);I(this,cn,t=>{if(!Gt&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){w(this,wt)||this.setEventListener(w(this,cn))}onUnsubscribe(){var t;this.hasListeners()||((t=w(this,wt))==null||t.call(this),I(this,wt,void 0))}setEventListener(t){var n;I(this,cn,t),(n=w(this,wt))==null||n.call(this),I(this,wt,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){w(this,Dt)!==t&&(I(this,Dt,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof w(this,Dt)=="boolean"?w(this,Dt):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Dt=new WeakMap,wt=new WeakMap,cn=new WeakMap,Zs),xo=new Kp,dn,vt,un,ei,Yp=(ei=class extends Yn{constructor(){super();$(this,dn,!0);$(this,vt);$(this,un);I(this,un,t=>{if(!Gt&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){w(this,vt)||this.setEventListener(w(this,un))}onUnsubscribe(){var t;this.hasListeners()||((t=w(this,vt))==null||t.call(this),I(this,vt,void 0))}setEventListener(t){var n;I(this,un,t),(n=w(this,vt))==null||n.call(this),I(this,vt,t(this.setOnline.bind(this)))}setOnline(t){w(this,dn)!==t&&(I(this,dn,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return w(this,dn)}},dn=new WeakMap,vt=new WeakMap,un=new WeakMap,ei),Er=new Yp;function $a(){let e,t;const n=new Promise((a,o)=>{e=a,t=o});n.status="pending",n.catch(()=>{});function r(a){Object.assign(n,a),delete n.resolve,delete n.reject}return n.resolve=a=>{r({status:"fulfilled",value:a}),e(a)},n.reject=a=>{r({status:"rejected",reason:a}),t(a)},n}function Qp(e){return Math.min(1e3*2**e,3e4)}function $l(e){return(e??"online")==="online"?Er.isOnline():!0}var Ml=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function ia(e){return e instanceof Ml}function Fl(e){let t=!1,n=0,r=!1,a;const o=$a(),s=m=>{var b;r||(g(new Ml(m)),(b=e.abort)==null||b.call(e))},i=()=>{t=!0},u=()=>{t=!1},c=()=>xo.isFocused()&&(e.networkMode==="always"||Er.isOnline())&&e.canRun(),f=()=>$l(e.networkMode)&&e.canRun(),p=m=>{var b;r||(r=!0,(b=e.onSuccess)==null||b.call(e,m),a==null||a(),o.resolve(m))},g=m=>{var b;r||(r=!0,(b=e.onError)==null||b.call(e,m),a==null||a(),o.reject(m))},h=()=>new Promise(m=>{var b;a=v=>{(r||c())&&m(v)},(b=e.onPause)==null||b.call(e)}).then(()=>{var m;a=void 0,r||(m=e.onContinue)==null||m.call(e)}),y=()=>{if(r)return;let m;const b=n===0?e.initialPromise:void 0;try{m=b??e.fn()}catch(v){m=Promise.reject(v)}Promise.resolve(m).then(p).catch(v=>{var R;if(r)return;const k=e.retry??(Gt?0:3),x=e.retryDelay??Qp,S=typeof x=="function"?x(n,v):x,E=k===!0||typeof k=="number"&&n<k||typeof k=="function"&&k(n,v);if(t||!E){g(v);return}n++,(R=e.onFail)==null||R.call(e,n,v),Gp(S).then(()=>c()?void 0:h()).then(()=>{t?g(v):y()})})};return{promise:o,cancel:s,continue:()=>(a==null||a(),o),cancelRetry:i,continueRetry:u,canStart:f,start:()=>(f()?y():h().then(y),o)}}var Xp=e=>setTimeout(e,0);function Zp(){let e=[],t=0,n=i=>{i()},r=i=>{i()},a=Xp;const o=i=>{t?e.push(i):a(()=>{n(i)})},s=()=>{const i=e;e=[],i.length&&a(()=>{r(()=>{i.forEach(u=>{n(u)})})})};return{batch:i=>{let u;t++;try{u=i()}finally{t--,t||s()}return u},batchCalls:i=>(...u)=>{o(()=>{i(...u)})},schedule:o,setNotifyFunction:i=>{n=i},setBatchNotifyFunction:i=>{r=i},setScheduler:i=>{a=i}}}var fe=Zp(),jt,ti,Hl=(ti=class{constructor(){$(this,jt)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Ia(this.gcTime)&&I(this,jt,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Gt?1/0:5*60*1e3))}clearGcTimeout(){w(this,jt)&&(clearTimeout(w(this,jt)),I(this,jt,void 0))}},jt=new WeakMap,ti),hn,Lt,Pe,$t,be,qn,Mt,He,it,ni,em=(ni=class extends Hl{constructor(t){super();$(this,He);$(this,hn);$(this,Lt);$(this,Pe);$(this,$t);$(this,be);$(this,qn);$(this,Mt);I(this,Mt,!1),I(this,qn,t.defaultOptions),this.setOptions(t.options),this.observers=[],I(this,$t,t.client),I(this,Pe,w(this,$t).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,I(this,hn,tm(this.options)),this.state=t.state??w(this,hn),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=w(this,be))==null?void 0:t.promise}setOptions(t){this.options={...w(this,qn),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&w(this,Pe).remove(this)}setData(t,n){const r=La(this.state.data,t,this.options);return K(this,He,it).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){K(this,He,it).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,a;const n=(r=w(this,be))==null?void 0:r.promise;return(a=w(this,be))==null||a.cancel(t),n?n.then(Se).catch(Se):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(w(this,hn))}isActive(){return this.observers.some(t=>Ne(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===vo||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>_t(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!Dl(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=w(this,be))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=w(this,be))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),w(this,Pe).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(w(this,be)&&(w(this,Mt)?w(this,be).cancel({revert:!0}):w(this,be).cancelRetry()),this.scheduleGc()),w(this,Pe).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||K(this,He,it).call(this,{type:"invalidate"})}fetch(t,n){var c,f,p;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(w(this,be))return w(this,be).continueRetry(),w(this,be).promise}if(t&&this.setOptions(t),!this.options.queryFn){const g=this.observers.find(h=>h.options.queryFn);g&&this.setOptions(g.options)}const r=new AbortController,a=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(I(this,Mt,!0),r.signal)})},o=()=>{const g=Ll(this.options,n),y=(()=>{const m={client:w(this,$t),queryKey:this.queryKey,meta:this.meta};return a(m),m})();return I(this,Mt,!1),this.options.persister?this.options.persister(g,y,this):g(y)},i=(()=>{const g={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:w(this,$t),state:this.state,fetchFn:o};return a(g),g})();(c=this.options.behavior)==null||c.onFetch(i,this),I(this,Lt,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((f=i.fetchOptions)==null?void 0:f.meta))&&K(this,He,it).call(this,{type:"fetch",meta:(p=i.fetchOptions)==null?void 0:p.meta});const u=g=>{var h,y,m,b;ia(g)&&g.silent||K(this,He,it).call(this,{type:"error",error:g}),ia(g)||((y=(h=w(this,Pe).config).onError)==null||y.call(h,g,this),(b=(m=w(this,Pe).config).onSettled)==null||b.call(m,this.state.data,g,this)),this.scheduleGc()};return I(this,be,Fl({initialPromise:n==null?void 0:n.initialPromise,fn:i.fetchFn,abort:r.abort.bind(r),onSuccess:g=>{var h,y,m,b;if(g===void 0){u(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(g)}catch(v){u(v);return}(y=(h=w(this,Pe).config).onSuccess)==null||y.call(h,g,this),(b=(m=w(this,Pe).config).onSettled)==null||b.call(m,g,this.state.error,this),this.scheduleGc()},onError:u,onFail:(g,h)=>{K(this,He,it).call(this,{type:"failed",failureCount:g,error:h})},onPause:()=>{K(this,He,it).call(this,{type:"pause"})},onContinue:()=>{K(this,He,it).call(this,{type:"continue"})},retry:i.options.retry,retryDelay:i.options.retryDelay,networkMode:i.options.networkMode,canRun:()=>!0})),w(this,be).start()}},hn=new WeakMap,Lt=new WeakMap,Pe=new WeakMap,$t=new WeakMap,be=new WeakMap,qn=new WeakMap,Mt=new WeakMap,He=new WeakSet,it=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...Ul(r.data,this.options),fetchMeta:t.meta??null};case"success":return I(this,Lt,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const a=t.error;return ia(a)&&a.revert&&w(this,Lt)?{...w(this,Lt),fetchStatus:"idle"}:{...r,error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),fe.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),w(this,Pe).notify({query:this,type:"updated",action:t})})},ni);function Ul(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:$l(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function tm(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Je,ri,nm=(ri=class extends Yn{constructor(t={}){super();$(this,Je);this.config=t,I(this,Je,new Map)}build(t,n,r){const a=n.queryKey,o=n.queryHash??wo(a,n);let s=this.get(o);return s||(s=new em({client:t,queryKey:a,queryHash:o,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(a)}),this.add(s)),s}add(t){w(this,Je).has(t.queryHash)||(w(this,Je).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=w(this,Je).get(t.queryHash);n&&(t.destroy(),n===t&&w(this,Je).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){fe.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return w(this,Je).get(t)}getAll(){return[...w(this,Je).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>us(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>us(t,r)):n}notify(t){fe.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){fe.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){fe.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Je=new WeakMap,ri),Ke,we,Ft,Ye,bt,ai,rm=(ai=class extends Hl{constructor(t){super();$(this,Ye);$(this,Ke);$(this,we);$(this,Ft);this.mutationId=t.mutationId,I(this,we,t.mutationCache),I(this,Ke,[]),this.state=t.state||am(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){w(this,Ke).includes(t)||(w(this,Ke).push(t),this.clearGcTimeout(),w(this,we).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){I(this,Ke,w(this,Ke).filter(n=>n!==t)),this.scheduleGc(),w(this,we).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){w(this,Ke).length||(this.state.status==="pending"?this.scheduleGc():w(this,we).remove(this))}continue(){var t;return((t=w(this,Ft))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,s,i,u,c,f,p,g,h,y,m,b,v,k,x,S,E,R,A,D;const n=()=>{K(this,Ye,bt).call(this,{type:"continue"})};I(this,Ft,Fl({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(C,O)=>{K(this,Ye,bt).call(this,{type:"failed",failureCount:C,error:O})},onPause:()=>{K(this,Ye,bt).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>w(this,we).canRun(this)}));const r=this.state.status==="pending",a=!w(this,Ft).canStart();try{if(r)n();else{K(this,Ye,bt).call(this,{type:"pending",variables:t,isPaused:a}),await((s=(o=w(this,we).config).onMutate)==null?void 0:s.call(o,t,this));const O=await((u=(i=this.options).onMutate)==null?void 0:u.call(i,t));O!==this.state.context&&K(this,Ye,bt).call(this,{type:"pending",context:O,variables:t,isPaused:a})}const C=await w(this,Ft).start();return await((f=(c=w(this,we).config).onSuccess)==null?void 0:f.call(c,C,t,this.state.context,this)),await((g=(p=this.options).onSuccess)==null?void 0:g.call(p,C,t,this.state.context)),await((y=(h=w(this,we).config).onSettled)==null?void 0:y.call(h,C,null,this.state.variables,this.state.context,this)),await((b=(m=this.options).onSettled)==null?void 0:b.call(m,C,null,t,this.state.context)),K(this,Ye,bt).call(this,{type:"success",data:C}),C}catch(C){try{throw await((k=(v=w(this,we).config).onError)==null?void 0:k.call(v,C,t,this.state.context,this)),await((S=(x=this.options).onError)==null?void 0:S.call(x,C,t,this.state.context)),await((R=(E=w(this,we).config).onSettled)==null?void 0:R.call(E,void 0,C,this.state.variables,this.state.context,this)),await((D=(A=this.options).onSettled)==null?void 0:D.call(A,void 0,C,t,this.state.context)),C}finally{K(this,Ye,bt).call(this,{type:"error",error:C})}}finally{w(this,we).runNext(this)}}},Ke=new WeakMap,we=new WeakMap,Ft=new WeakMap,Ye=new WeakSet,bt=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),fe.batch(()=>{w(this,Ke).forEach(r=>{r.onMutationUpdate(t)}),w(this,we).notify({mutation:this,type:"updated",action:t})})},ai);function am(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var lt,Ue,Gn,oi,om=(oi=class extends Yn{constructor(t={}){super();$(this,lt);$(this,Ue);$(this,Gn);this.config=t,I(this,lt,new Set),I(this,Ue,new Map),I(this,Gn,0)}build(t,n,r){const a=new rm({mutationCache:this,mutationId:++Zn(this,Gn)._,options:t.defaultMutationOptions(n),state:r});return this.add(a),a}add(t){w(this,lt).add(t);const n=ar(t);if(typeof n=="string"){const r=w(this,Ue).get(n);r?r.push(t):w(this,Ue).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(w(this,lt).delete(t)){const n=ar(t);if(typeof n=="string"){const r=w(this,Ue).get(n);if(r)if(r.length>1){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}else r[0]===t&&w(this,Ue).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=ar(t);if(typeof n=="string"){const r=w(this,Ue).get(n),a=r==null?void 0:r.find(o=>o.state.status==="pending");return!a||a===t}else return!0}runNext(t){var r;const n=ar(t);if(typeof n=="string"){const a=(r=w(this,Ue).get(n))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(a==null?void 0:a.continue())??Promise.resolve()}else return Promise.resolve()}clear(){fe.batch(()=>{w(this,lt).forEach(t=>{this.notify({type:"removed",mutation:t})}),w(this,lt).clear(),w(this,Ue).clear()})}getAll(){return Array.from(w(this,lt))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>hs(n,r))}findAll(t={}){return this.getAll().filter(n=>hs(t,n))}notify(t){fe.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return fe.batch(()=>Promise.all(t.map(n=>n.continue().catch(Se))))}},lt=new WeakMap,Ue=new WeakMap,Gn=new WeakMap,oi);function ar(e){var t;return(t=e.options.scope)==null?void 0:t.id}function ms(e){return{onFetch:(t,n)=>{var f,p,g,h,y;const r=t.options,a=(g=(p=(f=t.fetchOptions)==null?void 0:f.meta)==null?void 0:p.fetchMore)==null?void 0:g.direction,o=((h=t.state.data)==null?void 0:h.pages)||[],s=((y=t.state.data)==null?void 0:y.pageParams)||[];let i={pages:[],pageParams:[]},u=0;const c=async()=>{let m=!1;const b=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(t.signal.aborted?m=!0:t.signal.addEventListener("abort",()=>{m=!0}),t.signal)})},v=Ll(t.options,t.fetchOptions),k=async(x,S,E)=>{if(m)return Promise.reject();if(S==null&&x.pages.length)return Promise.resolve(x);const A=(()=>{const L={client:t.client,queryKey:t.queryKey,pageParam:S,direction:E?"backward":"forward",meta:t.options.meta};return b(L),L})(),D=await v(A),{maxPages:C}=t.options,O=E?Vp:Wp;return{pages:O(x.pages,D,C),pageParams:O(x.pageParams,S,C)}};if(a&&o.length){const x=a==="backward",S=x?sm:gs,E={pages:o,pageParams:s},R=S(r,E);i=await k(E,R,x)}else{const x=e??o.length;do{const S=u===0?s[0]??r.initialPageParam:gs(r,i);if(u>0&&S==null)break;i=await k(i,S),u++}while(u<x)}return i};t.options.persister?t.fetchFn=()=>{var m,b;return(b=(m=t.options).persister)==null?void 0:b.call(m,c,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=c}}}function gs(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function sm(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var le,xt,kt,fn,pn,St,mn,gn,si,im=(si=class{constructor(e={}){$(this,le);$(this,xt);$(this,kt);$(this,fn);$(this,pn);$(this,St);$(this,mn);$(this,gn);I(this,le,e.queryCache||new nm),I(this,xt,e.mutationCache||new om),I(this,kt,e.defaultOptions||{}),I(this,fn,new Map),I(this,pn,new Map),I(this,St,0)}mount(){Zn(this,St)._++,w(this,St)===1&&(I(this,mn,xo.subscribe(async e=>{e&&(await this.resumePausedMutations(),w(this,le).onFocus())})),I(this,gn,Er.subscribe(async e=>{e&&(await this.resumePausedMutations(),w(this,le).onOnline())})))}unmount(){var e,t;Zn(this,St)._--,w(this,St)===0&&((e=w(this,mn))==null||e.call(this),I(this,mn,void 0),(t=w(this,gn))==null||t.call(this),I(this,gn,void 0))}isFetching(e){return w(this,le).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return w(this,xt).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=w(this,le).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=w(this,le).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(_t(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return w(this,le).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),a=w(this,le).get(r.queryHash),o=a==null?void 0:a.state.data,s=qp(t,o);if(s!==void 0)return w(this,le).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return fe.batch(()=>w(this,le).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=w(this,le).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=w(this,le);fe.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=w(this,le);return fe.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=fe.batch(()=>w(this,le).findAll(e).map(a=>a.cancel(n)));return Promise.all(r).then(Se).catch(Se)}invalidateQueries(e,t={}){return fe.batch(()=>(w(this,le).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=fe.batch(()=>w(this,le).findAll(e).filter(a=>!a.isDisabled()&&!a.isStatic()).map(a=>{let o=a.fetch(void 0,n);return n.throwOnError||(o=o.catch(Se)),a.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(Se)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=w(this,le).build(this,t);return n.isStaleByTime(_t(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Se).catch(Se)}fetchInfiniteQuery(e){return e.behavior=ms(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Se).catch(Se)}ensureInfiniteQueryData(e){return e.behavior=ms(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Er.isOnline()?w(this,xt).resumePausedMutations():Promise.resolve()}getQueryCache(){return w(this,le)}getMutationCache(){return w(this,xt)}getDefaultOptions(){return w(this,kt)}setDefaultOptions(e){I(this,kt,e)}setQueryDefaults(e,t){w(this,fn).set(Un(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...w(this,fn).values()],n={};return t.forEach(r=>{Bn(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){w(this,pn).set(Un(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...w(this,pn).values()],n={};return t.forEach(r=>{Bn(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...w(this,kt).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=wo(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===vo&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...w(this,kt).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){w(this,le).clear(),w(this,xt).clear()}},le=new WeakMap,xt=new WeakMap,kt=new WeakMap,fn=new WeakMap,pn=new WeakMap,St=new WeakMap,mn=new WeakMap,gn=new WeakMap,si),xe,Y,Wn,ve,Ht,bn,Et,Tt,Vn,yn,wn,Ut,Bt,Rt,vn,te,Ln,Ma,Fa,Ha,Ua,Ba,za,qa,Bl,ii,lm=(ii=class extends Yn{constructor(t,n){super();$(this,te);$(this,xe);$(this,Y);$(this,Wn);$(this,ve);$(this,Ht);$(this,bn);$(this,Et);$(this,Tt);$(this,Vn);$(this,yn);$(this,wn);$(this,Ut);$(this,Bt);$(this,Rt);$(this,vn,new Set);this.options=n,I(this,xe,t),I(this,Tt,null),I(this,Et,$a()),this.options.experimental_prefetchInRender||w(this,Et).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(w(this,Y).addObserver(this),bs(w(this,Y),this.options)?K(this,te,Ln).call(this):this.updateResult(),K(this,te,Ua).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Ga(w(this,Y),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Ga(w(this,Y),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,K(this,te,Ba).call(this),K(this,te,za).call(this),w(this,Y).removeObserver(this)}setOptions(t){const n=this.options,r=w(this,Y);if(this.options=w(this,xe).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Ne(this.options.enabled,w(this,Y))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");K(this,te,qa).call(this),w(this,Y).setOptions(this.options),n._defaulted&&!Da(this.options,n)&&w(this,xe).getQueryCache().notify({type:"observerOptionsUpdated",query:w(this,Y),observer:this});const a=this.hasListeners();a&&ys(w(this,Y),r,this.options,n)&&K(this,te,Ln).call(this),this.updateResult(),a&&(w(this,Y)!==r||Ne(this.options.enabled,w(this,Y))!==Ne(n.enabled,w(this,Y))||_t(this.options.staleTime,w(this,Y))!==_t(n.staleTime,w(this,Y)))&&K(this,te,Ma).call(this);const o=K(this,te,Fa).call(this);a&&(w(this,Y)!==r||Ne(this.options.enabled,w(this,Y))!==Ne(n.enabled,w(this,Y))||o!==w(this,Rt))&&K(this,te,Ha).call(this,o)}getOptimisticResult(t){const n=w(this,xe).getQueryCache().build(w(this,xe),t),r=this.createResult(n,t);return dm(this,r)&&(I(this,ve,r),I(this,bn,this.options),I(this,Ht,w(this,Y).state)),r}getCurrentResult(){return w(this,ve)}trackResult(t,n){return new Proxy(t,{get:(r,a)=>(this.trackProp(a),n==null||n(a),Reflect.get(r,a))})}trackProp(t){w(this,vn).add(t)}getCurrentQuery(){return w(this,Y)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const n=w(this,xe).defaultQueryOptions(t),r=w(this,xe).getQueryCache().build(w(this,xe),n);return r.fetch().then(()=>this.createResult(r,n))}fetch(t){return K(this,te,Ln).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),w(this,ve)))}createResult(t,n){var C;const r=w(this,Y),a=this.options,o=w(this,ve),s=w(this,Ht),i=w(this,bn),c=t!==r?t.state:w(this,Wn),{state:f}=t;let p={...f},g=!1,h;if(n._optimisticResults){const O=this.hasListeners(),L=!O&&bs(t,n),N=O&&ys(t,r,n,a);(L||N)&&(p={...p,...Ul(f.data,t.options)}),n._optimisticResults==="isRestoring"&&(p.fetchStatus="idle")}let{error:y,errorUpdatedAt:m,status:b}=p;h=p.data;let v=!1;if(n.placeholderData!==void 0&&h===void 0&&b==="pending"){let O;o!=null&&o.isPlaceholderData&&n.placeholderData===(i==null?void 0:i.placeholderData)?(O=o.data,v=!0):O=typeof n.placeholderData=="function"?n.placeholderData((C=w(this,wn))==null?void 0:C.state.data,w(this,wn)):n.placeholderData,O!==void 0&&(b="success",h=La(o==null?void 0:o.data,O,n),g=!0)}if(n.select&&h!==void 0&&!v)if(o&&h===(s==null?void 0:s.data)&&n.select===w(this,Vn))h=w(this,yn);else try{I(this,Vn,n.select),h=n.select(h),h=La(o==null?void 0:o.data,h,n),I(this,yn,h),I(this,Tt,null)}catch(O){I(this,Tt,O)}w(this,Tt)&&(y=w(this,Tt),h=w(this,yn),m=Date.now(),b="error");const k=p.fetchStatus==="fetching",x=b==="pending",S=b==="error",E=x&&k,R=h!==void 0,D={status:b,fetchStatus:p.fetchStatus,isPending:x,isSuccess:b==="success",isError:S,isInitialLoading:E,isLoading:E,data:h,dataUpdatedAt:p.dataUpdatedAt,error:y,errorUpdatedAt:m,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>c.dataUpdateCount||p.errorUpdateCount>c.errorUpdateCount,isFetching:k,isRefetching:k&&!x,isLoadingError:S&&!R,isPaused:p.fetchStatus==="paused",isPlaceholderData:g,isRefetchError:S&&R,isStale:ko(t,n),refetch:this.refetch,promise:w(this,Et),isEnabled:Ne(n.enabled,t)!==!1};if(this.options.experimental_prefetchInRender){const O=U=>{D.status==="error"?U.reject(D.error):D.data!==void 0&&U.resolve(D.data)},L=()=>{const U=I(this,Et,D.promise=$a());O(U)},N=w(this,Et);switch(N.status){case"pending":t.queryHash===r.queryHash&&O(N);break;case"fulfilled":(D.status==="error"||D.data!==N.value)&&L();break;case"rejected":(D.status!=="error"||D.error!==N.reason)&&L();break}}return D}updateResult(){const t=w(this,ve),n=this.createResult(w(this,Y),this.options);if(I(this,Ht,w(this,Y).state),I(this,bn,this.options),w(this,Ht).data!==void 0&&I(this,wn,w(this,Y)),Da(n,t))return;I(this,ve,n);const r=()=>{if(!t)return!0;const{notifyOnChangeProps:a}=this.options,o=typeof a=="function"?a():a;if(o==="all"||!o&&!w(this,vn).size)return!0;const s=new Set(o??w(this,vn));return this.options.throwOnError&&s.add("error"),Object.keys(w(this,ve)).some(i=>{const u=i;return w(this,ve)[u]!==t[u]&&s.has(u)})};K(this,te,Bl).call(this,{listeners:r()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&K(this,te,Ua).call(this)}},xe=new WeakMap,Y=new WeakMap,Wn=new WeakMap,ve=new WeakMap,Ht=new WeakMap,bn=new WeakMap,Et=new WeakMap,Tt=new WeakMap,Vn=new WeakMap,yn=new WeakMap,wn=new WeakMap,Ut=new WeakMap,Bt=new WeakMap,Rt=new WeakMap,vn=new WeakMap,te=new WeakSet,Ln=function(t){K(this,te,qa).call(this);let n=w(this,Y).fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(Se)),n},Ma=function(){K(this,te,Ba).call(this);const t=_t(this.options.staleTime,w(this,Y));if(Gt||w(this,ve).isStale||!Ia(t))return;const r=Dl(w(this,ve).dataUpdatedAt,t)+1;I(this,Ut,setTimeout(()=>{w(this,ve).isStale||this.updateResult()},r))},Fa=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(w(this,Y)):this.options.refetchInterval)??!1},Ha=function(t){K(this,te,za).call(this),I(this,Rt,t),!(Gt||Ne(this.options.enabled,w(this,Y))===!1||!Ia(w(this,Rt))||w(this,Rt)===0)&&I(this,Bt,setInterval(()=>{(this.options.refetchIntervalInBackground||xo.isFocused())&&K(this,te,Ln).call(this)},w(this,Rt)))},Ua=function(){K(this,te,Ma).call(this),K(this,te,Ha).call(this,K(this,te,Fa).call(this))},Ba=function(){w(this,Ut)&&(clearTimeout(w(this,Ut)),I(this,Ut,void 0))},za=function(){w(this,Bt)&&(clearInterval(w(this,Bt)),I(this,Bt,void 0))},qa=function(){const t=w(this,xe).getQueryCache().build(w(this,xe),this.options);if(t===w(this,Y))return;const n=w(this,Y);I(this,Y,t),I(this,Wn,t.state),this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))},Bl=function(t){fe.batch(()=>{t.listeners&&this.listeners.forEach(n=>{n(w(this,ve))}),w(this,xe).getQueryCache().notify({query:w(this,Y),type:"observerResultsUpdated"})})},ii);function cm(e,t){return Ne(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function bs(e,t){return cm(e,t)||e.state.data!==void 0&&Ga(e,t,t.refetchOnMount)}function Ga(e,t,n){if(Ne(t.enabled,e)!==!1&&_t(t.staleTime,e)!=="static"){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&ko(e,t)}return!1}function ys(e,t,n,r){return(e!==t||Ne(r.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&ko(e,n)}function ko(e,t){return Ne(t.enabled,e)!==!1&&e.isStaleByTime(_t(t.staleTime,e))}function dm(e,t){return!Da(e.getCurrentResult(),t)}var zl=d.createContext(void 0),um=e=>{const t=d.useContext(zl);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},hm=({client:e,children:t})=>(d.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),l.jsx(zl.Provider,{value:e,children:t})),ql=d.createContext(!1),fm=()=>d.useContext(ql);ql.Provider;function pm(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var mm=d.createContext(pm()),gm=()=>d.useContext(mm),bm=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},ym=e=>{d.useEffect(()=>{e.clearReset()},[e])},wm=({result:e,errorResetBoundary:t,throwOnError:n,query:r,suspense:a})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(a&&e.data===void 0||Jp(n,[e.error,r])),vm=e=>{if(e.suspense){const t=r=>r==="static"?r:Math.max(r??1e3,1e3),n=e.staleTime;e.staleTime=typeof n=="function"?(...r)=>t(n(...r)):t(n),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},xm=(e,t)=>e.isLoading&&e.isFetching&&!t,km=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,ws=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function Sm(e,t,n){var p,g,h,y,m;const r=fm(),a=gm(),o=um(),s=o.defaultQueryOptions(e);(g=(p=o.getDefaultOptions().queries)==null?void 0:p._experimental_beforeQuery)==null||g.call(p,s),s._optimisticResults=r?"isRestoring":"optimistic",vm(s),bm(s,a),ym(a);const i=!o.getQueryCache().get(s.queryHash),[u]=d.useState(()=>new t(o,s)),c=u.getOptimisticResult(s),f=!r&&e.subscribed!==!1;if(d.useSyncExternalStore(d.useCallback(b=>{const v=f?u.subscribe(fe.batchCalls(b)):Se;return u.updateResult(),v},[u,f]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),d.useEffect(()=>{u.setOptions(s)},[s,u]),km(s,c))throw ws(s,u,a);if(wm({result:c,errorResetBoundary:a,throwOnError:s.throwOnError,query:o.getQueryCache().get(s.queryHash),suspense:s.suspense}))throw c.error;if((y=(h=o.getDefaultOptions().queries)==null?void 0:h._experimental_afterQuery)==null||y.call(h,s,c),s.experimental_prefetchInRender&&!Gt&&xm(c,r)){const b=i?ws(s,u,a):(m=o.getQueryCache().get(s.queryHash))==null?void 0:m.promise;b==null||b.catch(Se).finally(()=>{u.updateResult()})}return s.notifyOnChangeProps?c:u.trackResult(c)}function Em(e,t){return Sm(e,lm)}var Tm=typeof Element<"u",Rm=typeof Map=="function",_m=typeof Set=="function",Am=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function gr(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,a;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!gr(e[r],t[r]))return!1;return!0}var o;if(Rm&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!gr(r.value[1],t.get(r.value[0])))return!1;return!0}if(_m&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Am&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;if(Tm&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((a[r]==="_owner"||a[r]==="__v"||a[r]==="__o")&&e.$$typeof)&&!gr(e[a[r]],t[a[r]]))return!1;return!0}return e!==e&&t!==t}var Cm=function(t,n){try{return gr(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Pm=eo(Cm);var Om=function(e,t,n,r,a,o,s,i){if(!e){var u;if(t===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,a,o,s,i],f=0;u=new Error(t.replace(/%s/g,function(){return c[f++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},Nm=Om;const vs=eo(Nm);var Im=function(t,n,r,a){var o=r?r.call(a,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),i=Object.keys(n);if(s.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),c=0;c<s.length;c++){var f=s[c];if(!u(f))return!1;var p=t[f],g=n[f];if(o=r?r.call(a,p,g,f):void 0,o===!1||o===void 0&&p!==g)return!1}return!0};const Dm=eo(Im);var Gl=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Gl||{}),la={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},xs=Object.values(Gl),So={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},jm=Object.entries(So).reduce((e,[t,n])=>(e[n]=t,e),{}),Be="data-rh",on={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},sn=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},Lm=e=>{let t=sn(e,"title");const n=sn(e,on.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=sn(e,on.DEFAULT_TITLE);return t||r||void 0},$m=e=>sn(e,on.ON_CHANGE_CLIENT_STATE)||(()=>{}),ca=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),Mm=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const a=Object.keys(r);for(let o=0;o<a.length;o+=1){const i=a[o].toLowerCase();if(e.indexOf(i)!==-1&&r[i])return n.concat(r)}}return n},[]),Fm=e=>console&&typeof console.warn=="function"&&console.warn(e),In=(e,t,n)=>{const r={};return n.filter(a=>Array.isArray(a[e])?!0:(typeof a[e]<"u"&&Fm(`Helmet: ${e} should be of type "Array". Instead found type "${typeof a[e]}"`),!1)).map(a=>a[e]).reverse().reduce((a,o)=>{const s={};o.filter(u=>{let c;const f=Object.keys(u);for(let g=0;g<f.length;g+=1){const h=f[g],y=h.toLowerCase();t.indexOf(y)!==-1&&!(c==="rel"&&u[c].toLowerCase()==="canonical")&&!(y==="rel"&&u[y].toLowerCase()==="stylesheet")&&(c=y),t.indexOf(h)!==-1&&(h==="innerHTML"||h==="cssText"||h==="itemprop")&&(c=h)}if(!c||!u[c])return!1;const p=u[c].toLowerCase();return r[c]||(r[c]={}),s[c]||(s[c]={}),r[c][p]?!1:(s[c][p]=!0,!0)}).reverse().forEach(u=>a.push(u));const i=Object.keys(s);for(let u=0;u<i.length;u+=1){const c=i[u],f={...r[c],...s[c]};r[c]=f}return a},[]).reverse()},Hm=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},Um=e=>({baseTag:Mm(["href"],e),bodyAttributes:ca("bodyAttributes",e),defer:sn(e,on.DEFER),encode:sn(e,on.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ca("htmlAttributes",e),linkTags:In("link",["rel","href"],e),metaTags:In("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:In("noscript",["innerHTML"],e),onChangeClientState:$m(e),scriptTags:In("script",["src","innerHTML"],e),styleTags:In("style",["cssText"],e),title:Lm(e),titleAttributes:ca("titleAttributes",e),prioritizeSeoTags:Hm(e,on.PRIORITIZE_SEO_TAGS)}),Wl=e=>Array.isArray(e)?e.join(""):e,Bm=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},da=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(Bm(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},ks=(e,t)=>({...e,[t]:void 0}),zm=["noscript","script","style"],Wa=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Vl=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),qm=(e,t,n,r)=>{const a=Vl(n),o=Wl(t);return a?`<${e} ${Be}="true" ${a}>${Wa(o,r)}</${e}>`:`<${e} ${Be}="true">${Wa(o,r)}</${e}>`},Gm=(e,t,n=!0)=>t.reduce((r,a)=>{const o=a,s=Object.keys(o).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,f)=>{const p=typeof o[f]>"u"?f:`${f}="${Wa(o[f],n)}"`;return c?`${c} ${p}`:p},""),i=o.innerHTML||o.cssText||"",u=zm.indexOf(e)===-1;return`${r}<${e} ${Be}="true" ${s}${u?"/>":`>${i}</${e}>`}`},""),Jl=(e,t={})=>Object.keys(e).reduce((n,r)=>{const a=So[r];return n[a||r]=e[r],n},t),Wm=(e,t,n)=>{const r={key:t,[Be]:!0},a=Jl(n,r);return[_.createElement("title",a,t)]},br=(e,t)=>t.map((n,r)=>{const a={key:r,[Be]:!0};return Object.keys(n).forEach(o=>{const i=So[o]||o;if(i==="innerHTML"||i==="cssText"){const u=n.innerHTML||n.cssText;a.dangerouslySetInnerHTML={__html:u}}else a[i]=n[o]}),_.createElement(e,a)}),Ce=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>Wm(e,t.title,t.titleAttributes),toString:()=>qm(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Jl(t),toString:()=>Vl(t)};default:return{toComponent:()=>br(e,t),toString:()=>Gm(e,t,n)}}},Vm=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const a=da(e,la.meta),o=da(t,la.link),s=da(n,la.script);return{priorityMethods:{toComponent:()=>[...br("meta",a.priority),...br("link",o.priority),...br("script",s.priority)],toString:()=>`${Ce("meta",a.priority,r)} ${Ce("link",o.priority,r)} ${Ce("script",s.priority,r)}`},metaTags:a.default,linkTags:o.default,scriptTags:s.default}},Jm=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:a,noscriptTags:o,styleTags:s,title:i="",titleAttributes:u,prioritizeSeoTags:c}=e;let{linkTags:f,metaTags:p,scriptTags:g}=e,h={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:h,linkTags:f,metaTags:p,scriptTags:g}=Vm(e)),{priority:h,base:Ce("base",t,r),bodyAttributes:Ce("bodyAttributes",n,r),htmlAttributes:Ce("htmlAttributes",a,r),link:Ce("link",f,r),meta:Ce("meta",p,r),noscript:Ce("noscript",o,r),script:Ce("script",g,r),style:Ce("style",s,r),title:Ce("title",{title:i,titleAttributes:u},r)}},Va=Jm,or=[],Kl=!!(typeof window<"u"&&window.document&&window.document.createElement),Ja=class{constructor(e,t){ot(this,"instances",[]);ot(this,"canUseDOM",Kl);ot(this,"context");ot(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?or:this.instances,add:e=>{(this.canUseDOM?or:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?or:this.instances).indexOf(e);(this.canUseDOM?or:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Va({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Km={},Yl=_.createContext(Km),zt,Ql=(zt=class extends d.Component{constructor(n){super(n);ot(this,"helmetData");this.helmetData=new Ja(this.props.context||{},zt.canUseDOM)}render(){return _.createElement(Yl.Provider,{value:this.helmetData.value},this.props.children)}},ot(zt,"canUseDOM",Kl),zt),Zt=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${Be}]`),a=[].slice.call(r),o=[];let s;return t&&t.length&&t.forEach(i=>{const u=document.createElement(e);for(const c in i)if(Object.prototype.hasOwnProperty.call(i,c))if(c==="innerHTML")u.innerHTML=i.innerHTML;else if(c==="cssText")u.styleSheet?u.styleSheet.cssText=i.cssText:u.appendChild(document.createTextNode(i.cssText));else{const f=c,p=typeof i[f]>"u"?"":i[f];u.setAttribute(c,p)}u.setAttribute(Be,"true"),a.some((c,f)=>(s=f,u.isEqualNode(c)))?a.splice(s,1):o.push(u)}),a.forEach(i=>{var u;return(u=i.parentNode)==null?void 0:u.removeChild(i)}),o.forEach(i=>n.appendChild(i)),{oldTags:a,newTags:o}},Ka=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(Be),a=r?r.split(","):[],o=[...a],s=Object.keys(t);for(const i of s){const u=t[i]||"";n.getAttribute(i)!==u&&n.setAttribute(i,u),a.indexOf(i)===-1&&a.push(i);const c=o.indexOf(i);c!==-1&&o.splice(c,1)}for(let i=o.length-1;i>=0;i-=1)n.removeAttribute(o[i]);a.length===o.length?n.removeAttribute(Be):n.getAttribute(Be)!==s.join(",")&&n.setAttribute(Be,s.join(","))},Ym=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Wl(e)),Ka("title",t)},Ss=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:a,linkTags:o,metaTags:s,noscriptTags:i,onChangeClientState:u,scriptTags:c,styleTags:f,title:p,titleAttributes:g}=e;Ka("body",r),Ka("html",a),Ym(p,g);const h={baseTag:Zt("base",n),linkTags:Zt("link",o),metaTags:Zt("meta",s),noscriptTags:Zt("noscript",i),scriptTags:Zt("script",c),styleTags:Zt("style",f)},y={},m={};Object.keys(h).forEach(b=>{const{newTags:v,oldTags:k}=h[b];v.length&&(y[b]=v),k.length&&(m[b]=h[b].oldTags)}),t&&t(),u(e,y,m)},Dn=null,Qm=e=>{Dn&&cancelAnimationFrame(Dn),e.defer?Dn=requestAnimationFrame(()=>{Ss(e,()=>{Dn=null})}):(Ss(e),Dn=null)},Xm=Qm,Es=class extends d.Component{constructor(){super(...arguments);ot(this,"rendered",!1)}shouldComponentUpdate(t){return!Dm(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const a=Um(t.get().map(o=>{const s={...o.props};return delete s.context,s}));Ql.canUseDOM?Xm(a):Va&&(r=Va(a)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},xa,Zm=(xa=class extends d.Component{shouldComponentUpdate(e){return!Pm(ks(this.props,"helmetData"),ks(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return vs(xs.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${xs.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),vs(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return _.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:a,...o}=r.props,s=Object.keys(o).reduce((u,c)=>(u[jm[c]||c]=o[c],u),{});let{type:i}=r;switch(typeof i=="symbol"?i=i.toString():this.warnOnInvalidChildren(r,a),i){case"Symbol(react.fragment)":t=this.mapChildrenToProps(a,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,a);break;default:t=this.mapObjectTypeChildren(r,t,s,a);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Ja)){const a=r;r=new Ja(a.context,!0),delete n.helmetData}return r?_.createElement(Es,{...n,context:r.value}):_.createElement(Yl.Consumer,null,a=>_.createElement(Es,{...n,context:a}))}},ot(xa,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),xa);const eg=so("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",hero:"bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.5)]",heroOutline:"border border-primary/40 text-foreground bg-transparent font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary",glass:"border border-border bg-background/70 backdrop-blur-md text-foreground hover:border-primary/50 hover:text-primary"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-sm px-3",lg:"h-12 rounded-sm px-7 text-sm",xl:"h-14 rounded-sm px-10 text-base",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ie=d.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...a},o)=>{const s=r?Fd:"button";return l.jsx(s,{className:re(eg({variant:t,size:n,className:e})),ref:o,...a})});Ie.displayName="Button";let Ya;const Qa=[];function tg(e){Ya=e;for(const t of Qa)e.capture(...t);Qa.length=0}const ng={capture:(...e)=>{if(Ya)return Ya.capture(...e);Qa.push(e)}};function An(){return ng}function rg({theme:e,toggleTheme:t}){const n=An(),r=()=>{t(),n==null||n.capture("theme_toggled",{theme:e==="dark"?"light":"dark"})};return l.jsx(Ie,{variant:"glass",size:"icon",onClick:r,"aria-label":`Switch to ${e==="dark"?"light":"dark"} mode`,title:`Switch to ${e==="dark"?"light":"dark"} mode`,className:"relative overflow-hidden",children:l.jsx("div",{className:"transition-transform duration-300 ease-in-out",style:{transform:`rotate(${e==="dark"?0:180}deg)`},children:e==="dark"?l.jsx($u,{className:"h-5 w-5"}):l.jsx(Mu,{className:"h-5 w-5"})})})}var ua="focusScope.autoFocusOnMount",ha="focusScope.autoFocusOnUnmount",Ts={bubbles:!1,cancelable:!0},ag="FocusScope",Xl=d.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:o,...s}=e,[i,u]=d.useState(null),c=pe(a),f=pe(o),p=d.useRef(null),g=de(t,m=>u(m)),h=d.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;d.useEffect(()=>{if(r){let m=function(x){if(h.paused||!i)return;const S=x.target;i.contains(S)?p.current=S:yt(p.current,{select:!0})},b=function(x){if(h.paused||!i)return;const S=x.relatedTarget;S!==null&&(i.contains(S)||yt(p.current,{select:!0}))},v=function(x){if(document.activeElement===document.body)for(const E of x)E.removedNodes.length>0&&yt(i)};document.addEventListener("focusin",m),document.addEventListener("focusout",b);const k=new MutationObserver(v);return i&&k.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",m),document.removeEventListener("focusout",b),k.disconnect()}}},[r,i,h.paused]),d.useEffect(()=>{if(i){_s.add(h);const m=document.activeElement;if(!i.contains(m)){const v=new CustomEvent(ua,Ts);i.addEventListener(ua,c),i.dispatchEvent(v),v.defaultPrevented||(og(dg(Zl(i)),{select:!0}),document.activeElement===m&&yt(i))}return()=>{i.removeEventListener(ua,c),setTimeout(()=>{const v=new CustomEvent(ha,Ts);i.addEventListener(ha,f),i.dispatchEvent(v),v.defaultPrevented||yt(m??document.body,{select:!0}),i.removeEventListener(ha,f),_s.remove(h)},0)}}},[i,c,f,h]);const y=d.useCallback(m=>{if(!n&&!r||h.paused)return;const b=m.key==="Tab"&&!m.altKey&&!m.ctrlKey&&!m.metaKey,v=document.activeElement;if(b&&v){const k=m.currentTarget,[x,S]=sg(k);x&&S?!m.shiftKey&&v===S?(m.preventDefault(),n&&yt(x,{select:!0})):m.shiftKey&&v===x&&(m.preventDefault(),n&&yt(S,{select:!0})):v===k&&m.preventDefault()}},[n,r,h.paused]);return l.jsx(oe.div,{tabIndex:-1,...s,ref:g,onKeyDown:y})});Xl.displayName=ag;function og(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(yt(r,{select:t}),document.activeElement!==n)return}function sg(e){const t=Zl(e),n=Rs(t,e),r=Rs(t.reverse(),e);return[n,r]}function Zl(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Rs(e,t){for(const n of e)if(!ig(n,{upTo:t}))return n}function ig(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function lg(e){return e instanceof HTMLInputElement&&"select"in e}function yt(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&lg(e)&&t&&e.select()}}var _s=cg();function cg(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=As(e,t),e.unshift(t)},remove(t){var n;e=As(e,t),(n=e[0])==null||n.resume()}}}function As(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function dg(e){return e.filter(t=>t.tagName!=="A")}var fa=0;function ug(){d.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Cs()),document.body.insertAdjacentElement("beforeend",e[1]??Cs()),fa++,()=>{fa===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),fa--}},[])}function Cs(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Qe=function(){return Qe=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Qe.apply(this,arguments)};function ec(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function hg(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,o;r<a;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var yr="right-scroll-bar-position",wr="width-before-scroll-bar",fg="with-scroll-bars-hidden",pg="--removed-body-scroll-bar-size";function pa(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function mg(e,t){var n=d.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var gg=typeof window<"u"?d.useLayoutEffect:d.useEffect,Ps=new WeakMap;function bg(e,t){var n=mg(null,function(r){return e.forEach(function(a){return pa(a,r)})});return gg(function(){var r=Ps.get(n);if(r){var a=new Set(r),o=new Set(e),s=n.current;a.forEach(function(i){o.has(i)||pa(i,null)}),o.forEach(function(i){a.has(i)||pa(i,s)})}Ps.set(n,e)},[e]),n}function yg(e){return e}function wg(e,t){t===void 0&&(t=yg);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(o){var s=t(o,r);return n.push(s),function(){n=n.filter(function(i){return i!==s})}},assignSyncMedium:function(o){for(r=!0;n.length;){var s=n;n=[],s.forEach(o)}n={push:function(i){return o(i)},filter:function(){return n}}},assignMedium:function(o){r=!0;var s=[];if(n.length){var i=n;n=[],i.forEach(o),s=n}var u=function(){var f=s;s=[],f.forEach(o)},c=function(){return Promise.resolve().then(u)};c(),n={push:function(f){s.push(f),c()},filter:function(f){return s=s.filter(f),n}}}};return a}function vg(e){e===void 0&&(e={});var t=wg(null);return t.options=Qe({async:!0,ssr:!1},e),t}var tc=function(e){var t=e.sideCar,n=ec(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return d.createElement(r,Qe({},n))};tc.isSideCarExport=!0;function xg(e,t){return e.useMedium(t),tc}var nc=vg(),ma=function(){},Hr=d.forwardRef(function(e,t){var n=d.useRef(null),r=d.useState({onScrollCapture:ma,onWheelCapture:ma,onTouchMoveCapture:ma}),a=r[0],o=r[1],s=e.forwardProps,i=e.children,u=e.className,c=e.removeScrollBar,f=e.enabled,p=e.shards,g=e.sideCar,h=e.noRelative,y=e.noIsolation,m=e.inert,b=e.allowPinchZoom,v=e.as,k=v===void 0?"div":v,x=e.gapMode,S=ec(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=g,R=bg([n,t]),A=Qe(Qe({},S),a);return d.createElement(d.Fragment,null,f&&d.createElement(E,{sideCar:nc,removeScrollBar:c,shards:p,noRelative:h,noIsolation:y,inert:m,setCallbacks:o,allowPinchZoom:!!b,lockRef:n,gapMode:x}),s?d.cloneElement(d.Children.only(i),Qe(Qe({},A),{ref:R})):d.createElement(k,Qe({},A,{className:u,ref:R}),i))});Hr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Hr.classNames={fullWidth:wr,zeroRight:yr};var kg=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Sg(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=kg();return t&&e.setAttribute("nonce",t),e}function Eg(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Tg(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Rg=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Sg())&&(Eg(t,n),Tg(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},_g=function(){var e=Rg();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},rc=function(){var e=_g(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},Ag={left:0,top:0,right:0,gap:0},ga=function(e){return parseInt(e||"",10)||0},Cg=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[ga(n),ga(r),ga(a)]},Pg=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Ag;var t=Cg(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Og=rc(),ln="data-scroll-locked",Ng=function(e,t,n,r){var a=e.left,o=e.top,s=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(fg,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(ln,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(yr,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(wr,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(yr," .").concat(yr,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(wr," .").concat(wr,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(ln,`] {
    `).concat(pg,": ").concat(i,`px;
  }
`)},Os=function(){var e=parseInt(document.body.getAttribute(ln)||"0",10);return isFinite(e)?e:0},Ig=function(){d.useEffect(function(){return document.body.setAttribute(ln,(Os()+1).toString()),function(){var e=Os()-1;e<=0?document.body.removeAttribute(ln):document.body.setAttribute(ln,e.toString())}},[])},Dg=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;Ig();var o=d.useMemo(function(){return Pg(a)},[a]);return d.createElement(Og,{styles:Ng(o,!t,a,n?"":"!important")})},Xa=!1;if(typeof window<"u")try{var sr=Object.defineProperty({},"passive",{get:function(){return Xa=!0,!0}});window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Xa=!1}var en=Xa?{passive:!1}:!1,jg=function(e){return e.tagName==="TEXTAREA"},ac=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!jg(e)&&n[t]==="visible")},Lg=function(e){return ac(e,"overflowY")},$g=function(e){return ac(e,"overflowX")},Ns=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=oc(e,r);if(a){var o=sc(e,r),s=o[1],i=o[2];if(s>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Mg=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Fg=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},oc=function(e,t){return e==="v"?Lg(t):$g(t)},sc=function(e,t){return e==="v"?Mg(t):Fg(t)},Hg=function(e,t){return e==="h"&&t==="rtl"?-1:1},Ug=function(e,t,n,r,a){var o=Hg(e,window.getComputedStyle(t).direction),s=o*r,i=n.target,u=t.contains(i),c=!1,f=s>0,p=0,g=0;do{if(!i)break;var h=sc(e,i),y=h[0],m=h[1],b=h[2],v=m-b-o*y;(y||v)&&oc(e,i)&&(p+=v,g+=y);var k=i.parentNode;i=k&&k.nodeType===Node.DOCUMENT_FRAGMENT_NODE?k.host:k}while(!u&&i!==document.body||u&&(t.contains(i)||t===i));return(f&&(Math.abs(p)<1||!a)||!f&&(Math.abs(g)<1||!a))&&(c=!0),c},ir=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Is=function(e){return[e.deltaX,e.deltaY]},Ds=function(e){return e&&"current"in e?e.current:e},Bg=function(e,t){return e[0]===t[0]&&e[1]===t[1]},zg=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},qg=0,tn=[];function Gg(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),a=d.useState(qg++)[0],o=d.useState(rc)[0],s=d.useRef(e);d.useEffect(function(){s.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var m=hg([e.lockRef.current],(e.shards||[]).map(Ds),!0).filter(Boolean);return m.forEach(function(b){return b.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),m.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var i=d.useCallback(function(m,b){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!s.current.allowPinchZoom;var v=ir(m),k=n.current,x="deltaX"in m?m.deltaX:k[0]-v[0],S="deltaY"in m?m.deltaY:k[1]-v[1],E,R=m.target,A=Math.abs(x)>Math.abs(S)?"h":"v";if("touches"in m&&A==="h"&&R.type==="range")return!1;var D=Ns(A,R);if(!D)return!0;if(D?E=A:(E=A==="v"?"h":"v",D=Ns(A,R)),!D)return!1;if(!r.current&&"changedTouches"in m&&(x||S)&&(r.current=E),!E)return!0;var C=r.current||E;return Ug(C,b,m,C==="h"?x:S,!0)},[]),u=d.useCallback(function(m){var b=m;if(!(!tn.length||tn[tn.length-1]!==o)){var v="deltaY"in b?Is(b):ir(b),k=t.current.filter(function(E){return E.name===b.type&&(E.target===b.target||b.target===E.shadowParent)&&Bg(E.delta,v)})[0];if(k&&k.should){b.cancelable&&b.preventDefault();return}if(!k){var x=(s.current.shards||[]).map(Ds).filter(Boolean).filter(function(E){return E.contains(b.target)}),S=x.length>0?i(b,x[0]):!s.current.noIsolation;S&&b.cancelable&&b.preventDefault()}}},[]),c=d.useCallback(function(m,b,v,k){var x={name:m,delta:b,target:v,should:k,shadowParent:Wg(v)};t.current.push(x),setTimeout(function(){t.current=t.current.filter(function(S){return S!==x})},1)},[]),f=d.useCallback(function(m){n.current=ir(m),r.current=void 0},[]),p=d.useCallback(function(m){c(m.type,Is(m),m.target,i(m,e.lockRef.current))},[]),g=d.useCallback(function(m){c(m.type,ir(m),m.target,i(m,e.lockRef.current))},[]);d.useEffect(function(){return tn.push(o),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:g}),document.addEventListener("wheel",u,en),document.addEventListener("touchmove",u,en),document.addEventListener("touchstart",f,en),function(){tn=tn.filter(function(m){return m!==o}),document.removeEventListener("wheel",u,en),document.removeEventListener("touchmove",u,en),document.removeEventListener("touchstart",f,en)}},[]);var h=e.removeScrollBar,y=e.inert;return d.createElement(d.Fragment,null,y?d.createElement(o,{styles:zg(a)}):null,h?d.createElement(Dg,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Wg(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Vg=xg(nc,Gg);var ic=d.forwardRef(function(e,t){return d.createElement(Hr,Qe({},e,{ref:t,sideCar:Vg}))});ic.classNames=Hr.classNames;var Jg=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},nn=new WeakMap,lr=new WeakMap,cr={},ba=0,lc=function(e){return e&&(e.host||lc(e.parentNode))},Kg=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=lc(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Yg=function(e,t,n,r){var a=Kg(t,Array.isArray(e)?e:[e]);cr[n]||(cr[n]=new WeakMap);var o=cr[n],s=[],i=new Set,u=new Set(a),c=function(p){!p||i.has(p)||(i.add(p),c(p.parentNode))};a.forEach(c);var f=function(p){!p||u.has(p)||Array.prototype.forEach.call(p.children,function(g){if(i.has(g))f(g);else try{var h=g.getAttribute(r),y=h!==null&&h!=="false",m=(nn.get(g)||0)+1,b=(o.get(g)||0)+1;nn.set(g,m),o.set(g,b),s.push(g),m===1&&y&&lr.set(g,!0),b===1&&g.setAttribute(n,"true"),y||g.setAttribute(r,"true")}catch(v){console.error("aria-hidden: cannot operate on ",g,v)}})};return f(t),i.clear(),ba++,function(){s.forEach(function(p){var g=nn.get(p)-1,h=o.get(p)-1;nn.set(p,g),o.set(p,h),g||(lr.has(p)||p.removeAttribute(r),lr.delete(p)),h||p.removeAttribute(n)}),ba--,ba||(nn=new WeakMap,nn=new WeakMap,lr=new WeakMap,cr={})}},Qg=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=Jg(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),Yg(r,a,n,"aria-hidden")):function(){return null}},Ur="Dialog",[cc,uw]=En(Ur),[Xg,Ge]=cc(Ur),dc=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:o,modal:s=!0}=e,i=d.useRef(null),u=d.useRef(null),[c,f]=vi({prop:r,defaultProp:a??!1,onChange:o,caller:Ur});return l.jsx(Xg,{scope:t,triggerRef:i,contentRef:u,contentId:aa(),titleId:aa(),descriptionId:aa(),open:c,onOpenChange:f,onOpenToggle:d.useCallback(()=>f(p=>!p),[f]),modal:s,children:n})};dc.displayName=Ur;var uc="DialogTrigger",hc=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=Ge(uc,n),o=de(t,a.triggerRef);return l.jsx(oe.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":Ro(a.open),...r,ref:o,onClick:Z(e.onClick,a.onOpenToggle)})});hc.displayName=uc;var Eo="DialogPortal",[Zg,fc]=cc(Eo,{forceMount:void 0}),pc=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:a}=e,o=Ge(Eo,t);return l.jsx(Zg,{scope:t,forceMount:n,children:d.Children.map(r,s=>l.jsx(nt,{present:n||o.open,children:l.jsx(no,{asChild:!0,container:a,children:s})}))})};pc.displayName=Eo;var Tr="DialogOverlay",mc=d.forwardRef((e,t)=>{const n=fc(Tr,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,o=Ge(Tr,e.__scopeDialog);return o.modal?l.jsx(nt,{present:r||o.open,children:l.jsx(tb,{...a,ref:t})}):null});mc.displayName=Tr;var eb=Mn("DialogOverlay.RemoveScroll"),tb=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=Ge(Tr,n);return l.jsx(ic,{as:eb,allowPinchZoom:!0,shards:[a.contentRef],children:l.jsx(oe.div,{"data-state":Ro(a.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),Wt="DialogContent",gc=d.forwardRef((e,t)=>{const n=fc(Wt,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,o=Ge(Wt,e.__scopeDialog);return l.jsx(nt,{present:r||o.open,children:o.modal?l.jsx(nb,{...a,ref:t}):l.jsx(rb,{...a,ref:t})})});gc.displayName=Wt;var nb=d.forwardRef((e,t)=>{const n=Ge(Wt,e.__scopeDialog),r=d.useRef(null),a=de(t,n.contentRef,r);return d.useEffect(()=>{const o=r.current;if(o)return Qg(o)},[]),l.jsx(bc,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Z(e.onCloseAutoFocus,o=>{var s;o.preventDefault(),(s=n.triggerRef.current)==null||s.focus()}),onPointerDownOutside:Z(e.onPointerDownOutside,o=>{const s=o.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&o.preventDefault()}),onFocusOutside:Z(e.onFocusOutside,o=>o.preventDefault())})}),rb=d.forwardRef((e,t)=>{const n=Ge(Wt,e.__scopeDialog),r=d.useRef(!1),a=d.useRef(!1);return l.jsx(bc,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s,i;(s=e.onCloseAutoFocus)==null||s.call(e,o),o.defaultPrevented||(r.current||(i=n.triggerRef.current)==null||i.focus(),o.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:o=>{var u,c;(u=e.onInteractOutside)==null||u.call(e,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const s=o.target;((c=n.triggerRef.current)==null?void 0:c.contains(s))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&a.current&&o.preventDefault()}})}),bc=d.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:o,...s}=e,i=Ge(Wt,n),u=d.useRef(null),c=de(t,u);return ug(),l.jsxs(l.Fragment,{children:[l.jsx(Xl,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:o,children:l.jsx(Or,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":Ro(i.open),...s,ref:c,onDismiss:()=>i.onOpenChange(!1)})}),l.jsxs(l.Fragment,{children:[l.jsx(ab,{titleId:i.titleId}),l.jsx(sb,{contentRef:u,descriptionId:i.descriptionId})]})]})}),To="DialogTitle",yc=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=Ge(To,n);return l.jsx(oe.h2,{id:a.titleId,...r,ref:t})});yc.displayName=To;var wc="DialogDescription",vc=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=Ge(wc,n);return l.jsx(oe.p,{id:a.descriptionId,...r,ref:t})});vc.displayName=wc;var xc="DialogClose",kc=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=Ge(xc,n);return l.jsx(oe.button,{type:"button",...r,ref:t,onClick:Z(e.onClick,()=>a.onOpenChange(!1))})});kc.displayName=xc;function Ro(e){return e?"open":"closed"}var Sc="DialogTitleWarning",[hw,Ec]=$d(Sc,{contentName:Wt,titleName:To,docsSlug:"dialog"}),ab=({titleId:e})=>{const t=Ec(Sc),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return d.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},ob="DialogDescriptionWarning",sb=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ec(ob).contentName}}.`;return d.useEffect(()=>{var o;const a=(o=e.current)==null?void 0:o.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},Tc=dc,ib=hc,Rc=pc,Br=mc,zr=gc,qr=yc,Gr=vc,_o=kc;const lb=Tc,cb=ib,dr=_o,db=Rc,_c=d.forwardRef(({className:e,...t},n)=>l.jsx(Br,{className:re("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:n}));_c.displayName=Br.displayName;const ub=so("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),Ac=d.forwardRef(({side:e="right",className:t,children:n,...r},a)=>l.jsxs(db,{children:[l.jsx(_c,{}),l.jsxs(zr,{ref:a,className:re(ub({side:e}),t),...r,children:[n,l.jsxs(_o,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[l.jsx(io,{className:"h-4 w-4"}),l.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Ac.displayName=zr.displayName;const Cc=({className:e,...t})=>l.jsx("div",{className:re("flex flex-col space-y-2 text-center sm:text-left",e),...t});Cc.displayName="SheetHeader";const Pc=d.forwardRef(({className:e,...t},n)=>l.jsx(qr,{ref:n,className:re("text-lg font-semibold text-foreground",e),...t}));Pc.displayName=qr.displayName;const Oc=d.forwardRef(({className:e,...t},n)=>l.jsx(Gr,{ref:n,className:re("text-sm text-muted-foreground",e),...t}));Oc.displayName=Gr.displayName;function hb(e){const[t,n]=d.useState("");return d.useEffect(()=>{const r=()=>{const a=window.scrollY+200;for(const o of e){const s=document.getElementById(o);if(s){const{offsetTop:i,offsetHeight:u}=s;if(a>=i&&a<i+u){n(o);return}}}window.scrollY<100&&n("")};return r(),window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[e]),t}const js=[{id:"palette",label:"Command line accessed",hint:"Open the palette (⌘K)",done:"root shell is yours"},{id:"scan",label:"Full system scan",hint:"Explore every section",done:"every section swept"},{id:"catch",label:"Chased the operative",hint:"Try to catch the avatar",done:"fast, but you tried"},{id:"repos",label:"Repo vault cracked",hint:"Open the repositories",done:"the vault is open"},{id:"theme",label:"Lights flipped",hint:"Switch the theme",done:"ambience rewired"},{id:"konami",label:"Cheat code accepted",hint:"↑↑↓↓←→←→ B A",done:"you know the code"},{id:"secret",label:"Secret command run",hint:"Try an unlisted command",done:"off the menu"},{id:"contact",label:"Contact initiated",hint:"Book a call",done:"channel open — let's talk"}],Ls="recon:achievements",Nc=["work","open-source","writing","leadership","about","experience","speaking","skills","recommendations","contact"];function fb(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}async function Ic(e){if(!(typeof window>"u"||fb()))try{const{default:t}=await Q(async()=>{const{default:n}=await import("./confetti.module-BVAT6wYb.js");return{default:n}},[]);t({particleCount:90,spread:75,startVelocity:38,ticks:160,origin:{y:.72},colors:["#06b6d4","#22d3ee","#67e8f9","#a5f3fc","#ffffff"],disableForReducedMotion:!0,...e})}catch{}}const Dc=d.createContext(null);function pb({children:e}){const[t,n]=d.useState(()=>new Set),[r,a]=d.useState([]),[o,s]=d.useState(()=>new Set),[i,u]=d.useState(!1),[c,f]=d.useState(!1),[p,g]=d.useState(!1);d.useEffect(()=>{try{const x=localStorage.getItem(Ls);x&&n(new Set(JSON.parse(x)))}catch{}},[]);const h=d.useCallback(x=>{const S=js.find(E=>E.id===x);S&&n(E=>{if(E.has(x))return E;const R=new Set(E);R.add(x);try{localStorage.setItem(Ls,JSON.stringify([...R]))}catch{}return a(A=>[...A,S]),R})},[]),y=d.useCallback(x=>{a(S=>S.filter(E=>E.id!==x))},[]),m=d.useCallback(x=>{s(S=>{if(S.has(x))return S;const E=new Set(S);return E.add(x),E})},[]),b=Math.round(o.size/Nc.length*100),v=d.useRef(!1);d.useEffect(()=>{b>=100&&!v.current&&(v.current=!0,h("scan"),Ic({particleCount:140,spread:100,origin:{y:.6}}))},[b,h]),d.useEffect(()=>{if(typeof MutationObserver>"u")return;const x=document.documentElement,S=new MutationObserver(()=>h("theme"));return S.observe(x,{attributes:!0,attributeFilter:["class"]}),()=>S.disconnect()},[h]);const k=d.useMemo(()=>({achievements:js,unlocked:t,unlock:h,toasts:r,dismissToast:y,scanned:o,markScanned:m,scanPct:b,paletteOpen:i,setPaletteOpen:u,panelOpen:c,setPanelOpen:f,matrixOn:p,setMatrixOn:g}),[t,h,r,y,o,m,b,i,c,p]);return l.jsx(Dc.Provider,{value:k,children:e})}function Wr(){const e=d.useContext(Dc);if(!e)throw new Error("useRecon must be used within <ReconProvider>");return e}function fw(){const{markScanned:e}=Wr();d.useEffect(()=>{if(typeof IntersectionObserver>"u")return;const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&s.target.id&&e(s.target.id)},{threshold:.25}),n=()=>{for(const o of Nc){const s=document.getElementById(o);s&&t.observe(s)}};n();const r=window.setTimeout(n,600),a=window.setTimeout(n,1800);return()=>{t.disconnect(),window.clearTimeout(r),window.clearTimeout(a)}},[e])}const $s=[{href:"work",label:"Work"},{href:"open-source",label:"Open Source"},{href:"writing",label:"Writing"},{to:"/about",label:"About"}];function mb({onClick:e}){return l.jsxs("a",{href:"/",onClick:e,className:"wordmark",dir:"ltr",children:["bn",l.jsx("em",{children:"Saed"}),l.jsx("span",{className:"cur",children:"_"}),l.jsx("span",{className:"sr-only",children:" — Abdelrahman Saed, home"})]})}function gb({theme:e,toggleTheme:t}){const n=hb(["work","open-source","writing"]),r=to(),a=di(),o=An(),{unlock:s}=Wr(),i=r.pathname==="/",u=c=>{c.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),a("/")};return l.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 glass-effect animate-slide-down",children:l.jsxs("div",{className:"container mx-auto px-6 h-16 flex items-center gap-4",children:[l.jsx(mb,{onClick:u}),l.jsx("span",{className:"hidden lg:block h-5 w-px bg-border","aria-hidden":"true"}),l.jsx("nav",{className:"hidden lg:flex flex-1 items-center gap-x-6","aria-label":"Primary",children:$s.map(c=>{const f=c.href?i&&n===c.href:r.pathname===c.to;return l.jsxs(Oe,{to:c.href?`/#${c.href}`:c.to,className:re("group relative kicker whitespace-nowrap transition-colors py-1",f?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[c.label,l.jsx("span",{className:re("absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300",f?"w-full":"w-0 group-hover:w-full")})]},c.label)})}),l.jsxs("div",{className:"flex items-center gap-1.5 ml-auto lg:ml-0",children:[l.jsx(Ie,{asChild:!0,size:"sm",className:"hidden lg:inline-flex h-9 rounded-full px-5 font-medium",onClick:()=>{o==null||o.capture("hire_nav_clicked",{source:"header_desktop"}),s("contact")},children:l.jsx(Oe,{to:"/hire",children:"Hire Me"})}),l.jsx("span",{className:"hidden xl:block h-5 w-px bg-border mx-1","aria-hidden":"true"}),l.jsx(Ie,{variant:"ghost",size:"icon",asChild:!0,className:"hidden xl:inline-flex",children:l.jsx("a",{href:"https://github.com/binSaed",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub profile",title:"GitHub",children:l.jsx(Gi,{className:"h-5 w-5"})})}),l.jsx(Ie,{variant:"ghost",size:"icon",asChild:!0,className:"hidden xl:inline-flex",children:l.jsx("a",{href:"https://www.linkedin.com/in/binsaed/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn profile",title:"LinkedIn",children:l.jsx(Wi,{className:"h-5 w-5"})})}),l.jsx(Ie,{variant:"ghost",size:"icon",asChild:!0,className:"hidden sm:inline-flex",children:l.jsx(Oe,{to:"/CV","aria-label":"View my CV and resume",title:"CV",children:l.jsx(qi,{className:"h-5 w-5"})})}),l.jsx(Ie,{asChild:!0,size:"sm",className:"lg:hidden h-8 rounded-full px-3.5 text-xs font-medium",onClick:()=>{o==null||o.capture("hire_nav_clicked",{source:"header_mobile_pill"}),s("contact")},children:l.jsx(Oe,{to:"/hire",children:"Hire Me"})}),l.jsx(rg,{theme:e,toggleTheme:t}),l.jsxs(lb,{children:[l.jsx(cb,{asChild:!0,children:l.jsx(Ie,{variant:"ghost",size:"icon",className:"lg:hidden","aria-label":"Open navigation menu",children:l.jsx(Lu,{className:"h-5 w-5"})})}),l.jsxs(Ac,{side:"right",className:"w-72 border-l border-border",children:[l.jsxs(Cc,{children:[l.jsx(Pc,{className:"text-left font-heading font-medium text-2xl tracking-tight",children:"Navigation"}),l.jsx(Oc,{className:"sr-only",children:"Site navigation links"})]}),l.jsx("div",{className:"mt-2 mb-4 h-px w-full bg-border"}),l.jsxs("nav",{className:"flex flex-col",children:[$s.map(c=>{const f=c.href?i&&n===c.href:r.pathname===c.to;return l.jsx(dr,{asChild:!0,children:l.jsx(Oe,{to:c.href?`/#${c.href}`:c.to,className:re("group flex items-baseline gap-3 border-b border-border/60 py-3 transition-colors",f?"text-foreground":"text-muted-foreground hover:text-foreground"),children:l.jsx("span",{className:"font-heading text-xl",children:c.label})})},c.label)}),l.jsx(dr,{asChild:!0,children:l.jsx(Oe,{to:"/flutter",className:"group flex items-baseline gap-3 border-b border-border/60 py-3 pl-5 transition-colors text-muted-foreground hover:text-foreground",children:l.jsx("span",{className:"text-sm text-muted-foreground group-hover:text-primary transition-colors",children:"Resources — Flutter Reference"})})}),l.jsx(dr,{asChild:!0,children:l.jsx(Oe,{to:"/CV",className:"group flex items-baseline gap-3 border-b border-border/60 py-3 transition-colors text-muted-foreground hover:text-foreground",children:l.jsx("span",{className:"font-heading text-xl",children:"CV"})})}),l.jsx(dr,{asChild:!0,children:l.jsx(Oe,{to:"/hire",onClick:()=>{o==null||o.capture("hire_nav_clicked",{source:"header_mobile"}),s("contact")},className:"group mt-4 flex items-center justify-center rounded-full bg-primary py-3 font-heading text-xl text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_4px_16px_-4px_hsl(var(--primary)/0.5)]",children:"Hire Me"})})]})]})]})]})]})})}const bb={login:"binSaed",name:"Abdelrahman Saed",avatar_url:"https://avatars.githubusercontent.com/u/33700292?v=4",bio:"Software engineer with professional experience focused in Flutter, previous experience with Android native(java), and familiar with backend using NodeJS, AWS",location:"Egypt",blog:"bnsaed.com",public_repos:89,followers:177,following:362,html_url:"https://github.com/binSaed",company:"@iStoriaE"};function jc(){return{data:bb,isLoading:!1,isError:!1}}function It({className:e,...t}){return l.jsx("div",{className:re("animate-pulse rounded-md bg-muted",e),...t})}function yb(){return l.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none","aria-hidden":"true",children:[l.jsx("div",{className:"absolute -top-1/4 right-0 h-[70vh] w-[70vh] rounded-full animate-glow-breathe",style:{background:"radial-gradient(circle, hsl(var(--primary) / 0.08), transparent 62%)"}}),l.jsx("div",{className:"absolute inset-0 bg-dotgrid opacity-40 [mask-image:linear-gradient(180deg,transparent,black_18%,black_70%,transparent)]"}),l.jsx("span",{className:"section-numeral absolute -top-10 right-4 text-[26vw] md:text-[15rem] leading-none tracking-tighter",children:"01"}),l.jsx("div",{className:"absolute top-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-primary/40 animate-float-slow"}),l.jsx("div",{className:"absolute top-[22%] left-1/3 h-1 w-1 rounded-full bg-primary/30 animate-float-drift-b",style:{animationDelay:"2.5s"}}),l.jsx("div",{className:"absolute bottom-[30%] right-1/3 h-1 w-1 rounded-full bg-primary/25 animate-float-slow",style:{animationDelay:"6s"}}),l.jsx("div",{className:"absolute top-[62%] right-[16%] h-1.5 w-1.5 rounded-full bg-primary/35 animate-float-drift-b hidden md:block",style:{animationDelay:"9s"}}),l.jsx("div",{className:"absolute inset-0 opacity-[0.4] [mask-image:linear-gradient(180deg,black,transparent_85%)]",style:{backgroundImage:"repeating-linear-gradient(to bottom, hsl(var(--foreground) / 0.02) 0px, hsl(var(--foreground) / 0.02) 1px, transparent 1px, transparent 4px)"}}),l.jsx("div",{className:"absolute inset-x-0 top-0 h-28 animate-scan-beam",style:{background:"linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.05) 50%, transparent 100%)"}})]})}function wb(e,t,n,r={}){const{stiffness:a=180,damping:o=20,mass:s=1}=r,i=d.useRef({x:0,y:0,vx:0,vy:0}),u=d.useRef({x:e,y:t}),c=d.useRef(null),f=d.useRef(null);d.useEffect(()=>{u.current={x:e,y:t}},[e,t]);const p=d.useCallback(h=>{f.current===null&&(f.current=h);const y=Math.min((h-f.current)/1e3,.064);f.current=h;const m=i.current,b=u.current,v=-a*(m.x-b.x),k=-a*(m.y-b.y),x=-o*m.vx,S=-o*m.vy,E=(v+x)/s,R=(k+S)/s;if(m.vx+=E*y,m.vy+=R*y,m.x+=m.vx*y,m.y+=m.vy*y,Math.abs(m.x-b.x)<.01&&Math.abs(m.y-b.y)<.01&&Math.abs(m.vx)<.01&&Math.abs(m.vy)<.01){m.x=b.x,m.y=b.y,m.vx=0,m.vy=0,n(m.x,m.y),c.current=null,f.current=null;return}n(m.x,m.y),c.current=requestAnimationFrame(p)},[a,o,s,n]),g=d.useCallback(()=>{c.current===null&&(f.current=null,c.current=requestAnimationFrame(p))},[p]);return d.useEffect(()=>{c.current===null&&(f.current=null,c.current=requestAnimationFrame(p))},[e,t,p]),d.useEffect(()=>()=>{c.current!==null&&cancelAnimationFrame(c.current)},[]),{start:g,setPosition:(h,y)=>{i.current.x=h,i.current.y=y}}}const vb=Tc,xb=Rc,Lc=d.forwardRef(({className:e,...t},n)=>l.jsx(Br,{ref:n,className:re("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));Lc.displayName=Br.displayName;const $c=d.forwardRef(({className:e,children:t,...n},r)=>l.jsxs(xb,{children:[l.jsx(Lc,{}),l.jsxs(zr,{ref:r,className:re("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,l.jsxs(_o,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[l.jsx(io,{className:"h-4 w-4"}),l.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));$c.displayName=zr.displayName;const Mc=({className:e,...t})=>l.jsx("div",{className:re("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});Mc.displayName="DialogHeader";const Fc=d.forwardRef(({className:e,...t},n)=>l.jsx(qr,{ref:n,className:re("text-lg font-semibold leading-none tracking-tight",e),...t}));Fc.displayName=qr.displayName;const Hc=d.forwardRef(({className:e,...t},n)=>l.jsx(Gr,{ref:n,className:re("text-sm text-muted-foreground",e),...t}));Hc.displayName=Gr.displayName;const kb=e=>[...e].sort((t,n)=>n.stargazers_count-t.stargazers_count);function Sb(e=!0){return Em({queryKey:["github-repos"],queryFn:async()=>{const{githubRepos:t}=await Q(async()=>{const{githubRepos:n}=await import("./githubRepos.generated-B4DM_mlZ.js");return{githubRepos:n}},[]);return kb(t)},staleTime:1/0,gcTime:1/0,enabled:e})}var Eb=d.createContext(void 0);function Tb(e){const t=d.useContext(Eb);return e||t||"ltr"}function Rb(e,[t,n]){return Math.min(n,Math.max(t,e))}function _b(e,t){return d.useReducer((n,r)=>t[n][r]??n,e)}var Ao="ScrollArea",[Uc,pw]=En(Ao),[Ab,De]=Uc(Ao),Bc=d.forwardRef((e,t)=>{const{__scopeScrollArea:n,type:r="hover",dir:a,scrollHideDelay:o=600,...s}=e,[i,u]=d.useState(null),[c,f]=d.useState(null),[p,g]=d.useState(null),[h,y]=d.useState(null),[m,b]=d.useState(null),[v,k]=d.useState(0),[x,S]=d.useState(0),[E,R]=d.useState(!1),[A,D]=d.useState(!1),C=de(t,L=>u(L)),O=Tb(a);return l.jsx(Ab,{scope:n,type:r,dir:O,scrollHideDelay:o,scrollArea:i,viewport:c,onViewportChange:f,content:p,onContentChange:g,scrollbarX:h,onScrollbarXChange:y,scrollbarXEnabled:E,onScrollbarXEnabledChange:R,scrollbarY:m,onScrollbarYChange:b,scrollbarYEnabled:A,onScrollbarYEnabledChange:D,onCornerWidthChange:k,onCornerHeightChange:S,children:l.jsx(oe.div,{dir:O,...s,ref:C,style:{position:"relative","--radix-scroll-area-corner-width":v+"px","--radix-scroll-area-corner-height":x+"px",...e.style}})})});Bc.displayName=Ao;var zc="ScrollAreaViewport",qc=d.forwardRef((e,t)=>{const{__scopeScrollArea:n,children:r,nonce:a,...o}=e,s=De(zc,n),i=d.useRef(null),u=de(t,i,s.onViewportChange);return l.jsxs(l.Fragment,{children:[l.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),l.jsx(oe.div,{"data-radix-scroll-area-viewport":"",...o,ref:u,style:{overflowX:s.scrollbarXEnabled?"scroll":"hidden",overflowY:s.scrollbarYEnabled?"scroll":"hidden",...e.style},children:l.jsx("div",{ref:s.onContentChange,style:{minWidth:"100%",display:"table"},children:r})})]})});qc.displayName=zc;var at="ScrollAreaScrollbar",Co=d.forwardRef((e,t)=>{const{forceMount:n,...r}=e,a=De(at,e.__scopeScrollArea),{onScrollbarXEnabledChange:o,onScrollbarYEnabledChange:s}=a,i=e.orientation==="horizontal";return d.useEffect(()=>(i?o(!0):s(!0),()=>{i?o(!1):s(!1)}),[i,o,s]),a.type==="hover"?l.jsx(Cb,{...r,ref:t,forceMount:n}):a.type==="scroll"?l.jsx(Pb,{...r,ref:t,forceMount:n}):a.type==="auto"?l.jsx(Gc,{...r,ref:t,forceMount:n}):a.type==="always"?l.jsx(Po,{...r,ref:t}):null});Co.displayName=at;var Cb=d.forwardRef((e,t)=>{const{forceMount:n,...r}=e,a=De(at,e.__scopeScrollArea),[o,s]=d.useState(!1);return d.useEffect(()=>{const i=a.scrollArea;let u=0;if(i){const c=()=>{window.clearTimeout(u),s(!0)},f=()=>{u=window.setTimeout(()=>s(!1),a.scrollHideDelay)};return i.addEventListener("pointerenter",c),i.addEventListener("pointerleave",f),()=>{window.clearTimeout(u),i.removeEventListener("pointerenter",c),i.removeEventListener("pointerleave",f)}}},[a.scrollArea,a.scrollHideDelay]),l.jsx(nt,{present:n||o,children:l.jsx(Gc,{"data-state":o?"visible":"hidden",...r,ref:t})})}),Pb=d.forwardRef((e,t)=>{const{forceMount:n,...r}=e,a=De(at,e.__scopeScrollArea),o=e.orientation==="horizontal",s=Jr(()=>u("SCROLL_END"),100),[i,u]=_b("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return d.useEffect(()=>{if(i==="idle"){const c=window.setTimeout(()=>u("HIDE"),a.scrollHideDelay);return()=>window.clearTimeout(c)}},[i,a.scrollHideDelay,u]),d.useEffect(()=>{const c=a.viewport,f=o?"scrollLeft":"scrollTop";if(c){let p=c[f];const g=()=>{const h=c[f];p!==h&&(u("SCROLL"),s()),p=h};return c.addEventListener("scroll",g),()=>c.removeEventListener("scroll",g)}},[a.viewport,o,u,s]),l.jsx(nt,{present:n||i!=="hidden",children:l.jsx(Po,{"data-state":i==="hidden"?"hidden":"visible",...r,ref:t,onPointerEnter:Z(e.onPointerEnter,()=>u("POINTER_ENTER")),onPointerLeave:Z(e.onPointerLeave,()=>u("POINTER_LEAVE"))})})}),Gc=d.forwardRef((e,t)=>{const n=De(at,e.__scopeScrollArea),{forceMount:r,...a}=e,[o,s]=d.useState(!1),i=e.orientation==="horizontal",u=Jr(()=>{if(n.viewport){const c=n.viewport.offsetWidth<n.viewport.scrollWidth,f=n.viewport.offsetHeight<n.viewport.scrollHeight;s(i?c:f)}},10);return Sn(n.viewport,u),Sn(n.content,u),l.jsx(nt,{present:r||o,children:l.jsx(Po,{"data-state":o?"visible":"hidden",...a,ref:t})})}),Po=d.forwardRef((e,t)=>{const{orientation:n="vertical",...r}=e,a=De(at,e.__scopeScrollArea),o=d.useRef(null),s=d.useRef(0),[i,u]=d.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),c=Yc(i.viewport,i.content),f={...r,sizes:i,onSizesChange:u,hasThumb:c>0&&c<1,onThumbChange:g=>o.current=g,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:g=>s.current=g};function p(g,h){return Lb(g,s.current,i,h)}return n==="horizontal"?l.jsx(Ob,{...f,ref:t,onThumbPositionChange:()=>{if(a.viewport&&o.current){const g=a.viewport.scrollLeft,h=Ms(g,i,a.dir);o.current.style.transform=`translate3d(${h}px, 0, 0)`}},onWheelScroll:g=>{a.viewport&&(a.viewport.scrollLeft=g)},onDragScroll:g=>{a.viewport&&(a.viewport.scrollLeft=p(g,a.dir))}}):n==="vertical"?l.jsx(Nb,{...f,ref:t,onThumbPositionChange:()=>{if(a.viewport&&o.current){const g=a.viewport.scrollTop,h=Ms(g,i);o.current.style.transform=`translate3d(0, ${h}px, 0)`}},onWheelScroll:g=>{a.viewport&&(a.viewport.scrollTop=g)},onDragScroll:g=>{a.viewport&&(a.viewport.scrollTop=p(g))}}):null}),Ob=d.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...a}=e,o=De(at,e.__scopeScrollArea),[s,i]=d.useState(),u=d.useRef(null),c=de(t,u,o.onScrollbarXChange);return d.useEffect(()=>{u.current&&i(getComputedStyle(u.current))},[u]),l.jsx(Vc,{"data-orientation":"horizontal",...a,ref:c,sizes:n,style:{bottom:0,left:o.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:o.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Vr(n)+"px",...e.style},onThumbPointerDown:f=>e.onThumbPointerDown(f.x),onDragScroll:f=>e.onDragScroll(f.x),onWheelScroll:(f,p)=>{if(o.viewport){const g=o.viewport.scrollLeft+f.deltaX;e.onWheelScroll(g),Xc(g,p)&&f.preventDefault()}},onResize:()=>{u.current&&o.viewport&&s&&r({content:o.viewport.scrollWidth,viewport:o.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:_r(s.paddingLeft),paddingEnd:_r(s.paddingRight)}})}})}),Nb=d.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...a}=e,o=De(at,e.__scopeScrollArea),[s,i]=d.useState(),u=d.useRef(null),c=de(t,u,o.onScrollbarYChange);return d.useEffect(()=>{u.current&&i(getComputedStyle(u.current))},[u]),l.jsx(Vc,{"data-orientation":"vertical",...a,ref:c,sizes:n,style:{top:0,right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Vr(n)+"px",...e.style},onThumbPointerDown:f=>e.onThumbPointerDown(f.y),onDragScroll:f=>e.onDragScroll(f.y),onWheelScroll:(f,p)=>{if(o.viewport){const g=o.viewport.scrollTop+f.deltaY;e.onWheelScroll(g),Xc(g,p)&&f.preventDefault()}},onResize:()=>{u.current&&o.viewport&&s&&r({content:o.viewport.scrollHeight,viewport:o.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:_r(s.paddingTop),paddingEnd:_r(s.paddingBottom)}})}})}),[Ib,Wc]=Uc(at),Vc=d.forwardRef((e,t)=>{const{__scopeScrollArea:n,sizes:r,hasThumb:a,onThumbChange:o,onThumbPointerUp:s,onThumbPointerDown:i,onThumbPositionChange:u,onDragScroll:c,onWheelScroll:f,onResize:p,...g}=e,h=De(at,n),[y,m]=d.useState(null),b=de(t,C=>m(C)),v=d.useRef(null),k=d.useRef(""),x=h.viewport,S=r.content-r.viewport,E=pe(f),R=pe(u),A=Jr(p,10);function D(C){if(v.current){const O=C.clientX-v.current.left,L=C.clientY-v.current.top;c({x:O,y:L})}}return d.useEffect(()=>{const C=O=>{const L=O.target;(y==null?void 0:y.contains(L))&&E(O,S)};return document.addEventListener("wheel",C,{passive:!1}),()=>document.removeEventListener("wheel",C,{passive:!1})},[x,y,S,E]),d.useEffect(R,[r,R]),Sn(y,A),Sn(h.content,A),l.jsx(Ib,{scope:n,scrollbar:y,hasThumb:a,onThumbChange:pe(o),onThumbPointerUp:pe(s),onThumbPositionChange:R,onThumbPointerDown:pe(i),children:l.jsx(oe.div,{...g,ref:b,style:{position:"absolute",...g.style},onPointerDown:Z(e.onPointerDown,C=>{C.button===0&&(C.target.setPointerCapture(C.pointerId),v.current=y.getBoundingClientRect(),k.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",h.viewport&&(h.viewport.style.scrollBehavior="auto"),D(C))}),onPointerMove:Z(e.onPointerMove,D),onPointerUp:Z(e.onPointerUp,C=>{const O=C.target;O.hasPointerCapture(C.pointerId)&&O.releasePointerCapture(C.pointerId),document.body.style.webkitUserSelect=k.current,h.viewport&&(h.viewport.style.scrollBehavior=""),v.current=null})})})}),Rr="ScrollAreaThumb",Jc=d.forwardRef((e,t)=>{const{forceMount:n,...r}=e,a=Wc(Rr,e.__scopeScrollArea);return l.jsx(nt,{present:n||a.hasThumb,children:l.jsx(Db,{ref:t,...r})})}),Db=d.forwardRef((e,t)=>{const{__scopeScrollArea:n,style:r,...a}=e,o=De(Rr,n),s=Wc(Rr,n),{onThumbPositionChange:i}=s,u=de(t,p=>s.onThumbChange(p)),c=d.useRef(void 0),f=Jr(()=>{c.current&&(c.current(),c.current=void 0)},100);return d.useEffect(()=>{const p=o.viewport;if(p){const g=()=>{if(f(),!c.current){const h=$b(p,i);c.current=h,i()}};return i(),p.addEventListener("scroll",g),()=>p.removeEventListener("scroll",g)}},[o.viewport,f,i]),l.jsx(oe.div,{"data-state":s.hasThumb?"visible":"hidden",...a,ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...r},onPointerDownCapture:Z(e.onPointerDownCapture,p=>{const h=p.target.getBoundingClientRect(),y=p.clientX-h.left,m=p.clientY-h.top;s.onThumbPointerDown({x:y,y:m})}),onPointerUp:Z(e.onPointerUp,s.onThumbPointerUp)})});Jc.displayName=Rr;var Oo="ScrollAreaCorner",Kc=d.forwardRef((e,t)=>{const n=De(Oo,e.__scopeScrollArea),r=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&r?l.jsx(jb,{...e,ref:t}):null});Kc.displayName=Oo;var jb=d.forwardRef((e,t)=>{const{__scopeScrollArea:n,...r}=e,a=De(Oo,n),[o,s]=d.useState(0),[i,u]=d.useState(0),c=!!(o&&i);return Sn(a.scrollbarX,()=>{var p;const f=((p=a.scrollbarX)==null?void 0:p.offsetHeight)||0;a.onCornerHeightChange(f),u(f)}),Sn(a.scrollbarY,()=>{var p;const f=((p=a.scrollbarY)==null?void 0:p.offsetWidth)||0;a.onCornerWidthChange(f),s(f)}),c?l.jsx(oe.div,{...r,ref:t,style:{width:o,height:i,position:"absolute",right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function _r(e){return e?parseInt(e,10):0}function Yc(e,t){const n=e/t;return isNaN(n)?0:n}function Vr(e){const t=Yc(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*t;return Math.max(r,18)}function Lb(e,t,n,r="ltr"){const a=Vr(n),o=a/2,s=t||o,i=a-s,u=n.scrollbar.paddingStart+s,c=n.scrollbar.size-n.scrollbar.paddingEnd-i,f=n.content-n.viewport,p=r==="ltr"?[0,f]:[f*-1,0];return Qc([u,c],p)(e)}function Ms(e,t,n="ltr"){const r=Vr(t),a=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,o=t.scrollbar.size-a,s=t.content-t.viewport,i=o-r,u=n==="ltr"?[0,s]:[s*-1,0],c=Rb(e,u);return Qc([0,s],[0,i])(c)}function Qc(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function Xc(e,t){return e>0&&e<t}var $b=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},r=0;return function a(){const o={left:e.scrollLeft,top:e.scrollTop},s=n.left!==o.left,i=n.top!==o.top;(s||i)&&t(),n=o,r=window.requestAnimationFrame(a)}(),()=>window.cancelAnimationFrame(r)};function Jr(e,t){const n=pe(e),r=d.useRef(0);return d.useEffect(()=>()=>window.clearTimeout(r.current),[]),d.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,t)},[n,t])}function Sn(e,t){const n=pe(t);et(()=>{let r=0;if(e){const a=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return a.observe(e),()=>{window.cancelAnimationFrame(r),a.unobserve(e)}}},[e,n])}var Zc=Bc,Mb=qc,Fb=Kc;const ed=d.forwardRef(({className:e,children:t,...n},r)=>l.jsxs(Zc,{ref:r,className:re("relative overflow-hidden",e),...n,children:[l.jsx(Mb,{className:"h-full w-full rounded-[inherit]",children:t}),l.jsx(td,{}),l.jsx(Fb,{})]}));ed.displayName=Zc.displayName;const td=d.forwardRef(({className:e,orientation:t="vertical",...n},r)=>l.jsx(Co,{ref:r,orientation:t,className:re("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...n,children:l.jsx(Jc,{className:"relative flex-1 rounded-full bg-border"})}));td.displayName=Co.displayName;const Hb={TypeScript:"bg-blue-500",JavaScript:"bg-yellow-400",Python:"bg-green-500",Dart:"bg-cyan-500",Java:"bg-orange-500",Kotlin:"bg-purple-500",Swift:"bg-orange-400",Go:"bg-cyan-400",Rust:"bg-orange-600",Ruby:"bg-red-500",PHP:"bg-indigo-400","C++":"bg-pink-500",C:"bg-gray-500",HTML:"bg-red-400",CSS:"bg-blue-400",Shell:"bg-green-400"};function Ub({repo:e}){const t=e.language?Hb[e.language]||"bg-muted-foreground":null,n=An();return l.jsxs("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"block p-4 rounded-sm border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-200 group",onClick:()=>n==null?void 0:n.capture("repo_clicked",{repo_name:e.name,repo_language:e.language,repo_stars:e.stargazers_count}),children:[l.jsxs("div",{className:"flex items-start justify-between gap-2",children:[l.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors truncate",children:e.name}),l.jsx(Du,{className:"h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"})]}),e.description&&l.jsx("p",{className:"text-sm text-muted-foreground mt-2 line-clamp-2",children:e.description}),l.jsxs("div",{className:"flex items-center gap-4 mt-3 text-sm text-muted-foreground",children:[t&&l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:`w-3 h-3 rounded-full ${t}`}),e.language]}),l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(Dr,{className:"h-4 w-4"}),e.stargazers_count]}),l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(ju,{className:"h-4 w-4"}),e.forks_count]})]}),e.topics&&e.topics.length>0&&l.jsxs("div",{className:"flex flex-wrap gap-1.5 mt-3",children:[e.topics.slice(0,4).map(r=>l.jsx("span",{className:"spec-tag",children:r},r)),e.topics.length>4&&l.jsxs("span",{className:"spec-tag",children:["+",e.topics.length-4]})]})]})}function ur(){return l.jsxs("div",{className:"p-4 rounded-lg border border-border bg-card/50",children:[l.jsx(It,{className:"h-5 w-32 mb-2"}),l.jsx(It,{className:"h-4 w-full mb-1"}),l.jsx(It,{className:"h-4 w-3/4 mb-3"}),l.jsxs("div",{className:"flex gap-4",children:[l.jsx(It,{className:"h-4 w-20"}),l.jsx(It,{className:"h-4 w-12"}),l.jsx(It,{className:"h-4 w-12"})]})]})}function Bb({open:e,onOpenChange:t}){const{data:n,isLoading:r}=Sb(e);return l.jsx(vb,{open:e,onOpenChange:t,children:l.jsxs($c,{className:"max-w-2xl max-h-[85vh] p-0",children:[l.jsxs(Mc,{className:"p-6 pb-0",children:[l.jsxs(Fc,{className:"flex items-center gap-2 font-heading text-2xl font-medium tracking-tight",children:[l.jsx(Dr,{className:"h-5 w-5 text-primary"}),"Public Repositories",n&&l.jsxs("span",{className:"text-sm font-normal text-muted-foreground",children:["(",n.length," repos)"]})]}),l.jsx(Hc,{className:"sr-only",children:"Browse my public GitHub repositories"})]}),l.jsx(ed,{className:"h-[60vh] px-6 pb-6",children:l.jsx("div",{className:"space-y-3 pt-4",children:r?l.jsxs(l.Fragment,{children:[l.jsx(ur,{}),l.jsx(ur,{}),l.jsx(ur,{}),l.jsx(ur,{})]}):n&&n.length>0?n.map(a=>l.jsx(Ub,{repo:a},a.id)):l.jsx("p",{className:"text-center text-muted-foreground py-8",children:"No repositories found"})})})]})})}function zb({className:e}){return l.jsx("svg",{viewBox:"0 0 24 24",className:e,fill:"currentColor","aria-hidden":"true",children:l.jsx("path",{d:"M17.36 20.2v-5.38h1.79V22H3v-7.18h1.79v5.38h12.57zM6.77 14.32l.37-1.76 8.79 1.85-.37 1.76-8.79-1.85zm1.16-4.21l.76-1.61 8.14 3.78-.76 1.62-8.14-3.79zm2.26-3.99l1.15-1.38 6.9 5.76-1.15 1.37-6.9-5.75zM14.64 2l5.51 7.41-1.45 1.07L13.19 3 14.64 2zM6.59 18.41v-1.8h8.98v1.8H6.59z"})})}const he={name:"Abdelrahman Saed",role:"Lead Mobile Engineer",currentTitle:"Lead Mobile Engineer",subtitle:"Mobile Architecture · Leadership · Scale",company:"iStoria",companyUrl:"https://istoria.app/en",location:"Cairo, Egypt / Remote",email:"me@bnsaed.com",avatarUrl:"https://avatars.githubusercontent.com/u/33700292?v=4&s=192",tagline:"I lead mobile architecture, platform engineering, and delivery. I help high-growth companies build offline-first systems, optimize CI/CD pipelines, and scale application performance — 7+ years of production mobile engineering, currently at 5M+ user scale."},qb={status:"open",label:"Available for hire",summary:"Open to Lead / Staff Mobile Engineering roles — full-time, fractional leadership, contract, or technical advisory. Remote worldwide, or hybrid / on-site across the Gulf & Egypt.",engagements:[{type:"Full-time",icon:"Briefcase",summary:"Lead / Staff Mobile Engineer",forWho:"For teams scaling a mobile app past its first million users.",outcome:"A mobile architecture and release process that ships weekly at 99.9% crash-free — owned end to end.",description:"Own mobile architecture, release governance, and a squad end to end — the way I do today at iStoria for a 5M+ user app."},{type:"Fractional Leadership",icon:"Clock",summary:"Part-time mobile lead",forWho:"For founders and teams without a senior mobile lead in the building.",outcome:"Architecture direction, a CI/CD pipeline, and a hiring bar — set in a few days a week, without a full-time hire.",description:"A few days a week: architecture reviews, CI/CD and release-engineering setup, and mentoring a growing Flutter team."},{type:"Contract",icon:"FileSignature",summary:"Fixed-scope delivery",forWho:"For a defined build, launch, or rescue with a real deadline.",outcome:"A shipped Flutter app, an untangled release pipeline, or hardened performance and crash-free stability — on a written scope.",description:"Ship a Flutter app, untangle a release pipeline, or harden performance, security, and crash-free stability for a fixed scope."},{type:"Technical Advisory",icon:"Compass",summary:"Architecture & release direction",forWho:"For teams that need senior direction, not another pair of hands.",outcome:"Confident architecture, release, and platform decisions — through reviews, RFC feedback, and a direct line to a mobile lead.",description:"Ongoing architecture reviews, release-strategy guidance, and RFC feedback on a light retainer — direction, not day-to-day implementation."}],workModes:["Remote (worldwide)","Hybrid / on-site (Gulf & Egypt)","Contract / freelance"],responseTime:"Replies within 24 hours",startDate:"Available on 2 weeks' notice",rate:"Discussed on call — scoped to engagement type"},Gb=7,X={github:"https://github.com/binSaed",linkedin:"https://www.linkedin.com/in/binsaed/",linkedinRecommendations:"https://www.linkedin.com/in/binsaed/details/recommendations/",youtube:"https://www.youtube.com/@binSaed",stackoverflow:"https://stackoverflow.com/users/11001850/abdelrahman-saed",pubdev:"https://pub.dev/publishers/bnsaed.com/packages",x:"https://x.com/bin____saed",facebook:"https://www.facebook.com/bnSaed0",f6s:"https://www.f6s.com/member/abdelrahman-saed",cv:"https://bnsaed.com/CV/cv.pdf",email:"mailto:me@bnsaed.com",calendly:"https://calendly.com/bnsaed/meet"},mw=["I build mobile systems that hold at scale. 7 years shipping production iOS and Android to 5M+ users — and the throughline is always the same: architecture that doesn't rot under growth, releases that ship on schedule, and teams that get sharper every sprint.","Today I lead a 4-engineer mobile squad at iStoria. I own the architecture, the release pipeline, and the engineering culture. We cut our release cycle from four weeks to one, held a 99.9% crash-free rate across 350+ releases, and built a platform where four engineers out-ship teams twice their size.","What I care about: making the right thing the default. Offline-first reads so no learner stares at a spinner. Failures as values so the app never crashes on an error path. Feature flags so deploy and release are separate decisions. The technology is the easy part — the hard part is building systems and teams where good decisions compound instead of decay."],gw=[{value:"5M+",label:"Users reached"},{value:"350+",label:"Production releases"},{value:"99.9%",label:"Crash-free rate"},{value:"7+",label:"Years shipping mobile"},{value:"7+",label:"Open-source packages"},{value:"900+",label:"PRs reviewed"}],Wb=[{value:"5M+",label:"Users"},{value:"99.9%",label:"Crash-Free Rate"},{value:"75%",label:"Faster Releases"}],bw=[{title:"Technical Direction",icon:"Compass",summary:"Architecture decisions, RFCs, technical strategy, engineering standards.",detail:"I own the architecture direction for a 50+ module, 140+ route Flutter codebase — decisions written down as RFCs and enforced through CI quality gates, so they outlive any single sprint."},{title:"Team Growth",icon:"Users",summary:"Mentoring, code reviews, hiring, delegation, raising engineering standards.",detail:"I lead a 4-engineer iOS/Android squad, set the hiring bar, and have reviewed 900+ PRs. Mentoring is deliberate: explain the reasoning, not just the fix, until engineers no longer need me."},{title:"Delivery",icon:"GitBranch",summary:"Release governance, CI/CD, feature flags, engineering velocity.",detail:"I own release governance end to end — trunk-based development, feature flags, and CI/CD pipelines that cut the release cycle 75% (four weeks to one) across 350+ production releases."},{title:"Product Partnership",icon:"Handshake",summary:"Balancing technical quality, product constraints, delivery speed, and long-term maintainability.",detail:"Engineering serves learning outcomes, not features for their own sake. I work with product to sequence what ships next — and to protect the architecture that keeps shipping fast."}],yw=[{title:"Fractional / Full-Time Leadership",icon:"Users",summary:"Drive technical strategy, mentor developers, enforce release governance, and architect scalable solutions for high-stakes products.",emphasis:["Architecture","Team leadership","Technical strategy","Mentoring","Delivery","Engineering standards"]},{title:"Architecture & Performance Audits",icon:"Gauge",summary:"Deep codebase audits, performance profiling, and actionable refactoring roadmaps for memory leaks and state management.",emphasis:["Architecture review","Performance profiling","Memory","Rendering","State management","Technical debt","Refactoring roadmap"]},{title:"End-to-End Product Delivery",icon:"Rocket",summary:"Build robust, scalable MVPs and enterprise apps with clean architecture and automated CI/CD pipelines baked in from day one.",emphasis:["Flutter","Clean architecture","CI/CD","Testing","Production readiness","Scalability"]}],ww=[{role:"Lead Mobile Engineer",company:"iStoria",companyUrl:"https://istoria.app/en/",context:"EdTech · English Language Learning",location:"Riyadh, Saudi Arabia (Hybrid)",period:"Jun 2025 – Present",stack:["Flutter","Dart","BLoC","Cubit","PowerSync","Drift","Firebase","Sentry","GitHub Actions","GraphQL"],highlights:["Lead a 4-engineer iOS/Android squad — architecture direction, hiring bar, release governance, and quarterly roadmaps for a 5M+ user base.","Architected a modular Flutter codebase with 50+ feature modules and 140+ routes, enforced through CI quality gates and code review.","Cut the release cycle 75% (4 weeks → 1) via trunk-based development, feature flags, and end-to-end CI/CD ownership.","Hardened production security end-to-end: PII masked in logs and Sentry, cleartext traffic disabled, and TLS certificate validation enforced."]},{role:"Founding Mobile Engineer",company:"iStoria",companyUrl:"https://istoria.app/en/",context:"EdTech · English Language Learning",location:"Riyadh, Saudi Arabia (Hybrid)",period:"Jan 2022 – Jun 2025 · 3 yrs 6 mos",stack:["Flutter","Dart","BLoC","Cubit","PowerSync","Drift","Codemagic","Firebase","RevenueCat","Adjust"],highlights:["Shipped flagship growth & AI features end-to-end: Leaderboard with social sharing, AI Read-with (speech recognition), and the iStro AI chat companion.","Designed offline-first infrastructure (PowerSync + Drift) — selective per-key sync, conflict resolution, and schema migration for millions of accounts.","Architected a cross-platform anti-piracy system (jailbreak/root/tamper detection + backend behavioral analysis) that auto-blocked 40,000+ abusive accounts.","Drove a sustained performance program: ~35% cold-start reduction, ~60% rendering gains, and ~20% memory reduction."]},{role:"Mobile Engineer",company:"Happy Trip",companyUrl:"https://www.linkedin.com/company/happytrip-ar",context:"Travel / Tourism Tech",location:"Cairo, Egypt",period:"Oct 2020 – Jan 2022 · 1 yr 4 mos",stack:["Flutter","Dart","REST","Firebase"],highlights:["Owned mobile delivery end-to-end across the Flutter team — task planning, code-review gates, and the release cadence for every ship.","Architected a networking SDK with multi-layer caching, request queueing, auto-retry, token refresh, and background parsing — cutting networking code 60%.","Delivered the company's first mobile platform (consumer booking, internal HR, POS) in 14 months, enabling a full business pivot."]},{role:"Mobile Engineer (Part-time)",company:"Tech Bay Portal",companyUrl:"",context:"Ride-hailing",location:"UAE (Remote)",period:"Feb 2021 – Oct 2021 · 9 mos",stack:["Flutter","Dart","Socket.io","Google Maps"],highlights:["Delivered real-time GPS tracking and live trip updates (Socket.io, Google Maps) across driver and rider apps.","Hardened the live-tracking pipeline against intermittent connectivity — buffering location updates locally and replaying on reconnect."]},{role:"Mobile Engineer",company:"FekraSoft Co",companyUrl:"https://www.linkedin.com/company/fekrasoft",context:"Software House",location:"Cairo, Egypt",period:"Aug 2019 – Sep 2020 · 1 yr 2 mos",stack:["Flutter","Dart","RxDart","Firebase"],highlights:["Led company-wide Flutter adoption as the first Flutter engineer, mentoring the Android team and authoring the shared coding standards still in use.","Shipped production e-commerce and document-management apps with barcode scanning and file-level encryption."]}],vw=[{category:"Mobile Architecture",icon:"Layers",items:["Clean Architecture","MVVM","SOLID","Modular Design","Dependency Injection","Design Systems"]},{category:"Flutter & State",icon:"Smartphone",items:["Flutter","Dart","BLoC","Cubit","RxDart","Reactive Programming","Either<Failure, T>"]},{category:"Data & Offline",icon:"Database",items:["PowerSync","Drift","SQLite","Offline-first","GraphQL","REST","Firebase"]},{category:"CI/CD & Release",icon:"GitBranch",items:["GitHub Actions","Codemagic","Fastlane","Trunk-based Development","Feature Flags","GrowthBook"]},{category:"Testing & Quality",icon:"ShieldCheck",items:["Unit Tests","Widget Tests","Maestro","Patrol","Code Review","Static Analysis"]},{category:"Performance",icon:"Gauge",items:["Cold Start Optimization","Memory Tuning","Rendering","Crash-free Stability","Sentry"]},{category:"Leadership",icon:"Users",items:["Architecture Ownership","Technical Strategy","RFCs","Hiring & Bar-raising","Mentoring","Release Governance"]},{category:"Monetization & Analytics",icon:"LineChart",items:["RevenueCat","Stripe","AdMob","PostHog","Adjust","A/B Testing"]}],Vb=[{title:"iStoria",category:"commercial",description:"Story-based English learning used by millions. A core mobile engineer since the founding — owning architecture, offline-first sync, and growth features.",image:"/project-images/istoria.webp",tags:["Flutter","Dart","Firebase","EdTech"],demo:"https://istoria.app/en/",users:5e6,caseStudySlug:"istoria"},{title:"Stickerawy",category:"commercial",description:"WhatsApp stickers app for Android, with 500K+ installs on Google Play.",tags:["Flutter","Android","WhatsApp"],demo:"https://play.google.com/store/apps/details?id=com.stickerawy.stickers",downloads:5e5},{title:"flutter_cached_pdfview",category:"open-source",description:"Native PDF viewer for iOS & Android with URL/asset/local caching, password-protected files, and gesture-based zoom.",image:"/project-images/flutter-cached-pdfview.webp",tags:["Flutter","Dart","PDF","iOS","Android"],github:"https://github.com/binSaed/flutter_cached_pdfview",demo:"https://pub.dev/packages/flutter_cached_pdfview",stars:134,likes:501,downloads:57e3,caseStudySlug:"flutter-cached-pdfview"},{title:"clipboard_plus",category:"open-source",description:"Flutter clipboard plugin with silent content-type detection on iOS — detects URLs, text, and images without triggering the paste permission dialog.",tags:["Flutter","iOS","Android","Plugin"],github:"https://github.com/binSaed/clipboard_plus",demo:"https://pub.dev/packages/clipboard_plus"},{title:"flutter_zoom_checker",category:"open-source",description:"iOS/Android display-zoom (UI scaling) detection plugin, working around a Flutter framework limitation (issue #95421).",tags:["Flutter","iOS","Android","Plugin"],github:"https://github.com/binSaed/flutter_zoom_checker",demo:"https://pub.dev/packages/flutter_zoom_checker"},{title:"dio_firebase_performance_plus",category:"open-source",description:"Dio interceptor that streams HTTP request metrics to Firebase Performance Monitoring.",tags:["Dart","Dio","Firebase"],github:"https://github.com/binSaed/dio_firebase_performance_plus"}],xw=[{name:"flutter/website",url:"https://github.com/flutter/website/pull/13639"},{name:"flutter/flutter",url:"https://github.com/flutter/flutter/pull/190166"},{name:"flutter/flutter",url:"https://github.com/flutter/flutter/pull/190163"},{name:"flutter/devtools",url:"https://github.com/flutter/devtools/pull/9925"},{name:"growthbook-flutter",url:"https://github.com/growthbook/growthbook-flutter/pull/143"},{name:"growthbook-flutter",url:"https://github.com/growthbook/growthbook-flutter/pull/139"},{name:"youtube_explode_dart",url:"https://github.com/Hexer10/youtube_explode_dart/pull/371"},{name:"dio_smart_retry",url:"https://github.com/rodion-m/dio_smart_retry/pull/36"}],Jb=[{name:"iStoria",url:"https://istoria.app/en/",users:"5M+ learners"},{name:"Happy Trip",url:"https://www.linkedin.com/company/happytrip-ar",users:"Travel platform"},{name:"FekraSoft",url:"https://www.linkedin.com/company/fekrasoft",users:"Software house"}],Fs=[{name:"Saber Son",title:"Flutter Developer · YouTuber",relationship:"Reported directly to Abdelrahman",date:"2026-06-03",initials:"SS",image:"/recommendations/saber-son.jpg",linkedin:"https://www.linkedin.com/in/saber-son-b100b4177/",company:"iStoria",quote:"One of the things I admire most about Abdelrahman is how supportive he is. Whenever I face a challenge, he never hesitates to put aside what he's doing and help me figure it out. What sets him apart is that he doesn't just solve the problem and move on — he takes the time to explain the solution, the reasoning behind it, and how to approach similar situations in the future. Thanks to his guidance, I've become much more confident and independent when tackling technical challenges."},{name:"AlHassan Balousha",title:"Senior Software Engineer · 9+ yrs scaling apps",relationship:"Worked with Abdelrahman on the same team",date:"2026-02-16",initials:"AB",image:"/recommendations/alhassan-balousha.jpg",linkedin:"https://www.linkedin.com/in/alhassan-balousha-9b7bb8114/",company:"iStoria",quote:`Abdelrahman is a highly accomplished Software Engineer and Tech Lead with strong executive-level technical leadership.

He brings a strategic vision to building large-scale mobile applications, with deep expertise in designing scalable architectures capable of serving millions of users with stability and high performance. He combines strong engineering depth with disciplined execution, ensuring long-term product sustainability and technical excellence.

What sets him apart: influential technical leadership and sound architectural decision-making; proven ability to build scalable, high-performance systems; effective team leadership and strong engineering culture; high productivity without compromising code quality or performance; and exceptional ability to solve complex problems under pressure.

Abdelrahman is a strategic technical asset to any organization seeking strong leadership and long-term product impact.`},{name:"Fady Mondy",title:"Engineering Manager at ID8 Media · Creator of TomatoPHP",relationship:"Worked with Abdelrahman on the same team",date:"2026-01-24",initials:"FM",image:"/recommendations/fady-mondy.jpg",linkedin:"https://www.linkedin.com/in/fadymondy/",company:"iStoria",quote:"Abdelrahman played a pivotal role in the success of the iStoria mobile platform. His leadership of the mobile team was defined by technical excellence and a relentless focus on user experience. He successfully navigated complex integrations and maintained a high velocity of feature releases without compromising on code quality. He is a proactive leader who anticipates challenges before they arise, making him an invaluable asset to any engineering department."},{name:"Mohammed Helaiwa",title:"Full Stack Engineer at iStoria",relationship:"Worked with Abdelrahman on the same team",date:"2026-01-17",initials:"MH",image:"/recommendations/mohammed-helaiwa.jpg",linkedin:"https://www.linkedin.com/in/me-helaiwa/",company:"iStoria",quote:`I've had the pleasure of working with Abdelrahman Saed, and I can confidently say he is one of the most reliable and skilled software engineers I've collaborated with. Abdelrahman combines deep technical expertise in Flutter with a strong understanding of building scalable, high-quality applications, especially in the EdTech domain.

What truly sets Abdelrahman apart is his ability to think beyond just code. He approaches problems with a product mindset, balances performance with maintainability, and consistently delivers clean, well-architected solutions. As a Lead Software Engineer, he demonstrates excellent leadership, mentoring teammates, setting high engineering standards, and driving projects forward with clarity and ownership.

Abdelrahman is proactive, detail-oriented, and always eager to improve both the product and the team around him. Any organization would be fortunate to have him on board, and I highly recommend him for any role requiring strong technical leadership, Flutter expertise, and a passion for building impactful software.`},{name:"Maher Al-Ghannam",title:"Senior QA Engineer · ISTQB-CTFL",relationship:"Worked with Abdelrahman on different teams",date:"2026-01-17",initials:"MA",image:"/recommendations/maher-al-ghannam.jpg",linkedin:"https://www.linkedin.com/in/maher-alghannam/",company:"iStoria",quote:"I highly recommend Abdelrahman as a Flutter Developer Team Lead. He has strong expertise in Flutter development and consistently delivers high-quality, well-structured mobile applications. Beyond his technical skills, he is a supportive and effective leader who encourages collaboration, guides the team through challenges, and ensures projects are delivered on time with excellent quality. Working with him has been a great experience."},{name:"Omar Sulieman",title:"Growth & Performance Marketer",relationship:"Worked with Abdelrahman on different teams",date:"2026-01-15",initials:"OS",image:"/recommendations/omar-sulieman.jpg",linkedin:"https://www.linkedin.com/in/omar-sulieman-3b7861217/",company:"iStoria",quote:`I've had the pleasure of working with Abdelrahman, and he is genuinely one of the strongest software engineers I've collaborated with.

He has deep hands-on expertise in Flutter, with a solid understanding of building scalable, high-performance mobile applications. What really sets him apart is his ability to think beyond implementation — he understands architecture, performance trade-offs, and long-term maintainability, which is critical for growing products.

In the EdTech space, Abdelrahman shows strong product awareness and a clear understanding of how technology should support learning outcomes, not just features. He's reliable, detail-oriented, and consistently delivers clean, well-structured code.

On top of his technical skills, he's professional, easy to work with, and communicates clearly across technical and non-technical teams. Any team looking for a senior Flutter engineer or a strong technical lead would be lucky to have him.

Highly recommended.`},{name:"Abdelrahman Shehata",title:"Lead Software Engineer · Mobile & AI",relationship:"Worked with Abdelrahman on the same team",date:"2025-11-16",initials:"AS",image:"/recommendations/abdelrahman-shehata.jpg",linkedin:"https://www.linkedin.com/in/abdelrahman-shehata-9a20b41b1/",company:"iStoria",quote:"As a Lead Software Engineer, one of his main strengths is problem solving in daily bugs. Highly recommended for lead tech companies, and you can rely on him for the highly advanced technologies."},{name:"Haitham Essam",title:"Senior Flutter Developer",relationship:"Reported directly to Abdelrahman",date:"2025-10-06",initials:"HE",image:"/recommendations/haitham-essam.jpg",linkedin:"https://www.linkedin.com/in/haitham-essam-b69b15332/",company:"iStoria",quote:`I had the pleasure of working with Abdelrahman Saed at iStoria. From day one, Abdelrahman impressed everyone with his professionalism, creativity, and problem-solving mindset. He was always the one who could turn a complex challenge into a smooth, well-structured solution — and did it all with a positive attitude that made working together genuinely enjoyable.

Beyond his technical skills, Abdelrahman is also a great teammate who supports others and spreads positive energy in the workplace. I'm truly glad to have had the chance to work with him, and I highly recommend him for any future opportunity.`},{name:"Islam Khalil",title:"Software Engineer · Flutter Developer",relationship:"Abdelrahman was senior but didn't manage directly",date:"2024-03-27",initials:"IK",image:"/recommendations/islam-khalil.jpg",linkedin:"https://www.linkedin.com/in/islam-khalil-919278b2/",company:"iStoria",quote:"I highly recommend Abdelrahman for his exceptional creativity, passion for assisting others, and remarkable proficiency in providing quick programming solutions, specifically in Dart and both Android and iOS app development. His expertise has been invaluable, and I have greatly benefited from his guidance."},{name:"Abdullah Ehab",title:"Senior Flutter Developer at Sigma EMEA",relationship:"Worked with Abdelrahman on the same team",date:"2022-05-30",initials:"AE",image:"/recommendations/abdullah-ehab.jpg",linkedin:"https://www.linkedin.com/in/abdullah-ehab/",company:"Happy Trip",quote:"Abdelrahman is an added value to any development team. He is a good team player, very dedicated, high ownership, motivated and focused on the target. Also a quick learner and fast troubleshooter."},{name:"Mohamed Reda",title:"AI Engineer in Healthcare",relationship:"Worked with Abdelrahman on the same team",date:"2020-11-05",initials:"MR",image:"/recommendations/mohamed-reda.jpg",linkedin:"https://www.linkedin.com/in/mohamed-r-870271bb/",company:"FekraSoft Co",quote:"Abdelrahman is one of the fastest learners I've worked with, and I'm absolutely confident that he would be a great fit for any company."}],Kb=[{title:"Building Unstoppable Offline-First Apps",event:"Flutter Night @ Swypex",eventUrl:"https://luma.com/kka8yaw7",role:"Speaker",venue:"Swypex · Smart Village",location:"Giza, Egypt",date:"2025-12-27",audience:"~50 mobile engineers",organizer:"Swypex",organizerUrl:"https://swypex.com",free:!0,summary:"How to design Flutter apps that keep working with no network — local-first data, sync strategies, conflict resolution, and event sourcing to rebuild state on reconnect.",topics:["Local-first apps","Offline-first","Synchronization","Event Sourcing","Conflict resolution"],image:"/speaking/flutter-night-swypex.webp",imageAlt:"Abdelrahman Saed presenting 'Building Unstoppable Offline-First Apps' to a full room at Flutter Night @ Swypex, Smart Village."}],Hs=[{q:"Who is Abdelrahman Saed?",a:"Abdelrahman Saed (also known as binSaed) is a Lead Mobile Engineer with 7+ years building production Flutter apps for iOS and Android that have reached 5M+ users. He currently leads the mobile squad at iStoria."},{q:"Is Abdelrahman Saed available for hire?",a:"Yes — he's open to Lead and Staff Mobile Engineer roles on a full-time, fractional, contract, or technical-advisory basis, working remotely worldwide or hybrid / on-site across the Gulf and Egypt. He can start on two weeks' notice. The fastest way to start a conversation is email (me@bnsaed.com) or booking a 20-minute call at calendly.com/bnsaed/meet. He typically replies within 24 hours."},{q:"What is Abdelrahman Saed's current role?",a:"He is the Lead Mobile Engineer at iStoria, an English-language learning app, where he owns mobile architecture, release governance, and delivery for a 50+ module Flutter codebase serving 5M+ users."},{q:"What technologies and skills does Abdelrahman Saed work with?",a:"Flutter and Dart with BLoC/Cubit and Clean Architecture; offline-first data (PowerSync, Drift); CI/CD and release engineering (GitHub Actions, Codemagic, Fastlane, feature flags); monetization (RevenueCat, Stripe, AdMob); analytics and engagement (Adjust, CleverTap, PostHog, GrowthBook); plus native iOS/Android integration (WidgetKit, deep linking, i18n/RTL)."},{q:"What are Abdelrahman Saed's notable projects?",a:"flutter_cached_pdfview, a popular open-source Flutter package for native PDF viewing with caching (134+ GitHub stars, 501+ pub.dev likes, 57k+ downloads); iStoria, a story-based English-learning app used by 5M+ learners; and Stickerawy, a WhatsApp stickers app with 500K+ installs. He publishes packages on pub.dev under bnsaed.com."},{q:"How can I contact Abdelrahman Saed?",a:"Email is the preferred channel: me@bnsaed.com. To schedule a call directly, book a meeting at calendly.com/bnsaed/meet. He is also reachable on GitHub (github.com/binSaed), LinkedIn (linkedin.com/in/binsaed), YouTube (youtube.com/@binSaed), and Stack Overflow."},{q:"Can AI agents and answer engines use content from this site?",a:"Yes for user-facing answers (ai-input=yes), but not for training AI models (ai-train=no), per the Content-Signal directives in robots.txt. Please attribute the author when quoting."}],kw=[Hs[1],{q:"Why is he open to new roles?",a:"He's spent over four years building one product — iStoria, from founding mobile engineer to leading the mobile squad behind 5M+ learners. He's proud of that run, and after four years on the same product and business he's looking for a fresh set of engineering challenges to sink into. Nothing more complicated than that."},{q:"What does an engagement look like?",a:"It starts with a 20-minute intro call to scope the work. Full-time and part-time roles follow your interview process; contract work gets a written scope, timeline, and deliverables before any commitment. Start dates are two weeks from acceptance — the notice period at his current role. Rate is discussed on the call and scoped to the engagement type."},{q:"Which time zones do you work with?",a:"Based in Cairo (UTC+2/+3) with comfortable overlap across European and Gulf hours, and used to async collaboration with distributed teams — remote worldwide is the default."},Hs[5]],Us="https://assets.calendly.com/assets/external/widget.css",Yb="https://assets.calendly.com/assets/external/widget.js";let jn=null;function nd(){if(document.querySelector(`link[href="${Us}"]`))return;const e=document.createElement("link");e.rel="stylesheet",e.href=Us,document.head.appendChild(e)}function rd(){return window.Calendly?Promise.resolve():jn||(jn=new Promise((e,t)=>{const n=document.createElement("script");n.src=Yb,n.async=!0,n.onload=()=>e(),n.onerror=()=>{jn=null,t(new Error("Failed to load Calendly widget"))},document.body.appendChild(n)}),jn)}function ya(){typeof document>"u"||(nd(),rd().catch(()=>{}))}async function No(e){var t;typeof document>"u"||(nd(),await rd(),(t=window.Calendly)==null||t.initPopupWidget({url:e}))}const Bs=["You can't catch me! 😆","Nice try! 👍","Too slow! 🏃‍♂️","Almost got me! 😏","Keep trying! 🎯","Haha, missed! 😂"],zs=["Hi! 👋","Hello! 😊","Hey there! 🙌","Welcome! ✨"];function Qb(){const{data:e,isLoading:t}=jc(),n=An(),{unlock:r}=Wr(),[a,o]=d.useState({x:0,y:0}),[s,i]=d.useState({x:0,y:0}),[u,c]=d.useState(!1),[f,p]=d.useState(""),g=d.useRef(null),h=d.useRef(0),y=d.useRef(0),[m,b]=d.useState(!1),v=()=>{n==null||n.capture("calendly_popup_opened",{source:"hero"}),No(X.calendly)},k=d.useRef(null),x=d.useRef(null),S=d.useRef(0),E=d.useCallback(async()=>{if(x.current)return x.current;if(!k.current)return null;const{default:T}=await Q(async()=>{const{default:M}=await import("./confetti.module-BVAT6wYb.js");return{default:M}},[]);return x.current=T.create(k.current,{resize:!0,useWorker:!0}),x.current},[]),R=d.useCallback((T,M)=>{o({x:T,y:M})},[]);wb(s.x,s.y,R,{stiffness:120,damping:14,mass:1}),d.useEffect(()=>()=>{var T;(T=x.current)==null||T.reset(),x.current=null},[]),d.useEffect(()=>{if(u){const T=setTimeout(()=>c(!1),2e3);return()=>clearTimeout(T)}},[u]);const A=d.useCallback(()=>{const T=Date.now();if(T-y.current<2500)return;y.current=T;const M=Bs[Math.floor(Math.random()*Bs.length)];p(M),c(!0),r("catch")},[r]),[D,C]=d.useState(!0);d.useEffect(()=>{if(typeof window<"u"&&typeof window.matchMedia=="function"){const T=window.matchMedia("(hover: hover) and (pointer: fine)");C(T.matches);const M=ee=>C(ee.matches);return T.addEventListener("change",M),()=>T.removeEventListener("change",M)}},[]);const O=!D,L=d.useCallback(async()=>{const T=Date.now();if(T-S.current<1e3)return;S.current=T;const M=await E();if(!M)return;const ee=1e3,G=Date.now()+ee,V={startVelocity:30,spread:360,ticks:60,colors:["#22d3ee","#00bcd4","#06b6d4","#67e8f9","#0e7490","#0b0e13"]},ie=(J,Ee)=>Math.random()*(Ee-J)+J,ye=setInterval(()=>{const J=G-Date.now();if(J<=0)return clearInterval(ye);const Ee=600*(J/ee);M({...V,particleCount:Ee,origin:{x:ie(.1,.3),y:Math.random()-.2}}),M({...V,particleCount:Ee,origin:{x:ie(.7,.9),y:Math.random()-.2}})},150)},[E]),N=d.useCallback(()=>{if(L(),c(!1),i({x:0,y:0}),O){const T=Date.now();if(T-y.current<2e3)return;y.current=T;const M=zs[Math.floor(Math.random()*zs.length)];p(M),c(!0)}},[O,L]),U=d.useCallback((T,M)=>{if(!g.current)return;const ee=g.current.getBoundingClientRect(),G=ee.left+ee.width/2,W=ee.top+ee.height/2,V=T-G,ie=M-W,ye=Math.sqrt(V*V+ie*ie),J=200,Ee=350;if(ye<J&&ye>0){h.current+=1,h.current>=3&&(A(),h.current=0);const ge=Math.atan2(ie,V),We=Math.pow((J-ye)/J,.6),Ve=-Math.cos(ge)*We*160,ut=-Math.sin(ge)*We*160,Te=280;i(Pt=>({x:Math.max(-Te,Math.min(Te,Pt.x+Ve*.25)),y:Math.max(-Te,Math.min(Te,Pt.y+ut*.25))}))}else ye>Ee&&i(ge=>Math.abs(ge.x)<1&&Math.abs(ge.y)<1?{x:0,y:0}:{x:ge.x*.85,y:ge.y*.85})},[A]),P=d.useCallback(()=>{i({x:0,y:0})},[]),q=d.useCallback(T=>{T.pointerType!=="touch"&&U(T.clientX,T.clientY)},[U]),F=d.useCallback(T=>{T.pointerType!=="touch"&&P()},[P]),B=d.useCallback(T=>{U(T.clientX,T.clientY)},[U]),j=d.useCallback(()=>{P()},[P]);return l.jsxs(l.Fragment,{children:[l.jsx("canvas",{ref:k,className:"fixed inset-0 pointer-events-none z-[9999]",style:{width:"100vw",height:"100vh"}}),l.jsxs("section",{className:"relative min-h-screen overflow-hidden hero-gradient flex items-center pt-28 pb-20",onPointerMove:q,onPointerLeave:F,onMouseMove:B,onMouseLeave:j,children:[l.jsx(yb,{}),l.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[l.jsxs("div",{className:"opacity-0 animate-fade-in",style:{animationDelay:"0.1s"},children:[l.jsxs("div",{className:"flex items-center justify-between gap-4",children:[l.jsx("span",{className:"kicker text-muted-foreground",children:"Abdelrahman Saed"}),l.jsxs("span",{className:"kicker text-primary inline-flex items-center gap-2",children:[l.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary"}),"Portfolio"]})]}),l.jsx("div",{className:"mt-3 h-px w-full bg-border origin-left animate-draw-rule"})]}),l.jsxs("div",{className:"mt-12 md:mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center",children:[l.jsxs("div",{className:"lg:col-span-7 order-1 lg:order-1",children:[l.jsxs("a",{href:"#work-with-me",className:"group mb-6 inline-flex items-center gap-2.5 border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 rounded-full text-emerald-700 dark:text-emerald-400 transition-colors hover:border-emerald-500/70 hover:bg-emerald-500/15 opacity-0 animate-fade-in",style:{animationDelay:"0.15s"},children:[l.jsxs("span",{className:"relative flex h-2 w-2",children:[l.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),l.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]}),l.jsx("span",{className:"text-sm font-medium",children:qb.label}),l.jsx("span",{className:"text-xs text-emerald-700 dark:text-emerald-300 hidden sm:inline",children:"Full-time · Fractional · Contract"})]}),l.jsx("p",{className:"kicker text-primary mb-5 opacity-0 animate-fade-in",style:{animationDelay:"0.2s"},children:he.subtitle}),l.jsxs("h1",{className:"font-heading font-extrabold leading-[1.02] tracking-[-0.02em] text-[clamp(2.25rem,5.5vw,4.25rem)] opacity-0 animate-reveal-clip text-balance",style:{animationDelay:"0.25s"},children:[l.jsxs("span",{className:"sr-only",children:[he.name," — "]}),l.jsx("span",{className:"text-primary",children:"Lead Mobile Engineer"})," building Flutter products at 5M+ user scale."]}),l.jsx("p",{className:"mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty opacity-0 animate-fade-in",style:{animationDelay:"0.4s"},children:he.tagline}),l.jsxs("div",{className:"mt-9 opacity-0 animate-fade-in",style:{animationDelay:"0.5s"},children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary"}),l.jsx("span",{className:"kicker text-muted-foreground",children:"Track record"})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:Wb.map(T=>l.jsxs("div",{className:"border-l-2 border-primary/20 pl-4",children:[l.jsx("div",{className:"font-heading text-3xl md:text-4xl leading-none tabular-nums",children:T.value}),l.jsx("div",{className:"text-sm text-muted-foreground mt-2",children:T.label})]},T.label))})]}),l.jsxs("div",{className:"mt-9 opacity-0 animate-fade-in",style:{animationDelay:"0.6s"},children:[l.jsxs("div",{className:"flex flex-wrap gap-3",children:[l.jsx(Ie,{variant:"hero",size:"lg",asChild:!0,className:"group",children:l.jsxs(Oe,{to:"/hire",onClick:()=>n==null?void 0:n.capture("hire_cta_clicked",{source:"hero"}),children:["Hire Me / Let’s Talk",l.jsx(pr,{className:"ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"})]})}),l.jsx(Ie,{variant:"heroOutline",size:"lg",asChild:!0,className:"group",children:l.jsxs(Oe,{to:"/case-studies/istoria/",onClick:()=>n==null?void 0:n.capture("case_study_cta_clicked",{source:"hero",slug:"istoria"}),children:["View Flagship Case Study",l.jsx(pr,{className:"ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"})]})}),l.jsx(Ie,{variant:"ghost",size:"lg",asChild:!0,className:"group border border-border",children:l.jsxs(Oe,{to:"/CV",onClick:()=>n==null?void 0:n.capture("cv_clicked",{source:"hero"}),children:[l.jsx(qi,{className:"h-4 w-4"}),"CV / Resume"]})})]}),l.jsxs("button",{type:"button",onClick:v,className:"group mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary",children:["Or book a 20-min call directly",l.jsx(pr,{className:"h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"})]})]}),l.jsxs("div",{className:"mt-9 opacity-0 animate-fade-in",style:{animationDelay:"0.7s"},children:[l.jsx("span",{className:"kicker text-muted-foreground block mb-3",children:"Connect"}),l.jsxs("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-3",children:[l.jsxs("a",{href:X.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",title:"GitHub",className:"text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"github"}),children:[l.jsx(Gi,{className:"h-4 w-4"})," GitHub"]}),l.jsxs("a",{href:X.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",title:"LinkedIn",className:"text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"linkedin"}),children:[l.jsx(Wi,{className:"h-4 w-4"})," LinkedIn"]}),l.jsxs("a",{href:X.youtube,target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",title:"YouTube",className:"text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"youtube"}),children:[l.jsx(Hu,{className:"h-4 w-4"})," YouTube"]}),l.jsxs("a",{href:X.email,"aria-label":"Email",title:"Email",className:"text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"email"}),children:[l.jsx(Vi,{className:"h-4 w-4"})," Email"]}),l.jsxs("a",{href:X.pubdev,target:"_blank",rel:"noopener noreferrer","aria-label":"pub.dev packages",title:"pub.dev packages",className:"text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"pubdev"}),children:[l.jsx(Ra,{className:"h-4 w-4"})," pub.dev"]}),l.jsxs("a",{href:X.stackoverflow,target:"_blank",rel:"noopener noreferrer","aria-label":"Stack Overflow",title:"Stack Overflow",className:"text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2",onClick:()=>n==null?void 0:n.capture("social_link_clicked",{platform:"stackoverflow"}),children:[l.jsx(zb,{className:"h-4 w-4"})," Stack Overflow"]}),t?l.jsx(It,{className:"h-8 w-36 rounded-full"}):(e==null?void 0:e.public_repos)!==void 0&&l.jsxs("button",{onClick:()=>{b(!0),r("repos"),n==null||n.capture("repos_modal_opened",{public_repos:e.public_repos})},className:"flex items-center gap-2 border border-border rounded-full px-3 py-1.5 text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors",children:[l.jsx(Dr,{className:"h-3.5 w-3.5"}),e.public_repos," Public Repos"]})]})]})]}),l.jsx("div",{className:"lg:col-span-5 order-2 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-scale-in",style:{animationDelay:"0.3s"},children:l.jsxs("div",{ref:g,className:"relative cursor-pointer",onPointerEnter:q,onPointerMove:q,onMouseEnter:B,onMouseMove:B,onClick:N,style:{transform:`translate3d(${a.x}px, ${a.y}px, 0)`,willChange:"transform"},children:[l.jsx("div",{className:`absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${O?"top-full mt-4":"-top-12"} ${u?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-2 scale-95 pointer-events-none"}`,children:l.jsx("div",{className:"bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm whitespace-nowrap shadow-lg",children:f})}),l.jsxs("div",{className:"relative w-[14rem] md:w-[18rem] bg-card border border-border rounded-[1.5rem] shadow-[var(--shadow-card)] overflow-hidden select-none",children:[l.jsxs("div",{className:"relative",children:[l.jsx("img",{src:"/avatar-256.webp",alt:he.name,width:256,height:256,loading:"eager",fetchpriority:"high",decoding:"async",draggable:!1,className:"relative w-full aspect-[4/5] object-cover bg-muted"}),l.jsx("div",{className:"absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card via-card/60 to-transparent"}),l.jsxs("div",{className:"absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur-sm px-2.5 py-1",children:[l.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary animate-pulse"}),l.jsx("span",{className:"kicker text-primary text-[0.6rem]",children:"LIVE"})]})]}),l.jsxs("div",{className:"px-5 py-4",children:[l.jsxs("div",{className:"flex items-center justify-between gap-2",children:[l.jsx("span",{className:"font-heading text-lg leading-tight",children:he.name}),l.jsx("span",{className:"text-xs text-muted-foreground whitespace-nowrap",children:he.location.split(" / ")[0]})]}),l.jsxs("div",{className:"flex items-center gap-2 mt-1.5",children:[l.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"}),l.jsxs("span",{className:"text-sm text-muted-foreground truncate",children:[he.currentTitle,l.jsx("span",{className:"text-muted-foreground",children:" @ "}),l.jsx("a",{href:he.companyUrl,target:"_blank",rel:"noopener noreferrer",className:"text-foreground underline decoration-border underline-offset-4 hover:text-primary hover:decoration-primary transition-colors",children:he.company})]})]})]})]})]})})]})]})]}),l.jsx(Bb,{open:m,onOpenChange:b})]})}function ad(e={}){const{once:t=!0,margin:n="-100px",threshold:r=0}=e,[a,o]=d.useState(!1),[s,i]=d.useState(null),u=c=>{i(c)};return d.useEffect(()=>{if(!s)return;if(typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){o(!0);return}if(typeof navigator<"u"&&navigator.webdriver){o(!0);return}if(typeof window<"u"){const f=s.getBoundingClientRect(),p=window.innerHeight||document.documentElement.clientHeight;if(f.top<p&&f.bottom>0&&(o(!0),t))return}const c=new IntersectionObserver(([f])=>{f.isIntersecting?(o(!0),t&&c.unobserve(s)):t||o(!1)},{rootMargin:n,threshold:r});return c.observe(s),()=>{c.unobserve(s)}},[s,t,n,r]),{ref:u,isInView:a}}function Xb(e){return e>=1e6?`${(e/1e6).toFixed(0)}M+`:e>=1e3?`${(e/1e3).toFixed(0)}K+`:`${e}+`}const od=Vb.filter(e=>e.category==="open-source"),qs=od.reduce((e,t)=>e+(t.downloads??0),0),Gs=od.reduce((e,t)=>e+(t.likes??0),0);function Zb(){var i;const{ref:e,isInView:t}=ad({margin:"-50px"}),{data:n}=jc(),r=Fs[0],o=((i=r.quote.split(/\n\s*\n/)[0])==null?void 0:i.replace(/\s*\n\s*/g," ").trim())??"",s=[(n==null?void 0:n.public_repos)!==void 0&&{icon:Dr,value:`${n.public_repos}`,label:"Public repos"},{icon:Ra,value:`${Gb}`,label:"pub.dev packages"},qs>0&&{icon:Ra,value:Xb(qs),label:"Package downloads"},Gs>0&&{icon:Fu,value:`${Gs}+`,label:"pub.dev likes"}].filter(Boolean);return l.jsx("section",{ref:e,className:"py-12 md:py-16 border-b border-border",children:l.jsxs("div",{className:"container mx-auto px-6",children:[l.jsxs("div",{className:`flex flex-col md:flex-row items-center gap-6 md:gap-10 reveal-hidden ${t?"animate-fade-in":""}`,children:[l.jsx("span",{className:"kicker text-muted-foreground shrink-0",children:"Shipped production apps for"}),l.jsx("div",{className:"flex flex-wrap items-center gap-6 md:gap-10",children:Jb.map(u=>l.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"group flex flex-col items-center",children:[l.jsx("span",{className:"font-heading text-lg md:text-xl font-bold tracking-tight text-muted-foreground transition-colors hover:text-foreground",children:u.name}),l.jsx("span",{className:"kicker text-[0.6rem] text-muted-foreground normal-case tracking-normal mt-0.5",children:u.users})]},u.name))})]}),l.jsxs("div",{className:"mt-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center",children:[l.jsxs("blockquote",{className:`lg:col-span-8 reveal-hidden ${t?"animate-fade-in-up":""}`,style:{animationDelay:"0.1s"},children:[l.jsxs("p",{className:"text-lg md:text-xl leading-relaxed text-foreground/90 text-pretty font-light",children:["“",o,"”"]}),l.jsxs("footer",{className:"mt-4 flex items-center gap-3",children:[l.jsxs("span",{className:"font-mono text-sm text-primary",children:["— ",r.name]}),l.jsx("span",{className:"text-sm text-muted-foreground",children:r.title}),l.jsxs("a",{href:X.linkedinRecommendations,target:"_blank",rel:"noopener noreferrer",className:"kicker text-[0.65rem] text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary ml-auto shrink-0",children:["+ ",Fs.length-1," more →"]})]})]}),l.jsx("div",{className:`lg:col-span-4 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border reveal-hidden ${t?"animate-fade-in-up":""}`,style:{animationDelay:"0.2s"},children:s.map(u=>l.jsxs("div",{className:"bg-background p-4 flex flex-col items-center text-center",children:[l.jsx(u.icon,{className:"h-4 w-4 text-primary mb-1.5"}),l.jsx("span",{className:"font-heading text-xl md:text-2xl leading-none tracking-tight tabular-nums",children:u.value}),l.jsx("span",{className:"kicker text-[0.6rem] text-muted-foreground mt-1.5 normal-case tracking-normal",children:u.label})]},u.label))})]})]})})}function ey({title:e,subtitle:t,variant:n="hire",primaryLabel:r,primaryTo:a,source:o="section_cta",compact:s=!1,className:i}){const{ref:u,isInView:c}=ad({margin:"-50px"}),f=An(),g={hire:{label:r??"Hire me",to:a??"/hire"},call:{label:r??"Book a 20-min call",action:()=>{f==null||f.capture("calendly_popup_opened",{source:o}),No(X.calendly)}},contact:{label:r??"Start a conversation",to:a??"#contact"}}[n];return l.jsxs("div",{ref:u,className:re("cta-panel text-center reveal-hidden",c&&"animate-fade-in-up",s?"px-6 py-8 md:py-10":"px-8 py-12 md:py-14",i),children:[l.jsx("h3",{className:"font-heading text-xl md:text-2xl tracking-tight text-balance",children:e}),t&&l.jsx("p",{className:"mt-3 max-w-lg mx-auto text-sm md:text-base leading-relaxed text-muted-foreground text-pretty",children:t}),l.jsxs("div",{className:"mt-6 flex flex-col sm:flex-row items-center justify-center gap-3",children:[n==="call"?l.jsxs("button",{type:"button",onClick:g.action,className:"inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-sm uppercase tracking-widest font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_26px_-6px_hsl(var(--primary)/0.6)]",children:[l.jsx(zi,{className:"h-4 w-4"}),g.label]}):l.jsxs(Oe,{to:g.to,onClick:()=>f==null?void 0:f.capture("section_cta_clicked",{source:o,variant:n}),className:"group inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-sm uppercase tracking-widest font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_26px_-6px_hsl(var(--primary)/0.6)]",children:[g.label,l.jsx(pr,{className:"h-4 w-4 transition-transform group-hover:translate-x-0.5"})]}),l.jsxs("a",{href:X.email,onClick:()=>f==null?void 0:f.capture("section_cta_clicked",{source:`${o}_email`,variant:"email"}),className:"inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-sm uppercase tracking-widest font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary",children:[l.jsx(Vi,{className:"h-4 w-4"}),"Email"]})]})]})}function sd(){const[e,t]=d.useState(!1);return d.useEffect(()=>{const n=()=>{const r=window.scrollY,a=window.innerHeight,o=r>a*.9,s=document.getElementById("contact"),i=!!s&&s.getBoundingClientRect().top<a*.85;t(o&&!i)};return n(),window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}},[]),e}function ty(){const[e,t]=d.useState(!1),n=sd();d.useEffect(()=>{const a=()=>{t(window.scrollY>400)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.jsx(Ie,{onClick:r,size:"icon",className:re("fixed right-6 z-50 rounded-sm shadow-[var(--shadow-card)] transition-all duration-300","bg-primary hover:bg-primary/90 text-primary-foreground","hover:-translate-y-0.5",n?"bottom-24":"bottom-6",e?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"),"aria-label":"Back to top",children:l.jsx(Iu,{className:"h-5 w-5"})})}function ny(){const e=An(),{unlock:t}=Wr(),n=sd(),r=d.useRef(!1);d.useEffect(()=>{if(!n||r.current)return;if(r.current=!0,typeof window.requestIdleCallback=="function"){const i=window.requestIdleCallback(()=>ya());return()=>{var u;return(u=window.cancelIdleCallback)==null?void 0:u.call(window,i)}}const s=window.setTimeout(()=>ya(),0);return()=>window.clearTimeout(s)},[n]);const a=()=>ya(),o=()=>{e==null||e.capture("calendly_popup_opened",{source:"sticky_bar"}),t("contact"),Ic(),No(X.calendly)};return l.jsx("div",{className:re("fixed inset-x-0 bottom-0 z-40 transition-all duration-500 ease-out","pb-[env(safe-area-inset-bottom)]",n?"translate-y-0 opacity-100":"translate-y-full opacity-0 pointer-events-none"),"aria-hidden":!n,children:l.jsx("div",{className:"glass-effect border-t border-border",children:l.jsxs("div",{className:"container mx-auto flex items-center justify-between gap-4 px-6 py-3",children:[l.jsxs("div",{className:"hidden min-w-0 sm:flex sm:flex-col",children:[l.jsx("span",{className:"kicker text-primary",children:"~/let's talk"}),l.jsx("span",{className:"truncate text-sm text-muted-foreground",children:"Got a project or role in mind?"})]}),l.jsxs("button",{type:"button",onClick:o,onPointerEnter:a,onFocus:a,tabIndex:n?0:-1,"aria-label":"Book a 20-minute call",className:re("group inline-flex min-h-[44px] w-full shrink-0 cursor-pointer items-center justify-center gap-2 sm:w-auto","bg-primary px-5 py-2.5 font-medium text-primary-foreground","transition-transform duration-200 hover:-translate-y-0.5","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",n&&"animate-pulse-glow [animation-duration:2s]"),children:[l.jsx(zi,{className:"h-4 w-4"}),"Book a call"]})]})})})}function ry(){const[e,t]=d.useState(0);return d.useEffect(()=>{const n=()=>{const r=document.documentElement.scrollHeight-window.innerHeight;t(r>0?Math.min(100,Math.max(0,window.scrollY/r*100)):0)};return window.addEventListener("scroll",n,{passive:!0}),n(),()=>window.removeEventListener("scroll",n)},[]),l.jsx("div",{className:"fixed top-0 left-0 right-0 z-[60] h-0.5","aria-hidden":"true",children:l.jsx("div",{className:"h-full bg-primary transition-[width] duration-150 ease-out",style:{width:`${e}%`}})})}function ay(){if(typeof window>"u")return"dark";const e=localStorage.getItem("theme");return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}let zn=ay();const Za=new Set;function Ws(e){zn=e,document.documentElement.classList.toggle("dark",e==="dark"),localStorage.setItem("theme",e),Za.forEach(t=>t())}typeof document<"u"&&(document.documentElement.classList.toggle("dark",zn==="dark"),localStorage.setItem("theme",zn));function oy(e){return Za.add(e),()=>Za.delete(e)}function sy(){return{theme:d.useSyncExternalStore(oy,()=>zn,()=>"dark"),toggleTheme:()=>Ws(zn==="dark"?"light":"dark"),setTheme:Ws}}const iy=d.lazy(()=>Q(()=>import("./ReconLayer-CoWv5khj.js"),__vite__mapDeps([0,1,2,3,4])).then(e=>({default:e.ReconLayer}))),ly=d.lazy(()=>Q(()=>import("./SelectedWorkSection-BbhjcShj.js"),__vite__mapDeps([5,1,6,7,8,9,10])).then(e=>({default:e.SelectedWorkSection}))),cy=d.lazy(()=>Q(()=>import("./HowILeadSection-xtom1rWJ.js"),__vite__mapDeps([11,7,12,13,14,1])).then(e=>({default:e.HowILeadSection}))),dy=d.lazy(()=>Q(()=>import("./ExperienceSection-C3qdXe-t.js"),__vite__mapDeps([15,1,7])).then(e=>({default:e.ExperienceSection}))),uy=d.lazy(()=>Q(()=>import("./OpenSourceSection-lCLH5LpS.js"),__vite__mapDeps([16,1,7,17,10,18])).then(e=>({default:e.OpenSourceSection}))),hy=d.lazy(()=>Q(()=>import("./ArticlesSection-C_-wDi3p.js"),__vite__mapDeps([19,1,7,20])).then(e=>({default:e.ArticlesSection}))),fy=d.lazy(()=>Q(()=>import("./SpeakingSection-DV7Ng3bk.js"),__vite__mapDeps([21,1,7,10])).then(e=>({default:e.SpeakingSection}))),py=d.lazy(()=>Q(()=>import("./RecommendationsSection-Ci4mpwS0.js"),__vite__mapDeps([22,1,7,10,3])).then(e=>({default:e.RecommendationsSection}))),my=d.lazy(()=>Q(()=>import("./AboutSection-GAD68hUI.js"),__vite__mapDeps([23,7,1,10,24])).then(e=>({default:e.AboutSection}))),gy=d.lazy(()=>Q(()=>import("./SkillsSection-Qt8YHlPK.js"),__vite__mapDeps([25,7,9,26,13,24,27,1])).then(e=>({default:e.SkillsSection}))),by=d.lazy(()=>Q(()=>import("./FAQSection-CwMiv6hK.js"),__vite__mapDeps([28,7,1])).then(e=>({default:e.FAQSection}))),yy=d.lazy(()=>Q(()=>import("./AvailabilitySection-B2aq8Y7h.js"),__vite__mapDeps([29,1,7,30,2,31,12])).then(e=>({default:e.AvailabilitySection}))),wy=d.lazy(()=>Q(()=>import("./ContactSection-CYbd2dvR.js"),__vite__mapDeps([32,1,7,10,24])).then(e=>({default:e.ContactSection}))),vy=d.lazy(()=>Q(()=>import("./Footer-DY6p0sCX.js"),__vite__mapDeps([33,1])).then(e=>({default:e.Footer}))),xy=()=>{const{theme:e,toggleTheme:t}=sy(),n=to(),[r,a]=d.useState(!1);return d.useEffect(()=>{const o=window,s=()=>a(!0);let i,u;return typeof o.requestIdleCallback=="function"?i=o.requestIdleCallback(s,{timeout:4e3}):u=window.setTimeout(s,2e3),()=>{var c;i!==void 0&&((c=o.cancelIdleCallback)==null||c.call(o,i)),u!==void 0&&window.clearTimeout(u)}},[]),d.useEffect(()=>{const s=setTimeout(()=>{if(n.hash){const i=document.querySelector(n.hash);i&&i.scrollIntoView({behavior:"smooth"})}},300);return()=>clearTimeout(s)},[n.hash,n.key]),l.jsxs("div",{className:"min-h-screen bg-background",children:[l.jsxs(Zm,{children:[l.jsx("title",{children:"Abdelrahman Saed | Lead Mobile Engineer & Flutter Architect"}),l.jsx("meta",{name:"description",content:"Abdelrahman Saed (binSaed) is a Lead Mobile Engineer & Flutter architect with 7+ years shipping production iOS & Android apps to 5M+ users. Available for hire."}),l.jsx("link",{rel:"canonical",href:"https://bnsaed.com/"}),l.jsx("meta",{property:"og:type",content:"website"}),l.jsx("meta",{property:"og:url",content:"https://bnsaed.com/"}),l.jsx("meta",{property:"og:title",content:"Abdelrahman Saed | Lead Mobile Engineer & Flutter Architect"}),l.jsx("meta",{property:"og:description",content:"Abdelrahman Saed (binSaed) is a Lead Mobile Engineer & Flutter architect with 7+ years shipping production iOS & Android apps to 5M+ users. Available for hire."}),l.jsx("meta",{property:"og:image",content:"https://bnsaed.com/og.png"}),l.jsx("meta",{property:"og:image:width",content:"1200"}),l.jsx("meta",{property:"og:image:height",content:"630"}),l.jsx("meta",{property:"og:image:alt",content:"Abdelrahman Saed — Lead Mobile Engineer & Flutter Architect. 5M+ users, 99.9% crash-free, 75% faster releases."}),l.jsx("meta",{property:"og:site_name",content:"Abdelrahman Saed"}),l.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),l.jsx("meta",{name:"twitter:url",content:"https://bnsaed.com/"}),l.jsx("meta",{name:"twitter:title",content:"Abdelrahman Saed | Lead Mobile Engineer & Flutter Architect"}),l.jsx("meta",{name:"twitter:description",content:"Lead Mobile Engineer & Flutter architect — 7+ years shipping production iOS & Android apps to 5M+ users. Available for hire — full-time, fractional, contract, or advisory."}),l.jsx("meta",{name:"twitter:image",content:"https://bnsaed.com/og.png"}),l.jsx("meta",{name:"twitter:image:alt",content:"Abdelrahman Saed — Lead Mobile Engineer & Flutter Architect. 5M+ users, 99.9% crash-free, 75% faster releases."})]}),l.jsx(ry,{}),l.jsx(gb,{theme:e,toggleTheme:t}),l.jsxs("main",{id:"main",tabIndex:-1,children:[l.jsx(Qb,{}),l.jsx(Zb,{}),l.jsxs(d.Suspense,{fallback:l.jsx("div",{className:"min-h-[200px]"}),children:[l.jsx(ly,{}),l.jsx(ey,{title:"Need this kind of engineering on your mobile app?",subtitle:"5M+ users shipped, 99.9% crash-free, weekly releases. Let's talk about your platform.",source:"after_work",className:"mt-12"}),l.jsx(cy,{}),l.jsx(dy,{}),l.jsx(uy,{}),l.jsx(hy,{}),l.jsx(fy,{}),l.jsx(py,{}),l.jsx(my,{}),l.jsx(gy,{}),l.jsx(by,{}),l.jsx(yy,{}),l.jsx(wy,{})]})]}),l.jsx(d.Suspense,{fallback:null,children:l.jsx(vy,{})}),l.jsx(ty,{}),l.jsx(ny,{}),r&&l.jsx(d.Suspense,{fallback:null,children:l.jsx(iy,{onToggleTheme:t})})]})},wa="a, button, input, textarea, select, label, [role='button'], .dossier-card";function ky(){const[e,t]=d.useState(!1),n=d.useRef(null);return d.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const r=window.matchMedia("(hover: hover) and (pointer: fine)"),a=window.matchMedia("(prefers-reduced-motion: reduce)"),o=()=>t(r.matches&&!a.matches);return o(),r.addEventListener("change",o),a.addEventListener("change",o),()=>{r.removeEventListener("change",o),a.removeEventListener("change",o)}},[]),d.useEffect(()=>{const r=n.current;if(!e||!r)return;let a=window.innerWidth/2,o=window.innerHeight/2,s=a,i=o,u=0,c=!1;const f=v=>{a=v.clientX,o=v.clientY,c||(c=!0,r.style.opacity="1")},p=()=>{c=!1,r.style.opacity="0"},g=()=>r.classList.add("is-down"),h=()=>r.classList.remove("is-down"),y=v=>{var k,x;(x=(k=v.target)==null?void 0:k.closest)!=null&&x.call(k,wa)&&r.classList.add("is-active")},m=v=>{var S,E;const k=v.target;if(!((S=k==null?void 0:k.closest)!=null&&S.call(k,wa)))return;const x=v.relatedTarget;(E=x==null?void 0:x.closest)!=null&&E.call(x,wa)||r.classList.remove("is-active")},b=()=>{s+=(a-s)*.18,i+=(o-i)*.18,r.style.transform=`translate3d(${s}px, ${i}px, 0) translate(-50%, -50%)`,u=requestAnimationFrame(b)};return u=requestAnimationFrame(b),window.addEventListener("pointermove",f,{passive:!0}),document.addEventListener("pointerdown",g),document.addEventListener("pointerup",h),document.addEventListener("mouseover",y),document.addEventListener("mouseout",m),document.addEventListener("mouseleave",p),window.addEventListener("blur",p),()=>{cancelAnimationFrame(u),window.removeEventListener("pointermove",f),document.removeEventListener("pointerdown",g),document.removeEventListener("pointerup",h),document.removeEventListener("mouseover",y),document.removeEventListener("mouseout",m),document.removeEventListener("mouseleave",p),window.removeEventListener("blur",p)}},[e]),e?l.jsx("div",{ref:n,className:"dossier-cursor",style:{opacity:0},"aria-hidden":"true"}):null}const Sy=[{slug:"flutter-cached-pdfview-guide",title:"Building a Cached PDF Viewer in Flutter",seoTitle:"Fast Flutter PDF Viewer from URL: Cached & Offline Guide",description:"How to load a PDF from a URL in Flutter with fast native rendering, on-device caching, and offline support — a flutter_cached_pdfview guide from its author.",date:"2024-01-15",dateModified:"2026-07-30",readTime:"7 min read",tags:["Flutter","Dart","PDF","Mobile"],caseStudySlug:"flutter-cached-pdfview",difficulty:"Intermediate",featured:!0,popular:!0},{slug:"github-actions-branch-protection-guardrails",title:"The repo that rejects my own pushes to master",description:"Two small GitHub Actions that stop accidental direct pushes to master and auto-restore build-breaking files — reversible by design, with an explicit escape hatch.",date:"2026-04-14",readTime:"6 min read",tags:["GitHub Actions","DevOps","CI/CD","Flutter"],difficulty:"Intermediate",popular:!0},{slug:"automate-pull-request-hygiene",title:"PRs that fill in their own paperwork (and a gate that won't let bad code merge)",seoTitle:"Automating PR Hygiene with GitHub Actions",description:"Separating the chores of code review from the judgment: auto-context on every PR, plus a quality gate that validates translations, runs the analyzer, and cleans up after itself.",date:"2026-04-21",dateModified:"2026-07-25",readTime:"6 min read",tags:["GitHub Actions","Developer Experience","CI/CD","Code Review"]},{slug:"sync-jira-with-github-prs",title:"Making Jira and GitHub agree without anyone updating both",description:"A branch-name regex and one REST call mirror Jira status, fix versions, and labels onto every PR — plus a Slow PR flag that surfaces finished work that is not shipping.",date:"2026-04-28",readTime:"7 min read",tags:["GitHub Actions","Jira","CI/CD","Developer Experience"]},{slug:"auto-rebase-and-detect-merge-conflicts",title:"Every merge to master quietly breaks other PRs. So I built a radar for it.",seoTitle:"Auto-Rebase Open PRs and Detect Merge Conflicts",description:"Two GitHub Actions workflows that rebase every open PR on each merge to master and route conflict alerts to the right author — so merge conflicts never sit unnoticed.",date:"2026-05-05",dateModified:"2026-07-25",readTime:"6 min read",tags:["GitHub Actions","Git","CI/CD","DevOps"]},{slug:"bot-that-resolves-merge-conflicts",title:"I let a bot resolve merge conflicts and push the fix. Here's how I made that safe.",seoTitle:"Letting a Bot Resolve Merge Conflicts Safely",description:"How to ship a genuinely dangerous automation safely — by shrinking its blast radius to one provably-safe case, working only in throwaway space, and failing closed on anything unexpected.",date:"2026-05-12",dateModified:"2026-07-25",readTime:"8 min read",tags:["GitHub Actions","Git","Automation","CI/CD"]},{slug:"automated-stale-branch-cleanup",title:"A repo that cleans up after itself — without deleting the wrong branch",seoTitle:"Automated Stale Branch Cleanup with GitHub Actions",description:"A GitHub Actions workflow that classifies and deletes stale branches safely — per-run cap, deferral window, and a full audit trail. No accidental deletes.",date:"2026-06-02",dateModified:"2026-07-25",readTime:"6 min read",tags:["GitHub Actions","Git","DevOps","Automation"]},{slug:"ai-weekly-engineering-reviews",title:"I built an AI that writes weekly engineering summaries. Then I had to decide whether I should.",seoTitle:"Should an AI Write Your Team's Weekly Summaries?",description:"Aggregating git and Jira into per-person weekly summaries with an LLM is a weekend project. Doing it responsibly — private, descriptive, transparent — is the actual work.",date:"2026-06-09",readTime:"8 min read",tags:["AI in Development","Engineering Leadership","Team Management","Automation"]},{slug:"managing-large-flutter-codebases",title:"Best Practices for Managing Large Flutter Codebases",description:"Hard-won lessons from scaling iStoria — a 220K+ line, 60+ module Flutter app serving 5M+ learners — into a codebase a small team can still ship weekly.",date:"2026-07-06",readTime:"9 min read",tags:["Flutter","Dart","Architecture","Scale"],caseStudySlug:"istoria",difficulty:"Advanced",featured:!0},{slug:"flutter-build-flavors-guide",title:"App Flavors in Flutter: One Codebase, Every Environment",description:"How to run local, staging, and production from a single Flutter codebase with build flavors — Dart entry points, typed per-flavor config, and the Android and iOS native wiring that makes it real.",date:"2026-07-06",readTime:"9 min read",tags:["Flutter","Dart","Build & Release","DevOps"],caseStudySlug:"istoria",difficulty:"Intermediate"},{slug:"offline-first-vs-local-first",title:"Offline-First vs Local-First: What's the Difference?",description:"Offline-first vs local-first: one is about working with no network, the other about who owns the canonical data — with examples from a 5M-user Flutter app.",date:"2026-07-07",readTime:"7 min read",tags:["Offline-first","Architecture","Flutter","PowerSync"],caseStudySlug:"offline-first-sync",difficulty:"Advanced"}],Ey=[{id:"self-driving-repo",name:"The Self-Driving Repo",description:"A CI/CD automation series: small GitHub Actions that run the boring, error-prone parts of engineering — guardrails, PR hygiene, a merge-conflict radar, safe cleanup — so releases stay calm.",slugs:["github-actions-branch-protection-guardrails","automate-pull-request-hygiene","sync-jira-with-github-prs","auto-rebase-and-detect-merge-conflicts","bot-that-resolves-merge-conflicts","automated-stale-branch-cleanup","ai-weekly-engineering-reviews"]}],Vt="https://bnsaed.com",id=`${Vt}/#person`,Ty=`${Vt}/#brand`,Ry=`${Vt}/#istoria`,_y="https://avatars.githubusercontent.com/u/33700292?v=4&s=512",va=e=>`${e}T00:00:00+00:00`,Ay={Egypt:"EG","Saudi Arabia":"SA","United Arab Emirates":"AE",UAE:"AE"},Cy=Object.freeze({"@type":"Person","@id":id,name:he.name,givenName:"Abdelrahman",familyName:"Saed",alternateName:["binSaed","bnsaed","Abdo Saed","AbdOo Saed","Abdelrahman Saeed","Abdulrahman Saed","Abdulrahman bin Saed","Abdulrahman bin Said","عبدالرحمن سعيد","عبد الرحمن سعيد","بن سعيد"],url:`${Vt}/`,image:_y,jobTitle:he.currentTitle,description:"Lead Mobile Engineer with 7+ years shipping production Flutter apps for iOS and Android to 5M+ users — Flutter, Dart, BLoC/Cubit, Clean Architecture, and release engineering.",disambiguatingDescription:"مهندس تطبيقات موبايل قيادي متخصص في تطوير تطبيقات Flutter لنظامي iOS و Android.",email:he.email,worksFor:{"@type":"Organization","@id":Ry,name:he.company,url:he.companyUrl},address:{"@type":"PostalAddress",addressLocality:"Cairo",addressCountry:"EG"},knowsLanguage:["English","Arabic"],sameAs:[X.github,X.linkedin,X.youtube,X.stackoverflow,X.pubdev,X.x,X.facebook,X.f6s]}),Py=Object.freeze({"@type":"Organization","@id":Ty,name:he.name,url:`${Vt}/`,logo:{"@type":"ImageObject",url:`${Vt}/icon-512.png`,width:512,height:512},sameAs:[X.github,X.linkedin,X.youtube,X.stackoverflow,X.pubdev,X.x,X.facebook,X.f6s]}),Sw=()=>Kb.map(e=>{const[t,n]=e.location.split(",").map(r=>r.trim());return{"@type":"Event",name:e.event,...e.summary&&{description:e.summary},startDate:va(e.date),endDate:va(e.date),eventAttendanceMode:"https://schema.org/OfflineEventAttendanceMode",eventStatus:"https://schema.org/EventScheduled",url:e.eventUrl,...e.image&&{image:`${Vt}${e.image}`},location:{"@type":"Place",name:e.venue,address:{"@type":"PostalAddress",addressLocality:t,addressCountry:Ay[n]||n}},...e.organizer&&{organizer:{"@type":"Organization",name:e.organizer,...e.organizerUrl&&{url:e.organizerUrl}}},...e.free&&{offers:{"@type":"Offer",price:"0",priceCurrency:"USD",availability:"https://schema.org/InStock",url:e.eventUrl,validFrom:va(e.date)}},performer:{"@id":id},workPerformed:{"@type":"CreativeWork",name:e.title,abstract:e.summary,about:e.topics}}});function Fe(e){const t=Sy.find(n=>n.slug===e);if(!t)throw new Error(`articleMeta.js has no entry for slug "${e}"`);return t}const Jt=[{...Fe("flutter-cached-pdfview-guide"),content:`
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
    `},{...Fe("github-actions-branch-protection-guardrails"),content:`
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
`},{...Fe("automate-pull-request-hygiene"),content:`
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
`},{...Fe("sync-jira-with-github-prs"),content:`
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
`},{...Fe("auto-rebase-and-detect-merge-conflicts"),content:`
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
`},{...Fe("bot-that-resolves-merge-conflicts"),content:`
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
`},{...Fe("automated-stale-branch-cleanup"),content:`
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
`},{...Fe("ai-weekly-engineering-reviews"),content:`
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
`},{...Fe("managing-large-flutter-codebases"),content:`
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
`},{...Fe("flutter-build-flavors-guide"),content:`
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
`},{...Fe("offline-first-vs-local-first"),content:`
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
`}];function Ar(e){return Jt.find(t=>t.slug===e)}const Vs={Flutter:"https://www.wikidata.org/wiki/Q39072787",Dart:"https://www.wikidata.org/wiki/Q406009",PDF:"https://www.wikidata.org/wiki/Q42332","GitHub Actions":"https://www.wikidata.org/wiki/Q97185096",DevOps:"https://www.wikidata.org/wiki/Q3025536","CI/CD":"https://www.wikidata.org/wiki/Q28136854",Jira:"https://www.wikidata.org/wiki/Q1359246",Git:"https://www.wikidata.org/wiki/Q186055","Code Review":"https://www.wikidata.org/wiki/Q1342704",Automation:"https://www.wikidata.org/wiki/Q184199","AI in Development":"https://www.wikidata.org/wiki/Q11660"};function Oy(e){const t=e.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/```[\s\S]*?```/g,"").split(`
`);for(let n of t){if(n=n.trim(),!n||/^#{1,6}\s/.test(n)||/^>/.test(n)||/^!\[/.test(n)||/^-{3,}$/.test(n)||/^[-*]\s/.test(n)||/^\*[^*].*\*$/.test(n)||(n=n.replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g,"$1").trim(),!n))continue;const r=n.match(/^.*?[.!?](?=\s|$)/);return(r?r[0]:n).trim()}return""}function Ny(e){return e.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/```[\s\S]*?```/g," ").replace(/!\[[^\]]*\]\([^)]*\)/g," ").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*]\s+/gm,"").replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g,"$1").replace(/\s+/g," ").trim()}const Js=e=>`${e}T00:00:00+00:00`;function Ew(e,t,n){const r=e.tags.filter(c=>Vs[c]).map(c=>({"@type":"Thing",name:c,sameAs:Vs[c]})),a=Ny(e.content),o=`${e.title} ${e.description} ${a}`.toLowerCase(),s=r.filter(c=>o.includes(c.name.toLowerCase())),i=a?a.split(/\s+/).filter(Boolean).length:0,u=Oy(e.content);return{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,image:n,inLanguage:"en",datePublished:Js(e.date),dateModified:Js(e.dateModified??e.date),author:Cy,publisher:Py,...r.length?{about:r}:{},...s.length?{mentions:s}:{},...i?{wordCount:i}:{},...u?{articleBody:u}:{},mainEntityOfPage:{"@type":"WebPage","@id":t},url:t,keywords:e.tags.join(", ")}}const ld=Ey;function Iy(e){return ld.find(t=>t.slugs.includes(e))}function Tw(e){const t=Iy(e);if(!t)return;const n=t.slugs.indexOf(e),r=n>0?t.slugs[n-1]:void 0,a=n<t.slugs.length-1?t.slugs[n+1]:void 0;return{series:t,index:n,total:t.slugs.length,prev:r?Ar(r):void 0,next:a?Ar(a):void 0}}function Rw(){const e=new Set(ld.flatMap(t=>t.slugs));return Jt.filter(t=>!e.has(t.slug)).sort((t,n)=>n.date.localeCompare(t.date))}function _w(e,t=2){const n=Ar(e);if(!n)return[];const r=new Set(n.tags);return Jt.filter(a=>a.slug!==e).map(a=>({a,shared:a.tags.filter(o=>r.has(o)).length})).filter(a=>a.shared>0).sort((a,o)=>o.shared-a.shared||o.a.date.localeCompare(a.a.date)).slice(0,t).map(a=>a.a)}function Aw(e){const t=[...Jt].sort((r,a)=>a.date.localeCompare(r.date)),n=t.findIndex(r=>r.slug===e);return n===-1?{}:{next:n>0?t[n-1]:void 0,prev:n<t.length-1?t[n+1]:void 0}}const Dy=["flutter-cached-pdfview-guide","bot-that-resolves-merge-conflicts","ai-weekly-engineering-reviews","automate-pull-request-hygiene"];function Cw(e=4){const t=Dy.map(a=>Ar(a)).filter(a=>!!a);if(t.length>=e)return t.slice(0,e);const n=new Set(t.map(a=>a.slug)),r=[...Jt].sort((a,o)=>o.date.localeCompare(a.date)).filter(a=>!n.has(a.slug));return[...t,...r].slice(0,e)}const Ks=["home","about","projects","articles","skills","contact"],ce={owner:he.name,alias:"binSaed",email:he.email,url:"https://bnsaed.com",github:X.github,linkedin:X.linkedin,youtube:X.youtube,cv:X.cv};function jy(){const e=di();d.useEffect(()=>{if(typeof navigator>"u"||!navigator.modelContext)return;const t=navigator.modelContext,n=[],r=[{name:"navigate_to_section",title:"Scroll to a section",description:"Navigate the homepage to one of its anchor sections: home, about, projects, articles, skills, or contact.",inputSchema:{type:"object",properties:{section:{type:"string",enum:Ks,description:"The section anchor to scroll to."}},required:["section"]},execute:async a=>{const o=String(a.section??"");return Ks.includes(o)?(e(o==="home"?"/":`/#${o}`),{ok:!0,section:o}):{ok:!1,error:`Unknown section: ${o}`}}},{name:"list_articles",title:"List published articles",description:"Return the slug, title, description, date, and tags for every article published on bnsaed.com.",inputSchema:{type:"object",properties:{}},execute:async()=>Jt.map(a=>({slug:a.slug,title:a.title,description:a.description,date:a.date,readTime:a.readTime,tags:a.tags,url:`${ce.url}/articles/${a.slug}/`}))},{name:"open_article",title:"Open an article",description:"Navigate to a specific article by slug. Use list_articles first to discover valid slugs.",inputSchema:{type:"object",properties:{slug:{type:"string",description:"Article slug, e.g. 'flutter-cached-pdfview-guide'."}},required:["slug"]},execute:async a=>{const o=String(a.slug??""),s=Jt.find(i=>i.slug===o);return s?(e(`/articles/${o}/`),{ok:!0,url:`${ce.url}/articles/${o}/`,title:s.title}):{ok:!1,error:`No article with slug '${o}'`}}},{name:"get_contact_info",title:"Get contact details",description:"Return the preferred ways to contact Abdelrahman Saed (email, GitHub, LinkedIn, contact form URL).",inputSchema:{type:"object",properties:{}},execute:async()=>({name:ce.owner,alias:ce.alias,email:ce.email,mailto:`mailto:${ce.email}`,contactForm:`${ce.url}/#contact`,github:ce.github,linkedin:ce.linkedin,youtube:ce.youtube,preferredChannel:"email"})},{name:"compose_email",title:"Open a pre-filled email",description:"Open the user's mail client with a pre-filled email to Abdelrahman Saed. Use this instead of submitting the contact form programmatically.",inputSchema:{type:"object",properties:{subject:{type:"string",description:"Email subject line."},body:{type:"string",description:"Email body, plain text."}},required:["subject"]},execute:async a=>{const o=encodeURIComponent(String(a.subject??"")),s=encodeURIComponent(String(a.body??"")),i=`mailto:${ce.email}?subject=${o}&body=${s}`;return window.location.href=i,{ok:!0,mailto:i}}},{name:"download_cv",title:"Download the CV",description:"Open the PDF CV of Abdelrahman Saed in a new tab.",inputSchema:{type:"object",properties:{}},execute:async()=>(window.open(ce.cv,"_blank","noopener,noreferrer"),{ok:!0,url:ce.cv})},{name:"get_site_metadata",title:"Get site metadata",description:"Return identity and discovery metadata for bnsaed.com: owner, URL, well-known endpoints, and current page.",inputSchema:{type:"object",properties:{}},execute:async()=>({owner:ce.owner,alias:ce.alias,url:ce.url,currentPath:window.location.pathname+window.location.hash,wellKnown:{apiCatalog:`${ce.url}/.well-known/api-catalog`,agentSkills:`${ce.url}/.well-known/agent-skills/index.json`,mcpServerCard:`${ce.url}/.well-known/mcp/server-card.json`,robots:`${ce.url}/robots.txt`,sitemap:`${ce.url}/sitemap.xml`},contentSignal:{search:"yes","ai-input":"yes","ai-train":"no"}})}];try{for(const a of r){const o=t.registerTool(a);o&&typeof o.unregister=="function"&&n.push(o)}}catch{}return()=>{for(const a of n)try{a.unregister()}catch{}}},[e])}const Ly=d.lazy(()=>Q(()=>import("./ArticlePage-BQ8NMGwj.js"),__vite__mapDeps([34,1,6,35,4,36,33,37,38,20,31]))),$y=d.lazy(()=>Q(()=>import("./ArticlesPage-DJn5LMNR.js"),__vite__mapDeps([39,1,33,38,31,20]))),My=d.lazy(()=>Q(()=>import("./CVPage-D-1udwKy.js"),__vite__mapDeps([40,33,1,18]))),Fy=d.lazy(()=>Q(()=>import("./RecommendationsPage-CaYPJXRr.js"),__vite__mapDeps([41,1,33,22,7,10,3,38]))),Hy=d.lazy(()=>Q(()=>import("./SpeakingPage-CzOiiuBI.js"),__vite__mapDeps([42,1,33,21,7,10,38]))),Uy=d.lazy(()=>Q(()=>import("./ProjectsPage-C6yRYLl5.js"),__vite__mapDeps([43,1,33,17,10,18,38]))),By=d.lazy(()=>Q(()=>import("./CaseStudiesPage-CVvKImTl.js"),__vite__mapDeps([44,1,33,8,6,9,38]))),zy=d.lazy(()=>Q(()=>import("./CaseStudyPage-ereentXJ.js"),__vite__mapDeps([45,1,6,33,35,4,36,37,38,2,26,31]))),qy=d.lazy(()=>Q(()=>import("./HirePage-C5GgpdDa.js"),__vite__mapDeps([46,1,33,30,2,31,12,22,7,10,3,28,38,27]))),Gy=d.lazy(()=>Q(()=>import("./AboutPage-DuLg4OnW.js"),__vite__mapDeps([47,1,33,7,38,12,13,14]))),Wy=d.lazy(()=>Q(()=>import("./FlutterHubPage-DDM9B6oC.js"),__vite__mapDeps([48,1,33,49,50,51,52,38,12]))),Vy=d.lazy(()=>Q(()=>import("./GlossaryTermPage-BxYp3gPv.js"),__vite__mapDeps([53,1,33,49,50,6,35,4,54,38]))),Jy=d.lazy(()=>Q(()=>import("./ComparisonPage-CH4B8h3N.js"),__vite__mapDeps([55,1,33,50,49,35,4,54,38]))),Ky=d.lazy(()=>Q(()=>import("./PackageDirectoryPage-CCRJgkfu.js"),__vite__mapDeps([56,1,33,51,35,4,54,38]))),Yy=d.lazy(()=>Q(()=>import("./ArchitectureGuidePage-CCRcMqHg.js"),__vite__mapDeps([57,1,33,52,49,6,35,4,54,38]))),Qy=d.lazy(()=>Q(()=>import("./NotFound-C3SGJZ4V.js"),__vite__mapDeps([58,1,36,38]))),Xy=new im,Zy=()=>(jy(),null),ew=()=>{const{pathname:e,hash:t}=to();return d.useLayoutEffect(()=>{t||window.scrollTo(0,0)},[e,t]),null},tw=()=>l.jsx(Ql,{children:l.jsx(hm,{client:Xy,children:l.jsxs(Bp,{children:[l.jsx("a",{href:"#main",className:"sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:border focus:border-primary focus:bg-background focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-primary focus:outline-none",children:"Skip to content"}),l.jsx("div",{className:"grain-overlay","aria-hidden":"true"}),l.jsx(ky,{}),l.jsx(kh,{}),l.jsx(ef,{}),l.jsx(xd,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:l.jsxs(pb,{children:[l.jsx(Zy,{}),l.jsx(ew,{}),l.jsx(d.Suspense,{fallback:l.jsx("div",{className:"min-h-screen bg-background"}),children:l.jsxs(kd,{children:[l.jsx(ue,{path:"/",element:l.jsx(xy,{})}),l.jsx(ue,{path:"/articles",element:l.jsx($y,{})}),l.jsx(ue,{path:"/articles/:slug",element:l.jsx(Ly,{})}),l.jsx(ue,{path:"/CV",element:l.jsx(My,{})}),l.jsx(ue,{path:"/recommendations",element:l.jsx(Fy,{})}),l.jsx(ue,{path:"/speaking",element:l.jsx(Hy,{})}),l.jsx(ue,{path:"/projects",element:l.jsx(Uy,{})}),l.jsx(ue,{path:"/case-studies",element:l.jsx(By,{})}),l.jsx(ue,{path:"/case-studies/:slug",element:l.jsx(zy,{})}),l.jsx(ue,{path:"/hire",element:l.jsx(qy,{})}),l.jsx(ue,{path:"/about",element:l.jsx(Gy,{})}),l.jsx(ue,{path:"/flutter",element:l.jsx(Wy,{})}),l.jsx(ue,{path:"/flutter/glossary/:slug",element:l.jsx(Vy,{})}),l.jsx(ue,{path:"/flutter/compare/:slug",element:l.jsx(Jy,{})}),l.jsx(ue,{path:"/flutter/best/:slug",element:l.jsx(Ky,{})}),l.jsx(ue,{path:"/flutter/guides/:slug",element:l.jsx(Yy,{})}),l.jsx(ue,{path:"*",element:l.jsx(Qy,{})})]})})]})})]})})}),cd=document.getElementById("root"),Ys=()=>fi(cd).render(l.jsx(tw,{}));if(cd.hasChildNodes()){let e=!1;const t=()=>{e||(e=!0,performance.now()>1500&&document.documentElement.classList.add("skip-entrance"),Ys())},n=()=>requestAnimationFrame(()=>requestAnimationFrame(t)),r=a=>{try{return PerformanceObserver.supportedEntryTypes.includes(a)}catch{return!1}};if(document.visibilityState==="hidden")t();else{const a=window.setTimeout(t,4e3),o=()=>{window.clearTimeout(a),n()};document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(window.clearTimeout(a),t())},{once:!0});const s=r("largest-contentful-paint")?"largest-contentful-paint":r("paint")?"paint":null;if(s===null)o();else try{const i=new PerformanceObserver(u=>{s==="paint"&&!u.getEntries().some(c=>c.name==="first-contentful-paint")||(i.disconnect(),o())});i.observe({type:s,buffered:!0})}catch{o()}}}else Ys();function Qs(){Q(async()=>{const{default:e}=await import("./module-ChzsIv-w.js");return{default:e}},[]).then(({default:e})=>{e.init("phc_tLT5g9tearUJgGqbyVABjDtBFcFswbb9Brps3U2B8mVc",{api_host:"https://custom.bnsaed.com",ui_host:"https://eu.posthog.com",defaults:"2026-05-30",disable_surveys:!0}),tg(e)})}const Xs=window;typeof Xs.requestIdleCallback=="function"?Xs.requestIdleCallback(Qs,{timeout:4e3}):window.setTimeout(Qs,2e3);export{$c as $,pr as A,Ie as B,zi as C,Vb as D,xw as E,ad as F,Gi as G,Zm as H,Du as I,yw as J,kw as K,Wi as L,Vi as M,Hs as N,mw as O,Ra as P,bw as Q,aa as R,Dr as S,oe as T,Fu as U,pi as V,Tc as W,Rc as X,Br as Y,zr as Z,vb as _,hb as a,Wr as a0,qi as a1,Hu as a2,$u as a3,Ic as a4,sw as a5,sd as a6,fb as a7,io as a8,Mc as a9,Fc as aa,Hc as ab,fw as ac,Py as ad,ww as ae,Gb as af,Cw as ag,vw as ah,zb as ai,gb as b,me as c,Tw as d,_w as e,Aw as f,Ar as g,Ew as h,he as i,l as j,qb as k,X as l,re as m,An as n,Rw as o,Jt as p,ld as q,gw as r,ow as s,Fs as t,sy as u,Cy as v,Sw as w,id as x,Kb as y,No as z};
