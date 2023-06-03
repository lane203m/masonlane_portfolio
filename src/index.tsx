import * as React from "react";
import * as ReactDOM from "react-dom";
import './custom.scss';

import { App } from "./App";
import { BrowserRouter, Router } from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
    <App userName="Mason Lane" lang="TypeScript" />
  </BrowserRouter>,
  document.getElementById("output")

);


/*export const App = (props: HelloWorldProps) => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioHome/>}/>
      </Routes>
    </BrowserRouter>
  );
}*/