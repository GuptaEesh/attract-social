import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks';
import { appRoutes } from '../utils'

const RequireAuth = () => {
    const {state:{token}}=useAuth();
    const location=useLocation();
  return (
    token?<Outlet/>:<Navigate to={appRoutes.auth} state={{from:location}} replace={true}/>
  )
}

export {RequireAuth}
