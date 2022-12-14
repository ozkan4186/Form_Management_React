import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Teams from '../pages/Teams'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/teams" element={<Teams />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter