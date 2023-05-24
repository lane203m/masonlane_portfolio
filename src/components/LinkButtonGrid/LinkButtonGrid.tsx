import React from 'react';
import { ReactNode, ReactElement } from 'react';
import './LinkButtonGrid.scss';

interface LinkButtonGridProps {
  children?: ReactNode;
}

export const LinkButtonGrid = ({
  children,
  ...props
}: LinkButtonGridProps) => {
  return (
    <div className='row d-flex justify-content-between'>
      <div className='col-12 align-self-center' style={{width:'auto'}}>
        <div className='d-flex'>
          {React.Children?.map(
            children as ReactElement, 
            (x, i) => {     
              return (<div className='rightBorder'>{x}<span className='background-color-off-white align-bottom'></span></div>) 
            }
          )}
        </div>
      </div>
    </div>
  );
};
