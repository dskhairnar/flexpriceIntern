import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-BioFo8Zg.js";import{within as k,userEvent as A,expect as D}from"./index-DH-M5T-F.js";import{c as l}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";const q={sm:"h-8 text-xs",md:"h-9 text-sm",lg:"h-10 text-base"},s=u.forwardRef(({className:n,label:t,error:e,id:a,prefix:f,size:R="md",disabled:x,...T},H)=>{const o=a??u.useId();return r.jsxs("div",{className:l("flex w-full max-w-md flex-col gap-1"),children:[t?r.jsx("label",{htmlFor:o,className:l("text-sm font-medium",x&&"opacity-50"),children:t}):null,r.jsxs("div",{className:l("flex w-full items-center rounded-[6px] border bg-background px-3 ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",q[R],e?"border-destructive":"border-input",x&&"cursor-not-allowed opacity-50"),children:[f?r.jsx("span",{className:"mr-2 shrink-0 text-muted-foreground",children:f}):null,r.jsx("input",{ref:H,id:o,disabled:x,className:l("min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground",n),"aria-invalid":e?!0:void 0,"aria-describedby":e?`${o}-error`:void 0,...T})]}),e?r.jsx("p",{id:`${o}-error`,className:"text-sm text-destructive",role:"alert",children:e}):null]})});s.displayName="Input";s.__docgenInfo={description:`Text and number field with optional label, error state, and prefix slot\r
(for currency or units) aligned with FlexPrice billing forms.`,methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:"Visible label above the field"},error:{required:!1,tsType:{name:"string"},description:"Validation or helper error shown below the field"},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Prepended adornment (e.g. currency symbol)"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const M={title:"Design System/Atoms/Input",component:s,tags:["autodocs"],decorators:[n=>r.jsx("div",{className:"w-[360px]",children:r.jsx(n,{})})],argTypes:{type:{control:"select",options:["text","number","email","password"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},error:{control:"text"}}},i={args:{label:"Display name",placeholder:"Acme Inc."}},c={args:{label:"Seats",type:"number",placeholder:"10"}},d={args:{label:"Email",type:"email",placeholder:"you@company.com",error:"Enter a valid work email"}},m={render:function(){const[t,e]=u.useState("49.00");return r.jsx(s,{label:"Unit price",value:t,onChange:a=>e(a.target.value),prefix:r.jsx("span",{className:"text-muted-foreground",children:"$"})})}},p={render:function(){const[t,e]=u.useState("");return r.jsx(s,{label:"Memo",placeholder:"Add an internal note",value:t,onChange:a=>e(a.target.value)})},play:async({canvasElement:n,step:t})=>{const e=k(n);await t("User can type into the field",async()=>{const a=e.getByRole("textbox",{name:/memo/i});await A.type(a,"Hello FlexPrice"),await D(a).toHaveValue("Hello FlexPrice")})}};var g,h,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Display name',
    placeholder: 'Acme Inc.'
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,b,w;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Seats',
    type: 'number',
    placeholder: '10'
  }
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var N,E,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@company.com',
    error: 'Enter a valid work email'
  }
}`,...(j=(E=d.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var I,S,V;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: function Currency() {
    const [v, setV] = useState('49.00');
    return <Input label='Unit price' value={v} onChange={e => setV(e.target.value)} prefix={<span className='text-muted-foreground'>$</span>} />;
  }
}`,...(V=(S=m.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var C,F,P;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function Controlled() {
    const [v, setV] = useState('');
    return <Input label='Memo' placeholder='Add an internal note' value={v} onChange={e => setV(e.target.value)} />;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('User can type into the field', async () => {
      const input = canvas.getByRole('textbox', {
        name: /memo/i
      });
      await userEvent.type(input, 'Hello FlexPrice');
      await expect(input).toHaveValue('Hello FlexPrice');
    });
  }
}`,...(P=(F=p.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const W=["Default","NumberField","WithError","CurrencyPrefix","InteractionType"];export{m as CurrencyPrefix,i as Default,p as InteractionType,c as NumberField,d as WithError,W as __namedExportsOrder,M as default};
