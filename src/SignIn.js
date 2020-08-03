import React, {useRef} from "react";

function SignIn() {
  let usernameInput = useRef();
  let passwordInput = useRef();

  function onSubmit(event) {
    event.preventDefault();

  }

  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={onSubmit}>
        <div>Login</div>
        <input type="text" ref={usernameInput}/>
        <div>Password</div>
        <input type="text" ref={passwordInput}/>
        <input type="submit" value="Sign in"/>
      </form>
    </>
  )
}

export default SignIn;