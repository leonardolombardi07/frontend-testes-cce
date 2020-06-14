import {
  FETCH_PROJECTS,
  CREATE_PROJECT,
  EDIT_PROJECT,
  SAVE_SELECTED_PROJECT,
} from "../actions/types";

const initialState = {
  projects: [],
  selectedProject: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };
    case EDIT_PROJECT:
      const newProjectsArray = [...state.projects];
      const index = newProjectsArray.findIndex(
        (project) => project._id === action.payload._id
      );
      if (index > 0) {
        newProjectsArray[index] = action.payload;
        return {
          ...state,
          projects: newProjectsArray,
        };
      } else {
        return {
          ...state,
        };
      }
    case SAVE_SELECTED_PROJECT:
      return {
        ...state,
        selectedProject: action.payload,
      };
    default:
      return state;
  }
};
