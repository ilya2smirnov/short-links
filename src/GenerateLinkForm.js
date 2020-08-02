import React, {useRef, useState} from 'react';
import './GenerateLinkForm.css';
import LinkInput from './LinkInput'
import generateShortLink from "./ShortLinkGenerator";
import LastLink from "./LastLink";
import LinkList from "./LinkList";
import addNewLinkAndGetCurrentList from "./ApiHandler"

const styles = {
  ".generateLinkForm" : {
    width: "50%",
    margin: "0 auto",
  }
}

function GenerateLinkForm() {

  let [lastLink, setLastLink] = useState({shown: false, userLink: "", shortLink: ""});
  let [links, setLinks] = useState([{_id: "id1", shortLink: "Scfg4w2", fullLink: "http://yandex.ru", host: "http://localhost:3000"}]);
  let lastLinkRef = useRef(lastLink);
  lastLinkRef.current = lastLink;

  function onClickCreateLink(userLink) {
    let newLastLink = {shown: true, userLink: userLink, shortLink: generateShortLink(userLink)};
    setLastLink(newLastLink)
    lastLinkRef.current = newLastLink;

    setTimeout(() => {
      if (newLastLink === lastLinkRef.current) {
        console.log("Hide link:", newLastLink.shortLink);
        setLastLink({...newLastLink, shown: false});
      } else {
        console.log("Skip hiding link:", newLastLink.shortLink, "because current link is", lastLinkRef.current.shortLink);
      }
    }, 3000);

    addNewLinkAndGetCurrentList(userLink)
      .then(res => {
        setLinks(res['Link list']);
      });
  }

  return (
    <div className="generateLinkForm" style={styles[".generateLinkForm"]}>
      <h1>Generate link here</h1>
      <LinkInput onClickCreateLink={onClickCreateLink}/>
      {lastLink.shown ? <LastLink lastLink={lastLink}/> : null}
      <LinkList links={links}/>
    </div>
  );
}

export default GenerateLinkForm;
