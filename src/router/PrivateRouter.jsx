import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PrivateRouter = () => {
  const{user}=useContext(AuthContext)
  console.log(user)
  console.log("dsdsd");
  return (
        user.login ? <Outlet/> : <Navigate to="/login"/> 
  )
}

export default PrivateRouter