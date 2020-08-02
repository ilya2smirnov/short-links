import React from "react";
import {nanoid} from 'nanoid';

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
  }
}

function Link(props) {
  return (
    <li style={styles.li}>
      <input type="checkbox"/>
      <div>{props.link.fullLink}</div>
      <div>{props.link.host + "/" + props.link.shortLink}</div>
    </li>
  );
}

export default Link;