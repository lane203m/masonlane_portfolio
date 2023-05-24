import * as React from "react";
import * as ReactDOM from "react-dom";
import './custom.scss';

import { App } from "./App";
ReactDOM.render(
  <App userName="Beveloper" lang="TypeScript" />,
  document.getElementById("output")
);