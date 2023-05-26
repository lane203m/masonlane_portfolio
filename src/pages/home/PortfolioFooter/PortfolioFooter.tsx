import React from 'react';
import { ReactElement } from 'react';
import { FooterBar } from '../../../components/FooterBar/FooterBar';

interface PortfolioFooterProps {
}

export const PortfolioFooter = ({
  ...props
}: PortfolioFooterProps): ReactElement => {
  return (
    <FooterBar>
    </FooterBar>
  );
};