import * as React from "react";
import * as ReactDOM from "react-dom";
import './custom.scss';

import { App } from "./App";
ReactDOM.render(
  <App userName="Mason Lane" lang="TypeScript" />,
  document.getElementById("output")
);