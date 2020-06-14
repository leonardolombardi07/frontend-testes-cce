import { TOGGLE_THEME } from "../actions/types";
import { DEFAULT_THEME, DARK_THEME } from "../../constants/theme";

const initialState = DEFAULT_THEME;

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      switch (state) {
        case DEFAULT_THEME:
          return DARK_THEME;
        case DARK_THEME:
          return DEFAULT_THEME;
        default:
          return DEFAULT_THEME;
      }
    default:
      return state;
  }
};
