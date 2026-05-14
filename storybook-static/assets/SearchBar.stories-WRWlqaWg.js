import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as v}from"./index-BioFo8Zg.js";import{fn as y,within as g,userEvent as i,expect as l}from"./index-DH-M5T-F.js";import{S as u}from"./SearchBar-C4qJDvV8.js";import"./index-yBjzXJbu.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-DxfDZ_MP.js";const B={title:"Design System/Molecules/SearchBar",component:u,tags:["autodocs"],argTypes:{debounceMs:{control:{type:"number",min:0,max:2e3,step:50}},placeholder:{control:"text"},onSearch:{table:{disable:!0}}}},s={args:{debounceMs:300,placeholder:"Search customers...",onSearch:y()},render:function(e){const[n,a]=v.useState("");return t.jsxs("div",{className:"space-y-2",children:[t.jsx(u,{...e,onSearch:r=>{a(r),e.onSearch(r)}}),t.jsxs("p",{className:"text-xs text-muted-foreground",children:["Debounced query: ",n||"-"]})]})}},c={args:{debounceMs:300,onSearch:y(),placeholder:"Search..."},render:function(e){const[n,a]=v.useState("");return t.jsxs("div",{className:"space-y-2",children:[t.jsx(u,{...e,onSearch:r=>{a(r),e.onSearch(r)}}),t.jsxs("p",{className:"text-xs text-muted-foreground",children:["Last query: ",n||"-"]})]})},play:async({canvasElement:o,step:e})=>{const n=g(o);await e("Type then clear search",async()=>{const a=n.getByRole("textbox",{name:/search/i});await i.type(a,"invoice"),await l(a).toHaveValue("invoice"),await i.click(n.getByRole("button",{name:/clear search/i})),await l(a).toHaveValue("")})}};var p,m,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    debounceMs: 300,
    placeholder: 'Search customers...',
    onSearch: fn()
  },
  render: function R(args) {
    const [q, setQ] = useState('');
    return <div className='space-y-2'>\r
                <SearchBar {...args} onSearch={value => {
        setQ(value);
        args.onSearch(value);
      }} />\r
                <p className='text-xs text-muted-foreground'>Debounced query: {q || '-'}</p>\r
            </div>;
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,x,S;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    debounceMs: 300,
    onSearch: fn(),
    placeholder: 'Search...'
  },
  render: function R(args) {
    const [q, setQ] = useState('');
    return <div className='space-y-2'>\r
                <SearchBar {...args} onSearch={value => {
        setQ(value);
        args.onSearch(value);
      }} />\r
                <p className='text-xs text-muted-foreground'>Last query: {q || '-'}</p>\r
            </div>;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Type then clear search', async () => {
      const input = canvas.getByRole('textbox', {
        name: /search/i
      });
      await userEvent.type(input, 'invoice');
      await expect(input).toHaveValue('invoice');
      await userEvent.click(canvas.getByRole('button', {
        name: /clear search/i
      }));
      await expect(input).toHaveValue('');
    });
  }
}`,...(S=(x=c.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const N=["Default","InteractionClear"];export{s as Default,c as InteractionClear,N as __namedExportsOrder,B as default};
