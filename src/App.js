import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as SignInStatus from "./signInStatus";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  SignInStatus.setUsername("");
  SignInStatus.setPassword("");
  return (
    <Router>
      <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {SignInStatus.username ? null : <li><Link to="/sign-in">Sign in</Link></li>}
          {SignInStatus.username ? null : <li><Link to="/sign-up">Sign up</Link></li>}
          {SignInStatus.username ? <li><Link to="/sign-out">Sign out</Link></li> : null}
        </ul>
      </nav>

      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
      </div>
    </Router>

  );
}

export default App;