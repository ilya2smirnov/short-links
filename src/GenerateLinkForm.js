import React, {useRef, useState} from 'react';
import './App.css';
import LinkInput from './LinkInput'
import generateShortLink from "./ShortLinkGenerator";
import LastLink from "./LastLink";

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
        console.log("Skip hiding link:", newLastLink.shortLink, "because currect link is", lastLinkRef.current.shortLink);
      }
    }, 3000);
  }

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <LinkInput onClickCreateLink={onClickCreateLink}/>
      {lastLink.shown ? <LastLink lastLink={lastLink}/> : null}
    </div>
  );
}

export default GenerateLinkForm;
