import{j as b}from"./jsx-runtime-Cf8x2fCZ.js";import{within as S,userEvent as q,expect as G}from"./index-DH-M5T-F.js";import{r as c}from"./index-BioFo8Zg.js";import{D as y}from"./DataTable-BgHxjbC-.js";import"./index-yBjzXJbu.js";import"./index-CncNTZwy.js";import"./index-B6ujFmsw.js";import"./utils-BLSKlp9E.js";import"./Spinner-XSuV86Rr.js";import"./loader-circle-BkrnLxqs.js";import"./createLucideIcon-DxfDZ_MP.js";const f=[{id:"inv_1",customer:"Northwind",amount:"$120.00",status:"paid"},{id:"inv_2",customer:"Contoso",amount:"$89.50",status:"open"},{id:"inv_3",customer:"Fabrikam",amount:"$240.00",status:"draft"}],a=[{id:"customer",header:"Customer",sortable:!0,accessorKey:"customer"},{id:"amount",header:"Amount",sortable:!0,accessorKey:"amount"},{id:"status",header:"Status",accessorKey:"status"}],ie={title:"Design System/Molecules/DataTable",component:y,tags:["autodocs"],parameters:{docs:{description:{component:"Production billing table with keyboard-sortable headers, loading and empty states, pagination, and optional virtualization for high-volume accounts."}}}},l={args:{},render:function(){const[e,t]=c.useState(null),o=c.useMemo(()=>{if(!e)return f;const n=[...f];return n.sort((r,u)=>{const i=r[e.columnId],J=u[e.columnId],R=String(i).localeCompare(String(J));return e.direction==="asc"?R:-R}),n},[e]);return b.jsx(y,{columns:a,rows:o,getRowId:n=>n.id,sort:e,onSortChange:t,page:1,pageSize:10,totalRows:o.length})},play:async({canvasElement:s,step:e})=>{const t=S(s);await e("Sorts when a sortable column header is clicked",async()=>{await q.click(t.getByRole("button",{name:/customer/i}));const o=t.getAllByRole("row");await G(S(o[1]).getByText("Contoso")).toBeVisible()})}},m={args:{columns:a,rows:[],loading:!0},parameters:{docs:{description:{story:"Slow API response state: keeps the table shape visible while invoice data is pending."}}}},d={args:{columns:a,rows:[],emptyMessage:"No invoices for this filter."}},p={args:{columns:a,rows:[],emptyMessage:"You do not have permission to view invoices for this workspace."},parameters:{docs:{description:{story:"Permission-denied empty state for restricted billing roles."}}}},g={args:{columns:a,rows:[{id:"inv_arch_1",customer:"Atlas Cloud",amount:"$12,980.00",status:"archived plan"},{id:"inv_arch_2",customer:"Northstar AI",amount:"$8,420.00",status:"final invoice"}],getRowId:s=>s.id},parameters:{docs:{description:{story:"Archived subscription plans still need readable invoice history and predictable table behavior."}}}},v={args:{columns:a,rows:[{id:"inv_over_1",customer:"Kite Fintech",amount:"$18,400.00",status:"usage exceeded"},{id:"inv_over_2",customer:"Orbit Labs",amount:"$7,920.00",status:"credit limit exceeded"}],getRowId:s=>s.id},parameters:{docs:{description:{story:"Billing exception state for accounts that exceeded entitlement or credit limits."}}}},w={args:{},render:function(){const e=c.useMemo(()=>Array.from({length:37}).map((u,i)=>({id:`inv_${i}`,customer:`Customer ${i+1}`,amount:`$${(i+1)*10}.00`,status:i%2===0?"paid":"open"})),[]),[t,o]=c.useState(1),n=10,r=e.slice((t-1)*n,t*n);return b.jsx(y,{columns:a,rows:r,getRowId:u=>u.id,page:t,pageSize:n,totalRows:e.length,onPageChange:o})},play:async({canvasElement:s,step:e})=>{const t=S(s);await e("Moves to the next page",async()=>{await q.click(t.getByRole("button",{name:/next/i})),await G(t.getByText("Customer 11")).toBeVisible()})}},h={args:{},render:function(){const e=c.useMemo(()=>Array.from({length:1e4}).map((n,r)=>({id:`row_${r}`,customer:`Enterprise customer ${r+1}`,amount:`$${(r%50+1)*25}.00`,status:r%3===0?"paid":"open"})),[]),[t,o]=c.useState(null);return b.jsx(y,{virtual:!0,virtualRowHeight:40,scrollHeight:420,columns:a,rows:e,getRowId:n=>n.id,sort:t,onSortChange:o})},parameters:{docs:{description:{story:"High-volume SaaS account with 10,000 invoices rendered through TanStack virtualization."}}}};var x,_,C;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    return <DataTable<Row> columns={invoiceColumns} rows={sorted} getRowId={r => r.id} sort={sort} onSortChange={setSort} page={1} pageSize={10} totalRows={sorted.length} />;
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
}`,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var $,I,A;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    columns: invoiceColumns,
    rows: [],
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Slow API response state: keeps the table shape visible while invoice data is pending.'
      }
    }
  }
}`,...(A=(I=m.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var E,B,P;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    columns: invoiceColumns,
    rows: [],
    emptyMessage: 'No invoices for this filter.'
  }
}`,...(P=(B=d.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var T,k,M;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    columns: invoiceColumns,
    rows: [],
    emptyMessage: 'You do not have permission to view invoices for this workspace.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Permission-denied empty state for restricted billing roles.'
      }
    }
  }
}`,...(M=(k=p.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var z,D,N;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    columns: invoiceColumns,
    rows: [{
      id: 'inv_arch_1',
      customer: 'Atlas Cloud',
      amount: '$12,980.00',
      status: 'archived plan'
    }, {
      id: 'inv_arch_2',
      customer: 'Northstar AI',
      amount: '$8,420.00',
      status: 'final invoice'
    }],
    getRowId: (r: Row) => r.id
  },
  parameters: {
    docs: {
      description: {
        story: 'Archived subscription plans still need readable invoice history and predictable table behavior.'
      }
    }
  }
}`,...(N=(D=g.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var H,V,j;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    columns: invoiceColumns,
    rows: [{
      id: 'inv_over_1',
      customer: 'Kite Fintech',
      amount: '$18,400.00',
      status: 'usage exceeded'
    }, {
      id: 'inv_over_2',
      customer: 'Orbit Labs',
      amount: '$7,920.00',
      status: 'credit limit exceeded'
    }],
    getRowId: (r: Row) => r.id
  },
  parameters: {
    docs: {
      description: {
        story: 'Billing exception state for accounts that exceeded entitlement or credit limits.'
      }
    }
  }
}`,...(j=(V=v.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var K,F,O;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
    return <DataTable<Row> columns={invoiceColumns} rows={slice} getRowId={r => r.id} page={page} pageSize={pageSize} totalRows={all.length} onPageChange={setPage} />;
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
}`,...(O=(F=w.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var L,W,Y;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {},
  render: function Virtual() {
    const rows = useMemo(() => Array.from({
      length: 10_000
    }).map((_, i): Row => ({
      id: \`row_\${i}\`,
      customer: \`Enterprise customer \${i + 1}\`,
      amount: \`$\${(i % 50 + 1) * 25}.00\`,
      status: i % 3 === 0 ? 'paid' : 'open'
    })), []);
    const [sort, setSort] = useState<SortState | null>(null);
    return <DataTable<Row> virtual virtualRowHeight={40} scrollHeight={420} columns={invoiceColumns} rows={rows} getRowId={r => r.id} sort={sort} onSortChange={setSort} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'High-volume SaaS account with 10,000 invoices rendered through TanStack virtualization.'
      }
    }
  }
}`,...(Y=(W=h.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const ce=["Default","SlowApiResponse","Empty","NoPermissions","ArchivedPlan","BillingExceeded","Pagination","EnterpriseCustomerWithTenThousandInvoices"];export{g as ArchivedPlan,v as BillingExceeded,l as Default,d as Empty,h as EnterpriseCustomerWithTenThousandInvoices,p as NoPermissions,w as Pagination,m as SlowApiResponse,ce as __namedExportsOrder,ie as default};
