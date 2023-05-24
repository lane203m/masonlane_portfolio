import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from '../../../components/LinkButton/LinkButton';
import { LinkButtonGrid } from '../../../components/LinkButtonGrid/LinkButtonGrid';

const meta = {
  title: 'Portfolio/LinkButtonGrid',
  component: LinkButtonGrid,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof LinkButtonGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: [<LinkButton icon={["fab", "itch-io"]}/>,<LinkButton icon={["fab", "github"]}/>,<LinkButton icon={["fab", "youtube"]}/>]
  },
};
