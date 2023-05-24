import * as React from "react";

import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import {library} from '@fortawesome/fontawesome-svg-core'

library.add(fas);
library.add(fab);


export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => (
  <h1>
    Hi {props.userName} from React! Welcome to {props.lang}!
  </h1>
);