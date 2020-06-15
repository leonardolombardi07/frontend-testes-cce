import {
  PROJECTS,
  FETCH_PROJECTS,
  CREATE_PROJECT,
  EDIT_PROJECT,
  SAVE_SELECTED_PROJECT,
} from "./types";
import { HerokuTestes } from "../../services/apis/HerokuTestes";

function validateProjectData({ projectData }) {
  console.log(projectData);
  if (!projectData["projectName"] || !projectData["projectDescription"]) {
    throw new Error("Por favor dê um nome e uma descrição pro projeto");
  } else if (typeof projectData["projectLogo"] === String) {
    const fileExtension = projectData["projectLogo"].substr(
      projectData["projectLogo"].length - 3
    );
    if (fileExtension !== "png") {
      throw new Error("A logo deve estar no formato png");
    }
  }
}

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

export const createProject = ({ projectData }) => async (dispatch) => {
  dispatch({ type: PROJECTS, payload: { loading: true, error: null } });
  try {
    validateProjectData({ projectData });
    const formDataObject = {};
    const { data } = await HerokuTestes.post("/projesaascts", formDataObject);
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
