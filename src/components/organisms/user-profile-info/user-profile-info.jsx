import React from 'react'
import { Button } from '../../atoms'
const UserProfileInfo = ({userImg,name,userBio}) => {
  return (
  <div className="bg-white flex flex-col items-center shadow rounded w-[60%]">
      <img className="w-20 h-20 overflow-hidden object-cover rounded" src={userImg ?? "https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"} alt={name ?? "Test"} />
        <div className="px-5 pb-10">
            <div className="pt-3 flex flex-col items-center justify-between">
                <div className=" w-full flex flex-col items-center">
                   <h2 className="mb-3 flex items-center gap-2 text-2xl text-modeColorText900 font-medium tracking-normal">{name ?? "Marshall Mathers"} <Button btnText="Edit Profile" btnType="rounded py-0.5 border-2 border-modeColorText700 text-modeColorText900 px-1 text-sm" /></h2>
                    <p className="text-center mt-2 text-sm text-modeColorText700  leading-5">
                        
                        {userBio ?? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo in qui labore tempora, omnis ducimus suscipit quas saepe ab repudiandae eaque, autem ratione odio deleniti aperiam! Blanditiis aliquid natus fugit."}</p>
                </div>
                <div className=" w-full py-5 flex items-start justify-around ">
                    <section>
                        <h2 className="text-modeColorText700  font-bold text-xl leading-6 mb-2 text-center">92</h2>
                        <Button btnType="text-indigo900  hover:text-indigo600 font-bold text-sm leading-5" btnText="Followers" />
                    </section>
                    <section>
                        <h2 className="text-modeColorText700  font-bold text-xl leading-6 mb-2 text-center">7</h2>
                        <Button btnType="text-indigo900  hover:text-indigo600 font-bold text-sm leading-5" btnText="Total Posts" />
                 
                    </section>
                    <section>
                        <h2 className="text-modeColorText700 font-bold text-xl  leading-6 mb-2 text-center">222</h2>
                        <Button btnType="text-modeColorText900 text-sm leading-5" btnText="Following" />
                    </section>
                </div>
                <section className='flex gap-1 items-center '>
                {["Remote","Enthusiast"].map( tag =>
                <div key={tag} className="rounded-full font-bold odd:bg-indigo900 even:bg-modeColorText300 text-white text-sm px-3 py-2 flex justify-center items-center">{tag}</div>)}
                </section>
            </div>
        </div>
    </div>
    
  )
}

export {UserProfileInfo}
