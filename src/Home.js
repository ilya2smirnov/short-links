import React from "react";

function Home(props) {
  return (
    <>
    <h1>Home</h1>
      {props.userPass.get().username ? <h2>Hello {props.userPass.get().username}</h2> : null}
    </>
  );
}

export default Home;
