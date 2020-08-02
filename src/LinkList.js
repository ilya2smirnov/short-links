import React, {useState} from "react";
import Link from "./Link"

function LinkList() {
  let [links, setLinks] = useState([{_id: "id1", shortLink: "Scfg4w2", fullLink: "http://yandex.ru", host: "http://localhost:3000"}]);
  return (
    <ul>
      {links.map(link => {
        return <Link link={link}/>;
      })}
    </ul>
  );
}

export default LinkList;