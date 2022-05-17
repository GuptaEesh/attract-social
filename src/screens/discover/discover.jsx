import React, { useEffect } from "react";
import { SinglePostCard } from "../../components";
import { getPosts } from "../../features";
import { usePosts } from "../../hooks";

const Discover = () => {
  const {
    state: { allPosts },
    dispatchPosts,
  } = usePosts();
  useEffect(() => {
    dispatchPosts(getPosts());
  }, []);

  let discoveredPosts = [...allPosts].sort(
    (post1, post2) => new Date(post2.createdAt) - new Date(post1.createdAt)
  );
  return (
    discoveredPosts && (
      <div className="flex flex-col mb-8 mt-2 md:mt-2 lg:mt-24 w-[100vw] order-2 md:order-2 md:w-[100vw] lg:order-1 lg:w-[80vw]">
        {discoveredPosts.map((post) => (
          <SinglePostCard key={post._id} post={post} />
        ))}
      </div>
    )
  );
};

export { Discover };
