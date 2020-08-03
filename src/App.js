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
  let userPassSetterWrapper = {};
  return (
    <Router>
      <div>
      <Nav userPassSetterWrapper={userPassSetterWrapper}/>
      <Switch>
        <Route path="/sign-in">
          <SignIn userPassSetterWrapper={userPassSetterWrapper}/>
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/links">
          <GenerateLinkForm />
        </Route>
        <Route path="/">
          <Home userPassSetterWrapper={userPassSetterWrapper}/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;