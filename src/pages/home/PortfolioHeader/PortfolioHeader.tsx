import React from 'react';
import { ReactElement } from 'react';
import { HeaderBar } from '../../../components/HeaderBar/HeaderBar';

interface PortfolioHeaderProps {
}

export const PortfolioHeader = ({
  ...props
}: PortfolioHeaderProps): ReactElement => {
  return (
    <div>
      <HeaderBar label='Mason Lane'>
        <div>
          test
        </div>
      </HeaderBar>
    </div>
  );
};