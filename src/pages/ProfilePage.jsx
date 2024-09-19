import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { BASE_URL } from "../constant";
import { useAuth } from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";
import { actions } from "../actions";
import ProfileInfo from "../components/Profile/ProfileInfo";

const ProfilePage = () => {
  const { auth } = useAuth();
  const { customFetch } = useAxios();

  const { state, dispatch } = useProfile();

  // const [user, setUser] = useState(null);
  // const [blogs, setBlogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const [error, setError] = useState(null);

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await customFetch.get(
          `${BASE_URL}/profile/${auth?.user?.id}`
        );

        if (response.status === 200) {
          dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
        }

        // setUser(response?.user?.id);
        // setBlogs(response?.data?.blogs);
      } catch (error) {
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
      <ProfileInfo />
    </div>
  );
};

export default ProfilePage;
