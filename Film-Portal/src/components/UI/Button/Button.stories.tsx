import "../../../App/App.scss";
import "../../../App/reset.scss";
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['contained', 'outlined', "translucent"]
    },
    size: {
      options: ['small', 'medium', 'large']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'contained',
    size: 'medium'
  },
};

export const Large: Story = {
  args: {
    children: 'Click me',
    variant: 'outlined',
    size: 'large'
  },
};