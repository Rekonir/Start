import "../../../App/App.scss";
import "../../../App/reset.scss";
import type { Meta, StoryObj } from '@storybook/react';
import Selector, { SelectorProps } from './Selector';
import { MemoryRouter } from "react-router-dom";

const meta: Meta<SelectorProps> = {
  title: 'Selector',
  component: Selector,
  argTypes: {
    array: {
      control: { type: 'array'}
    }
  },
  decorators: [(Story) => (
    <MemoryRouter>
      <Story/>
    </MemoryRouter>
  )]
};

export default meta;

export const Default: StoryObj<SelectorProps> = {
  args: {
    name: 'Country',
    array: ['USA', 'Russia'],
  },
};
