import axios from "axios";

export const api = axios.create();

api.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
