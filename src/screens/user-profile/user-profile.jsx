import React from 'react'
import { useParams } from 'react-router-dom'
import {  UserProfileInfo } from '../../components'

const UserProfile = ({userImg,name,userBio}) => {
  const {username}=useParams();
  console.log(username);
  return (
    <div className='flex flex-col items-center w-[50vw]'>
        <UserProfileInfo userImg={userImg} name={name} userBio={userBio} />
        <section className='flex items-center gap-4'>
         {/* to be replaced by Link or Button Tags in future*/}
         <span>Tweets</span>
         <span>Bookmarks</span>
        </section>
</div>
  )
}

export {UserProfile}
