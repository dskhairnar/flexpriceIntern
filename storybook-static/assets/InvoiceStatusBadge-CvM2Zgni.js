import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";import{B as d}from"./Badge-CdaJPkL1.js";import{c as e}from"./createLucideIcon-DxfDZ_MP.js";import{c as u}from"./utils-BLSKlp9E.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=e("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=e("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=e("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=e("FilePen",[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5",key:"1couwa"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]]),t={paid:{label:"Paid",tone:"success",icon:p},draft:{label:"Draft",tone:"muted",icon:i},void:{label:"Void",tone:"danger",icon:y},open:{label:"Open",tone:"warning",icon:g},uncollectible:{label:"Uncollectible",tone:"danger",icon:m}};function k(n){const a=n.toLowerCase();return a in t?t[a]:{label:n,tone:"neutral",icon:i}}const h={success:"success",neutral:"outline",warning:"warning",danger:"danger",muted:"muted"};function x({status:n,className:a}){const{label:o,tone:r,icon:l}=k(n),s=h[r]??"outline";return c.jsx(d,{variant:s,className:u("capitalize",a),icon:c.jsx(l,{className:"size-3.5","aria-hidden":!0}),children:o})}x.__docgenInfo={description:"Maps raw invoice status strings to coloured chips with icons for tables and drawers.",methods:[],displayName:"InvoiceStatusBadge",props:{status:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{x as I};
