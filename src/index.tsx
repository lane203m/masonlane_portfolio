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