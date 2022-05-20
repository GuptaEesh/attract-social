import React from 'react'
import { AiOutlineLike,AiFillLike, BsBookmark } from '../../../icons';
import Moment from 'react-moment'
const SinglePostCard = ({post}) => {
  console.log(post);
  const {firstName,username,avatar,content,createdAt}=post;
    return (
        <div className=" rounded mt-1 flex flex-col w-full shadow-lg py-4 px-5 ">
        <div className="flex items-start justify-between">
          <div className="flex items-center mb-4 lg:mb-0 mr-10">
            <div className="w-10 h-10 bg-cover rounded-md">
              <img
                src={avatar}
                alt={firstName}
                referrerPolicy="no-referrer"
                className="rounded-full h-full w-full overflow-hidden shadow"
              />
            </div>
            <div className="ml-2 md:ml-6">
              <p className="text-xl font-bold leading-4 text-gray-800">
                {firstName} <small className='font-normal text-xs'>@{username}</small>
              </p>
              <small><Moment fromNow>{createdAt}</Moment></small>
            </div>
          </div>
        </div>
       <p>{content}</p>

        <div className="flex items-center justify-between mt-2">
          {post.likes.likedBy.find(userCheck=>userCheck.username===username)?<AiFillLike/>:<AiOutlineLike/>}
          <BsBookmark/>
        </div>
      </div>
  )
}

export {SinglePostCard}
