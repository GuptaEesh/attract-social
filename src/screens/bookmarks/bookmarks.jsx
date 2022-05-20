import React, { useEffect } from 'react';
import { SinglePostCard } from '../../components';
import { getBookMarkedPosts } from '../../features';
import { useAuth, usePosts } from '../../hooks';

const BookMarks = () => {
  const {state:{bookmarkedPosts,allPosts},dispatchPosts}=usePosts();
  const {state:{user,token}}=useAuth();

  useEffect(()=>{
    dispatchPosts(getBookMarkedPosts({token}));
  },[])
  const updatedBookMarks = allPosts.filter((post) =>
		bookmarkedPosts.find(({_id}) => post._id === _id)
	);
  return (
    updatedBookMarks && 
    <div className='flex flex-col mb-8 mt-2'>

    {updatedBookMarks.map(post=><SinglePostCard key={post._id} post={post}/>)}
 
    </div>
  )
}

export {BookMarks};