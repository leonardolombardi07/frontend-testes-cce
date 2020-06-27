import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { history } from "./RootNavigation";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../constants/styled-components";
import { useSelector } from "react-redux";

import SignInPage from "../pages/LoggedOut/SignInPage";
import SignUpPage from "../pages/LoggedOut/SignUpPage";
import ForgotPasswordPage from "../pages/LoggedOut/ForgotPasswordPage";
import ResetPasswordPage from "../pages/LoggedOut/ResetPasswordPage";
import HomePage from "../pages/LoggedIn/HomePage";
import ProjectDetailPage from "../pages/LoggedIn/ProjectDetailPage";
import CreateProjectPage from "../pages/LoggedIn/CreateProjectPage";
import EditProjectPage from "../pages/LoggedIn/EditProjectPage";

export default function Router_() {
  const themeState = useSelector((state) => state.theme);
  const { token } = useSelector((state) => state.auth);

  return (
    <ThemeProvider theme={themeState}>
      <Router history={history}>
        <GlobalStyles />
        <Switch>
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <Route path="/reset-password" component={ResetPasswordPage} />

          <PrivateRoute
            exact
            path="/"
            component={HomePage}
            hasAuthToken={token}
          />

          <PrivateRoute
            path="/project-detail"
            component={ProjectDetailPage}
            hasAuthToken={token}
          />

          <PrivateRoute
            path="/create-project"
            component={CreateProjectPage}
            hasAuthToken={token}
          />

          <PrivateRoute
            path="/edit-project"
            component={EditProjectPage}
            hasAuthToken={token}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
