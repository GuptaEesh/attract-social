import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {  SinglePostCard, UserProfileInfo } from '../../components'
import { getUser, getUserPosts } from '../../features';
import { useDisplayUser, usePosts } from '../../hooks';

const UserProfile = () => {
  const {username}=useParams();
  const {state:{displayUser,displayUserPosts:posts},dispatchUser}=useDisplayUser();
  const {state:{allPosts}}=usePosts();
  useEffect(()=>{
    dispatchUser(getUser({username}))
    dispatchUser(getUserPosts({username}))
  },[allPosts])
  return (
    displayUser && <div className='flex flex-col items-center mb-8 mt-2'>
        <UserProfileInfo user={displayUser} posts={posts}/>
         {/* to be replaced by Link or Button Tags in future*/}
         <div className='flex-flex-col w-full'>  
           {posts.map(post=><SinglePostCard key={post._id} post={post}/>)}
        </div>

       
</div>
  )
}

export {UserProfile}
