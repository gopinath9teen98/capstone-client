import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import signup from "../images/signin.png";

function Registration() {
  const history = useHistory();

  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (event) => {
    const userCopy = { ...user };
    userCopy[event.target.name] = event.target.value;
    setuser(userCopy);
  };
  const PostData = async (event) => {
    event.preventDefault();
    const { name, email, password, role } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, role }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      alert("invalid registration");
    } else {
      alert(" registration succesfull");
      history.push("/home");
    }
  };

  return (
    <div>
      <section className="signup">
        <div className="container1 mt-5">
          <div className="signup-content">
            <div className="signup-form regcontent" >
              <h2 className="form-title">New User Registration</h2>
              <form
                method="POST"
                name="form"
                className="register-form"
                id="register-form"
              >
                <div className="form-group">
                  <label htmlFor="name">
                  </label>
                  <input
                    onChange={handleChange}
                    value={user.name}
                    name="name"
                    type="text"
                    placeholder="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                  </label>
                  <input
                    onChange={handleChange}
                    value={user.email}
                    name="email"
                    type="text"
                    placeholder="email"
                    required
                  />{" "}
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                  </label>
                  <input
                    onChange={handleChange}
                    value={user.password}
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                  />{" "}
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <select onChange={handleChange} value={user.role} name="role" required>
                    <option>Role</option>
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                </div>
                <div className="form-group form-button">
                  <input type="submit" onClick={PostData} />
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;
