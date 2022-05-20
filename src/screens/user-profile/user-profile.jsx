import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {  SinglePostCard, UserProfileInfo } from '../../components'
import { getUser, getUserPosts } from '../../features';
import { useDisplayUser } from '../../hooks';

const UserProfile = () => {
  const {username}=useParams();
  const {state:{displayUser,displayUserPosts:posts},dispatchUser}=useDisplayUser();
  useEffect(()=>{
    dispatchUser(getUser({username}))
    dispatchUser(getUserPosts({username}))
  },[username])
  return (
    displayUser && <div className='flex flex-col items-center w-[50vw]'>
        <UserProfileInfo user={displayUser} posts={posts}/>
        <section className='flex flex-col'>
         {/* to be replaced by Link or Button Tags in future*/}
         <div className='flex-flex-col w-[50vw]'>  
           {posts.map(post=><SinglePostCard key={displayUser._id} post={post}/>)}
        </div>

        </section>
</div>
  )
}

export {UserProfile}
