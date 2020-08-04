import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as SignInStatus from "./signInStatus";

function Nav(props) {
  let [state, setState] = useState({});
  props.navState.set = setState;

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