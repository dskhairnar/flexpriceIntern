import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-BioFo8Zg.js";import{within as H,userEvent as k,expect as A}from"./index-DH-M5T-F.js";import{c}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";const D={sm:"h-8 text-xs",md:"h-9 text-sm",lg:"h-10 text-base"},l=o.forwardRef(({className:n,label:e,error:r,id:a,prefix:s,size:R="md",disabled:x,...T},z)=>{const i=a??o.useId();return t.jsxs("div",{className:c("flex w-full max-w-md flex-col gap-1"),children:[e?t.jsx("label",{htmlFor:i,className:c("text-sm font-medium",x&&"opacity-50"),children:e}):null,t.jsxs("div",{className:c("flex w-full items-center rounded-[6px] border bg-background px-3 ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",D[R],r?"border-destructive":"border-input",x&&"cursor-not-allowed opacity-50"),children:[s?t.jsx("span",{className:"mr-2 shrink-0 text-muted-foreground",children:s}):null,t.jsx("input",{ref:z,id:i,disabled:x,className:c("min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground",n),"aria-invalid":r?!0:void 0,"aria-describedby":r?`${i}-error`:void 0,...T})]}),r?t.jsx("p",{id:`${i}-error`,className:"text-sm text-destructive",role:"alert",children:r}):null]})});l.displayName="Input";l.__docgenInfo={description:`Text and number field with optional label, error state, and prefix slot\r
(for currency or units) aligned with FlexPrice billing forms.`,methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:"Visible label above the field"},error:{required:!1,tsType:{name:"string"},description:"Validation or helper error shown below the field"},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Prepended adornment (e.g. currency symbol)"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const M={title:"Design System/Atoms/Input",component:l,tags:["autodocs"],decorators:[n=>t.jsx("div",{className:"w-[360px]",children:t.jsx(n,{})})],argTypes:{type:{control:"select",options:["text","number","email","password"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},error:{control:"text"},prefix:{table:{disable:!0}}}},d={args:{label:"Display name",placeholder:"Acme Inc."}},u={args:{label:"Seats",type:"number",placeholder:"10"}},m={args:{label:"Email",type:"email",placeholder:"you@company.com",error:"Enter a valid work email"}},p={args:{label:"Unit price",value:"49.00",size:"md",type:"text"},render:function(e){const[r,a]=o.useState(String(e.value??"49.00"));return o.useEffect(()=>a(String(e.value??"")),[e.value]),t.jsx(l,{...e,value:r,onChange:s=>a(s.target.value),prefix:t.jsx("span",{className:"text-muted-foreground",children:"$"})})}},g={args:{label:"Memo",placeholder:"Add an internal note",size:"md"},render:function(e){const[r,a]=o.useState("");return t.jsx(l,{...e,value:r,onChange:s=>a(s.target.value)})},play:async({canvasElement:n,step:e})=>{const r=H(n);await e("User can type into the field",async()=>{const a=r.getByRole("textbox",{name:/memo/i});await k.type(a,"Hello FlexPrice"),await A(a).toHaveValue("Hello FlexPrice")})}};var f,v,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Display name',
    placeholder: 'Acme Inc.'
  }
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,b,w;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Seats',
    type: 'number',
    placeholder: '10'
  }
}`,...(w=(b=u.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var E,S,N;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@company.com',
    error: 'Enter a valid work email'
  }
}`,...(N=(S=m.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var j,I,V;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Unit price',
    value: '49.00',
    size: 'md',
    type: 'text'
  },
  render: function Currency(args) {
    const [v, setV] = useState(String(args.value ?? '49.00'));
    useEffect(() => setV(String(args.value ?? '')), [args.value]);
    return <Input {...args} value={v} onChange={e => setV(e.target.value)} prefix={<span className='text-muted-foreground'>$</span>} />;
  }
}`,...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var C,F,P;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Memo',
    placeholder: 'Add an internal note',
    size: 'md'
  },
  render: function Controlled(args) {
    const [v, setV] = useState('');
    return <Input {...args} value={v} onChange={e => setV(e.target.value)} />;
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
}`,...(P=(F=g.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const W=["Default","NumberField","WithError","CurrencyPrefix","InteractionType"];export{p as CurrencyPrefix,d as Default,g as InteractionType,u as NumberField,m as WithError,W as __namedExportsOrder,M as default};
