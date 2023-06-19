import "../../../App/App.scss";
import "../../../App/reset.scss";
import type { Meta, StoryObj } from '@storybook/react';
import Slider, { SliderProps } from './Slider';

const meta: Meta<SliderProps> = {
  title: 'Slider',
  component: Slider,
};

export default meta;
type Story = StoryObj<SliderProps>;

export const Default: Story = {
  args: {
    name: 'Rating from',
    max: 10
  },
};
