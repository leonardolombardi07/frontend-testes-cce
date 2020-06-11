import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { GlobalStyles } from "./constants/styled-components";
import Router from "./router";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
