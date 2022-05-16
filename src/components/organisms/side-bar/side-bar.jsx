import React from 'react'
import {AiFillHome,AiFillBell,AiOutlineLogout} from 'react-icons/ai'
import {BsGlobe,BsFillBookmarksFill} from 'react-icons/bs'
import {FaPaperPlane} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'  
import { logout } from '../../../features'
import { useAuth } from '../../../hooks'
const SideBar = ({userImg,name,email,showSideBar}) => {
  const {state:{user:{username}},dispatchAuth}=useAuth();
  const logoutHandler=()=>dispatchAuth(logout());
  return (
    // this throws full width page out on click of hamburger
    <div className={`${showSideBar ? "-translate-x-full" : "translate-x-0"} absolute side-bar bg-transparent transform ease-in-out transition duration-500 flex justify-start items-start w-full flex-col h-screen`}>
    <nav className='flex flex-col shadow-[0_0_8px_0_var(--color-text-700)] gap-8 h-full bg-white w-[20vw]'>

      {[{icon:<AiFillHome/>,element:"Home"},{icon:<BsGlobe/>,element:"Discover"},{icon:<AiFillBell/>,element:"Notification"},{icon:<BsFillBookmarksFill/>,element:"BookMarks"}].map(item=>
          <NavLink to="/" key={item.element} className="cursor-pointer flex gap-2 p-4 text-modeColorText500 items-center hover:text-modeColorText900 hover:underline  text-xl">
            <span>{item.icon}</span>
            <span>{item.element}</span>
          </NavLink>

        )}
      <div className="px-4">
          <hr className="border-indigo-400" />
       </div>

        {/* Post the views by clicking here */}
       <div className="flex text-white justify-center p-3 mx-4 rounded bg-indigo900 hover:bg-indigo700 cursor-pointer sm:w-auto items-center space-x-2">
              <FaPaperPlane/>
              <div className="flex flex-col justify-start space-y-1 items-center ">
                 <p className="text-base leading-4">Post</p>
              </div>
        </div>
     

       {/* Add onClick on the follwing div for logging out*/}

       <div onClick={logoutHandler} className='flex items-center gap-4 p-4 cursor-pointer text-modeColorText500 hover:text-modeColorText900 hover:underline text-xl'>
          <AiOutlineLogout/>
          <span>Logout</span>
       </div>

       {/* Click below to open user profile */}

       <Link to={`/user/${username}`} className="cursor-pointer rounded-md bg-indigohue mx-4 p-4 flex justify-start items-center space-x-2 ">
            <img src={userImg ?? "https://i.ibb.co/54vKnF3/Ellipse-3.png"} alt="avatar" />
            <div className="flex text-modeColorText900 flex-col jusitfy-start items-start space-y-1">
                 <p className="text-base font-bold   ">{name ?? "Eesh"}</p>
                 <p className="text-xs leading-3">{email??"eesh@gmail.com"}</p>
            </div>
      </Link>
    </nav>
    </div>
  )
}

export {SideBar}
