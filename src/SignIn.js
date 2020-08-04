import React, {useRef} from "react";
import {checkCreds} from "./ApiHandler"
import { useHistory } from "react-router-dom";

function SignIn(props) {
  let history = useHistory();
  let usernameInput = useRef();
  let passwordInput = useRef();

  function onSubmit(event) {
    event.preventDefault();
    console.log(usernameInput.current.value)
    console.log(passwordInput.current.value)
    checkCreds(usernameInput.current.value, passwordInput.current.value)
      .then(() => {
        props.userPass.set(usernameInput.current.value, passwordInput.current.value);
        history.push("/links");
      }).catch(err => {
        console.log(err);
    })
  }

  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={onSubmit}>
        <p>Login</p>
        <p><input type="text" ref={usernameInput}/></p>
        <p>Password</p>
        <p><input type="text" ref={passwordInput}/></p>
        <p><input type="submit" value="Sign in"/></p>
      </form>
    </>
  )
}

export default SignIn;