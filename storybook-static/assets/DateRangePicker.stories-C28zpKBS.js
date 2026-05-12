import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{within as f,userEvent as c,expect as y}from"./index-DH-M5T-F.js";import{r as o}from"./index-BioFo8Zg.js";import{c as b}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";function i({value:n,onChange:e,label:s="Date range",className:a}){return r.jsxs("fieldset",{className:b("flex flex-wrap items-end gap-3",a),children:[r.jsx("legend",{className:"mb-2 w-full text-sm font-medium",children:s}),r.jsxs("label",{className:"flex flex-col gap-1 text-xs text-muted-foreground",children:["Start",r.jsx("input",{type:"date",className:"h-9 rounded-[6px] border border-input bg-background px-2 text-sm",value:n.start,onChange:t=>e({...n,start:t.target.value})})]}),r.jsxs("label",{className:"flex flex-col gap-1 text-xs text-muted-foreground",children:["End",r.jsx("input",{type:"date",className:"h-9 rounded-[6px] border border-input bg-background px-2 text-sm",value:n.end,onChange:t=>e({...n,end:t.target.value})})]})]})}i.__docgenInfo={description:"Lightweight analytics range control using native date inputs (no external date lib).",methods:[],displayName:"DateRangePicker",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(next: DateRangeValue) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]}},name:"next"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Date range'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"Design System/Molecules/DateRangePicker",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},onChange:{table:{disable:!0}}}},h={start:"",end:""},u={args:{label:"Date range",value:{start:"2026-01-01",end:"2026-01-31"},onChange:()=>{}},render:function(e){const[s,a]=o.useState(e.value);return o.useEffect(()=>a(e.value),[e.value]),r.jsx(i,{...e,value:s,onChange:t=>{a(t),e.onChange(t)}})},play:async({canvasElement:n,step:e})=>{const s=f(n);await e("Updates native date inputs",async()=>{const a=s.getByLabelText(/start/i);await c.clear(a),await c.type(a,"2026-02-01"),await y(a).toHaveValue("2026-02-01")})}},l={args:{value:h,onChange:()=>{},label:"Usage window"},render:function(e){const[s,a]=o.useState(e.value);return o.useEffect(()=>a(e.value),[e.value]),r.jsx(i,{...e,value:s,onChange:t=>{a(t),e.onChange(t)}})}};var g,d,p;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Date range',
    value: {
      start: '2026-01-01',
      end: '2026-01-31'
    },
    onChange: () => {}
  },
  render: function R(args) {
    const [value, setValue] = useState<DateRangeValue>(args.value);
    useEffect(() => setValue(args.value), [args.value]);
    return <DateRangePicker {...args} value={value} onChange={next => {
      setValue(next);
      args.onChange(next);
    }} />;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Updates native date inputs', async () => {
      const start = canvas.getByLabelText(/start/i);
      await userEvent.clear(start);
      await userEvent.type(start, '2026-02-01');
      await expect(start).toHaveValue('2026-02-01');
    });
  }
}`,...(p=(d=u.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,v,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: noopRange,
    onChange: () => {},
    label: 'Usage window'
  },
  render: function R(args) {
    const [value, setValue] = useState<DateRangeValue>(args.value);
    useEffect(() => setValue(args.value), [args.value]);
    return <DateRangePicker {...args} value={value} onChange={next => {
      setValue(next);
      args.onChange(next);
    }} />;
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const j=["Default","CustomLabel"];export{l as CustomLabel,u as Default,j as __namedExportsOrder,V as default};
