import {
  SIGN_UP_REQUEST,
  PODIO_SIGN_IN_REQUEST,
  SIGN_IN_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
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
    localStorage.setItem("token", data.token);

    history.push("/");
    alert("Cadastro realizado com sucesso");
    dispatch({
      type: SIGN_UP_REQUEST,
      payload: { loading: false, error: null },
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_REQUEST,
      payload: {
        loading: false,
        error: error?.response?.data
          ? error.response.data.error
          : error.message,
      },
    });
  }
};

export const podioSignIn = () => async (dispatch) => {
  // Consertar essa função
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
      payload: {
        loading: false,
        error: error?.response?.data
          ? error.response.data.error
          : error.message,
      },
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
    localStorage.setItem("token", data.token);
    dispatch({ type: SIGN_IN, payload: data });

    history.push("/");
    dispatch({
      type: SIGN_IN_REQUEST,
      payload: { loading: false, error: null },
    });
  } catch (error) {
    dispatch({
      type: SIGN_IN_REQUEST,
      payload: {
        loading: false,
        error: error?.response?.data
          ? error.response.data.error
          : error.message,
      },
    });
  }
};

export const forgotPassword = ({ email }) => async (dispatch) => {
  dispatch({
    type: FORGOT_PASSWORD_REQUEST,
    payload: {
      loading: true,
      error: null,
    },
  });

  try {
    const jsonPostData = JSON.stringify({
      email,
    });

    const { data } = await HerokuTestesJSON.post(
      "/auth/forgot-password",
      jsonPostData
    );

    alert("E-mail enviado!");
    history.push("/signin");

    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
      payload: {
        loading: false,
        error: null,
      },
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
      payload: {
        loading: false,
        error: error?.response?.data
          ? error.response.data.error
          : error.message,
      },
    });
  }
};

export const resetPassword = ({ newPassword, confirmNewPassword }) => async (
  dispatch
) => {
  dispatch({
    type: RESET_PASSWORD_REQUEST,
    payload: {
      loading: true,
      error: null,
    },
  });

  try {
    if (newPassword !== confirmNewPassword) {
      throw new Error("Verifique se as senhas são iguais");
    }

    const jsonPostData = JSON.stringify({
      newPassword,
    });

    const pageUrl = window.location.href;
    const n = pageUrl.lastIndexOf("/");
    const token = pageUrl.substring(n + 1);

    const { data } = await HerokuTestesJSON.post(
      `/auth/reset-password/${token}`,
      jsonPostData
    );

    alert("Senha atualizada com sucesso!");
    history.push("/signin");

    dispatch({
      type: RESET_PASSWORD_REQUEST,
      payload: {
        loading: false,
        error: null,
      },
    });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
      payload: {
        loading: false,
        error: error?.response?.data
          ? error.response.data.error
          : error.message,
      },
    });
  }
};

export const signOut = () => (dispatch) => {
  dispatch({ type: SIGN_OUT });
};
