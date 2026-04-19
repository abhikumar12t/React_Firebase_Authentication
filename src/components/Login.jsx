import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import Google from './Google';
import { toast } from "react-toastify";






const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const navigate = useNavigate()

      const loginHandler = async (e) => {   // ✅ async
    e.preventDefault(); 

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
       toast.success('Login Successfully..')
      setEmail('')
      setPassword('')
      navigate('/home')
    } catch (error) {
      toast.error('Invalid email and password');
    }
  }


  return (
    <div className="main">
      <div className="container-box">
        
        <h1 className='title'>Login User</h1>

       
        <form onSubmit={loginHandler}>
          
          <div className='inputs'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder="Enter your email" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)} 
             />
          </div>

          <div className='inputs'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder="Enter your password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)} 
             />
          </div>

           {/* Right side link */}
        <div className="top-link">
          <Link to='/register' >Register new user</Link>
        </div>


          <button type="submit" className="btn btn-primary login-btn">
            Login
          </button>


        


           <Google/>

        </form>

      </div>
    </div>
  )
}

export default Login