import React, { useEffect, useState } from "react";
import {
  AiOutlineLike,
  AiFillLike,
  BsBookmark,
  BsFillBookmarkCheckFill,
  AiFillDelete,
  AiFillEdit,
  MdDownloadDone,
  BiCommentAdd,
} from "../../../icons";
import Moment from "react-moment";
import { useAuth, usePosts } from "../../../hooks";
import {
  likeThePost,
  disLikeThePost,
  addToBookMarks,
  removeFromBookMarks,
  deletePostFromFeed,
  editThePost,
} from "../../../features";
import { SmallLoader } from "../../atoms";
import { Link } from "react-router-dom";
const SinglePostCard = ({ post }) => {
  const {
    _id,
    firstName,
    username,
    avatar,
    content,
    createdAt,
    likes,
    comments,
  } = post;
  console.log(post);
  const [loaders, setLoaders] = useState({
    likeLoader: false,
    bookmarkLoader: false,
    deleteLoader: false,
    editLoader: false,
  });
  const [isEditable, setIsEditable] = useState(false);
  const [contentObj, setContentObj] = useState({ content: content });
  const {
    state: { bookmarkedPosts },
    dispatchPosts,
  } = usePosts();
  const {
    state: { user: loggedInUser, token },
  } = useAuth();
  const { likeLoader, bookmarkLoader, deleteLoader, editLoader } = loaders;
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
  const deletePost = () => {
    dispatchPosts(deletePostFromFeed({ postId: _id, token, setLoaders }));
  };
  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };
  const editPost = () => {
    dispatchPosts(editThePost({ _id, contentObj, token, setLoaders }));
    toggleEdit();
  };
  return (
    <div className=" rounded mt-1 flex flex-col w-full shadow-lg py-4 px-5 ">
      <div className="flex items-start justify-between">
        <div className="flex items-center w-full gap-1">
          <Link
            to={`/user/${username}`}
            className="w-14 h-10 bg-cover cursor-pointer"
          >
            <img
              src={avatar}
              alt={firstName}
              referrerPolicy="no-referrer"
              className="rounded-md h-full w-full overflow-hidden shadow"
            />
          </Link>
          <div className="  md:ml-6 w-full">
            <section className="flex items-center w-full">
              <p className="text-xl font-bold leading-4 text-gray-800">
                {firstName}
                <small className=" font-normal text-xs">@{username}</small>
              </p>
              {loggedInUser.username === username && (
                <section className="ml-auto gap-2 mr-2 flex">
                  <div>
                    {deleteLoader ? (
                      <SmallLoader />
                    ) : (
                      <AiFillDelete
                        onClick={deletePost}
                        className="w-[2.5rem] h-[2.5rem] cursor-pointer hover:border-2 hover:rounded-full p-2"
                      />
                    )}
                  </div>

                  <div>
                    {editLoader ? (
                      <SmallLoader />
                    ) : isEditable ? (
                      <MdDownloadDone
                        onClick={editPost}
                        className="w-[2.5rem] h-[2.5rem] cursor-pointer hover:border-2 hover:rounded-full p-2"
                      />
                    ) : (
                      <AiFillEdit
                        onClick={toggleEdit}
                        className="w-[2.5rem] h-[2.5rem] cursor-pointer hover:border-2 hover:rounded-full p-2"
                      />
                    )}
                  </div>
                </section>
              )}
            </section>
            <small>
              <Moment fromNow>{createdAt}</Moment>
            </small>
          </div>
        </div>
      </div>
      {isEditable ? (
        <textarea
          className="resize-none	"
          onChange={(e) => setContentObj({ content: e.target.value })}
          value={contentObj.content}
        />
      ) : (
        <p>{content}</p>
      )}
      <div className="flex items-center justify-between mt-2 p-1">
        <section className="flex gap-1 items-center">
          {likeLoader ? (
            <SmallLoader />
          ) : post.likes.likedBy.find(
              (userCheck) => userCheck.username === loggedInUser.username
            ) ? (
            <AiFillLike
              className="w-[2.5rem] h-[2.5rem] cursor-pointer hover:border-2 hover:rounded-full p-2"
              onClick={disLikePost}
            />
          ) : (
            <AiOutlineLike
              className="w-[2.5rem] h-[2.5rem]  cursor-pointer hover:border-2 hover:rounded-full p-2"
              onClick={likePost}
            />
          )}
          <span className="font-bold">{likes.likeCount}</span>
        </section>
        <section
          className={`flex ${
            comments.length ? "flex-row" : "flex-col"
          } gap-1 items-center`}
        >
          <Link to={`/comment/${_id}`}>
            <BiCommentAdd className="w-[2.5rem] h-[2.5rem] p-2" />
          </Link>
          {!comments.length ? (
            <span className="font-medium text-indigo900">
              Be the first one to comment
            </span>
          ) : (
            <span className="font-bold">{comments.length}</span>
          )}
        </section>
        {bookmarkLoader ? (
          <SmallLoader />
        ) : bookmarkedPosts.find((postCheck) => postCheck._id === _id) ? (
          <BsFillBookmarkCheckFill
            className="w-[2.5rem] h-[2.5rem] cursor-pointer hover:border-2 hover:rounded-full p-2"
            onClick={removeBookmark}
          />
        ) : (
          <BsBookmark
            className="w-[2.5rem] h-[2.5rem] cursor-pointer hover:border-2 hover:rounded-full p-2"
            onClick={addBookmark}
          />
        )}
      </div>
    </div>
  );
};

export { SinglePostCard };
