import React from 'react';
import { ReactElement } from 'react';
import { TextModal } from '../../../components/TextModal/TextModal';
import { PortfolioItem } from '../../../components/PortfolioItem/PortfolioItem';

interface PortfolioContentsProps {
}





export const PortfolioContents = ({
  ...props
}: PortfolioContentsProps): ReactElement => {
  return (
    <div className='w-100 background-color-dark'>
      <div className='container m-0 w-100'>
        <div className='row w-100 m-0'>
          {
            [9,8,7,6,5,4,3,2,1].map((x, y) =>
            (
              <div className='col-6 p-4' key={`PortfolioItem-${y}`}>
                <PortfolioItem portfolioItem={{}}></PortfolioItem>
              </div>
            ))
          }
        </div>
      </div>
    </div>
      
  );
};