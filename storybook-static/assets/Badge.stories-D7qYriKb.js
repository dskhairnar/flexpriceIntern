import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{B as r}from"./Badge-CdaJPkL1.js";import{c as S}from"./createLucideIcon-DxfDZ_MP.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=S("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),M={title:"Design System/Atoms/Badge",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","danger","muted","outline"]},children:{control:"text"}}},s={args:{children:"Active",variant:"success"}},n={args:{variant:"success"},parameters:{docs:{description:{story:"Use the variant control to preview plan status labels across badge treatments."}}},render:({variant:e})=>a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx(r,{variant:e,children:"Plan - Active"}),a.jsx(r,{variant:e,children:"Plan - Archived"})]})},t={args:{variant:"success"},parameters:{docs:{description:{story:"Use the variant control to preview subscription status labels across badge treatments."}}},render:({variant:e})=>a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx(r,{variant:e,children:"Trialing"}),a.jsx(r,{variant:e,children:"Active"}),a.jsx(r,{variant:e,children:"Past due"}),a.jsx(r,{variant:e,children:"Canceled"})]})},i={args:{children:"Premium",variant:"outline"},render:({children:e,variant:f})=>a.jsx(r,{variant:f,icon:a.jsx(j,{className:"size-3.5","aria-hidden":!0}),children:e})};var c,o,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Active',
    variant: 'success'
  }
}`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,p,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the variant control to preview plan status labels across badge treatments.'
      }
    }
  },
  render: ({
    variant
  }) => <div className='flex flex-wrap gap-2'>\r
            <Badge variant={variant}>Plan - Active</Badge>\r
            <Badge variant={variant}>Plan - Archived</Badge>\r
        </div>
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,v,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the variant control to preview subscription status labels across badge treatments.'
      }
    }
  },
  render: ({
    variant
  }) => <div className='flex flex-wrap gap-2'>\r
            <Badge variant={variant}>Trialing</Badge>\r
            <Badge variant={variant}>Active</Badge>\r
            <Badge variant={variant}>Past due</Badge>\r
            <Badge variant={variant}>Canceled</Badge>\r
        </div>
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,x,B;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Premium',
    variant: 'outline'
  },
  render: ({
    children,
    variant
  }) => <Badge variant={variant} icon={<Sparkles className='size-3.5' aria-hidden />}>\r
            {children}\r
        </Badge>
}`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const z=["Default","PlanStatuses","SubscriptionStatuses","WithIcon"];export{s as Default,n as PlanStatuses,t as SubscriptionStatuses,i as WithIcon,z as __namedExportsOrder,M as default};
