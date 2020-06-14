import { PROJECTS } from "../actions/types";

const initialState = {
  loading: {
    loadingProjects: false,
  },
  error: {
    projectsError: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS:
      return {
        loading: {
          ...state.loading,
          projects: action.payload.loading,
        },
        error: {
          ...state.error,
          projects: action.payload.error,
        },
      };
    default:
      return state;
  }
};
