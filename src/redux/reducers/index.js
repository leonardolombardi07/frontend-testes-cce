import { combineReducers } from "redux";

import requestsReducer from "./requestsReducer";
import menuReducer from "./menuReducer";
import themeReducer from "./themeReducer";
import projectsReducer from "./projectsReducer";

export default combineReducers({
  requests: requestsReducer,
  theme: themeReducer,
  menu: menuReducer,
  projects: projectsReducer,
});
