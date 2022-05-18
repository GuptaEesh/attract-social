import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SinglePostCard, UserProfileInfo } from "../../components";
import { getPosts, getUser, resetUserProfile } from "../../features";
import { useDisplayUser, usePosts } from "../../hooks";

const UserProfile = () => {
  const { username } = useParams();
  const {
    state: { displayUser },
    dispatchUser,
  } = useDisplayUser();
  const {
    state: { allPosts },
    dispatchPosts,
  } = usePosts();
  useEffect(() => {
    dispatchUser(getUser({ username }));

    return () => {
      dispatchUser(resetUserProfile());
    };
  }, [username]);
  useEffect(() => {
    dispatchPosts(getPosts());
  }, [username]);
  let specificUserPosts = [];
  if (allPosts)
    specificUserPosts = [...allPosts].filter(
      (post) => post?.username === displayUser?.username
    );
  return (
    displayUser && (
      <div className="flex flex-col items-center mb-8 mt-2 md:mt-2 lg:mt-24 w-[100vw] order-2 md:order-2 md:w-[100vw] lg:order-1 lg:w-[50vw]">
        <UserProfileInfo user={displayUser} posts={specificUserPosts} />
        <div className="flex-flex-col w-full">
          {specificUserPosts?.map((post) => (
            <SinglePostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    )
  );
};

export { UserProfile };
