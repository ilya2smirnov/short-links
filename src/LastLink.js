import React, {useContext} from "react";
import AppContext from "./AppContext";

function LastLink() {
  let context = useContext(AppContext);
  return <p>{context.lastLink.shortLink}</p>;
}

export default LastLink;