import{j as p}from"./jsx-runtime-Cf8x2fCZ.js";import{r as A}from"./index-BioFo8Zg.js";import{within as E,userEvent as i,expect as B}from"./index-DH-M5T-F.js";import{S as c}from"./Select-C2F2AeAE.js";import"./index-yBjzXJbu.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-DxfDZ_MP.js";const{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,u=[{value:"cus_1",label:"Northwind Traders"},{value:"cus_2",label:"Contoso Labs"},{value:"cus_3",label:"Fabrikam AI"},{value:"cus_4",label:"Adventure Works"}],T={title:"Design System/Atoms/SearchableSelect",component:c,tags:["autodocs"],argTypes:{label:{control:"text"},disabled:{control:"boolean"},placeholder:{control:"text"},value:{control:"select",options:[null,"cus_1","cus_2","cus_3","cus_4"]},options:{table:{disable:!0}},onChange:{table:{disable:!0}}}},o={args:{label:"Customer",options:u,value:null,onChange:()=>{},placeholder:"Select customer..."},render:function(e){const[,n]=w();return p.jsx(c,{...e,onChange:a=>{n({value:a}),e.onChange(a)}})}},s={args:{label:"Customer",options:u,value:"cus_2",onChange:()=>{},placeholder:"Select customer..."},render:function(e){const[,n]=w();return p.jsx(c,{...e,onChange:a=>{n({value:a}),e.onChange(a)}})}},r={args:{label:"Customer",options:u,value:"cus_1",onChange:()=>{},disabled:!0,placeholder:"Select customer..."}},l={args:{label:"Customer",options:u,value:null,onChange:()=>{},placeholder:"Select customer..."},render:function(e){const[n,a]=A.useState(null);return p.jsx(c,{...e,value:n,onChange:m=>{a(m),e.onChange(m)}})},play:async({canvasElement:t,step:e})=>{const n=E(t);await e("Open list and pick a row",async()=>{await i.click(n.getByRole("button",{name:/customer:/i}));const a=n.getByRole("textbox",{name:/filter options/i});await i.type(a,"Contoso"),await i.click(n.getByRole("option",{name:/contoso labs/i})),await B(n.getByRole("button",{name:/contoso labs/i})).toBeVisible()})}};var g,d,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Customer',
    options,
    value: null,
    onChange: () => {},
    placeholder: 'Select customer...'
  },
  render: function R(args) {
    const [, updateArgs] = useArgs();
    return <SearchableSelect {...args} onChange={next => {
      updateArgs({
        value: next
      });
      args.onChange(next);
    }} />;
  }
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var b,v,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Customer',
    options,
    value: 'cus_2',
    onChange: () => {},
    placeholder: 'Select customer...'
  },
  render: function R(args) {
    const [, updateArgs] = useArgs();
    return <SearchableSelect {...args} onChange={next => {
      updateArgs({
        value: next
      });
      args.onChange(next);
    }} />;
  }
}`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,x,_;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Customer',
    options,
    value: 'cus_1',
    onChange: () => {},
    disabled: true,
    placeholder: 'Select customer...'
  }
}`,...(_=(x=r.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var y,R,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Customer',
    options,
    value: null,
    onChange: () => {},
    placeholder: 'Select customer...'
  },
  render: function R(args) {
    const [v, setV] = useState<string | null>(null);
    return <SearchableSelect {...args} value={v} onChange={next => {
      setV(next);
      args.onChange(next);
    }} />;
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
}`,...(f=(R=l.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};const L=["Default","WithValue","Disabled","InteractionSelectOption"];export{o as Default,r as Disabled,l as InteractionSelectOption,s as WithValue,L as __namedExportsOrder,T as default};
