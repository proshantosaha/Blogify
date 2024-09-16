import { useState } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import { useProfile } from "../../hooks/useProfile";
import useAxios from "../../hooks/useAxios";
import CheckIcon from "../../assets/icons/like.svg";
import { actions } from "../../actions";

const Bio = () => {
  const { state, dispatch } = useProfile();
  const [bio, setBioText] = useState(state?.user?.bio);
  const [editMode, setEditMode] = useState(false);

  const { customFetch } = useAxios();

  const handleBioEdit = async () => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    try {
      const response = await customFetch.patch(`/profile/`, { bio });
      // `${BASE_URL}/profile/${auth?.user?.id}

      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response?.data,
        });
      }
      setEditMode(false);
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
    setBioText(bio);
  };

  return (
    <>
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          {!editMode ? (
            <p className="leading-[188%] text-gray-400 lg:text-lg">
              {state?.user?.bio}
            </p>
          ) : (
            <textarea
              className="text-black"
              value={bio}
              rows={4}
              cols={55}
              onChange={(e) => setBioText(e.target.value)}
            />
          )}
        </div>
        {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}

        {!editMode ? (
          <button className="flex-center h-7 w-7 rounded-full">
            <img src={EditIcon} alt="Edit" onClick={(e) => setEditMode(true)} />
          </button>
        ) : (
          <button className="flex-center h-7 w-7 rounded-full">
            <img src={CheckIcon} alt="check" onClick={handleBioEdit} />
          </button>
        )}
      </div>
    </>
  );
};

export default Bio;

// <div className="mt-4 flex items-start gap-2 lg:mt-6">
// {editMode ? (
//   <>
//     <textarea
//       className="text-black"
//       value={bio}
//       rows={4}
//       cols={55}
// onChange={(e) => setBioText(e.target.value)}
//     />
//     <div>
//       <button
//         className="flex-center h-7 w-7 rounded-full"
//         onClick={handleBioEdit}
//       >
//         <img src={CheckIcon} alt="check" />
//       </button>
//     </div>
//   </>
// ) : (
//   <>
//     {" "}
//     <p className="leading-[188%] text-gray-400 lg:text-lg">
//       {bio?.length > 0 ? bio : "no bio available"}
//     </p>
//     <button className="flex-center h-7 w-7 rounded-full">
//       <img
//         src={EditIcon}
//         alt="Edit"
//         onClick={() => setEditMode(true)}
//       />
//     </button>
//   </>
// )}
// </div>
