import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

export default createStore(
  reducers,
  compose(composeEnhancers(applyMiddleware(thunk)))
);
