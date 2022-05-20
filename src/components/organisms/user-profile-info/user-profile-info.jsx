import React, { useState } from "react";
import { followUser, unFollowUser } from "../../../features";
import { useAuth, useDisplayUser } from "../../../hooks";
import { Button, SmallLoader } from "../../atoms";
import { BiLink } from "../../../icons";

const UserProfileInfo = ({ user, posts }) => {
  const {
    _id,
    firstName,
    username,
    avatar,
    bio,
    followers,
    following,
    portfolio,
  } = user;
  const {
    state: { user: loggedInUser, token },
  } = useAuth();
  const { dispatchUser } = useDisplayUser();
  const [followLoader, setFollowLoader] = useState(false);
  const unfollow = () => {
    dispatchUser(unFollowUser({ followUserId: _id, token, setFollowLoader }));
  };
  const follow = () => {
    dispatchUser(followUser({ followUserId: _id, token, setFollowLoader }));
  };
  return (
    <div className="bg-white flex flex-col items-center shadow rounded w-full">
      <img
        className="w-20 h-20 overflow-hidden object-cover rounded"
        src={avatar ?? ""}
        alt={firstName}
      />
      <div className="px-5 pb-10">
        <div className="pt-3 flex flex-col items-center justify-between">
          <div className=" w-full flex flex-col items-center">
            <small className=" text-xs mb-1">@{username}</small>
            <section className="mb-3 flex items-center gap-2 text-2xl text-modeColorText900 font-medium tracking-normal">
              {firstName}
              {loggedInUser.username === user.username ? (
                <Button
                  btnText="Edit Profile"
                  btnType="rounded py-0.5 border-2 border-modeColorText700 text-modeColorText900 px-1 text-sm"
                />
              ) : followLoader ? (
                <div className="w-20 pl-6">
                  <SmallLoader />
                </div>
              ) : followers.find(
                  (checkUser) => checkUser.username === loggedInUser.username
                ) ? (
                <Button
                  btnText="Unfollow"
                  btnFunc={unfollow}
                  btnType="rounded cursor-pointer w-20 px-1 text-sm py-0.5 bg-indigo700 text-white hover:bg-indigo600"
                />
              ) : (
                <Button
                  btnText="Follow"
                  btnFunc={follow}
                  btnType="rounded cursor-pointer w-20 px-1 text-sm py-0.5 bg-indigo700 text-white hover:bg-indigo600"
                />
              )}
            </section>
            {portfolio ? (
              <section className="flex gap-1 items-center">
                <BiLink />
                <a target="_blank" className="underline" href={portfolio}>
                  My Portfolio
                </a>
              </section>
            ) : (
              <h3>Please edit profile to add a portfolio link</h3>
            )}
            <p className="text-center mt-2 text-sm text-modeColorText700  leading-5">
              {bio}
            </p>
          </div>
          <div className=" w-full py-5 flex items-start justify-around gap-12">
            <section>
              <h2 className="text-modeColorText700  font-bold text-xl leading-6 mb-2 text-center">
                {followers.length}
              </h2>
              <Button
                btnType="text-indigo900  hover:text-indigo600 font-bold text-sm leading-5"
                btnText="Followers"
              />
            </section>
            <section>
              <h2 className="text-modeColorText700  font-bold text-xl leading-6 mb-2 text-center">
                {posts.length}
              </h2>
              <Button
                btnType="text-indigo900  hover:text-indigo600 font-bold text-sm leading-5"
                btnText="Total Posts"
              />
            </section>
            <section>
              <h2 className="text-modeColorText700 font-bold text-xl  leading-6 mb-2 text-center">
                {following.length}
              </h2>
              <Button
                btnType="text-modeColorText900 text-sm leading-5"
                btnText="Following"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserProfileInfo };
