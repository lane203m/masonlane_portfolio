import * as React from "react";

import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import {library} from '@fortawesome/fontawesome-svg-core'
import { PortfolioHome } from './pages/home/PortfolioHome';

library.add(fas);
library.add(fab);


export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => (
  <PortfolioHome/>
);