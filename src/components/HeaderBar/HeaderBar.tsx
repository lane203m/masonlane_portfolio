import React from 'react';
import { ReactNode, useState, Children, ReactElement, useEffect } from 'react';
import { MenuButton } from '../MenuButton/MenuButton';
import { AnimatePresence, motion } from 'framer-motion';
import { getDimensions } from '../Utilities/Utilities'
import { Col, Container, Row } from 'react-bootstrap';

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

  const dimensions = getDimensions();

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    if(dimensions.width < 768){
      setIsMobile(true);
    }
    else{
      setIsMobile(false);
    }
  }, [])

  useEffect(() => {
    if(dimensions.width < 768){
      setIsMobile(true);
    }
    else{
      setIsMobile(false);
    }
  }, [dimensions.width])

  return (
    <Container>
      <Row className='justify-content-around'>
          <Col className={`col-12 border-primary border-bottom border-opacity-50 dark-box-shadow position-fixed row background-color-half-dark d-flex justify-content-between px-4 pt-2 m-0`} style={{zIndex:101}} id={'headerWidth'}>
            <div className='col-12' style={{display:'contents'}}><h4 className='ps-2 color-off-white'>{label}</h4></div>
            {
              dimensions.width && dimensions.width > 768 ? 
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
                  <div className='float-end pe-0' style={{width:'25px'}}>
                    <MenuButton isOpen={open} strokeWidth={2.5} additionalOnClick={() => setOpen(!open)}/>
                  </div>
                </div>  
              </>
            }
          </Col>
          <Col xs={12} className='w-100 position-fixed mt-4' style={{zIndex:100}}>
          { dimensions.width && dimensions.width <= 768 &&
            <AnimatePresence>
              {open && 
                <motion.div
                  key="modal"
                  initial={{ x: 300 }}
                  animate={{ x: 30 }}
                  exit={{ x: 300 }}
                >
                  <div className='background-color-half-dark float-end pt-4 ps-4 pe-5 dark-box-shadow '>
                    {React.Children?.map(
                      children as ReactElement, 
                      (x) => {     
                        return (
                          <Row className='py-2'>
                            <Col xs={12}>
                              <div className='float-end'>{x}</div>
                            </Col>
                          </Row>
                          ) 
                      }
                    )}
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          }
          </Col>
        </Row>
      </Container>
  );
};
