import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{c as i}from"./utils-BLSKlp9E.js";import{c as o}from"./createLucideIcon-DxfDZ_MP.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=o("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=o("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=o("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);function h({label:b,value:f,trend:e,className:y}){const n=e===void 0||e===0?"muted":e>0?"positive":"negative",M=e===void 0||e===0?w:e>0?N:j;return r.jsxs("div",{className:i("rounded-[6px] border border-border bg-card p-4 shadow-sm",y),children:[r.jsx("div",{className:"text-sm text-muted-foreground",children:b}),r.jsxs("div",{className:"mt-1 flex items-end justify-between gap-2",children:[r.jsx("div",{className:"text-2xl font-semibold tracking-tight",children:f}),e!==void 0?r.jsxs("div",{className:i("flex items-center gap-0.5 text-xs font-medium",n==="positive"&&"text-emerald-600",n==="negative"&&"text-red-600",n==="muted"&&"text-muted-foreground"),children:[r.jsx(M,{className:"size-4"}),e===0?"0%":`${e>0?"+":""}${e.toFixed(1)}%`]}):null]})]})}h.__docgenInfo={description:"Dashboard KPI tile with optional trend glyph, matching FlexPrice revenue and usage summaries.",methods:[],displayName:"MetricCard",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},trend:{required:!1,tsType:{name:"number"},description:"Percentage delta vs previous period; `0` is flat"},className:{required:!1,tsType:{name:"string"},description:""}}};const $={title:"Design System/Molecules/MetricCard",component:h,tags:["autodocs"],argTypes:{label:{control:"text"},value:{control:"text"},trend:{control:{type:"number",min:-50,max:50,step:.1}}}},t={args:{label:"MRR",value:"$128,400",trend:4.2}},s={args:{label:"Active subscriptions",value:"3,482",trend:0}},a={args:{label:"Churned revenue",value:"$2,100",trend:-1.8}};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'MRR',
    value: '$128,400',
    trend: 4.2
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Active subscriptions',
    value: '3,482',
    trend: 0
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,v,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Churned revenue',
    value: '$2,100',
    trend: -1.8
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const C=["Default","FlatTrend","NegativeTrend"];export{t as Default,s as FlatTrend,a as NegativeTrend,C as __namedExportsOrder,$ as default};
