import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './custom.scss';

import { App } from "./App";
import { BrowserRouter, Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <App userName="Mason Lane" lang="TypeScript" />
  </BrowserRouter>,
);