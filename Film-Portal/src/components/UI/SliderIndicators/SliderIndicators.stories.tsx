import "../../../App/App.scss";
import "../../../App/reset.scss";
import type { Meta, StoryObj } from '@storybook/react';
import SliderIndicators, { SliderIndicatorsProps } from './SliderIndicators';
import { useArgs } from '@storybook/client-api';
import { useEffect, useState } from "react";

const meta: Meta<SliderIndicatorsProps> = {
  title: 'Slider Indicators',
  component: SliderIndicators,
  
};

export default meta;
type Story = StoryObj<SliderIndicatorsProps>;



// // eslint-disable-next-line react-hooks/rules-of-hooks
// const [{currentIndex}, updateArgs] = useArgs();



// const Story = () => {
  
// }

// export const Default: Story = {
//   render: () => <SliderIndicators goToPrev={function (): void {
//     throw new Error("Function not implemented.");
//   } } goToNext={function (): void {
//     throw new Error("Function not implemented.");
//   } } indicatorsNumber={0} activeIndicator={0} />
// };

export const Default: Story = {
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
    (Story) =>(
      <div>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story indicatorsNumber = {5} />
      </div>
    ),
  ],
  args: {
    indicatorsNumber: 6,
    activeIndicator: 2
  }
};
