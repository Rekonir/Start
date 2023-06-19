import{j as r}from"./jsx-runtime-708f5a67.js";import{c as i}from"./index-46833bee.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const c=""+new URL("arrow-ab81dd08.svg",import.meta.url).href,p="_SliderIndicators_1vx98_44",_="_arrow_1vx98_55",x="_SliderIndicatorsWrapper_1vx98_58",I="_indicator_1vx98_91",g="_indicatorActive_1vx98_105",A="_indicatorProgress_1vx98_113",S="_FullIndicatorActive_1vx98_1",w="_FullIndicatorActiveScale_1vx98_1",N="_leftArrow_1vx98_175",f="_rightArrow_1vx98_183",e={SliderIndicators:p,arrow:_,SliderIndicatorsWrapper:x,indicator:I,indicatorActive:g,indicatorProgress:A,FullIndicatorActive:S,FullIndicatorActiveScale:w,leftArrow:N,rightArrow:f},o=({goToPrev:t,goToNext:u,indicatorsNumber:m,activeIndicator:v})=>r.jsx("div",{className:e.SliderIndicators,children:r.jsxs("div",{className:e.SliderIndicatorsWrapper,children:[r.jsx("div",{className:i(e.arrow,e.leftArrow),onClick:t,children:r.jsx("img",{src:c,alt:"<"})}),r.jsx("ul",{children:[...Array(m)].map((y,a)=>r.jsx("li",{children:r.jsx("div",{className:i(e.indicator,v==a?e.indicatorActive:""),children:r.jsx("div",{className:e.indicatorProgress})})},a))}),r.jsx("div",{className:i(e.arrow,e.rightArrow),onClick:u,children:r.jsx("img",{src:c,alt:">"})})]})});try{o.displayName="SliderIndicators",o.__docgenInfo={description:"",displayName:"SliderIndicators",props:{goToPrev:{defaultValue:null,description:"",name:"goToPrev",required:!0,type:{name:"() => void"}},goToNext:{defaultValue:null,description:"",name:"goToNext",required:!0,type:{name:"() => void"}},indicatorsNumber:{defaultValue:null,description:"",name:"indicatorsNumber",required:!0,type:{name:"number"}},activeIndicator:{defaultValue:null,description:"",name:"activeIndicator",required:!0,type:{name:"number"}}}}}catch{}const F={title:"Slider Indicators",component:o},n={decorators:[t=>r.jsx("div",{children:r.jsx(t,{indicatorsNumber:5})})],args:{indicatorsNumber:6,activeIndicator:2}};var s,d,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  decorators: [
  // (Story, context) => {
  //   // const [args, updateArgs] = useArgs()
  //   // const [currentIndex, setCurrentIndex] = useState(0)

  //   // const indicatorsNumber = 7;

  //   // context.args.activeIndicator = 2
  //   // const goToPrev = () => {
  //   //   const currentIndex = args.activeIndicator
  //   //   const newIndex = currentIndex == 0 ? indicatorsNumber - 1 : currentIndex - 1
  //   //   updateArgs({activeIndicator: newIndex})
  //   // }
  //   // console.log(context.args.activeIndicator)

  //   // useEffect(() => {
  //   //   updateArgs({activeIndicator: 10})
  //   // }, [])

  //   //updateArgs({activeIndicator: 3})

  //   return <Story  
  //   indicatorsNumber = {4}
  //   activeIndicator={2}/>
  // },
  Story => <div>\r
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}\r
        <Story indicatorsNumber={5} />\r
      </div>],
  args: {
    indicatorsNumber: 6,
    activeIndicator: 2
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const T=["Default"];export{n as Default,T as __namedExportsOrder,F as default};
//# sourceMappingURL=SliderIndicators.stories-4dd27551.js.map
