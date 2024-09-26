import React, { useState } from "react";

const CommentSection = () => {
  const [comment, setComment] = useState("");

  return (
    <>
      {/* <section id="comments">
        <div className="mx-auto w-full md:w-10/12 container"> */}
      {/* <h2 className="text-3xl font-bold my-8">
            Comments ({comments.length})
          </h2>
          <div className="flex items -center space-x-4">
            <div className="avater-img bg-indigo-600 text-white">
              <span>{firstName ? firstName[0] : "A"}</span>
            </div>
            <div className="w-full">
              <textarea
                className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
                placeholder="Write a comment"
              ></textarea>
              <div className="flex justify-end mt-4">
                <button className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
                  Comment
                </button>
              </div>
            </div>
          </div> */}

      {/* <!-- Comment One --> */}

      {/* {comments.map((comment) => (
            <div className="flex items-start space-x-4 my-8" key={comment.id}>
              <div className="avater-img bg-orange-600 text-white">
                <span className="">{comment.author[0]}</span>
              </div>
              <div className="w-full"> */}
      {/* <h5 className="text-slate-500 font-bold">
              {comment?.author}
            </h5> */}
      {/* <p className="text-slate-300">{comment.text}</p>
              </div>
            </div>
          ))} */}

      {/* <!-- Comment Two --> */}
      {/* </div>
      </section>
      <div classNameName="floating-action">
        <ul classNameName="floating-action-menus">
          <li>
            <img src="./assets/icons/like.svg" alt="like" />
            <span>10</span>
          </li>

          <li> */}
      {/* <!-- There is heart-filled.svg in the icons folder --> */}
      {/* <img src="./assets/icons/heart.svg" alt="Favourite" />
          </li>
          <a href="#comments">
            <li>
              <img src="./assets/icons/comment.svg" alt="Comments" />
              <span>3</span>
            </li>
          </a>
        </ul>
      </div> */}
    </>
  );
};

export default CommentSection;
