import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{within as y,userEvent as l,expect as w}from"./index-DH-M5T-F.js";import{r as v}from"./index-BioFo8Zg.js";import{c as b}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";function u({value:e,onChange:t,label:n="Date range",className:r}){return a.jsxs("fieldset",{className:b("flex flex-wrap items-end gap-3",r),children:[a.jsx("legend",{className:"mb-2 w-full text-sm font-medium",children:n}),a.jsxs("label",{className:"flex flex-col gap-1 text-xs text-muted-foreground",children:["Start",a.jsx("input",{type:"date",className:"h-9 rounded-[6px] border border-input bg-background px-2 text-sm",value:e.start,onChange:i=>t({...e,start:i.target.value})})]}),a.jsxs("label",{className:"flex flex-col gap-1 text-xs text-muted-foreground",children:["End",a.jsx("input",{type:"date",className:"h-9 rounded-[6px] border border-input bg-background px-2 text-sm",value:e.end,onChange:i=>t({...e,end:i.target.value})})]})]})}u.__docgenInfo={description:"Lightweight analytics range control using native date inputs (no external date lib).",methods:[],displayName:"DateRangePicker",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(next: DateRangeValue) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]}},name:"next"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Date range'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"Design System/Molecules/DateRangePicker",component:u,tags:["autodocs"]},f={start:"",end:""},s={args:{value:f,onChange:()=>{}},render:function(){const[t,n]=v.useState({start:"2026-01-01",end:"2026-01-31"});return a.jsx(u,{value:t,onChange:n})},play:async({canvasElement:e,step:t})=>{const n=y(e);await t("Updates native date inputs",async()=>{const r=n.getByLabelText(/start/i);await l.clear(r),await l.type(r,"2026-02-01"),await w(r).toHaveValue("2026-02-01")})}},o={args:{value:f,onChange:()=>{},label:"Usage window"},render:function(){const[t,n]=v.useState({start:"",end:""});return a.jsx(u,{label:"Usage window",value:t,onChange:n})}};var c,d,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: noopRange,
    onChange: () => {}
  },
  render: function R() {
    const [value, setValue] = useState<DateRangeValue>({
      start: '2026-01-01',
      end: '2026-01-31'
    });
    return <DateRangePicker value={value} onChange={setValue} />;
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
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var p,m,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: noopRange,
    onChange: () => {},
    label: 'Usage window'
  },
  render: function R() {
    const [value, setValue] = useState<DateRangeValue>({
      start: '',
      end: ''
    });
    return <DateRangePicker label='Usage window' value={value} onChange={setValue} />;
  }
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const k=["Default","CustomLabel"];export{o as CustomLabel,s as Default,k as __namedExportsOrder,V as default};
