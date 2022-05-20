import React, { useEffect } from "react";
import { SinglePostCard } from "../../components";
import { getBookMarkedPosts } from "../../features";
import { useAuth, usePosts } from "../../hooks";

const BookMarks = () => {
  const {
    state: { bookmarkedPosts, allPosts },
    dispatchPosts,
  } = usePosts();
  const {
    state: { user, token },
  } = useAuth();

  useEffect(() => {
    dispatchPosts(getBookMarkedPosts({ token }));
  }, []);
  const updatedBookMarks = allPosts.filter((post) =>
    bookmarkedPosts.find(({ _id }) => post._id === _id)
  );
  return (
    updatedBookMarks && (
      <div className="flex flex-col mb-8 mt-2 md:mt-2 lg:mt-24 w-[100vw] order-2 md:order-2 md:w-[100vw] lg:order-1 lg:w-[50vw]">
        {updatedBookMarks.map((post) => (
          <SinglePostCard key={post._id} post={post} />
        ))}
      </div>
    )
  );
};

export { BookMarks };
