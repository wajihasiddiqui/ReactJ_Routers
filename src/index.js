import React from "react";
import ReactDOM from "react-dom";
import Routers from "./Routers";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>,

  document.getElementById("root")
);

reportWebVitals();
