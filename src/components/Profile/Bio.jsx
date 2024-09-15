import { useState } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import { useProfile } from "../../hooks/useProfile";
import useAxios from "../../hooks/useAxios";
import CheckIcon from "../../assets/icons/like.svg";
import { actions } from "../../actions";

const Bio = () => {
  const { state, dispatch } = useProfile();
  const [bioText, setBioText] = useState(state?.user?.bio);
  const [editMode, setEditMode] = useState(false);

  const { customFetch } = useAxios();

  const handleBioEdit = async () => {
    console.log("gggg");

    dispatch({ type: actions.profile.DATA_FETCHING });
    try {
      const response = await customFetch.patch(`/profile`, {
        bioText,
      });

      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });
      }
      setEditMode(false);
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1"></div>
      {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
      {editMode ? (
        <>
          {" "}
          <textarea
            className="text-black"
            value={bioText}
            rows={4}
            cols={55}
            onChange={(e) => setBioText(e.target.value)}
          />{" "}
          <div>
            {" "}
            <button
              className="flex-center h-7 w-7 rounded-full"
              onClick={handleBioEdit}
            >
              <img src={CheckIcon} alt="check" />
            </button>
            <button
              onClick={() => {
                setEditMode(false);
                setBioText(bioText);
              }}
              className="w-8 h-8 p-2 rounded bg-indigo-500 hover:bg-red-400"
            >
              {/* <img src={closeIcon} /> */}
            </button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {bioText?.length > 0 ? bioText : "no bio available"}
          </p>
          <button className="flex-center h-7 w-7 rounded-full">
            <img src={EditIcon} alt="Edit" onClick={() => setEditMode(true)} />
          </button>
        </>
      )}
    </div>
  );
};

export default Bio;
