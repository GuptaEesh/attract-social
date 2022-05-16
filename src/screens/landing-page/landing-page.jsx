import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks'
import { appRoutes } from '../../utils'
import './landing-page.css'
const LandingPage = () => {
  const {state:{token}}=useAuth();
  return (
    <div className='landing-page h-screen w-screen'>
      <div className='overlay h-screen text-white w-screen flex flex-col items-center justify-center gap-4' >
        <h1 className='text-3xl font-bold'>Hold onto your <span className='text-4xl'>nerves.</span></h1>
        <p className='text-3xl font-bold mb-2' >This will be a <span className='text-4xl'>nerve cracking </span>journey.</p>
        <Link
            className="font-bold rounded-md text-2xl p-4 bg-indigo700 hover:bg-indigo600 text-white"
            to={token? appRoutes.home : appRoutes.auth}
        >Let's go</Link>
      </div>
    </div>
  )
}

export {LandingPage}
