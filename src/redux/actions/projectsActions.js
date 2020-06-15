import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT,
  EDIT_PROJECT_REQUEST,
  EDIT_PROJECT,
  SAVE_SELECTED_PROJECT,
} from "./types";
import { HerokuTestes } from "../../services/apis/HerokuTestes";
import { history } from "../../router/RootNavigation";

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
  dispatch({
    type: FETCH_PROJECTS_REQUEST,
    payload: { loading: true, error: null },
  });
  try {
    const { data } = await HerokuTestes.get("/projects");
    dispatch({ type: FETCH_PROJECTS, payload: data });
    dispatch({
      type: FETCH_PROJECTS_REQUEST,
      payload: { loading: false, error: null },
    });
  } catch (error) {
    dispatch({
      type: FETCH_PROJECTS_REQUEST,
      payload: { loading: false, error: error.message },
    });
  }
};

export const createProject = ({ projectData }) => async (dispatch) => {
  dispatch({
    type: CREATE_PROJECT_REQUEST,
    payload: { loading: true, error: null },
  });
  try {
    validateProjectData({ projectData });

    const multipartFormData = new FormData();
    multipartFormData.append("projectName", projectData.projectName);
    multipartFormData.append(
      "projectDescription",
      projectData.projectDescription
    );
    multipartFormData.append(
      "projectBugsReport",
      projectData.projectBugsReport
    );
    multipartFormData.append("projectLogo", projectData.projectLogo);

    const { data } = await HerokuTestes.post("/projects", multipartFormData);
    dispatch({ type: CREATE_PROJECT, payload: data });

    dispatch({
      type: CREATE_PROJECT_REQUEST,
      payload: { loading: false, error: null },
    });

    history.push("/");
  } catch (error) {
    dispatch({
      type: CREATE_PROJECT_REQUEST,
      payload: { loading: false, error: error.message },
    });
  }
};

export const editProject = ({ projectData }) => async (dispatch) => {
  dispatch({
    type: EDIT_PROJECT_REQUEST,
    payload: { loading: true, error: null },
  });
  try {
    validateProjectData({ projectData });

    const multipartFormData = new FormData();
    multipartFormData.append("projectName", projectData.projectName);
    multipartFormData.append(
      "projectDescription",
      projectData.projectDescription
    );
    multipartFormData.append(
      "projectBugsReport",
      projectData.projectBugsReport
    );
    multipartFormData.append("projectLogo", projectData.projectLogo);

    const { data } = await HerokuTestes.put(
      `project/${projectData._id}`,
      multipartFormData
    );
    dispatch({ type: EDIT_PROJECT, payload: data });

    dispatch({
      type: EDIT_PROJECT_REQUEST,
      payload: { loading: false, error: null },
    });
    history.push("/");
  } catch (error) {
    dispatch({
      type: EDIT_PROJECT_REQUEST,
      payload: { loading: false, error: error.message },
    });
  }
};

export const saveSelectedProject = ({ projectData }) => (dispatch) => {
  dispatch({ type: SAVE_SELECTED_PROJECT, payload: projectData });
};
