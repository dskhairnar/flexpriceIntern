import{within as x,userEvent as y,expect as v,fn as b}from"./index-DH-M5T-F.js";import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as w}from"./Button-d3MXu4I9.js";import{c as A}from"./utils-BLSKlp9E.js";import{c as T}from"./createLucideIcon-DxfDZ_MP.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";import"./index-gpsKM-Pt.js";import"./index-1evVQkiP.js";import"./loader-circle-BkrnLxqs.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=T("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);function f({icon:i,title:r,description:o,actionLabel:a="Create",onAction:s,className:h}){return e.jsxs("div",{className:A("flex min-h-[360px] flex-col items-center justify-center gap-4 rounded-[6px] border border-dashed border-border bg-muted/10 px-6 py-12 text-center",h),children:[e.jsx("div",{className:"rounded-full bg-muted p-4 text-muted-foreground",children:e.jsx(i,{className:"size-10","aria-hidden":!0})}),e.jsxs("div",{className:"max-w-md space-y-2",children:[e.jsx("h2",{className:"text-lg font-semibold tracking-tight",children:r}),e.jsx("p",{className:"text-sm text-muted-foreground",children:o})]}),s?e.jsx(w,{type:"button",onClick:s,children:a}):null]})}f.__docgenInfo={description:"Full-width empty surface for list pages before the first record exists.",methods:[],displayName:"EmptyState",props:{icon:{required:!0,tsType:{name:"LucideIcon"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},actionLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Create'",computed:!1}},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Design System/Organisms/EmptyState",component:f,tags:["autodocs"],argTypes:{title:{control:"text"},description:{control:"text"},actionLabel:{control:"text"}}},t={args:{icon:g,title:"No invoices yet",description:"When your first invoice is generated it will appear in this list.",actionLabel:"Create invoice",onAction:b()},play:async({args:i,canvasElement:r,step:o})=>{const a=x(r);await o("Invokes the CTA action",async()=>{await y.click(a.getByRole("button",{name:/create invoice/i})),await v(i.onAction).toHaveBeenCalled()})}},n={args:{icon:g,title:"All caught up",description:"There is nothing to review for this period."}};var c,p,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    icon: Inbox,
    title: 'No invoices yet',
    description: 'When your first invoice is generated it will appear in this list.',
    actionLabel: 'Create invoice',
    onAction: fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Invokes the CTA action', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: /create invoice/i
      }));
      await expect(args.onAction).toHaveBeenCalled();
    });
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,m,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    icon: Inbox,
    title: 'All caught up',
    description: 'There is nothing to review for this period.'
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const _=["Default","WithoutAction"];export{t as Default,n as WithoutAction,_ as __namedExportsOrder,W as default};
