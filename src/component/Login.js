import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";
// import loginpic from "../images/login.jpg";

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Provider, useDispatch } from "react-redux";
import { userAction } from "../redux/actions/userAction";

function Login(event) {
  let  isValid;
  let isValidPass;
  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  console.log(email, password);

//////////
const [isEmailValid, setisEmailValid] = useState(false);
 const [emailError, setemailError] = useState("");

  const [isPasswordValid, setisPasswordValid] = useState(false);
  const [passwordError, setpasswordError] = useState("");
////////


  const history = useHistory()
  const dispatch = useDispatch()


  const loginCall = async ()=>{
    console.log("login call==============")
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (res.status === 200) {
      console.log("loginnnnn",res,data)
      localStorage.setItem("role", data.role.toLowerCase());
      alert("Login successful");
      dispatch(userAction(true))
      history.push("/details", { replace: true });
    } else {
      alert("Invalid credentials");
    }
  }

  const loginUser = async (e) => {
    e.preventDefault();

     console.log(email);
     console.log(password);
     isValid = validateEmail(email);
     isValidPass = validatePassword(password);
    
     if (isValid && isValidPass) {
        loginCall()
        history.push('/home')
  } else {
      console.error('not valid');
  }
  
   

  };
  const validateEmail = (email) => {
    const mailexp =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;

    if (mailexp.test(email)) {
      setisEmailValid(true);
      setemailError("");
      return true;
    } else {
      setisEmailValid(false);
      setemailError("enter valid email");
      return false;
    }
  };

  const validatePassword = (password) => {


    const passwordExp = /(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,}/;
    if (password.length>3) {
      setisPasswordValid(true);
      setpasswordError("");
      return true;
    } else {
      setisPasswordValid(false);
      setpasswordError(" enter valid password");
      return false;
    }
  };

  return (
     <div>
      <section className="sign-in">
        <div className="container1 mt-5">
          <div className="signin-content">
           

            <div className="signin-form content">
              <h2 className="form-title" >Login here</h2>

              <form 
                method="POST"
                className="register-form"
                id="register-form"
                onSubmit={loginUser}
                >
                <div className="mb-3  form-group">
                  <label htmlFor="email">
                    
                  </label>
                  <input
                    onChange={(event) => {
                      setemail(event.target.value);
                    }}
                    title="email"
                    value={email}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    
                  />
                  {!isEmailValid ? (
                    <span
                      style={{ color: "red", display: "block", fontSize: "15px" }}
                    >
                      {emailError}
                    </span>
                  ) : null}



                </div>
                <div className="mb-3 form-group">
                  <label htmlFor="password">
                  
                  </label>
                  <input
                    onChange={(event) => {
                      setpassword(event.target.value);
                    }}
                    title="email1"
                    value={password}
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    id="password"
                  />

                  {!isPasswordValid ? (
                    <span
                      style={{ color: "red", display: "block", fontSize: "15px" }}
                    >
                      {passwordError}
                    </span>
                  ) : null}


                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                    title="loginBtn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Login;