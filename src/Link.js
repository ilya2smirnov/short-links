import React from "react";

function Link(props) {
  return (
    <li><div>{props.link.fullLink}</div><div>{props.link.host + "/" + props.link.shortLink}</div></li>
  );
}

export default Link;