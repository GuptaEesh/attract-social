import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, SinglePostCard, UserProfileInfo } from "../../components";
import { getPosts, getUser, resetUserProfile } from "../../features";
import { useAuth, useDisplayUser, usePosts } from "../../hooks";

const UserProfile = ({ togglePostModal }) => {
  const { username } = useParams();
  const {
    state: { user: loggedInUser },
  } = useAuth();
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
      <div className="flex flex-col items-center pb-8 mt-2 md:mt-2 lg:mt-24 w-[100vw] order-2 md:order-2 md:w-[100vw] lg:order-1 lg:w-[70vw] lg:ml-8 lg:mr-auto">
        <UserProfileInfo user={displayUser} posts={specificUserPosts} />
        <div className="flex-flex-col w-full">
          {specificUserPosts.length ? (
            specificUserPosts?.map((post) => (
              <SinglePostCard key={post._id} post={post} />
            ))
          ) : loggedInUser.username === displayUser.username ? (
            <article className="flex items-center flex-col gap-3 mt-4">
              <h1>Post something to populate in your profile</h1>
              <Button
                btnText="Post something"
                btnFunc={togglePostModal}
                btnType="rounded cursor-pointer p-1 bg-indigo700 text-white hover:bg-indigo600 font-bold"
              />
            </article>
          ) : (
            <h1 className="font-bold text-center mt-4 text-2xl">
              {displayUser.firstName} has no posts yet.
            </h1>
          )}
        </div>
      </div>
    )
  );
};

export { UserProfile };
