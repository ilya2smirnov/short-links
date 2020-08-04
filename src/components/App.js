import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import GenerateLinkForm from "./GenerateLinkForm";
import Nav from "./Nav"
import Home from "./Home"
import * as SignInStatus from "../signInStatus";

function App() {
  let [state] = useState({homeState: {},
    userPass: {}, navState: {}});

  state.userPass.set = function (username, password) {
    console.log("setUserPass", username, password);
    SignInStatus.setUsername(username);
    SignInStatus.setPassword(password);
    state.navState.set({username});
    state.homeState.set({username});
  };

  state.userPass.get = () => {
    return {username: SignInStatus.username, password: SignInStatus.password};
  };

  return (
    <Router>
      <div>
      <Nav userPass={state.userPass} navState={state.navState} />
      <Switch>
        <Route path="/sign-in">
          <SignIn userPass={state.userPass}/>
        </Route>
        <Route path="/sign-up">
          <SignUp userPass={state.userPass}/>
        </Route>
        <Route path="/links">
          <GenerateLinkForm userPass={state.userPass}/>
        </Route>
        <Route path="/">
          <Home userPass={state.userPass} homeState={state.homeState}/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;