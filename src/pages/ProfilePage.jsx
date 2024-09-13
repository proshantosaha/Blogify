import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { BASE_URL } from "../constant";
import { useAuth } from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";

const ProfilePage = () => {
  const { auth } = useAuth();
  const { customFetch } = useAxios();

  useProfile();

  // const [user, setUser] = useState(null);
  // const [blogs, setBlogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const [error, setError] = useState(null);

  // console.log(user);

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await customFetch.get(
          `${BASE_URL}/profile/${auth?.user?.id}`
        );
        console.log(response);

        setUser(response?.user?.id);
        setBlogs(response?.data?.blogs);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);
  if (loading) {
    return <div>Fetching your Profile data ....</div>;
  }

  return (
    <div>
      Welcome,{user?.firstName} {user?.lastName}
      <p> you have {blogs.length} blogs</p>{" "}
    </div>
  );
};

export default ProfilePage;
