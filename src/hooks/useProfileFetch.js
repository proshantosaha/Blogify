import React from "react";
import customFetch from "../utils/customFetch";
import { useAuth } from "./useAuth";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useProfileFetch = (userId) => {
  const customFetch = useAxios();

  const fetchProfile = async ({ queryKey }) => {
    const response = await customFetch.get(`/profile/${queryKey[1]}`);
    return response.data;
  };

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["profile", userId],
    queryFn: fetchProfile,
  });
  return { data, error, isError, isLoading };
};

export default useProfileFetch;
