import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyledButton } from '../../../components/StyledButton/StyledButton';
import { HeaderBar } from '../../../components/HeaderBar/HeaderBar';

const meta = {
  title: 'Portfolio/HeaderBar',
  component: HeaderBar,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof HeaderBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Mason Lane',
    children: [<StyledButton key={'1'} isActive label={'Test Button Longer'}/>,<StyledButton key={'2'} label={'Test Button'}/>,<StyledButton key={'3'} label={'Test Button'}/>]
  },
};
