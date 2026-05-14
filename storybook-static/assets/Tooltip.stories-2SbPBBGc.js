import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{within as d,userEvent as y,expect as v}from"./index-DH-M5T-F.js";import{B as b}from"./Button-S8hfweYc.js";import{r as l}from"./index-BioFo8Zg.js";import{R as w,a as T,P as R,C as D,A as j}from"./index-DACu-kmD.js";import{c as C}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";import"./index-gpsKM-Pt.js";import"./index-1evVQkiP.js";import"./loader-circle-BkrnLxqs.js";import"./createLucideIcon-DxfDZ_MP.js";import"./index-CncNTZwy.js";import"./index-B6ujFmsw.js";function s({children:e,content:t,delayDuration:a=400,side:i="top"}){const h=l.isValidElement(e)?e:o.jsx("span",{children:typeof e=="string"||typeof e=="number"?e:"More information"}),x=l.isValidElement(t)||typeof t=="string"||typeof t=="number"?t:"No additional details.";return o.jsxs(w,{delayDuration:a,children:[o.jsx(T,{asChild:!0,children:h}),o.jsx(R,{children:o.jsxs(D,{side:i,sideOffset:6,className:C("z-50 max-w-xs rounded-[6px] border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95"),children:[x,o.jsx(j,{className:"fill-popover",width:10,height:5})]})})]})}s.__docgenInfo={description:"Contextual hint on hover/focus. Requires `TooltipProvider` (added in Storybook preview).",methods:[],displayName:"DesignTooltip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},delayDuration:{required:!1,tsType:{name:"number"},description:"Radix delay before open (ms). Preview wraps `TooltipProvider`.",defaultValue:{value:"400",computed:!1}},side:{required:!1,tsType:{name:"ReactComponentProps['side']",raw:"React.ComponentProps<typeof TooltipPrimitive.Content>['side']"},description:"",defaultValue:{value:"'top'",computed:!1}}}};const U={title:"Design System/Atoms/Tooltip",component:s,tags:["autodocs"],argTypes:{delayDuration:{control:{type:"number",min:0,max:2e3,step:100}},side:{control:"select",options:["top","right","bottom","left"]},children:{control:"text"}}},r={args:{children:"Hover for details",content:"Usage is metered per successful API call in this environment.",delayDuration:400,side:"top"},render:({children:e,...t})=>o.jsx(s,{...t,children:o.jsx(b,{variant:"ghost",children:e})}),play:async({canvasElement:e,step:t})=>{const a=d(e);await t("Shows tooltip content on hover",async()=>{await y.hover(a.getByRole("button",{name:/hover for details/i}));const i=await d(document.body).findAllByText(/usage is metered/i);await v(i[0]).toBeVisible()})}},n={args:{children:"Tax basis",content:"Tax is calculated from the customer billing address on file.",delayDuration:600,side:"top"},render:({children:e,...t})=>o.jsx(s,{...t,children:o.jsx("span",{className:"cursor-default border-b border-dotted border-muted-foreground text-sm",children:e})})};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      const tooltipCopies = await within(document.body).findAllByText(/usage is metered/i);
      await expect(tooltipCopies[0]).toBeVisible();
    });
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,f,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const k=["Default","Informational"];export{r as Default,n as Informational,k as __namedExportsOrder,U as default};
