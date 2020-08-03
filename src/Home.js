import React from "react";

function Home(props) {
  props.userPassSetterWrapper.set("", "");
  return (
    <h1>Home</h1>
  );
}

export default Home;
