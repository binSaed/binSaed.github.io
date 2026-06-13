import{j as e}from"./ui-vendor-5oxkQ2Jf.js";import{c as a,d as o,s as d}from"./index-msMZAB_E.js";import"./react-vendor-GBp8saLZ.js";import"./radix-DOafHixa.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=a("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=a("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=a("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=a("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=a("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=a("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=a("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),g={Smartphone:h,Database:y,GitBranch:x,CreditCard:p,LineChart:l,Users:u};function b(){const{ref:i,isInView:t}=o({margin:"-100px"});return e.jsx("section",{id:"skills",className:"py-24",ref:i,children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsxs("div",{className:`text-center mb-16 opacity-0 ${t?"animate-fade-in-up":""}`,children:[e.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["My ",e.jsx("span",{className:"gradient-text",children:"Skills"})]}),e.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"The mobile, architecture, and delivery stack I use to ship and run production apps"})]}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:d.map((r,c)=>{const n=g[r.icon]??m;return e.jsxs("div",{className:`bg-card rounded-xl p-6 card-shadow animated-border group opacity-0 ${t?"animate-fade-in-up":""}`,style:{animationDelay:`${c*.1}s`},children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300",children:e.jsx(n,{className:"h-6 w-6"})}),e.jsx("h3",{className:"font-semibold text-lg",children:r.category})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:r.items.map(s=>e.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default",children:s},s))})]},r.category)})})]})})}export{b as SkillsSection};
