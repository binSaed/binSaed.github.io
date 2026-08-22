import{c as i,D as c,j as e,T as o,U as d}from"./index-BfMFGYMf.js";import{S as l}from"./SectionHeader-CuGH7QrT.js";import{L as m}from"./layers-Cd4pJzmL.js";import{S as p}from"./smartphone-D0VtIpyO.js";import{S as h}from"./shield-check--KWGeeaR.js";import"./react-vendor-B2qPguBR.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=i("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=i("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=i("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=i("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=i("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]),f={Layers:m,Smartphone:p,Database:k,GitBranch:g,ShieldCheck:h,Gauge:u,Users:d,LineChart:x};function j({skill:a,index:s,inView:r}){const t=f[a.icon]??y;return e.jsxs("div",{className:`dossier-card p-6 md:p-7 reveal-hidden ${r?"animate-fade-in-up":""}`,style:{animationDelay:`${.1+s*.07}s`},children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{"aria-hidden":"true",className:"font-mono text-xs text-muted-foreground/50",children:String(s+1).padStart(2,"0")}),e.jsx(t,{className:"h-[1.15rem] w-[1.15rem] text-primary shrink-0"}),e.jsx("h3",{className:"kicker text-foreground/90",children:a.category})]}),e.jsx("div",{className:"mt-4 mb-5 h-px w-full bg-border","aria-hidden":"true"}),e.jsx("div",{className:"flex flex-wrap gap-x-4 gap-y-2.5",children:a.items.map(n=>e.jsx("span",{className:"spec-tag",children:n},n))})]})}function L(){const{ref:a,isInView:s}=c({margin:"-100px"});return e.jsx("section",{id:"skills",className:"py-14 md:py-20 bg-muted/20",ref:a,children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(l,{index:"08",label:"Stack",inView:s,title:e.jsxs(e.Fragment,{children:["The toolkit behind ",e.jsx("span",{className:"bg-primary/20 text-foreground px-1.5 box-decoration-clone",children:"the work."})]}),description:"The mobile, architecture, and delivery stack I use to ship and run production apps."}),e.jsx("div",{className:"grid gap-5 sm:grid-cols-2",children:o.map((r,t)=>e.jsx(j,{skill:r,index:t,inView:s},r.category))})]})})}export{L as SkillsSection};
