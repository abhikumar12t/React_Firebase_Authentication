import React from 'react'

import Login from './components/Login'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
         <BrowserRouter>
           <Routes>
          <Route path='/' element={<Login/>}/> 
          <Route path='/register' element={<Register/>}/> 
          <Route path='/home' element={<Home/>}/> 
           </Routes>
           </BrowserRouter>
           <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App