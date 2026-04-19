import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
   import { auth } from "./firebase";
   import { toast } from "react-toastify";
   

const Register = () => {
  const navigate = useNavigate()
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


const registerUser = async (e) => {
     e.preventDefault(); 

  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
   toast.success('Registered Successfully');
      setEmail('')
      setPassword('')
      navigate('/')

  } catch (error) {
    toast.error(error.message);
  }
};
  
  

  return (
    <div>

      <div className="main">
      <div className="container-box">
        
        <h1 className='title'>Register New User</h1>

       
        <form onSubmit={registerUser}>
          
          <div className='inputs'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder="Enter your email" 
             onChange={(e)=> setEmail(e.target.value)} 
            />
          </div>

          <div className='inputs'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder="Enter your password" 
                  onChange={(e)=> setPassword(e.target.value)} 
             />
          </div>

        


          <button type="submit" className="btn btn-primary login-btn">
            Register
          </button>

        </form>

      </div>
    </div>
    </div>
  )
}

export default Register