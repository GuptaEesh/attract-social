import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SinglePostCard } from "../../components";
import { getBookMarkedPosts } from "../../features";
import { useAuth, usePosts } from "../../hooks";
import { appRoutes } from "../../utils";

const BookMarks = () => {
  const {
    state: { bookmarkedPosts, allPosts },
    dispatchPosts,
  } = usePosts();
  const {
    state: { token },
  } = useAuth();

  useEffect(() => {
    dispatchPosts(getBookMarkedPosts({ token }));
  }, []);
  const updatedBookMarks = allPosts.filter((post) =>
    bookmarkedPosts.find(({ _id }) => post._id === _id)
  );
  return (
    <div className="flex flex-col pb-8 mt-2 md:mt-2 lg:mt-24 w-[100vw] order-2 md:order-2 md:w-[100vw] lg:order-1 lg:w-[70vw] lg:ml-8 lg:mr-auto">
      {!updatedBookMarks.length ? (
        <article className="flex flex-col items-center gap-1 translate-y-10">
          <h1 className="text-2xl text-indigo900">No bookmarked posts</h1>
          <Link
            className="rounded cursor-pointer px-2 py-1 bg-indigo700 text-white hover:bg-indigo600 font-bold"
            to={appRoutes.home}
          >
            Bookmark some?
          </Link>
        </article>
      ) : (
        updatedBookMarks?.map((post) => (
          <SinglePostCard key={post._id} post={post} />
        ))
      )}
    </div>
  );
};

export { BookMarks };
