import{j as g}from"./jsx-runtime-Cf8x2fCZ.js";import{r as a}from"./index-BioFo8Zg.js";import{D as p}from"./DataTable-BwV0cLgX.js";import"./index-yBjzXJbu.js";import"./index-CncNTZwy.js";import"./index-B6ujFmsw.js";import"./utils-BLSKlp9E.js";import"./Spinner-XSuV86Rr.js";import"./loader-circle-BkrnLxqs.js";import"./createLucideIcon-DxfDZ_MP.js";const y=[{id:"inv_1",customer:"Northwind",amount:"$120.00",status:"paid"},{id:"inv_2",customer:"Contoso",amount:"$89.50",status:"open"},{id:"inv_3",customer:"Fabrikam",amount:"$240.00",status:"draft"}],q={title:"Design System/Molecules/DataTable",component:p,tags:["autodocs"]},c={args:{},render:function(){const[e,s]=a.useState(null),r=a.useMemo(()=>{if(!e)return y;const t=[...y];return t.sort((o,u)=>{const n=o[e.columnId],P=u[e.columnId],S=String(n).localeCompare(String(P));return e.direction==="asc"?S:-S}),t},[e]);return g.jsx(p,{columns:[{id:"customer",header:"Customer",sortable:!0,accessorKey:"customer"},{id:"amount",header:"Amount",sortable:!0,accessorKey:"amount"},{id:"status",header:"Status",accessorKey:"status"}],rows:r,getRowId:t=>t.id,sort:e,onSortChange:s,page:1,pageSize:10,totalRows:r.length})}},m={args:{columns:[{id:"customer",header:"Customer",accessorKey:"customer"},{id:"amount",header:"Amount",accessorKey:"amount"}],rows:[],loading:!0}},i={args:{columns:[{id:"customer",header:"Customer",accessorKey:"customer"},{id:"amount",header:"Amount",accessorKey:"amount"}],rows:[],emptyMessage:"No invoices for this filter."}},d={args:{},render:function(){const e=a.useMemo(()=>Array.from({length:37}).map((u,n)=>({id:`inv_${n}`,customer:`Customer ${n+1}`,amount:`$${(n+1)*10}.00`,status:n%2===0?"paid":"open"})),[]),[s,r]=a.useState(1),t=10,o=e.slice((s-1)*t,s*t);return g.jsx(p,{columns:[{id:"customer",header:"Customer",accessorKey:"customer"},{id:"amount",header:"Amount",accessorKey:"amount"},{id:"status",header:"Status",accessorKey:"status"}],rows:o,getRowId:u=>u.id,page:s,pageSize:t,totalRows:e.length,onPageChange:r})}},l={args:{},render:function(){const e=a.useMemo(()=>Array.from({length:1e4}).map((t,o)=>({id:`row_${o}`,customer:`Customer ${o+1}`,amount:`$${(o%50+1)*25}.00`,status:o%3===0?"paid":"open"})),[]),[s,r]=a.useState(null);return g.jsx(p,{virtual:!0,virtualRowHeight:40,scrollHeight:420,columns:[{id:"customer",header:"Customer",sortable:!0,accessorKey:"customer"},{id:"amount",header:"Amount",sortable:!0,accessorKey:"amount"},{id:"status",header:"Status",accessorKey:"status"}],rows:e,getRowId:t=>t.id,sort:s,onSortChange:r})}};var w,K,f;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
  }
}`,...(f=(K=c.parameters)==null?void 0:K.docs)==null?void 0:f.source}}};var R,b,C;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(C=(b=m.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var $,v,A;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(A=(v=i.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var _,T,z;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
  }
}`,...(z=(T=d.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var I,D,M;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(D=l.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const B=["Default","Loading","Empty","Pagination","VirtualizedTenThousandRows"];export{c as Default,i as Empty,m as Loading,d as Pagination,l as VirtualizedTenThousandRows,B as __namedExportsOrder,q as default};
