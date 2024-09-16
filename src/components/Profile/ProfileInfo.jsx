import React from "react";
import { useProfile } from "../../hooks/useProfile";
import ProfileImage from "./ProfileImage";
import Bio from "./Bio";
import { useAuth } from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import useFetchProfile from "../../hooks/useFetchProfile";

const ProfileInfo = () => {
  const { auth } = useAuth();
  const { state, dispatch } = useProfile();
  const { userId } = useParams();
  const {
    data: profileData,
    error,
    isError,
    isLoading,
  } = useFetchProfile(userId);

  const user = state?.user ?? auth?.user;

  const { firstName, lastName, email, blogs, avatar, bio } = profileData || {};

  // if (isLoading) {
  //   return <Loader />;
  // }

  // if (isError) {
  //   throw new Error(error.message);
  // }

  return (
    <div className="flex flex-col items-center py-8 text-center ">
      {console.log(state)}
      {/* <!-- profile image --> */}
      <ProfileImage user={user} />
      {/* <!-- name , email --> */}
      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {state?.user?.firstName} {state?.user?.lastName}
        </h3>
        <p className="leading-[231%] lg:text-lg">{state?.user?.email}</p>
      </div>

      {/* <!-- bio --> */}
      <Bio
        bio={bio}
        // dispatch={dispatch}
        isEditable={auth?.user?.id === userId}
      />
      {/* <Bio state={state} dispatch={dispatch}  /> */}
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  );
};

export default ProfileInfo;
