import {
  PROJECTS,
  FETCH_PROJECTS,
  CREATE_PROJECT,
  EDIT_PROJECT,
  SAVE_SELECTED_PROJECT,
} from "./types";
import { HerokuTestes } from "../../services/apis/HerokuTestes";

export const fetchProjects = () => async (dispatch) => {
  dispatch({ type: PROJECTS, payload: { loading: true, error: null } });
  try {
    const { data } = await HerokuTestes.get("/projects");
    dispatch({ type: FETCH_PROJECTS, payload: data });
    dispatch({ type: PROJECTS, payload: { loading: false, error: null } });
  } catch (error) {
    dispatch({
      type: PROJECTS,
      payload: { loading: false, error: error.message },
    });
  }
};

export const createProject = () => async (dispatch) => {
  dispatch({ type: PROJECTS, payload: { loading: true, error: null } });
  try {
    const formDataObject = {};
    const { data } = await HerokuTestes.post("/projects", formDataObject);
    dispatch({ type: CREATE_PROJECT, payload: data });
    dispatch({ type: PROJECTS, payload: { loading: false, error: null } });
  } catch (error) {
    dispatch({
      type: PROJECTS,
      payload: { loading: false, error: error.message },
    });
  }
};

export const editProject = ({ projectId }) => async (dispatch) => {
  dispatch({ type: PROJECTS, payload: { loading: true, error: null } });
  try {
    const editProjectPostData = {};
    const { data } = await HerokuTestes.put(
      `projects/${projectId}`,
      editProjectPostData
    );
    dispatch({ type: EDIT_PROJECT, payload: data });
    dispatch({ type: PROJECTS, payload: { loading: false, error: null } });
  } catch (error) {
    dispatch({
      type: PROJECTS,
      payload: { loading: false, error: error.message },
    });
  }
};

export const saveSelectedProject = ({ projectData }) => (dispatch) => {
  dispatch({ type: SAVE_SELECTED_PROJECT, payload: projectData });
};
