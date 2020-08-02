import React, {useRef, useState} from 'react';
import './GenerateLinkForm.css';
import LinkInput from './LinkInput'
import generateShortLink from "./ShortLinkGenerator";
import LastLink from "./LastLink";
import LinkList from "./LinkList";

const styles = {
  ".generateLinkForm" : {
    width: "50%",
    margin: "0 auto",
  }
}

function GenerateLinkForm() {

  let [lastLink, setLastLink] = useState({shown: false, userLink: "", shortLink: ""});
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
  }

  return (
    <div className="generateLinkForm" style={styles[".generateLinkForm"]}>
      <h1>Generate link here</h1>
      <LinkInput onClickCreateLink={onClickCreateLink}/>
      {lastLink.shown ? <LastLink lastLink={lastLink}/> : null}
      <LinkList />
    </div>
  );
}

export default GenerateLinkForm;
