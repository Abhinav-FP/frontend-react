import React from "react";
import password_icon from '../../assets/img/password.png';
import email_icon from '../../assets/img/email.png';
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <div className="container-f">
      <div className="header-f">
        <div className="text-f">Sign in </div>
        <div className="underline-f"></div>
      </div>
      <form >
      <div className="row">
          <div className="col-md-6 mt-4 ps-4" >
            <lable>Email</lable>
            <div className="wrapper position-relative" >
              <img className="input-icon position-absolute " src={email_icon} alt="" />
              <input className="form-control ps-5" type="text" placeholder="Email-id" required />
            </div>            
          </div>
          <div className="col-md-6 mt-4 pe-4" >
            <lable>Password</lable>
            <div className="wrapper position-relative" >
              <img className="input-icon position-absolute " src={password_icon} alt="" />
              <input className="form-control ps-5" type="text" placeholder="Password"  required />
            </div>            
          </div>
          </div>
      <div className='forgot-password'>
      Not a user 
        <Link to="/Register" className="ms-2 link">
          <span>Sign up</span>
        </Link>
      </div>
      <div className="submit-container-f">
          <button className="submit-f" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
    </>
  );
}
