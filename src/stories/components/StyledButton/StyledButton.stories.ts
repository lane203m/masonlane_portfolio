import type { Meta, StoryObj } from '@storybook/react';
import { StyledButton } from '../../../components/StyledButton/StyledButton';

const meta = {
  title: 'Portfolio/StyledButton',
  component: StyledButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof StyledButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Test Button',
  },
};

