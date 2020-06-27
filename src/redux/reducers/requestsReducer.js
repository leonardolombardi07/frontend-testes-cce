import {
  SIGN_UP_REQUEST,
  PODIO_SIGN_IN_REQUEST,
  SIGN_IN_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
  FETCH_PROJECTS_REQUEST,
  CREATE_PROJECT_REQUEST,
  EDIT_PROJECT_REQUEST,
} from "../actions/types";

const initialState = {
  loading: {
    loadingSignUp: false,
    loadingPodioSignIn: false,
    loadingSignIn: false,
    loadingForgotPassword: false,
    loadingResetPassword: false,

    loadingFetchProjects: false,
    loadingCreateProject: false,
    loadingEditProject: false,
  },
  error: {
    signUpError: null,
    podioSignInError: null,
    signInError: null,
    forgotPasswordError: null,
    resetPasswordError: null,

    fetchProjectsError: null,
    createProjectError: null,
    editProjectError: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        loading: {
          ...state.loading,
          loadingSignUp: action.payload.loading,
        },
        error: {
          ...state.error,
          signUpError: action.payload.error,
        },
      };
    case PODIO_SIGN_IN_REQUEST:
      return {
        loading: {
          ...state.loading,
          loadingPodioSignIn: action.payload.loading,
        },
        error: {
          ...state.error,
          podioSignInError: action.payload.error,
        },
      };
    case SIGN_IN_REQUEST:
      return {
        loading: {
          ...state.loading,
          loadingSignIn: action.payload.loading,
        },
        error: {
          ...state.error,
          signInError: action.payload.error,
        },
      };
    case FORGOT_PASSWORD_REQUEST:
      return {
        loading: {
          ...state.loading,
          loadingForgotPassword: action.payload.loading,
        },
        error: {
          ...state.error,
          forgotPasswordError: action.payload.error,
        },
      };
    case RESET_PASSWORD_REQUEST:
      return {
        loading: {
          ...state.loading,
          loadingResetPassword: action.payload.loading,
        },
        error: {
          ...state.error,
          resetPasswordError: action.payload.error,
        },
      };
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
