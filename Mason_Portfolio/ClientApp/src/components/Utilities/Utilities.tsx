import React from "react";
import { useEffect } from "react";

export const getDimensions = () => {
  //https://www.pluralsight.com/guides/re-render-react-component-on-window-resize

  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

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


  return dimensions;
}