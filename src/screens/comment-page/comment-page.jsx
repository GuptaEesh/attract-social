import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, CommentBox, Input, SinglePostCard } from "../../components";
import { addCommentOnPost } from "../../features";
import { useAuth, usePosts } from "../../hooks";

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
    <div className="flex flex-col items-center pb-8 mt-2 md:mt-2 lg:mt-24 w-[100vw] order-2 md:order-2 md:w-[100vw] lg:order-1 lg:w-[70vw] lg:ml-8 lg:mr-auto">
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
          btnType="rounded cursor-pointer p-1 mt-2 bg-indigo700 text-white hover:bg-indigo600 font-bold shadow-md"
          btnFunc={postComment}
        />
      </section>
      {openedPost?.comments?.map((comment) => (
        <CommentBox
          key={comment._id}
          post={openedPost}
          commentFound={comment}
        />
      ))}
    </div>
  );
};

export { CommentOnPost };
