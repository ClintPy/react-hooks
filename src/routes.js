import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Main from "./Components/Main";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Create from "./Components/Create";

const Routes = () => (
  <Switch>
    <Route exact path="/signUp" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/" component={Main} />
    <Route path="/create" component={Create} />
  </Switch>
);

export default Routes;
