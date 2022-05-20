import React from 'react'
import "./editor.css"
const Editor = ({setContent}) => {
    const editHandler=(e)=>
    {
      setContent(prev=>({...prev,content:e.target.value}))
    }
  return (
    <textarea
    className='h-[20vh] mb-2 border-0 p-2' 
          placeholder="description..."
          onChange={editHandler}
        />
  )
}

export {Editor}
