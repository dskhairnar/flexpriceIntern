import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{I as t}from"./InvoiceStatusBadge-CvM2Zgni.js";import"./index-yBjzXJbu.js";import"./Badge-CdaJPkL1.js";import"./index-BioFo8Zg.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-DxfDZ_MP.js";const N={title:"Design System/Molecules/InvoiceStatusBadge",component:t,tags:["autodocs"],argTypes:{status:{control:"text"}}},e={args:{status:"paid"}},a={args:{status:"paid"},render:g=>s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm text-muted-foreground",children:"Controlled status:"}),s.jsx(t,{...g})]}),s.jsxs("div",{className:"flex flex-wrap gap-2 border-t border-border pt-3",children:[s.jsx(t,{status:"paid"}),s.jsx(t,{status:"draft"}),s.jsx(t,{status:"void"}),s.jsx(t,{status:"open"}),s.jsx(t,{status:"uncollectible"})]})]})},r={args:{status:"processing"}};var o,n,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    status: 'paid'
  }
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,i,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    status: 'paid'
  },
  render: args => <div className='space-y-3'>\r
            <div className='flex items-center gap-2'>\r
                <span className='text-sm text-muted-foreground'>Controlled status:</span>\r
                <InvoiceStatusBadge {...args} />\r
            </div>\r
            <div className='flex flex-wrap gap-2 border-t border-border pt-3'>\r
                <InvoiceStatusBadge status='paid' />\r
                <InvoiceStatusBadge status='draft' />\r
                <InvoiceStatusBadge status='void' />\r
                <InvoiceStatusBadge status='open' />\r
                <InvoiceStatusBadge status='uncollectible' />\r
            </div>\r
        </div>
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: 'processing'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const h=["Default","AllStatuses","UnknownStatus"];export{a as AllStatuses,e as Default,r as UnknownStatus,h as __namedExportsOrder,N as default};
