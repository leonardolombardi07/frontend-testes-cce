import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../constants/styled-components";
import { useSelector } from "react-redux";

import SignInPage from "../pages/LoggedOut/SignInPage";
import SignUpPage from "../pages/LoggedOut/SignUpPage";
import HomePage from "../pages/LoggedIn/HomePage";
import ProjectDetailPage from "../pages/LoggedIn/ProjectDetailPage";
import CreateProjectPage from "../pages/LoggedIn/CreateProjectPage";

export default function Router() {
  const themeState = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={themeState}>
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" exact component={HomePage} />
          <Route path="/project-detail" component={ProjectDetailPage} />
          <Route exact path="/create-project" component={CreateProjectPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
