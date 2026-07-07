import{c as a,x as o,j as e,O as d}from"./index-XX3v_oZd.js";import{S as l}from"./SectionHeader-is8WMGYi.js";import{S as p}from"./smartphone-KkYakCKM.js";import{U as m}from"./users-B0YSN0wW.js";import"./react-vendor-iqlcZCOr.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=a("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=a("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=a("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=a("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=a("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]),u={Smartphone:p,Database:g,GitBranch:k,CreditCard:y,LineChart:x,Users:m};function v(){const{ref:n,isInView:s}=o({margin:"-100px"});return e.jsx("section",{id:"skills",className:"py-14 md:py-20 bg-muted/20",ref:n,children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(l,{index:"08",label:"Stack",inView:s,title:e.jsxs(e.Fragment,{children:["The toolkit behind ",e.jsx("span",{className:"bg-primary/20 text-foreground px-1.5 box-decoration-clone",children:"the work."})]}),description:"The mobile, architecture, and delivery stack I use to ship and run production apps."}),e.jsx("div",{className:"grid gap-x-10 gap-y-7 border-t border-border pt-8 sm:grid-cols-2",children:d.map((t,i)=>{const c=u[t.icon]??h;return e.jsxs("div",{className:`opacity-0 ${s?"animate-fade-in-up":""}`,style:{animationDelay:`${i*.06}s`},children:[e.jsxs("div",{className:"mb-3 flex items-center gap-3",children:[e.jsx("span",{"aria-hidden":"true",className:"font-mono text-xs text-muted-foreground/60",children:String(i+1).padStart(2,"0")}),e.jsx(c,{className:"h-5 w-5 text-primary"}),e.jsx("h3",{className:"font-heading text-lg tracking-tight",children:t.category})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t.items.map(r=>e.jsx("span",{className:"spec-tag",children:r},r))})]},t.category)})})]})})}export{v as SkillsSection};
