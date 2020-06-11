import {
  PROJECTS,
  FETCH_PROJECTS,
  CREATE_PROJECT,
  EDIT_PROJECT,
} from "./types";

export const fetchProjects = () => (dispatch) => {
  dispatch({ type: PROJECTS, payload: { loading: true, error: null } });
  try {
    dispatch({ type: PROJECTS, payload: { loading: false, error: null } });
  } catch (error) {
    dispatch({
      type: PROJECTS,
      payload: { loading: false, error: error.message },
    });
  }
};

export const createProject = () => (dispatch) => {
  dispatch({ type: PROJECTS, payload: { loading: true, error: null } });
  try {
    dispatch({ type: PROJECTS, payload: { loading: false, error: null } });
  } catch (error) {
    dispatch({
      type: PROJECTS,
      payload: { loading: false, error: error.message },
    });
  }
};

export const editProject = () => (dispatch) => {
  dispatch({ type: PROJECTS, payload: { loading: true, error: null } });
  try {
    dispatch({ type: PROJECTS, payload: { loading: false, error: null } });
  } catch (error) {
    dispatch({
      type: PROJECTS,
      payload: { loading: false, error: error.message },
    });
  }
};
