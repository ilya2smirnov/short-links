import React, {useState} from "react";
import Link from "./Link"
import {nanoid} from "nanoid";

function LinkList(props) {
  return (
    <ul>
      {props.links.map(link => {
        return <Link link={link} key={nanoid()}/>;
      })}
    </ul>
  );
}

export default LinkList;