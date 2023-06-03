import React from 'react';
import { ReactNode, useState, Children, ReactElement, useEffect } from 'react';
import { MenuButton } from '../MenuButton/MenuButton';
import { AnimatePresence, motion } from 'framer-motion';
import { getDimensions } from '../Utilities/Utilities'

export interface FooterBarProps {
  label?: string; 
  children?: ReactNode;
}

export const FooterBar = ({
  label,
  children,
  ...props
}: FooterBarProps): ReactElement => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='row background-color-half-dark d-flex justify-content-around px-4 py-4 m-0 w-100' style={{position:'relative', zIndex:99}}>
        {
          <div className='ps-0 col-12 d-flex' style={{width:'auto'}}>
            {React.Children?.map(
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
