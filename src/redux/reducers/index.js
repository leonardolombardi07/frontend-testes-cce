import { combineReducers } from "redux";

import requestsReducer from "./requestsReducer";
import authReducer from "./authReducer";
import menuReducer from "./menuReducer";
import themeReducer from "./themeReducer";
import projectsReducer from "./projectsReducer";

export default combineReducers({
  requests: requestsReducer,
  auth: authReducer,
  theme: themeReducer,
  menu: menuReducer,
  projects: projectsReducer,
});
