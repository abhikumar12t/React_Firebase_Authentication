import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";



const Google = () => {
  const navigate = useNavigate()


  const provider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google User:", result.user);
      navigate('/home')
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div onClick={loginWithGoogle}>
        <div className="loginGoogle">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png"
            alt=""
          />
          <span>Login with Goolge</span>
        </div>
      </div>
    </>
  );
};

export default Google;
