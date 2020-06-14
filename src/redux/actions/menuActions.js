import { TOGGLE_MOBILE_MENU, TOGGLE_DESKTOP_MENU } from "./types";

export const toggleMobileMenu = () => (dispatch) => {
  dispatch({ type: TOGGLE_MOBILE_MENU });
};

export const toggleDesktopMenu = () => (dispatch) => {
  dispatch({ type: TOGGLE_DESKTOP_MENU });
};
