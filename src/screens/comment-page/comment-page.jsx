import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, CommentBox, Input, SinglePostCard } from "../../components";
import { addCommentOnPost } from "../../features";
import { useAuth, usePosts } from "../../hooks";
import "./comment-page.css";
const CommentOnPost = () => {
  const { postId } = useParams();
  const {
    state: { allPosts },
    dispatchPosts,
  } = usePosts();
  const {
    state: { token },
  } = useAuth();
  const openedPost = allPosts?.find((post) => post._id === postId);
  const [comment, setComment] = useState("");
  const commentHandler = (e) => setComment(e.target.value);
  const postComment = () => {
    dispatchPosts(
      addCommentOnPost({
        postId: openedPost._id,
        commentData: { comment },
        token,
      })
    );
    setComment("");
  };
  return (
    <div className="flex flex-col items-center p`b-8 mt-2 md:mt-2 lg:mt-24 w-[100vw] order-2 md:order-2 md:w-[100vw] lg:order-1 lg:w-[70vw] lg:ml-8 lg:mr-auto">
      {openedPost && <SinglePostCard post={openedPost} />}
      <section className="flex gap-1 p-4 mx-1 w-full">
        <Input
          inputType="text"
          inputName="comment"
          inputValue={comment}
          inputFunc={commentHandler}
          inputPlaceHolder="add comment ..."
          inputClass="focus:border-indigo900 shadow-lg focus:border-4 w-full block pl-7 h-10 pr-12 sm:text-sm mt-2 rounded-md"
        />
        <Button
          btnText="Comment"
          disabled={!comment.length}
          btnType="rounded comment-btn cursor-pointer p-1 mt-2 bg-indigo700 text-white hover:bg-indigo600 font-bold shadow-md"
          btnFunc={postComment}
        />
      </section>
      <section className="bg-modeColorText300 flex flex-col gap-2 rounded-md w-full h-full p-2 overflow-y-auto">
        {!openedPost?.comments?.length ? (
          <span className="text-indigo900 font-bold text-center text-2xl translate-y-20">
            No comments as of now. Be the first one to do so.
          </span>
        ) : (
          openedPost?.comments?.map((comment) => (
            <CommentBox
              key={comment._id}
              post={openedPost}
              commentFound={comment}
            />
          ))
        )}
      </section>
    </div>
  );
};

export { CommentOnPost };
