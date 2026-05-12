import{j as w}from"./jsx-runtime-Cf8x2fCZ.js";import{within as y,userEvent as I,expect as k}from"./index-DH-M5T-F.js";import{r as c}from"./index-BioFo8Zg.js";import{D as g}from"./DataTable-BwV0cLgX.js";import"./index-yBjzXJbu.js";import"./index-CncNTZwy.js";import"./index-B6ujFmsw.js";import"./utils-BLSKlp9E.js";import"./Spinner-XSuV86Rr.js";import"./loader-circle-BkrnLxqs.js";import"./createLucideIcon-DxfDZ_MP.js";const S=[{id:"inv_1",customer:"Northwind",amount:"$120.00",status:"paid"},{id:"inv_2",customer:"Contoso",amount:"$89.50",status:"open"},{id:"inv_3",customer:"Fabrikam",amount:"$240.00",status:"draft"}],Q={title:"Design System/Molecules/DataTable",component:g,tags:["autodocs"]},i={args:{},render:function(){const[e,t]=c.useState(null),o=c.useMemo(()=>{if(!e)return S;const s=[...S];return s.sort((n,u)=>{const r=n[e.columnId],D=u[e.columnId],h=String(r).localeCompare(String(D));return e.direction==="asc"?h:-h}),s},[e]);return w.jsx(g,{columns:[{id:"customer",header:"Customer",sortable:!0,accessorKey:"customer"},{id:"amount",header:"Amount",sortable:!0,accessorKey:"amount"},{id:"status",header:"Status",accessorKey:"status"}],rows:o,getRowId:s=>s.id,sort:e,onSortChange:t,page:1,pageSize:10,totalRows:o.length})},play:async({canvasElement:a,step:e})=>{const t=y(a);await e("Sorts when a sortable column header is clicked",async()=>{await I.click(t.getByRole("button",{name:/customer/i}));const o=t.getAllByRole("row");await k(y(o[1]).getByText("Contoso")).toBeVisible()})}},m={args:{columns:[{id:"customer",header:"Customer",accessorKey:"customer"},{id:"amount",header:"Amount",accessorKey:"amount"}],rows:[],loading:!0}},l={args:{columns:[{id:"customer",header:"Customer",accessorKey:"customer"},{id:"amount",header:"Amount",accessorKey:"amount"}],rows:[],emptyMessage:"No invoices for this filter."}},d={args:{},render:function(){const e=c.useMemo(()=>Array.from({length:37}).map((u,r)=>({id:`inv_${r}`,customer:`Customer ${r+1}`,amount:`$${(r+1)*10}.00`,status:r%2===0?"paid":"open"})),[]),[t,o]=c.useState(1),s=10,n=e.slice((t-1)*s,t*s);return w.jsx(g,{columns:[{id:"customer",header:"Customer",accessorKey:"customer"},{id:"amount",header:"Amount",accessorKey:"amount"},{id:"status",header:"Status",accessorKey:"status"}],rows:n,getRowId:u=>u.id,page:t,pageSize:s,totalRows:e.length,onPageChange:o})},play:async({canvasElement:a,step:e})=>{const t=y(a);await e("Moves to the next page",async()=>{await I.click(t.getByRole("button",{name:/next/i})),await k(t.getByText("Customer 11")).toBeVisible()})}},p={args:{},render:function(){const e=c.useMemo(()=>Array.from({length:1e4}).map((s,n)=>({id:`row_${n}`,customer:`Customer ${n+1}`,amount:`$${(n%50+1)*25}.00`,status:n%3===0?"paid":"open"})),[]),[t,o]=c.useState(null);return w.jsx(g,{virtual:!0,virtualRowHeight:40,scrollHeight:420,columns:[{id:"customer",header:"Customer",sortable:!0,accessorKey:"customer"},{id:"amount",header:"Amount",sortable:!0,accessorKey:"amount"},{id:"status",header:"Status",accessorKey:"status"}],rows:e,getRowId:s=>s.id,sort:t,onSortChange:o})}};var v,b,R;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  render: function Table() {
    const [sort, setSort] = useState<SortState | null>(null);
    const sorted = useMemo(() => {
      if (!sort) return baseRows;
      const copy = [...baseRows];
      copy.sort((a, b) => {
        const av = a[sort.columnId as keyof Row];
        const bv = b[sort.columnId as keyof Row];
        const cmp = String(av).localeCompare(String(bv));
        return sort.direction === 'asc' ? cmp : -cmp;
      });
      return copy;
    }, [sort]);
    return <DataTable<Row> columns={[{
      id: 'customer',
      header: 'Customer',
      sortable: true,
      accessorKey: 'customer'
    }, {
      id: 'amount',
      header: 'Amount',
      sortable: true,
      accessorKey: 'amount'
    }, {
      id: 'status',
      header: 'Status',
      accessorKey: 'status'
    }]} rows={sorted} getRowId={r => r.id} sort={sort} onSortChange={setSort} page={1} pageSize={10} totalRows={sorted.length} />;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Sorts when a sortable column header is clicked', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: /customer/i
      }));
      const rows = canvas.getAllByRole('row');
      await expect(within(rows[1]).getByText('Contoso')).toBeVisible();
    });
  }
}`,...(R=(b=i.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var C,f,K;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'customer',
      header: 'Customer',
      accessorKey: 'customer'
    }, {
      id: 'amount',
      header: 'Amount',
      accessorKey: 'amount'
    }],
    rows: [],
    loading: true
  }
}`,...(K=(f=m.parameters)==null?void 0:f.docs)==null?void 0:K.source}}};var x,$,A;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'customer',
      header: 'Customer',
      accessorKey: 'customer'
    }, {
      id: 'amount',
      header: 'Amount',
      accessorKey: 'amount'
    }],
    rows: [],
    emptyMessage: 'No invoices for this filter.'
  }
}`,...(A=($=l.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var T,B,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: function Paginated() {
    const all = useMemo(() => Array.from({
      length: 37
    }).map((_, i): Row => ({
      id: \`inv_\${i}\`,
      customer: \`Customer \${i + 1}\`,
      amount: \`$\${(i + 1) * 10}.00\`,
      status: i % 2 === 0 ? 'paid' : 'open'
    })), []);
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const slice = all.slice((page - 1) * pageSize, page * pageSize);
    return <DataTable<Row> columns={[{
      id: 'customer',
      header: 'Customer',
      accessorKey: 'customer'
    }, {
      id: 'amount',
      header: 'Amount',
      accessorKey: 'amount'
    }, {
      id: 'status',
      header: 'Status',
      accessorKey: 'status'
    }]} rows={slice} getRowId={r => r.id} page={page} pageSize={pageSize} totalRows={all.length} onPageChange={setPage} />;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Moves to the next page', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: /next/i
      }));
      await expect(canvas.getByText('Customer 11')).toBeVisible();
    });
  }
}`,...(_=(B=d.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var E,M,z;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {},
  render: function Virtual() {
    const rows = useMemo(() => Array.from({
      length: 10_000
    }).map((_, i): Row => ({
      id: \`row_\${i}\`,
      customer: \`Customer \${i + 1}\`,
      amount: \`$\${(i % 50 + 1) * 25}.00\`,
      status: i % 3 === 0 ? 'paid' : 'open'
    })), []);
    const [sort, setSort] = useState<SortState | null>(null);
    return <DataTable<Row> virtual virtualRowHeight={40} scrollHeight={420} columns={[{
      id: 'customer',
      header: 'Customer',
      sortable: true,
      accessorKey: 'customer'
    }, {
      id: 'amount',
      header: 'Amount',
      sortable: true,
      accessorKey: 'amount'
    }, {
      id: 'status',
      header: 'Status',
      accessorKey: 'status'
    }]} rows={rows} getRowId={r => r.id} sort={sort} onSortChange={setSort} />;
  }
}`,...(z=(M=p.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};const U=["Default","Loading","Empty","Pagination","VirtualizedTenThousandRows"];export{i as Default,l as Empty,m as Loading,d as Pagination,p as VirtualizedTenThousandRows,U as __namedExportsOrder,Q as default};
