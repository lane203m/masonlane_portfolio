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
    if(dimensions.width < 550){
      setIsMobile(true);
    }
    else{
      setIsMobile(false);
    }
  }, [])

  useEffect(() => {
    if(dimensions.width < 550){
      setIsMobile(true);
    }
    else{
      setIsMobile(false);
    }
  }, [dimensions.width])

  return (
    <div className='m-auto pb-4' style={{width:`${isMobile ? 'auto' : '300px'}`}}>
      <div className='container'>
        <div className='row p-0 overflow-hidden position-relative border-shadow-dark' style={{width:`${isMobile ? 'auto' : '300px'}`, height:`${isMobile ? 'auto' : '330px'}`}} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <div className='col-12 p-0'>

            <div key={`PortfolioItemText-${portfolioItem?.itemName}`} className='p-0 w-100 position-absolute' style={{zIndex:96}}>
              <h5 className='color-off-white background-color-dark-50 w-100 m-0 py-2 pb-1 px-2' style={{zIndex:98, boxShadow:'inset rgba(0, 0, 0, 0.75) 0px 0px 20px 0px'}}>
                Some Text
              </h5>
              <AnimatePresence mode='sync'>
                {(false)  && 
                  <motion.div 
                    key={`PortfolioItemInfo-${portfolioItem?.itemName}`}
                    className='color-off-white w-100 background-color-dark-50 py-1 px-2' 
                    style={{zIndex:97, overflow:'hidden', boxShadow:'inset rgba(0, 0, 0, 0.75) 0px 0px 20px 0px'}}
                    transition={{type: 'linear'}}
                    initial={{ y: -50, opacity: 0}}
                    animate={{ y: 0, opacity: 1}}
                    exit={{ y: -50, opacity: [1,0,0,0]}}
                  >
                    More information
                  </motion.div>
                }
              </AnimatePresence>
            </div>
            <AnimatePresence mode='sync'>
              {(isMobile || isOpen) && 
                  <div className='position-absolute w-100' style={{zIndex:98, bottom:0, right:0}}>
                    <motion.div
                      key={`PortfolioItemButtons-${portfolioItem?.itemName}`}
                      transition={{type: 'linear'}}
                      initial={{ y: 50, x:0, opacity: 0}}
                      animate={{ y: 0, x:0, opacity: 1}}
                      exit={{ y: 50, x:0, opacity: 0}}
                    >
                      <div className='w-100 background-color-dark-50' style={{boxShadow:'inset rgba(0, 0, 0, 0.75) 0px 0px 20px 0px'}}>
                        <LinkButtonGrid>
                          <LinkButton icon={["fab", "itch-io"]}></LinkButton>
                          <LinkButton icon={["fab", "itch-io"]}></LinkButton>
                          <LinkButton icon={["fab", "itch-io"]}></LinkButton>
                        </LinkButtonGrid>
                      </div>
                    </motion.div>
                  </div>
              }
              <motion.img 
                transition={transition}
                animate={{scale: isOpen ? 1.2 : 1, transition: { duration: 0.3 }, filter: `${isOpen ? 'blur(1px)' : 'blur(0px)'}`}}
                initial={{ scale: 1, filter: 'blur(0px)' }}
                exit={{ scale: 1, filter: 'blur(0px)'  }}
                key={`PortfolioItemImage-${portfolioItem?.itemName}`}
                width={'100%'}
                height={'100%'}
                style={{objectFit:'cover'}}
                src='https://img.itch.zone/aW1nLzExODI5MjU0LmpwZw==/315x250%23c/eqFQI1.jpg'
              />
            </AnimatePresence>
          </div>
        </div>
        <div className='row p-0 pt-4'>
          <div className='col-12 p-0'>
            <InformationDropdown label='More Information'>Some text</InformationDropdown>
          </div>
        </div>
      </div>
    </div>
  );
};





/*
      <motion.svg
        onClick={handleOnClick}
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        {...props}
      >
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="0.75"
          y2="0.75"
          variants={top}
          {...lineProps}
          transition={{
            ease: "linear",
            duration: 0.25,
          }}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
          variants={center}
          {...lineProps}
          transition={{
            ease: "linear",
            duration: 0.25,
          }}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="3.25"
          y2="3.25"
          variants={bottom}
          {...lineProps}
          transition={{
            ease: "linear",
            duration: 0.25,
          }}
        />
        </motion.svg>*/