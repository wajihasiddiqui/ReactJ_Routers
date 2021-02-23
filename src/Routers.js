import React from "react";
import Features from "./Features";
import Pricing from "./Pricing";
import Navebar from "./navbar";
import Error from "./Error";
import { Switch, Route } from "react-router-dom";

function Routers() {
  return (
    <>
      <Navebar />
      <Switch>
        <Route exact path="/" component={Features} />
        <Route exact path="/Pricing" component={Pricing} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default Routers;
