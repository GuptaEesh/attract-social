import React, { useState } from "react";
import { Editor } from "./editor";
import { FaPaperPlane } from "../../../icons";
import "./editor.css";
import { useAuth, usePosts } from "../../../hooks";
import { putPost } from "../../../features";
const CreatePost = () => {
  const [content, setContent] = useState({ content: "" });
  const { dispatchPosts } = usePosts();
  const {
    state: { token },
  } = useAuth();
  const addPost = () => {
    dispatchPosts(putPost({ content, token }));
    setContent({ content: "" });
  };
  return (
    <div className="flex flex-col shadow-md mb-4">
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
    </div>
  );
};

export { CreatePost };
