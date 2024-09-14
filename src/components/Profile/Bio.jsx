import React from "react";

const Bio = () => {
  return (
    <div class="mt-4 flex items-start gap-2 lg:mt-6">
      <div class="flex-1">
        <p class="leading-[188%] text-gray-400 lg:text-lg">
          Sumit is an entrepreneurial visionary known for his exceptional
          performance and passion for technology and business. He established
          Analyzen in 2008 while he was a student at Bangladesh University of
          Engineering & Technology (BUET). Analyzen has since become a top-tier
          Web and Mobile Application Development firm and the first Digital and
          Social Media Marketing Agency in Bangladesh.
        </p>
      </div>
      {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
      <button class="flex-center h-7 w-7 rounded-full">
        <img src="./assets/icons/edit.svg" alt="Edit" />
      </button>
    </div>
  );
};

export default Bio;
