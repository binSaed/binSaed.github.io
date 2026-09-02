import{c as t,F as o,j as e,ah as c,U as d}from"./index-CA0ZhuBI.js";import{S as m}from"./SectionHeader-Ca4iWntk.js";import{L as l}from"./layers-CT6NVsew.js";import{S as p}from"./smartphone-Dzyq5jFy.js";import{G as h}from"./git-branch-CvP_9k1B.js";import{S as x}from"./shield-check-D9yh7DG2.js";import{G as u}from"./gauge-m41WbevY.js";import"./react-vendor-B2qPguBR.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),j={Layers:l,Smartphone:p,Database:g,GitBranch:h,ShieldCheck:x,Gauge:u,Users:d,LineChart:y};function k({skill:a,index:s,inView:r}){const i=j[a.icon]??f;return e.jsxs("div",{className:`dossier-card p-6 md:p-7 reveal-hidden ${r?"animate-fade-in-up":""}`,style:{animationDelay:`${.1+s*.07}s`},children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{"aria-hidden":"true",className:"font-mono text-xs text-muted-foreground",children:String(s+1).padStart(2,"0")}),e.jsx(i,{className:"h-[1.15rem] w-[1.15rem] text-primary shrink-0"}),e.jsx("h3",{className:"kicker text-foreground/90",children:a.category})]}),e.jsx("div",{className:"mt-4 mb-5 h-px w-full bg-border","aria-hidden":"true"}),e.jsx("div",{className:"flex flex-wrap gap-x-4 gap-y-2.5",children:a.items.map(n=>e.jsx("span",{className:"spec-tag",children:n},n))})]})}function I(){const{ref:a,isInView:s}=o({margin:"-100px"});return e.jsx("section",{id:"skills",className:"py-14 md:py-20 bg-muted/20",ref:a,children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(m,{index:"10",label:"Stack",inView:s,title:e.jsxs(e.Fragment,{children:["The toolkit behind ",e.jsx("span",{className:"bg-primary/20 text-foreground px-1.5 box-decoration-clone",children:"the work."})]}),description:"The mobile, architecture, and delivery stack I use to ship and run production apps."}),e.jsx("div",{className:"grid gap-5 sm:grid-cols-2",children:c.map((r,i)=>e.jsx(k,{skill:r,index:i,inView:s},r.category))})]})})}export{I as SkillsSection};
