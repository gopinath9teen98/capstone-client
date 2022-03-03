import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userAction } from "../redux/actions/userAction";
// import { ErrorMessage, Formik,Form } from "formik";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  console.log(email, password);
  const history = useHistory()
  const dispatch = useDispatch()

//   const initialValue = {
//     email: '',
//     password: ''
// }
// const validate = Yup.object({
//   email: Yup.string().email('enter valid email').required('please enter email'),
//   password: Yup.string().matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/).required('please enter password'),
// })
// const onSubmit = (val) =>{
//   console.log('hghb',val);
// }


  const loginUser = async (e) => {
    e.preventDefault();

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
  };

  return (
    <div >
      <section className="sign-in">
        <div className="container1 mt-5">
          <div className="signin-content">
             <div className="signin-form content">
              <h2 className="form-title">Login here..</h2>
              
              <form method="POST" className="register-form" id="register-form" onSubmit={loginUser}>
                <div className="mb-3  form-group">
                  <label htmlFor="email">
                    
                  </label>
                  <input
                    onChange={(event) => {
                      setemail(event.target.value);
                    }}
                    value={email}
                    type="email"
                    id="email"
                    name='email'
                    placeholder="Enter Email"
                    required
                  />
                  {/* <span className='error'><ErrorMessage name='email'>{values=>values}</ErrorMessage></span><br /> */}
                </div>
                <div className="mb-3 form-group">
                  <label htmlFor="password">
                    
                  </label>
                  <input
                    onChange={(event) => {
                      setpassword(event.target.value);
                    }}
                    value={password}
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                    name='password'
                    required
                  />
                  
                  {/* <span className='error'><ErrorMessage name='email'>{values=>values}</ErrorMessage></span><br /> */}
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                    onClick={loginUser}
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