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
      <Row 
        className='justify-content-around w-100 start-0 m-0 position-fixed background-color-half-dark border-primary border-bottom border-opacity-50 dark-box-shadow'
        style={{zIndex:101}}
      >
        <Col md={12} className={`d-flex justify-content-between px-4 pt-2 m-0`}>
          <Row className='w-100 justify-content-around'>
            <Col xs={10} md={4}><h4 className='ps-2 color-off-white'>{label}</h4></Col>
            {
              dimensions.width && dimensions.width > 768 ? 
              <Col xs={8} className='ps-0 d-flex w-auto'>
                {React.Children?.map(
                  children as ReactElement, 
                  (x) => {     
                    return (<div className='ps-3'>{x}</div>) 
                  }
                )}
              </Col>
              :
              <Col xs={2} className='p-0'>
                <div className='float-end pe-0' style={{width:'25px'}}>
                  <MenuButton isOpen={open} strokeWidth={2.5} additionalOnClick={() => setOpen(!open)}/>
                </div>
              </Col>  
              }
            </Row>
          </Col>

        </Row>
        <Row 
          className='justify-content-around w-100 start-0 m-0 position-fixed'
          style={{zIndex:100}}
        >
          <Col className='w-100 position-absolute mt-4'>
              { dimensions.width && dimensions.width <= 768 &&
                <AnimatePresence>
                  {open && 
                    <motion.div
                      key="modal"
                      initial={{ x: 300 }}
                      animate={{ x: 20 }}
                      exit={{ x: 300 }}
                    >
                      <div className='background-color-half-dark float-end pt-4 ps-4 pe-5 dark-box-shadow'>
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
