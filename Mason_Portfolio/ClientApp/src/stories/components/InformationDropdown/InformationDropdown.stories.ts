import type { Meta, StoryObj } from '@storybook/react';
import { InformationDropdown } from '../../../components/InformationDropdown/InformationDropdown';

const meta = {
  title: 'Portfolio/InformationDropdown',
  component: InformationDropdown,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof InformationDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label:"Some Dropdown",
    children: "This is a test of the text"
  },
};

