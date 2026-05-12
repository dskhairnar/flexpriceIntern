import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{within as s,userEvent as h,expect as x}from"./index-DH-M5T-F.js";import{B as v}from"./Button-d3MXu4I9.js";import{R as g,a as y,P as b,C as w,A as T}from"./index-DACu-kmD.js";import{c as R}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";import"./index-gpsKM-Pt.js";import"./index-1evVQkiP.js";import"./loader-circle-BkrnLxqs.js";import"./createLucideIcon-DxfDZ_MP.js";import"./index-CncNTZwy.js";import"./index-B6ujFmsw.js";function u({children:r,content:a,delayDuration:n=400,side:f="top"}){return e.jsxs(g,{delayDuration:n,children:[e.jsx(y,{asChild:!0,children:r}),e.jsx(b,{children:e.jsxs(w,{side:f,sideOffset:6,className:R("z-50 max-w-xs rounded-[6px] border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95"),children:[a,e.jsx(T,{className:"fill-popover",width:10,height:5})]})})]})}u.__docgenInfo={description:"Contextual hint on hover/focus. Requires `TooltipProvider` (added in Storybook preview).",methods:[],displayName:"DesignTooltip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},delayDuration:{required:!1,tsType:{name:"number"},description:"Radix delay before open (ms). Preview wraps `TooltipProvider`.",defaultValue:{value:"400",computed:!1}},side:{required:!1,tsType:{name:"ReactComponentProps['side']",raw:"React.ComponentProps<typeof TooltipPrimitive.Content>['side']"},description:"",defaultValue:{value:"'top'",computed:!1}}}};const z={title:"Design System/Atoms/Tooltip",component:u,tags:["autodocs"],argTypes:{delayDuration:{control:{type:"number",min:0,max:2e3,step:100}},side:{control:"select",options:["top","right","bottom","left"]}}},t={args:{content:"Usage is metered per successful API call in this environment.",delayDuration:400,side:"top",children:e.jsx(v,{variant:"ghost",children:"Hover for details"})},play:async({canvasElement:r,step:a})=>{const n=s(r);await a("Shows tooltip content on hover",async()=>{await h.hover(n.getByRole("button",{name:/hover for details/i})),await x(await s(document.body).findByText(/usage is metered/i)).toBeVisible()})}},o={args:{content:"Tax is calculated from the customer billing address on file.",delayDuration:600,children:e.jsx("span",{className:"cursor-default border-b border-dotted border-muted-foreground text-sm",children:"Tax basis"})}};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    content: 'Usage is metered per successful API call in this environment.',
    delayDuration: 400,
    side: 'top',
    children: <Button variant='ghost'>Hover for details</Button>
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Shows tooltip content on hover', async () => {
      await userEvent.hover(canvas.getByRole('button', {
        name: /hover for details/i
      }));
      await expect(await within(document.body).findByText(/usage is metered/i)).toBeVisible();
    });
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,p,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    content: 'Tax is calculated from the customer billing address on file.',
    delayDuration: 600,
    children: <span className='cursor-default border-b border-dotted border-muted-foreground text-sm'>Tax basis</span>
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const H=["Default","Informational"];export{t as Default,o as Informational,H as __namedExportsOrder,z as default};
