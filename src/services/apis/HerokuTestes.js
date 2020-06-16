import axios from "axios";

export const HerokuTestes = axios.create({
  baseURL: process.env.REACT_APP_HEROKU_PROJECTS_API_KEY,
  headers: {
    "content-type": "multipart/form-data",
    Authorization: localStorage.getItem("token"),
  },
});

export const HerokuTestesJSON = axios.create({
  baseURL: process.env.REACT_APP_HEROKU_PROJECTS_API_KEY,
  headers: {
    "content-type": "application/json",
  },
});
