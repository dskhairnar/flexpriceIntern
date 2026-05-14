import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{within as i,userEvent as y,expect as v}from"./index-DH-M5T-F.js";import{B as b}from"./Button-S8hfweYc.js";import{r as d}from"./index-BioFo8Zg.js";import{R as w,a as T,P as R,C as D,A as j}from"./index-DACu-kmD.js";import{c as B}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";import"./index-gpsKM-Pt.js";import"./index-1evVQkiP.js";import"./loader-circle-BkrnLxqs.js";import"./createLucideIcon-DxfDZ_MP.js";import"./index-CncNTZwy.js";import"./index-B6ujFmsw.js";function a({children:e,content:t,delayDuration:s=400,side:g="top"}){const h=d.isValidElement(e)?e:o.jsx("span",{children:typeof e=="string"||typeof e=="number"?e:"More information"}),x=d.isValidElement(t)||typeof t=="string"||typeof t=="number"?t:"No additional details.";return o.jsxs(w,{delayDuration:s,children:[o.jsx(T,{asChild:!0,children:h}),o.jsx(R,{children:o.jsxs(D,{side:g,sideOffset:6,className:B("z-50 max-w-xs rounded-[6px] border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95"),children:[x,o.jsx(j,{className:"fill-popover",width:10,height:5})]})})]})}a.__docgenInfo={description:"Contextual hint on hover/focus. Requires `TooltipProvider` (added in Storybook preview).",methods:[],displayName:"DesignTooltip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},delayDuration:{required:!1,tsType:{name:"number"},description:"Radix delay before open (ms). Preview wraps `TooltipProvider`.",defaultValue:{value:"400",computed:!1}},side:{required:!1,tsType:{name:"ReactComponentProps['side']",raw:"React.ComponentProps<typeof TooltipPrimitive.Content>['side']"},description:"",defaultValue:{value:"'top'",computed:!1}}}};const U={title:"Design System/Atoms/Tooltip",component:a,tags:["autodocs"],argTypes:{delayDuration:{control:{type:"number",min:0,max:2e3,step:100}},side:{control:"select",options:["top","right","bottom","left"]},children:{control:"text"}}},r={args:{children:"Hover for details",content:"Usage is metered per successful API call in this environment.",delayDuration:400,side:"top"},render:({children:e,...t})=>o.jsx(a,{...t,children:o.jsx(b,{variant:"ghost",children:e})}),play:async({canvasElement:e,step:t})=>{const s=i(e);await t("Shows tooltip content on hover",async()=>{await y.hover(s.getByRole("button",{name:/hover for details/i})),await v(await i(document.body).findByText(/usage is metered/i)).toBeVisible()})}},n={args:{children:"Tax basis",content:"Tax is calculated from the customer billing address on file.",delayDuration:600,side:"top"},render:({children:e,...t})=>o.jsx(a,{...t,children:o.jsx("span",{className:"cursor-default border-b border-dotted border-muted-foreground text-sm",children:e})})};var l,c,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Hover for details',
    content: 'Usage is metered per successful API call in this environment.',
    delayDuration: 400,
    side: 'top'
  },
  render: ({
    children,
    ...args
  }) => <DesignTooltip {...args}>\r
            <Button variant='ghost'>{children}</Button>\r
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Tax basis',
    content: 'Tax is calculated from the customer billing address on file.',
    delayDuration: 600,
    side: 'top'
  },
  render: ({
    children,
    ...args
  }) => <DesignTooltip {...args}>\r
            <span className='cursor-default border-b border-dotted border-muted-foreground text-sm'>{children}</span>\r
        </DesignTooltip>
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const k=["Default","Informational"];export{r as Default,n as Informational,k as __namedExportsOrder,U as default};
