import React from "react";
import customFetch from "../utils/customFetch";
import { useAuth } from "./useAuth";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useProfileFetch = (userId) => {
  // const { api } = useAxios();

  const api = useAxios();
  //function to handle server request
  const fetchProfile = async ({ queryKey }) => {
    const response = await api.get(`/profile/${queryKey[1]}`);
    return response.data;
  };

  //handle the cacheing
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["Profile", userId],
    queryFn: fetchProfile,
  });
  return { data, error, isError, isLoading };
};

export default useProfileFetch;
