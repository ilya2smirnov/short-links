import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as SignInStatus from "./signInStatus";

function Nav(props) {
  let [userPass, setUserPass]
    = useState({username: SignInStatus.username, password: SignInStatus.password});

  props.userPass.set = function (username, password) {
    console.log("setUserPass", username, password);
    SignInStatus.setUsername(username);
    SignInStatus.setPassword(password);
    setUserPass({username, password});
  };
  props.userPass.get = () => userPass;

  function onSignOutClick(event) {
    props.userPass.set("", "");
  }

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {SignInStatus.username ? null : <li><Link to="/sign-in">Sign in</Link></li>}
        {SignInStatus.username ? null : <li><Link to="/sign-up">Sign up</Link></li>}
        {SignInStatus.username ? <li><Link onClick={onSignOutClick} to="/sign-out">Sign out</Link></li> : null}
      </ul>
    </nav>
  )
}

export default Nav;