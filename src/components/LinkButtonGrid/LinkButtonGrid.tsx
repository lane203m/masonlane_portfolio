import React from 'react';
import { ReactNode, ReactElement } from 'react';
import './LinkButtonGrid.scss';

interface LinkButtonGridProps {
  children?: ReactNode;
  justifyCenter?: boolean
}

export const LinkButtonGrid = ({
  children,
  justifyCenter,
  ...props
}: LinkButtonGridProps) => {
  return (
    <div className={`row d-flex ${justifyCenter ? 'justify-content-center':'justify-content-end'}`}>
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
