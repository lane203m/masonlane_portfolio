import type { Meta, StoryObj } from '@storybook/react';
import { MenuButton } from '../../../components/MenuButton/MenuButton';

const meta = {
  title: 'Portfolio/MenuButton',
  component: MenuButton,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    strokeWidth: 8
  },
};

