import React from "react";
import { Router, BrowserRouter, Switch, Route } from "react-router-dom";
import { history } from "./RootNavigation";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../constants/styled-components";
import { useSelector } from "react-redux";

import SignInPage from "../pages/LoggedOut/SignInPage";
import SignUpPage from "../pages/LoggedOut/SignUpPage";
import HomePage from "../pages/LoggedIn/HomePage";
import ProjectDetailPage from "../pages/LoggedIn/ProjectDetailPage";
import CreateProjectPage from "../pages/LoggedIn/CreateProjectPage";
import EditProjectPage from "../pages/LoggedIn/EditProjectPage";

export default function Router_() {
  const themeState = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={themeState}>
      <Router
        history={history}
        // basename={process.env.PUBLIC_URL}
      >
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/project-detail" component={ProjectDetailPage} />
          <Route exact path="/create-project" component={CreateProjectPage} />
          <Route exact path="/edit-project" component={EditProjectPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
