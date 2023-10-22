import React, { useEffect } from 'react';
import { useRef, ReactNode, useLayoutEffect, useState } from 'react';
import { ReactElement } from 'react';
import { PortfolioHeader } from './PortfolioHeader/PortfolioHeader';
import { PortfolioFooter } from './PortfolioFooter/PortfolioFooter';
import { PortfolioContents } from './PortfolioContents/PortfolioContents';
import { Contact } from './Contact/Contact';
import { AboutMe } from './AboutMe/AboutMe';
import {useGetPortfolioData} from '../../domain/queries/getPortfolioData'
import { Loader } from '../../components/Loader/Loader';

import {
  AnimatePresence,
  motion,
  useSpring,
  useTransform,
  useViewportScroll
} from "framer-motion";
import PolygonBackground from '../../Images/PolygonBackground.png';
import { getDimensions } from '../../components/Utilities/Utilities';
import { TextModal } from '../../components/TextModal/TextModal';
interface PortfolioHomeProps {
}

export const PortfolioHome = ({
  ...props
}: PortfolioHomeProps): ReactElement => {
  const  {portfolioData, isLoading} = useGetPortfolioData();

  return (
    <AnimatePresence>
    {
      <motion.div className='overflow-hidden' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.img className='position-fixed' style={{zIndex:-1, filter:'blur(1px)'}} src={PolygonBackground}></motion.img>

        {isLoading ? 
          <motion.div className='overflow-hidden' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity:0}}>   
            <motion.img className='position-fixed' style={{zIndex:-1, filter:'blur(1px)'}} src={PolygonBackground}></motion.img>
            <div className='pt-5'>
              <div className='py-5 mt-5' id='loader'>
                <TextModal label=''>
                  <div className={`px-4 m-auto text-start`} style={{width:100, height: 375}}>
                    <Loader/>
                  </div>
                </TextModal>
              </div>
            </div>
          </motion.div>
          :
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0,1] }} exit={{opacity:0}}>
            <div>
              <PortfolioHeader/>
            </div>
            
            <div className='pt-5'>
              <AboutMe aboutMeData={portfolioData?.aboutMeData}></AboutMe>
            </div>
            <Parallax>
              <PortfolioContents portfolioItems={portfolioData?.portfolioItems} ></PortfolioContents>
            </Parallax>
            <div>
              <Contact contactData={portfolioData?.contactData}></Contact>
              <PortfolioFooter></PortfolioFooter>
            </div>
          </motion.div>
        }
      </motion.div>
    }
    </AnimatePresence>
  );
};


type ParallaxProps = {
  children: ReactNode;
  offset?: number;
};

const Parallax = ({ children, offset = 50 }: ParallaxProps): JSX.Element => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useViewportScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 200, damping: 50 });

  useLayoutEffect(() => {
    const onResize = () => {
      setElementTop(window.innerHeight);
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  return (
    <motion.div ref={ref} style={{ y }} /*className='mx-3 mx-sm-5 px-lg-5'*/>
      {children}
    </motion.div>
  );
};

export default Parallax;