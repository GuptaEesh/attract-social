import React from 'react'
import { Button } from '../../components'
import './landing-page.css'
const LandingPage = () => {
  return (
    <div className='landing-page h-screen w-screen'>
      <div className='overlay h-screen text-white w-screen flex flex-col items-center justify-center gap-4' >
        <h1 className='text-3xl font-bold'>Hold onto your <span className='text-4xl'>nerves.</span></h1>
        <p className='text-3xl font-bold mb-2' >This will be a <span className='text-4xl'>nerve cracking </span>journey.</p>
        <Button
            btnType="font-bold rounded-md text-2xl p-4 bg-indigo700 hover:bg-indigo600 text-white"
            btnText="Let's go"
        />
      </div>
    </div>
  )
}

export {LandingPage}
