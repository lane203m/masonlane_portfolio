import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextModal } from '../../../components/TextModal/TextModal';

const meta = {
  title: 'Portfolio/TextModal',
  component: TextModal,
  tags: ['autodocs'],
} satisfies Meta<typeof TextModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Mason Lane',
    children: [<p>Some paragraph</p>]
  },
};
