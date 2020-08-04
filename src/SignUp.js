import React, {useRef} from "react";
import {useHistory} from "react-router-dom";
import {addNewUser} from "./ApiHandler";

function SignUp(props) {
  let history = useHistory();
  let usernameInput = useRef();
  let passwordInput = useRef();

  function formOnSubmit(event) {
    event.preventDefault();
    console.log(usernameInput.current.value)
    console.log(passwordInput.current.value)
    addNewUser(usernameInput.current.value, passwordInput.current.value)
      .then(() => {
        props.userPass.set(usernameInput.current.value, passwordInput.current.value);
        history.push("/links");
      }).catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={formOnSubmit}>
        <p>Login</p>
        <input name="Login" type="text" ref={usernameInput}/>
        <p>Password</p>
        <input name="Password" type="text" ref={passwordInput}/>
        <input type="submit" value="Sign up"/>
      </form>
    </>
  )
}

export default SignUp;