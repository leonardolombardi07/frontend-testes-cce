import { SIGN_UP, PODIO_SIGN_IN, SIGN_IN, SIGN_OUT } from "../actions/types";

const initialState = {
  name: null,
  email: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return action.payload;
    case PODIO_SIGN_IN:
      return action.payload;
    case SIGN_IN:
      return action.payload;
    case SIGN_OUT:
      return {
        name: null,
        email: null,
        token: null,
      };
    default:
      return state;
  }
};
