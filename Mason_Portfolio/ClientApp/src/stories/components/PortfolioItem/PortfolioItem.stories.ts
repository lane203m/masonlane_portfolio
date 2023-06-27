import type { Meta, StoryObj } from '@storybook/react';
import { PortfolioItem } from '../../../components/PortfolioItem/PortfolioItem';

const meta = {
  title: 'Portfolio/PortfolioItem',
  component: PortfolioItem,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof PortfolioItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};

