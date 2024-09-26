import React from "react";
import { useProfile } from "../../hooks/useProfile";
import ProfileImage from "./ProfileImage";
import Bio from "./Bio";
import { useAuth } from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import MyPost from "./MyPost";

const ProfileInfo = () => {
  const { auth } = useAuth();
  const { state, dispatch } = useProfile();
  // const { userId } = useParams();

  console.log(state);

  const blogs = state?.blogs;

  console.log(blogs);

  const user = state?.user ?? auth?.user;
  const { firstName, lastName, email } = user;
  const fullname = `${firstName} ${lastName}`;

  return (
    <div className="container">
      <div className="flex flex-col items-center py-8 text-center ">
        {/* <!-- profile image --> */}
        <ProfileImage />
        {/* <!-- name , email --> */}
        <div>
          <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
            {fullname}
          </h3>
          <p className="leading-[231%] lg:text-lg">{email}</p>
        </div>

        {/* <!-- bio --> */}
        <Bio />
        <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
      </div>

      <MyPost blogs={blogs} />
    </div>
  );
};

export default ProfileInfo;
