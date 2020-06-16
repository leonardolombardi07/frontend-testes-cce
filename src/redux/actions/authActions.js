import {
  SIGN_UP_REQUEST,
  PODIO_SIGN_IN_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_UP,
  PODIO_SIGN_IN,
  SIGN_IN,
  SIGN_OUT,
} from "./types";
import { HerokuTestesJSON } from "../../services/apis/HerokuTestes";
import { history } from "../../router/RootNavigation";

export const signUp = ({ name, email, password }) => async (dispatch) => {
  dispatch({ type: SIGN_UP_REQUEST, payload: { loading: true, error: null } });

  try {
    const jsonPostData = JSON.stringify({
      name,
      email,
      password,
    });

    const { data } = await HerokuTestesJSON.post("/auth/signup", jsonPostData);
    dispatch({ type: SIGN_UP, payload: data });

    history.push("/");

    alert("Cadastro realizado com sucesso");
    dispatch({
      type: SIGN_UP_REQUEST,
      payload: { loading: false, error: null },
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_REQUEST,
      payload: { loading: false, error: error.response.data.error },
    });
  }
};

export const podioSignIn = () => async (dispatch) => {
  dispatch({
    type: PODIO_SIGN_IN_REQUEST,
    payload: { loading: true, error: null },
  });

  try {
    const { data } = await HerokuTestesJSON.get("/auth/podio");
    const podioCallBackUrl = data;

    window.open(podioCallBackUrl);
    // dispatch({ type: PODIO_SIGN_IN, payload: data });

    dispatch({
      type: PODIO_SIGN_IN_REQUEST,
      payload: { loading: false, error: null },
    });
  } catch (error) {
    dispatch({
      type: PODIO_SIGN_IN_REQUEST,
      payload: { loading: false, error: error.message },
    });
  }
};

export const signIn = ({ email, password }) => async (dispatch) => {
  dispatch({
    type: SIGN_IN_REQUEST,
    payload: { loading: true, error: null },
  });

  try {
    const jsonPostData = JSON.stringify({
      email,
      password,
    });
    const { data } = await HerokuTestesJSON.post("/auth/signin", jsonPostData);
    dispatch({ type: SIGN_IN, payload: data });
    history.push("/");

    dispatch({
      type: SIGN_IN_REQUEST,
      payload: { loading: false, error: null },
    });
  } catch (error) {
    dispatch({
      type: SIGN_IN_REQUEST,
      payload: { loading: false, error: error.response.data.error },
    });
  }
};

export const signOut = () => (dispatch) => {
  dispatch({ type: SIGN_OUT });
};
