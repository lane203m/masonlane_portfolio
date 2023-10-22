import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from '../../../components/LinkButton/LinkButton';
import { Loader } from '../../../components/Loader/Loader';

const meta = {
  title: 'Portfolio/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
