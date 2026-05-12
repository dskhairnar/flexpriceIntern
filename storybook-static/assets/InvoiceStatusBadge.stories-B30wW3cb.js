import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as w}from"./Badge-DsrY2FwV.js";import{c as a}from"./createLucideIcon-DxfDZ_MP.js";import{c as B}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";import"./index-1evVQkiP.js";import"./index-BioFo8Zg.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=a("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=a("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=a("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=a("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=a("FilePen",[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5",key:"1couwa"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]]),i={paid:{label:"Paid",tone:"success",icon:C},draft:{label:"Draft",tone:"muted",icon:k},void:{label:"Void",tone:"danger",icon:I},open:{label:"Open",tone:"warning",icon:A},uncollectible:{label:"Uncollectible",tone:"danger",icon:j}};function M(s){const n=s.toLowerCase();return n in i?i[n]:{label:s,tone:"neutral",icon:k}}const N={success:"success",neutral:"outline",warning:"warning",danger:"danger",muted:"muted"};function t({status:s,className:n}){const{label:v,tone:S,icon:h}=M(s),b=N[S]??"outline";return e.jsx(w,{variant:b,className:B("capitalize",n),icon:e.jsx(h,{className:"size-3.5","aria-hidden":!0}),children:v})}t.__docgenInfo={description:"Maps raw invoice status strings to coloured chips with icons for tables and drawers.",methods:[],displayName:"InvoiceStatusBadge",props:{status:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"Design System/Molecules/InvoiceStatusBadge",component:t,tags:["autodocs"],argTypes:{status:{control:"text"}}},r={args:{status:"paid"}},o={args:{status:"paid"},render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{status:"paid"}),e.jsx(t,{status:"draft"}),e.jsx(t,{status:"void"}),e.jsx(t,{status:"open"}),e.jsx(t,{status:"uncollectible"})]})},c={args:{status:"processing"}};var l,u,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    status: 'paid'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,m,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: 'paid'
  },
  render: () => <div className='flex flex-wrap gap-2'>\r
            <InvoiceStatusBadge status='paid' />\r
            <InvoiceStatusBadge status='draft' />\r
            <InvoiceStatusBadge status='void' />\r
            <InvoiceStatusBadge status='open' />\r
            <InvoiceStatusBadge status='uncollectible' />\r
        </div>
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,x,f;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    status: 'processing'
  }
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const E=["Default","AllStatuses","UnknownStatus"];export{o as AllStatuses,r as Default,c as UnknownStatus,E as __namedExportsOrder,V as default};
