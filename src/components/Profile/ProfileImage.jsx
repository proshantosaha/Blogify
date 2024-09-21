import React, { useRef } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import { useProfile } from "../../hooks/useProfile";
import useAxios from "../../hooks/useAxios";
import { actions } from "../../actions";
// import customFetch from "../../utils/customFetch";

const ProfileImage = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const fileUploadRef = useRef();

  const handleImageUpload = (e) => {
    e.preventDefault();
    fileUploadRef.current.addEventListener("change", updateImageDisplay);

    fileUploadRef.current.click();
  };

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();
      for (const file of fileUploadRef.current.files) {
        formData.append("avatar", file);
      }
      const response = await api.post(`/profile/avatar`, formData);
      if (response.status === 200) {
        dispatch({
          type: actions.profile.IMAGE_UPDATED,
          data: response.data.user,
        });
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
        {/* <!-- User's first name initial --> */}{" "}
        <img
          className="w-full h-full rounded-full object-cover"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
            state?.user?.avatar
          }`}
          alt={state?.user?.firstName}
        />
      </div>
      <>
        <button
          type="submit"
          className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80"
          onClick={handleImageUpload}
        >
          <img src={EditIcon} alt="Edit" />
        </button>
        <input id="file" type="file" ref={fileUploadRef} hidden />
      </>
    </div>
  );
};

export default ProfileImage;
