import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{within as E,userEvent as R,expect as L}from"./index-DH-M5T-F.js";import{B as n}from"./Button-S8hfweYc.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";import"./index-gpsKM-Pt.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./loader-circle-BkrnLxqs.js";import"./createLucideIcon-DxfDZ_MP.js";const F={title:"Design System/Atoms/Button",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"},disabled:{control:"boolean"},asChild:{table:{disable:!0}},children:{control:"text"}}},t={args:{children:"Save changes",variant:"primary",size:"md"}},o={parameters:{controls:{exclude:["variant"]}},args:{children:"Button",size:"md",loading:!1,disabled:!1},render:({children:e,size:s,loading:i,disabled:r})=>a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex flex-wrap gap-3",children:[a.jsxs(n,{variant:"primary",size:s,loading:i,disabled:r,children:[e," primary"]}),a.jsxs(n,{variant:"secondary",size:s,loading:i,disabled:r,children:[e," secondary"]}),a.jsxs(n,{variant:"ghost",size:s,loading:i,disabled:r,children:[e," ghost"]}),a.jsxs(n,{variant:"danger",size:s,loading:i,disabled:r,children:[e," danger"]})]}),a.jsx("p",{className:"text-xs text-muted-foreground",children:"Use Controls to apply size, loading, disabled, and label text across every variant."})]})},d={args:{children:"Resizable button",variant:"primary",size:"md",loading:!1,disabled:!1},render:e=>a.jsxs("div",{className:"space-y-4",children:[a.jsx(n,{...e}),a.jsxs("div",{className:"flex flex-wrap items-center gap-3 border-t border-border pt-4",children:[a.jsx(n,{variant:e.variant,size:"sm",loading:e.loading,disabled:e.disabled,children:"Small reference"}),a.jsx(n,{variant:e.variant,size:"md",loading:e.loading,disabled:e.disabled,children:"Medium reference"}),a.jsx(n,{variant:e.variant,size:"lg",loading:e.loading,disabled:e.disabled,children:"Large reference"})]})]})},l={args:{children:"Processing invoice",loading:!0}},c={args:{children:"Disabled",disabled:!0}},m={args:{children:"Click me"},play:async({canvasElement:e,step:s})=>{const i=E(e);await s("Click invokes native button",async()=>{const r=i.getByRole("button",{name:/click me/i});await R.click(r),await L(r).toBeVisible()})}};var p,g,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Save changes',
    variant: 'primary',
    size: 'md'
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,b,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['variant']
    }
  },
  args: {
    children: 'Button',
    size: 'md',
    loading: false,
    disabled: false
  },
  render: ({
    children,
    size,
    loading,
    disabled
  }) => <div className='space-y-4'>\r
            <div className='flex flex-wrap gap-3'>\r
                <Button variant='primary' size={size} loading={loading} disabled={disabled}>\r
                    {children} primary\r
                </Button>\r
                <Button variant='secondary' size={size} loading={loading} disabled={disabled}>\r
                    {children} secondary\r
                </Button>\r
                <Button variant='ghost' size={size} loading={loading} disabled={disabled}>\r
                    {children} ghost\r
                </Button>\r
                <Button variant='danger' size={size} loading={loading} disabled={disabled}>\r
                    {children} danger\r
                </Button>\r
            </div>\r
            <p className='text-xs text-muted-foreground'>Use Controls to apply size, loading, disabled, and label text across every variant.</p>\r
        </div>
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,y,f;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Resizable button',
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false
  },
  render: args => <div className='space-y-4'>\r
            <Button {...args} />\r
            <div className='flex flex-wrap items-center gap-3 border-t border-border pt-4'>\r
                <Button variant={args.variant} size='sm' loading={args.loading} disabled={args.disabled}>\r
                    Small reference\r
                </Button>\r
                <Button variant={args.variant} size='md' loading={args.loading} disabled={args.disabled}>\r
                    Medium reference\r
                </Button>\r
                <Button variant={args.variant} size='lg' loading={args.loading} disabled={args.disabled}>\r
                    Large reference\r
                </Button>\r
            </div>\r
        </div>
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var z,B,j;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Processing invoice',
    loading: true
  }
}`,...(j=(B=l.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var S,k,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var N,C,D;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Click me'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Click invokes native button', async () => {
      const btn = canvas.getByRole('button', {
        name: /click me/i
      });
      await userEvent.click(btn);
      await expect(btn).toBeVisible();
    });
  }
}`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const G=["Default","Variants","Sizes","Loading","Disabled","InteractionClick"];export{t as Default,c as Disabled,m as InteractionClick,l as Loading,d as Sizes,o as Variants,G as __namedExportsOrder,F as default};
