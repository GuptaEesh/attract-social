import React from 'react'
import { Button } from '../../atoms'
const UserProfileInfo = ({user,posts}) => {
    const {firstName,username,avatar,bio,followers,following}=user;
  return (
  <div className="bg-white flex flex-col items-center shadow rounded w-full">
      <img className="w-20 h-20 overflow-hidden object-cover rounded" src={avatar ?? ""} alt={firstName} />
        <div className="px-5 pb-10">
            <div className="pt-3 flex flex-col items-center justify-between">
                <div className=" w-full flex flex-col items-center">
                   <small className=' text-xs mb-1'>@{username}</small>
                   <section className="mb-3 flex items-center gap-2 text-2xl text-modeColorText900 font-medium tracking-normal">{firstName} 
                   <Button btnText="Edit Profile" btnType="rounded py-0.5 border-2 border-modeColorText700 text-modeColorText900 px-1 text-sm" />
                   </section>

                    <p className="text-center mt-2 text-sm text-modeColorText700  leading-5">
                        
                        {bio }</p>
                </div>
                <div className=" w-full py-5 flex items-start justify-around ">
                    <section>
                        <h2 className="text-modeColorText700  font-bold text-xl leading-6 mb-2 text-center">{followers.length}</h2>
                        <Button btnType="text-indigo900  hover:text-indigo600 font-bold text-sm leading-5" btnText="Followers" />
                    </section>
                    <section>
                        <h2 className="text-modeColorText700  font-bold text-xl leading-6 mb-2 text-center">{posts.length}</h2>
                        <Button btnType="text-indigo900  hover:text-indigo600 font-bold text-sm leading-5" btnText="Total Posts" />
                 
                    </section>
                    <section>
                        <h2 className="text-modeColorText700 font-bold text-xl  leading-6 mb-2 text-center">{following.length}</h2>
                        <Button btnType="text-modeColorText900 text-sm leading-5" btnText="Following" />
                    </section>
                </div>
                
            </div>
        </div>
    </div>
    
  )
}

export {UserProfileInfo}
