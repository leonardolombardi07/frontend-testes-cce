import { combineReducers } from "redux";

import requestsReducer from "./requestsReducer";
import menuReducer from "./menuReducer";
import projectsReducer from "./projectsReducer";

export default combineReducers({
  requests: requestsReducer,
  menu: menuReducer,
  projects: projectsReducer,
});
