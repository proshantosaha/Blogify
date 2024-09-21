import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api.js";

const getPopular = async () => {
  try {
    const data = api.get("blogs/popular");
    return data;
  } catch (error) {
    return error;
  }
};

const useGetPopular = () => {
  const query = useQuery({
    queryKey: ["popular-blogs"],
    queryFn: getPopular,
  });

  return query;
};
export default useGetPopular;
