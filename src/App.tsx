import * as React from "react";

import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import {library} from '@fortawesome/fontawesome-svg-core'
import { PortfolioHome } from './pages/home/PortfolioHome';
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

library.add(fas);
library.add(fab);


export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]); // do this on route change
  
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome/>}/>
    </Routes>
  )
};

