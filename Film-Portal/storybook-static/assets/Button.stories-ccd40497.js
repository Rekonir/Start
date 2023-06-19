import{j as g}from"./jsx-runtime-708f5a67.js";import{c as v}from"./index-46833bee.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const f="_Button_64goq_44",q="_contained_64goq_67",y="_outlined_64goq_74",B="_translucent_64goq_85",z="_small_64goq_92",C="_medium_64goq_103",k="_large_64goq_114",a={Button:f,contained:q,outlined:y,translucent:B,small:z,medium:C,large:k},t=({variant:o="contained",size:d="medium",children:m,onClick:p=()=>null})=>{const _=v(a.Button,a[o],a[d]);return g.jsx("button",{className:_,onClick:p,children:m})};try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"contained"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"contained"'},{value:'"outlined"'},{value:'"translucent"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:{value:"() => null"},description:"",name:"onClick",required:!1,type:{name:"((...args: any[]) => void) | undefined"}}}}}catch{}const V={title:"Button",component:t,argTypes:{variant:{options:["contained","outlined","translucent"]},size:{options:["small","medium","large"]}}},e={args:{children:"Click me",variant:"contained",size:"medium"}},n={args:{children:"Click me",variant:"outlined",size:"large"}};var r,i,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    variant: 'contained',
    size: 'medium'
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,u,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    variant: 'outlined',
    size: 'large'
  }
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const D=["Default","Large"];export{e as Default,n as Large,D as __namedExportsOrder,V as default};
//# sourceMappingURL=Button.stories-ccd40497.js.map
