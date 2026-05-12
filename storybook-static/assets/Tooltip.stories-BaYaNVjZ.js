import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{within as i,userEvent as y,expect as b}from"./index-DH-M5T-F.js";import{B as v}from"./Button-S8hfweYc.js";import{r as d}from"./index-BioFo8Zg.js";import{R as T,a as w,P as R,C as D,A as j}from"./index-DACu-kmD.js";import{c as B}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";import"./index-gpsKM-Pt.js";import"./index-1evVQkiP.js";import"./loader-circle-BkrnLxqs.js";import"./createLucideIcon-DxfDZ_MP.js";import"./index-CncNTZwy.js";import"./index-B6ujFmsw.js";function s({children:e,content:o,delayDuration:n=400,side:g="top"}){const x=d.isValidElement(e)?e:t.jsx("span",{children:typeof e=="string"||typeof e=="number"?e:"More information"}),h=d.isValidElement(o)||typeof o=="string"||typeof o=="number"?o:"No additional details.";return t.jsxs(T,{delayDuration:n,children:[t.jsx(w,{asChild:!0,children:x}),t.jsx(R,{children:t.jsxs(D,{side:g,sideOffset:6,className:B("z-50 max-w-xs rounded-[6px] border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95"),children:[h,t.jsx(j,{className:"fill-popover",width:10,height:5})]})})]})}s.__docgenInfo={description:"Contextual hint on hover/focus. Requires `TooltipProvider` (added in Storybook preview).",methods:[],displayName:"DesignTooltip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},delayDuration:{required:!1,tsType:{name:"number"},description:"Radix delay before open (ms). Preview wraps `TooltipProvider`.",defaultValue:{value:"400",computed:!1}},side:{required:!1,tsType:{name:"ReactComponentProps['side']",raw:"React.ComponentProps<typeof TooltipPrimitive.Content>['side']"},description:"",defaultValue:{value:"'top'",computed:!1}}}};const U={title:"Design System/Atoms/Tooltip",component:s,tags:["autodocs"],argTypes:{delayDuration:{control:{type:"number",min:0,max:2e3,step:100}},side:{control:"select",options:["top","right","bottom","left"]},children:{table:{disable:!0}}}},r={args:{children:"Hover for details",content:"Usage is metered per successful API call in this environment.",delayDuration:400,side:"top"},render:e=>t.jsx(s,{...e,children:t.jsx(v,{variant:"ghost",children:"Hover for details"})}),play:async({canvasElement:e,step:o})=>{const n=i(e);await o("Shows tooltip content on hover",async()=>{await y.hover(n.getByRole("button",{name:/hover for details/i})),await b(await i(document.body).findByText(/usage is metered/i)).toBeVisible()})}},a={args:{children:"Tax basis",content:"Tax is calculated from the customer billing address on file.",delayDuration:600},render:e=>t.jsx(s,{...e,children:t.jsx("span",{className:"cursor-default border-b border-dotted border-muted-foreground text-sm",children:"Tax basis"})})};var l,c,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Hover for details',
    content: 'Usage is metered per successful API call in this environment.',
    delayDuration: 400,
    side: 'top'
  },
  render: args => <DesignTooltip {...args}>\r
            <Button variant='ghost'>Hover for details</Button>\r
        </DesignTooltip>,
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Tax basis',
    content: 'Tax is calculated from the customer billing address on file.',
    delayDuration: 600
  },
  render: args => <DesignTooltip {...args}>\r
            <span className='cursor-default border-b border-dotted border-muted-foreground text-sm'>Tax basis</span>\r
        </DesignTooltip>
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const k=["Default","Informational"];export{r as Default,a as Informational,k as __namedExportsOrder,U as default};
