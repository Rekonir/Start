import{j as e}from"./jsx-runtime-708f5a67.js";import{r as j}from"./index-c013ead5.js";import{c as q}from"./index-46833bee.js";import"./_commonjsHelpers-725317a4.js";const V="_Input_103py_44",L="_passwordEye_103py_44",S="_light_103py_66",C="_dark_103py_108",H="_error_103py_124",t={Input:V,passwordEye:L,light:S,dark:C,error:H},N=""+new URL("eye-on-289c520e.svg",import.meta.url).href,P=""+new URL("eye-off-927b22dd.svg",import.meta.url).href,l=({type:r,placeholder:d,onChange:p,onBlur:i,value:u,style:k="dark",isError:v})=>{const[o,E]=j.useState(!1),I=()=>{E(!o)};return e.jsxs("div",{className:q(t.Input,t[k],v?t.error:""),children:[r!=="password"&&e.jsx("input",{type:r,placeholder:d,"data-testid":"inputBox",value:u,onChange:p,onBlur:i}),r==="password"&&e.jsxs(e.Fragment,{children:[e.jsx("input",{type:o?"text":"password",placeholder:d,onChange:p,onBlur:i,value:u}),e.jsx("div",{className:t.passwordEye,onClick:I,children:o?e.jsx("img",{src:P,alt:""}):e.jsx("img",{src:N,alt:""})})]})]})};try{l.displayName="Input",l.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void) | undefined"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement> | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | undefined"}},style:{defaultValue:{value:"dark"},description:"",name:"style",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"light"'},{value:'"dark"'}]}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const B={title:"Input",component:l,argTypes:{style:{options:["light","dark"]}}},s={args:{type:"text",placeholder:"Введите...",style:"light"}},a={args:{type:"password",placeholder:"Введите пароль",style:"light"}},n={args:{type:"text",placeholder:"Введите...",style:"dark"}};var c,m,y;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Введите...',
    style: 'light'
  }
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Введите пароль',
    style: 'light'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var _,x,w;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Введите...',
    style: 'dark'
  }
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const D=["Light","Password","Dark"];export{n as Dark,s as Light,a as Password,D as __namedExportsOrder,B as default};
//# sourceMappingURL=Input.stories-4c8f17aa.js.map
