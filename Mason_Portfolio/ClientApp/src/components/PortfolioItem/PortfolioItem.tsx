import React, { useRef } from 'react'; 
import { ReactNode, useEffect, useState } from 'react';
import { motion, Transition, SVGMotionProps, easeInOut, useDomEvent, AnimatePresence } from "framer-motion";
import { IPortfolioItemData } from '../../domain/models/portfolio';
import { LinkButtonGrid } from '../LinkButtonGrid/LinkButtonGrid';
import { InformationDropdown } from '../InformationDropdown/InformationDropdown';

import { LinkButton } from '../LinkButton/LinkButton';
import { getDimensions } from '../Utilities/Utilities'

interface PortfolioItemProps {
  portfolioItem: IPortfolioItemData
}

export const PortfolioItem = ({
  portfolioItem
}: PortfolioItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const transition = {
    type: "spring",
    damping: 25,
    stiffness: 120
  };

  const dimensions = getDimensions();
  
  useEffect(() => {
    if(dimensions.width < 785){
      setIsMobile(true);
    }
    else{
      setIsMobile(false);
    }
  }, [])

  useEffect(() => {
    if(dimensions.width < 785){
      setIsMobile(true);
    }
    else{
      setIsMobile(false);
    }
  }, [dimensions.width])

  const onClick = ({url}:{url:string}) => {
    window.open(url, "_blank", "noreferrer");
  }
  
  return (
    <div className='m-auto d-inline-block pb-4' style={{width:`${isMobile ? 'auto' : '300px'}`}}>
      <div className='container'>
        <div className='row p-0 overflow-hidden position-relative border' style={{width:`${isMobile ? 'auto' : '300px'}`, height:`${isMobile ? 'auto' : '330px'}`}} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <div className='col-12 p-0'>
              {
                isMobile ?
                <>
                  <div key={`PortfolioItemText-${portfolioItem?.itemName}`} className='p-0 w-100 position-absolute' style={{zIndex:96}}>
                    <h5 className='color-off-white background-color-dark-50 w-100 m-0 py-2 pb-1 px-2' style={{zIndex:98, boxShadow:'inset rgba(0, 0, 0, 0.75) 0px 0px 20px 0px'}}>
                      {portfolioItem.itemName}
                    </h5>
                  </div>
                  <div className='position-absolute w-100' style={{zIndex:98, bottom:0, right:0}}>

                      <div className='w-100 background-color-dark-50' style={{boxShadow:'inset rgba(0, 0, 0, 0.75) 0px 0px 20px 0px'}}>
                        <LinkButtonGrid justifyCenter>
                          {portfolioItem?.itemLinks && portfolioItem.itemLinks.map((link, i) => {   
                              return (<LinkButton key={`contact-link-${i}`} icon={link?.fontAwesomeItemProp} onClick={()=>{onClick({url: link.redirectLink})}}></LinkButton>) 
                            }
                          )}
                        </LinkButtonGrid>
                      </div>
                  </div> 
                </>:
                <>
                  <AnimatePresence mode='sync'>
                    {(!isMobile && !isOpen) && 
                        <div className='position-absolute w-100' style={{zIndex:98, bottom:0, right:0}}>
                          <motion.div
                            key={`PortfolioItemButtons-${portfolioItem?.itemName}`}
                            transition={{type: 'linear'}}
                            initial={{ y: -120, x:55, opacity: 0}}
                            animate={{ y: -120, x:0, opacity: 1}}
                            exit={{ y: -120, x:55, opacity: 0}}
                          >
                            <div className='w-100 background-color-dark-75' style={{boxShadow:'inset rgba(0, 0, 0, 0.75) 0px 0px 20px 0px'}}>
                              
                              <h3 className='color-off-white w-100 m-0 py-3 px-2' style={{textAlign:'center'}}>
                                {portfolioItem.itemName}
                              </h3>
                            </div>
                          </motion.div>
                        </div>
                    }
                  </AnimatePresence>
                  <AnimatePresence mode='sync'>
                    {(!isMobile && isOpen) && 
                        <div className='position-absolute w-100' style={{zIndex:98, bottom:0, right:0}}>
                          <motion.div
                            key={`PortfolioItemButtons-${portfolioItem?.itemName}`}
                            transition={{type: 'linear'}}
                            initial={{ y: -120, x:55, opacity: 0}}
                            animate={{ y: -120, x:0, opacity: 1}}
                            exit={{ y: -120, x:55, opacity: 0}}
                          >
                            <div className='w-100 background-color-dark-50 py-1' style={{boxShadow:'inset rgba(0, 0, 0, 0.75) 0px 0px 20px 0px'}}>
                              <LinkButtonGrid justifyCenter>
                                {portfolioItem?.itemLinks && portfolioItem.itemLinks.map((link, i) => {   
                                    return (<LinkButton key={`contact-link-${i}`} icon={link?.fontAwesomeItemProp} onClick={()=>{onClick({url: link.redirectLink})}}></LinkButton>) 
                                  }
                                )}
                              </LinkButtonGrid>
                            </div>
                          </motion.div>
                        </div>
                    }
                  </AnimatePresence>
                </>
              }
            <AnimatePresence mode='sync'>
              <motion.img 
                transition={transition}
                animate={{scale: isOpen ? 1.2 : 1, transition: { duration: 0.3 }, filter: `${isOpen ? 'blur(1px)' : 'blur(0px)'}`}}
                initial={{ scale: 1, filter: 'blur(0px)' }}
                exit={{ scale: 1, filter: 'blur(0px)'  }}
                key={`PortfolioItemImage-${portfolioItem?.itemName}`}
                width={'100%'}
                height={'100%'}
                style={{objectFit:'cover'}}
                src={portfolioItem.itemImage}
              />
            </AnimatePresence>
          </div>
        </div>
        <div className='row p-0 pt-2'>
          <div className='col-12 p-0'>
            <InformationDropdown label='More Information'>{portfolioItem.itemDescription}</InformationDropdown>
          </div>
        </div>
      </div>
    </div>
  );

};