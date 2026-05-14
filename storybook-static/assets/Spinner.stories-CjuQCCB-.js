import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as r}from"./Spinner-XSuV86Rr.js";import"./index-yBjzXJbu.js";import"./utils-BLSKlp9E.js";import"./loader-circle-BkrnLxqs.js";import"./createLucideIcon-DxfDZ_MP.js";import"./index-BioFo8Zg.js";const v={title:"Design System/Atoms/Spinner",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},label:{control:"text"}}},s={args:{size:"md",label:"Loading"}},a={args:{size:"md",label:"Loading invoice data"},parameters:{docs:{description:{story:"Use the size and label controls to preview the spinner treatment used in loading states."}}},render:({size:m,label:p})=>e.jsxs("div",{className:"flex flex-wrap items-center gap-8",children:[e.jsxs("div",{className:"flex items-center gap-3 rounded-[6px] border border-border p-3",children:[e.jsx(r,{size:m,label:p}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"Controlled preview"})]}),e.jsxs("div",{className:"flex items-center gap-4 border-l border-border pl-6",children:[e.jsx(r,{size:"sm",label:"Small loading indicator"}),e.jsx(r,{size:"md",label:"Medium loading indicator"}),e.jsx(r,{size:"lg",label:"Large loading indicator"})]})]})};var n,i,t;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Loading'
  }
}`,...(t=(i=s.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var o,l,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Loading invoice data'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the size and label controls to preview the spinner treatment used in loading states.'
      }
    }
  },
  render: ({
    size,
    label
  }) => <div className='flex flex-wrap items-center gap-8'>\r
            <div className='flex items-center gap-3 rounded-[6px] border border-border p-3'>\r
                <Spinner size={size} label={label} />\r
                <span className='text-sm text-muted-foreground'>Controlled preview</span>\r
            </div>\r
            <div className='flex items-center gap-4 border-l border-border pl-6'>\r
                <Spinner size='sm' label='Small loading indicator' />\r
                <Spinner size='md' label='Medium loading indicator' />\r
                <Spinner size='lg' label='Large loading indicator' />\r
            </div>\r
        </div>
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const S=["Default","Sizes"];export{s as Default,a as Sizes,S as __namedExportsOrder,v as default};
