import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as i}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";function x({label:h,used:n,entitled:s,className:y}){const o=s<=0?0:Math.min(100,Math.round(n/s*100));return e.jsxs("div",{className:i("w-full max-w-md space-y-1",y),children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"font-medium",children:h}),e.jsxs("span",{className:"tabular-nums text-muted-foreground",children:[n.toLocaleString()," / ",s.toLocaleString()]})]}),e.jsx("div",{className:"h-2 w-full overflow-hidden rounded-full bg-muted",children:e.jsx("div",{className:i("h-full rounded-full transition-all",o>90?"bg-destructive":"bg-blue"),style:{width:`${o}%`},role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":s})})]})}x.__docgenInfo={description:"Linear meter comparing consumed usage to entitled quantity (seats, API units, credits).",methods:[],displayName:"UsageBar",props:{label:{required:!0,tsType:{name:"string"},description:""},used:{required:!0,tsType:{name:"number"},description:""},entitled:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Design System/Molecules/UsageBar",component:x,tags:["autodocs"],argTypes:{label:{control:"text"},used:{control:"number"},entitled:{control:"number"}}},r={args:{label:"API calls (this period)",used:42e3,entitled:1e5}},a={args:{label:"Seats in use",used:95,entitled:100}},t={args:{label:"Credits consumed",used:0,entitled:5e3}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'API calls (this period)',
    used: 42_000,
    entitled: 100_000
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Seats in use',
    used: 95,
    entitled: 100
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,b,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Credits consumed',
    used: 0,
    entitled: 5000
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const w=["Default","NearLimit","ZeroUsage"];export{r as Default,a as NearLimit,t as ZeroUsage,w as __namedExportsOrder,S as default};
