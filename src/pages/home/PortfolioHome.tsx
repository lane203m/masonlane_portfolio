import React from 'react';
import { useRef, ReactNode, useLayoutEffect, useState } from 'react';
import { ReactElement } from 'react';
import { PortfolioHeader } from './PortfolioHeader/PortfolioHeader';
import { PortfolioFooter } from './PortfolioFooter/PortfolioFooter';
import { PortfolioContents } from './PortfolioContents/PortfolioContents';
import { Contact } from './Contact/Contact';
import { AboutMe } from './AboutMe/AboutMe';
import {useGetPortfolioData} from '../../domain/queries/getPortfolioData'

import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll
} from "framer-motion";
import PolygonBackground from '../../Images/PolygonBackground.png';
import { getDimensions } from '../../components/Utilities/Utilities';
interface PortfolioHomeProps {
}

export const PortfolioHome = ({
  ...props
}: PortfolioHomeProps): ReactElement => {

  const dimensions = getDimensions();
  const  portfolioData = useGetPortfolioData();

  return (
    <div className='overflow-hidden'>
      <div>
        <PortfolioHeader/>
      </div>
      
      <motion.img className='position-fixed' style={{zIndex:-1, filter:'blur(1px)'}} src={PolygonBackground}></motion.img>
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
    </div>
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