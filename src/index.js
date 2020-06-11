import React from "react";
import ReactDOM from "react-dom";
import Provider from "react-redux";

import { GlobalStyles } from "./constants/styled-components";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}></Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
