import{j as e}from"./radix-TSIrOO7o.js";import{c as t,k as h,D as s,n as o,B as n,C as y,l as c,M as k,F as u,f as g}from"./index-B0qu5IrS.js";import{S as f}from"./SectionHeader-CcXuyTEr.js";import{C as j}from"./clock-BgEGOM95.js";import"./react-vendor-B2qPguBR.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=t("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=t("FilePenLine",[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"142zxg"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}],["path",{d:"M8 18h1",key:"13wk12"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=t("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=t("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),C={Briefcase:o,Clock:j,FileSignature:N};function B(){const{ref:d,isInView:l}=h({margin:"-100px"}),i=g(),m=()=>{i==null||i.capture("calendly_popup_opened",{source:"work_with_me"}),u(c.calendly)},p=[{icon:b,label:"Work setup",value:s.workModes.join(" · ")},{icon:M,label:"Response",value:s.responseTime},{icon:v,label:"Start",value:s.startDate},{icon:w,label:"Rate",value:s.rate}];return e.jsx("section",{id:"work-with-me",className:"py-14 md:py-20",ref:d,children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(f,{index:"10",label:"Availability",inView:l,title:e.jsxs(e.Fragment,{children:["Open to work — ",e.jsx("span",{className:"text-primary",children:"full-time, part-time, or contract."})]}),description:s.summary}),e.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:s.engagements.map((a,r)=>{const x=C[a.icon]??o;return e.jsxs("div",{className:`dossier-card flex flex-col p-6 md:p-7 opacity-0 ${l?"animate-fade-in-up":""}`,style:{animationDelay:`${.15+r*.1}s`},children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx(x,{className:"h-6 w-6 text-primary"}),e.jsx("span",{className:"kicker text-muted-foreground/60",children:String(r+1).padStart(2,"0")})]}),e.jsx("h3",{className:"mt-5 font-heading text-2xl tracking-tight",children:a.type}),e.jsx("p",{className:"kicker mt-1.5 text-primary normal-case tracking-normal",children:a.summary}),e.jsx("p",{className:"mt-4 text-sm leading-relaxed text-muted-foreground text-pretty",children:a.description})]},a.type)})}),e.jsx("dl",{className:`mt-4 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 opacity-0 ${l?"animate-fade-in-up":""}`,style:{animationDelay:"0.5s"},children:p.map(a=>e.jsxs("div",{className:"flex items-start gap-3 bg-background p-5",children:[e.jsx(a.icon,{className:"mt-0.5 h-4 w-4 shrink-0 text-primary"}),e.jsxs("div",{children:[e.jsx("dt",{className:"kicker text-muted-foreground",children:a.label}),e.jsx("dd",{className:"mt-1.5 text-sm font-medium text-pretty",children:a.value})]})]},a.label))}),e.jsxs("div",{className:`mt-8 flex flex-col sm:flex-row sm:items-center gap-3 opacity-0 ${l?"animate-fade-in-up":""}`,style:{animationDelay:"0.6s"},children:[e.jsxs(n,{variant:"hero",size:"lg",onClick:m,className:"group",children:[e.jsx(y,{className:"mr-1 h-4 w-4"}),"Book a 20-min call"]}),e.jsx(n,{variant:"heroOutline",size:"lg",asChild:!0,className:"group",children:e.jsxs("a",{href:c.email,children:[e.jsx(k,{className:"mr-1 h-4 w-4"}),"Email me directly"]})})]})]})})}export{B as AvailabilitySection};
