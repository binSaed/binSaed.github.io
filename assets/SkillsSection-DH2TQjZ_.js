import{j as e}from"./ui-vendor-UrdV2bML.js";import{u as c}from"./useInView-nB9f7PO9.js";import{c as r}from"./index-lVEqUpG0.js";import"./react-vendor-BSE85mIr.js";import"./radix-A84lCEUI.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=r("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=r("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=r("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=r("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),x=[{category:"Mobile Development",icon:y,items:["Flutter","Dart","Android","iOS","React Native"]},{category:"Frontend",icon:m,items:["React","TypeScript","JavaScript","HTML/CSS","Tailwind CSS"]},{category:"Backend",icon:d,items:["Node.js","Python","Firebase","REST APIs","GraphQL"]},{category:"Cloud & DevOps",icon:l,items:["AWS","Google Cloud","Docker","CI/CD","Git"]},{category:"Programming",icon:n,items:["Clean Code","Design Patterns","SOLID Principles","TDD","Agile"]},{category:"Design",icon:p,items:["UI/UX","Figma","Material Design","Responsive Design","Animation"]}];function b(){const{ref:o,isInView:i}=c({margin:"-100px"});return e.jsx("section",{id:"skills",className:"py-24",ref:o,children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsxs("div",{className:`text-center mb-16 opacity-0 ${i?"animate-fade-in-up":""}`,children:[e.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["My ",e.jsx("span",{className:"gradient-text",children:"Skills"})]}),e.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Technologies and tools I work with to bring ideas to life"})]}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:x.map((t,s)=>e.jsxs("div",{className:`bg-card rounded-xl p-6 card-shadow animated-border group opacity-0 ${i?"animate-fade-in-up":""}`,style:{animationDelay:`${s*.1}s`},children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300",children:e.jsx(t.icon,{className:"h-6 w-6"})}),e.jsx("h3",{className:"font-semibold text-lg",children:t.category})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t.items.map(a=>e.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default",children:a},a))})]},t.category))})]})})}export{b as SkillsSection};
