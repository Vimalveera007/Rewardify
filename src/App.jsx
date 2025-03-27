import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Loginpage from './components/loginPage/Loginpage'
import Dashboard from './components/dashboard/Dashboard'
import Orders from './components/orders/Orders'
import Product from './components/product/Product'
import Profile from './components/dashboard/profile/Profile'
function App() {
 

  return (
    <>
     
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
   
    
    </>
  )
}

export default App
