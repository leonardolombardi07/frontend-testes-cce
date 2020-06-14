import axios from "axios";

const base_url = "https://api.github.com";
const DEV_URL = "http://localhost:5000";
const PROD_URL = "https://api-heroku-testes.herokuapp.com";

export const HerokuTestes = axios.create({
  baseURL: DEV_URL,
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
