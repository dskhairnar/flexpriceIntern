import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-BioFo8Zg.js";import{c as v}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";function o({value:t,onChange:a,label:n="Date range",className:f}){return e.jsxs("fieldset",{className:v("flex flex-wrap items-end gap-3",f),children:[e.jsx("legend",{className:"mb-2 w-full text-sm font-medium",children:n}),e.jsxs("label",{className:"flex flex-col gap-1 text-xs text-muted-foreground",children:["Start",e.jsx("input",{type:"date",className:"h-9 rounded-[6px] border border-input bg-background px-2 text-sm",value:t.start,onChange:u=>a({...t,start:u.target.value})})]}),e.jsxs("label",{className:"flex flex-col gap-1 text-xs text-muted-foreground",children:["End",e.jsx("input",{type:"date",className:"h-9 rounded-[6px] border border-input bg-background px-2 text-sm",value:t.end,onChange:u=>a({...t,end:u.target.value})})]})]})}o.__docgenInfo={description:"Lightweight analytics range control using native date inputs (no external date lib).",methods:[],displayName:"DateRangePicker",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(next: DateRangeValue) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]}},name:"next"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Date range'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const w={title:"Design System/Molecules/DateRangePicker",component:o,tags:["autodocs"]},x={start:"",end:""},r={args:{value:x,onChange:()=>{}},render:function(){const[a,n]=m.useState({start:"2026-01-01",end:"2026-01-31"});return e.jsx(o,{value:a,onChange:n})}},s={args:{value:x,onChange:()=>{},label:"Usage window"},render:function(){const[a,n]=m.useState({start:"",end:""});return e.jsx(o,{label:"Usage window",value:a,onChange:n})}};var l,i,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var g,c,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const D=["Default","CustomLabel"];export{s as CustomLabel,r as Default,D as __namedExportsOrder,w as default};
