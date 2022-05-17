import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../features";
import { useAuth, useDisplayUser } from "../../hooks";

const SuggestedPeople = () => {
  const {
    state: { allUsers },
    dispatchUser,
  } = useDisplayUser();
  const {
    state: {
      user: { username },
    },
  } = useAuth();
  useEffect(() => {
    dispatchUser(getAllUsers());
  }, []);
  const currUser = allUsers.find((user) => user.username === username);
  return (
    allUsers.length && (
      <div className="flex flex-col gap-2">
        {allUsers
          .filter(
            (userCheck) =>
              userCheck.username !== currUser.username &&
              !currUser.following.find(
                (follow) => follow.username === userCheck.username
              )
          )
          .sort(() => Math.random() - Math.random())
          .slice(0, 2)
          .map((user) => (
            <Link
              to={`/user/${user.username}`}
              key={user._id}
              className="flex gap-4 items-center bg-modeColorText100 p-2 rounded-md"
            >
              <img
                src={user.avatar}
                className="rounded-full h-10 w-10 overflow-hidden shadow"
                alt={user.firstName}
              />
              <h2 className="font-bold">{user.firstName}</h2>
            </Link>
          ))}
      </div>
    )
  );
};

export { SuggestedPeople };
