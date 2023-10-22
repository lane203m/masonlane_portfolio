import React, { useEffect, useState } from 'react';
import './LoaderStyles.css';
import { getDimensions } from '../Utilities/Utilities';
import { motion } from "framer-motion";
import LogoML_M from "./LogoML_M.png";
import LogoML_L from "./LogoML_L.png";
import LogoML_B from "./LogoML_B.png";
import { TextModal } from "../TextModal/TextModal";

interface LoaderProps {
}

export const Loader = ({
  ...props
}: LoaderProps) => {


  const LoadingDot = {
    display: "block",
    width: "2rem",
    height: "2rem",
    backgroundColor: "white",
    borderRadius: "50%"
  };

  const LoadingContainer = {
    width: "10rem",
    height: "5rem",
    display: "flex",
    justifyContent: "space-around"
  };
  
  const ContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.4
      }
    },
    animate: {
      transition: {
        staggerChildren: 0.4
      }
    }
  };
  
  const DotVariants = {
    initial: {
      x: -50,
      y: 160,
      opacity: '100%'
    },
    animate: {
      opacity: [0, 1]
    }
  };
  
  const DotTransition = {
    type: "spring",
    repeatDelay: 1,
    duration: 2,
    repeat: Infinity,
  };

  return (
    <div className='w-100'>
      <motion.img
        style={{width: 300}}
        className='top-0 position-absolute'
        initial={{ y: 70, x: -125, scale: 0.99}}
        animate={{ y: 70, scale: 1.1 }}
        transition={{
          type: "spring",
          repeatType: "mirror",
          repeatDelay: 1,
          duration: 2,
          repeat: Infinity,
        }}
        src={LogoML_B}
      />
      <motion.img
        style={{width: 300}}
        className='top-0 position-absolute'
        initial={{ y: 70, x: -125}}
        animate={{ y: 130, x:-155, opacity: 0 }}
        transition={{
          type: "spring",
          repeatType: "reverse",
          repeatDelay: 1,
          duration: 2,
          repeat: Infinity,
        }}
        src={LogoML_M}
      />
      <motion.img
        style={{width: 300}}
        className='top-0 position-absolute'
        initial={{ y: 70, x: -125 }}
        animate={{ y: 10, x:-95, opacity: 0 }}
        transition={{
          type: "spring",
          repeatType: "reverse",
          repeatDelay: 1,
          duration: 2,
          repeat: Infinity,
        }}
        src={LogoML_L}
      />
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={{
            type: "spring",
            repeatType: "mirror",
            repeatDelay: 2,
            duration: 1,
            repeat: Infinity,
          }}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={{
            type: "spring",
            repeatType: "mirror",
            repeatDelay: 2,
            duration: 1,
            repeat: Infinity,
          }}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={{
            type: "spring",
            repeatType: "mirror",
            repeatDelay: 2,
            duration: 1,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
};
/*

initial={{ opacity: 0, x: -50, y: 195}}
animate={{ opacity: 1 }}
transition={
  {
  type: "spring",
  repeatType: "mirror",
  duration: 2,
  repeat: Infinity, 
  }
}
/>
<motion.span
className='top-0 position-absolute'
style={LoadingDot}
initial={{ opacity: 0, x: 10, y: 195}}
animate={{ opacity: 1 }}
transition={
  {
  type: "spring",
  repeatType: "mirror",
  duration: 2,
  repeat: Infinity, 
  }
}
/>
<motion.span
className='top-0 position-absolute'
style={LoadingDot}
initial={{ opacity: 0, x: 70, y: 195}}*/