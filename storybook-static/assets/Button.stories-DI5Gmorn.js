import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{within as L,userEvent as N,expect as P}from"./index-DH-M5T-F.js";import{B as r}from"./Button-d3MXu4I9.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";import"./index-gpsKM-Pt.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./loader-circle-BkrnLxqs.js";import"./createLucideIcon-DxfDZ_MP.js";const F={title:"Design System/Atoms/Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"},disabled:{control:"boolean"},children:{control:"text"}}},a={args:{children:"Save changes",variant:"primary",size:"md"}},n={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"danger",children:"Danger"})]})},t={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},s={args:{children:"Processing invoice",loading:!0}},o={args:{children:"Disabled",disabled:!0}},i={args:{children:"Click me"},play:async({canvasElement:D,step:E})=>{const C=L(D);await E("Click invokes native button",async()=>{const c=C.getByRole("button",{name:/click me/i});await N.click(c),await P(c).toBeVisible()})}};var l,d,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Save changes',
    variant: 'primary',
    size: 'md'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className='flex flex-wrap gap-3'>\r
            <Button variant='primary'>Primary</Button>\r
            <Button variant='secondary'>Secondary</Button>\r
            <Button variant='ghost'>Ghost</Button>\r
            <Button variant='danger'>Danger</Button>\r
        </div>
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,h,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className='flex flex-wrap items-center gap-3'>\r
            <Button size='sm'>\r
                Small\r
            </Button>\r
            <Button size='md'>Medium</Button>\r
            <Button size='lg'>Large</Button>\r
        </div>
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,B,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Processing invoice',
    loading: true
  }
}`,...(b=(B=s.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var S,f,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var w,j,z;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const H=["Default","Variants","Sizes","Loading","Disabled","InteractionClick"];export{a as Default,o as Disabled,i as InteractionClick,s as Loading,t as Sizes,n as Variants,H as __namedExportsOrder,F as default};
