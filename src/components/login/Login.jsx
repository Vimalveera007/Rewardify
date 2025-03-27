import React from 'react'
import loginbg from "../../assets/loginbg.png";
import logo from "../../assets/loginlogo.png";
import dot from "../../assets/Group 3.png";
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-bg'>
       <div className='login'>
        <div className='d-flex align-items-center '>
        <img src={logo} alt="" className='py-3'/>
        </div>
            <h2 style={{color:"#030401"}}>Grow your Business <br /> Exponentially!</h2>
            <p style={{color:"#868C9A"}}>Pay less on each transaction you <br /> make with our App.</p>
            <img src={dot} alt="" />
            <div className='pt-5'>
                <Link to={"/loginpage"}><button className='login-btn'>Login</button></Link>
                <button className='contact-btn mt-3'>Contact</button>
            </div>
            <p style={{color:"#979797"}} className='pt-2'>By clicking, you agree to our  <span className='fw-semibold' style={{color:"black"}}>Terms & <br /> Conditions <span style={{color:"#979797"}}>and</span>  Privacy Policy.</span> </p>
       </div>
    </div>
  )
}

export default Login