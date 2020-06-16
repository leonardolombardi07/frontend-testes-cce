import {
  SIGN_UP_REQUEST,
  PODIO_SIGN_IN_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_UP,
  PODIO_SIGN_IN,
  SIGN_IN,
  SIGN_OUT,
} from "./types";
import { HerokuTestes } from "../../services/apis/HerokuTestes";

export const signUp = () => async (dispatch) => {
  dispatch({ type: SIGN_UP_REQUEST, payload: { loading: true, error: null } });

  try {
    const { data } = await HerokuTestes.post("/auth/signup");
    dispatch({ type: SIGN_UP, payload: data });

    dispatch({
      type: SIGN_UP_REQUEST,
      payload: { loading: false, error: null },
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_REQUEST,
      payload: { loading: false, error: error.message },
    });
  }
};

export const podioSignIn = () => async (dispatch) => {
  dispatch({
    type: PODIO_SIGN_IN_REQUEST,
    payload: { loading: true, error: null },
  });

  try {
    const { data } = await HerokuTestes.get("/auth/podio");
    dispatch({ type: PODIO_SIGN_IN, payload: data });

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

export const signIn = () => async (dispatch) => {
  dispatch({
    type: SIGN_IN_REQUEST,
    payload: { loading: true, error: null },
  });

  try {
    const { data } = await HerokuTestes.get("/auth/signin");
    dispatch({ type: SIGN_IN, payload: data });

    dispatch({
      type: SIGN_IN_REQUEST,
      payload: { loading: false, error: null },
    });
  } catch (error) {
    dispatch({
      type: SIGN_IN_REQUEST,
      payload: { loading: false, error: error.message },
    });
  }
};

export const signOut = () => (dispatch) => {
  dispatch({ type: SIGN_OUT });
};
