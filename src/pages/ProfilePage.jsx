import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { BASE_URL } from "../constant";
import { useAuth } from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";
import { actions } from "../actions";

const ProfilePage = () => {
  const { auth } = useAuth();
  const { customFetch } = useAxios();

  const { state, dispatch } = useProfile();

  // const [user, setUser] = useState(null);
  // const [blogs, setBlogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const [error, setError] = useState(null);

  // console.log(user);

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await customFetch.get(
          `${BASE_URL}/profile/${auth?.user?.id}`
        );
        console.log(response);

        if (response.status === 200) {
          dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
        }

        // setUser(response?.user?.id);
        // setBlogs(response?.data?.blogs);
      } catch (error) {
        console.log(error);
        // setError(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfile();
  }, []);
  if (state.loading) {
    return <div>Fetching your Profile data ....</div>;
  }

  return (
    <div>
      Welcome,{state?.user?.firstName} {state?.user?.lastName}
      <p> you have {state?.blogs.length} blogs</p>{" "}
    </div>
  );
};

export default ProfilePage;
