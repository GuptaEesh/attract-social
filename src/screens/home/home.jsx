import React, { useEffect } from 'react'
import { SinglePostCard,CreatePost } from '../../components';
import { getPosts } from '../../features';
import { usePosts } from '../../hooks'

const Home = () => {
  const {state:{allPosts},dispatchPosts}=usePosts();
  useEffect(()=>{
    dispatchPosts(getPosts());
  },[])
  return (
    allPosts && 
    <div className='flex flex-col mb-8 mt-2'>
    <CreatePost/>  
    <div className='flex-flex-col'>  
    {allPosts.map(post=><SinglePostCard key={post._id} post={post}/>)}
    </div>
    </div>
  )
}

export {Home}
