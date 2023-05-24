import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from '../../../components/LinkButton/LinkButton';

const meta = {
  title: 'Portfolio/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: ["fab", "itch-io"]
  },
};

