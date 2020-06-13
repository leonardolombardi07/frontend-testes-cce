import { TOGGLE_MOBILE_MENU } from "./types";

export const toggleMobileMenu = () => (dispatch) => {
  dispatch({ type: TOGGLE_MOBILE_MENU });
};
