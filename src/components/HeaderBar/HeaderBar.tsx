import React from 'react';
import { ReactNode, useState, Children, ReactElement, useEffect } from 'react';
import { MenuButton } from '../MenuButton/MenuButton';
import { AnimatePresence, motion } from 'framer-motion';

export interface HeaderBarProps {
  label?: string; 
  children?: ReactNode;
}

export const HeaderBar = ({
  label,
  children,
  ...props
}: HeaderBarProps): ReactElement => {

  const [open, setOpen] = useState(false);

  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  //https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  })

  useEffect(() => {
    console.log(open)
  }, [open])


  return (
    <>
      <div className='row background-color-half-dark d-flex justify-content-between pt-2' id={'headerWidth'}>
        <div className='col-4' style={{display:'contents'}}><h4 className='ps-2 color-off-white'>{label}</h4></div>
        {
          dimensions.width && dimensions.width > 550 ? 
          <div className='ps-0 col-8 d-flex' style={{width:'auto'}}>
            {React.Children?.map(
              children as ReactElement, 
              (x, i) => {     
                return (<div className='ps-3'>{x}</div>) 
              }
            )}
          </div>
          :
          <>
            <div className='p-0 col-2 pe-1'>
              <div className='float-end pe-2' style={{width:'25px'}}>
                <MenuButton isOpen={open} strokeWidth={2.5} additionalOnClick={() => setOpen(!open)}/>
              </div>
            </div>  
          </>
        }
      </div>
      <div className='col-12 w-100'>
      { dimensions.width && dimensions.width <= 550 &&
        <AnimatePresence>
          {open && 
            <motion.div
              key="modal"
              initial={{ x: 200 }}
              animate={{ x: 12 }}
              exit={{ x: 200 }}
            >
              <div className='bg-dark float-end px-0 py-2'>
                {React.Children?.map(
                  children as ReactElement, 
                  (x, i) => {     
                    return (
                      <div className='col-12 ps-4 pe-3'>
                        <div className='float-end py-2'>{x}</div>
                      </div>) 
                  }
                )}
              </div>
            </motion.div>
          }
        </AnimatePresence>
      }
      </div>
    </>
  );
};
