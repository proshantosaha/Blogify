import React, { useEffect } from "react";
import customFetch from "../utils/customFetch";
import { useAuth } from "./useAuth";
import axios from "axios";

const useAxios = () => {
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    // add a request intercepter

    const requestIntercept = customFetch.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken;
        if (authToken) {
          config.headers.Authorization = `Bearer $ {authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = customFetch.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );
            const { token } = response.data;
            console.log(`new token:${token}`);
            setAuth({ ...auth, authToken: token });
            originalRequest.headers.Authorization = `Bearer $ {token}`;
            return axios(originalRequest);
          } catch (error) {
            throw error;
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      customFetch.interceptors.request.eject(requestIntercept);
      customFetch.interceptors.response.eject(responseIntercept);
    };
    // add a response intercepter
  }, [auth.authToken]);
  return { customFetch };
};

export default useAxios;
