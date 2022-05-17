import React, { useState } from "react";
import {
  AiOutlineLike,
  AiFillLike,
  BsBookmark,
  BsFillBookmarkCheckFill,
} from "../../../icons";
import Moment from "react-moment";
import { useAuth, usePosts } from "../../../hooks";
import {
  likeThePost,
  disLikeThePost,
  addToBookMarks,
  removeFromBookMarks,
} from "../../../features";
import { SmallLoader } from "../../atoms";
const SinglePostCard = ({ post }) => {
  const [loaders, setLoaders] = useState({
    likeLoader: false,
    bookmarkLoader: false,
  });
  const {
    state: { bookmarkedPosts },
    dispatchPosts,
  } = usePosts();
  const {
    state: { token },
  } = useAuth();
  const { _id, firstName, username, avatar, content, createdAt } = post;
  const { likeLoader, bookmarkLoader } = loaders;
  const likePost = () => {
    dispatchPosts(likeThePost({ postId: _id, token, setLoaders }));
  };
  const disLikePost = () => {
    dispatchPosts(disLikeThePost({ postId: _id, token, setLoaders }));
  };
  const addBookmark = () => {
    dispatchPosts(addToBookMarks({ postId: _id, token, setLoaders }));
  };
  const removeBookmark = () => {
    dispatchPosts(removeFromBookMarks({ postId: _id, token, setLoaders }));
  };
  return (
    <div className=" rounded mt-1 flex flex-col w-full shadow-lg py-4 px-5 ">
      <div className="flex items-start justify-between">
        <div className="flex items-center mb-4 lg:mb-0 mr-10">
          <div className="w-10 h-10 bg-cover rounded-md">
            <img
              src={avatar}
              alt={firstName}
              referrerPolicy="no-referrer"
              className="rounded-full h-full w-full overflow-hidden shadow"
            />
          </div>
          <div className="ml-2 md:ml-6">
            <p className="text-xl font-bold leading-4 text-gray-800">
              {firstName}{" "}
              <small className="font-normal text-xs">@{username}</small>
            </p>
            <small>
              <Moment fromNow>{createdAt}</Moment>
            </small>
          </div>
        </div>
      </div>
      <p>{content}</p>

      <div className="flex items-center justify-between mt-2 p-1">
        {likeLoader ? (
          <SmallLoader />
        ) : post.likes.likedBy.find(
            (userCheck) => userCheck.username === username
          ) ? (
          <AiFillLike className="w-[1.5rem] h-[1.5rem]" onClick={disLikePost} />
        ) : (
          <AiOutlineLike className="w-[1.5rem] h-[1.5rem]" onClick={likePost} />
        )}
        {bookmarkLoader ? (
          <SmallLoader />
        ) : bookmarkedPosts.find((postCheck) => postCheck._id === _id) ? (
          <BsFillBookmarkCheckFill
            className="w-[1.5rem] h-[1.5rem]"
            onClick={removeBookmark}
          />
        ) : (
          <BsBookmark className="w-[1.5rem] h-[1.5rem]" onClick={addBookmark} />
        )}
      </div>
    </div>
  );
};

export { SinglePostCard };
