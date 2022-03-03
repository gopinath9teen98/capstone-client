import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userAction } from "../redux/actions/userAction";

function Logout() {
  const dispatch = useDispatch();

  const history = useHistory();
  useEffect(() => {
    dispatch(userAction(false));
    localStorage.clear();
    fetch("/logout", {
      methods: "GET",
      headers: {
        ACCEPT: "application/json",
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        history.push("/login", { replace: true });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>Looading... </h1>
    </div>
  );
}

export default Logout;
