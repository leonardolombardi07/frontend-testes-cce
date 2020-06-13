import { TOGGLE_MOBILE_MENU } from "../actions";

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
    default:
      return state;
  }
};
