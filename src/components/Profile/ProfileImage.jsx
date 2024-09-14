import React from "react";

const ProfileImage = () => {
  return (
    <div class="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <div class="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
        {/* <!-- User's first name initial --> */}
        <span class="">S</span>
      </div>

      <button class="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80">
        <img src="./assets/icons/edit.svg" alt="Edit" />
      </button>
    </div>
  );
};

export default ProfileImage;
