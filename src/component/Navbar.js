/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";

const adminNav = [
  { name: "Home", path: "/home" },
  { name: "Users", path: "/details" },
  { name: "Create sample", path: "/sample" },
  { name: "New registration", path: "/register" },
  { name: "logout", path: "/logout" },
];

const userNav = [
  { name: "Home", path: "/home" },
  { name: "user", path: "/details" },
  { name: "logout", path: "/logout" },
];
function Navbar() {
  const [navbar, setNavbar] = useState([]);

  useEffect(async () => {
    const role = await localStorage.getItem("role");
    console.log(role, "role after login =============>");
    if (role === "user") {setNavbar(userNav)}
    else  setNavbar(adminNav);
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navclass bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            LaboX
          </a>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {navbar?.map((val) => (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={val.path}>
                      {val.name}
                    </NavLink>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
