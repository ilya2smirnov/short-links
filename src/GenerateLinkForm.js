import React, {useEffect, useRef, useState} from 'react';
import './GenerateLinkForm.css';
import LinkInput from './LinkInput'
import generateShortLink from "./ShortLinkGenerator";
import LastLink from "./LastLink";
import LinkList from "./LinkList";
import {addNewLink, getCurrentList} from "./ApiHandler"

const styles = {
  ".generateLinkForm" : {
    width: "50%",
    margin: "0 auto",
  }
}

function GenerateLinkForm() {

  let [lastLink, setLastLink] = useState({shown: false, userLink: "", shortLink: ""});
  let [links, setLinks] = useState([{mock: true, _id: "id1", shortLink: "Scfg4w2", fullLink: "http://yandex.ru"
    , host: "http://localhost:3000"}]);
  let lastLinkRef = useRef(lastLink);
  lastLinkRef.current = lastLink;

  useEffect(() => {
    if (links.length && links[0].mock) {
      getCurrentList()
        .then(res => {
          setLinks(res);
        })
    }
  });

  function onClickCreateLink(userLink) {
    addNewLink(userLink)
      .then(res => {
        let newLastLink = {shown: true, userLink: res.fullLink, shortLink: res.host + "/" + res.shortLink};
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
      });
    getCurrentList()
      .then(res => {
        setLinks(res);
      })
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
