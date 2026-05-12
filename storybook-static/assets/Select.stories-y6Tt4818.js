import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-BioFo8Zg.js";import{within as V,userEvent as i,expect as _}from"./index-DH-M5T-F.js";import{S as o}from"./Select-C2F2AeAE.js";import"./index-yBjzXJbu.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-DxfDZ_MP.js";const n=[{value:"cus_1",label:"Northwind Traders"},{value:"cus_2",label:"Contoso Labs"},{value:"cus_3",label:"Fabrikam AI"},{value:"cus_4",label:"Adventure Works"}],I={title:"Design System/Atoms/SearchableSelect",component:o,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},placeholder:{control:"text"}}},s={args:{options:n,value:null,onChange:()=>{}},render:function(){const[t,e]=p.useState(null);return u.jsx(o,{label:"Customer",options:n,value:t,onChange:e})}},r={args:{options:n,value:null,onChange:()=>{}},render:function(){const[t,e]=p.useState("cus_2");return u.jsx(o,{options:n,value:t,onChange:e})}},l={args:{options:n,value:"cus_1",onChange:()=>{},disabled:!0},render:function(){return u.jsx(o,{options:n,value:"cus_1",onChange:()=>{},disabled:!0})}},c={args:{options:n,value:null,onChange:()=>{}},render:function(){const[t,e]=p.useState(null);return u.jsx(o,{label:"Customer",options:n,value:t,onChange:e})},play:async({canvasElement:a,step:t})=>{const e=V(a);await t("Open list and pick a row",async()=>{await i.click(e.getByRole("button",{name:/customer:/i}));const w=e.getByRole("textbox",{name:/filter options/i});await i.type(w,"Contoso"),await i.click(e.getByRole("option",{name:/contoso labs/i})),await _(e.getByRole("button",{name:/contoso labs/i})).toBeVisible()})}};var m,v,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    options,
    value: null,
    onChange: () => {}
  },
  render: function R() {
    const [v, setV] = useState<string | null>(null);
    return <SearchableSelect label='Customer' options={options} value={v} onChange={setV} />;
  }
}`,...(d=(v=s.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    options,
    value: null,
    onChange: () => {}
  },
  render: function R() {
    const [v, setV] = useState<string | null>('cus_2');
    return <SearchableSelect options={options} value={v} onChange={setV} />;
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var S,C,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    options,
    value: 'cus_1',
    onChange: () => {},
    disabled: true
  },
  render: function R() {
    return <SearchableSelect options={options} value='cus_1' onChange={() => {}} disabled />;
  }
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var f,x,R;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    options,
    value: null,
    onChange: () => {}
  },
  render: function R() {
    const [v, setV] = useState<string | null>(null);
    return <SearchableSelect label='Customer' options={options} value={v} onChange={setV} />;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Open list and pick a row', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: /customer:/i
      }));
      const search = canvas.getByRole('textbox', {
        name: /filter options/i
      });
      await userEvent.type(search, 'Contoso');
      await userEvent.click(canvas.getByRole('option', {
        name: /contoso labs/i
      }));
      await expect(canvas.getByRole('button', {
        name: /contoso labs/i
      })).toBeVisible();
    });
  }
}`,...(R=(x=c.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};const W=["Default","WithValue","Disabled","InteractionSelectOption"];export{s as Default,l as Disabled,c as InteractionSelectOption,r as WithValue,W as __namedExportsOrder,I as default};
