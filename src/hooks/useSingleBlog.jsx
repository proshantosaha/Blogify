import React, { useEffect } from "react";
import useAxios from "./useAxios";
import SingleBlogPage from "../pages/SingleBlogPage";
import { useQuery } from "@tanstack/react-query";

export const useSingleBlog = (id) => {
  const { api } = useAxios();

  const singleBlogFatching = async ({ queryKey }) => {
    const blogId = queryKey[1]; // Access the id from queryKey

    const response = await api.get(`/blogs/${blogId}`);
    return response.data;
  };

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["blog", id],
    queryFn: singleBlogFatching,
  });
  return { data, error, isLoading, isError };
};
