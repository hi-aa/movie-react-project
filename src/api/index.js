import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export const api = axios.create();
const useAxiosLoader = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const inc = (mod) => setCounter((c) => c + mod);

    const handleRequest = (config) => {
      inc(1);
      return config;
    };
    const handleResponse = (response) => {
      inc(-1);
      return response.data;
    };
    const handleError = (error) => {
      inc(-1);
      return Promise.reject(error);
    };

    // add request interceptors
    const reqInterceptor = api.interceptors.request.use(
      handleRequest,
      handleError
    );
    // add response interceptors
    const resInterceptor = api.interceptors.response.use(
      handleResponse,
      handleError
    );
    return () => {
      // remove all intercepts when done
      api.interceptors.request.eject(reqInterceptor);
      api.interceptors.response.eject(resInterceptor);
    };
  }, []);

  return counter > 0;
};

export const GlobalLoader = () => {
  const loading = useAxiosLoader();
  return loading && <Loading />;
};
