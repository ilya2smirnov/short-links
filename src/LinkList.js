import React, {useState} from "react";
import Link from "./Link"

function LinkList(props) {
  return (
    <ul>
      {props.links.map(link => {
        return <Link link={link}/>;
      })}
    </ul>
  );
}

export default LinkList;