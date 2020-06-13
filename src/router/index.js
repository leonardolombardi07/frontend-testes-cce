import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignInPage from "../pages/LoggedOut/SignInPage";
import SignUpPage from "../pages/LoggedOut/SignUpPage";
import HomePage from "../pages/LoggedIn/HomePage";
import ProjectDetailPage from "../pages/LoggedIn/ProjectDetailPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" exact component={HomePage} />
        <Route exact path="/project-detail" component={ProjectDetailPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </BrowserRouter>
  );
}
