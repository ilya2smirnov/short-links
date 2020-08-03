import React from "react";
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

function App() {
  let userPass = {};
  return (
    <Router>
      <div>
      <Nav userPass={userPass}/>
      <Switch>
        <Route path="/sign-in">
          <SignIn userPass={userPass}/>
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/links">
          <GenerateLinkForm userPass={userPass}/>
        </Route>
        <Route path="/">
          <Home userPass={userPass}/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;