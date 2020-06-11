import { combineReducers } from "redux";

import requestsReducer from "./requestsReducer";
import projectsReducer from "./projectsReducer";

export default combineReducers({
  requests: requestsReducer,
  projects: projectsReducer,
});
