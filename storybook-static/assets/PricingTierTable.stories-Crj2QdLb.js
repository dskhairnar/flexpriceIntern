import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as f}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";function u({title:c="Graduated pricing",tiers:m,className:p}){return e.jsxs("div",{className:f("overflow-hidden rounded-[6px] border border-border",p),children:[e.jsx("div",{className:"border-b border-border bg-muted/50 px-4 py-2 text-sm font-semibold",children:c}),e.jsxs("table",{className:"w-full border-collapse text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border text-left text-xs uppercase text-muted-foreground",children:[e.jsx("th",{className:"px-4 py-2",children:"Tier"}),e.jsx("th",{className:"px-4 py-2",children:"From"}),e.jsx("th",{className:"px-4 py-2",children:"To"}),e.jsx("th",{className:"px-4 py-2",children:"Per unit"}),e.jsx("th",{className:"px-4 py-2",children:"Flat"})]})}),e.jsx("tbody",{children:m.map(r=>e.jsxs("tr",{className:"border-b border-border last:border-0 hover:bg-muted/30",children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:r.tier}),e.jsx("td",{className:"px-4 py-2 tabular-nums",children:r.from.toLocaleString()}),e.jsx("td",{className:"px-4 py-2 tabular-nums",children:r.to===null?"∞":r.to.toLocaleString()}),e.jsx("td",{className:"px-4 py-2 tabular-nums",children:r.unitPrice}),e.jsx("td",{className:"px-4 py-2 tabular-nums text-muted-foreground",children:r.flatFee??"—"})]},r.tier))})]})]})}u.__docgenInfo={description:"Read-only graduated or volume tier matrix for plan builder previews and docs.",methods:[],displayName:"PricingTierTable",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Graduated pricing'",computed:!1}},tiers:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
	tier: string;\r
	from: number;\r
	to: number | null;\r
	unitPrice: string;\r
	flatFee?: string;\r
}`,signature:{properties:[{key:"tier",value:{name:"string",required:!0}},{key:"from",value:{name:"number",required:!0}},{key:"to",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"unitPrice",value:{name:"string",required:!0}},{key:"flatFee",value:{name:"string",required:!1}}]}}],raw:"PricingTierRow[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const x=[{tier:"1",from:0,to:1e4,unitPrice:"$0.010",flatFee:"$0"},{tier:"2",from:10001,to:1e5,unitPrice:"$0.008",flatFee:"$0"},{tier:"3",from:100001,to:null,unitPrice:"$0.006",flatFee:"$500 / mo"}],y={title:"Design System/Organisms/PricingTierTable",component:u,tags:["autodocs"],argTypes:{title:{control:"text"},tiers:{table:{disable:!0}}}},t={args:{title:"Graduated pricing - API events",tiers:x}},n={args:{title:"Volume pricing - Seats",tiers:[{tier:"A",from:1,to:50,unitPrice:"$12.00",flatFee:"-"},{tier:"B",from:51,to:200,unitPrice:"$10.00",flatFee:"-"},{tier:"C",from:201,to:null,unitPrice:"$8.00",flatFee:"-"}]}};var a,i,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Graduated pricing - API events',
    tiers
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,o,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Volume pricing - Seats',
    tiers: [{
      tier: 'A',
      from: 1,
      to: 50,
      unitPrice: '$12.00',
      flatFee: '-'
    }, {
      tier: 'B',
      from: 51,
      to: 200,
      unitPrice: '$10.00',
      flatFee: '-'
    }, {
      tier: 'C',
      from: 201,
      to: null,
      unitPrice: '$8.00',
      flatFee: '-'
    }]
  }
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const j=["Default","VolumeTiers"];export{t as Default,n as VolumeTiers,j as __namedExportsOrder,y as default};
