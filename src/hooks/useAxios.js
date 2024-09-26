import { useEffect } from "react";
import customFetch from "../utils/customFetch";
import { useAuth } from "./useAuth";
import axios from "axios";
import { api } from "../api/api";

const useAxios = () => {
  const { auth, setAuth } = useAuth();
  // console.log(auth);

  useEffect(() => {
    // add a request intercepter

    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken;

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = api.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            // const refreshToken = auth?.refreshToken;
            const response = await api.post(`/auth/refresh-token`, {
              refreshToken,
            });

            const { token } = response.data;
            console.log(`new token:${token}`);
            setAuth({ ...auth, authToken: token });

            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          } catch (error) {
            throw error;
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
    // add a response intercepter
  }, [auth.authToken]);
  return { api };
};

export default useAxios;
