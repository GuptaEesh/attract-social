import React, { useEffect, useRef } from "react";
import {
  AiFillHome,
  FaPaperPlane,
  AiFillBell,
  AiOutlineLogout,
  BsGlobe,
  BsFillBookmarksFill,
} from "../../../icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../../features";
import { useAuth } from "../../../hooks";
import { appRoutes } from "../../../utils";
const SideBar = ({ showSideBar, toggleSideBar, togglePostModal }) => {
  const navigate = useNavigate();
  const outsideRef = useRef();
  const navRef = useRef();
  useEffect(() => {
    const closeSideNavHandler = (e) => {
      if (!navRef.current?.contains(e.target)) toggleSideBar();
    };
    outsideRef.current?.addEventListener("mousedown", closeSideNavHandler);
  }, [toggleSideBar]);
  useEffect(() => {
    showSideBar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [showSideBar]);
  const {
    state: {
      user: { username, firstName, avatar, email },
    },
    dispatchAuth,
  } = useAuth();
  const logoutHandler = () => {
    dispatchAuth(logout());
    navigate(appRoutes.welcome);
    toggleSideBar();
  };
  const createPostHandler = () => {
    togglePostModal();
    toggleSideBar();
  };
  const navOptions = [
    { icon: <AiFillHome />, element: "Home", link: appRoutes.home },
    { icon: <BsGlobe />, element: "Discover", link: appRoutes.discover },
    { icon: <AiFillBell />, element: "Notification", link: appRoutes.home },
    {
      icon: <BsFillBookmarksFill />,
      element: "BookMarks",
      link: appRoutes.bookmarks,
    },
  ];
  return (
    // this throws full width page out on click of hamburger
    <div
      ref={outsideRef}
      className={`${
        !showSideBar ? "-translate-x-full" : "translate-x-0"
      } absolute side-bar backdrop-blur-sm transform ease-in-out transition duration-100 flex justify-start z-10 items-start w-full flex-col h-screen`}
    >
      <nav
        ref={navRef}
        className="flex flex-col shadow-[0_0_8px_0_var(--color-text-700)] gap-8 h-full bg-white w-[20rem]"
      >
        {navOptions.map((item) => (
          <NavLink
            onClick={toggleSideBar}
            to={item.link}
            key={item.element}
            className="cursor-pointer flex gap-2 p-4 text-modeColorText500 items-center hover:text-modeColorText900 hover:underline  text-xl"
          >
            <span>{item.icon}</span>
            <span>{item.element}</span>
          </NavLink>
        ))}
        <div className="px-4">
          <hr className="border-indigo-400" />
        </div>

        {/* Post the views by clicking here */}
        <div
          onClick={createPostHandler}
          className="flex text-white justify-center p-3 mx-4 rounded bg-indigo900 hover:bg-indigo700 cursor-pointer sm:w-auto items-center space-x-2"
        >
          <FaPaperPlane />
          <div className="flex flex-col justify-start space-y-1 items-center ">
            <p className="text-base leading-4">Post</p>
          </div>
        </div>

        {/* Add onClick on the follwing div for logging out*/}

        <div
          onClick={logoutHandler}
          className="flex items-center gap-4 p-4 cursor-pointer text-modeColorText500 hover:text-modeColorText900 hover:underline text-xl"
        >
          <AiOutlineLogout />
          <span>Logout</span>
        </div>

        {/* Click below to open user profile */}

        <Link
          onClick={toggleSideBar}
          to={`/user/${username}`}
          className="cursor-pointer rounded-md bg-indigohue mx-4 p-4 flex justify-start items-center space-x-2 "
        >
          <img
            className="rounded-full h-10 w-10 overflow-hidden shadow"
            src={avatar ?? "https://i.ibb.co/54vKnF3/Ellipse-3.png"}
            alt="avatar"
          />
          <div className="flex text-modeColorText900 flex-col jusitfy-start items-start space-y-1">
            <p className="text-base font-bold ">{firstName ?? "Eesh"}</p>
            <p className="text-xs leading-3">{email ?? "eesh@gmail.com"}</p>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export { SideBar };
