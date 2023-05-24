import React from 'react';
import { useRef, ReactNode, useLayoutEffect, useState } from 'react';
import { ReactElement } from 'react';
import { PortfolioHeader } from './PortfolioHeader/PortfolioHeader';
import { PortfolioContents } from './PortfolioContents/PortfolioContents';
import { Contact } from './Contact/Contact';
import { AboutMe } from './AboutMe/AboutMe';


import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useReducedMotion,
  useViewportScroll
} from "framer-motion";
import PolygonBackground from '../../Images/PolygonBackground.png';
interface PortfolioHomeProps {
}

export const PortfolioHome = ({
  ...props
}: PortfolioHomeProps): ReactElement => {
  return (
    <>
      <PortfolioHeader/>
      <img className='position-fixed' style={{filter:'blur(3px)'}} src={PolygonBackground}></img>
      <Parallax>
        <AboutMe></AboutMe>
        <PortfolioContents></PortfolioContents>
        <Contact></Contact>
      </Parallax>
      {/*<AboutMe/>*/}
      
      
      
      {/*<motion.img
        //key={page}
        src={PolygonBackground}
        //custom={direction}
        //variants={variants}
        width={'100%'}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        /*onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}*/
      
      /*>

      </motion.img>*/}
    </>
  );
};


type ParallaxProps = {
  children: ReactNode;
  offset?: number;
};

const Parallax = ({ children, offset = 50 }: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useViewportScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(window.innerHeight);
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;