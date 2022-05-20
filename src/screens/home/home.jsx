import React, { useEffect } from "react";
import { SinglePostCard, CreatePost } from "../../components";
import { getPosts } from "../../features";
import { useAuth, usePosts } from "../../hooks";
import {
  filterPostsOnDate,
  getFiltered,
  trendingPosts,
} from "./filter-functions";

const Home = () => {
  const {
    state: { allPosts, sortByDate, trending },
    dispatchPosts,
  } = usePosts();
  useEffect(() => {
    dispatchPosts(getPosts());
  }, []);
  const filters = { sortByDate, trending };
  let filteredPosts = getFiltered(filterPostsOnDate, trendingPosts)(
    filters,
    allPosts
  );
  return (
    filteredPosts && (
      <div className="flex flex-col pb-8 mt-2 md:mt-2 lg:mt-24 w-[100vw] order-2 md:order-2 md:w-[100vw] lg:order-1 lg:w-[70vw] lg:ml-8 lg:mr-auto">
        <CreatePost />
        <div className="flex flex-col pb-8">
          {filteredPosts.map((post) => (
            <SinglePostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    )
  );
};

export { Home };
