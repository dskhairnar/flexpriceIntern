import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as a}from"./Badge-CdaJPkL1.js";import{c as f}from"./createLucideIcon-DxfDZ_MP.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=f("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),N={title:"Design System/Atoms/Badge",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","danger","muted","outline"]},children:{control:"text"}}},r={args:{children:"Active",variant:"success"}},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"success",children:"Plan - Active"}),e.jsx(a,{variant:"muted",children:"Plan - Archived"})]})},n={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"success",children:"Trialing"}),e.jsx(a,{variant:"default",children:"Active"}),e.jsx(a,{variant:"warning",children:"Past due"}),e.jsx(a,{variant:"danger",children:"Canceled"})]})},t={render:()=>e.jsx(a,{variant:"outline",icon:e.jsx(B,{className:"size-3.5","aria-hidden":!0}),children:"Premium"})};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Active',
    variant: 'success'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var o,l,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className='flex flex-wrap gap-2'>\r
            <Badge variant='success'>Plan - Active</Badge>\r
            <Badge variant='muted'>Plan - Archived</Badge>\r
        </div>
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className='flex flex-wrap gap-2'>\r
            <Badge variant='success'>Trialing</Badge>\r
            <Badge variant='default'>Active</Badge>\r
            <Badge variant='warning'>Past due</Badge>\r
            <Badge variant='danger'>Canceled</Badge>\r
        </div>
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,h,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Badge variant='outline' icon={<Sparkles className='size-3.5' aria-hidden />}>\r
            Premium\r
        </Badge>
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const M=["Default","PlanStatuses","SubscriptionStatuses","WithIcon"];export{r as Default,s as PlanStatuses,n as SubscriptionStatuses,t as WithIcon,M as __namedExportsOrder,N as default};
