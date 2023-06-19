import{j as t}from"./jsx-runtime-708f5a67.js";import{r as i}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const _="_sliderBox_1g0wh_44",f="_slider_1g0wh_44",x="_output_1g0wh_80",a={sliderBox:_,slider:f,output:x},s=({name:n,max:o,func:l})=>{const[e,c]=i.useState(0);return i.useEffect(()=>{l&&l(e)},[e]),t.jsxs("div",{className:a.sliderBox,children:[t.jsxs("output",{className:a.output,id:"volume",children:[" ",n," ",e]}),t.jsx("input",{type:"range",className:a.slider,defaultValue:e,onChange:p=>{c(+p.target.value)},min:"0",max:String(o),step:o/100})]})};try{s.displayName="Slider",s.__docgenInfo={description:"",displayName:"Slider",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},func:{defaultValue:null,description:"",name:"func",required:!1,type:{name:"any"}}}}}catch{}const h={title:"Slider",component:s},r={args:{name:"Rating from",max:10}};var u,d,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'Rating from',
    max: 10
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const j=["Default"];export{r as Default,j as __namedExportsOrder,h as default};
//# sourceMappingURL=Slider.stories-4e3e3616.js.map
