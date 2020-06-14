import { PROJECTS } from "../actions/types";

const initialState = {
  loading: {
    loadingProjects: true,
  },
  error: {
    projectsError: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS:
      console.log(action.payload);
      return {
        loading: {
          ...state.loading,
          loadingProjects: action.payload.loading,
        },
        error: {
          ...state.error,
          projectsError: false, // change to action.payload.error
        },
      };
    default:
      return state;
  }
};
