import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{within as f,userEvent as h,expect as v,fn as b}from"./index-DH-M5T-F.js";import{B as w}from"./Button-S8hfweYc.js";import{c as j}from"./utils-BLSKlp9E.js";import{c as E}from"./createLucideIcon-DxfDZ_MP.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";import"./index-gpsKM-Pt.js";import"./index-1evVQkiP.js";import"./loader-circle-BkrnLxqs.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=E("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);function o({icon:t,title:a,description:s,actionLabel:c="Create",onAction:d,className:y}){return e.jsxs("div",{className:j("flex min-h-[360px] flex-col items-center justify-center gap-4 rounded-[6px] border border-dashed border-border bg-muted/10 px-6 py-12 text-center",y),children:[e.jsx("div",{className:"rounded-full bg-muted p-4 text-muted-foreground",children:e.jsx(t,{className:"size-10","aria-hidden":!0})}),e.jsxs("div",{className:"max-w-md space-y-2",children:[e.jsx("h2",{className:"text-lg font-semibold tracking-tight",children:a}),e.jsx("p",{className:"text-sm text-muted-foreground",children:s})]}),d?e.jsx(w,{type:"button",onClick:d,children:c}):null]})}o.__docgenInfo={description:"Full-width empty surface for list pages before the first record exists.",methods:[],displayName:"EmptyState",props:{icon:{required:!0,tsType:{name:"LucideIcon"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},actionLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Create'",computed:!1}},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Design System/Organisms/EmptyState",component:o,tags:["autodocs"],argTypes:{icon:{table:{disable:!0}},title:{control:"text"},description:{control:"text"},actionLabel:{control:"text"}}},n={args:{icon:r,title:"No invoices yet",description:"When your first invoice is generated it will appear in this list.",actionLabel:"Create invoice",onAction:b()},render:t=>e.jsx(o,{...t,icon:r}),play:async({args:t,canvasElement:a,step:s})=>{const c=f(a);await s("Invokes the CTA action",async()=>{await h.click(c.getByRole("button",{name:/create invoice/i})),await v(t.onAction).toHaveBeenCalled()})}},i={args:{icon:r,title:"All caught up",description:"There is nothing to review for this period."},render:t=>e.jsx(o,{...t,icon:r})};var p,l,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: Inbox,
    title: 'No invoices yet',
    description: 'When your first invoice is generated it will appear in this list.',
    actionLabel: 'Create invoice',
    onAction: fn()
  },
  render: args => <EmptyState {...args} icon={Inbox} />,
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
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,g,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    icon: Inbox,
    title: 'All caught up',
    description: 'There is nothing to review for this period.'
  },
  render: args => <EmptyState {...args} icon={Inbox} />
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const _=["Default","WithoutAction"];export{n as Default,i as WithoutAction,_ as __namedExportsOrder,W as default};
