import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{c as r}from"./utils-BLSKlp9E.js";import{c as i}from"./createLucideIcon-DxfDZ_MP.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=i("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=i("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=i("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);function l({label:a,value:o,trend:e,className:d}){const s=e===void 0||e===0?"muted":e>0?"positive":"negative",n=e===void 0||e===0?p:e>0?m:c;return t.jsxs("div",{className:r("rounded-[6px] border border-border bg-card p-4 shadow-sm",d),children:[t.jsx("div",{className:"text-sm text-muted-foreground",children:a}),t.jsxs("div",{className:"mt-1 flex items-end justify-between gap-2",children:[t.jsx("div",{className:"text-2xl font-semibold tracking-tight",children:o}),e!==void 0?t.jsxs("div",{className:r("flex items-center gap-0.5 text-xs font-medium",s==="positive"&&"text-emerald-600",s==="negative"&&"text-red-600",s==="muted"&&"text-muted-foreground"),children:[t.jsx(n,{className:"size-4"}),e===0?"0%":`${e>0?"+":""}${e.toFixed(1)}%`]}):null]})]})}l.__docgenInfo={description:"Dashboard KPI tile with optional trend glyph, matching FlexPrice revenue and usage summaries.",methods:[],displayName:"MetricCard",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},trend:{required:!1,tsType:{name:"number"},description:"Percentage delta vs previous period; `0` is flat"},className:{required:!1,tsType:{name:"string"},description:""}}};export{l as M};
