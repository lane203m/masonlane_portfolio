import React from 'react';
import { ReactNode, Children, ReactElement } from 'react';

export interface FooterBarProps {
  label?: string; 
  children?: ReactNode;
}

export const FooterBar = ({
  label,
  children,
  ...props
}: FooterBarProps): ReactElement => {

  return (
    <>
      <div className='row background-color-half-dark justify-content-around py-4 m-0'>
        {
          <div className='col-12 ps-0 d-flex w-auto'>
            {Children?.map(
              children as ReactElement, 
              (x, i) => {     
                return (<div className='ps-3'>{x}</div>) 
              }
            )}
          </div>
        }
      </div>
    </>
  );
};
