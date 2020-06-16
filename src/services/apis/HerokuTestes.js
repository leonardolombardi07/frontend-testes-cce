import axios from "axios";

export const HerokuTestes = axios.create({
  baseURL: process.env.REACT_APP_HEROKU_PROJECTS_API_KEY,
  headers: {
    "content-type": "multipart/form-data",
  },
});

HerokuTestes.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("token");
    if (access_token) {
      config.headers.Authorization = access_token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
