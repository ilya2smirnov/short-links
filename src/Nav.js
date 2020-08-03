import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as SignInStatus from "./signInStatus";

function Nav(props) {
  let [userPass, setUserPass]
    = useState([SignInStatus.username, SignInStatus.password]);

  let setUserPassCallback = function (user, pass) {
    console.log("setUserPass", user, pass);
    SignInStatus.setUsername(user);
    SignInStatus.setPassword(pass);
    setUserPass([user, pass]);
  }

  props.userPassSetterWrapper.set = setUserPassCallback;

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {SignInStatus.username ? null : <li><Link to="/sign-in">Sign in</Link></li>}
        {SignInStatus.username ? null : <li><Link to="/sign-up">Sign up</Link></li>}
        {SignInStatus.username ? <li><Link to="/sign-out">Sign out</Link></li> : null}
      </ul>
    </nav>
  )
}

export default Nav;