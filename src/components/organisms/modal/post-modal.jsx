import React, { useState } from "react";
import { Editor } from "../create-post/editor";
import { FaPaperPlane, MdCancel } from "../../../icons";
import { useAuth, usePosts } from "../../../hooks";
import { putPost } from "../../../features";
const PostModal = ({ togglePostModal }) => {
  const [content, setContent] = useState({ content: "" });
  const { dispatchPosts } = usePosts();
  const {
    state: { token },
  } = useAuth();
  const addPost = () => {
    dispatchPosts(putPost({ content, token }));
    setContent({ content: "" });
    togglePostModal();
  };
  return (
    <article className="h-screen w-screen backdrop-blur-sm flex flex-col items-center justify-center">
      <div className="flex flex-col border-2 rounded-md w-10/12">
        <Editor text={content.content} setContent={setContent} />
        <button
          disabled={!content.content.length}
          onClick={addPost}
          className="post-button flex text-white justify-center p-3 mb-2 self-center rounded bg-indigo900 hover:bg-indigo700 cursor-pointer sm:w-auto items-center space-x-2"
        >
          <FaPaperPlane />
          <div className="flex flex-col justify-start space-y-1 items-center ">
            <p className="text-base leading-4">Post</p>
          </div>
        </button>
        <MdCancel
          onClick={togglePostModal}
          className="text-3xl ml-auto cursor-pointer m-1"
        />
      </div>
    </article>
  );
};

export { PostModal };
