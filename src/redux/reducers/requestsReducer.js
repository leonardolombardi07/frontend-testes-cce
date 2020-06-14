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
      return {
        loading: {
          ...state.loading,
          loadingProjects: action.payload.loading,
        },
        error: {
          ...state.error,
          projectsError: action.payload.error,
        },
      };
    default:
      return state;
  }
};
