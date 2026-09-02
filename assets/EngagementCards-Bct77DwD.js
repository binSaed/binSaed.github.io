import{c as s,j as e,k as r}from"./index-IQ1I6pxC.js";import{B as c}from"./briefcase-CfKlRdUx.js";import{C as n}from"./clock-CSVc_tdi.js";import{C as o}from"./compass-CqftyryN.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=s("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=s("FilePenLine",[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"142zxg"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}],["path",{d:"M8 18h1",key:"13wk12"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=s("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=s("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=s("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),k={Briefcase:c,Clock:n,FileSignature:p,Compass:o};function b({inView:l=!0,as:i="h3"}){return e.jsx("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:r.engagements.map((a,t)=>{const d=k[a.icon]??c;return e.jsxs("div",{className:`dossier-card flex flex-col p-6 md:p-7 reveal-hidden ${l?"animate-fade-in-up":""}`,style:{animationDelay:`${.15+t*.1}s`},children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx(d,{className:"h-6 w-6 text-primary"}),e.jsx("span",{"aria-hidden":"true",className:"kicker text-muted-foreground",children:String(t+1).padStart(2,"0")})]}),e.jsxs(i,{className:"mt-5",children:[e.jsx("span",{className:"block font-heading text-2xl tracking-tight",children:a.type}),e.jsx("span",{className:"kicker mt-1.5 block text-primary normal-case tracking-normal",children:a.summary})]}),e.jsx("p",{className:"mt-3 text-sm font-medium text-foreground/80 text-pretty",children:a.forWho}),e.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground text-pretty",children:a.description}),e.jsx("div",{className:"mt-auto pt-5",children:e.jsxs("div",{className:"border-t border-border pt-4",children:[e.jsx("span",{className:"kicker mb-1.5 block text-muted-foreground",children:"Outcome"}),e.jsxs("p",{className:"text-sm leading-relaxed text-foreground/90 text-pretty",children:[e.jsxs("span",{className:"text-primary","aria-hidden":"true",children:["→"," "]}),a.outcome]})]})})]},a.type)})})}function j({inView:l=!0,delay:i="0.5s"}){const a=[{icon:x,label:"Work setup",value:r.workModes.join(" · ")},{icon:u,label:"Response",value:r.responseTime},{icon:m,label:"Start",value:r.startDate},{icon:h,label:"Rate",value:r.rate}];return e.jsx("dl",{className:`mt-4 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 reveal-hidden ${l?"animate-fade-in-up":""}`,style:{animationDelay:i},children:a.map(t=>e.jsxs("div",{className:"relative bg-background p-5 pl-12",children:[e.jsx(t.icon,{"aria-hidden":"true",className:"absolute left-5 top-[22px] h-4 w-4 text-primary"}),e.jsx("dt",{className:"kicker text-muted-foreground",children:t.label}),e.jsx("dd",{className:"mt-1.5 text-sm font-medium text-pretty",children:t.value})]},t.label))})}export{j as A,b as E};
