import "../../../App/App.scss";
import "../../../App/reset.scss";
import type { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from './Input';

const meta: Meta<InputProps> = {
  title: 'Input',
  component: Input,
  argTypes: {
    style: {
      options: ['light', 'dark']
    }
  }
};

export default meta;
type Story = StoryObj<InputProps>;

export const Light: Story = {
  args: {
    type: 'text',
    placeholder: 'Введите...',
    style: 'light'
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Введите пароль',
    style: 'light'
  },
};

export const Dark: Story = {
  args: {
    type: 'text',
    placeholder: 'Введите...',
    style: 'dark'
  },
};