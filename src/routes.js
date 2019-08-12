import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/login";
import Main from "./pages/main";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Login} />
    <Route path="/dev/:id" component={Main} />
  </BrowserRouter>
);

export default Routes;
