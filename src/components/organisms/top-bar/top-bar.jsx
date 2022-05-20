import React,{ useState } from 'react'
import { Toggler } from '../../molecules';
import { SideBar } from '../side-bar/side-bar';

const TopBar = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const toggleSideBar=()=>setShowSideBar(!showSideBar);
  return (
  <div className='relative'>
    <div className=" bg-indigo700 rounded-r shadow flex justify-start w-full p-6 items-center border-b sm:border-modeColorText500 ">
        <Toggler toggleSideBar={toggleSideBar} showSideBar={showSideBar} />
    </div>
    <SideBar showSideBar={showSideBar} />
  </div>
  )
}

export {TopBar}
