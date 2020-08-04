import React, {useState} from "react";

function Home(props) {
  let [state, setState] = useState(props.userPass.get().username);
  props.homeState.set = setState;
  return (
    <>
    <h1>Home</h1>
      {props.userPass.get().username ? <h2>Hello {props.userPass.get().username}</h2> : null}
    </>
  );
}

export default Home;
