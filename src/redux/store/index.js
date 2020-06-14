import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducers from "../reducers";

import { composeWithDevTools } from "redux-devtools-extension";
const composeEnhancers = composeWithDevTools({});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["projects", "theme"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  compose(composeEnhancers(applyMiddleware(thunk)))
);
const persistor = persistStore(store);
export { store, persistor };
