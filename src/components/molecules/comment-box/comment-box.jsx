import React, { useState } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { AiFillDelete } from "../../../icons";
import { useAuth, usePosts } from "../../../hooks";
import { SmallLoader } from "../../atoms";
import { deleteSpecificComment } from "../../../features";
const CommentBox = ({ post, commentFound }) => {
  const { _id, firstName, username, avatar, createdAt, comment } = commentFound;
  const {
    state: { user, token },
  } = useAuth();
  const [loaders, setLoaders] = useState({ deleteLoader: false });
  const { deleteLoader } = loaders;
  const { dispatchPosts } = usePosts();
  const deleteComment = () => {
    dispatchPosts(
      deleteSpecificComment({
        postId: post._id,
        commentId: _id,
        token,
        setLoaders,
      })
    );
  };
  return (
    <div className="rounded mt-1 flex flex-col w-full shadow-lg py-4 px-5 ">
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
              {user.username === username && (
                <section className="ml-auto gap-2 mr-2 flex">
                  <div>
                    {deleteLoader ? (
                      <SmallLoader />
                    ) : (
                      <AiFillDelete
                        onClick={deleteComment}
                        className="w-[1.5rem] h-[1.5rem] cursor-pointer active:ring-offset-1 rounded-full active:ring-2 active:ring-modeColorText700"
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
      <p>{comment}</p>
    </div>
  );
};

export { CommentBox };
