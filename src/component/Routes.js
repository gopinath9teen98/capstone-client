/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Route, Switch } from "react-router-dom";
import { userAction } from "../redux/actions/userAction";
import EnterSample from "./EnterSample";
import Errorpage from "./ErrorPage";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Navbar from "./Navbar";
import Registration from "./Registration";
import UserData from "./UserData";

function Routes() {
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.isAuth);

  useEffect(async () => {
    const role = await localStorage.getItem("role");


    if (role) {
      dispatch(userAction(true));
    } else {
      dispatch(userAction(false));
    }
  }, []);
  return (
    <>
      {isLogin && <Navbar />}

      {!isLogin ? (
        <>
          <Route path="/">
            <Login />
          </Route>
        </>
      ) : (
        <>
          <Switch>
          <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/register">
              <Registration />
            </Route>

            <Route exact path="/details">
              <UserData />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route path="/sample">
              <EnterSample />
            </Route>
            <Route>
              <Errorpage />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}

export default Routes;
