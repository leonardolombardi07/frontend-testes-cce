import {
  FETCH_PROJECTS_REQUEST,
  CREATE_PROJECT_REQUEST,
  EDIT_PROJECT_REQUEST,
} from "../actions/types";

const initialState = {
  loading: {
    loadingFetchProjects: false,
    loadingCreateProject: false,
    loadingEditProject: false,
  },
  error: {
    fetchProjectsError: null,
    createProjectError: null,
    editProjectError: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return {
        loading: {
          ...state.loading,
          loadingFetchProjects: action.payload.loading,
        },
        error: {
          ...state.error,
          fetchProjectsError: action.payload.error,
        },
      };
    case CREATE_PROJECT_REQUEST:
      return {
        loading: {
          ...state.loading,
          loadingCreateProject: action.payload.loading,
        },
        error: {
          ...state.error,
          createProjectError: action.payload.error,
        },
      };
    case EDIT_PROJECT_REQUEST:
      return {
        loading: {
          ...state.loading,
          loadingEditProject: action.payload.loading,
        },
        error: {
          ...state.error,
          editProjectError: action.payload.error,
        },
      };
    default:
      return state;
  }
};
