import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyles } from "./constants/styled-components";

import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./router";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
