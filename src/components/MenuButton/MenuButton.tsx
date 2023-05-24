import React, { useEffect, useState } from 'react';
import { motion, Transition, SVGMotionProps, easeInOut } from "framer-motion";

interface MenuButtonProps {
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
  isOpen?: boolean;
  height?: number;
  additionalOnClick?: () => void | ((e: React.MouseEvent<HTMLElement>) => void);
}

export const MenuButton = ({
  strokeWidth = 1,
  color = '#BEBEBE',
  additionalOnClick,
  isOpen,
  height,
  ...props
}: MenuButtonProps) => {
  const [variant, setVariant] = useState("opened");

  useEffect(() => {
    setVariant(isOpen ? "opened" : "closed");
  }, [isOpen])

  const handleOnClick = () => {
    additionalOnClick && additionalOnClick();
  }

  const top = {
    closed: {
      rotate: [45, 0, 0],
      translateY: [1.25, 1.25, 0 , 0]
    },
    opened: {
      rotate: [0, 0, 45],
      translateY: [0, 1.25, 1.25 ]
    }
  };
  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: [1, 1, 0, 0]
    }
  };
  const bottom = {
    closed: {
      rotate: [135, 0, 0],
      translateY: [-1.25, -1.25, 0 , 0]
    },
    opened: {
      rotate: [0, 0, 135],
      translateY: [0, -1.25, -1.25]
    }
  };
  const lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
  };
  const unitHeight = height &&  height > 4 ? height : 4;
  const unitWidth = (unitHeight );

  return (
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
      </motion.svg>
  );
};