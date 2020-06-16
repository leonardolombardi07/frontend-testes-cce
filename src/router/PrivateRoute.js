import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({
  component: Component,
  hasAuthToken,
  ...rest
}) {
  const checkIfAuthenticated = (props) => {
    if (!hasAuthToken) {
      return (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      );
    }

    return <Component {...props} />;
  };
  return <Route {...rest} render={(props) => checkIfAuthenticated(props)} />;
}
