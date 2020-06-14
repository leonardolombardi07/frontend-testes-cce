import { TOGGLE_MOBILE_MENU, TOGGLE_DESKTOP_MENU } from "../actions/types";

const initialState = {
  isMobileMenuOpen: false,
  isDesktopMenuOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuOpen: !state.isMobileMenuOpen,
      };
    case TOGGLE_DESKTOP_MENU:
      return {
        ...state,
        isDesktopMenuOpen: !state.isDesktopMenuOpen,
      };
    default:
      return state;
  }
};
